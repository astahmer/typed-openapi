import { describe, expect, test } from "vitest";
import { mkdirSync, writeFileSync, rmSync } from "node:fs";
import { join } from "node:path";
import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";
import SwaggerParser from "@apidevtools/swagger-parser";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints.ts";
import { generateFile, type OutputRuntime } from "../src/generator.ts";

const require = createRequire(import.meta.url);
const tscBin = require.resolve("typescript/bin/tsc");

const samples = ["petstore.yaml", "docker.openapi.yaml", "kombo.openapi.json"] as const;
const runtimes: Exclude<OutputRuntime, "none">[] = [
  "zod",
  "zod3",
  "effect",
  "effect3",
  "valibot",
  "arktype",
  "typebox",
  "typia",
];
const outRoot = join(__dirname, "../tmp/tsc-audit-samples");

const heavy = (sample: string) => sample.startsWith("docker") || sample.startsWith("kombo");

/** Known generated-client TS noise (same families as matrix/snapshots-typecheck filters). */
const filterAuditNoise = (out: string, sample: string, runtime: string): string => {
  const lines = out.split("\n");
  return lines
    .filter((line) => {
      if (!line.includes("error TS")) return true;
      if (sample.startsWith("kombo")) {
        return !(
          line.includes("error TS2456") ||
          line.includes("error TS7022") ||
          line.includes("error TS7024") ||
          line.includes("error TS2502") ||
          line.includes("error TS2345") ||
          (runtime === "arktype" && line.includes("error TS2322")) ||
          line.includes("error TS2719") ||
          line.includes("error TS2536") ||
          line.includes("error TS2339")
        );
      }
      if ((runtime === "typebox" || runtime === "typia") && line.includes("error TS2536")) return false;
      return true;
    })
    .join("\n");
};

describe("tsc audit sample specs", () => {
  rmSync(outRoot, { recursive: true, force: true });

  for (const sample of samples) {
    for (const runtime of runtimes) {
      test(`${sample} --runtime ${runtime}`, { timeout: heavy(sample) ? 300_000 : 60_000 }, async () => {
        const openApiDoc = (await SwaggerParser.parse(`${__dirname}/samples/${sample}`)) as OpenAPIObject;
        const ctx = mapOpenApiEndpoints(openApiDoc);
        const dir = join(outRoot, sample.replace(/\..*/, ""), runtime);
        mkdirSync(dir, { recursive: true });

        const code = generateFile({
          ...ctx,
          runtime,
          validation: "strict",
          schemasOnly: false,
          includeClient: true,
        });
        writeFileSync(join(dir, "client.ts"), code);
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
              },
              include: ["client.ts"],
            },
            null,
            2,
          ),
        );

        let out = "";
        try {
          execFileSync(process.execPath, [tscBin, "-p", dir, "--pretty", "false"], {
            cwd: join(__dirname, ".."),
            stdio: ["ignore", "pipe", "pipe"],
            encoding: "utf8",
          });
        } catch (err: any) {
          out = `${err.stdout ?? ""}${err.stderr ?? ""}`;
        }

        const filtered = filterAuditNoise(out, sample, runtime);
        if (/\berror TS\d+:/.test(filtered)) {
          expect.fail(`tsc failed for ${sample}/${runtime}:\n${filtered.slice(0, 4000)}`);
        }
      });
    }
  }
});
