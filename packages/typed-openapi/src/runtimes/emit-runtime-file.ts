import type { Endpoint } from "../map-openapi-endpoints.ts";
import type { RefResolver } from "../ref-resolver.ts";
import type { SchemaNode } from "../schema-ir/types.ts";
import { wrapWithQuotesIfNeeded } from "../string-utils.ts";
import { shouldEmitSchema } from "../filter-spec.ts";
import { findRecursiveSchemaNames } from "./shared.ts";
import { createEmitCtx, type RuntimeAdapter } from "./types.ts";
import type { ValidationPolicy } from "./validation.ts";

export type EmitRuntimeFileArgs = {
  adapter: RuntimeAdapter;
  refs: RefResolver;
  endpointList: Endpoint[];
  validation: ValidationPolicy;
  schemasOnly?: boolean;
  keptSchemaNames?: Set<string>;
  /** When set, use these instead of refs.getOrderedSchemas() (after naming/inline policy). */
  namedSchemas?: Array<{ name: string; node: SchemaNode }>;
  /**
   * Coerce number/boolean path|query|cookie|header params from strings.
   * Default true for runtime adapters.
   */
  coerce?: boolean;
};

const coerceParamKeys = new Set(["query", "path", "header", "cookie"]);

const emitParameters = (
  adapter: RuntimeAdapter,
  parameters: Endpoint["parameters"],
  ctx: ReturnType<typeof createEmitCtx>,
  coerce: boolean,
): string => {
  if (!parameters) return adapter.never();

  const parts: string[] = [];
  for (const key of ["query", "path", "header", "cookie", "body"] as const) {
    const node = parameters[key];
    if (!node) continue;
    const paramCtx = coerce && coerceParamKeys.has(key) ? { ...ctx, coercePrimitives: true } : ctx;
    parts.push(`${key}: ${adapter.emitNode(node, paramCtx)}`);
  }

  return `{ ${parts.join(", ")} }`;
};

const emitResponses = (
  adapter: RuntimeAdapter,
  responses: Record<string, SchemaNode> | undefined,
  ctx: ReturnType<typeof createEmitCtx>,
): string => {
  if (!responses) return `{ }`;
  const parts = Object.entries(responses).map(([status, node]) => {
    return `${wrapWithQuotesIfNeeded(status)}: ${adapter.emitNode(node, ctx)}`;
  });
  return `{ ${parts.join(", ")} }`;
};

const emitResponseHeaders = (
  adapter: RuntimeAdapter,
  headers: Record<string, SchemaNode> | undefined,
  ctx: ReturnType<typeof createEmitCtx>,
): string => {
  if (!headers) return "";
  const parts = Object.entries(headers).map(([status, node]) => {
    return `${wrapWithQuotesIfNeeded(status.toLowerCase())}: ${adapter.emitNode(node, ctx)}`;
  });
  return `responseHeaders: { ${parts.join(", ")} },`;
};

export const emitRuntimeFile = ({
  adapter,
  refs,
  endpointList,
  validation,
  schemasOnly,
  keptSchemaNames,
  namedSchemas: namedSchemasOption,
  coerce = true,
}: EmitRuntimeFileArgs): string => {
  const namedSchemas =
    namedSchemasOption ??
    refs
      .getOrderedSchemas()
      .filter(([, infos]) => infos?.name && infos.kind === "schemas")
      .filter(([, infos]) => shouldEmitSchema(keptSchemaNames, infos.normalized))
      .map(([node, infos]) => ({ name: infos.normalized, node }));

  const recursiveNames = findRecursiveSchemaNames(namedSchemas);
  const ctx = createEmitCtx(validation, recursiveNames);

  let file = `${adapter.imports()}\n\n`;

  file += `// <Schemas>\n`;
  if (adapter.emitNamedSchemas) {
    file += `${adapter.emitNamedSchemas(namedSchemas, ctx)}\n`;
  } else {
    for (const { name, node } of namedSchemas) {
      file += `${adapter.emitNamedSchema(name, node, ctx)}\n\n`;
    }
  }
  file += `// </Schemas>\n`;

  if (schemasOnly) return file;

  file += `\n// <Endpoints>\n`;
  for (const endpoint of endpointList) {
    const parameters = emitParameters(adapter, endpoint.parameters, ctx, coerce);
    const responses = emitResponses(adapter, endpoint.responses, ctx);
    const responseHeaders = emitResponseHeaders(adapter, endpoint.responseHeaders, ctx);

    file += `export type ${endpoint.meta.alias} = typeof ${endpoint.meta.alias};\n`;
    file += `export const ${endpoint.meta.alias} = {\n`;
    file += `  method: ${adapter.literalString(endpoint.method.toUpperCase())},\n`;
    file += `  path: ${adapter.literalString(endpoint.path)},\n`;
    file += `  requestFormat: ${adapter.literalString(endpoint.requestFormat)},\n`;
    file += `  parameters: ${endpoint.meta.hasParameters ? parameters : adapter.never()},\n`;
    file += `  responses: ${responses},\n`;
    if (responseHeaders) file += `  ${responseHeaders}\n`;
    file += `};\n\n`;
  }
  file += `// </Endpoints>\n`;

  return file;
};
