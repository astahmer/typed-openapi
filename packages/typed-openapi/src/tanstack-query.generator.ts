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
                endpoint: {} as TEndpoint,
                res: {} as TEndpoint["response"],
                queryKey,
                options: queryOptions({
                    queryFn: async ({ queryKey, signal, }) => {
                        const res = await this.client.${method}(path, {
                            ...params,
                            ...queryKey[0],
                            signal,
                            throwOnError: true
                        });
                        return res as TEndpoint["response"];
                    },
                    queryKey: queryKey
                }),
            };

            return query
        }
        // </ApiClient.get>
        `).join("\n")}
  }
`;

    return prettify(file);
};
