import t from "io-ts";

export type __ENDPOINTS_START__ = t.TypeOf<typeof __ENDPOINTS_START__>;
export const __ENDPOINTS_START__ = t.type({});

export type get_Get_users = t.TypeOf<typeof get_Get_users>;
export const get_Get_users = t.type({
  method: t.literal("GET"),
  path: t.literal("/users"),
  parameters: t.never,
  response: t.array(t.string),
});

export type post_Very_very_very_very_very_very_very_very_very_very_long = t.TypeOf<
  typeof post_Very_very_very_very_very_very_very_very_very_very_long
>;
export const post_Very_very_very_very_very_very_very_very_very_very_long = t.type({
  method: t.literal("POST"),
  path: t.literal("/users"),
  parameters: t.type({
    body: t.type({
      username: t.union([t.undefined, t.string]),
    }),
  }),
  response: t.unknown,
});

export type __ENDPOINTS_END__ = t.TypeOf<typeof __ENDPOINTS_END__>;
export const __ENDPOINTS_END__ = t.type({});

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

  // <ApiClient.get>
  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<t.TypeOf<TEndpoint>["parameters"]>
  ): Promise<t.TypeOf<TEndpoint>["response"]> {
    return this.fetcher("get", this.baseUrl + path, params[0]) as Promise<t.TypeOf<TEndpoint>["response"]>;
  }
  // </ApiClient.get>

  // <ApiClient.post>
  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<t.TypeOf<TEndpoint>["parameters"]>
  ): Promise<t.TypeOf<TEndpoint>["response"]> {
    return this.fetcher("post", this.baseUrl + path, params[0]) as Promise<t.TypeOf<TEndpoint>["response"]>;
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
