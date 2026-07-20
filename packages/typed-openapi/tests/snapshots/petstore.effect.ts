import { Schema } from "effect";

// <Schemas>
export const Order = Schema.partial(
  Schema.Struct({
    id: Schema.Int,
    petId: Schema.Int,
    quantity: Schema.Int,
    shipDate: Schema.String,
    status: Schema.Union(Schema.Literal("placed"), Schema.Literal("approved"), Schema.Literal("delivered")),
    complete: Schema.Boolean,
  }),
);
export type Order = typeof Order.Type;

export const Address = Schema.partial(
  Schema.Struct({ street: Schema.String, city: Schema.String, state: Schema.String, zip: Schema.String }),
);
export type Address = typeof Address.Type;

export const Customer = Schema.partial(
  Schema.Struct({ id: Schema.Int, username: Schema.String, address: Schema.Array(Address) }),
);
export type Customer = typeof Customer.Type;

export const Category = Schema.partial(Schema.Struct({ id: Schema.Int, name: Schema.String }));
export type Category = typeof Category.Type;

export const User = Schema.partial(
  Schema.Struct({
    id: Schema.Int,
    username: Schema.String,
    firstName: Schema.String,
    lastName: Schema.String,
    email: Schema.String,
    password: Schema.String,
    phone: Schema.String,
    userStatus: Schema.Int,
  }),
);
export type User = typeof User.Type;

export const Tag = Schema.partial(Schema.Struct({ id: Schema.Int, name: Schema.String }));
export type Tag = typeof Tag.Type;

export const Pet = Schema.Struct({
  id: Schema.optional(Schema.Int),
  name: Schema.String,
  category: Schema.optional(Category),
  photoUrls: Schema.Array(Schema.String),
  tags: Schema.optional(Schema.Array(Tag)),
  status: Schema.optional(Schema.Union(Schema.Literal("available"), Schema.Literal("pending"), Schema.Literal("sold"))),
});
export type Pet = typeof Pet.Type;

export const ApiResponse = Schema.partial(
  Schema.Struct({ code: Schema.Int, type: Schema.String, message: Schema.String }),
);
export type ApiResponse = typeof ApiResponse.Type;

// </Schemas>

// <Endpoints>
export type put_UpdatePet = typeof put_UpdatePet;
export const put_UpdatePet = {
  method: Schema.Literal("PUT"),
  path: Schema.Literal("/pet"),
  requestFormat: Schema.Literal("json"),
  parameters: { body: Pet },
  responses: { 200: Pet, 400: Schema.Unknown, 404: Schema.Unknown, 405: Schema.Unknown },
};

export type post_AddPet = typeof post_AddPet;
export const post_AddPet = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/pet"),
  requestFormat: Schema.Literal("json"),
  parameters: { body: Pet },
  responses: { 200: Pet, 405: Schema.Unknown },
};

export type get_FindPetsByStatus = typeof get_FindPetsByStatus;
export const get_FindPetsByStatus = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/pet/findByStatus"),
  requestFormat: Schema.Literal("json"),
  parameters: {
    query: Schema.partial(
      Schema.Struct({
        status: Schema.transform(
          Schema.UndefinedOr(
            Schema.Union(Schema.Literal("available"), Schema.Literal("pending"), Schema.Literal("sold")),
          ),
          Schema.Union(Schema.Literal("available"), Schema.Literal("pending"), Schema.Literal("sold")),
          { strict: true, decode: (i) => (i === undefined ? "available" : i), encode: (a) => a },
        ),
      }),
    ),
  },
  responses: {
    200: Schema.Array(Pet),
    304: Schema.Unknown,
    400: Schema.Struct({ code: Schema.Int, message: Schema.String }),
  },
};

export type get_FindPetsByTags = typeof get_FindPetsByTags;
export const get_FindPetsByTags = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/pet/findByTags"),
  requestFormat: Schema.Literal("json"),
  parameters: { query: Schema.partial(Schema.Struct({ tags: Schema.Array(Schema.String) })) },
  responses: { 200: Schema.Union(Schema.Array(Pet), Schema.Array(User), Schema.Array(Tag)), 400: Schema.Unknown },
};

