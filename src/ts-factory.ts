import { createFactory, unwrap } from "./box-factory";

export const tsFactory = createFactory({
  typeAlias: (name, def) => `type ${name} = ${unwrap(def)}`,
  union: (types) => types.map(unwrap).join(" | "),
  intersection: (types) => types.map(unwrap).join(" & "),
  array: (type) => `Array<${unwrap(type)}>`,
  optional: (type) => `${unwrap(type)} | undefined`,
  reference: (name, typeArgs) => `${name}${typeArgs ? `<${typeArgs.map(unwrap).join(", ")}>` : ""}`,
  literal: (value) => value.toString(),
  string: () => "string" as const,
  number: () => "number" as const,
  boolean: () => "boolean" as const,
  unknown: () => "unknown" as const,
  any: () => "any" as const,
  never: () => "never" as const,
  object: (props) => {
    const propsString = Object.entries(props)
      .map(([prop, type]) => `${prop}: ${unwrap(type)}`)
      .join(", ");

    return `{ ${propsString} }`;
  },
});
