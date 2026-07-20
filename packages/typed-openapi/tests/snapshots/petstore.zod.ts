import { z } from "zod";

// <Schemas>
export type Order = z.infer<typeof Order>;
export const Order = z
  .object({
    id: z.number().int(),
    petId: z.number().int(),
    quantity: z.number().int(),
    shipDate: z.iso.datetime(),
    status: z.enum(["placed", "approved", "delivered"]),
    complete: z.boolean(),
  })
  .partial();

export type Address = z.infer<typeof Address>;
export const Address = z.object({ street: z.string(), city: z.string(), state: z.string(), zip: z.string() }).partial();

export type Customer = z.infer<typeof Customer>;
export const Customer = z.object({ id: z.number().int(), username: z.string(), address: z.array(Address) }).partial();

export type Category = z.infer<typeof Category>;
export const Category = z.object({ id: z.number().int(), name: z.string() }).partial();

export type User = z.infer<typeof User>;
export const User = z
  .object({
    id: z.number().int(),
    username: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    password: z.string(),
    phone: z.string(),
    userStatus: z.number().int(),
  })
  .partial();

export type Tag = z.infer<typeof Tag>;
export const Tag = z.object({ id: z.number().int(), name: z.string() }).partial();

export type Pet = z.infer<typeof Pet>;
export const Pet = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  category: Category.optional(),
  photoUrls: z.array(z.string()),
  tags: z.array(Tag).optional(),
  status: z.enum(["available", "pending", "sold"]).optional(),
});

export type ApiResponse = z.infer<typeof ApiResponse>;
export const ApiResponse = z.object({ code: z.number().int(), type: z.string(), message: z.string() }).partial();

// </Schemas>

// <Endpoints>
export type put_UpdatePet = typeof put_UpdatePet;
export const put_UpdatePet = {
  method: z.literal("PUT"),
  path: z.literal("/pet"),
  requestFormat: z.literal("json"),
  parameters: { body: Pet },
  responses: { 200: Pet, 400: z.unknown(), 404: z.unknown(), 405: z.unknown() },
};

export type post_AddPet = typeof post_AddPet;
export const post_AddPet = {
  method: z.literal("POST"),
  path: z.literal("/pet"),
  requestFormat: z.literal("json"),
  parameters: { body: Pet },
  responses: { 200: Pet, 405: z.unknown() },
};

export type get_FindPetsByStatus = typeof get_FindPetsByStatus;
export const get_FindPetsByStatus = {
  method: z.literal("GET"),
  path: z.literal("/pet/findByStatus"),
  requestFormat: z.literal("json"),
  parameters: { query: z.object({ status: z.enum(["available", "pending", "sold"]) }).partial() },
  responses: { 200: z.array(Pet), 304: z.unknown(), 400: z.object({ code: z.number().int(), message: z.string() }) },
};

export type get_FindPetsByTags = typeof get_FindPetsByTags;
export const get_FindPetsByTags = {
  method: z.literal("GET"),
  path: z.literal("/pet/findByTags"),
  requestFormat: z.literal("json"),
  parameters: { query: z.object({ tags: z.array(z.string()) }).partial() },
  responses: { 200: z.union([z.array(Pet), z.array(User), z.array(Tag)]), 400: z.unknown() },
};

export type get_GetPetById = typeof get_GetPetById;
export const get_GetPetById = {
  method: z.literal("GET"),
  path: z.literal("/pet/{petId}"),
  requestFormat: z.literal("json"),
  parameters: { path: z.object({ petId: z.number().int() }) },
  responses: {
    200: Pet,
    400: z.object({ code: z.number().int(), message: z.string() }),
    404: z.object({ code: z.number().int(), message: z.string() }),
  },
};

