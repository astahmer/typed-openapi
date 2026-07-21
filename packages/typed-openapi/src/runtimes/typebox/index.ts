import type { SchemaNode } from "../../schema-ir/types.ts";
import {
  applyArrayConstraints,
  applyNumberConstraints,
  applyObjectConstraints,
  applyStringConstraints,
  emitBinaryBlobCheck,
  emitStreamCheck,
  isNullOr,
  literalValue,
  objectKey,
  objectProps,
  quote,
} from "../shared.ts";
import type { EmitCtx, RuntimeAdapter } from "../types.ts";

const renderOptions = (options: Record<string, string | number | boolean | undefined>): string => {
  const entries = Object.entries(options).filter(([, value]) => value !== undefined);
  if (entries.length === 0) return "";
  return `{ ${entries.map(([key, value]) => `${key}: ${value}`).join(", ")} }`;
};

const emitString = (node: Extract<SchemaNode, { kind: "string" }>, ctx: EmitCtx): string => {
  const c = applyStringConstraints(node.constraints, ctx.validation);
  const opts = renderOptions({
    format: c.format ? quote(c.format) : undefined,
    minLength: c.minLength,
    maxLength: c.maxLength,
    pattern: c.pattern ? quote(c.pattern) : undefined,
  });
  return opts ? `Type.String(${opts})` : `Type.String()`;
};

const emitNumber = (node: Extract<SchemaNode, { kind: "number" }>, ctx: EmitCtx): string => {
  const c = applyNumberConstraints(node.constraints, ctx.validation);
  const factory = node.integer ? "Type.Integer" : "Type.Number";
  const opts = renderOptions({
    minimum: c.minimum,
    maximum: c.maximum,
    exclusiveMinimum: typeof c.exclusiveMinimum === "number" ? c.exclusiveMinimum : undefined,
    exclusiveMaximum: typeof c.exclusiveMaximum === "number" ? c.exclusiveMaximum : undefined,
    multipleOf: c.multipleOf,
  });
  return opts ? `${factory}(${opts})` : `${factory}()`;
};

const emitNodeInner = (node: SchemaNode, ctx: EmitCtx): string => {
  const nullInner = isNullOr(node);
  if (nullInner) {
    return `Type.Union([${emitNode(nullInner, ctx)}, Type.Null()])`;
  }

  switch (node.kind) {
    case "string":
      return emitString(node, ctx);
    case "binary":
      return emitBinaryBlobCheck("typebox");
    case "stream":
      return emitStreamCheck("typebox");
    case "number":
      return emitNumber(node, ctx);
    case "boolean":
      return "Type.Boolean()";
    case "null":
      return "Type.Null()";
    case "unknown":
      return "Type.Unknown()";
    case "any":
      return "Type.Any()";
    case "never":
      return "Type.Never()";
    case "literal":
      return `Type.Literal(${literalValue(node.value)})`;
    case "enum":
      return `Type.Union([${node.values.map((value) => `Type.Literal(${literalValue(value)})`).join(", ")}])`;
    case "array": {
      const c = applyArrayConstraints(node.constraints, ctx.validation);
      const opts = renderOptions({
        minItems: c.minItems,
        maxItems: c.maxItems,
        uniqueItems: c.uniqueItems,
      });
      return opts ? `Type.Array(${emitNode(node.items, ctx)}, ${opts})` : `Type.Array(${emitNode(node.items, ctx)})`;
    }
    case "tuple":
      if (node.rest) {
        const members = [...node.items, node.rest].map((item) => emitNode(item, ctx)).join(", ");
        return `Type.Array(Type.Union([${members}]))`;
      }
      return `Type.Tuple([${node.items.map((item) => emitNode(item, ctx)).join(", ")}])`;
    case "union":
      return `Type.Union([${node.members.map((member) => emitNode(member, ctx)).join(", ")}])`;
    case "intersection":
      return `Type.Intersect([${node.members.map((member) => emitNode(member, ctx)).join(", ")}])`;
    case "not":
      return "Type.Unknown()";
    case "ref": {
      if (node.name === "Partial" && node.generics?.[0]) {
        return `Type.Partial(${emitNode(node.generics[0], ctx)})`;
      }
      if (node.name === "Record" && node.generics?.length === 2) {
        return `Type.Record(${emitNode(node.generics[0]!, ctx)}, ${emitNode(node.generics[1]!, ctx)})`;
      }
      if (ctx.recursiveNames.has(node.name) && ctx.currentSchemaName === node.name) {
        return "This";
      }
      // Forward refs to other recursive schemas: defer evaluation to avoid TDZ on mutual recursion.
      if (ctx.recursiveNames.has(node.name) && ctx.currentSchemaName !== node.name) {
        return `Type.Unsafe(() => ${node.name})`;
      }
      return node.name;
    }
    case "record":
      return `Type.Record(${emitNode(node.key, ctx)}, ${emitNode(node.value, ctx)})`;
    case "object": {
      const props = objectProps(node, emitNode, ctx);
      const body = props
        .map(({ key, optional, expr }) => `${objectKey(key)}: ${optional ? `Type.Optional(${expr})` : expr}`)
        .join(", ");
      const oc = applyObjectConstraints(node.constraints, ctx.validation);
      const opts = renderOptions({
        minProperties: oc.minProperties,
        maxProperties: oc.maxProperties,
        additionalProperties:
          node.additionalProperties === true
            ? "true"
            : typeof node.additionalProperties === "object"
              ? emitNode(node.additionalProperties, ctx)
              : undefined,
      });
      let expr = opts ? `Type.Object({ ${body} }, ${opts})` : `Type.Object({ ${body} })`;
      if (node.partial) expr = `Type.Partial(${expr})`;
      return expr;
    }
    default: {
      const _exhaustive: never = node;
      return _exhaustive;
    }
  }
};

const emitNode = (node: SchemaNode, ctx: EmitCtx): string => emitNodeInner(node, ctx);

export const typeboxAdapter: RuntimeAdapter = {
  name: "typebox",
  imports: () =>
    `import { Type, type Static } from "@sinclair/typebox";\nimport { Value } from "@sinclair/typebox/value";`,
  inferType: (expr) => `Static<typeof ${expr}>`,
  emitNode,
  literalString: (value) => `Type.Literal(${quote(value)})`,
  unknown: () => "Type.Unknown()",
  never: () => "Type.Never()",
  emitNamedSchema: (name, node, ctx) => {
    const childCtx = { ...ctx, currentSchemaName: name };
    let body = emitNode(node, childCtx);
    if (ctx.recursiveNames.has(name)) {
      body = `Type.Recursive((This) => ${body})`;
    }
    return `export type ${name} = Static<typeof ${name}>;\nexport const ${name} = ${body};`;
  },
};
