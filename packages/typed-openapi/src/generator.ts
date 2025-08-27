import { capitalize, groupBy } from "pastable/server";
import { Box } from "./box.ts";
import { mapOpenApiEndpoints } from "./map-openapi-endpoints.ts";
import { AnyBox, AnyBoxDef } from "./types.ts";
import * as Codegen from "@sinclair/typebox-codegen";
import { match } from "ts-pattern";
import { type } from "arktype";
import { wrapWithQuotesIfNeeded } from "./string-utils.ts";
import type { BoxObject, NameTransformOptions } from "./types.ts";

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
  runtime?: "none" | keyof typeof runtimeValidationGenerator;
  schemasOnly?: boolean;
  nameTransform?: NameTransformOptions | undefined;
  successStatusCodes?: readonly number[];
  errorStatusCodes?: readonly number[];
  includeClient?: boolean;
};
type GeneratorContext = Required<GeneratorOptions>;

export const allowedRuntimes = type("'none' | 'arktype' | 'io-ts' | 'typebox' | 'valibot' | 'yup' | 'zod'");
export type OutputRuntime = typeof allowedRuntimes.infer;

// TODO validate response schemas in sample fetch ApiClient
// also, check that we can easily retrieve the response schema from the Fetcher

const runtimeValidationGenerator = {
  arktype: Codegen.ModelToArkType.Generate,
  "io-ts": Codegen.ModelToIoTs.Generate,
  typebox: Codegen.ModelToTypeBox.Generate,
  valibot: Codegen.ModelToValibot.Generate,
  yup: Codegen.ModelToYup.Generate,
  zod: Codegen.ModelToZod.Generate,
};

const inferByRuntime = {
  none: (input: string) => input,
  arktype: (input: string) => `${input}["infer"]`,
  "io-ts": (input: string) => `t.TypeOf<${input}>`,
  typebox: (input: string) => `Static<${input}>`,
  valibot: (input: string) => `v.InferOutput<${input}>`,
  yup: (input: string) => `y.InferType<${input}>`,
  zod: (input: string) => `z.infer<${input}>`,
};

const methods = ["get", "put", "post", "delete", "options", "head", "patch", "trace"] as const;
const methodsRegex = new RegExp(`(?:${methods.join("|")})_`);
const endpointExport = new RegExp(`export (?:type|const) (?:${methodsRegex.source})`);

