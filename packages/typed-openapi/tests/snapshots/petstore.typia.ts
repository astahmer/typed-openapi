import typia, { tags } from "typia";

// <Schemas>
export type Order = Partial<{
  id: number;
  petId: number;
  quantity: number;
  shipDate: string;
  status: "placed" | "approved" | "delivered";
  complete: boolean;
}>;
export const isOrder = typia.createIs<Order>();
export const assertOrder = typia.createAssert<Order>();
export const validateOrder = typia.createValidate<Order>();

export type Address = Partial<{ street: string; city: string; state: string; zip: string }>;
export const isAddress = typia.createIs<Address>();
export const assertAddress = typia.createAssert<Address>();
export const validateAddress = typia.createValidate<Address>();

export type Customer = Partial<{ id: number; username: string; address: Array<Address> }>;
export const isCustomer = typia.createIs<Customer>();
export const assertCustomer = typia.createAssert<Customer>();
export const validateCustomer = typia.createValidate<Customer>();

export type Category = Partial<{ id: number; name: string }>;
export const isCategory = typia.createIs<Category>();
export const assertCategory = typia.createAssert<Category>();
export const validateCategory = typia.createValidate<Category>();

export type User = Partial<{
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  userStatus: number;
}>;
export const isUser = typia.createIs<User>();
export const assertUser = typia.createAssert<User>();
export const validateUser = typia.createValidate<User>();

export type Tag = Partial<{ id: number; name: string }>;
export const isTag = typia.createIs<Tag>();
export const assertTag = typia.createAssert<Tag>();
export const validateTag = typia.createValidate<Tag>();

export type Pet = {
  id?: number;
  name: string;
  category?: Category;
  photoUrls: Array<string>;
  tags?: Array<Tag>;
  status?: "available" | "pending" | "sold";
} & Record<string, unknown>;
export const isPet = typia.createIs<Pet>();
export const assertPet = typia.createAssert<Pet>();
export const validatePet = typia.createValidate<Pet>();

export type ApiResponse = Partial<{ code: number; type: string; message: string }>;
export const isApiResponse = typia.createIs<ApiResponse>();
export const assertApiResponse = typia.createAssert<ApiResponse>();
export const validateApiResponse = typia.createValidate<ApiResponse>();

// </Schemas>

// <Endpoints>
export type put_UpdatePet = typeof put_UpdatePet;
export const put_UpdatePet = {
  method: typia.createIs<"PUT">(),
  path: typia.createIs<"/pet">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { body: isPet },
  responses: {
    200: isPet,
    400: typia.createIs<unknown>(),
    404: typia.createIs<unknown>(),
    405: typia.createIs<unknown>(),
  },
};

export type post_AddPet = typeof post_AddPet;
export const post_AddPet = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/pet">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { body: isPet },
  responses: { 200: isPet, 405: typia.createIs<unknown>() },
};

export type get_FindPetsByStatus = typeof get_FindPetsByStatus;
export const get_FindPetsByStatus = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/pet/findByStatus">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: typia.createEquals<Partial<{ status: "available" | "pending" | "sold" }>>() },
  responses: {
    200: typia.createIs<Array<Pet>>(),
    304: typia.createIs<unknown>(),
    400: typia.createIs<{ code: number; message: string } & Record<string, unknown>>(),
  },
};

export type get_FindPetsByTags = typeof get_FindPetsByTags;
export const get_FindPetsByTags = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/pet/findByTags">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: typia.createEquals<Partial<{ tags: Array<string> }>>() },
  responses: { 200: typia.createIs<Array<Pet> | Array<User> | Array<Tag>>(), 400: typia.createIs<unknown>() },
};

export type get_GetPetById = typeof get_GetPetById;
export const get_GetPetById = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/pet/{petId}">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: typia.createEquals<{ petId: number }>() },
  responses: {
    200: isPet,
    400: typia.createIs<{ code: number; message: string } & Record<string, unknown>>(),
    404: typia.createIs<{ code: number; message: string } & Record<string, unknown>>(),
  },
};

export type post_UpdatePetWithForm = typeof post_UpdatePetWithForm;
export const post_UpdatePetWithForm = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/pet/{petId}">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: {
    query: typia.createEquals<Partial<{ name: string; status: string }>>(),
    path: typia.createEquals<{ petId: number }>(),
  },
  responses: { 405: typia.createIs<unknown>() },
};

export type delete_DeletePet = typeof delete_DeletePet;
export const delete_DeletePet = {
  method: typia.createIs<"DELETE">(),
  path: typia.createIs<"/pet/{petId}">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: {
    path: typia.createEquals<{ petId: number }>(),
    header: typia.createEquals<Partial<{ api_key: string }>>(),
  },
  responses: { 400: typia.createIs<unknown>() },
};

export type post_UploadFile = typeof post_UploadFile;
export const post_UploadFile = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/pet/{petId}/uploadImage">(),
  requestFormat: typia.createIs<"binary">(),
  responseFormat: typia.createIs<"json">(),
  parameters: {
    query: typia.createEquals<Partial<{ additionalMetadata: string }>>(),
    path: typia.createEquals<{ petId: number }>(),
    body: typia.createIs<Blob>(),
  },
  responses: { 200: isApiResponse },
};

export type get_GetInventory = typeof get_GetInventory;
export const get_GetInventory = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/store/inventory">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: typia.createIs<never>(),
  responses: { 200: typia.createIs<Record<string, number>>() },
};

