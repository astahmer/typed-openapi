import "@traversable/registry";
import { t } from "@traversable/schema";
import { fromJsonSchema, JsonSchema } from "@traversable/schema-to-json-schema";
import "@traversable/schema-to-json-schema/install";
import { isReferenceObject } from "./is-reference-object.ts";
import { OpenapiSchemaConvertArgs } from "./types.ts";
import { wrapWithQuotesIfNeeded } from "./string-utils.ts";

// const ok = t.object({ ref: t.eq(Symbol.for('$ref'))});
// type OkType = t.typeof<typeof ok>

export const openApiSchemaToTs = ({ schema, ctx }: OpenapiSchemaConvertArgs): t.LowerBound => {
  if (!schema) {
    throw new Error("Schema is required");
  }

  const stack = [schema];
  while (stack.length) {
    let schema = stack.pop()!;
    if (isReferenceObject(schema)) {
      // return t.object({ ref: t.eq(Symbol.for("$ref")), value: t.eq(schema.$ref) });
      const refInfo = ctx.refs.get(schema.$ref);
      schema = refInfo;
    }

    if (schema.type === "object") {
      if (schema.properties) {
        stack.push(...Object.values(schema.properties));
      }
      if (schema.additionalProperties && typeof schema.additionalProperties !== "boolean") {
        stack.push(schema.additionalProperties);
      }

      schema.required = schema.required ?? [];
    }

    if (schema.oneOf) {
      stack.push(...schema.oneOf);
    }
    if (schema.anyOf) {
      stack.push(...schema.anyOf);
    }
    if (schema.allOf) {
      stack.push(...schema.allOf);
    }

    if (schema.items) {
      stack.push(schema.items);
    }
  }

  if (isReferenceObject(schema)) {
    const refInfo = ctx.refs.getInfosByRef(schema.$ref);
    return t.object({ ref: t.eq(Symbol.for("$ref")), value: t.eq(refInfo) });
  }

  let schemaToUse = schema;

  if (schemaToUse.type === "object") {
    if (true && schema.properties && schema.additionalProperties) {
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
          return [`${wrapWithQuotesIfNeeded(prop)}`, isOptional ? t.optional(propType) : propType];
        }),
      );

      const objectType = additionalProperties ? t.intersect(t.object(props), additionalProperties) : t.object(props);

      // return isPartial ? t.reference("Partial", [objectType]) : objectType;
      return objectType;
    } else if (!schema.properties) {
      schemaToUse = JsonSchema.RAW.any;
    } else if (!schema.required) {
      schemaToUse = { required: [], ...schema };
    }
  }

  try {
    console.log(schemaToUse);
    return fromJsonSchema(schemaToUse);
  } catch (e) {
    if (!schema.type) return t.unknown;
    console.log(1, e, schemaToUse);
    // console.log(fromJsonSchema( { type: 'object', properties: {}, nullable: true }))
    // if(schema.type === "object") return t.object({})
    // if (schema.type === "object") {
    //   const withDefaults = { ...JsonSchema.RAW.any, required: [], ...schema };
    //   console.log(withDefaults);
    //   return fromJsonSchema(withDefaults);
    //   // return t.object({})}
    //   // return fromJsonSchema({
    //   //   type: "object",
    //   //   properties: {
    //   //     str: { type: "string" },
    //   //   },
    //   //   nullable: true,
    //   // });
    // }

    console.log(schema);
    throw e;
  }
};
