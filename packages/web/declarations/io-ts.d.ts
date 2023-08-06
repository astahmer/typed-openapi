import { Either } from 'fp-ts/lib/Either';
import { Predicate, Refinement } from 'fp-ts/lib/function';

/**
 * @since 1.0.0
 */

/**
 * @category Decode error
 * @since 1.0.0
 */
interface ContextEntry {
  readonly key: string
  readonly type: Decoder<any, any>
  /** the input data */
  readonly actual?: unknown
}
/**
 * @category Decode error
 * @since 1.0.0
 */
interface Context extends ReadonlyArray<ContextEntry> {}
/**
 * @category Decode error
 * @since 1.0.0
 */
interface ValidationError {
  /** the offending (sub)value */
  readonly value: unknown
  /** where the error originated */
  readonly context: Context
  /** optional custom error message */
  readonly message?: string
}
/**
 * @category Decode error
 * @since 1.0.0
 */
interface Errors extends Array<ValidationError> {}
/**
 * @category Decode error
 * @since 1.0.0
 */
declare type Validation<A> = Either<Errors, A>
/**
 * @category Decode error
 * @since 1.0.0
 */
declare const failures: <T>(errors: Errors) => Validation<T>
/**
 * @category Decode error
 * @since 1.0.0
 */
declare const failure: <T>(value: unknown, context: Context, message?: string) => Validation<T>
/**
 * @category Decode error
 * @since 1.0.0
 */
declare const success: <T>(value: T) => Validation<T>
/**
 * @since 1.0.0
 */
declare type Is<A> = (u: unknown) => u is A
/**
 * @since 1.0.0
 */
declare type Validate<I, A> = (i: I, context: Context) => Validation<A>
/**
 * @since 1.0.0
 */
declare type Decode<I, A> = (i: I) => Validation<A>
/**
 * @since 1.0.0
 */
declare type Encode<A, O> = (a: A) => O
/**
 * @since 1.0.0
 */
interface Any extends Type<any, any, any> {}
/**
 * @since 1.0.0
 */
interface Mixed extends Type<any, any, unknown> {}
/**
 * @category Codec
 * @since 1.0.0
 */
declare type TypeOf<C extends Any> = C['_A']
/**
 * @category Codec
 * @since 1.0.0
 */
declare type InputOf<C extends Any> = C['_I']
/**
 * @category Codec
 * @since 1.0.0
 */
declare type OutputOf<C extends Any> = C['_O']
/**
 * @category Codec
 * @since 1.0.0
 */
interface Decoder<I, A> {
  readonly name: string
  readonly validate: Validate<I, A>
  readonly decode: Decode<I, A>
}
/**
 * @category Codec
 * @since 1.0.0
 */
interface Encoder<A, O> {
  readonly encode: Encode<A, O>
}
/**
 * @category Codec
 * @since 1.0.0
 */
declare class Type<A, O = A, I = unknown> implements Decoder<I, A>, Encoder<A, O> {
  /** a unique name for this codec */
  readonly name: string
  /** a custom type guard */
  readonly is: Is<A>
  /** succeeds if a value of type I can be decoded to a value of type A */
  readonly validate: Validate<I, A>
  /** converts a value of type A to a value of type O */
  readonly encode: Encode<A, O>
  /**
   * @since 1.0.0
   */
  readonly _A: A
  /**
   * @since 1.0.0
   */
  readonly _O: O
  /**
   * @since 1.0.0
   */
  readonly _I: I
  constructor(
    /** a unique name for this codec */
    name: string,
    /** a custom type guard */
    is: Is<A>,
    /** succeeds if a value of type I can be decoded to a value of type A */
    validate: Validate<I, A>,
    /** converts a value of type A to a value of type O */
    encode: Encode<A, O>
  )
  /**
   * @since 1.0.0
   */
  pipe<B, IB, A extends IB, OB extends A>(this: Type<A, O, I>, ab: Type<B, OB, IB>, name?: string): Type<B, O, I>
  /**
   * @since 1.0.0
   */
  asDecoder(): Decoder<I, A>
  /**
   * @since 1.0.0
   */
  asEncoder(): Encoder<A, O>
  /**
   * a version of `validate` with a default context
   * @since 1.0.0
   */
  decode(i: I): Validation<A>
}
/**
 * @since 1.0.0
 */
declare const identity: <A>(a: A) => A
/**
 * @since 1.0.0
 */
declare function getFunctionName(f: Function): string
/**
 * @since 1.0.0
 */
declare function getContextEntry(key: string, decoder: Decoder<any, any>): ContextEntry
/**
 * @since 1.0.0
 */
declare function appendContext(c: Context, key: string, decoder: Decoder<any, any>, actual?: unknown): Context
/**
 * @since 1.0.0
 */
interface AnyProps {
  [key: string]: Any
}
/**
 * @since 1.0.0
 */
