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
  withEffectDefault,
} from "../shared.ts";
import type { EmitCtx, RuntimeAdapter } from "../types.ts";

const S = "Schema";

/** Effect Schema refinements use `.pipe(Schema.minLength(...))`, not `.check(is*)`. */
const pipeFilters = (base: string, filters: string[]): string => {
  if (!filters.length) return base;
  return `${base}.pipe(${filters.join(", ")})`;
};

const emitString = (node: Extract<SchemaNode, { kind: "string" }>, ctx: EmitCtx): string => {
  const c = applyStringConstraints(node.constraints, ctx.validation);
  const filters: string[] = [];
  let base = `${S}.String`;
  if (c.format === "uuid") base = `${S}.UUID`;
  else if (c.format === "uri" || c.format === "url") base = `${S}.URL`;
  else if (c.format === "email") {
    // No dedicated Schema.Email in effect — approximate with pattern
    filters.push(`${S}.pattern(/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/)`);
  }
  if (c.minLength !== undefined) filters.push(`${S}.minLength(${c.minLength})`);
  if (c.maxLength !== undefined) filters.push(`${S}.maxLength(${c.maxLength})`);
  if (c.pattern !== undefined) filters.push(`${S}.pattern(new RegExp(${quote(c.pattern)}))`);
  return pipeFilters(base, filters);
};

const emitNumber = (node: Extract<SchemaNode, { kind: "number" }>, ctx: EmitCtx): string => {
  const c = applyNumberConstraints(node.constraints, ctx.validation);
  const filters: string[] = [];
  if (node.integer && ctx.coercePrimitives) filters.push(`${S}.int()`);
  if (c.minimum !== undefined) filters.push(`${S}.greaterThanOrEqualTo(${c.minimum})`);
  if (c.maximum !== undefined) filters.push(`${S}.lessThanOrEqualTo(${c.maximum})`);
  if (c.exclusiveMinimum !== undefined) filters.push(`${S}.greaterThan(${c.exclusiveMinimum})`);
  if (c.exclusiveMaximum !== undefined) filters.push(`${S}.lessThan(${c.exclusiveMaximum})`);
  if (c.multipleOf !== undefined) filters.push(`${S}.multipleOf(${c.multipleOf})`);
  const base = ctx.coercePrimitives ? `${S}.NumberFromString` : node.integer ? `${S}.Int` : `${S}.Number`;
  return pipeFilters(base, filters);
};

/** Effect Schema.Record requires `{ key, value }` (2-arg form fails at runtime/types). */
const emitRecord = (key: string, value: string) => `${S}.Record({ key: ${key}, value: ${value} })`;

const emitNodeInner = (node: SchemaNode, ctx: EmitCtx): string => {
  const nullInner = isNullOr(node);
  if (nullInner) return `${S}.NullOr(${emitNode(nullInner, ctx)})`;

  switch (node.kind) {
    case "string":
      return emitString(node, ctx);
    case "number":
      return emitNumber(node, ctx);
    case "boolean":
      return ctx.coercePrimitives ? `${S}.BooleanFromString` : `${S}.Boolean`;
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
      // Effect overloads: prefer rest args for TS; array form is runtime-ok but poorly typed
      return `${S}.Union(${node.values.map((v) => `${S}.Literal(${literalValue(v)})`).join(", ")})`;
    case "array": {
      const c = applyArrayConstraints(node.constraints, ctx.validation);
      let expr = `${S}.Array(${emitNode(node.items, ctx)})`;
      const filters: string[] = [];
      if (c.minItems !== undefined) filters.push(`${S}.minItems(${c.minItems})`);
      if (c.maxItems !== undefined) filters.push(`${S}.maxItems(${c.maxItems})`);
      if (c.uniqueItems) {
        filters.push(`${S}.filter((arr) => new Set(arr).size === arr.length, { message: () => "uniqueItems" })`);
      }
      return pipeFilters(expr, filters);
    }
    case "tuple": {
      const items = node.items.map((i) => emitNode(i, ctx)).join(", ");
      if (node.rest) return `${S}.Tuple([${items}], ${emitNode(node.rest, ctx)})`;
      return `${S}.Tuple([${items}])`;
    }
    case "union":
      return `${S}.Union(${node.members.map((m) => emitNode(m, ctx)).join(", ")})`;
    case "intersection":
      return node.members.map((m) => emitNode(m, ctx)).reduce((acc, cur) => `${S}.extend(${acc}, ${cur})`);
    case "not": {
      const inner = emitNode(node.schema, ctx);
      return `${S}.Unknown.pipe(${S}.filter((data) => !${S}.is(${inner})(data), { message: () => "not" }))`;
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
        .map(({ key, optional, expr, meta }) => {
          const hasDefault = meta.default !== undefined;
          // Defaults already wrap as UndefinedOr→transform; skip extra optional().
          return `${objectKey(key)}: ${optional && !hasDefault ? `${S}.optional(${expr})` : expr}`;
        })
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
        filters.push(
          `${S}.filter((obj) => Object.keys(obj).length >= ${oc.minProperties}, { message: () => "minProperties" })`,
        );
      }
      if (oc.maxProperties !== undefined) {
        filters.push(
          `${S}.filter((obj) => Object.keys(obj).length <= ${oc.maxProperties}, { message: () => "maxProperties" })`,
        );
      }
      return pipeFilters(expr, filters);
    }
    default: {
      const _e: never = node;
      return _e;
    }
  }
};

const emitNode = (node: SchemaNode, ctx: EmitCtx): string => withEffectDefault(emitNodeInner(node, ctx), node.meta, S);

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
