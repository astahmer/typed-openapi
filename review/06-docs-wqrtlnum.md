# Review: `wqrtlnum` — docs+test

**Change:** `docs+test: README/changeset for new features; refresh snapshots; kombo TS2322 filter`

**Files:** README, changeset, snapshots, minor formatting, typecheck filter

---

## Summary

Documents the five feature commits, refreshes runtime snapshots, tweaks typia import assertion, and widens Kombo
typecheck allowlist with `TS2322`.

---

## Comments

### DOC-1 · medium · broad `TS2322` filter may hide real regressions

**File:** `packages/typed-openapi/tests/snapshots-typecheck.test.ts`

Filtering **all** `TS2322` lines (justified as ArkType/Kombo noise) is wide. Prefer scoping to Kombo + arktype only
(sample/runtime gate), not every snapshot.

**Status:** open

---

### DOC-2 · low · README config example omits caveats

README shows `typed-openapi.config.ts` + `defineConfig` but does not mention:

- `tsx` requirement for TS configs (see CFG-1)
- unused `input` key
- `none`+bigint / typebox transform limits (XF-1, XF-3)
- `queryKeyFactory.all` not hierarchical (TS-1)

**Status:** open

---

### DOC-3 · resolved? · snapshot / parse-path refresh

Snapshot + `map-openapi-endpoints` expectation updates (int64 format on path params) look like legitimate regenerations
after IR/format plumbing — not a defect by themselves.

**Status:** resolved (expected churn)

---

## Cross-rev resolution check

This rev does **not** resolve open items from prior feature reviews (TS-_, MSW-_, AUTH-_, XF-_, CFG-*). Formatting-only
touchups on generators do not change behavior.

---

## Verdict

Docs are helpful. Tighten **DOC-1** filter scope; fold caveats into README or leave tracked via conclusion.
