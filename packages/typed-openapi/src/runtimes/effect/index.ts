import type { SchemaNode } from "../../schema-ir/types.ts";
import {
  applyArrayConstraints,
  applyNumberConstraints,
  applyObjectConstraints,
  applyStringConstraints,
  emitBinaryBlobCheck,
  emitExplicitSchemaTypeDecl,
  emitStreamCheck,
  findMappedUnionMember,
  internEffectDefault,
  isNullOr,
  jsLiteral,
  literalValue,
  objectKey,
  objectProps,
  quote,
} from "../shared.ts";
import type { EmitCtx, RuntimeAdapter } from "../types.ts";

const S = "Schema";

/** Effect Schema v4 refinements use `.check(Schema.is*)`. */
const checkFilters = (base: string, filters: string[]): string => {
  if (!filters.length) return base;
  return `${base}.check(${filters.join(", ")})`;
};

const emitString = (node: Extract<SchemaNode, { kind: "string" }>, ctx: EmitCtx): string => {
  const c = applyStringConstraints(node.constraints, ctx.validation);
  const filters: string[] = [];
  let base = `${S}.String`;
  if (c.format === "uuid") {
    filters.push(`${S}.isUUID()`);
  } else if (c.format === "email") {
    filters.push(`${S}.isPattern(/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/)`);
  }
  // uri/url stay as String so OpenAPI patterns/lengths still typecheck (URLFromString is URL).
  if (c.minLength !== undefined) filters.push(`${S}.isMinLength(${c.minLength})`);
  if (c.maxLength !== undefined) filters.push(`${S}.isMaxLength(${c.maxLength})`);
  if (c.pattern !== undefined) filters.push(`${S}.isPattern(new RegExp(${quote(c.pattern)}))`);
  let expr = checkFilters(base, filters);
  if (ctx.transformDates && (node.constraints.format === "date-time" || node.constraints.format === "date")) {
    expr = `${expr}.pipe(${S}.decodeTo(${S}.Date, SchemaTransformation.transform({ decode: (s) => { const d = new Date(s); if (Number.isNaN(d.getTime())) throw new Error("Invalid Date"); return d; }, encode: (d) => d.toISOString() })))`;
  }
  return expr;
};

const emitNumber = (node: Extract<SchemaNode, { kind: "number" }>, ctx: EmitCtx): string => {
  if (ctx.transformBigInt && node.constraints.format === "int64") {
    return `${S}.Union([${S}.BigInt, ${S}.Number, ${S}.String]).pipe(${S}.decodeTo(${S}.BigInt, SchemaTransformation.transform({ decode: (x) => BigInt(x as string | number | bigint), encode: (a) => a })))`;
  }
  const c = applyNumberConstraints(node.constraints, ctx.validation);
  const filters: string[] = [];
  if (node.integer && ctx.coercePrimitives) filters.push(`${S}.isInt()`);
  if (c.minimum !== undefined) filters.push(`${S}.isGreaterThanOrEqualTo(${c.minimum})`);
  if (c.maximum !== undefined) filters.push(`${S}.isLessThanOrEqualTo(${c.maximum})`);
  if (c.exclusiveMinimum !== undefined) filters.push(`${S}.isGreaterThan(${c.exclusiveMinimum})`);
  if (c.exclusiveMaximum !== undefined) filters.push(`${S}.isLessThan(${c.exclusiveMaximum})`);
  if (c.multipleOf !== undefined) filters.push(`${S}.isMultipleOf(${c.multipleOf})`);
  const base = ctx.coercePrimitives ? `${S}.NumberFromString` : node.integer ? `${S}.Int` : `${S}.Number`;
  return checkFilters(base, filters);
};

/** Effect Schema v4 Record is positional `(key, value)`. */
const emitRecord = (key: string, value: string) => `${S}.Record(${key}, ${value})`;

/** Coerce query/path booleans from string/number (BooleanFromString removed in v4). */
const emitBooleanCoerce = () =>
  `${S}.Union([${S}.Boolean, ${S}.String, ${S}.Number]).pipe(${S}.decodeTo(${S}.Boolean, SchemaTransformation.transform({ decode: (x) => x === true || x === "true" || x === 1 || x === "1", encode: (a) => a })))`;

