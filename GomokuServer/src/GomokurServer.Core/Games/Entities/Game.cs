﻿using GomokuServer.Core.Common.Interfaces;
using GomokuServer.Core.Games.Enums;
using GomokuServer.Core.Games.Extensions;
using GomokuServer.Core.Games.Results;
using GomokuServer.Core.Games.Validations;
using GomokuServer.Core.Profiles.Entities;

namespace GomokuServer.Core.Games.Entities;

public class Game
{
	private readonly Dictionary<int, Tile> _movesHistory = new();
	private readonly GameBoard _gameBoard;
	protected readonly IRandomProvider _randomProvider;
	protected readonly IDateTimeProvider _dateTimeProvider;

	public Game(int boardSize, IRandomProvider randomProvider, IDateTimeProvider dateTimeProvider)
	{
		_gameBoard = new GameBoard(boardSize);
		_randomProvider = randomProvider;
		_dateTimeProvider = dateTimeProvider;

		BoardSize = boardSize;
		Opponents = new();
		Players = new();
		CreatedAt = _dateTimeProvider.UtcNow;
		Status = GameStatus.WaitingForPlayersToJoin;
		Result = GameResult.NotCompletedYet;
	}

	public int BoardSize { get; init; }

	public string GameId { get; } = Guid.NewGuid().ToString();

	public DateTime CreatedAt { get; init; }

	public IReadOnlyDictionary<int, Tile> MovesHistory => _movesHistory.AsReadOnly();

	public List<Profile> Opponents { get; init; }

	public Players Players { get; init; }

	public GameStatus Status { get; protected set; }

	public GameResult Result { get; protected set; }

	public CompletionReason CompletionReason { get; protected set; }

	public Player? CurrentPlayer { get; protected set; }

	public Player? Winner { get; protected set; }

	public List<Tile>? WinningSequence { get; private set; }

	public string PositionInGENFormat => _gameBoard.PositionInGENFormat;

	public TileColor? NextTileColor => _gameBoard.NextTileColor;

	public PlayerAddingResult AddOpponent(Profile newOpponent)
	{
		if (Opponents.Any(opponent => opponent.Id == newOpponent.Id))
		{
			return new()
			{
				IsValid = false,
				ValidationError = PlayerAddingValidationError.PlayerAlreadyAddedToGame,
				ErrorDetails = "Player already added to game"
			};
		}

		if (Opponents.Count >= 2)
		{
			return new()
			{
				IsValid = false,
				ValidationError = PlayerAddingValidationError.BothPlacesTakenAlready,
				ErrorDetails = "Both places taken already"
			};
		}

		if (Opponents.Count == 0)
		{
			Opponents.Add(newOpponent);
			return new()
			{
				IsValid = true
			};
		}

		Opponents.Add(newOpponent);

		var (firstOpponent, secondOpponent) = _randomProvider.GetInt(0, 2) == 0 ? (Opponents[0], Opponents[1]) : (Opponents[1], Opponents[0]);
		var firstPlayer = new Player(firstOpponent.Id, firstOpponent.UserName, TileColor.Black);
		var secondPlayer = new Player(secondOpponent.Id, secondOpponent.UserName, TileColor.White);

		CurrentPlayer = firstPlayer;
		Status = GameStatus.BothPlayersJoined;
		Players.Black = firstPlayer;
		Players.White = secondPlayer;

		return new()
		{
			IsValid = true,
		};
	}

	protected virtual GameTilePlacementResult ValidateCanPlaceTile(string playerId)
	{
		if (Status == GameStatus.Completed)
		{
			return new()
			{
				IsValid = false,
				ValidationError = TilePlacementValidationError.GameIsOver,
				ErrorDetails = $"Game is over. {Result.GetString()}"
			};
		}

		if (Status == GameStatus.WaitingForPlayersToJoin)
		{
			return new()
			{
				IsValid = false,
				ValidationError = TilePlacementValidationError.NotBothPlayerAreJoinedYet,
				ErrorDetails = "Wait for other player to join"
			};
		}

		if (!IsInvolved(playerId))
		{
			return new()
			{
				IsValid = false,
				ValidationError = TilePlacementValidationError.PlayerIsNotInvolvedInAGame,
				ErrorDetails = "You are spectator in this game"
			};
		}

		if (playerId != CurrentPlayer?.Id)
		{
			return new()
			{
				IsValid = false,
				ValidationError = TilePlacementValidationError.OtherPlayerTurnNow,
				ErrorDetails = "Now is yours opponents turn"
			};
		}

		return new()
		{
			IsValid = true,
		};
	}

