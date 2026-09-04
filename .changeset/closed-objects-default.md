---
"typed-openapi": minor
---

Treat omitted `additionalProperties` as `false` so generated objects stay closed. Opt into OpenAPI's open-object default
with `openapi.additionalPropertiesDefault` / `--openapi-additional-properties-default`.

`allOf` of two closed objects now composes (Docker `HostConfig`) instead of rejecting sibling keys.
