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
    "304": y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
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
    "200": y
      .mixed()
      .oneOf([y.array(Pet), y.array(User), y.array(Tag)])
      .required(),
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
    "400": y.object({
      "X-Error": y.string().required(),
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
    "201": y.object({
      id: y.number().required(),
      username: y.string().required(),
    }),
    "400": y.object({
      code: y.number().required(),
      message: y.string().required(),
    }),
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

export type get_GetPetTextPlain = typeof get_GetPetTextPlain;
export const get_GetPetTextPlain = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/pet/text" => value === "/pet/text").required(),
  requestFormat: y.mixed((value): value is "json" => value === "json").required(),
  parameters: y.mixed((value): value is never => false).required(),
  responses: y.object({
    "200": User,
  }),
};

export type get_GetPetEmpty = typeof get_GetPetEmpty;
export const get_GetPetEmpty = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/pet/empty" => value === "/pet/empty").required(),
  requestFormat: y.mixed((value): value is "json" => value === "json").required(),
  parameters: y.mixed((value): value is never => false).required(),
  responses: y.object({
    "204": y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
  }),
};

export type get_GetPetCustom = typeof get_GetPetCustom;
export const get_GetPetCustom = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/pet/custom" => value === "/pet/custom").required(),
  requestFormat: y.mixed((value): value is "json" => value === "json").required(),
  parameters: y.mixed((value): value is never => false).required(),
  responses: y.object({
    "200": Pet,
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
    "/pet/text": get_GetPetTextPlain,
    "/pet/empty": get_GetPetEmpty,
    "/pet/custom": get_GetPetCustom,
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

export interface Fetcher {
  decodePathParams?: (path: string, pathParams: Record<string, string>) => string;
  encodeSearchParams?: (searchParams: Record<string, unknown> | undefined) => URLSearchParams;
  //
  fetch: (input: {
    method: Method;
    url: URL;
    urlSearchParams?: URLSearchParams | undefined;
    parameters?: EndpointParameters | undefined;
    path: string;
    overrides?: RequestInit;
    throwOnStatusError?: boolean;
  }) => Promise<Response>;
  parseResponseData?: (response: Response) => Promise<unknown>;
}

export const successStatusCodes = [
  200, 201, 202, 203, 204, 205, 206, 207, 208, 226, 300, 301, 302, 303, 304, 305, 306, 307, 308,
] as const;
export type SuccessStatusCode = (typeof successStatusCodes)[number];

export const errorStatusCodes = [
  400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 421, 422, 423, 424,
  425, 426, 428, 429, 431, 451, 500, 501, 502, 503, 504, 505, 506, 507, 508, 510, 511,
] as const;
export type ErrorStatusCode = (typeof errorStatusCodes)[number];

// Taken from https://github.com/unjs/fetchdts/blob/ec4eaeab5d287116171fc1efd61f4a1ad34e4609/src/fetch.ts#L3
export interface TypedHeaders<TypedHeaderValues extends Record<string, string> | unknown>
  extends Omit<Headers, "append" | "delete" | "get" | "getSetCookie" | "has" | "set" | "forEach"> {
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/append) */
  append: <Name extends Extract<keyof TypedHeaderValues, string> | (string & {})>(
    name: Name,
    value: Lowercase<Name> extends keyof TypedHeaderValues ? TypedHeaderValues[Lowercase<Name>] : string,
  ) => void;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/delete) */
  delete: <Name extends Extract<keyof TypedHeaderValues, string> | (string & {})>(name: Name) => void;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/get) */
  get: <Name extends Extract<keyof TypedHeaderValues, string> | (string & {})>(
    name: Name,
  ) => (Lowercase<Name> extends keyof TypedHeaderValues ? TypedHeaderValues[Lowercase<Name>] : string) | null;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/getSetCookie) */
  getSetCookie: () => string[];
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/has) */
  has: <Name extends Extract<keyof TypedHeaderValues, string> | (string & {})>(name: Name) => boolean;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/set) */
  set: <Name extends Extract<keyof TypedHeaderValues, string> | (string & {})>(
    name: Name,
    value: Lowercase<Name> extends keyof TypedHeaderValues ? TypedHeaderValues[Lowercase<Name>] : string,
  ) => void;
  forEach: (
    callbackfn: (
      value: TypedHeaderValues[keyof TypedHeaderValues] | (string & {}),
      key: Extract<keyof TypedHeaderValues, string> | (string & {}),
      parent: TypedHeaders<TypedHeaderValues>,
    ) => void,
    thisArg?: any,
  ) => void;
}

/** @see https://developer.mozilla.org/en-US/docs/Web/API/Response */
export interface TypedSuccessResponse<TSuccess, TStatusCode, THeaders>
  extends Omit<Response, "ok" | "status" | "json" | "headers"> {
  ok: true;
  status: TStatusCode;
  headers: never extends THeaders ? Headers : TypedHeaders<THeaders>;
  data: TSuccess;
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) */
  json: () => Promise<TSuccess>;
}