declare type TypeOfProps<P extends AnyProps> = {
  [K in keyof P]: TypeOf<P[K]>
}
/**
 * @since 1.0.0
 */
declare type OutputOfProps<P extends AnyProps> = {
  [K in keyof P]: OutputOf<P[K]>
}
/**
 * @since 1.0.0
 */
interface Props {
  [key: string]: Mixed
}
/**
 * @since 1.0.0
 */
declare type TypeOfPartialProps<P extends AnyProps> = {
  [K in keyof P]?: TypeOf<P[K]>
}
/**
 * @since 1.0.0
 */
declare type OutputOfPartialProps<P extends AnyProps> = {
  [K in keyof P]?: OutputOf<P[K]>
}
/**
 * @since 1.0.0
 */
declare type TypeOfDictionary<D extends Any, C extends Any> = {
  [K in TypeOf<D>]: TypeOf<C>
}
/**
 * @since 1.0.0
 */
declare type OutputOfDictionary<D extends Any, C extends Any> = {
  [K in OutputOf<D>]: OutputOf<C>
}
/**
 * @since 1.1.0
 */
interface HasPropsRefinement extends RefinementType<HasProps, any, any, any> {}
/**
 * @since 1.1.0
 */
interface HasPropsReadonly extends ReadonlyType<HasProps, any, any, any> {}
/**
 * @since 1.1.0
 */
interface HasPropsIntersection extends IntersectionType<Array<HasProps>, any, any, any> {}
/**
 * @since 1.1.0
 */
declare type HasProps =
  | HasPropsRefinement
  | HasPropsReadonly
  | HasPropsIntersection
  | InterfaceType<any, any, any, any>
  | StrictType<any, any, any, any>
  | PartialType<any, any, any, any>
/**
 * @since 1.0.0
 */
declare class NullType extends Type<null> {
  /**
   * @since 1.0.0
   */
  readonly _tag: 'NullType'
  constructor()
}
/**
 * @since 1.5.3
 */
interface NullC extends NullType {}
/**
 * @category primitives
 * @since 1.0.0
 */
declare const nullType: NullC
/**
 * @since 1.0.0
 */
declare class UndefinedType extends Type<undefined> {
  /**
   * @since 1.0.0
   */
  readonly _tag: 'UndefinedType'
  constructor()
}
/**
 * @since 1.5.3
 */
interface UndefinedC extends UndefinedType {}
declare const undefinedType: UndefinedC
/**
 * @since 1.2.0
 */
declare class VoidType extends Type<void> {
  /**
   * @since 1.0.0
   */
  readonly _tag: 'VoidType'
  constructor()
}
/**
 * @since 1.5.3
 */
interface VoidC extends VoidType {}
/**
 * @category primitives
 * @since 1.2.0
 */
declare const voidType: VoidC
/**
 * @since 1.5.0
 */
declare class UnknownType extends Type<unknown> {
  /**
   * @since 1.0.0
   */
  readonly _tag: 'UnknownType'
  constructor()
}
/**
 * @since 1.5.3
 */
interface UnknownC extends UnknownType {}
/**
 * @category primitives
 * @since 1.5.0
 */
declare const unknown: UnknownC
/**
 * @since 1.0.0
 */
declare class StringType extends Type<string> {
  /**
   * @since 1.0.0
   */
  readonly _tag: 'StringType'
  constructor()
}
/**
 * @since 1.5.3
 */
interface StringC extends StringType {}
/**
 * @category primitives
 * @since 1.0.0
 */
declare const string: StringC
/**
 * @since 1.0.0
 */
declare class NumberType extends Type<number> {
  /**
   * @since 1.0.0
   */
  readonly _tag: 'NumberType'
  constructor()
}
/**
 * @since 1.5.3
 */
interface NumberC extends NumberType {}
/**
 * @category primitives
 * @since 1.0.0
 */
declare const number: NumberC
/**
 * @since 2.1.0
 */
declare class BigIntType extends Type<bigint> {
  /**
   * @since 1.0.0
   */
  readonly _tag: 'BigIntType'
  constructor()
}
/**
 * @since 2.1.0
 */
interface BigIntC extends BigIntType {}
/**
 * @category primitives
 * @since 2.1.0
 */
declare const bigint: BigIntC
/**
 * @since 1.0.0
 */
declare class BooleanType extends Type<boolean> {
  /**
   * @since 1.0.0
   */
  readonly _tag: 'BooleanType'
  constructor()
}
/**
 * @since 1.5.3
 */
interface BooleanC extends BooleanType {}
/**
 * @category primitives
 * @since 1.0.0
 */
declare const boolean: BooleanC
/**
 * @since 1.0.0
 */
declare class AnyArrayType extends Type<Array<unknown>> {
  /**
   * @since 1.0.0
   */
  readonly _tag: 'AnyArrayType'
  constructor()
}
/**
 * @since 1.5.3
 */
interface UnknownArrayC extends AnyArrayType {}
/**
 * @category primitives
 * @since 1.7.1
 */
