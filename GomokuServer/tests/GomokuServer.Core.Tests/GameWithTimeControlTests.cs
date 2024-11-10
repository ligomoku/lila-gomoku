﻿using GomokuServer.Core.Common.Interfaces;
using GomokuServer.Core.Games.Entities;
using GomokuServer.Core.Games.Enums;
using GomokuServer.Core.Games.Validations;

namespace GomokuServer.Core.UnitTests;

public class GameWithTimeControlTests
{
	private GameWithTimeControlSettings _settings;
	private Players _players;
	private IDateTimeProvider _dateTimeProvider;
	private GameWithTimeControl _game;

	[SetUp]
	public void SetUp()
	{
		_settings = new GameWithTimeControlSettings()
		{
			GameId = Guid.NewGuid(),
			BoardSize = 15,
			TimeControl = new TimeControl(180, 0)
		};
		var blackPlayer = new Player("Player1Id", "Player1UserName", TileColor.Black);
		var whitePlayer = new Player("Player2Id", "Player2UserName", TileColor.White);
		_players = new Players(blackPlayer, whitePlayer);
		_dateTimeProvider = Substitute.For<IDateTimeProvider>();
		_dateTimeProvider.UtcNowUnixTimeMilliseconds.Returns(1_000_000);

		_game = new GameWithTimeControl(_settings, _players, _dateTimeProvider);
	}

	[Test]
	public void PlaceTile_ClockShouldNotTickBeforeFirstMoveIsMade()
	{
		// Arrange
		_dateTimeProvider.UtcNowUnixTimeMilliseconds.Returns(2_000_000);

		// Act
		var result = _game.PlaceTile(new Tile(1, 1), _game.Players.Black.Id);

		// Assert
		result.IsValid.Should().BeTrue();
		_game.Result.Should().Be(GameResult.NotCompletedYet);
		_game.Status.Should().Be(GameStatus.InProgress);
		_game.CompletionReason.Should().Be(CompletionReason.NotCompletedYet);
	}

	[Test]
	public void PlaceTile_ClockShouldNotTickBeforeSecondMoveIsMade()
	{
		// Arrange
		_game.PlaceTile(new Tile(1, 1), _game.Players.Black.Id);
		_dateTimeProvider.UtcNowUnixTimeMilliseconds.Returns(2_000_000);

		// Act
		var result = _game.PlaceTile(new Tile(2, 2), _game.Players.White.Id);

		// Assert
		result.IsValid.Should().BeTrue();
		_game.Result.Should().Be(GameResult.NotCompletedYet);
		_game.Status.Should().Be(GameStatus.InProgress);
		_game.CompletionReason.Should().Be(CompletionReason.NotCompletedYet);
	}

	[Test]
	public void PlaceTile_BlackClockShouldTickAfterSecondMoveIsMade()
	{
		// Arrange
		_game.PlaceTile(new Tile(1, 1), _game.Players.Black.Id);
		_game.PlaceTile(new Tile(2, 2), _game.Players.White.Id);
		_dateTimeProvider.UtcNowUnixTimeMilliseconds.Returns(1_100_000);

		// Assert
		_game.BlackRemainingTimeInMilliseconds.Should().Be(80_000);
	}

	[Test]
	public void PlaceTile_WhiteClockShouldTickAfterSecondMoveIsMade()
	{
		// Arrange
		_game.PlaceTile(new Tile(1, 1), _game.Players.Black.Id);
		_game.PlaceTile(new Tile(2, 2), _game.Players.White.Id);
		_game.PlaceTile(new Tile(3, 3), _game.Players.Black.Id);
		_dateTimeProvider.UtcNowUnixTimeMilliseconds.Returns(1_100_000);

		// Assert
		_game.WhiteRemainingTimeInMilliseconds.Should().Be(80_000);
	}

	[Test]
	public void PlaceTime_WhenTimeIsNotOver_ShouldBeSuccess()
	{
		// Act
		var result = _game.PlaceTile(new Tile(0, 0), _game.Players.Black.Id);

		// Assert
		result.IsValid.Should().BeTrue();
		_game.Result.Should().Be(GameResult.NotCompletedYet);
		_game.Status.Should().Be(GameStatus.InProgress);
		_game.CompletionReason.Should().Be(CompletionReason.NotCompletedYet);
	}

	[Test]
	public void PlaceTile_WhenTimeIsOver_ShouldBeError_AndGameStateShouldBeCorrect()
	{
		// Arrange
		_game.PlaceTile(new Tile(0, 0), _game.Players.Black.Id);
		_game.PlaceTile(new Tile(1, 1), _game.Players.White.Id);
		_dateTimeProvider.UtcNowUnixTimeMilliseconds.Returns(1_181_000);

		// Act
		var result = _game.PlaceTile(new Tile(2, 2), _game.Players.Black.Id);

		// Assert
		result.IsValid.Should().BeFalse();
		result.ValidationError.Should().Be(TilePlacementValidationError.TimeOut);
		_game.Result.Should().Be(GameResult.WhiteWon);
		_game.Status.Should().Be(GameStatus.Completed);
		_game.CompletionReason.Should().Be(CompletionReason.TimeOut);
	}

	[Test]
	public void WhenGameIsOver_AfterWinningMove_BothClockShouldStop()
	{
		// Arrange
		_game.PlaceTile(new Tile(0, 0), _game.CurrentPlayer!.Id);
		_game.PlaceTile(new Tile(0, 1), _game.CurrentPlayer!.Id);
		_game.PlaceTile(new Tile(1, 1), _game.CurrentPlayer!.Id);
		_game.PlaceTile(new Tile(0, 2), _game.CurrentPlayer!.Id);
		_game.PlaceTile(new Tile(2, 2), _game.CurrentPlayer!.Id);
		_game.PlaceTile(new Tile(0, 3), _game.CurrentPlayer!.Id);
		_game.PlaceTile(new Tile(3, 3), _game.CurrentPlayer!.Id);
		_game.PlaceTile(new Tile(0, 4), _game.CurrentPlayer!.Id);
		_game.PlaceTile(new Tile(4, 4), _game.CurrentPlayer!.Id);
		_dateTimeProvider.UtcNowUnixTimeMilliseconds.Returns(2_000_000);

		// Assert
		_game.GetRemainingTime(_game.Players.Black.Id).Should().Be(180_000);
		_game.GetRemainingTime(_game.Players.White.Id).Should().Be(180_000);
	}

	[Test]
	public void WhenGameIsOver_AfterResign_BothClockShouldStop()
	{
		// Arrange
		_game.PlaceTile(new Tile(0, 0), _game.CurrentPlayer!.Id);
		_game.PlaceTile(new Tile(0, 1), _game.CurrentPlayer!.Id);
		_game.Resign(_game.Players.White.Id);
		_dateTimeProvider.UtcNowUnixTimeMilliseconds.Returns(2_000_000);

		// Act

		// Assert
		_game.GetRemainingTime(_game.Players.Black.Id).Should().Be(180_000);
		_game.GetRemainingTime(_game.Players.White.Id).Should().Be(180_000);
	}
}
