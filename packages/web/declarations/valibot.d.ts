/**
 * Any schema type.
 */
type AnySchema<TOutput = any> = BaseSchema<any, TOutput> & {
    schema: 'any';
};
/**
 * Creates a any schema.
 *
 * @param pipe A validation and transformation pipe.
 *
 * @returns A any schema.
 */
declare function any(pipe?: Pipe<any>): AnySchema;

/**
 * Any schema type.
 */
type AnySchemaAsync<TOutput = any> = BaseSchemaAsync<any, TOutput> & {
    schema: 'any';
};
/**
 * Creates an async any schema.
 *
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async any schema.
 */
declare function anyAsync(pipe?: PipeAsync<any>): AnySchemaAsync;

/**
 * Array path item type.
 */
type ArrayPathItem = {
    schema: 'array';
    input: any[];
    key: number;
    value: any;
};
/**
 * Array schema type.
 */
type ArraySchema<TArrayItem extends BaseSchema, TOutput = Output<TArrayItem>[]> = BaseSchema<Input<TArrayItem>[], TOutput> & {
    schema: 'array';
    array: {
        item: TArrayItem;
    };
};
/**
 * Creates a array schema.
 *
 * @param item The item schema.
 * @param pipe A validation and transformation pipe.
 *
 * @returns A array schema.
 */
declare function array<TArrayItem extends BaseSchema>(item: TArrayItem, pipe?: Pipe<Output<TArrayItem>[]>): ArraySchema<TArrayItem>;
/**
 * Creates a array schema.
 *
 * @param item The item schema.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns A array schema.
 */
declare function array<TArrayItem extends BaseSchema>(item: TArrayItem, error?: string, pipe?: Pipe<Output<TArrayItem>[]>): ArraySchema<TArrayItem>;

/**
 * Array schema async type.
 */
type ArraySchemaAsync<TArrayItem extends BaseSchema | BaseSchemaAsync, TOutput = Output<TArrayItem>[]> = BaseSchemaAsync<Input<TArrayItem>[], TOutput> & {
    schema: 'array';
    array: {
        item: TArrayItem;
    };
};
/**
 * Creates an async array schema.
 *
 * @param item The item schema.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async array schema.
 */
declare function arrayAsync<TArrayItem extends BaseSchema | BaseSchemaAsync>(item: TArrayItem, pipe?: PipeAsync<Output<TArrayItem>[]>): ArraySchemaAsync<TArrayItem>;
/**
 * Creates an async array schema.
 *
 * @param item The item schema.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async array schema.
 */
declare function arrayAsync<TArrayItem extends BaseSchema | BaseSchemaAsync>(item: TArrayItem, error?: string, pipe?: PipeAsync<Output<TArrayItem>[]>): ArraySchemaAsync<TArrayItem>;

/**
 * Bigint schema type.
 */
type BigintSchema<TOutput = bigint> = BaseSchema<bigint, TOutput> & {
    schema: 'bigint';
};
/**
 * Creates a bigint schema.
 *
 * @param pipe A validation and transformation pipe.
 *
 * @returns A bigint schema.
 */
declare function bigint(pipe?: Pipe<bigint>): BigintSchema;
/**
 * Creates a bigint schema.
 *
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns A bigint schema.
 */
declare function bigint(error?: string, pipe?: Pipe<bigint>): BigintSchema;

/**
 * Bigint schema async type.
 */
type BigintSchemaAsync<TOutput = bigint> = BaseSchemaAsync<bigint, TOutput> & {
    schema: 'bigint';
};
/**
 * Creates an async bigint schema.
 *
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async bigint schema.
 */
declare function bigintAsync(pipe?: PipeAsync<bigint>): BigintSchemaAsync;
/**
 * Creates an async bigint schema.
 *
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async bigint schema.
 */
declare function bigintAsync(error?: string, pipe?: PipeAsync<bigint>): BigintSchemaAsync;

/**
 * Blob schema type.
 */
type BlobSchema<TOutput = Blob> = BaseSchema<Blob, TOutput> & {
    schema: 'blob';
};
/**
 * Creates a blob schema.
 *
 * @param pipe A validation and transformation pipe.
 *
 * @returns A blob schema.
 */
declare function blob(pipe?: Pipe<Blob>): BlobSchema;
/**
 * Creates a blob schema.
 *
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns A blob schema.
 */
declare function blob(error?: string, pipe?: Pipe<Blob>): BlobSchema;

/**
 * Blob schema async type.
 */
type BlobSchemaAsync<TOutput = Blob> = BaseSchemaAsync<Blob, TOutput> & {
    schema: 'blob';
};
/**
 * Creates an async blob schema.
 *
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async blob schema.
 */
declare function blobAsync(pipe?: PipeAsync<Blob>): BlobSchemaAsync;
/**
 * Creates an async blob schema.
 *
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async blob schema.
 */
declare function blobAsync(error?: string, pipe?: PipeAsync<Blob>): BlobSchemaAsync;

/**
 * Boolean schema type.
 */
type BooleanSchema<TOutput = boolean> = BaseSchema<boolean, TOutput> & {
    schema: 'boolean';
};
/**
 * Creates a boolean schema.
 *
 * @param pipe A validation and transformation pipe.
 *
 * @returns A boolean schema.
 */
declare function boolean(pipe?: Pipe<boolean>): BooleanSchema;
/**
 * Creates a boolean schema.
 *
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns A boolean schema.
 */
declare function boolean(error?: string, pipe?: Pipe<boolean>): BooleanSchema;

/**
 * Boolean schema async type.
 */
type BooleanSchemaAsync<TOutput = boolean> = BaseSchemaAsync<boolean, TOutput> & {
    schema: 'boolean';
};
/**
 * Creates an async boolean schema.
 *
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async boolean schema.
 */
declare function booleanAsync(pipe?: PipeAsync<boolean>): BooleanSchemaAsync;
/**
 * Creates an async boolean schema.
 *
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async boolean schema.
 */
declare function booleanAsync(error?: string, pipe?: PipeAsync<boolean>): BooleanSchemaAsync;

/**
 * Date schema type.
 */
type DateSchema<TOutput = Date> = BaseSchema<Date, TOutput> & {
    schema: 'date';
};
/**
 * Creates a date schema.
 *
 * @param pipe A validation and transformation pipe.
 *
 * @returns A date schema.
 */
declare function date(pipe?: Pipe<Date>): DateSchema;
/**
 * Creates a date schema.
 *
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns A date schema.
 */
declare function date(error?: string, pipe?: Pipe<Date>): DateSchema;

/**
 * Date schema async type.
 */
type DateSchemaAsync<TOutput = Date> = BaseSchemaAsync<Date, TOutput> & {
    schema: 'date';
};
/**
 * Creates an async date schema.
 *
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async date schema.
 */
declare function dateAsync(pipe?: PipeAsync<Date>): DateSchemaAsync;
/**
 * Creates an async date schema.
 *
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async date schema.
 */
declare function dateAsync(error?: string, pipe?: PipeAsync<Date>): DateSchemaAsync;

/**
 * Enum value type.
 */
type EnumValue = Readonly<[string, ...string[]]>;
/**
 * Enum schema type.
 */
type EnumSchema<TEnumValue extends EnumValue, TOutput = TEnumValue[number]> = BaseSchema<TEnumValue[number], TOutput> & {
    schema: 'enum';
    enum: TEnumValue;
};
/**
 * Creates a enum schema.
 *
 * @param enum The enum value.
 * @param error The error message.
 *
 * @returns A enum schema.
 */
declare function enumType<TEnumValue extends EnumValue>(enumValue: TEnumValue, error?: string): EnumSchema<TEnumValue>;

/**
 * Enum schema async type.
 */
type EnumSchemaAsync<TEnumValue extends EnumValue, TOutput = TEnumValue[number]> = BaseSchemaAsync<TEnumValue[number], TOutput> & {
    schema: 'enum';
    enum: TEnumValue;
};
/**
 * Creates an async enum schema.
 *
 * @param enum The enum value.
 * @param error The error message.
 *
 * @returns An async enum schema.
 */
declare function enumTypeAsync<TEnumValue extends EnumValue>(enumValue: TEnumValue, error?: string): EnumSchemaAsync<TEnumValue>;

/**
 * Class enum type.
 */
type Class = abstract new (...args: any) => any;
/**
 * Instance schema type.
 */
type InstanceSchema<TClass extends Class, TOutput = InstanceType<TClass>> = BaseSchema<InstanceType<TClass>, TOutput> & {
    schema: 'instance';
    class: TClass;
};
/**
 * Creates an instance schema.
 *
 * @param of The class of the instance.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An instance schema.
 */
declare function instance<TClass extends Class>(of: TClass, pipe?: Pipe<InstanceType<TClass>>): InstanceSchema<TClass>;
/**
 * Creates an instance schema.
 *
 * @param of The class of the instance.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An instance schema.
 */
declare function instance<TClass extends Class>(of: TClass, error?: string, pipe?: Pipe<InstanceType<TClass>>): InstanceSchema<TClass>;

/**
 * Instance schema type.
 */
type InstanceSchemaAsync<TClass extends Class, TOutput = InstanceType<TClass>> = BaseSchemaAsync<InstanceType<TClass>, TOutput> & {
    schema: 'instance';
    class: TClass;
};
/**
 * Creates an async instance schema.
 *
 * @param of The class of the instance.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async instance schema.
 */
declare function instanceAsync<TClass extends Class>(of: TClass, pipe?: PipeAsync<InstanceType<TClass>>): InstanceSchemaAsync<TClass>;
/**
 * Creates an async instance schema.
 *
 * @param of The class of the instance.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async instance schema.
 */
declare function instanceAsync<TClass extends Class>(of: TClass, error?: string, pipe?: PipeAsync<InstanceType<TClass>>): InstanceSchemaAsync<TClass>;

/**
 * Literal schema type.
 */
type LiteralSchema<TLiteralValue extends string | number, TOutput = TLiteralValue> = BaseSchema<TLiteralValue, TOutput> & {
    schema: 'literal';
    literal: TLiteralValue;
};
/**
 * Creates a literal schema.
 *
 * @param literal The literal value.
 * @param error The error message.
 *
 * @returns A literal schema.
 */
declare function literal<TLiteral extends string | number>(literal: TLiteral, error?: string): LiteralSchema<TLiteral>;

/**
 * Literal schema async type.
 */
type LiteralSchemaAsync<TLiteralValue extends string | number, TOutput = TLiteralValue> = BaseSchemaAsync<TLiteralValue, TOutput> & {
    schema: 'literal';
    literal: TLiteralValue;
};
/**
 * Creates an async literal schema.
 *
 * @param literal The literal value.
 * @param error The error message.
 *
 * @returns An async literal schema.
 */
declare function literalAsync<TLiteral extends string | number>(literal: TLiteral, error?: string): LiteralSchemaAsync<TLiteral>;

/**
 * Map path item type.
 */
type MapPathItem = {
    schema: 'map';
    input: Map<any, any>;
    key: any;
    value: any;
};
/**
 * Map input inference type.
 */
type MapInput<TMapKey extends BaseSchema | BaseSchemaAsync, TMapValue extends BaseSchema | BaseSchemaAsync> = Map<Input<TMapKey>, Input<TMapValue>>;
/**
 * Map output inference type.
 */
type MapOutput<TMapKey extends BaseSchema | BaseSchemaAsync, TMapValue extends BaseSchema | BaseSchemaAsync> = Map<Output<TMapKey>, Output<TMapValue>>;

/**
 * Map schema type.
 */
type MapSchema<TMapKey extends BaseSchema, TMapValue extends BaseSchema, TOutput = MapOutput<TMapKey, TMapValue>> = BaseSchema<MapInput<TMapKey, TMapValue>, TOutput> & {
    schema: 'map';
    map: {
        key: TMapKey;
        value: TMapValue;
    };
};
/**
 * Creates a map schema.
 *
 * @param key The key schema.
 * @param value The value schema.
 * @param pipe A validation and transformation pipe.
 *
 * @returns A map schema.
 */
declare function map<TMapKey extends BaseSchema, TMapValue extends BaseSchema>(key: TMapKey, value: TMapValue, pipe?: Pipe<MapOutput<TMapKey, TMapValue>>): MapSchema<TMapKey, TMapValue>;
/**
 * Creates a map schema.
 *
 * @param key The key schema.
 * @param value The value schema.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns A map schema.
 */
declare function map<TMapKey extends BaseSchema, TMapValue extends BaseSchema>(key: TMapKey, value: TMapValue, error?: string, pipe?: Pipe<MapOutput<TMapKey, TMapValue>>): MapSchema<TMapKey, TMapValue>;

/**
 * Map schema async type.
 */
type MapSchemaAsync<TMapKey extends BaseSchema | BaseSchemaAsync, TMapValue extends BaseSchema | BaseSchemaAsync, TOutput = MapOutput<TMapKey, TMapValue>> = BaseSchemaAsync<MapInput<TMapKey, TMapValue>, TOutput> & {
    schema: 'map';
    map: {
        key: TMapKey;
        value: TMapValue;
    };
};
/**
 * Creates an async map schema.
 *
 * @param key The key schema.
 * @param value The value schema.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async map schema.
 */
