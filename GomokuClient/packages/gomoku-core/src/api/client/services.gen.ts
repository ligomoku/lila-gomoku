// This file is auto-generated by @hey-api/openapi-ts

import {
  createClient,
  createConfig,
  type Options,
} from "@hey-api/client-fetch";
import type {
  GetApiGameByGameIdHistoryData,
  GetApiGameByGameIdHistoryError,
  GetApiGameByGameIdHistoryResponse,
  GetApiGamesAvailableToJoinData,
  GetApiGamesAvailableToJoinError,
  GetApiGamesAvailableToJoinResponse,
  GetApiGamesActiveData,
  GetApiGamesActiveError,
  GetApiGamesActiveResponse,
  PostApiGameData,
  PostApiGameError,
  PostApiGameResponse,
  PostApiGameByGameIdJoinData,
  PostApiGameByGameIdJoinError,
  PostApiGameByGameIdJoinResponse,
  GetHealthData,
  GetHealthError,
  GetHealthResponse,
  GetApiProfilesByUserNameGamesData,
  GetApiProfilesByUserNameGamesError,
  GetApiProfilesByUserNameGamesResponse,
  PostGamehubJoinGameGroupData,
  PostGamehubGetClockData,
  PostGamehubMakeMoveData,
  PostGamehubResignData,
  PostGamehubRequestRematchData,
  PostGamehubApproveRematchData,
  PostGamehubSendMessageData,
} from "./types.gen";

export const client = createClient(createConfig());

/**
 * Get game history by game id
 */
export const getApiGameByGameIdHistory = <ThrowOnError extends boolean = false>(
  options: Options<GetApiGameByGameIdHistoryData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    GetApiGameByGameIdHistoryResponse,
    GetApiGameByGameIdHistoryError,
    ThrowOnError
  >({
    ...options,
    url: "/api/game/{gameId}/history",
  });
};

/**
 * Get all games available to join
 */
export const getApiGamesAvailableToJoin = <
  ThrowOnError extends boolean = false,
>(
  options: Options<GetApiGamesAvailableToJoinData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    GetApiGamesAvailableToJoinResponse,
    GetApiGamesAvailableToJoinError,
    ThrowOnError
  >({
    ...options,
    url: "/api/games/available-to-join",
  });
};

/**
 * Get all active games
 */
export const getApiGamesActive = <ThrowOnError extends boolean = false>(
  options: Options<GetApiGamesActiveData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    GetApiGamesActiveResponse,
    GetApiGamesActiveError,
    ThrowOnError
  >({
    ...options,
    url: "/api/games/active",
  });
};

/**
 * Create new game (supports both anonymous and authenticated users)
 */
export const postApiGame = <ThrowOnError extends boolean = false>(
  options: Options<PostApiGameData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    PostApiGameResponse,
    PostApiGameError,
    ThrowOnError
  >({
    ...options,
    url: "/api/game",
  });
};

/**
 * Join game (supports both anonymous and authenticated users)
 */
export const postApiGameByGameIdJoin = <ThrowOnError extends boolean = false>(
  options: Options<PostApiGameByGameIdJoinData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    PostApiGameByGameIdJoinResponse,
    PostApiGameByGameIdJoinError,
    ThrowOnError
  >({
    ...options,
    url: "/api/game/{gameId}/join",
  });
};

/**
 * Health check endpoint
 */
export const getHealth = <ThrowOnError extends boolean = false>(
  options: Options<GetHealthData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    GetHealthResponse,
    GetHealthError,
    ThrowOnError
  >({
    ...options,
    url: "/health",
  });
};

/**
 * Get games for specific user
 */
export const getApiProfilesByUserNameGames = <
  ThrowOnError extends boolean = false,
>(
  options: Options<GetApiProfilesByUserNameGamesData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    GetApiProfilesByUserNameGamesResponse,
    GetApiProfilesByUserNameGamesError,
    ThrowOnError
  >({
    ...options,
    url: "/api/profiles/{userName}/games",
  });
};

export const postGamehubJoinGameGroup = <ThrowOnError extends boolean = false>(
  options?: Options<PostGamehubJoinGameGroupData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<void, unknown, ThrowOnError>({
    ...options,
    url: "/gamehub/JoinGameGroup",
  });
};

export const postGamehubGetClock = <ThrowOnError extends boolean = false>(
  options?: Options<PostGamehubGetClockData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<void, unknown, ThrowOnError>({
    ...options,
    url: "/gamehub/GetClock",
  });
};

export const postGamehubMakeMove = <ThrowOnError extends boolean = false>(
  options?: Options<PostGamehubMakeMoveData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<void, unknown, ThrowOnError>({
    ...options,
    url: "/gamehub/MakeMove",
  });
};

export const postGamehubResign = <ThrowOnError extends boolean = false>(
  options?: Options<PostGamehubResignData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<void, unknown, ThrowOnError>({
    ...options,
    url: "/gamehub/Resign",
  });
};

export const postGamehubRequestRematch = <ThrowOnError extends boolean = false>(
  options?: Options<PostGamehubRequestRematchData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<void, unknown, ThrowOnError>({
    ...options,
    url: "/gamehub/RequestRematch",
  });
};

export const postGamehubApproveRematch = <ThrowOnError extends boolean = false>(
  options?: Options<PostGamehubApproveRematchData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<void, unknown, ThrowOnError>({
    ...options,
    url: "/gamehub/ApproveRematch",
  });
};

export const postGamehubSendMessage = <ThrowOnError extends boolean = false>(
  options?: Options<PostGamehubSendMessageData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<void, unknown, ThrowOnError>({
    ...options,
    url: "/gamehub/SendMessage",
  });
};
