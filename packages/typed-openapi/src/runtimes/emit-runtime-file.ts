import type { Endpoint } from "../map-openapi-endpoints.ts";
import type { RefResolver } from "../ref-resolver.ts";
import type { SchemaNode } from "../schema-ir/types.ts";
import { wrapWithQuotesIfNeeded } from "../string-utils.ts";
import { shouldEmitSchema } from "../filter-spec.ts";
import { findRecursiveSchemaNames, renderInternedDefaults } from "./shared.ts";
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
  transformDates?: boolean;
  transformBigInt?: boolean;
  /** Namespace imported from the generated declaration sidecar. */
  typeNamespace?: string;
};

const coerceParamKeys = new Set(["query", "path", "header", "cookie"]);

/** Make an all-optional param group itself optional (`query?: …`) for InferSchemaInput. */
const wrapOptionalParamGroup = (adapter: RuntimeAdapter, expr: string): string => {
  switch (adapter.name) {
    case "zod":
    case "zod3":
      return `${expr}.optional()`;
    case "valibot":
      return `v.optional(${expr})`;
    case "effect":
      return `Schema.optional(${expr})`;
    case "effect3":
      return `S.optional(${expr})`;
    case "arktype":
      return `${expr}.optional()`;
    case "typebox":
      return `Type.Optional(${expr})`;
    case "typia":
      return expr;
    default:
      return expr;
  }
};

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
    let expr = adapter.emitNode(node, paramCtx);
    if (node.kind === "object" && node.partial) {
      expr = wrapOptionalParamGroup(adapter, expr);
    }
    parts.push(`${key}: ${expr}`);
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
    const expr = adapter.emitNode(node, ctx);
    return `${wrapWithQuotesIfNeeded(status)}: ${expr}`;
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
    const expr = adapter.emitNode(node, ctx);
    return `${wrapWithQuotesIfNeeded(status.toLowerCase())}: ${expr}`;
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
  transformDates = false,
  transformBigInt = false,
  typeNamespace,
}: EmitRuntimeFileArgs): string => {
  const namedSchemas =
    namedSchemasOption ??
    refs
      .getOrderedSchemas()
      .filter(([, infos]) => infos?.name && infos.kind === "schemas")
      .filter(([, infos]) => shouldEmitSchema(keptSchemaNames, infos.normalized))
      .map(([node, infos]) => ({ name: infos.normalized, node }));

  const recursiveNames = findRecursiveSchemaNames(namedSchemas);
  const ctx = createEmitCtx(validation, recursiveNames, {
    transformDates,
    transformBigInt,
  });

  let schemasBlock = `// <Schemas>\n`;
  if (adapter.emitNamedSchemas) {
    schemasBlock += `${adapter.emitNamedSchemas(
      namedSchemas,
      ctx,
      typeNamespace ? (name) => `${typeNamespace}.Schemas.${name}` : undefined,
    )}\n`;
  } else {
    for (const { name, node } of namedSchemas) {
      schemasBlock += `${adapter.emitNamedSchema(
        name,
        node,
        ctx,
        typeNamespace ? `${typeNamespace}.Schemas.${name}` : undefined,
      )}\n\n`;
    }
  }
  schemasBlock += `// </Schemas>\n`;

  let endpointsBlock = "";
  if (!schemasOnly) {
    endpointsBlock += `\n// <Endpoints>\n`;
    for (const endpoint of endpointList) {
      const endpointType = typeNamespace ? `${typeNamespace}.Endpoints.${endpoint.meta.alias}` : undefined;
      const parameters = emitParameters(
        adapter,
        endpoint.parameters,
        ctx,
        coerce,
      );
      const responses = emitResponses(adapter, endpoint.responses, ctx);
      const responseHeaders = emitResponseHeaders(adapter, endpoint.responseHeaders, ctx);

      endpointsBlock += typeNamespace
        ? `export type ${endpoint.meta.alias} = ${endpointType};\nexport const ${endpoint.meta.alias} = {\n`
        : `export type ${endpoint.meta.alias} = typeof ${endpoint.meta.alias};\nexport const ${endpoint.meta.alias} = {\n`;
      endpointsBlock += `  method: ${adapter.literalString(endpoint.method.toUpperCase())},\n`;
      endpointsBlock += `  path: ${adapter.literalString(endpoint.path)},\n`;
      endpointsBlock += `  requestFormat: ${adapter.literalString(endpoint.requestFormat)},\n`;
      endpointsBlock += `  responseFormat: ${adapter.literalString(endpoint.responseFormat)},\n`;
      endpointsBlock += `  parameters: ${endpoint.meta.hasParameters ? parameters : adapter.never()},\n`;
      endpointsBlock += `  responses: ${responses},\n`;
      if (responseHeaders) endpointsBlock += `  ${responseHeaders}\n`;
      endpointsBlock += `};\n\n`;
    }
    endpointsBlock += `// </Endpoints>\n`;
  }

  const helpers = renderInternedDefaults(ctx);
  let body = "";
  if (helpers) {
    body += `// <DefaultSchemas>\n${helpers}// </DefaultSchemas>\n\n`;
  }
  body += schemasBlock + endpointsBlock;

  // Effect: only import SchemaTransformation/Struct when referenced.
  // Always keep Effect + Schema — EffectApiClient (appended later) needs Effect.
  if (adapter.name === "effect") {
    const names = ["Effect", "Schema"];
    if (body.includes("SchemaTransformation")) names.push("SchemaTransformation");
    if (/\bStruct\./.test(body)) names.push("Struct");
    return `import { ${names.join(", ")} } from "effect";\n\n${body}`;
  }

  return `${adapter.imports()}\n\n${body}`;
};
