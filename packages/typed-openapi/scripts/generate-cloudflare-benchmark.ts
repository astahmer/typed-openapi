import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import SwaggerParser from "@apidevtools/swagger-parser";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { generateFile, generateRuntimeTypeDeclarations, type GeneratorOptions } from "../src/generator.ts";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints.ts";

const packageRoot = join(import.meta.dirname, "..");
const input = join(packageRoot, "tests/samples/cloudflare.openapi.json");
const outputDir = join(packageRoot, "tmp/typecheck-benchmark-snapshots");

const variants = [
  { name: "direct-any", strategy: "any", noCheck: false },
  { name: "nocheck", strategy: "raw", noCheck: true },
  { name: "direct-any-nocheck", strategy: "any", noCheck: true },
  { name: "forced-cast", strategy: "cast", noCheck: false },
  { name: "forced-cast-nocheck", strategy: "cast", noCheck: true },
] as const;

const document = (await SwaggerParser.bundle(input)) as OpenAPIObject;
const context = mapOpenApiEndpoints(document);
await mkdir(outputDir, { recursive: true });

for (const variant of variants) {
  const filename = `cloudflare.zod.${variant.name}.ts`;
  const output = join(outputDir, filename);
  const typesPath = output.replace(/\.ts$/, ".types.d.ts");
  const options: GeneratorOptions = {
    ...context,
    runtime: "zod",
    runtimeTypeDeclarations: `./${typesPath.split("/").at(-1)!}`,
    runtimeTypeStrategy: variant.strategy,
    runtimeNoCheck: variant.noCheck,
  };

  await writeFile(output, generateFile(options));
  await writeFile(typesPath, generateRuntimeTypeDeclarations(options));
  console.log(filename);
}