declare const UnknownArray: UnknownArrayC
/**
 * @since 1.0.0
 */
declare class AnyDictionaryType extends Type<{
  [key: string]: unknown
}> {
  /**
   * @since 1.0.0
   */
  readonly _tag: 'AnyDictionaryType'
  constructor()
}
/**
 * @since 1.5.3
 */
interface UnknownRecordC extends AnyDictionaryType {}
/**
 * @category primitives
 * @since 1.7.1
 */
declare const UnknownRecord: UnknownRecordC

declare type LiteralValue = string | number | boolean
/**
 * @since 1.0.0
 */
declare class LiteralType<V extends LiteralValue> extends Type<V> {
  readonly value: V
  /**
   * @since 1.0.0
   */
  readonly _tag: 'LiteralType'
  constructor(
    name: string,
    is: LiteralType<V>['is'],
    validate: LiteralType<V>['validate'],
    encode: LiteralType<V>['encode'],
    value: V
  )
}
/**
 * @since 1.5.3
 */
interface LiteralC<V extends LiteralValue> extends LiteralType<V> {}
/**
 * @category constructors
 * @since 1.0.0
 */
declare function literal<V extends LiteralValue>(value: V, name?: string): LiteralC<V>
/**
 * @since 1.0.0
 */
declare class KeyofType<
  D extends {
    [key: string]: unknown
  }
> extends Type<keyof D> {
  readonly keys: D
  /**
   * @since 1.0.0
   */
  readonly _tag: 'KeyofType'
  constructor(
    name: string,
    is: KeyofType<D>['is'],
    validate: KeyofType<D>['validate'],
    encode: KeyofType<D>['encode'],
    keys: D
  )
}
/**
 * @since 1.5.3
 */
interface KeyofC<
  D extends {
    [key: string]: unknown
  }
> extends KeyofType<D> {}
/**
 * @category constructors
 * @since 1.0.0
 */
declare function keyof<
  D extends {
    [key: string]: unknown
  }
>(keys: D, name?: string): KeyofC<D>
/**
 * @since 1.0.0
 */
declare class RefinementType<C extends Any, A = any, O = A, I = unknown> extends Type<A, O, I> {
  readonly type: C
  readonly predicate: Predicate<A>
  /**
   * @since 1.0.0
   */
  readonly _tag: 'RefinementType'
  constructor(
    name: string,
    is: RefinementType<C, A, O, I>['is'],
    validate: RefinementType<C, A, O, I>['validate'],
    encode: RefinementType<C, A, O, I>['encode'],
    type: C,
    predicate: Predicate<A>
  )
}
declare const _brand: unique symbol
/**
 * @since 1.8.1
 */
interface Brand<B> {
  readonly [_brand]: B
}
/**
 * @since 1.8.1
 */
declare type Branded<A, B> = A & Brand<B>
/**
 * @since 1.8.1
 */
interface BrandC<C extends Any, B> extends RefinementType<C, Branded<TypeOf<C>, B>, OutputOf<C>, InputOf<C>> {}
/**
 * @category combinators
 * @since 1.8.1
 */
declare function brand<
  C extends Any,
  N extends string,
  B extends {
    readonly [K in N]: symbol
  }
>(codec: C, predicate: Refinement<TypeOf<C>, Branded<TypeOf<C>, B>>, name: N): BrandC<C, B>
/**
 * @since 1.8.1
 */
interface IntBrand {
  readonly Int: unique symbol
}
/**
 * A branded codec representing an integer
 *
 * @category primitives
 * @since 1.8.1
 */
declare const Int: BrandC<NumberC, IntBrand>
/**
 * @since 1.8.1
 */
declare type Int = Branded<number, IntBrand>
/**
 * @since 1.0.0
 */
declare class RecursiveType<C extends Any, A = any, O = A, I = unknown> extends Type<A, O, I> {
  runDefinition: () => C
  /**
   * @since 1.0.0
   */
  readonly _tag: 'RecursiveType'
  constructor(
    name: string,
    is: RecursiveType<C, A, O, I>['is'],
    validate: RecursiveType<C, A, O, I>['validate'],
    encode: RecursiveType<C, A, O, I>['encode'],
    runDefinition: () => C
  )
  /**
   * @since 1.0.0
   */
  readonly type: C
}
/**
 * @category combinators
 * @since 1.0.0
 */
declare function recursion<A, O = A, I = unknown, C extends Type<A, O, I> = Type<A, O, I>>(
  name: string,
  definition: (self: C) => C
): RecursiveType<C, A, O, I>
/**
 * @since 1.0.0
 */
declare class ArrayType<C extends Any, A = any, O = A, I = unknown> extends Type<A, O, I> {
  readonly type: C
  /**
   * @since 1.0.0
   */
  readonly _tag: 'ArrayType'
  constructor(
    name: string,
    is: ArrayType<C, A, O, I>['is'],
    validate: ArrayType<C, A, O, I>['validate'],
    encode: ArrayType<C, A, O, I>['encode'],
    type: C
  )
}
/**
 * @since 1.5.3
 */
