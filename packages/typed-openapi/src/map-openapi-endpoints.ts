import type { OpenAPIObject, ResponseObject } from "openapi3-ts/oas31";
import { OperationObject, ParameterObject } from "openapi3-ts/oas31";
import { capitalize, pick } from "pastable/server";
import { Box } from "./box.ts";
import { createBoxFactory } from "./box-factory.ts";
import { openApiSchemaToTs } from "./openapi-schema-to-ts.ts";
import { createRefResolver } from "./ref-resolver.ts";
import { tsFactory } from "./ts-factory.ts";
import {
  AnyBox,
  BoxRef,
  OpenapiSchemaConvertContext,
  type BoxObject,
  type BoxUnion,
  type LibSchemaObject,
} from "./types.ts";
import { pathToVariableName } from "./string-utils.ts";
import { NameTransformOptions } from "./types.ts";
import { match, P } from "ts-pattern";
import { sanitizeName } from "./sanitize-name.ts";

const factory = tsFactory;

export const mapOpenApiEndpoints = (doc: OpenAPIObject, options?: { nameTransform?: NameTransformOptions }) => {
  const refs = createRefResolver(doc, factory);
  const ctx: OpenapiSchemaConvertContext = { refs, factory };
  const endpointList = [] as Array<Endpoint>;

  Object.entries(doc.paths ?? {}).forEach(([path, pathItemObj]) => {
    const pathItem = pick(pathItemObj, ["get", "put", "post", "delete", "options", "head", "patch", "trace"]);
    Object.entries(pathItem).forEach(([method, operation]) => {
      if (operation.deprecated) return;

      let alias = getAlias({ path, method, operation } as Endpoint);
      if (options?.nameTransform?.transformEndpointName) {
        alias = options.nameTransform.transformEndpointName({ alias, path, method: method as Method, operation });
      }
      const endpoint = {
        operation,
        method: method as Method,
        path,
        requestFormat: "json",
        meta: {
          alias,
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
            schema: content[matchingMediaType]?.schema ?? {},
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
        const filtered_params = ["query", "path", "header"] as Array<
          keyof Pick<typeof params, "query" | "path" | "header">
        >;

        for (const k of filtered_params) {
          if (params[k] && lists[k].length) {
            const properties = Object.entries(params[k]!).reduce(
              (acc, [key, value]) => {
                if (value.schema) acc[key] = value.schema;
                return acc;
              },
              {} as Record<string, NonNullable<AnyBox["schema"]>>,
            );
            const t = createBoxFactory({ type: "object", properties: properties }, ctx);
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

        endpoint.parameters = Object.keys(params).length ? (params as any as EndpointParameters) : undefined;
      }

      const allResponses: Record<string, AnyBox> = {};
      const allResponseHeaders: Record<string, Box<BoxObject>> = {};

      Object.entries(operation.responses ?? {}).map(([status, responseOrRef]) => {
        const responseObj = refs.unwrap<ResponseObject>(responseOrRef);

        // Collect all responses for error handling
        const content = responseObj?.content;
        const mediaTypes = Object.keys(content ?? {}).filter(isResponseMediaType);
        if (content && mediaTypes.length) {
          mediaTypes.forEach((mediaType) => {
            // If no JSON content, use unknown type
            const schema = content[mediaType] ? (content[mediaType].schema ?? {}) : {};
            const mediaTypeResponse = openApiSchemaToTs({ schema, ctx });

            if (allResponses[status]) {
              const t = createBoxFactory(
                {
                  oneOf: [
                    ...((allResponses[status].schema as LibSchemaObject).oneOf
                      ? (allResponses[status].schema as LibSchemaObject).oneOf!
                      : [allResponses[status].schema]),
                    schema,
                  ],
                } as LibSchemaObject,
                ctx,
              );
              allResponses[status] = t.union([
                ...(allResponses[status].type === "union"
                  ? (allResponses[status] as Box<BoxUnion>).params.types
                  : [allResponses[status]]),
                mediaTypeResponse,
              ] as Box[]);
            } else {
              allResponses[status] = mediaTypeResponse;
            }
          });
        } else {
          // If no content defined, use unknown type
          const schema = {};
          const unknown = openApiSchemaToTs({ schema: {}, ctx });

          if (allResponses[status]) {
            const t = createBoxFactory(
              {
                oneOf: [
                  ...((allResponses[status].schema as LibSchemaObject).oneOf
                    ? (allResponses[status].schema as LibSchemaObject).oneOf!
                    : [allResponses[status].schema]),
                  schema,
                ],
              } as LibSchemaObject,
              ctx,
            );
            allResponses[status] = t.union([
              ...(allResponses[status].type === "union"
                ? (allResponses[status] as Box<BoxUnion>).params.types
                : [allResponses[status]]),
              unknown,
            ] as Box[]);
          } else {
            allResponses[status] = unknown;
          }
        }

        // Map response headers
        const headers = responseObj?.headers;
        const t = createBoxFactory(
          { type: "object", properties: (headers ?? {}) as never, required: Object.keys(headers ?? {}) },
          ctx,
        );
        if (headers) {
          const mappedHeaders = Object.entries(headers).reduce(
            (acc, [name, headerOrRef]) => {
              const header = refs.unwrap(headerOrRef);
              const box = openApiSchemaToTs({ schema: header.schema ?? {}, ctx });
              acc[name] = box;

              return acc;
            },
            {} as Record<string, Box>,
          );

          if (Object.keys(mappedHeaders).length) {
            allResponseHeaders[status] = t.object(mappedHeaders);
          }
        }
      });

      // Set the responses collection
      if (Object.keys(allResponses).length > 0) {
        endpoint.responses = allResponses;
      }

      if (Object.keys(allResponseHeaders).length) {
        endpoint.responseHeaders = allResponseHeaders;
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

const isResponseMediaType = (mediaType: string) =>
  mediaType === "*/*" || (mediaType.includes("application/") && mediaType.includes("json"));
const getAlias = ({ path, method, operation }: Endpoint) =>
  sanitizeName(
    (method + "_" + capitalize(operation.operationId ?? pathToVariableName(path))).replace(/-/g, "__"),
    "endpoint",
  );

type MutationMethod = "post" | "put" | "patch" | "delete";
export type Method = "get" | "head" | "options" | MutationMethod;

export type EndpointParameters = {
  body?: Box<BoxRef>;
  query?: Box<BoxRef> | Record<string, AnyBox>;
  header?: Box<BoxRef> | Record<string, AnyBox>;
  path?: Box<BoxRef> | Record<string, AnyBox>;
};

type RequestFormat = "json" | "form-data" | "form-url" | "binary" | "text";

type DefaultEndpoint = {
  parameters?: EndpointParameters | undefined;
  responses?: Record<string, AnyBox>;
  responseHeaders?: Record<string, Box<BoxObject>>;
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
  responses?: TConfig["responses"];
  responseHeaders?: TConfig["responseHeaders"];
};
