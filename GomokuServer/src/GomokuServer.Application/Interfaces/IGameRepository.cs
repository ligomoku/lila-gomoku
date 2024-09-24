﻿using System.Linq.Expressions;

namespace GomokuServer.Application.Interfaces;

public interface IGameRepository
{
	Task<Result<Game>> GetAsync(string id);

	Task<Result> SaveAsync(Game game);

	Task<Result<IEnumerable<Game>>> GetByExpressionAsync(Expression<Func<Game, bool>> expression);
}
