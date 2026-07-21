# medium: default fetcher ignored requestFormat until next revision

- **status:** resolved
- **revision:** pntqwtvu (`feat: pass requestFormat into Fetcher.fetch`)
- **resolved_by:** nyvnvqtr
- **paths:** packages/typed-openapi/src/generator.ts, packages/typed-openapi/src/effect-api-client.ts,
  packages/typed-openapi/src/default-fetcher.generator.ts

## Comment

`pntqwtvu` threads `requestFormat` through generated `ApiClient` / `EffectApiClient` fetch calls, but the
`--default-fetcher` template still always `JSON.stringify`’d mutation bodies. Specs with `multipart/form-data`,
`application/x-www-form-urlencoded`, `application/octet-stream`, or `text/*` request bodies would still be sent as JSON
until the default fetcher was updated.

## Evidence

`pntqwtvu` adds `requestFormat: endpointRequestFormats[method][path]` to client fetch inputs in `generator.ts` /
`effect-api-client.ts`, while `default-fetcher.generator.ts` at that revision still contained:

```ts
const body = ["post", "put", "patch", "delete"].includes(input.method.toLowerCase())
  ? JSON.stringify(input.parameters?.body)
  : undefined;
```

`nyvnvqtr` introduces `encode-request-body.ts`, inlines it into the default fetcher, and switches body encoding to
`encodeRequestBody(input.requestFormat, input.parameters?.body)`.
