import { capitalize, groupBy } from "pastable/server";
import { Box } from "./box.ts";
import { mapOpenApiEndpoints } from "./map-openapi-endpoints.ts";
import { AnyBox, AnyBoxDef } from "./types.ts";
import { type } from "arktype";
import { wrapWithQuotesIfNeeded } from "./string-utils.ts";
import type { BoxObject, NameTransformOptions } from "./types.ts";
import { emitRuntimeFile } from "./runtimes/emit-runtime-file.ts";
import { getRuntimeAdapter, type ShippedRuntime } from "./runtimes/registry.ts";
import { resolveValidationPolicy, type ValidationPreset, type ValidationPolicy } from "./runtimes/validation.ts";
import type { OutputRuntime as RuntimeName } from "./runtimes/types.ts";
import { boxToIr } from "./schema-ir/box-to-ir.ts";
import { irToTs, renderSchemaJsdoc } from "./schema-ir/ir-to-ts.ts";
import { openApiToIr } from "./schema-ir/openapi-to-ir.ts";
import type { SchemaIrConvertContext } from "./schema-ir/types.ts";

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

export type GeneratorOptions = ReturnType<typeof mapOpenApiEndpoints> & {
  runtime?: RuntimeName;
  /** Validation depth for runtime adapters (ignored when runtime is `none`) */
  validation?: ValidationPreset | (Partial<ValidationPolicy> & { preset?: ValidationPreset });
  schemasOnly?: boolean;
  nameTransform?: NameTransformOptions | undefined;
  successStatusCodes?: readonly number[];
  errorStatusCodes?: readonly number[];
  includeClient?: boolean;
  jsdoc?: boolean;
};
type GeneratorContext = Required<Omit<GeneratorOptions, "validation">> & {
  validation: ValidationPolicy;
};

export const allowedRuntimes = type("'none' | 'zod' | 'zod3' | 'effect' | 'effect3' | 'valibot' | 'arktype'");
export type OutputRuntime = typeof allowedRuntimes.infer;

const shouldRenderDescriptionComments = (ctx: GeneratorContext) => ctx.jsdoc && ctx.runtime === "none";

