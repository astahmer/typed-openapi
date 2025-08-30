import "@traversable/registry";
import { t } from "@traversable/schema";
import "@traversable/schema-to-json-schema/install";
import { isPrimitiveType } from "./asserts.ts";
import { isReferenceObject } from "./is-reference-object.ts";
import { OpenapiSchemaConvertArgs, type LibSchemaObject } from "./types.ts";

export const openApiSchemaToTs = ({ schema, ctx }: OpenapiSchemaConvertArgs): t.F<any> => {
  if (!schema) {
    throw new Error("Schema is required");
  }

  const getTs = () => {
    if (isReferenceObject(schema)) {
      // const refInfo = ctx.refs.getInfosByRef(schema.$ref);
      return t.eq(schema);
    }

    if (Array.isArray(schema.type)) {
      if (schema.type.length === 1) {
        return openApiSchemaToTs({ schema: { ...schema, type: schema.type[0]! }, ctx });
      }

      return t.union(...schema.type.map((prop) => openApiSchemaToTs({ schema: { ...schema, type: prop }, ctx })));
    }

    if (schema.type === "null") {
      return t.null;
    }

    if (schema.oneOf) {
      if (schema.oneOf.length === 1) {
        return openApiSchemaToTs({ schema: schema.oneOf[0]!, ctx });
      }

      return t.union(...schema.oneOf.map((prop) => openApiSchemaToTs({ schema: prop, ctx })));
    }

    // tl;dr: anyOf = oneOf
    // oneOf matches exactly one subschema, and anyOf can match one or more subschemas.
    // https://swagger.io/docs/specification/v3_0/data-models/oneof-anyof-allof-not/
    if (schema.anyOf) {
      if (schema.anyOf.length === 1) {
        return openApiSchemaToTs({ schema: schema.anyOf[0]!, ctx });
      }

      return t.union(...schema.anyOf.map((prop) => openApiSchemaToTs({ schema: prop, ctx })));
    }

    if (schema.allOf) {
      const types = schema.allOf.map((prop) => openApiSchemaToTs({ schema: prop, ctx }));
      const { allOf, externalDocs, example, examples, description, title, ...rest } = schema;
      if (Object.keys(rest).length > 0) {
        types.push(openApiSchemaToTs({ schema: rest, ctx }));
      }
      return t.intersect(...types);
    }

    const schemaType = schema.type ? (schema.type.toLowerCase() as NonNullable<typeof schema.type>) : undefined;
    if (schemaType && isPrimitiveType(schemaType)) {
      if (schema.enum) {
        if (schema.enum.length === 1) {
          const value = schema.enum[0];
          if (value === null) {
            return t.null;
          } else if (value === true) {
            return t.eq(true);
          } else if (value === false) {
            return t.eq(false);
          } else if (typeof value === "number") {
            return t.eq(value);
          } else {
            return t.eq(value);
          }
        }

        if (schemaType === "string") {
          return t.union(...schema.enum.map((value) => t.eq(value)));
        }

        if (schema.enum.some((e) => typeof e === "string")) {
          return t.never;
        }

        return t.union(...schema.enum.map((value) => (value === null ? t.null : t.eq(value))));
      }

      if (schemaType === "string") return t.string;
      if (schemaType === "boolean") return t.boolean;
      if (schemaType === "number") return t.number;
      if (schemaType === "integer") return t.integer;
      if (schemaType === "null") return t.null;
    }
    if (!schemaType && schema.enum) {
      return t.union(
        ...schema.enum.map((value) => {
          if (typeof value === "string") {
            return t.eq(value);
          }
          if (value === null) {
            return t.null;
          }
          // handle boolean and number eqs
          return t.eq(value);
        }),
      );
    }

    if (schemaType === "array") {
      if (schema.items) {
        let arrayOfType = openApiSchemaToTs({ schema: schema.items, ctx });
        return t.array(arrayOfType);
      }

      return t.array(t.any);
    }

    if (schemaType === "object" || schema.properties || schema.additionalProperties) {
      if (!schema.properties) {
        if (
          schema.additionalProperties &&
          !isReferenceObject(schema.additionalProperties) &&
          typeof schema.additionalProperties !== "boolean" &&
          schema.additionalProperties.type
        ) {
          const valueSchema = openApiSchemaToTs({ schema: schema.additionalProperties, ctx });
          return t.record(valueSchema);
        }

        return t.record(t.unknown);
      }

      let additionalProperties;
      if (schema.additionalProperties) {
        let additionalPropertiesType;
        if (
          (typeof schema.additionalProperties === "boolean" && schema.additionalProperties) ||
          (typeof schema.additionalProperties === "object" && Object.keys(schema.additionalProperties).length === 0)
        ) {
          additionalPropertiesType = t.record(t.unknown);
        } else if (typeof schema.additionalProperties === "object") {
          additionalPropertiesType = openApiSchemaToTs({
            schema: schema.additionalProperties,
            ctx,
          });
        }

        additionalProperties = t.record(additionalPropertiesType ? additionalPropertiesType : t.unknown);
      }

      const hasRequiredArray = schema.required && schema.required.length > 0;
      const isPartial = !schema.required?.length;

      const props = Object.fromEntries(
        Object.entries(schema.properties).map(([prop, propSchema]) => {
          let propType = openApiSchemaToTs({ schema: propSchema, ctx });
          const isRequired = Boolean(isPartial ? true : hasRequiredArray ? schema.required?.includes(prop) : false);
          const isOptional = !isPartial && !isRequired;
          return [prop, isOptional ? t.optional(propType) : propType];
        }),
      );

      const objectType = additionalProperties ? t.intersect(t.object(props), additionalProperties) : t.object(props);

      return objectType;
    }

    if (!schemaType) return t.unknown;

    throw new Error(`Unsupported schema type: ${schemaType}`);
  };

  let output = getTs();
  if (!isReferenceObject(schema)) {
    // OpenAPI 3.1 does not have nullable, but OpenAPI 3.0 does
    if ((schema as LibSchemaObject).nullable) {
      output = t.union(output, t.null);
    }
  }

  // console.log(output);
  return output;
};
