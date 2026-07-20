import { Schema as S } from "@effect/schema";

// <Schemas>
// </Schemas>

// <Endpoints>
export type get_Get_users = typeof get_Get_users;
export const get_Get_users = {
  method: S.Literal("GET"),
  path: S.Literal("/users"),
  requestFormat: S.Literal("json"),
  parameters: S.Never,
  responses: { 200: S.Array(S.String) },
};

export type post_Very_very_very_very_very_very_very_very_very_very_long =
  typeof post_Very_very_very_very_very_very_very_very_very_very_long;
export const post_Very_very_very_very_very_very_very_very_very_very_long = {
  method: S.Literal("POST"),
  path: S.Literal("/users"),
  requestFormat: S.Literal("json"),
  parameters: { body: S.partial(S.Struct({ username: S.String })) },
  responses: { 201: S.Unknown },
};

// </Endpoints>

// <EndpointByMethod>
export const EndpointByMethod = {
  get: {
    "/users": get_Get_users,
  },
  post: {
    "/users": post_Very_very_very_very_very_very_very_very_very_very_long,
  },
};
export type EndpointByMethod = typeof EndpointByMethod;
// </EndpointByMethod>

// <EndpointByMethod.Shorthands>
export type GetEndpoints = EndpointByMethod["get"];
export type PostEndpoints = EndpointByMethod["post"];
// </EndpointByMethod.Shorthands>

// <ApiClientTypes>
export type EndpointParameters = {
  body?: unknown;
  query?: Record<string, unknown>;
  header?: Record<string, unknown>;
  path?: Record<string, unknown>;
  cookie?: Record<string, unknown>;
};

export type MutationMethod = "post" | "put" | "patch" | "delete";
export type Method = "get" | "head" | "options" | MutationMethod;

type RequestFormat = "json" | "form-data" | "form-url" | "binary" | "text";

export type DefaultEndpoint = {
  parameters?: EndpointParameters | undefined;
  responses?: Record<string, unknown>;
  responseHeaders?: Record<string, unknown>;
};

export type Endpoint<TConfig extends DefaultEndpoint = DefaultEndpoint> = {
  operationId: string;
  method: Method;
  path: string;
  requestFormat: RequestFormat;
  parameters?: TConfig["parameters"];
  meta: {
    alias: string;
    hasParameters: boolean;
    areParametersRequired: boolean;
  };
  responses?: TConfig["responses"];
  responseHeaders?: TConfig["responseHeaders"];
};

/**
 * Minimal response surface used by ApiClient — avoids depending on the DOM `Response`
 * global (helpful for Node without DOM lib). Structural typing accepts fetch Response.
 */
export interface ApiResponse {
  ok: boolean;
  status: number;
  statusText: string;
  headers: {
    get(name: string): string | null;
    getSetCookie?: () => string[];
  };
  json(): Promise<unknown>;
  text(): Promise<string>;
  arrayBuffer(): Promise<ArrayBuffer>;
  clone(): ApiResponse;
}

export interface Fetcher {
  decodePathParams?: (path: string, pathParams: Record<string, string | number | boolean>) => string;
  encodeSearchParams?: (searchParams: Record<string, unknown> | undefined) => URLSearchParams;
  /** Merge cookie params into request headers (default: Cookie header). */
  encodeCookies?: (cookies: Record<string, unknown> | undefined, headers: Headers) => void;
  //
  fetch: (input: {
    method: Method;
    url: URL;
    urlSearchParams?: URLSearchParams | undefined;
    parameters?: EndpointParameters | undefined;
    path: string;
    overrides?: RequestInit;
    throwOnStatusError?: boolean;
  }) => Promise<ApiResponse>;
  parseResponseData?: (response: ApiResponse) => Promise<unknown>;
}

