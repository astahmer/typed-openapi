import { z } from "zod";

export type Order = z.infer<typeof Order>;
export const Order = z.object({
  id: z.number().optional(),
  petId: z.number().optional(),
  quantity: z.number().optional(),
  shipDate: z.string().optional(),
  status: z.union([z.literal("placed"), z.literal("approved"), z.literal("delivered")]).optional(),
  complete: z.boolean().optional(),
});

export type Address = z.infer<typeof Address>;
export const Address = z.object({
  street: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zip: z.string().optional(),
});

export type Customer = z.infer<typeof Customer>;
export const Customer = z.object({
  id: z.number().optional(),
  username: z.string().optional(),
  address: z.array(Address).optional(),
});

export type Category = z.infer<typeof Category>;
export const Category = z.object({
  id: z.number().optional(),
  name: z.string().optional(),
});

export type User = z.infer<typeof User>;
export const User = z.object({
  id: z.number().optional(),
  username: z.string().optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.string().optional(),
  password: z.string().optional(),
  phone: z.string().optional(),
  userStatus: z.number().optional(),
});

export type Tag = z.infer<typeof Tag>;
export const Tag = z.object({
  id: z.number().optional(),
  name: z.string().optional(),
});

export type Pet = z.infer<typeof Pet>;
export const Pet = z.object({
  id: z.union([z.number(), z.undefined()]).optional(),
  name: z.string(),
  category: z.union([Category, z.undefined()]).optional(),
  photoUrls: z.array(z.string()),
  tags: z.union([z.array(Tag), z.undefined()]).optional(),
  status: z
    .union([z.union([z.literal("available"), z.literal("pending"), z.literal("sold")]), z.undefined()])
    .optional(),
});

export type ApiResponse = z.infer<typeof ApiResponse>;
export const ApiResponse = z.object({
  code: z.number().optional(),
  type: z.string().optional(),
  message: z.string().optional(),
});

export type put_UpdatePet = typeof put_UpdatePet;
export const put_UpdatePet = {
  method: z.literal("PUT"),
  path: z.literal("/pet"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    body: Pet,
  }),
  responses: z.object({
    "200": Pet,
    "400": z.unknown(),
    "404": z.unknown(),
    "405": z.unknown(),
  }),
};

export type post_AddPet = typeof post_AddPet;
export const post_AddPet = {
  method: z.literal("POST"),
  path: z.literal("/pet"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    body: Pet,
  }),
  responses: z.object({
    "200": Pet,
    "405": z.unknown(),
  }),
};

export type get_FindPetsByStatus = typeof get_FindPetsByStatus;
export const get_FindPetsByStatus = {
  method: z.literal("GET"),
  path: z.literal("/pet/findByStatus"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    query: z.object({
      status: z.union([z.literal("available"), z.literal("pending"), z.literal("sold")]).optional(),
    }),
  }),
  responses: z.object({
    "200": z.array(Pet),
    "400": z.object({
      code: z.number(),
      message: z.string(),
    }),
  }),
};

export type get_FindPetsByTags = typeof get_FindPetsByTags;
export const get_FindPetsByTags = {
  method: z.literal("GET"),
  path: z.literal("/pet/findByTags"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    query: z.object({
      tags: z.array(z.string()).optional(),
    }),
  }),
  responses: z.object({
    "200": z.array(Pet),
    "400": z.unknown(),
  }),
};

export type get_GetPetById = typeof get_GetPetById;
export const get_GetPetById = {
  method: z.literal("GET"),
  path: z.literal("/pet/{petId}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      petId: z.number(),
    }),
  }),
  responses: z.object({
    "200": Pet,
    "400": z.object({
      code: z.number(),
      message: z.string(),
    }),
    "404": z.object({
      code: z.number(),
      message: z.string(),
    }),
  }),
};

export type post_UpdatePetWithForm = typeof post_UpdatePetWithForm;
export const post_UpdatePetWithForm = {
  method: z.literal("POST"),
  path: z.literal("/pet/{petId}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    query: z.object({
      name: z.string().optional(),
      status: z.string().optional(),
    }),
    path: z.object({
      petId: z.number(),
    }),
  }),
  responses: z.object({
    "405": z.unknown(),
  }),
};

export type delete_DeletePet = typeof delete_DeletePet;
export const delete_DeletePet = {
  method: z.literal("DELETE"),
  path: z.literal("/pet/{petId}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      petId: z.number(),
    }),
    header: z.object({
      api_key: z.string().optional(),
    }),
  }),
  responses: z.object({
    "400": z.unknown(),
  }),
};

export type post_UploadFile = typeof post_UploadFile;
export const post_UploadFile = {
  method: z.literal("POST"),
  path: z.literal("/pet/{petId}/uploadImage"),
  requestFormat: z.literal("binary"),
  parameters: z.object({
    query: z.object({
      additionalMetadata: z.string().optional(),
    }),
    path: z.object({
      petId: z.number(),
    }),
    body: z.string(),
  }),
  responses: z.object({
    "200": ApiResponse,
  }),
};

export type get_GetInventory = typeof get_GetInventory;
export const get_GetInventory = {
  method: z.literal("GET"),
  path: z.literal("/store/inventory"),
  requestFormat: z.literal("json"),
  parameters: z.never(),
  responses: z.object({
    "200": z.record(z.number()),
  }),
};

