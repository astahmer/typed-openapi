import Editor from "@monaco-editor/react";
import { useActor } from "@xstate/react";
import { Panel, PanelGroup } from "react-resizable-panels";
import { css } from "panda/css";
import { Flex, styled } from "panda/jsx";
import { usePlaygroundContext } from "./PlaygroundMachineProvider";
import { ResizeHandle } from "./ResizeHandle";
import { useTheme } from "../vite-themes/provider";

// @ts-ignore
import ZodDeclaration from "../../declarations/zod.d.ts?raw";
// @ts-ignore
import ArktypeDeclaration from "../../declarations/arktype.d.ts?raw";
// @ts-ignore
import ValibotDeclaration from "../../declarations/valibot.d.ts?raw";
// @ts-ignore
import TypeboxDeclaration from "../../declarations/typebox.d.ts?raw";
// @ts-ignore
import IoTsDeclaration from "../../declarations/io-ts.d.ts?raw";
// @ts-ignore
import YupDeclaration from "../../declarations/yup.d.ts?raw";

export const Playground = () => {
  const service = usePlaygroundContext();
  const [state, send] = useActor(service);
  console.log(state.value, state.context);

  const theme = useTheme();
  const colorMode = theme.resolvedTheme;

  return (
    <styled.div display="flex" w="100%" h="100%" pos="relative">
      <PanelGroup direction="horizontal">
        <Panel className={css({ display: "flex", flexDirection: "column" })} minSize={20}>
          <Flex px="2" bg="var(--sp-colors-surface1)" borderBottom="1px solid var(--sp-colors-surface2)" role="tablist">
            {Object.entries(state.context.inputList).map(([fileName]) => (
              <styled.button
                role="tab"
                key={fileName}
                onClick={() => send({ type: "Select input tab", name: fileName })}
                fontSize="sm"
                fontWeight="medium"
                borderRadius="0"
                p="2"
                color="cyan.500"
                opacity={0.8}
                transition="color opacity 150ms ease"
                bg="none"
                cursor="pointer"
                borderBottom="solid 1px transparent"
                data-active={state.context.selectedInput === fileName ? "" : undefined}
                _active={{
                  color: "cyan.600",
                  opacity: 1,
                  borderBottom: "solid 1px token(colors.cyan.600, red)",
                }}
                _hover={{ color: "cyan.600" }}
              >
                {fileName}
              </styled.button>
            ))}
          </Flex>
          <styled.div
            boxSize="full"
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            overflow="hidden"
          >
            <Editor
              theme={colorMode === "dark" ? "vs-dark" : "vs-light"}
              path={state.context.selectedInput}
              value={state.context.inputList[state.context.selectedInput]}
              options={{ minimap: { enabled: false } }}
              beforeMount={(monaco) => {
                monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
                  target: monaco.languages.typescript.ScriptTarget.Latest,
                  allowNonTsExtensions: true,
                  moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
                  module: monaco.languages.typescript.ModuleKind.CommonJS,
                  noEmit: true,
                  esModuleInterop: true,
                  jsx: monaco.languages.typescript.JsxEmit.Preserve,
                  // reactNamespace: "React",
                  allowJs: true,
                  // typeRoots: ["node_modules/@types"],
                });

                const getDtsPath = (name: string) => `file:///node_modules/${name}/index.d.ts`;

                monaco.languages.typescript.typescriptDefaults.addExtraLib(ZodDeclaration, getDtsPath("zod"));
                monaco.languages.typescript.typescriptDefaults.addExtraLib(ArktypeDeclaration, getDtsPath("arktype"));
                monaco.languages.typescript.typescriptDefaults.addExtraLib(ValibotDeclaration, getDtsPath("valibot"));
                monaco.languages.typescript.typescriptDefaults.addExtraLib(
                  TypeboxDeclaration,
                  getDtsPath("@sinclair/typebox"),
                );
                monaco.languages.typescript.typescriptDefaults.addExtraLib(IoTsDeclaration, getDtsPath("io-ts"));

                monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
                  noSemanticValidation: true,
                });
              }}
              onMount={(editor, monaco) => {
                console.log("editor mounted", editor, monaco);
                send({ type: "Editor Loaded", editor, monaco, kind: "input" });
                // editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
                //     send({ type: "Save" });
                // });
              }}
              onChange={(content) => send({ type: "Update input", value: content ?? "" })}
            />
          </styled.div>
        </Panel>
        <ResizeHandle className={css({ color: "black" })} />
        <Panel className={css({ display: "flex", flexDirection: "column" })} minSize={20}>
          <Flex px="2" bg="var(--sp-colors-surface1)" borderBottom="1px solid var(--sp-colors-surface2)" role="tablist">
            {Object.entries(state.context.outputList).map(([fileName]) => (
              <styled.button
                role="tab"
                key={fileName}
                onClick={() => send({ type: "Select output tab", name: fileName })}
                fontSize="sm"
                fontWeight="medium"
                borderRadius="0"
                p="2"
                color="cyan.500"
                opacity={0.8}
                transition="color opacity 150ms ease"
                bg="none"
                cursor="pointer"
                borderBottom="solid 1px transparent"
                data-active={state.context.selectedOutput === fileName ? "" : undefined}
                _active={{
                  color: "cyan.600",
                  opacity: 1,
                  borderBottom: "solid 1px token(colors.cyan.600, red)",
                }}
                _hover={{ color: "cyan.600" }}
              >
                {fileName}
              </styled.button>
            ))}
          </Flex>
          <styled.div
            boxSize="full"
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            overflow="hidden"
          >
            <Editor
              options={{ minimap: { enabled: false } }}
              theme={colorMode === "dark" ? "vs-dark" : "vs-light"}
              language="typescript"
              path={state.context.selectedOutput}
              value={state.context.outputList[state.context.selectedOutput] ?? ""}
              beforeMount={(monaco) => {
                monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
                  noSemanticValidation: true,
                });
              }}
              onMount={(editor, monaco) => {
                send({ type: "Editor Loaded", editor, monaco, kind: "output" });
              }}
            />
          </styled.div>
        </Panel>
      </PanelGroup>
    </styled.div>
  );
};
