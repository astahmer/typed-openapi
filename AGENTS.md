# typed-openapi agent guidance

This repository is a pnpm monorepo. The library and most implementation work
live in `packages/typed-openapi`; `docs/` and `packages/web/` are separate
surfaces with their own commands.

## Version control

- Jujutsu (`jj`) is the primary version-control interface.
- Before changing anything, inspect `jj status`, `jj diff`, and the nearby
  revision log. Preserve unrelated existing changes and concurrent work.
- Split completed work into focused revisions by concern: implementation,
  regression tests, generated snapshots, and mechanical formatting should not
  be mixed without a reason. Give every revision a concise description with an
  explicit non-interactive command such as `jj describe -m` or `jj new -m`.
- Do not rewrite another workspace or move another agent's head. If concurrent
  work is present, use a new jj workspace and merge only after reviewing the
  resulting ancestry and conflicts.
- Leave finished work described and, when practical, leave an empty `wip`
  working-copy revision above the reviewed stack.

## Repository and toolchain

- Use the pinned pnpm version from `package.json` and run library commands from
  `packages/typed-openapi`, or use `pnpm --dir packages/typed-openapi ...` from
  the repository root.
- The library is TypeScript ESM and emits clients for Zod 4, Zod 3, Effect
  Schema v4, Effect Schema v3, Valibot, ArkType, TypeBox, and Typia.
- Use `rg` for targeted search and `ast-outline` for code structure and symbol
  exploration before reading large files.
- Use Oxfmt on touched TypeScript and fixture files. Avoid unrelated formatting
  churn, needless exports, one-use helper extraction, and comments that only
  narrate obvious code; keep comments for invariants and non-obvious tradeoffs.

## OpenAPI and schema semantics

- Treat OpenAPI and JSON Schema semantics as contracts, not approximations.
  Preserve distinctions between omitted values and explicit `true`/`false`
  schemas, especially for `additionalProperties`, `items`, combinators,
  `patternProperties`, and empty schemas. Exception: omitted
  `additionalProperties` on objects with named properties defaults to `false`
  (closed objects). Opt into the spec default with `openapi.additionalPropertiesDefault`
  / `--openapi-additional-properties-default`. Property-less `{ type: object }` stays a
  free-form record unless `additionalProperties` is explicitly `false`. Closed `allOf`
  members compose: combined keys are accepted and true extras are rejected.
- Audit behavior at the semantic boundaries: recursive references and deferred
  runtime sidecars, `allOf`/`oneOf`/`anyOf`, exact versus open objects, wildcard
  response status ranges, case-insensitive media types, and path/query/header/
  cookie serialization styles.
- Keep generic schema lowering and endpoint semantics in the IR/generator
  layer. Keep runtime-library syntax and workarounds inside the owning runtime
  adapter or emitted runtime helper.
- A suspected bug is not complete until a focused test reproduces the failure
  before the fix and verifies invalid, boundary, and non-happy-path inputs in
  addition to the reported happy path.

## Runtime matrix and generated code

- Changes to schema IR, generator output, validation policy, or shared emitted
  helpers must be evaluated across every affected runtime, not only Zod.
  Include both direct adapter tests and generated-client tests when the bug is
  observable in generated code.
- Runtime-specific differences are intentional only when the OpenAPI contract
  requires them. Check both runtime acceptance and rejection; TypeScript
  assignability alone is not runtime validation.
- Runtime clients may emit a `.types.d.ts` sidecar. Keep sidecar declarations,
  generated implementation files, and their consumer typechecks consistent.
- Generated snapshots and fixtures are contracts. Regenerate them with the
  repository scripts or snapshot update flow, inspect the diff, and do not
  hand-edit generated output to conceal a source or typecheck failure.

## Validation

From `packages/typed-openapi`:

- Fast focused feedback:
  `pnpm exec vitest run tests/<file>.test.ts --reporter=dot --no-file-parallelism --maxWorkers=1`
- Authoritative package typecheck: `pnpm run typecheck:ci`
- Unit suite: `pnpm run test:unit`
- Generated type fixtures: `pnpm run test:types`
- Runtime integration matrix: `pnpm run test:matrix:integration`
- Runtime generated type matrix: `pnpm run test:matrix:typecheck`
- Fetch/runtime smoke tests: `pnpm run test:runtime`
- Full package gate: `pnpm run test:all`
- Package build: `pnpm run build`

Run focused tests first, then the broadest relevant gates. For HTTP client
behavior, use the real generated client and runtime validator, with MSW only at
the network boundary. For generator changes, run snapshot tests and generated
consumer typechecks; for runtime changes, cover all supported adapters affected
by the shared semantics.

## Documentation

When changing `docs/`, preserve the existing Starlight UI and product behavior.
Run `pnpm --dir docs test`, `pnpm --dir docs check`, and `pnpm --dir docs build`.
Local build or source checks do not prove deployed public behavior; only claim
live endpoint or deployment verification after performing the corresponding
redeploy and endpoint checks.
