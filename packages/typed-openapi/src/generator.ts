import { capitalize, groupBy } from "pastable/server";
import { mapOpenApiEndpoints } from "./map-openapi-endpoints.ts";
import { type } from "arktype";
import { wrapWithQuotesIfNeeded } from "./string-utils.ts";
import type { NameTransformOptions } from "./types.ts";
import { emitRuntimeFile } from "./runtimes/emit-runtime-file.ts";
import { getRuntimeAdapter, type ShippedRuntime } from "./runtimes/registry.ts";
import { resolveValidationPolicy, type ValidationPreset, type ValidationPolicy } from "./runtimes/validation.ts";
import type { OutputRuntime as RuntimeName } from "./runtimes/types.ts";
import { irToTs, renderSchemaJsdoc } from "./schema-ir/ir-to-ts.ts";
import type { SchemaNode } from "./schema-ir/types.ts";
import { applySpecFilters, shouldEmitSchema, type SpecFilterOptions } from "./filter-spec.ts";
import { prepareSchemaNaming, type SchemaNamingOptions } from "./schema-naming.ts";
import { effectApiClientBody } from "./effect-api-client.ts";

// Default success status codes (2xx and 3xx ranges)
export const DEFAULT_SUCCESS_STATUS_CODES = [
  200, 201, 202, 203, 204, 205, 206, 207, 208, 226, 300, 301, 302, 303, 304, 305, 306, 307, 308,
] as const;

// Default error status codes (4xx and 5xx ranges)
export const DEFAULT_ERROR_STATUS_CODES = [
  400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 421, 422, 423, 424,
  425, 426, 428, 429, 431, 451, 500, 501, 502, 503, 504, 505, 506, 507, 508, 510, 511,
] as const;

export type ErrorStatusCode = (typeof DEFAULT_ERROR_STATUS_CODES)[number];

export type GeneratorOptions = ReturnType<typeof mapOpenApiEndpoints> &
  SpecFilterOptions &
  SchemaNamingOptions & {
    runtime?: RuntimeName;
    /** Validation depth for runtime adapters (ignored when runtime is `none`) */
    validation?: ValidationPreset | (Partial<ValidationPolicy> & { preset?: ValidationPreset });
    /** When runtime ≠ none: which side(s) to validate (default both) */
    validateSide?: "none" | "input" | "output" | "both";
    schemasOnly?: boolean;
    nameTransform?: NameTransformOptions | undefined;
    successStatusCodes?: readonly number[];
    errorStatusCodes?: readonly number[];
    includeClient?: boolean;
    jsdoc?: boolean;
    /** promise (default) or effect-native client */
    client?: "promise" | "effect";
    /**
     * Coerce number/boolean path|query|cookie|header params from strings.
     * Default true when runtime ≠ none.
     */
    coerce?: boolean;
  };
type GeneratorContext = Required<
  Omit<
    GeneratorOptions,
    | "validation"
    | "filterEndpoints"
    | "filterSchemas"
    | "treeShakeSchemas"
    | "endpointPatterns"
    | "schemaPatterns"
    | "schemaNaming"
    | "shouldNameSchema"
    | "validateSide"
    | "client"
    | "coerce"
  >
> & {
  validation: ValidationPolicy;
  keptSchemaNames?: Set<string>;
  namedSchemasForEmit?: Array<{ name: string; node: SchemaNode }>;
  validateSide: "none" | "input" | "output" | "both";
  client: "promise" | "effect";
  coerce: boolean;
};

export const allowedRuntimes = type("'none' | 'zod' | 'zod3' | 'effect' | 'effect3' | 'valibot' | 'arktype'");
export type OutputRuntime = typeof allowedRuntimes.infer;

const shouldRenderDescriptionComments = (ctx: GeneratorContext) => ctx.jsdoc && ctx.runtime === "none";

