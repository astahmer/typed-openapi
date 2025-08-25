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
    "200": t.array(Pet),
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
    "400": t.unknown,
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

export type Fetcher = (method: Method, url: string, parameters?: EndpointParameters | undefined) => Promise<Response>;

export const successStatusCodes = [
  200, 201, 202, 203, 204, 205, 206, 207, 208, 226, 300, 301, 302, 303, 304, 305, 306, 307, 308,
] as const;
export type SuccessStatusCode = (typeof successStatusCodes)[number];

export const errorStatusCodes = [
  400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 421, 422, 423, 424,
  425, 426, 428, 429, 431, 451, 500, 501, 502, 503, 504, 505, 506, 507, 508, 510, 511,
] as const;
export type ErrorStatusCode = (typeof errorStatusCodes)[number];

// Error handling types
/** @see https://developer.mozilla.org/en-US/docs/Web/API/Response */
export interface TypedSuccessResponse<TSuccess, TStatusCode> extends Omit<Response, "ok" | "status" | "json"> {
  ok: true;
  status: TStatusCode;
  data: TSuccess;
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) */
  json: () => Promise<TSuccess>;
}

/** @see https://developer.mozilla.org/en-US/docs/Web/API/Response */
export interface TypedErrorResponse<TData, TStatusCode> extends Omit<Response, "ok" | "status" | "json"> {
  ok: false;
  status: TStatusCode;
  data: TData;
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) */
  json: () => Promise<TData>;
}

export type TypedApiResponse<TAllResponses extends Record<string | number, unknown> = {}> = {
  [K in keyof TAllResponses]: K extends string
    ? K extends `${infer TStatusCode extends number}`
      ? TStatusCode extends SuccessStatusCode
        ? TypedSuccessResponse<TAllResponses[K], TStatusCode>
        : TypedErrorResponse<TAllResponses[K], TStatusCode>
      : never
    : K extends number
      ? K extends SuccessStatusCode
        ? TypedSuccessResponse<TAllResponses[K], K>
        : TypedErrorResponse<TAllResponses[K], K>
      : never;
}[keyof TAllResponses];

export type SafeApiResponse<TEndpoint> = TEndpoint extends { responses: infer TResponses }
  ? TResponses extends Record<string, unknown>
    ? TypedApiResponse<TResponses>
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
  response: TypedErrorResponse<unknown, ErrorStatusCode>;
  status: number;
  constructor(response: TypedErrorResponse<unknown, ErrorStatusCode>) {
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
      t.TypeOf<TEndpoint>["parameters"] & { withResponse?: false; throwOnStatusError?: boolean }
    >
  ): Promise<InferResponseByStatus<t.TypeOf<TEndpoint>, SuccessStatusCode>["data"]>;

  put<Path extends keyof PutEndpoints, TEndpoint extends PutEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      t.TypeOf<TEndpoint>["parameters"] & { withResponse: true; throwOnStatusError?: boolean }
    >
  ): Promise<SafeApiResponse<TEndpoint>>;

  put<Path extends keyof PutEndpoints, TEndpoint extends PutEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<any>
  ): Promise<any> {
    const requestParams = params[0];
    const withResponse = requestParams?.withResponse;
    const { withResponse: _, throwOnStatusError = withResponse ? false : true, ...fetchParams } = requestParams || {};

    const promise = this.fetcher(
      "put",
      this.baseUrl + path,
      Object.keys(fetchParams).length ? requestParams : undefined,
    ).then(async (response) => {
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

    return promise as Promise<InferResponseByStatus<t.TypeOf<TEndpoint>, SuccessStatusCode>["data"]>;
  }
  // </ApiClient.put>

  // <ApiClient.post>
  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      t.TypeOf<TEndpoint>["parameters"] & { withResponse?: false; throwOnStatusError?: boolean }
    >
  ): Promise<InferResponseByStatus<t.TypeOf<TEndpoint>, SuccessStatusCode>["data"]>;

  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      t.TypeOf<TEndpoint>["parameters"] & { withResponse: true; throwOnStatusError?: boolean }
    >
  ): Promise<SafeApiResponse<TEndpoint>>;

  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<any>
  ): Promise<any> {
    const requestParams = params[0];
    const withResponse = requestParams?.withResponse;
    const { withResponse: _, throwOnStatusError = withResponse ? false : true, ...fetchParams } = requestParams || {};

    const promise = this.fetcher(
      "post",
      this.baseUrl + path,
      Object.keys(fetchParams).length ? requestParams : undefined,
    ).then(async (response) => {
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

    return promise as Promise<InferResponseByStatus<t.TypeOf<TEndpoint>, SuccessStatusCode>["data"]>;
  }
  // </ApiClient.post>

  // <ApiClient.get>
  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      t.TypeOf<TEndpoint>["parameters"] & { withResponse?: false; throwOnStatusError?: boolean }
    >
  ): Promise<InferResponseByStatus<t.TypeOf<TEndpoint>, SuccessStatusCode>["data"]>;

  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      t.TypeOf<TEndpoint>["parameters"] & { withResponse: true; throwOnStatusError?: boolean }
    >
  ): Promise<SafeApiResponse<TEndpoint>>;

  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<any>
  ): Promise<any> {
    const requestParams = params[0];
    const withResponse = requestParams?.withResponse;
    const { withResponse: _, throwOnStatusError = withResponse ? false : true, ...fetchParams } = requestParams || {};

    const promise = this.fetcher(
      "get",
      this.baseUrl + path,
      Object.keys(fetchParams).length ? requestParams : undefined,
    ).then(async (response) => {
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

    return promise as Promise<InferResponseByStatus<t.TypeOf<TEndpoint>, SuccessStatusCode>["data"]>;
  }
  // </ApiClient.get>

  // <ApiClient.delete>
  delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      t.TypeOf<TEndpoint>["parameters"] & { withResponse?: false; throwOnStatusError?: boolean }
    >
  ): Promise<InferResponseByStatus<t.TypeOf<TEndpoint>, SuccessStatusCode>["data"]>;

  delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      t.TypeOf<TEndpoint>["parameters"] & { withResponse: true; throwOnStatusError?: boolean }
    >
  ): Promise<SafeApiResponse<TEndpoint>>;

  delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<any>
  ): Promise<any> {
    const requestParams = params[0];
    const withResponse = requestParams?.withResponse;
    const { withResponse: _, throwOnStatusError = withResponse ? false : true, ...fetchParams } = requestParams || {};

    const promise = this.fetcher(
      "delete",
      this.baseUrl + path,
      Object.keys(fetchParams).length ? requestParams : undefined,
    ).then(async (response) => {
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

    return promise as Promise<InferResponseByStatus<t.TypeOf<TEndpoint>, SuccessStatusCode>["data"]>;
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
    ...params: MaybeOptionalArg<t.TypeOf<TEndpoint>["parameters"]>
  ): Promise<SafeApiResponse<TEndpoint>> {
    return this.fetcher(method, this.baseUrl + (path as string), params[0] as EndpointParameters) as Promise<
      SafeApiResponse<TEndpoint>
    >;
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
