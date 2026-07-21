# Batch 3 review notes (`qrmowqsw` → `lovktzts`)

**Scope:** 25 revisions — exactOptional fixes, binary/stream SchemaNode, SSE, typebox/typia, TanStack+Effect, web Vercel
fs shim, deps bumps, effect3 nesting, Effect Schema v4, arktype pattern/defaults, test:all consolidation.

**Review files:** `200`–`205` (6 open findings, high signal only).

---

## Batch arc (oldest → newest)

| Change                               | Theme                                                                                                    |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| `qrmowqsw`                           | Docs triage only — no code review                                                                        |
| `pkpzwqlr` / `kzyspxyt` / `vlxxvusq` | Systematic `exactOptionalPropertyTypes` — conditional spreads for optional props                         |
| `nztywzvn`                           | `binary` + `stream` SchemaNode kinds; shared `emitBinaryBlobCheck` / `emitStreamCheck`                   |
| `pnumrupz`                           | SSE: `responseFormat`, sparse maps, skip output validation, return `response.body`                       |
| `mypwqoxk`                           | typebox + typia adapters re-shipped                                                                      |
| `ntsnytlk`                           | TanStack auto-wraps Effect client with `Effect.runPromise`                                               |
| `vvxwlxun`                           | Config loaders → `typed-openapi/node`; web fs shim — **intentional breaking change** (changeset present) |
| `vlskrmvv`                           | Dual effect majors via pnpm overrides + `.pnpmfile.cjs`; **`.npmrc` regression** (#200)                  |
| `twtqruts`                           | Effect Schema v4 API (`Schema.check`, `decodeUnknownEffect`, `SchemaError`)                              |
| `nwprsqow`                           | Arktype: JS-safe `.narrow` predicate; skip defaults on `.parse` morphs                                   |
| `lovktzts`                           | `test:all` orchestrator; CI consolidated — **web tests dropped** (#202)                                  |

---

## Resolved within batch (no standalone file)

- **exactOptionalPropertyTypes** — addressed across `pkpzwqlr`, `kzyspxyt`, `vlxxvusq`, `pwxqxpwp` snapshots; pattern is
  consistent (`...(x ? { k: x } : {})`).
- **Arktype regex / defaults** — fixed in `nwprsqow`, snapshots refreshed in `zpwutuxm` / `zyyqtyru`.
- **Effect v4 decode/error types** — `twtqruts` + test updates in `luuoysmx` / `lovktzts`;
  `Schema.decodeUnknownEffect` + `SchemaError` wired.
- **Vercel browser build / Node fs** — `vvxwlxun` + changeset; config export move is documented, not filed as defect.

---

## Open findings summary

| ID  | Sev    | Revision | Title                                        |
| --- | ------ | -------- | -------------------------------------------- |
| 200 | major  | vlskrmvv | `.npmrc` monorepo settings wiped             |
| 201 | medium | ntsnytlk | TanStack Effect mutation fakes `status: 200` |
| 202 | medium | lovktzts | CI skips `packages/web` tests                |
| 203 | low    | pnumrupz | SSE branch drops co-declared JSON schemas    |
| 204 | medium | mypwqoxk | Typia ignores OpenAPI validation constraints |
| 205 | low    | vlskrmvv | effect@3.22.0 triple-pin drift risk          |

---

## Positive signals

- **SSE + binary/stream** — end-to-end: IR → types → runtime emit → client parse/validate skip; covered by
  `sse-response.test.ts`.
- **test:all** — sensible fixture-first ordering; parallel waves reduce CI wall time; attest bench isolated via
  `run-attest-bench.mjs` (clears hostile `NODE_OPTIONS`).
- **exactOptional** — thorough pass; no remaining obvious `undefined` assignment smells in generator paths reviewed.
- **Effect dual-major** — creative pnpm layering; matrix snapshots for effect + effect3 suggest it works when versions
  align.

---

## Skipped (noise / snapshots-only revs)

`otkzwqr`, `utxwxzy`, `nznswwpk`, `pwxqxpwp`, `yqxwpozo`, `orlorwrr`, `mxxkxukp`, `nvyskzor`, `luuoysmx`, `ywolxwyk`,
`zyyqtyru`, `zpwutuxm` — docs, lockfile, snapshot regen, oxfmt exclude, tstyche filter tweaks. Spot-checked; no
additional high-signal defects beyond items above.
