---
title: CLI reference
description: Every typed-openapi command-line option in one place.
sidebar:
  order: 1
---

```sh
pnpm exec typed-openapi <input> [options]
```

`<input>` is an OpenAPI JSON or YAML path. It is optional when a loaded config supplies `input`.

Flags use kebab-case; the equivalent config keys use camelCase. For example, `--transform-dates` becomes `transformDates: true` in `typed-openapi.config.ts`. Start from [configuration](/configuration/) once a command has more than a few stable options.

## Input and output

| Option | Meaning |
| --- | --- |
| `-o, --output <path>` | Main generated TypeScript file. Defaults to `<input>.<runtime>.ts`. |
| `-c, --config <path>` | JSON or TS/JS config path. Auto-loads known `typed-openapi.config.*` names when omitted. |
| `--format` | Format generated files with oxfmt. |
| `--schemas-only` | Emit schemas without client generation. |
| `--include-client` | Include the API client implementation; default true. Set `includeClient: false` in config to omit it. |
| `--jsdoc` | Emit OpenAPI descriptions as JSDoc; default true. Set `jsdoc: false` in config to omit it. |

## Runtime and client behavior

| Option | Meaning |
| --- | --- |
| `-r, --runtime <name>` | `none`, `zod`, `zod3`, `effect`, `effect3`, `valibot`, `arktype`, `typebox`, or `typia`. |
| `--validation <level>` | `loose`, `formats`, or `strict`; defaults to strict with a runtime. |
| `--validate-side <side>` | `none`, `input`, `output`, or `both`; defaults to both with a runtime. |
| `--client <kind>` | `promise` or `effect`; Effect runtimes default to effect. |
| `--coerce` / `--no-coerce` | Control string-to-number/boolean coercion for HTTP primitives. |
| `--transform-dates` | Map `date` and `date-time` formats to `Date`. |
| `--transform-bigint` | Map `int64` to `bigint`. |

## Optional companion files

| Option | Meaning |
| --- | --- |
| `--default-fetcher [path]` | Generate a Fetch implementation, optionally at a custom path. |
| `--tanstack [path]` | Generate TanStack Query helpers, optionally at a custom path. |
| `--msw [path]` | Generate MSW handlers and mock factories, optionally at a custom path. |
| `--msw-faker` | Use `@faker-js/faker` in MSW mock factories. |
| `--msw-base-url <url>` | Prefix generated MSW request handlers; defaults to `*`. |

## Selection and naming

| Option | Meaning |
| --- | --- |
| `--endpoint <regex>` | Keep a matching endpoint. Repeat the option to add patterns. |
| `--schema <regex>` | Preserve a matching component schema when filtering. Repeatable. |
| `--tree-shake-schemas` | Drop unused components; default when `--endpoint` is present. |
| `--no-tree-shake-schemas` | Keep every component schema. |
| `--schema-naming <mode>` | `auto`, `always-name`, or `prefer-inline`. |

## Status handling

| Option | Meaning |
| --- | --- |
| `--success-status-codes <codes>` | Comma-separated success codes instead of the default `2xx,3xx` ranges. |
| `--error-status-codes <codes>` | Comma-separated error codes instead of the default `4xx,5xx` ranges. |

Run `pnpm exec typed-openapi --help` for the installed version’s exact help text.
