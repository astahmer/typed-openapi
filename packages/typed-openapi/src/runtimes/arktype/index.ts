import type { LiteralValue, SchemaNode } from "../../schema-ir/types.ts";
import { applyNumberConstraints, applyStringConstraints, isNullOr, objectKey, objectProps, quote } from "../shared.ts";
import type { EmitCtx, RuntimeAdapter } from "../types.ts";

const emitStringDef = (node: Extract<SchemaNode, { kind: "string" }>, ctx: EmitCtx): string => {
  const c = applyStringConstraints(node.constraints, ctx.validation);
  if (c.format === "email") return quote("string.email");
  if (c.format === "uuid") return quote("string.uuid");
  if (c.format === "uri" || c.format === "url") return quote("string.url");
  if (c.format === "date-time") return quote("string.date");
  if (c.pattern) return quote(`/${c.pattern}/`);
  if (c.minLength !== undefined && c.maxLength !== undefined) {
    return quote(`string >= ${c.minLength} <= ${c.maxLength}`);
  }
  if (c.minLength !== undefined) return quote(`string >= ${c.minLength}`);
  if (c.maxLength !== undefined) return quote(`string <= ${c.maxLength}`);
  return quote("string");
};

const emitNumberDef = (node: Extract<SchemaNode, { kind: "number" }>, ctx: EmitCtx): string => {
  const c = applyNumberConstraints(node.constraints, ctx.validation);
  const base = node.integer ? "number.integer" : "number";
  // Prefer `0 <= number <= 10` — ArkType rejects `number >= 0 <= 10` at the type level.
  const left =
    c.exclusiveMinimum !== undefined
      ? `${c.exclusiveMinimum} <`
      : c.minimum !== undefined
        ? `${c.minimum} <=`
        : undefined;
  const right =
    c.exclusiveMaximum !== undefined
      ? `< ${c.exclusiveMaximum}`
      : c.maximum !== undefined
        ? `<= ${c.maximum}`
        : undefined;
  if (left && right) return quote(`${left} ${base} ${right}`);
  if (left) return quote(`${left} ${base}`);
  if (right) return quote(`${base} ${right}`);
  return quote(base);
};

/** Open maps: index signature. `type("Record", …)` is not a valid arity. */
const emitRecord = (valueExpr: string) => `type({ "[string]": ${valueExpr} })`;

/** ArkType string defs for unit types: "'active'", "null", "true", "1" */
const arkUnitDef = (value: LiteralValue): string => {
  if (value === null) return quote("null");
  if (typeof value === "string") return quote(`'${value.replace(/\\/g, "\\\\").replace(/'/g, "\\'")}'`);
  return quote(String(value));
};

const emitNode = (node: SchemaNode, ctx: EmitCtx): string => {
  const nullInner = isNullOr(node);
  if (nullInner) return `${emitNode(nullInner, ctx)}.or(type("null"))`;

  switch (node.kind) {
    case "string":
      return `type(${emitStringDef(node, ctx)})`;
    case "number":
      return `type(${emitNumberDef(node, ctx)})`;
    case "boolean":
      return `type("boolean")`;
    case "null":
      return `type("null")`;
    case "unknown":
      return `type("unknown")`;
    case "any":
      return `type("unknown")`;
    case "never":
      return `type("never")`;
    case "literal":
      return `type(${arkUnitDef(node.value)})`;
    case "enum":
      return `type.enumerated(${node.values
        .map((v) => (typeof v === "string" ? quote(v) : v === null ? "null" : String(v)))
        .join(", ")})`;
    case "array":
      return `${emitNode(node.items, ctx)}.array()`;
    case "tuple":
      return `type([${node.items.map((i) => emitNode(i, ctx)).join(", ")}])`;
    case "union":
      return node.members.map((m) => emitNode(m, ctx)).reduce((a, b) => `${a}.or(${b})`);
    case "intersection":
      return node.members.map((m) => emitNode(m, ctx)).reduce((a, b) => `${a}.and(${b})`);
    case "not":
      // ArkType negation is limited; fall back to unknown
      return `type("unknown")`;
    case "ref": {
      if (node.name === "Partial" && node.generics?.[0]) {
        return `${emitNode(node.generics[0], ctx)}.partial()`;
      }
      if (node.name === "Record" && node.generics?.length === 2) {
        return emitRecord(emitNode(node.generics[1]!, ctx));
      }
      return node.name;
    }
    case "record":
      return emitRecord(emitNode(node.value, ctx));
    case "object": {
      const props = objectProps(node, emitNode, ctx);
      const body = props
        .map(({ key, optional, expr }) => {
          const keyLit = optional ? quote(`${key}?`) : objectKey(key);
          return `${keyLit}: ${expr}`;
        })
        .join(", ");
      let expr = `type({ ${body} })`;
      if (node.partial) expr = `${expr}.partial()`;
      return expr;
    }
    default: {
      const _e: never = node;
      return _e;
    }
  }
};

export const arktypeAdapter: RuntimeAdapter = {
  name: "arktype",
  imports: () => `import { type } from "arktype";`,
  inferType: (expr) => `${expr}["infer"]`,
  emitNode,
  wrapLazy: (_name, body) => body,
  literalString: (value) => `type(${arkUnitDef(value)})`,
  unknown: () => `type("unknown")`,
  never: () => `type("never")`,
  emitNamedSchema: (name, node, ctx) => {
    const childCtx = { ...ctx, currentSchemaName: name };
    const body = emitNode(node, childCtx);
    return `export const ${name} = ${body};\nexport type ${name} = typeof ${name}.infer;`;
  },
};
