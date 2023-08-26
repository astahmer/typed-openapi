// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  internalEvents: {
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {};
  missingImplementations: {
    actions: never;
    delays: never;
    guards: never;
    services: never;
  };
  eventsCausingActions: {
    assignEditorRef: "Editor Loaded";
    selectInputTab: "Select input tab";
    selectOutputTab: "Select output tab";
    updateInput: "Editor Loaded" | "Select input tab" | "Update input";
    updateOutput: "Editor Loaded" | "Select input tab" | "Update input" | "Update runtime";
    updateRuntime: "Update runtime";
    updateSelectedInput: "Editor Loaded" | "Select input tab" | "Update input";
    updateUrl: "Editor Loaded" | "Select input tab" | "Update input";
  };
  eventsCausingDelays: {};
  eventsCausingGuards: {
    willBeReady: "Editor Loaded";
  };
  eventsCausingServices: {};
  matchesStates: "loading" | "ready" | "ready.Playing" | { ready?: "Playing" };
  tags: never;
}
