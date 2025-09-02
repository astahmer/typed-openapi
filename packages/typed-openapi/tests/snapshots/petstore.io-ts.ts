import t from "io-ts";

export type Order = t.TypeOf<typeof Order>;
export const Order = t.type({
  id: t.union([t.undefined, t.number]),
  petId: t.union([t.undefined, t.number]),
  quantity: t.union([t.undefined, t.number]),
  shipDate: t.union([t.undefined, t.string]),
  status: t.union([t.undefined, t.union([t.literal("placed"), t.literal("approved"), t.literal("delivered")])]),
  complete: t.union([t.undefined, t.boolean]),
});

export type Address = t.TypeOf<typeof Address>;
export const Address = t.type({
  street: t.union([t.undefined, t.string]),
  city: t.union([t.undefined, t.string]),
  state: t.union([t.undefined, t.string]),
  zip: t.union([t.undefined, t.string]),
});

export type Customer = t.TypeOf<typeof Customer>;
export const Customer = t.type({
  id: t.union([t.undefined, t.number]),
  username: t.union([t.undefined, t.string]),
  address: t.union([t.undefined, t.array(Address)]),
});

export type Category = t.TypeOf<typeof Category>;
export const Category = t.type({
  id: t.union([t.undefined, t.number]),
  name: t.union([t.undefined, t.string]),
});

export type User = t.TypeOf<typeof User>;
export const User = t.type({
  id: t.union([t.undefined, t.number]),
  username: t.union([t.undefined, t.string]),
  firstName: t.union([t.undefined, t.string]),
  lastName: t.union([t.undefined, t.string]),
  email: t.union([t.undefined, t.string]),
  password: t.union([t.undefined, t.string]),
  phone: t.union([t.undefined, t.string]),
  userStatus: t.union([t.undefined, t.number]),
});

export type Tag = t.TypeOf<typeof Tag>;
export const Tag = t.type({
  id: t.union([t.undefined, t.number]),
  name: t.union([t.undefined, t.string]),
});

export type Pet = t.TypeOf<typeof Pet>;
export const Pet = t.type({
  id: t.union([t.undefined, t.union([t.number, t.undefined])]),
  name: t.string,
  category: t.union([t.undefined, t.union([Category, t.undefined])]),
  photoUrls: t.array(t.string),
  tags: t.union([t.undefined, t.union([t.array(Tag), t.undefined])]),
  status: t.union([
    t.undefined,
    t.union([t.union([t.literal("available"), t.literal("pending"), t.literal("sold")]), t.undefined]),
  ]),
});

export type ApiResponse = t.TypeOf<typeof ApiResponse>;
export const ApiResponse = t.type({
  code: t.union([t.undefined, t.number]),
  type: t.union([t.undefined, t.string]),
  message: t.union([t.undefined, t.string]),
});

export type __ENDPOINTS_START__ = t.TypeOf<typeof __ENDPOINTS_START__>;
export const __ENDPOINTS_START__ = t.type({});

export type put_UpdatePet = t.TypeOf<typeof put_UpdatePet>;
export const put_UpdatePet = t.type({
  method: t.literal("PUT"),
  path: t.literal("/pet"),
  requestFormat: t.literal("json"),
  parameters: t.type({
    body: Pet,
  }),
  responses: t.type({
    "200": Pet,
    "400": t.unknown,
    "404": t.unknown,
    "405": t.unknown,
  }),
});

export type post_AddPet = t.TypeOf<typeof post_AddPet>;
export const post_AddPet = t.type({
  method: t.literal("POST"),
  path: t.literal("/pet"),
  requestFormat: t.literal("json"),
  parameters: t.type({
    body: Pet,
  }),
  responses: t.type({
    "200": Pet,
    "405": t.unknown,
  }),
});

export type get_FindPetsByStatus = t.TypeOf<typeof get_FindPetsByStatus>;
export const get_FindPetsByStatus = t.type({
  method: t.literal("GET"),
  path: t.literal("/pet/findByStatus"),
  requestFormat: t.literal("json"),
  parameters: t.type({
    query: t.type({
      status: t.union([t.undefined, t.union([t.literal("available"), t.literal("pending"), t.literal("sold")])]),
    }),
  }),
  responses: t.type({
    "200": t.array(Pet),
    "304": t.unknown,
    "400": t.type({
      code: t.number,
      message: t.string,
    }),
  }),
});