export type get_GetPetById = typeof get_GetPetById;
export const get_GetPetById = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/pet/{petId}"),
  requestFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ petId: Schema.NumberFromString.pipe(Schema.int()) }) },
  responses: {
    200: Pet,
    400: Schema.Struct({ code: Schema.Int, message: Schema.String }),
    404: Schema.Struct({ code: Schema.Int, message: Schema.String }),
  },
};

export type post_UpdatePetWithForm = typeof post_UpdatePetWithForm;
export const post_UpdatePetWithForm = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/pet/{petId}"),
  requestFormat: Schema.Literal("json"),
  parameters: {
    query: Schema.partial(Schema.Struct({ name: Schema.String, status: Schema.String })),
    path: Schema.Struct({ petId: Schema.NumberFromString.pipe(Schema.int()) }),
  },
  responses: { 405: Schema.Unknown },
};

export type delete_DeletePet = typeof delete_DeletePet;
export const delete_DeletePet = {
  method: Schema.Literal("DELETE"),
  path: Schema.Literal("/pet/{petId}"),
  requestFormat: Schema.Literal("json"),
  parameters: {
    path: Schema.Struct({ petId: Schema.NumberFromString.pipe(Schema.int()) }),
    header: Schema.partial(Schema.Struct({ api_key: Schema.String })),
  },
  responses: { 400: Schema.Unknown },
};

export type post_UploadFile = typeof post_UploadFile;
export const post_UploadFile = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/pet/{petId}/uploadImage"),
  requestFormat: Schema.Literal("binary"),
  parameters: {
    query: Schema.partial(Schema.Struct({ additionalMetadata: Schema.String })),
    path: Schema.Struct({ petId: Schema.NumberFromString.pipe(Schema.int()) }),
    body: Schema.String,
  },
  responses: { 200: ApiResponse },
};

export type get_GetInventory = typeof get_GetInventory;
export const get_GetInventory = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/store/inventory"),
  requestFormat: Schema.Literal("json"),
  parameters: Schema.Never,
  responses: { 200: Schema.Record({ key: Schema.String, value: Schema.Int }) },
};

export type post_PlaceOrder = typeof post_PlaceOrder;
export const post_PlaceOrder = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/store/order"),
  requestFormat: Schema.Literal("json"),
  parameters: { body: Order },
  responses: { 200: Order, 405: Schema.Unknown },
};

export type get_GetOrderById = typeof get_GetOrderById;
export const get_GetOrderById = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/store/order/{orderId}"),
  requestFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ orderId: Schema.NumberFromString.pipe(Schema.int()) }) },
  responses: { 200: Order, 400: Schema.Unknown, 404: Schema.Unknown },
};

export type delete_DeleteOrder = typeof delete_DeleteOrder;
export const delete_DeleteOrder = {
  method: Schema.Literal("DELETE"),
  path: Schema.Literal("/store/order/{orderId}"),
  requestFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ orderId: Schema.NumberFromString.pipe(Schema.int()) }) },
  responses: { 400: Schema.Unknown, 404: Schema.Unknown },
};

export type post_CreateUser = typeof post_CreateUser;
export const post_CreateUser = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/user"),
  requestFormat: Schema.Literal("json"),
  parameters: { body: User },
  responses: { default: User },
};

export type post_CreateUsersWithListInput = typeof post_CreateUsersWithListInput;
export const post_CreateUsersWithListInput = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/user/createWithList"),
  requestFormat: Schema.Literal("json"),
  parameters: { body: Schema.Array(User) },
  responses: { 200: User, default: Schema.Unknown },
};

export type get_LoginUser = typeof get_LoginUser;
export const get_LoginUser = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/user/login"),
  requestFormat: Schema.Literal("json"),
  parameters: { query: Schema.partial(Schema.Struct({ username: Schema.String, password: Schema.String })) },
  responses: { 200: Schema.String, 400: Schema.Unknown },
  responseHeaders: {
    200: Schema.Struct({ "X-Rate-Limit": Schema.Int, "X-Expires-After": Schema.String }),
    400: Schema.Struct({ "X-Error": Schema.String }),
  },
};

