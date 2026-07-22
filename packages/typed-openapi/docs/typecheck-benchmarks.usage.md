# API-client usage type-check benchmarks

This report measures TypeScript cost of type-checking realistic generated API-client usage. Lower values are better.

## Method

- 1 cold compiler processes per snapshot; check time, instantiations, and memory use are each reported as a median.
- Cloudflare, Docker, Kombo, and Petstore runtime snapshots are included; long-operation-id is intentionally excluded.
- Probes create a client, pass schema-specific request params, then consume typed response fields. Effect clients use `Effect.map`; other clients use `Promise.then`.
- Effect 3 snapshots currently need `as never` for parameter objects because their generated input type exposes schema internals; their request call and response consumption are still measured.
- Compiler settings: `strict`, `noEmit`, `skipLibCheck`, `NodeNext`, and TypeScript extended diagnostics.
- The existing `test:bench:attest` suite remains the focused Petstore instantiation regression check.
- **Balanced rank** is equal-weight mean of each snapshot's rank for check time, instantiations, and memory. It is a consistency signal, not a substitute for individual metrics.
- TypeScript: 6.0.3; Node: v24.18.0; platform: darwin/arm64.

## Usage probes

| Schema | Typed requests | Response use |
| --- | --- | --- |
| Cloudflare | `GET /accounts` | first account name |
| Docker | `GET /services/{id}` with `path.id` and `query.insertDefaults` | `Endpoint.Ports[0].PublishMode` |
| Petstore | `GET /pet/{petId}` and `GET /pet/findByStatus` with path and query params | pet tag name and status |
| Kombo | `GET /hris/employees` with integration header and paging query | first employee work email or cursor |

## Overall runtime ranking

| Overall rank | Runtime | Balanced rank | Time rank | Instantiation rank | Memory rank | Median check time | Median instantiations | Median memory |
| ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 1 | Client only | 1.11 | 4 | 4 | 1 | 0.140 s | 6,665 | 76,472 KB |
| 2 | Zod 4 — direct any + ts-nocheck | 1.33 | 1 | 1 | 10 | 0.060 s | 1,924 | 356,789 KB |
| 3 | Typia | 1.89 | 5 | 5 | 2 | 0.200 s | 17,092 | 90,790 KB |
| 4 | Zod 4 — forced cast + ts-nocheck | 2.33 | 2 | 2 | 12 | 0.060 s | 1,924 | 404,477 KB |
| 5 | Zod 4 — ts-nocheck | 2.33 | 3 | 3 | 9 | 0.060 s | 1,924 | 353,843 KB |
| 6 | TypeBox | 3.67 | 6 | 7 | 3 | 0.440 s | 155,704 | 157,067 KB |
| 7 | Zod 4 — direct any | 4.00 | 13 | 13 | 13 | 31.050 s | 550,386 | 1,086,366 KB |
| 8 | Zod 4 — forced cast | 5.00 | 14 | 14 | 14 | 68.240 s | 10,185,385 | 3,800,902 KB |
| 9 | Effect | 5.11 | 9 | 6 | 8 | 0.770 s | 91,577 | 235,153 KB |
| 10 | Valibot | 5.78 | 10 | 11 | 4 | 0.840 s | 297,370 | 176,492 KB |
| 11 | Zod 4 | 6.22 | 7 | 9 | 5 | 0.590 s | 212,479 | 186,653 KB |
| 12 | Zod 3 | 6.44 | 12 | 8 | 7 | 1.070 s | 212,434 | 217,981 KB |
| 13 | ArkType | 7.22 | 8 | 12 | 6 | 0.660 s | 548,406 | 203,045 KB |
| 14 | Effect 3 | 7.56 | 11 | 10 | 11 | 0.970 s | 248,672 | 361,086 KB |

## Metric leaders

| Metric | Winner | Result |
| --- | --- | ---: |
| Median check time | Zod 4 — direct any + ts-nocheck | 0.060 s |
| Median instantiations | Zod 4 — direct any + ts-nocheck | 1,924 |
| Median memory | Client only | 76,472 KB |

## cloudflare

