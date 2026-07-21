# medium: kombo snapshot typecheck filters discard many TS error codes

- **status:** open
- **revision:** zuxosvxy (`test: typecheck every generated snapshot with tsc`)
- **resolved_by:**
- **paths:** packages/typed-openapi/tests/snapshots-typecheck.test.ts

## Comment

The new snapshot `tsc` gate filters out eight error codes for `kombo` snapshots (TS2456, TS7022, TS7024, TS2502, TS2345,
TS2322, TS2719, TS2536, TS2339). Those codes include assignment/circular/type-compatibility failures, not just
lazy-schema noise. A regression that introduces a real type error matching one of those codes in kombo output would not
fail CI.

## Evidence

```ts
const filterKomboNoise = (out: string): string =>
  out
    .split("\n")
    .filter((line) => {
      if (!line.includes("error TS")) return true;
      return !(
        line.includes("error TS2456") ||
        line.includes("error TS7022") ||
        // … TS2502, TS2345, TS2322, TS2719, TS2536, TS2339
      );
    })
```

Applied when the snapshot filename includes `"kombo"`:

```ts
const filtered = file.includes("kombo") ? filterKomboNoise(out) : filterClientNoise(out, runtime);
```