export const successStatusCodes = [
  200, 201, 202, 203, 204, 205, 206, 207, 208, 226, 300, 301, 302, 303, 304, 305, 306, 307, 308,
] as const;
export type SuccessStatusCode = (typeof successStatusCodes)[number];

export const errorStatusCodes = [
  400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 421, 422, 423, 424,
  425, 426, 428, 429, 431, 451, 500, 501, 502, 503, 504, 505, 506, 507, 508, 510, 511,
] as const;
export type ErrorStatusCode = (typeof errorStatusCodes)[number];

// Taken from https://github.com/unjs/fetchdts/blob/ec4eaeab5d287116171fc1efd61f4a1ad34e4609/src/fetch.ts#L3
export interface TypedHeaders<TypedHeaderValues extends Record<string, string> | unknown> extends Omit<
  Headers,
  "append" | "delete" | "get" | "getSetCookie" | "has" | "set" | "forEach"
> {
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/append) */
  append: <Name extends Extract<keyof TypedHeaderValues, string> | (string & {})>(
    name: Name,
    value: Lowercase<Name> extends keyof TypedHeaderValues ? TypedHeaderValues[Lowercase<Name>] : string,
  ) => void;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/delete) */
  delete: <Name extends Extract<keyof TypedHeaderValues, string> | (string & {})>(name: Name) => void;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/get) */
  get: <Name extends Extract<keyof TypedHeaderValues, string> | (string & {})>(
    name: Name,
  ) => (Lowercase<Name> extends keyof TypedHeaderValues ? TypedHeaderValues[Lowercase<Name>] : string) | null;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/getSetCookie) */
  getSetCookie: () => string[];
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/has) */
  has: <Name extends Extract<keyof TypedHeaderValues, string> | (string & {})>(name: Name) => boolean;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/set) */
  set: <Name extends Extract<keyof TypedHeaderValues, string> | (string & {})>(
    name: Name,
    value: Lowercase<Name> extends keyof TypedHeaderValues ? TypedHeaderValues[Lowercase<Name>] : string,
  ) => void;
  forEach: (
    callbackfn: (
      value: TypedHeaderValues[keyof TypedHeaderValues] | (string & {}),
      key: Extract<keyof TypedHeaderValues, string> | (string & {}),
      parent: TypedHeaders<TypedHeaderValues>,
    ) => void,
    thisArg?: any,
  ) => void;
}

/** @see https://developer.mozilla.org/en-US/docs/Web/API/Response */
export interface TypedSuccessResponse<TSuccess, TStatusCode, THeaders> extends Omit<
  ApiResponse,
  "ok" | "status" | "json" | "headers"
> {
  ok: true;
  status: TStatusCode;
  headers: never extends THeaders ? ApiResponse["headers"] : TypedHeaders<THeaders>;
  data: TSuccess;
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) */
  json: () => Promise<TSuccess>;
}

/** @see https://developer.mozilla.org/en-US/docs/Web/API/Response */
export interface TypedErrorResponse<TData, TStatusCode, THeaders> extends Omit<
  ApiResponse,
  "ok" | "status" | "json" | "headers"
> {
  ok: false;
  status: TStatusCode;
  headers: never extends THeaders ? ApiResponse["headers"] : TypedHeaders<THeaders>;
  data: TData;
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) */
  json: () => Promise<TData>;
}

export type TypedApiResponse<TAllResponses extends Record<string | number, unknown> = {}, THeaders = {}> = {
  [K in keyof TAllResponses]: K extends string
    ? K extends `${infer TStatusCode extends number}`
      ? TStatusCode extends SuccessStatusCode
        ? TypedSuccessResponse<TAllResponses[K], TStatusCode, K extends keyof THeaders ? THeaders[K] : never>
        : TypedErrorResponse<TAllResponses[K], TStatusCode, K extends keyof THeaders ? THeaders[K] : never>
      : never
    : K extends number
      ? K extends SuccessStatusCode
        ? TypedSuccessResponse<TAllResponses[K], K, K extends keyof THeaders ? THeaders[K] : never>
        : TypedErrorResponse<TAllResponses[K], K, K extends keyof THeaders ? THeaders[K] : never>
      : never;
}[keyof TAllResponses];

