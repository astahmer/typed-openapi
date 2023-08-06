declare const Readonly: unique symbol;
declare const Optional: unique symbol;
declare const Hint: unique symbol;
declare const Kind: unique symbol;
declare const PatternBoolean = "(true|false)";
declare const PatternNumber = "(0|[1-9][0-9]*)";
declare const PatternString = "(.*)";
declare const PatternBooleanExact: string;
declare const PatternNumberExact: string;
declare const PatternStringExact: string;
type TupleToIntersect<T extends any[]> = T extends [infer I] ? I : T extends [infer I, ...infer R] ? I & TupleToIntersect<R> : never;
type TupleToUnion<T extends any[]> = {
    [K in keyof T]: T[K];
}[number];
type UnionToIntersect<U> = (U extends unknown ? (arg: U) => 0 : never) extends (arg: infer I) => 0 ? I : never;
type UnionLast<U> = UnionToIntersect<U extends unknown ? (x: U) => 0 : never> extends (x: infer L) => 0 ? L : never;
type UnionToTuple<U, L = UnionLast<U>> = [U] extends [never] ? [] : [...UnionToTuple<Exclude<U, L>>, L];
type Discard<T extends unknown[], D extends unknown> = T extends [infer L, ...infer R] ? (L extends D ? Discard<R, D> : [L, ...Discard<R, D>]) : [];
type Flat<T> = T extends [] ? [] : T extends [infer L] ? [...Flat<L>] : T extends [infer L, ...infer R] ? [...Flat<L>, ...Flat<R>] : [T];
type Trim<T> = T extends `${' '}${infer U}` ? Trim<U> : T extends `${infer U}${' '}` ? Trim<U> : T;
type Assert<T, E> = T extends E ? T : never;
type Evaluate<T> = T extends infer O ? {
    [K in keyof O]: O[K];
} : never;
type Ensure<T> = T extends infer U ? U : never;
type AssertProperties<T> = T extends TProperties ? T : TProperties;
type AssertRest<T, E extends TSchema[] = TSchema[]> = T extends E ? T : [];
type AssertType<T, E extends TSchema = TSchema> = T extends E ? T : TNever;
type TModifier = TOptional<TSchema> | TReadonly<TSchema>;
type TReadonly<T extends TSchema> = T & {
    [Readonly]: 'Readonly';
};
type TOptional<T extends TSchema> = T & {
    [Optional]: 'Optional';
};
type ReadonlyUnwrapType<T extends TSchema> = T extends TReadonly<infer S> ? ReadonlyUnwrapType<S> : T extends TOptional<infer S> ? TOptional<ReadonlyUnwrapType<S>> : T;
type ReadonlyUnwrapRest<T extends TSchema[]> = T extends [infer L, ...infer R] ? L extends TReadonly<infer S> ? [ReadonlyUnwrapType<AssertType<S>>, ...ReadonlyUnwrapRest<AssertRest<R>>] : [L, ...ReadonlyUnwrapRest<AssertRest<R>>] : [];
type OptionalUnwrapType<T extends TSchema> = T extends TReadonly<infer S> ? TReadonly<OptionalUnwrapType<S>> : T extends TOptional<infer S> ? OptionalUnwrapType<S> : T;
type OptionalUnwrapRest<T extends TSchema[]> = T extends [infer L, ...infer R] ? L extends TOptional<infer S> ? [OptionalUnwrapType<AssertType<S>>, ...OptionalUnwrapRest<AssertRest<R>>] : [L, ...OptionalUnwrapRest<AssertRest<R>>] : [];
type IntersectOptional<T extends TSchema[]> = T extends [infer L, ...infer R] ? L extends TOptional<AssertType<L>> ? IntersectOptional<AssertRest<R>> : false : true;
type IntersectResolve<T extends TSchema[], U = OptionalUnwrapRest<AssertRest<T>>> = IntersectOptional<AssertRest<T>> extends true ? TOptional<TIntersect<AssertRest<U>>> : TIntersect<AssertRest<U>>;
type IntersectType<T extends TSchema[]> = T extends [] ? TNever : T extends [TSchema] ? AssertType<T[0]> : IntersectResolve<T>;
type UnionOptional<T extends TSchema[]> = T extends [infer L, ...infer R] ? L extends (TOptional<AssertType<L>>) ? true : UnionOptional<AssertRest<R>> : false;
type UnionResolve<T extends TSchema[], U = OptionalUnwrapRest<AssertRest<T>>> = UnionOptional<AssertRest<T>> extends true ? TOptional<TUnion<AssertRest<U>>> : TUnion<AssertRest<U>>;
type UnionType<T extends TSchema[]> = T extends [] ? TNever : T extends [TSchema] ? AssertType<T[0]> : UnionResolve<T>;
interface SchemaOptions {
    $schema?: string;
    /** Id for this schema */
    $id?: string;
    /** Title of this schema */
    title?: string;
    /** Description of this schema */
    description?: string;
    /** Default value for this schema */
    default?: any;
    /** Example values matching this schema */
    examples?: any;
    /** Optional annotation for readOnly */
    readOnly?: boolean;
    /** Optional annotation for writeOnly */
    writeOnly?: boolean;
    [prop: string]: any;
}
interface TKind {
    [Kind]: string;
}
interface TSchema extends SchemaOptions, TKind {
    [Readonly]?: string;
    [Optional]?: string;
    [Hint]?: string;
    params: unknown[];
    static: unknown;
}
type TAnySchema = TSchema | TAny | TArray | TAsyncIterator | TBigInt | TBoolean | TConstructor | TDate | TEnum | TFunction | TInteger | TIntersect | TIterator | TLiteral | TNot | TNull | TNumber | TObject | TPromise | TRecord | TRef | TString | TSymbol | TTemplateLiteral | TThis | TTuple | TUndefined | TUnion | TUint8Array | TUnknown | TVoid;
interface NumericOptions<N extends number | bigint> extends SchemaOptions {
    exclusiveMaximum?: N;
    exclusiveMinimum?: N;
    maximum?: N;
    minimum?: N;
    multipleOf?: N;
}
interface TAny extends TSchema {
    [Kind]: 'Any';
    static: any;
}
interface ArrayOptions extends SchemaOptions {
    /** The minimum number of items in this array */
    minItems?: number;
    /** The maximum number of items in this array */
    maxItems?: number;
    /** Should this schema contain unique items */
    uniqueItems?: boolean;
    /** A schema for which some elements should match */
    contains?: TSchema;
    /** A minimum number of contains schema matches */
    minContains?: number;
    /** A maximum number of contains schema matches */
    maxContains?: number;
}
interface TArray<T extends TSchema = TSchema> extends TSchema, ArrayOptions {
    [Kind]: 'Array';
    static: Static<T, this['params']>[];
    type: 'array';
    items: T;
}
interface TAsyncIterator<T extends TSchema = TSchema> extends TSchema {
    [Kind]: 'AsyncIterator';
    static: AsyncIterableIterator<Static<T, this['params']>>;
    type: 'AsyncIterator';
    items: T;
}
type TAwaitedRest<T extends TSchema[]> = T extends [infer L, ...infer R] ? [TAwaited<AssertType<L>>, ...TAwaitedRest<AssertRest<R>>] : [];
type TAwaited<T extends TSchema> = T extends TIntersect<infer S> ? TIntersect<TAwaitedRest<S>> : T extends TUnion<infer S> ? TUnion<TAwaitedRest<S>> : T extends TPromise<infer S> ? TAwaited<S> : T;
interface TBigInt extends TSchema, NumericOptions<bigint> {
    [Kind]: 'BigInt';
    static: bigint;
    type: 'bigint';
}
interface TBoolean extends TSchema {
    [Kind]: 'Boolean';
    static: boolean;
    type: 'boolean';
}
type TConstructorParameters<T extends TConstructor<TSchema[], TSchema>> = TTuple<T['parameters']>;
type TInstanceType<T extends TConstructor<TSchema[], TSchema>> = T['returns'];
type TCompositeKeys<T extends TObject[]> = T extends [infer L, ...infer R] ? keyof Assert<L, TObject>['properties'] | TCompositeKeys<Assert<R, TObject[]>> : never;
type TCompositeIndex<T extends TIntersect<TObject[]>, K extends string[]> = K extends [infer L, ...infer R] ? {
    [_ in Assert<L, string>]: TIndexType<T, Assert<L, string>>;
} & TCompositeIndex<T, Assert<R, string[]>> : {};
type TCompositeReduce<T extends TObject[]> = UnionToTuple<TCompositeKeys<T>> extends infer K ? Evaluate<TCompositeIndex<TIntersect<T>, Assert<K, string[]>>> : {};
type TComposite<T extends TObject[]> = TIntersect<T> extends TIntersect ? TObject<TCompositeReduce<T>> : TObject<{}>;
type TConstructorParameterArray<T extends readonly TSchema[], P extends unknown[]> = [...{
    [K in keyof T]: Static<AssertType<T[K]>, P>;
}];
interface TConstructor<T extends TSchema[] = TSchema[], U extends TSchema = TSchema> extends TSchema {
    [Kind]: 'Constructor';
    static: new (...param: TConstructorParameterArray<T, this['params']>) => Static<U, this['params']>;
    type: 'constructor';
    parameters: T;
    returns: U;
}
interface DateOptions extends SchemaOptions {
    /** The exclusive maximum timestamp value */
    exclusiveMaximumTimestamp?: number;
    /** The exclusive minimum timestamp value */
    exclusiveMinimumTimestamp?: number;
    /** The maximum timestamp value */
    maximumTimestamp?: number;
    /** The minimum timestamp value */
    minimumTimestamp?: number;
}
interface TDate extends TSchema, DateOptions {
    [Kind]: 'Date';
    static: Date;
    type: 'date';
}
interface TEnumOption<T> {
    type: 'number' | 'string';
    const: T;
}
interface TEnum<T extends Record<string, string | number> = Record<string, string | number>> extends TSchema {
    [Kind]: 'Union';
    static: T[keyof T];
    anyOf: TLiteral<T[keyof T]>[];
}
type TExtends<L extends TSchema, R extends TSchema, T extends TSchema, U extends TSchema> = (Static<L> extends Static<R> ? T : U) extends infer O ? UnionToTuple<O> extends [infer X, infer Y] ? TUnion<[AssertType<X>, AssertType<Y>]> : AssertType<O> : never;
type TExcludeTemplateLiteralResult<T extends string> = UnionType<AssertRest<UnionToTuple<{
    [K in T]: TLiteral<K>;
}[T]>>>;
type TExcludeTemplateLiteral<T extends TTemplateLiteral, U extends TSchema> = Exclude<Static<T>, Static<U>> extends infer S ? TExcludeTemplateLiteralResult<Assert<S, string>> : never;
type TExcludeArray<T extends TSchema[], U extends TSchema> = AssertRest<UnionToTuple<{
    [K in keyof T]: Static<AssertType<T[K]>> extends Static<U> ? never : T[K];
}[number]>> extends infer R ? UnionType<AssertRest<R>> : never;
type TExclude<T extends TSchema, U extends TSchema> = T extends TTemplateLiteral ? TExcludeTemplateLiteral<T, U> : T extends TUnion<infer S> ? TExcludeArray<S, U> : T extends U ? TNever : T;
type TExtractTemplateLiteralResult<T extends string> = UnionType<AssertRest<UnionToTuple<{
    [K in T]: TLiteral<K>;
}[T]>>>;
type TExtractTemplateLiteral<T extends TTemplateLiteral, U extends TSchema> = Extract<Static<T>, Static<U>> extends infer S ? TExtractTemplateLiteralResult<Assert<S, string>> : never;
type TExtractArray<T extends TSchema[], U extends TSchema> = AssertRest<UnionToTuple<{
    [K in keyof T]: Static<AssertType<T[K]>> extends Static<U> ? T[K] : never;
}[number]>> extends infer R ? UnionType<AssertRest<R>> : never;
type TExtract<T extends TSchema, U extends TSchema> = T extends TTemplateLiteral ? TExtractTemplateLiteral<T, U> : T extends TUnion<infer S> ? TExtractArray<S, U> : T extends U ? T : T;
type TFunctionParameters<T extends TSchema[], P extends unknown[]> = [...{
    [K in keyof T]: Static<AssertType<T[K]>, P>;
}];
interface TFunction<T extends TSchema[] = TSchema[], U extends TSchema = TSchema> extends TSchema {
    [Kind]: 'Function';
    static: (...param: TFunctionParameters<T, this['params']>) => Static<U, this['params']>;
    type: 'function';
    parameters: T;
    returns: U;
}
type TIndexRest<T extends TSchema[], K extends TPropertyKey> = T extends [infer L, ...infer R] ? [TIndexType<AssertType<L>, K>, ...TIndexRest<AssertRest<R>, K>] : [];
type TIndexProperty<T extends TProperties, K extends TPropertyKey> = K extends keyof T ? [T[K]] : [];
type TIndexTuple<T extends TSchema[], K extends TPropertyKey> = K extends keyof T ? [T[K]] : [];
type TIndexType<T extends TSchema, K extends TPropertyKey> = T extends TRecursive<infer S> ? TIndexType<S, K> : T extends TIntersect<infer S> ? IntersectType<AssertRest<Discard<Flat<TIndexRest<S, K>>, TNever>>> : T extends TUnion<infer S> ? UnionType<AssertRest<Flat<TIndexRest<S, K>>>> : T extends TObject<infer S> ? UnionType<AssertRest<Flat<TIndexProperty<S, K>>>> : T extends TTuple<infer S> ? UnionType<AssertRest<Flat<TIndexTuple<S, K>>>> : [
];
type TIndexRestMany<T extends TSchema, K extends TPropertyKey[]> = K extends [infer L, ...infer R] ? [TIndexType<T, Assert<L, TPropertyKey>>, ...TIndexRestMany<T, Assert<R, TPropertyKey[]>>] : [
];
type TIndex<T extends TSchema, K extends TPropertyKey[]> = T extends TRecursive<infer S> ? TIndex<S, K> : T extends TIntersect ? UnionType<Flat<TIndexRestMany<T, K>>> : T extends TUnion ? UnionType<Flat<TIndexRestMany<T, K>>> : T extends TObject ? UnionType<Flat<TIndexRestMany<T, K>>> : T extends TTuple ? UnionType<Flat<TIndexRestMany<T, K>>> : TNever;
type TIntrinsicMode = 'Uppercase' | 'Lowercase' | 'Capitalize' | 'Uncapitalize';
type TIntrinsicTemplateLiteral<T extends TTemplateLiteralKind[], M extends TIntrinsicMode> = M extends ('Lowercase' | 'Uppercase') ? T extends [infer L, ...infer R] ? [TIntrinsic<AssertType<L>, M>, ...TIntrinsicTemplateLiteral<AssertRest<R>, M>] : T : M extends ('Capitalize' | 'Uncapitalize') ? T extends [infer L, ...infer R] ? [TIntrinsic<AssertType<L>, M>, ...R] : T : T;
type TIntrinsicLiteral<T, M extends TIntrinsicMode> = T extends string ? M extends 'Uncapitalize' ? Uncapitalize<T> : M extends 'Capitalize' ? Capitalize<T> : M extends 'Uppercase' ? Uppercase<T> : M extends 'Lowercase' ? Lowercase<T> : string : T;
type TIntrinsicRest<T extends TSchema[], M extends TIntrinsicMode> = T extends [infer L, ...infer R] ? [TIntrinsic<AssertType<L>, M>, ...TIntrinsicRest<AssertRest<R>, M>] : [];
type TIntrinsic<T extends TSchema, M extends TIntrinsicMode> = T extends TTemplateLiteral<infer S> ? TTemplateLiteral<TIntrinsicTemplateLiteral<S, M>> : T extends TUnion<infer S> ? TUnion<TIntrinsicRest<S, M>> : T extends TLiteral<infer S> ? TLiteral<TIntrinsicLiteral<S, M>> : T;
interface TInteger extends TSchema, NumericOptions<number> {
    [Kind]: 'Integer';
    static: number;
    type: 'integer';
}
type TUnevaluatedProperties = undefined | TSchema | boolean;
interface IntersectOptions extends SchemaOptions {
    unevaluatedProperties?: TUnevaluatedProperties;
}
interface TIntersect<T extends TSchema[] = TSchema[]> extends TSchema, IntersectOptions {
    [Kind]: 'Intersect';
    static: TupleToIntersect<{
        [K in keyof T]: Static<AssertType<T[K]>, this['params']>;
    }>;
    type?: 'object';
    allOf: [...T];
}
interface TIterator<T extends TSchema = TSchema> extends TSchema {
    [Kind]: 'Iterator';
    static: IterableIterator<Static<T, this['params']>>;
    type: 'Iterator';
    items: T;
}
type TKeyOfProperties<T extends TSchema> = Discard<Static<T> extends infer S ? UnionToTuple<{
    [K in keyof S]: TLiteral<Assert<K, TLiteralValue>>;
}[keyof S]> : [], undefined>;
type TKeyOfIndicesArray<T extends TSchema[]> = UnionToTuple<keyof T & `${number}`>;
type TKeyOfIndices<T extends TSchema[]> = AssertRest<TKeyOfIndicesArray<T> extends infer R ? {
    [K in keyof R]: TLiteral<Assert<R[K], TLiteralValue>>;
} : []>;
type TKeyOf<T extends TSchema = TSchema> = (T extends TRecursive<infer S> ? TKeyOfProperties<S> : T extends TIntersect ? TKeyOfProperties<T> : T extends TUnion ? TKeyOfProperties<T> : T extends TObject ? TKeyOfProperties<T> : T extends TTuple<infer K> ? TKeyOfIndices<K> : T extends TArray ? [TNumber] : T extends TRecord<infer K> ? [K] : [
]) extends infer R ? UnionType<AssertRest<R>> : never;
type TLiteralValue = boolean | number | string;
type TLiteralBoolean = TLiteral<boolean>;
type TLiteralNumber = TLiteral<number>;
type TLiteralString = TLiteral<string>;
interface TLiteral<T extends TLiteralValue = TLiteralValue> extends TSchema {
    [Kind]: 'Literal';
    static: T;
    const: T;
}
interface TNever extends TSchema {
    [Kind]: 'Never';
    static: never;
    not: {};
}
interface TNot<T extends TSchema = TSchema> extends TSchema {
    [Kind]: 'Not';
    static: T extends TNot<infer U> ? Static<U> : unknown;
    not: T;
}
interface TNull extends TSchema {
    [Kind]: 'Null';
    static: null;
    type: 'null';
}
interface TNumber extends TSchema, NumericOptions<number> {
    [Kind]: 'Number';
    static: number;
    type: 'number';
}
type ReadonlyOptionalPropertyKeys<T extends TProperties> = {
    [K in keyof T]: T[K] extends TReadonly<TSchema> ? (T[K] extends TOptional<T[K]> ? K : never) : never;
}[keyof T];
type ReadonlyPropertyKeys<T extends TProperties> = {
    [K in keyof T]: T[K] extends TReadonly<TSchema> ? (T[K] extends TOptional<T[K]> ? never : K) : never;
}[keyof T];
type OptionalPropertyKeys<T extends TProperties> = {
    [K in keyof T]: T[K] extends TOptional<TSchema> ? (T[K] extends TReadonly<T[K]> ? never : K) : never;
}[keyof T];
type RequiredPropertyKeys<T extends TProperties> = keyof Omit<T, ReadonlyOptionalPropertyKeys<T> | ReadonlyPropertyKeys<T> | OptionalPropertyKeys<T>>;
type PropertiesReducer<T extends TProperties, R extends Record<keyof any, unknown>> = Evaluate<(Readonly<Partial<Pick<R, ReadonlyOptionalPropertyKeys<T>>>> & Readonly<Pick<R, ReadonlyPropertyKeys<T>>> & Partial<Pick<R, OptionalPropertyKeys<T>>> & Required<Pick<R, RequiredPropertyKeys<T>>>)>;
type PropertiesReduce<T extends TProperties, P extends unknown[]> = PropertiesReducer<T, {
    [K in keyof T]: Static<T[K], P>;
}>;
type TPropertyKey = string | number;
type TProperties = Record<TPropertyKey, TSchema>;
type ObjectProperties<T> = T extends TObject<infer U> ? U : never;
type ObjectPropertyKeys<T> = T extends TObject<infer U> ? keyof U : never;
type TAdditionalProperties = undefined | TSchema | boolean;
interface ObjectOptions extends SchemaOptions {
    additionalProperties?: TAdditionalProperties;
    minProperties?: number;
    maxProperties?: number;
}
interface TObject<T extends TProperties = TProperties> extends TSchema, ObjectOptions {
    [Kind]: 'Object';
    static: PropertiesReduce<T, this['params']>;
    additionalProperties?: TAdditionalProperties;
    type: 'object';
    properties: T;
    required?: string[];
}
type TOmitProperties<T extends TProperties, K extends keyof any> = Evaluate<AssertProperties<Omit<T, K>>>;
type TOmitRest<T extends TSchema[], K extends keyof any> = AssertRest<{
    [K2 in keyof T]: TOmit<AssertType<T[K2]>, K>;
}>;
type TOmit<T extends TSchema = TSchema, K extends keyof any = keyof any> = T extends TRecursive<infer S> ? TRecursive<TOmit<S, K>> : T extends TIntersect<infer S> ? TIntersect<TOmitRest<S, K>> : T extends TUnion<infer S> ? TUnion<TOmitRest<S, K>> : T extends TObject<infer S> ? TObject<TOmitProperties<S, K>> : T;
type TParameters<T extends TFunction> = Ensure<TTuple<T['parameters']>>;
type TPartialObjectArray<T extends TObject[]> = AssertRest<{
    [K in keyof T]: TPartial<AssertType<T[K], TObject>>;
}, TObject[]>;
type TPartialRest<T extends TSchema[]> = AssertRest<{
    [K in keyof T]: TPartial<AssertType<T[K]>>;
}>;
type TPartialProperties<T extends TProperties> = Evaluate<AssertProperties<{
    [K in keyof T]: TOptional<T[K]>;
}>>;
type TPartial<T extends TSchema> = T extends TRecursive<infer S> ? TRecursive<TPartial<S>> : T extends TIntersect<infer S> ? TIntersect<TPartialRest<S>> : T extends TUnion<infer S> ? TUnion<TPartialRest<S>> : T extends TObject<infer S> ? TObject<TPartialProperties<S>> : T;
type TPickProperties<T extends TProperties, K extends keyof any> = Pick<T, Assert<Extract<K, keyof T>, keyof T>> extends infer R ? ({
    [K in keyof R]: AssertType<R[K]> extends TSchema ? R[K] : never;
}) : never;
type TPickRest<T extends TSchema[], K extends keyof any> = {
    [K2 in keyof T]: TPick<AssertType<T[K2]>, K>;
};
type TPick<T extends TSchema = TSchema, K extends keyof any = keyof any> = T extends TRecursive<infer S> ? TRecursive<TPick<S, K>> : T extends TIntersect<infer S> ? TIntersect<TPickRest<S, K>> : T extends TUnion<infer S> ? TUnion<TPickRest<S, K>> : T extends TObject<infer S> ? TObject<TPickProperties<S, K>> : T;
interface TPromise<T extends TSchema = TSchema> extends TSchema {
    [Kind]: 'Promise';
    static: Promise<Static<T, this['params']>>;
    type: 'promise';
    item: TSchema;
}
type RecordTemplateLiteralObjectType<K extends TTemplateLiteral, T extends TSchema> = Ensure<TObject<Evaluate<{
    [_ in Static<K>]: T;
}>>>;
type RecordTemplateLiteralType<K extends TTemplateLiteral, T extends TSchema> = IsTemplateLiteralFinite<K> extends true ? RecordTemplateLiteralObjectType<K, T> : TRecord<K, T>;
type RecordUnionLiteralType<K extends TUnion, T extends TSchema> = Static<K> extends string ? Ensure<TObject<{
    [X in Static<K>]: T;
}>> : never;
type RecordLiteralType<K extends TLiteral<string | number>, T extends TSchema> = Ensure<TObject<{
    [K2 in K['const']]: T;
}>>;
type RecordNumberType<K extends TInteger | TNumber, T extends TSchema> = Ensure<TRecord<K, T>>;
type RecordStringType<K extends TString, T extends TSchema> = Ensure<TRecord<K, T>>;
type RecordKey = TUnion<TLiteral<string | number>[]> | TLiteral<string | number> | TTemplateLiteral | TInteger | TNumber | TString;
interface TRecord<K extends RecordKey = RecordKey, T extends TSchema = TSchema> extends TSchema {
    [Kind]: 'Record';
    static: Record<Static<K>, Static<T, this['params']>>;
    type: 'object';
    patternProperties: {
        [pattern: string]: T;
    };
    additionalProperties: TAdditionalProperties;
}
interface TThis extends TSchema {
    [Kind]: 'This';
    static: this['params'][0];
    $ref: string;
}
type TRecursiveReduce<T extends TSchema> = Static<T, [TRecursiveReduce<T>]>;
interface TRecursive<T extends TSchema> extends TSchema {
    [Hint]: 'Recursive';
    static: TRecursiveReduce<T>;
}
interface TRef<T extends TSchema = TSchema> extends TSchema {
    [Kind]: 'Ref';
    static: Static<T, this['params']>;
    $ref: string;
}
type TRest<T extends TSchema> = T extends TTuple<infer R> ? Assert<R, TSchema[]> : Assert<[T], TSchema[]>;
type TReturnType<T extends TFunction> = T['returns'];
type TRequiredRest<T extends TSchema[]> = AssertRest<{
    [K in keyof T]: TRequired<AssertType<T[K]>>;
}>;
type TRequiredProperties<T extends TProperties> = Evaluate<AssertProperties<{
    [K in keyof T]: T[K] extends TOptional<infer S> ? S : T[K];
}>>;
type TRequired<T extends TSchema> = T extends TRecursive<infer S> ? TRecursive<TRequired<S>> : T extends TIntersect<infer S> ? TIntersect<TRequiredRest<S>> : T extends TUnion<infer S> ? TUnion<TRequiredRest<S>> : T extends TObject<infer S> ? TObject<TRequiredProperties<S>> : T;
type StringFormatOption = 'date-time' | 'time' | 'date' | 'email' | 'idn-email' | 'hostname' | 'idn-hostname' | 'ipv4' | 'ipv6' | 'uri' | 'uri-reference' | 'iri' | 'uuid' | 'iri-reference' | 'uri-template' | 'json-pointer' | 'relative-json-pointer' | 'regex' | ({} & string);
type StringContentEncodingOption = '7bit' | '8bit' | 'binary' | 'quoted-printable' | 'base64' | ({} & string);
interface StringOptions extends SchemaOptions {
    /** The maximum string length */
    maxLength?: number;
    /** The minimum string length */
    minLength?: number;
    /** A regular expression pattern this string should match */
    pattern?: string;
    /** A format this string should match */
    format?: StringFormatOption;
    /** The content encoding for this string */
    contentEncoding?: StringContentEncodingOption;
    /** The content media type for this string */
    contentMediaType?: string;
}
interface TString extends TSchema, StringOptions {
    [Kind]: 'String';
    static: string;
    type: 'string';
}
type SymbolValue = string | number | undefined;
interface TSymbol extends TSchema, SchemaOptions {
    [Kind]: 'Symbol';
    static: symbol;
    type: 'symbol';
}
type TTemplateLiteralDslParserUnionLiteral<T extends string> = T extends `${infer L}|${infer R}` ? [TLiteral<Trim<L>>, ...TTemplateLiteralDslParserUnionLiteral<R>] : T extends `${infer L}` ? [TLiteral<Trim<L>>] : [
];
type TTemplateLiteralDslParserUnion<T extends string> = UnionType<TTemplateLiteralDslParserUnionLiteral<T>>;
type TTemplateLiteralDslParserTerminal<T extends string> = T extends 'boolean' ? TBoolean : T extends 'bigint' ? TBigInt : T extends 'number' ? TNumber : T extends 'string' ? TString : TTemplateLiteralDslParserUnion<T>;
type TTemplateLiteralDslParserTemplate<T extends string> = T extends `{${infer L}}${infer R}` ? [TTemplateLiteralDslParserTerminal<L>, ...TTemplateLiteralDslParserTemplate<R>] : T extends `${infer L}$${infer R}` ? [TLiteral<L>, ...TTemplateLiteralDslParserTemplate<R>] : T extends `${infer L}` ? [TLiteral<L>] : [
];
type TTemplateLiteralDslParser<T extends string> = Ensure<TTemplateLiteral<Assert<TTemplateLiteralDslParserTemplate<T>, TTemplateLiteralKind[]>>>;
type IsTemplateLiteralFiniteCheck<T> = T extends TTemplateLiteral<infer U> ? IsTemplateLiteralFiniteArray<Assert<U, TTemplateLiteralKind[]>> : T extends TUnion<infer U> ? IsTemplateLiteralFiniteArray<Assert<U, TTemplateLiteralKind[]>> : T extends TString ? false : T extends TBoolean ? false : T extends TNumber ? false : T extends TInteger ? false : T extends TBigInt ? false : T extends TLiteral ? true : false;
type IsTemplateLiteralFiniteArray<T extends TTemplateLiteralKind[]> = T extends [infer L, ...infer R] ? IsTemplateLiteralFiniteCheck<L> extends false ? false : IsTemplateLiteralFiniteArray<Assert<R, TTemplateLiteralKind[]>> : true;
type IsTemplateLiteralFinite<T> = T extends TTemplateLiteral<infer U> ? IsTemplateLiteralFiniteArray<U> : false;
type TTemplateLiteralKind = TUnion | TLiteral | TInteger | TTemplateLiteral | TNumber | TBigInt | TString | TBoolean | TNever;
type TTemplateLiteralConst<T, Acc extends string> = T extends TUnion<infer U> ? {
    [K in keyof U]: TTemplateLiteralUnion<Assert<[U[K]], TTemplateLiteralKind[]>, Acc>;
}[number] : T extends TTemplateLiteral ? `${Static<T>}` : T extends TLiteral<infer U> ? `${U}` : T extends TString ? `${string}` : T extends TNumber ? `${number}` : T extends TBigInt ? `${bigint}` : T extends TBoolean ? `${boolean}` : never;
type TTemplateLiteralUnion<T extends TTemplateLiteralKind[], Acc extends string = ''> = T extends [infer L, ...infer R] ? `${TTemplateLiteralConst<L, Acc>}${TTemplateLiteralUnion<Assert<R, TTemplateLiteralKind[]>, Acc>}` : Acc;
type TTemplateLiteralKeyRest<T extends TTemplateLiteral> = Assert<UnionToTuple<Static<T>>, TPropertyKey[]>;
interface TTemplateLiteral<T extends TTemplateLiteralKind[] = TTemplateLiteralKind[]> extends TSchema {
    [Kind]: 'TemplateLiteral';
    static: TTemplateLiteralUnion<T>;
    type: 'string';
    pattern: string;
}
type TTupleInfer<T extends TSchema[], P extends unknown[]> = T extends [infer L, ...infer R] ? [Static<AssertType<L>, P>, ...TTupleInfer<AssertRest<R>, P>] : [];
interface TTuple<T extends TSchema[] = TSchema[]> extends TSchema {
    [Kind]: 'Tuple';
    static: TTupleInfer<T, this['params']>;
    type: 'array';
    items?: T;
    additionalItems?: false;
    minItems: number;
    maxItems: number;
}
interface TUndefined extends TSchema {
    [Kind]: 'Undefined';
    static: undefined;
    type: 'undefined';
}
type TLiteralUnionReduce<T extends TLiteral<string | number>[]> = T extends [infer L, ...infer R] ? [Assert<L, TLiteral<string | number>>['const'], ...TLiteralUnionReduce<Assert<R, TLiteral<string | number>[]>>] : [
];
type TUnionLiteralKeyRest<T extends TUnion<TLiteral<string | number>[]>> = T extends TUnion<infer S> ? TLiteralUnionReduce<Assert<S, TLiteral<string | number>[]>> : [
];
type TUnionTemplateLiteral<T extends TTemplateLiteral, S extends string = Static<T>> = Ensure<UnionType<Assert<UnionToTuple<{
    [K in S]: TLiteral<K>;
}[S]>, TLiteral[]>>>;
interface TUnion<T extends TSchema[] = TSchema[]> extends TSchema {
    [Kind]: 'Union';
    static: {
        [K in keyof T]: T[K] extends TSchema ? Static<T[K], this['params']> : never;
    }[number];
    anyOf: T;
}
interface Uint8ArrayOptions extends SchemaOptions {
    maxByteLength?: number;
    minByteLength?: number;
}
interface TUint8Array extends TSchema, Uint8ArrayOptions {
    [Kind]: 'Uint8Array';
    static: Uint8Array;
    type: 'uint8array';
}
interface TUnknown extends TSchema {
    [Kind]: 'Unknown';
    static: unknown;
}
interface UnsafeOptions extends SchemaOptions {
    [Kind]?: string;
}
interface TUnsafe<T> extends TSchema {
    [Kind]: string;
    static: T;
}
interface TVoid extends TSchema {
    [Kind]: 'Void';
    static: void;
    type: 'void';
}
/** Infers a static type from a TypeBox type */
type Static<T extends TSchema, P extends unknown[] = []> = (T & {
    params: P;
})['static'];
type TypeRegistryValidationFunction<TSchema> = (schema: TSchema, value: unknown) => boolean;
/** A registry for user defined types */
declare namespace TypeRegistry {
    /** Returns the entries in this registry */
    function Entries(): Map<string, TypeRegistryValidationFunction<any>>;
    /** Clears all user defined types */
    function Clear(): void;
    /** Deletes a registered type */
    function Delete(kind: string): boolean;
    /** Returns true if this registry contains this kind */
    function Has(kind: string): boolean;
    /** Sets a validation function for a user defined type */
    function Set<TSchema = unknown>(kind: string, func: TypeRegistryValidationFunction<TSchema>): void;
    /** Gets a custom validation function for a user defined type */
    function Get(kind: string): TypeRegistryValidationFunction<any> | undefined;
}
type FormatRegistryValidationFunction = (value: string) => boolean;
/** A registry for user defined string formats */
declare namespace FormatRegistry {
    /** Returns the entries in this registry */
    function Entries(): Map<string, FormatRegistryValidationFunction>;
    /** Clears all user defined string formats */
    function Clear(): void;
    /** Deletes a registered format */
    function Delete(format: string): boolean;
    /** Returns true if the user defined string format exists */
    function Has(format: string): boolean;
    /** Sets a validation function for a user defined string format */
    function Set(format: string, func: FormatRegistryValidationFunction): void;
    /** Gets a validation function for a user defined string format */
    function Get(format: string): FormatRegistryValidationFunction | undefined;
}
declare namespace ValueGuard {
    function IsObject(value: unknown): value is Record<PropertyKey, unknown>;
    function IsArray(value: unknown): value is unknown[];
    function IsBoolean(value: unknown): value is boolean;
    function IsNull(value: unknown): value is null;
    function IsUndefined(value: unknown): value is undefined;
    function IsBigInt(value: unknown): value is bigint;
    function IsNumber(value: unknown): value is number;
    function IsString(value: unknown): value is string;
}
declare class TypeGuardUnknownTypeError extends Error {
    readonly schema: unknown;
    constructor(schema: unknown);
}
/** Provides functions to test if JavaScript values are TypeBox types */
declare namespace TypeGuard {
    /** Returns true if the given schema is TAny */
    function TAny(schema: unknown): schema is TAny;
    /** Returns true if the given schema is TArray */
    function TArray(schema: unknown): schema is TArray;
    /** Returns true if the given schema is TAsyncIterator */
    function TAsyncIterator(schema: unknown): schema is TAsyncIterator;
    /** Returns true if the given schema is TBigInt */
    function TBigInt(schema: unknown): schema is TBigInt;
    /** Returns true if the given schema is TBoolean */
    function TBoolean(schema: unknown): schema is TBoolean;
    /** Returns true if the given schema is TConstructor */
    function TConstructor(schema: unknown): schema is TConstructor;
    /** Returns true if the given schema is TDate */
    function TDate(schema: unknown): schema is TDate;
    /** Returns true if the given schema is TFunction */
    function TFunction(schema: unknown): schema is TFunction;
    /** Returns true if the given schema is TInteger */
    function TInteger(schema: unknown): schema is TInteger;
    /** Returns true if the given schema is TIntersect */
    function TIntersect(schema: unknown): schema is TIntersect;
    /** Returns true if the given schema is TIterator */
    function TIterator(schema: unknown): schema is TIterator;
    /** Returns true if the given schema is a TKind with the given name. */
    function TKindOf<T extends string>(schema: unknown, kind: T): schema is Record<PropertyKey, unknown> & {
        [Kind]: T;
    };
    /** Returns true if the given schema is TKind */
    function TKind(schema: unknown): schema is Record<PropertyKey, unknown> & {
        [Kind]: string;
    };
    /** Returns true if the given schema is TLiteral<string> */
    function TLiteralString(schema: unknown): schema is TLiteral<string>;
    /** Returns true if the given schema is TLiteral<number> */
    function TLiteralNumber(schema: unknown): schema is TLiteral<number>;
    /** Returns true if the given schema is TLiteral<boolean> */
    function TLiteralBoolean(schema: unknown): schema is TLiteral<boolean>;
    /** Returns true if the given schema is TLiteral */
    function TLiteral(schema: unknown): schema is TLiteral;
    /** Returns true if the given schema is TNever */
    function TNever(schema: unknown): schema is TNever;
    /** Returns true if the given schema is TNot */
    function TNot(schema: unknown): schema is TNot;
    /** Returns true if the given schema is TNull */
    function TNull(schema: unknown): schema is TNull;
    /** Returns true if the given schema is TNumber */
    function TNumber(schema: unknown): schema is TNumber;
    /** Returns true if the given schema is TObject */
    function TObject(schema: unknown): schema is TObject;
    /** Returns true if the given schema is TPromise */
    function TPromise(schema: unknown): schema is TPromise;
    /** Returns true if the given schema is TRecord */
    function TRecord(schema: unknown): schema is TRecord;
    /** Returns true if the given schema is TRef */
    function TRef(schema: unknown): schema is TRef;
    /** Returns true if the given schema is TString */
    function TString(schema: unknown): schema is TString;
    /** Returns true if the given schema is TSymbol */
    function TSymbol(schema: unknown): schema is TSymbol;
    /** Returns true if the given schema is TTemplateLiteral */
    function TTemplateLiteral(schema: unknown): schema is TTemplateLiteral;
    /** Returns true if the given schema is TThis */
    function TThis(schema: unknown): schema is TThis;
    /** Returns true if the given schema is TTuple */
    function TTuple(schema: unknown): schema is TTuple;
    /** Returns true if the given schema is TUndefined */
    function TUndefined(schema: unknown): schema is TUndefined;
    /** Returns true if the given schema is TUnion<Literal<string | number>[]> */
    function TUnionLiteral(schema: unknown): schema is TUnion<TLiteral[]>;
    /** Returns true if the given schema is TUnion */
    function TUnion(schema: unknown): schema is TUnion;
    /** Returns true if the given schema is TUint8Array */
    function TUint8Array(schema: unknown): schema is TUint8Array;
    /** Returns true if the given schema is TUnknown */
    function TUnknown(schema: unknown): schema is TUnknown;
    /** Returns true if the given schema is a raw TUnsafe */
    function TUnsafe(schema: unknown): schema is TUnsafe<unknown>;
    /** Returns true if the given schema is TVoid */
    function TVoid(schema: unknown): schema is TVoid;
    /** Returns true if this schema has the Readonly modifier */
    function TReadonly<T extends TSchema>(schema: T): schema is TReadonly<T>;
    /** Returns true if this schema has the Optional modifier */
    function TOptional<T extends TSchema>(schema: T): schema is TOptional<T>;
    /** Returns true if the given schema is TSchema */
    function TSchema(schema: unknown): schema is TSchema;
}
/** Fast undefined check used for properties of type undefined */
declare namespace ExtendsUndefined {
    function Check(schema: TSchema): boolean;
}
declare enum TypeExtendsResult {
    Union = 0,
    True = 1,
    False = 2
}
declare namespace TypeExtends {
    function Extends(left: TSchema, right: TSchema): TypeExtendsResult;
}
/** Specialized Clone for Types */
declare namespace TypeClone {
    /** Clones a type. */
    function Clone<T extends TSchema>(schema: T, options?: SchemaOptions): T;
}
declare namespace IndexedAccessor {
    function Resolve(schema: TSchema, keys: TPropertyKey[], options?: SchemaOptions): TSchema;
}
declare namespace Intrinsic {
    /** Applies an intrinsic string manipulation to the given type. */
    function Map<T extends TSchema, M extends TIntrinsicMode>(schema: T, mode: M): TIntrinsic<T, M>;
}
declare namespace ObjectMap {
    function Map<T = TSchema>(schema: TSchema, callback: (object: TObject) => TObject, options: SchemaOptions): T;
}
interface KeyResolverOptions {
    includePatterns: boolean;
}
declare namespace KeyResolver {
    /** Resolves an array of keys in this schema */
    function ResolveKeys(schema: TSchema, options: KeyResolverOptions): string[];
    /** Resolves a regular expression pattern matching all keys in this schema */
    function ResolvePattern(schema: TSchema): string;
}
declare namespace KeyArrayResolver {
    /** Resolves an array of string[] keys from the given schema or array type. */
    function Resolve(schema: TSchema | string[]): string[];
}
declare namespace UnionResolver {
    /** Returns a resolved union with interior unions flattened */
    function Resolve(union: TUnion): TUnion;
}
declare namespace TemplateLiteralPattern {
    function Create(kinds: TTemplateLiteralKind[]): string;
}
declare namespace TemplateLiteralResolver {
    /** Resolves a template literal as a TUnion */
    function Resolve(template: TTemplateLiteral): TString | TUnion | TLiteral;
}
declare class TemplateLiteralParserError extends Error {
    constructor(message: string);
}
declare namespace TemplateLiteralParser {
    type Expression = And | Or | Const;
    type Const = {
        type: 'const';
        const: string;
    };
    type And = {
        type: 'and';
        expr: Expression[];
    };
    type Or = {
        type: 'or';
        expr: Expression[];
    };
    /** Parses a pattern and returns an expression tree */
    function Parse(pattern: string): Expression;
    /** Parses a pattern and strips forward and trailing ^ and $ */
    function ParseExact(pattern: string): Expression;
}
declare namespace TemplateLiteralFinite {
    function Check(expression: TemplateLiteralParser.Expression): boolean;
}
declare namespace TemplateLiteralGenerator {
    function Generate(expression: TemplateLiteralParser.Expression): IterableIterator<string>;
}
declare namespace TemplateLiteralDslParser {
    function Parse(template_dsl: string): TTemplateLiteralKind[];
}
declare class TypeBuilder {
    /** `[Utility]` Creates a schema without `static` and `params` types */
    protected Create<T>(schema: Omit<T, 'static' | 'params'>): T;
    /** `[Utility]` Discards a property key from the given schema */
    protected Discard(schema: TSchema, key: PropertyKey): TSchema;
    /** `[Standard]` Omits compositing symbols from this schema */
    Strict<T extends TSchema>(schema: T): T;
}
declare class StandardTypeBuilder extends TypeBuilder {
    /** `[Standard]` Creates a Readonly and Optional property */
    ReadonlyOptional<T extends TSchema>(schema: T): TReadonly<TOptional<T>>;
    /** `[Standard]` Creates a Readonly property */
    Readonly<T extends TSchema>(schema: T): TReadonly<T>;
    /** `[Standard]` Creates an Optional property */
    Optional<T extends TSchema>(schema: T): TOptional<T>;
    /** `[Standard]` Creates an Any type */
    Any(options?: SchemaOptions): TAny;
    /** `[Standard]` Creates an Array type */
    Array<T extends TSchema>(schema: T, options?: ArrayOptions): TArray<T>;
    /** `[Standard]` Creates a Boolean type */
    Boolean(options?: SchemaOptions): TBoolean;
    /** `[Standard]` Intrinsic function to Capitalize LiteralString types */
    Capitalize<T extends TSchema>(schema: T, options?: SchemaOptions): TIntrinsic<T, 'Capitalize'>;
    /** `[Standard]` Creates a Composite object type */
    Composite<T extends TObject[]>(objects: [...T], options?: ObjectOptions): TComposite<T>;
    /** `[Standard]` Creates a Enum type */
    Enum<T extends Record<string, string | number>>(item: T, options?: SchemaOptions): TEnum<T>;
    /** `[Standard]` Creates a Conditional type */
    Extends<L extends TSchema, R extends TSchema, T extends TSchema, U extends TSchema>(left: L, right: R, trueType: T, falseType: U, options?: SchemaOptions): TExtends<L, R, T, U>;
    /** `[Standard]` Constructs a type by excluding from unionType all union members that are assignable to excludedMembers */
    Exclude<L extends TSchema, R extends TSchema>(unionType: L, excludedMembers: R, options?: SchemaOptions): TExclude<L, R>;
    /** `[Standard]` Constructs a type by extracting from type all union members that are assignable to union */
    Extract<L extends TSchema, R extends TSchema>(type: L, union: R, options?: SchemaOptions): TExtract<L, R>;
    /** `[Standard]` Returns an Indexed property type for the given keys */
    Index<T extends TTuple, K extends TNumber>(schema: T, keys: K, options?: SchemaOptions): UnionType<Assert<T['items'], TSchema[]>>;
    /** `[Standard]` Returns an Indexed property type for the given keys */
    Index<T extends TArray, K extends TNumber>(schema: T, keys: K, options?: SchemaOptions): AssertType<T['items']>;
    /** `[Standard]` Returns an Indexed property type for the given keys */
    Index<T extends TSchema, K extends TTemplateLiteral>(schema: T, keys: K, options?: SchemaOptions): TIndex<T, TTemplateLiteralKeyRest<K>>;
    /** `[Standard]` Returns an Indexed property type for the given keys */
    Index<T extends TSchema, K extends TLiteral<TPropertyKey>>(schema: T, keys: K, options?: SchemaOptions): TIndex<T, [K['const']]>;
    /** `[Standard]` Returns an Indexed property type for the given keys */
    Index<T extends TSchema, K extends (keyof Static<T>)[]>(schema: T, keys: [...K], options?: SchemaOptions): TIndex<T, Assert<K, TPropertyKey[]>>;
    /** `[Standard]` Returns an Indexed property type for the given keys */
    Index<T extends TSchema, K extends TUnion<TLiteral<TPropertyKey>[]>>(schema: T, keys: K, options?: SchemaOptions): TIndex<T, TUnionLiteralKeyRest<K>>;
    /** `[Standard]` Returns an Indexed property type for the given keys */
    Index<T extends TSchema, K extends TSchema>(schema: T, key: K, options?: SchemaOptions): TSchema;
    /** `[Standard]` Creates an Integer type */
    Integer(options?: NumericOptions<number>): TInteger;
    /** `[Standard]` Creates an Intersect type */
    Intersect(allOf: [], options?: SchemaOptions): TNever;
    /** `[Standard]` Creates an Intersect type */
    Intersect<T extends [TSchema]>(allOf: [...T], options?: SchemaOptions): T[0];
    /** `[Standard]` Creates an Intersect type */
    Intersect<T extends TSchema[]>(allOf: [...T], options?: IntersectOptions): TIntersect<T>;
    /** `[Standard]` Creates a KeyOf type */
    KeyOf<T extends TSchema>(schema: T, options?: SchemaOptions): TKeyOf<T>;
    /** `[Standard]` Creates a Literal type */
    Literal<T extends TLiteralValue>(value: T, options?: SchemaOptions): TLiteral<T>;
    /** `[Standard]` Intrinsic function to Lowercase LiteralString types */
    Lowercase<T extends TSchema>(schema: T, options?: SchemaOptions): TIntrinsic<T, 'Lowercase'>;
    /** `[Standard]` Creates a Never type */
    Never(options?: SchemaOptions): TNever;
    /** `[Standard]` Creates a Not type */
    Not<T extends TSchema>(schema: T, options?: SchemaOptions): TNot<T>;
    /** `[Standard]` Creates a Null type */
    Null(options?: SchemaOptions): TNull;
    /** `[Standard]` Creates a Number type */
    Number(options?: NumericOptions<number>): TNumber;
    /** `[Standard]` Creates an Object type */
    Object<T extends TProperties>(properties: T, options?: ObjectOptions): TObject<T>;
    /** `[Standard]` Constructs a type whose keys are omitted from the given type */
    Omit<T extends TSchema, K extends (keyof Static<T>)[]>(schema: T, keys: readonly [...K], options?: SchemaOptions): TOmit<T, K[number]>;
    /** `[Standard]` Constructs a type whose keys are omitted from the given type */
    Omit<T extends TSchema, K extends TUnion<TLiteral<string>[]>>(schema: T, keys: K, options?: SchemaOptions): TOmit<T, TUnionLiteralKeyRest<K>[number]>;
    /** `[Standard]` Constructs a type whose keys are omitted from the given type */
    Omit<T extends TSchema, K extends TLiteral<string>>(schema: T, key: K, options?: SchemaOptions): TOmit<T, K['const']>;
    /** `[Standard]` Constructs a type whose keys are omitted from the given type */
    Omit<T extends TSchema, K extends TTemplateLiteral>(schema: T, key: K, options?: SchemaOptions): TOmit<T, TTemplateLiteralKeyRest<K>[number]>;
    /** `[Standard]` Constructs a type whose keys are omitted from the given type */
    Omit<T extends TSchema, K extends TNever>(schema: T, key: K, options?: SchemaOptions): TOmit<T, never>;
    /** `[Standard]` Constructs a type where all properties are optional */
    Partial<T extends TSchema>(schema: T, options?: ObjectOptions): TPartial<T>;
    /** `[Standard]` Constructs a type whose keys are picked from the given type */
    Pick<T extends TSchema, K extends (keyof Static<T>)[]>(schema: T, keys: readonly [...K], options?: SchemaOptions): TPick<T, K[number]>;
    /** `[Standard]` Constructs a type whose keys are picked from the given type */
    Pick<T extends TSchema, K extends TUnion<TLiteral<string>[]>>(schema: T, keys: K, options?: SchemaOptions): TPick<T, TUnionLiteralKeyRest<K>[number]>;
    /** `[Standard]` Constructs a type whose keys are picked from the given type */
    Pick<T extends TSchema, K extends TLiteral<string>>(schema: T, key: K, options?: SchemaOptions): TPick<T, K['const']>;
    /** `[Standard]` Constructs a type whose keys are picked from the given type */
    Pick<T extends TSchema, K extends TTemplateLiteral>(schema: T, key: K, options?: SchemaOptions): TPick<T, TTemplateLiteralKeyRest<K>[number]>;
    /** `[Standard]` Constructs a type whose keys are picked from the given type */
    Pick<T extends TSchema, K extends TNever>(schema: T, key: K, options?: SchemaOptions): TPick<T, never>;
    /** `[Standard]` Creates a Record type */
    Record<K extends TUnion, T extends TSchema>(key: K, schema: T, options?: ObjectOptions): RecordUnionLiteralType<K, T>;
    /** `[Standard]` Creates a Record type */
    Record<K extends TLiteral<string | number>, T extends TSchema>(key: K, schema: T, options?: ObjectOptions): RecordLiteralType<K, T>;
    /** `[Standard]` Creates a Record type */
    Record<K extends TTemplateLiteral, T extends TSchema>(key: K, schema: T, options?: ObjectOptions): RecordTemplateLiteralType<K, T>;
    /** `[Standard]` Creates a Record type */
    Record<K extends TInteger | TNumber, T extends TSchema>(key: K, schema: T, options?: ObjectOptions): RecordNumberType<K, T>;
    /** `[Standard]` Creates a Record type */
    Record<K extends TString, T extends TSchema>(key: K, schema: T, options?: ObjectOptions): RecordStringType<K, T>;
    /** `[Standard]` Creates a Recursive type */
    Recursive<T extends TSchema>(callback: (thisType: TThis) => T, options?: SchemaOptions): TRecursive<T>;
    /** `[Standard]` Creates a Ref type. The referenced type must contain a $id */
    Ref<T extends TSchema>(schema: T, options?: SchemaOptions): TRef<T>;
    /** `[Standard]` Creates a Ref type. */
    Ref<T extends TSchema>($ref: string, options?: SchemaOptions): TRef<T>;
    /** `[Standard]` Constructs a type where all properties are required */
    Required<T extends TSchema>(schema: T, options?: SchemaOptions): TRequired<T>;
    /** `[Standard]` Extracts the rest array from a Tuple */
    Rest<T extends TSchema>(schema: T): TRest<T>;
    /** `[Standard]` Creates a String type */
    String(options?: StringOptions): TString;
    /** `[Standard]` Creates a TemplateLiteral type from template dsl string */
    TemplateLiteral<T extends string>(templateDsl: T, options?: SchemaOptions): TTemplateLiteralDslParser<T>;
    /** `[Standard]` Creates a TemplateLiteral type */
    TemplateLiteral<T extends TTemplateLiteralKind[]>(kinds: [...T], options?: SchemaOptions): TTemplateLiteral<T>;
    /** `[Standard]` Creates a Tuple type */
    Tuple<T extends TSchema[]>(items: [...T], options?: SchemaOptions): TTuple<T>;
    /** `[Standard]` Intrinsic function to Uncapitalize LiteralString types */
    Uncapitalize<T extends TSchema>(schema: T, options?: SchemaOptions): TIntrinsic<T, 'Uncapitalize'>;
    /** `[Standard]` Creates a Union type */
    Union(anyOf: [], options?: SchemaOptions): TNever;
    /** `[Standard]` Creates a Union type */
    Union<T extends [TSchema]>(anyOf: [...T], options?: SchemaOptions): T[0];
    /** `[Standard]` Creates a Union type */
    Union<T extends TSchema[]>(anyOf: [...T], options?: SchemaOptions): TUnion<T>;
    /** `[Experimental]` Converts a TemplateLiteral into a Union */
    Union<T extends TTemplateLiteral>(template: T): TUnionTemplateLiteral<T>;
    /** `[Standard]` Creates an Unknown type */
    Unknown(options?: SchemaOptions): TUnknown;
    /** `[Standard]` Creates a Unsafe type that will infers as the generic argument T */
    Unsafe<T>(options?: UnsafeOptions): TUnsafe<T>;
    /** `[Standard]` Intrinsic function to Uppercase LiteralString types */
    Uppercase<T extends TSchema>(schema: T, options?: SchemaOptions): TIntrinsic<T, 'Uppercase'>;
}
declare class ExtendedTypeBuilder extends StandardTypeBuilder {
    /** `[Extended]` Creates a AsyncIterator type */
    AsyncIterator<T extends TSchema>(items: T, options?: SchemaOptions): TAsyncIterator<T>;
    /** `[Extended]` Constructs a type by recursively unwrapping Promise types */
    Awaited<T extends TSchema>(schema: T, options?: SchemaOptions): TAwaited<T>;
    /** `[Extended]` Creates a BigInt type */
    BigInt(options?: NumericOptions<bigint>): TBigInt;
    /** `[Extended]` Extracts the ConstructorParameters from the given Constructor type */
    ConstructorParameters<T extends TConstructor<any[], any>>(schema: T, options?: SchemaOptions): TConstructorParameters<T>;
    /** `[Extended]` Creates a Constructor type */
    Constructor<T extends TSchema[], U extends TSchema>(parameters: [...T], returns: U, options?: SchemaOptions): TConstructor<T, U>;
    /** `[Extended]` Creates a Date type */
    Date(options?: DateOptions): TDate;
    /** `[Extended]` Creates a Function type */
    Function<T extends TSchema[], U extends TSchema>(parameters: [...T], returns: U, options?: SchemaOptions): TFunction<T, U>;
    /** `[Extended]` Extracts the InstanceType from the given Constructor type */
    InstanceType<T extends TConstructor<any[], any>>(schema: T, options?: SchemaOptions): TInstanceType<T>;
    /** `[Extended]` Creates an Iterator type */
    Iterator<T extends TSchema>(items: T, options?: SchemaOptions): TIterator<T>;
    /** `[Extended]` Extracts the Parameters from the given Function type */
    Parameters<T extends TFunction<any[], any>>(schema: T, options?: SchemaOptions): TParameters<T>;
    /** `[Extended]` Creates a Promise type */
    Promise<T extends TSchema>(item: T, options?: SchemaOptions): TPromise<T>;
    /** `[Extended]` Creates a String type from a Regular Expression pattern */
    RegExp(pattern: string, options?: SchemaOptions): TString;
    /** `[Extended]` Creates a String type from a Regular Expression */
    RegExp(regex: RegExp, options?: SchemaOptions): TString;
    /**
     * @deprecated Use `Type.RegExp`
     */
    RegEx(regex: RegExp, options?: SchemaOptions): TString;
    /** `[Extended]` Extracts the ReturnType from the given Function type */
    ReturnType<T extends TFunction<any[], any>>(schema: T, options?: SchemaOptions): TReturnType<T>;
    /** `[Extended]` Creates a Symbol type */
    Symbol(options?: SchemaOptions): TSymbol;
    /** `[Extended]` Creates a Undefined type */
    Undefined(options?: SchemaOptions): TUndefined;
    /** `[Extended]` Creates a Uint8Array type */
    Uint8Array(options?: Uint8ArrayOptions): TUint8Array;
    /** `[Extended]` Creates a Void type */
    Void(options?: SchemaOptions): TVoid;
}
/** JSON Schema Type Builder with Static Resolution for TypeScript */
declare const StandardType: StandardTypeBuilder;
/** JSON Schema Type Builder with Static Resolution for TypeScript */
declare const Type: ExtendedTypeBuilder;

