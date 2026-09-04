import type { SchemaNode } from "../../schema-ir/types.ts";
import {
  applyArrayConstraints,
  applyNumberConstraints,
  applyObjectConstraints,
  applyStringConstraints,
  emitBinaryBlobCheck,
  emitExplicitSchemaTypeDecl,
  emitStreamCheck,
  findMappedUnionMember,
  hasObjectRestTyping,
  isNullOr,
  literalValue,
  objectKey,
  objectProps,
  partitionNullUnionMembers,
  quote,
  shouldDeferNamedSchemaRef,
  withZodDefault,
  withZodDescription,
  collectClosedObjectKeys,
  emitKeyAllowed,
  closedObjectReopen,
} from "../shared.ts";
import type { EmitCtx, RuntimeAdapter } from "../types.ts";

const emitString = (node: Extract<SchemaNode, { kind: "string" }>, ctx: EmitCtx): string => {
  const c = applyStringConstraints(node.constraints, ctx.validation);
  let expr = "z.string()";
  if (c.format === "email") expr += ".email()";
  else if (c.format === "uuid") expr += ".uuid()";
  else if (c.format === "uri" || c.format === "url") expr += ".url()";
  else if (c.format === "date-time") expr += ".datetime()";
  else if (c.format === "date") expr += ".date()";
  else if (c.format === "ipv4") expr += '.ip({ version: "v4" })';
  else if (c.format === "ipv6") expr += '.ip({ version: "v6" })';

  if (c.minLength !== undefined) expr += `.min(${c.minLength})`;
  if (c.maxLength !== undefined) expr += `.max(${c.maxLength})`;
  if (c.pattern !== undefined) expr += `.regex(new RegExp(${quote(c.pattern)}))`;
  if (ctx.transformDates && (node.constraints.format === "date-time" || node.constraints.format === "date")) {
    expr +=
      '.transform((s) => { const d = new Date(s); if (Number.isNaN(d.getTime())) throw new Error("Invalid Date"); return d; })';
  }
  return expr;
};

const emitNumber = (node: Extract<SchemaNode, { kind: "number" }>, ctx: EmitCtx): string => {
  if (ctx.transformBigInt && node.constraints.format === "int64") {
    return "z.coerce.bigint()";
  }
  const c = applyNumberConstraints(node.constraints, ctx.validation);
  let expr = ctx.coercePrimitives
    ? node.integer
      ? "z.coerce.number().int()"
      : "z.coerce.number()"
    : node.integer
      ? "z.number().int()"
      : "z.number()";
  if (c.minimum !== undefined) expr += `.min(${c.minimum})`;
  if (c.maximum !== undefined) expr += `.max(${c.maximum})`;
  if (c.exclusiveMinimum !== undefined) expr += `.gt(${c.exclusiveMinimum})`;
  if (c.exclusiveMaximum !== undefined) expr += `.lt(${c.exclusiveMaximum})`;
  if (c.multipleOf !== undefined) expr += `.multipleOf(${c.multipleOf})`;
  return expr;
};

