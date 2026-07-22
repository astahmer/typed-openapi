# C006 — apiKey schemes with invalid/missing `in` become incomplete entries

- **Status:** resolved
- **Severity:** medium
- **Introduced in:** `ovmnnqkq` — `fix(config/msw/security): satisfy exactOptionalPropertyTypes`
- **Resolved in:** review follow-up — `fix(security): mark incomplete apiKey schemes unsupported`
- **Files:** `packages/typed-openapi/src/security.ts`

## Comment

Incomplete apiKey (`in` missing/invalid or empty `name`) stayed `supported: true`, so credentials looked usable while
`applyAuth` could only guess header.

## Resolution

`supported` requires valid `in` (`header|query|cookie`) and non-empty `name`. Still present on `AuthCredentials` with
“not applied automatically” docs; omitted from `applyAuth` body. Tests in `tests/review-fixes.test.ts`.
