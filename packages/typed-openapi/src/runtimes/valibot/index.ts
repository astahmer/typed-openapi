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

const pipe = (base: string, actions: string[]): string => {
  if (!actions.length) return base;
  return `v.pipe(${base}, ${actions.join(", ")})`;
};

const emitString = (node: Extract<SchemaNode, { kind: "string" }>, ctx: EmitCtx): string => {
  const c = applyStringConstraints(node.constraints, ctx.validation);
  const actions: string[] = [];
  if (c.format === "email") actions.push("v.email()");
  else if (c.format === "uuid") actions.push("v.uuid()");
  else if (c.format === "uri" || c.format === "url") actions.push("v.url()");
  else if (c.format === "ipv4") actions.push("v.ipv4()");
  else if (c.format === "ipv6") actions.push("v.ipv6()");
  if (c.minLength !== undefined) actions.push(`v.minLength(${c.minLength})`);
  if (c.maxLength !== undefined) actions.push(`v.maxLength(${c.maxLength})`);
  if (c.pattern !== undefined) actions.push(`v.regex(new RegExp(${quote(c.pattern)}))`);
  return pipe("v.string()", actions);
};

const emitNumber = (node: Extract<SchemaNode, { kind: "number" }>, ctx: EmitCtx): string => {
  const c = applyNumberConstraints(node.constraints, ctx.validation);
  const actions: string[] = [];
  if (node.integer) actions.push("v.integer()");
  if (c.minimum !== undefined) actions.push(`v.minValue(${c.minimum})`);
  if (c.maximum !== undefined) actions.push(`v.maxValue(${c.maximum})`);
  if (c.exclusiveMinimum !== undefined) actions.push(`v.gtValue(${c.exclusiveMinimum})`);
  if (c.exclusiveMaximum !== undefined) actions.push(`v.ltValue(${c.exclusiveMaximum})`);
  if (c.multipleOf !== undefined) actions.push(`v.multipleOf(${c.multipleOf})`);
  return pipe("v.number()", actions);
};

const emitNode = (node: SchemaNode, ctx: EmitCtx): string => {
  const nullInner = isNullOr(node);
  if (nullInner) return `v.nullable(${emitNode(nullInner, ctx)})`;

  switch (node.kind) {
    case "string":
      return emitString(node, ctx);
    case "number":
      return emitNumber(node, ctx);
    case "boolean":
      return "v.boolean()";
    case "null":
      return "v.null()";
    case "unknown":
      return "v.unknown()";
    case "any":
      return "v.any()";
    case "never":
      return "v.never()";
    case "literal":
      return `v.literal(${literalValue(node.value)})`;
    case "enum": {
      if (node.values.every((v) => typeof v === "string") && node.values.length > 0) {
        return `v.picklist([${node.values.map((v) => quote(String(v))).join(", ")}])`;
      }
      return `v.union([${node.values.map((v) => `v.literal(${literalValue(v)})`).join(", ")}])`;
    }
    case "array": {
      const c = applyArrayConstraints(node.constraints, ctx.validation);
      const actions: string[] = [];
      if (c.minItems !== undefined) actions.push(`v.minLength(${c.minItems})`);
      if (c.maxItems !== undefined) actions.push(`v.maxLength(${c.maxItems})`);
      if (c.uniqueItems) {
        actions.push(`v.check((arr) => new Set(arr).size === arr.length, "uniqueItems")`);
      }
      return pipe(`v.array(${emitNode(node.items, ctx)})`, actions);
    }
    case "tuple":
      return `v.tuple([${node.items.map((i) => emitNode(i, ctx)).join(", ")}])`;
    case "union":
      return `v.union([${node.members.map((m) => emitNode(m, ctx)).join(", ")}])`;
    case "intersection":
      return `v.intersect([${node.members.map((m) => emitNode(m, ctx)).join(", ")}])`;
    case "not": {
      const inner = emitNode(node.schema, ctx);
      return `v.pipe(v.unknown(), v.check((data) => !v.is(${inner}, data), "not"))`;
    }
    case "ref": {
      if (node.name === "Partial" && node.generics?.[0]) return `v.partial(${emitNode(node.generics[0], ctx)})`;
      if (node.name === "Record" && node.generics?.length === 2) {
        return `v.record(${emitNode(node.generics[0]!, ctx)}, ${emitNode(node.generics[1]!, ctx)})`;
      }
      return node.name;
    }
    case "record":
      return `v.record(${emitNode(node.key, ctx)}, ${emitNode(node.value, ctx)})`;
    case "object": {
      const props = objectProps(node, emitNode, ctx);
      const body = props
        .map(({ key, optional, expr }) => `${objectKey(key)}: ${optional ? `v.optional(${expr})` : expr}`)
        .join(", ");
      let expr = `v.object({ ${body} })`;
      if (node.partial) expr = `v.partial(${expr})`;
      const oc = applyObjectConstraints(node.constraints, ctx.validation);
      const actions: string[] = [];
      if (oc.minProperties !== undefined) {
        actions.push(`v.check((obj) => Object.keys(obj).length >= ${oc.minProperties}, "minProperties")`);
      }
      if (oc.maxProperties !== undefined) {
        actions.push(`v.check((obj) => Object.keys(obj).length <= ${oc.maxProperties}, "maxProperties")`);
      }
      return pipe(expr, actions);
    }
    default: {
      const _e: never = node;
      return _e;
    }
  }
};

export const valibotAdapter: RuntimeAdapter = {
  name: "valibot",
  imports: () => `import * as v from "valibot";`,
  inferType: (expr) => `v.InferOutput<typeof ${expr}>`,
  emitNode,
  wrapLazy: (_name, body) => `v.lazy(() => ${body})`,
  literalString: (value) => `v.literal(${quote(value)})`,
  unknown: () => "v.unknown()",
  never: () => "v.never()",
  emitNamedSchema: (name, node, ctx) => {
    const childCtx = { ...ctx, currentSchemaName: name };
    let body = emitNode(node, childCtx);
    if (ctx.recursiveNames.has(name)) body = `v.lazy(() => ${body})`;
    return `export type ${name} = v.InferOutput<typeof ${name}>;\nexport const ${name} = ${body};`;
  },
};
