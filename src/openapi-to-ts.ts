import type { ReferenceObject, SchemaObject } from "openapi3-ts/oas31";

import { isReferenceObject } from "./is-reference-object";
import type { DocumentResolver } from "./schema-resolver";
import { wrapWithQuotesIfNeeded } from "./utils";

type TsConversionArgs = {
  schema: SchemaObject | ReferenceObject;
  ctx?: TsConversionContext | undefined;
  meta?: { name?: string; $ref?: string; isInline?: boolean } | undefined;
};

export type TsConversionContext = {
  typeByRef: Record<string, string>;
  resolver: DocumentResolver;
  rootRef?: string;
  visitedsRefs?: Record<string, boolean>;
};

export const getTypescriptFromOpenApi = ({
  schema,
  meta: inheritedMeta,
  ctx,
}: // eslint-disable-next-line sonarjs/cognitive-complexity
TsConversionArgs): string => {
  const meta = {} as TsConversionArgs["meta"];
  const isInline = !inheritedMeta?.name;

  if (ctx?.visitedsRefs && inheritedMeta?.$ref) {
    ctx.rootRef = inheritedMeta.$ref;
    ctx.visitedsRefs[inheritedMeta.$ref] = true;
  }

  if (!schema) {
    throw new Error("Schema is required");
  }

  let canBeWrapped = !isInline;
  const getTs = (): string => {
    if (isReferenceObject(schema)) {
      if (!ctx?.visitedsRefs || !ctx?.resolver) throw new Error("Context is required for OpenAPI $ref");

      let result = ctx.typeByRef[schema.$ref];
      const schemaName = ctx.resolver.resolveRef(schema.$ref)?.normalized;
      if (ctx.visitedsRefs[schema.$ref]) {
        return t.reference(schemaName);
      }

      if (!result) {
        const actualSchema = ctx.resolver.getSchemaByRef(schema.$ref);
        if (!actualSchema) {
          throw new Error(`Schema ${schema.$ref} not found`);
        }

        ctx.visitedsRefs[schema.$ref] = true;
        result = getTypescriptFromOpenApi({ schema: actualSchema, meta, ctx });
      }

      return t.reference(schemaName);
    }

    if (Array.isArray(schema.type)) {
      if (schema.type.length === 1) {
        return getTypescriptFromOpenApi({ schema: { ...schema, type: schema.type[0]! }, ctx, meta });
      }

      return t.union(
        schema.type.map((prop) => getTypescriptFromOpenApi({ schema: { ...schema, type: prop }, ctx, meta })),
      );
    }

    if (schema.type === "null") {
      return t.reference("null");
    }

    if (schema.oneOf) {
      if (schema.oneOf.length === 1) {
        return getTypescriptFromOpenApi({ schema: schema.oneOf[0]!, ctx, meta });
      }

      return t.union(schema.oneOf.map((prop) => getTypescriptFromOpenApi({ schema: prop, ctx, meta })));
    }

    // anyOf = oneOf but with 1 or more = `T extends oneOf ? T | T[] : never`
    if (schema.anyOf) {
      if (schema.anyOf.length === 1) {
        return getTypescriptFromOpenApi({ schema: schema.anyOf[0]!, ctx, meta });
      }

      const oneOf = t.union(schema.anyOf.map((prop) => getTypescriptFromOpenApi({ schema: prop, ctx, meta })));
      return t.union([oneOf, t.array(oneOf)]);
    }

    if (schema.allOf) {
      if (schema.allOf.length === 1) {
        return getTypescriptFromOpenApi({ schema: schema.allOf[0]!, ctx, meta });
      }

      const types = schema.allOf.map((prop) => getTypescriptFromOpenApi({ schema: prop, ctx, meta }));
      return t.intersection(types);
    }

    const schemaType = schema.type ? (schema.type.toLowerCase() as NonNullable<typeof schema.type>) : undefined;
    if (schemaType && isPrimitiveType(schemaType)) {
      if (schema.enum) {
        if (schemaType !== "string" && schema.enum.some((e) => typeof e === "string")) {
          return t.never();
        }

        return t.union(schema.enum);
      }

      if (schemaType === "string") return t.string();
      if (schemaType === "boolean") return t.boolean();
      if (schemaType === "number" || schemaType === "integer") return t.number();
      if (schemaType === "null") return t.reference("null");
    }

    if (schemaType === "array") {
      if (schema.items) {
        let arrayOfType = getTypescriptFromOpenApi({ schema: schema.items, ctx, meta });
        if (typeof arrayOfType === "string") {
          if (!ctx) throw new Error("Context is required for circular $ref (recursive schemas)");
          arrayOfType = t.reference(arrayOfType);
        }

        return t.array(arrayOfType);
      }

      return t.array(t.any());
    }

    if (schemaType === "object" || schema.properties || schema.additionalProperties) {
      if (!schema.properties) {
        return "";
      }

      canBeWrapped = false;

      const isPartial = !schema.required?.length;
      let additionalProperties;
      if (schema.additionalProperties) {
        let additionalPropertiesType;
        if (
          (typeof schema.additionalProperties === "boolean" && schema.additionalProperties) ||
          (typeof schema.additionalProperties === "object" && Object.keys(schema.additionalProperties).length === 0)
        ) {
          additionalPropertiesType = t.any();
        } else if (typeof schema.additionalProperties === "object") {
          additionalPropertiesType = getTypescriptFromOpenApi({
            schema: schema.additionalProperties,
            ctx,
            meta,
          });
        }

        additionalProperties = t.object({ [t.string()]: additionalPropertiesType! });
      }

      const props = Object.fromEntries(
        Object.entries(schema.properties).map(([prop, propSchema]) => {
          let propType = getTypescriptFromOpenApi({ schema: propSchema, ctx, meta });
          if (typeof propType === "string") {
            if (!ctx) throw new Error("Context is required for circular $ref (recursive schemas)");
            // TODO Partial ?
            propType = t.reference(propType);
          }

          const isRequired = Boolean(isPartial ? true : schema.required?.includes(prop));
          return [`${wrapWithQuotesIfNeeded(prop)}`, isRequired ? propType : t.optional(propType)];
        }),
      );

      const objectType = additionalProperties
        ? t.intersection([t.object(props), additionalProperties])
        : t.object(props);

      if (isInline) {
        return isPartial ? t.reference("Partial", [objectType]) : objectType;
      }

      if (!inheritedMeta?.name) {
        throw new Error("Name is required to convert an object schema to a type reference");
      }

      const base = t.type(inheritedMeta.name, objectType);
      if (!isPartial) return base;

      return t.type(inheritedMeta.name, t.reference("Partial", [objectType]));
    }

    if (!schemaType) return t.unknown();

    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    throw new Error(`Unsupported schema type: ${schemaType}`);
  };

  const tsResult = getTs();
  return canBeWrapped ? wrapTypeIfInline({ isInline, name: inheritedMeta?.name, typeDef: tsResult }) : tsResult;
};

