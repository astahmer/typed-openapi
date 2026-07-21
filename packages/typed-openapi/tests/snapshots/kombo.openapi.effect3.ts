
  import { Schema as S } from "@effect/schema";

// <DefaultSchemas>
const Union_default_FULL_prop = S.optionalWith(S.Union(S.Literal("FULL"), S.Literal("DELTA")), { default: () => "FULL" });
const NullOr_default_en_prop = S.optionalWith(S.NullOr(S.Union(S.Literal("en"), S.Literal("de"), S.Literal("fr"), S.Literal("it"), S.Literal("es"))), { default: () => "en" });
const Union_default_EMBEDDED_prop = S.optionalWith(S.Union(S.Literal("EMBEDDED"), S.Literal("MAGIC_LINK")), { default: () => "EMBEDDED" });
const Schema_default_100 = S.transform(S.UndefinedOr(S.Int.pipe(S.greaterThanOrEqualTo(1), S.lessThanOrEqualTo(2000))), S.Int.pipe(S.greaterThanOrEqualTo(1), S.lessThanOrEqualTo(2000)), { strict: true, decode: (i) => (i === undefined ? 100 : i), encode: (a) => a });
const Schema_default_100_4 = S.transform(S.UndefinedOr(S.Int.pipe(S.greaterThanOrEqualTo(1), S.lessThanOrEqualTo(250))), S.Int.pipe(S.greaterThanOrEqualTo(1), S.lessThanOrEqualTo(250)), { strict: true, decode: (i) => (i === undefined ? 100 : i), encode: (a) => a });
const Union_default_false = S.transform(S.UndefinedOr(S.Union(S.Literal("true"), S.Literal("false"))), S.Union(S.Literal("true"), S.Literal("false")), { strict: true, decode: (i) => (i === undefined ? "false" : i), encode: (a) => a });
const Union_default_REQUESTED_prop = S.optionalWith(S.Union(S.Literal("REQUESTED"), S.Literal("APPROVED")), { default: () => "REQUESTED" });
const Boolean_default_false_prop = S.optionalWith(S.Boolean, { default: () => false });
const Array_default_value_prop = S.optionalWith(S.Array(S.String), { default: () => [] });
const NullOr_default_value_prop = S.optionalWith(S.NullOr(S.Array(S.Struct({ email_address: S.optional(S.NullOr(S.String.pipe(S.pattern(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$"))))), type: S.NullOr(S.String) }))), { default: () => [] });
const NullOr_default_value_prop_10 = S.optionalWith(S.NullOr(S.Array(S.Struct({ phone_number: S.String, type: S.optional(S.NullOr(S.String)) }))), { default: () => [] });
const NullOr_default_value_prop_11 = S.optionalWith(S.NullOr(S.Array(S.Struct({ link: S.optional(S.NullOr(S.String)), type: S.optional(S.NullOr(S.String)), username: S.optional(S.NullOr(S.String)) }))), { default: () => [] });
const NullOr_default_value_prop_12 = S.optionalWith(S.NullOr(S.Array(S.Union(S.Struct({ answer: S.Struct({ content: S.NullOr(S.String) }), question: S.Struct({ remote_id: S.NullOr(S.String), title: S.String, type: S.String }) }), S.Struct({ answer: S.Struct({ choice: S.NullOr(S.String) }), question: S.Struct({ remote_id: S.NullOr(S.String), title: S.String, type: S.String }) }), S.Struct({ answer: S.Struct({ choices: Array_default_value_prop }), question: S.Struct({ remote_id: S.NullOr(S.String), title: S.String, type: S.String }) }), S.Struct({ answer: S.Struct({ checked: S.NullOr(S.Boolean) }), question: S.Struct({ remote_id: S.NullOr(S.String), title: S.String, type: S.String }) }), S.Struct({ answer: S.Struct({ number: S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))) }), question: S.Struct({ remote_id: S.NullOr(S.String), title: S.String, type: S.String }) }), S.Struct({ answer: S.Struct({ date: S.NullOr(S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")))) }), question: S.Struct({ remote_id: S.NullOr(S.String), title: S.String, type: S.String }) }), S.Struct({ answer: S.Struct({ raw: S.optional(S.Null) }), question: S.Struct({ remote_id: S.NullOr(S.String), title: S.String, type: S.String }) })))), { default: () => [] });
const Array_default_value_prop_13 = S.optionalWith(S.Array(S.Struct({ url: S.String })), { default: () => [] });
const Union_default_value_prop = S.optionalWith(S.Array(S.Struct({ name: S.String, content_type: S.optional(S.String.pipe(S.pattern(new RegExp("^[\\w.-]+\\/[\\w.-]+$")))), data_url: S.optional(S.String), data: S.optional(S.String), type: S.Union(S.Literal("CV"), S.Literal("COVER_LETTER"), S.Literal("OTHER")) })), { default: () => [] });
const NullOr_default_FIELD_prop = S.optionalWith(S.NullOr(S.Union(S.Literal("SLIDER"), S.Literal("FIELD"))), { default: () => "FIELD" });
const Union_default_null_prop = S.optionalWith(S.Union(S.Array(S.String.pipe(S.minLength(24), S.maxLength(24), S.pattern(new RegExp("^[1-9A-HJ-NP-Za-km-z]+$")))), S.Array(S.Boolean), S.Null), { default: () => null });
const Union_default_value_prop_17 = S.optionalWith(S.Array(S.Union(S.Struct({ type: S.String, label: S.String, value: S.String }), S.Struct({ type: S.String, id: S.String, label: S.String, score: S.Struct({ value: S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308)), max: S.Number.pipe(S.greaterThanOrEqualTo(1)) }), status: S.Union(S.Literal("COMPLETED"), S.Literal("CANCELLED")) }))), { default: () => [] });
const Array_default_value_prop_18 = S.optionalWith(S.Array(S.Struct({ name: S.String, content_type: S.optional(S.String.pipe(S.pattern(new RegExp("^[\\w.-]+\\/[\\w.-]+$")))), data_url: S.optional(S.String), data: S.optional(S.String) })).pipe(S.maxItems(5)), { default: () => [] });
const Schema_default_5 = S.transform(S.UndefinedOr(S.Int.pipe(S.greaterThanOrEqualTo(1), S.lessThanOrEqualTo(5))), S.Int.pipe(S.greaterThanOrEqualTo(1), S.lessThanOrEqualTo(5)), { strict: true, decode: (i) => (i === undefined ? 5 : i), encode: (a) => a });
const Union_default_null_prop_20 = S.optionalWith(S.Union(S.Array(S.String), S.Array(S.Boolean), S.Null), { default: () => null });
const Union_default_HRIS_prop = S.optionalWith(S.Union(S.Literal("HRIS"), S.Literal("ATS"), S.Literal("ASSESSMENT"), S.Literal("LMS")), { default: () => "HRIS" });
const Array_default_value_prop_22 = S.optionalWith(S.Array(S.Struct({ amount: S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308)), lohnart: S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308)), bearbeitungsschluessel: S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308)) })), { default: () => [] });

// </DefaultSchemas>

// <Schemas>
export const GetCheckApiKeyPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ environment_id: S.String, customer_id: S.String }) });
export type GetCheckApiKeyPositiveResponse = S.Schema.Type<typeof GetCheckApiKeyPositiveResponse>;

export const PostForceSyncPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ already_queued: S.Boolean, sync_id: S.String, type: S.Union(S.Literal("FULL"), S.Literal("DELTA")) }) });
export type PostForceSyncPositiveResponse = S.Schema.Type<typeof PostForceSyncPositiveResponse>;

export const PostForceSyncRequestBody = S.Struct({ type: Union_default_FULL_prop });
export type PostForceSyncRequestBody = S.Schema.Type<typeof PostForceSyncRequestBody>;

export const PostPassthroughToolApiParameterTool = S.String;
export type PostPassthroughToolApiParameterTool = S.Schema.Type<typeof PostPassthroughToolApiParameterTool>;

export const PostPassthroughToolApiParameterApi = S.String;
export type PostPassthroughToolApiParameterApi = S.Schema.Type<typeof PostPassthroughToolApiParameterApi>;

export const PostPassthroughToolApiPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ url: S.String, status: S.Int, headers: S.Record({ key: S.String, value: S.Union(S.String, S.Array(S.String)) }), data: S.optional(S.Unknown) }), warnings: S.Array(S.Struct({ message: S.String })) });
export type PostPassthroughToolApiPositiveResponse = S.Schema.Type<typeof PostPassthroughToolApiPositiveResponse>;

export const PostPassthroughToolApiRequestBody = S.Struct({ method: S.Union(S.Literal("GET"), S.Literal("POST"), S.Literal("DELETE"), S.Literal("PUT"), S.Literal("PATCH")), path: S.String, headers: S.optional(S.Record({ key: S.String, value: S.String })), params: S.optional(S.Record({ key: S.String, value: S.String })), data: S.optional(S.Unknown), response_as_base64: S.optional(S.Boolean), multipart_form_data: S.optional(S.Array(S.Struct({ name: S.String, value: S.Union(S.String, S.Struct({ name: S.String, content_type: S.optional(S.String.pipe(S.pattern(new RegExp("^[\\w.-]+\\/[\\w.-]+$")))), data_url: S.optional(S.String), data: S.optional(S.String) })) }))), api_options: S.optional(S.Record({ key: S.String, value: S.String })) });
export type PostPassthroughToolApiRequestBody = S.Schema.Type<typeof PostPassthroughToolApiRequestBody>;

export const DeleteIntegrationsIntegrationIdParameterIntegrationId = S.String;
export type DeleteIntegrationsIntegrationIdParameterIntegrationId = S.Schema.Type<typeof DeleteIntegrationsIntegrationIdParameterIntegrationId>;

export const DeleteIntegrationsIntegrationIdPositiveResponse = S.Struct({ status: S.String, data: S.Record({ key: S.String, value: S.Unknown }) });
export type DeleteIntegrationsIntegrationIdPositiveResponse = S.Schema.Type<typeof DeleteIntegrationsIntegrationIdPositiveResponse>;

export const DeleteIntegrationsIntegrationIdRequestBody = S.Struct({  });
export type DeleteIntegrationsIntegrationIdRequestBody = S.Schema.Type<typeof DeleteIntegrationsIntegrationIdRequestBody>;

export const GetIntegrationsIntegrationIdParameterIntegrationId = S.String;
export type GetIntegrationsIntegrationIdParameterIntegrationId = S.Schema.Type<typeof GetIntegrationsIntegrationIdParameterIntegrationId>;

export const GetIntegrationsIntegrationIdPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ id: S.String, tool: S.Struct({ id: S.String, label: S.String, internal_label: S.NullOr(S.String), logo_url: S.String, icon_url: S.String }), category: S.Union(S.Literal("HRIS"), S.Literal("ATS"), S.Literal("ASSESSMENT"), S.Literal("LMS")), status: S.Union(S.Literal("ACTIVE"), S.Literal("INVALID"), S.Literal("INACTIVE")), setup_status: S.Union(S.Literal("INCOMPLETE"), S.Literal("FINAL_SYNC_PENDING"), S.Literal("COMPLETED")), end_user: S.Struct({ organization_name: S.String, creator_email: S.NullOr(S.String.pipe(S.pattern(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$")))), origin_id: S.NullOr(S.String) }), scope_config: S.Struct({ id: S.String, name: S.NullOr(S.String) }), data_expired_at: S.NullOr(S.String), created_at: S.String, beta: S.Boolean, read_models: S.Array(S.Struct({ id: S.String, label: S.String, is_available: S.Boolean, coverage_status: S.Union(S.Literal("SUPPORTED"), S.Literal("UNSUPPORTED"), S.Literal("NOT_IMPLEMENTED"), S.Literal("UNKNOWN")), scope_config_setting: S.Union(S.Literal("ENABLED"), S.Literal("DISABLED"), S.Literal("OPTIONAL")), opted_out_by_customer: S.Boolean, fields: S.Array(S.Struct({ id: S.String, is_available: S.Boolean, coverage_status: S.Union(S.Literal("SUPPORTED"), S.Literal("UNSUPPORTED"), S.Literal("NOT_IMPLEMENTED"), S.Literal("UNKNOWN")), scope_config_setting: S.Union(S.Literal("ENABLED"), S.Literal("DISABLED"), S.Literal("OPTIONAL")), opted_out_by_customer: S.Boolean })) })), write_actions: S.Array(S.Struct({ id: S.String, label: S.String, is_available: S.Boolean, coverage_status: S.Union(S.Literal("SUPPORTED"), S.Literal("UNSUPPORTED"), S.Literal("NOT_IMPLEMENTED"), S.Literal("UNKNOWN")), scope_config_setting: S.Union(S.Literal("ENABLED"), S.Literal("DISABLED"), S.Literal("OPTIONAL")), opted_out_by_customer: S.Boolean, fields: S.Array(S.Struct({ id: S.String, is_available: S.Boolean, coverage_status: S.Union(S.Literal("SUPPORTED"), S.Literal("UNSUPPORTED"), S.Literal("NOT_IMPLEMENTED"), S.Literal("UNKNOWN")) })) })) }) });
export type GetIntegrationsIntegrationIdPositiveResponse = S.Schema.Type<typeof GetIntegrationsIntegrationIdPositiveResponse>;

export const PutIntegrationsIntegrationIdEnabledParameterIntegrationId = S.String;
export type PutIntegrationsIntegrationIdEnabledParameterIntegrationId = S.Schema.Type<typeof PutIntegrationsIntegrationIdEnabledParameterIntegrationId>;

export const PutIntegrationsIntegrationIdEnabledPositiveResponse = S.Struct({ status: S.String, data: S.Record({ key: S.String, value: S.Unknown }) });
export type PutIntegrationsIntegrationIdEnabledPositiveResponse = S.Schema.Type<typeof PutIntegrationsIntegrationIdEnabledPositiveResponse>;

export const PutIntegrationsIntegrationIdEnabledRequestBody = S.Struct({ value: S.Boolean });
export type PutIntegrationsIntegrationIdEnabledRequestBody = S.Schema.Type<typeof PutIntegrationsIntegrationIdEnabledRequestBody>;

export const PostIntegrationsIntegrationIdRelinkParameterIntegrationId = S.String;
export type PostIntegrationsIntegrationIdRelinkParameterIntegrationId = S.Schema.Type<typeof PostIntegrationsIntegrationIdRelinkParameterIntegrationId>;

export const PostIntegrationsIntegrationIdRelinkPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ link: S.String }) });
export type PostIntegrationsIntegrationIdRelinkPositiveResponse = S.Schema.Type<typeof PostIntegrationsIntegrationIdRelinkPositiveResponse>;

export const PostIntegrationsIntegrationIdRelinkRequestBody = S.Struct({ language: NullOr_default_en_prop, scope_config_id: S.optional(S.NullOr(S.String)), link_type: Union_default_EMBEDDED_prop });
export type PostIntegrationsIntegrationIdRelinkRequestBody = S.Schema.Type<typeof PostIntegrationsIntegrationIdRelinkRequestBody>;

export const PostIntegrationsIntegrationIdSetupLinkParameterIntegrationId = S.String;
export type PostIntegrationsIntegrationIdSetupLinkParameterIntegrationId = S.Schema.Type<typeof PostIntegrationsIntegrationIdSetupLinkParameterIntegrationId>;

export const PostIntegrationsIntegrationIdSetupLinkPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ link: S.String }) });
export type PostIntegrationsIntegrationIdSetupLinkPositiveResponse = S.Schema.Type<typeof PostIntegrationsIntegrationIdSetupLinkPositiveResponse>;

export const PostIntegrationsIntegrationIdSetupLinkRequestBody = S.Struct({ language: NullOr_default_en_prop, link_type: S.Union(S.Literal("EMBEDDED"), S.Literal("MAGIC_LINK")) });
export type PostIntegrationsIntegrationIdSetupLinkRequestBody = S.Schema.Type<typeof PostIntegrationsIntegrationIdSetupLinkRequestBody>;

export const GetIntegrationsIntegrationIdIntegrationFieldsParameterIntegrationId = S.String;
export type GetIntegrationsIntegrationIdIntegrationFieldsParameterIntegrationId = S.Schema.Type<typeof GetIntegrationsIntegrationIdIntegrationFieldsParameterIntegrationId>;

export const GetIntegrationsIntegrationIdIntegrationFieldsParameterCursor = S.String;
export type GetIntegrationsIntegrationIdIntegrationFieldsParameterCursor = S.Schema.Type<typeof GetIntegrationsIntegrationIdIntegrationFieldsParameterCursor>;

export const GetIntegrationsIntegrationIdIntegrationFieldsParameterPageSize = Schema_default_100;
export type GetIntegrationsIntegrationIdIntegrationFieldsParameterPageSize = S.Schema.Type<typeof GetIntegrationsIntegrationIdIntegrationFieldsParameterPageSize>;

export const GetIntegrationsIntegrationIdIntegrationFieldsPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ results: S.Array(S.Struct({ id: S.String, key: S.String, model: S.String, type: S.Union(S.Literal("DEFAULT"), S.Literal("CUSTOM")), label: S.NullOr(S.String), is_passthrough_enabled: S.Boolean, is_writable: S.Boolean })), next_cursor: S.NullOr(S.String), next: S.NullOr(S.String) }) });
export type GetIntegrationsIntegrationIdIntegrationFieldsPositiveResponse = S.Schema.Type<typeof GetIntegrationsIntegrationIdIntegrationFieldsPositiveResponse>;

export const PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationId = S.String;
export type PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationId = S.Schema.Type<typeof PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationId>;

export const PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationFieldId = S.String;
export type PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationFieldId = S.Schema.Type<typeof PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationFieldId>;

export const PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ id: S.String, key: S.String, model: S.String, type: S.Union(S.Literal("DEFAULT"), S.Literal("CUSTOM")), label: S.NullOr(S.String), is_passthrough_enabled: S.Boolean, is_writable: S.Boolean }) });
export type PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdPositiveResponse = S.Schema.Type<typeof PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdPositiveResponse>;

export const PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdRequestBody = S.Struct({ enable_passthrough: S.NullOr(S.Boolean) });
export type PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdRequestBody = S.Schema.Type<typeof PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdRequestBody>;

export const GetIntegrationsIntegrationIdCustomFieldsParameterIntegrationId = S.String;
export type GetIntegrationsIntegrationIdCustomFieldsParameterIntegrationId = S.Schema.Type<typeof GetIntegrationsIntegrationIdCustomFieldsParameterIntegrationId>;

export const GetIntegrationsIntegrationIdCustomFieldsParameterCursor = S.String;
export type GetIntegrationsIntegrationIdCustomFieldsParameterCursor = S.Schema.Type<typeof GetIntegrationsIntegrationIdCustomFieldsParameterCursor>;

export const GetIntegrationsIntegrationIdCustomFieldsParameterPageSize = Schema_default_100_4;
export type GetIntegrationsIntegrationIdCustomFieldsParameterPageSize = S.Schema.Type<typeof GetIntegrationsIntegrationIdCustomFieldsParameterPageSize>;

export const GetIntegrationsIntegrationIdCustomFieldsPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ results: S.Array(S.Struct({ id: S.String, key: S.String, integration_field: S.NullOr(S.Struct({ id: S.String, key: S.String, type: S.Union(S.Literal("DEFAULT"), S.Literal("CUSTOM")), label: S.NullOr(S.String) })), model: S.String, label: S.NullOr(S.String), description: S.NullOr(S.String) })), next_cursor: S.NullOr(S.String), next: S.NullOr(S.String) }) });
export type GetIntegrationsIntegrationIdCustomFieldsPositiveResponse = S.Schema.Type<typeof GetIntegrationsIntegrationIdCustomFieldsPositiveResponse>;

export const PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterIntegrationId = S.String;
export type PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterIntegrationId = S.Schema.Type<typeof PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterIntegrationId>;

export const PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterCustomFieldId = S.String;
export type PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterCustomFieldId = S.Schema.Type<typeof PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterCustomFieldId>;

export const PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ id: S.String, key: S.String, integration_field: S.NullOr(S.Struct({ id: S.String, key: S.String, type: S.Union(S.Literal("DEFAULT"), S.Literal("CUSTOM")), label: S.NullOr(S.String) })), model: S.String, label: S.NullOr(S.String), description: S.NullOr(S.String) }) });
export type PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdPositiveResponse = S.Schema.Type<typeof PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdPositiveResponse>;

export const PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdRequestBody = S.Struct({ integration_field_id: S.NullOr(S.String) });
export type PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdRequestBody = S.Schema.Type<typeof PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdRequestBody>;

export const GetToolsCategoryParameterCategory = S.Union(S.Literal("hris"), S.Literal("ats"), S.Literal("assessment"), S.Literal("lms"));
export type GetToolsCategoryParameterCategory = S.Schema.Type<typeof GetToolsCategoryParameterCategory>;

export const GetToolsCategoryPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ tools: S.Array(S.Struct({ id: S.String, label: S.String, internal_label: S.NullOr(S.String), assets: S.Struct({ logo_url: S.String, icon_url: S.String, icon_black_url: S.String }), paid_api_details_markdown: S.NullOr(S.String), fast_track_details_markdown: S.NullOr(S.String), partner_only_details_markdown: S.NullOr(S.String), connection_guide_url: S.NullOr(S.String), coverage: S.Struct({ read_models: S.Array(S.Struct({ id: S.String, label: S.String, coverage_status: S.Union(S.Literal("SUPPORTED"), S.Literal("UNSUPPORTED"), S.Literal("NOT_IMPLEMENTED"), S.Literal("UNKNOWN")), fields: S.Array(S.Struct({ id: S.String, coverage_status: S.Union(S.Literal("SUPPORTED"), S.Literal("UNSUPPORTED"), S.Literal("NOT_IMPLEMENTED"), S.Literal("UNKNOWN")) })) })), write_actions: S.Array(S.Struct({ id: S.String, label: S.String, coverage_status: S.Union(S.Literal("SUPPORTED"), S.Literal("UNSUPPORTED"), S.Literal("NOT_IMPLEMENTED"), S.Literal("UNKNOWN")), fields: S.Array(S.Struct({ id: S.String, coverage_status: S.Union(S.Literal("SUPPORTED"), S.Literal("UNSUPPORTED"), S.Literal("NOT_IMPLEMENTED"), S.Literal("UNKNOWN")) })) })), features: S.Array(S.Struct({ id: S.String, label: S.String, coverage_status: S.Union(S.Literal("SUPPORTED"), S.Literal("UNSUPPORTED"), S.Literal("NOT_IMPLEMENTED"), S.Literal("UNKNOWN")) })) }) })) }) });
export type GetToolsCategoryPositiveResponse = S.Schema.Type<typeof GetToolsCategoryPositiveResponse>;

export const PostHrisProvisioningGroupsGroupIdDiffParameterGroupId = S.String;
export type PostHrisProvisioningGroupsGroupIdDiffParameterGroupId = S.Schema.Type<typeof PostHrisProvisioningGroupsGroupIdDiffParameterGroupId>;

export const PostHrisProvisioningGroupsGroupIdDiffPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ users: S.Struct({ to_provision: S.Array(S.Struct({ email: S.NullOr(S.String.pipe(S.pattern(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$")))), employee: S.Struct({ id: S.optional(S.String), remote_id: S.optional(S.NullOr(S.String)), first_name: S.optional(S.NullOr(S.String)), last_name: S.optional(S.NullOr(S.String)), groups: S.optional(S.Array(S.Struct({ id: S.String, remote_id: S.NullOr(S.String), name: S.NullOr(S.String) }))), avatar: S.optional(S.NullOr(S.String)), work_location_id: S.optional(S.NullOr(S.String)), legal_entity_id: S.optional(S.NullOr(S.String)) }) })), to_deprovision: S.Array(S.Struct({ origin_id: S.String, email: S.String.pipe(S.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) })), already_provisioned: S.Array(S.Struct({ origin_id: S.String, email: S.String.pipe(S.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)), employee: S.Struct({ id: S.optional(S.String), remote_id: S.optional(S.NullOr(S.String)), first_name: S.optional(S.NullOr(S.String)), last_name: S.optional(S.NullOr(S.String)), groups: S.optional(S.Array(S.Struct({ id: S.String, remote_id: S.NullOr(S.String), name: S.NullOr(S.String) }))), avatar: S.optional(S.NullOr(S.String)), work_location_id: S.optional(S.NullOr(S.String)), legal_entity_id: S.optional(S.NullOr(S.String)) }) })) }) }) });
export type PostHrisProvisioningGroupsGroupIdDiffPositiveResponse = S.Schema.Type<typeof PostHrisProvisioningGroupsGroupIdDiffPositiveResponse>;

export const PostHrisProvisioningGroupsGroupIdDiffRequestBody = S.Struct({ provisioned_users: S.Array(S.Struct({ origin_id: S.String, email: S.String.pipe(S.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) })), options: S.Struct({ employee_fields: S.Array(S.Union(S.Literal("id"), S.Literal("remote_id"), S.Literal("first_name"), S.Literal("last_name"), S.Literal("groups"), S.Literal("avatar"), S.Literal("work_location_id"), S.Literal("legal_entity_id"))) }) });
export type PostHrisProvisioningGroupsGroupIdDiffRequestBody = S.Schema.Type<typeof PostHrisProvisioningGroupsGroupIdDiffRequestBody>;

export const PostHrisProvisioningGroupsGroupIdSetupLinksParameterGroupId = S.String;
export type PostHrisProvisioningGroupsGroupIdSetupLinksParameterGroupId = S.Schema.Type<typeof PostHrisProvisioningGroupsGroupIdSetupLinksParameterGroupId>;

export const PostHrisProvisioningGroupsGroupIdSetupLinksPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ url: S.String, expires_at: S.String }) });
export type PostHrisProvisioningGroupsGroupIdSetupLinksPositiveResponse = S.Schema.Type<typeof PostHrisProvisioningGroupsGroupIdSetupLinksPositiveResponse>;

export const PostHrisProvisioningGroupsGroupIdSetupLinksRequestBody = S.Struct({ language: NullOr_default_en_prop });
export type PostHrisProvisioningGroupsGroupIdSetupLinksRequestBody = S.Schema.Type<typeof PostHrisProvisioningGroupsGroupIdSetupLinksRequestBody>;

export const GetHrisEmployeesParameterCursor = S.String;
export type GetHrisEmployeesParameterCursor = S.Schema.Type<typeof GetHrisEmployeesParameterCursor>;

export const GetHrisEmployeesParameterPageSize = Schema_default_100_4;
export type GetHrisEmployeesParameterPageSize = S.Schema.Type<typeof GetHrisEmployeesParameterPageSize>;

export const GetHrisEmployeesParameterUpdatedAfter = S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisEmployeesParameterUpdatedAfter = S.Schema.Type<typeof GetHrisEmployeesParameterUpdatedAfter>;

export const GetHrisEmployeesParameterIncludeDeleted = Union_default_false;
export type GetHrisEmployeesParameterIncludeDeleted = S.Schema.Type<typeof GetHrisEmployeesParameterIncludeDeleted>;

export const GetHrisEmployeesParameterIgnoreUnsupportedFilters = Union_default_false;
export type GetHrisEmployeesParameterIgnoreUnsupportedFilters = S.Schema.Type<typeof GetHrisEmployeesParameterIgnoreUnsupportedFilters>;

export const GetHrisEmployeesParameterIds = S.String;
export type GetHrisEmployeesParameterIds = S.Schema.Type<typeof GetHrisEmployeesParameterIds>;

export const GetHrisEmployeesParameterRemoteIds = S.String;
export type GetHrisEmployeesParameterRemoteIds = S.Schema.Type<typeof GetHrisEmployeesParameterRemoteIds>;

export const GetHrisEmployeesParameterEmploymentStatus = S.Union(S.Literal("ACTIVE"), S.Literal("PENDING"), S.Literal("INACTIVE"), S.Literal("LEAVE"));
export type GetHrisEmployeesParameterEmploymentStatus = S.Schema.Type<typeof GetHrisEmployeesParameterEmploymentStatus>;

export const GetHrisEmployeesParameterEmploymentStatuses = S.String;
export type GetHrisEmployeesParameterEmploymentStatuses = S.Schema.Type<typeof GetHrisEmployeesParameterEmploymentStatuses>;

export const GetHrisEmployeesParameterGroupIds = S.String;
export type GetHrisEmployeesParameterGroupIds = S.Schema.Type<typeof GetHrisEmployeesParameterGroupIds>;

export const GetHrisEmployeesParameterLegalEntityIds = S.String;
export type GetHrisEmployeesParameterLegalEntityIds = S.Schema.Type<typeof GetHrisEmployeesParameterLegalEntityIds>;

export const GetHrisEmployeesParameterWorkLocationIds = S.String;
export type GetHrisEmployeesParameterWorkLocationIds = S.Schema.Type<typeof GetHrisEmployeesParameterWorkLocationIds>;

export const GetHrisEmployeesParameterWorkEmails = S.String;
export type GetHrisEmployeesParameterWorkEmails = S.Schema.Type<typeof GetHrisEmployeesParameterWorkEmails>;

export const GetHrisEmployeesParameterPersonalEmails = S.String;
export type GetHrisEmployeesParameterPersonalEmails = S.Schema.Type<typeof GetHrisEmployeesParameterPersonalEmails>;

export const GetHrisEmployeesParameterCustomFields = S.String;
export type GetHrisEmployeesParameterCustomFields = S.Schema.Type<typeof GetHrisEmployeesParameterCustomFields>;

export const GetHrisEmployeesPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ next: S.NullOr(S.String), results: S.Array(S.Struct({ id: S.String, remote_id: S.String, employee_number: S.NullOr(S.String), first_name: S.NullOr(S.String), last_name: S.NullOr(S.String), nationality: S.NullOr(S.String), display_full_name: S.NullOr(S.String), job_title: S.NullOr(S.String), work_email: S.optional(S.NullOr(S.String.pipe(S.pattern(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$"))))), personal_email: S.optional(S.NullOr(S.String.pipe(S.pattern(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$"))))), mobile_phone_number: S.NullOr(S.String), ssn: S.NullOr(S.String), tax_id: S.NullOr(S.String), gender: S.optional(S.Union(S.Union(S.Literal("MALE"), S.Literal("FEMALE"), S.Literal("NON_BINARY"), S.Literal("NOT_SPECIFIED")), S.String, S.Null)), ethnicity: S.optional(S.Union(S.Union(S.Literal("WHITE"), S.Literal("ASIAN"), S.Literal("HISPANIC_LATINO"), S.Literal("HAWAIIAN"), S.Literal("NATIVE_AMERICAN"), S.Literal("BLACK_AFRICAN_AMERICAN"), S.Literal("MULTIPLE_ETHNICITIES"), S.Literal("DECLINE_TO_SPECIFY")), S.String, S.Null)), marital_status: S.optional(S.Union(S.Union(S.Literal("SINGLE"), S.Literal("MARRIED"), S.Literal("DOMESTIC_PARTNERSHIP"), S.Literal("WIDOWED"), S.Literal("DIVORCED"), S.Literal("SEPARATED"), S.Literal("NOT_MARRIED")), S.String, S.Null)), employment_status: S.optional(S.Union(S.Union(S.Literal("ACTIVE"), S.Literal("PENDING"), S.Literal("INACTIVE"), S.Literal("LEAVE")), S.String, S.Null)), employment_type: S.optional(S.Union(S.Union(S.Literal("FULL_TIME"), S.Literal("PART_TIME"), S.Literal("CONTRACT"), S.Literal("INTERNSHIP"), S.Literal("FREELANCE"), S.Literal("WORKING_STUDENT"), S.Literal("APPRENTICESHIP"), S.Literal("TRAINING")), S.String, S.Null)), weekly_hours: S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), avatar: S.NullOr(S.String), work_location_id: S.NullOr(S.String), legal_entity_id: S.NullOr(S.String), manager_id: S.NullOr(S.String), home_address: S.optional(S.NullOr(S.Struct({ city: S.optional(S.NullOr(S.String)), country: S.optional(S.NullOr(S.String)), raw: S.optional(S.NullOr(S.String)), state: S.optional(S.NullOr(S.String)), street_1: S.optional(S.NullOr(S.String)), street_2: S.optional(S.NullOr(S.String)), zip_code: S.optional(S.NullOr(S.String)) }))), bank_accounts: S.optional(S.NullOr(S.Array(S.Struct({ iban: S.optional(S.NullOr(S.String)), bic: S.optional(S.NullOr(S.String)), account_number: S.optional(S.NullOr(S.String)), holder_name: S.optional(S.NullOr(S.String)), bank_name: S.optional(S.NullOr(S.String)), domestic_bank_routing: S.optional(S.NullOr(S.Struct({ number: S.String, type: S.NullOr(S.Union(S.Literal("GB_SORT_CODE"), S.Literal("DE_BANKLEITZAHL"), S.Literal("US_ABA_ROUTING_TRANSIT_NUMBER"), S.Literal("CA_ROUTING_NUMBER"), S.Literal("AU_BSB_CODE"), S.Literal("FR_RIB"))) }))) })))), date_of_birth: S.NullOr(S.String), start_date: S.NullOr(S.String), termination_date: S.NullOr(S.String), remote_created_at: S.NullOr(S.String), changed_at: S.String, remote_deleted_at: S.NullOr(S.String), custom_fields: S.NullOr(S.Record({ key: S.String, value: S.Unknown })), integration_fields: S.Array(S.Struct({ id: S.String, key: S.String, type: S.Union(S.Literal("DEFAULT"), S.Literal("CUSTOM")), value: S.optional(S.Null), label: S.NullOr(S.String) })), remote_data: S.NullOr(S.Record({ key: S.String, value: S.Unknown })), employments: S.Array(S.Struct({ id: S.String, remote_id: S.NullOr(S.String), employee_id: S.String, job_title: S.NullOr(S.String), pay_rate: S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), pay_period: S.optional(S.Union(S.Union(S.Literal("HOUR"), S.Literal("DAY"), S.Literal("WEEK"), S.Literal("TWO_WEEKS"), S.Literal("HALF_MONTH"), S.Literal("MONTH"), S.Literal("TWO_MONTHS"), S.Literal("QUARTER"), S.Literal("HALF_YEAR"), S.Literal("YEAR")), S.String, S.Null)), pay_frequency: S.optional(S.Union(S.Union(S.Literal("DAILY"), S.Literal("WEEKLY"), S.Literal("BIWEEKLY"), S.Literal("MONTHLY"), S.Literal("SEMIMONTHLY"), S.Literal("QUARTERLY"), S.Literal("SEMIANNUALLY"), S.Literal("ANNUALLY"), S.Literal("PRO_RATA")), S.String, S.Null)), employment_type: S.optional(S.Union(S.Union(S.Literal("FULL_TIME"), S.Literal("PART_TIME"), S.Literal("CONTRACT"), S.Literal("INTERNSHIP"), S.Literal("FREELANCE"), S.Literal("WORKING_STUDENT"), S.Literal("APPRENTICESHIP"), S.Literal("TRAINING")), S.String, S.Null)), pay_currency: S.NullOr(S.String), effective_date: S.NullOr(S.String), changed_at: S.String, remote_deleted_at: S.NullOr(S.String), remote_data: S.NullOr(S.Record({ key: S.String, value: S.Unknown })), custom_fields: S.NullOr(S.Record({ key: S.String, value: S.Unknown })), integration_fields: S.Array(S.Struct({ id: S.String, key: S.String, type: S.Union(S.Literal("DEFAULT"), S.Literal("CUSTOM")), value: S.optional(S.Null), label: S.NullOr(S.String) })) })), time_off_balances: S.Array(S.Struct({ id: S.String, remote_id: S.NullOr(S.String), employee_id: S.String, type_id: S.String, balance: S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), balance_unit: S.NullOr(S.Union(S.Literal("HOURS"), S.Literal("DAYS"))), changed_at: S.String, remote_deleted_at: S.NullOr(S.String), used: S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), used_unit: S.NullOr(S.Union(S.Literal("HOURS"), S.Literal("DAYS"))), remote_data: S.NullOr(S.Record({ key: S.String, value: S.Unknown })) })), manager: S.NullOr(S.Struct({ first_name: S.NullOr(S.String), last_name: S.NullOr(S.String), display_full_name: S.NullOr(S.String), id: S.String, employee_number: S.NullOr(S.String), work_email: S.optional(S.NullOr(S.String.pipe(S.pattern(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$"))))), remote_id: S.String, employment_status: S.optional(S.Union(S.Union(S.Literal("ACTIVE"), S.Literal("PENDING"), S.Literal("INACTIVE"), S.Literal("LEAVE")), S.String, S.Null)), termination_date: S.NullOr(S.String) })), groups: S.Array(S.Struct({ id: S.String, remote_id: S.String, name: S.NullOr(S.String), type: S.NullOr(S.Union(S.Literal("DEPARTMENT"), S.Literal("TEAM"), S.Literal("COST_CENTER"))) })), legal_entity: S.NullOr(S.Struct({ id: S.String, remote_id: S.NullOr(S.String), name: S.NullOr(S.String), address: S.optional(S.NullOr(S.Struct({ city: S.optional(S.NullOr(S.String)), country: S.optional(S.NullOr(S.String)), raw: S.optional(S.NullOr(S.String)), state: S.optional(S.NullOr(S.String)), street_1: S.optional(S.NullOr(S.String)), street_2: S.optional(S.NullOr(S.String)), zip_code: S.optional(S.NullOr(S.String)) }))) })), teams: S.Array(S.Struct({ id: S.String, remote_id: S.String, name: S.NullOr(S.String), type: S.NullOr(S.Union(S.Literal("DEPARTMENT"), S.Literal("TEAM"), S.Literal("COST_CENTER"))) })), work_location: S.NullOr(S.Struct({ id: S.String, remote_id: S.NullOr(S.String), name: S.NullOr(S.String), address: S.optional(S.NullOr(S.Struct({ city: S.optional(S.NullOr(S.String)), country: S.optional(S.NullOr(S.String)), raw: S.optional(S.NullOr(S.String)), state: S.optional(S.NullOr(S.String)), street_1: S.optional(S.NullOr(S.String)), street_2: S.optional(S.NullOr(S.String)), zip_code: S.optional(S.NullOr(S.String)) }))), type: S.NullOr(S.String), changed_at: S.String, remote_deleted_at: S.NullOr(S.String), remote_data: S.NullOr(S.Record({ key: S.String, value: S.Unknown })) })) })) }) });
export type GetHrisEmployeesPositiveResponse = S.Schema.Type<typeof GetHrisEmployeesPositiveResponse>;

export const PostHrisEmployeesPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ id: S.String, remote_id: S.String, employee_number: S.NullOr(S.String), first_name: S.NullOr(S.String), last_name: S.NullOr(S.String), nationality: S.NullOr(S.String), display_full_name: S.NullOr(S.String), job_title: S.NullOr(S.String), work_email: S.optional(S.NullOr(S.String.pipe(S.pattern(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$"))))), personal_email: S.optional(S.NullOr(S.String.pipe(S.pattern(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$"))))), mobile_phone_number: S.NullOr(S.String), ssn: S.NullOr(S.String), tax_id: S.NullOr(S.String), gender: S.optional(S.Union(S.Union(S.Literal("MALE"), S.Literal("FEMALE"), S.Literal("NON_BINARY"), S.Literal("NOT_SPECIFIED")), S.String, S.Null)), ethnicity: S.optional(S.Union(S.Union(S.Literal("WHITE"), S.Literal("ASIAN"), S.Literal("HISPANIC_LATINO"), S.Literal("HAWAIIAN"), S.Literal("NATIVE_AMERICAN"), S.Literal("BLACK_AFRICAN_AMERICAN"), S.Literal("MULTIPLE_ETHNICITIES"), S.Literal("DECLINE_TO_SPECIFY")), S.String, S.Null)), marital_status: S.optional(S.Union(S.Union(S.Literal("SINGLE"), S.Literal("MARRIED"), S.Literal("DOMESTIC_PARTNERSHIP"), S.Literal("WIDOWED"), S.Literal("DIVORCED"), S.Literal("SEPARATED"), S.Literal("NOT_MARRIED")), S.String, S.Null)), employment_status: S.optional(S.Union(S.Union(S.Literal("ACTIVE"), S.Literal("PENDING"), S.Literal("INACTIVE"), S.Literal("LEAVE")), S.String, S.Null)), employment_type: S.optional(S.Union(S.Union(S.Literal("FULL_TIME"), S.Literal("PART_TIME"), S.Literal("CONTRACT"), S.Literal("INTERNSHIP"), S.Literal("FREELANCE"), S.Literal("WORKING_STUDENT"), S.Literal("APPRENTICESHIP"), S.Literal("TRAINING")), S.String, S.Null)), weekly_hours: S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), avatar: S.NullOr(S.String), work_location_id: S.NullOr(S.String), legal_entity_id: S.NullOr(S.String), manager_id: S.NullOr(S.String), home_address: S.optional(S.NullOr(S.Struct({ city: S.optional(S.NullOr(S.String)), country: S.optional(S.NullOr(S.String)), raw: S.optional(S.NullOr(S.String)), state: S.optional(S.NullOr(S.String)), street_1: S.optional(S.NullOr(S.String)), street_2: S.optional(S.NullOr(S.String)), zip_code: S.optional(S.NullOr(S.String)) }))), bank_accounts: S.optional(S.NullOr(S.Array(S.Struct({ iban: S.optional(S.NullOr(S.String)), bic: S.optional(S.NullOr(S.String)), account_number: S.optional(S.NullOr(S.String)), holder_name: S.optional(S.NullOr(S.String)), bank_name: S.optional(S.NullOr(S.String)), domestic_bank_routing: S.optional(S.NullOr(S.Struct({ number: S.String, type: S.NullOr(S.Union(S.Literal("GB_SORT_CODE"), S.Literal("DE_BANKLEITZAHL"), S.Literal("US_ABA_ROUTING_TRANSIT_NUMBER"), S.Literal("CA_ROUTING_NUMBER"), S.Literal("AU_BSB_CODE"), S.Literal("FR_RIB"))) }))) })))), date_of_birth: S.NullOr(S.String), start_date: S.NullOr(S.String), termination_date: S.NullOr(S.String), remote_created_at: S.NullOr(S.String), changed_at: S.String, remote_deleted_at: S.NullOr(S.String), custom_fields: S.NullOr(S.Record({ key: S.String, value: S.Unknown })), integration_fields: S.Array(S.Struct({ id: S.String, key: S.String, type: S.Union(S.Literal("DEFAULT"), S.Literal("CUSTOM")), value: S.optional(S.Null), label: S.NullOr(S.String) })), remote_data: S.NullOr(S.Record({ key: S.String, value: S.Unknown })) }), warnings: S.Array(S.Struct({ message: S.String })) });
export type PostHrisEmployeesPositiveResponse = S.Schema.Type<typeof PostHrisEmployeesPositiveResponse>;

export const PostHrisEmployeesRequestBody = S.Struct({ first_name: S.String, last_name: S.String, work_email: S.optional(S.String.pipe(S.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))), gender: S.optional(S.Union(S.Literal("MALE"), S.Literal("FEMALE"), S.Literal("NON_BINARY"), S.Literal("NOT_SPECIFIED"))), job_title: S.optional(S.String), home_address: S.optional(S.Struct({ street_1: S.optional(S.String), street_2: S.optional(S.String), city: S.optional(S.String), state: S.optional(S.String), zip_code: S.optional(S.String), country: S.optional(S.String.pipe(S.pattern(new RegExp("^[A-Z]{2}$")))) })), date_of_birth: S.optional(S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), mobile_phone_number: S.optional(S.String), home_phone_number: S.optional(S.String), nationality: S.optional(S.String.pipe(S.pattern(new RegExp("^[A-Z]{2}$")))), start_date: S.optional(S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), legal_entity_id: S.optional(S.String), location_id: S.optional(S.String), remote_fields: S.optional(S.Struct({ humaans: S.optional(S.Struct({ employee: S.optional(S.Record({ key: S.String, value: S.Unknown })) })), hibob: S.optional(S.Struct({ employee: S.optional(S.Record({ key: S.String, value: S.Unknown })) })), sympa: S.optional(S.Struct({ GenericNewHire: S.optional(S.Record({ key: S.String, value: S.Unknown })) })), silae: S.optional(S.Struct({ siret: S.optional(S.String), employee: S.optional(S.Record({ key: S.String, value: S.Unknown })), employment: S.optional(S.Record({ key: S.String, value: S.Unknown })) })), peoplehr: S.optional(S.Struct({ job_role_effective_date: S.optional(S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), department: S.optional(S.String) })), zohopeople: S.optional(S.Struct({ employee_id: S.optional(S.String.pipe(S.minLength(1))) })), workday: S.optional(S.Struct({ job_requisition_id: S.optional(S.String), position_id: S.optional(S.String), ssn: S.optional(S.String), bank_account: S.optional(S.Struct({ iban: S.String, bic: S.String, bank_name: S.String })) })), deel: S.optional(S.Struct({ candidate_id: S.String, candidate_link: S.String })), bamboohr: S.optional(S.Struct({ employee: S.optional(S.Record({ key: S.String, value: S.Unknown })) })), oracle: S.optional(S.Struct({ group_id: S.String, department_id: S.String })), adpworkforcenow: S.optional(S.Struct({ onboarding_template_code: S.String, applicant_payroll_profile_group_code: S.String, manager_position_id: S.optional(S.String), home_organization_unit_code: S.optional(S.String), personal_email: S.optional(S.String) })), azuread: S.optional(S.Struct({ password: S.String })), paycor: S.optional(S.Struct({ paygroupRemoteId: S.String, departmentRemoteId: S.String })), planday: S.optional(S.Struct({ department_remote_id: S.String })), dayforce: S.optional(S.Struct({ social_security_number: S.String, pay_type: S.String, pay_class: S.String, pay_group: S.String, base_rate: S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308)), role: S.String, location: S.String, department: S.String, job: S.String, country: S.String })) })) });
export type PostHrisEmployeesRequestBody = S.Schema.Type<typeof PostHrisEmployeesRequestBody>;

export const Schema1 = S.suspend(() => S.Record({ key: S.String, value: S.Union(S.Struct({ label: S.String, required: S.Boolean, description: S.optional(S.NullOr(S.String)), unified_key: S.optional(S.NullOr(S.Union(S.Literal("first_name"), S.Literal("last_name"), S.Literal("date_of_birth"), S.Literal("gender"), S.Literal("home_address.city"), S.Literal("home_address.country"), S.Literal("home_address.state"), S.Literal("home_address.street_1"), S.Literal("home_address.street_2"), S.Literal("home_address.zip_code"), S.Literal("job_title"), S.Literal("legal_entity_id"), S.Literal("location_id"), S.Literal("mobile_phone_number"), S.Literal("home_phone_number"), S.Literal("nationality"), S.Literal("start_date"), S.Literal("work_email"), S.Literal("private_email"), S.Literal("yearly_salary")))), type: S.String, min_length: S.optional(S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308)))), max_length: S.optional(S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308)))), reg_exp: S.optional(S.NullOr(S.String)) }), S.Struct({ label: S.String, required: S.Boolean, description: S.optional(S.NullOr(S.String)), unified_key: S.optional(S.NullOr(S.Union(S.Literal("first_name"), S.Literal("last_name"), S.Literal("date_of_birth"), S.Literal("gender"), S.Literal("home_address.city"), S.Literal("home_address.country"), S.Literal("home_address.state"), S.Literal("home_address.street_1"), S.Literal("home_address.street_2"), S.Literal("home_address.zip_code"), S.Literal("job_title"), S.Literal("legal_entity_id"), S.Literal("location_id"), S.Literal("mobile_phone_number"), S.Literal("home_phone_number"), S.Literal("nationality"), S.Literal("start_date"), S.Literal("work_email"), S.Literal("private_email"), S.Literal("yearly_salary")))), type: S.String, min: S.optional(S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308)))), max: S.optional(S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308)))) }), S.Struct({ label: S.String, required: S.Boolean, description: S.optional(S.NullOr(S.String)), unified_key: S.optional(S.NullOr(S.Union(S.Literal("first_name"), S.Literal("last_name"), S.Literal("date_of_birth"), S.Literal("gender"), S.Literal("home_address.city"), S.Literal("home_address.country"), S.Literal("home_address.state"), S.Literal("home_address.street_1"), S.Literal("home_address.street_2"), S.Literal("home_address.zip_code"), S.Literal("job_title"), S.Literal("legal_entity_id"), S.Literal("location_id"), S.Literal("mobile_phone_number"), S.Literal("home_phone_number"), S.Literal("nationality"), S.Literal("start_date"), S.Literal("work_email"), S.Literal("private_email"), S.Literal("yearly_salary")))), type: S.String }), S.Struct({ label: S.String, required: S.Boolean, description: S.optional(S.NullOr(S.String)), unified_key: S.optional(S.NullOr(S.Union(S.Literal("first_name"), S.Literal("last_name"), S.Literal("date_of_birth"), S.Literal("gender"), S.Literal("home_address.city"), S.Literal("home_address.country"), S.Literal("home_address.state"), S.Literal("home_address.street_1"), S.Literal("home_address.street_2"), S.Literal("home_address.zip_code"), S.Literal("job_title"), S.Literal("legal_entity_id"), S.Literal("location_id"), S.Literal("mobile_phone_number"), S.Literal("home_phone_number"), S.Literal("nationality"), S.Literal("start_date"), S.Literal("work_email"), S.Literal("private_email"), S.Literal("yearly_salary")))), type: S.String, options: S.Union(S.Struct({ type: S.String, entries: S.Array(S.Struct({ id: S.String, label: S.String, unified_value: S.optional(S.String), remote_id: S.Union(S.String, S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))) })) }), S.Struct({ type: S.String, link: S.String })) }), S.Struct({ label: S.String, required: S.Boolean, description: S.optional(S.NullOr(S.String)), unified_key: S.optional(S.NullOr(S.String)), type: S.String, min_items: S.optional(S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308)))), max_items: S.optional(S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308)))), options: S.Union(S.Struct({ type: S.String, entries: S.Array(S.Struct({ id: S.String, label: S.String, unified_value: S.optional(S.String), remote_id: S.Union(S.String, S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))) })) }), S.Struct({ type: S.String, link: S.String })) }), S.Struct({ label: S.String, required: S.Boolean, description: S.optional(S.NullOr(S.String)), unified_key: S.optional(S.NullOr(S.Union(S.Literal("first_name"), S.Literal("last_name"), S.Literal("date_of_birth"), S.Literal("gender"), S.Literal("home_address.city"), S.Literal("home_address.country"), S.Literal("home_address.state"), S.Literal("home_address.street_1"), S.Literal("home_address.street_2"), S.Literal("home_address.zip_code"), S.Literal("job_title"), S.Literal("legal_entity_id"), S.Literal("location_id"), S.Literal("mobile_phone_number"), S.Literal("home_phone_number"), S.Literal("nationality"), S.Literal("start_date"), S.Literal("work_email"), S.Literal("private_email"), S.Literal("yearly_salary")))), type: S.String }), S.Struct({ label: S.String, required: S.Boolean, description: S.optional(S.NullOr(S.String)), unified_key: S.optional(S.NullOr(S.Union(S.Literal("first_name"), S.Literal("last_name"), S.Literal("date_of_birth"), S.Literal("gender"), S.Literal("home_address.city"), S.Literal("home_address.country"), S.Literal("home_address.state"), S.Literal("home_address.street_1"), S.Literal("home_address.street_2"), S.Literal("home_address.zip_code"), S.Literal("job_title"), S.Literal("legal_entity_id"), S.Literal("location_id"), S.Literal("mobile_phone_number"), S.Literal("home_phone_number"), S.Literal("nationality"), S.Literal("start_date"), S.Literal("work_email"), S.Literal("private_email"), S.Literal("yearly_salary")))), type: S.String, properties: Schema1 }), S.Struct({ label: S.String, required: S.Boolean, description: S.optional(S.NullOr(S.String)), unified_key: S.optional(S.NullOr(S.Union(S.Literal("first_name"), S.Literal("last_name"), S.Literal("date_of_birth"), S.Literal("gender"), S.Literal("home_address.city"), S.Literal("home_address.country"), S.Literal("home_address.state"), S.Literal("home_address.street_1"), S.Literal("home_address.street_2"), S.Literal("home_address.zip_code"), S.Literal("job_title"), S.Literal("legal_entity_id"), S.Literal("location_id"), S.Literal("mobile_phone_number"), S.Literal("home_phone_number"), S.Literal("nationality"), S.Literal("start_date"), S.Literal("work_email"), S.Literal("private_email"), S.Literal("yearly_salary")))), type: S.String, item_type: Schema2, min_items: S.optional(S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308)))), max_items: S.optional(S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308)))) }), S.Struct({ label: S.String, required: S.Boolean, description: S.optional(S.NullOr(S.String)), unified_key: S.optional(S.NullOr(S.Union(S.Literal("first_name"), S.Literal("last_name"), S.Literal("date_of_birth"), S.Literal("gender"), S.Literal("home_address.city"), S.Literal("home_address.country"), S.Literal("home_address.state"), S.Literal("home_address.street_1"), S.Literal("home_address.street_2"), S.Literal("home_address.zip_code"), S.Literal("job_title"), S.Literal("legal_entity_id"), S.Literal("location_id"), S.Literal("mobile_phone_number"), S.Literal("home_phone_number"), S.Literal("nationality"), S.Literal("start_date"), S.Literal("work_email"), S.Literal("private_email"), S.Literal("yearly_salary")))), type: S.String, file_restrictions: S.Struct({ accepted_mime_types: S.Array(S.String), max_file_size: S.optional(S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308)))) }) })) }));
export type Schema1 = S.Schema.Type<typeof Schema1>;

export const Schema2 = S.suspend(() => S.Union(S.Struct({ label: S.String, required: S.Boolean, description: S.optional(S.NullOr(S.String)), unified_key: S.optional(S.NullOr(S.Union(S.Literal("first_name"), S.Literal("last_name"), S.Literal("date_of_birth"), S.Literal("gender"), S.Literal("home_address.city"), S.Literal("home_address.country"), S.Literal("home_address.state"), S.Literal("home_address.street_1"), S.Literal("home_address.street_2"), S.Literal("home_address.zip_code"), S.Literal("job_title"), S.Literal("legal_entity_id"), S.Literal("location_id"), S.Literal("mobile_phone_number"), S.Literal("home_phone_number"), S.Literal("nationality"), S.Literal("start_date"), S.Literal("work_email"), S.Literal("private_email"), S.Literal("yearly_salary")))), type: S.String, min_length: S.optional(S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308)))), max_length: S.optional(S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308)))), reg_exp: S.optional(S.NullOr(S.String)) }), S.Struct({ label: S.String, required: S.Boolean, description: S.optional(S.NullOr(S.String)), unified_key: S.optional(S.NullOr(S.Union(S.Literal("first_name"), S.Literal("last_name"), S.Literal("date_of_birth"), S.Literal("gender"), S.Literal("home_address.city"), S.Literal("home_address.country"), S.Literal("home_address.state"), S.Literal("home_address.street_1"), S.Literal("home_address.street_2"), S.Literal("home_address.zip_code"), S.Literal("job_title"), S.Literal("legal_entity_id"), S.Literal("location_id"), S.Literal("mobile_phone_number"), S.Literal("home_phone_number"), S.Literal("nationality"), S.Literal("start_date"), S.Literal("work_email"), S.Literal("private_email"), S.Literal("yearly_salary")))), type: S.String, min: S.optional(S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308)))), max: S.optional(S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308)))) }), S.Struct({ label: S.String, required: S.Boolean, description: S.optional(S.NullOr(S.String)), unified_key: S.optional(S.NullOr(S.Union(S.Literal("first_name"), S.Literal("last_name"), S.Literal("date_of_birth"), S.Literal("gender"), S.Literal("home_address.city"), S.Literal("home_address.country"), S.Literal("home_address.state"), S.Literal("home_address.street_1"), S.Literal("home_address.street_2"), S.Literal("home_address.zip_code"), S.Literal("job_title"), S.Literal("legal_entity_id"), S.Literal("location_id"), S.Literal("mobile_phone_number"), S.Literal("home_phone_number"), S.Literal("nationality"), S.Literal("start_date"), S.Literal("work_email"), S.Literal("private_email"), S.Literal("yearly_salary")))), type: S.String }), S.Struct({ label: S.String, required: S.Boolean, description: S.optional(S.NullOr(S.String)), unified_key: S.optional(S.NullOr(S.Union(S.Literal("first_name"), S.Literal("last_name"), S.Literal("date_of_birth"), S.Literal("gender"), S.Literal("home_address.city"), S.Literal("home_address.country"), S.Literal("home_address.state"), S.Literal("home_address.street_1"), S.Literal("home_address.street_2"), S.Literal("home_address.zip_code"), S.Literal("job_title"), S.Literal("legal_entity_id"), S.Literal("location_id"), S.Literal("mobile_phone_number"), S.Literal("home_phone_number"), S.Literal("nationality"), S.Literal("start_date"), S.Literal("work_email"), S.Literal("private_email"), S.Literal("yearly_salary")))), type: S.String, options: S.Union(S.Struct({ type: S.String, entries: S.Array(S.Struct({ id: S.String, label: S.String, unified_value: S.optional(S.String), remote_id: S.Union(S.String, S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))) })) }), S.Struct({ type: S.String, link: S.String })) }), S.Struct({ label: S.String, required: S.Boolean, description: S.optional(S.NullOr(S.String)), unified_key: S.optional(S.NullOr(S.String)), type: S.String, min_items: S.optional(S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308)))), max_items: S.optional(S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308)))), options: S.Union(S.Struct({ type: S.String, entries: S.Array(S.Struct({ id: S.String, label: S.String, unified_value: S.optional(S.String), remote_id: S.Union(S.String, S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))) })) }), S.Struct({ type: S.String, link: S.String })) }), S.Struct({ label: S.String, required: S.Boolean, description: S.optional(S.NullOr(S.String)), unified_key: S.optional(S.NullOr(S.Union(S.Literal("first_name"), S.Literal("last_name"), S.Literal("date_of_birth"), S.Literal("gender"), S.Literal("home_address.city"), S.Literal("home_address.country"), S.Literal("home_address.state"), S.Literal("home_address.street_1"), S.Literal("home_address.street_2"), S.Literal("home_address.zip_code"), S.Literal("job_title"), S.Literal("legal_entity_id"), S.Literal("location_id"), S.Literal("mobile_phone_number"), S.Literal("home_phone_number"), S.Literal("nationality"), S.Literal("start_date"), S.Literal("work_email"), S.Literal("private_email"), S.Literal("yearly_salary")))), type: S.String }), S.Struct({ label: S.String, required: S.Boolean, description: S.optional(S.NullOr(S.String)), unified_key: S.optional(S.NullOr(S.Union(S.Literal("first_name"), S.Literal("last_name"), S.Literal("date_of_birth"), S.Literal("gender"), S.Literal("home_address.city"), S.Literal("home_address.country"), S.Literal("home_address.state"), S.Literal("home_address.street_1"), S.Literal("home_address.street_2"), S.Literal("home_address.zip_code"), S.Literal("job_title"), S.Literal("legal_entity_id"), S.Literal("location_id"), S.Literal("mobile_phone_number"), S.Literal("home_phone_number"), S.Literal("nationality"), S.Literal("start_date"), S.Literal("work_email"), S.Literal("private_email"), S.Literal("yearly_salary")))), type: S.String, properties: Schema1 }), S.Struct({ label: S.String, required: S.Boolean, description: S.optional(S.NullOr(S.String)), unified_key: S.optional(S.NullOr(S.Union(S.Literal("first_name"), S.Literal("last_name"), S.Literal("date_of_birth"), S.Literal("gender"), S.Literal("home_address.city"), S.Literal("home_address.country"), S.Literal("home_address.state"), S.Literal("home_address.street_1"), S.Literal("home_address.street_2"), S.Literal("home_address.zip_code"), S.Literal("job_title"), S.Literal("legal_entity_id"), S.Literal("location_id"), S.Literal("mobile_phone_number"), S.Literal("home_phone_number"), S.Literal("nationality"), S.Literal("start_date"), S.Literal("work_email"), S.Literal("private_email"), S.Literal("yearly_salary")))), type: S.String, item_type: Schema2, min_items: S.optional(S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308)))), max_items: S.optional(S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308)))) }), S.Struct({ label: S.String, required: S.Boolean, description: S.optional(S.NullOr(S.String)), unified_key: S.optional(S.NullOr(S.Union(S.Literal("first_name"), S.Literal("last_name"), S.Literal("date_of_birth"), S.Literal("gender"), S.Literal("home_address.city"), S.Literal("home_address.country"), S.Literal("home_address.state"), S.Literal("home_address.street_1"), S.Literal("home_address.street_2"), S.Literal("home_address.zip_code"), S.Literal("job_title"), S.Literal("legal_entity_id"), S.Literal("location_id"), S.Literal("mobile_phone_number"), S.Literal("home_phone_number"), S.Literal("nationality"), S.Literal("start_date"), S.Literal("work_email"), S.Literal("private_email"), S.Literal("yearly_salary")))), type: S.String, file_restrictions: S.Struct({ accepted_mime_types: S.Array(S.String), max_file_size: S.optional(S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308)))) }) })));
export type Schema2 = S.Schema.Type<typeof Schema2>;

export const GetHrisEmployeesFormPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ properties: S.Record({ key: S.String, value: S.Union(S.Struct({ label: S.String, required: S.Boolean, description: S.optional(S.NullOr(S.String)), unified_key: S.optional(S.NullOr(S.Union(S.Literal("first_name"), S.Literal("last_name"), S.Literal("date_of_birth"), S.Literal("gender"), S.Literal("home_address.city"), S.Literal("home_address.country"), S.Literal("home_address.state"), S.Literal("home_address.street_1"), S.Literal("home_address.street_2"), S.Literal("home_address.zip_code"), S.Literal("job_title"), S.Literal("legal_entity_id"), S.Literal("location_id"), S.Literal("mobile_phone_number"), S.Literal("home_phone_number"), S.Literal("nationality"), S.Literal("start_date"), S.Literal("work_email"), S.Literal("private_email"), S.Literal("yearly_salary")))), type: S.String, min_length: S.optional(S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308)))), max_length: S.optional(S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308)))), reg_exp: S.optional(S.NullOr(S.String)) }), S.Struct({ label: S.String, required: S.Boolean, description: S.optional(S.NullOr(S.String)), unified_key: S.optional(S.NullOr(S.Union(S.Literal("first_name"), S.Literal("last_name"), S.Literal("date_of_birth"), S.Literal("gender"), S.Literal("home_address.city"), S.Literal("home_address.country"), S.Literal("home_address.state"), S.Literal("home_address.street_1"), S.Literal("home_address.street_2"), S.Literal("home_address.zip_code"), S.Literal("job_title"), S.Literal("legal_entity_id"), S.Literal("location_id"), S.Literal("mobile_phone_number"), S.Literal("home_phone_number"), S.Literal("nationality"), S.Literal("start_date"), S.Literal("work_email"), S.Literal("private_email"), S.Literal("yearly_salary")))), type: S.String, min: S.optional(S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308)))), max: S.optional(S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308)))) }), S.Struct({ label: S.String, required: S.Boolean, description: S.optional(S.NullOr(S.String)), unified_key: S.optional(S.NullOr(S.Union(S.Literal("first_name"), S.Literal("last_name"), S.Literal("date_of_birth"), S.Literal("gender"), S.Literal("home_address.city"), S.Literal("home_address.country"), S.Literal("home_address.state"), S.Literal("home_address.street_1"), S.Literal("home_address.street_2"), S.Literal("home_address.zip_code"), S.Literal("job_title"), S.Literal("legal_entity_id"), S.Literal("location_id"), S.Literal("mobile_phone_number"), S.Literal("home_phone_number"), S.Literal("nationality"), S.Literal("start_date"), S.Literal("work_email"), S.Literal("private_email"), S.Literal("yearly_salary")))), type: S.String }), S.Struct({ label: S.String, required: S.Boolean, description: S.optional(S.NullOr(S.String)), unified_key: S.optional(S.NullOr(S.Union(S.Literal("first_name"), S.Literal("last_name"), S.Literal("date_of_birth"), S.Literal("gender"), S.Literal("home_address.city"), S.Literal("home_address.country"), S.Literal("home_address.state"), S.Literal("home_address.street_1"), S.Literal("home_address.street_2"), S.Literal("home_address.zip_code"), S.Literal("job_title"), S.Literal("legal_entity_id"), S.Literal("location_id"), S.Literal("mobile_phone_number"), S.Literal("home_phone_number"), S.Literal("nationality"), S.Literal("start_date"), S.Literal("work_email"), S.Literal("private_email"), S.Literal("yearly_salary")))), type: S.String, options: S.Union(S.Struct({ type: S.String, entries: S.Array(S.Struct({ id: S.String, label: S.String, unified_value: S.optional(S.String), remote_id: S.Union(S.String, S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))) })) }), S.Struct({ type: S.String, link: S.String })) }), S.Struct({ label: S.String, required: S.Boolean, description: S.optional(S.NullOr(S.String)), unified_key: S.optional(S.NullOr(S.String)), type: S.String, min_items: S.optional(S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308)))), max_items: S.optional(S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308)))), options: S.Union(S.Struct({ type: S.String, entries: S.Array(S.Struct({ id: S.String, label: S.String, unified_value: S.optional(S.String), remote_id: S.Union(S.String, S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))) })) }), S.Struct({ type: S.String, link: S.String })) }), S.Struct({ label: S.String, required: S.Boolean, description: S.optional(S.NullOr(S.String)), unified_key: S.optional(S.NullOr(S.Union(S.Literal("first_name"), S.Literal("last_name"), S.Literal("date_of_birth"), S.Literal("gender"), S.Literal("home_address.city"), S.Literal("home_address.country"), S.Literal("home_address.state"), S.Literal("home_address.street_1"), S.Literal("home_address.street_2"), S.Literal("home_address.zip_code"), S.Literal("job_title"), S.Literal("legal_entity_id"), S.Literal("location_id"), S.Literal("mobile_phone_number"), S.Literal("home_phone_number"), S.Literal("nationality"), S.Literal("start_date"), S.Literal("work_email"), S.Literal("private_email"), S.Literal("yearly_salary")))), type: S.String }), S.Struct({ label: S.String, required: S.Boolean, description: S.optional(S.NullOr(S.String)), unified_key: S.optional(S.NullOr(S.Union(S.Literal("first_name"), S.Literal("last_name"), S.Literal("date_of_birth"), S.Literal("gender"), S.Literal("home_address.city"), S.Literal("home_address.country"), S.Literal("home_address.state"), S.Literal("home_address.street_1"), S.Literal("home_address.street_2"), S.Literal("home_address.zip_code"), S.Literal("job_title"), S.Literal("legal_entity_id"), S.Literal("location_id"), S.Literal("mobile_phone_number"), S.Literal("home_phone_number"), S.Literal("nationality"), S.Literal("start_date"), S.Literal("work_email"), S.Literal("private_email"), S.Literal("yearly_salary")))), type: S.String, properties: Schema1 }), S.Struct({ label: S.String, required: S.Boolean, description: S.optional(S.NullOr(S.String)), unified_key: S.optional(S.NullOr(S.Union(S.Literal("first_name"), S.Literal("last_name"), S.Literal("date_of_birth"), S.Literal("gender"), S.Literal("home_address.city"), S.Literal("home_address.country"), S.Literal("home_address.state"), S.Literal("home_address.street_1"), S.Literal("home_address.street_2"), S.Literal("home_address.zip_code"), S.Literal("job_title"), S.Literal("legal_entity_id"), S.Literal("location_id"), S.Literal("mobile_phone_number"), S.Literal("home_phone_number"), S.Literal("nationality"), S.Literal("start_date"), S.Literal("work_email"), S.Literal("private_email"), S.Literal("yearly_salary")))), type: S.String, item_type: Schema2, min_items: S.optional(S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308)))), max_items: S.optional(S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308)))) }), S.Struct({ label: S.String, required: S.Boolean, description: S.optional(S.NullOr(S.String)), unified_key: S.optional(S.NullOr(S.Union(S.Literal("first_name"), S.Literal("last_name"), S.Literal("date_of_birth"), S.Literal("gender"), S.Literal("home_address.city"), S.Literal("home_address.country"), S.Literal("home_address.state"), S.Literal("home_address.street_1"), S.Literal("home_address.street_2"), S.Literal("home_address.zip_code"), S.Literal("job_title"), S.Literal("legal_entity_id"), S.Literal("location_id"), S.Literal("mobile_phone_number"), S.Literal("home_phone_number"), S.Literal("nationality"), S.Literal("start_date"), S.Literal("work_email"), S.Literal("private_email"), S.Literal("yearly_salary")))), type: S.String, file_restrictions: S.Struct({ accepted_mime_types: S.Array(S.String), max_file_size: S.optional(S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308)))) }) })) }) }), warnings: S.Array(S.Struct({ message: S.String })) });
export type GetHrisEmployeesFormPositiveResponse = S.Schema.Type<typeof GetHrisEmployeesFormPositiveResponse>;

export const PostHrisEmployeesFormPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ id: S.NullOr(S.String), remote_id: S.NullOr(S.String), prehire: S.Struct({ remote_id: S.NullOr(S.String) }) }), warnings: S.Array(S.Struct({ message: S.String })) });
export type PostHrisEmployeesFormPositiveResponse = S.Schema.Type<typeof PostHrisEmployeesFormPositiveResponse>;

export const Schema6 = S.suspend(() => S.Array(Schema4));
export type Schema6 = S.Schema.Type<typeof Schema6>;

export const Schema4 = S.suspend(() => S.Union(S.String, S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308)), S.Boolean, Schema5, Schema6));
export type Schema4 = S.Schema.Type<typeof Schema4>;

export const Schema5 = S.suspend(() => S.Record({ key: S.String, value: Schema4 }));
export type Schema5 = S.Schema.Type<typeof Schema5>;

export const Schema3 = S.Record({ key: S.String, value: Schema4 });
export type Schema3 = S.Schema.Type<typeof Schema3>;

export const PostHrisEmployeesFormRequestBody = S.Struct({ properties: Schema3 });
export type PostHrisEmployeesFormRequestBody = S.Schema.Type<typeof PostHrisEmployeesFormRequestBody>;

export const PatchHrisEmployeesEmployeeIdParameterEmployeeId = S.String;
export type PatchHrisEmployeesEmployeeIdParameterEmployeeId = S.Schema.Type<typeof PatchHrisEmployeesEmployeeIdParameterEmployeeId>;

export const PatchHrisEmployeesEmployeeIdPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ id: S.String, remote_id: S.String, employee_number: S.NullOr(S.String), first_name: S.NullOr(S.String), last_name: S.NullOr(S.String), nationality: S.NullOr(S.String), display_full_name: S.NullOr(S.String), job_title: S.NullOr(S.String), work_email: S.optional(S.NullOr(S.String.pipe(S.pattern(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$"))))), personal_email: S.optional(S.NullOr(S.String.pipe(S.pattern(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$"))))), mobile_phone_number: S.NullOr(S.String), ssn: S.NullOr(S.String), tax_id: S.NullOr(S.String), gender: S.optional(S.Union(S.Union(S.Literal("MALE"), S.Literal("FEMALE"), S.Literal("NON_BINARY"), S.Literal("NOT_SPECIFIED")), S.String, S.Null)), ethnicity: S.optional(S.Union(S.Union(S.Literal("WHITE"), S.Literal("ASIAN"), S.Literal("HISPANIC_LATINO"), S.Literal("HAWAIIAN"), S.Literal("NATIVE_AMERICAN"), S.Literal("BLACK_AFRICAN_AMERICAN"), S.Literal("MULTIPLE_ETHNICITIES"), S.Literal("DECLINE_TO_SPECIFY")), S.String, S.Null)), marital_status: S.optional(S.Union(S.Union(S.Literal("SINGLE"), S.Literal("MARRIED"), S.Literal("DOMESTIC_PARTNERSHIP"), S.Literal("WIDOWED"), S.Literal("DIVORCED"), S.Literal("SEPARATED"), S.Literal("NOT_MARRIED")), S.String, S.Null)), employment_status: S.optional(S.Union(S.Union(S.Literal("ACTIVE"), S.Literal("PENDING"), S.Literal("INACTIVE"), S.Literal("LEAVE")), S.String, S.Null)), employment_type: S.optional(S.Union(S.Union(S.Literal("FULL_TIME"), S.Literal("PART_TIME"), S.Literal("CONTRACT"), S.Literal("INTERNSHIP"), S.Literal("FREELANCE"), S.Literal("WORKING_STUDENT"), S.Literal("APPRENTICESHIP"), S.Literal("TRAINING")), S.String, S.Null)), weekly_hours: S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), avatar: S.NullOr(S.String), work_location_id: S.NullOr(S.String), legal_entity_id: S.NullOr(S.String), manager_id: S.NullOr(S.String), home_address: S.optional(S.NullOr(S.Struct({ city: S.optional(S.NullOr(S.String)), country: S.optional(S.NullOr(S.String)), raw: S.optional(S.NullOr(S.String)), state: S.optional(S.NullOr(S.String)), street_1: S.optional(S.NullOr(S.String)), street_2: S.optional(S.NullOr(S.String)), zip_code: S.optional(S.NullOr(S.String)) }))), bank_accounts: S.optional(S.NullOr(S.Array(S.Struct({ iban: S.optional(S.NullOr(S.String)), bic: S.optional(S.NullOr(S.String)), account_number: S.optional(S.NullOr(S.String)), holder_name: S.optional(S.NullOr(S.String)), bank_name: S.optional(S.NullOr(S.String)), domestic_bank_routing: S.optional(S.NullOr(S.Struct({ number: S.String, type: S.NullOr(S.Union(S.Literal("GB_SORT_CODE"), S.Literal("DE_BANKLEITZAHL"), S.Literal("US_ABA_ROUTING_TRANSIT_NUMBER"), S.Literal("CA_ROUTING_NUMBER"), S.Literal("AU_BSB_CODE"), S.Literal("FR_RIB"))) }))) })))), date_of_birth: S.NullOr(S.String), start_date: S.NullOr(S.String), termination_date: S.NullOr(S.String), remote_created_at: S.NullOr(S.String), changed_at: S.String, remote_deleted_at: S.NullOr(S.String), remote_data: S.NullOr(S.Record({ key: S.String, value: S.Unknown })) }), warnings: S.Array(S.Struct({ message: S.String })) });
export type PatchHrisEmployeesEmployeeIdPositiveResponse = S.Schema.Type<typeof PatchHrisEmployeesEmployeeIdPositiveResponse>;

export const PatchHrisEmployeesEmployeeIdRequestBody = S.Struct({ first_name: S.optional(S.String), last_name: S.optional(S.String), work_email: S.String.pipe(S.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)), gender: S.optional(S.Union(S.Literal("MALE"), S.Literal("FEMALE"), S.Literal("NON_BINARY"), S.Literal("NOT_SPECIFIED"))), job_title: S.optional(S.String), home_address: S.optional(S.Struct({ street_1: S.optional(S.String), street_2: S.optional(S.String), city: S.optional(S.String), state: S.optional(S.String), zip_code: S.optional(S.String), country: S.optional(S.String.pipe(S.pattern(new RegExp("^[A-Z]{2}$")))) })), date_of_birth: S.optional(S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), mobile_phone_number: S.optional(S.String), home_phone_number: S.optional(S.String), nationality: S.optional(S.String.pipe(S.pattern(new RegExp("^[A-Z]{2}$")))), start_date: S.optional(S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), legal_entity_id: S.optional(S.String), location_id: S.optional(S.String), remote_fields: S.optional(S.Struct({ humaans: S.optional(S.Struct({ employee: S.optional(S.Record({ key: S.String, value: S.Unknown })) })), hibob: S.optional(S.Struct({ employee: S.optional(S.Record({ key: S.String, value: S.Unknown })) })), sympa: S.optional(S.Struct({ GenericNewHire: S.optional(S.Record({ key: S.String, value: S.Unknown })) })), silae: S.optional(S.Struct({ siret: S.optional(S.String), employee: S.optional(S.Record({ key: S.String, value: S.Unknown })), employment: S.optional(S.Record({ key: S.String, value: S.Unknown })) })), peoplehr: S.optional(S.Struct({ job_role_effective_date: S.optional(S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), department: S.optional(S.String) })), zohopeople: S.optional(S.Struct({ employee_id: S.optional(S.String.pipe(S.minLength(1))) })), workday: S.optional(S.Struct({ job_requisition_id: S.optional(S.String), position_id: S.optional(S.String), ssn: S.optional(S.String), bank_account: S.optional(S.Struct({ iban: S.String, bic: S.String, bank_name: S.String })) })), deel: S.optional(S.Struct({ candidate_id: S.String, candidate_link: S.String })), bamboohr: S.optional(S.Struct({ employee: S.optional(S.Record({ key: S.String, value: S.Unknown })) })), oracle: S.optional(S.Struct({ group_id: S.String, department_id: S.String })), adpworkforcenow: S.optional(S.Struct({ onboarding_template_code: S.String, applicant_payroll_profile_group_code: S.String, manager_position_id: S.optional(S.String), home_organization_unit_code: S.optional(S.String), personal_email: S.optional(S.String) })), azuread: S.optional(S.Struct({ password: S.String })), paycor: S.optional(S.Struct({ paygroupRemoteId: S.String, departmentRemoteId: S.String })), planday: S.optional(S.Struct({ department_remote_id: S.String })), dayforce: S.optional(S.Struct({ social_security_number: S.String, pay_type: S.String, pay_class: S.String, pay_group: S.String, base_rate: S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308)), role: S.String, location: S.String, department: S.String, job: S.String, country: S.String })) })), ssn: S.optional(S.String), marital_status: S.optional(S.Union(S.Literal("SINGLE"), S.Literal("MARRIED"), S.Literal("DOMESTIC_PARTNERSHIP"), S.Literal("WIDOWED"), S.Literal("DIVORCED"), S.Literal("SEPARATED"), S.Literal("NOT_MARRIED"))), termination_date: S.optional(S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), tax_id: S.optional(S.String) });
export type PatchHrisEmployeesEmployeeIdRequestBody = S.Schema.Type<typeof PatchHrisEmployeesEmployeeIdRequestBody>;

export const PostHrisEmployeesEmployeeIdDocumentsParameterEmployeeId = S.String;
export type PostHrisEmployeesEmployeeIdDocumentsParameterEmployeeId = S.Schema.Type<typeof PostHrisEmployeesEmployeeIdDocumentsParameterEmployeeId>;

export const PostHrisEmployeesEmployeeIdDocumentsPositiveResponse = S.Struct({ status: S.String, data: S.Record({ key: S.String, value: S.Unknown }), warnings: S.Array(S.Struct({ message: S.String })) });
export type PostHrisEmployeesEmployeeIdDocumentsPositiveResponse = S.Schema.Type<typeof PostHrisEmployeesEmployeeIdDocumentsPositiveResponse>;

export const PostHrisEmployeesEmployeeIdDocumentsRequestBody = S.Struct({ category_id: S.String, document: S.Struct({ name: S.String, content_type: S.optional(S.String.pipe(S.pattern(new RegExp("^[\\w.-]+\\/[\\w.-]+$")))), data_url: S.optional(S.String), data: S.optional(S.String) }) });
export type PostHrisEmployeesEmployeeIdDocumentsRequestBody = S.Schema.Type<typeof PostHrisEmployeesEmployeeIdDocumentsRequestBody>;

export const GetHrisEmployeeDocumentCategoriesParameterCursor = S.String;
export type GetHrisEmployeeDocumentCategoriesParameterCursor = S.Schema.Type<typeof GetHrisEmployeeDocumentCategoriesParameterCursor>;

export const GetHrisEmployeeDocumentCategoriesParameterPageSize = Schema_default_100_4;
export type GetHrisEmployeeDocumentCategoriesParameterPageSize = S.Schema.Type<typeof GetHrisEmployeeDocumentCategoriesParameterPageSize>;

export const GetHrisEmployeeDocumentCategoriesParameterUpdatedAfter = S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisEmployeeDocumentCategoriesParameterUpdatedAfter = S.Schema.Type<typeof GetHrisEmployeeDocumentCategoriesParameterUpdatedAfter>;

export const GetHrisEmployeeDocumentCategoriesParameterIncludeDeleted = Union_default_false;
export type GetHrisEmployeeDocumentCategoriesParameterIncludeDeleted = S.Schema.Type<typeof GetHrisEmployeeDocumentCategoriesParameterIncludeDeleted>;

export const GetHrisEmployeeDocumentCategoriesParameterIgnoreUnsupportedFilters = Union_default_false;
export type GetHrisEmployeeDocumentCategoriesParameterIgnoreUnsupportedFilters = S.Schema.Type<typeof GetHrisEmployeeDocumentCategoriesParameterIgnoreUnsupportedFilters>;

export const GetHrisEmployeeDocumentCategoriesParameterIds = S.String;
export type GetHrisEmployeeDocumentCategoriesParameterIds = S.Schema.Type<typeof GetHrisEmployeeDocumentCategoriesParameterIds>;

export const GetHrisEmployeeDocumentCategoriesParameterRemoteIds = S.String;
export type GetHrisEmployeeDocumentCategoriesParameterRemoteIds = S.Schema.Type<typeof GetHrisEmployeeDocumentCategoriesParameterRemoteIds>;

export const GetHrisEmployeeDocumentCategoriesPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ next: S.NullOr(S.String), results: S.Array(S.Struct({ id: S.String, remote_id: S.NullOr(S.String), name: S.NullOr(S.String), remote_data: S.NullOr(S.Record({ key: S.String, value: S.Unknown })), changed_at: S.String, remote_deleted_at: S.NullOr(S.String) })) }) });
export type GetHrisEmployeeDocumentCategoriesPositiveResponse = S.Schema.Type<typeof GetHrisEmployeeDocumentCategoriesPositiveResponse>;

export const GetHrisTeamsParameterCursor = S.String;
export type GetHrisTeamsParameterCursor = S.Schema.Type<typeof GetHrisTeamsParameterCursor>;

export const GetHrisTeamsParameterPageSize = Schema_default_100_4;
export type GetHrisTeamsParameterPageSize = S.Schema.Type<typeof GetHrisTeamsParameterPageSize>;

export const GetHrisTeamsParameterUpdatedAfter = S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisTeamsParameterUpdatedAfter = S.Schema.Type<typeof GetHrisTeamsParameterUpdatedAfter>;

export const GetHrisTeamsParameterIncludeDeleted = Union_default_false;
export type GetHrisTeamsParameterIncludeDeleted = S.Schema.Type<typeof GetHrisTeamsParameterIncludeDeleted>;

export const GetHrisTeamsParameterIgnoreUnsupportedFilters = Union_default_false;
export type GetHrisTeamsParameterIgnoreUnsupportedFilters = S.Schema.Type<typeof GetHrisTeamsParameterIgnoreUnsupportedFilters>;

export const GetHrisTeamsParameterIds = S.String;
export type GetHrisTeamsParameterIds = S.Schema.Type<typeof GetHrisTeamsParameterIds>;

export const GetHrisTeamsParameterRemoteIds = S.String;
export type GetHrisTeamsParameterRemoteIds = S.Schema.Type<typeof GetHrisTeamsParameterRemoteIds>;

export const GetHrisTeamsPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ next: S.NullOr(S.String), results: S.Array(S.Struct({ id: S.String, remote_id: S.String, name: S.NullOr(S.String), changed_at: S.String, remote_deleted_at: S.NullOr(S.String), type: S.NullOr(S.Union(S.Literal("DEPARTMENT"), S.Literal("TEAM"), S.Literal("COST_CENTER"))), parent_id: S.NullOr(S.String), remote_data: S.NullOr(S.Record({ key: S.String, value: S.Unknown })) })) }) });
export type GetHrisTeamsPositiveResponse = S.Schema.Type<typeof GetHrisTeamsPositiveResponse>;

export const GetHrisGroupsParameterCursor = S.String;
export type GetHrisGroupsParameterCursor = S.Schema.Type<typeof GetHrisGroupsParameterCursor>;

export const GetHrisGroupsParameterPageSize = Schema_default_100_4;
export type GetHrisGroupsParameterPageSize = S.Schema.Type<typeof GetHrisGroupsParameterPageSize>;

export const GetHrisGroupsParameterUpdatedAfter = S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisGroupsParameterUpdatedAfter = S.Schema.Type<typeof GetHrisGroupsParameterUpdatedAfter>;

export const GetHrisGroupsParameterIncludeDeleted = Union_default_false;
export type GetHrisGroupsParameterIncludeDeleted = S.Schema.Type<typeof GetHrisGroupsParameterIncludeDeleted>;

export const GetHrisGroupsParameterIgnoreUnsupportedFilters = Union_default_false;
export type GetHrisGroupsParameterIgnoreUnsupportedFilters = S.Schema.Type<typeof GetHrisGroupsParameterIgnoreUnsupportedFilters>;

export const GetHrisGroupsParameterIds = S.String;
export type GetHrisGroupsParameterIds = S.Schema.Type<typeof GetHrisGroupsParameterIds>;

export const GetHrisGroupsParameterRemoteIds = S.String;
export type GetHrisGroupsParameterRemoteIds = S.Schema.Type<typeof GetHrisGroupsParameterRemoteIds>;

export const GetHrisGroupsParameterTypes = S.String;
export type GetHrisGroupsParameterTypes = S.Schema.Type<typeof GetHrisGroupsParameterTypes>;

export const GetHrisGroupsParameterNameContains = S.String;
export type GetHrisGroupsParameterNameContains = S.Schema.Type<typeof GetHrisGroupsParameterNameContains>;

export const GetHrisGroupsPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ next: S.NullOr(S.String), results: S.Array(S.Struct({ id: S.String, remote_id: S.String, name: S.NullOr(S.String), changed_at: S.String, remote_deleted_at: S.NullOr(S.String), type: S.NullOr(S.Union(S.Literal("DEPARTMENT"), S.Literal("TEAM"), S.Literal("COST_CENTER"))), parent_id: S.NullOr(S.String), remote_data: S.NullOr(S.Record({ key: S.String, value: S.Unknown })) })) }) });
export type GetHrisGroupsPositiveResponse = S.Schema.Type<typeof GetHrisGroupsPositiveResponse>;

export const GetHrisEmploymentsParameterCursor = S.String;
export type GetHrisEmploymentsParameterCursor = S.Schema.Type<typeof GetHrisEmploymentsParameterCursor>;

export const GetHrisEmploymentsParameterPageSize = Schema_default_100_4;
export type GetHrisEmploymentsParameterPageSize = S.Schema.Type<typeof GetHrisEmploymentsParameterPageSize>;

export const GetHrisEmploymentsParameterUpdatedAfter = S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisEmploymentsParameterUpdatedAfter = S.Schema.Type<typeof GetHrisEmploymentsParameterUpdatedAfter>;

export const GetHrisEmploymentsParameterIncludeDeleted = Union_default_false;
export type GetHrisEmploymentsParameterIncludeDeleted = S.Schema.Type<typeof GetHrisEmploymentsParameterIncludeDeleted>;

export const GetHrisEmploymentsParameterIgnoreUnsupportedFilters = Union_default_false;
export type GetHrisEmploymentsParameterIgnoreUnsupportedFilters = S.Schema.Type<typeof GetHrisEmploymentsParameterIgnoreUnsupportedFilters>;

export const GetHrisEmploymentsParameterIds = S.String;
export type GetHrisEmploymentsParameterIds = S.Schema.Type<typeof GetHrisEmploymentsParameterIds>;

export const GetHrisEmploymentsParameterRemoteIds = S.String;
export type GetHrisEmploymentsParameterRemoteIds = S.Schema.Type<typeof GetHrisEmploymentsParameterRemoteIds>;

export const GetHrisEmploymentsPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ next: S.NullOr(S.String), results: S.Array(S.Struct({ id: S.String, remote_id: S.NullOr(S.String), employee_id: S.String, job_title: S.NullOr(S.String), pay_rate: S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), pay_period: S.optional(S.Union(S.Union(S.Literal("HOUR"), S.Literal("DAY"), S.Literal("WEEK"), S.Literal("TWO_WEEKS"), S.Literal("HALF_MONTH"), S.Literal("MONTH"), S.Literal("TWO_MONTHS"), S.Literal("QUARTER"), S.Literal("HALF_YEAR"), S.Literal("YEAR")), S.String, S.Null)), pay_frequency: S.optional(S.Union(S.Union(S.Literal("DAILY"), S.Literal("WEEKLY"), S.Literal("BIWEEKLY"), S.Literal("MONTHLY"), S.Literal("SEMIMONTHLY"), S.Literal("QUARTERLY"), S.Literal("SEMIANNUALLY"), S.Literal("ANNUALLY"), S.Literal("PRO_RATA")), S.String, S.Null)), employment_type: S.optional(S.Union(S.Union(S.Literal("FULL_TIME"), S.Literal("PART_TIME"), S.Literal("CONTRACT"), S.Literal("INTERNSHIP"), S.Literal("FREELANCE"), S.Literal("WORKING_STUDENT"), S.Literal("APPRENTICESHIP"), S.Literal("TRAINING")), S.String, S.Null)), pay_currency: S.NullOr(S.String), effective_date: S.NullOr(S.String), changed_at: S.String, remote_deleted_at: S.NullOr(S.String), remote_data: S.NullOr(S.Record({ key: S.String, value: S.Unknown })), custom_fields: S.NullOr(S.Record({ key: S.String, value: S.Unknown })), integration_fields: S.Array(S.Struct({ id: S.String, key: S.String, type: S.Union(S.Literal("DEFAULT"), S.Literal("CUSTOM")), value: S.optional(S.Null), label: S.NullOr(S.String) })) })) }) });
export type GetHrisEmploymentsPositiveResponse = S.Schema.Type<typeof GetHrisEmploymentsPositiveResponse>;

export const GetHrisLocationsParameterCursor = S.String;
export type GetHrisLocationsParameterCursor = S.Schema.Type<typeof GetHrisLocationsParameterCursor>;

export const GetHrisLocationsParameterPageSize = Schema_default_100_4;
export type GetHrisLocationsParameterPageSize = S.Schema.Type<typeof GetHrisLocationsParameterPageSize>;

export const GetHrisLocationsParameterUpdatedAfter = S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisLocationsParameterUpdatedAfter = S.Schema.Type<typeof GetHrisLocationsParameterUpdatedAfter>;

export const GetHrisLocationsParameterIncludeDeleted = Union_default_false;
export type GetHrisLocationsParameterIncludeDeleted = S.Schema.Type<typeof GetHrisLocationsParameterIncludeDeleted>;

export const GetHrisLocationsParameterIgnoreUnsupportedFilters = Union_default_false;
export type GetHrisLocationsParameterIgnoreUnsupportedFilters = S.Schema.Type<typeof GetHrisLocationsParameterIgnoreUnsupportedFilters>;

export const GetHrisLocationsParameterIds = S.String;
export type GetHrisLocationsParameterIds = S.Schema.Type<typeof GetHrisLocationsParameterIds>;

export const GetHrisLocationsParameterRemoteIds = S.String;
export type GetHrisLocationsParameterRemoteIds = S.Schema.Type<typeof GetHrisLocationsParameterRemoteIds>;

export const GetHrisLocationsParameterNameContains = S.String;
export type GetHrisLocationsParameterNameContains = S.Schema.Type<typeof GetHrisLocationsParameterNameContains>;

export const GetHrisLocationsPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ next: S.NullOr(S.String), results: S.Array(S.Struct({ id: S.String, remote_id: S.NullOr(S.String), name: S.NullOr(S.String), address: S.optional(S.NullOr(S.Struct({ city: S.optional(S.NullOr(S.String)), country: S.optional(S.NullOr(S.String)), raw: S.optional(S.NullOr(S.String)), state: S.optional(S.NullOr(S.String)), street_1: S.optional(S.NullOr(S.String)), street_2: S.optional(S.NullOr(S.String)), zip_code: S.optional(S.NullOr(S.String)) }))), type: S.NullOr(S.String), changed_at: S.String, remote_deleted_at: S.NullOr(S.String), remote_data: S.NullOr(S.Record({ key: S.String, value: S.Unknown })) })) }) });
export type GetHrisLocationsPositiveResponse = S.Schema.Type<typeof GetHrisLocationsPositiveResponse>;

export const GetHrisAbsenceTypesParameterCursor = S.String;
export type GetHrisAbsenceTypesParameterCursor = S.Schema.Type<typeof GetHrisAbsenceTypesParameterCursor>;

export const GetHrisAbsenceTypesParameterPageSize = Schema_default_100_4;
export type GetHrisAbsenceTypesParameterPageSize = S.Schema.Type<typeof GetHrisAbsenceTypesParameterPageSize>;

export const GetHrisAbsenceTypesParameterUpdatedAfter = S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisAbsenceTypesParameterUpdatedAfter = S.Schema.Type<typeof GetHrisAbsenceTypesParameterUpdatedAfter>;

export const GetHrisAbsenceTypesParameterIncludeDeleted = Union_default_false;
export type GetHrisAbsenceTypesParameterIncludeDeleted = S.Schema.Type<typeof GetHrisAbsenceTypesParameterIncludeDeleted>;

export const GetHrisAbsenceTypesParameterIgnoreUnsupportedFilters = Union_default_false;
export type GetHrisAbsenceTypesParameterIgnoreUnsupportedFilters = S.Schema.Type<typeof GetHrisAbsenceTypesParameterIgnoreUnsupportedFilters>;

export const GetHrisAbsenceTypesParameterIds = S.String;
export type GetHrisAbsenceTypesParameterIds = S.Schema.Type<typeof GetHrisAbsenceTypesParameterIds>;

export const GetHrisAbsenceTypesParameterRemoteIds = S.String;
export type GetHrisAbsenceTypesParameterRemoteIds = S.Schema.Type<typeof GetHrisAbsenceTypesParameterRemoteIds>;

export const GetHrisAbsenceTypesPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ next: S.NullOr(S.String), results: S.Array(S.Struct({ id: S.String, remote_id: S.String, name: S.NullOr(S.String), unit: S.NullOr(S.Union(S.Literal("HOURS"), S.Literal("DAYS"))), half_days_supported: S.NullOr(S.Boolean), exact_times_supported: S.NullOr(S.Boolean), remote_data: S.NullOr(S.Record({ key: S.String, value: S.Unknown })), changed_at: S.String, remote_deleted_at: S.NullOr(S.String) })) }) });
export type GetHrisAbsenceTypesPositiveResponse = S.Schema.Type<typeof GetHrisAbsenceTypesPositiveResponse>;

export const GetHrisTimeOffBalancesParameterCursor = S.String;
export type GetHrisTimeOffBalancesParameterCursor = S.Schema.Type<typeof GetHrisTimeOffBalancesParameterCursor>;

export const GetHrisTimeOffBalancesParameterPageSize = Schema_default_100_4;
export type GetHrisTimeOffBalancesParameterPageSize = S.Schema.Type<typeof GetHrisTimeOffBalancesParameterPageSize>;

export const GetHrisTimeOffBalancesParameterUpdatedAfter = S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisTimeOffBalancesParameterUpdatedAfter = S.Schema.Type<typeof GetHrisTimeOffBalancesParameterUpdatedAfter>;

export const GetHrisTimeOffBalancesParameterIncludeDeleted = Union_default_false;
export type GetHrisTimeOffBalancesParameterIncludeDeleted = S.Schema.Type<typeof GetHrisTimeOffBalancesParameterIncludeDeleted>;

export const GetHrisTimeOffBalancesParameterIgnoreUnsupportedFilters = Union_default_false;
export type GetHrisTimeOffBalancesParameterIgnoreUnsupportedFilters = S.Schema.Type<typeof GetHrisTimeOffBalancesParameterIgnoreUnsupportedFilters>;

export const GetHrisTimeOffBalancesParameterIds = S.String;
export type GetHrisTimeOffBalancesParameterIds = S.Schema.Type<typeof GetHrisTimeOffBalancesParameterIds>;

export const GetHrisTimeOffBalancesParameterRemoteIds = S.String;
export type GetHrisTimeOffBalancesParameterRemoteIds = S.Schema.Type<typeof GetHrisTimeOffBalancesParameterRemoteIds>;

export const GetHrisTimeOffBalancesParameterEmployeeId = S.String;
export type GetHrisTimeOffBalancesParameterEmployeeId = S.Schema.Type<typeof GetHrisTimeOffBalancesParameterEmployeeId>;

export const GetHrisTimeOffBalancesPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ next: S.NullOr(S.String), results: S.Array(S.Struct({ id: S.String, remote_id: S.NullOr(S.String), employee_id: S.String, type_id: S.String, balance: S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), balance_unit: S.NullOr(S.Union(S.Literal("HOURS"), S.Literal("DAYS"))), changed_at: S.String, remote_deleted_at: S.NullOr(S.String), used: S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), used_unit: S.NullOr(S.Union(S.Literal("HOURS"), S.Literal("DAYS"))), remote_data: S.NullOr(S.Record({ key: S.String, value: S.Unknown })), type: S.Struct({ id: S.String, remote_id: S.String, name: S.NullOr(S.String), unit: S.NullOr(S.Union(S.Literal("HOURS"), S.Literal("DAYS"))), half_days_supported: S.NullOr(S.Boolean), exact_times_supported: S.NullOr(S.Boolean), remote_data: S.NullOr(S.Record({ key: S.String, value: S.Unknown })), changed_at: S.String, remote_deleted_at: S.NullOr(S.String) }) })) }) });
export type GetHrisTimeOffBalancesPositiveResponse = S.Schema.Type<typeof GetHrisTimeOffBalancesPositiveResponse>;

export const GetHrisAbsencesParameterCursor = S.String;
export type GetHrisAbsencesParameterCursor = S.Schema.Type<typeof GetHrisAbsencesParameterCursor>;

export const GetHrisAbsencesParameterPageSize = Schema_default_100_4;
export type GetHrisAbsencesParameterPageSize = S.Schema.Type<typeof GetHrisAbsencesParameterPageSize>;

export const GetHrisAbsencesParameterUpdatedAfter = S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisAbsencesParameterUpdatedAfter = S.Schema.Type<typeof GetHrisAbsencesParameterUpdatedAfter>;

export const GetHrisAbsencesParameterIncludeDeleted = Union_default_false;
export type GetHrisAbsencesParameterIncludeDeleted = S.Schema.Type<typeof GetHrisAbsencesParameterIncludeDeleted>;

export const GetHrisAbsencesParameterIgnoreUnsupportedFilters = Union_default_false;
export type GetHrisAbsencesParameterIgnoreUnsupportedFilters = S.Schema.Type<typeof GetHrisAbsencesParameterIgnoreUnsupportedFilters>;

export const GetHrisAbsencesParameterIds = S.String;
export type GetHrisAbsencesParameterIds = S.Schema.Type<typeof GetHrisAbsencesParameterIds>;

export const GetHrisAbsencesParameterRemoteIds = S.String;
export type GetHrisAbsencesParameterRemoteIds = S.Schema.Type<typeof GetHrisAbsencesParameterRemoteIds>;

export const GetHrisAbsencesParameterDateFrom = S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisAbsencesParameterDateFrom = S.Schema.Type<typeof GetHrisAbsencesParameterDateFrom>;

export const GetHrisAbsencesParameterDateUntil = S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisAbsencesParameterDateUntil = S.Schema.Type<typeof GetHrisAbsencesParameterDateUntil>;

export const GetHrisAbsencesParameterTypeIds = S.String;
export type GetHrisAbsencesParameterTypeIds = S.Schema.Type<typeof GetHrisAbsencesParameterTypeIds>;

export const GetHrisAbsencesParameterEmployeeId = S.String;
export type GetHrisAbsencesParameterEmployeeId = S.Schema.Type<typeof GetHrisAbsencesParameterEmployeeId>;

export const GetHrisAbsencesParameterTimeFrom = S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisAbsencesParameterTimeFrom = S.Schema.Type<typeof GetHrisAbsencesParameterTimeFrom>;

export const GetHrisAbsencesParameterTimeUntil = S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisAbsencesParameterTimeUntil = S.Schema.Type<typeof GetHrisAbsencesParameterTimeUntil>;

export const GetHrisAbsencesPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ next: S.NullOr(S.String), results: S.Array(S.Struct({ id: S.String, remote_id: S.NullOr(S.String), employee_id: S.String, approver_id: S.NullOr(S.String), start_date: S.Null, end_date: S.Null, start_half_day: S.NullOr(S.Boolean), end_half_day: S.NullOr(S.Boolean), start_time: S.Null, end_time: S.Null, amount: S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), unit: S.NullOr(S.Union(S.Literal("HOURS"), S.Literal("DAYS"))), status: S.optional(S.Union(S.Union(S.Literal("REQUESTED"), S.Literal("APPROVED"), S.Literal("DECLINED"), S.Literal("CANCELLED"), S.Literal("DELETED")), S.String, S.Null)), employee_note: S.NullOr(S.String), type_id: S.NullOr(S.String), remote_created_at: S.NullOr(S.String), remote_updated_at: S.NullOr(S.String), changed_at: S.String, remote_deleted_at: S.NullOr(S.String), remote_data: S.NullOr(S.Record({ key: S.String, value: S.Unknown })), type: S.NullOr(S.Struct({ id: S.String, remote_id: S.String, name: S.NullOr(S.String), unit: S.NullOr(S.Union(S.Literal("HOURS"), S.Literal("DAYS"))), half_days_supported: S.NullOr(S.Boolean), exact_times_supported: S.NullOr(S.Boolean), remote_data: S.NullOr(S.Record({ key: S.String, value: S.Unknown })), changed_at: S.String, remote_deleted_at: S.NullOr(S.String) })) })) }) });
export type GetHrisAbsencesPositiveResponse = S.Schema.Type<typeof GetHrisAbsencesPositiveResponse>;

export const PostHrisAbsencesPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ id: S.String, remote_id: S.NullOr(S.String), employee_id: S.String, approver_id: S.NullOr(S.String), start_date: S.Null, end_date: S.Null, start_half_day: S.NullOr(S.Boolean), end_half_day: S.NullOr(S.Boolean), start_time: S.Null, end_time: S.Null, amount: S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), unit: S.NullOr(S.Union(S.Literal("HOURS"), S.Literal("DAYS"))), status: S.optional(S.Union(S.Union(S.Literal("REQUESTED"), S.Literal("APPROVED"), S.Literal("DECLINED"), S.Literal("CANCELLED"), S.Literal("DELETED")), S.String, S.Null)), employee_note: S.NullOr(S.String), type_id: S.NullOr(S.String), remote_created_at: S.NullOr(S.String), remote_updated_at: S.NullOr(S.String), changed_at: S.String, remote_deleted_at: S.NullOr(S.String), remote_data: S.NullOr(S.Record({ key: S.String, value: S.Unknown })) }), warnings: S.Array(S.Struct({ message: S.String })) });
export type PostHrisAbsencesPositiveResponse = S.Schema.Type<typeof PostHrisAbsencesPositiveResponse>;

export const PostHrisAbsencesRequestBody = S.Struct({ employee_id: S.String, absence_type_id: S.String, status: Union_default_REQUESTED_prop, start_date: S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))), end_date: S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))), start_half_day: Boolean_default_false_prop, end_half_day: Boolean_default_false_prop, amount: S.optional(S.Number.pipe(S.greaterThanOrEqualTo(0))), unit: S.optional(S.Union(S.Literal("HOURS"), S.Literal("DAYS"))), employee_note: S.NullOr(S.String), start_time: S.optional(S.String.pipe(S.pattern(new RegExp("^(?:2[0-3]|[01]?\\d):[0-5]?\\d(:[0-5]?\\d)?$")))), end_time: S.optional(S.String.pipe(S.pattern(new RegExp("^(?:2[0-3]|[01]?\\d):[0-5]?\\d(:[0-5]?\\d)?$")))), remote_fields: S.optional(S.Struct({ a3innuvanomina: S.optional(S.Struct({ benefit_type_id: S.optional(S.Union(S.Literal("Delegated Payment"), S.Literal("No Right to Benefit"), S.Literal("Direct payment"))) })), adpworkforcenow: S.optional(S.Struct({ employment_id: S.optional(S.String), paid_leave: S.optional(S.Boolean) })) })) });
export type PostHrisAbsencesRequestBody = S.Schema.Type<typeof PostHrisAbsencesRequestBody>;

export const DeleteHrisAbsencesAbsenceIdParameterAbsenceId = S.String;
export type DeleteHrisAbsencesAbsenceIdParameterAbsenceId = S.Schema.Type<typeof DeleteHrisAbsencesAbsenceIdParameterAbsenceId>;

export const DeleteHrisAbsencesAbsenceIdPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ id: S.String, remote_id: S.NullOr(S.String), employee_id: S.String, approver_id: S.NullOr(S.String), start_date: S.Null, end_date: S.Null, start_half_day: S.NullOr(S.Boolean), end_half_day: S.NullOr(S.Boolean), start_time: S.Null, end_time: S.Null, amount: S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), unit: S.NullOr(S.Union(S.Literal("HOURS"), S.Literal("DAYS"))), status: S.optional(S.Union(S.Union(S.Literal("REQUESTED"), S.Literal("APPROVED"), S.Literal("DECLINED"), S.Literal("CANCELLED"), S.Literal("DELETED")), S.String, S.Null)), employee_note: S.NullOr(S.String), type_id: S.NullOr(S.String), remote_created_at: S.NullOr(S.String), remote_updated_at: S.NullOr(S.String), changed_at: S.String, remote_deleted_at: S.NullOr(S.String), remote_data: S.NullOr(S.Record({ key: S.String, value: S.Unknown })) }), warnings: S.Array(S.Struct({ message: S.String })) });
export type DeleteHrisAbsencesAbsenceIdPositiveResponse = S.Schema.Type<typeof DeleteHrisAbsencesAbsenceIdPositiveResponse>;

export const DeleteHrisAbsencesAbsenceIdRequestBody = S.Struct({ remote_fields: S.optional(S.Struct({ adpworkforcenow: S.optional(S.Struct({ employment_id: S.optional(S.String) })) })) });
export type DeleteHrisAbsencesAbsenceIdRequestBody = S.Schema.Type<typeof DeleteHrisAbsencesAbsenceIdRequestBody>;

export const GetHrisLegalEntitiesParameterCursor = S.String;
export type GetHrisLegalEntitiesParameterCursor = S.Schema.Type<typeof GetHrisLegalEntitiesParameterCursor>;

export const GetHrisLegalEntitiesParameterPageSize = Schema_default_100_4;
export type GetHrisLegalEntitiesParameterPageSize = S.Schema.Type<typeof GetHrisLegalEntitiesParameterPageSize>;

export const GetHrisLegalEntitiesParameterUpdatedAfter = S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisLegalEntitiesParameterUpdatedAfter = S.Schema.Type<typeof GetHrisLegalEntitiesParameterUpdatedAfter>;

export const GetHrisLegalEntitiesParameterIncludeDeleted = Union_default_false;
export type GetHrisLegalEntitiesParameterIncludeDeleted = S.Schema.Type<typeof GetHrisLegalEntitiesParameterIncludeDeleted>;

export const GetHrisLegalEntitiesParameterIgnoreUnsupportedFilters = Union_default_false;
export type GetHrisLegalEntitiesParameterIgnoreUnsupportedFilters = S.Schema.Type<typeof GetHrisLegalEntitiesParameterIgnoreUnsupportedFilters>;

export const GetHrisLegalEntitiesParameterIds = S.String;
export type GetHrisLegalEntitiesParameterIds = S.Schema.Type<typeof GetHrisLegalEntitiesParameterIds>;

export const GetHrisLegalEntitiesParameterRemoteIds = S.String;
export type GetHrisLegalEntitiesParameterRemoteIds = S.Schema.Type<typeof GetHrisLegalEntitiesParameterRemoteIds>;

export const GetHrisLegalEntitiesParameterNameContains = S.String;
export type GetHrisLegalEntitiesParameterNameContains = S.Schema.Type<typeof GetHrisLegalEntitiesParameterNameContains>;

export const GetHrisLegalEntitiesPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ next: S.NullOr(S.String), results: S.Array(S.Struct({ id: S.String, remote_id: S.NullOr(S.String), name: S.NullOr(S.String), address: S.optional(S.NullOr(S.Struct({ city: S.optional(S.NullOr(S.String)), country: S.optional(S.NullOr(S.String)), raw: S.optional(S.NullOr(S.String)), state: S.optional(S.NullOr(S.String)), street_1: S.optional(S.NullOr(S.String)), street_2: S.optional(S.NullOr(S.String)), zip_code: S.optional(S.NullOr(S.String)) }))), changed_at: S.String, remote_deleted_at: S.NullOr(S.String), remote_data: S.NullOr(S.Record({ key: S.String, value: S.Unknown })) })) }) });
export type GetHrisLegalEntitiesPositiveResponse = S.Schema.Type<typeof GetHrisLegalEntitiesPositiveResponse>;

export const GetHrisTimesheetsParameterCursor = S.String;
export type GetHrisTimesheetsParameterCursor = S.Schema.Type<typeof GetHrisTimesheetsParameterCursor>;

export const GetHrisTimesheetsParameterPageSize = Schema_default_100_4;
export type GetHrisTimesheetsParameterPageSize = S.Schema.Type<typeof GetHrisTimesheetsParameterPageSize>;

export const GetHrisTimesheetsParameterUpdatedAfter = S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisTimesheetsParameterUpdatedAfter = S.Schema.Type<typeof GetHrisTimesheetsParameterUpdatedAfter>;

export const GetHrisTimesheetsParameterIncludeDeleted = Union_default_false;
export type GetHrisTimesheetsParameterIncludeDeleted = S.Schema.Type<typeof GetHrisTimesheetsParameterIncludeDeleted>;

export const GetHrisTimesheetsParameterIgnoreUnsupportedFilters = Union_default_false;
export type GetHrisTimesheetsParameterIgnoreUnsupportedFilters = S.Schema.Type<typeof GetHrisTimesheetsParameterIgnoreUnsupportedFilters>;

export const GetHrisTimesheetsParameterIds = S.String;
export type GetHrisTimesheetsParameterIds = S.Schema.Type<typeof GetHrisTimesheetsParameterIds>;

export const GetHrisTimesheetsParameterRemoteIds = S.String;
export type GetHrisTimesheetsParameterRemoteIds = S.Schema.Type<typeof GetHrisTimesheetsParameterRemoteIds>;

export const GetHrisTimesheetsParameterEmployeeId = S.String;
export type GetHrisTimesheetsParameterEmployeeId = S.Schema.Type<typeof GetHrisTimesheetsParameterEmployeeId>;

export const GetHrisTimesheetsParameterStartedBefore = S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisTimesheetsParameterStartedBefore = S.Schema.Type<typeof GetHrisTimesheetsParameterStartedBefore>;

export const GetHrisTimesheetsParameterStartedAfter = S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisTimesheetsParameterStartedAfter = S.Schema.Type<typeof GetHrisTimesheetsParameterStartedAfter>;

export const GetHrisTimesheetsParameterEndedBefore = S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisTimesheetsParameterEndedBefore = S.Schema.Type<typeof GetHrisTimesheetsParameterEndedBefore>;

export const GetHrisTimesheetsParameterEndedAfter = S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisTimesheetsParameterEndedAfter = S.Schema.Type<typeof GetHrisTimesheetsParameterEndedAfter>;

export const GetHrisTimesheetsPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ next: S.NullOr(S.String), results: S.Array(S.Struct({ id: S.String, remote_id: S.NullOr(S.String), employee_id: S.String, started_at: S.NullOr(S.String), ended_at: S.NullOr(S.String), timezone: S.NullOr(S.String.pipe(S.pattern(new RegExp("^[+-](?:0\\d|1[0-4]):[0-5]\\d$")))), payable_hours: S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), unpaid_break_minutes: S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), breaks: S.optional(S.NullOr(S.Array(S.Struct({ ended_at: S.Union(S.String, S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")))), paid: S.Boolean, started_at: S.Union(S.String, S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")))) })))), approval_status: S.NullOr(S.String), approved_at: S.NullOr(S.String), comment: S.NullOr(S.String), custom_fields: S.NullOr(S.Record({ key: S.String, value: S.Unknown })), integration_fields: S.Array(S.Struct({ id: S.String, key: S.String, type: S.Union(S.Literal("DEFAULT"), S.Literal("CUSTOM")), value: S.optional(S.Null), label: S.NullOr(S.String) })), changed_at: S.String, remote_deleted_at: S.NullOr(S.String), remote_data: S.NullOr(S.Record({ key: S.String, value: S.Unknown })) })) }) });
export type GetHrisTimesheetsPositiveResponse = S.Schema.Type<typeof GetHrisTimesheetsPositiveResponse>;

export const GetHrisPerformanceReviewCyclesParameterCursor = S.String;
export type GetHrisPerformanceReviewCyclesParameterCursor = S.Schema.Type<typeof GetHrisPerformanceReviewCyclesParameterCursor>;

export const GetHrisPerformanceReviewCyclesParameterPageSize = Schema_default_100_4;
export type GetHrisPerformanceReviewCyclesParameterPageSize = S.Schema.Type<typeof GetHrisPerformanceReviewCyclesParameterPageSize>;

export const GetHrisPerformanceReviewCyclesParameterUpdatedAfter = S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisPerformanceReviewCyclesParameterUpdatedAfter = S.Schema.Type<typeof GetHrisPerformanceReviewCyclesParameterUpdatedAfter>;

export const GetHrisPerformanceReviewCyclesParameterIncludeDeleted = Union_default_false;
export type GetHrisPerformanceReviewCyclesParameterIncludeDeleted = S.Schema.Type<typeof GetHrisPerformanceReviewCyclesParameterIncludeDeleted>;

export const GetHrisPerformanceReviewCyclesParameterIgnoreUnsupportedFilters = Union_default_false;
export type GetHrisPerformanceReviewCyclesParameterIgnoreUnsupportedFilters = S.Schema.Type<typeof GetHrisPerformanceReviewCyclesParameterIgnoreUnsupportedFilters>;

export const GetHrisPerformanceReviewCyclesParameterIds = S.String;
export type GetHrisPerformanceReviewCyclesParameterIds = S.Schema.Type<typeof GetHrisPerformanceReviewCyclesParameterIds>;

export const GetHrisPerformanceReviewCyclesParameterRemoteIds = S.String;
export type GetHrisPerformanceReviewCyclesParameterRemoteIds = S.Schema.Type<typeof GetHrisPerformanceReviewCyclesParameterRemoteIds>;

export const GetHrisPerformanceReviewCyclesPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ next: S.NullOr(S.String), results: S.Array(S.Struct({ id: S.String, remote_id: S.String, name: S.NullOr(S.String), review_period_start_date: S.NullOr(S.String), changed_at: S.String, remote_deleted_at: S.NullOr(S.String), remote_data: S.NullOr(S.Record({ key: S.String, value: S.Unknown })) })) }) });
export type GetHrisPerformanceReviewCyclesPositiveResponse = S.Schema.Type<typeof GetHrisPerformanceReviewCyclesPositiveResponse>;

export const GetHrisPerformanceReviewsParameterCursor = S.String;
export type GetHrisPerformanceReviewsParameterCursor = S.Schema.Type<typeof GetHrisPerformanceReviewsParameterCursor>;

export const GetHrisPerformanceReviewsParameterPageSize = Schema_default_100_4;
export type GetHrisPerformanceReviewsParameterPageSize = S.Schema.Type<typeof GetHrisPerformanceReviewsParameterPageSize>;

export const GetHrisPerformanceReviewsParameterUpdatedAfter = S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisPerformanceReviewsParameterUpdatedAfter = S.Schema.Type<typeof GetHrisPerformanceReviewsParameterUpdatedAfter>;

export const GetHrisPerformanceReviewsParameterIncludeDeleted = Union_default_false;
export type GetHrisPerformanceReviewsParameterIncludeDeleted = S.Schema.Type<typeof GetHrisPerformanceReviewsParameterIncludeDeleted>;

export const GetHrisPerformanceReviewsParameterIgnoreUnsupportedFilters = Union_default_false;
export type GetHrisPerformanceReviewsParameterIgnoreUnsupportedFilters = S.Schema.Type<typeof GetHrisPerformanceReviewsParameterIgnoreUnsupportedFilters>;

export const GetHrisPerformanceReviewsParameterIds = S.String;
export type GetHrisPerformanceReviewsParameterIds = S.Schema.Type<typeof GetHrisPerformanceReviewsParameterIds>;

export const GetHrisPerformanceReviewsParameterRemoteIds = S.String;
export type GetHrisPerformanceReviewsParameterRemoteIds = S.Schema.Type<typeof GetHrisPerformanceReviewsParameterRemoteIds>;

export const GetHrisPerformanceReviewsParameterTypes = S.String;
export type GetHrisPerformanceReviewsParameterTypes = S.Schema.Type<typeof GetHrisPerformanceReviewsParameterTypes>;

export const GetHrisPerformanceReviewsParameterReviewCycleIds = S.String;
export type GetHrisPerformanceReviewsParameterReviewCycleIds = S.Schema.Type<typeof GetHrisPerformanceReviewsParameterReviewCycleIds>;

export const GetHrisPerformanceReviewsParameterRevieweeIds = S.String;
export type GetHrisPerformanceReviewsParameterRevieweeIds = S.Schema.Type<typeof GetHrisPerformanceReviewsParameterRevieweeIds>;

export const GetHrisPerformanceReviewsPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ next: S.NullOr(S.String), results: S.Array(S.Struct({ id: S.String, remote_id: S.String, type: S.NullOr(S.Union(S.Literal("MANAGER"), S.Literal("DIRECT_REPORT"), S.Literal("PEER"), S.Literal("SELF"))), summary_comment: S.NullOr(S.String), summary_rating: S.optional(S.Union(S.Struct({ type: S.String, min: S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), max: S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), value: S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))) }), S.Struct({ type: S.String, ordered_options: S.NullOr(S.Array(S.String)), value: S.NullOr(S.String) }), S.Null)), changed_at: S.String, remote_deleted_at: S.NullOr(S.String), remote_data: S.NullOr(S.Record({ key: S.String, value: S.Unknown })), reviewee: S.Struct({ id: S.String, remote_id: S.String, first_name: S.NullOr(S.String), last_name: S.NullOr(S.String), display_full_name: S.NullOr(S.String), work_email: S.optional(S.NullOr(S.String.pipe(S.pattern(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$"))))), remote_deleted_at: S.NullOr(S.String) }), reviewer: S.NullOr(S.Struct({ id: S.String, remote_id: S.String, first_name: S.NullOr(S.String), last_name: S.NullOr(S.String), display_full_name: S.NullOr(S.String), work_email: S.optional(S.NullOr(S.String.pipe(S.pattern(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$"))))), remote_deleted_at: S.NullOr(S.String) })), review_cycle: S.NullOr(S.Struct({ id: S.String, remote_id: S.String, name: S.NullOr(S.String), review_period_start_date: S.NullOr(S.String), changed_at: S.String, remote_deleted_at: S.NullOr(S.String), remote_data: S.NullOr(S.Record({ key: S.String, value: S.Unknown })) })) })) }) });
export type GetHrisPerformanceReviewsPositiveResponse = S.Schema.Type<typeof GetHrisPerformanceReviewsPositiveResponse>;

export const GetHrisSkillsParameterIds = S.String;
export type GetHrisSkillsParameterIds = S.Schema.Type<typeof GetHrisSkillsParameterIds>;

export const GetHrisSkillsParameterRemoteIds = S.String;
export type GetHrisSkillsParameterRemoteIds = S.Schema.Type<typeof GetHrisSkillsParameterRemoteIds>;

export const GetHrisSkillsParameterNameContains = S.String;
export type GetHrisSkillsParameterNameContains = S.Schema.Type<typeof GetHrisSkillsParameterNameContains>;

export const GetHrisSkillsPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ next: S.NullOr(S.String), results: S.Array(S.Struct({ id: S.String, remote_id: S.String, name: S.String, description: S.NullOr(S.String), ordered_levels: S.NullOr(S.Array(S.String)), changed_at: S.String, remote_deleted_at: S.NullOr(S.String), remote_data: S.NullOr(S.Record({ key: S.String, value: S.Unknown })) })) }) });
export type GetHrisSkillsPositiveResponse = S.Schema.Type<typeof GetHrisSkillsPositiveResponse>;

export const PostHrisSkillsPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ id: S.String, remote_id: S.String, name: S.String, description: S.NullOr(S.String), ordered_levels: S.NullOr(S.Array(S.String)), changed_at: S.String, remote_deleted_at: S.NullOr(S.String), remote_data: S.NullOr(S.Record({ key: S.String, value: S.Unknown })) }) });
export type PostHrisSkillsPositiveResponse = S.Schema.Type<typeof PostHrisSkillsPositiveResponse>;

export const PostHrisSkillsRequestBody = S.Struct({ name: S.String, levels: S.optional(S.Array(S.String)) });
export type PostHrisSkillsRequestBody = S.Schema.Type<typeof PostHrisSkillsRequestBody>;

export const PatchHrisSkillsSkillIdParameterSkillId = S.String;
export type PatchHrisSkillsSkillIdParameterSkillId = S.Schema.Type<typeof PatchHrisSkillsSkillIdParameterSkillId>;

export const PatchHrisSkillsSkillIdPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ id: S.String, remote_id: S.String, name: S.String, description: S.NullOr(S.String), ordered_levels: S.NullOr(S.Array(S.String)), changed_at: S.String, remote_deleted_at: S.NullOr(S.String), remote_data: S.NullOr(S.Record({ key: S.String, value: S.Unknown })) }) });
export type PatchHrisSkillsSkillIdPositiveResponse = S.Schema.Type<typeof PatchHrisSkillsSkillIdPositiveResponse>;

export const PatchHrisSkillsSkillIdRequestBody = S.Struct({ name: S.optional(S.String), levels: S.optional(S.Array(S.String)) });
export type PatchHrisSkillsSkillIdRequestBody = S.Schema.Type<typeof PatchHrisSkillsSkillIdRequestBody>;

export const DeleteHrisSkillsSkillIdParameterSkillId = S.String;
export type DeleteHrisSkillsSkillIdParameterSkillId = S.Schema.Type<typeof DeleteHrisSkillsSkillIdParameterSkillId>;

export const DeleteHrisSkillsSkillIdPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ id: S.String, remote_id: S.String, name: S.String, description: S.NullOr(S.String), ordered_levels: S.NullOr(S.Array(S.String)), changed_at: S.String, remote_deleted_at: S.NullOr(S.String), remote_data: S.NullOr(S.Record({ key: S.String, value: S.Unknown })) }) });
export type DeleteHrisSkillsSkillIdPositiveResponse = S.Schema.Type<typeof DeleteHrisSkillsSkillIdPositiveResponse>;

export const DeleteHrisSkillsSkillIdRequestBody = S.Struct({  });
export type DeleteHrisSkillsSkillIdRequestBody = S.Schema.Type<typeof DeleteHrisSkillsSkillIdRequestBody>;

export const GetHrisEmployeeSkillAssignmentsParameterIds = S.String;
export type GetHrisEmployeeSkillAssignmentsParameterIds = S.Schema.Type<typeof GetHrisEmployeeSkillAssignmentsParameterIds>;

export const GetHrisEmployeeSkillAssignmentsParameterRemoteIds = S.String;
export type GetHrisEmployeeSkillAssignmentsParameterRemoteIds = S.Schema.Type<typeof GetHrisEmployeeSkillAssignmentsParameterRemoteIds>;

export const GetHrisEmployeeSkillAssignmentsParameterEmployeeIds = S.String;
export type GetHrisEmployeeSkillAssignmentsParameterEmployeeIds = S.Schema.Type<typeof GetHrisEmployeeSkillAssignmentsParameterEmployeeIds>;

export const GetHrisEmployeeSkillAssignmentsParameterSkillIds = S.String;
export type GetHrisEmployeeSkillAssignmentsParameterSkillIds = S.Schema.Type<typeof GetHrisEmployeeSkillAssignmentsParameterSkillIds>;

export const GetHrisEmployeeSkillAssignmentsPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ next: S.NullOr(S.String), results: S.Array(S.Struct({ id: S.String, employee_id: S.String, skill_id: S.String, current_level: S.NullOr(S.String) })) }) });
export type GetHrisEmployeeSkillAssignmentsPositiveResponse = S.Schema.Type<typeof GetHrisEmployeeSkillAssignmentsPositiveResponse>;

export const PostHrisEmployeeSkillAssignmentsPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ id: S.String, employee_id: S.String, skill_id: S.String, current_level: S.NullOr(S.String) }) });
export type PostHrisEmployeeSkillAssignmentsPositiveResponse = S.Schema.Type<typeof PostHrisEmployeeSkillAssignmentsPositiveResponse>;

export const PostHrisEmployeeSkillAssignmentsRequestBody = S.Struct({ employee_id: S.String, skill_id: S.String, current_level: S.optional(S.String) });
export type PostHrisEmployeeSkillAssignmentsRequestBody = S.Schema.Type<typeof PostHrisEmployeeSkillAssignmentsRequestBody>;

export const PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId = S.String;
export type PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId = S.Schema.Type<typeof PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId>;

export const PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ id: S.String, employee_id: S.String, skill_id: S.String, current_level: S.NullOr(S.String) }) });
export type PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse = S.Schema.Type<typeof PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse>;

export const PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody = S.Struct({ current_level: S.NullOr(S.String) });
export type PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody = S.Schema.Type<typeof PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody>;

export const DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId = S.String;
export type DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId = S.Schema.Type<typeof DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId>;

export const DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ id: S.String, employee_id: S.String, skill_id: S.String, current_level: S.NullOr(S.String) }) });
export type DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse = S.Schema.Type<typeof DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse>;

export const DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody = S.Struct({  });
export type DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody = S.Schema.Type<typeof DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody>;

export const GetHrisStaffingEntitiesParameterCursor = S.String;
export type GetHrisStaffingEntitiesParameterCursor = S.Schema.Type<typeof GetHrisStaffingEntitiesParameterCursor>;

export const GetHrisStaffingEntitiesParameterPageSize = Schema_default_100_4;
export type GetHrisStaffingEntitiesParameterPageSize = S.Schema.Type<typeof GetHrisStaffingEntitiesParameterPageSize>;

export const GetHrisStaffingEntitiesParameterUpdatedAfter = S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisStaffingEntitiesParameterUpdatedAfter = S.Schema.Type<typeof GetHrisStaffingEntitiesParameterUpdatedAfter>;

export const GetHrisStaffingEntitiesParameterIncludeDeleted = Union_default_false;
export type GetHrisStaffingEntitiesParameterIncludeDeleted = S.Schema.Type<typeof GetHrisStaffingEntitiesParameterIncludeDeleted>;

export const GetHrisStaffingEntitiesParameterIgnoreUnsupportedFilters = Union_default_false;
export type GetHrisStaffingEntitiesParameterIgnoreUnsupportedFilters = S.Schema.Type<typeof GetHrisStaffingEntitiesParameterIgnoreUnsupportedFilters>;

export const GetHrisStaffingEntitiesParameterIds = S.String;
export type GetHrisStaffingEntitiesParameterIds = S.Schema.Type<typeof GetHrisStaffingEntitiesParameterIds>;

export const GetHrisStaffingEntitiesParameterRemoteIds = S.String;
export type GetHrisStaffingEntitiesParameterRemoteIds = S.Schema.Type<typeof GetHrisStaffingEntitiesParameterRemoteIds>;

export const GetHrisStaffingEntitiesParameterModelTypes = S.String;
export type GetHrisStaffingEntitiesParameterModelTypes = S.Schema.Type<typeof GetHrisStaffingEntitiesParameterModelTypes>;

export const GetHrisStaffingEntitiesParameterStatuses = S.String;
export type GetHrisStaffingEntitiesParameterStatuses = S.Schema.Type<typeof GetHrisStaffingEntitiesParameterStatuses>;

export const GetHrisStaffingEntitiesPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ next: S.NullOr(S.String), results: S.Array(S.Struct({ id: S.String, remote_id: S.String, name: S.NullOr(S.String), model_type: S.NullOr(S.Union(S.Literal("JOB"), S.Literal("POSITION"), S.Literal("REQUISITION"))), description: S.NullOr(S.String), status: S.NullOr(S.Union(S.Literal("OPEN_LIMITED"), S.Literal("OPEN_UNLIMITED"), S.Literal("PENDING"), S.Literal("FROZEN"), S.Literal("FILLED"), S.Literal("CLOSED"))), employment_types: S.optional(S.NullOr(S.Array(S.Struct({ remote_label: S.String, unified_type: S.NullOr(S.Union(S.Literal("FULL_TIME"), S.Literal("PART_TIME"), S.Literal("CONTRACT"), S.Literal("INTERNSHIP"), S.Literal("FREELANCE"), S.Literal("WORKING_STUDENT"), S.Literal("APPRENTICESHIP"), S.Literal("TRAINING"))) })))), number_of_openings: S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), parent_id: S.NullOr(S.String), remote_url: S.NullOr(S.String), remote_created_at: S.NullOr(S.String), remote_updated_at: S.NullOr(S.String), changed_at: S.String, remote_deleted_at: S.NullOr(S.String), custom_fields: S.NullOr(S.Record({ key: S.String, value: S.Unknown })), integration_fields: S.Array(S.Struct({ id: S.String, key: S.String, type: S.Union(S.Literal("DEFAULT"), S.Literal("CUSTOM")), value: S.optional(S.Null), label: S.NullOr(S.String) })), remote_data: S.NullOr(S.Record({ key: S.String, value: S.Unknown })), locations: S.Array(S.Struct({ id: S.String, remote_id: S.NullOr(S.String), name: S.NullOr(S.String), type: S.NullOr(S.String) })), legal_entities: S.Array(S.Struct({ id: S.String, remote_id: S.NullOr(S.String), name: S.NullOr(S.String) })), groups: S.Array(S.Struct({ id: S.String, remote_id: S.String, name: S.NullOr(S.String), type: S.NullOr(S.Union(S.Literal("DEPARTMENT"), S.Literal("TEAM"), S.Literal("COST_CENTER"))) })) })) }) });
export type GetHrisStaffingEntitiesPositiveResponse = S.Schema.Type<typeof GetHrisStaffingEntitiesPositiveResponse>;

export const GetAtsApplicationsParameterCursor = S.String;
export type GetAtsApplicationsParameterCursor = S.Schema.Type<typeof GetAtsApplicationsParameterCursor>;

export const GetAtsApplicationsParameterPageSize = Schema_default_100_4;
export type GetAtsApplicationsParameterPageSize = S.Schema.Type<typeof GetAtsApplicationsParameterPageSize>;

export const GetAtsApplicationsParameterUpdatedAfter = S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetAtsApplicationsParameterUpdatedAfter = S.Schema.Type<typeof GetAtsApplicationsParameterUpdatedAfter>;

export const GetAtsApplicationsParameterIncludeDeleted = Union_default_false;
export type GetAtsApplicationsParameterIncludeDeleted = S.Schema.Type<typeof GetAtsApplicationsParameterIncludeDeleted>;

export const GetAtsApplicationsParameterIgnoreUnsupportedFilters = Union_default_false;
export type GetAtsApplicationsParameterIgnoreUnsupportedFilters = S.Schema.Type<typeof GetAtsApplicationsParameterIgnoreUnsupportedFilters>;

export const GetAtsApplicationsParameterIds = S.String;
export type GetAtsApplicationsParameterIds = S.Schema.Type<typeof GetAtsApplicationsParameterIds>;

export const GetAtsApplicationsParameterRemoteIds = S.String;
export type GetAtsApplicationsParameterRemoteIds = S.Schema.Type<typeof GetAtsApplicationsParameterRemoteIds>;

export const GetAtsApplicationsParameterOutcome = S.Union(S.Literal("PENDING"), S.Literal("HIRED"), S.Literal("DECLINED"));
export type GetAtsApplicationsParameterOutcome = S.Schema.Type<typeof GetAtsApplicationsParameterOutcome>;

export const GetAtsApplicationsParameterOutcomes = S.String;
export type GetAtsApplicationsParameterOutcomes = S.Schema.Type<typeof GetAtsApplicationsParameterOutcomes>;

export const GetAtsApplicationsParameterJobIds = S.String;
export type GetAtsApplicationsParameterJobIds = S.Schema.Type<typeof GetAtsApplicationsParameterJobIds>;

export const GetAtsApplicationsParameterJobRemoteIds = S.String;
export type GetAtsApplicationsParameterJobRemoteIds = S.Schema.Type<typeof GetAtsApplicationsParameterJobRemoteIds>;

export const GetAtsApplicationsParameterCurrentStageIds = S.String;
export type GetAtsApplicationsParameterCurrentStageIds = S.Schema.Type<typeof GetAtsApplicationsParameterCurrentStageIds>;

export const GetAtsApplicationsParameterRemoteCreatedAfter = S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetAtsApplicationsParameterRemoteCreatedAfter = S.Schema.Type<typeof GetAtsApplicationsParameterRemoteCreatedAfter>;

export const GetAtsApplicationsPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ next: S.NullOr(S.String), results: S.Array(S.Struct({ id: S.String, remote_id: S.NullOr(S.String), outcome: S.NullOr(S.Union(S.Literal("PENDING"), S.Literal("HIRED"), S.Literal("DECLINED"))), rejection_reason_name: S.NullOr(S.String), rejected_at: S.NullOr(S.String), current_stage_id: S.NullOr(S.String), job_id: S.NullOr(S.String), candidate_id: S.NullOr(S.String), screening_question_answers: NullOr_default_value_prop_12, custom_fields: S.NullOr(S.Record({ key: S.String, value: S.Unknown })), integration_fields: S.Array(S.Struct({ id: S.String, key: S.String, type: S.Union(S.Literal("DEFAULT"), S.Literal("CUSTOM")), value: S.optional(S.Null), label: S.NullOr(S.String) })), remote_url: S.NullOr(S.String), changed_at: S.String, remote_deleted_at: S.NullOr(S.String), remote_created_at: S.NullOr(S.String), remote_updated_at: S.NullOr(S.String), remote_data: S.NullOr(S.Record({ key: S.String, value: S.Unknown })), candidate: S.NullOr(S.Struct({ id: S.String, remote_id: S.String, first_name: S.NullOr(S.String), last_name: S.NullOr(S.String), email_addresses: NullOr_default_value_prop, phone_numbers: NullOr_default_value_prop_10, social_media: NullOr_default_value_prop_11, source: S.NullOr(S.String), remote_url: S.NullOr(S.String), tags: S.Array(S.Struct({ id: S.String, remote_id: S.NullOr(S.String), name: S.NullOr(S.String) })) })), current_stage: S.NullOr(S.Struct({ id: S.String, remote_id: S.NullOr(S.String), name: S.NullOr(S.String), index: S.NullOr(S.Int) })), job: S.NullOr(S.Struct({ id: S.String, remote_id: S.String, name: S.NullOr(S.String) })), interviews: S.Array(S.Struct({ id: S.String, remote_id: S.NullOr(S.String), title: S.NullOr(S.String), starting_at: S.NullOr(S.String), ending_at: S.NullOr(S.String), location: S.optional(S.NullOr(S.Struct({ city: S.optional(S.NullOr(S.String)), country: S.optional(S.NullOr(S.String)), raw: S.optional(S.NullOr(S.String)), state: S.optional(S.NullOr(S.String)), street_1: S.optional(S.NullOr(S.String)), street_2: S.optional(S.NullOr(S.String)), zip_code: S.optional(S.NullOr(S.String)) }))), canceled: S.NullOr(S.Boolean) })), offers: S.Array(S.Struct({ id: S.String, remote_id: S.NullOr(S.String), status: S.NullOr(S.Union(S.Literal("ACCEPTED"), S.Literal("DECLINED"), S.Literal("SENT"), S.Literal("APPROVED"), S.Literal("DRAFT"), S.Literal("ABANDONED"))) })) })) }) });
export type GetAtsApplicationsPositiveResponse = S.Schema.Type<typeof GetAtsApplicationsPositiveResponse>;

export const PutAtsApplicationsApplicationIdStageParameterApplicationId = S.String;
export type PutAtsApplicationsApplicationIdStageParameterApplicationId = S.Schema.Type<typeof PutAtsApplicationsApplicationIdStageParameterApplicationId>;

export const PutAtsApplicationsApplicationIdStagePositiveResponse = S.Struct({ status: S.String, data: S.Record({ key: S.String, value: S.Unknown }), warnings: S.Array(S.Struct({ message: S.String })) });
export type PutAtsApplicationsApplicationIdStagePositiveResponse = S.Schema.Type<typeof PutAtsApplicationsApplicationIdStagePositiveResponse>;

export const PutAtsApplicationsApplicationIdStageRequestBody = S.Struct({ stage_id: S.String, remote_fields: S.optional(S.Struct({ workday: S.optional(S.Struct({ Workflow_Step_ID: S.optional(S.String), Step_Type: S.optional(S.Union(S.Literal("Next_Step_Reference"), S.Literal("Disposition_Step_Reference"))) })), greenhouse: S.optional(S.Struct({ post_headers: S.optional(S.Struct({ "On-Behalf-Of": S.optional(S.NullOr(S.String)) })) })), workable: S.optional(S.Struct({ on_behalf_of_user_remote_id: S.optional(S.String) })) })) });
export type PutAtsApplicationsApplicationIdStageRequestBody = S.Schema.Type<typeof PutAtsApplicationsApplicationIdStageRequestBody>;

export const PostAtsApplicationsApplicationIdResultLinksParameterApplicationId = S.String;
export type PostAtsApplicationsApplicationIdResultLinksParameterApplicationId = S.Schema.Type<typeof PostAtsApplicationsApplicationIdResultLinksParameterApplicationId>;

export const PostAtsApplicationsApplicationIdResultLinksPositiveResponse = S.Struct({ status: S.String, data: S.Record({ key: S.String, value: S.Unknown }), warnings: S.Array(S.Struct({ message: S.String })) });
export type PostAtsApplicationsApplicationIdResultLinksPositiveResponse = S.Schema.Type<typeof PostAtsApplicationsApplicationIdResultLinksPositiveResponse>;

export const PostAtsApplicationsApplicationIdResultLinksRequestBody = S.Struct({ label: S.String, url: S.String, details: S.optional(S.Struct({ custom_field_name_prefix: S.String, attributes: S.Array(S.Struct({ key: S.String, value: S.String })) })), remote_fields: S.optional(S.Struct({ icims: S.optional(S.Struct({ assessment_package_id: S.optional(S.String) })), oracle: S.optional(S.Struct({ override_document_category: S.optional(S.Union(S.Literal("IRC_CANDIDATE_RESUME"), S.Literal("IRC_CANDIDATE_COVERLETTER"), S.Literal("MISC"), S.Literal("IRC_INTERNAL"))), multi_post_to_all_current_applications: S.optional(S.Boolean) })), greenhouse: S.optional(S.Struct({ post_headers: S.optional(S.Struct({ "On-Behalf-Of": S.optional(S.NullOr(S.String)) })) })), workable: S.optional(S.Struct({ on_behalf_of_user_remote_id: S.optional(S.String) })) })) });
export type PostAtsApplicationsApplicationIdResultLinksRequestBody = S.Schema.Type<typeof PostAtsApplicationsApplicationIdResultLinksRequestBody>;

export const PostAtsApplicationsApplicationIdNotesParameterApplicationId = S.String;
export type PostAtsApplicationsApplicationIdNotesParameterApplicationId = S.Schema.Type<typeof PostAtsApplicationsApplicationIdNotesParameterApplicationId>;

export const PostAtsApplicationsApplicationIdNotesPositiveResponse = S.Struct({ status: S.String, data: S.Record({ key: S.String, value: S.Unknown }), warnings: S.Array(S.Struct({ message: S.String })) });
export type PostAtsApplicationsApplicationIdNotesPositiveResponse = S.Schema.Type<typeof PostAtsApplicationsApplicationIdNotesPositiveResponse>;

export const PostAtsApplicationsApplicationIdNotesRequestBody = S.Struct({ content: S.String, content_type: S.Literal("PLAIN_TEXT"), remote_fields: S.optional(S.Struct({ teamtailor: S.optional(S.Struct({ user_id: S.optional(S.String) })), greenhouse: S.optional(S.Struct({ visibility: S.optional(S.Union(S.Literal("admin_only"), S.Literal("private"), S.Literal("public"))), post_headers: S.optional(S.Struct({ "On-Behalf-Of": S.optional(S.NullOr(S.String)) })) })), recruitee: S.optional(S.Struct({ visibility: S.optional(S.Unknown), is_json: S.optional(S.Boolean) })), bullhorn: S.optional(S.Struct({ action: S.optional(S.String) })), lever: S.optional(S.Struct({ perform_as: S.optional(S.String) })), workable: S.optional(S.Struct({ on_behalf_of_user_remote_id: S.optional(S.String) })) })) });
export type PostAtsApplicationsApplicationIdNotesRequestBody = S.Schema.Type<typeof PostAtsApplicationsApplicationIdNotesRequestBody>;

export const GetAtsApplicationsApplicationIdAttachmentsParameterApplicationId = S.String;
export type GetAtsApplicationsApplicationIdAttachmentsParameterApplicationId = S.Schema.Type<typeof GetAtsApplicationsApplicationIdAttachmentsParameterApplicationId>;

export const GetAtsApplicationsApplicationIdAttachmentsPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ results: S.Array(S.Struct({ type: S.Union(S.Literal("CV"), S.Literal("COVER_LETTER"), S.Literal("OTHER")), id: S.String, remote_id: S.String, data_url: S.String, file_name: S.String, content_type: S.String, remote_created_at: S.NullOr(S.String), remote_updated_at: S.NullOr(S.String) })) }), warnings: S.Array(S.Struct({ message: S.String })) });
export type GetAtsApplicationsApplicationIdAttachmentsPositiveResponse = S.Schema.Type<typeof GetAtsApplicationsApplicationIdAttachmentsPositiveResponse>;

export const PostAtsApplicationsApplicationIdAttachmentsParameterApplicationId = S.String;
export type PostAtsApplicationsApplicationIdAttachmentsParameterApplicationId = S.Schema.Type<typeof PostAtsApplicationsApplicationIdAttachmentsParameterApplicationId>;

export const PostAtsApplicationsApplicationIdAttachmentsPositiveResponse = S.Struct({ status: S.String, data: S.Record({ key: S.String, value: S.Unknown }), warnings: S.Array(S.Struct({ message: S.String })) });
export type PostAtsApplicationsApplicationIdAttachmentsPositiveResponse = S.Schema.Type<typeof PostAtsApplicationsApplicationIdAttachmentsPositiveResponse>;

export const PostAtsApplicationsApplicationIdAttachmentsRequestBody = S.Struct({ attachment: S.Struct({ name: S.String, content_type: S.optional(S.String.pipe(S.pattern(new RegExp("^[\\w.-]+\\/[\\w.-]+$")))), data_url: S.optional(S.String), data: S.optional(S.String), type: S.Union(S.Literal("CV"), S.Literal("COVER_LETTER"), S.Literal("OTHER")) }), remote_fields: S.optional(S.Struct({ oracle: S.optional(S.Struct({ override_document_category: S.optional(S.Union(S.Literal("IRC_CANDIDATE_RESUME"), S.Literal("IRC_CANDIDATE_COVERLETTER"), S.Literal("MISC"), S.Literal("IRC_INTERNAL"))), multi_post_to_all_current_applications: S.optional(S.Boolean) })), greenhouse: S.optional(S.Struct({ post_headers: S.optional(S.Struct({ "On-Behalf-Of": S.optional(S.NullOr(S.String)) })) })), workable: S.optional(S.Struct({ on_behalf_of_user_remote_id: S.optional(S.String) })) })) });
export type PostAtsApplicationsApplicationIdAttachmentsRequestBody = S.Schema.Type<typeof PostAtsApplicationsApplicationIdAttachmentsRequestBody>;

export const PostAtsApplicationsApplicationIdRejectParameterApplicationId = S.String;
export type PostAtsApplicationsApplicationIdRejectParameterApplicationId = S.Schema.Type<typeof PostAtsApplicationsApplicationIdRejectParameterApplicationId>;

export const PostAtsApplicationsApplicationIdRejectPositiveResponse = S.Struct({ status: S.String, data: S.Record({ key: S.String, value: S.Unknown }), warnings: S.Array(S.Struct({ message: S.String })) });
export type PostAtsApplicationsApplicationIdRejectPositiveResponse = S.Schema.Type<typeof PostAtsApplicationsApplicationIdRejectPositiveResponse>;

export const PostAtsApplicationsApplicationIdRejectRequestBody = S.Struct({ rejection_reason_id: S.String, note: S.optional(S.String), remote_fields: S.optional(S.Struct({ greenhouse: S.optional(S.Struct({ rejection_email: S.optional(S.Record({ key: S.String, value: S.Unknown })), post_headers: S.optional(S.Struct({ "On-Behalf-Of": S.optional(S.NullOr(S.String)) })) })), teamtailor: S.optional(S.Struct({ user_id: S.optional(S.String) })), workable: S.optional(S.Struct({ on_behalf_of_user_remote_id: S.optional(S.String) })) })) });
export type PostAtsApplicationsApplicationIdRejectRequestBody = S.Schema.Type<typeof PostAtsApplicationsApplicationIdRejectRequestBody>;

export const PostAtsApplicationsApplicationIdInterviewsParameterApplicationId = S.String;
export type PostAtsApplicationsApplicationIdInterviewsParameterApplicationId = S.Schema.Type<typeof PostAtsApplicationsApplicationIdInterviewsParameterApplicationId>;

export const PostAtsApplicationsApplicationIdInterviewsPositiveResponse = S.Struct({ status: S.String, data: S.Record({ key: S.String, value: S.Unknown }) });
export type PostAtsApplicationsApplicationIdInterviewsPositiveResponse = S.Schema.Type<typeof PostAtsApplicationsApplicationIdInterviewsPositiveResponse>;

export const PostAtsApplicationsApplicationIdInterviewsRequestBody = S.Struct({ title: S.String, start_time: S.String, end_time: S.String, interviewer_user_ids: S.Array(S.String), organizer_user_id: S.String, location: S.Struct({ type: S.Union(S.Literal("PHYSICAL"), S.Literal("VIRTUAL")), address: S.optional(S.String) }) });
export type PostAtsApplicationsApplicationIdInterviewsRequestBody = S.Schema.Type<typeof PostAtsApplicationsApplicationIdInterviewsRequestBody>;

export const PatchAtsApplicationsApplicationIdInterviewsParameterApplicationId = S.String;
export type PatchAtsApplicationsApplicationIdInterviewsParameterApplicationId = S.Schema.Type<typeof PatchAtsApplicationsApplicationIdInterviewsParameterApplicationId>;

export const PatchAtsApplicationsApplicationIdInterviewsPositiveResponse = S.Struct({ status: S.String, data: S.Record({ key: S.String, value: S.Unknown }) });
export type PatchAtsApplicationsApplicationIdInterviewsPositiveResponse = S.Schema.Type<typeof PatchAtsApplicationsApplicationIdInterviewsPositiveResponse>;

export const PatchAtsApplicationsApplicationIdInterviewsRequestBody = S.Struct({ interview_id: S.String, title: S.String, start_time: S.String, end_time: S.String, interviewer_user_ids: S.Array(S.String), organizer_user_id: S.String, location: S.Struct({ type: S.Union(S.Literal("PHYSICAL"), S.Literal("VIRTUAL")), address: S.optional(S.String) }) });
export type PatchAtsApplicationsApplicationIdInterviewsRequestBody = S.Schema.Type<typeof PatchAtsApplicationsApplicationIdInterviewsRequestBody>;

export const GetAtsCandidatesParameterCursor = S.String;
export type GetAtsCandidatesParameterCursor = S.Schema.Type<typeof GetAtsCandidatesParameterCursor>;

export const GetAtsCandidatesParameterPageSize = Schema_default_100_4;
export type GetAtsCandidatesParameterPageSize = S.Schema.Type<typeof GetAtsCandidatesParameterPageSize>;

export const GetAtsCandidatesParameterUpdatedAfter = S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetAtsCandidatesParameterUpdatedAfter = S.Schema.Type<typeof GetAtsCandidatesParameterUpdatedAfter>;

export const GetAtsCandidatesParameterIncludeDeleted = Union_default_false;
export type GetAtsCandidatesParameterIncludeDeleted = S.Schema.Type<typeof GetAtsCandidatesParameterIncludeDeleted>;

export const GetAtsCandidatesParameterIgnoreUnsupportedFilters = Union_default_false;
export type GetAtsCandidatesParameterIgnoreUnsupportedFilters = S.Schema.Type<typeof GetAtsCandidatesParameterIgnoreUnsupportedFilters>;

export const GetAtsCandidatesParameterIds = S.String;
export type GetAtsCandidatesParameterIds = S.Schema.Type<typeof GetAtsCandidatesParameterIds>;

export const GetAtsCandidatesParameterRemoteIds = S.String;
export type GetAtsCandidatesParameterRemoteIds = S.Schema.Type<typeof GetAtsCandidatesParameterRemoteIds>;

export const GetAtsCandidatesParameterEmail = S.String.pipe(S.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/));
export type GetAtsCandidatesParameterEmail = S.Schema.Type<typeof GetAtsCandidatesParameterEmail>;

export const GetAtsCandidatesParameterJobIds = S.String;
export type GetAtsCandidatesParameterJobIds = S.Schema.Type<typeof GetAtsCandidatesParameterJobIds>;

export const GetAtsCandidatesParameterFirstName = S.String;
export type GetAtsCandidatesParameterFirstName = S.Schema.Type<typeof GetAtsCandidatesParameterFirstName>;

export const GetAtsCandidatesParameterLastName = S.String;
export type GetAtsCandidatesParameterLastName = S.Schema.Type<typeof GetAtsCandidatesParameterLastName>;

export const GetAtsCandidatesPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ next: S.NullOr(S.String), results: S.Array(S.Struct({ id: S.String, remote_id: S.String, first_name: S.NullOr(S.String), last_name: S.NullOr(S.String), company: S.NullOr(S.String), title: S.NullOr(S.String), confidential: S.NullOr(S.Boolean), source: S.NullOr(S.String), phone_numbers: NullOr_default_value_prop_10, email_addresses: NullOr_default_value_prop, social_media: NullOr_default_value_prop_11, location: S.optional(S.NullOr(S.Struct({ city: S.optional(S.NullOr(S.String)), country: S.optional(S.NullOr(S.String)), raw: S.optional(S.NullOr(S.String)), state: S.optional(S.NullOr(S.String)), street_1: S.optional(S.NullOr(S.String)), street_2: S.optional(S.NullOr(S.String)), zip_code: S.optional(S.NullOr(S.String)) }))), custom_fields: S.NullOr(S.Record({ key: S.String, value: S.Unknown })), integration_fields: S.Array(S.Struct({ id: S.String, key: S.String, type: S.Union(S.Literal("DEFAULT"), S.Literal("CUSTOM")), value: S.optional(S.Null), label: S.NullOr(S.String) })), remote_url: S.NullOr(S.String), remote_created_at: S.NullOr(S.String), remote_updated_at: S.NullOr(S.String), remote_data: S.NullOr(S.Record({ key: S.String, value: S.Unknown })), changed_at: S.String, remote_deleted_at: S.NullOr(S.String), applications: S.Array(S.Struct({ id: S.String, remote_id: S.NullOr(S.String), outcome: S.NullOr(S.Union(S.Literal("PENDING"), S.Literal("HIRED"), S.Literal("DECLINED"))), rejection_reason_name: S.NullOr(S.String), rejected_at: S.NullOr(S.String), remote_url: S.NullOr(S.String), changed_at: S.String, remote_created_at: S.NullOr(S.String), remote_updated_at: S.NullOr(S.String), current_stage: S.NullOr(S.Struct({ id: S.String, name: S.NullOr(S.String), remote_id: S.NullOr(S.String), index: S.NullOr(S.Int) })), job: S.NullOr(S.Struct({ id: S.String, name: S.NullOr(S.String), remote_id: S.String })) })), tags: S.Array(S.Struct({ id: S.String, name: S.NullOr(S.String), remote_id: S.NullOr(S.String) })) })) }) });
export type GetAtsCandidatesPositiveResponse = S.Schema.Type<typeof GetAtsCandidatesPositiveResponse>;

export const PostAtsCandidatesPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ id: S.String, remote_id: S.String, first_name: S.NullOr(S.String), last_name: S.NullOr(S.String), company: S.NullOr(S.String), title: S.NullOr(S.String), confidential: S.NullOr(S.Boolean), source: S.NullOr(S.String), phone_numbers: NullOr_default_value_prop_10, email_addresses: NullOr_default_value_prop, social_media: NullOr_default_value_prop_11, location: S.optional(S.NullOr(S.Struct({ city: S.optional(S.NullOr(S.String)), country: S.optional(S.NullOr(S.String)), raw: S.optional(S.NullOr(S.String)), state: S.optional(S.NullOr(S.String)), street_1: S.optional(S.NullOr(S.String)), street_2: S.optional(S.NullOr(S.String)), zip_code: S.optional(S.NullOr(S.String)) }))), custom_fields: S.NullOr(S.Record({ key: S.String, value: S.Unknown })), integration_fields: S.Array(S.Struct({ id: S.String, key: S.String, type: S.Union(S.Literal("DEFAULT"), S.Literal("CUSTOM")), value: S.optional(S.Null), label: S.NullOr(S.String) })), remote_url: S.NullOr(S.String), remote_created_at: S.NullOr(S.String), remote_updated_at: S.NullOr(S.String), remote_data: S.NullOr(S.Record({ key: S.String, value: S.Unknown })), changed_at: S.String, remote_deleted_at: S.NullOr(S.String), applications: S.Array(S.Struct({ id: S.String, remote_id: S.NullOr(S.String), outcome: S.NullOr(S.Union(S.Literal("PENDING"), S.Literal("HIRED"), S.Literal("DECLINED"))), rejection_reason_name: S.NullOr(S.String), rejected_at: S.NullOr(S.String), remote_url: S.NullOr(S.String), changed_at: S.String, remote_created_at: S.NullOr(S.String), remote_updated_at: S.NullOr(S.String), current_stage: S.NullOr(S.Struct({ id: S.String, name: S.NullOr(S.String), remote_id: S.NullOr(S.String), index: S.NullOr(S.Int) })), job: S.NullOr(S.Struct({ id: S.String, name: S.NullOr(S.String), remote_id: S.String })) })), tags: S.Array(S.Struct({ id: S.String, name: S.NullOr(S.String), remote_id: S.NullOr(S.String) })) }), warnings: S.Array(S.Struct({ message: S.String })) });
export type PostAtsCandidatesPositiveResponse = S.Schema.Type<typeof PostAtsCandidatesPositiveResponse>;

export const PostAtsCandidatesRequestBody = S.Struct({ candidate: S.Struct({ first_name: S.String, last_name: S.String, email_address: S.String.pipe(S.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)), additional_email_addresses: S.optional(S.Array(S.Struct({ type: S.Union(S.Literal("PERSONAL"), S.Literal("WORK"), S.Literal("OTHER")), email_address: S.String.pipe(S.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) }))), company: S.optional(S.String), title: S.optional(S.String), phone_number: S.optional(S.String), additional_phone_numbers: S.optional(S.Array(S.Struct({ type: S.Union(S.Literal("PERSONAL"), S.Literal("WORK"), S.Literal("OTHER")), phone_number: S.String }))), location: S.optional(S.Struct({ city: S.optional(S.String), country: S.String.pipe(S.pattern(new RegExp("^[A-Z]{2}$"))), state: S.optional(S.String), street_1: S.optional(S.String), zip_code: S.optional(S.String) })), gender: S.optional(S.Union(S.Literal("MALE"), S.Literal("FEMALE"), S.Literal("OTHER"))), availability_date: S.optional(S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), salary_expectations: S.optional(S.Struct({ period: S.Union(S.Literal("MONTH"), S.Literal("YEAR")), amount: S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308)) })), social_links: Array_default_value_prop_13 }), application: S.Struct({ job_id: S.String, stage_id: S.optional(S.String) }), screening_question_answers: S.optional(S.Array(S.Struct({ question_id: S.String, answer: S.Union(S.String, S.Boolean, S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308)), S.Array(S.String), S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))), S.Struct({ name: S.String, content_type: S.optional(S.String.pipe(S.pattern(new RegExp("^[\\w.-]+\\/[\\w.-]+$")))), data_url: S.optional(S.String), data: S.optional(S.String) })) }))), attachments: Union_default_value_prop, source: S.optional(S.Struct({ name: S.optional(S.String), unified_key: S.optional(S.String), id: S.optional(S.String) })), sourced_by: S.optional(S.Struct({ user_id: S.String })), gdpr_consent: S.optional(S.Struct({ expires_at: S.optional(S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), given: S.optional(S.Boolean) })), remote_fields: S.optional(S.Struct({ successfactors: S.optional(S.Struct({ Candidate: S.optional(S.Record({ key: S.String, value: S.Unknown })), JobApplication: S.optional(S.Record({ key: S.String, value: S.Unknown })), copyJobApplicationAttachments: S.optional(S.Boolean), update_existing_candidate: S.optional(S.NullOr(S.Boolean)) })), personio: S.optional(S.Struct({ application: S.optional(S.Record({ key: S.String, value: S.Unknown })) })), talentsoft: S.optional(S.Struct({ applicant: S.optional(S.Record({ key: S.String, value: S.Unknown })), application: S.optional(S.Record({ key: S.String, value: S.Unknown })) })), teamtailor: S.optional(S.Struct({ candidate: S.optional(S.Record({ key: S.String, value: S.Unknown })), application: S.optional(S.Struct({ attributes: S.optional(S.Record({ key: S.String, value: S.Unknown })) })) })), greenhouse: S.optional(S.Struct({ candidate: S.optional(S.Record({ key: S.String, value: S.Unknown })), application: S.optional(S.Record({ key: S.String, value: S.Unknown })), post_headers: S.optional(S.Struct({ "On-Behalf-Of": S.optional(S.NullOr(S.String)) })) })), lever: S.optional(S.Struct({ candidate: S.optional(S.Record({ key: S.String, value: S.Unknown })) })), workable: S.optional(S.Struct({ candidate: S.optional(S.Record({ key: S.String, value: S.Unknown })), on_behalf_of_user_remote_id: S.optional(S.String) })), workday: S.optional(S.Struct({ Candidate_Data: S.optional(S.Struct({ Name_Detail_Data: S.optional(S.Struct({ Middle_Name: S.optional(S.String), Social_Suffix_Reference: S.optional(S.Struct({ Predefined_Name_Component_ID: S.String })) })), Language_Reference: S.optional(S.Struct({ WID: S.String })), Job_Application_Data: S.optional(S.Struct({ Job_Applied_To_Data: S.optional(S.Struct({ Global_Personal_Information_Data: S.optional(S.Struct({ Date_of_Birth: S.optional(S.String) })) })), Resume_Data: S.optional(S.Struct({ Education_Data: S.optional(S.Array(S.Struct({ School_Name: S.optional(S.String), First_Year_Attended: S.optional(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), Last_Year_Attended: S.optional(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), Field_of_Study_Reference: S.optional(S.Struct({ WID: S.String })), Degree_Reference: S.optional(S.Struct({ WID: S.String })), Grade_Average: S.optional(S.String) }))), Skill_Data: S.optional(S.Array(S.Struct({ Skill_Name: S.optional(S.String) }))), Language_Data: S.optional(S.Array(S.Struct({ Language_Reference: S.optional(S.Struct({ WID: S.optional(S.String) })), Language: S.optional(S.Struct({ Native: S.optional(S.Boolean), Language_Ability: S.Array(S.Struct({ Language_Ability_Data: S.optional(S.Struct({ Language_Proficiency_Reference: S.optional(S.Struct({ WID: S.String })), Language_Ability_Type_Reference: S.optional(S.Struct({ WID: S.String })) })) })) })) }))), Experience_Data: S.optional(S.Array(S.Struct({ Company_Name: S.String, Title: S.String, Location: S.optional(S.String), Start_Date: S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))), End_Date: S.optional(S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), Currently_Work_Here: S.optional(S.Boolean), Description: S.optional(S.String) }))) })) })), Contact_Data: S.optional(S.Struct({ Location_Data: S.optional(S.Struct({ Address_Line_1: S.optional(S.String), Address_Line_2: S.optional(S.String), Region_Subdivision_1: S.optional(S.String), Country_Region_Reference: S.optional(S.Struct({ Country_Region_ID: S.String })), Country_City_Reference: S.optional(S.Struct({ WID: S.String })) })) })), Worker_Reference: S.optional(S.Struct({ WID: S.optional(S.String), Employee_ID: S.optional(S.String) })) })), Override_Source_Reference_WID: S.optional(S.String) })), zohorecruit: S.optional(S.Struct({ candidate: S.optional(S.Record({ key: S.String, value: S.Unknown })) })), bullhorn: S.optional(S.Struct({ candidate: S.optional(S.Record({ key: S.String, value: S.Unknown })), job_submission: S.optional(S.Record({ key: S.String, value: S.Unknown })) })), smartrecruiters: S.optional(S.Struct({ candidate_with_questions: S.optional(S.Record({ key: S.String, value: S.Unknown })), candidate_without_questions: S.optional(S.Record({ key: S.String, value: S.Unknown })), candidate: S.optional(S.Record({ key: S.String, value: S.Unknown })), consent_decisions: S.optional(S.Struct({ SINGLE: S.optional(S.Boolean), SMART_RECRUIT: S.optional(S.Boolean), SMART_CRM: S.optional(S.Boolean), SMART_MESSAGE_SMS: S.optional(S.Boolean), SMART_MESSAGE_WHATSAPP: S.optional(S.Boolean) })) })), talentadore: S.optional(S.Struct({ applications: S.optional(S.Record({ key: S.String, value: S.Unknown })) })), guidecom: S.optional(S.Struct({ candidate: S.optional(S.Record({ key: S.String, value: S.Unknown })) })), dvinci: S.optional(S.Struct({ application: S.optional(S.Record({ key: S.String, value: S.Unknown })), candidate: S.optional(S.Record({ key: S.String, value: S.Unknown })) })), hrworks: S.optional(S.Struct({ jobApplication: S.optional(S.Record({ key: S.String, value: S.Unknown })) })), jobylon: S.optional(S.Struct({ application: S.optional(S.Struct({ message: S.optional(S.String) })) })), avature: S.optional(S.Struct({ workflow: S.optional(S.Struct({ step: S.optional(S.Struct({ id: S.Int })) })) })), recruitee: S.optional(S.Struct({ candidate: S.optional(S.Struct({ cover_letter_text: S.optional(S.String) })) })), rexx: S.optional(S.Struct({ candidate: S.optional(S.Record({ key: S.String, value: S.Unknown })) })), umantis: S.optional(S.Struct({ person: S.optional(S.Record({ key: S.String, value: S.Unknown })) })), piloga: S.optional(S.Struct({ candidate: S.optional(S.Struct({ street: S.optional(S.String) })) })), pinpoint: S.optional(S.Struct({ candidate: S.optional(S.Record({ key: S.String, value: S.Unknown })) })), covetorest: S.optional(S.Struct({ candidate: S.optional(S.Struct({ mandant: S.optional(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))) })) })) })) });
export type PostAtsCandidatesRequestBody = S.Schema.Type<typeof PostAtsCandidatesRequestBody>;

export const GetAtsCandidatesCandidateIdAttachmentsParameterCandidateId = S.String;
export type GetAtsCandidatesCandidateIdAttachmentsParameterCandidateId = S.Schema.Type<typeof GetAtsCandidatesCandidateIdAttachmentsParameterCandidateId>;

export const GetAtsCandidatesCandidateIdAttachmentsPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ results: S.Array(S.Struct({ id: S.String.pipe(S.minLength(24), S.maxLength(24), S.pattern(new RegExp("^[1-9A-HJ-NP-Za-km-z]+$"))), application_id: S.NullOr(S.String.pipe(S.minLength(24), S.maxLength(24), S.pattern(new RegExp("^[1-9A-HJ-NP-Za-km-z]+$")))), candidate_id: S.String.pipe(S.minLength(24), S.maxLength(24), S.pattern(new RegExp("^[1-9A-HJ-NP-Za-km-z]+$"))), type: S.Union(S.Literal("CV"), S.Literal("COVER_LETTER"), S.Literal("OTHER")), remote_id: S.String, data_url: S.String, file_name: S.String, content_type: S.String, remote_created_at: S.NullOr(S.String), remote_updated_at: S.NullOr(S.String) })) }), warnings: S.Array(S.Struct({ message: S.String })) });
export type GetAtsCandidatesCandidateIdAttachmentsPositiveResponse = S.Schema.Type<typeof GetAtsCandidatesCandidateIdAttachmentsPositiveResponse>;

export const PostAtsCandidatesCandidateIdAttachmentsParameterCandidateId = S.String;
export type PostAtsCandidatesCandidateIdAttachmentsParameterCandidateId = S.Schema.Type<typeof PostAtsCandidatesCandidateIdAttachmentsParameterCandidateId>;

export const PostAtsCandidatesCandidateIdAttachmentsPositiveResponse = S.Struct({ status: S.String, data: S.Record({ key: S.String, value: S.Unknown }), warnings: S.Array(S.Struct({ message: S.String })) });
export type PostAtsCandidatesCandidateIdAttachmentsPositiveResponse = S.Schema.Type<typeof PostAtsCandidatesCandidateIdAttachmentsPositiveResponse>;

export const PostAtsCandidatesCandidateIdAttachmentsRequestBody = S.Struct({ attachment: S.Struct({ name: S.String, content_type: S.optional(S.String.pipe(S.pattern(new RegExp("^[\\w.-]+\\/[\\w.-]+$")))), data_url: S.optional(S.String), data: S.optional(S.String), type: S.Union(S.Literal("CV"), S.Literal("COVER_LETTER"), S.Literal("OTHER")) }), remote_fields: S.optional(S.Struct({ greenhouse: S.optional(S.Struct({ post_headers: S.optional(S.Struct({ "On-Behalf-Of": S.optional(S.NullOr(S.String)) })) })), workable: S.optional(S.Struct({ on_behalf_of_user_remote_id: S.optional(S.String) })) })) });
export type PostAtsCandidatesCandidateIdAttachmentsRequestBody = S.Schema.Type<typeof PostAtsCandidatesCandidateIdAttachmentsRequestBody>;

export const PostAtsCandidatesCandidateIdResultLinksParameterCandidateId = S.String;
export type PostAtsCandidatesCandidateIdResultLinksParameterCandidateId = S.Schema.Type<typeof PostAtsCandidatesCandidateIdResultLinksParameterCandidateId>;

export const PostAtsCandidatesCandidateIdResultLinksPositiveResponse = S.Struct({ status: S.String, data: S.Record({ key: S.String, value: S.Unknown }), warnings: S.Array(S.Struct({ message: S.String })) });
export type PostAtsCandidatesCandidateIdResultLinksPositiveResponse = S.Schema.Type<typeof PostAtsCandidatesCandidateIdResultLinksPositiveResponse>;

export const PostAtsCandidatesCandidateIdResultLinksRequestBody = S.Struct({ label: S.String, url: S.String, details: S.optional(S.Struct({ custom_field_name_prefix: S.String, attributes: S.Array(S.Struct({ key: S.String, value: S.String })) })), remote_fields: S.optional(S.Struct({ icims: S.optional(S.Struct({ assessment_package_id: S.optional(S.String) })), oracle: S.optional(S.Struct({ override_document_category: S.optional(S.Union(S.Literal("IRC_CANDIDATE_RESUME"), S.Literal("IRC_CANDIDATE_COVERLETTER"), S.Literal("MISC"), S.Literal("IRC_INTERNAL"))), multi_post_to_all_current_applications: S.optional(S.Boolean) })), greenhouse: S.optional(S.Struct({ post_headers: S.optional(S.Struct({ "On-Behalf-Of": S.optional(S.NullOr(S.String)) })) })), workable: S.optional(S.Struct({ on_behalf_of_user_remote_id: S.optional(S.String) })) })) });
export type PostAtsCandidatesCandidateIdResultLinksRequestBody = S.Schema.Type<typeof PostAtsCandidatesCandidateIdResultLinksRequestBody>;

export const PostAtsCandidatesCandidateIdTagsParameterCandidateId = S.String;
export type PostAtsCandidatesCandidateIdTagsParameterCandidateId = S.Schema.Type<typeof PostAtsCandidatesCandidateIdTagsParameterCandidateId>;

export const PostAtsCandidatesCandidateIdTagsPositiveResponse = S.Struct({ status: S.String, data: S.Record({ key: S.String, value: S.Unknown }), warnings: S.Array(S.Struct({ message: S.String })) });
export type PostAtsCandidatesCandidateIdTagsPositiveResponse = S.Schema.Type<typeof PostAtsCandidatesCandidateIdTagsPositiveResponse>;

export const PostAtsCandidatesCandidateIdTagsRequestBody = S.Struct({ tag: S.Struct({ name: S.String.pipe(S.minLength(1)) }), remote_fields: S.optional(S.Struct({ greenhouse: S.optional(S.Struct({ post_headers: S.optional(S.Struct({ "On-Behalf-Of": S.optional(S.NullOr(S.String)) })) })), workable: S.optional(S.Struct({ on_behalf_of_user_remote_id: S.optional(S.String) })) })) });
export type PostAtsCandidatesCandidateIdTagsRequestBody = S.Schema.Type<typeof PostAtsCandidatesCandidateIdTagsRequestBody>;

export const DeleteAtsCandidatesCandidateIdTagsParameterCandidateId = S.String;
export type DeleteAtsCandidatesCandidateIdTagsParameterCandidateId = S.Schema.Type<typeof DeleteAtsCandidatesCandidateIdTagsParameterCandidateId>;

export const DeleteAtsCandidatesCandidateIdTagsPositiveResponse = S.Struct({ status: S.String, data: S.Record({ key: S.String, value: S.Unknown }), warnings: S.Array(S.Struct({ message: S.String })) });
export type DeleteAtsCandidatesCandidateIdTagsPositiveResponse = S.Schema.Type<typeof DeleteAtsCandidatesCandidateIdTagsPositiveResponse>;

export const DeleteAtsCandidatesCandidateIdTagsRequestBody = S.Struct({ tag: S.Struct({ name: S.String }), remote_fields: S.optional(S.Struct({ greenhouse: S.optional(S.Struct({ post_headers: S.optional(S.Struct({ "On-Behalf-Of": S.optional(S.NullOr(S.String)) })) })), workable: S.optional(S.Struct({ on_behalf_of_user_remote_id: S.optional(S.String) })) })) });
export type DeleteAtsCandidatesCandidateIdTagsRequestBody = S.Schema.Type<typeof DeleteAtsCandidatesCandidateIdTagsRequestBody>;

export const GetAtsTagsParameterCursor = S.String;
export type GetAtsTagsParameterCursor = S.Schema.Type<typeof GetAtsTagsParameterCursor>;

export const GetAtsTagsParameterPageSize = Schema_default_100_4;
export type GetAtsTagsParameterPageSize = S.Schema.Type<typeof GetAtsTagsParameterPageSize>;

export const GetAtsTagsParameterUpdatedAfter = S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetAtsTagsParameterUpdatedAfter = S.Schema.Type<typeof GetAtsTagsParameterUpdatedAfter>;

export const GetAtsTagsParameterIncludeDeleted = Union_default_false;
export type GetAtsTagsParameterIncludeDeleted = S.Schema.Type<typeof GetAtsTagsParameterIncludeDeleted>;

export const GetAtsTagsParameterIgnoreUnsupportedFilters = Union_default_false;
export type GetAtsTagsParameterIgnoreUnsupportedFilters = S.Schema.Type<typeof GetAtsTagsParameterIgnoreUnsupportedFilters>;

export const GetAtsTagsParameterIds = S.String;
export type GetAtsTagsParameterIds = S.Schema.Type<typeof GetAtsTagsParameterIds>;

export const GetAtsTagsParameterRemoteIds = S.String;
export type GetAtsTagsParameterRemoteIds = S.Schema.Type<typeof GetAtsTagsParameterRemoteIds>;

export const GetAtsTagsPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ next: S.NullOr(S.String), results: S.Array(S.Struct({ id: S.String, remote_id: S.NullOr(S.String), name: S.NullOr(S.String), remote_data: S.NullOr(S.Record({ key: S.String, value: S.Unknown })), changed_at: S.String, remote_deleted_at: S.NullOr(S.String) })) }) });
export type GetAtsTagsPositiveResponse = S.Schema.Type<typeof GetAtsTagsPositiveResponse>;

export const GetAtsApplicationStagesParameterCursor = S.String;
export type GetAtsApplicationStagesParameterCursor = S.Schema.Type<typeof GetAtsApplicationStagesParameterCursor>;

export const GetAtsApplicationStagesParameterPageSize = Schema_default_100_4;
export type GetAtsApplicationStagesParameterPageSize = S.Schema.Type<typeof GetAtsApplicationStagesParameterPageSize>;

export const GetAtsApplicationStagesParameterUpdatedAfter = S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetAtsApplicationStagesParameterUpdatedAfter = S.Schema.Type<typeof GetAtsApplicationStagesParameterUpdatedAfter>;

export const GetAtsApplicationStagesParameterIncludeDeleted = Union_default_false;
export type GetAtsApplicationStagesParameterIncludeDeleted = S.Schema.Type<typeof GetAtsApplicationStagesParameterIncludeDeleted>;

export const GetAtsApplicationStagesParameterIgnoreUnsupportedFilters = Union_default_false;
export type GetAtsApplicationStagesParameterIgnoreUnsupportedFilters = S.Schema.Type<typeof GetAtsApplicationStagesParameterIgnoreUnsupportedFilters>;

export const GetAtsApplicationStagesParameterIds = S.String;
export type GetAtsApplicationStagesParameterIds = S.Schema.Type<typeof GetAtsApplicationStagesParameterIds>;

export const GetAtsApplicationStagesParameterRemoteIds = S.String;
export type GetAtsApplicationStagesParameterRemoteIds = S.Schema.Type<typeof GetAtsApplicationStagesParameterRemoteIds>;

export const GetAtsApplicationStagesPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ next: S.NullOr(S.String), results: S.Array(S.Struct({ id: S.String, remote_id: S.NullOr(S.String), name: S.NullOr(S.String), remote_data: S.NullOr(S.Record({ key: S.String, value: S.Unknown })), changed_at: S.String, remote_deleted_at: S.NullOr(S.String) })) }) });
export type GetAtsApplicationStagesPositiveResponse = S.Schema.Type<typeof GetAtsApplicationStagesPositiveResponse>;

export const GetAtsJobsParameterCursor = S.String;
export type GetAtsJobsParameterCursor = S.Schema.Type<typeof GetAtsJobsParameterCursor>;

export const GetAtsJobsParameterPageSize = Schema_default_100_4;
export type GetAtsJobsParameterPageSize = S.Schema.Type<typeof GetAtsJobsParameterPageSize>;

export const GetAtsJobsParameterUpdatedAfter = S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetAtsJobsParameterUpdatedAfter = S.Schema.Type<typeof GetAtsJobsParameterUpdatedAfter>;

export const GetAtsJobsParameterIncludeDeleted = Union_default_false;
export type GetAtsJobsParameterIncludeDeleted = S.Schema.Type<typeof GetAtsJobsParameterIncludeDeleted>;

export const GetAtsJobsParameterIgnoreUnsupportedFilters = Union_default_false;
export type GetAtsJobsParameterIgnoreUnsupportedFilters = S.Schema.Type<typeof GetAtsJobsParameterIgnoreUnsupportedFilters>;

export const GetAtsJobsParameterIds = S.String;
export type GetAtsJobsParameterIds = S.Schema.Type<typeof GetAtsJobsParameterIds>;

export const GetAtsJobsParameterRemoteIds = S.String;
export type GetAtsJobsParameterRemoteIds = S.Schema.Type<typeof GetAtsJobsParameterRemoteIds>;

export const GetAtsJobsParameterJobCodes = S.String;
export type GetAtsJobsParameterJobCodes = S.Schema.Type<typeof GetAtsJobsParameterJobCodes>;

export const GetAtsJobsParameterPostUrl = S.String;
export type GetAtsJobsParameterPostUrl = S.Schema.Type<typeof GetAtsJobsParameterPostUrl>;

export const GetAtsJobsParameterStatus = S.Union(S.Literal("OPEN"), S.Literal("CLOSED"), S.Literal("DRAFT"), S.Literal("ARCHIVED"));
export type GetAtsJobsParameterStatus = S.Schema.Type<typeof GetAtsJobsParameterStatus>;

export const GetAtsJobsParameterStatuses = S.String;
export type GetAtsJobsParameterStatuses = S.Schema.Type<typeof GetAtsJobsParameterStatuses>;

export const GetAtsJobsParameterEmploymentTypes = S.String;
export type GetAtsJobsParameterEmploymentTypes = S.Schema.Type<typeof GetAtsJobsParameterEmploymentTypes>;

export const GetAtsJobsParameterVisibilities = S.String;
export type GetAtsJobsParameterVisibilities = S.Schema.Type<typeof GetAtsJobsParameterVisibilities>;

export const GetAtsJobsParameterRemoteCreatedAfter = S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetAtsJobsParameterRemoteCreatedAfter = S.Schema.Type<typeof GetAtsJobsParameterRemoteCreatedAfter>;

export const GetAtsJobsParameterNameContains = S.String;
export type GetAtsJobsParameterNameContains = S.Schema.Type<typeof GetAtsJobsParameterNameContains>;

export const GetAtsJobsPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ next: S.NullOr(S.String), results: S.Array(S.Struct({ id: S.String, remote_id: S.String, name: S.NullOr(S.String), job_code: S.NullOr(S.String), description: S.NullOr(S.String), confidential: S.NullOr(S.Boolean), weekly_hours: S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), employment_type: S.optional(S.Union(S.Union(S.Literal("FULL_TIME"), S.Literal("PART_TIME"), S.Literal("CONTRACT"), S.Literal("SEASONAL"), S.Literal("INTERNSHIP")), S.String, S.Null)), status: S.optional(S.Union(S.Union(S.Literal("OPEN"), S.Literal("CLOSED"), S.Literal("DRAFT"), S.Literal("ARCHIVED")), S.String, S.Null)), visibility: S.optional(S.Union(S.Union(S.Literal("PUBLIC"), S.Literal("INTERNAL"), S.Literal("UNLISTED"), S.Literal("CONFIDENTIAL")), S.String, S.Null)), category: S.NullOr(S.String), department: S.NullOr(S.String), post_url: S.NullOr(S.String), experience_level: S.NullOr(S.String), remote_work_status: S.optional(S.Union(S.Union(S.Literal("REMOTE"), S.Literal("HYBRID"), S.Literal("TEMPORARY"), S.Literal("ON_SITE")), S.String, S.Null)), salary_amount: S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), salary_amount_from: S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), salary_amount_to: S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), salary_currency: S.NullOr(S.String), salary_period: S.optional(S.Union(S.Union(S.Literal("YEAR"), S.Literal("MONTH"), S.Literal("TWO_WEEKS"), S.Literal("WEEK"), S.Literal("DAY"), S.Literal("HOUR")), S.String, S.Null)), location: S.optional(S.NullOr(S.Struct({ city: S.optional(S.NullOr(S.String)), country: S.optional(S.NullOr(S.String)), raw: S.optional(S.NullOr(S.String)), state: S.optional(S.NullOr(S.String)), street_1: S.optional(S.NullOr(S.String)), street_2: S.optional(S.NullOr(S.String)), zip_code: S.optional(S.NullOr(S.String)) }))), custom_fields: S.NullOr(S.Record({ key: S.String, value: S.Unknown })), integration_fields: S.Array(S.Struct({ id: S.String, key: S.String, type: S.Union(S.Literal("DEFAULT"), S.Literal("CUSTOM")), value: S.optional(S.Null), label: S.NullOr(S.String) })), remote_url: S.NullOr(S.String), opened_at: S.NullOr(S.String), closed_at: S.NullOr(S.String), remote_created_at: S.NullOr(S.String), remote_updated_at: S.NullOr(S.String), contact_id: S.NullOr(S.String), remote_data: S.NullOr(S.Record({ key: S.String, value: S.Unknown })), changed_at: S.String, remote_deleted_at: S.NullOr(S.String), stages: S.Array(S.Struct({ id: S.String, remote_id: S.NullOr(S.String), name: S.NullOr(S.String), remote_data: S.NullOr(S.Record({ key: S.String, value: S.Unknown })), index: S.optional(S.NullOr(S.Int)) })), screening_questions: S.Array(S.Struct({ id: S.String, remote_id: S.NullOr(S.String), title: S.NullOr(S.String), description: S.NullOr(S.String), format: S.optional(S.Union(S.Struct({ display_type: S.optional(S.NullOr(S.Union(S.Literal("SINGLE_LINE"), S.Literal("MULTI_LINE"), S.Literal("EMAIL"), S.Literal("URL")))), max_length: S.optional(S.NullOr(S.Int)), type: S.String }), S.Struct({ display_type: NullOr_default_FIELD_prop, max: S.optional(S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308)))), min: S.optional(S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308)))), type: S.String }), S.Struct({ accepted_mime_types: S.optional(S.NullOr(S.Array(S.String))), max_file_size_bytes: S.optional(S.NullOr(S.Int)), type: S.String }), S.Struct({ display_type: S.optional(S.NullOr(S.Union(S.Literal("DROPDOWN"), S.Literal("RADIO")))), options: S.Array(S.Struct({ id: S.String, remote_id: S.optional(S.NullOr(S.String)), name: S.String })), type: S.String }), S.Struct({ type: S.String }), S.Struct({ type: S.String }), S.Struct({ options: S.Array(S.Struct({ id: S.String, remote_id: S.optional(S.NullOr(S.String)), name: S.String })), type: S.String }), S.Struct({ type: S.String }), S.Struct({ raw_question: S.optional(S.Unknown), type: S.String }), S.Null)), category: S.NullOr(S.Union(S.Literal("EEO"), S.Literal("DEMOGRAPHIC"))), index: S.optional(S.NullOr(S.Int)), required: S.NullOr(S.Boolean), precondition_question_id: S.optional(S.NullOr(S.String.pipe(S.minLength(24), S.maxLength(24), S.pattern(new RegExp("^[1-9A-HJ-NP-Za-km-z]+$"))))), precondition_options: Union_default_null_prop })), job_postings: S.Array(S.Struct({ id: S.String, remote_id: S.NullOr(S.String), title: S.NullOr(S.String), description_html: S.NullOr(S.String), status: S.NullOr(S.Union(S.Literal("ACTIVE"), S.Literal("INACTIVE"), S.Literal("DRAFT"))), visibility: S.NullOr(S.Union(S.Literal("PUBLIC"), S.Literal("INTERNAL"), S.Literal("UNLISTED"))), url: S.NullOr(S.String), remote_data: S.NullOr(S.Record({ key: S.String, value: S.Unknown })) })), hiring_team: S.Array(S.Struct({ id: S.String, remote_id: S.NullOr(S.String), first_name: S.NullOr(S.String), last_name: S.NullOr(S.String), email: S.optional(S.NullOr(S.String.pipe(S.pattern(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$"))))), hiring_team_roles: S.Array(S.Union(S.Literal("RECRUITER"), S.Literal("HIRING_MANAGER"), S.Literal("COORDINATOR"), S.Literal("SOURCER"), S.Literal("INTERVIEWER"))), job_roles: S.Array(S.Struct({ remote_id: S.NullOr(S.String), remote_label: S.NullOr(S.String), scope: S.NullOr(S.Union(S.Literal("SYSTEM"), S.Literal("JOB"))), unified_type: S.NullOr(S.Union(S.Literal("HIRING_MANAGER"), S.Literal("RECRUITER"), S.Literal("COORDINATOR"), S.Literal("SOURCER"), S.Literal("INTERVIEWER"), S.Literal("ADMIN"))) })) })) })) }) });
export type GetAtsJobsPositiveResponse = S.Schema.Type<typeof GetAtsJobsPositiveResponse>;

export const PostAtsJobsJobIdApplicationsParameterJobId = S.String;
export type PostAtsJobsJobIdApplicationsParameterJobId = S.Schema.Type<typeof PostAtsJobsJobIdApplicationsParameterJobId>;

export const PostAtsJobsJobIdApplicationsPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ id: S.String, remote_id: S.NullOr(S.String), outcome: S.NullOr(S.Union(S.Literal("PENDING"), S.Literal("HIRED"), S.Literal("DECLINED"))), rejection_reason_name: S.NullOr(S.String), rejected_at: S.NullOr(S.String), current_stage_id: S.NullOr(S.String), job_id: S.NullOr(S.String), candidate_id: S.NullOr(S.String), screening_question_answers: NullOr_default_value_prop_12, custom_fields: S.NullOr(S.Record({ key: S.String, value: S.Unknown })), integration_fields: S.Array(S.Struct({ id: S.String, key: S.String, type: S.Union(S.Literal("DEFAULT"), S.Literal("CUSTOM")), value: S.optional(S.Null), label: S.NullOr(S.String) })), remote_url: S.NullOr(S.String), changed_at: S.String, remote_deleted_at: S.NullOr(S.String), remote_created_at: S.NullOr(S.String), remote_updated_at: S.NullOr(S.String), remote_data: S.NullOr(S.Record({ key: S.String, value: S.Unknown })), current_stage: S.NullOr(S.Struct({ id: S.String, name: S.NullOr(S.String), remote_id: S.NullOr(S.String), index: S.NullOr(S.Int) })), job: S.NullOr(S.Struct({ id: S.String, name: S.NullOr(S.String), remote_id: S.String })), candidate: S.NullOr(S.Struct({ id: S.String, remote_id: S.String, first_name: S.NullOr(S.String), last_name: S.NullOr(S.String), company: S.NullOr(S.String), title: S.NullOr(S.String), confidential: S.NullOr(S.Boolean), source: S.NullOr(S.String), phone_numbers: NullOr_default_value_prop_10, email_addresses: NullOr_default_value_prop, social_media: NullOr_default_value_prop_11, location: S.optional(S.NullOr(S.Struct({ city: S.optional(S.NullOr(S.String)), country: S.optional(S.NullOr(S.String)), raw: S.optional(S.NullOr(S.String)), state: S.optional(S.NullOr(S.String)), street_1: S.optional(S.NullOr(S.String)), street_2: S.optional(S.NullOr(S.String)), zip_code: S.optional(S.NullOr(S.String)) }))), custom_fields: S.NullOr(S.Record({ key: S.String, value: S.Unknown })), integration_fields: S.Array(S.Struct({ id: S.String, key: S.String, type: S.Union(S.Literal("DEFAULT"), S.Literal("CUSTOM")), value: S.optional(S.Null), label: S.NullOr(S.String) })), remote_url: S.NullOr(S.String), remote_created_at: S.NullOr(S.String), remote_updated_at: S.NullOr(S.String), remote_data: S.NullOr(S.Record({ key: S.String, value: S.Unknown })), changed_at: S.String, remote_deleted_at: S.NullOr(S.String), tags: S.Array(S.Struct({ id: S.String, name: S.NullOr(S.String), remote_id: S.NullOr(S.String) })) })) }), warnings: S.Array(S.Struct({ message: S.String })) });
export type PostAtsJobsJobIdApplicationsPositiveResponse = S.Schema.Type<typeof PostAtsJobsJobIdApplicationsPositiveResponse>;

export const PostAtsJobsJobIdApplicationsRequestBody = S.Struct({ stage_id: S.optional(S.String), candidate: S.Struct({ first_name: S.String, last_name: S.String, email_address: S.String.pipe(S.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)), additional_email_addresses: S.optional(S.Array(S.Struct({ type: S.Union(S.Literal("PERSONAL"), S.Literal("WORK"), S.Literal("OTHER")), email_address: S.String.pipe(S.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) }))), company: S.optional(S.String), title: S.optional(S.String), phone_number: S.optional(S.String), additional_phone_numbers: S.optional(S.Array(S.Struct({ type: S.Union(S.Literal("PERSONAL"), S.Literal("WORK"), S.Literal("OTHER")), phone_number: S.String }))), location: S.optional(S.Struct({ city: S.optional(S.String), country: S.String.pipe(S.pattern(new RegExp("^[A-Z]{2}$"))), state: S.optional(S.String), street_1: S.optional(S.String), zip_code: S.optional(S.String) })), gender: S.optional(S.Union(S.Literal("MALE"), S.Literal("FEMALE"), S.Literal("OTHER"))), availability_date: S.optional(S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), salary_expectations: S.optional(S.Struct({ period: S.Union(S.Literal("MONTH"), S.Literal("YEAR")), amount: S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308)) })), social_links: Array_default_value_prop_13 }), attachments: Union_default_value_prop, source: S.optional(S.Struct({ name: S.optional(S.String), unified_key: S.optional(S.String), id: S.optional(S.String) })), sourced_by: S.optional(S.Struct({ user_id: S.String })), gdpr_consent: S.optional(S.Struct({ expires_at: S.optional(S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), given: S.optional(S.Boolean) })), remote_fields: S.optional(S.Struct({ successfactors: S.optional(S.Struct({ Candidate: S.optional(S.Record({ key: S.String, value: S.Unknown })), JobApplication: S.optional(S.Record({ key: S.String, value: S.Unknown })), copyJobApplicationAttachments: S.optional(S.Boolean), update_existing_candidate: S.optional(S.NullOr(S.Boolean)) })), personio: S.optional(S.Struct({ application: S.optional(S.Record({ key: S.String, value: S.Unknown })) })), talentsoft: S.optional(S.Struct({ applicant: S.optional(S.Record({ key: S.String, value: S.Unknown })), application: S.optional(S.Record({ key: S.String, value: S.Unknown })) })), teamtailor: S.optional(S.Struct({ candidate: S.optional(S.Record({ key: S.String, value: S.Unknown })), application: S.optional(S.Struct({ attributes: S.optional(S.Record({ key: S.String, value: S.Unknown })) })) })), greenhouse: S.optional(S.Struct({ candidate: S.optional(S.Record({ key: S.String, value: S.Unknown })), application: S.optional(S.Record({ key: S.String, value: S.Unknown })), post_headers: S.optional(S.Struct({ "On-Behalf-Of": S.optional(S.NullOr(S.String)) })) })), lever: S.optional(S.Struct({ candidate: S.optional(S.Record({ key: S.String, value: S.Unknown })) })), workable: S.optional(S.Struct({ candidate: S.optional(S.Record({ key: S.String, value: S.Unknown })), on_behalf_of_user_remote_id: S.optional(S.String) })), workday: S.optional(S.Struct({ Candidate_Data: S.optional(S.Struct({ Name_Detail_Data: S.optional(S.Struct({ Middle_Name: S.optional(S.String), Social_Suffix_Reference: S.optional(S.Struct({ Predefined_Name_Component_ID: S.String })) })), Language_Reference: S.optional(S.Struct({ WID: S.String })), Job_Application_Data: S.optional(S.Struct({ Job_Applied_To_Data: S.optional(S.Struct({ Global_Personal_Information_Data: S.optional(S.Struct({ Date_of_Birth: S.optional(S.String) })) })), Resume_Data: S.optional(S.Struct({ Education_Data: S.optional(S.Array(S.Struct({ School_Name: S.optional(S.String), First_Year_Attended: S.optional(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), Last_Year_Attended: S.optional(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), Field_of_Study_Reference: S.optional(S.Struct({ WID: S.String })), Degree_Reference: S.optional(S.Struct({ WID: S.String })), Grade_Average: S.optional(S.String) }))), Skill_Data: S.optional(S.Array(S.Struct({ Skill_Name: S.optional(S.String) }))), Language_Data: S.optional(S.Array(S.Struct({ Language_Reference: S.optional(S.Struct({ WID: S.optional(S.String) })), Language: S.optional(S.Struct({ Native: S.optional(S.Boolean), Language_Ability: S.Array(S.Struct({ Language_Ability_Data: S.optional(S.Struct({ Language_Proficiency_Reference: S.optional(S.Struct({ WID: S.String })), Language_Ability_Type_Reference: S.optional(S.Struct({ WID: S.String })) })) })) })) }))), Experience_Data: S.optional(S.Array(S.Struct({ Company_Name: S.String, Title: S.String, Location: S.optional(S.String), Start_Date: S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))), End_Date: S.optional(S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), Currently_Work_Here: S.optional(S.Boolean), Description: S.optional(S.String) }))) })) })), Contact_Data: S.optional(S.Struct({ Location_Data: S.optional(S.Struct({ Address_Line_1: S.optional(S.String), Address_Line_2: S.optional(S.String), Region_Subdivision_1: S.optional(S.String), Country_Region_Reference: S.optional(S.Struct({ Country_Region_ID: S.String })), Country_City_Reference: S.optional(S.Struct({ WID: S.String })) })) })), Worker_Reference: S.optional(S.Struct({ WID: S.optional(S.String), Employee_ID: S.optional(S.String) })) })), Override_Source_Reference_WID: S.optional(S.String) })), zohorecruit: S.optional(S.Struct({ candidate: S.optional(S.Record({ key: S.String, value: S.Unknown })) })), bullhorn: S.optional(S.Struct({ candidate: S.optional(S.Record({ key: S.String, value: S.Unknown })), job_submission: S.optional(S.Record({ key: S.String, value: S.Unknown })) })), smartrecruiters: S.optional(S.Struct({ candidate_with_questions: S.optional(S.Record({ key: S.String, value: S.Unknown })), candidate_without_questions: S.optional(S.Record({ key: S.String, value: S.Unknown })), candidate: S.optional(S.Record({ key: S.String, value: S.Unknown })), consent_decisions: S.optional(S.Struct({ SINGLE: S.optional(S.Boolean), SMART_RECRUIT: S.optional(S.Boolean), SMART_CRM: S.optional(S.Boolean), SMART_MESSAGE_SMS: S.optional(S.Boolean), SMART_MESSAGE_WHATSAPP: S.optional(S.Boolean) })) })), talentadore: S.optional(S.Struct({ applications: S.optional(S.Record({ key: S.String, value: S.Unknown })) })), guidecom: S.optional(S.Struct({ candidate: S.optional(S.Record({ key: S.String, value: S.Unknown })) })), dvinci: S.optional(S.Struct({ application: S.optional(S.Record({ key: S.String, value: S.Unknown })), candidate: S.optional(S.Record({ key: S.String, value: S.Unknown })) })), hrworks: S.optional(S.Struct({ jobApplication: S.optional(S.Record({ key: S.String, value: S.Unknown })) })), jobylon: S.optional(S.Struct({ application: S.optional(S.Struct({ message: S.optional(S.String) })) })), avature: S.optional(S.Struct({ workflow: S.optional(S.Struct({ step: S.optional(S.Struct({ id: S.Int })) })) })), recruitee: S.optional(S.Struct({ candidate: S.optional(S.Struct({ cover_letter_text: S.optional(S.String) })) })), rexx: S.optional(S.Struct({ candidate: S.optional(S.Record({ key: S.String, value: S.Unknown })) })), umantis: S.optional(S.Struct({ person: S.optional(S.Record({ key: S.String, value: S.Unknown })) })), piloga: S.optional(S.Struct({ candidate: S.optional(S.Struct({ street: S.optional(S.String) })) })), pinpoint: S.optional(S.Struct({ candidate: S.optional(S.Record({ key: S.String, value: S.Unknown })) })), covetorest: S.optional(S.Struct({ candidate: S.optional(S.Struct({ mandant: S.optional(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))) })) })) })), screening_question_answers: S.optional(S.Array(S.Struct({ question_id: S.String, answer: S.Union(S.String, S.Boolean, S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308)), S.Array(S.String), S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))), S.Struct({ name: S.String, content_type: S.optional(S.String.pipe(S.pattern(new RegExp("^[\\w.-]+\\/[\\w.-]+$")))), data_url: S.optional(S.String), data: S.optional(S.String) })) }))) });
export type PostAtsJobsJobIdApplicationsRequestBody = S.Schema.Type<typeof PostAtsJobsJobIdApplicationsRequestBody>;

export const GetAtsUsersParameterCursor = S.String;
export type GetAtsUsersParameterCursor = S.Schema.Type<typeof GetAtsUsersParameterCursor>;

export const GetAtsUsersParameterPageSize = Schema_default_100_4;
export type GetAtsUsersParameterPageSize = S.Schema.Type<typeof GetAtsUsersParameterPageSize>;

export const GetAtsUsersParameterUpdatedAfter = S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetAtsUsersParameterUpdatedAfter = S.Schema.Type<typeof GetAtsUsersParameterUpdatedAfter>;

export const GetAtsUsersParameterIncludeDeleted = Union_default_false;
export type GetAtsUsersParameterIncludeDeleted = S.Schema.Type<typeof GetAtsUsersParameterIncludeDeleted>;

export const GetAtsUsersParameterIgnoreUnsupportedFilters = Union_default_false;
export type GetAtsUsersParameterIgnoreUnsupportedFilters = S.Schema.Type<typeof GetAtsUsersParameterIgnoreUnsupportedFilters>;

export const GetAtsUsersParameterIds = S.String;
export type GetAtsUsersParameterIds = S.Schema.Type<typeof GetAtsUsersParameterIds>;

export const GetAtsUsersParameterRemoteIds = S.String;
export type GetAtsUsersParameterRemoteIds = S.Schema.Type<typeof GetAtsUsersParameterRemoteIds>;

export const GetAtsUsersParameterEmails = S.String;
export type GetAtsUsersParameterEmails = S.Schema.Type<typeof GetAtsUsersParameterEmails>;

export const GetAtsUsersPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ next: S.NullOr(S.String), results: S.Array(S.Struct({ id: S.String, remote_id: S.NullOr(S.String), first_name: S.NullOr(S.String), last_name: S.NullOr(S.String), email: S.optional(S.NullOr(S.String.pipe(S.pattern(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$"))))), status: S.NullOr(S.Union(S.Literal("ACTIVE"), S.Literal("INACTIVE"))), remote_data: S.NullOr(S.Record({ key: S.String, value: S.Unknown })), changed_at: S.String, remote_deleted_at: S.NullOr(S.String), system_roles: S.Array(S.Struct({ remote_id: S.NullOr(S.String), remote_label: S.NullOr(S.String), scope: S.NullOr(S.Union(S.Literal("SYSTEM"), S.Literal("JOB"))), unified_type: S.NullOr(S.Union(S.Literal("HIRING_MANAGER"), S.Literal("RECRUITER"), S.Literal("COORDINATOR"), S.Literal("SOURCER"), S.Literal("INTERVIEWER"), S.Literal("ADMIN"))) })) })) }) });
export type GetAtsUsersPositiveResponse = S.Schema.Type<typeof GetAtsUsersPositiveResponse>;

export const GetAtsRolesParameterCursor = S.String;
export type GetAtsRolesParameterCursor = S.Schema.Type<typeof GetAtsRolesParameterCursor>;

export const GetAtsRolesParameterPageSize = Schema_default_100_4;
export type GetAtsRolesParameterPageSize = S.Schema.Type<typeof GetAtsRolesParameterPageSize>;

export const GetAtsRolesParameterUpdatedAfter = S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetAtsRolesParameterUpdatedAfter = S.Schema.Type<typeof GetAtsRolesParameterUpdatedAfter>;

export const GetAtsRolesParameterIncludeDeleted = Union_default_false;
export type GetAtsRolesParameterIncludeDeleted = S.Schema.Type<typeof GetAtsRolesParameterIncludeDeleted>;

export const GetAtsRolesParameterIgnoreUnsupportedFilters = Union_default_false;
export type GetAtsRolesParameterIgnoreUnsupportedFilters = S.Schema.Type<typeof GetAtsRolesParameterIgnoreUnsupportedFilters>;

export const GetAtsRolesParameterIds = S.String;
export type GetAtsRolesParameterIds = S.Schema.Type<typeof GetAtsRolesParameterIds>;

export const GetAtsRolesParameterRemoteIds = S.String;
export type GetAtsRolesParameterRemoteIds = S.Schema.Type<typeof GetAtsRolesParameterRemoteIds>;

export const GetAtsRolesParameterScopes = S.String;
export type GetAtsRolesParameterScopes = S.Schema.Type<typeof GetAtsRolesParameterScopes>;

export const GetAtsRolesPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ next: S.NullOr(S.String), results: S.Array(S.Struct({ id: S.String, remote_id: S.NullOr(S.String), remote_label: S.NullOr(S.String), scope: S.NullOr(S.Union(S.Literal("SYSTEM"), S.Literal("JOB"))), unified_type: S.NullOr(S.Union(S.Literal("HIRING_MANAGER"), S.Literal("RECRUITER"), S.Literal("COORDINATOR"), S.Literal("SOURCER"), S.Literal("INTERVIEWER"), S.Literal("ADMIN"))), remote_data: S.NullOr(S.Record({ key: S.String, value: S.Unknown })), changed_at: S.String, remote_deleted_at: S.NullOr(S.String) })) }) });
export type GetAtsRolesPositiveResponse = S.Schema.Type<typeof GetAtsRolesPositiveResponse>;

export const GetAtsOffersParameterCursor = S.String;
export type GetAtsOffersParameterCursor = S.Schema.Type<typeof GetAtsOffersParameterCursor>;

export const GetAtsOffersParameterPageSize = Schema_default_100_4;
export type GetAtsOffersParameterPageSize = S.Schema.Type<typeof GetAtsOffersParameterPageSize>;

export const GetAtsOffersParameterUpdatedAfter = S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetAtsOffersParameterUpdatedAfter = S.Schema.Type<typeof GetAtsOffersParameterUpdatedAfter>;

export const GetAtsOffersParameterIncludeDeleted = Union_default_false;
export type GetAtsOffersParameterIncludeDeleted = S.Schema.Type<typeof GetAtsOffersParameterIncludeDeleted>;

export const GetAtsOffersParameterIgnoreUnsupportedFilters = Union_default_false;
export type GetAtsOffersParameterIgnoreUnsupportedFilters = S.Schema.Type<typeof GetAtsOffersParameterIgnoreUnsupportedFilters>;

export const GetAtsOffersParameterIds = S.String;
export type GetAtsOffersParameterIds = S.Schema.Type<typeof GetAtsOffersParameterIds>;

export const GetAtsOffersParameterRemoteIds = S.String;
export type GetAtsOffersParameterRemoteIds = S.Schema.Type<typeof GetAtsOffersParameterRemoteIds>;

export const GetAtsOffersPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ next: S.NullOr(S.String), results: S.Array(S.Struct({ id: S.String, remote_id: S.NullOr(S.String), status: S.NullOr(S.Union(S.Literal("ACCEPTED"), S.Literal("DECLINED"), S.Literal("SENT"), S.Literal("APPROVED"), S.Literal("DRAFT"), S.Literal("ABANDONED"))), employment_start_date: S.NullOr(S.String), application_id: S.NullOr(S.String), custom_fields: S.NullOr(S.Record({ key: S.String, value: S.Unknown })), integration_fields: S.Array(S.Struct({ id: S.String, key: S.String, type: S.Union(S.Literal("DEFAULT"), S.Literal("CUSTOM")), value: S.optional(S.Null), label: S.NullOr(S.String) })), changed_at: S.String, remote_deleted_at: S.NullOr(S.String), remote_created_at: S.NullOr(S.String), remote_updated_at: S.NullOr(S.String), remote_data: S.NullOr(S.Record({ key: S.String, value: S.Unknown })), application: S.NullOr(S.Struct({ candidate: S.NullOr(S.Struct({ id: S.String, remote_id: S.String, first_name: S.NullOr(S.String), last_name: S.NullOr(S.String), email_addresses: NullOr_default_value_prop })), job: S.NullOr(S.Struct({ id: S.String, remote_id: S.String, name: S.NullOr(S.String) })) })) })) }) });
export type GetAtsOffersPositiveResponse = S.Schema.Type<typeof GetAtsOffersPositiveResponse>;

export const GetAtsRejectionReasonsParameterCursor = S.String;
export type GetAtsRejectionReasonsParameterCursor = S.Schema.Type<typeof GetAtsRejectionReasonsParameterCursor>;

export const GetAtsRejectionReasonsParameterPageSize = Schema_default_100_4;
export type GetAtsRejectionReasonsParameterPageSize = S.Schema.Type<typeof GetAtsRejectionReasonsParameterPageSize>;

export const GetAtsRejectionReasonsParameterUpdatedAfter = S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetAtsRejectionReasonsParameterUpdatedAfter = S.Schema.Type<typeof GetAtsRejectionReasonsParameterUpdatedAfter>;

export const GetAtsRejectionReasonsParameterIncludeDeleted = Union_default_false;
export type GetAtsRejectionReasonsParameterIncludeDeleted = S.Schema.Type<typeof GetAtsRejectionReasonsParameterIncludeDeleted>;

export const GetAtsRejectionReasonsParameterIgnoreUnsupportedFilters = Union_default_false;
export type GetAtsRejectionReasonsParameterIgnoreUnsupportedFilters = S.Schema.Type<typeof GetAtsRejectionReasonsParameterIgnoreUnsupportedFilters>;

export const GetAtsRejectionReasonsParameterIds = S.String;
export type GetAtsRejectionReasonsParameterIds = S.Schema.Type<typeof GetAtsRejectionReasonsParameterIds>;

export const GetAtsRejectionReasonsParameterRemoteIds = S.String;
export type GetAtsRejectionReasonsParameterRemoteIds = S.Schema.Type<typeof GetAtsRejectionReasonsParameterRemoteIds>;

export const GetAtsRejectionReasonsPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ next: S.NullOr(S.String), results: S.Array(S.Struct({ id: S.String, remote_id: S.String, name: S.NullOr(S.String), changed_at: S.String, remote_deleted_at: S.NullOr(S.String), remote_data: S.NullOr(S.Record({ key: S.String, value: S.Unknown })) })) }) });
export type GetAtsRejectionReasonsPositiveResponse = S.Schema.Type<typeof GetAtsRejectionReasonsPositiveResponse>;

export const GetAtsInterviewsParameterCursor = S.String;
export type GetAtsInterviewsParameterCursor = S.Schema.Type<typeof GetAtsInterviewsParameterCursor>;

export const GetAtsInterviewsParameterPageSize = Schema_default_100_4;
export type GetAtsInterviewsParameterPageSize = S.Schema.Type<typeof GetAtsInterviewsParameterPageSize>;

export const GetAtsInterviewsParameterUpdatedAfter = S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetAtsInterviewsParameterUpdatedAfter = S.Schema.Type<typeof GetAtsInterviewsParameterUpdatedAfter>;

export const GetAtsInterviewsParameterIncludeDeleted = Union_default_false;
export type GetAtsInterviewsParameterIncludeDeleted = S.Schema.Type<typeof GetAtsInterviewsParameterIncludeDeleted>;

export const GetAtsInterviewsParameterIgnoreUnsupportedFilters = Union_default_false;
export type GetAtsInterviewsParameterIgnoreUnsupportedFilters = S.Schema.Type<typeof GetAtsInterviewsParameterIgnoreUnsupportedFilters>;

export const GetAtsInterviewsParameterIds = S.String;
export type GetAtsInterviewsParameterIds = S.Schema.Type<typeof GetAtsInterviewsParameterIds>;

export const GetAtsInterviewsParameterRemoteIds = S.String;
export type GetAtsInterviewsParameterRemoteIds = S.Schema.Type<typeof GetAtsInterviewsParameterRemoteIds>;

export const GetAtsInterviewsParameterJobIds = S.String;
export type GetAtsInterviewsParameterJobIds = S.Schema.Type<typeof GetAtsInterviewsParameterJobIds>;

export const GetAtsInterviewsPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ next: S.NullOr(S.String), results: S.Array(S.Struct({ id: S.String, remote_id: S.NullOr(S.String), title: S.NullOr(S.String), starting_at: S.NullOr(S.String), ending_at: S.NullOr(S.String), location: S.optional(S.NullOr(S.Struct({ city: S.optional(S.NullOr(S.String)), country: S.optional(S.NullOr(S.String)), raw: S.optional(S.NullOr(S.String)), state: S.optional(S.NullOr(S.String)), street_1: S.optional(S.NullOr(S.String)), street_2: S.optional(S.NullOr(S.String)), zip_code: S.optional(S.NullOr(S.String)) }))), video_conferencing_url: S.NullOr(S.String), application_id: S.NullOr(S.String), stage_id: S.NullOr(S.String), canceled: S.NullOr(S.Boolean), remote_created_at: S.NullOr(S.String), remote_updated_at: S.NullOr(S.String), remote_data: S.NullOr(S.Record({ key: S.String, value: S.Unknown })), changed_at: S.String, remote_deleted_at: S.NullOr(S.String), users: S.Array(S.Struct({ id: S.String, remote_id: S.NullOr(S.String), first_name: S.NullOr(S.String), last_name: S.NullOr(S.String), email: S.optional(S.NullOr(S.String.pipe(S.pattern(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$"))))) })), application: S.NullOr(S.Struct({ id: S.String, remote_id: S.NullOr(S.String), outcome: S.NullOr(S.Union(S.Literal("PENDING"), S.Literal("HIRED"), S.Literal("DECLINED"))), rejection_reason_name: S.NullOr(S.String), candidate: S.NullOr(S.Struct({ id: S.String, remote_id: S.String, first_name: S.NullOr(S.String), last_name: S.NullOr(S.String), email_addresses: NullOr_default_value_prop })), job: S.NullOr(S.Struct({ id: S.String, remote_id: S.String, name: S.NullOr(S.String) })) })) })) }) });
export type GetAtsInterviewsPositiveResponse = S.Schema.Type<typeof GetAtsInterviewsPositiveResponse>;

export const GetAtsActionsAtsCreateCandidatePositiveResponse = S.Struct({ status: S.String, data: S.Struct({ attachment_restrictions: S.optional(S.NullOr(S.Struct({ total_size_bytes: S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), types: S.Struct({ CV: S.Union(S.Struct({ is_supported: S.Boolean, min_amount: S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), max_amount: S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), max_file_size_bytes: S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), accepted_mime_types: S.NullOr(S.Array(S.String)) }), S.Struct({ is_supported: S.Boolean })), COVER_LETTER: S.Union(S.Struct({ is_supported: S.Boolean, min_amount: S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), max_amount: S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), max_file_size_bytes: S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), accepted_mime_types: S.NullOr(S.Array(S.String)) }), S.Struct({ is_supported: S.Boolean })), OTHER: S.Union(S.Struct({ is_supported: S.Boolean, min_amount: S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), max_amount: S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), max_file_size_bytes: S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), accepted_mime_types: S.NullOr(S.Array(S.String)) }), S.Struct({ is_supported: S.Boolean })) }) }))) }) });
export type GetAtsActionsAtsCreateCandidatePositiveResponse = S.Schema.Type<typeof GetAtsActionsAtsCreateCandidatePositiveResponse>;

export const GetAtsActionsAtsCreateApplicationPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ attachment_restrictions: S.optional(S.NullOr(S.Struct({ total_size_bytes: S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), types: S.Struct({ CV: S.Union(S.Struct({ is_supported: S.Boolean, min_amount: S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), max_amount: S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), max_file_size_bytes: S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), accepted_mime_types: S.NullOr(S.Array(S.String)) }), S.Struct({ is_supported: S.Boolean })), COVER_LETTER: S.Union(S.Struct({ is_supported: S.Boolean, min_amount: S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), max_amount: S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), max_file_size_bytes: S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), accepted_mime_types: S.NullOr(S.Array(S.String)) }), S.Struct({ is_supported: S.Boolean })), OTHER: S.Union(S.Struct({ is_supported: S.Boolean, min_amount: S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), max_amount: S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), max_file_size_bytes: S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), accepted_mime_types: S.NullOr(S.Array(S.String)) }), S.Struct({ is_supported: S.Boolean })) }) }))) }) });
export type GetAtsActionsAtsCreateApplicationPositiveResponse = S.Schema.Type<typeof GetAtsActionsAtsCreateApplicationPositiveResponse>;

export const GetAtsActionsAtsAddApplicationAttachmentPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ attachment_restrictions: S.optional(S.NullOr(S.Struct({ types: S.Struct({ CV: S.Union(S.Struct({ is_supported: S.Boolean, max_file_size_bytes: S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), accepted_mime_types: S.NullOr(S.Array(S.String)) }), S.Struct({ is_supported: S.Boolean })), COVER_LETTER: S.Union(S.Struct({ is_supported: S.Boolean, max_file_size_bytes: S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), accepted_mime_types: S.NullOr(S.Array(S.String)) }), S.Struct({ is_supported: S.Boolean })), OTHER: S.Union(S.Struct({ is_supported: S.Boolean, max_file_size_bytes: S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), accepted_mime_types: S.NullOr(S.Array(S.String)) }), S.Struct({ is_supported: S.Boolean })) }) }))) }) });
export type GetAtsActionsAtsAddApplicationAttachmentPositiveResponse = S.Schema.Type<typeof GetAtsActionsAtsAddApplicationAttachmentPositiveResponse>;

export const GetAtsActionsAtsAddCandidateAttachmentPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ attachment_restrictions: S.optional(S.NullOr(S.Struct({ types: S.Struct({ CV: S.Union(S.Struct({ is_supported: S.Boolean, max_file_size_bytes: S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), accepted_mime_types: S.NullOr(S.Array(S.String)) }), S.Struct({ is_supported: S.Boolean })), COVER_LETTER: S.Union(S.Struct({ is_supported: S.Boolean, max_file_size_bytes: S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), accepted_mime_types: S.NullOr(S.Array(S.String)) }), S.Struct({ is_supported: S.Boolean })), OTHER: S.Union(S.Struct({ is_supported: S.Boolean, max_file_size_bytes: S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), accepted_mime_types: S.NullOr(S.Array(S.String)) }), S.Struct({ is_supported: S.Boolean })) }) }))) }) });
export type GetAtsActionsAtsAddCandidateAttachmentPositiveResponse = S.Schema.Type<typeof GetAtsActionsAtsAddCandidateAttachmentPositiveResponse>;

export const PostAtsImportTrackedApplicationPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ id: S.String.pipe(S.minLength(24), S.maxLength(24), S.pattern(new RegExp("^[1-9A-HJ-NP-Za-km-z]+$"))), tracked_at: S.NullOr(S.String), imported_id: S.Struct({ erecruiter: S.optional(S.Union(S.Struct({ id_type: S.String, application_remote_id: S.String, job_remote_id: S.String }), S.Struct({ id_type: S.String, candidate_remote_id: S.String, application_remote_id: S.String }))), successfactors: S.optional(S.Struct({ id_type: S.String, application_remote_id: S.String })), recruitee: S.optional(S.Struct({ id_type: S.String, placement_id: S.String })), greenhouse: S.optional(S.Struct({ id_type: S.String, application_id: S.String })), onlyfy: S.optional(S.Struct({ id_type: S.String, application_id: S.String })), smartrecruiters: S.optional(S.Struct({ id_type: S.String, candidate_remote_id: S.String, job_remote_id: S.String })) }) }), warnings: S.Array(S.Struct({ message: S.String })) });
export type PostAtsImportTrackedApplicationPositiveResponse = S.Schema.Type<typeof PostAtsImportTrackedApplicationPositiveResponse>;

export const PostAtsImportTrackedApplicationRequestBody = S.Struct({ erecruiter: S.optional(S.Union(S.Struct({ id_type: S.String, application_remote_id: S.String, job_remote_id: S.String }), S.Struct({ id_type: S.String, candidate_remote_id: S.String, application_remote_id: S.String }))), successfactors: S.optional(S.Struct({ id_type: S.String, application_remote_id: S.String })), recruitee: S.optional(S.Struct({ id_type: S.String, placement_id: S.String })), greenhouse: S.optional(S.Struct({ id_type: S.String, application_id: S.String })), onlyfy: S.optional(S.Struct({ id_type: S.String, application_id: S.String })), smartrecruiters: S.optional(S.Struct({ id_type: S.String, candidate_remote_id: S.String, job_remote_id: S.String })), tracked_at: S.NullOr(S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))) });
export type PostAtsImportTrackedApplicationRequestBody = S.Schema.Type<typeof PostAtsImportTrackedApplicationRequestBody>;

export const PostAtsCustomAvionteSyncedJobsPositiveResponse = S.Struct({ status: S.String, data: S.Record({ key: S.String, value: S.Unknown }) });
export type PostAtsCustomAvionteSyncedJobsPositiveResponse = S.Schema.Type<typeof PostAtsCustomAvionteSyncedJobsPositiveResponse>;

export const PostAtsCustomAvionteSyncedJobsRequestBody = S.Struct({ job_remote_id: S.String.pipe(S.pattern(new RegExp("^\\d+$"))) });
export type PostAtsCustomAvionteSyncedJobsRequestBody = S.Schema.Type<typeof PostAtsCustomAvionteSyncedJobsRequestBody>;

export const DeleteAtsCustomAvionteSyncedJobsJobRemoteIdParameterJobRemoteId = S.String;
export type DeleteAtsCustomAvionteSyncedJobsJobRemoteIdParameterJobRemoteId = S.Schema.Type<typeof DeleteAtsCustomAvionteSyncedJobsJobRemoteIdParameterJobRemoteId>;

export const DeleteAtsCustomAvionteSyncedJobsJobRemoteIdPositiveResponse = S.Struct({ status: S.String, data: S.Record({ key: S.String, value: S.Unknown }) });
export type DeleteAtsCustomAvionteSyncedJobsJobRemoteIdPositiveResponse = S.Schema.Type<typeof DeleteAtsCustomAvionteSyncedJobsJobRemoteIdPositiveResponse>;

export const DeleteAtsCustomAvionteSyncedJobsJobRemoteIdRequestBody = S.Struct({  });
export type DeleteAtsCustomAvionteSyncedJobsJobRemoteIdRequestBody = S.Schema.Type<typeof DeleteAtsCustomAvionteSyncedJobsJobRemoteIdRequestBody>;

export const GetAssessmentPackagesPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ packages: S.Array(S.Struct({ id: S.String, name: S.String, description: S.String, updated_at: S.NullOr(S.String), type: S.NullOr(S.Union(S.Literal("BEHAVIORAL"), S.Literal("VIDEO_INTERVIEW"), S.Literal("SKILLS_TEST"), S.Literal("BACKGROUND_CHECK"), S.Literal("REFERENCE_CHECK"))) })) }) });
export type GetAssessmentPackagesPositiveResponse = S.Schema.Type<typeof GetAssessmentPackagesPositiveResponse>;

export const PutAssessmentPackagesPositiveResponse = S.Struct({ status: S.String, data: S.Record({ key: S.String, value: S.Unknown }), warnings: S.Array(S.Struct({ message: S.String })) });
export type PutAssessmentPackagesPositiveResponse = S.Schema.Type<typeof PutAssessmentPackagesPositiveResponse>;

export const PutAssessmentPackagesRequestBody = S.Struct({ packages: S.Array(S.Struct({ id: S.String, type: S.Union(S.Literal("BEHAVIORAL"), S.Literal("VIDEO_INTERVIEW"), S.Literal("SKILLS_TEST"), S.Literal("BACKGROUND_CHECK"), S.Literal("REFERENCE_CHECK")), name: S.String, description: S.String })) });
export type PutAssessmentPackagesRequestBody = S.Schema.Type<typeof PutAssessmentPackagesRequestBody>;

export const GetAssessmentOrdersParameterCursor = S.String;
export type GetAssessmentOrdersParameterCursor = S.Schema.Type<typeof GetAssessmentOrdersParameterCursor>;

export const GetAssessmentOrdersParameterPageSize = Schema_default_100_4;
export type GetAssessmentOrdersParameterPageSize = S.Schema.Type<typeof GetAssessmentOrdersParameterPageSize>;

export const GetAssessmentOrdersParameterIds = S.String;
export type GetAssessmentOrdersParameterIds = S.Schema.Type<typeof GetAssessmentOrdersParameterIds>;

export const GetAssessmentOrdersParameterStatuses = S.String;
export type GetAssessmentOrdersParameterStatuses = S.Schema.Type<typeof GetAssessmentOrdersParameterStatuses>;

export const GetAssessmentOrdersParameterCreatedAfter = S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetAssessmentOrdersParameterCreatedAfter = S.Schema.Type<typeof GetAssessmentOrdersParameterCreatedAfter>;

export const GetAssessmentOrdersPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ next: S.NullOr(S.String), results: S.Array(S.Struct({ id: S.String, package_id: S.String, status: S.Union(S.Literal("OPEN"), S.Literal("COMPLETED"), S.Literal("CANCELLED"), S.Literal("REJECTED")), candidate: S.Struct({ remote_id: S.NullOr(S.String), email: S.String.pipe(S.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)), first_name: S.NullOr(S.String), last_name: S.NullOr(S.String), phone: S.NullOr(S.String) }), application: S.Struct({ remote_id: S.NullOr(S.String) }), job: S.Struct({ remote_id: S.NullOr(S.String), name: S.NullOr(S.String), job_code: S.NullOr(S.String), description: S.NullOr(S.String), location: S.NullOr(S.Struct({ street_1: S.optional(S.NullOr(S.String)), street_2: S.optional(S.NullOr(S.String)), city: S.optional(S.NullOr(S.String)), state: S.optional(S.NullOr(S.String)), zip_code: S.optional(S.NullOr(S.String)), country: S.optional(S.NullOr(S.String)), raw: S.optional(S.NullOr(S.String)) })), hiring_team: S.Array(S.Struct({ remote_id: S.NullOr(S.String), email: S.NullOr(S.String), first_name: S.NullOr(S.String), last_name: S.NullOr(S.String), hiring_team_roles: S.Array(S.Union(S.Literal("RECRUITER"), S.Literal("HIRING_MANAGER"))) })) }) })) }) });
export type GetAssessmentOrdersPositiveResponse = S.Schema.Type<typeof GetAssessmentOrdersPositiveResponse>;

export const GetAssessmentOrdersOpenParameterCursor = S.String;
export type GetAssessmentOrdersOpenParameterCursor = S.Schema.Type<typeof GetAssessmentOrdersOpenParameterCursor>;

export const GetAssessmentOrdersOpenParameterPageSize = Schema_default_100_4;
export type GetAssessmentOrdersOpenParameterPageSize = S.Schema.Type<typeof GetAssessmentOrdersOpenParameterPageSize>;

export const GetAssessmentOrdersOpenPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ next: S.NullOr(S.String), results: S.Array(S.Struct({ id: S.String, package_id: S.String, candidate: S.Struct({ remote_id: S.NullOr(S.String), email: S.String.pipe(S.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)), first_name: S.NullOr(S.String), last_name: S.NullOr(S.String), phone: S.NullOr(S.String) }), application: S.Struct({ remote_id: S.NullOr(S.String) }), job: S.Struct({ remote_id: S.NullOr(S.String), name: S.NullOr(S.String), job_code: S.NullOr(S.String), description: S.NullOr(S.String), location: S.NullOr(S.Struct({ street_1: S.optional(S.NullOr(S.String)), street_2: S.optional(S.NullOr(S.String)), city: S.optional(S.NullOr(S.String)), state: S.optional(S.NullOr(S.String)), zip_code: S.optional(S.NullOr(S.String)), country: S.optional(S.NullOr(S.String)), raw: S.optional(S.NullOr(S.String)) })), hiring_team: S.Array(S.Struct({ remote_id: S.NullOr(S.String), email: S.NullOr(S.String), first_name: S.NullOr(S.String), last_name: S.NullOr(S.String), hiring_team_roles: S.Array(S.Union(S.Literal("RECRUITER"), S.Literal("HIRING_MANAGER"))) })) }) })) }) });
export type GetAssessmentOrdersOpenPositiveResponse = S.Schema.Type<typeof GetAssessmentOrdersOpenPositiveResponse>;

export const PutAssessmentOrdersAssessmentOrderIdResultParameterAssessmentOrderId = S.String;
export type PutAssessmentOrdersAssessmentOrderIdResultParameterAssessmentOrderId = S.Schema.Type<typeof PutAssessmentOrdersAssessmentOrderIdResultParameterAssessmentOrderId>;

export const PutAssessmentOrdersAssessmentOrderIdResultPositiveResponse = S.Struct({ status: S.String, data: S.Record({ key: S.String, value: S.Unknown }), warnings: S.Array(S.Struct({ message: S.String })) });
export type PutAssessmentOrdersAssessmentOrderIdResultPositiveResponse = S.Schema.Type<typeof PutAssessmentOrdersAssessmentOrderIdResultPositiveResponse>;

export const PutAssessmentOrdersAssessmentOrderIdResultRequestBody = S.Struct({ status: S.Union(S.Literal("COMPLETED"), S.Literal("CANCELLED"), S.Literal("OPEN")), result_url: S.String, completed_at: S.optional(S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), score: S.optional(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), max_score: S.optional(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), attributes: Union_default_value_prop_17, attachments: Array_default_value_prop_18, remote_fields: S.optional(S.Struct({ smartrecruiters: S.optional(S.Struct({ scoreLabel: S.optional(S.String) })), recruitee: S.optional(S.Struct({ subtitle: S.optional(S.String) })) })) });
export type PutAssessmentOrdersAssessmentOrderIdResultRequestBody = S.Schema.Type<typeof PutAssessmentOrdersAssessmentOrderIdResultRequestBody>;

export const GetLmsUsersParameterCursor = S.String;
export type GetLmsUsersParameterCursor = S.Schema.Type<typeof GetLmsUsersParameterCursor>;

export const GetLmsUsersParameterPageSize = Schema_default_100_4;
export type GetLmsUsersParameterPageSize = S.Schema.Type<typeof GetLmsUsersParameterPageSize>;

export const GetLmsUsersParameterUpdatedAfter = S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetLmsUsersParameterUpdatedAfter = S.Schema.Type<typeof GetLmsUsersParameterUpdatedAfter>;

export const GetLmsUsersParameterIncludeDeleted = Union_default_false;
export type GetLmsUsersParameterIncludeDeleted = S.Schema.Type<typeof GetLmsUsersParameterIncludeDeleted>;

export const GetLmsUsersParameterIgnoreUnsupportedFilters = Union_default_false;
export type GetLmsUsersParameterIgnoreUnsupportedFilters = S.Schema.Type<typeof GetLmsUsersParameterIgnoreUnsupportedFilters>;

export const GetLmsUsersParameterIds = S.String;
export type GetLmsUsersParameterIds = S.Schema.Type<typeof GetLmsUsersParameterIds>;

export const GetLmsUsersParameterRemoteIds = S.String;
export type GetLmsUsersParameterRemoteIds = S.Schema.Type<typeof GetLmsUsersParameterRemoteIds>;

export const GetLmsUsersParameterWorkEmails = S.String;
export type GetLmsUsersParameterWorkEmails = S.Schema.Type<typeof GetLmsUsersParameterWorkEmails>;

export const GetLmsUsersPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ next: S.NullOr(S.String), results: S.Array(S.Struct({ id: S.String, remote_id: S.String, first_name: S.NullOr(S.String), last_name: S.NullOr(S.String), work_email: S.NullOr(S.String), status: S.NullOr(S.Union(S.Literal("ACTIVE"), S.Literal("INACTIVE"))), remote_created_at: S.NullOr(S.String), remote_deleted_at: S.NullOr(S.String), changed_at: S.String, remote_data: S.NullOr(S.Record({ key: S.String, value: S.Unknown })), custom_fields: S.NullOr(S.Record({ key: S.String, value: S.Unknown })), integration_fields: S.Array(S.Struct({ id: S.String, key: S.String, type: S.Union(S.Literal("DEFAULT"), S.Literal("CUSTOM")), value: S.optional(S.Null), label: S.NullOr(S.String) })) })) }) });
export type GetLmsUsersPositiveResponse = S.Schema.Type<typeof GetLmsUsersPositiveResponse>;

export const GetLmsCourseProgressionsParameterCursor = S.String;
export type GetLmsCourseProgressionsParameterCursor = S.Schema.Type<typeof GetLmsCourseProgressionsParameterCursor>;

export const GetLmsCourseProgressionsParameterPageSize = Schema_default_100_4;
export type GetLmsCourseProgressionsParameterPageSize = S.Schema.Type<typeof GetLmsCourseProgressionsParameterPageSize>;

export const GetLmsCourseProgressionsParameterUpdatedAfter = S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetLmsCourseProgressionsParameterUpdatedAfter = S.Schema.Type<typeof GetLmsCourseProgressionsParameterUpdatedAfter>;

export const GetLmsCourseProgressionsParameterIncludeDeleted = Union_default_false;
export type GetLmsCourseProgressionsParameterIncludeDeleted = S.Schema.Type<typeof GetLmsCourseProgressionsParameterIncludeDeleted>;

export const GetLmsCourseProgressionsParameterIgnoreUnsupportedFilters = Union_default_false;
export type GetLmsCourseProgressionsParameterIgnoreUnsupportedFilters = S.Schema.Type<typeof GetLmsCourseProgressionsParameterIgnoreUnsupportedFilters>;

export const GetLmsCourseProgressionsParameterIds = S.String;
export type GetLmsCourseProgressionsParameterIds = S.Schema.Type<typeof GetLmsCourseProgressionsParameterIds>;

export const GetLmsCourseProgressionsParameterRemoteIds = S.String;
export type GetLmsCourseProgressionsParameterRemoteIds = S.Schema.Type<typeof GetLmsCourseProgressionsParameterRemoteIds>;

export const GetLmsCourseProgressionsParameterUserIds = S.String;
export type GetLmsCourseProgressionsParameterUserIds = S.Schema.Type<typeof GetLmsCourseProgressionsParameterUserIds>;

export const GetLmsCourseProgressionsParameterCourseIds = S.String;
export type GetLmsCourseProgressionsParameterCourseIds = S.Schema.Type<typeof GetLmsCourseProgressionsParameterCourseIds>;

export const GetLmsCourseProgressionsPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ next: S.NullOr(S.String), results: S.Array(S.Struct({ id: S.String, remote_id: S.String, user_id: S.String, course_revision_id: S.String, status: S.NullOr(S.Union(S.Literal("ENROLLED"), S.Literal("IN_PROGRESS"), S.Literal("COMPLETED"), S.Literal("DROPPED"))), enrolled_at: S.NullOr(S.String), completed_at: S.NullOr(S.String), changed_at: S.String, remote_deleted_at: S.NullOr(S.String), remote_data: S.NullOr(S.Record({ key: S.String, value: S.Unknown })), user: S.Struct({ id: S.String, remote_id: S.String, first_name: S.NullOr(S.String), last_name: S.NullOr(S.String), work_email: S.NullOr(S.String) }), course_revision: S.Struct({ id: S.String, remote_id: S.String, title: S.NullOr(S.String), course: S.NullOr(S.Struct({ id: S.String, remote_id: S.String })) }) })) }) });
export type GetLmsCourseProgressionsPositiveResponse = S.Schema.Type<typeof GetLmsCourseProgressionsPositiveResponse>;

export const PostLmsCourseProgressionsPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ id: S.String, remote_id: S.String, user_id: S.String, course_revision_id: S.String, status: S.NullOr(S.Union(S.Literal("ENROLLED"), S.Literal("IN_PROGRESS"), S.Literal("COMPLETED"), S.Literal("DROPPED"))), enrolled_at: S.NullOr(S.String), completed_at: S.NullOr(S.String), changed_at: S.String, remote_deleted_at: S.NullOr(S.String), remote_data: S.NullOr(S.Record({ key: S.String, value: S.Unknown })), user: S.Struct({ id: S.String, remote_id: S.String, first_name: S.NullOr(S.String), last_name: S.NullOr(S.String), work_email: S.NullOr(S.String) }), course_revision: S.Struct({ id: S.String, remote_id: S.String, title: S.NullOr(S.String), course: S.NullOr(S.Struct({ id: S.String, remote_id: S.String })) }) }), warnings: S.Array(S.Struct({ message: S.String })) });
export type PostLmsCourseProgressionsPositiveResponse = S.Schema.Type<typeof PostLmsCourseProgressionsPositiveResponse>;

export const PostLmsCourseProgressionsRequestBody = S.Struct({ user_id: S.String, course_revision_id: S.String });
export type PostLmsCourseProgressionsRequestBody = S.Schema.Type<typeof PostLmsCourseProgressionsRequestBody>;

export const PostLmsCourseProgressionsCourseProgressionIdCompleteParameterCourseProgressionId = S.String;
export type PostLmsCourseProgressionsCourseProgressionIdCompleteParameterCourseProgressionId = S.Schema.Type<typeof PostLmsCourseProgressionsCourseProgressionIdCompleteParameterCourseProgressionId>;

export const PostLmsCourseProgressionsCourseProgressionIdCompletePositiveResponse = S.Struct({ status: S.String, data: S.Struct({ id: S.String, remote_id: S.String, user_id: S.String, course_revision_id: S.String, status: S.NullOr(S.Union(S.Literal("ENROLLED"), S.Literal("IN_PROGRESS"), S.Literal("COMPLETED"), S.Literal("DROPPED"))), enrolled_at: S.NullOr(S.String), completed_at: S.NullOr(S.String), changed_at: S.String, remote_deleted_at: S.NullOr(S.String), remote_data: S.NullOr(S.Record({ key: S.String, value: S.Unknown })), user: S.Struct({ id: S.String, remote_id: S.String, first_name: S.NullOr(S.String), last_name: S.NullOr(S.String), work_email: S.NullOr(S.String) }), course_revision: S.Struct({ id: S.String, remote_id: S.String, title: S.NullOr(S.String), course: S.NullOr(S.Struct({ id: S.String, remote_id: S.String })) }) }), warnings: S.Array(S.Struct({ message: S.String })) });
export type PostLmsCourseProgressionsCourseProgressionIdCompletePositiveResponse = S.Schema.Type<typeof PostLmsCourseProgressionsCourseProgressionIdCompletePositiveResponse>;

export const PostLmsCourseProgressionsCourseProgressionIdCompleteRequestBody = S.Struct({ completed_at: S.optional(S.NullOr(S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))))), score: S.optional(S.NullOr(S.Int.pipe(S.greaterThanOrEqualTo(0), S.lessThanOrEqualTo(100)))) });
export type PostLmsCourseProgressionsCourseProgressionIdCompleteRequestBody = S.Schema.Type<typeof PostLmsCourseProgressionsCourseProgressionIdCompleteRequestBody>;

export const GetLmsCoursesParameterCursor = S.String;
export type GetLmsCoursesParameterCursor = S.Schema.Type<typeof GetLmsCoursesParameterCursor>;

export const GetLmsCoursesParameterPageSize = Schema_default_100_4;
export type GetLmsCoursesParameterPageSize = S.Schema.Type<typeof GetLmsCoursesParameterPageSize>;

export const GetLmsCoursesParameterUpdatedAfter = S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetLmsCoursesParameterUpdatedAfter = S.Schema.Type<typeof GetLmsCoursesParameterUpdatedAfter>;

export const GetLmsCoursesParameterIncludeDeleted = Union_default_false;
export type GetLmsCoursesParameterIncludeDeleted = S.Schema.Type<typeof GetLmsCoursesParameterIncludeDeleted>;

export const GetLmsCoursesParameterIgnoreUnsupportedFilters = Union_default_false;
export type GetLmsCoursesParameterIgnoreUnsupportedFilters = S.Schema.Type<typeof GetLmsCoursesParameterIgnoreUnsupportedFilters>;

export const GetLmsCoursesParameterIds = S.String;
export type GetLmsCoursesParameterIds = S.Schema.Type<typeof GetLmsCoursesParameterIds>;

export const GetLmsCoursesParameterRemoteIds = S.String;
export type GetLmsCoursesParameterRemoteIds = S.Schema.Type<typeof GetLmsCoursesParameterRemoteIds>;

export const GetLmsCoursesPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ next: S.NullOr(S.String), results: S.Array(S.Struct({ id: S.String, remote_id: S.String, provider_id: S.NullOr(S.String), origin_id: S.NullOr(S.String), remote_created_at: S.NullOr(S.String), remote_deleted_at: S.NullOr(S.String), changed_at: S.String, remote_data: S.NullOr(S.Record({ key: S.String, value: S.Unknown })), custom_fields: S.NullOr(S.Record({ key: S.String, value: S.Unknown })), integration_fields: S.Array(S.Struct({ id: S.String, key: S.String, type: S.Union(S.Literal("DEFAULT"), S.Literal("CUSTOM")), value: S.optional(S.Null), label: S.NullOr(S.String) })), provider: S.NullOr(S.Struct({ id: S.String, remote_id: S.String, name: S.NullOr(S.String) })), revisions: S.Array(S.Struct({ id: S.String, remote_id: S.String, course_id: S.NullOr(S.String), title: S.NullOr(S.String), description: S.NullOr(S.String), remote_url: S.NullOr(S.String), status: S.NullOr(S.Union(S.Literal("ACTIVE"), S.Literal("INACTIVE"))), remote_created_at: S.NullOr(S.String), remote_deleted_at: S.NullOr(S.String), changed_at: S.String, remote_data: S.NullOr(S.Record({ key: S.String, value: S.Unknown })), custom_fields: S.NullOr(S.Record({ key: S.String, value: S.Unknown })), integration_fields: S.Array(S.Struct({ id: S.String, key: S.String, type: S.Union(S.Literal("DEFAULT"), S.Literal("CUSTOM")), value: S.optional(S.Null), label: S.NullOr(S.String) })), skill_assignments: S.Array(S.Struct({ skill: S.Struct({ id: S.String, remote_id: S.NullOr(S.String), name: S.NullOr(S.String) }) })) })) })) }) });
export type GetLmsCoursesPositiveResponse = S.Schema.Type<typeof GetLmsCoursesPositiveResponse>;

export const PostLmsCoursesBulkPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ task_id: S.String }), warnings: S.Array(S.Struct({ message: S.String })) });
export type PostLmsCoursesBulkPositiveResponse = S.Schema.Type<typeof PostLmsCoursesBulkPositiveResponse>;

export const PostLmsCoursesBulkRequestBody = S.Struct({ items: S.Array(S.Struct({ origin_id: S.String, course: S.Struct({ type: S.String, title: S.String, description: S.optional(S.NullOr(S.String)), course_url: S.String, thumbnail_url: S.optional(S.NullOr(S.String)), duration: S.optional(S.NullOr(S.Int.pipe(S.greaterThan(0)))), languages: S.optional(S.NullOr(S.Array(S.String.pipe(S.pattern(new RegExp("^[a-z]{2,3}(-[A-Z]{2})?$")))))) }) })) });
export type PostLmsCoursesBulkRequestBody = S.Schema.Type<typeof PostLmsCoursesBulkRequestBody>;

export const GetLmsCoursesBulkTaskIdParameterTaskId = S.String;
export type GetLmsCoursesBulkTaskIdParameterTaskId = S.Schema.Type<typeof GetLmsCoursesBulkTaskIdParameterTaskId>;

export const GetLmsCoursesBulkTaskIdPositiveResponse = S.Struct({ status: S.String, data: S.Union(S.Struct({ task_id: S.String, created_at: S.String, status: S.String, completed_at: S.Null }), S.Struct({ task_id: S.String, created_at: S.String, status: S.String, data: S.Array(S.Union(S.Struct({ origin_id: S.String, status: S.String, data: S.Struct({ id: S.String }) }), S.Struct({ origin_id: S.String, status: S.String, error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"), S.Literal("ATS.JOB_CLOSED"), S.Literal("ATS.APPLICATION_ALREADY_EXISTS"), S.Literal("LMS.COURSE_UPDATE_NOT_SUPPORTED"), S.Literal("AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING"), S.Literal("AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }))), completed_at: S.String }), S.Struct({ task_id: S.String, created_at: S.String, status: S.String, error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"), S.Literal("ATS.JOB_CLOSED"), S.Literal("ATS.APPLICATION_ALREADY_EXISTS"), S.Literal("LMS.COURSE_UPDATE_NOT_SUPPORTED"), S.Literal("AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING"), S.Literal("AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }), completed_at: S.String })) });
export type GetLmsCoursesBulkTaskIdPositiveResponse = S.Schema.Type<typeof GetLmsCoursesBulkTaskIdPositiveResponse>;

export const PostLmsCoursesCourseIdDeactivateParameterCourseId = S.String;
export type PostLmsCoursesCourseIdDeactivateParameterCourseId = S.Schema.Type<typeof PostLmsCoursesCourseIdDeactivateParameterCourseId>;

export const PostLmsCoursesCourseIdDeactivatePositiveResponse = S.Struct({ status: S.String, data: S.Struct({ id: S.String, remote_id: S.String, provider_id: S.NullOr(S.String), origin_id: S.NullOr(S.String), remote_created_at: S.NullOr(S.String), remote_deleted_at: S.NullOr(S.String), changed_at: S.String, remote_data: S.NullOr(S.Record({ key: S.String, value: S.Unknown })), custom_fields: S.NullOr(S.Record({ key: S.String, value: S.Unknown })), integration_fields: S.Array(S.Struct({ id: S.String, key: S.String, type: S.Union(S.Literal("DEFAULT"), S.Literal("CUSTOM")), value: S.optional(S.Null), label: S.NullOr(S.String) })), provider: S.NullOr(S.Struct({ id: S.String, remote_id: S.String, name: S.NullOr(S.String) })), revisions: S.Array(S.Struct({ id: S.String, remote_id: S.String, course_id: S.NullOr(S.String), title: S.NullOr(S.String), description: S.NullOr(S.String), remote_url: S.NullOr(S.String), status: S.NullOr(S.Union(S.Literal("ACTIVE"), S.Literal("INACTIVE"))), remote_created_at: S.NullOr(S.String), remote_deleted_at: S.NullOr(S.String), changed_at: S.String, remote_data: S.NullOr(S.Record({ key: S.String, value: S.Unknown })), custom_fields: S.NullOr(S.Record({ key: S.String, value: S.Unknown })), integration_fields: S.Array(S.Struct({ id: S.String, key: S.String, type: S.Union(S.Literal("DEFAULT"), S.Literal("CUSTOM")), value: S.optional(S.Null), label: S.NullOr(S.String) })), skill_assignments: S.Array(S.Struct({ skill: S.Struct({ id: S.String, remote_id: S.NullOr(S.String), name: S.NullOr(S.String) }) })) })) }), warnings: S.Array(S.Struct({ message: S.String })) });
export type PostLmsCoursesCourseIdDeactivatePositiveResponse = S.Schema.Type<typeof PostLmsCoursesCourseIdDeactivatePositiveResponse>;

export const PostLmsCoursesCourseIdDeactivateRequestBody = S.Struct({  });
export type PostLmsCoursesCourseIdDeactivateRequestBody = S.Schema.Type<typeof PostLmsCoursesCourseIdDeactivateRequestBody>;

export const GetLmsSkillsParameterCursor = S.String;
export type GetLmsSkillsParameterCursor = S.Schema.Type<typeof GetLmsSkillsParameterCursor>;

export const GetLmsSkillsParameterPageSize = Schema_default_100_4;
export type GetLmsSkillsParameterPageSize = S.Schema.Type<typeof GetLmsSkillsParameterPageSize>;

export const GetLmsSkillsParameterUpdatedAfter = S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetLmsSkillsParameterUpdatedAfter = S.Schema.Type<typeof GetLmsSkillsParameterUpdatedAfter>;

export const GetLmsSkillsParameterIncludeDeleted = Union_default_false;
export type GetLmsSkillsParameterIncludeDeleted = S.Schema.Type<typeof GetLmsSkillsParameterIncludeDeleted>;

export const GetLmsSkillsParameterIgnoreUnsupportedFilters = Union_default_false;
export type GetLmsSkillsParameterIgnoreUnsupportedFilters = S.Schema.Type<typeof GetLmsSkillsParameterIgnoreUnsupportedFilters>;

export const GetLmsSkillsParameterIds = S.String;
export type GetLmsSkillsParameterIds = S.Schema.Type<typeof GetLmsSkillsParameterIds>;

export const GetLmsSkillsParameterRemoteIds = S.String;
export type GetLmsSkillsParameterRemoteIds = S.Schema.Type<typeof GetLmsSkillsParameterRemoteIds>;

export const GetLmsSkillsPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ next: S.NullOr(S.String), results: S.Array(S.Struct({ id: S.String, remote_id: S.NullOr(S.String), name: S.NullOr(S.String), remote_created_at: S.NullOr(S.String), remote_deleted_at: S.NullOr(S.String), changed_at: S.String, remote_data: S.NullOr(S.Record({ key: S.String, value: S.Unknown })), custom_fields: S.NullOr(S.Record({ key: S.String, value: S.Unknown })), integration_fields: S.Array(S.Struct({ id: S.String, key: S.String, type: S.Union(S.Literal("DEFAULT"), S.Literal("CUSTOM")), value: S.optional(S.Null), label: S.NullOr(S.String) })) })) }) });
export type GetLmsSkillsPositiveResponse = S.Schema.Type<typeof GetLmsSkillsPositiveResponse>;

export const PostAiApplyCareerSitesPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ id: S.String, label: S.String }) });
export type PostAiApplyCareerSitesPositiveResponse = S.Schema.Type<typeof PostAiApplyCareerSitesPositiveResponse>;

export const PostAiApplyCareerSitesRequestBody = S.Struct({ label: S.String });
export type PostAiApplyCareerSitesRequestBody = S.Schema.Type<typeof PostAiApplyCareerSitesRequestBody>;

export const GetAiApplyCareerSitesParameterCursor = S.String;
export type GetAiApplyCareerSitesParameterCursor = S.Schema.Type<typeof GetAiApplyCareerSitesParameterCursor>;

export const GetAiApplyCareerSitesParameterPageSize = Schema_default_100_4;
export type GetAiApplyCareerSitesParameterPageSize = S.Schema.Type<typeof GetAiApplyCareerSitesParameterPageSize>;

export const GetAiApplyCareerSitesParameterIds = S.String;
export type GetAiApplyCareerSitesParameterIds = S.Schema.Type<typeof GetAiApplyCareerSitesParameterIds>;

export const GetAiApplyCareerSitesPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ results: S.Array(S.Struct({ id: S.String, label: S.String })), next: S.NullOr(S.String) }) });
export type GetAiApplyCareerSitesPositiveResponse = S.Schema.Type<typeof GetAiApplyCareerSitesPositiveResponse>;

export const GetAiApplyPostingsParameterCursor = S.String;
export type GetAiApplyPostingsParameterCursor = S.Schema.Type<typeof GetAiApplyPostingsParameterCursor>;

export const GetAiApplyPostingsParameterPageSize = Schema_default_100_4;
export type GetAiApplyPostingsParameterPageSize = S.Schema.Type<typeof GetAiApplyPostingsParameterPageSize>;

export const GetAiApplyPostingsParameterIds = S.String;
export type GetAiApplyPostingsParameterIds = S.Schema.Type<typeof GetAiApplyPostingsParameterIds>;

export const GetAiApplyPostingsParameterCareerSiteIds = S.String;
export type GetAiApplyPostingsParameterCareerSiteIds = S.Schema.Type<typeof GetAiApplyPostingsParameterCareerSiteIds>;

export const GetAiApplyPostingsParameterJobCodes = S.String;
export type GetAiApplyPostingsParameterJobCodes = S.Schema.Type<typeof GetAiApplyPostingsParameterJobCodes>;

export const GetAiApplyPostingsPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ results: S.Array(S.Struct({ id: S.String, career_site: S.Struct({ id: S.String, label: S.String }), url: S.String, job_code: S.NullOr(S.String), created_at: S.String, updated_at: S.String, archived_at: S.NullOr(S.String), archived_reason: S.NullOr(S.Union(S.Literal("JOB_POSTING_TAKEN_OFFLINE"), S.Literal("MANUAL_ARCHIVE"), S.Literal("REMOVED_FROM_JOB_FEED"))), availability: S.Union(S.Literal("APPLYABLE"), S.Literal("PENDING"), S.Literal("ARCHIVED"), S.Literal("UNAVAILABLE")) })), next: S.NullOr(S.String) }) });
export type GetAiApplyPostingsPositiveResponse = S.Schema.Type<typeof GetAiApplyPostingsPositiveResponse>;

export const PostAiApplyPostingsPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ id: S.String, career_site: S.Struct({ id: S.String, label: S.String }), url: S.String, job_code: S.NullOr(S.String), created_at: S.String, updated_at: S.String, archived_at: S.NullOr(S.String), archived_reason: S.NullOr(S.Union(S.Literal("JOB_POSTING_TAKEN_OFFLINE"), S.Literal("MANUAL_ARCHIVE"), S.Literal("REMOVED_FROM_JOB_FEED"))), availability: S.Union(S.Literal("APPLYABLE"), S.Literal("PENDING"), S.Literal("ARCHIVED"), S.Literal("UNAVAILABLE")) }) });
export type PostAiApplyPostingsPositiveResponse = S.Schema.Type<typeof PostAiApplyPostingsPositiveResponse>;

export const PostAiApplyPostingsRequestBody = S.Struct({ url: S.String.pipe(S.pattern(new RegExp("^https?:\\/\\/"))), job_code: S.optional(S.String), location: S.optional(S.NullOr(S.Struct({ country: S.Union(S.Literal("AD"), S.Literal("AE"), S.Literal("AF"), S.Literal("AG"), S.Literal("AI"), S.Literal("AL"), S.Literal("AM"), S.Literal("AO"), S.Literal("AQ"), S.Literal("AR"), S.Literal("AS"), S.Literal("AT"), S.Literal("AU"), S.Literal("AW"), S.Literal("AX"), S.Literal("AZ"), S.Literal("BA"), S.Literal("BB"), S.Literal("BD"), S.Literal("BE"), S.Literal("BF"), S.Literal("BG"), S.Literal("BH"), S.Literal("BI"), S.Literal("BJ"), S.Literal("BL"), S.Literal("BM"), S.Literal("BN"), S.Literal("BO"), S.Literal("BQ"), S.Literal("BR"), S.Literal("BS"), S.Literal("BT"), S.Literal("BV"), S.Literal("BW"), S.Literal("BY"), S.Literal("BZ"), S.Literal("CA"), S.Literal("CC"), S.Literal("CD"), S.Literal("CF"), S.Literal("CG"), S.Literal("CH"), S.Literal("CI"), S.Literal("CK"), S.Literal("CL"), S.Literal("CM"), S.Literal("CN"), S.Literal("CO"), S.Literal("CR"), S.Literal("CU"), S.Literal("CV"), S.Literal("CW"), S.Literal("CX"), S.Literal("CY"), S.Literal("CZ"), S.Literal("DE"), S.Literal("DJ"), S.Literal("DK"), S.Literal("DM"), S.Literal("DO"), S.Literal("DZ"), S.Literal("EC"), S.Literal("EE"), S.Literal("EG"), S.Literal("EH"), S.Literal("ER"), S.Literal("ES"), S.Literal("ET"), S.Literal("FI"), S.Literal("FJ"), S.Literal("FK"), S.Literal("FM"), S.Literal("FO"), S.Literal("FR"), S.Literal("GA"), S.Literal("GB"), S.Literal("GD"), S.Literal("GE"), S.Literal("GF"), S.Literal("GG"), S.Literal("GH"), S.Literal("GI"), S.Literal("GL"), S.Literal("GM"), S.Literal("GN"), S.Literal("GP"), S.Literal("GQ"), S.Literal("GR"), S.Literal("GS"), S.Literal("GT"), S.Literal("GU"), S.Literal("GW"), S.Literal("GY"), S.Literal("HK"), S.Literal("HM"), S.Literal("HN"), S.Literal("HR"), S.Literal("HT"), S.Literal("HU"), S.Literal("ID"), S.Literal("IE"), S.Literal("IL"), S.Literal("IM"), S.Literal("IN"), S.Literal("IO"), S.Literal("IQ"), S.Literal("IR"), S.Literal("IS"), S.Literal("IT"), S.Literal("JE"), S.Literal("JM"), S.Literal("JO"), S.Literal("JP"), S.Literal("KE"), S.Literal("KG"), S.Literal("KH"), S.Literal("KI"), S.Literal("KM"), S.Literal("KN"), S.Literal("KP"), S.Literal("KR"), S.Literal("KW"), S.Literal("KY"), S.Literal("KZ"), S.Literal("LA"), S.Literal("LB"), S.Literal("LC"), S.Literal("LI"), S.Literal("LK"), S.Literal("LR"), S.Literal("LS"), S.Literal("LT"), S.Literal("LU"), S.Literal("LV"), S.Literal("LY"), S.Literal("MA"), S.Literal("MC"), S.Literal("MD"), S.Literal("ME"), S.Literal("MF"), S.Literal("MG"), S.Literal("MH"), S.Literal("MK"), S.Literal("ML"), S.Literal("MM"), S.Literal("MN"), S.Literal("MO"), S.Literal("MP"), S.Literal("MQ"), S.Literal("MR"), S.Literal("MS"), S.Literal("MT"), S.Literal("MU"), S.Literal("MV"), S.Literal("MW"), S.Literal("MX"), S.Literal("MY"), S.Literal("MZ"), S.Literal("NA"), S.Literal("NC"), S.Literal("NE"), S.Literal("NF"), S.Literal("NG"), S.Literal("NI"), S.Literal("NL"), S.Literal("NO"), S.Literal("NP"), S.Literal("NR"), S.Literal("NU"), S.Literal("NZ"), S.Literal("OM"), S.Literal("PA"), S.Literal("PE"), S.Literal("PF"), S.Literal("PG"), S.Literal("PH"), S.Literal("PK"), S.Literal("PL"), S.Literal("PM"), S.Literal("PN"), S.Literal("PR"), S.Literal("PS"), S.Literal("PT"), S.Literal("PW"), S.Literal("PY"), S.Literal("QA"), S.Literal("RE"), S.Literal("RO"), S.Literal("RS"), S.Literal("RU"), S.Literal("RW"), S.Literal("SA"), S.Literal("SB"), S.Literal("SC"), S.Literal("SD"), S.Literal("SE"), S.Literal("SG"), S.Literal("SH"), S.Literal("SI"), S.Literal("SJ"), S.Literal("SK"), S.Literal("SL"), S.Literal("SM"), S.Literal("SN"), S.Literal("SO"), S.Literal("SR"), S.Literal("SS"), S.Literal("ST"), S.Literal("SV"), S.Literal("SX"), S.Literal("SY"), S.Literal("SZ"), S.Literal("TC"), S.Literal("TD"), S.Literal("TF"), S.Literal("TG"), S.Literal("TH"), S.Literal("TJ"), S.Literal("TK"), S.Literal("TL"), S.Literal("TM"), S.Literal("TN"), S.Literal("TO"), S.Literal("TR"), S.Literal("TT"), S.Literal("TV"), S.Literal("TW"), S.Literal("TZ"), S.Literal("UA"), S.Literal("UG"), S.Literal("UM"), S.Literal("US"), S.Literal("UY"), S.Literal("UZ"), S.Literal("VA"), S.Literal("VC"), S.Literal("VE"), S.Literal("VG"), S.Literal("VI"), S.Literal("VN"), S.Literal("VU"), S.Literal("WF"), S.Literal("WS"), S.Literal("YE"), S.Literal("YT"), S.Literal("ZA"), S.Literal("ZM"), S.Literal("ZW")), postal_code: S.optional(S.String) }))), career_site_id: S.String });
export type PostAiApplyPostingsRequestBody = S.Schema.Type<typeof PostAiApplyPostingsRequestBody>;

export const PostAiApplyPostingsPostingIdInquireParameterPostingId = S.String;
export type PostAiApplyPostingsPostingIdInquireParameterPostingId = S.Schema.Type<typeof PostAiApplyPostingsPostingIdInquireParameterPostingId>;

export const PostAiApplyPostingsPostingIdInquirePositiveResponse = S.Struct({ status: S.String, data: S.Struct({ application_form: S.Array(S.Union(S.Struct({ block_type: S.String, question_id: S.String, label: S.String, description: S.NullOr(S.String), required: S.Boolean, category: S.NullOr(S.Literal("EEO")), question_type: S.Union(S.Literal("TEXT"), S.Literal("NUMBER"), S.Literal("BOOLEAN"), S.Literal("FILE"), S.Literal("DATE"), S.Literal("SINGLE_SELECT"), S.Literal("MULTI_SELECT")), unified_key: S.NullOr(S.Union(S.Literal("EMAIL"), S.Literal("RESIDENCE_TYPE"), S.Literal("RESIDENCE_FULL_STRING"), S.Literal("RESIDENCE_COUNTRY"), S.Literal("RESIDENCE_CITY"), S.Literal("RESIDENCE_STATE"), S.Literal("RESIDENCE_LINE_1"), S.Literal("RESIDENCE_LINE_2"), S.Literal("RESIDENCE_ZIP_CODE"), S.Literal("APPLICANT_POOL_CONSENT"), S.Literal("TERMS_AND_CONDITIONS"), S.Literal("FIRST_NAME"), S.Literal("LAST_NAME"), S.Literal("FULL_NAME"), S.Literal("GENDER"), S.Literal("EXPECTED_START_DATE"), S.Literal("RESUME"), S.Literal("BIRTH_DATE"), S.Literal("PHONE_NUMBER_TYPE"), S.Literal("FULL_PHONE_NUMBER"), S.Literal("PHONE_COUNTRY_CODE"), S.Literal("PHONE_NATIONAL_NUMBER"), S.Literal("PHONE_EXTENSION"))), options: S.NullOr(S.Array(S.Struct({ id: S.String, label: S.String, unified_key: S.NullOr(S.Union(S.Literal("HOME"), S.Literal("WORK"), S.Literal("MAILING"), S.Literal("AD"), S.Literal("AE"), S.Literal("AF"), S.Literal("AG"), S.Literal("AI"), S.Literal("AL"), S.Literal("AM"), S.Literal("AO"), S.Literal("AQ"), S.Literal("AR"), S.Literal("AS"), S.Literal("AT"), S.Literal("AU"), S.Literal("AW"), S.Literal("AX"), S.Literal("AZ"), S.Literal("BA"), S.Literal("BB"), S.Literal("BD"), S.Literal("BE"), S.Literal("BF"), S.Literal("BG"), S.Literal("BH"), S.Literal("BI"), S.Literal("BJ"), S.Literal("BL"), S.Literal("BM"), S.Literal("BN"), S.Literal("BO"), S.Literal("BQ"), S.Literal("BR"), S.Literal("BS"), S.Literal("BT"), S.Literal("BV"), S.Literal("BW"), S.Literal("BY"), S.Literal("BZ"), S.Literal("CA"), S.Literal("CC"), S.Literal("CD"), S.Literal("CF"), S.Literal("CG"), S.Literal("CH"), S.Literal("CI"), S.Literal("CK"), S.Literal("CL"), S.Literal("CM"), S.Literal("CN"), S.Literal("CO"), S.Literal("CR"), S.Literal("CU"), S.Literal("CV"), S.Literal("CW"), S.Literal("CX"), S.Literal("CY"), S.Literal("CZ"), S.Literal("DE"), S.Literal("DJ"), S.Literal("DK"), S.Literal("DM"), S.Literal("DO"), S.Literal("DZ"), S.Literal("EC"), S.Literal("EE"), S.Literal("EG"), S.Literal("EH"), S.Literal("ER"), S.Literal("ES"), S.Literal("ET"), S.Literal("FI"), S.Literal("FJ"), S.Literal("FK"), S.Literal("FM"), S.Literal("FO"), S.Literal("FR"), S.Literal("GA"), S.Literal("GB"), S.Literal("GD"), S.Literal("GE"), S.Literal("GF"), S.Literal("GG"), S.Literal("GH"), S.Literal("GI"), S.Literal("GL"), S.Literal("GM"), S.Literal("GN"), S.Literal("GP"), S.Literal("GQ"), S.Literal("GR"), S.Literal("GS"), S.Literal("GT"), S.Literal("GU"), S.Literal("GW"), S.Literal("GY"), S.Literal("HK"), S.Literal("HM"), S.Literal("HN"), S.Literal("HR"), S.Literal("HT"), S.Literal("HU"), S.Literal("ID"), S.Literal("IE"), S.Literal("IL"), S.Literal("IM"), S.Literal("IN"), S.Literal("IO"), S.Literal("IQ"), S.Literal("IR"), S.Literal("IS"), S.Literal("IT"), S.Literal("JE"), S.Literal("JM"), S.Literal("JO"), S.Literal("JP"), S.Literal("KE"), S.Literal("KG"), S.Literal("KH"), S.Literal("KI"), S.Literal("KM"), S.Literal("KN"), S.Literal("KP"), S.Literal("KR"), S.Literal("KW"), S.Literal("KY"), S.Literal("KZ"), S.Literal("LA"), S.Literal("LB"), S.Literal("LC"), S.Literal("LI"), S.Literal("LK"), S.Literal("LR"), S.Literal("LS"), S.Literal("LT"), S.Literal("LU"), S.Literal("LV"), S.Literal("LY"), S.Literal("MA"), S.Literal("MC"), S.Literal("MD"), S.Literal("ME"), S.Literal("MF"), S.Literal("MG"), S.Literal("MH"), S.Literal("MK"), S.Literal("ML"), S.Literal("MM"), S.Literal("MN"), S.Literal("MO"), S.Literal("MP"), S.Literal("MQ"), S.Literal("MR"), S.Literal("MS"), S.Literal("MT"), S.Literal("MU"), S.Literal("MV"), S.Literal("MW"), S.Literal("MX"), S.Literal("MY"), S.Literal("MZ"), S.Literal("NA"), S.Literal("NC"), S.Literal("NE"), S.Literal("NF"), S.Literal("NG"), S.Literal("NI"), S.Literal("NL"), S.Literal("NO"), S.Literal("NP"), S.Literal("NR"), S.Literal("NU"), S.Literal("NZ"), S.Literal("OM"), S.Literal("PA"), S.Literal("PE"), S.Literal("PF"), S.Literal("PG"), S.Literal("PH"), S.Literal("PK"), S.Literal("PL"), S.Literal("PM"), S.Literal("PN"), S.Literal("PR"), S.Literal("PS"), S.Literal("PT"), S.Literal("PW"), S.Literal("PY"), S.Literal("QA"), S.Literal("RE"), S.Literal("RO"), S.Literal("RS"), S.Literal("RU"), S.Literal("RW"), S.Literal("SA"), S.Literal("SB"), S.Literal("SC"), S.Literal("SD"), S.Literal("SE"), S.Literal("SG"), S.Literal("SH"), S.Literal("SI"), S.Literal("SJ"), S.Literal("SK"), S.Literal("SL"), S.Literal("SM"), S.Literal("SN"), S.Literal("SO"), S.Literal("SR"), S.Literal("SS"), S.Literal("ST"), S.Literal("SV"), S.Literal("SX"), S.Literal("SY"), S.Literal("SZ"), S.Literal("TC"), S.Literal("TD"), S.Literal("TF"), S.Literal("TG"), S.Literal("TH"), S.Literal("TJ"), S.Literal("TK"), S.Literal("TL"), S.Literal("TM"), S.Literal("TN"), S.Literal("TO"), S.Literal("TR"), S.Literal("TT"), S.Literal("TV"), S.Literal("TW"), S.Literal("TZ"), S.Literal("UA"), S.Literal("UG"), S.Literal("UM"), S.Literal("US"), S.Literal("UY"), S.Literal("UZ"), S.Literal("VA"), S.Literal("VC"), S.Literal("VE"), S.Literal("VG"), S.Literal("VI"), S.Literal("VN"), S.Literal("VU"), S.Literal("WF"), S.Literal("WS"), S.Literal("YE"), S.Literal("YT"), S.Literal("ZA"), S.Literal("ZM"), S.Literal("ZW"), S.Literal("MALE"), S.Literal("FEMALE"), S.Literal("NON_BINARY"), S.Literal("NOT_SPECIFIED"), S.Literal("MOBILE"), S.Literal("LANDLINE"), S.Literal("SOURCE_OTHER"), S.Literal("SOURCE_OTHER_JOB_BOARD"))) }))), display_when: S.NullOr(S.Struct({ question_id: S.String, answer_equals: S.Union(S.String, S.Array(S.String), S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308)), S.Boolean, S.Struct({ name: S.String, content_type: S.String, data: S.Unknown })) })) }), S.Struct({ block_type: S.String, label: S.String, children: S.Array(S.Record({ key: S.String, value: S.Unknown })) }))), submission_token: S.String }) });
export type PostAiApplyPostingsPostingIdInquirePositiveResponse = S.Schema.Type<typeof PostAiApplyPostingsPostingIdInquirePositiveResponse>;

export const PostAiApplyPostingsPostingIdInquireRequestBody = S.Struct({  });
export type PostAiApplyPostingsPostingIdInquireRequestBody = S.Schema.Type<typeof PostAiApplyPostingsPostingIdInquireRequestBody>;

export const PostAiApplyApplyPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ id: S.String, posting_id: S.String, status: S.String, created_at: S.String, updated_at: S.String }) });
export type PostAiApplyApplyPositiveResponse = S.Schema.Type<typeof PostAiApplyApplyPositiveResponse>;

export const PostAiApplyApplyRequestBody = S.Struct({ submission_token: S.String, candidate_email: S.String.pipe(S.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)), query_params: S.optional(S.Record({ key: S.String, value: S.String })), screening_question_answers: S.Array(S.Struct({ question_id: S.String, answer: S.Union(S.String, S.Array(S.String), S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308)), S.Boolean, S.Struct({ name: S.String, content_type: S.String, data: S.String })) })), additional_clicks: S.optional(S.Int.pipe(S.greaterThanOrEqualTo(0), S.lessThanOrEqualTo(30))), additional_clicks_scatter_duration: S.optional(S.Int.pipe(S.greaterThanOrEqualTo(1))) });
export type PostAiApplyApplyRequestBody = S.Schema.Type<typeof PostAiApplyApplyRequestBody>;

export const GetAiApplyApplicationsParameterCursor = S.String;
export type GetAiApplyApplicationsParameterCursor = S.Schema.Type<typeof GetAiApplyApplicationsParameterCursor>;

export const GetAiApplyApplicationsParameterPageSize = Schema_default_100_4;
export type GetAiApplyApplicationsParameterPageSize = S.Schema.Type<typeof GetAiApplyApplicationsParameterPageSize>;

export const GetAiApplyApplicationsParameterIds = S.String;
export type GetAiApplyApplicationsParameterIds = S.Schema.Type<typeof GetAiApplyApplicationsParameterIds>;

export const GetAiApplyApplicationsParameterJobPostingIds = S.String;
export type GetAiApplyApplicationsParameterJobPostingIds = S.Schema.Type<typeof GetAiApplyApplicationsParameterJobPostingIds>;

export const GetAiApplyApplicationsPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ results: S.Array(S.Struct({ id: S.String, job_posting_id: S.String, status: S.Union(S.Literal("SUBMITTED"), S.Literal("DUPLICATE"), S.Literal("PENDING"), S.Literal("FAILED")), created_at: S.String, updated_at: S.String })), next: S.NullOr(S.String) }) });
export type GetAiApplyApplicationsPositiveResponse = S.Schema.Type<typeof GetAiApplyApplicationsPositiveResponse>;

export const GetAiApplyUnifiedApiJobsParameterCursor = S.String;
export type GetAiApplyUnifiedApiJobsParameterCursor = S.Schema.Type<typeof GetAiApplyUnifiedApiJobsParameterCursor>;

export const GetAiApplyUnifiedApiJobsParameterPageSize = Schema_default_5;
export type GetAiApplyUnifiedApiJobsParameterPageSize = S.Schema.Type<typeof GetAiApplyUnifiedApiJobsParameterPageSize>;

export const GetAiApplyUnifiedApiJobsParameterIds = S.String;
export type GetAiApplyUnifiedApiJobsParameterIds = S.Schema.Type<typeof GetAiApplyUnifiedApiJobsParameterIds>;

export const GetAiApplyUnifiedApiJobsParameterRemoteIds = S.String;
export type GetAiApplyUnifiedApiJobsParameterRemoteIds = S.Schema.Type<typeof GetAiApplyUnifiedApiJobsParameterRemoteIds>;

export const GetAiApplyUnifiedApiJobsParameterJobCodes = S.String;
export type GetAiApplyUnifiedApiJobsParameterJobCodes = S.Schema.Type<typeof GetAiApplyUnifiedApiJobsParameterJobCodes>;

export const GetAiApplyUnifiedApiJobsParameterCareerSiteIds = S.String;
export type GetAiApplyUnifiedApiJobsParameterCareerSiteIds = S.Schema.Type<typeof GetAiApplyUnifiedApiJobsParameterCareerSiteIds>;

export const GetAiApplyUnifiedApiJobsPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ results: S.Array(S.Struct({ id: S.String, remote_id: S.String, name: S.NullOr(S.String), job_code: S.NullOr(S.String), description: S.NullOr(S.String), confidential: S.NullOr(S.Boolean), weekly_hours: S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), category: S.NullOr(S.String), department: S.NullOr(S.String), post_url: S.NullOr(S.String), experience_level: S.NullOr(S.String), salary_amount: S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), salary_amount_from: S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), salary_amount_to: S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), salary_currency: S.NullOr(S.String), custom_fields: S.NullOr(S.Record({ key: S.String, value: S.Unknown })), integration_fields: S.Array(S.Record({ key: S.String, value: S.Unknown })), opened_at: S.NullOr(S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")))), closed_at: S.NullOr(S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")))), remote_created_at: S.NullOr(S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")))), remote_updated_at: S.NullOr(S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")))), contact_id: S.NullOr(S.String), remote_data: S.NullOr(S.Record({ key: S.String, value: S.Unknown })), changed_at: S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$"))), remote_deleted_at: S.NullOr(S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")))), remote_url: S.NullOr(S.String), stages: S.Array(S.Record({ key: S.String, value: S.Unknown })), screening_questions: S.NullOr(S.Array(S.Struct({ id: S.String, remote_id: S.NullOr(S.String), title: S.NullOr(S.String), description: S.NullOr(S.String), format: S.optional(S.Union(S.Struct({ display_type: S.optional(S.NullOr(S.Union(S.Literal("SINGLE_LINE"), S.Literal("MULTI_LINE"), S.Literal("EMAIL"), S.Literal("URL")))), max_length: S.optional(S.NullOr(S.Int)), type: S.String }), S.Struct({ display_type: NullOr_default_FIELD_prop, max: S.optional(S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308)))), min: S.optional(S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308)))), type: S.String }), S.Struct({ accepted_mime_types: S.optional(S.NullOr(S.Array(S.String))), max_file_size_bytes: S.optional(S.NullOr(S.Int)), type: S.String }), S.Struct({ display_type: S.optional(S.NullOr(S.Union(S.Literal("DROPDOWN"), S.Literal("RADIO")))), options: S.Array(S.Struct({ id: S.String, remote_id: S.optional(S.NullOr(S.String)), name: S.String })), type: S.String }), S.Struct({ type: S.String }), S.Struct({ type: S.String }), S.Struct({ options: S.Array(S.Struct({ id: S.String, remote_id: S.optional(S.NullOr(S.String)), name: S.String })), type: S.String }), S.Struct({ type: S.String }), S.Struct({ raw_question: S.optional(S.Unknown), type: S.String }), S.Null)), category: S.NullOr(S.Literal("EEO")), index: S.optional(S.NullOr(S.Int)), required: S.NullOr(S.Boolean), precondition_question_id: S.optional(S.NullOr(S.String)), precondition_options: Union_default_null_prop_20 }))), job_postings: S.Array(S.Record({ key: S.String, value: S.Unknown })), hiring_team: S.Array(S.Record({ key: S.String, value: S.Unknown })), employment_type: S.optional(S.Union(S.Union(S.Literal("FULL_TIME"), S.Literal("PART_TIME"), S.Literal("CONTRACT"), S.Literal("SEASONAL"), S.Literal("INTERNSHIP")), S.String, S.Null)), status: S.optional(S.Union(S.Union(S.Literal("OPEN"), S.Literal("CLOSED"), S.Literal("DRAFT"), S.Literal("ARCHIVED")), S.String, S.Null)), visibility: S.NullOr(S.String), remote_work_status: S.NullOr(S.String), salary_period: S.NullOr(S.String), location: S.optional(S.NullOr(S.Struct({ city: S.optional(S.NullOr(S.String)), country: S.optional(S.NullOr(S.String)), raw: S.optional(S.NullOr(S.String)), state: S.optional(S.NullOr(S.String)), street_1: S.optional(S.NullOr(S.String)), street_2: S.optional(S.NullOr(S.String)), zip_code: S.optional(S.NullOr(S.String)) }))) })), next: S.NullOr(S.String) }) });
export type GetAiApplyUnifiedApiJobsPositiveResponse = S.Schema.Type<typeof GetAiApplyUnifiedApiJobsPositiveResponse>;

export const PostAiApplyUnifiedApiJobsJobIdApplicationsParameterJobId = S.String;
export type PostAiApplyUnifiedApiJobsJobIdApplicationsParameterJobId = S.Schema.Type<typeof PostAiApplyUnifiedApiJobsJobIdApplicationsParameterJobId>;

export const PostAiApplyUnifiedApiJobsJobIdApplicationsPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ id: S.String, remote_id: S.NullOr(S.String), outcome: S.NullOr(S.Union(S.Literal("PENDING"), S.Literal("HIRED"), S.Literal("DECLINED"))), rejection_reason_name: S.NullOr(S.String), rejected_at: S.NullOr(S.String), current_stage_id: S.NullOr(S.String), job_id: S.NullOr(S.String), candidate_id: S.NullOr(S.String), screening_question_answers: NullOr_default_value_prop_12, custom_fields: S.NullOr(S.Record({ key: S.String, value: S.Unknown })), integration_fields: S.Array(S.Struct({ id: S.String, key: S.String, type: S.Union(S.Literal("DEFAULT"), S.Literal("CUSTOM")), value: S.optional(S.Null), label: S.NullOr(S.String) })), remote_url: S.NullOr(S.String), changed_at: S.String, remote_deleted_at: S.NullOr(S.String), remote_created_at: S.NullOr(S.String), remote_updated_at: S.NullOr(S.String), remote_data: S.NullOr(S.Record({ key: S.String, value: S.Unknown })), current_stage: S.NullOr(S.Struct({ id: S.String, name: S.NullOr(S.String), remote_id: S.NullOr(S.String), index: S.NullOr(S.Int) })), job: S.NullOr(S.Struct({ id: S.String, name: S.NullOr(S.String), remote_id: S.String })), candidate: S.NullOr(S.Struct({ id: S.String, remote_id: S.String, first_name: S.NullOr(S.String), last_name: S.NullOr(S.String), company: S.NullOr(S.String), title: S.NullOr(S.String), confidential: S.NullOr(S.Boolean), source: S.NullOr(S.String), phone_numbers: NullOr_default_value_prop_10, email_addresses: NullOr_default_value_prop, social_media: NullOr_default_value_prop_11, location: S.optional(S.NullOr(S.Struct({ city: S.optional(S.NullOr(S.String)), country: S.optional(S.NullOr(S.String)), raw: S.optional(S.NullOr(S.String)), state: S.optional(S.NullOr(S.String)), street_1: S.optional(S.NullOr(S.String)), street_2: S.optional(S.NullOr(S.String)), zip_code: S.optional(S.NullOr(S.String)) }))), custom_fields: S.NullOr(S.Record({ key: S.String, value: S.Unknown })), integration_fields: S.Array(S.Struct({ id: S.String, key: S.String, type: S.Union(S.Literal("DEFAULT"), S.Literal("CUSTOM")), value: S.optional(S.Null), label: S.NullOr(S.String) })), remote_url: S.NullOr(S.String), remote_created_at: S.NullOr(S.String), remote_updated_at: S.NullOr(S.String), remote_data: S.NullOr(S.Record({ key: S.String, value: S.Unknown })), changed_at: S.String, remote_deleted_at: S.NullOr(S.String), tags: S.Array(S.Struct({ id: S.String, name: S.NullOr(S.String), remote_id: S.NullOr(S.String) })) })) }) });
export type PostAiApplyUnifiedApiJobsJobIdApplicationsPositiveResponse = S.Schema.Type<typeof PostAiApplyUnifiedApiJobsJobIdApplicationsPositiveResponse>;

export const PostAiApplyUnifiedApiJobsJobIdApplicationsRequestBody = S.Struct({ stage_id: S.optional(S.String), candidate: S.Struct({ first_name: S.String, last_name: S.String, email_address: S.String.pipe(S.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)), additional_email_addresses: S.optional(S.Array(S.Struct({ type: S.Union(S.Literal("PERSONAL"), S.Literal("WORK"), S.Literal("OTHER")), email_address: S.String.pipe(S.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) }))), company: S.optional(S.String), title: S.optional(S.String), phone_number: S.optional(S.String), additional_phone_numbers: S.optional(S.Array(S.Struct({ type: S.Union(S.Literal("PERSONAL"), S.Literal("WORK"), S.Literal("OTHER")), phone_number: S.String }))), location: S.optional(S.Struct({ city: S.optional(S.String), country: S.String.pipe(S.pattern(new RegExp("^[A-Z]{2}$"))), state: S.optional(S.String), street_1: S.optional(S.String), zip_code: S.optional(S.String) })), gender: S.optional(S.Union(S.Literal("MALE"), S.Literal("FEMALE"), S.Literal("OTHER"))), availability_date: S.optional(S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), salary_expectations: S.optional(S.Struct({ period: S.Union(S.Literal("MONTH"), S.Literal("YEAR")), amount: S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308)) })), social_links: Array_default_value_prop_13 }), attachments: Union_default_value_prop, source: S.optional(S.Struct({ name: S.optional(S.String), unified_key: S.optional(S.String), id: S.optional(S.String) })), sourced_by: S.optional(S.Struct({ user_id: S.String })), gdpr_consent: S.optional(S.Struct({ expires_at: S.optional(S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), given: S.optional(S.Boolean) })), remote_fields: S.optional(S.Struct({ successfactors: S.optional(S.Struct({ Candidate: S.optional(S.Record({ key: S.String, value: S.Unknown })), JobApplication: S.optional(S.Record({ key: S.String, value: S.Unknown })), copyJobApplicationAttachments: S.optional(S.Boolean), update_existing_candidate: S.optional(S.NullOr(S.Boolean)) })), personio: S.optional(S.Struct({ application: S.optional(S.Record({ key: S.String, value: S.Unknown })) })), talentsoft: S.optional(S.Struct({ applicant: S.optional(S.Record({ key: S.String, value: S.Unknown })), application: S.optional(S.Record({ key: S.String, value: S.Unknown })) })), teamtailor: S.optional(S.Struct({ candidate: S.optional(S.Record({ key: S.String, value: S.Unknown })), application: S.optional(S.Struct({ attributes: S.optional(S.Record({ key: S.String, value: S.Unknown })) })) })), greenhouse: S.optional(S.Struct({ candidate: S.optional(S.Record({ key: S.String, value: S.Unknown })), application: S.optional(S.Record({ key: S.String, value: S.Unknown })), post_headers: S.optional(S.Struct({ "On-Behalf-Of": S.optional(S.NullOr(S.String)) })) })), lever: S.optional(S.Struct({ candidate: S.optional(S.Record({ key: S.String, value: S.Unknown })) })), workable: S.optional(S.Struct({ candidate: S.optional(S.Record({ key: S.String, value: S.Unknown })), on_behalf_of_user_remote_id: S.optional(S.String) })), workday: S.optional(S.Struct({ Candidate_Data: S.optional(S.Struct({ Name_Detail_Data: S.optional(S.Struct({ Middle_Name: S.optional(S.String), Social_Suffix_Reference: S.optional(S.Struct({ Predefined_Name_Component_ID: S.String })) })), Language_Reference: S.optional(S.Struct({ WID: S.String })), Job_Application_Data: S.optional(S.Struct({ Job_Applied_To_Data: S.optional(S.Struct({ Global_Personal_Information_Data: S.optional(S.Struct({ Date_of_Birth: S.optional(S.String) })) })), Resume_Data: S.optional(S.Struct({ Education_Data: S.optional(S.Array(S.Struct({ School_Name: S.optional(S.String), First_Year_Attended: S.optional(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), Last_Year_Attended: S.optional(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), Field_of_Study_Reference: S.optional(S.Struct({ WID: S.String })), Degree_Reference: S.optional(S.Struct({ WID: S.String })), Grade_Average: S.optional(S.String) }))), Skill_Data: S.optional(S.Array(S.Struct({ Skill_Name: S.optional(S.String) }))), Language_Data: S.optional(S.Array(S.Struct({ Language_Reference: S.optional(S.Struct({ WID: S.optional(S.String) })), Language: S.optional(S.Struct({ Native: S.optional(S.Boolean), Language_Ability: S.Array(S.Struct({ Language_Ability_Data: S.optional(S.Struct({ Language_Proficiency_Reference: S.optional(S.Struct({ WID: S.String })), Language_Ability_Type_Reference: S.optional(S.Struct({ WID: S.String })) })) })) })) }))), Experience_Data: S.optional(S.Array(S.Struct({ Company_Name: S.String, Title: S.String, Location: S.optional(S.String), Start_Date: S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))), End_Date: S.optional(S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), Currently_Work_Here: S.optional(S.Boolean), Description: S.optional(S.String) }))) })) })), Contact_Data: S.optional(S.Struct({ Location_Data: S.optional(S.Struct({ Address_Line_1: S.optional(S.String), Address_Line_2: S.optional(S.String), Region_Subdivision_1: S.optional(S.String), Country_Region_Reference: S.optional(S.Struct({ Country_Region_ID: S.String })), Country_City_Reference: S.optional(S.Struct({ WID: S.String })) })) })), Worker_Reference: S.optional(S.Struct({ WID: S.optional(S.String), Employee_ID: S.optional(S.String) })) })), Override_Source_Reference_WID: S.optional(S.String) })), zohorecruit: S.optional(S.Struct({ candidate: S.optional(S.Record({ key: S.String, value: S.Unknown })) })), bullhorn: S.optional(S.Struct({ candidate: S.optional(S.Record({ key: S.String, value: S.Unknown })), job_submission: S.optional(S.Record({ key: S.String, value: S.Unknown })) })), smartrecruiters: S.optional(S.Struct({ candidate_with_questions: S.optional(S.Record({ key: S.String, value: S.Unknown })), candidate_without_questions: S.optional(S.Record({ key: S.String, value: S.Unknown })), candidate: S.optional(S.Record({ key: S.String, value: S.Unknown })), consent_decisions: S.optional(S.Struct({ SINGLE: S.optional(S.Boolean), SMART_RECRUIT: S.optional(S.Boolean), SMART_CRM: S.optional(S.Boolean), SMART_MESSAGE_SMS: S.optional(S.Boolean), SMART_MESSAGE_WHATSAPP: S.optional(S.Boolean) })) })), talentadore: S.optional(S.Struct({ applications: S.optional(S.Record({ key: S.String, value: S.Unknown })) })), guidecom: S.optional(S.Struct({ candidate: S.optional(S.Record({ key: S.String, value: S.Unknown })) })), dvinci: S.optional(S.Struct({ application: S.optional(S.Record({ key: S.String, value: S.Unknown })), candidate: S.optional(S.Record({ key: S.String, value: S.Unknown })) })), hrworks: S.optional(S.Struct({ jobApplication: S.optional(S.Record({ key: S.String, value: S.Unknown })) })), jobylon: S.optional(S.Struct({ application: S.optional(S.Struct({ message: S.optional(S.String) })) })), avature: S.optional(S.Struct({ workflow: S.optional(S.Struct({ step: S.optional(S.Struct({ id: S.Int })) })) })), recruitee: S.optional(S.Struct({ candidate: S.optional(S.Struct({ cover_letter_text: S.optional(S.String) })) })), rexx: S.optional(S.Struct({ candidate: S.optional(S.Record({ key: S.String, value: S.Unknown })) })), umantis: S.optional(S.Struct({ person: S.optional(S.Record({ key: S.String, value: S.Unknown })) })), piloga: S.optional(S.Struct({ candidate: S.optional(S.Struct({ street: S.optional(S.String) })) })), pinpoint: S.optional(S.Struct({ candidate: S.optional(S.Record({ key: S.String, value: S.Unknown })) })), covetorest: S.optional(S.Struct({ candidate: S.optional(S.Struct({ mandant: S.optional(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))) })) })) })), screening_question_answers: S.optional(S.Array(S.Struct({ question_id: S.String, answer: S.Union(S.String, S.Boolean, S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308)), S.Array(S.String), S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))), S.Struct({ name: S.String, content_type: S.optional(S.String.pipe(S.pattern(new RegExp("^[\\w.-]+\\/[\\w.-]+$")))), data_url: S.optional(S.String), data: S.optional(S.String) })) }))), query_params: S.optional(S.Record({ key: S.String, value: S.String })) });
export type PostAiApplyUnifiedApiJobsJobIdApplicationsRequestBody = S.Schema.Type<typeof PostAiApplyUnifiedApiJobsJobIdApplicationsRequestBody>;

export const GetAiApplyJobFeedsParameterCursor = S.String;
export type GetAiApplyJobFeedsParameterCursor = S.Schema.Type<typeof GetAiApplyJobFeedsParameterCursor>;

export const GetAiApplyJobFeedsParameterPageSize = Schema_default_100_4;
export type GetAiApplyJobFeedsParameterPageSize = S.Schema.Type<typeof GetAiApplyJobFeedsParameterPageSize>;

export const GetAiApplyJobFeedsParameterIds = S.String;
export type GetAiApplyJobFeedsParameterIds = S.Schema.Type<typeof GetAiApplyJobFeedsParameterIds>;

export const GetAiApplyJobFeedsPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ results: S.Array(S.Struct({ id: S.String, label: S.String })), next: S.NullOr(S.String) }) });
export type GetAiApplyJobFeedsPositiveResponse = S.Schema.Type<typeof GetAiApplyJobFeedsPositiveResponse>;

export const PostAiApplyJobFeedsPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ id: S.String, label: S.String }) });
export type PostAiApplyJobFeedsPositiveResponse = S.Schema.Type<typeof PostAiApplyJobFeedsPositiveResponse>;

export const PostAiApplyJobFeedsRequestBody = S.Struct({ label: S.String.pipe(S.minLength(1)) });
export type PostAiApplyJobFeedsRequestBody = S.Schema.Type<typeof PostAiApplyJobFeedsRequestBody>;

export const PostConnectCreateLinkPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ link: S.String }) });
export type PostConnectCreateLinkPositiveResponse = S.Schema.Type<typeof PostConnectCreateLinkPositiveResponse>;

export const PostConnectCreateLinkRequestBody = S.Struct({ end_user_email: S.String.pipe(S.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)), end_user_organization_name: S.String.pipe(S.minLength(1)), end_user_origin_id: S.optional(S.NullOr(S.String.pipe(S.minLength(1)))), remote_environment: S.optional(S.NullOr(S.String)), integration_category: Union_default_HRIS_prop, integration_tool: S.optional(S.NullOr(S.Union(S.Literal("workday"), S.Literal("successfactors"), S.Literal("smartrecruiters"), S.Literal("factorial"), S.Literal("oraclerecruiting"), S.Literal("lever"), S.Literal("icims"), S.Literal("cornerstonetalentlink"), S.Literal("recruitee"), S.Literal("recruiterflow"), S.Literal("greenhouse"), S.Literal("greenhousejobboard"), S.Literal("teamtailor"), S.Literal("teamtailorjobboards"), S.Literal("ashby"), S.Literal("talentsoft"), S.Literal("talentsoftcustomer"), S.Literal("concludis"), S.Literal("talention"), S.Literal("piloga"), S.Literal("onlyfy"), S.Literal("personio"), S.Literal("ukgpro"), S.Literal("ukgready"), S.Literal("adpworkforcenow"), S.Literal("taleo"), S.Literal("rexx"), S.Literal("afas"), S.Literal("bamboohr"), S.Literal("bullhorn"), S.Literal("bullhornlogin"), S.Literal("workable"), S.Literal("jobvite"), S.Literal("fountain"), S.Literal("softgarden"), S.Literal("softgardenpartner"), S.Literal("pinpoint"), S.Literal("welcometothejungle"), S.Literal("dvinci"), S.Literal("dvinciadmin"), S.Literal("join"), S.Literal("sagehr"), S.Literal("traffit"), S.Literal("erecruiter"), S.Literal("abacusumantis"), S.Literal("umantis"), S.Literal("jobylon"), S.Literal("taleez"), S.Literal("hrworks"), S.Literal("otys"), S.Literal("zohorecruit"), S.Literal("ceipal"), S.Literal("eploy"), S.Literal("jobdiva"), S.Literal("careerplug"), S.Literal("perview"), S.Literal("eightfold"), S.Literal("paylocity"), S.Literal("paycor"), S.Literal("avature"), S.Literal("apploi"), S.Literal("phenom"), S.Literal("paradox"), S.Literal("heyrecruit"), S.Literal("recruhr"), S.Literal("recruitcrm"), S.Literal("jazzhr"), S.Literal("bite"), S.Literal("brassring"), S.Literal("homerun"), S.Literal("mysolution"), S.Literal("carerix"), S.Literal("hroffice"), S.Literal("talentclue"), S.Literal("inrecruiting"), S.Literal("ubeeo"), S.Literal("connexys"), S.Literal("hr4you"), S.Literal("cornerstoneondemand"), S.Literal("zvooverecruit"), S.Literal("odoo"), S.Literal("comeet"), S.Literal("compleet"), S.Literal("compleetpitcher"), S.Literal("gem"), S.Literal("laura"), S.Literal("covetorest"), S.Literal("coveto"), S.Literal("mercury"), S.Literal("crelate"), S.Literal("manatal"), S.Literal("avionte"), S.Literal("mhmhr"), S.Literal("asymbl"), S.Literal("breezyhr"), S.Literal("flatchr"), S.Literal("dayforce"), S.Literal("digitalrecruiters"), S.Literal("applicantstack"), S.Literal("reachmee"), S.Literal("talentadore"), S.Literal("sandbox"), S.Literal("guidecom"), S.Literal("spott"), S.Literal("loxo"), S.Literal("kula"), S.Literal("workdaycustomreport"), S.Literal("workdaycustomreportsftp"), S.Literal("ukgprowfm"), S.Literal("payfitcustomer"), S.Literal("payfitpartner"), S.Literal("payfit"), S.Literal("employmenthero"), S.Literal("fourth"), S.Literal("kenjo"), S.Literal("heavenhr"), S.Literal("hibob"), S.Literal("cezannehr"), S.Literal("entraid"), S.Literal("azuread"), S.Literal("googleworkspace"), S.Literal("nmbrs"), S.Literal("deel"), S.Literal("remotecom"), S.Literal("iriscascade"), S.Literal("okta"), S.Literal("sagepeople"), S.Literal("humaans"), S.Literal("eurecia"), S.Literal("oraclehcm"), S.Literal("officient"), S.Literal("sesamehr"), S.Literal("charliehr"), S.Literal("abacus"), S.Literal("zohopeople"), S.Literal("gusto"), S.Literal("breathehr"), S.Literal("catalystone"), S.Literal("mirus"), S.Literal("alexishr"), S.Literal("simployer"), S.Literal("peple"), S.Literal("youserve"), S.Literal("hansalog"), S.Literal("lattice"), S.Literal("latticetalent"), S.Literal("hoorayhr"), S.Literal("trinet"), S.Literal("trinetpeo"), S.Literal("namely"), S.Literal("paycom"), S.Literal("insperity"), S.Literal("paychex"), S.Literal("rippling"), S.Literal("sapling"), S.Literal("peoplehr"), S.Literal("lucca"), S.Literal("zelt"), S.Literal("planday"), S.Literal("boondmanager"), S.Literal("haileyhr"), S.Literal("silae"), S.Literal("oysterhr"), S.Literal("kiwihr"), S.Literal("square"), S.Literal("perbilityhelix"), S.Literal("leapsome"), S.Literal("loket"), S.Literal("workforcecom"), S.Literal("peoplefirst"), S.Literal("sdworx"), S.Literal("itrent"), S.Literal("absenceio"), S.Literal("a3innuvanomina"), S.Literal("scim"), S.Literal("datevlauds"), S.Literal("datevhr"), S.Literal("datev"), S.Literal("datevlug"), S.Literal("sympa"), S.Literal("youforce"), S.Literal("nibelis"), S.Literal("peoplexd"), S.Literal("sftp"), S.Literal("sftpfetch"), S.Literal("360learning"), S.Literal("talentlms"), S.Literal("udemy"), S.Literal("linkedinlearning"), S.Literal("moodle")))), language: NullOr_default_en_prop, scope_config_id: S.optional(S.NullOr(S.String)), enable_filtering: Boolean_default_false_prop, enable_field_mapping: Boolean_default_false_prop, link_type: Union_default_EMBEDDED_prop });
export type PostConnectCreateLinkRequestBody = S.Schema.Type<typeof PostConnectCreateLinkRequestBody>;

export const GetConnectIntegrationByTokenTokenParameterToken = S.String;
export type GetConnectIntegrationByTokenTokenParameterToken = S.Schema.Type<typeof GetConnectIntegrationByTokenTokenParameterToken>;

export const GetConnectIntegrationByTokenTokenPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ tool: S.String, id: S.String, end_user_origin_id: S.NullOr(S.String), end_user_organization_name: S.String, end_user_email: S.NullOr(S.String.pipe(S.pattern(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$")))), setup_status: S.Union(S.Literal("INCOMPLETE"), S.Literal("FINAL_SYNC_PENDING"), S.Literal("COMPLETED")) }) });
export type GetConnectIntegrationByTokenTokenPositiveResponse = S.Schema.Type<typeof GetConnectIntegrationByTokenTokenPositiveResponse>;

export const PostConnectActivateIntegrationPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ tool: S.String, id: S.String, end_user_origin_id: S.NullOr(S.String), end_user_organization_name: S.String, end_user_email: S.NullOr(S.String.pipe(S.pattern(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$")))), setup_status: S.Union(S.Literal("INCOMPLETE"), S.Literal("FINAL_SYNC_PENDING"), S.Literal("COMPLETED")) }) });
export type PostConnectActivateIntegrationPositiveResponse = S.Schema.Type<typeof PostConnectActivateIntegrationPositiveResponse>;

export const PostConnectActivateIntegrationRequestBody = S.Struct({ token: S.String });
export type PostConnectActivateIntegrationRequestBody = S.Schema.Type<typeof PostConnectActivateIntegrationRequestBody>;

export const GetCustomDatevSystemInformationPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ consultant_number: S.Number.pipe(S.greaterThanOrEqualTo(1000), S.lessThanOrEqualTo(9999999)), client_number: S.Number.pipe(S.greaterThanOrEqualTo(1), S.lessThanOrEqualTo(99999)), target_system: S.Union(S.Literal("LODAS"), S.Literal("LuG")) }) });
export type GetCustomDatevSystemInformationPositiveResponse = S.Schema.Type<typeof GetCustomDatevSystemInformationPositiveResponse>;

export const PostCustomDatevPassthroughPositiveResponse = S.Struct({ status: S.String, data: S.Record({ key: S.String, value: S.Unknown }), warnings: S.Array(S.Struct({ message: S.String })) });
export type PostCustomDatevPassthroughPositiveResponse = S.Schema.Type<typeof PostCustomDatevPassthroughPositiveResponse>;

export const PostCustomDatevPassthroughRequestBody = S.Struct({ file_content: S.String.pipe(S.minLength(1)), accounting_month: S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))), target_system: S.Union(S.Literal("LODAS"), S.Literal("LuG")), file_type: S.Union(S.Literal("STAMMDATEN"), S.Literal("BEWEGUNGSDATEN")), file_name: S.String });
export type PostCustomDatevPassthroughRequestBody = S.Schema.Type<typeof PostCustomDatevPassthroughRequestBody>;

export const GetCustomDatevCheckEauPermissionPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ ready: S.Boolean, error: S.optional(S.String) }), warnings: S.Array(S.Struct({ message: S.String })) });
export type GetCustomDatevCheckEauPermissionPositiveResponse = S.Schema.Type<typeof GetCustomDatevCheckEauPermissionPositiveResponse>;

export const GetCustomDatevEauRequestsEauIdParameterEauId = S.String;
export type GetCustomDatevEauRequestsEauIdParameterEauId = S.Schema.Type<typeof GetCustomDatevEauRequestsEauIdParameterEauId>;

export const GetCustomDatevEauRequestsEauIdPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ raw: S.Struct({ source: S.String, start_work_incapacity: S.String, collaboration_identifier: S.optional(S.String), feedbacks_from_health_insurance: S.Array(S.Struct({ guid: S.String, contact_person: S.NullOr(S.Struct({ gender_contact_person: S.optional(S.NullOr(S.Union(S.Literal("M"), S.Literal("F"), S.Literal("X"), S.Literal("D")))), name: S.String, telephone: S.String, fax: S.NullOr(S.String), email: S.NullOr(S.String), name1_health_insurance: S.String, name2_health_insurance: S.optional(S.NullOr(S.String)), name3_health_insurance: S.optional(S.NullOr(S.String)), postal_code: S.String, city: S.String, street: S.NullOr(S.String), house_number: S.NullOr(S.String) })), incapacity_for_work: S.Struct({ start_work_incapacity_employer: S.String, start_work_incapacity_au: S.NullOr(S.String), end_work_incapacity_au: S.NullOr(S.String), actual_end_work_incapacity_au: S.optional(S.NullOr(S.String)), date_of_diagnosis: S.NullOr(S.String), flag_current_work_incapacity: S.NullOr(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), accident_at_work: S.Boolean, assignment_accident_insurance_doctor: S.Boolean, other_accident: S.Boolean, start_hospitalisation: S.optional(S.NullOr(S.String)), end_hospitalisation: S.optional(S.NullOr(S.String)), initial_certificate: S.Boolean, automatic_feedback_until: S.NullOr(S.String) }), error_block_list: S.NullOr(S.Array(S.Struct({ origin: S.NullOr(S.String), error_number: S.NullOr(S.String), error_text: S.NullOr(S.String), error_value: S.NullOr(S.String) }))) })) }) }), warnings: S.Array(S.Struct({ message: S.String })) });
export type GetCustomDatevEauRequestsEauIdPositiveResponse = S.Schema.Type<typeof GetCustomDatevEauRequestsEauIdPositiveResponse>;

export const GetCustomDatevCheckDocumentPermissionPositiveResponse = S.Struct({ status: S.String, data: S.Union(S.Struct({ ready: S.Boolean, documents_granted: S.Array(S.String) }), S.Struct({ ready: S.Boolean, error: S.String })), warnings: S.Array(S.Struct({ message: S.String })) });
export type GetCustomDatevCheckDocumentPermissionPositiveResponse = S.Schema.Type<typeof GetCustomDatevCheckDocumentPermissionPositiveResponse>;

export const GetCustomDatevAvailableDocumentsParameterPeriod = S.String;
export type GetCustomDatevAvailableDocumentsParameterPeriod = S.Schema.Type<typeof GetCustomDatevAvailableDocumentsParameterPeriod>;

export const GetCustomDatevAvailableDocumentsPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ results: S.Array(S.Struct({ document_type: S.String, available_for_employees: S.Array(S.Struct({ id: S.NullOr(S.String), remote_id: S.String })), is_company_document: S.Boolean })) }), warnings: S.Array(S.Struct({ message: S.String })) });
export type GetCustomDatevAvailableDocumentsPositiveResponse = S.Schema.Type<typeof GetCustomDatevAvailableDocumentsPositiveResponse>;

export const PostCustomDatevDownloadDocumentPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ data_url: S.String, file_name: S.String, content_type: S.String }), warnings: S.Array(S.Struct({ message: S.String })) });
export type PostCustomDatevDownloadDocumentPositiveResponse = S.Schema.Type<typeof PostCustomDatevDownloadDocumentPositiveResponse>;

export const PostCustomDatevDownloadDocumentRequestBody = S.Struct({ accounting_month: S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))), document_type: S.Union(S.Literal("AANB"), S.Literal("ABEG"), S.Literal("BUBE"), S.Literal("DAWE"), S.Literal("KBNW"), S.Literal("KOST"), S.Literal("KOTR"), S.Literal("LKTO"), S.Literal("LOBN"), S.Literal("LJOE"), S.Literal("LOJE"), S.Literal("LOJO"), S.Literal("LOPE"), S.Literal("LOPN"), S.Literal("LOPS"), S.Literal("LORE"), S.Literal("LOWE"), S.Literal("LSTA"), S.Literal("LSTB"), S.Literal("LSTE"), S.Literal("PDAT"), S.Literal("PFAN"), S.Literal("PRZA"), S.Literal("SBNW"), S.Literal("SVNW"), S.Literal("WEAN"), S.Literal("ZABR"), S.Literal("ZAKF"), S.Literal("ZAUW")), employee_id: S.NullOr(S.String) });
export type PostCustomDatevDownloadDocumentRequestBody = S.Schema.Type<typeof PostCustomDatevDownloadDocumentRequestBody>;

export const PostCustomDatevEmployeesEmployeeIdDownloadDocumentParameterEmployeeId = S.String;
export type PostCustomDatevEmployeesEmployeeIdDownloadDocumentParameterEmployeeId = S.Schema.Type<typeof PostCustomDatevEmployeesEmployeeIdDownloadDocumentParameterEmployeeId> | null;

export const PostCustomDatevEmployeesEmployeeIdDownloadDocumentPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ data_url: S.String, file_name: S.String, content_type: S.String }), warnings: S.Array(S.Struct({ message: S.String })) });
export type PostCustomDatevEmployeesEmployeeIdDownloadDocumentPositiveResponse = S.Schema.Type<typeof PostCustomDatevEmployeesEmployeeIdDownloadDocumentPositiveResponse>;

export const PostCustomDatevEmployeesEmployeeIdDownloadDocumentRequestBody = S.Struct({ accounting_month: S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))), document_type: S.Union(S.Literal("AANB"), S.Literal("ABEG"), S.Literal("BUBE"), S.Literal("DAWE"), S.Literal("KBNW"), S.Literal("KOST"), S.Literal("KOTR"), S.Literal("LKTO"), S.Literal("LOBN"), S.Literal("LJOE"), S.Literal("LOJE"), S.Literal("LOJO"), S.Literal("LOPE"), S.Literal("LOPN"), S.Literal("LOPS"), S.Literal("LORE"), S.Literal("LOWE"), S.Literal("LSTA"), S.Literal("LSTB"), S.Literal("LSTE"), S.Literal("PDAT"), S.Literal("PFAN"), S.Literal("PRZA"), S.Literal("SBNW"), S.Literal("SVNW"), S.Literal("WEAN"), S.Literal("ZABR"), S.Literal("ZAKF"), S.Literal("ZAUW")) });
export type PostCustomDatevEmployeesEmployeeIdDownloadDocumentRequestBody = S.Schema.Type<typeof PostCustomDatevEmployeesEmployeeIdDownloadDocumentRequestBody>;

export const PostCustomDatevEmployeesEmployeeIdEauRequestsParameterEmployeeId = S.String;
export type PostCustomDatevEmployeesEmployeeIdEauRequestsParameterEmployeeId = S.Schema.Type<typeof PostCustomDatevEmployeesEmployeeIdEauRequestsParameterEmployeeId>;

export const PostCustomDatevEmployeesEmployeeIdEauRequestsPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ eau_id: S.String }), warnings: S.Array(S.Struct({ message: S.String })) });
export type PostCustomDatevEmployeesEmployeeIdEauRequestsPositiveResponse = S.Schema.Type<typeof PostCustomDatevEmployeesEmployeeIdEauRequestsPositiveResponse>;

export const PostCustomDatevEmployeesEmployeeIdEauRequestsRequestBody = S.Struct({ start_work_incapacity: S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}$"))), notification: S.optional(S.Struct({ email: S.String.pipe(S.pattern(new RegExp("^[\\w!#$%&'*+/=?^`{|}~-]+(?:\\.[\\w!#$%&'*+/=?^`{|}~-]+)*@(?:[\\w-]+\\.)+[\\w-]{2,}$"))) })), contact_person: S.optional(S.Struct({ gender: S.Union(S.Literal("M"), S.Literal("W"), S.Literal("X"), S.Literal("D")), name: S.String.pipe(S.minLength(0), S.maxLength(30)), telephone: S.String.pipe(S.minLength(0), S.maxLength(20), S.pattern(new RegExp("([\\d+])[\\d ()/-]+"))), fax: S.String.pipe(S.minLength(0), S.maxLength(20), S.pattern(new RegExp("([\\d+])[\\d ()/-]+"))), email: S.String.pipe(S.minLength(0), S.maxLength(70), S.pattern(new RegExp("^(?=.{1,64}@)[\\w-]+(\\.[\\w-]+)*@[^-][\\dA-Za-z-]+(\\.[\\dA-Za-z-]+)*(\\.[A-Za-z]{2,})$"))), company_name: S.String.pipe(S.minLength(0), S.maxLength(90)), postal_code: S.String.pipe(S.minLength(0), S.maxLength(10), S.pattern(new RegExp("[\\dA-Za-z]*"))), city: S.String.pipe(S.minLength(0), S.maxLength(34)), street: S.String.pipe(S.minLength(0), S.maxLength(33)), house_number: S.String.pipe(S.minLength(0), S.maxLength(9)) })) });
export type PostCustomDatevEmployeesEmployeeIdEauRequestsRequestBody = S.Schema.Type<typeof PostCustomDatevEmployeesEmployeeIdEauRequestsRequestBody>;

export const PutCustomDatevEmployeesEmployeeIdPreparePayrollParameterEmployeeId = S.String;
export type PutCustomDatevEmployeesEmployeeIdPreparePayrollParameterEmployeeId = S.Schema.Type<typeof PutCustomDatevEmployeesEmployeeIdPreparePayrollParameterEmployeeId>;

export const PutCustomDatevEmployeesEmployeeIdPreparePayrollPositiveResponse = S.Struct({ status: S.String, data: S.Record({ key: S.String, value: S.Unknown }), warnings: S.Array(S.Struct({ message: S.String })) });
export type PutCustomDatevEmployeesEmployeeIdPreparePayrollPositiveResponse = S.Schema.Type<typeof PutCustomDatevEmployeesEmployeeIdPreparePayrollPositiveResponse>;

export const PutCustomDatevEmployeesEmployeeIdPreparePayrollRequestBody = S.Struct({ payroll_run: S.Struct({ date: S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))) }), hourly_payments: S.Array(S.Struct({ hours: S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308)), lohnart: S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308)) })), fixed_payments: S.Array(S.Struct({ amount: S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308)), lohnart: S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308)) })), custom_lodas: Array_default_value_prop_22 });
export type PutCustomDatevEmployeesEmployeeIdPreparePayrollRequestBody = S.Schema.Type<typeof PutCustomDatevEmployeesEmployeeIdPreparePayrollRequestBody>;

export const PutCustomDatevEmployeesEmployeeIdCompensationsParameterEmployeeId = S.String;
export type PutCustomDatevEmployeesEmployeeIdCompensationsParameterEmployeeId = S.Schema.Type<typeof PutCustomDatevEmployeesEmployeeIdCompensationsParameterEmployeeId>;

export const PutCustomDatevEmployeesEmployeeIdCompensationsPositiveResponse = S.Struct({ status: S.String, data: S.Record({ key: S.String, value: S.Unknown }), warnings: S.Array(S.Struct({ message: S.String })) });
export type PutCustomDatevEmployeesEmployeeIdCompensationsPositiveResponse = S.Schema.Type<typeof PutCustomDatevEmployeesEmployeeIdCompensationsPositiveResponse>;

export const PutCustomDatevEmployeesEmployeeIdCompensationsRequestBody = S.Struct({ effective_date: S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))), compensations: S.Array(S.Struct({ amount: S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308)), currency: S.String, period: S.Union(S.Literal("HOUR"), S.Literal("MONTH")), lohnart: S.optional(S.Int.pipe(S.greaterThanOrEqualTo(1), S.lessThanOrEqualTo(9999))) })) });
export type PutCustomDatevEmployeesEmployeeIdCompensationsRequestBody = S.Schema.Type<typeof PutCustomDatevEmployeesEmployeeIdCompensationsRequestBody>;

export const GetCustomDatevCheckWritePermissionPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ ready: S.Boolean, error: S.optional(S.String) }), warnings: S.Array(S.Struct({ message: S.String })) });
export type GetCustomDatevCheckWritePermissionPositiveResponse = S.Schema.Type<typeof GetCustomDatevCheckWritePermissionPositiveResponse>;

export const GetCustomDatevDataPushesPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ data_pushes: S.Array(S.Struct({ id: S.String, type: S.Union(S.Literal("GENERAL"), S.Literal("PAYROLL")), created_at: S.String, upload_jobs: S.Array(S.Struct({ id: S.String, file_name: S.String, state: S.Union(S.Literal("FAILED"), S.Literal("UPLOADED"), S.Literal("IMPORTED"), S.Literal("CORRUPTED"), S.Literal("DELETED"), S.Literal("AUTO_DELETED")), file: S.String })) })) }) });
export type GetCustomDatevDataPushesPositiveResponse = S.Schema.Type<typeof GetCustomDatevDataPushesPositiveResponse>;

export const PostCustomDatevPushDataGeneralPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ files: S.Array(S.Struct({ name: S.String, content: S.String })) }), warnings: S.Array(S.Struct({ message: S.String })) });
export type PostCustomDatevPushDataGeneralPositiveResponse = S.Schema.Type<typeof PostCustomDatevPushDataGeneralPositiveResponse>;

export const PostCustomDatevPushDataGeneralRequestBody = S.Record({ key: S.String, value: S.Unknown });
export type PostCustomDatevPushDataGeneralRequestBody = S.Schema.Type<typeof PostCustomDatevPushDataGeneralRequestBody>;

export const PostCustomDatevPushDataPayrollPositiveResponse = S.Struct({ status: S.String, data: S.Struct({ files: S.Array(S.Struct({ name: S.String, content: S.String })) }), warnings: S.Array(S.Struct({ message: S.String })) });
export type PostCustomDatevPushDataPayrollPositiveResponse = S.Schema.Type<typeof PostCustomDatevPushDataPayrollPositiveResponse>;

export const PostCustomDatevPushDataPayrollRequestBody = S.Struct({ payroll_month: S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))) });
export type PostCustomDatevPushDataPayrollRequestBody = S.Schema.Type<typeof PostCustomDatevPushDataPayrollRequestBody>;

export const PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsParameterEmployeeId = S.String;
export type PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsParameterEmployeeId = S.Schema.Type<typeof PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsParameterEmployeeId>;

export const PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsPositiveResponse = S.Struct({ status: S.String, data: S.Record({ key: S.String, value: S.Unknown }), warnings: S.Array(S.Struct({ message: S.String })) });
export type PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsPositiveResponse = S.Schema.Type<typeof PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsPositiveResponse>;

export const PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsRequestBody = S.Struct({ supplement_code: S.String, effective_date: S.String.pipe(S.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))), element_amount: S.optional(S.Number.pipe(S.greaterThanOrEqualTo(-1.7976931348623157e+308))), element_string: S.optional(S.String) });
export type PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsRequestBody = S.Schema.Type<typeof PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsRequestBody>;

export const DataChangedWebhookPayload = S.Struct({ id: S.String, type: S.Literal("data-changed"), data: S.Struct({ integration_id: S.String, integration_tool: S.String, integration_category: S.Union(S.Literal("HRIS"), S.Literal("ATS"), S.Literal("ASSESSMENT"), S.Literal("LMS")), changed_models: S.Array(S.Struct({ name: S.Union(S.Literal("hris_legal_entities"), S.Literal("hris_locations"), S.Literal("hris_employees"), S.Literal("hris_absence_types"), S.Literal("hris_absences"), S.Literal("hris_employments"), S.Literal("hris_teams"), S.Literal("hris_time_off_balances"), S.Literal("hris_timesheets"), S.Literal("hris_employee_document_categories"), S.Literal("hris_performance_reviews"), S.Literal("hris_performance_review_cycles"), S.Literal("hris_staffing_entities"), S.Literal("ats_users"), S.Literal("ats_jobs"), S.Literal("ats_job_postings"), S.Literal("ats_candidates"), S.Literal("ats_application_stages"), S.Literal("ats_applications"), S.Literal("ats_screening_questions"), S.Literal("ats_tags"), S.Literal("ats_interviews"), S.Literal("ats_offers"), S.Literal("ats_rejection_reasons"), S.Literal("ats_roles"), S.Literal("lms_users"), S.Literal("lms_course_providers"), S.Literal("lms_skills"), S.Literal("lms_courses"), S.Literal("lms_course_revisions"), S.Literal("lms_course_progressions"), S.Literal("hris_join_employees_teams"), S.Literal("hris_join_staffing_entities_locations"), S.Literal("hris_join_staffing_entities_legal_entities"), S.Literal("hris_join_staffing_entities_groups"), S.Literal("ats_join_candidates_tags"), S.Literal("ats_join_jobs_application_stages"), S.Literal("ats_join_jobs_screening_questions"), S.Literal("ats_join_user_job_role_assignments"), S.Literal("ats_join_jobs_users"), S.Literal("ats_join_users_roles"), S.Literal("ats_join_interviews_users"), S.Literal("lms_join_revisions_skills")) })) }) });
export type DataChangedWebhookPayload = S.Schema.Type<typeof DataChangedWebhookPayload>;

export const ConnectionFlowFailedWebhookPayload = S.Struct({ id: S.String, type: S.Literal("connection-flow-failed"), data: S.Struct({ integration_tool: S.String, integration_category: S.Union(S.Literal("HRIS"), S.Literal("ATS"), S.Literal("ASSESSMENT"), S.Literal("LMS")), end_user: S.Struct({ organization_name: S.String, creator_email: S.NullOr(S.String.pipe(S.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))), origin_id: S.NullOr(S.String) }), log_url: S.String }) });
export type ConnectionFlowFailedWebhookPayload = S.Schema.Type<typeof ConnectionFlowFailedWebhookPayload>;

export const IntegrationCreatedWebhookPayload = S.Struct({ id: S.String, type: S.Literal("integration-created"), data: S.Struct({ id: S.String, tool: S.String, category: S.Union(S.Literal("HRIS"), S.Literal("ATS"), S.Literal("ASSESSMENT"), S.Literal("LMS")), end_user: S.Struct({ organization_name: S.String, creator_email: S.NullOr(S.String.pipe(S.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))), origin_id: S.NullOr(S.String) }) }) });
export type IntegrationCreatedWebhookPayload = S.Schema.Type<typeof IntegrationCreatedWebhookPayload>;

export const IntegrationDeletedWebhookPayload = S.Struct({ id: S.String, type: S.Literal("integration-deleted"), data: S.Struct({ id: S.String, tool: S.String, category: S.Union(S.Literal("HRIS"), S.Literal("ATS"), S.Literal("ASSESSMENT"), S.Literal("LMS")), end_user: S.Struct({ organization_name: S.String, creator_email: S.NullOr(S.String.pipe(S.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))), origin_id: S.NullOr(S.String) }), deleted_at: S.String }) });
export type IntegrationDeletedWebhookPayload = S.Schema.Type<typeof IntegrationDeletedWebhookPayload>;

export const AssessmentOrderReceivedWebhookPayload = S.Struct({ id: S.String, type: S.Literal("assessment:order-received"), data: S.Struct({ id: S.String, package_id: S.String, status: S.Union(S.Literal("OPEN"), S.Literal("COMPLETED"), S.Literal("CANCELLED"), S.Literal("REJECTED")), integration_id: S.String, candidate: S.Struct({ remote_id: S.NullOr(S.String), email: S.String.pipe(S.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)), first_name: S.NullOr(S.String), last_name: S.NullOr(S.String), phone: S.NullOr(S.String) }), application: S.Struct({ remote_id: S.NullOr(S.String) }), job: S.Struct({ remote_id: S.NullOr(S.String), name: S.NullOr(S.String), job_code: S.NullOr(S.String), description: S.NullOr(S.String), location: S.NullOr(S.Struct({ street_1: S.optional(S.NullOr(S.String)), street_2: S.optional(S.NullOr(S.String)), city: S.optional(S.NullOr(S.String)), state: S.optional(S.NullOr(S.String)), zip_code: S.optional(S.NullOr(S.String)), country: S.optional(S.NullOr(S.String)), raw: S.optional(S.NullOr(S.String)) })), hiring_team: S.Array(S.Struct({ remote_id: S.NullOr(S.String), email: S.NullOr(S.String), first_name: S.NullOr(S.String), last_name: S.NullOr(S.String), hiring_team_roles: S.Array(S.Union(S.Literal("RECRUITER"), S.Literal("HIRING_MANAGER"))) })) }) }) });
export type AssessmentOrderReceivedWebhookPayload = S.Schema.Type<typeof AssessmentOrderReceivedWebhookPayload>;

export const InlineAssessmentOrderReceivedWebhookPayload = S.Struct({ id: S.String, type: S.Literal("inline-assessment:order-received"), data: S.Struct({ id: S.String, package_id: S.String, status: S.Union(S.Literal("OPEN"), S.Literal("COMPLETED"), S.Literal("CANCELLED"), S.Literal("REJECTED")), integration_id: S.String, candidate: S.Struct({ remote_id: S.NullOr(S.String), email: S.String.pipe(S.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)), first_name: S.NullOr(S.String), last_name: S.NullOr(S.String), phone: S.NullOr(S.String) }), application: S.Struct({ remote_id: S.NullOr(S.String) }), job: S.Struct({ remote_id: S.NullOr(S.String), name: S.NullOr(S.String), job_code: S.NullOr(S.String), description: S.NullOr(S.String), location: S.NullOr(S.Struct({ street_1: S.optional(S.NullOr(S.String)), street_2: S.optional(S.NullOr(S.String)), city: S.optional(S.NullOr(S.String)), state: S.optional(S.NullOr(S.String)), zip_code: S.optional(S.NullOr(S.String)), country: S.optional(S.NullOr(S.String)), raw: S.optional(S.NullOr(S.String)) })), hiring_team: S.Array(S.Struct({ remote_id: S.NullOr(S.String), email: S.NullOr(S.String), first_name: S.NullOr(S.String), last_name: S.NullOr(S.String), hiring_team_roles: S.Array(S.Union(S.Literal("RECRUITER"), S.Literal("HIRING_MANAGER"))) })) }) }) });
export type InlineAssessmentOrderReceivedWebhookPayload = S.Schema.Type<typeof InlineAssessmentOrderReceivedWebhookPayload>;

export const IntegrationStateChangedWebhookPayload = S.Struct({ id: S.String, type: S.Literal("integration-state-changed"), data: S.Struct({ integration_tool: S.String, integration_id: S.String, integration_category: S.Union(S.Literal("HRIS"), S.Literal("ATS"), S.Literal("ASSESSMENT"), S.Literal("LMS")), end_user: S.Struct({ organization_name: S.String, creator_email: S.NullOr(S.String.pipe(S.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))), origin_id: S.NullOr(S.String) }), qa_status: S.Union(S.Literal("PENDING"), S.Literal("FAILED"), S.Literal("PASSED")), setup_status: S.Union(S.Literal("INCOMPLETE"), S.Literal("FINAL_SYNC_PENDING"), S.Literal("COMPLETED")), state: S.Union(S.Literal("ACTIVE"), S.Literal("INVALID"), S.Literal("INACTIVE")), updated_at: S.String }) });
export type IntegrationStateChangedWebhookPayload = S.Schema.Type<typeof IntegrationStateChangedWebhookPayload>;

export const AiApplyApplicationStatusUpdatedWebhookPayload = S.Struct({ id: S.String, type: S.Literal("ai-apply-application-status-updated"), data: S.Struct({ id: S.String, job_posting_id: S.String, status: S.Union(S.Literal("SUBMITTED"), S.Literal("DUPLICATE"), S.Literal("PENDING"), S.Literal("FAILED")), created_at: S.String, updated_at: S.String }) });
export type AiApplyApplicationStatusUpdatedWebhookPayload = S.Schema.Type<typeof AiApplyApplicationStatusUpdatedWebhookPayload>;

export const AiApplyJobPostingStatusUpdatedWebhookPayload = S.Struct({ id: S.String, type: S.Literal("ai-apply-job-posting-status-updated"), data: S.Struct({ id: S.String, career_site: S.Struct({ id: S.String, label: S.String }), url: S.String, job_code: S.NullOr(S.String), created_at: S.String, updated_at: S.String, archived_at: S.NullOr(S.String), archived_reason: S.NullOr(S.Union(S.Literal("JOB_POSTING_TAKEN_OFFLINE"), S.Literal("MANUAL_ARCHIVE"), S.Literal("REMOVED_FROM_JOB_FEED"))), availability: S.Union(S.Literal("APPLYABLE"), S.Literal("PENDING"), S.Literal("ARCHIVED"), S.Literal("UNAVAILABLE")) }) });
export type AiApplyJobPostingStatusUpdatedWebhookPayload = S.Schema.Type<typeof AiApplyJobPostingStatusUpdatedWebhookPayload>;

export const SyncFinishedWebhookPayload = S.Struct({ id: S.String, type: S.Literal("sync-finished"), data: S.Struct({ sync_id: S.String, sync_state: S.String, sync_started_at: S.String, sync_ended_at: S.String, sync_duration_seconds: S.Int.pipe(S.greaterThanOrEqualTo(0)), integration_id: S.String, integration_tool: S.String, integration_category: S.Union(S.Literal("HRIS"), S.Literal("ATS"), S.Literal("ASSESSMENT"), S.Literal("LMS")), end_user: S.Struct({ organization_name: S.String, creator_email: S.NullOr(S.String.pipe(S.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))), origin_id: S.NullOr(S.String) }), log_url: S.String }) });
export type SyncFinishedWebhookPayload = S.Schema.Type<typeof SyncFinishedWebhookPayload>;

export const BulkImportJobPostingLocation = S.Struct({ country: S.String, postal_code: S.optional(S.String) });
export type BulkImportJobPostingLocation = S.Schema.Type<typeof BulkImportJobPostingLocation>;

export const BulkImportJobPostingInput = S.Struct({ url: S.String, career_site_label: S.String, job_code: S.optional(S.String), location: S.optional(S.NullOr(BulkImportJobPostingLocation)) });
export type BulkImportJobPostingInput = S.Schema.Type<typeof BulkImportJobPostingInput>;

export const BulkImportResponse = S.Struct({ status: S.Literal("success"), data: S.Struct({ created: S.Int, processed: S.Int, archived: S.Int }) });
export type BulkImportResponse = S.Schema.Type<typeof BulkImportResponse>;

// </Schemas>

// <Endpoints>
export type get_GetCheckApiKey = typeof get_GetCheckApiKey;
export const get_GetCheckApiKey = {
  method: S.Literal("GET"),
  path: S.Literal("/check-api-key"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: S.Never,
  responses: { 200: GetCheckApiKeyPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type post_PostForceSync = typeof post_PostForceSync;
export const post_PostForceSync = {
  method: S.Literal("POST"),
  path: S.Literal("/force-sync"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { header: S.Struct({ "X-Integration-Id": S.String }), body: PostForceSyncRequestBody },
  responses: { 200: PostForceSyncPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type post_PostPassthroughToolApi = typeof post_PostPassthroughToolApi;
export const post_PostPassthroughToolApi = {
  method: S.Literal("POST"),
  path: S.Literal("/passthrough/{tool}/{api}"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ tool: PostPassthroughToolApiParameterTool, api: PostPassthroughToolApiParameterApi }), header: S.Struct({ "X-Integration-Id": S.String }), body: PostPassthroughToolApiRequestBody },
  responses: { 200: PostPassthroughToolApiPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type delete_DeleteIntegrationsIntegrationId = typeof delete_DeleteIntegrationsIntegrationId;
export const delete_DeleteIntegrationsIntegrationId = {
  method: S.Literal("DELETE"),
  path: S.Literal("/integrations/{integration_id}"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ integration_id: DeleteIntegrationsIntegrationIdParameterIntegrationId }), body: DeleteIntegrationsIntegrationIdRequestBody },
  responses: { 200: DeleteIntegrationsIntegrationIdPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type get_GetIntegrationsIntegrationId = typeof get_GetIntegrationsIntegrationId;
export const get_GetIntegrationsIntegrationId = {
  method: S.Literal("GET"),
  path: S.Literal("/integrations/{integration_id}"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ integration_id: GetIntegrationsIntegrationIdParameterIntegrationId }) },
  responses: { 200: GetIntegrationsIntegrationIdPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type put_PutIntegrationsIntegrationIdEnabled = typeof put_PutIntegrationsIntegrationIdEnabled;
export const put_PutIntegrationsIntegrationIdEnabled = {
  method: S.Literal("PUT"),
  path: S.Literal("/integrations/{integration_id}/enabled"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ integration_id: PutIntegrationsIntegrationIdEnabledParameterIntegrationId }), body: PutIntegrationsIntegrationIdEnabledRequestBody },
  responses: { 200: PutIntegrationsIntegrationIdEnabledPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type post_PostIntegrationsIntegrationIdRelink = typeof post_PostIntegrationsIntegrationIdRelink;
export const post_PostIntegrationsIntegrationIdRelink = {
  method: S.Literal("POST"),
  path: S.Literal("/integrations/{integration_id}/relink"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ integration_id: PostIntegrationsIntegrationIdRelinkParameterIntegrationId }), body: PostIntegrationsIntegrationIdRelinkRequestBody },
  responses: { 200: PostIntegrationsIntegrationIdRelinkPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type post_PostIntegrationsIntegrationIdSetupLink = typeof post_PostIntegrationsIntegrationIdSetupLink;
export const post_PostIntegrationsIntegrationIdSetupLink = {
  method: S.Literal("POST"),
  path: S.Literal("/integrations/{integration_id}/setup-link"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ integration_id: PostIntegrationsIntegrationIdSetupLinkParameterIntegrationId }), body: PostIntegrationsIntegrationIdSetupLinkRequestBody },
  responses: { 200: PostIntegrationsIntegrationIdSetupLinkPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type get_GetIntegrationsIntegrationIdIntegrationFields = typeof get_GetIntegrationsIntegrationIdIntegrationFields;
export const get_GetIntegrationsIntegrationIdIntegrationFields = {
  method: S.Literal("GET"),
  path: S.Literal("/integrations/{integration_id}/integration-fields"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ cursor: S.optional(GetIntegrationsIntegrationIdIntegrationFieldsParameterCursor), page_size: S.optional(GetIntegrationsIntegrationIdIntegrationFieldsParameterPageSize) })), path: S.Struct({ integration_id: GetIntegrationsIntegrationIdIntegrationFieldsParameterIntegrationId }) },
  responses: { 200: GetIntegrationsIntegrationIdIntegrationFieldsPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type patch_PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldId = typeof patch_PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldId;
export const patch_PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldId = {
  method: S.Literal("PATCH"),
  path: S.Literal("/integrations/{integration_id}/integration-fields/{integration_field_id}"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ integration_id: PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationId, integration_field_id: PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationFieldId }), body: PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdRequestBody },
  responses: { 200: PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type get_GetIntegrationsIntegrationIdCustomFields = typeof get_GetIntegrationsIntegrationIdCustomFields;
export const get_GetIntegrationsIntegrationIdCustomFields = {
  method: S.Literal("GET"),
  path: S.Literal("/integrations/{integration_id}/custom-fields"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ cursor: S.optional(GetIntegrationsIntegrationIdCustomFieldsParameterCursor), page_size: S.optional(GetIntegrationsIntegrationIdCustomFieldsParameterPageSize) })), path: S.Struct({ integration_id: GetIntegrationsIntegrationIdCustomFieldsParameterIntegrationId }) },
  responses: { 200: GetIntegrationsIntegrationIdCustomFieldsPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type put_PutIntegrationsIntegrationIdCustomFieldsCustomFieldId = typeof put_PutIntegrationsIntegrationIdCustomFieldsCustomFieldId;
export const put_PutIntegrationsIntegrationIdCustomFieldsCustomFieldId = {
  method: S.Literal("PUT"),
  path: S.Literal("/integrations/{integration_id}/custom-fields/{custom_field_id}"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ integration_id: PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterIntegrationId, custom_field_id: PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterCustomFieldId }), body: PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdRequestBody },
  responses: { 200: PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type get_GetToolsCategory = typeof get_GetToolsCategory;
export const get_GetToolsCategory = {
  method: S.Literal("GET"),
  path: S.Literal("/tools/{category}"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ category: GetToolsCategoryParameterCategory }) },
  responses: { 200: GetToolsCategoryPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type post_PostHrisProvisioningGroupsGroupIdDiff = typeof post_PostHrisProvisioningGroupsGroupIdDiff;
export const post_PostHrisProvisioningGroupsGroupIdDiff = {
  method: S.Literal("POST"),
  path: S.Literal("/hris/provisioning-groups/{group_id}/diff"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ group_id: PostHrisProvisioningGroupsGroupIdDiffParameterGroupId }), header: S.Struct({ "X-Integration-Id": S.String }), body: PostHrisProvisioningGroupsGroupIdDiffRequestBody },
  responses: { 200: PostHrisProvisioningGroupsGroupIdDiffPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type post_PostHrisProvisioningGroupsGroupIdSetupLinks = typeof post_PostHrisProvisioningGroupsGroupIdSetupLinks;
export const post_PostHrisProvisioningGroupsGroupIdSetupLinks = {
  method: S.Literal("POST"),
  path: S.Literal("/hris/provisioning-groups/{group_id}/setup-links"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ group_id: PostHrisProvisioningGroupsGroupIdSetupLinksParameterGroupId }), header: S.Struct({ "X-Integration-Id": S.String }), body: PostHrisProvisioningGroupsGroupIdSetupLinksRequestBody },
  responses: { 200: PostHrisProvisioningGroupsGroupIdSetupLinksPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type get_GetHrisEmployees = typeof get_GetHrisEmployees;
export const get_GetHrisEmployees = {
  method: S.Literal("GET"),
  path: S.Literal("/hris/employees"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ cursor: S.optional(GetHrisEmployeesParameterCursor), page_size: S.optional(GetHrisEmployeesParameterPageSize), updated_after: S.optional(GetHrisEmployeesParameterUpdatedAfter), include_deleted: S.optional(GetHrisEmployeesParameterIncludeDeleted), ignore_unsupported_filters: S.optional(GetHrisEmployeesParameterIgnoreUnsupportedFilters), ids: S.optional(GetHrisEmployeesParameterIds), remote_ids: S.optional(GetHrisEmployeesParameterRemoteIds), employment_status: S.optional(GetHrisEmployeesParameterEmploymentStatus), employment_statuses: S.optional(GetHrisEmployeesParameterEmploymentStatuses), group_ids: S.optional(GetHrisEmployeesParameterGroupIds), legal_entity_ids: S.optional(GetHrisEmployeesParameterLegalEntityIds), work_location_ids: S.optional(GetHrisEmployeesParameterWorkLocationIds), work_emails: S.optional(GetHrisEmployeesParameterWorkEmails), personal_emails: S.optional(GetHrisEmployeesParameterPersonalEmails), custom_fields: S.optional(GetHrisEmployeesParameterCustomFields) })), header: S.Struct({ "X-Integration-Id": S.String }) },
  responses: { 200: GetHrisEmployeesPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type post_PostHrisEmployees = typeof post_PostHrisEmployees;
export const post_PostHrisEmployees = {
  method: S.Literal("POST"),
  path: S.Literal("/hris/employees"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { header: S.Struct({ "X-Integration-Id": S.String }), body: PostHrisEmployeesRequestBody },
  responses: { 200: PostHrisEmployeesPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type get_GetHrisEmployeesForm = typeof get_GetHrisEmployeesForm;
export const get_GetHrisEmployeesForm = {
  method: S.Literal("GET"),
  path: S.Literal("/hris/employees/form"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { header: S.Struct({ "X-Integration-Id": S.String }) },
  responses: { 200: GetHrisEmployeesFormPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type post_PostHrisEmployeesForm = typeof post_PostHrisEmployeesForm;
export const post_PostHrisEmployeesForm = {
  method: S.Literal("POST"),
  path: S.Literal("/hris/employees/form"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { header: S.Struct({ "X-Integration-Id": S.String }), body: PostHrisEmployeesFormRequestBody },
  responses: { 200: PostHrisEmployeesFormPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type patch_PatchHrisEmployeesEmployeeId = typeof patch_PatchHrisEmployeesEmployeeId;
export const patch_PatchHrisEmployeesEmployeeId = {
  method: S.Literal("PATCH"),
  path: S.Literal("/hris/employees/{employee_id}"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ employee_id: PatchHrisEmployeesEmployeeIdParameterEmployeeId }), header: S.Struct({ "X-Integration-Id": S.String }), body: PatchHrisEmployeesEmployeeIdRequestBody },
  responses: { 200: PatchHrisEmployeesEmployeeIdPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type post_PostHrisEmployeesEmployeeIdDocuments = typeof post_PostHrisEmployeesEmployeeIdDocuments;
export const post_PostHrisEmployeesEmployeeIdDocuments = {
  method: S.Literal("POST"),
  path: S.Literal("/hris/employees/{employee_id}/documents"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ employee_id: PostHrisEmployeesEmployeeIdDocumentsParameterEmployeeId }), header: S.Struct({ "X-Integration-Id": S.String }), body: PostHrisEmployeesEmployeeIdDocumentsRequestBody },
  responses: { 200: PostHrisEmployeesEmployeeIdDocumentsPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type get_GetHrisEmployeeDocumentCategories = typeof get_GetHrisEmployeeDocumentCategories;
export const get_GetHrisEmployeeDocumentCategories = {
  method: S.Literal("GET"),
  path: S.Literal("/hris/employee-document-categories"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ cursor: S.optional(GetHrisEmployeeDocumentCategoriesParameterCursor), page_size: S.optional(GetHrisEmployeeDocumentCategoriesParameterPageSize), updated_after: S.optional(GetHrisEmployeeDocumentCategoriesParameterUpdatedAfter), include_deleted: S.optional(GetHrisEmployeeDocumentCategoriesParameterIncludeDeleted), ignore_unsupported_filters: S.optional(GetHrisEmployeeDocumentCategoriesParameterIgnoreUnsupportedFilters), ids: S.optional(GetHrisEmployeeDocumentCategoriesParameterIds), remote_ids: S.optional(GetHrisEmployeeDocumentCategoriesParameterRemoteIds) })), header: S.Struct({ "X-Integration-Id": S.String }) },
  responses: { 200: GetHrisEmployeeDocumentCategoriesPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type get_GetHrisTeams = typeof get_GetHrisTeams;
export const get_GetHrisTeams = {
  method: S.Literal("GET"),
  path: S.Literal("/hris/teams"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ cursor: S.optional(GetHrisTeamsParameterCursor), page_size: S.optional(GetHrisTeamsParameterPageSize), updated_after: S.optional(GetHrisTeamsParameterUpdatedAfter), include_deleted: S.optional(GetHrisTeamsParameterIncludeDeleted), ignore_unsupported_filters: S.optional(GetHrisTeamsParameterIgnoreUnsupportedFilters), ids: S.optional(GetHrisTeamsParameterIds), remote_ids: S.optional(GetHrisTeamsParameterRemoteIds) })), header: S.Struct({ "X-Integration-Id": S.String }) },
  responses: { 200: GetHrisTeamsPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type get_GetHrisGroups = typeof get_GetHrisGroups;
export const get_GetHrisGroups = {
  method: S.Literal("GET"),
  path: S.Literal("/hris/groups"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ cursor: S.optional(GetHrisGroupsParameterCursor), page_size: S.optional(GetHrisGroupsParameterPageSize), updated_after: S.optional(GetHrisGroupsParameterUpdatedAfter), include_deleted: S.optional(GetHrisGroupsParameterIncludeDeleted), ignore_unsupported_filters: S.optional(GetHrisGroupsParameterIgnoreUnsupportedFilters), ids: S.optional(GetHrisGroupsParameterIds), remote_ids: S.optional(GetHrisGroupsParameterRemoteIds), types: S.optional(GetHrisGroupsParameterTypes), name_contains: S.optional(GetHrisGroupsParameterNameContains) })), header: S.Struct({ "X-Integration-Id": S.String }) },
  responses: { 200: GetHrisGroupsPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type get_GetHrisEmployments = typeof get_GetHrisEmployments;
export const get_GetHrisEmployments = {
  method: S.Literal("GET"),
  path: S.Literal("/hris/employments"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ cursor: S.optional(GetHrisEmploymentsParameterCursor), page_size: S.optional(GetHrisEmploymentsParameterPageSize), updated_after: S.optional(GetHrisEmploymentsParameterUpdatedAfter), include_deleted: S.optional(GetHrisEmploymentsParameterIncludeDeleted), ignore_unsupported_filters: S.optional(GetHrisEmploymentsParameterIgnoreUnsupportedFilters), ids: S.optional(GetHrisEmploymentsParameterIds), remote_ids: S.optional(GetHrisEmploymentsParameterRemoteIds) })), header: S.Struct({ "X-Integration-Id": S.String }) },
  responses: { 200: GetHrisEmploymentsPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type get_GetHrisLocations = typeof get_GetHrisLocations;
export const get_GetHrisLocations = {
  method: S.Literal("GET"),
  path: S.Literal("/hris/locations"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ cursor: S.optional(GetHrisLocationsParameterCursor), page_size: S.optional(GetHrisLocationsParameterPageSize), updated_after: S.optional(GetHrisLocationsParameterUpdatedAfter), include_deleted: S.optional(GetHrisLocationsParameterIncludeDeleted), ignore_unsupported_filters: S.optional(GetHrisLocationsParameterIgnoreUnsupportedFilters), ids: S.optional(GetHrisLocationsParameterIds), remote_ids: S.optional(GetHrisLocationsParameterRemoteIds), name_contains: S.optional(GetHrisLocationsParameterNameContains) })), header: S.Struct({ "X-Integration-Id": S.String }) },
  responses: { 200: GetHrisLocationsPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type get_GetHrisAbsenceTypes = typeof get_GetHrisAbsenceTypes;
export const get_GetHrisAbsenceTypes = {
  method: S.Literal("GET"),
  path: S.Literal("/hris/absence-types"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ cursor: S.optional(GetHrisAbsenceTypesParameterCursor), page_size: S.optional(GetHrisAbsenceTypesParameterPageSize), updated_after: S.optional(GetHrisAbsenceTypesParameterUpdatedAfter), include_deleted: S.optional(GetHrisAbsenceTypesParameterIncludeDeleted), ignore_unsupported_filters: S.optional(GetHrisAbsenceTypesParameterIgnoreUnsupportedFilters), ids: S.optional(GetHrisAbsenceTypesParameterIds), remote_ids: S.optional(GetHrisAbsenceTypesParameterRemoteIds) })), header: S.Struct({ "X-Integration-Id": S.String }) },
  responses: { 200: GetHrisAbsenceTypesPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type get_GetHrisTimeOffBalances = typeof get_GetHrisTimeOffBalances;
export const get_GetHrisTimeOffBalances = {
  method: S.Literal("GET"),
  path: S.Literal("/hris/time-off-balances"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ cursor: S.optional(GetHrisTimeOffBalancesParameterCursor), page_size: S.optional(GetHrisTimeOffBalancesParameterPageSize), updated_after: S.optional(GetHrisTimeOffBalancesParameterUpdatedAfter), include_deleted: S.optional(GetHrisTimeOffBalancesParameterIncludeDeleted), ignore_unsupported_filters: S.optional(GetHrisTimeOffBalancesParameterIgnoreUnsupportedFilters), ids: S.optional(GetHrisTimeOffBalancesParameterIds), remote_ids: S.optional(GetHrisTimeOffBalancesParameterRemoteIds), employee_id: S.optional(GetHrisTimeOffBalancesParameterEmployeeId) })), header: S.Struct({ "X-Integration-Id": S.String }) },
  responses: { 200: GetHrisTimeOffBalancesPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type get_GetHrisAbsences = typeof get_GetHrisAbsences;
export const get_GetHrisAbsences = {
  method: S.Literal("GET"),
  path: S.Literal("/hris/absences"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ cursor: S.optional(GetHrisAbsencesParameterCursor), page_size: S.optional(GetHrisAbsencesParameterPageSize), updated_after: S.optional(GetHrisAbsencesParameterUpdatedAfter), include_deleted: S.optional(GetHrisAbsencesParameterIncludeDeleted), ignore_unsupported_filters: S.optional(GetHrisAbsencesParameterIgnoreUnsupportedFilters), ids: S.optional(GetHrisAbsencesParameterIds), remote_ids: S.optional(GetHrisAbsencesParameterRemoteIds), date_from: S.optional(GetHrisAbsencesParameterDateFrom), date_until: S.optional(GetHrisAbsencesParameterDateUntil), type_ids: S.optional(GetHrisAbsencesParameterTypeIds), employee_id: S.optional(GetHrisAbsencesParameterEmployeeId), time_from: S.optional(GetHrisAbsencesParameterTimeFrom), time_until: S.optional(GetHrisAbsencesParameterTimeUntil) })), header: S.Struct({ "X-Integration-Id": S.String }) },
  responses: { 200: GetHrisAbsencesPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type post_PostHrisAbsences = typeof post_PostHrisAbsences;
export const post_PostHrisAbsences = {
  method: S.Literal("POST"),
  path: S.Literal("/hris/absences"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { header: S.Struct({ "X-Integration-Id": S.String }), body: PostHrisAbsencesRequestBody },
  responses: { 200: PostHrisAbsencesPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type delete_DeleteHrisAbsencesAbsenceId = typeof delete_DeleteHrisAbsencesAbsenceId;
export const delete_DeleteHrisAbsencesAbsenceId = {
  method: S.Literal("DELETE"),
  path: S.Literal("/hris/absences/{absence_id}"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ absence_id: DeleteHrisAbsencesAbsenceIdParameterAbsenceId }), header: S.Struct({ "X-Integration-Id": S.String }), body: DeleteHrisAbsencesAbsenceIdRequestBody },
  responses: { 200: DeleteHrisAbsencesAbsenceIdPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type get_GetHrisLegalEntities = typeof get_GetHrisLegalEntities;
export const get_GetHrisLegalEntities = {
  method: S.Literal("GET"),
  path: S.Literal("/hris/legal-entities"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ cursor: S.optional(GetHrisLegalEntitiesParameterCursor), page_size: S.optional(GetHrisLegalEntitiesParameterPageSize), updated_after: S.optional(GetHrisLegalEntitiesParameterUpdatedAfter), include_deleted: S.optional(GetHrisLegalEntitiesParameterIncludeDeleted), ignore_unsupported_filters: S.optional(GetHrisLegalEntitiesParameterIgnoreUnsupportedFilters), ids: S.optional(GetHrisLegalEntitiesParameterIds), remote_ids: S.optional(GetHrisLegalEntitiesParameterRemoteIds), name_contains: S.optional(GetHrisLegalEntitiesParameterNameContains) })), header: S.Struct({ "X-Integration-Id": S.String }) },
  responses: { 200: GetHrisLegalEntitiesPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type get_GetHrisTimesheets = typeof get_GetHrisTimesheets;
export const get_GetHrisTimesheets = {
  method: S.Literal("GET"),
  path: S.Literal("/hris/timesheets"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ cursor: S.optional(GetHrisTimesheetsParameterCursor), page_size: S.optional(GetHrisTimesheetsParameterPageSize), updated_after: S.optional(GetHrisTimesheetsParameterUpdatedAfter), include_deleted: S.optional(GetHrisTimesheetsParameterIncludeDeleted), ignore_unsupported_filters: S.optional(GetHrisTimesheetsParameterIgnoreUnsupportedFilters), ids: S.optional(GetHrisTimesheetsParameterIds), remote_ids: S.optional(GetHrisTimesheetsParameterRemoteIds), employee_id: S.optional(GetHrisTimesheetsParameterEmployeeId), started_before: S.optional(GetHrisTimesheetsParameterStartedBefore), started_after: S.optional(GetHrisTimesheetsParameterStartedAfter), ended_before: S.optional(GetHrisTimesheetsParameterEndedBefore), ended_after: S.optional(GetHrisTimesheetsParameterEndedAfter) })), header: S.Struct({ "X-Integration-Id": S.String }) },
  responses: { 200: GetHrisTimesheetsPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type get_GetHrisPerformanceReviewCycles = typeof get_GetHrisPerformanceReviewCycles;
export const get_GetHrisPerformanceReviewCycles = {
  method: S.Literal("GET"),
  path: S.Literal("/hris/performance-review-cycles"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ cursor: S.optional(GetHrisPerformanceReviewCyclesParameterCursor), page_size: S.optional(GetHrisPerformanceReviewCyclesParameterPageSize), updated_after: S.optional(GetHrisPerformanceReviewCyclesParameterUpdatedAfter), include_deleted: S.optional(GetHrisPerformanceReviewCyclesParameterIncludeDeleted), ignore_unsupported_filters: S.optional(GetHrisPerformanceReviewCyclesParameterIgnoreUnsupportedFilters), ids: S.optional(GetHrisPerformanceReviewCyclesParameterIds), remote_ids: S.optional(GetHrisPerformanceReviewCyclesParameterRemoteIds) })), header: S.Struct({ "X-Integration-Id": S.String }) },
  responses: { 200: GetHrisPerformanceReviewCyclesPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type get_GetHrisPerformanceReviews = typeof get_GetHrisPerformanceReviews;
export const get_GetHrisPerformanceReviews = {
  method: S.Literal("GET"),
  path: S.Literal("/hris/performance-reviews"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ cursor: S.optional(GetHrisPerformanceReviewsParameterCursor), page_size: S.optional(GetHrisPerformanceReviewsParameterPageSize), updated_after: S.optional(GetHrisPerformanceReviewsParameterUpdatedAfter), include_deleted: S.optional(GetHrisPerformanceReviewsParameterIncludeDeleted), ignore_unsupported_filters: S.optional(GetHrisPerformanceReviewsParameterIgnoreUnsupportedFilters), ids: S.optional(GetHrisPerformanceReviewsParameterIds), remote_ids: S.optional(GetHrisPerformanceReviewsParameterRemoteIds), types: S.optional(GetHrisPerformanceReviewsParameterTypes), review_cycle_ids: S.optional(GetHrisPerformanceReviewsParameterReviewCycleIds), reviewee_ids: S.optional(GetHrisPerformanceReviewsParameterRevieweeIds) })), header: S.Struct({ "X-Integration-Id": S.String }) },
  responses: { 200: GetHrisPerformanceReviewsPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type get_GetHrisSkills = typeof get_GetHrisSkills;
export const get_GetHrisSkills = {
  method: S.Literal("GET"),
  path: S.Literal("/hris/skills"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ ids: S.optional(GetHrisSkillsParameterIds), remote_ids: S.optional(GetHrisSkillsParameterRemoteIds), name_contains: S.optional(GetHrisSkillsParameterNameContains) })), header: S.Struct({ "X-Integration-Id": S.String }) },
  responses: { 200: GetHrisSkillsPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type post_PostHrisSkills = typeof post_PostHrisSkills;
export const post_PostHrisSkills = {
  method: S.Literal("POST"),
  path: S.Literal("/hris/skills"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { header: S.Struct({ "X-Integration-Id": S.String }), body: PostHrisSkillsRequestBody },
  responses: { 200: PostHrisSkillsPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type patch_PatchHrisSkillsSkillId = typeof patch_PatchHrisSkillsSkillId;
export const patch_PatchHrisSkillsSkillId = {
  method: S.Literal("PATCH"),
  path: S.Literal("/hris/skills/{skill_id}"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ skill_id: PatchHrisSkillsSkillIdParameterSkillId }), header: S.Struct({ "X-Integration-Id": S.String }), body: PatchHrisSkillsSkillIdRequestBody },
  responses: { 200: PatchHrisSkillsSkillIdPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type delete_DeleteHrisSkillsSkillId = typeof delete_DeleteHrisSkillsSkillId;
export const delete_DeleteHrisSkillsSkillId = {
  method: S.Literal("DELETE"),
  path: S.Literal("/hris/skills/{skill_id}"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ skill_id: DeleteHrisSkillsSkillIdParameterSkillId }), header: S.Struct({ "X-Integration-Id": S.String }), body: DeleteHrisSkillsSkillIdRequestBody },
  responses: { 200: DeleteHrisSkillsSkillIdPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type get_GetHrisEmployeeSkillAssignments = typeof get_GetHrisEmployeeSkillAssignments;
export const get_GetHrisEmployeeSkillAssignments = {
  method: S.Literal("GET"),
  path: S.Literal("/hris/employee-skill-assignments"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ ids: S.optional(GetHrisEmployeeSkillAssignmentsParameterIds), remote_ids: S.optional(GetHrisEmployeeSkillAssignmentsParameterRemoteIds), employee_ids: S.optional(GetHrisEmployeeSkillAssignmentsParameterEmployeeIds), skill_ids: S.optional(GetHrisEmployeeSkillAssignmentsParameterSkillIds) })), header: S.Struct({ "X-Integration-Id": S.String }) },
  responses: { 200: GetHrisEmployeeSkillAssignmentsPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type post_PostHrisEmployeeSkillAssignments = typeof post_PostHrisEmployeeSkillAssignments;
export const post_PostHrisEmployeeSkillAssignments = {
  method: S.Literal("POST"),
  path: S.Literal("/hris/employee-skill-assignments"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { header: S.Struct({ "X-Integration-Id": S.String }), body: PostHrisEmployeeSkillAssignmentsRequestBody },
  responses: { 200: PostHrisEmployeeSkillAssignmentsPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type patch_PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentId = typeof patch_PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentId;
export const patch_PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentId = {
  method: S.Literal("PATCH"),
  path: S.Literal("/hris/employee-skill-assignments/{employee_skill_assignment_id}"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ employee_skill_assignment_id: PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId }), header: S.Struct({ "X-Integration-Id": S.String }), body: PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody },
  responses: { 200: PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type delete_DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentId = typeof delete_DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentId;
export const delete_DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentId = {
  method: S.Literal("DELETE"),
  path: S.Literal("/hris/employee-skill-assignments/{employee_skill_assignment_id}"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ employee_skill_assignment_id: DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId }), header: S.Struct({ "X-Integration-Id": S.String }), body: DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody },
  responses: { 200: DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type get_GetHrisStaffingEntities = typeof get_GetHrisStaffingEntities;
export const get_GetHrisStaffingEntities = {
  method: S.Literal("GET"),
  path: S.Literal("/hris/staffing-entities"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ cursor: S.optional(GetHrisStaffingEntitiesParameterCursor), page_size: S.optional(GetHrisStaffingEntitiesParameterPageSize), updated_after: S.optional(GetHrisStaffingEntitiesParameterUpdatedAfter), include_deleted: S.optional(GetHrisStaffingEntitiesParameterIncludeDeleted), ignore_unsupported_filters: S.optional(GetHrisStaffingEntitiesParameterIgnoreUnsupportedFilters), ids: S.optional(GetHrisStaffingEntitiesParameterIds), remote_ids: S.optional(GetHrisStaffingEntitiesParameterRemoteIds), model_types: S.optional(GetHrisStaffingEntitiesParameterModelTypes), statuses: S.optional(GetHrisStaffingEntitiesParameterStatuses) })), header: S.Struct({ "X-Integration-Id": S.String }) },
  responses: { 200: GetHrisStaffingEntitiesPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type get_GetAtsApplications = typeof get_GetAtsApplications;
export const get_GetAtsApplications = {
  method: S.Literal("GET"),
  path: S.Literal("/ats/applications"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ cursor: S.optional(GetAtsApplicationsParameterCursor), page_size: S.optional(GetAtsApplicationsParameterPageSize), updated_after: S.optional(GetAtsApplicationsParameterUpdatedAfter), include_deleted: S.optional(GetAtsApplicationsParameterIncludeDeleted), ignore_unsupported_filters: S.optional(GetAtsApplicationsParameterIgnoreUnsupportedFilters), ids: S.optional(GetAtsApplicationsParameterIds), remote_ids: S.optional(GetAtsApplicationsParameterRemoteIds), outcome: S.optional(GetAtsApplicationsParameterOutcome), outcomes: S.optional(GetAtsApplicationsParameterOutcomes), job_ids: S.optional(GetAtsApplicationsParameterJobIds), job_remote_ids: S.optional(GetAtsApplicationsParameterJobRemoteIds), current_stage_ids: S.optional(GetAtsApplicationsParameterCurrentStageIds), remote_created_after: S.optional(GetAtsApplicationsParameterRemoteCreatedAfter) })), header: S.Struct({ "X-Integration-Id": S.String }) },
  responses: { 200: GetAtsApplicationsPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("ATS.JOB_CLOSED"), S.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type put_PutAtsApplicationsApplicationIdStage = typeof put_PutAtsApplicationsApplicationIdStage;
export const put_PutAtsApplicationsApplicationIdStage = {
  method: S.Literal("PUT"),
  path: S.Literal("/ats/applications/{application_id}/stage"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ application_id: PutAtsApplicationsApplicationIdStageParameterApplicationId }), header: S.Struct({ "X-Integration-Id": S.String }), body: PutAtsApplicationsApplicationIdStageRequestBody },
  responses: { 200: PutAtsApplicationsApplicationIdStagePositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("ATS.JOB_CLOSED"), S.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type post_PostAtsApplicationsApplicationIdResultLinks = typeof post_PostAtsApplicationsApplicationIdResultLinks;
export const post_PostAtsApplicationsApplicationIdResultLinks = {
  method: S.Literal("POST"),
  path: S.Literal("/ats/applications/{application_id}/result-links"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ application_id: PostAtsApplicationsApplicationIdResultLinksParameterApplicationId }), header: S.Struct({ "X-Integration-Id": S.String }), body: PostAtsApplicationsApplicationIdResultLinksRequestBody },
  responses: { 200: PostAtsApplicationsApplicationIdResultLinksPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("ATS.JOB_CLOSED"), S.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type post_PostAtsApplicationsApplicationIdNotes = typeof post_PostAtsApplicationsApplicationIdNotes;
export const post_PostAtsApplicationsApplicationIdNotes = {
  method: S.Literal("POST"),
  path: S.Literal("/ats/applications/{application_id}/notes"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ application_id: PostAtsApplicationsApplicationIdNotesParameterApplicationId }), header: S.Struct({ "X-Integration-Id": S.String }), body: PostAtsApplicationsApplicationIdNotesRequestBody },
  responses: { 200: PostAtsApplicationsApplicationIdNotesPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("ATS.JOB_CLOSED"), S.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type get_GetAtsApplicationsApplicationIdAttachments = typeof get_GetAtsApplicationsApplicationIdAttachments;
export const get_GetAtsApplicationsApplicationIdAttachments = {
  method: S.Literal("GET"),
  path: S.Literal("/ats/applications/{application_id}/attachments"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ application_id: GetAtsApplicationsApplicationIdAttachmentsParameterApplicationId }), header: S.Struct({ "X-Integration-Id": S.String }) },
  responses: { 200: GetAtsApplicationsApplicationIdAttachmentsPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("ATS.JOB_CLOSED"), S.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type post_PostAtsApplicationsApplicationIdAttachments = typeof post_PostAtsApplicationsApplicationIdAttachments;
export const post_PostAtsApplicationsApplicationIdAttachments = {
  method: S.Literal("POST"),
  path: S.Literal("/ats/applications/{application_id}/attachments"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ application_id: PostAtsApplicationsApplicationIdAttachmentsParameterApplicationId }), header: S.Struct({ "X-Integration-Id": S.String }), body: PostAtsApplicationsApplicationIdAttachmentsRequestBody },
  responses: { 200: PostAtsApplicationsApplicationIdAttachmentsPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("ATS.JOB_CLOSED"), S.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type post_PostAtsApplicationsApplicationIdReject = typeof post_PostAtsApplicationsApplicationIdReject;
export const post_PostAtsApplicationsApplicationIdReject = {
  method: S.Literal("POST"),
  path: S.Literal("/ats/applications/{application_id}/reject"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ application_id: PostAtsApplicationsApplicationIdRejectParameterApplicationId }), header: S.Struct({ "X-Integration-Id": S.String }), body: PostAtsApplicationsApplicationIdRejectRequestBody },
  responses: { 200: PostAtsApplicationsApplicationIdRejectPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("ATS.JOB_CLOSED"), S.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type post_PostAtsApplicationsApplicationIdInterviews = typeof post_PostAtsApplicationsApplicationIdInterviews;
export const post_PostAtsApplicationsApplicationIdInterviews = {
  method: S.Literal("POST"),
  path: S.Literal("/ats/applications/{application_id}/interviews"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ application_id: PostAtsApplicationsApplicationIdInterviewsParameterApplicationId }), header: S.Struct({ "X-Integration-Id": S.String }), body: PostAtsApplicationsApplicationIdInterviewsRequestBody },
  responses: { 200: PostAtsApplicationsApplicationIdInterviewsPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("ATS.JOB_CLOSED"), S.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type patch_PatchAtsApplicationsApplicationIdInterviews = typeof patch_PatchAtsApplicationsApplicationIdInterviews;
export const patch_PatchAtsApplicationsApplicationIdInterviews = {
  method: S.Literal("PATCH"),
  path: S.Literal("/ats/applications/{application_id}/interviews"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ application_id: PatchAtsApplicationsApplicationIdInterviewsParameterApplicationId }), header: S.Struct({ "X-Integration-Id": S.String }), body: PatchAtsApplicationsApplicationIdInterviewsRequestBody },
  responses: { 200: PatchAtsApplicationsApplicationIdInterviewsPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("ATS.JOB_CLOSED"), S.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type get_GetAtsCandidates = typeof get_GetAtsCandidates;
export const get_GetAtsCandidates = {
  method: S.Literal("GET"),
  path: S.Literal("/ats/candidates"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ cursor: S.optional(GetAtsCandidatesParameterCursor), page_size: S.optional(GetAtsCandidatesParameterPageSize), updated_after: S.optional(GetAtsCandidatesParameterUpdatedAfter), include_deleted: S.optional(GetAtsCandidatesParameterIncludeDeleted), ignore_unsupported_filters: S.optional(GetAtsCandidatesParameterIgnoreUnsupportedFilters), ids: S.optional(GetAtsCandidatesParameterIds), remote_ids: S.optional(GetAtsCandidatesParameterRemoteIds), email: S.optional(GetAtsCandidatesParameterEmail), job_ids: S.optional(GetAtsCandidatesParameterJobIds), first_name: S.optional(GetAtsCandidatesParameterFirstName), last_name: S.optional(GetAtsCandidatesParameterLastName) })), header: S.Struct({ "X-Integration-Id": S.String }) },
  responses: { 200: GetAtsCandidatesPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("ATS.JOB_CLOSED"), S.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type post_PostAtsCandidates = typeof post_PostAtsCandidates;
export const post_PostAtsCandidates = {
  method: S.Literal("POST"),
  path: S.Literal("/ats/candidates"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { header: S.Struct({ "X-Integration-Id": S.String }), body: PostAtsCandidatesRequestBody },
  responses: { 200: PostAtsCandidatesPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("ATS.JOB_CLOSED"), S.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type get_GetAtsCandidatesCandidateIdAttachments = typeof get_GetAtsCandidatesCandidateIdAttachments;
export const get_GetAtsCandidatesCandidateIdAttachments = {
  method: S.Literal("GET"),
  path: S.Literal("/ats/candidates/{candidate_id}/attachments"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ candidate_id: GetAtsCandidatesCandidateIdAttachmentsParameterCandidateId }), header: S.Struct({ "X-Integration-Id": S.String }) },
  responses: { 200: GetAtsCandidatesCandidateIdAttachmentsPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("ATS.JOB_CLOSED"), S.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type post_PostAtsCandidatesCandidateIdAttachments = typeof post_PostAtsCandidatesCandidateIdAttachments;
export const post_PostAtsCandidatesCandidateIdAttachments = {
  method: S.Literal("POST"),
  path: S.Literal("/ats/candidates/{candidate_id}/attachments"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ candidate_id: PostAtsCandidatesCandidateIdAttachmentsParameterCandidateId }), header: S.Struct({ "X-Integration-Id": S.String }), body: PostAtsCandidatesCandidateIdAttachmentsRequestBody },
  responses: { 200: PostAtsCandidatesCandidateIdAttachmentsPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("ATS.JOB_CLOSED"), S.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type post_PostAtsCandidatesCandidateIdResultLinks = typeof post_PostAtsCandidatesCandidateIdResultLinks;
export const post_PostAtsCandidatesCandidateIdResultLinks = {
  method: S.Literal("POST"),
  path: S.Literal("/ats/candidates/{candidate_id}/result-links"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ candidate_id: PostAtsCandidatesCandidateIdResultLinksParameterCandidateId }), header: S.Struct({ "X-Integration-Id": S.String }), body: PostAtsCandidatesCandidateIdResultLinksRequestBody },
  responses: { 200: PostAtsCandidatesCandidateIdResultLinksPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("ATS.JOB_CLOSED"), S.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type post_PostAtsCandidatesCandidateIdTags = typeof post_PostAtsCandidatesCandidateIdTags;
export const post_PostAtsCandidatesCandidateIdTags = {
  method: S.Literal("POST"),
  path: S.Literal("/ats/candidates/{candidate_id}/tags"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ candidate_id: PostAtsCandidatesCandidateIdTagsParameterCandidateId }), header: S.Struct({ "X-Integration-Id": S.String }), body: PostAtsCandidatesCandidateIdTagsRequestBody },
  responses: { 200: PostAtsCandidatesCandidateIdTagsPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("ATS.JOB_CLOSED"), S.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type delete_DeleteAtsCandidatesCandidateIdTags = typeof delete_DeleteAtsCandidatesCandidateIdTags;
export const delete_DeleteAtsCandidatesCandidateIdTags = {
  method: S.Literal("DELETE"),
  path: S.Literal("/ats/candidates/{candidate_id}/tags"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ candidate_id: DeleteAtsCandidatesCandidateIdTagsParameterCandidateId }), header: S.Struct({ "X-Integration-Id": S.String }), body: DeleteAtsCandidatesCandidateIdTagsRequestBody },
  responses: { 200: DeleteAtsCandidatesCandidateIdTagsPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("ATS.JOB_CLOSED"), S.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type get_GetAtsTags = typeof get_GetAtsTags;
export const get_GetAtsTags = {
  method: S.Literal("GET"),
  path: S.Literal("/ats/tags"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ cursor: S.optional(GetAtsTagsParameterCursor), page_size: S.optional(GetAtsTagsParameterPageSize), updated_after: S.optional(GetAtsTagsParameterUpdatedAfter), include_deleted: S.optional(GetAtsTagsParameterIncludeDeleted), ignore_unsupported_filters: S.optional(GetAtsTagsParameterIgnoreUnsupportedFilters), ids: S.optional(GetAtsTagsParameterIds), remote_ids: S.optional(GetAtsTagsParameterRemoteIds) })), header: S.Struct({ "X-Integration-Id": S.String }) },
  responses: { 200: GetAtsTagsPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("ATS.JOB_CLOSED"), S.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type get_GetAtsApplicationStages = typeof get_GetAtsApplicationStages;
export const get_GetAtsApplicationStages = {
  method: S.Literal("GET"),
  path: S.Literal("/ats/application-stages"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ cursor: S.optional(GetAtsApplicationStagesParameterCursor), page_size: S.optional(GetAtsApplicationStagesParameterPageSize), updated_after: S.optional(GetAtsApplicationStagesParameterUpdatedAfter), include_deleted: S.optional(GetAtsApplicationStagesParameterIncludeDeleted), ignore_unsupported_filters: S.optional(GetAtsApplicationStagesParameterIgnoreUnsupportedFilters), ids: S.optional(GetAtsApplicationStagesParameterIds), remote_ids: S.optional(GetAtsApplicationStagesParameterRemoteIds) })), header: S.Struct({ "X-Integration-Id": S.String }) },
  responses: { 200: GetAtsApplicationStagesPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("ATS.JOB_CLOSED"), S.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type get_GetAtsJobs = typeof get_GetAtsJobs;
export const get_GetAtsJobs = {
  method: S.Literal("GET"),
  path: S.Literal("/ats/jobs"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ cursor: S.optional(GetAtsJobsParameterCursor), page_size: S.optional(GetAtsJobsParameterPageSize), updated_after: S.optional(GetAtsJobsParameterUpdatedAfter), include_deleted: S.optional(GetAtsJobsParameterIncludeDeleted), ignore_unsupported_filters: S.optional(GetAtsJobsParameterIgnoreUnsupportedFilters), ids: S.optional(GetAtsJobsParameterIds), remote_ids: S.optional(GetAtsJobsParameterRemoteIds), job_codes: S.optional(GetAtsJobsParameterJobCodes), post_url: S.optional(GetAtsJobsParameterPostUrl), status: S.optional(GetAtsJobsParameterStatus), statuses: S.optional(GetAtsJobsParameterStatuses), employment_types: S.optional(GetAtsJobsParameterEmploymentTypes), visibilities: S.optional(GetAtsJobsParameterVisibilities), remote_created_after: S.optional(GetAtsJobsParameterRemoteCreatedAfter), name_contains: S.optional(GetAtsJobsParameterNameContains) })), header: S.Struct({ "X-Integration-Id": S.String }) },
  responses: { 200: GetAtsJobsPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("ATS.JOB_CLOSED"), S.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type post_PostAtsJobsJobIdApplications = typeof post_PostAtsJobsJobIdApplications;
export const post_PostAtsJobsJobIdApplications = {
  method: S.Literal("POST"),
  path: S.Literal("/ats/jobs/{job_id}/applications"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ job_id: PostAtsJobsJobIdApplicationsParameterJobId }), header: S.Struct({ "X-Integration-Id": S.String }), body: PostAtsJobsJobIdApplicationsRequestBody },
  responses: { 200: PostAtsJobsJobIdApplicationsPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("ATS.JOB_CLOSED"), S.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type get_GetAtsUsers = typeof get_GetAtsUsers;
export const get_GetAtsUsers = {
  method: S.Literal("GET"),
  path: S.Literal("/ats/users"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ cursor: S.optional(GetAtsUsersParameterCursor), page_size: S.optional(GetAtsUsersParameterPageSize), updated_after: S.optional(GetAtsUsersParameterUpdatedAfter), include_deleted: S.optional(GetAtsUsersParameterIncludeDeleted), ignore_unsupported_filters: S.optional(GetAtsUsersParameterIgnoreUnsupportedFilters), ids: S.optional(GetAtsUsersParameterIds), remote_ids: S.optional(GetAtsUsersParameterRemoteIds), emails: S.optional(GetAtsUsersParameterEmails) })), header: S.Struct({ "X-Integration-Id": S.String }) },
  responses: { 200: GetAtsUsersPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("ATS.JOB_CLOSED"), S.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type get_GetAtsRoles = typeof get_GetAtsRoles;
export const get_GetAtsRoles = {
  method: S.Literal("GET"),
  path: S.Literal("/ats/roles"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ cursor: S.optional(GetAtsRolesParameterCursor), page_size: S.optional(GetAtsRolesParameterPageSize), updated_after: S.optional(GetAtsRolesParameterUpdatedAfter), include_deleted: S.optional(GetAtsRolesParameterIncludeDeleted), ignore_unsupported_filters: S.optional(GetAtsRolesParameterIgnoreUnsupportedFilters), ids: S.optional(GetAtsRolesParameterIds), remote_ids: S.optional(GetAtsRolesParameterRemoteIds), scopes: S.optional(GetAtsRolesParameterScopes) })), header: S.Struct({ "X-Integration-Id": S.String }) },
  responses: { 200: GetAtsRolesPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("ATS.JOB_CLOSED"), S.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type get_GetAtsOffers = typeof get_GetAtsOffers;
export const get_GetAtsOffers = {
  method: S.Literal("GET"),
  path: S.Literal("/ats/offers"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ cursor: S.optional(GetAtsOffersParameterCursor), page_size: S.optional(GetAtsOffersParameterPageSize), updated_after: S.optional(GetAtsOffersParameterUpdatedAfter), include_deleted: S.optional(GetAtsOffersParameterIncludeDeleted), ignore_unsupported_filters: S.optional(GetAtsOffersParameterIgnoreUnsupportedFilters), ids: S.optional(GetAtsOffersParameterIds), remote_ids: S.optional(GetAtsOffersParameterRemoteIds) })), header: S.Struct({ "X-Integration-Id": S.String }) },
  responses: { 200: GetAtsOffersPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("ATS.JOB_CLOSED"), S.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type get_GetAtsRejectionReasons = typeof get_GetAtsRejectionReasons;
export const get_GetAtsRejectionReasons = {
  method: S.Literal("GET"),
  path: S.Literal("/ats/rejection-reasons"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ cursor: S.optional(GetAtsRejectionReasonsParameterCursor), page_size: S.optional(GetAtsRejectionReasonsParameterPageSize), updated_after: S.optional(GetAtsRejectionReasonsParameterUpdatedAfter), include_deleted: S.optional(GetAtsRejectionReasonsParameterIncludeDeleted), ignore_unsupported_filters: S.optional(GetAtsRejectionReasonsParameterIgnoreUnsupportedFilters), ids: S.optional(GetAtsRejectionReasonsParameterIds), remote_ids: S.optional(GetAtsRejectionReasonsParameterRemoteIds) })), header: S.Struct({ "X-Integration-Id": S.String }) },
  responses: { 200: GetAtsRejectionReasonsPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("ATS.JOB_CLOSED"), S.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type get_GetAtsInterviews = typeof get_GetAtsInterviews;
export const get_GetAtsInterviews = {
  method: S.Literal("GET"),
  path: S.Literal("/ats/interviews"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ cursor: S.optional(GetAtsInterviewsParameterCursor), page_size: S.optional(GetAtsInterviewsParameterPageSize), updated_after: S.optional(GetAtsInterviewsParameterUpdatedAfter), include_deleted: S.optional(GetAtsInterviewsParameterIncludeDeleted), ignore_unsupported_filters: S.optional(GetAtsInterviewsParameterIgnoreUnsupportedFilters), ids: S.optional(GetAtsInterviewsParameterIds), remote_ids: S.optional(GetAtsInterviewsParameterRemoteIds), job_ids: S.optional(GetAtsInterviewsParameterJobIds) })), header: S.Struct({ "X-Integration-Id": S.String }) },
  responses: { 200: GetAtsInterviewsPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("ATS.JOB_CLOSED"), S.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type get_GetAtsActionsAtsCreateCandidate = typeof get_GetAtsActionsAtsCreateCandidate;
export const get_GetAtsActionsAtsCreateCandidate = {
  method: S.Literal("GET"),
  path: S.Literal("/ats/actions/ats_create_candidate"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { header: S.Struct({ "X-Integration-Id": S.String }) },
  responses: { 200: GetAtsActionsAtsCreateCandidatePositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("ATS.JOB_CLOSED"), S.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type get_GetAtsActionsAtsCreateApplication = typeof get_GetAtsActionsAtsCreateApplication;
export const get_GetAtsActionsAtsCreateApplication = {
  method: S.Literal("GET"),
  path: S.Literal("/ats/actions/ats_create_application"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { header: S.Struct({ "X-Integration-Id": S.String }) },
  responses: { 200: GetAtsActionsAtsCreateApplicationPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("ATS.JOB_CLOSED"), S.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type get_GetAtsActionsAtsAddApplicationAttachment = typeof get_GetAtsActionsAtsAddApplicationAttachment;
export const get_GetAtsActionsAtsAddApplicationAttachment = {
  method: S.Literal("GET"),
  path: S.Literal("/ats/actions/ats_add_application_attachment"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { header: S.Struct({ "X-Integration-Id": S.String }) },
  responses: { 200: GetAtsActionsAtsAddApplicationAttachmentPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("ATS.JOB_CLOSED"), S.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type get_GetAtsActionsAtsAddCandidateAttachment = typeof get_GetAtsActionsAtsAddCandidateAttachment;
export const get_GetAtsActionsAtsAddCandidateAttachment = {
  method: S.Literal("GET"),
  path: S.Literal("/ats/actions/ats_add_candidate_attachment"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { header: S.Struct({ "X-Integration-Id": S.String }) },
  responses: { 200: GetAtsActionsAtsAddCandidateAttachmentPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("ATS.JOB_CLOSED"), S.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type post_PostAtsImportTrackedApplication = typeof post_PostAtsImportTrackedApplication;
export const post_PostAtsImportTrackedApplication = {
  method: S.Literal("POST"),
  path: S.Literal("/ats/import-tracked-application"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { header: S.Struct({ "X-Integration-Id": S.String }), body: PostAtsImportTrackedApplicationRequestBody },
  responses: { 200: PostAtsImportTrackedApplicationPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("ATS.JOB_CLOSED"), S.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type post_PostAtsCustomAvionteSyncedJobs = typeof post_PostAtsCustomAvionteSyncedJobs;
export const post_PostAtsCustomAvionteSyncedJobs = {
  method: S.Literal("POST"),
  path: S.Literal("/ats/custom/avionte/synced-jobs"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { header: S.Struct({ "X-Integration-Id": S.String }), body: PostAtsCustomAvionteSyncedJobsRequestBody },
  responses: { 200: PostAtsCustomAvionteSyncedJobsPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type delete_DeleteAtsCustomAvionteSyncedJobsJobRemoteId = typeof delete_DeleteAtsCustomAvionteSyncedJobsJobRemoteId;
export const delete_DeleteAtsCustomAvionteSyncedJobsJobRemoteId = {
  method: S.Literal("DELETE"),
  path: S.Literal("/ats/custom/avionte/synced-jobs/{job_remote_id}"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ job_remote_id: DeleteAtsCustomAvionteSyncedJobsJobRemoteIdParameterJobRemoteId }), header: S.Struct({ "X-Integration-Id": S.String }), body: DeleteAtsCustomAvionteSyncedJobsJobRemoteIdRequestBody },
  responses: { 200: DeleteAtsCustomAvionteSyncedJobsJobRemoteIdPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type get_GetAssessmentPackages = typeof get_GetAssessmentPackages;
export const get_GetAssessmentPackages = {
  method: S.Literal("GET"),
  path: S.Literal("/assessment/packages"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { header: S.Struct({ "X-Integration-Id": S.String }) },
  responses: { 200: GetAssessmentPackagesPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("ATS.JOB_CLOSED"), S.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type put_PutAssessmentPackages = typeof put_PutAssessmentPackages;
export const put_PutAssessmentPackages = {
  method: S.Literal("PUT"),
  path: S.Literal("/assessment/packages"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { header: S.Struct({ "X-Integration-Id": S.String }), body: PutAssessmentPackagesRequestBody },
  responses: { 200: PutAssessmentPackagesPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("ATS.JOB_CLOSED"), S.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type get_GetAssessmentOrders = typeof get_GetAssessmentOrders;
export const get_GetAssessmentOrders = {
  method: S.Literal("GET"),
  path: S.Literal("/assessment/orders"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ cursor: S.optional(GetAssessmentOrdersParameterCursor), page_size: S.optional(GetAssessmentOrdersParameterPageSize), ids: S.optional(GetAssessmentOrdersParameterIds), statuses: S.optional(GetAssessmentOrdersParameterStatuses), created_after: S.optional(GetAssessmentOrdersParameterCreatedAfter) })), header: S.Struct({ "X-Integration-Id": S.String }) },
  responses: { 200: GetAssessmentOrdersPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("ATS.JOB_CLOSED"), S.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type get_GetAssessmentOrdersOpen = typeof get_GetAssessmentOrdersOpen;
export const get_GetAssessmentOrdersOpen = {
  method: S.Literal("GET"),
  path: S.Literal("/assessment/orders/open"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ cursor: S.optional(GetAssessmentOrdersOpenParameterCursor), page_size: S.optional(GetAssessmentOrdersOpenParameterPageSize) })), header: S.Struct({ "X-Integration-Id": S.String }) },
  responses: { 200: GetAssessmentOrdersOpenPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("ATS.JOB_CLOSED"), S.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type put_PutAssessmentOrdersAssessmentOrderIdResult = typeof put_PutAssessmentOrdersAssessmentOrderIdResult;
export const put_PutAssessmentOrdersAssessmentOrderIdResult = {
  method: S.Literal("PUT"),
  path: S.Literal("/assessment/orders/{assessment_order_id}/result"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ assessment_order_id: PutAssessmentOrdersAssessmentOrderIdResultParameterAssessmentOrderId }), header: S.Struct({ "X-Integration-Id": S.String }), body: PutAssessmentOrdersAssessmentOrderIdResultRequestBody },
  responses: { 200: PutAssessmentOrdersAssessmentOrderIdResultPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("INTEGRATION.PERMISSION_MISSING"), S.Literal("INTEGRATION.AUTHENTICATION_INVALID"), S.Literal("INTEGRATION.QA_FAILED"), S.Literal("INTEGRATION.SETUP_SYNC_PENDING"), S.Literal("INTEGRATION.SETUP_INCOMPLETE"), S.Literal("INTEGRATION.INACTIVE"), S.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), S.Literal("INTEGRATION.MODEL_DISABLED"), S.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), S.Literal("INTEGRATION.ACTION_DISABLED"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("ATS.JOB_CLOSED"), S.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type get_GetLmsUsers = typeof get_GetLmsUsers;
export const get_GetLmsUsers = {
  method: S.Literal("GET"),
  path: S.Literal("/lms/users"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ cursor: S.optional(GetLmsUsersParameterCursor), page_size: S.optional(GetLmsUsersParameterPageSize), updated_after: S.optional(GetLmsUsersParameterUpdatedAfter), include_deleted: S.optional(GetLmsUsersParameterIncludeDeleted), ignore_unsupported_filters: S.optional(GetLmsUsersParameterIgnoreUnsupportedFilters), ids: S.optional(GetLmsUsersParameterIds), remote_ids: S.optional(GetLmsUsersParameterRemoteIds), work_emails: S.optional(GetLmsUsersParameterWorkEmails) })), header: S.Struct({ "X-Integration-Id": S.String }) },
  responses: { 200: GetLmsUsersPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type get_GetLmsCourseProgressions = typeof get_GetLmsCourseProgressions;
export const get_GetLmsCourseProgressions = {
  method: S.Literal("GET"),
  path: S.Literal("/lms/course-progressions"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ cursor: S.optional(GetLmsCourseProgressionsParameterCursor), page_size: S.optional(GetLmsCourseProgressionsParameterPageSize), updated_after: S.optional(GetLmsCourseProgressionsParameterUpdatedAfter), include_deleted: S.optional(GetLmsCourseProgressionsParameterIncludeDeleted), ignore_unsupported_filters: S.optional(GetLmsCourseProgressionsParameterIgnoreUnsupportedFilters), ids: S.optional(GetLmsCourseProgressionsParameterIds), remote_ids: S.optional(GetLmsCourseProgressionsParameterRemoteIds), user_ids: S.optional(GetLmsCourseProgressionsParameterUserIds), course_ids: S.optional(GetLmsCourseProgressionsParameterCourseIds) })), header: S.Struct({ "X-Integration-Id": S.String }) },
  responses: { 200: GetLmsCourseProgressionsPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type post_PostLmsCourseProgressions = typeof post_PostLmsCourseProgressions;
export const post_PostLmsCourseProgressions = {
  method: S.Literal("POST"),
  path: S.Literal("/lms/course-progressions"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { header: S.Struct({ "X-Integration-Id": S.String }), body: PostLmsCourseProgressionsRequestBody },
  responses: { 200: PostLmsCourseProgressionsPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type post_PostLmsCourseProgressionsCourseProgressionIdComplete = typeof post_PostLmsCourseProgressionsCourseProgressionIdComplete;
export const post_PostLmsCourseProgressionsCourseProgressionIdComplete = {
  method: S.Literal("POST"),
  path: S.Literal("/lms/course-progressions/{course_progression_id}/complete"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ course_progression_id: PostLmsCourseProgressionsCourseProgressionIdCompleteParameterCourseProgressionId }), header: S.Struct({ "X-Integration-Id": S.String }), body: PostLmsCourseProgressionsCourseProgressionIdCompleteRequestBody },
  responses: { 200: PostLmsCourseProgressionsCourseProgressionIdCompletePositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type get_GetLmsCourses = typeof get_GetLmsCourses;
export const get_GetLmsCourses = {
  method: S.Literal("GET"),
  path: S.Literal("/lms/courses"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ cursor: S.optional(GetLmsCoursesParameterCursor), page_size: S.optional(GetLmsCoursesParameterPageSize), updated_after: S.optional(GetLmsCoursesParameterUpdatedAfter), include_deleted: S.optional(GetLmsCoursesParameterIncludeDeleted), ignore_unsupported_filters: S.optional(GetLmsCoursesParameterIgnoreUnsupportedFilters), ids: S.optional(GetLmsCoursesParameterIds), remote_ids: S.optional(GetLmsCoursesParameterRemoteIds) })), header: S.Struct({ "X-Integration-Id": S.String }) },
  responses: { 200: GetLmsCoursesPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type post_PostLmsCoursesBulk = typeof post_PostLmsCoursesBulk;
export const post_PostLmsCoursesBulk = {
  method: S.Literal("POST"),
  path: S.Literal("/lms/courses/bulk"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { header: S.Struct({ "X-Integration-Id": S.String }), body: PostLmsCoursesBulkRequestBody },
  responses: { 200: PostLmsCoursesBulkPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type get_GetLmsCoursesBulkTaskId = typeof get_GetLmsCoursesBulkTaskId;
export const get_GetLmsCoursesBulkTaskId = {
  method: S.Literal("GET"),
  path: S.Literal("/lms/courses/bulk/{task_id}"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ task_id: GetLmsCoursesBulkTaskIdParameterTaskId }), header: S.Struct({ "X-Integration-Id": S.String }) },
  responses: { 200: GetLmsCoursesBulkTaskIdPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type post_PostLmsCoursesCourseIdDeactivate = typeof post_PostLmsCoursesCourseIdDeactivate;
export const post_PostLmsCoursesCourseIdDeactivate = {
  method: S.Literal("POST"),
  path: S.Literal("/lms/courses/{course_id}/deactivate"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ course_id: PostLmsCoursesCourseIdDeactivateParameterCourseId }), header: S.Struct({ "X-Integration-Id": S.String }), body: PostLmsCoursesCourseIdDeactivateRequestBody },
  responses: { 200: PostLmsCoursesCourseIdDeactivatePositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type get_GetLmsSkills = typeof get_GetLmsSkills;
export const get_GetLmsSkills = {
  method: S.Literal("GET"),
  path: S.Literal("/lms/skills"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ cursor: S.optional(GetLmsSkillsParameterCursor), page_size: S.optional(GetLmsSkillsParameterPageSize), updated_after: S.optional(GetLmsSkillsParameterUpdatedAfter), include_deleted: S.optional(GetLmsSkillsParameterIncludeDeleted), ignore_unsupported_filters: S.optional(GetLmsSkillsParameterIgnoreUnsupportedFilters), ids: S.optional(GetLmsSkillsParameterIds), remote_ids: S.optional(GetLmsSkillsParameterRemoteIds) })), header: S.Struct({ "X-Integration-Id": S.String }) },
  responses: { 200: GetLmsSkillsPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type post_PostAiApplyCareerSites = typeof post_PostAiApplyCareerSites;
export const post_PostAiApplyCareerSites = {
  method: S.Literal("POST"),
  path: S.Literal("/ai-apply/career-sites"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { body: PostAiApplyCareerSitesRequestBody },
  responses: { 200: PostAiApplyCareerSitesPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING"), S.Literal("AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type get_GetAiApplyCareerSites = typeof get_GetAiApplyCareerSites;
export const get_GetAiApplyCareerSites = {
  method: S.Literal("GET"),
  path: S.Literal("/ai-apply/career-sites"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ cursor: S.optional(GetAiApplyCareerSitesParameterCursor), page_size: S.optional(GetAiApplyCareerSitesParameterPageSize), ids: S.optional(GetAiApplyCareerSitesParameterIds) })) },
  responses: { 200: GetAiApplyCareerSitesPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING"), S.Literal("AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type get_GetAiApplyPostings = typeof get_GetAiApplyPostings;
export const get_GetAiApplyPostings = {
  method: S.Literal("GET"),
  path: S.Literal("/ai-apply/postings"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ cursor: S.optional(GetAiApplyPostingsParameterCursor), page_size: S.optional(GetAiApplyPostingsParameterPageSize), ids: S.optional(GetAiApplyPostingsParameterIds), career_site_ids: S.optional(GetAiApplyPostingsParameterCareerSiteIds), job_codes: S.optional(GetAiApplyPostingsParameterJobCodes) })) },
  responses: { 200: GetAiApplyPostingsPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING"), S.Literal("AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type post_PostAiApplyPostings = typeof post_PostAiApplyPostings;
export const post_PostAiApplyPostings = {
  method: S.Literal("POST"),
  path: S.Literal("/ai-apply/postings"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { body: PostAiApplyPostingsRequestBody },
  responses: { 200: PostAiApplyPostingsPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING"), S.Literal("AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type post_PostAiApplyPostingsPostingIdInquire = typeof post_PostAiApplyPostingsPostingIdInquire;
export const post_PostAiApplyPostingsPostingIdInquire = {
  method: S.Literal("POST"),
  path: S.Literal("/ai-apply/postings/{posting_id}/inquire"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ posting_id: PostAiApplyPostingsPostingIdInquireParameterPostingId }), body: PostAiApplyPostingsPostingIdInquireRequestBody },
  responses: { 200: PostAiApplyPostingsPostingIdInquirePositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING"), S.Literal("AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type post_PostAiApplyApply = typeof post_PostAiApplyApply;
export const post_PostAiApplyApply = {
  method: S.Literal("POST"),
  path: S.Literal("/ai-apply/apply"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { body: PostAiApplyApplyRequestBody },
  responses: { 200: PostAiApplyApplyPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING"), S.Literal("AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type get_GetAiApplyApplications = typeof get_GetAiApplyApplications;
export const get_GetAiApplyApplications = {
  method: S.Literal("GET"),
  path: S.Literal("/ai-apply/applications"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ cursor: S.optional(GetAiApplyApplicationsParameterCursor), page_size: S.optional(GetAiApplyApplicationsParameterPageSize), ids: S.optional(GetAiApplyApplicationsParameterIds), job_posting_ids: S.optional(GetAiApplyApplicationsParameterJobPostingIds) })) },
  responses: { 200: GetAiApplyApplicationsPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING"), S.Literal("AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type get_GetAiApplyUnifiedApiJobs = typeof get_GetAiApplyUnifiedApiJobs;
export const get_GetAiApplyUnifiedApiJobs = {
  method: S.Literal("GET"),
  path: S.Literal("/ai-apply/unified-api/jobs"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ cursor: S.optional(GetAiApplyUnifiedApiJobsParameterCursor), page_size: S.optional(GetAiApplyUnifiedApiJobsParameterPageSize), ids: S.optional(GetAiApplyUnifiedApiJobsParameterIds), remote_ids: S.optional(GetAiApplyUnifiedApiJobsParameterRemoteIds), job_codes: S.optional(GetAiApplyUnifiedApiJobsParameterJobCodes), career_site_ids: S.optional(GetAiApplyUnifiedApiJobsParameterCareerSiteIds) })) },
  responses: { 200: GetAiApplyUnifiedApiJobsPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING"), S.Literal("AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type post_PostAiApplyUnifiedApiJobsJobIdApplications = typeof post_PostAiApplyUnifiedApiJobsJobIdApplications;
export const post_PostAiApplyUnifiedApiJobsJobIdApplications = {
  method: S.Literal("POST"),
  path: S.Literal("/ai-apply/unified-api/jobs/{job_id}/applications"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ job_id: PostAiApplyUnifiedApiJobsJobIdApplicationsParameterJobId }), body: PostAiApplyUnifiedApiJobsJobIdApplicationsRequestBody },
  responses: { 200: PostAiApplyUnifiedApiJobsJobIdApplicationsPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING"), S.Literal("AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type get_GetAiApplyJobFeeds = typeof get_GetAiApplyJobFeeds;
export const get_GetAiApplyJobFeeds = {
  method: S.Literal("GET"),
  path: S.Literal("/ai-apply/job-feeds"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ cursor: S.optional(GetAiApplyJobFeedsParameterCursor), page_size: S.optional(GetAiApplyJobFeedsParameterPageSize), ids: S.optional(GetAiApplyJobFeedsParameterIds) })) },
  responses: { 200: GetAiApplyJobFeedsPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING"), S.Literal("AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type post_PostAiApplyJobFeeds = typeof post_PostAiApplyJobFeeds;
export const post_PostAiApplyJobFeeds = {
  method: S.Literal("POST"),
  path: S.Literal("/ai-apply/job-feeds"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { body: PostAiApplyJobFeedsRequestBody },
  responses: { 200: PostAiApplyJobFeedsPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING"), S.Literal("AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type post_PostConnectCreateLink = typeof post_PostConnectCreateLink;
export const post_PostConnectCreateLink = {
  method: S.Literal("POST"),
  path: S.Literal("/connect/create-link"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { body: PostConnectCreateLinkRequestBody },
  responses: { 200: PostConnectCreateLinkPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type get_GetConnectIntegrationByTokenToken = typeof get_GetConnectIntegrationByTokenToken;
export const get_GetConnectIntegrationByTokenToken = {
  method: S.Literal("GET"),
  path: S.Literal("/connect/integration-by-token/{token}"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ token: GetConnectIntegrationByTokenTokenParameterToken }) },
  responses: { 200: GetConnectIntegrationByTokenTokenPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type post_PostConnectActivateIntegration = typeof post_PostConnectActivateIntegration;
export const post_PostConnectActivateIntegration = {
  method: S.Literal("POST"),
  path: S.Literal("/connect/activate-integration"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { body: PostConnectActivateIntegrationRequestBody },
  responses: { 200: PostConnectActivateIntegrationPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type get_GetCustomDatevSystemInformation = typeof get_GetCustomDatevSystemInformation;
export const get_GetCustomDatevSystemInformation = {
  method: S.Literal("GET"),
  path: S.Literal("/custom/datev/system-information"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { header: S.Struct({ "X-Integration-Id": S.String }) },
  responses: { 200: GetCustomDatevSystemInformationPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type post_PostCustomDatevPassthrough = typeof post_PostCustomDatevPassthrough;
export const post_PostCustomDatevPassthrough = {
  method: S.Literal("POST"),
  path: S.Literal("/custom/datev/passthrough"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { header: S.Struct({ "X-Integration-Id": S.String }), body: PostCustomDatevPassthroughRequestBody },
  responses: { 200: PostCustomDatevPassthroughPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type get_GetCustomDatevCheckEauPermission = typeof get_GetCustomDatevCheckEauPermission;
export const get_GetCustomDatevCheckEauPermission = {
  method: S.Literal("GET"),
  path: S.Literal("/custom/datev/check-eau-permission"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { header: S.Struct({ "X-Integration-Id": S.String }) },
  responses: { 200: GetCustomDatevCheckEauPermissionPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type get_GetCustomDatevEauRequestsEauId = typeof get_GetCustomDatevEauRequestsEauId;
export const get_GetCustomDatevEauRequestsEauId = {
  method: S.Literal("GET"),
  path: S.Literal("/custom/datev/eau-requests/{eau_id}"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ eau_id: GetCustomDatevEauRequestsEauIdParameterEauId }), header: S.Struct({ "X-Integration-Id": S.String }) },
  responses: { 200: GetCustomDatevEauRequestsEauIdPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type get_GetCustomDatevCheckDocumentPermission = typeof get_GetCustomDatevCheckDocumentPermission;
export const get_GetCustomDatevCheckDocumentPermission = {
  method: S.Literal("GET"),
  path: S.Literal("/custom/datev/check-document-permission"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { header: S.Struct({ "X-Integration-Id": S.String }) },
  responses: { 200: GetCustomDatevCheckDocumentPermissionPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type get_GetCustomDatevAvailableDocuments = typeof get_GetCustomDatevAvailableDocuments;
export const get_GetCustomDatevAvailableDocuments = {
  method: S.Literal("GET"),
  path: S.Literal("/custom/datev/available-documents"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.Struct({ period: GetCustomDatevAvailableDocumentsParameterPeriod }), header: S.Struct({ "X-Integration-Id": S.String }) },
  responses: { 200: GetCustomDatevAvailableDocumentsPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type post_PostCustomDatevDownloadDocument = typeof post_PostCustomDatevDownloadDocument;
export const post_PostCustomDatevDownloadDocument = {
  method: S.Literal("POST"),
  path: S.Literal("/custom/datev/download-document"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { header: S.Struct({ "X-Integration-Id": S.String }), body: PostCustomDatevDownloadDocumentRequestBody },
  responses: { 200: PostCustomDatevDownloadDocumentPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type post_PostCustomDatevEmployeesEmployeeIdDownloadDocument = typeof post_PostCustomDatevEmployeesEmployeeIdDownloadDocument;
export const post_PostCustomDatevEmployeesEmployeeIdDownloadDocument = {
  method: S.Literal("POST"),
  path: S.Literal("/custom/datev/employees/{employee_id}/download-document"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ employee_id: PostCustomDatevEmployeesEmployeeIdDownloadDocumentParameterEmployeeId }), header: S.Struct({ "X-Integration-Id": S.String }), body: PostCustomDatevEmployeesEmployeeIdDownloadDocumentRequestBody },
  responses: { 200: PostCustomDatevEmployeesEmployeeIdDownloadDocumentPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type post_PostCustomDatevEmployeesEmployeeIdEauRequests = typeof post_PostCustomDatevEmployeesEmployeeIdEauRequests;
export const post_PostCustomDatevEmployeesEmployeeIdEauRequests = {
  method: S.Literal("POST"),
  path: S.Literal("/custom/datev/employees/{employee_id}/eau-requests"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ employee_id: PostCustomDatevEmployeesEmployeeIdEauRequestsParameterEmployeeId }), header: S.Struct({ "X-Integration-Id": S.String }), body: PostCustomDatevEmployeesEmployeeIdEauRequestsRequestBody },
  responses: { 200: PostCustomDatevEmployeesEmployeeIdEauRequestsPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type put_PutCustomDatevEmployeesEmployeeIdPreparePayroll = typeof put_PutCustomDatevEmployeesEmployeeIdPreparePayroll;
export const put_PutCustomDatevEmployeesEmployeeIdPreparePayroll = {
  method: S.Literal("PUT"),
  path: S.Literal("/custom/datev/employees/{employee_id}/prepare-payroll"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ employee_id: PutCustomDatevEmployeesEmployeeIdPreparePayrollParameterEmployeeId }), header: S.Struct({ "X-Integration-Id": S.String }), body: PutCustomDatevEmployeesEmployeeIdPreparePayrollRequestBody },
  responses: { 200: PutCustomDatevEmployeesEmployeeIdPreparePayrollPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type put_PutCustomDatevEmployeesEmployeeIdCompensations = typeof put_PutCustomDatevEmployeesEmployeeIdCompensations;
export const put_PutCustomDatevEmployeesEmployeeIdCompensations = {
  method: S.Literal("PUT"),
  path: S.Literal("/custom/datev/employees/{employee_id}/compensations"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ employee_id: PutCustomDatevEmployeesEmployeeIdCompensationsParameterEmployeeId }), header: S.Struct({ "X-Integration-Id": S.String }), body: PutCustomDatevEmployeesEmployeeIdCompensationsRequestBody },
  responses: { 200: PutCustomDatevEmployeesEmployeeIdCompensationsPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type get_GetCustomDatevCheckWritePermission = typeof get_GetCustomDatevCheckWritePermission;
export const get_GetCustomDatevCheckWritePermission = {
  method: S.Literal("GET"),
  path: S.Literal("/custom/datev/check-write-permission"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { header: S.Struct({ "X-Integration-Id": S.String }) },
  responses: { 200: GetCustomDatevCheckWritePermissionPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type get_GetCustomDatevDataPushes = typeof get_GetCustomDatevDataPushes;
export const get_GetCustomDatevDataPushes = {
  method: S.Literal("GET"),
  path: S.Literal("/custom/datev/data-pushes"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { header: S.Struct({ "X-Integration-Id": S.String }) },
  responses: { 200: GetCustomDatevDataPushesPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type post_PostCustomDatevPushDataGeneral = typeof post_PostCustomDatevPushDataGeneral;
export const post_PostCustomDatevPushDataGeneral = {
  method: S.Literal("POST"),
  path: S.Literal("/custom/datev/push-data/general"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { header: S.Struct({ "X-Integration-Id": S.String }), body: PostCustomDatevPushDataGeneralRequestBody },
  responses: { 200: PostCustomDatevPushDataGeneralPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type post_PostCustomDatevPushDataPayroll = typeof post_PostCustomDatevPushDataPayroll;
export const post_PostCustomDatevPushDataPayroll = {
  method: S.Literal("POST"),
  path: S.Literal("/custom/datev/push-data/payroll"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { header: S.Struct({ "X-Integration-Id": S.String }), body: PostCustomDatevPushDataPayrollRequestBody },
  responses: { 200: PostCustomDatevPushDataPayrollPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type post_PostCustomSilaeEmployeesEmployeeIdPayrollSupplements = typeof post_PostCustomSilaeEmployeesEmployeeIdPayrollSupplements;
export const post_PostCustomSilaeEmployeesEmployeeIdPayrollSupplements = {
  method: S.Literal("POST"),
  path: S.Literal("/custom/silae/employees/{employee_id}/payroll-supplements"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ employee_id: PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsParameterEmployeeId }), header: S.Struct({ "X-Integration-Id": S.String }), body: PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsRequestBody },
  responses: { 200: PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsPositiveResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

export type post_PostAiApplyJobFeedsBulkImport = typeof post_PostAiApplyJobFeedsBulkImport;
export const post_PostAiApplyJobFeedsBulkImport = {
  method: S.Literal("POST"),
  path: S.Literal("/ai-apply/job-feeds/{job_feed_id}/bulk-import"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ job_feed_id: S.String }), body: S.String },
  responses: { 200: BulkImportResponse, default: S.Struct({ status: S.Literal("error"), error: S.Struct({ code: S.NullOr(S.Union(S.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), S.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), S.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), S.Literal("PLATFORM.INPUT_INVALID"), S.Literal("PLATFORM.UNKNOWN_ERROR"), S.Literal("PLATFORM.IP_NOT_WHITELISTED"), S.Literal("PLATFORM.AUTHENTICATION_INVALID"), S.Literal("PLATFORM.TASK_TIMED_OUT"), S.Literal("REMOTE.SERVICE_UNAVAILABLE"), S.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), S.Literal("REMOTE.INPUT_INVALID"), S.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), S.Literal("AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING"), S.Literal("AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"))), title: S.NullOr(S.String), message: S.String, log_url: S.NullOr(S.String) }) }) },
};

// </Endpoints>

  
     // <EndpointByMethod>
     export const EndpointByMethod = {
     get: {
           "/check-api-key": get_GetCheckApiKey,
"/integrations/{integration_id}": get_GetIntegrationsIntegrationId,
"/integrations/{integration_id}/integration-fields": get_GetIntegrationsIntegrationIdIntegrationFields,
"/integrations/{integration_id}/custom-fields": get_GetIntegrationsIntegrationIdCustomFields,
"/tools/{category}": get_GetToolsCategory,
"/hris/employees": get_GetHrisEmployees,
"/hris/employees/form": get_GetHrisEmployeesForm,
"/hris/employee-document-categories": get_GetHrisEmployeeDocumentCategories,
"/hris/teams": get_GetHrisTeams,
"/hris/groups": get_GetHrisGroups,
"/hris/employments": get_GetHrisEmployments,
"/hris/locations": get_GetHrisLocations,
"/hris/absence-types": get_GetHrisAbsenceTypes,
"/hris/time-off-balances": get_GetHrisTimeOffBalances,
"/hris/absences": get_GetHrisAbsences,
"/hris/legal-entities": get_GetHrisLegalEntities,
"/hris/timesheets": get_GetHrisTimesheets,
"/hris/performance-review-cycles": get_GetHrisPerformanceReviewCycles,
"/hris/performance-reviews": get_GetHrisPerformanceReviews,
"/hris/skills": get_GetHrisSkills,
"/hris/employee-skill-assignments": get_GetHrisEmployeeSkillAssignments,
"/hris/staffing-entities": get_GetHrisStaffingEntities,
"/ats/applications": get_GetAtsApplications,
"/ats/applications/{application_id}/attachments": get_GetAtsApplicationsApplicationIdAttachments,
"/ats/candidates": get_GetAtsCandidates,
"/ats/candidates/{candidate_id}/attachments": get_GetAtsCandidatesCandidateIdAttachments,
"/ats/tags": get_GetAtsTags,
"/ats/application-stages": get_GetAtsApplicationStages,
"/ats/jobs": get_GetAtsJobs,
"/ats/users": get_GetAtsUsers,
"/ats/roles": get_GetAtsRoles,
"/ats/offers": get_GetAtsOffers,
"/ats/rejection-reasons": get_GetAtsRejectionReasons,
"/ats/interviews": get_GetAtsInterviews,
"/ats/actions/ats_create_candidate": get_GetAtsActionsAtsCreateCandidate,
"/ats/actions/ats_create_application": get_GetAtsActionsAtsCreateApplication,
"/ats/actions/ats_add_application_attachment": get_GetAtsActionsAtsAddApplicationAttachment,
"/ats/actions/ats_add_candidate_attachment": get_GetAtsActionsAtsAddCandidateAttachment,
"/assessment/packages": get_GetAssessmentPackages,
"/assessment/orders": get_GetAssessmentOrders,
"/assessment/orders/open": get_GetAssessmentOrdersOpen,
"/lms/users": get_GetLmsUsers,
"/lms/course-progressions": get_GetLmsCourseProgressions,
"/lms/courses": get_GetLmsCourses,
"/lms/courses/bulk/{task_id}": get_GetLmsCoursesBulkTaskId,
"/lms/skills": get_GetLmsSkills,
"/ai-apply/career-sites": get_GetAiApplyCareerSites,
"/ai-apply/postings": get_GetAiApplyPostings,
"/ai-apply/applications": get_GetAiApplyApplications,
"/ai-apply/unified-api/jobs": get_GetAiApplyUnifiedApiJobs,
"/ai-apply/job-feeds": get_GetAiApplyJobFeeds,
"/connect/integration-by-token/{token}": get_GetConnectIntegrationByTokenToken,
"/custom/datev/system-information": get_GetCustomDatevSystemInformation,
"/custom/datev/check-eau-permission": get_GetCustomDatevCheckEauPermission,
"/custom/datev/eau-requests/{eau_id}": get_GetCustomDatevEauRequestsEauId,
"/custom/datev/check-document-permission": get_GetCustomDatevCheckDocumentPermission,
"/custom/datev/available-documents": get_GetCustomDatevAvailableDocuments,
"/custom/datev/check-write-permission": get_GetCustomDatevCheckWritePermission,
"/custom/datev/data-pushes": get_GetCustomDatevDataPushes
         },
post: {
           "/force-sync": post_PostForceSync,
"/passthrough/{tool}/{api}": post_PostPassthroughToolApi,
"/integrations/{integration_id}/relink": post_PostIntegrationsIntegrationIdRelink,
"/integrations/{integration_id}/setup-link": post_PostIntegrationsIntegrationIdSetupLink,
"/hris/provisioning-groups/{group_id}/diff": post_PostHrisProvisioningGroupsGroupIdDiff,
"/hris/provisioning-groups/{group_id}/setup-links": post_PostHrisProvisioningGroupsGroupIdSetupLinks,
"/hris/employees": post_PostHrisEmployees,
"/hris/employees/form": post_PostHrisEmployeesForm,
"/hris/employees/{employee_id}/documents": post_PostHrisEmployeesEmployeeIdDocuments,
"/hris/absences": post_PostHrisAbsences,
"/hris/skills": post_PostHrisSkills,
"/hris/employee-skill-assignments": post_PostHrisEmployeeSkillAssignments,
"/ats/applications/{application_id}/result-links": post_PostAtsApplicationsApplicationIdResultLinks,
"/ats/applications/{application_id}/notes": post_PostAtsApplicationsApplicationIdNotes,
"/ats/applications/{application_id}/attachments": post_PostAtsApplicationsApplicationIdAttachments,
"/ats/applications/{application_id}/reject": post_PostAtsApplicationsApplicationIdReject,
"/ats/applications/{application_id}/interviews": post_PostAtsApplicationsApplicationIdInterviews,
"/ats/candidates": post_PostAtsCandidates,
"/ats/candidates/{candidate_id}/attachments": post_PostAtsCandidatesCandidateIdAttachments,
"/ats/candidates/{candidate_id}/result-links": post_PostAtsCandidatesCandidateIdResultLinks,
"/ats/candidates/{candidate_id}/tags": post_PostAtsCandidatesCandidateIdTags,
"/ats/jobs/{job_id}/applications": post_PostAtsJobsJobIdApplications,
"/ats/import-tracked-application": post_PostAtsImportTrackedApplication,
"/ats/custom/avionte/synced-jobs": post_PostAtsCustomAvionteSyncedJobs,
"/lms/course-progressions": post_PostLmsCourseProgressions,
"/lms/course-progressions/{course_progression_id}/complete": post_PostLmsCourseProgressionsCourseProgressionIdComplete,
"/lms/courses/bulk": post_PostLmsCoursesBulk,
"/lms/courses/{course_id}/deactivate": post_PostLmsCoursesCourseIdDeactivate,
"/ai-apply/career-sites": post_PostAiApplyCareerSites,
"/ai-apply/postings": post_PostAiApplyPostings,
"/ai-apply/postings/{posting_id}/inquire": post_PostAiApplyPostingsPostingIdInquire,
"/ai-apply/apply": post_PostAiApplyApply,
"/ai-apply/unified-api/jobs/{job_id}/applications": post_PostAiApplyUnifiedApiJobsJobIdApplications,
"/ai-apply/job-feeds": post_PostAiApplyJobFeeds,
"/connect/create-link": post_PostConnectCreateLink,
"/connect/activate-integration": post_PostConnectActivateIntegration,
"/custom/datev/passthrough": post_PostCustomDatevPassthrough,
"/custom/datev/download-document": post_PostCustomDatevDownloadDocument,
"/custom/datev/employees/{employee_id}/download-document": post_PostCustomDatevEmployeesEmployeeIdDownloadDocument,
"/custom/datev/employees/{employee_id}/eau-requests": post_PostCustomDatevEmployeesEmployeeIdEauRequests,
"/custom/datev/push-data/general": post_PostCustomDatevPushDataGeneral,
"/custom/datev/push-data/payroll": post_PostCustomDatevPushDataPayroll,
"/custom/silae/employees/{employee_id}/payroll-supplements": post_PostCustomSilaeEmployeesEmployeeIdPayrollSupplements,
"/ai-apply/job-feeds/{job_feed_id}/bulk-import": post_PostAiApplyJobFeedsBulkImport
         },
delete: {
           "/integrations/{integration_id}": delete_DeleteIntegrationsIntegrationId,
"/hris/absences/{absence_id}": delete_DeleteHrisAbsencesAbsenceId,
"/hris/skills/{skill_id}": delete_DeleteHrisSkillsSkillId,
"/hris/employee-skill-assignments/{employee_skill_assignment_id}": delete_DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentId,
"/ats/candidates/{candidate_id}/tags": delete_DeleteAtsCandidatesCandidateIdTags,
"/ats/custom/avionte/synced-jobs/{job_remote_id}": delete_DeleteAtsCustomAvionteSyncedJobsJobRemoteId
         },
put: {
           "/integrations/{integration_id}/enabled": put_PutIntegrationsIntegrationIdEnabled,
"/integrations/{integration_id}/custom-fields/{custom_field_id}": put_PutIntegrationsIntegrationIdCustomFieldsCustomFieldId,
"/ats/applications/{application_id}/stage": put_PutAtsApplicationsApplicationIdStage,
"/assessment/packages": put_PutAssessmentPackages,
"/assessment/orders/{assessment_order_id}/result": put_PutAssessmentOrdersAssessmentOrderIdResult,
"/custom/datev/employees/{employee_id}/prepare-payroll": put_PutCustomDatevEmployeesEmployeeIdPreparePayroll,
"/custom/datev/employees/{employee_id}/compensations": put_PutCustomDatevEmployeesEmployeeIdCompensations
         },
patch: {
           "/integrations/{integration_id}/integration-fields/{integration_field_id}": patch_PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldId,
"/hris/employees/{employee_id}": patch_PatchHrisEmployeesEmployeeId,
"/hris/skills/{skill_id}": patch_PatchHrisSkillsSkillId,
"/hris/employee-skill-assignments/{employee_skill_assignment_id}": patch_PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentId,
"/ats/applications/{application_id}/interviews": patch_PatchAtsApplicationsApplicationIdInterviews
         }
     }
     export type EndpointByMethod = typeof EndpointByMethod;
     // </EndpointByMethod>
     

    // <EndpointByMethod.Shorthands>
    export type GetEndpoints = EndpointByMethod["get"]
export type PostEndpoints = EndpointByMethod["post"]
export type DeleteEndpoints = EndpointByMethod["delete"]
export type PutEndpoints = EndpointByMethod["put"]
export type PatchEndpoints = EndpointByMethod["patch"]
    // </EndpointByMethod.Shorthands>
    
  
// <ApiClientTypes>
export type EndpointParameters = {
  body?: unknown;
  query?: unknown;
  header?: unknown;
  path?: unknown;
  cookie?: unknown;
};

export type MutationMethod = "post" | "put" | "patch" | "delete";
export type Method = "get" | "head" | "options" | MutationMethod;

export type RequestFormat = "json" | "form-data" | "form-url" | "binary" | "text";
export type ResponseFormat = "json" | "sse";


    // <EndpointRequestFormats>
    /** Non-json request body encodings; missing entries default to `"json"`. */
    export const endpointRequestFormats = {
    
    } as Partial<{ [M in keyof EndpointByMethod]: Partial<{ [P in keyof EndpointByMethod[M]]: RequestFormat }> }>;
    // </EndpointRequestFormats>
    

    // <EndpointResponseFormats>
    /** Non-json response body modes; missing entries default to `"json"`. SSE skips JSON parse + output validation. */
    export const endpointResponseFormats = {
    
    } as Partial<{ [M in keyof EndpointByMethod]: Partial<{ [P in keyof EndpointByMethod[M]]: ResponseFormat }> }>;
    // </EndpointResponseFormats>
    

export type DefaultEndpoint = {
  parameters?: EndpointParameters | undefined;
  responses?: Record<string, unknown>;
  responseHeaders?: Record<string, unknown>;
};

export type Endpoint<TConfig extends DefaultEndpoint = DefaultEndpoint> = {
  operationId: string;
  method: Method;
  path: string;
  requestFormat: RequestFormat;
  responseFormat: ResponseFormat;
  parameters?: TConfig["parameters"];
  meta: {
    alias: string;
    hasParameters: boolean;
    areParametersRequired: boolean;
  };
  responses?: TConfig["responses"];
  responseHeaders?: TConfig["responseHeaders"]
};

/**
 * Minimal response surface used by ApiClient — avoids depending on the DOM `Response`
 * global (helpful for Node without DOM lib). Structural typing accepts fetch Response.
 */
export interface FetcherResponse {
  ok: boolean;
  status: number;
  statusText: string;
  headers: {
    get(name: string): string | null;
    getSetCookie?: () => string[];
  };
  /** Present on fetch Response; used for SSE / streaming bodies. */
  body?: ReadableStream<Uint8Array> | null;
  json(): Promise<unknown>;
  text(): Promise<string>;
  arrayBuffer(): Promise<ArrayBuffer>;
  clone(): FetcherResponse;
}

export interface Fetcher {
    decodePathParams?: (path: string, pathParams: unknown) => string
  encodeSearchParams?: (searchParams: unknown) => URLSearchParams | undefined
  /** Merge cookie params into request headers (default: Cookie header). */
  encodeCookies?: (cookies: unknown, headers: Headers) => void
    //
    fetch: (input: {
      method: Method;
      url: URL;
      urlSearchParams?: URLSearchParams | undefined;
      parameters?: EndpointParameters | undefined;
      path: string;
      /** How to encode `parameters.body` (from OpenAPI requestBody content type). */
      requestFormat: RequestFormat;
      overrides?: RequestInit;
      throwOnStatusError?: boolean
    }) => Promise<FetcherResponse>;
    parseResponseData?: (response: FetcherResponse) => Promise<unknown>
}

export const successStatusCodes = [200,201,202,203,204,205,206,207,208,226,300,301,302,303,304,305,306,307,308] as const;
export type SuccessStatusCode = typeof successStatusCodes[number];

export const errorStatusCodes = [400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,421,422,423,424,425,426,428,429,431,451,500,501,502,503,504,505,506,507,508,510,511] as const;
export type ErrorStatusCode = typeof errorStatusCodes[number];

// Taken from https://github.com/unjs/fetchdts/blob/ec4eaeab5d287116171fc1efd61f4a1ad34e4609/src/fetch.ts#L3
export interface TypedHeaders<TypedHeaderValues extends Record<string, string> | unknown> extends Omit<Headers, 'append' | 'delete' | 'get' | 'getSetCookie' | 'has' | 'set' | 'forEach'> {
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/append) */
  append: <Name extends Extract<keyof TypedHeaderValues, string> | string & {}> (name: Name, value: Lowercase<Name> extends keyof TypedHeaderValues ? TypedHeaderValues[Lowercase<Name>] : string) => void
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/delete) */
  delete: <Name extends Extract<keyof TypedHeaderValues, string> | string & {}> (name: Name) => void
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/get) */
  get: <Name extends Extract<keyof TypedHeaderValues, string> | string & {}> (name: Name) => (Lowercase<Name> extends keyof TypedHeaderValues ? TypedHeaderValues[Lowercase<Name>] : string) | null
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/getSetCookie) */
  getSetCookie: () => string[]
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/has) */
  has: <Name extends Extract<keyof TypedHeaderValues, string> | string & {}> (name: Name) => boolean
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/set) */
  set: <Name extends Extract<keyof TypedHeaderValues, string> | string & {}> (name: Name, value: Lowercase<Name> extends keyof TypedHeaderValues ? TypedHeaderValues[Lowercase<Name>] : string) => void
  forEach: (callbackfn: (value: TypedHeaderValues[keyof TypedHeaderValues] | string & {}, key: Extract<keyof TypedHeaderValues, string> | string & {}, parent: TypedHeaders<TypedHeaderValues>) => void, thisArg?: any) => void
}

/** @see https://developer.mozilla.org/en-US/docs/Web/API/Response */
export interface TypedSuccessResponse<TSuccess, TStatusCode, THeaders> extends Omit<FetcherResponse, "ok" | "status" | "json" | "headers"> {
  ok: true;
  status: TStatusCode;
  headers: never extends THeaders ? FetcherResponse["headers"] : TypedHeaders<THeaders>;
  data: TSuccess;
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) */
  json: () => Promise<TSuccess>;
}

/** @see https://developer.mozilla.org/en-US/docs/Web/API/Response */
export interface TypedErrorResponse<TData, TStatusCode, THeaders> extends Omit<FetcherResponse, "ok" | "status" | "json" | "headers"> {
  ok: false;
  status: TStatusCode;
  headers: never extends THeaders ? FetcherResponse["headers"] : TypedHeaders<THeaders>;
  data: TData;
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) */
  json: () => Promise<TData>;
}

export type TypedApiResponse<TAllResponses = {}, THeaders = {}> = {
    [K in keyof TAllResponses]: K extends string
      ? K extends `${infer TStatusCode extends number}`
        ? TStatusCode extends SuccessStatusCode
          ? TypedSuccessResponse<TAllResponses[K], TStatusCode, K extends keyof THeaders ? THeaders[K] : never>
          : TypedErrorResponse<TAllResponses[K], TStatusCode, K extends keyof THeaders ? THeaders[K] : never>
        : never
      : K extends number
        ? K extends SuccessStatusCode
          ? TypedSuccessResponse<TAllResponses[K], K, K extends keyof THeaders ? THeaders[K] : never>
          : TypedErrorResponse<TAllResponses[K], K, K extends keyof THeaders ? THeaders[K] : never>
        : never;
  }[keyof TAllResponses];

type InferSchemaValue<T> = T extends { Type: infer O } ? O : T extends object ? { [K in keyof T]: InferSchemaValue<T[K]> } : T;
type InferSchemaInput<T> = T extends { Encoded: infer I } ? I : T extends object ? { [K in keyof T as undefined extends InferSchemaInput<T[K]> ? never : K]: InferSchemaInput<T[K]> } & { [K in keyof T as undefined extends InferSchemaInput<T[K]> ? K : never]?: Exclude<InferSchemaInput<T[K]>, undefined> } : T;

export type SafeApiResponse<TEndpoint> = TEndpoint extends { responses: infer TResponses }
  ? TResponses extends Record<string, unknown>
    ? TypedApiResponse<InferSchemaValue<TResponses>, TEndpoint extends { responseHeaders: infer THeaders } ? InferSchemaValue<THeaders> : never>
    : never
  : never

export type InferResponseByStatus<TEndpoint, TStatusCode> = Extract<SafeApiResponse<TEndpoint>, { status: TStatusCode }>

type RequiredKeys<T> = {
  [P in keyof T]-?: undefined extends T[P] ? never : P;
}[keyof T];

type MaybeOptionalArg<T> = RequiredKeys<T> extends never ? [config?: T] : [config: T];
type NotNever<T> = [T] extends [never] ? false : true;

export type ValidateSide = "none" | "input" | "output" | "both";
export type OnValidate = (ctx: {
  side: "input" | "output";
  method: string;
  path: string;
  schema: unknown;
  value: unknown;
}) => unknown | Promise<unknown>;

// </ApiClientTypes>

// <TypedStatusError>
export class TypedStatusError<TData = unknown> extends Error {
  response: TypedErrorResponse<TData, ErrorStatusCode, unknown>;
  status: number;
  constructor(response: TypedErrorResponse<TData, ErrorStatusCode, unknown>) {
    super(`HTTP ${response.status}: ${response.statusText}`);
    this.name = 'TypedStatusError';
    this.response = response;
    this.status = response.status;
  }
}
// </TypedStatusError>





import { Effect } from "effect";
import type { ParseError } from "@effect/schema/ParseResult";

// <HttpClientError>
export class HttpClientError extends Error {
  readonly _tag = "HttpClientError";
  constructor(message: string, readonly cause?: unknown) {
    super(message);
    this.name = "HttpClientError";
  }
}
// </HttpClientError>


// <ValidateHelpers>
const defaultParse = (schema: unknown, value: unknown): unknown => {
  return S.decodeUnknownSync(schema as S.Schema<unknown, unknown, never>)(value);
};

const runValidate = async (ctx: {
  side: "input" | "output";
  method: string;
  path: string;
  schema: unknown;
  value: unknown;
  onValidate?: OnValidate;
}): Promise<unknown> => {
  if (ctx.onValidate) return ctx.onValidate(ctx);
  return defaultParse(ctx.schema, ctx.value);
};
// </ValidateHelpers>


export type EffectFetcher = {
  decodePathParams?: (path: string, pathParams: unknown) => string;
  encodeSearchParams?: (searchParams: unknown) => URLSearchParams | undefined;
  encodeCookies?: (cookies: unknown, headers: Headers) => void;
  parseResponseData?: (response: FetcherResponse) => Promise<unknown>;
  fetch: (input: Parameters<Fetcher["fetch"]>[0]) => Effect.Effect<FetcherResponse, HttpClientError, never>;
};

const wrapPromiseFetcher = (fetcher: Fetcher): EffectFetcher => ({
  ...(fetcher.decodePathParams ? { decodePathParams: fetcher.decodePathParams } : {}),
  ...(fetcher.encodeSearchParams ? { encodeSearchParams: fetcher.encodeSearchParams } : {}),
  ...(fetcher.encodeCookies ? { encodeCookies: fetcher.encodeCookies } : {}),
  ...(fetcher.parseResponseData ? { parseResponseData: fetcher.parseResponseData } : {}),
  fetch: (input) =>
    Effect.tryPromise({
      try: () => fetcher.fetch(input),
      catch: (cause) => new HttpClientError("fetch failed", cause),
    }),
});

// <EffectApiClient>
export class EffectApiClient {
  baseUrl: string = "";
  successStatusCodes = successStatusCodes;
  errorStatusCodes = errorStatusCodes;
  validate: ValidateSide = "both";
  onValidate?: OnValidate;
  private effectFetcher: EffectFetcher;

  constructor(
    fetcher: Fetcher | EffectFetcher,
    options?: { validate?: ValidateSide; onValidate?: OnValidate; effectFetcher?: boolean },
  ) {
    this.effectFetcher = options?.effectFetcher ? (fetcher as EffectFetcher) : wrapPromiseFetcher(fetcher as Fetcher);
    if (options?.validate !== undefined) this.validate = options.validate;
    if (options?.onValidate) this.onValidate = options.onValidate;
  }

  setBaseUrl(baseUrl: string) {
    this.baseUrl = baseUrl;
    return this;
  }

  request<
    TMethod extends keyof EndpointByMethod,
    TPath extends keyof EndpointByMethod[TMethod],
    TEndpoint extends EndpointByMethod[TMethod][TPath]
  >(
    method: TMethod,
    path: TPath,
    ...params: MaybeOptionalArg<any>
  ): Effect.Effect<
    Extract<InferResponseByStatus<TEndpoint, SuccessStatusCode>, { data: {} }>["data"],
    TypedStatusError | HttpClientError | ParseError | Error,
    never
  > {
    const self = this;
    return Effect.gen(function* () {
      const requestParams = params[0];
      const validateSide: ValidateSide = requestParams?.validate ?? self.validate;
      const parametersToSend: EndpointParameters = {};
      if (requestParams?.body !== undefined) parametersToSend.body = requestParams.body;
      if (requestParams?.query !== undefined) parametersToSend.query = requestParams.query;
      if (requestParams?.header !== undefined) parametersToSend.header = requestParams.header;
      if (requestParams?.path !== undefined) parametersToSend.path = requestParams.path;
      if (requestParams?.cookie !== undefined) parametersToSend.cookie = requestParams.cookie;

      type RuntimeEndpoint = {
        parameters?: Partial<Record<"body" | "query" | "header" | "path" | "cookie", unknown>>;
        responses?: Record<string, unknown>;
      };
      const endpointSchema = EndpointByMethod[method][path] as RuntimeEndpoint;
      if ((validateSide === "input" || validateSide === "both") && endpointSchema.parameters) {
        for (const key of ["body", "query", "header", "path", "cookie"] as const) {
          const schema = endpointSchema.parameters[key];
          const value = parametersToSend[key];
          if (schema !== undefined && value !== undefined) {

          if (self.onValidate) {
            parametersToSend[key] = yield* Effect.tryPromise({
              try: () =>
                runValidate({
                  side: "input",
                  method: String(method),
                  path: String(path),
                  schema: schema,
                  value: value,
                  onValidate: self.onValidate,
                }),
              catch: (e) => (e instanceof Error ? e : new Error(String(e))),
            });
          } else {
            parametersToSend[key] = yield* Effect.try({
              try: () => S.decodeUnknownSync(schema as S.Schema<unknown, unknown, never>)(value),
              catch: (e) => (e instanceof Error ? e : new Error(String(e))),
            });
          }
          }
        }
      }

      const decodePath =
        self.effectFetcher.decodePathParams ??
        ((url: string, p: unknown) => {
          const record = (p ?? {}) as Record<string, unknown>;
          return url
            .replace(/{(\w+)}/g, (_, key: string) => (record[key] != null ? String(record[key]) : `{${key}}`))
            .replace(/:([a-zA-Z0-9_]+)/g, (_, key: string) => (record[key] != null ? String(record[key]) : `:${key}`));
        });
      const encodeSearch =
        self.effectFetcher.encodeSearchParams ??
        ((queryParams: unknown) => {
          if (!queryParams || typeof queryParams !== "object") return undefined;
          const searchParams = new URLSearchParams();
          Object.entries(queryParams as Record<string, unknown>).forEach(([key, value]) => {
            if (value != null) {
              if (Array.isArray(value)) value.forEach((val) => val != null && searchParams.append(key, String(val)));
              else searchParams.append(key, String(value));
            }
          });
          return searchParams;
        });
      const encodeCookies =
        self.effectFetcher.encodeCookies ??
        ((cookies: unknown, headers: Headers) => {
          if (!cookies || typeof cookies !== "object") return;
          const parts = Object.entries(cookies as Record<string, unknown>)
            .filter(([, value]) => value != null)
            .map(([key, value]) => `${key}=${String(value)}`);
          if (!parts.length) return;
          const existing = headers.get("cookie");
          headers.set("cookie", existing ? `${existing}; ${parts.join("; ")}` : parts.join("; "));
        });
      const parseData =
        self.effectFetcher.parseResponseData ??
        (async (response: FetcherResponse) => {
          const contentType = response.headers.get("content-type") ?? "";
          if (contentType.includes("text/event-stream")) {
            return response.body ?? null;
          }
          if (contentType.includes("json") || contentType === "*/*") {
            try {
              return await response.json();
            } catch {
              return undefined;
            }
          }
          if (contentType.startsWith("text/")) return response.text();
          return undefined;
        });

      const resolvedPath = decodePath(self.baseUrl + (path as string), parametersToSend.path ?? {});
      const url = new URL(resolvedPath);
      const urlSearchParams = encodeSearch(parametersToSend.query);

      let overrides = requestParams?.overrides as RequestInit | undefined;
      if (parametersToSend.cookie) {
        const headers = new Headers(overrides?.headers);
        encodeCookies(parametersToSend.cookie, headers);
        overrides = { ...overrides, headers };
      }

      const response = yield* self.effectFetcher.fetch({
        method: method as Method,
        path: path as string,
        url,
        ...(urlSearchParams ? { urlSearchParams } : {}),
        ...(Object.keys(parametersToSend).length ? { parameters: parametersToSend } : {}),
        requestFormat: endpointRequestFormats[method]?.[path] ?? "json",
        ...(overrides ? { overrides } : {}),
      });

      const responseFormat = endpointResponseFormats[method]?.[path] ?? "json";
      let data =
        responseFormat === "sse"
          ? (response.body ?? null)
          : yield* Effect.tryPromise({
              try: () => parseData(response),
              catch: (cause) => new HttpClientError("parse failed", cause),
            });

      if (responseFormat !== "sse" && (validateSide === "output" || validateSide === "both") && response.ok && endpointSchema?.responses) {
        const responseSchema =
          endpointSchema.responses[String(response.status)] ?? endpointSchema.responses["default"];
        if (responseSchema) {

          if (self.onValidate) {
            data = yield* Effect.tryPromise({
              try: () =>
                runValidate({
                  side: "output",
                  method: String(method),
                  path: String(path),
                  schema: responseSchema,
                  value: data,
                  onValidate: self.onValidate,
                }),
              catch: (e) => (e instanceof Error ? e : new Error(String(e))),
            });
          } else {
            data = yield* Effect.try({
              try: () => S.decodeUnknownSync(responseSchema as S.Schema<unknown, unknown, never>)(data),
              catch: (e) => (e instanceof Error ? e : new Error(String(e))),
            });
          }
        }
      }

      if ((errorStatusCodes as readonly number[]).includes(response.status)) {
        const typedResponse = Object.assign(response, { data, json: () => Promise.resolve(data) });
        return yield* Effect.fail(
          new TypedStatusError(typedResponse as TypedErrorResponse<unknown, ErrorStatusCode, unknown>),
        );
      }

      return data as Extract<InferResponseByStatus<TEndpoint, SuccessStatusCode>, { data: {} }>["data"];
    });
  }

  get<Path extends keyof GetEndpoints>(
    path: Path,
    ...params: MaybeOptionalArg<any>
  ) {
    return this.request<"get", Path, GetEndpoints[Path]>("get", path, ...params);
  }
post<Path extends keyof PostEndpoints>(
    path: Path,
    ...params: MaybeOptionalArg<any>
  ) {
    return this.request<"post", Path, PostEndpoints[Path]>("post", path, ...params);
  }
delete<Path extends keyof DeleteEndpoints>(
    path: Path,
    ...params: MaybeOptionalArg<any>
  ) {
    return this.request<"delete", Path, DeleteEndpoints[Path]>("delete", path, ...params);
  }
put<Path extends keyof PutEndpoints>(
    path: Path,
    ...params: MaybeOptionalArg<any>
  ) {
    return this.request<"put", Path, PutEndpoints[Path]>("put", path, ...params);
  }
patch<Path extends keyof PatchEndpoints>(
    path: Path,
    ...params: MaybeOptionalArg<any>
  ) {
    return this.request<"patch", Path, PatchEndpoints[Path]>("patch", path, ...params);
  }
}

export function createEffectApiClient(
  fetcher: Fetcher | EffectFetcher,
  baseUrl?: string,
  options?: { validate?: ValidateSide; onValidate?: OnValidate; effectFetcher?: boolean },
) {
  return new EffectApiClient(fetcher, options).setBaseUrl(baseUrl ?? "");
}
// </EffectApiClient>

  