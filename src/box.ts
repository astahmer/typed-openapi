import type { SchemaObject, ReferenceObject } from "openapi3-ts/oas31";
import { format } from "pastable/server";
import { AnyBox } from "./types";

export class Box<T extends AnyBox = AnyBox> {
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
