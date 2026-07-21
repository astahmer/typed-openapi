# low: effect3 tstyche suites skip param-bag inference by design — track explicitly

- **status:** open
- **revision:** qwtlwsnm (`test: generate MSW-parity tstyche suites per runtime`)
- **resolved_by:**
- **paths:** `packages/typed-openapi/scripts/gen-tstyche-suites.ts`,
  `packages/typed-openapi/tests/tstyche/runtimes/effect3.types.tstyche.ts`,
  `packages/typed-openapi/tests/tstyche/effect-client/effect3.types.tstyche.ts`

## Comment

Generated effect3 suites are intentionally “light” because deep `InferSchemaInput` on endpoint parameters triggers
TS2589. They cover exports, status tables, and response shapes but **not** MSW-parity param typing (path/query/body
bags, `ApiCallParams`, TanStack wrappers) that full zod/effect suites assert.

That is a reasonable tradeoff, but it leaves `@effect/schema` (`effect3` runtime) with weaker regression signal than
other runtimes for the typed-params work in `uzzlrmsu`. Consider a FOLLOWUPS item or a single focused hand-written
tstyche file for one endpoint (similar to docker-archive) once TS2589 mitigation lands.

## Evidence

```ts
// gen-tstyche-suites.ts
// effect3: avoid deep InferSchemaInput on Parameters (TS2589); keep response + export coverage.
if (runtime === "effect3") {
  /* ~40 lines vs ~280 for zod */
}
```

`gen-tstyche-suites.test.ts` notes “except light effect3” for MSW-parity needles — effect3 promise suite omits
`withResponse`, `TanstackQueryApiClient`, `findByTags`, etc.
