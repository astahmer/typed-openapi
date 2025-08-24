import { capitalize, groupBy } from "pastable/server";
import { Box } from "./box.ts";
import { mapOpenApiEndpoints } from "./map-openapi-endpoints.ts";
import { AnyBox, AnyBoxDef } from "./types.ts";
import * as Codegen from "@sinclair/typebox-codegen";
import { match } from "ts-pattern";
import { type } from "arktype";
import { wrapWithQuotesIfNeeded } from "./string-utils.ts";
import type { NameTransformOptions } from "./types.ts";

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

const parameterObjectToString = (parameters: Box<AnyBoxDef> | Record<string, AnyBox>) => {
  if (parameters instanceof Box) return parameters.value;

  let str = "{";
  for (const [key, box] of Object.entries(parameters)) {
    str += `${wrapWithQuotesIfNeeded(key)}${box.type === "optional" ? "?" : ""}: ${box.value},\n`;
  }
  return str + "}";
};

const responseHeadersObjectToString = (responseHeaders: Record<string, AnyBox>, ctx: GeneratorContext) => {
  let str = "{";
  for (const [key, responseHeader] of Object.entries(responseHeaders)) {
    const value =
      ctx.runtime === "none"
        ? responseHeader.recompute((box) => {
            if (Box.isReference(box) && !box.params.generics && box.value !== "null") {
              box.value = `Schemas.${box.value}`;
            }

            return box;
          }).value
        : responseHeader.value;
    str += `${wrapWithQuotesIfNeeded(key.toLowerCase())}: ${value},\n`;
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
            ${parameters.query ? `query:  ${parameterObjectToString(parameters.query)},` : ""}
        ${parameters.path ? `path:  ${parameterObjectToString(parameters.path)},` : ""}
        ${parameters.header ? `header:  ${parameterObjectToString(parameters.header)},` : ""}
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
              )},`
            : ""
        }
          }`
          : "parameters: never,"
      }
      response: ${
        ctx.runtime === "none"
          ? endpoint.response.recompute((box) => {
              if (Box.isReference(box) && !box.params.generics && box.value !== "null") {
                box.value = `Schemas.${box.value}`;
              }

              return box;
            }).value
          : endpoint.response.value
      },
      ${endpoint.responses ? `responses: ${generateResponsesObject(endpoint.responses, ctx)},` : ""}
      ${
        endpoint.responseHeaders
          ? `responseHeaders: ${responseHeadersObjectToString(endpoint.responseHeaders, ctx)},`
          : ""
      }
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

  // Generate the StatusCode type from the configured success status codes
  const generateStatusCodeType = (statusCodes: readonly number[]) => {
    return statusCodes.join(" | ");
  };

  const statusCodeType = generateStatusCodeType(ctx.successStatusCodes);

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
  responseHeaders?: TConfig["responseHeaders"]
};

export type Fetcher = (method: Method, url: string, parameters?: EndpointParameters | undefined) => Promise<Response>;

// Status code type for success responses
export type SuccessStatusCode = ${statusCodeType};

// Error handling types
/** @see https://developer.mozilla.org/en-US/docs/Web/API/Response */
interface SuccessResponse<TSuccess, TStatusCode> extends Omit<Response, "ok" | "status" | "json"> {
  ok: true;
  status: TStatusCode;
  data: TSuccess;
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) */
  json: () => Promise<TSuccess>;
}

/** @see https://developer.mozilla.org/en-US/docs/Web/API/Response */
interface ErrorResponse<TData, TStatusCode> extends Omit<Response, "ok" | "status" | "json"> {
  ok: false;
  status: TStatusCode;
  data: TData;
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) */
  json: () => Promise<TData>;
}

