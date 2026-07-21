# Review: `wrlxtsrx` — feat(msw)

**Change:** `feat(msw): generate MSW handlers and mock factories`

**Files:** `msw.generator.ts`, CLI/wiring, unit + e2e tests

---

## Summary

Emits `handlers` + per-endpoint `get…Mock()` factories from success responses (examples → defaults → schema stubs).
Optional faker markers + `mswBaseUrl`. Solid MVP for local mocks.

---

## Comments

### MSW-1 · medium · `$ref` stubs are empty placeholders

**File:** `msw.generator.ts` `stubFromSchema` `case "ref"` (~L117–118) + `jsLiteral` (~L143–146)

Refs become `{ /* $ref: Name */ }` / `{ __ref: name }` → useless JSON bodies for most real specs
(Petstore arrays of `$ref: Pet`).

`generateMswFile` accepts `doc` but **never uses it** to resolve `components.schemas`. Wire ref resolution
(or drop the unused `doc` param until then).

**Status:** open

---

### MSW-2 · low · `void factoryNames` leftover

**File:** `msw.generator.ts` (~L229)

`factoryNames` is collected then discarded. Remove or use (e.g. export a map).

**Status:** open

---

### MSW-3 · low · default `baseUrl: "*"` path joining

**File:** `msw.generator.ts` (~L199–221)

`` `${baseUrl}${mswPath}` `` with default `"*"` yields `*/pet/:petId`. This works for MSW path wildcards but is
easy to misconfigure (trailing slash / missing origin). Document + maybe normalize (`*` vs full URL).

**Status:** open (docs / DX)

---

### MSW-4 · test gap · stub / example / SSE / faker literal paths under-tested

Unit tests cover path convert + simple stubs + petstore smoke. Missing coverage for:

- object / array / union / intersection / enum / tuple stubs
- `exampleFromOperation` preference over schema stub
- SSE handler branch
- faker markers rewritten to `faker.*` in emitted source
- `pickSuccessStatus` (200 vs other 2xx vs none)

**Status:** open → addressed by follow-up tests (coverage)

---

### MSW-5 · suggestion · no override / error handlers

Handlers always return one success stub. No hook to override per-test or emit 4xx. Fine for v1; note in docs.

**Status:** open (enhancement)

---

## Later revisions

`wqrtlnum` only reformatted comments in this file — **no MSW-* resolved**.

---

## Verdict

Approve with follow-up on **MSW-1** (ref resolution or drop unused `doc`).
