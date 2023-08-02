import type { SchemaObject, ReferenceObject } from "openapi3-ts/oas31";
import {
  AnyBoxDef,
  BoxArray,
  BoxIntersection,
  BoxKeyword,
  BoxLiteral,
  BoxObject,
  BoxOptional,
  BoxRef,
  BoxTypeNode,
  BoxUnion,
} from "./types";

// TODO rename SchemaBox
export class Box<T extends AnyBoxDef = AnyBoxDef> {
  type: T["type"];
  value: T["value"];
  params: T["params"];
  schema: SchemaObject | ReferenceObject | undefined;

  constructor(public definition: T) {
    this.definition = definition;
    this.type = definition.type;
    this.value = definition.value;
    this.params = definition.params;
    this.schema = definition.schema;
  }

  toJSON() {
    return { type: this.type, value: this.value };
  }

  toString() {
    return JSON.stringify(this.toJSON(), null, 2);
  }

  static fromJSON(json: string) {
    return new Box(JSON.parse(json));
  }

  static isBox(box: unknown): box is Box<AnyBoxDef> {
    return box instanceof Box;
  }

  static isTypeAlias(box: Box<AnyBoxDef>): box is Box<BoxTypeNode> {
    return box.type === "type";
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