/** Deep-infer runtime schema values hanging off endpoint const objects. */
const runtimeInferHelper = (runtime: OutputRuntime): string => {
  if (runtime === "none") {
    return `type InferSchemaValue<T> = T;\ntype InferSchemaInput<T> = T;`;
  }
  // Object maps: when a nested schema input includes `undefined` (e.g. `.optional()` param group),
  // make that key optional so all-optional query endpoints don't require `{ query: {} }`.
  const optionalKeyObjectMap = (value: string) =>
    `T extends object ? { [K in keyof T as undefined extends ${value} ? never : K]: ${value} } & { [K in keyof T as undefined extends ${value} ? K : never]?: Exclude<${value}, undefined> } : T`;

  if (runtime === "zod" || runtime === "zod3") {
    return `type InferSchemaValue<T> = T extends z.ZodType ? z.infer<T> : T extends object ? { [K in keyof T]: InferSchemaValue<T[K]> } : T;
type InferSchemaInput<T> = T extends z.ZodType ? z.input<T> : ${optionalKeyObjectMap("InferSchemaInput<T[K]>")};`;
  }
  if (runtime === "valibot") {
    return `type InferSchemaValue<T> = T extends v.GenericSchema ? v.InferOutput<T> : T extends object ? { [K in keyof T]: InferSchemaValue<T[K]> } : T;
type InferSchemaInput<T> = T extends v.GenericSchema ? v.InferInput<T> : ${optionalKeyObjectMap("InferSchemaInput<T[K]>")};`;
  }
  if (runtime === "effect" || runtime === "effect3") {
    // Effect: Type = decoded output, Encoded = input to decode
    return `type InferSchemaValue<T> = T extends { Type: infer O } ? O : T extends object ? { [K in keyof T]: InferSchemaValue<T[K]> } : T;
type InferSchemaInput<T> = T extends { Encoded: infer I } ? I : ${optionalKeyObjectMap("InferSchemaInput<T[K]>")};`;
  }
  if (runtime === "arktype") {
    return `type InferSchemaValue<T> = T extends { infer: infer O } ? O : T extends object ? { [K in keyof T]: InferSchemaValue<T[K]> } : T;
type InferSchemaInput<T> = T extends { inferIn: infer I } ? I : ${optionalKeyObjectMap("InferSchemaInput<T[K]>")};`;
  }
  return `type InferSchemaValue<T> = T;\ntype InferSchemaInput<T> = T;`;
};

