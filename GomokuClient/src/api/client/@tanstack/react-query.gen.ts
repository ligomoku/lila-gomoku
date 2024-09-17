// This file is auto-generated by @hey-api/openapi-ts

import type { Options } from "@hey-api/client-fetch";
import { queryOptions, type UseMutationOptions } from "@tanstack/react-query";
import type {
  GetApiV2GameByGameIdData,
  GetApiV2GamesData,
  PostApiV2GameData,
  PostApiV2GameError,
  PostApiV2GameResponse,
  PostApiV2GameByGameIdJoinByPlayerIdData,
  PostApiV2GameByGameIdJoinByPlayerIdError,
  PostApiV2GameByGameIdJoinByPlayerIdResponse,
  PostApiV2GameByGameIdMakeMoveByPlayerIdData,
  PostApiV2GameByGameIdMakeMoveByPlayerIdError,
  PostApiV2GameByGameIdMakeMoveByPlayerIdResponse,
  PostApiV2PlayersData,
  PostApiV2PlayersError,
  PostApiV2PlayersResponse,
} from "../types.gen";
import {
  client,
  getApiV2GameByGameId,
  getApiV2Games,
  postApiV2Game,
  postApiV2GameByGameIdJoinByPlayerId,
  postApiV2GameByGameIdMakeMoveByPlayerId,
  postApiV2Players,
} from "../services.gen";

type QueryKey<TOptions extends Options> = [
  Pick<TOptions, "baseUrl" | "body" | "headers" | "path" | "query"> & {
    _id: string;
    _infinite?: boolean;
  },
];

const createQueryKey = <TOptions extends Options>(
  id: string,
  options?: TOptions,
  infinite?: boolean,
): QueryKey<TOptions>[0] => {
  const params: QueryKey<TOptions>[0] = {
    _id: id,
    baseUrl: (options?.client ?? client).getConfig().baseUrl,
  } as QueryKey<TOptions>[0];
  if (infinite) {
    params._infinite = infinite;
  }
  if (options?.body) {
    params.body = options.body;
  }
  if (options?.headers) {
    params.headers = options.headers;
  }
  if (options?.path) {
    params.path = options.path;
  }
  if (options?.query) {
    params.query = options.query;
  }
  return params;
};

export const getApiV2GameByGameIdQueryKey = (
  options: Options<GetApiV2GameByGameIdData>,
) => [createQueryKey("getApiV2GameByGameId", options)];

export const getApiV2GameByGameIdOptions = (
  options: Options<GetApiV2GameByGameIdData>,
) => {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      const { data } = await getApiV2GameByGameId({
        ...options,
        ...queryKey[0],
        throwOnError: true,
      });
      return data;
    },
    queryKey: getApiV2GameByGameIdQueryKey(options),
  });
};

export const getApiV2GamesQueryKey = (options: Options<GetApiV2GamesData>) => [
  createQueryKey("getApiV2Games", options),
];

export const getApiV2GamesOptions = (options: Options<GetApiV2GamesData>) => {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      const { data } = await getApiV2Games({
        ...options,
        ...queryKey[0],
        throwOnError: true,
      });
      return data;
    },
    queryKey: getApiV2GamesQueryKey(options),
  });
};

export const postApiV2GameQueryKey = (options: Options<PostApiV2GameData>) => [
  createQueryKey("postApiV2Game", options),
];

export const postApiV2GameOptions = (options: Options<PostApiV2GameData>) => {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      const { data } = await postApiV2Game({
        ...options,
        ...queryKey[0],
        throwOnError: true,
      });
      return data;
    },
    queryKey: postApiV2GameQueryKey(options),
  });
};

export const postApiV2GameMutation = () => {
  const mutationOptions: UseMutationOptions<
    PostApiV2GameResponse,
    PostApiV2GameError,
    Options<PostApiV2GameData>
  > = {
    mutationFn: async (options) => {
      const { data } = await postApiV2Game({
        ...options,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export const postApiV2GameByGameIdJoinByPlayerIdQueryKey = (
  options: Options<PostApiV2GameByGameIdJoinByPlayerIdData>,
) => [createQueryKey("postApiV2GameByGameIdJoinByPlayerId", options)];

export const postApiV2GameByGameIdJoinByPlayerIdOptions = (
  options: Options<PostApiV2GameByGameIdJoinByPlayerIdData>,
) => {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      const { data } = await postApiV2GameByGameIdJoinByPlayerId({
        ...options,
        ...queryKey[0],
        throwOnError: true,
      });
      return data;
    },
    queryKey: postApiV2GameByGameIdJoinByPlayerIdQueryKey(options),
  });
};

export const postApiV2GameByGameIdJoinByPlayerIdMutation = () => {
  const mutationOptions: UseMutationOptions<
    PostApiV2GameByGameIdJoinByPlayerIdResponse,
    PostApiV2GameByGameIdJoinByPlayerIdError,
    Options<PostApiV2GameByGameIdJoinByPlayerIdData>
  > = {
    mutationFn: async (options) => {
      const { data } = await postApiV2GameByGameIdJoinByPlayerId({
        ...options,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export const postApiV2GameByGameIdMakeMoveByPlayerIdQueryKey = (
  options: Options<PostApiV2GameByGameIdMakeMoveByPlayerIdData>,
) => [createQueryKey("postApiV2GameByGameIdMakeMoveByPlayerId", options)];

export const postApiV2GameByGameIdMakeMoveByPlayerIdOptions = (
  options: Options<PostApiV2GameByGameIdMakeMoveByPlayerIdData>,
) => {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      const { data } = await postApiV2GameByGameIdMakeMoveByPlayerId({
        ...options,
        ...queryKey[0],
        throwOnError: true,
      });
      return data;
    },
    queryKey: postApiV2GameByGameIdMakeMoveByPlayerIdQueryKey(options),
  });
};

export const postApiV2GameByGameIdMakeMoveByPlayerIdMutation = () => {
  const mutationOptions: UseMutationOptions<
    PostApiV2GameByGameIdMakeMoveByPlayerIdResponse,
    PostApiV2GameByGameIdMakeMoveByPlayerIdError,
    Options<PostApiV2GameByGameIdMakeMoveByPlayerIdData>
  > = {
    mutationFn: async (options) => {
      const { data } = await postApiV2GameByGameIdMakeMoveByPlayerId({
        ...options,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export const postApiV2PlayersQueryKey = (
  options: Options<PostApiV2PlayersData>,
) => [createQueryKey("postApiV2Players", options)];

export const postApiV2PlayersOptions = (
  options: Options<PostApiV2PlayersData>,
) => {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      const { data } = await postApiV2Players({
        ...options,
        ...queryKey[0],
        throwOnError: true,
      });
      return data;
    },
    queryKey: postApiV2PlayersQueryKey(options),
  });
};

export const postApiV2PlayersMutation = () => {
  const mutationOptions: UseMutationOptions<
    PostApiV2PlayersResponse,
    PostApiV2PlayersError,
    Options<PostApiV2PlayersData>
  > = {
    mutationFn: async (options) => {
      const { data } = await postApiV2Players({
        ...options,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};
