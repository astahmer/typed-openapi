import type { ReferenceObject } from "openapi3-ts/oas31";
import { isPrimitiveType } from "../asserts.ts";
import { isReferenceObject } from "../is-reference-object.ts";
import type { LibSchemaObject } from "../types.ts";
import type {
  ArrayConstraints,
  NumberConstraints,
  ObjectConstraints,
  SchemaIrConvertContext,
  SchemaMeta,
  SchemaNode,
  StringConstraints,
} from "./types.ts";

const emptyMeta = (): SchemaMeta => ({});

const extractMeta = (schema: LibSchemaObject): SchemaMeta => {
  const meta: SchemaMeta = {};
  if (typeof schema.description === "string") meta.description = schema.description;
  if (typeof schema.title === "string") meta.title = schema.title;
  if (schema.deprecated === true) meta.deprecated = true;
  if ("default" in schema) meta.default = schema.default;
  if (schema.examples !== undefined) meta.examples = schema.examples as unknown[];
  else if ("example" in schema && schema.example !== undefined) meta.examples = [schema.example];
  if ((schema as LibSchemaObject).nullable === true) meta.nullable = true;
  if (schema.readOnly === true) meta.readOnly = true;
  if (schema.writeOnly === true) meta.writeOnly = true;
  return meta;
};

const stringConstraints = (schema: LibSchemaObject): StringConstraints => {
  const c: StringConstraints = {};
  if (typeof schema.minLength === "number") c.minLength = schema.minLength;
  if (typeof schema.maxLength === "number") c.maxLength = schema.maxLength;
  if (typeof schema.pattern === "string") c.pattern = schema.pattern;
  if (typeof schema.format === "string") c.format = schema.format;
  if (typeof schema.contentEncoding === "string") c.contentEncoding = schema.contentEncoding;
  if (typeof schema.contentMediaType === "string") c.contentMediaType = schema.contentMediaType;
  return c;
};

const numberConstraints = (schema: LibSchemaObject): NumberConstraints => {
  const c: NumberConstraints = {};
  if (typeof schema.minimum === "number") c.minimum = schema.minimum;
  if (typeof schema.maximum === "number") c.maximum = schema.maximum;
  if (schema.exclusiveMinimum !== undefined) c.exclusiveMinimum = schema.exclusiveMinimum as number | boolean;
  if (schema.exclusiveMaximum !== undefined) c.exclusiveMaximum = schema.exclusiveMaximum as number | boolean;
  if (typeof schema.multipleOf === "number") c.multipleOf = schema.multipleOf;
  if (typeof schema.format === "string") c.format = schema.format;
  return c;
};

const arrayConstraints = (schema: LibSchemaObject): ArrayConstraints => {
  const c: ArrayConstraints = {};
  if (typeof schema.minItems === "number") c.minItems = schema.minItems;
  if (typeof schema.maxItems === "number") c.maxItems = schema.maxItems;
  if (schema.uniqueItems === true) c.uniqueItems = true;
  return c;
};

const objectConstraints = (schema: LibSchemaObject): ObjectConstraints => {
  const c: ObjectConstraints = {};
  if (typeof schema.minProperties === "number") c.minProperties = schema.minProperties;
  if (typeof schema.maxProperties === "number") c.maxProperties = schema.maxProperties;
  return c;
};

/** Keep defaults on the outer nullable union only — avoid `.default().nullable().default()`. */
const stripDefault = (node: SchemaNode): SchemaNode => {
  if (node.meta.default === undefined) return node;
  const { default: _d, ...meta } = node.meta;
  return { ...node, meta } as SchemaNode;
};

const withNullable = (node: SchemaNode, schema: LibSchemaObject): SchemaNode => {
  if (isReferenceObject(schema)) return node;
  if ((schema as LibSchemaObject).nullable && node.kind !== "null") {
    if (node.kind === "union" && node.members.some((m) => m.kind === "null")) return node;
    return {
      kind: "union",
      members: [stripDefault(node), { kind: "null", meta: emptyMeta() }],
      meta: node.meta,
    };
  }
  return node;
};

