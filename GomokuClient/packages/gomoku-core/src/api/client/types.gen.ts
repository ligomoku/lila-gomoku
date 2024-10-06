// This file is auto-generated by @hey-api/openapi-ts

export type ChatMessageClientMessage = {
  gameId: string;
  user: string;
  message: string;
};

export type CreateGameRequest = {
  boardSize: number;
};

export type CreateGameResponse = {
  gameId: string;
};

export type GetAvailableGamesResponse = {
  gameId: string;
  opponent: ProfileDto;
};

export type GetAvailableGamesResponseIenumerablePaginatedResponse = {
  data: Array<GetAvailableGamesResponse>;
  metadata: PaginationMetadata;
};

export type GetGameHistoryResponse = {
  boardSize: number;
  movesCount: number;
  players: UsernamesDto;
  movesHistory: {
    [key: string]: TileDto;
  };
};

export type MakeMoveClientMessage = {
  gameId: string;
  x: number;
  y: number;
};

export type PaginationMetadata = {
  hasMoreItems: boolean;
  totalCount: number;
};

export type ProblemDetails = {
  type?: string | null;
  title?: string | null;
  status?: number | null;
  detail?: string | null;
  instance?: string | null;
  [key: string]: (unknown | string | number) | undefined;
};

export type ProfileDto = {
  playerId: string;
  userName: string;
};

export type TileDto = {
  x: number;
  y: number;
};

export type UsernamesDto = {
  black?: string | null;
  white?: string | null;
};

export type GetApiGameByGameIdHistoryData = {
  headers: {
    "Content-Type": string;
    "X-Version"?: string;
  };
  path: {
    gameId: string;
  };
};

export type GetApiGameByGameIdHistoryResponse = GetGameHistoryResponse;

export type GetApiGameByGameIdHistoryError = ProblemDetails;

export type GetApiGamesAvailableToJoinData = {
  headers: {
    "Content-Type": string;
    "X-Version"?: string;
  };
  query?: {
    limit?: number;
    offset?: number;
  };
};

export type GetApiGamesAvailableToJoinResponse =
  GetAvailableGamesResponseIenumerablePaginatedResponse;

export type GetApiGamesAvailableToJoinError = unknown;

export type PostApiGameData = {
  body?: CreateGameRequest;
  headers: {
    Authorization: string;
    "Content-Type": string;
    "X-Version"?: string;
  };
};

export type PostApiGameResponse = CreateGameResponse;

export type PostApiGameError = ProblemDetails;

export type PostApiGameByGameIdJoinData = {
  headers: {
    Authorization: string;
    "Content-Type": string;
    "X-Version"?: string;
  };
  path: {
    gameId: string;
  };
};

export type PostApiGameByGameIdJoinResponse = void;

export type PostApiGameByGameIdJoinError = ProblemDetails;

export type GetHealthData = {
  headers: {
    "Content-Type": string;
    "X-Version"?: string;
  };
};

export type GetHealthResponse = unknown;

export type GetHealthError = unknown;

export type PostGamehubJoinGameGroupData = {
  query?: {
    gameId?: string;
  };
};

export type PostGamehubMakeMoveData = {
  query?: {
    makeMoveMessage?: MakeMoveClientMessage;
  };
};

export type PostGamehubSendMessageData = {
  query?: {
    messageRequest?: ChatMessageClientMessage;
  };
};
