import { Type, Static } from "@sinclair/typebox";

type __ENDPOINTS_START__ = Static<typeof __ENDPOINTS_START__>;
const __ENDPOINTS_START__ = Type.Object({});

export type get_Get_users = Static<typeof get_Get_users>;
export const get_Get_users = Type.Object({
  method: Type.Literal("GET"),
  path: Type.Literal("/users"),
  requestFormat: Type.Literal("json"),
  parameters: Type.Never(),
  response: Type.Array(Type.String()),
  responses: Type.Object({
    200: Type.Array(Type.String()),
  }),
});

export type post_Very_very_very_very_very_very_very_very_very_very_long = Static<
  typeof post_Very_very_very_very_very_very_very_very_very_very_long
>;
export const post_Very_very_very_very_very_very_very_very_very_very_long = Type.Object({
  method: Type.Literal("POST"),
  path: Type.Literal("/users"),
  requestFormat: Type.Literal("json"),
  parameters: Type.Object({
    body: Type.Partial(
      Type.Object({
        username: Type.String(),
      }),
    ),
  }),
  response: Type.Unknown(),
  responses: Type.Object({
    201: Type.Unknown(),
  }),
});

type __ENDPOINTS_END__ = Static<typeof __ENDPOINTS_END__>;
const __ENDPOINTS_END__ = Type.Object({});

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

// Error handling types
export type ApiResponse<TSuccess, TErrors extends Record<string, unknown> = {}> =
  | {
      ok: true;
      status: number;
      data: TSuccess;
    }
  | {
      [K in keyof TErrors]: {
        ok: false;
        status: K extends string ? (K extends `${number}` ? number : never) : never;
        error: TErrors[K];
      };
    }[keyof TErrors];

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
    ...params: MaybeOptionalArg<Static<TEndpoint>["parameters"]>
  ): Promise<Static<TEndpoint>["response"]>;

  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    options: { withResponse: true },
    ...params: MaybeOptionalArg<Static<TEndpoint>["parameters"]>
  ): Promise<SafeApiResponse<TEndpoint>>;

  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    optionsOrParams?: { withResponse?: boolean } | Static<TEndpoint>["parameters"],
    ...params: any[]
  ): Promise<any> {
    const hasWithResponse = optionsOrParams && typeof optionsOrParams === "object" && "withResponse" in optionsOrParams;
    const requestParams = hasWithResponse ? params[0] : optionsOrParams;

    if (hasWithResponse && optionsOrParams.withResponse) {
      return this.fetcher("get", this.baseUrl + path, requestParams).then(async (response) => {
        const data = await this.parseResponse(response);
        if (response.ok) {
          return { ok: true, status: response.status, data };
        } else {
          return { ok: false, status: response.status, error: data };
        }
      });
    } else {
      return this.fetcher("get", this.baseUrl + path, requestParams).then((response) =>
        this.parseResponse(response),
      ) as Promise<Static<TEndpoint>["response"]>;
    }
  }
  // </ApiClient.get>

  // <ApiClient.post>
  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<Static<TEndpoint>["parameters"]>
  ): Promise<Static<TEndpoint>["response"]>;

  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    options: { withResponse: true },
    ...params: MaybeOptionalArg<Static<TEndpoint>["parameters"]>
  ): Promise<SafeApiResponse<TEndpoint>>;

  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    optionsOrParams?: { withResponse?: boolean } | Static<TEndpoint>["parameters"],
    ...params: any[]
  ): Promise<any> {
    const hasWithResponse = optionsOrParams && typeof optionsOrParams === "object" && "withResponse" in optionsOrParams;
    const requestParams = hasWithResponse ? params[0] : optionsOrParams;

    if (hasWithResponse && optionsOrParams.withResponse) {
      return this.fetcher("post", this.baseUrl + path, requestParams).then(async (response) => {
        const data = await this.parseResponse(response);
        if (response.ok) {
          return { ok: true, status: response.status, data };
        } else {
          return { ok: false, status: response.status, error: data };
        }
      });
    } else {
      return this.fetcher("post", this.baseUrl + path, requestParams).then((response) =>
        this.parseResponse(response),
      ) as Promise<Static<TEndpoint>["response"]>;
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
    ...params: MaybeOptionalArg<Static<TEndpoint>["parameters"]>
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
 const result = await api.get("/users/{id}", { withResponse: true }, { path: { id: "123" } });
 if (result.ok) {
   console.log(result.data);
 } else {
   console.error(`Error ${result.status}:`, result.error);
 }
*/

// </ApiClient
