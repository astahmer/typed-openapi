import type { ReferenceObject, SchemaObject } from "openapi3-ts/oas31";

import { isReferenceObject } from "./is-reference-object";
import type { DocumentResolver } from "./schema-resolver";
import { wrapWithQuotesIfNeeded } from "./utils";
import { format } from "pastable";

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

export const openApiSchemaToTs = ({
  schema,
  meta: inheritedMeta,
  ctx,
}: // eslint-disable-next-line sonarjs/cognitive-complexity
TsConversionArgs): AnyBox => {
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
  const t = createFactory().from(schema);
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
        // TODO ?
        // result = openApiSchemaToTs({ schema: actualSchema, meta, ctx });
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
        console.log({ arrayOfType });
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
  typeDef: StringOrBox;
}) => {
  if (!isInline) {
    if (!name) {
      throw new Error("Name is required to convert a schema to a type reference");
    }

    return box.type(name, typeDef);
  }

  return typeDef;
};

const factory = {
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

const unwrap = (param: StringOrBox) => (typeof param === "string" ? param : param.value);

const box: BoxFactory<{}> = {
  type: (name, def) => ({ type: "type", params: { name, def }, value: factory.type(name, unwrap(def)) }),
  union: (types) => ({ type: "union", params: { types }, value: factory.union(types.map(unwrap)) }),
  intersection: (types) => ({
    type: "intersection",
    params: { types },
    value: factory.intersection(types.map(unwrap)),
  }),
  array: (type) => ({ type: "array", params: { type }, value: factory.array(unwrap(type)) }),
  optional: (type) => ({ type: "optional", params: { type }, value: factory.optional(unwrap(type)) }),
  reference: (name, generics = []) => ({
    type: "ref",
    params: { name, generics },
    value: factory.reference(name, generics.map(unwrap)),
  }),
  string: () => ({ type: "keyword", params: { name: "string" }, value: factory.string() }),
  number: () => ({ type: "keyword", params: { name: "number" }, value: factory.number() }),
  boolean: () => ({ type: "keyword", params: { name: "boolean" }, value: factory.boolean() }),
  unknown: () => ({ type: "keyword", params: { name: "unknown" }, value: factory.unknown() }),
  any: () => ({ type: "keyword", params: { name: "any" }, value: factory.any() }),
  never: () => ({ type: "keyword", params: { name: "never" }, value: factory.never() }),
  object: (props) => ({
    type: "object",
    params: { props },
    value: factory.object(format(props, (value, key) => ({ [key]: unwrap(value) }))),
  }),
};

type StringOrBox = string | AnyBox;

type BoxFactory<T> = {
  type: (name: string, def: StringOrBox) => BoxTypeNode<T>;
  union: (types: Array<StringOrBox>) => BoxUnion<T>;
  intersection: (types: Array<StringOrBox>) => BoxIntersection<T>;
  array: (type: StringOrBox) => BoxArray<T>;
  object: (props: Record<string, StringOrBox>) => BoxObject<T>;
  optional: (type: StringOrBox) => BoxOptional<T>;
  reference: (name: string, generics?: Array<StringOrBox>) => BoxRef<T>;
  string: () => BoxKeyword<T>;
  number: () => BoxKeyword<T>;
  boolean: () => BoxKeyword<T>;
  unknown: () => BoxKeyword<T>;
  any: () => BoxKeyword<T>;
  never: () => BoxKeyword<T>;
};

/**
 * Simplify a type by merging intersections if possible
 * @param T - type to simplify
 */
export type Simplify<T> = T extends unknown ? { [K in keyof T]: T[K] } : T;

const from = {
  from: (schema: SchemaObject | ReferenceObject) => Object.assign({ schema }, box) as any as BoxFactory<WithSchema>,
};

function createProxy() {
  const identity = Object.assign(from, box);
  return new Proxy(identity, {
    get(target, p) {
      if (!Boolean(p in target)) {
        return;
      }

      return new Proxy((identity as any)[p], {
        apply(target, thisArg, argArray) {
          const result = target.bind(thisArg)(...argArray);
          return Object.assign(result, { schema: target.schema });
        },
      });
    },
  });
}

// const f = createProxy();
// console.log(f);
// // f.any()
// // f.schema({ type: "string" })
// console.log({ oui: f.schema({ type: "string" }).array("string") });

const createFactory = () => {
  return createProxy();
};

type WithSchema = { schema: SchemaObject };

type BoxDefinition = {
  type: string;
  params: unknown;
  value: string;
};
type BoxParams = string | BoxDefinition;

type BoxTypeNode<T = {}> = T & {
  type: "type";
  params: { name: string; def: BoxParams };
  value: string;
};

type BoxUnion<T = {}> = T & {
  type: "union";
  params: {
    types: Array<BoxParams>;
  };
  value: string;
};

type BoxIntersection<T = {}> = T & {
  type: "intersection";
  params: {
    types: Array<BoxParams>;
  };
  value: string;
};

type BoxArray<T = {}> = T & {
  type: "array";
  params: {
    type: BoxParams;
  };
  value: string;
};

type BoxOptional<T = {}> = T & {
  type: "optional";
  params: {
    type: BoxParams;
  };
  value: string;
};

type BoxRef<T = {}> = T & {
  type: "ref";
  params: { name: string; generics: BoxParams[] };
  value: string;
};

type BoxKeyword<T = {}> = T & {
  type: "keyword";
  params: { name: string };
  value: PrimitiveType | "unknown" | "any" | "never";
};

type BoxObject<T = {}> = T & {
  type: "object";
  params: { props: Record<string, BoxParams> };
  value: string;
};

type AnyBox = BoxTypeNode | BoxUnion | BoxIntersection | BoxArray | BoxOptional | BoxRef | BoxKeyword | BoxObject;
