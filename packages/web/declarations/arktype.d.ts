declare const asConst: <t>(t: { [k in keyof t]: t[k] extends [] | Literalable ? t[k] : t[k] extends infer T ? { [k_1 in keyof T]: t[k][k_1] extends [] | Literalable ? t[k][k_1] : t[k][k_1] extends infer T_1 ? { [k_2 in keyof T_1]: t[k][k_1][k_2] extends [] | Literalable ? t[k][k_1][k_2] : t[k][k_1][k_2] extends infer T_2 ? { [k_3 in keyof T_2]: t[k][k_1][k_2][k_3] extends [] | Literalable ? t[k][k_1][k_2][k_3] : t[k][k_1][k_2][k_3] extends infer T_3 ? { [k_4 in keyof T_3]: t[k][k_1][k_2][k_3][k_4] extends [] | Literalable ? t[k][k_1][k_2][k_3][k_4] : t[k][k_1][k_2][k_3][k_4] extends infer T_4 ? { [k_5 in keyof T_4]: t[k][k_1][k_2][k_3][k_4][k_5] extends [] | Literalable ? t[k][k_1][k_2][k_3][k_4][k_5] : t[k][k_1][k_2][k_3][k_4][k_5] extends infer T_5 ? { [k_6 in keyof T_5]: t[k][k_1][k_2][k_3][k_4][k_5][k_6] extends [] | Literalable ? t[k][k_1][k_2][k_3][k_4][k_5][k_6] : t[k][k_1][k_2][k_3][k_4][k_5][k_6] extends infer T_6 ? { [k_7 in keyof T_6]: t[k][k_1][k_2][k_3][k_4][k_5][k_6][k_7] extends [] | Literalable ? t[k][k_1][k_2][k_3][k_4][k_5][k_6][k_7] : t[k][k_1][k_2][k_3][k_4][k_5][k_6][k_7] extends infer T_7 ? { [k_8 in keyof T_7]: t[k][k_1][k_2][k_3][k_4][k_5][k_6][k_7][k_8] extends [] | Literalable ? t[k][k_1][k_2][k_3][k_4][k_5][k_6][k_7][k_8] : t[k][k_1][k_2][k_3][k_4][k_5][k_6][k_7][k_8] extends infer T_8 ? { [k_9 in keyof T_8]: t[k][k_1][k_2][k_3][k_4][k_5][k_6][k_7][k_8][k_9] extends [] | Literalable ? t[k][k_1][k_2][k_3][k_4][k_5][k_6][k_7][k_8][k_9] : t[k][k_1][k_2][k_3][k_4][k_5][k_6][k_7][k_8][k_9] extends infer T_9 ? { [k_10 in keyof T_9]: t[k][k_1][k_2][k_3][k_4][k_5][k_6][k_7][k_8][k_9][k_10] extends [] | Literalable ? t[k][k_1][k_2][k_3][k_4][k_5][k_6][k_7][k_8][k_9][k_10] : any; } : never; } : never; } : never; } : never; } : never; } : never; } : never; } : never; } : never; } : never; }) => { [k in keyof t]: t[k] extends [] | Literalable ? t[k] : t[k] extends infer T ? { [k_1 in keyof T]: t[k][k_1] extends [] | Literalable ? t[k][k_1] : t[k][k_1] extends infer T_1 ? { [k_2 in keyof T_1]: t[k][k_1][k_2] extends [] | Literalable ? t[k][k_1][k_2] : t[k][k_1][k_2] extends infer T_2 ? { [k_3 in keyof T_2]: t[k][k_1][k_2][k_3] extends [] | Literalable ? t[k][k_1][k_2][k_3] : t[k][k_1][k_2][k_3] extends infer T_3 ? { [k_4 in keyof T_3]: t[k][k_1][k_2][k_3][k_4] extends [] | Literalable ? t[k][k_1][k_2][k_3][k_4] : t[k][k_1][k_2][k_3][k_4] extends infer T_4 ? { [k_5 in keyof T_4]: t[k][k_1][k_2][k_3][k_4][k_5] extends [] | Literalable ? t[k][k_1][k_2][k_3][k_4][k_5] : t[k][k_1][k_2][k_3][k_4][k_5] extends infer T_5 ? { [k_6 in keyof T_5]: t[k][k_1][k_2][k_3][k_4][k_5][k_6] extends [] | Literalable ? t[k][k_1][k_2][k_3][k_4][k_5][k_6] : t[k][k_1][k_2][k_3][k_4][k_5][k_6] extends infer T_6 ? { [k_7 in keyof T_6]: t[k][k_1][k_2][k_3][k_4][k_5][k_6][k_7] extends [] | Literalable ? t[k][k_1][k_2][k_3][k_4][k_5][k_6][k_7] : t[k][k_1][k_2][k_3][k_4][k_5][k_6][k_7] extends infer T_7 ? { [k_8 in keyof T_7]: t[k][k_1][k_2][k_3][k_4][k_5][k_6][k_7][k_8] extends [] | Literalable ? t[k][k_1][k_2][k_3][k_4][k_5][k_6][k_7][k_8] : t[k][k_1][k_2][k_3][k_4][k_5][k_6][k_7][k_8] extends infer T_8 ? { [k_9 in keyof T_8]: t[k][k_1][k_2][k_3][k_4][k_5][k_6][k_7][k_8][k_9] extends [] | Literalable ? t[k][k_1][k_2][k_3][k_4][k_5][k_6][k_7][k_8][k_9] : t[k][k_1][k_2][k_3][k_4][k_5][k_6][k_7][k_8][k_9] extends infer T_9 ? { [k_10 in keyof T_9]: t[k][k_1][k_2][k_3][k_4][k_5][k_6][k_7][k_8][k_9][k_10] extends [] | Literalable ? t[k][k_1][k_2][k_3][k_4][k_5][k_6][k_7][k_8][k_9][k_10] : any; } : never; } : never; } : never; } : never; } : never; } : never; } : never; } : never; } : never; } : never; };
type asConst<t> = castWithExclusion<t, asConstRecurse<t>, []>;
type asConstRecurse<t> = {
    [k in keyof t]: t[k] extends Literalable | [] ? t[k] : asConstRecurse<t[k]>;
} & unknown;
type castWithExclusion<t, castTo, excluded> = t extends excluded ? t : castTo;
type Literalable = string | boolean | number | bigint;
type evaluateObjectOrFunction<t> = isTopType<t> extends true ? t : t extends (...args: infer args) => infer ret ? (...args: args) => ret : evaluate<t>;
type evaluate<t> = {
    [k in keyof t]: t[k];
} & unknown;
/** Causes a type that would be eagerly calculated to be displayed as-is.
 *  WARNING: Makes t NonNullable as a side effect.
 */
type defer<t> = t & {};
type isTopType<t> = (any extends t ? true : false) extends true ? true : false;
type isAny<t> = (any extends t ? topTypeIsAny<t> : false) extends true ? true : false;
type isUnknown<t> = (any extends t ? topTypeIsUnknown<t> : false) extends true ? true : false;
type topTypeIsAny<t> = (t extends {} ? true : false) extends false ? false : true;
type topTypeIsUnknown<t> = (t extends {} ? true : false) extends false ? true : false;
type extractKeysWithValue<o, filter> = {
    [k in keyof o]: isAny<o[k]> extends true ? never : o[k] extends never ? never : o[k] extends filter ? k : never;
}[keyof o];
type extractValues<o, filter> = o[extractKeysWithValue<o, filter>];
type conform<t, base> = t extends base ? t : base;
type constructor<instance = unknown> = new (...args: any[]) => instance;
type instanceOf$1<classType extends constructor<any>> = classType extends constructor<infer Instance> ? Instance : never;
type entryOf<o> = evaluate<{
    [k in keyof o]-?: [k, defined<o[k]>];
}[o extends List ? keyof o & number : keyof o]>;
type stringKeyOf<o> = keyof o & string;
/** Check for type equality without breaking TS for this repo. Fails on some types like Dict/{} */
type equals<t, u> = identity<t> extends identity<u> ? true : false;
declare const nominal: <o extends object, name extends string>(o: o, name: name) => nominal<o, name>;
type nominal<t, id extends string> = t & {
    readonly [id]: id;
};
type identity<in out t> = (_: t) => t;
type extend<t, u extends t> = u;
type defined<t> = Exclude<t, undefined>;
type requiredKeyOf$2<o> = {
    [k in keyof o]-?: o extends {
        [_ in k]-?: o[k];
    } ? k : never;
}[keyof o];
type error<message extends string = string> = `!${message}`;
type castOnError<t, to> = isTopType<t> extends true ? t : t extends never ? t : t extends error ? to : t;
type tryCatch<t, onValid> = isAny<t> extends true ? onValid : t extends never ? onValid : t extends error ? t : onValid;
type RegexLiteral<expression extends string = string> = `/${expression}/`;
type tailOfString<S extends string> = S extends `${string}${infer Tail}` ? Tail : "";
type returnOf<f> = f extends (...args: never[]) => infer returns ? returns : never;
type Dict<k extends string = string, v = unknown> = {
    readonly [_ in k]: v;
};
type List<t = unknown> = readonly t[];
type arraySubclassToReadonly<t extends unknown[]> = readonly t[number][] & {
    [k in Exclude<keyof t, keyof unknown[]>]: t[k];
};
type HomogenousTuple<item, length extends number, result extends item[] = []> = result["length"] extends length ? result : HomogenousTuple<item, length, [...result, item]>;
type CollapsibleList<t> = t | readonly t[];
/** Either:
 * A, with all properties of B undefined
 * OR
 * B, with all properties of A undefined
 **/
type xor<a, b> = evaluate<a & {
    [k in keyof b]?: undefined;
}> | evaluate<b & {
    [k in keyof a]?: undefined;
}>;

type DomainTypes = {
    bigint: bigint;
    boolean: boolean;
    number: number;
    object: object;
    string: string;
    symbol: symbol;
    undefined: undefined;
    null: null;
};
type inferDomain<domain extends Domain> = Domain extends domain ? unknown : DomainTypes[domain];
type Domain = evaluate<keyof DomainTypes>;
type PrimitiveDomain = Exclude<Domain, "object">;
type Primitive = inferDomain<PrimitiveDomain>;
type domainOf<data> = isTopType<data> extends true ? Domain : data extends object ? "object" : data extends string ? "string" : data extends number ? "number" : data extends boolean ? "boolean" : data extends undefined ? "undefined" : data extends null ? "null" : data extends bigint ? "bigint" : data extends symbol ? "symbol" : never;
declare const domainOf: <data>(data: data) => domainOf<data>;