const replacerByRuntime = {
  yup: (line: string) =>
    line
      .replace(/y\.InferType<\s*?typeof (.*?)\s*?>/g, "typeof $1")
      .replace(
        new RegExp(`(${endpointExport.source})` + new RegExp(/([\s\S]*? )(y\.object)(\()/).source, "g"),
        "$1$2(",
      ),
  zod: (line: string) =>
    line
      .replace(/z\.infer<\s*?typeof (.*?)\s*?>/g, "typeof $1")
      .replace(
        new RegExp(`(${endpointExport.source})` + new RegExp(/([\s\S]*? )(z\.object)(\()/).source, "g"),
        "$1$2(",
      ),
};

export const generateFile = (options: GeneratorOptions) => {
  const ctx = {
    ...options,
    runtime: options.runtime ?? "none",
    successStatusCodes: options.successStatusCodes ?? DEFAULT_SUCCESS_STATUS_CODES,
    errorStatusCodes: options.errorStatusCodes ?? DEFAULT_ERROR_STATUS_CODES,
    includeClient: options.includeClient ?? true,
  } as GeneratorContext;

  const schemaList = generateSchemaList(ctx);
  const endpointSchemaList = options.schemasOnly ? "" : generateEndpointSchemaList(ctx);
  const endpointByMethod = options.schemasOnly ? "" : generateEndpointByMethod(ctx);
  const apiClient = options.schemasOnly || !ctx.includeClient ? "" : generateApiClient(ctx);

  const transform =
    ctx.runtime === "none"
      ? (file: string) => file
      : (file: string) => {
          const model = Codegen.TypeScriptToModel.Generate(file);
          const transformer = runtimeValidationGenerator[ctx.runtime as Exclude<typeof ctx.runtime, "none">];
          // tmp fix for typebox, there's currently a "// todo" only with Codegen.ModelToTypeBox.Generate
          // https://github.com/sinclairzx81/typebox-codegen/blob/44d44d55932371b69f349331b1c8a60f5d760d9e/src/model/model-to-typebox.ts#L31
          const generated = ctx.runtime === "typebox" ? Codegen.TypeScriptToTypeBox.Generate(file) : transformer(model);

          let converted = "";
          const match = generated.match(/(const __ENDPOINTS_START__ =)([\s\S]*?)(export type __ENDPOINTS_END__)/);
          const content = match?.[2];

          if (content && ctx.runtime in replacerByRuntime) {
            const before = generated.slice(0, generated.indexOf("export type __ENDPOINTS_START"));
            converted =
              before +
              replacerByRuntime[ctx.runtime as keyof typeof replacerByRuntime](
                content.slice(content.indexOf("export")),
              );
          } else {
            converted = generated;
          }

          return converted;
        };

  const file = `
  ${transform(schemaList + endpointSchemaList)}
  ${endpointByMethod}
  ${apiClient}
  `;

  return file;
};

const generateSchemaList = ({ refs, runtime }: GeneratorContext) => {
  let file = `
  ${runtime === "none" ? "export namespace Schemas {" : ""}
    // <Schemas>
  `;
  refs.getOrderedSchemas().forEach(([schema, infos]) => {
    if (!infos?.name) return;
    if (infos.kind !== "schemas") return;

    file += `export type ${infos.normalized} = ${schema.value}\n`;
  });

  return (
    file +
    `
    // </Schemas>
    ${runtime === "none" ? "}" : ""}
  `
  );
};

const parameterObjectToString = (parameters: Box<AnyBoxDef> | Record<string, AnyBox>, ctx: GeneratorContext) => {
  if (parameters instanceof Box) {
    if (ctx.runtime === "none") {
      return parameters.recompute((box) => {
        if (Box.isReference(box) && !box.params.generics && box.value !== "null") {
          box.value = `Schemas.${box.value}`;
        }
        return box;
      }).value;
    }

    return parameters.value;
  }

  let str = "{";
  for (const [key, box] of Object.entries(parameters)) {
    str += `${wrapWithQuotesIfNeeded(key)}${box.type === "optional" ? "?" : ""}: ${box.value},\n`;
  }
  return str + "}";
};

const responseHeadersObjectToString = (responseHeaders: Record<string, Box<BoxObject>>) => {
  let str = "{";
  for (const [key, responseHeader] of Object.entries(responseHeaders)) {
    str += `${wrapWithQuotesIfNeeded(key.toLowerCase())}: ${responseHeader.value},\n`;
  }
  return str + "}";
};

const generateResponsesObject = (responses: Record<string, AnyBox>, ctx: GeneratorContext) => {
  let str = "{";
  for (const [statusCode, responseType] of Object.entries(responses)) {
    const value =
      ctx.runtime === "none"
        ? responseType.recompute((box) => {
            if (Box.isReference(box) && !box.params.generics && box.value !== "null") {
              box.value = `Schemas.${box.value}`;
            }

            return box;
          }).value
        : responseType.value;
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
    file += `export type ${endpoint.meta.alias} = {
      method: "${endpoint.method.toUpperCase()}",
      path: "${endpoint.path}",
      requestFormat: "${endpoint.requestFormat}",
      ${
        endpoint.meta.hasParameters
          ? `parameters: {
            ${parameters.query ? `query:  ${parameterObjectToString(parameters.query, ctx)},` : ""}
        ${parameters.path ? `path:  ${parameterObjectToString(parameters.path, ctx)},` : ""}
        ${parameters.header ? `header:  ${parameterObjectToString(parameters.header, ctx)},` : ""}
        ${
          parameters.body
            ? `body:  ${parameterObjectToString(
                ctx.runtime === "none"
                  ? parameters.body.recompute((box) => {
                      if (Box.isReference(box) && !box.params.generics) {
                        box.value = `Schemas.${box.value}`;
                      }
                      return box;
                    })
                  : parameters.body,
                ctx,
              )},`
            : ""
        }
          }`
          : "parameters: never,"
      }
      ${endpoint.responses ? `responses: ${generateResponsesObject(endpoint.responses, ctx)},` : ""}
      ${endpoint.responseHeaders ? `responseHeaders: ${responseHeadersObjectToString(endpoint.responseHeaders)},` : ""}
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
    transformRequest: (input: { method: Method, url: string, parameters?: EndpointParameters | undefined; path: string; overrides?: RequestInit }) => Promise<Response>;
    transformResponse?: (response: Response) => Promise<Response>;
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

export type SafeApiResponse<TEndpoint> = TEndpoint extends { responses: infer TResponses }
  ? TResponses extends Record<string, unknown>
    ? TypedApiResponse<TResponses, TEndpoint extends { responseHeaders: infer THeaders } ? THeaders : never>
    : never
  : never

export type InferResponseByStatus<TEndpoint, TStatusCode> = Extract<SafeApiResponse<TEndpoint>, { status: TStatusCode }>

type RequiredKeys<T> = {
  [P in keyof T]-?: undefined extends T[P] ? never : P;
}[keyof T];

type MaybeOptionalArg<T> = RequiredKeys<T> extends never ? [config?: T] : [config: T];

// </ApiClientTypes>
`;

  const infer = inferByRuntime[ctx.runtime];
  const InferTEndpoint = match(ctx.runtime)
    .with("zod", "yup", () => infer(`TEndpoint`))
    .with("arktype", "io-ts", "typebox", "valibot", () => infer(`TEndpoint`))
    .otherwise(() => `TEndpoint`);

  const apiClient = `
// <TypedResponseError>
export class TypedResponseError extends Error {
  response: TypedErrorResponse<unknown, ErrorStatusCode, unknown>;
  status: number;
  constructor(response: TypedErrorResponse<unknown, ErrorStatusCode, unknown>) {
    super(\`HTTP \${response.status}: \${response.statusText}\`);
    this.name = 'TypedResponseError';
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

  parseResponse = async <T>(response: Response): Promise<T> => {
    const contentType = response.headers.get('content-type');
    if (contentType?.includes('application/json')) {
      return response.json();
    }
    return response.text() as unknown as T;
  }

  ${Object.entries(byMethods)
    .map(([method, endpointByMethod]) => {
      const capitalizedMethod = capitalize(method);

      return endpointByMethod.length
        ? `// <ApiClient.${method}>
    ${method}<Path extends keyof ${capitalizedMethod}Endpoints, TEndpoint extends ${capitalizedMethod}Endpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<(${InferTEndpoint} extends { parameters: infer UParams } ? UParams : {}) & { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }>
    ): Promise<Extract<InferResponseByStatus<${InferTEndpoint}, SuccessStatusCode>, { data: {} }>["data"]>;

    ${method}<Path extends keyof ${capitalizedMethod}Endpoints, TEndpoint extends ${capitalizedMethod}Endpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<(${InferTEndpoint} extends { parameters: infer UParams } ? UParams : {}) & { overrides?: RequestInit; withResponse: true; throwOnStatusError?: boolean }>
    ): Promise<SafeApiResponse<TEndpoint>>;

    ${method}<Path extends keyof ${capitalizedMethod}Endpoints, TEndpoint extends ${capitalizedMethod}Endpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<any>
    ): Promise<any> {
      const requestParams = params[0];
      const withResponse = requestParams?.withResponse;
      const { withResponse: _, throwOnStatusError = withResponse ? false : true, ...fetchParams } = requestParams || {};

      const promise = this.fetcher.transformRequest({
        method: "${method}",
        path,
        url: this.baseUrl + path,
        parameters: Object.keys(fetchParams).length ? requestParams : undefined,
        overrides: requestParams?.overrides
      })
        .then(async (response) => {
          const data = await this.parseResponse(response);
          const typedResponse = Object.assign(response, {
            data: data,
            json: () => Promise.resolve(data)
          }) as SafeApiResponse<TEndpoint>;

          if (throwOnStatusError && errorStatusCodes.includes(response.status as never)) {
            throw new TypedResponseError(typedResponse as never);
          }

          return withResponse ? typedResponse : data;
        });

        return promise as Promise<Extract<InferResponseByStatus<${InferTEndpoint}, SuccessStatusCode>, { data: {} }>["data"]>
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
      ...params: MaybeOptionalArg<(${InferTEndpoint} extends { parameters: infer UParams } ? UParams : {}) & { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }>
    ): Promise<Extract<InferResponseByStatus<${InferTEndpoint}, SuccessStatusCode>, { data: {} }>["data"]>

    request<
      TMethod extends keyof EndpointByMethod,
      TPath extends keyof EndpointByMethod[TMethod],
      TEndpoint extends EndpointByMethod[TMethod][TPath]
    >(
      method: TMethod,
      path: TPath,
      ...params: MaybeOptionalArg<(${InferTEndpoint} extends { parameters: infer UParams } ? UParams : {}) & { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }>
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
      const { withResponse: _, throwOnStatusError = withResponse ? false : true, ...fetchParams } = requestParams || {};

      const promise = this.fetcher.transformRequest({
        method: method,
        path: (path as string),
        url: this.baseUrl + (path as string),
        parameters: Object.keys(fetchParams).length ? requestParams : undefined,
        overrides: requestParams?.overrides
      })
        .then(async (response) => {
          const data = await this.parseResponse(response);
          const typedResponse = Object.assign(response, {
            data: data,
            json: () => Promise.resolve(data)
          }) as SafeApiResponse<TEndpoint>;

          if (throwOnStatusError && errorStatusCodes.includes(response.status as never)) {
            throw new TypedResponseError(typedResponse as never);
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
