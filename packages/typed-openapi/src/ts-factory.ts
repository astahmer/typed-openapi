import { Box } from "./box.ts";
import { createFactory, unwrap } from "./box-factory.ts";
import { wrapWithQuotesIfNeeded } from "./string-utils.ts";

export const tsFactory = createFactory({
  union: (types) => (types.length ? `(${types.map(unwrap).join(" | ")})` : "never"),
  intersection: (types) => (types.length ? `(${types.map(unwrap).join(" & ")})` : "unknown"),
  array: (type) => `Array<${unwrap(type)}>`,
  optional: (type) => `${unwrap(type)} | undefined`,
  reference: (name, typeArgs) => `${name}${typeArgs ? `<${typeArgs.map(unwrap).join(", ")}>` : ""}`,
  literal: (value) => {
    if (typeof value === "string") return value;
    if (Box.isBox(value)) return unwrap(value);
    if (Array.isArray(value) || typeof value === "object") return JSON.stringify(value);
    return String(value);
  },
  string: () => "string" as const,
  number: () => "number" as const,
  boolean: () => "boolean" as const,
  unknown: () => "unknown" as const,
  any: () => "any" as const,
  never: () => "never" as const,
  object: (props) => {
    const propsString = Object.entries(props)
      .map(
        ([prop, type]) =>
          `${wrapWithQuotesIfNeeded(prop)}${typeof type !== "string" && Box.isOptional(type) ? "?" : ""}: ${unwrap(
            type,
          )}`,
      )
      .join(", ");

    return `{ ${propsString} }`;
  },
});
