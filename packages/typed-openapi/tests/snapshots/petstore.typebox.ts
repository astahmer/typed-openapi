import { Type, Static } from "@sinclair/typebox";

export type Order = Static<typeof Order>;
export const Order = Type.Partial(
  Type.Object({
    id: Type.Number(),
    petId: Type.Number(),
    quantity: Type.Number(),
    shipDate: Type.String(),
    status: Type.Union([Type.Literal("placed"), Type.Literal("approved"), Type.Literal("delivered")]),
    complete: Type.Boolean(),
  }),
);

export type Address = Static<typeof Address>;
export const Address = Type.Partial(
  Type.Object({
    street: Type.String(),
    city: Type.String(),
    state: Type.String(),
    zip: Type.String(),
  }),
);

export type Customer = Static<typeof Customer>;
export const Customer = Type.Partial(
  Type.Object({
    id: Type.Number(),
    username: Type.String(),
    address: Type.Array(Address),
  }),
);

export type Category = Static<typeof Category>;
export const Category = Type.Partial(
  Type.Object({
    id: Type.Number(),
    name: Type.String(),
  }),
);

export type User = Static<typeof User>;
export const User = Type.Partial(
  Type.Object({
    id: Type.Number(),
    username: Type.String(),
    firstName: Type.String(),
    lastName: Type.String(),
    email: Type.String(),
    password: Type.String(),
    phone: Type.String(),
    userStatus: Type.Number(),
  }),
);

export type Tag = Static<typeof Tag>;
export const Tag = Type.Partial(
  Type.Object({
    id: Type.Number(),
    name: Type.String(),
  }),
);

export type Pet = Static<typeof Pet>;
export const Pet = Type.Object({
  id: Type.Optional(Type.Union([Type.Number(), Type.Undefined()])),
  name: Type.String(),
  category: Type.Optional(Type.Union([Category, Type.Undefined()])),
  photoUrls: Type.Array(Type.String()),
  tags: Type.Optional(Type.Union([Type.Array(Tag), Type.Undefined()])),
  status: Type.Optional(
    Type.Union([
      Type.Union([Type.Literal("available"), Type.Literal("pending"), Type.Literal("sold")]),
      Type.Undefined(),
    ]),
  ),
});

export type ApiResponse = Static<typeof ApiResponse>;
export const ApiResponse = Type.Partial(
  Type.Object({
    code: Type.Number(),
    type: Type.String(),
    message: Type.String(),
  }),
);

type __ENDPOINTS_START__ = Static<typeof __ENDPOINTS_START__>;
const __ENDPOINTS_START__ = Type.Object({});

export type put_UpdatePet = Static<typeof put_UpdatePet>;
export const put_UpdatePet = Type.Object({
  method: Type.Literal("PUT"),
  path: Type.Literal("/pet"),
  requestFormat: Type.Literal("json"),
  parameters: Type.Object({
    body: Pet,
  }),
  response: Pet,
  responses: Type.Object({
    200: Pet,
    400: Type.Unknown(),
    404: Type.Unknown(),
    405: Type.Unknown(),
  }),
});

export type post_AddPet = Static<typeof post_AddPet>;
export const post_AddPet = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/pet"),
  requestFormat: Type.Literal("json"),
  parameters: Type.Object({
    body: Pet,
  }),
  response: Pet,
  responses: Type.Object({
    200: Pet,
    405: Type.Unknown(),
  }),
});

export type get_FindPetsByStatus = Static<typeof get_FindPetsByStatus>;
export const get_FindPetsByStatus = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/pet/findByStatus"),
  requestFormat: Type.Literal("json"),
  parameters: Type.Object({
    query: Type.Partial(
      Type.Object({
        status: Type.Union([Type.Literal("available"), Type.Literal("pending"), Type.Literal("sold")]),
      }),
    ),
  }),
  response: Type.Array(Pet),
  responses: Type.Object({
    200: Type.Array(Pet),
    400: Type.Unknown(),
  }),
});

export type get_FindPetsByTags = Static<typeof get_FindPetsByTags>;
export const get_FindPetsByTags = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/pet/findByTags"),
  requestFormat: Type.Literal("json"),
  parameters: Type.Object({
    query: Type.Partial(
      Type.Object({
        tags: Type.Array(Type.String()),
      }),
    ),
  }),
  response: Type.Array(Pet),
  responses: Type.Object({
    200: Type.Array(Pet),
    400: Type.Unknown(),
  }),
});

