import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import { safeJSONParse } from "pastable";
import { rollup } from "rollup";
import dts from "rollup-plugin-dts";
import type { PackageJson } from "type-fest";

/**
 * Bundles monaco ExtraLib d.ts files for playground runtimes.
 * Effect stubs are maintained by hand in `./declarations/effect*.d.ts`
 * (full effect bundle is huge; playground uses noSemanticValidation).
 */
const getDeps = (pkg: PackageJson) =>
  Object.keys(pkg.dependencies ?? {}).concat(Object.keys(pkg.peerDependencies ?? {}));

const getPkg = async (name: string) =>
  safeJSONParse<PackageJson>(await readFile(`./node_modules/${name}/package.json`, "utf8"));

const getTypesDeclaration = async (name: string) => {
  const pkg = await getPkg(name);
  const types = pkg.types ?? pkg.typings ?? "index.d.ts";
  const input = path.resolve("./node_modules/", name, types);
  if (!input) return;

  console.log(`Bundling "${name}"...`);
  const bundle = await rollup({
    input,
    plugins: [dts({ respectExternal: true })],
    external: (id) => getDeps(pkg).includes(id),
  });
  const result = await bundle.generate({});

  return result.output[0].code;
};

const rollupRuntimes = ["zod", "arktype", "valibot"] as const;

const getDeclarationFiles = async () => {
  const declarations = await Promise.all(
    rollupRuntimes.map(async (runtime) => ({
      name: runtime,
      code: await getTypesDeclaration(runtime),
    })),
  );

  return declarations.filter((declaration) => Boolean(declaration.code));
};

console.log("Starting to bundle runtimes...");
const declarations = await getDeclarationFiles();
await Promise.all(
  declarations.map((result) => {
    console.log("Writing declaration file for", result.name);
    return writeFile(`./declarations/${result.name}.d.ts`, result.code!, "utf8");
  }),
);

console.log("Done! (effect/effect3 stubs are hand-maintained)");
