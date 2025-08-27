import * as v from "valibot";

export type Order = v.InferOutput<typeof Order>;
export const Order = v.object({
  id: v.optional(v.number()),
  petId: v.optional(v.number()),
  quantity: v.optional(v.number()),
  shipDate: v.optional(v.string()),
  status: v.optional(v.union([v.literal("placed"), v.literal("approved"), v.literal("delivered")])),
  complete: v.optional(v.boolean()),
});

export type Address = v.InferOutput<typeof Address>;
export const Address = v.object({
  street: v.optional(v.string()),
  city: v.optional(v.string()),
  state: v.optional(v.string()),
  zip: v.optional(v.string()),
});

export type Customer = v.InferOutput<typeof Customer>;
export const Customer = v.object({
  id: v.optional(v.number()),
  username: v.optional(v.string()),
  address: v.optional(v.array(Address)),
});

export type Category = v.InferOutput<typeof Category>;
export const Category = v.object({
  id: v.optional(v.number()),
  name: v.optional(v.string()),
});

export type User = v.InferOutput<typeof User>;
export const User = v.object({
  id: v.optional(v.number()),
  username: v.optional(v.string()),
  firstName: v.optional(v.string()),
  lastName: v.optional(v.string()),
  email: v.optional(v.string()),
  password: v.optional(v.string()),
  phone: v.optional(v.string()),
  userStatus: v.optional(v.number()),
});

export type Tag = v.InferOutput<typeof Tag>;
export const Tag = v.object({
  id: v.optional(v.number()),
  name: v.optional(v.string()),
});

export type Pet = v.InferOutput<typeof Pet>;
export const Pet = v.object({
  id: v.optional(v.union([v.number(), v.undefined()])),
  name: v.string(),
  category: v.optional(v.union([Category, v.undefined()])),
  photoUrls: v.array(v.string()),
  tags: v.optional(v.union([v.array(Tag), v.undefined()])),
  status: v.optional(
    v.union([v.union([v.literal("available"), v.literal("pending"), v.literal("sold")]), v.undefined()]),
  ),
});

export type ApiResponse = v.InferOutput<typeof ApiResponse>;
export const ApiResponse = v.object({
  code: v.optional(v.number()),
  type: v.optional(v.string()),
  message: v.optional(v.string()),
});

export type __ENDPOINTS_START__ = v.InferOutput<typeof __ENDPOINTS_START__>;
export const __ENDPOINTS_START__ = v.object({});

export type put_UpdatePet = v.InferOutput<typeof put_UpdatePet>;
export const put_UpdatePet = v.object({
  method: v.literal("PUT"),
  path: v.literal("/pet"),
  requestFormat: v.literal("json"),
  parameters: v.object({
    body: Pet,
  }),
  responses: v.object({
    "200": Pet,
    "400": v.unknown(),
    "404": v.unknown(),
    "405": v.unknown(),
  }),
});

export type post_AddPet = v.InferOutput<typeof post_AddPet>;
export const post_AddPet = v.object({
  method: v.literal("POST"),
  path: v.literal("/pet"),
  requestFormat: v.literal("json"),
  parameters: v.object({
    body: Pet,
  }),
  responses: v.object({
    "200": Pet,
    "405": v.unknown(),
  }),
});

export type get_FindPetsByStatus = v.InferOutput<typeof get_FindPetsByStatus>;
export const get_FindPetsByStatus = v.object({
  method: v.literal("GET"),
  path: v.literal("/pet/findByStatus"),
  requestFormat: v.literal("json"),
  parameters: v.object({
    query: v.object({
      status: v.optional(v.union([v.literal("available"), v.literal("pending"), v.literal("sold")])),
    }),
  }),
  responses: v.object({
    "200": v.array(Pet),
    "304": v.unknown(),
    "400": v.object({
      code: v.number(),
      message: v.string(),
    }),
  }),
});

export type get_FindPetsByTags = v.InferOutput<typeof get_FindPetsByTags>;
export const get_FindPetsByTags = v.object({
  method: v.literal("GET"),
  path: v.literal("/pet/findByTags"),
  requestFormat: v.literal("json"),
  parameters: v.object({
    query: v.object({
      tags: v.optional(v.array(v.string())),
    }),
  }),
  responses: v.object({
    "200": v.union([v.array(Pet), v.array(User), v.array(Tag)]),
    "400": v.unknown(),
  }),
});

