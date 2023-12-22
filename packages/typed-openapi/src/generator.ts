import { capitalize, groupBy } from "pastable/server";
import { Box } from "./box";
import { prettify } from "./format";
import { mapOpenApiEndpoints } from "./map-openapi-endpoints";
import { AnyBox, AnyBoxDef } from "./types";
import * as Codegen from "@sinclair/typebox-codegen";
import { match } from "ts-pattern";
import { type } from "arktype";
import { wrapWithQuotesIfNeeded } from "./string-utils";

type GeneratorOptions = ReturnType<typeof mapOpenApiEndpoints> & {
  runtime?: "none" | keyof typeof runtimeValidationGenerator;
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
  valibot: (input: string) => `v.Output<${input}>`,
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
      .replace(new RegExp(`(${endpointExport.source})` + new RegExp(/(.*? )(y\.object)(\()/).source, "g"), "$1$2("),
  zod: (line: string) =>
    line
      .replace(/z\.infer<\s*?typeof (.*?)\s*?>/g, "typeof $1")
      .replace(new RegExp(`(${endpointExport.source})` + new RegExp(/(.*? )(z\.object)(\()/).source, "g"), "$1$2("),
};

export const generateFile = (options: GeneratorOptions) => {
  const ctx = { ...options, runtime: options.runtime ?? "none" } as GeneratorContext;

  const schemaList = generateSchemaList(ctx);
  const endpointSchemaList = generateEndpointSchemaList(ctx);
  const apiClient = generateApiClient(ctx);

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

  return prettify(file);
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
    str += `${wrapWithQuotesIfNeeded(key)}: ${box.value},\n`;
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
              if (Box.isReference(box) && !box.params.generics) {
                box.value = `Schemas.${box.value}`;
              }

              return box;
            }).value
          : endpoint.response.value
      },
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
    ${endpointList.length ? `export type AllEndpoints = EndpointByMethod[keyof EndpointByMethod];` : ""}
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

type Fetcher = (method: Method, url: string, parameters?: EndpointParameters | undefined) => Promise<Endpoint["response"]>;

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
      .otherwise(() => `TEndpoint["response"]`)}> {
      return this.fetcher("${method}", this.baseUrl + path, params[0])${match(ctx.runtime)
          .with("zod", () => `as Promise<TEndpoint["response"]> `).otherwise(() => ``)};
    }
    // </ApiClient.${method}>
    `
        : "";
    })
    .join("\n")}
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
`;

  return endpointSchemaList + apiClientTypes + apiClient;
};
