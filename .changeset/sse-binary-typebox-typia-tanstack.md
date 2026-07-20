---
"typed-openapi": minor
---

SSE responses, binary SchemaNode, typebox/typia adapters, TanStack+Effect.

- Recognize `text/event-stream` → `responseFormat: "sse"` (`ReadableStream`, skip output validation)
- OAS `format: binary|byte` → IR `binary` typed as `Blob`
- Re-add `--runtime typebox` and `--runtime typia`
- TanStack Query wrappers call `Effect.runPromise` when `--client effect`
- Sync API_CLIENT_EXAMPLES with requestFormat / cookies / SSE
