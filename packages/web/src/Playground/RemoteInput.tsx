import { useSelector } from "@xstate/react";
import { useEffect, useRef, useState } from "react";
import type { ActorRefFrom } from "xstate";
import { playgroundMachine } from "./Playground.machine";

type PlaygroundService = ActorRefFrom<typeof playgroundMachine>;

const isRemoteUrl = (value: string) => {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
};

const examples = [
  {
    label: "Petstore",
    url: "https://petstore3.swagger.io/api/v3/openapi.json",
  },
  {
    label: "GitHub REST",
    url: "https://raw.githubusercontent.com/github/rest-api-description/main/descriptions/api.github.com/api.github.com.json",
  },
  {
    label: "Cloudflare",
    url: "https://raw.githubusercontent.com/cloudflare/api-schemas/82dba40b10f6b6db23b2ea57bb370bdbfceeaa1a/openapi.json",
  },
];

export const RemoteInput = ({ service }: { service: PlaygroundService }) => {
  const sourceUrl = useSelector(service, (state) => state.context.sourceUrl);
  const [url, setUrl] = useState(sourceUrl ?? "");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [error, setError] = useState("");
  const loadedUrl = useRef<string | undefined>();

  const load = async (nextUrl: string) => {
    const normalizedUrl = nextUrl.trim();
    if (!isRemoteUrl(normalizedUrl)) {
      setStatus("error");
      setError("Enter an http(s) URL.");
      return;
    }

    setStatus("loading");
    setError("");
    try {
      const response = await fetch(normalizedUrl, {
        headers: { Accept: "application/json, application/yaml, text/yaml, text/plain" },
      });
      if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
      const value = await response.text();
      if (!value.trim()) throw new Error("The URL returned an empty document.");
      loadedUrl.current = normalizedUrl;
      setUrl(normalizedUrl);
      service.send({ type: "Set remote input", url: normalizedUrl, value });
      setStatus("idle");
    } catch (cause) {
      setStatus("error");
      setError(cause instanceof Error ? cause.message : "Could not load this URL.");
    }
  };

  useEffect(() => {
    if (sourceUrl && sourceUrl !== loadedUrl.current) void load(sourceUrl);
  }, [sourceUrl]);

  return (
    <form
      className="playground-source"
      onSubmit={(event) => {
        event.preventDefault();
        void load(url);
      }}
    >
      <label>
        <span>OpenAPI URL</span>
        <input
          type="url"
          inputMode="url"
          placeholder="https://example.com/openapi.json"
          value={url}
          onChange={(event) => setUrl(event.currentTarget.value)}
        />
      </label>
      <button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Loading…" : "Load URL"}
      </button>
      <div className="playground-source-examples" aria-label="Example OpenAPI documents">
        <span>Try:</span>
        {examples.map((example) => (
          <button
            key={example.label}
            type="button"
            disabled={status === "loading"}
            onClick={() => void load(example.url)}
          >
            {example.label}
          </button>
        ))}
      </div>
      {status === "error" ? <p role="alert">{error}</p> : null}
    </form>
  );
};
