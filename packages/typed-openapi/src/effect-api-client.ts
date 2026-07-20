import { capitalize, groupBy } from "pastable/server";
import type { Endpoint } from "./map-openapi-endpoints.ts";

/** Shared snippet pieces for EffectApiClient emission (keeps generator.ts smaller). */
export const effectApiClientBody = (args: {
  validateSide: string;
  runtime: string;
  endpointList: Endpoint[];
  validateHelpers: string;
}): string => {
  const { validateSide, runtime, endpointList, validateHelpers } = args;
  const hasRuntime = runtime !== "none";
  const isEffectSchema = runtime === "effect" || runtime === "effect3";
  const decodeFn = runtime === "effect3" ? "S.decodeUnknown" : "Schema.decodeUnknown";
  const errorChannel = isEffectSchema
    ? "TypedStatusError | HttpClientError | ParseError | Error"
    : "TypedStatusError | HttpClientError | Error";

  const effectImports = isEffectSchema
    ? `import { Effect } from "effect";
import type { ParseError } from "effect/ParseResult";`
    : `import { Effect } from "effect";`;

  const validateValue = (side: "input" | "output", valueExpr: string, schemaExpr: string, assign: string) => {
    if (!hasRuntime) return "";
    if (isEffectSchema) {
      return `
          if (self.onValidate) {
            ${assign} yield* Effect.tryPromise({
              try: () =>
                runValidate({
                  side: "${side}",
                  method: String(method),
                  path: String(path),
                  schema: ${schemaExpr},
                  value: ${valueExpr},
                  onValidate: self.onValidate,
                }),
              catch: (e) => (e instanceof Error ? e : new Error(String(e))),
            });
          } else {
            ${assign} yield* ${decodeFn}(${schemaExpr} as never)(${valueExpr});
          }`;
    }
    return `
          ${assign} yield* Effect.tryPromise({
            try: () =>
              runValidate({
                side: "${side}",
                method: String(method),
                path: String(path),
                schema: ${schemaExpr},
                value: ${valueExpr},
                onValidate: self.onValidate,
              }),
            catch: (e) => (e instanceof Error ? e : new Error(String(e))),
          });`;
  };

  const inputBlock = hasRuntime
    ? `const endpointSchema = (EndpointByMethod as any)[method]?.[path];
      if ((validateSide === "input" || validateSide === "both") && endpointSchema?.parameters) {
        for (const key of ["body", "query", "header", "path", "cookie"] as const) {
          const schema = endpointSchema.parameters[key];
          const value = (parametersToSend as any)[key];
          if (schema && value !== undefined) {
${validateValue("input", "value", "schema", "(parametersToSend as any)[key] =")}
          }
        }
      }`
    : "const endpointSchema = undefined;";

  const outputBlock = hasRuntime
    ? `if ((validateSide === "output" || validateSide === "both") && response.ok && endpointSchema?.responses) {
        const responseSchema =
          endpointSchema.responses[String(response.status)] ?? endpointSchema.responses["default"];
        if (responseSchema) {
${validateValue("output", "data", "responseSchema", "data =")}
        }
      }`
    : "";

  return `
${effectImports}

// <HttpClientError>
export class HttpClientError extends Error {
  readonly _tag = "HttpClientError";
  constructor(message: string, readonly cause?: unknown) {
    super(message);
    this.name = "HttpClientError";
  }
}
// </HttpClientError>

${validateHelpers}

export type EffectFetcher = {
  decodePathParams?: (path: string, pathParams: Record<string, string | number | boolean>) => string;
  encodeSearchParams?: (searchParams: Record<string, unknown> | undefined) => URLSearchParams;
  encodeCookies?: (cookies: Record<string, unknown> | undefined, headers: Headers) => void;
  parseResponseData?: (response: ApiResponse) => Promise<unknown>;
  fetch: (input: {
    method: Method;
    url: URL;
    urlSearchParams?: URLSearchParams | undefined;
    parameters?: unknown;
    path: string;
    overrides?: RequestInit;
    throwOnStatusError?: boolean;
  }) => Effect.Effect<ApiResponse, HttpClientError, never>;
};

const wrapPromiseFetcher = (fetcher: Fetcher): EffectFetcher => ({
  decodePathParams: fetcher.decodePathParams,
  encodeSearchParams: fetcher.encodeSearchParams,
  encodeCookies: fetcher.encodeCookies,
  parseResponseData: fetcher.parseResponseData,
  fetch: (input) =>
    Effect.tryPromise({
      try: () => fetcher.fetch(input as never),
      catch: (cause) => new HttpClientError("fetch failed", cause),
    }),
});

// <EffectApiClient>
export class EffectApiClient {
  baseUrl: string = "";
  successStatusCodes = successStatusCodes;
  errorStatusCodes = errorStatusCodes;
  validate: ValidateSide = ${JSON.stringify(validateSide)};
  onValidate?: OnValidate;
  private effectFetcher: EffectFetcher;

  constructor(
    fetcher: Fetcher | EffectFetcher,
    options?: { validate?: ValidateSide; onValidate?: OnValidate; effectFetcher?: boolean },
  ) {
    this.effectFetcher = options?.effectFetcher ? (fetcher as EffectFetcher) : wrapPromiseFetcher(fetcher as Fetcher);
    if (options?.validate !== undefined) this.validate = options.validate;
    if (options?.onValidate) this.onValidate = options.onValidate;
  }

  setBaseUrl(baseUrl: string) {
    this.baseUrl = baseUrl;
    return this;
  }

  request<
    TMethod extends keyof EndpointByMethod,
    TPath extends keyof EndpointByMethod[TMethod],
    TEndpoint extends EndpointByMethod[TMethod][TPath]
  >(
    method: TMethod,
    path: TPath,
    ...params: MaybeOptionalArg<any>
  ): Effect.Effect<
    Extract<InferResponseByStatus<TEndpoint, SuccessStatusCode>, { data: {} }>["data"],
    ${errorChannel},
    never
  > {
    const self = this;
    return Effect.gen(function* () {
      const requestParams = params[0];
      const validateSide: ValidateSide = requestParams?.validate ?? self.validate;
      const parametersToSend: EndpointParameters = {};
      if (requestParams?.body !== undefined) (parametersToSend as any).body = requestParams.body;
      if (requestParams?.query !== undefined) (parametersToSend as any).query = requestParams.query;
      if (requestParams?.header !== undefined) (parametersToSend as any).header = requestParams.header;
      if (requestParams?.path !== undefined) (parametersToSend as any).path = requestParams.path;
      if (requestParams?.cookie !== undefined) (parametersToSend as any).cookie = requestParams.cookie;

      ${inputBlock}

      const decodePath =
        self.effectFetcher.decodePathParams ??
        ((url: string, p: Record<string, string | number | boolean>) =>
          url
            .replace(/{(\\w+)}/g, (_, key: string) => (p[key] != null ? String(p[key]) : \`{\${key}}\`))
            .replace(/:([a-zA-Z0-9_]+)/g, (_, key: string) => (p[key] != null ? String(p[key]) : \`:\${key}\`)));
      const encodeSearch =
        self.effectFetcher.encodeSearchParams ??
        ((queryParams: Record<string, unknown> | undefined) => {
          if (!queryParams) return undefined;
          const searchParams = new URLSearchParams();
          Object.entries(queryParams).forEach(([key, value]) => {
            if (value != null) {
              if (Array.isArray(value)) value.forEach((val) => val != null && searchParams.append(key, String(val)));
              else searchParams.append(key, String(value));
            }
          });
          return searchParams;
        });
      const encodeCookies =
        self.effectFetcher.encodeCookies ??
        ((cookies: Record<string, unknown> | undefined, headers: Headers) => {
          if (!cookies) return;
          const parts = Object.entries(cookies)
            .filter(([, value]) => value != null)
            .map(([key, value]) => \`\${key}=\${String(value)}\`);
          if (!parts.length) return;
          const existing = headers.get("cookie");
          headers.set("cookie", existing ? \`\${existing}; \${parts.join("; ")}\` : parts.join("; "));
        });
      const parseData =
        self.effectFetcher.parseResponseData ??
        (async (response: ApiResponse) => {
          const contentType = response.headers.get("content-type") ?? "";
          if (contentType.includes("json") || contentType === "*/*") {
            try {
              return await response.json();
            } catch {
              return undefined;
            }
          }
          if (contentType.startsWith("text/")) return response.text();
          return undefined;
        });

      const resolvedPath = decodePath(
        self.baseUrl + (path as string),
        (parametersToSend.path ?? {}) as Record<string, string | number | boolean>,
      );
      const url = new URL(resolvedPath);
      const urlSearchParams = encodeSearch(parametersToSend.query);

      let overrides = requestParams?.overrides as RequestInit | undefined;
      if (parametersToSend.cookie) {
        const headers = new Headers(overrides?.headers);
        encodeCookies(parametersToSend.cookie, headers);
        overrides = { ...overrides, headers };
      }

      const response = yield* self.effectFetcher.fetch({
        method: method as Method,
        path: path as string,
        url,
        urlSearchParams,
        parameters: parametersToSend,
        overrides,
      });

      let data = yield* Effect.tryPromise({
        try: () => parseData(response),
        catch: (cause) => new HttpClientError("parse failed", cause),
      });

      ${outputBlock}

      if (errorStatusCodes.includes(response.status as never)) {
        const typedResponse = Object.assign(response, { data, json: () => Promise.resolve(data) });
        return yield* Effect.fail(new TypedStatusError(typedResponse as never));
      }

      return data as Extract<InferResponseByStatus<TEndpoint, SuccessStatusCode>, { data: {} }>["data"];
    });
  }

  ${Object.entries(groupBy(endpointList, "method"))
    .map(([method, list]) =>
      list.length
        ? `${method}<Path extends keyof ${capitalize(method)}Endpoints>(
    path: Path,
    ...params: MaybeOptionalArg<any>
  ) {
    return this.request("${method}" as never, path as never, ...params);
  }`
        : "",
    )
    .join("\n")}
}

export function createEffectApiClient(
  fetcher: Fetcher | EffectFetcher,
  baseUrl?: string,
  options?: { validate?: ValidateSide; onValidate?: OnValidate; effectFetcher?: boolean },
) {
  return new EffectApiClient(fetcher, options).setBaseUrl(baseUrl ?? "");
}
// </EffectApiClient>
`;
};
