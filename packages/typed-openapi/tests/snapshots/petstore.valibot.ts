import v from "valibot";

export type Order = v.Output<typeof Order>;
export const Order = v.object({
  id: v.optional(v.number()),
  petId: v.optional(v.number()),
  quantity: v.optional(v.number()),
  shipDate: v.optional(v.string()),
  status: v.optional(v.union([v.literal("placed"), v.literal("approved"), v.literal("delivered")])),
  complete: v.optional(v.boolean()),
});

export type Address = v.Output<typeof Address>;
export const Address = v.object({
  street: v.optional(v.string()),
  city: v.optional(v.string()),
  state: v.optional(v.string()),
  zip: v.optional(v.string()),
});

export type Customer = v.Output<typeof Customer>;
export const Customer = v.object({
  id: v.optional(v.number()),
  username: v.optional(v.string()),
  address: v.optional(v.array(Address)),
});

export type Category = v.Output<typeof Category>;
export const Category = v.object({
  id: v.optional(v.number()),
  name: v.optional(v.string()),
});

export type User = v.Output<typeof User>;
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

export type Tag = v.Output<typeof Tag>;
export const Tag = v.object({
  id: v.optional(v.number()),
  name: v.optional(v.string()),
});

export type Pet = v.Output<typeof Pet>;
export const Pet = v.object({
  id: v.optional(v.union([v.number(), v.any(/* unsupported */)])),
  name: v.string(),
  category: v.optional(v.union([Category, v.any(/* unsupported */)])),
  photoUrls: v.array(v.string()),
  tags: v.optional(v.union([v.array(Tag), v.any(/* unsupported */)])),
  status: v.optional(
    v.union([v.literal("available"), v.literal("pending"), v.literal("sold"), v.any(/* unsupported */)]),
  ),
});

export type ApiResponse = v.Output<typeof ApiResponse>;
export const ApiResponse = v.object({
  code: v.optional(v.number()),
  type: v.optional(v.string()),
  message: v.optional(v.string()),
});

export type __ENDPOINTS_START__ = v.Output<typeof __ENDPOINTS_START__>;
export const __ENDPOINTS_START__ = v.object({});

export type put_UpdatePet = v.Output<typeof put_UpdatePet>;
export const put_UpdatePet = v.object({
  method: v.literal("PUT"),
  path: v.literal("/pet"),
  parameters: v.object({
    body: Pet,
  }),
  response: Pet,
});

export type post_AddPet = v.Output<typeof post_AddPet>;
export const post_AddPet = v.object({
  method: v.literal("POST"),
  path: v.literal("/pet"),
  parameters: v.object({
    body: Pet,
  }),
  response: Pet,
});

export type get_FindPetsByStatus = v.Output<typeof get_FindPetsByStatus>;
export const get_FindPetsByStatus = v.object({
  method: v.literal("GET"),
  path: v.literal("/pet/findByStatus"),
  parameters: v.object({
    query: v.object({
      status: v.optional(v.union([v.literal("available"), v.literal("pending"), v.literal("sold")])),
    }),
  }),
  response: v.array(Pet),
});

export type get_FindPetsByTags = v.Output<typeof get_FindPetsByTags>;
export const get_FindPetsByTags = v.object({
  method: v.literal("GET"),
  path: v.literal("/pet/findByTags"),
  parameters: v.object({
    query: v.object({
      tags: v.optional(v.array(v.string())),
    }),
  }),
  response: v.array(Pet),
});

export type get_GetPetById = v.Output<typeof get_GetPetById>;
export const get_GetPetById = v.object({
  method: v.literal("GET"),
  path: v.literal("/pet/{petId}"),
  parameters: v.object({
    path: v.object({
      petId: v.number(),
    }),
  }),
  response: Pet,
});

export type post_UpdatePetWithForm = v.Output<typeof post_UpdatePetWithForm>;
export const post_UpdatePetWithForm = v.object({
  method: v.literal("POST"),
  path: v.literal("/pet/{petId}"),
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
});

export type delete_DeletePet = v.Output<typeof delete_DeletePet>;
export const delete_DeletePet = v.object({
  method: v.literal("DELETE"),
  path: v.literal("/pet/{petId}"),
  parameters: v.object({
    path: v.object({
      petId: v.number(),
    }),
    header: v.object({
      api_key: v.optional(v.string()),
    }),
  }),
  response: v.unknown(),
});

