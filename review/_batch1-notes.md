# Batch 1 review notes (lpxutqwu → qmktrxkq)

Reviewed source under `packages/typed-openapi/src` via `rtk jj diff -r <id> --summary` + targeted diffs. Skipped
snapshot/regen noise unless needed for a finding.

## Reviewed (substantive)

| change_id | description                                           | notes                                                                        |
| --------- | ----------------------------------------------------- | ---------------------------------------------------------------------------- |
| lpxutqwu  | plan effect runtime                                   | plan doc only; no code findings                                              |
| qxxuskmr  | better runtime generation                             | Schema IR + runtime adapters foundation; reviewed via downstream revisions   |
| rmvxlowz  | fix(effect): Schema.pipe refinements                  | bugfix; no new issues filed                                                  |
| rqwqyvkq  | test: typecheck generated schemas per runtime         | tests only                                                                   |
| ysozprkx  | test: runtime parse smoke                             | tests only                                                                   |
| tlppolpu  | test: recursive schema lazy/suspend round-trips       | tests only                                                                   |
| qysrlqyv  | emit types-only client from Schema IR                 | refactor; covered by generator review                                        |
| vtlrntno  | deep-infer runtime schema values in ApiClient         | infer helper refactor; OK                                                    |
| lopzyorr  | monaco ExtraLibs for effect / effect3                 | web/playground; out of src scope                                             |
| pwlxvxuk  | uniqueItems + min/maxProperties refinements           | constraint emit; OK                                                          |
| tqsykwzn  | not, discriminator, contentEncoding in IR             | **004** arktype `not` gap                                                    |
| xwrprpvt  | boxToIr walk structure first; tighten IR Partial emit | bugfix; resolved ordering issue                                              |
| kwwqxynx  | only attach OAS schema to matching keyword boxes      | bugfix                                                                       |
| szwuynpu  | fix(effect3): adapter fidelity                        | bugfix                                                                       |
| lsskzutt  | fix(effect): Schema.Record emit                       | bugfix                                                                       |
| myksuouu  | fix(arktype): Record index + number bounds            | bugfix                                                                       |
| urrymrxx  | fix(arktype): single-bound numbers                    | bugfix                                                                       |
| pvuzknvz  | arktype type.module for recursive schemas             | emit fix; OK                                                                 |
| zzwrtxyo  | honor discriminator.mapping in zod/zod3               | **005** mapping parity gap                                                   |
| mkpyxxzv  | typed-openapi config file                             | **001** CLI default overwrite                                                |
| xwxmzkwu  | map endpoints via Schema IR                           | major refactor; no separate finding (tests cover)                            |
| yzoxwprl  | remove Box IR bridge                                  | **006** undocumented breaking exports                                        |
| zkklvsts  | endpoint/schema filters + tree-shaking                | **002**, **003**                                                             |
| yyzumpto  | schemaNaming prefer-inline                            | recursive guard + tests look sound                                           |
| rkonmtkk  | validateSide + Effect-native ApiClient                | reviewed; output validation skips non-2xx by design (same as promise client) |
| qmktrxkq  | docs: client, validate-side, filter CLI flags         | docs/changeset only                                                          |

## Skipped (noise-only)

| change_id | description                                   | reason                        |
| --------- | --------------------------------------------- | ----------------------------- |
| oypnprro  | pin deps to latest exact versions             | lockfile/package.json only    |
| ttxwyzok  | drop yup/io-ts/typebox monaco libs; regen dts | generated monaco `.dts` regen |
| lpkxoqml  | CHANGELOG 3.0.0 + peer matrix                 | docs (referenced for **006**) |
| rnwkrmuo  | tsc-audit petstore/docker schemas per runtime | test harness / snapshots      |

## Findings index

- 001 — mkpyxxzv — config CLI defaults overwrite
- 002 — zkklvsts — tree-shake misses `not` refs
- 003 — zkklvsts — invalid filter regex crash
- 004 — tqsykwzn — arktype `not` → unknown
- 005 — zzwrtxyo — discriminator.mapping zod-only
- 006 — yzoxwprl — breaking exports undocumented
