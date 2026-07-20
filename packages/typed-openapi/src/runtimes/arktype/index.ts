import type { LiteralValue, SchemaNode } from "../../schema-ir/types.ts";
import {
  applyNumberConstraints,
  applyStringConstraints,
  arktypeDefaultDef,
  isNullOr,
  objectKey,
  objectProps,
  quote,
} from "../shared.ts";
import type { EmitCtx, NamedSchema, RuntimeAdapter } from "../types.ts";

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
  if (ctx.coercePrimitives) {
    // HTTP params arrive as strings — ArkType morph keywords.
    return quote(node.integer ? "string.integer.parse" : "string.numeric.parse");
  }
  const c = applyNumberConstraints(node.constraints, ctx.validation);
  const base = node.integer ? "number.integer" : "number";
  // Both bounds: `0 <= number <= 10` (ArkType rejects `number >= 0 <= 10`).
  // Single bound: keep on the right (`number >= 0` / `number <= 10`).
  const hasLo = c.minimum !== undefined || c.exclusiveMinimum !== undefined;
  const hasHi = c.maximum !== undefined || c.exclusiveMaximum !== undefined;
  if (hasLo && hasHi) {
    const left = c.exclusiveMinimum !== undefined ? `${c.exclusiveMinimum} <` : `${c.minimum} <=`;
    const right = c.exclusiveMaximum !== undefined ? `< ${c.exclusiveMaximum}` : `<= ${c.maximum}`;
    return quote(`${left} ${base} ${right}`);
  }
  if (c.exclusiveMinimum !== undefined) return quote(`${base} > ${c.exclusiveMinimum}`);
  if (c.minimum !== undefined) return quote(`${base} >= ${c.minimum}`);
  if (c.exclusiveMaximum !== undefined) return quote(`${base} < ${c.exclusiveMaximum}`);
  if (c.maximum !== undefined) return quote(`${base} <= ${c.maximum}`);
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

/** Module string defs look like `"Category"` / `"Category[]"` / `"Category | null"`. */
const isModuleStringDef = (expr: string): boolean =>
  expr.length >= 2 && expr.startsWith('"') && expr.endsWith('"') && !expr.includes("type(");

const unquote = (expr: string): string => expr.slice(1, -1);

const emitNode = (node: SchemaNode, ctx: EmitCtx): string => {
  const nullInner = isNullOr(node);
  if (nullInner) {
    const inner = emitNode(nullInner, ctx);
    if (ctx.moduleSchemaNames && isModuleStringDef(inner)) {
      return quote(`${unquote(inner)} | null`);
    }
    return `${inner}.or(type("null"))`;
  }

  switch (node.kind) {
    case "string":
      return `type(${emitStringDef(node, ctx)})`;
    case "number":
      return `type(${emitNumberDef(node, ctx)})`;
    case "boolean":
      return ctx.coercePrimitives
        ? `type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1")`
        : `type("boolean")`;
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
    case "array": {
      const items = emitNode(node.items, ctx);
      if (ctx.moduleSchemaNames && isModuleStringDef(items)) {
        return quote(`${unquote(items)}[]`);
      }
      return `${items}.array()`;
    }
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
      if (ctx.moduleSchemaNames?.has(node.name)) {
        return quote(node.name);
      }
      return node.name;
    }
    case "record":
      return emitRecord(emitNode(node.value, ctx));
    case "object": {
      const forceOptional = Boolean(node.partial && ctx.moduleSchemaNames);
      const props = objectProps(node, emitNode, ctx);
      const body = props
        .map(({ key, optional, expr, meta }) => {
          const hasDefault = meta.default !== undefined;
          const keyLit = (optional || forceOptional) && !hasDefault ? quote(`${key}?`) : objectKey(key);
          // ArkType defaults only valid on object/tuple properties as string defs.
          if (hasDefault && expr.startsWith("type(") && expr.endsWith(")")) {
            const innerArg = expr.slice("type(".length, -1);
            const withDef = arktypeDefaultDef(innerArg, meta);
            if (withDef) return `${keyLit}: ${withDef}`;
          }
          if (hasDefault && isModuleStringDef(expr)) {
            const withDef = arktypeDefaultDef(expr, meta);
            if (withDef) return `${keyLit}: ${withDef}`;
          }
          // Fallback: keep expr (defaults only attach to string defs in ArkType)
          return `${keyLit}: ${expr}`;
        })
        .join(", ");
      // Root values inside type.module must be raw object literals (not type({...}))
      // so sibling string refs like "Category[]" resolve.
      if (ctx.moduleSchemaNames && ctx.currentSchemaName) {
        return `{ ${body} }`;
      }
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

const emitNamedSchema = (name: string, node: SchemaNode, ctx: EmitCtx): string => {
  const childCtx = { ...ctx, currentSchemaName: name };
  const body = emitNode(node, childCtx);
  return `export const ${name} = ${body};\nexport type ${name} = typeof ${name}.infer;`;
};

const emitNamedSchemas = (schemas: NamedSchema[], ctx: EmitCtx): string => {
  if (ctx.recursiveNames.size === 0 || schemas.length === 0) {
    return schemas.map(({ name, node }) => emitNamedSchema(name, node, ctx)).join("\n\n");
  }

  const moduleSchemaNames = new Set(schemas.map((s) => s.name));
  const moduleCtx: EmitCtx = { ...ctx, moduleSchemaNames };

  const entries = schemas
    .map(({ name, node }) => {
      const body = emitNode(node, { ...moduleCtx, currentSchemaName: name });
      return `  ${name}: ${body},`;
    })
    .join("\n");

  let out = `const __schemas = type.module({\n${entries}\n});\n\n`;
  for (const { name } of schemas) {
    out += `export const ${name} = __schemas.${name};\nexport type ${name} = typeof ${name}.infer;\n\n`;
  }
  return out.trimEnd();
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
  emitNamedSchema,
  emitNamedSchemas,
};
