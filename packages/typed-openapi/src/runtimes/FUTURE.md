# Adding a runtime adapter

1. Create `src/runtimes/<name>/index.ts` implementing `RuntimeAdapter` (`./types.ts`).
2. Register it in `./registry.ts`.
3. Add the name to `allowedRuntimes` in `generator.ts`.
4. Optional: add a subpath export in `package.json` + `tsup.config.ts`.

## Historical Sinclair targets (not shipped)

yup / io-ts / typebox used to be emitted via `@sinclair/typebox-codegen`. v3 dropped them in favor of first-party
adapters. Re-adding is mostly mechanical — same Schema IR, new `emitNode`.

Minimal skeleton:

```ts
import type { SchemaNode } from "../../schema-ir/types.ts";
import type { EmitCtx, RuntimeAdapter } from "../types.ts";

const emitNode = (node: SchemaNode, ctx: EmitCtx): string => {
  switch (node.kind) {
    case "string":
      return `/* yup.string() / t.string / Type.String() */`;
    case "object":
      return `/* map properties via objectProps() from ../shared.ts */`;
    // …cover remaining SchemaNode kinds
    default:
      return `/* unknown */`;
  }
};

export const exampleAdapter: RuntimeAdapter = {
  name: "zod", // use a real registered name when wiring up
  imports: () => `import …`,
  inferType: (expr) => `…`,
  emitNode,
  literalString: (value) => JSON.stringify(value),
  unknown: () => `…`,
  never: () => `…`,
  emitNamedSchema: (name, node, ctx) => `export const ${name} = ${emitNode(node, ctx)};`,
};
```

Tips when porting:

- Use `applyStringConstraints` / `applyNumberConstraints` / … from `shared.ts` so `--validation` presets stay
  consistent.
- Recursive schemas: zod/valibot use lazy wrappers; effect uses `suspend`; arktype uses `type.module` via
  `emitNamedSchemas`.
- Prefer emitting idiomatic APIs for the target library rather than string-matching old Sinclair snapshots.
