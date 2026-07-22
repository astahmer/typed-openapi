---
title: Generate your first client
description: Generate, import, and call a typed API client in a few commands.
sidebar:
  order: 1
---

This guide gets a useful client into an application without making you choose a validation library or framework up front. By the end, you will have one generated module, a Fetch client, and a typed request.

Generation runs in Node. Running a generated Fetch client needs the platform Fetch APIs (`fetch`, `URL`, `Headers`, `FormData`, and `Blob`): browsers provide them; use Node 18+ or provide compatible polyfills.

## 1. Generate the contract

Install the generator and point it at the root OpenAPI YAML or JSON file:

```sh
pnpm add typed-openapi
pnpm exec typed-openapi ./openapi.yaml --output src/api/client.ts
```

The default runtime is `none`: you get TypeScript types, endpoint definitions, and a headless client without a validation-library dependency. This is the lowest-cost way to confirm your specification maps cleanly.

## 2. Add a Fetch transport

Most applications want the generated Fetch client too:

```sh
pnpm exec typed-openapi ./openapi.yaml \
  --output src/api/client.ts \
  --default-fetcher
```

That writes `src/api/client.ts` and a nearby `src/api/api.client.ts` fetcher. The generated fetcher owns URL construction, query encoding, request bodies, cookies, and the response contract. Set its API base URL, then call an operation by the documented OpenAPI path template.

```ts
import { api } from "./api/api.client";

const pet = await api.get("/pet/{petId}", {
  path: { petId: 42 },
});

// `pet` is inferred from the 2xx response schema.
console.log(pet.name);
```

The generated fetcher is a regular TypeScript file. Read [the implementation and its behavior](/clients/promise-client/) before using it; keep an existing transport when it already owns retry, auth, tracing, or environment configuration.

## 3. Add runtime validation at the boundary

Use Zod v4 for a common, batteries-included starting point:

```sh
pnpm add zod
pnpm exec typed-openapi ./openapi.yaml \
  --runtime zod \
  --default-fetcher \
  --output src/api/client.ts
```

Generated input and output validators run by default. See [runtime selection](/validation/runtimes/) before choosing a different adapter, or [validation controls](/validation/input-output/) to validate only the response side.

## 4. Prove the shape in the playground

[Open the playground with Zod selected](https://typed-openapi-astahmer.vercel.app/?runtime=zod&validation=strict&client=promise&validateSide=both&coerce=true). It starts with a Petstore document; paste your own OpenAPI YAML or JSON into the left editor.

If your project has `typed-openapi.config.ts`, the positional input becomes optional. [Configure a repeatable generation command.](/configuration/)

## Where to go next

- Need request bodies, headers, cookies, or auth? Read [Bodies, cookies & auth](/clients/requests-auth-and-bodies/).
- Need predictable non-2xx handling? Read [Errors & responses](/clients/errors-and-responses/).
- Generating in a team or CI? Put stable flags in [configuration](/configuration/).
