import type { ReferenceObject, SchemaObject } from "openapi3-ts/oas31";
import { Box } from "./box";
import { AnyBox, BoxFactory, OpenapiSchemaConvertContext, StringOrBox } from "./types";

export const unwrap = (param: StringOrBox) => (typeof param === "string" ? param : param.value);
export const createFactory = (f: OpenapiSchemaConvertContext["factory"]) => f;

/**
 * Create a box-factory and automatically add the input schema
 */
export const createBoxFactory = (schema: SchemaObject | ReferenceObject, ctx: OpenapiSchemaConvertContext) => {
  const f = typeof ctx.factory === "function" ? ctx.factory(schema, ctx) : ctx.factory;
  const callback = <T extends AnyBox>(box: Box<T>) => {
    box.setSchema(schema);

    if (f.callback) {
      box = f.callback(box) as Box<T>;
    }

    if (ctx?.onBox) {
      box = ctx.onBox?.(box) as Box<T>;
    }

    return box;
  };

  const box: BoxFactory<{}> = {
    type: (name, def) => callback(new Box({ type: "type", params: { name, def }, value: f.type(name, def) })),
    union: (types) => callback(new Box({ type: "union", params: { types }, value: f.union(types) })),
    intersection: (types) =>
      callback(new Box({ type: "intersection", params: { types }, value: f.intersection(types) })),
    array: (type) => callback(new Box({ type: "array", params: { type }, value: f.array(type) })),
    optional: (type) => callback(new Box({ type: "optional", params: { type }, value: f.optional(type) })),
    reference: (name, generics) =>
      callback(
        new Box({
          type: "ref",
          params: generics ? { name, generics } : { name },
          value: f.reference(name, generics),
        }),
      ),
    string: () => callback(new Box({ type: "keyword", params: { name: "string" }, value: f.string() })),
    number: () => callback(new Box({ type: "keyword", params: { name: "number" }, value: f.number() })),
    boolean: () => callback(new Box({ type: "keyword", params: { name: "boolean" }, value: f.boolean() })),
    unknown: () => callback(new Box({ type: "keyword", params: { name: "unknown" }, value: f.unknown() })),
    any: () => callback(new Box({ type: "keyword", params: { name: "any" }, value: f.any() })),
    never: () => callback(new Box({ type: "keyword", params: { name: "never" }, value: f.never() })),
    object: (props) => callback(new Box({ type: "object", params: { props }, value: f.object(props) })),
  };

  return box;
};
