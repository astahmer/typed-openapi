# medium: default fetcher cookie/header paths lack runtime object guards

- **status:** open
- **revision:** xtxwnkqz (`feat: effect-aware default fetcher with cookie header support`)
- **resolved_by:**
- **paths:** packages/typed-openapi/src/default-fetcher.generator.ts

## Comment

The generated default fetcher calls `Object.entries` on `input.parameters.cookie` and `input.parameters.header` without
checking that the value is a plain object. A malformed runtime value (string, array, etc.) throws before fetch runs. The
inline defaults added in `ooukupqz` for the generated client (`defaultEncodeCookies`, `encodeSearchParams`) explicitly
guard with `typeof … === "object"`, but the default fetcher template was never brought in line.

## Evidence

Current default fetcher template (unchanged through `yxqyrpmm`):

```ts
if (input.parameters?.cookie) {
  const parts = Object.entries(input.parameters.cookie)
```

```ts
if (input.parameters?.header) {
  Object.entries(input.parameters.header).forEach(([key, value]) => {
```

Generated client default from `ooukupqz` / `generator.ts`:

```ts
defaultEncodeCookies = (cookies: unknown, headers: Headers): void => {
  if (!cookies || typeof cookies !== "object") return;
```

Same pattern in `effect-api-client.ts` default `encodeCookies` / `encodeSearchParams` helpers.