const emitNodeInner = (node: SchemaNode, ctx: EmitCtx): string => {
  const nullInner = isNullOr(node);
  if (nullInner) return `${emitNode(nullInner, ctx)}.nullable()`;

  switch (node.kind) {
    case "string":
      return emitString(node, ctx);
    case "binary":
      return emitBinaryBlobCheck("zod3");
    case "stream":
      return emitStreamCheck("zod3");
    case "number":
      return emitNumber(node, ctx);
    case "boolean":
      return ctx.coercePrimitives
        ? `z.union([z.boolean(), z.string(), z.number()]).transform((x) => x === true || x === "true" || x === 1 || x === "1")`
        : "z.boolean()";
    case "null":
      return "z.null()";
    case "unknown":
      return "z.unknown()";
    case "any":
      return "z.any()";
    case "never":
      return "z.never()";
    case "literal":
      return `z.literal(${literalValue(node.value)})`;
    case "enum": {
      if (node.values.every((v) => typeof v === "string") && node.values.length > 0) {
        return `z.enum([${node.values.map((v) => quote(String(v))).join(", ")}])`;
      }
      return `z.union([${node.values.map((v) => `z.literal(${literalValue(v)})`).join(", ")}])`;
    }
    case "array": {
      const c = applyArrayConstraints(node.constraints, ctx.validation);
      let expr = `z.array(${emitNode(node.items, ctx)})`;
      if (c.minItems !== undefined) expr += `.min(${c.minItems})`;
      if (c.maxItems !== undefined) expr += `.max(${c.maxItems})`;
      if (c.uniqueItems) {
        expr += `.refine((arr) => new Set(arr).size === arr.length, { message: "uniqueItems" })`;
      }
      return expr;
    }
    case "tuple": {
      const items = node.items.map((i) => emitNode(i, ctx)).join(", ");
      if (node.rest) return `z.tuple([${items}]).rest(${emitNode(node.rest, ctx)})`;
      return `z.tuple([${items}])`;
    }
    case "union": {
      if (node.discriminator?.propertyName) {
        const prop = node.discriminator.propertyName;
        const mapping = node.discriminator.mapping;
        const { concrete, nullable } = partitionNullUnionMembers(node.members);
        const members =
          mapping && Object.keys(mapping).length > 0
            ? Object.entries(mapping).flatMap(([value, target]) => {
                const member = findMappedUnionMember(concrete, target);
                if (!member) return [];
                const base = emitNode(member, ctx);
                return [`${base}.extend({ ${objectKey(prop)}: z.literal(${quote(value)}) })`];
              })
            : concrete.map((m) => emitNode(m, ctx));
        if (members.length > 0) {
          const disc = `z.discriminatedUnion(${quote(prop)}, [${members.join(", ")}])`;
          return nullable ? `z.union([${disc}, z.null()])` : disc;
        }
      }
      const members = node.members.map((m) => emitNode(m, ctx));
      const union = `z.union([${members.join(", ")}])`;
      return node.exclusive
        ? `${union}.refine((data) => [${node.members.map((m) => `${emitNode(m, ctx)}.safeParse(data).success`).join(", ")}].filter(Boolean).length === 1, { message: "oneOf" })`
        : union;
    }
    case "intersection": {
      const inner = node.members
        .map((member) => {
          const expr = emitNode(member, ctx);
          const reopen = closedObjectReopen(member, ctx);
          if (reopen === "nullable-object") return `${expr}.unwrap().passthrough().nullable()`;
          if (reopen === "object") return `${expr}.passthrough()`;
          return expr;
        })
        .reduce((acc, cur) => `${acc}.and(${cur})`);
      if (node.members.every((member) => closedObjectReopen(member, ctx))) {
        const keys = collectClosedObjectKeys(node, ctx);
        if (keys) {
          return `${inner}.refine((obj) => obj == null || Object.keys(obj).every((key) => ${emitKeyAllowed(keys)}))`;
        }
      }
      return inner;
    }
    case "not": {
      const inner = emitNode(node.schema, ctx);
      return `z.unknown().refine((data) => !${inner}.safeParse(data).success, { message: "not" })`;
    }
    case "ref": {
      if (node.name === "Partial" && node.generics?.[0]) return `${emitNode(node.generics[0], ctx)}.partial()`;
      if (node.name === "Record" && node.generics?.length === 2) {
        return `z.record(${emitNode(node.generics[0]!, ctx)}, ${emitNode(node.generics[1]!, ctx)})`;
      }
      if (shouldDeferNamedSchemaRef(node.name, ctx)) return `z.lazy(() => ${node.name})`;
      return node.name;
    }
    case "record":
      return `z.record(${emitNode(node.key, ctx)}, ${emitNode(node.value, ctx)})`;
    case "object": {
      const props = objectProps(node, emitNode, ctx);
      const body = props
        .map(({ key, optional, expr, meta }) => {
          const hasDefault = meta.default !== undefined;
          return `${objectKey(key)}: ${optional && !hasDefault ? `${expr}.optional()` : expr}`;
        })
        .join(", ");
      let expr = `z.object({ ${body} })`;
      if (node.partial) expr += ".partial()";
      const patterns = Object.entries(node.patternProperties ?? {});
      if (patterns.length > 0) {
        const namedKeys = `[${Object.keys(node.properties).map(quote).join(", ")}]`;
        const matching = `[${patterns.map(([pattern]) => `new RegExp(${quote(pattern)}).test(key)`).join(", ")}].some(Boolean)`;
        const patternChecks = patterns
          .map(
            ([pattern, patternNode]) =>
              `(!new RegExp(${quote(pattern)}).test(key) || ${emitNode(patternNode, ctx)}.safeParse(value).success)`,
          )
          .join(" && ");
        const additionalCheck =
          node.additionalProperties === true
            ? "true"
            : typeof node.additionalProperties === "object"
              ? `${emitNode(node.additionalProperties, ctx)}.safeParse(value).success`
              : "false";
        expr += `.catchall(z.unknown()).refine((obj) => Object.entries(obj).every(([key, value]) => ${patternChecks} && (${namedKeys}.includes(key) || ${matching} || ${additionalCheck})))`;
      } else if (node.additionalProperties === true) expr += ".catchall(z.unknown())";
      else if (typeof node.additionalProperties === "object") {
        expr += `.catchall(${emitNode(node.additionalProperties, ctx)})`;
      } else expr += ".strict()";
      const oc = applyObjectConstraints(node.constraints, ctx.validation);
      if (oc.minProperties !== undefined) {
        expr += `.refine((obj) => Object.keys(obj).length >= ${oc.minProperties}, { message: "minProperties" })`;
      }
      if (oc.maxProperties !== undefined) {
        expr += `.refine((obj) => Object.keys(obj).length <= ${oc.maxProperties}, { message: "maxProperties" })`;
      }
      return expr;
    }
    case "custom":
      if (node.runtime) return node.runtime;
      return `z.unknown() as unknown as z.ZodType<${node.type ?? "unknown"}>`;
    default: {
      const _e: never = node;
      return _e;
    }
  }
};