export type post_PlaceOrder = typeof post_PlaceOrder;
export const post_PlaceOrder = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/store/order">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { body: isOrder },
  responses: { 200: isOrder, 405: typia.createIs<unknown>() },
};

export type get_GetOrderById = typeof get_GetOrderById;
export const get_GetOrderById = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/store/order/{orderId}">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: typia.createEquals<{ orderId: number }>() },
  responses: { 200: isOrder, 400: typia.createIs<unknown>(), 404: typia.createIs<unknown>() },
};

export type delete_DeleteOrder = typeof delete_DeleteOrder;
export const delete_DeleteOrder = {
  method: typia.createIs<"DELETE">(),
  path: typia.createIs<"/store/order/{orderId}">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: typia.createEquals<{ orderId: number }>() },
  responses: { 400: typia.createIs<unknown>(), 404: typia.createIs<unknown>() },
};

export type post_CreateUser = typeof post_CreateUser;
export const post_CreateUser = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/user">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { body: isUser },
  responses: { default: isUser },
};

export type post_CreateUsersWithListInput = typeof post_CreateUsersWithListInput;
export const post_CreateUsersWithListInput = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/user/createWithList">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { body: typia.createIs<Array<User>>() },
  responses: { 200: isUser, default: typia.createIs<unknown>() },
};

export type get_LoginUser = typeof get_LoginUser;
export const get_LoginUser = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/user/login">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: typia.createEquals<Partial<{ username: string; password: string }>>() },
  responses: { 200: typia.createIs<string>(), 400: typia.createIs<unknown>() },
  responseHeaders: {
    200: typia.createEquals<{ "X-Rate-Limit": number; "X-Expires-After": string }>(),
    400: typia.createEquals<{ "X-Error": string }>(),
  },
};

export type get_LogoutUser = typeof get_LogoutUser;
export const get_LogoutUser = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/user/logout">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: typia.createIs<never>(),
  responses: { default: typia.createIs<unknown>() },
};

export type get_GetUserByName = typeof get_GetUserByName;
export const get_GetUserByName = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/user/{username}">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: typia.createEquals<{ username: string }>() },
  responses: {
    200: isUser,
    201: typia.createIs<{ id: number; username: string } & Record<string, unknown>>(),
    400: typia.createIs<{ code: number; message: string } & Record<string, unknown>>(),
    404: typia.createIs<unknown>(),
  },
};

export type put_UpdateUser = typeof put_UpdateUser;
export const put_UpdateUser = {
  method: typia.createIs<"PUT">(),
  path: typia.createIs<"/user/{username}">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: typia.createEquals<{ username: string }>(), body: isUser },
  responses: { default: typia.createIs<unknown>() },
};

export type delete_DeleteUser = typeof delete_DeleteUser;
export const delete_DeleteUser = {
  method: typia.createIs<"DELETE">(),
  path: typia.createIs<"/user/{username}">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: typia.createEquals<{ username: string }>() },
  responses: { 400: typia.createIs<unknown>(), 404: typia.createIs<unknown>() },
};

export type get_GetPetTextPlain = typeof get_GetPetTextPlain;
export const get_GetPetTextPlain = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/pet/text">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: typia.createIs<never>(),
  responses: { 200: isUser },
};

export type get_GetPetEmpty = typeof get_GetPetEmpty;
export const get_GetPetEmpty = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/pet/empty">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: typia.createIs<never>(),
  responses: { 204: typia.createIs<unknown>() },
};

export type get_GetPetCustom = typeof get_GetPetCustom;
export const get_GetPetCustom = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/pet/custom">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: typia.createIs<never>(),
  responses: { 200: isPet },
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
  query?: unknown;
  header?: unknown;
  path?: unknown;
  cookie?: unknown;
};

export type MutationMethod = "post" | "put" | "patch" | "delete";
export type Method = "get" | "head" | "options" | "trace" | MutationMethod;

export type RequestFormat = "json" | "form-data" | "form-url" | "binary" | "text";
export type ResponseFormat = "json" | "sse";
export type SecurityRequirements = readonly (readonly string[])[];

// <EndpointRequestFormats>
/** Non-json request body encodings; missing entries default to `"json"`. */
export const endpointRequestFormats = {
  post: {
    "/pet/{petId}/uploadImage": "binary",
  },
} as Partial<{ [M in keyof EndpointByMethod]: Partial<{ [P in keyof EndpointByMethod[M]]: RequestFormat }> }>;
// </EndpointRequestFormats>

// <EndpointParameterStyles>
export type ParameterSerialization = { style: string; explode: boolean; allowReserved: boolean };
export type EndpointParameterStyles = Partial<
  Record<"query" | "path" | "header" | "cookie", Record<string, ParameterSerialization>>
