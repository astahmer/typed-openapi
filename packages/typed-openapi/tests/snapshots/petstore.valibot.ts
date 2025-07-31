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
  response: Pet,
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
  response: Pet,
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
  response: v.array(Pet),
  responses: v.object({
    "200": v.array(Pet),
    "400": v.unknown(),
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
  response: v.array(Pet),
  responses: v.object({
    "200": v.array(Pet),
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
  response: Pet,
  responses: v.object({
    "200": Pet,
    "400": v.unknown(),
    "404": v.unknown(),
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
  response: v.unknown(),
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
  response: v.unknown(),
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
  response: ApiResponse,
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
  response: v.record(v.string(), v.number()),
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
  response: Order,
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
  response: Order,
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
  response: v.unknown(),
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
  response: User,
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
  response: User,
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
  response: v.string(),
  responses: v.object({
    "200": v.string(),
    "400": v.unknown(),
  }),
  responseHeaders: v.object({
    "x-rate-limit": v.number(),
    "x-expires-after": v.string(),
  }),
});

export type get_LogoutUser = v.InferOutput<typeof get_LogoutUser>;
export const get_LogoutUser = v.object({
  method: v.literal("GET"),
  path: v.literal("/user/logout"),
  requestFormat: v.literal("json"),
  parameters: v.never(),
  response: v.unknown(),
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
  response: User,
  responses: v.object({
    "200": User,
    "400": v.unknown(),
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
  response: v.unknown(),
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
  response: v.unknown(),
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
  response: unknown;
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
  response: TConfig["response"];
  responses?: TConfig["responses"];
  responseHeaders?: TConfig["responseHeaders"];
};

export type Fetcher = (method: Method, url: string, parameters?: EndpointParameters | undefined) => Promise<Response>;

// Error handling types
export type ApiResponse<TSuccess, TErrors extends Record<string, unknown> = {}> =
  | {
      ok: true;
      status: number;
      data: TSuccess;
    }
  | {
      [K in keyof TErrors]: {
        ok: false;
        status: K extends string ? (K extends `${number}` ? number : never) : never;
        error: TErrors[K];
      };
    }[keyof TErrors];

export type SafeApiResponse<TEndpoint> = TEndpoint extends { response: infer TSuccess; responses: infer TResponses }
  ? TResponses extends Record<string, unknown>
    ? ApiResponse<TSuccess, TResponses>
    : { ok: true; status: number; data: TSuccess }
  : TEndpoint extends { response: infer TSuccess }
    ? { ok: true; status: number; data: TSuccess }
    : never;

type RequiredKeys<T> = {
  [P in keyof T]-?: undefined extends T[P] ? never : P;
}[keyof T];

type MaybeOptionalArg<T> = RequiredKeys<T> extends never ? [config?: T] : [config: T];

// </ApiClientTypes>

// <ApiClient>
export class ApiClient {
  baseUrl: string = "";

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
    ...params: MaybeOptionalArg<v.InferOutput<TEndpoint>["parameters"]>
  ): Promise<v.InferOutput<TEndpoint>["response"]> {
    return this.fetcher("put", this.baseUrl + path, params[0]).then((response) =>
      this.parseResponse(response),
    ) as Promise<v.InferOutput<TEndpoint>["response"]>;
  }
  // </ApiClient.put>

  // <ApiClient.post>
  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<v.InferOutput<TEndpoint>["parameters"]>
  ): Promise<v.InferOutput<TEndpoint>["response"]> {
    return this.fetcher("post", this.baseUrl + path, params[0]).then((response) =>
      this.parseResponse(response),
    ) as Promise<v.InferOutput<TEndpoint>["response"]>;
  }
  // </ApiClient.post>

  // <ApiClient.get>
  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<v.InferOutput<TEndpoint>["parameters"]>
  ): Promise<v.InferOutput<TEndpoint>["response"]> {
    return this.fetcher("get", this.baseUrl + path, params[0]).then((response) =>
      this.parseResponse(response),
    ) as Promise<v.InferOutput<TEndpoint>["response"]>;
  }
  // </ApiClient.get>

  // <ApiClient.delete>
  delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<v.InferOutput<TEndpoint>["parameters"]>
  ): Promise<v.InferOutput<TEndpoint>["response"]> {
    return this.fetcher("delete", this.baseUrl + path, params[0]).then((response) =>
      this.parseResponse(response),
    ) as Promise<v.InferOutput<TEndpoint>["response"]>;
  }
  // </ApiClient.delete>

  // <ApiClient.putSafe>
  putSafe<Path extends keyof PutEndpoints, TEndpoint extends PutEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<v.InferOutput<TEndpoint>["parameters"]>
  ): Promise<SafeApiResponse<TEndpoint>> {
    return this.fetcher("put", this.baseUrl + path, params[0]).then(async (response) => {
      const data = await this.parseResponse(response);
      if (response.ok) {
        return { ok: true, status: response.status, data } as SafeApiResponse<TEndpoint>;
      } else {
        return { ok: false, status: response.status, error: data } as SafeApiResponse<TEndpoint>;
      }
    });
  }
  // </ApiClient.putSafe>

  // <ApiClient.postSafe>
  postSafe<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<v.InferOutput<TEndpoint>["parameters"]>
  ): Promise<SafeApiResponse<TEndpoint>> {
    return this.fetcher("post", this.baseUrl + path, params[0]).then(async (response) => {
      const data = await this.parseResponse(response);
      if (response.ok) {
        return { ok: true, status: response.status, data } as SafeApiResponse<TEndpoint>;
      } else {
        return { ok: false, status: response.status, error: data } as SafeApiResponse<TEndpoint>;
      }
    });
  }
  // </ApiClient.postSafe>

  // <ApiClient.getSafe>
  getSafe<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<v.InferOutput<TEndpoint>["parameters"]>
  ): Promise<SafeApiResponse<TEndpoint>> {
    return this.fetcher("get", this.baseUrl + path, params[0]).then(async (response) => {
      const data = await this.parseResponse(response);
      if (response.ok) {
        return { ok: true, status: response.status, data } as SafeApiResponse<TEndpoint>;
      } else {
        return { ok: false, status: response.status, error: data } as SafeApiResponse<TEndpoint>;
      }
    });
  }
  // </ApiClient.getSafe>

  // <ApiClient.deleteSafe>
  deleteSafe<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<v.InferOutput<TEndpoint>["parameters"]>
  ): Promise<SafeApiResponse<TEndpoint>> {
    return this.fetcher("delete", this.baseUrl + path, params[0]).then(async (response) => {
      const data = await this.parseResponse(response);
      if (response.ok) {
        return { ok: true, status: response.status, data } as SafeApiResponse<TEndpoint>;
      } else {
        return { ok: false, status: response.status, error: data } as SafeApiResponse<TEndpoint>;
      }
    });
  }
  // </ApiClient.deleteSafe>

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
    ...params: MaybeOptionalArg<v.InferOutput<TEndpoint>["parameters"]>
  ): Promise<
    Omit<Response, "json"> & {
      /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/json) */
      json: () => Promise<TEndpoint extends { response: infer Res } ? Res : never>;
    }
  > {
    return this.fetcher(method, this.baseUrl + (path as string), params[0] as EndpointParameters);
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
*/

// </ApiClient
