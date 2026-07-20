import type { Endpoint } from "./map-openapi-endpoints.ts";
import type { RefResolver } from "./ref-resolver.ts";
import type { SchemaNode } from "./schema-ir/types.ts";

export type EndpointFilterCtx = {
  method: string;
  path: string;
  operationId?: string;
  alias: string;
  tags?: string[];
};

export type SpecFilterOptions = {
  filterEndpoints?: (ctx: EndpointFilterCtx) => boolean;
  filterSchemas?: (name: string, ref: string) => boolean;
  /** When true, drop component schemas not reachable from kept endpoints (plus schema allowlist). */
  treeShakeSchemas?: boolean;
  /** CLI: keep endpoint if any regex matches method/path/operationId/alias */
  endpointPatterns?: string[];
  /** CLI: when tree-shaking, also keep schemas whose name/ref matches any regex */
  schemaPatterns?: string[];
};

const builtinRefNames = new Set(["Partial", "Record"]);

export const collectRefNamesFromNode = (node: SchemaNode, into: Set<string> = new Set()): Set<string> => {
  switch (node.kind) {
    case "ref":
      if (!builtinRefNames.has(node.name)) into.add(node.name);
      node.generics?.forEach((g) => collectRefNamesFromNode(g, into));
      break;
    case "array":
      collectRefNamesFromNode(node.items, into);
      break;
    case "tuple":
      node.items.forEach((i) => collectRefNamesFromNode(i, into));
      if (node.rest) collectRefNamesFromNode(node.rest, into);
      break;
    case "object":
      Object.values(node.properties).forEach((p) => collectRefNamesFromNode(p, into));
      if (typeof node.additionalProperties === "object") {
        collectRefNamesFromNode(node.additionalProperties, into);
      }
      break;
    case "union":
    case "intersection":
      node.members.forEach((m) => collectRefNamesFromNode(m, into));
      break;
    case "not":
      collectRefNamesFromNode(node.schema, into);
      break;
    case "record":
      collectRefNamesFromNode(node.key, into);
      collectRefNamesFromNode(node.value, into);
      break;
    default:
      break;
  }
  return into;
};

export const collectRefNamesFromEndpoints = (endpoints: Endpoint[]): Set<string> => {
  const into = new Set<string>();
  for (const ep of endpoints) {
    if (ep.parameters) {
      for (const node of Object.values(ep.parameters)) {
        if (node) collectRefNamesFromNode(node, into);
      }
    }
    if (ep.responses) {
      for (const node of Object.values(ep.responses)) collectRefNamesFromNode(node, into);
    }
    if (ep.responseHeaders) {
      for (const node of Object.values(ep.responseHeaders)) collectRefNamesFromNode(node, into);
    }
  }
  return into;
};

const compilePatterns = (patterns: string[] | undefined): RegExp[] => (patterns ?? []).map((p) => new RegExp(p));

const matchesAny = (candidates: string[], patterns: RegExp[]): boolean => {
  if (!patterns.length) return false;
  return candidates.some((c) => patterns.some((re) => re.test(c)));
};

export const makeEndpointPredicate = (
  options: SpecFilterOptions,
): ((ctx: EndpointFilterCtx) => boolean) | undefined => {
  const patterns = compilePatterns(options.endpointPatterns);
  if (!options.filterEndpoints && !patterns.length) return undefined;

  return (ctx) => {
    if (options.filterEndpoints && !options.filterEndpoints(ctx)) return false;
    if (patterns.length) {
      const haystack = [ctx.method, ctx.path, ctx.alias, ctx.operationId ?? "", ...(ctx.tags ?? [])];
      if (!matchesAny(haystack, patterns)) return false;
    }
    return true;
  };
};

export const defaultTreeShakeSchemas = (options: SpecFilterOptions): boolean => {
  if (options.treeShakeSchemas !== undefined) return options.treeShakeSchemas;
  return Boolean(options.filterEndpoints || (options.endpointPatterns && options.endpointPatterns.length > 0));
};

export type AppliedSpecFilters = {
  endpointList: Endpoint[];
  /** Normalized schema names to emit; `undefined` means emit all component schemas */
  keptSchemaNames: Set<string> | undefined;
  treeShakeSchemas: boolean;
};

export const applySpecFilters = (
  endpointList: Endpoint[],
  refs: RefResolver,
  options: SpecFilterOptions = {},
): AppliedSpecFilters => {
  const predicate = makeEndpointPredicate(options);
  const filteredEndpoints = predicate
    ? endpointList.filter((ep) =>
        predicate({
          method: ep.method,
          path: ep.path,
          alias: ep.meta.alias,
          ...(ep.operation.operationId ? { operationId: ep.operation.operationId } : {}),
          ...(ep.operation.tags ? { tags: ep.operation.tags } : {}),
        }),
      )
    : endpointList;

  const treeShake = defaultTreeShakeSchemas(options);
  if (!treeShake) {
    return { endpointList: filteredEndpoints, keptSchemaNames: undefined, treeShakeSchemas: false };
  }

  const kept = collectRefNamesFromEndpoints(filteredEndpoints);

  // Expand transitive schema deps (by $ref → normalized name)
  const nameToRef = new Map<string, string>();
  for (const [, infos] of refs.infos) {
    if (infos.kind === "schemas") nameToRef.set(infos.normalized, infos.ref);
  }

  const expand = (name: string) => {
    const ref = nameToRef.get(name);
    if (!ref) return;
    const deps = refs.transitiveDependencies.get(ref);
    if (!deps) return;
    for (const depRef of deps) {
      const infos = refs.getInfosByRef(depRef);
      if (infos?.kind === "schemas") kept.add(infos.normalized);
    }
  };
  [...kept].forEach(expand);

  const schemaPatterns = compilePatterns(options.schemaPatterns);
  for (const [ref, infos] of refs.infos) {
    if (infos.kind !== "schemas") continue;
    const allowByPattern = schemaPatterns.length
      ? matchesAny([infos.normalized, infos.name, ref], schemaPatterns)
      : false;
    const allowByCb = options.filterSchemas ? options.filterSchemas(infos.normalized, ref) : false;
    if (allowByPattern || allowByCb) {
      kept.add(infos.normalized);
      expand(infos.normalized);
    }
  }

  // If filterSchemas is exclusive-style when provided alone without patterns — keep only callback true?
  // Plan: filterSchemas applied when tree-shaking as additional allowlist (OR with reachability).
  // Reachability already in `kept`; callback/patterns only add.

  return { endpointList: filteredEndpoints, keptSchemaNames: kept, treeShakeSchemas: true };
};

export const shouldEmitSchema = (keptSchemaNames: Set<string> | undefined, normalizedName: string): boolean => {
  if (!keptSchemaNames) return true;
  return keptSchemaNames.has(normalizedName);
};
