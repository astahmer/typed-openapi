import type { OpenAPIObject, ResponseObject } from "openapi3-ts/oas31";
import { OperationObject, ParameterObject } from "openapi3-ts/oas31";
import { capitalize, pick } from "pastable/server";
import { Box } from "./box.ts";
import { createBoxFactory } from "./box-factory.ts";
import { openApiSchemaToTs } from "./openapi-schema-to-ts.ts";
import { createRefResolver } from "./ref-resolver.ts";
import { tsFactory } from "./ts-factory.ts";
import { AnyBox, BoxRef, OpenapiSchemaConvertContext } from "./types.ts";
import { pathToVariableName } from "./string-utils.ts";
import { match, P } from "ts-pattern";

const factory = tsFactory;

export const mapOpenApiEndpoints = (doc: OpenAPIObject) => {
  const refs = createRefResolver(doc, factory);
  const ctx: OpenapiSchemaConvertContext = { refs, factory };
  const endpointList = [] as Array<Endpoint>;

  Object.entries(doc.paths ?? {}).forEach(([path, pathItemObj]) => {
    const pathItem = pick(pathItemObj, ["get", "put", "post", "delete", "options", "head", "patch", "trace"]);
    Object.entries(pathItem).forEach(([method, operation]) => {
      if (operation.deprecated) return;

      const endpoint = {
        operation,
        method: method as Method,
        path,
        requestFormat: "json",
        response: openApiSchemaToTs({ schema: {}, ctx }),
        meta: {
          alias: getAlias({ path, method, operation } as Endpoint),
          areParametersRequired: false,
          hasParameters: false,
        },
      } as Endpoint;

      // Build a list of parameters by type + fill an object with all of them
      const lists = { query: [] as ParameterObject[], path: [] as ParameterObject[], header: [] as ParameterObject[] };
      const paramObjects = [...(pathItemObj.parameters ?? []), ...(operation.parameters ?? [])].reduce(
        (acc, paramOrRef) => {
          const param = refs.unwrap(paramOrRef);
          const schema = openApiSchemaToTs({ schema: refs.unwrap(param.schema ?? {}), ctx });

          if (param.required) endpoint.meta.areParametersRequired = true;
          endpoint.meta.hasParameters = true;

          if (param.in === "query") {
            lists.query.push(param);
            acc.query[param.name] = schema;
          }
          if (param.in === "path") {
            lists.path.push(param);
            acc.path[param.name] = schema;
          }
          if (param.in === "header") {
            lists.header.push(param);
            acc.header[param.name] = schema;
          }

          return acc;
        },
        { query: {} as Record<string, Box>, path: {} as Record<string, Box>, header: {} as Record<string, Box> },
      );

      // Filter out empty objects
      const params = Object.entries(paramObjects).reduce(
        (acc, [key, value]) => {
          if (Object.keys(value).length) {
            // @ts-expect-error
            acc[key] = value;
          }
          return acc;
        },
        {} as { query?: Record<string, Box>; path?: Record<string, Box>; header?: Record<string, Box>; body?: Box },
      );

      // Body
      if (operation.requestBody) {
        endpoint.meta.hasParameters = true;
        const requestBody = refs.unwrap(operation.requestBody ?? {});
        const content = requestBody.content;
        const matchingMediaType = Object.keys(content).find(isAllowedParamMediaTypes);

        if (matchingMediaType && content[matchingMediaType]) {
          params.body = openApiSchemaToTs({
            schema: content[matchingMediaType]?.schema ?? {} ?? {},
            ctx,
          });
        }

        endpoint.requestFormat = match(matchingMediaType)
          .with("application/octet-stream", () => "binary" as const)
          .with("multipart/form-data", () => "form-data" as const)
          .with("application/x-www-form-urlencoded", () => "form-url" as const)
          .with(P.string.includes("json"), () => "json" as const)
          .otherwise(() => "text" as const);
      }

      // Make parameters optional if all or some of them are not required
      if (params) {
        const t = createBoxFactory({}, ctx);
        const filtered_params = ["query", "path", "header"] as Array<
          keyof Pick<typeof params, "query" | "path" | "header">
        >;

        for (const k of filtered_params) {
          if (params[k] && lists[k].length) {
            if (lists[k].every((param) => !param.required)) {
              params[k] = t.reference("Partial", [t.object(params[k]!)]) as any;
            } else {
              for (const p of lists[k]) {
                if (!p.required) {
                  params[k]![p.name] = t.optional(params[k]![p.name] as any);
                }
              }
            }
          }
        }

        // No need to pass empty objects, it's confusing
        endpoint.parameters = Object.keys(params).length ? (params as any as EndpointParameters) : undefined;
      }

      // Match the first 2xx-3xx response found, or fallback to default one otherwise
      let responseObject: ResponseObject | undefined;
      Object.entries(operation.responses ?? {}).map(([status, responseOrRef]) => {
        const statusCode = Number(status);
        if (statusCode >= 200 && statusCode < 300) {
          responseObject = refs.unwrap<ResponseObject>(responseOrRef);
        }
      });
      if (!responseObject && operation.responses?.default) {
        responseObject = refs.unwrap(operation.responses.default);
      }

      const content = responseObject?.content;
      if (content) {
        const matchingMediaType = Object.keys(content).find(isResponseMediaType);
        if (matchingMediaType && content[matchingMediaType]) {
          endpoint.response = openApiSchemaToTs({
            schema: content[matchingMediaType]?.schema ?? {} ?? {},
            ctx,
          });
        }
      }

      // Map response headers
      const headers = responseObject?.headers;
      if (headers) {
        endpoint.responseHeaders = Object.entries(headers).reduce(
          (acc, [name, headerOrRef]) => {
            const header = refs.unwrap(headerOrRef);
            acc[name] = openApiSchemaToTs({ schema: header.schema ?? {}, ctx });
            return acc;
          },
          {} as Record<string, Box>,
        );
      }

      endpointList.push(endpoint);
    });
  });

  return { doc, refs, endpointList, factory };
};

