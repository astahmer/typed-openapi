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
    t.union([t.literal("available"), t.literal("pending"), t.literal("sold"), t.undefined]),
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
  parameters: t.type({
    body: Pet,
  }),
  response: Pet,
});

export type post_AddPet = t.TypeOf<typeof post_AddPet>;
export const post_AddPet = t.type({
  method: t.literal("POST"),
  path: t.literal("/pet"),
  parameters: t.type({
    body: Pet,
  }),
  response: Pet,
});

export type get_FindPetsByStatus = t.TypeOf<typeof get_FindPetsByStatus>;
export const get_FindPetsByStatus = t.type({
  method: t.literal("GET"),
  path: t.literal("/pet/findByStatus"),
  parameters: t.type({
    query: t.type({
      status: t.union([t.undefined, t.union([t.literal("available"), t.literal("pending"), t.literal("sold")])]),
    }),
  }),
  response: t.array(Pet),
});

export type get_FindPetsByTags = t.TypeOf<typeof get_FindPetsByTags>;
export const get_FindPetsByTags = t.type({
  method: t.literal("GET"),
  path: t.literal("/pet/findByTags"),
  parameters: t.type({
    query: t.type({
      tags: t.union([t.undefined, t.array(t.string)]),
    }),
  }),
  response: t.array(Pet),
});

export type get_GetPetById = t.TypeOf<typeof get_GetPetById>;
export const get_GetPetById = t.type({
  method: t.literal("GET"),
  path: t.literal("/pet/{petId}"),
  parameters: t.type({
    path: t.type({
      petId: t.number,
    }),
  }),
  response: Pet,
});

export type post_UpdatePetWithForm = t.TypeOf<typeof post_UpdatePetWithForm>;
export const post_UpdatePetWithForm = t.type({
  method: t.literal("POST"),
  path: t.literal("/pet/{petId}"),
  parameters: t.type({
    query: t.type({
      name: t.union([t.undefined, t.string]),
      status: t.union([t.undefined, t.string]),
    }),
    path: t.type({
      petId: t.number,
    }),
  }),
  response: t.unknown,
});

export type delete_DeletePet = t.TypeOf<typeof delete_DeletePet>;
export const delete_DeletePet = t.type({
  method: t.literal("DELETE"),
  path: t.literal("/pet/{petId}"),
  parameters: t.type({
    path: t.type({
      petId: t.number,
    }),
    header: t.type({
      api_key: t.union([t.undefined, t.string]),
    }),
  }),
  response: t.unknown,
});

export type post_UploadFile = t.TypeOf<typeof post_UploadFile>;
export const post_UploadFile = t.type({
  method: t.literal("POST"),
  path: t.literal("/pet/{petId}/uploadImage"),
  parameters: t.type({
    query: t.type({
      additionalMetadata: t.union([t.undefined, t.string]),
    }),
    path: t.type({
      petId: t.number,
    }),
    body: t.string,
  }),
  response: ApiResponse,
});

export type get_GetInventory = t.TypeOf<typeof get_GetInventory>;
export const get_GetInventory = t.type({
  method: t.literal("GET"),
  path: t.literal("/store/inventory"),
  parameters: t.never,
  response: t.unknown,
});

export type post_PlaceOrder = t.TypeOf<typeof post_PlaceOrder>;
export const post_PlaceOrder = t.type({
  method: t.literal("POST"),
  path: t.literal("/store/order"),
  parameters: t.type({
    body: Order,
  }),
  response: Order,
});

export type get_GetOrderById = t.TypeOf<typeof get_GetOrderById>;
export const get_GetOrderById = t.type({
  method: t.literal("GET"),
  path: t.literal("/store/order/{orderId}"),
  parameters: t.type({
    path: t.type({
      orderId: t.number,
    }),
  }),
  response: Order,
});

export type delete_DeleteOrder = t.TypeOf<typeof delete_DeleteOrder>;
export const delete_DeleteOrder = t.type({
  method: t.literal("DELETE"),
  path: t.literal("/store/order/{orderId}"),
  parameters: t.type({
    path: t.type({
      orderId: t.number,
    }),
  }),
  response: t.unknown,
});

export type post_CreateUser = t.TypeOf<typeof post_CreateUser>;
export const post_CreateUser = t.type({
  method: t.literal("POST"),
  path: t.literal("/user"),
  parameters: t.type({
    body: User,
  }),
  response: User,
});

export type post_CreateUsersWithListInput = t.TypeOf<typeof post_CreateUsersWithListInput>;
export const post_CreateUsersWithListInput = t.type({
  method: t.literal("POST"),
  path: t.literal("/user/createWithList"),
  parameters: t.type({
    body: t.array(User),
  }),
  response: User,
});

export type get_LoginUser = t.TypeOf<typeof get_LoginUser>;
export const get_LoginUser = t.type({
  method: t.literal("GET"),
  path: t.literal("/user/login"),
  parameters: t.type({
    query: t.type({
      username: t.union([t.undefined, t.string]),
      password: t.union([t.undefined, t.string]),
    }),
  }),
  response: t.string,
});

export type get_LogoutUser = t.TypeOf<typeof get_LogoutUser>;
export const get_LogoutUser = t.type({
  method: t.literal("GET"),
  path: t.literal("/user/logout"),
  parameters: t.never,
  response: t.unknown,
});

export type get_GetUserByName = t.TypeOf<typeof get_GetUserByName>;
export const get_GetUserByName = t.type({
  method: t.literal("GET"),
  path: t.literal("/user/{username}"),
  parameters: t.type({
    path: t.type({
      username: t.string,
    }),
  }),
  response: User,
});

export type put_UpdateUser = t.TypeOf<typeof put_UpdateUser>;
export const put_UpdateUser = t.type({
  method: t.literal("PUT"),
  path: t.literal("/user/{username}"),
  parameters: t.type({
    path: t.type({
      username: t.string,
    }),
    body: User,
  }),
  response: t.unknown,
});

export type delete_DeleteUser = t.TypeOf<typeof delete_DeleteUser>;
export const delete_DeleteUser = t.type({
  method: t.literal("DELETE"),
  path: t.literal("/user/{username}"),
  parameters: t.type({
    path: t.type({
      username: t.string,
    }),
  }),
  response: t.unknown,
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
    ...params: MaybeOptionalArg<t.TypeOf<TEndpoint>["parameters"]>
  ): Promise<t.TypeOf<TEndpoint>["response"]> {
    return this.fetcher("put", this.baseUrl + path, params[0]);
  }
  // </ApiClient.put>

  // <ApiClient.post>
  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<t.TypeOf<TEndpoint>["parameters"]>
  ): Promise<t.TypeOf<TEndpoint>["response"]> {
    return this.fetcher("post", this.baseUrl + path, params[0]);
  }
  // </ApiClient.post>

  // <ApiClient.get>
  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<t.TypeOf<TEndpoint>["parameters"]>
  ): Promise<t.TypeOf<TEndpoint>["response"]> {
    return this.fetcher("get", this.baseUrl + path, params[0]);
  }
  // </ApiClient.get>

  // <ApiClient.delete>
  delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<t.TypeOf<TEndpoint>["parameters"]>
  ): Promise<t.TypeOf<TEndpoint>["response"]> {
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
