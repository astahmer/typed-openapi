import z from "zod";

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
  status: z.union([z.literal("available"), z.literal("pending"), z.literal("sold"), z.undefined()]).optional(),
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
  parameters: z.object({
    body: Pet,
  }),
  response: Pet,
};

export type post_AddPet = typeof post_AddPet;
export const post_AddPet = {
  method: z.literal("POST"),
  path: z.literal("/pet"),
  parameters: z.object({
    body: Pet,
  }),
  response: Pet,
};

export type get_FindPetsByStatus = typeof get_FindPetsByStatus;
export const get_FindPetsByStatus = {
  method: z.literal("GET"),
  path: z.literal("/pet/findByStatus"),
  parameters: z.object({
    query: z.object({
      status: z.union([z.literal("available"), z.literal("pending"), z.literal("sold")]).optional(),
    }),
  }),
  response: z.array(Pet),
};

export type get_FindPetsByTags = typeof get_FindPetsByTags;
export const get_FindPetsByTags = {
  method: z.literal("GET"),
  path: z.literal("/pet/findByTags"),
  parameters: z.object({
    query: z.object({
      tags: z.array(z.string()).optional(),
    }),
  }),
  response: z.array(Pet),
};

export type get_GetPetById = typeof get_GetPetById;
export const get_GetPetById = {
  method: z.literal("GET"),
  path: z.literal("/pet/{petId}"),
  parameters: z.object({
    path: z.object({
      petId: z.number(),
    }),
  }),
  response: Pet,
};

export type post_UpdatePetWithForm = typeof post_UpdatePetWithForm;
export const post_UpdatePetWithForm = {
  method: z.literal("POST"),
  path: z.literal("/pet/{petId}"),
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
};

export type delete_DeletePet = typeof delete_DeletePet;
export const delete_DeletePet = {
  method: z.literal("DELETE"),
  path: z.literal("/pet/{petId}"),
  parameters: z.object({
    path: z.object({
      petId: z.number(),
    }),
    header: z.object({
      api_key: z.string().optional(),
    }),
  }),
  response: z.unknown(),
};

export type post_UploadFile = typeof post_UploadFile;
export const post_UploadFile = {
  method: z.literal("POST"),
  path: z.literal("/pet/{petId}/uploadImage"),
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
};

export type get_GetInventory = typeof get_GetInventory;
export const get_GetInventory = {
  method: z.literal("GET"),
  path: z.literal("/store/inventory"),
  parameters: z.never(),
  response: z.unknown(),
};

export type post_PlaceOrder = typeof post_PlaceOrder;
export const post_PlaceOrder = {
  method: z.literal("POST"),
  path: z.literal("/store/order"),
  parameters: z.object({
    body: Order,
  }),
  response: Order,
};

export type get_GetOrderById = typeof get_GetOrderById;
export const get_GetOrderById = {
  method: z.literal("GET"),
  path: z.literal("/store/order/{orderId}"),
  parameters: z.object({
    path: z.object({
      orderId: z.number(),
    }),
  }),
  response: Order,
};

export type delete_DeleteOrder = typeof delete_DeleteOrder;
export const delete_DeleteOrder = {
  method: z.literal("DELETE"),
  path: z.literal("/store/order/{orderId}"),
  parameters: z.object({
    path: z.object({
      orderId: z.number(),
    }),
  }),
  response: z.unknown(),
};

export type post_CreateUser = typeof post_CreateUser;
export const post_CreateUser = {
  method: z.literal("POST"),
  path: z.literal("/user"),
  parameters: z.object({
    body: User,
  }),
  response: User,
};

export type post_CreateUsersWithListInput = typeof post_CreateUsersWithListInput;
export const post_CreateUsersWithListInput = {
  method: z.literal("POST"),
  path: z.literal("/user/createWithList"),
  parameters: z.object({
    body: z.array(User),
  }),
  response: User,
};

export type get_LoginUser = typeof get_LoginUser;
export const get_LoginUser = {
  method: z.literal("GET"),
  path: z.literal("/user/login"),
  parameters: z.object({
    query: z.object({
      username: z.string().optional(),
      password: z.string().optional(),
    }),
  }),
  response: z.string(),
};

export type get_LogoutUser = typeof get_LogoutUser;
export const get_LogoutUser = {
  method: z.literal("GET"),
  path: z.literal("/user/logout"),
  parameters: z.never(),
  response: z.unknown(),
};

export type get_GetUserByName = typeof get_GetUserByName;
export const get_GetUserByName = {
  method: z.literal("GET"),
  path: z.literal("/user/{username}"),
  parameters: z.object({
    path: z.object({
      username: z.string(),
    }),
  }),
  response: User,
};

export type put_UpdateUser = typeof put_UpdateUser;
export const put_UpdateUser = {
  method: z.literal("PUT"),
  path: z.literal("/user/{username}"),
  parameters: z.object({
    path: z.object({
      username: z.string(),
    }),
    body: User,
  }),
  response: z.unknown(),
};

export type delete_DeleteUser = typeof delete_DeleteUser;
export const delete_DeleteUser = {
  method: z.literal("DELETE"),
  path: z.literal("/user/{username}"),
  parameters: z.object({
    path: z.object({
      username: z.string(),
    }),
  }),
  response: z.unknown(),
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
    ...params: MaybeOptionalArg<z.infer<TEndpoint["parameters"]>>
  ): Promise<z.infer<TEndpoint["response"]>> {
    return this.fetcher("put", this.baseUrl + path, params[0]) as Promise<TEndpoint["response"]>;
  }
  // </ApiClient.put>

  // <ApiClient.post>
  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<z.infer<TEndpoint["parameters"]>>
  ): Promise<z.infer<TEndpoint["response"]>> {
    return this.fetcher("post", this.baseUrl + path, params[0]) as Promise<TEndpoint["response"]>;
  }
  // </ApiClient.post>

  // <ApiClient.get>
  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<z.infer<TEndpoint["parameters"]>>
  ): Promise<z.infer<TEndpoint["response"]>> {
    return this.fetcher("get", this.baseUrl + path, params[0]) as Promise<TEndpoint["response"]>;
  }
  // </ApiClient.get>

  // <ApiClient.delete>
  delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<z.infer<TEndpoint["parameters"]>>
  ): Promise<z.infer<TEndpoint["response"]>> {
    return this.fetcher("delete", this.baseUrl + path, params[0]) as Promise<TEndpoint["response"]>;
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