const simplifyIntersection = (members: SchemaNode[], meta: SchemaMeta, schema: LibSchemaObject): SchemaNode => {
  const meaningfulMembers = members.filter((member) => member.kind !== "unknown");
  if (meaningfulMembers.length === 0) {
    return withNullable({ kind: "unknown", meta }, schema);
  }
  if (meaningfulMembers.length === 1) {
    return withNullable(meaningfulMembers[0]!, schema);
  }
  return withNullable({ kind: "intersection", members: meaningfulMembers, meta }, schema);
};

const isLiteralEnumValue = (value: unknown): value is string | number | boolean | null =>
  value === null || typeof value === "string" || typeof value === "number" || typeof value === "boolean";

const literalFromEnumValue = (value: unknown): SchemaNode => {
  if (value === null) return { kind: "null", meta: emptyMeta() };
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    return { kind: "literal", value, meta: emptyMeta() };
  }
  if (Array.isArray(value)) {
    return {
      kind: "tuple",
      items: value.map((item) => literalFromEnumValue(item)),
      meta: emptyMeta(),
    };
  }
  if (typeof value === "object") {
    const properties: Record<string, SchemaNode> = {};
    for (const [key, item] of Object.entries(value as Record<string, unknown>)) {
      properties[key] = literalFromEnumValue(item);
    }
    return {
      kind: "object",
      properties,
      required: Object.keys(properties),
      additionalProperties: false,
      constraints: {},
      meta: emptyMeta(),
      partial: false,
    };
  }
  return { kind: "unknown", meta: emptyMeta() };
};

/** Primitive enums stay `kind: "enum"`; object/array members become a union of literals. */
const enumToIr = (values: unknown[], meta: SchemaMeta): SchemaNode => {
  if (values.length === 1) return literalFromEnumValue(values[0]);
  if (values.every(isLiteralEnumValue)) {
    return { kind: "enum", values: values as Array<string | number | boolean | null>, meta };
  }
  return { kind: "union", members: values.map(literalFromEnumValue), meta };
};

export const openApiToIr = (input: unknown, ctx: SchemaIrConvertContext): SchemaNode => {
  return openApiToIrInternal(input, ctx, ctx.path ?? []);
};

const openApiToIrInternal = (input: unknown, ctx: SchemaIrConvertContext, path: string[]): SchemaNode => {
  if (!input) {
    return { kind: "unknown", meta: emptyMeta() };
  }

  const transformCtx = { path, ...(ctx.ref !== undefined ? { ref: ctx.ref } : {}) };
  const transformResult =
    ctx.transformSchema && input && typeof input === "object"
      ? ctx.transformSchema(input as LibSchemaObject, transformCtx)
      : undefined;
  if (transformResult && (transformResult.type !== undefined || transformResult.runtime !== undefined)) {
    // Keep the default node as a fallback for every custom transform. Runtime adapters use
    // the custom type/runtime, while mock generation still needs the encoded JSON shape.
    const fallback = openApiToIrInnerBody(input, ctx, path);
    return {
      kind: "custom",
      type: transformResult.type,
      runtime: transformResult.runtime,
      ...(fallback ? { fallback } : {}),
      meta: isReferenceObject(input) ? emptyMeta() : extractMeta(input as LibSchemaObject),
    };
  }

  return openApiToIrInnerBody(input, ctx, path);
};

