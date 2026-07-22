---
title: Configuration
description: Keep generation options typed, reviewable, and repeatable.
sidebar:
  order: 2
---

Put stable generation settings in `typed-openapi.config.ts`. `defineConfig()` gives editor completion and checks the configuration shape.

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
