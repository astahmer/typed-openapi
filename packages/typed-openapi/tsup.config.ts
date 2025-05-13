import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  entryPoints: ["src/cli.ts", "src/index.ts"],
  outDir: "dist",
  dts: true,
  format: ["esm"],
});
