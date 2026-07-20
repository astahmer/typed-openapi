# Adding a runtime adapter

1. Create `src/runtimes/<name>/index.ts` implementing `RuntimeAdapter` (`./types.ts`).
2. Register it in `./registry.ts`.
3. Add the name to `allowedRuntimes` in `generator.ts`.
4. Optional: add a subpath export in `package.json` + `tsup.config.ts`.

Historical Sinclair targets that are easy to reintroduce with the same IR:

- yup
- io-ts
- typebox
