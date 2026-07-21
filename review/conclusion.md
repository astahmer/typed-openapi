# Review conclusion — `lsptvpkn` → `@-`

Stack reviewed (oldest → newest):

| Rev | Summary |
|-----|---------|
| [`lsptvpkn`](./01-tanstack-lsptvpkn.md) | TanStack infinite / suspense / queryKey / invalidate |
| [`wrlxtsrx`](./02-msw-wrlxtsrx.md) | MSW handlers + mock factories |
| [`xtrymzyu`](./03-auth-xtrymzyu.md) | AuthCredentials + applyAuth / configureFetcher |
| [`outqxyoz`](./04-transform-outqxyoz.md) | date → Date, int64 → bigint |
| [`lmwyxumt`](./05-config-lmwyxumt.md) | defineConfig + TS/JS config load |
| [`wqrtlnum`](./06-docs-wqrtlnum.md) | README / changeset / snapshots / TS2322 filter |

No later revision fully fixed an earlier behavioral finding. Only **DOC-3** (snapshot churn) is marked resolved.

---

## Unsolved issues (priority)

### High

| ID | Topic | Link |
|----|--------|------|
| **CFG-1** | `tsx` not shipped; TS config fails for published consumers | [05-config](./05-config-lmwyxumt.md#cfg-1--high--tsx-is-only-a-devdependency) |
| **XF-1** | `none` + `transformBigInt` types ≠ runtime | [04-transform](./04-transform-outqxyoz.md#xf-1--high--none--transformbigint-types-lie-at-runtime) |

### Medium

| ID | Topic | Link |
|----|--------|------|
| **TS-1** | `queryKeyFactory.all` does not invalidate endpoint keys | [01-tanstack](./01-tanstack-lsptvpkn.md#ts-1--medium--querykeyfactoryall-does-not-match-real-keys) |
| **MSW-1** | `$ref` stubs empty; `doc` unused | [02-msw](./02-msw-wrlxtsrx.md#msw-1--medium--ref-stubs-are-empty-placeholders) |
| **AUTH-1** | Double `Bearer ` if token already prefixed | [03-auth](./03-auth-xtrymzyu.md#auth-1--medium--always-prefixes-bearer-) |
| **AUTH-2** | `mutualTLS` / unknown → Bearer | [03-auth](./03-auth-xtrymzyu.md#auth-2--medium--mutualtls--unknown-schemes-fall-through-to-bearer) |
| **XF-2** | Heuristic `__reviveDates` false positives | [04-transform](./04-transform-outqxyoz.md#xf-2--medium--revivedates-is-heuristic-false-positives) |
| **XF-3** | typebox / typia ignore transform flags | [04-transform](./04-transform-outqxyoz.md#xf-3--medium--typebox--typia-ignore-transform-flags) |
| **CFG-2** | Config `input` unused | [05-config](./05-config-lmwyxumt.md#cfg-2--medium--input-in-config-schema-is-unused) |
| **DOC-1** | Global `TS2322` filter too broad | [06-docs](./06-docs-wqrtlnum.md#doc-1--medium--broad-ts2322-filter-may-hide-real-regressions) |

### Low / nits / enhancements

| ID | Topic | Link |
|----|--------|------|
| TS-2 | Duplicate `callExpr` / `infiniteCallExpr` | [01](./01-tanstack-lsptvpkn.md#ts-2--low--callexpr--infinitecallexpr-are-identical) |
| TS-3 | Duplicated suspense vs query options | [01](./01-tanstack-lsptvpkn.md#ts-3--low--suspensequeryoptions-duplicates-queryoptions) |
| TS-4 | Mutation `invalidate` vs query cache | [01](./01-tanstack-lsptvpkn.md#ts-4--low--mutation-invalidate-uses-mutationkey-as-a-query-key) |
| MSW-2 | `void factoryNames` | [02](./02-msw-wrlxtsrx.md#msw-2--low--void-factorynames-leftover) |
| MSW-3 | `baseUrl: "*"` DX | [02](./02-msw-wrlxtsrx.md#msw-3--low--default-baseurl--path-joining) |
| MSW-5 | No override / error handlers | [02](./02-msw-wrlxtsrx.md#msw-5--suggestion--no-override--error-handlers) |
| AUTH-3 | Cookie value encoding | [03](./03-auth-xtrymzyu.md#auth-3--low--cookie-apikey-values-not-encoded) |
| AUTH-4 | Non-basic http → Bearer | [03](./03-auth-xtrymzyu.md#auth-4--low--non-basic-http-schemes-treated-as-bearer) |
| AUTH-6 | No per-operation security | [03](./03-auth-xtrymzyu.md#auth-6--suggestion--no-operation-level-security-filtering) |
| XF-4 | Invalid Date vs parse error | [04](./04-transform-outqxyoz.md#xf-4--low--invalid-date-strings-become-invalid-date) |
| CFG-3 | CLI requires positional input | [05](./05-config-lmwyxumt.md#cfg-3--low--cli-still-requires-input-positional) |
| CFG-5 | `?t=` cache bust | [05](./05-config-lmwyxumt.md#cfg-5--low--dynamic-import-cache-bust-t) |
| DOC-2 | README missing caveats | [06](./06-docs-wqrtlnum.md#doc-2--low--readme-config-example-omits-caveats) |

---

## Suggested fix order

1. **CFG-1** — ship or peer `tsx` (unblocks TS config promise in README)
2. **XF-1** / **XF-3** — document unsupported combos or implement/guard
3. **TS-1** — fix key shape or demote `all`
4. **MSW-1** — resolve refs from `doc`
5. **AUTH-1** / **AUTH-2** — Bearer prefix + skip unsupported schemes
6. **DOC-1** — narrow TS2322 allowlist
7. Nits (TS-2, MSW-2, …)

---

## Test follow-ups in this pass

Coverage gaps called out as TS-5 / MSW-4 / AUTH-5 / XF-5 / CFG-4 are filled by additional unit /
integration / e2e tests in subsequent jj revisions on this branch. Those tests lock current behavior; they
do not close the medium/high product issues above.
