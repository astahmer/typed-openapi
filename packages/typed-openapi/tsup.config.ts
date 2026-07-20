import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  entryPoints: [
    "src/cli.ts",
    "src/index.ts",
    "src/node.export.ts",
    "src/pretty.export.ts",
    "src/runtimes.export.ts",
    "src/runtimes/zod.export.ts",
    "src/runtimes/zod3.export.ts",
    "src/runtimes/effect.export.ts",
    "src/runtimes/effect3.export.ts",
    "src/runtimes/valibot.export.ts",
    "src/runtimes/arktype.export.ts",
    "src/runtimes/typebox.export.ts",
    "src/runtimes/typia.export.ts",
  ],
  outDir: "dist",
  dts: true,
  format: ["esm"],
});
