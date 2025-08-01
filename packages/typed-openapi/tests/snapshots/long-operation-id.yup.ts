import y from "yup";

export type get_Get_users = typeof get_Get_users;
export const get_Get_users = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/users" => value === "/users").required(),
  requestFormat: y.mixed((value): value is "json" => value === "json").required(),
  parameters: y.mixed((value): value is never => false).required(),
  response: y.array(y.string().required()),
  responses: y.object({
    "200": y.array(y.string().required()),
  }),
};

export type post_Very_very_very_very_very_very_very_very_very_very_long =
  typeof post_Very_very_very_very_very_very_very_very_very_very_long;
export const post_Very_very_very_very_very_very_very_very_very_very_long = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/users" => value === "/users").required(),
  requestFormat: y.mixed((value): value is "json" => value === "json").required(),
  parameters: y.object({
    body: y.object({
      username: y.string().required().optional(),
    }),
  }),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
  responses: y.object({
    "201": y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
  }),
};

// <EndpointByMethod>
export const EndpointByMethod = {
  get: {
    "/users": get_Get_users,
  },
  post: {
    "/users": post_Very_very_very_very_very_very_very_very_very_very_long,
  },
};
export type EndpointByMethod = typeof EndpointByMethod;
// </EndpointByMethod>

// <EndpointByMethod.Shorthands>
export type GetEndpoints = EndpointByMethod["get"];
export type PostEndpoints = EndpointByMethod["post"];
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
  response: TConfig["response"];
  responses?: TConfig["responses"];
  responseHeaders?: TConfig["responseHeaders"];
};

export type Fetcher = (method: Method, url: string, parameters?: EndpointParameters | undefined) => Promise<Response>;

// Status code type for success responses
export type StatusCode =
  | 200
  | 201
  | 202
  | 203
  | 204
  | 205
  | 206
  | 207
  | 208
  | 226
  | 300
  | 301
  | 302
  | 303
  | 304
  | 305
  | 306
  | 307
  | 308;

// Error handling types
export type ApiResponse<
  TSuccess,
  TAllResponses extends Record<string | number, unknown> = {},
> = keyof TAllResponses extends never
  ? {
      ok: true;
      status: number;
      data: TSuccess;
    }
  : {
      [K in keyof TAllResponses]: K extends string
        ? K extends `${infer TStatusCode extends number}`
          ? TStatusCode extends StatusCode
            ? {
                ok: true;
                status: TStatusCode;
                data: TAllResponses[K];
              }
            : {
                ok: false;
                status: TStatusCode;
                error: TAllResponses[K];
              }
          : never
        : K extends number
          ? K extends StatusCode
            ? {
                ok: true;
                status: K;
                data: TAllResponses[K];
              }
            : {
                ok: false;
                status: K;
                error: TAllResponses[K];
              }
          : never;
    }[keyof TAllResponses];

export type SafeApiResponse<TEndpoint> = TEndpoint extends { response: infer TSuccess; responses: infer TResponses }
  ? TResponses extends Record<string, unknown>
    ? ApiResponse<TSuccess, TResponses>
    : { ok: true; status: number; data: TSuccess }
  : TEndpoint extends { response: infer TSuccess }
    ? { ok: true; status: number; data: TSuccess }
    : never;

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

  // <ApiClient.get>
  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<y.InferType<TEndpoint["parameters"]> & { withResponse?: false }>
  ): Promise<y.InferType<TEndpoint["response"]>>;

  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<y.InferType<TEndpoint["parameters"]> & { withResponse: true }>
  ): Promise<SafeApiResponse<TEndpoint>>;

  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<any>
  ): Promise<any> {
    const requestParams = params[0];
    const withResponse = requestParams?.withResponse;

    // Remove withResponse from params before passing to fetcher
    const { withResponse: _, ...fetchParams } = requestParams || {};

    if (withResponse) {
      return this.fetcher("get", this.baseUrl + path, Object.keys(fetchParams).length ? fetchParams : undefined).then(
        async (response) => {
          const data = await this.parseResponse(response);
          if (response.ok) {
            return { ok: true, status: response.status, data };
          } else {
            return { ok: false, status: response.status, error: data };
          }
        },
      );
    } else {
      return this.fetcher("get", this.baseUrl + path, requestParams).then((response) =>
        this.parseResponse(response),
      ) as Promise<y.InferType<TEndpoint["response"]>>;
    }
  }
  // </ApiClient.get>

  // <ApiClient.post>
  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<y.InferType<TEndpoint["parameters"]> & { withResponse?: false }>
  ): Promise<y.InferType<TEndpoint["response"]>>;

  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<y.InferType<TEndpoint["parameters"]> & { withResponse: true }>
  ): Promise<SafeApiResponse<TEndpoint>>;

  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<any>
  ): Promise<any> {
    const requestParams = params[0];
    const withResponse = requestParams?.withResponse;

    // Remove withResponse from params before passing to fetcher
    const { withResponse: _, ...fetchParams } = requestParams || {};

    if (withResponse) {
      return this.fetcher("post", this.baseUrl + path, Object.keys(fetchParams).length ? fetchParams : undefined).then(
        async (response) => {
          const data = await this.parseResponse(response);
          if (response.ok) {
            return { ok: true, status: response.status, data };
          } else {
            return { ok: false, status: response.status, error: data };
          }
        },
      );
    } else {
      return this.fetcher("post", this.baseUrl + path, requestParams).then((response) =>
        this.parseResponse(response),
      ) as Promise<y.InferType<TEndpoint["response"]>>;
    }
  }
  // </ApiClient.post>

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

 // With error handling
 const result = await api.get("/users/{id}", { path: { id: "123" }, withResponse: true });
 if (result.ok) {
   console.log(result.data);
 } else {
   console.error(`Error ${result.status}:`, result.error);
 }
*/

// </ApiClient
