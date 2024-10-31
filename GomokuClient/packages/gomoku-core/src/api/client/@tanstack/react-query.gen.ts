// This file is auto-generated by @hey-api/openapi-ts

import type { Options } from "@hey-api/client-fetch";
import {
  queryOptions,
  infiniteQueryOptions,
  type InfiniteData,
  type UseMutationOptions,
  type DefaultError,
} from "@tanstack/react-query";
import type {
  GetApiGameByGameIdHistoryData,
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
  GetApiProfilesByUserNameGamesData,
  GetApiProfilesByUserNameGamesError,
  GetApiProfilesByUserNameGamesResponse,
  PostGamehubJoinGameGroupData,
  PostGamehubMakeMoveData,
  PostGamehubResignData,
  PostGamehubSendMessageData,
} from "../types.gen";
import {
  client,
  getApiGameByGameIdHistory,
  getApiGamesAvailableToJoin,
  getApiGamesActive,
  postApiGame,
  postApiGameByGameIdJoin,
  getHealth,
  getApiProfilesByUserNameGames,
  postGamehubJoinGameGroup,
  postGamehubMakeMove,
  postGamehubResign,
  postGamehubSendMessage,
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

export const getApiGameByGameIdHistoryQueryKey = (
  options: Options<GetApiGameByGameIdHistoryData>,
) => [createQueryKey("getApiGameByGameIdHistory", options)];

export const getApiGameByGameIdHistoryOptions = (
  options: Options<GetApiGameByGameIdHistoryData>,
) => {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      const { data } = await getApiGameByGameIdHistory({
        ...options,
        ...queryKey[0],
        throwOnError: true,
      });
      return data;
    },
    queryKey: getApiGameByGameIdHistoryQueryKey(options),
  });
};

export const getApiGamesAvailableToJoinQueryKey = (
  options: Options<GetApiGamesAvailableToJoinData>,
) => [createQueryKey("getApiGamesAvailableToJoin", options)];

export const getApiGamesAvailableToJoinOptions = (
  options: Options<GetApiGamesAvailableToJoinData>,
) => {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      const { data } = await getApiGamesAvailableToJoin({
        ...options,
        ...queryKey[0],
        throwOnError: true,
      });
      return data;
    },
    queryKey: getApiGamesAvailableToJoinQueryKey(options),
  });
};

const createInfiniteParams = <
  K extends Pick<QueryKey<Options>[0], "body" | "headers" | "path" | "query">,
>(
  queryKey: QueryKey<Options>,
  page: K,
) => {
  const params = queryKey[0];
  if (page.body) {
    params.body = {
      ...(queryKey[0].body as any),
      ...(page.body as any),
    };
  }
  if (page.headers) {
    params.headers = {
      ...queryKey[0].headers,
      ...page.headers,
    };
  }
  if (page.path) {
    params.path = {
      ...queryKey[0].path,
      ...page.path,
    };
  }
  if (page.query) {
    params.query = {
      ...queryKey[0].query,
      ...page.query,
    };
  }
  return params as unknown as typeof page;
};

export const getApiGamesAvailableToJoinInfiniteQueryKey = (
  options: Options<GetApiGamesAvailableToJoinData>,
): QueryKey<Options<GetApiGamesAvailableToJoinData>> => [
  createQueryKey("getApiGamesAvailableToJoin", options, true),
];

export const getApiGamesAvailableToJoinInfiniteOptions = (
  options: Options<GetApiGamesAvailableToJoinData>,
) => {
  return infiniteQueryOptions<
    GetApiGamesAvailableToJoinResponse,
    GetApiGamesAvailableToJoinError,
    InfiniteData<GetApiGamesAvailableToJoinResponse>,
    QueryKey<Options<GetApiGamesAvailableToJoinData>>,
    | number
    | Pick<
        QueryKey<Options<GetApiGamesAvailableToJoinData>>[0],
        "body" | "headers" | "path" | "query"
      >
  >(
    // @ts-ignore
    {
      queryFn: async ({ pageParam, queryKey }) => {
        // @ts-ignore
        const page: Pick<
          QueryKey<Options<GetApiGamesAvailableToJoinData>>[0],
          "body" | "headers" | "path" | "query"
        > =
          typeof pageParam === "object"
            ? pageParam
            : {
                query: {
                  offset: pageParam,
                },
              };
        const params = createInfiniteParams(queryKey, page);
        const { data } = await getApiGamesAvailableToJoin({
          ...options,
          ...params,
          throwOnError: true,
        });
        return data;
      },
      queryKey: getApiGamesAvailableToJoinInfiniteQueryKey(options),
    },
  );
};

export const getApiGamesActiveQueryKey = (
  options: Options<GetApiGamesActiveData>,
) => [createQueryKey("getApiGamesActive", options)];