/** @see https://developer.mozilla.org/en-US/docs/Web/API/Response */
export interface TypedErrorResponse<TData, TStatusCode, THeaders>
  extends Omit<Response, "ok" | "status" | "json" | "headers"> {
  ok: false;
  status: TStatusCode;
  headers: never extends THeaders ? Headers : TypedHeaders<THeaders>;
  data: TData;
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) */
  json: () => Promise<TData>;
}

export type TypedApiResponse<TAllResponses extends Record<string | number, unknown> = {}, THeaders = {}> = {
  [K in keyof TAllResponses]: K extends string
    ? K extends `${infer TStatusCode extends number}`
      ? TStatusCode extends SuccessStatusCode
        ? TypedSuccessResponse<TAllResponses[K], TStatusCode, K extends keyof THeaders ? THeaders[K] : never>
        : TypedErrorResponse<TAllResponses[K], TStatusCode, K extends keyof THeaders ? THeaders[K] : never>
      : never
    : K extends number
      ? K extends SuccessStatusCode
        ? TypedSuccessResponse<TAllResponses[K], K, K extends keyof THeaders ? THeaders[K] : never>
        : TypedErrorResponse<TAllResponses[K], K, K extends keyof THeaders ? THeaders[K] : never>
      : never;
}[keyof TAllResponses];

export type SafeApiResponse<TEndpoint> = TEndpoint extends { responses: infer TResponses }
  ? TResponses extends Record<string, unknown>
    ? TypedApiResponse<TResponses, TEndpoint extends { responseHeaders: infer THeaders } ? THeaders : never>
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
type NotNever<T> = [T] extends [never] ? false : true;

// </ApiClientTypes>

// <TypedResponseError>
export class TypedResponseError extends Error {
  response: TypedErrorResponse<unknown, ErrorStatusCode, unknown>;
  status: number;
  constructor(response: TypedErrorResponse<unknown, ErrorStatusCode, unknown>) {
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

  /**
   * Replace path parameters in URL
   * Supports both OpenAPI format {param} and Express format :param
   */
  defaultDecodePathParams = (url: string, params: Record<string, string>): string => {
    return url
      .replace(/{(\w+)}/g, (_, key: string) => params[key] || `{${key}}`)
      .replace(/:([a-zA-Z0-9_]+)/g, (_, key: string) => params[key] || `:${key}`);
  };

  /** Uses URLSearchParams, skips null/undefined values */
  defaultEncodeSearchParams = (queryParams: Record<string, unknown> | undefined): URLSearchParams | undefined => {
    if (!queryParams) return;

    const searchParams = new URLSearchParams();
    Object.entries(queryParams).forEach(([key, value]) => {
      if (value != null) {
        // Skip null/undefined values
        if (Array.isArray(value)) {
          value.forEach((val) => val != null && searchParams.append(key, String(val)));
        } else {
          searchParams.append(key, String(value));
        }
      }
    });

    return searchParams;
  };

  defaultParseResponseData = async (response: Response): Promise<unknown> => {
    const contentType = response.headers.get("content-type") ?? "";
    if (contentType.startsWith("text/")) {
      return await response.text();
    }

    if (contentType === "application/octet-stream") {
      return await response.arrayBuffer();
    }

    if (
      contentType.includes("application/json") ||
      (contentType.includes("application/") && contentType.includes("json")) ||
      contentType === "*/*"
    ) {
      try {
        return await response.json();
      } catch {
        return undefined;
      }
    }

    return;
  };

  // <ApiClient.put>
  put<Path extends keyof PutEndpoints, TEndpoint extends PutEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      TEndpoint extends { parameters: infer UParams }
        ? NotNever<UParams> extends true
          ? UParams & { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
        : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
    >
  ): Promise<Extract<InferResponseByStatus<y.InferType<TEndpoint>, SuccessStatusCode>, { data: {} }>["data"]>;

  put<Path extends keyof PutEndpoints, TEndpoint extends PutEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      TEndpoint extends { parameters: infer UParams }
        ? NotNever<UParams> extends true
          ? UParams & { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
        : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
    >
  ): Promise<SafeApiResponse<TEndpoint>>;

  put<Path extends keyof PutEndpoints, _TEndpoint extends PutEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<any>
  ): Promise<any> {
    return this.request("put", path, ...params);
  }
  // </ApiClient.put>

  // <ApiClient.post>
  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      TEndpoint extends { parameters: infer UParams }
        ? NotNever<UParams> extends true
          ? UParams & { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
        : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
    >
  ): Promise<Extract<InferResponseByStatus<y.InferType<TEndpoint>, SuccessStatusCode>, { data: {} }>["data"]>;

  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      TEndpoint extends { parameters: infer UParams }
        ? NotNever<UParams> extends true
          ? UParams & { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
        : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
    >
  ): Promise<SafeApiResponse<TEndpoint>>;

