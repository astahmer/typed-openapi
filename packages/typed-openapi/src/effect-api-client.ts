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
  /** Status errors stay typed; everything else remaps to HttpClientError (cause holds original). */
  const errorChannel = "TypedStatusError | HttpClientError";

  // effect runtime already imports Effect with Schema; others need an Effect import.
  const effectImports =
    runtime === "effect"
      ? ""
      : runtime === "effect3"
        ? `import { Effect } from "effect";`
        : `import { Effect } from "effect";`;

  const wrapAsHttpClientError = (message: string, causeExpr: string) =>
    `new HttpClientError(${JSON.stringify(message)}, ${causeExpr})`;

  const validateValue = (side: "input" | "output", valueExpr: string, schemaExpr: string, assign: string) => {
    if (!hasRuntime) return "";
    if (isEffectSchema) {
      const decodeElse =
        runtime === "effect3"
          ? `${assign} yield* Effect.try({
              try: () => S.decodeUnknownSync(${schemaExpr} as S.Schema<unknown, unknown, never>)(${valueExpr}),
              catch: (cause) => ${wrapAsHttpClientError("decode failed", "cause")},
            });`
          : `${assign} yield* Schema.decodeUnknownEffect(${schemaExpr} as Schema.Codec<unknown>)(${valueExpr}).pipe(
              Effect.mapError((cause) => ${wrapAsHttpClientError("decode failed", "cause")}),
            );`;
      return `
          if (self.onValidate) {
            const onValidate = self.onValidate;
            ${assign} yield* Effect.tryPromise({
              try: () =>
                runValidate({
                  side: "${side}",
                  method: String(method),
                  path: String(path),
                  schema: ${schemaExpr},
                  value: ${valueExpr},
                  onValidate,
                }),
              catch: (cause) => ${wrapAsHttpClientError("validation failed", "cause")},
            });
          } else {
            ${decodeElse}
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
                ...(self.onValidate ? { onValidate: self.onValidate } : {}),
              }),
            catch: (cause) => ${wrapAsHttpClientError("validation failed", "cause")},
          });`;
  };

  const inputBlock = hasRuntime
    ? `type RuntimeEndpoint = {
        parameters?: Partial<Record<"body" | "query" | "header" | "path" | "cookie", unknown>>;
        responses?: Record<string, unknown>;
      };
      const endpointSchema = EndpointByMethod[method][path] as RuntimeEndpoint;
      if ((validateSide === "input" || validateSide === "both") && endpointSchema.parameters) {
        for (const key of ["body", "query", "header", "path", "cookie"] as const) {
          const schema = endpointSchema.parameters[key];
          const value = parametersToSend[key];
          if (schema !== undefined && value !== undefined) {
${validateValue("input", "value", "schema", "parametersToSend[key] =")}
          }
        }
      }`
    : "";

  const outputBlock = hasRuntime
    ? `if (responseFormat !== "sse" && (validateSide === "output" || validateSide === "both") && (response.ok || !(errorStatusCodes as readonly number[]).includes(response.status)) && endpointSchema?.responses) {
        const responseSchema =
          endpointSchema.responses[String(response.status)] ??
          endpointSchema.responses[String(Math.floor(response.status / 100)) + "xx"] ??
          endpointSchema.responses[String(Math.floor(response.status / 100)) + "XX"] ??
          endpointSchema.responses["default"];
        if (responseSchema) {
${validateValue("output", "data", "responseSchema", "data =")}
        }
      }`
    : "";

  const effectImplementationParams = `[config?: unknown]`;

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
  decodePathParams?: (path: string, pathParams: unknown, styles?: Record<string, ParameterSerialization>) => string;
  encodeSearchParams?: (searchParams: unknown, styles?: Record<string, ParameterSerialization>) => URLSearchParams | undefined;
  encodeCookies?: (cookies: unknown, headers: Headers) => void;
  parseResponseData?: (response: FetcherResponse) => Promise<unknown>;
  fetch: (input: Parameters<Fetcher["fetch"]>[0]) => Effect.Effect<FetcherResponse, HttpClientError, never>;
};

