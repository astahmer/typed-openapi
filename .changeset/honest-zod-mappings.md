---
"typed-openapi": patch
---

Preserve the original schemas for discriminator mappings in Zod 3 and Zod 4 output. This fixes module import failures
when a mapping targets a union, and keeps numeric discriminator values numeric. Keep discriminatedUnion for object
schemas with distinct required discriminator values; use the existing union validation for other shapes instead of
overwriting properties with mapping keys.
