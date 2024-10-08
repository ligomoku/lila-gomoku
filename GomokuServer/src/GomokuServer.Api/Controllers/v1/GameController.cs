﻿using GomokuServer.Api.Hubs.Messages.Server;
using GomokuServer.Api.Swagger.Examples;

using Microsoft.AspNetCore.Authorization;

namespace GomokuServer.Api.Controllers.v1;

[ApiController]
[ApiVersion("1.0")]
[Route("api/[controller]")]
[EnableCors(CorsPolicyName.GomokuClient)]
[Consumes(MediaTypeNames.Application.Json)]
[Produces(MediaTypeNames.Application.Json)]
public class GameController : Controller
{
	private readonly IMediator _mediator;
	private readonly IHubContext<GameHub> _gameHubContext;

	public GameController(IMediator mediator, IHubContext<GameHub> gameHubContext)
	{
		_mediator = mediator;
		_gameHubContext = gameHubContext;
	}

	/// <summary>
	/// Get game history by game id
	/// </summary>
	/// <response code="200">Information about game </response>
	/// <response code="404">Game by id not found</response>
	[HttpGet("{gameId}/history")]
	[ProducesResponseType(typeof(GetGameHistoryResponse), StatusCodes.Status200OK)]
	[ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status404NotFound)]
	[SwaggerResponseExample(StatusCodes.Status404NotFound, typeof(NotFoundErrorExample))]
	public async Task<IActionResult> GetGameHistory([FromRoute] string gameId)
	{
		var getGameSessionResult = await _mediator.Send(new GetGameHistoryQuery { GameId = gameId });
		return getGameSessionResult.ToApiResponse();
	}

	/// <summary>
	/// Get all games available to join
	/// </summary>
	/// <response code="200">Returns list of games that are available to join</response>
	[HttpGet]
	[Route("/api/games/available-to-join")]
	[ProducesResponseType(typeof(PaginatedResponse<IEnumerable<GetAvailableGamesResponse>>), StatusCodes.Status200OK)]
	public async Task<IActionResult> GetAvailableGames([FromQuery] PaginationRequest request)
	{
		var query = new GetAvailableToJoinGamesQuery
		{
			Limit = request.Limit,
			Offset = request.Offset
		};

		var availableGamesResult = await _mediator.Send(query);
		return availableGamesResult.ToApiResponse();
	}

	/// <summary>
	/// Create new game (supports both anonymous and authenticated users)
	/// </summary>
	/// <response code="200">Returns information about newly created game</response>
	[HttpPost]
	[AllowAnonymous] // Allow anonymous users to access this endpoint
	[ProducesResponseType(typeof(CreateGameResponse), StatusCodes.Status200OK)]
	[ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status400BadRequest)]
	[SwaggerResponseExample(StatusCodes.Status400BadRequest, typeof(BadRequestErrorExample))]
	public async Task<IActionResult> CreateNewGame([FromBody] CreateGameRequest request)
	{
		string? userId = User.Claims.Get(JwtClaims.UserId);
		string? userName = User.Claims.Get(JwtClaims.UserName);

		if (string.IsNullOrEmpty(userId))
		{
			userId = Guid.NewGuid().ToString();
			userName = $"Guest_{userId.Substring(0, 6)}";
		}

		var createGameResult = await _mediator.Send(new CreateGameCommand
		{
			BoardSize = request.BoardSize,
			PlayerId = userId
		});

		return createGameResult.ToApiResponse();
	}

	/// <summary>
	/// Join game (supports both anonymous and authenticated users)
	/// </summary>
	/// <response code="204">Player with specified id successfully joined the game</response>
	/// <response code="404">Game or player with specified id not found</response>
	[HttpPost("{gameId}/join")]
	[AllowAnonymous] // Allow anonymous users to access this endpoint
	[ProducesResponseType(StatusCodes.Status204NoContent)]
	[ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status404NotFound)]
	[SwaggerResponseExample(StatusCodes.Status404NotFound, typeof(NotFoundErrorExample))]
	public async Task<IActionResult> AddPlayerToGame([FromRoute] string gameId)
	{
		string? userId = User.Claims.Get(JwtClaims.UserId);
		string? userName = User.Claims.Get(JwtClaims.UserName);

		if (string.IsNullOrEmpty(userId))
		{
			userId = Guid.NewGuid().ToString();
			userName = $"Guest_{userId.Substring(0, 6)}";
		}

		var addPlayerToGameResult = await _mediator.Send(new AddPlayerToGameCommand
		{
			GameId = gameId,
			PlayerId = userId
		});

		if (addPlayerToGameResult.IsSuccess)
		{
			var message = new PlayerJoinedGameMessage { UserName = userName! };
			await _gameHubContext.Clients.Group(gameId).SendAsync(GameHubMethod.PlayerJoinedGame, message);
		}

		return addPlayerToGameResult.ToApiResponse();
	}
}
