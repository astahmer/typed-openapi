import { capitalize } from "pastable/server";
import { prettify } from "./format.ts";
import type { mapOpenApiEndpoints } from "./map-openapi-endpoints.ts";

type GeneratorOptions = ReturnType<typeof mapOpenApiEndpoints>
type GeneratorContext = Required<GeneratorOptions>;

export const generateTanstackQueryFile = async (ctx: GeneratorContext & { relativeApiClientPath: string }) => {
    const endpointMethods = (new Set(ctx.endpointList.map((endpoint) => endpoint.method.toLowerCase())));

    const file = `
  import { queryOptions } from "@tanstack/react-query"
  import type { EndpointByMethod, ApiClient } from "${ctx.relativeApiClientPath}"

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
      return [
          params
      ];
  };

  // <EndpointByMethod.Shorthands>
  ${Array.from(endpointMethods).map((method) => `export type ${capitalize(method)}Endpoints = EndpointByMethod["${method}"];`).join("\n")}
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
      constructor(public client: ApiClient) { }

      ${Array.from(endpointMethods).map((method) => `
        // <ApiClient.${method}>
        ${method}<Path extends keyof ${capitalize(method)}Endpoints, TEndpoint extends ${capitalize(method)}Endpoints[Path]>(
            path: Path,
            ...params: MaybeOptionalArg<TEndpoint["parameters"]>
        ) {
            const queryKey = createQueryKey(path, params[0]);
            const query = {
                /** type-only property if you need easy access to the endpoint params */
                "~endpoint": {} as TEndpoint,
                queryKey,
                queryOptions: queryOptions({
                    queryFn: async ({ queryKey, signal, }) => {
                        const res = await this.client.${method}(path, {
                            ...params,
                            ...queryKey[0],
                            signal,
                        });
                        return res as TEndpoint["response"];
                    },
                    queryKey: queryKey
                }),
                mutationOptions: {
                    mutationKey: queryKey,
                    mutationFn: async (localOptions: TEndpoint extends { parameters: infer Parameters} ? Parameters: never) => {
                        const res = await this.client.${method}(path, {
                            ...params,
                            ...queryKey[0],
                            ...localOptions,
                        });
                        return res as TEndpoint["response"];
                    }
                }
            };

            return query
        }
        // </ApiClient.${method}>
        `).join("\n")}

        // <ApiClient.request>
        /**
         * Generic mutation method with full type-safety for any endpoint that doesnt require parameters to be passed initially
         */
        mutation<
            TMethod extends keyof EndpointByMethod,
            TPath extends keyof EndpointByMethod[TMethod],
            TEndpoint extends EndpointByMethod[TMethod][TPath],
            TSelection,
        >(method: TMethod, path: TPath, selectFn?: (res: Omit<Response, "json"> & {
            /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/json) */
            json: () => Promise<TEndpoint extends { response: infer Res } ? Res : never>;
        }) => TSelection) {
            const mutationKey = [{ method, path }] as const;
            return {
            /** type-only property if you need easy access to the endpoint params */
            "~endpoint": {} as TEndpoint,
            mutationKey: mutationKey,
            mutationOptions: {
                mutationKey: mutationKey,
                mutationFn: async (params: TEndpoint extends { parameters: infer Parameters } ? Parameters : never) => {
                const response = await this.client.request(method, path, params);
                const res = selectFn ? selectFn(response) : response
                return res as unknown extends TSelection ? typeof response : Awaited<TSelection>
                },
            },
            };
        }
        // </ApiClient.request>
  }
`;

    return prettify(file);
};
