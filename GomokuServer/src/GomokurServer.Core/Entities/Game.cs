﻿using GomokuServer.Core.Results;
using GomokuServer.Core.Validation;

namespace GomokuServer.Core.Entities;

public class Game
{
	private readonly List<GameMove> _playersMoves = new();

	public string GameId { get; } = Guid.NewGuid().ToString();

	public required GameBoard GameBoard { get; init; }

	public IReadOnlyList<GameMove> PlayersMoves => _playersMoves.AsReadOnly();

	public Player? PlayerOne { get; private set; }

	public Player? PlayerTwo { get; private set; }

	public bool HasBothPlayersJoined
	{
		get
		{
			return PlayerOne != null && PlayerTwo != null;
		}
	}

	public bool IsGameStarted
	{
		get
		{
			return PlayerOne != null && PlayerTwo != null && _playersMoves.Count > 0;
		}
	}

	public string? WinnerId { get; set; }

	public PlayerAddingResult AddPlayer(Player player)
	{
		if (PlayerOne != null && PlayerTwo != null)
		{
			return new()
			{
				IsValid = false,
				ValidationError = PlayerAddingValidationError.BothPlacesTakenAlready
			};
		}

		if (PlayerOne == null)
		{
			PlayerOne = player;
			return new()
			{
				IsValid = true
			};
		}

		if (PlayerOne.Id == player.Id)
		{
			return new()
			{
				IsValid = false,
				ValidationError = PlayerAddingValidationError.PlayerAlreadyAddedToGame,
			};
		}

		PlayerTwo = player;
		return new()
		{
			IsValid = true,
		};
	}

	public TilePlacementResult PlaceTile(Tile tile, string playerId)
	{
		if (WinnerId != null)
		{
			return new()
			{
				IsValid = false,
				ValidationError = TilePlacementValidationError.GameIsOver,
				WinnerId = WinnerId,
			};
		}

		if (!HasBothPlayersJoined)
		{
			return new()
			{
				IsValid = false,
				ValidationError = TilePlacementValidationError.NotBothPlayerAreJoinedYet,
			};
		}

		if (PlayerOne!.Id != playerId && PlayerTwo!.Id != playerId)
		{
			return new()
			{
				IsValid = false,
				ValidationError = TilePlacementValidationError.PlayerIsNotInvolvedInAGame,
			};
		}

		var tilePlacementResult = GameBoard.PlaceTile(tile, playerId);

		if (tilePlacementResult.IsValid)
		{
			var move = new GameMove()
			{
				MoveNumber = _playersMoves.Count / 2 + 1,
				PlayerId = playerId,
				Tile = tile,
			};
			_playersMoves.Add(move);
		}

		if (tilePlacementResult.WinnerId != null)
		{
			WinnerId = tilePlacementResult.WinnerId;
		}

		return tilePlacementResult;
	}
}