export type get_GetPetById = Static<typeof get_GetPetById>;
export const get_GetPetById = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/pet/{petId}"),
  requestFormat: Type.Literal("json"),
  parameters: Type.Object({
    path: Type.Object({
      petId: Type.Number(),
    }),
  }),
  response: Pet,
  responses: Type.Object({
    200: Pet,
    400: Type.Unknown(),
    404: Type.Unknown(),
  }),
});

export type post_UpdatePetWithForm = Static<typeof post_UpdatePetWithForm>;
export const post_UpdatePetWithForm = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/pet/{petId}"),
  requestFormat: Type.Literal("json"),
  parameters: Type.Object({
    query: Type.Partial(
      Type.Object({
        name: Type.String(),
        status: Type.String(),
      }),
    ),
    path: Type.Object({
      petId: Type.Number(),
    }),
  }),
  response: Type.Unknown(),
  responses: Type.Object({
    405: Type.Unknown(),
  }),
});

export type delete_DeletePet = Static<typeof delete_DeletePet>;
export const delete_DeletePet = Type.Object({
  method: Type.Literal("DELETE"),
  path: Type.Literal("/pet/{petId}"),
  requestFormat: Type.Literal("json"),
  parameters: Type.Object({
    path: Type.Object({
      petId: Type.Number(),
    }),
    header: Type.Partial(
      Type.Object({
        api_key: Type.String(),
      }),
    ),
  }),
  response: Type.Unknown(),
  responses: Type.Object({
    400: Type.Unknown(),
  }),
});

export type post_UploadFile = Static<typeof post_UploadFile>;
export const post_UploadFile = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/pet/{petId}/uploadImage"),
  requestFormat: Type.Literal("binary"),
  parameters: Type.Object({
    query: Type.Partial(
      Type.Object({
        additionalMetadata: Type.String(),
      }),
    ),
    path: Type.Object({
      petId: Type.Number(),
    }),
    body: Type.String(),
  }),
  response: ApiResponse,
  responses: Type.Object({
    200: ApiResponse,
  }),
});

export type get_GetInventory = Static<typeof get_GetInventory>;
export const get_GetInventory = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/store/inventory"),
  requestFormat: Type.Literal("json"),
  parameters: Type.Never(),
  response: Type.Record(Type.String(), Type.Number()),
  responses: Type.Object({
    200: Type.Record(Type.String(), Type.Number()),
  }),
});

export type post_PlaceOrder = Static<typeof post_PlaceOrder>;
export const post_PlaceOrder = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/store/order"),
  requestFormat: Type.Literal("json"),
  parameters: Type.Object({
    body: Order,
  }),
  response: Order,
  responses: Type.Object({
    200: Order,
    405: Type.Unknown(),
  }),
});

export type get_GetOrderById = Static<typeof get_GetOrderById>;
export const get_GetOrderById = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/store/order/{orderId}"),
  requestFormat: Type.Literal("json"),
  parameters: Type.Object({
    path: Type.Object({
      orderId: Type.Number(),
    }),
  }),
  response: Order,
  responses: Type.Object({
    200: Order,
    400: Type.Unknown(),
    404: Type.Unknown(),
  }),
});

export type delete_DeleteOrder = Static<typeof delete_DeleteOrder>;
export const delete_DeleteOrder = Type.Object({
  method: Type.Literal("DELETE"),
  path: Type.Literal("/store/order/{orderId}"),
  requestFormat: Type.Literal("json"),
  parameters: Type.Object({
    path: Type.Object({
      orderId: Type.Number(),
    }),
  }),
  response: Type.Unknown(),
  responses: Type.Object({
    400: Type.Unknown(),
    404: Type.Unknown(),
  }),
});

export type post_CreateUser = Static<typeof post_CreateUser>;
export const post_CreateUser = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/user"),
  requestFormat: Type.Literal("json"),
  parameters: Type.Object({
    body: User,
  }),
  response: User,
  responses: Type.Object({
    default: User,
  }),
});

