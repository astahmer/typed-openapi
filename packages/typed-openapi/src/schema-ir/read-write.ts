import type { SchemaNode } from "./types.ts";

export type ReadWriteMode = "request" | "response";

/**
 * Strip OAS readOnly (request) / writeOnly (response) properties from object trees.
 * Refs are left as-is (named schemas may be shared across request/response).
 */
export const stripReadWrite = (node: SchemaNode, mode: ReadWriteMode): SchemaNode => {
  const drop = mode === "request" ? "readOnly" : "writeOnly";

  switch (node.kind) {
    case "object": {
      const properties: Record<string, SchemaNode> = {};
      for (const [key, prop] of Object.entries(node.properties)) {
        if (prop.meta[drop]) continue;
        properties[key] = stripReadWrite(prop, mode);
      }
      return {
        ...node,
        properties,
        required: node.required.filter((name) => name in properties),
      };
    }
    case "array":
      return { ...node, items: stripReadWrite(node.items, mode) };
    case "tuple":
      return {
        ...node,
        items: node.items.map((item) => stripReadWrite(item, mode)),
        ...(node.rest ? { rest: stripReadWrite(node.rest, mode) } : {}),
      };
    case "union":
      return { ...node, members: node.members.map((m) => stripReadWrite(m, mode)) };
    case "intersection":
      return { ...node, members: node.members.map((m) => stripReadWrite(m, mode)) };
    case "not":
      return { ...node, schema: stripReadWrite(node.schema, mode) };
    case "record":
      return {
        ...node,
        key: stripReadWrite(node.key, mode),
        value: stripReadWrite(node.value, mode),
      };
    case "ref":
      if (node.generics?.length) {
        return { ...node, generics: node.generics.map((g) => stripReadWrite(g, mode)) };
      }
      return node;
    default:
      return node;
  }
};
