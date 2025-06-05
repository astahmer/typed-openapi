import { isPrimitiveType } from "./asserts.ts";
import { Box } from "./box.ts";
import { createBoxFactory } from "./box-factory.ts";
import { isReferenceObject } from "./is-reference-object.ts";
import { AnyBoxDef, OpenapiSchemaConvertArgs, type LibSchemaObject } from "./types.ts";
import { wrapWithQuotesIfNeeded } from "./string-utils.ts";

export const openApiSchemaToTs = ({ schema, meta: _inheritedMeta, ctx }: OpenapiSchemaConvertArgs): Box<AnyBoxDef> => {
  const meta = {} as OpenapiSchemaConvertArgs["meta"];

  if (!schema) {
    throw new Error("Schema is required");
  }

  const t = createBoxFactory(schema as LibSchemaObject, ctx);
  const getTs = () => {
    if (isReferenceObject(schema)) {
      const refInfo = ctx.refs.getInfosByRef(schema.$ref);

      return t.reference(refInfo.normalized);
    }

    if (Array.isArray(schema.type)) {
      if (schema.type.length === 1) {
        return openApiSchemaToTs({ schema: { ...schema, type: schema.type[0]! }, ctx, meta });
      }

      return t.union(schema.type.map((prop) => openApiSchemaToTs({ schema: { ...schema, type: prop }, ctx, meta })));
    }

    if (schema.type === "null") {
      return t.literal("null");
    }

    if (schema.oneOf) {
      if (schema.oneOf.length === 1) {
        return openApiSchemaToTs({ schema: schema.oneOf[0]!, ctx, meta });
      }

      return t.union(schema.oneOf.map((prop) => openApiSchemaToTs({ schema: prop, ctx, meta })));
    }

    // tl;dr: anyOf = oneOf
    // oneOf matches exactly one subschema, and anyOf can match one or more subschemas.
    // https://swagger.io/docs/specification/v3_0/data-models/oneof-anyof-allof-not/
    if (schema.anyOf) {
      if (schema.anyOf.length === 1) {
        return openApiSchemaToTs({ schema: schema.anyOf[0]!, ctx, meta });
      }

      return t.union(schema.anyOf.map((prop) => openApiSchemaToTs({ schema: prop, ctx, meta })));
    }

    if (schema.allOf) {
      const types = schema.allOf.map((prop) => openApiSchemaToTs({ schema: prop, ctx, meta }));
      const {allOf, externalDocs,  example, examples, description, title,  ...rest} = schema
      if (Object.keys(rest).length > 0) {
        types.push(openApiSchemaToTs({schema: rest, ctx, meta}))
      }
      return t.intersection(types);
    }

    const schemaType = schema.type ? (schema.type.toLowerCase() as NonNullable<typeof schema.type>) : undefined;
    if (schemaType && isPrimitiveType(schemaType)) {
      if (schema.enum) {
        if (schema.enum.length === 1) {
          const value = schema.enum[0];
          if (value === null) {
            return t.literal("null");
          } else if (value === true) {
            return t.literal("true");
          } else if (value === false) {
            return t.literal("false");
          } else if (typeof value === "number") {
            return t.literal(`${value}`)
          } else {
            return t.literal(`"${value}"`);
          }
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
      if (schemaType === "null") return t.literal("null");
    }
    if (!schemaType && schema.enum) {
      return t.union(schema.enum.map((value) => {
        if (typeof value === "string") {
          return t.literal(`"${value}"`)
        }
        if (value === null) {
          return t.literal("null")
        }
        // handle boolean and number literals
        return t.literal(value)
      }));
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
        if (
          schema.additionalProperties &&
          !isReferenceObject(schema.additionalProperties) &&
          typeof schema.additionalProperties !== "boolean" &&
          schema.additionalProperties.type
        ) {
          const valueSchema = openApiSchemaToTs({ schema: schema.additionalProperties, ctx, meta });
          return t.literal(`Record<string, ${valueSchema.value}>`);
        }

        return t.literal("Record<string, unknown>");
      }

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
      const isPartial = !schema.required?.length;

      const props = Object.fromEntries(
        Object.entries(schema.properties).map(([prop, propSchema]) => {
          let propType = openApiSchemaToTs({ schema: propSchema, ctx, meta });
          if (typeof propType === "string") {
            // TODO Partial ?
            propType = t.reference(propType);
          }

          const isRequired = Boolean(isPartial ? true : hasRequiredArray ? schema.required?.includes(prop) : false);
          const isOptional = !isPartial && !isRequired;
          return [`${wrapWithQuotesIfNeeded(prop)}`, isOptional ? t.optional(propType) : propType];
        }),
      );

      const objectType = additionalProperties
        ? t.intersection([t.object(props), additionalProperties])
        : t.object(props);

      return isPartial ? t.reference("Partial", [objectType]) : objectType;
    }

    if (!schemaType) return t.unknown();

    throw new Error(`Unsupported schema type: ${schemaType}`);
  };

  let output = getTs();
  if (!isReferenceObject(schema)) {
    // OpenAPI 3.1 does not have nullable, but OpenAPI 3.0 does
    if ((schema as LibSchemaObject).nullable) {
      output = t.union([output, t.literal("null")]);
    }
  }

  return output;
};