declare function mapAsync<TMapKey extends BaseSchema | BaseSchemaAsync, TMapValue extends BaseSchema | BaseSchemaAsync>(key: TMapKey, value: TMapValue, pipe?: PipeAsync<MapOutput<TMapKey, TMapValue>>): MapSchemaAsync<TMapKey, TMapValue>;
/**
 * Creates an async map schema.
 *
 * @param key The key schema.
 * @param value The value schema.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async map schema.
 */
declare function mapAsync<TMapKey extends BaseSchema | BaseSchemaAsync, TMapValue extends BaseSchema | BaseSchemaAsync>(key: TMapKey, value: TMapValue, error?: string, pipe?: PipeAsync<MapOutput<TMapKey, TMapValue>>): MapSchemaAsync<TMapKey, TMapValue>;

/**
 * NaN schema type.
 */
type NanSchema<TOutput = number> = BaseSchema<number, TOutput> & {
    schema: 'nan';
};
/**
 * Creates a NaN schema.
 *
 * @param error The error message.
 *
 * @returns A NaN schema.
 */
declare function nan(error?: string): NanSchema;

/**
 * NaN schema async type.
 */
type NanSchemaAsync<TOutput = number> = BaseSchemaAsync<number, TOutput> & {
    schema: 'nan';
};
/**
 * Creates an async NaN schema.
 *
 * @param error The error message.
 *
 * @returns An async NaN schema.
 */
declare function nanAsync(error?: string): NanSchemaAsync;

/**
 * Native enum type.
 */
type NativeEnum = {
    [key: string]: string | number;
    [key: number]: string;
};
/**
 * Native enum schema type.
 */
type NativeEnumSchema<TNativeEnum extends NativeEnum, TOutput = TNativeEnum[keyof TNativeEnum]> = BaseSchema<TNativeEnum[keyof TNativeEnum], TOutput> & {
    schema: 'native_enum';
    nativeEnum: TNativeEnum;
};
/**
 * Creates a enum schema.
 *
 * @param nativeEnum The native enum value.
 * @param error The error message.
 *
 * @returns A enum schema.
 */
declare function nativeEnum<TNativeEnum extends NativeEnum>(nativeEnum: TNativeEnum, error?: string): NativeEnumSchema<TNativeEnum>;

/**
 * Native enum schema async type.
 */
type NativeEnumSchemaAsync<TNativeEnum extends NativeEnum, TOutput = TNativeEnum[keyof TNativeEnum]> = BaseSchemaAsync<TNativeEnum[keyof TNativeEnum], TOutput> & {
    schema: 'native_enum';
    nativeEnum: TNativeEnum;
};
/**
 * Creates an async enum schema.
 *
 * @param nativeEnum The native enum value.
 * @param error The error message.
 *
 * @returns An async enum schema.
 */
declare function nativeEnumAsync<TNativeEnum extends NativeEnum>(nativeEnum: TNativeEnum, error?: string): NativeEnumSchemaAsync<TNativeEnum>;

/**
 * Never schema type.
 */
type NeverSchema = BaseSchema<never> & {
    schema: 'never';
};
/**
 * Creates a never schema.
 *
 * @param error The error message.
 *
 * @returns A never schema.
 */
declare function never(error?: string): NeverSchema;

/**
 * Never schema async type.
 */
type NeverSchemaAsync = BaseSchemaAsync<never> & {
    schema: 'never';
};
/**
 * Creates an async never schema.
 *
 * @param error The error message.
 *
 * @returns An async never schema.
 */
declare function neverAsync(error?: string): NeverSchemaAsync;

/**
 * Non nullable type.
 */
type NonNullable$1<T> = T extends null ? never : T;
/**
 * Non nullable schema type.
 */
type NonNullableSchema<TWrappedSchema extends BaseSchema, TOutput = NonNullable$1<Output<TWrappedSchema>>> = BaseSchema<NonNullable$1<Input<TWrappedSchema>>, TOutput> & {
    schema: 'non_nullable';
    wrapped: TWrappedSchema;
};
/**
 * Creates a non nullable schema.
 *
 * @param wrapped The wrapped schema.
 * @param error The error message.
 *
 * @returns A non nullable schema.
 */
declare function nonNullable<TWrappedSchema extends BaseSchema>(wrapped: TWrappedSchema, error?: string): NonNullableSchema<TWrappedSchema>;

/**
 * Non nullable schema async type.
 */
type NonNullableSchemaAsync<TWrappedSchema extends BaseSchema | BaseSchemaAsync, TOutput = NonNullable$1<Output<TWrappedSchema>>> = BaseSchemaAsync<NonNullable$1<Input<TWrappedSchema>>, TOutput> & {
    schema: 'non_nullable';
    wrapped: TWrappedSchema;
};
/**
 * Creates an async non nullable schema.
 *
 * @param wrapped The wrapped schema.
 * @param error The error message.
 *
 * @returns An async non nullable schema.
 */
declare function nonNullableAsync<TWrappedSchema extends BaseSchema | BaseSchemaAsync>(wrapped: TWrappedSchema, error?: string): NonNullableSchemaAsync<TWrappedSchema>;

/**
 * Non nullish type.
 */
type NonNullish<T> = T extends null | undefined ? never : T;
/**
 * Non nullish schema type.
 */
type NonNullishSchema<TWrappedSchema extends BaseSchema, TOutput = NonNullish<Output<TWrappedSchema>>> = BaseSchema<NonNullish<Input<TWrappedSchema>>, TOutput> & {
    schema: 'non_nullish';
    wrapped: TWrappedSchema;
};
/**
 * Creates a non nullish schema.
 *
 * @param wrapped The wrapped schema.
 * @param error The error message.
 *
 * @returns A non nullish schema.
 */
declare function nonNullish<TWrappedSchema extends BaseSchema>(wrapped: TWrappedSchema, error?: string): NonNullishSchema<TWrappedSchema>;

/**
 * Non nullish schema async type.
 */
type NonNullishSchemaAsync<TWrappedSchema extends BaseSchema | BaseSchemaAsync, TOutput = NonNullish<Output<TWrappedSchema>>> = BaseSchemaAsync<NonNullish<Input<TWrappedSchema>>, TOutput> & {
    schema: 'non_nullish';
    wrapped: TWrappedSchema;
};
/**
 * Creates an async non nullish schema.
 *
 * @param wrapped The wrapped schema.
 * @param error The error message.
 *
 * @returns An async non nullish schema.
 */
declare function nonNullishAsync<TWrappedSchema extends BaseSchema | BaseSchemaAsync>(wrapped: TWrappedSchema, error?: string): NonNullishSchemaAsync<TWrappedSchema>;

/**
 * Non optional type.
 */
type NonOptional<T> = T extends undefined ? never : T;
/**
 * Non optional schema type.
 */
type NonOptionalSchema<TWrappedSchema extends BaseSchema, TOutput = NonOptional<Output<TWrappedSchema>>> = BaseSchema<NonOptional<Input<TWrappedSchema>>, TOutput> & {
    schema: 'non_optional';
    wrapped: TWrappedSchema;
};
/**
 * Creates a non optional schema.
 *
 * @param wrapped The wrapped schema.
 * @param error The error message.
 *
 * @returns A non optional schema.
 */
declare function nonOptional<TWrappedSchema extends BaseSchema>(wrapped: TWrappedSchema, error?: string): NonOptionalSchema<TWrappedSchema>;

/**
 * Non optional schema async type.
 */
type NonOptionalSchemaAsync<TWrappedSchema extends BaseSchema | BaseSchemaAsync, TOutput = NonOptional<Output<TWrappedSchema>>> = BaseSchemaAsync<NonOptional<Input<TWrappedSchema>>, TOutput> & {
    schema: 'non_optional';
    wrapped: TWrappedSchema;
};
/**
 * Creates an async non optional schema.
 *
 * @param wrapped The wrapped schema.
 * @param error The error message.
 *
 * @returns An async non optional schema.
 */
declare function nonOptionalAsync<TWrappedSchema extends BaseSchema | BaseSchemaAsync>(wrapped: TWrappedSchema, error?: string): NonOptionalSchemaAsync<TWrappedSchema>;

/**
 * Nullable schema type.
 */
type NullableSchema<TWrappedSchema extends BaseSchema, TOutput = Output<TWrappedSchema> | null> = BaseSchema<Input<TWrappedSchema> | null, TOutput> & {
    schema: 'nullable';
    wrapped: TWrappedSchema;
};
/**
 * Creates a nullable schema.
 *
 * @param wrapped The wrapped schema.
 *
 * @returns A nullable schema.
 */
declare function nullable<TWrappedSchema extends BaseSchema>(wrapped: TWrappedSchema): NullableSchema<TWrappedSchema>;

/**
 * Nullable schema async type.
 */
type NullableSchemaAsync<TWrappedSchema extends BaseSchema | BaseSchemaAsync, TOutput = Output<TWrappedSchema> | null> = BaseSchemaAsync<Input<TWrappedSchema> | null, TOutput> & {
    schema: 'nullable';
    wrapped: TWrappedSchema;
};
/**
 * Creates an async nullable schema.
 *
 * @param wrapped The wrapped schema.
 *
 * @returns An async nullable schema.
 */
declare function nullableAsync<TWrappedSchema extends BaseSchema | BaseSchemaAsync>(wrapped: TWrappedSchema): NullableSchemaAsync<TWrappedSchema>;

/**
 * Nullish schema type.
 */
type NullishSchema<TWrappedSchema extends BaseSchema, TOutput = Output<TWrappedSchema> | null | undefined> = BaseSchema<Input<TWrappedSchema> | null | undefined, TOutput> & {
    schema: 'nullish';
    wrapped: TWrappedSchema;
};
/**
 * Creates a nullish schema.
 *
 * @param wrapped The wrapped schema.
 *
 * @returns A nullish schema.
 */
declare function nullish<TWrappedSchema extends BaseSchema>(wrapped: TWrappedSchema): NullishSchema<TWrappedSchema>;

/**
 * Nullish schema async type.
 */
type NullishSchemaAsync<TWrappedSchema extends BaseSchema | BaseSchemaAsync, TOutput = Output<TWrappedSchema> | null | undefined> = BaseSchemaAsync<Input<TWrappedSchema> | null | undefined, TOutput> & {
    schema: 'nullish';
    wrapped: TWrappedSchema;
};
/**
 * Creates an async nullish schema.
 *
 * @param wrapped The wrapped schema.
 *
 * @returns An async nullish schema.
 */
declare function nullishAsync<TWrappedSchema extends BaseSchema | BaseSchemaAsync>(wrapped: TWrappedSchema): NullishSchemaAsync<TWrappedSchema>;

/**
 * Null schema type.
 */
type NullSchema<TOutput = null> = BaseSchema<null, TOutput> & {
    schema: 'null';
};
/**
 * Creates a null schema.
 *
 * @param error The error message.
 *
 * @returns A null schema.
 */
declare function nullType(error?: string): NullSchema;

/**
 * Null schema async type.
 */
type NullSchemaAsync<TOutput = null> = BaseSchemaAsync<null, TOutput> & {
    schema: 'null';
};
/**
 * Creates an async null schema.
 *
 * @param error The error message.
 *
 * @returns An async null schema.
 */
declare function nullTypeAsync(error?: string): NullSchemaAsync;

/**
 * Number schema type.
 */
type NumberSchema<TOutput = number> = BaseSchema<number, TOutput> & {
    schema: 'number';
};
/**
 * Creates a number schema.
 *
 * @param pipe A validation and transformation pipe.
 *
 * @returns A number schema.
 */
declare function number(pipe?: Pipe<number>): NumberSchema;
/**
 * Creates a number schema.
 *
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns A number schema.
 */
declare function number(error?: string, pipe?: Pipe<number>): NumberSchema;

/**
 * Number schema async type.
 */
type NumberSchemaAsync<TOutput = number> = BaseSchemaAsync<number, TOutput> & {
    schema: 'number';
};
/**
 * Creates an async number schema.
 *
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async number schema.
 */
declare function numberAsync(pipe?: PipeAsync<number>): NumberSchemaAsync;
/**
 * Creates an async number schema.
 *
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async number schema.
 */
declare function numberAsync(error?: string, pipe?: PipeAsync<number>): NumberSchemaAsync;

/**
 * Object shape async type.
 */
type ObjectShapeAsync = Record<string, BaseSchema<any> | BaseSchemaAsync<any>>;
/**
 * Object schema async type.
 */
type ObjectSchemaAsync<TObjectShape extends ObjectShapeAsync, TOutput = ObjectOutput<TObjectShape>> = BaseSchemaAsync<ObjectInput<TObjectShape>, TOutput> & {
    schema: 'object';
    object: TObjectShape;
};
/**
 * Creates an async object schema.
 *
 * @param object The object schema.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async object schema.
 */
declare function objectAsync<TObjectShape extends ObjectShapeAsync>(object: TObjectShape, pipe?: PipeAsync<ObjectOutput<TObjectShape>>): ObjectSchemaAsync<TObjectShape>;
/**
 * Creates an async object schema.
 *
 * @param object The object schema.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async object schema.
 */
declare function objectAsync<TObjectShape extends ObjectShapeAsync>(object: TObjectShape, error?: string, pipe?: PipeAsync<ObjectOutput<TObjectShape>>): ObjectSchemaAsync<TObjectShape>;