| Check rank | Runtime | Median check time | vs. fastest | Instantiations | Memory | Time σ |
| ---: | --- | ---: | ---: | ---: | ---: | ---: |
| 1 | Zod 4 — direct any + ts-nocheck | 0.060 s | 1.00× | 1,924 | 356,789 KB | 0.000 s |
| 2 | Zod 4 — forced cast + ts-nocheck | 0.060 s | 1.00× | 1,924 | 404,477 KB | 0.000 s |
| 3 | Zod 4 — ts-nocheck | 0.060 s | 1.00× | 1,924 | 353,843 KB | 0.000 s |
| 4 | Zod 4 — direct any | 31.050 s | 517.50× | 550,386 | 1,086,366 KB | 0.000 s |
| 5 | Zod 4 — forced cast | 68.240 s | 1137.33× | 10,185,385 | 3,800,902 KB | 0.000 s |

## docker.openapi

| Check rank | Runtime | Median check time | vs. fastest | Instantiations | Memory | Time σ |
| ---: | --- | ---: | ---: | ---: | ---: | ---: |
| 1 | Typia | 0.200 s | 1.00× | 17,092 | 90,790 KB | 0.000 s |
| 2 | Client only | 0.250 s | 1.25× | 6,665 | 75,097 KB | 0.000 s |
| 3 | TypeBox | 0.440 s | 2.20× | 155,704 | 157,067 KB | 0.000 s |
| 4 | Zod 4 | 0.590 s | 2.95× | 212,479 | 186,653 KB | 0.000 s |
| 5 | ArkType | 0.660 s | 3.30× | 548,406 | 203,045 KB | 0.000 s |
| 6 | Effect | 0.770 s | 3.85× | 91,577 | 235,153 KB | 0.000 s |
| 7 | Valibot | 0.840 s | 4.20× | 297,370 | 176,492 KB | 0.000 s |
| 8 | Effect 3 | 0.970 s | 4.85× | 248,672 | 361,086 KB | 0.000 s |
| 9 | Zod 3 | 1.100 s | 5.50× | 212,434 | 217,981 KB | 0.000 s |

## kombo.openapi

| Check rank | Runtime | Median check time | vs. fastest | Instantiations | Memory | Time σ |
| ---: | --- | ---: | ---: | ---: | ---: | ---: |
| 1 | Client only | 0.140 s | 1.00× | 8,843 | 119,102 KB | 0.000 s |
| 2 | Typia | 0.330 s | 2.36× | 33,919 | 147,674 KB | 0.000 s |
| 3 | Zod 4 | 0.840 s | 6.00× | 411,455 | 330,312 KB | 0.000 s |
| 4 | TypeBox | 0.860 s | 6.14× | 208,360 | 192,987 KB | 0.000 s |
| 5 | Zod 3 | 1.070 s | 7.64× | 411,202 | 317,951 KB | 0.000 s |
| 6 | Valibot | 1.520 s | 10.86× | 680,712 | 252,189 KB | 0.000 s |
| 7 | Effect | 2.200 s | 15.71× | 164,858 | 280,367 KB | 0.000 s |
| 8 | ArkType | 2.750 s | 19.64× | 1,841,469 | 477,897 KB | 0.000 s |
| 9 | Effect 3 | 3.190 s | 22.79× | 1,017,522 | 553,277 KB | 0.000 s |

## petstore

| Check rank | Runtime | Median check time | vs. fastest | Instantiations | Memory | Time σ |
| ---: | --- | ---: | ---: | ---: | ---: | ---: |
| 1 | Client only | 0.060 s | 1.00× | 4,245 | 76,472 KB | 0.000 s |
| 2 | Typia | 0.100 s | 1.67× | 6,418 | 78,339 KB | 0.000 s |
| 3 | Effect | 0.140 s | 2.33× | 13,564 | 169,331 KB | 0.000 s |
| 4 | Effect 3 | 0.150 s | 2.50× | 21,901 | 265,718 KB | 0.000 s |
| 5 | TypeBox | 0.150 s | 2.50× | 20,304 | 109,897 KB | 0.000 s |
| 6 | Valibot | 0.150 s | 2.50× | 33,042 | 119,433 KB | 0.000 s |
| 7 | ArkType | 0.180 s | 3.00× | 52,163 | 141,720 KB | 0.000 s |
| 8 | Zod 3 | 0.250 s | 4.17× | 96,747 | 123,084 KB | 0.000 s |
| 9 | Zod 4 | 0.280 s | 4.67× | 96,792 | 152,863 KB | 0.000 s |

## Reproduce

```sh
pnpm --filter typed-openapi run bench:typecheck
pnpm --filter typed-openapi run bench:typecheck:generated
pnpm --filter typed-openapi run bench:typecheck:usage
BENCH_RUNS=9 pnpm --filter typed-openapi run bench:typecheck
```