const allowedParamMediaTypes = [
  "application/octet-stream",
  "multipart/form-data",
  "application/x-www-form-urlencoded",
  "*/*",
] as const;
const isAllowedParamMediaTypes = (
  mediaType: string,
): mediaType is (typeof allowedParamMediaTypes)[number] | `application/${string}json${string}` | `text/${string}` =>
  (mediaType.includes("application/") && mediaType.includes("json")) ||
  allowedParamMediaTypes.includes(mediaType as any) ||
  mediaType.includes("text/");

const isResponseMediaType = (mediaType: string) => mediaType === "application/json";
const getAlias = ({ path, method, operation }: Endpoint) =>
  (method + "_" + capitalize(operation.operationId ?? pathToVariableName(path))).replace(/-/g, "__");

type MutationMethod = "post" | "put" | "patch" | "delete";
type Method = "get" | "head" | "options" | MutationMethod;

export type EndpointParameters = {
  body?: Box<BoxRef>;
  query?: Box<BoxRef> | Record<string, AnyBox>;
  header?: Box<BoxRef> | Record<string, AnyBox>;
  path?: Box<BoxRef> | Record<string, AnyBox>;
};

type RequestFormat = "json" | "form-data" | "form-url" | "binary" | "text";

type DefaultEndpoint = {
  parameters?: EndpointParameters | undefined;
  response: AnyBox;
  responseHeaders?: Record<string, AnyBox>;
};

export type Endpoint<TConfig extends DefaultEndpoint = DefaultEndpoint> = {
  operation: OperationObject;
  method: Method;
  path: string;
  parameters?: TConfig["parameters"];
  requestFormat: RequestFormat;
  meta: {
    alias: string;
    hasParameters: boolean;
    areParametersRequired: boolean;
  };
  response: TConfig["response"];
  responseHeaders?: TConfig["responseHeaders"];
};
