import type { ReferenceObject, SchemaObject } from "openapi3-ts/oas31";
import { PrimitiveType } from "./asserts";

import type { DocumentResolver } from "./schema-resolver";
import { Box } from "./box";

export type BoxDefinition = {
  type: string;
  params: unknown;
  value: string;
};
export type BoxParams = string | BoxDefinition;

export type BoxTypeNode<T = {}> = T & {
  type: "type";
  params: { name: string; def: BoxParams };
  value: string;
};

export type BoxUnion<T = {}> = T & {
  type: "union";
  params: {
    types: Array<BoxParams>;
  };
  value: string;
};

export type BoxIntersection<T = {}> = T & {
  type: "intersection";
  params: {
    types: Array<BoxParams>;
  };
  value: string;
};

export type BoxArray<T = {}> = T & {
  type: "array";
  params: {
    type: BoxParams;
  };
  value: string;
};

export type BoxOptional<T = {}> = T & {
  type: "optional";
  params: {
    type: BoxParams;
  };
  value: string;
};

export type BoxRef<T = {}> = T & {
  type: "ref";
  params: { name: string; generics?: BoxParams[] | undefined };
  value: string;
};

export type BoxKeyword<T = {}> = T & {
  type: "keyword";
  params: { name: string };
  value: string;
};

export type BoxObject<T = {}> = T & {
  type: "object";
  params: { props: Record<string, BoxParams> };
  value: string;
};

export type AnyBox =
  | BoxTypeNode
  | BoxUnion
  | BoxIntersection
  | BoxArray
  | BoxOptional
  | BoxRef
  | BoxKeyword
  | BoxObject;

export type OpenapiSchemaConvertArgs = {
  schema: SchemaObject | ReferenceObject;
  ctx: OpenapiSchemaConvertContext;
  meta?: { name?: string; $ref?: string; isInline?: boolean } | undefined;
};

export type FactoryCreator = (
  schema: SchemaObject | ReferenceObject,
  ctx: OpenapiSchemaConvertContext,
) => GenericFactory;
export type OpenapiSchemaConvertContext = {
  factory: FactoryCreator | GenericFactory;
  resultByRef: Record<string, string>; // TODO Map
  resolver: DocumentResolver;
  rootRef?: string;
  visiteds?: Set<string>;
  onBox?: (box: Box<AnyBox>) => Box<AnyBox>;
};

export type StringOrBox = string | AnyBox;

export type BoxFactory<T> = {
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

export type GenericFactory = {
  callback?: OpenapiSchemaConvertContext["onBox"];
  type: (name: string, def: StringOrBox) => string;
  union: (types: Array<StringOrBox>) => string;
  intersection: (types: Array<StringOrBox>) => string;
  array: (type: StringOrBox) => string;
  object: (props: Record<string, StringOrBox>) => string;
  optional: (type: StringOrBox) => string;
  reference: (name: string, generics?: Array<StringOrBox> | undefined) => string;
  string: () => string;
  number: () => string;
  boolean: () => string;
  unknown: () => string;
  any: () => string;
  never: () => string;
};