declare const defaultObjectKinds: {
    readonly Array: ArrayConstructor;
    readonly Date: DateConstructor;
    readonly Error: ErrorConstructor;
    readonly Function: FunctionConstructor;
    readonly Map: MapConstructor;
    readonly RegExp: RegExpConstructor;
    readonly Set: SetConstructor;
    readonly Object: ObjectConstructor;
    readonly String: StringConstructor;
    readonly Number: NumberConstructor;
    readonly Boolean: BooleanConstructor;
    readonly WeakMap: WeakMapConstructor;
    readonly WeakSet: WeakSetConstructor;
    readonly Promise: PromiseConstructor;
};
type inferObjectKind<kind extends keyof kinds, kinds extends ObjectKindSet = DefaultObjectKindSet> = kind extends "Function" ? (...args: any[]) => unknown : kind extends "Object" ? Record<string, unknown> : instanceOf$1<kinds[kind]>;
type BuiltinClassName = Exclude<DefaultObjectKind, "Object" | "Function" | "Array">;
type BuiltinClassesByName = {
    [kind in BuiltinClassName]: instanceOf$1<DefaultObjectKindSet[kind]>;
};
type BuiltinClass = BuiltinClassesByName[BuiltinClassName];
type ObjectKindSet = Record<string, constructor>;
type DefaultObjectKindSet = typeof defaultObjectKinds;
type DefaultObjectKind = keyof DefaultObjectKindSet;
type objectKindOf<data, kinds extends ObjectKindSet = DefaultObjectKindSet> = isTopType<data> extends true ? undefined | keyof kinds : data extends object ? object extends data ? keyof kinds : {
    [kind in keyof kinds]: kinds[kind] extends constructor<data> ? kind : data extends (...args: any[]) => unknown ? "Function" : "Object";
}[keyof kinds] : undefined;
declare const objectKindOf: <data, kinds extends ObjectKindSet = {
    readonly Array: ArrayConstructor;
    readonly Date: DateConstructor;
    readonly Error: ErrorConstructor;
    readonly Function: FunctionConstructor;
    readonly Map: MapConstructor;
    readonly RegExp: RegExpConstructor;
    readonly Set: SetConstructor;
    readonly Object: ObjectConstructor;
    readonly String: StringConstructor;
    readonly Number: NumberConstructor;
    readonly Boolean: BooleanConstructor;
    readonly WeakMap: WeakMapConstructor;
    readonly WeakSet: WeakSetConstructor;
    readonly Promise: PromiseConstructor;
}>(data: data, kinds?: kinds | undefined) => objectKindOf<data, kinds> | undefined;

declare class Path extends Array<string> {
    static fromString(s: string, delimiter?: string): Path;
    toString(delimiter?: string): string;
}
type pathToString<segments extends string[], delimiter extends string = "/"> = segments extends [] ? "/" : join<segments, delimiter>;
type join<segments extends string[], delimiter extends string = "/", result extends string = ""> = segments extends [infer head extends string, ...infer tail extends string[]] ? join<tail, delimiter, result extends "" ? head : `${result}${delimiter}${head}`> : result;

type BigintLiteral<Value extends bigint = bigint> = `${Value}n`;
type NumberLiteral<Value extends number = number> = `${Value}`;
type IntegerLiteral<Value extends bigint = bigint> = `${Value}`;
declare const tryParseWellFormedNumber: <ErrorOnFail extends string | boolean>(token: string, errorOnFail?: ErrorOnFail | undefined) => ErrorOnFail extends string | true ? number : number | undefined;
type tryParseWellFormedNumber<token extends string, messageOnFail extends string> = token extends NumberLiteral<infer value> ? value : messageOnFail;
declare const tryParseWellFormedInteger: <errorOnFail extends string | boolean>(token: string, errorOnFail?: errorOnFail | undefined) => errorOnFail extends string | true ? number : number | undefined;
type tryParseWellFormedInteger<token extends string, messageOnFail extends string> = token extends IntegerLiteral<infer value> ? `${value}` extends NumberLiteral<infer valueAsNumber> ? valueAsNumber : never : messageOnFail;

declare class Scanner<Lookahead extends string = string> {
    private chars;
    private i;
    finalized: boolean;
    constructor(def: string);
    /** Get lookahead and advance scanner by one */
    shift(): Lookahead;
    get lookahead(): Lookahead;
    shiftUntil(condition: Scanner.UntilCondition): string;
    shiftUntilNextTerminator(): string;
    get unscanned(): string;
    lookaheadIs<Char extends Lookahead>(char: Char): this is Scanner<Char>;
    lookaheadIsIn<Tokens extends Dict>(tokens: Tokens): this is Scanner<Extract<keyof Tokens, string>>;
}
declare namespace Scanner {
    type UntilCondition = (scanner: Scanner, shifted: string) => boolean;
    type OnInputEndFn = (scanner: Scanner, shifted: string) => string;
    type ShiftUntilOptions = {
        onInputEnd?: OnInputEndFn;
    };
    const lookaheadIsTerminator: UntilCondition;
    const lookaheadIsNotWhitespace: UntilCondition;
    const comparatorStartChars: {
        readonly "<": true;
        readonly ">": true;
        readonly "=": true;
    };
    const terminatingChars: {
        readonly "|": true;
        readonly "&": true;
        readonly ")": true;
        readonly "[": true;
        readonly "%": true;
        readonly " ": true;
        readonly "<": true;
        readonly ">": true;
        readonly "=": true;
    };
    type TerminatingChar = keyof typeof Scanner.terminatingChars;
    const comparators: {
        readonly "<": true;
        readonly ">": true;
        readonly "<=": true;
        readonly ">=": true;
        readonly "==": true;
    };
    type Comparator = keyof typeof comparators;
    type ComparatorStartChar = keyof typeof comparatorStartChars;
    const oneCharComparators: {
        readonly "<": true;
        readonly ">": true;
    };
    type OneCharComparator = keyof typeof oneCharComparators;
    const comparatorDescriptions: {
        readonly "<": "less than";
        readonly ">": "more than";
        readonly "<=": "at most";
        readonly ">=": "at least";
        readonly "==": "exactly";
    };
    const invertedComparators: {
        readonly "<": ">";
        readonly ">": "<";
        readonly "<=": ">=";
        readonly ">=": "<=";
        readonly "==": "==";
    };
    type InvertedComparators = typeof invertedComparators;
    const branchTokens: {
        readonly "|": true;
        readonly "&": true;
    };
    type BranchToken = keyof typeof branchTokens;
    type InfixToken = BranchToken | Comparator | "%" | ":" | "=>" | "|>";
    type PostfixToken = "[]";
    type OperatorToken = InfixToken | PostfixToken;
    const escapeToken = "\\";
    type EscapeToken = typeof escapeToken;
    const whiteSpaceToken = " ";
    type WhiteSpaceToken = typeof whiteSpaceToken;
    type finalized = "{done}";
    type shift<Lookahead extends string, Unscanned extends string> = `${Lookahead}${Unscanned}`;
    type shiftUntil<unscanned extends string, terminator extends string, scanned extends string = ""> = unscanned extends Scanner.shift<infer lookahead, infer nextUnscanned> ? lookahead extends terminator ? scanned extends `${infer base}${EscapeToken}` ? shiftUntil<nextUnscanned, terminator, `${base}${lookahead}`> : [scanned, unscanned] : shiftUntil<nextUnscanned, terminator, `${scanned}${lookahead}`> : [scanned, ""];
    type shiftUntilNot<unscanned extends string, nonTerminator extends string, scanned extends string = ""> = unscanned extends Scanner.shift<infer lookahead, infer nextUnscanned> ? lookahead extends nonTerminator ? shiftUntilNot<nextUnscanned, nonTerminator, `${scanned}${lookahead}`> : [scanned, unscanned] : [scanned, ""];
    type shiftUntilNextTerminator<unscanned extends string> = shiftUntil<skipWhitespace<unscanned>, TerminatingChar>;
    type skipWhitespace<unscanned extends string> = shiftUntilNot<unscanned, WhiteSpaceToken>[1];
    type shiftResult<scanned extends string, unscanned extends string> = [scanned, unscanned];
}

declare class DynamicState {
    readonly ctx: ParseContext;
    readonly scanner: Scanner;
    private root;
    private branches;
    private groups;
    constructor(def: string, ctx: ParseContext);
    error(message: string): never;
    hasRoot(): boolean;
    resolveRoot(): TypeNode;
    rootToString(): string;
    ejectRootIfLimit(): number | undefined;
    ejectRangeIfOpen(): LowerBound | undefined;
    private assertHasRoot;
    private assertUnsetRoot;
    setRoot(node: Node): void;
    rootToArray(): void;
    intersect(node: Node): void;
    private ejectRoot;
    ejectFinalizedRoot(): Node;
    finalize(): undefined;
    reduceLeftBound(limit: number, comparator: Scanner.Comparator): undefined;
    finalizeBranches(): void;
    finalizeGroup(): undefined;
    pushRootToBranch(token: Scanner.BranchToken): void;
    private assertRangeUnset;
    reduceGroupOpen(): void;
    previousOperator(): "|" | "&" | undefined;
    shiftedByOne(): this;
}

declare const writeUnmatchedGroupCloseMessage: <unscanned extends string>(unscanned: unscanned) => `Unmatched )${unscanned extends "" ? "" : ` before ${unscanned}`}`;
type writeUnmatchedGroupCloseMessage<unscanned extends string> = `Unmatched )${unscanned extends "" ? "" : ` before ${unscanned}`}`;
declare const unclosedGroupMessage = "Missing )";
type unclosedGroupMessage = typeof unclosedGroupMessage;
declare const writeOpenRangeMessage: <min extends `${number}`, comparator extends ">" | ">=">(min: min, comparator: comparator) => `Left bounds are only valid when paired with right bounds (try ...${comparator}${min})`;
type writeOpenRangeMessage<min extends NumberLiteral, comparator extends MinComparator> = `Left bounds are only valid when paired with right bounds (try ...${comparator}${min})`;
type writeUnpairableComparatorMessage<comparator extends Scanner.Comparator> = `Left-bounded expressions must specify their limits using < or <= (was ${comparator})`;
declare const writeUnpairableComparatorMessage: <comparator extends ">" | "<" | ">=" | "<=" | "==">(comparator: comparator) => `Left-bounded expressions must specify their limits using < or <= (was ${comparator})`;
declare const writeMultipleLeftBoundsMessage: <openLimit extends `${number}`, openComparator extends ">" | ">=", limit extends `${number}`, comparator extends ">" | ">=">(openLimit: openLimit, openComparator: openComparator, limit: limit, comparator: comparator) => `An expression may have at most one left bound (parsed ${openLimit}${{
    readonly "<": ">";
    readonly ">": "<";
    readonly "<=": ">=";
    readonly ">=": "<=";
    readonly "==": "==";
}[openComparator]}, ${limit}${{
    readonly "<": ">";
    readonly ">": "<";
    readonly "<=": ">=";
    readonly ">=": "<=";
    readonly "==": "==";
}[comparator]})`;
type writeMultipleLeftBoundsMessage<openLimit extends NumberLiteral, openComparator extends MinComparator, limit extends NumberLiteral, comparator extends MinComparator> = `An expression may have at most one left bound (parsed ${openLimit}${Scanner.InvertedComparators[openComparator]}, ${limit}${Scanner.InvertedComparators[comparator]})`;

