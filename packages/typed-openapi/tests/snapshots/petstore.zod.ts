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
  response: Pet,
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
  response: Pet,
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
  response: z.array(Pet),
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
  response: z.array(Pet),
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
  response: Pet,
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
  response: z.unknown(),
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
  response: z.unknown(),
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
  response: ApiResponse,
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
  response: z.record(z.number()),
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
  response: Order,
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
  response: Order,
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
  response: z.unknown(),
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
  response: User,
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
  response: User,
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
  response: z.string(),
  responses: z.object({
    "200": z.string(),
    "400": z.unknown(),
  }),
  responseHeaders: z.object({
    "x-rate-limit": z.number(),
    "x-expires-after": z.string(),
  }),
};

export type get_LogoutUser = typeof get_LogoutUser;
export const get_LogoutUser = {
  method: z.literal("GET"),
  path: z.literal("/user/logout"),
  requestFormat: z.literal("json"),
  parameters: z.never(),
  response: z.unknown(),
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
  response: User,
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
  response: z.unknown(),
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
  response: z.unknown(),
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

// Status code type for success responses
export type StatusCode =
  | 200
  | 201
  | 202
  | 203
  | 204
  | 205
  | 206
  | 207
  | 208
  | 226
  | 300
  | 301
  | 302
  | 303
  | 304
  | 305
  | 306
  | 307
  | 308;

// Error handling types
export type ApiResponse<
  TSuccess,
  TAllResponses extends Record<string | number, unknown> = {},
> = keyof TAllResponses extends never
  ? {
      ok: true;
      status: number;
      data: TSuccess;
    }
  : {
      [K in keyof TAllResponses]: K extends string
        ? K extends `${infer TStatusCode extends number}`
          ? TStatusCode extends StatusCode
            ? {
                ok: true;
                status: TStatusCode;
                data: TAllResponses[K];
              }
            : {
                ok: false;
                status: TStatusCode;
                error: TAllResponses[K];
              }
          : never
        : K extends number
          ? K extends StatusCode
            ? {
                ok: true;
                status: K;
                data: TAllResponses[K];
              }
            : {
                ok: false;
                status: K;
                error: TAllResponses[K];
              }
          : never;
    }[keyof TAllResponses];

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
    ...params: MaybeOptionalArg<z.infer<TEndpoint["parameters"]> & { withResponse?: false }>
  ): Promise<z.infer<TEndpoint["response"]>>;

  put<Path extends keyof PutEndpoints, TEndpoint extends PutEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<z.infer<TEndpoint["parameters"]> & { withResponse: true }>
  ): Promise<SafeApiResponse<TEndpoint>>;

  put<Path extends keyof PutEndpoints, TEndpoint extends PutEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<any>
  ): Promise<any> {
    const requestParams = params[0];
    const withResponse = requestParams?.withResponse;

    // Remove withResponse from params before passing to fetcher
    const { withResponse: _, ...fetchParams } = requestParams || {};

    if (withResponse) {
      return this.fetcher("put", this.baseUrl + path, Object.keys(fetchParams).length ? fetchParams : undefined).then(
        async (response) => {
          const data = await this.parseResponse(response);
          if (response.ok) {
            return { ok: true, status: response.status, data };
          } else {
            return { ok: false, status: response.status, error: data };
          }
        },
      );
    } else {
      return this.fetcher("put", this.baseUrl + path, requestParams).then((response) =>
        this.parseResponse(response),
      ) as Promise<z.infer<TEndpoint["response"]>>;
    }
  }
  // </ApiClient.put>

  // <ApiClient.post>
  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<z.infer<TEndpoint["parameters"]> & { withResponse?: false }>
  ): Promise<z.infer<TEndpoint["response"]>>;

  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<z.infer<TEndpoint["parameters"]> & { withResponse: true }>
  ): Promise<SafeApiResponse<TEndpoint>>;

  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<any>
  ): Promise<any> {
    const requestParams = params[0];
    const withResponse = requestParams?.withResponse;

    // Remove withResponse from params before passing to fetcher
    const { withResponse: _, ...fetchParams } = requestParams || {};

    if (withResponse) {
      return this.fetcher("post", this.baseUrl + path, Object.keys(fetchParams).length ? fetchParams : undefined).then(
        async (response) => {
          const data = await this.parseResponse(response);
          if (response.ok) {
            return { ok: true, status: response.status, data };
          } else {
            return { ok: false, status: response.status, error: data };
          }
        },
      );
    } else {
      return this.fetcher("post", this.baseUrl + path, requestParams).then((response) =>
        this.parseResponse(response),
      ) as Promise<z.infer<TEndpoint["response"]>>;
    }
  }
  // </ApiClient.post>

  // <ApiClient.get>
  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<z.infer<TEndpoint["parameters"]> & { withResponse?: false }>
  ): Promise<z.infer<TEndpoint["response"]>>;

  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<z.infer<TEndpoint["parameters"]> & { withResponse: true }>
  ): Promise<SafeApiResponse<TEndpoint>>;

  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<any>
  ): Promise<any> {
    const requestParams = params[0];
    const withResponse = requestParams?.withResponse;

    // Remove withResponse from params before passing to fetcher
    const { withResponse: _, ...fetchParams } = requestParams || {};

    if (withResponse) {
      return this.fetcher("get", this.baseUrl + path, Object.keys(fetchParams).length ? fetchParams : undefined).then(
        async (response) => {
          const data = await this.parseResponse(response);
          if (response.ok) {
            return { ok: true, status: response.status, data };
          } else {
            return { ok: false, status: response.status, error: data };
          }
        },
      );
    } else {
      return this.fetcher("get", this.baseUrl + path, requestParams).then((response) =>
        this.parseResponse(response),
      ) as Promise<z.infer<TEndpoint["response"]>>;
    }
  }
  // </ApiClient.get>

  // <ApiClient.delete>
  delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<z.infer<TEndpoint["parameters"]> & { withResponse?: false }>
  ): Promise<z.infer<TEndpoint["response"]>>;

  delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<z.infer<TEndpoint["parameters"]> & { withResponse: true }>
  ): Promise<SafeApiResponse<TEndpoint>>;

  delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<any>
  ): Promise<any> {
    const requestParams = params[0];
    const withResponse = requestParams?.withResponse;

    // Remove withResponse from params before passing to fetcher
    const { withResponse: _, ...fetchParams } = requestParams || {};

    if (withResponse) {
      return this.fetcher(
        "delete",
        this.baseUrl + path,
        Object.keys(fetchParams).length ? fetchParams : undefined,
      ).then(async (response) => {
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
      ) as Promise<z.infer<TEndpoint["response"]>>;
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
    ...params: MaybeOptionalArg<z.infer<TEndpoint extends { parameters: infer Params } ? Params : never>>
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
 const result = await api.get("/users/{id}", { path: { id: "123" }, withResponse: true });
 if (result.ok) {
   console.log(result.data);
 } else {
   console.error(`Error ${result.status}:`, result.error);
 }
*/

// </ApiClient
