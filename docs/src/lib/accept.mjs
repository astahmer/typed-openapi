const PRODUCES = ["text/html", "text/markdown"];

function parseAccept(header) {
  return header.split(",").map((raw) => {
    const parts = raw.trim().split(";").map((part) => part.trim());
    const type = (parts[0] ?? "").toLowerCase();
    let q = 1;

    for (const parameter of parts.slice(1)) {
      const [name, value] = parameter.split("=").map((part) => part.trim().toLowerCase());
      if (name === "q") {
        const parsed = Number(value);
        if (!Number.isNaN(parsed)) q = Math.max(0, Math.min(1, parsed));
      }
    }

    const specificity = type === "*/*" ? 0 : type.endsWith("/*") ? 1 : 2;
    return { type, q, specificity };
  });
}

function matches(entry, candidate) {
  if (entry.type === "*/*") return true;
  if (entry.type.endsWith("/*")) return candidate.startsWith(entry.type.slice(0, -1));
  return entry.type === candidate;
}

/**
 * Choose the best representation using RFC 9110 quality and specificity rules.
 * Returns null when neither representation is acceptable.
 */
export function preferredType(header) {
  if (!header) return PRODUCES[0];

  const entries = parseAccept(header);
  if (entries.length === 0) return PRODUCES[0];

  let best = null;
  let bestQ = -1;
  let bestPosition = Infinity;

  for (const candidate of PRODUCES) {
    let matched = null;
    let matchedPosition = Infinity;

    for (let index = 0; index < entries.length; index += 1) {
      const entry = entries[index];
      if (!matches(entry, candidate)) continue;

      if (
        matched === null ||
        entry.specificity > matched.specificity ||
        (entry.specificity === matched.specificity && index < matchedPosition)
      ) {
        matched = entry;
        matchedPosition = index;
      }
    }

    if (matched === null || matched.q <= 0) continue;

    if (matched.q > bestQ || (matched.q === bestQ && matchedPosition < bestPosition)) {
      bestQ = matched.q;
      bestPosition = matchedPosition;
      best = candidate;
    }
  }

  return best;
}

/** Add the request headers that affect representation selection to Vary. */
export function appendVaryAccept(headers) {
  const existing = headers.get("Vary");
  const values = existing ? existing.split(",").map((value) => value.trim()).filter(Boolean) : [];
  const lowerCaseValues = new Set(values.map((value) => value.toLowerCase()));

  for (const value of ["Accept", "Accept-Encoding"]) {
    if (!lowerCaseValues.has(value.toLowerCase())) values.push(value);
  }

  headers.set("Vary", values.join(", "));
}
