export type RequestFormat = "json" | "form-data" | "form-url" | "binary" | "text";

/**
 * Encode a request body for fetch according to OpenAPI `requestFormat`.
 * Used by `--default-fetcher` (inlined) and unit tests.
 */
export const encodeRequestBody = (
  requestFormat: RequestFormat,
  body: unknown,
): { body?: BodyInit; contentType?: string } => {
  if (body === undefined) return {};

  switch (requestFormat) {
    case "form-data": {
      if (body instanceof FormData) return { body };
      const formData = new FormData();
      if (body && typeof body === "object") {
        for (const [key, value] of Object.entries(body as Record<string, unknown>)) {
          if (value == null) continue;
          if (value instanceof Blob) {
            formData.append(key, value);
          } else if (Array.isArray(value)) {
            for (const item of value) {
              if (item == null) continue;
              formData.append(key, item instanceof Blob ? item : String(item));
            }
          } else {
            formData.append(key, String(value));
          }
        }
      }
      // Do not set Content-Type — fetch sets multipart boundary.
      return { body: formData };
    }
    case "form-url": {
      if (body instanceof URLSearchParams) {
        return { body, contentType: "application/x-www-form-urlencoded" };
      }
      const searchParams = new URLSearchParams();
      if (body && typeof body === "object") {
        for (const [key, value] of Object.entries(body as Record<string, unknown>)) {
          if (value == null) continue;
          if (Array.isArray(value)) {
            for (const item of value) {
              if (item != null) searchParams.append(key, String(item));
            }
          } else {
            searchParams.append(key, String(value));
          }
        }
      }
      return { body: searchParams, contentType: "application/x-www-form-urlencoded" };
    }
    case "binary": {
      if (typeof body === "string" || body instanceof Blob || body instanceof ArrayBuffer || ArrayBuffer.isView(body)) {
        return { body: body as BodyInit, contentType: "application/octet-stream" };
      }
      throw new TypeError(
        `requestFormat "binary" expects string | Blob | ArrayBuffer | ArrayBufferView, got ${Object.prototype.toString.call(body)}`,
      );
    }
    case "text":
      return { body: String(body), contentType: "text/plain" };
    case "json":
    default:
      return { body: JSON.stringify(body), contentType: "application/json" };
  }
};
