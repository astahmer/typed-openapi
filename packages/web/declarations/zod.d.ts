type Schema = ObjectSchema | ArraySchema | StringSchema | NumberSchema | IntegerSchema | BooleanSchema | NullSchema;
type _JSONSchema = boolean | JSONSchema;
type JSONSchema = {
    [k: string]: unknown;
    $schema?: "https://json-schema.org/draft/2020-12/schema" | "http://json-schema.org/draft-07/schema#" | "http://json-schema.org/draft-04/schema#";
    $id?: string;
    $anchor?: string;
    $ref?: string;
    $dynamicRef?: string;
    $dynamicAnchor?: string;
    $vocabulary?: Record<string, boolean>;
    $comment?: string;
    $defs?: Record<string, JSONSchema>;
    type?: "object" | "array" | "string" | "number" | "boolean" | "null" | "integer";
    additionalItems?: _JSONSchema;
    unevaluatedItems?: _JSONSchema;
    prefixItems?: _JSONSchema[];
    items?: _JSONSchema | _JSONSchema[];
    contains?: _JSONSchema;
    additionalProperties?: _JSONSchema;
    unevaluatedProperties?: _JSONSchema;
    properties?: Record<string, _JSONSchema>;
    patternProperties?: Record<string, _JSONSchema>;
    dependentSchemas?: Record<string, _JSONSchema>;
    propertyNames?: _JSONSchema;
    if?: _JSONSchema;
    then?: _JSONSchema;
    else?: _JSONSchema;
    allOf?: JSONSchema[];
    anyOf?: JSONSchema[];
    oneOf?: JSONSchema[];
    not?: _JSONSchema;
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number | boolean;
    minimum?: number;
    exclusiveMinimum?: number | boolean;
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    maxItems?: number;
    minItems?: number;
    uniqueItems?: boolean;
    maxContains?: number;
    minContains?: number;
    maxProperties?: number;
    minProperties?: number;
    required?: string[];
    dependentRequired?: Record<string, string[]>;
    enum?: Array<string | number | boolean | null>;
    const?: string | number | boolean | null;
    id?: string;
    title?: string;
    description?: string;
    default?: unknown;
    deprecated?: boolean;
    readOnly?: boolean;
    writeOnly?: boolean;
    nullable?: boolean;
    examples?: unknown[];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    contentSchema?: JSONSchema;
    _prefault?: unknown;
};
type BaseSchema = JSONSchema;
interface ObjectSchema extends JSONSchema {
    type: "object";
}
interface ArraySchema extends JSONSchema {
    type: "array";
}
interface StringSchema extends JSONSchema {
    type: "string";
}
interface NumberSchema extends JSONSchema {
    type: "number";
}
interface IntegerSchema extends JSONSchema {
    type: "integer";
}
interface BooleanSchema extends JSONSchema {
    type: "boolean";
}
interface NullSchema extends JSONSchema {
    type: "null";
}

type jsonSchema_d_ArraySchema = ArraySchema;
type jsonSchema_d_BaseSchema = BaseSchema;
type jsonSchema_d_BooleanSchema = BooleanSchema;
type jsonSchema_d_IntegerSchema = IntegerSchema;
type jsonSchema_d_JSONSchema = JSONSchema;
type jsonSchema_d_NullSchema = NullSchema;
type jsonSchema_d_NumberSchema = NumberSchema;
type jsonSchema_d_ObjectSchema = ObjectSchema;
type jsonSchema_d_Schema = Schema;
type jsonSchema_d_StringSchema = StringSchema;
type jsonSchema_d__JSONSchema = _JSONSchema;
declare namespace jsonSchema_d {
  export type { jsonSchema_d_ArraySchema as ArraySchema, jsonSchema_d_BaseSchema as BaseSchema, jsonSchema_d_BooleanSchema as BooleanSchema, jsonSchema_d_IntegerSchema as IntegerSchema, jsonSchema_d_JSONSchema as JSONSchema, jsonSchema_d_NullSchema as NullSchema, jsonSchema_d_NumberSchema as NumberSchema, jsonSchema_d_ObjectSchema as ObjectSchema, jsonSchema_d_Schema as Schema, jsonSchema_d_StringSchema as StringSchema, jsonSchema_d__JSONSchema as _JSONSchema };
}

/** The Standard interface. */
interface StandardTypedV1<Input = unknown, Output = Input> {
    /** The Standard properties. */
    readonly "~standard": StandardTypedV1.Props<Input, Output>;
}
declare namespace StandardTypedV1 {
    /** The Standard properties interface. */
    interface Props<Input = unknown, Output = Input> {
        /** The version number of the standard. */
        readonly version: 1;
        /** The vendor name of the schema library. */
        readonly vendor: string;
        /** Inferred types associated with the schema. */
        readonly types?: Types<Input, Output> | undefined;
    }
    /** The Standard types interface. */
    interface Types<Input = unknown, Output = Input> {
        /** The input type of the schema. */
        readonly input: Input;
        /** The output type of the schema. */
        readonly output: Output;
    }
    /** Infers the input type of a Standard. */
    type InferInput<Schema extends StandardTypedV1> = NonNullable<Schema["~standard"]["types"]>["input"];
    /** Infers the output type of a Standard. */
    type InferOutput<Schema extends StandardTypedV1> = NonNullable<Schema["~standard"]["types"]>["output"];
}
/** The Standard Schema interface. */
interface StandardSchemaV1<Input = unknown, Output = Input> {
    /** The Standard Schema properties. */
    readonly "~standard": StandardSchemaV1.Props<Input, Output>;
}
declare namespace StandardSchemaV1 {
    /** The Standard Schema properties interface. */
    interface Props<Input = unknown, Output = Input> extends StandardTypedV1.Props<Input, Output> {
        /** Validates unknown input values. */
        readonly validate: (value: unknown, options?: StandardSchemaV1.Options | undefined) => Result<Output> | Promise<Result<Output>>;
    }
    /** The result interface of the validate function. */
    type Result<Output> = SuccessResult<Output> | FailureResult;
    /** The result interface if validation succeeds. */
    interface SuccessResult<Output> {
        /** The typed output value. */
        readonly value: Output;
        /** The absence of issues indicates success. */
        readonly issues?: undefined;
    }
    interface Options {
        /** Implicit support for additional vendor-specific parameters, if needed. */
        readonly libraryOptions?: Record<string, unknown> | undefined;
    }
    /** The result interface if validation fails. */
    interface FailureResult {
        /** The issues of failed validation. */
        readonly issues: ReadonlyArray<Issue>;
    }
    /** The issue interface of the failure output. */
    interface Issue {
        /** The error message of the issue. */
        readonly message: string;
        /** The path of the issue, if any. */
        readonly path?: ReadonlyArray<PropertyKey | PathSegment> | undefined;
    }
    /** The path segment interface of the issue. */
    interface PathSegment {
        /** The key representing a path segment. */
        readonly key: PropertyKey;
    }
    /** The Standard types interface. */
    interface Types<Input = unknown, Output = Input> extends StandardTypedV1.Types<Input, Output> {
    }
    /** Infers the input type of a Standard. */
    type InferInput<Schema extends StandardTypedV1> = StandardTypedV1.InferInput<Schema>;
    /** Infers the output type of a Standard. */
    type InferOutput<Schema extends StandardTypedV1> = StandardTypedV1.InferOutput<Schema>;
}
/** The Standard JSON Schema interface. */
interface StandardJSONSchemaV1<Input = unknown, Output = Input> {
    /** The Standard JSON Schema properties. */
    readonly "~standard": StandardJSONSchemaV1.Props<Input, Output>;
}
declare namespace StandardJSONSchemaV1 {
    /** The Standard JSON Schema properties interface. */
    interface Props<Input = unknown, Output = Input> extends StandardTypedV1.Props<Input, Output> {
        /** Methods for generating the input/output JSON Schema. */
        readonly jsonSchema: Converter;
    }
    /** The Standard JSON Schema converter interface. */
    interface Converter {
        /** Converts the input type to JSON Schema. May throw if conversion is not supported. */
        readonly input: (options: StandardJSONSchemaV1.Options) => Record<string, unknown>;
        /** Converts the output type to JSON Schema. May throw if conversion is not supported. */
        readonly output: (options: StandardJSONSchemaV1.Options) => Record<string, unknown>;
    }
    /** The target version of the generated JSON Schema.
     *
     * It is *strongly recommended* that implementers support `"draft-2020-12"` and `"draft-07"`, as they are both in wide use.
     *
     * The `"openapi-3.0"` target is intended as a standardized specifier for OpenAPI 3.0 which is a superset of JSON Schema `"draft-04"`.
     *
     * All other targets can be implemented on a best-effort basis. Libraries should throw if they don't support a specified target.
     */
    type Target = "draft-2020-12" | "draft-07" | "openapi-3.0" | ({} & string);
    /** The options for the input/output methods. */
    interface Options {
        /** Specifies the target version of the generated JSON Schema. Support for all versions is on a best-effort basis. If a given version is not supported, the library should throw. */
        readonly target: Target;
        /** Implicit support for additional vendor-specific parameters, if needed. */
        readonly libraryOptions?: Record<string, unknown> | undefined;
    }
    /** The Standard types interface. */
    interface Types<Input = unknown, Output = Input> extends StandardTypedV1.Types<Input, Output> {
    }
    /** Infers the input type of a Standard. */
    type InferInput<Schema extends StandardTypedV1> = StandardTypedV1.InferInput<Schema>;
    /** Infers the output type of a Standard. */
    type InferOutput<Schema extends StandardTypedV1> = StandardTypedV1.InferOutput<Schema>;
}
interface StandardSchemaWithJSONProps<Input = unknown, Output = Input> extends StandardSchemaV1.Props<Input, Output>, StandardJSONSchemaV1.Props<Input, Output> {
}

declare const $output: unique symbol;
type $output = typeof $output;
declare const $input: unique symbol;
type $input = typeof $input;
type $replace<Meta, S extends $ZodType> = Meta extends $output ? output<S> : Meta extends $input ? input<S> : Meta extends (infer M)[] ? $replace<M, S>[] : Meta extends (...args: infer P) => infer R ? (...args: {
    [K in keyof P]: $replace<P[K], S>;
}) => $replace<R, S> : Meta extends object ? {
    [K in keyof Meta]: $replace<Meta[K], S>;
} : Meta;
type MetadataType = object | undefined;
declare class $ZodRegistry<Meta extends MetadataType = MetadataType, Schema extends $ZodType = $ZodType> {
    _meta: Meta;
    _schema: Schema;
    _map: WeakMap<Schema, $replace<Meta, Schema>>;
    _idmap: Map<string, Schema>;
    add<S extends Schema>(schema: S, ..._meta: undefined extends Meta ? [$replace<Meta, S>?] : [$replace<Meta, S>]): this;
    clear(): this;
    remove(schema: Schema): this;
    get<S extends Schema>(schema: S): $replace<Meta, S> | undefined;
    has(schema: Schema): boolean;
}
interface JSONSchemaMeta {
    id?: string | undefined;
    title?: string | undefined;
    description?: string | undefined;
    deprecated?: boolean | undefined;
    [k: string]: unknown;
}
interface GlobalMeta extends JSONSchemaMeta {
}
declare function registry<T extends MetadataType = MetadataType, S extends $ZodType = $ZodType>(): $ZodRegistry<T, S>;
declare const globalRegistry: $ZodRegistry<GlobalMeta>;

type Processor<T extends $ZodType = $ZodType> = (schema: T, ctx: ToJSONSchemaContext, json: BaseSchema, params: ProcessParams) => void;
interface JSONSchemaGeneratorParams {
    processors: Record<string, Processor>;
    /** A registry used to look up metadata for each schema. Any schema with an `id` property will be extracted as a $def.
     *  @default globalRegistry */
    metadata?: $ZodRegistry<Record<string, any>>;
    /** The JSON Schema version to target.
     * - `"draft-2020-12"` — Default. JSON Schema Draft 2020-12
     * - `"draft-07"` — JSON Schema Draft 7
     * - `"draft-04"` — JSON Schema Draft 4
     * - `"openapi-3.0"` — OpenAPI 3.0 Schema Object */
    target?: "draft-04" | "draft-07" | "draft-2020-12" | "openapi-3.0" | ({} & string) | undefined;
    /** How to handle unrepresentable types.
     * - `"throw"` — Default. Unrepresentable types throw an error
     * - `"any"` — Unrepresentable types become `{}` */
    unrepresentable?: "throw" | "any";
    /** Arbitrary custom logic that can be used to modify the generated JSON Schema. */
    override?: (ctx: {
        zodSchema: $ZodTypes;
        jsonSchema: BaseSchema;
        path: (string | number)[];
    }) => void;
    /** Whether to extract the `"input"` or `"output"` type. Relevant to transforms, defaults, coerced primitives, etc.
     * - `"output"` — Default. Convert the output schema.
     * - `"input"` — Convert the input schema. */
    io?: "input" | "output";
    cycles?: "ref" | "throw";
    reused?: "ref" | "inline";
    external?: {
        registry: $ZodRegistry<{
            id?: string | undefined;
        }>;
        uri?: ((id: string) => string) | undefined;
        defs: Record<string, BaseSchema>;
    } | undefined;
}
/**
 * Parameters for the toJSONSchema function.
 */
type ToJSONSchemaParams = Omit<JSONSchemaGeneratorParams, "processors" | "external">;
/**
 * Parameters for the toJSONSchema function when passing a registry.
 */
interface RegistryToJSONSchemaParams extends ToJSONSchemaParams {
    uri?: (id: string) => string;
}
interface ProcessParams {
    schemaPath: $ZodType[];
    path: (string | number)[];
}
interface Seen {
    /** JSON Schema result for this Zod schema */
    schema: BaseSchema;
    /** A cached version of the schema that doesn't get overwritten during ref resolution */
    def?: BaseSchema;
    defId?: string | undefined;
    /** Number of times this schema was encountered during traversal */
    count: number;
    /** Cycle path */
    cycle?: (string | number)[] | undefined;
    isParent?: boolean | undefined;
    /** Schema to inherit JSON Schema properties from (set by processor for wrappers) */
    ref?: $ZodType | null;
    /** JSON Schema property path for this schema */
    path?: (string | number)[] | undefined;
}
interface ToJSONSchemaContext {
    processors: Record<string, Processor>;
    metadataRegistry: $ZodRegistry<Record<string, any>>;
    target: "draft-04" | "draft-07" | "draft-2020-12" | "openapi-3.0" | ({} & string);
    unrepresentable: "throw" | "any";
    override: (ctx: {
        zodSchema: $ZodType;
        jsonSchema: BaseSchema;
        path: (string | number)[];
    }) => void;
    io: "input" | "output";
    counter: number;
    seen: Map<$ZodType, Seen>;
    cycles: "ref" | "throw";
    reused: "ref" | "inline";
    external?: {
        registry: $ZodRegistry<{
            id?: string | undefined;
        }>;
        uri?: ((id: string) => string) | undefined;
        defs: Record<string, BaseSchema>;
    } | undefined;
}
declare function initializeContext(params: JSONSchemaGeneratorParams): ToJSONSchemaContext;
declare function process<T extends $ZodType>(schema: T, ctx: ToJSONSchemaContext, _params?: ProcessParams): BaseSchema;
declare function extractDefs<T extends $ZodType>(ctx: ToJSONSchemaContext, schema: T): void;
declare function finalize<T extends $ZodType>(ctx: ToJSONSchemaContext, schema: T): ZodStandardJSONSchemaPayload<T>;
type ZodStandardSchemaWithJSON$1<T> = StandardSchemaWithJSONProps<input<T>, output<T>>;
interface ZodStandardJSONSchemaPayload<T> extends BaseSchema {
    "~standard": ZodStandardSchemaWithJSON$1<T>;
}
/**
 * Creates a toJSONSchema method for a schema instance.
 * This encapsulates the logic of initializing context, processing, extracting defs, and finalizing.
 */
declare const createToJSONSchemaMethod: <T extends $ZodType>(schema: T, processors?: Record<string, Processor>) => (params?: ToJSONSchemaParams) => ZodStandardJSONSchemaPayload<T>;
/**
 * Creates a toJSONSchema method for a schema instance.
 * This encapsulates the logic of initializing context, processing, extracting defs, and finalizing.
 */
type StandardJSONSchemaMethodParams = Parameters<StandardJSONSchemaV1["~standard"]["jsonSchema"]["input"]>[0];
declare const createStandardJSONSchemaMethod: <T extends $ZodType>(schema: T, io: "input" | "output", processors?: Record<string, Processor>) => (params?: StandardJSONSchemaMethodParams) => BaseSchema;

type JSONType = string | number | boolean | null | JSONType[] | {
    [key: string]: JSONType;
};
type JWTAlgorithm = "HS256" | "HS384" | "HS512" | "RS256" | "RS384" | "RS512" | "ES256" | "ES384" | "ES512" | "PS256" | "PS384" | "PS512" | "EdDSA" | (string & {});
type HashAlgorithm = "md5" | "sha1" | "sha256" | "sha384" | "sha512";
type HashEncoding = "hex" | "base64" | "base64url";
type HashFormat = `${HashAlgorithm}_${HashEncoding}`;
type IPVersion = "v4" | "v6";
type MimeTypes = "application/json" | "application/xml" | "application/x-www-form-urlencoded" | "application/javascript" | "application/pdf" | "application/zip" | "application/vnd.ms-excel" | "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" | "application/msword" | "application/vnd.openxmlformats-officedocument.wordprocessingml.document" | "application/vnd.ms-powerpoint" | "application/vnd.openxmlformats-officedocument.presentationml.presentation" | "application/octet-stream" | "application/graphql" | "text/html" | "text/plain" | "text/css" | "text/javascript" | "text/csv" | "image/png" | "image/jpeg" | "image/gif" | "image/svg+xml" | "image/webp" | "audio/mpeg" | "audio/ogg" | "audio/wav" | "audio/webm" | "video/mp4" | "video/webm" | "video/ogg" | "font/woff" | "font/woff2" | "font/ttf" | "font/otf" | "multipart/form-data" | (string & {});
type ParsedTypes = "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function" | "file" | "date" | "array" | "map" | "set" | "nan" | "null" | "promise";
type AssertEqual<T, U> = (<V>() => V extends T ? 1 : 2) extends <V>() => V extends U ? 1 : 2 ? true : false;
type AssertNotEqual<T, U> = (<V>() => V extends T ? 1 : 2) extends <V>() => V extends U ? 1 : 2 ? false : true;
type AssertExtends<T, U> = T extends U ? T : never;
type IsAny<T> = 0 extends 1 & T ? true : false;
type Omit$1<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type OmitKeys<T, K extends string> = Pick<T, Exclude<keyof T, K>>;
type MakePartial<T, K extends keyof T> = Omit$1<T, K> & InexactPartial<Pick<T, K>>;
type MakeRequired<T, K extends keyof T> = Omit$1<T, K> & Required<Pick<T, K>>;
type Exactly<T, X> = T & Record<Exclude<keyof X, keyof T>, never>;
type NoUndefined<T> = T extends undefined ? never : T;
type Whatever = {} | undefined | null;
type LoosePartial<T extends object> = InexactPartial<T> & {
    [k: string]: unknown;
};
type Mask<Keys extends PropertyKey> = {
    [K in Keys]?: true;
};
type Writeable<T> = {
    -readonly [P in keyof T]: T[P];
} & {};
type InexactPartial<T> = {
    [P in keyof T]?: T[P] | undefined;
};
type EmptyObject = Record<string, never>;
type BuiltIn = (((...args: any[]) => any) | (new (...args: any[]) => any)) | {
    readonly [Symbol.toStringTag]: string;
} | Date | Error | Generator | Promise<unknown> | RegExp;
type MakeReadonly<T> = T extends Map<infer K, infer V> ? ReadonlyMap<K, V> : T extends Set<infer V> ? ReadonlySet<V> : T extends [infer Head, ...infer Tail] ? readonly [Head, ...Tail] : T extends Array<infer V> ? ReadonlyArray<V> : T extends BuiltIn ? T : Readonly<T>;
type SomeObject = Record<PropertyKey, any>;
type Identity<T> = T;
type Flatten<T> = Identity<{
    [k in keyof T]: T[k];
}>;
type Mapped<T> = {
    [k in keyof T]: T[k];
};
type Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type NoNeverKeys<T> = {
    [k in keyof T]: [T[k]] extends [never] ? never : k;
}[keyof T];
type NoNever<T> = Identity<{
    [k in NoNeverKeys<T>]: k extends keyof T ? T[k] : never;
}>;
type Extend<A extends SomeObject, B extends SomeObject> = Flatten<keyof A & keyof B extends never ? A & B : {
    [K in keyof A as K extends keyof B ? never : K]: A[K];
} & {
    [K in keyof B]: B[K];
}>;
type TupleItems = ReadonlyArray<SomeType>;
type AnyFunc = (...args: any[]) => any;
type IsProp<T, K extends keyof T> = T[K] extends AnyFunc ? never : K;
type MaybeAsync<T> = T | Promise<T>;
type KeyOf<T> = keyof OmitIndexSignature<T>;
type OmitIndexSignature<T> = {
    [K in keyof T as string extends K ? never : K extends string ? K : never]: T[K];
};
type ExtractIndexSignature<T> = {
    [K in keyof T as string extends K ? K : K extends string ? never : K]: T[K];
};
type Keys<T extends object> = keyof OmitIndexSignature<T>;
type SchemaClass<T extends SomeType> = {
    new (def: T["_zod"]["def"]): T;
};
type EnumValue = string | number;
type EnumLike = Readonly<Record<string, EnumValue>>;
type ToEnum<T extends EnumValue> = Flatten<{
    [k in T]: k;
}>;
type KeysEnum<T extends object> = ToEnum<Exclude<keyof T, symbol>>;
type KeysArray<T extends object> = Flatten<(keyof T & string)[]>;
type Literal = string | number | bigint | boolean | null | undefined;
type LiteralArray = Array<Literal>;
type Primitive = string | number | symbol | bigint | boolean | null | undefined;
type PrimitiveArray = Array<Primitive>;
type HasSize = {
    size: number;
};
type HasLength = {
    length: number;
};
type Numeric = number | bigint | Date;
type SafeParseResult<T> = SafeParseSuccess<T> | SafeParseError<T>;
type SafeParseSuccess<T> = {
    success: true;
    data: T;
    error?: never;
};
type SafeParseError<T> = {
    success: false;
    data?: never;
    error: $ZodError<T>;
};
type PropValues = Record<string, Set<Primitive>>;
type PrimitiveSet = Set<Primitive>;
declare function assertEqual<A, B>(val: AssertEqual<A, B>): AssertEqual<A, B>;
declare function assertNotEqual<A, B>(val: AssertNotEqual<A, B>): AssertNotEqual<A, B>;
declare function assertIs<T>(_arg: T): void;
declare function assertNever(_x: never): never;
declare function assert<T>(_: any): asserts _ is T;
declare function getEnumValues(entries: EnumLike): EnumValue[];
declare function joinValues<T extends Primitive[]>(array: T, separator?: string): string;
declare function jsonStringifyReplacer(_: string, value: any): any;
declare function cached<T>(getter: () => T): {
    value: T;
};
declare function nullish$1(input: any): boolean;
declare function cleanRegex(source: string): string;
declare function floatSafeRemainder(val: number, step: number): number;
declare function defineLazy<T, K extends keyof T>(object: T, key: K, getter: () => T[K]): void;
declare function objectClone(obj: object): any;
declare function assignProp<T extends object, K extends PropertyKey>(target: T, prop: K, value: K extends keyof T ? T[K] : any): void;
declare function mergeDefs(...defs: Record<string, any>[]): any;
declare function cloneDef(schema: $ZodType): any;
declare function getElementAtPath(obj: any, path: (string | number)[] | null | undefined): any;
declare function promiseAllObject<T extends object>(promisesObj: T): Promise<{
    [k in keyof T]: Awaited<T[k]>;
}>;
declare function randomString(length?: number): string;
declare function esc(str: string): string;
declare function slugify(input: string): string;
declare const captureStackTrace: (targetObject: object, constructorOpt?: Function) => void;
declare function isObject(data: any): data is Record<PropertyKey, unknown>;
declare const allowsEval: {
    value: boolean;
};
declare function isPlainObject(o: any): o is Record<PropertyKey, unknown>;
declare function shallowClone(o: any): any;
declare function numKeys(data: any): number;
declare const getParsedType: (data: any) => ParsedTypes;
declare const propertyKeyTypes: Set<string>;
declare const primitiveTypes: Set<string>;
declare function escapeRegex(str: string): string;
declare function clone<T extends $ZodType>(inst: T, def?: T["_zod"]["def"], params?: {
    parent: boolean;
}): T;
type EmptyToNever<T> = keyof T extends never ? never : T;
type Normalize<T> = T extends undefined ? never : T extends Record<any, any> ? Flatten<{
    [k in keyof Omit$1<T, "error" | "message">]: T[k];
} & ("error" extends keyof T ? {
    error?: Exclude<T["error"], string>;
} : unknown)> : never;
declare function normalizeParams<T>(_params: T): Normalize<T>;
declare function createTransparentProxy<T extends object>(getter: () => T): T;
declare function stringifyPrimitive(value: any): string;
declare function optionalKeys(shape: $ZodShape): string[];
type CleanKey<T extends PropertyKey> = T extends `?${infer K}` ? K : T extends `${infer K}?` ? K : T;
type ToCleanMap<T extends $ZodLooseShape> = {
    [k in keyof T]: k extends `?${infer K}` ? K : k extends `${infer K}?` ? K : k;
};
type FromCleanMap<T extends $ZodLooseShape> = {
    [k in keyof T as k extends `?${infer K}` ? K : k extends `${infer K}?` ? K : k]: k;
};
declare const NUMBER_FORMAT_RANGES: Record<$ZodNumberFormats, [number, number]>;
declare const BIGINT_FORMAT_RANGES: Record<$ZodBigIntFormats, [bigint, bigint]>;
declare function pick(schema: $ZodObject, mask: Record<string, unknown>): any;
declare function omit(schema: $ZodObject, mask: object): any;
declare function extend(schema: $ZodObject, shape: $ZodShape): any;
declare function safeExtend(schema: $ZodObject, shape: $ZodShape): any;
declare function merge(a: $ZodObject, b: $ZodObject): any;
declare function partial(Class: SchemaClass<$ZodOptional> | null, schema: $ZodObject, mask: object | undefined): any;
declare function required(Class: SchemaClass<$ZodNonOptional>, schema: $ZodObject, mask: object | undefined): any;
type Constructor<T, Def extends any[] = any[]> = new (...args: Def) => T;
declare function aborted(x: ParsePayload, startIndex?: number): boolean;
declare function prefixIssues(path: PropertyKey, issues: $ZodRawIssue[]): $ZodRawIssue[];
declare function unwrapMessage(message: string | {
    message: string;
} | undefined | null): string | undefined;
declare function finalizeIssue(iss: $ZodRawIssue, ctx: ParseContextInternal | undefined, config: $ZodConfig): $ZodIssue;
declare function getSizableOrigin(input: any): "set" | "map" | "file" | "unknown";
declare function getLengthableOrigin(input: any): "array" | "string" | "unknown";
declare function parsedType(data: unknown): $ZodInvalidTypeExpected;
declare function issue(_iss: string, input: any, inst: any): $ZodRawIssue;
declare function issue(_iss: $ZodRawIssue): $ZodRawIssue;
declare function cleanEnum(obj: Record<string, EnumValue>): EnumValue[];
declare function base64ToUint8Array(base64: string): InstanceType<typeof Uint8Array>;
declare function uint8ArrayToBase64(bytes: Uint8Array): string;
declare function base64urlToUint8Array(base64url: string): InstanceType<typeof Uint8Array>;
declare function uint8ArrayToBase64url(bytes: Uint8Array): string;
declare function hexToUint8Array(hex: string): InstanceType<typeof Uint8Array>;
declare function uint8ArrayToHex(bytes: Uint8Array): string;
declare abstract class Class {
    constructor(..._args: any[]);
}

type util_d_AnyFunc = AnyFunc;
type util_d_AssertEqual<T, U> = AssertEqual<T, U>;
type util_d_AssertExtends<T, U> = AssertExtends<T, U>;
type util_d_AssertNotEqual<T, U> = AssertNotEqual<T, U>;
declare const util_d_BIGINT_FORMAT_RANGES: typeof BIGINT_FORMAT_RANGES;
type util_d_BuiltIn = BuiltIn;
type util_d_Class = Class;
declare const util_d_Class: typeof Class;
type util_d_CleanKey<T extends PropertyKey> = CleanKey<T>;
type util_d_Constructor<T, Def extends any[] = any[]> = Constructor<T, Def>;
type util_d_EmptyObject = EmptyObject;
type util_d_EmptyToNever<T> = EmptyToNever<T>;
type util_d_EnumLike = EnumLike;
type util_d_EnumValue = EnumValue;
type util_d_Exactly<T, X> = Exactly<T, X>;
type util_d_Extend<A extends SomeObject, B extends SomeObject> = Extend<A, B>;
type util_d_ExtractIndexSignature<T> = ExtractIndexSignature<T>;
type util_d_Flatten<T> = Flatten<T>;
type util_d_FromCleanMap<T extends $ZodLooseShape> = FromCleanMap<T>;
type util_d_HasLength = HasLength;
type util_d_HasSize = HasSize;
type util_d_HashAlgorithm = HashAlgorithm;
type util_d_HashEncoding = HashEncoding;
type util_d_HashFormat = HashFormat;
type util_d_IPVersion = IPVersion;
type util_d_Identity<T> = Identity<T>;
type util_d_InexactPartial<T> = InexactPartial<T>;
type util_d_IsAny<T> = IsAny<T>;
type util_d_IsProp<T, K extends keyof T> = IsProp<T, K>;
type util_d_JSONType = JSONType;
type util_d_JWTAlgorithm = JWTAlgorithm;
type util_d_KeyOf<T> = KeyOf<T>;
type util_d_Keys<T extends object> = Keys<T>;
type util_d_KeysArray<T extends object> = KeysArray<T>;
type util_d_KeysEnum<T extends object> = KeysEnum<T>;
type util_d_Literal = Literal;
type util_d_LiteralArray = LiteralArray;
type util_d_LoosePartial<T extends object> = LoosePartial<T>;
type util_d_MakePartial<T, K extends keyof T> = MakePartial<T, K>;
type util_d_MakeReadonly<T> = MakeReadonly<T>;
type util_d_MakeRequired<T, K extends keyof T> = MakeRequired<T, K>;
type util_d_Mapped<T> = Mapped<T>;
type util_d_Mask<Keys extends PropertyKey> = Mask<Keys>;
type util_d_MaybeAsync<T> = MaybeAsync<T>;
type util_d_MimeTypes = MimeTypes;
declare const util_d_NUMBER_FORMAT_RANGES: typeof NUMBER_FORMAT_RANGES;
type util_d_NoNever<T> = NoNever<T>;
type util_d_NoNeverKeys<T> = NoNeverKeys<T>;
type util_d_NoUndefined<T> = NoUndefined<T>;
type util_d_Normalize<T> = Normalize<T>;
type util_d_Numeric = Numeric;
type util_d_OmitIndexSignature<T> = OmitIndexSignature<T>;
type util_d_OmitKeys<T, K extends string> = OmitKeys<T, K>;
type util_d_ParsedTypes = ParsedTypes;
type util_d_Prettify<T> = Prettify<T>;
type util_d_Primitive = Primitive;
type util_d_PrimitiveArray = PrimitiveArray;
type util_d_PrimitiveSet = PrimitiveSet;
type util_d_PropValues = PropValues;
type util_d_SafeParseError<T> = SafeParseError<T>;
type util_d_SafeParseResult<T> = SafeParseResult<T>;
type util_d_SafeParseSuccess<T> = SafeParseSuccess<T>;
type util_d_SchemaClass<T extends SomeType> = SchemaClass<T>;
type util_d_SomeObject = SomeObject;
type util_d_ToCleanMap<T extends $ZodLooseShape> = ToCleanMap<T>;
type util_d_ToEnum<T extends EnumValue> = ToEnum<T>;
type util_d_TupleItems = TupleItems;
type util_d_Whatever = Whatever;
type util_d_Writeable<T> = Writeable<T>;
declare const util_d_aborted: typeof aborted;
declare const util_d_allowsEval: typeof allowsEval;
declare const util_d_assert: typeof assert;
declare const util_d_assertEqual: typeof assertEqual;
declare const util_d_assertIs: typeof assertIs;
declare const util_d_assertNever: typeof assertNever;
declare const util_d_assertNotEqual: typeof assertNotEqual;
declare const util_d_assignProp: typeof assignProp;
declare const util_d_base64ToUint8Array: typeof base64ToUint8Array;
declare const util_d_base64urlToUint8Array: typeof base64urlToUint8Array;
declare const util_d_cached: typeof cached;
declare const util_d_captureStackTrace: typeof captureStackTrace;
declare const util_d_cleanEnum: typeof cleanEnum;
declare const util_d_cleanRegex: typeof cleanRegex;
declare const util_d_clone: typeof clone;
declare const util_d_cloneDef: typeof cloneDef;
declare const util_d_createTransparentProxy: typeof createTransparentProxy;
declare const util_d_defineLazy: typeof defineLazy;
declare const util_d_esc: typeof esc;
declare const util_d_escapeRegex: typeof escapeRegex;
declare const util_d_extend: typeof extend;
declare const util_d_finalizeIssue: typeof finalizeIssue;
declare const util_d_floatSafeRemainder: typeof floatSafeRemainder;
declare const util_d_getElementAtPath: typeof getElementAtPath;
declare const util_d_getEnumValues: typeof getEnumValues;
declare const util_d_getLengthableOrigin: typeof getLengthableOrigin;
declare const util_d_getParsedType: typeof getParsedType;
declare const util_d_getSizableOrigin: typeof getSizableOrigin;
declare const util_d_hexToUint8Array: typeof hexToUint8Array;
declare const util_d_isObject: typeof isObject;
declare const util_d_isPlainObject: typeof isPlainObject;
declare const util_d_issue: typeof issue;
declare const util_d_joinValues: typeof joinValues;
declare const util_d_jsonStringifyReplacer: typeof jsonStringifyReplacer;
declare const util_d_merge: typeof merge;
declare const util_d_mergeDefs: typeof mergeDefs;
declare const util_d_normalizeParams: typeof normalizeParams;
declare const util_d_numKeys: typeof numKeys;
declare const util_d_objectClone: typeof objectClone;
declare const util_d_omit: typeof omit;
declare const util_d_optionalKeys: typeof optionalKeys;
declare const util_d_parsedType: typeof parsedType;
declare const util_d_partial: typeof partial;
declare const util_d_pick: typeof pick;
declare const util_d_prefixIssues: typeof prefixIssues;
declare const util_d_primitiveTypes: typeof primitiveTypes;
declare const util_d_promiseAllObject: typeof promiseAllObject;
declare const util_d_propertyKeyTypes: typeof propertyKeyTypes;
declare const util_d_randomString: typeof randomString;
declare const util_d_required: typeof required;
declare const util_d_safeExtend: typeof safeExtend;
declare const util_d_shallowClone: typeof shallowClone;
declare const util_d_slugify: typeof slugify;
declare const util_d_stringifyPrimitive: typeof stringifyPrimitive;
declare const util_d_uint8ArrayToBase64: typeof uint8ArrayToBase64;
declare const util_d_uint8ArrayToBase64url: typeof uint8ArrayToBase64url;
declare const util_d_uint8ArrayToHex: typeof uint8ArrayToHex;
declare const util_d_unwrapMessage: typeof unwrapMessage;
declare namespace util_d {
  export { util_d_BIGINT_FORMAT_RANGES as BIGINT_FORMAT_RANGES, util_d_Class as Class, util_d_NUMBER_FORMAT_RANGES as NUMBER_FORMAT_RANGES, util_d_aborted as aborted, util_d_allowsEval as allowsEval, util_d_assert as assert, util_d_assertEqual as assertEqual, util_d_assertIs as assertIs, util_d_assertNever as assertNever, util_d_assertNotEqual as assertNotEqual, util_d_assignProp as assignProp, util_d_base64ToUint8Array as base64ToUint8Array, util_d_base64urlToUint8Array as base64urlToUint8Array, util_d_cached as cached, util_d_captureStackTrace as captureStackTrace, util_d_cleanEnum as cleanEnum, util_d_cleanRegex as cleanRegex, util_d_clone as clone, util_d_cloneDef as cloneDef, util_d_createTransparentProxy as createTransparentProxy, util_d_defineLazy as defineLazy, util_d_esc as esc, util_d_escapeRegex as escapeRegex, util_d_extend as extend, util_d_finalizeIssue as finalizeIssue, util_d_floatSafeRemainder as floatSafeRemainder, util_d_getElementAtPath as getElementAtPath, util_d_getEnumValues as getEnumValues, util_d_getLengthableOrigin as getLengthableOrigin, util_d_getParsedType as getParsedType, util_d_getSizableOrigin as getSizableOrigin, util_d_hexToUint8Array as hexToUint8Array, util_d_isObject as isObject, util_d_isPlainObject as isPlainObject, util_d_issue as issue, util_d_joinValues as joinValues, util_d_jsonStringifyReplacer as jsonStringifyReplacer, util_d_merge as merge, util_d_mergeDefs as mergeDefs, util_d_normalizeParams as normalizeParams, nullish$1 as nullish, util_d_numKeys as numKeys, util_d_objectClone as objectClone, util_d_omit as omit, util_d_optionalKeys as optionalKeys, util_d_parsedType as parsedType, util_d_partial as partial, util_d_pick as pick, util_d_prefixIssues as prefixIssues, util_d_primitiveTypes as primitiveTypes, util_d_promiseAllObject as promiseAllObject, util_d_propertyKeyTypes as propertyKeyTypes, util_d_randomString as randomString, util_d_required as required, util_d_safeExtend as safeExtend, util_d_shallowClone as shallowClone, util_d_slugify as slugify, util_d_stringifyPrimitive as stringifyPrimitive, util_d_uint8ArrayToBase64 as uint8ArrayToBase64, util_d_uint8ArrayToBase64url as uint8ArrayToBase64url, util_d_uint8ArrayToHex as uint8ArrayToHex, util_d_unwrapMessage as unwrapMessage };
  export type { util_d_AnyFunc as AnyFunc, util_d_AssertEqual as AssertEqual, util_d_AssertExtends as AssertExtends, util_d_AssertNotEqual as AssertNotEqual, util_d_BuiltIn as BuiltIn, util_d_CleanKey as CleanKey, util_d_Constructor as Constructor, util_d_EmptyObject as EmptyObject, util_d_EmptyToNever as EmptyToNever, util_d_EnumLike as EnumLike, util_d_EnumValue as EnumValue, util_d_Exactly as Exactly, util_d_Extend as Extend, util_d_ExtractIndexSignature as ExtractIndexSignature, util_d_Flatten as Flatten, util_d_FromCleanMap as FromCleanMap, util_d_HasLength as HasLength, util_d_HasSize as HasSize, util_d_HashAlgorithm as HashAlgorithm, util_d_HashEncoding as HashEncoding, util_d_HashFormat as HashFormat, util_d_IPVersion as IPVersion, util_d_Identity as Identity, util_d_InexactPartial as InexactPartial, util_d_IsAny as IsAny, util_d_IsProp as IsProp, util_d_JSONType as JSONType, util_d_JWTAlgorithm as JWTAlgorithm, util_d_KeyOf as KeyOf, util_d_Keys as Keys, util_d_KeysArray as KeysArray, util_d_KeysEnum as KeysEnum, util_d_Literal as Literal, util_d_LiteralArray as LiteralArray, util_d_LoosePartial as LoosePartial, util_d_MakePartial as MakePartial, util_d_MakeReadonly as MakeReadonly, util_d_MakeRequired as MakeRequired, util_d_Mapped as Mapped, util_d_Mask as Mask, util_d_MaybeAsync as MaybeAsync, util_d_MimeTypes as MimeTypes, util_d_NoNever as NoNever, util_d_NoNeverKeys as NoNeverKeys, util_d_NoUndefined as NoUndefined, util_d_Normalize as Normalize, util_d_Numeric as Numeric, Omit$1 as Omit, util_d_OmitIndexSignature as OmitIndexSignature, util_d_OmitKeys as OmitKeys, util_d_ParsedTypes as ParsedTypes, util_d_Prettify as Prettify, util_d_Primitive as Primitive, util_d_PrimitiveArray as PrimitiveArray, util_d_PrimitiveSet as PrimitiveSet, util_d_PropValues as PropValues, util_d_SafeParseError as SafeParseError, util_d_SafeParseResult as SafeParseResult, util_d_SafeParseSuccess as SafeParseSuccess, util_d_SchemaClass as SchemaClass, util_d_SomeObject as SomeObject, util_d_ToCleanMap as ToCleanMap, util_d_ToEnum as ToEnum, util_d_TupleItems as TupleItems, util_d_Whatever as Whatever, util_d_Writeable as Writeable };
}

declare const version: {
    readonly major: 4;
    readonly minor: 3;
    readonly patch: number;
};

interface ParseContext<T extends $ZodIssueBase = never> {
    /** Customize error messages. */
    readonly error?: $ZodErrorMap<T>;
    /** Include the `input` field in issue objects. Default `false`. */
    readonly reportInput?: boolean;
    /** Skip eval-based fast path. Default `false`. */
    readonly jitless?: boolean;
}
/** @internal */
interface ParseContextInternal<T extends $ZodIssueBase = never> extends ParseContext<T> {
    readonly async?: boolean | undefined;
    readonly direction?: "forward" | "backward";
    readonly skipChecks?: boolean;
}
interface ParsePayload<T = unknown> {
    value: T;
    issues: $ZodRawIssue[];
    /** A may to mark a whole payload as aborted. Used in codecs/pipes. */
    aborted?: boolean;
}
type CheckFn<T> = (input: ParsePayload<T>) => MaybeAsync<void>;
interface $ZodTypeDef {
    type: "string" | "number" | "int" | "boolean" | "bigint" | "symbol" | "null" | "undefined" | "void" | "never" | "any" | "unknown" | "date" | "object" | "record" | "file" | "array" | "tuple" | "union" | "intersection" | "map" | "set" | "enum" | "literal" | "nullable" | "optional" | "nonoptional" | "success" | "transform" | "default" | "prefault" | "catch" | "nan" | "pipe" | "readonly" | "template_literal" | "promise" | "lazy" | "function" | "custom";
    error?: $ZodErrorMap<never> | undefined;
    checks?: $ZodCheck<never>[];
}
interface _$ZodTypeInternals {
    /** The `@zod/core` version of this schema */
    version: typeof version;
    /** Schema definition. */
    def: $ZodTypeDef;
    /** @internal Randomly generated ID for this schema. */
    /** @internal List of deferred initializers. */
    deferred: AnyFunc[] | undefined;
    /** @internal Parses input and runs all checks (refinements). */
    run(payload: ParsePayload<any>, ctx: ParseContextInternal): MaybeAsync<ParsePayload>;
    /** @internal Parses input, doesn't run checks. */
    parse(payload: ParsePayload<any>, ctx: ParseContextInternal): MaybeAsync<ParsePayload>;
    /** @internal  Stores identifiers for the set of traits implemented by this schema. */
    traits: Set<string>;
    /** @internal Indicates that a schema output type should be considered optional inside objects.
     * @default Required
     */
    /** @internal */
    optin?: "optional" | undefined;
    /** @internal */
    optout?: "optional" | undefined;
    /** @internal The set of literal values that will pass validation. Must be an exhaustive set. Used to determine optionality in z.record().
     *
     * Defined on: enum, const, literal, null, undefined
     * Passthrough: optional, nullable, branded, default, catch, pipe
     * Todo: unions?
     */
    values?: PrimitiveSet | undefined;
    /** Default value bubbled up from  */
    /** @internal A set of literal discriminators used for the fast path in discriminated unions. */
    propValues?: PropValues | undefined;
    /** @internal This flag indicates that a schema validation can be represented with a regular expression. Used to determine allowable schemas in z.templateLiteral(). */
    pattern: RegExp | undefined;
    /** @internal The constructor function of this schema. */
    constr: new (def: any) => $ZodType;
    /** @internal A catchall object for bag metadata related to this schema. Commonly modified by checks using `onattach`. */
    bag: Record<string, unknown>;
    /** @internal The set of issues this schema might throw during type checking. */
    isst: $ZodIssueBase;
    /** @internal Subject to change, not a public API. */
    processJSONSchema?: ((ctx: ToJSONSchemaContext, json: BaseSchema, params: ProcessParams) => void) | undefined;
    /** An optional method used to override `toJSONSchema` logic. */
    toJSONSchema?: () => unknown;
    /** @internal The parent of this schema. Only set during certain clone operations. */
    parent?: $ZodType | undefined;
}
/** @internal */
interface $ZodTypeInternals<out O = unknown, out I = unknown> extends _$ZodTypeInternals {
    /** @internal The inferred output type */
    output: O;
    /** @internal The inferred input type */
    input: I;
}
type $ZodStandardSchema<T> = StandardSchemaV1.Props<input<T>, output<T>>;
type SomeType = {
    _zod: _$ZodTypeInternals;
};
interface _$ZodType<T extends $ZodTypeInternals = $ZodTypeInternals> extends $ZodType<T["output"], T["input"], T> {
}
interface $ZodType<O = unknown, I = unknown, Internals extends $ZodTypeInternals<O, I> = $ZodTypeInternals<O, I>> {
    _zod: Internals;
    "~standard": $ZodStandardSchema<this>;
}
declare const $ZodType: $constructor<$ZodType>;

interface $ZodStringDef extends $ZodTypeDef {
    type: "string";
    coerce?: boolean;
    checks?: $ZodCheck<string>[];
}
interface $ZodStringInternals<Input> extends $ZodTypeInternals<string, Input> {
    def: $ZodStringDef;
    /** @deprecated Internal API, use with caution (not deprecated) */
    pattern: RegExp;
    /** @deprecated Internal API, use with caution (not deprecated) */
    isst: $ZodIssueInvalidType;
    bag: LoosePartial<{
        minimum: number;
        maximum: number;
        patterns: Set<RegExp>;
        format: string;
        contentEncoding: string;
    }>;
}
interface $ZodString<Input = unknown> extends _$ZodType<$ZodStringInternals<Input>> {
}
declare const $ZodString: $constructor<$ZodString>;
interface $ZodStringFormatDef<Format extends string = string> extends $ZodStringDef, $ZodCheckStringFormatDef<Format> {
}
interface $ZodStringFormatInternals<Format extends string = string> extends $ZodStringInternals<string>, $ZodCheckStringFormatInternals {
    def: $ZodStringFormatDef<Format>;
}
interface $ZodStringFormat<Format extends string = string> extends $ZodType {
    _zod: $ZodStringFormatInternals<Format>;
}
declare const $ZodStringFormat: $constructor<$ZodStringFormat>;
interface $ZodGUIDDef extends $ZodStringFormatDef<"guid"> {
}
interface $ZodGUIDInternals extends $ZodStringFormatInternals<"guid"> {
}
interface $ZodGUID extends $ZodType {
    _zod: $ZodGUIDInternals;
}
declare const $ZodGUID: $constructor<$ZodGUID>;
interface $ZodUUIDDef extends $ZodStringFormatDef<"uuid"> {
    version?: "v1" | "v2" | "v3" | "v4" | "v5" | "v6" | "v7" | "v8";
}
interface $ZodUUIDInternals extends $ZodStringFormatInternals<"uuid"> {
    def: $ZodUUIDDef;
}
interface $ZodUUID extends $ZodType {
    _zod: $ZodUUIDInternals;
}
declare const $ZodUUID: $constructor<$ZodUUID>;
interface $ZodEmailDef extends $ZodStringFormatDef<"email"> {
}
interface $ZodEmailInternals extends $ZodStringFormatInternals<"email"> {
}
interface $ZodEmail extends $ZodType {
    _zod: $ZodEmailInternals;
}
declare const $ZodEmail: $constructor<$ZodEmail>;
interface $ZodURLDef extends $ZodStringFormatDef<"url"> {
    hostname?: RegExp | undefined;
    protocol?: RegExp | undefined;
    normalize?: boolean | undefined;
}
interface $ZodURLInternals extends $ZodStringFormatInternals<"url"> {
    def: $ZodURLDef;
}
interface $ZodURL extends $ZodType {
    _zod: $ZodURLInternals;
}
declare const $ZodURL: $constructor<$ZodURL>;
interface $ZodEmojiDef extends $ZodStringFormatDef<"emoji"> {
}
interface $ZodEmojiInternals extends $ZodStringFormatInternals<"emoji"> {
}
interface $ZodEmoji extends $ZodType {
    _zod: $ZodEmojiInternals;
}
declare const $ZodEmoji: $constructor<$ZodEmoji>;
interface $ZodNanoIDDef extends $ZodStringFormatDef<"nanoid"> {
}
interface $ZodNanoIDInternals extends $ZodStringFormatInternals<"nanoid"> {
}
interface $ZodNanoID extends $ZodType {
    _zod: $ZodNanoIDInternals;
}
declare const $ZodNanoID: $constructor<$ZodNanoID>;
interface $ZodCUIDDef extends $ZodStringFormatDef<"cuid"> {
}
interface $ZodCUIDInternals extends $ZodStringFormatInternals<"cuid"> {
}
interface $ZodCUID extends $ZodType {
    _zod: $ZodCUIDInternals;
}
declare const $ZodCUID: $constructor<$ZodCUID>;
interface $ZodCUID2Def extends $ZodStringFormatDef<"cuid2"> {
}
interface $ZodCUID2Internals extends $ZodStringFormatInternals<"cuid2"> {
}
interface $ZodCUID2 extends $ZodType {
    _zod: $ZodCUID2Internals;
}
declare const $ZodCUID2: $constructor<$ZodCUID2>;
interface $ZodULIDDef extends $ZodStringFormatDef<"ulid"> {
}
interface $ZodULIDInternals extends $ZodStringFormatInternals<"ulid"> {
}
interface $ZodULID extends $ZodType {
    _zod: $ZodULIDInternals;
}
declare const $ZodULID: $constructor<$ZodULID>;
interface $ZodXIDDef extends $ZodStringFormatDef<"xid"> {
}
interface $ZodXIDInternals extends $ZodStringFormatInternals<"xid"> {
}
interface $ZodXID extends $ZodType {
    _zod: $ZodXIDInternals;
}
declare const $ZodXID: $constructor<$ZodXID>;
interface $ZodKSUIDDef extends $ZodStringFormatDef<"ksuid"> {
}
interface $ZodKSUIDInternals extends $ZodStringFormatInternals<"ksuid"> {
}
interface $ZodKSUID extends $ZodType {
    _zod: $ZodKSUIDInternals;
}
declare const $ZodKSUID: $constructor<$ZodKSUID>;
interface $ZodISODateTimeDef extends $ZodStringFormatDef<"datetime"> {
    precision: number | null;
    offset: boolean;
    local: boolean;
}
interface $ZodISODateTimeInternals extends $ZodStringFormatInternals {
    def: $ZodISODateTimeDef;
}
interface $ZodISODateTime extends $ZodType {
    _zod: $ZodISODateTimeInternals;
}
declare const $ZodISODateTime: $constructor<$ZodISODateTime>;
interface $ZodISODateDef extends $ZodStringFormatDef<"date"> {
}
interface $ZodISODateInternals extends $ZodStringFormatInternals<"date"> {
}
interface $ZodISODate extends $ZodType {
    _zod: $ZodISODateInternals;
}
declare const $ZodISODate: $constructor<$ZodISODate>;
interface $ZodISOTimeDef extends $ZodStringFormatDef<"time"> {
    precision?: number | null;
}
interface $ZodISOTimeInternals extends $ZodStringFormatInternals<"time"> {
    def: $ZodISOTimeDef;
}
interface $ZodISOTime extends $ZodType {
    _zod: $ZodISOTimeInternals;
}
declare const $ZodISOTime: $constructor<$ZodISOTime>;
interface $ZodISODurationDef extends $ZodStringFormatDef<"duration"> {
}
interface $ZodISODurationInternals extends $ZodStringFormatInternals<"duration"> {
}
interface $ZodISODuration extends $ZodType {
    _zod: $ZodISODurationInternals;
}
declare const $ZodISODuration: $constructor<$ZodISODuration>;
interface $ZodIPv4Def extends $ZodStringFormatDef<"ipv4"> {
    version?: "v4";
}
interface $ZodIPv4Internals extends $ZodStringFormatInternals<"ipv4"> {
    def: $ZodIPv4Def;
}
interface $ZodIPv4 extends $ZodType {
    _zod: $ZodIPv4Internals;
}
declare const $ZodIPv4: $constructor<$ZodIPv4>;
interface $ZodIPv6Def extends $ZodStringFormatDef<"ipv6"> {
    version?: "v6";
}
interface $ZodIPv6Internals extends $ZodStringFormatInternals<"ipv6"> {
    def: $ZodIPv6Def;
}
interface $ZodIPv6 extends $ZodType {
    _zod: $ZodIPv6Internals;
}
declare const $ZodIPv6: $constructor<$ZodIPv6>;
interface $ZodMACDef extends $ZodStringFormatDef<"mac"> {
    delimiter?: string;
}
interface $ZodMACInternals extends $ZodStringFormatInternals<"mac"> {
    def: $ZodMACDef;
}
interface $ZodMAC extends $ZodType {
    _zod: $ZodMACInternals;
}
declare const $ZodMAC: $constructor<$ZodMAC>;
interface $ZodCIDRv4Def extends $ZodStringFormatDef<"cidrv4"> {
    version?: "v4";
}
interface $ZodCIDRv4Internals extends $ZodStringFormatInternals<"cidrv4"> {
    def: $ZodCIDRv4Def;
}
interface $ZodCIDRv4 extends $ZodType {
    _zod: $ZodCIDRv4Internals;
}
declare const $ZodCIDRv4: $constructor<$ZodCIDRv4>;
interface $ZodCIDRv6Def extends $ZodStringFormatDef<"cidrv6"> {
    version?: "v6";
}
interface $ZodCIDRv6Internals extends $ZodStringFormatInternals<"cidrv6"> {
    def: $ZodCIDRv6Def;
}
interface $ZodCIDRv6 extends $ZodType {
    _zod: $ZodCIDRv6Internals;
}
declare const $ZodCIDRv6: $constructor<$ZodCIDRv6>;
declare function isValidBase64(data: string): boolean;
interface $ZodBase64Def extends $ZodStringFormatDef<"base64"> {
}
interface $ZodBase64Internals extends $ZodStringFormatInternals<"base64"> {
}
interface $ZodBase64 extends $ZodType {
    _zod: $ZodBase64Internals;
}
declare const $ZodBase64: $constructor<$ZodBase64>;
declare function isValidBase64URL(data: string): boolean;
interface $ZodBase64URLDef extends $ZodStringFormatDef<"base64url"> {
}
interface $ZodBase64URLInternals extends $ZodStringFormatInternals<"base64url"> {
}
interface $ZodBase64URL extends $ZodType {
    _zod: $ZodBase64URLInternals;
}
declare const $ZodBase64URL: $constructor<$ZodBase64URL>;
interface $ZodE164Def extends $ZodStringFormatDef<"e164"> {
}
interface $ZodE164Internals extends $ZodStringFormatInternals<"e164"> {
}
interface $ZodE164 extends $ZodType {
    _zod: $ZodE164Internals;
}
declare const $ZodE164: $constructor<$ZodE164>;
declare function isValidJWT(token: string, algorithm?: JWTAlgorithm | null): boolean;
interface $ZodJWTDef extends $ZodStringFormatDef<"jwt"> {
    alg?: JWTAlgorithm | undefined;
}
interface $ZodJWTInternals extends $ZodStringFormatInternals<"jwt"> {
    def: $ZodJWTDef;
}
interface $ZodJWT extends $ZodType {
    _zod: $ZodJWTInternals;
}
declare const $ZodJWT: $constructor<$ZodJWT>;
interface $ZodCustomStringFormatDef<Format extends string = string> extends $ZodStringFormatDef<Format> {
    fn: (val: string) => unknown;
}
interface $ZodCustomStringFormatInternals<Format extends string = string> extends $ZodStringFormatInternals<Format> {
    def: $ZodCustomStringFormatDef<Format>;
}
interface $ZodCustomStringFormat<Format extends string = string> extends $ZodStringFormat<Format> {
    _zod: $ZodCustomStringFormatInternals<Format>;
}
declare const $ZodCustomStringFormat: $constructor<$ZodCustomStringFormat>;
interface $ZodNumberDef extends $ZodTypeDef {
    type: "number";
    coerce?: boolean;
}
interface $ZodNumberInternals<Input = unknown> extends $ZodTypeInternals<number, Input> {
    def: $ZodNumberDef;
    /** @deprecated Internal API, use with caution (not deprecated) */
    pattern: RegExp;
    /** @deprecated Internal API, use with caution (not deprecated) */
    isst: $ZodIssueInvalidType;
    bag: LoosePartial<{
        minimum: number;
        maximum: number;
        exclusiveMinimum: number;
        exclusiveMaximum: number;
        format: string;
        pattern: RegExp;
    }>;
}
interface $ZodNumber<Input = unknown> extends $ZodType {
    _zod: $ZodNumberInternals<Input>;
}
declare const $ZodNumber: $constructor<$ZodNumber>;
interface $ZodNumberFormatDef extends $ZodNumberDef, $ZodCheckNumberFormatDef {
}
interface $ZodNumberFormatInternals extends $ZodNumberInternals<number>, $ZodCheckNumberFormatInternals {
    def: $ZodNumberFormatDef;
    isst: $ZodIssueInvalidType;
}
interface $ZodNumberFormat extends $ZodType {
    _zod: $ZodNumberFormatInternals;
}
declare const $ZodNumberFormat: $constructor<$ZodNumberFormat>;
interface $ZodBooleanDef extends $ZodTypeDef {
    type: "boolean";
    coerce?: boolean;
    checks?: $ZodCheck<boolean>[];
}
interface $ZodBooleanInternals<T = unknown> extends $ZodTypeInternals<boolean, T> {
    pattern: RegExp;
    def: $ZodBooleanDef;
    isst: $ZodIssueInvalidType;
}
interface $ZodBoolean<T = unknown> extends $ZodType {
    _zod: $ZodBooleanInternals<T>;
}
declare const $ZodBoolean: $constructor<$ZodBoolean>;
interface $ZodBigIntDef extends $ZodTypeDef {
    type: "bigint";
    coerce?: boolean;
}
interface $ZodBigIntInternals<T = unknown> extends $ZodTypeInternals<bigint, T> {
    pattern: RegExp;
    /** @internal Internal API, use with caution */
    def: $ZodBigIntDef;
    isst: $ZodIssueInvalidType;
    bag: LoosePartial<{
        minimum: bigint;
        maximum: bigint;
        format: string;
    }>;
}
interface $ZodBigInt<T = unknown> extends $ZodType {
    _zod: $ZodBigIntInternals<T>;
}
declare const $ZodBigInt: $constructor<$ZodBigInt>;
interface $ZodBigIntFormatDef extends $ZodBigIntDef, $ZodCheckBigIntFormatDef {
    check: "bigint_format";
}
interface $ZodBigIntFormatInternals extends $ZodBigIntInternals<bigint>, $ZodCheckBigIntFormatInternals {
    def: $ZodBigIntFormatDef;
}
interface $ZodBigIntFormat extends $ZodType {
    _zod: $ZodBigIntFormatInternals;
}
declare const $ZodBigIntFormat: $constructor<$ZodBigIntFormat>;
interface $ZodSymbolDef extends $ZodTypeDef {
    type: "symbol";
}
interface $ZodSymbolInternals extends $ZodTypeInternals<symbol, symbol> {
    def: $ZodSymbolDef;
    isst: $ZodIssueInvalidType;
}
interface $ZodSymbol extends $ZodType {
    _zod: $ZodSymbolInternals;
}
declare const $ZodSymbol: $constructor<$ZodSymbol>;
interface $ZodUndefinedDef extends $ZodTypeDef {
    type: "undefined";
}
interface $ZodUndefinedInternals extends $ZodTypeInternals<undefined, undefined> {
    pattern: RegExp;
    def: $ZodUndefinedDef;
    values: PrimitiveSet;
    isst: $ZodIssueInvalidType;
}
interface $ZodUndefined extends $ZodType {
    _zod: $ZodUndefinedInternals;
}
declare const $ZodUndefined: $constructor<$ZodUndefined>;
interface $ZodNullDef extends $ZodTypeDef {
    type: "null";
}
interface $ZodNullInternals extends $ZodTypeInternals<null, null> {
    pattern: RegExp;
    def: $ZodNullDef;
    values: PrimitiveSet;
    isst: $ZodIssueInvalidType;
}
interface $ZodNull extends $ZodType {
    _zod: $ZodNullInternals;
}
declare const $ZodNull: $constructor<$ZodNull>;
interface $ZodAnyDef extends $ZodTypeDef {
    type: "any";
}
interface $ZodAnyInternals extends $ZodTypeInternals<any, any> {
    def: $ZodAnyDef;
    isst: never;
}
interface $ZodAny extends $ZodType {
    _zod: $ZodAnyInternals;
}
declare const $ZodAny: $constructor<$ZodAny>;
interface $ZodUnknownDef extends $ZodTypeDef {
    type: "unknown";
}
interface $ZodUnknownInternals extends $ZodTypeInternals<unknown, unknown> {
    def: $ZodUnknownDef;
    isst: never;
}
interface $ZodUnknown extends $ZodType {
    _zod: $ZodUnknownInternals;
}
declare const $ZodUnknown: $constructor<$ZodUnknown>;
interface $ZodNeverDef extends $ZodTypeDef {
    type: "never";
}
interface $ZodNeverInternals extends $ZodTypeInternals<never, never> {
    def: $ZodNeverDef;
    isst: $ZodIssueInvalidType;
}
interface $ZodNever extends $ZodType {
    _zod: $ZodNeverInternals;
}
declare const $ZodNever: $constructor<$ZodNever>;
interface $ZodVoidDef extends $ZodTypeDef {
    type: "void";
}
interface $ZodVoidInternals extends $ZodTypeInternals<void, void> {
    def: $ZodVoidDef;
    isst: $ZodIssueInvalidType;
}
interface $ZodVoid extends $ZodType {
    _zod: $ZodVoidInternals;
}
declare const $ZodVoid: $constructor<$ZodVoid>;
interface $ZodDateDef extends $ZodTypeDef {
    type: "date";
    coerce?: boolean;
}
interface $ZodDateInternals<T = unknown> extends $ZodTypeInternals<Date, T> {
    def: $ZodDateDef;
    isst: $ZodIssueInvalidType;
    bag: LoosePartial<{
        minimum: Date;
        maximum: Date;
        format: string;
    }>;
}
interface $ZodDate<T = unknown> extends $ZodType {
    _zod: $ZodDateInternals<T>;
}
declare const $ZodDate: $constructor<$ZodDate>;
interface $ZodArrayDef<T extends SomeType = $ZodType> extends $ZodTypeDef {
    type: "array";
    element: T;
}
interface $ZodArrayInternals<T extends SomeType = $ZodType> extends _$ZodTypeInternals {
    def: $ZodArrayDef<T>;
    isst: $ZodIssueInvalidType;
    output: output<T>[];
    input: input<T>[];
}
interface $ZodArray<T extends SomeType = $ZodType> extends $ZodType<any, any, $ZodArrayInternals<T>> {
}
declare const $ZodArray: $constructor<$ZodArray>;
type OptionalOutSchema = {
    _zod: {
        optout: "optional";
    };
};
type OptionalInSchema = {
    _zod: {
        optin: "optional";
    };
};
type $InferObjectOutput<T extends $ZodLooseShape, Extra extends Record<string, unknown>> = string extends keyof T ? IsAny<T[keyof T]> extends true ? Record<string, unknown> : Record<string, output<T[keyof T]>> : keyof (T & Extra) extends never ? Record<string, never> : Prettify<{
    -readonly [k in keyof T as T[k] extends OptionalOutSchema ? never : k]: T[k]["_zod"]["output"];
} & {
    -readonly [k in keyof T as T[k] extends OptionalOutSchema ? k : never]?: T[k]["_zod"]["output"];
} & Extra>;
type $InferObjectInput<T extends $ZodLooseShape, Extra extends Record<string, unknown>> = string extends keyof T ? IsAny<T[keyof T]> extends true ? Record<string, unknown> : Record<string, input<T[keyof T]>> : keyof (T & Extra) extends never ? Record<string, never> : Prettify<{
    -readonly [k in keyof T as T[k] extends OptionalInSchema ? never : k]: T[k]["_zod"]["input"];
} & {
    -readonly [k in keyof T as T[k] extends OptionalInSchema ? k : never]?: T[k]["_zod"]["input"];
} & Extra>;
type $ZodObjectConfig = {
    out: Record<string, unknown>;
    in: Record<string, unknown>;
};
type $loose = {
    out: Record<string, unknown>;
    in: Record<string, unknown>;
};
type $strict = {
    out: {};
    in: {};
};
type $strip = {
    out: {};
    in: {};
};
type $catchall<T extends SomeType> = {
    out: {
        [k: string]: output<T>;
    };
    in: {
        [k: string]: input<T>;
    };
};
type $ZodShape = Readonly<{
    [k: string]: $ZodType;
}>;
interface $ZodObjectDef<Shape extends $ZodShape = $ZodShape> extends $ZodTypeDef {
    type: "object";
    shape: Shape;
    catchall?: $ZodType | undefined;
}
interface $ZodObjectInternals<
/** @ts-ignore Cast variance */
out Shape extends $ZodShape = $ZodShape, out Config extends $ZodObjectConfig = $ZodObjectConfig> extends _$ZodTypeInternals {
    def: $ZodObjectDef<Shape>;
    config: Config;
    isst: $ZodIssueInvalidType | $ZodIssueUnrecognizedKeys;
    propValues: PropValues;
    output: $InferObjectOutput<Shape, Config["out"]>;
    input: $InferObjectInput<Shape, Config["in"]>;
    optin?: "optional" | undefined;
    optout?: "optional" | undefined;
}
type $ZodLooseShape = Record<string, any>;
interface $ZodObject<
/** @ts-ignore Cast variance */
out Shape extends Readonly<$ZodShape> = Readonly<$ZodShape>, out Params extends $ZodObjectConfig = $ZodObjectConfig> extends $ZodType<any, any, $ZodObjectInternals<Shape, Params>> {
}
declare const $ZodObject: $constructor<$ZodObject>;
declare const $ZodObjectJIT: $constructor<$ZodObject>;
type $InferUnionOutput<T extends SomeType> = T extends any ? output<T> : never;
type $InferUnionInput<T extends SomeType> = T extends any ? input<T> : never;
interface $ZodUnionDef<Options extends readonly SomeType[] = readonly $ZodType[]> extends $ZodTypeDef {
    type: "union";
    options: Options;
    inclusive?: boolean;
}
type IsOptionalIn<T extends SomeType> = T extends OptionalInSchema ? true : false;
type IsOptionalOut<T extends SomeType> = T extends OptionalOutSchema ? true : false;
interface $ZodUnionInternals<T extends readonly SomeType[] = readonly $ZodType[]> extends _$ZodTypeInternals {
    def: $ZodUnionDef<T>;
    isst: $ZodIssueInvalidUnion;
    pattern: T[number]["_zod"]["pattern"];
    values: T[number]["_zod"]["values"];
    output: $InferUnionOutput<T[number]>;
    input: $InferUnionInput<T[number]>;
    optin: IsOptionalIn<T[number]> extends false ? "optional" | undefined : "optional";
    optout: IsOptionalOut<T[number]> extends false ? "optional" | undefined : "optional";
}
interface $ZodUnion<T extends readonly SomeType[] = readonly $ZodType[]> extends $ZodType<any, any, $ZodUnionInternals<T>> {
    _zod: $ZodUnionInternals<T>;
}
declare const $ZodUnion: $constructor<$ZodUnion>;
interface $ZodXorInternals<T extends readonly SomeType[] = readonly $ZodType[]> extends $ZodUnionInternals<T> {
}
interface $ZodXor<T extends readonly SomeType[] = readonly $ZodType[]> extends $ZodType<any, any, $ZodXorInternals<T>> {
    _zod: $ZodXorInternals<T>;
}
declare const $ZodXor: $constructor<$ZodXor>;
interface $ZodDiscriminatedUnionDef<Options extends readonly SomeType[] = readonly $ZodType[], Disc extends string = string> extends $ZodUnionDef<Options> {
    discriminator: Disc;
    unionFallback?: boolean;
}
interface $ZodDiscriminatedUnionInternals<Options extends readonly SomeType[] = readonly $ZodType[], Disc extends string = string> extends $ZodUnionInternals<Options> {
    def: $ZodDiscriminatedUnionDef<Options, Disc>;
    propValues: PropValues;
}
interface $ZodDiscriminatedUnion<Options extends readonly SomeType[] = readonly $ZodType[], Disc extends string = string> extends $ZodType {
    _zod: $ZodDiscriminatedUnionInternals<Options, Disc>;
}
declare const $ZodDiscriminatedUnion: $constructor<$ZodDiscriminatedUnion>;
interface $ZodIntersectionDef<Left extends SomeType = $ZodType, Right extends SomeType = $ZodType> extends $ZodTypeDef {
    type: "intersection";
    left: Left;
    right: Right;
}
interface $ZodIntersectionInternals<A extends SomeType = $ZodType, B extends SomeType = $ZodType> extends _$ZodTypeInternals {
    def: $ZodIntersectionDef<A, B>;
    isst: never;
    optin: A["_zod"]["optin"] | B["_zod"]["optin"];
    optout: A["_zod"]["optout"] | B["_zod"]["optout"];
    output: output<A> & output<B>;
    input: input<A> & input<B>;
}
interface $ZodIntersection<A extends SomeType = $ZodType, B extends SomeType = $ZodType> extends $ZodType {
    _zod: $ZodIntersectionInternals<A, B>;
}
declare const $ZodIntersection: $constructor<$ZodIntersection>;
interface $ZodTupleDef<T extends TupleItems = readonly $ZodType[], Rest extends SomeType | null = $ZodType | null> extends $ZodTypeDef {
    type: "tuple";
    items: T;
    rest: Rest;
}
type $InferTupleInputType<T extends TupleItems, Rest extends SomeType | null> = [
    ...TupleInputTypeWithOptionals<T>,
    ...(Rest extends SomeType ? input<Rest>[] : [])
];
type TupleInputTypeNoOptionals<T extends TupleItems> = {
    [k in keyof T]: input<T[k]>;
};
type TupleInputTypeWithOptionals<T extends TupleItems> = T extends readonly [
    ...infer Prefix extends SomeType[],
    infer Tail extends SomeType
] ? Tail["_zod"]["optin"] extends "optional" ? [...TupleInputTypeWithOptionals<Prefix>, input<Tail>?] : TupleInputTypeNoOptionals<T> : [];
type $InferTupleOutputType<T extends TupleItems, Rest extends SomeType | null> = [
    ...TupleOutputTypeWithOptionals<T>,
    ...(Rest extends SomeType ? output<Rest>[] : [])
];
type TupleOutputTypeNoOptionals<T extends TupleItems> = {
    [k in keyof T]: output<T[k]>;
};
type TupleOutputTypeWithOptionals<T extends TupleItems> = T extends readonly [
    ...infer Prefix extends SomeType[],
    infer Tail extends SomeType
] ? Tail["_zod"]["optout"] extends "optional" ? [...TupleOutputTypeWithOptionals<Prefix>, output<Tail>?] : TupleOutputTypeNoOptionals<T> : [];
interface $ZodTupleInternals<T extends TupleItems = readonly $ZodType[], Rest extends SomeType | null = $ZodType | null> extends _$ZodTypeInternals {
    def: $ZodTupleDef<T, Rest>;
    isst: $ZodIssueInvalidType | $ZodIssueTooBig<unknown[]> | $ZodIssueTooSmall<unknown[]>;
    output: $InferTupleOutputType<T, Rest>;
    input: $InferTupleInputType<T, Rest>;
}
interface $ZodTuple<T extends TupleItems = readonly $ZodType[], Rest extends SomeType | null = $ZodType | null> extends $ZodType {
    _zod: $ZodTupleInternals<T, Rest>;
}
declare const $ZodTuple: $constructor<$ZodTuple>;
type $ZodRecordKey = $ZodType<string | number | symbol, unknown>;
interface $ZodRecordDef<Key extends $ZodRecordKey = $ZodRecordKey, Value extends SomeType = $ZodType> extends $ZodTypeDef {
    type: "record";
    keyType: Key;
    valueType: Value;
    /** @default "strict" - errors on keys not matching keyType. "loose" passes through non-matching keys unchanged. */
    mode?: "strict" | "loose";
}
type $InferZodRecordOutput<Key extends $ZodRecordKey = $ZodRecordKey, Value extends SomeType = $ZodType> = Key extends $partial ? Partial<Record<output<Key>, output<Value>>> : Record<output<Key>, output<Value>>;
type $InferZodRecordInput<Key extends $ZodRecordKey = $ZodRecordKey, Value extends SomeType = $ZodType> = Key extends $partial ? Partial<Record<input<Key> & PropertyKey, input<Value>>> : Record<input<Key> & PropertyKey, input<Value>>;
interface $ZodRecordInternals<Key extends $ZodRecordKey = $ZodRecordKey, Value extends SomeType = $ZodType> extends $ZodTypeInternals<$InferZodRecordOutput<Key, Value>, $InferZodRecordInput<Key, Value>> {
    def: $ZodRecordDef<Key, Value>;
    isst: $ZodIssueInvalidType | $ZodIssueInvalidKey<Record<PropertyKey, unknown>>;
    optin?: "optional" | undefined;
    optout?: "optional" | undefined;
}
type $partial = {
    "~~partial": true;
};
interface $ZodRecord<Key extends $ZodRecordKey = $ZodRecordKey, Value extends SomeType = $ZodType> extends $ZodType {
    _zod: $ZodRecordInternals<Key, Value>;
}
declare const $ZodRecord: $constructor<$ZodRecord>;
interface $ZodMapDef<Key extends SomeType = $ZodType, Value extends SomeType = $ZodType> extends $ZodTypeDef {
    type: "map";
    keyType: Key;
    valueType: Value;
}
interface $ZodMapInternals<Key extends SomeType = $ZodType, Value extends SomeType = $ZodType> extends $ZodTypeInternals<Map<output<Key>, output<Value>>, Map<input<Key>, input<Value>>> {
    def: $ZodMapDef<Key, Value>;
    isst: $ZodIssueInvalidType | $ZodIssueInvalidKey | $ZodIssueInvalidElement<unknown>;
    optin?: "optional" | undefined;
    optout?: "optional" | undefined;
}
interface $ZodMap<Key extends SomeType = $ZodType, Value extends SomeType = $ZodType> extends $ZodType {
    _zod: $ZodMapInternals<Key, Value>;
}
declare const $ZodMap: $constructor<$ZodMap>;
interface $ZodSetDef<T extends SomeType = $ZodType> extends $ZodTypeDef {
    type: "set";
    valueType: T;
}
interface $ZodSetInternals<T extends SomeType = $ZodType> extends $ZodTypeInternals<Set<output<T>>, Set<input<T>>> {
    def: $ZodSetDef<T>;
    isst: $ZodIssueInvalidType;
    optin?: "optional" | undefined;
    optout?: "optional" | undefined;
}
interface $ZodSet<T extends SomeType = $ZodType> extends $ZodType {
    _zod: $ZodSetInternals<T>;
}
declare const $ZodSet: $constructor<$ZodSet>;
type $InferEnumOutput<T extends EnumLike> = T[keyof T] & {};
type $InferEnumInput<T extends EnumLike> = T[keyof T] & {};
interface $ZodEnumDef<T extends EnumLike = EnumLike> extends $ZodTypeDef {
    type: "enum";
    entries: T;
}
interface $ZodEnumInternals<
/** @ts-ignore Cast variance */
out T extends EnumLike = EnumLike> extends $ZodTypeInternals<$InferEnumOutput<T>, $InferEnumInput<T>> {
    def: $ZodEnumDef<T>;
    /** @deprecated Internal API, use with caution (not deprecated) */
    values: PrimitiveSet;
    /** @deprecated Internal API, use with caution (not deprecated) */
    pattern: RegExp;
    isst: $ZodIssueInvalidValue;
}
interface $ZodEnum<T extends EnumLike = EnumLike> extends $ZodType {
    _zod: $ZodEnumInternals<T>;
}
declare const $ZodEnum: $constructor<$ZodEnum>;
interface $ZodLiteralDef<T extends Literal> extends $ZodTypeDef {
    type: "literal";
    values: T[];
}
interface $ZodLiteralInternals<T extends Literal = Literal> extends $ZodTypeInternals<T, T> {
    def: $ZodLiteralDef<T>;
    values: Set<T>;
    pattern: RegExp;
    isst: $ZodIssueInvalidValue;
}
interface $ZodLiteral<T extends Literal = Literal> extends $ZodType {
    _zod: $ZodLiteralInternals<T>;
}
declare const $ZodLiteral: $constructor<$ZodLiteral>;
type _File = typeof globalThis extends {
    File: infer F extends new (...args: any[]) => any;
} ? InstanceType<F> : {};
/** Do not reference this directly. */
interface File extends _File {
    readonly type: string;
    readonly size: number;
}
interface $ZodFileDef extends $ZodTypeDef {
    type: "file";
}
interface $ZodFileInternals extends $ZodTypeInternals<File, File> {
    def: $ZodFileDef;
    isst: $ZodIssueInvalidType;
    bag: LoosePartial<{
        minimum: number;
        maximum: number;
        mime: MimeTypes[];
    }>;
}
interface $ZodFile extends $ZodType {
    _zod: $ZodFileInternals;
}
declare const $ZodFile: $constructor<$ZodFile>;
interface $ZodTransformDef extends $ZodTypeDef {
    type: "transform";
    transform: (input: unknown, payload: ParsePayload<unknown>) => MaybeAsync<unknown>;
}
interface $ZodTransformInternals<O = unknown, I = unknown> extends $ZodTypeInternals<O, I> {
    def: $ZodTransformDef;
    isst: never;
}
interface $ZodTransform<O = unknown, I = unknown> extends $ZodType {
    _zod: $ZodTransformInternals<O, I>;
}
declare const $ZodTransform: $constructor<$ZodTransform>;
interface $ZodOptionalDef<T extends SomeType = $ZodType> extends $ZodTypeDef {
    type: "optional";
    innerType: T;
}
interface $ZodOptionalInternals<T extends SomeType = $ZodType> extends $ZodTypeInternals<output<T> | undefined, input<T> | undefined> {
    def: $ZodOptionalDef<T>;
    optin: "optional";
    optout: "optional";
    isst: never;
    values: T["_zod"]["values"];
    pattern: T["_zod"]["pattern"];
}
interface $ZodOptional<T extends SomeType = $ZodType> extends $ZodType {
    _zod: $ZodOptionalInternals<T>;
}
declare const $ZodOptional: $constructor<$ZodOptional>;
interface $ZodExactOptionalDef<T extends SomeType = $ZodType> extends $ZodOptionalDef<T> {
}
interface $ZodExactOptionalInternals<T extends SomeType = $ZodType> extends $ZodOptionalInternals<T> {
    def: $ZodExactOptionalDef<T>;
    output: output<T>;
    input: input<T>;
}
interface $ZodExactOptional<T extends SomeType = $ZodType> extends $ZodType {
    _zod: $ZodExactOptionalInternals<T>;
}
declare const $ZodExactOptional: $constructor<$ZodExactOptional>;
interface $ZodNullableDef<T extends SomeType = $ZodType> extends $ZodTypeDef {
    type: "nullable";
    innerType: T;
}
interface $ZodNullableInternals<T extends SomeType = $ZodType> extends $ZodTypeInternals<output<T> | null, input<T> | null> {
    def: $ZodNullableDef<T>;
    optin: T["_zod"]["optin"];
    optout: T["_zod"]["optout"];
    isst: never;
    values: T["_zod"]["values"];
    pattern: T["_zod"]["pattern"];
}
interface $ZodNullable<T extends SomeType = $ZodType> extends $ZodType {
    _zod: $ZodNullableInternals<T>;
}
declare const $ZodNullable: $constructor<$ZodNullable>;
interface $ZodDefaultDef<T extends SomeType = $ZodType> extends $ZodTypeDef {
    type: "default";
    innerType: T;
    /** The default value. May be a getter. */
    defaultValue: NoUndefined<output<T>>;
}
interface $ZodDefaultInternals<T extends SomeType = $ZodType> extends $ZodTypeInternals<NoUndefined<output<T>>, input<T> | undefined> {
    def: $ZodDefaultDef<T>;
    optin: "optional";
    optout?: "optional" | undefined;
    isst: never;
    values: T["_zod"]["values"];
}
interface $ZodDefault<T extends SomeType = $ZodType> extends $ZodType {
    _zod: $ZodDefaultInternals<T>;
}
declare const $ZodDefault: $constructor<$ZodDefault>;
interface $ZodPrefaultDef<T extends SomeType = $ZodType> extends $ZodTypeDef {
    type: "prefault";
    innerType: T;
    /** The default value. May be a getter. */
    defaultValue: input<T>;
}
interface $ZodPrefaultInternals<T extends SomeType = $ZodType> extends $ZodTypeInternals<NoUndefined<output<T>>, input<T> | undefined> {
    def: $ZodPrefaultDef<T>;
    optin: "optional";
    optout?: "optional" | undefined;
    isst: never;
    values: T["_zod"]["values"];
}
interface $ZodPrefault<T extends SomeType = $ZodType> extends $ZodType {
    _zod: $ZodPrefaultInternals<T>;
}
declare const $ZodPrefault: $constructor<$ZodPrefault>;
interface $ZodNonOptionalDef<T extends SomeType = $ZodType> extends $ZodTypeDef {
    type: "nonoptional";
    innerType: T;
}
interface $ZodNonOptionalInternals<T extends SomeType = $ZodType> extends $ZodTypeInternals<NoUndefined<output<T>>, NoUndefined<input<T>>> {
    def: $ZodNonOptionalDef<T>;
    isst: $ZodIssueInvalidType;
    values: T["_zod"]["values"];
    optin: "optional" | undefined;
    optout: "optional" | undefined;
}
interface $ZodNonOptional<T extends SomeType = $ZodType> extends $ZodType {
    _zod: $ZodNonOptionalInternals<T>;
}
declare const $ZodNonOptional: $constructor<$ZodNonOptional>;
interface $ZodSuccessDef<T extends SomeType = $ZodType> extends $ZodTypeDef {
    type: "success";
    innerType: T;
}
interface $ZodSuccessInternals<T extends SomeType = $ZodType> extends $ZodTypeInternals<boolean, input<T>> {
    def: $ZodSuccessDef<T>;
    isst: never;
    optin: T["_zod"]["optin"];
    optout: "optional" | undefined;
}
interface $ZodSuccess<T extends SomeType = $ZodType> extends $ZodType {
    _zod: $ZodSuccessInternals<T>;
}
declare const $ZodSuccess: $constructor<$ZodSuccess>;
interface $ZodCatchCtx extends ParsePayload {
    /** @deprecated Use `ctx.issues` */
    error: {
        issues: $ZodIssue[];
    };
    /** @deprecated Use `ctx.value` */
    input: unknown;
}
interface $ZodCatchDef<T extends SomeType = $ZodType> extends $ZodTypeDef {
    type: "catch";
    innerType: T;
    catchValue: (ctx: $ZodCatchCtx) => unknown;
}
interface $ZodCatchInternals<T extends SomeType = $ZodType> extends $ZodTypeInternals<output<T>, input<T>> {
    def: $ZodCatchDef<T>;
    optin: T["_zod"]["optin"];
    optout: T["_zod"]["optout"];
    isst: never;
    values: T["_zod"]["values"];
}
interface $ZodCatch<T extends SomeType = $ZodType> extends $ZodType {
    _zod: $ZodCatchInternals<T>;
}
declare const $ZodCatch: $constructor<$ZodCatch>;
interface $ZodNaNDef extends $ZodTypeDef {
    type: "nan";
}
interface $ZodNaNInternals extends $ZodTypeInternals<number, number> {
    def: $ZodNaNDef;
    isst: $ZodIssueInvalidType;
}
interface $ZodNaN extends $ZodType {
    _zod: $ZodNaNInternals;
}
declare const $ZodNaN: $constructor<$ZodNaN>;
interface $ZodPipeDef<A extends SomeType = $ZodType, B extends SomeType = $ZodType> extends $ZodTypeDef {
    type: "pipe";
    in: A;
    out: B;
    /** Only defined inside $ZodCodec instances. */
    transform?: (value: output<A>, payload: ParsePayload<output<A>>) => MaybeAsync<input<B>>;
    /** Only defined inside $ZodCodec instances. */
    reverseTransform?: (value: input<B>, payload: ParsePayload<input<B>>) => MaybeAsync<output<A>>;
}
interface $ZodPipeInternals<A extends SomeType = $ZodType, B extends SomeType = $ZodType> extends $ZodTypeInternals<output<B>, input<A>> {
    def: $ZodPipeDef<A, B>;
    isst: never;
    values: A["_zod"]["values"];
    optin: A["_zod"]["optin"];
    optout: B["_zod"]["optout"];
    propValues: A["_zod"]["propValues"];
}
interface $ZodPipe<A extends SomeType = $ZodType, B extends SomeType = $ZodType> extends $ZodType {
    _zod: $ZodPipeInternals<A, B>;
}
declare const $ZodPipe: $constructor<$ZodPipe>;
interface $ZodCodecDef<A extends SomeType = $ZodType, B extends SomeType = $ZodType> extends $ZodPipeDef<A, B> {
    transform: (value: output<A>, payload: ParsePayload<output<A>>) => MaybeAsync<input<B>>;
    reverseTransform: (value: input<B>, payload: ParsePayload<input<B>>) => MaybeAsync<output<A>>;
}
interface $ZodCodecInternals<A extends SomeType = $ZodType, B extends SomeType = $ZodType> extends $ZodTypeInternals<output<B>, input<A>> {
    def: $ZodCodecDef<A, B>;
    isst: never;
    values: A["_zod"]["values"];
    optin: A["_zod"]["optin"];
    optout: B["_zod"]["optout"];
    propValues: A["_zod"]["propValues"];
}
interface $ZodCodec<A extends SomeType = $ZodType, B extends SomeType = $ZodType> extends $ZodType {
    _zod: $ZodCodecInternals<A, B>;
}
declare const $ZodCodec: $constructor<$ZodCodec>;
interface $ZodReadonlyDef<T extends SomeType = $ZodType> extends $ZodTypeDef {
    type: "readonly";
    innerType: T;
}
interface $ZodReadonlyInternals<T extends SomeType = $ZodType> extends $ZodTypeInternals<MakeReadonly<output<T>>, MakeReadonly<input<T>>> {
    def: $ZodReadonlyDef<T>;
    optin: T["_zod"]["optin"];
    optout: T["_zod"]["optout"];
    isst: never;
    propValues: T["_zod"]["propValues"];
    values: T["_zod"]["values"];
}
interface $ZodReadonly<T extends SomeType = $ZodType> extends $ZodType {
    _zod: $ZodReadonlyInternals<T>;
}
declare const $ZodReadonly: $constructor<$ZodReadonly>;
interface $ZodTemplateLiteralDef extends $ZodTypeDef {
    type: "template_literal";
    parts: $ZodTemplateLiteralPart[];
    format?: string | undefined;
}
interface $ZodTemplateLiteralInternals<Template extends string = string> extends $ZodTypeInternals<Template, Template> {
    pattern: RegExp;
    def: $ZodTemplateLiteralDef;
    isst: $ZodIssueInvalidType;
}
type LiteralPart = Exclude<Literal, symbol>;
interface SchemaPartInternals extends $ZodTypeInternals<LiteralPart, LiteralPart> {
    pattern: RegExp;
}
interface SchemaPart extends $ZodType {
    _zod: SchemaPartInternals;
}
type $ZodTemplateLiteralPart = LiteralPart | SchemaPart;
type UndefinedToEmptyString<T> = T extends undefined ? "" : T;
type AppendToTemplateLiteral<Template extends string, Suffix extends LiteralPart | $ZodType> = Suffix extends LiteralPart ? `${Template}${UndefinedToEmptyString<Suffix>}` : Suffix extends $ZodType ? `${Template}${output<Suffix> extends infer T extends LiteralPart ? UndefinedToEmptyString<T> : never}` : never;
type ConcatenateTupleOfStrings<T extends string[]> = T extends [
    infer First extends string,
    ...infer Rest extends string[]
] ? Rest extends string[] ? First extends "" ? ConcatenateTupleOfStrings<Rest> : `${First}${ConcatenateTupleOfStrings<Rest>}` : never : "";
type ConvertPartsToStringTuple<Parts extends $ZodTemplateLiteralPart[]> = {
    [K in keyof Parts]: Parts[K] extends LiteralPart ? `${UndefinedToEmptyString<Parts[K]>}` : Parts[K] extends $ZodType ? `${output<Parts[K]> extends infer T extends LiteralPart ? UndefinedToEmptyString<T> : never}` : never;
};
type ToTemplateLiteral<Parts extends $ZodTemplateLiteralPart[]> = ConcatenateTupleOfStrings<ConvertPartsToStringTuple<Parts>>;
type $PartsToTemplateLiteral<Parts extends $ZodTemplateLiteralPart[]> = [] extends Parts ? `` : Parts extends [...infer Rest, infer Last extends $ZodTemplateLiteralPart] ? Rest extends $ZodTemplateLiteralPart[] ? AppendToTemplateLiteral<$PartsToTemplateLiteral<Rest>, Last> : never : never;
interface $ZodTemplateLiteral<Template extends string = string> extends $ZodType {
    _zod: $ZodTemplateLiteralInternals<Template>;
}
declare const $ZodTemplateLiteral: $constructor<$ZodTemplateLiteral>;
type $ZodFunctionArgs = $ZodType<unknown[], unknown[]>;
type $ZodFunctionIn = $ZodFunctionArgs;
type $ZodFunctionOut = $ZodType;
type $InferInnerFunctionType<Args extends $ZodFunctionIn, Returns extends $ZodFunctionOut> = (...args: $ZodFunctionIn extends Args ? never[] : output<Args>) => input<Returns>;
type $InferInnerFunctionTypeAsync<Args extends $ZodFunctionIn, Returns extends $ZodFunctionOut> = (...args: $ZodFunctionIn extends Args ? never[] : output<Args>) => MaybeAsync<input<Returns>>;
type $InferOuterFunctionType<Args extends $ZodFunctionIn, Returns extends $ZodFunctionOut> = (...args: $ZodFunctionIn extends Args ? never[] : input<Args>) => output<Returns>;
type $InferOuterFunctionTypeAsync<Args extends $ZodFunctionIn, Returns extends $ZodFunctionOut> = (...args: $ZodFunctionIn extends Args ? never[] : input<Args>) => Promise<output<Returns>>;
interface $ZodFunctionDef<In extends $ZodFunctionIn = $ZodFunctionIn, Out extends $ZodFunctionOut = $ZodFunctionOut> extends $ZodTypeDef {
    type: "function";
    input: In;
    output: Out;
}
interface $ZodFunctionInternals<Args extends $ZodFunctionIn, Returns extends $ZodFunctionOut> extends $ZodTypeInternals<$InferOuterFunctionType<Args, Returns>, $InferInnerFunctionType<Args, Returns>> {
    def: $ZodFunctionDef<Args, Returns>;
    isst: $ZodIssueInvalidType;
}
interface $ZodFunctionParams<I extends $ZodFunctionIn, O extends $ZodType> {
    input?: I;
    output?: O;
}
interface $ZodFunction<Args extends $ZodFunctionIn = $ZodFunctionIn, Returns extends $ZodFunctionOut = $ZodFunctionOut> extends $ZodType<any, any, $ZodFunctionInternals<Args, Returns>> {
    /** @deprecated */
    _def: $ZodFunctionDef<Args, Returns>;
    _input: $InferInnerFunctionType<Args, Returns>;
    _output: $InferOuterFunctionType<Args, Returns>;
    implement<F extends $InferInnerFunctionType<Args, Returns>>(func: F): (...args: Parameters<this["_output"]>) => ReturnType<F> extends ReturnType<this["_output"]> ? ReturnType<F> : ReturnType<this["_output"]>;
    implementAsync<F extends $InferInnerFunctionTypeAsync<Args, Returns>>(func: F): F extends $InferOuterFunctionTypeAsync<Args, Returns> ? F : $InferOuterFunctionTypeAsync<Args, Returns>;
    input<const Items extends TupleItems, const Rest extends $ZodFunctionOut = $ZodFunctionOut>(args: Items, rest?: Rest): $ZodFunction<$ZodTuple<Items, Rest>, Returns>;
    input<NewArgs extends $ZodFunctionIn>(args: NewArgs): $ZodFunction<NewArgs, Returns>;
    input(...args: any[]): $ZodFunction<any, Returns>;
    output<NewReturns extends $ZodType>(output: NewReturns): $ZodFunction<Args, NewReturns>;
}
declare const $ZodFunction: $constructor<$ZodFunction>;
interface $ZodPromiseDef<T extends SomeType = $ZodType> extends $ZodTypeDef {
    type: "promise";
    innerType: T;
}
interface $ZodPromiseInternals<T extends SomeType = $ZodType> extends $ZodTypeInternals<Promise<output<T>>, MaybeAsync<input<T>>> {
    def: $ZodPromiseDef<T>;
    isst: never;
}
interface $ZodPromise<T extends SomeType = $ZodType> extends $ZodType {
    _zod: $ZodPromiseInternals<T>;
}
declare const $ZodPromise: $constructor<$ZodPromise>;
interface $ZodLazyDef<T extends SomeType = $ZodType> extends $ZodTypeDef {
    type: "lazy";
    getter: () => T;
}
interface $ZodLazyInternals<T extends SomeType = $ZodType> extends $ZodTypeInternals<output<T>, input<T>> {
    def: $ZodLazyDef<T>;
    isst: never;
    /** Auto-cached way to retrieve the inner schema */
    innerType: T;
    pattern: T["_zod"]["pattern"];
    propValues: T["_zod"]["propValues"];
    optin: T["_zod"]["optin"];
    optout: T["_zod"]["optout"];
}
interface $ZodLazy<T extends SomeType = $ZodType> extends $ZodType {
    _zod: $ZodLazyInternals<T>;
}
declare const $ZodLazy: $constructor<$ZodLazy>;
interface $ZodCustomDef<O = unknown> extends $ZodTypeDef, $ZodCheckDef {
    type: "custom";
    check: "custom";
    path?: PropertyKey[] | undefined;
    error?: $ZodErrorMap | undefined;
    params?: Record<string, any> | undefined;
    fn: (arg: O) => unknown;
}
interface $ZodCustomInternals<O = unknown, I = unknown> extends $ZodTypeInternals<O, I>, $ZodCheckInternals<O> {
    def: $ZodCustomDef;
    issc: $ZodIssue;
    isst: never;
    bag: LoosePartial<{
        Class: typeof Class;
    }>;
}
interface $ZodCustom<O = unknown, I = unknown> extends $ZodType {
    _zod: $ZodCustomInternals<O, I>;
}
declare const $ZodCustom: $constructor<$ZodCustom>;
type $ZodTypes = $ZodString | $ZodNumber | $ZodBigInt | $ZodBoolean | $ZodDate | $ZodSymbol | $ZodUndefined | $ZodNullable | $ZodNull | $ZodAny | $ZodUnknown | $ZodNever | $ZodVoid | $ZodArray | $ZodObject | $ZodUnion | $ZodIntersection | $ZodTuple | $ZodRecord | $ZodMap | $ZodSet | $ZodLiteral | $ZodEnum | $ZodFunction | $ZodPromise | $ZodLazy | $ZodOptional | $ZodDefault | $ZodPrefault | $ZodTemplateLiteral | $ZodCustom | $ZodTransform | $ZodNonOptional | $ZodReadonly | $ZodNaN | $ZodPipe | $ZodSuccess | $ZodCatch | $ZodFile;
type $ZodStringFormatTypes = $ZodGUID | $ZodUUID | $ZodEmail | $ZodURL | $ZodEmoji | $ZodNanoID | $ZodCUID | $ZodCUID2 | $ZodULID | $ZodXID | $ZodKSUID | $ZodISODateTime | $ZodISODate | $ZodISOTime | $ZodISODuration | $ZodIPv4 | $ZodIPv6 | $ZodMAC | $ZodCIDRv4 | $ZodCIDRv6 | $ZodBase64 | $ZodBase64URL | $ZodE164 | $ZodJWT | $ZodCustomStringFormat<"hex"> | $ZodCustomStringFormat<HashFormat> | $ZodCustomStringFormat<"hostname">;

interface $ZodCheckDef {
    check: string;
    error?: $ZodErrorMap<never> | undefined;
    /** If true, no later checks will be executed if this check fails. Default `false`. */
    abort?: boolean | undefined;
    /** If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`. */
    when?: ((payload: ParsePayload) => boolean) | undefined;
}
interface $ZodCheckInternals<T> {
    def: $ZodCheckDef;
    /** The set of issues this check might throw. */
    issc?: $ZodIssueBase;
    check(payload: ParsePayload<T>): MaybeAsync<void>;
    onattach: ((schema: $ZodType) => void)[];
}
interface $ZodCheck<in T = never> {
    _zod: $ZodCheckInternals<T>;
}
declare const $ZodCheck: $constructor<$ZodCheck<any>>;
interface $ZodCheckLessThanDef extends $ZodCheckDef {
    check: "less_than";
    value: Numeric;
    inclusive: boolean;
}
interface $ZodCheckLessThanInternals<T extends Numeric = Numeric> extends $ZodCheckInternals<T> {
    def: $ZodCheckLessThanDef;
    issc: $ZodIssueTooBig<T>;
}
interface $ZodCheckLessThan<T extends Numeric = Numeric> extends $ZodCheck<T> {
    _zod: $ZodCheckLessThanInternals<T>;
}
declare const $ZodCheckLessThan: $constructor<$ZodCheckLessThan>;
interface $ZodCheckGreaterThanDef extends $ZodCheckDef {
    check: "greater_than";
    value: Numeric;
    inclusive: boolean;
}
interface $ZodCheckGreaterThanInternals<T extends Numeric = Numeric> extends $ZodCheckInternals<T> {
    def: $ZodCheckGreaterThanDef;
    issc: $ZodIssueTooSmall<T>;
}
interface $ZodCheckGreaterThan<T extends Numeric = Numeric> extends $ZodCheck<T> {
    _zod: $ZodCheckGreaterThanInternals<T>;
}
declare const $ZodCheckGreaterThan: $constructor<$ZodCheckGreaterThan>;
interface $ZodCheckMultipleOfDef<T extends number | bigint = number | bigint> extends $ZodCheckDef {
    check: "multiple_of";
    value: T;
}
interface $ZodCheckMultipleOfInternals<T extends number | bigint = number | bigint> extends $ZodCheckInternals<T> {
    def: $ZodCheckMultipleOfDef<T>;
    issc: $ZodIssueNotMultipleOf;
}
interface $ZodCheckMultipleOf<T extends number | bigint = number | bigint> extends $ZodCheck<T> {
    _zod: $ZodCheckMultipleOfInternals<T>;
}
declare const $ZodCheckMultipleOf: $constructor<$ZodCheckMultipleOf<number | bigint>>;
type $ZodNumberFormats = "int32" | "uint32" | "float32" | "float64" | "safeint";
interface $ZodCheckNumberFormatDef extends $ZodCheckDef {
    check: "number_format";
    format: $ZodNumberFormats;
}
interface $ZodCheckNumberFormatInternals extends $ZodCheckInternals<number> {
    def: $ZodCheckNumberFormatDef;
    issc: $ZodIssueInvalidType | $ZodIssueTooBig<"number"> | $ZodIssueTooSmall<"number">;
}
interface $ZodCheckNumberFormat extends $ZodCheck<number> {
    _zod: $ZodCheckNumberFormatInternals;
}
declare const $ZodCheckNumberFormat: $constructor<$ZodCheckNumberFormat>;
type $ZodBigIntFormats = "int64" | "uint64";
interface $ZodCheckBigIntFormatDef extends $ZodCheckDef {
    check: "bigint_format";
    format: $ZodBigIntFormats | undefined;
}
interface $ZodCheckBigIntFormatInternals extends $ZodCheckInternals<bigint> {
    def: $ZodCheckBigIntFormatDef;
    issc: $ZodIssueTooBig<"bigint"> | $ZodIssueTooSmall<"bigint">;
}
interface $ZodCheckBigIntFormat extends $ZodCheck<bigint> {
    _zod: $ZodCheckBigIntFormatInternals;
}
declare const $ZodCheckBigIntFormat: $constructor<$ZodCheckBigIntFormat>;
interface $ZodCheckMaxSizeDef extends $ZodCheckDef {
    check: "max_size";
    maximum: number;
}
interface $ZodCheckMaxSizeInternals<T extends HasSize = HasSize> extends $ZodCheckInternals<T> {
    def: $ZodCheckMaxSizeDef;
    issc: $ZodIssueTooBig<T>;
}
interface $ZodCheckMaxSize<T extends HasSize = HasSize> extends $ZodCheck<T> {
    _zod: $ZodCheckMaxSizeInternals<T>;
}
declare const $ZodCheckMaxSize: $constructor<$ZodCheckMaxSize>;
interface $ZodCheckMinSizeDef extends $ZodCheckDef {
    check: "min_size";
    minimum: number;
}
interface $ZodCheckMinSizeInternals<T extends HasSize = HasSize> extends $ZodCheckInternals<T> {
    def: $ZodCheckMinSizeDef;
    issc: $ZodIssueTooSmall<T>;
}
interface $ZodCheckMinSize<T extends HasSize = HasSize> extends $ZodCheck<T> {
    _zod: $ZodCheckMinSizeInternals<T>;
}
declare const $ZodCheckMinSize: $constructor<$ZodCheckMinSize>;
interface $ZodCheckSizeEqualsDef extends $ZodCheckDef {
    check: "size_equals";
    size: number;
}
interface $ZodCheckSizeEqualsInternals<T extends HasSize = HasSize> extends $ZodCheckInternals<T> {
    def: $ZodCheckSizeEqualsDef;
    issc: $ZodIssueTooBig<T> | $ZodIssueTooSmall<T>;
}
interface $ZodCheckSizeEquals<T extends HasSize = HasSize> extends $ZodCheck<T> {
    _zod: $ZodCheckSizeEqualsInternals<T>;
}
declare const $ZodCheckSizeEquals: $constructor<$ZodCheckSizeEquals>;
interface $ZodCheckMaxLengthDef extends $ZodCheckDef {
    check: "max_length";
    maximum: number;
}
interface $ZodCheckMaxLengthInternals<T extends HasLength = HasLength> extends $ZodCheckInternals<T> {
    def: $ZodCheckMaxLengthDef;
    issc: $ZodIssueTooBig<T>;
}
interface $ZodCheckMaxLength<T extends HasLength = HasLength> extends $ZodCheck<T> {
    _zod: $ZodCheckMaxLengthInternals<T>;
}
declare const $ZodCheckMaxLength: $constructor<$ZodCheckMaxLength>;
interface $ZodCheckMinLengthDef extends $ZodCheckDef {
    check: "min_length";
    minimum: number;
}
interface $ZodCheckMinLengthInternals<T extends HasLength = HasLength> extends $ZodCheckInternals<T> {
    def: $ZodCheckMinLengthDef;
    issc: $ZodIssueTooSmall<T>;
}
interface $ZodCheckMinLength<T extends HasLength = HasLength> extends $ZodCheck<T> {
    _zod: $ZodCheckMinLengthInternals<T>;
}
declare const $ZodCheckMinLength: $constructor<$ZodCheckMinLength>;
interface $ZodCheckLengthEqualsDef extends $ZodCheckDef {
    check: "length_equals";
    length: number;
}
interface $ZodCheckLengthEqualsInternals<T extends HasLength = HasLength> extends $ZodCheckInternals<T> {
    def: $ZodCheckLengthEqualsDef;
    issc: $ZodIssueTooBig<T> | $ZodIssueTooSmall<T>;
}
interface $ZodCheckLengthEquals<T extends HasLength = HasLength> extends $ZodCheck<T> {
    _zod: $ZodCheckLengthEqualsInternals<T>;
}
declare const $ZodCheckLengthEquals: $constructor<$ZodCheckLengthEquals>;
type $ZodStringFormats = "email" | "url" | "emoji" | "uuid" | "guid" | "nanoid" | "cuid" | "cuid2" | "ulid" | "xid" | "ksuid" | "datetime" | "date" | "time" | "duration" | "ipv4" | "ipv6" | "cidrv4" | "cidrv6" | "base64" | "base64url" | "json_string" | "e164" | "lowercase" | "uppercase" | "regex" | "jwt" | "starts_with" | "ends_with" | "includes";
interface $ZodCheckStringFormatDef<Format extends string = string> extends $ZodCheckDef {
    check: "string_format";
    format: Format;
    pattern?: RegExp | undefined;
}
interface $ZodCheckStringFormatInternals extends $ZodCheckInternals<string> {
    def: $ZodCheckStringFormatDef;
    issc: $ZodIssueInvalidStringFormat;
}
interface $ZodCheckStringFormat extends $ZodCheck<string> {
    _zod: $ZodCheckStringFormatInternals;
}
declare const $ZodCheckStringFormat: $constructor<$ZodCheckStringFormat>;
interface $ZodCheckRegexDef extends $ZodCheckStringFormatDef {
    format: "regex";
    pattern: RegExp;
}
interface $ZodCheckRegexInternals extends $ZodCheckInternals<string> {
    def: $ZodCheckRegexDef;
    issc: $ZodIssueInvalidStringFormat;
}
interface $ZodCheckRegex extends $ZodCheck<string> {
    _zod: $ZodCheckRegexInternals;
}
declare const $ZodCheckRegex: $constructor<$ZodCheckRegex>;
interface $ZodCheckLowerCaseDef extends $ZodCheckStringFormatDef<"lowercase"> {
}
interface $ZodCheckLowerCaseInternals extends $ZodCheckInternals<string> {
    def: $ZodCheckLowerCaseDef;
    issc: $ZodIssueInvalidStringFormat;
}
interface $ZodCheckLowerCase extends $ZodCheck<string> {
    _zod: $ZodCheckLowerCaseInternals;
}
declare const $ZodCheckLowerCase: $constructor<$ZodCheckLowerCase>;
interface $ZodCheckUpperCaseDef extends $ZodCheckStringFormatDef<"uppercase"> {
}
interface $ZodCheckUpperCaseInternals extends $ZodCheckInternals<string> {
    def: $ZodCheckUpperCaseDef;
    issc: $ZodIssueInvalidStringFormat;
}
interface $ZodCheckUpperCase extends $ZodCheck<string> {
    _zod: $ZodCheckUpperCaseInternals;
}
declare const $ZodCheckUpperCase: $constructor<$ZodCheckUpperCase>;
interface $ZodCheckIncludesDef extends $ZodCheckStringFormatDef<"includes"> {
    includes: string;
    position?: number | undefined;
}
interface $ZodCheckIncludesInternals extends $ZodCheckInternals<string> {
    def: $ZodCheckIncludesDef;
    issc: $ZodIssueInvalidStringFormat;
}
interface $ZodCheckIncludes extends $ZodCheck<string> {
    _zod: $ZodCheckIncludesInternals;
}
declare const $ZodCheckIncludes: $constructor<$ZodCheckIncludes>;
interface $ZodCheckStartsWithDef extends $ZodCheckStringFormatDef<"starts_with"> {
    prefix: string;
}
interface $ZodCheckStartsWithInternals extends $ZodCheckInternals<string> {
    def: $ZodCheckStartsWithDef;
    issc: $ZodIssueInvalidStringFormat;
}
interface $ZodCheckStartsWith extends $ZodCheck<string> {
    _zod: $ZodCheckStartsWithInternals;
}
declare const $ZodCheckStartsWith: $constructor<$ZodCheckStartsWith>;
interface $ZodCheckEndsWithDef extends $ZodCheckStringFormatDef<"ends_with"> {
    suffix: string;
}
interface $ZodCheckEndsWithInternals extends $ZodCheckInternals<string> {
    def: $ZodCheckEndsWithDef;
    issc: $ZodIssueInvalidStringFormat;
}
interface $ZodCheckEndsWith extends $ZodCheckInternals<string> {
    _zod: $ZodCheckEndsWithInternals;
}
declare const $ZodCheckEndsWith: $constructor<$ZodCheckEndsWith>;
interface $ZodCheckPropertyDef extends $ZodCheckDef {
    check: "property";
    property: string;
    schema: $ZodType;
}
interface $ZodCheckPropertyInternals<T extends object = object> extends $ZodCheckInternals<T> {
    def: $ZodCheckPropertyDef;
    issc: $ZodIssue;
}
interface $ZodCheckProperty<T extends object = object> extends $ZodCheck<T> {
    _zod: $ZodCheckPropertyInternals<T>;
}
declare const $ZodCheckProperty: $constructor<$ZodCheckProperty>;
interface $ZodCheckMimeTypeDef extends $ZodCheckDef {
    check: "mime_type";
    mime: MimeTypes[];
}
interface $ZodCheckMimeTypeInternals<T extends File = File> extends $ZodCheckInternals<T> {
    def: $ZodCheckMimeTypeDef;
    issc: $ZodIssueInvalidValue;
}
interface $ZodCheckMimeType<T extends File = File> extends $ZodCheck<T> {
    _zod: $ZodCheckMimeTypeInternals<T>;
}
declare const $ZodCheckMimeType: $constructor<$ZodCheckMimeType>;
interface $ZodCheckOverwriteDef<T = unknown> extends $ZodCheckDef {
    check: "overwrite";
    tx(value: T): T;
}
interface $ZodCheckOverwriteInternals<T = unknown> extends $ZodCheckInternals<T> {
    def: $ZodCheckOverwriteDef<T>;
    issc: never;
}
interface $ZodCheckOverwrite<T = unknown> extends $ZodCheck<T> {
    _zod: $ZodCheckOverwriteInternals<T>;
}
declare const $ZodCheckOverwrite: $constructor<$ZodCheckOverwrite>;
type $ZodChecks = $ZodCheckLessThan | $ZodCheckGreaterThan | $ZodCheckMultipleOf | $ZodCheckNumberFormat | $ZodCheckBigIntFormat | $ZodCheckMaxSize | $ZodCheckMinSize | $ZodCheckSizeEquals | $ZodCheckMaxLength | $ZodCheckMinLength | $ZodCheckLengthEquals | $ZodCheckStringFormat | $ZodCheckProperty | $ZodCheckMimeType | $ZodCheckOverwrite;
type $ZodStringFormatChecks = $ZodCheckRegex | $ZodCheckLowerCase | $ZodCheckUpperCase | $ZodCheckIncludes | $ZodCheckStartsWith | $ZodCheckEndsWith | $ZodStringFormatTypes;

interface $ZodIssueBase {
    readonly code?: string;
    readonly input?: unknown;
    readonly path: PropertyKey[];
    readonly message: string;
}
type $ZodInvalidTypeExpected = "string" | "number" | "int" | "boolean" | "bigint" | "symbol" | "undefined" | "null" | "never" | "void" | "date" | "array" | "object" | "tuple" | "record" | "map" | "set" | "file" | "nonoptional" | "nan" | "function" | (string & {});
interface $ZodIssueInvalidType<Input = unknown> extends $ZodIssueBase {
    readonly code: "invalid_type";
    readonly expected: $ZodInvalidTypeExpected;
    readonly input?: Input;
}
interface $ZodIssueTooBig<Input = unknown> extends $ZodIssueBase {
    readonly code: "too_big";
    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
    readonly maximum: number | bigint;
    readonly inclusive?: boolean;
    readonly exact?: boolean;
    readonly input?: Input;
}
interface $ZodIssueTooSmall<Input = unknown> extends $ZodIssueBase {
    readonly code: "too_small";
    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
    readonly minimum: number | bigint;
    /** True if the allowable range includes the minimum */
    readonly inclusive?: boolean;
    /** True if the allowed value is fixed (e.g.` z.length(5)`), not a range (`z.minLength(5)`) */
    readonly exact?: boolean;
    readonly input?: Input;
}
interface $ZodIssueInvalidStringFormat extends $ZodIssueBase {
    readonly code: "invalid_format";
    readonly format: $ZodStringFormats | (string & {});
    readonly pattern?: string;
    readonly input?: string;
}
interface $ZodIssueNotMultipleOf<Input extends number | bigint = number | bigint> extends $ZodIssueBase {
    readonly code: "not_multiple_of";
    readonly divisor: number;
    readonly input?: Input;
}
interface $ZodIssueUnrecognizedKeys extends $ZodIssueBase {
    readonly code: "unrecognized_keys";
    readonly keys: string[];
    readonly input?: Record<string, unknown>;
}
interface $ZodIssueInvalidUnionNoMatch extends $ZodIssueBase {
    readonly code: "invalid_union";
    readonly errors: $ZodIssue[][];
    readonly input?: unknown;
    readonly discriminator?: string | undefined;
    readonly inclusive?: true;
}
interface $ZodIssueInvalidUnionMultipleMatch extends $ZodIssueBase {
    readonly code: "invalid_union";
    readonly errors: [];
    readonly input?: unknown;
    readonly discriminator?: string | undefined;
    readonly inclusive: false;
}
type $ZodIssueInvalidUnion = $ZodIssueInvalidUnionNoMatch | $ZodIssueInvalidUnionMultipleMatch;
interface $ZodIssueInvalidKey<Input = unknown> extends $ZodIssueBase {
    readonly code: "invalid_key";
    readonly origin: "map" | "record";
    readonly issues: $ZodIssue[];
    readonly input?: Input;
}
interface $ZodIssueInvalidElement<Input = unknown> extends $ZodIssueBase {
    readonly code: "invalid_element";
    readonly origin: "map" | "set";
    readonly key: unknown;
    readonly issues: $ZodIssue[];
    readonly input?: Input;
}
interface $ZodIssueInvalidValue<Input = unknown> extends $ZodIssueBase {
    readonly code: "invalid_value";
    readonly values: Primitive[];
    readonly input?: Input;
}
interface $ZodIssueCustom extends $ZodIssueBase {
    readonly code: "custom";
    readonly params?: Record<string, any> | undefined;
    readonly input?: unknown;
}
interface $ZodIssueStringCommonFormats extends $ZodIssueInvalidStringFormat {
    format: Exclude<$ZodStringFormats, "regex" | "jwt" | "starts_with" | "ends_with" | "includes">;
}
interface $ZodIssueStringInvalidRegex extends $ZodIssueInvalidStringFormat {
    format: "regex";
    pattern: string;
}
interface $ZodIssueStringInvalidJWT extends $ZodIssueInvalidStringFormat {
    format: "jwt";
    algorithm?: string;
}
interface $ZodIssueStringStartsWith extends $ZodIssueInvalidStringFormat {
    format: "starts_with";
    prefix: string;
}
interface $ZodIssueStringEndsWith extends $ZodIssueInvalidStringFormat {
    format: "ends_with";
    suffix: string;
}
interface $ZodIssueStringIncludes extends $ZodIssueInvalidStringFormat {
    format: "includes";
    includes: string;
}
type $ZodStringFormatIssues = $ZodIssueStringCommonFormats | $ZodIssueStringInvalidRegex | $ZodIssueStringInvalidJWT | $ZodIssueStringStartsWith | $ZodIssueStringEndsWith | $ZodIssueStringIncludes;
type $ZodIssue = $ZodIssueInvalidType | $ZodIssueTooBig | $ZodIssueTooSmall | $ZodIssueInvalidStringFormat | $ZodIssueNotMultipleOf | $ZodIssueUnrecognizedKeys | $ZodIssueInvalidUnion | $ZodIssueInvalidKey | $ZodIssueInvalidElement | $ZodIssueInvalidValue | $ZodIssueCustom;
type $ZodIssueCode = $ZodIssue["code"];
type $ZodInternalIssue<T extends $ZodIssueBase = $ZodIssue> = T extends any ? RawIssue$1<T> : never;
type RawIssue$1<T extends $ZodIssueBase> = T extends any ? Flatten<MakePartial<T, "message" | "path"> & {
    /** The input data */
    readonly input: unknown;
    /** The schema or check that originated this issue. */
    readonly inst?: $ZodType | $ZodCheck;
    /** If `true`, Zod will continue executing checks/refinements after this issue. */
    readonly continue?: boolean | undefined;
} & Record<string, unknown>> : never;
type $ZodRawIssue<T extends $ZodIssueBase = $ZodIssue> = $ZodInternalIssue<T>;
interface $ZodErrorMap<T extends $ZodIssueBase = $ZodIssue> {
    (issue: $ZodRawIssue<T>): {
        message: string;
    } | string | undefined | null;
}
interface $ZodError<T = unknown> extends Error {
    type: T;
    issues: $ZodIssue[];
    _zod: {
        output: T;
        def: $ZodIssue[];
    };
    stack?: string;
    name: string;
}
declare const $ZodError: $constructor<$ZodError>;
interface $ZodRealError<T = any> extends $ZodError<T> {
}
declare const $ZodRealError: $constructor<$ZodRealError>;
type $ZodFlattenedError<T, U = string> = _FlattenedError<T, U>;
type _FlattenedError<T, U = string> = {
    formErrors: U[];
    fieldErrors: {
        [P in keyof T]?: U[];
    };
};
declare function flattenError<T>(error: $ZodError<T>): _FlattenedError<T>;
declare function flattenError<T, U>(error: $ZodError<T>, mapper?: (issue: $ZodIssue) => U): _FlattenedError<T, U>;
type _ZodFormattedError<T, U = string> = T extends [any, ...any[]] ? {
    [K in keyof T]?: $ZodFormattedError<T[K], U>;
} : T extends any[] ? {
    [k: number]: $ZodFormattedError<T[number], U>;
} : T extends object ? Flatten<{
    [K in keyof T]?: $ZodFormattedError<T[K], U>;
}> : any;
type $ZodFormattedError<T, U = string> = {
    _errors: U[];
} & Flatten<_ZodFormattedError<T, U>>;
declare function formatError<T>(error: $ZodError<T>): $ZodFormattedError<T>;
declare function formatError<T, U>(error: $ZodError<T>, mapper?: (issue: $ZodIssue) => U): $ZodFormattedError<T, U>;
type $ZodErrorTree<T, U = string> = T extends Primitive ? {
    errors: U[];
} : T extends [any, ...any[]] ? {
    errors: U[];
    items?: {
        [K in keyof T]?: $ZodErrorTree<T[K], U>;
    };
} : T extends any[] ? {
    errors: U[];
    items?: Array<$ZodErrorTree<T[number], U>>;
} : T extends object ? {
    errors: U[];
    properties?: {
        [K in keyof T]?: $ZodErrorTree<T[K], U>;
    };
} : {
    errors: U[];
};
declare function treeifyError<T>(error: $ZodError<T>): $ZodErrorTree<T>;
declare function treeifyError<T, U>(error: $ZodError<T>, mapper?: (issue: $ZodIssue) => U): $ZodErrorTree<T, U>;
/** Format a ZodError as a human-readable string in the following form.
 *
 * From
 *
 * ```ts
 * ZodError {
 *   issues: [
 *     {
 *       expected: 'string',
 *       code: 'invalid_type',
 *       path: [ 'username' ],
 *       message: 'Invalid input: expected string'
 *     },
 *     {
 *       expected: 'number',
 *       code: 'invalid_type',
 *       path: [ 'favoriteNumbers', 1 ],
 *       message: 'Invalid input: expected number'
 *     }
 *   ];
 * }
 * ```
 *
 * to
 *
 * ```
 * username
 *   ✖ Expected number, received string at "username
 * favoriteNumbers[0]
 *   ✖ Invalid input: expected number
 * ```
 */
declare function toDotPath(_path: readonly (string | number | symbol | StandardSchemaV1.PathSegment)[]): string;
declare function prettifyError(error: StandardSchemaV1.FailureResult): string;

type ZodTrait = {
    _zod: {
        def: any;
        [k: string]: any;
    };
};
/** A special constant with type `never` */
declare const NEVER: never;
interface $constructor<T extends ZodTrait, D = T["_zod"]["def"]> {
    new (def: D): T;
    init(inst: T, def: D): asserts inst is T;
}
declare function $constructor<T extends ZodTrait, D = T["_zod"]["def"]>(name: string, initializer: (inst: T, def: D) => void, params?: {
    Parent?: typeof Class;
}): $constructor<T, D>;
declare const $brand: unique symbol;
type $brand<T extends string | number | symbol = string | number | symbol> = {
    [$brand]: {
        [k in T]: true;
    };
};
type $ZodBranded<T extends SomeType, Brand extends string | number | symbol, Dir extends "in" | "out" | "inout" = "out"> = T & (Dir extends "inout" ? {
    _zod: {
        input: input<T> & $brand<Brand>;
        output: output<T> & $brand<Brand>;
    };
} : Dir extends "in" ? {
    _zod: {
        input: input<T> & $brand<Brand>;
    };
} : {
    _zod: {
        output: output<T> & $brand<Brand>;
    };
});
type $ZodNarrow<T extends SomeType, Out> = T & {
    _zod: {
        output: Out;
    };
};
declare class $ZodAsyncError extends Error {
    constructor();
}
declare class $ZodEncodeError extends Error {
    constructor(name: string);
}
type input<T> = T extends {
    _zod: {
        input: any;
    };
} ? T["_zod"]["input"] : unknown;
type output<T> = T extends {
    _zod: {
        output: any;
    };
} ? T["_zod"]["output"] : unknown;

interface $ZodConfig {
    /** Custom error map. Overrides `config().localeError`. */
    customError?: $ZodErrorMap | undefined;
    /** Localized error map. Lowest priority. */
    localeError?: $ZodErrorMap | undefined;
    /** Disable JIT schema compilation. Useful in environments that disallow `eval`. */
    jitless?: boolean | undefined;
}
declare const globalConfig: $ZodConfig;
declare function config(newConfig?: Partial<$ZodConfig>): $ZodConfig;

type $ZodErrorClass = {
    new (issues: $ZodIssue[]): $ZodError;
};
type $Parse = <T extends $ZodType>(schema: T, value: unknown, _ctx?: ParseContext<$ZodIssue>, _params?: {
    callee?: AnyFunc;
    Err?: $ZodErrorClass;
}) => output<T>;
declare const _parse: (_Err: $ZodErrorClass) => $Parse;
declare const parse$1: $Parse;
type $ParseAsync = <T extends $ZodType>(schema: T, value: unknown, _ctx?: ParseContext<$ZodIssue>, _params?: {
    callee?: AnyFunc;
    Err?: $ZodErrorClass;
}) => Promise<output<T>>;
declare const _parseAsync: (_Err: $ZodErrorClass) => $ParseAsync;
declare const parseAsync$1: $ParseAsync;
type $SafeParse = <T extends $ZodType>(schema: T, value: unknown, _ctx?: ParseContext<$ZodIssue>) => SafeParseResult<output<T>>;
declare const _safeParse: (_Err: $ZodErrorClass) => $SafeParse;
declare const safeParse$1: $SafeParse;
type $SafeParseAsync = <T extends $ZodType>(schema: T, value: unknown, _ctx?: ParseContext<$ZodIssue>) => Promise<SafeParseResult<output<T>>>;
declare const _safeParseAsync: (_Err: $ZodErrorClass) => $SafeParseAsync;
declare const safeParseAsync$1: $SafeParseAsync;
type $Encode = <T extends $ZodType>(schema: T, value: output<T>, _ctx?: ParseContext<$ZodIssue>) => input<T>;
declare const _encode: (_Err: $ZodErrorClass) => $Encode;
declare const encode$1: $Encode;
type $Decode = <T extends $ZodType>(schema: T, value: input<T>, _ctx?: ParseContext<$ZodIssue>) => output<T>;
declare const _decode: (_Err: $ZodErrorClass) => $Decode;
declare const decode$1: $Decode;
type $EncodeAsync = <T extends $ZodType>(schema: T, value: output<T>, _ctx?: ParseContext<$ZodIssue>) => Promise<input<T>>;
declare const _encodeAsync: (_Err: $ZodErrorClass) => $EncodeAsync;
declare const encodeAsync$1: $EncodeAsync;
type $DecodeAsync = <T extends $ZodType>(schema: T, value: input<T>, _ctx?: ParseContext<$ZodIssue>) => Promise<output<T>>;
declare const _decodeAsync: (_Err: $ZodErrorClass) => $DecodeAsync;
declare const decodeAsync$1: $DecodeAsync;
type $SafeEncode = <T extends $ZodType>(schema: T, value: output<T>, _ctx?: ParseContext<$ZodIssue>) => SafeParseResult<input<T>>;
declare const _safeEncode: (_Err: $ZodErrorClass) => $SafeEncode;
declare const safeEncode$1: $SafeEncode;
type $SafeDecode = <T extends $ZodType>(schema: T, value: input<T>, _ctx?: ParseContext<$ZodIssue>) => SafeParseResult<output<T>>;
declare const _safeDecode: (_Err: $ZodErrorClass) => $SafeDecode;
declare const safeDecode$1: $SafeDecode;
type $SafeEncodeAsync = <T extends $ZodType>(schema: T, value: output<T>, _ctx?: ParseContext<$ZodIssue>) => Promise<SafeParseResult<input<T>>>;
declare const _safeEncodeAsync: (_Err: $ZodErrorClass) => $SafeEncodeAsync;
declare const safeEncodeAsync$1: $SafeEncodeAsync;
type $SafeDecodeAsync = <T extends $ZodType>(schema: T, value: input<T>, _ctx?: ParseContext<$ZodIssue>) => Promise<SafeParseResult<output<T>>>;
declare const _safeDecodeAsync: (_Err: $ZodErrorClass) => $SafeDecodeAsync;
declare const safeDecodeAsync$1: $SafeDecodeAsync;

declare const cuid$1: RegExp;
declare const cuid2$1: RegExp;
declare const ulid$1: RegExp;
declare const xid$1: RegExp;
declare const ksuid$1: RegExp;
declare const nanoid$1: RegExp;
/** ISO 8601-1 duration regex. Does not support the 8601-2 extensions like negative durations or fractional/negative components. */
declare const duration$1: RegExp;
/** Implements ISO 8601-2 extensions like explicit +- prefixes, mixing weeks with other units, and fractional/negative components. */
declare const extendedDuration: RegExp;
/** A regex for any UUID-like identifier: 8-4-4-4-12 hex pattern */
declare const guid$1: RegExp;
/** Returns a regex for validating an RFC 9562/4122 UUID.
 *
 * @param version Optionally specify a version 1-8. If no version is specified, all versions are supported. */
declare const uuid$1: (version?: number | undefined) => RegExp;
declare const uuid4: RegExp;
declare const uuid6: RegExp;
declare const uuid7: RegExp;
/** Practical email validation */
declare const email$1: RegExp;
/** Equivalent to the HTML5 input[type=email] validation implemented by browsers. Source: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email */
declare const html5Email: RegExp;
/** The classic emailregex.com regex for RFC 5322-compliant emails */
declare const rfc5322Email: RegExp;
/** A loose regex that allows Unicode characters, enforces length limits, and that's about it. */
declare const unicodeEmail: RegExp;
declare const idnEmail: RegExp;
declare const browserEmail: RegExp;
declare function emoji$1(): RegExp;
declare const ipv4$1: RegExp;
declare const ipv6$1: RegExp;
declare const mac$1: (delimiter?: string) => RegExp;
declare const cidrv4$1: RegExp;
declare const cidrv6$1: RegExp;
declare const base64$1: RegExp;
declare const base64url$1: RegExp;
declare const hostname$1: RegExp;
declare const domain: RegExp;
declare const e164$1: RegExp;
declare const date$3: RegExp;
declare function time$1(args: {
    precision?: number | null;
}): RegExp;
declare function datetime$1(args: {
    precision?: number | null;
    offset?: boolean;
    local?: boolean;
}): RegExp;
declare const string$2: (params?: {
    minimum?: number | undefined;
    maximum?: number | undefined;
}) => RegExp;
declare const bigint$2: RegExp;
declare const integer: RegExp;
declare const number$2: RegExp;
declare const boolean$2: RegExp;
declare const _null$2: RegExp;

declare const _undefined$2: RegExp;

declare const lowercase: RegExp;
declare const uppercase: RegExp;
declare const hex$1: RegExp;
declare const md5_hex: RegExp;
declare const md5_base64: RegExp;
declare const md5_base64url: RegExp;
declare const sha1_hex: RegExp;
declare const sha1_base64: RegExp;
declare const sha1_base64url: RegExp;
declare const sha256_hex: RegExp;
declare const sha256_base64: RegExp;
declare const sha256_base64url: RegExp;
declare const sha384_hex: RegExp;
declare const sha384_base64: RegExp;
declare const sha384_base64url: RegExp;
declare const sha512_hex: RegExp;
declare const sha512_base64: RegExp;
declare const sha512_base64url: RegExp;

declare const regexes_d_browserEmail: typeof browserEmail;
declare const regexes_d_domain: typeof domain;
declare const regexes_d_extendedDuration: typeof extendedDuration;
declare const regexes_d_html5Email: typeof html5Email;
declare const regexes_d_idnEmail: typeof idnEmail;
declare const regexes_d_integer: typeof integer;
declare const regexes_d_lowercase: typeof lowercase;
declare const regexes_d_md5_base64: typeof md5_base64;
declare const regexes_d_md5_base64url: typeof md5_base64url;
declare const regexes_d_md5_hex: typeof md5_hex;
declare const regexes_d_rfc5322Email: typeof rfc5322Email;
declare const regexes_d_sha1_base64: typeof sha1_base64;
declare const regexes_d_sha1_base64url: typeof sha1_base64url;
declare const regexes_d_sha1_hex: typeof sha1_hex;
declare const regexes_d_sha256_base64: typeof sha256_base64;
declare const regexes_d_sha256_base64url: typeof sha256_base64url;
declare const regexes_d_sha256_hex: typeof sha256_hex;
declare const regexes_d_sha384_base64: typeof sha384_base64;
declare const regexes_d_sha384_base64url: typeof sha384_base64url;
declare const regexes_d_sha384_hex: typeof sha384_hex;
declare const regexes_d_sha512_base64: typeof sha512_base64;
declare const regexes_d_sha512_base64url: typeof sha512_base64url;
declare const regexes_d_sha512_hex: typeof sha512_hex;
declare const regexes_d_unicodeEmail: typeof unicodeEmail;
declare const regexes_d_uppercase: typeof uppercase;
declare const regexes_d_uuid4: typeof uuid4;
declare const regexes_d_uuid6: typeof uuid6;
declare const regexes_d_uuid7: typeof uuid7;
declare namespace regexes_d {
  export {
    base64$1 as base64,
    base64url$1 as base64url,
    bigint$2 as bigint,
    boolean$2 as boolean,
    regexes_d_browserEmail as browserEmail,
    cidrv4$1 as cidrv4,
    cidrv6$1 as cidrv6,
    cuid$1 as cuid,
    cuid2$1 as cuid2,
    date$3 as date,
    datetime$1 as datetime,
    regexes_d_domain as domain,
    duration$1 as duration,
    e164$1 as e164,
    email$1 as email,
    emoji$1 as emoji,
    regexes_d_extendedDuration as extendedDuration,
    guid$1 as guid,
    hex$1 as hex,
    hostname$1 as hostname,
    regexes_d_html5Email as html5Email,
    regexes_d_idnEmail as idnEmail,
    regexes_d_integer as integer,
    ipv4$1 as ipv4,
    ipv6$1 as ipv6,
    ksuid$1 as ksuid,
    regexes_d_lowercase as lowercase,
    mac$1 as mac,
    regexes_d_md5_base64 as md5_base64,
    regexes_d_md5_base64url as md5_base64url,
    regexes_d_md5_hex as md5_hex,
    nanoid$1 as nanoid,
    _null$2 as null,
    number$2 as number,
    regexes_d_rfc5322Email as rfc5322Email,
    regexes_d_sha1_base64 as sha1_base64,
    regexes_d_sha1_base64url as sha1_base64url,
    regexes_d_sha1_hex as sha1_hex,
    regexes_d_sha256_base64 as sha256_base64,
    regexes_d_sha256_base64url as sha256_base64url,
    regexes_d_sha256_hex as sha256_hex,
    regexes_d_sha384_base64 as sha384_base64,
    regexes_d_sha384_base64url as sha384_base64url,
    regexes_d_sha384_hex as sha384_hex,
    regexes_d_sha512_base64 as sha512_base64,
    regexes_d_sha512_base64url as sha512_base64url,
    regexes_d_sha512_hex as sha512_hex,
    string$2 as string,
    time$1 as time,
    ulid$1 as ulid,
    _undefined$2 as undefined,
    regexes_d_unicodeEmail as unicodeEmail,
    regexes_d_uppercase as uppercase,
    uuid$1 as uuid,
    regexes_d_uuid4 as uuid4,
    regexes_d_uuid6 as uuid6,
    regexes_d_uuid7 as uuid7,
    xid$1 as xid,
  };
}

declare function _default$O(): {
    localeError: $ZodErrorMap;
};

declare function _default$N(): {
    localeError: $ZodErrorMap;
};

declare function _default$M(): {
    localeError: $ZodErrorMap;
};

declare function _default$L(): {
    localeError: $ZodErrorMap;
};

declare function _default$K(): {
    localeError: $ZodErrorMap;
};

declare function _default$J(): {
    localeError: $ZodErrorMap;
};

declare function _default$I(): {
    localeError: $ZodErrorMap;
};

declare function _default$H(): {
    localeError: $ZodErrorMap;
};

declare function _default$G(): {
    localeError: $ZodErrorMap;
};

declare function _default$F(): {
    localeError: $ZodErrorMap;
};

declare function _default$E(): {
    localeError: $ZodErrorMap;
};

declare function _default$D(): {
    localeError: $ZodErrorMap;
};

declare function _default$C(): {
    localeError: $ZodErrorMap;
};

declare function _default$B(): {
    localeError: $ZodErrorMap;
};

declare function _default$A(): {
    localeError: $ZodErrorMap;
};

declare function _default$z(): {
    localeError: $ZodErrorMap;
};

declare function _default$y(): {
    localeError: $ZodErrorMap;
};

declare function _default$x(): {
    localeError: $ZodErrorMap;
};

declare function _default$w(): {
    localeError: $ZodErrorMap;
};

declare function _default$v(): {
    localeError: $ZodErrorMap;
};

declare function _default$u(): {
    localeError: $ZodErrorMap;
};

declare function _default$t(): {
    localeError: $ZodErrorMap;
};

declare function _default$s(): {
    localeError: $ZodErrorMap;
};

declare function _default$r(): {
    localeError: $ZodErrorMap;
};

declare function _default$q(): {
    localeError: $ZodErrorMap;
};

declare function _default$p(): {
    localeError: $ZodErrorMap;
};

declare function _default$o(): {
    localeError: $ZodErrorMap;
};

declare function _default$n(): {
    localeError: $ZodErrorMap;
};

declare function _default$m(): {
    localeError: $ZodErrorMap;
};

declare function _default$l(): {
    localeError: $ZodErrorMap;
};

declare function _default$k(): {
    localeError: $ZodErrorMap;
};

declare function _default$j(): {
    localeError: $ZodErrorMap;
};

declare function _default$i(): {
    localeError: $ZodErrorMap;
};

declare function _default$h(): {
    localeError: $ZodErrorMap;
};

declare function _default$g(): {
    localeError: $ZodErrorMap;
};

declare function _default$f(): {
    localeError: $ZodErrorMap;
};

declare function _default$e(): {
    localeError: $ZodErrorMap;
};

declare function _default$d(): {
    localeError: $ZodErrorMap;
};

declare function _default$c(): {
    localeError: $ZodErrorMap;
};

declare function _default$b(): {
    localeError: $ZodErrorMap;
};

declare function _default$a(): {
    localeError: $ZodErrorMap;
};

declare function _default$9(): {
    localeError: $ZodErrorMap;
};

declare function _default$8(): {
    localeError: $ZodErrorMap;
};

declare function _default$7(): {
    localeError: $ZodErrorMap;
};

declare function _default$6(): {
    localeError: $ZodErrorMap;
};

declare function _default$5(): {
    localeError: $ZodErrorMap;
};

declare function _default$4(): {
    localeError: $ZodErrorMap;
};

declare function _default$3(): {
    localeError: $ZodErrorMap;
};

declare function _default$2(): {
    localeError: $ZodErrorMap;
};

declare namespace index_d$1 {
  export {
    _default$O as ar,
    _default$N as az,
    _default$M as be,
    _default$L as bg,
    _default$K as ca,
    _default$J as cs,
    _default$I as da,
    _default$H as de,
    _default$G as en,
    _default$F as eo,
    _default$E as es,
    _default$D as fa,
    _default$C as fi,
    _default$B as fr,
    _default$A as frCA,
    _default$z as he,
    _default$y as hu,
    _default$x as hy,
    _default$w as id,
    _default$v as is,
    _default$u as it,
    _default$t as ja,
    _default$s as ka,
    _default$r as kh,
    _default$q as km,
    _default$p as ko,
    _default$o as lt,
    _default$n as mk,
    _default$m as ms,
    _default$l as nl,
    _default$k as no,
    _default$j as ota,
    _default$h as pl,
    _default$i as ps,
    _default$g as pt,
    _default$f as ru,
    _default$e as sl,
    _default$d as sv,
    _default$c as ta,
    _default$b as th,
    _default$a as tr,
    _default$9 as ua,
    _default$8 as uk,
    _default$7 as ur,
    _default$6 as uz,
    _default$5 as vi,
    _default$2 as yo,
    _default$4 as zhCN,
    _default$3 as zhTW,
  };
}

type ModeWriter = (doc: Doc, modes: {
    execution: "sync" | "async";
}) => void;
declare class Doc {
    args: string[];
    content: string[];
    indent: number;
    constructor(args?: string[]);
    indented(fn: (doc: Doc) => void): void;
    write(fn: ModeWriter): void;
    write(line: string): void;
    compile(): any;
}

type Params<T extends $ZodType | $ZodCheck, IssueTypes extends $ZodIssueBase, OmitKeys extends keyof T["_zod"]["def"] = never> = Flatten<Partial<EmptyToNever<Omit<T["_zod"]["def"], OmitKeys> & ([IssueTypes] extends [never] ? {} : {
    error?: string | $ZodErrorMap<IssueTypes> | undefined;
    /** @deprecated This parameter is deprecated. Use `error` instead. */
    message?: string | undefined;
})>>>;
type TypeParams<T extends $ZodType = $ZodType & {
    _isst: never;
}, AlsoOmit extends Exclude<keyof T["_zod"]["def"], "type" | "checks" | "error"> = never> = Params<T, NonNullable<T["_zod"]["isst"]>, "type" | "checks" | "error" | AlsoOmit>;
type CheckParams<T extends $ZodCheck = $ZodCheck, // & { _issc: never },
AlsoOmit extends Exclude<keyof T["_zod"]["def"], "check" | "error"> = never> = Params<T, NonNullable<T["_zod"]["issc"]>, "check" | "error" | AlsoOmit>;
type StringFormatParams<T extends $ZodStringFormat = $ZodStringFormat, AlsoOmit extends Exclude<keyof T["_zod"]["def"], "type" | "coerce" | "checks" | "error" | "check" | "format"> = never> = Params<T, NonNullable<T["_zod"]["isst"] | T["_zod"]["issc"]>, "type" | "coerce" | "checks" | "error" | "check" | "format" | AlsoOmit>;
type CheckStringFormatParams<T extends $ZodStringFormat = $ZodStringFormat, AlsoOmit extends Exclude<keyof T["_zod"]["def"], "type" | "coerce" | "checks" | "error" | "check" | "format"> = never> = Params<T, NonNullable<T["_zod"]["issc"]>, "type" | "coerce" | "checks" | "error" | "check" | "format" | AlsoOmit>;
type CheckTypeParams<T extends $ZodType & $ZodCheck = $ZodType & $ZodCheck, AlsoOmit extends Exclude<keyof T["_zod"]["def"], "type" | "checks" | "error" | "check"> = never> = Params<T, NonNullable<T["_zod"]["isst"] | T["_zod"]["issc"]>, "type" | "checks" | "error" | "check" | AlsoOmit>;
type $ZodStringParams = TypeParams<$ZodString<string>, "coerce">;
declare function _string<T extends $ZodString>(Class: SchemaClass<T>, params?: string | $ZodStringParams): T;
declare function _coercedString<T extends $ZodString>(Class: SchemaClass<T>, params?: string | $ZodStringParams): T;
type $ZodStringFormatParams = CheckTypeParams<$ZodStringFormat, "format" | "coerce" | "when" | "pattern">;
type $ZodCheckStringFormatParams = CheckParams<$ZodCheckStringFormat, "format">;
type $ZodEmailParams = StringFormatParams<$ZodEmail, "when">;
type $ZodCheckEmailParams = CheckStringFormatParams<$ZodEmail, "when">;
declare function _email<T extends $ZodEmail>(Class: SchemaClass<T>, params?: string | $ZodEmailParams | $ZodCheckEmailParams): T;
type $ZodGUIDParams = StringFormatParams<$ZodGUID, "pattern" | "when">;
type $ZodCheckGUIDParams = CheckStringFormatParams<$ZodGUID, "pattern" | "when">;
declare function _guid<T extends $ZodGUID>(Class: SchemaClass<T>, params?: string | $ZodGUIDParams | $ZodCheckGUIDParams): T;
type $ZodUUIDParams = StringFormatParams<$ZodUUID, "pattern" | "when">;
type $ZodCheckUUIDParams = CheckStringFormatParams<$ZodUUID, "pattern" | "when">;
declare function _uuid<T extends $ZodUUID>(Class: SchemaClass<T>, params?: string | $ZodUUIDParams | $ZodCheckUUIDParams): T;
type $ZodUUIDv4Params = StringFormatParams<$ZodUUID, "pattern" | "when">;
type $ZodCheckUUIDv4Params = CheckStringFormatParams<$ZodUUID, "pattern" | "when">;
declare function _uuidv4<T extends $ZodUUID>(Class: SchemaClass<T>, params?: string | $ZodUUIDv4Params | $ZodCheckUUIDv4Params): T;
type $ZodUUIDv6Params = StringFormatParams<$ZodUUID, "pattern" | "when">;
type $ZodCheckUUIDv6Params = CheckStringFormatParams<$ZodUUID, "pattern" | "when">;
declare function _uuidv6<T extends $ZodUUID>(Class: SchemaClass<T>, params?: string | $ZodUUIDv6Params | $ZodCheckUUIDv6Params): T;
type $ZodUUIDv7Params = StringFormatParams<$ZodUUID, "pattern" | "when">;
type $ZodCheckUUIDv7Params = CheckStringFormatParams<$ZodUUID, "pattern" | "when">;
declare function _uuidv7<T extends $ZodUUID>(Class: SchemaClass<T>, params?: string | $ZodUUIDv7Params | $ZodCheckUUIDv7Params): T;
type $ZodURLParams = StringFormatParams<$ZodURL, "when">;
type $ZodCheckURLParams = CheckStringFormatParams<$ZodURL, "when">;
declare function _url<T extends $ZodURL>(Class: SchemaClass<T>, params?: string | $ZodURLParams | $ZodCheckURLParams): T;
type $ZodEmojiParams = StringFormatParams<$ZodEmoji, "when">;
type $ZodCheckEmojiParams = CheckStringFormatParams<$ZodEmoji, "when">;
declare function _emoji<T extends $ZodEmoji>(Class: SchemaClass<T>, params?: string | $ZodEmojiParams | $ZodCheckEmojiParams): T;
type $ZodNanoIDParams = StringFormatParams<$ZodNanoID, "when">;
type $ZodCheckNanoIDParams = CheckStringFormatParams<$ZodNanoID, "when">;
declare function _nanoid<T extends $ZodNanoID>(Class: SchemaClass<T>, params?: string | $ZodNanoIDParams | $ZodCheckNanoIDParams): T;
type $ZodCUIDParams = StringFormatParams<$ZodCUID, "when">;
type $ZodCheckCUIDParams = CheckStringFormatParams<$ZodCUID, "when">;
declare function _cuid<T extends $ZodCUID>(Class: SchemaClass<T>, params?: string | $ZodCUIDParams | $ZodCheckCUIDParams): T;
type $ZodCUID2Params = StringFormatParams<$ZodCUID2, "when">;
type $ZodCheckCUID2Params = CheckStringFormatParams<$ZodCUID2, "when">;
declare function _cuid2<T extends $ZodCUID2>(Class: SchemaClass<T>, params?: string | $ZodCUID2Params | $ZodCheckCUID2Params): T;
type $ZodULIDParams = StringFormatParams<$ZodULID, "when">;
type $ZodCheckULIDParams = CheckStringFormatParams<$ZodULID, "when">;
declare function _ulid<T extends $ZodULID>(Class: SchemaClass<T>, params?: string | $ZodULIDParams | $ZodCheckULIDParams): T;
type $ZodXIDParams = StringFormatParams<$ZodXID, "when">;
type $ZodCheckXIDParams = CheckStringFormatParams<$ZodXID, "when">;
declare function _xid<T extends $ZodXID>(Class: SchemaClass<T>, params?: string | $ZodXIDParams | $ZodCheckXIDParams): T;
type $ZodKSUIDParams = StringFormatParams<$ZodKSUID, "when">;
type $ZodCheckKSUIDParams = CheckStringFormatParams<$ZodKSUID, "when">;
declare function _ksuid<T extends $ZodKSUID>(Class: SchemaClass<T>, params?: string | $ZodKSUIDParams | $ZodCheckKSUIDParams): T;
type $ZodIPv4Params = StringFormatParams<$ZodIPv4, "pattern" | "when" | "version">;
type $ZodCheckIPv4Params = CheckStringFormatParams<$ZodIPv4, "pattern" | "when" | "version">;
declare function _ipv4<T extends $ZodIPv4>(Class: SchemaClass<T>, params?: string | $ZodIPv4Params | $ZodCheckIPv4Params): T;
type $ZodIPv6Params = StringFormatParams<$ZodIPv6, "pattern" | "when" | "version">;
type $ZodCheckIPv6Params = CheckStringFormatParams<$ZodIPv6, "pattern" | "when" | "version">;
declare function _ipv6<T extends $ZodIPv6>(Class: SchemaClass<T>, params?: string | $ZodIPv6Params | $ZodCheckIPv6Params): T;
type $ZodMACParams = StringFormatParams<$ZodMAC, "pattern" | "when">;
type $ZodCheckMACParams = CheckStringFormatParams<$ZodMAC, "pattern" | "when">;
declare function _mac<T extends $ZodMAC>(Class: SchemaClass<T>, params?: string | $ZodMACParams | $ZodCheckMACParams): T;
type $ZodCIDRv4Params = StringFormatParams<$ZodCIDRv4, "pattern" | "when">;
type $ZodCheckCIDRv4Params = CheckStringFormatParams<$ZodCIDRv4, "pattern" | "when">;
declare function _cidrv4<T extends $ZodCIDRv4>(Class: SchemaClass<T>, params?: string | $ZodCIDRv4Params | $ZodCheckCIDRv4Params): T;
type $ZodCIDRv6Params = StringFormatParams<$ZodCIDRv6, "pattern" | "when">;
type $ZodCheckCIDRv6Params = CheckStringFormatParams<$ZodCIDRv6, "pattern" | "when">;
declare function _cidrv6<T extends $ZodCIDRv6>(Class: SchemaClass<T>, params?: string | $ZodCIDRv6Params | $ZodCheckCIDRv6Params): T;
type $ZodBase64Params = StringFormatParams<$ZodBase64, "pattern" | "when">;
type $ZodCheckBase64Params = CheckStringFormatParams<$ZodBase64, "pattern" | "when">;
declare function _base64<T extends $ZodBase64>(Class: SchemaClass<T>, params?: string | $ZodBase64Params | $ZodCheckBase64Params): T;
type $ZodBase64URLParams = StringFormatParams<$ZodBase64URL, "pattern" | "when">;
type $ZodCheckBase64URLParams = CheckStringFormatParams<$ZodBase64URL, "pattern" | "when">;
declare function _base64url<T extends $ZodBase64URL>(Class: SchemaClass<T>, params?: string | $ZodBase64URLParams | $ZodCheckBase64URLParams): T;
type $ZodE164Params = StringFormatParams<$ZodE164, "when">;
type $ZodCheckE164Params = CheckStringFormatParams<$ZodE164, "when">;
declare function _e164<T extends $ZodE164>(Class: SchemaClass<T>, params?: string | $ZodE164Params | $ZodCheckE164Params): T;
type $ZodJWTParams = StringFormatParams<$ZodJWT, "pattern" | "when">;
type $ZodCheckJWTParams = CheckStringFormatParams<$ZodJWT, "pattern" | "when">;
declare function _jwt<T extends $ZodJWT>(Class: SchemaClass<T>, params?: string | $ZodJWTParams | $ZodCheckJWTParams): T;
declare const TimePrecision: {
    readonly Any: null;
    readonly Minute: -1;
    readonly Second: 0;
    readonly Millisecond: 3;
    readonly Microsecond: 6;
};
type $ZodISODateTimeParams = StringFormatParams<$ZodISODateTime, "pattern" | "when">;
type $ZodCheckISODateTimeParams = CheckStringFormatParams<$ZodISODateTime, "pattern" | "when">;
declare function _isoDateTime<T extends $ZodISODateTime>(Class: SchemaClass<T>, params?: string | $ZodISODateTimeParams | $ZodCheckISODateTimeParams): T;
type $ZodISODateParams = StringFormatParams<$ZodISODate, "pattern" | "when">;
type $ZodCheckISODateParams = CheckStringFormatParams<$ZodISODate, "pattern" | "when">;
declare function _isoDate<T extends $ZodISODate>(Class: SchemaClass<T>, params?: string | $ZodISODateParams | $ZodCheckISODateParams): T;
type $ZodISOTimeParams = StringFormatParams<$ZodISOTime, "pattern" | "when">;
type $ZodCheckISOTimeParams = CheckStringFormatParams<$ZodISOTime, "pattern" | "when">;
declare function _isoTime<T extends $ZodISOTime>(Class: SchemaClass<T>, params?: string | $ZodISOTimeParams | $ZodCheckISOTimeParams): T;
type $ZodISODurationParams = StringFormatParams<$ZodISODuration, "when">;
type $ZodCheckISODurationParams = CheckStringFormatParams<$ZodISODuration, "when">;
declare function _isoDuration<T extends $ZodISODuration>(Class: SchemaClass<T>, params?: string | $ZodISODurationParams | $ZodCheckISODurationParams): T;
type $ZodNumberParams = TypeParams<$ZodNumber<number>, "coerce">;
type $ZodNumberFormatParams = CheckTypeParams<$ZodNumberFormat, "format" | "coerce">;
type $ZodCheckNumberFormatParams = CheckParams<$ZodCheckNumberFormat, "format" | "when">;
declare function _number<T extends $ZodNumber>(Class: SchemaClass<T>, params?: string | $ZodNumberParams): T;
declare function _coercedNumber<T extends $ZodNumber>(Class: SchemaClass<T>, params?: string | $ZodNumberParams): T;
declare function _int<T extends $ZodNumberFormat>(Class: SchemaClass<T>, params?: string | $ZodCheckNumberFormatParams): T;
declare function _float32<T extends $ZodNumberFormat>(Class: SchemaClass<T>, params?: string | $ZodCheckNumberFormatParams): T;
declare function _float64<T extends $ZodNumberFormat>(Class: SchemaClass<T>, params?: string | $ZodCheckNumberFormatParams): T;
declare function _int32<T extends $ZodNumberFormat>(Class: SchemaClass<T>, params?: string | $ZodCheckNumberFormatParams): T;
declare function _uint32<T extends $ZodNumberFormat>(Class: SchemaClass<T>, params?: string | $ZodCheckNumberFormatParams): T;
type $ZodBooleanParams = TypeParams<$ZodBoolean<boolean>, "coerce">;
declare function _boolean<T extends $ZodBoolean>(Class: SchemaClass<T>, params?: string | $ZodBooleanParams): T;
declare function _coercedBoolean<T extends $ZodBoolean>(Class: SchemaClass<T>, params?: string | $ZodBooleanParams): T;
type $ZodBigIntParams = TypeParams<$ZodBigInt<bigint>>;
type $ZodBigIntFormatParams = CheckTypeParams<$ZodBigIntFormat, "format" | "coerce">;
type $ZodCheckBigIntFormatParams = CheckParams<$ZodCheckBigIntFormat, "format" | "when">;
declare function _bigint<T extends $ZodBigInt>(Class: SchemaClass<T>, params?: string | $ZodBigIntParams): T;
declare function _coercedBigint<T extends $ZodBigInt>(Class: SchemaClass<T>, params?: string | $ZodBigIntParams): T;
declare function _int64<T extends $ZodBigIntFormat>(Class: SchemaClass<T>, params?: string | $ZodBigIntFormatParams): T;
declare function _uint64<T extends $ZodBigIntFormat>(Class: SchemaClass<T>, params?: string | $ZodBigIntFormatParams): T;
type $ZodSymbolParams = TypeParams<$ZodSymbol>;
declare function _symbol<T extends $ZodSymbol>(Class: SchemaClass<T>, params?: string | $ZodSymbolParams): T;
type $ZodUndefinedParams = TypeParams<$ZodUndefined>;
declare function _undefined$1<T extends $ZodUndefined>(Class: SchemaClass<T>, params?: string | $ZodUndefinedParams): T;
type $ZodNullParams = TypeParams<$ZodNull>;
declare function _null$1<T extends $ZodNull>(Class: SchemaClass<T>, params?: string | $ZodNullParams): T;
type $ZodAnyParams = TypeParams<$ZodAny>;
declare function _any<T extends $ZodAny>(Class: SchemaClass<T>): T;
type $ZodUnknownParams = TypeParams<$ZodUnknown>;
declare function _unknown<T extends $ZodUnknown>(Class: SchemaClass<T>): T;
type $ZodNeverParams = TypeParams<$ZodNever>;
declare function _never<T extends $ZodNever>(Class: SchemaClass<T>, params?: string | $ZodNeverParams): T;
type $ZodVoidParams = TypeParams<$ZodVoid>;
declare function _void$1<T extends $ZodVoid>(Class: SchemaClass<T>, params?: string | $ZodVoidParams): T;
type $ZodDateParams = TypeParams<$ZodDate, "coerce">;
declare function _date<T extends $ZodDate>(Class: SchemaClass<T>, params?: string | $ZodDateParams): T;
declare function _coercedDate<T extends $ZodDate>(Class: SchemaClass<T>, params?: string | $ZodDateParams): T;
type $ZodNaNParams = TypeParams<$ZodNaN>;
declare function _nan<T extends $ZodNaN>(Class: SchemaClass<T>, params?: string | $ZodNaNParams): T;
type $ZodCheckLessThanParams = CheckParams<$ZodCheckLessThan, "inclusive" | "value" | "when">;
declare function _lt(value: Numeric, params?: string | $ZodCheckLessThanParams): $ZodCheckLessThan<Numeric>;
declare function _lte(value: Numeric, params?: string | $ZodCheckLessThanParams): $ZodCheckLessThan<Numeric>;

type $ZodCheckGreaterThanParams = CheckParams<$ZodCheckGreaterThan, "inclusive" | "value" | "when">;
declare function _gt(value: Numeric, params?: string | $ZodCheckGreaterThanParams): $ZodCheckGreaterThan;
declare function _gte(value: Numeric, params?: string | $ZodCheckGreaterThanParams): $ZodCheckGreaterThan;

declare function _positive(params?: string | $ZodCheckGreaterThanParams): $ZodCheckGreaterThan;
declare function _negative(params?: string | $ZodCheckLessThanParams): $ZodCheckLessThan;
declare function _nonpositive(params?: string | $ZodCheckLessThanParams): $ZodCheckLessThan;
declare function _nonnegative(params?: string | $ZodCheckGreaterThanParams): $ZodCheckGreaterThan;
type $ZodCheckMultipleOfParams = CheckParams<$ZodCheckMultipleOf, "value" | "when">;
declare function _multipleOf(value: number | bigint, params?: string | $ZodCheckMultipleOfParams): $ZodCheckMultipleOf;
type $ZodCheckMaxSizeParams = CheckParams<$ZodCheckMaxSize, "maximum" | "when">;
declare function _maxSize(maximum: number, params?: string | $ZodCheckMaxSizeParams): $ZodCheckMaxSize<HasSize>;
type $ZodCheckMinSizeParams = CheckParams<$ZodCheckMinSize, "minimum" | "when">;
declare function _minSize(minimum: number, params?: string | $ZodCheckMinSizeParams): $ZodCheckMinSize<HasSize>;
type $ZodCheckSizeEqualsParams = CheckParams<$ZodCheckSizeEquals, "size" | "when">;
declare function _size(size: number, params?: string | $ZodCheckSizeEqualsParams): $ZodCheckSizeEquals<HasSize>;
type $ZodCheckMaxLengthParams = CheckParams<$ZodCheckMaxLength, "maximum" | "when">;
declare function _maxLength(maximum: number, params?: string | $ZodCheckMaxLengthParams): $ZodCheckMaxLength<HasLength>;
type $ZodCheckMinLengthParams = CheckParams<$ZodCheckMinLength, "minimum" | "when">;
declare function _minLength(minimum: number, params?: string | $ZodCheckMinLengthParams): $ZodCheckMinLength<HasLength>;
type $ZodCheckLengthEqualsParams = CheckParams<$ZodCheckLengthEquals, "length" | "when">;
declare function _length(length: number, params?: string | $ZodCheckLengthEqualsParams): $ZodCheckLengthEquals<HasLength>;
type $ZodCheckRegexParams = CheckParams<$ZodCheckRegex, "format" | "pattern" | "when">;
declare function _regex(pattern: RegExp, params?: string | $ZodCheckRegexParams): $ZodCheckRegex;
type $ZodCheckLowerCaseParams = CheckParams<$ZodCheckLowerCase, "format" | "when">;
declare function _lowercase(params?: string | $ZodCheckLowerCaseParams): $ZodCheckLowerCase;
type $ZodCheckUpperCaseParams = CheckParams<$ZodCheckUpperCase, "format" | "when">;
declare function _uppercase(params?: string | $ZodCheckUpperCaseParams): $ZodCheckUpperCase;
type $ZodCheckIncludesParams = CheckParams<$ZodCheckIncludes, "includes" | "format" | "when" | "pattern">;
declare function _includes(includes: string, params?: string | $ZodCheckIncludesParams): $ZodCheckIncludes;
type $ZodCheckStartsWithParams = CheckParams<$ZodCheckStartsWith, "prefix" | "format" | "when" | "pattern">;
declare function _startsWith(prefix: string, params?: string | $ZodCheckStartsWithParams): $ZodCheckStartsWith;
type $ZodCheckEndsWithParams = CheckParams<$ZodCheckEndsWith, "suffix" | "format" | "pattern" | "when">;
declare function _endsWith(suffix: string, params?: string | $ZodCheckEndsWithParams): $ZodCheckEndsWith;
type $ZodCheckPropertyParams = CheckParams<$ZodCheckProperty, "property" | "schema" | "when">;
declare function _property<K extends string, T extends $ZodType>(property: K, schema: T, params?: string | $ZodCheckPropertyParams): $ZodCheckProperty<{
    [k in K]: output<T>;
}>;
type $ZodCheckMimeTypeParams = CheckParams<$ZodCheckMimeType, "mime" | "when">;
declare function _mime(types: MimeTypes[], params?: string | $ZodCheckMimeTypeParams): $ZodCheckMimeType;
declare function _overwrite<T>(tx: (input: T) => T): $ZodCheckOverwrite<T>;
declare function _normalize(form?: "NFC" | "NFD" | "NFKC" | "NFKD" | (string & {})): $ZodCheckOverwrite<string>;
declare function _trim(): $ZodCheckOverwrite<string>;
declare function _toLowerCase(): $ZodCheckOverwrite<string>;
declare function _toUpperCase(): $ZodCheckOverwrite<string>;
declare function _slugify(): $ZodCheckOverwrite<string>;
type $ZodArrayParams = TypeParams<$ZodArray, "element">;
declare function _array<T extends $ZodType>(Class: SchemaClass<$ZodArray>, element: T, params?: string | $ZodArrayParams): $ZodArray<T>;
type $ZodObjectParams = TypeParams<$ZodObject, "shape" | "catchall">;
type $ZodUnionParams = TypeParams<$ZodUnion, "options">;
declare function _union<const T extends readonly $ZodObject[]>(Class: SchemaClass<$ZodUnion>, options: T, params?: string | $ZodUnionParams): $ZodUnion<T>;
type $ZodXorParams = TypeParams<$ZodXor, "options">;
declare function _xor<const T extends readonly $ZodObject[]>(Class: SchemaClass<$ZodXor>, options: T, params?: string | $ZodXorParams): $ZodXor<T>;
interface $ZodTypeDiscriminableInternals extends $ZodTypeInternals {
    propValues: PropValues;
}
interface $ZodTypeDiscriminable extends $ZodType {
    _zod: $ZodTypeDiscriminableInternals;
}
type $ZodDiscriminatedUnionParams = TypeParams<$ZodDiscriminatedUnion, "options" | "discriminator">;
declare function _discriminatedUnion<Types extends [$ZodTypeDiscriminable, ...$ZodTypeDiscriminable[]], Disc extends string>(Class: SchemaClass<$ZodDiscriminatedUnion>, discriminator: Disc, options: Types, params?: string | $ZodDiscriminatedUnionParams): $ZodDiscriminatedUnion<Types, Disc>;
type $ZodIntersectionParams = TypeParams<$ZodIntersection, "left" | "right">;
declare function _intersection<T extends $ZodObject, U extends $ZodObject>(Class: SchemaClass<$ZodIntersection>, left: T, right: U): $ZodIntersection<T, U>;
type $ZodTupleParams = TypeParams<$ZodTuple, "items" | "rest">;
declare function _tuple<T extends readonly [$ZodType, ...$ZodType[]]>(Class: SchemaClass<$ZodTuple>, items: T, params?: string | $ZodTupleParams): $ZodTuple<T, null>;
declare function _tuple<T extends readonly [$ZodType, ...$ZodType[]], Rest extends $ZodType>(Class: SchemaClass<$ZodTuple>, items: T, rest: Rest, params?: string | $ZodTupleParams): $ZodTuple<T, Rest>;
type $ZodRecordParams = TypeParams<$ZodRecord, "keyType" | "valueType">;
declare function _record<Key extends $ZodRecordKey, Value extends $ZodObject>(Class: SchemaClass<$ZodRecord>, keyType: Key, valueType: Value, params?: string | $ZodRecordParams): $ZodRecord<Key, Value>;
type $ZodMapParams = TypeParams<$ZodMap, "keyType" | "valueType">;
declare function _map<Key extends $ZodObject, Value extends $ZodObject>(Class: SchemaClass<$ZodMap>, keyType: Key, valueType: Value, params?: string | $ZodMapParams): $ZodMap<Key, Value>;
type $ZodSetParams = TypeParams<$ZodSet, "valueType">;
declare function _set<Value extends $ZodObject>(Class: SchemaClass<$ZodSet>, valueType: Value, params?: string | $ZodSetParams): $ZodSet<Value>;
type $ZodEnumParams = TypeParams<$ZodEnum, "entries">;
declare function _enum$1<const T extends string[]>(Class: SchemaClass<$ZodEnum>, values: T, params?: string | $ZodEnumParams): $ZodEnum<ToEnum<T[number]>>;
declare function _enum$1<T extends EnumLike>(Class: SchemaClass<$ZodEnum>, entries: T, params?: string | $ZodEnumParams): $ZodEnum<T>;
/** @deprecated This API has been merged into `z.enum()`. Use `z.enum()` instead.
 *
 * ```ts
 * enum Colors { red, green, blue }
 * z.enum(Colors);
 * ```
 */
declare function _nativeEnum<T extends EnumLike>(Class: SchemaClass<$ZodEnum>, entries: T, params?: string | $ZodEnumParams): $ZodEnum<T>;
type $ZodLiteralParams = TypeParams<$ZodLiteral, "values">;
declare function _literal<const T extends Array<Literal>>(Class: SchemaClass<$ZodLiteral>, value: T, params?: string | $ZodLiteralParams): $ZodLiteral<T[number]>;
declare function _literal<const T extends Literal>(Class: SchemaClass<$ZodLiteral>, value: T, params?: string | $ZodLiteralParams): $ZodLiteral<T>;
type $ZodFileParams = TypeParams<$ZodFile>;
declare function _file(Class: SchemaClass<$ZodFile>, params?: string | $ZodFileParams): $ZodFile;
type $ZodTransformParams = TypeParams<$ZodTransform, "transform">;
declare function _transform<I = unknown, O = I>(Class: SchemaClass<$ZodTransform>, fn: (input: I, ctx?: ParsePayload) => O): $ZodTransform<Awaited<O>, I>;
type $ZodOptionalParams = TypeParams<$ZodOptional, "innerType">;
declare function _optional<T extends $ZodObject>(Class: SchemaClass<$ZodOptional>, innerType: T): $ZodOptional<T>;
type $ZodNullableParams = TypeParams<$ZodNullable, "innerType">;
declare function _nullable<T extends $ZodObject>(Class: SchemaClass<$ZodNullable>, innerType: T): $ZodNullable<T>;
type $ZodDefaultParams = TypeParams<$ZodDefault, "innerType" | "defaultValue">;
declare function _default$1<T extends $ZodObject>(Class: SchemaClass<$ZodDefault>, innerType: T, defaultValue: NoUndefined<output<T>> | (() => NoUndefined<output<T>>)): $ZodDefault<T>;
type $ZodNonOptionalParams = TypeParams<$ZodNonOptional, "innerType">;
declare function _nonoptional<T extends $ZodObject>(Class: SchemaClass<$ZodNonOptional>, innerType: T, params?: string | $ZodNonOptionalParams): $ZodNonOptional<T>;
type $ZodSuccessParams = TypeParams<$ZodSuccess, "innerType">;
declare function _success<T extends $ZodObject>(Class: SchemaClass<$ZodSuccess>, innerType: T): $ZodSuccess<T>;
type $ZodCatchParams = TypeParams<$ZodCatch, "innerType" | "catchValue">;
declare function _catch$1<T extends $ZodObject>(Class: SchemaClass<$ZodCatch>, innerType: T, catchValue: output<T> | ((ctx: $ZodCatchCtx) => output<T>)): $ZodCatch<T>;
type $ZodPipeParams = TypeParams<$ZodPipe, "in" | "out">;
declare function _pipe<const A extends $ZodType, B extends $ZodType<unknown, output<A>> = $ZodType<unknown, output<A>>>(Class: SchemaClass<$ZodPipe>, in_: A, out: B | $ZodType<unknown, output<A>>): $ZodPipe<A, B>;
type $ZodReadonlyParams = TypeParams<$ZodReadonly, "innerType">;
declare function _readonly<T extends $ZodObject>(Class: SchemaClass<$ZodReadonly>, innerType: T): $ZodReadonly<T>;
type $ZodTemplateLiteralParams = TypeParams<$ZodTemplateLiteral, "parts">;
declare function _templateLiteral<const Parts extends $ZodTemplateLiteralPart[]>(Class: SchemaClass<$ZodTemplateLiteral>, parts: Parts, params?: string | $ZodTemplateLiteralParams): $ZodTemplateLiteral<$PartsToTemplateLiteral<Parts>>;
type $ZodLazyParams = TypeParams<$ZodLazy, "getter">;
declare function _lazy<T extends $ZodType>(Class: SchemaClass<$ZodLazy>, getter: () => T): $ZodLazy<T>;
type $ZodPromiseParams = TypeParams<$ZodPromise, "innerType">;
declare function _promise<T extends $ZodObject>(Class: SchemaClass<$ZodPromise>, innerType: T): $ZodPromise<T>;
type $ZodCustomParams = CheckTypeParams<$ZodCustom, "fn">;
declare function _custom<O = unknown, I = O>(Class: SchemaClass<$ZodCustom>, fn: (data: O) => unknown, _params: string | $ZodCustomParams | undefined): $ZodCustom<O, I>;
declare function _refine<O = unknown, I = O>(Class: SchemaClass<$ZodCustom>, fn: (data: O) => unknown, _params: string | $ZodCustomParams | undefined): $ZodCustom<O, I>;
type $ZodSuperRefineIssue<T extends $ZodIssueBase = $ZodIssue> = T extends any ? RawIssue<T> : never;
type RawIssue<T extends $ZodIssueBase> = T extends any ? Flatten<MakePartial<T, "message" | "path"> & {
    /** The schema or check that originated this issue. */
    readonly inst?: $ZodType | $ZodCheck;
    /** If `true`, Zod will execute subsequent checks/refinements instead of immediately aborting */
    readonly continue?: boolean | undefined;
} & Record<string, unknown>> : never;
interface $RefinementCtx<T = unknown> extends ParsePayload<T> {
    addIssue(arg: string | $ZodSuperRefineIssue): void;
}
declare function _superRefine<T>(fn: (arg: T, payload: $RefinementCtx<T>) => void | Promise<void>): $ZodCheck<T>;
declare function _check<O = unknown>(fn: CheckFn<O>, params?: string | $ZodCustomParams): $ZodCheck<O>;
declare function describe$1<T>(description: string): $ZodCheck<T>;
declare function meta$1<T>(metadata: GlobalMeta): $ZodCheck<T>;
interface $ZodStringBoolParams extends TypeParams {
    truthy?: string[];
    falsy?: string[];
    /**
     * Options: `"sensitive"`, `"insensitive"`
     *
     * @default `"insensitive"`
     */
    case?: "sensitive" | "insensitive" | undefined;
}
declare function _stringbool(Classes: {
    Codec?: typeof $ZodCodec;
    Boolean?: typeof $ZodBoolean;
    String?: typeof $ZodString;
}, _params?: string | $ZodStringBoolParams): $ZodCodec<$ZodString, $ZodBoolean>;
declare function _stringFormat<Format extends string>(Class: typeof $ZodCustomStringFormat, format: Format, fnOrRegex: ((arg: string) => MaybeAsync<unknown>) | RegExp, _params?: string | $ZodStringFormatParams): $ZodCustomStringFormat<Format>;

declare function toJSONSchema<T extends $ZodType>(schema: T, params?: ToJSONSchemaParams): ZodStandardJSONSchemaPayload<T>;
declare function toJSONSchema(registry: $ZodRegistry<{
    id?: string | undefined;
}>, params?: RegistryToJSONSchemaParams): {
    schemas: Record<string, ZodStandardJSONSchemaPayload<$ZodType>>;
};

/**
 * Parameters for the emit method of JSONSchemaGenerator.
 * @deprecated Use toJSONSchema function instead
 */
type EmitParams = Pick<JSONSchemaGeneratorParams, "cycles" | "reused" | "external">;
/**
 * Parameters for JSONSchemaGenerator constructor.
 * @deprecated Use toJSONSchema function instead
 */
type JSONSchemaGeneratorConstructorParams = Pick<JSONSchemaGeneratorParams, "metadata" | "target" | "unrepresentable" | "override" | "io">;
/**
 * Legacy class-based interface for JSON Schema generation.
 * This class wraps the new functional implementation to provide backward compatibility.
 *
 * @deprecated Use the `toJSONSchema` function instead for new code.
 *
 * @example
 * ```typescript
 * // Legacy usage (still supported)
 * const gen = new JSONSchemaGenerator({ target: "draft-07" });
 * gen.process(schema);
 * const result = gen.emit(schema);
 *
 * // Preferred modern usage
 * const result = toJSONSchema(schema, { target: "draft-07" });
 * ```
 */
declare class JSONSchemaGenerator {
    private ctx;
    /** @deprecated Access via ctx instead */
    get metadataRegistry(): $ZodRegistry<Record<string, any>>;
    /** @deprecated Access via ctx instead */
    get target(): ({} & string) | "draft-2020-12" | "draft-07" | "openapi-3.0" | "draft-04";
    /** @deprecated Access via ctx instead */
    get unrepresentable(): "any" | "throw";
    /** @deprecated Access via ctx instead */
    get override(): (ctx: {
        zodSchema: $ZodType;
        jsonSchema: BaseSchema;
        path: (string | number)[];
    }) => void;
    /** @deprecated Access via ctx instead */
    get io(): "input" | "output";
    /** @deprecated Access via ctx instead */
    get counter(): number;
    set counter(value: number);
    /** @deprecated Access via ctx instead */
    get seen(): Map<$ZodType, Seen>;
    constructor(params?: JSONSchemaGeneratorConstructorParams);
    /**
     * Process a schema to prepare it for JSON Schema generation.
     * This must be called before emit().
     */
    process(schema: $ZodType, _params?: ProcessParams): BaseSchema;
    /**
     * Emit the final JSON Schema after processing.
     * Must call process() first.
     */
    emit(schema: $ZodType, _params?: EmitParams): BaseSchema;
}

type index_d_$Decode = $Decode;
type index_d_$DecodeAsync = $DecodeAsync;
type index_d_$Encode = $Encode;
type index_d_$EncodeAsync = $EncodeAsync;
type index_d_$InferEnumInput<T extends EnumLike> = $InferEnumInput<T>;
type index_d_$InferEnumOutput<T extends EnumLike> = $InferEnumOutput<T>;
type index_d_$InferInnerFunctionType<Args extends $ZodFunctionIn, Returns extends $ZodFunctionOut> = $InferInnerFunctionType<Args, Returns>;
type index_d_$InferInnerFunctionTypeAsync<Args extends $ZodFunctionIn, Returns extends $ZodFunctionOut> = $InferInnerFunctionTypeAsync<Args, Returns>;
type index_d_$InferObjectInput<T extends $ZodLooseShape, Extra extends Record<string, unknown>> = $InferObjectInput<T, Extra>;
type index_d_$InferObjectOutput<T extends $ZodLooseShape, Extra extends Record<string, unknown>> = $InferObjectOutput<T, Extra>;
type index_d_$InferOuterFunctionType<Args extends $ZodFunctionIn, Returns extends $ZodFunctionOut> = $InferOuterFunctionType<Args, Returns>;
type index_d_$InferOuterFunctionTypeAsync<Args extends $ZodFunctionIn, Returns extends $ZodFunctionOut> = $InferOuterFunctionTypeAsync<Args, Returns>;
type index_d_$InferTupleInputType<T extends TupleItems, Rest extends SomeType | null> = $InferTupleInputType<T, Rest>;
type index_d_$InferTupleOutputType<T extends TupleItems, Rest extends SomeType | null> = $InferTupleOutputType<T, Rest>;
type index_d_$InferUnionInput<T extends SomeType> = $InferUnionInput<T>;
type index_d_$InferUnionOutput<T extends SomeType> = $InferUnionOutput<T>;
type index_d_$InferZodRecordInput<Key extends $ZodRecordKey = $ZodRecordKey, Value extends SomeType = $ZodType> = $InferZodRecordInput<Key, Value>;
type index_d_$InferZodRecordOutput<Key extends $ZodRecordKey = $ZodRecordKey, Value extends SomeType = $ZodType> = $InferZodRecordOutput<Key, Value>;
type index_d_$Parse = $Parse;
type index_d_$ParseAsync = $ParseAsync;
type index_d_$PartsToTemplateLiteral<Parts extends $ZodTemplateLiteralPart[]> = $PartsToTemplateLiteral<Parts>;
type index_d_$RefinementCtx<T = unknown> = $RefinementCtx<T>;
type index_d_$SafeDecode = $SafeDecode;
type index_d_$SafeDecodeAsync = $SafeDecodeAsync;
type index_d_$SafeEncode = $SafeEncode;
type index_d_$SafeEncodeAsync = $SafeEncodeAsync;
type index_d_$SafeParse = $SafeParse;
type index_d_$SafeParseAsync = $SafeParseAsync;
declare const index_d_$ZodAny: typeof $ZodAny;
type index_d_$ZodAnyDef = $ZodAnyDef;
type index_d_$ZodAnyInternals = $ZodAnyInternals;
type index_d_$ZodAnyParams = $ZodAnyParams;
declare const index_d_$ZodArray: typeof $ZodArray;
type index_d_$ZodArrayDef<T extends SomeType = $ZodType> = $ZodArrayDef<T>;
type index_d_$ZodArrayInternals<T extends SomeType = $ZodType> = $ZodArrayInternals<T>;
type index_d_$ZodArrayParams = $ZodArrayParams;
type index_d_$ZodAsyncError = $ZodAsyncError;
declare const index_d_$ZodAsyncError: typeof $ZodAsyncError;
declare const index_d_$ZodBase64: typeof $ZodBase64;
type index_d_$ZodBase64Def = $ZodBase64Def;
type index_d_$ZodBase64Internals = $ZodBase64Internals;
type index_d_$ZodBase64Params = $ZodBase64Params;
declare const index_d_$ZodBase64URL: typeof $ZodBase64URL;
type index_d_$ZodBase64URLDef = $ZodBase64URLDef;
type index_d_$ZodBase64URLInternals = $ZodBase64URLInternals;
type index_d_$ZodBase64URLParams = $ZodBase64URLParams;
declare const index_d_$ZodBigInt: typeof $ZodBigInt;
type index_d_$ZodBigIntDef = $ZodBigIntDef;
declare const index_d_$ZodBigIntFormat: typeof $ZodBigIntFormat;
type index_d_$ZodBigIntFormatDef = $ZodBigIntFormatDef;
type index_d_$ZodBigIntFormatInternals = $ZodBigIntFormatInternals;
type index_d_$ZodBigIntFormatParams = $ZodBigIntFormatParams;
type index_d_$ZodBigIntFormats = $ZodBigIntFormats;
type index_d_$ZodBigIntInternals<T = unknown> = $ZodBigIntInternals<T>;
type index_d_$ZodBigIntParams = $ZodBigIntParams;
declare const index_d_$ZodBoolean: typeof $ZodBoolean;
type index_d_$ZodBooleanDef = $ZodBooleanDef;
type index_d_$ZodBooleanInternals<T = unknown> = $ZodBooleanInternals<T>;
type index_d_$ZodBooleanParams = $ZodBooleanParams;
type index_d_$ZodBranded<T extends SomeType, Brand extends string | number | symbol, Dir extends "in" | "out" | "inout" = "out"> = $ZodBranded<T, Brand, Dir>;
declare const index_d_$ZodCIDRv4: typeof $ZodCIDRv4;
type index_d_$ZodCIDRv4Def = $ZodCIDRv4Def;
type index_d_$ZodCIDRv4Internals = $ZodCIDRv4Internals;
type index_d_$ZodCIDRv4Params = $ZodCIDRv4Params;
declare const index_d_$ZodCIDRv6: typeof $ZodCIDRv6;
type index_d_$ZodCIDRv6Def = $ZodCIDRv6Def;
type index_d_$ZodCIDRv6Internals = $ZodCIDRv6Internals;
type index_d_$ZodCIDRv6Params = $ZodCIDRv6Params;
declare const index_d_$ZodCUID: typeof $ZodCUID;
declare const index_d_$ZodCUID2: typeof $ZodCUID2;
type index_d_$ZodCUID2Def = $ZodCUID2Def;
type index_d_$ZodCUID2Internals = $ZodCUID2Internals;
type index_d_$ZodCUID2Params = $ZodCUID2Params;
type index_d_$ZodCUIDDef = $ZodCUIDDef;
type index_d_$ZodCUIDInternals = $ZodCUIDInternals;
type index_d_$ZodCUIDParams = $ZodCUIDParams;
declare const index_d_$ZodCatch: typeof $ZodCatch;
type index_d_$ZodCatchCtx = $ZodCatchCtx;
type index_d_$ZodCatchDef<T extends SomeType = $ZodType> = $ZodCatchDef<T>;
type index_d_$ZodCatchInternals<T extends SomeType = $ZodType> = $ZodCatchInternals<T>;
type index_d_$ZodCatchParams = $ZodCatchParams;
declare const index_d_$ZodCheck: typeof $ZodCheck;
type index_d_$ZodCheckBase64Params = $ZodCheckBase64Params;
type index_d_$ZodCheckBase64URLParams = $ZodCheckBase64URLParams;
declare const index_d_$ZodCheckBigIntFormat: typeof $ZodCheckBigIntFormat;
type index_d_$ZodCheckBigIntFormatDef = $ZodCheckBigIntFormatDef;
type index_d_$ZodCheckBigIntFormatInternals = $ZodCheckBigIntFormatInternals;
type index_d_$ZodCheckBigIntFormatParams = $ZodCheckBigIntFormatParams;
type index_d_$ZodCheckCIDRv4Params = $ZodCheckCIDRv4Params;
type index_d_$ZodCheckCIDRv6Params = $ZodCheckCIDRv6Params;
type index_d_$ZodCheckCUID2Params = $ZodCheckCUID2Params;
type index_d_$ZodCheckCUIDParams = $ZodCheckCUIDParams;
type index_d_$ZodCheckDef = $ZodCheckDef;
type index_d_$ZodCheckE164Params = $ZodCheckE164Params;
type index_d_$ZodCheckEmailParams = $ZodCheckEmailParams;
type index_d_$ZodCheckEmojiParams = $ZodCheckEmojiParams;
declare const index_d_$ZodCheckEndsWith: typeof $ZodCheckEndsWith;
type index_d_$ZodCheckEndsWithDef = $ZodCheckEndsWithDef;
type index_d_$ZodCheckEndsWithInternals = $ZodCheckEndsWithInternals;
type index_d_$ZodCheckEndsWithParams = $ZodCheckEndsWithParams;
type index_d_$ZodCheckGUIDParams = $ZodCheckGUIDParams;
declare const index_d_$ZodCheckGreaterThan: typeof $ZodCheckGreaterThan;
type index_d_$ZodCheckGreaterThanDef = $ZodCheckGreaterThanDef;
type index_d_$ZodCheckGreaterThanInternals<T extends Numeric = Numeric> = $ZodCheckGreaterThanInternals<T>;
type index_d_$ZodCheckGreaterThanParams = $ZodCheckGreaterThanParams;
type index_d_$ZodCheckIPv4Params = $ZodCheckIPv4Params;
type index_d_$ZodCheckIPv6Params = $ZodCheckIPv6Params;
type index_d_$ZodCheckISODateParams = $ZodCheckISODateParams;
type index_d_$ZodCheckISODateTimeParams = $ZodCheckISODateTimeParams;
type index_d_$ZodCheckISODurationParams = $ZodCheckISODurationParams;
type index_d_$ZodCheckISOTimeParams = $ZodCheckISOTimeParams;
declare const index_d_$ZodCheckIncludes: typeof $ZodCheckIncludes;
type index_d_$ZodCheckIncludesDef = $ZodCheckIncludesDef;
type index_d_$ZodCheckIncludesInternals = $ZodCheckIncludesInternals;
type index_d_$ZodCheckIncludesParams = $ZodCheckIncludesParams;
type index_d_$ZodCheckInternals<T> = $ZodCheckInternals<T>;
type index_d_$ZodCheckJWTParams = $ZodCheckJWTParams;
type index_d_$ZodCheckKSUIDParams = $ZodCheckKSUIDParams;
declare const index_d_$ZodCheckLengthEquals: typeof $ZodCheckLengthEquals;
type index_d_$ZodCheckLengthEqualsDef = $ZodCheckLengthEqualsDef;
type index_d_$ZodCheckLengthEqualsInternals<T extends HasLength = HasLength> = $ZodCheckLengthEqualsInternals<T>;
type index_d_$ZodCheckLengthEqualsParams = $ZodCheckLengthEqualsParams;
declare const index_d_$ZodCheckLessThan: typeof $ZodCheckLessThan;
type index_d_$ZodCheckLessThanDef = $ZodCheckLessThanDef;
type index_d_$ZodCheckLessThanInternals<T extends Numeric = Numeric> = $ZodCheckLessThanInternals<T>;
type index_d_$ZodCheckLessThanParams = $ZodCheckLessThanParams;
declare const index_d_$ZodCheckLowerCase: typeof $ZodCheckLowerCase;
type index_d_$ZodCheckLowerCaseDef = $ZodCheckLowerCaseDef;
type index_d_$ZodCheckLowerCaseInternals = $ZodCheckLowerCaseInternals;
type index_d_$ZodCheckLowerCaseParams = $ZodCheckLowerCaseParams;
type index_d_$ZodCheckMACParams = $ZodCheckMACParams;
declare const index_d_$ZodCheckMaxLength: typeof $ZodCheckMaxLength;
type index_d_$ZodCheckMaxLengthDef = $ZodCheckMaxLengthDef;
type index_d_$ZodCheckMaxLengthInternals<T extends HasLength = HasLength> = $ZodCheckMaxLengthInternals<T>;
type index_d_$ZodCheckMaxLengthParams = $ZodCheckMaxLengthParams;
declare const index_d_$ZodCheckMaxSize: typeof $ZodCheckMaxSize;
type index_d_$ZodCheckMaxSizeDef = $ZodCheckMaxSizeDef;
type index_d_$ZodCheckMaxSizeInternals<T extends HasSize = HasSize> = $ZodCheckMaxSizeInternals<T>;
type index_d_$ZodCheckMaxSizeParams = $ZodCheckMaxSizeParams;
declare const index_d_$ZodCheckMimeType: typeof $ZodCheckMimeType;
type index_d_$ZodCheckMimeTypeDef = $ZodCheckMimeTypeDef;
type index_d_$ZodCheckMimeTypeInternals<T extends File = File> = $ZodCheckMimeTypeInternals<T>;
type index_d_$ZodCheckMimeTypeParams = $ZodCheckMimeTypeParams;
declare const index_d_$ZodCheckMinLength: typeof $ZodCheckMinLength;
type index_d_$ZodCheckMinLengthDef = $ZodCheckMinLengthDef;
type index_d_$ZodCheckMinLengthInternals<T extends HasLength = HasLength> = $ZodCheckMinLengthInternals<T>;
type index_d_$ZodCheckMinLengthParams = $ZodCheckMinLengthParams;
declare const index_d_$ZodCheckMinSize: typeof $ZodCheckMinSize;
type index_d_$ZodCheckMinSizeDef = $ZodCheckMinSizeDef;
type index_d_$ZodCheckMinSizeInternals<T extends HasSize = HasSize> = $ZodCheckMinSizeInternals<T>;
type index_d_$ZodCheckMinSizeParams = $ZodCheckMinSizeParams;
declare const index_d_$ZodCheckMultipleOf: typeof $ZodCheckMultipleOf;
type index_d_$ZodCheckMultipleOfDef<T extends number | bigint = number | bigint> = $ZodCheckMultipleOfDef<T>;
type index_d_$ZodCheckMultipleOfInternals<T extends number | bigint = number | bigint> = $ZodCheckMultipleOfInternals<T>;
type index_d_$ZodCheckMultipleOfParams = $ZodCheckMultipleOfParams;
type index_d_$ZodCheckNanoIDParams = $ZodCheckNanoIDParams;
declare const index_d_$ZodCheckNumberFormat: typeof $ZodCheckNumberFormat;
type index_d_$ZodCheckNumberFormatDef = $ZodCheckNumberFormatDef;
type index_d_$ZodCheckNumberFormatInternals = $ZodCheckNumberFormatInternals;
type index_d_$ZodCheckNumberFormatParams = $ZodCheckNumberFormatParams;
declare const index_d_$ZodCheckOverwrite: typeof $ZodCheckOverwrite;
type index_d_$ZodCheckOverwriteDef<T = unknown> = $ZodCheckOverwriteDef<T>;
type index_d_$ZodCheckOverwriteInternals<T = unknown> = $ZodCheckOverwriteInternals<T>;
declare const index_d_$ZodCheckProperty: typeof $ZodCheckProperty;
type index_d_$ZodCheckPropertyDef = $ZodCheckPropertyDef;
type index_d_$ZodCheckPropertyInternals<T extends object = object> = $ZodCheckPropertyInternals<T>;
type index_d_$ZodCheckPropertyParams = $ZodCheckPropertyParams;
declare const index_d_$ZodCheckRegex: typeof $ZodCheckRegex;
type index_d_$ZodCheckRegexDef = $ZodCheckRegexDef;
type index_d_$ZodCheckRegexInternals = $ZodCheckRegexInternals;
type index_d_$ZodCheckRegexParams = $ZodCheckRegexParams;
declare const index_d_$ZodCheckSizeEquals: typeof $ZodCheckSizeEquals;
type index_d_$ZodCheckSizeEqualsDef = $ZodCheckSizeEqualsDef;
type index_d_$ZodCheckSizeEqualsInternals<T extends HasSize = HasSize> = $ZodCheckSizeEqualsInternals<T>;
type index_d_$ZodCheckSizeEqualsParams = $ZodCheckSizeEqualsParams;
declare const index_d_$ZodCheckStartsWith: typeof $ZodCheckStartsWith;
type index_d_$ZodCheckStartsWithDef = $ZodCheckStartsWithDef;
type index_d_$ZodCheckStartsWithInternals = $ZodCheckStartsWithInternals;
type index_d_$ZodCheckStartsWithParams = $ZodCheckStartsWithParams;
declare const index_d_$ZodCheckStringFormat: typeof $ZodCheckStringFormat;
type index_d_$ZodCheckStringFormatDef<Format extends string = string> = $ZodCheckStringFormatDef<Format>;
type index_d_$ZodCheckStringFormatInternals = $ZodCheckStringFormatInternals;
type index_d_$ZodCheckStringFormatParams = $ZodCheckStringFormatParams;
type index_d_$ZodCheckULIDParams = $ZodCheckULIDParams;
type index_d_$ZodCheckURLParams = $ZodCheckURLParams;
type index_d_$ZodCheckUUIDParams = $ZodCheckUUIDParams;
type index_d_$ZodCheckUUIDv4Params = $ZodCheckUUIDv4Params;
type index_d_$ZodCheckUUIDv6Params = $ZodCheckUUIDv6Params;
type index_d_$ZodCheckUUIDv7Params = $ZodCheckUUIDv7Params;
declare const index_d_$ZodCheckUpperCase: typeof $ZodCheckUpperCase;
type index_d_$ZodCheckUpperCaseDef = $ZodCheckUpperCaseDef;
type index_d_$ZodCheckUpperCaseInternals = $ZodCheckUpperCaseInternals;
type index_d_$ZodCheckUpperCaseParams = $ZodCheckUpperCaseParams;
type index_d_$ZodCheckXIDParams = $ZodCheckXIDParams;
type index_d_$ZodChecks = $ZodChecks;
declare const index_d_$ZodCodec: typeof $ZodCodec;
type index_d_$ZodCodecDef<A extends SomeType = $ZodType, B extends SomeType = $ZodType> = $ZodCodecDef<A, B>;
type index_d_$ZodCodecInternals<A extends SomeType = $ZodType, B extends SomeType = $ZodType> = $ZodCodecInternals<A, B>;
type index_d_$ZodConfig = $ZodConfig;
declare const index_d_$ZodCustom: typeof $ZodCustom;
type index_d_$ZodCustomDef<O = unknown> = $ZodCustomDef<O>;
type index_d_$ZodCustomInternals<O = unknown, I = unknown> = $ZodCustomInternals<O, I>;
type index_d_$ZodCustomParams = $ZodCustomParams;
declare const index_d_$ZodCustomStringFormat: typeof $ZodCustomStringFormat;
type index_d_$ZodCustomStringFormatDef<Format extends string = string> = $ZodCustomStringFormatDef<Format>;
type index_d_$ZodCustomStringFormatInternals<Format extends string = string> = $ZodCustomStringFormatInternals<Format>;
declare const index_d_$ZodDate: typeof $ZodDate;
type index_d_$ZodDateDef = $ZodDateDef;
type index_d_$ZodDateInternals<T = unknown> = $ZodDateInternals<T>;
type index_d_$ZodDateParams = $ZodDateParams;
declare const index_d_$ZodDefault: typeof $ZodDefault;
type index_d_$ZodDefaultDef<T extends SomeType = $ZodType> = $ZodDefaultDef<T>;
type index_d_$ZodDefaultInternals<T extends SomeType = $ZodType> = $ZodDefaultInternals<T>;
type index_d_$ZodDefaultParams = $ZodDefaultParams;
declare const index_d_$ZodDiscriminatedUnion: typeof $ZodDiscriminatedUnion;
type index_d_$ZodDiscriminatedUnionDef<Options extends readonly SomeType[] = readonly $ZodType[], Disc extends string = string> = $ZodDiscriminatedUnionDef<Options, Disc>;
type index_d_$ZodDiscriminatedUnionInternals<Options extends readonly SomeType[] = readonly $ZodType[], Disc extends string = string> = $ZodDiscriminatedUnionInternals<Options, Disc>;
type index_d_$ZodDiscriminatedUnionParams = $ZodDiscriminatedUnionParams;
declare const index_d_$ZodE164: typeof $ZodE164;
type index_d_$ZodE164Def = $ZodE164Def;
type index_d_$ZodE164Internals = $ZodE164Internals;
type index_d_$ZodE164Params = $ZodE164Params;
declare const index_d_$ZodEmail: typeof $ZodEmail;
type index_d_$ZodEmailDef = $ZodEmailDef;
type index_d_$ZodEmailInternals = $ZodEmailInternals;
type index_d_$ZodEmailParams = $ZodEmailParams;
declare const index_d_$ZodEmoji: typeof $ZodEmoji;
type index_d_$ZodEmojiDef = $ZodEmojiDef;
type index_d_$ZodEmojiInternals = $ZodEmojiInternals;
type index_d_$ZodEmojiParams = $ZodEmojiParams;
type index_d_$ZodEncodeError = $ZodEncodeError;
declare const index_d_$ZodEncodeError: typeof $ZodEncodeError;
declare const index_d_$ZodEnum: typeof $ZodEnum;
type index_d_$ZodEnumDef<T extends EnumLike = EnumLike> = $ZodEnumDef<T>;
type index_d_$ZodEnumInternals<out T extends EnumLike = EnumLike> = $ZodEnumInternals<T>;
type index_d_$ZodEnumParams = $ZodEnumParams;
declare const index_d_$ZodError: typeof $ZodError;
type index_d_$ZodErrorClass = $ZodErrorClass;
type index_d_$ZodErrorMap<T extends $ZodIssueBase = $ZodIssue> = $ZodErrorMap<T>;
type index_d_$ZodErrorTree<T, U = string> = $ZodErrorTree<T, U>;
declare const index_d_$ZodExactOptional: typeof $ZodExactOptional;
type index_d_$ZodExactOptionalDef<T extends SomeType = $ZodType> = $ZodExactOptionalDef<T>;
type index_d_$ZodExactOptionalInternals<T extends SomeType = $ZodType> = $ZodExactOptionalInternals<T>;
declare const index_d_$ZodFile: typeof $ZodFile;
type index_d_$ZodFileDef = $ZodFileDef;
type index_d_$ZodFileInternals = $ZodFileInternals;
type index_d_$ZodFileParams = $ZodFileParams;
type index_d_$ZodFlattenedError<T, U = string> = $ZodFlattenedError<T, U>;
type index_d_$ZodFormattedError<T, U = string> = $ZodFormattedError<T, U>;
declare const index_d_$ZodFunction: typeof $ZodFunction;
type index_d_$ZodFunctionArgs = $ZodFunctionArgs;
type index_d_$ZodFunctionDef<In extends $ZodFunctionIn = $ZodFunctionIn, Out extends $ZodFunctionOut = $ZodFunctionOut> = $ZodFunctionDef<In, Out>;
type index_d_$ZodFunctionIn = $ZodFunctionIn;
type index_d_$ZodFunctionInternals<Args extends $ZodFunctionIn, Returns extends $ZodFunctionOut> = $ZodFunctionInternals<Args, Returns>;
type index_d_$ZodFunctionOut = $ZodFunctionOut;
type index_d_$ZodFunctionParams<I extends $ZodFunctionIn, O extends $ZodType> = $ZodFunctionParams<I, O>;
declare const index_d_$ZodGUID: typeof $ZodGUID;
type index_d_$ZodGUIDDef = $ZodGUIDDef;
type index_d_$ZodGUIDInternals = $ZodGUIDInternals;
type index_d_$ZodGUIDParams = $ZodGUIDParams;
declare const index_d_$ZodIPv4: typeof $ZodIPv4;
type index_d_$ZodIPv4Def = $ZodIPv4Def;
type index_d_$ZodIPv4Internals = $ZodIPv4Internals;
type index_d_$ZodIPv4Params = $ZodIPv4Params;
declare const index_d_$ZodIPv6: typeof $ZodIPv6;
type index_d_$ZodIPv6Def = $ZodIPv6Def;
type index_d_$ZodIPv6Internals = $ZodIPv6Internals;
type index_d_$ZodIPv6Params = $ZodIPv6Params;
declare const index_d_$ZodISODate: typeof $ZodISODate;
type index_d_$ZodISODateDef = $ZodISODateDef;
type index_d_$ZodISODateInternals = $ZodISODateInternals;
type index_d_$ZodISODateParams = $ZodISODateParams;
declare const index_d_$ZodISODateTime: typeof $ZodISODateTime;
type index_d_$ZodISODateTimeDef = $ZodISODateTimeDef;
type index_d_$ZodISODateTimeInternals = $ZodISODateTimeInternals;
type index_d_$ZodISODateTimeParams = $ZodISODateTimeParams;
declare const index_d_$ZodISODuration: typeof $ZodISODuration;
type index_d_$ZodISODurationDef = $ZodISODurationDef;
type index_d_$ZodISODurationInternals = $ZodISODurationInternals;
type index_d_$ZodISODurationParams = $ZodISODurationParams;
declare const index_d_$ZodISOTime: typeof $ZodISOTime;
type index_d_$ZodISOTimeDef = $ZodISOTimeDef;
type index_d_$ZodISOTimeInternals = $ZodISOTimeInternals;
type index_d_$ZodISOTimeParams = $ZodISOTimeParams;
type index_d_$ZodInternalIssue<T extends $ZodIssueBase = $ZodIssue> = $ZodInternalIssue<T>;
declare const index_d_$ZodIntersection: typeof $ZodIntersection;
type index_d_$ZodIntersectionDef<Left extends SomeType = $ZodType, Right extends SomeType = $ZodType> = $ZodIntersectionDef<Left, Right>;
type index_d_$ZodIntersectionInternals<A extends SomeType = $ZodType, B extends SomeType = $ZodType> = $ZodIntersectionInternals<A, B>;
type index_d_$ZodIntersectionParams = $ZodIntersectionParams;
type index_d_$ZodInvalidTypeExpected = $ZodInvalidTypeExpected;
type index_d_$ZodIssue = $ZodIssue;
type index_d_$ZodIssueBase = $ZodIssueBase;
type index_d_$ZodIssueCode = $ZodIssueCode;
type index_d_$ZodIssueCustom = $ZodIssueCustom;
type index_d_$ZodIssueInvalidElement<Input = unknown> = $ZodIssueInvalidElement<Input>;
type index_d_$ZodIssueInvalidKey<Input = unknown> = $ZodIssueInvalidKey<Input>;
type index_d_$ZodIssueInvalidStringFormat = $ZodIssueInvalidStringFormat;
type index_d_$ZodIssueInvalidType<Input = unknown> = $ZodIssueInvalidType<Input>;
type index_d_$ZodIssueInvalidUnion = $ZodIssueInvalidUnion;
type index_d_$ZodIssueInvalidValue<Input = unknown> = $ZodIssueInvalidValue<Input>;
type index_d_$ZodIssueNotMultipleOf<Input extends number | bigint = number | bigint> = $ZodIssueNotMultipleOf<Input>;
type index_d_$ZodIssueStringCommonFormats = $ZodIssueStringCommonFormats;
type index_d_$ZodIssueStringEndsWith = $ZodIssueStringEndsWith;
type index_d_$ZodIssueStringIncludes = $ZodIssueStringIncludes;
type index_d_$ZodIssueStringInvalidJWT = $ZodIssueStringInvalidJWT;
type index_d_$ZodIssueStringInvalidRegex = $ZodIssueStringInvalidRegex;
type index_d_$ZodIssueStringStartsWith = $ZodIssueStringStartsWith;
type index_d_$ZodIssueTooBig<Input = unknown> = $ZodIssueTooBig<Input>;
type index_d_$ZodIssueTooSmall<Input = unknown> = $ZodIssueTooSmall<Input>;
type index_d_$ZodIssueUnrecognizedKeys = $ZodIssueUnrecognizedKeys;
declare const index_d_$ZodJWT: typeof $ZodJWT;
type index_d_$ZodJWTDef = $ZodJWTDef;
type index_d_$ZodJWTInternals = $ZodJWTInternals;
type index_d_$ZodJWTParams = $ZodJWTParams;
declare const index_d_$ZodKSUID: typeof $ZodKSUID;
type index_d_$ZodKSUIDDef = $ZodKSUIDDef;
type index_d_$ZodKSUIDInternals = $ZodKSUIDInternals;
type index_d_$ZodKSUIDParams = $ZodKSUIDParams;
declare const index_d_$ZodLazy: typeof $ZodLazy;
type index_d_$ZodLazyDef<T extends SomeType = $ZodType> = $ZodLazyDef<T>;
type index_d_$ZodLazyInternals<T extends SomeType = $ZodType> = $ZodLazyInternals<T>;
type index_d_$ZodLazyParams = $ZodLazyParams;
declare const index_d_$ZodLiteral: typeof $ZodLiteral;
type index_d_$ZodLiteralDef<T extends Literal> = $ZodLiteralDef<T>;
type index_d_$ZodLiteralInternals<T extends Literal = Literal> = $ZodLiteralInternals<T>;
type index_d_$ZodLiteralParams = $ZodLiteralParams;
type index_d_$ZodLooseShape = $ZodLooseShape;
declare const index_d_$ZodMAC: typeof $ZodMAC;
type index_d_$ZodMACDef = $ZodMACDef;
type index_d_$ZodMACInternals = $ZodMACInternals;
type index_d_$ZodMACParams = $ZodMACParams;
declare const index_d_$ZodMap: typeof $ZodMap;
type index_d_$ZodMapDef<Key extends SomeType = $ZodType, Value extends SomeType = $ZodType> = $ZodMapDef<Key, Value>;
type index_d_$ZodMapInternals<Key extends SomeType = $ZodType, Value extends SomeType = $ZodType> = $ZodMapInternals<Key, Value>;
type index_d_$ZodMapParams = $ZodMapParams;
declare const index_d_$ZodNaN: typeof $ZodNaN;
type index_d_$ZodNaNDef = $ZodNaNDef;
type index_d_$ZodNaNInternals = $ZodNaNInternals;
type index_d_$ZodNaNParams = $ZodNaNParams;
declare const index_d_$ZodNanoID: typeof $ZodNanoID;
type index_d_$ZodNanoIDDef = $ZodNanoIDDef;
type index_d_$ZodNanoIDInternals = $ZodNanoIDInternals;
type index_d_$ZodNanoIDParams = $ZodNanoIDParams;
type index_d_$ZodNarrow<T extends SomeType, Out> = $ZodNarrow<T, Out>;
declare const index_d_$ZodNever: typeof $ZodNever;
type index_d_$ZodNeverDef = $ZodNeverDef;
type index_d_$ZodNeverInternals = $ZodNeverInternals;
type index_d_$ZodNeverParams = $ZodNeverParams;
declare const index_d_$ZodNonOptional: typeof $ZodNonOptional;
type index_d_$ZodNonOptionalDef<T extends SomeType = $ZodType> = $ZodNonOptionalDef<T>;
type index_d_$ZodNonOptionalInternals<T extends SomeType = $ZodType> = $ZodNonOptionalInternals<T>;
type index_d_$ZodNonOptionalParams = $ZodNonOptionalParams;
declare const index_d_$ZodNull: typeof $ZodNull;
type index_d_$ZodNullDef = $ZodNullDef;
type index_d_$ZodNullInternals = $ZodNullInternals;
type index_d_$ZodNullParams = $ZodNullParams;
declare const index_d_$ZodNullable: typeof $ZodNullable;
type index_d_$ZodNullableDef<T extends SomeType = $ZodType> = $ZodNullableDef<T>;
type index_d_$ZodNullableInternals<T extends SomeType = $ZodType> = $ZodNullableInternals<T>;
type index_d_$ZodNullableParams = $ZodNullableParams;
declare const index_d_$ZodNumber: typeof $ZodNumber;
type index_d_$ZodNumberDef = $ZodNumberDef;
declare const index_d_$ZodNumberFormat: typeof $ZodNumberFormat;
type index_d_$ZodNumberFormatDef = $ZodNumberFormatDef;
type index_d_$ZodNumberFormatInternals = $ZodNumberFormatInternals;
type index_d_$ZodNumberFormatParams = $ZodNumberFormatParams;
type index_d_$ZodNumberFormats = $ZodNumberFormats;
type index_d_$ZodNumberInternals<Input = unknown> = $ZodNumberInternals<Input>;
type index_d_$ZodNumberParams = $ZodNumberParams;
declare const index_d_$ZodObject: typeof $ZodObject;
type index_d_$ZodObjectConfig = $ZodObjectConfig;
type index_d_$ZodObjectDef<Shape extends $ZodShape = $ZodShape> = $ZodObjectDef<Shape>;
type index_d_$ZodObjectInternals<out Shape extends $ZodShape = $ZodShape, out Config extends $ZodObjectConfig = $ZodObjectConfig> = $ZodObjectInternals<Shape, Config>;
declare const index_d_$ZodObjectJIT: typeof $ZodObjectJIT;
type index_d_$ZodObjectParams = $ZodObjectParams;
declare const index_d_$ZodOptional: typeof $ZodOptional;
type index_d_$ZodOptionalDef<T extends SomeType = $ZodType> = $ZodOptionalDef<T>;
type index_d_$ZodOptionalInternals<T extends SomeType = $ZodType> = $ZodOptionalInternals<T>;
type index_d_$ZodOptionalParams = $ZodOptionalParams;
declare const index_d_$ZodPipe: typeof $ZodPipe;
type index_d_$ZodPipeDef<A extends SomeType = $ZodType, B extends SomeType = $ZodType> = $ZodPipeDef<A, B>;
type index_d_$ZodPipeInternals<A extends SomeType = $ZodType, B extends SomeType = $ZodType> = $ZodPipeInternals<A, B>;
type index_d_$ZodPipeParams = $ZodPipeParams;
declare const index_d_$ZodPrefault: typeof $ZodPrefault;
type index_d_$ZodPrefaultDef<T extends SomeType = $ZodType> = $ZodPrefaultDef<T>;
type index_d_$ZodPrefaultInternals<T extends SomeType = $ZodType> = $ZodPrefaultInternals<T>;
declare const index_d_$ZodPromise: typeof $ZodPromise;
type index_d_$ZodPromiseDef<T extends SomeType = $ZodType> = $ZodPromiseDef<T>;
type index_d_$ZodPromiseInternals<T extends SomeType = $ZodType> = $ZodPromiseInternals<T>;
type index_d_$ZodPromiseParams = $ZodPromiseParams;
type index_d_$ZodRawIssue<T extends $ZodIssueBase = $ZodIssue> = $ZodRawIssue<T>;
declare const index_d_$ZodReadonly: typeof $ZodReadonly;
type index_d_$ZodReadonlyDef<T extends SomeType = $ZodType> = $ZodReadonlyDef<T>;
type index_d_$ZodReadonlyInternals<T extends SomeType = $ZodType> = $ZodReadonlyInternals<T>;
type index_d_$ZodReadonlyParams = $ZodReadonlyParams;
declare const index_d_$ZodRealError: typeof $ZodRealError;
declare const index_d_$ZodRecord: typeof $ZodRecord;
type index_d_$ZodRecordDef<Key extends $ZodRecordKey = $ZodRecordKey, Value extends SomeType = $ZodType> = $ZodRecordDef<Key, Value>;
type index_d_$ZodRecordInternals<Key extends $ZodRecordKey = $ZodRecordKey, Value extends SomeType = $ZodType> = $ZodRecordInternals<Key, Value>;
type index_d_$ZodRecordKey = $ZodRecordKey;
type index_d_$ZodRecordParams = $ZodRecordParams;
type index_d_$ZodRegistry<Meta extends MetadataType = MetadataType, Schema extends $ZodType = $ZodType> = $ZodRegistry<Meta, Schema>;
declare const index_d_$ZodRegistry: typeof $ZodRegistry;
declare const index_d_$ZodSet: typeof $ZodSet;
type index_d_$ZodSetDef<T extends SomeType = $ZodType> = $ZodSetDef<T>;
type index_d_$ZodSetInternals<T extends SomeType = $ZodType> = $ZodSetInternals<T>;
type index_d_$ZodSetParams = $ZodSetParams;
type index_d_$ZodShape = $ZodShape;
type index_d_$ZodStandardSchema<T> = $ZodStandardSchema<T>;
declare const index_d_$ZodString: typeof $ZodString;
type index_d_$ZodStringBoolParams = $ZodStringBoolParams;
type index_d_$ZodStringDef = $ZodStringDef;
declare const index_d_$ZodStringFormat: typeof $ZodStringFormat;
type index_d_$ZodStringFormatChecks = $ZodStringFormatChecks;
type index_d_$ZodStringFormatDef<Format extends string = string> = $ZodStringFormatDef<Format>;
type index_d_$ZodStringFormatInternals<Format extends string = string> = $ZodStringFormatInternals<Format>;
type index_d_$ZodStringFormatIssues = $ZodStringFormatIssues;
type index_d_$ZodStringFormatParams = $ZodStringFormatParams;
type index_d_$ZodStringFormatTypes = $ZodStringFormatTypes;
type index_d_$ZodStringFormats = $ZodStringFormats;
type index_d_$ZodStringInternals<Input> = $ZodStringInternals<Input>;
type index_d_$ZodStringParams = $ZodStringParams;
declare const index_d_$ZodSuccess: typeof $ZodSuccess;
type index_d_$ZodSuccessDef<T extends SomeType = $ZodType> = $ZodSuccessDef<T>;
type index_d_$ZodSuccessInternals<T extends SomeType = $ZodType> = $ZodSuccessInternals<T>;
type index_d_$ZodSuccessParams = $ZodSuccessParams;
type index_d_$ZodSuperRefineIssue<T extends $ZodIssueBase = $ZodIssue> = $ZodSuperRefineIssue<T>;
declare const index_d_$ZodSymbol: typeof $ZodSymbol;
type index_d_$ZodSymbolDef = $ZodSymbolDef;
type index_d_$ZodSymbolInternals = $ZodSymbolInternals;
type index_d_$ZodSymbolParams = $ZodSymbolParams;
declare const index_d_$ZodTemplateLiteral: typeof $ZodTemplateLiteral;
type index_d_$ZodTemplateLiteralDef = $ZodTemplateLiteralDef;
type index_d_$ZodTemplateLiteralInternals<Template extends string = string> = $ZodTemplateLiteralInternals<Template>;
type index_d_$ZodTemplateLiteralParams = $ZodTemplateLiteralParams;
type index_d_$ZodTemplateLiteralPart = $ZodTemplateLiteralPart;
declare const index_d_$ZodTransform: typeof $ZodTransform;
type index_d_$ZodTransformDef = $ZodTransformDef;
type index_d_$ZodTransformInternals<O = unknown, I = unknown> = $ZodTransformInternals<O, I>;
type index_d_$ZodTransformParams = $ZodTransformParams;
declare const index_d_$ZodTuple: typeof $ZodTuple;
type index_d_$ZodTupleDef<T extends TupleItems = readonly $ZodType[], Rest extends SomeType | null = $ZodType | null> = $ZodTupleDef<T, Rest>;
type index_d_$ZodTupleInternals<T extends TupleItems = readonly $ZodType[], Rest extends SomeType | null = $ZodType | null> = $ZodTupleInternals<T, Rest>;
type index_d_$ZodTupleParams = $ZodTupleParams;
declare const index_d_$ZodType: typeof $ZodType;
type index_d_$ZodTypeDef = $ZodTypeDef;
type index_d_$ZodTypeDiscriminable = $ZodTypeDiscriminable;
type index_d_$ZodTypeDiscriminableInternals = $ZodTypeDiscriminableInternals;
type index_d_$ZodTypeInternals<out O = unknown, out I = unknown> = $ZodTypeInternals<O, I>;
type index_d_$ZodTypes = $ZodTypes;
declare const index_d_$ZodULID: typeof $ZodULID;
type index_d_$ZodULIDDef = $ZodULIDDef;
type index_d_$ZodULIDInternals = $ZodULIDInternals;
type index_d_$ZodULIDParams = $ZodULIDParams;
declare const index_d_$ZodURL: typeof $ZodURL;
type index_d_$ZodURLDef = $ZodURLDef;
type index_d_$ZodURLInternals = $ZodURLInternals;
type index_d_$ZodURLParams = $ZodURLParams;
declare const index_d_$ZodUUID: typeof $ZodUUID;
type index_d_$ZodUUIDDef = $ZodUUIDDef;
type index_d_$ZodUUIDInternals = $ZodUUIDInternals;
type index_d_$ZodUUIDParams = $ZodUUIDParams;
type index_d_$ZodUUIDv4Params = $ZodUUIDv4Params;
type index_d_$ZodUUIDv6Params = $ZodUUIDv6Params;
type index_d_$ZodUUIDv7Params = $ZodUUIDv7Params;
declare const index_d_$ZodUndefined: typeof $ZodUndefined;
type index_d_$ZodUndefinedDef = $ZodUndefinedDef;
type index_d_$ZodUndefinedInternals = $ZodUndefinedInternals;
type index_d_$ZodUndefinedParams = $ZodUndefinedParams;
declare const index_d_$ZodUnion: typeof $ZodUnion;
type index_d_$ZodUnionDef<Options extends readonly SomeType[] = readonly $ZodType[]> = $ZodUnionDef<Options>;
type index_d_$ZodUnionInternals<T extends readonly SomeType[] = readonly $ZodType[]> = $ZodUnionInternals<T>;
type index_d_$ZodUnionParams = $ZodUnionParams;
declare const index_d_$ZodUnknown: typeof $ZodUnknown;
type index_d_$ZodUnknownDef = $ZodUnknownDef;
type index_d_$ZodUnknownInternals = $ZodUnknownInternals;
type index_d_$ZodUnknownParams = $ZodUnknownParams;
declare const index_d_$ZodVoid: typeof $ZodVoid;
type index_d_$ZodVoidDef = $ZodVoidDef;
type index_d_$ZodVoidInternals = $ZodVoidInternals;
type index_d_$ZodVoidParams = $ZodVoidParams;
declare const index_d_$ZodXID: typeof $ZodXID;
type index_d_$ZodXIDDef = $ZodXIDDef;
type index_d_$ZodXIDInternals = $ZodXIDInternals;
type index_d_$ZodXIDParams = $ZodXIDParams;
declare const index_d_$ZodXor: typeof $ZodXor;
type index_d_$ZodXorInternals<T extends readonly SomeType[] = readonly $ZodType[]> = $ZodXorInternals<T>;
type index_d_$ZodXorParams = $ZodXorParams;
type index_d_$brand<T extends string | number | symbol = string | number | symbol> = $brand<T>;
type index_d_$catchall<T extends SomeType> = $catchall<T>;
declare const index_d_$constructor: typeof $constructor;
type index_d_$input = $input;
type index_d_$loose = $loose;
type index_d_$output = $output;
type index_d_$partial = $partial;
type index_d_$replace<Meta, S extends $ZodType> = $replace<Meta, S>;
type index_d_$strict = $strict;
type index_d_$strip = $strip;
type index_d_CheckFn<T> = CheckFn<T>;
type index_d_CheckParams<T extends $ZodCheck = $ZodCheck, AlsoOmit extends Exclude<keyof T["_zod"]["def"], "check" | "error"> = never> = CheckParams<T, AlsoOmit>;
type index_d_CheckStringFormatParams<T extends $ZodStringFormat = $ZodStringFormat, AlsoOmit extends Exclude<keyof T["_zod"]["def"], "type" | "coerce" | "checks" | "error" | "check" | "format"> = never> = CheckStringFormatParams<T, AlsoOmit>;
type index_d_CheckTypeParams<T extends $ZodType & $ZodCheck = $ZodType & $ZodCheck, AlsoOmit extends Exclude<keyof T["_zod"]["def"], "type" | "checks" | "error" | "check"> = never> = CheckTypeParams<T, AlsoOmit>;
type index_d_ConcatenateTupleOfStrings<T extends string[]> = ConcatenateTupleOfStrings<T>;
type index_d_ConvertPartsToStringTuple<Parts extends $ZodTemplateLiteralPart[]> = ConvertPartsToStringTuple<Parts>;
type index_d_Doc = Doc;
declare const index_d_Doc: typeof Doc;
type index_d_File = File;
type index_d_GlobalMeta = GlobalMeta;
type index_d_JSONSchemaGenerator = JSONSchemaGenerator;
declare const index_d_JSONSchemaGenerator: typeof JSONSchemaGenerator;
type index_d_JSONSchemaGeneratorParams = JSONSchemaGeneratorParams;
type index_d_JSONSchemaMeta = JSONSchemaMeta;
declare const index_d_NEVER: typeof NEVER;
type index_d_Params<T extends $ZodType | $ZodCheck, IssueTypes extends $ZodIssueBase, OmitKeys extends keyof T["_zod"]["def"] = never> = Params<T, IssueTypes, OmitKeys>;
type index_d_ParseContext<T extends $ZodIssueBase = never> = ParseContext<T>;
type index_d_ParseContextInternal<T extends $ZodIssueBase = never> = ParseContextInternal<T>;
type index_d_ParsePayload<T = unknown> = ParsePayload<T>;
type index_d_ProcessParams = ProcessParams;
type index_d_Processor<T extends $ZodType = $ZodType> = Processor<T>;
type index_d_RegistryToJSONSchemaParams = RegistryToJSONSchemaParams;
type index_d_Seen = Seen;
type index_d_SomeType = SomeType;
type index_d_StringFormatParams<T extends $ZodStringFormat = $ZodStringFormat, AlsoOmit extends Exclude<keyof T["_zod"]["def"], "type" | "coerce" | "checks" | "error" | "check" | "format"> = never> = StringFormatParams<T, AlsoOmit>;
declare const index_d_TimePrecision: typeof TimePrecision;
type index_d_ToJSONSchemaContext = ToJSONSchemaContext;
type index_d_ToJSONSchemaParams = ToJSONSchemaParams;
type index_d_ToTemplateLiteral<Parts extends $ZodTemplateLiteralPart[]> = ToTemplateLiteral<Parts>;
type index_d_TypeParams<T extends $ZodType = $ZodType & {
    _isst: never;
}, AlsoOmit extends Exclude<keyof T["_zod"]["def"], "type" | "checks" | "error"> = never> = TypeParams<T, AlsoOmit>;
type index_d_ZodStandardJSONSchemaPayload<T> = ZodStandardJSONSchemaPayload<T>;
type index_d__$ZodType<T extends $ZodTypeInternals = $ZodTypeInternals> = _$ZodType<T>;
type index_d__$ZodTypeInternals = _$ZodTypeInternals;
declare const index_d__any: typeof _any;
declare const index_d__array: typeof _array;
declare const index_d__base64: typeof _base64;
declare const index_d__base64url: typeof _base64url;
declare const index_d__bigint: typeof _bigint;
declare const index_d__boolean: typeof _boolean;
declare const index_d__check: typeof _check;
declare const index_d__cidrv4: typeof _cidrv4;
declare const index_d__cidrv6: typeof _cidrv6;
declare const index_d__coercedBigint: typeof _coercedBigint;
declare const index_d__coercedBoolean: typeof _coercedBoolean;
declare const index_d__coercedDate: typeof _coercedDate;
declare const index_d__coercedNumber: typeof _coercedNumber;
declare const index_d__coercedString: typeof _coercedString;
declare const index_d__cuid: typeof _cuid;
declare const index_d__cuid2: typeof _cuid2;
declare const index_d__custom: typeof _custom;
declare const index_d__date: typeof _date;
declare const index_d__decode: typeof _decode;
declare const index_d__decodeAsync: typeof _decodeAsync;
declare const index_d__discriminatedUnion: typeof _discriminatedUnion;
declare const index_d__e164: typeof _e164;
declare const index_d__email: typeof _email;
declare const index_d__emoji: typeof _emoji;
declare const index_d__encode: typeof _encode;
declare const index_d__encodeAsync: typeof _encodeAsync;
declare const index_d__endsWith: typeof _endsWith;
declare const index_d__file: typeof _file;
declare const index_d__float32: typeof _float32;
declare const index_d__float64: typeof _float64;
declare const index_d__gt: typeof _gt;
declare const index_d__gte: typeof _gte;
declare const index_d__guid: typeof _guid;
declare const index_d__includes: typeof _includes;
declare const index_d__int: typeof _int;
declare const index_d__int32: typeof _int32;
declare const index_d__int64: typeof _int64;
declare const index_d__intersection: typeof _intersection;
declare const index_d__ipv4: typeof _ipv4;
declare const index_d__ipv6: typeof _ipv6;
declare const index_d__isoDate: typeof _isoDate;
declare const index_d__isoDateTime: typeof _isoDateTime;
declare const index_d__isoDuration: typeof _isoDuration;
declare const index_d__isoTime: typeof _isoTime;
declare const index_d__jwt: typeof _jwt;
declare const index_d__ksuid: typeof _ksuid;
declare const index_d__lazy: typeof _lazy;
declare const index_d__length: typeof _length;
declare const index_d__literal: typeof _literal;
declare const index_d__lowercase: typeof _lowercase;
declare const index_d__lt: typeof _lt;
declare const index_d__lte: typeof _lte;
declare const index_d__mac: typeof _mac;
declare const index_d__map: typeof _map;
declare const index_d__maxLength: typeof _maxLength;
declare const index_d__maxSize: typeof _maxSize;
declare const index_d__mime: typeof _mime;
declare const index_d__minLength: typeof _minLength;
declare const index_d__minSize: typeof _minSize;
declare const index_d__multipleOf: typeof _multipleOf;
declare const index_d__nan: typeof _nan;
declare const index_d__nanoid: typeof _nanoid;
declare const index_d__nativeEnum: typeof _nativeEnum;
declare const index_d__negative: typeof _negative;
declare const index_d__never: typeof _never;
declare const index_d__nonnegative: typeof _nonnegative;
declare const index_d__nonoptional: typeof _nonoptional;
declare const index_d__nonpositive: typeof _nonpositive;
declare const index_d__normalize: typeof _normalize;
declare const index_d__nullable: typeof _nullable;
declare const index_d__number: typeof _number;
declare const index_d__optional: typeof _optional;
declare const index_d__overwrite: typeof _overwrite;
declare const index_d__parse: typeof _parse;
declare const index_d__parseAsync: typeof _parseAsync;
declare const index_d__pipe: typeof _pipe;
declare const index_d__positive: typeof _positive;
declare const index_d__promise: typeof _promise;
declare const index_d__property: typeof _property;
declare const index_d__readonly: typeof _readonly;
declare const index_d__record: typeof _record;
declare const index_d__refine: typeof _refine;
declare const index_d__regex: typeof _regex;
declare const index_d__safeDecode: typeof _safeDecode;
declare const index_d__safeDecodeAsync: typeof _safeDecodeAsync;
declare const index_d__safeEncode: typeof _safeEncode;
declare const index_d__safeEncodeAsync: typeof _safeEncodeAsync;
declare const index_d__safeParse: typeof _safeParse;
declare const index_d__safeParseAsync: typeof _safeParseAsync;
declare const index_d__set: typeof _set;
declare const index_d__size: typeof _size;
declare const index_d__slugify: typeof _slugify;
declare const index_d__startsWith: typeof _startsWith;
declare const index_d__string: typeof _string;
declare const index_d__stringFormat: typeof _stringFormat;
declare const index_d__stringbool: typeof _stringbool;
declare const index_d__success: typeof _success;
declare const index_d__superRefine: typeof _superRefine;
declare const index_d__symbol: typeof _symbol;
declare const index_d__templateLiteral: typeof _templateLiteral;
declare const index_d__toLowerCase: typeof _toLowerCase;
declare const index_d__toUpperCase: typeof _toUpperCase;
declare const index_d__transform: typeof _transform;
declare const index_d__trim: typeof _trim;
declare const index_d__tuple: typeof _tuple;
declare const index_d__uint32: typeof _uint32;
declare const index_d__uint64: typeof _uint64;
declare const index_d__ulid: typeof _ulid;
declare const index_d__union: typeof _union;
declare const index_d__unknown: typeof _unknown;
declare const index_d__uppercase: typeof _uppercase;
declare const index_d__url: typeof _url;
declare const index_d__uuid: typeof _uuid;
declare const index_d__uuidv4: typeof _uuidv4;
declare const index_d__uuidv6: typeof _uuidv6;
declare const index_d__uuidv7: typeof _uuidv7;
declare const index_d__xid: typeof _xid;
declare const index_d__xor: typeof _xor;
declare const index_d_clone: typeof clone;
declare const index_d_config: typeof config;
declare const index_d_createStandardJSONSchemaMethod: typeof createStandardJSONSchemaMethod;
declare const index_d_createToJSONSchemaMethod: typeof createToJSONSchemaMethod;
declare const index_d_extractDefs: typeof extractDefs;
declare const index_d_finalize: typeof finalize;
declare const index_d_flattenError: typeof flattenError;
declare const index_d_formatError: typeof formatError;
declare const index_d_globalConfig: typeof globalConfig;
declare const index_d_globalRegistry: typeof globalRegistry;
declare const index_d_initializeContext: typeof initializeContext;
type index_d_input<T> = input<T>;
declare const index_d_isValidBase64: typeof isValidBase64;
declare const index_d_isValidBase64URL: typeof isValidBase64URL;
declare const index_d_isValidJWT: typeof isValidJWT;
type index_d_output<T> = output<T>;
declare const index_d_prettifyError: typeof prettifyError;
declare const index_d_process: typeof process;
declare const index_d_registry: typeof registry;
declare const index_d_toDotPath: typeof toDotPath;
declare const index_d_toJSONSchema: typeof toJSONSchema;
declare const index_d_treeifyError: typeof treeifyError;
declare const index_d_version: typeof version;
declare namespace index_d {
  export { index_d_$ZodAny as $ZodAny, index_d_$ZodArray as $ZodArray, index_d_$ZodAsyncError as $ZodAsyncError, index_d_$ZodBase64 as $ZodBase64, index_d_$ZodBase64URL as $ZodBase64URL, index_d_$ZodBigInt as $ZodBigInt, index_d_$ZodBigIntFormat as $ZodBigIntFormat, index_d_$ZodBoolean as $ZodBoolean, index_d_$ZodCIDRv4 as $ZodCIDRv4, index_d_$ZodCIDRv6 as $ZodCIDRv6, index_d_$ZodCUID as $ZodCUID, index_d_$ZodCUID2 as $ZodCUID2, index_d_$ZodCatch as $ZodCatch, index_d_$ZodCheck as $ZodCheck, index_d_$ZodCheckBigIntFormat as $ZodCheckBigIntFormat, index_d_$ZodCheckEndsWith as $ZodCheckEndsWith, index_d_$ZodCheckGreaterThan as $ZodCheckGreaterThan, index_d_$ZodCheckIncludes as $ZodCheckIncludes, index_d_$ZodCheckLengthEquals as $ZodCheckLengthEquals, index_d_$ZodCheckLessThan as $ZodCheckLessThan, index_d_$ZodCheckLowerCase as $ZodCheckLowerCase, index_d_$ZodCheckMaxLength as $ZodCheckMaxLength, index_d_$ZodCheckMaxSize as $ZodCheckMaxSize, index_d_$ZodCheckMimeType as $ZodCheckMimeType, index_d_$ZodCheckMinLength as $ZodCheckMinLength, index_d_$ZodCheckMinSize as $ZodCheckMinSize, index_d_$ZodCheckMultipleOf as $ZodCheckMultipleOf, index_d_$ZodCheckNumberFormat as $ZodCheckNumberFormat, index_d_$ZodCheckOverwrite as $ZodCheckOverwrite, index_d_$ZodCheckProperty as $ZodCheckProperty, index_d_$ZodCheckRegex as $ZodCheckRegex, index_d_$ZodCheckSizeEquals as $ZodCheckSizeEquals, index_d_$ZodCheckStartsWith as $ZodCheckStartsWith, index_d_$ZodCheckStringFormat as $ZodCheckStringFormat, index_d_$ZodCheckUpperCase as $ZodCheckUpperCase, index_d_$ZodCodec as $ZodCodec, index_d_$ZodCustom as $ZodCustom, index_d_$ZodCustomStringFormat as $ZodCustomStringFormat, index_d_$ZodDate as $ZodDate, index_d_$ZodDefault as $ZodDefault, index_d_$ZodDiscriminatedUnion as $ZodDiscriminatedUnion, index_d_$ZodE164 as $ZodE164, index_d_$ZodEmail as $ZodEmail, index_d_$ZodEmoji as $ZodEmoji, index_d_$ZodEncodeError as $ZodEncodeError, index_d_$ZodEnum as $ZodEnum, index_d_$ZodError as $ZodError, index_d_$ZodExactOptional as $ZodExactOptional, index_d_$ZodFile as $ZodFile, index_d_$ZodFunction as $ZodFunction, index_d_$ZodGUID as $ZodGUID, index_d_$ZodIPv4 as $ZodIPv4, index_d_$ZodIPv6 as $ZodIPv6, index_d_$ZodISODate as $ZodISODate, index_d_$ZodISODateTime as $ZodISODateTime, index_d_$ZodISODuration as $ZodISODuration, index_d_$ZodISOTime as $ZodISOTime, index_d_$ZodIntersection as $ZodIntersection, index_d_$ZodJWT as $ZodJWT, index_d_$ZodKSUID as $ZodKSUID, index_d_$ZodLazy as $ZodLazy, index_d_$ZodLiteral as $ZodLiteral, index_d_$ZodMAC as $ZodMAC, index_d_$ZodMap as $ZodMap, index_d_$ZodNaN as $ZodNaN, index_d_$ZodNanoID as $ZodNanoID, index_d_$ZodNever as $ZodNever, index_d_$ZodNonOptional as $ZodNonOptional, index_d_$ZodNull as $ZodNull, index_d_$ZodNullable as $ZodNullable, index_d_$ZodNumber as $ZodNumber, index_d_$ZodNumberFormat as $ZodNumberFormat, index_d_$ZodObject as $ZodObject, index_d_$ZodObjectJIT as $ZodObjectJIT, index_d_$ZodOptional as $ZodOptional, index_d_$ZodPipe as $ZodPipe, index_d_$ZodPrefault as $ZodPrefault, index_d_$ZodPromise as $ZodPromise, index_d_$ZodReadonly as $ZodReadonly, index_d_$ZodRealError as $ZodRealError, index_d_$ZodRecord as $ZodRecord, index_d_$ZodRegistry as $ZodRegistry, index_d_$ZodSet as $ZodSet, index_d_$ZodString as $ZodString, index_d_$ZodStringFormat as $ZodStringFormat, index_d_$ZodSuccess as $ZodSuccess, index_d_$ZodSymbol as $ZodSymbol, index_d_$ZodTemplateLiteral as $ZodTemplateLiteral, index_d_$ZodTransform as $ZodTransform, index_d_$ZodTuple as $ZodTuple, index_d_$ZodType as $ZodType, index_d_$ZodULID as $ZodULID, index_d_$ZodURL as $ZodURL, index_d_$ZodUUID as $ZodUUID, index_d_$ZodUndefined as $ZodUndefined, index_d_$ZodUnion as $ZodUnion, index_d_$ZodUnknown as $ZodUnknown, index_d_$ZodVoid as $ZodVoid, index_d_$ZodXID as $ZodXID, index_d_$ZodXor as $ZodXor, index_d_$constructor as $constructor, index_d_Doc as Doc, jsonSchema_d as JSONSchema, index_d_JSONSchemaGenerator as JSONSchemaGenerator, index_d_NEVER as NEVER, index_d_TimePrecision as TimePrecision, index_d__any as _any, index_d__array as _array, index_d__base64 as _base64, index_d__base64url as _base64url, index_d__bigint as _bigint, index_d__boolean as _boolean, _catch$1 as _catch, index_d__check as _check, index_d__cidrv4 as _cidrv4, index_d__cidrv6 as _cidrv6, index_d__coercedBigint as _coercedBigint, index_d__coercedBoolean as _coercedBoolean, index_d__coercedDate as _coercedDate, index_d__coercedNumber as _coercedNumber, index_d__coercedString as _coercedString, index_d__cuid as _cuid, index_d__cuid2 as _cuid2, index_d__custom as _custom, index_d__date as _date, index_d__decode as _decode, index_d__decodeAsync as _decodeAsync, _default$1 as _default, index_d__discriminatedUnion as _discriminatedUnion, index_d__e164 as _e164, index_d__email as _email, index_d__emoji as _emoji, index_d__encode as _encode, index_d__encodeAsync as _encodeAsync, index_d__endsWith as _endsWith, _enum$1 as _enum, index_d__file as _file, index_d__float32 as _float32, index_d__float64 as _float64, index_d__gt as _gt, index_d__gte as _gte, index_d__guid as _guid, index_d__includes as _includes, index_d__int as _int, index_d__int32 as _int32, index_d__int64 as _int64, index_d__intersection as _intersection, index_d__ipv4 as _ipv4, index_d__ipv6 as _ipv6, index_d__isoDate as _isoDate, index_d__isoDateTime as _isoDateTime, index_d__isoDuration as _isoDuration, index_d__isoTime as _isoTime, index_d__jwt as _jwt, index_d__ksuid as _ksuid, index_d__lazy as _lazy, index_d__length as _length, index_d__literal as _literal, index_d__lowercase as _lowercase, index_d__lt as _lt, index_d__lte as _lte, index_d__mac as _mac, index_d__map as _map, _lte as _max, index_d__maxLength as _maxLength, index_d__maxSize as _maxSize, index_d__mime as _mime, _gte as _min, index_d__minLength as _minLength, index_d__minSize as _minSize, index_d__multipleOf as _multipleOf, index_d__nan as _nan, index_d__nanoid as _nanoid, index_d__nativeEnum as _nativeEnum, index_d__negative as _negative, index_d__never as _never, index_d__nonnegative as _nonnegative, index_d__nonoptional as _nonoptional, index_d__nonpositive as _nonpositive, index_d__normalize as _normalize, _null$1 as _null, index_d__nullable as _nullable, index_d__number as _number, index_d__optional as _optional, index_d__overwrite as _overwrite, index_d__parse as _parse, index_d__parseAsync as _parseAsync, index_d__pipe as _pipe, index_d__positive as _positive, index_d__promise as _promise, index_d__property as _property, index_d__readonly as _readonly, index_d__record as _record, index_d__refine as _refine, index_d__regex as _regex, index_d__safeDecode as _safeDecode, index_d__safeDecodeAsync as _safeDecodeAsync, index_d__safeEncode as _safeEncode, index_d__safeEncodeAsync as _safeEncodeAsync, index_d__safeParse as _safeParse, index_d__safeParseAsync as _safeParseAsync, index_d__set as _set, index_d__size as _size, index_d__slugify as _slugify, index_d__startsWith as _startsWith, index_d__string as _string, index_d__stringFormat as _stringFormat, index_d__stringbool as _stringbool, index_d__success as _success, index_d__superRefine as _superRefine, index_d__symbol as _symbol, index_d__templateLiteral as _templateLiteral, index_d__toLowerCase as _toLowerCase, index_d__toUpperCase as _toUpperCase, index_d__transform as _transform, index_d__trim as _trim, index_d__tuple as _tuple, index_d__uint32 as _uint32, index_d__uint64 as _uint64, index_d__ulid as _ulid, _undefined$1 as _undefined, index_d__union as _union, index_d__unknown as _unknown, index_d__uppercase as _uppercase, index_d__url as _url, index_d__uuid as _uuid, index_d__uuidv4 as _uuidv4, index_d__uuidv6 as _uuidv6, index_d__uuidv7 as _uuidv7, _void$1 as _void, index_d__xid as _xid, index_d__xor as _xor, index_d_clone as clone, index_d_config as config, index_d_createStandardJSONSchemaMethod as createStandardJSONSchemaMethod, index_d_createToJSONSchemaMethod as createToJSONSchemaMethod, decode$1 as decode, decodeAsync$1 as decodeAsync, describe$1 as describe, encode$1 as encode, encodeAsync$1 as encodeAsync, index_d_extractDefs as extractDefs, index_d_finalize as finalize, index_d_flattenError as flattenError, index_d_formatError as formatError, index_d_globalConfig as globalConfig, index_d_globalRegistry as globalRegistry, index_d_initializeContext as initializeContext, index_d_isValidBase64 as isValidBase64, index_d_isValidBase64URL as isValidBase64URL, index_d_isValidJWT as isValidJWT, index_d$1 as locales, meta$1 as meta, parse$1 as parse, parseAsync$1 as parseAsync, index_d_prettifyError as prettifyError, index_d_process as process, regexes_d as regexes, index_d_registry as registry, safeDecode$1 as safeDecode, safeDecodeAsync$1 as safeDecodeAsync, safeEncode$1 as safeEncode, safeEncodeAsync$1 as safeEncodeAsync, safeParse$1 as safeParse, safeParseAsync$1 as safeParseAsync, index_d_toDotPath as toDotPath, index_d_toJSONSchema as toJSONSchema, index_d_treeifyError as treeifyError, util_d as util, index_d_version as version };
  export type { index_d_$Decode as $Decode, index_d_$DecodeAsync as $DecodeAsync, index_d_$Encode as $Encode, index_d_$EncodeAsync as $EncodeAsync, index_d_$InferEnumInput as $InferEnumInput, index_d_$InferEnumOutput as $InferEnumOutput, index_d_$InferInnerFunctionType as $InferInnerFunctionType, index_d_$InferInnerFunctionTypeAsync as $InferInnerFunctionTypeAsync, index_d_$InferObjectInput as $InferObjectInput, index_d_$InferObjectOutput as $InferObjectOutput, index_d_$InferOuterFunctionType as $InferOuterFunctionType, index_d_$InferOuterFunctionTypeAsync as $InferOuterFunctionTypeAsync, index_d_$InferTupleInputType as $InferTupleInputType, index_d_$InferTupleOutputType as $InferTupleOutputType, index_d_$InferUnionInput as $InferUnionInput, index_d_$InferUnionOutput as $InferUnionOutput, index_d_$InferZodRecordInput as $InferZodRecordInput, index_d_$InferZodRecordOutput as $InferZodRecordOutput, index_d_$Parse as $Parse, index_d_$ParseAsync as $ParseAsync, index_d_$PartsToTemplateLiteral as $PartsToTemplateLiteral, index_d_$RefinementCtx as $RefinementCtx, index_d_$SafeDecode as $SafeDecode, index_d_$SafeDecodeAsync as $SafeDecodeAsync, index_d_$SafeEncode as $SafeEncode, index_d_$SafeEncodeAsync as $SafeEncodeAsync, index_d_$SafeParse as $SafeParse, index_d_$SafeParseAsync as $SafeParseAsync, index_d_$ZodAnyDef as $ZodAnyDef, index_d_$ZodAnyInternals as $ZodAnyInternals, index_d_$ZodAnyParams as $ZodAnyParams, index_d_$ZodArrayDef as $ZodArrayDef, index_d_$ZodArrayInternals as $ZodArrayInternals, index_d_$ZodArrayParams as $ZodArrayParams, index_d_$ZodBase64Def as $ZodBase64Def, index_d_$ZodBase64Internals as $ZodBase64Internals, index_d_$ZodBase64Params as $ZodBase64Params, index_d_$ZodBase64URLDef as $ZodBase64URLDef, index_d_$ZodBase64URLInternals as $ZodBase64URLInternals, index_d_$ZodBase64URLParams as $ZodBase64URLParams, index_d_$ZodBigIntDef as $ZodBigIntDef, index_d_$ZodBigIntFormatDef as $ZodBigIntFormatDef, index_d_$ZodBigIntFormatInternals as $ZodBigIntFormatInternals, index_d_$ZodBigIntFormatParams as $ZodBigIntFormatParams, index_d_$ZodBigIntFormats as $ZodBigIntFormats, index_d_$ZodBigIntInternals as $ZodBigIntInternals, index_d_$ZodBigIntParams as $ZodBigIntParams, index_d_$ZodBooleanDef as $ZodBooleanDef, index_d_$ZodBooleanInternals as $ZodBooleanInternals, index_d_$ZodBooleanParams as $ZodBooleanParams, index_d_$ZodBranded as $ZodBranded, index_d_$ZodCIDRv4Def as $ZodCIDRv4Def, index_d_$ZodCIDRv4Internals as $ZodCIDRv4Internals, index_d_$ZodCIDRv4Params as $ZodCIDRv4Params, index_d_$ZodCIDRv6Def as $ZodCIDRv6Def, index_d_$ZodCIDRv6Internals as $ZodCIDRv6Internals, index_d_$ZodCIDRv6Params as $ZodCIDRv6Params, index_d_$ZodCUID2Def as $ZodCUID2Def, index_d_$ZodCUID2Internals as $ZodCUID2Internals, index_d_$ZodCUID2Params as $ZodCUID2Params, index_d_$ZodCUIDDef as $ZodCUIDDef, index_d_$ZodCUIDInternals as $ZodCUIDInternals, index_d_$ZodCUIDParams as $ZodCUIDParams, index_d_$ZodCatchCtx as $ZodCatchCtx, index_d_$ZodCatchDef as $ZodCatchDef, index_d_$ZodCatchInternals as $ZodCatchInternals, index_d_$ZodCatchParams as $ZodCatchParams, index_d_$ZodCheckBase64Params as $ZodCheckBase64Params, index_d_$ZodCheckBase64URLParams as $ZodCheckBase64URLParams, index_d_$ZodCheckBigIntFormatDef as $ZodCheckBigIntFormatDef, index_d_$ZodCheckBigIntFormatInternals as $ZodCheckBigIntFormatInternals, index_d_$ZodCheckBigIntFormatParams as $ZodCheckBigIntFormatParams, index_d_$ZodCheckCIDRv4Params as $ZodCheckCIDRv4Params, index_d_$ZodCheckCIDRv6Params as $ZodCheckCIDRv6Params, index_d_$ZodCheckCUID2Params as $ZodCheckCUID2Params, index_d_$ZodCheckCUIDParams as $ZodCheckCUIDParams, index_d_$ZodCheckDef as $ZodCheckDef, index_d_$ZodCheckE164Params as $ZodCheckE164Params, index_d_$ZodCheckEmailParams as $ZodCheckEmailParams, index_d_$ZodCheckEmojiParams as $ZodCheckEmojiParams, index_d_$ZodCheckEndsWithDef as $ZodCheckEndsWithDef, index_d_$ZodCheckEndsWithInternals as $ZodCheckEndsWithInternals, index_d_$ZodCheckEndsWithParams as $ZodCheckEndsWithParams, index_d_$ZodCheckGUIDParams as $ZodCheckGUIDParams, index_d_$ZodCheckGreaterThanDef as $ZodCheckGreaterThanDef, index_d_$ZodCheckGreaterThanInternals as $ZodCheckGreaterThanInternals, index_d_$ZodCheckGreaterThanParams as $ZodCheckGreaterThanParams, index_d_$ZodCheckIPv4Params as $ZodCheckIPv4Params, index_d_$ZodCheckIPv6Params as $ZodCheckIPv6Params, index_d_$ZodCheckISODateParams as $ZodCheckISODateParams, index_d_$ZodCheckISODateTimeParams as $ZodCheckISODateTimeParams, index_d_$ZodCheckISODurationParams as $ZodCheckISODurationParams, index_d_$ZodCheckISOTimeParams as $ZodCheckISOTimeParams, index_d_$ZodCheckIncludesDef as $ZodCheckIncludesDef, index_d_$ZodCheckIncludesInternals as $ZodCheckIncludesInternals, index_d_$ZodCheckIncludesParams as $ZodCheckIncludesParams, index_d_$ZodCheckInternals as $ZodCheckInternals, index_d_$ZodCheckJWTParams as $ZodCheckJWTParams, index_d_$ZodCheckKSUIDParams as $ZodCheckKSUIDParams, index_d_$ZodCheckLengthEqualsDef as $ZodCheckLengthEqualsDef, index_d_$ZodCheckLengthEqualsInternals as $ZodCheckLengthEqualsInternals, index_d_$ZodCheckLengthEqualsParams as $ZodCheckLengthEqualsParams, index_d_$ZodCheckLessThanDef as $ZodCheckLessThanDef, index_d_$ZodCheckLessThanInternals as $ZodCheckLessThanInternals, index_d_$ZodCheckLessThanParams as $ZodCheckLessThanParams, index_d_$ZodCheckLowerCaseDef as $ZodCheckLowerCaseDef, index_d_$ZodCheckLowerCaseInternals as $ZodCheckLowerCaseInternals, index_d_$ZodCheckLowerCaseParams as $ZodCheckLowerCaseParams, index_d_$ZodCheckMACParams as $ZodCheckMACParams, index_d_$ZodCheckMaxLengthDef as $ZodCheckMaxLengthDef, index_d_$ZodCheckMaxLengthInternals as $ZodCheckMaxLengthInternals, index_d_$ZodCheckMaxLengthParams as $ZodCheckMaxLengthParams, index_d_$ZodCheckMaxSizeDef as $ZodCheckMaxSizeDef, index_d_$ZodCheckMaxSizeInternals as $ZodCheckMaxSizeInternals, index_d_$ZodCheckMaxSizeParams as $ZodCheckMaxSizeParams, index_d_$ZodCheckMimeTypeDef as $ZodCheckMimeTypeDef, index_d_$ZodCheckMimeTypeInternals as $ZodCheckMimeTypeInternals, index_d_$ZodCheckMimeTypeParams as $ZodCheckMimeTypeParams, index_d_$ZodCheckMinLengthDef as $ZodCheckMinLengthDef, index_d_$ZodCheckMinLengthInternals as $ZodCheckMinLengthInternals, index_d_$ZodCheckMinLengthParams as $ZodCheckMinLengthParams, index_d_$ZodCheckMinSizeDef as $ZodCheckMinSizeDef, index_d_$ZodCheckMinSizeInternals as $ZodCheckMinSizeInternals, index_d_$ZodCheckMinSizeParams as $ZodCheckMinSizeParams, index_d_$ZodCheckMultipleOfDef as $ZodCheckMultipleOfDef, index_d_$ZodCheckMultipleOfInternals as $ZodCheckMultipleOfInternals, index_d_$ZodCheckMultipleOfParams as $ZodCheckMultipleOfParams, index_d_$ZodCheckNanoIDParams as $ZodCheckNanoIDParams, index_d_$ZodCheckNumberFormatDef as $ZodCheckNumberFormatDef, index_d_$ZodCheckNumberFormatInternals as $ZodCheckNumberFormatInternals, index_d_$ZodCheckNumberFormatParams as $ZodCheckNumberFormatParams, index_d_$ZodCheckOverwriteDef as $ZodCheckOverwriteDef, index_d_$ZodCheckOverwriteInternals as $ZodCheckOverwriteInternals, index_d_$ZodCheckPropertyDef as $ZodCheckPropertyDef, index_d_$ZodCheckPropertyInternals as $ZodCheckPropertyInternals, index_d_$ZodCheckPropertyParams as $ZodCheckPropertyParams, index_d_$ZodCheckRegexDef as $ZodCheckRegexDef, index_d_$ZodCheckRegexInternals as $ZodCheckRegexInternals, index_d_$ZodCheckRegexParams as $ZodCheckRegexParams, index_d_$ZodCheckSizeEqualsDef as $ZodCheckSizeEqualsDef, index_d_$ZodCheckSizeEqualsInternals as $ZodCheckSizeEqualsInternals, index_d_$ZodCheckSizeEqualsParams as $ZodCheckSizeEqualsParams, index_d_$ZodCheckStartsWithDef as $ZodCheckStartsWithDef, index_d_$ZodCheckStartsWithInternals as $ZodCheckStartsWithInternals, index_d_$ZodCheckStartsWithParams as $ZodCheckStartsWithParams, index_d_$ZodCheckStringFormatDef as $ZodCheckStringFormatDef, index_d_$ZodCheckStringFormatInternals as $ZodCheckStringFormatInternals, index_d_$ZodCheckStringFormatParams as $ZodCheckStringFormatParams, index_d_$ZodCheckULIDParams as $ZodCheckULIDParams, index_d_$ZodCheckURLParams as $ZodCheckURLParams, index_d_$ZodCheckUUIDParams as $ZodCheckUUIDParams, index_d_$ZodCheckUUIDv4Params as $ZodCheckUUIDv4Params, index_d_$ZodCheckUUIDv6Params as $ZodCheckUUIDv6Params, index_d_$ZodCheckUUIDv7Params as $ZodCheckUUIDv7Params, index_d_$ZodCheckUpperCaseDef as $ZodCheckUpperCaseDef, index_d_$ZodCheckUpperCaseInternals as $ZodCheckUpperCaseInternals, index_d_$ZodCheckUpperCaseParams as $ZodCheckUpperCaseParams, index_d_$ZodCheckXIDParams as $ZodCheckXIDParams, index_d_$ZodChecks as $ZodChecks, index_d_$ZodCodecDef as $ZodCodecDef, index_d_$ZodCodecInternals as $ZodCodecInternals, index_d_$ZodConfig as $ZodConfig, index_d_$ZodCustomDef as $ZodCustomDef, index_d_$ZodCustomInternals as $ZodCustomInternals, index_d_$ZodCustomParams as $ZodCustomParams, index_d_$ZodCustomStringFormatDef as $ZodCustomStringFormatDef, index_d_$ZodCustomStringFormatInternals as $ZodCustomStringFormatInternals, index_d_$ZodDateDef as $ZodDateDef, index_d_$ZodDateInternals as $ZodDateInternals, index_d_$ZodDateParams as $ZodDateParams, index_d_$ZodDefaultDef as $ZodDefaultDef, index_d_$ZodDefaultInternals as $ZodDefaultInternals, index_d_$ZodDefaultParams as $ZodDefaultParams, index_d_$ZodDiscriminatedUnionDef as $ZodDiscriminatedUnionDef, index_d_$ZodDiscriminatedUnionInternals as $ZodDiscriminatedUnionInternals, index_d_$ZodDiscriminatedUnionParams as $ZodDiscriminatedUnionParams, index_d_$ZodE164Def as $ZodE164Def, index_d_$ZodE164Internals as $ZodE164Internals, index_d_$ZodE164Params as $ZodE164Params, index_d_$ZodEmailDef as $ZodEmailDef, index_d_$ZodEmailInternals as $ZodEmailInternals, index_d_$ZodEmailParams as $ZodEmailParams, index_d_$ZodEmojiDef as $ZodEmojiDef, index_d_$ZodEmojiInternals as $ZodEmojiInternals, index_d_$ZodEmojiParams as $ZodEmojiParams, index_d_$ZodEnumDef as $ZodEnumDef, index_d_$ZodEnumInternals as $ZodEnumInternals, index_d_$ZodEnumParams as $ZodEnumParams, index_d_$ZodErrorClass as $ZodErrorClass, index_d_$ZodErrorMap as $ZodErrorMap, index_d_$ZodErrorTree as $ZodErrorTree, index_d_$ZodExactOptionalDef as $ZodExactOptionalDef, index_d_$ZodExactOptionalInternals as $ZodExactOptionalInternals, index_d_$ZodFileDef as $ZodFileDef, index_d_$ZodFileInternals as $ZodFileInternals, index_d_$ZodFileParams as $ZodFileParams, index_d_$ZodFlattenedError as $ZodFlattenedError, index_d_$ZodFormattedError as $ZodFormattedError, index_d_$ZodFunctionArgs as $ZodFunctionArgs, index_d_$ZodFunctionDef as $ZodFunctionDef, index_d_$ZodFunctionIn as $ZodFunctionIn, index_d_$ZodFunctionInternals as $ZodFunctionInternals, index_d_$ZodFunctionOut as $ZodFunctionOut, index_d_$ZodFunctionParams as $ZodFunctionParams, index_d_$ZodGUIDDef as $ZodGUIDDef, index_d_$ZodGUIDInternals as $ZodGUIDInternals, index_d_$ZodGUIDParams as $ZodGUIDParams, index_d_$ZodIPv4Def as $ZodIPv4Def, index_d_$ZodIPv4Internals as $ZodIPv4Internals, index_d_$ZodIPv4Params as $ZodIPv4Params, index_d_$ZodIPv6Def as $ZodIPv6Def, index_d_$ZodIPv6Internals as $ZodIPv6Internals, index_d_$ZodIPv6Params as $ZodIPv6Params, index_d_$ZodISODateDef as $ZodISODateDef, index_d_$ZodISODateInternals as $ZodISODateInternals, index_d_$ZodISODateParams as $ZodISODateParams, index_d_$ZodISODateTimeDef as $ZodISODateTimeDef, index_d_$ZodISODateTimeInternals as $ZodISODateTimeInternals, index_d_$ZodISODateTimeParams as $ZodISODateTimeParams, index_d_$ZodISODurationDef as $ZodISODurationDef, index_d_$ZodISODurationInternals as $ZodISODurationInternals, index_d_$ZodISODurationParams as $ZodISODurationParams, index_d_$ZodISOTimeDef as $ZodISOTimeDef, index_d_$ZodISOTimeInternals as $ZodISOTimeInternals, index_d_$ZodISOTimeParams as $ZodISOTimeParams, index_d_$ZodInternalIssue as $ZodInternalIssue, index_d_$ZodIntersectionDef as $ZodIntersectionDef, index_d_$ZodIntersectionInternals as $ZodIntersectionInternals, index_d_$ZodIntersectionParams as $ZodIntersectionParams, index_d_$ZodInvalidTypeExpected as $ZodInvalidTypeExpected, index_d_$ZodIssue as $ZodIssue, index_d_$ZodIssueBase as $ZodIssueBase, index_d_$ZodIssueCode as $ZodIssueCode, index_d_$ZodIssueCustom as $ZodIssueCustom, index_d_$ZodIssueInvalidElement as $ZodIssueInvalidElement, index_d_$ZodIssueInvalidKey as $ZodIssueInvalidKey, index_d_$ZodIssueInvalidStringFormat as $ZodIssueInvalidStringFormat, index_d_$ZodIssueInvalidType as $ZodIssueInvalidType, index_d_$ZodIssueInvalidUnion as $ZodIssueInvalidUnion, index_d_$ZodIssueInvalidValue as $ZodIssueInvalidValue, index_d_$ZodIssueNotMultipleOf as $ZodIssueNotMultipleOf, index_d_$ZodIssueStringCommonFormats as $ZodIssueStringCommonFormats, index_d_$ZodIssueStringEndsWith as $ZodIssueStringEndsWith, index_d_$ZodIssueStringIncludes as $ZodIssueStringIncludes, index_d_$ZodIssueStringInvalidJWT as $ZodIssueStringInvalidJWT, index_d_$ZodIssueStringInvalidRegex as $ZodIssueStringInvalidRegex, index_d_$ZodIssueStringStartsWith as $ZodIssueStringStartsWith, index_d_$ZodIssueTooBig as $ZodIssueTooBig, index_d_$ZodIssueTooSmall as $ZodIssueTooSmall, index_d_$ZodIssueUnrecognizedKeys as $ZodIssueUnrecognizedKeys, index_d_$ZodJWTDef as $ZodJWTDef, index_d_$ZodJWTInternals as $ZodJWTInternals, index_d_$ZodJWTParams as $ZodJWTParams, index_d_$ZodKSUIDDef as $ZodKSUIDDef, index_d_$ZodKSUIDInternals as $ZodKSUIDInternals, index_d_$ZodKSUIDParams as $ZodKSUIDParams, index_d_$ZodLazyDef as $ZodLazyDef, index_d_$ZodLazyInternals as $ZodLazyInternals, index_d_$ZodLazyParams as $ZodLazyParams, index_d_$ZodLiteralDef as $ZodLiteralDef, index_d_$ZodLiteralInternals as $ZodLiteralInternals, index_d_$ZodLiteralParams as $ZodLiteralParams, index_d_$ZodLooseShape as $ZodLooseShape, index_d_$ZodMACDef as $ZodMACDef, index_d_$ZodMACInternals as $ZodMACInternals, index_d_$ZodMACParams as $ZodMACParams, index_d_$ZodMapDef as $ZodMapDef, index_d_$ZodMapInternals as $ZodMapInternals, index_d_$ZodMapParams as $ZodMapParams, index_d_$ZodNaNDef as $ZodNaNDef, index_d_$ZodNaNInternals as $ZodNaNInternals, index_d_$ZodNaNParams as $ZodNaNParams, index_d_$ZodNanoIDDef as $ZodNanoIDDef, index_d_$ZodNanoIDInternals as $ZodNanoIDInternals, index_d_$ZodNanoIDParams as $ZodNanoIDParams, index_d_$ZodNarrow as $ZodNarrow, index_d_$ZodNeverDef as $ZodNeverDef, index_d_$ZodNeverInternals as $ZodNeverInternals, index_d_$ZodNeverParams as $ZodNeverParams, index_d_$ZodNonOptionalDef as $ZodNonOptionalDef, index_d_$ZodNonOptionalInternals as $ZodNonOptionalInternals, index_d_$ZodNonOptionalParams as $ZodNonOptionalParams, index_d_$ZodNullDef as $ZodNullDef, index_d_$ZodNullInternals as $ZodNullInternals, index_d_$ZodNullParams as $ZodNullParams, index_d_$ZodNullableDef as $ZodNullableDef, index_d_$ZodNullableInternals as $ZodNullableInternals, index_d_$ZodNullableParams as $ZodNullableParams, index_d_$ZodNumberDef as $ZodNumberDef, index_d_$ZodNumberFormatDef as $ZodNumberFormatDef, index_d_$ZodNumberFormatInternals as $ZodNumberFormatInternals, index_d_$ZodNumberFormatParams as $ZodNumberFormatParams, index_d_$ZodNumberFormats as $ZodNumberFormats, index_d_$ZodNumberInternals as $ZodNumberInternals, index_d_$ZodNumberParams as $ZodNumberParams, index_d_$ZodObjectConfig as $ZodObjectConfig, index_d_$ZodObjectDef as $ZodObjectDef, index_d_$ZodObjectInternals as $ZodObjectInternals, index_d_$ZodObjectParams as $ZodObjectParams, index_d_$ZodOptionalDef as $ZodOptionalDef, index_d_$ZodOptionalInternals as $ZodOptionalInternals, index_d_$ZodOptionalParams as $ZodOptionalParams, index_d_$ZodPipeDef as $ZodPipeDef, index_d_$ZodPipeInternals as $ZodPipeInternals, index_d_$ZodPipeParams as $ZodPipeParams, index_d_$ZodPrefaultDef as $ZodPrefaultDef, index_d_$ZodPrefaultInternals as $ZodPrefaultInternals, index_d_$ZodPromiseDef as $ZodPromiseDef, index_d_$ZodPromiseInternals as $ZodPromiseInternals, index_d_$ZodPromiseParams as $ZodPromiseParams, index_d_$ZodRawIssue as $ZodRawIssue, index_d_$ZodReadonlyDef as $ZodReadonlyDef, index_d_$ZodReadonlyInternals as $ZodReadonlyInternals, index_d_$ZodReadonlyParams as $ZodReadonlyParams, index_d_$ZodRecordDef as $ZodRecordDef, index_d_$ZodRecordInternals as $ZodRecordInternals, index_d_$ZodRecordKey as $ZodRecordKey, index_d_$ZodRecordParams as $ZodRecordParams, index_d_$ZodSetDef as $ZodSetDef, index_d_$ZodSetInternals as $ZodSetInternals, index_d_$ZodSetParams as $ZodSetParams, index_d_$ZodShape as $ZodShape, index_d_$ZodStandardSchema as $ZodStandardSchema, index_d_$ZodStringBoolParams as $ZodStringBoolParams, index_d_$ZodStringDef as $ZodStringDef, index_d_$ZodStringFormatChecks as $ZodStringFormatChecks, index_d_$ZodStringFormatDef as $ZodStringFormatDef, index_d_$ZodStringFormatInternals as $ZodStringFormatInternals, index_d_$ZodStringFormatIssues as $ZodStringFormatIssues, index_d_$ZodStringFormatParams as $ZodStringFormatParams, index_d_$ZodStringFormatTypes as $ZodStringFormatTypes, index_d_$ZodStringFormats as $ZodStringFormats, index_d_$ZodStringInternals as $ZodStringInternals, index_d_$ZodStringParams as $ZodStringParams, index_d_$ZodSuccessDef as $ZodSuccessDef, index_d_$ZodSuccessInternals as $ZodSuccessInternals, index_d_$ZodSuccessParams as $ZodSuccessParams, index_d_$ZodSuperRefineIssue as $ZodSuperRefineIssue, index_d_$ZodSymbolDef as $ZodSymbolDef, index_d_$ZodSymbolInternals as $ZodSymbolInternals, index_d_$ZodSymbolParams as $ZodSymbolParams, index_d_$ZodTemplateLiteralDef as $ZodTemplateLiteralDef, index_d_$ZodTemplateLiteralInternals as $ZodTemplateLiteralInternals, index_d_$ZodTemplateLiteralParams as $ZodTemplateLiteralParams, index_d_$ZodTemplateLiteralPart as $ZodTemplateLiteralPart, index_d_$ZodTransformDef as $ZodTransformDef, index_d_$ZodTransformInternals as $ZodTransformInternals, index_d_$ZodTransformParams as $ZodTransformParams, index_d_$ZodTupleDef as $ZodTupleDef, index_d_$ZodTupleInternals as $ZodTupleInternals, index_d_$ZodTupleParams as $ZodTupleParams, index_d_$ZodTypeDef as $ZodTypeDef, index_d_$ZodTypeDiscriminable as $ZodTypeDiscriminable, index_d_$ZodTypeDiscriminableInternals as $ZodTypeDiscriminableInternals, index_d_$ZodTypeInternals as $ZodTypeInternals, index_d_$ZodTypes as $ZodTypes, index_d_$ZodULIDDef as $ZodULIDDef, index_d_$ZodULIDInternals as $ZodULIDInternals, index_d_$ZodULIDParams as $ZodULIDParams, index_d_$ZodURLDef as $ZodURLDef, index_d_$ZodURLInternals as $ZodURLInternals, index_d_$ZodURLParams as $ZodURLParams, index_d_$ZodUUIDDef as $ZodUUIDDef, index_d_$ZodUUIDInternals as $ZodUUIDInternals, index_d_$ZodUUIDParams as $ZodUUIDParams, index_d_$ZodUUIDv4Params as $ZodUUIDv4Params, index_d_$ZodUUIDv6Params as $ZodUUIDv6Params, index_d_$ZodUUIDv7Params as $ZodUUIDv7Params, index_d_$ZodUndefinedDef as $ZodUndefinedDef, index_d_$ZodUndefinedInternals as $ZodUndefinedInternals, index_d_$ZodUndefinedParams as $ZodUndefinedParams, index_d_$ZodUnionDef as $ZodUnionDef, index_d_$ZodUnionInternals as $ZodUnionInternals, index_d_$ZodUnionParams as $ZodUnionParams, index_d_$ZodUnknownDef as $ZodUnknownDef, index_d_$ZodUnknownInternals as $ZodUnknownInternals, index_d_$ZodUnknownParams as $ZodUnknownParams, index_d_$ZodVoidDef as $ZodVoidDef, index_d_$ZodVoidInternals as $ZodVoidInternals, index_d_$ZodVoidParams as $ZodVoidParams, index_d_$ZodXIDDef as $ZodXIDDef, index_d_$ZodXIDInternals as $ZodXIDInternals, index_d_$ZodXIDParams as $ZodXIDParams, index_d_$ZodXorInternals as $ZodXorInternals, index_d_$ZodXorParams as $ZodXorParams, index_d_$brand as $brand, index_d_$catchall as $catchall, index_d_$input as $input, index_d_$loose as $loose, index_d_$output as $output, index_d_$partial as $partial, index_d_$replace as $replace, index_d_$strict as $strict, index_d_$strip as $strip, index_d_CheckFn as CheckFn, index_d_CheckParams as CheckParams, index_d_CheckStringFormatParams as CheckStringFormatParams, index_d_CheckTypeParams as CheckTypeParams, index_d_ConcatenateTupleOfStrings as ConcatenateTupleOfStrings, index_d_ConvertPartsToStringTuple as ConvertPartsToStringTuple, index_d_File as File, index_d_GlobalMeta as GlobalMeta, index_d_JSONSchemaGeneratorParams as JSONSchemaGeneratorParams, index_d_JSONSchemaMeta as JSONSchemaMeta, index_d_Params as Params, index_d_ParseContext as ParseContext, index_d_ParseContextInternal as ParseContextInternal, index_d_ParsePayload as ParsePayload, index_d_ProcessParams as ProcessParams, index_d_Processor as Processor, index_d_RegistryToJSONSchemaParams as RegistryToJSONSchemaParams, index_d_Seen as Seen, index_d_SomeType as SomeType, index_d_StringFormatParams as StringFormatParams, index_d_ToJSONSchemaContext as ToJSONSchemaContext, index_d_ToJSONSchemaParams as ToJSONSchemaParams, index_d_ToTemplateLiteral as ToTemplateLiteral, index_d_TypeParams as TypeParams, index_d_ZodStandardJSONSchemaPayload as ZodStandardJSONSchemaPayload, ZodStandardSchemaWithJSON$1 as ZodStandardSchemaWithJSON, index_d__$ZodType as _$ZodType, index_d__$ZodTypeInternals as _$ZodTypeInternals, output as infer, index_d_input as input, index_d_output as output };
}

/** @deprecated Use `z.core.$ZodIssue` from `@zod/core` instead, especially if you are building a library on top of Zod. */
type ZodIssue = $ZodIssue;
/** An Error-like class used to store Zod validation issues.  */
interface ZodError<T = unknown> extends $ZodError<T> {
    /** @deprecated Use the `z.treeifyError(err)` function instead. */
    format(): $ZodFormattedError<T>;
    format<U>(mapper: (issue: $ZodIssue) => U): $ZodFormattedError<T, U>;
    /** @deprecated Use the `z.treeifyError(err)` function instead. */
    flatten(): $ZodFlattenedError<T>;
    flatten<U>(mapper: (issue: $ZodIssue) => U): $ZodFlattenedError<T, U>;
    /** @deprecated Push directly to `.issues` instead. */
    addIssue(issue: $ZodIssue): void;
    /** @deprecated Push directly to `.issues` instead. */
    addIssues(issues: $ZodIssue[]): void;
    /** @deprecated Check `err.issues.length === 0` instead. */
    isEmpty: boolean;
}
declare const ZodError: $constructor<ZodError>;
declare const ZodRealError: $constructor<ZodError>;

/** @deprecated Use `z.core.$ZodRawIssue` instead. */
type IssueData = $ZodRawIssue;

type ZodSafeParseResult<T> = ZodSafeParseSuccess<T> | ZodSafeParseError<T>;
type ZodSafeParseSuccess<T> = {
    success: true;
    data: T;
    error?: never;
};
type ZodSafeParseError<T> = {
    success: false;
    data?: never;
    error: ZodError<T>;
};
declare const parse: <T extends $ZodType>(schema: T, value: unknown, _ctx?: ParseContext<$ZodIssue>, _params?: {
    callee?: AnyFunc;
    Err?: $ZodErrorClass;
}) => output<T>;
declare const parseAsync: <T extends $ZodType>(schema: T, value: unknown, _ctx?: ParseContext<$ZodIssue>, _params?: {
    callee?: AnyFunc;
    Err?: $ZodErrorClass;
}) => Promise<output<T>>;
declare const safeParse: <T extends $ZodType>(schema: T, value: unknown, _ctx?: ParseContext<$ZodIssue>) => ZodSafeParseResult<output<T>>;
declare const safeParseAsync: <T extends $ZodType>(schema: T, value: unknown, _ctx?: ParseContext<$ZodIssue>) => Promise<ZodSafeParseResult<output<T>>>;
declare const encode: <T extends $ZodType>(schema: T, value: output<T>, _ctx?: ParseContext<$ZodIssue>) => input<T>;
declare const decode: <T extends $ZodType>(schema: T, value: input<T>, _ctx?: ParseContext<$ZodIssue>) => output<T>;
declare const encodeAsync: <T extends $ZodType>(schema: T, value: output<T>, _ctx?: ParseContext<$ZodIssue>) => Promise<input<T>>;
declare const decodeAsync: <T extends $ZodType>(schema: T, value: input<T>, _ctx?: ParseContext<$ZodIssue>) => Promise<output<T>>;
declare const safeEncode: <T extends $ZodType>(schema: T, value: output<T>, _ctx?: ParseContext<$ZodIssue>) => ZodSafeParseResult<input<T>>;
declare const safeDecode: <T extends $ZodType>(schema: T, value: input<T>, _ctx?: ParseContext<$ZodIssue>) => ZodSafeParseResult<output<T>>;
declare const safeEncodeAsync: <T extends $ZodType>(schema: T, value: output<T>, _ctx?: ParseContext<$ZodIssue>) => Promise<ZodSafeParseResult<input<T>>>;
declare const safeDecodeAsync: <T extends $ZodType>(schema: T, value: input<T>, _ctx?: ParseContext<$ZodIssue>) => Promise<ZodSafeParseResult<output<T>>>;

type ZodStandardSchemaWithJSON<T> = StandardSchemaWithJSONProps<input<T>, output<T>>;
interface _ZodType<out Internals extends $ZodTypeInternals = $ZodTypeInternals> extends ZodType<any, any, Internals> {
}
interface ZodType<out Output = unknown, out Input = unknown, out Internals extends $ZodTypeInternals<Output, Input> = $ZodTypeInternals<Output, Input>> extends $ZodType<Output, Input, Internals> {
    def: Internals["def"];
    type: Internals["def"]["type"];
    /** @deprecated Use `.def` instead. */
    _def: Internals["def"];
    /** @deprecated Use `z.output<typeof schema>` instead. */
    _output: Internals["output"];
    /** @deprecated Use `z.input<typeof schema>` instead. */
    _input: Internals["input"];
    "~standard": ZodStandardSchemaWithJSON<this>;
    /** Converts this schema to a JSON Schema representation. */
    toJSONSchema(params?: ToJSONSchemaParams): ZodStandardJSONSchemaPayload<this>;
    check(...checks: (CheckFn<output<this>> | $ZodCheck<output<this>>)[]): this;
    with(...checks: (CheckFn<output<this>> | $ZodCheck<output<this>>)[]): this;
    clone(def?: Internals["def"], params?: {
        parent: boolean;
    }): this;
    register<R extends $ZodRegistry>(registry: R, ...meta: this extends R["_schema"] ? undefined extends R["_meta"] ? [$replace<R["_meta"], this>?] : [$replace<R["_meta"], this>] : ["Incompatible schema"]): this;
    brand<T extends PropertyKey = PropertyKey, Dir extends "in" | "out" | "inout" = "out">(value?: T): PropertyKey extends T ? this : $ZodBranded<this, T, Dir>;
    parse(data: unknown, params?: ParseContext<$ZodIssue>): output<this>;
    safeParse(data: unknown, params?: ParseContext<$ZodIssue>): ZodSafeParseResult<output<this>>;
    parseAsync(data: unknown, params?: ParseContext<$ZodIssue>): Promise<output<this>>;
    safeParseAsync(data: unknown, params?: ParseContext<$ZodIssue>): Promise<ZodSafeParseResult<output<this>>>;
    spa: (data: unknown, params?: ParseContext<$ZodIssue>) => Promise<ZodSafeParseResult<output<this>>>;
    encode(data: output<this>, params?: ParseContext<$ZodIssue>): input<this>;
    decode(data: input<this>, params?: ParseContext<$ZodIssue>): output<this>;
    encodeAsync(data: output<this>, params?: ParseContext<$ZodIssue>): Promise<input<this>>;
    decodeAsync(data: input<this>, params?: ParseContext<$ZodIssue>): Promise<output<this>>;
    safeEncode(data: output<this>, params?: ParseContext<$ZodIssue>): ZodSafeParseResult<input<this>>;
    safeDecode(data: input<this>, params?: ParseContext<$ZodIssue>): ZodSafeParseResult<output<this>>;
    safeEncodeAsync(data: output<this>, params?: ParseContext<$ZodIssue>): Promise<ZodSafeParseResult<input<this>>>;
    safeDecodeAsync(data: input<this>, params?: ParseContext<$ZodIssue>): Promise<ZodSafeParseResult<output<this>>>;
    refine<Ch extends (arg: output<this>) => unknown | Promise<unknown>>(check: Ch, params?: string | $ZodCustomParams): Ch extends (arg: any) => arg is infer R ? this & ZodType<R, input<this>> : this;
    superRefine(refinement: (arg: output<this>, ctx: $RefinementCtx<output<this>>) => void | Promise<void>): this;
    overwrite(fn: (x: output<this>) => output<this>): this;
    optional(): ZodOptional<this>;
    exactOptional(): ZodExactOptional<this>;
    nonoptional(params?: string | $ZodNonOptionalParams): ZodNonOptional<this>;
    nullable(): ZodNullable<this>;
    nullish(): ZodOptional<ZodNullable<this>>;
    default(def: NoUndefined<output<this>>): ZodDefault<this>;
    default(def: () => NoUndefined<output<this>>): ZodDefault<this>;
    prefault(def: () => input<this>): ZodPrefault<this>;
    prefault(def: input<this>): ZodPrefault<this>;
    array(): ZodArray<this>;
    or<T extends SomeType>(option: T): ZodUnion<[this, T]>;
    and<T extends SomeType>(incoming: T): ZodIntersection<this, T>;
    transform<NewOut>(transform: (arg: output<this>, ctx: $RefinementCtx<output<this>>) => NewOut | Promise<NewOut>): ZodPipe<this, ZodTransform<Awaited<NewOut>, output<this>>>;
    catch(def: output<this>): ZodCatch<this>;
    catch(def: (ctx: $ZodCatchCtx) => output<this>): ZodCatch<this>;
    pipe<T extends $ZodType<any, output<this>>>(target: T | $ZodType<any, output<this>>): ZodPipe<this, T>;
    readonly(): ZodReadonly<this>;
    /** Returns a new instance that has been registered in `z.globalRegistry` with the specified description */
    describe(description: string): this;
    description?: string;
    /** Returns the metadata associated with this instance in `z.globalRegistry` */
    meta(): $replace<GlobalMeta, this> | undefined;
    /** Returns a new instance that has been registered in `z.globalRegistry` with the specified metadata */
    meta(data: $replace<GlobalMeta, this>): this;
    /** @deprecated Try safe-parsing `undefined` (this is what `isOptional` does internally):
     *
     * ```ts
     * const schema = z.string().optional();
     * const isOptional = schema.safeParse(undefined).success; // true
     * ```
     */
    isOptional(): boolean;
    /**
     * @deprecated Try safe-parsing `null` (this is what `isNullable` does internally):
     *
     * ```ts
     * const schema = z.string().nullable();
     * const isNullable = schema.safeParse(null).success; // true
     * ```
     */
    isNullable(): boolean;
    apply<T>(fn: (schema: this) => T): T;
}
declare const ZodType: $constructor<ZodType>;
interface _ZodString<T extends $ZodStringInternals<unknown> = $ZodStringInternals<unknown>> extends _ZodType<T> {
    format: string | null;
    minLength: number | null;
    maxLength: number | null;
    regex(regex: RegExp, params?: string | $ZodCheckRegexParams): this;
    includes(value: string, params?: string | $ZodCheckIncludesParams): this;
    startsWith(value: string, params?: string | $ZodCheckStartsWithParams): this;
    endsWith(value: string, params?: string | $ZodCheckEndsWithParams): this;
    min(minLength: number, params?: string | $ZodCheckMinLengthParams): this;
    max(maxLength: number, params?: string | $ZodCheckMaxLengthParams): this;
    length(len: number, params?: string | $ZodCheckLengthEqualsParams): this;
    nonempty(params?: string | $ZodCheckMinLengthParams): this;
    lowercase(params?: string | $ZodCheckLowerCaseParams): this;
    uppercase(params?: string | $ZodCheckUpperCaseParams): this;
    trim(): this;
    normalize(form?: "NFC" | "NFD" | "NFKC" | "NFKD" | (string & {})): this;
    toLowerCase(): this;
    toUpperCase(): this;
    slugify(): this;
}
/** @internal */
declare const _ZodString: $constructor<_ZodString>;
interface ZodString extends _ZodString<$ZodStringInternals<string>> {
    /** @deprecated Use `z.email()` instead. */
    email(params?: string | $ZodCheckEmailParams): this;
    /** @deprecated Use `z.url()` instead. */
    url(params?: string | $ZodCheckURLParams): this;
    /** @deprecated Use `z.jwt()` instead. */
    jwt(params?: string | $ZodCheckJWTParams): this;
    /** @deprecated Use `z.emoji()` instead. */
    emoji(params?: string | $ZodCheckEmojiParams): this;
    /** @deprecated Use `z.guid()` instead. */
    guid(params?: string | $ZodCheckGUIDParams): this;
    /** @deprecated Use `z.uuid()` instead. */
    uuid(params?: string | $ZodCheckUUIDParams): this;
    /** @deprecated Use `z.uuid()` instead. */
    uuidv4(params?: string | $ZodCheckUUIDParams): this;
    /** @deprecated Use `z.uuid()` instead. */
    uuidv6(params?: string | $ZodCheckUUIDParams): this;
    /** @deprecated Use `z.uuid()` instead. */
    uuidv7(params?: string | $ZodCheckUUIDParams): this;
    /** @deprecated Use `z.nanoid()` instead. */
    nanoid(params?: string | $ZodCheckNanoIDParams): this;
    /** @deprecated Use `z.guid()` instead. */
    guid(params?: string | $ZodCheckGUIDParams): this;
    /** @deprecated Use `z.cuid()` instead. */
    cuid(params?: string | $ZodCheckCUIDParams): this;
    /** @deprecated Use `z.cuid2()` instead. */
    cuid2(params?: string | $ZodCheckCUID2Params): this;
    /** @deprecated Use `z.ulid()` instead. */
    ulid(params?: string | $ZodCheckULIDParams): this;
    /** @deprecated Use `z.base64()` instead. */
    base64(params?: string | $ZodCheckBase64Params): this;
    /** @deprecated Use `z.base64url()` instead. */
    base64url(params?: string | $ZodCheckBase64URLParams): this;
    /** @deprecated Use `z.xid()` instead. */
    xid(params?: string | $ZodCheckXIDParams): this;
    /** @deprecated Use `z.ksuid()` instead. */
    ksuid(params?: string | $ZodCheckKSUIDParams): this;
    /** @deprecated Use `z.ipv4()` instead. */
    ipv4(params?: string | $ZodCheckIPv4Params): this;
    /** @deprecated Use `z.ipv6()` instead. */
    ipv6(params?: string | $ZodCheckIPv6Params): this;
    /** @deprecated Use `z.cidrv4()` instead. */
    cidrv4(params?: string | $ZodCheckCIDRv4Params): this;
    /** @deprecated Use `z.cidrv6()` instead. */
    cidrv6(params?: string | $ZodCheckCIDRv6Params): this;
    /** @deprecated Use `z.e164()` instead. */
    e164(params?: string | $ZodCheckE164Params): this;
    /** @deprecated Use `z.iso.datetime()` instead. */
    datetime(params?: string | $ZodCheckISODateTimeParams): this;
    /** @deprecated Use `z.iso.date()` instead. */
    date(params?: string | $ZodCheckISODateParams): this;
    /** @deprecated Use `z.iso.time()` instead. */
    time(params?: string | $ZodCheckISOTimeParams): this;
    /** @deprecated Use `z.iso.duration()` instead. */
    duration(params?: string | $ZodCheckISODurationParams): this;
}
declare const ZodString: $constructor<ZodString>;
declare function string$1(params?: string | $ZodStringParams): ZodString;
declare function string$1<T extends string>(params?: string | $ZodStringParams): $ZodType<T, T>;
interface ZodStringFormat<Format extends string = string> extends _ZodString<$ZodStringFormatInternals<Format>> {
}
declare const ZodStringFormat: $constructor<ZodStringFormat>;
interface ZodEmail extends ZodStringFormat<"email"> {
    _zod: $ZodEmailInternals;
}
declare const ZodEmail: $constructor<ZodEmail>;
declare function email(params?: string | $ZodEmailParams): ZodEmail;
interface ZodGUID extends ZodStringFormat<"guid"> {
    _zod: $ZodGUIDInternals;
}
declare const ZodGUID: $constructor<ZodGUID>;
declare function guid(params?: string | $ZodGUIDParams): ZodGUID;
interface ZodUUID extends ZodStringFormat<"uuid"> {
    _zod: $ZodUUIDInternals;
}
declare const ZodUUID: $constructor<ZodUUID>;
declare function uuid(params?: string | $ZodUUIDParams): ZodUUID;
declare function uuidv4(params?: string | $ZodUUIDv4Params): ZodUUID;
declare function uuidv6(params?: string | $ZodUUIDv6Params): ZodUUID;
declare function uuidv7(params?: string | $ZodUUIDv7Params): ZodUUID;
interface ZodURL extends ZodStringFormat<"url"> {
    _zod: $ZodURLInternals;
}
declare const ZodURL: $constructor<ZodURL>;
declare function url(params?: string | $ZodURLParams): ZodURL;
declare function httpUrl(params?: string | Omit<$ZodURLParams, "protocol" | "hostname">): ZodURL;
interface ZodEmoji extends ZodStringFormat<"emoji"> {
    _zod: $ZodEmojiInternals;
}
declare const ZodEmoji: $constructor<ZodEmoji>;
declare function emoji(params?: string | $ZodEmojiParams): ZodEmoji;
interface ZodNanoID extends ZodStringFormat<"nanoid"> {
    _zod: $ZodNanoIDInternals;
}
declare const ZodNanoID: $constructor<ZodNanoID>;
declare function nanoid(params?: string | $ZodNanoIDParams): ZodNanoID;
interface ZodCUID extends ZodStringFormat<"cuid"> {
    _zod: $ZodCUIDInternals;
}
declare const ZodCUID: $constructor<ZodCUID>;
declare function cuid(params?: string | $ZodCUIDParams): ZodCUID;
interface ZodCUID2 extends ZodStringFormat<"cuid2"> {
    _zod: $ZodCUID2Internals;
}
declare const ZodCUID2: $constructor<ZodCUID2>;
declare function cuid2(params?: string | $ZodCUID2Params): ZodCUID2;
interface ZodULID extends ZodStringFormat<"ulid"> {
    _zod: $ZodULIDInternals;
}
declare const ZodULID: $constructor<ZodULID>;
declare function ulid(params?: string | $ZodULIDParams): ZodULID;
interface ZodXID extends ZodStringFormat<"xid"> {
    _zod: $ZodXIDInternals;
}
declare const ZodXID: $constructor<ZodXID>;
declare function xid(params?: string | $ZodXIDParams): ZodXID;
interface ZodKSUID extends ZodStringFormat<"ksuid"> {
    _zod: $ZodKSUIDInternals;
}
declare const ZodKSUID: $constructor<ZodKSUID>;
declare function ksuid(params?: string | $ZodKSUIDParams): ZodKSUID;
interface ZodIPv4 extends ZodStringFormat<"ipv4"> {
    _zod: $ZodIPv4Internals;
}
declare const ZodIPv4: $constructor<ZodIPv4>;
declare function ipv4(params?: string | $ZodIPv4Params): ZodIPv4;
interface ZodMAC extends ZodStringFormat<"mac"> {
    _zod: $ZodMACInternals;
}
declare const ZodMAC: $constructor<ZodMAC>;
declare function mac(params?: string | $ZodMACParams): ZodMAC;
interface ZodIPv6 extends ZodStringFormat<"ipv6"> {
    _zod: $ZodIPv6Internals;
}
declare const ZodIPv6: $constructor<ZodIPv6>;
declare function ipv6(params?: string | $ZodIPv6Params): ZodIPv6;
interface ZodCIDRv4 extends ZodStringFormat<"cidrv4"> {
    _zod: $ZodCIDRv4Internals;
}
declare const ZodCIDRv4: $constructor<ZodCIDRv4>;
declare function cidrv4(params?: string | $ZodCIDRv4Params): ZodCIDRv4;
interface ZodCIDRv6 extends ZodStringFormat<"cidrv6"> {
    _zod: $ZodCIDRv6Internals;
}
declare const ZodCIDRv6: $constructor<ZodCIDRv6>;
declare function cidrv6(params?: string | $ZodCIDRv6Params): ZodCIDRv6;
interface ZodBase64 extends ZodStringFormat<"base64"> {
    _zod: $ZodBase64Internals;
}
declare const ZodBase64: $constructor<ZodBase64>;
declare function base64(params?: string | $ZodBase64Params): ZodBase64;
interface ZodBase64URL extends ZodStringFormat<"base64url"> {
    _zod: $ZodBase64URLInternals;
}
declare const ZodBase64URL: $constructor<ZodBase64URL>;
declare function base64url(params?: string | $ZodBase64URLParams): ZodBase64URL;
interface ZodE164 extends ZodStringFormat<"e164"> {
    _zod: $ZodE164Internals;
}
declare const ZodE164: $constructor<ZodE164>;
declare function e164(params?: string | $ZodE164Params): ZodE164;
interface ZodJWT extends ZodStringFormat<"jwt"> {
    _zod: $ZodJWTInternals;
}
declare const ZodJWT: $constructor<ZodJWT>;
declare function jwt(params?: string | $ZodJWTParams): ZodJWT;
interface ZodCustomStringFormat<Format extends string = string> extends ZodStringFormat<Format>, $ZodCustomStringFormat<Format> {
    _zod: $ZodCustomStringFormatInternals<Format>;
    "~standard": ZodStandardSchemaWithJSON<this>;
}
declare const ZodCustomStringFormat: $constructor<ZodCustomStringFormat>;
declare function stringFormat<Format extends string>(format: Format, fnOrRegex: ((arg: string) => MaybeAsync<unknown>) | RegExp, _params?: string | $ZodStringFormatParams): ZodCustomStringFormat<Format>;
declare function hostname(_params?: string | $ZodStringFormatParams): ZodCustomStringFormat<"hostname">;
declare function hex(_params?: string | $ZodStringFormatParams): ZodCustomStringFormat<"hex">;
declare function hash<Alg extends HashAlgorithm, Enc extends HashEncoding = "hex">(alg: Alg, params?: {
    enc?: Enc;
} & $ZodStringFormatParams): ZodCustomStringFormat<`${Alg}_${Enc}`>;
interface _ZodNumber<Internals extends $ZodNumberInternals = $ZodNumberInternals> extends _ZodType<Internals> {
    gt(value: number, params?: string | $ZodCheckGreaterThanParams): this;
    /** Identical to .min() */
    gte(value: number, params?: string | $ZodCheckGreaterThanParams): this;
    min(value: number, params?: string | $ZodCheckGreaterThanParams): this;
    lt(value: number, params?: string | $ZodCheckLessThanParams): this;
    /** Identical to .max() */
    lte(value: number, params?: string | $ZodCheckLessThanParams): this;
    max(value: number, params?: string | $ZodCheckLessThanParams): this;
    /** Consider `z.int()` instead. This API is considered *legacy*; it will never be removed but a better alternative exists. */
    int(params?: string | $ZodCheckNumberFormatParams): this;
    /** @deprecated This is now identical to `.int()`. Only numbers in the safe integer range are accepted. */
    safe(params?: string | $ZodCheckNumberFormatParams): this;
    positive(params?: string | $ZodCheckGreaterThanParams): this;
    nonnegative(params?: string | $ZodCheckGreaterThanParams): this;
    negative(params?: string | $ZodCheckLessThanParams): this;
    nonpositive(params?: string | $ZodCheckLessThanParams): this;
    multipleOf(value: number, params?: string | $ZodCheckMultipleOfParams): this;
    /** @deprecated Use `.multipleOf()` instead. */
    step(value: number, params?: string | $ZodCheckMultipleOfParams): this;
    /** @deprecated In v4 and later, z.number() does not allow infinite values by default. This is a no-op. */
    finite(params?: unknown): this;
    minValue: number | null;
    maxValue: number | null;
    /** @deprecated Check the `format` property instead.  */
    isInt: boolean;
    /** @deprecated Number schemas no longer accept infinite values, so this always returns `true`. */
    isFinite: boolean;
    format: string | null;
}
interface ZodNumber extends _ZodNumber<$ZodNumberInternals<number>> {
}
declare const ZodNumber: $constructor<ZodNumber>;
declare function number$1(params?: string | $ZodNumberParams): ZodNumber;
interface ZodNumberFormat extends ZodNumber {
    _zod: $ZodNumberFormatInternals;
}
declare const ZodNumberFormat: $constructor<ZodNumberFormat>;
interface ZodInt extends ZodNumberFormat {
}
declare function int(params?: string | $ZodCheckNumberFormatParams): ZodInt;
interface ZodFloat32 extends ZodNumberFormat {
}
declare function float32(params?: string | $ZodCheckNumberFormatParams): ZodFloat32;
interface ZodFloat64 extends ZodNumberFormat {
}
declare function float64(params?: string | $ZodCheckNumberFormatParams): ZodFloat64;
interface ZodInt32 extends ZodNumberFormat {
}
declare function int32(params?: string | $ZodCheckNumberFormatParams): ZodInt32;
interface ZodUInt32 extends ZodNumberFormat {
}
declare function uint32(params?: string | $ZodCheckNumberFormatParams): ZodUInt32;
interface _ZodBoolean<T extends $ZodBooleanInternals = $ZodBooleanInternals> extends _ZodType<T> {
}
interface ZodBoolean extends _ZodBoolean<$ZodBooleanInternals<boolean>> {
}
declare const ZodBoolean: $constructor<ZodBoolean>;
declare function boolean$1(params?: string | $ZodBooleanParams): ZodBoolean;
interface _ZodBigInt<T extends $ZodBigIntInternals = $ZodBigIntInternals> extends _ZodType<T> {
    gte(value: bigint, params?: string | $ZodCheckGreaterThanParams): this;
    /** Alias of `.gte()` */
    min(value: bigint, params?: string | $ZodCheckGreaterThanParams): this;
    gt(value: bigint, params?: string | $ZodCheckGreaterThanParams): this;
    /** Alias of `.lte()` */
    lte(value: bigint, params?: string | $ZodCheckLessThanParams): this;
    max(value: bigint, params?: string | $ZodCheckLessThanParams): this;
    lt(value: bigint, params?: string | $ZodCheckLessThanParams): this;
    positive(params?: string | $ZodCheckGreaterThanParams): this;
    negative(params?: string | $ZodCheckLessThanParams): this;
    nonpositive(params?: string | $ZodCheckLessThanParams): this;
    nonnegative(params?: string | $ZodCheckGreaterThanParams): this;
    multipleOf(value: bigint, params?: string | $ZodCheckMultipleOfParams): this;
    minValue: bigint | null;
    maxValue: bigint | null;
    format: string | null;
}
interface ZodBigInt extends _ZodBigInt<$ZodBigIntInternals<bigint>> {
}
declare const ZodBigInt: $constructor<ZodBigInt>;
declare function bigint$1(params?: string | $ZodBigIntParams): ZodBigInt;
interface ZodBigIntFormat extends ZodBigInt {
    _zod: $ZodBigIntFormatInternals;
}
declare const ZodBigIntFormat: $constructor<ZodBigIntFormat>;
declare function int64(params?: string | $ZodBigIntFormatParams): ZodBigIntFormat;
declare function uint64(params?: string | $ZodBigIntFormatParams): ZodBigIntFormat;
interface ZodSymbol extends _ZodType<$ZodSymbolInternals> {
}
declare const ZodSymbol: $constructor<ZodSymbol>;
declare function symbol(params?: string | $ZodSymbolParams): ZodSymbol;
interface ZodUndefined extends _ZodType<$ZodUndefinedInternals> {
}
declare const ZodUndefined: $constructor<ZodUndefined>;
declare function _undefined(params?: string | $ZodUndefinedParams): ZodUndefined;

interface ZodNull extends _ZodType<$ZodNullInternals> {
}
declare const ZodNull: $constructor<ZodNull>;
declare function _null(params?: string | $ZodNullParams): ZodNull;

interface ZodAny extends _ZodType<$ZodAnyInternals> {
}
declare const ZodAny: $constructor<ZodAny>;
declare function any(): ZodAny;
interface ZodUnknown extends _ZodType<$ZodUnknownInternals> {
}
declare const ZodUnknown: $constructor<ZodUnknown>;
declare function unknown(): ZodUnknown;
interface ZodNever extends _ZodType<$ZodNeverInternals> {
}
declare const ZodNever: $constructor<ZodNever>;
declare function never(params?: string | $ZodNeverParams): ZodNever;
interface ZodVoid extends _ZodType<$ZodVoidInternals> {
}
declare const ZodVoid: $constructor<ZodVoid>;
declare function _void(params?: string | $ZodVoidParams): ZodVoid;

interface _ZodDate<T extends $ZodDateInternals = $ZodDateInternals> extends _ZodType<T> {
    min(value: number | Date, params?: string | $ZodCheckGreaterThanParams): this;
    max(value: number | Date, params?: string | $ZodCheckLessThanParams): this;
    /** @deprecated Not recommended. */
    minDate: Date | null;
    /** @deprecated Not recommended. */
    maxDate: Date | null;
}
interface ZodDate extends _ZodDate<$ZodDateInternals<Date>> {
}
declare const ZodDate: $constructor<ZodDate>;
declare function date$2(params?: string | $ZodDateParams): ZodDate;
interface ZodArray<T extends SomeType = $ZodType> extends _ZodType<$ZodArrayInternals<T>>, $ZodArray<T> {
    element: T;
    min(minLength: number, params?: string | $ZodCheckMinLengthParams): this;
    nonempty(params?: string | $ZodCheckMinLengthParams): this;
    max(maxLength: number, params?: string | $ZodCheckMaxLengthParams): this;
    length(len: number, params?: string | $ZodCheckLengthEqualsParams): this;
    unwrap(): T;
    "~standard": ZodStandardSchemaWithJSON<this>;
}
declare const ZodArray: $constructor<ZodArray>;
declare function array<T extends SomeType>(element: T, params?: string | $ZodArrayParams): ZodArray<T>;
declare function keyof<T extends ZodObject>(schema: T): ZodEnum<KeysEnum<T["_zod"]["output"]>>;
type SafeExtendShape<Base extends $ZodShape, Ext extends $ZodLooseShape> = {
    [K in keyof Ext]: K extends keyof Base ? output<Ext[K]> extends output<Base[K]> ? input<Ext[K]> extends input<Base[K]> ? Ext[K] : never : never : Ext[K];
};
interface ZodObject<
/** @ts-ignore Cast variance */
out Shape extends $ZodShape = $ZodLooseShape, out Config extends $ZodObjectConfig = $strip> extends _ZodType<$ZodObjectInternals<Shape, Config>>, $ZodObject<Shape, Config> {
    "~standard": ZodStandardSchemaWithJSON<this>;
    shape: Shape;
    keyof(): ZodEnum<ToEnum<keyof Shape & string>>;
    /** Define a schema to validate all unrecognized keys. This overrides the existing strict/loose behavior. */
    catchall<T extends SomeType>(schema: T): ZodObject<Shape, $catchall<T>>;
    /** @deprecated Use `z.looseObject()` or `.loose()` instead. */
    passthrough(): ZodObject<Shape, $loose>;
    /** Consider `z.looseObject(A.shape)` instead */
    loose(): ZodObject<Shape, $loose>;
    /** Consider `z.strictObject(A.shape)` instead */
    strict(): ZodObject<Shape, $strict>;
    /** This is the default behavior. This method call is likely unnecessary. */
    strip(): ZodObject<Shape, $strip>;
    extend<U extends $ZodLooseShape>(shape: U): ZodObject<Extend<Shape, U>, Config>;
    safeExtend<U extends $ZodLooseShape>(shape: SafeExtendShape<Shape, U> & Partial<Record<keyof Shape, SomeType>>): ZodObject<Extend<Shape, U>, Config>;
    /**
     * @deprecated Use [`A.extend(B.shape)`](https://zod.dev/api?id=extend) instead.
     */
    merge<U extends ZodObject>(other: U): ZodObject<Extend<Shape, U["shape"]>, U["_zod"]["config"]>;
    pick<M extends Mask<keyof Shape>>(mask: M & Record<Exclude<keyof M, keyof Shape>, never>): ZodObject<Flatten<Pick<Shape, Extract<keyof Shape, keyof M>>>, Config>;
    omit<M extends Mask<keyof Shape>>(mask: M & Record<Exclude<keyof M, keyof Shape>, never>): ZodObject<Flatten<Omit<Shape, Extract<keyof Shape, keyof M>>>, Config>;
    partial(): ZodObject<{
        [k in keyof Shape]: ZodOptional<Shape[k]>;
    }, Config>;
    partial<M extends Mask<keyof Shape>>(mask: M & Record<Exclude<keyof M, keyof Shape>, never>): ZodObject<{
        [k in keyof Shape]: k extends keyof M ? ZodOptional<Shape[k]> : Shape[k];
    }, Config>;
    required(): ZodObject<{
        [k in keyof Shape]: ZodNonOptional<Shape[k]>;
    }, Config>;
    required<M extends Mask<keyof Shape>>(mask: M & Record<Exclude<keyof M, keyof Shape>, never>): ZodObject<{
        [k in keyof Shape]: k extends keyof M ? ZodNonOptional<Shape[k]> : Shape[k];
    }, Config>;
}
declare const ZodObject: $constructor<ZodObject>;
declare function object<T extends $ZodLooseShape = Partial<Record<never, SomeType>>>(shape?: T, params?: string | $ZodObjectParams): ZodObject<Writeable<T>, $strip>;
declare function strictObject<T extends $ZodLooseShape>(shape: T, params?: string | $ZodObjectParams): ZodObject<T, $strict>;
declare function looseObject<T extends $ZodLooseShape>(shape: T, params?: string | $ZodObjectParams): ZodObject<T, $loose>;
interface ZodUnion<T extends readonly SomeType[] = readonly $ZodType[]> extends _ZodType<$ZodUnionInternals<T>>, $ZodUnion<T> {
    "~standard": ZodStandardSchemaWithJSON<this>;
    options: T;
}
declare const ZodUnion: $constructor<ZodUnion>;
declare function union<const T extends readonly SomeType[]>(options: T, params?: string | $ZodUnionParams): ZodUnion<T>;
interface ZodXor<T extends readonly SomeType[] = readonly $ZodType[]> extends _ZodType<$ZodXorInternals<T>>, $ZodXor<T> {
    "~standard": ZodStandardSchemaWithJSON<this>;
    options: T;
}
declare const ZodXor: $constructor<ZodXor>;
/** Creates an exclusive union (XOR) where exactly one option must match.
 * Unlike regular unions that succeed when any option matches, xor fails if
 * zero or more than one option matches the input. */
declare function xor<const T extends readonly SomeType[]>(options: T, params?: string | $ZodXorParams): ZodXor<T>;
interface ZodDiscriminatedUnion<Options extends readonly SomeType[] = readonly $ZodType[], Disc extends string = string> extends ZodUnion<Options>, $ZodDiscriminatedUnion<Options, Disc> {
    "~standard": ZodStandardSchemaWithJSON<this>;
    _zod: $ZodDiscriminatedUnionInternals<Options, Disc>;
    def: $ZodDiscriminatedUnionDef<Options, Disc>;
}
declare const ZodDiscriminatedUnion: $constructor<ZodDiscriminatedUnion>;
declare function discriminatedUnion<Types extends readonly [$ZodTypeDiscriminable, ...$ZodTypeDiscriminable[]], Disc extends string>(discriminator: Disc, options: Types, params?: string | $ZodDiscriminatedUnionParams): ZodDiscriminatedUnion<Types, Disc>;
interface ZodIntersection<A extends SomeType = $ZodType, B extends SomeType = $ZodType> extends _ZodType<$ZodIntersectionInternals<A, B>>, $ZodIntersection<A, B> {
    "~standard": ZodStandardSchemaWithJSON<this>;
}
declare const ZodIntersection: $constructor<ZodIntersection>;
declare function intersection<T extends SomeType, U extends SomeType>(left: T, right: U): ZodIntersection<T, U>;
interface ZodTuple<T extends TupleItems = readonly $ZodType[], Rest extends SomeType | null = $ZodType | null> extends _ZodType<$ZodTupleInternals<T, Rest>>, $ZodTuple<T, Rest> {
    "~standard": ZodStandardSchemaWithJSON<this>;
    rest<Rest extends SomeType = $ZodType>(rest: Rest): ZodTuple<T, Rest>;
}
declare const ZodTuple: $constructor<ZodTuple>;
declare function tuple<T extends readonly [SomeType, ...SomeType[]]>(items: T, params?: string | $ZodTupleParams): ZodTuple<T, null>;
declare function tuple<T extends readonly [SomeType, ...SomeType[]], Rest extends SomeType>(items: T, rest: Rest, params?: string | $ZodTupleParams): ZodTuple<T, Rest>;
declare function tuple(items: [], params?: string | $ZodTupleParams): ZodTuple<[], null>;
interface ZodRecord<Key extends $ZodRecordKey = $ZodRecordKey, Value extends SomeType = $ZodType> extends _ZodType<$ZodRecordInternals<Key, Value>>, $ZodRecord<Key, Value> {
    "~standard": ZodStandardSchemaWithJSON<this>;
    keyType: Key;
    valueType: Value;
}
declare const ZodRecord: $constructor<ZodRecord>;
declare function record<Key extends $ZodRecordKey, Value extends SomeType>(keyType: Key, valueType: Value, params?: string | $ZodRecordParams): ZodRecord<Key, Value>;
declare function partialRecord<Key extends $ZodRecordKey, Value extends SomeType>(keyType: Key, valueType: Value, params?: string | $ZodRecordParams): ZodRecord<Key & $partial, Value>;
declare function looseRecord<Key extends $ZodRecordKey, Value extends SomeType>(keyType: Key, valueType: Value, params?: string | $ZodRecordParams): ZodRecord<Key, Value>;
interface ZodMap<Key extends SomeType = $ZodType, Value extends SomeType = $ZodType> extends _ZodType<$ZodMapInternals<Key, Value>>, $ZodMap<Key, Value> {
    "~standard": ZodStandardSchemaWithJSON<this>;
    keyType: Key;
    valueType: Value;
    min(minSize: number, params?: string | $ZodCheckMinSizeParams): this;
    nonempty(params?: string | $ZodCheckMinSizeParams): this;
    max(maxSize: number, params?: string | $ZodCheckMaxSizeParams): this;
    size(size: number, params?: string | $ZodCheckSizeEqualsParams): this;
}
declare const ZodMap: $constructor<ZodMap>;
declare function map<Key extends SomeType, Value extends SomeType>(keyType: Key, valueType: Value, params?: string | $ZodMapParams): ZodMap<Key, Value>;
interface ZodSet<T extends SomeType = $ZodType> extends _ZodType<$ZodSetInternals<T>>, $ZodSet<T> {
    "~standard": ZodStandardSchemaWithJSON<this>;
    min(minSize: number, params?: string | $ZodCheckMinSizeParams): this;
    nonempty(params?: string | $ZodCheckMinSizeParams): this;
    max(maxSize: number, params?: string | $ZodCheckMaxSizeParams): this;
    size(size: number, params?: string | $ZodCheckSizeEqualsParams): this;
}
declare const ZodSet: $constructor<ZodSet>;
declare function set<Value extends SomeType>(valueType: Value, params?: string | $ZodSetParams): ZodSet<Value>;
interface ZodEnum<
/** @ts-ignore Cast variance */
out T extends EnumLike = EnumLike> extends _ZodType<$ZodEnumInternals<T>>, $ZodEnum<T> {
    "~standard": ZodStandardSchemaWithJSON<this>;
    enum: T;
    options: Array<T[keyof T]>;
    extract<const U extends readonly (keyof T)[]>(values: U, params?: string | $ZodEnumParams): ZodEnum<Flatten<Pick<T, U[number]>>>;
    exclude<const U extends readonly (keyof T)[]>(values: U, params?: string | $ZodEnumParams): ZodEnum<Flatten<Omit<T, U[number]>>>;
}
declare const ZodEnum: $constructor<ZodEnum>;
declare function _enum<const T extends readonly string[]>(values: T, params?: string | $ZodEnumParams): ZodEnum<ToEnum<T[number]>>;
declare function _enum<const T extends EnumLike>(entries: T, params?: string | $ZodEnumParams): ZodEnum<T>;

/** @deprecated This API has been merged into `z.enum()`. Use `z.enum()` instead.
 *
 * ```ts
 * enum Colors { red, green, blue }
 * z.enum(Colors);
 * ```
 */
declare function nativeEnum<T extends EnumLike>(entries: T, params?: string | $ZodEnumParams): ZodEnum<T>;
interface ZodLiteral<T extends Literal = Literal> extends _ZodType<$ZodLiteralInternals<T>>, $ZodLiteral<T> {
    "~standard": ZodStandardSchemaWithJSON<this>;
    values: Set<T>;
    /** @legacy Use `.values` instead. Accessing this property will throw an error if the literal accepts multiple values. */
    value: T;
}
declare const ZodLiteral: $constructor<ZodLiteral>;
declare function literal<const T extends ReadonlyArray<Literal>>(value: T, params?: string | $ZodLiteralParams): ZodLiteral<T[number]>;
declare function literal<const T extends Literal>(value: T, params?: string | $ZodLiteralParams): ZodLiteral<T>;
interface ZodFile extends _ZodType<$ZodFileInternals>, $ZodFile {
    "~standard": ZodStandardSchemaWithJSON<this>;
    min(size: number, params?: string | $ZodCheckMinSizeParams): this;
    max(size: number, params?: string | $ZodCheckMaxSizeParams): this;
    mime(types: MimeTypes | Array<MimeTypes>, params?: string | $ZodCheckMimeTypeParams): this;
}
declare const ZodFile: $constructor<ZodFile>;
declare function file(params?: string | $ZodFileParams): ZodFile;
interface ZodTransform<O = unknown, I = unknown> extends _ZodType<$ZodTransformInternals<O, I>>, $ZodTransform<O, I> {
    "~standard": ZodStandardSchemaWithJSON<this>;
}
declare const ZodTransform: $constructor<ZodTransform>;
declare function transform<I = unknown, O = I>(fn: (input: I, ctx: ParsePayload) => O): ZodTransform<Awaited<O>, I>;
interface ZodOptional<T extends SomeType = $ZodType> extends _ZodType<$ZodOptionalInternals<T>>, $ZodOptional<T> {
    "~standard": ZodStandardSchemaWithJSON<this>;
    unwrap(): T;
}
declare const ZodOptional: $constructor<ZodOptional>;
declare function optional<T extends SomeType>(innerType: T): ZodOptional<T>;
interface ZodExactOptional<T extends SomeType = $ZodType> extends _ZodType<$ZodExactOptionalInternals<T>>, $ZodExactOptional<T> {
    "~standard": ZodStandardSchemaWithJSON<this>;
    unwrap(): T;
}
declare const ZodExactOptional: $constructor<ZodExactOptional>;
declare function exactOptional<T extends SomeType>(innerType: T): ZodExactOptional<T>;
interface ZodNullable<T extends SomeType = $ZodType> extends _ZodType<$ZodNullableInternals<T>>, $ZodNullable<T> {
    "~standard": ZodStandardSchemaWithJSON<this>;
    unwrap(): T;
}
declare const ZodNullable: $constructor<ZodNullable>;
declare function nullable<T extends SomeType>(innerType: T): ZodNullable<T>;
declare function nullish<T extends SomeType>(innerType: T): ZodOptional<ZodNullable<T>>;
interface ZodDefault<T extends SomeType = $ZodType> extends _ZodType<$ZodDefaultInternals<T>>, $ZodDefault<T> {
    "~standard": ZodStandardSchemaWithJSON<this>;
    unwrap(): T;
    /** @deprecated Use `.unwrap()` instead. */
    removeDefault(): T;
}
declare const ZodDefault: $constructor<ZodDefault>;
declare function _default<T extends SomeType>(innerType: T, defaultValue: NoUndefined<output<T>> | (() => NoUndefined<output<T>>)): ZodDefault<T>;
interface ZodPrefault<T extends SomeType = $ZodType> extends _ZodType<$ZodPrefaultInternals<T>>, $ZodPrefault<T> {
    "~standard": ZodStandardSchemaWithJSON<this>;
    unwrap(): T;
}
declare const ZodPrefault: $constructor<ZodPrefault>;
declare function prefault<T extends SomeType>(innerType: T, defaultValue: input<T> | (() => input<T>)): ZodPrefault<T>;
interface ZodNonOptional<T extends SomeType = $ZodType> extends _ZodType<$ZodNonOptionalInternals<T>>, $ZodNonOptional<T> {
    "~standard": ZodStandardSchemaWithJSON<this>;
    unwrap(): T;
}
declare const ZodNonOptional: $constructor<ZodNonOptional>;
declare function nonoptional<T extends SomeType>(innerType: T, params?: string | $ZodNonOptionalParams): ZodNonOptional<T>;
interface ZodSuccess<T extends SomeType = $ZodType> extends _ZodType<$ZodSuccessInternals<T>>, $ZodSuccess<T> {
    "~standard": ZodStandardSchemaWithJSON<this>;
    unwrap(): T;
}
declare const ZodSuccess: $constructor<ZodSuccess>;
declare function success<T extends SomeType>(innerType: T): ZodSuccess<T>;
interface ZodCatch<T extends SomeType = $ZodType> extends _ZodType<$ZodCatchInternals<T>>, $ZodCatch<T> {
    "~standard": ZodStandardSchemaWithJSON<this>;
    unwrap(): T;
    /** @deprecated Use `.unwrap()` instead. */
    removeCatch(): T;
}
declare const ZodCatch: $constructor<ZodCatch>;
declare function _catch<T extends SomeType>(innerType: T, catchValue: output<T> | ((ctx: $ZodCatchCtx) => output<T>)): ZodCatch<T>;

interface ZodNaN extends _ZodType<$ZodNaNInternals>, $ZodNaN {
    "~standard": ZodStandardSchemaWithJSON<this>;
}
declare const ZodNaN: $constructor<ZodNaN>;
declare function nan(params?: string | $ZodNaNParams): ZodNaN;
interface ZodPipe<A extends SomeType = $ZodType, B extends SomeType = $ZodType> extends _ZodType<$ZodPipeInternals<A, B>>, $ZodPipe<A, B> {
    "~standard": ZodStandardSchemaWithJSON<this>;
    in: A;
    out: B;
}
declare const ZodPipe: $constructor<ZodPipe>;
declare function pipe<const A extends SomeType, B extends $ZodType<unknown, output<A>> = $ZodType<unknown, output<A>>>(in_: A, out: B | $ZodType<unknown, output<A>>): ZodPipe<A, B>;
interface ZodCodec<A extends SomeType = $ZodType, B extends SomeType = $ZodType> extends ZodPipe<A, B>, $ZodCodec<A, B> {
    "~standard": ZodStandardSchemaWithJSON<this>;
    _zod: $ZodCodecInternals<A, B>;
    def: $ZodCodecDef<A, B>;
}
declare const ZodCodec: $constructor<ZodCodec>;
declare function codec<const A extends SomeType, B extends SomeType = $ZodType>(in_: A, out: B, params: {
    decode: (value: output<A>, payload: ParsePayload<output<A>>) => MaybeAsync<input<B>>;
    encode: (value: input<B>, payload: ParsePayload<input<B>>) => MaybeAsync<output<A>>;
}): ZodCodec<A, B>;
interface ZodReadonly<T extends SomeType = $ZodType> extends _ZodType<$ZodReadonlyInternals<T>>, $ZodReadonly<T> {
    "~standard": ZodStandardSchemaWithJSON<this>;
    unwrap(): T;
}
declare const ZodReadonly: $constructor<ZodReadonly>;
declare function readonly<T extends SomeType>(innerType: T): ZodReadonly<T>;
interface ZodTemplateLiteral<Template extends string = string> extends _ZodType<$ZodTemplateLiteralInternals<Template>>, $ZodTemplateLiteral<Template> {
    "~standard": ZodStandardSchemaWithJSON<this>;
}
declare const ZodTemplateLiteral: $constructor<ZodTemplateLiteral>;
declare function templateLiteral<const Parts extends $ZodTemplateLiteralPart[]>(parts: Parts, params?: string | $ZodTemplateLiteralParams): ZodTemplateLiteral<$PartsToTemplateLiteral<Parts>>;
interface ZodLazy<T extends SomeType = $ZodType> extends _ZodType<$ZodLazyInternals<T>>, $ZodLazy<T> {
    "~standard": ZodStandardSchemaWithJSON<this>;
    unwrap(): T;
}
declare const ZodLazy: $constructor<ZodLazy>;
declare function lazy<T extends SomeType>(getter: () => T): ZodLazy<T>;
interface ZodPromise<T extends SomeType = $ZodType> extends _ZodType<$ZodPromiseInternals<T>>, $ZodPromise<T> {
    "~standard": ZodStandardSchemaWithJSON<this>;
    unwrap(): T;
}
declare const ZodPromise: $constructor<ZodPromise>;
declare function promise<T extends SomeType>(innerType: T): ZodPromise<T>;
interface ZodFunction<Args extends $ZodFunctionIn = $ZodFunctionIn, Returns extends $ZodFunctionOut = $ZodFunctionOut> extends _ZodType<$ZodFunctionInternals<Args, Returns>>, $ZodFunction<Args, Returns> {
    "~standard": ZodStandardSchemaWithJSON<this>;
    _def: $ZodFunctionDef<Args, Returns>;
    _input: $InferInnerFunctionType<Args, Returns>;
    _output: $InferOuterFunctionType<Args, Returns>;
    input<const Items extends TupleItems, const Rest extends $ZodFunctionOut = $ZodFunctionOut>(args: Items, rest?: Rest): ZodFunction<$ZodTuple<Items, Rest>, Returns>;
    input<NewArgs extends $ZodFunctionIn>(args: NewArgs): ZodFunction<NewArgs, Returns>;
    input(...args: any[]): ZodFunction<any, Returns>;
    output<NewReturns extends $ZodType>(output: NewReturns): ZodFunction<Args, NewReturns>;
}
declare const ZodFunction: $constructor<ZodFunction>;
declare function _function(): ZodFunction;
declare function _function<const In extends ReadonlyArray<$ZodType>>(params: {
    input: In;
}): ZodFunction<ZodTuple<In, null>, $ZodFunctionOut>;
declare function _function<const In extends ReadonlyArray<$ZodType>, const Out extends $ZodFunctionOut = $ZodFunctionOut>(params: {
    input: In;
    output: Out;
}): ZodFunction<ZodTuple<In, null>, Out>;
declare function _function<const In extends $ZodFunctionIn = $ZodFunctionIn>(params: {
    input: In;
}): ZodFunction<In, $ZodFunctionOut>;
declare function _function<const Out extends $ZodFunctionOut = $ZodFunctionOut>(params: {
    output: Out;
}): ZodFunction<$ZodFunctionIn, Out>;
declare function _function<In extends $ZodFunctionIn = $ZodFunctionIn, Out extends $ZodType = $ZodType>(params?: {
    input: In;
    output: Out;
}): ZodFunction<In, Out>;

interface ZodCustom<O = unknown, I = unknown> extends _ZodType<$ZodCustomInternals<O, I>>, $ZodCustom<O, I> {
    "~standard": ZodStandardSchemaWithJSON<this>;
}
declare const ZodCustom: $constructor<ZodCustom>;
declare function check<O = unknown>(fn: CheckFn<O>): $ZodCheck<O>;
declare function custom<O>(fn?: (data: unknown) => unknown, _params?: string | $ZodCustomParams | undefined): ZodCustom<O, O>;
declare function refine<T>(fn: (arg: NoInfer<T>) => MaybeAsync<unknown>, _params?: string | $ZodCustomParams): $ZodCheck<T>;
declare function superRefine<T>(fn: (arg: T, payload: $RefinementCtx<T>) => void | Promise<void>): $ZodCheck<T>;
declare const describe: typeof describe$1;
declare const meta: typeof meta$1;
type ZodInstanceOfParams = Params<ZodCustom, $ZodIssueCustom, "type" | "check" | "checks" | "fn" | "abort" | "error" | "params" | "path">;
declare function _instanceof<T extends typeof Class>(cls: T, params?: ZodInstanceOfParams): ZodCustom<InstanceType<T>, InstanceType<T>>;

declare const stringbool: (_params?: string | $ZodStringBoolParams) => ZodCodec<ZodString, ZodBoolean>;
type _ZodJSONSchema = ZodUnion<[
    ZodString,
    ZodNumber,
    ZodBoolean,
    ZodNull,
    ZodArray<ZodJSONSchema>,
    ZodRecord<ZodString, ZodJSONSchema>
]>;
type _ZodJSONSchemaInternals = _ZodJSONSchema["_zod"];
interface ZodJSONSchemaInternals extends _ZodJSONSchemaInternals {
    output: JSONType;
    input: JSONType;
}
interface ZodJSONSchema extends _ZodJSONSchema {
    _zod: ZodJSONSchemaInternals;
}
declare function json(params?: string | $ZodCustomParams): ZodJSONSchema;
declare function preprocess<A, U extends SomeType, B = unknown>(fn: (arg: B, ctx: $RefinementCtx) => A, schema: U): ZodPipe<ZodTransform<A, B>, U>;

/** @deprecated Use the raw string literal codes instead, e.g. "invalid_type". */
declare const ZodIssueCode: {
    readonly invalid_type: "invalid_type";
    readonly too_big: "too_big";
    readonly too_small: "too_small";
    readonly invalid_format: "invalid_format";
    readonly not_multiple_of: "not_multiple_of";
    readonly unrecognized_keys: "unrecognized_keys";
    readonly invalid_union: "invalid_union";
    readonly invalid_key: "invalid_key";
    readonly invalid_element: "invalid_element";
    readonly invalid_value: "invalid_value";
    readonly custom: "custom";
};
/** @deprecated Use `z.$ZodFlattenedError` */
type inferFlattenedErrors<T extends $ZodType, U = string> = $ZodFlattenedError<output<T>, U>;
/** @deprecated Use `z.$ZodFormattedError` */
type inferFormattedError<T extends $ZodType<any, any>, U = string> = $ZodFormattedError<output<T>, U>;
/** Use `z.$brand` instead */
type BRAND<T extends string | number | symbol = string | number | symbol> = {
    [$brand]: {
        [k in T]: true;
    };
};

/** @deprecated Use `z.config(params)` instead. */
declare function setErrorMap(map: $ZodErrorMap): void;
/** @deprecated Use `z.config()` instead. */
declare function getErrorMap(): $ZodErrorMap<$ZodIssue> | undefined;

/** Included for Zod 3 compatibility */
type ZodRawShape = $ZodShape;
/** @deprecated Do not use. Stub definition, only included for zod-to-json-schema compatibility. */
declare enum ZodFirstPartyTypeKind {
}

type JSONSchemaVersion = "draft-2020-12" | "draft-7" | "draft-4" | "openapi-3.0";
interface FromJSONSchemaParams {
    defaultTarget?: JSONSchemaVersion;
    registry?: $ZodRegistry<any>;
}
/**
 * Converts a JSON Schema to a Zod schema. This function should be considered semi-experimental. It's behavior is liable to change. */
declare function fromJSONSchema(schema: JSONSchema | boolean, params?: FromJSONSchemaParams): ZodType;

interface ZodISODateTime extends ZodStringFormat {
    _zod: $ZodISODateTimeInternals;
}
declare const ZodISODateTime: $constructor<ZodISODateTime>;
declare function datetime(params?: string | $ZodISODateTimeParams): ZodISODateTime;
interface ZodISODate extends ZodStringFormat {
    _zod: $ZodISODateInternals;
}
declare const ZodISODate: $constructor<ZodISODate>;
declare function date$1(params?: string | $ZodISODateParams): ZodISODate;
interface ZodISOTime extends ZodStringFormat {
    _zod: $ZodISOTimeInternals;
}
declare const ZodISOTime: $constructor<ZodISOTime>;
declare function time(params?: string | $ZodISOTimeParams): ZodISOTime;
interface ZodISODuration extends ZodStringFormat {
    _zod: $ZodISODurationInternals;
}
declare const ZodISODuration: $constructor<ZodISODuration>;
declare function duration(params?: string | $ZodISODurationParams): ZodISODuration;

declare const iso_d_ZodISODate: typeof ZodISODate;
declare const iso_d_ZodISODateTime: typeof ZodISODateTime;
declare const iso_d_ZodISODuration: typeof ZodISODuration;
declare const iso_d_ZodISOTime: typeof ZodISOTime;
declare const iso_d_datetime: typeof datetime;
declare const iso_d_duration: typeof duration;
declare const iso_d_time: typeof time;
declare namespace iso_d {
  export {
    iso_d_ZodISODate as ZodISODate,
    iso_d_ZodISODateTime as ZodISODateTime,
    iso_d_ZodISODuration as ZodISODuration,
    iso_d_ZodISOTime as ZodISOTime,
    date$1 as date,
    iso_d_datetime as datetime,
    iso_d_duration as duration,
    iso_d_time as time,
  };
}

interface ZodCoercedString<T = unknown> extends _ZodString<$ZodStringInternals<T>> {
}
declare function string<T = unknown>(params?: string | $ZodStringParams): ZodCoercedString<T>;
interface ZodCoercedNumber<T = unknown> extends _ZodNumber<$ZodNumberInternals<T>> {
}
declare function number<T = unknown>(params?: string | $ZodNumberParams): ZodCoercedNumber<T>;
interface ZodCoercedBoolean<T = unknown> extends _ZodBoolean<$ZodBooleanInternals<T>> {
}
declare function boolean<T = unknown>(params?: string | $ZodBooleanParams): ZodCoercedBoolean<T>;
interface ZodCoercedBigInt<T = unknown> extends _ZodBigInt<$ZodBigIntInternals<T>> {
}
declare function bigint<T = unknown>(params?: string | $ZodBigIntParams): ZodCoercedBigInt<T>;
interface ZodCoercedDate<T = unknown> extends _ZodDate<$ZodDateInternals<T>> {
}
declare function date<T = unknown>(params?: string | $ZodDateParams): ZodCoercedDate<T>;

type coerce_d_ZodCoercedBigInt<T = unknown> = ZodCoercedBigInt<T>;
type coerce_d_ZodCoercedBoolean<T = unknown> = ZodCoercedBoolean<T>;
type coerce_d_ZodCoercedDate<T = unknown> = ZodCoercedDate<T>;
type coerce_d_ZodCoercedNumber<T = unknown> = ZodCoercedNumber<T>;
type coerce_d_ZodCoercedString<T = unknown> = ZodCoercedString<T>;
declare const coerce_d_bigint: typeof bigint;
declare const coerce_d_boolean: typeof boolean;
declare const coerce_d_date: typeof date;
declare const coerce_d_number: typeof number;
declare const coerce_d_string: typeof string;
declare namespace coerce_d {
  export { coerce_d_bigint as bigint, coerce_d_boolean as boolean, coerce_d_date as date, coerce_d_number as number, coerce_d_string as string };
  export type { coerce_d_ZodCoercedBigInt as ZodCoercedBigInt, coerce_d_ZodCoercedBoolean as ZodCoercedBoolean, coerce_d_ZodCoercedDate as ZodCoercedDate, coerce_d_ZodCoercedNumber as ZodCoercedNumber, coerce_d_ZodCoercedString as ZodCoercedString };
}

type z_$brand<T extends string | number | symbol = string | number | symbol> = $brand<T>;
type z_$input = $input;
type z_$output = $output;
type z_BRAND<T extends string | number | symbol = string | number | symbol> = BRAND<T>;
type z_GlobalMeta = GlobalMeta;
type z_IssueData = IssueData;
declare const z_NEVER: typeof NEVER;
type z_SafeExtendShape<Base extends $ZodShape, Ext extends $ZodLooseShape> = SafeExtendShape<Base, Ext>;
declare const z_TimePrecision: typeof TimePrecision;
declare const z_ZodAny: typeof ZodAny;
declare const z_ZodArray: typeof ZodArray;
declare const z_ZodBase64: typeof ZodBase64;
declare const z_ZodBase64URL: typeof ZodBase64URL;
declare const z_ZodBigInt: typeof ZodBigInt;
declare const z_ZodBigIntFormat: typeof ZodBigIntFormat;
declare const z_ZodBoolean: typeof ZodBoolean;
declare const z_ZodCIDRv4: typeof ZodCIDRv4;
declare const z_ZodCIDRv6: typeof ZodCIDRv6;
declare const z_ZodCUID: typeof ZodCUID;
declare const z_ZodCUID2: typeof ZodCUID2;
declare const z_ZodCatch: typeof ZodCatch;
declare const z_ZodCodec: typeof ZodCodec;
type z_ZodCoercedBigInt<T = unknown> = ZodCoercedBigInt<T>;
type z_ZodCoercedBoolean<T = unknown> = ZodCoercedBoolean<T>;
type z_ZodCoercedDate<T = unknown> = ZodCoercedDate<T>;
type z_ZodCoercedNumber<T = unknown> = ZodCoercedNumber<T>;
type z_ZodCoercedString<T = unknown> = ZodCoercedString<T>;
declare const z_ZodCustom: typeof ZodCustom;
declare const z_ZodCustomStringFormat: typeof ZodCustomStringFormat;
declare const z_ZodDate: typeof ZodDate;
declare const z_ZodDefault: typeof ZodDefault;
declare const z_ZodDiscriminatedUnion: typeof ZodDiscriminatedUnion;
declare const z_ZodE164: typeof ZodE164;
declare const z_ZodEmail: typeof ZodEmail;
declare const z_ZodEmoji: typeof ZodEmoji;
declare const z_ZodEnum: typeof ZodEnum;
declare const z_ZodError: typeof ZodError;
declare const z_ZodExactOptional: typeof ZodExactOptional;
declare const z_ZodFile: typeof ZodFile;
type z_ZodFirstPartyTypeKind = ZodFirstPartyTypeKind;
declare const z_ZodFirstPartyTypeKind: typeof ZodFirstPartyTypeKind;
type z_ZodFloat32 = ZodFloat32;
type z_ZodFloat64 = ZodFloat64;
declare const z_ZodFunction: typeof ZodFunction;
declare const z_ZodGUID: typeof ZodGUID;
declare const z_ZodIPv4: typeof ZodIPv4;
declare const z_ZodIPv6: typeof ZodIPv6;
declare const z_ZodISODate: typeof ZodISODate;
declare const z_ZodISODateTime: typeof ZodISODateTime;
declare const z_ZodISODuration: typeof ZodISODuration;
declare const z_ZodISOTime: typeof ZodISOTime;
type z_ZodInt = ZodInt;
type z_ZodInt32 = ZodInt32;
declare const z_ZodIntersection: typeof ZodIntersection;
type z_ZodIssue = ZodIssue;
declare const z_ZodIssueCode: typeof ZodIssueCode;
type z_ZodJSONSchema = ZodJSONSchema;
type z_ZodJSONSchemaInternals = ZodJSONSchemaInternals;
declare const z_ZodJWT: typeof ZodJWT;
declare const z_ZodKSUID: typeof ZodKSUID;
declare const z_ZodLazy: typeof ZodLazy;
declare const z_ZodLiteral: typeof ZodLiteral;
declare const z_ZodMAC: typeof ZodMAC;
declare const z_ZodMap: typeof ZodMap;
declare const z_ZodNaN: typeof ZodNaN;
declare const z_ZodNanoID: typeof ZodNanoID;
declare const z_ZodNever: typeof ZodNever;
declare const z_ZodNonOptional: typeof ZodNonOptional;
declare const z_ZodNull: typeof ZodNull;
declare const z_ZodNullable: typeof ZodNullable;
declare const z_ZodNumber: typeof ZodNumber;
declare const z_ZodNumberFormat: typeof ZodNumberFormat;
declare const z_ZodObject: typeof ZodObject;
declare const z_ZodOptional: typeof ZodOptional;
declare const z_ZodPipe: typeof ZodPipe;
declare const z_ZodPrefault: typeof ZodPrefault;
declare const z_ZodPromise: typeof ZodPromise;
type z_ZodRawShape = ZodRawShape;
declare const z_ZodReadonly: typeof ZodReadonly;
declare const z_ZodRealError: typeof ZodRealError;
declare const z_ZodRecord: typeof ZodRecord;
type z_ZodSafeParseError<T> = ZodSafeParseError<T>;
type z_ZodSafeParseResult<T> = ZodSafeParseResult<T>;
type z_ZodSafeParseSuccess<T> = ZodSafeParseSuccess<T>;
declare const z_ZodSet: typeof ZodSet;
type z_ZodStandardSchemaWithJSON<T> = ZodStandardSchemaWithJSON<T>;
declare const z_ZodString: typeof ZodString;
declare const z_ZodStringFormat: typeof ZodStringFormat;
declare const z_ZodSuccess: typeof ZodSuccess;
declare const z_ZodSymbol: typeof ZodSymbol;
declare const z_ZodTemplateLiteral: typeof ZodTemplateLiteral;
declare const z_ZodTransform: typeof ZodTransform;
declare const z_ZodTuple: typeof ZodTuple;
declare const z_ZodType: typeof ZodType;
type z_ZodUInt32 = ZodUInt32;
declare const z_ZodULID: typeof ZodULID;
declare const z_ZodURL: typeof ZodURL;
declare const z_ZodUUID: typeof ZodUUID;
declare const z_ZodUndefined: typeof ZodUndefined;
declare const z_ZodUnion: typeof ZodUnion;
declare const z_ZodUnknown: typeof ZodUnknown;
declare const z_ZodVoid: typeof ZodVoid;
declare const z_ZodXID: typeof ZodXID;
declare const z_ZodXor: typeof ZodXor;
type z__ZodBigInt<T extends $ZodBigIntInternals = $ZodBigIntInternals> = _ZodBigInt<T>;
type z__ZodBoolean<T extends $ZodBooleanInternals = $ZodBooleanInternals> = _ZodBoolean<T>;
type z__ZodDate<T extends $ZodDateInternals = $ZodDateInternals> = _ZodDate<T>;
type z__ZodNumber<Internals extends $ZodNumberInternals = $ZodNumberInternals> = _ZodNumber<Internals>;
declare const z__ZodString: typeof _ZodString;
type z__ZodType<out Internals extends $ZodTypeInternals = $ZodTypeInternals> = _ZodType<Internals>;
declare const z__default: typeof _default;
declare const z__function: typeof _function;
declare const z_any: typeof any;
declare const z_array: typeof array;
declare const z_base64: typeof base64;
declare const z_base64url: typeof base64url;
declare const z_check: typeof check;
declare const z_cidrv4: typeof cidrv4;
declare const z_cidrv6: typeof cidrv6;
declare const z_clone: typeof clone;
declare const z_codec: typeof codec;
declare const z_config: typeof config;
declare const z_cuid: typeof cuid;
declare const z_cuid2: typeof cuid2;
declare const z_custom: typeof custom;
declare const z_decode: typeof decode;
declare const z_decodeAsync: typeof decodeAsync;
declare const z_describe: typeof describe;
declare const z_discriminatedUnion: typeof discriminatedUnion;
declare const z_e164: typeof e164;
declare const z_email: typeof email;
declare const z_emoji: typeof emoji;
declare const z_encode: typeof encode;
declare const z_encodeAsync: typeof encodeAsync;
declare const z_exactOptional: typeof exactOptional;
declare const z_file: typeof file;
declare const z_flattenError: typeof flattenError;
declare const z_float32: typeof float32;
declare const z_float64: typeof float64;
declare const z_formatError: typeof formatError;
declare const z_fromJSONSchema: typeof fromJSONSchema;
declare const z_getErrorMap: typeof getErrorMap;
declare const z_globalRegistry: typeof globalRegistry;
declare const z_guid: typeof guid;
declare const z_hash: typeof hash;
declare const z_hex: typeof hex;
declare const z_hostname: typeof hostname;
declare const z_httpUrl: typeof httpUrl;
type z_inferFlattenedErrors<T extends $ZodType, U = string> = inferFlattenedErrors<T, U>;
type z_inferFormattedError<T extends $ZodType<any, any>, U = string> = inferFormattedError<T, U>;
type z_input<T> = input<T>;
declare const z_int: typeof int;
declare const z_int32: typeof int32;
declare const z_int64: typeof int64;
declare const z_intersection: typeof intersection;
declare const z_ipv4: typeof ipv4;
declare const z_ipv6: typeof ipv6;
declare const z_json: typeof json;
declare const z_jwt: typeof jwt;
declare const z_keyof: typeof keyof;
declare const z_ksuid: typeof ksuid;
declare const z_lazy: typeof lazy;
declare const z_literal: typeof literal;
declare const z_looseObject: typeof looseObject;
declare const z_looseRecord: typeof looseRecord;
declare const z_mac: typeof mac;
declare const z_map: typeof map;
declare const z_meta: typeof meta;
declare const z_nan: typeof nan;
declare const z_nanoid: typeof nanoid;
declare const z_nativeEnum: typeof nativeEnum;
declare const z_never: typeof never;
declare const z_nonoptional: typeof nonoptional;
declare const z_nullable: typeof nullable;
declare const z_nullish: typeof nullish;
declare const z_object: typeof object;
declare const z_optional: typeof optional;
type z_output<T> = output<T>;
declare const z_parse: typeof parse;
declare const z_parseAsync: typeof parseAsync;
declare const z_partialRecord: typeof partialRecord;
declare const z_pipe: typeof pipe;
declare const z_prefault: typeof prefault;
declare const z_preprocess: typeof preprocess;
declare const z_prettifyError: typeof prettifyError;
declare const z_promise: typeof promise;
declare const z_readonly: typeof readonly;
declare const z_record: typeof record;
declare const z_refine: typeof refine;
declare const z_registry: typeof registry;
declare const z_safeDecode: typeof safeDecode;
declare const z_safeDecodeAsync: typeof safeDecodeAsync;
declare const z_safeEncode: typeof safeEncode;
declare const z_safeEncodeAsync: typeof safeEncodeAsync;
declare const z_safeParse: typeof safeParse;
declare const z_safeParseAsync: typeof safeParseAsync;
declare const z_set: typeof set;
declare const z_setErrorMap: typeof setErrorMap;
declare const z_strictObject: typeof strictObject;
declare const z_stringFormat: typeof stringFormat;
declare const z_stringbool: typeof stringbool;
declare const z_success: typeof success;
declare const z_superRefine: typeof superRefine;
declare const z_symbol: typeof symbol;
declare const z_templateLiteral: typeof templateLiteral;
declare const z_toJSONSchema: typeof toJSONSchema;
declare const z_transform: typeof transform;
declare const z_treeifyError: typeof treeifyError;
declare const z_tuple: typeof tuple;
declare const z_uint32: typeof uint32;
declare const z_uint64: typeof uint64;
declare const z_ulid: typeof ulid;
declare const z_union: typeof union;
declare const z_unknown: typeof unknown;
declare const z_url: typeof url;
declare const z_uuid: typeof uuid;
declare const z_uuidv4: typeof uuidv4;
declare const z_uuidv6: typeof uuidv6;
declare const z_uuidv7: typeof uuidv7;
declare const z_xid: typeof xid;
declare const z_xor: typeof xor;
declare namespace z {
  export { z_NEVER as NEVER, ZodType as Schema, z_TimePrecision as TimePrecision, z_ZodAny as ZodAny, z_ZodArray as ZodArray, z_ZodBase64 as ZodBase64, z_ZodBase64URL as ZodBase64URL, z_ZodBigInt as ZodBigInt, z_ZodBigIntFormat as ZodBigIntFormat, z_ZodBoolean as ZodBoolean, z_ZodCIDRv4 as ZodCIDRv4, z_ZodCIDRv6 as ZodCIDRv6, z_ZodCUID as ZodCUID, z_ZodCUID2 as ZodCUID2, z_ZodCatch as ZodCatch, z_ZodCodec as ZodCodec, z_ZodCustom as ZodCustom, z_ZodCustomStringFormat as ZodCustomStringFormat, z_ZodDate as ZodDate, z_ZodDefault as ZodDefault, z_ZodDiscriminatedUnion as ZodDiscriminatedUnion, z_ZodE164 as ZodE164, z_ZodEmail as ZodEmail, z_ZodEmoji as ZodEmoji, z_ZodEnum as ZodEnum, z_ZodError as ZodError, z_ZodExactOptional as ZodExactOptional, z_ZodFile as ZodFile, z_ZodFirstPartyTypeKind as ZodFirstPartyTypeKind, z_ZodFunction as ZodFunction, z_ZodGUID as ZodGUID, z_ZodIPv4 as ZodIPv4, z_ZodIPv6 as ZodIPv6, z_ZodISODate as ZodISODate, z_ZodISODateTime as ZodISODateTime, z_ZodISODuration as ZodISODuration, z_ZodISOTime as ZodISOTime, z_ZodIntersection as ZodIntersection, z_ZodIssueCode as ZodIssueCode, z_ZodJWT as ZodJWT, z_ZodKSUID as ZodKSUID, z_ZodLazy as ZodLazy, z_ZodLiteral as ZodLiteral, z_ZodMAC as ZodMAC, z_ZodMap as ZodMap, z_ZodNaN as ZodNaN, z_ZodNanoID as ZodNanoID, z_ZodNever as ZodNever, z_ZodNonOptional as ZodNonOptional, z_ZodNull as ZodNull, z_ZodNullable as ZodNullable, z_ZodNumber as ZodNumber, z_ZodNumberFormat as ZodNumberFormat, z_ZodObject as ZodObject, z_ZodOptional as ZodOptional, z_ZodPipe as ZodPipe, z_ZodPrefault as ZodPrefault, z_ZodPromise as ZodPromise, z_ZodReadonly as ZodReadonly, z_ZodRealError as ZodRealError, z_ZodRecord as ZodRecord, ZodType as ZodSchema, z_ZodSet as ZodSet, z_ZodString as ZodString, z_ZodStringFormat as ZodStringFormat, z_ZodSuccess as ZodSuccess, z_ZodSymbol as ZodSymbol, z_ZodTemplateLiteral as ZodTemplateLiteral, z_ZodTransform as ZodTransform, z_ZodTuple as ZodTuple, z_ZodType as ZodType, ZodType as ZodTypeAny, z_ZodULID as ZodULID, z_ZodURL as ZodURL, z_ZodUUID as ZodUUID, z_ZodUndefined as ZodUndefined, z_ZodUnion as ZodUnion, z_ZodUnknown as ZodUnknown, z_ZodVoid as ZodVoid, z_ZodXID as ZodXID, z_ZodXor as ZodXor, z__ZodString as _ZodString, z__default as _default, z__function as _function, z_any as any, z_array as array, z_base64 as base64, z_base64url as base64url, bigint$1 as bigint, boolean$1 as boolean, _catch as catch, z_check as check, z_cidrv4 as cidrv4, z_cidrv6 as cidrv6, z_clone as clone, z_codec as codec, coerce_d as coerce, z_config as config, index_d as core, z_cuid as cuid, z_cuid2 as cuid2, z_custom as custom, date$2 as date, z_decode as decode, z_decodeAsync as decodeAsync, z_describe as describe, z_discriminatedUnion as discriminatedUnion, z_e164 as e164, z_email as email, z_emoji as emoji, z_encode as encode, z_encodeAsync as encodeAsync, _endsWith as endsWith, _enum as enum, z_exactOptional as exactOptional, z_file as file, z_flattenError as flattenError, z_float32 as float32, z_float64 as float64, z_formatError as formatError, z_fromJSONSchema as fromJSONSchema, _function as function, z_getErrorMap as getErrorMap, z_globalRegistry as globalRegistry, _gt as gt, _gte as gte, z_guid as guid, z_hash as hash, z_hex as hex, z_hostname as hostname, z_httpUrl as httpUrl, _includes as includes, _instanceof as instanceof, z_int as int, z_int32 as int32, z_int64 as int64, z_intersection as intersection, z_ipv4 as ipv4, z_ipv6 as ipv6, iso_d as iso, z_json as json, z_jwt as jwt, z_keyof as keyof, z_ksuid as ksuid, z_lazy as lazy, _length as length, z_literal as literal, index_d$1 as locales, z_looseObject as looseObject, z_looseRecord as looseRecord, _lowercase as lowercase, _lt as lt, _lte as lte, z_mac as mac, z_map as map, _maxLength as maxLength, _maxSize as maxSize, z_meta as meta, _mime as mime, _minLength as minLength, _minSize as minSize, _multipleOf as multipleOf, z_nan as nan, z_nanoid as nanoid, z_nativeEnum as nativeEnum, _negative as negative, z_never as never, _nonnegative as nonnegative, z_nonoptional as nonoptional, _nonpositive as nonpositive, _normalize as normalize, _null as null, z_nullable as nullable, z_nullish as nullish, number$1 as number, z_object as object, z_optional as optional, _overwrite as overwrite, z_parse as parse, z_parseAsync as parseAsync, z_partialRecord as partialRecord, z_pipe as pipe, _positive as positive, z_prefault as prefault, z_preprocess as preprocess, z_prettifyError as prettifyError, z_promise as promise, _property as property, z_readonly as readonly, z_record as record, z_refine as refine, _regex as regex, regexes_d as regexes, z_registry as registry, z_safeDecode as safeDecode, z_safeDecodeAsync as safeDecodeAsync, z_safeEncode as safeEncode, z_safeEncodeAsync as safeEncodeAsync, z_safeParse as safeParse, z_safeParseAsync as safeParseAsync, z_set as set, z_setErrorMap as setErrorMap, _size as size, _slugify as slugify, _startsWith as startsWith, z_strictObject as strictObject, string$1 as string, z_stringFormat as stringFormat, z_stringbool as stringbool, z_success as success, z_superRefine as superRefine, z_symbol as symbol, z_templateLiteral as templateLiteral, z_toJSONSchema as toJSONSchema, _toLowerCase as toLowerCase, _toUpperCase as toUpperCase, z_transform as transform, z_treeifyError as treeifyError, _trim as trim, z_tuple as tuple, z_uint32 as uint32, z_uint64 as uint64, z_ulid as ulid, _undefined as undefined, z_union as union, z_unknown as unknown, _uppercase as uppercase, z_url as url, util_d as util, z_uuid as uuid, z_uuidv4 as uuidv4, z_uuidv6 as uuidv6, z_uuidv7 as uuidv7, _void as void, z_xid as xid, z_xor as xor };
  export type { z_$brand as $brand, z_$input as $input, z_$output as $output, z_BRAND as BRAND, z_GlobalMeta as GlobalMeta, output as Infer, z_IssueData as IssueData, $RefinementCtx as RefinementCtx, z_SafeExtendShape as SafeExtendShape, output as TypeOf, z_ZodCoercedBigInt as ZodCoercedBigInt, z_ZodCoercedBoolean as ZodCoercedBoolean, z_ZodCoercedDate as ZodCoercedDate, z_ZodCoercedNumber as ZodCoercedNumber, z_ZodCoercedString as ZodCoercedString, $ZodErrorMap as ZodErrorMap, $ZodTypes as ZodFirstPartySchemaTypes, $ZodFlattenedError as ZodFlattenedError, z_ZodFloat32 as ZodFloat32, z_ZodFloat64 as ZodFloat64, $ZodFormattedError as ZodFormattedError, z_ZodInt as ZodInt, z_ZodInt32 as ZodInt32, z_ZodIssue as ZodIssue, z_ZodJSONSchema as ZodJSONSchema, z_ZodJSONSchemaInternals as ZodJSONSchemaInternals, z_ZodRawShape as ZodRawShape, z_ZodSafeParseError as ZodSafeParseError, z_ZodSafeParseResult as ZodSafeParseResult, z_ZodSafeParseSuccess as ZodSafeParseSuccess, z_ZodStandardSchemaWithJSON as ZodStandardSchemaWithJSON, z_ZodUInt32 as ZodUInt32, z__ZodBigInt as _ZodBigInt, z__ZodBoolean as _ZodBoolean, z__ZodDate as _ZodDate, z__ZodNumber as _ZodNumber, z__ZodType as _ZodType, output as infer, z_inferFlattenedErrors as inferFlattenedErrors, z_inferFormattedError as inferFormattedError, z_input as input, z_output as output };
}

export { $brand, $input, $output, NEVER, ZodType as Schema, TimePrecision, ZodAny, ZodArray, ZodBase64, ZodBase64URL, ZodBigInt, ZodBigIntFormat, ZodBoolean, ZodCIDRv4, ZodCIDRv6, ZodCUID, ZodCUID2, ZodCatch, ZodCodec, ZodCustom, ZodCustomStringFormat, ZodDate, ZodDefault, ZodDiscriminatedUnion, ZodE164, ZodEmail, ZodEmoji, ZodEnum, ZodError, ZodExactOptional, ZodFile, ZodFirstPartyTypeKind, ZodFunction, ZodGUID, ZodIPv4, ZodIPv6, ZodISODate, ZodISODateTime, ZodISODuration, ZodISOTime, ZodIntersection, ZodIssueCode, ZodJWT, ZodKSUID, ZodLazy, ZodLiteral, ZodMAC, ZodMap, ZodNaN, ZodNanoID, ZodNever, ZodNonOptional, ZodNull, ZodNullable, ZodNumber, ZodNumberFormat, ZodObject, ZodOptional, ZodPipe, ZodPrefault, ZodPromise, ZodReadonly, ZodRealError, ZodRecord, ZodType as ZodSchema, ZodSet, ZodString, ZodStringFormat, ZodSuccess, ZodSymbol, ZodTemplateLiteral, ZodTransform, ZodTuple, ZodType, ZodType as ZodTypeAny, ZodULID, ZodURL, ZodUUID, ZodUndefined, ZodUnion, ZodUnknown, ZodVoid, ZodXID, ZodXor, _ZodString, _default, _function, any, array, base64, base64url, bigint$1 as bigint, boolean$1 as boolean, _catch as catch, check, cidrv4, cidrv6, clone, codec, coerce_d as coerce, config, index_d as core, cuid, cuid2, custom, date$2 as date, decode, decodeAsync, z as default, describe, discriminatedUnion, e164, email, emoji, encode, encodeAsync, _endsWith as endsWith, _enum as enum, exactOptional, file, flattenError, float32, float64, formatError, fromJSONSchema, _function as function, getErrorMap, globalRegistry, _gt as gt, _gte as gte, guid, hash, hex, hostname, httpUrl, _includes as includes, _instanceof as instanceof, int, int32, int64, intersection, ipv4, ipv6, iso_d as iso, json, jwt, keyof, ksuid, lazy, _length as length, literal, index_d$1 as locales, looseObject, looseRecord, _lowercase as lowercase, _lt as lt, _lte as lte, mac, map, _maxLength as maxLength, _maxSize as maxSize, meta, _mime as mime, _minLength as minLength, _minSize as minSize, _multipleOf as multipleOf, nan, nanoid, nativeEnum, _negative as negative, never, _nonnegative as nonnegative, nonoptional, _nonpositive as nonpositive, _normalize as normalize, _null as null, nullable, nullish, number$1 as number, object, optional, _overwrite as overwrite, parse, parseAsync, partialRecord, pipe, _positive as positive, prefault, preprocess, prettifyError, promise, _property as property, readonly, record, refine, _regex as regex, regexes_d as regexes, registry, safeDecode, safeDecodeAsync, safeEncode, safeEncodeAsync, safeParse, safeParseAsync, set, setErrorMap, _size as size, _slugify as slugify, _startsWith as startsWith, strictObject, string$1 as string, stringFormat, stringbool, success, superRefine, symbol, templateLiteral, toJSONSchema, _toLowerCase as toLowerCase, _toUpperCase as toUpperCase, transform, treeifyError, _trim as trim, tuple, uint32, uint64, ulid, _undefined as undefined, union, unknown, _uppercase as uppercase, url, util_d as util, uuid, uuidv4, uuidv6, uuidv7, _void as void, xid, xor, z };
export type { BRAND, GlobalMeta, output as Infer, IssueData, $RefinementCtx as RefinementCtx, SafeExtendShape, output as TypeOf, ZodCoercedBigInt, ZodCoercedBoolean, ZodCoercedDate, ZodCoercedNumber, ZodCoercedString, $ZodErrorMap as ZodErrorMap, $ZodTypes as ZodFirstPartySchemaTypes, $ZodFlattenedError as ZodFlattenedError, ZodFloat32, ZodFloat64, $ZodFormattedError as ZodFormattedError, ZodInt, ZodInt32, ZodIssue, ZodJSONSchema, ZodJSONSchemaInternals, ZodRawShape, ZodSafeParseError, ZodSafeParseResult, ZodSafeParseSuccess, ZodStandardSchemaWithJSON, ZodUInt32, _ZodBigInt, _ZodBoolean, _ZodDate, _ZodNumber, _ZodType, output as infer, inferFlattenedErrors, inferFormattedError, input, output };
