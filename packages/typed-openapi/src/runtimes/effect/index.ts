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

const S = "Schema";

const pipeChecks = (base: string, checks: string[]): string => {
  if (!checks.length) return base;
  return `${base}.check(${checks.join(", ")})`;
};

const emitString = (node: Extract<SchemaNode, { kind: "string" }>, ctx: EmitCtx): string => {
  const c = applyStringConstraints(node.constraints, ctx.validation);
  const checks: string[] = [];
  let base = `${S}.String`;
  if (c.format === "uuid") base = `${S}.UUID`;
  else if (c.format === "email") checks.push(`${S}.isEmail()`);
  if (c.minLength !== undefined) checks.push(`${S}.isMinLength(${c.minLength})`);
  if (c.maxLength !== undefined) checks.push(`${S}.isMaxLength(${c.maxLength})`);
  if (c.pattern !== undefined) checks.push(`${S}.isPattern(new RegExp(${quote(c.pattern)}))`);
  return pipeChecks(base, checks);
};

const emitNumber = (node: Extract<SchemaNode, { kind: "number" }>, ctx: EmitCtx): string => {
  const c = applyNumberConstraints(node.constraints, ctx.validation);
  let base = node.integer ? `${S}.Int` : `${S}.Number`;
  const checks: string[] = [];
  if (c.minimum !== undefined) checks.push(`${S}.isGreaterThanOrEqualTo(${c.minimum})`);
  if (c.maximum !== undefined) checks.push(`${S}.isLessThanOrEqualTo(${c.maximum})`);
  if (c.exclusiveMinimum !== undefined) checks.push(`${S}.isGreaterThan(${c.exclusiveMinimum})`);
  if (c.exclusiveMaximum !== undefined) checks.push(`${S}.isLessThan(${c.exclusiveMaximum})`);
  if (c.multipleOf !== undefined) checks.push(`${S}.isMultipleOf(${c.multipleOf})`);
  return pipeChecks(base, checks);
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
      return `${S}.Union([${node.values.map((v) => `${S}.Literal(${literalValue(v)})`).join(", ")}])`;
    case "array": {
      const c = applyArrayConstraints(node.constraints, ctx.validation);
      let expr = `${S}.Array(${emitNode(node.items, ctx)})`;
      const checks: string[] = [];
      if (c.minItems !== undefined) checks.push(`${S}.isMinLength(${c.minItems})`);
      if (c.maxItems !== undefined) checks.push(`${S}.isMaxLength(${c.maxItems})`);
      return pipeChecks(expr, checks);
    }
    case "tuple": {
      const items = node.items.map((i) => emitNode(i, ctx)).join(", ");
      if (node.rest) return `${S}.Tuple([${items}], ${emitNode(node.rest, ctx)})`;
      return `${S}.Tuple([${items}])`;
    }
    case "union":
      return `${S}.Union([${node.members.map((m) => emitNode(m, ctx)).join(", ")}])`;
    case "intersection":
      return node.members.map((m) => emitNode(m, ctx)).reduce((acc, cur) => `${S}.extend(${acc}, ${cur})`);
    case "ref": {
      if (node.name === "Partial" && node.generics?.[0]) {
        return `${S}.partial(${emitNode(node.generics[0], ctx)})`;
      }
      if (node.name === "Record" && node.generics?.length === 2) {
        return `${S}.Record(${emitNode(node.generics[0]!, ctx)}, ${emitNode(node.generics[1]!, ctx)})`;
      }
      return node.name;
    }
    case "record":
      return `${S}.Record(${emitNode(node.key, ctx)}, ${emitNode(node.value, ctx)})`;
    case "object": {
      const props = objectProps(node, emitNode, ctx);
      const body = props
        .map(({ key, optional, expr }) => `${objectKey(key)}: ${optional ? `${S}.optional(${expr})` : expr}`)
        .join(", ");
      let expr = `${S}.Struct({ ${body} })`;
      if (node.partial) expr = `${S}.partial(${expr})`;
      if (node.additionalProperties === true) {
        expr = `${S}.extend(${expr}, ${S}.Record(${S}.String, ${S}.Unknown))`;
      } else if (typeof node.additionalProperties === "object") {
        expr = `${S}.extend(${expr}, ${S}.Record(${S}.String, ${emitNode(node.additionalProperties, ctx)}))`;
      }
      return expr;
    }
    default: {
      const _e: never = node;
      return _e;
    }
  }
};

export const effectAdapter: RuntimeAdapter = {
  name: "effect",
  imports: () => `import { Schema } from "effect";`,
  inferType: (expr) => `typeof ${expr}.Type`,
  emitNode,
  wrapLazy: (_name, body) => `${S}.suspend(() => ${body})`,
  literalString: (value) => `${S}.Literal(${quote(value)})`,
  unknown: () => `${S}.Unknown`,
  never: () => `${S}.Never`,
  emitNamedSchema: (name, node, ctx) => {
    const childCtx = { ...ctx, currentSchemaName: name };
    let body = emitNode(node, childCtx);
    if (ctx.recursiveNames.has(name)) body = `${S}.suspend(() => ${body})`;
    return `export const ${name} = ${body};\nexport type ${name} = typeof ${name}.Type;`;
  },
};