const escapeCommentText = (text: string) => text.replace(/\*\//g, "*\\/");

const renderDescriptionComment = (description: string, indent = "") => {
  const lines = description.trim().split(/\r?\n/);
  return `${indent}/**\n${lines.map((line) => `${indent} * ${escapeCommentText(line)}`).join("\n")}\n${indent} */`;
};

const indentMultiline = (value: string, indent = "  ") =>
  value.includes("\n")
    ? value
        .split("\n")
        .map((line, index) => (index === 0 ? line : `${indent}${line}`))
        .join("\n")
    : value;

export const generateFile = (options: GeneratorOptions) => {
  const runtime = options.runtime ?? "none";
  const filtered = applySpecFilters(options.endpointList, options.refs, options);
  const naming = prepareSchemaNaming(options.refs, filtered.endpointList, filtered.keptSchemaNames, options);
  const ctx = {
    ...options,
    endpointList: naming.endpointList,
    keptSchemaNames: filtered.keptSchemaNames,
    namedSchemasForEmit: naming.namedSchemas.map(({ name, node }) => ({ name, node })),
    runtime,
    validation: resolveValidationPolicy(options.validation ?? (runtime === "none" ? "loose" : "strict")),
    successStatusCodes: options.successStatusCodes ?? DEFAULT_SUCCESS_STATUS_CODES,
    errorStatusCodes: options.errorStatusCodes ?? DEFAULT_ERROR_STATUS_CODES,
    includeClient: options.includeClient ?? true,
    jsdoc: options.jsdoc ?? false,
    validateSide: options.validateSide ?? (runtime === "none" ? "none" : "both"),
    client: options.client ?? (runtime === "effect" || runtime === "effect3" ? "effect" : "promise"),
    coerce: options.coerce ?? runtime !== "none",
  } as GeneratorContext;

  const endpointByMethod = options.schemasOnly ? "" : generateEndpointByMethod(ctx);
  const apiClient =
    options.schemasOnly || !ctx.includeClient
      ? ""
      : ctx.client === "effect"
        ? generateEffectApiClient(ctx)
        : generateApiClient(ctx);

  if (ctx.runtime !== "none") {
    const adapter = getRuntimeAdapter(ctx.runtime as ShippedRuntime);
    const runtimeSchemasAndEndpoints = emitRuntimeFile({
      adapter,
      refs: ctx.refs,
      endpointList: ctx.endpointList,
      validation: ctx.validation,
      schemasOnly: options.schemasOnly ?? false,
      coerce: ctx.coerce,
      ...(ctx.keptSchemaNames ? { keptSchemaNames: ctx.keptSchemaNames } : {}),
      ...(ctx.namedSchemasForEmit ? { namedSchemas: ctx.namedSchemasForEmit } : {}),
    });

    return `
  ${runtimeSchemasAndEndpoints}
  ${endpointByMethod}
  ${apiClient}
  `;
  }

  const schemaList = generateSchemaList(ctx);
  const endpointSchemaList = options.schemasOnly ? "" : generateEndpointSchemaList(ctx);

  return `
  ${schemaList + endpointSchemaList}
  ${endpointByMethod}
  ${apiClient}
  `;
};

const generateSchemaList = (ctx: GeneratorContext) => {
  const { refs, runtime } = ctx;
  let file = `
  ${runtime === "none" ? "export namespace Schemas {" : ""}
    // <Schemas>
  `;
  const schemas =
    ctx.namedSchemasForEmit ??
    refs
      .getOrderedSchemas()
      .filter(([, infos]) => infos?.name && infos.kind === "schemas")
      .filter(([, infos]) => shouldEmitSchema(ctx.keptSchemaNames, infos.normalized))
      .map(([node, infos]) => ({ name: infos.normalized, node }));

  for (const { name, node } of schemas) {
    const description = shouldRenderDescriptionComments(ctx) ? node.meta.description : undefined;
    const schemaValue = irToTs(node, {
      prefixRefsWithSchemas: false,
      jsdoc: shouldRenderDescriptionComments(ctx),
    });

    file += `${renderSchemaJsdoc(description)}export type ${name} = ${schemaValue}\n`;
  }

  return (
    file +
    `
    // </Schemas>
    ${runtime === "none" ? "}" : ""}
  `
  );
};

/** Types-only: Schema IR → TS string (single source of truth with runtimes). */
const nodeToString = (
  node: SchemaNode,
  ctx: GeneratorContext,
  options: { prefixRefsWithSchemas?: boolean } = {},
): string => {
  return irToTs(node, {
    prefixRefsWithSchemas: options.prefixRefsWithSchemas ?? true,
    jsdoc: shouldRenderDescriptionComments(ctx),
  });
};

const parameterObjectToString = (parameters: SchemaNode, ctx: GeneratorContext) => nodeToString(parameters, ctx);

/** Optional param groups (all fields optional / `partial`) so `api.get(path)` needs no `{ query: {} }`. */
const paramGroupKey = (key: string, node: SchemaNode) => (node.kind === "object" && node.partial ? `${key}?` : key);

const responseHeadersObjectToString = (responseHeaders: Record<string, SchemaNode>, ctx: GeneratorContext) => {
  let str = "{";
  for (const [key, node] of Object.entries(responseHeaders)) {
    str += `${wrapWithQuotesIfNeeded(key.toLowerCase())}: ${indentMultiline(nodeToString(node, ctx))},\n`;
  }
  return str + "}";
};

const generateResponsesObject = (responses: Record<string, SchemaNode>, ctx: GeneratorContext) => {
  let str = "{";
  for (const [statusCode, node] of Object.entries(responses)) {
    const value = indentMultiline(nodeToString(node, ctx));
    str += `${wrapWithQuotesIfNeeded(statusCode)}: ${value},\n`;
  }
  return str + "}";
};

const generateEndpointSchemaList = (ctx: GeneratorContext) => {
  let file = `
  ${ctx.runtime === "none" ? "export namespace Endpoints {" : ""}
  // <Endpoints>
  ${ctx.runtime === "none" ? "" : "type __ENDPOINTS_START__ = {}"}
  `;
  ctx.endpointList.map((endpoint) => {
    const parameters = endpoint.parameters ?? {};
    const description = shouldRenderDescriptionComments(ctx) ? endpoint.operation.description : undefined;

    file += `${description ? `${renderDescriptionComment(description)}\n` : ""}export type ${endpoint.meta.alias} = {
      method: "${endpoint.method.toUpperCase()}",
      path: "${endpoint.path}",
      requestFormat: "${endpoint.requestFormat}",
      ${
        endpoint.meta.hasParameters
          ? `parameters: {
            ${parameters.query ? `${paramGroupKey("query", parameters.query)}:  ${parameterObjectToString(parameters.query, ctx)},` : ""}
        ${parameters.path ? `${paramGroupKey("path", parameters.path)}:  ${parameterObjectToString(parameters.path, ctx)},` : ""}
        ${parameters.header ? `${paramGroupKey("header", parameters.header)}:  ${parameterObjectToString(parameters.header, ctx)},` : ""}
        ${parameters.cookie ? `${paramGroupKey("cookie", parameters.cookie)}:  ${parameterObjectToString(parameters.cookie, ctx)},` : ""}
        ${parameters.body ? `${paramGroupKey("body", parameters.body)}:  ${parameterObjectToString(parameters.body, ctx)},` : ""}
          }`
          : "parameters: never,"
      }
      ${endpoint.responses ? `responses: ${generateResponsesObject(endpoint.responses, ctx)},` : ""}
      ${endpoint.responseHeaders ? `responseHeaders: ${responseHeadersObjectToString(endpoint.responseHeaders, ctx)},` : ""}
    }\n`;
  });

  return (
    file +
    `
  // </Endpoints>
  ${ctx.runtime === "none" ? "}" : ""}
  ${ctx.runtime === "none" ? "" : "type __ENDPOINTS_END__ = {}"}
  `
  );
};

const generateEndpointByMethod = (ctx: GeneratorContext) => {
  const { endpointList } = ctx;
  const byMethods = groupBy(endpointList, "method");

  const endpointByMethod = `
     // <EndpointByMethod>
     export ${ctx.runtime === "none" ? "type" : "const"} EndpointByMethod = {
     ${Object.entries(byMethods)
       .map(([method, list]) => {
         return `${method}: {
           ${list
             .map(
               (endpoint) => `"${endpoint.path}": ${ctx.runtime === "none" ? "Endpoints." : ""}${endpoint.meta.alias}`,
             )
             .join(",\n")}
         }`;
       })
       .join(",\n")}
     }
     ${ctx.runtime === "none" ? "" : "export type EndpointByMethod = typeof EndpointByMethod;"}
     // </EndpointByMethod>
     `;

  const shorthands = `

    // <EndpointByMethod.Shorthands>
    ${Object.keys(byMethods)
      .map((method) => `export type ${capitalize(method)}Endpoints = EndpointByMethod["${method}"]`)
      .join("\n")}
    // </EndpointByMethod.Shorthands>
    `;

  return endpointByMethod + shorthands;
};

/** Runtime overrides for non-json requestFormat (default is `"json"`). */
const generateEndpointRequestFormats = (ctx: GeneratorContext) => {
  const byMethods = groupBy(ctx.endpointList, "method");
  const nonJsonEntries = Object.entries(byMethods)
    .map(([method, list]) => {
      const overrides = list.filter((endpoint) => endpoint.requestFormat !== "json");
      if (!overrides.length) return "";
      return `${method}: {
          ${overrides.map((endpoint) => `"${endpoint.path}": "${endpoint.requestFormat}"`).join(",\n")}
        }`;
    })
    .filter(Boolean)
    .join(",\n");

  return `
    // <EndpointRequestFormats>
    /** Non-json request body encodings; missing entries default to \`"json"\`. */
    export const endpointRequestFormats = {
    ${nonJsonEntries}
    } as Partial<{ [M in keyof EndpointByMethod]: Partial<{ [P in keyof EndpointByMethod[M]]: RequestFormat }> }>;
    // </EndpointRequestFormats>
    `;
};

const generateApiClient = (ctx: GeneratorContext) => {
  if (!ctx.includeClient) {
    return "";
  }

  const { endpointList } = ctx;
  const byMethods = groupBy(endpointList, "method");

  const apiClientTypes = `
// <ApiClientTypes>
export type EndpointParameters = {
  body?: unknown;
  query?: unknown;
  header?: unknown;
  path?: unknown;
  cookie?: unknown;
};

export type MutationMethod = "post" | "put" | "patch" | "delete";
export type Method = "get" | "head" | "options" | MutationMethod;

export type RequestFormat = "json" | "form-data" | "form-url" | "binary" | "text";

${generateEndpointRequestFormats(ctx)}

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
  responseHeaders?: TConfig["responseHeaders"]
};

/**
 * Minimal response surface used by ApiClient — avoids depending on the DOM \`Response\`
 * global (helpful for Node without DOM lib). Structural typing accepts fetch Response.
 */
export interface FetcherResponse {
  ok: boolean;
  status: number;
  statusText: string;
  headers: {
    get(name: string): string | null;
    getSetCookie?: () => string[];
  };
  json(): Promise<unknown>;
  text(): Promise<string>;
  arrayBuffer(): Promise<ArrayBuffer>;
  clone(): FetcherResponse;
}

export interface Fetcher {
    decodePathParams?: (path: string, pathParams: unknown) => string
  encodeSearchParams?: (searchParams: unknown) => URLSearchParams | undefined
  /** Merge cookie params into request headers (default: Cookie header). */
  encodeCookies?: (cookies: unknown, headers: Headers) => void
    //
    fetch: (input: {
      method: Method;
      url: URL;
      urlSearchParams?: URLSearchParams | undefined;
      parameters?: EndpointParameters | undefined;
      path: string;
      /** How to encode \`parameters.body\` (from OpenAPI requestBody content type). */
      requestFormat: RequestFormat;
      overrides?: RequestInit;
      throwOnStatusError?: boolean
    }) => Promise<FetcherResponse>;
    parseResponseData?: (response: FetcherResponse) => Promise<unknown>
}

export const successStatusCodes = [${ctx.successStatusCodes.join(",")}] as const;
export type SuccessStatusCode = typeof successStatusCodes[number];

export const errorStatusCodes = [${ctx.errorStatusCodes.join(",")}] as const;
export type ErrorStatusCode = typeof errorStatusCodes[number];

// Taken from https://github.com/unjs/fetchdts/blob/ec4eaeab5d287116171fc1efd61f4a1ad34e4609/src/fetch.ts#L3
export interface TypedHeaders<TypedHeaderValues extends Record<string, string> | unknown> extends Omit<Headers, 'append' | 'delete' | 'get' | 'getSetCookie' | 'has' | 'set' | 'forEach'> {
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/append) */
  append: <Name extends Extract<keyof TypedHeaderValues, string> | string & {}> (name: Name, value: Lowercase<Name> extends keyof TypedHeaderValues ? TypedHeaderValues[Lowercase<Name>] : string) => void
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/delete) */
  delete: <Name extends Extract<keyof TypedHeaderValues, string> | string & {}> (name: Name) => void
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/get) */
  get: <Name extends Extract<keyof TypedHeaderValues, string> | string & {}> (name: Name) => (Lowercase<Name> extends keyof TypedHeaderValues ? TypedHeaderValues[Lowercase<Name>] : string) | null
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/getSetCookie) */
  getSetCookie: () => string[]
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/has) */
  has: <Name extends Extract<keyof TypedHeaderValues, string> | string & {}> (name: Name) => boolean
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/set) */
  set: <Name extends Extract<keyof TypedHeaderValues, string> | string & {}> (name: Name, value: Lowercase<Name> extends keyof TypedHeaderValues ? TypedHeaderValues[Lowercase<Name>] : string) => void
  forEach: (callbackfn: (value: TypedHeaderValues[keyof TypedHeaderValues] | string & {}, key: Extract<keyof TypedHeaderValues, string> | string & {}, parent: TypedHeaders<TypedHeaderValues>) => void, thisArg?: any) => void
}

/** @see https://developer.mozilla.org/en-US/docs/Web/API/Response */
export interface TypedSuccessResponse<TSuccess, TStatusCode, THeaders> extends Omit<FetcherResponse, "ok" | "status" | "json" | "headers"> {
  ok: true;
  status: TStatusCode;
  headers: never extends THeaders ? FetcherResponse["headers"] : TypedHeaders<THeaders>;
  data: TSuccess;
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) */
  json: () => Promise<TSuccess>;
}

/** @see https://developer.mozilla.org/en-US/docs/Web/API/Response */
export interface TypedErrorResponse<TData, TStatusCode, THeaders> extends Omit<FetcherResponse, "ok" | "status" | "json" | "headers"> {
  ok: false;
  status: TStatusCode;
  headers: never extends THeaders ? FetcherResponse["headers"] : TypedHeaders<THeaders>;
  data: TData;
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) */
  json: () => Promise<TData>;
}

export type TypedApiResponse<TAllResponses = {}, THeaders = {}> = {
    [K in keyof TAllResponses]: K extends string
      ? K extends \`\${infer TStatusCode extends number}\`
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

${runtimeInferHelper(ctx.runtime)}

export type SafeApiResponse<TEndpoint> = TEndpoint extends { responses: infer TResponses }
  ? TResponses extends Record<string, unknown>
    ? TypedApiResponse<InferSchemaValue<TResponses>, TEndpoint extends { responseHeaders: infer THeaders } ? InferSchemaValue<THeaders> : never>
    : never
  : never

export type InferResponseByStatus<TEndpoint, TStatusCode> = Extract<SafeApiResponse<TEndpoint>, { status: TStatusCode }>

type RequiredKeys<T> = {
  [P in keyof T]-?: undefined extends T[P] ? never : P;
}[keyof T];

type MaybeOptionalArg<T> = RequiredKeys<T> extends never ? [config?: T] : [config: T];
type NotNever<T> = [T] extends [never] ? false : true;

export type ValidateSide = "none" | "input" | "output" | "both";
export type OnValidate = (ctx: {
  side: "input" | "output";
  method: string;
  path: string;
  schema: unknown;
  value: unknown;
}) => unknown | Promise<unknown>;

// </ApiClientTypes>
`;

  // Endpoint defs are structural (`typeof endpointConst`); DeepInfer via InferSchemaValue.
  const InferTEndpoint = "TEndpoint";

  const apiClient = `
// <TypedStatusError>
export class TypedStatusError<TData = unknown> extends Error {
  response: TypedErrorResponse<TData, ErrorStatusCode, unknown>;
  status: number;
  constructor(response: TypedErrorResponse<TData, ErrorStatusCode, unknown>) {
    super(\`HTTP \${response.status}: \${response.statusText}\`);
    this.name = 'TypedStatusError';
    this.response = response;
    this.status = response.status;
  }
}
// </TypedStatusError>

${ctx.runtime !== "none" ? generateValidateHelpers(ctx) : ""}

// <ApiClient>
export class ApiClient {
  baseUrl: string = "";
  successStatusCodes = successStatusCodes;
  errorStatusCodes = errorStatusCodes;
  validate: ValidateSide = ${JSON.stringify(ctx.validateSide)};
  onValidate?: OnValidate;

  constructor(
    public fetcher: Fetcher,
    options?: { validate?: ValidateSide; onValidate?: OnValidate },
  ) {
    if (options?.validate !== undefined) this.validate = options.validate;
    if (options?.onValidate) this.onValidate = options.onValidate;
  }

  setBaseUrl(baseUrl: string) {
    this.baseUrl = baseUrl;
    return this;
  }

  setValidate(validate: ValidateSide) {
    this.validate = validate;
    return this;
  }

  setOnValidate(onValidate: OnValidate | undefined) {
    this.onValidate = onValidate;
    return this;
  }

  /**
   * Replace path parameters in URL
   * Supports both OpenAPI format {param} and Express format :param
   */
  defaultDecodePathParams = (url: string, params: unknown): string => {
    const record = (params ?? {}) as Record<string, unknown>;
    return url
      .replace(/{(\\w+)}/g, (_, key: string) => (record[key] != null ? String(record[key]) : \`{\${key}}\`))
      .replace(/:([a-zA-Z0-9_]+)/g, (_, key: string) => (record[key] != null ? String(record[key]) : \`:\${key}\`));
  }

  /** Uses URLSearchParams, skips null/undefined values */
  defaultEncodeSearchParams = (queryParams: unknown): URLSearchParams | undefined => {
    if (!queryParams || typeof queryParams !== "object") return;

    const searchParams = new URLSearchParams();
    Object.entries(queryParams as Record<string, unknown>).forEach(([key, value]) => {
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
  }

  /** Append cookie params as a Cookie header (or merge into existing). */
  defaultEncodeCookies = (cookies: unknown, headers: Headers): void => {
    if (!cookies || typeof cookies !== "object") return;
    const parts = Object.entries(cookies as Record<string, unknown>)
      .filter(([, value]) => value != null)
      .map(([key, value]) => \`\${key}=\${String(value)}\`);
    if (!parts.length) return;
    const existing = headers.get("cookie");
    headers.set("cookie", existing ? \`\${existing}; \${parts.join("; ")}\` : parts.join("; "));
  }

  defaultParseResponseData = async (response: FetcherResponse): Promise<unknown> => {
    const contentType = response.headers.get("content-type") ?? "";
    if (contentType.startsWith("text/")) {
      return (await response.text())
    }

    if (contentType === "application/octet-stream") {
      return (await response.arrayBuffer())
    }

    if (
      contentType.includes("application/json") ||
      (contentType.includes("application/") && contentType.includes("json")) ||
      contentType === "*/*"
      ) {
      try {
        return await response.json();
      } catch {
        return undefined
      }
    }

    return
  }

  ${Object.entries(byMethods)
    .map(([method, endpointByMethod]) => {
      const capitalizedMethod = capitalize(method);

      return endpointByMethod.length
        ? `// <ApiClient.${method}>
    ${method}<Path extends keyof ${capitalizedMethod}Endpoints, TEndpoint extends ${capitalizedMethod}Endpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean } : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean })
      >
    ): Promise<Extract<InferResponseByStatus<${InferTEndpoint}, SuccessStatusCode>, { data: {} }>["data"]>;

    ${method}<Path extends keyof ${capitalizedMethod}Endpoints, TEndpoint extends ${capitalizedMethod}Endpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean } : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean })
      >
    ): Promise<SafeApiResponse<TEndpoint>>;

    ${method}<Path extends keyof ${capitalizedMethod}Endpoints, _TEndpoint extends ${capitalizedMethod}Endpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<any>
    ): Promise<any> {
        return this.request("${method}", path, ...params);
    }
    // </ApiClient.${method}>
    `
        : "";
    })
    .join("\n")}

    // <ApiClient.request>
    /**
     * Generic request method with full type-safety for any endpoint
     */
    request<
      TMethod extends keyof EndpointByMethod,
      TPath extends keyof EndpointByMethod[TMethod],
      TEndpoint extends EndpointByMethod[TMethod][TPath]
    >(
      method: TMethod,
      path: TPath,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean } : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean })
      >
    ): Promise<Extract<InferResponseByStatus<${InferTEndpoint}, SuccessStatusCode>, { data: {} }>["data"]>

    request<
      TMethod extends keyof EndpointByMethod,
      TPath extends keyof EndpointByMethod[TMethod],
      TEndpoint extends EndpointByMethod[TMethod][TPath]
    >(
      method: TMethod,
      path: TPath,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean } : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean })
      >
    ): Promise<SafeApiResponse<TEndpoint>>;

    request<
      TMethod extends keyof EndpointByMethod,
      TPath extends keyof EndpointByMethod[TMethod],
      TEndpoint extends EndpointByMethod[TMethod][TPath]
    >(
      method: TMethod,
      path: TPath,
      ...params: MaybeOptionalArg<any>
    ): Promise<any> {
      return (async () => {
      const requestParams = params[0];
      const withResponse = requestParams?.withResponse;
      const throwOnStatusError = requestParams?.throwOnStatusError ?? (withResponse ? false : true);
      let overrides = requestParams?.overrides;
      const validateSide: ValidateSide = requestParams?.validate ?? this.validate;

      const parametersToSend: EndpointParameters = {};
      if (requestParams?.body !== undefined) parametersToSend.body = requestParams.body;
      if (requestParams?.query !== undefined) parametersToSend.query = requestParams.query;
      if (requestParams?.header !== undefined) parametersToSend.header = requestParams.header;
      if (requestParams?.path !== undefined) parametersToSend.path = requestParams.path;
      if (requestParams?.cookie !== undefined) parametersToSend.cookie = requestParams.cookie;

      ${
        ctx.runtime !== "none"
          ? `type RuntimeEndpoint = {
        parameters?: Partial<Record<"body" | "query" | "header" | "path" | "cookie", unknown>>;
        responses?: Record<string, unknown>;
      };
      const endpointSchema = EndpointByMethod[method][path] as RuntimeEndpoint;
      const shouldValidateInput = validateSide === "input" || validateSide === "both";
      if (shouldValidateInput && endpointSchema.parameters) {
        const paramSchema = endpointSchema.parameters;
        for (const key of ["body", "query", "header", "path", "cookie"] as const) {
          const schema = paramSchema[key];
          const value = parametersToSend[key];
          if (schema !== undefined && value !== undefined) {
            parametersToSend[key] = await runValidate({
              side: "input",
              method: String(method),
              path: String(path),
              schema,
              value,
              onValidate: this.onValidate,
            });
          }
        }
      }`
          : "const endpointSchema = undefined;"
      }

      const resolvedPath = (this.fetcher.decodePathParams ?? this.defaultDecodePathParams)(this.baseUrl + (path as string), parametersToSend.path ?? {});
      const url = new URL(resolvedPath);
      const urlSearchParams = (this.fetcher.encodeSearchParams ?? this.defaultEncodeSearchParams)(parametersToSend.query);

      if (parametersToSend.cookie) {
        const headers = new Headers((overrides as RequestInit | undefined)?.headers);
        (this.fetcher.encodeCookies ?? this.defaultEncodeCookies)(parametersToSend.cookie, headers);
        overrides = { ...overrides, headers };
      }

      const response = await this.fetcher.fetch({
        method: method,
        path: (path as string),
        url,
        urlSearchParams,
        parameters: Object.keys(parametersToSend).length ? parametersToSend : undefined,
        requestFormat: endpointRequestFormats[method]?.[path] ?? "json",
        overrides,
        throwOnStatusError
      });
          let data = await (this.fetcher.parseResponseData ?? this.defaultParseResponseData)(response);
          ${
            ctx.runtime !== "none"
              ? `const shouldValidateOutput = validateSide === "output" || validateSide === "both";
          if (shouldValidateOutput && response.ok && endpointSchema?.responses) {
            const responseSchema = endpointSchema.responses[String(response.status)] ?? endpointSchema.responses["default"];
            if (responseSchema) {
              data = await runValidate({
                side: "output",
                method: String(method),
                path: String(path),
                schema: responseSchema,
                value: data,
                onValidate: this.onValidate,
              });
            }
          }`
              : ""
          }
          const typedResponse = Object.assign(response, {
            data: data,
            json: () => Promise.resolve(data)
          }) as SafeApiResponse<TEndpoint>;

          if (throwOnStatusError && (errorStatusCodes as readonly number[]).includes(response.status)) {
            throw new TypedStatusError(typedResponse as TypedErrorResponse<unknown, ErrorStatusCode, unknown>);
          }

          return withResponse ? typedResponse : data;
      })() as Extract<InferResponseByStatus<${InferTEndpoint}, SuccessStatusCode>, { data: {} }>["data"]
    }
    // </ApiClient.request>
}

export function createApiClient(
  fetcher: Fetcher,
  baseUrl?: string,
  options?: { validate?: ValidateSide; onValidate?: OnValidate },
) {
  return new ApiClient(fetcher, options).setBaseUrl(baseUrl ?? "");
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
   console.error(\`Error \${result.status}:\`, error);
 }
*/

// </ApiClient>
`;

  return apiClientTypes + apiClient;
};