const openApiToIrInnerBody = (input: unknown, ctx: SchemaIrConvertContext, path: string[]): SchemaNode => {
  if (isReferenceObject(input)) {
    return { kind: "ref", name: ctx.getRefName(input.$ref), meta: emptyMeta() };
  }

  const schema = input as LibSchemaObject;
  const meta = extractMeta(schema);

  // JSON Schema `const` (OAS 3.1) — single allowed value → literal (before type/enum branches).
  if (Object.prototype.hasOwnProperty.call(schema, "const")) {
    return withNullable(literalFromEnumValue((schema as { const: unknown }).const), schema);
  }

  if (Array.isArray(schema.type)) {
    if (schema.type.length === 1) {
      return openApiToIrInternal({ ...schema, type: schema.type[0]! }, ctx, path);
    }
    return withNullable(
      {
        kind: "union",
        members: schema.type.map((prop: string) => {
          const { nullable: _n, ...rest } = schema;
          return openApiToIrInternal({ ...rest, type: prop }, ctx, path);
        }),
        meta,
      },
      schema,
    );
  }

  if (schema.type === "null") {
    return { kind: "null", meta };
  }

  if (schema.not) {
    return withNullable({ kind: "not", schema: openApiToIrInternal(schema.not, ctx, [...path, "not"]), meta }, schema);
  }

  const discriminator =
    schema.discriminator && typeof schema.discriminator.propertyName === "string"
      ? {
          propertyName: schema.discriminator.propertyName,
          ...(schema.discriminator.mapping ? { mapping: schema.discriminator.mapping as Record<string, string> } : {}),
        }
      : undefined;

  if (schema.oneOf) {
    if (schema.oneOf.length === 1) {
      return withNullable(openApiToIrInternal(schema.oneOf[0]!, ctx, [...path, "oneOf", "0"]), schema);
    }
    return withNullable(
      {
        kind: "union",
        members: schema.oneOf.map((prop: unknown, i) => openApiToIrInternal(prop, ctx, [...path, "oneOf", String(i)])),
        meta,
        ...(discriminator ? { discriminator } : {}),
      },
      schema,
    );
  }

  if (schema.anyOf) {
    if (schema.anyOf.length === 1) {
      return withNullable(openApiToIrInternal(schema.anyOf[0]!, ctx, [...path, "anyOf", "0"]), schema);
    }
    return withNullable(
      {
        kind: "union",
        members: schema.anyOf.map((prop: unknown, i) => openApiToIrInternal(prop, ctx, [...path, "anyOf", String(i)])),
        meta,
        ...(discriminator ? { discriminator } : {}),
      },
      schema,
    );
  }

  if (schema.allOf) {
    const members = schema.allOf.map((prop: unknown, i) =>
      openApiToIrInternal(prop, ctx, [...path, "allOf", String(i)]),
    );
    const { allOf: _a, externalDocs: _e, example: _ex, examples: _xs, description: _d, title: _t, ...rest } = schema;
    if (Object.keys(rest).filter((k) => k !== "nullable").length > 0) {
      members.push(openApiToIrInternal(rest as LibSchemaObject, ctx, path));
    }
    return simplifyIntersection(members, meta, schema);
  }

  // OAS 3.1 prefixItems → tuple
  if (schema.type === "array" && Array.isArray((schema as { prefixItems?: unknown }).prefixItems)) {
    const prefixItems = (schema as { prefixItems: Array<LibSchemaObject | ReferenceObject> }).prefixItems;
    const items = prefixItems.map((item: unknown, i) =>
      openApiToIrInternal(item, ctx, [...path, "prefixItems", String(i)]),
    );
    const restNode = schema.items ? openApiToIrInternal(schema.items, ctx, [...path, "items"]) : undefined;
    const tupleNode: SchemaNode =
      restNode === undefined ? { kind: "tuple", items, meta } : { kind: "tuple", items, rest: restNode, meta };
    return withNullable(tupleNode, schema);
  }

  const schemaType = schema.type ? (schema.type.toLowerCase() as NonNullable<typeof schema.type>) : undefined;

  if (schemaType && isPrimitiveType(schemaType)) {
    if (schema.enum) {
      return withNullable(enumToIr(schema.enum, meta), schema);
    }

    if (schemaType === "string") {
      const format = schema.format;
      if (format === "binary" || format === "byte") {
        return withNullable({ kind: "binary", meta }, schema);
      }
      return withNullable({ kind: "string", constraints: stringConstraints(schema), meta }, schema);
    }
    if (schemaType === "boolean") {
      return withNullable({ kind: "boolean", meta }, schema);
    }
    if (schemaType === "number" || schemaType === "integer") {
      return withNullable(
        {
          kind: "number",
          integer: schemaType === "integer" || schema.format === "int32" || schema.format === "int64",
          constraints: numberConstraints(schema),
          meta,
        },
        schema,
      );
    }
    if (schemaType === "null") {
      return { kind: "null", meta };
    }
  }

  if (!schemaType && schema.enum) {
    return withNullable(enumToIr(schema.enum, meta), schema);
  }

  if (schemaType === "array") {
    const items = schema.items
      ? openApiToIrInternal(schema.items, ctx, [...path, "items"])
      : ({ kind: "any", meta: emptyMeta() } as SchemaNode);
    return withNullable({ kind: "array", items, constraints: arrayConstraints(schema), meta }, schema);
  }

  if (schemaType === "object" || schema.properties || schema.additionalProperties || schema.patternProperties) {
    if (!schema.properties && !schema.patternProperties) {
      if (typeof schema.additionalProperties === "object") {
        return withNullable(
          {
            kind: "record",
            key: { kind: "string", constraints: {}, meta: emptyMeta() },
            value: openApiToIrInternal(schema.additionalProperties, ctx, [...path, "additionalProperties"]),
            meta,
          },
          schema,
        );
      }
      return withNullable(
        {
          kind: "record",
          key: { kind: "string", constraints: {}, meta: emptyMeta() },
          value: { kind: "unknown", meta: emptyMeta() },
          meta,
        },
        schema,
      );
    }

    let additionalProperties: boolean | SchemaNode = false;
    if (
      schema.additionalProperties === true ||
      (typeof schema.additionalProperties === "object" && Object.keys(schema.additionalProperties).length === 0)
    ) {
      additionalProperties = true;
    } else if (typeof schema.additionalProperties === "object") {
      additionalProperties = openApiToIrInternal(schema.additionalProperties, ctx, [...path, "additionalProperties"]);
    }

    const hasRequiredArray = Boolean(schema.required && schema.required.length > 0);
    const isPartial = Boolean(schema.properties) && !schema.required?.length;

    const properties: Record<string, SchemaNode> = {};
    for (const [prop, propSchema] of Object.entries(schema.properties ?? {})) {
      properties[prop] = openApiToIrInternal(propSchema, ctx, [...path, "properties", prop]);
    }

    const required = isPartial ? [] : hasRequiredArray ? [...(schema.required ?? [])] : Object.keys(properties);

    const objectNode: SchemaNode = {
      kind: "object",
      properties,
      required,
      additionalProperties,
      ...(Object.keys(schema.patternProperties ?? {}).length > 0
        ? {
            patternProperties: Object.fromEntries(
              Object.entries(schema.patternProperties ?? {}).map(([pattern, value]) => [
                pattern,
                openApiToIrInternal(value, ctx, [...path, "patternProperties", pattern]),
              ]),
            ),
          }
        : {}),
      constraints: objectConstraints(schema),
      meta,
      partial: isPartial,
    };
    return withNullable(objectNode, schema);
  }

  if (!schemaType) {
    const keys = Object.keys(schema).filter((key) => key !== "nullable");
    if (keys.length === 0 && schema.nullable) {
      return { kind: "null", meta };
    }
    return withNullable({ kind: "unknown", meta }, schema);
  }

  // Exotic / vendor types (e.g. FHIR `fhirprimitiveextension`) → unknown instead of failing codegen.
  return withNullable({ kind: "unknown", meta }, schema);
};
