# C006 — apiKey schemes with invalid/missing `in` become incomplete entries

- **Status:** open
- **Severity:** medium
- **Introduced in:** `ovmnnqkq` — `fix(config/msw/security): satisfy exactOptionalPropertyTypes`
- **Files:** `packages/typed-openapi/src/security.ts`

## Comment

Under `exactOptionalPropertyTypes`, `in` / `paramName` / `description` are only assigned when defined. If `scheme.in` is missing or not `header|query|cookie`, the entry is still `supported: true` with no `in` / maybe no `paramName`. `applyAuth` then cannot place the key correctly, but typing still presents the credential as usable.

Prefer one of:

1. `supported: false` when `in`/`name` invalid (mirror mutualTLS), or
2. Default `in: "header"` only when OAS requires it and log/skip otherwise.

## Tests needed

- Unit: parse scheme with `type: apiKey` and bad/missing `in` → unsupported or explicit skip
- Integration: `applyAuth` no-ops / does not throw for such schemes