  post<Path extends keyof PostEndpoints, _TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<any>
  ): Promise<any> {
    return this.request("post", path, ...params);
  }
  // </ApiClient.post>

  // <ApiClient.get>
  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      TEndpoint extends { parameters: infer UParams }
        ? NotNever<UParams> extends true
          ? UParams & { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
        : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
    >
  ): Promise<Extract<InferResponseByStatus<y.InferType<TEndpoint>, SuccessStatusCode>, { data: {} }>["data"]>;

  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      TEndpoint extends { parameters: infer UParams }
        ? NotNever<UParams> extends true
          ? UParams & { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
        : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
    >
  ): Promise<SafeApiResponse<TEndpoint>>;

  get<Path extends keyof GetEndpoints, _TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<any>
  ): Promise<any> {
    return this.request("get", path, ...params);
  }
  // </ApiClient.get>

  // <ApiClient.delete>
  delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      TEndpoint extends { parameters: infer UParams }
        ? NotNever<UParams> extends true
          ? UParams & { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
        : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
    >
  ): Promise<Extract<InferResponseByStatus<y.InferType<TEndpoint>, SuccessStatusCode>, { data: {} }>["data"]>;

  delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      TEndpoint extends { parameters: infer UParams }
        ? NotNever<UParams> extends true
          ? UParams & { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
        : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
    >
  ): Promise<SafeApiResponse<TEndpoint>>;

  delete<Path extends keyof DeleteEndpoints, _TEndpoint extends DeleteEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<any>
  ): Promise<any> {
    return this.request("delete", path, ...params);
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
    ...params: MaybeOptionalArg<
      TEndpoint extends { parameters: infer UParams }
        ? NotNever<UParams> extends true
          ? UParams & { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
        : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
    >
  ): Promise<Extract<InferResponseByStatus<y.InferType<TEndpoint>, SuccessStatusCode>, { data: {} }>["data"]>;

  request<
    TMethod extends keyof EndpointByMethod,
    TPath extends keyof EndpointByMethod[TMethod],
    TEndpoint extends EndpointByMethod[TMethod][TPath],
  >(
    method: TMethod,
    path: TPath,
    ...params: MaybeOptionalArg<
      TEndpoint extends { parameters: infer UParams }
        ? NotNever<UParams> extends true
          ? UParams & { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
        : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
    >
  ): Promise<SafeApiResponse<TEndpoint>>;

  request<
    TMethod extends keyof EndpointByMethod,
    TPath extends keyof EndpointByMethod[TMethod],
    TEndpoint extends EndpointByMethod[TMethod][TPath],
  >(method: TMethod, path: TPath, ...params: MaybeOptionalArg<any>): Promise<any> {
    const requestParams = params[0];
    const withResponse = requestParams?.withResponse;
    const {
      withResponse: _,
      throwOnStatusError = withResponse ? false : true,
      overrides,
      ...fetchParams
    } = requestParams || {};

    const parametersToSend: EndpointParameters = {};
    if (requestParams?.body !== undefined) (parametersToSend as any).body = requestParams.body;
    if (requestParams?.query !== undefined) (parametersToSend as any).query = requestParams.query;
    if (requestParams?.header !== undefined) (parametersToSend as any).header = requestParams.header;
    if (requestParams?.path !== undefined) (parametersToSend as any).path = requestParams.path;

    const resolvedPath = (this.fetcher.decodePathParams ?? this.defaultDecodePathParams)(
      this.baseUrl + (path as string),
      (parametersToSend.path ?? {}) as Record<string, string>,
    );
    const url = new URL(resolvedPath);
    const urlSearchParams = (this.fetcher.encodeSearchParams ?? this.defaultEncodeSearchParams)(parametersToSend.query);

    const promise = this.fetcher
      .fetch({
        method: method,
        path: path as string,
        url,
        urlSearchParams,
        parameters: Object.keys(fetchParams).length ? fetchParams : undefined,
        overrides,
        throwOnStatusError,
      })
      .then(async (response) => {
        const data = await (this.fetcher.parseResponseData ?? this.defaultParseResponseData)(response);
        const typedResponse = Object.assign(response, {
          data: data,
          json: () => Promise.resolve(data),
        }) as SafeApiResponse<TEndpoint>;

        if (throwOnStatusError && errorStatusCodes.includes(response.status as never)) {
          throw new TypedResponseError(typedResponse as never);
        }

        return withResponse ? typedResponse : data;
      });

    return promise as Extract<InferResponseByStatus<y.InferType<TEndpoint>, SuccessStatusCode>, { data: {} }>["data"];
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