export { ArrayOptions, Assert, AssertProperties, AssertRest, AssertType, DateOptions, Discard, Ensure, Evaluate, ExtendedTypeBuilder, ExtendsUndefined, Flat, FormatRegistry, FormatRegistryValidationFunction, Hint, IndexedAccessor, IntersectOptional, IntersectOptions, IntersectResolve, IntersectType, Intrinsic, IsTemplateLiteralFinite, IsTemplateLiteralFiniteArray, IsTemplateLiteralFiniteCheck, KeyArrayResolver, KeyResolver, KeyResolverOptions, Kind, NumericOptions, ObjectMap, ObjectOptions, ObjectProperties, ObjectPropertyKeys, Optional, OptionalPropertyKeys, OptionalUnwrapRest, OptionalUnwrapType, PatternBoolean, PatternBooleanExact, PatternNumber, PatternNumberExact, PatternString, PatternStringExact, PropertiesReduce, PropertiesReducer, Readonly, ReadonlyOptionalPropertyKeys, ReadonlyPropertyKeys, ReadonlyUnwrapRest, ReadonlyUnwrapType, RecordKey, RecordLiteralType, RecordNumberType, RecordStringType, RecordTemplateLiteralObjectType, RecordTemplateLiteralType, RecordUnionLiteralType, RequiredPropertyKeys, SchemaOptions, StandardType, StandardTypeBuilder, Static, StringContentEncodingOption, StringFormatOption, StringOptions, SymbolValue, TAdditionalProperties, TAny, TAnySchema, TArray, TAsyncIterator, TAwaited, TAwaitedRest, TBigInt, TBoolean, TComposite, TCompositeIndex, TCompositeKeys, TCompositeReduce, TConstructor, TConstructorParameterArray, TConstructorParameters, TDate, TEnum, TEnumOption, TExclude, TExcludeArray, TExcludeTemplateLiteral, TExcludeTemplateLiteralResult, TExtends, TExtract, TExtractArray, TExtractTemplateLiteral, TExtractTemplateLiteralResult, TFunction, TFunctionParameters, TIndex, TIndexProperty, TIndexRest, TIndexRestMany, TIndexTuple, TIndexType, TInstanceType, TInteger, TIntersect, TIntrinsic, TIntrinsicLiteral, TIntrinsicMode, TIntrinsicRest, TIntrinsicTemplateLiteral, TIterator, TKeyOf, TKeyOfIndices, TKeyOfIndicesArray, TKeyOfProperties, TKind, TLiteral, TLiteralBoolean, TLiteralNumber, TLiteralString, TLiteralUnionReduce, TLiteralValue, TModifier, TNever, TNot, TNull, TNumber, TObject, TOmit, TOmitProperties, TOmitRest, TOptional, TParameters, TPartial, TPartialObjectArray, TPartialProperties, TPartialRest, TPick, TPickProperties, TPickRest, TPromise, TProperties, TPropertyKey, TReadonly, TRecord, TRecursive, TRecursiveReduce, TRef, TRequired, TRequiredProperties, TRequiredRest, TRest, TReturnType, TSchema, TString, TSymbol, TTemplateLiteral, TTemplateLiteralConst, TTemplateLiteralDslParser, TTemplateLiteralDslParserTemplate, TTemplateLiteralDslParserTerminal, TTemplateLiteralDslParserUnion, TTemplateLiteralDslParserUnionLiteral, TTemplateLiteralKeyRest, TTemplateLiteralKind, TTemplateLiteralUnion, TThis, TTuple, TTupleInfer, TUint8Array, TUndefined, TUnevaluatedProperties, TUnion, TUnionLiteralKeyRest, TUnionTemplateLiteral, TUnknown, TUnsafe, TVoid, TemplateLiteralDslParser, TemplateLiteralFinite, TemplateLiteralGenerator, TemplateLiteralParser, TemplateLiteralParserError, TemplateLiteralPattern, TemplateLiteralResolver, Trim, TupleToIntersect, TupleToUnion, Type, TypeBuilder, TypeClone, TypeExtends, TypeExtendsResult, TypeGuard, TypeGuardUnknownTypeError, TypeRegistry, TypeRegistryValidationFunction, Uint8ArrayOptions, UnionLast, UnionOptional, UnionResolve, UnionResolver, UnionToIntersect, UnionToTuple, UnionType, UnsafeOptions, ValueGuard };
