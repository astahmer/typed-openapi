# Review: `lmwyxumt` — feat(config)

**Change:** `feat(config): defineConfig + typed-openapi.config.ts loading`

**Files:** `config.ts`, CLI help text, exports, `config.test.ts`

---

## Summary

Expands config schema for new flags, adds `defineConfig`, loads TS/JS via `tsx/esm/api`, keeps JSON path.
Merge/defaults story looks careful (undefined CLI flags do not stomp file booleans).

---

## Comments

### CFG-1 · high · `tsx` is only a **devDependency**

**File:** `packages/typed-openapi/package.json`, `config.ts` `loadConfig`

Error hint says *"ensure tsx is available — it ships with typed-openapi"*, but `tsx` is **not** in
`dependencies` / `peerDependencies`. Published consumers loading `typed-openapi.config.ts` will fail unless
they happen to have `tsx` installed.

Fix: move `tsx` to `dependencies` (or optional peer + clearer error), and update the hint.

**Status:** open

---

### CFG-2 · medium · `input` in config schema is unused

**File:** `config.ts` (`"input?"`), `generate-client-files.ts` (~L130–131)

Comment says config may supply input, but `SwaggerParser.bundle(input)` always uses the CLI positional.
Either wire `merged.input` when CLI input is missing/placeholder, or remove `input` from the public schema
to avoid a footgun.

**Status:** open

---

### CFG-3 · low · CLI still requires `<input>` positional

Cannot run `typed-openapi` with config-only `input`. Related to CFG-2.

**Status:** open

---

### CFG-4 · test gap · generateClientFiles + config file integration

Unit tests cover load/merge/defineConfig well. Missing: end-to-end that a temp config enables
`--msw` / transforms / tanstack without CLI flags when calling `generateClientFiles`.

**Status:** resolved (`config-generate.integration.test.ts` covers flags + CFG-2 behavior)

---

### CFG-5 · low · dynamic import cache-bust `?t=`

**File:** `config.ts` (~L131)

Fine for CLI one-shots; slightly surprising if `loadConfig` is used in long-lived tooling. Acceptable.

**Status:** open (nit)

---

## Later revisions

`wqrtlnum` only formatting in `config.ts` — **CFG-\* unresolved**.

---

## Verdict

Approve JSON config path. Fix **CFG-1** before relying on TS config in published package docs.
