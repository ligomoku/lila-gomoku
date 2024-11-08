﻿namespace GomokuServer.Application.Games.Queries;

public record GetAvailableToJoinRegisteredGamesQuery : GetAvailableToJoinGamesQuery;

public class GetAvailableToJoinRegisteredGamesQueryHandler(IRegisteredGamesRepository _registeredGamesRepository)
	: GetAvailableToJoinGamesQueryHandler<GetAvailableToJoinRegisteredGamesQuery>(_registeredGamesRepository);