export type post_CreateUsersWithListInput = Static<typeof post_CreateUsersWithListInput>;
export const post_CreateUsersWithListInput = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/user/createWithList"),
  requestFormat: Type.Literal("json"),
  parameters: Type.Object({
    body: Type.Array(User),
  }),
  response: User,
  responses: Type.Object({
    200: User,
    default: Type.Unknown(),
  }),
});

export type get_LoginUser = Static<typeof get_LoginUser>;
export const get_LoginUser = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/user/login"),
  requestFormat: Type.Literal("json"),
  parameters: Type.Object({
    query: Type.Partial(
      Type.Object({
        username: Type.String(),
        password: Type.String(),
      }),
    ),
  }),
  response: Type.String(),
  responses: Type.Object({
    200: Type.String(),
    400: Type.Unknown(),
  }),
  responseHeaders: Type.Object({
    "x-rate-limit": Type.Number(),
    "x-expires-after": Type.String(),
  }),
});

export type get_LogoutUser = Static<typeof get_LogoutUser>;
export const get_LogoutUser = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/user/logout"),
  requestFormat: Type.Literal("json"),
  parameters: Type.Never(),
  response: Type.Unknown(),
  responses: Type.Object({
    default: Type.Unknown(),
  }),
});

export type get_GetUserByName = Static<typeof get_GetUserByName>;
export const get_GetUserByName = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/user/{username}"),
  requestFormat: Type.Literal("json"),
  parameters: Type.Object({
    path: Type.Object({
      username: Type.String(),
    }),
  }),
  response: User,
  responses: Type.Object({
    200: User,
    400: Type.Unknown(),
    404: Type.Unknown(),
  }),
});

export type put_UpdateUser = Static<typeof put_UpdateUser>;
export const put_UpdateUser = Type.Object({
  method: Type.Literal("PUT"),
  path: Type.Literal("/user/{username}"),
  requestFormat: Type.Literal("json"),
  parameters: Type.Object({
    path: Type.Object({
      username: Type.String(),
    }),
    body: User,
  }),
  response: Type.Unknown(),
  responses: Type.Object({
    default: Type.Unknown(),
  }),
});

export type delete_DeleteUser = Static<typeof delete_DeleteUser>;
export const delete_DeleteUser = Type.Object({
  method: Type.Literal("DELETE"),
  path: Type.Literal("/user/{username}"),
  requestFormat: Type.Literal("json"),
  parameters: Type.Object({
    path: Type.Object({
      username: Type.String(),
    }),
  }),
  response: Type.Unknown(),
  responses: Type.Object({
    400: Type.Unknown(),
    404: Type.Unknown(),
  }),
});

