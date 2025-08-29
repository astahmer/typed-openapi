import { configure, t } from '@traversable/schema'
import {fromJsonSchema} from "@traversable/schema-to-json-schema"
import '@traversable/registry'
import '@traversable/schema-to-json-schema/install'

const MySchema = t.object({
    abc: t.integer,
    def: t.array(t.string),
})

const MyJsonSchema = MySchema.toJsonSchema()

const obj =fromJsonSchema({ type: "object", properties: { message: { type: "string" } }, required: [] });

configure({schema: {optionalTreatment: "treatUndefinedAndOptionalAsTheSame"}})
console.log(1,obj.toString())
console.log(2, obj.toJsonSchema())
console.log(3, MyJsonSchema)
// console.log(toJsonSchema(obj)())

const withOptional = t.object({ message: t.optional(t.string) });
console.log(withOptional.def.message.def)

console.log(fromJsonSchema({ type: "object", properties: { xxx: { type: "string" } }, required: [] }).toString())
