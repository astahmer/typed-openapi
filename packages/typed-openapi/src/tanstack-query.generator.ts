import { capitalize } from "pastable/server";
import { prettify } from "./format.ts";
import type { mapOpenApiEndpoints } from "./map-openapi-endpoints.ts";

// Default error status codes (4xx and 5xx ranges)
export const DEFAULT_ERROR_STATUS_CODES = [
  400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 421, 422, 423, 424,
  425, 426, 428, 429, 431, 451, 500, 501, 502, 503, 504, 505, 506, 507, 508, 510, 511,
] as const;

export type ErrorStatusCode = (typeof DEFAULT_ERROR_STATUS_CODES)[number];

type GeneratorOptions = ReturnType<typeof mapOpenApiEndpoints> & {
  errorStatusCodes?: readonly number[];
};
type GeneratorContext = Required<GeneratorOptions>;

export const generateTanstackQueryFile = async (ctx: GeneratorContext & { relativeApiClientPath: string }) => {
  const endpointMethods = new Set(ctx.endpointList.map((endpoint) => endpoint.method.toLowerCase()));

  // Use configured error status codes or default
  const errorStatusCodes = ctx.errorStatusCodes ?? DEFAULT_ERROR_STATUS_CODES;

  const file = `
  import { queryOptions } from "@tanstack/react-query"
  import type { EndpointByMethod, ApiClient, SafeApiResponse } from "${ctx.relativeApiClientPath}"

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
  };

  type RequiredKeys<T> = {
      [P in keyof T]-?: undefined extends T[P] ? never : P;
  }[keyof T];

  type MaybeOptionalArg<T> = RequiredKeys<T> extends never ? [config?: T] : [config: T];

  type ErrorStatusCode = ${errorStatusCodes.join(" | ")};

  // </ApiClientTypes>

  // <ApiClient>
  export class TanstackQueryApiClient {
      constructor(public client: ApiClient) { }

      ${Array.from(endpointMethods)
        .map(
          (method) => `
        // <ApiClient.${method}>
        ${method}<Path extends keyof ${capitalize(method)}Endpoints, TEndpoint extends ${capitalize(method)}Endpoints[Path]>(
            path: Path,
            ...params: MaybeOptionalArg<TEndpoint["parameters"]>
        ) {
            const queryKey = createQueryKey(path as string, params[0]);
            const query = {
                /** type-only property if you need easy access to the endpoint params */
                "~endpoint": {} as TEndpoint,
                queryKey,
                queryOptions: queryOptions({
                    queryFn: async ({ queryKey, signal, }) => {
                        const requestParams = {
                            ...(params[0] || {}),
                            ...(queryKey[0] || {}),
                            signal,
                            withResponse: false as const
                        };
                        const res = await this.client.${method}(path, requestParams);
                        return res as TEndpoint["response"];
                    },
                    queryKey: queryKey
                }),
                mutationOptions: {
                    mutationKey: queryKey,
                    mutationFn: async (localOptions: TEndpoint extends { parameters: infer Parameters} ? Parameters: never) => {
                        const requestParams = {
                            ...(params[0] || {}),
                            ...(queryKey[0] || {}),
                            ...(localOptions || {}),
                            withResponse: false as const
                        };
                        const res = await this.client.${method}(path, requestParams);
                        return res as TEndpoint["response"];
                    }
                }
            };

            return query
        }
        // </ApiClient.${method}>
        `,
        )
        .join("\n")}

        // <ApiClient.request>
        /**
         * Generic mutation method with full type-safety for any endpoint that doesnt require parameters to be passed initially
         */
        mutation<
            TMethod extends keyof EndpointByMethod,
            TPath extends keyof EndpointByMethod[TMethod],
            TEndpoint extends EndpointByMethod[TMethod][TPath],
            TWithResponse extends boolean = false,
            TSelection = TWithResponse extends true
                ? SafeApiResponse<TEndpoint>
                : TEndpoint extends { response: infer Res } ? Res : never,
            TError = TEndpoint extends { responses: infer TResponses }
                ? TResponses extends Record<string | number, unknown>
                    ? {
                        [K in keyof TResponses]: K extends string
                            ? K extends \`\${infer TStatusCode extends number}\`
                                ? TStatusCode extends ErrorStatusCode
                                    ? { status: TStatusCode; data: TResponses[K] }
                                    : never
                                : never
                            : K extends number
                                ? K extends ErrorStatusCode
                                    ? { status: K; data: TResponses[K] }
                                    : never
                                : never;
                    }[keyof TResponses]
                    : Error
                : Error
        >(method: TMethod, path: TPath, options?: {
            withResponse?: TWithResponse;
            selectFn?: (res: TWithResponse extends true
                ? SafeApiResponse<TEndpoint>
                : TEndpoint extends { response: infer Res } ? Res : never
            ) => TSelection;
        }) {
            const mutationKey = [{ method, path }] as const;
            return {
            /** type-only property if you need easy access to the endpoint params */
            "~endpoint": {} as TEndpoint,
            mutationKey: mutationKey,
            mutationOptions: {
                mutationKey: mutationKey,
                mutationFn: async (params: TEndpoint extends { parameters: infer Parameters } ? Parameters : never): Promise<TSelection> => {
                    const withResponse = options?.withResponse ?? false;
                    const selectFn = options?.selectFn;

                    if (withResponse) {
                        // Type assertion is safe because we're handling the method dynamically
                        const response = await (this.client as any)[method](path, { ...params as any, withResponse: true });
                        if (!response.ok) {
                            const error = { status: response.status, data: response.data } as TError;
                            throw error;
                        }
                        const res = selectFn ? selectFn(response as any) : response;
                        return res as TSelection;
                    }

                    // Type assertion is safe because we're handling the method dynamically
                    const response = await (this.client as any)[method](path, { ...params as any, withResponse: false });
                    const res = selectFn ? selectFn(response as any) : response;
                    return res as TSelection;
                }
            } as import("@tanstack/react-query").UseMutationOptions<TSelection, TError, TEndpoint extends { parameters: infer Parameters } ? Parameters : never>,
        }
    }
        // </ApiClient.request>
  }
`;

  return prettify(file);
};
