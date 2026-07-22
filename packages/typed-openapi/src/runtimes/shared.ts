import type {
  LiteralValue,
  SchemaMeta,
  SchemaNode,
  StringConstraints,
  NumberConstraints,
  ArrayConstraints,
} from "../schema-ir/types.ts";
import { canEmitAsInterface, emitNamedInterface, irToTs, buildIrToTsOptions } from "../schema-ir/ir-to-ts.ts";
import type { EmitCtx } from "./types.ts";
import type { ValidationPolicy } from "./validation.ts";

export const quote = (value: string) => JSON.stringify(value);

/** Runtime expression for OAS binary/byte bodies (Blob in browser/Node 18+). */
export const emitBinaryBlobCheck = (
  lib: "zod" | "zod3" | "valibot" | "effect" | "effect3" | "arktype" | "typebox" | "typia",
): string => {
  switch (lib) {
    case "zod":
    case "zod3":
      return `z.custom<Blob>((v) => typeof Blob !== "undefined" && v instanceof Blob)`;
    case "valibot":
      return `v.custom<Blob>((v) => typeof Blob !== "undefined" && v instanceof Blob)`;
    case "effect":
      return `Schema.declare((v): v is Blob => typeof Blob !== "undefined" && v instanceof Blob)`;
    case "effect3":
      return `S.declare((v): v is Blob => typeof Blob !== "undefined" && v instanceof Blob)`;
    case "arktype":
      return `type.instanceOf(Blob)`;
    case "typebox":
      return `Type.Unsafe<Blob>({ type: "string", format: "binary" })`;
    case "typia":
      return `typia.createIs<Blob>()`;
    default:
      return `z.unknown()`;
  }
};

/** SSE / streaming response body — usually skipped at validate-time; still emit a weak check. */
export const emitStreamCheck = (
  lib: "zod" | "zod3" | "valibot" | "effect" | "effect3" | "arktype" | "typebox" | "typia",
): string => {
  switch (lib) {
    case "zod":
    case "zod3":
      return `z.custom<ReadableStream<Uint8Array>>((v) => typeof ReadableStream !== "undefined" && v instanceof ReadableStream)`;
    case "valibot":
      return `v.custom<ReadableStream<Uint8Array>>((v) => typeof ReadableStream !== "undefined" && v instanceof ReadableStream)`;
    case "effect":
      return `Schema.declare((v): v is ReadableStream<Uint8Array> => typeof ReadableStream !== "undefined" && v instanceof ReadableStream)`;
    case "effect3":
      return `S.declare((v): v is ReadableStream<Uint8Array> => typeof ReadableStream !== "undefined" && v instanceof ReadableStream)`;
    case "arktype":
      return `type.instanceOf(ReadableStream)`;
    case "typebox":
      return `Type.Unsafe<ReadableStream<Uint8Array>>({ type: "object", description: "ReadableStream" })`;
    case "typia":
      return `typia.createIs<ReadableStream<Uint8Array>>()`;
    default:
      return `z.unknown()`;
  }
};

/** Quote object keys that are not valid JS identifiers */
export const objectKey = (key: string): string => {
  if (/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(key)) return key;
  return quote(key);
};

export const literalValue = (value: LiteralValue): string => {
  if (value === null) return "null";
  if (typeof value === "string") return quote(value);
  return String(value);
};

/** Serialize OpenAPI `default` for embedding in generated runtime code. */
export const jsLiteral = (value: unknown): string | undefined => {
  if (value === undefined) return undefined;
  if (value === null || typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    return literalValue(value);
  }
  try {
    return JSON.stringify(value);
  } catch {
    return undefined;
  }
};

/** Zod / Zod3: append `.default(...)` when schema meta carries a default. */
export const withZodDefault = (expr: string, meta: SchemaMeta): string => {
  const lit = jsLiteral(meta.default);
  if (lit === undefined) return expr;
  return `${expr}.default(${lit})`;
};

/** Valibot: wrap with `v.optional(schema, default)` when meta has a default. */
export const withValibotDefault = (expr: string, meta: SchemaMeta): string => {
  const lit = jsLiteral(meta.default);
  if (lit === undefined) return expr;
  return `v.optional(${expr}, ${lit})`;
};