/**
 * Object path item type.
 */
type ObjectPathItem = {
    schema: 'object';
    input: Record<string, any>;
    key: string;
    value: any;
};
/**
 * Required object keys type.
 */
type RequiredKeys<TObject extends object> = {
    [TKey in keyof TObject]: undefined extends TObject[TKey] ? never : TKey;
}[keyof TObject];
/**
 * Optional object keys type.
 */
type OptionalKeys<TObject extends object> = {
    [TKey in keyof TObject]: undefined extends TObject[TKey] ? TKey : never;
}[keyof TObject];
/**
 * Object with question marks type.
 */
type WithQuestionMarks<TObject extends object> = Pick<TObject, RequiredKeys<TObject>> & Partial<Pick<TObject, OptionalKeys<TObject>>>;
/**
 * Object input inference type.
 */
type ObjectInput<TObjectShape extends ObjectShape | ObjectShapeAsync> = ResolveObject<WithQuestionMarks<{
    [TKey in keyof TObjectShape]: Input<TObjectShape[TKey]>;
}>>;
/**
 * Object output inference type.
 */
type ObjectOutput<TObjectShape extends ObjectShape | ObjectShapeAsync> = ResolveObject<WithQuestionMarks<{
    [TKey in keyof TObjectShape]: Output<TObjectShape[TKey]>;
}>>;

/**
 * Object shape type.
 */
type ObjectShape = Record<string, BaseSchema<any>>;
/**
 * Object schema type.
 */
type ObjectSchema<TObjectShape extends ObjectShape, TOutput = ObjectOutput<TObjectShape>> = BaseSchema<ObjectInput<TObjectShape>, TOutput> & {
    schema: 'object';
    object: TObjectShape;
};
/**
 * Creates an object schema.
 *
 * @param object The object schema.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An object schema.
 */
declare function object<TObjectShape extends ObjectShape>(object: TObjectShape, pipe?: Pipe<ObjectOutput<TObjectShape>>): ObjectSchema<TObjectShape>;
/**
 * Creates an object schema.
 *
 * @param object The object schema.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An object schema.
 */
declare function object<TObjectShape extends ObjectShape>(object: TObjectShape, error?: string, pipe?: Pipe<ObjectOutput<TObjectShape>>): ObjectSchema<TObjectShape>;

/**
 * Optional schema type.
 */
type OptionalSchema<TWrappedSchema extends BaseSchema, TOutput = Output<TWrappedSchema> | undefined> = BaseSchema<Input<TWrappedSchema> | undefined, TOutput> & {
    schema: 'optional';
    wrapped: TWrappedSchema;
};
/**
 * Creates a optional schema.
 *
 * @param wrapped The wrapped schema.
 *
 * @returns A optional schema.
 */
declare function optional<TWrappedSchema extends BaseSchema>(wrapped: TWrappedSchema): OptionalSchema<TWrappedSchema>;

/**
 * Optional schema async type.
 */
type OptionalSchemaAsync<TWrappedSchema extends BaseSchema | BaseSchemaAsync, TOutput = Output<TWrappedSchema> | undefined> = BaseSchemaAsync<Input<TWrappedSchema> | undefined, TOutput> & {
    schema: 'optional';
    wrapped: TWrappedSchema;
};
/**
 * Creates an async optional schema.
 *
 * @param wrapped The wrapped schema.
 *
 * @returns An async optional schema.
 */
declare function optionalAsync<TWrappedSchema extends BaseSchema | BaseSchemaAsync>(wrapped: TWrappedSchema): OptionalSchemaAsync<TWrappedSchema>;

/**
 * String schema type.
 */
type StringSchema<TOutput = string> = BaseSchema<string, TOutput> & {
    schema: 'string';
};
/**
 * Creates a string schema.
 *
 * @param pipe A validation and transformation pipe.
 *
 * @returns A string schema.
 */
declare function string(pipe?: Pipe<string>): StringSchema;
/**
 * Creates a string schema.
 *
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns A string schema.
 */
declare function string(error?: string, pipe?: Pipe<string>): StringSchema;

/**
 * String schema async type.
 */
type StringSchemaAsync<TOutput = string> = BaseSchemaAsync<string, TOutput> & {
    schema: 'string';
};
/**
 * Creates an async string schema.
 *
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async string schema.
 */
declare function stringAsync(pipe?: PipeAsync<string>): StringSchemaAsync;
/**
 * Creates an async string schema.
 *
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async string schema.
 */
declare function stringAsync(error?: string, pipe?: PipeAsync<string>): StringSchemaAsync;

/**
 * Record key type.
 */
type RecordKeyAsync = StringSchema<string | number | symbol> | StringSchemaAsync<string | number | symbol>;
/**
 * Record schema async type.
 */
type RecordSchemaAsync<TRecordValue extends BaseSchema | BaseSchemaAsync, TRecordKey extends RecordKeyAsync = StringSchema, TOutput = RecordOutput<TRecordKey, TRecordValue>> = BaseSchemaAsync<RecordInput<TRecordKey, TRecordValue>, TOutput> & {
    schema: 'record';
    record: {
        key: TRecordKey;
        value: TRecordValue;
    };
};
/**
 * Creates an async record schema.
 *
 * @param value The value schema.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async record schema.
 */
declare function recordAsync<TRecordValue extends BaseSchema | BaseSchemaAsync>(value: TRecordValue, pipe?: PipeAsync<RecordOutput<StringSchema, TRecordValue>>): RecordSchemaAsync<TRecordValue>;
/**
 * Creates an async record schema.
 *
 * @param value The value schema.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async record schema.
 */
declare function recordAsync<TRecordValue extends BaseSchema | BaseSchemaAsync>(value: TRecordValue, error?: string, pipe?: PipeAsync<RecordOutput<StringSchema, TRecordValue>>): RecordSchemaAsync<TRecordValue>;
/**
 * Creates an async record schema.
 *
 * @param key The key schema.
 * @param value The value schema.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async record schema.
 */
declare function recordAsync<TRecordKey extends RecordKeyAsync, TRecordValue extends BaseSchema | BaseSchemaAsync>(key: TRecordKey, value: TRecordValue, pipe?: PipeAsync<RecordOutput<TRecordKey, TRecordValue>>): RecordSchemaAsync<TRecordValue, TRecordKey>;
/**
 * Creates an async record schema.
 *
 * @param key The key schema.
 * @param value The value schema.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async record schema.
 */
declare function recordAsync<TRecordKey extends RecordKeyAsync, TRecordValue extends BaseSchema | BaseSchemaAsync>(key: TRecordKey, value: TRecordValue, error?: string, pipe?: PipeAsync<RecordOutput<TRecordKey, TRecordValue>>): RecordSchemaAsync<TRecordValue, TRecordKey>;

/**
 * Record path item type.
 */
type RecordPathItem = {
    schema: 'record';
    input: Record<string | number | symbol, any>;
    key: string | number | symbol;
    value: any;
};
/**
 * Record input inference type.
 */
type RecordInput<TRecordKey extends RecordKey | RecordKeyAsync, TRecordValue extends BaseSchema | BaseSchemaAsync> = ResolveObject<Record<Input<TRecordKey>, Input<TRecordValue>>>;
/**
 * Record output inference type.
 */
type RecordOutput<TRecordKey extends RecordKey | RecordKeyAsync, TRecordValue extends BaseSchema | BaseSchemaAsync> = ResolveObject<Record<Output<TRecordKey>, Output<TRecordValue>>>;

/**
 * Record key type.
 */
type RecordKey = StringSchema<string | number | symbol>;
/**
 * Record schema type.
 */
type RecordSchema<TRecordValue extends BaseSchema, TRecordKey extends RecordKey = StringSchema, TOutput = RecordOutput<TRecordKey, TRecordValue>> = BaseSchema<RecordInput<TRecordKey, TRecordValue>, TOutput> & {
    schema: 'record';
    record: {
        key: TRecordKey;
        value: TRecordValue;
    };
};
/**
 * Creates a record schema.
 *
 * @param value The value schema.
 * @param pipe A validation and transformation pipe.
 *
 * @returns A record schema.
 */
declare function record<TRecordValue extends BaseSchema>(value: TRecordValue, pipe?: Pipe<RecordOutput<StringSchema, TRecordValue>>): RecordSchema<TRecordValue>;
/**
 * Creates a record schema.
 *
 * @param value The value schema.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns A record schema.
 */
declare function record<TRecordValue extends BaseSchema>(value: TRecordValue, error?: string, pipe?: Pipe<RecordOutput<StringSchema, TRecordValue>>): RecordSchema<TRecordValue>;
/**
 * Creates a record schema.
 *
 * @param key The key schema.
 * @param value The value schema.
 * @param pipe A validation and transformation pipe.
 *
 * @returns A record schema.
 */
declare function record<TRecordKey extends RecordKey, TRecordValue extends BaseSchema>(key: TRecordKey, value: TRecordValue, pipe?: Pipe<RecordOutput<TRecordKey, TRecordValue>>): RecordSchema<TRecordValue, TRecordKey>;
/**
 * Creates a record schema.
 *
 * @param key The key schema.
 * @param value The value schema.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns A record schema.
 */
declare function record<TRecordKey extends RecordKey, TRecordValue extends BaseSchema>(key: TRecordKey, value: TRecordValue, error?: string, pipe?: Pipe<RecordOutput<TRecordKey, TRecordValue>>): RecordSchema<TRecordValue, TRecordKey>;

/**
 * Recursive schema type.
 */
type RecursiveSchema<TSchemaGetter extends () => BaseSchema, TOutput = Output<ReturnType<TSchemaGetter>>> = BaseSchema<Input<ReturnType<TSchemaGetter>>, TOutput> & {
    schema: 'recursive';
    getter: TSchemaGetter;
};
/**
 * Creates a recursive schema.
 *
 * @param getter The schema getter.
 *
 * @returns A recursive schema.
 */
declare function recursive<TSchemaGetter extends () => BaseSchema>(getter: TSchemaGetter): RecursiveSchema<TSchemaGetter>;

/**
 * Recursive schema async type.
 */
type RecursiveSchemaAsync<TSchemaGetter extends () => BaseSchema | BaseSchemaAsync, TOutput = Output<ReturnType<TSchemaGetter>>> = BaseSchemaAsync<Input<ReturnType<TSchemaGetter>>, TOutput> & {
    schema: 'recursive';
    getter: TSchemaGetter;
};
/**
 * Creates an async recursive schema.
 *
 * @param getter The schema getter.
 *
 * @returns An async recursive schema.
 */
declare function recursiveAsync<TSchemaGetter extends () => BaseSchema | BaseSchemaAsync>(getter: TSchemaGetter): RecursiveSchemaAsync<TSchemaGetter>;

/**
 * Set path item type.
 */
type SetPathItem = {
    schema: 'set';
    input: Set<any>;
    key: number;
    value: any;
};
/**
 * Set output inference type.
 */
type SetInput<TSetValue extends BaseSchema | BaseSchemaAsync> = Set<Input<TSetValue>>;
/**
 * Set output inference type.
 */
type SetOutput<TSetValue extends BaseSchema | BaseSchemaAsync> = Set<Output<TSetValue>>;

/**
 * Set schema type.
 */
type SetSchema<TSetValue extends BaseSchema, TOutput = SetOutput<TSetValue>> = BaseSchema<SetInput<TSetValue>, TOutput> & {
    schema: 'set';
    set: {
        value: TSetValue;
    };
};
/**
 * Creates a set schema.
 *
 * @param value The value schema.
 * @param pipe A validation and transformation pipe.
 *
 * @returns A set schema.
 */
declare function set<TSetValue extends BaseSchema>(value: TSetValue, pipe?: Pipe<SetOutput<TSetValue>>): SetSchema<TSetValue>;
/**
 * Creates a set schema.
 *
 * @param value The value schema.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns A set schema.
 */
declare function set<TSetValue extends BaseSchema>(value: TSetValue, error?: string, pipe?: Pipe<SetOutput<TSetValue>>): SetSchema<TSetValue>;

/**
 * Set schema async type.
 */
type SetSchemaAsync<TSetValue extends BaseSchema | BaseSchemaAsync, TOutput = SetOutput<TSetValue>> = BaseSchemaAsync<SetInput<TSetValue>, TOutput> & {
    schema: 'set';
    set: {
        value: TSetValue;
    };
};
/**
 * Creates an async set schema.
 *
 * @param value The value schema.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async set schema.
 */
declare function setAsync<TSetValue extends BaseSchema | BaseSchemaAsync>(value: TSetValue, pipe?: PipeAsync<SetOutput<TSetValue>>): SetSchemaAsync<TSetValue>;
/**
 * Creates an async set schema.
 *
 * @param value The value schema.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async set schema.
 */
declare function setAsync<TSetValue extends BaseSchema | BaseSchemaAsync>(value: TSetValue, error?: string, pipe?: PipeAsync<SetOutput<TSetValue>>): SetSchemaAsync<TSetValue>;

/**
 * Special schema type.
 */
type SpecialSchema<TInput, TOutput = TInput> = BaseSchema<TInput, TOutput> & {
    schema: 'special';
};
/**
 * Creates a special schema.
 *
 * @param check The type check function.
 * @param pipe A validation and transformation pipe.
 *
 * @returns A special schema.
 */
