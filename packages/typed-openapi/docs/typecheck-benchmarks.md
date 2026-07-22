# Generated snapshot type-check benchmarks

This report compares TypeScript cost of type-checking realistic generated API-client usage. Lower values are better.

## Method

- 5 cold compiler processes per snapshot; check time, instantiations, and memory use are each reported as a median.
- Every Docker, Kombo, and Petstore runtime snapshot is compiled through a generated usage probe; long-operation-id is intentionally excluded.
- Probes create a client, pass schema-specific request params, then consume typed response fields. Effect clients use `Effect.map`; other clients use `Promise.then`.
- Effect 3 snapshots currently need `as never` for parameter objects because their generated input type exposes schema internals; their request call and response consumption are still measured.
- Compiler settings: `strict`, `noEmit`, `skipLibCheck`, `NodeNext`, and TypeScript extended diagnostics.
- The existing `test:bench:attest` suite remains the focused Petstore instantiation regression check; this report adds broader compiler diagnostics.
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
| 1 | Client only | 1.00 | 1 | 1 | 1 | 0.090 s | 6,665 | 76,339 KB |
| 2 | Typia | 2.00 | 2 | 2 | 2 | 0.250 s | 17,092 | 91,395 KB |
| 3 | TypeBox | 3.89 | 6 | 4 | 3 | 0.710 s | 155,704 | 153,016 KB |
| 4 | Effect | 5.33 | 7 | 3 | 8 | 0.840 s | 91,577 | 235,974 KB |
| 5 | Valibot | 5.67 | 5 | 8 | 4 | 0.630 s | 297,370 | 175,747 KB |
| 6 | Zod 3 | 5.67 | 3 | 5 | 5 | 0.490 s | 212,434 | 188,217 KB |
| 7 | Zod 4 | 6.22 | 4 | 6 | 6 | 0.520 s | 212,479 | 188,552 KB |
| 8 | ArkType | 7.44 | 8 | 9 | 7 | 1.340 s | 548,406 | 203,248 KB |
| 9 | Effect 3 | 7.78 | 9 | 7 | 9 | 1.430 s | 248,672 | 358,570 KB |

## Metric leaders

| Metric | Winner | Result |
| --- | --- | ---: |
| Median check time | Client only | 0.090 s |
| Median instantiations | Client only | 6,665 |
| Median memory | Client only | 76,339 KB |

## docker.openapi

| Check rank | Runtime | Median check time | vs. fastest | Instantiations | Memory | Time σ |
| ---: | --- | ---: | ---: | ---: | ---: | ---: |
| 1 | Client only | 0.150 s | 1.00× | 6,665 | 76,136 KB | 0.021 s |
| 2 | Typia | 0.250 s | 1.67× | 17,092 | 91,395 KB | 0.033 s |
| 3 | Zod 3 | 0.490 s | 3.27× | 212,434 | 188,217 KB | 0.014 s |
| 4 | Zod 4 | 0.520 s | 3.47× | 212,479 | 188,552 KB | 0.358 s |
| 5 | Valibot | 0.630 s | 4.20× | 297,370 | 175,747 KB | 0.023 s |
| 6 | TypeBox | 0.710 s | 4.73× | 155,704 | 153,016 KB | 0.085 s |
| 7 | Effect | 0.840 s | 5.60× | 91,577 | 235,974 KB | 0.178 s |
| 8 | ArkType | 1.340 s | 8.93× | 548,406 | 203,248 KB | 0.268 s |
| 9 | Effect 3 | 1.430 s | 9.53× | 248,672 | 358,570 KB | 0.193 s |

## kombo.openapi

| Check rank | Runtime | Median check time | vs. fastest | Instantiations | Memory | Time σ |
| ---: | --- | ---: | ---: | ---: | ---: | ---: |
| 1 | Client only | 0.090 s | 1.00× | 8,843 | 119,115 KB | 0.004 s |
| 2 | Typia | 0.290 s | 3.22× | 33,919 | 132,269 KB | 0.010 s |
| 3 | Zod 4 | 0.760 s | 8.44× | 411,455 | 330,066 KB | 0.100 s |
| 4 | Zod 3 | 0.880 s | 9.78× | 411,202 | 329,968 KB | 0.043 s |
| 5 | TypeBox | 0.900 s | 10.00× | 208,360 | 208,766 KB | 0.137 s |
| 6 | Valibot | 1.410 s | 15.67× | 680,712 | 250,960 KB | 0.068 s |
| 7 | Effect | 1.440 s | 16.00× | 164,858 | 280,583 KB | 0.237 s |
| 8 | ArkType | 2.230 s | 24.78× | 1,841,469 | 437,964 KB | 0.169 s |
| 9 | Effect 3 | 3.230 s | 35.89× | 1,017,522 | 573,337 KB | 0.211 s |

## petstore

| Check rank | Runtime | Median check time | vs. fastest | Instantiations | Memory | Time σ |
| ---: | --- | ---: | ---: | ---: | ---: | ---: |
| 1 | Client only | 0.070 s | 1.00× | 4,245 | 76,339 KB | 0.012 s |
| 2 | Typia | 0.080 s | 1.14× | 6,418 | 80,206 KB | 0.005 s |
| 3 | TypeBox | 0.110 s | 1.57× | 20,304 | 109,558 KB | 0.024 s |
| 4 | Effect | 0.120 s | 1.71× | 13,564 | 169,392 KB | 0.023 s |
| 5 | Effect 3 | 0.140 s | 2.00× | 21,901 | 264,106 KB | 0.010 s |
| 6 | ArkType | 0.160 s | 2.29× | 52,163 | 141,647 KB | 0.007 s |
| 7 | Valibot | 0.170 s | 2.43× | 33,042 | 118,349 KB | 0.021 s |
| 8 | Zod 4 | 0.240 s | 3.43× | 96,792 | 158,084 KB | 0.045 s |
| 9 | Zod 3 | 0.250 s | 3.57× | 96,747 | 147,894 KB | 0.126 s |

## Reproduce

```sh
pnpm --filter typed-openapi run bench:typecheck
# Raise sample count when comparing a change
BENCH_RUNS=9 pnpm --filter typed-openapi run bench:typecheck
```

Raw measurements are stored beside this report in `typecheck-benchmarks.json`.