/** Deep-infer runtime schema values hanging off endpoint const objects. */
const runtimeInferHelper = (runtime: OutputRuntime): string => {
  if (runtime === "none") {
    return `type InferSchemaValue<T> = T;`;
  }
  if (runtime === "zod" || runtime === "zod3") {
    return `type InferSchemaValue<T> = T extends z.ZodType ? z.infer<T> : T extends object ? { [K in keyof T]: InferSchemaValue<T[K]> } : T;`;
  }
  if (runtime === "valibot") {
    return `type InferSchemaValue<T> = T extends v.GenericSchema ? v.InferOutput<T> : T extends object ? { [K in keyof T]: InferSchemaValue<T[K]> } : T;`;
  }
  if (runtime === "effect" || runtime === "effect3") {
    return `type InferSchemaValue<T> = T extends { Type: infer O } ? O : T extends object ? { [K in keyof T]: InferSchemaValue<T[K]> } : T;`;
  }
  if (runtime === "arktype") {
    return `type InferSchemaValue<T> = T extends { infer: infer O } ? O : T extends object ? { [K in keyof T]: InferSchemaValue<T[K]> } : T;`;
  }
  return `type InferSchemaValue<T> = T;`;
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
  const ctx = {
    ...options,
    runtime,
    validation: resolveValidationPolicy(options.validation ?? (runtime === "none" ? "loose" : "strict")),
    successStatusCodes: options.successStatusCodes ?? DEFAULT_SUCCESS_STATUS_CODES,
    errorStatusCodes: options.errorStatusCodes ?? DEFAULT_ERROR_STATUS_CODES,
    includeClient: options.includeClient ?? true,
    jsdoc: options.jsdoc ?? false,
  } as GeneratorContext;

  const endpointByMethod = options.schemasOnly ? "" : generateEndpointByMethod(ctx);
  const apiClient = options.schemasOnly || !ctx.includeClient ? "" : generateApiClient(ctx);

  if (ctx.runtime !== "none") {
    const adapter = getRuntimeAdapter(ctx.runtime as ShippedRuntime);
    const runtimeSchemasAndEndpoints = emitRuntimeFile({
      adapter,
      refs: ctx.refs,
      endpointList: ctx.endpointList,
      validation: ctx.validation,
      schemasOnly: options.schemasOnly ?? false,
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

const irCtxFromGenerator = (ctx: GeneratorContext): SchemaIrConvertContext => ({
  getRefName: (ref: string) => ctx.refs.getInfosByRef(ref).normalized,
});

const generateSchemaList = (ctx: GeneratorContext) => {
  const { refs, runtime } = ctx;
  const irCtx = irCtxFromGenerator(ctx);
  let file = `
  ${runtime === "none" ? "export namespace Schemas {" : ""}
    // <Schemas>
  `;
  refs.getOrderedSchemas().forEach(([, infos]) => {
    if (!infos?.name) return;
    if (infos.kind !== "schemas") return;

    const schema = refs.get(infos.ref);
    const node = openApiToIr(schema, irCtx);
    const description = shouldRenderDescriptionComments(ctx) ? node.meta.description : undefined;
    const schemaValue = irToTs(node, {
      prefixRefsWithSchemas: false,
      jsdoc: shouldRenderDescriptionComments(ctx),
    });

    file += `${renderSchemaJsdoc(description)}export type ${infos.normalized} = ${schemaValue}\n`;
  });

  return (
    file +
    `
    // </Schemas>
    ${runtime === "none" ? "}" : ""}
  `
  );
};

/** Types-only: Box → Schema IR → TS string (single source of truth with runtimes). */
const boxToString = (
  box: Box<AnyBoxDef>,
  ctx: GeneratorContext,
  options: { prefixRefsWithSchemas?: boolean } = {},
): string => {
  const prefixRefsWithSchemas = options.prefixRefsWithSchemas ?? true;
  const node = boxToIr(box, irCtxFromGenerator(ctx));
  return irToTs(node, {
    prefixRefsWithSchemas,
    jsdoc: shouldRenderDescriptionComments(ctx),
  });
};

const parameterObjectToString = (parameters: Box<AnyBoxDef> | Record<string, AnyBox>, ctx: GeneratorContext) => {
  if (parameters instanceof Box) {
    return boxToString(parameters, ctx);
  }

  let str = "{";
  for (const [key, box] of Object.entries(parameters)) {
    str += `${wrapWithQuotesIfNeeded(key)}${box.type === "optional" ? "?" : ""}: ${indentMultiline(boxToString(box, ctx))},\n`;
  }
  return str + "}";
};

const responseHeadersObjectToString = (responseHeaders: Record<string, Box<BoxObject>>, ctx: GeneratorContext) => {
  let str = "{";
  for (const [key, responseHeader] of Object.entries(responseHeaders)) {
    str += `${wrapWithQuotesIfNeeded(key.toLowerCase())}: ${indentMultiline(boxToString(responseHeader, ctx))},\n`;
  }
  return str + "}";
};

const generateResponsesObject = (responses: Record<string, AnyBox>, ctx: GeneratorContext) => {
  let str = "{";
  for (const [statusCode, responseType] of Object.entries(responses)) {
    const value = indentMultiline(boxToString(responseType, ctx));
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
            ${parameters.query ? `query:  ${parameterObjectToString(parameters.query, ctx)},` : ""}
        ${parameters.path ? `path:  ${parameterObjectToString(parameters.path, ctx)},` : ""}
        ${parameters.header ? `header:  ${parameterObjectToString(parameters.header, ctx)},` : ""}
        ${parameters.body ? `body:  ${parameterObjectToString(parameters.body, ctx)},` : ""}
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
  responseHeaders?: TConfig["responseHeaders"]
};

export interface Fetcher {
    decodePathParams?: (path: string, pathParams: Record<string, string>) => string
  encodeSearchParams?: (searchParams: Record<string, unknown> | undefined) => URLSearchParams
    //
    fetch: (input: {
      method: Method;
      url: URL;
      urlSearchParams?: URLSearchParams | undefined;
      parameters?: EndpointParameters | undefined;
      path: string;
      overrides?: RequestInit;
      throwOnStatusError?: boolean
    }) => Promise<Response>;
    parseResponseData?: (response: Response) => Promise<unknown>
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
export interface TypedSuccessResponse<TSuccess, TStatusCode, THeaders> extends Omit<Response, "ok" | "status" | "json" | "headers"> {
  ok: true;
  status: TStatusCode;
  headers: never extends THeaders ? Headers :  TypedHeaders<THeaders>;
  data: TSuccess;
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) */
  json: () => Promise<TSuccess>;
}

/** @see https://developer.mozilla.org/en-US/docs/Web/API/Response */
export interface TypedErrorResponse<TData, TStatusCode, THeaders> extends Omit<Response, "ok" | "status" | "json" | "headers"> {
  ok: false;
  status: TStatusCode;
  headers: never extends THeaders ? Headers :  TypedHeaders<THeaders>;
  data: TData;
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) */
  json: () => Promise<TData>;
}

export type TypedApiResponse<TAllResponses extends Record<string | number, unknown> = {}, THeaders = {}> =
  ({
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
  }[keyof TAllResponses]);

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
      .replace(/{(\\w+)}/g, (_, key: string) => params[key] || \`{\${key}}\`)
      .replace(/:([a-zA-Z0-9_]+)/g, (_, key: string) => params[key] || \`:\${key}\`);
  }

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
  }

  defaultParseResponseData = async (response: Response): Promise<unknown> => {
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
          ? NotNever<UParams> extends true ? InferSchemaValue<UParams> & { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean } : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean })
      >
    ): Promise<Extract<InferResponseByStatus<${InferTEndpoint}, SuccessStatusCode>, { data: {} }>["data"]>;

    ${method}<Path extends keyof ${capitalizedMethod}Endpoints, TEndpoint extends ${capitalizedMethod}Endpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaValue<UParams> & { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean } : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
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
          ? NotNever<UParams> extends true ? InferSchemaValue<UParams> & { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean } : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
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
          ? NotNever<UParams> extends true ? InferSchemaValue<UParams> & { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean } : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
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
      const requestParams = params[0];
      const withResponse = requestParams?.withResponse;
      const { withResponse: _, throwOnStatusError = withResponse ? false : true, overrides, ...fetchParams } = requestParams || {};

      const parametersToSend: EndpointParameters = {};
      if (requestParams?.body !== undefined) (parametersToSend as any).body = requestParams.body;
      if (requestParams?.query !== undefined) (parametersToSend as any).query = requestParams.query;
      if (requestParams?.header !== undefined) (parametersToSend as any).header = requestParams.header;
      if (requestParams?.path !== undefined) (parametersToSend as any).path = requestParams.path;

      const resolvedPath = (this.fetcher.decodePathParams ?? this.defaultDecodePathParams)(this.baseUrl + (path as string), (parametersToSend.path ?? {}) as Record<string, string>);
      const url = new URL(resolvedPath);
      const urlSearchParams = (this.fetcher.encodeSearchParams ?? this.defaultEncodeSearchParams)(parametersToSend.query);

      const promise = this.fetcher.fetch({
        method: method,
        path: (path as string),
        url,
        urlSearchParams,
        parameters: Object.keys(fetchParams).length ? fetchParams : undefined,
        overrides,
        throwOnStatusError
      })
        .then(async (response) => {
          const data = await (this.fetcher.parseResponseData ?? this.defaultParseResponseData)(response);
          const typedResponse = Object.assign(response, {
            data: data,
            json: () => Promise.resolve(data)
          }) as SafeApiResponse<TEndpoint>;

          if (throwOnStatusError && errorStatusCodes.includes(response.status as never)) {
            throw new TypedStatusError(typedResponse as never);
          }

          return withResponse ? typedResponse : data;
        });

        return promise as Extract<InferResponseByStatus<${InferTEndpoint}, SuccessStatusCode>, { data: {} }>["data"]
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
   console.error(\`Error \${result.status}:\`, error);
 }
*/

// </ApiClient>
`;

  return apiClientTypes + apiClient;
};
