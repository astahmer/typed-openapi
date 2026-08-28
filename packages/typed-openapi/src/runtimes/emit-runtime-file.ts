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
  includeDescriptions?: boolean;
  /** Namespace imported from the generated declaration sidecar. */
  typeNamespace?: string;
};

const coerceParamKeys = new Set(["query", "path", "header", "cookie"]);

const containsTupleWithRest = (node: SchemaNode): boolean => {
  switch (node.kind) {
    case "tuple":
      return Boolean(node.rest) || node.items.some(containsTupleWithRest);
    case "array":
      return containsTupleWithRest(node.items);
    case "object":
      return (
        Object.values(node.properties).some(containsTupleWithRest) ||
        (typeof node.additionalProperties === "object" && containsTupleWithRest(node.additionalProperties)) ||
        Object.values(node.patternProperties ?? {}).some(containsTupleWithRest)
      );
    case "union":
    case "intersection":
      return node.members.some(containsTupleWithRest);
    case "not":
      return containsTupleWithRest(node.schema);
    case "record":
      return containsTupleWithRest(node.key) || containsTupleWithRest(node.value);
    case "ref":
      return node.generics?.some(containsTupleWithRest) ?? false;
    case "custom":
      return node.fallback ? containsTupleWithRest(node.fallback) : false;
    default:
      return false;
  }
};

const containsPatternProperties = (node: SchemaNode): boolean => {
  switch (node.kind) {
    case "object":
      return (
        Object.keys(node.patternProperties ?? {}).length > 0 ||
        Object.values(node.properties).some(containsPatternProperties) ||
        (typeof node.additionalProperties === "object" && containsPatternProperties(node.additionalProperties)) ||
        Object.values(node.patternProperties ?? {}).some(containsPatternProperties)
      );
    case "array":
      return containsPatternProperties(node.items);
    case "tuple":
      return node.items.some(containsPatternProperties) || (node.rest ? containsPatternProperties(node.rest) : false);
    case "union":
    case "intersection":
      return node.members.some(containsPatternProperties);
    case "not":
      return containsPatternProperties(node.schema);
    case "record":
      return containsPatternProperties(node.key) || containsPatternProperties(node.value);
    case "ref":
      return node.generics?.some(containsPatternProperties) ?? false;
    case "custom":
      return node.fallback ? containsPatternProperties(node.fallback) : false;
    default:
      return false;
  }
};

