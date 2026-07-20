import SwaggerParser from "@apidevtools/swagger-parser";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints.ts";
import { generateFile } from "../src/generator.ts";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const doc = (await SwaggerParser.parse(
  join(root, "tests/samples/filter-fixture.openapi.yaml"),
)) as OpenAPIObject;
const ctx = mapOpenApiEndpoints(doc);
const src = generateFile({ ...ctx, runtime: "effect", endpointPatterns: ["/pets"] });
mkdirSync(join(root, "tmp"), { recursive: true });
writeFileSync(join(root, "tmp/generated-effect-client.ts"), src);
console.log("wrote tmp/generated-effect-client.ts", src.length);