type StaticState = {
    root: unknown;
    branches: BranchState;
    groups: BranchState[];
    scanned: string;
    unscanned: string;
};
type StaticOpenLeftBound = {
    limit: NumberLiteral;
    comparator: MinComparator;
};
type BranchState = {
    range: StaticOpenLeftBound | undefined;
    "&": unknown;
    "|": unknown;
};
declare namespace state {
    export type initialize<def extends string> = from<{
        root: undefined;
        branches: initialBranches;
        groups: [];
        scanned: "";
        unscanned: def;
    }>;
    type initialBranches = branchesFrom<{
        range: undefined;
        "&": undefined;
        "|": undefined;
    }>;
    type updateScanned<previousScanned extends string, previousUnscanned extends string, updatedUnscanned extends string> = previousUnscanned extends `${infer justScanned}${updatedUnscanned}` ? `${previousScanned}${justScanned}` : previousScanned;
    export type setRoot<s extends StaticState, root, unscanned extends string> = from<{
        root: root;
        branches: s["branches"];
        groups: s["groups"];
        scanned: updateScanned<s["scanned"], s["unscanned"], unscanned>;
        unscanned: unscanned;
    }>;
    export type reduceBranch<s extends StaticState, token extends Scanner.BranchToken, unscanned extends string> = s["branches"]["range"] extends {} ? openRangeError<s["branches"]["range"]> : from<{
        root: undefined;
        branches: {
            range: undefined;
            "&": token extends "&" ? mergeToIntersection<s> : undefined;
            "|": token extends "|" ? mergeToUnion<s> : s["branches"]["|"];
        };
        groups: s["groups"];
        scanned: updateScanned<s["scanned"], s["unscanned"], unscanned>;
        unscanned: unscanned;
    }>;
    export type reduceLeftBound<s extends StaticState, limit extends NumberLiteral, comparator extends Scanner.Comparator, unscanned extends string> = comparator extends "<" | "<=" ? s["branches"]["range"] extends {} ? error<writeMultipleLeftBoundsMessage<s["branches"]["range"]["limit"], s["branches"]["range"]["comparator"], limit, Scanner.InvertedComparators[comparator]>> : from<{
        root: undefined;
        branches: {
            range: {
                limit: limit;
                comparator: Scanner.InvertedComparators[comparator];
            };
            "&": s["branches"]["&"];
            "|": s["branches"]["|"];
        };
        groups: s["groups"];
        scanned: updateScanned<s["scanned"], s["unscanned"], unscanned>;
        unscanned: unscanned;
    }> : error<writeUnpairableComparatorMessage<comparator>>;
    export type reduceRange<s extends StaticState, minLimit extends NumberLiteral, minComparator extends MinComparator, maxComparator extends MaxComparator, maxLimit extends NumberLiteral, unscanned extends string> = state.from<{
        root: [minLimit, minComparator, [s["root"], maxComparator, maxLimit]];
        branches: {
            range: undefined;
            "&": s["branches"]["&"];
            "|": s["branches"]["|"];
        };
        groups: s["groups"];
        scanned: updateScanned<s["scanned"], s["unscanned"], unscanned>;
        unscanned: unscanned;
    }>;
    export type reduceSingleBound<s extends StaticState, comparator extends Scanner.Comparator, limit extends NumberLiteral, unscanned extends string> = state.from<{
        root: [s["root"], comparator, limit];
        branches: {
            range: undefined;
            "&": s["branches"]["&"];
            "|": s["branches"]["|"];
        };
        groups: s["groups"];
        scanned: updateScanned<s["scanned"], s["unscanned"], unscanned>;
        unscanned: unscanned;
    }>;
    type mergeToUnion<s extends StaticState> = s["branches"]["|"] extends undefined ? mergeToIntersection<s> : [s["branches"]["|"], "|", mergeToIntersection<s>];
    type mergeToIntersection<s extends StaticState> = s["branches"]["&"] extends undefined ? s["root"] : [s["branches"]["&"], "&", s["root"]];
    type popGroup<stack extends BranchState[], top extends BranchState> = [
        ...stack,
        top
    ];
    export type finalizeGroup<s extends StaticState, unscanned extends string> = s["branches"]["range"] extends {} ? openRangeError<s["branches"]["range"]> : s["groups"] extends popGroup<infer stack, infer top> ? from<{
        groups: stack;
        branches: top;
        root: mergeToUnion<s>;
        scanned: updateScanned<s["scanned"], s["unscanned"], unscanned>;
        unscanned: unscanned;
    }> : error<writeUnmatchedGroupCloseMessage<unscanned>>;
    export type reduceGroupOpen<s extends StaticState, unscanned extends string> = from<{
        groups: [...s["groups"], s["branches"]];
        branches: initialBranches;
        root: undefined;
        scanned: updateScanned<s["scanned"], s["unscanned"], unscanned>;
        unscanned: unscanned;
    }>;
    export type finalize<s extends StaticState> = s["groups"] extends [] ? s["branches"]["range"] extends {} ? openRangeError<s["branches"]["range"]> : from<{
        root: mergeToUnion<s>;
        groups: s["groups"];
        branches: initialBranches;
        scanned: s["scanned"];
        unscanned: Scanner.finalized;
    }> : error<unclosedGroupMessage>;
    type openRangeError<range extends defined<BranchState["range"]>> = error<writeOpenRangeMessage<range["limit"], range["comparator"]>>;
    export type previousOperator<s extends StaticState> = s["branches"]["range"] extends {} ? s["branches"]["range"]["comparator"] : s["branches"]["&"] extends {} ? "&" : s["branches"]["|"] extends {} ? "|" : undefined;
    export type scanTo<s extends StaticState, unscanned extends string> = from<{
        root: s["root"];
        branches: s["branches"];
        groups: s["groups"];
        scanned: updateScanned<s["scanned"], s["unscanned"], unscanned>;
        unscanned: unscanned;
    }>;
    export type from<s extends StaticState> = s;
    export type branchesFrom<b extends BranchState> = b;
    export {};
}

declare const parseUnenclosed: (s: DynamicState) => void;
type parseUnenclosed<s extends StaticState, $> = Scanner.shiftUntilNextTerminator<s["unscanned"]> extends Scanner.shiftResult<infer scanned, infer nextUnscanned> ? tryResolve<s, scanned, $> extends infer result ? result extends error<infer message> ? error<message> : state.setRoot<s, result, nextUnscanned> : never : never;
type tryResolve<s extends StaticState, token extends string, $> = token extends keyof $ ? token : token extends NumberLiteral ? token : token extends BigintLiteral ? token : possibleCompletions<s, token, $>;
type possibleCompletions<s extends StaticState, token extends string, $> = Extract<keyof $, `${token}${string}`> extends never ? error<writeUnresolvableMessage<token>> : error<`${s["scanned"]}${Extract<keyof $, `${token}${string}`>}`>;
declare const writeUnresolvableMessage: <token extends string>(token: token) => `'${token}' is unresolvable`;
type writeUnresolvableMessage<token extends string> = `'${token}' is unresolvable`;
type writeMissingRightOperandMessage<token extends Scanner.InfixToken, unscanned extends string> = `Token '${token}' requires a right operand${unscanned extends "" ? "" : ` before '${unscanned}'`}`;
declare const writeMissingRightOperandMessage: <token extends Scanner.InfixToken, unscanned extends string>(token: token, unscanned: unscanned) => `Token '${token}' requires a right operand${unscanned extends "" ? "" : ` before '${unscanned}'`}`;

/**
 * @operator {@link parseConfigTuple | :}
 * @docgenTable
 * @tuple ["type", ":", config]
 */
declare const parseConfigTuple: PostfixParser<":">;
type validateConfigTuple<def extends TupleExpression, $> = readonly [
    _: validateDefinition<def[0], $>,
    _: ":",
    _: TypeOptions
];

type inferIntersection<l, r> = inferIntersectionRecurse<l, r, []>;
type inferIntersectionRecurse<l, r, path extends string[]> = path["length"] extends 10 ? l & r : l extends never ? never : r extends never ? never : l & r extends never ? error<writeImplicitNeverMessage<path, "Intersection">> : isAny<l | r> extends true ? any : l extends ParsedMorph<infer lIn, infer lOut> ? r extends ParsedMorph ? error<writeImplicitNeverMessage<path, "Intersection", "of morphs">> : (In: evaluate<lIn & r>) => lOut : r extends ParsedMorph<infer rIn, infer rOut> ? (In: evaluate<rIn & l>) => rOut : [l, r] extends [Dict, Dict] ? bubblePropErrors<evaluate<{
    [k in stringKeyOf<l>]: k extends keyof r ? inferIntersectionRecurse<l[k], r[k], [...path, k]> : l[k];
} & Omit<r, keyof l>>> : l extends List ? r extends List ? inferArrayIntersection<l, r, path> : l & r : l & r;
type inferArrayIntersection<l extends List, r extends List, path extends string[]> = isTuple<l> extends true ? {
    [i in keyof l]: inferIntersectionRecurse<l[i], r[i & keyof r], [
        ...path,
        `${i}`
    ]> extends infer result ? tryCatch<result, result> : never;
} : isTuple<r> extends true ? {
    [i in keyof r]: inferIntersectionRecurse<l[i & keyof l], r[i], [
        ...path,
        `${i}`
    ]> extends infer result ? tryCatch<result, result> : never;
} : inferIntersectionRecurse<l[number], r[number], [
    ...path,
    MappedKeys["index"]
]> extends infer result ? tryCatch<result, result[]> : never;
type isTuple<list extends List> = number extends list["length"] ? false : true;
type bubblePropErrors<o> = extractValues<o, error> extends never ? o : extractValues<o, error>;
declare const writeImplicitNeverMessage: <path extends [] | Path, operator extends "keyof" | "Intersection", description extends string = "">(path: asConst<path>, operator: operator, description?: description | undefined) => `${path extends [] ? "" : `At ${pathToString<path, "/">}: `}${operator} ${description extends "" ? "" : `${description} `}results in an unsatisfiable type`;
type writeImplicitNeverMessage<path extends string[], operator extends "Intersection" | "keyof", description extends string = ""> = `${path extends [] ? "" : `At ${pathToString<path>}: `}${operator} ${description extends "" ? "" : `${description} `}results in an unsatisfiable type`;

type inferKeyOfExpression<operandDef, $> = evaluate<keyof inferDefinition<operandDef, $>>;
type validateKeyOfExpression<operandDef, $> = readonly [
    "keyof",
    inferKeyOfExpression<operandDef, $> extends never ? writeImplicitNeverMessage<[], "keyof"> : validateDefinition<operandDef, $>
];

