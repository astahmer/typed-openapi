import type { Monaco } from "@monaco-editor/react";
import type { editor } from "monaco-editor";
import { safeJSONParse } from "pastable/utils";
import { generateFile, mapOpenApiEndpoints, type OutputRuntime } from "typed-openapi";
import { assign, fromPromise, setup } from "xstate";
import { parse } from "yaml";

import { prettify } from "./format";
import { default as petstoreYaml } from "./petstore.yaml?raw";
import { UrlSaver } from "./url-saver";

const urlSaver = new UrlSaver();
const initialInputList = { "petstore.yaml": urlSaver.getValue("input") || petstoreYaml };
const initialOutputList = { "petstore.client.ts": "" };

export type ValidationLevel = "loose" | "formats" | "strict";
export type ClientKind = "promise" | "effect";
export type ValidateSide = "none" | "input" | "output" | "both";

type GenerateInput = {
  inputValue: string;
  runtime: OutputRuntime;
  validation: ValidationLevel;
  client: ClientKind;
  validateSide: ValidateSide;
  coerce: boolean;
};

const generateOutputActor = fromPromise(async ({ input }: { input: GenerateInput }) => {
  const now = new Date();
  console.log("Generating...");

  const openApiDoc = input.inputValue.startsWith("{")
    ? safeJSONParse(input.inputValue)
    : safeYAMLParse(input.inputValue);
  console.log({ inputValue: input.inputValue, openApiDoc });
  if (!openApiDoc) {
    return { content: "" };
  }

  const mappedContext = mapOpenApiEndpoints(openApiDoc);
  console.log(`Found ${mappedContext.endpointList.length} endpoints`);

  const content = await prettify(
    generateFile({
      ...mappedContext,
      runtime: input.runtime,
      validation: input.validation,
      client: input.client,
      validateSide: input.validateSide,
      coerce: input.coerce,
    }),
  );
  console.log(`Done in ${new Date().getTime() - now.getTime()}ms !`);

  return { content };
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
  runtime: "none",
  validation: "strict",
  client: "promise",
  validateSide: "both",
  coerce: true,
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
    updateRuntime: assign(({ event }) => {
      if (event.type !== "Update runtime") {
        return {};
      }

      return { runtime: event.runtime };
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
    assignGeneratedOutput: assign((args) => {
      if ("output" in args.event) {
        const output = args.event.output as { content: string };
        return {
          outputList: {
            ["petstore.client.ts"]: output?.content ?? "",
          },
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
      entry: ["updateUrl"],
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
          actions: ["updateRuntime"],
          target: ".Playing.generating",
        },
        "Update validation": {
          actions: ["updateValidation"],
          target: ".Playing.generating",
        },
        "Update client": {
          actions: ["updateClient"],
          target: ".Playing.generating",
        },
        "Update validateSide": {
          actions: ["updateValidateSide"],
          target: ".Playing.generating",
        },
        "Update coerce": {
          actions: ["updateCoerce"],
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
