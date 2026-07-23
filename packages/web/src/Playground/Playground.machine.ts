import type { Monaco } from "@monaco-editor/react";
import type { editor } from "monaco-editor";
import { safeJSONParse } from "pastable/utils";
import {
  generateDefaultFetcher,
  generateFile,
  generateMswFile,
  generateRuntimeTypeDeclarations,
  generateTanstackQueryFile,
  mapOpenApiEndpoints,
  type OutputRuntime,
} from "typed-openapi";
import { assign, fromPromise, setup } from "xstate";
import { parse } from "yaml";

import { prettify } from "./format";
import { default as petstoreYaml } from "./petstore.yaml?raw";
import { UrlSaver } from "./url-saver";

const urlSaver = new UrlSaver();
const initialInputList = { "petstore.yaml": urlSaver.getValue("input") || petstoreYaml };
const initialOutputList = { "openapi.client.ts": "" };

export type ValidationLevel = "loose" | "formats" | "strict";
export type ClientKind = "promise" | "effect";

const runtimeValues = ["none", "zod", "zod3", "effect", "effect3", "valibot", "arktype", "typebox", "typia"] as const;
const validationValues = ["loose", "formats", "strict"] as const;
const clientValues = ["promise", "effect"] as const;
const validateSideValues = ["none", "input", "output", "both"] as const;

const urlChoice = <T extends string>(name: string, values: readonly T[], fallback: T): T => {
  const value = urlSaver.getParam(name);
  return value && values.includes(value as T) ? (value as T) : fallback;
};

const initialRuntime = urlChoice<OutputRuntime>("runtime", runtimeValues, "none");

/** Match CLI: effect/effect3 default to Effect-native client; other runtimes → promise. */
export const clientForRuntime = (runtime: OutputRuntime, previousClient: ClientKind): ClientKind => {
  if (runtime === "effect" || runtime === "effect3") return "effect";
  if (previousClient === "effect") return "promise";
  return previousClient;
};
export type ValidateSide = "none" | "input" | "output" | "both";

type GenerateInput = {
  inputValue: string;
  runtime: OutputRuntime;
  validation: ValidationLevel;
  client: ClientKind;
  validateSide: ValidateSide;
  coerce: boolean;
  runtimeTypes: boolean;
  defaultFetcher: boolean;
  tanstack: boolean;
  msw: boolean;
};

const generateOutputActor = fromPromise(async ({ input }: { input: GenerateInput }) => {
  const now = new Date();
  console.log("Generating...");

  const openApiDoc = input.inputValue.startsWith("{")
    ? safeJSONParse(input.inputValue)
    : safeYAMLParse(input.inputValue);
  console.log({ inputValue: input.inputValue, openApiDoc });
  const mainOutputName = `openapi.${input.runtime === "none" ? "client" : input.runtime}.ts`;
  if (!openApiDoc) return { outputList: { [mainOutputName]: "" }, selectedOutput: mainOutputName };

  const mappedContext = mapOpenApiEndpoints(openApiDoc);
  console.log(`Found ${mappedContext.endpointList.length} endpoints`);

  const generatorOptions = {
    ...mappedContext,
    runtime: input.runtime,
    validation: input.validation,
    client: input.client,
    validateSide: input.validateSide,
    coerce: input.coerce,
  };
  const outputList: Record<string, string> = {};
  const runtimeTypesName = mainOutputName.replace(/\.ts$/, ".types.d.ts");
  const emitRuntimeTypes = input.runtime !== "none" && input.runtimeTypes;

  outputList[mainOutputName] = await prettify(
    generateFile({
      ...generatorOptions,
      ...(emitRuntimeTypes ? { runtimeTypeDeclarations: `./${runtimeTypesName.replace(/\.d\.ts$/, ".js")}` } : {}),
    }),
  );

  if (emitRuntimeTypes) {
    outputList[runtimeTypesName] = await prettify(generateRuntimeTypeDeclarations(generatorOptions));
  }

  if (input.defaultFetcher) {
    outputList["api.client.ts"] = await prettify(
      generateDefaultFetcher({
        clientPath: `./${mainOutputName}`,
        client: input.client,
        doc: openApiDoc,
      }),
    );
  }

  if (input.tanstack) {
    outputList["tanstack.client.ts"] = await prettify(
      await generateTanstackQueryFile({
        ...generatorOptions,
        relativeApiClientPath: `./${mainOutputName}`,
      }),
    );
  }

  if (input.msw) {
    outputList["msw.handlers.ts"] = await prettify(
      generateMswFile({
        endpointList: mappedContext.endpointList,
        doc: openApiDoc,
        schemaByName: Object.fromEntries(mappedContext.refs.getOrderedSchemas().map(([node, infos]) => [infos.normalized, node])),
        baseUrl: "*",
      }),
    );
  }
  console.log(`Done in ${new Date().getTime() - now.getTime()}ms !`);

  return { outputList, selectedOutput: mainOutputName };
});

