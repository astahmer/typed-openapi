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

const samples = ["petstore.yaml", "docker.openapi.yaml"] as const;
const runtimes: Exclude<OutputRuntime, "none">[] = ["zod", "zod3", "effect", "effect3", "valibot", "arktype"];
const outRoot = join(__dirname, "../tmp/tsc-audit-samples");

describe("tsc audit sample specs", () => {
  rmSync(outRoot, { recursive: true, force: true });

  for (const sample of samples) {
    for (const runtime of runtimes) {
      test(`${sample} --runtime ${runtime}`, { timeout: sample.startsWith("docker") ? 120_000 : 60_000 }, async () => {
        const openApiDoc = (await SwaggerParser.parse(`${__dirname}/samples/${sample}`)) as OpenAPIObject;
        const ctx = mapOpenApiEndpoints(openApiDoc);
        const dir = join(outRoot, sample.replace(/\..*/, ""), runtime);
        mkdirSync(dir, { recursive: true });

        const code = generateFile({
          ...ctx,
          runtime,
          validation: "strict",
          schemasOnly: true,
          includeClient: false,
        });
        writeFileSync(join(dir, "schema.ts"), code);
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
                types: [],
              },
              include: ["schema.ts"],
            },
            null,
            2,
          ),
        );

        try {
          execFileSync(process.execPath, [tscBin, "-p", dir, "--pretty", "false"], {
            cwd: join(__dirname, ".."),
            stdio: ["ignore", "pipe", "pipe"],
            encoding: "utf8",
          });
        } catch (err: any) {
          const out = `${err.stdout ?? ""}${err.stderr ?? ""}`;
          expect.fail(`tsc failed for ${sample}/${runtime}:\n${out.slice(0, 4000)}`);
        }
      });
    }
  }
});
