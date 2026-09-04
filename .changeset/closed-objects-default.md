---
"typed-openapi": major
---

Treat omitted `additionalProperties` as `false` so generated objects stay closed. This is a breaking change on 4.x:
Zod/Valibot/TypeBox no longer accept extra keys, and TypeScript `Pet` no longer includes `& Record<string, unknown>`.

`allOf` of two closed objects now composes (Docker `HostConfig`) instead of rejecting sibling keys. Opt into OpenAPI's
open-object default with `openapi.additionalPropertiesDefault` / `--openapi-additional-properties-default`.
