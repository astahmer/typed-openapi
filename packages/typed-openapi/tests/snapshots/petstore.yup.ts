import y from "yup";

export type Order = y.InferType<typeof Order>;
export const Order = y.object({
  id: y.number().required().optional(),
  petId: y.number().required().optional(),
  quantity: y.number().required().optional(),
  shipDate: y.string().required().optional(),
  status: y.mixed().oneOf(["placed", "approved", "delivered"]).required().optional(),
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
      y.mixed().oneOf(["available", "pending", "sold"]).required(),
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
  requestFormat: y.mixed((value): value is "json" => value === "json").required(),
  parameters: y.object({
    body: Pet,
  }),
  responses: y.object({
    "200": Pet,
    "400": y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
    "404": y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
    "405": y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
  }),
};

export type post_AddPet = typeof post_AddPet;
export const post_AddPet = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/pet" => value === "/pet").required(),
  requestFormat: y.mixed((value): value is "json" => value === "json").required(),
  parameters: y.object({
    body: Pet,
  }),
  responses: y.object({
    "200": Pet,
    "405": y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
  }),
};

export type get_FindPetsByStatus = typeof get_FindPetsByStatus;
export const get_FindPetsByStatus = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/pet/findByStatus" => value === "/pet/findByStatus").required(),
  requestFormat: y.mixed((value): value is "json" => value === "json").required(),
  parameters: y.object({
    query: y.object({
      status: y.mixed().oneOf(["available", "pending", "sold"]).required().optional(),
    }),
  }),
  responses: y.object({
    "200": y.array(Pet),
    "400": y.object({
      code: y.number().required(),
      message: y.string().required(),
    }),
  }),
};

export type get_FindPetsByTags = typeof get_FindPetsByTags;
export const get_FindPetsByTags = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/pet/findByTags" => value === "/pet/findByTags").required(),
  requestFormat: y.mixed((value): value is "json" => value === "json").required(),
  parameters: y.object({
    query: y.object({
      tags: y.array(y.string().required()).optional(),
    }),
  }),
  responses: y.object({
    "200": y.array(Pet),
    "400": y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
  }),
};

export type get_GetPetById = typeof get_GetPetById;
export const get_GetPetById = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/pet/{petId}" => value === "/pet/{petId}").required(),
  requestFormat: y.mixed((value): value is "json" => value === "json").required(),
  parameters: y.object({
    path: y.object({
      petId: y.number().required(),
    }),
  }),
  responses: y.object({
    "200": Pet,
    "400": y.object({
      code: y.number().required(),
      message: y.string().required(),
    }),
    "404": y.object({
      code: y.number().required(),
      message: y.string().required(),
    }),
  }),
};

export type post_UpdatePetWithForm = typeof post_UpdatePetWithForm;
export const post_UpdatePetWithForm = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/pet/{petId}" => value === "/pet/{petId}").required(),
  requestFormat: y.mixed((value): value is "json" => value === "json").required(),
  parameters: y.object({
    query: y.object({
      name: y.string().required().optional(),
      status: y.string().required().optional(),
    }),
    path: y.object({
      petId: y.number().required(),
    }),
  }),
  responses: y.object({
    "405": y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
  }),
};

export type delete_DeletePet = typeof delete_DeletePet;
export const delete_DeletePet = {
  method: y.mixed((value): value is "DELETE" => value === "DELETE").required(),
  path: y.mixed((value): value is "/pet/{petId}" => value === "/pet/{petId}").required(),
  requestFormat: y.mixed((value): value is "json" => value === "json").required(),
  parameters: y.object({
    path: y.object({
      petId: y.number().required(),
    }),
    header: y.object({
      api_key: y.string().required().optional(),
    }),
  }),
  responses: y.object({
    "400": y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
  }),
};

export type post_UploadFile = typeof post_UploadFile;
export const post_UploadFile = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/pet/{petId}/uploadImage" => value === "/pet/{petId}/uploadImage").required(),
  requestFormat: y.mixed((value): value is "binary" => value === "binary").required(),
  parameters: y.object({
    query: y.object({
      additionalMetadata: y.string().required().optional(),
    }),
    path: y.object({
      petId: y.number().required(),
    }),
    body: y.string().required(),
  }),
  responses: y.object({
    "200": ApiResponse,
  }),
};

