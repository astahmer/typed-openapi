import { capitalize, groupBy } from "pastable/server";
import { Box } from "./box.ts";
import { mapOpenApiEndpoints } from "./map-openapi-endpoints.ts";
import { AnyBox, AnyBoxDef } from "./types.ts";
import * as Codegen from "@sinclair/typebox-codegen";
import { match } from "ts-pattern";
import { type } from "arktype";
import { wrapWithQuotesIfNeeded } from "./string-utils.ts";
import type { NameTransformOptions } from "./types.ts";

type GeneratorOptions = ReturnType<typeof mapOpenApiEndpoints> & {
  runtime?: "none" | keyof typeof runtimeValidationGenerator;
  schemasOnly?: boolean;
  nameTransform?: NameTransformOptions | undefined;
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
  const ctx = { ...options, runtime: options.runtime ?? "none" } as GeneratorContext;

  const schemaList = generateSchemaList(ctx);
  const endpointSchemaList = options.schemasOnly ? "" : generateEndpointSchemaList(ctx);
  const apiClient = options.schemasOnly ? "" : generateApiClient(ctx);

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
      ${
        endpoint.responses
          ? `responses: ${generateResponsesObject(endpoint.responses, ctx)},`
          : ""
      }
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
           ${list.map(
             (endpoint) => `"${endpoint.path}": ${ctx.runtime === "none" ? "Endpoints." : ""}${endpoint.meta.alias}`,
           )}
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
  const { endpointList } = ctx;
  const byMethods = groupBy(endpointList, "method");
  const endpointSchemaList = generateEndpointByMethod(ctx);

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

// Error handling types
export type ApiResponse<TSuccess, TErrors extends Record<string, unknown> = {}> = {
  ok: true;
  status: number;
  data: TSuccess;
} | {
  [K in keyof TErrors]: {
    ok: false;
    status: K extends string ? (K extends \`\${number}\` ? number : never) : never;
    error: TErrors[K];
  }
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
        .otherwise(() => `TEndpoint["parameters"]`)}>
    ): Promise<${match(ctx.runtime)
      .with("zod", "yup", () => infer(`TEndpoint["response"]`))
      .with("arktype", "io-ts", "typebox", "valibot", () => infer(`TEndpoint`) + `["response"]`)
      .otherwise(() => `TEndpoint["response"]`)}>;
    
    ${method}<Path extends keyof ${capitalizedMethod}Endpoints, TEndpoint extends ${capitalizedMethod}Endpoints[Path]>(
      path: Path,
      options: { withResponse: true },
      ...params: MaybeOptionalArg<${match(ctx.runtime)
        .with("zod", "yup", () => infer(`TEndpoint["parameters"]`))
        .with("arktype", "io-ts", "typebox", "valibot", () => infer(`TEndpoint`) + `["parameters"]`)
        .otherwise(() => `TEndpoint["parameters"]`)}>
    ): Promise<SafeApiResponse<TEndpoint>>;
    
    ${method}<Path extends keyof ${capitalizedMethod}Endpoints, TEndpoint extends ${capitalizedMethod}Endpoints[Path]>(
      path: Path,
      optionsOrParams?: { withResponse?: boolean } | ${match(ctx.runtime)
        .with("zod", "yup", () => infer(`TEndpoint["parameters"]`))
        .with("arktype", "io-ts", "typebox", "valibot", () => infer(`TEndpoint`) + `["parameters"]`)
        .otherwise(() => `TEndpoint["parameters"]`)},
      ...params: any[]
    ): Promise<any> {
      const hasWithResponse = optionsOrParams && typeof optionsOrParams === 'object' && 'withResponse' in optionsOrParams;
      const requestParams = hasWithResponse ? params[0] : optionsOrParams;
      
      if (hasWithResponse && optionsOrParams.withResponse) {
        return this.fetcher("${method}", this.baseUrl + path, requestParams)
          .then(async (response) => {
            const data = await this.parseResponse(response);
            if (response.ok) {
              return { ok: true, status: response.status, data };
            } else {
              return { ok: false, status: response.status, error: data };
            }
          });
      } else {
        return this.fetcher("${method}", this.baseUrl + path, requestParams)
            .then(response => this.parseResponse(response))${match(ctx.runtime)
              .with("zod", "yup", () => `as Promise<${infer(`TEndpoint["response"]`)}>`)
              .with("arktype", "io-ts", "typebox", "valibot", () => `as Promise<${infer(`TEndpoint`) + `["response"]`}>`)
              .otherwise(() => `as Promise<TEndpoint["response"]>`)};
      }
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
    : Promise<Omit<Response, "json"> & {
      /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/json) */
      json: () => Promise<TEndpoint extends { response: infer Res } ? Res : never>;
    }> {
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
   console.error(\`Error \${result.status}:\`, result.error);
 }
*/

// </ApiClient
`;

  return endpointSchemaList + apiClientTypes + apiClient;
};