const generateValidateHelpers = (ctx: GeneratorContext): string => {
  const parseExpr = (() => {
    switch (ctx.runtime) {
      case "zod":
      case "zod3":
        return `(schema as { parse: (v: unknown) => unknown }).parse(value)`;
      case "valibot":
        return `v.parse(schema as v.GenericSchema, value)`;
      case "effect":
        return `Schema.decodeUnknownSync(schema as Schema.Schema<unknown, unknown, never>)(value)`;
      case "effect3":
        return `S.decodeUnknownSync(schema as S.Schema<unknown, unknown, never>)(value)`;
      case "arktype":
        return `(() => { const out = (schema as { (data: unknown): unknown }).call(schema, value); if (out instanceof type.errors) throw out; return out; })()`;
      default:
        return `value`;
    }
  })();

  return `
// <ValidateHelpers>
const defaultParse = (schema: unknown, value: unknown): unknown => {
  return ${parseExpr};
};

const runValidate = async (ctx: {
  side: "input" | "output";
  method: string;
  path: string;
  schema: unknown;
  value: unknown;
  onValidate?: OnValidate;
}): Promise<unknown> => {
  if (ctx.onValidate) return ctx.onValidate(ctx);
  return defaultParse(ctx.schema, ctx.value);
};
// </ValidateHelpers>
`;
};

/** Effect-native client — returns Effect with typed errors in the channel. */
const generateEffectApiClient = (ctx: GeneratorContext): string => {
  const typesOnly = generateApiClient({ ...ctx, client: "promise" });
  const typesPart = (typesOnly.split("// <ApiClient>")[0] ?? typesOnly).replace(
    /\/\/ <ValidateHelpers>[\s\S]*?\/\/ <\/ValidateHelpers>\n?/g,
    "",
  );
  const validateHelpers = ctx.runtime !== "none" ? generateValidateHelpers(ctx) : "";
  const body = effectApiClientBody({
    validateSide: ctx.validateSide,
    runtime: ctx.runtime,
    endpointList: ctx.endpointList,
    validateHelpers,
  });
  return typesPart + body;
};
