export type SchemaMeta = {
  description?: string;
  title?: string;
  deprecated?: boolean;
  default?: unknown;
  examples?: unknown[];
  nullable?: boolean;
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
      constraints: ObjectConstraints;
      meta: SchemaMeta;
      /** When true, emit as Partial&lt;{...}&gt; / all props optional */
      partial: boolean;
    }
  | {
      kind: "union";
      members: SchemaNode[];
      meta: SchemaMeta;
      discriminator?: { propertyName: string; mapping?: Record<string, string> };
    }
  | { kind: "intersection"; members: SchemaNode[]; meta: SchemaMeta }
  | { kind: "not"; schema: SchemaNode; meta: SchemaMeta }
  | { kind: "ref"; name: string; generics?: SchemaNode[]; meta: SchemaMeta }
  | { kind: "record"; key: SchemaNode; value: SchemaNode; meta: SchemaMeta }
  | { kind: "unknown"; meta: SchemaMeta }
  | { kind: "any"; meta: SchemaMeta }
  | { kind: "never"; meta: SchemaMeta };

export type SchemaIrConvertContext = {
  getRefName: (ref: string) => string;
};
