import { Box } from "../box.ts";
import type { AnyBox, AnyBoxDef } from "../types.ts";
import { isReferenceObject } from "../is-reference-object.ts";
import { openApiToIr } from "./openapi-to-ir.ts";
import type { SchemaIrConvertContext, SchemaNode } from "./types.ts";

const emptyMeta = () => ({});

/**
 * Prefer structural Box walk (params) so synthetic factory schemas that still
 * hold raw `$ref`s (e.g. response header maps) don't leak into IR.
 * Fall back to OpenAPI schema for leaves to preserve constraints.
 */
export const boxToIr = (box: Box<AnyBoxDef> | AnyBox | string, ctx: SchemaIrConvertContext): SchemaNode => {
  if (typeof box === "string") {
    if (box === "null") return { kind: "null", meta: emptyMeta() };
    return { kind: "ref", name: box, meta: emptyMeta() };
  }

  if (Box.isReference(box)) {
    const name = box.params.name;
    if (name === "Partial" && box.params.generics?.[0]) {
      const inner = boxToIr(box.params.generics[0] as AnyBox, ctx);
      if (inner.kind === "object") {
        return { ...inner, partial: true, required: [] };
      }
      return inner;
    }
    if (name === "Record" && box.params.generics?.length === 2) {
      return {
        kind: "record",
        key: boxToIr(box.params.generics[0] as AnyBox, ctx),
        value: boxToIr(box.params.generics[1] as AnyBox, ctx),
        meta: emptyMeta(),
      };
    }
    const refName = box.params.name || box.value;
    return { kind: "ref", name: refName, meta: emptyMeta() };
  }

  if (Box.isOptional(box)) {
    return boxToIr(box.params.type as AnyBox, ctx);
  }
  if (Box.isUnion(box)) {
    return {
      kind: "union",
      members: box.params.types.map((t) => boxToIr(t as AnyBox, ctx)),
      meta: emptyMeta(),
    };
  }
  if (Box.isIntersection(box)) {
    return {
      kind: "intersection",
      members: box.params.types.map((t) => boxToIr(t as AnyBox, ctx)),
      meta: emptyMeta(),
    };
  }
  if (Box.isArray(box)) {
    return {
      kind: "array",
      items: boxToIr(box.params.type as AnyBox, ctx),
      constraints: {},
      meta: emptyMeta(),
    };
  }
  if (Box.isObject(box)) {
    const properties: Record<string, SchemaNode> = {};
    const required: string[] = [];
    for (const [key, value] of Object.entries(box.params.props)) {
      const optional = typeof value !== "string" && Box.isBox(value) && Box.isOptional(value);
      properties[key] = boxToIr(value as AnyBox, ctx);
      if (!optional) required.push(key);
    }
    return {
      kind: "object",
      properties,
      required,
      additionalProperties: false,
      constraints: {},
      meta: emptyMeta(),
      partial: required.length === 0 && Object.keys(properties).length > 0,
    };
  }
  if (Box.isLiteral(box)) {
    const raw = box.value;
    if (raw === "null") return { kind: "null", meta: emptyMeta() };
    if (raw === "true") return { kind: "literal", value: true, meta: emptyMeta() };
    if (raw === "false") return { kind: "literal", value: false, meta: emptyMeta() };
    if (raw.startsWith('"') && raw.endsWith('"')) {
      return { kind: "literal", value: JSON.parse(raw) as string, meta: emptyMeta() };
    }
    const num = Number(raw);
    if (!Number.isNaN(num) && String(num) === raw) {
      return { kind: "literal", value: num, meta: emptyMeta() };
    }
    return { kind: "literal", value: raw, meta: emptyMeta() };
  }
  if (Box.isKeyword(box)) {
    // Prefer original OAS schema so formats/constraints survive
    if (box.schema && !isReferenceObject(box.schema)) {
      return openApiToIr(box.schema, ctx);
    }
    const name = box.params.name;
    if (name === "string") return { kind: "string", constraints: {}, meta: emptyMeta() };
    if (name === "number") return { kind: "number", integer: false, constraints: {}, meta: emptyMeta() };
    if (name === "boolean") return { kind: "boolean", meta: emptyMeta() };
    if (name === "unknown") return { kind: "unknown", meta: emptyMeta() };
    if (name === "any") return { kind: "any", meta: emptyMeta() };
    if (name === "never") return { kind: "never", meta: emptyMeta() };
  }

  if (box.schema) {
    return openApiToIr(box.schema as never, ctx);
  }

  return { kind: "unknown", meta: emptyMeta() };
};
