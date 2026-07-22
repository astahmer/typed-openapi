import type { SchemaNode } from "../../schema-ir/types.ts";
import {
  applyArrayConstraints,
  applyNumberConstraints,
  applyObjectConstraints,
  applyStringConstraints,
  emitBinaryBlobCheck,
  emitExplicitSchemaTypeDecl,
  emitStreamCheck,
  isNullOr,
  literalValue,
  findMappedUnionMember,
  objectKey,
  objectProps,
  partitionNullUnionMembers,
  quote,
  withZodDefault,
} from "../shared.ts";
import type { EmitCtx, RuntimeAdapter } from "../types.ts";

const emitString = (node: Extract<SchemaNode, { kind: "string" }>, ctx: EmitCtx): string => {
  const c = applyStringConstraints(node.constraints, ctx.validation);
  let expr = "z.string()";
  if (c.format === "email") expr = "z.email()";
  else if (c.format === "uuid") expr = "z.uuid()";
  else if (c.format === "uri" || c.format === "url") expr = "z.url()";
  else if (c.format === "date-time") expr = "z.iso.datetime()";
  else if (c.format === "date") expr = "z.iso.date()";
  else if (c.format === "time") expr = "z.iso.time()";
  else if (c.format === "ipv4") expr = "z.ipv4()";
  else if (c.format === "ipv6") expr = "z.ipv6()";
  else if (c.format === "base64" || c.format === "byte") expr = "z.base64()";

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
  if (nullInner) {
    return `${emitNode(nullInner, ctx)}.nullable()`;
  }

  switch (node.kind) {
    case "string":
      return emitString(node, ctx);
    case "binary":
      return emitBinaryBlobCheck("zod");
    case "stream":
      return emitStreamCheck("zod");
    case "number":
      return emitNumber(node, ctx);
    case "boolean":
      return ctx.coercePrimitives ? "z.coerce.boolean()" : "z.boolean()";
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
      if (node.values.every((v) => typeof v === "string")) {
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
      return `z.union([${node.members.map((m) => emitNode(m, ctx)).join(", ")}])`;
    }
    case "intersection":
      return node.members.map((m) => emitNode(m, ctx)).reduce((acc, cur) => `${acc}.and(${cur})`);
    case "not": {
      const inner = emitNode(node.schema, ctx);
      return `z.unknown().refine((data) => !${inner}.safeParse(data).success, { message: "not" })`;
    }
    case "ref": {
      if (node.name === "Partial" && node.generics?.[0]) {
        const inner = emitNode(node.generics[0], ctx);
        return `${inner}.partial()`;
      }
      if (node.name === "Record" && node.generics?.length === 2) {
        return `z.record(${emitNode(node.generics[0]!, ctx)}, ${emitNode(node.generics[1]!, ctx)})`;
      }
      if (ctx.recursiveNames.has(node.name) && ctx.currentSchemaName === node.name) {
        return node.name;
      }
      return node.name;
    }
    case "record":
      return `z.record(${emitNode(node.key, ctx)}, ${emitNode(node.value, ctx)})`;
    case "object": {
      const props = objectProps(node, emitNode, ctx);
      const body = props
        .map(({ key, optional, expr, meta }) => {
          // `.default()` already makes the input optional — skip redundant `.optional()`.
          const hasDefault = meta.default !== undefined;
          return `${objectKey(key)}: ${optional && !hasDefault ? `${expr}.optional()` : expr}`;
        })
        .join(", ");
      let expr = `z.object({ ${body} })`;
      if (node.partial) expr += ".partial()";
      if (node.additionalProperties === true) expr += ".catchall(z.unknown())";
      else if (typeof node.additionalProperties === "object") {
        expr += `.catchall(${emitNode(node.additionalProperties, ctx)})`;
      }
      const oc = applyObjectConstraints(node.constraints, ctx.validation);
      if (oc.minProperties !== undefined) {
        expr += `.refine((obj) => Object.keys(obj).length >= ${oc.minProperties}, { message: "minProperties" })`;
      }
      if (oc.maxProperties !== undefined) {
        expr += `.refine((obj) => Object.keys(obj).length <= ${oc.maxProperties}, { message: "maxProperties" })`;
      }
      return expr;
    }
    default: {
      const _e: never = node;
      return _e;
    }
  }
};

const emitNode = (node: SchemaNode, ctx: EmitCtx): string => withZodDefault(emitNodeInner(node, ctx), node.meta);

export const zodAdapter: RuntimeAdapter = {
  name: "zod",
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
      if (ctx.runtimeTypeStrategy === "any") {
        return `export type ${name} = ${typeReference};\nexport const ${name}: any = ${body};`;
      }
      if (ctx.runtimeTypeStrategy === "raw") {
        return `export type ${name} = ${typeReference};\nexport const ${name} = ${body};`;
      }
      return `export type ${name} = ${typeReference};\nexport const ${name} = ${body} as z.ZodType<${typeReference}>;`;
    }
    if (ctx.recursiveNames.has(name)) {
      body = `z.lazy(() => ${body})`;
      // Explicit TS type + ZodType annotation — avoids circular infer `any` (TS7022/7024),
      // including nullable recursive schemas.
      const typeDecl = emitExplicitSchemaTypeDecl(name, node, ctx);
      return `${typeDecl}\nexport const ${name}: z.ZodType<${name}> = ${body};`;
    }
    return `export type ${name} = z.infer<typeof ${name}>;\nexport const ${name} = ${body};`;
  },
};
