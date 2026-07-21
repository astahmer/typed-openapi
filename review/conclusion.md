# PR review conclusion — resolved

All open findings from `lpxutqwu` → tip review are **addressed** in follow-up jj revisions (see `jj log` after
`pr review`).

Per-finding markdown files were deleted as each issue was fixed. Batch catalogs (`_batch*-notes.md`) remain for
archaeology.

## Fix revisions (newest last)

| Change                                                                        | Summary                                                                |
| ----------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `fix: restore .npmrc and generate fixtures before CI tsc`                     | **200**, **300**, **202**, **301**                                     |
| `fix: honor config booleans, tree-shake OAS not, validate filter regexes`     | **001**, **002**, **003**                                              |
| `fix: binary body guards, Effect withResponse status, TanStack Effect parity` | **101**, **102**, **201**, **302**                                     |
| `fix: arktype not, discriminator mapping across runtimes, typia tags`         | **004**, **005**, **204**                                              |
| docs/hygiene + SSE union + playground + kombo filters (this commit)           | **006**, **103**, **104**, **105**, **203**, **205**, **303**, **304** |

## Previously resolved in-stack

| Finding                                   | Resolved by                               |
| ----------------------------------------- | ----------------------------------------- |
| **100** requestFormat default-fetcher gap | `nyvnvqtr` (deleted at start of fix pass) |

## Residual known limitations (documented, not bugs)

See `plans/FOLLOWUPS.md` → **Known limitations**:

- `stripReadWrite` skips named `$ref` components
- SSE+JSON: types unioned; `responseFormat` stays `"sse"`
- effect3 tstyche param inference light (TS2589)
- Kombo typecheck still filters circular + TS2345 only

## Verdict

**Ready to ship** after CI green on the fixture-ordered workflow.
