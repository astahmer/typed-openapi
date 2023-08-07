# typed-openapi

Generate a Typescript API client from an OpenAPI spec

See [the online playground](https://typed-openapi-astahmer.vercel.app/)

![Screenshot 2023-08-08 at 00 48 42](https://github.com/astahmer/typed-openapi/assets/47224540/3016fa92-e09a-41f3-a95f-32caa41325da)

## Features

- Headless API client, bring your own fetcher ! (fetch, axios, ky, etc...)
- Generates a fully typesafe API client with just types by default (instant suggestions)
- Or you can also generate a client with runtime validation using one of the following runtimes:
  - [zod](https://zod.dev/)
  - [typebox](https://github.com/sinclairzx81/typebox)
  - [arktype](https://arktype.io/)
  - [valibot](https://valibot.dev/)
  - [io-ts](https://gcanti.github.io/io-ts/)
  - [yup](https://github.com/jquense/yup)

The generated client is a single file that can be used in the browser or in node. Runtime validation schemas are
provided by the excellent [typebox-codegen](https://github.com/sinclairzx81/typebox-codegen)

## Install & usage

```sh
pnpm add typed-openapi
```

It exports a bunch of functions that can be used to build your own tooling on top of it. You can look at the
[CLI code](packages/typed-openapi/src/cli.ts) so see how to use them.

## CLI

```sh
npx typed-openapi -h
```

```sh
typed-openapi/0.1.3

Usage: $ typed-openapi <input>

Commands: <input> Generate

For more info, run any command with the `--help` flag: $ typed-openapi --help

Options: -o, --output <path> Output path for the api client ts file (defaults to `<input>.<runtime>.ts`) -r, --runtime
<name> Runtime to use for validation; defaults to `none`; available: 'none' | 'arktype' | 'io-ts' | 'typebox' |
'valibot' | 'yup' | 'zod' (default: none) -h, --help Display this message -v, --version Display version number
```

## Non-goals

- Caring too much about the runtime validation code. If that works (thanks to
  [typebox-codegen](https://github.com/sinclairzx81/typebox-codegen)), that's great, otherwise I'm not really interested
  in fixing it. If you are, feel free to open a PR.

- Supporting all the OpenAPI spec. Regex, dates, files, whatever, that's not the point here.
  [openapi-zod-client](https://github.com/astahmer/openapi-zod-client) does a great job at that, but it's slow to
  generate the client and the suggestions in the IDE are not instant. I'm only interested in supporting the subset of
  the spec that makes the API client typesafe and fast to provide suggetions in the IDE.

- Splitting the generated client into multiple files. Nope. Been there, done that. Let's keep it simple.

Basically, let's focus on having a fast and typesafe API client generation instead.

## Alternatives

[openapi-zod-client](https://github.com/astahmer/openapi-zod-client), which generates a
[zodios](https://github.com/ecyrbe/zodios) client but can be slow to provide IDE suggestions when the OpenAPI spec is
large. Also, you might not always want to use zod or even runtime validation, hence this project.

## Contributing

- `pnpm i`
- `pnpm build`
- `pnpm test`

When you're done with your changes, please run `pnpm changeset` in the root of the repo and follow the instructions
described [here](https://github.com/changesets/changesets/blob/main/docs/intro-to-using-changesets.md).
