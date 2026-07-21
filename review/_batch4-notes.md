# Batch 4 review notes (uzzlrmsu → ltuzzrus)

**Revisions:** 12 · **Open findings:** 5 (#300–#304) · **Prior open issues resolved:** none (no pre-existing `review/`
files)

## High signal

| Area                                                          | Verdict                                                                                                                                                                                                      |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **EffectApiClient errors + typed params** (`uzzlrmsu`)        | Solid. Error channel narrowed to `TypedStatusError \| HttpClientError` with runtime remap; request methods use `ApiCallParams<TEndpoint>`. Changeset documents breaking parse-error union change.            |
| **Inference perf** (`msqwsqqr`, `omswnwmv`)                   | `OptionalUndefinedKeys` hoisted once; overload order tweak; attest bench + `infer-bench.ts` harness. Large snapshot regen is mechanical.                                                                     |
| **CI tsc lean** (`kxwuytuz`)                                  | Good split: main `tsconfig.json` excludes attest/tstyche; `tsconfig.attest.json` isolates heavy type tests. **But** workflow still typechecks MSW integration before `gen:runtime` (#300).                   |
| **Tanstack `ApiCallParams`** (`urusypnn`)                     | Correct fix — query helpers and mutations now share the same param bag as promise/effect clients.                                                                                                            |
| **tstyche / MSW parity** (`vrkwnuyy`, `qwtlwsnm`, `rznmotnz`) | Strong coverage expansion: generated per-runtime suites, sync guard test, Effect MSW mirror of promise MSW. Minor gaps: effect3 param depth (#304), docker-archive unguarded (#303), abort assertion (#302). |
| **Test layout + docs** (`nzwxolro`, `ltuzzrus`)               | `tests/integrations/` + `tests/github-issues/` nest is clean; README/changesets/FOLLOWUPS align with shipping narrative.                                                                                     |

## Revisions skimmed (no issues filed)

- `kyrsunzo`, `wtpywply` — snapshot-only regens for error remap / inference helpers.
- `ltuzzrus` — docs/changesets only.

## Recommended before merge

1. Fix CI fixture ordering (#300) — highest priority.
2. Tighten `effect-msw` abort assertion (#302) — quick win.
3. Optional: extend CI tsc include for effect MSW (#301); guard or generate docker-archive tstyche (#303).
