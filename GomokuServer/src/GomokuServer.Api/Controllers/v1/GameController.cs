﻿using GomokuServer.Api.Attributes;

namespace GomokuServer.Api.Controllers.v1;

[ApiController]
[ApiVersion("1.0")]
[Route("api/[controller]")]
[EnableCors(CorsPolicyName.GomokuClient)]
[Consumes(MediaTypeNames.Application.Json)]
[Produces(MediaTypeNames.Application.Json)]
public class GameController : Controller
{
	private readonly IGameSessionHandler _gameSessionHandler;
	private readonly IPlayersRepository _playersRepository;
	private readonly IHubContext<GameHub> _gameHubContext;

	public GameController(IGameSessionHandler gameSessionHandler, IPlayersRepository playersRepository, IHubContext<GameHub> gameHubContext)
	{
		_gameSessionHandler = gameSessionHandler;
		_playersRepository = playersRepository;
		_gameHubContext = gameHubContext;
	}

	/// <summary>
	/// Get information about game by game id
	/// </summary>
	/// <response code="200">Information about game </response>
	/// <response code="404">Game by id not found</response>
	[HttpGet("{gameId}")]
	[ProducesResponseType(typeof(GetGameResponse), StatusCodes.Status200OK)]
	[ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status404NotFound)]
	[SwaggerResponseExample(StatusCodes.Status404NotFound, typeof(NotFoundErrorExample))]
	public async Task<IActionResult> GetGameInfo([FromRoute] string gameId)
	{
		var getGameSessionResult = await _gameSessionHandler.GetAsync(gameId);

		return getGameSessionResult.ToApiResponse();
	}

	/// <summary>
	///	Get all games, which are available to join
	/// </summary>
	/// <response code="200">Returns list of games which are available to join</response>
	[HttpGet()]
	[Route("/api/games")]
	[ProducesResponseType(typeof(IEnumerable<GetAvailableGamesResponse>), StatusCodes.Status200OK)]
	public async Task<IActionResult> GetAvailableGames()
	{
		var getAvailableGames = await _gameSessionHandler.GetAvailableGamesAsync();

		return getAvailableGames.ToApiResponse();
	}

	/// <summary>
	/// Create new game
	/// </summary>
	/// <response code="200">Returns information about new created game</response>
	[HttpPost]
	[ProducesResponseType(typeof(CreateGameResponse), StatusCodes.Status200OK)]
	[ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status400BadRequest)]
	[SwaggerResponseExample(StatusCodes.Status400BadRequest, typeof(BadRequestErrorExample))]
	[ClerkAuthorization]
	public async Task<IActionResult> CreateNewGame([FromBody] CreateGameRequest request)
	{
		var userId = User.Claims.First(c => c.Type == "userId").Value!;
		var createGameResult = await _gameSessionHandler.CreateAsync(request.BoardSize, userId);

		return createGameResult.ToApiResponse();
	}

	/// <summary>
	/// Join game
	/// </summary>
	/// <response code="200">Player with specified id successfully joined the game</response>
	/// <response code="404">Game or player with specified id not found</response>
	[HttpPost("{gameId}/join")]
	[ProducesResponseType(StatusCodes.Status200OK)]
	[ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status404NotFound)]
	[SwaggerResponseExample(StatusCodes.Status404NotFound, typeof(NotFoundErrorExample))]
	[ClerkAuthorization]
	public async Task<IActionResult> AddPlayerToGame([FromRoute] string gameId)
	{
		var userId = User.Claims.First(c => c.Type == "userId").Value!;
		var addPlayerToGameResult = await _gameSessionHandler.AddPlayerToGameAsync(gameId, userId);

		if (addPlayerToGameResult.IsSuccess)
		{
			await _gameHubContext.Clients.Group(gameId).SendAsync(GameHubMethod.PlayerJoinedGame, userId);
		}

		return addPlayerToGameResult.ToApiResponse();
	}

	/// <summary>
	/// Make move in a game
	/// </summary>
	/// <response code="200">Move successfully made</response>
	/// <response code="400">Required data is not provided</response>
	/// <response code="404">Game or player with specified id not found</response>
	[HttpPost("{gameId}/make-move")]
	[ProducesResponseType(typeof(PlaceTileResponse), StatusCodes.Status200OK)]
	[ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status400BadRequest)]
	[ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status404NotFound)]
	[SwaggerResponseExample(StatusCodes.Status400BadRequest, typeof(BadRequestErrorExample))]
	[SwaggerResponseExample(StatusCodes.Status404NotFound, typeof(NotFoundErrorExample))]
	[ClerkAuthorization]
	public async Task<IActionResult> MakeMove([FromRoute] string gameId, [FromBody] MakeMoveRequest request)
	{
		var userId = User.Claims.First(c => c.Type == "userId").Value!;
		var placeTileResult = await _gameSessionHandler.PlaceTileAsync(gameId, new TileDto(request.X, request.Y), userId);

		if (placeTileResult.IsSuccess)
		{
			await _gameHubContext.Clients.Group(gameId).SendAsync(GameHubMethod.PlayerMadeMove, userId, request.X, request.Y);
		}

		return placeTileResult.ToApiResponse();
	}
}
