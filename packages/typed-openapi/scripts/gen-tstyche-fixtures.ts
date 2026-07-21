import SwaggerParser from "@apidevtools/swagger-parser";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints.ts";
import { generateFile, type OutputRuntime } from "../src/generator.ts";
import { generateTanstackQueryFile } from "../src/tanstack-query.generator.ts";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

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

const petstore = (await SwaggerParser.parse(join(root, "tests/samples/petstore.yaml"))) as OpenAPIObject;
const petstoreCtx = mapOpenApiEndpoints(petstore);

const filterFixture = (await SwaggerParser.parse(
  join(root, "tests/samples/filter-fixture.openapi.yaml"),
)) as OpenAPIObject;
const filterCtx = mapOpenApiEndpoints(filterFixture);

const docker = (await SwaggerParser.parse(join(root, "tests/samples/docker.openapi.yaml"))) as OpenAPIObject;
const dockerCtx = mapOpenApiEndpoints(docker);

mkdirSync(join(root, "tmp/tstyche/runtimes"), { recursive: true });
mkdirSync(join(root, "tmp/tstyche/effect-client"), { recursive: true });

for (const runtime of runtimes) {
  const promiseDir = join(root, "tmp/tstyche/runtimes", runtime);
  mkdirSync(promiseDir, { recursive: true });
  writeFileSync(
    join(promiseDir, "client.ts"),
    generateFile({
      ...petstoreCtx,
      runtime,
      client: "promise",
      includeClient: true,
    }),
  );
  writeFileSync(
    join(promiseDir, "tanstack.ts"),
    await generateTanstackQueryFile({
      ...petstoreCtx,
      relativeApiClientPath: "./client.ts",
      client: "promise",
    }),
  );

  const effectDir = join(root, "tmp/tstyche/effect-client", runtime);
  mkdirSync(effectDir, { recursive: true });
  writeFileSync(
    join(effectDir, "client.ts"),
    generateFile({
      ...petstoreCtx,
      runtime,
      client: "effect",
      includeClient: true,
    }),
  );
  writeFileSync(
    join(effectDir, "tanstack.ts"),
    await generateTanstackQueryFile({
      ...petstoreCtx,
      relativeApiClientPath: "./client.ts",
      client: "effect",
    }),
  );
}

// Compact effect fixture for legacy effect-client tstyche path + filter smoke
writeFileSync(
  join(root, "tmp/generated-effect-client.ts"),
  generateFile({
    ...filterCtx,
    runtime: "effect",
    client: "effect",
    endpointPatterns: ["/pets"],
    includeClient: true,
  }),
);

// Docker effect client — archive path/query param regression
mkdirSync(join(root, "tmp/tstyche/docker-effect"), { recursive: true });
writeFileSync(
  join(root, "tmp/tstyche/docker-effect/client.ts"),
  generateFile({
    ...dockerCtx,
    runtime: "effect",
    client: "effect",
    includeClient: true,
    endpointPatterns: ["/containers/{id}/archive"],
  }),
);

console.log("wrote tmp/tstyche fixtures for", runtimes.length, "runtimes + docker-effect");