interface ArrayC<C extends Mixed> extends ArrayType<C, Array<TypeOf<C>>, Array<OutputOf<C>>, unknown> {}
/**
 * @category combinators
 * @since 1.0.0
 */
declare function array<C extends Mixed>(item: C, name?: string): ArrayC<C>
/**
 * @since 1.0.0
 */
declare class InterfaceType<P, A = any, O = A, I = unknown> extends Type<A, O, I> {
  readonly props: P
  /**
   * @since 1.0.0
   */
  readonly _tag: 'InterfaceType'
  constructor(
    name: string,
    is: InterfaceType<P, A, O, I>['is'],
    validate: InterfaceType<P, A, O, I>['validate'],
    encode: InterfaceType<P, A, O, I>['encode'],
    props: P
  )
}
/**
 * @since 1.5.3
 */
interface TypeC<P extends Props>
  extends InterfaceType<
    P,
    {
      [K in keyof P]: TypeOf<P[K]>
    },
    {
      [K in keyof P]: OutputOf<P[K]>
    },
    unknown
  > {}
/**
 * @category combinators
 * @since 1.0.0
 */
declare function type<P extends Props>(props: P, name?: string): TypeC<P>
/**
 * @since 1.0.0
 */
declare class PartialType<P, A = any, O = A, I = unknown> extends Type<A, O, I> {
  readonly props: P
  /**
   * @since 1.0.0
   */
  readonly _tag: 'PartialType'
  constructor(
    name: string,
    is: PartialType<P, A, O, I>['is'],
    validate: PartialType<P, A, O, I>['validate'],
    encode: PartialType<P, A, O, I>['encode'],
    props: P
  )
}
/**
 * @since 1.5.3
 */
interface PartialC<P extends Props>
  extends PartialType<
    P,
    {
      [K in keyof P]?: TypeOf<P[K]>
    },
    {
      [K in keyof P]?: OutputOf<P[K]>
    },
    unknown
  > {}
/**
 * @category combinators
 * @since 1.0.0
 */
declare function partial<P extends Props>(props: P, name?: string): PartialC<P>
/**
 * @since 1.0.0
 */
declare class DictionaryType<D extends Any, C extends Any, A = any, O = A, I = unknown> extends Type<A, O, I> {
  readonly domain: D
  readonly codomain: C
  /**
   * @since 1.0.0
   */
  readonly _tag: 'DictionaryType'
  constructor(
    name: string,
    is: DictionaryType<D, C, A, O, I>['is'],
    validate: DictionaryType<D, C, A, O, I>['validate'],
    encode: DictionaryType<D, C, A, O, I>['encode'],
    domain: D,
    codomain: C
  )
}
/**
 * @since 1.5.3
 */
interface RecordC<D extends Mixed, C extends Mixed>
  extends DictionaryType<
    D,
    C,
    {
      [K in TypeOf<D>]: TypeOf<C>
    },
    {
      [K in OutputOf<D>]: OutputOf<C>
    },
    unknown
  > {}
/**
 * @category combinators
 * @since 1.7.1
 */
declare function record<D extends Mixed, C extends Mixed>(domain: D, codomain: C, name?: string): RecordC<D, C>
/**
 * @since 1.0.0
 */
declare class UnionType<CS extends Array<Any>, A = any, O = A, I = unknown> extends Type<A, O, I> {
  readonly types: CS
  /**
   * @since 1.0.0
   */
  readonly _tag: 'UnionType'
  constructor(
    name: string,
    is: UnionType<CS, A, O, I>['is'],
    validate: UnionType<CS, A, O, I>['validate'],
    encode: UnionType<CS, A, O, I>['encode'],
    types: CS
  )
}
/**
 * @since 1.5.3
 */
interface UnionC<CS extends [Mixed, Mixed, ...Array<Mixed>]>
  extends UnionType<CS, TypeOf<CS[number]>, OutputOf<CS[number]>, unknown> {}
/**
 * @category combinators
 * @since 1.0.0
 */
declare function union<CS extends [Mixed, Mixed, ...Array<Mixed>]>(codecs: CS, name?: string): UnionC<CS>
/**
 * @since 1.0.0
 */
declare class IntersectionType<CS extends Array<Any>, A = any, O = A, I = unknown> extends Type<A, O, I> {
  readonly types: CS
  /**
   * @since 1.0.0
   */
  readonly _tag: 'IntersectionType'
  constructor(
    name: string,
    is: IntersectionType<CS, A, O, I>['is'],
    validate: IntersectionType<CS, A, O, I>['validate'],
    encode: IntersectionType<CS, A, O, I>['encode'],
    types: CS
  )
}
/**
 * @since 1.5.3
 */