declare function special<TInput>(check: (input: unknown) => boolean, pipe?: Pipe<TInput>): SpecialSchema<TInput>;
/**
 * Creates a special schema.
 *
 * @param check The type check function.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns A special schema.
 */
declare function special<TInput>(check: (input: unknown) => boolean, error?: string, pipe?: Pipe<TInput>): SpecialSchema<TInput>;

/**
 * Special schema async type.
 */
type SpecialSchemaAsync<TInput, TOutput = TInput> = BaseSchemaAsync<TInput, TOutput> & {
    schema: 'special';
};
/**
 * Creates an async special schema.
 *
 * @param check The type check function.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async special schema.
 */
declare function specialAsync<TInput>(check: (input: unknown) => boolean | Promise<boolean>, pipe?: PipeAsync<TInput>): SpecialSchemaAsync<TInput>;
/**
 * Creates a special schema.
 *
 * @param check The type check function.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns A special schema.
 */
declare function specialAsync<TInput>(check: (input: unknown) => boolean | Promise<boolean>, error?: string, pipe?: PipeAsync<TInput>): SpecialSchemaAsync<TInput>;

/**
 * Symbol schema type.
 */
type SymbolSchema<TOutput = symbol> = BaseSchema<symbol, TOutput> & {
    schema: 'symbol';
};
/**
 * Creates a symbol schema.
 *
 * @param error The error message.
 *
 * @returns A symbol schema.
 */
declare function symbol(error?: string): SymbolSchema;

/**
 * Symbol schema async type.
 */
type SymbolSchemaAsync<TOutput = symbol> = BaseSchemaAsync<symbol, TOutput> & {
    schema: 'symbol';
};
/**
 * Creates an async symbol schema.
 *
 * @param error The error message.
 *
 * @returns An async symbol schema.
 */
declare function symbolAsync(error?: string): SymbolSchemaAsync;

/**
 * Tuple shape async type.
 */
type TupleShapeAsync = [
    BaseSchema | BaseSchemaAsync,
    ...(BaseSchema[] | BaseSchemaAsync[])
];
/**
 * Tuple schema async type.
 */
type TupleSchemaAsync<TTupleItems extends TupleShapeAsync, TTupleRest extends BaseSchema | BaseSchemaAsync | undefined = undefined, TOutput = TupleOutput<TTupleItems, TTupleRest>> = BaseSchemaAsync<TupleInput<TTupleItems, TTupleRest>, TOutput> & {
    schema: 'tuple';
    tuple: {
        items: TTupleItems;
        rest: TTupleRest;
    };
};
/**
 * Creates an async tuple schema.
 *
 * @param items The items schema.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async tuple schema.
 */
declare function tupleAsync<TTupleItems extends TupleShapeAsync, TTupleRest extends BaseSchema | BaseSchemaAsync | undefined = undefined>(items: TTupleItems, pipe?: PipeAsync<TupleOutput<TTupleItems, TTupleRest>>): TupleSchemaAsync<TTupleItems, TTupleRest>;
/**
 * Creates an async tuple schema.
 *
 * @param items The items schema.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async tuple schema.
 */
declare function tupleAsync<TTupleItems extends TupleShapeAsync, TTupleRest extends BaseSchema | BaseSchemaAsync | undefined = undefined>(items: TTupleItems, error?: string, pipe?: PipeAsync<TupleOutput<TTupleItems, TTupleRest>>): TupleSchemaAsync<TTupleItems, TTupleRest>;
/**
 * Creates an async tuple schema.
 *
 * @param items The items schema.
 * @param rest The rest schema.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async tuple schema.
 */
declare function tupleAsync<TTupleItems extends TupleShapeAsync, TTupleRest extends BaseSchema | BaseSchemaAsync | undefined = undefined>(items: TTupleItems, rest: TTupleRest, pipe?: PipeAsync<TupleOutput<TTupleItems, TTupleRest>>): TupleSchemaAsync<TTupleItems, TTupleRest>;
/**
 * Creates an async tuple schema.
 *
 * @param items The items schema.
 * @param rest The rest schema.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async tuple schema.
 */
declare function tupleAsync<TTupleItems extends TupleShapeAsync, TTupleRest extends BaseSchema | BaseSchemaAsync | undefined = undefined>(items: TTupleItems, rest: TTupleRest, error?: string, pipe?: PipeAsync<TupleOutput<TTupleItems, TTupleRest>>): TupleSchemaAsync<TTupleItems, TTupleRest>;

/**
 * Tuple path item type.
 */
type TuplePathItem = {
    schema: 'tuple';
    input: [any, ...any[]];
    key: number;
    value: any;
};
/**
 * Tuple input inference type.
 */
type TupleInput<TTupleItems extends TupleShape | TupleShapeAsync, TTupleRest extends BaseSchema | BaseSchemaAsync | undefined> = TTupleRest extends BaseSchema | BaseSchemaAsync ? [
    ...{
        [TKey in keyof TTupleItems]: Input<TTupleItems[TKey]>;
    },
    ...Input<TTupleRest>[]
] : {
    [TKey in keyof TTupleItems]: Input<TTupleItems[TKey]>;
};
/**
 * Tuple with rest output inference type.
 */
type TupleOutput<TTupleItems extends TupleShape | TupleShapeAsync, TTupleRest extends BaseSchema | BaseSchemaAsync | undefined> = TTupleRest extends BaseSchema | BaseSchemaAsync ? [
    ...{
        [TKey in keyof TTupleItems]: Output<TTupleItems[TKey]>;
    },
    ...Output<TTupleRest>[]
] : {
    [TKey in keyof TTupleItems]: Output<TTupleItems[TKey]>;
};

/**
 * Tuple shape type.
 */
type TupleShape = [BaseSchema, ...BaseSchema[]];
/**
 * Tuple schema type.
 */
type TupleSchema<TTupleItems extends TupleShape, TTupleRest extends BaseSchema | undefined = undefined, TOutput = TupleOutput<TTupleItems, TTupleRest>> = BaseSchema<TupleInput<TTupleItems, TTupleRest>, TOutput> & {
    schema: 'tuple';
    tuple: {
        items: TTupleItems;
        rest: TTupleRest;
    };
};
/**
 * Creates a tuple schema.
 *
 * @param items The items schema.
 * @param pipe A validation and transformation pipe.
 *
 * @returns A tuple schema.
 */
declare function tuple<TTupleItems extends TupleShape, TTupleRest extends BaseSchema | undefined = undefined>(items: TTupleItems, pipe?: Pipe<TupleOutput<TTupleItems, TTupleRest>>): TupleSchema<TTupleItems, TTupleRest>;
/**
 * Creates a tuple schema.
 *
 * @param items The items schema.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns A tuple schema.
 */
declare function tuple<TTupleItems extends TupleShape, TTupleRest extends BaseSchema | undefined = undefined>(items: TTupleItems, error?: string, pipe?: Pipe<TupleOutput<TTupleItems, TTupleRest>>): TupleSchema<TTupleItems, TTupleRest>;
/**
 * Creates a tuple schema.
 *
 * @param items The items schema.
 * @param rest The rest schema.
 * @param pipe A validation and transformation pipe.
 *
 * @returns A tuple schema.
 */
declare function tuple<TTupleItems extends TupleShape, TTupleRest extends BaseSchema | undefined = undefined>(items: TTupleItems, rest: TTupleRest, pipe?: Pipe<TupleOutput<TTupleItems, TTupleRest>>): TupleSchema<TTupleItems, TTupleRest>;
/**
 * Creates a tuple schema.
 *
 * @param items The items schema.
 * @param rest The rest schema.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns A tuple schema.
 */
declare function tuple<TTupleItems extends TupleShape, TTupleRest extends BaseSchema | undefined = undefined>(items: TTupleItems, rest: TTupleRest, error?: string, pipe?: Pipe<TupleOutput<TTupleItems, TTupleRest>>): TupleSchema<TTupleItems, TTupleRest>;

/**
 * Undefined schema type.
 */
type UndefinedSchema<TOutput = undefined> = BaseSchema<undefined, TOutput> & {
    schema: 'undefined';
};
/**
 * Creates a undefined schema.
 *
 * @param error The error message.
 *
 * @returns A undefined schema.
 */
declare function undefinedType(error?: string): UndefinedSchema;

/**
 * Undefined schema async type.
 */
type UndefinedSchemaAsync<TOutput = undefined> = BaseSchemaAsync<undefined, TOutput> & {
    schema: 'undefined';
};
/**
 * Creates an async undefined schema.
 *
 * @param error The error message.
 *
 * @returns An async undefined schema.
 */
declare function undefinedTypeAsync(error?: string): UndefinedSchemaAsync;

/**
 * Union options type.
 */
type UnionOptions = [
    BaseSchema<any>,
    BaseSchema<any>,
    ...BaseSchema<any>[]
];
/**
 * Union schema type.
 */
type UnionSchema<TUnionOptions extends UnionOptions, TOutput = Output<TUnionOptions[number]>> = BaseSchema<Input<TUnionOptions[number]>, TOutput> & {
    schema: 'union';
    union: TUnionOptions;
};
/**
 * Creates a union schema.
 *
 * @param union The union schema.
 * @param error The error message.
 *
 * @returns A union schema.
 */
declare function union<TUnionOptions extends UnionOptions>(union: TUnionOptions, error?: string): UnionSchema<TUnionOptions>;

/**
 * Union options async type.
 */
type UnionOptionsAsync = [
    BaseSchema | BaseSchemaAsync,
    BaseSchema | BaseSchemaAsync,
    ...(BaseSchema[] | BaseSchemaAsync[])
];
/**
 * Union schema async type.
 */
type UnionSchemaAsync<TUnionOptions extends UnionOptionsAsync, TOutput = Output<TUnionOptions[number]>> = BaseSchemaAsync<Input<TUnionOptions[number]>, TOutput> & {
    schema: 'union';
    union: TUnionOptions;
};
/**
 * Creates an async union schema.
 *
 * @param union The union schema.
 * @param error The error message.
 *
 * @returns An async union schema.
 */
declare function unionAsync<TUnionOptions extends UnionOptionsAsync>(union: TUnionOptions, error?: string): UnionSchemaAsync<TUnionOptions>;

/**
 * Unknown schema type.
 */
type UnknownSchema<TOutput = unknown> = BaseSchema<unknown, TOutput> & {
    schema: 'unknown';
};
/**
 * Creates a unknown schema.
 *
 * @param pipe A validation and transformation pipe.
 *
 * @returns A unknown schema.
 */
declare function unknown(pipe?: Pipe<unknown>): UnknownSchema;

/**
 * Unknown schema async type.
 */
type UnknownSchemaAsync<TOutput = unknown> = BaseSchemaAsync<unknown, TOutput> & {
    schema: 'unknown';
};
/**
 * Creates an async unknown schema.
 *
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async unknown schema.
 */
declare function unknownAsync(pipe?: PipeAsync<unknown>): UnknownSchemaAsync;

/**
 * Void schema type.
 */
type VoidSchema<TOutput = void> = BaseSchema<void, TOutput> & {
    schema: 'void';
};
/**
 * Creates a void schema.
 *
 * @param error The error message.
 *
 * @returns A void schema.
 */
declare function voidType(error?: string): VoidSchema;

/**
 * Void schema async type.
 */
type VoidSchemaAsync<TOutput = void> = BaseSchemaAsync<void, TOutput> & {
    schema: 'void';
};
/**
 * Creates an async void schema.
 *
 * @param error The error message.
 *
 * @returns An async void schema.
 */
declare function voidTypeAsync(error?: string): VoidSchemaAsync;

/**
 * Parse info type.
 */
type ParseInfo = Partial<Pick<Issue, 'origin' | 'path' | 'abortEarly' | 'abortPipeEarly'>>;
/**
 * Validate info type.
 */
type ValidateInfo = ParseInfo & Pick<Issue, 'reason'>;
/**
 * Path item type.
 */
type PathItem = ObjectPathItem | RecordPathItem | TuplePathItem | MapPathItem | SetPathItem | ArrayPathItem;
/**
 * Base schema type.
 */
type BaseSchema<TInput = any, TOutput = TInput> = {
    async: false;
    parse(input: unknown, info?: ParseInfo): TOutput;
    types?: {
        input: TInput;
        output: TOutput;
    };
};
/**
 * Base schema async type.
 */
type BaseSchemaAsync<TInput = any, TOutput = TInput> = {
    async: true;
    parse(input: unknown, info?: ParseInfo): Promise<TOutput>;
    types?: {
        input: TInput;
        output: TOutput;
    };
};
/**
 * Input inference type.
 */
type Input<TSchema extends BaseSchema | BaseSchemaAsync> = NonNullable<TSchema['types']>['input'];
/**
 * Output inference type.
 */
type Output<TSchema extends BaseSchema | BaseSchemaAsync> = NonNullable<TSchema['types']>['output'];
/**
 * Validation and transformation pipe type.
 */
type Pipe<TValue> = ((value: TValue, info: ValidateInfo) => TValue)[];
/**
 * Async validation and transformation pipe type.
 */
