import type { OpenAPIObject, SecuritySchemeObject } from "openapi3-ts/oas31";
import { sanitizeName } from "./sanitize-name.ts";

export type ParsedSecurityScheme = {
  name: string;
  /** Safe TS property name */
  prop: string;
  type: "apiKey" | "http" | "oauth2" | "openIdConnect" | "mutualTLS" | string;
  /** apiKey location */
  in?: "header" | "query" | "cookie";
  /** apiKey / header name */
  paramName?: string;
  /** http scheme: bearer | basic | … */
  scheme?: string;
  description?: string;
  /** When false, scheme is parsed but applyAuth skips it (e.g. mutualTLS). */
  supported?: boolean;
};

export const parseSecuritySchemes = (doc: OpenAPIObject): ParsedSecurityScheme[] => {
  const schemes = doc.components?.securitySchemes ?? {};
  const out: ParsedSecurityScheme[] = [];

  for (const [name, raw] of Object.entries(schemes)) {
    // Skip unresolved refs — SwaggerParser.bundle should inline
    if (!raw || typeof raw !== "object" || "$ref" in raw) continue;
    const scheme = raw as SecuritySchemeObject;
    const prop = sanitizeName(name, "schema") || name.replace(/[^a-zA-Z0-9_]/g, "_");
    const description = scheme.description;

    if (scheme.type === "apiKey") {
      const validIn = scheme.in === "header" || scheme.in === "query" || scheme.in === "cookie";
      const entry: ParsedSecurityScheme = {
        name,
        prop,
        type: "apiKey",
        // OAS requires `name` + `in`; incomplete schemes are typed but not applied.
        supported: validIn && typeof scheme.name === "string" && scheme.name.length > 0,
      };
      if (validIn) entry.in = scheme.in;
      if (scheme.name !== undefined) entry.paramName = scheme.name;
      if (description !== undefined) entry.description = description;
      out.push(entry);
      continue;
    }

    if (scheme.type === "http") {
      const httpScheme = scheme.scheme?.toLowerCase();
      const supported = httpScheme === "basic" || httpScheme === "bearer" || !httpScheme;
      const entry: ParsedSecurityScheme = {
        name,
        prop,
        type: "http",
        supported,
      };
      if (httpScheme !== undefined) entry.scheme = httpScheme;
      if (description !== undefined) entry.description = description;
      out.push(entry);
      continue;
    }

    if (scheme.type === "oauth2" || scheme.type === "openIdConnect") {
      const entry: ParsedSecurityScheme = {
        name,
        prop,
        type: scheme.type,
        scheme: "bearer",
        supported: true,
      };
      if (description !== undefined) entry.description = description;
      out.push(entry);
      continue;
    }

    // mutualTLS and unknown types — keep in AuthCredentials for typing, but do not apply
    const entry: ParsedSecurityScheme = {
      name,
      prop,
      type: scheme.type,
      supported: false,
    };
    if (description !== undefined) entry.description = description;
    out.push(entry);
  }

  return out;
};

/** Normalize bearer tokens so we never emit `Bearer Bearer …`. */
export const normalizeBearerToken = (token: string): string => {
  const trimmed = token.trim();
  return /^bearer\s+/i.test(trimmed) ? trimmed.replace(/^bearer\s+/i, "").trim() : trimmed;
};

/** Emit AuthCredentials type + applyAuth helper source (no imports). */
export const generateAuthHelpersSource = (schemes: ParsedSecurityScheme[]): string => {
  if (!schemes.length) {
    return `export type AuthCredentials = Record<string, never>;

export const applyAuth = (_headers: Headers, _url: URL, _auth: AuthCredentials): void => {};
`;
  }

  const fields = schemes
    .map((s) => {
      const doc = s.description ? `  /** ${s.description.replace(/\*\//g, "*\\/")} */\n` : "";
      const unsupported =
        s.supported === false
          ? `  /** OpenAPI security scheme \`${s.type}\` is not applied automatically — handle outside the fetcher. */\n`
          : "";
      return `${doc}${unsupported}  ${JSON.stringify(s.prop)}?: string;`;
    })
    .join("\n");

  const needsUrl = schemes.some(
    (s) => s.supported !== false && s.type === "apiKey" && (s.in === "query" || s.in === "cookie"),
  );
  const urlParam = needsUrl ? "url" : "_url";

  const applyBody = schemes
    .filter((s) => {
      if (s.supported === false) return false;
      if (s.type === "apiKey") return true;
      if (s.type === "http") return s.scheme === "basic" || s.scheme === "bearer" || !s.scheme;
      if (s.type === "oauth2" || s.type === "openIdConnect") return true;
      return false;
    })
    .map((s) => {
      const key = JSON.stringify(s.prop);
      if (s.type === "apiKey") {
        const param = s.paramName ?? s.name;
        if (s.in === "query") {
          return `  if (auth[${key}]) url.searchParams.set(${JSON.stringify(param)}, auth[${key}]!);`;
        }
        if (s.in === "cookie") {
          return `  if (auth[${key}]) {
    const existing = headers.get("cookie");
    const part = ${JSON.stringify(param + "=")} + encodeURIComponent(auth[${key}]!);
    headers.set("cookie", existing ? existing + "; " + part : part);
  }`;
        }
        // header (default)
        return `  if (auth[${key}]) headers.set(${JSON.stringify(param)}, auth[${key}]!);`;
      }

      if (s.type === "http" && s.scheme === "basic") {
        return `  if (auth[${key}]) {
    const token = auth[${key}]!.includes(":")
      ? btoa(auth[${key}]!)
      : auth[${key}]!;
    headers.set("Authorization", "Basic " + token);
  }`;
      }

      // oauth2 / openIdConnect / http bearer
      return `  if (auth[${key}]) {
    const raw = auth[${key}]!.trim();
    const token = /^bearer\\s+/i.test(raw) ? raw.replace(/^bearer\\s+/i, "").trim() : raw;
    headers.set("Authorization", "Bearer " + token);
  }`;
    })
    .join("\n");

  return `export type AuthCredentials = {
${fields}
};

/**
 * Apply OpenAPI securitySchemes credentials to the outgoing request.
 * Pass tokens via \`getAuth\` on the default fetcher (or call manually).
 * Bearer tokens may be raw or already prefixed with \`Bearer \`.
 */
export const applyAuth = (headers: Headers, ${urlParam}: URL, auth: AuthCredentials): void => {
${applyBody}
};
`;
};