interface IntersectionC<CS extends [Mixed, Mixed, ...Array<Mixed>]>
  extends IntersectionType<
    CS,
    CS extends {
      length: 2
    }
      ? TypeOf<CS[0]> & TypeOf<CS[1]>
      : CS extends {
          length: 3
        }
      ? TypeOf<CS[0]> & TypeOf<CS[1]> & TypeOf<CS[2]>
      : CS extends {
          length: 4
        }
      ? TypeOf<CS[0]> & TypeOf<CS[1]> & TypeOf<CS[2]> & TypeOf<CS[3]>
      : CS extends {
          length: 5
        }
      ? TypeOf<CS[0]> & TypeOf<CS[1]> & TypeOf<CS[2]> & TypeOf<CS[3]> & TypeOf<CS[4]>
      : unknown,
    CS extends {
      length: 2
    }
      ? OutputOf<CS[0]> & OutputOf<CS[1]>
      : CS extends {
          length: 3
        }
      ? OutputOf<CS[0]> & OutputOf<CS[1]> & OutputOf<CS[2]>
      : CS extends {
          length: 4
        }
      ? OutputOf<CS[0]> & OutputOf<CS[1]> & OutputOf<CS[2]> & OutputOf<CS[3]>
      : CS extends {
          length: 5
        }
      ? OutputOf<CS[0]> & OutputOf<CS[1]> & OutputOf<CS[2]> & OutputOf<CS[3]> & OutputOf<CS[4]>
      : unknown,
    unknown
  > {}
/**
 * @category combinators
 * @since 1.0.0
 */
declare function intersection<
  A extends Mixed,
  B extends Mixed,
  C extends Mixed,
  D extends Mixed,
  E extends Mixed
>(codecs: [A, B, C, D, E], name?: string): IntersectionC<[A, B, C, D, E]>
declare function intersection<A extends Mixed, B extends Mixed, C extends Mixed, D extends Mixed>(
  codecs: [A, B, C, D],
  name?: string
): IntersectionC<[A, B, C, D]>
declare function intersection<A extends Mixed, B extends Mixed, C extends Mixed>(
  codecs: [A, B, C],
  name?: string
): IntersectionC<[A, B, C]>
declare function intersection<A extends Mixed, B extends Mixed>(
  codecs: [A, B],
  name?: string
): IntersectionC<[A, B]>
/**
 * @since 1.0.0
 */
declare class TupleType<CS extends Array<Any>, A = any, O = A, I = unknown> extends Type<A, O, I> {
  readonly types: CS
  /**
   * @since 1.0.0
   */
  readonly _tag: 'TupleType'
  constructor(
    name: string,
    is: TupleType<CS, A, O, I>['is'],
    validate: TupleType<CS, A, O, I>['validate'],
    encode: TupleType<CS, A, O, I>['encode'],
    types: CS
  )
}
/**
 * @since 1.5.3
 */
interface TupleC<CS extends [Mixed, ...Array<Mixed>]>
  extends TupleType<
    CS,
    CS extends {
      length: 1
    }
      ? [TypeOf<CS[0]>]
      : CS extends {
          length: 2
        }
      ? [TypeOf<CS[0]>, TypeOf<CS[1]>]
      : CS extends {
          length: 3
        }
      ? [TypeOf<CS[0]>, TypeOf<CS[1]>, TypeOf<CS[2]>]
      : CS extends {
          length: 4
        }
      ? [TypeOf<CS[0]>, TypeOf<CS[1]>, TypeOf<CS[2]>, TypeOf<CS[3]>]
      : CS extends {
          length: 5
        }
      ? [TypeOf<CS[0]>, TypeOf<CS[1]>, TypeOf<CS[2]>, TypeOf<CS[3]>, TypeOf<CS[4]>]
      : unknown,
    CS extends {
      length: 1
    }
      ? [OutputOf<CS[0]>]
      : CS extends {
          length: 2
        }
      ? [OutputOf<CS[0]>, OutputOf<CS[1]>]
      : CS extends {
          length: 3
        }
      ? [OutputOf<CS[0]>, OutputOf<CS[1]>, OutputOf<CS[2]>]
      : CS extends {
          length: 4
        }
      ? [OutputOf<CS[0]>, OutputOf<CS[1]>, OutputOf<CS[2]>, OutputOf<CS[3]>]
      : CS extends {
          length: 5
        }
      ? [OutputOf<CS[0]>, OutputOf<CS[1]>, OutputOf<CS[2]>, OutputOf<CS[3]>, OutputOf<CS[4]>]
      : unknown,
    unknown
  > {}
/**
 * @category combinators
 * @since 1.0.0
 */
