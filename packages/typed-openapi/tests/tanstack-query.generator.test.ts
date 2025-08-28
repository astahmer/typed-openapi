import { describe, test } from "vitest";
import SwaggerParser from "@apidevtools/swagger-parser";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints.ts";
import { generateTanstackQueryFile } from "../src/tanstack-query.generator.ts";

describe("generator", () => {
  test("petstore", async ({ expect }) => {
    const openApiDoc = (await SwaggerParser.parse("./tests/samples/petstore.yaml")) as OpenAPIObject;
    expect(
      await generateTanstackQueryFile({
        ...mapOpenApiEndpoints(openApiDoc),
        relativeApiClientPath: "./api.client.ts",
      }),
    ).toMatchInlineSnapshot(`
      "import { queryOptions } from "@tanstack/react-query";
      import type {
        EndpointByMethod,
        ApiClient,
        SuccessStatusCode,
        ErrorStatusCode,
        InferResponseByStatus,
      } from "./api.client.ts";
      import { errorStatusCodes, TypedResponseError } from "./api.client.ts";

      type EndpointQueryKey<TOptions extends EndpointParameters> = [
        TOptions & {
          _id: string;
          _infinite?: boolean;
        },
      ];

      const createQueryKey = <TOptions extends EndpointParameters>(
        id: string,
        options?: TOptions,
        infinite?: boolean,
      ): [EndpointQueryKey<TOptions>[0]] => {
        const params: EndpointQueryKey<TOptions>[0] = { _id: id } as EndpointQueryKey<TOptions>[0];
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
        return [params];
      };

      // <EndpointByMethod.Shorthands>
      export type PutEndpoints = EndpointByMethod["put"];
      export type PostEndpoints = EndpointByMethod["post"];
      export type GetEndpoints = EndpointByMethod["get"];
      export type DeleteEndpoints = EndpointByMethod["delete"];
      // </EndpointByMethod.Shorthands>

      // <ApiClientTypes>
      export type EndpointParameters = {
        body?: unknown;
        query?: Record<string, unknown>;
        header?: Record<string, unknown>;
        path?: Record<string, unknown>;
      };

      type RequiredKeys<T> = {
        [P in keyof T]-?: undefined extends T[P] ? never : P;
      }[keyof T];

      type MaybeOptionalArg<T> = RequiredKeys<T> extends never ? [config?: T] : [config: T];

      // </ApiClientTypes>

      // <ApiClient>
      export class TanstackQueryApiClient {
        constructor(public client: ApiClient) {}

        // <ApiClient.put>
        put<Path extends keyof PutEndpoints, TEndpoint extends PutEndpoints[Path]>(
          path: Path,
          ...params: MaybeOptionalArg<TEndpoint["parameters"]>
        ) {
          const queryKey = createQueryKey(path as string, params[0]);
          const query = {
            /** type-only property if you need easy access to the endpoint params */
            "~endpoint": {} as TEndpoint,
            queryKey,
            queryFn: {} as "You need to pass .queryOptions to the useQuery hook",
            queryOptions: queryOptions({
              queryFn: async ({ queryKey, signal }) => {
                const requestParams = {
                  ...(params[0] || {}),
                  ...(queryKey[0] || {}),
                  overrides: { signal },
                  withResponse: false as const,
                };
                const res = await this.client.put(path, requestParams as never);
                return res as Extract<InferResponseByStatus<TEndpoint, SuccessStatusCode>, { data: {} }>["data"];
              },
              queryKey: queryKey,
            }),
          };

          return query;
        }
        // </ApiClient.put>

        // <ApiClient.post>
        post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
          path: Path,
          ...params: MaybeOptionalArg<TEndpoint["parameters"]>
        ) {
          const queryKey = createQueryKey(path as string, params[0]);
          const query = {
            /** type-only property if you need easy access to the endpoint params */
            "~endpoint": {} as TEndpoint,
            queryKey,
            queryFn: {} as "You need to pass .queryOptions to the useQuery hook",
            queryOptions: queryOptions({
              queryFn: async ({ queryKey, signal }) => {
                const requestParams = {
                  ...(params[0] || {}),
                  ...(queryKey[0] || {}),
                  overrides: { signal },
                  withResponse: false as const,
                };
                const res = await this.client.post(path, requestParams as never);
                return res as Extract<InferResponseByStatus<TEndpoint, SuccessStatusCode>, { data: {} }>["data"];
              },
              queryKey: queryKey,
            }),
          };

          return query;
        }
        // </ApiClient.post>

        // <ApiClient.get>
        get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
          path: Path,
          ...params: MaybeOptionalArg<TEndpoint["parameters"]>
        ) {
          const queryKey = createQueryKey(path as string, params[0]);
          const query = {
            /** type-only property if you need easy access to the endpoint params */
            "~endpoint": {} as TEndpoint,
            queryKey,
            queryFn: {} as "You need to pass .queryOptions to the useQuery hook",
            queryOptions: queryOptions({
              queryFn: async ({ queryKey, signal }) => {
                const requestParams = {
                  ...(params[0] || {}),
                  ...(queryKey[0] || {}),
                  overrides: { signal },
                  withResponse: false as const,
                };
                const res = await this.client.get(path, requestParams as never);
                return res as Extract<InferResponseByStatus<TEndpoint, SuccessStatusCode>, { data: {} }>["data"];
              },
              queryKey: queryKey,
            }),
          };

          return query;
        }
        // </ApiClient.get>

        // <ApiClient.delete>
        delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
          path: Path,
          ...params: MaybeOptionalArg<TEndpoint["parameters"]>
        ) {
          const queryKey = createQueryKey(path as string, params[0]);
          const query = {
            /** type-only property if you need easy access to the endpoint params */
            "~endpoint": {} as TEndpoint,
            queryKey,
            queryFn: {} as "You need to pass .queryOptions to the useQuery hook",
            queryOptions: queryOptions({
              queryFn: async ({ queryKey, signal }) => {
                const requestParams = {
                  ...(params[0] || {}),
                  ...(queryKey[0] || {}),
                  overrides: { signal },
                  withResponse: false as const,
                };
                const res = await this.client.delete(path, requestParams as never);
                return res as Extract<InferResponseByStatus<TEndpoint, SuccessStatusCode>, { data: {} }>["data"];
              },
              queryKey: queryKey,
            }),
          };

          return query;
        }
        // </ApiClient.delete>

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
            : Extract<InferResponseByStatus<TEndpoint, SuccessStatusCode>, { data: {} }>["data"],
          TError = TEndpoint extends { responses: infer TResponses }
            ? TResponses extends Record<string | number, unknown>
              ? InferResponseByStatus<TEndpoint, ErrorStatusCode>
              : Error
            : Error,
        >(
          method: TMethod,
          path: TPath,
          options?: {
            withResponse?: TWithResponse;
            selectFn?: (
              res: TWithResponse extends true
                ? InferResponseByStatus<TEndpoint, SuccessStatusCode>
                : Extract<InferResponseByStatus<TEndpoint, SuccessStatusCode>, { data: {} }>["data"],
            ) => TSelection;
            throwOnStatusError?: boolean;
            throwOnError?: boolean | ((error: TError) => boolean);
          },
        ) {
          const mutationKey = [{ method, path }] as const;
          const mutationFn = async <
            TLocalWithResponse extends boolean = TWithResponse,
            TLocalSelection = TLocalWithResponse extends true
              ? InferResponseByStatus<TEndpoint, SuccessStatusCode>
              : Extract<InferResponseByStatus<TEndpoint, SuccessStatusCode>, { data: {} }>["data"],
          >(
            params: (TEndpoint extends { parameters: infer Parameters } ? Parameters : {}) & {
              withResponse?: TLocalWithResponse;
              throwOnStatusError?: boolean;
              overrides?: RequestInit;
            },
          ): Promise<TLocalSelection> => {
            const withResponse = params.withResponse ?? options?.withResponse ?? false;
            const throwOnStatusError =
              params.throwOnStatusError ?? options?.throwOnStatusError ?? (withResponse ? false : true);
            const selectFn = options?.selectFn;
            const response = await (this.client as any)[method](path, {
              ...(params as any),
              withResponse: true,
              throwOnStatusError: false,
            });

            if (throwOnStatusError && errorStatusCodes.includes(response.status as never)) {
              throw new TypedResponseError(response as never);
            }

            // Return just the data if withResponse is false, otherwise return the full response
            const finalResponse = withResponse ? response : response.data;
            const res = selectFn ? selectFn(finalResponse as any) : finalResponse;
            return res as never;
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
            } as Omit<
              import("@tanstack/react-query").UseMutationOptions<
                TSelection,
                TError,
                (TEndpoint extends { parameters: infer Parameters } ? Parameters : {}) & {
                  withResponse?: boolean;
                  throwOnStatusError?: boolean;
                }
              >,
              "mutationFn"
            > & {
              mutationFn: typeof mutationFn;
            },
          };
        }
        // </ApiClient.request>
      }
      "
    `);
  });
});