export type get_LogoutUser = typeof get_LogoutUser;
export const get_LogoutUser = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/user/logout"),
  requestFormat: Schema.Literal("json"),
  parameters: Schema.Never,
  responses: { default: Schema.Unknown },
};

export type get_GetUserByName = typeof get_GetUserByName;
export const get_GetUserByName = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/user/{username}"),
  requestFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ username: Schema.String }) },
  responses: {
    200: User,
    201: Schema.Struct({ id: Schema.Int, username: Schema.String }),
    400: Schema.Struct({ code: Schema.Int, message: Schema.String }),
    404: Schema.Unknown,
  },
};

export type put_UpdateUser = typeof put_UpdateUser;
export const put_UpdateUser = {
  method: Schema.Literal("PUT"),
  path: Schema.Literal("/user/{username}"),
  requestFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ username: Schema.String }), body: User },
  responses: { default: Schema.Unknown },
};

export type delete_DeleteUser = typeof delete_DeleteUser;
export const delete_DeleteUser = {
  method: Schema.Literal("DELETE"),
  path: Schema.Literal("/user/{username}"),
  requestFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ username: Schema.String }) },
  responses: { 400: Schema.Unknown, 404: Schema.Unknown },
};

export type get_GetPetTextPlain = typeof get_GetPetTextPlain;
export const get_GetPetTextPlain = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/pet/text"),
  requestFormat: Schema.Literal("json"),
  parameters: Schema.Never,
  responses: { 200: User },
};

export type get_GetPetEmpty = typeof get_GetPetEmpty;
export const get_GetPetEmpty = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/pet/empty"),
  requestFormat: Schema.Literal("json"),
  parameters: Schema.Never,
  responses: { 204: Schema.Unknown },
};

export type get_GetPetCustom = typeof get_GetPetCustom;
export const get_GetPetCustom = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/pet/custom"),
  requestFormat: Schema.Literal("json"),
  parameters: Schema.Never,
  responses: { 200: Pet },
};

// </Endpoints>

// <EndpointByMethod>
export const EndpointByMethod = {
  put: {
    "/pet": put_UpdatePet,
    "/user/{username}": put_UpdateUser,
  },
  post: {
    "/pet": post_AddPet,
    "/pet/{petId}": post_UpdatePetWithForm,
    "/pet/{petId}/uploadImage": post_UploadFile,
    "/store/order": post_PlaceOrder,
    "/user": post_CreateUser,
    "/user/createWithList": post_CreateUsersWithListInput,
  },
  get: {
    "/pet/findByStatus": get_FindPetsByStatus,
    "/pet/findByTags": get_FindPetsByTags,
    "/pet/{petId}": get_GetPetById,
    "/store/inventory": get_GetInventory,
    "/store/order/{orderId}": get_GetOrderById,
    "/user/login": get_LoginUser,
    "/user/logout": get_LogoutUser,
    "/user/{username}": get_GetUserByName,
    "/pet/text": get_GetPetTextPlain,
    "/pet/empty": get_GetPetEmpty,
    "/pet/custom": get_GetPetCustom,
  },
  delete: {
    "/pet/{petId}": delete_DeletePet,
    "/store/order/{orderId}": delete_DeleteOrder,
    "/user/{username}": delete_DeleteUser,
  },
};
export type EndpointByMethod = typeof EndpointByMethod;
// </EndpointByMethod>

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
  return Schema.decodeUnknownSync(schema as never)(value);
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
              (parametersToSend as any)[key] = yield* Schema.decodeUnknown(schema as never)(value);
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
            data = yield* Schema.decodeUnknown(responseSchema as never)(data);
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

  put<Path extends keyof PutEndpoints>(path: Path, ...params: MaybeOptionalArg<any>) {
    return this.request("put" as never, path as never, ...params);
  }
  post<Path extends keyof PostEndpoints>(path: Path, ...params: MaybeOptionalArg<any>) {
    return this.request("post" as never, path as never, ...params);
  }
  get<Path extends keyof GetEndpoints>(path: Path, ...params: MaybeOptionalArg<any>) {
    return this.request("get" as never, path as never, ...params);
  }
  delete<Path extends keyof DeleteEndpoints>(path: Path, ...params: MaybeOptionalArg<any>) {
    return this.request("delete" as never, path as never, ...params);
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
