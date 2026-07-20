# typed-openapi follow-ups

Notes for later work — not blocking the current feature set.

## Stale GitHub issue triage

Regression tests: `packages/typed-openapi/tests/github-issues.regression.test.ts`.

**Do not comment on GitHub until shipping.** Close via PR description keywords (changesets are
changelog-only — GitHub does **not** auto-close from `.changeset/*.md`).

Suggested PR description block when ready:

```md
Closes #93
Closes #29
Closes #26
Closes #61
Closes #32
Closes #27
Closes #18
Closes #121
Closes #34
Closes #46
Closes #91
Closes #114
Closes #62
```

| Issue | Title                                           | Status                                                            |
| ----- | ----------------------------------------------- | ----------------------------------------------------------------- |
| #93   | Support Zod V4                                  | **Fixed** — `--runtime zod`                                       |
| #29   | Runtime validations not parsing response        | **Fixed** — `--validate-side` + client hooks                      |
| #26   | Multi-file OpenAPI specs                        | **Fixed** — `SwaggerParser.bundle`                                |
| #61   | `@` in property key syntax error                | **Fixed** — `objectKey` quoting                                   |
| #114  | No infer UParams with Typebox                   | **Fixed** — `--runtime typebox` + `InferSchemaInput`              |
| #32   | Partial query params aren't optional            | **Fixed** — optional param groups                                 |
| #27   | nested definitions `normalized` crash           | **Fixed** — `#/definitions/*` refs                                |
| #18   | Unsupported schema type: fhirprimitiveextension | **Fixed** — exotic → `unknown`                                    |
| #62   | Export Typia types                              | **Fixed** — `--runtime typia` (createIs/Assert/Validate)          |
| #121  | Coercing number/boolean for Zod                 | **Fixed** — `--coerce` / `--no-coerce`                            |
| #34   | Default values from schema                      | **Fixed**                                                         |
| #46   | Cookie parameter support                        | **Fixed**                                                         |
| #91   | Do not rely on DOM `Response`                   | **Fixed** — `FetcherResponse`                                     |

## Streaming / SSE / multipart upload DX

Keep the **single-file client** non-goal; extend the fetcher/requestFormat surface instead of inventing a second client.

### Multipart / form-data uploads

- **Done (default fetcher):** `Fetcher.fetch` receives `requestFormat`; encodes form-data / form-url / binary / text.
- **Done (types):** OAS `format: binary|byte` → IR `kind: "binary"` → TypeScript `Blob`.

### SSE / streaming responses

- **Done:** `text/event-stream` → `responseFormat: "sse"`, response typed as `ReadableStream<Uint8Array>`, sparse
  `endpointResponseFormats`, skip output validation, parse via `response.body`.
- Non-goal: full EventSource codegen or OpenAPI callback/webhook clients.
- TanStack Query: streaming still a poor fit for `useQuery` data; prefer raw client / mutation + reader.