	public virtual GameTilePlacementResult PlaceTile(Tile tile, string playerId)
	{
		var validationResult = ValidateCanPlaceTile(playerId);

		if (!validationResult.IsValid)
		{
			return validationResult;
		}

		var placeNewTileResult = _gameBoard.PlaceNewTile(tile);

		if (!placeNewTileResult.IsValid)
		{
			return new()
			{
				IsValid = placeNewTileResult.IsValid,
				ValidationError = placeNewTileResult.ValidationError,
			};
		}

		if (_movesHistory.Count == 0)
		{
			Status = GameStatus.InProgress;
		}
		_movesHistory.Add(_movesHistory.Count + 1, tile);

		if (placeNewTileResult.IsTieSituationAfterMove)
		{
			Result = GameResult.Tie;
			Status = GameStatus.Completed;
			CompletionReason = CompletionReason.TieOnTheBoard;
		}

		if (placeNewTileResult.WinningSequence != null)
		{
			Result = CurrentPlayer!.Color == TileColor.Black ? GameResult.BlackWon : GameResult.WhiteWon;
			Status = GameStatus.Completed;
			CompletionReason = CompletionReason.MadeFiveInARow;

			Winner = CurrentPlayer;
			WinningSequence = placeNewTileResult.WinningSequence;
			CurrentPlayer = null;
		}

		if (Status == GameStatus.InProgress)
		{
			CurrentPlayer = CurrentPlayer != Players.Black ? Players.Black : Players.White;
		}

		return new()
		{
			IsValid = true,
		};
	}

	public virtual ResignResult Resign(string playerId)
	{
		if (Status == GameStatus.Completed)
		{
			return new()
			{
				IsValid = false,
				ValidationError = ResignValidationError.GameIsOver,
				ErrorDetails = $"Game is over. {Result.GetString()}"
			};
		}

		if (Status == GameStatus.WaitingForPlayersToJoin)
		{
			return new()
			{
				IsValid = false,
				ValidationError = ResignValidationError.NotBothPlayerAreJoinedYet,
				ErrorDetails = "Wait for other player to join"
			};
		}

		if (!IsInvolved(playerId))
		{
			return new()
			{
				IsValid = false,
				ValidationError = ResignValidationError.PlayerIsNotInvolvedInAGame,
				ErrorDetails = "You are spectator in this game"
			};
		}

		var winner = playerId == Players!.White!.Id ? Players.Black : Players.White;
		Winner = winner;
		Result = winner!.Color == TileColor.Black ? GameResult.BlackWon : GameResult.WhiteWon;
		Status = GameStatus.Completed;
		CompletionReason = CompletionReason.Resign;
		CurrentPlayer = null;

		return new()
		{
			IsValid = true
		};
	}

	protected virtual RematchResult ValidateCanRematch(string playerId)
	{
		if (Status != GameStatus.Completed)
		{
			return new()
			{
				IsValid = false,
				ValidationError = RematchValidationError.GameIsNotOverYet,
				ErrorDetails = $"Can't request rematch. Game is not over yet",
			};
		}

		if (!IsInvolved(playerId))
		{
			return new()
			{
				IsValid = false,
				ValidationError = RematchValidationError.PlayerIsNotInvolvedInAGame,
				ErrorDetails = "Player is not involved in the game"
			};
		}

		return new()
		{
			IsValid = true
		};
	}

	public virtual RematchResult Rematch(string playerId)
	{
		var canRematchResult = ValidateCanRematch(playerId);

		if (!canRematchResult.IsValid)
		{
			return canRematchResult;
		}

		var newGame = new Game(BoardSize, _randomProvider, _dateTimeProvider)
		{
			Opponents = new List<Profile>(Opponents),
			Players = new Players { Black = Players.White, White = Players.Black },
			Status = GameStatus.BothPlayersJoined,
			CurrentPlayer = Players.White
		};

		return RematchResult.Success(newGame);
	}

	public bool IsInvolved(string playerId)
	{
		return Opponents.Any(opponent => opponent.Id == playerId);
	}
}
