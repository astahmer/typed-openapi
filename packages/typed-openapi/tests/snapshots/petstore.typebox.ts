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
    Type.Union([Type.Literal("available"), Type.Literal("pending"), Type.Literal("sold"), Type.Undefined()]),
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
  parameters: Type.Object({
    body: Pet,
  }),
  response: Pet,
});

export type post_AddPet = Static<typeof post_AddPet>;
export const post_AddPet = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/pet"),
  parameters: Type.Object({
    body: Pet,
  }),
  response: Pet,
});

export type get_FindPetsByStatus = Static<typeof get_FindPetsByStatus>;
export const get_FindPetsByStatus = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/pet/findByStatus"),
  parameters: Type.Object({
    query: Type.Partial(
      Type.Object({
        status: Type.Union([Type.Literal("available"), Type.Literal("pending"), Type.Literal("sold")]),
      }),
    ),
  }),
  response: Type.Array(Pet),
});

export type get_FindPetsByTags = Static<typeof get_FindPetsByTags>;
export const get_FindPetsByTags = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/pet/findByTags"),
  parameters: Type.Object({
    query: Type.Partial(
      Type.Object({
        tags: Type.Array(Type.String()),
      }),
    ),
  }),
  response: Type.Array(Pet),
});

export type get_GetPetById = Static<typeof get_GetPetById>;
export const get_GetPetById = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/pet/{petId}"),
  parameters: Type.Object({
    path: Type.Object({
      petId: Type.Number(),
    }),
  }),
  response: Pet,
});

export type post_UpdatePetWithForm = Static<typeof post_UpdatePetWithForm>;
export const post_UpdatePetWithForm = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/pet/{petId}"),
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
});

export type delete_DeletePet = Static<typeof delete_DeletePet>;
export const delete_DeletePet = Type.Object({
  method: Type.Literal("DELETE"),
  path: Type.Literal("/pet/{petId}"),
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
});

export type post_UploadFile = Static<typeof post_UploadFile>;
export const post_UploadFile = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/pet/{petId}/uploadImage"),
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
});

export type get_GetInventory = Static<typeof get_GetInventory>;
export const get_GetInventory = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/store/inventory"),
  parameters: Type.Never(),
  response: Type.Unknown(),
});

export type post_PlaceOrder = Static<typeof post_PlaceOrder>;
export const post_PlaceOrder = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/store/order"),
  parameters: Type.Object({
    body: Order,
  }),
  response: Order,
});

export type get_GetOrderById = Static<typeof get_GetOrderById>;
export const get_GetOrderById = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/store/order/{orderId}"),
  parameters: Type.Object({
    path: Type.Object({
      orderId: Type.Number(),
    }),
  }),
  response: Order,
});

export type delete_DeleteOrder = Static<typeof delete_DeleteOrder>;
export const delete_DeleteOrder = Type.Object({
  method: Type.Literal("DELETE"),
  path: Type.Literal("/store/order/{orderId}"),
  parameters: Type.Object({
    path: Type.Object({
      orderId: Type.Number(),
    }),
  }),
  response: Type.Unknown(),
});

export type post_CreateUser = Static<typeof post_CreateUser>;
export const post_CreateUser = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/user"),
  parameters: Type.Object({
    body: User,
  }),
  response: User,
});

export type post_CreateUsersWithListInput = Static<typeof post_CreateUsersWithListInput>;
export const post_CreateUsersWithListInput = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/user/createWithList"),
  parameters: Type.Object({
    body: Type.Array(User),
  }),
  response: User,
});

export type get_LoginUser = Static<typeof get_LoginUser>;
export const get_LoginUser = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/user/login"),
  parameters: Type.Object({
    query: Type.Partial(
      Type.Object({
        username: Type.String(),
        password: Type.String(),
      }),
    ),
  }),
  response: Type.String(),
});

export type get_LogoutUser = Static<typeof get_LogoutUser>;
export const get_LogoutUser = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/user/logout"),
  parameters: Type.Never(),
  response: Type.Unknown(),
});

export type get_GetUserByName = Static<typeof get_GetUserByName>;
export const get_GetUserByName = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/user/{username}"),
  parameters: Type.Object({
    path: Type.Object({
      username: Type.String(),
    }),
  }),
  response: User,
});

export type put_UpdateUser = Static<typeof put_UpdateUser>;
export const put_UpdateUser = Type.Object({
  method: Type.Literal("PUT"),
  path: Type.Literal("/user/{username}"),
  parameters: Type.Object({
    path: Type.Object({
      username: Type.String(),
    }),
    body: User,
  }),
  response: Type.Unknown(),
});

export type delete_DeleteUser = Static<typeof delete_DeleteUser>;
export const delete_DeleteUser = Type.Object({
  method: Type.Literal("DELETE"),
  path: Type.Literal("/user/{username}"),
  parameters: Type.Object({
    path: Type.Object({
      username: Type.String(),
    }),
  }),
  response: Type.Unknown(),
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
    ...params: MaybeOptionalArg<Static<TEndpoint>["parameters"]>
  ): Promise<Static<TEndpoint>["response"]> {
    return this.fetcher("put", this.baseUrl + path, params[0]);
  }
  // </ApiClient.put>

  // <ApiClient.post>
  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<Static<TEndpoint>["parameters"]>
  ): Promise<Static<TEndpoint>["response"]> {
    return this.fetcher("post", this.baseUrl + path, params[0]);
  }
  // </ApiClient.post>

  // <ApiClient.get>
  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<Static<TEndpoint>["parameters"]>
  ): Promise<Static<TEndpoint>["response"]> {
    return this.fetcher("get", this.baseUrl + path, params[0]);
  }
  // </ApiClient.get>

  // <ApiClient.delete>
  delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<Static<TEndpoint>["parameters"]>
  ): Promise<Static<TEndpoint>["response"]> {
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
