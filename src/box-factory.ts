import type { SchemaObject, ReferenceObject } from "openapi3-ts/oas31";
import { format } from "pastable";
import { Box } from "./box";
import {
  AnyBox,
  BoxArray,
  BoxIntersection,
  BoxKeyword,
  BoxObject,
  BoxOptional,
  BoxRef,
  BoxTypeNode,
  BoxUnion,
  TsConversionContext,
} from "./types";

const unwrap = (param: StringOrBox) => (typeof param === "string" ? param : param.value);

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

export const createFactory = (schema: SchemaObject | ReferenceObject, ctx?: TsConversionContext) => {
  return new Proxy(box, {
    get(target, p) {
      if (!Boolean(p in target)) {
        return;
      }

      return new Proxy((box as any)[p], {
        apply(target, thisArg, argArray) {
          let result = target.bind(thisArg)(...argArray) as Box;
          result.setSchema(schema);

          if (ctx?.onBox) {
            result = ctx.onBox(result);
          }

          return result;
        },
      });
    },
  });
};
