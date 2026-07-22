import { wrapWithQuotesIfNeeded } from "../string-utils.ts";
import type { SchemaNode } from "./types.ts";

export type IrToTsOptions = {
  /** Prefix component refs with `Schemas.` */
  prefixRefsWithSchemas?: boolean;
  /** Render property/schema descriptions as JSDoc */
  jsdoc?: boolean;
  /** Map `format: date-time|date` strings to `Date` */
  transformDates?: boolean;
  /** Map `format: int64` integers to `bigint` */
  transformBigInt?: boolean;
  /** Emit `ReadonlyArray<…>` instead of `Array<…>` (Effect Schema compatibility). */
  readonlyArrays?: boolean;
};

/** Build IrToTsOptions without assigning explicit `undefined` (exactOptionalPropertyTypes). */
export const buildIrToTsOptions = (
  options: {
    prefixRefsWithSchemas?: boolean;
    jsdoc?: boolean;
    transformDates?: boolean | undefined;
    transformBigInt?: boolean | undefined;
    readonlyArrays?: boolean | undefined;
  } = {},
): IrToTsOptions => ({
  ...(options.prefixRefsWithSchemas !== undefined ? { prefixRefsWithSchemas: options.prefixRefsWithSchemas } : {}),
  ...(options.jsdoc !== undefined ? { jsdoc: options.jsdoc } : {}),
  ...(options.transformDates !== undefined ? { transformDates: options.transformDates } : {}),
  ...(options.transformBigInt !== undefined ? { transformBigInt: options.transformBigInt } : {}),
  ...(options.readonlyArrays !== undefined ? { readonlyArrays: options.readonlyArrays } : {}),
});

const escapeCommentText = (text: string) => text.replace(/\*\//g, "*\\/");

const renderDescriptionComment = (description: string, indent = "") => {
  const lines = description.trim().split(/\r?\n/);
  return `${indent}/**\n${lines.map((line) => `${indent} * ${escapeCommentText(line)}`).join("\n")}\n${indent} */`;
};

const indentMultiline = (value: string, indent = "  ") =>
  value.includes("\n")
    ? value
        .split("\n")
        .map((line, index) => (index === 0 ? line : `${indent}${line}`))
        .join("\n")
    : value;

const literalToTs = (value: string | number | boolean | null): string => {
  if (value === null) return "null";
  if (typeof value === "string") return JSON.stringify(value);
  return String(value);
};

export const irToTs = (node: SchemaNode, options: IrToTsOptions = {}): string => {
  const prefixRefs = options.prefixRefsWithSchemas ?? true;

  switch (node.kind) {
    case "string":
      if (options.transformDates && (node.constraints.format === "date-time" || node.constraints.format === "date")) {
        return "Date";
      }
      return "string";
    case "binary":
      return "Blob";
    case "stream":
      return "ReadableStream<Uint8Array>";
    case "number":
      if (options.transformBigInt && node.constraints.format === "int64") {
        return "bigint";
      }
      return "number";
    case "boolean":
      return "boolean";
    case "null":
      return "null";
    case "unknown":
      return "unknown";
    case "any":
      return "any";
    case "never":
      return "never";
    case "literal":
      return literalToTs(node.value);
    case "enum":
      return `(${node.values.map(literalToTs).join(" | ")})`;
    case "array":
      return options?.readonlyArrays
        ? `ReadonlyArray<${irToTs(node.items, options)}>`
        : `Array<${irToTs(node.items, options)}>`;
    case "tuple": {
      const head = node.items.map((item) => irToTs(item, options)).join(", ");
      if (node.rest) {
        const rest = options?.readonlyArrays
          ? `ReadonlyArray<${irToTs(node.rest, options)}>`
          : `Array<${irToTs(node.rest, options)}>`;
        return `[${head}, ...${rest}]`;
      }
      return `[${head}]`;
    }
    case "union":
      return `(${node.members.map((m) => irToTs(m, options)).join(" | ")})`;
    case "intersection":
      return `(${node.members.map((m) => irToTs(m, options)).join(" & ")})`;
    case "not":
      // TypeScript has no JSON-Schema `not`; keep structural assignability wide.
      return "unknown";
    case "ref": {
      if (node.generics?.length) {
        return `${node.name}<${node.generics.map((g) => irToTs(g, options)).join(", ")}>`;
      }
      if (node.name === "Partial" || node.name === "Record") return node.name;
      return prefixRefs ? `Schemas.${node.name}` : node.name;
    }
    case "record":
      return `Record<${irToTs(node.key, { ...options, prefixRefsWithSchemas: false })}, ${irToTs(node.value, options)}>`;
    case "object": {
      const entries = Object.entries(node.properties);
      const rendered = entries.map(([prop, propNode]) => {
        // When `partial`, wrap with Partial<> — do not also mark props optional.
        const optional = !node.partial && !node.required.includes(prop);
        const value = indentMultiline(irToTs(propNode, options));
        const description = options.jsdoc ? propNode.meta.description : undefined;
        return {
          description,
          line: `${wrapWithQuotesIfNeeded(prop)}${optional ? "?" : ""}: ${value};`,
        };
      });

      const shouldMultiline =
        options.jsdoc && rendered.some(({ description, line }) => description || line.includes("\n"));

      let objectBody: string;
      if (!shouldMultiline) {
        objectBody = `{ ${rendered.map(({ line }) => line.slice(0, -1)).join(", ")} }`;
      } else {
        const propsString = rendered
          .map(({ description, line }) => {
            const comment = description ? `${renderDescriptionComment(description, "  ")}\n` : "";
            return `${comment}  ${line}`;
          })
          .join("\n");
        objectBody = `{\n${propsString}\n}`;
      }

      if (node.partial) {
        return `Partial<${objectBody}>`;
      }
      if (node.additionalProperties === true) {
        return `(${objectBody} & Record<string, unknown>)`;
      }
      return objectBody;
    }
    default: {
      const _exhaustive: never = node;
      return _exhaustive;
    }
  }
};

export const renderSchemaJsdoc = (description: string | undefined) =>
  description ? `${renderDescriptionComment(description)}\n` : "";

/** Object/record shapes that can be declared as `interface` (breaks TS2456 cycles). */
export const canEmitAsInterface = (node: SchemaNode): boolean => {
  if (node.kind === "record") return true;
  if (node.kind === "object" && !node.partial && node.additionalProperties === false) return true;
  return false;
};

/**
 * Emit a named schema as `interface` when possible so circular unions/arrays can
 * reference it without illegal circular `type` aliases (TS2456).
 */
export const emitNamedInterface = (name: string, node: SchemaNode, options: IrToTsOptions = {}): string => {
  if (node.kind === "record") {
    const value = irToTs(node.value, options);
    const keyTs = irToTs(node.key, { ...options, prefixRefsWithSchemas: false });
    if (keyTs === "string") {
      return `export interface ${name} { [key: string]: ${value} }`;
    }
    return `export type ${name} = Record<${keyTs}, ${value}>`;
  }

  if (node.kind === "object") {
    const body = irToTs(node, options);
    if (body.startsWith("{") || body.startsWith("Partial<")) {
      return `export interface ${name} ${body}`;
    }
  }

  return `export type ${name} = ${irToTs(node, options)}`;
};