/** Turn a schema expr + default literal into a stable helper name, e.g. `Boolean_default_false`. */
export const effectDefaultHelperName = (baseExpr: string, lit: string): string => {
  const simple = baseExpr.match(/^(?:Schema|S)\.([A-Za-z][A-Za-z0-9]*)$/);
  let base = simple?.[1];
  if (!base) {
    if (/\.NullOr\(/.test(baseExpr) || /NullOr\(/.test(baseExpr)) base = "NullOr";
    else if (/\.Union\(/.test(baseExpr) || /Union\(/.test(baseExpr)) base = "Union";
    else if (/\.Array\(/.test(baseExpr) || /Array\(/.test(baseExpr)) base = "Array";
    else if (/\.Literal\(/.test(baseExpr) || /Literal\(/.test(baseExpr)) base = "Literal";
    else base = "Schema";
  }
  const defPart = lit
    .replace(/-/g, "neg_")
    .replace(/[^A-Za-z0-9]+/g, "_")
    .replace(/^_|_$/g, "")
    .slice(0, 40);
  const name = `${base}_default_${defPart || "value"}`;
  return /^[A-Za-z_]/.test(name) ? name : `_${name}`;
};

/**
 * Effect Schema: intern a reusable defaulted schema and return its name.
 * - v3 (`effect3`): `optionalWith` (prop) / `transform(UndefinedOr)` (value)
 * - v4 (`effect`): `withDecodingDefaultType(Effect.succeed(...))` for both
 */
export const internEffectDefault = (
  baseExpr: string,
  meta: SchemaMeta,
  schemaNs: string,
  ctx: EmitCtx,
  kind: "prop" | "value",
  api: "v3" | "v4" = "v3",
): string | undefined => {
  const lit = jsLiteral(meta.default);
  if (lit === undefined) return undefined;
  const map = ctx.internedDefaults ?? (ctx.internedDefaults = new Map());
  const key = `${api}:${kind}:${baseExpr}:${lit}`;
  const existing = map.get(key);
  if (existing) return existing.name;

  let name = effectDefaultHelperName(baseExpr, lit);
  if (kind === "prop") name = `${name}_prop`;
  // Disambiguate collisions across different base exprs that sanitize the same
  if ([...map.values()].some((e) => e.name === name)) {
    name = `${name}_${map.size}`;
  }

  const decl =
    api === "v4"
      ? `const ${name} = ${baseExpr}.pipe(${schemaNs}.withDecodingDefaultType(Effect.succeed(${lit})));`
      : kind === "prop"
        ? `const ${name} = ${schemaNs}.optionalWith(${baseExpr}, { default: () => ${lit} });`
        : `const ${name} = ${schemaNs}.transform(${schemaNs}.UndefinedOr(${baseExpr}), ${baseExpr}, { strict: true, decode: (i) => (i === undefined ? ${lit} : i), encode: (a) => a });`;

  map.set(key, { name, decl });
  return name;
};

/** Emit interned default helper declarations (before component schemas). */
export const renderInternedDefaults = (ctx: EmitCtx): string => {
  const map = ctx.internedDefaults;
  if (!map?.size) return "";
  return [...map.values()].map((e) => e.decl).join("\n") + "\n\n";
};

/** ArkType object-property string def with default (`"string = \"hi\""`). */
export const arktypeDefaultDef = (stringDef: string, meta: SchemaMeta): string | undefined => {
  const lit = jsLiteral(meta.default);
  if (lit === undefined) return undefined;
  // stringDef is a quoted arktype def like `"string"` or `"number.integer"`
  if (!(stringDef.startsWith('"') && stringDef.endsWith('"'))) return undefined;
  const inner = stringDef.slice(1, -1);
  // Reject morphs / pipes / nested quotes — defaults only on plain keyword defs.
  // `.parse` morphs encode as string, so a numeric default fails typecheck.
  if (inner.includes(")") || inner.includes(".pipe") || inner.includes(".parse") || inner.includes('"')) {
    return undefined;
  }
  return quote(`${inner} = ${lit}`);
};

export const isNullOr = (node: SchemaNode): SchemaNode | undefined => {
  if (node.kind !== "union" || node.members.length !== 2) return undefined;
  const nullMember = node.members.find((m) => m.kind === "null");
  const other = node.members.find((m) => m.kind !== "null");
  if (nullMember && other) return other;
  return undefined;
};

export type AppliedStringConstraints = {
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  format?: string;
};

export type AppliedNumberConstraints = {
  minimum?: number;
  maximum?: number;
  exclusiveMinimum?: number;
  exclusiveMaximum?: number;
  multipleOf?: number;
};

export type AppliedArrayConstraints = {
  minItems?: number;
  maxItems?: number;
  uniqueItems?: boolean;
};

export type AppliedObjectConstraints = {
  minProperties?: number;
  maxProperties?: number;
};

export const applyStringConstraints = (
  constraints: StringConstraints,
  policy: ValidationPolicy,
): AppliedStringConstraints => {
  const out: AppliedStringConstraints = {};
  if (policy.formats && constraints.format) out.format = constraints.format;
  // contentEncoding base64 ≈ OpenAPI format: byte
  if (policy.formats && !out.format && constraints.contentEncoding === "base64") {
    out.format = "byte";
  }
  if (policy.stringConstraints) {
    if (constraints.minLength !== undefined) out.minLength = constraints.minLength;
    if (constraints.maxLength !== undefined) out.maxLength = constraints.maxLength;
    if (constraints.pattern !== undefined) out.pattern = constraints.pattern;
  }
  return out;
};

export const applyNumberConstraints = (
  constraints: NumberConstraints,
  policy: ValidationPolicy,
): AppliedNumberConstraints => {
  if (!policy.numberConstraints) return {};
  const out: AppliedNumberConstraints = {};
  if (constraints.minimum !== undefined) out.minimum = constraints.minimum;
  if (constraints.maximum !== undefined) out.maximum = constraints.maximum;
  if (typeof constraints.exclusiveMinimum === "number") out.exclusiveMinimum = constraints.exclusiveMinimum;
  if (typeof constraints.exclusiveMaximum === "number") out.exclusiveMaximum = constraints.exclusiveMaximum;
  // OAS 3.0 boolean exclusiveMinimum: bump minimum
  if (constraints.exclusiveMinimum === true && constraints.minimum !== undefined) {
    out.exclusiveMinimum = constraints.minimum;
    delete out.minimum;
  }
  if (constraints.exclusiveMaximum === true && constraints.maximum !== undefined) {
    out.exclusiveMaximum = constraints.maximum;
    delete out.maximum;
  }
  if (constraints.multipleOf !== undefined) out.multipleOf = constraints.multipleOf;
  return out;
};

export const applyArrayConstraints = (
  constraints: ArrayConstraints,
  policy: ValidationPolicy,
): AppliedArrayConstraints => {
  if (!policy.arrayConstraints) return {};
  const out: AppliedArrayConstraints = {};
  if (constraints.minItems !== undefined) out.minItems = constraints.minItems;
  if (constraints.maxItems !== undefined) out.maxItems = constraints.maxItems;
  if (constraints.uniqueItems) out.uniqueItems = true;
  return out;
};

export const applyObjectConstraints = (
  constraints: { minProperties?: number; maxProperties?: number },
  policy: ValidationPolicy,
): AppliedObjectConstraints => {
  if (!policy.objectConstraints) return {};
  const out: AppliedObjectConstraints = {};
  if (constraints.minProperties !== undefined) out.minProperties = constraints.minProperties;
  if (constraints.maxProperties !== undefined) out.maxProperties = constraints.maxProperties;
  return out;
};

export const objectProps = (
  node: Extract<SchemaNode, { kind: "object" }>,
  emit: (n: SchemaNode, ctx: EmitCtx) => string,
  ctx: EmitCtx,
): { key: string; optional: boolean; expr: string; meta: SchemaMeta }[] => {
  return Object.entries(node.properties).map(([key, prop]) => ({
    key,
    // When `partial` is true, adapters apply `.partial()` / equivalent on the whole object.
    optional: node.partial ? false : !node.required.includes(key),
    expr: emit(prop, ctx),
    meta: prop.meta,
  }));
};

/** Detect component names that appear in their own dependency closure */
export const findRecursiveSchemaNames = (schemas: Array<{ name: string; node: SchemaNode }>): Set<string> => {
  const byName = new Map(schemas.map((s) => [s.name, s.node]));
  const recursive = new Set<string>();

  const refsIn = (node: SchemaNode, into: Set<string>) => {
    switch (node.kind) {
      case "ref":
        into.add(node.name);
        node.generics?.forEach((g) => refsIn(g, into));
        break;
      case "array":
        refsIn(node.items, into);
        break;
      case "tuple":
        node.items.forEach((i) => refsIn(i, into));
        if (node.rest) refsIn(node.rest, into);
        break;
      case "object":
        Object.values(node.properties).forEach((p) => refsIn(p, into));
        if (typeof node.additionalProperties === "object") refsIn(node.additionalProperties, into);
        break;
      case "union":
      case "intersection":
        node.members.forEach((m) => refsIn(m, into));
        break;
      case "not":
        refsIn(node.schema, into);
        break;
      case "record":
        refsIn(node.key, into);
        refsIn(node.value, into);
        break;
      default:
        break;
    }
  };

  for (const { name, node } of schemas) {
    const deps = new Set<string>();
    refsIn(node, deps);
    if (deps.has(name)) {
      recursive.add(name);
      continue;
    }
    // indirect: walk closure
    const seen = new Set<string>();
    const stack = [...deps];
    while (stack.length) {
      const dep = stack.pop()!;
      if (dep === name) {
        recursive.add(name);
        break;
      }
      if (seen.has(dep)) continue;
      seen.add(dep);
      const depNode = byName.get(dep);
      if (!depNode) continue;
      const nested = new Set<string>();
      refsIn(depNode, nested);
      nested.forEach((n) => stack.push(n));
    }
  }

  return recursive;
};

/** `#/components/schemas/Dog` → `Dog`; bare names pass through. */
export const schemaNameFromRef = (refOrName: string): string => {
  const trimmed = refOrName.trim();
  const parts = trimmed.split("/");
  return parts[parts.length - 1] || trimmed;
};

/**
 * Match a discriminator mapping target to a union member (by ref name).
 * Inline object members are matched when mapping value equals schema title — rare; prefer refs.
 */
export const findMappedUnionMember = (members: SchemaNode[], mappingTarget: string): SchemaNode | undefined => {
  const want = schemaNameFromRef(mappingTarget);
  return members.find((m) => m.kind === "ref" && m.name === want);
};

/**
 * Peel `null` / `A | null` members out of a union so Zod `discriminatedUnion` (and similar)
 * only sees object members. Caller wraps with `z.union([…, z.null()])` when nullable.
 */
export const partitionNullUnionMembers = (members: SchemaNode[]): { concrete: SchemaNode[]; nullable: boolean } => {
  let nullable = false;
  const concrete: SchemaNode[] = [];
  for (const member of members) {
    if (member.kind === "null") {
      nullable = true;
      continue;
    }
    const inner = isNullOr(member);
    if (inner) {
      nullable = true;
      concrete.push(inner);
      continue;
    }
    concrete.push(member);
  }
  return { concrete, nullable };
};

/**
 * Explicit TS type/interface for a named schema.
 * Used for recursive lazy/suspend schemas so infer is not circular `any` (TS7022/7024).
 */
export const emitExplicitSchemaTypeDecl = (
  name: string,
  node: SchemaNode,
  ctx: Pick<EmitCtx, "transformDates" | "transformBigInt">,
  options?: { readonlyArrays?: boolean },
): string => {
  const irOpts = buildIrToTsOptions({
    prefixRefsWithSchemas: false,
    transformDates: ctx.transformDates,
    transformBigInt: ctx.transformBigInt,
    readonlyArrays: options?.readonlyArrays,
  });
  return canEmitAsInterface(node)
    ? emitNamedInterface(name, node, irOpts)
    : `export type ${name} = ${irToTs(node, irOpts)}`;
};
