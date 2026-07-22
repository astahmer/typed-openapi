---
title: Runtime adapters
description: Pick the validation library already used by your application.
sidebar:
  order: 1
---

Without `--runtime`, typed-openapi emits TypeScript types and a client only. Add one runtime adapter when generated schemas should validate input or output at runtime.

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

:::tip[Stay consistent]
Pick the validation library your application already runs. The generated file only needs that chosen runtime as a dependency.
:::
