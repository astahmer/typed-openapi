# nit: playground defaults client=promise while generator defaults effect for effect runtimes

- **status:** open
- **revision:** xzkstnnw (`feat(web): playground controls for validation, client, validate-side, coerce`)
- **resolved_by:**
- **paths:** packages/web/src/Playground/Playground.machine.ts, packages/web/src/pages/Home.tsx

## Comment

The playground exposes a `client: promise | effect` control but initializes `client: "promise"` even when users pick an
Effect runtime. CLI / `generateFile` defaults to `client: "effect"` when `runtime` is `effect` or `effect3`. Playground
output therefore diverges from CLI defaults until the user manually switches client, which makes the live demo
misleading for Effect-first workflows.

## Evidence

Playground initial context:

```ts
runtime: "none",
client: "promise",
```

Generator default (`generator.ts`, unchanged in this batch):

```ts
client: options.client ?? (runtime === "effect" || runtime === "effect3" ? "effect" : "promise"),
```

The toolbar renders `SelectOptions<ClientKind>` only when `runtime !== "none"`, but never syncs `client` when runtime
changes to `effect` / `effect3`.