export type get_GetPetById = v.InferOutput<typeof get_GetPetById>;
export const get_GetPetById = v.object({
  method: v.literal("GET"),
  path: v.literal("/pet/{petId}"),
  requestFormat: v.literal("json"),
  parameters: v.object({
    path: v.object({
      petId: v.number(),
    }),
  }),
  responses: v.object({
    "200": Pet,
    "400": v.object({
      code: v.number(),
      message: v.string(),
    }),
    "404": v.object({
      code: v.number(),
      message: v.string(),
    }),
  }),
});

export type post_UpdatePetWithForm = v.InferOutput<typeof post_UpdatePetWithForm>;
export const post_UpdatePetWithForm = v.object({
  method: v.literal("POST"),
  path: v.literal("/pet/{petId}"),
  requestFormat: v.literal("json"),
  parameters: v.object({
    query: v.object({
      name: v.optional(v.string()),
      status: v.optional(v.string()),
    }),
    path: v.object({
      petId: v.number(),
    }),
  }),
  responses: v.object({
    "405": v.unknown(),
  }),
});

export type delete_DeletePet = v.InferOutput<typeof delete_DeletePet>;
export const delete_DeletePet = v.object({
  method: v.literal("DELETE"),
  path: v.literal("/pet/{petId}"),
  requestFormat: v.literal("json"),
  parameters: v.object({
    path: v.object({
      petId: v.number(),
    }),
    header: v.object({
      api_key: v.optional(v.string()),
    }),
  }),
  responses: v.object({
    "400": v.unknown(),
  }),
});

export type post_UploadFile = v.InferOutput<typeof post_UploadFile>;
export const post_UploadFile = v.object({
  method: v.literal("POST"),
  path: v.literal("/pet/{petId}/uploadImage"),
  requestFormat: v.literal("binary"),
  parameters: v.object({
    query: v.object({
      additionalMetadata: v.optional(v.string()),
    }),
    path: v.object({
      petId: v.number(),
    }),
    body: v.string(),
  }),
  responses: v.object({
    "200": ApiResponse,
  }),
});

export type get_GetInventory = v.InferOutput<typeof get_GetInventory>;
export const get_GetInventory = v.object({
  method: v.literal("GET"),
  path: v.literal("/store/inventory"),
  requestFormat: v.literal("json"),
  parameters: v.never(),
  responses: v.object({
    "200": v.record(v.string(), v.number()),
  }),
});

export type post_PlaceOrder = v.InferOutput<typeof post_PlaceOrder>;
export const post_PlaceOrder = v.object({
  method: v.literal("POST"),
  path: v.literal("/store/order"),
  requestFormat: v.literal("json"),
  parameters: v.object({
    body: Order,
  }),
  responses: v.object({
    "200": Order,
    "405": v.unknown(),
  }),
});

export type get_GetOrderById = v.InferOutput<typeof get_GetOrderById>;
export const get_GetOrderById = v.object({
  method: v.literal("GET"),
  path: v.literal("/store/order/{orderId}"),
  requestFormat: v.literal("json"),
  parameters: v.object({
    path: v.object({
      orderId: v.number(),
    }),
  }),
  responses: v.object({
    "200": Order,
    "400": v.unknown(),
    "404": v.unknown(),
  }),
});

export type delete_DeleteOrder = v.InferOutput<typeof delete_DeleteOrder>;
export const delete_DeleteOrder = v.object({
  method: v.literal("DELETE"),
  path: v.literal("/store/order/{orderId}"),
  requestFormat: v.literal("json"),
  parameters: v.object({
    path: v.object({
      orderId: v.number(),
    }),
  }),
  responses: v.object({
    "400": v.unknown(),
    "404": v.unknown(),
  }),
});

export type post_CreateUser = v.InferOutput<typeof post_CreateUser>;
export const post_CreateUser = v.object({
  method: v.literal("POST"),
  path: v.literal("/user"),
  requestFormat: v.literal("json"),
  parameters: v.object({
    body: User,
  }),
  responses: v.object({
    default: User,
  }),
});

export type post_CreateUsersWithListInput = v.InferOutput<typeof post_CreateUsersWithListInput>;
export const post_CreateUsersWithListInput = v.object({
  method: v.literal("POST"),
  path: v.literal("/user/createWithList"),
  requestFormat: v.literal("json"),
  parameters: v.object({
    body: v.array(User),
  }),
  responses: v.object({
    "200": User,
    default: v.unknown(),
  }),
});