type PipeAsync<TValue> = ((value: TValue, info: ValidateInfo) => TValue | Promise<TValue>)[];
/**
 * Resolve type.
 *
 * Hint: This type has no effect and is only used so that TypeScript displays
 * the final type in the preview instead of the utility types used.
 */
type Resolve<T> = T;
/**
 * Resolve object type.
 *
 * Hint: This type has no effect and is only used so that TypeScript displays
 * the final type in the preview instead of the utility types used.
 */
type ResolveObject<T> = Resolve<{
    [k in keyof T]: T[k];
}>;

/**
 * Issue reason type.
 */
type IssueReason = 'type' | 'string' | 'number' | 'bigint' | 'blob' | 'boolean' | 'any' | 'unknown' | 'date' | 'array' | 'tuple' | 'map' | 'object' | 'record' | 'set' | 'special' | 'instance';
/**
 * Issue type.
 */
type Issue = {
    reason: IssueReason;
    validation: string;
    origin: 'key' | 'value';
    message: string;
    input: any;
    path?: PathItem[];
    issues?: Issues;
    abortEarly?: boolean;
    abortPipeEarly?: boolean;
};
/**
 * Issues type.
 */
type Issues = [Issue, ...Issue[]];
/**
 * A Valibot error with useful information.
 */
declare class ValiError extends Error {
    issues: Issues;
    /**
     * Creates a Valibot error with useful information.
     *
     * @param issues The error issues.
     */
    constructor(issues: Issues);
}

/**
 * Flat errors type.
 */
type FlatErrors = {
    root?: [string, ...string[]];
    nested: Partial<Record<string, [string, ...string[]]>>;
};
/**
 * Flatten the error messages of a Vali error.
 *
 * @param error A Vali error.
 *
 * @returns Flat errors.
 */
declare function flatten(error: ValiError): FlatErrors;

/**
 * Coerces the input of a schema to match the required type.
 *
 * @param schema The affected schema.
 * @param action The coerceation action.
 *
 * @returns The passed schema.
 */
declare function coerce<TSchema extends BaseSchema>(schema: TSchema, action: (value: unknown) => Input<TSchema>): TSchema;

/**
 * Coerces the input of a async schema to match the required type.
 *
 * @param schema The affected schema.
 * @param action The coerceation action.
 *
 * @returns The passed schema.
 */
declare function coerceAsync<TSchema extends BaseSchemaAsync>(schema: TSchema, action: (value: unknown) => Input<TSchema> | Promise<Input<TSchema>>): TSchema;

/**
 * Checks if the input matches the scheme. By using a type predicate, this
 * function can be used as a type guard.
 *
 * @param schema The schema to be used.
 * @param input The input to be tested.
 *
 * @returns Whether the input matches the scheme.
 */
declare function is<TSchema extends BaseSchema>(schema: TSchema, input: unknown): input is Input<TSchema>;

/**
 * Converts union to intersection types.
 */
type UnionToIntersection<T> = (T extends never ? never : (arg: T) => never) extends (arg: infer U) => never ? U : never;
/**
 * Converts union to tuple types.
 */
type UnionToTuple<T> = UnionToIntersection<T extends never ? never : () => T> extends () => infer W ? [...UnionToTuple<Exclude<T, W>>, W] : [];
/**
 * Returns a tuple or never type.
 */
type TupleOrNever<T> = T extends [string, ...string[]] ? T : never;
/**
 * Creates a enum schema of object keys.
 *
 * @param schema The object schema.
 *
 * @returns A enum schema.
 */
declare function keyof<TSchema extends ObjectSchema<any> | ObjectSchemaAsync<any>>(schema: TSchema): EnumSchema<TupleOrNever<UnionToTuple<keyof TSchema['object']>>>;

/**
 * Merges schema objects types.
 */
type MergeSchemaObjects<TObjectSchemas extends (ObjectSchema<any> | ObjectSchemaAsync<any>)[]> = TObjectSchemas extends [infer TFirstObjectSchema] ? TFirstObjectSchema extends ObjectSchema<any> | ObjectSchemaAsync<any> ? TFirstObjectSchema['object'] : never : TObjectSchemas extends [
    infer TFirstObjectSchema,
    ...infer TRestObjectSchemas
] ? TFirstObjectSchema extends ObjectSchema<any> | ObjectSchemaAsync<any> ? TRestObjectSchemas extends (ObjectSchema<any> | ObjectSchemaAsync<any>)[] ? {
    [TKey in Exclude<keyof TFirstObjectSchema['object'], keyof MergeSchemaObjects<TRestObjectSchemas>>]: TFirstObjectSchema['object'][TKey];
} & MergeSchemaObjects<TRestObjectSchemas> : never : never : never;

/**
 * Object schemas type.
 */
type ObjectSchemas$1 = [
    ObjectSchema<any>,
    ObjectSchema<any>,
    ...ObjectSchema<any>[]
];
/**
 * Merges multiple object schemas into a single one. Subsequent object schemas
 * overwrite the previous ones.
 *
 * @param schemas The schemas to be merged.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An object schema.
 */
declare function merge<TObjectSchemas extends ObjectSchemas$1>(schemas: TObjectSchemas, pipe?: Pipe<ObjectOutput<MergeSchemaObjects<TObjectSchemas>>>): ObjectSchema<MergeSchemaObjects<TObjectSchemas>>;
/**
 * Merges multiple object schemas into a single one. Subsequent object schemas
 * overwrite the previous ones.
 *
 * @param schemas The schemas to be merged.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An object schema.
 */
declare function merge<TObjectSchemas extends ObjectSchemas$1>(schemas: TObjectSchemas, error?: string, pipe?: Pipe<ObjectOutput<MergeSchemaObjects<TObjectSchemas>>>): ObjectSchema<MergeSchemaObjects<TObjectSchemas>>;

/**
 * Object schemas type.
 */
type ObjectSchemas = [
    ObjectSchema<any> | ObjectSchemaAsync<any>,
    ObjectSchema<any> | ObjectSchemaAsync<any>,
    ...(ObjectSchema<any> | ObjectSchemaAsync<any>)[]
];
/**
 * Merges multiple async object schemas into a single one. Subsequent object
 * schemas overwrite the previous ones.
 *
 * @param schemas The schemas to be merged.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async object schema.
 */
declare function mergeAsync<TObjectSchemas extends ObjectSchemas>(schemas: TObjectSchemas, pipe?: PipeAsync<ObjectOutput<MergeSchemaObjects<TObjectSchemas>>>): ObjectSchemaAsync<MergeSchemaObjects<TObjectSchemas>>;
/**
 * Merges multiple async object schemas into a single one. Subsequent object
 * schemas overwrite the previous ones.
 *
 * @param schemas The schemas to be merged.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async object schema.
 */
declare function mergeAsync<TObjectSchemas extends ObjectSchemas>(schemas: TObjectSchemas, error?: string, pipe?: PipeAsync<ObjectOutput<MergeSchemaObjects<TObjectSchemas>>>): ObjectSchemaAsync<MergeSchemaObjects<TObjectSchemas>>;

/**
 * Object keys type.
 */
type ObjectKeys<TObjectSchema extends ObjectSchema<any> | ObjectSchemaAsync<any>> = [keyof TObjectSchema['object'], ...(keyof TObjectSchema['object'])[]];

/**
 * Creates an object schema that contains not the selected keys of an existing
 * schema.
 *
 * @param schema The schema to omit from.
 * @param keys The selected keys
 * @param pipe A validation and transformation pipe.
 *
 * @returns An object schema.
 */
declare function omit<TObjectSchema extends ObjectSchema<any>, TKeys extends ObjectKeys<TObjectSchema>>(schema: TObjectSchema, keys: TKeys, pipe?: Pipe<ObjectOutput<Omit<TObjectSchema['object'], TKeys[number]>>>): ObjectSchema<Omit<TObjectSchema['object'], TKeys[number]>>;
/**
 * Creates an object schema that contains not the selected keys of an existing
 * schema.
 *
 * @param schema The schema to omit from.
 * @param keys The selected keys
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An object schema.
 */
declare function omit<TObjectSchema extends ObjectSchema<any>, TKeys extends ObjectKeys<TObjectSchema>>(schema: TObjectSchema, keys: TKeys, error?: string, pipe?: Pipe<ObjectOutput<Omit<TObjectSchema['object'], TKeys[number]>>>): ObjectSchema<Omit<TObjectSchema['object'], TKeys[number]>>;

/**
 * Creates an async object schema that contains only the selected keys of an
 * existing schema.
 *
 * @param schema The schema to omit from.
 * @param keys The selected keys
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async object schema.
 */
declare function omitAsync<TObjectSchema extends ObjectSchema<any> | ObjectSchemaAsync<any>, TKeys extends ObjectKeys<TObjectSchema>>(schema: TObjectSchema, keys: TKeys, pipe?: PipeAsync<ObjectOutput<Omit<TObjectSchema['object'], TKeys[number]>>>): ObjectSchemaAsync<Omit<TObjectSchema['object'], TKeys[number]>>;
/**
 * Creates an async object schema that contains only the selected keys of an
 * existing schema.
 *
 * @param schema The schema to omit from.
 * @param keys The selected keys
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async object schema.
 */
declare function omitAsync<TObjectSchema extends ObjectSchema<any> | ObjectSchemaAsync<any>, TKeys extends ObjectKeys<TObjectSchema>>(schema: TObjectSchema, keys: TKeys, error?: string, pipe?: PipeAsync<ObjectOutput<Omit<TObjectSchema['object'], TKeys[number]>>>): ObjectSchemaAsync<Omit<TObjectSchema['object'], TKeys[number]>>;

/**
 * Parses unknown input based on a schema.
 *
 * @param schema The schema to be used.
 * @param input The input to be parsed.
 * @param info The optional parse info.
 *
 * @returns The parsed output.
 */
declare function parse<TSchema extends BaseSchema>(schema: TSchema, input: unknown, info?: Pick<ParseInfo, 'abortEarly' | 'abortPipeEarly'>): Output<TSchema>;

/**
 * Parses unknown input based on a schema.
 *
 * @param schema The schema to be used.
 * @param input The input to be parsed.
 * @param info The optional parse info.
 *
 * @returns The parsed output.
 */
declare function parseAsync<TSchema extends BaseSchema | BaseSchemaAsync>(schema: TSchema, input: unknown, info?: Pick<ParseInfo, 'abortEarly' | 'abortPipeEarly'>): Promise<Output<TSchema>>;

/**
 * Partial object schema type.
 */
type Partial$2<TObjectShape extends ObjectShape> = {
    [TKey in keyof TObjectShape]: OptionalSchema<TObjectShape[TKey]>;
};
/**
 * Creates an object schema consisting of all properties of an existing object
 * schema set to optional.
 *
 * @param schema The affected schema.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An object schema.
 */
declare function partial<TObjectSchema extends ObjectSchema<any>>(schema: TObjectSchema, pipe?: Pipe<ObjectOutput<Partial$2<TObjectSchema['object']>>>): ObjectSchema<Partial$2<TObjectSchema['object']>>;
/**
 * Creates an object schema consisting of all properties of an existing object
 * schema set to optional.
 *
 * @param schema The affected schema.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An object schema.
 */
declare function partial<TObjectSchema extends ObjectSchema<any>>(schema: TObjectSchema, error?: string, pipe?: Pipe<ObjectOutput<Partial$2<TObjectSchema['object']>>>): ObjectSchema<Partial$2<TObjectSchema['object']>>;

/**
 * Partial object schema type.
 */
type Partial$1<TObjectShape extends ObjectShapeAsync> = {
    [TKey in keyof TObjectShape]: OptionalSchemaAsync<TObjectShape[TKey]>;
};
/**
 * Creates an async object schema consisting of all properties of an existing
 * object schema set to optional.
 *
 * @param schema The affected schema.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async object schema.
 */
declare function partialAsync<TObjectSchema extends ObjectSchema<any> | ObjectSchemaAsync<any>>(schema: TObjectSchema, pipe?: Pipe<ObjectOutput<Partial$1<TObjectSchema['object']>>>): ObjectSchemaAsync<Partial$1<TObjectSchema['object']>>;
/**
 * Creates an async object schema consisting of all properties of an existing
 * object schema set to optional.
 *
 * @param schema The affected schema.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async object schema.
 */
declare function partialAsync<TObjectSchema extends ObjectSchema<any> | ObjectSchemaAsync<any>>(schema: TObjectSchema, error?: string, pipe?: Pipe<ObjectOutput<Partial$1<TObjectSchema['object']>>>): ObjectSchemaAsync<Partial$1<TObjectSchema['object']>>;

/**
 * Creates an object schema that contains only the selected keys of an existing
 * schema.
 *
 * @param schema The schema to pick from.
 * @param keys The selected keys
 * @param pipe A validation and transformation pipe.
 *
 * @returns An object schema.
 */
declare function pick<TObjectSchema extends ObjectSchema<any>, TKeys extends (keyof TObjectSchema['object'])[]>(schema: TObjectSchema, keys: TKeys, pipe?: Pipe<ObjectOutput<Pick<TObjectSchema['object'], TKeys[number]>>>): ObjectSchema<Pick<TObjectSchema['object'], TKeys[number]>>;
/**
 * Creates an object schema that contains only the selected keys of an existing
 * schema.
 *
 * @param schema The schema to pick from.
 * @param keys The selected keys
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An object schema.
 */
