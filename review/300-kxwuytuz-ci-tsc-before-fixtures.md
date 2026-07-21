# high: CI `tsc -b tsconfig.ci.json` runs before fixture generation

- **status:** open
- **revision:** kxwuytuz (`fix: keep package tsc lean and CI unit scoped`)
- **resolved_by:**
- **paths:** `.github/workflows/build-and-test.yaml`, `packages/typed-openapi/tsconfig.ci.json`,
  `packages/typed-openapi/tests/integrations/runtime-msw.test.ts`

## Comment

The workflow step **“Type check generated client and integration test”** runs `tsc -b ./tsconfig.ci.json` immediately
after `pnpm build`, but `test:all` (which calls `gen:fixtures` → `gen:runtime`) runs **later**. `tsconfig.ci.json`
includes `tmp/*` and `tests/integrations/runtime-msw.test.ts`, and that test imports `../../tmp/generated-client.ts` and
`../../tmp/generated-tanstack.ts`. `tmp/` is gitignored, so a fresh checkout has no generated files at the CI tsc step.

Unless something else generates `tmp/` before this step (build does not), the job should fail with unresolved-module
errors on every clean run.

**Fix options:** run `pnpm --filter typed-openapi run gen:runtime` (or `gen:fixtures`) before the CI tsc step; or drop
integration tests from `tsconfig.ci.json` and rely on the later `test:all` wave for compile coverage of generated
clients.

## Evidence

```yaml
# .github/workflows/build-and-test.yaml (ordering)
- run: pnpm build
- run: pnpm --filter typed-openapi exec tsc -b ./tsconfig.ci.json
- run: pnpm --filter typed-openapi test:all # gen:fixtures is step 1 inside test-all.mjs
```

```json
// packages/typed-openapi/tsconfig.ci.json
"include": ["tmp/*", "tests/integrations/runtime-msw.test.ts"]
```

```ts
// packages/typed-openapi/tests/integrations/runtime-msw.test.ts
import { createApiClient, TypedStatusError } from "../../tmp/generated-client.ts";
import { TanstackQueryApiClient } from "../../tmp/generated-tanstack.ts";
```

`.gitignore` lists `tmp`.
