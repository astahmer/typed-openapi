---
title: Effect branding and decoding
description: Keep domain brands and decoded values at the generated Effect boundary.
sidebar:
  order: 3
---

Effect Schema is useful when the value on the wire is not quite the value the
application should use. `transformSchema` lets you describe that boundary to
typed-openapi:

- a **brand** keeps the same runtime representation but adds a stronger
  TypeScript type;
- a **transform** can decode an encoded value into a different runtime value,
  such as an ISO timestamp into `DateTime.Utc`.

## Configure an Effect transform

This example uses custom OpenAPI formats to identify the two domain values:

```ts
// typed-openapi.config.ts
import { defineConfig, type SchemaTransform } from "typed-openapi";

const transformSchema: SchemaTransform = (schema) => {
  if (schema.type === "string" && schema.format === "user-id") {
    return {
      type: 'string & import("effect/Brand").Brand<"UserId">',
      runtime: 'Schema.String.pipe(Schema.brand("UserId"))',
    };
  }

  if (schema.type === "string" && schema.format === "date-time") {
    return {
      type: '{ readonly Type: import("effect").DateTime.Utc; readonly Encoded: string }',
      runtime: "Schema.DateTimeUtcFromString",
    };
  }

  return undefined;
};

export default defineConfig({
  input: "./openapi.yaml",
  output: "./src/api/openapi.ts",
  runtime: "effect",
  client: "effect",
  defaultFetcher: "api.client.ts",
  validateSide: "both",
  transformSchema,
});
```

The OpenAPI document can keep its transport-oriented representation:

```yaml
components:
  schemas:
    User:
      type: object
      required: [id, createdAt]
      properties:
        id:
          type: string
          format: user-id
        createdAt:
          type: string
          format: date-time
```

The generated Effect schemas are conceptually equivalent to this simplified
shape (the exact placement depends on whether runtime type declarations are
enabled):

```ts
export const User = Schema.Struct({
  id: Schema.String.pipe(Schema.brand("UserId")),
  createdAt: Schema.DateTimeUtcFromString,
});

// UserId is still a string at runtime, but raw strings do not satisfy it in TypeScript.
export type UserId = string & import("effect/Brand").Brand<"UserId">;
```

The `type` and `runtime` returned by the transform must describe the same
schema. Returning only `type` changes the static type but does not add a real
runtime check; see [custom transforms](./input-output/#custom-transforms) for
that trade-off.

The date-time `type` uses Effect's `{ Type; Encoded }` shape intentionally:
request bodies remain typed as ISO strings while decoded responses expose
`DateTime.Utc`.

## Decode and encode at other boundaries

Generated clients already decode successful responses and encode request
inputs when `validateSide: "both"` is enabled. Use the schema directly when a
value enters through another boundary, such as a queue, cache, local storage,
or a test fixture:

```ts
import { Effect, Schema } from "effect";
import { User } from "./src/api/openapi";

const raw: unknown = {
  id: "user_123",
  createdAt: "2026-08-19T12:00:00.000Z",
};

// Synchronous boundary: throws a ParseError when the value is invalid.
const user = Schema.decodeUnknownSync(User)(raw);
// user.id: string & Brand.Brand<"UserId">
// user.createdAt: DateTime.Utc

// Encode the decoded value back to the OpenAPI/wire representation.
const payload = Schema.encodeSync(User)(user);
// payload.createdAt is an ISO string again.

// Effect-native boundary: parsing failure stays in the Effect error channel.
const userEffect = Schema.decodeUnknownEffect(User)(raw).pipe(
  Effect.tapError((error) => Effect.logError(error)),
);
```

For an Effect-native generated client, the same decode/encode work is already
part of the request:

```ts
import { Effect } from "effect";
import { api } from "./src/api/api.client";

const user = await Effect.runPromise(
  api.get("/users/{userId}", { path: { userId: "user_123" } }),
);

// The response is decoded according to the generated Effect schema.
user.createdAt;
```

Do not cast raw strings to a brand at the call site. Put the assertion at the
boundary schema so both runtime validation and generated client inference use
the same rule.
