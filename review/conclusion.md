# PR review — `lpxutqwu` → `@-` (`ltuzzrus`)

Professional review of **93** jj revisions from `lpxutqwu` (`plan effect runtime`) through `ltuzzrus`
(`docs: refresh README/changesets and shipping PR notes`). Snapshot-only / lockfile / monaco `.dts` regenerations were
skipped unless they carried a real bug.

Per-finding notes live as `review/NNN-*.md`. Batch catalogs: `_batch1-notes.md` … `_batch4-notes.md`.

## Verdict

Ship-ready after addressing **CI / repo hygiene** blockers; several **runtime fidelity** gaps should be fixed or
explicitly documented before calling the matrix “complete.”

## Unresolved (must / should fix)

| Sev        | File                                                                                                           | One-liner                                                                                               |
| ---------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| **high**   | [200-vlskrmvv-npmrc-settings-wiped.md](./200-vlskrmvv-npmrc-settings-wiped.md)                                 | `.npmrc` reduced to `dedupe-peer-dependents=false`; lost `save-exact`, `auto-install-peers=false`, etc. |
| **high**   | [300-kxwuytuz-ci-tsc-before-fixtures.md](./300-kxwuytuz-ci-tsc-before-fixtures.md)                             | Workflow runs `tsc -b tsconfig.ci.json` before `gen:runtime`; `tmp/` gitignored → clean CI likely fails |
| **high**   | [001-mkpyxxzv-config-cli-defaults-overwrite.md](./001-mkpyxxzv-config-cli-defaults-overwrite.md)               | Config file booleans overwritten by cac defaults (`jsdoc`/`format`/`includeClient`/…)                   |
| **high**   | [002-zkklvsts-tree-shake-misses-not-refs.md](./002-zkklvsts-tree-shake-misses-not-refs.md)                     | Tree-shake transitive deps skip OAS `not` → dropped component schemas                                   |
| **medium** | [201-ntsnytlk-tanstack-effect-mutation-fake-status.md](./201-ntsnytlk-tanstack-effect-mutation-fake-status.md) | TanStack+Effect `withResponse` fakes `{ ok: true, status: 200 }`                                        |
| **medium** | [102-nyvnvqtr-binary-body-object-coercion.md](./102-nyvnvqtr-binary-body-object-coercion.md)                   | `encodeRequestBody("binary", plainObject)` → `"[object Object]"`                                        |
| **medium** | [101-xtxwnkqz-default-fetcher-param-guards.md](./101-xtxwnkqz-default-fetcher-param-guards.md)                 | Default fetcher `Object.entries` on cookie/header without object guard                                  |
| **medium** | [003-zkklvsts-invalid-filter-regex-crash.md](./003-zkklvsts-invalid-filter-regex-crash.md)                     | Bad `--endpoint`/`--schema` regex → raw `SyntaxError`                                                   |
| **medium** | [004-tqsykwzn-arktype-not-silent-unknown.md](./004-tqsykwzn-arktype-not-silent-unknown.md)                     | ArkType emits `unknown` for `not` (no validation)                                                       |
| **medium** | [005-zzwrtxyo-discriminator-mapping-zod-only.md](./005-zzwrtxyo-discriminator-mapping-zod-only.md)             | `discriminator.mapping` only in zod/zod3                                                                |
| **medium** | [204-mypwqoxk-typia-ignores-validation-constraints.md](./204-mypwqoxk-typia-ignores-validation-constraints.md) | Typia ignores `--validation` / IR constraints                                                           |
| **medium** | [006-yzoxwprl-breaking-exports-undocumented.md](./006-yzoxwprl-breaking-exports-undocumented.md)               | Box/`openApiSchemaToTs` public exports removed; CHANGELOG quiet                                         |
| **medium** | [104-zuxosvxy-kombo-tsc-filter-noise.md](./104-zuxosvxy-kombo-tsc-filter-noise.md)                             | Kombo snapshot typecheck filters swallow broad TS error classes                                         |
| **medium** | [202-lovktzts-ci-skips-web-tests.md](./202-lovktzts-ci-skips-web-tests.md)                                     | Root CI `test:all` is typed-openapi only — `packages/web` vitest never runs                             |

## Unresolved (low / nit — track or doc)

| Sev | File                                                                                               | One-liner                                                                |
| --- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| low | [103-nurlptms-stripReadWrite-ref-limitation.md](./103-nurlptms-stripReadWrite-ref-limitation.md)   | `stripReadWrite` skips `$ref` component schemas (documented limitation?) |
| low | [203-pnumrupz-sse-priority-drops-json-schema.md](./203-pnumrupz-sse-priority-drops-json-schema.md) | SSE media type wins; co-declared JSON on same status dropped             |
| low | [205-vlskrmvv-effect3-version-triple-pin.md](./205-vlskrmvv-effect3-version-triple-pin.md)         | effect@3.22.0 pinned in three places                                     |
| low | [301-rznmotnz-effect-msw-missing-ci-tsc.md](./301-rznmotnz-effect-msw-missing-ci-tsc.md)           | `effect-msw.test.ts` not in `tsconfig.ci.json`                           |
| low | [303-vrkwnuyy-docker-archive-unguarded.md](./303-vrkwnuyy-docker-archive-unguarded.md)             | Hand-written docker-archive tstyche, no sync guard                       |
| low | [304-qwtlwsnm-effect3-param-inference-gap.md](./304-qwtlwsnm-effect3-param-inference-gap.md)       | effect3 suites intentionally skip param inference (TS2589)               |
| nit | [105-xzkstnnw-playground-client-default.md](./105-xzkstnnw-playground-client-default.md)           | Playground defaults `client: "promise"` vs CLI effect default            |
| nit | [302-rznmotnz-abort-test-weak-assertion.md](./302-rznmotnz-abort-test-weak-assertion.md)           | Abort MSW test accepts any `Error`                                       |

## Resolved during the stack

| File                                                                                                     | Resolved by                                                   |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| [100-pntqwtvu-default-fetcher-requestformat-gap.md](./100-pntqwtvu-default-fetcher-requestformat-gap.md) | `nyvnvqtr` — default fetcher encodes non-JSON `requestFormat` |

(In-batch fixes that never needed tickets: boxToIr walk order, effect pipe refinements, arktype bounds/patterns, Effect
Schema v4 decode APIs, FetcherResponse rename, etc. — see batch notes.)

## Suggested merge order for fixes

1. Restore `.npmrc` settings (**200**) and fix CI fixture ordering (**300**) — unblock green CI on clean checkout.
2. Config merge vs cac defaults (**001**) and tree-shake `not` (**002**) — correctness for real configs/specs.
3. TanStack Effect fake status (**201**) + binary body guard (**102**) — client footguns.
4. Document or implement fidelity gaps: arktype `not`, discriminator mapping, typia constraints, Box export removal
   (**004**/**005**/**204**/**006**).

## Scope note

Review focused on `packages/typed-openapi/src`, CI/config, default fetcher, TanStack generator, and high-signal tests.
Large snapshot regenerations and monaco declaration dumps were treated as noise unless they indicated a behavioral
change.
