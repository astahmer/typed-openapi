# low: `effect-msw.test.ts` not covered by CI `tsconfig.ci.json`

- **status:** open
- **revision:** rznmotnz (`test: add EffectApiClient MSW integration suite`)
- **resolved_by:**
- **paths:** `packages/typed-openapi/tsconfig.ci.json`, `packages/typed-openapi/tests/integrations/effect-msw.test.ts`

## Comment

The new Effect MSW suite imports a generated fixture at `tmp/tstyche/effect-client/none/client.ts` (produced by
`gen:tstyche-fixtures`). It is exercised at runtime via `test:runtime:run` inside `test:all`, but it is **not** in
`tsconfig.ci.json`'s `include` list (only `runtime-msw.test.ts` is).

Even after fixing fixture ordering (see #300), Effect-client integration will still lack the same compile-time gate the
promise MSW test gets. Consider adding `tests/integrations/effect-msw.test.ts` to `tsconfig.ci.json` once
`gen:tstyche-fixtures` runs before CI tsc, or folding both MSW tests into a shared integration tsconfig project.

## Evidence

```json
// tsconfig.ci.json — only promise MSW
"include": ["tmp/*", "tests/integrations/runtime-msw.test.ts"]
```

```ts
// effect-msw.test.ts
import { createEffectApiClient, ... } from "../../tmp/tstyche/effect-client/none/client.ts";
```

`package.json` runs both via `test:runtime:run` but CI tsc project does not typecheck the effect file.
