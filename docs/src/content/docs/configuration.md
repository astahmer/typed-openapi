---
title: Configuration
description: Keep generation options typed, reviewable, and repeatable.
sidebar:
  order: 2
---

Put stable generation settings in `typed-openapi.config.ts`. `defineConfig()` gives editor completion, checks the configuration shape, and turns a long generation command into a reviewable project contract.

```ts
// typed-openapi.config.ts
import { defineConfig } from "typed-openapi";

export default defineConfig({
  input: "./openapi.yaml",
  output: "./src/api/client.ts",
  runtime: "zod",
  validation: "strict",
  validateSide: "both",
  defaultFetcher: true,
  tanstack: "./src/api/query.ts",
  msw: "./src/api/msw.ts",
  transformDates: true,
  format: true,
});
```

Now one short command regenerates every configured output:

```sh
pnpm exec typed-openapi
```

:::tip[Commit the config and the generated output]
Treat the OpenAPI file, config, and generated TypeScript as one reviewed change. That makes API drift visible in a normal pull request instead of at runtime.
:::

## Override one setting from CI or a script

CLI flags win over config values. Keep the shared config checked in, then narrow a temporary build without copying it.

```sh
pnpm exec typed-openapi --endpoint '^GET /public' --output src/api/public.ts
```

## JSON is supported too

Use JSON when TypeScript configuration is not desirable:

```json
{
  "input": "./openapi.yaml",
  "runtime": "valibot",
  "validation": "formats",
  "defaultFetcher": true,
  "coerce": true
}
```

The CLI auto-loads `typed-openapi.config.ts`, `.mts`, `.js`, `.mjs`, `.json`, `.typed-openapi.json`, or `typed-openapi.json` from the current working directory. Pass `--config ./path/to/config.ts` to select another file.

## Use it from a monorepo or CI

Run the command from the package that owns the config, or point to it explicitly. CLI flags still override the checked-in defaults, so the same config can generate a focused client for a one-off job.

```sh
# Run from the package that owns typed-openapi.config.ts.
pnpm --dir packages/web exec typed-openapi

# Or keep the current directory and select the config explicitly.
pnpm exec typed-openapi --config packages/web/typed-openapi.config.ts
```

## Fine-tune validation policy

Use a named preset for most projects. A policy object is available when a spec needs a deliberate exception:

```ts
export default defineConfig({
  input: "./openapi.yaml",
  runtime: "zod",
  validation: {
    preset: "strict",
    numberConstraints: false,
  },
});
```

The `clientPath` is resolved from the generated output. Keep it relative and checked in alongside the main file so imports remain stable when the project moves.

See [validation depth and transforms](/validation/input-output/) for the behavior behind these settings.

## Name the generated fetcher artifacts

`defaultFetcher` can be a simple boolean or a small object when an application has its own file and environment conventions.

```ts
export default defineConfig({
  input: "./openapi.yaml",
  output: "./src/api/openapi.ts",
  defaultFetcher: {
    clientPath: "./openapi.ts",
    envApiBaseUrl: "VITE_API_URL",
    fetcherName: "fetchApi",
    apiName: "api",
  },
});
```
