import type { OpenAPIObject, SchemaObject, ReferenceObject } from "openapi3-ts/oas31";
import { get } from "pastable/server";

import { normalizeString } from "./string-utils";
import { isReferenceObject } from "./is-reference-object";
import { AnyBoxDef, GenericFactory } from "./types";
import { openApiSchemaToTs } from "./openapi-schema-to-ts";
import { Box } from "./box";

const autocorrectRef = (ref: string) => (ref[1] === "/" ? ref : "#/" + ref.slice(1));
const componentsWithSchemas = ["schemas", "responses", "parameters", "requestBodies", "headers"];

type RefInfo = {
  ref: string;
  name: string;
  normalized: string;
  kind: "schemas" | "responses" | "parameters" | "requestBodies" | "headers";
};

export const createRefResolver = (doc: OpenAPIObject, factory: GenericFactory) => {
  // both used for debugging purpose
  const nameByRef = new Map<string, string>();
  const refByName = new Map<string, string>();

  const byRef = new Map<string, RefInfo>();
  const byNormalized = new Map<string, RefInfo>();

  const boxByRef = new Map<string, Box<AnyBoxDef>>();

  const getSchemaByRef = <T = SchemaObject>(ref: string) => {
    // #components -> #/components
    const correctRef = autocorrectRef(ref);
    const split = correctRef.split("/");

    // "#/components/schemas/Something.jsonld" -> #/components/schemas
    const path = split.slice(1, -1).join("/")!;
    const normalizedPath = path.replace("#/", "").replace("#", "").replaceAll("/", ".");
    const map = get(doc, normalizedPath) ?? ({} as any);

    // "#/components/schemas/Something.jsonld" -> "Something.jsonld"
    const name = split[split.length - 1]!;
    const normalized = normalizeString(name);

    nameByRef.set(correctRef, normalized);
    refByName.set(normalized, correctRef);

    const infos = { ref: correctRef, name, normalized, kind: normalizedPath.split(".")[1] as RefInfo["kind"] };
    byRef.set(infos.ref, infos);
    byNormalized.set(infos.normalized, infos);

    // doc.components.schemas["Something.jsonld"]
    const schema = map[name] as T;
    if (!schema) {
      throw new Error(`Unresolved ref "${name}" not found in "${path}"`);
    }

    return schema;
    // return Object.assign({ $refName: normalized }, schema);
  };

  const getName = (ref: string) => byRef.get(autocorrectRef(ref))!;

  Object.entries(doc.components ?? {})
    .filter(([key]) => componentsWithSchemas.includes(key))
    .map(([key, component]) => {
      Object.keys(component).map((name) => {
        const ref = `#/components/${key}/${name}`;
        // console.log(ref);
        getSchemaByRef(ref);
      });
    });

  // need to be done after all refs are resolved
  Object.entries(doc.components ?? {})
    .filter(([key]) => componentsWithSchemas.includes(key))
    .map(([key, component]) => {
      Object.keys(component).map((name) => {
        const ref = `#/components/${key}/${name}`;
        const schema = getSchemaByRef(ref);
        boxByRef.set(ref, openApiSchemaToTs({ schema, ctx: { factory, refs: { getName } as any } }));
      });
    });

  return {
    get: getSchemaByRef,
    unwrap: <T extends ReferenceObject | {}>(component: T) => {
      return (isReferenceObject(component) ? getSchemaByRef(component.$ref) : component) as Exclude<T, ReferenceObject>;
    },
    getName,
    infos: byRef,
    schemas: boxByRef,
  };
};

export interface RefResolver extends ReturnType<typeof createRefResolver> {}