export type get_GetInventory = typeof get_GetInventory;
export const get_GetInventory = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/store/inventory" => value === "/store/inventory").required(),
  requestFormat: y.mixed((value): value is "json" => value === "json").required(),
  parameters: y.mixed((value): value is never => false).required(),
  responses: y.object({
    "200": y.mixed(/* unsupported */),
  }),
};

export type post_PlaceOrder = typeof post_PlaceOrder;
export const post_PlaceOrder = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/store/order" => value === "/store/order").required(),
  requestFormat: y.mixed((value): value is "json" => value === "json").required(),
  parameters: y.object({
    body: Order,
  }),
  responses: y.object({
    "200": Order,
    "405": y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
  }),
};

export type get_GetOrderById = typeof get_GetOrderById;
export const get_GetOrderById = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/store/order/{orderId}" => value === "/store/order/{orderId}").required(),
  requestFormat: y.mixed((value): value is "json" => value === "json").required(),
  parameters: y.object({
    path: y.object({
      orderId: y.number().required(),
    }),
  }),
  responses: y.object({
    "200": Order,
    "400": y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
    "404": y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
  }),
};

export type delete_DeleteOrder = typeof delete_DeleteOrder;
export const delete_DeleteOrder = {
  method: y.mixed((value): value is "DELETE" => value === "DELETE").required(),
  path: y.mixed((value): value is "/store/order/{orderId}" => value === "/store/order/{orderId}").required(),
  requestFormat: y.mixed((value): value is "json" => value === "json").required(),
  parameters: y.object({
    path: y.object({
      orderId: y.number().required(),
    }),
  }),
  responses: y.object({
    "400": y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
    "404": y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
  }),
};

export type post_CreateUser = typeof post_CreateUser;
export const post_CreateUser = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/user" => value === "/user").required(),
  requestFormat: y.mixed((value): value is "json" => value === "json").required(),
  parameters: y.object({
    body: User,
  }),
  responses: y.object({
    default: User,
  }),
};

export type post_CreateUsersWithListInput = typeof post_CreateUsersWithListInput;
export const post_CreateUsersWithListInput = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/user/createWithList" => value === "/user/createWithList").required(),
  requestFormat: y.mixed((value): value is "json" => value === "json").required(),
  parameters: y.object({
    body: y.array(User),
  }),
  responses: y.object({
    "200": User,
    default: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
  }),
};

export type get_LoginUser = typeof get_LoginUser;
export const get_LoginUser = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/user/login" => value === "/user/login").required(),
  requestFormat: y.mixed((value): value is "json" => value === "json").required(),
  parameters: y.object({
    query: y.object({
      username: y.string().required().optional(),
      password: y.string().required().optional(),
    }),
  }),
  responses: y.object({
    "200": y.string().required(),
    "400": y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
  }),
  responseHeaders: y.object({
    "200": y.object({
      "X-Rate-Limit": y.number().required(),
      "X-Expires-After": y.string().required(),
    }),
  }),
};

export type get_LogoutUser = typeof get_LogoutUser;
export const get_LogoutUser = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/user/logout" => value === "/user/logout").required(),
  requestFormat: y.mixed((value): value is "json" => value === "json").required(),
  parameters: y.mixed((value): value is never => false).required(),
  responses: y.object({
    default: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
  }),
};

export type get_GetUserByName = typeof get_GetUserByName;
export const get_GetUserByName = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/user/{username}" => value === "/user/{username}").required(),
  requestFormat: y.mixed((value): value is "json" => value === "json").required(),
  parameters: y.object({
    path: y.object({
      username: y.string().required(),
    }),
  }),
  responses: y.object({
    "200": User,
    "400": y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
    "404": y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
  }),
};

export type put_UpdateUser = typeof put_UpdateUser;
export const put_UpdateUser = {
  method: y.mixed((value): value is "PUT" => value === "PUT").required(),
  path: y.mixed((value): value is "/user/{username}" => value === "/user/{username}").required(),
  requestFormat: y.mixed((value): value is "json" => value === "json").required(),
  parameters: y.object({
    path: y.object({
      username: y.string().required(),
    }),
    body: User,
  }),
  responses: y.object({
    default: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
  }),
};

