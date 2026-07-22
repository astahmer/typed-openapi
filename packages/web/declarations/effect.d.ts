/** Minimal monaco stub for `import { Schema } from "effect"` (playground has noSemanticValidation). */
export declare namespace Schema {
  export type Schema<A = any, I = A, R = never> = {
    Type: A;
    Encoded: I;
    Context: R;
  };
  export const String: Schema<string>;
  export const Number: Schema<number>;
  export const Int: Schema<number>;
  export const Boolean: Schema<boolean>;
  export const Null: Schema<null>;
  export const Unknown: Schema<unknown>;
  export const Any: Schema<any>;
  export const Never: Schema<never>;
  export const UUID: Schema<string>;
  export const URL: Schema<URL>;
  export function Literal<T extends string | number | boolean>(value: T): Schema<T>;
  export function Struct<Fields extends Record<string, Schema.Schema.Any>>(
    fields: Fields,
  ): Schema<any>;
  export function Array<A>(item: Schema<A>): Schema<A[]>;
  export function Union(...members: Schema.Schema.Any[]): Schema<any>;
  export function NullOr<A>(schema: Schema<A>): Schema<A | null>;
  export function optional<A>(schema: Schema<A>): Schema<A | undefined>;
  export function partial<A>(schema: Schema<A>): Schema<Partial<A>>;
  export function extend(a: Schema.Schema.Any, b: Schema.Schema.Any): Schema<any>;
  export function Record(key: Schema.Schema.Any, value: Schema.Schema.Any): Schema<any>;
  export function Tuple(...args: any[]): Schema<any>;
  export function suspend<A>(f: () => Schema<A>): Schema<A>;
  export function minLength(n: number): <A>(self: Schema<A>) => Schema<A>;
  export function maxLength(n: number): <A>(self: Schema<A>) => Schema<A>;
  export function pattern(re: RegExp): <A>(self: Schema<A>) => Schema<A>;
  export function greaterThanOrEqualTo(n: number): <A>(self: Schema<A>) => Schema<A>;
  export function lessThanOrEqualTo(n: number): <A>(self: Schema<A>) => Schema<A>;
  export function greaterThan(n: number): <A>(self: Schema<A>) => Schema<A>;
  export function lessThan(n: number): <A>(self: Schema<A>) => Schema<A>;
  export function multipleOf(n: number): <A>(self: Schema<A>) => Schema<A>;
  export function minItems(n: number): <A>(self: Schema<A>) => Schema<A>;
  export function maxItems(n: number): <A>(self: Schema<A>) => Schema<A>;
  export namespace Schema {
    export type Any = Schema<any, any, any>;
  }
}

declare module "effect" {
  export { Schema };
}
