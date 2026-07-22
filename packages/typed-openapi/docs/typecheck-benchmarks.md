# Type-check benchmark comparison

Usage-to-baseline multipliers isolate the additional compiler work caused by typed API-client calls. Higher values mean application usage adds more work beyond importing generated declarations.

## Median multiplier by runtime

| Runtime | Instantiations | Check time | Memory |
| --- | ---: | ---: | ---: |
| ArkType | 1.08× | 1.03× | 1.03× |
| Client only | 1.56× | 1.75× | 1.05× |
| Effect | 1.37× | 1.31× | 1.03× |
| Effect 3 | 1.06× | 1.15× | 1.01× |
| TypeBox | 1.38× | 1.01× | 1.02× |
| Typia | 3.03× | 1.43× | 1.01× |
| Valibot | 1.07× | 1.09× | 1.04× |
| Zod 4 | 3.26× | 2.46× | 1.50× |
| Zod 4 — direct any | 1.00× | 0.71× | 0.99× |
| Zod 4 — direct any + ts-nocheck | Infinity× | Infinity× | 1.00× |
| Zod 4 — forced cast | 1.00× | 1.28× | 1.01× |
| Zod 4 — forced cast + ts-nocheck | Infinity× | Infinity× | 1.00× |
| Zod 4 — ts-nocheck | Infinity× | Infinity× | 1.00× |
| Zod 3 | 3.26× | 2.50× | 1.43× |

## Per-schema comparison

