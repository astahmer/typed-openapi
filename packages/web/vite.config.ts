import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import { reactClickToComponent } from "vite-plugin-react-click-to-component";

import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";

import path from "node:path";
import * as url from "node:url";

// @ts-ignore
const dirname = url.fileURLToPath(new URL(".", import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    reactClickToComponent(),
    {
      name: "replace-ts-patch",
      transform(code, id) {
        // fix ts-patch used in @sinclair/typebox-codegen
        if (!id.includes("sinclair")) return;
        const transformedCode = code.replace("tsp2.tsShim.sys.fileExists", "() => false");
        return {
          code: transformedCode,
          map: { mappings: "" },
        };
      },
    },
  ],
  optimizeDeps: {
    include: ["escalade"],
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
      plugins: [NodeGlobalsPolyfillPlugin({ process: true })],
    },
  },
  build: {
    rollupOptions: {
      plugins: [
        {
          name: "replace-process-cwd",
          transform(code, _id) {
            const transformedCode = code.replace(/process\.cwd\(\)/g, '""');
            return {
              code: transformedCode,
              map: { mappings: "" },
            };
          },
        },
      ],
    },
  },
  resolve: {
    alias: {
      module: path.join(dirname, "./module.shim.ts"),
      path: "path-browserify",
      fs: path.join(dirname, "./fs.shim.ts"),
      process: "process/browser",
      os: "os-browserify",
      util: "util",
    },
  },
});
