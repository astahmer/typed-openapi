import type { OpenAPIObject, ResponseObject } from "openapi3-ts/oas31";
import { OperationObject, ParameterObject } from "openapi3-ts/oas31";
import { capitalize, pick } from "pastable/server";
import { createRefResolver } from "./ref-resolver.ts";
import { openApiToIr } from "./schema-ir/openapi-to-ir.ts";
import { stripReadWrite } from "./schema-ir/read-write.ts";
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

/** Prefer `schema`; fall back to first `content[*].schema` (common for cookie params). */
const schemaFromParameter = (param: ParameterObject): unknown => {
  if (param.schema) return param.schema;
  const content = param.content;
  if (content) {
    const mediaType = Object.keys(content)[0];
    if (mediaType && content[mediaType]?.schema) return content[mediaType].schema;
  }
  return {};
};

type ParamLocation = "query" | "path" | "header" | "cookie";

export const mapOpenApiEndpoints = (doc: OpenAPIObject, options?: { nameTransform?: NameTransformOptions }) => {
  const refs = createRefResolver(doc, options?.nameTransform);
  const irCtx: SchemaIrConvertContext = { getRefName: (ref) => refs.getInfosByRef(ref).normalized };
  const endpointList = [] as Array<Endpoint>;
  const endpointAliases = new Set<string>();

  Object.entries(doc.paths ?? {}).forEach(([path, pathItemObj]) => {
    const pathItem = pick(pathItemObj, ["get", "put", "post", "delete", "options", "head", "patch", "trace"]);
    Object.entries(pathItem).forEach(([method, operation]) => {
      if (operation.deprecated) return;

      let alias = getAlias({ path, method, operation } as Endpoint);
      if (options?.nameTransform?.transformEndpointName) {
        alias = options.nameTransform.transformEndpointName({ alias, path, method: method as Method, operation });
      }
      const aliasBase = alias;
      let suffix = 2;
      while (endpointAliases.has(alias)) alias = `${aliasBase}_${suffix++}`;
      endpointAliases.add(alias);
      const endpoint = {
        operation,
        method: method as Method,
        path,
        requestFormat: "json",
        responseFormat: "json",
        meta: {
          alias,
          areParametersRequired: false,
          hasParameters: false,
        },
      } as Endpoint;

      // Build a list of parameters by type + fill an object with all of them
      const lists = {
        query: [] as ParameterObject[],
        path: [] as ParameterObject[],
        header: [] as ParameterObject[],
        cookie: [] as ParameterObject[],
      };
      const paramNodes = [...(pathItemObj.parameters ?? []), ...(operation.parameters ?? [])].reduce(
        (acc, paramOrRef) => {
          const param = refs.unwrap(paramOrRef);
          const node = openApiToIr(schemaFromParameter(param), irCtx);

          if (param.required) endpoint.meta.areParametersRequired = true;
          endpoint.meta.hasParameters = true;

          const loc = param.in as ParamLocation;
          if (loc === "query" || loc === "path" || loc === "header" || loc === "cookie") {
            lists[loc].push(param);
            acc[loc][param.name] = node;
          }

          return acc;
        },
        {
          query: {} as Record<string, SchemaNode>,
          path: {} as Record<string, SchemaNode>,
          header: {} as Record<string, SchemaNode>,
          cookie: {} as Record<string, SchemaNode>,
        },
      );

      const params = {} as EndpointParameters;

      // Group params into an object SchemaNode preserving required/partial.
      for (const key of ["query", "path", "header", "cookie"] as const) {
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

      // Body — strip readOnly fields (response-only)
      if (operation.requestBody) {
        endpoint.meta.hasParameters = true;
        const requestBody = refs.unwrap(operation.requestBody ?? {});
        const content = requestBody.content;
        const matchingMediaType = Object.keys(content).find(isAllowedParamMediaTypes);

        if (matchingMediaType && content[matchingMediaType]) {
          params.body = stripReadWrite(openApiToIr(content[matchingMediaType]?.schema ?? {}, irCtx), "request");
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

        // Collect all responses for error handling — strip writeOnly (request-only)
        const content = responseObj?.content;
        const mediaTypes = Object.keys(content ?? {}).filter(isResponseMediaType);
        const sseMedia = mediaTypes.find(isSseMediaType);
        if (sseMedia) {
          // Prefer SSE for responseFormat (client reads body as stream); still union JSON/other
          // schemas when co-declared for content negotiation typing.
          endpoint.responseFormat = "sse";
          const streamNode: SchemaNode = { kind: "stream", meta: emptyMeta() };
          allResponses[status] = mergeUnion(allResponses[status], streamNode);
        }
        if (content && mediaTypes.length) {
          mediaTypes
            .filter((mediaType) => !isSseMediaType(mediaType))
            .forEach((mediaType) => {
              const schema = content[mediaType] ? (content[mediaType].schema ?? {}) : {};
              const node = stripReadWrite(openApiToIr(schema, irCtx), "response");
              allResponses[status] = mergeUnion(allResponses[status], node);
            });
        } else if (!sseMedia) {
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

const isSseMediaType = (mediaType: string) => mediaType.includes("text/event-stream");

const isResponseMediaType = (mediaType: string) =>
  mediaType === "*/*" ||
  (mediaType.includes("application/") && mediaType.includes("json")) ||
  isSseMediaType(mediaType);
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
  cookie?: SchemaNode;
};

type RequestFormat = "json" | "form-data" | "form-url" | "binary" | "text";
type ResponseFormat = "json" | "sse";

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
  /** How to consume the success response body (SSE skips JSON parse + output validation). */
  responseFormat: ResponseFormat;
  meta: {
    alias: string;
    hasParameters: boolean;
    areParametersRequired: boolean;
  };
  responses?: TConfig["responses"];
  responseHeaders?: TConfig["responseHeaders"];
};