| Schema | Runtime | Baseline instantiations | Usage instantiations | Usage / baseline | Baseline check time | Usage check time | Usage / baseline | Baseline memory | Usage memory | Usage / baseline |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| cloudflare | Zod 4 — direct any | 548,709 | 550,386 | 1.00× | 43.840 s | 31.050 s | 0.71× | 1,095,696 KB | 1,086,366 KB | 0.99× |
| cloudflare | Zod 4 — direct any + ts-nocheck | 0 | 1,924 | Infinity× | 0.000 s | 0.060 s | Infinity× | 357,780 KB | 356,789 KB | 1.00× |
| cloudflare | Zod 4 — forced cast | 10,183,789 | 10,185,385 | 1.00× | 53.170 s | 68.240 s | 1.28× | 3,767,152 KB | 3,800,902 KB | 1.01× |
| cloudflare | Zod 4 — forced cast + ts-nocheck | 0 | 1,924 | Infinity× | 0.000 s | 0.060 s | Infinity× | 404,130 KB | 404,477 KB | 1.00× |
| cloudflare | Zod 4 — ts-nocheck | 0 | 1,924 | Infinity× | 0.000 s | 0.060 s | Infinity× | 355,284 KB | 353,843 KB | 1.00× |
| docker.openapi | ArkType | 507,949 | 548,406 | 1.08× | 0.920 s | 0.660 s | 0.72× | 213,948 KB | 203,045 KB | 0.95× |
| docker.openapi | Client only | 4,270 | 6,665 | 1.56× | 0.090 s | 0.250 s | 2.78× | 84,186 KB | 75,097 KB | 0.89× |
| docker.openapi | Effect | 66,066 | 91,577 | 1.39× | 0.590 s | 0.770 s | 1.31× | 212,115 KB | 235,153 KB | 1.11× |
| docker.openapi | Effect 3 | 234,110 | 248,672 | 1.06× | 0.800 s | 0.970 s | 1.21× | 347,053 KB | 361,086 KB | 1.04× |
| docker.openapi | TypeBox | 111,527 | 155,704 | 1.40× | 0.350 s | 0.440 s | 1.26× | 154,088 KB | 157,067 KB | 1.02× |
| docker.openapi | Typia | 5,636 | 17,092 | 3.03× | 0.120 s | 0.200 s | 1.67× | 98,501 KB | 90,790 KB | 0.92× |
| docker.openapi | Valibot | 277,637 | 297,370 | 1.07× | 0.570 s | 0.840 s | 1.47× | 157,787 KB | 176,492 KB | 1.12× |
| docker.openapi | Zod 4 | 65,155 | 212,479 | 3.26× | 0.240 s | 0.590 s | 2.46× | 124,478 KB | 186,653 KB | 1.50× |
| docker.openapi | Zod 3 | 65,110 | 212,434 | 3.26× | 0.310 s | 1.100 s | 3.55× | 124,904 KB | 217,981 KB | 1.75× |
| kombo.openapi | ArkType | 1,770,505 | 1,841,469 | 1.04× | 2.680 s | 2.750 s | 1.03× | 430,870 KB | 477,897 KB | 1.11× |
| kombo.openapi | Client only | 4,680 | 8,843 | 1.89× | 0.080 s | 0.140 s | 1.75× | 111,858 KB | 119,102 KB | 1.06× |
| kombo.openapi | Effect | 124,980 | 164,858 | 1.32× | 1.540 s | 2.200 s | 1.43× | 307,151 KB | 280,367 KB | 0.91× |
| kombo.openapi | Effect 3 | 984,437 | 1,017,522 | 1.03× | 3.800 s | 3.190 s | 0.84× | 550,263 KB | 553,277 KB | 1.01× |
| kombo.openapi | TypeBox | 151,509 | 208,360 | 1.38× | 0.850 s | 0.860 s | 1.01× | 201,706 KB | 192,987 KB | 0.96× |
| kombo.openapi | Typia | 7,597 | 33,919 | 4.46× | 0.260 s | 0.330 s | 1.27× | 121,330 KB | 147,674 KB | 1.22× |
| kombo.openapi | Valibot | 646,803 | 680,712 | 1.05× | 1.390 s | 1.520 s | 1.09× | 284,285 KB | 252,189 KB | 0.89× |
| kombo.openapi | Zod 4 | 273,911 | 411,455 | 1.50× | 0.850 s | 0.840 s | 0.99× | 290,992 KB | 330,312 KB | 1.14× |
| kombo.openapi | Zod 3 | 273,663 | 411,202 | 1.50× | 0.860 s | 1.070 s | 1.24× | 304,762 KB | 317,951 KB | 1.04× |
| petstore | ArkType | 45,911 | 52,163 | 1.14× | 0.150 s | 0.180 s | 1.20× | 137,322 KB | 141,720 KB | 1.03× |
| petstore | Client only | 3,034 | 4,245 | 1.40× | 0.060 s | 0.060 s | 1.00× | 72,935 KB | 76,472 KB | 1.05× |
| petstore | Effect | 9,926 | 13,564 | 1.37× | 0.130 s | 0.140 s | 1.08× | 164,731 KB | 169,331 KB | 1.03× |
| petstore | Effect 3 | 18,772 | 21,901 | 1.17× | 0.130 s | 0.150 s | 1.15× | 264,483 KB | 265,718 KB | 1.00× |
| petstore | TypeBox | 15,365 | 20,304 | 1.32× | 0.180 s | 0.150 s | 0.83× | 107,057 KB | 109,897 KB | 1.03× |
| petstore | Typia | 3,532 | 6,418 | 1.82× | 0.070 s | 0.100 s | 1.43× | 77,924 KB | 78,339 KB | 1.01× |
| petstore | Valibot | 28,603 | 33,042 | 1.16× | 0.140 s | 0.150 s | 1.07× | 114,814 KB | 119,433 KB | 1.04× |
| petstore | Zod 4 | 6,676 | 96,792 | 14.50× | 0.090 s | 0.280 s | 3.11× | 82,453 KB | 152,863 KB | 1.85× |
| petstore | Zod 3 | 6,631 | 96,747 | 14.59× | 0.100 s | 0.250 s | 2.50× | 86,312 KB | 123,084 KB | 1.43× |

Check-time ratios are more sensitive to machine noise than instantiations; use the five-run medians and prioritize instantiation trends when evaluating changes.

- [Generated snapshot baseline](typecheck-benchmarks.generated.md)
- [API-client usage benchmark](typecheck-benchmarks.usage.md)