const containsOneOf = (node: SchemaNode): boolean => {
  switch (node.kind) {
    case "union":
      return Boolean(node.exclusive) || node.members.some(containsOneOf);
    case "object":
      return (
        Object.values(node.properties).some(containsOneOf) ||
        (typeof node.additionalProperties === "object" && containsOneOf(node.additionalProperties)) ||
        Object.values(node.patternProperties ?? {}).some(containsOneOf)
      );
    case "array":
      return containsOneOf(node.items);
    case "tuple":
      return node.items.some(containsOneOf) || (node.rest ? containsOneOf(node.rest) : false);
    case "intersection":
      return node.members.some(containsOneOf);
    case "not":
      return containsOneOf(node.schema);
    case "record":
      return containsOneOf(node.key) || containsOneOf(node.value);
    case "ref":
      return node.generics?.some(containsOneOf) ?? false;
    case "custom":
      return node.fallback ? containsOneOf(node.fallback) : false;
    default:
      return false;
  }
};

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
  includeDescriptions = false,
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
  const schemaOrder = new Map(namedSchemas.map(({ name }, index) => [name, index] as const));
  const ctx = createEmitCtx(validation, recursiveNames, {
    transformDates,
    transformBigInt,
    includeDescriptions,
    schemaNodes: new Map(namedSchemas.map(({ name, node }) => [name, node])),
    schemaOrder,
  });

  const tupleWithRest =
    adapter.name === "typebox" &&
    [
      ...namedSchemas.map(({ node }) => node),
      ...(schemasOnly
        ? []
        : endpointList.flatMap((endpoint) => [
            ...Object.values(endpoint.parameters ?? {}),
            ...Object.values(endpoint.responses ?? {}),
            ...Object.values(endpoint.responseHeaders ?? {}),
          ])),
    ].some(containsTupleWithRest);
  const objectWithPatterns =
    adapter.name === "typebox" &&
    [
      ...namedSchemas.map(({ node }) => node),
      ...(schemasOnly
        ? []
        : endpointList.flatMap((endpoint) => [
            ...Object.values(endpoint.parameters ?? {}),
            ...Object.values(endpoint.responses ?? {}),
            ...Object.values(endpoint.responseHeaders ?? {}),
          ])),
    ].some(containsPatternProperties);
  const oneOf =
    adapter.name === "typebox" &&
    [
      ...namedSchemas.map(({ node }) => node),
      ...(schemasOnly
        ? []
        : endpointList.flatMap((endpoint) => [
            ...Object.values(endpoint.parameters ?? {}),
            ...Object.values(endpoint.responses ?? {}),
            ...Object.values(endpoint.responseHeaders ?? {}),
          ])),
    ].some(containsOneOf);

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
      const parameters = emitParameters(adapter, endpoint.parameters, ctx, coerce);
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
  if (tupleWithRest) {
    body += `// <TupleWithRest>
const __TypedOpenapiTupleWithRest = TypeSystem.Type<unknown[], { items: import("@sinclair/typebox").TSchema[]; rest: import("@sinclair/typebox").TSchema }>(
  "TypedOpenapiTupleWithRest_" + Math.random().toString(36).slice(2),
  (options, value) =>
    Array.isArray(value) &&
    value.length >= options.items.length &&
    options.items.every((schema, index) => Value.Check(schema, value[index])) &&
    value.slice(options.items.length).every((item) => Value.Check(options.rest, item)),
);

const __typedOpenapiTupleWithRest = <
  T extends import("@sinclair/typebox").TSchema[],
  R extends import("@sinclair/typebox").TSchema
>(items: [...T], rest: R) =>
  __TypedOpenapiTupleWithRest({ items, rest }) as unknown as import("@sinclair/typebox").TUnsafe<
    [...{ [K in keyof T]: Static<T[K]> }, ...Array<Static<R>>]
  >;
// </TupleWithRest>

`;
  }
  if (objectWithPatterns) {
    body += `// <ObjectWithPatterns>
const __TypedOpenapiObjectWithPatterns = TypeSystem.Type<object, {
  object: import("@sinclair/typebox").TSchema;
  properties: string[];
  patterns: Record<string, import("@sinclair/typebox").TSchema>;
  additional: import("@sinclair/typebox").TSchema | boolean;
}>(
  "TypedOpenapiObjectWithPatterns_" + Math.random().toString(36).slice(2),
  (options, value) => {
    if (!Value.Check(options.object, value)) return false;
    for (const [key, item] of Object.entries(value as Record<string, unknown>)) {
      let matched = false;
      for (const [pattern, schema] of Object.entries(options.patterns)) {
        if (new RegExp(pattern).test(key)) {
          matched = true;
          if (!Value.Check(schema, item)) return false;
        }
      }
      if (!options.properties.includes(key) && !matched) {
        if (options.additional === false) return false;
        if (options.additional !== true && !Value.Check(options.additional, item)) return false;
      }
    }
    return true;
  },
);

const __typedOpenapiObjectWithPatterns = <T extends import("@sinclair/typebox").TSchema>(
  object: T,
  properties: string[],
  patterns: Record<string, import("@sinclair/typebox").TSchema>,
  additional: import("@sinclair/typebox").TSchema | boolean,
) =>
  __TypedOpenapiObjectWithPatterns({ object, properties, patterns, additional }) as unknown as import("@sinclair/typebox").TUnsafe<
    Static<T>
  >;
// </ObjectWithPatterns>

    `;
  }
  if (oneOf) {
    body += `// <OneOf>
const __TypedOpenapiOneOf = TypeSystem.Type<unknown, { members: import("@sinclair/typebox").TSchema[] }>(
  "TypedOpenapiOneOf_" + Math.random().toString(36).slice(2),
  (options, value) => options.members.filter((schema) => Value.Check(schema, value)).length === 1,
);

const __typedOpenapiOneOf = <T extends import("@sinclair/typebox").TSchema[]>(members: [...T]) =>
  __TypedOpenapiOneOf({ members }) as unknown as import("@sinclair/typebox").TUnsafe<Static<T[number]>>;
// </OneOf>

`;
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

  return `${adapter.imports({ tupleWithRest, objectWithPatterns, oneOf })}\n\n${body}`;
};
