import type { SchemaNode } from "../../schema-ir/types.ts";
import {
  applyNumberConstraints,
  applyStringConstraints,
  isNullOr,
  literalValue,
  objectKey,
  objectProps,
  quote,
} from "../shared.ts";
import type { EmitCtx, RuntimeAdapter } from "../types.ts";

const emitStringDef = (node: Extract<SchemaNode, { kind: "string" }>, ctx: EmitCtx): string => {
  const c = applyStringConstraints(node.constraints, ctx.validation);
  if (c.format === "email") return quote("string.email");
  if (c.format === "uuid") return quote("string.uuid");
  if (c.format === "uri" || c.format === "url") return quote("string.url");
  if (c.format === "date-time") return quote("string.date");
  // pattern / length via narrowed string forms when possible
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
  const parts: string[] = [base];
  if (c.minimum !== undefined) parts.push(`>= ${c.minimum}`);
  if (c.maximum !== undefined) parts.push(`<= ${c.maximum}`);
  if (c.exclusiveMinimum !== undefined) parts.push(`> ${c.exclusiveMinimum}`);
  if (c.exclusiveMaximum !== undefined) parts.push(`< ${c.exclusiveMaximum}`);
  if (parts.length === 1) return quote(base);
  return quote(parts.join(" "));
};

const emitNode = (node: SchemaNode, ctx: EmitCtx): string => {
  const nullInner = isNullOr(node);
  if (nullInner) return `type(${emitNode(nullInner, ctx)}).or(type("null"))`;

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
      return `type(${literalValue(node.value)})`;
    case "enum":
      return node.values.map((v) => `type(${literalValue(v)})`).reduce((a, b) => `${a}.or(${b})`);
    case "array":
      return `type(${emitNode(node.items, ctx)}).array()`;
    case "tuple":
      return `type([${node.items.map((i) => emitNode(i, ctx)).join(", ")}])`;
    case "union":
      return node.members.map((m) => emitNode(m, ctx)).reduce((a, b) => `${a}.or(${b})`);
    case "intersection":
      return node.members.map((m) => emitNode(m, ctx)).reduce((a, b) => `${a}.and(${b})`);
    case "ref": {
      if (node.name === "Partial" && node.generics?.[0]) {
        return `type(${emitNode(node.generics[0], ctx)}).partial()`;
      }
      if (node.name === "Record" && node.generics?.length === 2) {
        return `type("Record", ${emitNode(node.generics[0]!, ctx)}, ${emitNode(node.generics[1]!, ctx)})`;
      }
      return node.name;
    }
    case "record":
      return `type(${quote("Record")},"string", ${emitNode(node.value, ctx)})`;
    case "object": {
      const props = objectProps(node, emitNode, ctx);
      const body = props
        .map(({ key, optional, expr }) => {
          // arktype optional keys use trailing ?
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
  wrapLazy: (_name, body) => body, // arktype resolves by const binding order / thunks less often needed
  literalString: (value) => `type(${quote(value)})`,
  unknown: () => `type("unknown")`,
  never: () => `type("never")`,
  emitNamedSchema: (name, node, ctx) => {
    const childCtx = { ...ctx, currentSchemaName: name };
    const body = emitNode(node, childCtx);
    return `export const ${name} = ${body};\nexport type ${name} = typeof ${name}.infer;`;
  },
};
