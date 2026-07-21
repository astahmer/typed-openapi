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
};

export const parseSecuritySchemes = (doc: OpenAPIObject): ParsedSecurityScheme[] => {
  const schemes = doc.components?.securitySchemes ?? {};
  const out: ParsedSecurityScheme[] = [];

  for (const [name, raw] of Object.entries(schemes)) {
    // Skip unresolved refs — SwaggerParser.bundle should inline
    if (!raw || typeof raw !== "object" || "$ref" in raw) continue;
    const scheme = raw as SecuritySchemeObject;
    const prop = sanitizeName(name, "schema") || name.replace(/[^a-zA-Z0-9_]/g, "_");

    if (scheme.type === "apiKey") {
      out.push({
        name,
        prop,
        type: "apiKey",
        in: scheme.in as "header" | "query" | "cookie",
        paramName: scheme.name,
        description: scheme.description,
      });
      continue;
    }

    if (scheme.type === "http") {
      out.push({
        name,
        prop,
        type: "http",
        scheme: scheme.scheme?.toLowerCase(),
        description: scheme.description,
      });
      continue;
    }

    if (scheme.type === "oauth2" || scheme.type === "openIdConnect") {
      out.push({
        name,
        prop,
        type: scheme.type,
        scheme: "bearer",
        description: scheme.description,
      });
      continue;
    }

    out.push({ name, prop, type: scheme.type, description: scheme.description });
  }

  return out;
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
      return `${doc}  ${JSON.stringify(s.prop)}?: string;`;
    })
    .join("\n");

  const applyBody = schemes
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
    const part = ${JSON.stringify(param + "=")} + auth[${key}];
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

      // oauth2 / openIdConnect / http bearer (default)
      return `  if (auth[${key}]) headers.set("Authorization", "Bearer " + auth[${key}]);`;
    })
    .join("\n");

  return `export type AuthCredentials = {
${fields}
};

/**
 * Apply OpenAPI securitySchemes credentials to the outgoing request.
 * Pass tokens via \`getAuth\` on the default fetcher (or call manually).
 */
export const applyAuth = (headers: Headers, url: URL, auth: AuthCredentials): void => {
${applyBody}
};
`;
};
