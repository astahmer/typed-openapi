export type ValidationPreset = "loose" | "formats" | "strict";

export type ValidationPolicy = {
  preset: ValidationPreset;
  /** Apply well-known string formats (email, uuid, …) */
  formats: boolean;
  /** Apply minLength/maxLength/pattern/… */
  stringConstraints: boolean;
  /** Apply minimum/maximum/multipleOf/… */
  numberConstraints: boolean;
  /** Apply minItems/maxItems/uniqueItems */
  arrayConstraints: boolean;
  /** Apply minProperties/maxProperties */
  objectConstraints: boolean;
};

export const resolveValidationPolicy = (
  input?: ValidationPreset | (Partial<ValidationPolicy> & { preset?: ValidationPreset }),
): ValidationPolicy => {
  if (!input || typeof input === "string") {
    const preset = input ?? "strict";
    return policyFromPreset(preset);
  }
  const base = policyFromPreset(input.preset ?? "strict");
  return {
    preset: input.preset ?? base.preset,
    formats: input.formats ?? base.formats,
    stringConstraints: input.stringConstraints ?? base.stringConstraints,
    numberConstraints: input.numberConstraints ?? base.numberConstraints,
    arrayConstraints: input.arrayConstraints ?? base.arrayConstraints,
    objectConstraints: input.objectConstraints ?? base.objectConstraints,
  };
};

const policyFromPreset = (preset: ValidationPreset): ValidationPolicy => {
  switch (preset) {
    case "loose":
      return {
        preset,
        formats: false,
        stringConstraints: false,
        numberConstraints: false,
        arrayConstraints: false,
        objectConstraints: false,
      };
    case "formats":
      return {
        preset,
        formats: true,
        stringConstraints: false,
        numberConstraints: false,
        arrayConstraints: false,
        objectConstraints: false,
      };
    case "strict":
      return {
        preset,
        formats: true,
        stringConstraints: true,
        numberConstraints: true,
        arrayConstraints: true,
        objectConstraints: true,
      };
  }
};

/** Formats we attempt to map natively across adapters */
export const KNOWN_FORMATS = [
  "email",
  "uuid",
  "uri",
  "url",
  "date",
  "date-time",
  "time",
  "ipv4",
  "ipv6",
  "binary",
  "byte",
  "int32",
  "int64",
  "float",
  "double",
] as const;

export type KnownFormat = (typeof KNOWN_FORMATS)[number];
