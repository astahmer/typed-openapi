# low: readOnly/writeOnly stripping skipped for $ref component schemas

- **status:** open
- **revision:** nurlptms (`feat: strip readOnly/writeOnly and support cookie parameters`)
- **resolved_by:**
- **paths:** packages/typed-openapi/src/schema-ir/read-write.ts, packages/typed-openapi/src/map-openapi-endpoints.ts

## Comment

`stripReadWrite` removes `readOnly` properties from request bodies and `writeOnly` properties from responses for inline
object trees, but returns `ref` nodes unchanged (except generic parameters). Request/response bodies that `$ref` shared
component schemas therefore keep response-only / request-only fields in generated types and runtime schemas. This is
acknowledged in code, but it is still a functional gap for common OpenAPI patterns (single DTO schema reused across read
and write paths).

## Evidence

```ts
case "ref":
  if (node.generics?.length) {
    return { ...node, generics: node.generics.map((g) => stripReadWrite(g, mode)) };
  }
  return node;
```

Comment in the same file: “Refs are left as-is (named schemas may be shared across request/response).”

Request/response mapping applies `stripReadWrite` only after `openApiToIr` on the top-level body/response schema
(`map-openapi-endpoints.ts`), so a `$ref` to `#/components/schemas/Pet` bypasses property-level stripping inside `Pet`.
