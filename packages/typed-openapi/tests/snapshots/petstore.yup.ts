import y from "yup";

export type Order = y.InferType<typeof Order>;
export const Order = y.object({
  id: y.number().required().optional(),
  petId: y.number().required().optional(),
  quantity: y.number().required().optional(),
  shipDate: y.string().required().optional(),
  status: y
    .mixed()
    .oneOf([
      y.mixed((value): value is "placed" => value === "placed").required(),
      y.mixed((value): value is "approved" => value === "approved").required(),
      y.mixed((value): value is "delivered" => value === "delivered").required(),
    ])
    .required()
    .optional(),
  complete: y.boolean().required().optional(),
});

export type Address = y.InferType<typeof Address>;
export const Address = y.object({
  street: y.string().required().optional(),
  city: y.string().required().optional(),
  state: y.string().required().optional(),
  zip: y.string().required().optional(),
});

export type Customer = y.InferType<typeof Customer>;
export const Customer = y.object({
  id: y.number().required().optional(),
  username: y.string().required().optional(),
  address: y.array(Address).optional(),
});

export type Category = y.InferType<typeof Category>;
export const Category = y.object({
  id: y.number().required().optional(),
  name: y.string().required().optional(),
});

export type User = y.InferType<typeof User>;
export const User = y.object({
  id: y.number().required().optional(),
  username: y.string().required().optional(),
  firstName: y.string().required().optional(),
  lastName: y.string().required().optional(),
  email: y.string().required().optional(),
  password: y.string().required().optional(),
  phone: y.string().required().optional(),
  userStatus: y.number().required().optional(),
});

export type Tag = y.InferType<typeof Tag>;
export const Tag = y.object({
  id: y.number().required().optional(),
  name: y.string().required().optional(),
});

export type Pet = y.InferType<typeof Pet>;
export const Pet = y.object({
  id: y
    .mixed()
    .oneOf([y.number().required(), y.mixed((value): value is any => value === undefined) as y.MixedSchema<undefined>])
    .required()
    .optional(),
  name: y.string().required(),
  category: y
    .mixed()
    .oneOf([Category, y.mixed((value): value is any => value === undefined) as y.MixedSchema<undefined>])
    .required()
    .optional(),
  photoUrls: y.array(y.string().required()),
  tags: y
    .mixed()
    .oneOf([y.array(Tag), y.mixed((value): value is any => value === undefined) as y.MixedSchema<undefined>])
    .required()
    .optional(),
  status: y
    .mixed()
    .oneOf([
      y.mixed((value): value is "available" => value === "available").required(),
      y.mixed((value): value is "pending" => value === "pending").required(),
      y.mixed((value): value is "sold" => value === "sold").required(),
      y.mixed((value): value is any => value === undefined) as y.MixedSchema<undefined>,
    ])
    .required()
    .optional(),
});

export type ApiResponse = y.InferType<typeof ApiResponse>;
export const ApiResponse = y.object({
  code: y.number().required().optional(),
  type: y.string().required().optional(),
  message: y.string().required().optional(),
});

export type put_UpdatePet = typeof put_UpdatePet;
export const put_UpdatePet = {
  method: y.mixed((value): value is "PUT" => value === "PUT").required(),
  path: y.mixed((value): value is "/pet" => value === "/pet").required(),
  parameters: y.object({
    body: Pet,
  }),
  response: Pet,
};

export type post_AddPet = typeof post_AddPet;
export const post_AddPet = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/pet" => value === "/pet").required(),
  parameters: y.object({
    body: Pet,
  }),
  response: Pet,
};

export type get_FindPetsByStatus = typeof get_FindPetsByStatus;
export const get_FindPetsByStatus = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/pet/findByStatus" => value === "/pet/findByStatus").required(),
  parameters: y.object({
    query: y.object({
      status: y
        .mixed()
        .oneOf([
          y.mixed((value): value is "available" => value === "available").required(),
          y.mixed((value): value is "pending" => value === "pending").required(),
          y.mixed((value): value is "sold" => value === "sold").required(),
        ])
        .required()
        .optional(),
    }),
  }),
  response: y.array(Pet),
};

export type get_FindPetsByTags = typeof get_FindPetsByTags;
export const get_FindPetsByTags = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/pet/findByTags" => value === "/pet/findByTags").required(),
  parameters: y.object({
    query: y.object({
      tags: y.array(y.string().required()).optional(),
    }),
  }),
  response: y.array(Pet),
};

export type get_GetPetById = typeof get_GetPetById;
export const get_GetPetById = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/pet/{petId}" => value === "/pet/{petId}").required(),
  parameters: y.object({
    path: y.object({
      petId: y.number().required(),
    }),
  }),
  response: Pet,
};

export type post_UpdatePetWithForm = typeof post_UpdatePetWithForm;
export const post_UpdatePetWithForm = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/pet/{petId}" => value === "/pet/{petId}").required(),
  parameters: y.object({
    query: y.object({
      name: y.string().required().optional(),
      status: y.string().required().optional(),
    }),
    path: y.object({
      petId: y.number().required(),
    }),
  }),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type delete_DeletePet = typeof delete_DeletePet;
