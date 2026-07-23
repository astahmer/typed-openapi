import { useSelector } from "@xstate/react";
import type { ActorRefFrom } from "xstate";
import type { OutputRuntime } from "typed-openapi";
import PlaygroundWithMachine from "../Playground/PlaygroundWithMachine";
import {
  playgroundMachine,
  type ClientKind,
  type ValidateSide,
  type ValidationLevel,
} from "../Playground/Playground.machine";
import { ThemeProvider, useTheme } from "../vite-themes/provider";

import "../styles.css";

type PlaygroundService = ActorRefFrom<typeof playgroundMachine>;

const runtimeOptions: Array<{ value: OutputRuntime; label: string }> = [
  { value: "none", label: "Types only" },
  { value: "zod", label: "Zod" },
  { value: "zod3", label: "Zod v3" },
  { value: "effect", label: "Effect Schema" },
  { value: "effect3", label: "Effect Schema v3" },
  { value: "valibot", label: "Valibot" },
  { value: "arktype", label: "ArkType" },
  { value: "typebox", label: "TypeBox" },
  { value: "typia", label: "Typia" },
];

const SelectControl = <T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: ReadonlyArray<{ value: T; label: string }>;
  onChange: (value: T) => void;
}) => (
  <label className="playground-control">
    <span>{label}</span>
    <select value={value} onChange={(event) => onChange(event.currentTarget.value as T)}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </label>
);

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      className="playground-icon-button"
      type="button"
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? "☀" : "◐"}
    </button>
  );
};

const PlaygroundToolbar = ({ service }: { service: PlaygroundService }) => {
  const runtime = useSelector(service, (state) => state.context.runtime);
  const validation = useSelector(service, (state) => state.context.validation);
  const client = useSelector(service, (state) => state.context.client);
  const validateSide = useSelector(service, (state) => state.context.validateSide);
  const coerce = useSelector(service, (state) => state.context.coerce);
  const showRuntimeOptions = runtime !== "none";
  const fullscreenHref = typeof window === "undefined" ? "/playground/app/" : window.location.href;

  return (
    <header className="playground-header">
      <div className="playground-brand-row">
        <a className="playground-brand" href="/" target="_top">
          typed-openapi
        </a>
        <span className="playground-badge">Playground</span>
        <p>Try a spec. Inspect the generated client.</p>
        <nav className="playground-nav" aria-label="Playground navigation">
          <a href="/" target="_top">
            Docs
          </a>
          <a href={fullscreenHref} target="_top">
            Full screen
          </a>
          <a href="https://github.com/astahmer/typed-openapi" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <ThemeToggle />
        </nav>
      </div>

      <div className="playground-controls" aria-label="Generation options">
        <SelectControl
          label="Runtime"
          value={runtime}
          options={runtimeOptions}
          onChange={(nextRuntime) => service.send({ type: "Update runtime", runtime: nextRuntime })}
        />
        {showRuntimeOptions ? (
          <>
            <SelectControl<ValidationLevel>
              label="Validation"
              value={validation}
              options={[
                { value: "loose", label: "Loose" },
                { value: "formats", label: "Formats" },
                { value: "strict", label: "Strict" },
              ]}
              onChange={(nextValidation) => service.send({ type: "Update validation", validation: nextValidation })}
            />
            <SelectControl<ClientKind>
              label="Client"
              value={client}
              options={[
                { value: "promise", label: "Promise" },
                { value: "effect", label: "Effect" },
              ]}
              onChange={(nextClient) => service.send({ type: "Update client", client: nextClient })}
            />
            <SelectControl<ValidateSide>
              label="Validate"
              value={validateSide}
              options={[
                { value: "none", label: "None" },
                { value: "input", label: "Input" },
                { value: "output", label: "Output" },
                { value: "both", label: "Both" },
              ]}
              onChange={(nextValidateSide) => service.send({ type: "Update validateSide", validateSide: nextValidateSide })}
            />
            <label className="playground-check-control">
              <input
                type="checkbox"
                checked={coerce}
                onChange={(event) => service.send({ type: "Update coerce", coerce: event.currentTarget.checked })}
              />
              Coerce input
            </label>
          </>
        ) : null}
      </div>
    </header>
  );
};

export const Home = () => (
  <ThemeProvider storageKey="typed-openapi-playground-theme">
    <main className="playground-app">
      <PlaygroundWithMachine>{(service) => <PlaygroundToolbar service={service} />}</PlaygroundWithMachine>
    </main>
  </ThemeProvider>
);
