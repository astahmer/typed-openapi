import type { LiteralValue, SchemaNode } from "../../schema-ir/types.ts";
import { hasObjectRestTyping, resolveSchemaNode, shouldDeferNamedSchemaRef } from "../shared.ts";
import type { EmitCtx } from "../types.ts";

/** Zod's fast path needs object validators with disjoint, required discriminator values. */
export const canDiscriminate = (members: SchemaNode[], property: string, ctx: EmitCtx): boolean => {
  const seen = new Set<LiteralValue>();
  return members.every((member) => {
    if (member.kind === "ref" && (ctx.recursiveNames.has(member.name) || shouldDeferNamedSchemaRef(member.name, ctx))) {
      return false;
    }
    const object = resolveSchemaNode(member, ctx);
    if (
      object.kind !== "object" ||
      object.meta.default !== undefined ||
      !object.required.includes(property) ||
      hasObjectRestTyping(object) ||
      (ctx.validation.objectConstraints && Object.keys(object.constraints).length > 0)
    )
      return false;
    const prop = object.properties[property];
    if (!prop) return false;
    const discriminator = resolveSchemaNode(prop, ctx);
    if (discriminator.meta.default !== undefined) return false;
    // Zod 3 cannot extract discriminator values from a union of non-string literals.
    if (discriminator.kind === "enum" && !discriminator.values.every((value) => typeof value === "string")) {
      return false;
    }
    const values =
      discriminator.kind === "literal"
        ? [discriminator.value]
        : discriminator.kind === "enum"
          ? discriminator.values
          : [];
    if (values.length === 0) return false;
    for (const value of values) {
      if (seen.has(value)) return false;
      seen.add(value);
    }
    return true;
  });
};
