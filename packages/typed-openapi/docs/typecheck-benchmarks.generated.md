# Generated snapshot type-check benchmarks

This report measures TypeScript cost of compiling generated OpenAPI modules without API-client calls. Lower values are better.

## Method

- 5 cold compiler processes per snapshot; check time, instantiations, and memory use are each reported as a median.
- Docker, Kombo, and Petstore runtime snapshots are included; long-operation-id is intentionally excluded.
- Each generated snapshot is compiled directly, establishing the declaration and schema baseline before application code invokes the client.
- Compiler settings: `strict`, `noEmit`, `skipLibCheck`, `NodeNext`, and TypeScript extended diagnostics.
- The existing `test:bench:attest` suite remains the focused Petstore instantiation regression check.
- **Balanced rank** is equal-weight mean of each snapshot's rank for check time, instantiations, and memory. It is a consistency signal, not a substitute for individual metrics.
- TypeScript: 6.0.3; Node: v24.18.0; platform: darwin/arm64.

## Overall runtime ranking

| Overall rank | Runtime | Balanced rank | Time rank | Instantiation rank | Memory rank | Median check time | Median instantiations | Median memory |
| ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 1 | Client only | 1.11 | 1 | 1 | 1 | 0.080 s | 4,270 | 84,054 KB |
| 2 | Typia | 2.11 | 2 | 2 | 2 | 0.180 s | 5,636 | 98,448 KB |
| 3 | Zod 3 | 3.56 | 3 | 3 | 4 | 0.260 s | 65,110 | 124,945 KB |
| 4 | Zod 4 | 4.11 | 4 | 4 | 3 | 0.290 s | 65,155 | 124,940 KB |
| 5 | TypeBox | 5.00 | 5 | 6 | 5 | 0.310 s | 111,527 | 152,946 KB |
| 6 | Effect | 6.00 | 6 | 5 | 7 | 0.600 s | 66,066 | 212,766 KB |
| 7 | Valibot | 7.00 | 9 | 8 | 6 | 0.900 s | 277,637 | 157,513 KB |
| 8 | ArkType | 8.00 | 7 | 9 | 8 | 0.720 s | 507,949 | 213,370 KB |
| 9 | Effect 3 | 8.11 | 8 | 7 | 9 | 0.720 s | 234,110 | 344,728 KB |

## Metric leaders

| Metric | Winner | Result |
| --- | --- | ---: |
| Median check time | Client only | 0.080 s |
| Median instantiations | Client only | 4,270 |
| Median memory | Client only | 84,054 KB |

## docker.openapi

| Check rank | Runtime | Median check time | vs. fastest | Instantiations | Memory | Time σ |
| ---: | --- | ---: | ---: | ---: | ---: | ---: |
| 1 | Client only | 0.130 s | 1.00× | 4,270 | 84,054 KB | 0.040 s |
| 2 | Typia | 0.180 s | 1.38× | 5,636 | 98,448 KB | 0.088 s |
| 3 | Zod 3 | 0.260 s | 2.00× | 65,110 | 124,945 KB | 0.023 s |
| 4 | Zod 4 | 0.290 s | 2.23× | 65,155 | 124,940 KB | 0.030 s |
| 5 | TypeBox | 0.310 s | 2.38× | 111,527 | 154,406 KB | 0.048 s |
| 6 | Effect | 0.600 s | 4.62× | 66,066 | 212,766 KB | 0.145 s |
| 7 | ArkType | 0.720 s | 5.54× | 507,949 | 213,370 KB | 0.069 s |
| 8 | Effect 3 | 0.720 s | 5.54× | 234,110 | 344,728 KB | 0.255 s |
| 9 | Valibot | 0.900 s | 6.92× | 277,637 | 157,513 KB | 0.175 s |

## kombo.openapi

| Check rank | Runtime | Median check time | vs. fastest | Instantiations | Memory | Time σ |
| ---: | --- | ---: | ---: | ---: | ---: | ---: |
| 1 | Client only | 0.080 s | 1.00× | 4,680 | 110,257 KB | 0.005 s |
| 2 | Typia | 0.280 s | 3.50× | 7,597 | 113,320 KB | 0.053 s |
| 3 | Zod 3 | 0.750 s | 9.38× | 273,663 | 291,399 KB | 0.069 s |
| 4 | Zod 4 | 0.840 s | 10.50× | 273,911 | 305,790 KB | 0.081 s |
| 5 | TypeBox | 0.960 s | 12.00× | 151,509 | 152,946 KB | 0.181 s |
| 6 | Valibot | 1.980 s | 24.75× | 646,803 | 285,230 KB | 0.157 s |
| 7 | ArkType | 2.060 s | 25.75× | 1,770,505 | 427,830 KB | 0.162 s |
| 8 | Effect | 2.610 s | 32.63× | 124,980 | 307,208 KB | 0.507 s |
| 9 | Effect 3 | 3.420 s | 42.75× | 984,437 | 555,078 KB | 0.359 s |

## petstore

| Check rank | Runtime | Median check time | vs. fastest | Instantiations | Memory | Time σ |
| ---: | --- | ---: | ---: | ---: | ---: | ---: |
| 1 | Client only | 0.060 s | 1.00× | 3,034 | 77,793 KB | 0.000 s |
| 2 | Zod 4 | 0.100 s | 1.67× | 6,676 | 86,671 KB | 0.017 s |
| 3 | Zod 3 | 0.110 s | 1.83× | 6,631 | 84,867 KB | 0.014 s |
| 4 | Typia | 0.120 s | 2.00× | 3,532 | 76,884 KB | 0.026 s |
| 5 | Effect | 0.130 s | 2.17× | 9,926 | 164,647 KB | 0.016 s |
| 6 | TypeBox | 0.130 s | 2.17× | 15,365 | 105,039 KB | 0.052 s |
| 7 | Effect 3 | 0.150 s | 2.50× | 18,772 | 266,305 KB | 0.019 s |
| 8 | ArkType | 0.170 s | 2.83× | 45,911 | 133,538 KB | 0.010 s |
| 9 | Valibot | 0.180 s | 3.00× | 28,603 | 113,461 KB | 0.059 s |

## Reproduce

```sh
pnpm --filter typed-openapi run bench:typecheck
pnpm --filter typed-openapi run bench:typecheck:generated
pnpm --filter typed-openapi run bench:typecheck:usage
BENCH_RUNS=9 pnpm --filter typed-openapi run bench:typecheck
```