export type post_UpdatePetWithForm = typeof post_UpdatePetWithForm;
export const post_UpdatePetWithForm = {
  method: z.literal("POST"),
  path: z.literal("/pet/{petId}"),
  requestFormat: z.literal("json"),
  parameters: {
    query: z.object({ name: z.string(), status: z.string() }).partial(),
    path: z.object({ petId: z.number().int() }),
  },
  responses: { 405: z.unknown() },
};

export type delete_DeletePet = typeof delete_DeletePet;
export const delete_DeletePet = {
  method: z.literal("DELETE"),
  path: z.literal("/pet/{petId}"),
  requestFormat: z.literal("json"),
  parameters: { path: z.object({ petId: z.number().int() }), header: z.object({ api_key: z.string() }).partial() },
  responses: { 400: z.unknown() },
};

export type post_UploadFile = typeof post_UploadFile;
export const post_UploadFile = {
  method: z.literal("POST"),
  path: z.literal("/pet/{petId}/uploadImage"),
  requestFormat: z.literal("binary"),
  parameters: {
    query: z.object({ additionalMetadata: z.string() }).partial(),
    path: z.object({ petId: z.number().int() }),
    body: z.string(),
  },
  responses: { 200: ApiResponse },
};

export type get_GetInventory = typeof get_GetInventory;
export const get_GetInventory = {
  method: z.literal("GET"),
  path: z.literal("/store/inventory"),
  requestFormat: z.literal("json"),
  parameters: z.never(),
  responses: { 200: z.record(z.string(), z.number().int()) },
};

export type post_PlaceOrder = typeof post_PlaceOrder;
export const post_PlaceOrder = {
  method: z.literal("POST"),
  path: z.literal("/store/order"),
  requestFormat: z.literal("json"),
  parameters: { body: Order },
  responses: { 200: Order, 405: z.unknown() },
};

export type get_GetOrderById = typeof get_GetOrderById;
export const get_GetOrderById = {
  method: z.literal("GET"),
  path: z.literal("/store/order/{orderId}"),
  requestFormat: z.literal("json"),
  parameters: { path: z.object({ orderId: z.number().int() }) },
  responses: { 200: Order, 400: z.unknown(), 404: z.unknown() },
};

export type delete_DeleteOrder = typeof delete_DeleteOrder;
export const delete_DeleteOrder = {
  method: z.literal("DELETE"),
  path: z.literal("/store/order/{orderId}"),
  requestFormat: z.literal("json"),
  parameters: { path: z.object({ orderId: z.number().int() }) },
  responses: { 400: z.unknown(), 404: z.unknown() },
};

export type post_CreateUser = typeof post_CreateUser;
export const post_CreateUser = {
  method: z.literal("POST"),
  path: z.literal("/user"),
  requestFormat: z.literal("json"),
  parameters: { body: User },
  responses: { default: User },
};

export type post_CreateUsersWithListInput = typeof post_CreateUsersWithListInput;
export const post_CreateUsersWithListInput = {
  method: z.literal("POST"),
  path: z.literal("/user/createWithList"),
  requestFormat: z.literal("json"),
  parameters: { body: z.array(User) },
  responses: { 200: User, default: z.unknown() },
};

export type get_LoginUser = typeof get_LoginUser;
export const get_LoginUser = {
  method: z.literal("GET"),
  path: z.literal("/user/login"),
  requestFormat: z.literal("json"),
  parameters: { query: z.object({ username: z.string(), password: z.string() }).partial() },
  responses: { 200: z.string(), 400: z.unknown() },
  responseHeaders: {
    200: z.object({ "X-Rate-Limit": z.number().int(), "X-Expires-After": z.iso.datetime() }),
    400: z.object({ "X-Error": z.string() }),
  },
};

export type get_LogoutUser = typeof get_LogoutUser;
export const get_LogoutUser = {
  method: z.literal("GET"),
  path: z.literal("/user/logout"),
  requestFormat: z.literal("json"),
  parameters: z.never(),
  responses: { default: z.unknown() },
};

