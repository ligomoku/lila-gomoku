﻿namespace GomokuServer.Core.Common.Interfaces;

public interface IDateTimeProvider
{
	DateTime UtcNow { get; }

	long UtcNowUnixTimeMilliseconds { get; }
}
