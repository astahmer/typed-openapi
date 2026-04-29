---
"typed-openapi": patch
---

Fix GitHub Actions installs for `oxfmt` by forcing pnpm to reinstall optional dependencies, which ensures the native formatter binding is present before build and test steps.
