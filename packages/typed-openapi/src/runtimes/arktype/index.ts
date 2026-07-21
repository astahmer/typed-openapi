import type { LiteralValue, SchemaNode } from "../../schema-ir/types.ts";
import {
  applyNumberConstraints,
  applyStringConstraints,
  arktypeDefaultDef,
  emitBinaryBlobCheck,
  emitStreamCheck,
  findMappedUnionMember,
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
  // Patterns handled in emitNode via .narrow() — avoid `/[...]/` string-def pitfalls.
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
    // ArkType rejects non-literal extremes like ±1.797e+308 in string defs.
    if (
      [c.minimum, c.maximum, c.exclusiveMinimum, c.exclusiveMaximum].some(
        (n) => typeof n === "number" && !Number.isSafeInteger(n) && Math.abs(n) > 1e15,
      )
    ) {
      return quote(base);
    }
    return quote(`${left} ${base} ${right}`);
  }
  if (c.exclusiveMinimum !== undefined) {
    if (!Number.isSafeInteger(c.exclusiveMinimum) && Math.abs(c.exclusiveMinimum) > 1e15) return quote(base);
    return quote(`${base} > ${c.exclusiveMinimum}`);
  }
  if (c.minimum !== undefined) {
    if (!Number.isSafeInteger(c.minimum) && Math.abs(c.minimum) > 1e15) return quote(base);
    return quote(`${base} >= ${c.minimum}`);
  }
  if (c.exclusiveMaximum !== undefined) {
    if (!Number.isSafeInteger(c.exclusiveMaximum) && Math.abs(c.exclusiveMaximum) > 1e15) return quote(base);
    return quote(`${base} < ${c.exclusiveMaximum}`);
  }
  if (c.maximum !== undefined) {
    if (!Number.isSafeInteger(c.maximum) && Math.abs(c.maximum) > 1e15) return quote(base);
    return quote(`${base} <= ${c.maximum}`);
  }
  return quote(base);
};

/** Open maps: index signature. `type("Record", …)` is not a valid arity. */
const emitRecord = (valueExpr: string, ctx?: EmitCtx) =>
  ctx?.moduleSchemaNames ? `{ "[string]": ${valueExpr} }` : `type({ "[string]": ${valueExpr} })`;

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

/** Ensure expr is an ArkType Type (has .or / .array), wrapping raw `{...}` module literals. */
const asTypeExpr = (expr: string): string => (expr.trimStart().startsWith("{") ? `type(${expr})` : expr);

const emitNode = (node: SchemaNode, ctx: EmitCtx): string => {
  const nullInner = isNullOr(node);
  if (nullInner) {
    const inner = emitNode(nullInner, ctx);
    if (ctx.moduleSchemaNames && isModuleStringDef(inner)) {
      return quote(`${unquote(inner)} | null`);
    }
    return `${asTypeExpr(inner)}.or(type("null"))`;
  }

  switch (node.kind) {
    case "string": {
      const c = applyStringConstraints(node.constraints, ctx.validation);
      // Character classes / optional-slash patterns break ArkType's `/regex/` string-def parser.
      if (c.pattern) {
        // Pure JS predicate (no TS type-predicate syntax) so emitted code also evals under smoke tests.
        return `type("string").narrow((s) => typeof s === "string" && new RegExp(${JSON.stringify(c.pattern)}).test(s))`;
      }
      const base = `type(${emitStringDef(node, ctx)})`;
      if (
        ctx.transformDates &&
        (node.constraints.format === "date-time" || node.constraints.format === "date")
      ) {
        return `${base}.pipe((s) => new Date(s as string))`;
      }
      return base;
    }
    case "binary":
      return emitBinaryBlobCheck("arktype");
    case "stream":
      return emitStreamCheck("arktype");
    case "number":
      if (ctx.transformBigInt && node.constraints.format === "int64") {
        return `type("string | number | bigint").pipe((x) => BigInt(x as string | number | bigint))`;
      }
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
      return `${asTypeExpr(items)}.array()`;
    }
    case "tuple":
      return `type([${node.items.map((i) => emitNode(i, ctx)).join(", ")}])`;
    case "union": {
      if (node.discriminator?.propertyName) {
        const prop = node.discriminator.propertyName;
        const mapping = node.discriminator.mapping;
        if (mapping && Object.keys(mapping).length > 0) {
          const members = Object.entries(mapping).flatMap(([value, target]) => {
            const member = findMappedUnionMember(node.members, target);
            if (!member) return [];
            const base = asTypeExpr(emitNode(member, ctx));
            // Override discriminator prop with the wire mapping value.
            return [`${base}.and(type({ ${objectKey(prop)}: ${quote(value)} }))`];
          });
          if (members.length > 0) {
            return members.map(asTypeExpr).reduce((a, b) => `${a}.or(${b})`);
          }
        }
      }
      const members = node.members.map((m) => emitNode(m, ctx));
      if (ctx.moduleSchemaNames) {
        // Inside type.module, `type()` / `.or()` leave scope and break `"SchemaN"` refs.
        // ArkType accepts `[A, "|", B, "|", C]` as a union definition.
        if (members.length === 1) return members[0]!;
        return `[${members.flatMap((m, i) => (i === 0 ? [m] : [`"|"`, m])).join(", ")}]`;
      }
      return members.map(asTypeExpr).reduce((a, b) => `${a}.or(${b})`);
    }
    case "intersection":
      return node.members.map((m) => asTypeExpr(emitNode(m, ctx))).reduce((a, b) => `${a}.and(${b})`);
    case "not": {
      const inner = asTypeExpr(emitNode(node.schema, ctx));
      return `type("unknown").narrow((data, ctx) => (${inner}.allows(data) ? ctx.mustBe("not") : true))`;
    }
    case "ref": {
      if (node.name === "Partial" && node.generics?.[0]) {
        return `${emitNode(node.generics[0], ctx)}.partial()`;
      }
      if (node.name === "Record" && node.generics?.length === 2) {
        return emitRecord(emitNode(node.generics[1]!, ctx), ctx);
      }
      if (ctx.moduleSchemaNames?.has(node.name)) {
        return quote(node.name);
      }
      return node.name;
    }
    case "record":
      return emitRecord(emitNode(node.value, ctx), ctx);
    case "object": {
      const forceOptional = Boolean(node.partial && ctx.moduleSchemaNames);
      const props = objectProps(node, emitNode, ctx);
      const body = props
        .map(({ key, optional, expr, meta }) => {
          const hasDefault = meta.default !== undefined;
          const keyLit = (optional || forceOptional) && !hasDefault ? quote(`${key}?`) : objectKey(key);
          // ArkType defaults only valid on object/tuple properties as string defs.
          if (hasDefault) {
            const plainTypeArg = expr.match(/^type\(("(?:\\.|[^"\\])*")\)$/);
            if (plainTypeArg?.[1]) {
              const withDef = arktypeDefaultDef(plainTypeArg[1], meta);
              if (withDef) return `${keyLit}: ${withDef}`;
            }
            if (isModuleStringDef(expr)) {
              const withDef = arktypeDefaultDef(expr, meta);
              if (withDef) return `${keyLit}: ${withDef}`;
            }
          }
          // Fallback: keep expr (defaults only attach to string defs in ArkType)
          return `${keyLit}: ${expr}`;
        })
        .join(", ");
      // Inside type.module, always use raw object literals so sibling string refs resolve
      // at any nesting depth (wrapping with type({...}) leaves the module scope).
      if (ctx.moduleSchemaNames) {
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
