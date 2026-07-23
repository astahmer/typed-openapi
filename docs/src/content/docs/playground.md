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

The playground keeps the selected runtime and generation controls in its URL. These links are useful in issue reports, reviews, and docs:

- [Types only](/playground/?runtime=none&validation=strict&client=promise&validateSide=both&coerce=true)
- [Zod validation](/playground/?runtime=zod&validation=strict&client=promise&validateSide=both&coerce=true)
- [Effect client](/playground/?runtime=effect&validation=strict&client=effect&validateSide=both&coerce=true)
- [Loose Valibot validation](/playground/?runtime=valibot&validation=loose&client=promise&validateSide=both&coerce=true)

When the editor changes, the input document is compressed into the `input` URL parameter. Copy the browser URL to share a reproducible input. Very large documents may exceed browser URL limits; use a fixture or repository file instead.

The playground showcases core client generation. `--tanstack`, `--msw`, and `--default-fetcher` write companion files, so use the commands in their dedicated guides for those outputs.