>;
/** OpenAPI parameter styles used by the built-in encoders. */
export const endpointParameterStyles = {
  get: {
    "/pet/findByStatus": { query: { status: { style: "form", explode: true, allowReserved: false } } },
    "/pet/findByTags": { query: { tags: { style: "form", explode: true, allowReserved: false } } },
    "/pet/{petId}": { path: { petId: { style: "simple", explode: false, allowReserved: false } } },
    "/store/order/{orderId}": { path: { orderId: { style: "simple", explode: false, allowReserved: false } } },
    "/user/login": {
      query: {
        username: { style: "form", explode: true, allowReserved: false },
        password: { style: "form", explode: true, allowReserved: false },
      },
    },
    "/user/{username}": { path: { username: { style: "simple", explode: false, allowReserved: false } } },
  },
  post: {
    "/pet/{petId}": {
      query: {
        name: { style: "form", explode: true, allowReserved: false },
        status: { style: "form", explode: true, allowReserved: false },
      },
      path: { petId: { style: "simple", explode: false, allowReserved: false } },
    },
    "/pet/{petId}/uploadImage": {
      query: { additionalMetadata: { style: "form", explode: true, allowReserved: false } },
      path: { petId: { style: "simple", explode: false, allowReserved: false } },
    },
  },
  delete: {
    "/pet/{petId}": {
      path: { petId: { style: "simple", explode: false, allowReserved: false } },
      header: { api_key: { style: "simple", explode: false, allowReserved: false } },
    },
    "/store/order/{orderId}": { path: { orderId: { style: "simple", explode: false, allowReserved: false } } },
    "/user/{username}": { path: { username: { style: "simple", explode: false, allowReserved: false } } },
  },
  put: { "/user/{username}": { path: { username: { style: "simple", explode: false, allowReserved: false } } } },
} as Partial<Record<string, Partial<Record<string, EndpointParameterStyles>>>>;
// </EndpointParameterStyles>

// <EndpointResponseFormats>
/** Non-json response body modes; missing entries default to `"json"`. SSE skips JSON parse + output validation. */
export const endpointResponseFormats = {} as Partial<{
  [M in keyof EndpointByMethod]: Partial<{ [P in keyof EndpointByMethod[M]]: ResponseFormat }>;
}>;
// </EndpointResponseFormats>

// <EndpointSecurityRequirements>
/** OpenAPI security requirements applied when an endpoint has no explicit entry. */
export const defaultSecurityRequirements = [] as SecurityRequirements;
/** Endpoint-specific security requirements that differ from the default. */
export const endpointSecurityRequirements = {
  put: { "/pet": [["petstore_auth"]] },
  post: {
    "/pet": [["petstore_auth"]],
    "/pet/{petId}": [["petstore_auth"]],
    "/pet/{petId}/uploadImage": [["petstore_auth"]],
  },
  get: {
    "/pet/findByStatus": [["petstore_auth"]],
    "/pet/findByTags": [["petstore_auth"]],
    "/pet/{petId}": [["api_key"], ["petstore_auth"]],
    "/store/inventory": [["api_key"]],
  },
  delete: { "/pet/{petId}": [["petstore_auth"]] },
} as Partial<{ [M in keyof EndpointByMethod]: Partial<{ [P in keyof EndpointByMethod[M]]: SecurityRequirements }> }>;
// </EndpointSecurityRequirements>

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
  responseFormat: ResponseFormat;
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
export interface FetcherResponse {
  ok: boolean;
  status: number;
  statusText: string;
  headers: {
    get(name: string): string | null;
    getSetCookie?: () => string[];
  };
  /** Present on fetch Response; used for SSE / streaming bodies. */
  body?: ReadableStream<Uint8Array> | null;
  json(): Promise<unknown>;
  text(): Promise<string>;
  arrayBuffer(): Promise<ArrayBuffer>;
  clone(): FetcherResponse;
}

export interface Fetcher {
  decodePathParams?: (path: string, pathParams: unknown, styles?: Record<string, ParameterSerialization>) => string;
  encodeSearchParams?: (
    searchParams: unknown,
    styles?: Record<string, ParameterSerialization>,
  ) => URLSearchParams | undefined;
  /** Merge cookie params into request headers (default: Cookie header). */
  encodeCookies?: (cookies: unknown, headers: Headers) => void;
  //
  fetch: (input: {
    method: Method;
    url: URL;
    urlSearchParams?: URLSearchParams | undefined;
    parameters?: EndpointParameters | undefined;
    path: string;
    /** How to encode `parameters.body` (from OpenAPI requestBody content type). */
    requestFormat: RequestFormat;
    /** OpenAPI parameter serialization metadata for the current endpoint. */
    parameterStyles?: EndpointParameterStyles;
    /** OpenAPI security requirements for this operation. Empty means no credentials are required. */
    security?: SecurityRequirements;
    overrides?: RequestInit;
    throwOnStatusError?: boolean;
  }) => Promise<FetcherResponse>;
  parseResponseData?: (response: FetcherResponse) => Promise<unknown>;
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
export interface TypedHeaders<TypedHeaderValues = unknown> extends Omit<
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
    thisArg?: unknown,
  ) => void;
}

/** @see https://developer.mozilla.org/en-US/docs/Web/API/Response */
export interface TypedSuccessResponse<TSuccess, TStatusCode, THeaders> extends Omit<
  FetcherResponse,
  "ok" | "status" | "json" | "headers"
> {
  ok: true;
  status: TStatusCode;
  headers: never extends THeaders ? FetcherResponse["headers"] : TypedHeaders<THeaders>;
  data: TSuccess;
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) */
  json: () => Promise<TSuccess>;
}

/** @see https://developer.mozilla.org/en-US/docs/Web/API/Response */
export interface TypedErrorResponse<TData, TStatusCode, THeaders> extends Omit<
  FetcherResponse,
  "ok" | "status" | "json" | "headers"
> {
  ok: false;
  status: TStatusCode;
  headers: never extends THeaders ? FetcherResponse["headers"] : TypedHeaders<THeaders>;
  data: TData;
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) */
  json: () => Promise<TData>;
}

type StatusCodeFromKey<TKey> = TKey extends `${infer TStatusCode extends number}`
  ? TStatusCode
  : TKey extends number
    ? TKey
    : never;

