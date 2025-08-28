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
    responses: type({
      "200": "Pet[]",
      "304": "unknown",
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
    responses: type({
      "200": "Pet[] | User[] | Tag[]",
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
    responses: type({
      "200": "ApiResponse",
    }),
  }),
  get_GetInventory: type({
    method: '"GET"',
    path: '"/store/inventory"',
    requestFormat: '"json"',
    parameters: "never",
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
    responses: type({
      "200": "string",
      "400": "unknown",
    }),
    responseHeaders: type({
      "200": type({
        "X-Rate-Limit": "number",
        "X-Expires-After": "string",
      }),
      "400": type({
        "X-Error": "string",
      }),
    }),
  }),
  get_LogoutUser: type({
    method: '"GET"',
    path: '"/user/logout"',
    requestFormat: '"json"',
    parameters: "never",
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
    responses: type({
      "200": "User",
      "201": type({
        id: "number",
        username: "string",
      }),
      "400": type({
        code: "number",
        message: "string",
      }),
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
    responses: type({
      "400": "unknown",
      "404": "unknown",
    }),
  }),
  get_GetPetTextPlain: type({
    method: '"GET"',
    path: '"/pet/text"',
    requestFormat: '"json"',
    parameters: "never",
    responses: type({
      "200": "User",
    }),
  }),
  get_GetPetEmpty: type({
    method: '"GET"',
    path: '"/pet/empty"',
    requestFormat: '"json"',
    parameters: "never",
    responses: type({
      "204": "unknown",
    }),
  }),
  get_GetPetCustom: type({
    method: '"GET"',
    path: '"/pet/custom"',
    requestFormat: '"json"',
    parameters: "never",
    responses: type({
      "200": "Pet",
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
export type get_GetPetTextPlain = typeof get_GetPetTextPlain.infer;
export const get_GetPetTextPlain = types.get_GetPetTextPlain;
export type get_GetPetEmpty = typeof get_GetPetEmpty.infer;
export const get_GetPetEmpty = types.get_GetPetEmpty;
export type get_GetPetCustom = typeof get_GetPetCustom.infer;
export const get_GetPetCustom = types.get_GetPetCustom;
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
  ): Promise<Extract<InferResponseByStatus<TEndpoint["infer"], SuccessStatusCode>, { data: {} }>["data"]>;

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
  ): Promise<Extract<InferResponseByStatus<TEndpoint["infer"], SuccessStatusCode>, { data: {} }>["data"]>;

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
  ): Promise<Extract<InferResponseByStatus<TEndpoint["infer"], SuccessStatusCode>, { data: {} }>["data"]>;

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
  ): Promise<Extract<InferResponseByStatus<TEndpoint["infer"], SuccessStatusCode>, { data: {} }>["data"]>;

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
  ): Promise<Extract<InferResponseByStatus<TEndpoint["infer"], SuccessStatusCode>, { data: {} }>["data"]>;

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

    return promise as Extract<InferResponseByStatus<TEndpoint["infer"], SuccessStatusCode>, { data: {} }>["data"];
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
