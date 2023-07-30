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
  if (!canBeWrapped) return tsResult;

  if (inheritedMeta?.name) {
    return t.type(inheritedMeta.name, tsResult);
  }

  throw new Error("Name is required to convert a schema to a type reference");
};

type SingleType = Exclude<SchemaObject["type"], any[] | undefined>;
const isPrimitiveType = (type: SingleType): type is PrimitiveType => primitiveTypeList.includes(type as any);

const primitiveTypeList = ["string", "number", "integer", "boolean", "null"] as const;
type PrimitiveType = (typeof primitiveTypeList)[number];

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

class Box<T extends AnyBox = AnyBox> {
  type: T["type"];
  value: T["value"];
  params: T["params"];
  schema: SchemaObject | ReferenceObject | undefined;

  constructor(public definition: T) {
    this.definition = definition;
    this.type = definition.type;
    this.value = definition.value;
    this.params = definition.params;
  }

  setSchema(schema: SchemaObject | ReferenceObject) {
    this.schema = schema;
    return this;
  }

  toJSON() {
    return {
      type: this.type,
      value: this.value,
      params: format(this.params, (value) =>
        value
          ? // cheap instanceof Box, but avoiding circular dependency so TS is happy
            typeof value === "object" && "value" in value
            ? { type: value.type, value: value.value }
            : value
          : value,
      ),
      schema: this.schema,
    };
  }

  toString() {
    return JSON.stringify(this.toJSON(), null, 2);
  }
}

const box: BoxFactory<{}> = {
  type: (name, def) => new Box({ type: "type", params: { name, def }, value: factory.type(name, unwrap(def)) }),
  union: (types) => new Box({ type: "union", params: { types }, value: factory.union(types.map(unwrap)) }),
  intersection: (types) =>
    new Box({
      type: "intersection",
      params: { types },
      value: factory.intersection(types.map(unwrap)),
    }),
  array: (type) => new Box({ type: "array", params: { type }, value: factory.array(unwrap(type)) }),
  optional: (type) => new Box({ type: "optional", params: { type }, value: factory.optional(unwrap(type)) }),
  reference: (name, generics) =>
    new Box({
      type: "ref",
      params: generics ? { name, generics } : { name },
      value: factory.reference(name, generics?.map(unwrap)),
    }),
  string: () => new Box({ type: "keyword", params: { name: "string" }, value: factory.string() }),
  number: () => new Box({ type: "keyword", params: { name: "number" }, value: factory.number() }),
  boolean: () => new Box({ type: "keyword", params: { name: "boolean" }, value: factory.boolean() }),
  unknown: () => new Box({ type: "keyword", params: { name: "unknown" }, value: factory.unknown() }),
  any: () => new Box({ type: "keyword", params: { name: "any" }, value: factory.any() }),
  never: () => new Box({ type: "keyword", params: { name: "never" }, value: factory.never() }),
  object: (props) =>
    new Box({
      type: "object",
      params: { props },
      value: factory.object(format(props, unwrap)),
    }),
};

type StringOrBox = string | AnyBox;

type BoxFactory<T> = {
  type: (name: string, def: StringOrBox) => Box<BoxTypeNode<T>>;
  union: (types: Array<StringOrBox>) => Box<BoxUnion<T>>;
  intersection: (types: Array<StringOrBox>) => Box<BoxIntersection<T>>;
  array: (type: StringOrBox) => Box<BoxArray<T>>;
  object: (props: Record<string, StringOrBox>) => Box<BoxObject<T>>;
  optional: (type: StringOrBox) => Box<BoxOptional<T>>;
  reference: (name: string, generics?: Array<StringOrBox> | undefined) => Box<BoxRef<T>>;
  string: () => Box<BoxKeyword<T>>;
  number: () => Box<BoxKeyword<T>>;
  boolean: () => Box<BoxKeyword<T>>;
  unknown: () => Box<BoxKeyword<T>>;
  any: () => Box<BoxKeyword<T>>;
  never: () => Box<BoxKeyword<T>>;
};

const createFactory = (schema: SchemaObject | ReferenceObject) => {
  return new Proxy(box, {
    get(target, p) {
      if (!Boolean(p in target)) {
        return;
      }

      return new Proxy((box as any)[p], {
        apply(target, thisArg, argArray) {
          const result = target.bind(thisArg)(...argArray) as Box;
          result.setSchema(schema);
          return result;
        },
      });
    },
  });
};

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
  params: { name: string; generics?: BoxParams[] | undefined };
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
