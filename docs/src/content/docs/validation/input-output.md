---
title: Validation, coercion, and transforms
description: Control runtime validation depth, input/output boundaries, and generated domain types.
sidebar:
  order: 2
---

These options apply when `--runtime` is not `none`.

## Choose validation depth

| Level | Checks |
| --- | --- |
| `loose` | object, array, primitive, enum, and union structure |
| `formats` | loose checks plus known formats such as email, UUID, URL, IP, and date/time |
| `strict` | formats plus string, number, array, and object constraints |

```sh
pnpm exec typed-openapi openapi.yaml --runtime zod --validation formats
```

`strict` is the default for a runtime adapter. Use `loose` for a structurally reliable but less opinionated boundary.

## Validate only the side you need

Generated clients validate both outgoing parameters and successful response data by default.

```sh
# Validate untrusted server responses, but skip outgoing checks.
pnpm exec typed-openapi openapi.yaml --runtime valibot --validate-side output
```

| Value | Behavior |
| --- | --- |
| `none` | generate schemas but do not call them |
| `input` | validate path, query, cookie, header, and body parameters |
| `output` | validate successful response data |
| `both` | validate input and output (default) |

You can override the generated default for one request:

```ts
await api.post("/pet", {
  body: draft,
  validate: "input",
});
```

## Plug in your own validator call

The emitted runtime schema is passed to an optional `onValidate` hook. This is useful when an application wraps validation with telemetry, localization, or a custom error type.

```ts
import { z } from "zod";

api.setOnValidate(async ({ side, schema, value }) => {
  console.info(`validating ${side}`);
  return (schema as z.ZodType).parse(value);
});
```

## Coerce HTTP primitives

Path, query, cookie, and header values arrive as strings in HTTP. `--coerce` makes runtime schemas accept string versions of number and boolean values. It is enabled by default when a runtime is selected.

```sh
pnpm exec typed-openapi openapi.yaml --runtime zod --coerce
# Keep strict input typing and disable coercion when the transport already normalizes values:
pnpm exec typed-openapi openapi.yaml --runtime zod --no-coerce
```

## Transform date and bigint fields

Map OpenAPI formats into application-friendly values across TypeScript types and runtime schemas:

```sh
pnpm exec typed-openapi openapi.yaml \
  --runtime zod \
  --transform-dates \
  --transform-bigint
```

- `format: date` and `date-time` become `Date`.
- `format: int64` becomes `bigint`.
- With the types-only runtime, ISO date strings are revived for the generated client path.

## Defaults and read/write fields

OpenAPI `default` values are emitted in runtime schemas. For inline request objects, `readOnly` properties are removed from input schemas; for inline response objects, `writeOnly` properties are removed from output schemas. Named `$ref` components remain shared so a component’s public shape does not silently differ between endpoints.
