import { scope, type } from "arktype";

export const types = scope({
  Order: type({
    "id?": "number",
    "petId?": "number",
    "quantity?": "number",
    "shipDate?": "string",
    "status?": '"placed" | "approved" | "delivered"',
    "complete?": "boolean",
  }),
  Address: type({
    "street?": "string",
    "city?": "string",
    "state?": "string",
    "zip?": "string",
  }),
  Customer: type({
    "id?": "number",
    "username?": "string",
    "address?": "Address[]",
  }),
  Category: type({
    "id?": "number",
    "name?": "string",
  }),
  User: type({
    "id?": "number",
    "username?": "string",
    "firstName?": "string",
    "lastName?": "string",
    "email?": "string",
    "password?": "string",
    "phone?": "string",
    "userStatus?": "number",
  }),
  Tag: type({
    "id?": "number",
    "name?": "string",
  }),
  Pet: type({
    "id?": "number | undefined",
    name: "string",
    "category?": "Category | undefined",
    photoUrls: "string[]",
    "tags?": "Tag[] | undefined",
    "status?": '"available" | "pending" | "sold" | undefined',
  }),
  ApiResponse: type({
    "code?": "number",
    "type?": "string",
    "message?": "string",
  }),
  __ENDPOINTS_START__: type({}),
  put_UpdatePet: type({
    method: '"PUT"',
    path: '"/pet"',
    requestFormat: '"json"',
    parameters: type({
      body: "Pet",
    }),
    response: "Pet",
    responses: type({
      "200": "Pet",
      "400": "unknown",
      "404": "unknown",
      "405": "unknown",
    }),
  }),
  post_AddPet: type({
    method: '"POST"',
    path: '"/pet"',
    requestFormat: '"json"',
    parameters: type({
      body: "Pet",
    }),
    response: "Pet",
    responses: type({
      "200": "Pet",
      "405": "unknown",
    }),
  }),
  get_FindPetsByStatus: type({
    method: '"GET"',
    path: '"/pet/findByStatus"',
    requestFormat: '"json"',
    parameters: type({
      query: type({
        "status?": '"available" | "pending" | "sold"',
      }),
    }),
    response: "Pet[]",
    responses: type({
      "200": "Pet[]",
      "400": type({
        code: "number",
        message: "string",
      }),
    }),
  }),
  get_FindPetsByTags: type({
    method: '"GET"',
    path: '"/pet/findByTags"',
    requestFormat: '"json"',
    parameters: type({
      query: type({
        "tags?": "string[]",
      }),
    }),
    response: "Pet[]",
    responses: type({
      "200": "Pet[]",
      "400": "unknown",
    }),
  }),
  get_GetPetById: type({
    method: '"GET"',
    path: '"/pet/{petId}"',
    requestFormat: '"json"',
    parameters: type({
      path: type({
        petId: "number",
      }),
    }),
    response: "Pet",
    responses: type({
      "200": "Pet",
      "400": type({
        code: "number",
        message: "string",
      }),
      "404": type({
        code: "number",
        message: "string",
      }),
    }),
  }),
  post_UpdatePetWithForm: type({
    method: '"POST"',
    path: '"/pet/{petId}"',
    requestFormat: '"json"',
    parameters: type({
      query: type({
        "name?": "string",
        "status?": "string",
      }),
      path: type({
        petId: "number",
      }),
    }),
    response: "unknown",
    responses: type({
      "405": "unknown",
    }),
  }),
  delete_DeletePet: type({
    method: '"DELETE"',
    path: '"/pet/{petId}"',
    requestFormat: '"json"',
    parameters: type({
      path: type({
        petId: "number",
      }),
      header: type({
        "api_key?": "string",
      }),
    }),
    response: "unknown",
    responses: type({
      "400": "unknown",
    }),
  }),
  post_UploadFile: type({
    method: '"POST"',
    path: '"/pet/{petId}/uploadImage"',
    requestFormat: '"binary"',
    parameters: type({
      query: type({
        "additionalMetadata?": "string",
      }),
      path: type({
        petId: "number",
      }),
      body: "string",
    }),
    response: "ApiResponse",
    responses: type({
      "200": "ApiResponse",
    }),
  }),
  get_GetInventory: type({
    method: '"GET"',
    path: '"/store/inventory"',
    requestFormat: '"json"',
    parameters: "never",
    response: "never",
    responses: type({
      "200": "never",
    }),
  }),
  post_PlaceOrder: type({
    method: '"POST"',
    path: '"/store/order"',
    requestFormat: '"json"',
    parameters: type({
      body: "Order",
    }),
    response: "Order",
    responses: type({
      "200": "Order",
      "405": "unknown",
    }),
  }),
  get_GetOrderById: type({
    method: '"GET"',
    path: '"/store/order/{orderId}"',
    requestFormat: '"json"',
    parameters: type({
      path: type({
        orderId: "number",
      }),
    }),
    response: "Order",
    responses: type({
      "200": "Order",
      "400": "unknown",
      "404": "unknown",
    }),
  }),
  delete_DeleteOrder: type({
    method: '"DELETE"',
    path: '"/store/order/{orderId}"',
    requestFormat: '"json"',
    parameters: type({
      path: type({
        orderId: "number",
      }),
    }),
    response: "unknown",
    responses: type({
      "400": "unknown",
      "404": "unknown",
    }),
  }),
  post_CreateUser: type({
    method: '"POST"',
    path: '"/user"',
    requestFormat: '"json"',
    parameters: type({
      body: "User",
    }),
    response: "User",
    responses: type({
      default: "User",
    }),
  }),
  post_CreateUsersWithListInput: type({
    method: '"POST"',
    path: '"/user/createWithList"',
    requestFormat: '"json"',
    parameters: type({
      body: "User[]",
    }),
    response: "User",
    responses: type({
      "200": "User",
      default: "unknown",
    }),
  }),
  get_LoginUser: type({
    method: '"GET"',
    path: '"/user/login"',
    requestFormat: '"json"',
    parameters: type({
      query: type({
        "username?": "string",
        "password?": "string",
      }),
    }),
    response: "string",
    responses: type({
      "200": "string",
      "400": "unknown",
    }),
    responseHeaders: type({
      "x-rate-limit": "number",
      "x-expires-after": "string",
    }),
  }),
  get_LogoutUser: type({
    method: '"GET"',
    path: '"/user/logout"',
    requestFormat: '"json"',
    parameters: "never",
    response: "unknown",
    responses: type({
      default: "unknown",
    }),
  }),
  get_GetUserByName: type({
    method: '"GET"',
    path: '"/user/{username}"',
    requestFormat: '"json"',
    parameters: type({
      path: type({
        username: "string",
      }),
    }),
    response: "User",
    responses: type({
      "200": "User",
      "400": "unknown",
      "404": "unknown",
    }),
  }),
  put_UpdateUser: type({
    method: '"PUT"',
    path: '"/user/{username}"',
    requestFormat: '"json"',
    parameters: type({
      path: type({
        username: "string",
      }),
      body: "User",
    }),
    response: "unknown",
    responses: type({
      default: "unknown",
    }),
  }),
  delete_DeleteUser: type({
    method: '"DELETE"',
    path: '"/user/{username}"',
    requestFormat: '"json"',
    parameters: type({
      path: type({
        username: "string",
      }),
    }),
    response: "unknown",
    responses: type({
      "400": "unknown",
      "404": "unknown",
    }),
  }),
  __ENDPOINTS_END__: type({}),
}).export();

