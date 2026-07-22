---
title: Use typed-openapi with an AI agent
description: Give an agent the project skill and a focused prompt before it changes your OpenAPI client.
sidebar:
  label: AI agents
  order: 4
---

The repository includes [a skill file](https://github.com/astahmer/typed-openapi/blob/main/skills/typed-openapi/SKILL.md) for coding agents. It tells an agent where generated code lives, how to choose generation options, and what to verify after a change.

Copy the skill into the agent's project-specific skills location, or attach it directly when your agent supports file context. Keep the OpenAPI document, `typed-openapi.config.ts`, and generated output in the agent's scope.

## Paste this prompt

```text
Use the typed-openapi skill in this repository.

I need to integrate the OpenAPI document at <path-to-openapi.yaml> into <app/package/path>.
First inspect the existing typed-openapi config and generated files. Do not hand-write endpoint types or edit generated files directly.

Choose the smallest setup that fits this app:
- keep types-only output unless runtime validation is already needed;
- use the generated default fetcher only after checking each operation's OpenAPI security requirements and showing its base-URL design;
- reuse the app's existing HTTP layer when it already owns retry, auth, tracing, or environment access;
- generate TanStack Query or MSW output only when this app uses those libraries.

For browser apps, use the generated `createApi(baseUrl)` factory instead of editing generated code. For query API keys, verify each operation's security requirements and add a focused test that confirms the key and ordinary query parameters both reach the server.

Show the exact config and command before changing files. Then regenerate, run the relevant typecheck/tests, and summarize the generated files and any OpenAPI gaps you found.
```

The prompt is intentionally specific about generated files. It stops an agent from quietly replacing a transport policy or creating a second hand-written client.