/** If scope is provided, we also narrow each predicate to match its domain.
 * Otherwise, we use a base predicate for all types, which is easier to
 * manipulate.*/
type Predicate<domain extends Domain = Domain, $ = Dict> = string extends keyof $ ? true | CollapsibleList<Branch> : true | CollapsibleList<Branch<domain, $>>;

type StringLiteral<Text extends string = string> = DoubleQuotedStringLiteral<Text> | SingleQuotedStringLiteral<Text>;
type DoubleQuotedStringLiteral<Text extends string = string> = `"${Text}"`;
type SingleQuotedStringLiteral<Text extends string = string> = `'${Text}'`;
declare const parseEnclosed: (s: DynamicState, enclosing: EnclosingChar) => undefined;
type parseEnclosed<s extends StaticState, enclosing extends EnclosingChar, unscanned extends string> = Scanner.shiftUntil<unscanned, enclosing> extends Scanner.shiftResult<infer scanned, infer nextUnscanned> ? nextUnscanned extends "" ? error<writeUnterminatedEnclosedMessage<scanned, enclosing>> : state.setRoot<s, `${enclosing}${scanned}${enclosing}`, tailOfString<nextUnscanned>> : never;
declare const enclosingChar: {
    "'": number;
    '"': number;
    "/": number;
};
type EnclosingChar = keyof typeof enclosingChar;
declare const enclosingCharDescriptions: {
    readonly '"': "double-quote";
    readonly "'": "single-quote";
    readonly "/": "forward slash";
};
type enclosingCharDescriptions = typeof enclosingCharDescriptions;
declare const writeUnterminatedEnclosedMessage: <fragment extends string, enclosing extends "/" | "'" | "\"">(fragment: fragment, enclosing: enclosing) => `${enclosing}${fragment} requires a closing ${{
    readonly '"': "double-quote";
    readonly "'": "single-quote";
    readonly "/": "forward slash";
}[enclosing]}`;
type writeUnterminatedEnclosedMessage<fragment extends string, enclosing extends EnclosingChar> = `${enclosing}${fragment} requires a closing ${enclosingCharDescriptions[enclosing]}`;

declare const parseOperand: (s: DynamicState) => void;
type parseOperand<s extends StaticState, $> = s["unscanned"] extends Scanner.shift<infer lookahead, infer unscanned> ? lookahead extends "(" ? state.reduceGroupOpen<s, unscanned> : lookahead extends EnclosingChar ? parseEnclosed<s, lookahead, unscanned> : lookahead extends " " ? parseOperand<state.scanTo<s, unscanned>, $> : parseUnenclosed<s, $> : error<`${s["scanned"]}${stringKeyOf<$>}`>;

declare const parseBound: (s: DynamicState, start: Scanner.ComparatorStartChar) => void;
type parseBound<s extends StaticState, start extends Scanner.ComparatorStartChar, unscanned extends string> = shiftComparator<start, unscanned> extends infer shiftResultOrError ? shiftResultOrError extends Scanner.shiftResult<infer comparator extends Scanner.Comparator, infer nextUnscanned> ? s["root"] extends NumberLiteral ? state.reduceLeftBound<s, s["root"], comparator, nextUnscanned> : parseRightBound<s, comparator, nextUnscanned> : shiftResultOrError : never;
declare const shiftComparator: (s: DynamicState, start: Scanner.ComparatorStartChar) => Scanner.Comparator;
type shiftComparator<start extends Scanner.ComparatorStartChar, unscanned extends string> = unscanned extends `=${infer nextUnscanned}` ? [`${start}=`, nextUnscanned] : start extends Scanner.OneCharComparator ? [start, unscanned] : error<singleEqualsMessage>;
declare const singleEqualsMessage = "= is not a valid comparator. Use == to check for equality";
type singleEqualsMessage = typeof singleEqualsMessage;
declare const parseRightBound: (s: DynamicState, comparator: Scanner.Comparator) => void;
type parseRightBound<s extends StaticState, comparator extends Scanner.Comparator, unscanned extends string> = Scanner.shiftUntilNextTerminator<unscanned> extends Scanner.shiftResult<infer scanned, infer nextUnscanned> ? tryParseWellFormedNumber<scanned, writeInvalidLimitMessage<comparator, scanned>> extends infer limit ? limit extends number ? s["branches"]["range"] extends {} ? comparator extends MaxComparator ? state.reduceRange<s, s["branches"]["range"]["limit"], s["branches"]["range"]["comparator"], comparator, `${limit}`, nextUnscanned> : error<writeUnpairableComparatorMessage<comparator>> : state.reduceSingleBound<s, comparator, `${limit}`, nextUnscanned> : error<limit & string> : never : never;
declare const writeInvalidLimitMessage: <comparator extends ">" | "<" | ">=" | "<=" | "==", limit extends string>(comparator: comparator, limit: limit) => `Comparator ${comparator} must be followed by a number literal (was '${limit}')`;
type writeInvalidLimitMessage<comparator extends Scanner.Comparator, limit extends string> = `Comparator ${comparator} must be followed by a number literal (was '${limit}')`;

declare const parseDivisor: (s: DynamicState) => void;
type parseDivisor<s extends StaticState, unscanned extends string> = Scanner.shiftUntilNextTerminator<unscanned> extends Scanner.shiftResult<infer scanned, infer nextUnscanned> ? tryParseWellFormedInteger<scanned, writeInvalidDivisorMessage<scanned>> extends infer divisor ? divisor extends number ? divisor extends 0 ? error<writeInvalidDivisorMessage<0>> : state.setRoot<s, [
    s["root"],
    "%",
    `${divisor}`
], nextUnscanned> : error<divisor & string> : never : never;
declare const writeInvalidDivisorMessage: <divisor extends string | number>(divisor: divisor) => `% operator must be followed by a non-zero integer literal (was ${divisor})`;
type writeInvalidDivisorMessage<divisor extends string | number> = `% operator must be followed by a non-zero integer literal (was ${divisor})`;

declare const parseOperator: (s: DynamicState) => void;
type parseOperator<s extends StaticState> = s["unscanned"] extends Scanner.shift<infer lookahead, infer unscanned> ? lookahead extends "[" ? unscanned extends Scanner.shift<"]", infer nextUnscanned> ? state.setRoot<s, [s["root"], "[]"], nextUnscanned> : error<incompleteArrayTokenMessage> : lookahead extends Scanner.BranchToken ? state.reduceBranch<s, lookahead, unscanned> : lookahead extends ")" ? state.finalizeGroup<s, unscanned> : lookahead extends Scanner.ComparatorStartChar ? parseBound<s, lookahead, unscanned> : lookahead extends "%" ? parseDivisor<s, unscanned> : lookahead extends " " ? parseOperator<state.scanTo<s, unscanned>> : error<writeUnexpectedCharacterMessage<lookahead>> : state.finalize<s>;
declare const writeUnexpectedCharacterMessage: <char extends string>(char: char) => `Unexpected character '${char}'`;
type writeUnexpectedCharacterMessage<char extends string> = `Unexpected character '${char}'`;
declare const incompleteArrayTokenMessage = "Missing expected ']'";
type incompleteArrayTokenMessage = typeof incompleteArrayTokenMessage;

declare const parseString: (def: string, ctx: ParseContext) => Node;
type parseString<def extends string, $> = maybeNaiveParse<def, $>;
type inferString<def extends string, $> = inferAst<parseString<def, $>, $>;
/**
 * Try to parse the definition from right to left using the most common syntax.
 * This can be much more efficient for simple definitions.
 */
type maybeNaiveParse<def extends string, $> = def extends `${infer child}[]` ? child extends keyof $ ? [child, "[]"] : fullStringParse<def, $> : def extends keyof $ ? def : fullStringParse<def, $>;
declare const maybeNaiveParse: (def: string, ctx: ParseContext) => string | ResolvedNode<Dict> | undefined;
declare const fullStringParse: (def: string, ctx: ParseContext) => Node;
type fullStringParse<def extends string, $> = loop<state.initialize<def>, $>;
declare const loop: (s: DynamicState) => Node;
type loop<s extends StaticState | error, $> = s extends StaticState ? loopValid<s, $> : s;
type loopValid<s extends StaticState, $> = s["unscanned"] extends Scanner.finalized ? s["root"] : loop<next<s, $>, $>;
declare const next: (s: DynamicState) => void;
type next<s extends StaticState, $> = s["root"] extends undefined ? parseOperand<s, $> : parseOperator<s>;

type SizedData = string | number | readonly unknown[];
declare class DataWrapper<value = unknown> {
    value: value;
    constructor(value: value);
    toString(): string;
    get domain(): domainOf<value>;
    get size(): number;
    get units(): "" | "characters" | "items long";
    get className(): any;
}

type astToString<ast> = `'${astToStringRecurse<ast, "">}'`;
type astToStringRecurse<ast, result extends string> = ast extends [
    infer head,
    ...infer tail
] ? astToStringRecurse<tail, `${result}${astToStringRecurse<head, "">}`> : ast extends Literalable ? `${result}${ast extends bigint ? `${ast}n` : ast}` : "...";

/**
 * @operator {@link validateBound | bound}
 * @docgenTable
 *  * @tableRow N number literal
 * @tableRow S sized data (a number, string or array)
 * @tableRow < Comparator (one of <, <=, ==, >=, >)
 * @description
 * Bound operators allow data to be bounded in the format "S<N", or as a Range: "N<S<N", with comparators restricted to < or <=
 * @string "N<S<N", with comparators restricted to < or <=
 * @example string
 *  const range = type("2<=number<5")
 * @example string
 *  const bound = type("string[]==5")
 */
type validateBound<l, r, $> = l extends NumberLiteral ? validateAst<r, $> : l extends [infer leftAst, Scanner.Comparator, unknown] ? error<writeDoubleRightBoundMessage<astToString<leftAst>>> : isBoundable<inferAst<l, $>> extends true ? validateAst<l, $> : error<writeUnboundableMessage<astToString<l>>>;
declare const writeDoubleRightBoundMessage: <root extends string>(root: root) => `Expression ${root} must have at most one right bound`;
type writeDoubleRightBoundMessage<root extends string> = `Expression ${root} must have at most one right bound`;
type isBoundable<data> = isAny<data> extends true ? false : [data] extends [SizedData] ? true : false;
declare const writeUnboundableMessage: <root extends string>(root: root) => `Bounded expression ${root} must be a number, string or array`;
type writeUnboundableMessage<root extends string> = `Bounded expression ${root} must be a number, string or array`;

/**
 * @operator {@link validateDivisor | %}
 * @docgenTable
 * @string "N%D", where "N" is a number and "D" is a non-zero integer
 */
type validateDivisor<l, $> = isDivisible<inferAst<l, $>> extends true ? validateAst<l, $> : error<writeIndivisibleMessage<astToString<l>>>;
type isDivisible<data> = isAny<data> extends true ? false : [data] extends [number] ? true : false;
declare const writeIndivisibleMessage: <root extends string>(root: root) => `Divisibility operand ${root} must be a number`;
type writeIndivisibleMessage<root extends string> = `Divisibility operand ${root} must be a number`;