export type get_LoginUser = v.InferOutput<typeof get_LoginUser>;
export const get_LoginUser = v.object({
  method: v.literal("GET"),
  path: v.literal("/user/login"),
  requestFormat: v.literal("json"),
  parameters: v.object({
    query: v.object({
      username: v.optional(v.string()),
      password: v.optional(v.string()),
    }),
  }),
  responses: v.object({
    "200": v.string(),
    "400": v.unknown(),
  }),
  responseHeaders: v.object({
    "200": v.object({
      "X-Rate-Limit": v.number(),
      "X-Expires-After": v.string(),
    }),
    "400": v.object({
      "X-Error": v.string(),
    }),
  }),
});

export type get_LogoutUser = v.InferOutput<typeof get_LogoutUser>;
export const get_LogoutUser = v.object({
  method: v.literal("GET"),
  path: v.literal("/user/logout"),
  requestFormat: v.literal("json"),
  parameters: v.never(),
  responses: v.object({
    default: v.unknown(),
  }),
});

export type get_GetUserByName = v.InferOutput<typeof get_GetUserByName>;
export const get_GetUserByName = v.object({
  method: v.literal("GET"),
  path: v.literal("/user/{username}"),
  requestFormat: v.literal("json"),
  parameters: v.object({
    path: v.object({
      username: v.string(),
    }),
  }),
  responses: v.object({
    "200": User,
    "201": v.object({
      id: v.number(),
      username: v.string(),
    }),
    "400": v.object({
      code: v.number(),
      message: v.string(),
    }),
    "404": v.unknown(),
  }),
});

export type put_UpdateUser = v.InferOutput<typeof put_UpdateUser>;
export const put_UpdateUser = v.object({
  method: v.literal("PUT"),
  path: v.literal("/user/{username}"),
  requestFormat: v.literal("json"),
  parameters: v.object({
    path: v.object({
      username: v.string(),
    }),
    body: User,
  }),
  responses: v.object({
    default: v.unknown(),
  }),
});

export type delete_DeleteUser = v.InferOutput<typeof delete_DeleteUser>;
export const delete_DeleteUser = v.object({
  method: v.literal("DELETE"),
  path: v.literal("/user/{username}"),
  requestFormat: v.literal("json"),
  parameters: v.object({
    path: v.object({
      username: v.string(),
    }),
  }),
  responses: v.object({
    "400": v.unknown(),
    "404": v.unknown(),
  }),
});

export type __ENDPOINTS_END__ = v.InferOutput<typeof __ENDPOINTS_END__>;
export const __ENDPOINTS_END__ = v.object({});

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
  transformRequest: (input: {
    method: Method;
    url: string;
    parameters?: EndpointParameters | undefined;
    path: string;
    overrides?: RequestInit;
  }) => Promise<Response>;
  transformResponse?: (response: Response) => Promise<Response>;
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

// </ApiClientTypes>

