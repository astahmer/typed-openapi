import { describe, expect, test } from "vitest";
import { mkdirSync, writeFileSync, rmSync } from "node:fs";
import { join } from "node:path";
import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";
import SwaggerParser from "@apidevtools/swagger-parser";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints.ts";
import { generateFile, generateRuntimeTypeDeclarations, type OutputRuntime } from "../src/generator.ts";

const require = createRequire(import.meta.url);
const tscBin = require.resolve("typescript/bin/tsc");

const fixturePath = `${__dirname}/samples/typecheck-fixture.openapi.yaml`;
const outRoot = join(__dirname, "../tmp/generated-typecheck");

const runtimes: Exclude<OutputRuntime, "none">[] = ["zod", "zod3", "effect", "effect3", "valibot", "arktype"];

describe("generated schema typecheck", async () => {
  const openApiDoc = (await SwaggerParser.parse(fixturePath)) as OpenAPIObject;
  const ctx = mapOpenApiEndpoints(openApiDoc);

  rmSync(outRoot, { recursive: true, force: true });

  for (const runtime of runtimes) {
    test(`typechecks --runtime ${runtime}`, { timeout: 30_000 }, () => {
      const dir = join(outRoot, runtime);
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
        expect.fail(`tsc failed for ${runtime}:\n${out}`);
      }
    });
  }

  test("runtime sidecar keeps exported schema types strict for consumers", { timeout: 30_000 }, () => {
    const dir = join(outRoot, "runtime-sidecar");
    mkdirSync(dir, { recursive: true });
    const options = { ...ctx, runtime: "zod" as const, runtimeTypeDeclarations: "./schema.types.d.ts" };
    writeFileSync(join(dir, "schema.ts"), generateFile(options));
    writeFileSync(join(dir, "schema.types.d.ts"), generateRuntimeTypeDeclarations(options));
    writeFileSync(
      join(dir, "consumer.ts"),
      `import { Person } from "./schema.ts";
import type { Person as PersonType } from "./schema.ts";

const person: PersonType = { name: "Ada", email: "ada@example.com", age: 37, status: "active" };
// @ts-expect-error Sidecar aliases remain strict even though schema.ts is ts-nocheck.
const invalidPerson: PersonType = { name: "Ada", email: "ada@example.com", age: "37", status: "active" };
const parsed = Person.parse(person);
// @ts-expect-error The imported runtime schema still infers Person.age as a number.
const invalidAge: string = parsed.age;

void person;
void invalidPerson;
void invalidAge;
`,
    );
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
            allowImportingTsExtensions: true,
            types: [],
          },
          include: ["schema.ts", "consumer.ts"],
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
      expect.fail(`tsc failed for runtime sidecar consumer:\n${out}`);
    }
  });
});
