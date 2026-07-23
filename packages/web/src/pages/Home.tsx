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
import { TwitterIcon } from "../components/twitter-icon";
import { BlueskyIcon } from "../components/bluesky-icon";
import { ThemeProvider, useTheme } from "../vite-themes/provider";
import { GeneratedSetup } from "../Playground/GeneratedSetup";
import { RemoteInput } from "../Playground/RemoteInput";

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

const ToggleControl = ({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) => (
  <label className="playground-check-control">
    <input type="checkbox" checked={checked} onChange={(event) => onChange(event.currentTarget.checked)} />
    {label}
  </label>
);

const PlaygroundToolbar = ({ service, embedded }: { service: PlaygroundService; embedded: boolean }) => {
  const runtime = useSelector(service, (state) => state.context.runtime);
  const validation = useSelector(service, (state) => state.context.validation);
  const client = useSelector(service, (state) => state.context.client);
  const validateSide = useSelector(service, (state) => state.context.validateSide);
  const coerce = useSelector(service, (state) => state.context.coerce);
  const runtimeTypes = useSelector(service, (state) => state.context.runtimeTypes);
  const defaultFetcher = useSelector(service, (state) => state.context.defaultFetcher);
  const tanstack = useSelector(service, (state) => state.context.tanstack);
  const msw = useSelector(service, (state) => state.context.msw);
  const showRuntimeOptions = runtime !== "none";
  const fullscreenHref = typeof window === "undefined" ? "/playground/app/" : window.location.href;
  const runtimeLabel = runtimeOptions.find((option) => option.value === runtime)?.label ?? runtime;
  const configurationSummary = [
    runtimeLabel,
    defaultFetcher ? "Fetch client" : "own fetcher",
    tanstack ? "TanStack Query" : null,
  ]
    .filter(Boolean)
    .join(" · ");
  const advancedControls = (
    <>
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
          <ToggleControl
            label="Coerce input"
            checked={coerce}
            onChange={(nextCoerce) => service.send({ type: "Update coerce", coerce: nextCoerce })}
          />
          <ToggleControl
            label="Runtime types"
            checked={runtimeTypes}
            onChange={(nextRuntimeTypes) => service.send({ type: "Update runtime types", runtimeTypes: nextRuntimeTypes })}
          />
        </>
      ) : null}
      <ToggleControl label="MSW handlers" checked={msw} onChange={(nextMsw) => service.send({ type: "Update msw", msw: nextMsw })} />
    </>
  );

  return (
    <header className="playground-header">
      <div className="playground-brand-row">
        <a className="playground-brand" href="/" target="_top">
          typed-openapi
        </a>
        <span className="playground-badge">Playground</span>
        <p>Try a spec. Inspect the generated client.</p>
        <nav className="playground-nav" aria-label="Playground navigation">
          {embedded ? (
            <a href={fullscreenHref} target="_blank" rel="noreferrer">
              Full screen
            </a>
          ) : (
            <>
              <a href="https://github.com/astahmer/typed-openapi" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href="https://www.astahmer.dev/" target="_blank" rel="noreferrer">
                astahmer.dev
              </a>
              <a href="https://x.com/astahmer_dev" target="_blank" rel="noreferrer">
                <TwitterIcon aria-hidden="true" />
                Twitter
              </a>
              <a href="https://bsky.app/profile/astahmer.dev" target="_blank" rel="noreferrer">
                <BlueskyIcon aria-hidden="true" />
                Bluesky
              </a>
            </>
          )}
          <ThemeToggle />
        </nav>
      </div>

      <details className="playground-configuration">
        <summary>
          <span>Configure output or load a spec</span>
          <small>{configurationSummary}</small>
        </summary>
        <div className="playground-configuration-content">
          <div className="playground-controls" aria-label="Generation options">
            <SelectControl
              label="Runtime"
              value={runtime}
              options={runtimeOptions}
              onChange={(nextRuntime) => service.send({ type: "Update runtime", runtime: nextRuntime })}
            />
            <ToggleControl
              label="Default fetcher"
              checked={defaultFetcher}
              onChange={(nextDefaultFetcher) =>
                service.send({ type: "Update default fetcher", defaultFetcher: nextDefaultFetcher })
              }
            />
            <ToggleControl label="TanStack Query" checked={tanstack} onChange={(nextTanstack) => service.send({ type: "Update tanstack", tanstack: nextTanstack })} />
            {advancedControls}
          </div>
          <RemoteInput service={service} />
          <GeneratedSetup
            runtime={runtime}
            validation={validation}
            client={client}
            validateSide={validateSide}
            coerce={coerce}
            runtimeTypes={runtimeTypes}
            defaultFetcher={defaultFetcher}
            tanstack={tanstack}
            msw={msw}
          />
        </div>
      </details>
    </header>
  );
};

export const Home = () => {
  const embedded = typeof window !== "undefined" && window.self !== window.top;

  return (
    <ThemeProvider storageKey="typed-openapi-playground-theme">
      <main className={`playground-app${embedded ? " playground-app--embedded" : ""}`}>
        <PlaygroundWithMachine>{(service) => <PlaygroundToolbar service={service} embedded={embedded} />}</PlaygroundWithMachine>
      </main>
    </ThemeProvider>
  );
};
