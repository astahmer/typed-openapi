import type { OpenAPIObject, ResponseObject } from "openapi3-ts/oas31";
import { OperationObject, ParameterObject } from "openapi3-ts/oas31";
import { capitalize, pick } from "pastable/server";
import { createRefResolver } from "./ref-resolver.ts";
import { openApiToIr } from "./schema-ir/openapi-to-ir.ts";
import type { SchemaIrConvertContext, SchemaNode } from "./schema-ir/types.ts";
import { pathToVariableName } from "./string-utils.ts";
import { NameTransformOptions } from "./types.ts";
import { match, P } from "ts-pattern";
import { sanitizeName } from "./sanitize-name.ts";

const emptyMeta = () => ({});

/** Merge a new response schema into the existing union (or create one). */
const mergeUnion = (existing: SchemaNode | undefined, next: SchemaNode): SchemaNode => {
  if (!existing) return next;
  const members = existing.kind === "union" ? existing.members.slice() : [existing];
  members.push(next);
  return { kind: "union", members, meta: emptyMeta() };
};

export const mapOpenApiEndpoints = (doc: OpenAPIObject, options?: { nameTransform?: NameTransformOptions }) => {
  const refs = createRefResolver(doc, options?.nameTransform);
  const irCtx: SchemaIrConvertContext = { getRefName: (ref) => refs.getInfosByRef(ref).normalized };
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
      const paramNodes = [...(pathItemObj.parameters ?? []), ...(operation.parameters ?? [])].reduce(
        (acc, paramOrRef) => {
          const param = refs.unwrap(paramOrRef);
          const node = openApiToIr(param.schema ?? {}, irCtx);

          if (param.required) endpoint.meta.areParametersRequired = true;
          endpoint.meta.hasParameters = true;

          if (param.in === "query") {
            lists.query.push(param);
            acc.query[param.name] = node;
          }
          if (param.in === "path") {
            lists.path.push(param);
            acc.path[param.name] = node;
          }
          if (param.in === "header") {
            lists.header.push(param);
            acc.header[param.name] = node;
          }

          return acc;
        },
        {
          query: {} as Record<string, SchemaNode>,
          path: {} as Record<string, SchemaNode>,
          header: {} as Record<string, SchemaNode>,
        },
      );

      const params = {} as EndpointParameters;

      // Group params (query/path/header) into an object SchemaNode preserving required/partial.
      for (const key of ["query", "path", "header"] as const) {
        const properties = paramNodes[key];
        const paramList = lists[key];
        if (!paramList.length || Object.keys(properties).length === 0) continue;

        const requiredNames = paramList.filter((p) => p.required).map((p) => p.name);
        const allOptional = requiredNames.length === 0;
        params[key] = {
          kind: "object",
          properties,
          required: requiredNames,
          additionalProperties: false,
          constraints: {},
          meta: emptyMeta(),
          partial: allOptional,
        };
      }

      // Body
      if (operation.requestBody) {
        endpoint.meta.hasParameters = true;
        const requestBody = refs.unwrap(operation.requestBody ?? {});
        const content = requestBody.content;
        const matchingMediaType = Object.keys(content).find(isAllowedParamMediaTypes);

        if (matchingMediaType && content[matchingMediaType]) {
          params.body = openApiToIr(content[matchingMediaType]?.schema ?? {}, irCtx);
        }

        endpoint.requestFormat = match(matchingMediaType)
          .with("application/octet-stream", () => "binary" as const)
          .with("multipart/form-data", () => "form-data" as const)
          .with("application/x-www-form-urlencoded", () => "form-url" as const)
          .with(P.string.includes("json"), () => "json" as const)
          .otherwise(() => "text" as const);
      }

      if (Object.keys(params).length) endpoint.parameters = params;

      const allResponses: Record<string, SchemaNode> = {};
      const allResponseHeaders: Record<string, SchemaNode> = {};

      Object.entries(operation.responses ?? {}).map(([status, responseOrRef]) => {
        const responseObj = refs.unwrap<ResponseObject>(responseOrRef);

        // Collect all responses for error handling
        const content = responseObj?.content;
        const mediaTypes = Object.keys(content ?? {}).filter(isResponseMediaType);
        if (content && mediaTypes.length) {
          mediaTypes.forEach((mediaType) => {
            const schema = content[mediaType] ? (content[mediaType].schema ?? {}) : {};
            const node = openApiToIr(schema, irCtx);
            allResponses[status] = mergeUnion(allResponses[status], node);
          });
        } else {
          // If no content defined, use unknown type
          const unknown: SchemaNode = { kind: "unknown", meta: emptyMeta() };
          allResponses[status] = mergeUnion(allResponses[status], unknown);
        }

        // Map response headers
        const headers = responseObj?.headers;
        if (headers && Object.keys(headers).length) {
          const properties: Record<string, SchemaNode> = {};
          for (const [name, headerOrRef] of Object.entries(headers)) {
            const header = refs.unwrap(headerOrRef);
            properties[name] = openApiToIr(header.schema ?? {}, irCtx);
          }
          if (Object.keys(properties).length) {
            allResponseHeaders[status] = {
              kind: "object",
              properties,
              required: Object.keys(properties),
              additionalProperties: false,
              constraints: {},
              meta: emptyMeta(),
              partial: false,
            };
          }
        }
      });

      if (Object.keys(allResponses).length > 0) endpoint.responses = allResponses;
      if (Object.keys(allResponseHeaders).length) endpoint.responseHeaders = allResponseHeaders;

      endpointList.push(endpoint);
    });
  });

  return { doc, refs, endpointList };
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
  body?: SchemaNode;
  query?: SchemaNode;
  header?: SchemaNode;
  path?: SchemaNode;
};

type RequestFormat = "json" | "form-data" | "form-url" | "binary" | "text";

type DefaultEndpoint = {
  parameters?: EndpointParameters | undefined;
  responses?: Record<string, SchemaNode>;
  responseHeaders?: Record<string, SchemaNode>;
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