type inferUnion<l, r> = isAny<l | r> extends true ? any : [l] extends [never] ? r : [r] extends [never] ? l : [asIn<l>, asIn<r>] extends [infer lIn, infer rIn] ? [equals<l, lIn>, equals<r, rIn>] extends [true, true] ? l | r : discriminatable<lIn, rIn> extends true ? l | r : error<undiscriminatableMorphUnionMessage> : never;
type discriminatable<l, r> = discriminatableRecurse<l, r, []> extends never ? false : true;
type discriminatableRecurse<l, r, path extends string[]> = path["length"] extends 10 ? never : l & r extends never ? path : domainOf<l> & domainOf<r> extends never ? path : objectKindOf<l> & objectKindOf<r> extends never ? path : [objectKindOf<l>, objectKindOf<r>] extends ["Object", "Object"] ? extractValues<{
    [k in requiredKeyOf$2<l>]: k extends requiredKeyOf$2<r> ? discriminatableRecurse<l[k], r[k], [...path, k & string]> : never;
}, string[]> : never;
type undiscriminatableMorphUnionMessage = `A union including one or more morphs must be discriminatable`;

type inferAst<ast, $> = ast extends List ? inferExpression<ast, $> : inferTerminal<ast, $>;
type inferExpression<ast extends List, $> = ast[1] extends "[]" ? inferAst<ast[0], $>[] : ast[1] extends "|" ? inferUnion<inferAst<ast[0], $>, inferAst<ast[2], $>> extends infer result ? castOnError<result, never> : never : ast[1] extends "&" ? inferIntersection<inferAst<ast[0], $>, inferAst<ast[2], $>> extends infer result ? castOnError<result, never> : never : ast[1] extends Scanner.Comparator ? ast[0] extends NumberLiteral ? inferAst<ast[2], $> : inferAst<ast[0], $> : ast[1] extends "%" ? inferAst<ast[0], $> : never;
type validateAst<ast, $> = ast extends List ? validateExpression<ast, $> : ast;
type validateExpression<ast extends List, $> = ast extends PostfixExpression<infer operator, infer operand> ? operator extends "[]" ? validateAst<operand, $> : never : ast extends InfixExpression<infer operator, infer l, infer r> ? operator extends "&" ? tryCatch<inferIntersection<inferAst<l, $>, inferAst<r, $>>, validateInfix<ast, $>> : operator extends "|" ? tryCatch<inferUnion<inferAst<l, $>, inferAst<r, $>>, validateInfix<ast, $>> : operator extends Scanner.Comparator ? validateBound<l, r, $> : operator extends "%" ? validateDivisor<l, $> : never : undefined;
type validateString<def extends string, $> = parseString<def, $> extends infer ast ? ast extends error<infer message> ? message : validateAst<ast, $> extends error<infer message> ? message : def : never;
type PostfixOperator = "[]";
type PostfixExpression<operator extends PostfixOperator = PostfixOperator, operand = unknown> = [operand, operator];
type InfixOperator = "|" | "&" | Scanner.Comparator | "%" | ":" | "=>" | "|>";
type InfixExpression<operator extends InfixOperator = InfixOperator, l = unknown, r = unknown> = [l, operator, r];
type validateInfix<ast extends InfixExpression, $> = tryCatch<validateAst<ast[0], $>, tryCatch<validateAst<ast[2], $>, ast>>;
type inferTerminal<token, $> = token extends keyof $ ? resolve<token, $> : token extends StringLiteral<infer Text> ? Text : token extends RegexLiteral ? string : token extends NumberLiteral<infer value> ? value : token extends BigintLiteral<infer value> ? value : never;

type inferNode<node extends Node<$>, $ = {}> = node extends string ? inferTerminal<node, $> : node extends Node<$> ? inferResolution<node, $> extends infer result ? result extends BuiltinClass ? result : evaluateObjectOrFunction<result> : never : never;
type inferResolution<node extends Node<$>, $> = {
    [domain in keyof node]: inferPredicate<
    /** @ts-expect-error Some very odd inference behavior related to domain I can't resolve */
    domain, node[domain], $>;
}[keyof node];
type inferPredicate<domain extends Domain, predicate extends Predicate, $> = predicate extends true ? inferDomain<domain> : inferBranch<domain, branchFrom<predicate>, $>;
type branchFrom<predicate extends Predicate> = predicate extends List ? predicate[number] : predicate;
type inferBranch<domain extends Domain, branch, $> = branch extends MetaBranch ? inferMorph$1<domain, branch, $> : inferRules<domain, branch, $>;
type inferMorph$1<domain extends Domain, branch extends MetaBranch, $> = (In: inferBranch<domain, branch["rules"], $>) => branch["morph"] extends [...unknown[], infer tail] ? returnOf<tail> : returnOf<branch["morph"]>;
type inferRules<domain extends Domain, branch, $> = branch extends LiteralRules ? branch["value"] : domain extends "object" ? branch extends NarrowableRules ? inferObjectRules<branch, $> : object : inferDomain<domain>;
type inferObjectRules<rules extends NarrowableRules, $> = rules["class"] extends ArrayConstructor ? rules["props"] extends {
    "[index]": Prop<$, infer indexNode>;
    length?: Prop<$, infer lengthNode>;
} ? lengthNode extends LiteralNode<"number", infer value> ? HomogenousTuple<inferNode<indexNode, $>, value> : inferNode<indexNode, $>[] : unknown[] : rules["class"] extends FunctionConstructor ? inferObjectKind<"Function"> : rules["class"] extends constructor<infer instance> ? instance : rules["props"] extends PropsRule ? inferProps<rules["props"], $> : object;
type inferProps<props extends PropsRule, $> = evaluate<{
    [k in requiredKeyOf$1<props>]: props[k] extends Prop<$, infer node> ? inferNode<node, $> : never;
} & {
    [k in optionalKeyOf$1<props>]?: props[k] extends OptionalProp<$> ? inferNode<props[k][1], $> : never;
}>;
type optionalKeyOf$1<props extends PropsRule> = {
    [k in keyof props]: props[k] extends OptionalProp ? k : never;
}[keyof props];
type mappedKeyOf<props extends PropsRule> = Extract<keyof props, MappedPropKey>;
type requiredKeyOf$1<props extends PropsRule> = Exclude<keyof props, optionalKeyOf$1<props> | mappedKeyOf<props>>;

type validateTupleExpression<def extends TupleExpression, $> = def[1] extends "[]" ? conform<def, readonly [validateDefinition<def[0], $>, "[]"]> : def[1] extends Scanner.BranchToken ? def[2] extends undefined ? [def[0], error<writeMissingRightOperandMessage<def[1], "">>] : conform<def, readonly [
    validateDefinition<def[0], $>,
    def[1],
    validateDefinition<def[2], $>
]> : def[1] extends "=>" ? validateNarrowTuple<def, $> : def[1] extends "|>" ? validateMorphTuple<def, $> : def[1] extends ":" ? validateConfigTuple<def, $> : def[0] extends "===" ? conform<def, readonly ["===", unknown]> : def[0] extends "instanceof" ? conform<def, readonly ["instanceof", constructor]> : def[0] extends "node" ? conform<def, readonly ["node", ResolvedNode<$>]> : def[0] extends "keyof" ? conform<def, validateKeyOfExpression<def[1], $>> : never;
type UnparsedTupleExpressionInput<$> = {
    instanceof: constructor;
    node: ResolvedNode<$>;
    "===": unknown;
};
type UnparsedTupleOperator = evaluate<keyof UnparsedTupleExpressionInput<Dict>>;
type inferTuple<def extends List, $> = def extends TupleExpression ? inferTupleExpression<def, $> : {
    [i in keyof def]: inferDefinition<def[i], $>;
};
type inferTupleExpression<def extends TupleExpression, $> = def[1] extends "[]" ? inferDefinition<def[0], $>[] : def[1] extends "&" ? inferIntersection<inferDefinition<def[0], $>, inferDefinition<def[2], $>> : def[1] extends "|" ? inferUnion<inferDefinition<def[0], $>, inferDefinition<def[2], $>> : def[1] extends "=>" ? inferNarrow<def[0], def[2], $> : def[1] extends "|>" ? inferMorph<def[0], def[2], $> : def[1] extends ":" ? inferDefinition<def[0], $> : def[0] extends "===" ? def[1] : def[0] extends "instanceof" ? def[1] extends constructor<infer t> ? t : never : def[0] extends "node" ? def[1] extends ResolvedNode<$> ? inferNode<def[1], $> : never : def[0] extends "keyof" ? inferKeyOfExpression<def[1], $> : never;
type PostfixParser<token extends IndexOneOperator> = (def: IndexOneExpression<token>, ctx: ParseContext) => Node;
type TupleExpression = IndexZeroExpression | IndexOneExpression;
type IndexOneOperator = TuplePostfixOperator | TupleInfixOperator;
type TuplePostfixOperator = "[]";
type TupleInfixOperator = "&" | "|" | ":" | "=>" | "|>";
type IndexOneExpression<token extends IndexOneOperator = IndexOneOperator> = readonly [unknown, token, ...unknown[]];
type FunctionalTupleOperator = "=>" | "|>";
type IndexZeroOperator = "keyof" | "instanceof" | "===" | "node";
type IndexZeroExpression<token extends IndexZeroOperator = IndexZeroOperator> = readonly [token, ...unknown[]];

type Narrow<data = any> = (data: data, problems: Problems) => boolean;
type validateNarrowTuple<def extends TupleExpression, $> = readonly [
    _: validateDefinition<def[0], $>,
    _: "=>",
    _: distributable<Narrow<asIn<inferDefinition<def[0], $>>>>
];
type inferNarrow<inDef, narrow, $> = narrow extends {
    [domain in Domain]?: any;
} ? {
    [domain in keyof narrow]: inferNarrowFunction<Extract<asIn<inferDefinition<inDef, $>>, inferDomain<domain & Domain>>, narrow[domain]>;
}[keyof narrow] : inferNarrowFunction<asIn<inferDefinition<inDef, $>>, narrow>;
type inferNarrowFunction<input, narrow> = narrow extends (data: any, ...args: any[]) => data is infer narrowed ? narrowed : input;

