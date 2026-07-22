/**
 * Write filter-fixture clients under tmp/attest-generated before @ark/attest
 * typechecks (globalSetup). Cold CI has no tmp yet — imports resolve to `any`.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import SwaggerParser from "@apidevtools/swagger-parser";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints.ts";
import { generateFile, type OutputRuntime } from "../src/generator.ts";

const pkgRoot = join(dirname(fileURLToPath(import.meta.url)), "..");

const runtimes: OutputRuntime[] = [
  "none",
  "zod",
  "zod3",
  "effect",
  "effect3",
  "valibot",
  "arktype",
  "typebox",
  "typia",
];

export async function genAttestFixtures(root = pkgRoot): Promise<string> {
  const fixturePath = join(root, "tests/samples/filter-fixture.openapi.yaml");
  const outRoot = join(root, "tmp/attest-generated");
  const doc = (await SwaggerParser.parse(fixturePath)) as OpenAPIObject;
  const ctx = mapOpenApiEndpoints(doc);
  mkdirSync(outRoot, { recursive: true });
  for (const runtime of runtimes) {
    for (const client of ["promise", "effect"] as const) {
      const dir = join(outRoot, `${runtime}-${client}`);
      mkdirSync(dir, { recursive: true });
      writeFileSync(
        join(dir, "client.ts"),
        generateFile({
          ...ctx,
          runtime,
          client,
          includeClient: true,
          endpointPatterns: ["/pets"],
        }),
      );
    }
  }
  return outRoot;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await genAttestFixtures();
  console.log("wrote tmp/attest-generated");
}
