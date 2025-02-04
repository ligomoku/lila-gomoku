﻿using GomokuServer.Application.Games.Commands.Abstract;
using GomokuServer.Core.Profiles.Entities;

namespace GomokuServer.Application.Games.Commands;

public record AddRegisteredPlayerToGameCommand : AddPlayerToGameCommand;

public class AddRegisteredPlayerToGameCommandHandler(
	IRegisteredPlayersAwaitingGameRepository _registeredPlayersAwaitingGameRepository,
	IRegisteredGamesRepository _registeredGamesRepository,
	IProfilesRepository _profilesRepository)
	: AddPlayerToGameCommandHandler<AddRegisteredPlayerToGameCommand>(_registeredPlayersAwaitingGameRepository, _registeredGamesRepository)
{
	public override async Task<Result<Profile>> GetProfileAsync(AddRegisteredPlayerToGameCommand request)
	{
		return await _profilesRepository.GetAsync(request.PlayerId);
	}
}

public record AddAnonymousPlayerToGameCommand : AddPlayerToGameCommand;

public class AddAnonymousPlayerToGameCommandHandler(
	IAnonymousPlayersAwaitingGameRepository _anonymousPlayersAwaitingGameRepository,
	IAnonymousGamesRepository _anonymousGamesRepository)
	: AddPlayerToGameCommandHandler<AddAnonymousPlayerToGameCommand>(_anonymousPlayersAwaitingGameRepository, _anonymousGamesRepository)
{
	public override Task<Result<Profile>> GetProfileAsync(AddAnonymousPlayerToGameCommand request)
	{
		var playerId = request.PlayerId;
		return Task.FromResult(Result.Success(new Profile(playerId, $"Guest {playerId[..6]}")));
	}
}