export type TypedApiResponse<TAllResponses = {}, THeaders = {}> = {
  [K in keyof TAllResponses]: StatusCodeFromKey<K> extends infer TStatusCode extends number
    ? TStatusCode extends SuccessStatusCode
      ? TypedSuccessResponse<TAllResponses[K], TStatusCode, K extends keyof THeaders ? THeaders[K] : never>
      : TypedErrorResponse<TAllResponses[K], TStatusCode, K extends keyof THeaders ? THeaders[K] : never>
    : never;
}[keyof TAllResponses];

type OptionalUndefinedKeys<T> = {
  [K in keyof T as undefined extends T[K] ? never : K]: T[K];
} & {
  [K in keyof T as undefined extends T[K] ? K : never]?: Exclude<T[K], undefined>;
};
type InferSchemaValueRaw<T> = T extends ((input: unknown) => input is infer U)
  ? U
  : T extends (...args: never[]) => unknown
    ? T
    : T extends object
      ? { [K in keyof T]: InferSchemaValueRaw<T[K]> }
      : T;
export type InferSchemaValue<T> = InferSchemaValueRaw<T>;
type InferSchemaInput<T> = OptionalUndefinedKeys<InferSchemaValueRaw<T>>;

export type SafeApiResponse<TEndpoint> = TEndpoint extends { responses: infer TResponses }
  ? TResponses extends Record<string | number, unknown>
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

/**
 * Success-body payload — InferSchemaValue only on success statuses.
 * Filter with extends {} like the old Extract { data: {} } so unknown bodies (e.g. 304) drop out.
 */
export type InferSuccessData<TEndpoint> = TEndpoint extends { responses: infer TResponses }
  ? {
      [K in keyof TResponses]: StatusCodeFromKey<K> extends infer TStatusCode extends number
        ? TStatusCode extends SuccessStatusCode
          ? Extract<InferSchemaValue<TResponses[K]>, {}>
          : never
        : never;
    }[keyof TResponses]
  : never;

type RequiredKeys<T> = {
  [P in keyof T]-?: undefined extends T[P] ? never : P;
}[keyof T];

type MaybeOptionalArg<T> = RequiredKeys<T> extends never ? [config?: T] : [config: T];
type NotNever<T> = [T] extends [never] ? false : true;

export type ApiQueryOptions = {
  /** Override whether a generated TanStack Query consumes TanStack Query's AbortSignal. */
  consumeQuerySignal?: boolean;
};

/** Call options merged onto inferred endpoint parameters. */
type ApiRequestOptions = {
  overrides?: RequestInit;
  queryOptions?: ApiQueryOptions;
  withResponse?: boolean;
  throwOnStatusError?: boolean;
  validate?: ValidateSide;
};

/** Parameter bag for an endpoint + request options. */
export type ApiCallParams<TEndpoint> = TEndpoint extends { parameters: infer UParams }
  ? NotNever<UParams> extends true
    ? InferSchemaInput<UParams> & ApiRequestOptions
    : ApiRequestOptions
  : ApiRequestOptions;

/** Resolve response type from withResponse flag on the call config. */
export type ApiCallResult<TEndpoint, TParams> = TParams extends { withResponse: true }
  ? SafeApiResponse<TEndpoint>
  : InferSuccessData<TEndpoint>;

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

