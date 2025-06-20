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
  }),
  post_AddPet: type({
    method: '"POST"',
    path: '"/pet"',
    requestFormat: '"json"',
    parameters: type({
      body: "Pet",
    }),
    response: "Pet",
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
  }),
  get_GetInventory: type({
    method: '"GET"',
    path: '"/store/inventory"',
    requestFormat: '"json"',
    parameters: "never",
    response: "never",
  }),
  post_PlaceOrder: type({
    method: '"POST"',
    path: '"/store/order"',
    requestFormat: '"json"',
    parameters: type({
      body: "Order",
    }),
    response: "Order",
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
  }),
  post_CreateUser: type({
    method: '"POST"',
    path: '"/user"',
    requestFormat: '"json"',
    parameters: type({
      body: "User",
    }),
    response: "User",
  }),
  post_CreateUsersWithListInput: type({
    method: '"POST"',
    path: '"/user/createWithList"',
    requestFormat: '"json"',
    parameters: type({
      body: "User[]",
    }),
    response: "User",
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
  responseHeaders?: TConfig["responseHeaders"];
};

export type Fetcher = (method: Method, url: string, parameters?: EndpointParameters | undefined) => Promise<Response>;

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
    ...params: MaybeOptionalArg<TEndpoint["infer"]["parameters"]>
  ): Promise<TEndpoint["infer"]["response"]> {
    return this.fetcher("put", this.baseUrl + path, params[0]).then((response) =>
      this.parseResponse(response),
    ) as Promise<TEndpoint["infer"]["response"]>;
  }
  // </ApiClient.put>

  // <ApiClient.post>
  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<TEndpoint["infer"]["parameters"]>
  ): Promise<TEndpoint["infer"]["response"]> {
    return this.fetcher("post", this.baseUrl + path, params[0]).then((response) =>
      this.parseResponse(response),
    ) as Promise<TEndpoint["infer"]["response"]>;
  }
  // </ApiClient.post>

  // <ApiClient.get>
  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<TEndpoint["infer"]["parameters"]>
  ): Promise<TEndpoint["infer"]["response"]> {
    return this.fetcher("get", this.baseUrl + path, params[0]).then((response) =>
      this.parseResponse(response),
    ) as Promise<TEndpoint["infer"]["response"]>;
  }
  // </ApiClient.get>

  // <ApiClient.delete>
  delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<TEndpoint["infer"]["parameters"]>
  ): Promise<TEndpoint["infer"]["response"]> {
    return this.fetcher("delete", this.baseUrl + path, params[0]).then((response) =>
      this.parseResponse(response),
    ) as Promise<TEndpoint["infer"]["response"]>;
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
