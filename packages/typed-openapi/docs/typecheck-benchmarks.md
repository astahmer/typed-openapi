# Type-check benchmark comparison

Usage-to-baseline multipliers isolate the additional compiler work caused by typed API-client calls. Higher values mean application usage adds more work beyond importing generated declarations.

## Median multiplier by runtime

| Runtime | Instantiations | Check time | Memory |
| --- | ---: | ---: | ---: |
| ArkType | 1.08× | 1.50× | 1.03× |
| Client only | 1.56× | 1.38× | 0.98× |
| Effect | 1.37× | 1.15× | 1.02× |
| Effect 3 | 1.06× | 1.08× | 1.00× |
| TypeBox | 1.38× | 1.15× | 1.09× |
| Typia | 3.03× | 0.94× | 1.04× |
| Valibot | 1.07× | 1.02× | 1.05× |
| Zod 4 | 3.26× | 2.90× | 1.51× |
| Zod 3 | 3.26× | 2.12× | 1.46× |

## Per-schema comparison

| Schema | Runtime | Baseline instantiations | Usage instantiations | Usage / baseline | Baseline check time | Usage check time | Usage / baseline | Baseline memory | Usage memory | Usage / baseline |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| docker.openapi | ArkType | 507,949 | 548,406 | 1.08× | 0.720 s | 1.080 s | 1.50× | 213,370 KB | 203,213 KB | 0.95× |
| docker.openapi | Client only | 4,270 | 6,665 | 1.56× | 0.130 s | 0.090 s | 0.69× | 84,054 KB | 75,957 KB | 0.90× |
| docker.openapi | Effect | 66,066 | 91,577 | 1.39× | 0.600 s | 0.620 s | 1.03× | 212,766 KB | 236,210 KB | 1.11× |
| docker.openapi | Effect 3 | 234,110 | 248,672 | 1.06× | 0.720 s | 0.780 s | 1.08× | 344,728 KB | 355,705 KB | 1.03× |
| docker.openapi | TypeBox | 111,527 | 155,704 | 1.40× | 0.310 s | 0.580 s | 1.87× | 154,406 KB | 152,153 KB | 0.99× |
| docker.openapi | Typia | 5,636 | 17,092 | 3.03× | 0.180 s | 0.170 s | 0.94× | 98,448 KB | 89,381 KB | 0.91× |
| docker.openapi | Valibot | 277,637 | 297,370 | 1.07× | 0.900 s | 0.730 s | 0.81× | 157,513 KB | 174,224 KB | 1.11× |
| docker.openapi | Zod 4 | 65,155 | 212,479 | 3.26× | 0.290 s | 1.370 s | 4.72× | 124,940 KB | 188,053 KB | 1.51× |
| docker.openapi | Zod 3 | 65,110 | 212,434 | 3.26× | 0.260 s | 0.550 s | 2.12× | 124,945 KB | 207,255 KB | 1.66× |
| kombo.openapi | ArkType | 1,770,505 | 1,841,469 | 1.04× | 2.060 s | 4.400 s | 2.14× | 427,830 KB | 438,596 KB | 1.03× |
| kombo.openapi | Client only | 4,680 | 8,843 | 1.89× | 0.080 s | 0.110 s | 1.38× | 110,257 KB | 119,057 KB | 1.08× |
| kombo.openapi | Effect | 124,980 | 164,858 | 1.32× | 2.610 s | 3.000 s | 1.15× | 307,208 KB | 280,879 KB | 0.91× |
| kombo.openapi | Effect 3 | 984,437 | 1,017,522 | 1.03× | 3.420 s | 2.990 s | 0.87× | 555,078 KB | 542,458 KB | 0.98× |
| kombo.openapi | TypeBox | 151,509 | 208,360 | 1.38× | 0.960 s | 0.850 s | 0.89× | 152,946 KB | 208,574 KB | 1.36× |
| kombo.openapi | Typia | 7,597 | 33,919 | 4.46× | 0.280 s | 0.300 s | 1.07× | 113,320 KB | 131,874 KB | 1.16× |
| kombo.openapi | Valibot | 646,803 | 680,712 | 1.05× | 1.980 s | 2.010 s | 1.02× | 285,230 KB | 252,607 KB | 0.89× |
| kombo.openapi | Zod 4 | 273,911 | 411,455 | 1.50× | 0.840 s | 1.470 s | 1.75× | 305,790 KB | 330,595 KB | 1.08× |
| kombo.openapi | Zod 3 | 273,663 | 411,202 | 1.50× | 0.750 s | 1.110 s | 1.48× | 291,399 KB | 360,240 KB | 1.24× |
| petstore | ArkType | 45,911 | 52,163 | 1.14× | 0.170 s | 0.210 s | 1.24× | 133,538 KB | 141,597 KB | 1.06× |
| petstore | Client only | 3,034 | 4,245 | 1.40× | 0.060 s | 0.100 s | 1.67× | 77,793 KB | 76,419 KB | 0.98× |
| petstore | Effect | 9,926 | 13,564 | 1.37× | 0.130 s | 0.160 s | 1.23× | 164,647 KB | 168,292 KB | 1.02× |
| petstore | Effect 3 | 18,772 | 21,901 | 1.17× | 0.150 s | 0.170 s | 1.13× | 266,305 KB | 265,614 KB | 1.00× |
| petstore | TypeBox | 15,365 | 20,304 | 1.32× | 0.130 s | 0.150 s | 1.15× | 105,039 KB | 114,383 KB | 1.09× |
| petstore | Typia | 3,532 | 6,418 | 1.82× | 0.120 s | 0.110 s | 0.92× | 76,884 KB | 79,886 KB | 1.04× |
| petstore | Valibot | 28,603 | 33,042 | 1.16× | 0.180 s | 0.210 s | 1.17× | 113,461 KB | 119,476 KB | 1.05× |
| petstore | Zod 4 | 6,676 | 96,792 | 14.50× | 0.100 s | 0.290 s | 2.90× | 86,671 KB | 157,234 KB | 1.81× |
| petstore | Zod 3 | 6,631 | 96,747 | 14.59× | 0.110 s | 0.280 s | 2.55× | 84,867 KB | 123,708 KB | 1.46× |

Check-time ratios are more sensitive to machine noise than instantiations; use the five-run medians and prioritize instantiation trends when evaluating changes.

- [Generated snapshot baseline](typecheck-benchmarks.generated.md)
- [API-client usage benchmark](typecheck-benchmarks.usage.md)
