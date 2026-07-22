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
  tanstack: "query.ts",
  msw: "msw.ts",
  transformDates: true,
  format: true,
});
```

Now one short command regenerates every configured output:

```sh
pnpm exec typed-openapi
```

Treat the OpenAPI file, config, and generated TypeScript as one reviewed change. That makes API drift visible in a normal pull request instead of at runtime.

## Override one setting from CI or a script

CLI flags win over config values. Keep the shared config checked in, then narrow a temporary build without copying it.

```sh
pnpm exec typed-openapi --endpoint '^/public(?:/|$)' --output src/api/public.ts
```

For a checked-in, domain-specific client, use `endpointPatterns` in the config. See [filter endpoints and schemas](/advanced/filtering-and-schema-naming/) for a complete catalog-client example.

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
  validation: { preset: "strict", stringConstraints: false, numberConstraints: false },
});
```

See [validation depth and transforms](/validation/input-output/) for every policy field and preset default.

## Configure the generated fetcher

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

| Field | What it changes |
| --- | --- |
| `clientPath` | The import specifier written into the generated fetcher. It is emitted verbatim; make it correct from the fetcher file. |
| `envApiBaseUrl` | The `globalThis.process?.env` key used by the generated default client. It does not read Vite or other bundler env objects. |
| `fetcherName` | The exported fetch function name. |
| `apiName` | The default exported client name and `create…()` factory name. |

In a browser app, do not edit generated code or expect `envApiBaseUrl` to read `import.meta.env`. Create a client with the bundler value instead:

```ts
import { createApi } from "./api/api.client";

export const api = createApi(import.meta.env.VITE_API_URL);
```

## Companion output paths

`tanstack`, `msw`, and a string `defaultFetcher` output name are resolved relative to the main `output` file's directory. With `output: "./src/api/openapi.ts"`, use `"query.ts"` for `src/api/query.ts` or `"../mocks/handlers.ts"` for `src/mocks/handlers.ts`—not `"./src/api/query.ts"`.