type InferSchemaValue<T> = T extends { Type: infer O }
  ? O
  : T extends object
    ? { [K in keyof T]: InferSchemaValue<T[K]> }
    : T;
type InferSchemaInput<T> = T extends { Encoded: infer I }
  ? I
  : T extends object
    ? { [K in keyof T]: InferSchemaInput<T[K]> }
    : T;

export type SafeApiResponse<TEndpoint> = TEndpoint extends { responses: infer TResponses }
  ? TResponses extends Record<string, unknown>
    ? TypedApiResponse<
        InferSchemaValue<TResponses>,
        TEndpoint extends { responseHeaders: infer THeaders } ? InferSchemaValue<THeaders> : never
      >
    : never
  : never;

export type InferResponseByStatus<TEndpoint, TStatusCode> = Extract<
  SafeApiResponse<TEndpoint>,
  { status: TStatusCode }
>;

type RequiredKeys<T> = {
  [P in keyof T]-?: undefined extends T[P] ? never : P;
}[keyof T];

type MaybeOptionalArg<T> = RequiredKeys<T> extends never ? [config?: T] : [config: T];
type NotNever<T> = [T] extends [never] ? false : true;

export type ValidateSide = "none" | "input" | "output" | "both";
export type OnValidate = (ctx: {
  side: "input" | "output";
  method: string;
  path: string;
  schema: unknown;
  value: unknown;
}) => unknown | Promise<unknown>;

// </ApiClientTypes>

// <TypedStatusError>
export class TypedStatusError<TData = unknown> extends Error {
  response: TypedErrorResponse<TData, ErrorStatusCode, unknown>;
  status: number;
  constructor(response: TypedErrorResponse<TData, ErrorStatusCode, unknown>) {
    super(`HTTP ${response.status}: ${response.statusText}`);
    this.name = "TypedStatusError";
    this.response = response;
    this.status = response.status;
  }
}
// </TypedStatusError>

import { Effect } from "effect";
import type { ParseError } from "effect/ParseResult";

// <HttpClientError>
export class HttpClientError extends Error {
  readonly _tag = "HttpClientError";
  constructor(
    message: string,
    readonly cause?: unknown,
  ) {
    super(message);
    this.name = "HttpClientError";
  }
}
// </HttpClientError>

// <ValidateHelpers>
const defaultParse = (schema: unknown, value: unknown): unknown => {
  return S.decodeUnknownSync(schema as never)(value);
};

const runValidate = async (ctx: {
  side: "input" | "output";
  method: string;
  path: string;
  schema: unknown;
  value: unknown;
  onValidate?: OnValidate;
}): Promise<unknown> => {
  if (ctx.onValidate) return ctx.onValidate(ctx);
  return defaultParse(ctx.schema, ctx.value);
};
// </ValidateHelpers>

export type EffectFetcher = {
  decodePathParams?: (path: string, pathParams: Record<string, string | number | boolean>) => string;
  encodeSearchParams?: (searchParams: Record<string, unknown> | undefined) => URLSearchParams;
  encodeCookies?: (cookies: Record<string, unknown> | undefined, headers: Headers) => void;
  parseResponseData?: (response: ApiResponse) => Promise<unknown>;
  fetch: (input: {
    method: Method;
    url: URL;
    urlSearchParams?: URLSearchParams | undefined;
    parameters?: unknown;
    path: string;
    overrides?: RequestInit;
    throwOnStatusError?: boolean;
  }) => Effect.Effect<ApiResponse, HttpClientError, never>;
};

