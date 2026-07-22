---
title: Generate your first client
description: Generate, import, and call a typed API client in a few commands.
sidebar:
  order: 1
---

Install the package, point it at an OpenAPI document, and import the generated file.

```sh
pnpm add typed-openapi
pnpm exec typed-openapi ./openapi.yaml --output src/api/client.ts
```

The default runtime is `none`: you get TypeScript types and a headless client without a validation-library dependency.

## Make a useful first client

Most applications want the generated Fetch client too:

```sh
pnpm exec typed-openapi ./openapi.yaml \
  --output src/api/client.ts \
  --default-fetcher
```

That writes `src/api/client.ts` and a nearby `src/api/api.client.ts` fetcher. Set the API base URL and call an operation using its OpenAPI path.

```ts
import { api } from "./api/api.client";

const pet = await api.get("/pet/{petId}", {
  path: { petId: 42 },
});

// `pet` is inferred from the 2xx response schema.
console.log(pet.name);
```

## Add validation when ready

Use Zod v4 for a common, batteries-included starting point:

```sh
pnpm add zod
pnpm exec typed-openapi ./openapi.yaml \
  --runtime zod \
  --default-fetcher \
  --output src/api/client.ts
```

Generated input and output validators run by default. See [runtime selection](/validation/runtimes/) before choosing a different adapter.

## Try it before installing

[Open the playground with Zod selected](https://typed-openapi-astahmer.vercel.app/?runtime=zod&validation=strict&client=promise&validateSide=both&coerce=true). It starts with a Petstore document; paste your own OpenAPI YAML or JSON into the left editor.

:::note[CLI input can come from config]
If your project has `typed-openapi.config.ts`, the positional input becomes optional. [Configure a repeatable generation command.](/configuration/)
:::
