import path from "node:path";
import * as url from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import pandacss from "@pandacss/postcss";
import { reactClickToComponent } from "vite-plugin-react-click-to-component";

const dirname = url.fileURLToPath(new URL(".", import.meta.url));
const fsShim = path.join(dirname, "./fs.shim.ts");
const fsPromisesShim = path.join(dirname, "./fs.promises.shim.ts");
const tsxShim = path.join(dirname, "./tsx.shim.ts");

export type ViteAppConfigOptions = {
  /** Browser playground needs fs stubs; Vitest must use real node:fs. Default true. */
  shimFs?: boolean;
};

/** Shared Vite app config — Vitest imports with `shimFs: false`. */
export const createViteAppConfig = (options: ViteAppConfigOptions = {}) => {
  const shimFs = options.shimFs !== false;
  return defineConfig({
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
        // typed-openapi main chunk may touch tsx (config loader); stub for browser.
        "tsx/esm/api": tsxShim,
        ...(shimFs
          ? {
              fs: fsShim,
              "node:fs": fsShim,
              // `fs` → file shim makes `fs/promises` resolve as `fs.shim.ts/promises`.
              "fs/promises": fsPromisesShim,
              "node:fs/promises": fsPromisesShim,
            }
          : {}),
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
};

// https://vitejs.dev/config/
export default createViteAppConfig();