export type get_FindPetsByTags = t.TypeOf<typeof get_FindPetsByTags>;
export const get_FindPetsByTags = t.type({
  method: t.literal("GET"),
  path: t.literal("/pet/findByTags"),
  requestFormat: t.literal("json"),
  parameters: t.type({
    query: t.type({
      tags: t.union([t.undefined, t.array(t.string)]),
    }),
  }),
  responses: t.type({
    "200": t.union([t.array(Pet), t.array(User), t.array(Tag)]),
    "400": t.unknown,
  }),
});

export type get_GetPetById = t.TypeOf<typeof get_GetPetById>;
export const get_GetPetById = t.type({
  method: t.literal("GET"),
  path: t.literal("/pet/{petId}"),
  requestFormat: t.literal("json"),
  parameters: t.type({
    path: t.type({
      petId: t.number,
    }),
  }),
  responses: t.type({
    "200": Pet,
    "400": t.type({
      code: t.number,
      message: t.string,
    }),
    "404": t.type({
      code: t.number,
      message: t.string,
    }),
  }),
});

export type post_UpdatePetWithForm = t.TypeOf<typeof post_UpdatePetWithForm>;
export const post_UpdatePetWithForm = t.type({
  method: t.literal("POST"),
  path: t.literal("/pet/{petId}"),
  requestFormat: t.literal("json"),
  parameters: t.type({
    query: t.type({
      name: t.union([t.undefined, t.string]),
      status: t.union([t.undefined, t.string]),
    }),
    path: t.type({
      petId: t.number,
    }),
  }),
  responses: t.type({
    "405": t.unknown,
  }),
});

export type delete_DeletePet = t.TypeOf<typeof delete_DeletePet>;
export const delete_DeletePet = t.type({
  method: t.literal("DELETE"),
  path: t.literal("/pet/{petId}"),
  requestFormat: t.literal("json"),
  parameters: t.type({
    path: t.type({
      petId: t.number,
    }),
    header: t.type({
      api_key: t.union([t.undefined, t.string]),
    }),
  }),
  responses: t.type({
    "400": t.unknown,
  }),
});

export type post_UploadFile = t.TypeOf<typeof post_UploadFile>;
export const post_UploadFile = t.type({
  method: t.literal("POST"),
  path: t.literal("/pet/{petId}/uploadImage"),
  requestFormat: t.literal("binary"),
  parameters: t.type({
    query: t.type({
      additionalMetadata: t.union([t.undefined, t.string]),
    }),
    path: t.type({
      petId: t.number,
    }),
    body: t.string,
  }),
  responses: t.type({
    "200": ApiResponse,
  }),
});

export type get_GetInventory = t.TypeOf<typeof get_GetInventory>;
export const get_GetInventory = t.type({
  method: t.literal("GET"),
  path: t.literal("/store/inventory"),
  requestFormat: t.literal("json"),
  parameters: t.never,
  responses: t.type({
    "200": t.record(t.string, t.number),
  }),
});

export type post_PlaceOrder = t.TypeOf<typeof post_PlaceOrder>;
export const post_PlaceOrder = t.type({
  method: t.literal("POST"),
  path: t.literal("/store/order"),
  requestFormat: t.literal("json"),
  parameters: t.type({
    body: Order,
  }),
  responses: t.type({
    "200": Order,
    "405": t.unknown,
  }),
});

export type get_GetOrderById = t.TypeOf<typeof get_GetOrderById>;
export const get_GetOrderById = t.type({
  method: t.literal("GET"),
  path: t.literal("/store/order/{orderId}"),
  requestFormat: t.literal("json"),
  parameters: t.type({
    path: t.type({
      orderId: t.number,
    }),
  }),
  responses: t.type({
    "200": Order,
    "400": t.unknown,
    "404": t.unknown,
  }),
});

export type delete_DeleteOrder = t.TypeOf<typeof delete_DeleteOrder>;
export const delete_DeleteOrder = t.type({
  method: t.literal("DELETE"),
  path: t.literal("/store/order/{orderId}"),
  requestFormat: t.literal("json"),
  parameters: t.type({
    path: t.type({
      orderId: t.number,
    }),
  }),
  responses: t.type({
    "400": t.unknown,
    "404": t.unknown,
  }),
});

export type post_CreateUser = t.TypeOf<typeof post_CreateUser>;
export const post_CreateUser = t.type({
  method: t.literal("POST"),
  path: t.literal("/user"),
  requestFormat: t.literal("json"),
  parameters: t.type({
    body: User,
  }),
  responses: t.type({
    default: User,
  }),
});

export type post_CreateUsersWithListInput = t.TypeOf<typeof post_CreateUsersWithListInput>;
export const post_CreateUsersWithListInput = t.type({
  method: t.literal("POST"),
  path: t.literal("/user/createWithList"),
  requestFormat: t.literal("json"),
  parameters: t.type({
    body: t.array(User),
  }),
  responses: t.type({
    "200": User,
    default: t.unknown,
  }),
});

