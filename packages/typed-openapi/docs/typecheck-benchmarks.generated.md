# Generated snapshot type-check benchmarks

This report measures TypeScript cost of compiling generated OpenAPI modules without API-client calls. Lower values are better.

## Method

- 1 cold compiler processes per snapshot; check time, instantiations, and memory use are each reported as a median.
- Cloudflare, Docker, Kombo, and Petstore runtime snapshots are included; long-operation-id is intentionally excluded.
- Each generated snapshot is compiled directly, establishing the declaration and schema baseline before application code invokes the client.
- Compiler settings: `strict`, `noEmit`, `skipLibCheck`, `NodeNext`, and TypeScript extended diagnostics.
- The existing `test:bench:attest` suite remains the focused Petstore instantiation regression check.
- **Balanced rank** is equal-weight mean of each snapshot's rank for check time, instantiations, and memory. It is a consistency signal, not a substitute for individual metrics.
- TypeScript: 6.0.3; Node: v24.18.0; platform: darwin/arm64.

## Overall runtime ranking

| Overall rank | Runtime | Balanced rank | Time rank | Instantiation rank | Memory rank | Median check time | Median instantiations | Median memory |
| ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 1 | Client only | 1.00 | 4 | 4 | 1 | 0.080 s | 4,270 | 84,186 KB |
| 2 | Zod 4 — direct any + ts-nocheck | 1.33 | 1 | 1 | 11 | 0.000 s | 0 | 357,780 KB |
| 3 | Typia | 2.00 | 5 | 5 | 2 | 0.120 s | 5,636 | 98,501 KB |
| 4 | Zod 4 — forced cast + ts-nocheck | 2.33 | 2 | 2 | 12 | 0.000 s | 0 | 404,130 KB |
| 5 | Zod 4 — ts-nocheck | 2.33 | 3 | 3 | 10 | 0.000 s | 0 | 355,284 KB |
| 6 | Zod 4 | 3.89 | 6 | 7 | 3 | 0.240 s | 65,155 | 124,478 KB |
| 7 | Zod 4 — direct any | 4.00 | 13 | 13 | 13 | 43.840 s | 548,709 | 1,095,696 KB |
| 8 | Zod 3 | 4.22 | 7 | 6 | 4 | 0.310 s | 65,110 | 124,904 KB |
| 9 | Zod 4 — forced cast | 5.00 | 14 | 14 | 14 | 53.170 s | 10,183,789 | 3,767,152 KB |
| 10 | TypeBox | 5.11 | 8 | 9 | 5 | 0.350 s | 111,527 | 154,088 KB |
| 11 | Effect | 6.00 | 10 | 8 | 7 | 0.590 s | 66,066 | 212,115 KB |
| 12 | Valibot | 6.44 | 9 | 11 | 6 | 0.570 s | 277,637 | 157,787 KB |
| 13 | Effect 3 | 8.00 | 11 | 10 | 9 | 0.800 s | 234,110 | 347,053 KB |
| 14 | ArkType | 8.33 | 12 | 12 | 8 | 0.920 s | 507,949 | 213,948 KB |

## Metric leaders

| Metric | Winner | Result |
| --- | --- | ---: |
| Median check time | Zod 4 — direct any + ts-nocheck | 0.000 s |
| Median instantiations | Zod 4 — direct any + ts-nocheck | 0 |
| Median memory | Client only | 84,186 KB |

## cloudflare

| Check rank | Runtime | Median check time | vs. fastest | Instantiations | Memory | Time σ |
| ---: | --- | ---: | ---: | ---: | ---: | ---: |
| 1 | Zod 4 — direct any + ts-nocheck | 0.000 s | — | 0 | 357,780 KB | 0.000 s |
| 2 | Zod 4 — forced cast + ts-nocheck | 0.000 s | — | 0 | 404,130 KB | 0.000 s |
| 3 | Zod 4 — ts-nocheck | 0.000 s | — | 0 | 355,284 KB | 0.000 s |
| 4 | Zod 4 — direct any | 43.840 s | — | 548,709 | 1,095,696 KB | 0.000 s |
| 5 | Zod 4 — forced cast | 53.170 s | — | 10,183,789 | 3,767,152 KB | 0.000 s |