// <TypedResponseError>
export class TypedResponseError extends Error {
  response: TypedErrorResponse<unknown, ErrorStatusCode, unknown>;
  status: number;
  constructor(response: TypedErrorResponse<unknown, ErrorStatusCode, unknown>) {
    super(`HTTP ${response.status}: ${response.statusText}`);
    this.name = "TypedResponseError";
    this.response = response;
    this.status = response.status;
  }
}
// </TypedResponseError>

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

  parseResponse = async <T,>(response: Response): Promise<T> => {
    const contentType = response.headers.get("content-type");
    if (contentType?.includes("application/json")) {
      return response.json();
    }
    return response.text() as unknown as T;
  };

  // <ApiClient.put>
  put<Path extends keyof PutEndpoints, TEndpoint extends PutEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      (v.InferOutput<TEndpoint> extends { parameters: infer UParams } ? UParams : {}) & {
        overrides?: HeadersInit;
        withResponse?: false;
        throwOnStatusError?: boolean;
      }
    >
  ): Promise<Extract<InferResponseByStatus<v.InferOutput<TEndpoint>, SuccessStatusCode>, { data: {} }>["data"]>;

  put<Path extends keyof PutEndpoints, TEndpoint extends PutEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      (v.InferOutput<TEndpoint> extends { parameters: infer UParams } ? UParams : {}) & {
        overrides?: HeadersInit;
        withResponse: true;
        throwOnStatusError?: boolean;
      }
    >
  ): Promise<SafeApiResponse<TEndpoint>>;

  put<Path extends keyof PutEndpoints, TEndpoint extends PutEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<any>
  ): Promise<any> {
    const requestParams = params[0];
    const withResponse = requestParams?.withResponse;
    const { withResponse: _, throwOnStatusError = withResponse ? false : true, ...fetchParams } = requestParams || {};

    const promise = this.fetcher
      .transformRequest({
        method: "put",
        path,
        url: this.baseUrl + path,
        parameters: Object.keys(fetchParams).length ? requestParams : undefined,
        overrides: requestParams?.overrides,
      })
      .then(async (response) => {
        const data = await this.parseResponse(response);
        const typedResponse = Object.assign(response, {
          data: data,
          json: () => Promise.resolve(data),
        }) as SafeApiResponse<TEndpoint>;

        if (throwOnStatusError && errorStatusCodes.includes(response.status as never)) {
          throw new TypedResponseError(typedResponse as never);
        }

        return withResponse ? typedResponse : data;
      });

    return promise as Promise<
      Extract<InferResponseByStatus<v.InferOutput<TEndpoint>, SuccessStatusCode>, { data: {} }>["data"]
    >;
  }
  // </ApiClient.put>

  // <ApiClient.post>
  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      (v.InferOutput<TEndpoint> extends { parameters: infer UParams } ? UParams : {}) & {
        overrides?: HeadersInit;
        withResponse?: false;
        throwOnStatusError?: boolean;
      }
    >
  ): Promise<Extract<InferResponseByStatus<v.InferOutput<TEndpoint>, SuccessStatusCode>, { data: {} }>["data"]>;

  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      (v.InferOutput<TEndpoint> extends { parameters: infer UParams } ? UParams : {}) & {
        overrides?: HeadersInit;
        withResponse: true;
        throwOnStatusError?: boolean;
      }
    >
  ): Promise<SafeApiResponse<TEndpoint>>;

  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<any>
  ): Promise<any> {
    const requestParams = params[0];
    const withResponse = requestParams?.withResponse;
    const { withResponse: _, throwOnStatusError = withResponse ? false : true, ...fetchParams } = requestParams || {};

    const promise = this.fetcher
      .transformRequest({
        method: "post",
        path,
        url: this.baseUrl + path,
        parameters: Object.keys(fetchParams).length ? requestParams : undefined,
        overrides: requestParams?.overrides,
      })
      .then(async (response) => {
        const data = await this.parseResponse(response);
        const typedResponse = Object.assign(response, {
          data: data,
          json: () => Promise.resolve(data),
        }) as SafeApiResponse<TEndpoint>;

        if (throwOnStatusError && errorStatusCodes.includes(response.status as never)) {
          throw new TypedResponseError(typedResponse as never);
        }

        return withResponse ? typedResponse : data;
      });

    return promise as Promise<
      Extract<InferResponseByStatus<v.InferOutput<TEndpoint>, SuccessStatusCode>, { data: {} }>["data"]
    >;
  }
  // </ApiClient.post>

  // <ApiClient.get>
  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      (v.InferOutput<TEndpoint> extends { parameters: infer UParams } ? UParams : {}) & {
        overrides?: HeadersInit;
        withResponse?: false;
        throwOnStatusError?: boolean;
      }
    >
  ): Promise<Extract<InferResponseByStatus<v.InferOutput<TEndpoint>, SuccessStatusCode>, { data: {} }>["data"]>;

  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      (v.InferOutput<TEndpoint> extends { parameters: infer UParams } ? UParams : {}) & {
        overrides?: HeadersInit;
        withResponse: true;
        throwOnStatusError?: boolean;
      }
    >
  ): Promise<SafeApiResponse<TEndpoint>>;

  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<any>
  ): Promise<any> {
    const requestParams = params[0];
    const withResponse = requestParams?.withResponse;
    const { withResponse: _, throwOnStatusError = withResponse ? false : true, ...fetchParams } = requestParams || {};

    const promise = this.fetcher
      .transformRequest({
        method: "get",
        path,
        url: this.baseUrl + path,
        parameters: Object.keys(fetchParams).length ? requestParams : undefined,
        overrides: requestParams?.overrides,
      })
      .then(async (response) => {
        const data = await this.parseResponse(response);
        const typedResponse = Object.assign(response, {
          data: data,
          json: () => Promise.resolve(data),
        }) as SafeApiResponse<TEndpoint>;

        if (throwOnStatusError && errorStatusCodes.includes(response.status as never)) {
          throw new TypedResponseError(typedResponse as never);
        }

        return withResponse ? typedResponse : data;
      });

    return promise as Promise<
      Extract<InferResponseByStatus<v.InferOutput<TEndpoint>, SuccessStatusCode>, { data: {} }>["data"]
    >;
  }
  // </ApiClient.get>

  // <ApiClient.delete>
  delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      (v.InferOutput<TEndpoint> extends { parameters: infer UParams } ? UParams : {}) & {
        overrides?: HeadersInit;
        withResponse?: false;
        throwOnStatusError?: boolean;
      }
    >
  ): Promise<Extract<InferResponseByStatus<v.InferOutput<TEndpoint>, SuccessStatusCode>, { data: {} }>["data"]>;

  delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      (v.InferOutput<TEndpoint> extends { parameters: infer UParams } ? UParams : {}) & {
        overrides?: HeadersInit;
        withResponse: true;
        throwOnStatusError?: boolean;
      }
    >
  ): Promise<SafeApiResponse<TEndpoint>>;

  delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<any>
  ): Promise<any> {
    const requestParams = params[0];
    const withResponse = requestParams?.withResponse;
    const { withResponse: _, throwOnStatusError = withResponse ? false : true, ...fetchParams } = requestParams || {};

    const promise = this.fetcher
      .transformRequest({
        method: "delete",
        path,
        url: this.baseUrl + path,
        parameters: Object.keys(fetchParams).length ? requestParams : undefined,
        overrides: requestParams?.overrides,
      })
      .then(async (response) => {
        const data = await this.parseResponse(response);
        const typedResponse = Object.assign(response, {
          data: data,
          json: () => Promise.resolve(data),
        }) as SafeApiResponse<TEndpoint>;

        if (throwOnStatusError && errorStatusCodes.includes(response.status as never)) {
          throw new TypedResponseError(typedResponse as never);
        }

        return withResponse ? typedResponse : data;
      });

    return promise as Promise<
      Extract<InferResponseByStatus<v.InferOutput<TEndpoint>, SuccessStatusCode>, { data: {} }>["data"]
    >;
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
      (v.InferOutput<TEndpoint> extends { parameters: infer UParams } ? UParams : {}) & {
        overrides?: HeadersInit;
        withResponse?: false;
        throwOnStatusError?: boolean;
      }
    >
  ): Promise<Extract<InferResponseByStatus<v.InferOutput<TEndpoint>, SuccessStatusCode>, { data: {} }>["data"]>;

  request<
    TMethod extends keyof EndpointByMethod,
    TPath extends keyof EndpointByMethod[TMethod],
    TEndpoint extends EndpointByMethod[TMethod][TPath],
  >(
    method: TMethod,
    path: TPath,
    ...params: MaybeOptionalArg<
      (v.InferOutput<TEndpoint> extends { parameters: infer UParams } ? UParams : {}) & {
        overrides?: HeadersInit;
        withResponse?: true;
        throwOnStatusError?: boolean;
      }
    >
  ): Promise<SafeApiResponse<TEndpoint>>;

  request<
    TMethod extends keyof EndpointByMethod,
    TPath extends keyof EndpointByMethod[TMethod],
    TEndpoint extends EndpointByMethod[TMethod][TPath],
  >(method: TMethod, path: TPath, ...params: MaybeOptionalArg<any>): Promise<any> {
    const requestParams = params[0];
    const withResponse = requestParams?.withResponse;
    const { withResponse: _, throwOnStatusError = withResponse ? false : true, ...fetchParams } = requestParams || {};

    const promise = this.fetcher
      .transformRequest({
        method: method,
        path: path as string,
        url: this.baseUrl + (path as string),
        parameters: Object.keys(fetchParams).length ? requestParams : undefined,
        overrides: requestParams?.overrides,
      })
      .then(async (response) => {
        const data = await this.parseResponse(response);
        const typedResponse = Object.assign(response, {
          data: data,
          json: () => Promise.resolve(data),
        }) as SafeApiResponse<TEndpoint>;

        if (throwOnStatusError && errorStatusCodes.includes(response.status as never)) {
          throw new TypedResponseError(typedResponse as never);
        }

        return withResponse ? typedResponse : data;
      });

    return promise as Extract<InferResponseByStatus<v.InferOutput<TEndpoint>, SuccessStatusCode>, { data: {} }>["data"];
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