const wrapPromiseFetcher = (fetcher: Fetcher): EffectFetcher => ({
  decodePathParams: fetcher.decodePathParams,
  encodeSearchParams: fetcher.encodeSearchParams,
  encodeCookies: fetcher.encodeCookies,
  parseResponseData: fetcher.parseResponseData,
  fetch: (input) =>
    Effect.tryPromise({
      try: () => fetcher.fetch(input as never),
      catch: (cause) => new HttpClientError("fetch failed", cause),
    }),
});

// <EffectApiClient>
export class EffectApiClient {
  baseUrl: string = "";
  successStatusCodes = successStatusCodes;
  errorStatusCodes = errorStatusCodes;
  validate: ValidateSide = "both";
  onValidate?: OnValidate;
  private effectFetcher: EffectFetcher;

  constructor(
    fetcher: Fetcher | EffectFetcher,
    options?: { validate?: ValidateSide; onValidate?: OnValidate; effectFetcher?: boolean },
  ) {
    this.effectFetcher = options?.effectFetcher ? (fetcher as EffectFetcher) : wrapPromiseFetcher(fetcher as Fetcher);
    if (options?.validate !== undefined) this.validate = options.validate;
    if (options?.onValidate) this.onValidate = options.onValidate;
  }

  setBaseUrl(baseUrl: string) {
    this.baseUrl = baseUrl;
    return this;
  }