## docker.openapi

| Check rank | Runtime | Median check time | vs. fastest | Instantiations | Memory | Time σ |
| ---: | --- | ---: | ---: | ---: | ---: | ---: |
| 1 | Client only | 0.090 s | 1.00× | 4,270 | 84,186 KB | 0.000 s |
| 2 | Typia | 0.120 s | 1.33× | 5,636 | 98,501 KB | 0.000 s |
| 3 | Zod 4 | 0.240 s | 2.67× | 65,155 | 124,478 KB | 0.000 s |
| 4 | Zod 3 | 0.310 s | 3.44× | 65,110 | 124,904 KB | 0.000 s |
| 5 | TypeBox | 0.350 s | 3.89× | 111,527 | 154,088 KB | 0.000 s |
| 6 | Valibot | 0.570 s | 6.33× | 277,637 | 157,787 KB | 0.000 s |
| 7 | Effect | 0.590 s | 6.56× | 66,066 | 212,115 KB | 0.000 s |
| 8 | Effect 3 | 0.800 s | 8.89× | 234,110 | 347,053 KB | 0.000 s |
| 9 | ArkType | 0.920 s | 10.22× | 507,949 | 213,948 KB | 0.000 s |

## kombo.openapi

| Check rank | Runtime | Median check time | vs. fastest | Instantiations | Memory | Time σ |
| ---: | --- | ---: | ---: | ---: | ---: | ---: |
| 1 | Client only | 0.080 s | 1.00× | 4,680 | 111,858 KB | 0.000 s |
| 2 | Typia | 0.260 s | 3.25× | 7,597 | 121,330 KB | 0.000 s |
| 3 | TypeBox | 0.850 s | 10.63× | 151,509 | 201,706 KB | 0.000 s |
| 4 | Zod 4 | 0.850 s | 10.63× | 273,911 | 290,992 KB | 0.000 s |
| 5 | Zod 3 | 0.860 s | 10.75× | 273,663 | 304,762 KB | 0.000 s |
| 6 | Valibot | 1.390 s | 17.38× | 646,803 | 284,285 KB | 0.000 s |
| 7 | Effect | 1.540 s | 19.25× | 124,980 | 307,151 KB | 0.000 s |
| 8 | ArkType | 2.680 s | 33.50× | 1,770,505 | 430,870 KB | 0.000 s |
| 9 | Effect 3 | 3.800 s | 47.50× | 984,437 | 550,263 KB | 0.000 s |

## petstore

| Check rank | Runtime | Median check time | vs. fastest | Instantiations | Memory | Time σ |
| ---: | --- | ---: | ---: | ---: | ---: | ---: |
| 1 | Client only | 0.060 s | 1.00× | 3,034 | 72,935 KB | 0.000 s |
| 2 | Typia | 0.070 s | 1.17× | 3,532 | 77,924 KB | 0.000 s |
| 3 | Zod 4 | 0.090 s | 1.50× | 6,676 | 82,453 KB | 0.000 s |
| 4 | Zod 3 | 0.100 s | 1.67× | 6,631 | 86,312 KB | 0.000 s |
| 5 | Effect | 0.130 s | 2.17× | 9,926 | 164,731 KB | 0.000 s |
| 6 | Effect 3 | 0.130 s | 2.17× | 18,772 | 264,483 KB | 0.000 s |
| 7 | Valibot | 0.140 s | 2.33× | 28,603 | 114,814 KB | 0.000 s |
| 8 | ArkType | 0.150 s | 2.50× | 45,911 | 137,322 KB | 0.000 s |
| 9 | TypeBox | 0.180 s | 3.00× | 15,365 | 107,057 KB | 0.000 s |

## Reproduce

```sh
pnpm --filter typed-openapi run bench:typecheck
pnpm --filter typed-openapi run bench:typecheck:generated
pnpm --filter typed-openapi run bench:typecheck:usage
BENCH_RUNS=9 pnpm --filter typed-openapi run bench:typecheck
```
