---
title: Runtime adapters
description: Pick the validation library already used by your application.
sidebar:
  order: 1
---

Without `--runtime`, typed-openapi emits TypeScript types and a client only. Add one runtime adapter when generated schemas should validate input or output at runtime.

Pick the library already present in your application. The OpenAPI mapping and client API stay the same; only the emitted schema expressions and their inference source change.

## Choose an adapter

| Runtime | Install | Generate |
| --- | --- | --- |
| Types only | — | `--runtime none` |
| Zod v4 | `pnpm add zod` | `--runtime zod` |
| Zod v3 | `pnpm add zod@3` | `--runtime zod3` |
| Effect Schema v4 | `pnpm add effect` | `--runtime effect` |
| Effect Schema v3 | `pnpm add @effect/schema effect` | `--runtime effect3` |
| Valibot | `pnpm add valibot` | `--runtime valibot` |
| ArkType | `pnpm add arktype` | `--runtime arktype` |
| TypeBox | `pnpm add @sinclair/typebox` | `--runtime typebox` |
| Typia | `pnpm add typia` | `--runtime typia` |

All adapters use the same input OpenAPI document and client API. They only change the emitted schema code and its type inference.

## Runtime type sidecar

Every runtime client writes two sibling files by default:

```text
src/api/openapi.zod.ts
src/api/openapi.zod.types.d.ts
```

The runtime module contains executable validators. The declaration sidecar is the type surface used by the generated client and by your application. This keeps TypeScript from semantically checking a huge validator implementation every time it checks your project—a material difference for APIs as large as Cloudflare's OpenAPI document—while preserving strict exported schema aliases and `schema.parse()` inference.

The runtime module deliberately starts with `// @ts-nocheck`; validation still runs normally at runtime. The trade-off is limited to the generated implementation: TypeScript does not report internal diagnostics in that file. Keep both files together when you commit, publish, or copy generated output, and use `skipLibCheck` to get the intended compiler-speed benefit.

Use `--no-runtime-types` when you need one checked generated file instead:

```sh
pnpm exec typed-openapi openapi.yaml --runtime zod --no-runtime-types
```

```ts
// typed-openapi.config.ts
import { defineConfig } from "typed-openapi";

export default defineConfig({
  input: "./openapi.yaml",
  runtime: "zod",
  runtimeTypes: false,
});
```

`runtime: none` never creates a sidecar. The generated import uses a `.types.js` specifier so the sibling `.types.d.ts` works in NodeNext projects without TypeScript extension-import options.

## Copy one command

```sh
# Zod v4
pnpm exec typed-openapi openapi.yaml --runtime zod --output src/api/openapi.ts

# Effect Schema v4 — emits an Effect-native client unless you override --client
pnpm exec typed-openapi openapi.yaml --runtime effect --output src/api/openapi.ts

# Valibot
pnpm exec typed-openapi openapi.yaml --runtime valibot --output src/api/openapi.ts

# ArkType
pnpm exec typed-openapi openapi.yaml --runtime arktype --output src/api/openapi.ts

# TypeBox
pnpm exec typed-openapi openapi.yaml --runtime typebox --output src/api/openapi.ts

# Typia
pnpm exec typed-openapi openapi.yaml --runtime typia --output src/api/openapi.ts
```

## What generated schema code looks like

For an OpenAPI object named `Pet`, each adapter emits a runtime schema and a matching inferred TypeScript type. For example, the Zod output is shaped like this:

```ts
export const Pet = z.object({
  id: z.number().int(),
  name: z.string(),
});

export type Pet = z.infer<typeof Pet>;
```

Use [validation controls](/validation/input-output/) to choose depth, input/output sides, primitive coercion, and domain transforms.

## A practical decision rule

- **No untrusted boundary or server validates already:** start with `none`.
- **Existing Zod, Valibot, ArkType, TypeBox, or Typia codebase:** use that runtime so generated schemas compose with your own.
- **Effect application:** use `effect`; it also defaults to the Effect-native client.
- **Supporting an older ecosystem:** use `zod3` or `effect3` deliberately, then plan a migration separately.

Pick the validation library your application already runs. The generated file only needs that chosen runtime as a dependency.
