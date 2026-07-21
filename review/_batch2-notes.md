# Batch 2 review notes (nurlptms → yxqyrpmm)

Reviewed change IDs (code/test diffs read; findings filed where warranted):

| change_id | description                                                                  |
| --------- | ---------------------------------------------------------------------------- |
| nurlptms  | feat: strip readOnly/writeOnly and support cookie parameters                 |
| xuxyvosk  | feat: emit schema defaults and coerce HTTP string params                     |
| qnnkrxmo  | feat: ApiResponse, InferSchemaInput, coerce CLI, cookie client wiring        |
| uqnqwuny  | fix: intern Effect default helpers and stop double-defaults on nullable      |
| ooukupqz  | fix: FetcherResponse rename and tighter generated client casts               |
| xtxwnkqz  | feat: effect-aware default fetcher with cookie header support                |
| xvnmznxu  | fix: drop Effect path as never via explicit request type args                |
| zuxosvxy  | test: typecheck every generated snapshot with tsc                            |
| pntqwtvu  | feat: pass requestFormat into Fetcher.fetch                                  |
| nyvnvqtr  | feat: default fetcher encodes form-data, form-url, binary, text              |
| snyzmmos  | fix: emit only non-json endpointRequestFormats overrides                     |
| wvvyzmxr  | fix: optional all-optional param groups (#32)                                |
| yprwpxzn  | fix: resolve nested #/definitions refs without crash (#27)                   |
| tpmlyvtr  | fix: map exotic schema types to unknown (#18)                                |
| ymswqxul  | test: GitHub issue regression suite for FOLLOWUPS triage                     |
| xzkstnnw  | feat(web): playground controls for validation, client, validate-side, coerce |

Skipped (snapshot-only, docs-only, or changeset-only — no code contradictions found):

| change_id    | reason                                                                                                                          |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| ywzlswss     | test: cover defaults, coerce, cookies, readOnly/writeOnly, ApiResponse — covered via focused test reads + overlapping revisions |
| rzlyzxtx     | docs only                                                                                                                       |
| vlmqonmu     | changeset only                                                                                                                  |
| qqmltrtypylz | snapshot regeneration only                                                                                                      |
| szwqmkvttxqr | docs + changeset only                                                                                                           |
| xnpmxlyvynxq | snapshot regeneration + tests (requestFormat tests reviewed via nyvnvqtr/snyzmmos sources)                                      |
| ynvlkprprpxm | docs + changeset only                                                                                                           |
| kmpqqmokrxpy | snapshot regeneration only                                                                                                      |
| ztvrvlrunnlv | docs + changeset only                                                                                                           |
| yxqyrpmmswmz | changeset note only                                                                                                             |

Findings written: `100`–`105` (one resolved: `100` fixed by `nyvnvqtr`).