export type TypedApiResponse<TSuccess, TAllResponses extends Record<string | number, unknown> = {}> =
  (keyof TAllResponses extends never
    ? SuccessResponse<TSuccess, number>
    : {
        [K in keyof TAllResponses]: K extends string
          ? K extends \`\${infer TStatusCode extends number}\`
            ? TStatusCode extends SuccessStatusCode
              ? SuccessResponse<TSuccess, TStatusCode>
              : ErrorResponse<TAllResponses[K], TStatusCode>
            : never
          : K extends number
            ? K extends SuccessStatusCode
              ? SuccessResponse<TSuccess, K>
              : ErrorResponse<TAllResponses[K], K>
            : never;
      }[keyof TAllResponses]);

export type SafeApiResponse<TEndpoint> = TEndpoint extends { response: infer TSuccess; responses: infer TResponses }
  ? TResponses extends Record<string, unknown>
    ? TypedApiResponse<TSuccess, TResponses>
    : SuccessResponse<TSuccess, number>
  : TEndpoint extends { response: infer TSuccess }
    ? SuccessResponse<TSuccess, number>
    : never;

type RequiredKeys<T> = {
  [P in keyof T]-?: undefined extends T[P] ? never : P;
}[keyof T];

type MaybeOptionalArg<T> = RequiredKeys<T> extends never ? [config?: T] : [config: T];

// </ApiClientTypes>
`;

  const apiClient = `
// <ApiClient>
export class ApiClient {
  baseUrl: string = "";

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
      const infer = inferByRuntime[ctx.runtime];

      return endpointByMethod.length
        ? `// <ApiClient.${method}>
    ${method}<Path extends keyof ${capitalizedMethod}Endpoints, TEndpoint extends ${capitalizedMethod}Endpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<${match(ctx.runtime)
        .with("zod", "yup", () => infer(`TEndpoint["parameters"]`))
        .with("arktype", "io-ts", "typebox", "valibot", () => infer(`TEndpoint`) + `["parameters"]`)
        .otherwise(() => `TEndpoint["parameters"]`)} & { withResponse?: false }>
    ): Promise<${match(ctx.runtime)
      .with("zod", "yup", () => infer(`TEndpoint["response"]`))
      .with("arktype", "io-ts", "typebox", "valibot", () => infer(`TEndpoint`) + `["response"]`)
      .otherwise(() => `TEndpoint["response"]`)}>;

    ${method}<Path extends keyof ${capitalizedMethod}Endpoints, TEndpoint extends ${capitalizedMethod}Endpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<${match(ctx.runtime)
        .with("zod", "yup", () => infer(`TEndpoint["parameters"]`))
        .with("arktype", "io-ts", "typebox", "valibot", () => infer(`TEndpoint`) + `["parameters"]`)
        .otherwise(() => `TEndpoint["parameters"]`)} & { withResponse: true }>
    ): Promise<SafeApiResponse<TEndpoint>>;

    ${method}<Path extends keyof ${capitalizedMethod}Endpoints, TEndpoint extends ${capitalizedMethod}Endpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<any>
    ): Promise<any> {
      const requestParams = params[0];
      const withResponse = requestParams?.withResponse;

      const { withResponse: _, ...fetchParams } = requestParams || {};

      if (withResponse) {
        // Don't count withResponse as params
        return this.fetcher("${method}", this.baseUrl + path, Object.keys(fetchParams).length ? requestParams : undefined)
          .then(async (response) => {
            // Parse the response data
            const data = await this.parseResponse(response);

            // Override properties while keeping the original Response object
            const typedResponse = Object.assign(response, {
              data: data,
              json: () => Promise.resolve(data)
            });
            return typedResponse;
          });
      }

      return this.fetcher("${method}", this.baseUrl + path, requestParams)
          .then(response => this.parseResponse(response))${match(ctx.runtime)
            .with("zod", "yup", () => `as Promise<${infer(`TEndpoint["response"]`)}>`)
            .with(
              "arktype",
              "io-ts",
              "typebox",
              "valibot",
              () => `as Promise<${infer(`TEndpoint`) + `["response"]`}>`,
            )
            .otherwise(() => `as Promise<TEndpoint["response"]>`)};
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
      ...params: MaybeOptionalArg<${match(ctx.runtime)
        .with("zod", "yup", () =>
          inferByRuntime[ctx.runtime](`TEndpoint extends { parameters: infer Params } ? Params : never`),
        )
        .with(
          "arktype",
          "io-ts",
          "typebox",
          "valibot",
          () => inferByRuntime[ctx.runtime](`TEndpoint`) + `["parameters"]`,
        )
        .otherwise(() => `TEndpoint extends { parameters: infer Params } ? Params : never`)}>)
    : Promise<SafeApiResponse<TEndpoint>> {
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
   console.error(\`Error \${result.status}:\`, error);
 }
*/

// </ApiClient>
`;

  return apiClientTypes + apiClient;
};
