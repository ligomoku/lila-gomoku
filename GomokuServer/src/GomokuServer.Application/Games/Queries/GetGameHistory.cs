﻿namespace GomokuServer.Application.Games.Queries;

public record GetRegisteredGameHistoryQuery : GetGameHistoryQuery;

public class GetRegisteredGameHistoryQueryHandler(
	IRegisteredGamesRepository gamesRepository,
	IRegisteredPlayersAwaitingGameRepository playersAwaitingGameRepository)
	: GetGameHistoryQueryHandler<GetRegisteredGameHistoryQuery>(gamesRepository, playersAwaitingGameRepository);

public record GetAnonymousGameHistoryQuery : GetGameHistoryQuery;

public class GetAnonymousGameHistoryQueryHandler(
	IAnonymousGamesRepository gamesRepository,
	IAnonymousPlayersAwaitingGameRepository playersAwaitingGameRepository)
	: GetGameHistoryQueryHandler<GetAnonymousGameHistoryQuery>(gamesRepository, playersAwaitingGameRepository);
