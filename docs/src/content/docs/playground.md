---
title: Playground
description: Prototype output without leaving the documentation site.
sidebar:
  order: 3
---

import EmbeddedPlayground from "../../components/EmbeddedPlayground.astro";

The playground runs inside this page. Paste OpenAPI YAML or JSON on the left and inspect generated TypeScript on the right.

<EmbeddedPlayground />

## Share a configuration

The playground keeps the selected runtime and output options in its URL. These links are useful in issue reports, reviews, and docs:

- [Types only](/playground/?runtime=none&validation=strict&client=promise&validateSide=both&coerce=true)
- [Zod validation](/playground/?runtime=zod&validation=strict&client=promise&validateSide=both&coerce=true&runtimeTypes=true)
- [Effect client](/playground/?runtime=effect&validation=strict&client=effect&validateSide=both&coerce=true&runtimeTypes=true)
- [Zod client, fetcher, TanStack Query, and MSW](/playground/?runtime=zod&validation=strict&client=promise&validateSide=both&coerce=true&runtimeTypes=true&defaultFetcher=true&tanstack=true&msw=true)

When the editor changes, the input document is compressed into the `input` URL parameter. Copy the browser URL to share a reproducible input. Very large documents may exceed browser URL limits; use a fixture or repository file instead.

The output tabs mirror the generator's default filenames. A runtime creates `openapi.<runtime>.ts` and, by default, its `openapi.<runtime>.types.d.ts` sidecar. Enable **Default fetcher**, **TanStack Query**, or **MSW handlers** to inspect `api.client.ts`, `tanstack.client.ts`, and `msw.handlers.ts` alongside the main file. The dedicated guides explain custom paths and production setup.
