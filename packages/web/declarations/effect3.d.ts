/** Minimal monaco stub for `import { Schema as S } from "@effect/schema"`. */
export declare namespace Schema {
  export type Schema<A = any, I = A, R = never> = unknown;
  export namespace Schema {
    export type Type<S> = any;
  }
  export const String: any;
  export const Number: any;
  export const Int: any;
  export const Boolean: any;
  export const Null: any;
  export const Unknown: any;
  export const Any: any;
  export const Never: any;
  export const UUID: any;
  export function Literal(...args: any[]): any;
  export function Struct(fields: any): any;
  export function Array(item: any): any;
  export function Union(...members: any[]): any;
  export function NullOr(schema: any): any;
  export function optional(schema: any): any;
  export function partial(schema: any): any;
  export function extend(a: any, b: any): any;
  export function Record(args: any): any;
  export function Tuple(...args: any[]): any;
  export function suspend(f: () => any): any;
  export function minLength(n: number): any;
  export function maxLength(n: number): any;
  export function pattern(re: RegExp): any;
  export function greaterThanOrEqualTo(n: number): any;
  export function lessThanOrEqualTo(n: number): any;
  export function greaterThan(n: number): any;
  export function lessThan(n: number): any;
  export function multipleOf(n: number): any;
  export function minItems(n: number): any;
  export function maxItems(n: number): any;
}

declare module "@effect/schema" {
  export { Schema };
}