export type delete_DeleteUser = typeof delete_DeleteUser;
export const delete_DeleteUser = {
  method: y.mixed((value): value is "DELETE" => value === "DELETE").required(),
  path: y.mixed((value): value is "/user/{username}" => value === "/user/{username}").required(),
  requestFormat: y.mixed((value): value is "json" => value === "json").required(),
  parameters: y.object({
    path: y.object({
      username: y.string().required(),
    }),
  }),
  responses: y.object({
    "400": y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
    "404": y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
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
export interface TypedSuccessResponse<TSuccess, TStatusCode> extends Omit<Response, "ok" | "status" | "json"> {
  ok: true;
  status: TStatusCode;
  data: TSuccess;
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) */
  json: () => Promise<TSuccess>;
}

/** @see https://developer.mozilla.org/en-US/docs/Web/API/Response */
export interface TypedErrorResponse<TData, TStatusCode> extends Omit<Response, "ok" | "status" | "json"> {
  ok: false;
  status: TStatusCode;
  data: TData;
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) */
  json: () => Promise<TData>;
}

export type TypedApiResponse<TAllResponses extends Record<string | number, unknown> = {}> = {
  [K in keyof TAllResponses]: K extends string
    ? K extends `${infer TStatusCode extends number}`
      ? TStatusCode extends SuccessStatusCode
        ? TypedSuccessResponse<TAllResponses[K], TStatusCode>
        : TypedErrorResponse<TAllResponses[K], TStatusCode>
      : never
    : K extends number
      ? K extends SuccessStatusCode
        ? TypedSuccessResponse<TAllResponses[K], K>
        : TypedErrorResponse<TAllResponses[K], K>
      : never;
}[keyof TAllResponses];

export type SafeApiResponse<TEndpoint> = TEndpoint extends { responses: infer TResponses }
  ? TResponses extends Record<string, unknown>
    ? TypedApiResponse<TResponses>
    : never
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
  response: TypedErrorResponse<unknown, ErrorStatusCode>;
  status: number;
  constructor(response: TypedErrorResponse<unknown, ErrorStatusCode>) {
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
      y.InferType<TEndpoint["parameters"]> & { withResponse?: false; throwOnStatusError?: boolean }
    >
  ): Promise<y.InferType<InferResponseByStatus<TEndpoint, SuccessStatusCode>>>;

  put<Path extends keyof PutEndpoints, TEndpoint extends PutEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      y.InferType<TEndpoint["parameters"]> & { withResponse: true; throwOnStatusError?: boolean }
    >
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

    return promise as Promise<y.InferType<InferResponseByStatus<TEndpoint, SuccessStatusCode>>>;
  }
  // </ApiClient.put>

  // <ApiClient.post>
  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      y.InferType<TEndpoint["parameters"]> & { withResponse?: false; throwOnStatusError?: boolean }
    >
  ): Promise<y.InferType<InferResponseByStatus<TEndpoint, SuccessStatusCode>>>;

  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      y.InferType<TEndpoint["parameters"]> & { withResponse: true; throwOnStatusError?: boolean }
    >
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

    return promise as Promise<y.InferType<InferResponseByStatus<TEndpoint, SuccessStatusCode>>>;
  }
  // </ApiClient.post>

  // <ApiClient.get>
  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      y.InferType<TEndpoint["parameters"]> & { withResponse?: false; throwOnStatusError?: boolean }
    >
  ): Promise<y.InferType<InferResponseByStatus<TEndpoint, SuccessStatusCode>>>;

  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      y.InferType<TEndpoint["parameters"]> & { withResponse: true; throwOnStatusError?: boolean }
    >
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

    return promise as Promise<y.InferType<InferResponseByStatus<TEndpoint, SuccessStatusCode>>>;
  }
  // </ApiClient.get>

  // <ApiClient.delete>
  delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      y.InferType<TEndpoint["parameters"]> & { withResponse?: false; throwOnStatusError?: boolean }
    >
  ): Promise<y.InferType<InferResponseByStatus<TEndpoint, SuccessStatusCode>>>;

  delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      y.InferType<TEndpoint["parameters"]> & { withResponse: true; throwOnStatusError?: boolean }
    >
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

    return promise as Promise<y.InferType<InferResponseByStatus<TEndpoint, SuccessStatusCode>>>;
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
    ...params: MaybeOptionalArg<y.InferType<TEndpoint extends { parameters: infer Params } ? Params : never>>
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
