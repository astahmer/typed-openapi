import type { SchemaNode } from "../../schema-ir/types.ts";
import {
  applyArrayConstraints,
  applyNumberConstraints,
  applyStringConstraints,
  isNullOr,
  literalValue,
  objectKey,
  objectProps,
  quote,
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
  return expr;
};

const emitNumber = (node: Extract<SchemaNode, { kind: "number" }>, ctx: EmitCtx): string => {
  const c = applyNumberConstraints(node.constraints, ctx.validation);
  let expr = node.integer ? "z.number().int()" : "z.number()";
  if (c.minimum !== undefined) expr += `.min(${c.minimum})`;
  if (c.maximum !== undefined) expr += `.max(${c.maximum})`;
  if (c.exclusiveMinimum !== undefined) expr += `.gt(${c.exclusiveMinimum})`;
  if (c.exclusiveMaximum !== undefined) expr += `.lt(${c.exclusiveMaximum})`;
  if (c.multipleOf !== undefined) expr += `.multipleOf(${c.multipleOf})`;
  return expr;
};

const emitNode = (node: SchemaNode, ctx: EmitCtx): string => {
  const nullInner = isNullOr(node);
  if (nullInner) return `${emitNode(nullInner, ctx)}.nullable()`;

  switch (node.kind) {
    case "string":
      return emitString(node, ctx);
    case "number":
      return emitNumber(node, ctx);
    case "boolean":
      return "z.boolean()";
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
      return expr;
    }
    case "tuple": {
      const items = node.items.map((i) => emitNode(i, ctx)).join(", ");
      if (node.rest) return `z.tuple([${items}]).rest(${emitNode(node.rest, ctx)})`;
      return `z.tuple([${items}])`;
    }
    case "union":
      return `z.union([${node.members.map((m) => emitNode(m, ctx)).join(", ")}])`;
    case "intersection":
      return node.members.map((m) => emitNode(m, ctx)).reduce((acc, cur) => `${acc}.and(${cur})`);
    case "ref": {
      if (node.name === "Partial" && node.generics?.[0]) return `${emitNode(node.generics[0], ctx)}.partial()`;
      if (node.name === "Record" && node.generics?.length === 2) {
        return `z.record(${emitNode(node.generics[0]!, ctx)}, ${emitNode(node.generics[1]!, ctx)})`;
      }
      return node.name;
    }
    case "record":
      return `z.record(${emitNode(node.key, ctx)}, ${emitNode(node.value, ctx)})`;
    case "object": {
      const props = objectProps(node, emitNode, ctx);
      const body = props
        .map(({ key, optional, expr }) => `${objectKey(key)}: ${optional ? `${expr}.optional()` : expr}`)
        .join(", ");
      let expr = `z.object({ ${body} })`;
      if (node.partial) expr += ".partial()";
      if (node.additionalProperties === true) expr += ".catchall(z.unknown())";
      else if (typeof node.additionalProperties === "object") {
        expr += `.catchall(${emitNode(node.additionalProperties, ctx)})`;
      }
      return expr;
    }
    default: {
      const _e: never = node;
      return _e;
    }
  }
};

export const zod3Adapter: RuntimeAdapter = {
  name: "zod3",
  imports: () => `import { z } from "zod";`,
  inferType: (expr) => `z.infer<typeof ${expr}>`,
  emitNode,
  wrapLazy: (_name, body) => `z.lazy(() => ${body})`,
  literalString: (value) => `z.literal(${quote(value)})`,
  unknown: () => "z.unknown()",
  never: () => "z.never()",
  emitNamedSchema: (name, node, ctx) => {
    const childCtx = { ...ctx, currentSchemaName: name };
    let body = emitNode(node, childCtx);
    if (ctx.recursiveNames.has(name)) body = `z.lazy(() => ${body})`;
    return `export type ${name} = z.infer<typeof ${name}>;\nexport const ${name} = ${body};`;
  },
};