// <ValidateHelpers>
const defaultParse = (schema: unknown, value: unknown): unknown => {
  return (() => {
    const isValid = (schema as (input: unknown) => boolean)(value);
    if (!isValid) throw new Error("typia validation failed");
    return value;
  })();
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

// <ApiClient>
export class ApiClient {
  baseUrl: string = "";
  successStatusCodes = successStatusCodes;
  errorStatusCodes = errorStatusCodes;
  validate: ValidateSide = "both";
  onValidate?: OnValidate;

  constructor(
    public fetcher: Fetcher,
    options?: { validate?: ValidateSide; onValidate?: OnValidate },
  ) {
    if (options?.validate !== undefined) this.validate = options.validate;
    if (options?.onValidate) this.onValidate = options.onValidate;
  }

  setBaseUrl(baseUrl: string) {
    this.baseUrl = baseUrl;
    return this;
  }

  setValidate(validate: ValidateSide) {
    this.validate = validate;
    return this;
  }

  setOnValidate(onValidate: OnValidate | undefined) {
    if (onValidate === undefined) {
      delete this.onValidate;
    } else {
      this.onValidate = onValidate;
    }
    return this;
  }

  /**
   * Replace path parameters in URL
   * Supports both OpenAPI format {param} and Express format :param
   */
  defaultDecodePathParams = (url: string, params: unknown, styles?: Record<string, ParameterSerialization>): string => {
    const record = (params ?? {}) as Record<string, unknown>;
    const encode = (value: unknown) => encodeURIComponent(String(value));
    const serialize = (key: string, value: unknown): string => {
      const parameterStyle = styles?.[key];
      const style = parameterStyle?.style ?? "simple";
      const explode = parameterStyle?.explode ?? false;
      if (style === "label") {
        if (Array.isArray(value))
          return (
            "." +
            value
              .filter((item) => item != null)
              .map(encode)
              .join(explode ? "." : ",")
          );
        if (value && typeof value === "object") {
          const entries = Object.entries(value as Record<string, unknown>).filter(([, item]) => item != null);
          return (
            "." +
            (explode
              ? entries.map(([name, item]) => encode(name) + "=" + encode(item)).join(".")
              : entries.flatMap(([name, item]) => [encode(name), encode(item)]).join(","))
          );
        }
        return "." + encode(value);
      }
      if (style === "matrix") {
        if (Array.isArray(value))
          return explode
            ? value
                .filter((item) => item != null)
                .map((item) => ";" + key + "=" + encode(item))
                .join("")
            : ";" +
                key +
                "=" +
                value
                  .filter((item) => item != null)
                  .map(encode)
                  .join(",");
        if (value && typeof value === "object") {
          const entries = Object.entries(value as Record<string, unknown>).filter(([, item]) => item != null);
          return explode
            ? entries.map(([name, item]) => ";" + encode(name) + "=" + encode(item)).join("")
            : ";" + key + "=" + entries.flatMap(([name, item]) => [encode(name), encode(item)]).join(",");
        }
        return ";" + key + "=" + encode(value);
      }
      if (Array.isArray(value))
        return value
          .filter((item) => item != null)
          .map(encode)
          .join(",");
      if (value && typeof value === "object") {
        return Object.entries(value as Record<string, unknown>)
          .filter(([, item]) => item != null)
          .map(([name, item]) => (explode ? encode(name) + "=" + encode(item) : [encode(name), encode(item)]))
          .flat()
          .join(",");
      }
      return encode(value);
    };
    return url
      .replace(/{([^}]+)}/g, (_, key: string) => (record[key] != null ? serialize(key, record[key]) : `{${key}}`))
      .replace(/:([a-zA-Z0-9_]+)/g, (_, key: string) =>
        record[key] != null ? serialize(key, record[key]) : `:${key}`,
      );
  };

  /** Uses URLSearchParams, skips null/undefined values */
  defaultEncodeSearchParams = (
    queryParams: unknown,
    styles?: Record<string, ParameterSerialization>,
  ): URLSearchParams | undefined => {
    if (!queryParams || typeof queryParams !== "object") return;

    const searchParams = new URLSearchParams();
    const rawEntries: Array<{ key: string; value: string; allowReserved: boolean }> = [];
    const append = (key: string, value: unknown, allowReserved = false) => {
      const stringValue = String(value);
      searchParams.append(key, stringValue);
      rawEntries.push({ key, value: stringValue, allowReserved });
    };
    const encodeQueryComponent = (value: string, allowReserved: boolean) => {
      const encoded = encodeURIComponent(value);
      return allowReserved
        ? encoded.replace(/%3A|%2F|%3F|%40|%21|%24|%26|%27|%28|%29|%2A|%2B|%2C|%3B|%3D|%5B|%5D/gi, (part) =>
            decodeURIComponent(part),
          )
        : encoded;
    };
    Object.defineProperty(searchParams, "toString", {
      value: () =>
        rawEntries
          .map(
            ({ key, value, allowReserved }) =>
              `${encodeQueryComponent(key, false)}=${encodeQueryComponent(value, allowReserved)}`,
          )
          .join("&"),
    });
    Object.entries(queryParams as Record<string, unknown>).forEach(([key, value]) => {
      if (value != null) {
        // Skip null/undefined values
        const parameterStyle = styles?.[key];
        const style = parameterStyle?.style ?? "form";
        const explode = parameterStyle?.explode ?? true;
        const allowReserved = parameterStyle?.allowReserved === true;
        if (Array.isArray(value)) {
          if (style === "spaceDelimited")
            append(
              key,
              value
                .filter((item) => item != null)
                .map(String)
                .join(" "),
              allowReserved,
            );
          else if (style === "pipeDelimited")
            append(
              key,
              value
                .filter((item) => item != null)
                .map(String)
                .join("|"),
              allowReserved,
            );
          else if (explode) value.forEach((val) => val != null && append(key, val, allowReserved));
          else
            append(
              key,
              value
                .filter((item) => item != null)
                .map(String)
                .join(","),
              allowReserved,
            );
        } else if (typeof value === "object") {
          const entries = Object.entries(value as Record<string, unknown>).filter(
            ([, nestedValue]) => nestedValue != null,
          );
          if (style === "deepObject") {
            for (const [nestedKey, nestedValue] of entries) {
              if (Array.isArray(nestedValue))
                nestedValue.forEach((item) => item != null && append(`${key}[${nestedKey}]`, item, allowReserved));
              else append(`${key}[${nestedKey}]`, nestedValue, allowReserved);
            }
          } else if (explode) {
            for (const [nestedKey, nestedValue] of entries) {
              if (Array.isArray(nestedValue))
                nestedValue.forEach((item) => item != null && append(nestedKey, item, allowReserved));
              else append(nestedKey, nestedValue, allowReserved);
            }
          } else {
            append(
              key,
              entries
                .flatMap(([nestedKey, nestedValue]) => [
                  nestedKey,
                  ...(Array.isArray(nestedValue) ? nestedValue : [nestedValue]),
                ])
                .map(String)
                .join(","),
              allowReserved,
            );
          }
        } else {
          append(key, value, allowReserved);
        }
      }
    });

    return searchParams;
  };

  /** Append cookie params as a Cookie header (or merge into existing). */
  defaultEncodeCookies = (cookies: unknown, headers: Headers): void => {
    if (!cookies || typeof cookies !== "object") return;
    const parts = Object.entries(cookies as Record<string, unknown>)
      .filter(([, value]) => value != null)
      .map(([key, value]) => `${key}=${String(value)}`);
    if (!parts.length) return;
    const existing = headers.get("cookie");
    headers.set("cookie", existing ? `${existing}; ${parts.join("; ")}` : parts.join("; "));
  };

  defaultParseResponseData = async (response: FetcherResponse): Promise<unknown> => {
    const contentType = response.headers.get("content-type") ?? "";
    const normalizedContentType = contentType.toLowerCase();
    if (normalizedContentType.includes("text/event-stream")) {
      return response.body ?? null;
    }
    if (normalizedContentType.startsWith("text/")) {
      return await response.text();
    }

    if (normalizedContentType.startsWith("application/octet-stream")) {
      return new Blob([await response.arrayBuffer()]);
    }

    if (
      normalizedContentType.includes("application/json") ||
      (normalizedContentType.includes("application/") && normalizedContentType.includes("json")) ||
      normalizedContentType === "*/*"
    ) {
      try {
        return await response.json();
      } catch {
        return undefined;
      }
    }

    return;
  };

  // <ApiClient.put>
  put<Path extends keyof PutEndpoints, TEndpoint extends PutEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      TEndpoint extends { parameters: infer UParams }
        ? NotNever<UParams> extends true
          ? InferSchemaInput<UParams> & {
              overrides?: RequestInit;
              queryOptions?: ApiQueryOptions;
              withResponse: true;
              throwOnStatusError?: boolean;
              validate?: ValidateSide;
            }
          : {
              overrides?: RequestInit;
              queryOptions?: ApiQueryOptions;
              withResponse: true;
              throwOnStatusError?: boolean;
              validate?: ValidateSide;
            }
        : {
            overrides?: RequestInit;
            queryOptions?: ApiQueryOptions;
            withResponse: true;
            throwOnStatusError?: boolean;
            validate?: ValidateSide;
          }
    >
  ): Promise<SafeApiResponse<TEndpoint>>;

  put<Path extends keyof PutEndpoints, TEndpoint extends PutEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      TEndpoint extends { parameters: infer UParams }
        ? NotNever<UParams> extends true
          ? InferSchemaInput<UParams> & {
              overrides?: RequestInit;
              queryOptions?: ApiQueryOptions;
              withResponse?: false;
              throwOnStatusError?: boolean;
              validate?: ValidateSide;
            }
          : {
              overrides?: RequestInit;
              queryOptions?: ApiQueryOptions;
              withResponse?: false;
              throwOnStatusError?: boolean;
              validate?: ValidateSide;
            }
        : {
            overrides?: RequestInit;
            queryOptions?: ApiQueryOptions;
            withResponse?: false;
            throwOnStatusError?: boolean;
            validate?: ValidateSide;
          }
    >
  ): Promise<InferSuccessData<TEndpoint>>;

  put<Path extends keyof PutEndpoints>(path: Path, ...params: [config?: unknown]): Promise<unknown> {
    return this.request("put", path, params[0] as never) as Promise<unknown>;
  }
  // </ApiClient.put>

  // <ApiClient.post>
  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      TEndpoint extends { parameters: infer UParams }
        ? NotNever<UParams> extends true
          ? InferSchemaInput<UParams> & {
              overrides?: RequestInit;
              queryOptions?: ApiQueryOptions;
              withResponse: true;
              throwOnStatusError?: boolean;
              validate?: ValidateSide;
            }
          : {
              overrides?: RequestInit;
              queryOptions?: ApiQueryOptions;
              withResponse: true;
              throwOnStatusError?: boolean;
              validate?: ValidateSide;
            }
        : {
            overrides?: RequestInit;
            queryOptions?: ApiQueryOptions;
            withResponse: true;
            throwOnStatusError?: boolean;
            validate?: ValidateSide;
          }
    >
  ): Promise<SafeApiResponse<TEndpoint>>;

  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      TEndpoint extends { parameters: infer UParams }
        ? NotNever<UParams> extends true
          ? InferSchemaInput<UParams> & {
              overrides?: RequestInit;
              queryOptions?: ApiQueryOptions;
              withResponse?: false;
              throwOnStatusError?: boolean;
              validate?: ValidateSide;
            }
          : {
              overrides?: RequestInit;
              queryOptions?: ApiQueryOptions;
              withResponse?: false;
              throwOnStatusError?: boolean;
              validate?: ValidateSide;
            }
        : {
            overrides?: RequestInit;
            queryOptions?: ApiQueryOptions;
            withResponse?: false;
            throwOnStatusError?: boolean;
            validate?: ValidateSide;
          }
    >
  ): Promise<InferSuccessData<TEndpoint>>;

  post<Path extends keyof PostEndpoints>(path: Path, ...params: [config?: unknown]): Promise<unknown> {
    return this.request("post", path, params[0] as never) as Promise<unknown>;
  }
  // </ApiClient.post>

  // <ApiClient.get>
  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      TEndpoint extends { parameters: infer UParams }
        ? NotNever<UParams> extends true
          ? InferSchemaInput<UParams> & {
              overrides?: RequestInit;
              queryOptions?: ApiQueryOptions;
              withResponse: true;
              throwOnStatusError?: boolean;
              validate?: ValidateSide;
            }
          : {
              overrides?: RequestInit;
              queryOptions?: ApiQueryOptions;
              withResponse: true;
              throwOnStatusError?: boolean;
              validate?: ValidateSide;
            }
        : {
            overrides?: RequestInit;
            queryOptions?: ApiQueryOptions;
            withResponse: true;
            throwOnStatusError?: boolean;
            validate?: ValidateSide;
          }
    >
  ): Promise<SafeApiResponse<TEndpoint>>;

  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      TEndpoint extends { parameters: infer UParams }
        ? NotNever<UParams> extends true
          ? InferSchemaInput<UParams> & {
              overrides?: RequestInit;
              queryOptions?: ApiQueryOptions;
              withResponse?: false;
              throwOnStatusError?: boolean;
              validate?: ValidateSide;
            }
          : {
              overrides?: RequestInit;
              queryOptions?: ApiQueryOptions;
              withResponse?: false;
              throwOnStatusError?: boolean;
              validate?: ValidateSide;
            }
        : {
            overrides?: RequestInit;
            queryOptions?: ApiQueryOptions;
            withResponse?: false;
            throwOnStatusError?: boolean;
            validate?: ValidateSide;
          }
    >
  ): Promise<InferSuccessData<TEndpoint>>;

  get<Path extends keyof GetEndpoints>(path: Path, ...params: [config?: unknown]): Promise<unknown> {
    return this.request("get", path, params[0] as never) as Promise<unknown>;
  }
  // </ApiClient.get>

  // <ApiClient.delete>
  delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      TEndpoint extends { parameters: infer UParams }
        ? NotNever<UParams> extends true
          ? InferSchemaInput<UParams> & {
              overrides?: RequestInit;
              queryOptions?: ApiQueryOptions;
              withResponse: true;
              throwOnStatusError?: boolean;
              validate?: ValidateSide;
            }
          : {
              overrides?: RequestInit;
              queryOptions?: ApiQueryOptions;
              withResponse: true;
              throwOnStatusError?: boolean;
              validate?: ValidateSide;
            }
        : {
            overrides?: RequestInit;
            queryOptions?: ApiQueryOptions;
            withResponse: true;
            throwOnStatusError?: boolean;
            validate?: ValidateSide;
          }
    >
  ): Promise<SafeApiResponse<TEndpoint>>;

  delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      TEndpoint extends { parameters: infer UParams }
        ? NotNever<UParams> extends true
          ? InferSchemaInput<UParams> & {
              overrides?: RequestInit;
              queryOptions?: ApiQueryOptions;
              withResponse?: false;
              throwOnStatusError?: boolean;
              validate?: ValidateSide;
            }
          : {
              overrides?: RequestInit;
              queryOptions?: ApiQueryOptions;
              withResponse?: false;
              throwOnStatusError?: boolean;
              validate?: ValidateSide;
            }
        : {
            overrides?: RequestInit;
            queryOptions?: ApiQueryOptions;
            withResponse?: false;
            throwOnStatusError?: boolean;
            validate?: ValidateSide;
          }
    >
  ): Promise<InferSuccessData<TEndpoint>>;

  delete<Path extends keyof DeleteEndpoints>(path: Path, ...params: [config?: unknown]): Promise<unknown> {
    return this.request("delete", path, params[0] as never) as Promise<unknown>;
  }
  // </ApiClient.delete>

  // <ApiClient.request>
  /**
   * Generic request method with full type-safety for any endpoint
   */
  request<
    TMethod extends keyof EndpointByMethod,
    TPath extends keyof EndpointByMethod[TMethod],
    TEndpoint extends EndpointByMethod[TMethod][TPath],
  >(
    method: TMethod,
    path: TPath,
    ...params: MaybeOptionalArg<
      TEndpoint extends { parameters: infer UParams }
        ? NotNever<UParams> extends true
          ? InferSchemaInput<UParams> & {
              overrides?: RequestInit;
              queryOptions?: ApiQueryOptions;
              withResponse: true;
              throwOnStatusError?: boolean;
              validate?: ValidateSide;
            }
          : {
              overrides?: RequestInit;
              queryOptions?: ApiQueryOptions;
              withResponse: true;
              throwOnStatusError?: boolean;
              validate?: ValidateSide;
            }
        : {
            overrides?: RequestInit;
            queryOptions?: ApiQueryOptions;
            withResponse: true;
            throwOnStatusError?: boolean;
            validate?: ValidateSide;
          }
    >
  ): Promise<SafeApiResponse<TEndpoint>>;

  request<
    TMethod extends keyof EndpointByMethod,
    TPath extends keyof EndpointByMethod[TMethod],
    TEndpoint extends EndpointByMethod[TMethod][TPath],
  >(
    method: TMethod,
    path: TPath,
    ...params: MaybeOptionalArg<
      TEndpoint extends { parameters: infer UParams }
        ? NotNever<UParams> extends true
          ? InferSchemaInput<UParams> & {
              overrides?: RequestInit;
              queryOptions?: ApiQueryOptions;
              withResponse?: false;
              throwOnStatusError?: boolean;
              validate?: ValidateSide;
            }
          : {
              overrides?: RequestInit;
              queryOptions?: ApiQueryOptions;
              withResponse?: false;
              throwOnStatusError?: boolean;
              validate?: ValidateSide;
            }
        : {
            overrides?: RequestInit;
            queryOptions?: ApiQueryOptions;
            withResponse?: false;
            throwOnStatusError?: boolean;
            validate?: ValidateSide;
          }
    >
  ): Promise<InferSuccessData<TEndpoint>>;

  request<
    TMethod extends keyof EndpointByMethod,
    TPath extends keyof EndpointByMethod[TMethod],
    TEndpoint extends EndpointByMethod[TMethod][TPath],
  >(method: TMethod, path: TPath, ...params: [config?: unknown]): Promise<unknown> {
    return (async () => {
      const requestParams = params[0] as
        | (EndpointParameters & {
            overrides?: RequestInit;
            queryOptions?: ApiQueryOptions;
            withResponse?: boolean;
            throwOnStatusError?: boolean;
            validate?: ValidateSide;
          })
        | undefined;
      const withResponse = requestParams?.withResponse;
      const throwOnStatusError = requestParams?.throwOnStatusError ?? (withResponse ? false : true);
      let overrides = requestParams?.overrides;
      const validateSide: ValidateSide = requestParams?.validate ?? this.validate;

      const parametersToSend: EndpointParameters = {};
      if (requestParams?.body !== undefined) parametersToSend.body = requestParams.body;
      if (requestParams?.query !== undefined) parametersToSend.query = requestParams.query;
      if (requestParams?.header !== undefined) parametersToSend.header = requestParams.header;
      if (requestParams?.path !== undefined) parametersToSend.path = requestParams.path;
      if (requestParams?.cookie !== undefined) parametersToSend.cookie = requestParams.cookie;

      type RuntimeEndpoint = {
        parameters?: Partial<Record<"body" | "query" | "header" | "path" | "cookie", unknown>>;
        responses?: Record<string, unknown>;
      };
      const endpointSchema = EndpointByMethod[method][path] as RuntimeEndpoint;
      const shouldValidateInput = validateSide === "input" || validateSide === "both";
      if (shouldValidateInput && endpointSchema.parameters) {
        const paramSchema = endpointSchema.parameters;
        for (const key of ["body", "query", "header", "path", "cookie"] as const) {
          const schema = paramSchema[key];
          const value = parametersToSend[key];
          if (schema !== undefined && value !== undefined) {
            parametersToSend[key] = await runValidate({
              side: "input",
              method: String(method),
              path: String(path),
              schema,
              value,
              ...(this.onValidate ? { onValidate: this.onValidate } : {}),
            });
          }
        }
      }

      const resolvedPath = (this.fetcher.decodePathParams ?? this.defaultDecodePathParams)(
        this.baseUrl + (path as string),
        parametersToSend.path ?? {},
        endpointParameterStyles[method]?.[path]?.path,
      );
      const url = new URL(resolvedPath);
      const urlSearchParams = (this.fetcher.encodeSearchParams ?? this.defaultEncodeSearchParams)(
        parametersToSend.query,
        endpointParameterStyles[method]?.[path]?.query,
      );

      if (parametersToSend.cookie) {
        const headers = new Headers((overrides as RequestInit | undefined)?.headers);
        (this.fetcher.encodeCookies ?? this.defaultEncodeCookies)(parametersToSend.cookie, headers);
        overrides = { ...overrides, headers };
      }

      const response = await this.fetcher.fetch({
        method: method,
        path: path as string,
        url,
        ...(urlSearchParams ? { urlSearchParams } : {}),
        ...(Object.keys(parametersToSend).length ? { parameters: parametersToSend } : {}),
        requestFormat: endpointRequestFormats[method]?.[path] ?? "json",
        parameterStyles: endpointParameterStyles[method]?.[path],
        security: endpointSecurityRequirements[method]?.[path] ?? defaultSecurityRequirements,
        ...(overrides ? { overrides } : {}),
        throwOnStatusError,
      });
      const responseFormat = endpointResponseFormats[method]?.[path] ?? "json";
      let data =
        responseFormat === "sse"
          ? (response.body ?? null)
          : await (this.fetcher.parseResponseData ?? this.defaultParseResponseData)(response);
      const shouldValidateOutput = validateSide === "output" || validateSide === "both";
      if (
        shouldValidateOutput &&
        responseFormat !== "sse" &&
        (response.ok || !(errorStatusCodes as readonly number[]).includes(response.status)) &&
        endpointSchema?.responses
      ) {
        const responseSchema =
          endpointSchema.responses[String(response.status)] ??
          endpointSchema.responses[String(Math.floor(response.status / 100)) + "xx"] ??
          endpointSchema.responses[String(Math.floor(response.status / 100)) + "XX"] ??
          endpointSchema.responses["default"];
        if (responseSchema) {
          data = await runValidate({
            side: "output",
            method: String(method),
            path: String(path),
            schema: responseSchema,
            value: data,
            ...(this.onValidate ? { onValidate: this.onValidate } : {}),
          });
        }
      }
      const typedResponse = Object.assign(response, {
        data: data,
        json: () => Promise.resolve(data),
      }) as SafeApiResponse<TEndpoint>;

      if (throwOnStatusError && (errorStatusCodes as readonly number[]).includes(response.status)) {
        throw new TypedStatusError(typedResponse as TypedErrorResponse<unknown, ErrorStatusCode, unknown>);
      }

      return withResponse ? typedResponse : data;
    })();
  }
  // </ApiClient.request>
}

export function createApiClient(
  fetcher: Fetcher,
  baseUrl?: string,
  options?: { validate?: ValidateSide; onValidate?: OnValidate },
) {
  return new ApiClient(fetcher, options).setBaseUrl(baseUrl ?? "");
}

/**
 Example usage:
 const api = createApiClient((method, url, params) =>
   fetch(url, { method, body: JSON.stringify(params) }).then((res) => res.json()),
 );
 api.get("/users").then((users) => console.log(users));
 api.post("/users", { body: { name: "John" } }).then((user) => console.log(user));
 api.put("/users/:id", { path: { id: 1 }, body: { name: "John" } }).then((user) => console.log(user));

 // With error handling
 const result = await api.get("/users/{id}", { path: { id: "123" }, withResponse: true });
 if (result.ok) {
   // Access data directly
   const user = result.data;
   console.log(user);

   // Or use the json() method for compatibility
   const userFromJson = await result.json();
   console.log(userFromJson);
 } else {
   const error = result.data;
   console.error(`Error ${result.status}:`, error);
 }
*/

// </ApiClient>