const emitNodeInner = (node: SchemaNode, ctx: EmitCtx): string => {
  const nullInner = isNullOr(node);
  if (nullInner) return `${S}.NullOr(${emitNode(nullInner, ctx)})`;

  switch (node.kind) {
    case "string":
      return emitString(node, ctx);
    case "binary":
      return emitBinaryBlobCheck("effect");
    case "stream":
      return emitStreamCheck("effect");
    case "number":
      return emitNumber(node, ctx);
    case "boolean":
      return ctx.coercePrimitives ? emitBooleanCoerce() : `${S}.Boolean`;
    case "null":
      return `${S}.Null`;
    case "unknown":
      return `${S}.Unknown`;
    case "any":
      return `${S}.Any`;
    case "never":
      return `${S}.Never`;
    case "literal":
      return `${S}.Literal(${literalValue(node.value)})`;
    case "enum":
      return `${S}.Literals([${node.values.map((v) => literalValue(v)).join(", ")}])`;
    case "array": {
      const c = applyArrayConstraints(node.constraints, ctx.validation);
      let expr = `${S}.Array(${emitNode(node.items, ctx)})`;
      const filters: string[] = [];
      if (c.minItems !== undefined) filters.push(`${S}.isMinLength(${c.minItems})`);
      if (c.maxItems !== undefined) filters.push(`${S}.isMaxLength(${c.maxItems})`);
      if (c.uniqueItems) filters.push(`${S}.isUnique()`);
      return checkFilters(expr, filters);
    }
    case "tuple": {
      const items = node.items.map((i) => emitNode(i, ctx)).join(", ");
      if (node.rest) return `${S}.Tuple([${items}], ${emitNode(node.rest, ctx)})`;
      return `${S}.Tuple([${items}])`;
    }
    case "union": {
      if (node.discriminator?.propertyName) {
        const prop = node.discriminator.propertyName;
        const mapping = node.discriminator.mapping;
        if (mapping && Object.keys(mapping).length > 0) {
          const members = Object.entries(mapping).flatMap(([value, target]) => {
            const member = findMappedUnionMember(node.members, target);
            if (!member) return [];
            const base = emitNode(member, ctx);
            return [`${S}.extend(${base}, ${S}.Struct({ ${objectKey(prop)}: ${S}.Literal(${quote(value)}) }))`];
          });
          if (members.length > 0) {
            return `${S}.Union([${members.join(", ")}])`;
          }
        }
      }
      return `${S}.Union([${node.members.map((m) => emitNode(m, ctx)).join(", ")}])`;
    }
    case "intersection": {
      const nonNull = node.members.filter((m) => m.kind !== "null").map((m) => isNullOr(m) ?? m);
      // mapFields(Struct.assign) fails on overlapping keys with incompatible property
      // schemas (common OpenAPI allOf). Merge object shapes instead.
      if (nonNull.length > 0 && nonNull.every((m) => m.kind === "object")) {
        const objs = nonNull as Extract<SchemaNode, { kind: "object" }>[];
        const properties: Record<string, SchemaNode> = {};
        for (const obj of objs) {
          for (const [key, prop] of Object.entries(obj.properties)) {
            const existing = properties[key];
            if (!existing) {
              properties[key] = prop;
            } else if (existing.kind === "object" && prop.kind === "object") {
              properties[key] = {
                kind: "intersection",
                members: [existing, prop],
                meta: prop.meta,
              };
            } else {
              properties[key] = {
                kind: "intersection",
                members: [existing, prop],
                meta: prop.meta,
              };
            }
          }
        }
        return emitNode(
          {
            kind: "object",
            properties,
            required: [...new Set(objs.flatMap((o) => o.required))],
            partial: objs.every((o) => o.partial),
            additionalProperties: objs.some((o) => o.additionalProperties === true)
              ? true
              : (objs.map((o) => o.additionalProperties).find((a) => typeof a === "object") ?? false),
            constraints: {},
            meta: node.meta,
          },
          ctx,
        );
      }
      if (nonNull.length === 0) return `${S}.Null`;
      return nonNull.slice(1).reduce(
        (acc, member) => {
          if (member.kind === "record") {
            return `${S}.StructWithRest(${acc}, [${emitRecord(emitNode(member.key, ctx), emitNode(member.value, ctx))}])`;
          }
          if (member.kind === "object" && member.additionalProperties && Object.keys(member.properties).length === 0) {
            const value =
              member.additionalProperties === true ? `${S}.Unknown` : emitNode(member.additionalProperties, ctx);
            return `${S}.StructWithRest(${acc}, [${emitRecord(`${S}.String`, value)}])`;
          }
          const cur = emitNode(member, ctx);
          return `${acc}.mapFields(Struct.assign((${cur}).fields))`;
        },
        emitNode(nonNull[0]!, ctx),
      );
    }
    case "not": {
      const inner = emitNode(node.schema, ctx);
      return `${S}.Unknown.check(${S}.makeFilter((data) => !${S}.is(${inner})(data)))`;
    }
    case "ref": {
      if (node.name === "Partial" && node.generics?.[0]) {
        // Schema.partial → force optional props (avoids wrapping Transformations).
        return emitNode(node.generics[0], { ...ctx, forceOptionalProps: true });
      }
      if (node.name === "Record" && node.generics?.length === 2) {
        return emitRecord(emitNode(node.generics[0]!, ctx), emitNode(node.generics[1]!, ctx));
      }
      return node.name;
    }
    case "record":
      return emitRecord(emitNode(node.key, ctx), emitNode(node.value, ctx));
    case "object": {
      const omitCtx: EmitCtx = { ...ctx, omitDefaults: true };
      const forceOptional = Boolean(node.partial || ctx.forceOptionalProps);
      const props = objectProps(node, emitNode, omitCtx);
      const body = props
        .map(({ key, optional, expr, meta }) => {
          const lit = jsLiteral(meta.default);
          if (lit !== undefined) {
            const named = internEffectDefault(expr, meta, S, ctx, "prop", "v4");
            return `${objectKey(key)}: ${named ?? `${expr}.pipe(${S}.withDecodingDefaultType(Effect.succeed(${lit})))`}`;
          }
          return `${objectKey(key)}: ${optional || forceOptional ? `${S}.optional(${expr})` : expr}`;
        })
        .join(", ");
      let expr = `${S}.Struct({ ${body} })`;
      if (node.additionalProperties === true) {
        expr = `${S}.StructWithRest(${expr}, [${emitRecord(`${S}.String`, `${S}.Unknown`)}])`;
      } else if (typeof node.additionalProperties === "object") {
        expr = `${S}.StructWithRest(${expr}, [${emitRecord(`${S}.String`, emitNode(node.additionalProperties, ctx))}])`;
      }
      const oc = applyObjectConstraints(node.constraints, ctx.validation);
      const filters: string[] = [];
      if (oc.minProperties !== undefined) filters.push(`${S}.isMinProperties(${oc.minProperties})`);
      if (oc.maxProperties !== undefined) filters.push(`${S}.isMaxProperties(${oc.maxProperties})`);
      return checkFilters(expr, filters);
    }
    default: {
      const _e: never = node;
      return _e;
    }
  }
};

