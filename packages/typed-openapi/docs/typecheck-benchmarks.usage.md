# API-client usage type-check benchmarks

This report measures TypeScript cost of type-checking realistic generated API-client usage. Lower values are better.

## Method

- 5 cold compiler processes per snapshot; check time, instantiations, and memory use are each reported as a median.
- Docker, Kombo, and Petstore runtime snapshots are included; long-operation-id is intentionally excluded.
- Probes create a client, pass schema-specific request params, then consume typed response fields. Effect clients use `Effect.map`; other clients use `Promise.then`.
- Effect 3 snapshots currently need `as never` for parameter objects because their generated input type exposes schema internals; their request call and response consumption are still measured.
- Compiler settings: `strict`, `noEmit`, `skipLibCheck`, `NodeNext`, and TypeScript extended diagnostics.
- The existing `test:bench:attest` suite remains the focused Petstore instantiation regression check.
- **Balanced rank** is equal-weight mean of each snapshot's rank for check time, instantiations, and memory. It is a consistency signal, not a substitute for individual metrics.
- TypeScript: 6.0.3; Node: v24.18.0; platform: darwin/arm64.

## Usage probes

| Schema | Typed requests | Response use |
| --- | --- | --- |
| Docker | `GET /services/{id}` with `path.id` and `query.insertDefaults` | `Endpoint.Ports[0].PublishMode` |
| Petstore | `GET /pet/{petId}` and `GET /pet/findByStatus` with path and query params | pet tag name and status |
| Kombo | `GET /hris/employees` with integration header and paging query | first employee work email or cursor |

## Overall runtime ranking

| Overall rank | Runtime | Balanced rank | Time rank | Instantiation rank | Memory rank | Median check time | Median instantiations | Median memory |
| ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 1 | Client only | 1.00 | 1 | 1 | 1 | 0.100 s | 6,665 | 76,419 KB |
| 2 | Typia | 2.00 | 2 | 2 | 2 | 0.170 s | 17,092 | 89,381 KB |
| 3 | TypeBox | 3.44 | 4 | 4 | 3 | 0.580 s | 155,704 | 152,153 KB |
| 4 | Effect | 5.22 | 5 | 3 | 8 | 0.620 s | 91,577 | 236,210 KB |
| 5 | Valibot | 5.78 | 6 | 8 | 4 | 0.730 s | 297,370 | 174,224 KB |
| 6 | Zod 3 | 5.78 | 3 | 5 | 7 | 0.550 s | 212,434 | 207,255 KB |
| 7 | Zod 4 | 6.89 | 9 | 6 | 5 | 1.370 s | 212,479 | 188,053 KB |
| 8 | Effect 3 | 7.33 | 7 | 7 | 9 | 0.780 s | 248,672 | 355,705 KB |
| 9 | ArkType | 7.56 | 8 | 9 | 6 | 1.080 s | 548,406 | 203,213 KB |

## Metric leaders

| Metric | Winner | Result |
| --- | --- | ---: |
| Median check time | Client only | 0.100 s |
| Median instantiations | Client only | 6,665 |
| Median memory | Client only | 76,419 KB |

## docker.openapi

| Check rank | Runtime | Median check time | vs. fastest | Instantiations | Memory | Time σ |
| ---: | --- | ---: | ---: | ---: | ---: | ---: |
| 1 | Client only | 0.090 s | 1.00× | 6,665 | 75,957 KB | 0.004 s |
| 2 | Typia | 0.170 s | 1.89× | 17,092 | 89,381 KB | 0.034 s |
| 3 | Zod 3 | 0.550 s | 6.11× | 212,434 | 207,255 KB | 0.055 s |
| 4 | TypeBox | 0.580 s | 6.44× | 155,704 | 152,153 KB | 0.177 s |
| 5 | Effect | 0.620 s | 6.89× | 91,577 | 236,210 KB | 0.285 s |
| 6 | Valibot | 0.730 s | 8.11× | 297,370 | 174,224 KB | 0.157 s |
| 7 | Effect 3 | 0.780 s | 8.67× | 248,672 | 355,705 KB | 0.223 s |
| 8 | ArkType | 1.080 s | 12.00× | 548,406 | 203,213 KB | 0.296 s |
| 9 | Zod 4 | 1.370 s | 15.22× | 212,479 | 188,053 KB | 0.437 s |

## kombo.openapi

| Check rank | Runtime | Median check time | vs. fastest | Instantiations | Memory | Time σ |
| ---: | --- | ---: | ---: | ---: | ---: | ---: |
| 1 | Client only | 0.110 s | 1.00× | 8,843 | 119,057 KB | 0.054 s |
| 2 | Typia | 0.300 s | 2.73× | 33,919 | 131,874 KB | 0.109 s |
| 3 | TypeBox | 0.850 s | 7.73× | 208,360 | 208,574 KB | 0.240 s |
| 4 | Zod 3 | 1.110 s | 10.09× | 411,202 | 360,240 KB | 0.182 s |
| 5 | Zod 4 | 1.470 s | 13.36× | 411,455 | 330,595 KB | 0.323 s |
| 6 | Valibot | 2.010 s | 18.27× | 680,712 | 252,607 KB | 0.270 s |
| 7 | Effect 3 | 2.990 s | 27.18× | 1,017,522 | 542,458 KB | 0.438 s |
| 8 | Effect | 3.000 s | 27.27× | 164,858 | 280,879 KB | 1.231 s |
| 9 | ArkType | 4.400 s | 40.00× | 1,841,469 | 438,596 KB | 1.057 s |

## petstore

| Check rank | Runtime | Median check time | vs. fastest | Instantiations | Memory | Time σ |
| ---: | --- | ---: | ---: | ---: | ---: | ---: |
| 1 | Client only | 0.100 s | 1.00× | 4,245 | 76,419 KB | 0.020 s |
| 2 | Typia | 0.110 s | 1.10× | 6,418 | 79,886 KB | 0.018 s |
| 3 | TypeBox | 0.150 s | 1.50× | 20,304 | 114,383 KB | 0.044 s |
| 4 | Effect | 0.160 s | 1.60× | 13,564 | 168,292 KB | 0.013 s |
| 5 | Effect 3 | 0.170 s | 1.70× | 21,901 | 265,614 KB | 0.118 s |
| 6 | ArkType | 0.210 s | 2.10× | 52,163 | 141,597 KB | 0.028 s |
| 7 | Valibot | 0.210 s | 2.10× | 33,042 | 119,476 KB | 0.053 s |
| 8 | Zod 3 | 0.280 s | 2.80× | 96,747 | 123,708 KB | 0.019 s |
| 9 | Zod 4 | 0.290 s | 2.90× | 96,792 | 157,234 KB | 0.033 s |

## Reproduce

```sh
pnpm --filter typed-openapi run bench:typecheck
pnpm --filter typed-openapi run bench:typecheck:generated
pnpm --filter typed-openapi run bench:typecheck:usage
BENCH_RUNS=9 pnpm --filter typed-openapi run bench:typecheck
```