export type get_LoginUser = t.TypeOf<typeof get_LoginUser>;
export const get_LoginUser = t.type({
  method: t.literal("GET"),
  path: t.literal("/user/login"),
  requestFormat: t.literal("json"),
  parameters: t.type({
    query: t.type({
      username: t.union([t.undefined, t.string]),
      password: t.union([t.undefined, t.string]),
    }),
  }),
  responses: t.type({
    "200": t.string,
    "400": t.unknown,
  }),
  responseHeaders: t.type({
    "200": t.type({
      "X-Rate-Limit": t.number,
      "X-Expires-After": t.string,
    }),
    "400": t.type({
      "X-Error": t.string,
    }),
  }),
});

export type get_LogoutUser = t.TypeOf<typeof get_LogoutUser>;
export const get_LogoutUser = t.type({
  method: t.literal("GET"),
  path: t.literal("/user/logout"),
  requestFormat: t.literal("json"),
  parameters: t.never,
  responses: t.type({
    default: t.unknown,
  }),
});

export type get_GetUserByName = t.TypeOf<typeof get_GetUserByName>;
export const get_GetUserByName = t.type({
  method: t.literal("GET"),
  path: t.literal("/user/{username}"),
  requestFormat: t.literal("json"),
  parameters: t.type({
    path: t.type({
      username: t.string,
    }),
  }),
  responses: t.type({
    "200": User,
    "201": t.type({
      id: t.number,
      username: t.string,
    }),
    "400": t.type({
      code: t.number,
      message: t.string,
    }),
    "404": t.unknown,
  }),
});

export type put_UpdateUser = t.TypeOf<typeof put_UpdateUser>;
export const put_UpdateUser = t.type({
  method: t.literal("PUT"),
  path: t.literal("/user/{username}"),
  requestFormat: t.literal("json"),
  parameters: t.type({
    path: t.type({
      username: t.string,
    }),
    body: User,
  }),
  responses: t.type({
    default: t.unknown,
  }),
});

export type delete_DeleteUser = t.TypeOf<typeof delete_DeleteUser>;
export const delete_DeleteUser = t.type({
  method: t.literal("DELETE"),
  path: t.literal("/user/{username}"),
  requestFormat: t.literal("json"),
  parameters: t.type({
    path: t.type({
      username: t.string,
    }),
  }),
  responses: t.type({
    "400": t.unknown,
    "404": t.unknown,
  }),
});

export type get_GetPetTextPlain = t.TypeOf<typeof get_GetPetTextPlain>;
export const get_GetPetTextPlain = t.type({
  method: t.literal("GET"),
  path: t.literal("/pet/text"),
  requestFormat: t.literal("json"),
  parameters: t.never,
  responses: t.type({
    "200": User,
  }),
});

export type get_GetPetEmpty = t.TypeOf<typeof get_GetPetEmpty>;
export const get_GetPetEmpty = t.type({
  method: t.literal("GET"),
  path: t.literal("/pet/empty"),
  requestFormat: t.literal("json"),
  parameters: t.never,
  responses: t.type({
    "204": t.unknown,
  }),
});

export type get_GetPetCustom = t.TypeOf<typeof get_GetPetCustom>;
export const get_GetPetCustom = t.type({
  method: t.literal("GET"),
  path: t.literal("/pet/custom"),
  requestFormat: t.literal("json"),
  parameters: t.never,
  responses: t.type({
    "200": Pet,
  }),
});

export type __ENDPOINTS_END__ = t.TypeOf<typeof __ENDPOINTS_END__>;
export const __ENDPOINTS_END__ = t.type({});

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
export interface TypedHeaders<TypedHeaderValues extends Record<string, string> | unknown>
  extends Omit<Headers, "append" | "delete" | "get" | "getSetCookie" | "has" | "set" | "forEach"> {
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
export interface TypedSuccessResponse<TSuccess, TStatusCode, THeaders>
  extends Omit<Response, "ok" | "status" | "json" | "headers"> {
  ok: true;
  status: TStatusCode;
  headers: never extends THeaders ? Headers : TypedHeaders<THeaders>;
  data: TSuccess;
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) */
  json: () => Promise<TSuccess>;
}