const wrapPromiseFetcher = (fetcher: Fetcher): EffectFetcher => ({
  ...(fetcher.decodePathParams ? { decodePathParams: fetcher.decodePathParams } : {}),
  ...(fetcher.encodeSearchParams ? { encodeSearchParams: fetcher.encodeSearchParams } : {}),
  ...(fetcher.encodeCookies ? { encodeCookies: fetcher.encodeCookies } : {}),
  ...(fetcher.parseResponseData ? { parseResponseData: fetcher.parseResponseData } : {}),
  fetch: (input) =>
    Effect.tryPromise({
      try: () => fetcher.fetch(input),
      catch: (cause) => ${wrapAsHttpClientError("fetch failed", "cause")},
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
    TEndpoint extends EndpointByMethod[TMethod][TPath],
    TParams extends ApiCallParams<TEndpoint> = ApiCallParams<TEndpoint>
  >(
    method: TMethod,
    path: TPath,
    ...params: MaybeOptionalArg<TParams>
  ): Effect.Effect<
    ApiCallResult<TEndpoint, TParams>,
    ${errorChannel},
    never
  >;

  request<
    TMethod extends keyof EndpointByMethod,
    TPath extends keyof EndpointByMethod[TMethod],
    TEndpoint extends EndpointByMethod[TMethod][TPath]
  >(
    method: TMethod,
    path: TPath,
    ...params: ${effectImplementationParams}
  ): Effect.Effect<
    SafeApiResponse<TEndpoint> | InferSuccessData<TEndpoint>,
    ${errorChannel},
    never
  > {
    const self = this;
    return Effect.gen(function* () {
      // Implementation reads a loose param bag; call sites stay typed via MaybeOptionalArg<>.
      const requestParams = params[0] as
        | (EndpointParameters & {
            overrides?: RequestInit;
            queryOptions?: ApiQueryOptions;
            validate?: ValidateSide;
            withResponse?: boolean;
            throwOnStatusError?: boolean;
          })
        | undefined;
      const withResponse = Boolean(requestParams?.withResponse);
      const throwOnStatusError = requestParams?.throwOnStatusError ?? (withResponse ? false : true);
      ${
        hasRuntime
          ? `const validateSide: ValidateSide = requestParams?.validate ?? self.validate;
      const parametersToSend: EndpointParameters = {};
      if (requestParams?.body !== undefined) parametersToSend.body = requestParams.body;
      if (requestParams?.query !== undefined) parametersToSend.query = requestParams.query;
      if (requestParams?.header !== undefined) parametersToSend.header = requestParams.header;
      if (requestParams?.path !== undefined) parametersToSend.path = requestParams.path;
      if (requestParams?.cookie !== undefined) parametersToSend.cookie = requestParams.cookie;

      ${inputBlock}`
          : `const parametersToSend: EndpointParameters = {};
      if (requestParams?.body !== undefined) parametersToSend.body = requestParams.body;
      if (requestParams?.query !== undefined) parametersToSend.query = requestParams.query;
      if (requestParams?.header !== undefined) parametersToSend.header = requestParams.header;
      if (requestParams?.path !== undefined) parametersToSend.path = requestParams.path;
      if (requestParams?.cookie !== undefined) parametersToSend.cookie = requestParams.cookie;`
      }

      const decodePath =
        self.effectFetcher.decodePathParams ??
        ((url: string, p: unknown, styles?: Record<string, ParameterSerialization>) => {
          const record = (p ?? {}) as Record<string, unknown>;
          const encode = (value: unknown) => encodeURIComponent(String(value));
          const serialize = (key: string, value: unknown): string => {
            const parameterStyle = styles?.[key];
            const style = parameterStyle?.style ?? "simple";
            const explode = parameterStyle?.explode ?? false;
            if (style === "label") {
              if (Array.isArray(value)) return "." + value.filter((item) => item != null).map(encode).join(explode ? "." : ",");
              if (value && typeof value === "object") {
                const entries = Object.entries(value as Record<string, unknown>).filter(([, item]) => item != null);
                return "." + (explode ? entries.map(([name, item]) => encode(name) + "=" + encode(item)).join(".") : entries.flatMap(([name, item]) => [encode(name), encode(item)]).join(","));
              }
              return "." + encode(value);
            }
            if (style === "matrix") {
              if (Array.isArray(value)) return explode ? value.filter((item) => item != null).map((item) => ";" + key + "=" + encode(item)).join("") : ";" + key + "=" + value.filter((item) => item != null).map(encode).join(",");
              if (value && typeof value === "object") {
                const entries = Object.entries(value as Record<string, unknown>).filter(([, item]) => item != null);
                return explode ? entries.map(([name, item]) => ";" + encode(name) + "=" + encode(item)).join("") : ";" + key + "=" + entries.flatMap(([name, item]) => [encode(name), encode(item)]).join(",");
              }
              return ";" + key + "=" + encode(value);
            }
            if (Array.isArray(value)) return value.filter((item) => item != null).map(encode).join(",");
            if (value && typeof value === "object") return Object.entries(value as Record<string, unknown>).filter(([, item]) => item != null).map(([name, item]) => explode ? encode(name) + "=" + encode(item) : [encode(name), encode(item)]).flat().join(",");
            return encode(value);
          };
          return url
            .replace(/{([^}]+)}/g, (_, key: string) =>
              record[key] != null ? serialize(key, record[key]) : \`{\${key}}\`,
            )
            .replace(/:([a-zA-Z0-9_]+)/g, (_, key: string) =>
              record[key] != null ? serialize(key, record[key]) : \`:\${key}\`,
            );
        });
      const encodeSearch =
        self.effectFetcher.encodeSearchParams ??
        ((queryParams: unknown, styles?: Record<string, ParameterSerialization>) => {
          if (!queryParams || typeof queryParams !== "object") return undefined;
          const searchParams = new URLSearchParams();
          const rawEntries: Array<{ key: string; value: string; allowReserved: boolean }> = [];
          const append = (key: string, value: unknown, allowReserved = false) => {
            const stringValue = String(value);
            searchParams.append(key, stringValue);
            rawEntries.push({ key, value: stringValue, allowReserved });
          };
          const encodeQueryComponent = (value: string, allowReserved: boolean) => {
            const encoded = encodeURIComponent(value);
            return allowReserved
              ? encoded.replace(/%3A|%2F|%3F|%40|%21|%24|%26|%27|%28|%29|%2A|%2B|%2C|%3B|%3D|%5B|%5D/gi, (part) => decodeURIComponent(part))
              : encoded;
          };
          Object.defineProperty(searchParams, "toString", {
            value: () => rawEntries.map(({ key, value, allowReserved }) => \`\${encodeQueryComponent(key, false)}=\${encodeQueryComponent(value, allowReserved)}\`).join("&"),
          });
          Object.entries(queryParams as Record<string, unknown>).forEach(([key, value]) => {
            if (value != null) {
              const parameterStyle = styles?.[key];
              const style = parameterStyle?.style ?? "form";
              const explode = parameterStyle?.explode ?? true;
              const allowReserved = parameterStyle?.allowReserved === true;
              if (Array.isArray(value)) {
                if (style === "spaceDelimited") append(key, value.filter((item) => item != null).map(String).join(" "), allowReserved);
                else if (style === "pipeDelimited") append(key, value.filter((item) => item != null).map(String).join("|"), allowReserved);
                else if (explode) value.forEach((val) => val != null && append(key, val, allowReserved));
                else append(key, value.filter((item) => item != null).map(String).join(","), allowReserved);
              } else if (typeof value === "object") {
                const entries = Object.entries(value as Record<string, unknown>).filter(([, nestedValue]) => nestedValue != null);
                if (style === "deepObject") {
                  for (const [nestedKey, nestedValue] of entries) {
                    if (Array.isArray(nestedValue)) nestedValue.forEach((item) => item != null && append(\`\${key}[\${nestedKey}]\`, item, allowReserved));
                    else append(\`\${key}[\${nestedKey}]\`, nestedValue, allowReserved);
                  }
                } else if (explode) {
                  for (const [nestedKey, nestedValue] of entries) {
                    if (Array.isArray(nestedValue)) nestedValue.forEach((item) => item != null && append(nestedKey, item, allowReserved));
                    else append(nestedKey, nestedValue, allowReserved);
                  }
                } else {
                  append(key, entries.flatMap(([nestedKey, nestedValue]) => [nestedKey, ...(Array.isArray(nestedValue) ? nestedValue : [nestedValue])]).map(String).join(","), allowReserved);
                }
              } else append(key, value, allowReserved);
            }
          });
          return searchParams;
        });
      const encodeCookies =
        self.effectFetcher.encodeCookies ??
        ((cookies: unknown, headers: Headers) => {
          if (!cookies || typeof cookies !== "object") return;
          const parts = Object.entries(cookies as Record<string, unknown>)
            .filter(([, value]) => value != null)
            .map(([key, value]) => \`\${key}=\${String(value)}\`);
          if (!parts.length) return;
          const existing = headers.get("cookie");
          headers.set("cookie", existing ? \`\${existing}; \${parts.join("; ")}\` : parts.join("; "));
        });
      const parseData =
        self.effectFetcher.parseResponseData ??
        (async (response: FetcherResponse) => {
          const contentType = response.headers.get("content-type") ?? "";
          const normalizedContentType = contentType.toLowerCase();
          if (normalizedContentType.includes("text/event-stream")) {
            return response.body ?? null;
          }
          if (normalizedContentType.startsWith("application/octet-stream")) {
            return new Blob([await response.arrayBuffer()]);
          }
          if (normalizedContentType.includes("json") || normalizedContentType === "*/*") {
            try {
              return await response.json();
            } catch {
              return undefined;
            }
          }
          if (normalizedContentType.startsWith("text/")) return response.text();
          return undefined;
        });

      const resolvedPath = decodePath(
        self.baseUrl + (path as string),
        parametersToSend.path ?? {},
        endpointParameterStyles[method]?.[path]?.path,
      );
      const url = new URL(resolvedPath);
      const urlSearchParams = encodeSearch(parametersToSend.query, endpointParameterStyles[method]?.[path]?.query);

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
        ...(urlSearchParams ? { urlSearchParams } : {}),
        ...(Object.keys(parametersToSend).length ? { parameters: parametersToSend } : {}),
        requestFormat: endpointRequestFormats[method]?.[path] ?? "json",
        parameterStyles: endpointParameterStyles[method]?.[path],
        security: endpointSecurityRequirements[method]?.[path] ?? defaultSecurityRequirements,
        ...(overrides ? { overrides } : {}),
      });

      const responseFormat = endpointResponseFormats[method]?.[path] ?? "json";
      let data =
        responseFormat === "sse"
          ? (response.body ?? null)
          : yield* Effect.tryPromise({
              try: () => parseData(response),
              catch: (cause) => ${wrapAsHttpClientError("parse failed", "cause")},
            });

      ${outputBlock}

      const typedResponse = Object.assign(response, {
        data,
        json: () => Promise.resolve(data),
      });

      if ((errorStatusCodes as readonly number[]).includes(response.status)) {
        if (throwOnStatusError) {
          return yield* Effect.fail(
            new TypedStatusError(typedResponse as TypedErrorResponse<unknown, ErrorStatusCode, unknown>),
          );
        }
        return (withResponse ? typedResponse : data) as SafeApiResponse<TEndpoint> | InferSuccessData<TEndpoint>;
      }

      return (withResponse ? typedResponse : data) as SafeApiResponse<TEndpoint> | InferSuccessData<TEndpoint>;
    });
  }

  ${Object.entries(groupBy(endpointList, "method"))
    .map(([method, list]) => {
      const endpoints = `${capitalize(method)}Endpoints`;
      return list.length
        ? `${method}<Path extends keyof ${endpoints}, TEndpoint extends ${endpoints}[Path], TParams extends ApiCallParams<TEndpoint> = ApiCallParams<TEndpoint>>(
    path: Path,
    ...params: MaybeOptionalArg<TParams>
  ): Effect.Effect<
    ApiCallResult<TEndpoint, TParams>,
    ${errorChannel},
    never
  > {
    return this.request<"${method}", Path, ${endpoints}[Path], TParams>("${method}", path, params[0] as never);
  }`
        : "";
    })
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