export type post_PlaceOrder = typeof post_PlaceOrder;
export const post_PlaceOrder = {
  method: z.literal("POST"),
  path: z.literal("/store/order"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    body: Order,
  }),
  responses: z.object({
    "200": Order,
    "405": z.unknown(),
  }),
};

export type get_GetOrderById = typeof get_GetOrderById;
export const get_GetOrderById = {
  method: z.literal("GET"),
  path: z.literal("/store/order/{orderId}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      orderId: z.number(),
    }),
  }),
  responses: z.object({
    "200": Order,
    "400": z.unknown(),
    "404": z.unknown(),
  }),
};

export type delete_DeleteOrder = typeof delete_DeleteOrder;
export const delete_DeleteOrder = {
  method: z.literal("DELETE"),
  path: z.literal("/store/order/{orderId}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      orderId: z.number(),
    }),
  }),
  responses: z.object({
    "400": z.unknown(),
    "404": z.unknown(),
  }),
};

export type post_CreateUser = typeof post_CreateUser;
export const post_CreateUser = {
  method: z.literal("POST"),
  path: z.literal("/user"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    body: User,
  }),
  responses: z.object({
    default: User,
  }),
};

export type post_CreateUsersWithListInput = typeof post_CreateUsersWithListInput;
export const post_CreateUsersWithListInput = {
  method: z.literal("POST"),
  path: z.literal("/user/createWithList"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    body: z.array(User),
  }),
  responses: z.object({
    "200": User,
    default: z.unknown(),
  }),
};

export type get_LoginUser = typeof get_LoginUser;
export const get_LoginUser = {
  method: z.literal("GET"),
  path: z.literal("/user/login"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    query: z.object({
      username: z.string().optional(),
      password: z.string().optional(),
    }),
  }),
  responses: z.object({
    "200": z.string(),
    "400": z.unknown(),
  }),
  responseHeaders: z.object({
    "200": z.object({
      "X-Rate-Limit": z.number(),
      "X-Expires-After": z.string(),
    }),
  }),
};

export type get_LogoutUser = typeof get_LogoutUser;
export const get_LogoutUser = {
  method: z.literal("GET"),
  path: z.literal("/user/logout"),
  requestFormat: z.literal("json"),
  parameters: z.never(),
  responses: z.object({
    default: z.unknown(),
  }),
};

export type get_GetUserByName = typeof get_GetUserByName;
export const get_GetUserByName = {
  method: z.literal("GET"),
  path: z.literal("/user/{username}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      username: z.string(),
    }),
  }),
  responses: z.object({
    "200": User,
    "400": z.unknown(),
    "404": z.unknown(),
  }),
};

export type put_UpdateUser = typeof put_UpdateUser;
export const put_UpdateUser = {
  method: z.literal("PUT"),
  path: z.literal("/user/{username}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      username: z.string(),
    }),
    body: User,
  }),
  responses: z.object({
    default: z.unknown(),
  }),
};

export type delete_DeleteUser = typeof delete_DeleteUser;
export const delete_DeleteUser = {
  method: z.literal("DELETE"),
  path: z.literal("/user/{username}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      username: z.string(),
    }),
  }),
  responses: z.object({
    "400": z.unknown(),
    "404": z.unknown(),
  }),
};

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
      z.infer<TEndpoint["parameters"]> & { withResponse?: false; throwOnStatusError?: boolean }
    >
  ): Promise<z.infer<InferResponseByStatus<TEndpoint, SuccessStatusCode>>>;

  put<Path extends keyof PutEndpoints, TEndpoint extends PutEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<z.infer<TEndpoint["parameters"]> & { withResponse: true; throwOnStatusError?: boolean }>
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

    return promise as Promise<z.infer<InferResponseByStatus<TEndpoint, SuccessStatusCode>>>;
  }
  // </ApiClient.put>

  // <ApiClient.post>
  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      z.infer<TEndpoint["parameters"]> & { withResponse?: false; throwOnStatusError?: boolean }
    >
  ): Promise<z.infer<InferResponseByStatus<TEndpoint, SuccessStatusCode>>>;

  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<z.infer<TEndpoint["parameters"]> & { withResponse: true; throwOnStatusError?: boolean }>
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

    return promise as Promise<z.infer<InferResponseByStatus<TEndpoint, SuccessStatusCode>>>;
  }
  // </ApiClient.post>

  // <ApiClient.get>
  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      z.infer<TEndpoint["parameters"]> & { withResponse?: false; throwOnStatusError?: boolean }
    >
  ): Promise<z.infer<InferResponseByStatus<TEndpoint, SuccessStatusCode>>>;

  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<z.infer<TEndpoint["parameters"]> & { withResponse: true; throwOnStatusError?: boolean }>
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

    return promise as Promise<z.infer<InferResponseByStatus<TEndpoint, SuccessStatusCode>>>;
  }
  // </ApiClient.get>

  // <ApiClient.delete>
  delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      z.infer<TEndpoint["parameters"]> & { withResponse?: false; throwOnStatusError?: boolean }
    >
  ): Promise<z.infer<InferResponseByStatus<TEndpoint, SuccessStatusCode>>>;

  delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<z.infer<TEndpoint["parameters"]> & { withResponse: true; throwOnStatusError?: boolean }>
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

    return promise as Promise<z.infer<InferResponseByStatus<TEndpoint, SuccessStatusCode>>>;
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
    ...params: MaybeOptionalArg<z.infer<TEndpoint extends { parameters: infer Params } ? Params : never>>
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