export type Order = typeof Order.infer;
export const Order = types.Order;
export type Address = typeof Address.infer;
export const Address = types.Address;
export type Customer = typeof Customer.infer;
export const Customer = types.Customer;
export type Category = typeof Category.infer;
export const Category = types.Category;
export type User = typeof User.infer;
export const User = types.User;
export type Tag = typeof Tag.infer;
export const Tag = types.Tag;
export type Pet = typeof Pet.infer;
export const Pet = types.Pet;
export type ApiResponse = typeof ApiResponse.infer;
export const ApiResponse = types.ApiResponse;
export type __ENDPOINTS_START__ = typeof __ENDPOINTS_START__.infer;
export const __ENDPOINTS_START__ = types.__ENDPOINTS_START__;
export type put_UpdatePet = typeof put_UpdatePet.infer;
export const put_UpdatePet = types.put_UpdatePet;
export type post_AddPet = typeof post_AddPet.infer;
export const post_AddPet = types.post_AddPet;
export type get_FindPetsByStatus = typeof get_FindPetsByStatus.infer;
export const get_FindPetsByStatus = types.get_FindPetsByStatus;
export type get_FindPetsByTags = typeof get_FindPetsByTags.infer;
export const get_FindPetsByTags = types.get_FindPetsByTags;
export type get_GetPetById = typeof get_GetPetById.infer;
export const get_GetPetById = types.get_GetPetById;
export type post_UpdatePetWithForm = typeof post_UpdatePetWithForm.infer;
export const post_UpdatePetWithForm = types.post_UpdatePetWithForm;
export type delete_DeletePet = typeof delete_DeletePet.infer;
export const delete_DeletePet = types.delete_DeletePet;
export type post_UploadFile = typeof post_UploadFile.infer;
export const post_UploadFile = types.post_UploadFile;
export type get_GetInventory = typeof get_GetInventory.infer;
export const get_GetInventory = types.get_GetInventory;
export type post_PlaceOrder = typeof post_PlaceOrder.infer;
export const post_PlaceOrder = types.post_PlaceOrder;
export type get_GetOrderById = typeof get_GetOrderById.infer;
export const get_GetOrderById = types.get_GetOrderById;
export type delete_DeleteOrder = typeof delete_DeleteOrder.infer;
export const delete_DeleteOrder = types.delete_DeleteOrder;
export type post_CreateUser = typeof post_CreateUser.infer;
export const post_CreateUser = types.post_CreateUser;
export type post_CreateUsersWithListInput = typeof post_CreateUsersWithListInput.infer;
export const post_CreateUsersWithListInput = types.post_CreateUsersWithListInput;
export type get_LoginUser = typeof get_LoginUser.infer;
export const get_LoginUser = types.get_LoginUser;
export type get_LogoutUser = typeof get_LogoutUser.infer;
export const get_LogoutUser = types.get_LogoutUser;
export type get_GetUserByName = typeof get_GetUserByName.infer;
export const get_GetUserByName = types.get_GetUserByName;
export type put_UpdateUser = typeof put_UpdateUser.infer;
export const put_UpdateUser = types.put_UpdateUser;
export type delete_DeleteUser = typeof delete_DeleteUser.infer;
export const delete_DeleteUser = types.delete_DeleteUser;
export type __ENDPOINTS_END__ = typeof __ENDPOINTS_END__.infer;
export const __ENDPOINTS_END__ = types.__ENDPOINTS_END__;

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
interface SuccessResponse<TSuccess, TStatusCode> extends Omit<Response, "ok" | "status" | "json"> {
  ok: true;
  status: TStatusCode;
  data: TSuccess;
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) */
  json: () => Promise<TSuccess>;
}

