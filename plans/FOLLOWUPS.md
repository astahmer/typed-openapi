# typed-openapi follow-ups

Notes for later work — not blocking the current feature set.

## Stale GitHub issue triage

Confirm fixed / close / comment with current status (do in a dedicated pass):

| Issue | Title                                           | Likely status after v3                                                        |
| ----- | ----------------------------------------------- | ----------------------------------------------------------------------------- |
| #93   | Support Zod V4                                  | **Done** (`--runtime zod`)                                                    |
| #29   | Runtime validations not parsing response        | **Done** (`--validate-side` + client hooks)                                   |
| #26   | Multi-file OpenAPI specs                        | **Likely done** (`SwaggerParser.bundle`) — verify with sample                 |
| #61   | `@` in property key syntax error                | **Likely done** (`objectKey` quoting) — verify playground link                |
| #114  | No infer UParams with Typebox                   | **Obsolete** (typebox adapter dropped; re-add via adapter contract if needed) |
| #32   | Partial query params aren't optional            | Re-check against current `partial` object emit                                |
| #27   | nested definitions `normalized` crash           | Repro against current IR/ref-resolver                                         |
| #18   | Unsupported schema type: fhirprimitiveextension | Niche; decide keep-open vs wontfix                                            |
| #62   | Export Typia types                              | Out of scope unless someone wants a typia adapter                             |
| #121  | Coercing number/boolean for Zod                 | **Done** (`--coerce` / `--no-coerce`)                                         |
| #34   | Default values from schema                      | **Done** (runtime `.default` / equivalents)                                   |
| #46   | Cookie parameter support                        | **Done**                                                                      |
| #91   | Do not rely on DOM `Response`                   | **Done** (`FetcherResponse` interface)                                        |

## Streaming / SSE / multipart upload DX (design notes)

Keep the **single-file client** non-goal; extend the fetcher/requestFormat surface instead of inventing a second client.

### Multipart / form-data uploads

- **Done (default fetcher):** `Fetcher.fetch` receives `requestFormat`; `--default-fetcher` encodes `form-data` →
  `FormData`, `form-url` → `URLSearchParams`, `binary` → raw body, `text` / `json` as before. Client emits
  `endpointRequestFormats` so this works for `runtime: none` too.
- Still open:
  - Document fetcher contract for `requestFormat` in README (short section).
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
2. Document fetcher contract for `requestFormat`.
3. SSE as typed `ReadableStream` + skip output validation (only if someone asks).