export const delete_DeletePet = {
  method: y.mixed((value): value is "DELETE" => value === "DELETE").required(),
  path: y.mixed((value): value is "/pet/{petId}" => value === "/pet/{petId}").required(),
  parameters: y.object({
    path: y.object({
      petId: y.number().required(),
    }),
    header: y.object({
      api_key: y.string().required().optional(),
    }),
  }),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type post_UploadFile = typeof post_UploadFile;
export const post_UploadFile = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/pet/{petId}/uploadImage" => value === "/pet/{petId}/uploadImage").required(),
  parameters: y.object({
    query: y.object({
      additionalMetadata: y.string().required().optional(),
    }),
    path: y.object({
      petId: y.number().required(),
    }),
    body: y.string().required(),
  }),
  response: ApiResponse,
};

export type get_GetInventory = typeof get_GetInventory;
export const get_GetInventory = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/store/inventory" => value === "/store/inventory").required(),
  parameters: y.mixed((value): value is never => false).required(),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type post_PlaceOrder = typeof post_PlaceOrder;
export const post_PlaceOrder = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/store/order" => value === "/store/order").required(),
  parameters: y.object({
    body: Order,
  }),
  response: Order,
};

export type get_GetOrderById = typeof get_GetOrderById;
export const get_GetOrderById = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/store/order/{orderId}" => value === "/store/order/{orderId}").required(),
  parameters: y.object({
    path: y.object({
      orderId: y.number().required(),
    }),
  }),
  response: Order,
};

export type delete_DeleteOrder = typeof delete_DeleteOrder;
export const delete_DeleteOrder = {
  method: y.mixed((value): value is "DELETE" => value === "DELETE").required(),
  path: y.mixed((value): value is "/store/order/{orderId}" => value === "/store/order/{orderId}").required(),
  parameters: y.object({
    path: y.object({
      orderId: y.number().required(),
    }),
  }),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type post_CreateUser = typeof post_CreateUser;
export const post_CreateUser = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/user" => value === "/user").required(),
  parameters: y.object({
    body: User,
  }),
  response: User,
};

export type post_CreateUsersWithListInput = typeof post_CreateUsersWithListInput;
export const post_CreateUsersWithListInput = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/user/createWithList" => value === "/user/createWithList").required(),
  parameters: y.object({
    body: y.array(User),
  }),
  response: User,
};

export type get_LoginUser = typeof get_LoginUser;
export const get_LoginUser = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/user/login" => value === "/user/login").required(),
  parameters: y.object({
    query: y.object({
      username: y.string().required().optional(),
      password: y.string().required().optional(),
    }),
  }),
  response: y.string().required(),
};

export type get_LogoutUser = typeof get_LogoutUser;
export const get_LogoutUser = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/user/logout" => value === "/user/logout").required(),
  parameters: y.mixed((value): value is never => false).required(),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type get_GetUserByName = typeof get_GetUserByName;
export const get_GetUserByName = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/user/{username}" => value === "/user/{username}").required(),
  parameters: y.object({
    path: y.object({
      username: y.string().required(),
    }),
  }),
  response: User,
};

export type put_UpdateUser = typeof put_UpdateUser;
export const put_UpdateUser = {
  method: y.mixed((value): value is "PUT" => value === "PUT").required(),
  path: y.mixed((value): value is "/user/{username}" => value === "/user/{username}").required(),
  parameters: y.object({
    path: y.object({
      username: y.string().required(),
    }),
    body: User,
  }),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type delete_DeleteUser = typeof delete_DeleteUser;
export const delete_DeleteUser = {
  method: y.mixed((value): value is "DELETE" => value === "DELETE").required(),
  path: y.mixed((value): value is "/user/{username}" => value === "/user/{username}").required(),
  parameters: y.object({
    path: y.object({
      username: y.string().required(),
    }),
  }),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
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
    ...params: MaybeOptionalArg<y.InferType<TEndpoint["parameters"]>>
  ): Promise<y.InferType<TEndpoint["response"]>> {
    return this.fetcher("put", this.baseUrl + path, params[0]);
  }
  // </ApiClient.put>

  // <ApiClient.post>
  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<y.InferType<TEndpoint["parameters"]>>
  ): Promise<y.InferType<TEndpoint["response"]>> {
    return this.fetcher("post", this.baseUrl + path, params[0]);
  }
  // </ApiClient.post>

  // <ApiClient.get>
  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<y.InferType<TEndpoint["parameters"]>>
  ): Promise<y.InferType<TEndpoint["response"]>> {
    return this.fetcher("get", this.baseUrl + path, params[0]);
  }
  // </ApiClient.get>

  // <ApiClient.delete>
  delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<y.InferType<TEndpoint["parameters"]>>
  ): Promise<y.InferType<TEndpoint["response"]>> {
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
