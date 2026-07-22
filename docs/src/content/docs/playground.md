---
title: Playground
description: Prototype output in the browser and share an input document through the URL.
sidebar:
  order: 3
---

The [online playground](https://typed-openapi-astahmer.vercel.app/) runs generation in the browser. Paste OpenAPI YAML or JSON on the left and inspect generated TypeScript on the right.

## Share a configuration

The playground keeps the selected runtime and generation controls in its URL. These links are useful in issue reports, reviews, and docs:

- [Types only](https://typed-openapi-astahmer.vercel.app/?runtime=none&validation=strict&client=promise&validateSide=both&coerce=true)
- [Zod validation](https://typed-openapi-astahmer.vercel.app/?runtime=zod&validation=strict&client=promise&validateSide=both&coerce=true)
- [Effect client](https://typed-openapi-astahmer.vercel.app/?runtime=effect&validation=strict&client=effect&validateSide=both&coerce=true)
- [Loose Valibot validation](https://typed-openapi-astahmer.vercel.app/?runtime=valibot&validation=loose&client=promise&validateSide=both&coerce=true)

When the editor changes, the input document is compressed into the `input` URL parameter. Copy the browser URL to share a reproducible input. Very large documents may exceed browser URL limits; use a fixture or repository file instead.

The playground showcases core client generation. `--tanstack`, `--msw`, and `--default-fetcher` write companion files, so use the commands in their dedicated guides for those outputs.