export const getApiGamesActiveOptions = (
  options: Options<GetApiGamesActiveData>,
) => {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      const { data } = await getApiGamesActive({
        ...options,
        ...queryKey[0],
        throwOnError: true,
      });
      return data;
    },
    queryKey: getApiGamesActiveQueryKey(options),
  });
};

export const getApiGamesActiveInfiniteQueryKey = (
  options: Options<GetApiGamesActiveData>,
): QueryKey<Options<GetApiGamesActiveData>> => [
  createQueryKey("getApiGamesActive", options, true),
];

export const getApiGamesActiveInfiniteOptions = (
  options: Options<GetApiGamesActiveData>,
) => {
  return infiniteQueryOptions<
    GetApiGamesActiveResponse,
    GetApiGamesActiveError,
    InfiniteData<GetApiGamesActiveResponse>,
    QueryKey<Options<GetApiGamesActiveData>>,
    | number
    | Pick<
        QueryKey<Options<GetApiGamesActiveData>>[0],
        "body" | "headers" | "path" | "query"
      >
  >(
    // @ts-ignore
    {
      queryFn: async ({ pageParam, queryKey }) => {
        // @ts-ignore
        const page: Pick<
          QueryKey<Options<GetApiGamesActiveData>>[0],
          "body" | "headers" | "path" | "query"
        > =
          typeof pageParam === "object"
            ? pageParam
            : {
                query: {
                  offset: pageParam,
                },
              };
        const params = createInfiniteParams(queryKey, page);
        const { data } = await getApiGamesActive({
          ...options,
          ...params,
          throwOnError: true,
        });
        return data;
      },
      queryKey: getApiGamesActiveInfiniteQueryKey(options),
    },
  );
};

export const postApiGameQueryKey = (options: Options<PostApiGameData>) => [
  createQueryKey("postApiGame", options),
];

export const postApiGameOptions = (options: Options<PostApiGameData>) => {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      const { data } = await postApiGame({
        ...options,
        ...queryKey[0],
        throwOnError: true,
      });
      return data;
    },
    queryKey: postApiGameQueryKey(options),
  });
};

export const postApiGameMutation = (
  options?: Partial<Options<PostApiGameData>>,
) => {
  const mutationOptions: UseMutationOptions<
    PostApiGameResponse,
    PostApiGameError,
    Options<PostApiGameData>
  > = {
    mutationFn: async (localOptions) => {
      const { data } = await postApiGame({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export const postApiGameByGameIdJoinQueryKey = (
  options: Options<PostApiGameByGameIdJoinData>,
) => [createQueryKey("postApiGameByGameIdJoin", options)];

export const postApiGameByGameIdJoinOptions = (
  options: Options<PostApiGameByGameIdJoinData>,
) => {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      const { data } = await postApiGameByGameIdJoin({
        ...options,
        ...queryKey[0],
        throwOnError: true,
      });
      return data;
    },
    queryKey: postApiGameByGameIdJoinQueryKey(options),
  });
};

export const postApiGameByGameIdJoinMutation = (
  options?: Partial<Options<PostApiGameByGameIdJoinData>>,
) => {
  const mutationOptions: UseMutationOptions<
    PostApiGameByGameIdJoinResponse,
    PostApiGameByGameIdJoinError,
    Options<PostApiGameByGameIdJoinData>
  > = {
    mutationFn: async (localOptions) => {
      const { data } = await postApiGameByGameIdJoin({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export const getHealthQueryKey = (options: Options<GetHealthData>) => [
  createQueryKey("getHealth", options),
];

export const getHealthOptions = (options: Options<GetHealthData>) => {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      const { data } = await getHealth({
        ...options,
        ...queryKey[0],
        throwOnError: true,
      });
      return data;
    },
    queryKey: getHealthQueryKey(options),
  });
};

export const getApiProfilesByUserNameGamesQueryKey = (
  options: Options<GetApiProfilesByUserNameGamesData>,
) => [createQueryKey("getApiProfilesByUserNameGames", options)];

export const getApiProfilesByUserNameGamesOptions = (
  options: Options<GetApiProfilesByUserNameGamesData>,
) => {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      const { data } = await getApiProfilesByUserNameGames({
        ...options,
        ...queryKey[0],
        throwOnError: true,
      });
      return data;
    },
    queryKey: getApiProfilesByUserNameGamesQueryKey(options),
  });
};

export const getApiProfilesByUserNameGamesInfiniteQueryKey = (
  options: Options<GetApiProfilesByUserNameGamesData>,
): QueryKey<Options<GetApiProfilesByUserNameGamesData>> => [
  createQueryKey("getApiProfilesByUserNameGames", options, true),
];

export const getApiProfilesByUserNameGamesInfiniteOptions = (
  options: Options<GetApiProfilesByUserNameGamesData>,
) => {
  return infiniteQueryOptions<
    GetApiProfilesByUserNameGamesResponse,
    GetApiProfilesByUserNameGamesError,
    InfiniteData<GetApiProfilesByUserNameGamesResponse>,
    QueryKey<Options<GetApiProfilesByUserNameGamesData>>,
    | number
    | Pick<
        QueryKey<Options<GetApiProfilesByUserNameGamesData>>[0],
        "body" | "headers" | "path" | "query"
      >
  >(
    // @ts-ignore
    {
      queryFn: async ({ pageParam, queryKey }) => {
        // @ts-ignore
        const page: Pick<
          QueryKey<Options<GetApiProfilesByUserNameGamesData>>[0],
          "body" | "headers" | "path" | "query"
        > =
          typeof pageParam === "object"
            ? pageParam
            : {
                query: {
                  offset: pageParam,
                },
              };
        const params = createInfiniteParams(queryKey, page);
        const { data } = await getApiProfilesByUserNameGames({
          ...options,
          ...params,
          throwOnError: true,
        });
        return data;
      },
      queryKey: getApiProfilesByUserNameGamesInfiniteQueryKey(options),
    },
  );
};

export const postGamehubJoinGameGroupQueryKey = (
  options?: Options<PostGamehubJoinGameGroupData>,
) => [createQueryKey("postGamehubJoinGameGroup", options)];

export const postGamehubJoinGameGroupOptions = (
  options?: Options<PostGamehubJoinGameGroupData>,
) => {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      const { data } = await postGamehubJoinGameGroup({
        ...options,
        ...queryKey[0],
        throwOnError: true,
      });
      return data;
    },
    queryKey: postGamehubJoinGameGroupQueryKey(options),
  });
};

