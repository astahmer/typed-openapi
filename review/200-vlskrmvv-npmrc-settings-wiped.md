# high: `.npmrc` monorepo settings accidentally removed

- **status:** open
- **revision:** vlskrmvv (`chore: nest effect@3 under @effect/schema for dual majors`)
- **resolved_by:**
- **paths:** `.npmrc`

## Comment

Revision adds `dedupe-peer-dependents=false` but **replaces** the entire `.npmrc` instead of appending. The following
settings are gone:

- `save-exact=true`
- `prefer-offline=true`
- `strict-peer-dependencies=false`
- `resolve-peers-from-workspace-root=true`
- `enable-pre-post-scripts=true`
- `auto-install-peers=false` (with comment about optional typed-openapi peers)

None of the later revisions in this batch restore them. Current tree is a one-line file.

**Impact:** Looser peer resolution, caret ranges may creep in despite lockfile, and optional runtime peers may
auto-install in consumer projects — opposite of the documented intent in the deleted comment.

**Fix:** Restore prior contents and add `dedupe-peer-dependents=false` on its own line.

## Evidence

```diff
-save-exact=true
-prefer-offline=true
-strict-peer-dependencies=false
-resolve-peers-from-workspace-root=true
-enable-pre-post-scripts=true
-auto-install-peers=false
+dedupe-peer-dependents=false
```

Current `.npmrc` (post-batch):

```
dedupe-peer-dependents=false
```