/** @see https://developer.mozilla.org/en-US/docs/Web/API/Response */
export interface TypedErrorResponse<TData, TStatusCode, THeaders>
  extends Omit<Response, "ok" | "status" | "json" | "headers"> {
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

export type SafeApiResponse<TEndpoint> = TEndpoint extends { responses: infer TResponses }
  ? TResponses extends Record<string, unknown>
    ? TypedApiResponse<TResponses, TEndpoint extends { responseHeaders: infer THeaders } ? THeaders : never>
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

// <ApiClient>
export class ApiClient {
  baseUrl: string = "";
  successStatusCodes = successStatusCodes;
  errorStatusCodes = errorStatusCodes;

  constructor(public fetcher: Fetcher) {}

  setBaseUrl(baseUrl: string) {
    this.baseUrl = baseUrl;
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
          ? UParams & { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
        : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
    >
  ): Promise<Extract<InferResponseByStatus<t.TypeOf<TEndpoint>, SuccessStatusCode>, { data: {} }>["data"]>;

  put<Path extends keyof PutEndpoints, TEndpoint extends PutEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      TEndpoint extends { parameters: infer UParams }
        ? NotNever<UParams> extends true
          ? UParams & { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
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
          ? UParams & { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
        : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
    >
  ): Promise<Extract<InferResponseByStatus<t.TypeOf<TEndpoint>, SuccessStatusCode>, { data: {} }>["data"]>;

  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      TEndpoint extends { parameters: infer UParams }
        ? NotNever<UParams> extends true
          ? UParams & { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
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
          ? UParams & { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
        : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
    >
  ): Promise<Extract<InferResponseByStatus<t.TypeOf<TEndpoint>, SuccessStatusCode>, { data: {} }>["data"]>;

  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      TEndpoint extends { parameters: infer UParams }
        ? NotNever<UParams> extends true
          ? UParams & { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
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
          ? UParams & { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
        : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
    >
  ): Promise<Extract<InferResponseByStatus<t.TypeOf<TEndpoint>, SuccessStatusCode>, { data: {} }>["data"]>;

  delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      TEndpoint extends { parameters: infer UParams }
        ? NotNever<UParams> extends true
          ? UParams & { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
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
          ? UParams & { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
        : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
    >
  ): Promise<Extract<InferResponseByStatus<t.TypeOf<TEndpoint>, SuccessStatusCode>, { data: {} }>["data"]>;

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
          ? UParams & { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
        : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
    >
  ): Promise<SafeApiResponse<TEndpoint>>;

  request<
    TMethod extends keyof EndpointByMethod,
    TPath extends keyof EndpointByMethod[TMethod],
    TEndpoint extends EndpointByMethod[TMethod][TPath],
  >(method: TMethod, path: TPath, ...params: MaybeOptionalArg<any>): Promise<any> {
    const requestParams = params[0];
    const withResponse = requestParams?.withResponse;
    const {
      withResponse: _,
      throwOnStatusError = withResponse ? false : true,
      overrides,
      ...fetchParams
    } = requestParams || {};

    const parametersToSend: EndpointParameters = {};
    if (requestParams?.body !== undefined) (parametersToSend as any).body = requestParams.body;
    if (requestParams?.query !== undefined) (parametersToSend as any).query = requestParams.query;
    if (requestParams?.header !== undefined) (parametersToSend as any).header = requestParams.header;
    if (requestParams?.path !== undefined) (parametersToSend as any).path = requestParams.path;

    const resolvedPath = (this.fetcher.decodePathParams ?? this.defaultDecodePathParams)(
      this.baseUrl + (path as string),
      (parametersToSend.path ?? {}) as Record<string, string>,
    );
    const url = new URL(resolvedPath);
    const urlSearchParams = (this.fetcher.encodeSearchParams ?? this.defaultEncodeSearchParams)(parametersToSend.query);

    const promise = this.fetcher
      .fetch({
        method: method,
        path: path as string,
        url,
        urlSearchParams,
        parameters: Object.keys(fetchParams).length ? fetchParams : undefined,
        overrides,
        throwOnStatusError,
      })
      .then(async (response) => {
        const data = await (this.fetcher.parseResponseData ?? this.defaultParseResponseData)(response);
        const typedResponse = Object.assign(response, {
          data: data,
          json: () => Promise.resolve(data),
        }) as SafeApiResponse<TEndpoint>;

        if (throwOnStatusError && errorStatusCodes.includes(response.status as never)) {
          throw new TypedStatusError(typedResponse as never);
        }

        return withResponse ? typedResponse : data;
      });

    return promise as Extract<InferResponseByStatus<t.TypeOf<TEndpoint>, SuccessStatusCode>, { data: {} }>["data"];
  }
  // </ApiClient.request>
}

export function createApiClient(fetcher: Fetcher, baseUrl?: string) {
  return new ApiClient(fetcher).setBaseUrl(baseUrl ?? "");
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