declare function pick<TObjectSchema extends ObjectSchema<any>, TKeys extends (keyof TObjectSchema['object'])[]>(schema: TObjectSchema, keys: TKeys, error?: string, pipe?: Pipe<ObjectOutput<Pick<TObjectSchema['object'], TKeys[number]>>>): ObjectSchema<Pick<TObjectSchema['object'], TKeys[number]>>;

/**
 * Creates an async object schema that contains only the selected keys of an
 * existing schema.
 *
 * @param schema The schema to pick from.
 * @param keys The selected keys
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async object schema.
 */
declare function pickAsync<TObjectSchema extends ObjectSchema<any> | ObjectSchemaAsync<any>, TKeys extends (keyof TObjectSchema['object'])[]>(schema: TObjectSchema, keys: TKeys, pipe?: PipeAsync<ObjectOutput<Pick<TObjectSchema['object'], TKeys[number]>>>): ObjectSchemaAsync<Pick<TObjectSchema['object'], TKeys[number]>>;
/**
 * Creates an async object schema that contains only the selected keys of an
 * existing schema.
 *
 * @param schema The schema to pick from.
 * @param keys The selected keys
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async object schema.
 */
declare function pickAsync<TObjectSchema extends ObjectSchema<any> | ObjectSchemaAsync<any>, TKeys extends (keyof TObjectSchema['object'])[]>(schema: TObjectSchema, keys: TKeys, error?: string, pipe?: PipeAsync<ObjectOutput<Pick<TObjectSchema['object'], TKeys[number]>>>): ObjectSchemaAsync<Pick<TObjectSchema['object'], TKeys[number]>>;

/**
 * Required object schema type.
 */
type Required$1<TObjectShape extends ObjectShape> = {
    [TKey in keyof TObjectShape]: NonOptionalSchema<TObjectShape[TKey]>;
};
/**
 * Creates an object schema consisting of all properties of an existing object
 * schema set to none optional.
 *
 * @param schema The affected schema.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An object schema.
 */
declare function required<TObjectSchema extends ObjectSchema<any>>(schema: TObjectSchema, pipe?: Pipe<ObjectOutput<Required$1<TObjectSchema['object']>>>): ObjectSchema<Required$1<TObjectSchema['object']>>;
/**
 * Creates an object schema consisting of all properties of an existing object
 * schema set to none optional.
 *
 * @param schema The affected schema.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An object schema.
 */
declare function required<TObjectSchema extends ObjectSchema<any>>(schema: TObjectSchema, error?: string, pipe?: Pipe<ObjectOutput<Required$1<TObjectSchema['object']>>>): ObjectSchema<Required$1<TObjectSchema['object']>>;

/**
 * Required object schema type.
 */
type Required<TObjectShape extends ObjectShapeAsync> = {
    [TKey in keyof TObjectShape]: NonOptionalSchemaAsync<TObjectShape[TKey]>;
};
/**
 * Creates an async object schema consisting of all properties of an existing
 * object schema set to none optional.
 *
 * @param schema The affected schema.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async object schema.
 */
declare function requiredAsync<TObjectSchema extends ObjectSchema<any> | ObjectSchemaAsync<any>>(schema: TObjectSchema, pipe?: Pipe<ObjectOutput<Required<TObjectSchema['object']>>>): ObjectSchemaAsync<Required<TObjectSchema['object']>>;
/**
 * Creates an async object schema consisting of all properties of an existing
 * object schema set to none optional.
 *
 * @param schema The affected schema.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async object schema.
 */
declare function requiredAsync<TObjectSchema extends ObjectSchema<any> | ObjectSchemaAsync<any>>(schema: TObjectSchema, error?: string, pipe?: Pipe<ObjectOutput<Required<TObjectSchema['object']>>>): ObjectSchemaAsync<Required<TObjectSchema['object']>>;

/**
 * Parses unknown input based on a schema.
 *
 * @param schema The schema to be used.
 * @param input The input to be parsed.
 * @param info The optional parse info.
 *
 * @returns The parsed output.
 */
declare function safeParse<TSchema extends BaseSchema>(schema: TSchema, input: unknown, info?: Pick<ParseInfo, 'abortEarly' | 'abortPipeEarly'>): {
    success: true;
    data: Output<TSchema>;
} | {
    success: false;
    error: ValiError;
};

/**
 * Parses unknown input based on a schema.
 *
 * @param schema The schema to be used.
 * @param input The input to be parsed.
 * @param info The optional parse info.
 *
 * @returns The parsed output.
 */
declare function safeParseAsync<TSchema extends BaseSchema | BaseSchemaAsync>(schema: TSchema, input: unknown, info?: Pick<ParseInfo, 'abortEarly' | 'abortPipeEarly'>): Promise<{
    success: true;
    data: Output<TSchema>;
} | {
    success: false;
    error: ValiError;
}>;

/**
 * Creates a strict object schema that throws an error if an input contains
 * unknown keys.
 *
 * @param schema A object schema.
 * @param error The error message.
 *
 * @returns A strict object schema.
 */
declare function strict<TSchema extends ObjectSchema<any>>(schema: TSchema, error?: string): TSchema;

/**
 * Creates a strict async object schema that throws an error if an input
 * contains unknown keys.
 *
 * @param schema A object schema.
 * @param error The error message.
 *
 * @returns A strict object schema.
 */
declare function strictAsync<TSchema extends ObjectSchemaAsync<any>>(schema: TSchema, error?: string): TSchema;

declare function transform<TSchema extends AnySchema, TOutput>(schema: TSchema, action: (value: Output<TSchema>) => TOutput): AnySchema<TOutput>;
declare function transform<TSchema extends ArraySchema<any>, TOutput>(schema: TSchema, action: (value: Output<TSchema>) => TOutput): ArraySchema<TSchema['array']['item'], TOutput>;
declare function transform<TSchema extends BigintSchema, TOutput>(schema: TSchema, action: (value: Output<TSchema>) => TOutput): BigintSchema<TOutput>;
declare function transform<TSchema extends BooleanSchema, TOutput>(schema: TSchema, action: (value: Output<TSchema>) => TOutput): BooleanSchema<TOutput>;
declare function transform<TSchema extends DateSchema, TOutput>(schema: TSchema, action: (value: Output<TSchema>) => TOutput): DateSchema<TOutput>;
declare function transform<TSchema extends EnumSchema<any>, TOutput>(schema: TSchema, action: (value: Output<TSchema>) => TOutput): EnumSchema<TSchema['enum'], TOutput>;
declare function transform<TSchema extends LiteralSchema<any>, TOutput>(schema: TSchema, action: (value: Output<TSchema>) => TOutput): LiteralSchema<TSchema['literal'], TOutput>;
declare function transform<TSchema extends MapSchema<any, any>, TOutput>(schema: TSchema, action: (value: Output<TSchema>) => TOutput): MapSchema<TSchema['map']['key'], TSchema['map']['value'], TOutput>;
declare function transform<TSchema extends NanSchema, TOutput>(schema: TSchema, action: (value: Output<TSchema>) => TOutput): NanSchema<TOutput>;
declare function transform<TSchema extends NativeEnumSchema<any>, TOutput>(schema: TSchema, action: (value: Output<TSchema>) => TOutput): NativeEnumSchema<TSchema['nativeEnum'], TOutput>;
declare function transform<TSchema extends NeverSchema>(schema: TSchema, action: (value: Output<TSchema>) => never): NeverSchema;
declare function transform<TSchema extends NonNullableSchema<any>, TOutput>(schema: TSchema, action: (value: Output<TSchema>) => TOutput): NonNullableSchema<TSchema['wrapped'], TOutput>;
declare function transform<TSchema extends NonNullishSchema<any>, TOutput>(schema: TSchema, action: (value: Output<TSchema>) => TOutput): NonNullishSchema<TSchema['wrapped'], TOutput>;
declare function transform<TSchema extends NonOptionalSchema<any>, TOutput>(schema: TSchema, action: (value: Output<TSchema>) => TOutput): NonOptionalSchema<TSchema['wrapped'], TOutput>;
declare function transform<TSchema extends NullSchema, TOutput>(schema: TSchema, action: (value: Output<TSchema>) => TOutput): NullSchema<TOutput>;
declare function transform<TSchema extends NullableSchema<any>, TOutput>(schema: TSchema, action: (value: Output<TSchema>) => TOutput): NullableSchema<TSchema['wrapped'], TOutput>;
declare function transform<TSchema extends NullishSchema<any>, TOutput>(schema: TSchema, action: (value: Output<TSchema>) => TOutput): NullishSchema<TSchema['wrapped'], TOutput>;
declare function transform<TSchema extends NumberSchema, TOutput>(schema: TSchema, action: (value: Output<TSchema>) => TOutput): NumberSchema<TOutput>;
declare function transform<TSchema extends ObjectSchema<any>, TOutput>(schema: TSchema, action: (value: Output<TSchema>) => TOutput): ObjectSchema<TSchema['object'], TOutput>;
declare function transform<TSchema extends OptionalSchema<any>, TOutput>(schema: TSchema, action: (value: Output<TSchema>) => TOutput): OptionalSchema<TSchema['wrapped'], TOutput>;
declare function transform<TSchema extends RecordSchema<any, any>, TOutput>(schema: TSchema, action: (value: Output<TSchema>) => TOutput): RecordSchema<TSchema['record']['key'], TSchema['record']['value'], TOutput>;
declare function transform<TSchema extends RecursiveSchema<any>, TOutput>(schema: TSchema, action: (value: Output<TSchema>) => TOutput): RecursiveSchema<TSchema['getter'], TOutput>;
declare function transform<TSchema extends SetSchema<any>, TOutput>(schema: TSchema, action: (value: Output<TSchema>) => TOutput): SetSchema<TSchema['set']['value'], TOutput>;
declare function transform<TSchema extends StringSchema, TOutput>(schema: TSchema, action: (value: Output<TSchema>) => TOutput): StringSchema<TOutput>;
declare function transform<TSchema extends SymbolSchema, TOutput>(schema: TSchema, action: (value: Output<TSchema>) => TOutput): SymbolSchema<TOutput>;
declare function transform<TSchema extends TupleSchema<any, any>, TOutput>(schema: TSchema, action: (value: Output<TSchema>) => TOutput): TupleSchema<TSchema['tuple']['items'], TSchema['tuple']['rest'], TOutput>;
declare function transform<TSchema extends UndefinedSchema, TOutput>(schema: TSchema, action: (value: Output<TSchema>) => TOutput): UndefinedSchema<TOutput>;
declare function transform<TSchema extends UnionSchema<any>, TOutput>(schema: TSchema, action: (value: Output<TSchema>) => TOutput): UnionSchema<TSchema['union'], TOutput>;
declare function transform<TSchema extends UnknownSchema, TOutput>(schema: TSchema, action: (value: Output<TSchema>) => TOutput): UnknownSchema<TOutput>;
declare function transform<TSchema extends VoidSchema, TOutput>(schema: TSchema, action: (value: Output<TSchema>) => TOutput): VoidSchema<TOutput>;

