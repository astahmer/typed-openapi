export namespace Schemas {
  // <Schemas>
  // </Schemas>
}

export namespace Endpoints {
  // <Endpoints>

  export type get_Get_users = {
    method: "GET";
    path: "/users";
    requestFormat: "json";
    parameters: never;
    response: Array<string>;
    responses: { 200: Array<string> };
  };
  export type post_Very_very_very_very_very_very_very_very_very_very_long = {
    method: "POST";
    path: "/users";
    requestFormat: "json";
    parameters: {
      body: Partial<{ username: string }>;
    };
    response: unknown;
    responses: { 201: unknown };
  };

  // </Endpoints>
}

// <EndpointByMethod>
export type EndpointByMethod = {
  get: {
    "/users": Endpoints.get_Get_users;
  };
  post: {
    "/users": Endpoints.post_Very_very_very_very_very_very_very_very_very_very_long;
  };
};

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
export type TypedApiResponse<
  TSuccess,
  TAllResponses extends Record<string | number, unknown> = {},
> = keyof TAllResponses extends never
  ? Omit<Response, "ok" | "status" | "json"> & {
      ok: true;
      status: number;
      data: TSuccess;
      json: () => Promise<TSuccess>;
    }
  : {
      [K in keyof TAllResponses]: K extends string
        ? K extends `${infer TStatusCode extends number}`
          ? TStatusCode extends StatusCode
            ? Omit<Response, "ok" | "status" | "json"> & {
                ok: true;
                status: TStatusCode;
                data: TSuccess;
                json: () => Promise<TSuccess>;
              }
            : Omit<Response, "ok" | "status" | "json"> & {
                ok: false;
                status: TStatusCode;
                data: TAllResponses[K];
                json: () => Promise<TAllResponses[K]>;
              }
          : never
        : K extends number
          ? K extends StatusCode
            ? Omit<Response, "ok" | "status" | "json"> & {
                ok: true;
                status: K;
                data: TSuccess;
                json: () => Promise<TSuccess>;
              }
            : Omit<Response, "ok" | "status" | "json"> & {
                ok: false;
                status: K;
                data: TAllResponses[K];
                json: () => Promise<TAllResponses[K]>;
              }
          : never;
    }[keyof TAllResponses];

export type SafeApiResponse<TEndpoint> = TEndpoint extends { response: infer TSuccess; responses: infer TResponses }
  ? TResponses extends Record<string, unknown>
    ? TypedApiResponse<TSuccess, TResponses>
    : Omit<Response, "ok" | "status" | "json"> & {
        ok: true;
        status: number;
        data: TSuccess;
        json: () => Promise<TSuccess>;
      }
  : TEndpoint extends { response: infer TSuccess }
    ? Omit<Response, "ok" | "status" | "json"> & {
        ok: true;
        status: number;
        data: TSuccess;
        json: () => Promise<TSuccess>;
      }
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
    ...params: MaybeOptionalArg<TEndpoint["parameters"] & { withResponse?: false }>
  ): Promise<TEndpoint["response"]>;

  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<TEndpoint["parameters"] & { withResponse: true }>
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
          // Parse the response data
          const data = await this.parseResponse(response);

          // Override properties while keeping the original Response object
          const typedResponse = Object.assign(response, {
            ok: response.ok,
            status: response.status,
            data: data,
            json: () => Promise.resolve(data),
          });
          return typedResponse;
        },
      );
    } else {
      return this.fetcher("get", this.baseUrl + path, requestParams).then((response) =>
        this.parseResponse(response),
      ) as Promise<TEndpoint["response"]>;
    }
  }
  // </ApiClient.get>

  // <ApiClient.post>
  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<TEndpoint["parameters"] & { withResponse?: false }>
  ): Promise<TEndpoint["response"]>;

  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<TEndpoint["parameters"] & { withResponse: true }>
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
          // Parse the response data
          const data = await this.parseResponse(response);

          // Override properties while keeping the original Response object
          const typedResponse = Object.assign(response, {
            ok: response.ok,
            status: response.status,
            data: data,
            json: () => Promise.resolve(data),
          });
          return typedResponse;
        },
      );
    } else {
      return this.fetcher("post", this.baseUrl + path, requestParams).then((response) =>
        this.parseResponse(response),
      ) as Promise<TEndpoint["response"]>;
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
    ...params: MaybeOptionalArg<TEndpoint extends { parameters: infer Params } ? Params : never>
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

// </ApiClient