type __ENDPOINTS_END__ = Static<typeof __ENDPOINTS_END__>;
const __ENDPOINTS_END__ = Type.Object({});

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
    ...params: MaybeOptionalArg<Static<TEndpoint>["parameters"]>
  ): Promise<Static<TEndpoint>["response"]>;

  put<Path extends keyof PutEndpoints, TEndpoint extends PutEndpoints[Path]>(
    path: Path,
    options: { withResponse: true },
    ...params: MaybeOptionalArg<Static<TEndpoint>["parameters"]>
  ): Promise<SafeApiResponse<TEndpoint>>;

  put<Path extends keyof PutEndpoints, TEndpoint extends PutEndpoints[Path]>(
    path: Path,
    optionsOrParams?: { withResponse?: boolean } | Static<TEndpoint>["parameters"],
    ...params: any[]
  ): Promise<any> {
    const hasWithResponse = optionsOrParams && typeof optionsOrParams === "object" && "withResponse" in optionsOrParams;
    const requestParams = hasWithResponse ? params[0] : optionsOrParams;

    if (hasWithResponse && optionsOrParams.withResponse) {
      return this.fetcher("put", this.baseUrl + path, requestParams).then(async (response) => {
        const data = await this.parseResponse(response);
        if (response.ok) {
          return { ok: true, status: response.status, data };
        } else {
          return { ok: false, status: response.status, error: data };
        }
      });
    } else {
      return this.fetcher("put", this.baseUrl + path, requestParams).then((response) =>
        this.parseResponse(response),
      ) as Promise<Static<TEndpoint>["response"]>;
    }
  }
  // </ApiClient.put>

  // <ApiClient.post>
  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<Static<TEndpoint>["parameters"]>
  ): Promise<Static<TEndpoint>["response"]>;

  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    options: { withResponse: true },
    ...params: MaybeOptionalArg<Static<TEndpoint>["parameters"]>
  ): Promise<SafeApiResponse<TEndpoint>>;

  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    optionsOrParams?: { withResponse?: boolean } | Static<TEndpoint>["parameters"],
    ...params: any[]
  ): Promise<any> {
    const hasWithResponse = optionsOrParams && typeof optionsOrParams === "object" && "withResponse" in optionsOrParams;
    const requestParams = hasWithResponse ? params[0] : optionsOrParams;

    if (hasWithResponse && optionsOrParams.withResponse) {
      return this.fetcher("post", this.baseUrl + path, requestParams).then(async (response) => {
        const data = await this.parseResponse(response);
        if (response.ok) {
          return { ok: true, status: response.status, data };
        } else {
          return { ok: false, status: response.status, error: data };
        }
      });
    } else {
      return this.fetcher("post", this.baseUrl + path, requestParams).then((response) =>
        this.parseResponse(response),
      ) as Promise<Static<TEndpoint>["response"]>;
    }
  }
  // </ApiClient.post>

  // <ApiClient.get>
  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<Static<TEndpoint>["parameters"]>
  ): Promise<Static<TEndpoint>["response"]>;

  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    options: { withResponse: true },
    ...params: MaybeOptionalArg<Static<TEndpoint>["parameters"]>
  ): Promise<SafeApiResponse<TEndpoint>>;

  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    optionsOrParams?: { withResponse?: boolean } | Static<TEndpoint>["parameters"],
    ...params: any[]
  ): Promise<any> {
    const hasWithResponse = optionsOrParams && typeof optionsOrParams === "object" && "withResponse" in optionsOrParams;
    const requestParams = hasWithResponse ? params[0] : optionsOrParams;

    if (hasWithResponse && optionsOrParams.withResponse) {
      return this.fetcher("get", this.baseUrl + path, requestParams).then(async (response) => {
        const data = await this.parseResponse(response);
        if (response.ok) {
          return { ok: true, status: response.status, data };
        } else {
          return { ok: false, status: response.status, error: data };
        }
      });
    } else {
      return this.fetcher("get", this.baseUrl + path, requestParams).then((response) =>
        this.parseResponse(response),
      ) as Promise<Static<TEndpoint>["response"]>;
    }
  }
  // </ApiClient.get>

  // <ApiClient.delete>
  delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<Static<TEndpoint>["parameters"]>
  ): Promise<Static<TEndpoint>["response"]>;

  delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
    path: Path,
    options: { withResponse: true },
    ...params: MaybeOptionalArg<Static<TEndpoint>["parameters"]>
  ): Promise<SafeApiResponse<TEndpoint>>;

  delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
    path: Path,
    optionsOrParams?: { withResponse?: boolean } | Static<TEndpoint>["parameters"],
    ...params: any[]
  ): Promise<any> {
    const hasWithResponse = optionsOrParams && typeof optionsOrParams === "object" && "withResponse" in optionsOrParams;
    const requestParams = hasWithResponse ? params[0] : optionsOrParams;

    if (hasWithResponse && optionsOrParams.withResponse) {
      return this.fetcher("delete", this.baseUrl + path, requestParams).then(async (response) => {
        const data = await this.parseResponse(response);
        if (response.ok) {
          return { ok: true, status: response.status, data };
        } else {
          return { ok: false, status: response.status, error: data };
        }
      });
    } else {
      return this.fetcher("delete", this.baseUrl + path, requestParams).then((response) =>
        this.parseResponse(response),
      ) as Promise<Static<TEndpoint>["response"]>;
    }
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
    ...params: MaybeOptionalArg<Static<TEndpoint>["parameters"]>
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
 
 // With error handling
 const result = await api.get("/users/{id}", { withResponse: true }, { path: { id: "123" } });
 if (result.ok) {
   console.log(result.data);
 } else {
   console.error(`Error ${result.status}:`, result.error);
 }
*/

// </ApiClient
