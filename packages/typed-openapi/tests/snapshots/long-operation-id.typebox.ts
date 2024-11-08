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
export type Method = "get" | "head" | "options" | MutationMethod;

type RequestFormat = "json" | "form-data" | "form-url" | "binary" | "text";

export type DefaultEndpoint = {
  parameters?: EndpointParameters | undefined;
  response: unknown;
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

  // <ApiClient.get>
  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<Static<TEndpoint>["parameters"]>
  ): Promise<Static<TEndpoint>["response"]> {
    return this.fetcher("get", this.baseUrl + path, params[0]) as Promise<Static<TEndpoint>["response"]>;
  }
  // </ApiClient.get>

  // <ApiClient.post>
  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<Static<TEndpoint>["parameters"]>
  ): Promise<Static<TEndpoint>["response"]> {
    return this.fetcher("post", this.baseUrl + path, params[0]) as Promise<Static<TEndpoint>["response"]>;
  }
  // </ApiClient.post>
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
