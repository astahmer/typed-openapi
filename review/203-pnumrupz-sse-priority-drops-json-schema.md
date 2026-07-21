# low: SSE media type branch skips co-declared JSON response schemas

- **status:** open
- **revision:** pnumrupz (`feat: SSE responseFormat with stream SchemaNode`)
- **resolved_by:**
- **paths:** `packages/typed-openapi/src/map-openapi-endpoints.ts`

## Comment

For each response status, if **any** `text/event-stream` media type is present, mapping sets `responseFormat: "sse"` and
assigns a `stream` SchemaNode — the `else if` branch that merges JSON (and other) content types is skipped entirely.

OpenAPI allows multiple content entries per status (e.g. `application/json` + `text/event-stream` for content
negotiation). Those specs lose JSON IR/types/runtime schemas for that status; only `ReadableStream` remains.

Runtime/client behavior (return `response.body`, skip output validation) is consistent with SSE-first choice, but type
fidelity for the JSON variant is wrong.

**Fix:** When both SSE and JSON exist, either merge union members (`stream | JsonSchema`) or pick format via `Accept` /
document single-format-only support.

## Evidence

```145:155:packages/typed-openapi/src/map-openapi-endpoints.ts
        const sseMedia = mediaTypes.find(isSseMediaType);
        if (sseMedia) {
          endpoint.responseFormat = "sse";
          const streamNode: SchemaNode = { kind: "stream", meta: emptyMeta() };
          allResponses[status] = mergeUnion(allResponses[status], streamNode);
        } else if (content && mediaTypes.length) {
          mediaTypes.forEach((mediaType) => {
            const schema = content[mediaType] ? (content[mediaType].schema ?? {}) : {};
            const node = stripReadWrite(openApiToIr(schema, irCtx), "response");
            allResponses[status] = mergeUnion(allResponses[status], node);
```
