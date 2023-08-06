import { SchemaObject } from "openapi3-ts/oas31";
import { openApiSchemaToTs } from "./openapi-schema-to-ts";
import {
  AnyBoxDef,
  BoxArray,
  BoxIntersection,
  BoxKeyword,
  BoxLiteral,
  BoxObject,
  BoxOptional,
  BoxRef,
  BoxUnion,
  OpenapiSchemaConvertContext,
} from "./types";

// TODO rename SchemaBox
export class Box<T extends AnyBoxDef = AnyBoxDef> {
  type: T["type"];
  value: T["value"];
  params: T["params"];
  schema: T["schema"];
  ctx: T["ctx"];

  constructor(public definition: T) {
    this.definition = definition;
    this.type = definition.type;
    this.value = definition.value;
    this.params = definition.params;
    this.schema = definition.schema;
    this.ctx = definition.ctx;
  }

  toJSON() {
    return { type: this.type, value: this.value };
  }

  toString() {
    return JSON.stringify(this.toJSON(), null, 2);
  }

  recompute(callback: OpenapiSchemaConvertContext["onBox"]) {
    return openApiSchemaToTs({ schema: this.schema as SchemaObject, ctx: { ...this.ctx, onBox: callback! } });
  }

  static fromJSON(json: string) {
    return new Box(JSON.parse(json));
  }

  static isBox(box: unknown): box is Box<AnyBoxDef> {
    return box instanceof Box;
  }

  static isUnion(box: Box<AnyBoxDef>): box is Box<BoxUnion> {
    return box.type === "union";
  }

  static isIntersection(box: Box<AnyBoxDef>): box is Box<BoxIntersection> {
    return box.type === "intersection";
  }

  static isArray(box: Box<AnyBoxDef>): box is Box<BoxArray> {
    return box.type === "array";
  }

  static isOptional(box: Box<AnyBoxDef>): box is Box<BoxOptional> {
    return box.type === "optional";
  }

  static isReference(box: Box<AnyBoxDef>): box is Box<BoxRef> {
    return box.type === "ref";
  }

  static isKeyword(box: Box<AnyBoxDef>): box is Box<BoxKeyword> {
    return box.type === "keyword";
  }

  static isObject(box: Box<AnyBoxDef>): box is Box<BoxObject> {
    return box.type === "object";
  }

  static isLiteral(box: Box<AnyBoxDef>): box is Box<BoxLiteral> {
    return box.type === "literal";
  }
}
