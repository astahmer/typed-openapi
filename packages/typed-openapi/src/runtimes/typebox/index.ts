import type { SchemaNode } from "../../schema-ir/types.ts";
import {
  applyArrayConstraints,
  applyNumberConstraints,
  applyObjectConstraints,
  applyStringConstraints,
  containsDeferredNamedRef,
  emitBinaryBlobCheck,
  emitExplicitSchemaTypeDecl,
  emitStreamCheck,
  isNullOr,
  literalValue,
  objectKey,
  objectProps,
  quote,
} from "../shared.ts";
import type { EmitCtx, NamedSchema, RuntimeAdapter } from "../types.ts";

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
  const base = opts ? `Type.String(${opts})` : `Type.String()`;
  if (ctx.transformDates && (node.constraints.format === "date-time" || node.constraints.format === "date")) {
    return `Type.Transform(${base}).Decode((s) => { const d = new Date(s); if (Number.isNaN(d.getTime())) throw new Error("Invalid Date"); return d; }).Encode((d) => d.toISOString())`;
  }
  return base;
};

const emitNumber = (node: Extract<SchemaNode, { kind: "number" }>, ctx: EmitCtx): string => {
  if (ctx.transformBigInt && node.constraints.format === "int64") {
    return `Type.Transform(Type.Union([Type.String(), Type.Number(), Type.BigInt()])).Decode((x) => BigInt(x as string | number | bigint)).Encode((n) => n.toString())`;
  }
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
        return `__typedOpenapiTupleWithRest([${node.items.map((item) => emitNode(item, ctx)).join(", ")}], ${emitNode(node.rest, ctx)})`;
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
      if (ctx.moduleSchemaNames?.has(node.name)) return `Type.Ref(${quote(node.name)})`;
      if (ctx.recursiveNames.has(node.name) && ctx.currentSchemaName === node.name) {
        return "This";
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
    case "custom":
      if (node.runtime) return node.runtime;
      // `Type.Unsafe<T>` yields Static = T (accepts anything at runtime, like a type-only transform).
      return `Type.Unsafe<${node.type ?? "unknown"}>({ type: "unknown" })`;
    default: {
      const _exhaustive: never = node;
      return _exhaustive;
    }
  }
};

const emitNode = (node: SchemaNode, ctx: EmitCtx): string => emitNodeInner(node, ctx);

const containsCrossRecursiveRef = (node: SchemaNode, currentName: string, recursiveNames: Set<string>): boolean => {
  switch (node.kind) {
    case "ref":
      return (
        (recursiveNames.has(node.name) && node.name !== currentName) ||
        (node.generics?.some((generic) => containsCrossRecursiveRef(generic, currentName, recursiveNames)) ?? false)
      );
    case "array":
      return containsCrossRecursiveRef(node.items, currentName, recursiveNames);
    case "tuple":
      return (
        node.items.some((item) => containsCrossRecursiveRef(item, currentName, recursiveNames)) ||
        (node.rest ? containsCrossRecursiveRef(node.rest, currentName, recursiveNames) : false)
      );
    case "object":
      return (
        Object.values(node.properties).some((property) =>
          containsCrossRecursiveRef(property, currentName, recursiveNames),
        ) ||
        (typeof node.additionalProperties === "object" &&
          containsCrossRecursiveRef(node.additionalProperties, currentName, recursiveNames))
      );
    case "union":
    case "intersection":
      return node.members.some((member) => containsCrossRecursiveRef(member, currentName, recursiveNames));
    case "not":
      return containsCrossRecursiveRef(node.schema, currentName, recursiveNames);
    case "record":
      return (
        containsCrossRecursiveRef(node.key, currentName, recursiveNames) ||
        containsCrossRecursiveRef(node.value, currentName, recursiveNames)
      );
    default:
      return false;
  }
};

export const typeboxAdapter: RuntimeAdapter = {
  name: "typebox",
  imports: ({ tupleWithRest = false } = {}) =>
    `import { Type, type Static } from "@sinclair/typebox";${tupleWithRest ? `\nimport { TypeSystem } from "@sinclair/typebox/system";` : ""}\nimport { Value } from "@sinclair/typebox/value";`,
  inferType: (expr) => `Static<typeof ${expr}>`,
  schemaType: (typeReference) => `import("@sinclair/typebox").TSchema & __TypedOpenapiSchema<${typeReference}>`,
  annotateSchema: (schemaExpr, typeReference) =>
    `${schemaExpr} as unknown as import("@sinclair/typebox").TSchema & __TypedOpenapiSchema<${typeReference}>`,
  emitNode,
  literalString: (value) => `Type.Literal(${quote(value)})`,
  unknown: () => "Type.Unknown()",
  never: () => "Type.Never()",
  emitNamedSchema: (name, node, ctx, typeReference) => {
    const childCtx = { ...ctx, currentSchemaName: name };
    let body = emitNode(node, childCtx);
    if (ctx.recursiveNames.has(name)) {
      body = `Type.Recursive((This) => ${body})`;
    }
    if (typeReference) {
      return `export type ${name} = ${typeReference};\nexport const ${name} = ${body};`;
    }
    return `export type ${name} = Static<typeof ${name}>;\nexport const ${name} = ${body};`;
  },
  emitNamedSchemas: (schemas: NamedSchema[], ctx, typeReferenceForName) => {
    const needsModule =
      schemas.some(({ name, node }) => containsCrossRecursiveRef(node, name, ctx.recursiveNames)) ||
      schemas.some(({ name, node }) => containsDeferredNamedRef(node, { ...ctx, currentSchemaName: name }));
    if (!needsModule || schemas.length === 0) {
      return schemas
        .map(({ name, node }) => typeboxAdapter.emitNamedSchema(name, node, ctx, typeReferenceForName?.(name)))
        .join("\n\n");
    }

    const moduleSchemaNames = new Set(schemas.map(({ name }) => name));
    const moduleCtx = { ...ctx, moduleSchemaNames };
    const entries = schemas
      .map(({ name, node }) => `  ${name}: ${emitNode(node, { ...moduleCtx, currentSchemaName: name })},`)
      .join("\n");
    let out = `const __schemas = Type.Module({\n${entries}\n});\n\n`;
    for (const { name } of schemas) {
      const typeReference = typeReferenceForName?.(name);
      out += typeReference
        ? `export type ${name} = ${typeReference};\nexport const ${name} = __schemas.Import(${quote(name)});\n\n`
        : `${emitExplicitSchemaTypeDecl(name, schemas.find((schema) => schema.name === name)!.node, ctx)}\nexport const ${name} = __schemas.Import(${quote(name)});\n\n`;
    }
    return out.trimEnd();
  },
};