declare function transformAsync<TSchema extends AnySchema | AnySchemaAsync, TOutput>(schema: TSchema, action: (value: Output<TSchema>) => TOutput | Promise<TOutput>): AnySchemaAsync<TOutput>;
declare function transformAsync<TSchema extends ArraySchema<any> | ArraySchemaAsync<any>, TOutput>(schema: TSchema, action: (value: Output<TSchema>) => TOutput | Promise<TOutput>): ArraySchemaAsync<TSchema['array']['item'], TOutput>;
declare function transformAsync<TSchema extends BigintSchema | BigintSchemaAsync, TOutput>(schema: TSchema, action: (value: Output<TSchema>) => TOutput | Promise<TOutput>): BigintSchemaAsync<TOutput>;
declare function transformAsync<TSchema extends BooleanSchema | BooleanSchemaAsync, TOutput>(schema: TSchema, action: (value: Output<TSchema>) => TOutput | Promise<TOutput>): BooleanSchemaAsync<TOutput>;
declare function transformAsync<TSchema extends DateSchema | DateSchemaAsync, TOutput>(schema: TSchema, action: (value: Output<TSchema>) => TOutput | Promise<TOutput>): DateSchemaAsync<TOutput>;
declare function transformAsync<TSchema extends EnumSchema<any> | EnumSchemaAsync<any>, TOutput>(schema: TSchema, action: (value: Output<TSchema>) => TOutput | Promise<TOutput>): EnumSchemaAsync<TSchema['enum'], TOutput>;
declare function transformAsync<TSchema extends LiteralSchema<any> | LiteralSchemaAsync<any>, TOutput>(schema: TSchema, action: (value: Output<TSchema>) => TOutput | Promise<TOutput>): LiteralSchemaAsync<TSchema['literal'], TOutput>;
declare function transformAsync<TSchema extends MapSchema<any, any> | MapSchemaAsync<any, any>, TOutput>(schema: TSchema, action: (value: Output<TSchema>) => TOutput | Promise<TOutput>): MapSchemaAsync<TSchema['map']['key'], TSchema['map']['value'], TOutput>;
declare function transformAsync<TSchema extends NanSchema | NanSchemaAsync, TOutput>(schema: TSchema, action: (value: Output<TSchema>) => TOutput | Promise<TOutput>): NanSchemaAsync<TOutput>;
declare function transformAsync<TSchema extends NativeEnumSchema<any> | NativeEnumSchemaAsync<any>, TOutput>(schema: TSchema, action: (value: Output<TSchema>) => TOutput | Promise<TOutput>): NativeEnumSchemaAsync<TSchema['nativeEnum'], TOutput>;
declare function transformAsync<TSchema extends NeverSchema | NeverSchemaAsync>(schema: TSchema, action: (value: Output<TSchema>) => never): NeverSchemaAsync;
declare function transformAsync<TSchema extends NonNullableSchema<any> | NonNullableSchemaAsync<any>, TOutput>(schema: TSchema, action: (value: Output<TSchema>) => TOutput | Promise<TOutput>): NonNullableSchemaAsync<TSchema['wrapped'], TOutput>;
declare function transformAsync<TSchema extends NonNullishSchema<any> | NonNullishSchemaAsync<any>, TOutput>(schema: TSchema, action: (value: Output<TSchema>) => TOutput | Promise<TOutput>): NonNullishSchemaAsync<TSchema['wrapped'], TOutput>;
declare function transformAsync<TSchema extends NonOptionalSchema<any> | NonOptionalSchemaAsync<any>, TOutput>(schema: TSchema, action: (value: Output<TSchema>) => TOutput | Promise<TOutput>): NonOptionalSchemaAsync<TSchema['wrapped'], TOutput>;
declare function transformAsync<TSchema extends NullSchema | NullSchemaAsync, TOutput>(schema: TSchema, action: (value: Output<TSchema>) => TOutput | Promise<TOutput>): NullSchemaAsync<TOutput>;
declare function transformAsync<TSchema extends NullableSchema<any> | NullableSchemaAsync<any>, TOutput>(schema: TSchema, action: (value: Output<TSchema>) => TOutput | Promise<TOutput>): NullableSchemaAsync<TSchema['wrapped'], TOutput>;
declare function transformAsync<TSchema extends NullishSchema<any> | NullishSchemaAsync<any>, TOutput>(schema: TSchema, action: (value: Output<TSchema>) => TOutput | Promise<TOutput>): NullishSchemaAsync<TSchema['wrapped'], TOutput>;
declare function transformAsync<TSchema extends NumberSchema | NumberSchemaAsync, TOutput>(schema: TSchema, action: (value: Output<TSchema>) => TOutput | Promise<TOutput>): NumberSchemaAsync<TOutput>;
declare function transformAsync<TSchema extends ObjectSchema<any> | ObjectSchemaAsync<any>, TOutput>(schema: TSchema, action: (value: Output<TSchema>) => TOutput | Promise<TOutput>): ObjectSchemaAsync<TSchema['object'], TOutput>;
declare function transformAsync<TSchema extends OptionalSchema<any> | OptionalSchemaAsync<any>, TOutput>(schema: TSchema, action: (value: Output<TSchema>) => TOutput | Promise<TOutput>): OptionalSchemaAsync<TSchema['wrapped'], TOutput>;
declare function transformAsync<TSchema extends RecordSchema<any, any> | RecordSchemaAsync<any, any>, TOutput>(schema: TSchema, action: (value: Output<TSchema>) => TOutput | Promise<TOutput>): RecordSchemaAsync<TSchema['record']['key'], TSchema['record']['value'], TOutput>;
declare function transformAsync<TSchema extends RecursiveSchema<any> | RecursiveSchemaAsync<any>, TOutput>(schema: TSchema, action: (value: Output<TSchema>) => TOutput | Promise<TOutput>): RecursiveSchemaAsync<TSchema['getter'], TOutput>;
declare function transformAsync<TSchema extends SetSchema<any> | SetSchemaAsync<any>, TOutput>(schema: TSchema, action: (value: Output<TSchema>) => TOutput | Promise<TOutput>): SetSchemaAsync<TSchema['set']['value'], TOutput>;
declare function transformAsync<TSchema extends StringSchema | StringSchemaAsync, TOutput>(schema: TSchema, action: (value: Output<TSchema>) => TOutput | Promise<TOutput>): StringSchemaAsync<TOutput>;
declare function transformAsync<TSchema extends SymbolSchema | SymbolSchemaAsync, TOutput>(schema: TSchema, action: (value: Output<TSchema>) => TOutput | Promise<TOutput>): SymbolSchemaAsync<TOutput>;
declare function transformAsync<TSchema extends TupleSchema<any, any> | TupleSchemaAsync<any, any>, TOutput>(schema: TSchema, action: (value: Output<TSchema>) => TOutput | Promise<TOutput>): TupleSchemaAsync<TSchema['tuple']['items'], TSchema['tuple']['rest'], TOutput>;
declare function transformAsync<TSchema extends UndefinedSchema | UndefinedSchemaAsync, TOutput>(schema: TSchema, action: (value: Output<TSchema>) => TOutput | Promise<TOutput>): UndefinedSchemaAsync<TOutput>;
declare function transformAsync<TSchema extends UnionSchema<any> | UnionSchemaAsync<any>, TOutput>(schema: TSchema, action: (value: Output<TSchema>) => TOutput | Promise<TOutput>): UnionSchemaAsync<TSchema['union'], TOutput>;
declare function transformAsync<TSchema extends UnknownSchema | UnknownSchemaAsync, TOutput>(schema: TSchema, action: (value: Output<TSchema>) => TOutput | Promise<TOutput>): UnknownSchemaAsync<TOutput>;
declare function transformAsync<TSchema extends VoidSchema | VoidSchemaAsync, TOutput>(schema: TSchema, action: (value: Output<TSchema>) => TOutput | Promise<TOutput>): VoidSchemaAsync<TOutput>;

/**
 * Unwraps the wrapped schema.
 *
 * @param schema The schema to be unwrapped.
 *
 * @returns The unwrapped schema.
 */
declare function unwrap<TSchema extends OptionalSchema<any> | OptionalSchemaAsync<any> | NullableSchema<any> | NullableSchemaAsync<any> | NullishSchema<any> | NullishSchemaAsync<any> | NonOptionalSchema<any> | NonOptionalSchemaAsync<any> | NonNullableSchema<any> | NonNullableSchemaAsync<any> | NonNullishSchema<any> | NonNullishSchemaAsync<any>>(schema: TSchema): TSchema['wrapped'];

/**
 * Passes the default value to a schema in case of an undefined input.
 *
 * @param schema The affected schema.
 * @param value The default value.
 *
 * @returns The passed schema.
 */
declare function useDefault<TSchema extends BaseSchema | BaseSchemaAsync>(schema: TSchema, value: Input<TSchema>): TSchema;

/**
 * Creates a custom transformation function.
 *
 * @param action The transform action.
 *
 * @returns A transformation function.
 */
declare function toCustom<TInput>(action: (input: TInput) => TInput): (input: TInput) => TInput;

/**
 * Creates a async custom transformation function.
 *
 * @param action The transform action.
 *
 * @returns A async transformation function.
 */
declare function toCustomAsync<TInput>(action: (input: TInput) => TInput | Promise<TInput>): (input: TInput) => TInput | Promise<TInput>;

/**
 * Creates a transformation function that converts all the alphabetic
 * characters in a string to lowercase.
 *
 * @returns A transformation function.
 */
declare function toLowerCase(): (input: string) => string;

/**
 * Creates a transformation function that sets a string, number or date to a
 * maximum value.
 *
 * @param requirement The maximum value.
 *
 * @returns A transformation function.
 */
declare function toMaxValue<TInput extends string | number | bigint | Date, TRequirement extends TInput>(requirement: TRequirement): (input: TInput) => TInput;

/**
 * Creates a transformation function that sets a string, number or date to a
 * minimum value.
 *
 * @param requirement The minimum value.
 *
 * @returns A transformation function.
 */
declare function toMinValue<TInput extends string | number | bigint | Date, TRequirement extends TInput>(requirement: TRequirement): (input: TInput) => TInput;

/**
 * Creates a transformation function that removes the leading and trailing
 * white space and line terminator characters from a string.
 *
 * @returns A transformation function.
 */
declare function toTrimmed(): (input: string) => string;

/**
 * Creates a transformation function that removes the trailing white space and
 * line terminator characters from a string.
 *
 * @returns A transformation function.
 */
declare function toTrimmedEnd(): (input: string) => string;

/**
 * Creates a transformation function that removes the leading white space and
 * line terminator characters from a string.
 *
 * @returns A transformation function.
 */
declare function toTrimmedStart(): (input: string) => string;

/**
 * Creates a transformation function that converts all the alphabetic
 * characters in a string to uppercase.
 *
 * @returns A transformation function.
 */
declare function toUpperCase(): (input: string) => string;

/**
 * Executes the validation and transformation pipe.
 *
 * @param input The input value.
 * @param pipe The pipe to be executed.
 * @param info The validation info.
 *
 * @returns The output value.
 */
declare function executePipe<TValue>(input: TValue, pipe: Pipe<TValue>, info: ValidateInfo): TValue;

/**
 * Executes the async validation and transformation pipe.
 *
 * @param input The input value.
 * @param pipe The pipe to be executed.
 * @param info The validation info.
 *
 * @returns The output value.
 */
declare function executePipeAsync<TValue>(input: TValue, pipe: PipeAsync<TValue>, info: ValidateInfo): Promise<TValue>;

/**
 * Returns the current path.
 *
 * @param info The parse info.
 * @param key The current key.
 *
 * @returns The current path.
 */
declare function getCurrentPath(info: ParseInfo | undefined, item: PathItem): PathItem[];

/**
 * Returns error and pipe from dynamic arguments.
 *
 * @param arg1 First argument.
 * @param arg2 Second argument.
 *
 * @returns The error and pipe.
 */
declare function getErrorAndPipe<TPipe extends Pipe<any>>(arg1?: string | TPipe, arg2?: TPipe): {
    error: string | undefined;
    pipe: TPipe;
};

/**
 * Checks whether a string with numbers corresponds to the luhn algorithm.
 *
 * @param input The input to be checked.
 *
 * @returns Whether input is valid.
 */
declare function isLuhnAlgo(input: string): boolean;

/**
 * Creates a validation functions that validates the byte length of a string.
 *
 * @param requirement The byte length.
 * @param error The error message.
 *
 * @returns A validation function.
 */
declare function bytes<TInput extends string>(requirement: number, error?: string): (input: TInput, info: ValidateInfo) => TInput;

/**
 * Creates a custom validation function.
 *
 * @param requirement The validation function.
 * @param error The error message.
 *
 * @returns A validation function.
 */
declare function custom<TInput>(requirement: (input: TInput) => boolean, error?: string): (input: TInput, info: ValidateInfo) => TInput;

/**
 * Creates a async custom validation function.
 *
 * @param requirement The async validation function.
 * @param error The error message.
 *
 * @returns A async validation function.
 */
declare function customAsync<TInput>(requirement: (input: TInput) => Promise<boolean>, error?: string): (input: TInput, info: ValidateInfo) => Promise<TInput>;

/**
 * Creates a validation functions that validates a email.
 *
 * Hint: The regex used is not perfect, but should work for most emails.
 *
 * @param error The error message.
 *
 * @returns A validation function.
 */
declare function email<TInput extends string>(error?: string): (input: TInput, info: ValidateInfo) => TInput;

/**
 * Creates a validation functions that validates a emoji.
 *
 * @param error The error message.
 *
 * @returns A validation function.
 */
declare function emoji<TInput extends string>(error?: string): (input: TInput, info: ValidateInfo) => TInput;

/**
 * Creates a validation functions that validates the end of a string.
 *
 * @param requirement The end string.
 * @param error The error message.
 *
 * @returns A validation function.
 */
declare function endsWith<TInput extends string>(requirement: string, error?: string): (input: TInput, info: ValidateInfo) => TInput;

/**
 * Creates a validation function that checks the value for equality.
 *
 * @param requirement The required value.
 * @param error The error message.
 *
 * @returns A validation function.
 */
declare function equal<TInput extends string | number | bigint | boolean, TRequirement extends TInput>(requirement: TRequirement, error?: string): (input: TInput, info: ValidateInfo) => TInput;

/**
 * Creates a validation function that validates whether a number is finite.
 *
 * @param error The error message.
 *
 * @returns A validation function.
 */
declare function finite<TInput extends number>(error?: string): (input: TInput, info: ValidateInfo) => TInput;

/**
 * Creates a validation functions that validates a IMEI.
 *
 * Format: AA-BBBBBB-CCCCCC-D
 *
 * @param error The error message.
 *
 * @returns A validation function.
 */
declare function imei<TInput extends string>(error?: string): (input: TInput, info: ValidateInfo) => TInput;

declare function includes<TInput extends string>(requirement: string, error?: string): (input: TInput, info: ValidateInfo) => TInput;
declare function includes<TInput extends TItem[], TItem>(requirement: TItem, error?: string): (input: TInput, info: ValidateInfo) => TInput;

/**
 * Creates a validation function that validates whether a number is an integer.
 *
 * @param error The error message.
 *
 * @returns A validation function.
 */
