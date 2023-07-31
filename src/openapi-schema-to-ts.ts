import { isPrimitiveType } from "./asserts";
import { createFactory } from "./box-factory";
import { isReferenceObject } from "./is-reference-object";
import { AnyBox, OpenapiSchemaConvertArgs } from "./types";
import { wrapWithQuotesIfNeeded } from "./utils";

export const openApiSchemaToTs = ({ schema, meta: inheritedMeta, ctx }: OpenapiSchemaConvertArgs): AnyBox => {
  const meta = {} as OpenapiSchemaConvertArgs["meta"];
  const isInline = !inheritedMeta?.name;

  if (ctx?.visitedsRefs && inheritedMeta?.$ref) {
    ctx.rootRef = inheritedMeta.$ref;
    ctx.visitedsRefs[inheritedMeta.$ref] = true;
  }

  if (!schema) {
    throw new Error("Schema is required");
  }

  let canBeWrapped = !isInline;
  const t = createFactory(schema);
  const getTs = (): AnyBox => {
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
      }

      return t.reference(schemaName);
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
        let arrayOfType = openApiSchemaToTs({ schema: schema.items, ctx, meta });
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
        return t.unknown();
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
          additionalPropertiesType = openApiSchemaToTs({
            schema: schema.additionalProperties,
            ctx,
            meta,
          });
        }

        additionalProperties = t.object({ [t.string().value]: additionalPropertiesType! });
      }

      const props = Object.fromEntries(
        Object.entries(schema.properties).map(([prop, propSchema]) => {
          let propType = openApiSchemaToTs({ schema: propSchema, ctx, meta });
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

    throw new Error(`Unsupported schema type: ${schemaType}`);
  };

  const tsResult = getTs();
  if (!canBeWrapped) return tsResult;

  if (inheritedMeta?.name) {
    return t.type(inheritedMeta.name, tsResult);
  }

  throw new Error("Name is required to convert a schema to a type reference");
};