type NarrowableRules<$ = Dict> = {
    readonly regex?: CollapsibleList<string>;
    readonly divisor?: number;
    readonly range?: Range;
    readonly props?: PropsRule<$>;
    readonly class?: constructor;
    readonly narrow?: NarrowRule;
};
type LiteralRules<domain extends Domain = Domain, value extends inferDomain<domain> = inferDomain<domain>> = {
    readonly value: value;
};
type NarrowRule = CollapsibleList<Narrow>;
type RuleEntry = ["regex", string] | ["divisor", number] | ["bound", FlatBound] | ["class", constructor] | DistilledPropsEntry | StrictPropsEntry | PropEntry | ["narrow", Narrow] | ["value", unknown];
type Rules<domain extends Domain = Domain, $ = Dict> = Domain extends domain ? NarrowableRules | LiteralRules : domain extends "object" ? defineRuleSet<domain, "props" | "range" | "narrow" | "class", $> : domain extends "string" ? defineRuleSet<domain, "regex" | "range" | "narrow", $> : domain extends "number" ? defineRuleSet<domain, "divisor" | "range" | "narrow", $> : defineRuleSet<domain, "narrow", $>;
type defineRuleSet<domain extends Domain, keys extends keyof NarrowableRules, $> = Pick<NarrowableRules<$>, keys> | LiteralRules<domain>;

type PropsRule<$ = Dict> = {
    [propKey in string]: Prop<$>;
};
type Prop<$ = Dict, node extends Node<$> = Node<$>> = node | OptionalProp<$, node> | PrerequisiteProp<$, node>;
type OptionalProp<$ = Dict, node extends Node<$> = Node<$>> = ["?", node];
type PrerequisiteProp<$ = Dict, node extends Node<$> = Node<$>> = [
    "!",
    node
];
type PropsRecordKey = "distilledProps" | "strictProps";
type PropsRecordEntry<kind extends PropsRecordKey = PropsRecordKey> = [
    kind,
    {
        required: {
            [propKey in string]: TraversalNode;
        };
        optional: {
            [propKey in string]: TraversalNode;
        };
        index?: TraversalNode;
    }
];
type DistilledPropsEntry = PropsRecordEntry<"distilledProps">;
type StrictPropsEntry = PropsRecordEntry<"strictProps">;
type PropEntry = RequiredPropEntry | OptionalPropEntry | IndexPropEntry | PrerequisitePropEntry;
type PrerequisitePropEntry = ["prerequisiteProp", TraversalProp];
type RequiredPropEntry = ["requiredProp", TraversalProp];
type OptionalPropEntry = ["optionalProp", TraversalProp];
type IndexPropEntry = ["indexProp", TraversalNode];
type TraversalProp<key extends string = string, node extends TraversalNode = TraversalNode> = [key, node];
declare const mappedKeys: {
    readonly index: "[index]";
};
type MappedKeys = typeof mappedKeys;
type MappedPropKey = MappedKeys[keyof MappedKeys];

type CheckResult<out = unknown> = xor<{
    data: out;
}, {
    problems: Problems;
}>;
declare class TraversalState<data = unknown> {
    #private;
    data: data;
    type: Type;
    path: Path;
    problems: Problems;
    entriesToPrune: [data: Record<string, unknown>, key: string][];
    failFast: boolean;
    traversalConfig: TraversalConfig;
    readonly rootScope: Scope;
    constructor(data: data, type: Type);
    getProblemConfig<code extends ProblemCode>(code: code): ProblemWriters<code>;
    traverseConfig(configEntries: ConfigEntry[], node: TraversalNode): boolean;
    traverseKey(key: stringKeyOf<this["data"]>, node: TraversalNode): boolean;
    traverseResolution(name: string): boolean;
    traverseBranches(branches: TraversalEntry[][]): boolean;
}
type TraversalConfig = {
    [k in keyof TypeConfig]-?: TypeConfig[k][];
};
type TraversableData = Record<string | number, unknown>;
type ConstrainedRuleTraversalData = extend<{
    [k in TraversalKey]?: unknown;
}, {
    regex: string;
    divisor: number;
    bound: SizedData;
    prerequisiteProp: TraversableData;
    optionalProp: TraversableData;
    requiredProp: TraversableData;
    indexProp: TraversableData;
    distilledProps: TraversableData;
    strictProps: TraversableData;
}>;

type validateMorphTuple<def extends TupleExpression, $> = readonly [
    _: validateDefinition<def[0], $>,
    _: "|>",
    _: Morph<asOut<inferDefinition<def[0], $>>, unknown>
];
type Morph<i = any, o = unknown> = (In: i, problems: Problems) => o;
type ParsedMorph<i = any, o = unknown> = (In: i) => o;
type inferMorph<inDef, morph, $> = morph extends Morph ? (In: asIn<inferDefinition<inDef, $>>) => inferMorphOut<ReturnType<morph>> : never;
type inferMorphOut<out> = [out] extends [CheckResult<infer t>] ? t : Exclude<out, Problem>;

type Branch<domain extends Domain = Domain, $ = Dict> = Rules<domain, $> | MetaBranch<domain, $>;
type MetaBranch<domain extends Domain = Domain, $ = Dict> = {
    rules: Rules<domain, $>;
    morph?: CollapsibleList<Morph>;
    config?: TypeConfig;
};
type MorphEntry = ["morph", Morph];

type Range = DoubleBound | Bound<"==">;
type DoubleBound = {
    min?: LowerBound;
    max?: UpperBound;
};
declare const minComparators: {
    readonly ">": true;
    readonly ">=": true;
};
type MinComparator = keyof typeof minComparators;
type LowerBound = Bound<MinComparator>;
declare const maxComparators: {
    readonly "<": true;
    readonly "<=": true;
};
type MaxComparator = keyof typeof maxComparators;
type UpperBound = Bound<MaxComparator>;
type Bound<comparator extends Scanner.Comparator = Scanner.Comparator> = {
    readonly comparator: comparator;
    readonly limit: number;
};
type FlatBound = evaluate<Bound & {
    units?: string;
}>;

declare class Problem<code extends ProblemCode = ProblemCode> {
    code: code;
    path: Path;
    private data;
    private source;
    private writers;
    parts?: Problem[];
    constructor(code: code, path: Path, data: ProblemData<code>, source: ProblemSource<code>, writers: ProblemWriters<code>);
    toString(): string;
    get message(): string;
    get reason(): string;
    get mustBe(): string;
}
type AddProblemOptions<data = unknown> = {
    data?: data;
    path?: string[];
};
declare class ProblemArray extends Array<Problem> {
    #private;
    byPath: Record<string, Problem>;
    count: number;
    constructor(state: TraversalState);
    mustBe(description: string, opts?: AddProblemOptions): Problem<ProblemCode>;
    add<code extends ProblemCode>(code: code, source: ProblemSource<code>, opts?: AddProblemOptions<ProblemData<code>>): Problem;
    addProblem(problem: Problem): void;
    get summary(): string;
    toString(): string;
    throw(): never;
}
declare const Problems: new (state: TraversalState) => Problems;
type Problems = arraySubclassToReadonly<ProblemArray>;
type ProblemSources = {
    divisor: number;
    class: constructor;
    domain: Domain;
    missing: undefined;
    extraneous: unknown;
    bound: FlatBound;
    regex: RegexLiteral;
    value: unknown;
    multi: Problem[];
    branches: readonly Problem[];
    custom: string;
    cases: string[];
};
type ProblemCode = evaluate<keyof ProblemSources>;
type ProblemSource<code extends ProblemCode = ProblemCode> = ProblemSources[code];
type ProblemDataByCode = {
    [code in ProblemCode]: code extends keyof ConstrainedRuleTraversalData ? ConstrainedRuleTraversalData[code] : unknown;
};
type ProblemData<code extends ProblemCode = ProblemCode> = ProblemDataByCode[code];
type MustBeWriter<code extends ProblemCode> = string | ((source: ProblemSources[code]) => string);
type ReasonWriter<code extends ProblemCode = ProblemCode> = (mustBe: string, data: DataWrapper<code extends keyof ConstrainedRuleTraversalData ? ConstrainedRuleTraversalData[code] : unknown>) => string;
type ContextWriter = (reason: string, path: Path) => string;
type ProblemOptions<code extends ProblemCode = ProblemCode> = {
    mustBe?: MustBeWriter<code>;
    writeReason?: ReasonWriter<code>;
    addContext?: ContextWriter;
};
type ProblemsConfig = evaluate<{
    writeReason?: ReasonWriter;
    addContext?: ContextWriter;
} & ProblemsConfigByCode>;
type ProblemsConfigByCode = {
    [code in ProblemCode]?: ProblemOptions<code>;
};
type ProblemWritersByCode = {
    [code in ProblemCode]: ProblemWriters<code>;
};
type ProblemWriters<code extends ProblemCode = ProblemCode> = Required<ProblemOptions<code>>;

type TypeParser<$> = {
    <def>(def: validateDefinition<def, $>): parseType<def, $>;
    <def>(def: validateDefinition<def, $>, opts: TypeOptions): parseType<def, $>;
} & TypeParserProps<$>;
type TypeParserProps<$> = {
    from: Expressions<$>["node"];
};
type parseType<def, $> = [def] extends [validateDefinition<def, $>] ? Type<inferDefinition<def, $>> : Type<never>;
type TypeRoot<t = unknown> = evaluate<{
    [as]: t;
    infer: asOut<t>;
    inferIn: asIn<t>;
    allows: (data: unknown) => data is asIn<t>;
    assert: (data: unknown) => asOut<t>;
    node: Node;
    flat: TraversalNode;
    qualifiedName: QualifiedTypeName;
    definition: unknown;
    scope: Scope;
    includesMorph: boolean;
    config: TypeConfig;
}>;
type KeyCheckKind = "loose" | "strict" | "distilled";
type TypeOptions = evaluate<{
    keys?: KeyCheckKind;
} & ProblemOptions>;
type TypeConfig = TypeOptions;
type Type<t = unknown> = defer<Checker<t> & TypeRoot<t>>;
type Checker<t> = (data: unknown) => CheckResult<asOut<t>>;
type QualifiedTypeName = `${string}.${string}`;
type AnonymousTypeName = `λ${string}`;
type asIn<t> = asIo<t, "in">;
type asOut<t> = asIo<t, "out">;
type asIo<t, io extends "in" | "out"> = t extends ParsedMorph<infer i, infer o> ? io extends "in" ? i : o : t extends object ? t extends BuiltinClass | ((...args: any[]) => any) ? t : {
    [k in keyof t]: asIo<t[k], io>;
} : t;

type withPossiblePreviousEscapeCharacter<k> = k extends `${infer name}?` ? `${name}${Scanner.EscapeToken}?` : k;
type inferRecord<def extends Dict, $> = evaluate<{
    [requiredKeyName in requiredKeyOf<def>]: inferDefinition<def[withPossiblePreviousEscapeCharacter<requiredKeyName>], $>;
} & {
    [optionalKeyName in optionalKeyOf<def>]?: inferDefinition<def[`${optionalKeyName}?`], $>;
}>;
type KeyParseResult<name extends string, isOptional extends boolean> = [
    name,
    isOptional
];
type parseKey<k> = k extends optionalKeyWithName<infer name> ? name extends `${infer baseName}${Scanner.EscapeToken}` ? [`${baseName}?`, false] : [name, true] : [k, false];
type optionalKeyWithName<name extends string = string> = `${name}?`;
type optionalKeyOf<def> = {
    [k in keyof def]: parseKey<k> extends KeyParseResult<infer name, true> ? name : never;
}[keyof def] & unknown;
type requiredKeyOf<def> = {
    [k in keyof def]: parseKey<k> extends KeyParseResult<infer name, false> ? name : never;
}[keyof def] & unknown;