  request<
    TMethod extends keyof EndpointByMethod,
    TPath extends keyof EndpointByMethod[TMethod],
    TEndpoint extends EndpointByMethod[TMethod][TPath],
  >(
    method: TMethod,
    path: TPath,
    ...params: MaybeOptionalArg<any>
  ): Effect.Effect<
    Extract<InferResponseByStatus<TEndpoint, SuccessStatusCode>, { data: {} }>["data"],
    TypedStatusError | HttpClientError | ParseError | Error,
    never
  > {
    const self = this;
    return Effect.gen(function* () {
      const requestParams = params[0];
      const validateSide: ValidateSide = requestParams?.validate ?? self.validate;
      const parametersToSend: EndpointParameters = {};
      if (requestParams?.body !== undefined) (parametersToSend as any).body = requestParams.body;
      if (requestParams?.query !== undefined) (parametersToSend as any).query = requestParams.query;
      if (requestParams?.header !== undefined) (parametersToSend as any).header = requestParams.header;
      if (requestParams?.path !== undefined) (parametersToSend as any).path = requestParams.path;
      if (requestParams?.cookie !== undefined) (parametersToSend as any).cookie = requestParams.cookie;

      const endpointSchema = (EndpointByMethod as any)[method]?.[path];
      if ((validateSide === "input" || validateSide === "both") && endpointSchema?.parameters) {
        for (const key of ["body", "query", "header", "path", "cookie"] as const) {
          const schema = endpointSchema.parameters[key];
          const value = (parametersToSend as any)[key];
          if (schema && value !== undefined) {
            if (self.onValidate) {
              (parametersToSend as any)[key] = yield* Effect.tryPromise({
                try: () =>
                  runValidate({
                    side: "input",
                    method: String(method),
                    path: String(path),
                    schema: schema,
                    value: value,
                    onValidate: self.onValidate,
                  }),
                catch: (e) => (e instanceof Error ? e : new Error(String(e))),
              });
            } else {
              (parametersToSend as any)[key] = yield* S.decodeUnknown(schema as never)(value);
            }
          }
        }
      }

      const decodePath =
        self.effectFetcher.decodePathParams ??
        ((url: string, p: Record<string, string | number | boolean>) =>
          url
            .replace(/{(\w+)}/g, (_, key: string) => (p[key] != null ? String(p[key]) : `{${key}}`))
            .replace(/:([a-zA-Z0-9_]+)/g, (_, key: string) => (p[key] != null ? String(p[key]) : `:${key}`)));
      const encodeSearch =
        self.effectFetcher.encodeSearchParams ??
        ((queryParams: Record<string, unknown> | undefined) => {
          if (!queryParams) return undefined;
          const searchParams = new URLSearchParams();
          Object.entries(queryParams).forEach(([key, value]) => {
            if (value != null) {
              if (Array.isArray(value)) value.forEach((val) => val != null && searchParams.append(key, String(val)));
              else searchParams.append(key, String(value));
            }
          });
          return searchParams;
        });
      const encodeCookies =
        self.effectFetcher.encodeCookies ??
        ((cookies: Record<string, unknown> | undefined, headers: Headers) => {
          if (!cookies) return;
          const parts = Object.entries(cookies)
            .filter(([, value]) => value != null)
            .map(([key, value]) => `${key}=${String(value)}`);
          if (!parts.length) return;
          const existing = headers.get("cookie");
          headers.set("cookie", existing ? `${existing}; ${parts.join("; ")}` : parts.join("; "));
        });
      const parseData =
        self.effectFetcher.parseResponseData ??
        (async (response: ApiResponse) => {
          const contentType = response.headers.get("content-type") ?? "";
          if (contentType.includes("json") || contentType === "*/*") {
            try {
              return await response.json();
            } catch {
              return undefined;
            }
          }
          if (contentType.startsWith("text/")) return response.text();
          return undefined;
        });

      const resolvedPath = decodePath(
        self.baseUrl + (path as string),
        (parametersToSend.path ?? {}) as Record<string, string | number | boolean>,
      );
      const url = new URL(resolvedPath);
      const urlSearchParams = encodeSearch(parametersToSend.query);

      let overrides = requestParams?.overrides as RequestInit | undefined;
      if (parametersToSend.cookie) {
        const headers = new Headers(overrides?.headers);
        encodeCookies(parametersToSend.cookie, headers);
        overrides = { ...overrides, headers };
      }

      const response = yield* self.effectFetcher.fetch({
        method: method as Method,
        path: path as string,
        url,
        urlSearchParams,
        parameters: parametersToSend,
        overrides,
      });

      let data = yield* Effect.tryPromise({
        try: () => parseData(response),
        catch: (cause) => new HttpClientError("parse failed", cause),
      });

      if ((validateSide === "output" || validateSide === "both") && response.ok && endpointSchema?.responses) {
        const responseSchema = endpointSchema.responses[String(response.status)] ?? endpointSchema.responses["default"];
        if (responseSchema) {
          if (self.onValidate) {
            data = yield* Effect.tryPromise({
              try: () =>
                runValidate({
                  side: "output",
                  method: String(method),
                  path: String(path),
                  schema: responseSchema,
                  value: data,
                  onValidate: self.onValidate,
                }),
              catch: (e) => (e instanceof Error ? e : new Error(String(e))),
            });
          } else {
            data = yield* S.decodeUnknown(responseSchema as never)(data);
          }
        }
      }

      if (errorStatusCodes.includes(response.status as never)) {
        const typedResponse = Object.assign(response, { data, json: () => Promise.resolve(data) });
        return yield* Effect.fail(new TypedStatusError(typedResponse as never));
      }

      return data as Extract<InferResponseByStatus<TEndpoint, SuccessStatusCode>, { data: {} }>["data"];
    });
  }

  get<Path extends keyof GetEndpoints>(path: Path, ...params: MaybeOptionalArg<any>) {
    return this.request("get" as never, path as never, ...params);
  }
  post<Path extends keyof PostEndpoints>(path: Path, ...params: MaybeOptionalArg<any>) {
    return this.request("post" as never, path as never, ...params);
  }
}

export function createEffectApiClient(
  fetcher: Fetcher | EffectFetcher,
  baseUrl?: string,
  options?: { validate?: ValidateSide; onValidate?: OnValidate; effectFetcher?: boolean },
) {
  return new EffectApiClient(fetcher, options).setBaseUrl(baseUrl ?? "");
}
// </EffectApiClient>
