import { defineConfig } from "tsup";

export default defineConfig({
  entryPoints: ["src/cli.ts", "src/index.ts"],
  outDir: "dist",
  dts: true,
  format: ["cjs", "esm"],
});
