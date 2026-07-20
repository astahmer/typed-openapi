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

/** Legacy `@effect/schema` (Effect 3 era) adapter */
const S = "S";

const emitString = (node: Extract<SchemaNode, { kind: "string" }>, ctx: EmitCtx): string => {
  const c = applyStringConstraints(node.constraints, ctx.validation);
  let expr = `${S}.String`;
  if (c.format === "uuid") expr = `${S}.UUID`;
  else if (c.format === "email") expr = `${expr}.pipe(${S}.pattern(/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/))`;
  if (c.minLength !== undefined) expr = `${expr}.pipe(${S}.minLength(${c.minLength}))`;
  if (c.maxLength !== undefined) expr = `${expr}.pipe(${S}.maxLength(${c.maxLength}))`;
  if (c.pattern !== undefined) expr = `${expr}.pipe(${S}.pattern(new RegExp(${quote(c.pattern)})))`;
  return expr;
};

const emitNumber = (node: Extract<SchemaNode, { kind: "number" }>, ctx: EmitCtx): string => {
  const c = applyNumberConstraints(node.constraints, ctx.validation);
  let expr = node.integer ? `${S}.Int` : `${S}.Number`;
  if (c.minimum !== undefined) expr = `${expr}.pipe(${S}.greaterThanOrEqualTo(${c.minimum}))`;
  if (c.maximum !== undefined) expr = `${expr}.pipe(${S}.lessThanOrEqualTo(${c.maximum}))`;
  if (c.exclusiveMinimum !== undefined) expr = `${expr}.pipe(${S}.greaterThan(${c.exclusiveMinimum}))`;
  if (c.exclusiveMaximum !== undefined) expr = `${expr}.pipe(${S}.lessThan(${c.exclusiveMaximum}))`;
  if (c.multipleOf !== undefined) expr = `${expr}.pipe(${S}.multipleOf(${c.multipleOf}))`;
  return expr;
};

const emitNode = (node: SchemaNode, ctx: EmitCtx): string => {
  const nullInner = isNullOr(node);
  if (nullInner) return `${S}.NullOr(${emitNode(nullInner, ctx)})`;

  switch (node.kind) {
    case "string":
      return emitString(node, ctx);
    case "number":
      return emitNumber(node, ctx);
    case "boolean":
      return `${S}.Boolean`;
    case "null":
      return `${S}.Null`;
    case "unknown":
      return `${S}.Unknown`;
    case "any":
      return `${S}.Any`;
    case "never":
      return `${S}.Never`;
    case "literal":
      return `${S}.Literal(${literalValue(node.value)})`;
    case "enum":
      return `${S}.Union(${node.values.map((v) => `${S}.Literal(${literalValue(v)})`).join(", ")})`;
    case "array": {
      const c = applyArrayConstraints(node.constraints, ctx.validation);
      let expr = `${S}.Array(${emitNode(node.items, ctx)})`;
      if (c.minItems !== undefined) expr = `${expr}.pipe(${S}.minItems(${c.minItems}))`;
      if (c.maxItems !== undefined) expr = `${expr}.pipe(${S}.maxItems(${c.maxItems}))`;
      return expr;
    }
    case "tuple": {
      const items = node.items.map((i) => emitNode(i, ctx)).join(", ");
      return `${S}.Tuple(${items})`;
    }
    case "union":
      return `${S}.Union(${node.members.map((m) => emitNode(m, ctx)).join(", ")})`;
    case "intersection":
      return node.members.map((m) => emitNode(m, ctx)).reduce((acc, cur) => `${S}.extend(${acc}, ${cur})`);
    case "ref": {
      if (node.name === "Partial" && node.generics?.[0]) return `${S}.partial(${emitNode(node.generics[0], ctx)})`;
      if (node.name === "Record" && node.generics?.length === 2) {
        return `${S}.Record({ key: ${emitNode(node.generics[0]!, ctx)}, value: ${emitNode(node.generics[1]!, ctx)} })`;
      }
      return node.name;
    }
    case "record":
      return `${S}.Record({ key: ${emitNode(node.key, ctx)}, value: ${emitNode(node.value, ctx)} })`;
    case "object": {
      const props = objectProps(node, emitNode, ctx);
      const body = props
        .map(({ key, optional, expr }) => `${objectKey(key)}: ${optional ? `${S}.optional(${expr})` : expr}`)
        .join(", ");
      let expr = `${S}.Struct({ ${body} })`;
      if (node.partial) expr = `${S}.partial(${expr})`;
      return expr;
    }
    default: {
      const _e: never = node;
      return _e;
    }
  }
};

export const effect3Adapter: RuntimeAdapter = {
  name: "effect3",
  imports: () => `import { Schema as S } from "@effect/schema";`,
  inferType: (expr) => `S.Schema.Type<typeof ${expr}>`,
  emitNode,
  wrapLazy: (_name, body) => `${S}.suspend(() => ${body})`,
  literalString: (value) => `${S}.Literal(${quote(value)})`,
  unknown: () => `${S}.Unknown`,
  never: () => `${S}.Never`,
  emitNamedSchema: (name, node, ctx) => {
    const childCtx = { ...ctx, currentSchemaName: name };
    let body = emitNode(node, childCtx);
    if (ctx.recursiveNames.has(name)) body = `${S}.suspend(() => ${body})`;
    return `export const ${name} = ${body};\nexport type ${name} = S.Schema.Type<typeof ${name}>;`;
  },
};
