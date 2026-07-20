# Effect Schema runtime for typed-openapi

## Goal

Add `--runtime effect` so typed-openapi emits **Effect 4** Schema codecs
(`import { Schema } from "effect"`), not legacy `@effect/schema`.

Consumers (e.g. emi-healthfit Hevy client) can then regenerate with runtime
validation instead of types-only.

## Context

Runtimes are wired in [`packages/typed-openapi/src/generator.ts`](../packages/typed-openapi/src/generator.ts):

| Piece | Role |
| --- | --- |
| `allowedRuntimes` | arktype union of CLI/runtime names |
| `runtimeValidationGenerator` | maps runtime → `@sinclair/typebox-codegen` `ModelTo*` |
| `inferByRuntime` | how endpoint types infer from schema consts |
| `replacerByRuntime` | post-process generated schema/endpoint blocks (zod/yup today) |
| `generateFile` | TS types → `TypeScriptToModel` → `ModelTo*` when runtime ≠ `none` |

Snapshot coverage: [`packages/typed-openapi/tests/generate-runtime.test.ts`](../packages/typed-openapi/tests/generate-runtime.test.ts)
→ `tests/snapshots/{petstore,long-operation-id,docker.openapi}.{runtime}.ts`.

`@sinclair/typebox-codegen@0.11.1` already exposes `Codegen.ModelToEffect.Generate`.
Its raw output targets **legacy** packages:

```ts
import { Schema as ET } from "@effect/schema/Schema";
import { Schema as ES } from "@effect/schema";

export type Pet = ET.Type<typeof Pet>;
export const Pet = ES.Struct({
  id: ES.Number,
  name: ES.String,
  tag: ES.optional(ES.Union(ES.String, ES.Null)),
});
```

Modern Effect 4 (and emi-healthfit) use:

```ts
import { Schema } from "effect";

export const Pet = Schema.Struct({
  id: Schema.Number,
  name: Schema.String,
  tag: Schema.optional(Schema.NullOr(Schema.String)),
});
export type Pet = typeof Pet.Type;
```

## Approach

1. Add `"effect"` to `allowedRuntimes`.
2. Wire `runtimeValidationGenerator.effect = Codegen.ModelToEffect.Generate`
   (same pipeline as zod/valibot).
3. Add `inferByRuntime.effect` consistent with post-processed exports
   (prefer `typeof X.Type` or `Schema.Schema.Type<typeof …>` — pick one and use
   it everywhere, including `InferTEndpoint`).
4. Add `replacerByRuntime.effect` and/or a dedicated post-pass that rewrites
   ModelToEffect output to Effect 4:
   - Single import: `import { Schema } from "effect"`.
   - Drop dual `ET` / `ES` imports; rewrite `ES.*` → `Schema.*`.
   - Type alias: `export type Pet = typeof Pet.Type` (or `Schema.Schema.Type<typeof Pet>`).
   - `Schema.Union(a, b, …)` → `Schema.Union([a, b, …])`.
   - Prefer `Schema.NullOr(T)` when the union is exactly `T | null`.
   - Map `.pipe(ES.minLength(n))` / `maxLength` / `minItems` / `maxItems` /
     numeric bounds / `multipleOf` to Effect 4 `.check(Schema.isMinLength(n))`
     (etc.). Verify against the `effect` major added as a typedapi **devDependency**;
     do not leave broken filter APIs in snapshots.
   - `ES.Int` → `Schema.Int` (confirm exists on that Effect version).
5. Include `"effect"` in the `InferTEndpoint` `match(...)` branch in
   `generateApiClient` (same group as zod / arktype).
6. Document that consumers must install `effect` when using `--runtime effect`
   (optional `peerDependencies` + README note).
7. Update root README CLI runtime list, package keywords, and the web playground
   if it surfaces runtime options.
8. Regenerate snapshots:
   - `petstore.effect.ts`
   - `long-operation-id.effect.ts`
   - `docker.openapi.effect.ts`
   Skip docker only if generation OOMs/fails; document why (same pattern as
   arktype skip for docker).
9. Add a small fixture test that `generateFile({ runtime: "effect" })` for a
   tiny schema typechecks against `effect`, or at least that snapshot imports
   resolve.
10. Changeset + CHANGELOG (minor): `Add --runtime effect (Effect Schema / Effect 4)`.

## Out of scope

- Changes to emi-healthfit / Hevy integration.
- Upstream rewrite of typebox-codegen (post-process in typed-openapi is enough
  unless gaps are severe; if severe, open an upstream PR to `ModelToEffect` and
  note it here).

## Acceptance criteria

- [ ] `typed-openapi <spec> --runtime effect` works on the petstore sample.
- [ ] Effect snapshots committed; `pnpm test` green for generate-runtime suite.
- [ ] Generated code imports from `"effect"` and typechecks with Effect 4 Schema.
- [ ] README documents `--runtime effect`.
- [ ] Changeset published path clear for a minor release.

## Implementation checklist (file pointers)

- [`packages/typed-openapi/src/generator.ts`](../packages/typed-openapi/src/generator.ts) — runtime wiring
- [`packages/typed-openapi/src/cli.ts`](../packages/typed-openapi/src/cli.ts) — help text via `allowedRuntimes`
- [`packages/typed-openapi/tests/generate-runtime.test.ts`](../packages/typed-openapi/tests/generate-runtime.test.ts)
- [`packages/typed-openapi/tests/snapshots/`](../packages/typed-openapi/tests/snapshots/)
- [`packages/typed-openapi/package.json`](../packages/typed-openapi/package.json) — keywords, peer/devDeps
- [`README.md`](../README.md)

## Decisions log

| Date | Decision | Rationale |
| --- | --- | --- |
| 2026-07-20 | Target Effect 4 `"effect"` Schema, not `@effect/schema`. | Matches current Effect packaging and consumer apps. |
| 2026-07-20 | Use ModelToEffect + post-process rather than a custom emitter. | Same pattern as other runtimes; fastest path. |