declare function integer<TInput extends number>(error?: string): (input: TInput, info: ValidateInfo) => TInput;

/**
 * Creates a validation functions that validates a IP v4 or v6 address.
 *
 * @param error The error message.
 *
 * @returns A validation function.
 */
declare function ip<TInput extends string>(error?: string): (input: TInput, info: ValidateInfo) => TInput;

/**
 * Creates a validation functions that validates a IP v4 address.
 *
 * @param error The error message.
 *
 * @returns A validation function.
 */
declare function ipv4<TInput extends string>(error?: string): (input: TInput, info: ValidateInfo) => TInput;

/**
 * Creates a validation functions that validates a IP v6 address.
 *
 * @param error The error message.
 *
 * @returns A validation function.
 */
declare function ipv6<TInput extends string>(error?: string): (input: TInput, info: ValidateInfo) => TInput;

/**
 * Creates a validation functions that validates a date.
 *
 * Format: yyyy-mm-dd
 *
 * Hint: The regex used cannot validate the maximum number of days based on
 * year and month. For example, "2023-06-31" is valid although June has only
 * 30 days.
 *
 * @param error The error message.
 *
 * @returns A validation function.
 */
declare function isoDate<TInput extends string>(error?: string): (input: TInput, info: ValidateInfo) => TInput;

/**
 * Creates a validation functions that validates a datetime.
 *
 * Format: yyyy-mm-ddThh:mm
 *
 * Hint: The regex used cannot validate the maximum number of days based on
 * year and month. For example, "2023-06-31T00:00" is valid although June has only
 * 30 days.
 *
 * @param error The error message.
 *
 * @returns A validation function.
 */
declare function isoDateTime<TInput extends string>(error?: string): (input: TInput, info: ValidateInfo) => TInput;

/**
 * Creates a validation functions that validates a time.
 *
 * Format: hh:mm
 *
 * @param error The error message.
 *
 * @returns A validation function.
 */
declare function isoTime<TInput extends string>(error?: string): (input: TInput, info: ValidateInfo) => TInput;

/**
 * Creates a validation functions that validates a time with seconds.
 *
 * Format: hh:mm:ss
 *
 * @param error The error message.
 *
 * @returns A validation function.
 */
declare function isoTimeSecond<TInput extends string>(error?: string): (input: TInput, info: ValidateInfo) => TInput;

/**
 * Creates a validation functions that validates a timestamp.
 *
 * Format: yyyy-mm-ddThh:mm:ss.sssZ
 *
 * Hint: The regex used cannot validate the maximum number of days based on
 * year and month. For example, "2023-06-31T00:00:00.000Z" is valid although
 * June has only 30 days.
 *
 * @param error The error message.
 *
 * @returns A validation function.
 */
declare function isoTimestamp<TInput extends string>(error?: string): (input: TInput, info: ValidateInfo) => TInput;

/**
 * Creates a validation functions that validates a week.
 *
 * Format: yyyy-Www
 *
 * Hint: The regex used cannot validate the maximum number of weeks based on
 * the year. For example, "2021W53" is valid even though the year 2021 has only
 * 52 weeks.
 *
 * @param error The error message.
 *
 * @returns A validation function.
 */
declare function isoWeek<TInput extends string>(error?: string): (input: TInput, info: ValidateInfo) => TInput;

/**
 * Creates a validation functions that validates the length of a string or array.
 *
 * @param requirement The length.
 * @param error The error message.
 *
 * @returns A validation function.
 */
declare function length<TInput extends string | any[]>(requirement: number, error?: string): (input: TInput, info: ValidateInfo) => TInput;

/**
 * Creates a validation functions that validates the byte length of a string.
 *
 * @param requirement The maximum length in byte.
 * @param error The error message.
 *
 * @returns A validation function.
 */
declare function maxBytes<TInput extends string>(requirement: number, error?: string): (input: TInput, info: ValidateInfo) => TInput;

/**
 * Creates a validation functions that validates the length of a string or array.
 *
 * @param requirement The maximum length.
 * @param error The error message.
 *
 * @returns A validation function.
 */
declare function maxLength<TInput extends string | any[]>(requirement: number, error?: string): (input: TInput, info: ValidateInfo) => TInput;

/**
 * Creates a validation functions that validates the size of a map, set or blob.
 *
 * @param requirement The maximum size.
 * @param error The error message.
 *
 * @returns A validation function.
 */
declare function maxSize<TInput extends Map<any, any> | Set<any> | Blob>(requirement: number, error?: string): (input: TInput, info: ValidateInfo) => TInput;

/**
 * Creates a validation functions that validates the value of a string, number or date.
 *
 * @param requirement The maximum value.
 * @param error The error message.
 *
 * @returns A validation function.
 */
declare function maxValue<TInput extends string | number | bigint | Date, TRequirement extends TInput>(requirement: TRequirement, error?: string): (input: TInput, info: ValidateInfo) => TInput;
/**
 * See {@link maxValue}
 *
 * @deprecated Function has been renamed to `maxValue`.
 */
declare const maxRange: typeof maxValue;

/**
 * Creates a validation functions that validates the byte length of a string.
 *
 * @param requirement The minimum length in byte.
 * @param error The error message.
 *
 * @returns A validation function.
 */
declare function minBytes<TInput extends string>(requirement: number, error?: string): (input: TInput, info: ValidateInfo) => TInput;

/**
 * Creates a validation functions that validates the MIME type of a file.
 *
 * @param requirement The MIME types.
 * @param error The error message.
 *
 * @returns A validation function.
 */
declare function mimeType<TInput extends File>(requirement: `${string}/${string}`[], error?: string): (input: TInput, info: ValidateInfo) => TInput;

/**
 * Creates a validation functions that validates the length of a string or array.
 *
 * @param requirement The minimum length.
 * @param error The error message.
 *
 * @returns A validation function.
 */
declare function minLength<TInput extends string | any[]>(requirement: number, error?: string): (input: TInput, info: ValidateInfo) => TInput;

/**
 * Creates a validation functions that validates the size of a map, set or blob.
 *
 * @param requirement The minimum size.
 * @param error The error message.
 *
 * @returns A validation function.
 */
declare function minSize<TInput extends Map<any, any> | Set<any> | Blob>(requirement: number, error?: string): (input: TInput, info: ValidateInfo) => TInput;

/**
 * Creates a validation functions that validates the value of a string, number or date.
 *
 * @param requirement The minimum value.
 * @param error The error message.
 *
 * @returns A validation function.
 */
declare function minValue<TInput extends string | number | bigint | Date, TRequirement extends TInput>(requirement: TRequirement, error?: string): (input: TInput, info: ValidateInfo) => TInput;
/**
 * See {@link minValue}
 *
 * @deprecated Function has been renamed to `minValue`.
 */
declare const minRange: typeof minValue;

/**
 * Creates a validation function that validates whether a number is a multiple.
 *
 * @param requirement The divisor.
 * @param error The error message.
 *
 * @returns A validation function.
 */
declare function multipleOf<TInput extends number>(requirement: number, error?: string): (input: TInput, info: ValidateInfo) => TInput;

/**
 * Creates a validation functions that validates a string with a regex.
 *
 * @param requirement The regex pattern.
 * @param error The error message.
 *
 * @returns A validation function.
 */
declare function regex<TInput extends string>(requirement: RegExp, error?: string): (input: TInput, info: ValidateInfo) => TInput;

/**
 * Creates a validation function that validates whether a number is a safe integer.
 *
 * @param error The error message.
 *
 * @returns A validation function.
 */
declare function safeInteger<TInput extends number>(error?: string): (input: TInput, info: ValidateInfo) => TInput;

/**
 * Creates a validation functions that validates the size of a map, set or blob.
 *
 * @param requirement The size.
 * @param error The error message.
 *
 * @returns A validation function.
 */
declare function size<TInput extends Map<any, any> | Set<any> | Blob>(requirement: number, error?: string): (input: TInput, info: ValidateInfo) => TInput;

/**
 * Creates a validation functions that validates the start of a string.
 *
 * @param requirement The start string.
 * @param error The error message.
 *
 * @returns A validation function.
 */
declare function startsWith<TInput extends string>(requirement: string, error?: string): (input: TInput, info: ValidateInfo) => TInput;

/**
 * Creates a validation functions that validates a URL.
 *
 * Hint: The value is passed to the URL constructor to check if it is valid.
 * This check is not perfect. For example, values like "abc:1234" are accepted.
 *
 * @param error The error message.
 *
 * @returns A validation function.
 */
declare function url<TInput extends string>(error?: string): (input: TInput, info: ValidateInfo) => TInput;

/**
 * Creates a validation functions that validates a UUID.
 *
 * @param error The error message.
 *
 * @returns A validation function.
 */
declare function uuid<TInput extends string>(error?: string): (input: TInput, info: ValidateInfo) => TInput;

/**
 * Creates a validation functions that validates the value of a string or number.
 *
 * @param requirement The value.
 * @param error The error message.
 *
 * @returns A validation function.
 */
declare function value<TInput extends string | number | bigint, TRequirement extends TInput>(requirement: TRequirement, error?: string): (input: TInput, info: ValidateInfo) => TInput;

export { AnySchema, AnySchemaAsync, ArrayPathItem, ArraySchema, ArraySchemaAsync, BaseSchema, BaseSchemaAsync, BigintSchema, BigintSchemaAsync, BlobSchema, BlobSchemaAsync, BooleanSchema, BooleanSchemaAsync, Class, DateSchema, DateSchemaAsync, EnumSchema, EnumSchemaAsync, EnumValue, FlatErrors, Input, InstanceSchema, InstanceSchemaAsync, Issue, IssueReason, Issues, LiteralSchema, LiteralSchemaAsync, MapInput, MapOutput, MapPathItem, MapSchema, MapSchemaAsync, NanSchema, NanSchemaAsync, NativeEnum, NativeEnumSchema, NativeEnumSchemaAsync, NeverSchema, NeverSchemaAsync, NonNullable$1 as NonNullable, NonNullableSchema, NonNullableSchemaAsync, NonNullish, NonNullishSchema, NonNullishSchemaAsync, NonOptional, NonOptionalSchema, NonOptionalSchemaAsync, NullSchema, NullSchemaAsync, NullableSchema, NullableSchemaAsync, NullishSchema, NullishSchemaAsync, NumberSchema, NumberSchemaAsync, ObjectInput, ObjectOutput, ObjectPathItem, ObjectSchema, ObjectSchemaAsync, ObjectShape, ObjectShapeAsync, OptionalSchema, OptionalSchemaAsync, Output, ParseInfo, PathItem, Pipe, PipeAsync, RecordInput, RecordKey, RecordKeyAsync, RecordOutput, RecordPathItem, RecordSchema, RecordSchemaAsync, RecursiveSchema, RecursiveSchemaAsync, ResolveObject, SetInput, SetOutput, SetPathItem, SetSchema, SetSchemaAsync, SpecialSchema, SpecialSchemaAsync, StringSchema, StringSchemaAsync, SymbolSchema, SymbolSchemaAsync, TupleInput, TupleOutput, TuplePathItem, TupleSchema, TupleSchemaAsync, TupleShape, TupleShapeAsync, UndefinedSchema, UndefinedSchemaAsync, UnionOptions, UnionOptionsAsync, UnionSchema, UnionSchemaAsync, UnknownSchema, UnknownSchemaAsync, ValiError, ValidateInfo, VoidSchema, VoidSchemaAsync, any, anyAsync, array, arrayAsync, bigint, bigintAsync, blob, blobAsync, boolean, booleanAsync, bytes, coerce, coerceAsync, custom, customAsync, date, dateAsync, email, emoji, endsWith, enumType, enumTypeAsync, equal, executePipe, executePipeAsync, finite, flatten, getCurrentPath, getErrorAndPipe, imei, includes, instance, instanceAsync, integer, ip, ipv4, ipv6, is, isLuhnAlgo, isoDate, isoDateTime, isoTime, isoTimeSecond, isoTimestamp, isoWeek, keyof, length, literal, literalAsync, map, mapAsync, maxBytes, maxLength, maxRange, maxSize, maxValue, merge, mergeAsync, mimeType, minBytes, minLength, minRange, minSize, minValue, multipleOf, nan, nanAsync, nativeEnum, nativeEnumAsync, never, neverAsync, nonNullable, nonNullableAsync, nonNullish, nonNullishAsync, nonOptional, nonOptionalAsync, nullType, nullTypeAsync, nullable, nullableAsync, nullish, nullishAsync, number, numberAsync, object, objectAsync, omit, omitAsync, optional, optionalAsync, parse, parseAsync, partial, partialAsync, pick, pickAsync, record, recordAsync, recursive, recursiveAsync, regex, required, requiredAsync, safeInteger, safeParse, safeParseAsync, set, setAsync, size, special, specialAsync, startsWith, strict, strictAsync, string, stringAsync, symbol, symbolAsync, toCustom, toCustomAsync, toLowerCase, toMaxValue, toMinValue, toTrimmed, toTrimmedEnd, toTrimmedStart, toUpperCase, transform, transformAsync, tuple, tupleAsync, undefinedType, undefinedTypeAsync, union, unionAsync, unknown, unknownAsync, unwrap, url, useDefault, uuid, value, voidType, voidTypeAsync };
