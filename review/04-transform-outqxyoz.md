# Review: `outqxyoz` — feat(transform)

**Change:** `feat(transform): date-time/date → Date and int64 → bigint`

**Files:** IR → TS, generator revive helper, zod/zod3/valibot/arktype/effect/effect3 emitters, tests

---

## Summary

Flags `--transform-dates` / `--transform-bigint` flow through config → generator → runtime adapters.
`none` runtime gets a heuristic `__reviveDates` on JSON parse. Core zod/valibot paths look correct.

---

## Comments

### XF-1 · high · `none` + `transformBigInt` types lie at runtime

**File:** `generator.ts` revive block (~L655–775), `ir-to-ts.ts`

With `transformBigInt: true` and `runtime: "none"`:

- TS types become `bigint`
- `JSON.parse` still yields `number` (or string) — **no bigint revive**
- Values `> Number.MAX_SAFE_INTEGER` are already corrupted before the client sees them

Either add a schema-aware revive, document that bigint transform requires a runtime validator, or refuse the
combo.

**Status:** open

---

### XF-2 · medium · `__reviveDates` is heuristic (false positives)

**File:** `generator.ts` (~L658–670)

Any string matching a loose ISO regex becomes a `Date`, including fields that are intentionally strings
(IDs, labels like `"2020-01-01"`). Schema-aware revive would be safer; at minimum document the heuristic.

**Status:** open

---

### XF-3 · medium · typebox / typia ignore transform flags

Adapters under `runtimes/typebox` and `runtimes/typia` do not consult `ctx.transformDates` /
`ctx.transformBigInt`. Types may say `Date`/`bigint` (via `irToTs`) while runtime schemas stay strings/numbers.

**Status:** open

---

### XF-4 · low · invalid date strings become Invalid Date

Zod/valibot/arktype transforms use `new Date(s)` without `Number.isNaN` guards (unlike `__reviveDates`).
Bad input yields `Invalid Date` instead of a parse error.

**Status:** open

---

### XF-5 · test gap · multi-runtime parse coverage thin

Unit/e2e cover zod (+ revive helper copy). Missing runtime parse smoke for arktype / valibot bigint /
effect / effect3 / zod3 / `format: date` (date-only).

**Status:** open → addressed by follow-up tests (coverage)

---

## Later revisions

`wqrtlnum` only formatting in emitters — **XF-\* unresolved**. Snapshot refresh does not fix semantics.

---

## Verdict

Approve for zod/valibot-first use. Block advertising `none`+bigint (**XF-1**) and typebox/typia transforms
(**XF-3**) until fixed or documented as unsupported.
