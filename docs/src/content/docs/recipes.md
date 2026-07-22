---
title: Production recipes
description: Start from a real application shape, copy a small configuration, and follow the next link only when you need it.
sidebar:
  label: Production recipes
  order: 4
---

These recipes are deliberate starting points, not mandatory stacks. Generate the smallest useful surface first, commit the output, and add an integration only when the application benefits from it.

## Browser application: Fetch, Zod, and TanStack Query

Use this for a React application that talks to a JSON API and wants runtime checks at the browser boundary.

```ts
// typed-openapi.config.ts
import { defineConfig } from "typed-openapi";

export default defineConfig({
  input: "./openapi.yaml",
  output: "./src/api/openapi.ts",
  runtime: "zod",
  validation: "strict",
  defaultFetcher: {
    envApiBaseUrl: "VITE_API_URL",
  },
  tanstack: "./src/api/query.ts",
  format: true,
});
```

```sh
pnpm add typed-openapi zod @tanstack/react-query
pnpm exec typed-openapi
```

You now have a typed Fetch client and a typed query helper. Wire the client into a component with [TanStack Query](/integrations/tanstack-query/). If the API only needs structural checks during development, lower the policy to `formats` or `loose` in [validation controls](/validation/input-output/).

## Frontend contract tests: MSW fixtures from the same spec

Use this when your frontend should start independently from the backend. Keep generated handlers as the baseline; put scenario-specific responses in tests or Storybook stories.

```ts
// typed-openapi.config.ts
import { defineConfig } from "typed-openapi";

export default defineConfig({
  input: "./openapi.yaml",
  output: "./src/api/openapi.ts",
  defaultFetcher: true,
  msw: "./src/mocks/handlers.ts",
  mswBaseUrl: "https://api.example.com",
  mswFaker: true,
});
```

```sh
pnpm add typed-openapi
pnpm add -D msw @faker-js/faker
pnpm exec typed-openapi
```

Generated factories use examples and defaults first, with Faker filling gaps. Learn how to start the worker and override one endpoint in [MSW mocks](/integrations/msw/).

## Shared contracts package: schemas without a transport

Use this when a monorepo shares validation contracts but every consumer owns its own HTTP layer.

```ts
// packages/contracts/typed-openapi.config.ts
import { defineConfig } from "typed-openapi";

export default defineConfig({
  input: "../../openapi.yaml",
  output: "./src/schemas.ts",
  runtime: "valibot",
  schemasOnly: true,
  validation: "strict",
  format: true,
});
```

```sh
pnpm --dir packages/contracts exec typed-openapi
```

This leaves out client methods entirely. If you need endpoint types as well, use `includeClient: false` instead; [output files](/advanced/output-shape/) explains the distinction.

## Effect service: typed failures in the error channel

Use this when service code already composes work with Effect. The Effect runtime selects an Effect-native client automatically.

```ts
// typed-openapi.config.ts
import { defineConfig } from "typed-openapi";

export default defineConfig({
  input: "./openapi.yaml",
  output: "./src/api/openapi.ts",
  runtime: "effect",
  defaultFetcher: true,
  validateSide: "output",
});
```

```sh
pnpm add typed-openapi effect
pnpm exec typed-openapi
```

Use `Effect.catchAll` to distinguish typed status errors from transport and validation problems. See [Effect-native client](/clients/effect-client/) for that error model.

## Large specification: generate a focused SDK

Use this when one OpenAPI document serves several teams or product areas. Select endpoints by method, path, operation ID, alias, or tag; schemas not reachable from the selected endpoints are removed by default.

```sh
pnpm exec typed-openapi ./openapi.yaml \
  --endpoint '^GET /catalog' \
  --endpoint 'public' \
  --schema 'Pagination|ProblemDetails' \
  --schema-naming always-name \
  --output src/api/catalog.ts
```

Read [filters and naming](/advanced/filtering-and-schema-naming/) before splitting one specification into several generated clients. It covers tree-shaking and the naming trade-offs.

:::tip[Choose by boundary, not by fashion]
Use a runtime adapter to validate data you do not control. Use a generated Fetch client when no existing transport owns encoding and authentication. Use integrations to remove repeated glue code. Everything else can stay types-only.
:::
