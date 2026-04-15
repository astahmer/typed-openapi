import type { Monaco } from "@monaco-editor/react";
import type { editor } from "monaco-editor";
import { assign, setup } from "xstate";
import { safeJSONParse } from "pastable/utils";
import { generateFile, mapOpenApiEndpoints, type OutputRuntime } from "typed-openapi";
import { parse } from "yaml";

import { default as petstoreYaml } from "./petstore.yaml?raw";
import { UrlSaver } from "./url-saver";
import { prettify } from "./format";

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

export const playgroundMachine = setup({
  types: {
    context: {} as PlaygroundContext,
    events: {} as PlaygroundEvent,
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
    updateOutput: assign(({ context, event }) => {
      const now = new Date();
      console.log("Generating...");

      const input = (event.type === "Update input" ? event.value : context.inputList[context.selectedInput]) ?? "";
      const openApiDoc = input.startsWith("{") ? safeJSONParse(input) : safeYAMLParse(input);
      console.log({ input, openApiDoc });
      if (!openApiDoc) {
        // toasts.error("Error while parsing OpenAPI document");
        return {};
      }

      const mappedContext = mapOpenApiEndpoints(openApiDoc);
      console.log(`Found ${mappedContext.endpointList.length} endpoints`);

      const content = prettify(generateFile({ ...mappedContext, runtime: context.runtime }));
      const outputList = {
        ["petstore.client.ts"]: content,
      };

      console.log(`Done in ${new Date().getTime() - now.getTime()}ms !`);

      return { outputList };
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
            actions: ["assignEditorRef", "updateOutput"],
          },
          { actions: "assignEditorRef" },
        ],
      },
    },
    ready: {
      initial: "Playing",
      entry: ["updateUrl", "updateOutput"],
      states: {
        Playing: {
          on: {
            "Select input tab": {
              actions: ["selectInputTab", "updateUrl", "updateOutput"],
            },
            "Select output tab": { actions: ["selectOutputTab"] },
            "Update input": { actions: ["updateSelectedInput", "updateUrl", "updateOutput"] },
          },
        },
      },
    },
  },
  on: {
    "Update runtime": { actions: ["updateRuntime", "updateOutput"] },
  },
});

const safeYAMLParse = (value: string): unknown | null => {
  try {
    return parse(value);
  } catch {
    return null;
  }
};
