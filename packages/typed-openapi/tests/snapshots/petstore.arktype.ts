import { scope } from "arktype";

export const types = scope({
  Order: {
    "id?": "number",
    "petId?": "number",
    "quantity?": "number",
    "shipDate?": "string",
    "status?": '"placed" | "approved" | "delivered"',
    "complete?": "boolean",
  },
  Address: {
    "street?": "string",
    "city?": "string",
    "state?": "string",
    "zip?": "string",
  },
  Customer: {
    "id?": "number",
    "username?": "string",
    "address?": "Address[]",
  },
  Category: {
    "id?": "number",
    "name?": "string",
  },
  User: {
    "id?": "number",
    "username?": "string",
    "firstName?": "string",
    "lastName?": "string",
    "email?": "string",
    "password?": "string",
    "phone?": "string",
    "userStatus?": "number",
  },
  Tag: {
    "id?": "number",
    "name?": "string",
  },
  Pet: {
    "id?": "number | undefined",
    name: "string",
    "category?": "Category | undefined",
    photoUrls: "string[]",
    "tags?": "Tag[] | undefined",
    "status?": '"available" | "pending" | "sold" | undefined',
  },
  ApiResponse: {
    "code?": "number",
    "type?": "string",
    "message?": "string",
  },
  __ENDPOINTS_START__: {},
  put_UpdatePet: {
    method: '"PUT"',
    path: '"/pet"',
    parameters: {
      body: "Pet",
    },
    response: "Pet",
  },
  post_AddPet: {
    method: '"POST"',
    path: '"/pet"',
    parameters: {
      body: "Pet",
    },
    response: "Pet",
  },
  get_FindPetsByStatus: {
    method: '"GET"',
    path: '"/pet/findByStatus"',
    parameters: {
      query: {
        "status?": '"available" | "pending" | "sold"',
      },
    },
    response: "Pet[]",
  },
  get_FindPetsByTags: {
    method: '"GET"',
    path: '"/pet/findByTags"',
    parameters: {
      query: {
        "tags?": "string[]",
      },
    },
    response: "Pet[]",
  },
  get_GetPetById: {
    method: '"GET"',
    path: '"/pet/{petId}"',
    parameters: {
      path: {
        petId: "number",
      },
    },
    response: "Pet",
  },
  post_UpdatePetWithForm: {
    method: '"POST"',
    path: '"/pet/{petId}"',
    parameters: {
      query: {
        "name?": "string",
        "status?": "string",
      },
      path: {
        petId: "number",
      },
    },
    response: "unknown",
  },
  delete_DeletePet: {
    method: '"DELETE"',
    path: '"/pet/{petId}"',
    parameters: {
      path: {
        petId: "number",
      },
      header: {
        "api_key?": "string",
      },
    },
    response: "unknown",
  },
  post_UploadFile: {
    method: '"POST"',
    path: '"/pet/{petId}/uploadImage"',
    parameters: {
      query: {
        "additionalMetadata?": "string",
      },
      path: {
        petId: "number",
      },
      body: "string",
    },
    response: "ApiResponse",
  },
  get_GetInventory: {
    method: '"GET"',
    path: '"/store/inventory"',
    parameters: "never",
    response: "unknown",
  },
  post_PlaceOrder: {
    method: '"POST"',
    path: '"/store/order"',
    parameters: {
      body: "Order",
    },
    response: "Order",
  },
  get_GetOrderById: {
    method: '"GET"',
    path: '"/store/order/{orderId}"',
    parameters: {
      path: {
        orderId: "number",
      },
    },
    response: "Order",
  },
  delete_DeleteOrder: {
    method: '"DELETE"',
    path: '"/store/order/{orderId}"',
    parameters: {
      path: {
        orderId: "number",
      },
    },
    response: "unknown",
  },
  post_CreateUser: {
    method: '"POST"',
    path: '"/user"',
    parameters: {
      body: "User",
    },
    response: "User",
  },
  post_CreateUsersWithListInput: {
    method: '"POST"',
    path: '"/user/createWithList"',
    parameters: {
      body: "User[]",
    },
    response: "User",
  },
  get_LoginUser: {
    method: '"GET"',
    path: '"/user/login"',
    parameters: {
      query: {
        "username?": "string",
        "password?": "string",
      },
    },
    response: "string",
  },
  get_LogoutUser: {
    method: '"GET"',
    path: '"/user/logout"',
    parameters: "never",
    response: "unknown",
  },
  get_GetUserByName: {
    method: '"GET"',
    path: '"/user/{username}"',
    parameters: {
      path: {
        username: "string",
      },
    },
    response: "User",
  },
  put_UpdateUser: {
    method: '"PUT"',
    path: '"/user/{username}"',
    parameters: {
      path: {
        username: "string",
      },
      body: "User",
    },
    response: "unknown",
  },
  delete_DeleteUser: {
    method: '"DELETE"',
    path: '"/user/{username}"',
    parameters: {
      path: {
        username: "string",
      },
    },
    response: "unknown",
  },
  __ENDPOINTS_END__: {},
}).compile();

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
export type AllEndpoints = EndpointByMethod[keyof EndpointByMethod];
// </EndpointByMethod.Shorthands>

// <ApiClientTypes>
export type EndpointParameters = {
  body?: unknown;
  query?: Record<string, unknown>;
  header?: Record<string, unknown>;
  path?: Record<string, unknown>;
};

export type MutationMethod = "post" | "put" | "patch" | "delete";
export type Method = "get" | "head" | MutationMethod;

export type DefaultEndpoint = {
  parameters?: EndpointParameters | undefined;
  response: unknown;
};

export type Endpoint<TConfig extends DefaultEndpoint = DefaultEndpoint> = {
  operationId: string;
  method: Method;
  path: string;
  parameters?: TConfig["parameters"];
  meta: {
    alias: string;
    hasParameters: boolean;
    areParametersRequired: boolean;
  };
  response: TConfig["response"];
};

type Fetcher = (
  method: Method,
  url: string,
  parameters?: EndpointParameters | undefined,
) => Promise<Endpoint["response"]>;

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

  // <ApiClient.put>
  put<Path extends keyof PutEndpoints, TEndpoint extends PutEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<TEndpoint["infer"]["parameters"]>
  ): Promise<TEndpoint["infer"]["response"]> {
    return this.fetcher("put", this.baseUrl + path, params[0]);
  }
  // </ApiClient.put>

  // <ApiClient.post>
  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<TEndpoint["infer"]["parameters"]>
  ): Promise<TEndpoint["infer"]["response"]> {
    return this.fetcher("post", this.baseUrl + path, params[0]);
  }
  // </ApiClient.post>

  // <ApiClient.get>
  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<TEndpoint["infer"]["parameters"]>
  ): Promise<TEndpoint["infer"]["response"]> {
    return this.fetcher("get", this.baseUrl + path, params[0]);
  }
  // </ApiClient.get>

  // <ApiClient.delete>
  delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<TEndpoint["infer"]["parameters"]>
  ): Promise<TEndpoint["infer"]["response"]> {
    return this.fetcher("delete", this.baseUrl + path, params[0]);
  }
  // </ApiClient.delete>
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