export type get_GetUserByName = typeof get_GetUserByName;
export const get_GetUserByName = {
  method: z.literal("GET"),
  path: z.literal("/user/{username}"),
  requestFormat: z.literal("json"),
  parameters: { path: z.object({ username: z.string() }) },
  responses: {
    200: User,
    201: z.object({ id: z.number().int(), username: z.string() }),
    400: z.object({ code: z.number().int(), message: z.string() }),
    404: z.unknown(),
  },
};

export type put_UpdateUser = typeof put_UpdateUser;
export const put_UpdateUser = {
  method: z.literal("PUT"),
  path: z.literal("/user/{username}"),
  requestFormat: z.literal("json"),
  parameters: { path: z.object({ username: z.string() }), body: User },
  responses: { default: z.unknown() },
};

export type delete_DeleteUser = typeof delete_DeleteUser;
export const delete_DeleteUser = {
  method: z.literal("DELETE"),
  path: z.literal("/user/{username}"),
  requestFormat: z.literal("json"),
  parameters: { path: z.object({ username: z.string() }) },
  responses: { 400: z.unknown(), 404: z.unknown() },
};

export type get_GetPetTextPlain = typeof get_GetPetTextPlain;
export const get_GetPetTextPlain = {
  method: z.literal("GET"),
  path: z.literal("/pet/text"),
  requestFormat: z.literal("json"),
  parameters: z.never(),
  responses: { 200: User },
};

export type get_GetPetEmpty = typeof get_GetPetEmpty;
export const get_GetPetEmpty = {
  method: z.literal("GET"),
  path: z.literal("/pet/empty"),
  requestFormat: z.literal("json"),
  parameters: z.never(),
  responses: { 204: z.unknown() },
};

