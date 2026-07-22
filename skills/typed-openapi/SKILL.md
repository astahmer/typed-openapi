---
name: typed-openapi
description: Generate and integrate typed OpenAPI clients in this repository. Use when changing OpenAPI generation, generated API clients, runtime validation, the default fetcher, TanStack Query output, or MSW output.
---

# typed-openapi

## Rules

- Inspect the OpenAPI document, `typed-openapi.config.*`, and existing generated files before changing anything.
- Do not hand-write endpoint types or edit generated output as the primary change. Change the spec or configuration, then regenerate.
- Use types-only output by default. Add a runtime only when the consuming app already uses it or needs runtime boundary checks.
- Treat `--default-fetcher` as generated transport code. Read it before choosing it. Keep an app's existing transport when it already owns retry, auth, tracing, or environment-specific configuration.
- Generate TanStack Query and MSW companions only in packages that use those libraries.

## Standard flow

1. Find the root OpenAPI YAML/JSON document and the relevant package.
2. Inspect `typed-openapi.config.ts` (or the explicit CLI invocation) and generated output paths.
3. Choose options that match existing dependencies and transport policy.
4. Show the proposed config and command before writing files.
5. Regenerate. Do not patch generated files to make the output compile.
6. Run the package typecheck and focused tests. Report generated file paths, required dependencies, and gaps in the input specification.

## Default fetcher facts

`--default-fetcher` writes a second TypeScript file. It replaces path parameters before the fetcher runs, serializes query parameters, adds OpenAPI cookie/header parameters, encodes the request body from `requestFormat`, forwards request overrides, and returns the native `Response`. It exports `createApi(baseUrl)` so browser applications can provide their bundler-specific URL without editing generated code.

The generated file reads `globalThis.process?.env?.API_BASE_URL` by default and falls back to `https://api.example.com`. If OpenAPI defines `securitySchemes`, call `configureFetcher({ getAuth })` before the first request. Verify every operation's `security` requirements: the fetcher selects only the first satisfied requirement and sends no credentials to operations that declare none. Confirm query API keys survive alongside ordinary query parameters with a focused test.

## Useful docs

- `docs/src/content/docs/getting-started.md`
- `docs/src/content/docs/clients/promise-client.md`
- `docs/src/content/docs/clients/requests-auth-and-bodies.md`
- `docs/src/content/docs/validation/runtimes.md`
- `docs/src/content/docs/integrations/tanstack-query.md`
- `docs/src/content/docs/integrations/msw.md`