const emitNode = (node: SchemaNode, ctx: EmitCtx): string =>
  node.kind === "custom"
    ? emitNodeInner(node, ctx)
    : withZodDescription(withZodDefault(emitNodeInner(node, ctx), node.meta), node.meta, ctx.includeDescriptions);

export const zod3Adapter: RuntimeAdapter = {
  name: "zod3",
  imports: () => `import { z } from "zod";`,
  inferType: (expr) => `z.infer<typeof ${expr}>`,
  schemaType: (typeReference) => `z.ZodType & __TypedOpenapiSchema<${typeReference}>`,
  annotateSchema: (schemaExpr, typeReference) =>
    `${schemaExpr} as unknown as z.ZodType & __TypedOpenapiSchema<${typeReference}>`,
  emitNode,
  wrapLazy: (_name, body) => `z.lazy(() => ${body})`,
  literalString: (value) => `z.literal(${quote(value)})`,
  unknown: () => "z.unknown()",
  never: () => "z.never()",
  emitNamedSchema: (name, node, ctx, typeReference) => {
    const childCtx = { ...ctx, currentSchemaName: name };
    let body = emitNode(node, childCtx);
    if (typeReference) {
      if (ctx.recursiveNames.has(name)) body = `z.lazy(() => ${body})`;
      return `export type ${name} = ${typeReference};\nexport const ${name} = ${body};`;
    }
    if (ctx.recursiveNames.has(name)) {
      body = `z.lazy(() => ${body})`;
      const typeDecl = emitExplicitSchemaTypeDecl(name, node, ctx);
      return `${typeDecl}\nexport const ${name}: z.ZodType<${name}> = ${body};`;
    }
    if (hasObjectRestTyping(node)) {
      const typeDecl = emitExplicitSchemaTypeDecl(name, node, ctx);
      return `${typeDecl}\nexport const ${name} = ${body} as unknown as z.ZodType<${name}>;`;
    }
    return `export type ${name} = z.infer<typeof ${name}>;\nexport const ${name} = ${body};`;
  },
};
