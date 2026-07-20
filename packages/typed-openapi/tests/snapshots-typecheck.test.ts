import { describe, expect, test } from "vitest";
import { readdirSync, mkdirSync, writeFileSync, rmSync, copyFileSync, readFileSync, existsSync } from "node:fs";
import { join, dirname, basename } from "node:path";
import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const tscBin = require.resolve("typescript/bin/tsc");

const snapshotsDir = join(__dirname, "snapshots");
const outRoot = join(__dirname, "../tmp/snapshots-typecheck");
const pkgRoot = join(__dirname, "..");
const pkgRequire = createRequire(join(pkgRoot, "package.json"));

/** Resolve package root directory (handles packages that block ./package.json exports). */
const resolvePkgRoot = (name: string): string => {
  const entry = pkgRequire.resolve(name);
  let dir = dirname(entry);
  for (let i = 0; i < 8; i++) {
    if (existsSync(join(dir, "package.json"))) {
      try {
        const pkg = JSON.parse(readFileSync(join(dir, "package.json"), "utf8")) as { name?: string };
        if (pkg.name === name || name.startsWith(pkg.name + "/")) return dir;
        if (pkg.name === name) return dir;
      } catch {
        // continue
      }
      // For scoped packages the folder name matches
      if (basename(dir) === name || basename(dir) === name.split("/").pop()) return dir;
    }
    const parent = dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  throw new Error(`Cannot resolve package root for ${name} (from ${entry})`);
};

const runtimeOf = (file: string): string => {
  const m = file.match(/\.([a-z0-9]+)\.ts$/);
  return m?.[1] ?? "unknown";
};

describe("snapshot files typecheck", () => {
  rmSync(outRoot, { recursive: true, force: true });
  mkdirSync(outRoot, { recursive: true });

  const files = readdirSync(snapshotsDir).filter((f) => f.endsWith(".ts") && !f.endsWith(".d.ts"));

  const effectRoot = resolvePkgRoot("effect");
  const valibotRoot = resolvePkgRoot("valibot");
  const arktypeRoot = resolvePkgRoot("arktype");
  const zod4Root = resolvePkgRoot("zod");
  const effectSchemaRoot = resolvePkgRoot("@effect/schema");

  let zod3Root: string | undefined;
  const pnpmZod3 = join(__dirname, "../../../node_modules/.pnpm");
  if (existsSync(pnpmZod3)) {
    const entry = readdirSync(pnpmZod3).find((d) => d.startsWith("zod@3."));
    if (entry) zod3Root = join(pnpmZod3, entry, "node_modules/zod");
  }

  for (const file of files) {
    const runtime = runtimeOf(file);
    const isZod3 = runtime === "zod3";

    test(file, { timeout: file.includes("docker") ? 180_000 : 60_000 }, () => {
      if (isZod3 && !zod3Root) {
        expect.fail("zod@3 not found in pnpm store — needed to typecheck *.zod3.ts snapshots");
      }

      const dir = join(outRoot, file.replace(/\.ts$/, ""));
      mkdirSync(dir, { recursive: true });
      copyFileSync(join(snapshotsDir, file), join(dir, "client.ts"));

      const paths: Record<string, string[]> = {
        effect: [effectRoot],
        "effect/*": [join(effectRoot, "*")],
        valibot: [valibotRoot],
        "valibot/*": [join(valibotRoot, "*")],
        arktype: [arktypeRoot],
        "arktype/*": [join(arktypeRoot, "*")],
        zod: [isZod3 ? zod3Root! : zod4Root],
        "zod/*": [join(isZod3 ? zod3Root! : zod4Root, "*")],
        "@effect/schema": [effectSchemaRoot],
        "@effect/schema/*": [join(effectSchemaRoot, "*")],
      };

      writeFileSync(
        join(dir, "tsconfig.json"),
        JSON.stringify(
          {
            compilerOptions: {
              strict: true,
              noEmit: true,
              skipLibCheck: true,
              module: "ESNext",
              moduleResolution: "bundler",
              target: "ES2022",
              lib: ["ES2022", "DOM"],
              types: [],
              paths,
              baseUrl: ".",
              ignoreDeprecations: "6.0",
            },
            include: ["client.ts"],
          },
          null,
          2,
        ),
      );

      writeFileSync(
        join(dir, "package.json"),
        JSON.stringify({ name: `snap-${basename(dir)}`, private: true, type: "module" }, null, 2),
      );

      try {
        execFileSync(process.execPath, [tscBin, "-p", dir, "--pretty", "false"], {
          cwd: pkgRoot,
          stdio: ["ignore", "pipe", "pipe"],
          encoding: "utf8",
        });
      } catch (err: any) {
        const out = `${err.stdout ?? ""}${err.stderr ?? ""}`;
        expect.fail(`tsc failed for ${file}:\n${out.slice(0, 8000)}`);
      }
    });
  }
});