type ParseContext = {
    type: Type;
    path: Path;
};
type inferDefinition<def, $> = isAny<def> extends true ? never : def extends Infer<infer t> | InferredThunk<infer t> ? t : def extends string ? inferString<def, $> : def extends List ? inferTuple<def, $> : def extends RegExp ? string : def extends Dict ? inferRecord<def, $> : never;
type validateDefinition<def, $> = [def] extends [(...args: any[]) => any] ? def : def extends Terminal ? def : def extends string ? validateString<def, $> : def extends TupleExpression ? validateTupleExpression<def, $> : def extends BadDefinitionType ? writeBadDefinitionTypeMessage<objectKindOf<def> extends string ? objectKindOf<def> : domainOf<def>> : isUnknown<def> extends true ? stringKeyOf<$> : evaluate<{
    [k in keyof def]: validateDefinition<def[k], $>;
}>;
declare const as: unique symbol;
type Infer<t> = {
    [as]?: t;
};
type InferredThunk<t = unknown> = () => Infer<t>;
type Terminal = RegExp | Infer<unknown> | InferredThunk;
type BadDefinitionType = Exclude<Primitive, string>;
declare const writeBadDefinitionTypeMessage: <actual extends string>(actual: actual) => `Type definitions must be strings or objects (was ${actual})`;
type writeBadDefinitionTypeMessage<actual extends string> = `Type definitions must be strings or objects (was ${actual})`;

type SerializedString = `'${string}'`;
type SerializedPrimitives = {
    string: SerializedString;
    number: NumberLiteral;
    bigint: BigintLiteral;
    boolean: "true" | "false";
    null: "null";
    undefined: "undefined";
};
type SerializedPrimitive = SerializedPrimitives[keyof SerializedPrimitives];

type DiscriminatedSwitch<kind extends DiscriminantKind = DiscriminantKind> = {
    readonly path: Path;
    readonly kind: kind;
    readonly cases: DiscriminatedCases<kind>;
};
type DiscriminatedCases<kind extends DiscriminantKind = DiscriminantKind> = {
    [caseKey in CaseKey<kind>]?: TraversalEntry[];
};
type CaseKey<kind extends DiscriminantKind = DiscriminantKind> = DiscriminantKind extends kind ? string : DiscriminantKinds[kind] | "default";
type DiscriminantKinds = {
    domain: Domain;
    class: DefaultObjectKind;
    value: SerializedPrimitive;
};
type DiscriminantKind = evaluate<keyof DiscriminantKinds>;

type Node<$ = Dict> = Identifier<$> | ResolvedNode<$>;
type Identifier<$ = Dict> = stringKeyOf<$>;
/**
 * @operator {@link ResolvedNode | node}
 * @docgenTable
 * @tuple ["node", nodeDefinition]
 * @helper type.from(nodeDefinition)
 */
type ResolvedNode<$ = Dict> = TypeNode<$> | ConfigNode<$>;
type ConfigNode<$ = Dict> = {
    config: TypeConfig;
    node: TypeNode<$>;
};
type TypeNode<$ = Dict> = {
    readonly [domain in Domain]?: Predicate<domain, $>;
};
type TraversalNode = Domain | TraversalEntry[];
type TraversalKey = TraversalEntry[0];
type TraversalEntry = RuleEntry | DomainsEntry | MorphEntry | AliasEntry | DomainEntry | BranchesEntry | SwitchEntry | TraversalConfigEntry;
type AliasEntry = ["alias", string];
type ConfigEntry = entryOf<TypeConfig>;
type TraversalConfigEntry = [
    "config",
    {
        config: ConfigEntry[];
        node: TraversalNode;
    }
];
type DomainEntry = ["domain", Domain];
type DomainsEntry = [
    "domains",
    {
        readonly [domain in Domain]?: TraversalEntry[];
    }
];
type BranchesEntry = ["branches", TraversalEntry[][]];
type SwitchEntry = ["switch", DiscriminatedSwitch];
type LiteralNode<domain extends Domain = Domain, value extends inferDomain<domain> = inferDomain<domain>> = {
    [k in domain]: LiteralRules<domain, value>;
};

type DistributableFunction<input = any, args extends any[] = any[], output = unknown> = (input: input, ...args: args) => output;
type distributable<f extends DistributableFunction> = f | distributeFunction<f>;
type distributeFunction<f extends DistributableFunction> = f extends DistributableFunction<infer input, infer args, infer output> ? evaluate<{
    [domain in domainOf<input>]?: (input: unknown extends input ? unknown : Extract<input, inferDomain<domain>>, ...args: args) => output;
}> : never;

declare const arkScope: Scope<[{
    any: any;
    bigint: bigint;
    boolean: boolean;
    false: false;
    never: never;
    null: null;
    number: number;
    object: object;
    string: string;
    symbol: symbol;
    true: true;
    unknown: unknown;
    void: void;
    undefined: undefined;
    Function: (...args: any[]) => unknown;
    Date: Date;
    Error: Error;
    Map: Map<unknown, unknown>;
    RegExp: RegExp;
    Set: Set<unknown>;
    WeakMap: WeakMap<object, unknown>;
    WeakSet: WeakSet<object>;
    Promise: Promise<unknown>;
    alpha: string;
    alphanumeric: string;
    lowercase: string;
    uppercase: string;
    creditCard: string;
    email: string;
    uuid: string;
    parsedNumber: (In: string) => number;
    parsedInteger: (In: string) => number;
    parsedDate: (In: string) => Date;
    semver: string;
    json: (In: string) => unknown;
    integer: number;
}, {}, false]>;
declare const ark: Space<PrecompiledDefaults>;
type PrecompiledDefaults = {
    any: any;
    bigint: bigint;
    boolean: boolean;
    false: false;
    never: never;
    null: null;
    number: number;
    object: object;
    string: string;
    symbol: symbol;
    true: true;
    unknown: unknown;
    void: void;
    undefined: undefined;
    integer: number;
    alpha: string;
    alphanumeric: string;
    lowercase: string;
    uppercase: string;
    creditCard: string;
    email: string;
    uuid: string;
    semver: string;
    json: (In: string) => unknown;
    parsedNumber: (In: string) => number;
    parsedInteger: (In: string) => number;
    parsedDate: (In: string) => Date;
    Function: (...args: any[]) => unknown;
    Date: Date;
    Error: Error;
    Map: Map<unknown, unknown>;
    RegExp: RegExp;
    Set: Set<unknown>;
    WeakMap: WeakMap<object, unknown>;
    WeakSet: WeakSet<object>;
    Promise: Promise<unknown>;
};
declare const type: TypeParser<PrecompiledDefaults>;

type Expressions<$> = {
    intersection: BinaryExpressionParser<$, "&">;
    union: BinaryExpressionParser<$, "|">;
    arrayOf: UnaryExpressionParser<$, "[]">;
    keyOf: UnaryExpressionParser<$, "keyof">;
    node: UnvalidatedExpressionParser<$, "node">;
    instanceOf: UnvalidatedExpressionParser<$, "instanceof">;
    valueOf: UnvalidatedExpressionParser<$, "===">;
    narrow: FunctionalExpressionParser<$, "=>">;
    morph: FunctionalExpressionParser<$, "|>">;
};
type Ark = Expressions<PrecompiledDefaults>;
/**
 * @operator {@link intersection | &}
 * @docgenTable
 * @string "L&R"
 * @tuple  [L, "&", R]
 * @helper  intersection(L,R)
 * @example string
 *      const intersection = type("/@arktype\.io$/ & email")
 * @example tuple
 *      const tupleIntersection = type(["/@arktype\.io$/", "&", "email"])
 * @example helper
 *      const helperIntersection = intersection("/@arktype\.io$/","email")
 */
declare const intersection: Ark["intersection"];
/**
 * @operator {@link union | |}
 * @docgenTable
 * @string "L|R"
 * @tuple [L, "|" , R]
 * @helper union(L,R)
 * @example string
 *      const union = type("string|number")
 * @example tuple
 *      const tupleUnion = type(["string", "|", "number"])
 * @example helper
 *      const helperUnion = union("string", "number")
 */
declare const union: Ark["union"];
/**
 * @operator {@link arrayOf}
 * @docgenTable
 * @string "T[]"
 * @tuple [T, "[]"]
 * @helper arrayOf(T)
 * @example string
 *      const numberArray = type("number[]")
 * @example tuple
 *      const tupleArray = type(["number", "[]"])
 * @example helper
 *      const helperArray = arrayOf("number")
 */
declare const arrayOf: Ark["arrayOf"];
/**
 * @operator {@link keyOf}
 * @docgenTable
 * @tuple "["keyOf", T]"
 * @helper  keyOf(T)
 * @example tuple
 *      const tupleKeyOf = type(["keyOf", {a:"string"}])
 * @example helper
 *      const helperKeyOf = keyOf({a:"string"})
 */
declare const keyOf: Ark["keyOf"];
/**
 * @operator {@link instanceOf}
 * @docgenTable
 * @tuple ["instanceOf", T]
 * @helper instanceOf(T)
 * @example tuple
 *      const tupleInstanceOf = type(["instanceOf", Date])
 * @example helper
 *      const helperInstanceOf = instanceOf(Date)
 */
declare const instanceOf: Ark["instanceOf"];
/**
 * @operator {@link valueOf | ===}
 * @docgenTable
 * @tuple ["===", T]
 * @helper valueOf(T)
 * @example tuple
 *      const tupleValueOf = type(["valueOf", {a:"string"}])
 * @example helper
 *      const helperValueOf = valueOf({a:"string"})
 */
declare const valueOf: Ark["valueOf"];
/**
 * @operator {@link narrow | =>}
 * @docgenTable
 * @tuple ["type", "=>" , condition]
 * @example tuple
 *      const narrow = type( ["number", "=>" , (n) => n % 2 === 0])
 * @example
 *      const isEven = (x: unknown): x is number => x % 2 === 0
 */
declare const narrow: Ark["narrow"];
/**
 * @operator {@link morph | |>}
 * @docgenTable
 * @tuple [inputType, "|>", (data) => output]
 * @helper morph(inputType, (data) => output)
 * @example tuple
 *      const tupleMorph = type( ["string", "|>" , (data) => `morphed ${data}`])
 * @example helper
 *      const helperMorph = morph("string", (data) => `morphed ${data}`)
 */
