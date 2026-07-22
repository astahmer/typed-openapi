# Generated snapshot type-check benchmarks

This report compares TypeScript cost of compiling each generated OpenAPI snapshot in isolation. Lower values are better.

## Method

- 5 cold compiler processes per snapshot; check time, instantiations, and memory use are each reported as a median.
- Every `tests/snapshots/<schema>.<runtime>.ts` file is included; this currently covers Docker, Kombo, Petstore, and long-operation-id snapshots.
- Compiler settings: `strict`, `noEmit`, `skipLibCheck`, `NodeNext`, and TypeScript extended diagnostics.
- The existing `test:bench:attest` suite remains the focused Petstore instantiation regression check; this report adds broader compiler diagnostics.
- **Balanced rank** is equal-weight mean of each snapshot's rank for check time, instantiations, and memory. It is a consistency signal, not a substitute for individual metrics.
- TypeScript: 6.0.3; Node: v24.18.0; platform: darwin/arm64.

## Overall runtime ranking

| Overall rank | Runtime | Balanced rank | Time rank | Instantiation rank | Memory rank | Median check time | Median instantiations | Median memory |
| ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 1 | Client only | 1.58 | 1 | 1 | 2 | 0.105 s | 3,652 | 80,556 KB |
| 2 | Typia | 2.25 | 2 | 2 | 1 | 0.165 s | 4,584 | 79,363 KB |
| 3 | Zod 3 | 3.75 | 3 | 3 | 3 | 0.235 s | 35,871 | 104,759 KB |
| 4 | Zod 4 | 4.50 | 4 | 4 | 4 | 0.270 s | 35,916 | 106,217 KB |
| 5 | TypeBox | 4.83 | 5 | 6 | 5 | 0.325 s | 63,446 | 131,386 KB |
| 6 | Effect | 6.33 | 8 | 5 | 8 | 0.600 s | 37,996 | 193,842 KB |
| 7 | Valibot | 6.67 | 7 | 8 | 6 | 0.495 s | 153,120 | 136,139 KB |
| 8 | ArkType | 7.42 | 6 | 9 | 7 | 0.405 s | 276,930 | 173,438 KB |
| 9 | Effect 3 | 7.67 | 9 | 7 | 9 | 0.700 s | 126,441 | 305,845 KB |

## Metric leaders

| Metric | Winner | Result |
| --- | --- | ---: |
| Median check time | Client only | 0.105 s |
| Median instantiations | Client only | 3,652 |
| Median memory | Typia | 79,363 KB |

## docker.openapi

| Check rank | Runtime | Median check time | vs. fastest | Instantiations | Memory | Time σ |
| ---: | --- | ---: | ---: | ---: | ---: | ---: |
| 1 | Client only | 0.120 s | 1.00× | 4,270 | 83,963 KB | 0.013 s |
| 2 | Typia | 0.130 s | 1.08× | 5,636 | 81,315 KB | 0.011 s |
| 3 | Zod 3 | 0.270 s | 2.25× | 65,110 | 123,677 KB | 0.023 s |
| 4 | Zod 4 | 0.320 s | 2.67× | 65,155 | 124,763 KB | 0.035 s |
| 5 | TypeBox | 0.410 s | 3.42× | 111,527 | 154,856 KB | 0.120 s |
| 6 | ArkType | 0.580 s | 4.83× | 507,949 | 213,096 KB | 0.164 s |
| 7 | Effect | 0.620 s | 5.17× | 66,066 | 212,379 KB | 0.194 s |
| 8 | Valibot | 0.730 s | 6.08× | 277,637 | 158,236 KB | 0.071 s |
| 9 | Effect 3 | 0.950 s | 7.92× | 234,110 | 345,216 KB | 0.092 s |

## kombo.openapi

| Check rank | Runtime | Median check time | vs. fastest | Instantiations | Memory | Time σ |
| ---: | --- | ---: | ---: | ---: | ---: | ---: |
| 1 | Client only | 0.090 s | 1.00× | 4,680 | 111,690 KB | 0.007 s |
| 2 | Typia | 0.410 s | 4.56× | 7,597 | 121,087 KB | 0.156 s |
| 3 | TypeBox | 1.050 s | 11.67× | 151,509 | 179,493 KB | 0.361 s |
| 4 | Effect | 1.440 s | 16.00× | 124,980 | 295,089 KB | 0.159 s |
| 5 | ArkType | 2.260 s | 25.11× | 1,770,505 | 428,792 KB | 0.393 s |
| 6 | Effect 3 | 2.830 s | 31.44× | 984,437 | 554,179 KB | 0.501 s |
| 7 | Valibot | 3.520 s | 39.11× | 646,803 | 284,366 KB | 1.217 s |
| 8 | Zod 4 | 3.880 s | 43.11× | 273,911 | 290,880 KB | 0.891 s |
| 9 | Zod 3 | 5.220 s | 58.00× | 273,663 | 290,271 KB | 1.729 s |

## long-operation-id

| Check rank | Runtime | Median check time | vs. fastest | Instantiations | Memory | Time σ |
| ---: | --- | ---: | ---: | ---: | ---: | ---: |
| 1 | Zod 3 | 0.110 s | 1.00× | 2,568 | 80,304 KB | 0.019 s |
| 2 | Zod 4 | 0.130 s | 1.18× | 2,568 | 80,578 KB | 0.028 s |
| 3 | TypeBox | 0.150 s | 1.36× | 8,591 | 85,596 KB | 0.011 s |
| 4 | Valibot | 0.150 s | 1.36× | 12,141 | 91,425 KB | 0.047 s |
| 5 | Effect 3 | 0.160 s | 1.45× | 6,663 | 261,639 KB | 0.012 s |
| 6 | Typia | 0.170 s | 1.55× | 2,479 | 70,416 KB | 0.028 s |
| 7 | Client only | 0.180 s | 1.64× | 2,164 | 69,694 KB | 0.047 s |
| 8 | Effect | 0.210 s | 1.91× | 5,616 | 175,304 KB | 0.067 s |
| 9 | ArkType | 0.230 s | 2.09× | 10,232 | 116,436 KB | 0.079 s |

## petstore

| Check rank | Runtime | Median check time | vs. fastest | Instantiations | Memory | Time σ |
| ---: | --- | ---: | ---: | ---: | ---: | ---: |
| 1 | Client only | 0.090 s | 1.00× | 3,034 | 77,149 KB | 0.098 s |
| 2 | Typia | 0.160 s | 1.78× | 3,532 | 77,411 KB | 0.063 s |
| 3 | Zod 3 | 0.200 s | 2.22× | 6,631 | 85,840 KB | 0.056 s |
| 4 | ArkType | 0.210 s | 2.33× | 45,911 | 133,780 KB | 0.021 s |
| 5 | Zod 4 | 0.220 s | 2.44× | 6,676 | 87,671 KB | 0.061 s |
| 6 | TypeBox | 0.240 s | 2.67× | 15,365 | 107,915 KB | 0.049 s |
| 7 | Valibot | 0.260 s | 2.89× | 28,603 | 114,042 KB | 0.040 s |
| 8 | Effect 3 | 0.450 s | 5.00× | 18,772 | 266,474 KB | 0.209 s |
| 9 | Effect | 0.580 s | 6.44× | 9,926 | 164,248 KB | 0.178 s |

## Reproduce

```sh
pnpm --filter typed-openapi run bench:typecheck
# Raise sample count when comparing a change
BENCH_RUNS=9 pnpm --filter typed-openapi run bench:typecheck
```

Raw measurements are stored beside this report in `typecheck-benchmarks.json`.