export type post_UploadFile = v.Output<typeof post_UploadFile>;
export const post_UploadFile = v.object({
  method: v.literal("POST"),
  path: v.literal("/pet/{petId}/uploadImage"),
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
});

export type get_GetInventory = v.Output<typeof get_GetInventory>;
export const get_GetInventory = v.object({
  method: v.literal("GET"),
  path: v.literal("/store/inventory"),
  parameters: v.never(),
  response: v.unknown(),
});

export type post_PlaceOrder = v.Output<typeof post_PlaceOrder>;
export const post_PlaceOrder = v.object({
  method: v.literal("POST"),
  path: v.literal("/store/order"),
  parameters: v.object({
    body: Order,
  }),
  response: Order,
});

export type get_GetOrderById = v.Output<typeof get_GetOrderById>;
export const get_GetOrderById = v.object({
  method: v.literal("GET"),
  path: v.literal("/store/order/{orderId}"),
  parameters: v.object({
    path: v.object({
      orderId: v.number(),
    }),
  }),
  response: Order,
});

export type delete_DeleteOrder = v.Output<typeof delete_DeleteOrder>;
export const delete_DeleteOrder = v.object({
  method: v.literal("DELETE"),
  path: v.literal("/store/order/{orderId}"),
  parameters: v.object({
    path: v.object({
      orderId: v.number(),
    }),
  }),
  response: v.unknown(),
});

export type post_CreateUser = v.Output<typeof post_CreateUser>;
export const post_CreateUser = v.object({
  method: v.literal("POST"),
  path: v.literal("/user"),
  parameters: v.object({
    body: User,
  }),
  response: User,
});

export type post_CreateUsersWithListInput = v.Output<typeof post_CreateUsersWithListInput>;
export const post_CreateUsersWithListInput = v.object({
  method: v.literal("POST"),
  path: v.literal("/user/createWithList"),
  parameters: v.object({
    body: v.array(User),
  }),
  response: User,
});

export type get_LoginUser = v.Output<typeof get_LoginUser>;
export const get_LoginUser = v.object({
  method: v.literal("GET"),
  path: v.literal("/user/login"),
  parameters: v.object({
    query: v.object({
      username: v.optional(v.string()),
      password: v.optional(v.string()),
    }),
  }),
  response: v.string(),
});

export type get_LogoutUser = v.Output<typeof get_LogoutUser>;
export const get_LogoutUser = v.object({
  method: v.literal("GET"),
  path: v.literal("/user/logout"),
  parameters: v.never(),
  response: v.unknown(),
});

export type get_GetUserByName = v.Output<typeof get_GetUserByName>;
export const get_GetUserByName = v.object({
  method: v.literal("GET"),
  path: v.literal("/user/{username}"),
  parameters: v.object({
    path: v.object({
      username: v.string(),
    }),
  }),
  response: User,
});

export type put_UpdateUser = v.Output<typeof put_UpdateUser>;
export const put_UpdateUser = v.object({
  method: v.literal("PUT"),
  path: v.literal("/user/{username}"),
  parameters: v.object({
    path: v.object({
      username: v.string(),
    }),
    body: User,
  }),
  response: v.unknown(),
});

export type delete_DeleteUser = v.Output<typeof delete_DeleteUser>;
export const delete_DeleteUser = v.object({
  method: v.literal("DELETE"),
  path: v.literal("/user/{username}"),
  parameters: v.object({
    path: v.object({
      username: v.string(),
    }),
  }),
  response: v.unknown(),
});

export type __ENDPOINTS_END__ = v.Output<typeof __ENDPOINTS_END__>;
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
    ...params: MaybeOptionalArg<v.Output<TEndpoint>["parameters"]>
  ): Promise<v.Output<TEndpoint>["response"]> {
    return this.fetcher("put", this.baseUrl + path, params[0]);
  }
  // </ApiClient.put>

  // <ApiClient.post>
  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<v.Output<TEndpoint>["parameters"]>
  ): Promise<v.Output<TEndpoint>["response"]> {
    return this.fetcher("post", this.baseUrl + path, params[0]);
  }
  // </ApiClient.post>

  // <ApiClient.get>
  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<v.Output<TEndpoint>["parameters"]>
  ): Promise<v.Output<TEndpoint>["response"]> {
    return this.fetcher("get", this.baseUrl + path, params[0]);
  }
  // </ApiClient.get>

  // <ApiClient.delete>
  delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<v.Output<TEndpoint>["parameters"]>
  ): Promise<v.Output<TEndpoint>["response"]> {
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
