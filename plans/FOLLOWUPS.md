# typed-openapi follow-ups

Notes for later work — not blocking the current feature set.

## Stale GitHub issue triage

Regression tests: `packages/typed-openapi/tests/github-issues.regression.test.ts`.

**Do not comment on GitHub until shipping.** Close via PR description keywords (changesets are changelog-only — GitHub
does **not** auto-close from `.changeset/*.md`).

Suggested PR description block when ready:

```md
Closes #93 Closes #29 Closes #26 Closes #61 Closes #32 Closes #27 Closes #18 Closes #121 Closes #34 Closes #46 Closes
#91

#114 and #62 closed as not planned (obsolete / out of scope).
```

| Issue | Title                                           | Status                                                             |
| ----- | ----------------------------------------------- | ------------------------------------------------------------------ |
| #93   | Support Zod V4                                  | **Fixed** — `--runtime zod` emits `z.record(key, value)`           |
| #29   | Runtime validations not parsing response        | **Fixed** — `--validate-side` + client `runValidate` on output     |
| #26   | Multi-file OpenAPI specs                        | **Fixed** — CLI/`generateClientFiles` uses `SwaggerParser.bundle`  |
| #61   | `@` in property key syntax error                | **Fixed** — `objectKey` quotes non-identifiers                     |
| #114  | No infer UParams with Typebox                   | **Closed (not planned)** — typebox adapter dropped; `test.todo`    |
| #32   | Partial query params aren't optional            | **Fixed** — optional param groups (`query?:`) + InferSchemaInput   |
| #27   | nested definitions `normalized` crash           | **Fixed** — ref-resolver registers `#/definitions/*`               |
| #18   | Unsupported schema type: fhirprimitiveextension | **Fixed** — exotic types → `unknown` (no throw)                    |
| #62   | Export Typia types                              | **Closed (not planned)** — no typia adapter; `test.todo`           |
| #121  | Coercing number/boolean for Zod                 | **Fixed** — `--coerce` / `--no-coerce`                             |
| #34   | Default values from schema                      | **Fixed** — runtime `.default` / equivalents                       |
| #46   | Cookie parameter support                        | **Fixed**                                                          |
| #91   | Do not rely on DOM `Response`                   | **Fixed** — `FetcherResponse` interface                            |

## Streaming / SSE / multipart upload DX (design notes)

Keep the **single-file client** non-goal; extend the fetcher/requestFormat surface instead of inventing a second client.

### Multipart / form-data uploads

- **Done (default fetcher):** `Fetcher.fetch` receives `requestFormat`; `--default-fetcher` encodes `form-data` →
  `FormData`, `form-url` → `URLSearchParams`, `binary` → raw body, `text` / `json` as before. Client emits
  `endpointRequestFormats` (non-json overrides only; default `"json"`).
- **Done (docs):** README “Fetcher `requestFormat` contract”.
- Still open:
  - Types: file parts stay `string` / `Blob` via OAS `format: binary` → IR string/unknown (improve later with a
    dedicated `binary` SchemaNode if needed).

### SSE / streaming responses

- OAS often models SSE as `text/event-stream` or omits JSON content — we currently only treat JSON (`*/*` +
  `application/*json*`) as typed response bodies.
- Direction (opt-in, not default):
  - Recognize `text/event-stream` → `requestFormat`/`responseFormat: "sse"` (or keep response as `ReadableStream` /
    `AsyncIterable<string>`).
  - Do **not** run Zod/effect parse on the whole stream; optional per-event schema via `onValidate` / custom
    `parseResponseData`.
  - TanStack Query: streaming is a poor fit for `useQuery` data; prefer raw client / `useMutation` + reader.
- Non-goal: full EventSource codegen or OpenAPI callback/webhook clients.

### Suggested order when picking this up

1. ~~Default-fetcher `FormData` + binary body~~ (done).
2. ~~Document fetcher contract for `requestFormat`~~ (done).
3. SSE as typed `ReadableStream` + skip output validation (only if someone asks).
