//#region src/methods/assert/assert.d.ts
/**
* Checks if the input matches the schema. As this is an assertion function, it
* can be used as a type guard.
*
* @param schema The schema to be used.
* @param input The input to be tested.
*/
declare function assert<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>>(schema: TSchema, input: unknown): asserts input is InferInput<TSchema>;
//#endregion
//#region src/methods/cache/types.d.ts
/**
* Cache interface type.
*
* @beta
*/
interface Cache<TValue$1> {
  /**
  * Creates a cache key from input and config.
  *
  * Hint: Primitive inputs are keyed by value. Object and function inputs are
  * keyed by reference identity.
  */
  key(input: unknown, config?: Config<BaseIssue<unknown>>): string;
  /**
  * Gets a value from the cache by key.
  */
  get(key: string): TValue$1 | undefined;
  /**
  * Sets a value in the cache by key.
  */
  set(key: string, value: TValue$1): void;
  /**
  * Clears all entries from the cache.
  */
  clear(): void;
}
/**
* Cache config type.
*
* @beta
*/
interface CacheConfig {
  /**
  * The maximum number of items to cache.
  *
  * @default 1000
  */
  maxSize?: number;
  /**
  * The maximum age of a cache entry in milliseconds.
  *
  * @default Infinity
  */
  maxAge?: number;
}
//#endregion
//#region src/methods/cache/cache.d.ts
/**
* Schema with cache type.
*
* @beta
*/
type SchemaWithCache<TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, TCacheConfig extends CacheConfig | undefined> = TSchema & {
  /**
  * The cache config.
  */
  readonly cacheConfig: TCacheConfig;
  /**
  * The cache instance.
  */
  readonly cache: Cache<OutputDataset<InferOutput<TSchema>, InferIssue<TSchema>>>;
};
/**
* Caches the output of a schema.
*
* Hint: Primitive inputs are cached by value. Object and function inputs are
* cached by reference identity, so mutating input objects and reusing the same
* reference can return a stale cached dataset. Returned objects are also
* reused by reference, so mutating cached output can affect later cache hits.
*
* @param schema The schema to cache.
*
* @returns The cached schema.
*
* @beta
*/
declare function cache<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>>(schema: TSchema): SchemaWithCache<TSchema, undefined>;
/**
* Caches the output of a schema.
*
* Hint: Primitive inputs are cached by value. Object and function inputs are
* cached by reference identity, so mutating input objects and reusing the same
* reference can return a stale cached dataset. Returned objects are also
* reused by reference, so mutating cached output can affect later cache hits.
*
* @param schema The schema to cache.
* @param config The cache config.
*
* @returns The cached schema.
*
* @beta
*/
declare function cache<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, const TCacheConfig extends CacheConfig | undefined>(schema: TSchema, config: TCacheConfig): SchemaWithCache<TSchema, TCacheConfig>;
//#endregion
//#region src/methods/cache/cacheAsync.d.ts
/**
* Schema with cache async type.
*
* @beta
*/
type SchemaWithCacheAsync<TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, TCacheConfig extends CacheConfig | undefined> = Omit<TSchema, "async" | "~standard" | "~run"> & {
  /**
  * Whether it's async.
  */
  readonly async: true;
  /**
  * The cache config.
  */
  readonly cacheConfig: TCacheConfig;
  /**
  * The cache instance.
  */
  readonly cache: Cache<OutputDataset<InferOutput<TSchema>, InferIssue<TSchema>>>;
  /**
  * The Standard Schema properties.
  *
  * @internal
  */
  readonly "~standard": StandardProps<InferInput<TSchema>, InferOutput<TSchema>>;
  /**
  * Parses unknown input values.
  *
  * @param dataset The input dataset.
  * @param config The configuration.
  *
  * @returns The output dataset.
  *
  * @internal
  */
  readonly "~run": (dataset: UnknownDataset, config: Config<BaseIssue<unknown>>) => Promise<OutputDataset<InferOutput<TSchema>, InferIssue<TSchema>>>;
};
/**
* Caches the output of a schema.
*
* Hint: Primitive inputs are cached by value. Object and function inputs are
* cached by reference identity, so mutating input objects and reusing the same
* reference can return a stale cached dataset. Returned objects are also
* reused by reference, so mutating cached output can affect later cache hits.
*
* @param schema The schema to cache.
*
* @returns The cached schema.
*
* @beta
*/
declare function cacheAsync<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>>(schema: TSchema): SchemaWithCacheAsync<TSchema, undefined>;
/**
* Caches the output of a schema.
*
* Hint: Primitive inputs are cached by value. Object and function inputs are
* cached by reference identity, so mutating input objects and reusing the same
* reference can return a stale cached dataset. Returned objects are also
* reused by reference, so mutating cached output can affect later cache hits.
*
* @param schema The schema to cache.
* @param config The cache config.
*
* @returns The cached schema.
*
* @beta
*/
declare function cacheAsync<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, const TCacheConfig extends CacheConfig | undefined>(schema: TSchema, config: TCacheConfig): SchemaWithCacheAsync<TSchema, TCacheConfig>;
//#endregion
//#region src/methods/config/config.d.ts
/**
* Changes the local configuration of a schema.
*
* @param schema The schema to configure.
* @param config The parse configuration.
*
* @returns The configured schema.
*/
declare function config<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>>(schema: TSchema, config: Config<InferIssue<TSchema>>): TSchema;
//#endregion
//#region src/methods/fallback/fallback.d.ts
/**
* Fallback type.
*/
type Fallback<TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>> = MaybeDeepReadonly<InferOutput<TSchema>> | ((dataset?: OutputDataset<InferOutput<TSchema>, InferIssue<TSchema>>, config?: Config<InferIssue<TSchema>>) => MaybeDeepReadonly<InferOutput<TSchema>>);
/**
* Schema with fallback type.
*/
type SchemaWithFallback<TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, TFallback$1 extends Fallback<TSchema>> = TSchema & {
  /**
  * The fallback value.
  */
  readonly fallback: TFallback$1;
};
/**
* Returns a fallback value as output if the input does not match the schema.
*
* @param schema The schema to catch.
* @param fallback The fallback value.
*
* @returns The passed schema.
*/
declare function fallback<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, const TFallback$1 extends Fallback<TSchema>>(schema: TSchema, fallback: TFallback$1): SchemaWithFallback<TSchema, TFallback$1>;
//#endregion
//#region src/methods/fallback/fallbackAsync.d.ts
/**
* Fallback async type.
*/
type FallbackAsync<TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>> = MaybeDeepReadonly<InferOutput<TSchema>> | ((dataset?: OutputDataset<InferOutput<TSchema>, InferIssue<TSchema>>, config?: Config<InferIssue<TSchema>>) => MaybePromise<MaybeDeepReadonly<InferOutput<TSchema>>>);
/**
* Schema with fallback async type.
*/
type SchemaWithFallbackAsync<TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, TFallback$1 extends FallbackAsync<TSchema>> = Omit<TSchema, "async" | "~standard" | "~run"> & {
  /**
  * The fallback value.
  */
  readonly fallback: TFallback$1;
  /**
  * Whether it's async.
  */
  readonly async: true;
  /**
  * The Standard Schema properties.
  *
  * @internal
  */
  readonly "~standard": StandardProps<InferInput<TSchema>, InferOutput<TSchema>>;
  /**
  * Parses unknown input values.
  *
  * @param dataset The input dataset.
  * @param config The configuration.
  *
  * @returns The output dataset.
  *
  * @internal
  */
  readonly "~run": (dataset: UnknownDataset, config: Config<BaseIssue<unknown>>) => Promise<OutputDataset<InferOutput<TSchema>, InferIssue<TSchema>>>;
};
/**
* Returns a fallback value as output if the input does not match the schema.
*
* @param schema The schema to catch.
* @param fallback The fallback value.
*
* @returns The passed schema.
*/
declare function fallbackAsync<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, const TFallback$1 extends FallbackAsync<TSchema>>(schema: TSchema, fallback: TFallback$1): SchemaWithFallbackAsync<TSchema, TFallback$1>;
//#endregion
//#region src/methods/flatten/flatten.d.ts
/**
* Flat errors type.
*/
type FlatErrors<TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>> | undefined> = Prettify<{
  /**
  * The root errors.
  *
  * Hint: The error messages of issues without a path that belong to the root
  * of the schema are added to this key.
  */
  readonly root?: [string, ...string[]];
  /**
  * The nested errors.
  *
  * Hint: The error messages of issues with a path that belong to the nested
  * parts of the schema and can be converted to a dot path are added to this
  * key.
  */
  readonly nested?: Prettify<Readonly<Partial<Record<TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>> ? IssueDotPath<TSchema> : string, [string, ...string[]]>>>>;
  /**
  * The other errors.
  *
  * Hint: Some issue paths, for example for complex data types like `Set` and
  * `Map`, have no key or a key that cannot be converted to a dot path. These
  * error messages are added to this key.
  */
  readonly other?: [string, ...string[]];
}>;
/**
* Flatten the error messages of issues.
*
* @param issues The list of issues.
*
* @returns A flat error object.
*/
declare function flatten(issues: [BaseIssue<unknown>, ...BaseIssue<unknown>[]]): FlatErrors<undefined>;
/**
* Flatten the error messages of issues.
*
* @param issues The list of issues.
*
* @returns A flat error object.
*/
declare function flatten<TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>>(issues: [InferIssue<TSchema>, ...InferIssue<TSchema>[]]): FlatErrors<TSchema>;
//#endregion
//#region src/methods/forward/types.d.ts
/**
* Extracts the exact keys of a tuple, array or object.
*/
type KeyOf$1<TValue$1> = IsAny<TValue$1> extends true ? never : TValue$1 extends readonly unknown[] ? number extends TValue$1["length"] ? number : { [TKey in keyof TValue$1]: TKey extends `${infer TIndex extends number}` ? TIndex : never }[number] : TValue$1 extends Record<string, unknown> ? keyof TValue$1 & (string | number) : never;
/**
* Path type.
*/
type Path$1 = readonly (string | number)[];
/**
* Required path type.
*/
type RequiredPath$1 = readonly [string | number, ...Path$1];
/**
* Lazily evaluate only the first valid path segment based on the given value.
*/
type LazyPath$1<TValue$1, TPathToCheck extends Path$1, TValidPath extends Path$1 = readonly []> = TPathToCheck extends readonly [] ? TValidPath : TPathToCheck extends readonly [infer TFirstKey extends KeyOf$1<TValue$1> & keyof TValue$1, ...infer TPathRest extends Path$1] ? LazyPath$1<TValue$1[TFirstKey], TPathRest, readonly [...TValidPath, TFirstKey]> : IsNever<KeyOf$1<TValue$1>> extends false ? readonly [...TValidPath, KeyOf$1<TValue$1>] : TValidPath;
/**
* Returns the path if valid, otherwise the first possible valid path based on
* the given value.
*/
type ValidPath$1<TValue$1 extends Record<string, unknown> | ArrayLike<unknown>, TPath extends RequiredPath$1> = TPath extends LazyPath$1<TValue$1, TPath> ? TPath : LazyPath$1<TValue$1, TPath>;
//#endregion
//#region src/methods/forward/forward.d.ts
/**
* Forwards the issues of the passed validation action.
*
* @param action The validation action.
* @param path The path to forward the issues to.
*
* @returns The modified action.
*/
declare function forward<TInput$1 extends Record<string, unknown> | ArrayLike<unknown>, TIssue extends BaseIssue<unknown>, const TPath extends RequiredPath$1>(action: BaseValidation<TInput$1, TInput$1, TIssue>, path: ValidPath$1<TInput$1, TPath>): BaseValidation<TInput$1, TInput$1, TIssue>;
//#endregion
//#region src/methods/forward/forwardAsync.d.ts
/**
* Forwards the issues of the passed validation action.
*
* @param action The validation action.
* @param path The path to forward the issues to.
*
* @returns The modified action.
*/
declare function forwardAsync<TInput$1 extends Record<string, unknown> | ArrayLike<unknown>, TIssue extends BaseIssue<unknown>, const TPath extends RequiredPath$1>(action: BaseValidation<TInput$1, TInput$1, TIssue> | BaseValidationAsync<TInput$1, TInput$1, TIssue>, path: ValidPath$1<TInput$1, TPath>): BaseValidationAsync<TInput$1, TInput$1, TIssue>;
//#endregion
//#region src/methods/getDefault/getDefault.d.ts
/**
* Schema with default type.
*/
type SchemaWithDefault = ExactOptionalSchema<BaseSchema<unknown, unknown, BaseIssue<unknown>>, unknown> | NullableSchema<BaseSchema<unknown, unknown, BaseIssue<unknown>>, unknown> | NullishSchema<BaseSchema<unknown, unknown, BaseIssue<unknown>>, unknown> | OptionalSchema<BaseSchema<unknown, unknown, BaseIssue<unknown>>, unknown> | UndefinedableSchema<BaseSchema<unknown, unknown, BaseIssue<unknown>>, unknown>;
/**
* Schema with default async type.
*/
type SchemaWithDefaultAsync = ExactOptionalSchemaAsync<BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, unknown> | NullableSchemaAsync<BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, unknown> | NullishSchemaAsync<BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, unknown> | OptionalSchemaAsync<BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, unknown> | UndefinedableSchemaAsync<BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, unknown>;
/**
* Infer default type.
*/
type InferDefault<TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>> | SchemaWithDefault | SchemaWithDefaultAsync> = TSchema extends SchemaWithDefault | SchemaWithDefaultAsync ? TSchema["default"] extends ((...args: any) => any) ? ReturnType<TSchema["default"]> : TSchema["default"] : undefined;
/**
* Returns the default value of the schema.
*
* @param schema The schema to get it from.
* @param dataset The input dataset if available.
* @param config The config if available.
*
* @returns The default value.
*/
declare function getDefault<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>>(schema: TSchema, dataset?: UnknownDataset, config?: Config<InferIssue<TSchema>>): InferDefault<TSchema>;
//#endregion
//#region src/methods/getDefaults/types.d.ts
/**
* Infer defaults type.
*/
type InferDefaults<TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>> = TSchema extends LooseObjectSchema<infer TEntries, ErrorMessage<LooseObjectIssue> | undefined> | ObjectSchema<infer TEntries, ErrorMessage<ObjectIssue> | undefined> | ObjectWithRestSchema<infer TEntries, BaseSchema<unknown, unknown, BaseIssue<unknown>>, ErrorMessage<ObjectWithRestIssue> | undefined> | StrictObjectSchema<infer TEntries, ErrorMessage<StrictObjectIssue> | undefined> ? { -readonly [TKey in keyof TEntries]: InferDefaults<TEntries[TKey]> } : TSchema extends LooseObjectSchemaAsync<infer TEntries, ErrorMessage<LooseObjectIssue> | undefined> | ObjectSchemaAsync<infer TEntries, ErrorMessage<ObjectIssue> | undefined> | ObjectWithRestSchemaAsync<infer TEntries, BaseSchema<unknown, unknown, BaseIssue<unknown>>, ErrorMessage<ObjectWithRestIssue> | undefined> | StrictObjectSchemaAsync<infer TEntries, ErrorMessage<StrictObjectIssue> | undefined> ? { -readonly [TKey in keyof TEntries]: InferDefaults<TEntries[TKey]> } : TSchema extends LooseTupleSchema<infer TItems, ErrorMessage<LooseTupleIssue> | undefined> | StrictTupleSchema<infer TItems, ErrorMessage<StrictTupleIssue> | undefined> | TupleSchema<infer TItems, ErrorMessage<TupleIssue> | undefined> | TupleWithRestSchema<infer TItems, BaseSchema<unknown, unknown, BaseIssue<unknown>>, ErrorMessage<TupleWithRestIssue> | undefined> ? { -readonly [TKey in keyof TItems]: InferDefaults<TItems[TKey]> } : TSchema extends LooseTupleSchemaAsync<infer TItems, ErrorMessage<LooseTupleIssue> | undefined> | StrictTupleSchemaAsync<infer TItems, ErrorMessage<StrictTupleIssue> | undefined> | TupleSchemaAsync<infer TItems, ErrorMessage<TupleIssue> | undefined> | TupleWithRestSchemaAsync<infer TItems, BaseSchema<unknown, unknown, BaseIssue<unknown>>, ErrorMessage<TupleWithRestIssue> | undefined> ? { -readonly [TKey in keyof TItems]: InferDefaults<TItems[TKey]> } : Awaited<InferDefault<TSchema>>;
//#endregion
//#region src/methods/getDefaults/getDefaults.d.ts
/**
* Returns the default values of the schema.
*
* Hint: The difference to `getDefault` is that for object and tuple schemas
* this function recursively returns the default values of the subschemas
* instead of `undefined`.
*
* @param schema The schema to get them from.
*
* @returns The default values.
*/
declare function getDefaults<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | LooseObjectSchema<ObjectEntries, ErrorMessage<LooseObjectIssue> | undefined> | LooseTupleSchema<TupleItems, ErrorMessage<LooseTupleIssue> | undefined> | ObjectSchema<ObjectEntries, ErrorMessage<ObjectIssue> | undefined> | ObjectWithRestSchema<ObjectEntries, BaseSchema<unknown, unknown, BaseIssue<unknown>>, ErrorMessage<ObjectWithRestIssue> | undefined> | StrictObjectSchema<ObjectEntries, ErrorMessage<StrictObjectIssue> | undefined> | StrictTupleSchema<TupleItems, ErrorMessage<StrictTupleIssue> | undefined> | TupleSchema<TupleItems, ErrorMessage<TupleIssue> | undefined> | TupleWithRestSchema<TupleItems, BaseSchema<unknown, unknown, BaseIssue<unknown>>, ErrorMessage<TupleWithRestIssue> | undefined>>(schema: TSchema): InferDefaults<TSchema>;
//#endregion
//#region src/methods/getDefaults/getDefaultsAsync.d.ts
/**
* Returns the default values of the schema.
*
* Hint: The difference to `getDefault` is that for object and tuple schemas
* this function recursively returns the default values of the subschemas
* instead of `undefined`.
*
* @param schema The schema to get them from.
*
* @returns The default values.
*/
declare function getDefaultsAsync<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>> | LooseObjectSchema<ObjectEntries, ErrorMessage<LooseObjectIssue> | undefined> | LooseObjectSchemaAsync<ObjectEntriesAsync, ErrorMessage<LooseObjectIssue> | undefined> | LooseTupleSchema<TupleItems, ErrorMessage<LooseTupleIssue> | undefined> | LooseTupleSchemaAsync<TupleItemsAsync, ErrorMessage<LooseTupleIssue> | undefined> | ObjectSchema<ObjectEntries, ErrorMessage<ObjectIssue> | undefined> | ObjectSchemaAsync<ObjectEntriesAsync, ErrorMessage<ObjectIssue> | undefined> | ObjectWithRestSchema<ObjectEntries, BaseSchema<unknown, unknown, BaseIssue<unknown>>, ErrorMessage<ObjectWithRestIssue> | undefined> | ObjectWithRestSchemaAsync<ObjectEntriesAsync, BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, ErrorMessage<ObjectWithRestIssue> | undefined> | StrictObjectSchema<ObjectEntries, ErrorMessage<StrictObjectIssue> | undefined> | StrictObjectSchemaAsync<ObjectEntriesAsync, ErrorMessage<StrictObjectIssue> | undefined> | StrictTupleSchema<TupleItems, ErrorMessage<StrictTupleIssue> | undefined> | StrictTupleSchemaAsync<TupleItemsAsync, ErrorMessage<StrictTupleIssue> | undefined> | TupleSchema<TupleItems, ErrorMessage<TupleIssue> | undefined> | TupleSchemaAsync<TupleItemsAsync, ErrorMessage<TupleIssue> | undefined> | TupleWithRestSchema<TupleItems, BaseSchema<unknown, unknown, BaseIssue<unknown>>, ErrorMessage<TupleWithRestIssue> | undefined> | TupleWithRestSchemaAsync<TupleItemsAsync, BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, ErrorMessage<TupleWithRestIssue> | undefined>>(schema: TSchema): Promise<InferDefaults<TSchema>>;
//#endregion
//#region src/methods/getDescription/getDescription.d.ts
/**
* Schema type.
*/
type Schema$14 = BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>> | SchemaWithPipe<readonly [BaseSchema<unknown, unknown, BaseIssue<unknown>>, ...(PipeItem<any, unknown, BaseIssue<unknown>> | DescriptionAction<unknown, string>)[]]> | SchemaWithPipeAsync<readonly [(BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>), ...(PipeItem<any, unknown, BaseIssue<unknown>> | PipeItemAsync<any, unknown, BaseIssue<unknown>> | DescriptionAction<unknown, string>)[]]>;
/**
* Returns the description of the schema.
*
* If multiple descriptions are defined, the last one of the highest level is
* returned. If no description is defined, `undefined` is returned.
*
* @param schema The schema to get the description from.
*
* @returns The description, if any.
*
* @beta
*/
declare function getDescription(schema: Schema$14): string | undefined;
//#endregion
//#region src/methods/getExamples/getExamples.d.ts
/**
* Schema type.
*/
type Schema$13 = BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>> | SchemaWithPipe<readonly [BaseSchema<unknown, unknown, BaseIssue<unknown>>, ...(PipeItem<any, unknown, BaseIssue<unknown>> | ExamplesAction<unknown, readonly unknown[]>)[]]> | SchemaWithPipeAsync<readonly [(BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>), ...(PipeItem<any, unknown, BaseIssue<unknown>> | PipeItemAsync<any, unknown, BaseIssue<unknown>> | ExamplesAction<unknown, readonly unknown[]>)[]]>;
/**
* Recursively concat type.
*/
type RecursiveConcat<TRootPipe extends readonly (PipeItem<any, unknown, BaseIssue<unknown>> | PipeItemAsync<any, unknown, BaseIssue<unknown>>)[], TCollectedExamples extends unknown[] = []> = TRootPipe extends readonly [infer TFirstItem, ...infer TPipeRest extends readonly (PipeItem<any, unknown, BaseIssue<unknown>> | PipeItemAsync<any, unknown, BaseIssue<unknown>>)[]] ? TFirstItem extends SchemaWithPipe<infer TNestedPipe> | SchemaWithPipeAsync<infer TNestedPipe> ? RecursiveConcat<TPipeRest, RecursiveConcat<TNestedPipe, TCollectedExamples>> : TFirstItem extends ExamplesAction<unknown, infer TCurrentExamples> ? RecursiveConcat<TPipeRest, [...TCollectedExamples, ...TCurrentExamples]> : RecursiveConcat<TPipeRest, TCollectedExamples> : TCollectedExamples;
/**
* Infer examples type.
*/
type InferExamples<TSchema extends Schema$13> = TSchema extends SchemaWithPipe<infer TPipe> | SchemaWithPipeAsync<infer TPipe> ? Readonly<RecursiveConcat<TPipe>> : [];
/**
* Returns the examples of a schema.
*
* If multiple examples are defined, it concatenates them using depth-first
* search. If no examples are defined, an empty array is returned.
*
* @param schema The schema to get the examples from.
*
* @returns The examples, if any.
*
* @beta
*/
declare function getExamples<const TSchema extends Schema$13>(schema: TSchema): InferExamples<TSchema>;
//#endregion
//#region src/methods/getFallback/getFallback.d.ts
/**
* Infer fallback type.
*/
type InferFallback<TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>> = TSchema extends SchemaWithFallback<BaseSchema<unknown, unknown, BaseIssue<unknown>>, infer TFallback> | SchemaWithFallbackAsync<BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, infer TFallback> ? TFallback extends MaybeDeepReadonly<InferOutput<TSchema>> ? TFallback : TFallback extends (() => MaybePromise<MaybeDeepReadonly<InferOutput<TSchema>>>) ? ReturnType<TFallback> : never : undefined;
/**
* Returns the fallback value of the schema.
*
* @param schema The schema to get it from.
* @param dataset The output dataset if available.
* @param config The config if available.
*
* @returns The fallback value.
*/
declare function getFallback<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>>(schema: TSchema, dataset?: OutputDataset<InferOutput<TSchema>, InferIssue<TSchema>>, config?: Config<InferIssue<TSchema>>): InferFallback<TSchema>;
//#endregion
//#region src/methods/getFallbacks/types.d.ts
/**
* Infer fallbacks type.
*/
type InferFallbacks<TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>> = TSchema extends LooseObjectSchema<infer TEntries, ErrorMessage<LooseObjectIssue> | undefined> | ObjectSchema<infer TEntries, ErrorMessage<ObjectIssue> | undefined> | ObjectWithRestSchema<infer TEntries, BaseSchema<unknown, unknown, BaseIssue<unknown>>, ErrorMessage<ObjectWithRestIssue> | undefined> | StrictObjectSchema<infer TEntries, ErrorMessage<StrictObjectIssue> | undefined> ? { -readonly [TKey in keyof TEntries]: InferFallbacks<TEntries[TKey]> } : TSchema extends LooseObjectSchemaAsync<infer TEntries, ErrorMessage<LooseObjectIssue> | undefined> | ObjectSchemaAsync<infer TEntries, ErrorMessage<ObjectIssue> | undefined> | ObjectWithRestSchemaAsync<infer TEntries, BaseSchema<unknown, unknown, BaseIssue<unknown>>, ErrorMessage<ObjectWithRestIssue> | undefined> | StrictObjectSchemaAsync<infer TEntries, ErrorMessage<StrictObjectIssue> | undefined> ? { -readonly [TKey in keyof TEntries]: InferFallbacks<TEntries[TKey]> } : TSchema extends LooseTupleSchema<infer TItems, ErrorMessage<LooseTupleIssue> | undefined> | StrictTupleSchema<infer TItems, ErrorMessage<StrictTupleIssue> | undefined> | TupleSchema<infer TItems, ErrorMessage<TupleIssue> | undefined> | TupleWithRestSchema<infer TItems, BaseSchema<unknown, unknown, BaseIssue<unknown>>, ErrorMessage<TupleWithRestIssue> | undefined> ? { -readonly [TKey in keyof TItems]: InferFallbacks<TItems[TKey]> } : TSchema extends LooseTupleSchemaAsync<infer TItems, ErrorMessage<LooseTupleIssue> | undefined> | StrictTupleSchemaAsync<infer TItems, ErrorMessage<StrictTupleIssue> | undefined> | TupleSchemaAsync<infer TItems, ErrorMessage<TupleIssue> | undefined> | TupleWithRestSchemaAsync<infer TItems, BaseSchema<unknown, unknown, BaseIssue<unknown>>, ErrorMessage<TupleWithRestIssue> | undefined> ? { -readonly [TKey in keyof TItems]: InferFallbacks<TItems[TKey]> } : Awaited<InferFallback<TSchema>>;
//#endregion
//#region src/methods/getFallbacks/getFallbacks.d.ts
/**
* Returns the fallback values of the schema.
*
* Hint: The difference to `getFallback` is that for object and tuple schemas
* this function recursively returns the fallback values of the subschemas
* instead of `undefined`.
*
* @param schema The schema to get them from.
*
* @returns The fallback values.
*/
declare function getFallbacks<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | LooseObjectSchema<ObjectEntries, ErrorMessage<LooseObjectIssue> | undefined> | LooseTupleSchema<TupleItems, ErrorMessage<LooseTupleIssue> | undefined> | ObjectSchema<ObjectEntries, ErrorMessage<ObjectIssue> | undefined> | ObjectWithRestSchema<ObjectEntries, BaseSchema<unknown, unknown, BaseIssue<unknown>>, ErrorMessage<ObjectWithRestIssue> | undefined> | StrictObjectSchema<ObjectEntries, ErrorMessage<StrictObjectIssue> | undefined> | StrictTupleSchema<TupleItems, ErrorMessage<StrictTupleIssue> | undefined> | TupleSchema<TupleItems, ErrorMessage<TupleIssue> | undefined> | TupleWithRestSchema<TupleItems, BaseSchema<unknown, unknown, BaseIssue<unknown>>, ErrorMessage<TupleWithRestIssue> | undefined>>(schema: TSchema): InferFallbacks<TSchema>;
//#endregion
//#region src/methods/getFallbacks/getFallbacksAsync.d.ts
/**
* Returns the fallback values of the schema.
*
* Hint: The difference to `getFallback` is that for object and tuple schemas
* this function recursively returns the fallback values of the subschemas
* instead of `undefined`.
*
* @param schema The schema to get them from.
*
* @returns The fallback values.
*/
declare function getFallbacksAsync<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>> | LooseObjectSchema<ObjectEntries, ErrorMessage<LooseObjectIssue> | undefined> | LooseObjectSchemaAsync<ObjectEntriesAsync, ErrorMessage<LooseObjectIssue> | undefined> | LooseTupleSchema<TupleItems, ErrorMessage<LooseTupleIssue> | undefined> | LooseTupleSchemaAsync<TupleItemsAsync, ErrorMessage<LooseTupleIssue> | undefined> | ObjectSchema<ObjectEntries, ErrorMessage<ObjectIssue> | undefined> | ObjectSchemaAsync<ObjectEntriesAsync, ErrorMessage<ObjectIssue> | undefined> | ObjectWithRestSchema<ObjectEntries, BaseSchema<unknown, unknown, BaseIssue<unknown>>, ErrorMessage<ObjectWithRestIssue> | undefined> | ObjectWithRestSchemaAsync<ObjectEntriesAsync, BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, ErrorMessage<ObjectWithRestIssue> | undefined> | StrictObjectSchema<ObjectEntries, ErrorMessage<StrictObjectIssue> | undefined> | StrictObjectSchemaAsync<ObjectEntriesAsync, ErrorMessage<StrictObjectIssue> | undefined> | StrictTupleSchema<TupleItems, ErrorMessage<StrictTupleIssue> | undefined> | StrictTupleSchemaAsync<TupleItemsAsync, ErrorMessage<StrictTupleIssue> | undefined> | TupleSchema<TupleItems, ErrorMessage<TupleIssue> | undefined> | TupleSchemaAsync<TupleItemsAsync, ErrorMessage<TupleIssue> | undefined> | TupleWithRestSchema<TupleItems, BaseSchema<unknown, unknown, BaseIssue<unknown>>, ErrorMessage<TupleWithRestIssue> | undefined> | TupleWithRestSchemaAsync<TupleItemsAsync, BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, ErrorMessage<TupleWithRestIssue> | undefined>>(schema: TSchema): Promise<InferFallbacks<TSchema>>;
//#endregion
//#region src/methods/pipe/pipe.d.ts
/**
* Schema with pipe type.
*/
type SchemaWithPipe<TPipe$1 extends readonly [BaseSchema<unknown, unknown, BaseIssue<unknown>>, ...PipeItem<any, unknown, BaseIssue<unknown>>[]]> = Omit<FirstTupleItem<TPipe$1>, "pipe" | "~standard" | "~run" | "~types"> & {
  /**
  * The pipe items.
  */
  readonly pipe: TPipe$1;
  /**
  * The Standard Schema properties.
  *
  * @internal
  */
  readonly "~standard": StandardProps<InferInput<FirstTupleItem<TPipe$1>>, InferOutput<LastTupleItem<TPipe$1>>>;
  /**
  * Parses unknown input values.
  *
  * @param dataset The input dataset.
  * @param config The configuration.
  *
  * @returns The output dataset.
  *
  * @internal
  */
  readonly "~run": (dataset: UnknownDataset, config: Config<BaseIssue<unknown>>) => OutputDataset<InferOutput<LastTupleItem<TPipe$1>>, InferIssue<TPipe$1[number]>>;
  /**
  * The input, output and issue type.
  *
  * @internal
  */
  readonly "~types"?: {
    readonly input: InferInput<FirstTupleItem<TPipe$1>>;
    readonly output: InferOutput<LastTupleItem<TPipe$1>>;
    readonly issue: InferIssue<TPipe$1[number]>;
  } | undefined;
};
/**
* Adds a pipeline to a schema, that can validate and transform its input.
*
* @param schema The root schema.
* @param item1 The first pipe item.
*
* @returns A schema with a pipeline.
*/
declare function pipe<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, const TItem1 extends PipeItem<InferOutput<TSchema>, unknown, BaseIssue<unknown>>>(schema: TSchema, item1: TItem1 | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>): SchemaWithPipe<readonly [TSchema, TItem1]>;
/**
* Adds a pipeline to a schema, that can validate and transform its input.
*
* @param schema The root schema.
* @param item1 The first pipe item.
* @param item2 The second pipe item.
*
* @returns A schema with a pipeline.
*/
declare function pipe<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, const TItem1 extends PipeItem<InferOutput<TSchema>, unknown, BaseIssue<unknown>>, const TItem2 extends PipeItem<InferOutput<TItem1>, unknown, BaseIssue<unknown>>>(schema: TSchema, item1: TItem1 | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>, item2: TItem2 | PipeAction<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>>): SchemaWithPipe<readonly [TSchema, TItem1, TItem2]>;
/**
* Adds a pipeline to a schema, that can validate and transform its input.
*
* @param schema The root schema.
* @param item1 The first pipe item.
* @param item2 The second pipe item.
* @param item3 The third pipe item.
*
* @returns A schema with a pipeline.
*/
declare function pipe<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, const TItem1 extends PipeItem<InferOutput<TSchema>, unknown, BaseIssue<unknown>>, const TItem2 extends PipeItem<InferOutput<TItem1>, unknown, BaseIssue<unknown>>, const TItem3 extends PipeItem<InferOutput<TItem2>, unknown, BaseIssue<unknown>>>(schema: TSchema, item1: TItem1 | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>, item2: TItem2 | PipeAction<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>>, item3: TItem3 | PipeAction<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>>): SchemaWithPipe<readonly [TSchema, TItem1, TItem2, TItem3]>;
/**
* Adds a pipeline to a schema, that can validate and transform its input.
*
* @param schema The root schema.
* @param item1 The first pipe item.
* @param item2 The second pipe item.
* @param item3 The third pipe item.
* @param item4 The fourth pipe item.
*
* @returns A schema with a pipeline.
*/
declare function pipe<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, const TItem1 extends PipeItem<InferOutput<TSchema>, unknown, BaseIssue<unknown>>, const TItem2 extends PipeItem<InferOutput<TItem1>, unknown, BaseIssue<unknown>>, const TItem3 extends PipeItem<InferOutput<TItem2>, unknown, BaseIssue<unknown>>, const TItem4 extends PipeItem<InferOutput<TItem3>, unknown, BaseIssue<unknown>>>(schema: TSchema, item1: TItem1 | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>, item2: TItem2 | PipeAction<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>>, item3: TItem3 | PipeAction<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>>, item4: TItem4 | PipeAction<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>>): SchemaWithPipe<readonly [TSchema, TItem1, TItem2, TItem3, TItem4]>;
/**
* Adds a pipeline to a schema, that can validate and transform its input.
*
* @param schema The root schema.
* @param item1 The first pipe item.
* @param item2 The second pipe item.
* @param item3 The third pipe item.
* @param item4 The fourth pipe item.
* @param item5 The fifth pipe item.
*
* @returns A schema with a pipeline.
*/
declare function pipe<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, const TItem1 extends PipeItem<InferOutput<TSchema>, unknown, BaseIssue<unknown>>, const TItem2 extends PipeItem<InferOutput<TItem1>, unknown, BaseIssue<unknown>>, const TItem3 extends PipeItem<InferOutput<TItem2>, unknown, BaseIssue<unknown>>, const TItem4 extends PipeItem<InferOutput<TItem3>, unknown, BaseIssue<unknown>>, const TItem5 extends PipeItem<InferOutput<TItem4>, unknown, BaseIssue<unknown>>>(schema: TSchema, item1: TItem1 | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>, item2: TItem2 | PipeAction<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>>, item3: TItem3 | PipeAction<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>>, item4: TItem4 | PipeAction<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>>, item5: TItem5 | PipeAction<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>>): SchemaWithPipe<readonly [TSchema, TItem1, TItem2, TItem3, TItem4, TItem5]>;
/**
* Adds a pipeline to a schema, that can validate and transform its input.
*
* @param schema The root schema.
* @param item1 The first pipe item.
* @param item2 The second pipe item.
* @param item3 The third pipe item.
* @param item4 The fourth pipe item.
* @param item5 The fifth pipe item.
* @param item6 The sixth pipe item.
*
* @returns A schema with a pipeline.
*/
declare function pipe<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, const TItem1 extends PipeItem<InferOutput<TSchema>, unknown, BaseIssue<unknown>>, const TItem2 extends PipeItem<InferOutput<TItem1>, unknown, BaseIssue<unknown>>, const TItem3 extends PipeItem<InferOutput<TItem2>, unknown, BaseIssue<unknown>>, const TItem4 extends PipeItem<InferOutput<TItem3>, unknown, BaseIssue<unknown>>, const TItem5 extends PipeItem<InferOutput<TItem4>, unknown, BaseIssue<unknown>>, const TItem6 extends PipeItem<InferOutput<TItem5>, unknown, BaseIssue<unknown>>>(schema: TSchema, item1: TItem1 | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>, item2: TItem2 | PipeAction<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>>, item3: TItem3 | PipeAction<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>>, item4: TItem4 | PipeAction<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>>, item5: TItem5 | PipeAction<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>>, item6: TItem6 | PipeAction<InferOutput<TItem5>, InferOutput<TItem6>, InferIssue<TItem6>>): SchemaWithPipe<readonly [TSchema, TItem1, TItem2, TItem3, TItem4, TItem5, TItem6]>;
/**
* Adds a pipeline to a schema, that can validate and transform its input.
*
* @param schema The root schema.
* @param item1 The first pipe item.
* @param item2 The second pipe item.
* @param item3 The third pipe item.
* @param item4 The fourth pipe item.
* @param item5 The fifth pipe item.
* @param item6 The sixth pipe item.
* @param item7 The seventh pipe item.
*
* @returns A schema with a pipeline.
*/
declare function pipe<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, const TItem1 extends PipeItem<InferOutput<TSchema>, unknown, BaseIssue<unknown>>, const TItem2 extends PipeItem<InferOutput<TItem1>, unknown, BaseIssue<unknown>>, const TItem3 extends PipeItem<InferOutput<TItem2>, unknown, BaseIssue<unknown>>, const TItem4 extends PipeItem<InferOutput<TItem3>, unknown, BaseIssue<unknown>>, const TItem5 extends PipeItem<InferOutput<TItem4>, unknown, BaseIssue<unknown>>, const TItem6 extends PipeItem<InferOutput<TItem5>, unknown, BaseIssue<unknown>>, const TItem7 extends PipeItem<InferOutput<TItem6>, unknown, BaseIssue<unknown>>>(schema: TSchema, item1: TItem1 | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>, item2: TItem2 | PipeAction<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>>, item3: TItem3 | PipeAction<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>>, item4: TItem4 | PipeAction<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>>, item5: TItem5 | PipeAction<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>>, item6: TItem6 | PipeAction<InferOutput<TItem5>, InferOutput<TItem6>, InferIssue<TItem6>>, item7: TItem7 | PipeAction<InferOutput<TItem6>, InferOutput<TItem7>, InferIssue<TItem7>>): SchemaWithPipe<readonly [TSchema, TItem1, TItem2, TItem3, TItem4, TItem5, TItem6, TItem7]>;
/**
* Adds a pipeline to a schema, that can validate and transform its input.
*
* @param schema The root schema.
* @param item1 The first pipe item.
* @param item2 The second pipe item.
* @param item3 The third pipe item.
* @param item4 The fourth pipe item.
* @param item5 The fifth pipe item.
* @param item6 The sixth pipe item.
* @param item7 The seventh pipe item.
* @param item8 The eighth pipe item.
*
* @returns A schema with a pipeline.
*/
declare function pipe<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, const TItem1 extends PipeItem<InferOutput<TSchema>, unknown, BaseIssue<unknown>>, const TItem2 extends PipeItem<InferOutput<TItem1>, unknown, BaseIssue<unknown>>, const TItem3 extends PipeItem<InferOutput<TItem2>, unknown, BaseIssue<unknown>>, const TItem4 extends PipeItem<InferOutput<TItem3>, unknown, BaseIssue<unknown>>, const TItem5 extends PipeItem<InferOutput<TItem4>, unknown, BaseIssue<unknown>>, const TItem6 extends PipeItem<InferOutput<TItem5>, unknown, BaseIssue<unknown>>, const TItem7 extends PipeItem<InferOutput<TItem6>, unknown, BaseIssue<unknown>>, const TItem8 extends PipeItem<InferOutput<TItem7>, unknown, BaseIssue<unknown>>>(schema: TSchema, item1: TItem1 | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>, item2: TItem2 | PipeAction<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>>, item3: TItem3 | PipeAction<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>>, item4: TItem4 | PipeAction<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>>, item5: TItem5 | PipeAction<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>>, item6: TItem6 | PipeAction<InferOutput<TItem5>, InferOutput<TItem6>, InferIssue<TItem6>>, item7: TItem7 | PipeAction<InferOutput<TItem6>, InferOutput<TItem7>, InferIssue<TItem7>>, item8: TItem8 | PipeAction<InferOutput<TItem7>, InferOutput<TItem8>, InferIssue<TItem8>>): SchemaWithPipe<readonly [TSchema, TItem1, TItem2, TItem3, TItem4, TItem5, TItem6, TItem7, TItem8]>;
/**
* Adds a pipeline to a schema, that can validate and transform its input.
*
* @param schema The root schema.
* @param item1 The first pipe item.
* @param item2 The second pipe item.
* @param item3 The third pipe item.
* @param item4 The fourth pipe item.
* @param item5 The fifth pipe item.
* @param item6 The sixth pipe item.
* @param item7 The seventh pipe item.
* @param item8 The eighth pipe item.
* @param item9 The ninth pipe item.
*
* @returns A schema with a pipeline.
*/
declare function pipe<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, const TItem1 extends PipeItem<InferOutput<TSchema>, unknown, BaseIssue<unknown>>, const TItem2 extends PipeItem<InferOutput<TItem1>, unknown, BaseIssue<unknown>>, const TItem3 extends PipeItem<InferOutput<TItem2>, unknown, BaseIssue<unknown>>, const TItem4 extends PipeItem<InferOutput<TItem3>, unknown, BaseIssue<unknown>>, const TItem5 extends PipeItem<InferOutput<TItem4>, unknown, BaseIssue<unknown>>, const TItem6 extends PipeItem<InferOutput<TItem5>, unknown, BaseIssue<unknown>>, const TItem7 extends PipeItem<InferOutput<TItem6>, unknown, BaseIssue<unknown>>, const TItem8 extends PipeItem<InferOutput<TItem7>, unknown, BaseIssue<unknown>>, const TItem9 extends PipeItem<InferOutput<TItem8>, unknown, BaseIssue<unknown>>>(schema: TSchema, item1: TItem1 | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>, item2: TItem2 | PipeAction<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>>, item3: TItem3 | PipeAction<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>>, item4: TItem4 | PipeAction<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>>, item5: TItem5 | PipeAction<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>>, item6: TItem6 | PipeAction<InferOutput<TItem5>, InferOutput<TItem6>, InferIssue<TItem6>>, item7: TItem7 | PipeAction<InferOutput<TItem6>, InferOutput<TItem7>, InferIssue<TItem7>>, item8: TItem8 | PipeAction<InferOutput<TItem7>, InferOutput<TItem8>, InferIssue<TItem8>>, item9: TItem9 | PipeAction<InferOutput<TItem8>, InferOutput<TItem9>, InferIssue<TItem9>>): SchemaWithPipe<readonly [TSchema, TItem1, TItem2, TItem3, TItem4, TItem5, TItem6, TItem7, TItem8, TItem9]>;
/**
* Adds a pipeline to a schema, that can validate and transform its input.
*
* @param schema The root schema.
* @param item1 The first pipe item.
* @param item2 The second pipe item.
* @param item3 The third pipe item.
* @param item4 The fourth pipe item.
* @param item5 The fifth pipe item.
* @param item6 The sixth pipe item.
* @param item7 The seventh pipe item.
* @param item8 The eighth pipe item.
* @param item9 The ninth pipe item.
* @param item10 The tenth pipe item.
*
* @returns A schema with a pipeline.
*/
declare function pipe<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, const TItem1 extends PipeItem<InferOutput<TSchema>, unknown, BaseIssue<unknown>>, const TItem2 extends PipeItem<InferOutput<TItem1>, unknown, BaseIssue<unknown>>, const TItem3 extends PipeItem<InferOutput<TItem2>, unknown, BaseIssue<unknown>>, const TItem4 extends PipeItem<InferOutput<TItem3>, unknown, BaseIssue<unknown>>, const TItem5 extends PipeItem<InferOutput<TItem4>, unknown, BaseIssue<unknown>>, const TItem6 extends PipeItem<InferOutput<TItem5>, unknown, BaseIssue<unknown>>, const TItem7 extends PipeItem<InferOutput<TItem6>, unknown, BaseIssue<unknown>>, const TItem8 extends PipeItem<InferOutput<TItem7>, unknown, BaseIssue<unknown>>, const TItem9 extends PipeItem<InferOutput<TItem8>, unknown, BaseIssue<unknown>>, const TItem10 extends PipeItem<InferOutput<TItem9>, unknown, BaseIssue<unknown>>>(schema: TSchema, item1: TItem1 | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>, item2: TItem2 | PipeAction<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>>, item3: TItem3 | PipeAction<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>>, item4: TItem4 | PipeAction<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>>, item5: TItem5 | PipeAction<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>>, item6: TItem6 | PipeAction<InferOutput<TItem5>, InferOutput<TItem6>, InferIssue<TItem6>>, item7: TItem7 | PipeAction<InferOutput<TItem6>, InferOutput<TItem7>, InferIssue<TItem7>>, item8: TItem8 | PipeAction<InferOutput<TItem7>, InferOutput<TItem8>, InferIssue<TItem8>>, item9: TItem9 | PipeAction<InferOutput<TItem8>, InferOutput<TItem9>, InferIssue<TItem9>>, item10: TItem10 | PipeAction<InferOutput<TItem9>, InferOutput<TItem10>, InferIssue<TItem10>>): SchemaWithPipe<readonly [TSchema, TItem1, TItem2, TItem3, TItem4, TItem5, TItem6, TItem7, TItem8, TItem9, TItem10]>;
/**
* Adds a pipeline to a schema, that can validate and transform its input.
*
* @param schema The root schema.
* @param item1 The first pipe item.
* @param item2 The second pipe item.
* @param item3 The third pipe item.
* @param item4 The fourth pipe item.
* @param item5 The fifth pipe item.
* @param item6 The sixth pipe item.
* @param item7 The seventh pipe item.
* @param item8 The eighth pipe item.
* @param item9 The ninth pipe item.
* @param item10 The tenth pipe item.
* @param item11 The eleventh pipe item.
*
* @returns A schema with a pipeline.
*/
declare function pipe<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, const TItem1 extends PipeItem<InferOutput<TSchema>, unknown, BaseIssue<unknown>>, const TItem2 extends PipeItem<InferOutput<TItem1>, unknown, BaseIssue<unknown>>, const TItem3 extends PipeItem<InferOutput<TItem2>, unknown, BaseIssue<unknown>>, const TItem4 extends PipeItem<InferOutput<TItem3>, unknown, BaseIssue<unknown>>, const TItem5 extends PipeItem<InferOutput<TItem4>, unknown, BaseIssue<unknown>>, const TItem6 extends PipeItem<InferOutput<TItem5>, unknown, BaseIssue<unknown>>, const TItem7 extends PipeItem<InferOutput<TItem6>, unknown, BaseIssue<unknown>>, const TItem8 extends PipeItem<InferOutput<TItem7>, unknown, BaseIssue<unknown>>, const TItem9 extends PipeItem<InferOutput<TItem8>, unknown, BaseIssue<unknown>>, const TItem10 extends PipeItem<InferOutput<TItem9>, unknown, BaseIssue<unknown>>, const TItem11 extends PipeItem<InferOutput<TItem10>, unknown, BaseIssue<unknown>>>(schema: TSchema, item1: TItem1 | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>, item2: TItem2 | PipeAction<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>>, item3: TItem3 | PipeAction<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>>, item4: TItem4 | PipeAction<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>>, item5: TItem5 | PipeAction<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>>, item6: TItem6 | PipeAction<InferOutput<TItem5>, InferOutput<TItem6>, InferIssue<TItem6>>, item7: TItem7 | PipeAction<InferOutput<TItem6>, InferOutput<TItem7>, InferIssue<TItem7>>, item8: TItem8 | PipeAction<InferOutput<TItem7>, InferOutput<TItem8>, InferIssue<TItem8>>, item9: TItem9 | PipeAction<InferOutput<TItem8>, InferOutput<TItem9>, InferIssue<TItem9>>, item10: TItem10 | PipeAction<InferOutput<TItem9>, InferOutput<TItem10>, InferIssue<TItem10>>, item11: TItem11 | PipeAction<InferOutput<TItem10>, InferOutput<TItem11>, InferIssue<TItem11>>): SchemaWithPipe<readonly [TSchema, TItem1, TItem2, TItem3, TItem4, TItem5, TItem6, TItem7, TItem8, TItem9, TItem10, TItem11]>;
/**
* Adds a pipeline to a schema, that can validate and transform its input.
*
* @param schema The root schema.
* @param item1 The first pipe item.
* @param item2 The second pipe item.
* @param item3 The third pipe item.
* @param item4 The fourth pipe item.
* @param item5 The fifth pipe item.
* @param item6 The sixth pipe item.
* @param item7 The seventh pipe item.
* @param item8 The eighth pipe item.
* @param item9 The ninth pipe item.
* @param item10 The tenth pipe item.
* @param item11 The eleventh pipe item.
* @param item12 The twelfth pipe item.
*
* @returns A schema with a pipeline.
*/
declare function pipe<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, const TItem1 extends PipeItem<InferOutput<TSchema>, unknown, BaseIssue<unknown>>, const TItem2 extends PipeItem<InferOutput<TItem1>, unknown, BaseIssue<unknown>>, const TItem3 extends PipeItem<InferOutput<TItem2>, unknown, BaseIssue<unknown>>, const TItem4 extends PipeItem<InferOutput<TItem3>, unknown, BaseIssue<unknown>>, const TItem5 extends PipeItem<InferOutput<TItem4>, unknown, BaseIssue<unknown>>, const TItem6 extends PipeItem<InferOutput<TItem5>, unknown, BaseIssue<unknown>>, const TItem7 extends PipeItem<InferOutput<TItem6>, unknown, BaseIssue<unknown>>, const TItem8 extends PipeItem<InferOutput<TItem7>, unknown, BaseIssue<unknown>>, const TItem9 extends PipeItem<InferOutput<TItem8>, unknown, BaseIssue<unknown>>, const TItem10 extends PipeItem<InferOutput<TItem9>, unknown, BaseIssue<unknown>>, const TItem11 extends PipeItem<InferOutput<TItem10>, unknown, BaseIssue<unknown>>, const TItem12 extends PipeItem<InferOutput<TItem11>, unknown, BaseIssue<unknown>>>(schema: TSchema, item1: TItem1 | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>, item2: TItem2 | PipeAction<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>>, item3: TItem3 | PipeAction<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>>, item4: TItem4 | PipeAction<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>>, item5: TItem5 | PipeAction<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>>, item6: TItem6 | PipeAction<InferOutput<TItem5>, InferOutput<TItem6>, InferIssue<TItem6>>, item7: TItem7 | PipeAction<InferOutput<TItem6>, InferOutput<TItem7>, InferIssue<TItem7>>, item8: TItem8 | PipeAction<InferOutput<TItem7>, InferOutput<TItem8>, InferIssue<TItem8>>, item9: TItem9 | PipeAction<InferOutput<TItem8>, InferOutput<TItem9>, InferIssue<TItem9>>, item10: TItem10 | PipeAction<InferOutput<TItem9>, InferOutput<TItem10>, InferIssue<TItem10>>, item11: TItem11 | PipeAction<InferOutput<TItem10>, InferOutput<TItem11>, InferIssue<TItem11>>, item12: TItem12 | PipeAction<InferOutput<TItem11>, InferOutput<TItem12>, InferIssue<TItem12>>): SchemaWithPipe<readonly [TSchema, TItem1, TItem2, TItem3, TItem4, TItem5, TItem6, TItem7, TItem8, TItem9, TItem10, TItem11, TItem12]>;
/**
* Adds a pipeline to a schema, that can validate and transform its input.
*
* @param schema The root schema.
* @param item1 The first pipe item.
* @param item2 The second pipe item.
* @param item3 The third pipe item.
* @param item4 The fourth pipe item.
* @param item5 The fifth pipe item.
* @param item6 The sixth pipe item.
* @param item7 The seventh pipe item.
* @param item8 The eighth pipe item.
* @param item9 The ninth pipe item.
* @param item10 The tenth pipe item.
* @param item11 The eleventh pipe item.
* @param item12 The twelfth pipe item.
* @param item13 The thirteenth pipe item.
*
* @returns A schema with a pipeline.
*/
declare function pipe<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, const TItem1 extends PipeItem<InferOutput<TSchema>, unknown, BaseIssue<unknown>>, const TItem2 extends PipeItem<InferOutput<TItem1>, unknown, BaseIssue<unknown>>, const TItem3 extends PipeItem<InferOutput<TItem2>, unknown, BaseIssue<unknown>>, const TItem4 extends PipeItem<InferOutput<TItem3>, unknown, BaseIssue<unknown>>, const TItem5 extends PipeItem<InferOutput<TItem4>, unknown, BaseIssue<unknown>>, const TItem6 extends PipeItem<InferOutput<TItem5>, unknown, BaseIssue<unknown>>, const TItem7 extends PipeItem<InferOutput<TItem6>, unknown, BaseIssue<unknown>>, const TItem8 extends PipeItem<InferOutput<TItem7>, unknown, BaseIssue<unknown>>, const TItem9 extends PipeItem<InferOutput<TItem8>, unknown, BaseIssue<unknown>>, const TItem10 extends PipeItem<InferOutput<TItem9>, unknown, BaseIssue<unknown>>, const TItem11 extends PipeItem<InferOutput<TItem10>, unknown, BaseIssue<unknown>>, const TItem12 extends PipeItem<InferOutput<TItem11>, unknown, BaseIssue<unknown>>, const TItem13 extends PipeItem<InferOutput<TItem12>, unknown, BaseIssue<unknown>>>(schema: TSchema, item1: TItem1 | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>, item2: TItem2 | PipeAction<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>>, item3: TItem3 | PipeAction<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>>, item4: TItem4 | PipeAction<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>>, item5: TItem5 | PipeAction<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>>, item6: TItem6 | PipeAction<InferOutput<TItem5>, InferOutput<TItem6>, InferIssue<TItem6>>, item7: TItem7 | PipeAction<InferOutput<TItem6>, InferOutput<TItem7>, InferIssue<TItem7>>, item8: TItem8 | PipeAction<InferOutput<TItem7>, InferOutput<TItem8>, InferIssue<TItem8>>, item9: TItem9 | PipeAction<InferOutput<TItem8>, InferOutput<TItem9>, InferIssue<TItem9>>, item10: TItem10 | PipeAction<InferOutput<TItem9>, InferOutput<TItem10>, InferIssue<TItem10>>, item11: TItem11 | PipeAction<InferOutput<TItem10>, InferOutput<TItem11>, InferIssue<TItem11>>, item12: TItem12 | PipeAction<InferOutput<TItem11>, InferOutput<TItem12>, InferIssue<TItem12>>, item13: TItem13 | PipeAction<InferOutput<TItem12>, InferOutput<TItem13>, InferIssue<TItem13>>): SchemaWithPipe<readonly [TSchema, TItem1, TItem2, TItem3, TItem4, TItem5, TItem6, TItem7, TItem8, TItem9, TItem10, TItem11, TItem12, TItem13]>;
/**
* Adds a pipeline to a schema, that can validate and transform its input.
*
* @param schema The root schema.
* @param item1 The first pipe item.
* @param item2 The second pipe item.
* @param item3 The third pipe item.
* @param item4 The fourth pipe item.
* @param item5 The fifth pipe item.
* @param item6 The sixth pipe item.
* @param item7 The seventh pipe item.
* @param item8 The eighth pipe item.
* @param item9 The ninth pipe item.
* @param item10 The tenth pipe item.
* @param item11 The eleventh pipe item.
* @param item12 The twelfth pipe item.
* @param item13 The thirteenth pipe item.
* @param item14 The fourteenth pipe item.
*
* @returns A schema with a pipeline.
*/
declare function pipe<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, const TItem1 extends PipeItem<InferOutput<TSchema>, unknown, BaseIssue<unknown>>, const TItem2 extends PipeItem<InferOutput<TItem1>, unknown, BaseIssue<unknown>>, const TItem3 extends PipeItem<InferOutput<TItem2>, unknown, BaseIssue<unknown>>, const TItem4 extends PipeItem<InferOutput<TItem3>, unknown, BaseIssue<unknown>>, const TItem5 extends PipeItem<InferOutput<TItem4>, unknown, BaseIssue<unknown>>, const TItem6 extends PipeItem<InferOutput<TItem5>, unknown, BaseIssue<unknown>>, const TItem7 extends PipeItem<InferOutput<TItem6>, unknown, BaseIssue<unknown>>, const TItem8 extends PipeItem<InferOutput<TItem7>, unknown, BaseIssue<unknown>>, const TItem9 extends PipeItem<InferOutput<TItem8>, unknown, BaseIssue<unknown>>, const TItem10 extends PipeItem<InferOutput<TItem9>, unknown, BaseIssue<unknown>>, const TItem11 extends PipeItem<InferOutput<TItem10>, unknown, BaseIssue<unknown>>, const TItem12 extends PipeItem<InferOutput<TItem11>, unknown, BaseIssue<unknown>>, const TItem13 extends PipeItem<InferOutput<TItem12>, unknown, BaseIssue<unknown>>, const TItem14 extends PipeItem<InferOutput<TItem13>, unknown, BaseIssue<unknown>>>(schema: TSchema, item1: TItem1 | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>, item2: TItem2 | PipeAction<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>>, item3: TItem3 | PipeAction<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>>, item4: TItem4 | PipeAction<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>>, item5: TItem5 | PipeAction<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>>, item6: TItem6 | PipeAction<InferOutput<TItem5>, InferOutput<TItem6>, InferIssue<TItem6>>, item7: TItem7 | PipeAction<InferOutput<TItem6>, InferOutput<TItem7>, InferIssue<TItem7>>, item8: TItem8 | PipeAction<InferOutput<TItem7>, InferOutput<TItem8>, InferIssue<TItem8>>, item9: TItem9 | PipeAction<InferOutput<TItem8>, InferOutput<TItem9>, InferIssue<TItem9>>, item10: TItem10 | PipeAction<InferOutput<TItem9>, InferOutput<TItem10>, InferIssue<TItem10>>, item11: TItem11 | PipeAction<InferOutput<TItem10>, InferOutput<TItem11>, InferIssue<TItem11>>, item12: TItem12 | PipeAction<InferOutput<TItem11>, InferOutput<TItem12>, InferIssue<TItem12>>, item13: TItem13 | PipeAction<InferOutput<TItem12>, InferOutput<TItem13>, InferIssue<TItem13>>, item14: TItem14 | PipeAction<InferOutput<TItem13>, InferOutput<TItem14>, InferIssue<TItem14>>): SchemaWithPipe<readonly [TSchema, TItem1, TItem2, TItem3, TItem4, TItem5, TItem6, TItem7, TItem8, TItem9, TItem10, TItem11, TItem12, TItem13, TItem14]>;
/**
* Adds a pipeline to a schema, that can validate and transform its input.
*
* @param schema The root schema.
* @param item1 The first pipe item.
* @param item2 The second pipe item.
* @param item3 The third pipe item.
* @param item4 The fourth pipe item.
* @param item5 The fifth pipe item.
* @param item6 The sixth pipe item.
* @param item7 The seventh pipe item.
* @param item8 The eighth pipe item.
* @param item9 The ninth pipe item.
* @param item10 The tenth pipe item.
* @param item11 The eleventh pipe item.
* @param item12 The twelfth pipe item.
* @param item13 The thirteenth pipe item.
* @param item14 The fourteenth pipe item.
* @param item15 The fifteenth pipe item.
*
* @returns A schema with a pipeline.
*/
declare function pipe<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, const TItem1 extends PipeItem<InferOutput<TSchema>, unknown, BaseIssue<unknown>>, const TItem2 extends PipeItem<InferOutput<TItem1>, unknown, BaseIssue<unknown>>, const TItem3 extends PipeItem<InferOutput<TItem2>, unknown, BaseIssue<unknown>>, const TItem4 extends PipeItem<InferOutput<TItem3>, unknown, BaseIssue<unknown>>, const TItem5 extends PipeItem<InferOutput<TItem4>, unknown, BaseIssue<unknown>>, const TItem6 extends PipeItem<InferOutput<TItem5>, unknown, BaseIssue<unknown>>, const TItem7 extends PipeItem<InferOutput<TItem6>, unknown, BaseIssue<unknown>>, const TItem8 extends PipeItem<InferOutput<TItem7>, unknown, BaseIssue<unknown>>, const TItem9 extends PipeItem<InferOutput<TItem8>, unknown, BaseIssue<unknown>>, const TItem10 extends PipeItem<InferOutput<TItem9>, unknown, BaseIssue<unknown>>, const TItem11 extends PipeItem<InferOutput<TItem10>, unknown, BaseIssue<unknown>>, const TItem12 extends PipeItem<InferOutput<TItem11>, unknown, BaseIssue<unknown>>, const TItem13 extends PipeItem<InferOutput<TItem12>, unknown, BaseIssue<unknown>>, const TItem14 extends PipeItem<InferOutput<TItem13>, unknown, BaseIssue<unknown>>, const TItem15 extends PipeItem<InferOutput<TItem14>, unknown, BaseIssue<unknown>>>(schema: TSchema, item1: TItem1 | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>, item2: TItem2 | PipeAction<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>>, item3: TItem3 | PipeAction<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>>, item4: TItem4 | PipeAction<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>>, item5: TItem5 | PipeAction<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>>, item6: TItem6 | PipeAction<InferOutput<TItem5>, InferOutput<TItem6>, InferIssue<TItem6>>, item7: TItem7 | PipeAction<InferOutput<TItem6>, InferOutput<TItem7>, InferIssue<TItem7>>, item8: TItem8 | PipeAction<InferOutput<TItem7>, InferOutput<TItem8>, InferIssue<TItem8>>, item9: TItem9 | PipeAction<InferOutput<TItem8>, InferOutput<TItem9>, InferIssue<TItem9>>, item10: TItem10 | PipeAction<InferOutput<TItem9>, InferOutput<TItem10>, InferIssue<TItem10>>, item11: TItem11 | PipeAction<InferOutput<TItem10>, InferOutput<TItem11>, InferIssue<TItem11>>, item12: TItem12 | PipeAction<InferOutput<TItem11>, InferOutput<TItem12>, InferIssue<TItem12>>, item13: TItem13 | PipeAction<InferOutput<TItem12>, InferOutput<TItem13>, InferIssue<TItem13>>, item14: TItem14 | PipeAction<InferOutput<TItem13>, InferOutput<TItem14>, InferIssue<TItem14>>, item15: TItem15 | PipeAction<InferOutput<TItem14>, InferOutput<TItem15>, InferIssue<TItem15>>): SchemaWithPipe<readonly [TSchema, TItem1, TItem2, TItem3, TItem4, TItem5, TItem6, TItem7, TItem8, TItem9, TItem10, TItem11, TItem12, TItem13, TItem14, TItem15]>;
/**
* Adds a pipeline to a schema, that can validate and transform its input.
*
* @param schema The root schema.
* @param item1 The first pipe item.
* @param item2 The second pipe item.
* @param item3 The third pipe item.
* @param item4 The fourth pipe item.
* @param item5 The fifth pipe item.
* @param item6 The sixth pipe item.
* @param item7 The seventh pipe item.
* @param item8 The eighth pipe item.
* @param item9 The ninth pipe item.
* @param item10 The tenth pipe item.
* @param item11 The eleventh pipe item.
* @param item12 The twelfth pipe item.
* @param item13 The thirteenth pipe item.
* @param item14 The fourteenth pipe item.
* @param item15 The fifteenth pipe item.
* @param item16 The sixteenth pipe item.
*
* @returns A schema with a pipeline.
*/
declare function pipe<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, const TItem1 extends PipeItem<InferOutput<TSchema>, unknown, BaseIssue<unknown>>, const TItem2 extends PipeItem<InferOutput<TItem1>, unknown, BaseIssue<unknown>>, const TItem3 extends PipeItem<InferOutput<TItem2>, unknown, BaseIssue<unknown>>, const TItem4 extends PipeItem<InferOutput<TItem3>, unknown, BaseIssue<unknown>>, const TItem5 extends PipeItem<InferOutput<TItem4>, unknown, BaseIssue<unknown>>, const TItem6 extends PipeItem<InferOutput<TItem5>, unknown, BaseIssue<unknown>>, const TItem7 extends PipeItem<InferOutput<TItem6>, unknown, BaseIssue<unknown>>, const TItem8 extends PipeItem<InferOutput<TItem7>, unknown, BaseIssue<unknown>>, const TItem9 extends PipeItem<InferOutput<TItem8>, unknown, BaseIssue<unknown>>, const TItem10 extends PipeItem<InferOutput<TItem9>, unknown, BaseIssue<unknown>>, const TItem11 extends PipeItem<InferOutput<TItem10>, unknown, BaseIssue<unknown>>, const TItem12 extends PipeItem<InferOutput<TItem11>, unknown, BaseIssue<unknown>>, const TItem13 extends PipeItem<InferOutput<TItem12>, unknown, BaseIssue<unknown>>, const TItem14 extends PipeItem<InferOutput<TItem13>, unknown, BaseIssue<unknown>>, const TItem15 extends PipeItem<InferOutput<TItem14>, unknown, BaseIssue<unknown>>, const TItem16 extends PipeItem<InferOutput<TItem15>, unknown, BaseIssue<unknown>>>(schema: TSchema, item1: TItem1 | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>, item2: TItem2 | PipeAction<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>>, item3: TItem3 | PipeAction<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>>, item4: TItem4 | PipeAction<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>>, item5: TItem5 | PipeAction<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>>, item6: TItem6 | PipeAction<InferOutput<TItem5>, InferOutput<TItem6>, InferIssue<TItem6>>, item7: TItem7 | PipeAction<InferOutput<TItem6>, InferOutput<TItem7>, InferIssue<TItem7>>, item8: TItem8 | PipeAction<InferOutput<TItem7>, InferOutput<TItem8>, InferIssue<TItem8>>, item9: TItem9 | PipeAction<InferOutput<TItem8>, InferOutput<TItem9>, InferIssue<TItem9>>, item10: TItem10 | PipeAction<InferOutput<TItem9>, InferOutput<TItem10>, InferIssue<TItem10>>, item11: TItem11 | PipeAction<InferOutput<TItem10>, InferOutput<TItem11>, InferIssue<TItem11>>, item12: TItem12 | PipeAction<InferOutput<TItem11>, InferOutput<TItem12>, InferIssue<TItem12>>, item13: TItem13 | PipeAction<InferOutput<TItem12>, InferOutput<TItem13>, InferIssue<TItem13>>, item14: TItem14 | PipeAction<InferOutput<TItem13>, InferOutput<TItem14>, InferIssue<TItem14>>, item15: TItem15 | PipeAction<InferOutput<TItem14>, InferOutput<TItem15>, InferIssue<TItem15>>, item16: TItem16 | PipeAction<InferOutput<TItem15>, InferOutput<TItem16>, InferIssue<TItem16>>): SchemaWithPipe<readonly [TSchema, TItem1, TItem2, TItem3, TItem4, TItem5, TItem6, TItem7, TItem8, TItem9, TItem10, TItem11, TItem12, TItem13, TItem14, TItem15, TItem16]>;
/**
* Adds a pipeline to a schema, that can validate and transform its input.
*
* @param schema The root schema.
* @param item1 The first pipe item.
* @param item2 The second pipe item.
* @param item3 The third pipe item.
* @param item4 The fourth pipe item.
* @param item5 The fifth pipe item.
* @param item6 The sixth pipe item.
* @param item7 The seventh pipe item.
* @param item8 The eighth pipe item.
* @param item9 The ninth pipe item.
* @param item10 The tenth pipe item.
* @param item11 The eleventh pipe item.
* @param item12 The twelfth pipe item.
* @param item13 The thirteenth pipe item.
* @param item14 The fourteenth pipe item.
* @param item15 The fifteenth pipe item.
* @param item16 The sixteenth pipe item.
*
* @returns A schema with a pipeline.
*/
declare function pipe<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, const TItem1 extends PipeItem<InferOutput<TSchema>, unknown, BaseIssue<unknown>>, const TItem2 extends PipeItem<InferOutput<TItem1>, unknown, BaseIssue<unknown>>, const TItem3 extends PipeItem<InferOutput<TItem2>, unknown, BaseIssue<unknown>>, const TItem4 extends PipeItem<InferOutput<TItem3>, unknown, BaseIssue<unknown>>, const TItem5 extends PipeItem<InferOutput<TItem4>, unknown, BaseIssue<unknown>>, const TItem6 extends PipeItem<InferOutput<TItem5>, unknown, BaseIssue<unknown>>, const TItem7 extends PipeItem<InferOutput<TItem6>, unknown, BaseIssue<unknown>>, const TItem8 extends PipeItem<InferOutput<TItem7>, unknown, BaseIssue<unknown>>, const TItem9 extends PipeItem<InferOutput<TItem8>, unknown, BaseIssue<unknown>>, const TItem10 extends PipeItem<InferOutput<TItem9>, unknown, BaseIssue<unknown>>, const TItem11 extends PipeItem<InferOutput<TItem10>, unknown, BaseIssue<unknown>>, const TItem12 extends PipeItem<InferOutput<TItem11>, unknown, BaseIssue<unknown>>, const TItem13 extends PipeItem<InferOutput<TItem12>, unknown, BaseIssue<unknown>>, const TItem14 extends PipeItem<InferOutput<TItem13>, unknown, BaseIssue<unknown>>, const TItem15 extends PipeItem<InferOutput<TItem14>, unknown, BaseIssue<unknown>>, const TItem16 extends PipeItem<InferOutput<TItem15>, unknown, BaseIssue<unknown>>>(schema: TSchema, item1: TItem1 | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>, item2: TItem2 | PipeAction<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>>, item3: TItem3 | PipeAction<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>>, item4: TItem4 | PipeAction<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>>, item5: TItem5 | PipeAction<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>>, item6: TItem6 | PipeAction<InferOutput<TItem5>, InferOutput<TItem6>, InferIssue<TItem6>>, item7: TItem7 | PipeAction<InferOutput<TItem6>, InferOutput<TItem7>, InferIssue<TItem7>>, item8: TItem8 | PipeAction<InferOutput<TItem7>, InferOutput<TItem8>, InferIssue<TItem8>>, item9: TItem9 | PipeAction<InferOutput<TItem8>, InferOutput<TItem9>, InferIssue<TItem9>>, item10: TItem10 | PipeAction<InferOutput<TItem9>, InferOutput<TItem10>, InferIssue<TItem10>>, item11: TItem11 | PipeAction<InferOutput<TItem10>, InferOutput<TItem11>, InferIssue<TItem11>>, item12: TItem12 | PipeAction<InferOutput<TItem11>, InferOutput<TItem12>, InferIssue<TItem12>>, item13: TItem13 | PipeAction<InferOutput<TItem12>, InferOutput<TItem13>, InferIssue<TItem13>>, item14: TItem14 | PipeAction<InferOutput<TItem13>, InferOutput<TItem14>, InferIssue<TItem14>>, item15: TItem15 | PipeAction<InferOutput<TItem14>, InferOutput<TItem15>, InferIssue<TItem15>>, item16: TItem16 | PipeAction<InferOutput<TItem15>, InferOutput<TItem16>, InferIssue<TItem16>>): SchemaWithPipe<readonly [TSchema, TItem1, TItem2, TItem3, TItem4, TItem5, TItem6, TItem7, TItem8, TItem9, TItem10, TItem11, TItem12, TItem13, TItem14, TItem15, TItem16]>;
/**
* Adds a pipeline to a schema, that can validate and transform its input.
*
* @param schema The root schema.
* @param item1 The first pipe item.
* @param item2 The second pipe item.
* @param item3 The third pipe item.
* @param item4 The fourth pipe item.
* @param item5 The fifth pipe item.
* @param item6 The sixth pipe item.
* @param item7 The seventh pipe item.
* @param item8 The eighth pipe item.
* @param item9 The ninth pipe item.
* @param item10 The tenth pipe item.
* @param item11 The eleventh pipe item.
* @param item12 The twelfth pipe item.
* @param item13 The thirteenth pipe item.
* @param item14 The fourteenth pipe item.
* @param item15 The fifteenth pipe item.
* @param item16 The sixteenth pipe item.
* @param item17 The seventeenth pipe item.
*
* @returns A schema with a pipeline.
*/
declare function pipe<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, const TItem1 extends PipeItem<InferOutput<TSchema>, unknown, BaseIssue<unknown>>, const TItem2 extends PipeItem<InferOutput<TItem1>, unknown, BaseIssue<unknown>>, const TItem3 extends PipeItem<InferOutput<TItem2>, unknown, BaseIssue<unknown>>, const TItem4 extends PipeItem<InferOutput<TItem3>, unknown, BaseIssue<unknown>>, const TItem5 extends PipeItem<InferOutput<TItem4>, unknown, BaseIssue<unknown>>, const TItem6 extends PipeItem<InferOutput<TItem5>, unknown, BaseIssue<unknown>>, const TItem7 extends PipeItem<InferOutput<TItem6>, unknown, BaseIssue<unknown>>, const TItem8 extends PipeItem<InferOutput<TItem7>, unknown, BaseIssue<unknown>>, const TItem9 extends PipeItem<InferOutput<TItem8>, unknown, BaseIssue<unknown>>, const TItem10 extends PipeItem<InferOutput<TItem9>, unknown, BaseIssue<unknown>>, const TItem11 extends PipeItem<InferOutput<TItem10>, unknown, BaseIssue<unknown>>, const TItem12 extends PipeItem<InferOutput<TItem11>, unknown, BaseIssue<unknown>>, const TItem13 extends PipeItem<InferOutput<TItem12>, unknown, BaseIssue<unknown>>, const TItem14 extends PipeItem<InferOutput<TItem13>, unknown, BaseIssue<unknown>>, const TItem15 extends PipeItem<InferOutput<TItem14>, unknown, BaseIssue<unknown>>, const TItem16 extends PipeItem<InferOutput<TItem15>, unknown, BaseIssue<unknown>>, const TItem17 extends PipeItem<InferOutput<TItem16>, unknown, BaseIssue<unknown>>>(schema: TSchema, item1: TItem1 | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>, item2: TItem2 | PipeAction<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>>, item3: TItem3 | PipeAction<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>>, item4: TItem4 | PipeAction<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>>, item5: TItem5 | PipeAction<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>>, item6: TItem6 | PipeAction<InferOutput<TItem5>, InferOutput<TItem6>, InferIssue<TItem6>>, item7: TItem7 | PipeAction<InferOutput<TItem6>, InferOutput<TItem7>, InferIssue<TItem7>>, item8: TItem8 | PipeAction<InferOutput<TItem7>, InferOutput<TItem8>, InferIssue<TItem8>>, item9: TItem9 | PipeAction<InferOutput<TItem8>, InferOutput<TItem9>, InferIssue<TItem9>>, item10: TItem10 | PipeAction<InferOutput<TItem9>, InferOutput<TItem10>, InferIssue<TItem10>>, item11: TItem11 | PipeAction<InferOutput<TItem10>, InferOutput<TItem11>, InferIssue<TItem11>>, item12: TItem12 | PipeAction<InferOutput<TItem11>, InferOutput<TItem12>, InferIssue<TItem12>>, item13: TItem13 | PipeAction<InferOutput<TItem12>, InferOutput<TItem13>, InferIssue<TItem13>>, item14: TItem14 | PipeAction<InferOutput<TItem13>, InferOutput<TItem14>, InferIssue<TItem14>>, item15: TItem15 | PipeAction<InferOutput<TItem14>, InferOutput<TItem15>, InferIssue<TItem15>>, item16: TItem16 | PipeAction<InferOutput<TItem15>, InferOutput<TItem16>, InferIssue<TItem16>>, item17: TItem17 | PipeAction<InferOutput<TItem16>, InferOutput<TItem17>, InferIssue<TItem17>>): SchemaWithPipe<readonly [TSchema, TItem1, TItem2, TItem3, TItem4, TItem5, TItem6, TItem7, TItem8, TItem9, TItem10, TItem11, TItem12, TItem13, TItem14, TItem15, TItem16, TItem17]>;
/**
* Adds a pipeline to a schema, that can validate and transform its input.
*
* @param schema The root schema.
* @param item1 The first pipe item.
* @param item2 The second pipe item.
* @param item3 The third pipe item.
* @param item4 The fourth pipe item.
* @param item5 The fifth pipe item.
* @param item6 The sixth pipe item.
* @param item7 The seventh pipe item.
* @param item8 The eighth pipe item.
* @param item9 The ninth pipe item.
* @param item10 The tenth pipe item.
* @param item11 The eleventh pipe item.
* @param item12 The twelfth pipe item.
* @param item13 The thirteenth pipe item.
* @param item14 The fourteenth pipe item.
* @param item15 The fifteenth pipe item.
* @param item16 The sixteenth pipe item.
* @param item17 The seventeenth pipe item.
* @param item18 The eighteenth pipe item.
*
* @returns A schema with a pipeline.
*/
declare function pipe<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, const TItem1 extends PipeItem<InferOutput<TSchema>, unknown, BaseIssue<unknown>>, const TItem2 extends PipeItem<InferOutput<TItem1>, unknown, BaseIssue<unknown>>, const TItem3 extends PipeItem<InferOutput<TItem2>, unknown, BaseIssue<unknown>>, const TItem4 extends PipeItem<InferOutput<TItem3>, unknown, BaseIssue<unknown>>, const TItem5 extends PipeItem<InferOutput<TItem4>, unknown, BaseIssue<unknown>>, const TItem6 extends PipeItem<InferOutput<TItem5>, unknown, BaseIssue<unknown>>, const TItem7 extends PipeItem<InferOutput<TItem6>, unknown, BaseIssue<unknown>>, const TItem8 extends PipeItem<InferOutput<TItem7>, unknown, BaseIssue<unknown>>, const TItem9 extends PipeItem<InferOutput<TItem8>, unknown, BaseIssue<unknown>>, const TItem10 extends PipeItem<InferOutput<TItem9>, unknown, BaseIssue<unknown>>, const TItem11 extends PipeItem<InferOutput<TItem10>, unknown, BaseIssue<unknown>>, const TItem12 extends PipeItem<InferOutput<TItem11>, unknown, BaseIssue<unknown>>, const TItem13 extends PipeItem<InferOutput<TItem12>, unknown, BaseIssue<unknown>>, const TItem14 extends PipeItem<InferOutput<TItem13>, unknown, BaseIssue<unknown>>, const TItem15 extends PipeItem<InferOutput<TItem14>, unknown, BaseIssue<unknown>>, const TItem16 extends PipeItem<InferOutput<TItem15>, unknown, BaseIssue<unknown>>, const TItem17 extends PipeItem<InferOutput<TItem16>, unknown, BaseIssue<unknown>>, const TItem18 extends PipeItem<InferOutput<TItem17>, unknown, BaseIssue<unknown>>>(schema: TSchema, item1: TItem1 | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>, item2: TItem2 | PipeAction<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>>, item3: TItem3 | PipeAction<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>>, item4: TItem4 | PipeAction<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>>, item5: TItem5 | PipeAction<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>>, item6: TItem6 | PipeAction<InferOutput<TItem5>, InferOutput<TItem6>, InferIssue<TItem6>>, item7: TItem7 | PipeAction<InferOutput<TItem6>, InferOutput<TItem7>, InferIssue<TItem7>>, item8: TItem8 | PipeAction<InferOutput<TItem7>, InferOutput<TItem8>, InferIssue<TItem8>>, item9: TItem9 | PipeAction<InferOutput<TItem8>, InferOutput<TItem9>, InferIssue<TItem9>>, item10: TItem10 | PipeAction<InferOutput<TItem9>, InferOutput<TItem10>, InferIssue<TItem10>>, item11: TItem11 | PipeAction<InferOutput<TItem10>, InferOutput<TItem11>, InferIssue<TItem11>>, item12: TItem12 | PipeAction<InferOutput<TItem11>, InferOutput<TItem12>, InferIssue<TItem12>>, item13: TItem13 | PipeAction<InferOutput<TItem12>, InferOutput<TItem13>, InferIssue<TItem13>>, item14: TItem14 | PipeAction<InferOutput<TItem13>, InferOutput<TItem14>, InferIssue<TItem14>>, item15: TItem15 | PipeAction<InferOutput<TItem14>, InferOutput<TItem15>, InferIssue<TItem15>>, item16: TItem16 | PipeAction<InferOutput<TItem15>, InferOutput<TItem16>, InferIssue<TItem16>>, item17: TItem17 | PipeAction<InferOutput<TItem16>, InferOutput<TItem17>, InferIssue<TItem17>>, item18: TItem18 | PipeAction<InferOutput<TItem17>, InferOutput<TItem18>, InferIssue<TItem18>>): SchemaWithPipe<readonly [TSchema, TItem1, TItem2, TItem3, TItem4, TItem5, TItem6, TItem7, TItem8, TItem9, TItem10, TItem11, TItem12, TItem13, TItem14, TItem15, TItem16, TItem17, TItem18]>;
/**
* Adds a pipeline to a schema, that can validate and transform its input.
*
* @param schema The root schema.
* @param item1 The first pipe item.
* @param item2 The second pipe item.
* @param item3 The third pipe item.
* @param item4 The fourth pipe item.
* @param item5 The fifth pipe item.
* @param item6 The sixth pipe item.
* @param item7 The seventh pipe item.
* @param item8 The eighth pipe item.
* @param item9 The ninth pipe item.
* @param item10 The tenth pipe item.
* @param item11 The eleventh pipe item.
* @param item12 The twelfth pipe item.
* @param item13 The thirteenth pipe item.
* @param item14 The fourteenth pipe item.
* @param item15 The fifteenth pipe item.
* @param item16 The sixteenth pipe item.
* @param item17 The seventeenth pipe item.
* @param item18 The eighteenth pipe item.
* @param item19 The nineteenth pipe item.
*
* @returns A schema with a pipeline.
*/
declare function pipe<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, const TItem1 extends PipeItem<InferOutput<TSchema>, unknown, BaseIssue<unknown>>, const TItem2 extends PipeItem<InferOutput<TItem1>, unknown, BaseIssue<unknown>>, const TItem3 extends PipeItem<InferOutput<TItem2>, unknown, BaseIssue<unknown>>, const TItem4 extends PipeItem<InferOutput<TItem3>, unknown, BaseIssue<unknown>>, const TItem5 extends PipeItem<InferOutput<TItem4>, unknown, BaseIssue<unknown>>, const TItem6 extends PipeItem<InferOutput<TItem5>, unknown, BaseIssue<unknown>>, const TItem7 extends PipeItem<InferOutput<TItem6>, unknown, BaseIssue<unknown>>, const TItem8 extends PipeItem<InferOutput<TItem7>, unknown, BaseIssue<unknown>>, const TItem9 extends PipeItem<InferOutput<TItem8>, unknown, BaseIssue<unknown>>, const TItem10 extends PipeItem<InferOutput<TItem9>, unknown, BaseIssue<unknown>>, const TItem11 extends PipeItem<InferOutput<TItem10>, unknown, BaseIssue<unknown>>, const TItem12 extends PipeItem<InferOutput<TItem11>, unknown, BaseIssue<unknown>>, const TItem13 extends PipeItem<InferOutput<TItem12>, unknown, BaseIssue<unknown>>, const TItem14 extends PipeItem<InferOutput<TItem13>, unknown, BaseIssue<unknown>>, const TItem15 extends PipeItem<InferOutput<TItem14>, unknown, BaseIssue<unknown>>, const TItem16 extends PipeItem<InferOutput<TItem15>, unknown, BaseIssue<unknown>>, const TItem17 extends PipeItem<InferOutput<TItem16>, unknown, BaseIssue<unknown>>, const TItem18 extends PipeItem<InferOutput<TItem17>, unknown, BaseIssue<unknown>>, const TItem19 extends PipeItem<InferOutput<TItem18>, unknown, BaseIssue<unknown>>>(schema: TSchema, item1: TItem1 | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>, item2: TItem2 | PipeAction<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>>, item3: TItem3 | PipeAction<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>>, item4: TItem4 | PipeAction<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>>, item5: TItem5 | PipeAction<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>>, item6: TItem6 | PipeAction<InferOutput<TItem5>, InferOutput<TItem6>, InferIssue<TItem6>>, item7: TItem7 | PipeAction<InferOutput<TItem6>, InferOutput<TItem7>, InferIssue<TItem7>>, item8: TItem8 | PipeAction<InferOutput<TItem7>, InferOutput<TItem8>, InferIssue<TItem8>>, item9: TItem9 | PipeAction<InferOutput<TItem8>, InferOutput<TItem9>, InferIssue<TItem9>>, item10: TItem10 | PipeAction<InferOutput<TItem9>, InferOutput<TItem10>, InferIssue<TItem10>>, item11: TItem11 | PipeAction<InferOutput<TItem10>, InferOutput<TItem11>, InferIssue<TItem11>>, item12: TItem12 | PipeAction<InferOutput<TItem11>, InferOutput<TItem12>, InferIssue<TItem12>>, item13: TItem13 | PipeAction<InferOutput<TItem12>, InferOutput<TItem13>, InferIssue<TItem13>>, item14: TItem14 | PipeAction<InferOutput<TItem13>, InferOutput<TItem14>, InferIssue<TItem14>>, item15: TItem15 | PipeAction<InferOutput<TItem14>, InferOutput<TItem15>, InferIssue<TItem15>>, item16: TItem16 | PipeAction<InferOutput<TItem15>, InferOutput<TItem16>, InferIssue<TItem16>>, item17: TItem17 | PipeAction<InferOutput<TItem16>, InferOutput<TItem17>, InferIssue<TItem17>>, item18: TItem18 | PipeAction<InferOutput<TItem17>, InferOutput<TItem18>, InferIssue<TItem18>>, item19: TItem19 | PipeAction<InferOutput<TItem18>, InferOutput<TItem19>, InferIssue<TItem19>>): SchemaWithPipe<readonly [TSchema, TItem1, TItem2, TItem3, TItem4, TItem5, TItem6, TItem7, TItem8, TItem9, TItem10, TItem11, TItem12, TItem13, TItem14, TItem15, TItem16, TItem17, TItem18, TItem19]>;
/**
* Adds a pipeline to a schema, that can validate and transform its input.
*
* @param schema The root schema.
* @param items The pipe items.
*
* @returns A schema with a pipeline.
*/
declare function pipe<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, const TItems$1 extends readonly PipeItem<InferOutput<TSchema>, InferOutput<TSchema>, BaseIssue<unknown>>[]>(schema: TSchema, ...items: TItems$1): SchemaWithPipe<readonly [TSchema, ...TItems$1]>;
//#endregion
//#region src/methods/pipe/pipeAsync.d.ts
/**
* Schema with pipe async type.
*/
type SchemaWithPipeAsync<TPipe$1 extends readonly [(BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>), ...(PipeItem<any, unknown, BaseIssue<unknown>> | PipeItemAsync<any, unknown, BaseIssue<unknown>>)[]]> = Omit<FirstTupleItem<TPipe$1>, "async" | "pipe" | "~standard" | "~run" | "~types"> & {
  /**
  * The pipe items.
  */
  readonly pipe: TPipe$1;
  /**
  * Whether it's async.
  */
  readonly async: true;
  /**
  * The Standard Schema properties.
  *
  * @internal
  */
  readonly "~standard": StandardProps<InferInput<FirstTupleItem<TPipe$1>>, InferOutput<LastTupleItem<TPipe$1>>>;
  /**
  * Parses unknown input values.
  *
  * @param dataset The input dataset.
  * @param config The configuration.
  *
  * @returns The output dataset.
  *
  * @internal
  */
  readonly "~run": (dataset: UnknownDataset, config: Config<BaseIssue<unknown>>) => Promise<OutputDataset<InferOutput<LastTupleItem<TPipe$1>>, InferIssue<TPipe$1[number]>>>;
  /**
  * The input, output and issue type.
  *
  * @internal
  */
  readonly "~types"?: {
    readonly input: InferInput<FirstTupleItem<TPipe$1>>;
    readonly output: InferOutput<LastTupleItem<TPipe$1>>;
    readonly issue: InferIssue<TPipe$1[number]>;
  } | undefined;
};
/**
* Adds a pipeline to a schema, that can validate and transform its input.
*
* @param schema The root schema.
* @param item1 The first pipe item.
*
* @returns A schema with a pipeline.
*/
declare function pipeAsync<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, const TItem1 extends PipeItem<InferOutput<TSchema>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TSchema>, unknown, BaseIssue<unknown>>>(schema: TSchema, item1: TItem1 | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>> | PipeActionAsync<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>): SchemaWithPipeAsync<readonly [TSchema, TItem1]>;
/**
* Adds a pipeline to a schema, that can validate and transform its input.
*
* @param schema The root schema.
* @param item1 The first pipe item.
* @param item2 The second pipe item.
*
* @returns A schema with a pipeline.
*/
declare function pipeAsync<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, const TItem1 extends PipeItem<InferOutput<TSchema>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TSchema>, unknown, BaseIssue<unknown>>, const TItem2 extends PipeItem<InferOutput<TItem1>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem1>, unknown, BaseIssue<unknown>>>(schema: TSchema, item1: TItem1 | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>> | PipeActionAsync<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>, item2: TItem2 | PipeAction<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>> | PipeActionAsync<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>>): SchemaWithPipeAsync<readonly [TSchema, TItem1, TItem2]>;
/**
* Adds a pipeline to a schema, that can validate and transform its input.
*
* @param schema The root schema.
* @param item1 The first pipe item.
* @param item2 The second pipe item.
* @param item3 The third pipe item.
*
* @returns A schema with a pipeline.
*/
declare function pipeAsync<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, const TItem1 extends PipeItem<InferOutput<TSchema>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TSchema>, unknown, BaseIssue<unknown>>, const TItem2 extends PipeItem<InferOutput<TItem1>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem1>, unknown, BaseIssue<unknown>>, const TItem3 extends PipeItem<InferOutput<TItem2>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem2>, unknown, BaseIssue<unknown>>>(schema: TSchema, item1: TItem1 | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>> | PipeActionAsync<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>, item2: TItem2 | PipeAction<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>> | PipeActionAsync<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>>, item3: TItem3 | PipeAction<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>> | PipeActionAsync<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>>): SchemaWithPipeAsync<readonly [TSchema, TItem1, TItem2, TItem3]>;
/**
* Adds a pipeline to a schema, that can validate and transform its input.
*
* @param schema The root schema.
* @param item1 The first pipe item.
* @param item2 The second pipe item.
* @param item3 The third pipe item.
* @param item4 The fourth pipe item.
*
* @returns A schema with a pipeline.
*/
declare function pipeAsync<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, const TItem1 extends PipeItem<InferOutput<TSchema>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TSchema>, unknown, BaseIssue<unknown>>, const TItem2 extends PipeItem<InferOutput<TItem1>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem1>, unknown, BaseIssue<unknown>>, const TItem3 extends PipeItem<InferOutput<TItem2>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem2>, unknown, BaseIssue<unknown>>, const TItem4 extends PipeItem<InferOutput<TItem3>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem3>, unknown, BaseIssue<unknown>>>(schema: TSchema, item1: TItem1 | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>> | PipeActionAsync<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>, item2: TItem2 | PipeAction<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>> | PipeActionAsync<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>>, item3: TItem3 | PipeAction<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>> | PipeActionAsync<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>>, item4: TItem4 | PipeAction<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>> | PipeActionAsync<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>>): SchemaWithPipeAsync<readonly [TSchema, TItem1, TItem2, TItem3, TItem4]>;
/**
* Adds a pipeline to a schema, that can validate and transform its input.
*
* @param schema The root schema.
* @param item1 The first pipe item.
* @param item2 The second pipe item.
* @param item3 The third pipe item.
* @param item4 The fourth pipe item.
* @param item5 The fifth pipe item.
*
* @returns A schema with a pipeline.
*/
declare function pipeAsync<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, const TItem1 extends PipeItem<InferOutput<TSchema>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TSchema>, unknown, BaseIssue<unknown>>, const TItem2 extends PipeItem<InferOutput<TItem1>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem1>, unknown, BaseIssue<unknown>>, const TItem3 extends PipeItem<InferOutput<TItem2>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem2>, unknown, BaseIssue<unknown>>, const TItem4 extends PipeItem<InferOutput<TItem3>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem3>, unknown, BaseIssue<unknown>>, const TItem5 extends PipeItem<InferOutput<TItem4>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem4>, unknown, BaseIssue<unknown>>>(schema: TSchema, item1: TItem1 | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>> | PipeActionAsync<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>, item2: TItem2 | PipeAction<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>> | PipeActionAsync<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>>, item3: TItem3 | PipeAction<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>> | PipeActionAsync<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>>, item4: TItem4 | PipeAction<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>> | PipeActionAsync<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>>, item5: TItem5 | PipeAction<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>> | PipeActionAsync<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>>): SchemaWithPipeAsync<readonly [TSchema, TItem1, TItem2, TItem3, TItem4, TItem5]>;
/**
* Adds a pipeline to a schema, that can validate and transform its input.
*
* @param schema The root schema.
* @param item1 The first pipe item.
* @param item2 The second pipe item.
* @param item3 The third pipe item.
* @param item4 The fourth pipe item.
* @param item5 The fifth pipe item.
* @param item6 The sixth pipe item.
*
* @returns A schema with a pipeline.
*/
declare function pipeAsync<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, const TItem1 extends PipeItem<InferOutput<TSchema>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TSchema>, unknown, BaseIssue<unknown>>, const TItem2 extends PipeItem<InferOutput<TItem1>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem1>, unknown, BaseIssue<unknown>>, const TItem3 extends PipeItem<InferOutput<TItem2>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem2>, unknown, BaseIssue<unknown>>, const TItem4 extends PipeItem<InferOutput<TItem3>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem3>, unknown, BaseIssue<unknown>>, const TItem5 extends PipeItem<InferOutput<TItem4>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem4>, unknown, BaseIssue<unknown>>, const TItem6 extends PipeItem<InferOutput<TItem5>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem5>, unknown, BaseIssue<unknown>>>(schema: TSchema, item1: TItem1 | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>> | PipeActionAsync<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>, item2: TItem2 | PipeAction<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>> | PipeActionAsync<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>>, item3: TItem3 | PipeAction<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>> | PipeActionAsync<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>>, item4: TItem4 | PipeAction<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>> | PipeActionAsync<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>>, item5: TItem5 | PipeAction<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>> | PipeActionAsync<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>>, item6: TItem6 | PipeAction<InferOutput<TItem5>, InferOutput<TItem6>, InferIssue<TItem6>> | PipeActionAsync<InferOutput<TItem5>, InferOutput<TItem6>, InferIssue<TItem6>>): SchemaWithPipeAsync<readonly [TSchema, TItem1, TItem2, TItem3, TItem4, TItem5, TItem6]>;
/**
* Adds a pipeline to a schema, that can validate and transform its input.
*
* @param schema The root schema.
* @param item1 The first pipe item.
* @param item2 The second pipe item.
* @param item3 The third pipe item.
* @param item4 The fourth pipe item.
* @param item5 The fifth pipe item.
* @param item6 The sixth pipe item.
* @param item7 The seventh pipe item.
*
* @returns A schema with a pipeline.
*/
declare function pipeAsync<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, const TItem1 extends PipeItem<InferOutput<TSchema>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TSchema>, unknown, BaseIssue<unknown>>, const TItem2 extends PipeItem<InferOutput<TItem1>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem1>, unknown, BaseIssue<unknown>>, const TItem3 extends PipeItem<InferOutput<TItem2>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem2>, unknown, BaseIssue<unknown>>, const TItem4 extends PipeItem<InferOutput<TItem3>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem3>, unknown, BaseIssue<unknown>>, const TItem5 extends PipeItem<InferOutput<TItem4>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem4>, unknown, BaseIssue<unknown>>, const TItem6 extends PipeItem<InferOutput<TItem5>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem5>, unknown, BaseIssue<unknown>>, const TItem7 extends PipeItem<InferOutput<TItem6>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem6>, unknown, BaseIssue<unknown>>>(schema: TSchema, item1: TItem1 | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>> | PipeActionAsync<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>, item2: TItem2 | PipeAction<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>> | PipeActionAsync<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>>, item3: TItem3 | PipeAction<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>> | PipeActionAsync<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>>, item4: TItem4 | PipeAction<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>> | PipeActionAsync<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>>, item5: TItem5 | PipeAction<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>> | PipeActionAsync<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>>, item6: TItem6 | PipeAction<InferOutput<TItem5>, InferOutput<TItem6>, InferIssue<TItem6>> | PipeActionAsync<InferOutput<TItem5>, InferOutput<TItem6>, InferIssue<TItem6>>, item7: TItem7 | PipeAction<InferOutput<TItem6>, InferOutput<TItem7>, InferIssue<TItem7>> | PipeActionAsync<InferOutput<TItem6>, InferOutput<TItem7>, InferIssue<TItem7>>): SchemaWithPipeAsync<readonly [TSchema, TItem1, TItem2, TItem3, TItem4, TItem5, TItem6, TItem7]>;
/**
* Adds a pipeline to a schema, that can validate and transform its input.
*
* @param schema The root schema.
* @param item1 The first pipe item.
* @param item2 The second pipe item.
* @param item3 The third pipe item.
* @param item4 The fourth pipe item.
* @param item5 The fifth pipe item.
* @param item6 The sixth pipe item.
* @param item7 The seventh pipe item.
* @param item8 The eighth pipe item.
*
* @returns A schema with a pipeline.
*/
declare function pipeAsync<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, const TItem1 extends PipeItem<InferOutput<TSchema>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TSchema>, unknown, BaseIssue<unknown>>, const TItem2 extends PipeItem<InferOutput<TItem1>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem1>, unknown, BaseIssue<unknown>>, const TItem3 extends PipeItem<InferOutput<TItem2>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem2>, unknown, BaseIssue<unknown>>, const TItem4 extends PipeItem<InferOutput<TItem3>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem3>, unknown, BaseIssue<unknown>>, const TItem5 extends PipeItem<InferOutput<TItem4>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem4>, unknown, BaseIssue<unknown>>, const TItem6 extends PipeItem<InferOutput<TItem5>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem5>, unknown, BaseIssue<unknown>>, const TItem7 extends PipeItem<InferOutput<TItem6>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem6>, unknown, BaseIssue<unknown>>, const TItem8 extends PipeItem<InferOutput<TItem7>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem7>, unknown, BaseIssue<unknown>>>(schema: TSchema, item1: TItem1 | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>> | PipeActionAsync<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>, item2: TItem2 | PipeAction<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>> | PipeActionAsync<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>>, item3: TItem3 | PipeAction<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>> | PipeActionAsync<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>>, item4: TItem4 | PipeAction<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>> | PipeActionAsync<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>>, item5: TItem5 | PipeAction<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>> | PipeActionAsync<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>>, item6: TItem6 | PipeAction<InferOutput<TItem5>, InferOutput<TItem6>, InferIssue<TItem6>> | PipeActionAsync<InferOutput<TItem5>, InferOutput<TItem6>, InferIssue<TItem6>>, item7: TItem7 | PipeAction<InferOutput<TItem6>, InferOutput<TItem7>, InferIssue<TItem7>> | PipeActionAsync<InferOutput<TItem6>, InferOutput<TItem7>, InferIssue<TItem7>>, item8: TItem8 | PipeAction<InferOutput<TItem7>, InferOutput<TItem8>, InferIssue<TItem8>> | PipeActionAsync<InferOutput<TItem7>, InferOutput<TItem8>, InferIssue<TItem8>>): SchemaWithPipeAsync<readonly [TSchema, TItem1, TItem2, TItem3, TItem4, TItem5, TItem6, TItem7, TItem8]>;
/**
* Adds a pipeline to a schema, that can validate and transform its input.
*
* @param schema The root schema.
* @param item1 The first pipe item.
* @param item2 The second pipe item.
* @param item3 The third pipe item.
* @param item4 The fourth pipe item.
* @param item5 The fifth pipe item.
* @param item6 The sixth pipe item.
* @param item7 The seventh pipe item.
* @param item8 The eighth pipe item.
* @param item9 The ninth pipe item.
*
* @returns A schema with a pipeline.
*/
declare function pipeAsync<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, const TItem1 extends PipeItem<InferOutput<TSchema>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TSchema>, unknown, BaseIssue<unknown>>, const TItem2 extends PipeItem<InferOutput<TItem1>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem1>, unknown, BaseIssue<unknown>>, const TItem3 extends PipeItem<InferOutput<TItem2>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem2>, unknown, BaseIssue<unknown>>, const TItem4 extends PipeItem<InferOutput<TItem3>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem3>, unknown, BaseIssue<unknown>>, const TItem5 extends PipeItem<InferOutput<TItem4>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem4>, unknown, BaseIssue<unknown>>, const TItem6 extends PipeItem<InferOutput<TItem5>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem5>, unknown, BaseIssue<unknown>>, const TItem7 extends PipeItem<InferOutput<TItem6>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem6>, unknown, BaseIssue<unknown>>, const TItem8 extends PipeItem<InferOutput<TItem7>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem7>, unknown, BaseIssue<unknown>>, const TItem9 extends PipeItem<InferOutput<TItem8>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem8>, unknown, BaseIssue<unknown>>>(schema: TSchema, item1: TItem1 | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>> | PipeActionAsync<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>, item2: TItem2 | PipeAction<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>> | PipeActionAsync<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>>, item3: TItem3 | PipeAction<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>> | PipeActionAsync<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>>, item4: TItem4 | PipeAction<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>> | PipeActionAsync<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>>, item5: TItem5 | PipeAction<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>> | PipeActionAsync<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>>, item6: TItem6 | PipeAction<InferOutput<TItem5>, InferOutput<TItem6>, InferIssue<TItem6>> | PipeActionAsync<InferOutput<TItem5>, InferOutput<TItem6>, InferIssue<TItem6>>, item7: TItem7 | PipeAction<InferOutput<TItem6>, InferOutput<TItem7>, InferIssue<TItem7>> | PipeActionAsync<InferOutput<TItem6>, InferOutput<TItem7>, InferIssue<TItem7>>, item8: TItem8 | PipeAction<InferOutput<TItem7>, InferOutput<TItem8>, InferIssue<TItem8>> | PipeActionAsync<InferOutput<TItem7>, InferOutput<TItem8>, InferIssue<TItem8>>, item9: TItem9 | PipeAction<InferOutput<TItem8>, InferOutput<TItem9>, InferIssue<TItem9>> | PipeActionAsync<InferOutput<TItem8>, InferOutput<TItem9>, InferIssue<TItem9>>): SchemaWithPipeAsync<readonly [TSchema, TItem1, TItem2, TItem3, TItem4, TItem5, TItem6, TItem7, TItem8, TItem9]>;
/**
* Adds a pipeline to a schema, that can validate and transform its input.
*
* @param schema The root schema.
* @param item1 The first pipe item.
* @param item2 The second pipe item.
* @param item3 The third pipe item.
* @param item4 The fourth pipe item.
* @param item5 The fifth pipe item.
* @param item6 The sixth pipe item.
* @param item7 The seventh pipe item.
* @param item8 The eighth pipe item.
* @param item9 The ninth pipe item.
* @param item10 The tenth pipe item.
*
* @returns A schema with a pipeline.
*/
declare function pipeAsync<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, const TItem1 extends PipeItem<InferOutput<TSchema>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TSchema>, unknown, BaseIssue<unknown>>, const TItem2 extends PipeItem<InferOutput<TItem1>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem1>, unknown, BaseIssue<unknown>>, const TItem3 extends PipeItem<InferOutput<TItem2>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem2>, unknown, BaseIssue<unknown>>, const TItem4 extends PipeItem<InferOutput<TItem3>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem3>, unknown, BaseIssue<unknown>>, const TItem5 extends PipeItem<InferOutput<TItem4>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem4>, unknown, BaseIssue<unknown>>, const TItem6 extends PipeItem<InferOutput<TItem5>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem5>, unknown, BaseIssue<unknown>>, const TItem7 extends PipeItem<InferOutput<TItem6>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem6>, unknown, BaseIssue<unknown>>, const TItem8 extends PipeItem<InferOutput<TItem7>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem7>, unknown, BaseIssue<unknown>>, const TItem9 extends PipeItem<InferOutput<TItem8>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem8>, unknown, BaseIssue<unknown>>, const TItem10 extends PipeItem<InferOutput<TItem9>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem9>, unknown, BaseIssue<unknown>>>(schema: TSchema, item1: TItem1 | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>> | PipeActionAsync<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>, item2: TItem2 | PipeAction<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>> | PipeActionAsync<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>>, item3: TItem3 | PipeAction<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>> | PipeActionAsync<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>>, item4: TItem4 | PipeAction<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>> | PipeActionAsync<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>>, item5: TItem5 | PipeAction<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>> | PipeActionAsync<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>>, item6: TItem6 | PipeAction<InferOutput<TItem5>, InferOutput<TItem6>, InferIssue<TItem6>> | PipeActionAsync<InferOutput<TItem5>, InferOutput<TItem6>, InferIssue<TItem6>>, item7: TItem7 | PipeAction<InferOutput<TItem6>, InferOutput<TItem7>, InferIssue<TItem7>> | PipeActionAsync<InferOutput<TItem6>, InferOutput<TItem7>, InferIssue<TItem7>>, item8: TItem8 | PipeAction<InferOutput<TItem7>, InferOutput<TItem8>, InferIssue<TItem8>> | PipeActionAsync<InferOutput<TItem7>, InferOutput<TItem8>, InferIssue<TItem8>>, item9: TItem9 | PipeAction<InferOutput<TItem8>, InferOutput<TItem9>, InferIssue<TItem9>> | PipeActionAsync<InferOutput<TItem8>, InferOutput<TItem9>, InferIssue<TItem9>>, item10: TItem10 | PipeAction<InferOutput<TItem9>, InferOutput<TItem10>, InferIssue<TItem10>> | PipeActionAsync<InferOutput<TItem9>, InferOutput<TItem10>, InferIssue<TItem10>>): SchemaWithPipeAsync<readonly [TSchema, TItem1, TItem2, TItem3, TItem4, TItem5, TItem6, TItem7, TItem8, TItem9, TItem10]>;
/**
* Adds a pipeline to a schema, that can validate and transform its input.
*
* @param schema The root schema.
* @param item1 The first pipe item.
* @param item2 The second pipe item.
* @param item3 The third pipe item.
* @param item4 The fourth pipe item.
* @param item5 The fifth pipe item.
* @param item6 The sixth pipe item.
* @param item7 The seventh pipe item.
* @param item8 The eighth pipe item.
* @param item9 The ninth pipe item.
* @param item10 The tenth pipe item.
* @param item11 The eleventh pipe item.
*
* @returns A schema with a pipeline.
*/
declare function pipeAsync<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, const TItem1 extends PipeItem<InferOutput<TSchema>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TSchema>, unknown, BaseIssue<unknown>>, const TItem2 extends PipeItem<InferOutput<TItem1>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem1>, unknown, BaseIssue<unknown>>, const TItem3 extends PipeItem<InferOutput<TItem2>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem2>, unknown, BaseIssue<unknown>>, const TItem4 extends PipeItem<InferOutput<TItem3>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem3>, unknown, BaseIssue<unknown>>, const TItem5 extends PipeItem<InferOutput<TItem4>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem4>, unknown, BaseIssue<unknown>>, const TItem6 extends PipeItem<InferOutput<TItem5>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem5>, unknown, BaseIssue<unknown>>, const TItem7 extends PipeItem<InferOutput<TItem6>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem6>, unknown, BaseIssue<unknown>>, const TItem8 extends PipeItem<InferOutput<TItem7>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem7>, unknown, BaseIssue<unknown>>, const TItem9 extends PipeItem<InferOutput<TItem8>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem8>, unknown, BaseIssue<unknown>>, const TItem10 extends PipeItem<InferOutput<TItem9>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem9>, unknown, BaseIssue<unknown>>, const TItem11 extends PipeItem<InferOutput<TItem10>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem10>, unknown, BaseIssue<unknown>>>(schema: TSchema, item1: TItem1 | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>> | PipeActionAsync<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>, item2: TItem2 | PipeAction<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>> | PipeActionAsync<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>>, item3: TItem3 | PipeAction<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>> | PipeActionAsync<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>>, item4: TItem4 | PipeAction<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>> | PipeActionAsync<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>>, item5: TItem5 | PipeAction<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>> | PipeActionAsync<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>>, item6: TItem6 | PipeAction<InferOutput<TItem5>, InferOutput<TItem6>, InferIssue<TItem6>> | PipeActionAsync<InferOutput<TItem5>, InferOutput<TItem6>, InferIssue<TItem6>>, item7: TItem7 | PipeAction<InferOutput<TItem6>, InferOutput<TItem7>, InferIssue<TItem7>> | PipeActionAsync<InferOutput<TItem6>, InferOutput<TItem7>, InferIssue<TItem7>>, item8: TItem8 | PipeAction<InferOutput<TItem7>, InferOutput<TItem8>, InferIssue<TItem8>> | PipeActionAsync<InferOutput<TItem7>, InferOutput<TItem8>, InferIssue<TItem8>>, item9: TItem9 | PipeAction<InferOutput<TItem8>, InferOutput<TItem9>, InferIssue<TItem9>> | PipeActionAsync<InferOutput<TItem8>, InferOutput<TItem9>, InferIssue<TItem9>>, item10: TItem10 | PipeAction<InferOutput<TItem9>, InferOutput<TItem10>, InferIssue<TItem10>> | PipeActionAsync<InferOutput<TItem9>, InferOutput<TItem10>, InferIssue<TItem10>>, item11: TItem11 | PipeAction<InferOutput<TItem10>, InferOutput<TItem11>, InferIssue<TItem11>> | PipeActionAsync<InferOutput<TItem10>, InferOutput<TItem11>, InferIssue<TItem11>>): SchemaWithPipeAsync<readonly [TSchema, TItem1, TItem2, TItem3, TItem4, TItem5, TItem6, TItem7, TItem8, TItem9, TItem10, TItem11]>;
/**
* Adds a pipeline to a schema, that can validate and transform its input.
*
* @param schema The root schema.
* @param item1 The first pipe item.
* @param item2 The second pipe item.
* @param item3 The third pipe item.
* @param item4 The fourth pipe item.
* @param item5 The fifth pipe item.
* @param item6 The sixth pipe item.
* @param item7 The seventh pipe item.
* @param item8 The eighth pipe item.
* @param item9 The ninth pipe item.
* @param item10 The tenth pipe item.
* @param item11 The eleventh pipe item.
* @param item12 The twelfth pipe item.
*
* @returns A schema with a pipeline.
*/
declare function pipeAsync<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, const TItem1 extends PipeItem<InferOutput<TSchema>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TSchema>, unknown, BaseIssue<unknown>>, const TItem2 extends PipeItem<InferOutput<TItem1>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem1>, unknown, BaseIssue<unknown>>, const TItem3 extends PipeItem<InferOutput<TItem2>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem2>, unknown, BaseIssue<unknown>>, const TItem4 extends PipeItem<InferOutput<TItem3>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem3>, unknown, BaseIssue<unknown>>, const TItem5 extends PipeItem<InferOutput<TItem4>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem4>, unknown, BaseIssue<unknown>>, const TItem6 extends PipeItem<InferOutput<TItem5>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem5>, unknown, BaseIssue<unknown>>, const TItem7 extends PipeItem<InferOutput<TItem6>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem6>, unknown, BaseIssue<unknown>>, const TItem8 extends PipeItem<InferOutput<TItem7>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem7>, unknown, BaseIssue<unknown>>, const TItem9 extends PipeItem<InferOutput<TItem8>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem8>, unknown, BaseIssue<unknown>>, const TItem10 extends PipeItem<InferOutput<TItem9>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem9>, unknown, BaseIssue<unknown>>, const TItem11 extends PipeItem<InferOutput<TItem10>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem10>, unknown, BaseIssue<unknown>>, const TItem12 extends PipeItem<InferOutput<TItem11>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem11>, unknown, BaseIssue<unknown>>>(schema: TSchema, item1: TItem1 | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>> | PipeActionAsync<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>, item2: TItem2 | PipeAction<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>> | PipeActionAsync<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>>, item3: TItem3 | PipeAction<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>> | PipeActionAsync<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>>, item4: TItem4 | PipeAction<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>> | PipeActionAsync<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>>, item5: TItem5 | PipeAction<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>> | PipeActionAsync<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>>, item6: TItem6 | PipeAction<InferOutput<TItem5>, InferOutput<TItem6>, InferIssue<TItem6>> | PipeActionAsync<InferOutput<TItem5>, InferOutput<TItem6>, InferIssue<TItem6>>, item7: TItem7 | PipeAction<InferOutput<TItem6>, InferOutput<TItem7>, InferIssue<TItem7>> | PipeActionAsync<InferOutput<TItem6>, InferOutput<TItem7>, InferIssue<TItem7>>, item8: TItem8 | PipeAction<InferOutput<TItem7>, InferOutput<TItem8>, InferIssue<TItem8>> | PipeActionAsync<InferOutput<TItem7>, InferOutput<TItem8>, InferIssue<TItem8>>, item9: TItem9 | PipeAction<InferOutput<TItem8>, InferOutput<TItem9>, InferIssue<TItem9>> | PipeActionAsync<InferOutput<TItem8>, InferOutput<TItem9>, InferIssue<TItem9>>, item10: TItem10 | PipeAction<InferOutput<TItem9>, InferOutput<TItem10>, InferIssue<TItem10>> | PipeActionAsync<InferOutput<TItem9>, InferOutput<TItem10>, InferIssue<TItem10>>, item11: TItem11 | PipeAction<InferOutput<TItem10>, InferOutput<TItem11>, InferIssue<TItem11>> | PipeActionAsync<InferOutput<TItem10>, InferOutput<TItem11>, InferIssue<TItem11>>, item12: TItem12 | PipeAction<InferOutput<TItem11>, InferOutput<TItem12>, InferIssue<TItem12>> | PipeActionAsync<InferOutput<TItem11>, InferOutput<TItem12>, InferIssue<TItem12>>): SchemaWithPipeAsync<readonly [TSchema, TItem1, TItem2, TItem3, TItem4, TItem5, TItem6, TItem7, TItem8, TItem9, TItem10, TItem11, TItem12]>;
/**
* Adds a pipeline to a schema, that can validate and transform its input.
*
* @param schema The root schema.
* @param item1 The first pipe item.
* @param item2 The second pipe item.
* @param item3 The third pipe item.
* @param item4 The fourth pipe item.
* @param item5 The fifth pipe item.
* @param item6 The sixth pipe item.
* @param item7 The seventh pipe item.
* @param item8 The eighth pipe item.
* @param item9 The ninth pipe item.
* @param item10 The tenth pipe item.
* @param item11 The eleventh pipe item.
* @param item12 The twelfth pipe item.
* @param item13 The thirteenth pipe item.
*
* @returns A schema with a pipeline.
*/
declare function pipeAsync<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, const TItem1 extends PipeItem<InferOutput<TSchema>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TSchema>, unknown, BaseIssue<unknown>>, const TItem2 extends PipeItem<InferOutput<TItem1>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem1>, unknown, BaseIssue<unknown>>, const TItem3 extends PipeItem<InferOutput<TItem2>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem2>, unknown, BaseIssue<unknown>>, const TItem4 extends PipeItem<InferOutput<TItem3>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem3>, unknown, BaseIssue<unknown>>, const TItem5 extends PipeItem<InferOutput<TItem4>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem4>, unknown, BaseIssue<unknown>>, const TItem6 extends PipeItem<InferOutput<TItem5>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem5>, unknown, BaseIssue<unknown>>, const TItem7 extends PipeItem<InferOutput<TItem6>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem6>, unknown, BaseIssue<unknown>>, const TItem8 extends PipeItem<InferOutput<TItem7>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem7>, unknown, BaseIssue<unknown>>, const TItem9 extends PipeItem<InferOutput<TItem8>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem8>, unknown, BaseIssue<unknown>>, const TItem10 extends PipeItem<InferOutput<TItem9>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem9>, unknown, BaseIssue<unknown>>, const TItem11 extends PipeItem<InferOutput<TItem10>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem10>, unknown, BaseIssue<unknown>>, const TItem12 extends PipeItem<InferOutput<TItem11>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem11>, unknown, BaseIssue<unknown>>, const TItem13 extends PipeItem<InferOutput<TItem12>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem12>, unknown, BaseIssue<unknown>>>(schema: TSchema, item1: TItem1 | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>> | PipeActionAsync<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>, item2: TItem2 | PipeAction<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>> | PipeActionAsync<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>>, item3: TItem3 | PipeAction<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>> | PipeActionAsync<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>>, item4: TItem4 | PipeAction<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>> | PipeActionAsync<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>>, item5: TItem5 | PipeAction<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>> | PipeActionAsync<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>>, item6: TItem6 | PipeAction<InferOutput<TItem5>, InferOutput<TItem6>, InferIssue<TItem6>> | PipeActionAsync<InferOutput<TItem5>, InferOutput<TItem6>, InferIssue<TItem6>>, item7: TItem7 | PipeAction<InferOutput<TItem6>, InferOutput<TItem7>, InferIssue<TItem7>> | PipeActionAsync<InferOutput<TItem6>, InferOutput<TItem7>, InferIssue<TItem7>>, item8: TItem8 | PipeAction<InferOutput<TItem7>, InferOutput<TItem8>, InferIssue<TItem8>> | PipeActionAsync<InferOutput<TItem7>, InferOutput<TItem8>, InferIssue<TItem8>>, item9: TItem9 | PipeAction<InferOutput<TItem8>, InferOutput<TItem9>, InferIssue<TItem9>> | PipeActionAsync<InferOutput<TItem8>, InferOutput<TItem9>, InferIssue<TItem9>>, item10: TItem10 | PipeAction<InferOutput<TItem9>, InferOutput<TItem10>, InferIssue<TItem10>> | PipeActionAsync<InferOutput<TItem9>, InferOutput<TItem10>, InferIssue<TItem10>>, item11: TItem11 | PipeAction<InferOutput<TItem10>, InferOutput<TItem11>, InferIssue<TItem11>> | PipeActionAsync<InferOutput<TItem10>, InferOutput<TItem11>, InferIssue<TItem11>>, item12: TItem12 | PipeAction<InferOutput<TItem11>, InferOutput<TItem12>, InferIssue<TItem12>> | PipeActionAsync<InferOutput<TItem11>, InferOutput<TItem12>, InferIssue<TItem12>>, item13: TItem13 | PipeAction<InferOutput<TItem12>, InferOutput<TItem13>, InferIssue<TItem13>> | PipeActionAsync<InferOutput<TItem12>, InferOutput<TItem13>, InferIssue<TItem13>>): SchemaWithPipeAsync<readonly [TSchema, TItem1, TItem2, TItem3, TItem4, TItem5, TItem6, TItem7, TItem8, TItem9, TItem10, TItem11, TItem12, TItem13]>;
/**
* Adds a pipeline to a schema, that can validate and transform its input.
*
* @param schema The root schema.
* @param item1 The first pipe item.
* @param item2 The second pipe item.
* @param item3 The third pipe item.
* @param item4 The fourth pipe item.
* @param item5 The fifth pipe item.
* @param item6 The sixth pipe item.
* @param item7 The seventh pipe item.
* @param item8 The eighth pipe item.
* @param item9 The ninth pipe item.
* @param item10 The tenth pipe item.
* @param item11 The eleventh pipe item.
* @param item12 The twelfth pipe item.
* @param item13 The thirteenth pipe item.
* @param item14 The fourteenth pipe item.
*
* @returns A schema with a pipeline.
*/
declare function pipeAsync<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, const TItem1 extends PipeItem<InferOutput<TSchema>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TSchema>, unknown, BaseIssue<unknown>>, const TItem2 extends PipeItem<InferOutput<TItem1>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem1>, unknown, BaseIssue<unknown>>, const TItem3 extends PipeItem<InferOutput<TItem2>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem2>, unknown, BaseIssue<unknown>>, const TItem4 extends PipeItem<InferOutput<TItem3>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem3>, unknown, BaseIssue<unknown>>, const TItem5 extends PipeItem<InferOutput<TItem4>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem4>, unknown, BaseIssue<unknown>>, const TItem6 extends PipeItem<InferOutput<TItem5>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem5>, unknown, BaseIssue<unknown>>, const TItem7 extends PipeItem<InferOutput<TItem6>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem6>, unknown, BaseIssue<unknown>>, const TItem8 extends PipeItem<InferOutput<TItem7>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem7>, unknown, BaseIssue<unknown>>, const TItem9 extends PipeItem<InferOutput<TItem8>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem8>, unknown, BaseIssue<unknown>>, const TItem10 extends PipeItem<InferOutput<TItem9>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem9>, unknown, BaseIssue<unknown>>, const TItem11 extends PipeItem<InferOutput<TItem10>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem10>, unknown, BaseIssue<unknown>>, const TItem12 extends PipeItem<InferOutput<TItem11>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem11>, unknown, BaseIssue<unknown>>, const TItem13 extends PipeItem<InferOutput<TItem12>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem12>, unknown, BaseIssue<unknown>>, const TItem14 extends PipeItem<InferOutput<TItem13>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem13>, unknown, BaseIssue<unknown>>>(schema: TSchema, item1: TItem1 | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>> | PipeActionAsync<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>, item2: TItem2 | PipeAction<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>> | PipeActionAsync<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>>, item3: TItem3 | PipeAction<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>> | PipeActionAsync<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>>, item4: TItem4 | PipeAction<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>> | PipeActionAsync<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>>, item5: TItem5 | PipeAction<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>> | PipeActionAsync<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>>, item6: TItem6 | PipeAction<InferOutput<TItem5>, InferOutput<TItem6>, InferIssue<TItem6>> | PipeActionAsync<InferOutput<TItem5>, InferOutput<TItem6>, InferIssue<TItem6>>, item7: TItem7 | PipeAction<InferOutput<TItem6>, InferOutput<TItem7>, InferIssue<TItem7>> | PipeActionAsync<InferOutput<TItem6>, InferOutput<TItem7>, InferIssue<TItem7>>, item8: TItem8 | PipeAction<InferOutput<TItem7>, InferOutput<TItem8>, InferIssue<TItem8>> | PipeActionAsync<InferOutput<TItem7>, InferOutput<TItem8>, InferIssue<TItem8>>, item9: TItem9 | PipeAction<InferOutput<TItem8>, InferOutput<TItem9>, InferIssue<TItem9>> | PipeActionAsync<InferOutput<TItem8>, InferOutput<TItem9>, InferIssue<TItem9>>, item10: TItem10 | PipeAction<InferOutput<TItem9>, InferOutput<TItem10>, InferIssue<TItem10>> | PipeActionAsync<InferOutput<TItem9>, InferOutput<TItem10>, InferIssue<TItem10>>, item11: TItem11 | PipeAction<InferOutput<TItem10>, InferOutput<TItem11>, InferIssue<TItem11>> | PipeActionAsync<InferOutput<TItem10>, InferOutput<TItem11>, InferIssue<TItem11>>, item12: TItem12 | PipeAction<InferOutput<TItem11>, InferOutput<TItem12>, InferIssue<TItem12>> | PipeActionAsync<InferOutput<TItem11>, InferOutput<TItem12>, InferIssue<TItem12>>, item13: TItem13 | PipeAction<InferOutput<TItem12>, InferOutput<TItem13>, InferIssue<TItem13>> | PipeActionAsync<InferOutput<TItem12>, InferOutput<TItem13>, InferIssue<TItem13>>, item14: TItem14 | PipeAction<InferOutput<TItem13>, InferOutput<TItem14>, InferIssue<TItem14>> | PipeActionAsync<InferOutput<TItem13>, InferOutput<TItem14>, InferIssue<TItem14>>): SchemaWithPipeAsync<readonly [TSchema, TItem1, TItem2, TItem3, TItem4, TItem5, TItem6, TItem7, TItem8, TItem9, TItem10, TItem11, TItem12, TItem13, TItem14]>;
/**
* Adds a pipeline to a schema, that can validate and transform its input.
*
* @param schema The root schema.
* @param item1 The first pipe item.
* @param item2 The second pipe item.
* @param item3 The third pipe item.
* @param item4 The fourth pipe item.
* @param item5 The fifth pipe item.
* @param item6 The sixth pipe item.
* @param item7 The seventh pipe item.
* @param item8 The eighth pipe item.
* @param item9 The ninth pipe item.
* @param item10 The tenth pipe item.
* @param item11 The eleventh pipe item.
* @param item12 The twelfth pipe item.
* @param item13 The thirteenth pipe item.
* @param item14 The fourteenth pipe item.
* @param item15 The fifteenth pipe item.
*
* @returns A schema with a pipeline.
*/
declare function pipeAsync<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, const TItem1 extends PipeItem<InferOutput<TSchema>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TSchema>, unknown, BaseIssue<unknown>>, const TItem2 extends PipeItem<InferOutput<TItem1>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem1>, unknown, BaseIssue<unknown>>, const TItem3 extends PipeItem<InferOutput<TItem2>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem2>, unknown, BaseIssue<unknown>>, const TItem4 extends PipeItem<InferOutput<TItem3>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem3>, unknown, BaseIssue<unknown>>, const TItem5 extends PipeItem<InferOutput<TItem4>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem4>, unknown, BaseIssue<unknown>>, const TItem6 extends PipeItem<InferOutput<TItem5>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem5>, unknown, BaseIssue<unknown>>, const TItem7 extends PipeItem<InferOutput<TItem6>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem6>, unknown, BaseIssue<unknown>>, const TItem8 extends PipeItem<InferOutput<TItem7>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem7>, unknown, BaseIssue<unknown>>, const TItem9 extends PipeItem<InferOutput<TItem8>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem8>, unknown, BaseIssue<unknown>>, const TItem10 extends PipeItem<InferOutput<TItem9>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem9>, unknown, BaseIssue<unknown>>, const TItem11 extends PipeItem<InferOutput<TItem10>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem10>, unknown, BaseIssue<unknown>>, const TItem12 extends PipeItem<InferOutput<TItem11>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem11>, unknown, BaseIssue<unknown>>, const TItem13 extends PipeItem<InferOutput<TItem12>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem12>, unknown, BaseIssue<unknown>>, const TItem14 extends PipeItem<InferOutput<TItem13>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem13>, unknown, BaseIssue<unknown>>, const TItem15 extends PipeItem<InferOutput<TItem14>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem14>, unknown, BaseIssue<unknown>>>(schema: TSchema, item1: TItem1 | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>> | PipeActionAsync<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>, item2: TItem2 | PipeAction<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>> | PipeActionAsync<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>>, item3: TItem3 | PipeAction<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>> | PipeActionAsync<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>>, item4: TItem4 | PipeAction<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>> | PipeActionAsync<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>>, item5: TItem5 | PipeAction<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>> | PipeActionAsync<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>>, item6: TItem6 | PipeAction<InferOutput<TItem5>, InferOutput<TItem6>, InferIssue<TItem6>> | PipeActionAsync<InferOutput<TItem5>, InferOutput<TItem6>, InferIssue<TItem6>>, item7: TItem7 | PipeAction<InferOutput<TItem6>, InferOutput<TItem7>, InferIssue<TItem7>> | PipeActionAsync<InferOutput<TItem6>, InferOutput<TItem7>, InferIssue<TItem7>>, item8: TItem8 | PipeAction<InferOutput<TItem7>, InferOutput<TItem8>, InferIssue<TItem8>> | PipeActionAsync<InferOutput<TItem7>, InferOutput<TItem8>, InferIssue<TItem8>>, item9: TItem9 | PipeAction<InferOutput<TItem8>, InferOutput<TItem9>, InferIssue<TItem9>> | PipeActionAsync<InferOutput<TItem8>, InferOutput<TItem9>, InferIssue<TItem9>>, item10: TItem10 | PipeAction<InferOutput<TItem9>, InferOutput<TItem10>, InferIssue<TItem10>> | PipeActionAsync<InferOutput<TItem9>, InferOutput<TItem10>, InferIssue<TItem10>>, item11: TItem11 | PipeAction<InferOutput<TItem10>, InferOutput<TItem11>, InferIssue<TItem11>> | PipeActionAsync<InferOutput<TItem10>, InferOutput<TItem11>, InferIssue<TItem11>>, item12: TItem12 | PipeAction<InferOutput<TItem11>, InferOutput<TItem12>, InferIssue<TItem12>> | PipeActionAsync<InferOutput<TItem11>, InferOutput<TItem12>, InferIssue<TItem12>>, item13: TItem13 | PipeAction<InferOutput<TItem12>, InferOutput<TItem13>, InferIssue<TItem13>> | PipeActionAsync<InferOutput<TItem12>, InferOutput<TItem13>, InferIssue<TItem13>>, item14: TItem14 | PipeAction<InferOutput<TItem13>, InferOutput<TItem14>, InferIssue<TItem14>> | PipeActionAsync<InferOutput<TItem13>, InferOutput<TItem14>, InferIssue<TItem14>>, item15: TItem15 | PipeAction<InferOutput<TItem14>, InferOutput<TItem15>, InferIssue<TItem15>> | PipeActionAsync<InferOutput<TItem14>, InferOutput<TItem15>, InferIssue<TItem15>>): SchemaWithPipeAsync<readonly [TSchema, TItem1, TItem2, TItem3, TItem4, TItem5, TItem6, TItem7, TItem8, TItem9, TItem10, TItem11, TItem12, TItem13, TItem14, TItem15]>;
/**
* Adds a pipeline to a schema, that can validate and transform its input.
*
* @param schema The root schema.
* @param item1 The first pipe item.
* @param item2 The second pipe item.
* @param item3 The third pipe item.
* @param item4 The fourth pipe item.
* @param item5 The fifth pipe item.
* @param item6 The sixth pipe item.
* @param item7 The seventh pipe item.
* @param item8 The eighth pipe item.
* @param item9 The ninth pipe item.
* @param item10 The tenth pipe item.
* @param item11 The eleventh pipe item.
* @param item12 The twelfth pipe item.
* @param item13 The thirteenth pipe item.
* @param item14 The fourteenth pipe item.
* @param item15 The fifteenth pipe item.
* @param item16 The sixteenth pipe item.
*
* @returns A schema with a pipeline.
*/
declare function pipeAsync<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, const TItem1 extends PipeItem<InferOutput<TSchema>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TSchema>, unknown, BaseIssue<unknown>>, const TItem2 extends PipeItem<InferOutput<TItem1>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem1>, unknown, BaseIssue<unknown>>, const TItem3 extends PipeItem<InferOutput<TItem2>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem2>, unknown, BaseIssue<unknown>>, const TItem4 extends PipeItem<InferOutput<TItem3>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem3>, unknown, BaseIssue<unknown>>, const TItem5 extends PipeItem<InferOutput<TItem4>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem4>, unknown, BaseIssue<unknown>>, const TItem6 extends PipeItem<InferOutput<TItem5>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem5>, unknown, BaseIssue<unknown>>, const TItem7 extends PipeItem<InferOutput<TItem6>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem6>, unknown, BaseIssue<unknown>>, const TItem8 extends PipeItem<InferOutput<TItem7>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem7>, unknown, BaseIssue<unknown>>, const TItem9 extends PipeItem<InferOutput<TItem8>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem8>, unknown, BaseIssue<unknown>>, const TItem10 extends PipeItem<InferOutput<TItem9>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem9>, unknown, BaseIssue<unknown>>, const TItem11 extends PipeItem<InferOutput<TItem10>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem10>, unknown, BaseIssue<unknown>>, const TItem12 extends PipeItem<InferOutput<TItem11>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem11>, unknown, BaseIssue<unknown>>, const TItem13 extends PipeItem<InferOutput<TItem12>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem12>, unknown, BaseIssue<unknown>>, const TItem14 extends PipeItem<InferOutput<TItem13>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem13>, unknown, BaseIssue<unknown>>, const TItem15 extends PipeItem<InferOutput<TItem14>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem14>, unknown, BaseIssue<unknown>>, const TItem16 extends PipeItem<InferOutput<TItem15>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem15>, unknown, BaseIssue<unknown>>>(schema: TSchema, item1: TItem1 | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>> | PipeActionAsync<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>, item2: TItem2 | PipeAction<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>> | PipeActionAsync<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>>, item3: TItem3 | PipeAction<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>> | PipeActionAsync<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>>, item4: TItem4 | PipeAction<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>> | PipeActionAsync<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>>, item5: TItem5 | PipeAction<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>> | PipeActionAsync<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>>, item6: TItem6 | PipeAction<InferOutput<TItem5>, InferOutput<TItem6>, InferIssue<TItem6>> | PipeActionAsync<InferOutput<TItem5>, InferOutput<TItem6>, InferIssue<TItem6>>, item7: TItem7 | PipeAction<InferOutput<TItem6>, InferOutput<TItem7>, InferIssue<TItem7>> | PipeActionAsync<InferOutput<TItem6>, InferOutput<TItem7>, InferIssue<TItem7>>, item8: TItem8 | PipeAction<InferOutput<TItem7>, InferOutput<TItem8>, InferIssue<TItem8>> | PipeActionAsync<InferOutput<TItem7>, InferOutput<TItem8>, InferIssue<TItem8>>, item9: TItem9 | PipeAction<InferOutput<TItem8>, InferOutput<TItem9>, InferIssue<TItem9>> | PipeActionAsync<InferOutput<TItem8>, InferOutput<TItem9>, InferIssue<TItem9>>, item10: TItem10 | PipeAction<InferOutput<TItem9>, InferOutput<TItem10>, InferIssue<TItem10>> | PipeActionAsync<InferOutput<TItem9>, InferOutput<TItem10>, InferIssue<TItem10>>, item11: TItem11 | PipeAction<InferOutput<TItem10>, InferOutput<TItem11>, InferIssue<TItem11>> | PipeActionAsync<InferOutput<TItem10>, InferOutput<TItem11>, InferIssue<TItem11>>, item12: TItem12 | PipeAction<InferOutput<TItem11>, InferOutput<TItem12>, InferIssue<TItem12>> | PipeActionAsync<InferOutput<TItem11>, InferOutput<TItem12>, InferIssue<TItem12>>, item13: TItem13 | PipeAction<InferOutput<TItem12>, InferOutput<TItem13>, InferIssue<TItem13>> | PipeActionAsync<InferOutput<TItem12>, InferOutput<TItem13>, InferIssue<TItem13>>, item14: TItem14 | PipeAction<InferOutput<TItem13>, InferOutput<TItem14>, InferIssue<TItem14>> | PipeActionAsync<InferOutput<TItem13>, InferOutput<TItem14>, InferIssue<TItem14>>, item15: TItem15 | PipeAction<InferOutput<TItem14>, InferOutput<TItem15>, InferIssue<TItem15>> | PipeActionAsync<InferOutput<TItem14>, InferOutput<TItem15>, InferIssue<TItem15>>, item16: TItem16 | PipeAction<InferOutput<TItem15>, InferOutput<TItem16>, InferIssue<TItem16>> | PipeActionAsync<InferOutput<TItem15>, InferOutput<TItem16>, InferIssue<TItem16>>): SchemaWithPipeAsync<readonly [TSchema, TItem1, TItem2, TItem3, TItem4, TItem5, TItem6, TItem7, TItem8, TItem9, TItem10, TItem11, TItem12, TItem13, TItem14, TItem15, TItem16]>;
/**
* Adds a pipeline to a schema, that can validate and transform its input.
*
* @param schema The root schema.
* @param item1 The first pipe item.
* @param item2 The second pipe item.
* @param item3 The third pipe item.
* @param item4 The fourth pipe item.
* @param item5 The fifth pipe item.
* @param item6 The sixth pipe item.
* @param item7 The seventh pipe item.
* @param item8 The eighth pipe item.
* @param item9 The ninth pipe item.
* @param item10 The tenth pipe item.
* @param item11 The eleventh pipe item.
* @param item12 The twelfth pipe item.
* @param item13 The thirteenth pipe item.
* @param item14 The fourteenth pipe item.
* @param item15 The fifteenth pipe item.
* @param item16 The sixteenth pipe item.
* @param item17 The seventeenth pipe item.
*
* @returns A schema with a pipeline.
*/
declare function pipeAsync<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, const TItem1 extends PipeItem<InferOutput<TSchema>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TSchema>, unknown, BaseIssue<unknown>>, const TItem2 extends PipeItem<InferOutput<TItem1>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem1>, unknown, BaseIssue<unknown>>, const TItem3 extends PipeItem<InferOutput<TItem2>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem2>, unknown, BaseIssue<unknown>>, const TItem4 extends PipeItem<InferOutput<TItem3>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem3>, unknown, BaseIssue<unknown>>, const TItem5 extends PipeItem<InferOutput<TItem4>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem4>, unknown, BaseIssue<unknown>>, const TItem6 extends PipeItem<InferOutput<TItem5>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem5>, unknown, BaseIssue<unknown>>, const TItem7 extends PipeItem<InferOutput<TItem6>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem6>, unknown, BaseIssue<unknown>>, const TItem8 extends PipeItem<InferOutput<TItem7>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem7>, unknown, BaseIssue<unknown>>, const TItem9 extends PipeItem<InferOutput<TItem8>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem8>, unknown, BaseIssue<unknown>>, const TItem10 extends PipeItem<InferOutput<TItem9>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem9>, unknown, BaseIssue<unknown>>, const TItem11 extends PipeItem<InferOutput<TItem10>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem10>, unknown, BaseIssue<unknown>>, const TItem12 extends PipeItem<InferOutput<TItem11>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem11>, unknown, BaseIssue<unknown>>, const TItem13 extends PipeItem<InferOutput<TItem12>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem12>, unknown, BaseIssue<unknown>>, const TItem14 extends PipeItem<InferOutput<TItem13>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem13>, unknown, BaseIssue<unknown>>, const TItem15 extends PipeItem<InferOutput<TItem14>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem14>, unknown, BaseIssue<unknown>>, const TItem16 extends PipeItem<InferOutput<TItem15>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem15>, unknown, BaseIssue<unknown>>, const TItem17 extends PipeItem<InferOutput<TItem16>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem16>, unknown, BaseIssue<unknown>>>(schema: TSchema, item1: TItem1 | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>> | PipeActionAsync<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>, item2: TItem2 | PipeAction<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>> | PipeActionAsync<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>>, item3: TItem3 | PipeAction<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>> | PipeActionAsync<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>>, item4: TItem4 | PipeAction<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>> | PipeActionAsync<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>>, item5: TItem5 | PipeAction<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>> | PipeActionAsync<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>>, item6: TItem6 | PipeAction<InferOutput<TItem5>, InferOutput<TItem6>, InferIssue<TItem6>> | PipeActionAsync<InferOutput<TItem5>, InferOutput<TItem6>, InferIssue<TItem6>>, item7: TItem7 | PipeAction<InferOutput<TItem6>, InferOutput<TItem7>, InferIssue<TItem7>> | PipeActionAsync<InferOutput<TItem6>, InferOutput<TItem7>, InferIssue<TItem7>>, item8: TItem8 | PipeAction<InferOutput<TItem7>, InferOutput<TItem8>, InferIssue<TItem8>> | PipeActionAsync<InferOutput<TItem7>, InferOutput<TItem8>, InferIssue<TItem8>>, item9: TItem9 | PipeAction<InferOutput<TItem8>, InferOutput<TItem9>, InferIssue<TItem9>> | PipeActionAsync<InferOutput<TItem8>, InferOutput<TItem9>, InferIssue<TItem9>>, item10: TItem10 | PipeAction<InferOutput<TItem9>, InferOutput<TItem10>, InferIssue<TItem10>> | PipeActionAsync<InferOutput<TItem9>, InferOutput<TItem10>, InferIssue<TItem10>>, item11: TItem11 | PipeAction<InferOutput<TItem10>, InferOutput<TItem11>, InferIssue<TItem11>> | PipeActionAsync<InferOutput<TItem10>, InferOutput<TItem11>, InferIssue<TItem11>>, item12: TItem12 | PipeAction<InferOutput<TItem11>, InferOutput<TItem12>, InferIssue<TItem12>> | PipeActionAsync<InferOutput<TItem11>, InferOutput<TItem12>, InferIssue<TItem12>>, item13: TItem13 | PipeAction<InferOutput<TItem12>, InferOutput<TItem13>, InferIssue<TItem13>> | PipeActionAsync<InferOutput<TItem12>, InferOutput<TItem13>, InferIssue<TItem13>>, item14: TItem14 | PipeAction<InferOutput<TItem13>, InferOutput<TItem14>, InferIssue<TItem14>> | PipeActionAsync<InferOutput<TItem13>, InferOutput<TItem14>, InferIssue<TItem14>>, item15: TItem15 | PipeAction<InferOutput<TItem14>, InferOutput<TItem15>, InferIssue<TItem15>> | PipeActionAsync<InferOutput<TItem14>, InferOutput<TItem15>, InferIssue<TItem15>>, item16: TItem16 | PipeAction<InferOutput<TItem15>, InferOutput<TItem16>, InferIssue<TItem16>> | PipeActionAsync<InferOutput<TItem15>, InferOutput<TItem16>, InferIssue<TItem16>>, item17: TItem17 | PipeAction<InferOutput<TItem16>, InferOutput<TItem17>, InferIssue<TItem17>> | PipeActionAsync<InferOutput<TItem16>, InferOutput<TItem17>, InferIssue<TItem17>>): SchemaWithPipeAsync<readonly [TSchema, TItem1, TItem2, TItem3, TItem4, TItem5, TItem6, TItem7, TItem8, TItem9, TItem10, TItem11, TItem12, TItem13, TItem14, TItem15, TItem16, TItem17]>;
/**
* Adds a pipeline to a schema, that can validate and transform its input.
*
* @param schema The root schema.
* @param item1 The first pipe item.
* @param item2 The second pipe item.
* @param item3 The third pipe item.
* @param item4 The fourth pipe item.
* @param item5 The fifth pipe item.
* @param item6 The sixth pipe item.
* @param item7 The seventh pipe item.
* @param item8 The eighth pipe item.
* @param item9 The ninth pipe item.
* @param item10 The tenth pipe item.
* @param item11 The eleventh pipe item.
* @param item12 The twelfth pipe item.
* @param item13 The thirteenth pipe item.
* @param item14 The fourteenth pipe item.
* @param item15 The fifteenth pipe item.
* @param item16 The sixteenth pipe item.
* @param item17 The seventeenth pipe item.
* @param item18 The eighteenth pipe item.
*
* @returns A schema with a pipeline.
*/
declare function pipeAsync<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, const TItem1 extends PipeItem<InferOutput<TSchema>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TSchema>, unknown, BaseIssue<unknown>>, const TItem2 extends PipeItem<InferOutput<TItem1>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem1>, unknown, BaseIssue<unknown>>, const TItem3 extends PipeItem<InferOutput<TItem2>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem2>, unknown, BaseIssue<unknown>>, const TItem4 extends PipeItem<InferOutput<TItem3>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem3>, unknown, BaseIssue<unknown>>, const TItem5 extends PipeItem<InferOutput<TItem4>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem4>, unknown, BaseIssue<unknown>>, const TItem6 extends PipeItem<InferOutput<TItem5>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem5>, unknown, BaseIssue<unknown>>, const TItem7 extends PipeItem<InferOutput<TItem6>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem6>, unknown, BaseIssue<unknown>>, const TItem8 extends PipeItem<InferOutput<TItem7>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem7>, unknown, BaseIssue<unknown>>, const TItem9 extends PipeItem<InferOutput<TItem8>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem8>, unknown, BaseIssue<unknown>>, const TItem10 extends PipeItem<InferOutput<TItem9>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem9>, unknown, BaseIssue<unknown>>, const TItem11 extends PipeItem<InferOutput<TItem10>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem10>, unknown, BaseIssue<unknown>>, const TItem12 extends PipeItem<InferOutput<TItem11>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem11>, unknown, BaseIssue<unknown>>, const TItem13 extends PipeItem<InferOutput<TItem12>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem12>, unknown, BaseIssue<unknown>>, const TItem14 extends PipeItem<InferOutput<TItem13>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem13>, unknown, BaseIssue<unknown>>, const TItem15 extends PipeItem<InferOutput<TItem14>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem14>, unknown, BaseIssue<unknown>>, const TItem16 extends PipeItem<InferOutput<TItem15>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem15>, unknown, BaseIssue<unknown>>, const TItem17 extends PipeItem<InferOutput<TItem16>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem16>, unknown, BaseIssue<unknown>>, const TItem18 extends PipeItem<InferOutput<TItem17>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem17>, unknown, BaseIssue<unknown>>>(schema: TSchema, item1: TItem1 | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>> | PipeActionAsync<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>, item2: TItem2 | PipeAction<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>> | PipeActionAsync<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>>, item3: TItem3 | PipeAction<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>> | PipeActionAsync<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>>, item4: TItem4 | PipeAction<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>> | PipeActionAsync<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>>, item5: TItem5 | PipeAction<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>> | PipeActionAsync<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>>, item6: TItem6 | PipeAction<InferOutput<TItem5>, InferOutput<TItem6>, InferIssue<TItem6>> | PipeActionAsync<InferOutput<TItem5>, InferOutput<TItem6>, InferIssue<TItem6>>, item7: TItem7 | PipeAction<InferOutput<TItem6>, InferOutput<TItem7>, InferIssue<TItem7>> | PipeActionAsync<InferOutput<TItem6>, InferOutput<TItem7>, InferIssue<TItem7>>, item8: TItem8 | PipeAction<InferOutput<TItem7>, InferOutput<TItem8>, InferIssue<TItem8>> | PipeActionAsync<InferOutput<TItem7>, InferOutput<TItem8>, InferIssue<TItem8>>, item9: TItem9 | PipeAction<InferOutput<TItem8>, InferOutput<TItem9>, InferIssue<TItem9>> | PipeActionAsync<InferOutput<TItem8>, InferOutput<TItem9>, InferIssue<TItem9>>, item10: TItem10 | PipeAction<InferOutput<TItem9>, InferOutput<TItem10>, InferIssue<TItem10>> | PipeActionAsync<InferOutput<TItem9>, InferOutput<TItem10>, InferIssue<TItem10>>, item11: TItem11 | PipeAction<InferOutput<TItem10>, InferOutput<TItem11>, InferIssue<TItem11>> | PipeActionAsync<InferOutput<TItem10>, InferOutput<TItem11>, InferIssue<TItem11>>, item12: TItem12 | PipeAction<InferOutput<TItem11>, InferOutput<TItem12>, InferIssue<TItem12>> | PipeActionAsync<InferOutput<TItem11>, InferOutput<TItem12>, InferIssue<TItem12>>, item13: TItem13 | PipeAction<InferOutput<TItem12>, InferOutput<TItem13>, InferIssue<TItem13>> | PipeActionAsync<InferOutput<TItem12>, InferOutput<TItem13>, InferIssue<TItem13>>, item14: TItem14 | PipeAction<InferOutput<TItem13>, InferOutput<TItem14>, InferIssue<TItem14>> | PipeActionAsync<InferOutput<TItem13>, InferOutput<TItem14>, InferIssue<TItem14>>, item15: TItem15 | PipeAction<InferOutput<TItem14>, InferOutput<TItem15>, InferIssue<TItem15>> | PipeActionAsync<InferOutput<TItem14>, InferOutput<TItem15>, InferIssue<TItem15>>, item16: TItem16 | PipeAction<InferOutput<TItem15>, InferOutput<TItem16>, InferIssue<TItem16>> | PipeActionAsync<InferOutput<TItem15>, InferOutput<TItem16>, InferIssue<TItem16>>, item17: TItem17 | PipeAction<InferOutput<TItem16>, InferOutput<TItem17>, InferIssue<TItem17>> | PipeActionAsync<InferOutput<TItem16>, InferOutput<TItem17>, InferIssue<TItem17>>, item18: TItem18 | PipeAction<InferOutput<TItem17>, InferOutput<TItem18>, InferIssue<TItem18>> | PipeActionAsync<InferOutput<TItem17>, InferOutput<TItem18>, InferIssue<TItem18>>): SchemaWithPipeAsync<readonly [TSchema, TItem1, TItem2, TItem3, TItem4, TItem5, TItem6, TItem7, TItem8, TItem9, TItem10, TItem11, TItem12, TItem13, TItem14, TItem15, TItem16, TItem17, TItem18]>;
/**
* Adds a pipeline to a schema, that can validate and transform its input.
*
* @param schema The root schema.
* @param item1 The first pipe item.
* @param item2 The second pipe item.
* @param item3 The third pipe item.
* @param item4 The fourth pipe item.
* @param item5 The fifth pipe item.
* @param item6 The sixth pipe item.
* @param item7 The seventh pipe item.
* @param item8 The eighth pipe item.
* @param item9 The ninth pipe item.
* @param item10 The tenth pipe item.
* @param item11 The eleventh pipe item.
* @param item12 The twelfth pipe item.
* @param item13 The thirteenth pipe item.
* @param item14 The fourteenth pipe item.
* @param item15 The fifteenth pipe item.
* @param item16 The sixteenth pipe item.
* @param item17 The seventeenth pipe item.
* @param item18 The eighteenth pipe item.
* @param item19 The nineteenth pipe item.
*
* @returns A schema with a pipeline.
*/
declare function pipeAsync<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, const TItem1 extends PipeItem<InferOutput<TSchema>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TSchema>, unknown, BaseIssue<unknown>>, const TItem2 extends PipeItem<InferOutput<TItem1>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem1>, unknown, BaseIssue<unknown>>, const TItem3 extends PipeItem<InferOutput<TItem2>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem2>, unknown, BaseIssue<unknown>>, const TItem4 extends PipeItem<InferOutput<TItem3>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem3>, unknown, BaseIssue<unknown>>, const TItem5 extends PipeItem<InferOutput<TItem4>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem4>, unknown, BaseIssue<unknown>>, const TItem6 extends PipeItem<InferOutput<TItem5>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem5>, unknown, BaseIssue<unknown>>, const TItem7 extends PipeItem<InferOutput<TItem6>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem6>, unknown, BaseIssue<unknown>>, const TItem8 extends PipeItem<InferOutput<TItem7>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem7>, unknown, BaseIssue<unknown>>, const TItem9 extends PipeItem<InferOutput<TItem8>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem8>, unknown, BaseIssue<unknown>>, const TItem10 extends PipeItem<InferOutput<TItem9>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem9>, unknown, BaseIssue<unknown>>, const TItem11 extends PipeItem<InferOutput<TItem10>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem10>, unknown, BaseIssue<unknown>>, const TItem12 extends PipeItem<InferOutput<TItem11>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem11>, unknown, BaseIssue<unknown>>, const TItem13 extends PipeItem<InferOutput<TItem12>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem12>, unknown, BaseIssue<unknown>>, const TItem14 extends PipeItem<InferOutput<TItem13>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem13>, unknown, BaseIssue<unknown>>, const TItem15 extends PipeItem<InferOutput<TItem14>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem14>, unknown, BaseIssue<unknown>>, const TItem16 extends PipeItem<InferOutput<TItem15>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem15>, unknown, BaseIssue<unknown>>, const TItem17 extends PipeItem<InferOutput<TItem16>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem16>, unknown, BaseIssue<unknown>>, const TItem18 extends PipeItem<InferOutput<TItem17>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem17>, unknown, BaseIssue<unknown>>, const TItem19 extends PipeItem<InferOutput<TItem18>, unknown, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TItem18>, unknown, BaseIssue<unknown>>>(schema: TSchema, item1: TItem1 | PipeAction<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>> | PipeActionAsync<InferOutput<TSchema>, InferOutput<TItem1>, InferIssue<TItem1>>, item2: TItem2 | PipeAction<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>> | PipeActionAsync<InferOutput<TItem1>, InferOutput<TItem2>, InferIssue<TItem2>>, item3: TItem3 | PipeAction<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>> | PipeActionAsync<InferOutput<TItem2>, InferOutput<TItem3>, InferIssue<TItem3>>, item4: TItem4 | PipeAction<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>> | PipeActionAsync<InferOutput<TItem3>, InferOutput<TItem4>, InferIssue<TItem4>>, item5: TItem5 | PipeAction<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>> | PipeActionAsync<InferOutput<TItem4>, InferOutput<TItem5>, InferIssue<TItem5>>, item6: TItem6 | PipeAction<InferOutput<TItem5>, InferOutput<TItem6>, InferIssue<TItem6>> | PipeActionAsync<InferOutput<TItem5>, InferOutput<TItem6>, InferIssue<TItem6>>, item7: TItem7 | PipeAction<InferOutput<TItem6>, InferOutput<TItem7>, InferIssue<TItem7>> | PipeActionAsync<InferOutput<TItem6>, InferOutput<TItem7>, InferIssue<TItem7>>, item8: TItem8 | PipeAction<InferOutput<TItem7>, InferOutput<TItem8>, InferIssue<TItem8>> | PipeActionAsync<InferOutput<TItem7>, InferOutput<TItem8>, InferIssue<TItem8>>, item9: TItem9 | PipeAction<InferOutput<TItem8>, InferOutput<TItem9>, InferIssue<TItem9>> | PipeActionAsync<InferOutput<TItem8>, InferOutput<TItem9>, InferIssue<TItem9>>, item10: TItem10 | PipeAction<InferOutput<TItem9>, InferOutput<TItem10>, InferIssue<TItem10>> | PipeActionAsync<InferOutput<TItem9>, InferOutput<TItem10>, InferIssue<TItem10>>, item11: TItem11 | PipeAction<InferOutput<TItem10>, InferOutput<TItem11>, InferIssue<TItem11>> | PipeActionAsync<InferOutput<TItem10>, InferOutput<TItem11>, InferIssue<TItem11>>, item12: TItem12 | PipeAction<InferOutput<TItem11>, InferOutput<TItem12>, InferIssue<TItem12>> | PipeActionAsync<InferOutput<TItem11>, InferOutput<TItem12>, InferIssue<TItem12>>, item13: TItem13 | PipeAction<InferOutput<TItem12>, InferOutput<TItem13>, InferIssue<TItem13>> | PipeActionAsync<InferOutput<TItem12>, InferOutput<TItem13>, InferIssue<TItem13>>, item14: TItem14 | PipeAction<InferOutput<TItem13>, InferOutput<TItem14>, InferIssue<TItem14>> | PipeActionAsync<InferOutput<TItem13>, InferOutput<TItem14>, InferIssue<TItem14>>, item15: TItem15 | PipeAction<InferOutput<TItem14>, InferOutput<TItem15>, InferIssue<TItem15>> | PipeActionAsync<InferOutput<TItem14>, InferOutput<TItem15>, InferIssue<TItem15>>, item16: TItem16 | PipeAction<InferOutput<TItem15>, InferOutput<TItem16>, InferIssue<TItem16>> | PipeActionAsync<InferOutput<TItem15>, InferOutput<TItem16>, InferIssue<TItem16>>, item17: TItem17 | PipeAction<InferOutput<TItem16>, InferOutput<TItem17>, InferIssue<TItem17>> | PipeActionAsync<InferOutput<TItem16>, InferOutput<TItem17>, InferIssue<TItem17>>, item18: TItem18 | PipeAction<InferOutput<TItem17>, InferOutput<TItem18>, InferIssue<TItem18>> | PipeActionAsync<InferOutput<TItem17>, InferOutput<TItem18>, InferIssue<TItem18>>, item19: TItem19 | PipeAction<InferOutput<TItem18>, InferOutput<TItem19>, InferIssue<TItem19>> | PipeActionAsync<InferOutput<TItem18>, InferOutput<TItem19>, InferIssue<TItem19>>): SchemaWithPipeAsync<readonly [TSchema, TItem1, TItem2, TItem3, TItem4, TItem5, TItem6, TItem7, TItem8, TItem9, TItem10, TItem11, TItem12, TItem13, TItem14, TItem15, TItem16, TItem17, TItem18, TItem19]>;
/**
* Adds a pipeline to a schema, that can validate and transform its input.
*
* @param schema The root schema.
* @param items The pipe items.
*
* @returns A schema with a pipeline.
*/
declare function pipeAsync<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, const TItems$1 extends readonly (PipeItem<InferOutput<TSchema>, InferOutput<TSchema>, BaseIssue<unknown>> | PipeItemAsync<InferOutput<TSchema>, InferOutput<TSchema>, BaseIssue<unknown>>)[]>(schema: TSchema, ...items: TItems$1): SchemaWithPipeAsync<readonly [TSchema, ...TItems$1]>;
//#endregion
//#region src/methods/getMetadata/getMetadata.d.ts
/**
* Schema type.
*/
type Schema$12 = BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>> | SchemaWithPipe<readonly [BaseSchema<unknown, unknown, BaseIssue<unknown>>, ...(PipeItem<any, unknown, BaseIssue<unknown>> | MetadataAction<unknown, Record<string, unknown>>)[]]> | SchemaWithPipeAsync<readonly [(BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>), ...(PipeItem<any, unknown, BaseIssue<unknown>> | PipeItemAsync<any, unknown, BaseIssue<unknown>> | MetadataAction<unknown, Record<string, unknown>>)[]]>;
/**
* Basic pipe item type.
*/
type BasicPipeItem = PipeItem<any, unknown, BaseIssue<unknown>> | PipeItemAsync<any, unknown, BaseIssue<unknown>> | MetadataAction<unknown, Record<string, unknown>>;
/**
* Recursive merge type.
*/
type RecursiveMerge$1<TRootPipe extends readonly BasicPipeItem[], TCollectedMetadata extends Record<string, unknown> = {}> = TRootPipe extends readonly [infer TFirstItem, ...infer TPipeRest extends readonly BasicPipeItem[]] ? TFirstItem extends SchemaWithPipe<infer TNestedPipe> | SchemaWithPipeAsync<infer TNestedPipe> ? RecursiveMerge$1<TPipeRest, RecursiveMerge$1<TNestedPipe, TCollectedMetadata>> : TFirstItem extends MetadataAction<unknown, infer TCurrentMetadata> ? RecursiveMerge$1<TPipeRest, Merge<TCollectedMetadata, TCurrentMetadata>> : RecursiveMerge$1<TPipeRest, TCollectedMetadata> : TCollectedMetadata;
/**
* Infer metadata type.
*
* @beta
*/
type InferMetadata<TSchema extends Schema$12> = BaseSchema<any, any, any> extends TSchema ? Record<string, unknown> : BaseSchemaAsync<any, any, any> extends TSchema ? Record<string, unknown> : TSchema extends SchemaWithPipe<infer TPipe> | SchemaWithPipeAsync<infer TPipe> ? Prettify<RecursiveMerge$1<TPipe>> : {};
/**
* Returns the metadata of a schema.
*
* If multiple metadata are defined, it shallowly merges them using depth-first
* search. If no metadata is defined, an empty object is returned.
*
* @param schema Schema to get the metadata from.
*
* @returns The metadata, if any.
*
* @beta
*/
declare function getMetadata<const TSchema extends Schema$12>(schema: TSchema): InferMetadata<TSchema>;
//#endregion
//#region src/actions/title/title.d.ts
/**
* Title action interface.
*/
interface TitleAction<TInput$1, TTitle extends string> extends BaseMetadata<TInput$1> {
  /**
  * The action type.
  */
  readonly type: "title";
  /**
  * The action reference.
  */
  readonly reference: typeof title;
  /**
  * The title text.
  */
  readonly title: TTitle;
}
/**
* Creates a title metadata action.
*
* @param title_ The title text.
*
* @returns A title action.
*/
declare function title<TInput$1, TTitle extends string>(title_: TTitle): TitleAction<TInput$1, TTitle>;
//#endregion
//#region src/methods/getTitle/getTitle.d.ts
/**
* Schema type.
*/
type Schema$11 = BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>> | SchemaWithPipe<readonly [BaseSchema<unknown, unknown, BaseIssue<unknown>>, ...(PipeItem<any, unknown, BaseIssue<unknown>> | TitleAction<unknown, string>)[]]> | SchemaWithPipeAsync<readonly [(BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>), ...(PipeItem<any, unknown, BaseIssue<unknown>> | PipeItemAsync<any, unknown, BaseIssue<unknown>> | TitleAction<unknown, string>)[]]>;
/**
* Returns the title of the schema.
*
* If multiple titles are defined, the last one of the highest level is
* returned. If no title is defined, `undefined` is returned.
*
* @param schema The schema to get the title from.
*
* @returns The title, if any.
*
* @beta
*/
declare function getTitle(schema: Schema$11): string | undefined;
//#endregion
//#region src/methods/is/is.d.ts
/**
* Checks if the input matches the schema. By using a type predicate, this
* function can be used as a type guard.
*
* @param schema The schema to be used.
* @param input The input to be tested.
*
* @returns Whether the input matches the schema.
*/
declare function is<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>>(schema: TSchema, input: unknown): input is InferInput<TSchema>;
//#endregion
//#region src/methods/keyof/keyof.d.ts
/**
* Schema type.
*/
type Schema$10 = LooseObjectSchema<ObjectEntries, ErrorMessage<LooseObjectIssue> | undefined> | LooseObjectSchemaAsync<ObjectEntriesAsync, ErrorMessage<LooseObjectIssue> | undefined> | ObjectSchema<ObjectEntries, ErrorMessage<ObjectIssue> | undefined> | ObjectSchemaAsync<ObjectEntriesAsync, ErrorMessage<ObjectIssue> | undefined> | ObjectWithRestSchema<ObjectEntries, BaseSchema<unknown, unknown, BaseIssue<unknown>>, ErrorMessage<ObjectWithRestIssue> | undefined> | ObjectWithRestSchemaAsync<ObjectEntriesAsync, BaseSchema<unknown, unknown, BaseIssue<unknown>>, ErrorMessage<ObjectWithRestIssue> | undefined> | StrictObjectSchema<ObjectEntries, ErrorMessage<StrictObjectIssue> | undefined> | StrictObjectSchemaAsync<ObjectEntriesAsync, ErrorMessage<StrictObjectIssue> | undefined>;
/**
* Force tuple type.
*/
type ForceTuple<T> = T extends [string, ...string[]] ? T : [];
/**
* Object keys type.
*/
type ObjectKeys$1<TSchema extends Schema$10> = ForceTuple<UnionToTuple<keyof TSchema["entries"]>>;
/**
* Creates a picklist schema of object keys.
*
* @param schema The object schema.
*
* @returns A picklist schema.
*/
declare function keyof<const TSchema extends Schema$10>(schema: TSchema): PicklistSchema<ObjectKeys$1<TSchema>, undefined>;
/**
* Creates a picklist schema of object keys.
*
* @param schema The object schema.
* @param message The error message.
*
* @returns A picklist schema.
*/
declare function keyof<const TSchema extends Schema$10, const TMessage extends ErrorMessage<PicklistIssue> | undefined>(schema: TSchema, message: TMessage): PicklistSchema<ObjectKeys$1<TSchema>, TMessage>;
//#endregion
//#region src/methods/message/message.d.ts
/**
* Changes the local message configuration of a schema.
*
* @param schema The schema to configure.
* @param message_ The error message.
*
* @returns The configured schema.
*/
declare function message<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>>(schema: TSchema, message_: ErrorMessage<InferIssue<TSchema>>): TSchema;
//#endregion
//#region src/methods/omit/omit.d.ts
/**
* Schema type.
*/
type Schema$9 = SchemaWithoutPipe<LooseObjectSchema<ObjectEntries, ErrorMessage<LooseObjectIssue> | undefined> | LooseObjectSchemaAsync<ObjectEntriesAsync, ErrorMessage<LooseObjectIssue> | undefined> | ObjectSchema<ObjectEntries, ErrorMessage<ObjectIssue> | undefined> | ObjectSchemaAsync<ObjectEntriesAsync, ErrorMessage<ObjectIssue> | undefined> | ObjectWithRestSchema<ObjectEntries, BaseSchema<unknown, unknown, BaseIssue<unknown>>, ErrorMessage<ObjectWithRestIssue> | undefined> | ObjectWithRestSchemaAsync<ObjectEntriesAsync, BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, ErrorMessage<ObjectWithRestIssue> | undefined> | StrictObjectSchema<ObjectEntries, ErrorMessage<StrictObjectIssue> | undefined> | StrictObjectSchemaAsync<ObjectEntriesAsync, ErrorMessage<StrictObjectIssue> | undefined>>;
/**
* Schema with omit type.
*/
type SchemaWithOmit<TSchema extends Schema$9, TKeys extends ObjectKeys<TSchema>> = TSchema extends ObjectSchema<infer TEntries, ErrorMessage<ObjectIssue> | undefined> | StrictObjectSchema<infer TEntries, ErrorMessage<StrictObjectIssue> | undefined> ? Omit<TSchema, "entries" | "~standard" | "~run" | "~types"> & {
  /**
  * The object entries.
  */
  readonly entries: Omit<TEntries, TKeys[number]>;
  /**
  * The Standard Schema properties.
  *
  * @internal
  */
  readonly "~standard": StandardProps<InferObjectInput<Omit<TEntries, TKeys[number]>>, InferObjectOutput<Omit<TEntries, TKeys[number]>>>;
  /**
  * Parses unknown input.
  *
  * @param dataset The input dataset.
  * @param config The configuration.
  *
  * @returns The output dataset.
  *
  * @internal
  */
  readonly "~run": (dataset: UnknownDataset, config: Config<BaseIssue<unknown>>) => OutputDataset<InferObjectOutput<Omit<TEntries, TKeys[number]>>, Extract<InferIssue<TSchema>, {
    type: TSchema["type"];
  }> | InferObjectIssue<Omit<TEntries, TKeys[number]>>>;
  /**
  * The input, output and issue type.
  *
  * @internal
  */
  readonly "~types"?: {
    readonly input: InferObjectInput<Omit<TEntries, TKeys[number]>>;
    readonly output: InferObjectOutput<Omit<TEntries, TKeys[number]>>;
    readonly issue: Extract<InferIssue<TSchema>, {
      type: TSchema["type"];
    }> | InferObjectIssue<Omit<TEntries, TKeys[number]>>;
  } | undefined;
} : TSchema extends ObjectSchemaAsync<infer TEntries, ErrorMessage<ObjectIssue> | undefined> | StrictObjectSchemaAsync<infer TEntries, ErrorMessage<StrictObjectIssue> | undefined> ? Omit<TSchema, "entries" | "~standard" | "~run" | "~types"> & {
  /**
  * The object entries.
  */
  readonly entries: Omit<TEntries, TKeys[number]>;
  /**
  * The Standard Schema properties.
  *
  * @internal
  */
  readonly "~standard": StandardProps<InferObjectInput<Omit<TEntries, TKeys[number]>>, InferObjectOutput<Omit<TEntries, TKeys[number]>>>;
  /**
  * Parses unknown input.
  *
  * @param dataset The input dataset.
  * @param config The configuration.
  *
  * @returns The output dataset.
  *
  * @internal
  */
  readonly "~run": (dataset: UnknownDataset, config: Config<BaseIssue<unknown>>) => Promise<OutputDataset<InferObjectOutput<Omit<TEntries, TKeys[number]>>, Extract<InferIssue<TSchema>, {
    type: TSchema["type"];
  }> | InferObjectIssue<Omit<TEntries, TKeys[number]>>>>;
  /**
  * The input, output and issue type.
  *
  * @internal
  */
  readonly "~types"?: {
    readonly input: InferObjectInput<Omit<TEntries, TKeys[number]>>;
    readonly output: InferObjectOutput<Omit<TEntries, TKeys[number]>>;
    readonly issue: Extract<InferIssue<TSchema>, {
      type: TSchema["type"];
    }> | InferObjectIssue<Omit<TEntries, TKeys[number]>>;
  } | undefined;
} : TSchema extends LooseObjectSchema<infer TEntries, ErrorMessage<LooseObjectIssue> | undefined> ? Omit<TSchema, "entries" | "~standard" | "~run" | "~types"> & {
  /**
  * The object entries.
  */
  readonly entries: Omit<TEntries, TKeys[number]>;
  /**
  * The Standard Schema properties.
  *
  * @internal
  */
  readonly "~standard": StandardProps<InferObjectInput<Omit<TEntries, TKeys[number]>> & {
    [key: string]: unknown;
  }, InferObjectInput<Omit<TEntries, TKeys[number]>> & {
    [key: string]: unknown;
  }>;
  /**
  * Parses unknown input.
  *
  * @param dataset The input dataset.
  * @param config The configuration.
  *
  * @returns The output dataset.
  *
  * @internal
  */
  readonly "~run": (dataset: UnknownDataset, config: Config<BaseIssue<unknown>>) => OutputDataset<InferObjectOutput<Omit<TEntries, TKeys[number]>> & {
    [key: string]: unknown;
  }, Extract<InferIssue<TSchema>, {
    type: TSchema["type"];
  }> | InferObjectIssue<Omit<TEntries, TKeys[number]>>>;
  /**
  * The input, output and issue type.
  *
  * @internal
  */
  readonly "~types"?: {
    readonly input: InferObjectInput<Omit<TEntries, TKeys[number]>> & {
      [key: string]: unknown;
    };
    readonly output: InferObjectOutput<Omit<TEntries, TKeys[number]>> & {
      [key: string]: unknown;
    };
    readonly issue: Extract<InferIssue<TSchema>, {
      type: TSchema["type"];
    }> | InferObjectIssue<Omit<TEntries, TKeys[number]>>;
  } | undefined;
} : TSchema extends LooseObjectSchemaAsync<infer TEntries, ErrorMessage<LooseObjectIssue> | undefined> ? Omit<TSchema, "entries" | "~standard" | "~run" | "~types"> & {
  /**
  * The object entries.
  */
  readonly entries: Omit<TEntries, TKeys[number]>;
  /**
  * The Standard Schema properties.
  *
  * @internal
  */
  readonly "~standard": StandardProps<InferObjectInput<Omit<TEntries, TKeys[number]>> & {
    [key: string]: unknown;
  }, InferObjectInput<Omit<TEntries, TKeys[number]>> & {
    [key: string]: unknown;
  }>;
  /**
  * Parses unknown input.
  *
  * @param dataset The input dataset.
  * @param config The configuration.
  *
  * @returns The output dataset.
  *
  * @internal
  */
  readonly "~run": (dataset: UnknownDataset, config: Config<BaseIssue<unknown>>) => Promise<OutputDataset<InferObjectOutput<Omit<TEntries, TKeys[number]>> & {
    [key: string]: unknown;
  }, Extract<InferIssue<TSchema>, {
    type: TSchema["type"];
  }> | InferObjectIssue<Omit<TEntries, TKeys[number]>>>>;
  /**
  * The input, output and issue type.
  *
  * @internal
  */
  readonly "~types"?: {
    readonly input: InferObjectInput<Omit<TEntries, TKeys[number]>> & {
      [key: string]: unknown;
    };
    readonly output: InferObjectOutput<Omit<TEntries, TKeys[number]>> & {
      [key: string]: unknown;
    };
    readonly issue: Extract<InferIssue<TSchema>, {
      type: TSchema["type"];
    }> | InferObjectIssue<Omit<TEntries, TKeys[number]>>;
  } | undefined;
} : TSchema extends ObjectWithRestSchema<infer TEntries, BaseSchema<unknown, unknown, BaseIssue<unknown>>, ErrorMessage<ObjectWithRestIssue> | undefined> ? Omit<TSchema, "entries" | "~standard" | "~run" | "~types"> & {
  /**
  * The object entries.
  */
  readonly entries: Omit<TEntries, TKeys[number]>;
  /**
  * The Standard Schema properties.
  *
  * @internal
  */
  readonly "~standard": StandardProps<InferObjectInput<Omit<TEntries, TKeys[number]>> & {
    [key: string]: InferInput<TSchema["rest"]>;
  }, InferObjectOutput<Omit<TEntries, TKeys[number]>> & {
    [key: string]: InferOutput<TSchema["rest"]>;
  }>;
  /**
  * Parses unknown input.
  *
  * @param dataset The input dataset.
  * @param config The configuration.
  *
  * @returns The output dataset.
  *
  * @internal
  */
  readonly "~run": (dataset: UnknownDataset, config: Config<BaseIssue<unknown>>) => OutputDataset<InferObjectOutput<Omit<TEntries, TKeys[number]>> & {
    [key: string]: InferOutput<TSchema["rest"]>;
  }, Extract<InferIssue<TSchema>, {
    type: TSchema["type"];
  }> | InferObjectIssue<Omit<TEntries, TKeys[number]>> | InferIssue<TSchema["rest"]>>;
  /**
  * The input, output and issue type.
  *
  * @internal
  */
  readonly "~types"?: {
    readonly input: InferObjectInput<Omit<TEntries, TKeys[number]>> & {
      [key: string]: InferInput<TSchema["rest"]>;
    };
    readonly output: InferObjectOutput<Omit<TEntries, TKeys[number]>> & {
      [key: string]: InferOutput<TSchema["rest"]>;
    };
    readonly issue: Extract<InferIssue<TSchema>, {
      type: TSchema["type"];
    }> | InferObjectIssue<Omit<TEntries, TKeys[number]>> | InferIssue<TSchema["rest"]>;
  } | undefined;
} : TSchema extends ObjectWithRestSchemaAsync<infer TEntries, BaseSchema<unknown, unknown, BaseIssue<unknown>>, ErrorMessage<ObjectWithRestIssue> | undefined> ? Omit<TSchema, "entries" | "~standard" | "~run" | "~types"> & {
  /**
  * The object entries.
  */
  readonly entries: Omit<TEntries, TKeys[number]>;
  /**
  * The Standard Schema properties.
  *
  * @internal
  */
  readonly "~standard": StandardProps<InferObjectInput<Omit<TEntries, TKeys[number]>> & {
    [key: string]: InferInput<TSchema["rest"]>;
  }, InferObjectOutput<Omit<TEntries, TKeys[number]>> & {
    [key: string]: InferOutput<TSchema["rest"]>;
  }>;
  /**
  * Parses unknown input.
  *
  * @param dataset The input dataset.
  * @param config The configuration.
  *
  * @returns The output dataset.
  *
  * @internal
  */
  readonly "~run": (dataset: UnknownDataset, config: Config<BaseIssue<unknown>>) => Promise<OutputDataset<InferObjectOutput<Omit<TEntries, TKeys[number]>> & {
    [key: string]: InferOutput<TSchema["rest"]>;
  }, Extract<InferIssue<TSchema>, {
    type: TSchema["type"];
  }> | InferObjectIssue<Omit<TEntries, TKeys[number]>> | InferIssue<TSchema["rest"]>>>;
  /**
  * The input, output and issue type.
  *
  * @internal
  */
  readonly "~types"?: {
    readonly input: InferObjectInput<Omit<TEntries, TKeys[number]>> & {
      [key: string]: InferInput<TSchema["rest"]>;
    };
    readonly output: InferObjectOutput<Omit<TEntries, TKeys[number]>> & {
      [key: string]: InferOutput<TSchema["rest"]>;
    };
    readonly issue: Extract<InferIssue<TSchema>, {
      type: TSchema["type"];
    }> | InferObjectIssue<Omit<TEntries, TKeys[number]>> | InferIssue<TSchema["rest"]>;
  } | undefined;
} : never;
/**
* Creates a modified copy of an object schema that does not contain the
* selected entries.
*
* @param schema The schema to omit from.
* @param keys The selected entries.
*
* @returns An object schema.
*/
declare function omit<const TSchema extends Schema$9, const TKeys extends ObjectKeys<TSchema>>(schema: TSchema, keys: TKeys): SchemaWithOmit<TSchema, TKeys>;
//#endregion
//#region src/methods/parse/parse.d.ts
/**
* Parses an unknown input based on a schema.
*
* @param schema The schema to be used.
* @param input The input to be parsed.
* @param config The parse configuration.
*
* @returns The parsed input.
*/
declare function parse<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>>(schema: TSchema, input: unknown, config?: Config<InferIssue<TSchema>>): InferOutput<TSchema>;
//#endregion
//#region src/methods/parse/parseAsync.d.ts
/**
* Parses an unknown input based on a schema.
*
* @param schema The schema to be used.
* @param input The input to be parsed.
* @param config The parse configuration.
*
* @returns The parsed input.
*/
declare function parseAsync<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>>(schema: TSchema, input: unknown, config?: Config<InferIssue<TSchema>>): Promise<InferOutput<TSchema>>;
//#endregion
//#region src/methods/parser/parser.d.ts
/**
* The parser interface.
*/
interface Parser<TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, TConfig extends Config<InferIssue<TSchema>> | undefined> {
  /**
  * Parses an unknown input based on the schema.
  */
  (input: unknown): InferOutput<TSchema>;
  /**
  * The schema to be used.
  */
  readonly schema: TSchema;
  /**
  * The parser configuration.
  */
  readonly config: TConfig;
}
/**
* Returns a function that parses an unknown input based on a schema.
*
* @param schema The schema to be used.
*
* @returns The parser function.
*/
declare function parser<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>>(schema: TSchema): Parser<TSchema, undefined>;
/**
* Returns a function that parses an unknown input based on a schema.
*
* @param schema The schema to be used.
* @param config The parser configuration.
*
* @returns The parser function.
*/
declare function parser<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, const TConfig extends Config<InferIssue<TSchema>> | undefined>(schema: TSchema, config: TConfig): Parser<TSchema, TConfig>;
//#endregion
//#region src/methods/parser/parserAsync.d.ts
/**
* The parser async interface.
*/
interface ParserAsync<TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, TConfig extends Config<InferIssue<TSchema>> | undefined> {
  /**
  * Parses an unknown input based on the schema.
  */
  (input: unknown): Promise<InferOutput<TSchema>>;
  /**
  * The schema to be used.
  */
  readonly schema: TSchema;
  /**
  * The parser configuration.
  */
  readonly config: TConfig;
}
/**
* Returns a function that parses an unknown input based on a schema.
*
* @param schema The schema to be used.
*
* @returns The parser function.
*/
declare function parserAsync<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>>(schema: TSchema): ParserAsync<TSchema, undefined>;
/**
* Returns a function that parses an unknown input based on a schema.
*
* @param schema The schema to be used.
* @param config The parser configuration.
*
* @returns The parser function.
*/
declare function parserAsync<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, const TConfig extends Config<InferIssue<TSchema>> | undefined>(schema: TSchema, config: TConfig): ParserAsync<TSchema, TConfig>;
//#endregion
//#region src/methods/partial/partial.d.ts
/**
* Schema type.
*/
type Schema$8 = SchemaWithoutPipe<LooseObjectSchema<ObjectEntries, ErrorMessage<LooseObjectIssue> | undefined> | ObjectSchema<ObjectEntries, ErrorMessage<ObjectIssue> | undefined> | ObjectWithRestSchema<ObjectEntries, BaseSchema<unknown, unknown, BaseIssue<unknown>>, ErrorMessage<ObjectWithRestIssue> | undefined> | StrictObjectSchema<ObjectEntries, ErrorMessage<StrictObjectIssue> | undefined>>;
/**
* Partial entries type.
*/
type PartialEntries$1<TEntries$1 extends ObjectEntries, TKeys extends readonly (keyof TEntries$1)[] | undefined> = { [TKey in keyof TEntries$1]: TKeys extends readonly (keyof TEntries$1)[] ? TKey extends TKeys[number] ? OptionalSchema<TEntries$1[TKey], undefined> : TEntries$1[TKey] : OptionalSchema<TEntries$1[TKey], undefined> };
/**
* Schema with partial type.
*/
type SchemaWithPartial<TSchema extends Schema$8, TKeys extends ObjectKeys<TSchema> | undefined> = TSchema extends ObjectSchema<infer TEntries, ErrorMessage<ObjectIssue> | undefined> | StrictObjectSchema<infer TEntries, ErrorMessage<StrictObjectIssue> | undefined> ? Omit<TSchema, "entries" | "~standard" | "~run" | "~types"> & {
  /**
  * The object entries.
  */
  readonly entries: PartialEntries$1<TEntries, TKeys>;
  /**
  * The Standard Schema properties.
  *
  * @internal
  */
  readonly "~standard": StandardProps<InferObjectInput<PartialEntries$1<TEntries, TKeys>>, InferObjectOutput<PartialEntries$1<TEntries, TKeys>>>;
  /**
  * Parses unknown input.
  *
  * @param dataset The input dataset.
  * @param config The configuration.
  *
  * @returns The output dataset.
  *
  * @internal
  */
  readonly "~run": (dataset: UnknownDataset, config: Config<BaseIssue<unknown>>) => OutputDataset<InferObjectOutput<PartialEntries$1<TEntries, TKeys>>, InferIssue<TSchema>>;
  /**
  * The input, output and issue type.
  *
  * @internal
  */
  readonly "~types"?: {
    readonly input: InferObjectInput<PartialEntries$1<TEntries, TKeys>>;
    readonly output: InferObjectOutput<PartialEntries$1<TEntries, TKeys>>;
    readonly issue: InferIssue<TSchema>;
  } | undefined;
} : TSchema extends LooseObjectSchema<infer TEntries, ErrorMessage<LooseObjectIssue> | undefined> ? Omit<TSchema, "entries" | "~standard" | "~run" | "~types"> & {
  /**
  * The object entries.
  */
  readonly entries: PartialEntries$1<TEntries, TKeys>;
  /**
  * The Standard Schema properties.
  *
  * @internal
  */
  readonly "~standard": StandardProps<InferObjectInput<PartialEntries$1<TEntries, TKeys>> & {
    [key: string]: unknown;
  }, InferObjectOutput<PartialEntries$1<TEntries, TKeys>> & {
    [key: string]: unknown;
  }>;
  /**
  * Parses unknown input.
  *
  * @param dataset The input dataset.
  * @param config The configuration.
  *
  * @returns The output dataset.
  *
  * @internal
  */
  readonly "~run": (dataset: UnknownDataset, config: Config<BaseIssue<unknown>>) => OutputDataset<InferObjectOutput<PartialEntries$1<TEntries, TKeys>> & {
    [key: string]: unknown;
  }, InferIssue<TSchema>>;
  /**
  * The input, output and issue type.
  *
  * @internal
  */
  readonly "~types"?: {
    readonly input: InferObjectInput<PartialEntries$1<TEntries, TKeys>> & {
      [key: string]: unknown;
    };
    readonly output: InferObjectOutput<PartialEntries$1<TEntries, TKeys>> & {
      [key: string]: unknown;
    };
    readonly issue: InferIssue<TSchema>;
  } | undefined;
} : TSchema extends ObjectWithRestSchema<infer TEntries, infer TRest, ErrorMessage<ObjectWithRestIssue> | undefined> ? Omit<TSchema, "entries" | "~standard" | "~run" | "~types"> & {
  /**
  * The object entries.
  */
  readonly entries: PartialEntries$1<TEntries, TKeys>;
  /**
  * The Standard Schema properties.
  *
  * @internal
  */
  readonly "~standard": StandardProps<InferObjectInput<PartialEntries$1<TEntries, TKeys>> & {
    [key: string]: InferInput<TRest>;
  }, InferObjectOutput<PartialEntries$1<TEntries, TKeys>> & {
    [key: string]: InferOutput<TRest>;
  }>;
  /**
  * Parses unknown input.
  *
  * @param dataset The input dataset.
  * @param config The configuration.
  *
  * @returns The output dataset.
  *
  * @internal
  */
  readonly "~run": (dataset: UnknownDataset, config: Config<BaseIssue<unknown>>) => OutputDataset<InferObjectOutput<PartialEntries$1<TEntries, TKeys>> & {
    [key: string]: InferOutput<TRest>;
  }, InferIssue<TSchema>>;
  /**
  * The input, output and issue type.
  *
  * @internal
  */
  readonly "~types"?: {
    readonly input: InferObjectInput<PartialEntries$1<TEntries, TKeys>> & {
      [key: string]: InferInput<TRest>;
    };
    readonly output: InferObjectOutput<PartialEntries$1<TEntries, TKeys>> & {
      [key: string]: InferOutput<TRest>;
    };
    readonly issue: InferIssue<TSchema>;
  } | undefined;
} : never;
/**
* Creates a modified copy of an object schema that marks all entries as optional.
*
* @param schema The schema to modify.
*
* @returns An object schema.
*/
declare function partial<const TSchema extends Schema$8>(schema: TSchema): SchemaWithPartial<TSchema, undefined>;
/**
* Creates a modified copy of an object schema that marks the selected entries
* as optional.
*
* @param schema The schema to modify.
* @param keys The selected entries.
*
* @returns An object schema.
*/
declare function partial<const TSchema extends Schema$8, const TKeys extends ObjectKeys<TSchema>>(schema: TSchema, keys: TKeys): SchemaWithPartial<TSchema, TKeys>;
//#endregion
//#region src/methods/partial/partialAsync.d.ts
/**
* Schema type.
*/
type Schema$7 = SchemaWithoutPipe<LooseObjectSchemaAsync<ObjectEntriesAsync, ErrorMessage<LooseObjectIssue> | undefined> | ObjectSchemaAsync<ObjectEntriesAsync, ErrorMessage<ObjectIssue> | undefined> | ObjectWithRestSchemaAsync<ObjectEntriesAsync, BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, ErrorMessage<ObjectWithRestIssue> | undefined> | StrictObjectSchemaAsync<ObjectEntriesAsync, ErrorMessage<StrictObjectIssue> | undefined>>;
/**
* Partial entries type.
*/
type PartialEntries<TEntries$1 extends ObjectEntriesAsync, TKeys extends readonly (keyof TEntries$1)[] | undefined> = { [TKey in keyof TEntries$1]: TKeys extends readonly (keyof TEntries$1)[] ? TKey extends TKeys[number] ? OptionalSchemaAsync<TEntries$1[TKey], undefined> : TEntries$1[TKey] : OptionalSchemaAsync<TEntries$1[TKey], undefined> };
/**
* Schema with partial type.
*/
type SchemaWithPartialAsync<TSchema extends Schema$7, TKeys extends ObjectKeys<TSchema> | undefined> = TSchema extends ObjectSchemaAsync<infer TEntries, ErrorMessage<ObjectIssue> | undefined> | StrictObjectSchemaAsync<infer TEntries, ErrorMessage<StrictObjectIssue> | undefined> ? Omit<TSchema, "entries" | "~standard" | "~run" | "~types"> & {
  /**
  * The object entries.
  */
  readonly entries: PartialEntries<TEntries, TKeys>;
  /**
  * The Standard Schema properties.
  *
  * @internal
  */
  readonly "~standard": StandardProps<InferObjectInput<PartialEntries<TEntries, TKeys>>, InferObjectOutput<PartialEntries<TEntries, TKeys>>>;
  /**
  * Parses unknown input.
  *
  * @param dataset The input dataset.
  * @param config The configuration.
  *
  * @returns The output dataset.
  *
  * @internal
  */
  readonly "~run": (dataset: UnknownDataset, config: Config<BaseIssue<unknown>>) => Promise<OutputDataset<InferObjectOutput<PartialEntries<TEntries, TKeys>>, InferIssue<TSchema>>>;
  /**
  * The input, output and issue type.
  *
  * @internal
  */
  readonly "~types"?: {
    readonly input: InferObjectInput<PartialEntries<TEntries, TKeys>>;
    readonly output: InferObjectOutput<PartialEntries<TEntries, TKeys>>;
    readonly issue: InferIssue<TSchema>;
  } | undefined;
} : TSchema extends LooseObjectSchemaAsync<infer TEntries, ErrorMessage<LooseObjectIssue> | undefined> ? Omit<TSchema, "entries" | "~standard" | "~run" | "~types"> & {
  /**
  * The object entries.
  */
  readonly entries: PartialEntries<TEntries, TKeys>;
  /**
  * The Standard Schema properties.
  *
  * @internal
  */
  readonly "~standard": StandardProps<InferObjectInput<PartialEntries<TEntries, TKeys>> & {
    [key: string]: unknown;
  }, InferObjectOutput<PartialEntries<TEntries, TKeys>> & {
    [key: string]: unknown;
  }>;
  /**
  * Parses unknown input.
  *
  * @param dataset The input dataset.
  * @param config The configuration.
  *
  * @returns The output dataset.
  *
  * @internal
  */
  readonly "~run": (dataset: UnknownDataset, config: Config<BaseIssue<unknown>>) => Promise<OutputDataset<InferObjectOutput<PartialEntries<TEntries, TKeys>> & {
    [key: string]: unknown;
  }, InferIssue<TSchema>>>;
  /**
  * The input, output and issue type.
  *
  * @internal
  */
  readonly "~types"?: {
    readonly input: InferObjectInput<PartialEntries<TEntries, TKeys>> & {
      [key: string]: unknown;
    };
    readonly output: InferObjectOutput<PartialEntries<TEntries, TKeys>> & {
      [key: string]: unknown;
    };
    readonly issue: InferIssue<TSchema>;
  } | undefined;
} : TSchema extends ObjectWithRestSchemaAsync<infer TEntries, infer TRest, ErrorMessage<ObjectWithRestIssue> | undefined> ? Omit<TSchema, "entries" | "~standard" | "~run" | "~types"> & {
  /**
  * The object entries.
  */
  readonly entries: PartialEntries<TEntries, TKeys>;
  /**
  * The Standard Schema properties.
  *
  * @internal
  */
  readonly "~standard": StandardProps<InferObjectInput<PartialEntries<TEntries, TKeys>> & {
    [key: string]: InferInput<TRest>;
  }, InferObjectOutput<PartialEntries<TEntries, TKeys>> & {
    [key: string]: InferOutput<TRest>;
  }>;
  /**
  * Parses unknown input.
  *
  * @param dataset The input dataset.
  * @param config The configuration.
  *
  * @returns The output dataset.
  *
  * @internal
  */
  readonly "~run": (dataset: UnknownDataset, config: Config<BaseIssue<unknown>>) => Promise<OutputDataset<InferObjectOutput<PartialEntries<TEntries, TKeys>> & {
    [key: string]: InferOutput<TRest>;
  }, InferIssue<TSchema>>>;
  /**
  * The input, output and issue type.
  *
  * @internal
  */
  readonly "~types"?: {
    readonly input: InferObjectInput<PartialEntries<TEntries, TKeys>> & {
      [key: string]: InferInput<TRest>;
    };
    readonly output: InferObjectOutput<PartialEntries<TEntries, TKeys>> & {
      [key: string]: InferOutput<TRest>;
    };
    readonly issue: InferIssue<TSchema>;
  } | undefined;
} : never;
/**
* Creates a modified copy of an object schema that marks all entries as optional.
*
* @param schema The schema to modify.
*
* @returns An object schema.
*/
declare function partialAsync<const TSchema extends Schema$7>(schema: TSchema): SchemaWithPartialAsync<TSchema, undefined>;
/**
* Creates a modified copy of an object schema that marks the selected entries
* as optional.
*
* @param schema The schema to modify.
* @param keys The selected entries.
*
* @returns An object schema.
*/
declare function partialAsync<const TSchema extends Schema$7, const TKeys extends ObjectKeys<TSchema>>(schema: TSchema, keys: TKeys): SchemaWithPartialAsync<TSchema, TKeys>;
//#endregion
//#region src/methods/pick/pick.d.ts
/**
* The schema type.
*/
type Schema$6 = SchemaWithoutPipe<LooseObjectSchema<ObjectEntries, ErrorMessage<LooseObjectIssue> | undefined> | LooseObjectSchemaAsync<ObjectEntriesAsync, ErrorMessage<LooseObjectIssue> | undefined> | ObjectSchema<ObjectEntries, ErrorMessage<ObjectIssue> | undefined> | ObjectSchemaAsync<ObjectEntriesAsync, ErrorMessage<ObjectIssue> | undefined> | ObjectWithRestSchema<ObjectEntries, BaseSchema<unknown, unknown, BaseIssue<unknown>>, ErrorMessage<ObjectWithRestIssue> | undefined> | ObjectWithRestSchemaAsync<ObjectEntriesAsync, BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, ErrorMessage<ObjectWithRestIssue> | undefined> | StrictObjectSchema<ObjectEntries, ErrorMessage<StrictObjectIssue> | undefined> | StrictObjectSchemaAsync<ObjectEntriesAsync, ErrorMessage<StrictObjectIssue> | undefined>>;
/**
* Schema with pick type.
*/
type SchemaWithPick<TSchema extends Schema$6, TKeys extends ObjectKeys<TSchema>> = TSchema extends ObjectSchema<infer TEntries, ErrorMessage<ObjectIssue> | undefined> | StrictObjectSchema<infer TEntries, ErrorMessage<StrictObjectIssue> | undefined> ? Omit<TSchema, "entries" | "~standard" | "~run" | "~types"> & {
  /**
  * The object entries.
  */
  readonly entries: Pick<TEntries, TKeys[number]>;
  /**
  * The Standard Schema properties.
  *
  * @internal
  */
  readonly "~standard": StandardProps<InferObjectInput<Pick<TEntries, TKeys[number]>>, InferObjectOutput<Pick<TEntries, TKeys[number]>>>;
  /**
  * Parses unknown input.
  *
  * @param dataset The input dataset.
  * @param config The configuration.
  *
  * @returns The output dataset.
  *
  * @internal
  */
  readonly "~run": (dataset: UnknownDataset, config: Config<BaseIssue<unknown>>) => OutputDataset<InferObjectOutput<Pick<TEntries, TKeys[number]>>, Extract<InferIssue<TSchema>, {
    type: TSchema["type"];
  }> | InferObjectIssue<Pick<TEntries, TKeys[number]>>>;
  /**
  * The input, output and issue type.
  *
  * @internal
  */
  readonly "~types"?: {
    readonly input: InferObjectInput<Pick<TEntries, TKeys[number]>>;
    readonly output: InferObjectOutput<Pick<TEntries, TKeys[number]>>;
    readonly issue: Extract<InferIssue<TSchema>, {
      type: TSchema["type"];
    }> | InferObjectIssue<Pick<TEntries, TKeys[number]>>;
  } | undefined;
} : TSchema extends ObjectSchemaAsync<infer TEntries, ErrorMessage<ObjectIssue> | undefined> | StrictObjectSchemaAsync<infer TEntries, ErrorMessage<StrictObjectIssue> | undefined> ? Omit<TSchema, "entries" | "~standard" | "~run" | "~types"> & {
  /**
  * The object entries.
  */
  readonly entries: Pick<TEntries, TKeys[number]>;
  /**
  * The Standard Schema properties.
  *
  * @internal
  */
  readonly "~standard": StandardProps<InferObjectInput<Pick<TEntries, TKeys[number]>>, InferObjectOutput<Pick<TEntries, TKeys[number]>>>;
  /**
  * Parses unknown input.
  *
  * @param dataset The input dataset.
  * @param config The configuration.
  *
  * @returns The output dataset.
  *
  * @internal
  */
  readonly "~run": (dataset: UnknownDataset, config: Config<BaseIssue<unknown>>) => Promise<OutputDataset<InferObjectOutput<Pick<TEntries, TKeys[number]>>, Extract<InferIssue<TSchema>, {
    type: TSchema["type"];
  }> | InferObjectIssue<Pick<TEntries, TKeys[number]>>>>;
  /**
  * The input, output and issue type.
  *
  * @internal
  */
  readonly "~types"?: {
    readonly input: InferObjectInput<Pick<TEntries, TKeys[number]>>;
    readonly output: InferObjectOutput<Pick<TEntries, TKeys[number]>>;
    readonly issue: Extract<InferIssue<TSchema>, {
      type: TSchema["type"];
    }> | InferObjectIssue<Pick<TEntries, TKeys[number]>>;
  } | undefined;
} : TSchema extends LooseObjectSchema<infer TEntries, ErrorMessage<LooseObjectIssue> | undefined> ? Omit<TSchema, "entries" | "~standard" | "~run" | "~types"> & {
  /**
  * The object entries.
  */
  readonly entries: Pick<TEntries, TKeys[number]>;
  /**
  * The Standard Schema properties.
  *
  * @internal
  */
  readonly "~standard": StandardProps<InferObjectInput<Pick<TEntries, TKeys[number]>> & {
    [key: string]: unknown;
  }, InferObjectOutput<Pick<TEntries, TKeys[number]>> & {
    [key: string]: unknown;
  }>;
  /**
  * Parses unknown input.
  *
  * @param dataset The input dataset.
  * @param config The configuration.
  *
  * @returns The output dataset.
  *
  * @internal
  */
  readonly "~run": (dataset: UnknownDataset, config: Config<BaseIssue<unknown>>) => OutputDataset<InferObjectOutput<Pick<TEntries, TKeys[number]>> & {
    [key: string]: unknown;
  }, Extract<InferIssue<TSchema>, {
    type: TSchema["type"];
  }> | InferObjectIssue<Pick<TEntries, TKeys[number]>>>;
  /**
  * The input, output and issue type.
  *
  * @internal
  */
  readonly "~types"?: {
    readonly input: InferObjectInput<Pick<TEntries, TKeys[number]>> & {
      [key: string]: unknown;
    };
    readonly output: InferObjectOutput<Pick<TEntries, TKeys[number]>> & {
      [key: string]: unknown;
    };
    readonly issue: Extract<InferIssue<TSchema>, {
      type: TSchema["type"];
    }> | InferObjectIssue<Pick<TEntries, TKeys[number]>>;
  } | undefined;
} : TSchema extends LooseObjectSchemaAsync<infer TEntries, ErrorMessage<LooseObjectIssue> | undefined> ? Omit<TSchema, "entries" | "~standard" | "~run" | "~types"> & {
  /**
  * The object entries.
  */
  readonly entries: Pick<TEntries, TKeys[number]>;
  /**
  * The Standard Schema properties.
  *
  * @internal
  */
  readonly "~standard": StandardProps<InferObjectInput<Pick<TEntries, TKeys[number]>> & {
    [key: string]: unknown;
  }, InferObjectOutput<Pick<TEntries, TKeys[number]>> & {
    [key: string]: unknown;
  }>;
  /**
  * Parses unknown input.
  *
  * @param dataset The input dataset.
  * @param config The configuration.
  *
  * @returns The output dataset.
  *
  * @internal
  */
  readonly "~run": (dataset: UnknownDataset, config: Config<BaseIssue<unknown>>) => Promise<OutputDataset<InferObjectOutput<Pick<TEntries, TKeys[number]>> & {
    [key: string]: unknown;
  }, Extract<InferIssue<TSchema>, {
    type: TSchema["type"];
  }> | InferObjectIssue<Pick<TEntries, TKeys[number]>>>>;
  /**
  * The input, output and issue type.
  *
  * @internal
  */
  readonly "~types"?: {
    readonly input: InferObjectInput<Pick<TEntries, TKeys[number]>> & {
      [key: string]: unknown;
    };
    readonly output: InferObjectOutput<Pick<TEntries, TKeys[number]>> & {
      [key: string]: unknown;
    };
    readonly issue: Extract<InferIssue<TSchema>, {
      type: TSchema["type"];
    }> | InferObjectIssue<Pick<TEntries, TKeys[number]>>;
  } | undefined;
} : TSchema extends ObjectWithRestSchema<infer TEntries, BaseSchema<unknown, unknown, BaseIssue<unknown>>, ErrorMessage<ObjectWithRestIssue> | undefined> ? Omit<TSchema, "entries" | "~standard" | "~run" | "~types"> & {
  /**
  * The object entries.
  */
  readonly entries: Pick<TEntries, TKeys[number]>;
  /**
  * The Standard Schema properties.
  *
  * @internal
  */
  readonly "~standard": StandardProps<InferObjectInput<Pick<TEntries, TKeys[number]>> & {
    [key: string]: InferInput<TSchema["rest"]>;
  }, InferObjectOutput<Pick<TEntries, TKeys[number]>> & {
    [key: string]: InferOutput<TSchema["rest"]>;
  }>;
  /**
  * Parses unknown input.
  *
  * @param dataset The input dataset.
  * @param config The configuration.
  *
  * @returns The output dataset.
  *
  * @internal
  */
  readonly "~run": (dataset: UnknownDataset, config: Config<BaseIssue<unknown>>) => OutputDataset<InferObjectOutput<Pick<TEntries, TKeys[number]>> & {
    [key: string]: InferOutput<TSchema["rest"]>;
  }, Extract<InferIssue<TSchema>, {
    type: TSchema["type"];
  }> | InferObjectIssue<Pick<TEntries, TKeys[number]>> | InferIssue<TSchema["rest"]>>;
  /**
  * The input, output and issue type.
  *
  * @internal
  */
  readonly "~types"?: {
    readonly input: InferObjectInput<Pick<TEntries, TKeys[number]>> & {
      [key: string]: InferInput<TSchema["rest"]>;
    };
    readonly output: InferObjectOutput<Pick<TEntries, TKeys[number]>> & {
      [key: string]: InferOutput<TSchema["rest"]>;
    };
    readonly issue: Extract<InferIssue<TSchema>, {
      type: TSchema["type"];
    }> | InferObjectIssue<Pick<TEntries, TKeys[number]>> | InferIssue<TSchema["rest"]>;
  } | undefined;
} : TSchema extends ObjectWithRestSchemaAsync<infer TEntries, BaseSchema<unknown, unknown, BaseIssue<unknown>>, ErrorMessage<ObjectWithRestIssue> | undefined> ? Omit<TSchema, "entries" | "~standard" | "~run" | "~types"> & {
  /**
  * The object entries.
  */
  readonly entries: Pick<TEntries, TKeys[number]>;
  /**
  * The Standard Schema properties.
  *
  * @internal
  */
  readonly "~standard": StandardProps<InferObjectInput<Pick<TEntries, TKeys[number]>> & {
    [key: string]: InferInput<TSchema["rest"]>;
  }, InferObjectOutput<Pick<TEntries, TKeys[number]>> & {
    [key: string]: InferOutput<TSchema["rest"]>;
  }>;
  /**
  * Parses unknown input.
  *
  * @param dataset The input dataset.
  * @param config The configuration.
  *
  * @returns The output dataset.
  *
  * @internal
  */
  readonly "~run": (dataset: UnknownDataset, config: Config<BaseIssue<unknown>>) => Promise<OutputDataset<InferObjectOutput<Pick<TEntries, TKeys[number]>> & {
    [key: string]: InferOutput<TSchema["rest"]>;
  }, Extract<InferIssue<TSchema>, {
    type: TSchema["type"];
  }> | InferObjectIssue<Pick<TEntries, TKeys[number]>> | InferIssue<TSchema["rest"]>>>;
  /**
  * The input, output and issue type.
  *
  * @internal
  */
  readonly "~types"?: {
    readonly input: InferObjectInput<Pick<TEntries, TKeys[number]>> & {
      [key: string]: InferInput<TSchema["rest"]>;
    };
    readonly output: InferObjectOutput<Pick<TEntries, TKeys[number]>> & {
      [key: string]: InferOutput<TSchema["rest"]>;
    };
    readonly issue: Extract<InferIssue<TSchema>, {
      type: TSchema["type"];
    }> | InferObjectIssue<Pick<TEntries, TKeys[number]>> | InferIssue<TSchema["rest"]>;
  } | undefined;
} : never;
/**
* Creates a modified copy of an object schema that contains only the selected
* entries.
*
* @param schema The schema to pick from.
* @param keys The selected entries.
*
* @returns An object schema.
*/
declare function pick<const TSchema extends Schema$6, const TKeys extends ObjectKeys<TSchema>>(schema: TSchema, keys: TKeys): SchemaWithPick<TSchema, TKeys>;
//#endregion
//#region src/methods/required/required.d.ts
/**
* Schema type.
*/
type Schema$5 = SchemaWithoutPipe<LooseObjectSchema<ObjectEntries, ErrorMessage<LooseObjectIssue> | undefined> | ObjectSchema<ObjectEntries, ErrorMessage<ObjectIssue> | undefined> | ObjectWithRestSchema<ObjectEntries, BaseSchema<unknown, unknown, BaseIssue<unknown>>, ErrorMessage<ObjectWithRestIssue> | undefined> | StrictObjectSchema<ObjectEntries, ErrorMessage<StrictObjectIssue> | undefined>>;
/**
* Required entries type.
*/
type RequiredEntries$1<TEntries$1 extends ObjectEntries, TKeys extends readonly (keyof TEntries$1)[] | undefined, TMessage extends ErrorMessage<NonOptionalIssue> | undefined> = { [TKey in keyof TEntries$1]: TKeys extends readonly (keyof TEntries$1)[] ? TKey extends TKeys[number] ? NonOptionalSchema<TEntries$1[TKey], TMessage> : TEntries$1[TKey] : NonOptionalSchema<TEntries$1[TKey], TMessage> };
/**
* Schema with required type.
*/
type SchemaWithRequired<TSchema extends Schema$5, TKeys extends ObjectKeys<TSchema> | undefined, TMessage extends ErrorMessage<NonOptionalIssue> | undefined> = TSchema extends ObjectSchema<infer TEntries, ErrorMessage<ObjectIssue> | undefined> | StrictObjectSchema<infer TEntries, ErrorMessage<StrictObjectIssue> | undefined> ? Omit<TSchema, "entries" | "~standard" | "~run" | "~types"> & {
  /**
  * The object entries.
  */
  readonly entries: RequiredEntries$1<TEntries, TKeys, TMessage>;
  /**
  * The Standard Schema properties.
  *
  * @internal
  */
  readonly "~standard": StandardProps<InferObjectInput<RequiredEntries$1<TEntries, TKeys, TMessage>>, InferObjectOutput<RequiredEntries$1<TEntries, TKeys, TMessage>>>;
  /**
  * Parses unknown input.
  *
  * @param dataset The input dataset.
  * @param config The configuration.
  *
  * @returns The output dataset.
  *
  * @internal
  */
  readonly "~run": (dataset: UnknownDataset, config: Config<BaseIssue<unknown>>) => OutputDataset<InferObjectOutput<RequiredEntries$1<TEntries, TKeys, TMessage>>, NonOptionalIssue | InferIssue<TSchema>>;
  /**
  * The input, output and issue type.
  *
  * @internal
  */
  readonly "~types"?: {
    readonly input: InferObjectInput<RequiredEntries$1<TEntries, TKeys, TMessage>>;
    readonly output: InferObjectOutput<RequiredEntries$1<TEntries, TKeys, TMessage>>;
    readonly issue: NonOptionalIssue | InferIssue<TSchema>;
  } | undefined;
} : TSchema extends LooseObjectSchema<infer TEntries, ErrorMessage<LooseObjectIssue> | undefined> ? Omit<TSchema, "entries" | "~standard" | "~run" | "~types"> & {
  /**
  * The object entries.
  */
  readonly entries: RequiredEntries$1<TEntries, TKeys, TMessage>;
  /**
  * The Standard Schema properties.
  *
  * @internal
  */
  readonly "~standard": StandardProps<InferObjectInput<RequiredEntries$1<TEntries, TKeys, TMessage>> & {
    [key: string]: unknown;
  }, InferObjectOutput<RequiredEntries$1<TEntries, TKeys, TMessage>> & {
    [key: string]: unknown;
  }>;
  /**
  * Parses unknown input.
  *
  * @param dataset The input dataset.
  * @param config The configuration.
  *
  * @returns The output dataset.
  *
  * @internal
  */
  readonly "~run": (dataset: UnknownDataset, config: Config<BaseIssue<unknown>>) => OutputDataset<InferObjectOutput<RequiredEntries$1<TEntries, TKeys, TMessage>> & {
    [key: string]: unknown;
  }, NonOptionalIssue | InferIssue<TSchema>>;
  /**
  * The input, output and issue type.
  *
  * @internal
  */
  readonly "~types"?: {
    readonly input: InferObjectInput<RequiredEntries$1<TEntries, TKeys, TMessage>> & {
      [key: string]: unknown;
    };
    readonly output: InferObjectOutput<RequiredEntries$1<TEntries, TKeys, TMessage>> & {
      [key: string]: unknown;
    };
    readonly issue: NonOptionalIssue | InferIssue<TSchema>;
  } | undefined;
} : TSchema extends ObjectWithRestSchema<infer TEntries, infer TRest, ErrorMessage<ObjectWithRestIssue> | undefined> ? Omit<TSchema, "entries" | "~standard" | "~run" | "~types"> & {
  /**
  * The object entries.
  */
  readonly entries: RequiredEntries$1<TEntries, TKeys, TMessage>;
  /**
  * The Standard Schema properties.
  *
  * @internal
  */
  readonly "~standard": StandardProps<InferObjectInput<RequiredEntries$1<TEntries, TKeys, TMessage>> & {
    [key: string]: InferInput<TRest>;
  }, InferObjectOutput<RequiredEntries$1<TEntries, TKeys, TMessage>> & {
    [key: string]: InferOutput<TRest>;
  }>;
  /**
  * Parses unknown input.
  *
  * @param dataset The input dataset.
  * @param config The configuration.
  *
  * @returns The output dataset.
  *
  * @internal
  */
  readonly "~run": (dataset: UnknownDataset, config: Config<BaseIssue<unknown>>) => OutputDataset<InferObjectOutput<RequiredEntries$1<TEntries, TKeys, TMessage>> & {
    [key: string]: InferOutput<TRest>;
  }, NonOptionalIssue | InferIssue<TSchema>>;
  /**
  * The input, output and issue type.
  *
  * @internal
  */
  readonly "~types"?: {
    readonly input: InferObjectInput<RequiredEntries$1<TEntries, TKeys, TMessage>> & {
      [key: string]: InferInput<TRest>;
    };
    readonly output: InferObjectOutput<RequiredEntries$1<TEntries, TKeys, TMessage>> & {
      [key: string]: InferOutput<TRest>;
    };
    readonly issue: NonOptionalIssue | InferIssue<TSchema>;
  } | undefined;
} : never;
/**
* Creates a modified copy of an object schema that marks all entries as required.
*
* @param schema The schema to modify.
*
* @returns An object schema.
*/
declare function required<const TSchema extends Schema$5>(schema: TSchema): SchemaWithRequired<TSchema, undefined, undefined>;
/**
* Creates a modified copy of an object schema that marks all entries as required.
*
* @param schema The schema to modify.
* @param message The error message.
*
* @returns An object schema.
*/
declare function required<const TSchema extends Schema$5, const TMessage extends ErrorMessage<NonOptionalIssue> | undefined>(schema: TSchema, message: TMessage): SchemaWithRequired<TSchema, undefined, TMessage>;
/**
* Creates a modified copy of an object schema that marks the selected entries
* as required.
*
* @param schema The schema to modify.
* @param keys The selected entries.
*
* @returns An object schema.
*/
declare function required<const TSchema extends Schema$5, const TKeys extends ObjectKeys<TSchema>>(schema: TSchema, keys: TKeys): SchemaWithRequired<TSchema, TKeys, undefined>;
/**
* Creates a modified copy of an object schema that marks the selected entries
* as required.
*
* @param schema The schema to modify.
* @param keys The selected entries.
* @param message The error message.
*
* @returns An object schema.
*/
declare function required<const TSchema extends Schema$5, const TKeys extends ObjectKeys<TSchema>, const TMessage extends ErrorMessage<NonOptionalIssue> | undefined>(schema: TSchema, keys: TKeys, message: TMessage): SchemaWithRequired<TSchema, TKeys, TMessage>;
//#endregion
//#region src/methods/required/requiredAsync.d.ts
/**
* Schema type.
*/
type Schema$4 = SchemaWithoutPipe<LooseObjectSchemaAsync<ObjectEntriesAsync, ErrorMessage<LooseObjectIssue> | undefined> | ObjectSchemaAsync<ObjectEntriesAsync, ErrorMessage<ObjectIssue> | undefined> | ObjectWithRestSchemaAsync<ObjectEntriesAsync, BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, ErrorMessage<ObjectWithRestIssue> | undefined> | StrictObjectSchemaAsync<ObjectEntriesAsync, ErrorMessage<StrictObjectIssue> | undefined>>;
/**
* Required entries type.
*/
type RequiredEntries<TEntries$1 extends ObjectEntriesAsync, TKeys extends readonly (keyof TEntries$1)[] | undefined, TMessage extends ErrorMessage<NonOptionalIssue> | undefined> = { [TKey in keyof TEntries$1]: TKeys extends readonly (keyof TEntries$1)[] ? TKey extends TKeys[number] ? NonOptionalSchemaAsync<TEntries$1[TKey], TMessage> : TEntries$1[TKey] : NonOptionalSchemaAsync<TEntries$1[TKey], TMessage> };
/**
* Schema with required type.
*/
type SchemaWithRequiredAsync<TSchema extends Schema$4, TKeys extends ObjectKeys<TSchema> | undefined, TMessage extends ErrorMessage<NonOptionalIssue> | undefined> = TSchema extends ObjectSchemaAsync<infer TEntries, ErrorMessage<ObjectIssue> | undefined> | StrictObjectSchemaAsync<infer TEntries, ErrorMessage<StrictObjectIssue> | undefined> ? Omit<TSchema, "entries" | "~standard" | "~run" | "~types"> & {
  /**
  * The object entries.
  */
  readonly entries: RequiredEntries<TEntries, TKeys, TMessage>;
  /**
  * The Standard Schema properties.
  *
  * @internal
  */
  readonly "~standard": StandardProps<InferObjectInput<RequiredEntries<TEntries, TKeys, TMessage>>, InferObjectOutput<RequiredEntries<TEntries, TKeys, TMessage>>>;
  /**
  * Parses unknown input.
  *
  * @param dataset The input dataset.
  * @param config The configuration.
  *
  * @returns The output dataset.
  *
  * @internal
  */
  readonly "~run": (dataset: UnknownDataset, config: Config<BaseIssue<unknown>>) => Promise<OutputDataset<InferObjectOutput<RequiredEntries<TEntries, TKeys, TMessage>>, NonOptionalIssue | InferIssue<TSchema>>>;
  /**
  * The input, output and issue type.
  *
  * @internal
  */
  readonly "~types"?: {
    readonly input: InferObjectInput<RequiredEntries<TEntries, TKeys, TMessage>>;
    readonly output: InferObjectOutput<RequiredEntries<TEntries, TKeys, TMessage>>;
    readonly issue: NonOptionalIssue | InferIssue<TSchema>;
  } | undefined;
} : TSchema extends LooseObjectSchemaAsync<infer TEntries, ErrorMessage<LooseObjectIssue> | undefined> ? Omit<TSchema, "entries" | "~standard" | "~run" | "~types"> & {
  /**
  * The object entries.
  */
  readonly entries: RequiredEntries<TEntries, TKeys, TMessage>;
  /**
  * The Standard Schema properties.
  *
  * @internal
  */
  readonly "~standard": StandardProps<InferObjectInput<RequiredEntries<TEntries, TKeys, TMessage>> & {
    [key: string]: unknown;
  }, InferObjectOutput<RequiredEntries<TEntries, TKeys, TMessage>> & {
    [key: string]: unknown;
  }>;
  /**
  * Parses unknown input.
  *
  * @param dataset The input dataset.
  * @param config The configuration.
  *
  * @returns The output dataset.
  *
  * @internal
  */
  readonly "~run": (dataset: UnknownDataset, config: Config<BaseIssue<unknown>>) => Promise<OutputDataset<InferObjectOutput<RequiredEntries<TEntries, TKeys, TMessage>> & {
    [key: string]: unknown;
  }, NonOptionalIssue | InferIssue<TSchema>>>;
  /**
  * The input, output and issue type.
  *
  * @internal
  */
  readonly "~types"?: {
    readonly input: InferObjectInput<RequiredEntries<TEntries, TKeys, TMessage>> & {
      [key: string]: unknown;
    };
    readonly output: InferObjectOutput<RequiredEntries<TEntries, TKeys, TMessage>> & {
      [key: string]: unknown;
    };
    readonly issue: NonOptionalIssue | InferIssue<TSchema>;
  } | undefined;
} : TSchema extends ObjectWithRestSchemaAsync<infer TEntries, infer TRest, ErrorMessage<ObjectWithRestIssue> | undefined> ? Omit<TSchema, "entries" | "~standard" | "~run" | "~types"> & {
  /**
  * The object entries.
  */
  readonly entries: RequiredEntries<TEntries, TKeys, TMessage>;
  /**
  * The Standard Schema properties.
  *
  * @internal
  */
  readonly "~standard": StandardProps<InferObjectInput<RequiredEntries<TEntries, TKeys, TMessage>> & {
    [key: string]: InferInput<TRest>;
  }, InferObjectOutput<RequiredEntries<TEntries, TKeys, TMessage>> & {
    [key: string]: InferOutput<TRest>;
  }>;
  /**
  * Parses unknown input.
  *
  * @param dataset The input dataset.
  * @param config The configuration.
  *
  * @returns The output dataset.
  *
  * @internal
  */
  readonly "~run": (dataset: UnknownDataset, config: Config<BaseIssue<unknown>>) => Promise<OutputDataset<InferObjectOutput<RequiredEntries<TEntries, TKeys, TMessage>> & {
    [key: string]: InferOutput<TRest>;
  }, NonOptionalIssue | InferIssue<TSchema>>>;
  /**
  * The input, output and issue type.
  *
  * @internal
  */
  readonly "~types"?: {
    readonly input: InferObjectInput<RequiredEntries<TEntries, TKeys, TMessage>> & {
      [key: string]: InferInput<TRest>;
    };
    readonly output: InferObjectOutput<RequiredEntries<TEntries, TKeys, TMessage>> & {
      [key: string]: InferOutput<TRest>;
    };
    readonly issue: NonOptionalIssue | InferIssue<TSchema>;
  } | undefined;
} : never;
/**
* Creates a modified copy of an object schema that marks all entries as required.
*
* @param schema The schema to modify.
*
* @returns An object schema.
*/
declare function requiredAsync<const TSchema extends Schema$4>(schema: TSchema): SchemaWithRequiredAsync<TSchema, undefined, undefined>;
/**
* Creates a modified copy of an object schema that marks all entries as required.
*
* @param schema The schema to modify.
* @param message The error message.
*
* @returns An object schema.
*/
declare function requiredAsync<const TSchema extends Schema$4, const TMessage extends ErrorMessage<NonOptionalIssue> | undefined>(schema: TSchema, message: TMessage): SchemaWithRequiredAsync<TSchema, undefined, TMessage>;
/**
* Creates a modified copy of an object schema that marks the selected entries
* as required.
*
* @param schema The schema to modify.
* @param keys The selected entries.
*
* @returns An object schema.
*/
declare function requiredAsync<const TSchema extends Schema$4, const TKeys extends ObjectKeys<TSchema>>(schema: TSchema, keys: TKeys): SchemaWithRequiredAsync<TSchema, TKeys, undefined>;
/**
* Creates a modified copy of an object schema that marks the selected entries
* as required.
*
* @param schema The schema to modify.
* @param keys The selected entries.
* @param message The error message.
*
* @returns An object schema.
*/
declare function requiredAsync<const TSchema extends Schema$4, const TKeys extends ObjectKeys<TSchema>, const TMessage extends ErrorMessage<NonOptionalIssue> | undefined>(schema: TSchema, keys: TKeys, message: TMessage): SchemaWithRequiredAsync<TSchema, TKeys, TMessage>;
//#endregion
//#region src/methods/safeParse/types.d.ts
/**
* Safe parse result type.
*/
type SafeParseResult<TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>> = {
  /**
  * Whether is's typed.
  */
  readonly typed: true;
  /**
  * Whether it's successful.
  */
  readonly success: true;
  /**
  * The output value.
  */
  readonly output: InferOutput<TSchema>;
  /**
  * The issues, if any.
  */
  readonly issues: undefined;
} | {
  readonly typed: true;
  readonly success: false;
  readonly output: InferOutput<TSchema>;
  readonly issues: [InferIssue<TSchema>, ...InferIssue<TSchema>[]];
} | {
  readonly typed: false;
  readonly success: false;
  readonly output: unknown;
  readonly issues: [InferIssue<TSchema>, ...InferIssue<TSchema>[]];
};
//#endregion
//#region src/methods/safeParse/safeParse.d.ts
/**
* Parses an unknown input based on a schema.
*
* @param schema The schema to be used.
* @param input The input to be parsed.
* @param config The parse configuration.
*
* @returns The parse result.
*/
declare function safeParse<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>>(schema: TSchema, input: unknown, config?: Config<InferIssue<TSchema>>): SafeParseResult<TSchema>;
//#endregion
//#region src/methods/safeParse/safeParseAsync.d.ts
/**
* Parses an unknown input based on a schema.
*
* @param schema The schema to be used.
* @param input The input to be parsed.
* @param config The parse configuration.
*
* @returns The parse result.
*/
declare function safeParseAsync<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>>(schema: TSchema, input: unknown, config?: Config<InferIssue<TSchema>>): Promise<SafeParseResult<TSchema>>;
//#endregion
//#region src/methods/safeParser/safeParser.d.ts
/**
* The safe parser interface.
*/
interface SafeParser<TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, TConfig extends Config<InferIssue<TSchema>> | undefined> {
  /**
  * Parses an unknown input based on the schema.
  */
  (input: unknown): SafeParseResult<TSchema>;
  /**
  * The schema to be used.
  */
  readonly schema: TSchema;
  /**
  * The parser configuration.
  */
  readonly config: TConfig;
}
/**
* Returns a function that parses an unknown input based on a schema.
*
* @param schema The schema to be used.
*
* @returns The parser function.
*/
declare function safeParser<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>>(schema: TSchema): SafeParser<TSchema, undefined>;
/**
* Returns a function that parses an unknown input based on a schema.
*
* @param schema The schema to be used.
* @param config The parser configuration.
*
* @returns The parser function.
*/
declare function safeParser<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, const TConfig extends Config<InferIssue<TSchema>> | undefined>(schema: TSchema, config: TConfig): SafeParser<TSchema, TConfig>;
//#endregion
//#region src/methods/safeParser/safeParserAsync.d.ts
/**
* The safe parser async interface.
*/
interface SafeParserAsync<TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, TConfig extends Config<InferIssue<TSchema>> | undefined> {
  /**
  * Parses an unknown input based on the schema.
  */
  (input: unknown): Promise<SafeParseResult<TSchema>>;
  /**
  * The schema to be used.
  */
  readonly schema: TSchema;
  /**
  * The parser configuration.
  */
  readonly config: TConfig;
}
/**
* Returns a function that parses an unknown input based on a schema.
*
* @param schema The schema to be used.
*
* @returns The parser function.
*/
declare function safeParserAsync<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>>(schema: TSchema): SafeParserAsync<TSchema, undefined>;
/**
* Returns a function that parses an unknown input based on a schema.
*
* @param schema The schema to be used.
* @param config The parser configuration.
*
* @returns The parser function.
*/
declare function safeParserAsync<const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, const TConfig extends Config<InferIssue<TSchema>> | undefined>(schema: TSchema, config: TConfig): SafeParserAsync<TSchema, TConfig>;
//#endregion
//#region src/methods/summarize/summarize.d.ts
/**
* Summarize the error messages of issues in a pretty-printable multi-line string.
*
* @param issues The list of issues.
*
* @returns A summary of the issues.
*
* @beta
*/
declare function summarize(issues: [BaseIssue<unknown>, ...BaseIssue<unknown>[]]): string;
//#endregion
//#region src/methods/unwrap/unwrap.d.ts
/**
* Unwraps the wrapped schema.
*
* @param schema The schema to be unwrapped.
*
* @returns The unwrapped schema.
*/
declare function unwrap<TSchema extends ExactOptionalSchema<BaseSchema<unknown, unknown, BaseIssue<unknown>>, unknown> | ExactOptionalSchemaAsync<BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, unknown> | NonNullableSchema<BaseSchema<unknown, unknown, BaseIssue<unknown>>, ErrorMessage<NonNullableIssue> | undefined> | NonNullableSchemaAsync<BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, ErrorMessage<NonNullableIssue> | undefined> | NonNullishSchema<BaseSchema<unknown, unknown, BaseIssue<unknown>>, ErrorMessage<NonNullishIssue> | undefined> | NonNullishSchemaAsync<BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, ErrorMessage<NonNullishIssue> | undefined> | NonOptionalSchema<BaseSchema<unknown, unknown, BaseIssue<unknown>>, ErrorMessage<NonOptionalIssue> | undefined> | NonOptionalSchemaAsync<BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, ErrorMessage<NonOptionalIssue> | undefined> | NullableSchema<BaseSchema<unknown, unknown, BaseIssue<unknown>>, unknown> | NullableSchemaAsync<BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, unknown> | NullishSchema<BaseSchema<unknown, unknown, BaseIssue<unknown>>, unknown> | NullishSchemaAsync<BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, unknown> | OptionalSchema<BaseSchema<unknown, unknown, BaseIssue<unknown>>, unknown> | OptionalSchemaAsync<BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, unknown> | UndefinedableSchema<BaseSchema<unknown, unknown, BaseIssue<unknown>>, unknown> | UndefinedableSchemaAsync<BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, unknown>>(schema: TSchema): TSchema["wrapped"];
//#endregion
//#region src/types/metadata.d.ts
/**
* Base metadata interface.
*/
interface BaseMetadata<TInput$1> {
  /**
  * The object kind.
  */
  readonly kind: "metadata";
  /**
  * The metadata type.
  */
  readonly type: string;
  /**
  * The metadata reference.
  */
  readonly reference: (...args: any[]) => BaseMetadata<any>;
  /**
  * The input, output and issue type.
  *
  * @internal
  */
  readonly "~types"?: {
    readonly input: TInput$1;
    readonly output: TInput$1;
    readonly issue: never;
  } | undefined;
}
/**
* Generic metadata type.
*/
type GenericMetadata<TInput$1 = any> = BaseMetadata<TInput$1>;
//#endregion
//#region src/types/dataset.d.ts
/**
* Unknown dataset interface.
*/
interface UnknownDataset {
  /**
  * Whether is's typed.
  */
  typed?: false;
  /**
  * The dataset value.
  */
  value: unknown;
  /**
  * The dataset issues.
  */
  issues?: undefined;
}
/**
* Success dataset interface.
*/
interface SuccessDataset<TValue$1> {
  /**
  * Whether is's typed.
  */
  typed: true;
  /**
  * The dataset value.
  */
  value: TValue$1;
  /**
  * The dataset issues.
  */
  issues?: undefined;
}
/**
* Partial dataset interface.
*/
interface PartialDataset<TValue$1, TIssue extends BaseIssue<unknown>> {
  /**
  * Whether is's typed.
  */
  typed: true;
  /**
  * The dataset value.
  */
  value: TValue$1;
  /**
  * The dataset issues.
  */
  issues: [TIssue, ...TIssue[]];
}
/**
* Failure dataset interface.
*/
interface FailureDataset<TIssue extends BaseIssue<unknown>> {
  /**
  * Whether is's typed.
  */
  typed: false;
  /**
  * The dataset value.
  */
  value: unknown;
  /**
  * The dataset issues.
  */
  issues: [TIssue, ...TIssue[]];
}
/**
* Output dataset type.
*/
type OutputDataset<TValue$1, TIssue extends BaseIssue<unknown>> = SuccessDataset<TValue$1> | PartialDataset<TValue$1, TIssue> | FailureDataset<TIssue>;
//#endregion
//#region src/types/standard.d.ts
/**
* The Standard Schema properties interface.
*/
interface StandardProps<TInput$1, TOutput$1> {
  /**
  * The version number of the standard.
  */
  readonly version: 1;
  /**
  * The vendor name of the schema library.
  */
  readonly vendor: "valibot";
  /**
  * Validates unknown input values.
  */
  readonly validate: (value: unknown) => StandardResult<TOutput$1> | Promise<StandardResult<TOutput$1>>;
  /**
  * Inferred types associated with the schema.
  */
  readonly types?: StandardTypes<TInput$1, TOutput$1> | undefined;
}
/**
* The result interface of the validate function.
*/
type StandardResult<TOutput$1> = StandardSuccessResult<TOutput$1> | StandardFailureResult;
/**
* The result interface if validation succeeds.
*/
interface StandardSuccessResult<TOutput$1> {
  /**
  * The typed output value.
  */
  readonly value: TOutput$1;
  /**
  * The non-existent issues.
  */
  readonly issues?: undefined;
}
/**
* The result interface if validation fails.
*/
interface StandardFailureResult {
  /**
  * The issues of failed validation.
  */
  readonly issues: readonly StandardIssue[];
}
/**
* The issue interface of the failure output.
*/
interface StandardIssue {
  /**
  * The error message of the issue.
  */
  readonly message: string;
  /**
  * The path of the issue, if any.
  */
  readonly path?: readonly (PropertyKey | StandardPathItem)[] | undefined;
}
/**
* The path item interface of the issue.
*/
interface StandardPathItem {
  /**
  * The key of the path item.
  */
  readonly key: PropertyKey;
}
/**
* The Standard Schema types interface.
*/
interface StandardTypes<TInput$1, TOutput$1> {
  /**
  * The input type of the schema.
  */
  readonly input: TInput$1;
  /**
  * The output type of the schema.
  */
  readonly output: TOutput$1;
}
//#endregion
//#region src/types/schema.d.ts
/**
* Base schema interface.
*/
interface BaseSchema<TInput$1, TOutput$1, TIssue extends BaseIssue<unknown>> {
  /**
  * The object kind.
  */
  readonly kind: "schema";
  /**
  * The schema type.
  */
  readonly type: string;
  /**
  * The schema reference.
  */
  readonly reference: (...args: any[]) => BaseSchema<unknown, unknown, BaseIssue<unknown>>;
  /**
  * The expected property.
  */
  readonly expects: string;
  /**
  * Whether it's async.
  */
  readonly async: false;
  /**
  * The Standard Schema properties.
  *
  * @internal
  */
  readonly "~standard": StandardProps<TInput$1, TOutput$1>;
  /**
  * Parses unknown input values.
  *
  * @param dataset The input dataset.
  * @param config The configuration.
  *
  * @returns The output dataset.
  *
  * @internal
  */
  readonly "~run": (dataset: UnknownDataset, config: Config<BaseIssue<unknown>>) => OutputDataset<TOutput$1, TIssue>;
  /**
  * The input, output and issue type.
  *
  * @internal
  */
  readonly "~types"?: {
    readonly input: TInput$1;
    readonly output: TOutput$1;
    readonly issue: TIssue;
  } | undefined;
}
/**
* Base schema async interface.
*/
interface BaseSchemaAsync<TInput$1, TOutput$1, TIssue extends BaseIssue<unknown>> extends Omit<BaseSchema<TInput$1, TOutput$1, TIssue>, "reference" | "async" | "~run"> {
  /**
  * The schema reference.
  */
  readonly reference: (...args: any[]) => BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>;
  /**
  * Whether it's async.
  */
  readonly async: true;
  /**
  * Parses unknown input values.
  *
  * @param dataset The input dataset.
  * @param config The configuration.
  *
  * @returns The output dataset.
  *
  * @internal
  */
  readonly "~run": (dataset: UnknownDataset, config: Config<BaseIssue<unknown>>) => Promise<OutputDataset<TOutput$1, TIssue>>;
}
/**
* Generic schema type.
*/
type GenericSchema<TInput$1 = unknown, TOutput$1 = TInput$1, TIssue extends BaseIssue<unknown> = BaseIssue<unknown>> = BaseSchema<TInput$1, TOutput$1, TIssue>;
/**
* Generic schema async type.
*/
type GenericSchemaAsync<TInput$1 = unknown, TOutput$1 = TInput$1, TIssue extends BaseIssue<unknown> = BaseIssue<unknown>> = BaseSchemaAsync<TInput$1, TOutput$1, TIssue>;
//#endregion
//#region src/types/transformation.d.ts
/**
* Base transformation interface.
*/
interface BaseTransformation<TInput$1, TOutput$1, TIssue extends BaseIssue<unknown>> {
  /**
  * The object kind.
  */
  readonly kind: "transformation";
  /**
  * The transformation type.
  */
  readonly type: string;
  /**
  * The transformation reference.
  */
  readonly reference: (...args: any[]) => BaseTransformation<any, any, BaseIssue<unknown>>;
  /**
  * Whether it's async.
  */
  readonly async: false;
  /**
  * Transforms known input values.
  *
  * @param dataset The input dataset.
  * @param config The configuration.
  *
  * @returns The output dataset.
  *
  * @internal
  */
  readonly "~run": (dataset: SuccessDataset<TInput$1>, config: Config<BaseIssue<unknown>>) => OutputDataset<TOutput$1, BaseIssue<unknown> | TIssue>;
  /**
  * The input, output and issue type.
  *
  * @internal
  */
  readonly "~types"?: {
    readonly input: TInput$1;
    readonly output: TOutput$1;
    readonly issue: TIssue;
  } | undefined;
}
/**
* Base transformation async interface.
*/
interface BaseTransformationAsync<TInput$1, TOutput$1, TIssue extends BaseIssue<unknown>> extends Omit<BaseTransformation<TInput$1, TOutput$1, TIssue>, "reference" | "async" | "~run"> {
  /**
  * The transformation reference.
  */
  readonly reference: (...args: any[]) => BaseTransformation<any, any, BaseIssue<unknown>> | BaseTransformationAsync<any, any, BaseIssue<unknown>>;
  /**
  * Whether it's async.
  */
  readonly async: true;
  /**
  * Transforms known input values.
  *
  * @param dataset The input dataset.
  * @param config The configuration.
  *
  * @returns The output dataset.
  *
  * @internal
  */
  readonly "~run": (dataset: SuccessDataset<TInput$1>, config: Config<BaseIssue<unknown>>) => Promise<OutputDataset<TOutput$1, BaseIssue<unknown> | TIssue>>;
}
/**
* Generic transformation type.
*/
type GenericTransformation<TInput$1 = any, TOutput$1 = TInput$1, TIssue extends BaseIssue<unknown> = BaseIssue<unknown>> = BaseTransformation<TInput$1, TOutput$1, TIssue>;
/**
* Generic transformation async type.
*/
type GenericTransformationAsync<TInput$1 = any, TOutput$1 = TInput$1, TIssue extends BaseIssue<unknown> = BaseIssue<unknown>> = BaseTransformationAsync<TInput$1, TOutput$1, TIssue>;
//#endregion
//#region src/types/validation.d.ts
/**
* Base validation interface.
*/
interface BaseValidation<TInput$1, TOutput$1, TIssue extends BaseIssue<unknown>> {
  /**
  * The object kind.
  */
  readonly kind: "validation";
  /**
  * The validation type.
  */
  readonly type: string;
  /**
  * The validation reference.
  */
  readonly reference: (...args: any[]) => BaseValidation<any, any, BaseIssue<unknown>>;
  /**
  * The expected property.
  */
  readonly expects: string | null;
  /**
  * Whether it's async.
  */
  readonly async: false;
  /**
  * Validates known input values.
  *
  * @param dataset The input dataset.
  * @param config The configuration.
  *
  * @returns The output dataset.
  *
  * @internal
  */
  readonly "~run": (dataset: OutputDataset<TInput$1, BaseIssue<unknown>>, config: Config<BaseIssue<unknown>>) => OutputDataset<TOutput$1, BaseIssue<unknown> | TIssue>;
  /**
  * The input, output and issue type.
  *
  * @internal
  */
  readonly "~types"?: {
    readonly input: TInput$1;
    readonly output: TOutput$1;
    readonly issue: TIssue;
  } | undefined;
}
/**
* Base validation async interface.
*/
interface BaseValidationAsync<TInput$1, TOutput$1, TIssue extends BaseIssue<unknown>> extends Omit<BaseValidation<TInput$1, TOutput$1, TIssue>, "reference" | "async" | "~run"> {
  /**
  * The validation reference.
  */
  readonly reference: (...args: any[]) => BaseValidation<any, any, BaseIssue<unknown>> | BaseValidationAsync<any, any, BaseIssue<unknown>>;
  /**
  * Whether it's async.
  */
  readonly async: true;
  /**
  * Validates known input values.
  *
  * @param dataset The input dataset.
  * @param config The configuration.
  *
  * @returns The output dataset.
  *
  * @internal
  */
  readonly "~run": (dataset: OutputDataset<TInput$1, BaseIssue<unknown>>, config: Config<BaseIssue<unknown>>) => Promise<OutputDataset<TOutput$1, BaseIssue<unknown> | TIssue>>;
}
/**
* Generic validation type.
*/
type GenericValidation<TInput$1 = any, TOutput$1 = TInput$1, TIssue extends BaseIssue<unknown> = BaseIssue<unknown>> = BaseValidation<TInput$1, TOutput$1, TIssue>;
/**
* Generic validation async type.
*/
type GenericValidationAsync<TInput$1 = any, TOutput$1 = TInput$1, TIssue extends BaseIssue<unknown> = BaseIssue<unknown>> = BaseValidationAsync<TInput$1, TOutput$1, TIssue>;
//#endregion
//#region src/types/infer.d.ts
/**
* Infer input type.
*/
type InferInput<TItem$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>> | BaseValidation<any, unknown, BaseIssue<unknown>> | BaseValidationAsync<any, unknown, BaseIssue<unknown>> | BaseTransformation<any, unknown, BaseIssue<unknown>> | BaseTransformationAsync<any, unknown, BaseIssue<unknown>> | BaseMetadata<any>> = NonNullable<TItem$1["~types"]>["input"];
/**
* Infer output type.
*/
type InferOutput<TItem$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>> | BaseValidation<any, unknown, BaseIssue<unknown>> | BaseValidationAsync<any, unknown, BaseIssue<unknown>> | BaseTransformation<any, unknown, BaseIssue<unknown>> | BaseTransformationAsync<any, unknown, BaseIssue<unknown>> | BaseMetadata<any>> = NonNullable<TItem$1["~types"]>["output"];
/**
* Infer issue type.
*/
type InferIssue<TItem$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>> | BaseValidation<any, unknown, BaseIssue<unknown>> | BaseValidationAsync<any, unknown, BaseIssue<unknown>> | BaseTransformation<any, unknown, BaseIssue<unknown>> | BaseTransformationAsync<any, unknown, BaseIssue<unknown>> | BaseMetadata<any>> = NonNullable<TItem$1["~types"]>["issue"];
//#endregion
//#region src/types/utils.d.ts
/**
* Checks if a type is `any`.
*/
type IsAny<Type> = 0 extends 1 & Type ? true : false;
/**
* Checks if a type is `never`.
*/
type IsNever<Type> = [Type] extends [never] ? true : false;
/**
* Extracts `null` from a type.
*/
type NonNullable$1<TValue$1> = TValue$1 extends null ? never : TValue$1;
/**
* Extracts `null` and `undefined` from a type.
*/
type NonNullish<TValue$1> = TValue$1 extends null | undefined ? never : TValue$1;
/**
* Extracts `undefined` from a type.
*/
type NonOptional<TValue$1> = TValue$1 extends undefined ? never : TValue$1;
/**
* Constructs a type that is maybe readonly.
*/
type MaybeReadonly<TValue$1> = TValue$1 | Readonly<TValue$1>;
/**
* Constructs a type that is deeply readonly.
*/
type DeepReadonly<TValue$1> = TValue$1 extends Record<string, unknown> | readonly unknown[] ? { readonly [TKey in keyof TValue$1]: DeepReadonly<TValue$1[TKey]> } : TValue$1;
/**
* Constructs a type that is maybe deeply readonly.
*/
type MaybeDeepReadonly<TValue$1> = TValue$1 | DeepReadonly<TValue$1>;
/**
* Constructs a type that is maybe a promise.
*/
type MaybePromise<TValue$1> = TValue$1 | Promise<TValue$1>;
/**
* Prettifies a type for better readability.
*
* Hint: This type has no effect and is only used so that TypeScript displays
* the final type in the preview instead of the utility types used.
*/
type Prettify<TObject> = { [TKey in keyof TObject]: TObject[TKey] } & {};
/**
* Marks specific keys as optional.
*/
type MarkOptional<TObject, TKeys extends keyof TObject> = { [TKey in keyof TObject]?: unknown } & Omit<TObject, TKeys> & Partial<Pick<TObject, TKeys>>;
/**
* Merges two objects. Overlapping entries from the second object overwrite
* properties from the first object.
*/
type Merge<TFirstObject, TSecondObject> = Omit<TFirstObject, keyof TFirstObject & keyof TSecondObject> & TSecondObject;
/**
* Extracts first tuple item.
*/
type FirstTupleItem<TTuple extends readonly [unknown, ...unknown[]]> = TTuple[0];
/**
* Extracts last tuple item.
*/
type LastTupleItem<TTuple extends readonly [unknown, ...unknown[]]> = TTuple[TTuple extends readonly [unknown, ...infer TRest] ? TRest["length"] : never];
/**
* Converts union to intersection type.
*/
type UnionToIntersect<TUnion> = (TUnion extends any ? (arg: TUnion) => void : never) extends ((arg: infer Intersect) => void) ? Intersect : never;
/**
* Converts union to tuple type using an accumulator.
*
* For more information: {@link https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-5.html#tail-recursion-elimination-on-conditional-types}
*/
type UnionToTupleHelper<TUnion, TResult extends unknown[]> = UnionToIntersect<TUnion extends never ? never : () => TUnion> extends (() => infer TLast) ? UnionToTupleHelper<Exclude<TUnion, TLast>, [TLast, ...TResult]> : TResult;
/**
* Converts union to tuple type.
*/
type UnionToTuple<TUnion> = UnionToTupleHelper<TUnion, []>;
//#endregion
//#region src/types/other.d.ts
/**
* Error message type.
*/
type ErrorMessage<TIssue extends BaseIssue<unknown>> = ((issue: TIssue) => string) | string;
/**
* Default type.
*/
type Default<TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, TInput$1 extends null | undefined> = MaybeDeepReadonly<InferInput<TWrapped$1> | TInput$1> | ((dataset?: UnknownDataset, config?: Config<InferIssue<TWrapped$1>>) => MaybeDeepReadonly<InferInput<TWrapped$1> | TInput$1>) | undefined;
/**
* Default async type.
*/
type DefaultAsync<TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, TInput$1 extends null | undefined> = MaybeDeepReadonly<InferInput<TWrapped$1> | TInput$1> | ((dataset?: UnknownDataset, config?: Config<InferIssue<TWrapped$1>>) => MaybePromise<MaybeDeepReadonly<InferInput<TWrapped$1> | TInput$1>>) | undefined;
/**
* Default value type.
*/
type DefaultValue<TDefault extends Default<BaseSchema<unknown, unknown, BaseIssue<unknown>>, null | undefined> | DefaultAsync<BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, null | undefined>> = TDefault extends DefaultAsync<infer TWrapped extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, infer TInput> ? TDefault extends ((dataset?: UnknownDataset, config?: Config<InferIssue<TWrapped>>) => MaybePromise<MaybeDeepReadonly<InferInput<TWrapped> | TInput>>) ? Awaited<ReturnType<TDefault>> : TDefault : never;
//#endregion
//#region src/types/object.d.ts
/**
* Optional entry schema type.
*/
type OptionalEntrySchema = ExactOptionalSchema<BaseSchema<unknown, unknown, BaseIssue<unknown>>, unknown> | NullishSchema<BaseSchema<unknown, unknown, BaseIssue<unknown>>, unknown> | OptionalSchema<BaseSchema<unknown, unknown, BaseIssue<unknown>>, unknown>;
/**
* Optional entry schema async type.
*/
type OptionalEntrySchemaAsync = ExactOptionalSchemaAsync<BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, unknown> | NullishSchemaAsync<BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, unknown> | OptionalSchemaAsync<BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, unknown>;
/**
* Object entries interface.
*/
interface ObjectEntries {
  [key: string]: BaseSchema<unknown, unknown, BaseIssue<unknown>> | SchemaWithFallback<BaseSchema<unknown, unknown, BaseIssue<unknown>>, unknown> | OptionalEntrySchema;
}
/**
* Object entries async interface.
*/
interface ObjectEntriesAsync {
  [key: string]: BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>> | SchemaWithFallback<BaseSchema<unknown, unknown, BaseIssue<unknown>>, unknown> | SchemaWithFallbackAsync<BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, unknown> | OptionalEntrySchema | OptionalEntrySchemaAsync;
}
/**
* Object keys type.
*/
type ObjectKeys<TSchema extends LooseObjectSchema<ObjectEntries, ErrorMessage<LooseObjectIssue> | undefined> | LooseObjectSchemaAsync<ObjectEntriesAsync, ErrorMessage<LooseObjectIssue> | undefined> | ObjectSchema<ObjectEntries, ErrorMessage<ObjectIssue> | undefined> | ObjectSchemaAsync<ObjectEntriesAsync, ErrorMessage<ObjectIssue> | undefined> | ObjectWithRestSchema<ObjectEntries, BaseSchema<unknown, unknown, BaseIssue<unknown>>, ErrorMessage<ObjectWithRestIssue> | undefined> | ObjectWithRestSchemaAsync<ObjectEntriesAsync, BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, ErrorMessage<ObjectWithRestIssue> | undefined> | StrictObjectSchema<ObjectEntries, ErrorMessage<StrictObjectIssue> | undefined> | StrictObjectSchemaAsync<ObjectEntriesAsync, ErrorMessage<StrictObjectIssue> | undefined>> = MaybeReadonly<[keyof TSchema["entries"], ...(keyof TSchema["entries"])[]]>;
/**
* Infer entries input type.
*/
type InferEntriesInput<TEntries$1 extends ObjectEntries | ObjectEntriesAsync> = { -readonly [TKey in keyof TEntries$1]: InferInput<TEntries$1[TKey]> };
/**
* Infer entries output type.
*/
type InferEntriesOutput<TEntries$1 extends ObjectEntries | ObjectEntriesAsync> = { -readonly [TKey in keyof TEntries$1]: InferOutput<TEntries$1[TKey]> };
/**
* Optional input keys type.
*/
type OptionalInputKeys<TEntries$1 extends ObjectEntries | ObjectEntriesAsync> = { [TKey in keyof TEntries$1]: TEntries$1[TKey] extends OptionalEntrySchema | OptionalEntrySchemaAsync ? TKey : never }[keyof TEntries$1];
/**
* Optional output keys type.
*/
type OptionalOutputKeys<TEntries$1 extends ObjectEntries | ObjectEntriesAsync> = { [TKey in keyof TEntries$1]: TEntries$1[TKey] extends OptionalEntrySchema | OptionalEntrySchemaAsync ? undefined extends TEntries$1[TKey]["default"] ? TKey : never : never }[keyof TEntries$1];
/**
* Input with question marks type.
*/
type InputWithQuestionMarks<TEntries$1 extends ObjectEntries | ObjectEntriesAsync, TObject extends InferEntriesInput<TEntries$1>> = MarkOptional<TObject, OptionalInputKeys<TEntries$1>>;
/**
* Output with question marks type.
*/
type OutputWithQuestionMarks<TEntries$1 extends ObjectEntries | ObjectEntriesAsync, TObject extends InferEntriesOutput<TEntries$1>> = MarkOptional<TObject, OptionalOutputKeys<TEntries$1>>;
/**
* Readonly output keys type.
*/
type ReadonlyOutputKeys<TEntries$1 extends ObjectEntries | ObjectEntriesAsync> = { [TKey in keyof TEntries$1]: TEntries$1[TKey] extends SchemaWithPipe<infer TPipe> | SchemaWithPipeAsync<infer TPipe> ? ReadonlyAction<any> extends TPipe[number] ? TKey : never : never }[keyof TEntries$1];
/**
* Output with readonly type.
*/
type OutputWithReadonly<TEntries$1 extends ObjectEntries | ObjectEntriesAsync, TObject extends OutputWithQuestionMarks<TEntries$1, InferEntriesOutput<TEntries$1>>> = Readonly<TObject> & Pick<TObject, Exclude<keyof TObject, ReadonlyOutputKeys<TEntries$1>>>;
/**
* Infer object input type.
*/
type InferObjectInput<TEntries$1 extends ObjectEntries | ObjectEntriesAsync> = Prettify<InputWithQuestionMarks<TEntries$1, InferEntriesInput<TEntries$1>>>;
/**
* Infer object output type.
*/
type InferObjectOutput<TEntries$1 extends ObjectEntries | ObjectEntriesAsync> = Prettify<OutputWithReadonly<TEntries$1, OutputWithQuestionMarks<TEntries$1, InferEntriesOutput<TEntries$1>>>>;
/**
* Infer object issue type.
*/
type InferObjectIssue<TEntries$1 extends ObjectEntries | ObjectEntriesAsync> = InferIssue<TEntries$1[keyof TEntries$1]>;
//#endregion
//#region src/types/tuple.d.ts
/**
* Tuple items type.
*/
type TupleItems = MaybeReadonly<BaseSchema<unknown, unknown, BaseIssue<unknown>>[]>;
/**
* Tuple items async type.
*/
type TupleItemsAsync = MaybeReadonly<(BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>)[]>;
/**
* Infer tuple input type.
*/
type InferTupleInput<TItems$1 extends TupleItems | TupleItemsAsync> = { -readonly [TKey in keyof TItems$1]: InferInput<TItems$1[TKey]> };
/**
* Infer tuple output type.
*/
type InferTupleOutput<TItems$1 extends TupleItems | TupleItemsAsync> = { -readonly [TKey in keyof TItems$1]: InferOutput<TItems$1[TKey]> };
/**
* Infer tuple issue type.
*/
type InferTupleIssue<TItems$1 extends TupleItems | TupleItemsAsync> = InferIssue<TItems$1[number]>;
//#endregion
//#region src/types/issue.d.ts
/**
* Array path item interface.
*/
interface ArrayPathItem {
  /**
  * The path item type.
  */
  readonly type: "array";
  /**
  * The path item origin.
  */
  readonly origin: "value";
  /**
  * The path item input.
  */
  readonly input: MaybeReadonly<unknown[]>;
  /**
  * The path item key.
  */
  readonly key: number;
  /**
  * The path item value.
  */
  readonly value: unknown;
}
/**
* Map path item interface.
*/
interface MapPathItem {
  /**
  * The path item type.
  */
  readonly type: "map";
  /**
  * The path item origin.
  */
  readonly origin: "key" | "value";
  /**
  * The path item input.
  */
  readonly input: Map<unknown, unknown>;
  /**
  * The path item key.
  */
  readonly key: unknown;
  /**
  * The path item value.
  */
  readonly value: unknown;
}
/**
* Object path item interface.
*/
interface ObjectPathItem {
  /**
  * The path item type.
  */
  readonly type: "object";
  /**
  * The path item origin.
  */
  readonly origin: "key" | "value";
  /**
  * The path item input.
  */
  readonly input: Record<string, unknown>;
  /**
  * The path item key.
  */
  readonly key: string;
  /**
  * The path item value.
  */
  readonly value: unknown;
}
/**
* Set path item interface.
*/
interface SetPathItem {
  /**
  * The path item type.
  */
  readonly type: "set";
  /**
  * The path item origin.
  */
  readonly origin: "value";
  /**
  * The path item input.
  */
  readonly input: Set<unknown>;
  /**
  * The path item key.
  */
  readonly key: null;
  /**
  * The path item key.
  */
  readonly value: unknown;
}
/**
* Unknown path item interface.
*/
interface UnknownPathItem {
  /**
  * The path item type.
  */
  readonly type: "unknown";
  /**
  * The path item origin.
  */
  readonly origin: "key" | "value";
  /**
  * The path item input.
  */
  readonly input: unknown;
  /**
  * The path item key.
  */
  readonly key: unknown;
  /**
  * The path item value.
  */
  readonly value: unknown;
}
/**
* Issue path item type.
*/
type IssuePathItem = ArrayPathItem | MapPathItem | ObjectPathItem | SetPathItem | UnknownPathItem;
/**
* Base issue interface.
*/
interface BaseIssue<TInput$1> extends Config<BaseIssue<TInput$1>> {
  /**
  * The issue kind.
  */
  readonly kind: "schema" | "validation" | "transformation";
  /**
  * The issue type.
  */
  readonly type: string;
  /**
  * The raw input data.
  */
  readonly input: TInput$1;
  /**
  * The expected property.
  */
  readonly expected: string | null;
  /**
  * The received property.
  */
  readonly received: string;
  /**
  * The error message.
  */
  readonly message: string;
  /**
  * The input requirement.
  */
  readonly requirement?: unknown | undefined;
  /**
  * The issue path.
  */
  readonly path?: [IssuePathItem, ...IssuePathItem[]] | undefined;
  /**
  * The sub issues.
  */
  readonly issues?: [BaseIssue<TInput$1>, ...BaseIssue<TInput$1>[]] | undefined;
}
/**
* Generic issue type.
*/
type GenericIssue<TInput$1 = unknown> = BaseIssue<TInput$1>;
/**
* Dot path type.
*/
type DotPath<TKey$1 extends string | number | symbol, TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>> = TKey$1 extends string | number ? `${TKey$1}` | `${TKey$1}.${IssueDotPath<TSchema>}` : never;
/**
* Object path type.
*/
type ObjectPath<TEntries$1 extends ObjectEntries | ObjectEntriesAsync> = { [TKey in keyof TEntries$1]: DotPath<TKey, TEntries$1[TKey]> }[keyof TEntries$1];
/**
* Tuple keys type.
*/
type TupleKeys<TItems$1 extends TupleItems | TupleItemsAsync> = Exclude<keyof TItems$1, keyof []>;
/**
* Tuple path type.
*/
type TuplePath<TItems$1 extends TupleItems | TupleItemsAsync> = { [TKey in TupleKeys<TItems$1>]: TItems$1[TKey] extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>> ? DotPath<TKey, TItems$1[TKey]> : never }[TupleKeys<TItems$1>];
/**
* Issue dot path type.
*/
type IssueDotPath<TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>> = TSchema extends SchemaWithPipe<infer TPipe> ? IssueDotPath<FirstTupleItem<TPipe>> : TSchema extends SchemaWithPipeAsync<infer TPipe> ? IssueDotPath<FirstTupleItem<TPipe>> : TSchema extends ArraySchema<infer TItem, ErrorMessage<ArrayIssue> | undefined> ? DotPath<number, TItem> : TSchema extends ArraySchemaAsync<infer TItem, ErrorMessage<ArrayIssue> | undefined> ? DotPath<number, TItem> : TSchema extends IntersectSchema<infer TOptions, ErrorMessage<IntersectIssue> | undefined> | UnionSchema<infer TOptions, ErrorMessage<UnionIssue<BaseIssue<unknown>>> | undefined> | VariantSchema<string, infer TOptions, ErrorMessage<VariantIssue> | undefined> ? IssueDotPath<TOptions[number]> : TSchema extends IntersectSchemaAsync<infer TOptions, ErrorMessage<IntersectIssue> | undefined> | UnionSchemaAsync<infer TOptions, ErrorMessage<UnionIssue<BaseIssue<unknown>>> | undefined> | VariantSchemaAsync<string, infer TOptions, ErrorMessage<VariantIssue> | undefined> ? IssueDotPath<TOptions[number]> : TSchema extends MapSchema<infer TKey, infer TValue, ErrorMessage<MapIssue> | undefined> | RecordSchema<infer TKey, infer TValue, ErrorMessage<RecordIssue> | undefined> ? DotPath<InferInput<TKey>, TValue> : TSchema extends MapSchemaAsync<infer TKey, infer TValue, ErrorMessage<MapIssue> | undefined> | RecordSchemaAsync<infer TKey, infer TValue, ErrorMessage<RecordIssue> | undefined> ? DotPath<InferInput<TKey>, TValue> : TSchema extends LooseObjectSchema<infer TEntries, ErrorMessage<LooseObjectIssue> | undefined> | ObjectSchema<infer TEntries, ErrorMessage<ObjectIssue> | undefined> | StrictObjectSchema<infer TEntries, ErrorMessage<StrictObjectIssue> | undefined> ? ObjectPath<TEntries> : TSchema extends LooseObjectSchemaAsync<infer TEntries, ErrorMessage<LooseObjectIssue> | undefined> | ObjectSchemaAsync<infer TEntries, ErrorMessage<ObjectIssue> | undefined> | StrictObjectSchemaAsync<infer TEntries, ErrorMessage<StrictObjectIssue> | undefined> ? ObjectPath<TEntries> : TSchema extends ObjectWithRestSchema<ObjectEntries, BaseSchema<unknown, unknown, BaseIssue<unknown>>, ErrorMessage<ObjectWithRestIssue> | undefined> ? string : TSchema extends ObjectWithRestSchemaAsync<ObjectEntriesAsync, BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, ErrorMessage<ObjectWithRestIssue> | undefined> ? string : TSchema extends SetSchema<infer TValue, ErrorMessage<SetIssue> | undefined> ? DotPath<number, TValue> : TSchema extends SetSchemaAsync<infer TValue, ErrorMessage<SetIssue> | undefined> ? DotPath<number, TValue> : TSchema extends LooseTupleSchema<infer TItems, ErrorMessage<LooseTupleIssue> | undefined> | StrictTupleSchema<infer TItems, ErrorMessage<StrictTupleIssue> | undefined> | TupleSchema<infer TItems, ErrorMessage<TupleIssue> | undefined> ? TuplePath<TItems> : TSchema extends LooseTupleSchemaAsync<infer TItems, ErrorMessage<LooseTupleIssue> | undefined> | StrictTupleSchemaAsync<infer TItems, ErrorMessage<StrictTupleIssue> | undefined> | TupleSchemaAsync<infer TItems, ErrorMessage<TupleIssue> | undefined> ? TuplePath<TItems> : TSchema extends TupleWithRestSchema<infer TItems, infer TRest, ErrorMessage<TupleWithRestIssue> | undefined> ? TuplePath<TItems> | DotPath<number, TRest> : TSchema extends TupleWithRestSchemaAsync<infer TItems, infer TRest, ErrorMessage<TupleWithRestIssue> | undefined> ? TuplePath<TItems> | DotPath<number, TRest> : TSchema extends ExactOptionalSchema<infer TWrapped, Default<BaseSchema<unknown, unknown, BaseIssue<unknown>>, never>> | LazySchema<infer TWrapped> | NonNullableSchema<infer TWrapped, ErrorMessage<NonNullableIssue> | undefined> | NonNullishSchema<infer TWrapped, ErrorMessage<NonNullishIssue> | undefined> | NonOptionalSchema<infer TWrapped, ErrorMessage<NonOptionalIssue> | undefined> | NullableSchema<infer TWrapped, Default<BaseSchema<unknown, unknown, BaseIssue<unknown>>, null>> | NullishSchema<infer TWrapped, Default<BaseSchema<unknown, unknown, BaseIssue<unknown>>, null | undefined>> | OptionalSchema<infer TWrapped, Default<BaseSchema<unknown, unknown, BaseIssue<unknown>>, undefined>> | UndefinedableSchema<infer TWrapped, Default<BaseSchema<unknown, unknown, BaseIssue<unknown>>, undefined>> ? IssueDotPath<TWrapped> : TSchema extends ExactOptionalSchemaAsync<infer TWrapped, DefaultAsync<BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, never>> | LazySchemaAsync<infer TWrapped> | NonNullableSchemaAsync<infer TWrapped, ErrorMessage<NonNullableIssue> | undefined> | NonNullishSchemaAsync<infer TWrapped, ErrorMessage<NonNullishIssue> | undefined> | NonOptionalSchemaAsync<infer TWrapped, ErrorMessage<NonOptionalIssue> | undefined> | NullableSchemaAsync<infer TWrapped, DefaultAsync<BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, null>> | NullishSchemaAsync<infer TWrapped, DefaultAsync<BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, null | undefined>> | OptionalSchemaAsync<infer TWrapped, DefaultAsync<BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, undefined>> | UndefinedableSchemaAsync<infer TWrapped, DefaultAsync<BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, undefined>> ? IssueDotPath<TWrapped> : never;
//#endregion
//#region src/types/config.d.ts
/**
* Config interface.
*/
interface Config<TIssue extends BaseIssue<unknown>> {
  /**
  * The selected language.
  */
  readonly lang?: string | undefined;
  /**
  * The error message.
  */
  readonly message?: ErrorMessage<TIssue> | undefined;
  /**
  * Whether it should be aborted early.
  */
  readonly abortEarly?: boolean | undefined;
  /**
  * Whether a pipe should be aborted early.
  */
  readonly abortPipeEarly?: boolean | undefined;
}
//#endregion
//#region src/types/pipe.d.ts
/**
* Pipe action type.
*/
type PipeAction<TInput$1, TOutput$1, TIssue extends BaseIssue<unknown>> = BaseValidation<TInput$1, TOutput$1, TIssue> | BaseTransformation<TInput$1, TOutput$1, TIssue> | BaseMetadata<TInput$1>;
/**
* Pipe action async type.
*/
type PipeActionAsync<TInput$1, TOutput$1, TIssue extends BaseIssue<unknown>> = BaseValidationAsync<TInput$1, TOutput$1, TIssue> | BaseTransformationAsync<TInput$1, TOutput$1, TIssue>;
/**
* Pipe item type.
*/
type PipeItem<TInput$1, TOutput$1, TIssue extends BaseIssue<unknown>> = BaseSchema<TInput$1, TOutput$1, TIssue> | PipeAction<TInput$1, TOutput$1, TIssue>;
/**
* Pipe item async type.
*/
type PipeItemAsync<TInput$1, TOutput$1, TIssue extends BaseIssue<unknown>> = BaseSchemaAsync<TInput$1, TOutput$1, TIssue> | PipeActionAsync<TInput$1, TOutput$1, TIssue>;
/**
* Schema without pipe type.
*/
type SchemaWithoutPipe<TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>> = TSchema & {
  pipe?: never;
};
/**
* Generic pipe action type.
*/
type GenericPipeAction<TInput$1 = any, TOutput$1 = TInput$1, TIssue extends BaseIssue<unknown> = BaseIssue<unknown>> = PipeAction<TInput$1, TOutput$1, TIssue>;
/**
* Generic pipe action async type.
*/
type GenericPipeActionAsync<TInput$1 = any, TOutput$1 = TInput$1, TIssue extends BaseIssue<unknown> = BaseIssue<unknown>> = PipeActionAsync<TInput$1, TOutput$1, TIssue>;
/**
* Generic pipe item type.
*/
type GenericPipeItem<TInput$1 = any, TOutput$1 = TInput$1, TIssue extends BaseIssue<unknown> = BaseIssue<unknown>> = PipeItem<TInput$1, TOutput$1, TIssue>;
/**
* Generic pipe item async type.
*/
type GenericPipeItemAsync<TInput$1 = any, TOutput$1 = TInput$1, TIssue extends BaseIssue<unknown> = BaseIssue<unknown>> = PipeItemAsync<TInput$1, TOutput$1, TIssue>;
//#endregion
//#region src/schemas/any/any.d.ts
/**
* Any schema interface.
*/
interface AnySchema extends BaseSchema<any, any, never> {
  /**
  * The schema type.
  */
  readonly type: "any";
  /**
  * The schema reference.
  */
  readonly reference: typeof any;
  /**
  * The expected property.
  */
  readonly expects: "any";
}
/**
* Creates an any schema.
*
* Hint: This schema function exists only for completeness and is not
* recommended in practice. Instead, `unknown` should be used to accept
* unknown data.
*
* @returns An any schema.
*/
declare function any(): AnySchema;
//#endregion
//#region src/schemas/array/types.d.ts
/**
* Array issue interface.
*/
interface ArrayIssue extends BaseIssue<unknown> {
  /**
  * The issue kind.
  */
  readonly kind: "schema";
  /**
  * The issue type.
  */
  readonly type: "array";
  /**
  * The expected property.
  */
  readonly expected: "Array";
}
//#endregion
//#region src/schemas/array/array.d.ts
/**
* Array schema interface.
*/
interface ArraySchema<TItem$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, TMessage extends ErrorMessage<ArrayIssue> | undefined> extends BaseSchema<InferInput<TItem$1>[], InferOutput<TItem$1>[], ArrayIssue | InferIssue<TItem$1>> {
  /**
  * The schema type.
  */
  readonly type: "array";
  /**
  * The schema reference.
  */
  readonly reference: typeof array;
  /**
  * The expected property.
  */
  readonly expects: "Array";
  /**
  * The array item schema.
  */
  readonly item: TItem$1;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates an array schema.
*
* @param item The item schema.
*
* @returns An array schema.
*/
declare function array<const TItem$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>>>(item: TItem$1): ArraySchema<TItem$1, undefined>;
/**
* Creates an array schema.
*
* @param item The item schema.
* @param message The error message.
*
* @returns An array schema.
*/
declare function array<const TItem$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, const TMessage extends ErrorMessage<ArrayIssue> | undefined>(item: TItem$1, message: TMessage): ArraySchema<TItem$1, TMessage>;
//#endregion
//#region src/schemas/array/arrayAsync.d.ts
/**
* Array schema interface.
*/
interface ArraySchemaAsync<TItem$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, TMessage extends ErrorMessage<ArrayIssue> | undefined> extends BaseSchemaAsync<InferInput<TItem$1>[], InferOutput<TItem$1>[], ArrayIssue | InferIssue<TItem$1>> {
  /**
  * The schema type.
  */
  readonly type: "array";
  /**
  * The schema reference.
  */
  readonly reference: typeof array | typeof arrayAsync;
  /**
  * The expected property.
  */
  readonly expects: "Array";
  /**
  * The array item schema.
  */
  readonly item: TItem$1;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates an array schema.
*
* @param item The item schema.
*
* @returns An array schema.
*/
declare function arrayAsync<const TItem$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>>(item: TItem$1): ArraySchemaAsync<TItem$1, undefined>;
/**
* Creates an array schema.
*
* @param item The item schema.
* @param message The error message.
*
* @returns An array schema.
*/
declare function arrayAsync<const TItem$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, const TMessage extends ErrorMessage<ArrayIssue> | undefined>(item: TItem$1, message: TMessage): ArraySchemaAsync<TItem$1, TMessage>;
//#endregion
//#region src/schemas/bigint/bigint.d.ts
/**
* Bigint issue interface.
*/
interface BigintIssue extends BaseIssue<unknown> {
  /**
  * The issue kind.
  */
  readonly kind: "schema";
  /**
  * The issue type.
  */
  readonly type: "bigint";
  /**
  * The expected property.
  */
  readonly expected: "bigint";
}
/**
* Bigint schema interface.
*/
interface BigintSchema<TMessage extends ErrorMessage<BigintIssue> | undefined> extends BaseSchema<bigint, bigint, BigintIssue> {
  /**
  * The schema type.
  */
  readonly type: "bigint";
  /**
  * The schema reference.
  */
  readonly reference: typeof bigint;
  /**
  * The expected property.
  */
  readonly expects: "bigint";
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a bigint schema.
*
* @returns A bigint schema.
*/
declare function bigint(): BigintSchema<undefined>;
/**
* Creates a bigint schema.
*
* @param message The error message.
*
* @returns A bigint schema.
*/
declare function bigint<const TMessage extends ErrorMessage<BigintIssue> | undefined>(message: TMessage): BigintSchema<TMessage>;
//#endregion
//#region src/schemas/blob/blob.d.ts
/**
* Blob issue interface.
*/
interface BlobIssue extends BaseIssue<unknown> {
  /**
  * The issue kind.
  */
  readonly kind: "schema";
  /**
  * The issue type.
  */
  readonly type: "blob";
  /**
  * The expected property.
  */
  readonly expected: "Blob";
}
/**
* Blob schema interface.
*/
interface BlobSchema<TMessage extends ErrorMessage<BlobIssue> | undefined> extends BaseSchema<Blob, Blob, BlobIssue> {
  /**
  * The schema type.
  */
  readonly type: "blob";
  /**
  * The schema reference.
  */
  readonly reference: typeof blob;
  /**
  * The expected property.
  */
  readonly expects: "Blob";
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a blob schema.
*
* @returns A blob schema.
*/
declare function blob(): BlobSchema<undefined>;
/**
* Creates a blob schema.
*
* @param message The error message.
*
* @returns A blob schema.
*/
declare function blob<const TMessage extends ErrorMessage<BlobIssue> | undefined>(message: TMessage): BlobSchema<TMessage>;
//#endregion
//#region src/schemas/boolean/boolean.d.ts
/**
* Boolean issue interface.
*/
interface BooleanIssue extends BaseIssue<unknown> {
  /**
  * The issue kind.
  */
  readonly kind: "schema";
  /**
  * The issue type.
  */
  readonly type: "boolean";
  /**
  * The expected property.
  */
  readonly expected: "boolean";
}
/**
* Boolean schema interface.
*/
interface BooleanSchema<TMessage extends ErrorMessage<BooleanIssue> | undefined> extends BaseSchema<boolean, boolean, BooleanIssue> {
  /**
  * The schema type.
  */
  readonly type: "boolean";
  /**
  * The schema reference.
  */
  readonly reference: typeof boolean;
  /**
  * The expected property.
  */
  readonly expects: "boolean";
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a boolean schema.
*
* @returns A boolean schema.
*/
declare function boolean(): BooleanSchema<undefined>;
/**
* Creates a boolean schema.
*
* @param message The error message.
*
* @returns A boolean schema.
*/
declare function boolean<const TMessage extends ErrorMessage<BooleanIssue> | undefined>(message: TMessage): BooleanSchema<TMessage>;
//#endregion
//#region src/schemas/custom/types.d.ts
/**
* Custom issue interface.
*/
interface CustomIssue extends BaseIssue<unknown> {
  /**
  * The issue kind.
  */
  readonly kind: "schema";
  /**
  * The issue type.
  */
  readonly type: "custom";
  /**
  * The expected property.
  */
  readonly expected: "unknown";
}
//#endregion
//#region src/schemas/custom/custom.d.ts
/**
* Check type.
*/
type Check = (input: unknown) => boolean;
/**
* Custom schema interface.
*/
interface CustomSchema<TInput$1, TMessage extends ErrorMessage<CustomIssue> | undefined> extends BaseSchema<TInput$1, TInput$1, CustomIssue> {
  /**
  * The schema type.
  */
  readonly type: "custom";
  /**
  * The schema reference.
  */
  readonly reference: typeof custom;
  /**
  * The expected property.
  */
  readonly expects: "unknown";
  /**
  * The type check function.
  */
  readonly check: Check;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a custom schema.
*
* @param check The type check function.
*
* @returns A custom schema.
*/
declare function custom<TInput$1>(check: Check): CustomSchema<TInput$1, undefined>;
/**
* Creates a custom schema.
*
* @param check The type check function.
* @param message The error message.
*
* @returns A custom schema.
*/
declare function custom<TInput$1, const TMessage extends ErrorMessage<CustomIssue> | undefined = ErrorMessage<CustomIssue> | undefined>(check: Check, message: TMessage): CustomSchema<TInput$1, TMessage>;
//#endregion
//#region src/schemas/custom/customAsync.d.ts
/**
* Check async type.
*/
type CheckAsync = (input: unknown) => MaybePromise<boolean>;
/**
* Custom schema async interface.
*/
interface CustomSchemaAsync<TInput$1, TMessage extends ErrorMessage<CustomIssue> | undefined> extends BaseSchemaAsync<TInput$1, TInput$1, CustomIssue> {
  /**
  * The schema type.
  */
  readonly type: "custom";
  /**
  * The schema reference.
  */
  readonly reference: typeof custom | typeof customAsync;
  /**
  * The expected property.
  */
  readonly expects: "unknown";
  /**
  * The type check function.
  */
  readonly check: CheckAsync;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a custom schema.
*
* @param check The type check function.
*
* @returns A custom schema.
*/
declare function customAsync<TInput$1>(check: CheckAsync): CustomSchemaAsync<TInput$1, undefined>;
/**
* Creates a custom schema.
*
* @param check The type check function.
* @param message The error message.
*
* @returns A custom schema.
*/
declare function customAsync<TInput$1, const TMessage extends ErrorMessage<CustomIssue> | undefined = ErrorMessage<CustomIssue> | undefined>(check: CheckAsync, message: TMessage): CustomSchemaAsync<TInput$1, TMessage>;
//#endregion
//#region src/schemas/date/date.d.ts
/**
* Date issue interface.
*/
interface DateIssue extends BaseIssue<unknown> {
  /**
  * The issue kind.
  */
  readonly kind: "schema";
  /**
  * The issue type.
  */
  readonly type: "date";
  /**
  * The expected property.
  */
  readonly expected: "Date";
}
/**
* Date schema interface.
*/
interface DateSchema<TMessage extends ErrorMessage<DateIssue> | undefined> extends BaseSchema<Date, Date, DateIssue> {
  /**
  * The schema type.
  */
  readonly type: "date";
  /**
  * The schema reference.
  */
  readonly reference: typeof date;
  /**
  * The expected property.
  */
  readonly expects: "Date";
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a date schema.
*
* @returns A date schema.
*/
declare function date(): DateSchema<undefined>;
/**
* Creates a date schema.
*
* @param message The error message.
*
* @returns A date schema.
*/
declare function date<const TMessage extends ErrorMessage<DateIssue> | undefined>(message: TMessage): DateSchema<TMessage>;
//#endregion
//#region src/schemas/enum/enum.d.ts
/**
* Enum interface.
*/
interface Enum {
  [key: string]: string | number;
}
/**
* Enum values type.
*/
type EnumValues<TEnum extends Enum> = { [TKey in keyof TEnum]: TKey extends number ? TEnum[TKey] extends string ? TEnum[TEnum[TKey]] extends TKey ? never : TEnum[TKey] : TEnum[TKey] : TKey extends "NaN" | "Infinity" | "-Infinity" ? TEnum[TKey] extends string ? TEnum[TEnum[TKey]] extends number ? never : TEnum[TKey] : TEnum[TKey] : TKey extends `+${number}` ? TEnum[TKey] : TKey extends `${infer TNumber extends number}` ? TEnum[TKey] extends string ? TEnum[TEnum[TKey]] extends TNumber ? never : TEnum[TKey] : TEnum[TKey] : TEnum[TKey] }[keyof TEnum];
/**
* Enum issue interface.
*/
interface EnumIssue extends BaseIssue<unknown> {
  /**
  * The issue kind.
  */
  readonly kind: "schema";
  /**
  * The issue type.
  */
  readonly type: "enum";
  /**
  * The expected property.
  */
  readonly expected: string;
}
/**
* Enum schema interface.
*/
interface EnumSchema<TEnum extends Enum, TMessage extends ErrorMessage<EnumIssue> | undefined> extends BaseSchema<EnumValues<TEnum>, EnumValues<TEnum>, EnumIssue> {
  /**
  * The schema type.
  */
  readonly type: "enum";
  /**
  * The schema reference.
  */
  readonly reference: typeof enum_;
  /**
  * The enum object.
  */
  readonly enum: TEnum;
  /**
  * The enum options.
  */
  readonly options: EnumValues<TEnum>[];
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates an enum schema.
*
* @param enum__ The enum object.
*
* @returns An enum schema.
*/
declare function enum_<const TEnum extends Enum>(enum__: TEnum): EnumSchema<TEnum, undefined>;
/**
* Creates an enum schema.
*
* @param enum__ The enum object.
* @param message The error message.
*
* @returns An enum schema.
*/
declare function enum_<const TEnum extends Enum, const TMessage extends ErrorMessage<EnumIssue> | undefined>(enum__: TEnum, message: TMessage): EnumSchema<TEnum, TMessage>;
//#endregion
//#region src/schemas/exactOptional/exactOptional.d.ts
/**
* Exact optional schema interface.
*/
interface ExactOptionalSchema<TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, TDefault extends Default<TWrapped$1, never>> extends BaseSchema<InferInput<TWrapped$1>, InferOutput<TWrapped$1>, InferIssue<TWrapped$1>> {
  /**
  * The schema type.
  */
  readonly type: "exact_optional";
  /**
  * The schema reference.
  */
  readonly reference: typeof exactOptional;
  /**
  * The expected property.
  */
  readonly expects: TWrapped$1["expects"];
  /**
  * The wrapped schema.
  */
  readonly wrapped: TWrapped$1;
  /**
  * The default value.
  */
  readonly default: TDefault;
}
/**
* Creates an exact optional schema.
*
* @param wrapped The wrapped schema.
*
* @returns An exact optional schema.
*/
declare function exactOptional<const TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>>>(wrapped: TWrapped$1): ExactOptionalSchema<TWrapped$1, undefined>;
/**
* Creates an exact optional schema.
*
* @param wrapped The wrapped schema.
* @param default_ The default value.
*
* @returns An exact optional schema.
*/
declare function exactOptional<const TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, const TDefault extends Default<TWrapped$1, never>>(wrapped: TWrapped$1, default_: TDefault): ExactOptionalSchema<TWrapped$1, TDefault>;
//#endregion
//#region src/schemas/exactOptional/exactOptionalAsync.d.ts
/**
* Exact optional schema async interface.
*/
interface ExactOptionalSchemaAsync<TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, TDefault extends DefaultAsync<TWrapped$1, never>> extends BaseSchemaAsync<InferInput<TWrapped$1>, InferOutput<TWrapped$1>, InferIssue<TWrapped$1>> {
  /**
  * The schema type.
  */
  readonly type: "exact_optional";
  /**
  * The schema reference.
  */
  readonly reference: typeof exactOptional | typeof exactOptionalAsync;
  /**
  * The expected property.
  */
  readonly expects: TWrapped$1["expects"];
  /**
  * The wrapped schema.
  */
  readonly wrapped: TWrapped$1;
  /**
  * The default value.
  */
  readonly default: TDefault;
}
/**
* Creates an exact optional schema.
*
* @param wrapped The wrapped schema.
*
* @returns An exact optional schema.
*/
declare function exactOptionalAsync<const TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>>(wrapped: TWrapped$1): ExactOptionalSchemaAsync<TWrapped$1, undefined>;
/**
* Creates an exact optional schema.
*
* @param wrapped The wrapped schema.
* @param default_ The default value.
*
* @returns An exact optional schema.
*/
declare function exactOptionalAsync<const TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, const TDefault extends DefaultAsync<TWrapped$1, never>>(wrapped: TWrapped$1, default_: TDefault): ExactOptionalSchemaAsync<TWrapped$1, TDefault>;
//#endregion
//#region src/schemas/file/file.d.ts
/**
* File issue interface.
*/
interface FileIssue extends BaseIssue<unknown> {
  /**
  * The issue kind.
  */
  readonly kind: "schema";
  /**
  * The issue type.
  */
  readonly type: "file";
  /**
  * The expected property.
  */
  readonly expected: "File";
}
/**
* File schema interface.
*/
interface FileSchema<TMessage extends ErrorMessage<FileIssue> | undefined> extends BaseSchema<File, File, FileIssue> {
  /**
  * The schema type.
  */
  readonly type: "file";
  /**
  * The schema reference.
  */
  readonly reference: typeof file;
  /**
  * The expected property.
  */
  readonly expects: "File";
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a file schema.
*
* @returns A file schema.
*/
declare function file(): FileSchema<undefined>;
/**
* Creates a file schema.
*
* @param message The error message.
*
* @returns A file schema.
*/
declare function file<const TMessage extends ErrorMessage<FileIssue> | undefined>(message: TMessage): FileSchema<TMessage>;
//#endregion
//#region src/schemas/function/function.d.ts
/**
* Function issue interface.
*/
interface FunctionIssue extends BaseIssue<unknown> {
  /**
  * The issue kind.
  */
  readonly kind: "schema";
  /**
  * The issue type.
  */
  readonly type: "function";
  /**
  * The expected property.
  */
  readonly expected: "Function";
}
/**
* Function schema interface.
*/
interface FunctionSchema<TMessage extends ErrorMessage<FunctionIssue> | undefined> extends BaseSchema<(...args: unknown[]) => unknown, (...args: unknown[]) => unknown, FunctionIssue> {
  /**
  * The schema type.
  */
  readonly type: "function";
  /**
  * The schema reference.
  */
  readonly reference: typeof function_;
  /**
  * The expected property.
  */
  readonly expects: "Function";
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a function schema.
*
* @returns A function schema.
*/
declare function function_(): FunctionSchema<undefined>;
/**
* Creates a function schema.
*
* @param message The error message.
*
* @returns A function schema.
*/
declare function function_<const TMessage extends ErrorMessage<FunctionIssue> | undefined>(message: TMessage): FunctionSchema<TMessage>;
//#endregion
//#region src/schemas/instance/instance.d.ts
/**
* Class type.
*/
type Class = new (...args: any[]) => any;
/**
* Instance issue interface.
*/
interface InstanceIssue extends BaseIssue<unknown> {
  /**
  * The issue kind.
  */
  readonly kind: "schema";
  /**
  * The issue type.
  */
  readonly type: "instance";
  /**
  * The expected property.
  */
  readonly expected: string;
}
/**
* Instance schema interface.
*/
interface InstanceSchema<TClass extends Class, TMessage extends ErrorMessage<InstanceIssue> | undefined> extends BaseSchema<InstanceType<TClass>, InstanceType<TClass>, InstanceIssue> {
  /**
  * The schema type.
  */
  readonly type: "instance";
  /**
  * The schema reference.
  */
  readonly reference: typeof instance;
  /**
  * The class of the instance.
  */
  readonly class: TClass;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates an instance schema.
*
* @param class_ The class of the instance.
*
* @returns An instance schema.
*/
declare function instance<TClass extends Class>(class_: TClass): InstanceSchema<TClass, undefined>;
/**
* Creates an instance schema.
*
* @param class_ The class of the instance.
* @param message The error message.
*
* @returns An instance schema.
*/
declare function instance<TClass extends Class, const TMessage extends ErrorMessage<InstanceIssue> | undefined>(class_: TClass, message: TMessage): InstanceSchema<TClass, TMessage>;
//#endregion
//#region src/schemas/intersect/types.d.ts
/**
* Intersect issue interface.
*/
interface IntersectIssue extends BaseIssue<unknown> {
  /**
  * The issue kind.
  */
  readonly kind: "schema";
  /**
  * The issue type.
  */
  readonly type: "intersect";
  /**
  * The expected property.
  */
  readonly expected: string;
}
/**
* Intersect options type.
*/
type IntersectOptions = MaybeReadonly<BaseSchema<unknown, unknown, BaseIssue<unknown>>[]>;
/**
* Intersect options async type.
*/
type IntersectOptionsAsync = MaybeReadonly<(BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>)[]>;
/**
* Infer option type.
*/
type InferOption<TInput$1, TOutput$1> = BaseSchema<TInput$1, TOutput$1, BaseIssue<unknown>> | BaseSchemaAsync<TInput$1, TOutput$1, BaseIssue<unknown>>;
/**
* Infer intersect input type.
*/
type InferIntersectInput<TOptions$1 extends IntersectOptions | IntersectOptionsAsync> = TOptions$1 extends readonly [InferOption<infer TInput, unknown>, ...infer TRest] ? TRest extends readonly [InferOption<unknown, unknown>, ...InferOption<unknown, unknown>[]] ? TInput & InferIntersectInput<TRest> : TInput : never;
/**
* Infer intersect output type.
*/
type InferIntersectOutput<TOptions$1 extends IntersectOptions | IntersectOptionsAsync> = TOptions$1 extends readonly [InferOption<unknown, infer TOutput>, ...infer TRest] ? TRest extends readonly [InferOption<unknown, unknown>, ...InferOption<unknown, unknown>[]] ? TOutput & InferIntersectOutput<TRest> : TOutput : never;
//#endregion
//#region src/schemas/intersect/intersect.d.ts
/**
* Intersect schema interface.
*/
interface IntersectSchema<TOptions$1 extends IntersectOptions, TMessage extends ErrorMessage<IntersectIssue> | undefined> extends BaseSchema<InferIntersectInput<TOptions$1>, InferIntersectOutput<TOptions$1>, IntersectIssue | InferIssue<TOptions$1[number]>> {
  /**
  * The schema type.
  */
  readonly type: "intersect";
  /**
  * The schema reference.
  */
  readonly reference: typeof intersect;
  /**
  * The intersect options.
  */
  readonly options: TOptions$1;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates an intersect schema.
*
* @param options The intersect options.
*
* @returns An intersect schema.
*/
declare function intersect<const TOptions$1 extends IntersectOptions>(options: TOptions$1): IntersectSchema<TOptions$1, undefined>;
/**
* Creates an intersect schema.
*
* @param options The intersect options.
* @param message The error message.
*
* @returns An intersect schema.
*/
declare function intersect<const TOptions$1 extends IntersectOptions, const TMessage extends ErrorMessage<IntersectIssue> | undefined>(options: TOptions$1, message: TMessage): IntersectSchema<TOptions$1, TMessage>;
//#endregion
//#region src/schemas/intersect/intersectAsync.d.ts
/**
* Intersect schema async interface.
*/
interface IntersectSchemaAsync<TOptions$1 extends IntersectOptionsAsync, TMessage extends ErrorMessage<IntersectIssue> | undefined> extends BaseSchemaAsync<InferIntersectInput<TOptions$1>, InferIntersectOutput<TOptions$1>, IntersectIssue | InferIssue<TOptions$1[number]>> {
  /**
  * The schema type.
  */
  readonly type: "intersect";
  /**
  * The schema reference.
  */
  readonly reference: typeof intersect | typeof intersectAsync;
  /**
  * The intersect options.
  */
  readonly options: TOptions$1;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates an intersect schema.
*
* @param options The intersect options.
*
* @returns An intersect schema.
*/
declare function intersectAsync<const TOptions$1 extends IntersectOptionsAsync>(options: TOptions$1): IntersectSchemaAsync<TOptions$1, undefined>;
/**
* Creates an intersect schema.
*
* @param options The intersect options.
* @param message The error message.
*
* @returns An intersect schema.
*/
declare function intersectAsync<const TOptions$1 extends IntersectOptionsAsync, const TMessage extends ErrorMessage<IntersectIssue> | undefined>(options: TOptions$1, message: TMessage): IntersectSchemaAsync<TOptions$1, TMessage>;
//#endregion
//#region src/schemas/lazy/lazy.d.ts
/**
* Lazy schema interface.
*/
interface LazySchema<TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>>> extends BaseSchema<InferInput<TWrapped$1>, InferOutput<TWrapped$1>, InferIssue<TWrapped$1>> {
  /**
  * The schema type.
  */
  readonly type: "lazy";
  /**
  * The schema reference.
  */
  readonly reference: typeof lazy;
  /**
  * The expected property.
  */
  readonly expects: "unknown";
  /**
  * The schema getter.
  */
  readonly getter: (input: unknown) => TWrapped$1;
}
/**
* Creates a lazy schema.
*
* @param getter The schema getter.
*
* @returns A lazy schema.
*/
declare function lazy<const TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>>>(getter: (input: unknown) => TWrapped$1): LazySchema<TWrapped$1>;
//#endregion
//#region src/schemas/lazy/lazyAsync.d.ts
/**
* Lazy schema async interface.
*/
interface LazySchemaAsync<TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>> extends BaseSchemaAsync<InferInput<TWrapped$1>, InferOutput<TWrapped$1>, InferIssue<TWrapped$1>> {
  /**
  * The schema type.
  */
  readonly type: "lazy";
  /**
  * The schema reference.
  */
  readonly reference: typeof lazy | typeof lazyAsync;
  /**
  * The expected property.
  */
  readonly expects: "unknown";
  /**
  * The schema getter.
  */
  readonly getter: (input: unknown) => MaybePromise<TWrapped$1>;
}
/**
* Creates a lazy schema.
*
* @param getter The schema getter.
*
* @returns A lazy schema.
*/
declare function lazyAsync<const TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>>(getter: (input: unknown) => MaybePromise<TWrapped$1>): LazySchemaAsync<TWrapped$1>;
//#endregion
//#region src/schemas/literal/literal.d.ts
/**
* Literal type.
*/
type Literal = bigint | boolean | number | string | symbol;
/**
* Literal issue interface.
*/
interface LiteralIssue extends BaseIssue<unknown> {
  /**
  * The issue kind.
  */
  readonly kind: "schema";
  /**
  * The issue type.
  */
  readonly type: "literal";
  /**
  * The expected property.
  */
  readonly expected: string;
}
/**
* Literal schema interface.
*/
interface LiteralSchema<TLiteral extends Literal, TMessage extends ErrorMessage<LiteralIssue> | undefined> extends BaseSchema<TLiteral, TLiteral, LiteralIssue> {
  /**
  * The schema type.
  */
  readonly type: "literal";
  /**
  * The schema reference.
  */
  readonly reference: typeof literal;
  /**
  * The literal value.
  */
  readonly literal: TLiteral;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a literal schema.
*
* @param literal_ The literal value.
*
* @returns A literal schema.
*/
declare function literal<const TLiteral extends Literal>(literal_: TLiteral): LiteralSchema<TLiteral, undefined>;
/**
* Creates a literal schema.
*
* @param literal_ The literal value.
* @param message The error message.
*
* @returns A literal schema.
*/
declare function literal<const TLiteral extends Literal, const TMessage extends ErrorMessage<LiteralIssue> | undefined>(literal_: TLiteral, message: TMessage): LiteralSchema<TLiteral, TMessage>;
//#endregion
//#region src/schemas/looseObject/types.d.ts
/**
* Loose object issue interface.
*/
interface LooseObjectIssue extends BaseIssue<unknown> {
  /**
  * The issue kind.
  */
  readonly kind: "schema";
  /**
  * The issue type.
  */
  readonly type: "loose_object";
  /**
  * The expected property.
  */
  readonly expected: "Object" | `"${string}"`;
}
//#endregion
//#region src/schemas/looseObject/looseObject.d.ts
/**
* Loose object schema interface.
*/
interface LooseObjectSchema<TEntries$1 extends ObjectEntries, TMessage extends ErrorMessage<LooseObjectIssue> | undefined> extends BaseSchema<InferObjectInput<TEntries$1> & {
  [key: string]: unknown;
}, InferObjectOutput<TEntries$1> & {
  [key: string]: unknown;
}, LooseObjectIssue | InferObjectIssue<TEntries$1>> {
  /**
  * The schema type.
  */
  readonly type: "loose_object";
  /**
  * The schema reference.
  */
  readonly reference: typeof looseObject;
  /**
  * The expected property.
  */
  readonly expects: "Object";
  /**
  * The entries schema.
  */
  readonly entries: TEntries$1;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a loose object schema.
*
* @param entries The entries schema.
*
* @returns A loose object schema.
*/
declare function looseObject<const TEntries$1 extends ObjectEntries>(entries: TEntries$1): LooseObjectSchema<TEntries$1, undefined>;
/**
* Creates a loose object schema.
*
* @param entries The entries schema.
* @param message The error message.
*
* @returns A loose object schema.
*/
declare function looseObject<const TEntries$1 extends ObjectEntries, const TMessage extends ErrorMessage<LooseObjectIssue> | undefined>(entries: TEntries$1, message: TMessage): LooseObjectSchema<TEntries$1, TMessage>;
//#endregion
//#region src/schemas/looseObject/looseObjectAsync.d.ts
/**
* Object schema async interface.
*/
interface LooseObjectSchemaAsync<TEntries$1 extends ObjectEntriesAsync, TMessage extends ErrorMessage<LooseObjectIssue> | undefined> extends BaseSchemaAsync<InferObjectInput<TEntries$1> & {
  [key: string]: unknown;
}, InferObjectOutput<TEntries$1> & {
  [key: string]: unknown;
}, LooseObjectIssue | InferObjectIssue<TEntries$1>> {
  /**
  * The schema type.
  */
  readonly type: "loose_object";
  /**
  * The schema reference.
  */
  readonly reference: typeof looseObject | typeof looseObjectAsync;
  /**
  * The expected property.
  */
  readonly expects: "Object";
  /**
  * The entries schema.
  */
  readonly entries: TEntries$1;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a loose object schema.
*
* @param entries The entries schema.
*
* @returns A loose object schema.
*/
declare function looseObjectAsync<const TEntries$1 extends ObjectEntriesAsync>(entries: TEntries$1): LooseObjectSchemaAsync<TEntries$1, undefined>;
/**
* Creates a loose object schema.
*
* @param entries The entries schema.
* @param message The error message.
*
* @returns A loose object schema.
*/
declare function looseObjectAsync<const TEntries$1 extends ObjectEntriesAsync, const TMessage extends ErrorMessage<LooseObjectIssue> | undefined>(entries: TEntries$1, message: TMessage): LooseObjectSchemaAsync<TEntries$1, TMessage>;
//#endregion
//#region src/schemas/looseTuple/types.d.ts
/**
* Loose tuple issue interface.
*/
interface LooseTupleIssue extends BaseIssue<unknown> {
  /**
  * The issue kind.
  */
  readonly kind: "schema";
  /**
  * The issue type.
  */
  readonly type: "loose_tuple";
  /**
  * The expected property.
  */
  readonly expected: "Array";
}
//#endregion
//#region src/schemas/looseTuple/looseTuple.d.ts
/**
* Loose tuple schema interface.
*/
interface LooseTupleSchema<TItems$1 extends TupleItems, TMessage extends ErrorMessage<LooseTupleIssue> | undefined> extends BaseSchema<[...InferTupleInput<TItems$1>, ...unknown[]], [...InferTupleOutput<TItems$1>, ...unknown[]], LooseTupleIssue | InferTupleIssue<TItems$1>> {
  /**
  * The schema type.
  */
  readonly type: "loose_tuple";
  /**
  * The schema reference.
  */
  readonly reference: typeof looseTuple;
  /**
  * The expected property.
  */
  readonly expects: "Array";
  /**
  * The items schema.
  */
  readonly items: TItems$1;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a loose tuple schema.
*
* @param items The items schema.
*
* @returns A loose tuple schema.
*/
declare function looseTuple<const TItems$1 extends TupleItems>(items: TItems$1): LooseTupleSchema<TItems$1, undefined>;
/**
* Creates a loose tuple schema.
*
* @param items The items schema.
* @param message The error message.
*
* @returns A loose tuple schema.
*/
declare function looseTuple<const TItems$1 extends TupleItems, const TMessage extends ErrorMessage<LooseTupleIssue> | undefined>(items: TItems$1, message: TMessage): LooseTupleSchema<TItems$1, TMessage>;
//#endregion
//#region src/schemas/looseTuple/looseTupleAsync.d.ts
/**
* Loose tuple schema async interface.
*/
interface LooseTupleSchemaAsync<TItems$1 extends TupleItemsAsync, TMessage extends ErrorMessage<LooseTupleIssue> | undefined> extends BaseSchemaAsync<[...InferTupleInput<TItems$1>, ...unknown[]], [...InferTupleOutput<TItems$1>, ...unknown[]], LooseTupleIssue | InferTupleIssue<TItems$1>> {
  /**
  * The schema type.
  */
  readonly type: "loose_tuple";
  /**
  * The schema reference.
  */
  readonly reference: typeof looseTuple | typeof looseTupleAsync;
  /**
  * The expected property.
  */
  readonly expects: "Array";
  /**
  * The items schema.
  */
  readonly items: TItems$1;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a loose tuple schema.
*
* @param items The items schema.
*
* @returns A loose tuple schema.
*/
declare function looseTupleAsync<const TItems$1 extends TupleItemsAsync>(items: TItems$1): LooseTupleSchemaAsync<TItems$1, undefined>;
/**
* Creates a loose tuple schema.
*
* @param items The items schema.
* @param message The error message.
*
* @returns A loose tuple schema.
*/
declare function looseTupleAsync<const TItems$1 extends TupleItemsAsync, const TMessage extends ErrorMessage<LooseTupleIssue> | undefined>(items: TItems$1, message: TMessage): LooseTupleSchemaAsync<TItems$1, TMessage>;
//#endregion
//#region src/schemas/map/types.d.ts
/**
* Map issue interface.
*/
interface MapIssue extends BaseIssue<unknown> {
  /**
  * The issue kind.
  */
  readonly kind: "schema";
  /**
  * The issue type.
  */
  readonly type: "map";
  /**
  * The expected property.
  */
  readonly expected: "Map";
}
/**
* Infer map input type.
*/
type InferMapInput<TKey$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, TValue$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>> = Map<InferInput<TKey$1>, InferInput<TValue$1>>;
/**
* Infer map output type.
*/
type InferMapOutput<TKey$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, TValue$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>> = Map<InferOutput<TKey$1>, InferOutput<TValue$1>>;
//#endregion
//#region src/schemas/map/map.d.ts
/**
* Map schema interface.
*/
interface MapSchema<TKey$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, TValue$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, TMessage extends ErrorMessage<MapIssue> | undefined> extends BaseSchema<InferMapInput<TKey$1, TValue$1>, InferMapOutput<TKey$1, TValue$1>, MapIssue | InferIssue<TKey$1> | InferIssue<TValue$1>> {
  /**
  * The schema type.
  */
  readonly type: "map";
  /**
  * The schema reference.
  */
  readonly reference: typeof map;
  /**
  * The expected property.
  */
  readonly expects: "Map";
  /**
  * The map key schema.
  */
  readonly key: TKey$1;
  /**
  * The map value schema.
  */
  readonly value: TValue$1;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a map schema.
*
* @param key The key schema.
* @param value The value schema.
*
* @returns A map schema.
*/
declare function map<const TKey$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, const TValue$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>>>(key: TKey$1, value: TValue$1): MapSchema<TKey$1, TValue$1, undefined>;
/**
* Creates a map schema.
*
* @param key The key schema.
* @param value The value schema.
* @param message The error message.
*
* @returns A map schema.
*/
declare function map<const TKey$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, const TValue$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, const TMessage extends ErrorMessage<MapIssue> | undefined>(key: TKey$1, value: TValue$1, message: TMessage): MapSchema<TKey$1, TValue$1, TMessage>;
//#endregion
//#region src/schemas/map/mapAsync.d.ts
/**
* Map schema async interface.
*/
interface MapSchemaAsync<TKey$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, TValue$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, TMessage extends ErrorMessage<MapIssue> | undefined> extends BaseSchemaAsync<InferMapInput<TKey$1, TValue$1>, InferMapOutput<TKey$1, TValue$1>, MapIssue | InferIssue<TKey$1> | InferIssue<TValue$1>> {
  /**
  * The schema type.
  */
  readonly type: "map";
  /**
  * The schema reference.
  */
  readonly reference: typeof map | typeof mapAsync;
  /**
  * The expected property.
  */
  readonly expects: "Map";
  /**
  * The map key schema.
  */
  readonly key: TKey$1;
  /**
  * The map value schema.
  */
  readonly value: TValue$1;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a map schema.
*
* @param key The key schema.
* @param value The value schema.
*
* @returns A map schema.
*/
declare function mapAsync<const TKey$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, const TValue$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>>(key: TKey$1, value: TValue$1): MapSchemaAsync<TKey$1, TValue$1, undefined>;
/**
* Creates a map schema.
*
* @param key The key schema.
* @param value The value schema.
* @param message The error message.
*
* @returns A map schema.
*/
declare function mapAsync<const TKey$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, const TValue$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, const TMessage extends ErrorMessage<MapIssue> | undefined>(key: TKey$1, value: TValue$1, message: TMessage): MapSchemaAsync<TKey$1, TValue$1, TMessage>;
//#endregion
//#region src/schemas/nan/nan.d.ts
/**
* NaN issue interface.
*/
interface NanIssue extends BaseIssue<unknown> {
  /**
  * The issue kind.
  */
  readonly kind: "schema";
  /**
  * The issue type.
  */
  readonly type: "nan";
  /**
  * The expected property.
  */
  readonly expected: "NaN";
}
/**
* NaN schema interface.
*/
interface NanSchema<TMessage extends ErrorMessage<NanIssue> | undefined> extends BaseSchema<number, number, NanIssue> {
  /**
  * The schema type.
  */
  readonly type: "nan";
  /**
  * The schema reference.
  */
  readonly reference: typeof nan;
  /**
  * The expected property.
  */
  readonly expects: "NaN";
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a NaN schema.
*
* @returns A NaN schema.
*/
declare function nan(): NanSchema<undefined>;
/**
* Creates a NaN schema.
*
* @param message The error message.
*
* @returns A NaN schema.
*/
declare function nan<const TMessage extends ErrorMessage<NanIssue> | undefined>(message: TMessage): NanSchema<TMessage>;
//#endregion
//#region src/schemas/never/never.d.ts
/**
* Never issue interface.
*/
interface NeverIssue extends BaseIssue<unknown> {
  /**
  * The issue kind.
  */
  readonly kind: "schema";
  /**
  * The issue type.
  */
  readonly type: "never";
  /**
  * The expected property.
  */
  readonly expected: "never";
}
/**
* Never schema interface.
*/
interface NeverSchema<TMessage extends ErrorMessage<NeverIssue> | undefined> extends BaseSchema<never, never, NeverIssue> {
  /**
  * The schema type.
  */
  readonly type: "never";
  /**
  * The schema reference.
  */
  readonly reference: typeof never;
  /**
  * The expected property.
  */
  readonly expects: "never";
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a never schema.
*
* @returns A never schema.
*/
declare function never(): NeverSchema<undefined>;
/**
* Creates a never schema.
*
* @param message The error message.
*
* @returns A never schema.
*/
declare function never<const TMessage extends ErrorMessage<NeverIssue> | undefined>(message: TMessage): NeverSchema<TMessage>;
//#endregion
//#region src/schemas/union/types.d.ts
/**
* Union issue interface.
*/
interface UnionIssue<TSubIssue extends BaseIssue<unknown>> extends BaseIssue<unknown> {
  /**
  * The issue kind.
  */
  readonly kind: "schema";
  /**
  * The issue type.
  */
  readonly type: "union";
  /**
  * The expected property.
  */
  readonly expected: string;
  /**
  * The sub issues.
  */
  readonly issues?: [TSubIssue, ...TSubIssue[]];
}
//#endregion
//#region src/schemas/union/union.d.ts
/**
* Union options type.
*/
type UnionOptions = MaybeReadonly<BaseSchema<unknown, unknown, BaseIssue<unknown>>[]>;
/**
* Union schema interface.
*/
interface UnionSchema<TOptions$1 extends UnionOptions, TMessage extends ErrorMessage<UnionIssue<InferIssue<TOptions$1[number]>>> | undefined> extends BaseSchema<InferInput<TOptions$1[number]>, InferOutput<TOptions$1[number]>, UnionIssue<InferIssue<TOptions$1[number]>> | InferIssue<TOptions$1[number]>> {
  /**
  * The schema type.
  */
  readonly type: "union";
  /**
  * The schema reference.
  */
  readonly reference: typeof union;
  /**
  * The union options.
  */
  readonly options: TOptions$1;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates an union schema.
*
* @param options The union options.
*
* @returns An union schema.
*/
declare function union<const TOptions$1 extends UnionOptions>(options: TOptions$1): UnionSchema<TOptions$1, undefined>;
/**
* Creates an union schema.
*
* @param options The union options.
* @param message The error message.
*
* @returns An union schema.
*/
declare function union<const TOptions$1 extends UnionOptions, const TMessage extends ErrorMessage<UnionIssue<InferIssue<TOptions$1[number]>>> | undefined>(options: TOptions$1, message: TMessage): UnionSchema<TOptions$1, TMessage>;
//#endregion
//#region src/schemas/union/unionAsync.d.ts
/**
* Union options async type.
*/
type UnionOptionsAsync = MaybeReadonly<(BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>)[]>;
/**
* Union schema async interface.
*/
interface UnionSchemaAsync<TOptions$1 extends UnionOptionsAsync, TMessage extends ErrorMessage<UnionIssue<InferIssue<TOptions$1[number]>>> | undefined> extends BaseSchemaAsync<InferInput<TOptions$1[number]>, InferOutput<TOptions$1[number]>, UnionIssue<InferIssue<TOptions$1[number]>> | InferIssue<TOptions$1[number]>> {
  /**
  * The schema type.
  */
  readonly type: "union";
  /**
  * The schema reference.
  */
  readonly reference: typeof union | typeof unionAsync;
  /**
  * The union options.
  */
  readonly options: TOptions$1;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates an union schema.
*
* @param options The union options.
*
* @returns An union schema.
*/
declare function unionAsync<const TOptions$1 extends UnionOptionsAsync>(options: TOptions$1): UnionSchemaAsync<TOptions$1, undefined>;
/**
* Creates an union schema.
*
* @param options The union options.
* @param message The error message.
*
* @returns An union schema.
*/
declare function unionAsync<const TOptions$1 extends UnionOptionsAsync, const TMessage extends ErrorMessage<UnionIssue<InferIssue<TOptions$1[number]>>> | undefined>(options: TOptions$1, message: TMessage): UnionSchemaAsync<TOptions$1, TMessage>;
//#endregion
//#region src/schemas/nonNullable/types.d.ts
/**
* Non nullable issue interface.
*/
interface NonNullableIssue extends BaseIssue<unknown> {
  /**
  * The issue kind.
  */
  readonly kind: "schema";
  /**
  * The issue type.
  */
  readonly type: "non_nullable";
  /**
  * The expected property.
  */
  readonly expected: "!null";
}
/**
* Infer non nullable input type.
*/
type InferNonNullableInput<TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>> = NonNullable$1<InferInput<TWrapped$1>>;
/**
* Infer non nullable output type.
*/
type InferNonNullableOutput<TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>> = NonNullable$1<InferOutput<TWrapped$1>>;
/**
* Infer non nullable issue type.
*/
type InferNonNullableIssue<TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>> = TWrapped$1 extends UnionSchema<UnionOptions, ErrorMessage<UnionIssue<BaseIssue<unknown>>> | undefined> | UnionSchemaAsync<UnionOptionsAsync, ErrorMessage<UnionIssue<BaseIssue<unknown>>> | undefined> ? Exclude<InferIssue<TWrapped$1>, {
  type: "null" | "union";
}> | UnionIssue<InferNonNullableIssue<TWrapped$1["options"][number]>> : Exclude<InferIssue<TWrapped$1>, {
  type: "null";
}>;
//#endregion
//#region src/schemas/nonNullable/nonNullable.d.ts
/**
* Non nullable schema interface.
*/
interface NonNullableSchema<TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, TMessage extends ErrorMessage<NonNullableIssue> | undefined> extends BaseSchema<InferNonNullableInput<TWrapped$1>, InferNonNullableOutput<TWrapped$1>, NonNullableIssue | InferNonNullableIssue<TWrapped$1>> {
  /**
  * The schema type.
  */
  readonly type: "non_nullable";
  /**
  * The schema reference.
  */
  readonly reference: typeof nonNullable;
  /**
  * The expected property.
  */
  readonly expects: "!null";
  /**
  * The wrapped schema.
  */
  readonly wrapped: TWrapped$1;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a non nullable schema.
*
* @param wrapped The wrapped schema.
*
* @returns A non nullable schema.
*/
declare function nonNullable<const TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>>>(wrapped: TWrapped$1): NonNullableSchema<TWrapped$1, undefined>;
/**
* Creates a non nullable schema.
*
* @param wrapped The wrapped schema.
* @param message The error message.
*
* @returns A non nullable schema.
*/
declare function nonNullable<const TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, const TMessage extends ErrorMessage<NonNullableIssue> | undefined>(wrapped: TWrapped$1, message: TMessage): NonNullableSchema<TWrapped$1, TMessage>;
//#endregion
//#region src/schemas/nonNullable/nonNullableAsync.d.ts
/**
* Non nullable schema async interface.
*/
interface NonNullableSchemaAsync<TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, TMessage extends ErrorMessage<NonNullableIssue> | undefined> extends BaseSchemaAsync<InferNonNullableInput<TWrapped$1>, InferNonNullableOutput<TWrapped$1>, NonNullableIssue | InferNonNullableIssue<TWrapped$1>> {
  /**
  * The schema type.
  */
  readonly type: "non_nullable";
  /**
  * The schema reference.
  */
  readonly reference: typeof nonNullable | typeof nonNullableAsync;
  /**
  * The expected property.
  */
  readonly expects: "!null";
  /**
  * The wrapped schema.
  */
  readonly wrapped: TWrapped$1;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a non nullable schema.
*
* @param wrapped The wrapped schema.
*
* @returns A non nullable schema.
*/
declare function nonNullableAsync<const TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>>(wrapped: TWrapped$1): NonNullableSchemaAsync<TWrapped$1, undefined>;
/**
* Creates a non nullable schema.
*
* @param wrapped The wrapped schema.
* @param message The error message.
*
* @returns A non nullable schema.
*/
declare function nonNullableAsync<const TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, const TMessage extends ErrorMessage<NonNullableIssue> | undefined>(wrapped: TWrapped$1, message: TMessage): NonNullableSchemaAsync<TWrapped$1, TMessage>;
//#endregion
//#region src/schemas/nonNullish/types.d.ts
/**
* Non nullish issue interface.
*/
interface NonNullishIssue extends BaseIssue<unknown> {
  /**
  * The issue kind.
  */
  readonly kind: "schema";
  /**
  * The issue type.
  */
  readonly type: "non_nullish";
  /**
  * The expected property.
  */
  readonly expected: "(!null & !undefined)";
}
/**
* Infer non nullish input type.
*/
type InferNonNullishInput<TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>> = NonNullish<InferInput<TWrapped$1>>;
/**
* Infer non nullish output type.
*/
type InferNonNullishOutput<TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>> = NonNullish<InferOutput<TWrapped$1>>;
/**
* Infer non nullish issue type.
*/
type InferNonNullishIssue<TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>> = TWrapped$1 extends UnionSchema<UnionOptions, ErrorMessage<UnionIssue<BaseIssue<unknown>>> | undefined> | UnionSchemaAsync<UnionOptionsAsync, ErrorMessage<UnionIssue<BaseIssue<unknown>>> | undefined> ? Exclude<InferIssue<TWrapped$1>, {
  type: "null" | "undefined" | "union";
}> | UnionIssue<InferNonNullishIssue<TWrapped$1["options"][number]>> : Exclude<InferIssue<TWrapped$1>, {
  type: "null" | "undefined";
}>;
//#endregion
//#region src/schemas/nonNullish/nonNullish.d.ts
/**
* Non nullish schema interface.
*/
interface NonNullishSchema<TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, TMessage extends ErrorMessage<NonNullishIssue> | undefined> extends BaseSchema<InferNonNullishInput<TWrapped$1>, InferNonNullishOutput<TWrapped$1>, NonNullishIssue | InferNonNullishIssue<TWrapped$1>> {
  /**
  * The schema type.
  */
  readonly type: "non_nullish";
  /**
  * The schema reference.
  */
  readonly reference: typeof nonNullish;
  /**
  * The expected property.
  */
  readonly expects: "(!null & !undefined)";
  /**
  * The wrapped schema.
  */
  readonly wrapped: TWrapped$1;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a non nullish schema.
*
* @param wrapped The wrapped schema.
*
* @returns A non nullish schema.
*/
declare function nonNullish<const TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>>>(wrapped: TWrapped$1): NonNullishSchema<TWrapped$1, undefined>;
/**
* Creates a non nullish schema.
*
* @param wrapped The wrapped schema.
* @param message The error message.
*
* @returns A non nullish schema.
*/
declare function nonNullish<const TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, const TMessage extends ErrorMessage<NonNullishIssue> | undefined>(wrapped: TWrapped$1, message: TMessage): NonNullishSchema<TWrapped$1, TMessage>;
//#endregion
//#region src/schemas/nonNullish/nonNullishAsync.d.ts
/**
* Non nullish schema async interface.
*/
interface NonNullishSchemaAsync<TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, TMessage extends ErrorMessage<NonNullishIssue> | undefined> extends BaseSchemaAsync<InferNonNullishInput<TWrapped$1>, InferNonNullishOutput<TWrapped$1>, NonNullishIssue | InferNonNullishIssue<TWrapped$1>> {
  /**
  * The schema type.
  */
  readonly type: "non_nullish";
  /**
  * The schema reference.
  */
  readonly reference: typeof nonNullish | typeof nonNullishAsync;
  /**
  * The expected property.
  */
  readonly expects: "(!null & !undefined)";
  /**
  * The wrapped schema.
  */
  readonly wrapped: TWrapped$1;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a non nullish schema.
*
* @param wrapped The wrapped schema.
*
* @returns A non nullish schema.
*/
declare function nonNullishAsync<const TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>>(wrapped: TWrapped$1): NonNullishSchemaAsync<TWrapped$1, undefined>;
/**
* Creates a non nullish schema.
*
* @param wrapped The wrapped schema.
* @param message The error message.
*
* @returns A non nullish schema.
*/
declare function nonNullishAsync<const TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, const TMessage extends ErrorMessage<NonNullishIssue> | undefined>(wrapped: TWrapped$1, message: TMessage): NonNullishSchemaAsync<TWrapped$1, TMessage>;
//#endregion
//#region src/schemas/nonOptional/types.d.ts
/**
* Non optional issue interface.
*/
interface NonOptionalIssue extends BaseIssue<unknown> {
  /**
  * The issue kind.
  */
  readonly kind: "schema";
  /**
  * The issue type.
  */
  readonly type: "non_optional";
  /**
  * The expected property.
  */
  readonly expected: "!undefined";
}
/**
* Infer non optional input type.
*/
type InferNonOptionalInput<TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>> = NonOptional<InferInput<TWrapped$1>>;
/**
* Infer non optional output type.
*/
type InferNonOptionalOutput<TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>> = NonOptional<InferOutput<TWrapped$1>>;
/**
* Infer non optional issue type.
*/
type InferNonOptionalIssue<TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>> = TWrapped$1 extends UnionSchema<UnionOptions, ErrorMessage<UnionIssue<BaseIssue<unknown>>> | undefined> | UnionSchemaAsync<UnionOptionsAsync, ErrorMessage<UnionIssue<BaseIssue<unknown>>> | undefined> ? Exclude<InferIssue<TWrapped$1>, {
  type: "undefined" | "union";
}> | UnionIssue<InferNonOptionalIssue<TWrapped$1["options"][number]>> : Exclude<InferIssue<TWrapped$1>, {
  type: "undefined";
}>;
//#endregion
//#region src/schemas/nonOptional/nonOptional.d.ts
/**
* Non optional schema interface.
*/
interface NonOptionalSchema<TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, TMessage extends ErrorMessage<NonOptionalIssue> | undefined> extends BaseSchema<InferNonOptionalInput<TWrapped$1>, InferNonOptionalOutput<TWrapped$1>, NonOptionalIssue | InferNonOptionalIssue<TWrapped$1>> {
  /**
  * The schema type.
  */
  readonly type: "non_optional";
  /**
  * The schema reference.
  */
  readonly reference: typeof nonOptional;
  /**
  * The expected property.
  */
  readonly expects: "!undefined";
  /**
  * The wrapped schema.
  */
  readonly wrapped: TWrapped$1;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a non optional schema.
*
* @param wrapped The wrapped schema.
*
* @returns A non optional schema.
*/
declare function nonOptional<const TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>>>(wrapped: TWrapped$1): NonOptionalSchema<TWrapped$1, undefined>;
/**
* Creates a non optional schema.
*
* @param wrapped The wrapped schema.
* @param message The error message.
*
* @returns A non optional schema.
*/
declare function nonOptional<const TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, const TMessage extends ErrorMessage<NonOptionalIssue> | undefined>(wrapped: TWrapped$1, message: TMessage): NonOptionalSchema<TWrapped$1, TMessage>;
//#endregion
//#region src/schemas/nonOptional/nonOptionalAsync.d.ts
/**
* Non optional schema async interface.
*/
interface NonOptionalSchemaAsync<TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, TMessage extends ErrorMessage<NonOptionalIssue> | undefined> extends BaseSchemaAsync<InferNonOptionalInput<TWrapped$1>, InferNonOptionalOutput<TWrapped$1>, NonOptionalIssue | InferNonOptionalIssue<TWrapped$1>> {
  /**
  * The schema type.
  */
  readonly type: "non_optional";
  /**
  * The schema reference.
  */
  readonly reference: typeof nonOptional | typeof nonOptionalAsync;
  /**
  * The expected property.
  */
  readonly expects: "!undefined";
  /**
  * The wrapped schema.
  */
  readonly wrapped: TWrapped$1;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a non optional schema.
*
* @param wrapped The wrapped schema.
*
* @returns A non optional schema.
*/
declare function nonOptionalAsync<const TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>>(wrapped: TWrapped$1): NonOptionalSchemaAsync<TWrapped$1, undefined>;
/**
* Creates a non optional schema.
*
* @param wrapped The wrapped schema.
* @param message The error message.
*
* @returns A non optional schema.
*/
declare function nonOptionalAsync<const TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, const TMessage extends ErrorMessage<NonOptionalIssue> | undefined>(wrapped: TWrapped$1, message: TMessage): NonOptionalSchemaAsync<TWrapped$1, TMessage>;
//#endregion
//#region src/schemas/null/null.d.ts
/**
* Null issue interface.
*/
interface NullIssue extends BaseIssue<unknown> {
  /**
  * The issue kind.
  */
  readonly kind: "schema";
  /**
  * The issue type.
  */
  readonly type: "null";
  /**
  * The expected property.
  */
  readonly expected: "null";
}
/**
* Null schema interface.
*/
interface NullSchema<TMessage extends ErrorMessage<NullIssue> | undefined> extends BaseSchema<null, null, NullIssue> {
  /**
  * The schema type.
  */
  readonly type: "null";
  /**
  * The schema reference.
  */
  readonly reference: typeof null_;
  /**
  * The expected property.
  */
  readonly expects: "null";
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a null schema.
*
* @returns A null schema.
*/
declare function null_(): NullSchema<undefined>;
/**
* Creates a null schema.
*
* @param message The error message.
*
* @returns A null schema.
*/
declare function null_<const TMessage extends ErrorMessage<NullIssue> | undefined>(message: TMessage): NullSchema<TMessage>;
//#endregion
//#region src/schemas/nullable/types.d.ts
/**
* Infer nullable output type.
*/
type InferNullableOutput<TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, TDefault extends DefaultAsync<TWrapped$1, null>> = undefined extends TDefault ? InferOutput<TWrapped$1> | null : InferOutput<TWrapped$1> | Extract<DefaultValue<TDefault>, null>;
//#endregion
//#region src/schemas/nullable/nullable.d.ts
/**
* Nullable schema interface.
*/
interface NullableSchema<TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, TDefault extends Default<TWrapped$1, null>> extends BaseSchema<InferInput<TWrapped$1> | null, InferNullableOutput<TWrapped$1, TDefault>, InferIssue<TWrapped$1>> {
  /**
  * The schema type.
  */
  readonly type: "nullable";
  /**
  * The schema reference.
  */
  readonly reference: typeof nullable;
  /**
  * The expected property.
  */
  readonly expects: `(${TWrapped$1["expects"]} | null)`;
  /**
  * The wrapped schema.
  */
  readonly wrapped: TWrapped$1;
  /**
  * The default value.
  */
  readonly default: TDefault;
}
/**
* Creates a nullable schema.
*
* @param wrapped The wrapped schema.
*
* @returns A nullable schema.
*/
declare function nullable<const TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>>>(wrapped: TWrapped$1): NullableSchema<TWrapped$1, undefined>;
/**
* Creates a nullable schema.
*
* @param wrapped The wrapped schema.
* @param default_ The default value.
*
* @returns A nullable schema.
*/
declare function nullable<const TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, const TDefault extends Default<TWrapped$1, null>>(wrapped: TWrapped$1, default_: TDefault): NullableSchema<TWrapped$1, TDefault>;
//#endregion
//#region src/schemas/nullable/nullableAsync.d.ts
/**
* Nullable schema async interface.
*/
interface NullableSchemaAsync<TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, TDefault extends DefaultAsync<TWrapped$1, null>> extends BaseSchemaAsync<InferInput<TWrapped$1> | null, InferNullableOutput<TWrapped$1, TDefault>, InferIssue<TWrapped$1>> {
  /**
  * The schema type.
  */
  readonly type: "nullable";
  /**
  * The schema reference.
  */
  readonly reference: typeof nullable | typeof nullableAsync;
  /**
  * The expected property.
  */
  readonly expects: `(${TWrapped$1["expects"]} | null)`;
  /**
  * The wrapped schema.
  */
  readonly wrapped: TWrapped$1;
  /**
  * The default value.
  */
  readonly default: TDefault;
}
/**
* Creates a nullable schema.
*
* @param wrapped The wrapped schema.
*
* @returns A nullable schema.
*/
declare function nullableAsync<const TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>>(wrapped: TWrapped$1): NullableSchemaAsync<TWrapped$1, undefined>;
/**
* Creates a nullable schema.
*
* @param wrapped The wrapped schema.
* @param default_ The default value.
*
* @returns A nullable schema.
*/
declare function nullableAsync<const TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, const TDefault extends DefaultAsync<TWrapped$1, null>>(wrapped: TWrapped$1, default_: TDefault): NullableSchemaAsync<TWrapped$1, TDefault>;
//#endregion
//#region src/schemas/nullish/types.d.ts
/**
* Infer nullish output type.
*/
type InferNullishOutput<TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, TDefault extends DefaultAsync<TWrapped$1, null | undefined>> = undefined extends TDefault ? InferOutput<TWrapped$1> | null | undefined : InferOutput<TWrapped$1> | Extract<DefaultValue<TDefault>, null | undefined>;
//#endregion
//#region src/schemas/nullish/nullish.d.ts
/**
* Nullish schema interface.
*/
interface NullishSchema<TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, TDefault extends Default<TWrapped$1, null | undefined>> extends BaseSchema<InferInput<TWrapped$1> | null | undefined, InferNullishOutput<TWrapped$1, TDefault>, InferIssue<TWrapped$1>> {
  /**
  * The schema type.
  */
  readonly type: "nullish";
  /**
  * The schema reference.
  */
  readonly reference: typeof nullish;
  /**
  * The expected property.
  */
  readonly expects: `(${TWrapped$1["expects"]} | null | undefined)`;
  /**
  * The wrapped schema.
  */
  readonly wrapped: TWrapped$1;
  /**
  * The default value.
  */
  readonly default: TDefault;
}
/**
* Creates a nullish schema.
*
* @param wrapped The wrapped schema.
*
* @returns A nullish schema.
*/
declare function nullish<const TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>>>(wrapped: TWrapped$1): NullishSchema<TWrapped$1, undefined>;
/**
* Creates a nullish schema.
*
* @param wrapped The wrapped schema.
* @param default_ The default value.
*
* @returns A nullish schema.
*/
declare function nullish<const TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, const TDefault extends Default<TWrapped$1, null | undefined>>(wrapped: TWrapped$1, default_: TDefault): NullishSchema<TWrapped$1, TDefault>;
//#endregion
//#region src/schemas/nullish/nullishAsync.d.ts
/**
* Nullish schema async interface.
*/
interface NullishSchemaAsync<TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, TDefault extends DefaultAsync<TWrapped$1, null | undefined>> extends BaseSchemaAsync<InferInput<TWrapped$1> | null | undefined, InferNullishOutput<TWrapped$1, TDefault>, InferIssue<TWrapped$1>> {
  /**
  * The schema type.
  */
  readonly type: "nullish";
  /**
  * The schema reference.
  */
  readonly reference: typeof nullish | typeof nullishAsync;
  /**
  * The expected property.
  */
  readonly expects: `(${TWrapped$1["expects"]} | null | undefined)`;
  /**
  * The wrapped schema.
  */
  readonly wrapped: TWrapped$1;
  /**
  * The default value.
  */
  readonly default: TDefault;
}
/**
* Creates a nullish schema.
*
* @param wrapped The wrapped schema.
*
* @returns A nullish schema.
*/
declare function nullishAsync<const TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>>(wrapped: TWrapped$1): NullishSchemaAsync<TWrapped$1, undefined>;
/**
* Creates a nullish schema.
*
* @param wrapped The wrapped schema.
* @param default_ The default value.
*
* @returns A nullish schema.
*/
declare function nullishAsync<const TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, const TDefault extends DefaultAsync<TWrapped$1, null | undefined>>(wrapped: TWrapped$1, default_: TDefault): NullishSchemaAsync<TWrapped$1, TDefault>;
//#endregion
//#region src/schemas/number/number.d.ts
/**
* Number issue interface.
*/
interface NumberIssue extends BaseIssue<unknown> {
  /**
  * The issue kind.
  */
  readonly kind: "schema";
  /**
  * The issue type.
  */
  readonly type: "number";
  /**
  * The expected property.
  */
  readonly expected: "number";
}
/**
* Number schema interface.
*/
interface NumberSchema<TMessage extends ErrorMessage<NumberIssue> | undefined> extends BaseSchema<number, number, NumberIssue> {
  /**
  * The schema type.
  */
  readonly type: "number";
  /**
  * The schema reference.
  */
  readonly reference: typeof number;
  /**
  * The expected property.
  */
  readonly expects: "number";
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a number schema.
*
* @returns A number schema.
*/
declare function number(): NumberSchema<undefined>;
/**
* Creates a number schema.
*
* @param message The error message.
*
* @returns A number schema.
*/
declare function number<const TMessage extends ErrorMessage<NumberIssue> | undefined>(message: TMessage): NumberSchema<TMessage>;
//#endregion
//#region src/schemas/object/types.d.ts
/**
* Object issue interface.
*/
interface ObjectIssue extends BaseIssue<unknown> {
  /**
  * The issue kind.
  */
  readonly kind: "schema";
  /**
  * The issue type.
  */
  readonly type: "object";
  /**
  * The expected property.
  */
  readonly expected: "Object" | `"${string}"`;
}
//#endregion
//#region src/schemas/object/object.d.ts
/**
* Object schema interface.
*/
interface ObjectSchema<TEntries$1 extends ObjectEntries, TMessage extends ErrorMessage<ObjectIssue> | undefined> extends BaseSchema<InferObjectInput<TEntries$1>, InferObjectOutput<TEntries$1>, ObjectIssue | InferObjectIssue<TEntries$1>> {
  /**
  * The schema type.
  */
  readonly type: "object";
  /**
  * The schema reference.
  */
  readonly reference: typeof object;
  /**
  * The expected property.
  */
  readonly expects: "Object";
  /**
  * The entries schema.
  */
  readonly entries: TEntries$1;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates an object schema.
*
* Hint: This schema removes unknown entries. The output will only include the
* entries you specify. To include unknown entries, use `looseObject`. To
* return an issue for unknown entries, use `strictObject`. To include and
* validate unknown entries, use `objectWithRest`.
*
* @param entries The entries schema.
*
* @returns An object schema.
*/
declare function object<const TEntries$1 extends ObjectEntries>(entries: TEntries$1): ObjectSchema<TEntries$1, undefined>;
/**
* Creates an object schema.
*
* Hint: This schema removes unknown entries. The output will only include the
* entries you specify. To include unknown entries, use `looseObject`. To
* return an issue for unknown entries, use `strictObject`. To include and
* validate unknown entries, use `objectWithRest`.
*
* @param entries The entries schema.
* @param message The error message.
*
* @returns An object schema.
*/
declare function object<const TEntries$1 extends ObjectEntries, const TMessage extends ErrorMessage<ObjectIssue> | undefined>(entries: TEntries$1, message: TMessage): ObjectSchema<TEntries$1, TMessage>;
//#endregion
//#region src/schemas/object/objectAsync.d.ts
/**
* Object schema async interface.
*/
interface ObjectSchemaAsync<TEntries$1 extends ObjectEntriesAsync, TMessage extends ErrorMessage<ObjectIssue> | undefined> extends BaseSchemaAsync<InferObjectInput<TEntries$1>, InferObjectOutput<TEntries$1>, ObjectIssue | InferObjectIssue<TEntries$1>> {
  /**
  * The schema type.
  */
  readonly type: "object";
  /**
  * The schema reference.
  */
  readonly reference: typeof object | typeof objectAsync;
  /**
  * The expected property.
  */
  readonly expects: "Object";
  /**
  * The entries schema.
  */
  readonly entries: TEntries$1;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates an object schema.
*
* Hint: This schema removes unknown entries. The output will only include the
* entries you specify. To include unknown entries, use `looseObjectAsync`. To
* return an issue for unknown entries, use `strictObjectAsync`. To include and
* validate unknown entries, use `objectWithRestAsync`.
*
* @param entries The entries schema.
*
* @returns An object schema.
*/
declare function objectAsync<const TEntries$1 extends ObjectEntriesAsync>(entries: TEntries$1): ObjectSchemaAsync<TEntries$1, undefined>;
/**
* Creates an object schema.
*
* Hint: This schema removes unknown entries. The output will only include the
* entries you specify. To include unknown entries, use `looseObjectAsync`. To
* return an issue for unknown entries, use `strictObjectAsync`. To include and
* validate unknown entries, use `objectWithRestAsync`.
*
* @param entries The entries schema.
* @param message The error message.
*
* @returns An object schema.
*/
declare function objectAsync<const TEntries$1 extends ObjectEntriesAsync, const TMessage extends ErrorMessage<ObjectIssue> | undefined>(entries: TEntries$1, message: TMessage): ObjectSchemaAsync<TEntries$1, TMessage>;
//#endregion
//#region src/schemas/objectWithRest/types.d.ts
/**
* Object with rest issue interface.
*/
interface ObjectWithRestIssue extends BaseIssue<unknown> {
  /**
  * The issue kind.
  */
  readonly kind: "schema";
  /**
  * The issue type.
  */
  readonly type: "object_with_rest";
  /**
  * The expected property.
  */
  readonly expected: "Object" | `"${string}"`;
}
//#endregion
//#region src/schemas/objectWithRest/objectWithRest.d.ts
/**
* Object with rest schema interface.
*/
interface ObjectWithRestSchema<TEntries$1 extends ObjectEntries, TRest$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, TMessage extends ErrorMessage<ObjectWithRestIssue> | undefined> extends BaseSchema<InferObjectInput<TEntries$1> & {
  [key: string]: InferInput<TRest$1>;
}, InferObjectOutput<TEntries$1> & {
  [key: string]: InferOutput<TRest$1>;
}, ObjectWithRestIssue | InferObjectIssue<TEntries$1> | InferIssue<TRest$1>> {
  /**
  * The schema type.
  */
  readonly type: "object_with_rest";
  /**
  * The schema reference.
  */
  readonly reference: typeof objectWithRest;
  /**
  * The expected property.
  */
  readonly expects: "Object";
  /**
  * The entries schema.
  */
  readonly entries: TEntries$1;
  /**
  * The rest schema.
  */
  readonly rest: TRest$1;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates an object with rest schema.
*
* @param entries The entries schema.
* @param rest The rest schema.
*
* @returns An object with rest schema.
*/
declare function objectWithRest<const TEntries$1 extends ObjectEntries, const TRest$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>>>(entries: TEntries$1, rest: TRest$1): ObjectWithRestSchema<TEntries$1, TRest$1, undefined>;
/**
* Creates an object with rest schema.
*
* @param entries The entries schema.
* @param rest The rest schema.
* @param message The error message.
*
* @returns An object with rest schema.
*/
declare function objectWithRest<const TEntries$1 extends ObjectEntries, const TRest$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, const TMessage extends ErrorMessage<ObjectWithRestIssue> | undefined>(entries: TEntries$1, rest: TRest$1, message: TMessage): ObjectWithRestSchema<TEntries$1, TRest$1, TMessage>;
//#endregion
//#region src/schemas/objectWithRest/objectWithRestAsync.d.ts
/**
* Object schema async interface.
*/
interface ObjectWithRestSchemaAsync<TEntries$1 extends ObjectEntriesAsync, TRest$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, TMessage extends ErrorMessage<ObjectWithRestIssue> | undefined> extends BaseSchemaAsync<InferObjectInput<TEntries$1> & {
  [key: string]: InferInput<TRest$1>;
}, InferObjectOutput<TEntries$1> & {
  [key: string]: InferOutput<TRest$1>;
}, ObjectWithRestIssue | InferObjectIssue<TEntries$1> | InferIssue<TRest$1>> {
  /**
  * The schema type.
  */
  readonly type: "object_with_rest";
  /**
  * The schema reference.
  */
  readonly reference: typeof objectWithRest | typeof objectWithRestAsync;
  /**
  * The expected property.
  */
  readonly expects: "Object";
  /**
  * The entries schema.
  */
  readonly entries: TEntries$1;
  /**
  * The rest schema.
  */
  readonly rest: TRest$1;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates an object with rest schema.
*
* @param entries The entries schema.
* @param rest The rest schema.
*
* @returns An object with rest schema.
*/
declare function objectWithRestAsync<const TEntries$1 extends ObjectEntriesAsync, const TRest$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>>(entries: TEntries$1, rest: TRest$1): ObjectWithRestSchemaAsync<TEntries$1, TRest$1, undefined>;
/**
* Creates an object with rest schema.
*
* @param entries The entries schema.
* @param rest The rest schema.
* @param message The error message.
*
* @returns An object with rest schema.
*/
declare function objectWithRestAsync<const TEntries$1 extends ObjectEntriesAsync, const TRest$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, const TMessage extends ErrorMessage<ObjectWithRestIssue> | undefined>(entries: TEntries$1, rest: TRest$1, message: TMessage): ObjectWithRestSchemaAsync<TEntries$1, TRest$1, TMessage>;
//#endregion
//#region src/schemas/optional/types.d.ts
/**
* Infer optional output type.
*/
type InferOptionalOutput<TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, TDefault extends DefaultAsync<TWrapped$1, undefined>> = undefined extends TDefault ? InferOutput<TWrapped$1> | undefined : InferOutput<TWrapped$1> | Extract<DefaultValue<TDefault>, undefined>;
//#endregion
//#region src/schemas/optional/optional.d.ts
/**
* Optional schema interface.
*/
interface OptionalSchema<TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, TDefault extends Default<TWrapped$1, undefined>> extends BaseSchema<InferInput<TWrapped$1> | undefined, InferOptionalOutput<TWrapped$1, TDefault>, InferIssue<TWrapped$1>> {
  /**
  * The schema type.
  */
  readonly type: "optional";
  /**
  * The schema reference.
  */
  readonly reference: typeof optional;
  /**
  * The expected property.
  */
  readonly expects: `(${TWrapped$1["expects"]} | undefined)`;
  /**
  * The wrapped schema.
  */
  readonly wrapped: TWrapped$1;
  /**
  * The default value.
  */
  readonly default: TDefault;
}
/**
* Creates an optional schema.
*
* @param wrapped The wrapped schema.
*
* @returns An optional schema.
*/
declare function optional<const TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>>>(wrapped: TWrapped$1): OptionalSchema<TWrapped$1, undefined>;
/**
* Creates an optional schema.
*
* @param wrapped The wrapped schema.
* @param default_ The default value.
*
* @returns An optional schema.
*/
declare function optional<const TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, const TDefault extends Default<TWrapped$1, undefined>>(wrapped: TWrapped$1, default_: TDefault): OptionalSchema<TWrapped$1, TDefault>;
//#endregion
//#region src/schemas/optional/optionalAsync.d.ts
/**
* Optional schema async interface.
*/
interface OptionalSchemaAsync<TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, TDefault extends DefaultAsync<TWrapped$1, undefined>> extends BaseSchemaAsync<InferInput<TWrapped$1> | undefined, InferOptionalOutput<TWrapped$1, TDefault>, InferIssue<TWrapped$1>> {
  /**
  * The schema type.
  */
  readonly type: "optional";
  /**
  * The schema reference.
  */
  readonly reference: typeof optional | typeof optionalAsync;
  /**
  * The expected property.
  */
  readonly expects: `(${TWrapped$1["expects"]} | undefined)`;
  /**
  * The wrapped schema.
  */
  readonly wrapped: TWrapped$1;
  /**
  * The default value.
  */
  readonly default: TDefault;
}
/**
* Creates an optional schema.
*
* @param wrapped The wrapped schema.
*
* @returns An optional schema.
*/
declare function optionalAsync<const TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>>(wrapped: TWrapped$1): OptionalSchemaAsync<TWrapped$1, undefined>;
/**
* Creates an optional schema.
*
* @param wrapped The wrapped schema.
* @param default_ The default value.
*
* @returns An optional schema.
*/
declare function optionalAsync<const TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, const TDefault extends DefaultAsync<TWrapped$1, undefined>>(wrapped: TWrapped$1, default_: TDefault): OptionalSchemaAsync<TWrapped$1, TDefault>;
//#endregion
//#region src/schemas/picklist/picklist.d.ts
/**
* Picklist options type.
*/
type PicklistOptions = MaybeReadonly<(string | number | bigint)[]>;
/**
* Picklist issue interface.
*/
interface PicklistIssue extends BaseIssue<unknown> {
  /**
  * The issue kind.
  */
  readonly kind: "schema";
  /**
  * The issue type.
  */
  readonly type: "picklist";
  /**
  * The expected property.
  */
  readonly expected: string;
}
/**
* Picklist schema interface.
*/
interface PicklistSchema<TOptions$1 extends PicklistOptions, TMessage extends ErrorMessage<PicklistIssue> | undefined> extends BaseSchema<TOptions$1[number], TOptions$1[number], PicklistIssue> {
  /**
  * The schema type.
  */
  readonly type: "picklist";
  /**
  * The schema reference.
  */
  readonly reference: typeof picklist;
  /**
  * The picklist options.
  */
  readonly options: TOptions$1;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a picklist schema.
*
* @param options The picklist options.
*
* @returns A picklist schema.
*/
declare function picklist<const TOptions$1 extends PicklistOptions>(options: TOptions$1): PicklistSchema<TOptions$1, undefined>;
/**
* Creates a picklist schema.
*
* @param options The picklist options.
* @param message The error message.
*
* @returns A picklist schema.
*/
declare function picklist<const TOptions$1 extends PicklistOptions, const TMessage extends ErrorMessage<PicklistIssue> | undefined>(options: TOptions$1, message: TMessage): PicklistSchema<TOptions$1, TMessage>;
//#endregion
//#region src/schemas/promise/promise.d.ts
/**
* Promise issue interface.
*/
interface PromiseIssue extends BaseIssue<unknown> {
  /**
  * The issue kind.
  */
  readonly kind: "schema";
  /**
  * The issue type.
  */
  readonly type: "promise";
  /**
  * The expected property.
  */
  readonly expected: "Promise";
}
/**
* Promise schema interface.
*/
interface PromiseSchema<TMessage extends ErrorMessage<PromiseIssue> | undefined> extends BaseSchema<Promise<unknown>, Promise<unknown>, PromiseIssue> {
  /**
  * The schema type.
  */
  readonly type: "promise";
  /**
  * The schema reference.
  */
  readonly reference: typeof promise;
  /**
  * The expected property.
  */
  readonly expects: "Promise";
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a promise schema.
*
* @returns A promise schema.
*/
declare function promise(): PromiseSchema<undefined>;
/**
* Creates a promise schema.
*
* @param message The error message.
*
* @returns A promise schema.
*/
declare function promise<const TMessage extends ErrorMessage<PromiseIssue> | undefined>(message: TMessage): PromiseSchema<TMessage>;
//#endregion
//#region src/schemas/record/types.d.ts
/**
* Record issue interface.
*/
interface RecordIssue extends BaseIssue<unknown> {
  /**
  * The issue kind.
  */
  readonly kind: "schema";
  /**
  * The issue type.
  */
  readonly type: "record";
  /**
  * The expected property.
  */
  readonly expected: "Object";
}
/**
* Is literal type.
*/
type IsLiteral<TKey$1 extends string | number | symbol> = string extends TKey$1 ? false : number extends TKey$1 ? false : symbol extends TKey$1 ? false : TKey$1 extends Brand<string | number | symbol> ? false : true;
/**
* Optional keys type.
*/
type OptionalKeys<TObject extends Record<string | number | symbol, unknown>> = { [TKey in keyof TObject]: IsLiteral<TKey> extends true ? TKey : never }[keyof TObject];
/**
* With question marks type.
*
* Hint: We mark an entry as optional if we detect that its key is a literal
* type. The reason for this is that it is not technically possible to detect
* missing literal keys without restricting the key schema to `string`, `enum`
* and `picklist`. However, if `enum` and `picklist` are used, it is better to
* use `object` with `entriesFromList` because it already covers the needed
* functionality. This decision also reduces the bundle size of `record`,
* because it only needs to check the entries of the input and not any missing
* keys.
*/
type WithQuestionMarks<TObject extends Record<string | number | symbol, unknown>> = MarkOptional<TObject, OptionalKeys<TObject>>;
/**
* With readonly type.
*/
type WithReadonly<TValue$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, TObject extends WithQuestionMarks<Record<string | number | symbol, unknown>>> = TValue$1 extends SchemaWithPipe<infer TPipe> | SchemaWithPipeAsync<infer TPipe> ? ReadonlyAction<any> extends TPipe[number] ? Readonly<TObject> : TObject : TObject;
/**
* Infer record input type.
*/
type InferRecordInput<TKey$1 extends BaseSchema<string, string | number | symbol, BaseIssue<unknown>> | BaseSchemaAsync<string, string | number | symbol, BaseIssue<unknown>>, TValue$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>> = Prettify<WithQuestionMarks<Record<InferInput<TKey$1>, InferInput<TValue$1>>>>;
/**
* Infer record output type.
*/
type InferRecordOutput<TKey$1 extends BaseSchema<string, string | number | symbol, BaseIssue<unknown>> | BaseSchemaAsync<string, string | number | symbol, BaseIssue<unknown>>, TValue$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>> = Prettify<WithReadonly<TValue$1, WithQuestionMarks<Record<InferOutput<TKey$1>, InferOutput<TValue$1>>>>>;
//#endregion
//#region src/schemas/record/record.d.ts
/**
* Record schema interface.
*/
interface RecordSchema<TKey$1 extends BaseSchema<string, string | number | symbol, BaseIssue<unknown>>, TValue$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, TMessage extends ErrorMessage<RecordIssue> | undefined> extends BaseSchema<InferRecordInput<TKey$1, TValue$1>, InferRecordOutput<TKey$1, TValue$1>, RecordIssue | InferIssue<TKey$1> | InferIssue<TValue$1>> {
  /**
  * The schema type.
  */
  readonly type: "record";
  /**
  * The schema reference.
  */
  readonly reference: typeof record;
  /**
  * The expected property.
  */
  readonly expects: "Object";
  /**
  * The record key schema.
  */
  readonly key: TKey$1;
  /**
  * The record value schema.
  */
  readonly value: TValue$1;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a record schema.
*
* @param key The key schema.
* @param value The value schema.
*
* @returns A record schema.
*/
declare function record<const TKey$1 extends BaseSchema<string, string | number | symbol, BaseIssue<unknown>>, const TValue$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>>>(key: TKey$1, value: TValue$1): RecordSchema<TKey$1, TValue$1, undefined>;
/**
* Creates a record schema.
*
* @param key The key schema.
* @param value The value schema.
* @param message The error message.
*
* @returns A record schema.
*/
declare function record<const TKey$1 extends BaseSchema<string, string | number | symbol, BaseIssue<unknown>>, const TValue$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, const TMessage extends ErrorMessage<RecordIssue> | undefined>(key: TKey$1, value: TValue$1, message: TMessage): RecordSchema<TKey$1, TValue$1, TMessage>;
//#endregion
//#region src/schemas/record/recordAsync.d.ts
/**
* Record schema async interface.
*/
interface RecordSchemaAsync<TKey$1 extends BaseSchema<string, string | number | symbol, BaseIssue<unknown>> | BaseSchemaAsync<string, string | number | symbol, BaseIssue<unknown>>, TValue$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, TMessage extends ErrorMessage<RecordIssue> | undefined> extends BaseSchemaAsync<InferRecordInput<TKey$1, TValue$1>, InferRecordOutput<TKey$1, TValue$1>, RecordIssue | InferIssue<TKey$1> | InferIssue<TValue$1>> {
  /**
  * The schema type.
  */
  readonly type: "record";
  /**
  * The schema reference.
  */
  readonly reference: typeof record | typeof recordAsync;
  /**
  * The expected property.
  */
  readonly expects: "Object";
  /**
  * The record key schema.
  */
  readonly key: TKey$1;
  /**
  * The record value schema.
  */
  readonly value: TValue$1;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a record schema.
*
* @param key The key schema.
* @param value The value schema.
*
* @returns A record schema.
*/
declare function recordAsync<const TKey$1 extends BaseSchema<string, string | number | symbol, BaseIssue<unknown>> | BaseSchemaAsync<string, string | number | symbol, BaseIssue<unknown>>, const TValue$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>>(key: TKey$1, value: TValue$1): RecordSchemaAsync<TKey$1, TValue$1, undefined>;
/**
* Creates a record schema.
*
* @param key The key schema.
* @param value The value schema.
* @param message The error message.
*
* @returns A record schema.
*/
declare function recordAsync<const TKey$1 extends BaseSchema<string, string | number | symbol, BaseIssue<unknown>> | BaseSchemaAsync<string, string | number | symbol, BaseIssue<unknown>>, const TValue$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, const TMessage extends ErrorMessage<RecordIssue> | undefined>(key: TKey$1, value: TValue$1, message: TMessage): RecordSchemaAsync<TKey$1, TValue$1, TMessage>;
//#endregion
//#region src/schemas/set/types.d.ts
/**
* Set issue interface.
*/
interface SetIssue extends BaseIssue<unknown> {
  /**
  * The issue kind.
  */
  readonly kind: "schema";
  /**
  * The issue type.
  */
  readonly type: "set";
  /**
  * The expected property.
  */
  readonly expected: "Set";
}
/**
* Infer set input type.
*/
type InferSetInput<TValue$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>> = Set<InferInput<TValue$1>>;
/**
* Infer set output type.
*/
type InferSetOutput<TValue$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>> = Set<InferOutput<TValue$1>>;
//#endregion
//#region src/schemas/set/set.d.ts
/**
* Set schema interface.
*/
interface SetSchema<TValue$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, TMessage extends ErrorMessage<SetIssue> | undefined> extends BaseSchema<InferSetInput<TValue$1>, InferSetOutput<TValue$1>, SetIssue | InferIssue<TValue$1>> {
  /**
  * The schema type.
  */
  readonly type: "set";
  /**
  * The schema reference.
  */
  readonly reference: typeof set;
  /**
  * The expected property.
  */
  readonly expects: "Set";
  /**
  * The set value schema.
  */
  readonly value: TValue$1;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a set schema.
*
* @param value The value schema.
*
* @returns A set schema.
*/
declare function set<const TValue$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>>>(value: TValue$1): SetSchema<TValue$1, undefined>;
/**
* Creates a set schema.
*
* @param value The value schema.
* @param message The error message.
*
* @returns A set schema.
*/
declare function set<const TValue$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, const TMessage extends ErrorMessage<SetIssue> | undefined>(value: TValue$1, message: TMessage): SetSchema<TValue$1, TMessage>;
//#endregion
//#region src/schemas/set/setAsync.d.ts
/**
* Set schema async interface.
*/
interface SetSchemaAsync<TValue$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, TMessage extends ErrorMessage<SetIssue> | undefined> extends BaseSchemaAsync<InferSetInput<TValue$1>, InferSetOutput<TValue$1>, SetIssue | InferIssue<TValue$1>> {
  /**
  * The schema type.
  */
  readonly type: "set";
  /**
  * The schema reference.
  */
  readonly reference: typeof set | typeof setAsync;
  /**
  * The expected property.
  */
  readonly expects: "Set";
  /**
  * The set value schema.
  */
  readonly value: TValue$1;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a set schema.
*
* @param value The value schema.
*
* @returns A set schema.
*/
declare function setAsync<const TValue$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>>(value: TValue$1): SetSchemaAsync<TValue$1, undefined>;
/**
* Creates a set schema.
*
* @param value The value schema.
* @param message The error message.
*
* @returns A set schema.
*/
declare function setAsync<const TValue$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, const TMessage extends ErrorMessage<SetIssue> | undefined>(value: TValue$1, message: TMessage): SetSchemaAsync<TValue$1, TMessage>;
//#endregion
//#region src/schemas/strictObject/types.d.ts
/**
* Strict object issue interface.
*/
interface StrictObjectIssue extends BaseIssue<unknown> {
  /**
  * The issue kind.
  */
  readonly kind: "schema";
  /**
  * The issue type.
  */
  readonly type: "strict_object";
  /**
  * The expected property.
  */
  readonly expected: "Object" | `"${string}"` | "never";
}
//#endregion
//#region src/schemas/strictObject/strictObject.d.ts
/**
* Strict object schema interface.
*/
interface StrictObjectSchema<TEntries$1 extends ObjectEntries, TMessage extends ErrorMessage<StrictObjectIssue> | undefined> extends BaseSchema<InferObjectInput<TEntries$1>, InferObjectOutput<TEntries$1>, StrictObjectIssue | InferObjectIssue<TEntries$1>> {
  /**
  * The schema type.
  */
  readonly type: "strict_object";
  /**
  * The schema reference.
  */
  readonly reference: typeof strictObject;
  /**
  * The expected property.
  */
  readonly expects: "Object";
  /**
  * The entries schema.
  */
  readonly entries: TEntries$1;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a strict object schema.
*
* @param entries The entries schema.
*
* @returns A strict object schema.
*/
declare function strictObject<const TEntries$1 extends ObjectEntries>(entries: TEntries$1): StrictObjectSchema<TEntries$1, undefined>;
/**
* Creates a strict object schema.
*
* @param entries The entries schema.
* @param message The error message.
*
* @returns A strict object schema.
*/
declare function strictObject<const TEntries$1 extends ObjectEntries, const TMessage extends ErrorMessage<StrictObjectIssue> | undefined>(entries: TEntries$1, message: TMessage): StrictObjectSchema<TEntries$1, TMessage>;
//#endregion
//#region src/schemas/strictObject/strictObjectAsync.d.ts
/**
* Strict object schema async interface.
*/
interface StrictObjectSchemaAsync<TEntries$1 extends ObjectEntriesAsync, TMessage extends ErrorMessage<StrictObjectIssue> | undefined> extends BaseSchemaAsync<InferObjectInput<TEntries$1>, InferObjectOutput<TEntries$1>, StrictObjectIssue | InferObjectIssue<TEntries$1>> {
  /**
  * The schema type.
  */
  readonly type: "strict_object";
  /**
  * The schema reference.
  */
  readonly reference: typeof strictObject | typeof strictObjectAsync;
  /**
  * The expected property.
  */
  readonly expects: "Object";
  /**
  * The entries schema.
  */
  readonly entries: TEntries$1;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a strict object schema.
*
* @param entries The entries schema.
*
* @returns A strict object schema.
*/
declare function strictObjectAsync<const TEntries$1 extends ObjectEntriesAsync>(entries: TEntries$1): StrictObjectSchemaAsync<TEntries$1, undefined>;
/**
* Creates a strict object schema.
*
* @param entries The entries schema.
* @param message The error message.
*
* @returns A strict object schema.
*/
declare function strictObjectAsync<const TEntries$1 extends ObjectEntriesAsync, const TMessage extends ErrorMessage<StrictObjectIssue> | undefined>(entries: TEntries$1, message: TMessage): StrictObjectSchemaAsync<TEntries$1, TMessage>;
//#endregion
//#region src/schemas/strictTuple/types.d.ts
/**
* Strict tuple issue interface.
*/
interface StrictTupleIssue extends BaseIssue<unknown> {
  /**
  * The issue kind.
  */
  readonly kind: "schema";
  /**
  * The issue type.
  */
  readonly type: "strict_tuple";
  /**
  * The expected property.
  */
  readonly expected: "Array" | "never";
}
//#endregion
//#region src/schemas/strictTuple/strictTuple.d.ts
/**
* Strict tuple schema interface.
*/
interface StrictTupleSchema<TItems$1 extends TupleItems, TMessage extends ErrorMessage<StrictTupleIssue> | undefined> extends BaseSchema<InferTupleInput<TItems$1>, InferTupleOutput<TItems$1>, StrictTupleIssue | InferTupleIssue<TItems$1>> {
  /**
  * The schema type.
  */
  readonly type: "strict_tuple";
  /**
  * The schema reference.
  */
  readonly reference: typeof strictTuple;
  /**
  * The expected property.
  */
  readonly expects: "Array";
  /**
  * The items schema.
  */
  readonly items: TItems$1;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a strict tuple schema.
*
* @param items The items schema.
*
* @returns A strict tuple schema.
*/
declare function strictTuple<const TItems$1 extends TupleItems>(items: TItems$1): StrictTupleSchema<TItems$1, undefined>;
/**
* Creates a strict tuple schema.
*
* @param items The items schema.
* @param message The error message.
*
* @returns A strict tuple schema.
*/
declare function strictTuple<const TItems$1 extends TupleItems, const TMessage extends ErrorMessage<StrictTupleIssue> | undefined>(items: TItems$1, message: TMessage): StrictTupleSchema<TItems$1, TMessage>;
//#endregion
//#region src/schemas/strictTuple/strictTupleAsync.d.ts
/**
* Strict tuple schema async interface.
*/
interface StrictTupleSchemaAsync<TItems$1 extends TupleItemsAsync, TMessage extends ErrorMessage<StrictTupleIssue> | undefined> extends BaseSchemaAsync<InferTupleInput<TItems$1>, InferTupleOutput<TItems$1>, StrictTupleIssue | InferTupleIssue<TItems$1>> {
  /**
  * The schema type.
  */
  readonly type: "strict_tuple";
  /**
  * The schema reference.
  */
  readonly reference: typeof strictTuple | typeof strictTupleAsync;
  /**
  * The expected property.
  */
  readonly expects: "Array";
  /**
  * The items schema.
  */
  readonly items: TItems$1;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a strict tuple schema.
*
* @param items The items schema.
*
* @returns A strict tuple schema.
*/
declare function strictTupleAsync<const TItems$1 extends TupleItemsAsync>(items: TItems$1): StrictTupleSchemaAsync<TItems$1, undefined>;
/**
* Creates a strict tuple schema.
*
* @param items The items schema.
* @param message The error message.
*
* @returns A strict tuple schema.
*/
declare function strictTupleAsync<const TItems$1 extends TupleItemsAsync, const TMessage extends ErrorMessage<StrictTupleIssue> | undefined>(items: TItems$1, message: TMessage): StrictTupleSchemaAsync<TItems$1, TMessage>;
//#endregion
//#region src/schemas/string/string.d.ts
/**
* String issue interface.
*/
interface StringIssue extends BaseIssue<unknown> {
  /**
  * The issue kind.
  */
  readonly kind: "schema";
  /**
  * The issue type.
  */
  readonly type: "string";
  /**
  * The expected property.
  */
  readonly expected: "string";
}
/**
* String schema interface.
*/
interface StringSchema<TMessage extends ErrorMessage<StringIssue> | undefined> extends BaseSchema<string, string, StringIssue> {
  /**
  * The schema type.
  */
  readonly type: "string";
  /**
  * The schema reference.
  */
  readonly reference: typeof string;
  /**
  * The expected property.
  */
  readonly expects: "string";
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a string schema.
*
* @returns A string schema.
*/
declare function string(): StringSchema<undefined>;
/**
* Creates a string schema.
*
* @param message The error message.
*
* @returns A string schema.
*/
declare function string<const TMessage extends ErrorMessage<StringIssue> | undefined>(message: TMessage): StringSchema<TMessage>;
//#endregion
//#region src/schemas/symbol/symbol.d.ts
/**
* Symbol issue interface.
*/
interface SymbolIssue extends BaseIssue<unknown> {
  /**
  * The issue kind.
  */
  readonly kind: "schema";
  /**
  * The issue type.
  */
  readonly type: "symbol";
  /**
  * The expected property.
  */
  readonly expected: "symbol";
}
/**
* Symbol schema interface.
*/
interface SymbolSchema<TMessage extends ErrorMessage<SymbolIssue> | undefined> extends BaseSchema<symbol, symbol, SymbolIssue> {
  /**
  * The schema type.
  */
  readonly type: "symbol";
  /**
  * The schema reference.
  */
  readonly reference: typeof symbol;
  /**
  * The expected property.
  */
  readonly expects: "symbol";
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a symbol schema.
*
* @returns A symbol schema.
*/
declare function symbol(): SymbolSchema<undefined>;
/**
* Creates a symbol schema.
*
* @param message The error message.
*
* @returns A symbol schema.
*/
declare function symbol<const TMessage extends ErrorMessage<SymbolIssue> | undefined>(message: TMessage): SymbolSchema<TMessage>;
//#endregion
//#region src/schemas/tuple/types.d.ts
/**
* Tuple issue interface.
*/
interface TupleIssue extends BaseIssue<unknown> {
  /**
  * The issue kind.
  */
  readonly kind: "schema";
  /**
  * The issue type.
  */
  readonly type: "tuple";
  /**
  * The expected property.
  */
  readonly expected: "Array";
}
//#endregion
//#region src/schemas/tuple/tuple.d.ts
/**
* Tuple schema interface.
*/
interface TupleSchema<TItems$1 extends TupleItems, TMessage extends ErrorMessage<TupleIssue> | undefined> extends BaseSchema<InferTupleInput<TItems$1>, InferTupleOutput<TItems$1>, TupleIssue | InferTupleIssue<TItems$1>> {
  /**
  * The schema type.
  */
  readonly type: "tuple";
  /**
  * The schema reference.
  */
  readonly reference: typeof tuple;
  /**
  * The expected property.
  */
  readonly expects: "Array";
  /**
  * The items schema.
  */
  readonly items: TItems$1;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a tuple schema.
*
* Hint: This schema removes unknown items. The output will only include the
* items you specify. To include unknown items, use `looseTuple`. To
* return an issue for unknown items, use `strictTuple`. To include and
* validate unknown items, use `tupleWithRest`.
*
* @param items The items schema.
*
* @returns A tuple schema.
*/
declare function tuple<const TItems$1 extends TupleItems>(items: TItems$1): TupleSchema<TItems$1, undefined>;
/**
* Creates a tuple schema.
*
* Hint: This schema removes unknown items. The output will only include the
* items you specify. To include unknown items, use `looseTuple`. To
* return an issue for unknown items, use `strictTuple`. To include and
* validate unknown items, use `tupleWithRest`.
*
* @param items The items schema.
* @param message The error message.
*
* @returns A tuple schema.
*/
declare function tuple<const TItems$1 extends TupleItems, const TMessage extends ErrorMessage<TupleIssue> | undefined>(items: TItems$1, message: TMessage): TupleSchema<TItems$1, TMessage>;
//#endregion
//#region src/schemas/tuple/tupleAsync.d.ts
/**
* Tuple schema async interface.
*/
interface TupleSchemaAsync<TItems$1 extends TupleItemsAsync, TMessage extends ErrorMessage<TupleIssue> | undefined> extends BaseSchemaAsync<InferTupleInput<TItems$1>, InferTupleOutput<TItems$1>, TupleIssue | InferTupleIssue<TItems$1>> {
  /**
  * The schema type.
  */
  readonly type: "tuple";
  /**
  * The schema reference.
  */
  readonly reference: typeof tuple | typeof tupleAsync;
  /**
  * The expected property.
  */
  readonly expects: "Array";
  /**
  * The items schema.
  */
  readonly items: TItems$1;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a tuple schema.
*
* Hint: This schema removes unknown items. The output will only include the
* items you specify. To include unknown items, use `looseTupleAsync`. To
* return an issue for unknown items, use `strictTupleAsync`. To include and
* validate unknown items, use `tupleWithRestAsync`.
*
* @param items The items schema.
*
* @returns A tuple schema.
*/
declare function tupleAsync<const TItems$1 extends TupleItemsAsync>(items: TItems$1): TupleSchemaAsync<TItems$1, undefined>;
/**
* Creates a tuple schema.
*
* Hint: This schema removes unknown items. The output will only include the
* items you specify. To include unknown items, use `looseTupleAsync`. To
* return an issue for unknown items, use `strictTupleAsync`. To include and
* validate unknown items, use `tupleWithRestAsync`.
*
* @param items The items schema.
* @param message The error message.
*
* @returns A tuple schema.
*/
declare function tupleAsync<const TItems$1 extends TupleItemsAsync, const TMessage extends ErrorMessage<TupleIssue> | undefined>(items: TItems$1, message: TMessage): TupleSchemaAsync<TItems$1, TMessage>;
//#endregion
//#region src/schemas/tupleWithRest/types.d.ts
/**
* Tuple with rest issue interface.
*/
interface TupleWithRestIssue extends BaseIssue<unknown> {
  /**
  * The issue kind.
  */
  readonly kind: "schema";
  /**
  * The issue type.
  */
  readonly type: "tuple_with_rest";
  /**
  * The expected property.
  */
  readonly expected: "Array";
}
//#endregion
//#region src/schemas/tupleWithRest/tupleWithRest.d.ts
/**
* Tuple with rest schema interface.
*/
interface TupleWithRestSchema<TItems$1 extends TupleItems, TRest$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, TMessage extends ErrorMessage<TupleWithRestIssue> | undefined> extends BaseSchema<[...InferTupleInput<TItems$1>, ...InferInput<TRest$1>[]], [...InferTupleOutput<TItems$1>, ...InferOutput<TRest$1>[]], TupleWithRestIssue | InferTupleIssue<TItems$1> | InferIssue<TRest$1>> {
  /**
  * The schema type.
  */
  readonly type: "tuple_with_rest";
  /**
  * The schema reference.
  */
  readonly reference: typeof tupleWithRest;
  /**
  * The expected property.
  */
  readonly expects: "Array";
  /**
  * The items schema.
  */
  readonly items: TItems$1;
  /**
  * The rest schema.
  */
  readonly rest: TRest$1;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a tuple with rest schema.
*
* @param items The items schema.
* @param rest The rest schema.
*
* @returns A tuple with rest schema.
*/
declare function tupleWithRest<const TItems$1 extends TupleItems, const TRest$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>>>(items: TItems$1, rest: TRest$1): TupleWithRestSchema<TItems$1, TRest$1, undefined>;
/**
* Creates a tuple with rest schema.
*
* @param items The items schema.
* @param rest The rest schema.
* @param message The error message.
*
* @returns A tuple with rest schema.
*/
declare function tupleWithRest<const TItems$1 extends TupleItems, const TRest$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, const TMessage extends ErrorMessage<TupleWithRestIssue> | undefined>(items: TItems$1, rest: TRest$1, message: TMessage): TupleWithRestSchema<TItems$1, TRest$1, TMessage>;
//#endregion
//#region src/schemas/tupleWithRest/tupleWithRestAsync.d.ts
/**
* Tuple with rest schema async interface.
*/
interface TupleWithRestSchemaAsync<TItems$1 extends TupleItemsAsync, TRest$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, TMessage extends ErrorMessage<TupleWithRestIssue> | undefined> extends BaseSchemaAsync<[...InferTupleInput<TItems$1>, ...InferInput<TRest$1>[]], [...InferTupleOutput<TItems$1>, ...InferOutput<TRest$1>[]], TupleWithRestIssue | InferTupleIssue<TItems$1> | InferIssue<TRest$1>> {
  /**
  * The schema type.
  */
  readonly type: "tuple_with_rest";
  /**
  * The schema reference.
  */
  readonly reference: typeof tupleWithRest | typeof tupleWithRestAsync;
  /**
  * The expected property.
  */
  readonly expects: "Array";
  /**
  * The items schema.
  */
  readonly items: TItems$1;
  /**
  * The rest schema.
  */
  readonly rest: TRest$1;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a tuple with rest schema.
*
* @param items The items schema.
* @param rest The rest schema.
*
* @returns A tuple with rest schema.
*/
declare function tupleWithRestAsync<const TItems$1 extends TupleItemsAsync, const TRest$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>>(items: TItems$1, rest: TRest$1): TupleWithRestSchemaAsync<TItems$1, TRest$1, undefined>;
/**
* Creates a tuple with rest schema.
*
* @param items The items schema.
* @param rest The rest schema.
* @param message The error message.
*
* @returns A tuple with rest schema.
*/
declare function tupleWithRestAsync<const TItems$1 extends TupleItemsAsync, const TRest$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, const TMessage extends ErrorMessage<TupleWithRestIssue> | undefined>(items: TItems$1, rest: TRest$1, message: TMessage): TupleWithRestSchemaAsync<TItems$1, TRest$1, TMessage>;
//#endregion
//#region src/schemas/undefined/undefined.d.ts
/**
* Undefined issue interface.
*/
interface UndefinedIssue extends BaseIssue<unknown> {
  /**
  * The issue kind.
  */
  readonly kind: "schema";
  /**
  * The issue type.
  */
  readonly type: "undefined";
  /**
  * The expected property.
  */
  readonly expected: "undefined";
}
/**
* Undefined schema interface.
*/
interface UndefinedSchema<TMessage extends ErrorMessage<UndefinedIssue> | undefined> extends BaseSchema<undefined, undefined, UndefinedIssue> {
  /**
  * The schema type.
  */
  readonly type: "undefined";
  /**
  * The schema reference.
  */
  readonly reference: typeof undefined_;
  /**
  * The expected property.
  */
  readonly expects: "undefined";
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates an undefined schema.
*
* @returns An undefined schema.
*/
declare function undefined_(): UndefinedSchema<undefined>;
/**
* Creates an undefined schema.
*
* @param message The error message.
*
* @returns An undefined schema.
*/
declare function undefined_<const TMessage extends ErrorMessage<UndefinedIssue> | undefined>(message: TMessage): UndefinedSchema<TMessage>;
//#endregion
//#region src/schemas/undefinedable/types.d.ts
/**
* Infer undefinedable output type.
*/
type InferUndefinedableOutput<TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, TDefault extends DefaultAsync<TWrapped$1, undefined>> = undefined extends TDefault ? InferOutput<TWrapped$1> | undefined : InferOutput<TWrapped$1> | Extract<DefaultValue<TDefault>, undefined>;
//#endregion
//#region src/schemas/undefinedable/undefinedable.d.ts
/**
* Undefinedable schema interface.
*/
interface UndefinedableSchema<TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, TDefault extends Default<TWrapped$1, undefined>> extends BaseSchema<InferInput<TWrapped$1> | undefined, InferUndefinedableOutput<TWrapped$1, TDefault>, InferIssue<TWrapped$1>> {
  /**
  * The schema type.
  */
  readonly type: "undefinedable";
  /**
  * The schema reference.
  */
  readonly reference: typeof undefinedable;
  /**
  * The expected property.
  */
  readonly expects: `(${TWrapped$1["expects"]} | undefined)`;
  /**
  * The wrapped schema.
  */
  readonly wrapped: TWrapped$1;
  /**
  * The default value.
  */
  readonly default: TDefault;
}
/**
* Creates an undefinedable schema.
*
* @param wrapped The wrapped schema.
*
* @returns An undefinedable schema.
*/
declare function undefinedable<const TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>>>(wrapped: TWrapped$1): UndefinedableSchema<TWrapped$1, undefined>;
/**
* Creates an undefinedable schema.
*
* @param wrapped The wrapped schema.
* @param default_ The default value.
*
* @returns An undefinedable schema.
*/
declare function undefinedable<const TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>>, const TDefault extends Default<TWrapped$1, undefined>>(wrapped: TWrapped$1, default_: TDefault): UndefinedableSchema<TWrapped$1, TDefault>;
//#endregion
//#region src/schemas/undefinedable/undefinedableAsync.d.ts
/**
* Undefinedable schema async interface.
*/
interface UndefinedableSchemaAsync<TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, TDefault extends DefaultAsync<TWrapped$1, undefined>> extends BaseSchemaAsync<InferInput<TWrapped$1> | undefined, InferUndefinedableOutput<TWrapped$1, TDefault>, InferIssue<TWrapped$1>> {
  /**
  * The schema type.
  */
  readonly type: "undefinedable";
  /**
  * The schema reference.
  */
  readonly reference: typeof undefinedable | typeof undefinedableAsync;
  /**
  * The expected property.
  */
  readonly expects: `(${TWrapped$1["expects"]} | undefined)`;
  /**
  * The wrapped schema.
  */
  readonly wrapped: TWrapped$1;
  /**
  * The default value.
  */
  readonly default: TDefault;
}
/**
* Creates an undefinedable schema.
*
* @param wrapped The wrapped schema.
*
* @returns An undefinedable schema.
*/
declare function undefinedableAsync<const TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>>(wrapped: TWrapped$1): UndefinedableSchemaAsync<TWrapped$1, undefined>;
/**
* Creates an undefinedable schema.
*
* @param wrapped The wrapped schema.
* @param default_ The default value.
*
* @returns An undefinedable schema.
*/
declare function undefinedableAsync<const TWrapped$1 extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, const TDefault extends DefaultAsync<TWrapped$1, undefined>>(wrapped: TWrapped$1, default_: TDefault): UndefinedableSchemaAsync<TWrapped$1, TDefault>;
//#endregion
//#region src/schemas/unknown/unknown.d.ts
/**
* Unknown schema interface.
*/
interface UnknownSchema extends BaseSchema<unknown, unknown, never> {
  /**
  * The schema type.
  */
  readonly type: "unknown";
  /**
  * The schema reference.
  */
  readonly reference: typeof unknown;
  /**
  * The expected property.
  */
  readonly expects: "unknown";
}
/**
* Creates a unknown schema.
*
* @returns A unknown schema.
*/
declare function unknown(): UnknownSchema;
//#endregion
//#region src/schemas/variant/variant.d.ts
/**
* Variant schema interface.
*/
interface VariantSchema<TKey$1 extends string, TOptions$1 extends VariantOptions<TKey$1>, TMessage extends ErrorMessage<VariantIssue> | undefined> extends BaseSchema<InferInput<TOptions$1[number]>, InferOutput<TOptions$1[number]>, VariantIssue | InferVariantIssue<TOptions$1>> {
  /**
  * The schema type.
  */
  readonly type: "variant";
  /**
  * The schema reference.
  */
  readonly reference: typeof variant;
  /**
  * The expected property.
  */
  readonly expects: "Object";
  /**
  * The discriminator key.
  */
  readonly key: TKey$1;
  /**
  * The variant options.
  */
  readonly options: TOptions$1;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a variant schema.
*
* @param key The discriminator key.
* @param options The variant options.
*
* @returns A variant schema.
*/
declare function variant<const TKey$1 extends string, const TOptions$1 extends VariantOptions<TKey$1>>(key: TKey$1, options: TOptions$1): VariantSchema<TKey$1, TOptions$1, undefined>;
/**
* Creates a variant schema.
*
* @param key The discriminator key.
* @param options The variant options.
* @param message The error message.
*
* @returns An variant schema.
*/
declare function variant<const TKey$1 extends string, const TOptions$1 extends VariantOptions<TKey$1>, const TMessage extends ErrorMessage<VariantIssue> | undefined>(key: TKey$1, options: TOptions$1, message: TMessage): VariantSchema<TKey$1, TOptions$1, TMessage>;
//#endregion
//#region src/schemas/variant/variantAsync.d.ts
/**
* Variant schema async interface.
*/
interface VariantSchemaAsync<TKey$1 extends string, TOptions$1 extends VariantOptionsAsync<TKey$1>, TMessage extends ErrorMessage<VariantIssue> | undefined> extends BaseSchemaAsync<InferInput<TOptions$1[number]>, InferOutput<TOptions$1[number]>, VariantIssue | InferVariantIssue<TOptions$1>> {
  /**
  * The schema type.
  */
  readonly type: "variant";
  /**
  * The schema reference.
  */
  readonly reference: typeof variant | typeof variantAsync;
  /**
  * The expected property.
  */
  readonly expects: "Object";
  /**
  * The discriminator key.
  */
  readonly key: TKey$1;
  /**
  * The variant options.
  */
  readonly options: TOptions$1;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a variant schema.
*
* @param key The discriminator key.
* @param options The variant options.
*
* @returns A variant schema.
*/
declare function variantAsync<const TKey$1 extends string, const TOptions$1 extends VariantOptionsAsync<TKey$1>>(key: TKey$1, options: TOptions$1): VariantSchemaAsync<TKey$1, TOptions$1, undefined>;
/**
* Creates a variant schema.
*
* @param key The discriminator key.
* @param options The variant options.
* @param message The error message.
*
* @returns An variant schema.
*/
declare function variantAsync<const TKey$1 extends string, const TOptions$1 extends VariantOptionsAsync<TKey$1>, const TMessage extends ErrorMessage<VariantIssue> | undefined>(key: TKey$1, options: TOptions$1, message: TMessage): VariantSchemaAsync<TKey$1, TOptions$1, TMessage>;
//#endregion
//#region src/schemas/variant/types.d.ts
/**
* Variant issue interface.
*/
interface VariantIssue extends BaseIssue<unknown> {
  /**
  * The issue kind.
  */
  readonly kind: "schema";
  /**
  * The issue type.
  */
  readonly type: "variant";
  /**
  * The expected property.
  */
  readonly expected: string;
}
/**
* Variant option schema interface.
*/
interface VariantOptionSchema<TKey$1 extends string> extends BaseSchema<unknown, unknown, VariantIssue | BaseIssue<unknown>> {
  readonly type: "variant";
  readonly reference: typeof variant;
  readonly key: string;
  readonly options: VariantOptions<TKey$1>;
  readonly message: ErrorMessage<VariantIssue> | undefined;
}
/**
* Variant option schema async interface.
*/
interface VariantOptionSchemaAsync<TKey$1 extends string> extends BaseSchemaAsync<unknown, unknown, VariantIssue | BaseIssue<unknown>> {
  readonly type: "variant";
  readonly reference: typeof variant | typeof variantAsync;
  readonly key: string;
  readonly options: VariantOptionsAsync<TKey$1>;
  readonly message: ErrorMessage<VariantIssue> | undefined;
}
/**
* Variant object entries type.
*/
type VariantObjectEntries<TKey$1 extends string> = Record<TKey$1, BaseSchema<unknown, unknown, BaseIssue<unknown>> | OptionalEntrySchema> & ObjectEntries;
/**
* Variant object entries async type.
*/
type VariantObjectEntriesAsync<TKey$1 extends string> = Record<TKey$1, BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>> | OptionalEntrySchema | OptionalEntrySchemaAsync> & ObjectEntriesAsync;
/**
* Variant option type.
*/
type VariantOption<TKey$1 extends string> = LooseObjectSchema<VariantObjectEntries<TKey$1>, ErrorMessage<LooseObjectIssue> | undefined> | ObjectSchema<VariantObjectEntries<TKey$1>, ErrorMessage<ObjectIssue> | undefined> | ObjectWithRestSchema<VariantObjectEntries<TKey$1>, BaseSchema<unknown, unknown, BaseIssue<unknown>>, ErrorMessage<ObjectWithRestIssue> | undefined> | StrictObjectSchema<VariantObjectEntries<TKey$1>, ErrorMessage<StrictObjectIssue> | undefined> | VariantOptionSchema<TKey$1>;
/**
* Variant option async type.
*/
type VariantOptionAsync<TKey$1 extends string> = LooseObjectSchemaAsync<VariantObjectEntriesAsync<TKey$1>, ErrorMessage<LooseObjectIssue> | undefined> | ObjectSchemaAsync<VariantObjectEntriesAsync<TKey$1>, ErrorMessage<ObjectIssue> | undefined> | ObjectWithRestSchemaAsync<VariantObjectEntriesAsync<TKey$1>, BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, ErrorMessage<ObjectWithRestIssue> | undefined> | StrictObjectSchemaAsync<VariantObjectEntriesAsync<TKey$1>, ErrorMessage<StrictObjectIssue> | undefined> | VariantOptionSchemaAsync<TKey$1>;
/**
* Variant options type.
*/
type VariantOptions<TKey$1 extends string> = MaybeReadonly<VariantOption<TKey$1>[]>;
/**
* Variant options async type.
*/
type VariantOptionsAsync<TKey$1 extends string> = MaybeReadonly<(VariantOption<TKey$1> | VariantOptionAsync<TKey$1>)[]>;
/**
* Infer variant issue type.
*/
type InferVariantIssue<TOptions$1 extends VariantOptions<string> | VariantOptionsAsync<string>> = Exclude<InferIssue<TOptions$1[number]>, {
  type: "loose_object" | "object" | "object_with_rest";
}>;
//#endregion
//#region src/schemas/void/void.d.ts
/**
* Void issue interface.
*/
interface VoidIssue extends BaseIssue<unknown> {
  /**
  * The issue kind.
  */
  readonly kind: "schema";
  /**
  * The issue type.
  */
  readonly type: "void";
  /**
  * The expected property.
  */
  readonly expected: "void";
}
/**
* Void schema interface.
*/
interface VoidSchema<TMessage extends ErrorMessage<VoidIssue> | undefined> extends BaseSchema<void, void, VoidIssue> {
  /**
  * The schema type.
  */
  readonly type: "void";
  /**
  * The schema reference.
  */
  readonly reference: typeof void_;
  /**
  * The expected property.
  */
  readonly expects: "void";
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a void schema.
*
* @returns A void schema.
*/
declare function void_(): VoidSchema<undefined>;
/**
* Creates a void schema.
*
* @param message The error message.
*
* @returns A void schema.
*/
declare function void_<const TMessage extends ErrorMessage<VoidIssue> | undefined>(message: TMessage): VoidSchema<TMessage>;
//#endregion
//#region src/actions/args/args.d.ts
/**
* Schema type.
*/
type Schema$3 = LooseTupleSchema<TupleItems, ErrorMessage<LooseTupleIssue> | undefined> | StrictTupleSchema<TupleItems, ErrorMessage<StrictTupleIssue> | undefined> | TupleSchema<TupleItems, ErrorMessage<TupleIssue> | undefined> | TupleWithRestSchema<TupleItems, BaseSchema<unknown, unknown, BaseIssue<unknown>>, ErrorMessage<TupleWithRestIssue> | undefined>;
/**
* Args action type.
*/
interface ArgsAction<TInput$1 extends (...args: any[]) => unknown, TSchema extends Schema$3> extends BaseTransformation<TInput$1, (...args: InferInput<TSchema>) => ReturnType<TInput$1>, never> {
  /**
  * The action type.
  */
  readonly type: "args";
  /**
  * The action reference.
  */
  readonly reference: typeof args;
  /**
  * The arguments schema.
  */
  readonly schema: TSchema;
}
/**
* Creates a function arguments transformation action.
*
* @param schema The arguments schema.
*
* @returns An args action.
*/
declare function args<TInput$1 extends (...args: any[]) => unknown, TSchema extends Schema$3>(schema: TSchema): ArgsAction<TInput$1, TSchema>;
//#endregion
//#region src/actions/args/argsAsync.d.ts
/**
* Schema type.
*/
type Schema$2 = LooseTupleSchema<TupleItems, ErrorMessage<LooseTupleIssue> | undefined> | LooseTupleSchemaAsync<TupleItemsAsync, ErrorMessage<LooseTupleIssue> | undefined> | StrictTupleSchema<TupleItems, ErrorMessage<StrictTupleIssue> | undefined> | StrictTupleSchemaAsync<TupleItemsAsync, ErrorMessage<StrictTupleIssue> | undefined> | TupleSchema<TupleItems, ErrorMessage<TupleIssue> | undefined> | TupleSchemaAsync<TupleItemsAsync, ErrorMessage<TupleIssue> | undefined> | TupleWithRestSchema<TupleItems, BaseSchema<unknown, unknown, BaseIssue<unknown>>, ErrorMessage<TupleWithRestIssue> | undefined> | TupleWithRestSchemaAsync<TupleItemsAsync, BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, ErrorMessage<TupleWithRestIssue> | undefined>;
/**
* Args action async type.
*/
interface ArgsActionAsync<TInput$1 extends (...args: any[]) => unknown, TSchema extends Schema$2> extends BaseTransformation<TInput$1, (...args: InferInput<TSchema>) => Promise<Awaited<ReturnType<TInput$1>>>, never> {
  /**
  * The action type.
  */
  readonly type: "args";
  /**
  * The action reference.
  */
  readonly reference: typeof argsAsync;
  /**
  * The arguments schema.
  */
  readonly schema: TSchema;
}
/**
* Creates a function arguments transformation action.
*
* @param schema The arguments schema.
*
* @returns An args action.
*/
declare function argsAsync<TInput$1 extends (...args: any[]) => unknown, TSchema extends Schema$2>(schema: TSchema): ArgsActionAsync<TInput$1, TSchema>;
//#endregion
//#region src/actions/await/awaitAsync.d.ts
/**
* Await action async interface.
*/
interface AwaitActionAsync<TInput$1 extends Promise<unknown>> extends BaseTransformationAsync<TInput$1, Awaited<TInput$1>, never> {
  /**
  * The action type.
  */
  readonly type: "await";
  /**
  * The action reference.
  */
  readonly reference: typeof awaitAsync;
}
/**
* Creates an await transformation action.
*
* @returns An await action.
*/
declare function awaitAsync<TInput$1 extends Promise<unknown>>(): AwaitActionAsync<TInput$1>;
//#endregion
//#region src/actions/base64/base64.d.ts
/**
* Base64 issue interface.
*/
interface Base64Issue<TInput$1 extends string> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "base64";
  /**
  * The expected property.
  */
  readonly expected: null;
  /**
  * The received property.
  */
  readonly received: `"${string}"`;
  /**
  * The Base64 regex.
  */
  readonly requirement: RegExp;
}
/**
* Base64 action interface.
*/
interface Base64Action<TInput$1 extends string, TMessage extends ErrorMessage<Base64Issue<TInput$1>> | undefined> extends BaseValidation<TInput$1, TInput$1, Base64Issue<TInput$1>> {
  /**
  * The action type.
  */
  readonly type: "base64";
  /**
  * The action reference.
  */
  readonly reference: typeof base64;
  /**
  * The expected property.
  */
  readonly expects: null;
  /**
  * The Base64 regex.
  */
  readonly requirement: RegExp;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a [Base64](https://en.wikipedia.org/wiki/Base64) validation action.
*
* @returns A Base64 action.
*/
declare function base64<TInput$1 extends string>(): Base64Action<TInput$1, undefined>;
/**
* Creates a [Base64](https://en.wikipedia.org/wiki/Base64) validation action.
*
* @param message The error message.
*
* @returns A Base64 action.
*/
declare function base64<TInput$1 extends string, const TMessage extends ErrorMessage<Base64Issue<TInput$1>> | undefined>(message: TMessage): Base64Action<TInput$1, TMessage>;
//#endregion
//#region src/actions/bic/bic.d.ts
/**
* BIC issue interface.
*/
interface BicIssue<TInput$1 extends string> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "bic";
  /**
  * The expected property.
  */
  readonly expected: null;
  /**
  * The received property.
  */
  readonly received: `"${string}"`;
  /**
  * The BIC regex.
  */
  readonly requirement: RegExp;
}
/**
* BIC action interface.
*/
interface BicAction<TInput$1 extends string, TMessage extends ErrorMessage<BicIssue<TInput$1>> | undefined> extends BaseValidation<TInput$1, TInput$1, BicIssue<TInput$1>> {
  /**
  * The action type.
  */
  readonly type: "bic";
  /**
  * The action reference.
  */
  readonly reference: typeof bic;
  /**
  * The expected property.
  */
  readonly expects: null;
  /**
  * The BIC regex.
  */
  readonly requirement: RegExp;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a [BIC](https://en.wikipedia.org/wiki/ISO_9362) validation action.
*
* @returns A BIC action.
*/
declare function bic<TInput$1 extends string>(): BicAction<TInput$1, undefined>;
/**
* Creates a [BIC](https://en.wikipedia.org/wiki/ISO_9362) validation action.
*
* @param message The error message.
*
* @returns A BIC action.
*/
declare function bic<TInput$1 extends string, const TMessage extends ErrorMessage<BicIssue<TInput$1>> | undefined>(message: TMessage): BicAction<TInput$1, TMessage>;
//#endregion
//#region src/actions/brand/brand.d.ts
/**
* Brand symbol.
*/
declare const BrandSymbol: unique symbol;
/**
* Brand name type.
*/
type BrandName = string | number | symbol;
/**
* Brand interface.
*/
interface Brand<TName extends BrandName> {
  [BrandSymbol]: { [TValue in TName]: TValue };
}
/**
* Brand action interface.
*/
interface BrandAction<TInput$1, TName extends BrandName> extends BaseTransformation<TInput$1, TInput$1 & Brand<TName>, never> {
  /**
  * The action type.
  */
  readonly type: "brand";
  /**
  * The action reference.
  */
  readonly reference: typeof brand;
  /**
  * The brand name.
  */
  readonly name: TName;
}
/**
* Creates a brand transformation action.
*
* @param name The brand name.
*
* @returns A brand action.
*/
declare function brand<TInput$1, TName extends BrandName>(name: TName): BrandAction<TInput$1, TName>;
//#endregion
//#region src/actions/bytes/bytes.d.ts
/**
* Bytes issue interface.
*/
interface BytesIssue<TInput$1 extends string, TRequirement extends number> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "bytes";
  /**
  * The expected property.
  */
  readonly expected: `${TRequirement}`;
  /**
  * The received property.
  */
  readonly received: `${number}`;
  /**
  * The required bytes.
  */
  readonly requirement: TRequirement;
}
/**
* Bytes action interface.
*/
interface BytesAction<TInput$1 extends string, TRequirement extends number, TMessage extends ErrorMessage<BytesIssue<TInput$1, TRequirement>> | undefined> extends BaseValidation<TInput$1, TInput$1, BytesIssue<TInput$1, TRequirement>> {
  /**
  * The action type.
  */
  readonly type: "bytes";
  /**
  * The action reference.
  */
  readonly reference: typeof bytes;
  /**
  * The expected property.
  */
  readonly expects: `${TRequirement}`;
  /**
  * The required bytes.
  */
  readonly requirement: TRequirement;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a [bytes](https://en.wikipedia.org/wiki/Byte) validation action.
*
* @param requirement The required bytes.
*
* @returns A bytes action.
*/
declare function bytes<TInput$1 extends string, const TRequirement extends number>(requirement: TRequirement): BytesAction<TInput$1, TRequirement, undefined>;
/**
* Creates a [bytes](https://en.wikipedia.org/wiki/Byte) validation action.
*
* @param requirement The required bytes.
* @param message The error message.
*
* @returns A bytes action.
*/
declare function bytes<TInput$1 extends string, const TRequirement extends number, const TMessage extends ErrorMessage<BytesIssue<TInput$1, TRequirement>> | undefined>(requirement: TRequirement, message: TMessage): BytesAction<TInput$1, TRequirement, TMessage>;
//#endregion
//#region src/actions/check/types.d.ts
/**
* Check issue interface.
*/
interface CheckIssue<TInput$1> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "check";
  /**
  * The expected property.
  */
  readonly expected: null;
  /**
  * The validation function.
  */
  readonly requirement: (input: TInput$1) => MaybePromise<boolean>;
}
//#endregion
//#region src/actions/check/check.d.ts
/**
* Check action interface.
*/
interface CheckAction<TInput$1, TMessage extends ErrorMessage<CheckIssue<TInput$1>> | undefined> extends BaseValidation<TInput$1, TInput$1, CheckIssue<TInput$1>> {
  /**
  * The action type.
  */
  readonly type: "check";
  /**
  * The action reference.
  */
  readonly reference: typeof check;
  /**
  * The expected property.
  */
  readonly expects: null;
  /**
  * The validation function.
  */
  readonly requirement: (input: TInput$1) => boolean;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a check validation action.
*
* @param requirement The validation function.
*
* @returns A check action.
*/
declare function check<TInput$1>(requirement: (input: TInput$1) => boolean): CheckAction<TInput$1, undefined>;
/**
* Creates a check validation action.
*
* @param requirement The validation function.
* @param message The error message.
*
* @returns A check action.
*/
declare function check<TInput$1, const TMessage extends ErrorMessage<CheckIssue<TInput$1>> | undefined>(requirement: (input: TInput$1) => boolean, message: TMessage): CheckAction<TInput$1, TMessage>;
//#endregion
//#region src/actions/check/checkAsync.d.ts
/**
* Check action async interface.
*/
interface CheckActionAsync<TInput$1, TMessage extends ErrorMessage<CheckIssue<TInput$1>> | undefined> extends BaseValidationAsync<TInput$1, TInput$1, CheckIssue<TInput$1>> {
  /**
  * The action type.
  */
  readonly type: "check";
  /**
  * The action reference.
  */
  readonly reference: typeof checkAsync;
  /**
  * The expected property.
  */
  readonly expects: null;
  /**
  * The validation function.
  */
  readonly requirement: (input: TInput$1) => MaybePromise<boolean>;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a check validation action.
*
* @param requirement The validation function.
*
* @returns A check action.
*/
declare function checkAsync<TInput$1>(requirement: (input: TInput$1) => MaybePromise<boolean>): CheckActionAsync<TInput$1, undefined>;
/**
* Creates a check validation action.
*
* @param requirement The validation function.
* @param message The error message.
*
* @returns A check action.
*/
declare function checkAsync<TInput$1, const TMessage extends ErrorMessage<CheckIssue<TInput$1>> | undefined>(requirement: (input: TInput$1) => MaybePromise<boolean>, message: TMessage): CheckActionAsync<TInput$1, TMessage>;
//#endregion
//#region src/actions/types.d.ts
/**
* Array input type.
*/
type ArrayInput = MaybeReadonly<unknown[]>;
/**
* Array requirement type.
*/
type ArrayRequirement<TInput$1 extends ArrayInput> = (item: TInput$1[number], index: number, array: TInput$1) => boolean;
/**
* Array requirement async type.
*/
type ArrayRequirementAsync<TInput$1 extends ArrayInput> = (item: TInput$1[number], index: number, array: TInput$1) => MaybePromise<boolean>;
/**
* Content input type.
*/
type ContentInput = string | MaybeReadonly<unknown[]>;
/**
* Content requirement type.
*/
type ContentRequirement<TInput$1 extends ContentInput> = TInput$1 extends readonly unknown[] ? TInput$1[number] : TInput$1;
/**
* Entries input type.
*/
type EntriesInput = Record<string | number, unknown>;
/**
* Length input type.
*/
type LengthInput = string | ArrayLike<unknown>;
/**
* Size input type.
*/
type SizeInput = Blob | Map<unknown, unknown> | Set<unknown>;
/**
* Value input type.
*/
type ValueInput = string | number | bigint | boolean | Date;
//#endregion
//#region src/actions/checkItems/types.d.ts
/**
* Check items issue interface.
*/
interface CheckItemsIssue<TInput$1 extends ArrayInput> extends BaseIssue<TInput$1[number]> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "check_items";
  /**
  * The expected input.
  */
  readonly expected: null;
  /**
  * The validation function.
  */
  readonly requirement: ArrayRequirementAsync<TInput$1>;
}
//#endregion
//#region src/actions/checkItems/checkItems.d.ts
/**
* Check items action interface.
*/
interface CheckItemsAction<TInput$1 extends ArrayInput, TMessage extends ErrorMessage<CheckItemsIssue<TInput$1>> | undefined> extends BaseValidation<TInput$1, TInput$1, CheckItemsIssue<TInput$1>> {
  /**
  * The action type.
  */
  readonly type: "check_items";
  /**
  * The action reference.
  */
  readonly reference: typeof checkItems;
  /**
  * The expected property.
  */
  readonly expects: null;
  /**
  * The validation function.
  */
  readonly requirement: ArrayRequirement<TInput$1>;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates an check items validation action.
*
* @param requirement The validation function.
*
* @returns An check items action.
*/
declare function checkItems<TInput$1 extends ArrayInput>(requirement: ArrayRequirement<TInput$1>): CheckItemsAction<TInput$1, undefined>;
/**
* Creates an check items validation action.
*
* @param requirement The validation function.
* @param message The error message.
*
* @returns An check items action.
*/
declare function checkItems<TInput$1 extends ArrayInput, const TMessage extends ErrorMessage<CheckItemsIssue<TInput$1>> | undefined>(requirement: ArrayRequirement<TInput$1>, message: TMessage): CheckItemsAction<TInput$1, TMessage>;
//#endregion
//#region src/actions/checkItems/checkItemsAsync.d.ts
/**
* Check items action async interface.
*/
interface CheckItemsActionAsync<TInput$1 extends ArrayInput, TMessage extends ErrorMessage<CheckItemsIssue<TInput$1>> | undefined> extends BaseValidationAsync<TInput$1, TInput$1, CheckItemsIssue<TInput$1>> {
  /**
  * The action type.
  */
  readonly type: "check_items";
  /**
  * The action reference.
  */
  readonly reference: typeof checkItemsAsync;
  /**
  * The expected property.
  */
  readonly expects: null;
  /**
  * The validation function.
  */
  readonly requirement: ArrayRequirementAsync<TInput$1>;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a check items validation action.
*
* @param requirement The validation function.
*
* @returns A check items action.
*/
declare function checkItemsAsync<TInput$1 extends ArrayInput>(requirement: ArrayRequirementAsync<TInput$1>): CheckItemsActionAsync<TInput$1, undefined>;
/**
* Creates a check items validation action.
*
* @param requirement The validation function.
* @param message The error message.
*
* @returns A check items action.
*/
declare function checkItemsAsync<TInput$1 extends ArrayInput, const TMessage extends ErrorMessage<CheckItemsIssue<TInput$1>> | undefined>(requirement: ArrayRequirementAsync<TInput$1>, message: TMessage): CheckItemsActionAsync<TInput$1, TMessage>;
//#endregion
//#region src/actions/creditCard/creditCard.d.ts
/**
* Credit card issue interface.
*/
interface CreditCardIssue<TInput$1 extends string> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "credit_card";
  /**
  * The expected property.
  */
  readonly expected: null;
  /**
  * The received property.
  */
  readonly received: `"${string}"`;
  /**
  * The validation function.
  */
  readonly requirement: (input: string) => boolean;
}
/**
* Credit card action interface.
*/
interface CreditCardAction<TInput$1 extends string, TMessage extends ErrorMessage<CreditCardIssue<TInput$1>> | undefined> extends BaseValidation<TInput$1, TInput$1, CreditCardIssue<TInput$1>> {
  /**
  * The action type.
  */
  readonly type: "credit_card";
  /**
  * The action reference.
  */
  readonly reference: typeof creditCard;
  /**
  * The expected property.
  */
  readonly expects: null;
  /**
  * The validation function.
  */
  readonly requirement: (input: string) => boolean;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a [credit card](https://en.wikipedia.org/wiki/Payment_card_number) validation action.
*
* @returns A Credit card action.
*/
declare function creditCard<TInput$1 extends string>(): CreditCardAction<TInput$1, undefined>;
/**
* Creates a [credit card](https://en.wikipedia.org/wiki/Payment_card_number) validation action.
*
* @param message The error message.
*
* @returns A credit card action.
*/
declare function creditCard<TInput$1 extends string, const TMessage extends ErrorMessage<CreditCardIssue<TInput$1>> | undefined>(message: TMessage): CreditCardAction<TInput$1, TMessage>;
//#endregion
//#region src/actions/cuid2/cuid2.d.ts
/**
* Cuid2 issue interface.
*/
interface Cuid2Issue<TInput$1 extends string> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "cuid2";
  /**
  * The expected property.
  */
  readonly expected: null;
  /**
  * The received property.
  */
  readonly received: `"${string}"`;
  /**
  * The Cuid2 regex.
  */
  readonly requirement: RegExp;
}
/**
* Cuid2 action interface.
*/
interface Cuid2Action<TInput$1 extends string, TMessage extends ErrorMessage<Cuid2Issue<TInput$1>> | undefined> extends BaseValidation<TInput$1, TInput$1, Cuid2Issue<TInput$1>> {
  /**
  * The action type.
  */
  readonly type: "cuid2";
  /**
  * The action reference.
  */
  readonly reference: typeof cuid2;
  /**
  * The expected property.
  */
  readonly expects: null;
  /**
  * The Cuid2 regex.
  */
  readonly requirement: RegExp;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a [Cuid2](https://github.com/paralleldrive/cuid2) validation action.
*
* @returns A Cuid2 action.
*/
declare function cuid2<TInput$1 extends string>(): Cuid2Action<TInput$1, undefined>;
/**
* Creates a [Cuid2](https://github.com/paralleldrive/cuid2) validation action.
*
* @param message The error message.
*
* @returns A Cuid2 action.
*/
declare function cuid2<TInput$1 extends string, const TMessage extends ErrorMessage<Cuid2Issue<TInput$1>> | undefined>(message: TMessage): Cuid2Action<TInput$1, TMessage>;
//#endregion
//#region src/actions/decimal/decimal.d.ts
/**
* Decimal issue interface.
*/
interface DecimalIssue<TInput$1 extends string> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "decimal";
  /**
  * The expected property.
  */
  readonly expected: null;
  /**
  * The received property.
  */
  readonly received: `"${string}"`;
  /**
  * The decimal regex.
  */
  readonly requirement: RegExp;
}
/**
* Decimal action interface.
*/
interface DecimalAction<TInput$1 extends string, TMessage extends ErrorMessage<DecimalIssue<TInput$1>> | undefined> extends BaseValidation<TInput$1, TInput$1, DecimalIssue<TInput$1>> {
  /**
  * The action type.
  */
  readonly type: "decimal";
  /**
  * The action reference.
  */
  readonly reference: typeof decimal;
  /**
  * The expected property.
  */
  readonly expects: null;
  /**
  * The decimal regex.
  */
  readonly requirement: RegExp;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a [decimal](https://en.wikipedia.org/wiki/Decimal) validation action.
*
* The difference between `decimal` and `digits` is that `decimal` accepts
* floating point numbers and negative numbers, while `digits` accepts only the
* digits 0-9.
*
* @returns An decimal action.
*/
declare function decimal<TInput$1 extends string>(): DecimalAction<TInput$1, undefined>;
/**
* Creates a [decimal](https://en.wikipedia.org/wiki/Decimal) validation action.
*
* The difference between `decimal` and `digits` is that `decimal` accepts
* floating point numbers and negative numbers, while `digits` accepts only the
* digits 0-9.
*
* @param message The error message.
*
* @returns An decimal action.
*/
declare function decimal<TInput$1 extends string, const TMessage extends ErrorMessage<DecimalIssue<TInput$1>> | undefined>(message: TMessage): DecimalAction<TInput$1, TMessage>;
//#endregion
//#region src/actions/description/description.d.ts
/**
* Description action interface.
*/
interface DescriptionAction<TInput$1, TDescription extends string> extends BaseMetadata<TInput$1> {
  /**
  * The action type.
  */
  readonly type: "description";
  /**
  * The action reference.
  */
  readonly reference: typeof description;
  /**
  * The description text.
  */
  readonly description: TDescription;
}
/**
* Creates a description metadata action.
*
* @param description_ The description text.
*
* @returns A description action.
*/
declare function description<TInput$1, TDescription extends string>(description_: TDescription): DescriptionAction<TInput$1, TDescription>;
//#endregion
//#region src/actions/digits/digits.d.ts
/**
* Digits issue interface.
*/
interface DigitsIssue<TInput$1 extends string> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "digits";
  /**
  * The expected property.
  */
  readonly expected: null;
  /**
  * The received property.
  */
  readonly received: `"${string}"`;
  /**
  * The digits regex.
  */
  readonly requirement: RegExp;
}
/**
* Digits action interface.
*/
interface DigitsAction<TInput$1 extends string, TMessage extends ErrorMessage<DigitsIssue<TInput$1>> | undefined> extends BaseValidation<TInput$1, TInput$1, DigitsIssue<TInput$1>> {
  /**
  * The action type.
  */
  readonly type: "digits";
  /**
  * The action reference.
  */
  readonly reference: typeof digits;
  /**
  * The expected property.
  */
  readonly expects: null;
  /**
  * The digits regex.
  */
  readonly requirement: RegExp;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a [digits](https://en.wikipedia.org/wiki/Numerical_digit) validation action.
*
* The difference between `digits` and `decimal` is that `digits` accepts only
* the digits 0-9, while `decimal` accepts floating point numbers and negative
* numbers.
*
* @returns An digits action.
*/
declare function digits<TInput$1 extends string>(): DigitsAction<TInput$1, undefined>;
/**
* Creates a [digits](https://en.wikipedia.org/wiki/Numerical_digit) validation action.
*
* The difference between `digits` and `decimal` is that `digits` accepts only
* the digits 0-9, while `decimal` accepts floating point numbers and negative
* numbers.
*
* @param message The error message.
*
* @returns An digits action.
*/
declare function digits<TInput$1 extends string, const TMessage extends ErrorMessage<DigitsIssue<TInput$1>> | undefined>(message: TMessage): DigitsAction<TInput$1, TMessage>;
//#endregion
//#region src/actions/domain/domain.d.ts
/**
* Domain issue interface.
*
* @beta
*/
interface DomainIssue<TInput$1 extends string> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "domain";
  /**
  * The expected property.
  */
  readonly expected: null;
  /**
  * The received property.
  */
  readonly received: `"${string}"`;
  /**
  * The domain regex.
  */
  readonly requirement: RegExp;
}
/**
* Domain action interface.
*
* @beta
*/
interface DomainAction<TInput$1 extends string, TMessage extends ErrorMessage<DomainIssue<TInput$1>> | undefined> extends BaseValidation<TInput$1, TInput$1, DomainIssue<TInput$1>> {
  /**
  * The action type.
  */
  readonly type: "domain";
  /**
  * The action reference.
  */
  readonly reference: typeof domain;
  /**
  * The expected property.
  */
  readonly expects: null;
  /**
  * The domain regex.
  */
  readonly requirement: RegExp;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a [domain name](https://en.wikipedia.org/wiki/Domain_name) validation
* action.
*
* Hint: ASCII-only validation. Internationalized domain names (IDNs) are not
* supported, including Punycode-encoded labels.
*
* @returns A domain action.
*
* @beta
*/
declare function domain<TInput$1 extends string>(): DomainAction<TInput$1, undefined>;
/**
* Creates a [domain name](https://en.wikipedia.org/wiki/Domain_name) validation
* action.
*
* Hint: ASCII-only validation. Internationalized domain names (IDNs) are not
* supported, including Punycode-encoded labels.
*
* @param message The error message.
*
* @returns A domain action.
*
* @beta
*/
declare function domain<TInput$1 extends string, const TMessage extends ErrorMessage<DomainIssue<TInput$1>> | undefined>(message: TMessage): DomainAction<TInput$1, TMessage>;
//#endregion
//#region src/actions/email/email.d.ts
/**
* Email issue interface.
*/
interface EmailIssue<TInput$1 extends string> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "email";
  /**
  * The expected property.
  */
  readonly expected: null;
  /**
  * The received property.
  */
  readonly received: `"${string}"`;
  /**
  * The email regex.
  */
  readonly requirement: RegExp;
}
/**
* Email action interface.
*/
interface EmailAction<TInput$1 extends string, TMessage extends ErrorMessage<EmailIssue<TInput$1>> | undefined> extends BaseValidation<TInput$1, TInput$1, EmailIssue<TInput$1>> {
  /**
  * The action type.
  */
  readonly type: "email";
  /**
  * The action reference.
  */
  readonly reference: typeof email;
  /**
  * The expected property.
  */
  readonly expects: null;
  /**
  * The email regex.
  */
  readonly requirement: RegExp;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates an [email](https://en.wikipedia.org/wiki/Email_address) validation
* action.
*
* Hint: This validation action intentionally only validates common email
* addresses. If you are interested in an action that covers the entire
* specification, please use the `rfcEmail` action instead.
*
* @returns An email action.
*/
declare function email<TInput$1 extends string>(): EmailAction<TInput$1, undefined>;
/**
* Creates an [email](https://en.wikipedia.org/wiki/Email_address) validation
* action.
*
* Hint: This validation action intentionally only validates common email
* addresses. If you are interested in an action that covers the entire
* specification, please use the `rfcEmail` action instead.
*
* @param message The error message.
*
* @returns An email action.
*/
declare function email<TInput$1 extends string, const TMessage extends ErrorMessage<EmailIssue<TInput$1>> | undefined>(message: TMessage): EmailAction<TInput$1, TMessage>;
//#endregion
//#region src/actions/emoji/emoji.d.ts
/**
* Emoji issue interface.
*/
interface EmojiIssue<TInput$1 extends string> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "emoji";
  /**
  * The expected property.
  */
  readonly expected: null;
  /**
  * The received property.
  */
  readonly received: `"${string}"`;
  /**
  * The emoji regex.
  */
  readonly requirement: RegExp;
}
/**
* Emoji action interface.
*/
interface EmojiAction<TInput$1 extends string, TMessage extends ErrorMessage<EmojiIssue<TInput$1>> | undefined> extends BaseValidation<TInput$1, TInput$1, EmojiIssue<TInput$1>> {
  /**
  * The action type.
  */
  readonly type: "emoji";
  /**
  * The action reference.
  */
  readonly reference: typeof emoji;
  /**
  * The expected property.
  */
  readonly expects: null;
  /**
  * The emoji regex.
  */
  readonly requirement: RegExp;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates an [emoji](https://en.wikipedia.org/wiki/Emoji) validation action.
*
* @returns An emoji action.
*/
declare function emoji<TInput$1 extends string>(): EmojiAction<TInput$1, undefined>;
/**
* Creates an [emoji](https://en.wikipedia.org/wiki/Emoji) validation action.
*
* @param message The error message.
*
* @returns An emoji action.
*/
declare function emoji<TInput$1 extends string, const TMessage extends ErrorMessage<EmojiIssue<TInput$1>> | undefined>(message: TMessage): EmojiAction<TInput$1, TMessage>;
//#endregion
//#region src/actions/empty/empty.d.ts
/**
* Empty issue interface.
*/
interface EmptyIssue<TInput$1 extends LengthInput> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "empty";
  /**
  * The expected input.
  */
  readonly expected: "0";
  /**
  * The received input.
  */
  readonly received: `${number}`;
}
/**
* Empty action interface.
*/
interface EmptyAction<TInput$1 extends LengthInput, TMessage extends ErrorMessage<EmptyIssue<TInput$1>> | undefined> extends BaseValidation<TInput$1, TInput$1, EmptyIssue<TInput$1>> {
  /**
  * The action type.
  */
  readonly type: "empty";
  /**
  * The action reference.
  */
  readonly reference: typeof empty;
  /**
  * The expected property.
  */
  readonly expects: "0";
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates an empty validation action.
*
* @returns An empty action.
*/
declare function empty<TInput$1 extends LengthInput>(): EmptyAction<TInput$1, undefined>;
/**
* Creates an empty validation action.
*
* @param message The error message.
*
* @returns An empty action.
*/
declare function empty<TInput$1 extends LengthInput, const TMessage extends ErrorMessage<EmptyIssue<TInput$1>> | undefined>(message: TMessage): EmptyAction<TInput$1, TMessage>;
//#endregion
//#region src/actions/endsWith/endsWith.d.ts
/**
* Ends with issue interface.
*/
interface EndsWithIssue<TInput$1 extends string, TRequirement extends string> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "ends_with";
  /**
  * The expected property.
  */
  readonly expected: `"${TRequirement}"`;
  /**
  * The received property.
  */
  readonly received: `"${string}"`;
  /**
  * The end string.
  */
  readonly requirement: TRequirement;
}
/**
* Ends with action interface.
*/
interface EndsWithAction<TInput$1 extends string, TRequirement extends string, TMessage extends ErrorMessage<EndsWithIssue<TInput$1, TRequirement>> | undefined> extends BaseValidation<TInput$1, TInput$1, EndsWithIssue<TInput$1, TRequirement>> {
  /**
  * The action type.
  */
  readonly type: "ends_with";
  /**
  * The action reference.
  */
  readonly reference: typeof endsWith;
  /**
  * The expected property.
  */
  readonly expects: `"${TRequirement}"`;
  /**
  * The end string.
  */
  readonly requirement: TRequirement;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates an ends with validation action.
*
* @param requirement The end string.
*
* @returns An ends with action.
*/
declare function endsWith<TInput$1 extends string, const TRequirement extends string>(requirement: TRequirement): EndsWithAction<TInput$1, TRequirement, undefined>;
/**
* Creates an ends with validation action.
*
* @param requirement The end string.
* @param message The error message.
*
* @returns An ends with action.
*/
declare function endsWith<TInput$1 extends string, const TRequirement extends string, const TMessage extends ErrorMessage<EndsWithIssue<TInput$1, TRequirement>> | undefined>(requirement: TRequirement, message: TMessage): EndsWithAction<TInput$1, TRequirement, TMessage>;
//#endregion
//#region src/actions/entries/entries.d.ts
/**
* Entries issue interface.
*
* @beta
*/
interface EntriesIssue<TInput$1 extends EntriesInput, TRequirement extends number> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "entries";
  /**
  * The expected property.
  */
  readonly expected: `${TRequirement}`;
  /**
  * The received property.
  */
  readonly received: `${number}`;
  /**
  * The required entries.
  */
  readonly requirement: TRequirement;
}
/**
* Entries action interface.
*
* @beta
*/
interface EntriesAction<TInput$1 extends EntriesInput, TRequirement extends number, TMessage extends ErrorMessage<EntriesIssue<TInput$1, TRequirement>> | undefined> extends BaseValidation<TInput$1, TInput$1, EntriesIssue<TInput$1, TRequirement>> {
  /**
  * The action type.
  */
  readonly type: "entries";
  /**
  * The action reference.
  */
  readonly reference: typeof entries;
  /**
  * The expected property.
  */
  readonly expects: `${TRequirement}`;
  /**
  * The required entries.
  */
  readonly requirement: TRequirement;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates an entries validation action.
*
* @param requirement The required entries.
*
* @returns An entries action.
*
* @beta
*/
declare function entries<TInput$1 extends EntriesInput, const TRequirement extends number>(requirement: TRequirement): EntriesAction<TInput$1, TRequirement, undefined>;
/**
* Creates an entries validation action.
*
* @param requirement The required entries.
* @param message The error message.
*
* @returns An entries action.
*
* @beta
*/
declare function entries<TInput$1 extends EntriesInput, const TRequirement extends number, const TMessage extends ErrorMessage<EntriesIssue<TInput$1, TRequirement>> | undefined>(requirement: TRequirement, message: TMessage): EntriesAction<TInput$1, TRequirement, TMessage>;
//#endregion
//#region src/actions/everyItem/everyItem.d.ts
/**
* Every item issue interface.
*/
interface EveryItemIssue<TInput$1 extends ArrayInput> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "every_item";
  /**
  * The expected property.
  */
  readonly expected: null;
  /**
  * The validation function.
  */
  readonly requirement: ArrayRequirement<TInput$1>;
}
/**
* Every item action interface.
*/
interface EveryItemAction<TInput$1 extends ArrayInput, TMessage extends ErrorMessage<EveryItemIssue<TInput$1>> | undefined> extends BaseValidation<TInput$1, TInput$1, EveryItemIssue<TInput$1>> {
  /**
  * The action type.
  */
  readonly type: "every_item";
  /**
  * The action reference.
  */
  readonly reference: typeof everyItem;
  /**
  * The expected property.
  */
  readonly expects: null;
  /**
  * The validation function.
  */
  readonly requirement: ArrayRequirement<TInput$1>;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates an every item validation action.
*
* @param requirement The validation function.
*
* @returns An every item action.
*/
declare function everyItem<TInput$1 extends ArrayInput>(requirement: ArrayRequirement<TInput$1>): EveryItemAction<TInput$1, undefined>;
/**
* Creates an every item validation action.
*
* @param requirement The validation function.
* @param message The error message.
*
* @returns An every item action.
*/
declare function everyItem<TInput$1 extends ArrayInput, const TMessage extends ErrorMessage<EveryItemIssue<TInput$1>> | undefined>(requirement: ArrayRequirement<TInput$1>, message: TMessage): EveryItemAction<TInput$1, TMessage>;
//#endregion
//#region src/actions/examples/examples.d.ts
/**
* Examples action interface.
*/
interface ExamplesAction<TInput$1, TExamples extends readonly TInput$1[]> extends BaseMetadata<TInput$1> {
  /**
  * The action type.
  */
  readonly type: "examples";
  /**
  * The action reference.
  */
  readonly reference: typeof examples;
  /**
  * The examples.
  */
  readonly examples: TExamples;
}
/**
* Creates an examples metadata action.
*
* @param examples_ The examples.
*
* @returns An examples action.
*
* @beta
*/
declare function examples<TInput$1, const TExamples extends readonly TInput$1[]>(examples_: TExamples): ExamplesAction<TInput$1, TExamples>;
//#endregion
//#region src/actions/excludes/excludes.d.ts
/**
* Excludes issue interface.
*/
interface ExcludesIssue<TInput$1 extends ContentInput, TRequirement extends ContentRequirement<TInput$1>> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "excludes";
  /**
  * The expected property.
  */
  readonly expected: string;
  /**
  * The content to be excluded.
  */
  readonly requirement: TRequirement;
}
/**
* Excludes action interface.
*/
interface ExcludesAction<TInput$1 extends ContentInput, TRequirement extends ContentRequirement<TInput$1>, TMessage extends ErrorMessage<ExcludesIssue<TInput$1, TRequirement>> | undefined> extends BaseValidation<TInput$1, TInput$1, ExcludesIssue<TInput$1, TRequirement>> {
  /**
  * The action type.
  */
  readonly type: "excludes";
  /**
  * The action reference.
  */
  readonly reference: typeof excludes;
  /**
  * The expected property.
  */
  readonly expects: string;
  /**
  * The content to be excluded.
  */
  readonly requirement: TRequirement;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates an excludes validation action.
*
* @param requirement The content to be excluded.
*
* @returns An excludes action.
*/
declare function excludes<TInput$1 extends ContentInput, const TRequirement extends ContentRequirement<TInput$1>>(requirement: TRequirement): ExcludesAction<TInput$1, TRequirement, undefined>;
/**
* Creates an excludes validation action.
*
* @param requirement The content to be excluded.
* @param message The error message.
*
* @returns An excludes action.
*/
declare function excludes<TInput$1 extends ContentInput, const TRequirement extends ContentRequirement<TInput$1>, const TMessage extends ErrorMessage<ExcludesIssue<TInput$1, TRequirement>> | undefined>(requirement: TRequirement, message: TMessage): ExcludesAction<TInput$1, TRequirement, TMessage>;
//#endregion
//#region src/actions/filterItems/filterItems.d.ts
/**
* Filter items action interface.
*/
interface FilterItemsAction<TInput$1 extends ArrayInput> extends BaseTransformation<TInput$1, TInput$1, never> {
  /**
  * The action type.
  */
  readonly type: "filter_items";
  /**
  * The action reference.
  */
  readonly reference: typeof filterItems;
  /**
  * The filter items operation.
  */
  readonly operation: ArrayRequirement<TInput$1>;
}
/**
* Creates a filter items transformation action.
*
* @param operation The filter items operation.
*
* @returns A filter items action.
*/
declare function filterItems<TInput$1 extends ArrayInput>(operation: ArrayRequirement<TInput$1>): FilterItemsAction<TInput$1>;
//#endregion
//#region src/actions/findItem/findItem.d.ts
/**
* Array requirement type.
*/
type ArrayRequirement$1<TInput$1 extends ArrayInput, TOuput extends TInput$1[number]> = ((item: TInput$1[number], index: number, array: TInput$1) => item is TOuput) | ((item: TInput$1[number], index: number, array: TInput$1) => boolean);
/**
* Find item action interface.
*/
interface FindItemAction<TInput$1 extends ArrayInput, TOuput extends TInput$1[number]> extends BaseTransformation<TInput$1, TOuput | undefined, never> {
  /**
  * The action type.
  */
  readonly type: "find_item";
  /**
  * The action reference.
  */
  readonly reference: typeof findItem;
  /**
  * The find item operation.
  */
  readonly operation: ArrayRequirement$1<TInput$1, TOuput>;
}
/**
* Creates a find item transformation action.
*
* @param operation The find item operation.
*
* @returns A find item action.
*/
declare function findItem<TInput$1 extends ArrayInput, TOuput extends TInput$1[number]>(operation: ArrayRequirement$1<TInput$1, TOuput>): FindItemAction<TInput$1, TOuput>;
//#endregion
//#region src/actions/finite/finite.d.ts
/**
* Finite issue interface.
*/
interface FiniteIssue<TInput$1 extends number> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "finite";
  /**
  * The expected property.
  */
  readonly expected: null;
  /**
  * The received property.
  */
  readonly received: `${number}`;
  /**
  * The validation function.
  */
  readonly requirement: (input: number) => boolean;
}
/**
* Finite action interface.
*/
interface FiniteAction<TInput$1 extends number, TMessage extends ErrorMessage<FiniteIssue<TInput$1>> | undefined> extends BaseValidation<TInput$1, TInput$1, FiniteIssue<TInput$1>> {
  /**
  * The action type.
  */
  readonly type: "finite";
  /**
  * The action reference.
  */
  readonly reference: typeof finite;
  /**
  * The expected property.
  */
  readonly expects: null;
  /**
  * The validation function.
  */
  readonly requirement: (input: number) => boolean;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a [finite](https://en.wikipedia.org/wiki/Finite) validation action.
*
* @returns A finite action.
*/
declare function finite<TInput$1 extends number>(): FiniteAction<TInput$1, undefined>;
/**
* Creates a [finite](https://en.wikipedia.org/wiki/Finite) validation action.
*
* @param message The error message.
*
* @returns A finite action.
*/
declare function finite<TInput$1 extends number, const TMessage extends ErrorMessage<FiniteIssue<TInput$1>> | undefined>(message: TMessage): FiniteAction<TInput$1, TMessage>;
//#endregion
//#region src/actions/flavor/flavor.d.ts
/**
* Flavor symbol.
*
* @beta
*/
declare const FlavorSymbol: unique symbol;
/**
* Flavor name type.
*
* @beta
*/
type FlavorName = string | number | symbol;
/**
* Flavor interface.
*
* @beta
*/
interface Flavor<TName extends FlavorName> {
  [FlavorSymbol]?: { [TValue in TName]: TValue };
}
/**
* Flavor action interface.
*
* @beta
*/
interface FlavorAction<TInput$1, TName extends FlavorName> extends BaseTransformation<TInput$1, TInput$1 & Flavor<TName>, never> {
  /**
  * The action type.
  */
  readonly type: "flavor";
  /**
  * The action reference.
  */
  readonly reference: typeof flavor;
  /**
  * The flavor name.
  */
  readonly name: TName;
}
/**
* Creates a flavor transformation action.
*
* @param name The flavor name.
*
* @returns A flavor action.
*
* @beta
*/
declare function flavor<TInput$1, TName extends FlavorName>(name: TName): FlavorAction<TInput$1, TName>;
//#endregion
//#region src/actions/graphemes/graphemes.d.ts
/**
* Graphemes issue interface.
*/
interface GraphemesIssue<TInput$1 extends string, TRequirement extends number> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "graphemes";
  /**
  * The expected property.
  */
  readonly expected: `${TRequirement}`;
  /**
  * The received property.
  */
  readonly received: `${number}`;
  /**
  * The required graphemes.
  */
  readonly requirement: TRequirement;
}
/**
* Graphemes action interface.
*/
interface GraphemesAction<TInput$1 extends string, TRequirement extends number, TMessage extends ErrorMessage<GraphemesIssue<TInput$1, TRequirement>> | undefined> extends BaseValidation<TInput$1, TInput$1, GraphemesIssue<TInput$1, TRequirement>> {
  /**
  * The action type.
  */
  readonly type: "graphemes";
  /**
  * The action reference.
  */
  readonly reference: typeof graphemes;
  /**
  * The expected property.
  */
  readonly expects: `${TRequirement}`;
  /**
  * The required graphemes.
  */
  readonly requirement: TRequirement;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a graphemes validation action.
*
* @param requirement The required graphemes.
*
* @returns A graphemes action.
*/
declare function graphemes<TInput$1 extends string, const TRequirement extends number>(requirement: TRequirement): GraphemesAction<TInput$1, TRequirement, undefined>;
/**
* Creates a graphemes validation action.
*
* @param requirement The required graphemes.
* @param message The error message.
*
* @returns A graphemes action.
*/
declare function graphemes<TInput$1 extends string, const TRequirement extends number, const TMessage extends ErrorMessage<GraphemesIssue<TInput$1, TRequirement>> | undefined>(requirement: TRequirement, message: TMessage): GraphemesAction<TInput$1, TRequirement, TMessage>;
//#endregion
//#region src/actions/gtValue/gtValue.d.ts
/**
* Greater than value issue type.
*/
interface GtValueIssue<TInput$1 extends ValueInput, TRequirement extends TInput$1> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "gt_value";
  /**
  * The expected property.
  */
  readonly expected: `>${string}`;
  /**
  * The greater than value.
  */
  readonly requirement: TRequirement;
}
/**
* Greater than value action type.
*/
interface GtValueAction<TInput$1 extends ValueInput, TRequirement extends TInput$1, TMessage extends ErrorMessage<GtValueIssue<TInput$1, TRequirement>> | undefined> extends BaseValidation<TInput$1, TInput$1, GtValueIssue<TInput$1, TRequirement>> {
  /**
  * The action type.
  */
  readonly type: "gt_value";
  /**
  * The action reference.
  */
  readonly reference: typeof gtValue;
  /**
  * The expected property.
  */
  readonly expects: `>${string}`;
  /**
  * The greater than value.
  */
  readonly requirement: TRequirement;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a greater than value validation action.
*
* @param requirement The greater than value.
*
* @returns A greater than value action.
*/
declare function gtValue<TInput$1 extends ValueInput, const TRequirement extends TInput$1>(requirement: TRequirement): GtValueAction<TInput$1, TRequirement, undefined>;
/**
* Creates a greater than value validation action.
*
* @param requirement The greater than value.
* @param message The error message.
*
* @returns A greater than value action.
*/
declare function gtValue<TInput$1 extends ValueInput, const TRequirement extends TInput$1, const TMessage extends ErrorMessage<GtValueIssue<TInput$1, TRequirement>> | undefined>(requirement: TRequirement, message: TMessage): GtValueAction<TInput$1, TRequirement, TMessage>;
//#endregion
//#region src/actions/guard/guard.d.ts
/**
* Guard function type.
*
* @beta
*/
type GuardFunction<TInput$1> = (input: TInput$1) => input is any;
/**
* Infer guard output type.
*
* @beta
*/
type InferGuardOutput<TGuard extends GuardFunction<any>> = TGuard extends ((input: any) => input is infer TOutput) ? TOutput : unknown;
/**
* Guard issue interface.
*
* @beta
*/
interface GuardIssue<TInput$1, TGuard extends GuardFunction<TInput$1>> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "transformation";
  /**
  * The issue type.
  */
  readonly type: "guard";
  /**
  * The guard function.
  */
  readonly requirement: TGuard;
}
/**
* Guard action interface.
*
* @beta
*/
interface GuardAction<TInput$1, TGuard extends GuardFunction<TInput$1>, TMessage extends ErrorMessage<GuardIssue<TInput$1, TGuard>> | undefined> extends BaseTransformation<TInput$1, TInput$1 & InferGuardOutput<TGuard>, GuardIssue<TInput$1, TGuard>> {
  /**
  * The action type.
  */
  readonly type: "guard";
  /**
  * The action reference.
  */
  readonly reference: typeof guard;
  /**
  * The guard function.
  */
  readonly requirement: TGuard;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a guard transformation action.
*
* @param requirement The guard function.
*
* @returns A guard action.
*
* @beta
*/
declare function guard<TInput$1, const TGuard extends GuardFunction<TInput$1>>(requirement: TGuard): GuardAction<TInput$1, TGuard, undefined>;
/**
* Creates a guard transformation action.
*
* @param requirement The guard function.
*
* @returns A guard action.
*
* @beta
*/
declare function guard<const TGuard extends GuardFunction<any>>(requirement: TGuard): GuardAction<Parameters<TGuard>[0], TGuard, undefined>;
/**
* Creates a guard transformation action.
*
* @param requirement The guard function.
* @param message The error message.
*
* @returns A guard action.
*
* @beta
*/
declare function guard<TInput$1, const TGuard extends GuardFunction<TInput$1>, const TMessage extends ErrorMessage<GuardIssue<TInput$1, TGuard>> | undefined>(requirement: TGuard, message: TMessage): GuardAction<TInput$1, TGuard, TMessage>;
/**
* Creates a guard transformation action.
*
* @param requirement The guard function.
* @param message The error message.
*
* @returns A guard action.
*
* @beta
*/
declare function guard<const TGuard extends GuardFunction<any>, const TMessage extends ErrorMessage<GuardIssue<Parameters<TGuard>[0], TGuard>> | undefined>(requirement: TGuard, message: TMessage): GuardAction<Parameters<TGuard>[0], TGuard, TMessage>;
//#endregion
//#region src/actions/hash/hash.d.ts
/**
* Hash lengths object.
*/
declare const HASH_LENGTHS: {
  readonly md4: 32;
  readonly md5: 32;
  readonly sha1: 40;
  readonly sha256: 64;
  readonly sha384: 96;
  readonly sha512: 128;
  readonly ripemd128: 32;
  readonly ripemd160: 40;
  readonly tiger128: 32;
  readonly tiger160: 40;
  readonly tiger192: 48;
  readonly crc32: 8;
  readonly crc32b: 8;
  readonly adler32: 8;
};
/**
* Hash type type.
*/
type HashType = keyof typeof HASH_LENGTHS;
/**
* Hash issue interface.
*/
interface HashIssue<TInput$1 extends string> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "hash";
  /**
  * The expected property.
  */
  readonly expected: null;
  /**
  * The received property.
  */
  readonly received: `"${string}"`;
  /**
  * The hash regex.
  */
  readonly requirement: RegExp;
}
/**
* Hash action interface.
*/
interface HashAction<TInput$1 extends string, TMessage extends ErrorMessage<HashIssue<TInput$1>> | undefined> extends BaseValidation<TInput$1, TInput$1, HashIssue<TInput$1>> {
  /**
  * The action type.
  */
  readonly type: "hash";
  /**
  * The action reference.
  */
  readonly reference: typeof hash;
  /**
  * The expected property.
  */
  readonly expects: null;
  /**
  * The hash regex.
  */
  readonly requirement: RegExp;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a [hash](https://en.wikipedia.org/wiki/Hash_function) validation action.
*
* @param types The hash types.
*
* @returns A hash action.
*/
declare function hash<TInput$1 extends string>(types: [HashType, ...HashType[]]): HashAction<TInput$1, undefined>;
/**
* Creates a [hash](https://en.wikipedia.org/wiki/Hash_function) validation action.
*
* @param types The hash types.
* @param message The error message.
*
* @returns A hash action.
*/
declare function hash<TInput$1 extends string, const TMessage extends ErrorMessage<HashIssue<TInput$1>> | undefined>(types: [HashType, ...HashType[]], message: TMessage): HashAction<TInput$1, TMessage>;
//#endregion
//#region src/actions/hexadecimal/hexadecimal.d.ts
/**
* Hexadecimal issue interface.
*/
interface HexadecimalIssue<TInput$1 extends string> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "hexadecimal";
  /**
  * The expected property.
  */
  readonly expected: null;
  /**
  * The received property.
  */
  readonly received: `"${string}"`;
  /**
  * The hexadecimal regex.
  */
  readonly requirement: RegExp;
}
/**
* Hexadecimal action interface.
*/
interface HexadecimalAction<TInput$1 extends string, TMessage extends ErrorMessage<HexadecimalIssue<TInput$1>> | undefined> extends BaseValidation<TInput$1, TInput$1, HexadecimalIssue<TInput$1>> {
  /**
  * The action type.
  */
  readonly type: "hexadecimal";
  /**
  * The action reference.
  */
  readonly reference: typeof hexadecimal;
  /**
  * The expected property.
  */
  readonly expects: null;
  /**
  * The hexadecimal regex.
  */
  readonly requirement: RegExp;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a [hexadecimal](https://en.wikipedia.org/wiki/Hexadecimal) validation action.
*
* @returns A hexadecimal action.
*/
declare function hexadecimal<TInput$1 extends string>(): HexadecimalAction<TInput$1, undefined>;
/**
* Creates a [hexadecimal](https://en.wikipedia.org/wiki/Hexadecimal) validation action.
*
* @param message The error message.
*
* @returns A hexadecimal action.
*/
declare function hexadecimal<TInput$1 extends string, const TMessage extends ErrorMessage<HexadecimalIssue<TInput$1>> | undefined>(message: TMessage): HexadecimalAction<TInput$1, TMessage>;
//#endregion
//#region src/actions/hexColor/hexColor.d.ts
/**
* Hex color issue interface.
*/
interface HexColorIssue<TInput$1 extends string> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "hex_color";
  /**
  * The expected property.
  */
  readonly expected: null;
  /**
  * The received property.
  */
  readonly received: `"${string}"`;
  /**
  * The hex color regex.
  */
  readonly requirement: RegExp;
}
/**
* Hex color action interface.
*/
interface HexColorAction<TInput$1 extends string, TMessage extends ErrorMessage<HexColorIssue<TInput$1>> | undefined> extends BaseValidation<TInput$1, TInput$1, HexColorIssue<TInput$1>> {
  /**
  * The action type.
  */
  readonly type: "hex_color";
  /**
  * The action reference.
  */
  readonly reference: typeof hexColor;
  /**
  * The expected property.
  */
  readonly expects: null;
  /**
  * The hex color regex.
  */
  readonly requirement: RegExp;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a [hex color](https://en.wikipedia.org/wiki/Web_colors#Hex_triplet) validation action.
*
* @returns A hex color action.
*/
declare function hexColor<TInput$1 extends string>(): HexColorAction<TInput$1, undefined>;
/**
* Creates a [hex color](https://en.wikipedia.org/wiki/Web_colors#Hex_triplet) validation action.
*
* @param message The error message.
*
* @returns A hex color action.
*/
declare function hexColor<TInput$1 extends string, const TMessage extends ErrorMessage<HexColorIssue<TInput$1>> | undefined>(message: TMessage): HexColorAction<TInput$1, TMessage>;
//#endregion
//#region src/actions/imei/imei.d.ts
/**
* IMEI issue interface.
*/
interface ImeiIssue<TInput$1 extends string> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "imei";
  /**
  * The expected property.
  */
  readonly expected: null;
  /**
  * The received property.
  */
  readonly received: `"${string}"`;
  /**
  * The validation function.
  */
  readonly requirement: (input: string) => boolean;
}
/**
* IMEI action interface.
*/
interface ImeiAction<TInput$1 extends string, TMessage extends ErrorMessage<ImeiIssue<TInput$1>> | undefined> extends BaseValidation<TInput$1, TInput$1, ImeiIssue<TInput$1>> {
  /**
  * The action type.
  */
  readonly type: "imei";
  /**
  * The action reference.
  */
  readonly reference: typeof imei;
  /**
  * The expected property.
  */
  readonly expects: null;
  /**
  * The validation function.
  */
  readonly requirement: (input: string) => boolean;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates an [IMEI](https://en.wikipedia.org/wiki/International_Mobile_Equipment_Identity) validation action.
*
* Formats:
* - AABBBBBBCCCCCCD
* - AA-BBBBBB-CCCCCC-D
*
* @returns An IMEI action.
*/
declare function imei<TInput$1 extends string>(): ImeiAction<TInput$1, undefined>;
/**
* Creates an [IMEI](https://en.wikipedia.org/wiki/International_Mobile_Equipment_Identity) validation action.
*
* Formats:
* - AABBBBBBCCCCCCD
* - AA-BBBBBB-CCCCCC-D
*
* @param message The error message.
*
* @returns An IMEI action.
*/
declare function imei<TInput$1 extends string, const TMessage extends ErrorMessage<ImeiIssue<TInput$1>> | undefined>(message: TMessage): ImeiAction<TInput$1, TMessage>;
//#endregion
//#region src/actions/includes/includes.d.ts
/**
* Includes issue interface.
*/
interface IncludesIssue<TInput$1 extends ContentInput, TRequirement extends ContentRequirement<TInput$1>> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "includes";
  /**
  * The expected property.
  */
  readonly expected: string;
  /**
  * The content to be included.
  */
  readonly requirement: TRequirement;
}
/**
* Includes action interface.
*/
interface IncludesAction<TInput$1 extends ContentInput, TRequirement extends ContentRequirement<TInput$1>, TMessage extends ErrorMessage<IncludesIssue<TInput$1, TRequirement>> | undefined> extends BaseValidation<TInput$1, TInput$1, IncludesIssue<TInput$1, TRequirement>> {
  /**
  * The action type.
  */
  readonly type: "includes";
  /**
  * The action reference.
  */
  readonly reference: typeof includes;
  /**
  * The expected property.
  */
  readonly expects: string;
  /**
  * The content to be included.
  */
  readonly requirement: TRequirement;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates an includes validation action.
*
* @param requirement The content to be included.
*
* @returns An includes action.
*/
declare function includes<TInput$1 extends ContentInput, const TRequirement extends ContentRequirement<TInput$1>>(requirement: TRequirement): IncludesAction<TInput$1, TRequirement, undefined>;
/**
* Creates an includes validation action.
*
* @param requirement The content to be included.
* @param message The error message.
*
* @returns An includes action.
*/
declare function includes<TInput$1 extends ContentInput, const TRequirement extends ContentRequirement<TInput$1>, const TMessage extends ErrorMessage<IncludesIssue<TInput$1, TRequirement>> | undefined>(requirement: TRequirement, message: TMessage): IncludesAction<TInput$1, TRequirement, TMessage>;
//#endregion
//#region src/actions/integer/integer.d.ts
/**
* Integer issue interface.
*/
interface IntegerIssue<TInput$1 extends number> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "integer";
  /**
  * The expected property.
  */
  readonly expected: null;
  /**
  * The received property.
  */
  readonly received: `${number}`;
  /**
  * The validation function.
  */
  readonly requirement: (input: number) => boolean;
}
/**
* Integer action interface.
*/
interface IntegerAction<TInput$1 extends number, TMessage extends ErrorMessage<IntegerIssue<TInput$1>> | undefined> extends BaseValidation<TInput$1, TInput$1, IntegerIssue<TInput$1>> {
  /**
  * The action type.
  */
  readonly type: "integer";
  /**
  * The action reference.
  */
  readonly reference: typeof integer;
  /**
  * The expected property.
  */
  readonly expects: null;
  /**
  * The validation function.
  */
  readonly requirement: (input: number) => boolean;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates an [integer](https://en.wikipedia.org/wiki/Integer) validation action.
*
* @returns An integer action.
*/
declare function integer<TInput$1 extends number>(): IntegerAction<TInput$1, undefined>;
/**
* Creates an [integer](https://en.wikipedia.org/wiki/Integer) validation action.
*
* @param message The error message.
*
* @returns An integer action.
*/
declare function integer<TInput$1 extends number, const TMessage extends ErrorMessage<IntegerIssue<TInput$1>> | undefined>(message: TMessage): IntegerAction<TInput$1, TMessage>;
//#endregion
//#region src/actions/ip/ip.d.ts
/**
* IP issue interface.
*/
interface IpIssue<TInput$1 extends string> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "ip";
  /**
  * The expected property.
  */
  readonly expected: null;
  /**
  * The received property.
  */
  readonly received: `"${string}"`;
  /**
  * The IP regex.
  */
  readonly requirement: RegExp;
}
/**
* IP action interface.
*/
interface IpAction<TInput$1 extends string, TMessage extends ErrorMessage<IpIssue<TInput$1>> | undefined> extends BaseValidation<TInput$1, TInput$1, IpIssue<TInput$1>> {
  /**
  * The action type.
  */
  readonly type: "ip";
  /**
  * The action reference.
  */
  readonly reference: typeof ip;
  /**
  * The expected property.
  */
  readonly expects: null;
  /**
  * The IP regex.
  */
  readonly requirement: RegExp;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates an [IP address](https://en.wikipedia.org/wiki/IP_address) validation action.
*
* @returns An IP action.
*/
declare function ip<TInput$1 extends string>(): IpAction<TInput$1, undefined>;
/**
* Creates an [IP address](https://en.wikipedia.org/wiki/IP_address) validation action.
*
* @param message The error message.
*
* @returns An IP action.
*/
declare function ip<TInput$1 extends string, const TMessage extends ErrorMessage<IpIssue<TInput$1>> | undefined>(message: TMessage): IpAction<TInput$1, TMessage>;
//#endregion
//#region src/actions/ipv4/ipv4.d.ts
/**
* IPv4 issue interface.
*/
interface Ipv4Issue<TInput$1 extends string> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "ipv4";
  /**
  * The expected property.
  */
  readonly expected: null;
  /**
  * The received property.
  */
  readonly received: `"${string}"`;
  /**
  * The IPv4 regex.
  */
  readonly requirement: RegExp;
}
/**
* IPv4 action interface.
*/
interface Ipv4Action<TInput$1 extends string, TMessage extends ErrorMessage<Ipv4Issue<TInput$1>> | undefined> extends BaseValidation<TInput$1, TInput$1, Ipv4Issue<TInput$1>> {
  /**
  * The action type.
  */
  readonly type: "ipv4";
  /**
  * The action reference.
  */
  readonly reference: typeof ipv4;
  /**
  * The expected property.
  */
  readonly expects: null;
  /**
  * The IPv4 regex.
  */
  readonly requirement: RegExp;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates an [IPv4](https://en.wikipedia.org/wiki/IPv4) address validation action.
*
* @returns An IPv4 action.
*/
declare function ipv4<TInput$1 extends string>(): Ipv4Action<TInput$1, undefined>;
/**
* Creates an [IPv4](https://en.wikipedia.org/wiki/IPv4) address validation action.
*
* @param message The error message.
*
* @returns An IPv4 action.
*/
declare function ipv4<TInput$1 extends string, const TMessage extends ErrorMessage<Ipv4Issue<TInput$1>> | undefined>(message: TMessage): Ipv4Action<TInput$1, TMessage>;
//#endregion
//#region src/actions/ipv6/ipv6.d.ts
/**
* IPv6 issue interface.
*/
interface Ipv6Issue<TInput$1 extends string> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "ipv6";
  /**
  * The expected property.
  */
  readonly expected: null;
  /**
  * The received property.
  */
  readonly received: `"${string}"`;
  /**
  * The IPv6 regex.
  */
  readonly requirement: RegExp;
}
/**
* IPv6 action interface.
*/
interface Ipv6Action<TInput$1 extends string, TMessage extends ErrorMessage<Ipv6Issue<TInput$1>> | undefined> extends BaseValidation<TInput$1, TInput$1, Ipv6Issue<TInput$1>> {
  /**
  * The action type.
  */
  readonly type: "ipv6";
  /**
  * The action reference.
  */
  readonly reference: typeof ipv6;
  /**
  * The expected property.
  */
  readonly expects: null;
  /**
  * The IPv6 regex.
  */
  readonly requirement: RegExp;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates an [IPv6](https://en.wikipedia.org/wiki/IPv6) address validation action.
*
* @returns An IPv6 action.
*/
declare function ipv6<TInput$1 extends string>(): Ipv6Action<TInput$1, undefined>;
/**
* Creates an [IPv6](https://en.wikipedia.org/wiki/IPv6) address validation action.
*
* @param message The error message.
*
* @returns An IPv6 action.
*/
declare function ipv6<TInput$1 extends string, const TMessage extends ErrorMessage<Ipv6Issue<TInput$1>> | undefined>(message: TMessage): Ipv6Action<TInput$1, TMessage>;
//#endregion
//#region src/actions/isbn/isbn.d.ts
/**
* ISBN issue interface.
*/
interface IsbnIssue<TInput$1 extends string> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "isbn";
  /**
  * The expected property.
  */
  readonly expected: null;
  /**
  * The received property.
  */
  readonly received: `"${string}"`;
  /**
  * The validation function.
  */
  readonly requirement: (input: string) => boolean;
}
/**
* ISBN action interface.
*/
interface IsbnAction<TInput$1 extends string, TMessage extends ErrorMessage<IsbnIssue<TInput$1>> | undefined> extends BaseValidation<TInput$1, TInput$1, IsbnIssue<TInput$1>> {
  /**
  * The action type.
  */
  readonly type: "isbn";
  /**
  * The action reference.
  */
  readonly reference: typeof isbn;
  /**
  * The expected property.
  */
  readonly expects: null;
  /**
  * The validation function.
  */
  readonly requirement: (input: string) => boolean;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates an [ISBN](https://en.wikipedia.org/wiki/ISBN) action.
*
* @returns An ISBN action.
*
* @beta
*/
declare function isbn<TInput$1 extends string>(): IsbnAction<TInput$1, undefined>;
/**
* Creates an [ISBN](https://en.wikipedia.org/wiki/ISBN) action.
*
* @param message The error message.
*
* @returns An ISBN action.
*
* @beta
*/
declare function isbn<TInput$1 extends string, const TMessage extends ErrorMessage<IsbnIssue<TInput$1>> | undefined>(message: TMessage): IsbnAction<TInput$1, TMessage>;
//#endregion
//#region src/actions/isrc/isrc.d.ts
/**
* ISRC issue interface.
*/
interface IsrcIssue<TInput$1 extends string> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "isrc";
  /**
  * The expected property.
  */
  readonly expected: null;
  /**
  * The received property.
  */
  readonly received: `"${string}"`;
  /**
  * The ISRC regex.
  */
  readonly requirement: RegExp;
}
/**
* ISRC action interface.
*/
interface IsrcAction<TInput$1 extends string, TMessage extends ErrorMessage<IsrcIssue<TInput$1>> | undefined> extends BaseValidation<TInput$1, TInput$1, IsrcIssue<TInput$1>> {
  /**
  * The action type.
  */
  readonly type: "isrc";
  /**
  * The action reference.
  */
  readonly reference: typeof isrc;
  /**
  * The expected property.
  */
  readonly expects: null;
  /**
  * The ISRC regex.
  */
  readonly requirement: RegExp;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates an [ISRC](https://en.wikipedia.org/wiki/International_Standard_Recording_Code) validation action.
*
* Formats:
* - CCXXXYYNNNNN
* - CC-XXX-YY-NNNNN
*
* @returns An ISRC action.
*
* @beta
*/
declare function isrc<TInput$1 extends string>(): IsrcAction<TInput$1, undefined>;
/**
* Creates an [ISRC](https://en.wikipedia.org/wiki/International_Standard_Recording_Code) validation action.
*
* @param message The error message.
*
* @returns An ISRC action.
*
* @beta
*/
declare function isrc<TInput$1 extends string, const TMessage extends ErrorMessage<IsrcIssue<TInput$1>> | undefined>(message: TMessage): IsrcAction<TInput$1, TMessage>;
//#endregion
//#region src/actions/isoDate/isoDate.d.ts
/**
* ISO date issue interface.
*/
interface IsoDateIssue<TInput$1 extends string> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "iso_date";
  /**
  * The expected property.
  */
  readonly expected: null;
  /**
  * The received property.
  */
  readonly received: `"${string}"`;
  /**
  * The ISO date regex.
  */
  readonly requirement: RegExp;
}
/**
* ISO date action interface.
*/
interface IsoDateAction<TInput$1 extends string, TMessage extends ErrorMessage<IsoDateIssue<TInput$1>> | undefined> extends BaseValidation<TInput$1, TInput$1, IsoDateIssue<TInput$1>> {
  /**
  * The action type.
  */
  readonly type: "iso_date";
  /**
  * The action reference.
  */
  readonly reference: typeof isoDate;
  /**
  * The expected property.
  */
  readonly expects: null;
  /**
  * The ISO date regex.
  */
  readonly requirement: RegExp;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates an [ISO date](https://en.wikipedia.org/wiki/ISO_8601) validation action.
*
* Format: yyyy-mm-dd
*
* Hint: The regex used cannot validate the maximum number of days based on
* year and month. For example, "2023-06-31" is valid although June has only
* 30 days.
*
* @returns An ISO date action.
*/
declare function isoDate<TInput$1 extends string>(): IsoDateAction<TInput$1, undefined>;
/**
* Creates an [ISO date](https://en.wikipedia.org/wiki/ISO_8601) validation action.
*
* Format: yyyy-mm-dd
*
* Hint: The regex used cannot validate the maximum number of days based on
* year and month. For example, "2023-06-31" is valid although June has only
* 30 days.
*
* @param message The error message.
*
* @returns An ISO date action.
*/
declare function isoDate<TInput$1 extends string, const TMessage extends ErrorMessage<IsoDateIssue<TInput$1>> | undefined>(message: TMessage): IsoDateAction<TInput$1, TMessage>;
//#endregion
//#region src/actions/isoDateTime/isoDateTime.d.ts
/**
* ISO date time issue interface.
*/
interface IsoDateTimeIssue<TInput$1 extends string> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "iso_date_time";
  /**
  * The expected property.
  */
  readonly expected: null;
  /**
  * The received property.
  */
  readonly received: `"${string}"`;
  /**
  * The ISO date time regex.
  */
  readonly requirement: RegExp;
}
/**
* ISO date time action interface.
*/
interface IsoDateTimeAction<TInput$1 extends string, TMessage extends ErrorMessage<IsoDateTimeIssue<TInput$1>> | undefined> extends BaseValidation<TInput$1, TInput$1, IsoDateTimeIssue<TInput$1>> {
  /**
  * The action type.
  */
  readonly type: "iso_date_time";
  /**
  * The action reference.
  */
  readonly reference: typeof isoDateTime;
  /**
  * The expected property.
  */
  readonly expects: null;
  /**
  * The ISO date time regex.
  */
  readonly requirement: RegExp;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates an [ISO date time](https://en.wikipedia.org/wiki/ISO_8601) validation action.
*
* Format: yyyy-mm-ddThh:mm
*
* Hint: The regex used cannot validate the maximum number of days based on
* year and month. For example, "2023-06-31T00:00" is valid although June has only
* 30 days.
*
* Hint: The regex also allows a space as a separator between the date and time
* parts instead of the "T" character.
*
* @returns An ISO date time action.
*/
declare function isoDateTime<TInput$1 extends string>(): IsoDateTimeAction<TInput$1, undefined>;
/**
* Creates an [ISO date time](https://en.wikipedia.org/wiki/ISO_8601) validation action.
*
* Format: yyyy-mm-ddThh:mm
*
* Hint: The regex used cannot validate the maximum number of days based on
* year and month. For example, "2023-06-31T00:00" is valid although June has only
* 30 days.
*
* Hint: The regex also allows a space as a separator between the date and time
* parts instead of the "T" character.
*
* @param message The error message.
*
* @returns An ISO date time action.
*/
declare function isoDateTime<TInput$1 extends string, const TMessage extends ErrorMessage<IsoDateTimeIssue<TInput$1>> | undefined>(message: TMessage): IsoDateTimeAction<TInput$1, TMessage>;
//#endregion
//#region src/actions/isoTime/isoTime.d.ts
/**
* ISO time issue interface.
*/
interface IsoTimeIssue<TInput$1 extends string> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "iso_time";
  /**
  * The expected property.
  */
  readonly expected: null;
  /**
  * The received property.
  */
  readonly received: `"${string}"`;
  /**
  * The ISO time regex.
  */
  readonly requirement: RegExp;
}
/**
* ISO time action interface.
*/
interface IsoTimeAction<TInput$1 extends string, TMessage extends ErrorMessage<IsoTimeIssue<TInput$1>> | undefined> extends BaseValidation<TInput$1, TInput$1, IsoTimeIssue<TInput$1>> {
  /**
  * The action type.
  */
  readonly type: "iso_time";
  /**
  * The action reference.
  */
  readonly reference: typeof isoTime;
  /**
  * The expected property.
  */
  readonly expects: null;
  /**
  * The ISO time regex.
  */
  readonly requirement: RegExp;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates an [ISO time](https://en.wikipedia.org/wiki/ISO_8601) validation action.
*
* Format: hh:mm
*
* @returns An ISO time action.
*/
declare function isoTime<TInput$1 extends string>(): IsoTimeAction<TInput$1, undefined>;
/**
* Creates an [ISO time](https://en.wikipedia.org/wiki/ISO_8601) validation action.
*
* Format: hh:mm
*
* @param message The error message.
*
* @returns An ISO time action.
*/
declare function isoTime<TInput$1 extends string, const TMessage extends ErrorMessage<IsoTimeIssue<TInput$1>> | undefined>(message: TMessage): IsoTimeAction<TInput$1, TMessage>;
//#endregion
//#region src/actions/isoTimeSecond/isoTimeSecond.d.ts
/**
* ISO time second issue interface.
*/
interface IsoTimeSecondIssue<TInput$1 extends string> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "iso_time_second";
  /**
  * The expected property.
  */
  readonly expected: null;
  /**
  * The received property.
  */
  readonly received: `"${string}"`;
  /**
  * The ISO time with seconds regex.
  */
  readonly requirement: RegExp;
}
/**
* ISO time second action interface.
*/
interface IsoTimeSecondAction<TInput$1 extends string, TMessage extends ErrorMessage<IsoTimeSecondIssue<TInput$1>> | undefined> extends BaseValidation<TInput$1, TInput$1, IsoTimeSecondIssue<TInput$1>> {
  /**
  * The action type.
  */
  readonly type: "iso_time_second";
  /**
  * The action reference.
  */
  readonly reference: typeof isoTimeSecond;
  /**
  * The expected property.
  */
  readonly expects: null;
  /**
  * The ISO time second regex.
  */
  readonly requirement: RegExp;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates an [ISO time second](https://en.wikipedia.org/wiki/ISO_8601) validation action.
*
* Format: hh:mm:ss
*
* @returns An ISO time second action.
*/
declare function isoTimeSecond<TInput$1 extends string>(): IsoTimeSecondAction<TInput$1, undefined>;
/**
* Creates an [ISO time second](https://en.wikipedia.org/wiki/ISO_8601) validation action.
*
* Format: hh:mm:ss
*
* @param message The error message.
*
* @returns An ISO time second action.
*/
declare function isoTimeSecond<TInput$1 extends string, const TMessage extends ErrorMessage<IsoTimeSecondIssue<TInput$1>> | undefined>(message: TMessage): IsoTimeSecondAction<TInput$1, TMessage>;
//#endregion
//#region src/actions/isoTimestamp/isoTimestamp.d.ts
/**
* ISO timestamp issue interface.
*/
interface IsoTimestampIssue<TInput$1 extends string> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "iso_timestamp";
  /**
  * The expected property.
  */
  readonly expected: null;
  /**
  * The received property.
  */
  readonly received: `"${string}"`;
  /**
  * The ISO timestamp regex.
  */
  readonly requirement: RegExp;
}
/**
* ISO timestamp action interface.
*/
interface IsoTimestampAction<TInput$1 extends string, TMessage extends ErrorMessage<IsoTimestampIssue<TInput$1>> | undefined> extends BaseValidation<TInput$1, TInput$1, IsoTimestampIssue<TInput$1>> {
  /**
  * The action type.
  */
  readonly type: "iso_timestamp";
  /**
  * The action reference.
  */
  readonly reference: typeof isoTimestamp;
  /**
  * The expected property.
  */
  readonly expects: null;
  /**
  * The ISO timestamp regex.
  */
  readonly requirement: RegExp;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates an [ISO timestamp](https://en.wikipedia.org/wiki/ISO_8601) validation
* action.
*
* Formats:
* - yyyy-mm-ddThh:mm:ss.sssZ
* - yyyy-mm-ddThh:mm:ss.sss±hh:mm
* - yyyy-mm-ddThh:mm:ss.sss±hhmm
*
* Hint: To support timestamps with lower or higher accuracy, the millisecond
* specification can be removed or contain up to 9 digits.
*
* Hint: The regex used cannot validate the maximum number of days based on
* year and month. For example, "2023-06-31T00:00:00.000Z" is valid although
* June has only 30 days.
*
* Hint: The regex also allows a space as a separator between the date and time
* parts instead of the "T" character.
*
* Hint: The regex also allows a space before the UTC offset (e.g., " +00:00")
* to support PostgreSQL's `timestamptz` output format.
*
* @returns An ISO timestamp action.
*/
declare function isoTimestamp<TInput$1 extends string>(): IsoTimestampAction<TInput$1, undefined>;
/**
* Creates an [ISO timestamp](https://en.wikipedia.org/wiki/ISO_8601) validation
* action.
*
* Formats:
* - yyyy-mm-ddThh:mm:ss.sssZ
* - yyyy-mm-ddThh:mm:ss.sss±hh:mm
* - yyyy-mm-ddThh:mm:ss.sss±hhmm
* - yyyy-mm-ddThh:mm:ss.sss±hh
*
* Hint: To support timestamps with lower or higher accuracy, the millisecond
* specification can be removed or contain up to 9 digits.
*
* Hint: The regex used cannot validate the maximum number of days based on
* year and month. For example, "2023-06-31T00:00:00.000Z" is valid although
* June has only 30 days.
*
* Hint: The regex also allows a space as a separator between the date and time
* parts instead of the "T" character.
*
* Hint: The regex also allows a space before the UTC offset (e.g., " +00:00")
* to support PostgreSQL's `timestamptz` output format.
*
* @param message The error message.
*
* @returns An ISO timestamp action.
*/
declare function isoTimestamp<TInput$1 extends string, const TMessage extends ErrorMessage<IsoTimestampIssue<TInput$1>> | undefined>(message: TMessage): IsoTimestampAction<TInput$1, TMessage>;
//#endregion
//#region src/actions/isoWeek/isoWeek.d.ts
/**
* ISO week issue interface.
*/
interface IsoWeekIssue<TInput$1 extends string> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "iso_week";
  /**
  * The expected property.
  */
  readonly expected: null;
  /**
  * The received property.
  */
  readonly received: `"${string}"`;
  /**
  * The ISO week regex.
  */
  readonly requirement: RegExp;
}
/**
* ISO week action interface.
*/
interface IsoWeekAction<TInput$1 extends string, TMessage extends ErrorMessage<IsoWeekIssue<TInput$1>> | undefined> extends BaseValidation<TInput$1, TInput$1, IsoWeekIssue<TInput$1>> {
  /**
  * The action type.
  */
  readonly type: "iso_week";
  /**
  * The action reference.
  */
  readonly reference: typeof isoWeek;
  /**
  * The expected property.
  */
  readonly expects: null;
  /**
  * The ISO week regex.
  */
  readonly requirement: RegExp;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates an [ISO week](https://en.wikipedia.org/wiki/ISO_8601) validation action.
*
* Format: yyyy-Www
*
* Hint: The regex used cannot validate the maximum number of weeks based on
* the year. For example, "2021W53" is valid although 2021 has only 52 weeks.
*
* @returns An ISO week action.
*/
declare function isoWeek<TInput$1 extends string>(): IsoWeekAction<TInput$1, undefined>;
/**
* Creates an [ISO week](https://en.wikipedia.org/wiki/ISO_8601) validation action.
*
* Format: yyyy-Www
*
* Hint: The regex used cannot validate the maximum number of weeks based on
* the year. For example, "2021W53" is valid although 2021 has only 52 weeks.
*
* @param message The error message.
*
* @returns An ISO week action.
*/
declare function isoWeek<TInput$1 extends string, const TMessage extends ErrorMessage<IsoWeekIssue<TInput$1>> | undefined>(message: TMessage): IsoWeekAction<TInput$1, TMessage>;
//#endregion
//#region src/actions/jwsCompact/jwsCompact.d.ts
/**
* JWS compact issue interface.
*
* @beta
*/
interface JwsCompactIssue<TInput$1 extends string> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "jws_compact";
  /**
  * The expected property.
  */
  readonly expected: null;
  /**
  * The received property.
  */
  readonly received: `"${string}"`;
  /**
  * The JWS compact regex.
  */
  readonly requirement: RegExp;
}
/**
* JWS compact action interface.
*
* @beta
*/
interface JwsCompactAction<TInput$1 extends string, TMessage extends ErrorMessage<JwsCompactIssue<TInput$1>> | undefined> extends BaseValidation<TInput$1, TInput$1, JwsCompactIssue<TInput$1>> {
  /**
  * The action type.
  */
  readonly type: "jws_compact";
  /**
  * The action reference.
  */
  readonly reference: typeof jwsCompact;
  /**
  * The expected property.
  */
  readonly expects: null;
  /**
  * The JWS compact regex.
  */
  readonly requirement: RegExp;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a [JWS compact serialization](https://datatracker.ietf.org/doc/html/rfc7515#section-3.1)
* validation action.
*
* Hint: This validation action only checks the three-part compact string shape
* with unpadded Base64URL-like segments. It does not decode the segments,
* verify the signature, or validate claims.
*
* @returns A JWS compact action.
*
* @beta
*/
declare function jwsCompact<TInput$1 extends string>(): JwsCompactAction<TInput$1, undefined>;
/**
* Creates a [JWS compact serialization](https://datatracker.ietf.org/doc/html/rfc7515#section-3.1)
* validation action.
*
* Hint: This validation action only checks the three-part compact string shape
* with unpadded Base64URL-like segments. It does not decode the segments,
* verify the signature, or validate claims.
*
* @param message The error message.
*
* @returns A JWS compact action.
*
* @beta
*/
declare function jwsCompact<TInput$1 extends string, const TMessage extends ErrorMessage<JwsCompactIssue<TInput$1>> | undefined>(message: TMessage): JwsCompactAction<TInput$1, TMessage>;
//#endregion
//#region src/actions/length/length.d.ts
/**
* Length issue interface.
*/
interface LengthIssue<TInput$1 extends LengthInput, TRequirement extends number> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "length";
  /**
  * The expected property.
  */
  readonly expected: `${TRequirement}`;
  /**
  * The received property.
  */
  readonly received: `${number}`;
  /**
  * The required length.
  */
  readonly requirement: TRequirement;
}
/**
* Length action interface.
*/
interface LengthAction<TInput$1 extends LengthInput, TRequirement extends number, TMessage extends ErrorMessage<LengthIssue<TInput$1, TRequirement>> | undefined> extends BaseValidation<TInput$1, TInput$1, LengthIssue<TInput$1, TRequirement>> {
  /**
  * The action type.
  */
  readonly type: "length";
  /**
  * The action reference.
  */
  readonly reference: typeof length;
  /**
  * The expected property.
  */
  readonly expects: `${TRequirement}`;
  /**
  * The required length.
  */
  readonly requirement: TRequirement;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a length validation action.
*
* @param requirement The required length.
*
* @returns A length action.
*/
declare function length<TInput$1 extends LengthInput, const TRequirement extends number>(requirement: TRequirement): LengthAction<TInput$1, TRequirement, undefined>;
/**
* Creates a length validation action.
*
* @param requirement The required length.
* @param message The error message.
*
* @returns A length action.
*/
declare function length<TInput$1 extends LengthInput, const TRequirement extends number, const TMessage extends ErrorMessage<LengthIssue<TInput$1, TRequirement>> | undefined>(requirement: TRequirement, message: TMessage): LengthAction<TInput$1, TRequirement, TMessage>;
//#endregion
//#region src/actions/ltValue/ltValue.d.ts
/**
* Less than value issue type.
*/
interface LtValueIssue<TInput$1 extends ValueInput, TRequirement extends TInput$1> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "lt_value";
  /**
  * The expected property.
  */
  readonly expected: `<${string}`;
  /**
  * The less than value.
  */
  readonly requirement: TRequirement;
}
/**
* Less than value action type.
*/
interface LtValueAction<TInput$1 extends ValueInput, TRequirement extends TInput$1, TMessage extends ErrorMessage<LtValueIssue<TInput$1, TRequirement>> | undefined> extends BaseValidation<TInput$1, TInput$1, LtValueIssue<TInput$1, TRequirement>> {
  /**
  * The action type.
  */
  readonly type: "lt_value";
  /**
  * The action reference.
  */
  readonly reference: typeof ltValue;
  /**
  * The expected property.
  */
  readonly expects: `<${string}`;
  /**
  * The less than value.
  */
  readonly requirement: TRequirement;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a less than value validation action.
*
* @param requirement The less than value.
*
* @returns A less than value action.
*/
declare function ltValue<TInput$1 extends ValueInput, const TRequirement extends TInput$1>(requirement: TRequirement): LtValueAction<TInput$1, TRequirement, undefined>;
/**
* Creates a less than value validation action.
*
* @param requirement The less than value.
* @param message The error message.
*
* @returns A less than value action.
*/
declare function ltValue<TInput$1 extends ValueInput, const TRequirement extends TInput$1, const TMessage extends ErrorMessage<LtValueIssue<TInput$1, TRequirement>> | undefined>(requirement: TRequirement, message: TMessage): LtValueAction<TInput$1, TRequirement, TMessage>;
//#endregion
//#region src/actions/mac/mac.d.ts
/**
* MAC issue interface.
*/
interface MacIssue<TInput$1 extends string> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "mac";
  /**
  * The expected property.
  */
  readonly expected: null;
  /**
  * The received property.
  */
  readonly received: `"${string}"`;
  /**
  * The MAC regex.
  */
  readonly requirement: RegExp;
}
/**
* MAC action interface.
*/
interface MacAction<TInput$1 extends string, TMessage extends ErrorMessage<MacIssue<TInput$1>> | undefined> extends BaseValidation<TInput$1, TInput$1, MacIssue<TInput$1>> {
  /**
  * The action type.
  */
  readonly type: "mac";
  /**
  * The action reference.
  */
  readonly reference: typeof mac;
  /**
  * The expected property.
  */
  readonly expects: null;
  /**
  * The MAC regex.
  */
  readonly requirement: RegExp;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a [MAC address](https://en.wikipedia.org/wiki/MAC_address) validation action.
*
* @returns A MAC action.
*/
declare function mac<TInput$1 extends string>(): MacAction<TInput$1, undefined>;
/**
* Creates a [MAC address](https://en.wikipedia.org/wiki/MAC_address) validation action.
*
* @param message The error message.
*
* @returns A MAC action.
*/
declare function mac<TInput$1 extends string, const TMessage extends ErrorMessage<MacIssue<TInput$1>> | undefined>(message: TMessage): MacAction<TInput$1, TMessage>;
//#endregion
//#region src/actions/mac48/mac48.d.ts
/**
* 48-bit MAC issue interface.
*/
interface Mac48Issue<TInput$1 extends string> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "mac48";
  /**
  * The expected property.
  */
  readonly expected: null;
  /**
  * The received property.
  */
  readonly received: `"${string}"`;
  /**
  * The 48-bit MAC regex.
  */
  readonly requirement: RegExp;
}
/**
* 48-bit MAC action interface.
*/
interface Mac48Action<TInput$1 extends string, TMessage extends ErrorMessage<Mac48Issue<TInput$1>> | undefined> extends BaseValidation<TInput$1, TInput$1, Mac48Issue<TInput$1>> {
  /**
  * The action type.
  */
  readonly type: "mac48";
  /**
  * The action reference.
  */
  readonly reference: typeof mac48;
  /**
  * The expected property.
  */
  readonly expects: null;
  /**
  * The 48-bit MAC regex.
  */
  readonly requirement: RegExp;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a 48-bit [MAC address](https://en.wikipedia.org/wiki/MAC_address) validation action.
*
* @returns A 48-bit MAC action.
*/
declare function mac48<TInput$1 extends string>(): Mac48Action<TInput$1, undefined>;
/**
* Creates a 48-bit [MAC address](https://en.wikipedia.org/wiki/MAC_address) validation action.
*
* @param message The error message.
*
* @returns A 48-bit MAC action.
*/
declare function mac48<TInput$1 extends string, const TMessage extends ErrorMessage<Mac48Issue<TInput$1>> | undefined>(message: TMessage): Mac48Action<TInput$1, TMessage>;
//#endregion
//#region src/actions/mac64/mac64.d.ts
/**
* 64-bit MAC issue interface.
*/
interface Mac64Issue<TInput$1 extends string> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "mac64";
  /**
  * The expected property.
  */
  readonly expected: null;
  /**
  * The received property.
  */
  readonly received: `"${string}"`;
  /**
  * The 64-bit MAC regex.
  */
  readonly requirement: RegExp;
}
/**
* 64-bit MAC action interface.
*/
interface Mac64Action<TInput$1 extends string, TMessage extends ErrorMessage<Mac64Issue<TInput$1>> | undefined> extends BaseValidation<TInput$1, TInput$1, Mac64Issue<TInput$1>> {
  /**
  * The action type.
  */
  readonly type: "mac64";
  /**
  * The action reference.
  */
  readonly reference: typeof mac64;
  /**
  * The expected property.
  */
  readonly expects: null;
  /**
  * The 64-bit MAC regex.
  */
  readonly requirement: RegExp;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a 64-bit [MAC address](https://en.wikipedia.org/wiki/MAC_address) validation action.
*
* @returns A 64-bit MAC action.
*/
declare function mac64<TInput$1 extends string>(): Mac64Action<TInput$1, undefined>;
/**
* Creates a 64-bit [MAC address](https://en.wikipedia.org/wiki/MAC_address) validation action.
*
* @param message The error message.
*
* @returns A 64-bit MAC action.
*/
declare function mac64<TInput$1 extends string, const TMessage extends ErrorMessage<Mac64Issue<TInput$1>> | undefined>(message: TMessage): Mac64Action<TInput$1, TMessage>;
//#endregion
//#region src/actions/mapItems/mapItems.d.ts
/**
* Array action type.
*/
type ArrayAction$2<TInput$1 extends ArrayInput, TOutput$1> = (item: TInput$1[number], index: number, array: TInput$1) => TOutput$1;
/**
* Map items action interface.
*/
interface MapItemsAction<TInput$1 extends ArrayInput, TOutput$1> extends BaseTransformation<TInput$1, TOutput$1[], never> {
  /**
  * The action type.
  */
  readonly type: "map_items";
  /**
  * The action reference.
  */
  readonly reference: typeof mapItems;
  /**
  * The map items operation.
  */
  readonly operation: ArrayAction$2<TInput$1, TOutput$1>;
}
/**
* Creates a map items transformation action.
*
* @param operation The map items operation.
*
* @returns A map items action.
*/
declare function mapItems<TInput$1 extends ArrayInput, TOutput$1>(operation: ArrayAction$2<TInput$1, TOutput$1>): MapItemsAction<TInput$1, TOutput$1>;
//#endregion
//#region src/actions/maxBytes/maxBytes.d.ts
/**
* Max bytes issue interface.
*/
interface MaxBytesIssue<TInput$1 extends string, TRequirement extends number> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "max_bytes";
  /**
  * The expected property.
  */
  readonly expected: `<=${TRequirement}`;
  /**
  * The received property.
  */
  readonly received: `${number}`;
  /**
  * The maximum bytes.
  */
  readonly requirement: TRequirement;
}
/**
* Max bytes action interface.
*/
interface MaxBytesAction<TInput$1 extends string, TRequirement extends number, TMessage extends ErrorMessage<MaxBytesIssue<TInput$1, TRequirement>> | undefined> extends BaseValidation<TInput$1, TInput$1, MaxBytesIssue<TInput$1, TRequirement>> {
  /**
  * The action type.
  */
  readonly type: "max_bytes";
  /**
  * The action reference.
  */
  readonly reference: typeof maxBytes;
  /**
  * The expected property.
  */
  readonly expects: `<=${TRequirement}`;
  /**
  * The maximum bytes.
  */
  readonly requirement: TRequirement;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a max [bytes](https://en.wikipedia.org/wiki/Byte) validation action.
*
* @param requirement The maximum bytes.
*
* @returns A max bytes action.
*/
declare function maxBytes<TInput$1 extends string, const TRequirement extends number>(requirement: TRequirement): MaxBytesAction<TInput$1, TRequirement, undefined>;
/**
* Creates a max [bytes](https://en.wikipedia.org/wiki/Byte) validation action.
*
* @param requirement The maximum bytes.
* @param message The error message.
*
* @returns A max bytes action.
*/
declare function maxBytes<TInput$1 extends string, const TRequirement extends number, const TMessage extends ErrorMessage<MaxBytesIssue<TInput$1, TRequirement>> | undefined>(requirement: TRequirement, message: TMessage): MaxBytesAction<TInput$1, TRequirement, TMessage>;
//#endregion
//#region src/actions/maxEntries/maxEntries.d.ts
/**
* Max entries issue interface.
*
* @beta
*/
interface MaxEntriesIssue<TInput$1 extends EntriesInput, TRequirement extends number> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "max_entries";
  /**
  * The expected property.
  */
  readonly expected: `<=${TRequirement}`;
  /**
  * The received property.
  */
  readonly received: `${number}`;
  /**
  * The maximum entries.
  */
  readonly requirement: TRequirement;
}
/**
* Max entries action interface.
*
* @beta
*/
interface MaxEntriesAction<TInput$1 extends EntriesInput, TRequirement extends number, TMessage extends ErrorMessage<MaxEntriesIssue<TInput$1, TRequirement>> | undefined> extends BaseValidation<TInput$1, TInput$1, MaxEntriesIssue<TInput$1, TRequirement>> {
  /**
  * The action type.
  */
  readonly type: "max_entries";
  /**
  * The action reference.
  */
  readonly reference: typeof maxEntries;
  /**
  * The expected property.
  */
  readonly expects: `<=${TRequirement}`;
  /**
  * The maximum entries.
  */
  readonly requirement: TRequirement;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a max entries validation action.
*
* @param requirement The maximum entries.
*
* @returns A max entries action.
*
* @beta
*/
declare function maxEntries<TInput$1 extends EntriesInput, const TRequirement extends number>(requirement: TRequirement): MaxEntriesAction<TInput$1, TRequirement, undefined>;
/**
* Creates a max entries validation action.
*
* @param requirement The maximum entries.
* @param message The error message.
*
* @returns A max entries action.
*
* @beta
*/
declare function maxEntries<TInput$1 extends EntriesInput, const TRequirement extends number, const TMessage extends ErrorMessage<MaxEntriesIssue<TInput$1, TRequirement>> | undefined>(requirement: TRequirement, message: TMessage): MaxEntriesAction<TInput$1, TRequirement, TMessage>;
//#endregion
//#region src/actions/maxGraphemes/maxGraphemes.d.ts
/**
* Max graphemes issue interface.
*/
interface MaxGraphemesIssue<TInput$1 extends string, TRequirement extends number> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "max_graphemes";
  /**
  * The expected property.
  */
  readonly expected: `<=${TRequirement}`;
  /**
  * The received property.
  */
  readonly received: `${number}`;
  /**
  * The maximum graphemes.
  */
  readonly requirement: TRequirement;
}
/**
* Max graphemes action interface.
*/
interface MaxGraphemesAction<TInput$1 extends string, TRequirement extends number, TMessage extends ErrorMessage<MaxGraphemesIssue<TInput$1, TRequirement>> | undefined> extends BaseValidation<TInput$1, TInput$1, MaxGraphemesIssue<TInput$1, TRequirement>> {
  /**
  * The action type.
  */
  readonly type: "max_graphemes";
  /**
  * The action reference.
  */
  readonly reference: typeof maxGraphemes;
  /**
  * The expected property.
  */
  readonly expects: `<=${TRequirement}`;
  /**
  * The maximum graphemes.
  */
  readonly requirement: TRequirement;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a max graphemes validation action.
*
* @param requirement The maximum graphemes.
*
* @returns A max graphemes action.
*/
declare function maxGraphemes<TInput$1 extends string, const TRequirement extends number>(requirement: TRequirement): MaxGraphemesAction<TInput$1, TRequirement, undefined>;
/**
* Creates a max graphemes validation action.
*
* @param requirement The maximum graphemes.
* @param message The error message.
*
* @returns A max graphemes action.
*/
declare function maxGraphemes<TInput$1 extends string, const TRequirement extends number, const TMessage extends ErrorMessage<MaxGraphemesIssue<TInput$1, TRequirement>> | undefined>(requirement: TRequirement, message: TMessage): MaxGraphemesAction<TInput$1, TRequirement, TMessage>;
//#endregion
//#region src/actions/maxLength/maxLength.d.ts
/**
* Max length issue interface.
*/
interface MaxLengthIssue<TInput$1 extends LengthInput, TRequirement extends number> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "max_length";
  /**
  * The expected property.
  */
  readonly expected: `<=${TRequirement}`;
  /**
  * The received property.
  */
  readonly received: `${number}`;
  /**
  * The maximum length.
  */
  readonly requirement: TRequirement;
}
/**
* Max length action interface.
*/
interface MaxLengthAction<TInput$1 extends LengthInput, TRequirement extends number, TMessage extends ErrorMessage<MaxLengthIssue<TInput$1, TRequirement>> | undefined> extends BaseValidation<TInput$1, TInput$1, MaxLengthIssue<TInput$1, TRequirement>> {
  /**
  * The action type.
  */
  readonly type: "max_length";
  /**
  * The action reference.
  */
  readonly reference: typeof maxLength;
  /**
  * The expected property.
  */
  readonly expects: `<=${TRequirement}`;
  /**
  * The maximum length.
  */
  readonly requirement: TRequirement;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a max length validation action.
*
* @param requirement The maximum length.
*
* @returns A max length action.
*/
declare function maxLength<TInput$1 extends LengthInput, const TRequirement extends number>(requirement: TRequirement): MaxLengthAction<TInput$1, TRequirement, undefined>;
/**
* Creates a max length validation action.
*
* @param requirement The maximum length.
* @param message The error message.
*
* @returns A max length action.
*/
declare function maxLength<TInput$1 extends LengthInput, const TRequirement extends number, const TMessage extends ErrorMessage<MaxLengthIssue<TInput$1, TRequirement>> | undefined>(requirement: TRequirement, message: TMessage): MaxLengthAction<TInput$1, TRequirement, TMessage>;
//#endregion
//#region src/actions/maxSize/maxSize.d.ts
/**
* Max size issue interface.
*/
interface MaxSizeIssue<TInput$1 extends SizeInput, TRequirement extends number> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "max_size";
  /**
  * The expected property.
  */
  readonly expected: `<=${TRequirement}`;
  /**
  * The received property.
  */
  readonly received: `${number}`;
  /**
  * The maximum size.
  */
  readonly requirement: TRequirement;
}
/**
* Max size action interface.
*/
interface MaxSizeAction<TInput$1 extends SizeInput, TRequirement extends number, TMessage extends ErrorMessage<MaxSizeIssue<TInput$1, TRequirement>> | undefined> extends BaseValidation<TInput$1, TInput$1, MaxSizeIssue<TInput$1, TRequirement>> {
  /**
  * The action type.
  */
  readonly type: "max_size";
  /**
  * The action reference.
  */
  readonly reference: typeof maxSize;
  /**
  * The expected property.
  */
  readonly expects: `<=${TRequirement}`;
  /**
  * The maximum size.
  */
  readonly requirement: TRequirement;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a max size validation action.
*
* @param requirement The maximum size.
*
* @returns A max size action.
*/
declare function maxSize<TInput$1 extends SizeInput, const TRequirement extends number>(requirement: TRequirement): MaxSizeAction<TInput$1, TRequirement, undefined>;
/**
* Creates a max size validation action.
*
* @param requirement The maximum size.
* @param message The error message.
*
* @returns A max size action.
*/
declare function maxSize<TInput$1 extends SizeInput, const TRequirement extends number, const TMessage extends ErrorMessage<MaxSizeIssue<TInput$1, TRequirement>> | undefined>(requirement: TRequirement, message: TMessage): MaxSizeAction<TInput$1, TRequirement, TMessage>;
//#endregion
//#region src/actions/maxValue/maxValue.d.ts
/**
* Max value issue interface.
*/
interface MaxValueIssue<TInput$1 extends ValueInput, TRequirement extends ValueInput> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "max_value";
  /**
  * The expected property.
  */
  readonly expected: `<=${string}`;
  /**
  * The maximum value.
  */
  readonly requirement: TRequirement;
}
/**
* Max value action interface.
*/
interface MaxValueAction<TInput$1 extends ValueInput, TRequirement extends TInput$1, TMessage extends ErrorMessage<MaxValueIssue<TInput$1, TRequirement>> | undefined> extends BaseValidation<TInput$1, TInput$1, MaxValueIssue<TInput$1, TRequirement>> {
  /**
  * The action type.
  */
  readonly type: "max_value";
  /**
  * The action reference.
  */
  readonly reference: typeof maxValue;
  /**
  * The expected property.
  */
  readonly expects: `<=${string}`;
  /**
  * The maximum value.
  */
  readonly requirement: TRequirement;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a max value validation action.
*
* @param requirement The maximum value.
*
* @returns A max value action.
*/
declare function maxValue<TInput$1 extends ValueInput, const TRequirement extends TInput$1>(requirement: TRequirement): MaxValueAction<TInput$1, TRequirement, undefined>;
/**
* Creates a max value validation action.
*
* @param requirement The maximum value.
* @param message The error message.
*
* @returns A max value action.
*/
declare function maxValue<TInput$1 extends ValueInput, const TRequirement extends TInput$1, const TMessage extends ErrorMessage<MaxValueIssue<TInput$1, TRequirement>> | undefined>(requirement: TRequirement, message: TMessage): MaxValueAction<TInput$1, TRequirement, TMessage>;
//#endregion
//#region src/actions/maxWords/maxWords.d.ts
/**
* Max words issue interface.
*/
interface MaxWordsIssue<TInput$1 extends string, TRequirement extends number> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "max_words";
  /**
  * The expected property.
  */
  readonly expected: `<=${TRequirement}`;
  /**
  * The received property.
  */
  readonly received: `${number}`;
  /**
  * The maximum words.
  */
  readonly requirement: TRequirement;
}
/**
* Max words action interface.
*/
interface MaxWordsAction<TInput$1 extends string, TLocales extends Intl.LocalesArgument, TRequirement extends number, TMessage extends ErrorMessage<MaxWordsIssue<TInput$1, TRequirement>> | undefined> extends BaseValidation<TInput$1, TInput$1, MaxWordsIssue<TInput$1, TRequirement>> {
  /**
  * The action type.
  */
  readonly type: "max_words";
  /**
  * The action reference.
  */
  readonly reference: typeof maxWords;
  /**
  * The expected property.
  */
  readonly expects: `<=${TRequirement}`;
  /**
  * The locales to be used.
  */
  readonly locales: TLocales;
  /**
  * The maximum words.
  */
  readonly requirement: TRequirement;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a max words validation action.
*
* @param locales The locales to be used.
* @param requirement The maximum words.
*
* @returns A max words action.
*/
declare function maxWords<TInput$1 extends string, TLocales extends Intl.LocalesArgument, const TRequirement extends number>(locales: TLocales, requirement: TRequirement): MaxWordsAction<TInput$1, TLocales, TRequirement, undefined>;
/**
* Creates a max words validation action.
*
* @param locales The locales to be used.
* @param requirement The maximum words.
* @param message The error message.
*
* @returns A max words action.
*/
declare function maxWords<TInput$1 extends string, TLocales extends Intl.LocalesArgument, const TRequirement extends number, const TMessage extends ErrorMessage<MaxWordsIssue<TInput$1, TRequirement>> | undefined>(locales: TLocales, requirement: TRequirement, message: TMessage): MaxWordsAction<TInput$1, TLocales, TRequirement, TMessage>;
//#endregion
//#region src/actions/metadata/metadata.d.ts
/**
* Metadata action interface.
*/
interface MetadataAction<TInput$1, TMetadata extends Record<string, unknown>> extends BaseMetadata<TInput$1> {
  /**
  * The action type.
  */
  readonly type: "metadata";
  /**
  * The action reference.
  */
  readonly reference: typeof metadata;
  /**
  * The metadata object.
  */
  readonly metadata: TMetadata;
}
/**
* Creates a custom metadata action.
*
* @param metadata_ The metadata object.
*
* @returns A metadata action.
*/
declare function metadata<TInput$1, const TMetadata extends Record<string, unknown>>(metadata_: TMetadata): MetadataAction<TInput$1, TMetadata>;
//#endregion
//#region src/actions/mimeType/mimeType.d.ts
/**
* Requirement type.
*/
type Requirement = readonly `${string}/${string}`[];
/**
* MIME type issue interface.
*/
interface MimeTypeIssue<TInput$1 extends Blob, TRequirement extends Requirement> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "mime_type";
  /**
  * The expected input.
  */
  readonly expected: string;
  /**
  * The received input.
  */
  readonly received: `"${string}"`;
  /**
  * The MIME types.
  */
  readonly requirement: TRequirement;
}
/**
* MIME type action interface.
*/
interface MimeTypeAction<TInput$1 extends Blob, TRequirement extends Requirement, TMessage extends ErrorMessage<MimeTypeIssue<TInput$1, TRequirement>> | undefined> extends BaseValidation<TInput$1, TInput$1, MimeTypeIssue<TInput$1, TRequirement>> {
  /**
  * The action type.
  */
  readonly type: "mime_type";
  /**
  * The action reference.
  */
  readonly reference: typeof mimeType;
  /**
  * The expected property.
  */
  readonly expects: string;
  /**
  * The MIME types.
  */
  readonly requirement: TRequirement;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a [MIME type](https://developer.mozilla.org/docs/Web/HTTP/Basics_of_HTTP/MIME_types) validation action.
*
* @param requirement The MIME types.
*
* @returns A MIME type action.
*/
declare function mimeType<TInput$1 extends Blob, const TRequirement extends Requirement>(requirement: TRequirement): MimeTypeAction<TInput$1, TRequirement, undefined>;
/**
* Creates a [MIME type](https://developer.mozilla.org/docs/Web/HTTP/Basics_of_HTTP/MIME_types) validation action.
*
* @param requirement The MIME types.
* @param message The error message.
*
* @returns A MIME type action.
*/
declare function mimeType<TInput$1 extends Blob, const TRequirement extends Requirement, const TMessage extends ErrorMessage<MimeTypeIssue<TInput$1, TRequirement>> | undefined>(requirement: TRequirement, message: TMessage): MimeTypeAction<TInput$1, TRequirement, TMessage>;
//#endregion
//#region src/actions/minBytes/minBytes.d.ts
/**
* Min bytes issue interface.
*/
interface MinBytesIssue<TInput$1 extends string, TRequirement extends number> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "min_bytes";
  /**
  * The expected property.
  */
  readonly expected: `>=${TRequirement}`;
  /**
  * The received property.
  */
  readonly received: `${number}`;
  /**
  * The minimum bytes.
  */
  readonly requirement: TRequirement;
}
/**
* Min bytes action interface.
*/
interface MinBytesAction<TInput$1 extends string, TRequirement extends number, TMessage extends ErrorMessage<MinBytesIssue<TInput$1, TRequirement>> | undefined> extends BaseValidation<TInput$1, TInput$1, MinBytesIssue<TInput$1, TRequirement>> {
  /**
  * The action type.
  */
  readonly type: "min_bytes";
  /**
  * The action reference.
  */
  readonly reference: typeof minBytes;
  /**
  * The expected property.
  */
  readonly expects: `>=${TRequirement}`;
  /**
  * The minimum bytes.
  */
  readonly requirement: TRequirement;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a min [bytes](https://en.wikipedia.org/wiki/Byte) validation action.
*
* @param requirement The minimum bytes.
*
* @returns A min bytes action.
*/
declare function minBytes<TInput$1 extends string, const TRequirement extends number>(requirement: TRequirement): MinBytesAction<TInput$1, TRequirement, undefined>;
/**
* Creates a min [bytes](https://en.wikipedia.org/wiki/Byte) validation action.
*
* @param requirement The minimum bytes.
* @param message The error message.
*
* @returns A min bytes action.
*/
declare function minBytes<TInput$1 extends string, const TRequirement extends number, const TMessage extends ErrorMessage<MinBytesIssue<TInput$1, TRequirement>> | undefined>(requirement: TRequirement, message: TMessage): MinBytesAction<TInput$1, TRequirement, TMessage>;
//#endregion
//#region src/actions/minEntries/minEntries.d.ts
/**
* Min entries issue interface.
*
* @beta
*/
interface MinEntriesIssue<TInput$1 extends EntriesInput, TRequirement extends number> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "min_entries";
  /**
  * The expected property.
  */
  readonly expected: `>=${TRequirement}`;
  /**
  * The received property.
  */
  readonly received: `${number}`;
  /**
  * The minimum entries.
  */
  readonly requirement: TRequirement;
}
/**
* Min entries action interface.
*
* @beta
*/
interface MinEntriesAction<TInput$1 extends EntriesInput, TRequirement extends number, TMessage extends ErrorMessage<MinEntriesIssue<TInput$1, TRequirement>> | undefined> extends BaseValidation<TInput$1, TInput$1, MinEntriesIssue<TInput$1, TRequirement>> {
  /**
  * The action type.
  */
  readonly type: "min_entries";
  /**
  * The action reference.
  */
  readonly reference: typeof minEntries;
  /**
  * The expected property.
  */
  readonly expects: `>=${TRequirement}`;
  /**
  * The minimum entries.
  */
  readonly requirement: TRequirement;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a min entries validation action.
*
* @param requirement The minimum entries.
*
* @returns A min entries action.
*
* @beta
*/
declare function minEntries<TInput$1 extends EntriesInput, const TRequirement extends number>(requirement: TRequirement): MinEntriesAction<TInput$1, TRequirement, undefined>;
/**
* Creates a min entries validation action.
*
* @param requirement The minimum entries.
* @param message The error message.
*
* @returns A min entries action.
*
* @beta
*/
declare function minEntries<TInput$1 extends EntriesInput, const TRequirement extends number, const TMessage extends ErrorMessage<MinEntriesIssue<TInput$1, TRequirement>> | undefined>(requirement: TRequirement, message: TMessage): MinEntriesAction<TInput$1, TRequirement, TMessage>;
//#endregion
//#region src/actions/minGraphemes/minGraphemes.d.ts
/**
* Min graphemes issue interface.
*/
interface MinGraphemesIssue<TInput$1 extends string, TRequirement extends number> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "min_graphemes";
  /**
  * The expected property.
  */
  readonly expected: `>=${TRequirement}`;
  /**
  * The received property.
  */
  readonly received: `${number}`;
  /**
  * The minimum graphemes.
  */
  readonly requirement: TRequirement;
}
/**
* Min graphemes action interface.
*/
interface MinGraphemesAction<TInput$1 extends string, TRequirement extends number, TMessage extends ErrorMessage<MinGraphemesIssue<TInput$1, TRequirement>> | undefined> extends BaseValidation<TInput$1, TInput$1, MinGraphemesIssue<TInput$1, TRequirement>> {
  /**
  * The action type.
  */
  readonly type: "min_graphemes";
  /**
  * The action reference.
  */
  readonly reference: typeof minGraphemes;
  /**
  * The expected property.
  */
  readonly expects: `>=${TRequirement}`;
  /**
  * The minimum graphemes.
  */
  readonly requirement: TRequirement;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a min graphemes validation action.
*
* @param requirement The minimum graphemes.
*
* @returns A min graphemes action.
*/
declare function minGraphemes<TInput$1 extends string, const TRequirement extends number>(requirement: TRequirement): MinGraphemesAction<TInput$1, TRequirement, undefined>;
/**
* Creates a min graphemes validation action.
*
* @param requirement The minimum graphemes.
* @param message The error message.
*
* @returns A min graphemes action.
*/
declare function minGraphemes<TInput$1 extends string, const TRequirement extends number, const TMessage extends ErrorMessage<MinGraphemesIssue<TInput$1, TRequirement>> | undefined>(requirement: TRequirement, message: TMessage): MinGraphemesAction<TInput$1, TRequirement, TMessage>;
//#endregion
//#region src/actions/minLength/minLength.d.ts
/**
* Min length issue interface.
*/
interface MinLengthIssue<TInput$1 extends LengthInput, TRequirement extends number> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "min_length";
  /**
  * The expected property.
  */
  readonly expected: `>=${TRequirement}`;
  /**
  * The received property.
  */
  readonly received: `${number}`;
  /**
  * The minimum length.
  */
  readonly requirement: TRequirement;
}
/**
* Min length action interface.
*/
interface MinLengthAction<TInput$1 extends LengthInput, TRequirement extends number, TMessage extends ErrorMessage<MinLengthIssue<TInput$1, TRequirement>> | undefined> extends BaseValidation<TInput$1, TInput$1, MinLengthIssue<TInput$1, TRequirement>> {
  /**
  * The action type.
  */
  readonly type: "min_length";
  /**
  * The action reference.
  */
  readonly reference: typeof minLength;
  /**
  * The expected property.
  */
  readonly expects: `>=${TRequirement}`;
  /**
  * The minimum length.
  */
  readonly requirement: TRequirement;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a min length validation action.
*
* @param requirement The minimum length.
*
* @returns A min length action.
*/
declare function minLength<TInput$1 extends LengthInput, const TRequirement extends number>(requirement: TRequirement): MinLengthAction<TInput$1, TRequirement, undefined>;
/**
* Creates a min length validation action.
*
* @param requirement The minimum length.
* @param message The error message.
*
* @returns A min length action.
*/
declare function minLength<TInput$1 extends LengthInput, const TRequirement extends number, const TMessage extends ErrorMessage<MinLengthIssue<TInput$1, TRequirement>> | undefined>(requirement: TRequirement, message: TMessage): MinLengthAction<TInput$1, TRequirement, TMessage>;
//#endregion
//#region src/actions/minSize/minSize.d.ts
/**
* Min size issue interface.
*/
interface MinSizeIssue<TInput$1 extends SizeInput, TRequirement extends number> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "min_size";
  /**
  * The expected property.
  */
  readonly expected: `>=${TRequirement}`;
  /**
  * The received property.
  */
  readonly received: `${number}`;
  /**
  * The minimum size.
  */
  readonly requirement: TRequirement;
}
/**
* Min size action interface.
*/
interface MinSizeAction<TInput$1 extends SizeInput, TRequirement extends number, TMessage extends ErrorMessage<MinSizeIssue<TInput$1, TRequirement>> | undefined> extends BaseValidation<TInput$1, TInput$1, MinSizeIssue<TInput$1, TRequirement>> {
  /**
  * The action type.
  */
  readonly type: "min_size";
  /**
  * The action reference.
  */
  readonly reference: typeof minSize;
  /**
  * The expected property.
  */
  readonly expects: `>=${TRequirement}`;
  /**
  * The minimum size.
  */
  readonly requirement: TRequirement;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a min size validation action.
*
* @param requirement The minimum size.
*
* @returns A min size action.
*/
declare function minSize<TInput$1 extends SizeInput, const TRequirement extends number>(requirement: TRequirement): MinSizeAction<TInput$1, TRequirement, undefined>;
/**
* Creates a min size validation action.
*
* @param requirement The minimum size.
* @param message The error message.
*
* @returns A min size action.
*/
declare function minSize<TInput$1 extends SizeInput, const TRequirement extends number, const TMessage extends ErrorMessage<MinSizeIssue<TInput$1, TRequirement>> | undefined>(requirement: TRequirement, message: TMessage): MinSizeAction<TInput$1, TRequirement, TMessage>;
//#endregion
//#region src/actions/minValue/minValue.d.ts
/**
* Min value issue interface.
*/
interface MinValueIssue<TInput$1 extends ValueInput, TRequirement extends ValueInput> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "min_value";
  /**
  * The expected property.
  */
  readonly expected: `>=${string}`;
  /**
  * The minimum value.
  */
  readonly requirement: TRequirement;
}
/**
* Min value action interface.
*/
interface MinValueAction<TInput$1 extends ValueInput, TRequirement extends TInput$1, TMessage extends ErrorMessage<MinValueIssue<TInput$1, TRequirement>> | undefined> extends BaseValidation<TInput$1, TInput$1, MinValueIssue<TInput$1, TRequirement>> {
  /**
  * The action type.
  */
  readonly type: "min_value";
  /**
  * The action reference.
  */
  readonly reference: typeof minValue;
  /**
  * The expected property.
  */
  readonly expects: `>=${string}`;
  /**
  * The minimum value.
  */
  readonly requirement: TRequirement;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a min value validation action.
*
* @param requirement The minimum value.
*
* @returns A min value action.
*/
declare function minValue<TInput$1 extends ValueInput, const TRequirement extends TInput$1>(requirement: TRequirement): MinValueAction<TInput$1, TRequirement, undefined>;
/**
* Creates a min value validation action.
*
* @param requirement The minimum value.
* @param message The error message.
*
* @returns A min value action.
*/
declare function minValue<TInput$1 extends ValueInput, const TRequirement extends TInput$1, const TMessage extends ErrorMessage<MinValueIssue<TInput$1, TRequirement>> | undefined>(requirement: TRequirement, message: TMessage): MinValueAction<TInput$1, TRequirement, TMessage>;
//#endregion
//#region src/actions/minWords/minWords.d.ts
/**
* Min words issue interface.
*/
interface MinWordsIssue<TInput$1 extends string, TRequirement extends number> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "min_words";
  /**
  * The expected property.
  */
  readonly expected: `>=${TRequirement}`;
  /**
  * The received property.
  */
  readonly received: `${number}`;
  /**
  * The minimum words.
  */
  readonly requirement: TRequirement;
}
/**
* Min words action interface.
*/
interface MinWordsAction<TInput$1 extends string, TLocales extends Intl.LocalesArgument, TRequirement extends number, TMessage extends ErrorMessage<MinWordsIssue<TInput$1, TRequirement>> | undefined> extends BaseValidation<TInput$1, TInput$1, MinWordsIssue<TInput$1, TRequirement>> {
  /**
  * The action type.
  */
  readonly type: "min_words";
  /**
  * The action reference.
  */
  readonly reference: typeof minWords;
  /**
  * The expected property.
  */
  readonly expects: `>=${TRequirement}`;
  /**
  * The locales to be used.
  */
  readonly locales: TLocales;
  /**
  * The minimum words.
  */
  readonly requirement: TRequirement;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a min words validation action.
*
* @param locales The locales to be used.
* @param requirement The minimum words.
*
* @returns A min words action.
*/
declare function minWords<TInput$1 extends string, TLocales extends Intl.LocalesArgument, const TRequirement extends number>(locales: TLocales, requirement: TRequirement): MinWordsAction<TInput$1, TLocales, TRequirement, undefined>;
/**
* Creates a min words validation action.
*
* @param locales The locales to be used.
* @param requirement The minimum words.
* @param message The error message.
*
* @returns A min words action.
*/
declare function minWords<TInput$1 extends string, TLocales extends Intl.LocalesArgument, const TRequirement extends number, const TMessage extends ErrorMessage<MinWordsIssue<TInput$1, TRequirement>> | undefined>(locales: TLocales, requirement: TRequirement, message: TMessage): MinWordsAction<TInput$1, TLocales, TRequirement, TMessage>;
//#endregion
//#region src/actions/multipleOf/multipleOf.d.ts
/**
* Input type
*/
type Input = number | bigint;
/**
* Multiple of issue interface.
*/
interface MultipleOfIssue<TInput$1 extends Input, TRequirement extends Input> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "multiple_of";
  /**
  * The expected property.
  */
  readonly expected: `%${TRequirement}`;
  /**
  * The received property.
  */
  readonly received: `${TInput$1}`;
  /**
  * The divisor.
  */
  readonly requirement: TRequirement;
}
/**
* Multiple of action interface.
*/
interface MultipleOfAction<TInput$1 extends Input, TRequirement extends Input, TMessage extends ErrorMessage<MultipleOfIssue<TInput$1, TRequirement>> | undefined> extends BaseValidation<TInput$1, TInput$1, MultipleOfIssue<TInput$1, TRequirement>> {
  /**
  * The action type.
  */
  readonly type: "multiple_of";
  /**
  * The action reference.
  */
  readonly reference: typeof multipleOf;
  /**
  * The expected property.
  */
  readonly expects: `%${TRequirement}`;
  /**
  * The divisor.
  */
  readonly requirement: TRequirement;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a [multiple](https://en.wikipedia.org/wiki/Multiple_(mathematics)) of validation action.
*
* @param requirement The divisor.
*
* @returns A multiple of action.
*/
declare function multipleOf<TInput$1 extends number, const TRequirement extends number>(requirement: TRequirement): MultipleOfAction<TInput$1, TRequirement, undefined>;
/**
* Creates a [multiple](https://en.wikipedia.org/wiki/Multiple_(mathematics)) of validation action.
*
* @param requirement The divisor.
*
* @returns A multiple of action.
*/
declare function multipleOf<TInput$1 extends bigint, const TRequirement extends bigint>(requirement: TRequirement): MultipleOfAction<TInput$1, TRequirement, undefined>;
/**
* Creates a [multiple](https://en.wikipedia.org/wiki/Multiple_(mathematics)) of validation action.
*
* @param requirement The divisor.
* @param message The error message.
*
* @returns A multiple of action.
*/
declare function multipleOf<TInput$1 extends number, const TRequirement extends number, const TMessage extends ErrorMessage<MultipleOfIssue<TInput$1, TRequirement>> | undefined>(requirement: TRequirement, message: TMessage): MultipleOfAction<TInput$1, TRequirement, TMessage>;
/**
* Creates a [multiple](https://en.wikipedia.org/wiki/Multiple_(mathematics)) of validation action.
*
* @param requirement The divisor.
* @param message The error message.
*
* @returns A multiple of action.
*/
declare function multipleOf<TInput$1 extends bigint, const TRequirement extends bigint, const TMessage extends ErrorMessage<MultipleOfIssue<TInput$1, TRequirement>> | undefined>(requirement: TRequirement, message: TMessage): MultipleOfAction<TInput$1, TRequirement, TMessage>;
//#endregion
//#region src/actions/nanoid/nanoid.d.ts
/**
* Nano ID issue interface.
*/
interface NanoIdIssue<TInput$1 extends string> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "nanoid";
  /**
  * The expected property.
  */
  readonly expected: null;
  /**
  * The received property.
  */
  readonly received: string;
  /**
  * The Nano ID regex.
  */
  readonly requirement: RegExp;
}
/**
* Nano ID issue type.
*
* @deprecated Use `NanoIdIssue` instead.
*/
type NanoIDIssue<TInput$1 extends string> = NanoIdIssue<TInput$1>;
/**
* Nano ID action interface.
*/
interface NanoIdAction<TInput$1 extends string, TMessage extends ErrorMessage<NanoIdIssue<TInput$1>> | undefined> extends BaseValidation<TInput$1, TInput$1, NanoIdIssue<TInput$1>> {
  /**
  * The action type.
  */
  readonly type: "nanoid";
  /**
  * The action reference.
  */
  readonly reference: typeof nanoid;
  /**
  * The expected property.
  */
  readonly expects: null;
  /**
  * The Nano ID regex.
  */
  readonly requirement: RegExp;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Nano ID action type.
*
* @deprecated Use `NanoIdAction` instead.
*/
type NanoIDAction<TInput$1 extends string, TMessage extends ErrorMessage<NanoIdIssue<TInput$1>> | undefined> = NanoIdAction<TInput$1, TMessage>;
/**
* Creates a [Nano ID](https://github.com/ai/nanoid) validation action.
*
* @returns A Nano ID action.
*/
declare function nanoid<TInput$1 extends string>(): NanoIdAction<TInput$1, undefined>;
/**
* Creates a [Nano ID](https://github.com/ai/nanoid) validation action.
*
* @param message The error message.
*
* @returns A Nano ID action.
*/
declare function nanoid<TInput$1 extends string, const TMessage extends ErrorMessage<NanoIdIssue<TInput$1>> | undefined>(message: TMessage): NanoIdAction<TInput$1, TMessage>;
//#endregion
//#region src/actions/nonEmpty/nonEmpty.d.ts
/**
* Non empty issue interface.
*/
interface NonEmptyIssue<TInput$1 extends LengthInput> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "non_empty";
  /**
  * The expected input.
  */
  readonly expected: "!0";
  /**
  * The received input.
  */
  readonly received: "0";
}
/**
* Non empty action interface.
*/
interface NonEmptyAction<TInput$1 extends LengthInput, TMessage extends ErrorMessage<NonEmptyIssue<TInput$1>> | undefined> extends BaseValidation<TInput$1, TInput$1, NonEmptyIssue<TInput$1>> {
  /**
  * The action type.
  */
  readonly type: "non_empty";
  /**
  * The action reference.
  */
  readonly reference: typeof nonEmpty;
  /**
  * The expected property.
  */
  readonly expects: "!0";
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a non-empty validation action.
*
* @returns A non-empty action.
*/
declare function nonEmpty<TInput$1 extends LengthInput>(): NonEmptyAction<TInput$1, undefined>;
/**
* Creates a non-empty validation action.
*
* @param message The error message.
*
* @returns A non-empty action.
*/
declare function nonEmpty<TInput$1 extends LengthInput, const TMessage extends ErrorMessage<NonEmptyIssue<TInput$1>> | undefined>(message: TMessage): NonEmptyAction<TInput$1, TMessage>;
//#endregion
//#region src/actions/normalize/normalize.d.ts
/**
* Normalize form type.
*/
type NormalizeForm = "NFC" | "NFD" | "NFKC" | "NFKD";
/**
* Normalize action interface.
*/
interface NormalizeAction<TForm extends NormalizeForm | undefined> extends BaseTransformation<string, string, never> {
  /**
  * The action type.
  */
  readonly type: "normalize";
  /**
  * The action reference.
  */
  readonly reference: typeof normalize;
  /**
  * The normalization form.
  */
  readonly form: TForm;
}
/**
* Creates a normalize transformation action.
*
* @returns A normalize action.
*/
declare function normalize(): NormalizeAction<undefined>;
/**
* Creates a normalize transformation action.
*
* @param form The normalization form.
*
* @returns A normalize action.
*/
declare function normalize<TForm extends NormalizeForm | undefined>(form: TForm): NormalizeAction<TForm>;
//#endregion
//#region src/actions/notBytes/notBytes.d.ts
/**
* Not bytes issue interface.
*/
interface NotBytesIssue<TInput$1 extends string, TRequirement extends number> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "not_bytes";
  /**
  * The expected property.
  */
  readonly expected: `!${TRequirement}`;
  /**
  * The received property.
  */
  readonly received: `${number}`;
  /**
  * The not required bytes.
  */
  readonly requirement: TRequirement;
}
/**
* Not bytes action interface.
*/
interface NotBytesAction<TInput$1 extends string, TRequirement extends number, TMessage extends ErrorMessage<NotBytesIssue<TInput$1, TRequirement>> | undefined> extends BaseValidation<TInput$1, TInput$1, NotBytesIssue<TInput$1, TRequirement>> {
  /**
  * The action type.
  */
  readonly type: "not_bytes";
  /**
  * The action reference.
  */
  readonly reference: typeof notBytes;
  /**
  * The expected property.
  */
  readonly expects: `!${TRequirement}`;
  /**
  * The not required bytes.
  */
  readonly requirement: TRequirement;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a not [bytes](https://en.wikipedia.org/wiki/Byte) validation action.
*
* @param requirement The not required bytes.
*
* @returns A not bytes action.
*/
declare function notBytes<TInput$1 extends string, const TRequirement extends number>(requirement: TRequirement): NotBytesAction<TInput$1, TRequirement, undefined>;
/**
* Creates a not [bytes](https://en.wikipedia.org/wiki/Byte) validation action.
*
* @param requirement The not required bytes.
* @param message The error message.
*
* @returns A not bytes action.
*/
declare function notBytes<TInput$1 extends string, const TRequirement extends number, const TMessage extends ErrorMessage<NotBytesIssue<TInput$1, TRequirement>> | undefined>(requirement: TRequirement, message: TMessage): NotBytesAction<TInput$1, TRequirement, TMessage>;
//#endregion
//#region src/actions/notEntries/notEntries.d.ts
/**
* Not entries issue interface.
*
* @beta
*/
interface NotEntriesIssue<TInput$1 extends EntriesInput, TRequirement extends number> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "not_entries";
  /**
  * The expected property.
  */
  readonly expected: `!${TRequirement}`;
  /**
  * The received property.
  */
  readonly received: `${number}`;
  /**
  * The not required entries.
  */
  readonly requirement: TRequirement;
}
/**
* Not entries action interface.
*
* @beta
*/
interface NotEntriesAction<TInput$1 extends EntriesInput, TRequirement extends number, TMessage extends ErrorMessage<NotEntriesIssue<TInput$1, TRequirement>> | undefined> extends BaseValidation<TInput$1, TInput$1, NotEntriesIssue<TInput$1, TRequirement>> {
  /**
  * The action type.
  */
  readonly type: "not_entries";
  /**
  * The action reference.
  */
  readonly reference: typeof notEntries;
  /**
  * The expected property.
  */
  readonly expects: `!${TRequirement}`;
  /**
  * The not required entries.
  */
  readonly requirement: TRequirement;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a not entries validation action.
*
* @param requirement The not required entries.
*
* @returns A not entries action.
*
* @beta
*/
declare function notEntries<TInput$1 extends EntriesInput, const TRequirement extends number>(requirement: TRequirement): NotEntriesAction<TInput$1, TRequirement, undefined>;
/**
* Creates a not entries validation action.
*
* @param requirement The not required entries.
* @param message The error message.
*
* @returns A not entries action.
*
* @beta
*/
declare function notEntries<TInput$1 extends EntriesInput, const TRequirement extends number, const TMessage extends ErrorMessage<NotEntriesIssue<TInput$1, TRequirement>> | undefined>(requirement: TRequirement, message: TMessage): NotEntriesAction<TInput$1, TRequirement, TMessage>;
//#endregion
//#region src/actions/notGraphemes/notGraphemes.d.ts
/**
* Not graphemes issue interface.
*/
interface NotGraphemesIssue<TInput$1 extends string, TRequirement extends number> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "not_graphemes";
  /**
  * The expected property.
  */
  readonly expected: `!${TRequirement}`;
  /**
  * The received property.
  */
  readonly received: `${number}`;
  /**
  * The not required graphemes.
  */
  readonly requirement: TRequirement;
}
/**
* Not graphemes action interface.
*/
interface NotGraphemesAction<TInput$1 extends string, TRequirement extends number, TMessage extends ErrorMessage<NotGraphemesIssue<TInput$1, TRequirement>> | undefined> extends BaseValidation<TInput$1, TInput$1, NotGraphemesIssue<TInput$1, TRequirement>> {
  /**
  * The action type.
  */
  readonly type: "not_graphemes";
  /**
  * The action reference.
  */
  readonly reference: typeof notGraphemes;
  /**
  * The expected property.
  */
  readonly expects: `!${TRequirement}`;
  /**
  * The not required graphemes.
  */
  readonly requirement: TRequirement;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a not graphemes validation action.
*
* @param requirement The not required graphemes.
*
* @returns A not graphemes action.
*/
declare function notGraphemes<TInput$1 extends string, const TRequirement extends number>(requirement: TRequirement): NotGraphemesAction<TInput$1, TRequirement, undefined>;
/**
* Creates a not graphemes validation action.
*
* @param requirement The not required graphemes.
* @param message The error message.
*
* @returns A not graphemes action.
*/
declare function notGraphemes<TInput$1 extends string, const TRequirement extends number, const TMessage extends ErrorMessage<NotGraphemesIssue<TInput$1, TRequirement>> | undefined>(requirement: TRequirement, message: TMessage): NotGraphemesAction<TInput$1, TRequirement, TMessage>;
//#endregion
//#region src/actions/notLength/notLength.d.ts
/**
* Not length issue interface.
*/
interface NotLengthIssue<TInput$1 extends LengthInput, TRequirement extends number> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "not_length";
  /**
  * The expected property.
  */
  readonly expected: `!${TRequirement}`;
  /**
  * The received property.
  */
  readonly received: `${TRequirement}`;
  /**
  * The not required length.
  */
  readonly requirement: TRequirement;
}
/**
* Not length action interface.
*/
interface NotLengthAction<TInput$1 extends LengthInput, TRequirement extends number, TMessage extends ErrorMessage<NotLengthIssue<TInput$1, TRequirement>> | undefined> extends BaseValidation<TInput$1, TInput$1, NotLengthIssue<TInput$1, TRequirement>> {
  /**
  * The action type.
  */
  readonly type: "not_length";
  /**
  * The action reference.
  */
  readonly reference: typeof notLength;
  /**
  * The expected property.
  */
  readonly expects: `!${TRequirement}`;
  /**
  * The not required length.
  */
  readonly requirement: TRequirement;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a not length validation action.
*
* @param requirement The not required length.
*
* @returns A not length action.
*/
declare function notLength<TInput$1 extends LengthInput, const TRequirement extends number>(requirement: TRequirement): NotLengthAction<TInput$1, TRequirement, undefined>;
/**
* Creates a not length validation action.
*
* @param requirement The not required length.
* @param message The error message.
*
* @returns A not length action.
*/
declare function notLength<TInput$1 extends LengthInput, const TRequirement extends number, const TMessage extends ErrorMessage<NotLengthIssue<TInput$1, TRequirement>> | undefined>(requirement: TRequirement, message: TMessage): NotLengthAction<TInput$1, TRequirement, TMessage>;
//#endregion
//#region src/actions/notSize/notSize.d.ts
/**
* Not size issue interface.
*/
interface NotSizeIssue<TInput$1 extends SizeInput, TRequirement extends number> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "not_size";
  /**
  * The expected property.
  */
  readonly expected: `!${TRequirement}`;
  /**
  * The received property.
  */
  readonly received: `${TRequirement}`;
  /**
  * The not required size.
  */
  readonly requirement: TRequirement;
}
/**
* Not size action interface.
*/
interface NotSizeAction<TInput$1 extends SizeInput, TRequirement extends number, TMessage extends ErrorMessage<NotSizeIssue<TInput$1, TRequirement>> | undefined> extends BaseValidation<TInput$1, TInput$1, NotSizeIssue<TInput$1, TRequirement>> {
  /**
  * The action type.
  */
  readonly type: "not_size";
  /**
  * The action reference.
  */
  readonly reference: typeof notSize;
  /**
  * The expected property.
  */
  readonly expects: `!${TRequirement}`;
  /**
  * The not required size.
  */
  readonly requirement: TRequirement;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a not size validation action.
*
* @param requirement The not required size.
*
* @returns A not size action.
*/
declare function notSize<TInput$1 extends SizeInput, const TRequirement extends number>(requirement: TRequirement): NotSizeAction<TInput$1, TRequirement, undefined>;
/**
* Creates a not size validation action.
*
* @param requirement The not required size.
* @param message The error message.
*
* @returns A not size action.
*/
declare function notSize<TInput$1 extends SizeInput, const TRequirement extends number, const TMessage extends ErrorMessage<NotSizeIssue<TInput$1, TRequirement>> | undefined>(requirement: TRequirement, message: TMessage): NotSizeAction<TInput$1, TRequirement, TMessage>;
//#endregion
//#region src/actions/notValue/notValue.d.ts
/**
* Not value issue interface.
*/
interface NotValueIssue<TInput$1 extends ValueInput, TRequirement extends TInput$1> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "not_value";
  /**
  * The expected property.
  */
  readonly expected: `!${string}`;
  /**
  * The not required value.
  */
  readonly requirement: TRequirement;
}
/**
* Not value action interface.
*/
interface NotValueAction<TInput$1 extends ValueInput, TRequirement extends TInput$1, TMessage extends ErrorMessage<NotValueIssue<TInput$1, TRequirement>> | undefined> extends BaseValidation<TInput$1, TInput$1, NotValueIssue<TInput$1, TRequirement>> {
  /**
  * The action type.
  */
  readonly type: "not_value";
  /**
  * The action reference.
  */
  readonly reference: typeof notValue;
  /**
  * The expected property.
  */
  readonly expects: `!${string}`;
  /**
  * The not required value.
  */
  readonly requirement: TRequirement;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a not value validation action.
*
* @param requirement The not required value.
*
* @returns A not value action.
*/
declare function notValue<TInput$1 extends ValueInput, const TRequirement extends TInput$1>(requirement: TRequirement): NotValueAction<TInput$1, TRequirement, undefined>;
/**
* Creates a not value validation action.
*
* @param requirement The not required value.
* @param message The error message.
*
* @returns A not value action.
*/
declare function notValue<TInput$1 extends ValueInput, const TRequirement extends TInput$1, const TMessage extends ErrorMessage<NotValueIssue<TInput$1, TRequirement>> | undefined>(requirement: TRequirement, message: TMessage): NotValueAction<TInput$1, TRequirement, TMessage>;
//#endregion
//#region src/actions/notValues/notValues.d.ts
/**
* Not values issue type.
*/
interface NotValuesIssue<TInput$1 extends ValueInput, TRequirement extends readonly TInput$1[]> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "not_values";
  /**
  * The expected property.
  */
  readonly expected: `!${string}`;
  /**
  * The not required values.
  */
  readonly requirement: TRequirement;
}
/**
* Not values action type.
*/
interface NotValuesAction<TInput$1 extends ValueInput, TRequirement extends readonly TInput$1[], TMessage extends ErrorMessage<NotValuesIssue<TInput$1, TRequirement>> | undefined> extends BaseValidation<TInput$1, TInput$1, NotValuesIssue<TInput$1, TRequirement>> {
  /**
  * The action type.
  */
  readonly type: "not_values";
  /**
  * The action reference.
  */
  readonly reference: typeof notValues;
  /**
  * The expected property.
  */
  readonly expects: `!${string}`;
  /**
  * The not required values.
  */
  readonly requirement: TRequirement;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a not values validation action.
*
* @param requirement The not required values.
*
* @returns A not values action.
*/
declare function notValues<TInput$1 extends ValueInput, const TRequirement extends readonly TInput$1[]>(requirement: TRequirement): NotValuesAction<TInput$1, TRequirement, undefined>;
/**
* Creates a not values validation action.
*
* @param requirement The not required values.
* @param message The error message.
*
* @returns A not values action.
*/
declare function notValues<TInput$1 extends ValueInput, const TRequirement extends readonly TInput$1[], const TMessage extends ErrorMessage<NotValuesIssue<TInput$1, TRequirement>> | undefined>(requirement: TRequirement, message: TMessage): NotValuesAction<TInput$1, TRequirement, TMessage>;
//#endregion
//#region src/actions/notWords/notWords.d.ts
/**
* Not words issue interface.
*/
interface NotWordsIssue<TInput$1 extends string, TRequirement extends number> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "not_words";
  /**
  * The expected property.
  */
  readonly expected: `!${TRequirement}`;
  /**
  * The received property.
  */
  readonly received: `${number}`;
  /**
  * The not required words.
  */
  readonly requirement: TRequirement;
}
/**
* Not words action interface.
*/
interface NotWordsAction<TInput$1 extends string, TLocales extends Intl.LocalesArgument, TRequirement extends number, TMessage extends ErrorMessage<NotWordsIssue<TInput$1, TRequirement>> | undefined> extends BaseValidation<TInput$1, TInput$1, NotWordsIssue<TInput$1, TRequirement>> {
  /**
  * The action type.
  */
  readonly type: "not_words";
  /**
  * The action reference.
  */
  readonly reference: typeof notWords;
  /**
  * The expected property.
  */
  readonly expects: `!${TRequirement}`;
  /**
  * The locales to be used.
  */
  readonly locales: TLocales;
  /**
  * The not required words.
  */
  readonly requirement: TRequirement;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a not words validation action.
*
* @param locales The locales to be used.
* @param requirement The not required words.
*
* @returns A not words action.
*/
declare function notWords<TInput$1 extends string, TLocales extends Intl.LocalesArgument, const TRequirement extends number>(locales: TLocales, requirement: TRequirement): NotWordsAction<TInput$1, TLocales, TRequirement, undefined>;
/**
* Creates a not words validation action.
*
* @param locales The locales to be used.
* @param requirement The not required words.
* @param message The error message.
*
* @returns A not words action.
*/
declare function notWords<TInput$1 extends string, TLocales extends Intl.LocalesArgument, const TRequirement extends number, const TMessage extends ErrorMessage<NotWordsIssue<TInput$1, TRequirement>> | undefined>(locales: TLocales, requirement: TRequirement, message: TMessage): NotWordsAction<TInput$1, TLocales, TRequirement, TMessage>;
//#endregion
//#region src/actions/octal/octal.d.ts
/**
* Octal issue interface.
*/
interface OctalIssue<TInput$1 extends string> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "octal";
  /**
  * The expected property.
  */
  readonly expected: null;
  /**
  * The received property.
  */
  readonly received: `"${string}"`;
  /**
  * The octal regex.
  */
  readonly requirement: RegExp;
}
/**
* Octal action interface.
*/
interface OctalAction<TInput$1 extends string, TMessage extends ErrorMessage<OctalIssue<TInput$1>> | undefined> extends BaseValidation<TInput$1, TInput$1, OctalIssue<TInput$1>> {
  /**
  * The action type.
  */
  readonly type: "octal";
  /**
  * The action reference.
  */
  readonly reference: typeof octal;
  /**
  * The expected property.
  */
  readonly expects: null;
  /**
  * The octal regex.
  */
  readonly requirement: RegExp;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates an [octal](https://en.wikipedia.org/wiki/Octal) validation action.
*
* @returns An octal action.
*/
declare function octal<TInput$1 extends string>(): OctalAction<TInput$1, undefined>;
/**
* Creates an [octal](https://en.wikipedia.org/wiki/Octal) validation action.
*
* @param message The error message.
*
* @returns An octal action.
*/
declare function octal<TInput$1 extends string, const TMessage extends ErrorMessage<OctalIssue<TInput$1>> | undefined>(message: TMessage): OctalAction<TInput$1, TMessage>;
//#endregion
//#region src/actions/parseBoolean/parseBoolean.d.ts
/**
* Parse boolean config interface.
*
* @beta
*/
interface ParseBooleanConfig {
  /**
  * The truthy values.
  */
  truthy?: MaybeReadonly<unknown[]> | undefined;
  /**
  * The falsy values.
  */
  falsy?: MaybeReadonly<unknown[]> | undefined;
}
/**
* Parse boolean issue interface.
*
* @beta
*/
interface ParseBooleanIssue<TInput$1> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "transformation";
  /**
  * The issue type.
  */
  readonly type: "parse_boolean";
  /**
  * The expected property.
  */
  readonly expected: string;
}
/**
* Parse boolean action interface.
*
* @beta
*/
interface ParseBooleanAction<TInput$1, TConfig extends ParseBooleanConfig | undefined, TMessage extends ErrorMessage<ParseBooleanIssue<TInput$1>> | undefined = undefined> extends BaseTransformation<TInput$1, boolean, ParseBooleanIssue<TInput$1>> {
  /**
  * The action type.
  */
  readonly type: "parse_boolean";
  /**
  * The action reference.
  */
  readonly reference: typeof parseBoolean;
  /**
  * The expected property.
  */
  readonly expects: string;
  /**
  * The parse boolean config.
  */
  readonly config: TConfig;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a parse boolean transformation action.
*
* @returns A parse boolean action.
*
* @beta
*/
declare function parseBoolean<TInput$1>(): ParseBooleanAction<TInput$1, undefined, undefined>;
/**
* Creates a parse boolean transformation action.
*
* @param config The parse boolean config.
*
* @returns A parse boolean action.
*
* @beta
*/
declare function parseBoolean<TInput$1, const TConfig extends ParseBooleanConfig | undefined>(config: TConfig): ParseBooleanAction<TInput$1, TConfig, undefined>;
/**
* Creates a parse boolean transformation action.
*
* @param config The parse boolean config.
* @param message The error message.
*
* @returns A parse boolean action.
*
* @beta
*/
declare function parseBoolean<TInput$1, const TConfig extends ParseBooleanConfig | undefined, const TMessage extends ErrorMessage<ParseBooleanIssue<TInput$1>> | undefined>(config: TConfig, message: TMessage): ParseBooleanAction<TInput$1, TConfig, TMessage>;
//#endregion
//#region src/actions/parseJson/parseJson.d.ts
/**
* Parse JSON config interface.
*
* @beta
*/
interface ParseJsonConfig {
  /**
  * The JSON reviver function.
  */
  reviver?: (this: any, key: string, value: any) => any;
}
/**
* Parse JSON issue interface.
*
* @beta
*/
interface ParseJsonIssue<TInput$1 extends string> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "transformation";
  /**
  * The issue type.
  */
  readonly type: "parse_json";
  /**
  * The expected property.
  */
  readonly expected: null;
  /**
  * The received property.
  */
  readonly received: `"${string}"`;
}
/**
* Parse JSON action interface.
*
* @beta
*/
interface ParseJsonAction<TInput$1 extends string, TConfig extends ParseJsonConfig | undefined, TMessage extends ErrorMessage<ParseJsonIssue<TInput$1>> | undefined> extends BaseTransformation<TInput$1, unknown, ParseJsonIssue<TInput$1>> {
  /**
  * The action type.
  */
  readonly type: "parse_json";
  /**
  * The action reference.
  */
  readonly reference: typeof parseJson;
  /**
  * The action config.
  */
  readonly config: TConfig;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a parse JSON transformation action.
*
* @returns A parse JSON action.
*
* @beta
*/
declare function parseJson<TInput$1 extends string>(): ParseJsonAction<TInput$1, undefined, undefined>;
/**
* Creates a parse JSON transformation action.
*
* @param config The action config.
*
* @returns A parse JSON action.
*
* @beta
*/
declare function parseJson<TInput$1 extends string, const TConfig extends ParseJsonConfig | undefined>(config: TConfig): ParseJsonAction<TInput$1, TConfig, undefined>;
/**
* Creates a parse JSON transformation action.
*
* @param config The action config.
* @param message The error message.
*
* @returns A parse JSON action.
*
* @beta
*/
declare function parseJson<TInput$1 extends string, const TConfig extends ParseJsonConfig | undefined, const TMessage extends ErrorMessage<ParseJsonIssue<TInput$1>> | undefined>(config: TConfig, message: TMessage): ParseJsonAction<TInput$1, TConfig, TMessage>;
//#endregion
//#region src/actions/partialCheck/types.d.ts
/**
* Partial input type.
*/
type PartialInput = Record<string, unknown> | ArrayLike<unknown>;
/**
* Partial check issue interface.
*/
interface PartialCheckIssue<TInput$1 extends PartialInput> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "partial_check";
  /**
  * The expected input.
  */
  readonly expected: null;
  /**
  * The validation function.
  */
  readonly requirement: (input: TInput$1) => MaybePromise<boolean>;
}
/**
* Extracts the exact keys of a tuple, array or object.
*/
type KeyOf<TValue$1> = IsAny<TValue$1> extends true ? never : TValue$1 extends readonly unknown[] ? number extends TValue$1["length"] ? "$" : { [TKey in keyof TValue$1]: TKey extends `${infer TIndex extends number}` ? TIndex : never }[number] : TValue$1 extends Record<string, unknown> ? keyof TValue$1 & (string | number) : never;
/**
* Path type.
*/
type Path = readonly (string | number)[];
/**
* Required path type.
*/
type RequiredPath = readonly [string | number, ...Path];
/**
* Paths type.
*/
type Paths = readonly RequiredPath[];
/**
* Required paths type.
*/
type RequiredPaths = readonly [RequiredPath, ...RequiredPath[]];
/**
* Lazily evaluate only the first valid path segment based on the given value.
*/
type LazyPath<TValue$1, TPathToCheck extends Path, TValidPath extends Path = readonly []> = TPathToCheck extends readonly [] ? TValidPath : TPathToCheck extends readonly [infer TFirstKey extends KeyOf<TValue$1>, ...infer TPathRest extends Path] ? LazyPath<TFirstKey extends keyof TValue$1 ? TValue$1[TFirstKey] : TFirstKey extends "$" ? TValue$1 extends readonly unknown[] ? TValue$1[number] : never : never, TPathRest, readonly [...TValidPath, TFirstKey]> : IsNever<KeyOf<TValue$1>> extends false ? readonly [...TValidPath, KeyOf<TValue$1>] : TValidPath;
/**
* Returns the path if valid, otherwise the first possible valid path based on
* the given value.
*/
type ValidPath<TValue$1, TPath extends RequiredPath> = TPath extends LazyPath<TValue$1, TPath> ? TPath : LazyPath<TValue$1, TPath>;
/**
* Returns a valid path for any given path based on the given value.
*/
type ValidPaths<TValue$1, TPaths extends RequiredPaths> = { [TKey in keyof TPaths]: ValidPath<TValue$1, TPaths[TKey]> };
/**
* Deeply picks specific keys.
*
* Hint: If this type is ever exported and accessible from the outside, it must
* be wrapped in `UnionToIntersect` to avoid invalid results.
*/
type DeepPick<TValue$1, TPath extends Path> = TPath extends readonly [infer TFirstKey extends string | number, ...infer TPathRest extends Path] ? TValue$1 extends readonly unknown[] ? number extends TValue$1["length"] ? TPathRest extends readonly [] ? TValue$1 : DeepPick<TValue$1[number], TPathRest>[] : { [TKey in keyof TValue$1]: TKey extends `${TFirstKey}` ? TPathRest extends readonly [] ? TValue$1[TKey] : DeepPick<TValue$1[TKey], TPathRest> : unknown } : { [TKey in keyof TValue$1 as TKey extends TFirstKey ? TKey : never]: TPathRest extends readonly [] ? TValue$1[TKey] : DeepPick<TValue$1[TKey], TPathRest> } : never;
/**
* Deeply merges two types.
*/
type DeepMerge<TValue1, TValue2> = TValue1 extends readonly unknown[] ? TValue2 extends readonly unknown[] ? number extends TValue1["length"] | TValue2["length"] ? DeepMerge<TValue1[number], TValue2[number]>[] : { [TKey in keyof TValue1]: TKey extends keyof TValue2 ? unknown extends TValue1[TKey] ? TValue2[TKey] : TValue1[TKey] : never } : never : TValue1 extends Record<string, unknown> ? TValue2 extends Record<string, unknown> ? { [TKey in keyof (TValue1 & TValue2)]: TKey extends keyof TValue1 ? TKey extends keyof TValue2 ? DeepMerge<TValue1[TKey], TValue2[TKey]> : TValue1[TKey] : TKey extends keyof TValue2 ? TValue2[TKey] : never } : never : TValue1 & TValue2;
/**
* Deeply picks N specific keys.
*/
type DeepPickN<TInput$1, TPaths extends Paths> = TPaths extends readonly [infer TFirstPath extends Path, ...infer TRestPaths extends Paths] ? TRestPaths extends readonly [] ? DeepPick<TInput$1, TFirstPath> : DeepMerge<DeepPick<TInput$1, TFirstPath>, DeepPickN<TInput$1, TRestPaths>> : TInput$1;
//#endregion
//#region src/actions/partialCheck/partialCheck.d.ts
/**
* Partial check action interface.
*/
interface PartialCheckAction<TInput$1 extends PartialInput, TPaths extends Paths, TSelection extends DeepPickN<TInput$1, TPaths>, TMessage extends ErrorMessage<PartialCheckIssue<TSelection>> | undefined> extends BaseValidation<TInput$1, TInput$1, PartialCheckIssue<TSelection>> {
  /**
  * The action type.
  */
  readonly type: "partial_check";
  /**
  * The action reference.
  */
  readonly reference: typeof partialCheck;
  /**
  * The expected property.
  */
  readonly expects: null;
  /**
  * The selected paths.
  */
  readonly paths: TPaths;
  /**
  * The validation function.
  */
  readonly requirement: (input: TSelection) => boolean;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a partial check validation action.
*
* @param paths The selected paths.
* @param requirement The validation function.
*
* @returns A partial check action.
*/
declare function partialCheck<TInput$1 extends PartialInput, const TPaths extends RequiredPaths, const TSelection extends DeepPickN<TInput$1, TPaths>>(paths: ValidPaths<TInput$1, TPaths>, requirement: (input: TSelection) => boolean): PartialCheckAction<TInput$1, TPaths, TSelection, undefined>;
/**
* Creates a partial check validation action.
*
* @param paths The selected paths.
* @param requirement The validation function.
* @param message The error message.
*
* @returns A partial check action.
*/
declare function partialCheck<TInput$1 extends PartialInput, const TPaths extends RequiredPaths, const TSelection extends DeepPickN<TInput$1, TPaths>, const TMessage extends ErrorMessage<PartialCheckIssue<TSelection>> | undefined>(paths: ValidPaths<TInput$1, TPaths>, requirement: (input: TSelection) => boolean, message: TMessage): PartialCheckAction<TInput$1, TPaths, TSelection, TMessage>;
//#endregion
//#region src/actions/partialCheck/partialCheckAsync.d.ts
/**
* Partial check action async interface.
*/
interface PartialCheckActionAsync<TInput$1 extends PartialInput, TPaths extends Paths, TSelection extends DeepPickN<TInput$1, TPaths>, TMessage extends ErrorMessage<PartialCheckIssue<TSelection>> | undefined> extends BaseValidationAsync<TInput$1, TInput$1, PartialCheckIssue<TSelection>> {
  /**
  * The action type.
  */
  readonly type: "partial_check";
  /**
  * The action reference.
  */
  readonly reference: typeof partialCheckAsync;
  /**
  * The expected property.
  */
  readonly expects: null;
  /**
  * The selected paths.
  */
  readonly paths: TPaths;
  /**
  * The validation function.
  */
  readonly requirement: (input: TSelection) => MaybePromise<boolean>;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a partial check validation action.
*
* @param paths The selected paths.
* @param requirement The validation function.
*
* @returns A partial check action.
*/
declare function partialCheckAsync<TInput$1 extends PartialInput, const TPaths extends RequiredPaths, const TSelection extends DeepPickN<TInput$1, TPaths>>(paths: ValidPaths<TInput$1, TPaths>, requirement: (input: TSelection) => MaybePromise<boolean>): PartialCheckActionAsync<TInput$1, TPaths, TSelection, undefined>;
/**
* Creates a partial check validation action.
*
* @param paths The selected paths.
* @param requirement The validation function.
* @param message The error message.
*
* @returns A partial check action.
*/
declare function partialCheckAsync<TInput$1 extends PartialInput, const TPaths extends RequiredPaths, const TSelection extends DeepPickN<TInput$1, TPaths>, const TMessage extends ErrorMessage<PartialCheckIssue<TSelection>> | undefined>(paths: ValidPaths<TInput$1, TPaths>, requirement: (input: TSelection) => MaybePromise<boolean>, message: TMessage): PartialCheckActionAsync<TInput$1, TPaths, TSelection, TMessage>;
//#endregion
//#region src/actions/rawCheck/types.d.ts
/**
* Raw check issue interface.
*/
interface RawCheckIssue<TInput$1> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "raw_check";
}
/**
* Raw check issue info interface.
*/
interface RawCheckIssueInfo<TInput$1> {
  label?: string | undefined;
  input?: unknown | undefined;
  expected?: string | undefined;
  received?: string | undefined;
  message?: ErrorMessage<RawCheckIssue<TInput$1>> | undefined;
  path?: [IssuePathItem, ...IssuePathItem[]] | undefined;
}
/**
* Raw check add issue type.
*/
type RawCheckAddIssue<TInput$1> = (info?: RawCheckIssueInfo<TInput$1>) => void;
/**
* Raw check context interface.
*/
interface RawCheckContext<TInput$1> {
  readonly dataset: OutputDataset<TInput$1, BaseIssue<unknown>>;
  readonly config: Config<RawCheckIssue<TInput$1>>;
  readonly addIssue: RawCheckAddIssue<TInput$1>;
}
//#endregion
//#region src/actions/rawCheck/rawCheck.d.ts
/**
* Raw check action interface.
*/
interface RawCheckAction<TInput$1> extends BaseValidation<TInput$1, TInput$1, RawCheckIssue<TInput$1>> {
  /**
  * The action type.
  */
  readonly type: "raw_check";
  /**
  * The action reference.
  */
  readonly reference: typeof rawCheck;
  /**
  * The expected property.
  */
  readonly expects: null;
}
/**
* Creates a raw check validation action.
*
* @param action The validation action.
*
* @returns A raw check action.
*/
declare function rawCheck<TInput$1>(action: (context: RawCheckContext<TInput$1>) => void): RawCheckAction<TInput$1>;
//#endregion
//#region src/actions/rawCheck/rawCheckAsync.d.ts
/**
* Raw check action async interface.
*/
interface RawCheckActionAsync<TInput$1> extends BaseValidationAsync<TInput$1, TInput$1, RawCheckIssue<TInput$1>> {
  /**
  * The action type.
  */
  readonly type: "raw_check";
  /**
  * The action reference.
  */
  readonly reference: typeof rawCheckAsync;
  /**
  * The expected property.
  */
  readonly expects: null;
}
/**
* Creates a raw check validation action.
*
* @param action The validation action.
*
* @returns A raw check action.
*/
declare function rawCheckAsync<TInput$1>(action: (context: RawCheckContext<TInput$1>) => MaybePromise<void>): RawCheckActionAsync<TInput$1>;
//#endregion
//#region src/actions/rawTransform/types.d.ts
/**
* Raw transform issue interface.
*/
interface RawTransformIssue<TInput$1> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "transformation";
  /**
  * The issue type.
  */
  readonly type: "raw_transform";
}
/**
* Raw transform issue info interface.
*/
interface RawTransformIssueInfo<TInput$1> {
  label?: string | undefined;
  input?: unknown | undefined;
  expected?: string | undefined;
  received?: string | undefined;
  message?: ErrorMessage<RawTransformIssue<TInput$1>> | undefined;
  path?: [IssuePathItem, ...IssuePathItem[]] | undefined;
}
/**
* Raw transform add issue type.
*/
type RawTransformAddIssue<TInput$1> = (info?: RawTransformIssueInfo<TInput$1>) => void;
/**
* Raw transform context interface.
*/
interface RawTransformContext<TInput$1> {
  readonly dataset: SuccessDataset<TInput$1>;
  readonly config: Config<RawTransformIssue<TInput$1>>;
  readonly addIssue: RawTransformAddIssue<TInput$1>;
  readonly NEVER: never;
}
//#endregion
//#region src/actions/rawTransform/rawTransform.d.ts
/**
* Raw transform action interface.
*/
interface RawTransformAction<TInput$1, TOutput$1> extends BaseTransformation<TInput$1, TOutput$1, RawTransformIssue<TInput$1>> {
  /**
  * The action type.
  */
  readonly type: "raw_transform";
  /**
  * The action reference.
  */
  readonly reference: typeof rawTransform;
}
/**
* Creates a raw transformation action.
*
* @param action The transformation action.
*
* @returns A raw transform action.
*/
declare function rawTransform<TInput$1, TOutput$1>(action: (context: RawTransformContext<TInput$1>) => TOutput$1): RawTransformAction<TInput$1, TOutput$1>;
//#endregion
//#region src/actions/rawTransform/rawTransformAsync.d.ts
/**
* Raw transform action async interface.
*/
interface RawTransformActionAsync<TInput$1, TOutput$1> extends BaseTransformationAsync<TInput$1, TOutput$1, RawTransformIssue<TInput$1>> {
  /**
  * The action type.
  */
  readonly type: "raw_transform";
  /**
  * The action reference.
  */
  readonly reference: typeof rawTransformAsync;
}
/**
* Creates a raw transformation action.
*
* @param action The transformation action.
*
* @returns A raw transform action.
*/
declare function rawTransformAsync<TInput$1, TOutput$1>(action: (context: RawTransformContext<TInput$1>) => MaybePromise<TOutput$1>): RawTransformActionAsync<TInput$1, TOutput$1>;
//#endregion
//#region src/actions/readonly/readonly.d.ts
/**
* Readonly output type.
*/
type ReadonlyOutput<TInput$1> = TInput$1 extends Map<infer TKey, infer TValue> ? ReadonlyMap<TKey, TValue> : TInput$1 extends Set<infer TValue> ? ReadonlySet<TValue> : Readonly<TInput$1>;
/**
* Readonly action interface.
*/
interface ReadonlyAction<TInput$1> extends BaseTransformation<TInput$1, ReadonlyOutput<TInput$1>, never> {
  /**
  * The action type.
  */
  readonly type: "readonly";
  /**
  * The action reference.
  */
  readonly reference: typeof readonly;
}
/**
* Creates a readonly transformation action.
*
* @returns A readonly action.
*/
declare function readonly<TInput$1>(): ReadonlyAction<TInput$1>;
//#endregion
//#region src/actions/reduceItems/reduceItems.d.ts
/**
* Array action type.
*/
type ArrayAction$1<TInput$1 extends ArrayInput, TOutput$1> = (output: TOutput$1, item: TInput$1[number], index: number, array: TInput$1) => TOutput$1;
/**
* Reduce items action interface.
*/
interface ReduceItemsAction<TInput$1 extends ArrayInput, TOutput$1> extends BaseTransformation<TInput$1, TOutput$1, never> {
  /**
  * The action type.
  */
  readonly type: "reduce_items";
  /**
  * The action reference.
  */
  readonly reference: typeof reduceItems;
  /**
  * The reduce items operation.
  */
  readonly operation: ArrayAction$1<TInput$1, TOutput$1>;
  /**
  * The initial value.
  */
  readonly initial: TOutput$1;
}
/**
* Creates a reduce items transformation action.
*
* @param operation The reduce items operation.
* @param initial The initial value.
*
* @returns A reduce items action.
*/
declare function reduceItems<TInput$1 extends ArrayInput, TOutput$1>(operation: ArrayAction$1<TInput$1, TOutput$1>, initial: TOutput$1): ReduceItemsAction<TInput$1, TOutput$1>;
//#endregion
//#region src/actions/regex/regex.d.ts
/**
* Regex issue interface.
*/
interface RegexIssue<TInput$1 extends string> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "regex";
  /**
  * The expected input.
  */
  readonly expected: string;
  /**
  * The received input.
  */
  readonly received: `"${string}"`;
  /**
  * The regex pattern.
  */
  readonly requirement: RegExp;
}
/**
* Regex action interface.
*/
interface RegexAction<TInput$1 extends string, TMessage extends ErrorMessage<RegexIssue<TInput$1>> | undefined> extends BaseValidation<TInput$1, TInput$1, RegexIssue<TInput$1>> {
  /**
  * The action type.
  */
  readonly type: "regex";
  /**
  * The action reference.
  */
  readonly reference: typeof regex;
  /**
  * The expected property.
  */
  readonly expects: string;
  /**
  * The regex pattern.
  */
  readonly requirement: RegExp;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a [regex](https://en.wikipedia.org/wiki/Regular_expression) validation action.
*
* Hint: Be careful with the global flag `g` in your regex pattern, as it can lead to unexpected results. See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test#using_test_on_a_regex_with_the_global_flag) for more information.
*
* @param requirement The regex pattern.
*
* @returns A regex action.
*/
declare function regex<TInput$1 extends string>(requirement: RegExp): RegexAction<TInput$1, undefined>;
/**
* Creates a [regex](https://en.wikipedia.org/wiki/Regular_expression) validation action.
*
* Hint: Be careful with the global flag `g` in your regex pattern, as it can lead to unexpected results. See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test#using_test_on_a_regex_with_the_global_flag) for more information.
*
* @param requirement The regex pattern.
* @param message The error message.
*
* @returns A regex action.
*/
declare function regex<TInput$1 extends string, const TMessage extends ErrorMessage<RegexIssue<TInput$1>> | undefined>(requirement: RegExp, message: TMessage): RegexAction<TInput$1, TMessage>;
//#endregion
//#region src/actions/returns/returns.d.ts
/**
* Returns action type.
*/
interface ReturnsAction<TInput$1 extends (...args: any[]) => unknown, TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>> extends BaseTransformation<TInput$1, (...args: Parameters<TInput$1>) => InferOutput<TSchema>, never> {
  /**
  * The action type.
  */
  readonly type: "returns";
  /**
  * The action reference.
  */
  readonly reference: typeof returns;
  /**
  * The arguments schema.
  */
  readonly schema: TSchema;
}
/**
* Creates a function return transformation action.
*
* @param schema The arguments schema.
*
* @returns An returns action.
*/
declare function returns<TInput$1 extends (...args: any[]) => unknown, TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>>(schema: TSchema): ReturnsAction<TInput$1, TSchema>;
//#endregion
//#region src/actions/returns/returnsAsync.d.ts
/**
* Returns action async type.
*/
interface ReturnsActionAsync<TInput$1 extends (...args: any[]) => unknown, TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>> extends BaseTransformation<TInput$1, (...args: Parameters<TInput$1>) => Promise<Awaited<InferOutput<TSchema>>>, never> {
  /**
  * The action type.
  */
  readonly type: "returns";
  /**
  * The action reference.
  */
  readonly reference: typeof returnsAsync;
  /**
  * The arguments schema.
  */
  readonly schema: TSchema;
}
/**
* Creates a function arguments transformation action.
*
* @param schema The arguments schema.
*
* @returns An returns action.
*/
declare function returnsAsync<TInput$1 extends (...args: any[]) => unknown, TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>>(schema: TSchema): ReturnsActionAsync<TInput$1, TSchema>;
//#endregion
//#region src/actions/rfcEmail/rfcEmail.d.ts
/**
* RFC email issue interface.
*/
interface RfcEmailIssue<TInput$1 extends string> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "rfc_email";
  /**
  * The expected property.
  */
  readonly expected: null;
  /**
  * The received property.
  */
  readonly received: `"${string}"`;
  /**
  * The RFC email regex.
  */
  readonly requirement: RegExp;
}
/**
* RFC email action interface.
*/
interface RfcEmailAction<TInput$1 extends string, TMessage extends ErrorMessage<RfcEmailIssue<TInput$1>> | undefined> extends BaseValidation<TInput$1, TInput$1, RfcEmailIssue<TInput$1>> {
  /**
  * The action type.
  */
  readonly type: "rfc_email";
  /**
  * The action reference.
  */
  readonly reference: typeof rfcEmail;
  /**
  * The expected property.
  */
  readonly expects: null;
  /**
  * The RFC email regex.
  */
  readonly requirement: RegExp;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a [RFC email](https://datatracker.ietf.org/doc/html/rfc5322#section-3.4.1)
* validation action.
*
* Hint: This validation action intentionally validates the entire RFC 5322
* specification. If you are interested in an action that only covers common
* email addresses, please use the `email` action instead.
*
* @returns A RFC email action.
*/
declare function rfcEmail<TInput$1 extends string>(): RfcEmailAction<TInput$1, undefined>;
/**
* Creates a [RFC email](https://datatracker.ietf.org/doc/html/rfc5322#section-3.4.1)
* validation action.
*
* Hint: This validation action intentionally validates the entire RFC 5322
* specification. If you are interested in an action that only covers common
* email addresses, please use the `email` action instead.
*
* @param message The error message.
*
* @returns A RFC email action.
*/
declare function rfcEmail<TInput$1 extends string, const TMessage extends ErrorMessage<RfcEmailIssue<TInput$1>> | undefined>(message: TMessage): RfcEmailAction<TInput$1, TMessage>;
//#endregion
//#region src/actions/safeInteger/safeInteger.d.ts
/**
* Safe integer issue interface.
*/
interface SafeIntegerIssue<TInput$1 extends number> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "safe_integer";
  /**
  * The expected property.
  */
  readonly expected: null;
  /**
  * The received property.
  */
  readonly received: `${number}`;
  /**
  * The validation function.
  */
  readonly requirement: (input: number) => boolean;
}
/**
* Safe integer action interface.
*/
interface SafeIntegerAction<TInput$1 extends number, TMessage extends ErrorMessage<SafeIntegerIssue<TInput$1>> | undefined> extends BaseValidation<TInput$1, TInput$1, SafeIntegerIssue<TInput$1>> {
  /**
  * The action type.
  */
  readonly type: "safe_integer";
  /**
  * The action reference.
  */
  readonly reference: typeof safeInteger;
  /**
  * The expected property.
  */
  readonly expects: null;
  /**
  * The validation function.
  */
  readonly requirement: (input: number) => boolean;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a safe integer validation action.
*
* @returns A safe integer action.
*/
declare function safeInteger<TInput$1 extends number>(): SafeIntegerAction<TInput$1, undefined>;
/**
* Creates a safe integer validation action.
*
* @param message The error message.
*
* @returns A safe integer action.
*/
declare function safeInteger<TInput$1 extends number, const TMessage extends ErrorMessage<SafeIntegerIssue<TInput$1>> | undefined>(message: TMessage): SafeIntegerAction<TInput$1, TMessage>;
//#endregion
//#region src/actions/size/size.d.ts
/**
* Size issue interface.
*/
interface SizeIssue<TInput$1 extends SizeInput, TRequirement extends number> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "size";
  /**
  * The expected property.
  */
  readonly expected: `${TRequirement}`;
  /**
  * The received property.
  */
  readonly received: `${number}`;
  /**
  * The required size.
  */
  readonly requirement: TRequirement;
}
/**
* Size action interface.
*/
interface SizeAction<TInput$1 extends SizeInput, TRequirement extends number, TMessage extends ErrorMessage<SizeIssue<TInput$1, TRequirement>> | undefined> extends BaseValidation<TInput$1, TInput$1, SizeIssue<TInput$1, TRequirement>> {
  /**
  * The action type.
  */
  readonly type: "size";
  /**
  * The action reference.
  */
  readonly reference: typeof size;
  /**
  * The expected property.
  */
  readonly expects: `${TRequirement}`;
  /**
  * The required size.
  */
  readonly requirement: TRequirement;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a size validation action.
*
* @param requirement The required size.
*
* @returns A size action.
*/
declare function size<TInput$1 extends SizeInput, const TRequirement extends number>(requirement: TRequirement): SizeAction<TInput$1, TRequirement, undefined>;
/**
* Creates a size validation action.
*
* @param requirement The required size.
* @param message The error message.
*
* @returns A size action.
*/
declare function size<TInput$1 extends SizeInput, const TRequirement extends number, const TMessage extends ErrorMessage<SizeIssue<TInput$1, TRequirement>> | undefined>(requirement: TRequirement, message: TMessage): SizeAction<TInput$1, TRequirement, TMessage>;
//#endregion
//#region src/actions/slug/slug.d.ts
/**
* Slug issue type.
*/
interface SlugIssue<TInput$1 extends string> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "slug";
  /**
  * The expected property.
  */
  readonly expected: null;
  /**
  * The received property.
  */
  readonly received: `"${string}"`;
  /**
  * The slug regex.
  */
  readonly requirement: RegExp;
}
/**
* Slug action type.
*/
interface SlugAction<TInput$1 extends string, TMessage extends ErrorMessage<SlugIssue<TInput$1>> | undefined> extends BaseValidation<TInput$1, TInput$1, SlugIssue<TInput$1>> {
  /**
  * The action type.
  */
  readonly type: "slug";
  /**
  * The action reference.
  */
  readonly reference: typeof slug;
  /**
  * The expected property.
  */
  readonly expects: null;
  /**
  * The slug regex.
  */
  readonly requirement: RegExp;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a [slug](https://en.wikipedia.org/wiki/Clean_URL#Slug) validation action.
*
* @returns A slug action.
*/
declare function slug<TInput$1 extends string>(): SlugAction<TInput$1, undefined>;
/**
* Creates a [slug](https://en.wikipedia.org/wiki/Clean_URL#Slug) validation action.
*
* @param message The error message.
*
* @returns A slug action.
*/
declare function slug<TInput$1 extends string, const TMessage extends ErrorMessage<SlugIssue<TInput$1>> | undefined>(message: TMessage): SlugAction<TInput$1, TMessage>;
//#endregion
//#region src/actions/someItem/someItem.d.ts
/**
* Some item issue interface.
*/
interface SomeItemIssue<TInput$1 extends ArrayInput> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "some_item";
  /**
  * The expected property.
  */
  readonly expected: null;
  /**
  * The validation function.
  */
  readonly requirement: ArrayRequirement<TInput$1>;
}
/**
* Some item action interface.
*/
interface SomeItemAction<TInput$1 extends ArrayInput, TMessage extends ErrorMessage<SomeItemIssue<TInput$1>> | undefined> extends BaseValidation<TInput$1, TInput$1, SomeItemIssue<TInput$1>> {
  /**
  * The action type.
  */
  readonly type: "some_item";
  /**
  * The action reference.
  */
  readonly reference: typeof someItem;
  /**
  * The expected property.
  */
  readonly expects: null;
  /**
  * The validation function.
  */
  readonly requirement: ArrayRequirement<TInput$1>;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a some item validation action.
*
* @param requirement The validation function.
*
* @returns A some item action.
*/
declare function someItem<TInput$1 extends ArrayInput>(requirement: ArrayRequirement<TInput$1>): SomeItemAction<TInput$1, undefined>;
/**
* Creates a some item validation action.
*
* @param requirement The validation function.
* @param message The error message.
*
* @returns A some item action.
*/
declare function someItem<TInput$1 extends ArrayInput, const TMessage extends ErrorMessage<SomeItemIssue<TInput$1>> | undefined>(requirement: ArrayRequirement<TInput$1>, message: TMessage): SomeItemAction<TInput$1, TMessage>;
//#endregion
//#region src/actions/sortItems/sortItems.d.ts
/**
* Array action type.
*/
type ArrayAction<TInput$1 extends ArrayInput> = (itemA: TInput$1[number], itemB: TInput$1[number]) => number;
/**
* Sort items action interface.
*/
interface SortItemsAction<TInput$1 extends ArrayInput> extends BaseTransformation<TInput$1, TInput$1, never> {
  /**
  * The action type.
  */
  readonly type: "sort_items";
  /**
  * The action reference.
  */
  readonly reference: typeof sortItems;
  /**
  * The sort items operation.
  */
  readonly operation: ArrayAction<TInput$1> | undefined;
}
/**
* Creates a sort items transformation action.
*
* @param operation The sort items operation.
*
* @returns A sort items action.
*/
declare function sortItems<TInput$1 extends ArrayInput>(operation?: ArrayAction<TInput$1>): SortItemsAction<TInput$1>;
//#endregion
//#region src/actions/startsWith/startsWith.d.ts
/**
* Starts with issue interface.
*/
interface StartsWithIssue<TInput$1 extends string, TRequirement extends string> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "starts_with";
  /**
  * The expected property.
  */
  readonly expected: `"${TRequirement}"`;
  /**
  * The received property.
  */
  readonly received: `"${string}"`;
  /**
  * The start string.
  */
  readonly requirement: TRequirement;
}
/**
* Starts with action interface.
*/
interface StartsWithAction<TInput$1 extends string, TRequirement extends string, TMessage extends ErrorMessage<StartsWithIssue<TInput$1, TRequirement>> | undefined> extends BaseValidation<TInput$1, TInput$1, StartsWithIssue<TInput$1, TRequirement>> {
  /**
  * The action type.
  */
  readonly type: "starts_with";
  /**
  * The action reference.
  */
  readonly reference: typeof startsWith;
  /**
  * The expected property.
  */
  readonly expects: `"${TRequirement}"`;
  /**
  * The start string.
  */
  readonly requirement: TRequirement;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a starts with validation action.
*
* @param requirement The start string.
*
* @returns A starts with action.
*/
declare function startsWith<TInput$1 extends string, const TRequirement extends string>(requirement: TRequirement): StartsWithAction<TInput$1, TRequirement, undefined>;
/**
* Creates a starts with validation action.
*
* @param requirement The start string.
* @param message The error message.
*
* @returns A starts with action.
*/
declare function startsWith<TInput$1 extends string, const TRequirement extends string, const TMessage extends ErrorMessage<StartsWithIssue<TInput$1, TRequirement>> | undefined>(requirement: TRequirement, message: TMessage): StartsWithAction<TInput$1, TRequirement, TMessage>;
//#endregion
//#region src/actions/stringifyJson/stringifyJson.d.ts
/**
* Stringify JSON config interface.
*
* @beta
*/
interface StringifyJsonConfig {
  /**
  * The JSON replacer function or array.
  */
  replacer?: ((this: any, key: string, value: any) => any) | (number | string)[];
  /**
  * The JSON space option.
  */
  space?: string | number;
}
/**
* Stringify JSON issue interface.
*
* @beta
*/
interface StringifyJsonIssue<TInput$1> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "transformation";
  /**
  * The issue type.
  */
  readonly type: "stringify_json";
  /**
  * The expected property.
  */
  readonly expected: null;
  /**
  * The received property.
  */
  readonly received: `"${string}"`;
}
/**
* Stringify JSON action interface.
*
* @beta
*/
interface StringifyJsonAction<TInput$1, TConfig extends StringifyJsonConfig | undefined, TMessage extends ErrorMessage<StringifyJsonIssue<TInput$1>> | undefined> extends BaseTransformation<TInput$1, string, StringifyJsonIssue<TInput$1>> {
  /**
  * The action type.
  */
  readonly type: "stringify_json";
  /**
  * The action reference.
  */
  readonly reference: typeof stringifyJson;
  /**
  * The action config.
  */
  readonly config: TConfig;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a stringify JSON transformation action.
*
* @returns A stringify JSON action.
*
* @beta
*/
declare function stringifyJson<TInput$1>(): StringifyJsonAction<TInput$1, undefined, undefined>;
/**
* Creates a stringify JSON transformation action.
*
* @param config The action config.
*
* @returns A stringify JSON action.
*
* @beta
*/
declare function stringifyJson<TInput$1, const TConfig extends StringifyJsonConfig | undefined>(config: TConfig): StringifyJsonAction<TInput$1, TConfig, undefined>;
/**
* Creates a stringify JSON transformation action.
*
* @param config The action config.
* @param message The error message.
*
* @returns A stringify JSON action.
*
* @beta
*/
declare function stringifyJson<TInput$1, const TConfig extends StringifyJsonConfig | undefined, const TMessage extends ErrorMessage<StringifyJsonIssue<TInput$1>> | undefined>(config: TConfig, message: TMessage): StringifyJsonAction<TInput$1, TConfig, TMessage>;
//#endregion
//#region src/actions/toBigint/toBigint.d.ts
/**
* To bigint issue interface.
*/
interface ToBigintIssue<TInput$1> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "transformation";
  /**
  * The issue type.
  */
  readonly type: "to_bigint";
  /**
  * The expected property.
  */
  readonly expected: null;
}
/**
* To bigint action interface.
*/
interface ToBigintAction<TInput$1, TMessage extends ErrorMessage<ToBigintIssue<TInput$1>> | undefined> extends BaseTransformation<TInput$1, bigint, ToBigintIssue<TInput$1>> {
  /**
  * The action type.
  */
  readonly type: "to_bigint";
  /**
  * The action reference.
  */
  readonly reference: typeof toBigint;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a to bigint transformation action.
*
* @returns A to bigint action.
*
* @beta
*/
declare function toBigint<TInput$1>(): ToBigintAction<TInput$1, undefined>;
/**
* Creates a to bigint transformation action.
*
* @param message The error message.
*
* @returns A to bigint action.
*
* @beta
*/
declare function toBigint<TInput$1, const TMessage extends ErrorMessage<ToBigintIssue<TInput$1>> | undefined>(message: TMessage): ToBigintAction<TInput$1, TMessage>;
//#endregion
//#region src/actions/toBoolean/toBoolean.d.ts
/**
* To boolean action interface.
*/
interface ToBooleanAction<TInput$1> extends BaseTransformation<TInput$1, boolean, never> {
  /**
  * The action type.
  */
  readonly type: "to_boolean";
  /**
  * The action reference.
  */
  readonly reference: typeof toBoolean;
}
/**
* Creates a to boolean transformation action.
*
* @returns A to boolean action.
*
* @beta
*/
declare function toBoolean<TInput$1>(): ToBooleanAction<TInput$1>;
//#endregion
//#region src/actions/toDate/toDate.d.ts
/**
* To date issue interface.
*/
interface ToDateIssue<TInput$1> extends BaseIssue<TInput$1 | Date> {
  /**
  * The issue kind.
  */
  readonly kind: "transformation";
  /**
  * The issue type.
  */
  readonly type: "to_date";
  /**
  * The expected property.
  */
  readonly expected: null;
}
/**
* To date action interface.
*/
interface ToDateAction<TInput$1, TMessage extends ErrorMessage<ToDateIssue<TInput$1>> | undefined> extends BaseTransformation<TInput$1, Date, ToDateIssue<TInput$1>> {
  /**
  * The action type.
  */
  readonly type: "to_date";
  /**
  * The action reference.
  */
  readonly reference: typeof toDate;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a to date transformation action.
*
* @returns A to date action.
*
* @beta
*/
declare function toDate<TInput$1>(): ToDateAction<TInput$1, undefined>;
/**
* Creates a to date transformation action.
*
* @param message The error message.
*
* @returns A to date action.
*
* @beta
*/
declare function toDate<TInput$1, const TMessage extends ErrorMessage<ToDateIssue<TInput$1>> | undefined>(message: TMessage): ToDateAction<TInput$1, TMessage>;
//#endregion
//#region src/actions/toLowerCase/toLowerCase.d.ts
/**
* To lower case action interface.
*/
interface ToLowerCaseAction extends BaseTransformation<string, string, never> {
  /**
  * The action type.
  */
  readonly type: "to_lower_case";
  /**
  * The action reference.
  */
  readonly reference: typeof toLowerCase;
}
/**
* Creates a to lower case transformation action.
*
* @returns A to lower case action.
*/
declare function toLowerCase(): ToLowerCaseAction;
//#endregion
//#region src/actions/toMaxValue/toMaxValue.d.ts
/**
* To max value action interface.
*/
interface ToMaxValueAction<TInput$1 extends ValueInput, TRequirement extends TInput$1> extends BaseTransformation<TInput$1, TInput$1, never> {
  /**
  * The action type.
  */
  readonly type: "to_max_value";
  /**
  * The action reference.
  */
  readonly reference: typeof toMaxValue;
  /**
  * The maximum value.
  */
  readonly requirement: TRequirement;
}
/**
* Creates a to max value transformation action.
*
* @param requirement The maximum value.
*
* @returns A to max value action.
*/
declare function toMaxValue<TInput$1 extends ValueInput, const TRequirement extends TInput$1>(requirement: TRequirement): ToMaxValueAction<TInput$1, TRequirement>;
//#endregion
//#region src/actions/toMinValue/toMinValue.d.ts
/**
* To min value action interface.
*/
interface ToMinValueAction<TInput$1 extends ValueInput, TRequirement extends TInput$1> extends BaseTransformation<TInput$1, TInput$1, never> {
  /**
  * The action type.
  */
  readonly type: "to_min_value";
  /**
  * The action reference.
  */
  readonly reference: typeof toMinValue;
  /**
  * The minimum value.
  */
  readonly requirement: TRequirement;
}
/**
* Creates a to min value transformation action.
*
* @param requirement The minimum value.
*
* @returns A to min value action.
*/
declare function toMinValue<TInput$1 extends ValueInput, const TRequirement extends TInput$1>(requirement: TRequirement): ToMinValueAction<TInput$1, TRequirement>;
//#endregion
//#region src/actions/toNumber/toNumber.d.ts
/**
* To number issue interface.
*/
interface ToNumberIssue<TInput$1> extends BaseIssue<TInput$1 | number> {
  /**
  * The issue kind.
  */
  readonly kind: "transformation";
  /**
  * The issue type.
  */
  readonly type: "to_number";
  /**
  * The expected property.
  */
  readonly expected: null;
}
/**
* To number action interface.
*/
interface ToNumberAction<TInput$1, TMessage extends ErrorMessage<ToNumberIssue<TInput$1>> | undefined> extends BaseTransformation<TInput$1, number, ToNumberIssue<TInput$1>> {
  /**
  * The action type.
  */
  readonly type: "to_number";
  /**
  * The action reference.
  */
  readonly reference: typeof toNumber;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a to number transformation action.
*
* @returns A to number action.
*
* @beta
*/
declare function toNumber<TInput$1>(): ToNumberAction<TInput$1, undefined>;
/**
* Creates a to number transformation action.
*
* @param message The error message.
*
* @returns A to number action.
*
* @beta
*/
declare function toNumber<TInput$1, const TMessage extends ErrorMessage<ToNumberIssue<TInput$1>> | undefined>(message: TMessage): ToNumberAction<TInput$1, TMessage>;
//#endregion
//#region src/actions/toString/toString.d.ts
/**
* To string issue interface.
*/
interface ToStringIssue<TInput$1> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "transformation";
  /**
  * The issue type.
  */
  readonly type: "to_string";
  /**
  * The expected property.
  */
  readonly expected: null;
}
/**
* To string action interface.
*/
interface ToStringAction<TInput$1, TMessage extends ErrorMessage<ToStringIssue<TInput$1>> | undefined> extends BaseTransformation<TInput$1, string, ToStringIssue<TInput$1>> {
  /**
  * The action type.
  */
  readonly type: "to_string";
  /**
  * The action reference.
  */
  readonly reference: typeof toString;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a to string transformation action.
*
* @returns A to string action.
*
* @beta
*/
declare function toString<TInput$1>(): ToStringAction<TInput$1, undefined>;
/**
* Creates a to string transformation action.
*
* @param message The error message.
*
* @returns A to string action.
*
* @beta
*/
declare function toString<TInput$1, const TMessage extends ErrorMessage<ToStringIssue<TInput$1>> | undefined>(message: TMessage): ToStringAction<TInput$1, TMessage>;
//#endregion
//#region src/actions/toUpperCase/toUpperCase.d.ts
/**
* To upper case action interface.
*/
interface ToUpperCaseAction extends BaseTransformation<string, string, never> {
  /**
  * The action type.
  */
  readonly type: "to_upper_case";
  /**
  * The action reference.
  */
  readonly reference: typeof toUpperCase;
}
/**
* Creates a to upper case transformation action.
*
* @returns A to upper case action.
*/
declare function toUpperCase(): ToUpperCaseAction;
//#endregion
//#region src/actions/transform/transform.d.ts
/**
* Transform action interface.
*/
interface TransformAction<TInput$1, TOutput$1> extends BaseTransformation<TInput$1, TOutput$1, never> {
  /**
  * The action type.
  */
  readonly type: "transform";
  /**
  * The action reference.
  */
  readonly reference: typeof transform;
  /**
  * The transformation operation.
  */
  readonly operation: (input: TInput$1) => TOutput$1;
}
/**
* Creates a custom transformation action.
*
* @param operation The transformation operation.
*
* @returns A transform action.
*/
declare function transform<TInput$1, TOutput$1>(operation: (input: TInput$1) => TOutput$1): TransformAction<TInput$1, TOutput$1>;
//#endregion
//#region src/actions/transform/transformAsync.d.ts
/**
* Transform action async interface.
*/
interface TransformActionAsync<TInput$1, TOutput$1> extends BaseTransformationAsync<TInput$1, TOutput$1, never> {
  /**
  * The action type.
  */
  readonly type: "transform";
  /**
  * The action reference.
  */
  readonly reference: typeof transformAsync;
  /**
  * The transformation operation.
  */
  readonly operation: (input: TInput$1) => Promise<TOutput$1>;
}
/**
* Creates a custom transformation action.
*
* @param operation The transformation operation.
*
* @returns A transform action.
*/
declare function transformAsync<TInput$1, TOutput$1>(operation: (input: TInput$1) => Promise<TOutput$1>): TransformActionAsync<TInput$1, TOutput$1>;
//#endregion
//#region src/actions/trim/trim.d.ts
/**
* Trim action interface.
*/
interface TrimAction extends BaseTransformation<string, string, never> {
  /**
  * The action type.
  */
  readonly type: "trim";
  /**
  * The action reference.
  */
  readonly reference: typeof trim;
}
/**
* Creates a trim transformation action.
*
* @returns A trim action.
*/
declare function trim(): TrimAction;
//#endregion
//#region src/actions/trimEnd/trimEnd.d.ts
/**
* Trim end action interface.
*/
interface TrimEndAction extends BaseTransformation<string, string, never> {
  /**
  * The action type.
  */
  readonly type: "trim_end";
  /**
  * The action reference.
  */
  readonly reference: typeof trimEnd;
}
/**
* Creates a trim end transformation action.
*
* @returns A trim end action.
*/
declare function trimEnd(): TrimEndAction;
//#endregion
//#region src/actions/trimStart/trimStart.d.ts
/**
* Trim start action interface.
*/
interface TrimStartAction extends BaseTransformation<string, string, never> {
  /**
  * The action type.
  */
  readonly type: "trim_start";
  /**
  * The action reference.
  */
  readonly reference: typeof trimStart;
}
/**
* Creates a trim start transformation action.
*
* @returns A trim start action.
*/
declare function trimStart(): TrimStartAction;
//#endregion
//#region src/actions/ulid/ulid.d.ts
/**
* ULID issue interface.
*/
interface UlidIssue<TInput$1 extends string> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "ulid";
  /**
  * The expected property.
  */
  readonly expected: null;
  /**
  * The received property.
  */
  readonly received: `"${string}"`;
  /**
  * The ULID regex.
  */
  readonly requirement: RegExp;
}
/**
* ULID action interface.
*/
interface UlidAction<TInput$1 extends string, TMessage extends ErrorMessage<UlidIssue<TInput$1>> | undefined> extends BaseValidation<TInput$1, TInput$1, UlidIssue<TInput$1>> {
  /**
  * The action type.
  */
  readonly type: "ulid";
  /**
  * The action reference.
  */
  readonly reference: typeof ulid;
  /**
  * The expected property.
  */
  readonly expects: null;
  /**
  * The ULID regex.
  */
  readonly requirement: RegExp;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates an [ULID](https://github.com/ulid/spec) validation action.
*
* @returns An ULID action.
*/
declare function ulid<TInput$1 extends string>(): UlidAction<TInput$1, undefined>;
/**
* Creates an [ULID](https://github.com/ulid/spec) validation action.
*
* @param message The error message.
*
* @returns An ULID action.
*/
declare function ulid<TInput$1 extends string, const TMessage extends ErrorMessage<UlidIssue<TInput$1>> | undefined>(message: TMessage): UlidAction<TInput$1, TMessage>;
//#endregion
//#region src/actions/url/url.d.ts
/**
* URL issue interface.
*/
interface UrlIssue<TInput$1 extends string> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "url";
  /**
  * The expected property.
  */
  readonly expected: null;
  /**
  * The received property.
  */
  readonly received: `"${string}"`;
  /**
  * The validation function.
  */
  readonly requirement: (input: string) => boolean;
}
/**
* URL action interface.
*/
interface UrlAction<TInput$1 extends string, TMessage extends ErrorMessage<UrlIssue<TInput$1>> | undefined> extends BaseValidation<TInput$1, TInput$1, UrlIssue<TInput$1>> {
  /**
  * The action type.
  */
  readonly type: "url";
  /**
  * The action reference.
  */
  readonly reference: typeof url;
  /**
  * The expected property.
  */
  readonly expects: null;
  /**
  * The validation function.
  */
  readonly requirement: (input: string) => boolean;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates an [URL](https://en.wikipedia.org/wiki/URL) validation action.
*
* Hint: The value is passed to the URL constructor to check if it is valid.
* This check is not perfect. For example, values like "abc:1234" are accepted.
*
* @returns An URL action.
*/
declare function url<TInput$1 extends string>(): UrlAction<TInput$1, undefined>;
/**
* Creates an [URL](https://en.wikipedia.org/wiki/URL) validation action.
*
* Hint: The value is passed to the URL constructor to check if it is valid.
* This check is not perfect. For example, values like "abc:1234" are accepted.
*
* @param message The error message.
*
* @returns An URL action.
*/
declare function url<TInput$1 extends string, const TMessage extends ErrorMessage<UrlIssue<TInput$1>> | undefined>(message: TMessage): UrlAction<TInput$1, TMessage>;
//#endregion
//#region src/actions/uuid/uuid.d.ts
/**
* UUID issue interface.
*/
interface UuidIssue<TInput$1 extends string> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "uuid";
  /**
  * The expected property.
  */
  readonly expected: null;
  /**
  * The received property.
  */
  readonly received: `"${string}"`;
  /**
  * The UUID regex.
  */
  readonly requirement: RegExp;
}
/**
* UUID action interface.
*/
interface UuidAction<TInput$1 extends string, TMessage extends ErrorMessage<UuidIssue<TInput$1>> | undefined> extends BaseValidation<TInput$1, TInput$1, UuidIssue<TInput$1>> {
  /**
  * The action type.
  */
  readonly type: "uuid";
  /**
  * The action reference.
  */
  readonly reference: typeof uuid;
  /**
  * The expected property.
  */
  readonly expects: null;
  /**
  * The UUID regex.
  */
  readonly requirement: RegExp;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates an [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) validation action.
*
* @returns An UUID action.
*/
declare function uuid<TInput$1 extends string>(): UuidAction<TInput$1, undefined>;
/**
* Creates an [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) validation action.
*
* @param message The error message.
*
* @returns An UUID action.
*/
declare function uuid<TInput$1 extends string, const TMessage extends ErrorMessage<UuidIssue<TInput$1>> | undefined>(message: TMessage): UuidAction<TInput$1, TMessage>;
//#endregion
//#region src/actions/value/value.d.ts
/**
* Value issue interface.
*/
interface ValueIssue<TInput$1 extends ValueInput, TRequirement extends TInput$1> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "value";
  /**
  * The expected property.
  */
  readonly expected: string;
  /**
  * The required value.
  */
  readonly requirement: TRequirement;
}
/**
* Value action interface.
*/
interface ValueAction<TInput$1 extends ValueInput, TRequirement extends TInput$1, TMessage extends ErrorMessage<ValueIssue<TInput$1, TRequirement>> | undefined> extends BaseValidation<TInput$1, TInput$1, ValueIssue<TInput$1, TRequirement>> {
  /**
  * The action type.
  */
  readonly type: "value";
  /**
  * The action reference.
  */
  readonly reference: typeof value;
  /**
  * The expected property.
  */
  readonly expects: string;
  /**
  * The required value.
  */
  readonly requirement: TRequirement;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a value validation action.
*
* @param requirement The required value.
*
* @returns A value action.
*/
declare function value<TInput$1 extends ValueInput, const TRequirement extends TInput$1>(requirement: TRequirement): ValueAction<TInput$1, TRequirement, undefined>;
/**
* Creates a value validation action.
*
* @param requirement The required value.
* @param message The error message.
*
* @returns A value action.
*/
declare function value<TInput$1 extends ValueInput, const TRequirement extends TInput$1, const TMessage extends ErrorMessage<ValueIssue<TInput$1, TRequirement>> | undefined>(requirement: TRequirement, message: TMessage): ValueAction<TInput$1, TRequirement, TMessage>;
//#endregion
//#region src/actions/values/values.d.ts
/**
* Values issue type.
*/
interface ValuesIssue<TInput$1 extends ValueInput, TRequirement extends readonly TInput$1[]> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "values";
  /**
  * The expected property.
  */
  readonly expected: string;
  /**
  * The required values.
  */
  readonly requirement: TRequirement;
}
/**
* Values action type.
*/
interface ValuesAction<TInput$1 extends ValueInput, TRequirement extends readonly TInput$1[], TMessage extends ErrorMessage<ValuesIssue<TInput$1, TRequirement>> | undefined> extends BaseValidation<TInput$1, TInput$1, ValuesIssue<TInput$1, TRequirement>> {
  /**
  * The action type.
  */
  readonly type: "values";
  /**
  * The action reference.
  */
  readonly reference: typeof values;
  /**
  * The expected property.
  */
  readonly expects: string;
  /**
  * The required values.
  */
  readonly requirement: TRequirement;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a values validation action.
*
* @param requirement The required values.
*
* @returns A values action.
*/
declare function values<TInput$1 extends ValueInput, const TRequirement extends readonly TInput$1[]>(requirement: TRequirement): ValuesAction<TInput$1, TRequirement, undefined>;
/**
* Creates a values validation action.
*
* @param requirement The required values.
* @param message The error message.
*
* @returns A values action.
*/
declare function values<TInput$1 extends ValueInput, const TRequirement extends readonly TInput$1[], const TMessage extends ErrorMessage<ValuesIssue<TInput$1, TRequirement>> | undefined>(requirement: TRequirement, message: TMessage): ValuesAction<TInput$1, TRequirement, TMessage>;
//#endregion
//#region src/actions/words/words.d.ts
/**
* Words issue interface.
*/
interface WordsIssue<TInput$1 extends string, TRequirement extends number> extends BaseIssue<TInput$1> {
  /**
  * The issue kind.
  */
  readonly kind: "validation";
  /**
  * The issue type.
  */
  readonly type: "words";
  /**
  * The expected property.
  */
  readonly expected: `${TRequirement}`;
  /**
  * The received property.
  */
  readonly received: `${number}`;
  /**
  * The required words.
  */
  readonly requirement: TRequirement;
}
/**
* Words action interface.
*/
interface WordsAction<TInput$1 extends string, TLocales extends Intl.LocalesArgument, TRequirement extends number, TMessage extends ErrorMessage<WordsIssue<TInput$1, TRequirement>> | undefined> extends BaseValidation<TInput$1, TInput$1, WordsIssue<TInput$1, TRequirement>> {
  /**
  * The action type.
  */
  readonly type: "words";
  /**
  * The action reference.
  */
  readonly reference: typeof words;
  /**
  * The expected property.
  */
  readonly expects: `${TRequirement}`;
  /**
  * The locales to be used.
  */
  readonly locales: TLocales;
  /**
  * The required words.
  */
  readonly requirement: TRequirement;
  /**
  * The error message.
  */
  readonly message: TMessage;
}
/**
* Creates a words validation action.
*
* @param locales The locales to be used.
* @param requirement The required words.
*
* @returns A words action.
*/
declare function words<TInput$1 extends string, const TLocales extends Intl.LocalesArgument, const TRequirement extends number>(locales: TLocales, requirement: TRequirement): WordsAction<TInput$1, TLocales, TRequirement, undefined>;
/**
* Creates a words validation action.
*
* @param locales The locales to be used.
* @param requirement The required words.
* @param message The error message.
*
* @returns A words action.
*/
declare function words<TInput$1 extends string, const TLocales extends Intl.LocalesArgument, const TRequirement extends number, const TMessage extends ErrorMessage<WordsIssue<TInput$1, TRequirement>> | undefined>(locales: TLocales, requirement: TRequirement, message: TMessage): WordsAction<TInput$1, TLocales, TRequirement, TMessage>;
//#endregion
//#region src/regex.d.ts
/**
* [Base64](https://en.wikipedia.org/wiki/Base64) regex.
*/
declare const BASE64_REGEX: RegExp;
/**
* [BIC](https://en.wikipedia.org/wiki/ISO_9362) regex.
*/
declare const BIC_REGEX: RegExp;
/**
* [Cuid2](https://github.com/paralleldrive/cuid2) regex.
*/
declare const CUID2_REGEX: RegExp;
/**
* [Decimal](https://en.wikipedia.org/wiki/Decimal) regex.
*/
declare const DECIMAL_REGEX: RegExp;
/**
* [Digits](https://en.wikipedia.org/wiki/Numerical_digit) regex.
*/
declare const DIGITS_REGEX: RegExp;
/**
* [Domain name](https://en.wikipedia.org/wiki/Domain_name) regex.
*
* Hint: We decided against the `i` flag for better JSON Schema compatibility.
* ASCII-only validation. Internationalized domain names (IDNs) are not
* supported, including Punycode-encoded labels.
*/
declare const DOMAIN_REGEX: RegExp;
/**
* [Email address](https://en.wikipedia.org/wiki/Email_address) regex.
*/
declare const EMAIL_REGEX: RegExp;
/**
* Emoji regex from [emoji-regex-xs](https://github.com/slevithan/emoji-regex-xs) v1.0.0 (MIT license).
*
* Hint: We decided against the newer `/^\p{RGI_Emoji}+$/v` regex because it is
* not supported in older runtimes and does not match all emoji.
*/
declare const EMOJI_REGEX: RegExp;
/**
* [Hexadecimal](https://en.wikipedia.org/wiki/Hexadecimal) regex.
*
* Hint: We decided against the `i` flag for better JSON Schema compatibility.
*/
declare const HEXADECIMAL_REGEX: RegExp;
/**
* [Hex color](https://en.wikipedia.org/wiki/Web_colors#Hex_triplet) regex.
*
* Hint: We decided against the `i` flag for better JSON Schema compatibility.
*/
declare const HEX_COLOR_REGEX: RegExp;
/**
* [IMEI](https://en.wikipedia.org/wiki/International_Mobile_Equipment_Identity) regex.
*/
declare const IMEI_REGEX: RegExp;
/**
* [IPv4](https://en.wikipedia.org/wiki/IPv4) regex.
*/
declare const IPV4_REGEX: RegExp;
/**
* [IPv6](https://en.wikipedia.org/wiki/IPv6) regex.
*/
declare const IPV6_REGEX: RegExp;
/**
* [IP](https://en.wikipedia.org/wiki/IP_address) regex.
*/
declare const IP_REGEX: RegExp;
/**
* [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date regex.
*/
declare const ISO_DATE_REGEX: RegExp;
/**
* [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time regex.
*/
declare const ISO_DATE_TIME_REGEX: RegExp;
/**
* [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time regex.
*/
declare const ISO_TIME_REGEX: RegExp;
/**
* [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time with seconds regex.
*/
declare const ISO_TIME_SECOND_REGEX: RegExp;
/**
* [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp regex. Allows a
* space as a date/time separator and an optional space before the UTC offset.
*/
declare const ISO_TIMESTAMP_REGEX: RegExp;
/**
* [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) week regex.
*/
declare const ISO_WEEK_REGEX: RegExp;
/**
* [JWS compact serialization](https://datatracker.ietf.org/doc/html/rfc7515#section-3.1)
* regex.
*
* Hint: Empty payload and signature segments are allowed because the
* Base64URL-encoded representation of an empty octet sequence is an empty
* string.
*/
declare const JWS_COMPACT_REGEX: RegExp;
/**
* [ISRC](https://en.wikipedia.org/wiki/International_Standard_Recording_Code) regex.
*/
declare const ISRC_REGEX: RegExp;
/**
* [MAC](https://en.wikipedia.org/wiki/MAC_address) 48 bit regex.
*
* Hint: We decided against the `i` flag for better JSON Schema compatibility.
*/
declare const MAC48_REGEX: RegExp;
/**
* [MAC](https://en.wikipedia.org/wiki/MAC_address) 64 bit regex.
*
* Hint: We decided against the `i` flag for better JSON Schema compatibility.
*/
declare const MAC64_REGEX: RegExp;
/**
* [MAC](https://en.wikipedia.org/wiki/MAC_address) regex.
*
* Hint: We decided against the `i` flag for better JSON Schema compatibility.
*/
declare const MAC_REGEX: RegExp;
/**
* [Nano ID](https://github.com/ai/nanoid) regex.
*/
declare const NANO_ID_REGEX: RegExp;
/**
* [Octal](https://en.wikipedia.org/wiki/Octal) regex.
*/
declare const OCTAL_REGEX: RegExp;
/**
* [RFC 5322 email address](https://datatracker.ietf.org/doc/html/rfc5322#section-3.4.1) regex.
*
* Hint: This regex was taken from the [HTML Living Standard Specification](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address) and does not perfectly represent RFC 5322.
*/
declare const RFC_EMAIL_REGEX: RegExp;
/**
* [Slug](https://en.wikipedia.org/wiki/Clean_URL#Slug) regex.
*/
declare const SLUG_REGEX: RegExp;
/**
* [ULID](https://github.com/ulid/spec) regex.
*
* Hint: We decided against the `i` flag for better JSON Schema compatibility.
*/
declare const ULID_REGEX: RegExp;
/**
* [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) regex.
*/
declare const UUID_REGEX: RegExp;
//#endregion
//#region src/storages/globalConfig/globalConfig.d.ts
/**
* The global config type.
*/
type GlobalConfig = Omit<Config<never>, "message">;
/**
* Sets the global configuration.
*
* @param config The configuration.
*/
declare function setGlobalConfig(config: GlobalConfig): void;
/**
* Returns the global configuration.
*
* @param config The config to merge.
*
* @returns The configuration.
*/
declare function getGlobalConfig<const TIssue extends BaseIssue<unknown>>(config?: Config<TIssue>): Config<TIssue>;
/**
* Deletes the global configuration.
*/
declare function deleteGlobalConfig(): void;
//#endregion
//#region src/storages/globalMessage/globalMessage.d.ts
/**
* Sets a global error message.
*
* @param message The error message.
* @param lang The language of the message.
*/
declare function setGlobalMessage(message: ErrorMessage<BaseIssue<unknown>>, lang?: string): void;
/**
* Returns a global error message.
*
* @param lang The language of the message.
*
* @returns The error message.
*/
declare function getGlobalMessage(lang?: string): ErrorMessage<BaseIssue<unknown>> | undefined;
/**
* Deletes a global error message.
*
* @param lang The language of the message.
*/
declare function deleteGlobalMessage(lang?: string): void;
//#endregion
//#region src/storages/schemaMessage/schemaMessage.d.ts
/**
* Sets a schema error message.
*
* @param message The error message.
* @param lang The language of the message.
*/
declare function setSchemaMessage(message: ErrorMessage<BaseIssue<unknown>>, lang?: string): void;
/**
* Returns a schema error message.
*
* @param lang The language of the message.
*
* @returns The error message.
*/
declare function getSchemaMessage(lang?: string): ErrorMessage<BaseIssue<unknown>> | undefined;
/**
* Deletes a schema error message.
*
* @param lang The language of the message.
*/
declare function deleteSchemaMessage(lang?: string): void;
//#endregion
//#region src/storages/specificMessage/specificMessage.d.ts
/**
* Reference type.
*/
type Reference = (...args: any[]) => BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>> | BaseValidation<unknown, unknown, BaseIssue<unknown>> | BaseValidationAsync<unknown, unknown, BaseIssue<unknown>> | BaseTransformation<unknown, unknown, BaseIssue<unknown>> | BaseTransformationAsync<unknown, unknown, BaseIssue<unknown>>;
/**
* Sets a specific error message.
*
* @param reference The identifier reference.
* @param message The error message.
* @param lang The language of the message.
*/
declare function setSpecificMessage<const TReference extends Reference>(reference: TReference, message: ErrorMessage<InferIssue<ReturnType<TReference>>>, lang?: string): void;
/**
* Returns a specific error message.
*
* @param reference The identifier reference.
* @param lang The language of the message.
*
* @returns The error message.
*/
declare function getSpecificMessage<const TReference extends Reference>(reference: TReference, lang?: string): ErrorMessage<InferIssue<ReturnType<TReference>>> | undefined;
/**
* Deletes a specific error message.
*
* @param reference The identifier reference.
* @param lang The language of the message.
*/
declare function deleteSpecificMessage(reference: Reference, lang?: string): void;
//#endregion
//#region src/utils/_addIssue/_addIssue.d.ts
/**
* Context type.
*/
type Context = BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>> | BaseValidation<any, unknown, BaseIssue<unknown>> | BaseValidationAsync<any, unknown, BaseIssue<unknown>> | BaseTransformation<any, unknown, BaseIssue<unknown>> | BaseTransformationAsync<any, unknown, BaseIssue<unknown>>;
/**
* Other interface.
*/
interface Other<TContext extends Context> {
  input?: unknown | undefined;
  expected?: string | undefined;
  received?: string | undefined;
  message?: ErrorMessage<InferIssue<TContext>> | undefined;
  path?: [IssuePathItem, ...IssuePathItem[]] | undefined;
  issues?: [BaseIssue<InferInput<TContext>>, ...BaseIssue<InferInput<TContext>>[]] | undefined;
}
/**
* Adds an issue to the dataset.
*
* @param context The issue context.
* @param label The issue label.
* @param dataset The input dataset.
* @param config The configuration.
* @param other The optional props.
*
* @internal
*/
declare function _addIssue<const TContext extends Context>(context: TContext & {
  expects?: string | null;
  requirement?: unknown;
  message?: ErrorMessage<Extract<InferIssue<TContext>, {
    type: TContext["type"];
  }>> | undefined;
}, label: string, dataset: UnknownDataset | OutputDataset<unknown, BaseIssue<unknown>>, config: Config<InferIssue<TContext>>, other?: Other<TContext>): void;
//#endregion
//#region src/utils/_cloneDataset/_cloneDataset.d.ts
/**
* Creates a shallow copy of a dataset.
*
* Hint: The `value` is copied by reference, but the `issues` array is cloned
* to avoid reusing mutable dataset state across multiple runs. Mutating a
* returned object or array value can therefore affect later cache hits that
* reuse the same cached output.
*
* @param dataset The output dataset.
*
* @returns The copied output dataset.
*/
declare function _cloneDataset<TValue$1, TIssue extends BaseIssue<unknown>>(dataset: OutputDataset<TValue$1, TIssue>): OutputDataset<TValue$1, TIssue>;
//#endregion
//#region src/utils/_getByteCount/_getByteCount.d.ts
/**
* Returns the byte count of the input.
*
* @param input The input to be measured.
*
* @returns The byte count.
*
* @internal
*/
declare function _getByteCount(input: string): number;
//#endregion
//#region src/utils/_getGraphemeCount/_getGraphemeCount.d.ts
/**
* Returns the grapheme count of the input.
*
* @param input The input to be measured.
*
* @returns The grapheme count.
*
* @internal
*/
declare function _getGraphemeCount(input: string): number;
//#endregion
//#region src/utils/_getLastMetadata/_getLastMetadata.d.ts
/**
* Metadata action type.
*/
type MetadataAction$1 = TitleAction<unknown, string> | DescriptionAction<unknown, string>;
/**
* Schema type.
*/
type Schema$1 = BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>> | SchemaWithPipe<readonly [BaseSchema<unknown, unknown, BaseIssue<unknown>>, ...(PipeItem<any, unknown, BaseIssue<unknown>> | MetadataAction$1)[]]> | SchemaWithPipeAsync<readonly [(BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>), ...(PipeItem<any, unknown, BaseIssue<unknown>> | PipeItemAsync<any, unknown, BaseIssue<unknown>> | MetadataAction$1)[]]>;
/**
* Returns the last top-level value of a given metadata type from a schema
* using a breadth-first search that starts with the last item in the pipeline.
*
* @param schema The schema to search.
* @param type The metadata type.
*
* @returns The value, if any.
*
* @internal
*/
declare function _getLastMetadata(schema: Schema$1, type: "title" | "description"): string | undefined;
//#endregion
//#region src/utils/_getStandardProps/_getStandardProps.d.ts
/**
* Returns the Standard Schema properties.
*
* @param context The schema context.
*
* @returns The Standard Schema properties.
*/
declare function _getStandardProps<TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>>(context: TSchema): StandardProps<InferInput<TSchema>, InferOutput<TSchema>>;
//#endregion
//#region src/utils/_getWordCount/_getWordCount.d.ts
/**
* Returns the word count of the input.
*
* @param locales The locales to be used.
* @param input The input to be measured.
*
* @returns The word count.
*
* @internal
*/
declare function _getWordCount(locales: Intl.LocalesArgument, input: string): number;
//#endregion
//#region src/utils/_isLuhnAlgo/_isLuhnAlgo.d.ts
/**
* Checks whether a string with numbers corresponds to the luhn algorithm.
*
* @param input The input to be checked.
*
* @returns Whether input is valid.
*
* @internal
*/
declare function _isLuhnAlgo(input: string): boolean;
//#endregion
//#region src/utils/_isValidObjectKey/_isValidObjectKey.d.ts
/**
* Disallows inherited object properties and prevents object prototype
* pollution by disallowing certain keys.
*
* @param object The object to check.
* @param key The key to check.
*
* @returns Whether the key is allowed.
*
* @internal
*/
declare function _isValidObjectKey(object: object, key: string): boolean;
//#endregion
//#region src/utils/_joinExpects/_joinExpects.d.ts
/**
* Joins multiple `expects` values with the given separator.
*
* @param values The `expects` values.
* @param separator The separator.
*
* @returns The joined `expects` property.
*
* @internal
*/
declare function _joinExpects(values: string[], separator: "&" | "|"): string;
//#endregion
//#region src/utils/_stringify/_stringify.d.ts
/**
* Stringifies an unknown input to a literal or type string.
*
* @param input The unknown input.
*
* @returns A literal or type string.
*
* @internal
*/
declare function _stringify(input: unknown): string;
//#endregion
//#region src/utils/entriesFromList/entriesFromList.d.ts
/**
* Creates an object entries definition from a list of keys and a schema.
*
* @param list A list of keys.
* @param schema The schema of the keys.
*
* @returns The object entries.
*/
declare function entriesFromList<const TList extends readonly (string | number | symbol)[], const TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>>(list: TList, schema: TSchema): Record<TList[number], TSchema>;
//#endregion
//#region src/utils/entriesFromObjects/entriesFromObjects.d.ts
/**
* Schema type.
*/
type Schema = LooseObjectSchema<ObjectEntries, ErrorMessage<LooseObjectIssue> | undefined> | LooseObjectSchemaAsync<ObjectEntriesAsync, ErrorMessage<LooseObjectIssue> | undefined> | ObjectSchema<ObjectEntries, ErrorMessage<ObjectIssue> | undefined> | ObjectSchemaAsync<ObjectEntriesAsync, ErrorMessage<ObjectIssue> | undefined> | ObjectWithRestSchema<ObjectEntries, BaseSchema<unknown, unknown, BaseIssue<unknown>>, ErrorMessage<ObjectWithRestIssue> | undefined> | ObjectWithRestSchemaAsync<ObjectEntriesAsync, BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>, ErrorMessage<ObjectWithRestIssue> | undefined> | StrictObjectSchema<ObjectEntries, ErrorMessage<StrictObjectIssue> | undefined> | StrictObjectSchemaAsync<ObjectEntriesAsync, ErrorMessage<StrictObjectIssue> | undefined>;
/**
* Recursive merge type.
*/
type RecursiveMerge<TSchemas extends readonly [Schema, ...Schema[]]> = TSchemas extends readonly [infer TFirstSchema extends Schema] ? TFirstSchema["entries"] : TSchemas extends readonly [infer TFirstSchema extends Schema, ...infer TRestSchemas extends readonly [Schema, ...Schema[]]] ? Merge<TFirstSchema["entries"], RecursiveMerge<TRestSchemas>> : never;
/**
* Merged entries types.
*/
type MergedEntries<TSchemas extends readonly [Schema, ...Schema[]]> = Prettify<RecursiveMerge<TSchemas>>;
/**
* Creates a new object entries definition from existing object schemas.
*
* @param schemas The schemas to merge the entries from.
*
* @returns The object entries from the schemas.
*/
declare function entriesFromObjects<const TSchemas extends readonly [Schema, ...Schema[]]>(schemas: TSchemas): MergedEntries<TSchemas>;
//#endregion
//#region src/utils/getDotPath/getDotPath.d.ts
/**
* Creates and returns the dot path of an issue if possible.
*
* @param issue The issue to get the dot path from.
*
* @returns The dot path or null.
*/
declare function getDotPath(issue: BaseIssue<unknown>): string | null;
/**
* Creates and returns the dot path of an issue if possible.
*
* @param issue The issue to get the dot path from.
*
* @returns The dot path or null.
*/
declare function getDotPath<TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>>(issue: InferIssue<TSchema>): IssueDotPath<TSchema> | null;
//#endregion
//#region src/utils/isOfKind/isOfKind.d.ts
/**
* A generic type guard to check the kind of an object.
*
* @param kind The kind to check for.
* @param object The object to check.
*
* @returns Whether it matches.
*/
declare function isOfKind<const TKind extends TObject["kind"], const TObject extends {
  kind: string;
}>(kind: TKind, object: TObject): object is Extract<TObject, {
  kind: TKind;
}>;
//#endregion
//#region src/utils/isOfType/isOfType.d.ts
/**
* A generic type guard to check the type of an object.
*
* @param type The type to check for.
* @param object The object to check.
*
* @returns Whether it matches.
*/
declare function isOfType<const TType extends TObject["type"], const TObject extends {
  type: string;
}>(type: TType, object: TObject): object is Extract<TObject, {
  type: TType;
}>;
//#endregion
//#region src/utils/isValiError/isValiError.d.ts
/**
* A type guard to check if an error is a ValiError.
*
* @param error The error to check.
*
* @returns Whether its a ValiError.
*/
declare function isValiError<TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>>(error: unknown): error is ValiError<TSchema>;
//#endregion
//#region src/utils/ValiError/ValiError.d.ts
/**
* A Valibot error with useful information.
*/
declare class ValiError<TSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>> | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>> extends Error {
  /**
  * The error issues.
  */
  readonly issues: [InferIssue<TSchema>, ...InferIssue<TSchema>[]];
  /**
  * Creates a Valibot error with useful information.
  *
  * @param issues The error issues.
  */
  constructor(issues: [InferIssue<TSchema>, ...InferIssue<TSchema>[]]);
}

export { BASE64_REGEX, BIC_REGEX, BrandSymbol, CUID2_REGEX, DECIMAL_REGEX, DIGITS_REGEX, DOMAIN_REGEX, EMAIL_REGEX, EMOJI_REGEX, FlavorSymbol, HEXADECIMAL_REGEX, HEX_COLOR_REGEX, IMEI_REGEX, IPV4_REGEX, IPV6_REGEX, IP_REGEX, ISO_DATE_REGEX, ISO_DATE_TIME_REGEX, ISO_TIMESTAMP_REGEX, ISO_TIME_REGEX, ISO_TIME_SECOND_REGEX, ISO_WEEK_REGEX, ISRC_REGEX, JWS_COMPACT_REGEX, MAC48_REGEX, MAC64_REGEX, MAC_REGEX, NANO_ID_REGEX, OCTAL_REGEX, RFC_EMAIL_REGEX, SLUG_REGEX, ULID_REGEX, UUID_REGEX, ValiError, _addIssue, _cloneDataset, _getByteCount, _getGraphemeCount, _getLastMetadata, _getStandardProps, _getWordCount, _isLuhnAlgo, _isValidObjectKey, _joinExpects, _stringify, any, args, argsAsync, array, arrayAsync, assert, awaitAsync, base64, bic, bigint, blob, boolean, brand, bytes, cache, cacheAsync, check, checkAsync, checkItems, checkItemsAsync, config, creditCard, cuid2, custom, customAsync, date, decimal, deleteGlobalConfig, deleteGlobalMessage, deleteSchemaMessage, deleteSpecificMessage, description, digits, domain, email, emoji, empty, endsWith, entries, entriesFromList, entriesFromObjects, enum_ as enum, enum_, everyItem, exactOptional, exactOptionalAsync, examples, excludes, fallback, fallbackAsync, file, filterItems, findItem, finite, flatten, flavor, forward, forwardAsync, function_ as function, function_, getDefault, getDefaults, getDefaultsAsync, getDescription, getDotPath, getExamples, getFallback, getFallbacks, getFallbacksAsync, getGlobalConfig, getGlobalMessage, getMetadata, getSchemaMessage, getSpecificMessage, getTitle, graphemes, gtValue, guard, hash, hexColor, hexadecimal, imei, includes, instance, integer, intersect, intersectAsync, ip, ipv4, ipv6, is, isOfKind, isOfType, isValiError, isbn, isoDate, isoDateTime, isoTime, isoTimeSecond, isoTimestamp, isoWeek, isrc, jwsCompact, keyof, lazy, lazyAsync, length, literal, looseObject, looseObjectAsync, looseTuple, looseTupleAsync, ltValue, mac, mac48, mac64, map, mapAsync, mapItems, maxBytes, maxEntries, maxGraphemes, maxLength, maxSize, maxValue, maxWords, message, metadata, mimeType, minBytes, minEntries, minGraphemes, minLength, minSize, minValue, minWords, multipleOf, nan, nanoid, never, nonEmpty, nonNullable, nonNullableAsync, nonNullish, nonNullishAsync, nonOptional, nonOptionalAsync, normalize, notBytes, notEntries, notGraphemes, notLength, notSize, notValue, notValues, notWords, null_ as null, null_, nullable, nullableAsync, nullish, nullishAsync, number, object, objectAsync, objectWithRest, objectWithRestAsync, octal, omit, optional, optionalAsync, parse, parseAsync, parseBoolean, parseJson, parser, parserAsync, partial, partialAsync, partialCheck, partialCheckAsync, pick, picklist, pipe, pipeAsync, promise, rawCheck, rawCheckAsync, rawTransform, rawTransformAsync, readonly, record, recordAsync, reduceItems, regex, required, requiredAsync, returns, returnsAsync, rfcEmail, safeInteger, safeParse, safeParseAsync, safeParser, safeParserAsync, set, setAsync, setGlobalConfig, setGlobalMessage, setSchemaMessage, setSpecificMessage, size, slug, someItem, sortItems, startsWith, strictObject, strictObjectAsync, strictTuple, strictTupleAsync, string, stringifyJson, summarize, symbol, title, toBigint, toBoolean, toDate, toLowerCase, toMaxValue, toMinValue, toNumber, toString, toUpperCase, transform, transformAsync, trim, trimEnd, trimStart, tuple, tupleAsync, tupleWithRest, tupleWithRestAsync, ulid, undefined_ as undefined, undefined_, undefinedable, undefinedableAsync, union, unionAsync, unknown, unwrap, url, uuid, value, values, variant, variantAsync, void_ as void, void_, words };
export type { AnySchema, ArgsAction, ArgsActionAsync, ArrayInput, ArrayIssue, ArrayPathItem, ArrayRequirement, ArrayRequirementAsync, ArraySchema, ArraySchemaAsync, AwaitActionAsync, Base64Action, Base64Issue, BaseIssue, BaseMetadata, BaseSchema, BaseSchemaAsync, BaseTransformation, BaseTransformationAsync, BaseValidation, BaseValidationAsync, BicAction, BicIssue, BigintIssue, BigintSchema, BlobIssue, BlobSchema, BooleanIssue, BooleanSchema, Brand, BrandAction, BrandName, BytesAction, BytesIssue, Cache, CacheConfig, CheckAction, CheckActionAsync, CheckIssue, CheckItemsAction, CheckItemsActionAsync, CheckItemsIssue, Class, Config, ContentInput, ContentRequirement, CreditCardAction, CreditCardIssue, Cuid2Action, Cuid2Issue, CustomIssue, CustomSchema, CustomSchemaAsync, DateIssue, DateSchema, DecimalAction, DecimalIssue, Default, DefaultAsync, DefaultValue, DescriptionAction, DigitsAction, DigitsIssue, DomainAction, DomainIssue, EmailAction, EmailIssue, EmojiAction, EmojiIssue, EmptyAction, EmptyIssue, EndsWithAction, EndsWithIssue, EntriesAction, EntriesInput, EntriesIssue, Enum, EnumIssue, EnumSchema, EnumValues, ErrorMessage, EveryItemAction, EveryItemIssue, ExactOptionalSchema, ExactOptionalSchemaAsync, ExamplesAction, ExcludesAction, ExcludesIssue, FailureDataset, Fallback, FallbackAsync, FileIssue, FileSchema, FilterItemsAction, FindItemAction, FiniteAction, FiniteIssue, FlatErrors, Flavor, FlavorAction, FlavorName, FunctionIssue, FunctionSchema, GenericIssue, GenericMetadata, GenericPipeAction, GenericPipeActionAsync, GenericPipeItem, GenericPipeItemAsync, GenericSchema, GenericSchemaAsync, GenericTransformation, GenericTransformationAsync, GenericValidation, GenericValidationAsync, GlobalConfig, GraphemesAction, GraphemesIssue, GtValueAction, GtValueIssue, GuardAction, GuardFunction, GuardIssue, HashAction, HashIssue, HashType, HexColorAction, HexColorIssue, HexadecimalAction, HexadecimalIssue, ImeiAction, ImeiIssue, IncludesAction, IncludesIssue, InferDefault, InferDefaults, InferExamples, InferFallback, InferFallbacks, InferGuardOutput, InferInput, InferIssue, InferMetadata, InferOutput, InstanceIssue, InstanceSchema, IntegerAction, IntegerIssue, IntersectIssue, IntersectOptions, IntersectOptionsAsync, IntersectSchema, IntersectSchemaAsync, IpAction, IpIssue, Ipv4Action, Ipv4Issue, Ipv6Action, Ipv6Issue, IsbnAction, IsbnIssue, IsoDateAction, IsoDateIssue, IsoDateTimeAction, IsoDateTimeIssue, IsoTimeAction, IsoTimeIssue, IsoTimeSecondAction, IsoTimeSecondIssue, IsoTimestampAction, IsoTimestampIssue, IsoWeekAction, IsoWeekIssue, IsrcAction, IsrcIssue, IssueDotPath, IssuePathItem, JwsCompactAction, JwsCompactIssue, LazySchema, LazySchemaAsync, LengthAction, LengthInput, LengthIssue, Literal, LiteralIssue, LiteralSchema, LooseObjectIssue, LooseObjectSchema, LooseObjectSchemaAsync, LooseTupleIssue, LooseTupleSchema, LooseTupleSchemaAsync, LtValueAction, LtValueIssue, Mac48Action, Mac48Issue, Mac64Action, Mac64Issue, MacAction, MacIssue, MapIssue, MapItemsAction, MapPathItem, MapSchema, MapSchemaAsync, MaxBytesAction, MaxBytesIssue, MaxEntriesAction, MaxEntriesIssue, MaxGraphemesAction, MaxGraphemesIssue, MaxLengthAction, MaxLengthIssue, MaxSizeAction, MaxSizeIssue, MaxValueAction, MaxValueIssue, MaxWordsAction, MaxWordsIssue, MetadataAction, MimeTypeAction, MimeTypeIssue, MinBytesAction, MinBytesIssue, MinEntriesAction, MinEntriesIssue, MinGraphemesAction, MinGraphemesIssue, MinLengthAction, MinLengthIssue, MinSizeAction, MinSizeIssue, MinValueAction, MinValueIssue, MinWordsAction, MinWordsIssue, MultipleOfAction, MultipleOfIssue, NanIssue, NanSchema, NanoIDAction, NanoIDIssue, NanoIdAction, NanoIdIssue, NeverIssue, NeverSchema, NonEmptyAction, NonEmptyIssue, NonNullableIssue, NonNullableSchema, NonNullableSchemaAsync, NonNullishIssue, NonNullishSchema, NonNullishSchemaAsync, NonOptionalIssue, NonOptionalSchema, NonOptionalSchemaAsync, NormalizeAction, NormalizeForm, NotBytesAction, NotBytesIssue, NotEntriesAction, NotEntriesIssue, NotGraphemesAction, NotGraphemesIssue, NotLengthAction, NotLengthIssue, NotSizeAction, NotSizeIssue, NotValueAction, NotValueIssue, NotValuesAction, NotValuesIssue, NotWordsAction, NotWordsIssue, NullIssue, NullSchema, NullableSchema, NullableSchemaAsync, NullishSchema, NullishSchemaAsync, NumberIssue, NumberSchema, ObjectEntries, ObjectEntriesAsync, ObjectIssue, ObjectKeys, ObjectPathItem, ObjectSchema, ObjectSchemaAsync, ObjectWithRestIssue, ObjectWithRestSchema, ObjectWithRestSchemaAsync, OctalAction, OctalIssue, OptionalSchema, OptionalSchemaAsync, OutputDataset, ParseBooleanAction, ParseBooleanConfig, ParseBooleanIssue, ParseJsonAction, ParseJsonConfig, ParseJsonIssue, Parser, ParserAsync, PartialCheckAction, PartialCheckActionAsync, PartialCheckIssue, PartialDataset, PicklistIssue, PicklistOptions, PicklistSchema, PipeAction, PipeActionAsync, PipeItem, PipeItemAsync, PromiseIssue, PromiseSchema, RawCheckAction, RawCheckActionAsync, RawCheckAddIssue, RawCheckContext, RawCheckIssue, RawCheckIssueInfo, RawTransformAction, RawTransformActionAsync, RawTransformAddIssue, RawTransformContext, RawTransformIssue, RawTransformIssueInfo, ReadonlyAction, RecordIssue, RecordSchema, RecordSchemaAsync, ReduceItemsAction, RegexAction, RegexIssue, ReturnsAction, ReturnsActionAsync, RfcEmailAction, RfcEmailIssue, SafeIntegerAction, SafeIntegerIssue, SafeParseResult, SafeParser, SafeParserAsync, SchemaWithCache, SchemaWithCacheAsync, SchemaWithFallback, SchemaWithFallbackAsync, SchemaWithOmit, SchemaWithPartial, SchemaWithPartialAsync, SchemaWithPick, SchemaWithPipe, SchemaWithPipeAsync, SchemaWithRequired, SchemaWithRequiredAsync, SchemaWithoutPipe, SetIssue, SetPathItem, SetSchema, SetSchemaAsync, SizeAction, SizeInput, SizeIssue, SlugAction, SlugIssue, SomeItemAction, SomeItemIssue, SortItemsAction, StandardProps, StartsWithAction, StartsWithIssue, StrictObjectIssue, StrictObjectSchema, StrictObjectSchemaAsync, StrictTupleIssue, StrictTupleSchema, StrictTupleSchemaAsync, StringIssue, StringSchema, StringifyJsonAction, StringifyJsonConfig, StringifyJsonIssue, SuccessDataset, SymbolIssue, SymbolSchema, TitleAction, ToBigintAction, ToBigintIssue, ToBooleanAction, ToDateAction, ToDateIssue, ToLowerCaseAction, ToMaxValueAction, ToMinValueAction, ToNumberAction, ToNumberIssue, ToStringAction, ToStringIssue, ToUpperCaseAction, TransformAction, TransformActionAsync, TrimAction, TrimEndAction, TrimStartAction, TupleIssue, TupleItems, TupleItemsAsync, TupleSchema, TupleSchemaAsync, TupleWithRestIssue, TupleWithRestSchema, TupleWithRestSchemaAsync, UlidAction, UlidIssue, UndefinedIssue, UndefinedSchema, UndefinedableSchema, UndefinedableSchemaAsync, UnionIssue, UnionOptions, UnionOptionsAsync, UnionSchema, UnionSchemaAsync, UnknownDataset, UnknownPathItem, UnknownSchema, UrlAction, UrlIssue, UuidAction, UuidIssue, ValueAction, ValueInput, ValueIssue, ValuesAction, ValuesIssue, VariantIssue, VariantOptions, VariantOptionsAsync, VariantSchema, VariantSchemaAsync, VoidIssue, VoidSchema, WordsAction, WordsIssue };