export type get_GetPetCustom = typeof get_GetPetCustom;
export const get_GetPetCustom = {
  method: z.literal("GET"),
  path: z.literal("/pet/custom"),
  requestFormat: z.literal("json"),
  parameters: z.never(),
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

export interface Fetcher {
  decodePathParams?: (path: string, pathParams: Record<string, string>) => string;
  encodeSearchParams?: (searchParams: Record<string, unknown> | undefined) => URLSearchParams;
  //
  fetch: (input: {
    method: Method;
    url: URL;
    urlSearchParams?: URLSearchParams | undefined;
    parameters?: EndpointParameters | undefined;
    path: string;
    overrides?: RequestInit;
    throwOnStatusError?: boolean;
  }) => Promise<Response>;
  parseResponseData?: (response: Response) => Promise<unknown>;
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
  Response,
  "ok" | "status" | "json" | "headers"
> {
  ok: true;
  status: TStatusCode;
  headers: never extends THeaders ? Headers : TypedHeaders<THeaders>;
  data: TSuccess;
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) */
  json: () => Promise<TSuccess>;
}

/** @see https://developer.mozilla.org/en-US/docs/Web/API/Response */
export interface TypedErrorResponse<TData, TStatusCode, THeaders> extends Omit<
  Response,
  "ok" | "status" | "json" | "headers"
> {
  ok: false;
  status: TStatusCode;
  headers: never extends THeaders ? Headers : TypedHeaders<THeaders>;
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

type InferSchemaValue<T> = T extends z.ZodType
  ? z.infer<T>
  : T extends object
    ? { [K in keyof T]: InferSchemaValue<T[K]> }
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

// <ValidateHelpers>
const defaultParse = (schema: unknown, value: unknown): unknown => {
  return (schema as { parse: (v: unknown) => unknown }).parse(value);
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
    this.onValidate = onValidate;
    return this;
  }

  /**
   * Replace path parameters in URL
   * Supports both OpenAPI format {param} and Express format :param
   */
  defaultDecodePathParams = (url: string, params: Record<string, string>): string => {
    return url
      .replace(/{(\w+)}/g, (_, key: string) => params[key] || `{${key}}`)
      .replace(/:([a-zA-Z0-9_]+)/g, (_, key: string) => params[key] || `:${key}`);
  };

  /** Uses URLSearchParams, skips null/undefined values */
  defaultEncodeSearchParams = (queryParams: Record<string, unknown> | undefined): URLSearchParams | undefined => {
    if (!queryParams) return;

    const searchParams = new URLSearchParams();
    Object.entries(queryParams).forEach(([key, value]) => {
      if (value != null) {
        // Skip null/undefined values
        if (Array.isArray(value)) {
          value.forEach((val) => val != null && searchParams.append(key, String(val)));
        } else {
          searchParams.append(key, String(value));
        }
      }
    });

    return searchParams;
  };

  defaultParseResponseData = async (response: Response): Promise<unknown> => {
    const contentType = response.headers.get("content-type") ?? "";
    if (contentType.startsWith("text/")) {
      return await response.text();
    }

    if (contentType === "application/octet-stream") {
      return await response.arrayBuffer();
    }

    if (
      contentType.includes("application/json") ||
      (contentType.includes("application/") && contentType.includes("json")) ||
      contentType === "*/*"
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
          ? InferSchemaValue<UParams> & { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
        : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
    >
  ): Promise<Extract<InferResponseByStatus<TEndpoint, SuccessStatusCode>, { data: {} }>["data"]>;

  put<Path extends keyof PutEndpoints, TEndpoint extends PutEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      TEndpoint extends { parameters: infer UParams }
        ? NotNever<UParams> extends true
          ? InferSchemaValue<UParams> & { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
        : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
    >
  ): Promise<SafeApiResponse<TEndpoint>>;

  put<Path extends keyof PutEndpoints, _TEndpoint extends PutEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<any>
  ): Promise<any> {
    return this.request("put", path, ...params);
  }
  // </ApiClient.put>

  // <ApiClient.post>
  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      TEndpoint extends { parameters: infer UParams }
        ? NotNever<UParams> extends true
          ? InferSchemaValue<UParams> & { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
        : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
    >
  ): Promise<Extract<InferResponseByStatus<TEndpoint, SuccessStatusCode>, { data: {} }>["data"]>;

  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      TEndpoint extends { parameters: infer UParams }
        ? NotNever<UParams> extends true
          ? InferSchemaValue<UParams> & { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
        : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
    >
  ): Promise<SafeApiResponse<TEndpoint>>;

  post<Path extends keyof PostEndpoints, _TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<any>
  ): Promise<any> {
    return this.request("post", path, ...params);
  }
  // </ApiClient.post>

  // <ApiClient.get>
  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      TEndpoint extends { parameters: infer UParams }
        ? NotNever<UParams> extends true
          ? InferSchemaValue<UParams> & { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
        : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
    >
  ): Promise<Extract<InferResponseByStatus<TEndpoint, SuccessStatusCode>, { data: {} }>["data"]>;

  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      TEndpoint extends { parameters: infer UParams }
        ? NotNever<UParams> extends true
          ? InferSchemaValue<UParams> & { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
        : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
    >
  ): Promise<SafeApiResponse<TEndpoint>>;

  get<Path extends keyof GetEndpoints, _TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<any>
  ): Promise<any> {
    return this.request("get", path, ...params);
  }
  // </ApiClient.get>

  // <ApiClient.delete>
  delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      TEndpoint extends { parameters: infer UParams }
        ? NotNever<UParams> extends true
          ? InferSchemaValue<UParams> & { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
        : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
    >
  ): Promise<Extract<InferResponseByStatus<TEndpoint, SuccessStatusCode>, { data: {} }>["data"]>;

  delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      TEndpoint extends { parameters: infer UParams }
        ? NotNever<UParams> extends true
          ? InferSchemaValue<UParams> & { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
        : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
    >
  ): Promise<SafeApiResponse<TEndpoint>>;

  delete<Path extends keyof DeleteEndpoints, _TEndpoint extends DeleteEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<any>
  ): Promise<any> {
    return this.request("delete", path, ...params);
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
          ? InferSchemaValue<UParams> & { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
        : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
    >
  ): Promise<Extract<InferResponseByStatus<TEndpoint, SuccessStatusCode>, { data: {} }>["data"]>;

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
          ? InferSchemaValue<UParams> & { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
        : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
    >
  ): Promise<SafeApiResponse<TEndpoint>>;

  request<
    TMethod extends keyof EndpointByMethod,
    TPath extends keyof EndpointByMethod[TMethod],
    TEndpoint extends EndpointByMethod[TMethod][TPath],
  >(method: TMethod, path: TPath, ...params: MaybeOptionalArg<any>): Promise<any> {
    return (async () => {
      const requestParams = params[0];
      const withResponse = requestParams?.withResponse;
      const {
        withResponse: _,
        throwOnStatusError = withResponse ? false : true,
        overrides,
        validate: validateOverride,
        ...fetchParams
      } = requestParams || {};
      const validateSide: ValidateSide = validateOverride ?? this.validate;

      const parametersToSend: EndpointParameters = {};
      if (requestParams?.body !== undefined) (parametersToSend as any).body = requestParams.body;
      if (requestParams?.query !== undefined) (parametersToSend as any).query = requestParams.query;
      if (requestParams?.header !== undefined) (parametersToSend as any).header = requestParams.header;
      if (requestParams?.path !== undefined) (parametersToSend as any).path = requestParams.path;

      const endpointSchema = (EndpointByMethod as any)[method]?.[path];
      const shouldValidateInput = validateSide === "input" || validateSide === "both";
      if (shouldValidateInput && endpointSchema?.parameters && endpointSchema.parameters !== undefined) {
        const paramSchema = endpointSchema.parameters;
        for (const key of ["body", "query", "header", "path"] as const) {
          const schema = paramSchema[key];
          const value = (parametersToSend as any)[key];
          if (schema && value !== undefined) {
            (parametersToSend as any)[key] = await runValidate({
              side: "input",
              method: String(method),
              path: String(path),
              schema,
              value,
              onValidate: this.onValidate,
            });
          }
        }
      }

      const resolvedPath = (this.fetcher.decodePathParams ?? this.defaultDecodePathParams)(
        this.baseUrl + (path as string),
        (parametersToSend.path ?? {}) as Record<string, string>,
      );
      const url = new URL(resolvedPath);
      const urlSearchParams = (this.fetcher.encodeSearchParams ?? this.defaultEncodeSearchParams)(
        parametersToSend.query,
      );

      const response = await this.fetcher.fetch({
        method: method,
        path: path as string,
        url,
        urlSearchParams,
        parameters: Object.keys(fetchParams).length ? fetchParams : undefined,
        overrides,
        throwOnStatusError,
      });
      let data = await (this.fetcher.parseResponseData ?? this.defaultParseResponseData)(response);
      const shouldValidateOutput = validateSide === "output" || validateSide === "both";
      if (shouldValidateOutput && response.ok && endpointSchema?.responses) {
        const responseSchema = endpointSchema.responses[String(response.status)] ?? endpointSchema.responses["default"];
        if (responseSchema) {
          data = await runValidate({
            side: "output",
            method: String(method),
            path: String(path),
            schema: responseSchema,
            value: data,
            onValidate: this.onValidate,
          });
        }
      }
      const typedResponse = Object.assign(response, {
        data: data,
        json: () => Promise.resolve(data),
      }) as SafeApiResponse<TEndpoint>;

      if (throwOnStatusError && errorStatusCodes.includes(response.status as never)) {
        throw new TypedStatusError(typedResponse as never);
      }

      return withResponse ? typedResponse : data;
    })() as Extract<InferResponseByStatus<TEndpoint, SuccessStatusCode>, { data: {} }>["data"];
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
