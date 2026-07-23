import Editor from "@monaco-editor/react";
import { useSelector } from "@xstate/react";
import type { Monaco } from "@monaco-editor/react";
import { Group, Panel } from "react-resizable-panels";
import { useEffect, useState } from "react";
import { useTheme } from "../vite-themes/provider";
import { usePlaygroundContext } from "./PlaygroundMachineProvider";
import { ResizeHandle } from "./ResizeHandle";

// @ts-ignore
import ZodDeclaration from "../../declarations/zod.d.ts?raw";
// @ts-ignore
import ArktypeDeclaration from "../../declarations/arktype.d.ts?raw";
// @ts-ignore
import ValibotDeclaration from "../../declarations/valibot.d.ts?raw";
// @ts-ignore
import EffectDeclaration from "../../declarations/effect.d.ts?raw";
// @ts-ignore
import Effect3Declaration from "../../declarations/effect3.d.ts?raw";

const useCompactLayout = () => {
  const [compact, setCompact] = useState(() => window.innerWidth < 720);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 719px)");
    const update = () => setCompact(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return compact;
};

export const Playground = () => {
  const service = usePlaygroundContext();
  const state = useSelector(service, (snapshot) => snapshot);
  const send = service.send.bind(service);
  const { resolvedTheme } = useTheme();
  const compact = useCompactLayout();

  const configureMonaco = (monaco: Monaco) => {
    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      target: monaco.languages.typescript.ScriptTarget.Latest,
      allowNonTsExtensions: true,
      moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
      module: monaco.languages.typescript.ModuleKind.CommonJS,
      noEmit: true,
      esModuleInterop: true,
      jsx: monaco.languages.typescript.JsxEmit.Preserve,
      allowJs: true,
    });

    const declarationPath = (name: string) => `file:///node_modules/${name}/index.d.ts`;
    monaco.languages.typescript.typescriptDefaults.addExtraLib(ZodDeclaration, declarationPath("zod"));
    monaco.languages.typescript.typescriptDefaults.addExtraLib(ArktypeDeclaration, declarationPath("arktype"));
    monaco.languages.typescript.typescriptDefaults.addExtraLib(ValibotDeclaration, declarationPath("valibot"));
    monaco.languages.typescript.typescriptDefaults.addExtraLib(EffectDeclaration, declarationPath("effect"));
    monaco.languages.typescript.typescriptDefaults.addExtraLib(Effect3Declaration, declarationPath("@effect/schema"));
    monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({ noSemanticValidation: true });
  };

  return (
    <section className="playground-workspace" aria-label="OpenAPI playground">
      <Group orientation={compact ? "vertical" : "horizontal"} className="playground-panels">
        <Panel className="playground-panel" minSize={20}>
          <div className="playground-panel-heading">
            <div className="playground-panel-copy">
              <span>Input</span>
              <small>OpenAPI YAML or JSON</small>
            </div>
            <div className="playground-tabs" role="tablist" aria-label="Input files">
              {Object.entries(state.context.inputList).map(([fileName]) => (
                <button
                  className="playground-tab"
                  data-active={state.context.selectedInput === fileName || undefined}
                  role="tab"
                  aria-selected={state.context.selectedInput === fileName}
                  type="button"
                  key={fileName}
                  onClick={() => send({ type: "Select input tab", name: fileName })}
                >
                  {fileName}
                </button>
              ))}
            </div>
          </div>
          <div className="playground-editor">
            <Editor
              theme={resolvedTheme === "dark" ? "vs-dark" : "vs-light"}
              path={state.context.selectedInput}
              value={state.context.inputList[state.context.selectedInput]}
              options={{ fontSize: 13, minimap: { enabled: false }, padding: { top: 14, bottom: 14 } }}
              beforeMount={configureMonaco}
              onMount={(editor, monaco) => send({ type: "Editor Loaded", editor, monaco, kind: "input" })}
              onChange={(content) => send({ type: "Update input", value: content ?? "" })}
            />
          </div>
        </Panel>

        <ResizeHandle orientation={compact ? "vertical" : "horizontal"} />

        <Panel className="playground-panel" minSize={20}>
          <div className="playground-panel-heading">
            <div className="playground-panel-copy">
              <span>Output</span>
              <small>Generated TypeScript</small>
            </div>
            <div className="playground-tabs" role="tablist" aria-label="Generated files">
              {Object.entries(state.context.outputList).map(([fileName]) => (
                <button
                  className="playground-tab"
                  data-active={state.context.selectedOutput === fileName || undefined}
                  role="tab"
                  aria-selected={state.context.selectedOutput === fileName}
                  type="button"
                  key={fileName}
                  onClick={() => send({ type: "Select output tab", name: fileName })}
                >
                  {fileName}
                </button>
              ))}
            </div>
          </div>
          <div className="playground-editor">
            <Editor
              options={{ fontSize: 13, minimap: { enabled: false }, padding: { top: 14, bottom: 14 }, readOnly: true }}
              theme={resolvedTheme === "dark" ? "vs-dark" : "vs-light"}
              language="typescript"
              path={state.context.selectedOutput}
              value={state.context.outputList[state.context.selectedOutput] ?? ""}
              beforeMount={(monaco) =>
                monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({ noSemanticValidation: true })
              }
              onMount={(editor, monaco) => send({ type: "Editor Loaded", editor, monaco, kind: "output" })}
            />
          </div>
        </Panel>
      </Group>
    </section>
  );
};
