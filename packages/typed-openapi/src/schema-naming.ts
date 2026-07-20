import type { SchemaNode } from "./schema-ir/types.ts";
import { collectRefNamesFromNode, shouldEmitSchema } from "./filter-spec.ts";
import type { Endpoint } from "./map-openapi-endpoints.ts";
import type { RefResolver } from "./ref-resolver.ts";
import { findRecursiveSchemaNames } from "./runtimes/shared.ts";

export type SchemaNamingMode = "auto" | "always-name" | "prefer-inline";

export type SchemaNamingCtx = {
  name: string;
  ref: string;
  refCount: number;
};

export type SchemaNamingOptions = {
  schemaNaming?: SchemaNamingMode;
  shouldNameSchema?: (ctx: SchemaNamingCtx) => boolean;
};

export type NamedSchemaEntry = { name: string; ref: string; node: SchemaNode };

/** Count how many times each named schema is referenced from endpoints + other schemas. */
export const countSchemaRefs = (endpointNodes: SchemaNode[], namedSchemas: NamedSchemaEntry[]): Map<string, number> => {
  const counts = new Map<string, number>();
  const bump = (name: string) => counts.set(name, (counts.get(name) ?? 0) + 1);

  const walk = (node: SchemaNode) => {
    const refs = collectRefNamesFromNode(node);
    refs.forEach(bump);
  };

  endpointNodes.forEach(walk);
  namedSchemas.forEach(({ node }) => walk(node));
  return counts;
};

export const resolveNamedSchemasToEmit = (
  namedSchemas: NamedSchemaEntry[],
  endpointNodes: SchemaNode[],
  options: SchemaNamingOptions = {},
): { emitNamed: NamedSchemaEntry[]; inlineNames: Set<string> } => {
  const mode = options.schemaNaming ?? "auto";
  if (mode === "auto" || mode === "always-name") {
    return { emitNamed: namedSchemas, inlineNames: new Set() };
  }

  // prefer-inline
  const counts = countSchemaRefs(endpointNodes, namedSchemas);
  const recursive = findRecursiveSchemaNames(namedSchemas.map(({ name, node }) => ({ name, node })));
  const inlineNames = new Set<string>();
  const emitNamed: NamedSchemaEntry[] = [];

  for (const entry of namedSchemas) {
    const refCount = counts.get(entry.name) ?? 0;
    const forceName =
      recursive.has(entry.name) ||
      (options.shouldNameSchema?.({ name: entry.name, ref: entry.ref, refCount }) ?? false);
    if (!forceName && refCount <= 1) {
      inlineNames.add(entry.name);
    } else {
      emitNamed.push(entry);
    }
  }

  return { emitNamed, inlineNames };
};

/** Replace refs that should be inlined with a deep clone of their definition. */
export const inlineSchemaRefs = (
  node: SchemaNode,
  byName: Map<string, SchemaNode>,
  inlineNames: Set<string>,
  stack: Set<string> = new Set(),
): SchemaNode => {
  if (inlineNames.size === 0) return node;

  switch (node.kind) {
    case "ref": {
      if (!inlineNames.has(node.name) || builtin(node.name)) {
        if (node.generics?.length) {
          return {
            ...node,
            generics: node.generics.map((g) => inlineSchemaRefs(g, byName, inlineNames, stack)),
          };
        }
        return node;
      }
      if (stack.has(node.name)) return node; // cycle guard
      const target = byName.get(node.name);
      if (!target) return node;
      const nextStack = new Set(stack).add(node.name);
      return inlineSchemaRefs(target, byName, inlineNames, nextStack);
    }
    case "array":
      return { ...node, items: inlineSchemaRefs(node.items, byName, inlineNames, stack) };
    case "tuple":
      return {
        ...node,
        items: node.items.map((i) => inlineSchemaRefs(i, byName, inlineNames, stack)),
        ...(node.rest ? { rest: inlineSchemaRefs(node.rest, byName, inlineNames, stack) } : {}),
      };
    case "object":
      return {
        ...node,
        properties: Object.fromEntries(
          Object.entries(node.properties).map(([k, v]) => [k, inlineSchemaRefs(v, byName, inlineNames, stack)]),
        ),
        additionalProperties:
          typeof node.additionalProperties === "object"
            ? inlineSchemaRefs(node.additionalProperties, byName, inlineNames, stack)
            : node.additionalProperties,
      };
    case "union":
    case "intersection":
      return {
        ...node,
        members: node.members.map((m) => inlineSchemaRefs(m, byName, inlineNames, stack)),
      };
    case "not":
      return { ...node, schema: inlineSchemaRefs(node.schema, byName, inlineNames, stack) };
    case "record":
      return {
        ...node,
        key: inlineSchemaRefs(node.key, byName, inlineNames, stack),
        value: inlineSchemaRefs(node.value, byName, inlineNames, stack),
      };
    default:
      return node;
  }
};

