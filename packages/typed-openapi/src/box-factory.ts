import type { ReferenceObject, SchemaObject } from "openapi3-ts/oas31";
import { Box } from "./box";
import { AnyBoxDef, BoxFactory, OpenapiSchemaConvertContext, StringOrBox } from "./types";

export const unwrap = (param: StringOrBox) => (typeof param === "string" ? param : param.value);
export const createFactory = <T extends OpenapiSchemaConvertContext["factory"]>(f: T) => f;

/**
 * Create a box-factory using your schema provider and automatically add the input schema to each box.
 */
export const createBoxFactory = (schema: SchemaObject | ReferenceObject, ctx: OpenapiSchemaConvertContext) => {
  const f = typeof ctx.factory === "function" ? ctx.factory(schema, ctx) : ctx.factory;
  const callback = <T extends AnyBoxDef>(box: Box<T>) => {
    if (f.callback) {
      box = f.callback(box) as Box<T>;
    }

    if (ctx?.onBox) {
      box = ctx.onBox?.(box) as Box<T>;
    }

    return box;
  };

  const box: BoxFactory = {
    union: (types) => callback(new Box({ ctx, schema, type: "union", params: { types }, value: f.union(types) })),
    intersection: (types) =>
      callback(new Box({ ctx, schema, type: "intersection", params: { types }, value: f.intersection(types) })),
    array: (type) => callback(new Box({ ctx, schema, type: "array", params: { type }, value: f.array(type) })),
    optional: (type) => callback(new Box({ ctx, schema, type: "optional", params: { type }, value: f.optional(type) })),
    reference: (name, generics) =>
      callback(
        new Box({
          ctx,
          schema,
          type: "ref",
          params: generics ? { name, generics } : { name },
          value: f.reference(name, generics),
        }),
      ),
    literal: (value) => callback(new Box({ ctx, schema, type: "literal", params: {}, value: f.literal(value) })),
    string: () => callback(new Box({ ctx, schema, type: "keyword", params: { name: "string" }, value: f.string() })),
    number: () => callback(new Box({ ctx, schema, type: "keyword", params: { name: "number" }, value: f.number() })),
    boolean: () => callback(new Box({ ctx, schema, type: "keyword", params: { name: "boolean" }, value: f.boolean() })),
    unknown: () => callback(new Box({ ctx, schema, type: "keyword", params: { name: "unknown" }, value: f.unknown() })),
    any: () => callback(new Box({ ctx, schema, type: "keyword", params: { name: "any" }, value: f.any() })),
    never: () => callback(new Box({ ctx, schema, type: "keyword", params: { name: "never" }, value: f.never() })),
    object: (props) => callback(new Box({ ctx, schema, type: "object", params: { props }, value: f.object(props) })),
  };

  return box;
};
