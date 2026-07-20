import type { SchemaNode } from "../../schema-ir/types.ts";
import {
  applyArrayConstraints,
  applyNumberConstraints,
  applyObjectConstraints,
  applyStringConstraints,
  isNullOr,
  literalValue,
  objectKey,
  objectProps,
  quote,
} from "../shared.ts";
import type { EmitCtx, RuntimeAdapter } from "../types.ts";

/** Legacy `@effect/schema` adapter — mirrors effect4 coverage with package-specific APIs. */
const S = "S";

const pipeFilters = (base: string, filters: string[]): string => {
  if (!filters.length) return base;
  return `${base}.pipe(${filters.join(", ")})`;
};

const emitString = (node: Extract<SchemaNode, { kind: "string" }>, ctx: EmitCtx): string => {
  const c = applyStringConstraints(node.constraints, ctx.validation);
  const filters: string[] = [];
  let base = `${S}.String`;
  if (c.format === "uuid") base = `${S}.UUID`;
  else if (c.format === "email") {
    filters.push(`${S}.pattern(/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/)`);
  }
  // no Schema.URL in @effect/schema — keep String for uri/url
  if (c.minLength !== undefined) filters.push(`${S}.minLength(${c.minLength})`);
  if (c.maxLength !== undefined) filters.push(`${S}.maxLength(${c.maxLength})`);
  if (c.pattern !== undefined) filters.push(`${S}.pattern(new RegExp(${quote(c.pattern)}))`);
  return pipeFilters(base, filters);
};

const emitNumber = (node: Extract<SchemaNode, { kind: "number" }>, ctx: EmitCtx): string => {
  const c = applyNumberConstraints(node.constraints, ctx.validation);
  let base = node.integer ? `${S}.Int` : `${S}.Number`;
  const filters: string[] = [];
  if (c.minimum !== undefined) filters.push(`${S}.greaterThanOrEqualTo(${c.minimum})`);
  if (c.maximum !== undefined) filters.push(`${S}.lessThanOrEqualTo(${c.maximum})`);
  if (c.exclusiveMinimum !== undefined) filters.push(`${S}.greaterThan(${c.exclusiveMinimum})`);
  if (c.exclusiveMaximum !== undefined) filters.push(`${S}.lessThan(${c.exclusiveMaximum})`);
  if (c.multipleOf !== undefined) filters.push(`${S}.multipleOf(${c.multipleOf})`);
  return pipeFilters(base, filters);
};

const emitRecord = (key: string, value: string) => `${S}.Record({ key: ${key}, value: ${value} })`;

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
      const filters: string[] = [];
      if (c.minItems !== undefined) filters.push(`${S}.minItems(${c.minItems})`);
      if (c.maxItems !== undefined) filters.push(`${S}.maxItems(${c.maxItems})`);
      if (c.uniqueItems) {
        filters.push(`${S}.filter((arr) => new Set(arr).size === arr.length)`);
      }
      return pipeFilters(expr, filters);
    }
    case "tuple": {
      const items = node.items.map((i) => emitNode(i, ctx)).join(", ");
      return `${S}.Tuple(${items})`;
    }
    case "union":
      return `${S}.Union(${node.members.map((m) => emitNode(m, ctx)).join(", ")})`;
    case "intersection":
      return node.members.map((m) => emitNode(m, ctx)).reduce((acc, cur) => `${S}.extend(${acc}, ${cur})`);
    case "not": {
      const inner = emitNode(node.schema, ctx);
      return `${S}.Unknown.pipe(${S}.filter((data) => !${S}.is(${inner})(data)))`;
    }
    case "ref": {
      if (node.name === "Partial" && node.generics?.[0]) {
        return `${S}.partial(${emitNode(node.generics[0], ctx)})`;
      }
      if (node.name === "Record" && node.generics?.length === 2) {
        return emitRecord(emitNode(node.generics[0]!, ctx), emitNode(node.generics[1]!, ctx));
      }
      return node.name;
    }
    case "record":
      return emitRecord(emitNode(node.key, ctx), emitNode(node.value, ctx));
    case "object": {
      const props = objectProps(node, emitNode, ctx);
      const body = props
        .map(({ key, optional, expr }) => `${objectKey(key)}: ${optional ? `${S}.optional(${expr})` : expr}`)
        .join(", ");
      let expr = `${S}.Struct({ ${body} })`;
      if (node.partial) expr = `${S}.partial(${expr})`;
      if (node.additionalProperties === true) {
        expr = `${S}.extend(${expr}, ${emitRecord(`${S}.String`, `${S}.Unknown`)})`;
      } else if (typeof node.additionalProperties === "object") {
        expr = `${S}.extend(${expr}, ${emitRecord(`${S}.String`, emitNode(node.additionalProperties, ctx))})`;
      }
      const oc = applyObjectConstraints(node.constraints, ctx.validation);
      const filters: string[] = [];
      if (oc.minProperties !== undefined) {
        filters.push(`${S}.filter((obj) => Object.keys(obj).length >= ${oc.minProperties})`);
      }
      if (oc.maxProperties !== undefined) {
        filters.push(`${S}.filter((obj) => Object.keys(obj).length <= ${oc.maxProperties})`);
      }
      return pipeFilters(expr, filters);
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
