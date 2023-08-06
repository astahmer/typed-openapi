import type { OpenAPIObject, ReferenceObject, SchemaObject } from "openapi3-ts/oas31";
import { get } from "pastable/server";

import { Box } from "./box";
import { isReferenceObject } from "./is-reference-object";
import { openApiSchemaToTs } from "./openapi-schema-to-ts";
import { normalizeString } from "./string-utils";
import { AnyBoxDef, GenericFactory } from "./types";
import { topologicalSort } from "./topological-sort";

const autocorrectRef = (ref: string) => (ref[1] === "/" ? ref : "#/" + ref.slice(1));
const componentsWithSchemas = ["schemas", "responses", "parameters", "requestBodies", "headers"];

export type RefInfo = {
  /**
   * The (potentially autocorrected) ref
   * @example "#/components/schemas/MySchema"
   */
  ref: string;
  /**
   * The name of the ref
   * @example "MySchema"
   * */
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
  };

  const getInfosByRef = (ref: string) => byRef.get(autocorrectRef(ref))!;

  const schemaEntries = Object.entries(doc.components ?? {}).filter(([key]) => componentsWithSchemas.includes(key));

  schemaEntries.forEach(([key, component]) => {
    Object.keys(component).map((name) => {
      const ref = `#/components/${key}/${name}`;
      getSchemaByRef(ref);
    });
  });

  const directDependencies = new Map<string, Set<string>>();

  // need to be done after all refs are resolved
  schemaEntries.forEach(([key, component]) => {
    Object.keys(component).map((name) => {
      const ref = `#/components/${key}/${name}`;
      const schema = getSchemaByRef(ref);
      boxByRef.set(ref, openApiSchemaToTs({ schema, ctx: { factory, refs: { getInfosByRef } as any } }));

      if (!directDependencies.has(ref)) {
        directDependencies.set(ref, new Set<string>());
      }
      setSchemaDependencies(schema, directDependencies.get(ref)!);
    });
  });

  const transitiveDependencies = getTransitiveDependencies(directDependencies);

  return {
    get: getSchemaByRef,
    unwrap: <T extends ReferenceObject | {}>(component: T) => {
      return (isReferenceObject(component) ? getSchemaByRef(component.$ref) : component) as Exclude<T, ReferenceObject>;
    },
    getInfosByRef: getInfosByRef,
    infos: byRef,
    /**
     * Get the schemas in the order they should be generated, depending on their dependencies
     * so that a schema is generated before the ones that depend on it
     */
    getOrderedSchemas: () => {
      const schemaOrderedByDependencies = topologicalSort(transitiveDependencies).map((ref) => {
        const infos = getInfosByRef(ref);
        return [boxByRef.get(infos.ref)!, infos] as [schema: Box<AnyBoxDef>, infos: RefInfo];
      });

      return schemaOrderedByDependencies;
    },
    directDependencies,
    transitiveDependencies,
  };
};

export interface RefResolver extends ReturnType<typeof createRefResolver> {}

const setSchemaDependencies = (schema: SchemaObject, deps: Set<string>) => {
  const visit = (schema: SchemaObject | ReferenceObject): void => {
    if (!schema) return;

    if (isReferenceObject(schema)) {
      deps.add(schema.$ref);
      return;
    }

    if (schema.allOf) {
      for (const allOf of schema.allOf) {
        visit(allOf);
      }

      return;
    }

    if (schema.oneOf) {
      for (const oneOf of schema.oneOf) {
        visit(oneOf);
      }

      return;
    }

    if (schema.anyOf) {
      for (const anyOf of schema.anyOf) {
        visit(anyOf);
      }

      return;
    }

    if (schema.type === "array") {
      if (!schema.items) return;
      return void visit(schema.items);
    }

    if (schema.type === "object" || schema.properties || schema.additionalProperties) {
      if (schema.properties) {
        for (const property in schema.properties) {
          visit(schema.properties[property]!);
        }
      }

      if (schema.additionalProperties && typeof schema.additionalProperties === "object") {
        visit(schema.additionalProperties);
      }
    }
  };

  visit(schema);
};

const getTransitiveDependencies = (directDependencies: Map<string, Set<string>>) => {
  const transitiveDependencies = new Map<string, Set<string>>();
  const visitedsDeepRefs = new Set<string>();

  directDependencies.forEach((deps, ref) => {
    if (!transitiveDependencies.has(ref)) {
      transitiveDependencies.set(ref, new Set());
    }

    const visit = (depRef: string) => {
      transitiveDependencies.get(ref)!.add(depRef);

      const deps = directDependencies.get(depRef);
      if (deps && ref !== depRef) {
        deps.forEach((transitive) => {
          const key = ref + "__" + transitive;
          if (visitedsDeepRefs.has(key)) return;

          visitedsDeepRefs.add(key);
          visit(transitive);
        });
      }
    };

    deps.forEach((dep) => visit(dep));
  });

  return transitiveDependencies;
};
