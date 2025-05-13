import { describe, test } from "vitest";
import SwaggerParser from "@apidevtools/swagger-parser";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints.ts";
import { generateTanstackQueryFile } from "../src/tanstack-query.generator.ts";

describe("generator", () => {
  test("petstore", async ({ expect }) => {
    const openApiDoc = (await SwaggerParser.parse("./tests/samples/petstore.yaml")) as OpenAPIObject;
    expect(await generateTanstackQueryFile({
      ...mapOpenApiEndpoints(openApiDoc),
      relativeApiClientPath: "./api.client.ts"
    })).toMatchInlineSnapshot(`
      "import { queryOptions } from "@tanstack/react-query";
      import type { EndpointByMethod, ApiClient } from "./api.client.ts";

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
          const queryKey = createQueryKey(path, params[0]);
          const query = {
            /** type-only property if you need easy access to the endpoint params */
            "~endpoint": {} as TEndpoint,
            queryKey,
            options: queryOptions({
              queryFn: async ({ queryKey, signal }) => {
                const res = await this.client.put(path, {
                  ...params,
                  ...queryKey[0],
                  signal,
                });
                return res as TEndpoint["response"];
              },
              queryKey: queryKey,
            }),
            mutationOptions: {
              mutationKey: queryKey,
              mutationFn: async (localOptions) => {
                const res = await this.client.put(path, {
                  ...params,
                  ...queryKey[0],
                  ...localOptions,
                });
                return res as TEndpoint["response"];
              },
            },
          };

          return query;
        }
        // </ApiClient.put>

        // <ApiClient.post>
        post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
          path: Path,
          ...params: MaybeOptionalArg<TEndpoint["parameters"]>
        ) {
          const queryKey = createQueryKey(path, params[0]);
          const query = {
            /** type-only property if you need easy access to the endpoint params */
            "~endpoint": {} as TEndpoint,
            queryKey,
            options: queryOptions({
              queryFn: async ({ queryKey, signal }) => {
                const res = await this.client.post(path, {
                  ...params,
                  ...queryKey[0],
                  signal,
                });
                return res as TEndpoint["response"];
              },
              queryKey: queryKey,
            }),
            mutationOptions: {
              mutationKey: queryKey,
              mutationFn: async (localOptions) => {
                const res = await this.client.post(path, {
                  ...params,
                  ...queryKey[0],
                  ...localOptions,
                });
                return res as TEndpoint["response"];
              },
            },
          };

          return query;
        }
        // </ApiClient.post>

        // <ApiClient.get>
        get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
          path: Path,
          ...params: MaybeOptionalArg<TEndpoint["parameters"]>
        ) {
          const queryKey = createQueryKey(path, params[0]);
          const query = {
            /** type-only property if you need easy access to the endpoint params */
            "~endpoint": {} as TEndpoint,
            queryKey,
            options: queryOptions({
              queryFn: async ({ queryKey, signal }) => {
                const res = await this.client.get(path, {
                  ...params,
                  ...queryKey[0],
                  signal,
                });
                return res as TEndpoint["response"];
              },
              queryKey: queryKey,
            }),
            mutationOptions: {
              mutationKey: queryKey,
              mutationFn: async (localOptions) => {
                const res = await this.client.get(path, {
                  ...params,
                  ...queryKey[0],
                  ...localOptions,
                });
                return res as TEndpoint["response"];
              },
            },
          };

          return query;
        }
        // </ApiClient.get>

        // <ApiClient.delete>
        delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
          path: Path,
          ...params: MaybeOptionalArg<TEndpoint["parameters"]>
        ) {
          const queryKey = createQueryKey(path, params[0]);
          const query = {
            /** type-only property if you need easy access to the endpoint params */
            "~endpoint": {} as TEndpoint,
            queryKey,
            options: queryOptions({
              queryFn: async ({ queryKey, signal }) => {
                const res = await this.client.delete(path, {
                  ...params,
                  ...queryKey[0],
                  signal,
                });
                return res as TEndpoint["response"];
              },
              queryKey: queryKey,
            }),
            mutationOptions: {
              mutationKey: queryKey,
              mutationFn: async (localOptions) => {
                const res = await this.client.delete(path, {
                  ...params,
                  ...queryKey[0],
                  ...localOptions,
                });
                return res as TEndpoint["response"];
              },
            },
          };

          return query;
        }
        // </ApiClient.delete>

        // <ApiClient.request>
        /**
         * Generic mutation method with full type-safety for any endpoint that doesnt require parameters to be passed initially
         */
        mutation<
          TMethod extends keyof EndpointByMethod,
          TPath extends keyof EndpointByMethod[TMethod],
          TEndpoint extends EndpointByMethod[TMethod][TPath],
        >(method: TMethod, path: TPath) {
          const mutationKey = [{ method, path }] as const;
          return {
            mutationKey: mutationKey,
            mutationOptions: {
              mutationKey: mutationKey,
              mutationFn: async (params: TEndpoint extends { parameters: infer Parameters } ? Parameters : never) =>
                this.client.request(method, path, params),
            },
          };
        }
        // </ApiClient.request>
      }
      "
    `);
  });
});