const emitNode = (node: SchemaNode, ctx: EmitCtx): string => {
  const inner = emitNodeInner(node, ctx);
  if (ctx.omitDefaults || node.meta.default === undefined) return inner;
  // Object/struct defaults are applied per-property via withDecodingDefaultType.
  if (node.kind === "object") return inner;
  return internEffectDefault(inner, node.meta, S, ctx, "value", "v4") ?? inner;
};

export const effectAdapter: RuntimeAdapter = {
  name: "effect",
  imports: () => `import { Effect, Schema, SchemaTransformation, Struct } from "effect";`,
  inferType: (expr) => `Schema.Schema.Type<typeof ${expr}>`,
  emitNode,
  wrapLazy: (_name, body) => `${S}.suspend(() => ${body})`,
  literalString: (value) => `${S}.Literal(${quote(value)})`,
  unknown: () => `${S}.Unknown`,
  never: () => `${S}.Never`,
  emitNamedSchema: (name, node, ctx) => {
    const childCtx = { ...ctx, currentSchemaName: name };
    // Named NullOr wrappers break struct field assign on $ref — keep const as the
    // inner schema and surface nullability on the exported TypeScript type instead.
    const nullInner = isNullOr(node);
    let body = emitNode(nullInner ?? node, childCtx);
    if (ctx.recursiveNames.has(name)) {
      body = `${S}.suspend(() => ${body})`;
      if (nullInner) {
        // Const stays non-null; type is Core | null without circular `typeof` infer.
        const typeDecl = emitExplicitSchemaTypeDecl(name, nullInner, ctx, { readonlyArrays: true });
        // emitExplicit declares `Name` as the core shape — widen export to include null.
        const widened = typeDecl
          .replace(`export type ${name} = `, `export type ${name}Core = `)
          .replace(`export interface ${name} `, `export interface ${name}Core `);
        return `${widened}\nexport type ${name} = ${name}Core | null;\nexport const ${name}: ${S}.Schema<${name}Core> = ${body};`;
      }
      const typeDecl = emitExplicitSchemaTypeDecl(name, node, ctx, { readonlyArrays: true });
      return `${typeDecl}\nexport const ${name}: ${S}.Schema<${name}> = ${body};`;
    }
    const typeExpr = nullInner ? `Schema.Schema.Type<typeof ${name}> | null` : `Schema.Schema.Type<typeof ${name}>`;
    return `export const ${name} = ${body};\nexport type ${name} = ${typeExpr};`;
  },
};
