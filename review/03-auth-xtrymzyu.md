# Review: `xtrymzyu` — feat(auth)

**Change:** `feat(auth): emit AuthCredentials + applyAuth from OAS securitySchemes`

**Files:** `security.ts`, `default-fetcher.generator.ts`, wiring, unit + e2e tests

---

## Summary

Parses `components.securitySchemes` into `AuthCredentials` + `applyAuth`, and wires
`configureFetcher({ getAuth })` into the default fetcher when schemes exist. Good ergonomics for apiKey /
http / oauth2 / openIdConnect happy paths.

---

## Comments

### AUTH-1 · medium · always prefixes `Bearer `

**File:** `security.ts` (~L112–113)

```ts
headers.set("Authorization", "Bearer " + auth[key]);
```

If callers pass an already-prefixed token (`"Bearer xxx"`), they get `Bearer Bearer xxx`.
Detect prefix or document that raw tokens only are expected (README example uses raw — OK if documented).

**Status:** open

---

### AUTH-2 · medium · `mutualTLS` / unknown schemes fall through to Bearer

**File:** `security.ts` (~L62 + default branch ~L112)

`mutualTLS` and other types are pushed into the list, then `applyAuth` treats them as Bearer.
Misleading. Skip emit for unsupported schemes, or no-op with a comment.

**Status:** open

---

### AUTH-3 · low · cookie apiKey values not encoded

**File:** `security.ts` (~L92–97)

Cookie part is concatenated raw. Prefer `encodeURIComponent` for values (and maybe names).

**Status:** open

---

### AUTH-4 · low · non-basic `http` schemes treated as Bearer

**File:** `security.ts`

`http` + `digest` (etc.) hit the Bearer default. Only `basic` is special-cased. Skip or warn for others.

**Status:** open

---

### AUTH-5 · test gap · configureFetcher + fetch integration

e2e covers `applyAuth` in isolation (good). Missing: generated default fetcher with `configureFetcher` actually
attaching headers on a real `fetch` call (MSW or mock).

**Status:** resolved (fetcher e2e + cookie/Bearer cases added; AUTH-1..4 remain open)

---

### AUTH-6 · suggestion · no operation-level `security` filtering

All provided credentials are applied every request. Spec allows per-operation security. Acceptable for v1;
document that `getAuth` is global.

**Status:** open (enhancement / docs)

---

## Later revisions

No later rev changes auth semantics — **none resolved**.

---

## Verdict

Approve with follow-ups on **AUTH-1** and **AUTH-2**.