declare function tuple<A extends Mixed, B extends Mixed, C extends Mixed, D extends Mixed, E extends Mixed>(
  codecs: [A, B, C, D, E],
  name?: string
): TupleC<[A, B, C, D, E]>
declare function tuple<A extends Mixed, B extends Mixed, C extends Mixed, D extends Mixed>(
  codecs: [A, B, C, D],
  name?: string
): TupleC<[A, B, C, D]>
declare function tuple<A extends Mixed, B extends Mixed, C extends Mixed>(
  codecs: [A, B, C],
  name?: string
): TupleC<[A, B, C]>
declare function tuple<A extends Mixed, B extends Mixed>(codecs: [A, B], name?: string): TupleC<[A, B]>
declare function tuple<A extends Mixed>(codecs: [A], name?: string): TupleC<[A]>
/**
 * @since 1.0.0
 */
declare class ReadonlyType<C extends Any, A = any, O = A, I = unknown> extends Type<A, O, I> {
  readonly type: C
  /**
   * @since 1.0.0
   */
  readonly _tag: 'ReadonlyType'
  constructor(
    name: string,
    is: ReadonlyType<C, A, O, I>['is'],
    validate: ReadonlyType<C, A, O, I>['validate'],
    encode: ReadonlyType<C, A, O, I>['encode'],
    type: C
  )
}
/**
 * @since 1.5.3
 */
interface ReadonlyC<C extends Mixed>
  extends ReadonlyType<C, Readonly<TypeOf<C>>, Readonly<OutputOf<C>>, unknown> {}
/**
 * @category combinators
 * @since 1.0.0
 */
declare function readonly<C extends Mixed>(codec: C, name?: string): ReadonlyC<C>
/**
 * @since 1.0.0
 */
declare class ReadonlyArrayType<C extends Any, A = any, O = A, I = unknown> extends Type<A, O, I> {
  readonly type: C
  /**
   * @since 1.0.0
   */
  readonly _tag: 'ReadonlyArrayType'
  constructor(
    name: string,
    is: ReadonlyArrayType<C, A, O, I>['is'],
    validate: ReadonlyArrayType<C, A, O, I>['validate'],
    encode: ReadonlyArrayType<C, A, O, I>['encode'],
    type: C
  )
}
/**
 * @since 1.5.3
 */
interface ReadonlyArrayC<C extends Mixed>
  extends ReadonlyArrayType<C, ReadonlyArray<TypeOf<C>>, ReadonlyArray<OutputOf<C>>, unknown> {}
/**
 * @category combinators
 * @since 1.0.0
 */
declare function readonlyArray<C extends Mixed>(item: C, name?: string): ReadonlyArrayC<C>
/**
 * Strips additional properties, equivalent to `exact(type(props))`.
 *
 * @category combinators
 * @since 1.0.0
 */
declare const strict: <P extends Props>(props: P, name?: string) => ExactC<TypeC<P>>
/**
 * @since 1.1.0
 */
declare class ExactType<C extends Any, A = any, O = A, I = unknown> extends Type<A, O, I> {
  readonly type: C
  /**
   * @since 1.0.0
   */
  readonly _tag: 'ExactType'
  constructor(
    name: string,
    is: ExactType<C, A, O, I>['is'],
    validate: ExactType<C, A, O, I>['validate'],
    encode: ExactType<C, A, O, I>['encode'],
    type: C
  )
}
/**
 * @since 1.5.3
 */
interface ExactC<C extends HasProps> extends ExactType<C, TypeOf<C>, OutputOf<C>, InputOf<C>> {}
/**
 * Strips additional properties.
 *
 * @category combinators
 * @since 1.1.0
 */
declare function exact<C extends HasProps>(codec: C, name?: string): ExactC<C>
/**
 * @since 1.0.0
 */
declare class FunctionType extends Type<Function> {
  /**
   * @since 1.0.0
   */
  readonly _tag: 'FunctionType'
  constructor()
}
/**
 * @since 1.5.3
 */
interface FunctionC extends FunctionType {}
/**
 * @category primitives
 * @since 1.0.0
 */
declare const Function: FunctionC
/**
 * @since 1.0.0
 */
declare class NeverType extends Type<never> {
  /**
   * @since 1.0.0
   */
  readonly _tag: 'NeverType'
  constructor()
}
/**
 * @since 1.5.3
 */
interface NeverC extends NeverType {}
/**
 * @category primitives
 * @since 1.0.0
 */
declare const never: NeverC
/**
 * @since 1.0.0
 */
declare class AnyType extends Type<any> {
  /**
   * @since 1.0.0
   */
  readonly _tag: 'AnyType'
  constructor()
}
/**
 * @since 1.5.3
 */
interface AnyC extends AnyType {}
/**
 * @category primitives
 * @since 1.0.0
 */
declare const any: AnyC
/**
 * @since 1.5.3
 */
interface RefinementC<C extends Any, B = TypeOf<C>> extends RefinementType<C, B, OutputOf<C>, InputOf<C>> {}
/**
 * @category combinators
 * @since 1.0.0
 */
declare function refinement<C extends Any, B extends TypeOf<C>>(
  codec: C,
  refinement: Refinement<TypeOf<C>, B>,
  name?: string
): RefinementC<C, B>
declare function refinement<C extends Any>(
  codec: C,
  predicate: Predicate<TypeOf<C>>,
  name?: string
): RefinementC<C>
/**
 * @category primitives
 * @since 1.0.0
 */
