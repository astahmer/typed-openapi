import { capitalize } from "pastable/server";
import type { mapOpenApiEndpoints } from "./map-openapi-endpoints.ts";

type GeneratorOptions = ReturnType<typeof mapOpenApiEndpoints>;
type GeneratorContext = Required<GeneratorOptions> & {
  errorStatusCodes?: readonly number[];
  /** When the linked API client returns Effects (`--client effect`). */
  client?: "promise" | "effect";
};

export const generateTanstackQueryFile = async (ctx: GeneratorContext & { relativeApiClientPath: string }) => {
  const endpointMethods = new Set(ctx.endpointList.map((endpoint) => endpoint.method.toLowerCase()));
  const isEffectClient = ctx.client === "effect";
  const apiClientType = isEffectClient ? "EffectApiClient" : "ApiClient";

  const methodBlocks = Array.from(endpointMethods)
    .map((method) => {
      const callExpr = isEffectClient
        ? `await Effect.runPromise(this.client.${method}(path, requestParams as never) as Effect.Effect<InferResponseData<TEndpoint, SuccessStatusCode>, unknown>)`
        : `await this.client.${method}(path, requestParams as never)`;

      const infiniteCallExpr = isEffectClient
        ? `await Effect.runPromise(this.client.${method}(path, requestParams as never) as Effect.Effect<InferResponseData<TEndpoint, SuccessStatusCode>, unknown>)`
        : `await this.client.${method}(path, requestParams as never)`;

      return `
        // <ApiClient.${method}>
        ${method}<
            Path extends keyof ${capitalize(method)}Endpoints,
            TEndpoint extends ${capitalize(method)}Endpoints[Path]
        >(
            path: Path,
            ...params: MaybeOptionalArg<ApiCallParams<TEndpoint>>
        ) {
            const queryKey = createQueryKey(path as string, params[0]);
            const query = {
                /** type-only property if you need easy access to the endpoint params */
                "~endpoint": {} as TEndpoint,
                queryKey,
                queryFn: {} as "You need to pass .queryOptions to the useQuery hook",
                queryOptions: queryOptions({
                    queryFn: async ({ queryKey, signal, }) => {
                        const requestParams = {
                            ...(params[0] || {}),
                            ...(queryKey[0] || {}),
                            overrides: { signal },
                            withResponse: false as const
                        };
                        const res = ${callExpr};
                        return res as InferResponseData<TEndpoint, SuccessStatusCode>;
                    },
                    queryKey: queryKey
                }),
                /** Same options for \`useSuspenseQuery\` / \`prefetchQuery\` (TanStack v5). */
                suspenseQueryOptions: queryOptions({
                    queryFn: async ({ queryKey, signal, }) => {
                        const requestParams = {
                            ...(params[0] || {}),
                            ...(queryKey[0] || {}),
                            overrides: { signal },
                            withResponse: false as const
                        };
                        const res = ${callExpr};
                        return res as InferResponseData<TEndpoint, SuccessStatusCode>;
                    },
                    queryKey: queryKey
                }),
                /**
                 * Infinite query options. Pass \`pageParamKey\` to merge \`pageParam\` into \`query[pageParamKey]\`.
                 * Query key is tagged with \`_infinite: true\` so it does not collide with regular queries.
                 */
                infiniteQueryOptions: <TPageParam = unknown>(infiniteOpts: {
                    initialPageParam: TPageParam;
                    getNextPageParam: (
                        lastPage: InferResponseData<TEndpoint, SuccessStatusCode>,
                        allPages: InferResponseData<TEndpoint, SuccessStatusCode>[],
                        lastPageParam: TPageParam,
                        allPageParams: TPageParam[],
                    ) => TPageParam | undefined | null;
                    getPreviousPageParam?: (
                        firstPage: InferResponseData<TEndpoint, SuccessStatusCode>,
                        allPages: InferResponseData<TEndpoint, SuccessStatusCode>[],
                        firstPageParam: TPageParam,
                        allPageParams: TPageParam[],
                    ) => TPageParam | undefined | null;
                    /** When set, \`pageParam\` is written into \`query[pageParamKey]\` before each fetch. */
                    pageParamKey?: string;
                }) => {
                    const infiniteKey = createQueryKey(path as string, params[0], true);
                    return infiniteQueryOptions({
                        queryKey: infiniteKey,
                        initialPageParam: infiniteOpts.initialPageParam,
                        getNextPageParam: infiniteOpts.getNextPageParam,
                        ...(infiniteOpts.getPreviousPageParam
                            ? { getPreviousPageParam: infiniteOpts.getPreviousPageParam }
                            : {}),
                        queryFn: async ({ pageParam, signal }) => {
                            const base = { ...(params[0] || {}) } as Record<string, unknown>;
                            const query = {
                                ...((base["query"] as Record<string, unknown> | undefined) || {}),
                            };
                            if (infiniteOpts.pageParamKey) {
                                query[infiniteOpts.pageParamKey] = pageParam;
                            }
                            const requestParams = {
                                ...base,
                                ...(Object.keys(query).length ? { query } : {}),
                                overrides: { signal },
                                withResponse: false as const,
                            };
                            const res = ${infiniteCallExpr};
                            return res as InferResponseData<TEndpoint, SuccessStatusCode>;
                        },
                    });
                },
                /** Invalidate this endpoint's regular (non-infinite) queries. */
                invalidate: (queryClient: QueryClient) =>
                    queryClient.invalidateQueries({ queryKey }),
                /** Invalidate this endpoint's infinite queries. */
                invalidateInfinite: (queryClient: QueryClient) =>
                    queryClient.invalidateQueries({ queryKey: createQueryKey(path as string, params[0], true) }),
            };

            return query
        }
        // </ApiClient.${method}>
        `;
    })
    .join("\n");

  const mutationFnBody = isEffectClient
    ? `const response = await Effect.runPromise((this.client as any)[method](path, {
                ...params as any,
                withResponse: true,
                throwOnStatusError: false,
            }) as Effect.Effect<any, unknown>);

                if (throwOnStatusError && errorStatusCodes.includes(response.status as never)) {
                    throw new TypedStatusError(response as never);
                }

                const finalResponse = withResponse ? response : response.data;
                const res = selectFn ? selectFn(finalResponse as any) : finalResponse;
                return res as never;`
    : `const response = await (this.client as any)[method](path, {
                ...params as any,
                withResponse: true,
                throwOnStatusError: false,
            });

                if (throwOnStatusError && errorStatusCodes.includes(response.status as never)) {
                    throw new TypedStatusError(response as never);
                }

                const finalResponse = withResponse ? response : response.data;
                const res = selectFn ? selectFn(finalResponse as any) : finalResponse;
                return res as never;`;

  const effectImport = isEffectClient ? `import { Effect } from "effect"\n` : "";

  return `
  ${effectImport}import { queryOptions, infiniteQueryOptions, type QueryClient } from "@tanstack/react-query"
  import type { EndpointByMethod, ${apiClientType}, SuccessStatusCode, ErrorStatusCode, InferResponseByStatus, TypedSuccessResponse, ApiCallParams } from "${ctx.relativeApiClientPath}"
  import { errorStatusCodes, TypedStatusError } from "${ctx.relativeApiClientPath}"

  type EndpointQueryKey<TOptions extends EndpointParameters> = [
      TOptions & {
          _id: string;
          _infinite?: boolean;
      }
  ];

  const createQueryKey = <TOptions extends EndpointParameters>(id: string, options?: TOptions, infinite?: boolean): [
      EndpointQueryKey<TOptions>[0]
  ] => {
      const params: EndpointQueryKey<TOptions>[0] = { _id: id, } as EndpointQueryKey<TOptions>[0];
      if (infinite) {
          params._infinite = infinite;
      }
      if (options?.body) {
          params.body = options.body;
      }
      if (options?.header) {
          params.header = options.header;
      }
      if (options?.path) {
          params.path = options.path;
      }
      if (options?.query) {
          params.query = options.query;
      }
      if (options?.cookie) {
          params.cookie = options.cookie;
      }
      return [
          params
      ];
  };

  /** Stable query-key factory for cache reads / invalidation outside of \`TanstackQueryApiClient\` methods. */
  export const queryKeyFactory = {
      all: ["typed-openapi"] as const,
      endpoint: <TOptions extends EndpointParameters>(id: string, options?: TOptions, infinite?: boolean) =>
          createQueryKey(id, options, infinite),
  };

  /** Invalidate queries by endpoint path (and optional params). */
  export const invalidateEndpoint = (
      queryClient: QueryClient,
      path: string,
      options?: EndpointParameters,
      infinite?: boolean,
  ) => queryClient.invalidateQueries({ queryKey: createQueryKey(path, options, infinite) });

  // <EndpointByMethod.Shorthands>
  ${Array.from(endpointMethods)
    .map((method) => `export type ${capitalize(method)}Endpoints = EndpointByMethod["${method}"];`)
    .join("\n")}
  // </EndpointByMethod.Shorthands>

  // <ApiClientTypes>
  export type EndpointParameters = {
      body?: unknown;
      query?: Record<string, unknown>;
      header?: Record<string, unknown>;
      path?: Record<string, unknown>;
      cookie?: Record<string, unknown>;
  };

  type RequiredKeys<T> = {
      [P in keyof T]-?: undefined extends T[P] ? never : P;
  }[keyof T];

  type MaybeOptionalArg<T> = RequiredKeys<T> extends never ? [config?: T] : [config: T];

  type InferResponseData<TEndpoint, TStatusCode> =  TypedSuccessResponse<any, any, any> extends
      InferResponseByStatus<TEndpoint, TStatusCode>
          ? Extract<InferResponseByStatus<TEndpoint, TStatusCode>, { data: {}}>["data"]
          : Extract<InferResponseByStatus<TEndpoint, TStatusCode>["data"], {}>;

  // </ApiClientTypes>

  // <ApiClient>
  export class TanstackQueryApiClient {
      constructor(public client: ${apiClientType}) { }

      ${methodBlocks}

        // <ApiClient.request>
        /**
         * Generic mutation method with full type-safety for any endpoint; it doesnt require parameters to be passed initially
         * but instead will require them to be passed when calling the mutation.mutate() method
         */
        mutation<
            TMethod extends keyof EndpointByMethod,
            TPath extends keyof EndpointByMethod[TMethod],
            TEndpoint extends EndpointByMethod[TMethod][TPath],
            TWithResponse extends boolean = false,
            TSelection = TWithResponse extends true
                ? InferResponseByStatus<TEndpoint, SuccessStatusCode>
                : InferResponseData<TEndpoint, SuccessStatusCode>,
            TError = TEndpoint extends { responses: infer TResponses }
                ? TResponses extends Record<string | number, unknown>
                    ? TypedStatusError<InferResponseData<TEndpoint, ErrorStatusCode>>
                    : Error
                : Error
        >(method: TMethod, path: TPath, options?: {
            withResponse?: TWithResponse;
            selectFn?: (res: TWithResponse extends true
                ? InferResponseByStatus<TEndpoint, SuccessStatusCode>
                : InferResponseData<TEndpoint, SuccessStatusCode>
            ) => TSelection;
             throwOnStatusError?: boolean
             throwOnError?: boolean | ((error: TError) => boolean)
        }) {
            const mutationKey = [{ method, path }] as const;
            const mutationFn = async (params: ApiCallParams<TEndpoint>): Promise<TSelection> => {
                const withResponse = options?.withResponse ?? false;
                const throwOnStatusError = params.throwOnStatusError ?? options?.throwOnStatusError ?? (withResponse ? false : true);
                const selectFn = options?.selectFn;
                ${mutationFnBody}
            };
            return {
            /** type-only property if you need easy access to the endpoint params */
            "~endpoint": {} as TEndpoint,
            mutationKey: mutationKey,
            mutationFn: {} as "You need to pass .mutationOptions to the useMutation hook",
            mutationOptions: {
                throwOnError: options?.throwOnError as boolean | ((error: TError) => boolean),
                mutationKey: mutationKey,
                mutationFn: mutationFn,
            } as Omit<import("@tanstack/react-query").UseMutationOptions<
                TSelection,
                TError,
                ApiCallParams<TEndpoint>
            >, "mutationFn"> & {
                mutationFn: typeof mutationFn
            },
            /** Invalidate all mutations keyed by this method+path (rarely needed). */
            invalidate: (queryClient: QueryClient) =>
                queryClient.invalidateQueries({ queryKey: mutationKey }),
        }
    }
        // </ApiClient.request>
  }
`;
};