/** @see https://developer.mozilla.org/en-US/docs/Web/API/Response */
interface ErrorResponse<TData, TStatusCode> extends Omit<Response, "ok" | "status" | "json"> {
  ok: false;
  status: TStatusCode;
  data: TData;
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) */
  json: () => Promise<TData>;
}

export type TypedApiResponse<
  TSuccess,
  TAllResponses extends Record<string | number, unknown> = {},
> = keyof TAllResponses extends never
  ? SuccessResponse<TSuccess, number>
  : {
      [K in keyof TAllResponses]: K extends string
        ? K extends `${infer TStatusCode extends number}`
          ? TStatusCode extends SuccessStatusCode
            ? SuccessResponse<TSuccess, TStatusCode>
            : ErrorResponse<TAllResponses[K], TStatusCode>
          : never
        : K extends number
          ? K extends SuccessStatusCode
            ? SuccessResponse<TSuccess, K>
            : ErrorResponse<TAllResponses[K], K>
          : never;
    }[keyof TAllResponses];

export type SafeApiResponse<TEndpoint> = TEndpoint extends { response: infer TSuccess; responses: infer TResponses }
  ? TResponses extends Record<string, unknown>
    ? TypedApiResponse<TSuccess, TResponses>
    : SuccessResponse<TSuccess, number>
  : TEndpoint extends { response: infer TSuccess }
    ? SuccessResponse<TSuccess, number>
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
  response: ErrorResponse<unknown, ErrorStatusCode>;
  status: number;
  constructor(response: ErrorResponse<unknown, ErrorStatusCode>) {
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
      TEndpoint["infer"]["parameters"] & { withResponse?: false; throwOnStatusError?: boolean }
    >
  ): Promise<TEndpoint["infer"]["response"]>;

  put<Path extends keyof PutEndpoints, TEndpoint extends PutEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<TEndpoint["infer"]["parameters"] & { withResponse: true; throwOnStatusError?: boolean }>
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

    return promise as Promise<TEndpoint["infer"]["response"]>;
  }
  // </ApiClient.put>

  // <ApiClient.post>
  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      TEndpoint["infer"]["parameters"] & { withResponse?: false; throwOnStatusError?: boolean }
    >
  ): Promise<TEndpoint["infer"]["response"]>;

  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<TEndpoint["infer"]["parameters"] & { withResponse: true; throwOnStatusError?: boolean }>
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

    return promise as Promise<TEndpoint["infer"]["response"]>;
  }
  // </ApiClient.post>

  // <ApiClient.get>
  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      TEndpoint["infer"]["parameters"] & { withResponse?: false; throwOnStatusError?: boolean }
    >
  ): Promise<TEndpoint["infer"]["response"]>;

  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<TEndpoint["infer"]["parameters"] & { withResponse: true; throwOnStatusError?: boolean }>
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

    return promise as Promise<TEndpoint["infer"]["response"]>;
  }
  // </ApiClient.get>

  // <ApiClient.delete>
  delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      TEndpoint["infer"]["parameters"] & { withResponse?: false; throwOnStatusError?: boolean }
    >
  ): Promise<TEndpoint["infer"]["response"]>;

  delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<TEndpoint["infer"]["parameters"] & { withResponse: true; throwOnStatusError?: boolean }>
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

    return promise as Promise<TEndpoint["infer"]["response"]>;
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
    ...params: MaybeOptionalArg<TEndpoint["infer"]["parameters"]>
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