declare const Integer: RefinementC<NumberC, number>
/**
 * @since 1.3.0
 * @deprecated
 */
declare class TaggedUnionType<
  Tag extends string,
  CS extends Array<Mixed>,
  A = any,
  O = A,
  I = unknown
> extends UnionType<CS, A, O, I> {
  readonly tag: Tag
  constructor(
    name: string,
    is: TaggedUnionType<Tag, CS, A, O, I>['is'],
    validate: TaggedUnionType<Tag, CS, A, O, I>['validate'],
    encode: TaggedUnionType<Tag, CS, A, O, I>['encode'],
    codecs: CS,
    tag: Tag
  )
}
/**
 * @since 1.5.3
 * @deprecated
 */
interface TaggedUnionC<Tag extends string, CS extends [Mixed, Mixed, ...Array<Mixed>]>  // tslint:disable-next-line: deprecation
  extends TaggedUnionType<Tag, CS, TypeOf<CS[number]>, OutputOf<CS[number]>, unknown> {}
/**
 * Use `union` instead.
 *
 * @category combinators
 * @since 1.3.0
 * @deprecated
 */
declare const taggedUnion: <Tag extends string, CS extends [Mixed, Mixed, ...Mixed[]]>(
  tag: Tag,
  codecs: CS,
  name?: string
) => TaggedUnionC<Tag, CS>

/**
 * Use `unknown` instead.
 *
 * @since 1.0.0
 * @deprecated
 */
declare type mixed = unknown
/**
 * @since 1.0.0
 * @deprecated
 */
declare const getValidationError: (value: unknown, context: Context) => ValidationError
/**
 * @since 1.0.0
 * @deprecated
 */
declare const getDefaultContext: (decoder: Decoder<any, any>) => Context
/**
 * Use `UnknownRecord` instead.
 *
 * @category primitives
 * @since 1.0.0
 * @deprecated
 */
declare const Dictionary: UnknownRecordC
/**
 * @since 1.0.0
 * @deprecated
 */
declare class ObjectType extends Type<object> {
  /**
   * @since 1.0.0
   */
  readonly _tag: 'ObjectType'
  constructor()
}
/**
 * @since 1.5.3
 * @deprecated
 */
interface ObjectC extends ObjectType {}
/**
 * Use `UnknownRecord` instead.
 *
 * @category primitives
 * @since 1.0.0
 * @deprecated
 */
declare const object: ObjectC
/**
 * Use `record` instead.
 *
 * @category combinators
 * @since 1.0.0
 * @deprecated
 */
declare const dictionary: typeof record
/**
 * @since 1.4.2
 * @deprecated
 */
declare type Compact<A> = {
  [K in keyof A]: A[K]
}
/**
 * @since 1.0.0
 * @deprecated
 */
declare class StrictType<P, A = any, O = A, I = unknown> extends Type<A, O, I> {
  readonly props: P
  /**
   * @since 1.0.0
   */
  readonly _tag: 'StrictType'
  constructor(
    name: string,
    is: StrictType<P, A, O, I>['is'],
    validate: StrictType<P, A, O, I>['validate'],
    encode: StrictType<P, A, O, I>['encode'],
    props: P
  )
}
/**
 * @since 1.5.3
 * @deprecated
 */
interface StrictC<P extends Props>  // tslint:disable-next-line: deprecation
  extends StrictType<
    P,
    {
      [K in keyof P]: TypeOf<P[K]>
    },
    {
      [K in keyof P]: OutputOf<P[K]>
    },
    unknown
  > {}
/**
 * @since 1.3.0
 * @deprecated
 */
declare type TaggedProps<Tag extends string> = {
  [K in Tag]: LiteralType<any>
}
/**
 * @since 1.3.0
 * @deprecated
 */
interface TaggedRefinement<Tag extends string, A, O = A> extends RefinementType<Tagged<Tag>, A, O> {}
/**
 * @since 1.3.0
 * @deprecated
 */
interface TaggedUnion<Tag extends string, A, O = A> extends UnionType<Array<Tagged<Tag>>, A, O> {}
/**
 * @since 1.3.0
 * @deprecated
 */
declare type TaggedIntersectionArgument<Tag extends string> =
  | [Tagged<Tag>]
  | [Tagged<Tag>, Mixed]
  | [Mixed, Tagged<Tag>]
  | [Tagged<Tag>, Mixed, Mixed]
  | [Mixed, Tagged<Tag>, Mixed]
  | [Mixed, Mixed, Tagged<Tag>]
  | [Tagged<Tag>, Mixed, Mixed, Mixed]
  | [Mixed, Tagged<Tag>, Mixed, Mixed]
  | [Mixed, Mixed, Tagged<Tag>, Mixed]
  | [Mixed, Mixed, Mixed, Tagged<Tag>]
  | [Tagged<Tag>, Mixed, Mixed, Mixed, Mixed]
  | [Mixed, Tagged<Tag>, Mixed, Mixed, Mixed]
  | [Mixed, Mixed, Tagged<Tag>, Mixed, Mixed]
  | [Mixed, Mixed, Mixed, Tagged<Tag>, Mixed]
  | [Mixed, Mixed, Mixed, Mixed, Tagged<Tag>]
