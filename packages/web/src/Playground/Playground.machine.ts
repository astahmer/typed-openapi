import type { Monaco } from "@monaco-editor/react";
import type { editor } from "monaco-editor";
import { assign, createMachine } from "xstate";
import { choose } from "xstate/lib/actions";
import { safeJSONParse } from "pastable/utils";
import { generateFile, mapOpenApiEndpoints, type OutputRuntime } from "typed-openapi";
import { parse } from "yaml";

// @ts-expect-error
import { default as petstoreYaml } from "./petstore.yaml?raw";
import { UrlSaver } from "./url-saver";

const urlSaver = new UrlSaver();
const initialInputList = { "petstore.yaml": urlSaver.getValue("input") || petstoreYaml };
const initialOutputList = { "petstore.client.ts": "" };

type PlaygroundContext = {
  monaco: Monaco | null;
  inputEditor: editor.IStandaloneCodeEditor | null;
  outputEditor: editor.IStandaloneCodeEditor | null;
  inputList: Record<string, string>;
  selectedInput: string;
  outputList: Record<string, string>;
  selectedOutput: string;
  decorations: string[];
  //
  runtime: OutputRuntime;
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
  | { type: "Update input"; value: string };

const initialContext: PlaygroundContext = {
  monaco: null,
  inputEditor: null,
  outputEditor: null,
  inputList: initialInputList,
  selectedInput: Object.keys(initialInputList)[0],
  outputList: initialOutputList,
  selectedOutput: Object.keys(initialOutputList)[0],
  decorations: [],
  //
  runtime: "none",
};

// @ts-ignore
globalThis.__dirname = "/";

export const playgroundMachine = createMachine(
  {
    predictableActionArguments: true,
    preserveActionOrder: true,
    id: "playground",
    tsTypes: {} as import("./Playground.machine.typegen").Typegen0,
    schema: {
      context: {} as PlaygroundContext,
      events: {} as PlaygroundEvent,
    },
    context: initialContext,
    initial: "loading",
    states: {
      loading: {
        on: {
          "Editor Loaded": [
            {
              cond: "willBeReady",
              target: "ready",
              actions: ["assignEditorRef", "updateOutput"],
            },
            { actions: "assignEditorRef" },
          ],
        },
      },
      ready: {
        initial: "Playing",
        entry: ["updateInput"],
        states: {
          Playing: {
            on: {
              "Select input tab": {
                actions: ["selectInputTab", "updateInput"],
              },
              "Select output tab": { actions: ["selectOutputTab"] },
              "Update input": { actions: ["updateInput"] },
            },
          },
        },
      },
    },
    on: {
      "Update runtime": { actions: ["updateRuntime", "updateOutput"] },
    },
  },
  {
    actions: {
      assignEditorRef: assign((ctx, event) => {
        if (event.kind === "input") {
          return { ...ctx, inputEditor: event.editor, monaco: event.monaco };
        }

        return { ...ctx, outputEditor: event.editor, monaco: event.monaco };
      }),
      selectInputTab: assign((ctx, event) => {
        return { ...ctx, selectedInput: event.name };
      }),
      selectOutputTab: assign((ctx, event) => {
        return { ...ctx, selectedOutput: event.name };
      }),
      updateSelectedInput: assign((ctx, event) => {
        if (event.type !== "Update input") return ctx;

        const { inputList, selectedInput } = ctx;
        if (inputList[selectedInput]) {
          inputList[selectedInput] = event.value;
        }
        return { ...ctx, inputList };
      }),
      updateUrl(context, event, meta) {
        urlSaver.setValue("input", context.inputList[context.selectedInput]);
      },
      updateInput: choose([{ actions: ["updateSelectedInput", "updateUrl", "updateOutput"] }]),
      updateRuntime: assign({ runtime: (_, event) => event.runtime }),
      updateOutput: assign((ctx, event) => {
        const now = new Date();
        console.log("Generating...");

        const input = (event.type === "Update input" ? event.value : ctx.inputList[ctx.selectedInput]) ?? "";
        const openApiDoc = input.startsWith("{") ? safeJSONParse(input) : safeYAMLParse(input);
        console.log({ input, openApiDoc });
        if (!openApiDoc) {
          // toasts.error("Error while parsing OpenAPI document");
          return ctx;
        }

        const context = mapOpenApiEndpoints(openApiDoc);
        console.log(`Found ${context.endpointList.length} endpoints`);

        const content = generateFile({ ...context, runtime: ctx.runtime });
        const outputList = {
          ["petstore.client.ts"]: content,
        };

        console.log(`Done in ${new Date().getTime() - now.getTime()}ms !`);

        return {
          ...ctx,
          outputList,
        };
      }),
    },
    guards: {
      willBeReady: (ctx) => {
        return Boolean(ctx.inputEditor || ctx.outputEditor);
      },
    },
  },
);

const safeYAMLParse = (value: string): string | null => {
  try {
    return parse(value);
  } catch {
    return null;
  }
};
