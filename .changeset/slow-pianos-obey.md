---
"typed-openapi": minor
---

feat: allow specifying overrides on any request
fix: infer/narrow response with multiple json media types
fix: properly handle mutation errors while retaining genericity on output based on mutationFn withResponse: true/false
feat: decodePathParams/encodeSearchParams/parseResponseData
feat: allow passing overrides/withResponse even if there's no endpoint parameters
