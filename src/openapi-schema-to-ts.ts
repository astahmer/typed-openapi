import { isPrimitiveType } from "./asserts";
import { Box } from "./box";
import { createBoxFactory } from "./box-factory";
import { isReferenceObject } from "./is-reference-object";
import { AnyBoxDef, OpenapiSchemaConvertArgs } from "./types";
import { wrapWithQuotesIfNeeded } from "./string-utils";

export const openApiSchemaToTs = ({ schema, meta: inheritedMeta, ctx }: OpenapiSchemaConvertArgs): Box<AnyBoxDef> => {
  const meta = {} as OpenapiSchemaConvertArgs["meta"];
  const isInline = !inheritedMeta?.name;

  if (!schema) {
    throw new Error("Schema is required");
  }

  let canBeWrapped = !isInline;
  const t = createBoxFactory(schema, ctx);
  const getTs = () => {
    if (isReferenceObject(schema)) {
      const refInfo = ctx.refs.getName(schema.$ref);

      return t.reference(refInfo.normalized);
    }

    if (Array.isArray(schema.type)) {
      if (schema.type.length === 1) {
        return openApiSchemaToTs({ schema: { ...schema, type: schema.type[0]! }, ctx, meta });
      }

      return t.union(schema.type.map((prop) => openApiSchemaToTs({ schema: { ...schema, type: prop }, ctx, meta })));
    }

    if (schema.type === "null") {
      return t.reference("null");
    }

    if (schema.oneOf) {
      if (schema.oneOf.length === 1) {
        return openApiSchemaToTs({ schema: schema.oneOf[0]!, ctx, meta });
      }

      return t.union(schema.oneOf.map((prop) => openApiSchemaToTs({ schema: prop, ctx, meta })));
    }

    // anyOf = oneOf but with 1 or more = `T extends oneOf ? T | T[] : never`
    if (schema.anyOf) {
      if (schema.anyOf.length === 1) {
        return openApiSchemaToTs({ schema: schema.anyOf[0]!, ctx, meta });
      }

      const oneOf = t.union(schema.anyOf.map((prop) => openApiSchemaToTs({ schema: prop, ctx, meta })));
      return t.union([oneOf, t.array(oneOf)]);
    }

    if (schema.allOf) {
      if (schema.allOf.length === 1) {
        return openApiSchemaToTs({ schema: schema.allOf[0]!, ctx, meta });
      }

      const types = schema.allOf.map((prop) => openApiSchemaToTs({ schema: prop, ctx, meta }));
      return t.intersection(types);
    }

    const schemaType = schema.type ? (schema.type.toLowerCase() as NonNullable<typeof schema.type>) : undefined;
    if (schemaType && isPrimitiveType(schemaType)) {
      if (schema.enum) {
        if (schema.enum.length === 1) {
          const value = schema.enum[0];
          return t.literal(value === null ? "null" : `"${value}"`);
        }

        if (schemaType === "string") {
          return t.union(schema.enum.map((value) => t.literal(`"${value}"`)));
        }

        if (schema.enum.some((e) => typeof e === "string")) {
          return t.never();
        }

        return t.union(schema.enum.map((value) => t.literal(value === null ? "null" : value)));
      }

      if (schemaType === "string") return t.string();
      if (schemaType === "boolean") return t.boolean();
      if (schemaType === "number" || schemaType === "integer") return t.number();
      if (schemaType === "null") return t.reference("null");
    }

    if (schemaType === "array") {
      if (schema.items) {
        let arrayOfType = openApiSchemaToTs({ schema: schema.items, ctx, meta });
        if (typeof arrayOfType === "string") {
          arrayOfType = t.reference(arrayOfType);
        }

        return t.array(arrayOfType);
      }

      return t.array(t.any());
    }

    if (schemaType === "object" || schema.properties || schema.additionalProperties) {
      if (!schema.properties) {
        return t.unknown();
      }

      canBeWrapped = false;

      let additionalProperties;
      if (schema.additionalProperties) {
        let additionalPropertiesType;
        if (
          (typeof schema.additionalProperties === "boolean" && schema.additionalProperties) ||
          (typeof schema.additionalProperties === "object" && Object.keys(schema.additionalProperties).length === 0)
        ) {
          additionalPropertiesType = t.any();
        } else if (typeof schema.additionalProperties === "object") {
          additionalPropertiesType = openApiSchemaToTs({
            schema: schema.additionalProperties,
            ctx,
            meta,
          });
        }

        additionalProperties = t.object({ [t.string().value]: additionalPropertiesType! });
      }

      const hasRequiredArray = schema.required && schema.required.length > 0;
      const isPartial = meta?.isPartial || !schema.required?.length;

      const props = Object.fromEntries(
        Object.entries(schema.properties).map(([prop, propSchema]) => {
          let propType = openApiSchemaToTs({ schema: propSchema, ctx, meta });
          if (typeof propType === "string") {
            // TODO Partial ?
            propType = t.reference(propType);
          }

          const isRequired = Boolean(isPartial ? true : hasRequiredArray ? schema.required?.includes(prop) : false);
          const isOptional = !isPartial && !isRequired;
          return [
            `${wrapWithQuotesIfNeeded(prop)}${isOptional ? "?" : ""}`,
            isOptional ? t.optional(propType) : propType,
          ];
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

      const base = t.typeAlias(inheritedMeta.name, objectType);
      if (!isPartial) return base;

      return t.typeAlias(inheritedMeta.name, t.reference("Partial", [objectType]));
    }

    if (!schemaType) return t.unknown();

    throw new Error(`Unsupported schema type: ${schemaType}`);
  };

  const tsResult = getTs();
  if (!canBeWrapped) return tsResult;

  if (inheritedMeta?.name) {
    return t.typeAlias(inheritedMeta.name, tsResult);
  }

  throw new Error("Name is required to convert a schema to a type reference");
};
