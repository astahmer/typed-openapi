import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import pandacss from "@pandacss/postcss";
import { reactClickToComponent } from "vite-plugin-react-click-to-component";

import path from "node:path";
import * as url from "node:url";

const dirname = url.fileURLToPath(new URL(".", import.meta.url));
const fsShim = path.join(dirname, "./fs.shim.ts");
const isVitest = Boolean(process.env.VITEST);

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [pandacss()],
    },
  },
  plugins: [react(), reactClickToComponent()],
  resolve: {
    tsconfigPaths: true,
    alias: {
      module: path.join(dirname, "./module.shim.ts"),
      path: "path-browserify",
      // Browser playground needs fs stubs; Vitest must see real node:fs (declarations checks).
      ...(isVitest
        ? {}
        : {
            fs: fsShim,
            "node:fs": fsShim,
          }),
      process: "process/browser",
      os: "os-browserify",
      util: "util",
    },
  },
  optimizeDeps: {
    include: ["escalade"],
    rolldownOptions: {
      define: {
        global: "globalThis",
      },
    },
  },
  build: {
    rolldownOptions: {
      plugins: [
        {
          name: "replace-process-cwd",
          transform(code: string) {
            return {
              code: code.replace(/process\.cwd\(\)/g, '""'),
              map: { mappings: "" },
            };
          },
        },
      ],
    },
  },
});