const builtin = (name: string) => name === "Partial" || name === "Record";

export const collectEndpointSchemaNodes = (
  endpoints: Array<{
    parameters?: Record<string, SchemaNode | undefined>;
    responses?: Record<string, SchemaNode>;
    responseHeaders?: Record<string, SchemaNode>;
  }>,
): SchemaNode[] => {
  const nodes: SchemaNode[] = [];
  for (const ep of endpoints) {
    if (ep.parameters) {
      for (const n of Object.values(ep.parameters)) if (n) nodes.push(n);
    }
    if (ep.responses) nodes.push(...Object.values(ep.responses));
    if (ep.responseHeaders) nodes.push(...Object.values(ep.responseHeaders));
  }
  return nodes;
};

export const prepareSchemaNaming = (
  refs: RefResolver,
  endpointList: Endpoint[],
  keptSchemaNames: Set<string> | undefined,
  options: SchemaNamingOptions,
): { namedSchemas: NamedSchemaEntry[]; endpointList: Endpoint[] } => {
  const allNamed = refs
    .getOrderedSchemas()
    .filter(([, infos]) => infos?.name && infos.kind === "schemas")
    .filter(([, infos]) => shouldEmitSchema(keptSchemaNames, infos.normalized))
    .map(([node, infos]) => ({ name: infos.normalized, ref: infos.ref, node }));

  const endpointNodes = collectEndpointSchemaNodes(endpointList);
  const { emitNamed, inlineNames } = resolveNamedSchemasToEmit(allNamed, endpointNodes, options);

  if (inlineNames.size === 0) {
    return { namedSchemas: emitNamed, endpointList };
  }

  const byName = new Map(allNamed.map((e) => [e.name, e.node]));
  // Also inline inside remaining named schemas
  const namedSchemas = emitNamed.map((e) => ({
    ...e,
    node: inlineSchemaRefs(e.node, byName, inlineNames),
  }));

  const mapParams = (params: Endpoint["parameters"]): Endpoint["parameters"] => {
    if (!params) return params;
    const next: NonNullable<Endpoint["parameters"]> = {};
    for (const key of ["query", "path", "header", "body"] as const) {
      const n = params[key];
      if (n) next[key] = inlineSchemaRefs(n, byName, inlineNames);
    }
    return next;
  };

  const rewritten = endpointList.map((ep) => ({
    ...ep,
    parameters: mapParams(ep.parameters),
    responses: ep.responses
      ? Object.fromEntries(Object.entries(ep.responses).map(([k, v]) => [k, inlineSchemaRefs(v, byName, inlineNames)]))
      : ep.responses,
    responseHeaders: ep.responseHeaders
      ? Object.fromEntries(
          Object.entries(ep.responseHeaders).map(([k, v]) => [k, inlineSchemaRefs(v, byName, inlineNames)]),
        )
      : ep.responseHeaders,
  }));

  return { namedSchemas, endpointList: rewritten };
};
