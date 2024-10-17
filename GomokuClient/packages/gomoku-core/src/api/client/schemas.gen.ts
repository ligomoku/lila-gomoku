// This file is auto-generated by @hey-api/openapi-ts

export const AddPlayerToGameResponseSchema = {
  type: "object",
  properties: {
    gameId: {
      type: "string",
      nullable: true,
    },
    playerId: {
      type: "string",
      nullable: true,
    },
  },
  additionalProperties: false,
} as const;

export const ChatMessageClientMessageSchema = {
  required: ["gameId", "message", "user"],
  type: "object",
  properties: {
    gameId: {
      minLength: 1,
      type: "string",
    },
    user: {
      minLength: 1,
      type: "string",
    },
    message: {
      minLength: 1,
      type: "string",
    },
  },
  additionalProperties: false,
} as const;

export const CreateGameRequestSchema = {
  required: ["boardSize"],
  type: "object",
  properties: {
    boardSize: {
      type: "integer",
      format: "int32",
    },
  },
  additionalProperties: false,
} as const;

export const CreateGameResponseSchema = {
  type: "object",
  properties: {
    gameId: {
      type: "string",
      nullable: true,
    },
    boardSize: {
      type: "integer",
      format: "int32",
    },
  },
  additionalProperties: false,
} as const;

export const GetActiveGamesResponseSchema = {
  required: ["gameId"],
  type: "object",
  properties: {
    gameId: {
      minLength: 1,
      type: "string",
    },
    opponent: {
      $ref: "#/components/schemas/ProfileDto",
    },
  },
  additionalProperties: false,
} as const;

export const GetActiveGamesResponseIEnumerablePaginatedResponseSchema = {
  required: ["data", "metadata"],
  type: "object",
  properties: {
    data: {
      type: "array",
      items: {
        $ref: "#/components/schemas/GetActiveGamesResponse",
      },
    },
    metadata: {
      $ref: "#/components/schemas/PaginationMetadata",
    },
  },
  additionalProperties: false,
} as const;

export const GetAvailableGamesResponseSchema = {
  required: ["gameId"],
  type: "object",
  properties: {
    gameId: {
      minLength: 1,
      type: "string",
    },
    opponent: {
      $ref: "#/components/schemas/ProfileDto",
    },
  },
  additionalProperties: false,
} as const;

export const GetAvailableGamesResponseIEnumerablePaginatedResponseSchema = {
  required: ["data", "metadata"],
  type: "object",
  properties: {
    data: {
      type: "array",
      items: {
        $ref: "#/components/schemas/GetAvailableGamesResponse",
      },
    },
    metadata: {
      $ref: "#/components/schemas/PaginationMetadata",
    },
  },
  additionalProperties: false,
} as const;

export const GetGameHistoryResponseSchema = {
  required: [
    "boardSize",
    "gen",
    "isCompleted",
    "movesCount",
    "movesHistory",
    "players",
  ],
  type: "object",
  properties: {
    boardSize: {
      type: "integer",
      format: "int32",
    },
    gen: {
      minLength: 1,
      type: "string",
    },
    movesCount: {
      type: "integer",
      format: "int32",
    },
    players: {
      $ref: "#/components/schemas/UsernamesDto",
    },
    isCompleted: {
      type: "boolean",
    },
    winner: {
      type: "string",
      nullable: true,
    },
    movesHistory: {
      type: "object",
      additionalProperties: {
        $ref: "#/components/schemas/TileDto",
      },
    },
  },
  additionalProperties: false,
} as const;

export const GetGamesByUsernameResponseSchema = {
  required: ["date", "gameId", "gen", "isCompleted", "players"],
  type: "object",
  properties: {
    gameId: {
      minLength: 1,
      type: "string",
    },
    players: {
      $ref: "#/components/schemas/UsernamesDto",
    },
    isCompleted: {
      type: "boolean",
    },
    winner: {
      type: "string",
      nullable: true,
    },
    gen: {
      minLength: 1,
      type: "string",
    },
    date: {
      type: "string",
      format: "date-time",
    },
  },
  additionalProperties: false,
} as const;

export const GetGamesByUsernameResponseIEnumerablePaginatedResponseSchema = {
  required: ["data", "metadata"],
  type: "object",
  properties: {
    data: {
      type: "array",
      items: {
        $ref: "#/components/schemas/GetGamesByUsernameResponse",
      },
    },
    metadata: {
      $ref: "#/components/schemas/PaginationMetadata",
    },
  },
  additionalProperties: false,
} as const;

export const MakeMoveClientMessageSchema = {
  required: ["gameId", "x", "y"],
  type: "object",
  properties: {
    gameId: {
      minLength: 1,
      type: "string",
    },
    x: {
      type: "integer",
      format: "int32",
    },
    y: {
      type: "integer",
      format: "int32",
    },
  },
  additionalProperties: false,
} as const;

export const PaginationMetadataSchema = {
  required: ["hasMoreItems", "totalCount"],
  type: "object",
  properties: {
    hasMoreItems: {
      type: "boolean",
    },
    totalCount: {
      type: "integer",
      format: "int32",
    },
  },
  additionalProperties: false,
} as const;

export const ProblemDetailsSchema = {
  type: "object",
  properties: {
    type: {
      type: "string",
      nullable: true,
    },
    title: {
      type: "string",
      nullable: true,
    },
    status: {
      type: "integer",
      format: "int32",
      nullable: true,
    },
    detail: {
      type: "string",
      nullable: true,
    },
    instance: {
      type: "string",
      nullable: true,
    },
  },
  additionalProperties: {},
} as const;

export const ProfileDtoSchema = {
  required: ["playerId", "userName"],
  type: "object",
  properties: {
    playerId: {
      minLength: 1,
      type: "string",
    },
    userName: {
      minLength: 1,
      type: "string",
    },
  },
  additionalProperties: false,
} as const;

export const TileDtoSchema = {
  required: ["x", "y"],
  type: "object",
  properties: {
    x: {
      type: "integer",
      format: "int32",
    },
    y: {
      type: "integer",
      format: "int32",
    },
  },
  additionalProperties: false,
} as const;

export const UsernamesDtoSchema = {
  type: "object",
  properties: {
    black: {
      type: "string",
      nullable: true,
    },
    white: {
      type: "string",
      nullable: true,
    },
  },
  additionalProperties: false,
} as const;
