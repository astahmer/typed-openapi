import type { LibSchemaObject, SchemaTransformResult } from "../schema-transform.ts";

export type SchemaMeta = {
  description?: string;
  title?: string;
  deprecated?: boolean;
  default?: unknown;
  examples?: unknown[];
  nullable?: boolean;
  /** OAS readOnly — response-only; strip from request bodies */
  readOnly?: boolean;
  /** OAS writeOnly — request-only; strip from responses */
  writeOnly?: boolean;
};

export type StringConstraints = {
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  format?: string;
  contentEncoding?: string;
  contentMediaType?: string;
};

export type NumberConstraints = {
  minimum?: number;
  maximum?: number;
  exclusiveMinimum?: number | boolean;
  exclusiveMaximum?: number | boolean;
  multipleOf?: number;
  /** OAS format e.g. int32 / int64 */
  format?: string;
};

export type ArrayConstraints = {
  minItems?: number;
  maxItems?: number;
  uniqueItems?: boolean;
};

export type ObjectConstraints = {
  minProperties?: number;
  maxProperties?: number;
};

export type LiteralValue = string | number | boolean | null;

export type SchemaNode =
  | { kind: "string"; constraints: StringConstraints; meta: SchemaMeta }
  | { kind: "number"; integer: boolean; constraints: NumberConstraints; meta: SchemaMeta }
  | { kind: "boolean"; meta: SchemaMeta }
  | { kind: "null"; meta: SchemaMeta }
  | { kind: "literal"; value: LiteralValue; meta: SchemaMeta }
  | { kind: "enum"; values: LiteralValue[]; meta: SchemaMeta }
  | { kind: "array"; items: SchemaNode; constraints: ArrayConstraints; meta: SchemaMeta }
  | { kind: "tuple"; items: SchemaNode[]; rest?: SchemaNode | undefined; meta: SchemaMeta }
  | {
      kind: "object";
      properties: Record<string, SchemaNode>;
      required: string[];
      additionalProperties: boolean | SchemaNode;
      /** JSON Schema regex-scoped properties, validated before additionalProperties. */
      patternProperties?: Record<string, SchemaNode>;
      constraints: ObjectConstraints;
      meta: SchemaMeta;
      /** When true, emit as Partial&lt;{...}&gt; / all props optional */
      partial: boolean;
    }
  | {
      kind: "union";
      members: SchemaNode[];
      meta: SchemaMeta;
      /** True for OpenAPI oneOf: exactly one member must accept the value. */
      exclusive?: boolean;
      discriminator?: { propertyName: string; mapping?: Record<string, string> };
    }
  | { kind: "intersection"; members: SchemaNode[]; meta: SchemaMeta }
  | { kind: "not"; schema: SchemaNode; meta: SchemaMeta }
  | { kind: "ref"; name: string; generics?: SchemaNode[]; meta: SchemaMeta }
  | { kind: "record"; key: SchemaNode; value: SchemaNode; meta: SchemaMeta }
  /** OAS `type: string, format: binary|byte` — typed as Blob for uploads/downloads */
  | { kind: "binary"; meta: SchemaMeta }
  /** OAS `text/event-stream` response body — typed as ReadableStream */
  | { kind: "stream"; meta: SchemaMeta }
  | { kind: "unknown"; meta: SchemaMeta }
  | { kind: "any"; meta: SchemaMeta }
  | { kind: "never"; meta: SchemaMeta }
  /**
   * User-supplied transform (`transformSchema`): replaces the default type/runtime emission
   * for a SchemaObject with custom TypeScript (`type`) and/or a runtime validator expression (`runtime`).
   * When `type` is omitted, the default IR node is kept as `fallback` and rendered instead.
   */
  | {
      kind: "custom";
      type?: string | undefined;
      runtime?: string | undefined;
      fallback?: SchemaNode;
      meta: SchemaMeta;
    };

export type SchemaIrConvertContext = {
  getRefName: (ref: string) => string;
  /** User-supplied schema transform; when it returns a result, the SchemaObject becomes a `custom` node. */
  transformSchema?: (
    schema: LibSchemaObject,
    ctx: { path: string[]; ref?: string },
  ) => SchemaTransformResult | undefined;
  /** JSON-pointer-ish path of the SchemaObject being converted (for transform context / debugging). */
  path?: string[];
  /** `$ref` of the SchemaObject being converted, when it's a named component. */
  ref?: string;
};