type PlaygroundContext = {
  monaco: Monaco | null;
  inputEditor: editor.IStandaloneCodeEditor | null;
  outputEditor: editor.IStandaloneCodeEditor | null;
  inputList: Record<string, string>;
  selectedInput: string;
  outputList: Record<string, string>;
  selectedOutput: string;
  decorations: string[];
  runtime: OutputRuntime;
  validation: ValidationLevel;
  client: ClientKind;
  validateSide: ValidateSide;
  coerce: boolean;
  runtimeTypes: boolean;
  defaultFetcher: boolean;
  tanstack: boolean;
  msw: boolean;
};

type PlaygroundEvent =
  | {
      type: "Editor Loaded";
      editor: editor.IStandaloneCodeEditor;
      monaco: Monaco;
      kind: "input" | "output";
    }
  | { type: "Select input tab"; name: string }
  | { type: "Select output tab"; name: string }
  | { type: "Update runtime"; runtime: OutputRuntime }
  | { type: "Update validation"; validation: ValidationLevel }
  | { type: "Update client"; client: ClientKind }
  | { type: "Update validateSide"; validateSide: ValidateSide }
  | { type: "Update coerce"; coerce: boolean }
  | { type: "Update runtime types"; runtimeTypes: boolean }
  | { type: "Update default fetcher"; defaultFetcher: boolean }
  | { type: "Update tanstack"; tanstack: boolean }
  | { type: "Update msw"; msw: boolean }
  | { type: "Update input"; value: string }
  | { type: "Generate output" };

const initialContext: PlaygroundContext = {
  monaco: null,
  inputEditor: null,
  outputEditor: null,
  inputList: initialInputList,
  selectedInput: Object.keys(initialInputList)[0],
  outputList: initialOutputList,
  selectedOutput: Object.keys(initialOutputList)[0],
  decorations: [],
  runtime: initialRuntime,
  validation: urlChoice<ValidationLevel>("validation", validationValues, "strict"),
  client: clientForRuntime(initialRuntime, urlChoice<ClientKind>("client", clientValues, "promise")),
  validateSide: urlChoice<ValidateSide>("validateSide", validateSideValues, "both"),
  coerce: urlSaver.getParam("coerce") !== "false",
  runtimeTypes: urlSaver.getParam("runtimeTypes") !== "false",
  defaultFetcher: urlSaver.getParam("defaultFetcher") === "true",
  tanstack: urlSaver.getParam("tanstack") === "true",
  msw: urlSaver.getParam("msw") === "true",
};

// @ts-ignore
globalThis.__dirname = "/";

