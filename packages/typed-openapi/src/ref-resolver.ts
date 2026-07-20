import type { OpenAPIObject, ReferenceObject } from "openapi3-ts/oas31";
import { get } from "pastable/server";

import { isReferenceObject } from "./is-reference-object.ts";
import { openApiToIr } from "./schema-ir/openapi-to-ir.ts";
import type { SchemaIrConvertContext, SchemaNode } from "./schema-ir/types.ts";
import { normalizeString } from "./string-utils.ts";
import { NameTransformOptions } from "./types.ts";
import { type LibSchemaObject } from "./types.ts";
import { topologicalSort } from "./topological-sort.ts";
import { sanitizeName } from "./sanitize-name.ts";

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

export const createRefResolver = (doc: OpenAPIObject, nameTransform?: NameTransformOptions) => {
  // both used for debugging purpose
  const nameByRef = new Map<string, string>();
  const refByName = new Map<string, string>();

  const byRef = new Map<string, RefInfo>();
  const byNormalized = new Map<string, RefInfo>();

  const nodeByRef = new Map<string, SchemaNode>();

  const getSchemaByRef = <T = LibSchemaObject>(ref: string) => {
    // #components -> #/components
    const correctRef = autocorrectRef(ref);
    const split = correctRef.split("/");

    // "#/components/schemas/Something.jsonld" -> #/components/schemas
    const path = split.slice(1, -1).join("/")!;
    const normalizedPath = path.replace("#/", "").replace("#", "").replaceAll("/", ".");
    const map = get(doc, normalizedPath) ?? ({} as any);

    const existingInfo = byRef.get(correctRef);
    if (existingInfo) {
      return map[split[split.length - 1]!] as T;
    }

    // "#/components/schemas/Something.jsonld" -> "Something.jsonld"
    const name = split[split.length - 1]!;
    // `#/definitions/Foo` (Swagger 2 / hybrid) has no `components.*` segment — treat as schemas.
    const kind = (
      normalizedPath.startsWith("components.")
        ? normalizedPath.split(".")[1]
        : normalizedPath === "definitions"
          ? "schemas"
          : normalizedPath.split(".")[1]
    ) as RefInfo["kind"];
    const baseNormalized = sanitizeName(
      nameTransform?.transformSchemaName
        ? nameTransform.transformSchemaName(normalizeString(name))
        : normalizeString(name),
      "schema",
    );

    let normalized = baseNormalized;
    if (refByName.has(normalized) && refByName.get(normalized) !== correctRef) {
      const kindSuffix = `${baseNormalized}_${kind}`;
      normalized = kindSuffix;
      let suffix = 2;
      while (refByName.has(normalized) && refByName.get(normalized) !== correctRef) {
        normalized = `${kindSuffix}_${suffix++}`;
      }
    }

    nameByRef.set(correctRef, normalized);
    refByName.set(normalized, correctRef);

    const infos = { ref: correctRef, name, normalized, kind };
    byRef.set(infos.ref, infos);
    byNormalized.set(infos.normalized, infos);

    // doc.components.schemas["Something.jsonld"]
    const schema = map[name] as T;
    if (!schema) {
      throw new Error(`Unresolved ref "${name}" not found in "${path}"`);
    }

    return schema;
  };

  const getInfosByRef = (ref: string) => {
    const correctRef = autocorrectRef(ref);
    if (!byRef.has(correctRef)) {
      // Lazy register (e.g. `#/definitions/*` or refs not under components)
      getSchemaByRef(correctRef);
    }
    return byRef.get(correctRef)!;
  };

  const schemaEntries = Object.entries(doc.components ?? {}).filter(([key]) => componentsWithSchemas.includes(key));

  schemaEntries.forEach(([key, component]) => {
    Object.keys(component).map((name) => {
      const ref = `#/components/${key}/${name}`;
      getSchemaByRef(ref);
    });
  });

  // Swagger 2 / hybrid OAS docs may still expose schemas under `definitions`
  const definitions = (doc as OpenAPIObject & { definitions?: Record<string, LibSchemaObject> }).definitions;
  if (definitions) {
    Object.keys(definitions).forEach((name) => {
      getSchemaByRef(`#/definitions/${name}`);
    });
  }

  const directDependencies = new Map<string, Set<string>>();

  const irCtx: SchemaIrConvertContext = { getRefName: (ref) => getInfosByRef(ref).normalized };

  const registerSchemaNode = (ref: string) => {
    const schema = getSchemaByRef(ref);
    nodeByRef.set(ref, openApiToIr(schema, irCtx));

    if (!directDependencies.has(ref)) {
      directDependencies.set(ref, new Set<string>());
    }
    setSchemaDependencies(schema, directDependencies.get(ref)!);
  };

  // need to be done after all refs are resolved
  schemaEntries.forEach(([key, component]) => {
    Object.keys(component).map((name) => {
      registerSchemaNode(`#/components/${key}/${name}`);
    });
  });

  if (definitions) {
    Object.keys(definitions).forEach((name) => {
      registerSchemaNode(`#/definitions/${name}`);
    });
  }

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
        return [nodeByRef.get(infos.ref)!, infos] as [node: SchemaNode, infos: RefInfo];
      });

      return schemaOrderedByDependencies;
    },
    directDependencies,
    transitiveDependencies,
  };
};

export interface RefResolver extends ReturnType<typeof createRefResolver> {}

const setSchemaDependencies = (schema: LibSchemaObject, deps: Set<string>) => {
  const visit = (schema: LibSchemaObject | ReferenceObject): void => {
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