type SingleType = Exclude<SchemaObject["type"], any[] | undefined>;
const isPrimitiveType = (type: SingleType): type is PrimitiveType => primitiveTypeList.includes(type as any);

const primitiveTypeList = ["string", "number", "integer", "boolean", "null"] as const;
type PrimitiveType = (typeof primitiveTypeList)[number];

const wrapTypeIfInline = ({
  isInline,
  name,
  typeDef,
}: {
  isInline: boolean;
  name: string | undefined;
  typeDef: string;
}) => {
  if (!isInline) {
    if (!name) {
      throw new Error("Name is required to convert a schema to a type reference");
    }

    return t.type(name, typeDef);
  }

  return typeDef;
};

const t = {
  type: (name: string, def: string) => `type ${name} = ${def}`,
  union: (types: string[]) => types.join(" | "),
  intersection: (types: string[]) => types.join(" & "),
  array: (type: string) => `Array<${type}>`,
  optional: (type: string) => `${type} | undefined`,
  reference: (name: string, typeArgs?: string[]) => `${name}${typeArgs ? `<${typeArgs.join(", ")}>` : ""}`,
  string: () => "string" as const,
  number: () => "number" as const,
  boolean: () => "boolean" as const,
  unknown: () => "unknown" as const,
  any: () => "any" as const,
  never: () => "never" as const,
  object: (props: Record<string, string>) => {
    const propsString = Object.entries(props)
      .map(([prop, type]) => `${prop}: ${type}`)
      .join(", ");

    return `{ ${propsString} }`;
  },
  // indexSignature: (keyType: PrimitiveType, valueType: string) => `[key: ${keyType}]: ${valueType}`,
};