export const playgroundMachine = setup({
  types: {
    context: {} as PlaygroundContext,
    events: {} as PlaygroundEvent,
  },
  actors: {
    generateOutput: generateOutputActor,
  },
  actions: {
    assignEditorRef: assign(({ event }) => {
      if (event.type !== "Editor Loaded") {
        return {};
      }

      if (event.kind === "input") {
        return { inputEditor: event.editor, monaco: event.monaco };
      }

      return { outputEditor: event.editor, monaco: event.monaco };
    }),
    selectInputTab: assign(({ event }) => {
      if (event.type !== "Select input tab") {
        return {};
      }

      return { selectedInput: event.name };
    }),
    selectOutputTab: assign(({ event }) => {
      if (event.type !== "Select output tab") {
        return {};
      }

      return { selectedOutput: event.name };
    }),
    updateSelectedInput: assign(({ context, event }) => {
      if (event.type !== "Update input") {
        return {};
      }

      return {
        inputList: {
          ...context.inputList,
          [context.selectedInput]: event.value,
        },
      };
    }),
    updateUrl: ({ context }) => {
      urlSaver.setValue("input", context.inputList[context.selectedInput]);
    },
    updateUrlOptions: ({ context }) => {
      urlSaver.setParam("runtime", context.runtime);
      urlSaver.setParam("validation", context.validation);
      urlSaver.setParam("client", context.client);
      urlSaver.setParam("validateSide", context.validateSide);
      urlSaver.setParam("coerce", context.coerce);
      urlSaver.setParam("runtimeTypes", context.runtimeTypes);
      urlSaver.setParam("defaultFetcher", context.defaultFetcher);
      urlSaver.setParam("tanstack", context.tanstack);
      urlSaver.setParam("msw", context.msw);
    },
    updateRuntime: assign(({ event, context }) => {
      if (event.type !== "Update runtime") {
        return {};
      }

      const runtime = event.runtime;
      return { runtime, client: clientForRuntime(runtime, context.client) };
    }),
    updateValidation: assign(({ event }) => {
      if (event.type !== "Update validation") return {};
      return { validation: event.validation };
    }),
    updateClient: assign(({ event }) => {
      if (event.type !== "Update client") return {};
      return { client: event.client };
    }),
    updateValidateSide: assign(({ event }) => {
      if (event.type !== "Update validateSide") return {};
      return { validateSide: event.validateSide };
    }),
    updateCoerce: assign(({ event }) => {
      if (event.type !== "Update coerce") return {};
      return { coerce: event.coerce };
    }),
    updateRuntimeTypes: assign(({ event }) => {
      if (event.type !== "Update runtime types") return {};
      return { runtimeTypes: event.runtimeTypes };
    }),
    updateDefaultFetcher: assign(({ event }) => {
      if (event.type !== "Update default fetcher") return {};
      return { defaultFetcher: event.defaultFetcher };
    }),
    updateTanstack: assign(({ event }) => {
      if (event.type !== "Update tanstack") return {};
      return { tanstack: event.tanstack };
    }),
    updateMsw: assign(({ event }) => {
      if (event.type !== "Update msw") return {};
      return { msw: event.msw };
    }),
    assignGeneratedOutput: assign((args) => {
      if ("output" in args.event) {
        const output = args.event.output as { outputList: Record<string, string>; selectedOutput: string };
        return {
          outputList: output.outputList,
          selectedOutput: output.selectedOutput,
        };
      }

      return args.context;
    }),
  },
  guards: {
    willBeReady: ({ context }) => {
      return Boolean(context.inputEditor || context.outputEditor);
    },
  },
}).createMachine({
  id: "playground",
  context: initialContext,
  initial: "loading",
  states: {
    loading: {
      on: {
        "Editor Loaded": [
          {
            guard: "willBeReady",
            target: "ready",
            actions: ["assignEditorRef"],
          },
          { actions: "assignEditorRef" },
        ],
      },
    },
    ready: {
      entry: ["updateUrl", "updateUrlOptions"],
      states: {
        Playing: {
          initial: "generating",
          states: {
            idle: {
              type: "atomic",
            },
            generating: {
              invoke: {
                src: "generateOutput",
                input: ({ context }) => ({
                  inputValue: context.inputList[context.selectedInput] ?? "",
                  runtime: context.runtime,
                  validation: context.validation,
                  client: context.client,
                  validateSide: context.validateSide,
                  coerce: context.coerce,
                  runtimeTypes: context.runtimeTypes,
                  defaultFetcher: context.defaultFetcher,
                  tanstack: context.tanstack,
                  msw: context.msw,
                }),
                onDone: {
                  target: "idle",
                  actions: ["assignGeneratedOutput"],
                },
                onError: {
                  target: "idle",
                },
              },
            },
          },
          on: {
            "Select input tab": {
              actions: ["selectInputTab", "updateUrl"],
              target: ".generating",
            },
            "Select output tab": { actions: ["selectOutputTab"] },
            "Update input": {
              actions: ["updateSelectedInput", "updateUrl"],
              target: ".generating",
            },
          },
        },
      },
      initial: "Playing",
      on: {
        "Update runtime": {
          actions: ["updateRuntime", "updateUrlOptions"],
          target: ".Playing.generating",
        },
        "Update validation": {
          actions: ["updateValidation", "updateUrlOptions"],
          target: ".Playing.generating",
        },
        "Update client": {
          actions: ["updateClient", "updateUrlOptions"],
          target: ".Playing.generating",
        },
        "Update validateSide": {
          actions: ["updateValidateSide", "updateUrlOptions"],
          target: ".Playing.generating",
        },
        "Update coerce": {
          actions: ["updateCoerce", "updateUrlOptions"],
          target: ".Playing.generating",
        },
        "Update runtime types": {
          actions: ["updateRuntimeTypes", "updateUrlOptions"],
          target: ".Playing.generating",
        },
        "Update default fetcher": {
          actions: ["updateDefaultFetcher", "updateUrlOptions"],
          target: ".Playing.generating",
        },
        "Update tanstack": {
          actions: ["updateTanstack", "updateUrlOptions"],
          target: ".Playing.generating",
        },
        "Update msw": {
          actions: ["updateMsw", "updateUrlOptions"],
          target: ".Playing.generating",
        },
      },
    },
  },
});

const safeYAMLParse = (value: string): unknown | null => {
  try {
    return parse(value);
  } catch {
    return null;
  }
};
