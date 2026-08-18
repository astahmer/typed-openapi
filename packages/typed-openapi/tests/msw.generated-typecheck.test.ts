import { createRequire } from "node:module";
import { execFileSync } from "node:child_process";
import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, test } from "vitest";
import { generateMswFile } from "../src/msw.generator.ts";

const require = createRequire(import.meta.url);
const tscBin = require.resolve("typescript/bin/tsc");
const outRoot = join(__dirname, "../tmp/msw-generated-typecheck");

describe("generated MSW facade types", () => {
  test("keeps endpoint-specific response types on mock.response", { timeout: 30_000 }, () => {
    rmSync(outRoot, { recursive: true, force: true });
    mkdirSync(outRoot, { recursive: true });

    const endpoint = {
      method: "get" as const,
      path: "/echo",
      meta: { alias: "getEcho", operationId: "getEcho", tags: [] as string[] },
      operation: {
        responses: {
          "200": {
            description: "ok",
            content: {
              "application/json": { example: { msg: "hello-msw" } },
            },
          },
        },
      },
      parameters: {},
      requestFormat: "json" as const,
      responseFormat: "json" as const,
      responses: {
        "200": {
          kind: "object" as const,
          required: ["msg"],
          partial: false,
          additionalProperties: false,
          properties: { msg: { kind: "string" as const, constraints: {}, meta: {} } },
          constraints: {},
          meta: {},
        },
      },
    };
    const secondEndpoint = {
      ...endpoint,
      path: "/job",
      meta: { alias: "getJob", operationId: "getJob", tags: [] as string[] },
      operation: {
        responses: {
          "200": {
            description: "ok",
            content: {
              "application/json": { example: { id: "job-1" } },
            },
          },
        },
      },
      responses: {
        "200": {
          kind: "object" as const,
          required: ["id"],
          partial: false,
          additionalProperties: false,
          properties: { id: { kind: "string" as const, constraints: {}, meta: {} } },
          constraints: {},
          meta: {},
        },
      },
    };

    writeFileSync(
      join(outRoot, "mock.ts"),
      generateMswFile({
        endpointList: [endpoint as never, secondEndpoint as never],
        doc: { openapi: "3.0.3", info: { title: "t", version: "1" }, paths: {} },
      }),
    );
    writeFileSync(
      join(outRoot, "consumer.ts"),
      `import { mock, type MswResponse } from "./mock";

const response = mock.get("/echo").response();
const patched = { ...response, msg: "overridden" };
const message: string = patched.msg;
// @ts-expect-error The generated response must not become any or unknown.
const invalidMessage: number = response.msg;

const jobResponse = mock.get("/job").response();
const jobId: string = jobResponse.id;
// @ts-expect-error Same-method endpoints must retain distinct response types.
const invalidJobMessage: string = jobResponse.msg;

type EchoResponse = MswResponse<"get", "/echo">;
const typedResponse: EchoResponse = { msg: "ok" };
// @ts-expect-error Endpoint response types must reject incompatible values.
const invalidResponse: EchoResponse = { msg: 42 };
type JobResponse = MswResponse<"get", "/job">;
const typedJobResponse: JobResponse = { id: "ok" };
// @ts-expect-error Endpoint response types must reject incompatible values.
const invalidJobResponse: JobResponse = { id: 42 };
// @ts-expect-error The facade must reject paths that are not in the generated contract.
mock.get("/missing");

void message;
void jobId;
void typedResponse;
void invalidMessage;
void invalidResponse;
void typedJobResponse;
void invalidJobMessage;
void invalidJobResponse;
`,
    );
    writeFileSync(
      join(outRoot, "tsconfig.json"),
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
          include: ["mock.ts", "consumer.ts"],
        },
        null,
        2,
      ),
    );

    try {
      execFileSync(process.execPath, [tscBin, "-p", outRoot, "--pretty", "false"], {
        cwd: join(__dirname, ".."),
        stdio: ["ignore", "pipe", "pipe"],
        encoding: "utf8",
      });
    } catch (error: any) {
      expect.fail(`tsc failed for generated MSW facade:\n${error.stdout ?? ""}${error.stderr ?? ""}`);
    }
  });
});