declare const morph: Ark["morph"];
type BinaryExpressionParser<$, operator extends "&" | "|"> = {
    <l, r>(l: validateDefinition<l, $>, r: validateDefinition<r, $>): parseTupleExpression<[l, operator, r], $>;
    <l, r>(l: validateDefinition<l, $>, r: validateDefinition<r, $>, opts: TypeOptions): parseTupleExpression<[l, operator, r], $>;
};
type UnaryExpressionParser<$, operator extends "keyof" | "[]"> = {
    <def>(def: validateDefinition<def, $>): parseTupleExpression<unaryToTupleExpression<def, operator>, $>;
    <def>(def: validateDefinition<def, $>, opts: TypeOptions): parseTupleExpression<unaryToTupleExpression<def, operator>, $>;
};
type UnvalidatedExpressionParser<$, operator extends UnparsedTupleOperator> = {
    <def>(def: conform<def, UnparsedTupleExpressionInput<$>[operator]>): parseTupleExpression<[operator, def], $>;
    <def>(def: conform<def, UnparsedTupleExpressionInput<$>[operator]>, opts: TypeOptions): parseTupleExpression<[operator, def], $>;
};
type FunctionalExpressionParser<$, operator extends FunctionalTupleOperator> = {
    <inDef, fn extends FunctionWithInferredInput<$, operator, inDef>>(inDef: validateDefinition<inDef, $>, fn: fn): parseTupleExpression<[inDef, operator, fn], $>;
    <inDef, fn extends FunctionWithInferredInput<$, operator, inDef>>(inDef: validateDefinition<inDef, $>, fn: fn, opts: TypeOptions): parseTupleExpression<[inDef, operator, fn], $>;
};
type FunctionWithInferredInput<$, operator extends FunctionalTupleOperator, inDef> = operator extends "=>" ? distributable<Narrow<asIn<inferDefinition<inDef, $>>>> : Morph<asOut<inferDefinition<inDef, $>>>;
type unaryToTupleExpression<def, operator extends "keyof" | "[]"> = operator extends TuplePostfixOperator ? [def, "[]"] : [operator, def];
type parseTupleExpression<expression extends TupleExpression, $> = inferTupleExpression<expression, $> extends infer result ? [result] extends [never] ? never : Type<result> : never;

type stringifyUnion<t extends string> = join<unionToTuple<t>, ", ">;
type unionToTuple<t> = unionToTupleRecurse<t, []> extends infer result ? conform<result, t[]> : never;
type unionToTupleRecurse<t, result extends unknown[]> = getLastBranch<t> extends infer current ? {
    0: unionToTupleRecurse<Exclude<t, current>, [current, ...result]>;
    1: result;
}[[t] extends [never] ? 1 : 0] : never;
type getLastBranch<t> = intersectUnion<t extends unknown ? (x: t) => void : never> extends (x: infer branch) => void ? branch : never;
type intersectUnion<t> = (t extends unknown ? (k: t) => void : never) extends (k: infer intersection) => void ? intersection : never;

declare class Cache<item = unknown> {
    protected cache: {
        [name in string]?: item;
    };
    get root(): {
        readonly [name in string]?: item;
    };
    has(name: string): boolean;
    get(name: string): item | undefined;
    set(name: string, item: item): item;
}
declare class FreezingCache<item = unknown> extends Cache<item> {
    set(name: string, item: item): item;
}

type ScopeParser = {
    <aliases>(aliases: validateAliases<aliases, {}>): Scope<parseScope<aliases, {}>>;
    <aliases, opts extends ScopeOptions>(aliases: validateAliases<aliases, opts>, opts: validateOptions<opts>): Scope<parseScope<aliases, opts>>;
};
type validateAliases<aliases, opts extends ScopeOptions> = evaluate<{
    [name in keyof aliases]: name extends keyof preresolved<opts> ? writeDuplicateAliasesMessage<name & string> : validateDefinition<aliases[name], bootstrapScope<aliases, opts>>;
}>;
type ScopeOptions = {
    imports?: Space[] | [];
    includes?: Space[] | [];
    standard?: boolean;
    name?: string;
    codes?: ProblemsConfig;
    keys?: KeyCheckKind;
};
type ScopeConfig = evaluate<{
    keys: KeyCheckKind;
    codes: ProblemWritersByCode;
}>;
type validateOptions<opts extends ScopeOptions> = {
    [k in keyof opts]: k extends "imports" | "includes" ? mergeSpaces<opts[k], [
        k,
        "imports"
    ] extends ["includes", keyof opts] ? mergeSpaces<opts["includes"]> : {}> extends error<infer e> ? e : opts[k] : opts[k];
};
type ScopeContext = Dict | ScopeContextTuple;
type ScopeContextTuple = [exports: Dict, locals: Dict, standard?: false];
type parseScope<aliases, opts extends ScopeOptions> = opts["standard"] extends false ? [inferExports<aliases, opts>, importsOf<opts>, false] : opts["imports"] extends Space[] ? [inferExports<aliases, opts>, importsOf<opts>] : inferExports<aliases, opts>;
type importsOf<opts extends ScopeOptions> = unknown extends opts["imports"] ? {} : mergeSpaces<opts["imports"]>;
type includesOf<opts extends ScopeOptions> = unknown extends opts["includes"] ? {} : mergeSpaces<opts["includes"]>;
type resolve<name extends keyof $, $> = isAny<$[name]> extends true ? any : $[name] extends alias<infer def> ? inferDefinition<def, $> : $[name];
type exportsOf<context extends ScopeContext> = context extends [
    infer exports,
    ...unknown[]
] ? exports : context;
type localsOf<context extends ScopeContext> = context extends List ? context["1"] & (context["2"] extends false ? {} : PrecompiledDefaults) : PrecompiledDefaults;
type mergeSpaces<scopes, base extends Dict = {}> = scopes extends readonly [
    Space<infer head>,
    ...infer tail
] ? keyof base & keyof head extends never ? mergeSpaces<tail, base & head> : error<writeDuplicateAliasesMessage<stringifyUnion<keyof base & keyof head & string>>> : base;
type preresolved<opts extends ScopeOptions> = includesOf<opts> & importsOf<opts> & (opts["standard"] extends false ? {} : PrecompiledDefaults);
type alias<def = {}> = nominal<def, "alias">;
type bootstrapScope<aliases, opts extends ScopeOptions> = {
    [k in keyof aliases]: alias<aliases[k]>;
} & preresolved<opts>;
type inferExports<aliases, opts extends ScopeOptions> = evaluate<{
    [k in keyof aliases]: inferDefinition<aliases[k], bootstrapScope<aliases, opts>>;
} & includesOf<opts>>;
type Space<exports = Dict> = {
    [k in keyof exports]: Type<exports[k]>;
};
type resolutions<context extends ScopeContext> = localsOf<context> & exportsOf<context>;
type name<context extends ScopeContext> = keyof resolutions<context> & string;
declare class Scope<context extends ScopeContext = any> {
    #private;
    aliases: Dict;
    name: string;
    config: ScopeConfig;
    parseCache: FreezingCache<Node>;
    constructor(aliases: Dict, opts?: ScopeOptions);
    getAnonymousQualifiedName(base: AnonymousTypeName): QualifiedTypeName;
    addAnonymousTypeReference(referencedType: Type, ctx: ParseContext): Node;
    get infer(): exportsOf<context>;
    compile(): Space<exportsOf<context>>;
    addParsedReferenceIfResolvable(name: name<context>, ctx: ParseContext): boolean;
    resolve(name: name<context>): Type;
    resolveNode(node: Node): ResolvedNode;
    resolveTypeNode(node: Node): TypeNode;
    expressions: Expressions<resolutions<context>>;
    intersection: BinaryExpressionParser<resolutions<context>, "&">;
    union: BinaryExpressionParser<resolutions<context>, "|">;
    arrayOf: UnaryExpressionParser<resolutions<context>, "[]">;
    keyOf: UnaryExpressionParser<resolutions<context>, "keyof">;
    valueOf: UnvalidatedExpressionParser<resolutions<context>, "===">;
    instanceOf: UnvalidatedExpressionParser<resolutions<context>, "instanceof">;
    narrow: FunctionalExpressionParser<resolutions<context>, "=>">;
    morph: FunctionalExpressionParser<resolutions<context>, "|>">;
    type: TypeParser<resolutions<context>>;
    isResolvable(name: string): unknown;
}
declare const scope: ScopeParser;
declare const writeDuplicateAliasesMessage: <name_1 extends string>(name: name_1) => `Alias '${name_1}' is already defined`;
type writeDuplicateAliasesMessage<name extends string> = `Alias '${name}' is already defined`;

/**
 * @docgenScope
 * @docgenTable
 */
declare const jsObjectsScope: Scope<[{
    Function: (...args: any[]) => unknown;
    Date: Date;
    Error: Error;
    Map: Map<unknown, unknown>;
    RegExp: RegExp;
    Set: Set<unknown>;
    WeakMap: WeakMap<object, unknown>;
    WeakSet: WeakSet<object>;
    Promise: Promise<unknown>;
}, {}, false]>;

/**
 * @keywords keywords: {"any": "any",
        "bigint": "a bigint",
        "boolean": "a boolean",
        "false": "false",
        "never": "never",
        "null": "null",
        "number": "a number",
        "object": "an object",
        "string": "a string",
        "symbol": "a symbol",
        "true": "true",
        "unknown": "unknown",
        "void": "void",
        "undefined": "undefined"}
 * @docgenScope
 * @docgenTable
 */
declare const tsKeywordsScope: Scope<[{
    any: any;
    bigint: bigint;
    boolean: boolean;
    false: false;
    never: never;
    null: null;
    number: number;
    object: object;
    string: string;
    symbol: symbol;
    true: true;
    unknown: unknown;
    void: void;
    undefined: undefined;
}, {}, false]>;

/**
 * @keywords keywords: {
        "alpha": "only letters",
        "alphanumeric": "only letters and digits",
        "lowercase": "only lowercase letters",
        "uppercase": "only uppercase letters",
        "creditCard": "a valid credit card number",
        "email": "a valid email",
        "uuid": "a valid UUID",
        "parsedNumber": "a well-formed numeric string",
        "parsedInteger": "a well-formed integer string",
        "parsedDate": "a valid date",
        "semver": "a valid semantic version",
        "json": "a JSON-parsable string",
        "integer": "an integer"
}
 * @docgenScope
 * @docgenTable
 */
declare const validationScope: Scope<[{
    alpha: string;
    alphanumeric: string;
    lowercase: string;
    uppercase: string;
    creditCard: string;
    email: string;
    uuid: string;
    parsedNumber: (In: string) => number;
    parsedInteger: (In: string) => number;
    parsedDate: (In: string) => Date;
    semver: string;
    json: (In: string) => unknown;
    integer: number;
}, {}, false]>;

export { Infer, Problem, Problems, ResolvedNode, Scope, Space, Type, ark, arkScope, arrayOf, instanceOf, intersection, jsObjectsScope, keyOf, morph, narrow, parseConfigTuple, scope, tsKeywordsScope, type, union, validateBound, validateDivisor, validationScope, valueOf };