/**
 * @since 1.3.0
 * @deprecated
 */
interface TaggedIntersection<Tag extends string, A, O = A>  // tslint:disable-next-line: deprecation
  extends IntersectionType<TaggedIntersectionArgument<Tag>, A, O> {}
/**
 * @since 1.3.0
 * @deprecated
 */
interface TaggedExact<Tag extends string, A, O = A> extends ExactType<Tagged<Tag>, A, O> {}
/**
 * @since 1.3.0
 * @deprecated
 */
declare type Tagged<Tag extends string, A = any, O = A> =
  | InterfaceType<TaggedProps<Tag>, A, O>
  | StrictType<TaggedProps<Tag>, A, O>
  | TaggedRefinement<Tag, A, O>
  | TaggedUnion<Tag, A, O>
  | TaggedIntersection<Tag, A, O>
  | TaggedExact<Tag, A, O>
  | RecursiveType<any, A, O>
/**
 * Drops the codec "kind".
 *
 * @category combinators
 * @since 1.1.0
 * @deprecated
 */
declare function clean<A, O = A, I = unknown>(codec: Type<A, O, I>): Type<A, O, I>
/**
 * @since 1.0.0
 * @deprecated
 */
declare type PropsOf<
  T extends {
    props: any
  }
> = T['props']
/**
 * @since 1.1.0
 * @deprecated
 */
declare type Exact<T, X extends T> = T &
  {
    [K in ({
      [K in keyof X]: K
    } &
      {
        [K in keyof T]: never
      } & {
        [key: string]: never
      })[keyof X]]?: never
  }
/**
 * Keeps the codec "kind".
 *
 * @category combinators
 * @since 1.1.0
 * @deprecated
 */
declare function alias<A, O, P, I>(
  codec: PartialType<P, A, O, I>
): <AA extends A, OO extends O = O, PP extends P = P, II extends I = I>() => PartialType<PP, AA, OO, II>
declare function alias<A, O, P, I>(
  codec: StrictType<P, A, O, I>
): <AA extends A, OO extends O = O, PP extends P = P, II extends I = I>() => StrictType<PP, AA, OO, II>
declare function alias<A, O, P, I>(
  codec: InterfaceType<P, A, O, I>
): <AA extends A, OO extends O = O, PP extends P = P, II extends I = I>() => InterfaceType<PP, AA, OO, II>

export { Any, AnyArrayType, AnyC, AnyDictionaryType, AnyProps, AnyType, UnknownArray as Array, ArrayC, ArrayType, BigIntC, BigIntType, BooleanC, BooleanType, Brand, BrandC, Branded, Compact, Context, ContextEntry, Decode, Decoder, Dictionary, DictionaryType, Encode, Encoder, Errors, Exact, ExactC, ExactType, Function, FunctionC, FunctionType, HasProps, HasPropsIntersection, HasPropsReadonly, HasPropsRefinement, InputOf, Int, IntBrand, Integer, InterfaceType, IntersectionC, IntersectionType, Is, KeyofC, KeyofType, LiteralC, LiteralType, Mixed, NeverC, NeverType, NullC, NullType, NumberC, NumberType, ObjectC, ObjectType, OutputOf, OutputOfDictionary, OutputOfPartialProps, OutputOfProps, PartialC, PartialType, Props, PropsOf, ReadonlyArrayC, ReadonlyArrayType, ReadonlyC, ReadonlyType, RecordC, RecursiveType, RefinementC, RefinementType, StrictC, StrictType, StringC, StringType, Tagged, TaggedExact, TaggedIntersection, TaggedIntersectionArgument, TaggedProps, TaggedRefinement, TaggedUnion, TaggedUnionC, TaggedUnionType, TupleC, TupleType, Type, TypeC, TypeOf, TypeOfDictionary, TypeOfPartialProps, TypeOfProps, UndefinedC, UndefinedType, UnionC, UnionType, UnknownArray, UnknownArrayC, UnknownC, UnknownRecord, UnknownRecordC, UnknownType, Validate, Validation, ValidationError, VoidC, VoidType, alias, any, appendContext, array, bigint, boolean, brand, clean, dictionary, exact, failure, failures, getContextEntry, getDefaultContext, getFunctionName, getValidationError, identity, type as interface, intersection, keyof, literal, mixed, never, nullType as null, nullType, number, object, partial, readonly, readonlyArray, record, recursion, refinement, strict, string, success, taggedUnion, tuple, type, undefinedType as undefined, union, unknown, voidType as void, voidType };