export const postGamehubJoinGameGroupMutation = (
  options?: Partial<Options<PostGamehubJoinGameGroupData>>,
) => {
  const mutationOptions: UseMutationOptions<
    void,
    DefaultError,
    Options<PostGamehubJoinGameGroupData>
  > = {
    mutationFn: async (localOptions) => {
      const { data } = await postGamehubJoinGameGroup({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export const postGamehubMakeMoveQueryKey = (
  options?: Options<PostGamehubMakeMoveData>,
) => [createQueryKey("postGamehubMakeMove", options)];

export const postGamehubMakeMoveOptions = (
  options?: Options<PostGamehubMakeMoveData>,
) => {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      const { data } = await postGamehubMakeMove({
        ...options,
        ...queryKey[0],
        throwOnError: true,
      });
      return data;
    },
    queryKey: postGamehubMakeMoveQueryKey(options),
  });
};

export const postGamehubMakeMoveMutation = (
  options?: Partial<Options<PostGamehubMakeMoveData>>,
) => {
  const mutationOptions: UseMutationOptions<
    void,
    DefaultError,
    Options<PostGamehubMakeMoveData>
  > = {
    mutationFn: async (localOptions) => {
      const { data } = await postGamehubMakeMove({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export const postGamehubResignQueryKey = (
  options?: Options<PostGamehubResignData>,
) => [createQueryKey("postGamehubResign", options)];

export const postGamehubResignOptions = (
  options?: Options<PostGamehubResignData>,
) => {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      const { data } = await postGamehubResign({
        ...options,
        ...queryKey[0],
        throwOnError: true,
      });
      return data;
    },
    queryKey: postGamehubResignQueryKey(options),
  });
};

export const postGamehubResignMutation = (
  options?: Partial<Options<PostGamehubResignData>>,
) => {
  const mutationOptions: UseMutationOptions<
    void,
    DefaultError,
    Options<PostGamehubResignData>
  > = {
    mutationFn: async (localOptions) => {
      const { data } = await postGamehubResign({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};

export const postGamehubSendMessageQueryKey = (
  options?: Options<PostGamehubSendMessageData>,
) => [createQueryKey("postGamehubSendMessage", options)];

export const postGamehubSendMessageOptions = (
  options?: Options<PostGamehubSendMessageData>,
) => {
  return queryOptions({
    queryFn: async ({ queryKey }) => {
      const { data } = await postGamehubSendMessage({
        ...options,
        ...queryKey[0],
        throwOnError: true,
      });
      return data;
    },
    queryKey: postGamehubSendMessageQueryKey(options),
  });
};

export const postGamehubSendMessageMutation = (
  options?: Partial<Options<PostGamehubSendMessageData>>,
) => {
  const mutationOptions: UseMutationOptions<
    void,
    DefaultError,
    Options<PostGamehubSendMessageData>
  > = {
    mutationFn: async (localOptions) => {
      const { data } = await postGamehubSendMessage({
        ...options,
        ...localOptions,
        throwOnError: true,
      });
      return data;
    },
  };
  return mutationOptions;
};
