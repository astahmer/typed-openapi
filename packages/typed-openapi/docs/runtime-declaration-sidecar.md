# Runtime declaration sidecar

Runtime clients generate a sibling `.types.d.ts` file by default. Set `runtimeTypes: false` or pass `--no-runtime-types` to opt out. The generated runtime module imports that sidecar for its public schema and API-client types, and starts with `// @ts-nocheck` so TypeScript does not spend time checking the large validator implementation.

This option is ignored for `runtime: "none"`: types-only clients already have no runtime validator implementation to skip.

## Why this design

The frozen Cloudflare OpenAPI fixture was used to compare five Zod runtime outputs. The generated-module and API-client-usage benchmark both showed that `// @ts-nocheck` is the decisive change: it removes semantic checking of the generated validator implementation while the public aliases still come from the `.types.d.ts` sidecar.

| Strategy | Generated check | Usage check | Result |
| --- | ---: | ---: | --- |
| Direct `: any` | 43.84 s | 31.05 s | Still checks validator expressions |
| `// @ts-nocheck` | 0 s | 0.06 s | Selected |
| Direct `: any` + `// @ts-nocheck` | 0 s | 0.06 s | No advantage over no-check alone |
| Forced runtime cast | 53.17 s | 68.24 s | Much more instantiation work |
| Forced cast + `// @ts-nocheck` | 0 s | 0.06 s | No advantage over no-check alone |

The generated module’s runtime expressions are intentionally not semantically checked by TypeScript. Runtime validation still executes normally. Consumers still receive strict exported schema aliases and API-client route types from the sidecar; this is covered by the generated consumer typecheck test.

Keep the generated `.types.d.ts` beside its runtime module when copying or publishing generated output. The performance result also relies on `skipLibCheck`: without it, TypeScript will type-check the large declaration sidecar itself.

Run `pnpm --filter typed-openapi bench:typecheck` to regenerate the reports. The Cloudflare modules are generated on demand from the versioned fixture rather than committed as large derived snapshots.
