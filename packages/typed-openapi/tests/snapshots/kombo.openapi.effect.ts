
  import { Schema } from "effect";

// <DefaultSchemas>
const Union_default_FULL_prop = Schema.optionalWith(Schema.Union(Schema.Literal("FULL"), Schema.Literal("DELTA")), { default: () => "FULL" });
const NullOr_default_en_prop = Schema.optionalWith(Schema.NullOr(Schema.Union(Schema.Literal("en"), Schema.Literal("de"), Schema.Literal("fr"), Schema.Literal("it"), Schema.Literal("es"))), { default: () => "en" });
const Union_default_EMBEDDED_prop = Schema.optionalWith(Schema.Union(Schema.Literal("EMBEDDED"), Schema.Literal("MAGIC_LINK")), { default: () => "EMBEDDED" });
const Schema_default_100 = Schema.transform(Schema.UndefinedOr(Schema.Int.pipe(Schema.greaterThanOrEqualTo(1), Schema.lessThanOrEqualTo(2000))), Schema.Int.pipe(Schema.greaterThanOrEqualTo(1), Schema.lessThanOrEqualTo(2000)), { strict: true, decode: (i) => (i === undefined ? 100 : i), encode: (a) => a });
const Schema_default_100_4 = Schema.transform(Schema.UndefinedOr(Schema.Int.pipe(Schema.greaterThanOrEqualTo(1), Schema.lessThanOrEqualTo(250))), Schema.Int.pipe(Schema.greaterThanOrEqualTo(1), Schema.lessThanOrEqualTo(250)), { strict: true, decode: (i) => (i === undefined ? 100 : i), encode: (a) => a });
const Union_default_false = Schema.transform(Schema.UndefinedOr(Schema.Union(Schema.Literal("true"), Schema.Literal("false"))), Schema.Union(Schema.Literal("true"), Schema.Literal("false")), { strict: true, decode: (i) => (i === undefined ? "false" : i), encode: (a) => a });
const Union_default_REQUESTED_prop = Schema.optionalWith(Schema.Union(Schema.Literal("REQUESTED"), Schema.Literal("APPROVED")), { default: () => "REQUESTED" });
const Boolean_default_false_prop = Schema.optionalWith(Schema.Boolean, { default: () => false });
const Array_default_value_prop = Schema.optionalWith(Schema.Array(Schema.String), { default: () => [] });
const NullOr_default_value_prop = Schema.optionalWith(Schema.NullOr(Schema.Array(Schema.Struct({ email_address: Schema.optional(Schema.NullOr(Schema.String.pipe(Schema.pattern(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$"))))), type: Schema.NullOr(Schema.String) }))), { default: () => [] });
const NullOr_default_value_prop_10 = Schema.optionalWith(Schema.NullOr(Schema.Array(Schema.Struct({ phone_number: Schema.String, type: Schema.optional(Schema.NullOr(Schema.String)) }))), { default: () => [] });
const NullOr_default_value_prop_11 = Schema.optionalWith(Schema.NullOr(Schema.Array(Schema.Struct({ link: Schema.optional(Schema.NullOr(Schema.String)), type: Schema.optional(Schema.NullOr(Schema.String)), username: Schema.optional(Schema.NullOr(Schema.String)) }))), { default: () => [] });
const NullOr_default_value_prop_12 = Schema.optionalWith(Schema.NullOr(Schema.Array(Schema.Union(Schema.Struct({ answer: Schema.Struct({ content: Schema.NullOr(Schema.String) }), question: Schema.Struct({ remote_id: Schema.NullOr(Schema.String), title: Schema.String, type: Schema.String }) }), Schema.Struct({ answer: Schema.Struct({ choice: Schema.NullOr(Schema.String) }), question: Schema.Struct({ remote_id: Schema.NullOr(Schema.String), title: Schema.String, type: Schema.String }) }), Schema.Struct({ answer: Schema.Struct({ choices: Array_default_value_prop }), question: Schema.Struct({ remote_id: Schema.NullOr(Schema.String), title: Schema.String, type: Schema.String }) }), Schema.Struct({ answer: Schema.Struct({ checked: Schema.NullOr(Schema.Boolean) }), question: Schema.Struct({ remote_id: Schema.NullOr(Schema.String), title: Schema.String, type: Schema.String }) }), Schema.Struct({ answer: Schema.Struct({ number: Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))) }), question: Schema.Struct({ remote_id: Schema.NullOr(Schema.String), title: Schema.String, type: Schema.String }) }), Schema.Struct({ answer: Schema.Struct({ date: Schema.NullOr(Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")))) }), question: Schema.Struct({ remote_id: Schema.NullOr(Schema.String), title: Schema.String, type: Schema.String }) }), Schema.Struct({ answer: Schema.Struct({ raw: Schema.optional(Schema.Null) }), question: Schema.Struct({ remote_id: Schema.NullOr(Schema.String), title: Schema.String, type: Schema.String }) })))), { default: () => [] });
const Array_default_value_prop_13 = Schema.optionalWith(Schema.Array(Schema.Struct({ url: Schema.URL })), { default: () => [] });
const Union_default_value_prop = Schema.optionalWith(Schema.Array(Schema.Struct({ name: Schema.String, content_type: Schema.optional(Schema.String.pipe(Schema.pattern(new RegExp("^[\\w.-]+\\/[\\w.-]+$")))), data_url: Schema.optional(Schema.URL), data: Schema.optional(Schema.String), type: Schema.Union(Schema.Literal("CV"), Schema.Literal("COVER_LETTER"), Schema.Literal("OTHER")) })), { default: () => [] });
const NullOr_default_FIELD_prop = Schema.optionalWith(Schema.NullOr(Schema.Union(Schema.Literal("SLIDER"), Schema.Literal("FIELD"))), { default: () => "FIELD" });
const Union_default_null_prop = Schema.optionalWith(Schema.Union(Schema.Array(Schema.String.pipe(Schema.minLength(24), Schema.maxLength(24), Schema.pattern(new RegExp("^[1-9A-HJ-NP-Za-km-z]+$")))), Schema.Array(Schema.Boolean), Schema.Null), { default: () => null });
const Union_default_value_prop_17 = Schema.optionalWith(Schema.Array(Schema.Union(Schema.Struct({ type: Schema.String, label: Schema.String, value: Schema.String }), Schema.Struct({ type: Schema.String, id: Schema.String, label: Schema.String, score: Schema.Struct({ value: Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308)), max: Schema.Number.pipe(Schema.greaterThanOrEqualTo(1)) }), status: Schema.Union(Schema.Literal("COMPLETED"), Schema.Literal("CANCELLED")) }))), { default: () => [] });
const Array_default_value_prop_18 = Schema.optionalWith(Schema.Array(Schema.Struct({ name: Schema.String, content_type: Schema.optional(Schema.String.pipe(Schema.pattern(new RegExp("^[\\w.-]+\\/[\\w.-]+$")))), data_url: Schema.optional(Schema.URL), data: Schema.optional(Schema.String) })).pipe(Schema.maxItems(5)), { default: () => [] });
const Schema_default_5 = Schema.transform(Schema.UndefinedOr(Schema.Int.pipe(Schema.greaterThanOrEqualTo(1), Schema.lessThanOrEqualTo(5))), Schema.Int.pipe(Schema.greaterThanOrEqualTo(1), Schema.lessThanOrEqualTo(5)), { strict: true, decode: (i) => (i === undefined ? 5 : i), encode: (a) => a });
const Union_default_null_prop_20 = Schema.optionalWith(Schema.Union(Schema.Array(Schema.String), Schema.Array(Schema.Boolean), Schema.Null), { default: () => null });
const Union_default_HRIS_prop = Schema.optionalWith(Schema.Union(Schema.Literal("HRIS"), Schema.Literal("ATS"), Schema.Literal("ASSESSMENT"), Schema.Literal("LMS")), { default: () => "HRIS" });
const Array_default_value_prop_22 = Schema.optionalWith(Schema.Array(Schema.Struct({ amount: Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308)), lohnart: Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308)), bearbeitungsschluessel: Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308)) })), { default: () => [] });

// </DefaultSchemas>

// <Schemas>
export const GetCheckApiKeyPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ environment_id: Schema.String, customer_id: Schema.String }) });
export type GetCheckApiKeyPositiveResponse = typeof GetCheckApiKeyPositiveResponse.Type;

export const PostForceSyncPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ already_queued: Schema.Boolean, sync_id: Schema.String, type: Schema.Union(Schema.Literal("FULL"), Schema.Literal("DELTA")) }) });
export type PostForceSyncPositiveResponse = typeof PostForceSyncPositiveResponse.Type;

export const PostForceSyncRequestBody = Schema.Struct({ type: Union_default_FULL_prop });
export type PostForceSyncRequestBody = typeof PostForceSyncRequestBody.Type;

export const PostPassthroughToolApiParameterTool = Schema.String;
export type PostPassthroughToolApiParameterTool = typeof PostPassthroughToolApiParameterTool.Type;

export const PostPassthroughToolApiParameterApi = Schema.String;
export type PostPassthroughToolApiParameterApi = typeof PostPassthroughToolApiParameterApi.Type;

export const PostPassthroughToolApiPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ url: Schema.URL, status: Schema.Int, headers: Schema.Record({ key: Schema.String, value: Schema.Union(Schema.String, Schema.Array(Schema.String)) }), data: Schema.optional(Schema.Unknown) }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PostPassthroughToolApiPositiveResponse = typeof PostPassthroughToolApiPositiveResponse.Type;

export const PostPassthroughToolApiRequestBody = Schema.Struct({ method: Schema.Union(Schema.Literal("GET"), Schema.Literal("POST"), Schema.Literal("DELETE"), Schema.Literal("PUT"), Schema.Literal("PATCH")), path: Schema.String, headers: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.String })), params: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.String })), data: Schema.optional(Schema.Unknown), response_as_base64: Schema.optional(Schema.Boolean), multipart_form_data: Schema.optional(Schema.Array(Schema.Struct({ name: Schema.String, value: Schema.Union(Schema.String, Schema.Struct({ name: Schema.String, content_type: Schema.optional(Schema.String.pipe(Schema.pattern(new RegExp("^[\\w.-]+\\/[\\w.-]+$")))), data_url: Schema.optional(Schema.URL), data: Schema.optional(Schema.String) })) }))), api_options: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.String })) });
export type PostPassthroughToolApiRequestBody = typeof PostPassthroughToolApiRequestBody.Type;

export const DeleteIntegrationsIntegrationIdParameterIntegrationId = Schema.String;
export type DeleteIntegrationsIntegrationIdParameterIntegrationId = typeof DeleteIntegrationsIntegrationIdParameterIntegrationId.Type;

export const DeleteIntegrationsIntegrationIdPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Record({ key: Schema.String, value: Schema.Unknown }) });
export type DeleteIntegrationsIntegrationIdPositiveResponse = typeof DeleteIntegrationsIntegrationIdPositiveResponse.Type;

export const DeleteIntegrationsIntegrationIdRequestBody = Schema.Struct({  });
export type DeleteIntegrationsIntegrationIdRequestBody = typeof DeleteIntegrationsIntegrationIdRequestBody.Type;

export const GetIntegrationsIntegrationIdParameterIntegrationId = Schema.String;
export type GetIntegrationsIntegrationIdParameterIntegrationId = typeof GetIntegrationsIntegrationIdParameterIntegrationId.Type;

export const GetIntegrationsIntegrationIdPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ id: Schema.String, tool: Schema.Struct({ id: Schema.String, label: Schema.String, internal_label: Schema.NullOr(Schema.String), logo_url: Schema.URL, icon_url: Schema.URL }), category: Schema.Union(Schema.Literal("HRIS"), Schema.Literal("ATS"), Schema.Literal("ASSESSMENT"), Schema.Literal("LMS")), status: Schema.Union(Schema.Literal("ACTIVE"), Schema.Literal("INVALID"), Schema.Literal("INACTIVE")), setup_status: Schema.Union(Schema.Literal("INCOMPLETE"), Schema.Literal("FINAL_SYNC_PENDING"), Schema.Literal("COMPLETED")), end_user: Schema.Struct({ organization_name: Schema.String, creator_email: Schema.NullOr(Schema.String.pipe(Schema.pattern(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$")))), origin_id: Schema.NullOr(Schema.String) }), scope_config: Schema.Struct({ id: Schema.String, name: Schema.NullOr(Schema.String) }), data_expired_at: Schema.NullOr(Schema.String), created_at: Schema.String, beta: Schema.Boolean, read_models: Schema.Array(Schema.Struct({ id: Schema.String, label: Schema.String, is_available: Schema.Boolean, coverage_status: Schema.Union(Schema.Literal("SUPPORTED"), Schema.Literal("UNSUPPORTED"), Schema.Literal("NOT_IMPLEMENTED"), Schema.Literal("UNKNOWN")), scope_config_setting: Schema.Union(Schema.Literal("ENABLED"), Schema.Literal("DISABLED"), Schema.Literal("OPTIONAL")), opted_out_by_customer: Schema.Boolean, fields: Schema.Array(Schema.Struct({ id: Schema.String, is_available: Schema.Boolean, coverage_status: Schema.Union(Schema.Literal("SUPPORTED"), Schema.Literal("UNSUPPORTED"), Schema.Literal("NOT_IMPLEMENTED"), Schema.Literal("UNKNOWN")), scope_config_setting: Schema.Union(Schema.Literal("ENABLED"), Schema.Literal("DISABLED"), Schema.Literal("OPTIONAL")), opted_out_by_customer: Schema.Boolean })) })), write_actions: Schema.Array(Schema.Struct({ id: Schema.String, label: Schema.String, is_available: Schema.Boolean, coverage_status: Schema.Union(Schema.Literal("SUPPORTED"), Schema.Literal("UNSUPPORTED"), Schema.Literal("NOT_IMPLEMENTED"), Schema.Literal("UNKNOWN")), scope_config_setting: Schema.Union(Schema.Literal("ENABLED"), Schema.Literal("DISABLED"), Schema.Literal("OPTIONAL")), opted_out_by_customer: Schema.Boolean, fields: Schema.Array(Schema.Struct({ id: Schema.String, is_available: Schema.Boolean, coverage_status: Schema.Union(Schema.Literal("SUPPORTED"), Schema.Literal("UNSUPPORTED"), Schema.Literal("NOT_IMPLEMENTED"), Schema.Literal("UNKNOWN")) })) })) }) });
export type GetIntegrationsIntegrationIdPositiveResponse = typeof GetIntegrationsIntegrationIdPositiveResponse.Type;

export const PutIntegrationsIntegrationIdEnabledParameterIntegrationId = Schema.String;
export type PutIntegrationsIntegrationIdEnabledParameterIntegrationId = typeof PutIntegrationsIntegrationIdEnabledParameterIntegrationId.Type;

export const PutIntegrationsIntegrationIdEnabledPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Record({ key: Schema.String, value: Schema.Unknown }) });
export type PutIntegrationsIntegrationIdEnabledPositiveResponse = typeof PutIntegrationsIntegrationIdEnabledPositiveResponse.Type;

export const PutIntegrationsIntegrationIdEnabledRequestBody = Schema.Struct({ value: Schema.Boolean });
export type PutIntegrationsIntegrationIdEnabledRequestBody = typeof PutIntegrationsIntegrationIdEnabledRequestBody.Type;

export const PostIntegrationsIntegrationIdRelinkParameterIntegrationId = Schema.String;
export type PostIntegrationsIntegrationIdRelinkParameterIntegrationId = typeof PostIntegrationsIntegrationIdRelinkParameterIntegrationId.Type;

export const PostIntegrationsIntegrationIdRelinkPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ link: Schema.URL }) });
export type PostIntegrationsIntegrationIdRelinkPositiveResponse = typeof PostIntegrationsIntegrationIdRelinkPositiveResponse.Type;

export const PostIntegrationsIntegrationIdRelinkRequestBody = Schema.Struct({ language: NullOr_default_en_prop, scope_config_id: Schema.optional(Schema.NullOr(Schema.String)), link_type: Union_default_EMBEDDED_prop });
export type PostIntegrationsIntegrationIdRelinkRequestBody = typeof PostIntegrationsIntegrationIdRelinkRequestBody.Type;

export const PostIntegrationsIntegrationIdSetupLinkParameterIntegrationId = Schema.String;
export type PostIntegrationsIntegrationIdSetupLinkParameterIntegrationId = typeof PostIntegrationsIntegrationIdSetupLinkParameterIntegrationId.Type;

export const PostIntegrationsIntegrationIdSetupLinkPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ link: Schema.URL }) });
export type PostIntegrationsIntegrationIdSetupLinkPositiveResponse = typeof PostIntegrationsIntegrationIdSetupLinkPositiveResponse.Type;

export const PostIntegrationsIntegrationIdSetupLinkRequestBody = Schema.Struct({ language: NullOr_default_en_prop, link_type: Schema.Union(Schema.Literal("EMBEDDED"), Schema.Literal("MAGIC_LINK")) });
export type PostIntegrationsIntegrationIdSetupLinkRequestBody = typeof PostIntegrationsIntegrationIdSetupLinkRequestBody.Type;

export const GetIntegrationsIntegrationIdIntegrationFieldsParameterIntegrationId = Schema.String;
export type GetIntegrationsIntegrationIdIntegrationFieldsParameterIntegrationId = typeof GetIntegrationsIntegrationIdIntegrationFieldsParameterIntegrationId.Type;

export const GetIntegrationsIntegrationIdIntegrationFieldsParameterCursor = Schema.String;
export type GetIntegrationsIntegrationIdIntegrationFieldsParameterCursor = typeof GetIntegrationsIntegrationIdIntegrationFieldsParameterCursor.Type;

export const GetIntegrationsIntegrationIdIntegrationFieldsParameterPageSize = Schema_default_100;
export type GetIntegrationsIntegrationIdIntegrationFieldsParameterPageSize = typeof GetIntegrationsIntegrationIdIntegrationFieldsParameterPageSize.Type;

export const GetIntegrationsIntegrationIdIntegrationFieldsPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ results: Schema.Array(Schema.Struct({ id: Schema.String, key: Schema.String, model: Schema.String, type: Schema.Union(Schema.Literal("DEFAULT"), Schema.Literal("CUSTOM")), label: Schema.NullOr(Schema.String), is_passthrough_enabled: Schema.Boolean, is_writable: Schema.Boolean })), next_cursor: Schema.NullOr(Schema.String), next: Schema.NullOr(Schema.String) }) });
export type GetIntegrationsIntegrationIdIntegrationFieldsPositiveResponse = typeof GetIntegrationsIntegrationIdIntegrationFieldsPositiveResponse.Type;

export const PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationId = Schema.String;
export type PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationId = typeof PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationId.Type;

export const PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationFieldId = Schema.String;
export type PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationFieldId = typeof PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationFieldId.Type;

export const PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ id: Schema.String, key: Schema.String, model: Schema.String, type: Schema.Union(Schema.Literal("DEFAULT"), Schema.Literal("CUSTOM")), label: Schema.NullOr(Schema.String), is_passthrough_enabled: Schema.Boolean, is_writable: Schema.Boolean }) });
export type PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdPositiveResponse = typeof PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdPositiveResponse.Type;

export const PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdRequestBody = Schema.Struct({ enable_passthrough: Schema.NullOr(Schema.Boolean) });
export type PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdRequestBody = typeof PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdRequestBody.Type;

export const GetIntegrationsIntegrationIdCustomFieldsParameterIntegrationId = Schema.String;
export type GetIntegrationsIntegrationIdCustomFieldsParameterIntegrationId = typeof GetIntegrationsIntegrationIdCustomFieldsParameterIntegrationId.Type;

export const GetIntegrationsIntegrationIdCustomFieldsParameterCursor = Schema.String;
export type GetIntegrationsIntegrationIdCustomFieldsParameterCursor = typeof GetIntegrationsIntegrationIdCustomFieldsParameterCursor.Type;

export const GetIntegrationsIntegrationIdCustomFieldsParameterPageSize = Schema_default_100_4;
export type GetIntegrationsIntegrationIdCustomFieldsParameterPageSize = typeof GetIntegrationsIntegrationIdCustomFieldsParameterPageSize.Type;

export const GetIntegrationsIntegrationIdCustomFieldsPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ results: Schema.Array(Schema.Struct({ id: Schema.String, key: Schema.String, integration_field: Schema.NullOr(Schema.Struct({ id: Schema.String, key: Schema.String, type: Schema.Union(Schema.Literal("DEFAULT"), Schema.Literal("CUSTOM")), label: Schema.NullOr(Schema.String) })), model: Schema.String, label: Schema.NullOr(Schema.String), description: Schema.NullOr(Schema.String) })), next_cursor: Schema.NullOr(Schema.String), next: Schema.NullOr(Schema.String) }) });
export type GetIntegrationsIntegrationIdCustomFieldsPositiveResponse = typeof GetIntegrationsIntegrationIdCustomFieldsPositiveResponse.Type;

export const PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterIntegrationId = Schema.String;
export type PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterIntegrationId = typeof PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterIntegrationId.Type;

export const PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterCustomFieldId = Schema.String;
export type PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterCustomFieldId = typeof PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterCustomFieldId.Type;

export const PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ id: Schema.String, key: Schema.String, integration_field: Schema.NullOr(Schema.Struct({ id: Schema.String, key: Schema.String, type: Schema.Union(Schema.Literal("DEFAULT"), Schema.Literal("CUSTOM")), label: Schema.NullOr(Schema.String) })), model: Schema.String, label: Schema.NullOr(Schema.String), description: Schema.NullOr(Schema.String) }) });
export type PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdPositiveResponse = typeof PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdPositiveResponse.Type;

export const PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdRequestBody = Schema.Struct({ integration_field_id: Schema.NullOr(Schema.String) });
export type PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdRequestBody = typeof PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdRequestBody.Type;

export const GetToolsCategoryParameterCategory = Schema.Union(Schema.Literal("hris"), Schema.Literal("ats"), Schema.Literal("assessment"), Schema.Literal("lms"));
export type GetToolsCategoryParameterCategory = typeof GetToolsCategoryParameterCategory.Type;

export const GetToolsCategoryPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ tools: Schema.Array(Schema.Struct({ id: Schema.String, label: Schema.String, internal_label: Schema.NullOr(Schema.String), assets: Schema.Struct({ logo_url: Schema.String, icon_url: Schema.String, icon_black_url: Schema.String }), paid_api_details_markdown: Schema.NullOr(Schema.String), fast_track_details_markdown: Schema.NullOr(Schema.String), partner_only_details_markdown: Schema.NullOr(Schema.String), connection_guide_url: Schema.NullOr(Schema.String), coverage: Schema.Struct({ read_models: Schema.Array(Schema.Struct({ id: Schema.String, label: Schema.String, coverage_status: Schema.Union(Schema.Literal("SUPPORTED"), Schema.Literal("UNSUPPORTED"), Schema.Literal("NOT_IMPLEMENTED"), Schema.Literal("UNKNOWN")), fields: Schema.Array(Schema.Struct({ id: Schema.String, coverage_status: Schema.Union(Schema.Literal("SUPPORTED"), Schema.Literal("UNSUPPORTED"), Schema.Literal("NOT_IMPLEMENTED"), Schema.Literal("UNKNOWN")) })) })), write_actions: Schema.Array(Schema.Struct({ id: Schema.String, label: Schema.String, coverage_status: Schema.Union(Schema.Literal("SUPPORTED"), Schema.Literal("UNSUPPORTED"), Schema.Literal("NOT_IMPLEMENTED"), Schema.Literal("UNKNOWN")), fields: Schema.Array(Schema.Struct({ id: Schema.String, coverage_status: Schema.Union(Schema.Literal("SUPPORTED"), Schema.Literal("UNSUPPORTED"), Schema.Literal("NOT_IMPLEMENTED"), Schema.Literal("UNKNOWN")) })) })), features: Schema.Array(Schema.Struct({ id: Schema.String, label: Schema.String, coverage_status: Schema.Union(Schema.Literal("SUPPORTED"), Schema.Literal("UNSUPPORTED"), Schema.Literal("NOT_IMPLEMENTED"), Schema.Literal("UNKNOWN")) })) }) })) }) });
export type GetToolsCategoryPositiveResponse = typeof GetToolsCategoryPositiveResponse.Type;

export const PostHrisProvisioningGroupsGroupIdDiffParameterGroupId = Schema.String;
export type PostHrisProvisioningGroupsGroupIdDiffParameterGroupId = typeof PostHrisProvisioningGroupsGroupIdDiffParameterGroupId.Type;

export const PostHrisProvisioningGroupsGroupIdDiffPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ users: Schema.Struct({ to_provision: Schema.Array(Schema.Struct({ email: Schema.NullOr(Schema.String.pipe(Schema.pattern(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$")))), employee: Schema.Struct({ id: Schema.optional(Schema.String), remote_id: Schema.optional(Schema.NullOr(Schema.String)), first_name: Schema.optional(Schema.NullOr(Schema.String)), last_name: Schema.optional(Schema.NullOr(Schema.String)), groups: Schema.optional(Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), name: Schema.NullOr(Schema.String) }))), avatar: Schema.optional(Schema.NullOr(Schema.String)), work_location_id: Schema.optional(Schema.NullOr(Schema.String)), legal_entity_id: Schema.optional(Schema.NullOr(Schema.String)) }) })), to_deprovision: Schema.Array(Schema.Struct({ origin_id: Schema.String, email: Schema.String.pipe(Schema.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) })), already_provisioned: Schema.Array(Schema.Struct({ origin_id: Schema.String, email: Schema.String.pipe(Schema.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)), employee: Schema.Struct({ id: Schema.optional(Schema.String), remote_id: Schema.optional(Schema.NullOr(Schema.String)), first_name: Schema.optional(Schema.NullOr(Schema.String)), last_name: Schema.optional(Schema.NullOr(Schema.String)), groups: Schema.optional(Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), name: Schema.NullOr(Schema.String) }))), avatar: Schema.optional(Schema.NullOr(Schema.String)), work_location_id: Schema.optional(Schema.NullOr(Schema.String)), legal_entity_id: Schema.optional(Schema.NullOr(Schema.String)) }) })) }) }) });
export type PostHrisProvisioningGroupsGroupIdDiffPositiveResponse = typeof PostHrisProvisioningGroupsGroupIdDiffPositiveResponse.Type;

export const PostHrisProvisioningGroupsGroupIdDiffRequestBody = Schema.Struct({ provisioned_users: Schema.Array(Schema.Struct({ origin_id: Schema.String, email: Schema.String.pipe(Schema.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) })), options: Schema.Struct({ employee_fields: Schema.Array(Schema.Union(Schema.Literal("id"), Schema.Literal("remote_id"), Schema.Literal("first_name"), Schema.Literal("last_name"), Schema.Literal("groups"), Schema.Literal("avatar"), Schema.Literal("work_location_id"), Schema.Literal("legal_entity_id"))) }) });
export type PostHrisProvisioningGroupsGroupIdDiffRequestBody = typeof PostHrisProvisioningGroupsGroupIdDiffRequestBody.Type;

export const PostHrisProvisioningGroupsGroupIdSetupLinksParameterGroupId = Schema.String;
export type PostHrisProvisioningGroupsGroupIdSetupLinksParameterGroupId = typeof PostHrisProvisioningGroupsGroupIdSetupLinksParameterGroupId.Type;

export const PostHrisProvisioningGroupsGroupIdSetupLinksPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ url: Schema.URL, expires_at: Schema.String }) });
export type PostHrisProvisioningGroupsGroupIdSetupLinksPositiveResponse = typeof PostHrisProvisioningGroupsGroupIdSetupLinksPositiveResponse.Type;

export const PostHrisProvisioningGroupsGroupIdSetupLinksRequestBody = Schema.Struct({ language: NullOr_default_en_prop });
export type PostHrisProvisioningGroupsGroupIdSetupLinksRequestBody = typeof PostHrisProvisioningGroupsGroupIdSetupLinksRequestBody.Type;

export const GetHrisEmployeesParameterCursor = Schema.String;
export type GetHrisEmployeesParameterCursor = typeof GetHrisEmployeesParameterCursor.Type;

export const GetHrisEmployeesParameterPageSize = Schema_default_100_4;
export type GetHrisEmployeesParameterPageSize = typeof GetHrisEmployeesParameterPageSize.Type;

export const GetHrisEmployeesParameterUpdatedAfter = Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisEmployeesParameterUpdatedAfter = typeof GetHrisEmployeesParameterUpdatedAfter.Type;

export const GetHrisEmployeesParameterIncludeDeleted = Union_default_false;
export type GetHrisEmployeesParameterIncludeDeleted = typeof GetHrisEmployeesParameterIncludeDeleted.Type;

export const GetHrisEmployeesParameterIgnoreUnsupportedFilters = Union_default_false;
export type GetHrisEmployeesParameterIgnoreUnsupportedFilters = typeof GetHrisEmployeesParameterIgnoreUnsupportedFilters.Type;

export const GetHrisEmployeesParameterIds = Schema.String;
export type GetHrisEmployeesParameterIds = typeof GetHrisEmployeesParameterIds.Type;

export const GetHrisEmployeesParameterRemoteIds = Schema.String;
export type GetHrisEmployeesParameterRemoteIds = typeof GetHrisEmployeesParameterRemoteIds.Type;

export const GetHrisEmployeesParameterEmploymentStatus = Schema.Union(Schema.Literal("ACTIVE"), Schema.Literal("PENDING"), Schema.Literal("INACTIVE"), Schema.Literal("LEAVE"));
export type GetHrisEmployeesParameterEmploymentStatus = typeof GetHrisEmployeesParameterEmploymentStatus.Type;

export const GetHrisEmployeesParameterEmploymentStatuses = Schema.String;
export type GetHrisEmployeesParameterEmploymentStatuses = typeof GetHrisEmployeesParameterEmploymentStatuses.Type;

export const GetHrisEmployeesParameterGroupIds = Schema.String;
export type GetHrisEmployeesParameterGroupIds = typeof GetHrisEmployeesParameterGroupIds.Type;

export const GetHrisEmployeesParameterLegalEntityIds = Schema.String;
export type GetHrisEmployeesParameterLegalEntityIds = typeof GetHrisEmployeesParameterLegalEntityIds.Type;

export const GetHrisEmployeesParameterWorkLocationIds = Schema.String;
export type GetHrisEmployeesParameterWorkLocationIds = typeof GetHrisEmployeesParameterWorkLocationIds.Type;

export const GetHrisEmployeesParameterWorkEmails = Schema.String;
export type GetHrisEmployeesParameterWorkEmails = typeof GetHrisEmployeesParameterWorkEmails.Type;

export const GetHrisEmployeesParameterPersonalEmails = Schema.String;
export type GetHrisEmployeesParameterPersonalEmails = typeof GetHrisEmployeesParameterPersonalEmails.Type;

export const GetHrisEmployeesParameterCustomFields = Schema.String;
export type GetHrisEmployeesParameterCustomFields = typeof GetHrisEmployeesParameterCustomFields.Type;

export const GetHrisEmployeesPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.String, employee_number: Schema.NullOr(Schema.String), first_name: Schema.NullOr(Schema.String), last_name: Schema.NullOr(Schema.String), nationality: Schema.NullOr(Schema.String), display_full_name: Schema.NullOr(Schema.String), job_title: Schema.NullOr(Schema.String), work_email: Schema.optional(Schema.NullOr(Schema.String.pipe(Schema.pattern(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$"))))), personal_email: Schema.optional(Schema.NullOr(Schema.String.pipe(Schema.pattern(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$"))))), mobile_phone_number: Schema.NullOr(Schema.String), ssn: Schema.NullOr(Schema.String), tax_id: Schema.NullOr(Schema.String), gender: Schema.optional(Schema.Union(Schema.Union(Schema.Literal("MALE"), Schema.Literal("FEMALE"), Schema.Literal("NON_BINARY"), Schema.Literal("NOT_SPECIFIED")), Schema.String, Schema.Null)), ethnicity: Schema.optional(Schema.Union(Schema.Union(Schema.Literal("WHITE"), Schema.Literal("ASIAN"), Schema.Literal("HISPANIC_LATINO"), Schema.Literal("HAWAIIAN"), Schema.Literal("NATIVE_AMERICAN"), Schema.Literal("BLACK_AFRICAN_AMERICAN"), Schema.Literal("MULTIPLE_ETHNICITIES"), Schema.Literal("DECLINE_TO_SPECIFY")), Schema.String, Schema.Null)), marital_status: Schema.optional(Schema.Union(Schema.Union(Schema.Literal("SINGLE"), Schema.Literal("MARRIED"), Schema.Literal("DOMESTIC_PARTNERSHIP"), Schema.Literal("WIDOWED"), Schema.Literal("DIVORCED"), Schema.Literal("SEPARATED"), Schema.Literal("NOT_MARRIED")), Schema.String, Schema.Null)), employment_status: Schema.optional(Schema.Union(Schema.Union(Schema.Literal("ACTIVE"), Schema.Literal("PENDING"), Schema.Literal("INACTIVE"), Schema.Literal("LEAVE")), Schema.String, Schema.Null)), employment_type: Schema.optional(Schema.Union(Schema.Union(Schema.Literal("FULL_TIME"), Schema.Literal("PART_TIME"), Schema.Literal("CONTRACT"), Schema.Literal("INTERNSHIP"), Schema.Literal("FREELANCE"), Schema.Literal("WORKING_STUDENT"), Schema.Literal("APPRENTICESHIP"), Schema.Literal("TRAINING")), Schema.String, Schema.Null)), weekly_hours: Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), avatar: Schema.NullOr(Schema.String), work_location_id: Schema.NullOr(Schema.String), legal_entity_id: Schema.NullOr(Schema.String), manager_id: Schema.NullOr(Schema.String), home_address: Schema.optional(Schema.NullOr(Schema.Struct({ city: Schema.optional(Schema.NullOr(Schema.String)), country: Schema.optional(Schema.NullOr(Schema.String)), raw: Schema.optional(Schema.NullOr(Schema.String)), state: Schema.optional(Schema.NullOr(Schema.String)), street_1: Schema.optional(Schema.NullOr(Schema.String)), street_2: Schema.optional(Schema.NullOr(Schema.String)), zip_code: Schema.optional(Schema.NullOr(Schema.String)) }))), bank_accounts: Schema.optional(Schema.NullOr(Schema.Array(Schema.Struct({ iban: Schema.optional(Schema.NullOr(Schema.String)), bic: Schema.optional(Schema.NullOr(Schema.String)), account_number: Schema.optional(Schema.NullOr(Schema.String)), holder_name: Schema.optional(Schema.NullOr(Schema.String)), bank_name: Schema.optional(Schema.NullOr(Schema.String)), domestic_bank_routing: Schema.optional(Schema.NullOr(Schema.Struct({ number: Schema.String, type: Schema.NullOr(Schema.Union(Schema.Literal("GB_SORT_CODE"), Schema.Literal("DE_BANKLEITZAHL"), Schema.Literal("US_ABA_ROUTING_TRANSIT_NUMBER"), Schema.Literal("CA_ROUTING_NUMBER"), Schema.Literal("AU_BSB_CODE"), Schema.Literal("FR_RIB"))) }))) })))), date_of_birth: Schema.NullOr(Schema.String), start_date: Schema.NullOr(Schema.String), termination_date: Schema.NullOr(Schema.String), remote_created_at: Schema.NullOr(Schema.String), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), custom_fields: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })), integration_fields: Schema.Array(Schema.Struct({ id: Schema.String, key: Schema.String, type: Schema.Union(Schema.Literal("DEFAULT"), Schema.Literal("CUSTOM")), value: Schema.optional(Schema.Null), label: Schema.NullOr(Schema.String) })), remote_data: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })), employments: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), employee_id: Schema.String, job_title: Schema.NullOr(Schema.String), pay_rate: Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), pay_period: Schema.optional(Schema.Union(Schema.Union(Schema.Literal("HOUR"), Schema.Literal("DAY"), Schema.Literal("WEEK"), Schema.Literal("TWO_WEEKS"), Schema.Literal("HALF_MONTH"), Schema.Literal("MONTH"), Schema.Literal("TWO_MONTHS"), Schema.Literal("QUARTER"), Schema.Literal("HALF_YEAR"), Schema.Literal("YEAR")), Schema.String, Schema.Null)), pay_frequency: Schema.optional(Schema.Union(Schema.Union(Schema.Literal("DAILY"), Schema.Literal("WEEKLY"), Schema.Literal("BIWEEKLY"), Schema.Literal("MONTHLY"), Schema.Literal("SEMIMONTHLY"), Schema.Literal("QUARTERLY"), Schema.Literal("SEMIANNUALLY"), Schema.Literal("ANNUALLY"), Schema.Literal("PRO_RATA")), Schema.String, Schema.Null)), employment_type: Schema.optional(Schema.Union(Schema.Union(Schema.Literal("FULL_TIME"), Schema.Literal("PART_TIME"), Schema.Literal("CONTRACT"), Schema.Literal("INTERNSHIP"), Schema.Literal("FREELANCE"), Schema.Literal("WORKING_STUDENT"), Schema.Literal("APPRENTICESHIP"), Schema.Literal("TRAINING")), Schema.String, Schema.Null)), pay_currency: Schema.NullOr(Schema.String), effective_date: Schema.NullOr(Schema.String), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })), custom_fields: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })), integration_fields: Schema.Array(Schema.Struct({ id: Schema.String, key: Schema.String, type: Schema.Union(Schema.Literal("DEFAULT"), Schema.Literal("CUSTOM")), value: Schema.optional(Schema.Null), label: Schema.NullOr(Schema.String) })) })), time_off_balances: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), employee_id: Schema.String, type_id: Schema.String, balance: Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), balance_unit: Schema.NullOr(Schema.Union(Schema.Literal("HOURS"), Schema.Literal("DAYS"))), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), used: Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), used_unit: Schema.NullOr(Schema.Union(Schema.Literal("HOURS"), Schema.Literal("DAYS"))), remote_data: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })), manager: Schema.NullOr(Schema.Struct({ first_name: Schema.NullOr(Schema.String), last_name: Schema.NullOr(Schema.String), display_full_name: Schema.NullOr(Schema.String), id: Schema.String, employee_number: Schema.NullOr(Schema.String), work_email: Schema.optional(Schema.NullOr(Schema.String.pipe(Schema.pattern(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$"))))), remote_id: Schema.String, employment_status: Schema.optional(Schema.Union(Schema.Union(Schema.Literal("ACTIVE"), Schema.Literal("PENDING"), Schema.Literal("INACTIVE"), Schema.Literal("LEAVE")), Schema.String, Schema.Null)), termination_date: Schema.NullOr(Schema.String) })), groups: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.String, name: Schema.NullOr(Schema.String), type: Schema.NullOr(Schema.Union(Schema.Literal("DEPARTMENT"), Schema.Literal("TEAM"), Schema.Literal("COST_CENTER"))) })), legal_entity: Schema.NullOr(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), name: Schema.NullOr(Schema.String), address: Schema.optional(Schema.NullOr(Schema.Struct({ city: Schema.optional(Schema.NullOr(Schema.String)), country: Schema.optional(Schema.NullOr(Schema.String)), raw: Schema.optional(Schema.NullOr(Schema.String)), state: Schema.optional(Schema.NullOr(Schema.String)), street_1: Schema.optional(Schema.NullOr(Schema.String)), street_2: Schema.optional(Schema.NullOr(Schema.String)), zip_code: Schema.optional(Schema.NullOr(Schema.String)) }))) })), teams: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.String, name: Schema.NullOr(Schema.String), type: Schema.NullOr(Schema.Union(Schema.Literal("DEPARTMENT"), Schema.Literal("TEAM"), Schema.Literal("COST_CENTER"))) })), work_location: Schema.NullOr(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), name: Schema.NullOr(Schema.String), address: Schema.optional(Schema.NullOr(Schema.Struct({ city: Schema.optional(Schema.NullOr(Schema.String)), country: Schema.optional(Schema.NullOr(Schema.String)), raw: Schema.optional(Schema.NullOr(Schema.String)), state: Schema.optional(Schema.NullOr(Schema.String)), street_1: Schema.optional(Schema.NullOr(Schema.String)), street_2: Schema.optional(Schema.NullOr(Schema.String)), zip_code: Schema.optional(Schema.NullOr(Schema.String)) }))), type: Schema.NullOr(Schema.String), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })) })) }) });
export type GetHrisEmployeesPositiveResponse = typeof GetHrisEmployeesPositiveResponse.Type;

export const PostHrisEmployeesPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ id: Schema.String, remote_id: Schema.String, employee_number: Schema.NullOr(Schema.String), first_name: Schema.NullOr(Schema.String), last_name: Schema.NullOr(Schema.String), nationality: Schema.NullOr(Schema.String), display_full_name: Schema.NullOr(Schema.String), job_title: Schema.NullOr(Schema.String), work_email: Schema.optional(Schema.NullOr(Schema.String.pipe(Schema.pattern(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$"))))), personal_email: Schema.optional(Schema.NullOr(Schema.String.pipe(Schema.pattern(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$"))))), mobile_phone_number: Schema.NullOr(Schema.String), ssn: Schema.NullOr(Schema.String), tax_id: Schema.NullOr(Schema.String), gender: Schema.optional(Schema.Union(Schema.Union(Schema.Literal("MALE"), Schema.Literal("FEMALE"), Schema.Literal("NON_BINARY"), Schema.Literal("NOT_SPECIFIED")), Schema.String, Schema.Null)), ethnicity: Schema.optional(Schema.Union(Schema.Union(Schema.Literal("WHITE"), Schema.Literal("ASIAN"), Schema.Literal("HISPANIC_LATINO"), Schema.Literal("HAWAIIAN"), Schema.Literal("NATIVE_AMERICAN"), Schema.Literal("BLACK_AFRICAN_AMERICAN"), Schema.Literal("MULTIPLE_ETHNICITIES"), Schema.Literal("DECLINE_TO_SPECIFY")), Schema.String, Schema.Null)), marital_status: Schema.optional(Schema.Union(Schema.Union(Schema.Literal("SINGLE"), Schema.Literal("MARRIED"), Schema.Literal("DOMESTIC_PARTNERSHIP"), Schema.Literal("WIDOWED"), Schema.Literal("DIVORCED"), Schema.Literal("SEPARATED"), Schema.Literal("NOT_MARRIED")), Schema.String, Schema.Null)), employment_status: Schema.optional(Schema.Union(Schema.Union(Schema.Literal("ACTIVE"), Schema.Literal("PENDING"), Schema.Literal("INACTIVE"), Schema.Literal("LEAVE")), Schema.String, Schema.Null)), employment_type: Schema.optional(Schema.Union(Schema.Union(Schema.Literal("FULL_TIME"), Schema.Literal("PART_TIME"), Schema.Literal("CONTRACT"), Schema.Literal("INTERNSHIP"), Schema.Literal("FREELANCE"), Schema.Literal("WORKING_STUDENT"), Schema.Literal("APPRENTICESHIP"), Schema.Literal("TRAINING")), Schema.String, Schema.Null)), weekly_hours: Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), avatar: Schema.NullOr(Schema.String), work_location_id: Schema.NullOr(Schema.String), legal_entity_id: Schema.NullOr(Schema.String), manager_id: Schema.NullOr(Schema.String), home_address: Schema.optional(Schema.NullOr(Schema.Struct({ city: Schema.optional(Schema.NullOr(Schema.String)), country: Schema.optional(Schema.NullOr(Schema.String)), raw: Schema.optional(Schema.NullOr(Schema.String)), state: Schema.optional(Schema.NullOr(Schema.String)), street_1: Schema.optional(Schema.NullOr(Schema.String)), street_2: Schema.optional(Schema.NullOr(Schema.String)), zip_code: Schema.optional(Schema.NullOr(Schema.String)) }))), bank_accounts: Schema.optional(Schema.NullOr(Schema.Array(Schema.Struct({ iban: Schema.optional(Schema.NullOr(Schema.String)), bic: Schema.optional(Schema.NullOr(Schema.String)), account_number: Schema.optional(Schema.NullOr(Schema.String)), holder_name: Schema.optional(Schema.NullOr(Schema.String)), bank_name: Schema.optional(Schema.NullOr(Schema.String)), domestic_bank_routing: Schema.optional(Schema.NullOr(Schema.Struct({ number: Schema.String, type: Schema.NullOr(Schema.Union(Schema.Literal("GB_SORT_CODE"), Schema.Literal("DE_BANKLEITZAHL"), Schema.Literal("US_ABA_ROUTING_TRANSIT_NUMBER"), Schema.Literal("CA_ROUTING_NUMBER"), Schema.Literal("AU_BSB_CODE"), Schema.Literal("FR_RIB"))) }))) })))), date_of_birth: Schema.NullOr(Schema.String), start_date: Schema.NullOr(Schema.String), termination_date: Schema.NullOr(Schema.String), remote_created_at: Schema.NullOr(Schema.String), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), custom_fields: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })), integration_fields: Schema.Array(Schema.Struct({ id: Schema.String, key: Schema.String, type: Schema.Union(Schema.Literal("DEFAULT"), Schema.Literal("CUSTOM")), value: Schema.optional(Schema.Null), label: Schema.NullOr(Schema.String) })), remote_data: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })) }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PostHrisEmployeesPositiveResponse = typeof PostHrisEmployeesPositiveResponse.Type;

export const PostHrisEmployeesRequestBody = Schema.Struct({ first_name: Schema.String, last_name: Schema.String, work_email: Schema.optional(Schema.String.pipe(Schema.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))), gender: Schema.optional(Schema.Union(Schema.Literal("MALE"), Schema.Literal("FEMALE"), Schema.Literal("NON_BINARY"), Schema.Literal("NOT_SPECIFIED"))), job_title: Schema.optional(Schema.String), home_address: Schema.optional(Schema.Struct({ street_1: Schema.optional(Schema.String), street_2: Schema.optional(Schema.String), city: Schema.optional(Schema.String), state: Schema.optional(Schema.String), zip_code: Schema.optional(Schema.String), country: Schema.optional(Schema.String.pipe(Schema.pattern(new RegExp("^[A-Z]{2}$")))) })), date_of_birth: Schema.optional(Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), mobile_phone_number: Schema.optional(Schema.String), home_phone_number: Schema.optional(Schema.String), nationality: Schema.optional(Schema.String.pipe(Schema.pattern(new RegExp("^[A-Z]{2}$")))), start_date: Schema.optional(Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), legal_entity_id: Schema.optional(Schema.String), location_id: Schema.optional(Schema.String), remote_fields: Schema.optional(Schema.Struct({ humaans: Schema.optional(Schema.Struct({ employee: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })), hibob: Schema.optional(Schema.Struct({ employee: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })), sympa: Schema.optional(Schema.Struct({ GenericNewHire: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })), silae: Schema.optional(Schema.Struct({ siret: Schema.optional(Schema.String), employee: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })), employment: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })), peoplehr: Schema.optional(Schema.Struct({ job_role_effective_date: Schema.optional(Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), department: Schema.optional(Schema.String) })), zohopeople: Schema.optional(Schema.Struct({ employee_id: Schema.optional(Schema.String.pipe(Schema.minLength(1))) })), workday: Schema.optional(Schema.Struct({ job_requisition_id: Schema.optional(Schema.String), position_id: Schema.optional(Schema.String), ssn: Schema.optional(Schema.String), bank_account: Schema.optional(Schema.Struct({ iban: Schema.String, bic: Schema.String, bank_name: Schema.String })) })), deel: Schema.optional(Schema.Struct({ candidate_id: Schema.String, candidate_link: Schema.String })), bamboohr: Schema.optional(Schema.Struct({ employee: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })), oracle: Schema.optional(Schema.Struct({ group_id: Schema.String, department_id: Schema.String })), adpworkforcenow: Schema.optional(Schema.Struct({ onboarding_template_code: Schema.String, applicant_payroll_profile_group_code: Schema.String, manager_position_id: Schema.optional(Schema.String), home_organization_unit_code: Schema.optional(Schema.String), personal_email: Schema.optional(Schema.String) })), azuread: Schema.optional(Schema.Struct({ password: Schema.String })), paycor: Schema.optional(Schema.Struct({ paygroupRemoteId: Schema.String, departmentRemoteId: Schema.String })), planday: Schema.optional(Schema.Struct({ department_remote_id: Schema.String })), dayforce: Schema.optional(Schema.Struct({ social_security_number: Schema.String, pay_type: Schema.String, pay_class: Schema.String, pay_group: Schema.String, base_rate: Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308)), role: Schema.String, location: Schema.String, department: Schema.String, job: Schema.String, country: Schema.String })) })) });
export type PostHrisEmployeesRequestBody = typeof PostHrisEmployeesRequestBody.Type;

export const Schema1 = Schema.suspend(() => Schema.Record({ key: Schema.String, value: Schema.Union(Schema.Struct({ label: Schema.String, required: Schema.Boolean, description: Schema.optional(Schema.NullOr(Schema.String)), unified_key: Schema.optional(Schema.NullOr(Schema.Union(Schema.Literal("first_name"), Schema.Literal("last_name"), Schema.Literal("date_of_birth"), Schema.Literal("gender"), Schema.Literal("home_address.city"), Schema.Literal("home_address.country"), Schema.Literal("home_address.state"), Schema.Literal("home_address.street_1"), Schema.Literal("home_address.street_2"), Schema.Literal("home_address.zip_code"), Schema.Literal("job_title"), Schema.Literal("legal_entity_id"), Schema.Literal("location_id"), Schema.Literal("mobile_phone_number"), Schema.Literal("home_phone_number"), Schema.Literal("nationality"), Schema.Literal("start_date"), Schema.Literal("work_email"), Schema.Literal("private_email"), Schema.Literal("yearly_salary")))), type: Schema.String, min_length: Schema.optional(Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308)))), max_length: Schema.optional(Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308)))), reg_exp: Schema.optional(Schema.NullOr(Schema.String)) }), Schema.Struct({ label: Schema.String, required: Schema.Boolean, description: Schema.optional(Schema.NullOr(Schema.String)), unified_key: Schema.optional(Schema.NullOr(Schema.Union(Schema.Literal("first_name"), Schema.Literal("last_name"), Schema.Literal("date_of_birth"), Schema.Literal("gender"), Schema.Literal("home_address.city"), Schema.Literal("home_address.country"), Schema.Literal("home_address.state"), Schema.Literal("home_address.street_1"), Schema.Literal("home_address.street_2"), Schema.Literal("home_address.zip_code"), Schema.Literal("job_title"), Schema.Literal("legal_entity_id"), Schema.Literal("location_id"), Schema.Literal("mobile_phone_number"), Schema.Literal("home_phone_number"), Schema.Literal("nationality"), Schema.Literal("start_date"), Schema.Literal("work_email"), Schema.Literal("private_email"), Schema.Literal("yearly_salary")))), type: Schema.String, min: Schema.optional(Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308)))), max: Schema.optional(Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308)))) }), Schema.Struct({ label: Schema.String, required: Schema.Boolean, description: Schema.optional(Schema.NullOr(Schema.String)), unified_key: Schema.optional(Schema.NullOr(Schema.Union(Schema.Literal("first_name"), Schema.Literal("last_name"), Schema.Literal("date_of_birth"), Schema.Literal("gender"), Schema.Literal("home_address.city"), Schema.Literal("home_address.country"), Schema.Literal("home_address.state"), Schema.Literal("home_address.street_1"), Schema.Literal("home_address.street_2"), Schema.Literal("home_address.zip_code"), Schema.Literal("job_title"), Schema.Literal("legal_entity_id"), Schema.Literal("location_id"), Schema.Literal("mobile_phone_number"), Schema.Literal("home_phone_number"), Schema.Literal("nationality"), Schema.Literal("start_date"), Schema.Literal("work_email"), Schema.Literal("private_email"), Schema.Literal("yearly_salary")))), type: Schema.String }), Schema.Struct({ label: Schema.String, required: Schema.Boolean, description: Schema.optional(Schema.NullOr(Schema.String)), unified_key: Schema.optional(Schema.NullOr(Schema.Union(Schema.Literal("first_name"), Schema.Literal("last_name"), Schema.Literal("date_of_birth"), Schema.Literal("gender"), Schema.Literal("home_address.city"), Schema.Literal("home_address.country"), Schema.Literal("home_address.state"), Schema.Literal("home_address.street_1"), Schema.Literal("home_address.street_2"), Schema.Literal("home_address.zip_code"), Schema.Literal("job_title"), Schema.Literal("legal_entity_id"), Schema.Literal("location_id"), Schema.Literal("mobile_phone_number"), Schema.Literal("home_phone_number"), Schema.Literal("nationality"), Schema.Literal("start_date"), Schema.Literal("work_email"), Schema.Literal("private_email"), Schema.Literal("yearly_salary")))), type: Schema.String, options: Schema.Union(Schema.Struct({ type: Schema.String, entries: Schema.Array(Schema.Struct({ id: Schema.String, label: Schema.String, unified_value: Schema.optional(Schema.String), remote_id: Schema.Union(Schema.String, Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))) })) }), Schema.Struct({ type: Schema.String, link: Schema.String })) }), Schema.Struct({ label: Schema.String, required: Schema.Boolean, description: Schema.optional(Schema.NullOr(Schema.String)), unified_key: Schema.optional(Schema.NullOr(Schema.String)), type: Schema.String, min_items: Schema.optional(Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308)))), max_items: Schema.optional(Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308)))), options: Schema.Union(Schema.Struct({ type: Schema.String, entries: Schema.Array(Schema.Struct({ id: Schema.String, label: Schema.String, unified_value: Schema.optional(Schema.String), remote_id: Schema.Union(Schema.String, Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))) })) }), Schema.Struct({ type: Schema.String, link: Schema.String })) }), Schema.Struct({ label: Schema.String, required: Schema.Boolean, description: Schema.optional(Schema.NullOr(Schema.String)), unified_key: Schema.optional(Schema.NullOr(Schema.Union(Schema.Literal("first_name"), Schema.Literal("last_name"), Schema.Literal("date_of_birth"), Schema.Literal("gender"), Schema.Literal("home_address.city"), Schema.Literal("home_address.country"), Schema.Literal("home_address.state"), Schema.Literal("home_address.street_1"), Schema.Literal("home_address.street_2"), Schema.Literal("home_address.zip_code"), Schema.Literal("job_title"), Schema.Literal("legal_entity_id"), Schema.Literal("location_id"), Schema.Literal("mobile_phone_number"), Schema.Literal("home_phone_number"), Schema.Literal("nationality"), Schema.Literal("start_date"), Schema.Literal("work_email"), Schema.Literal("private_email"), Schema.Literal("yearly_salary")))), type: Schema.String }), Schema.Struct({ label: Schema.String, required: Schema.Boolean, description: Schema.optional(Schema.NullOr(Schema.String)), unified_key: Schema.optional(Schema.NullOr(Schema.Union(Schema.Literal("first_name"), Schema.Literal("last_name"), Schema.Literal("date_of_birth"), Schema.Literal("gender"), Schema.Literal("home_address.city"), Schema.Literal("home_address.country"), Schema.Literal("home_address.state"), Schema.Literal("home_address.street_1"), Schema.Literal("home_address.street_2"), Schema.Literal("home_address.zip_code"), Schema.Literal("job_title"), Schema.Literal("legal_entity_id"), Schema.Literal("location_id"), Schema.Literal("mobile_phone_number"), Schema.Literal("home_phone_number"), Schema.Literal("nationality"), Schema.Literal("start_date"), Schema.Literal("work_email"), Schema.Literal("private_email"), Schema.Literal("yearly_salary")))), type: Schema.String, properties: Schema1 }), Schema.Struct({ label: Schema.String, required: Schema.Boolean, description: Schema.optional(Schema.NullOr(Schema.String)), unified_key: Schema.optional(Schema.NullOr(Schema.Union(Schema.Literal("first_name"), Schema.Literal("last_name"), Schema.Literal("date_of_birth"), Schema.Literal("gender"), Schema.Literal("home_address.city"), Schema.Literal("home_address.country"), Schema.Literal("home_address.state"), Schema.Literal("home_address.street_1"), Schema.Literal("home_address.street_2"), Schema.Literal("home_address.zip_code"), Schema.Literal("job_title"), Schema.Literal("legal_entity_id"), Schema.Literal("location_id"), Schema.Literal("mobile_phone_number"), Schema.Literal("home_phone_number"), Schema.Literal("nationality"), Schema.Literal("start_date"), Schema.Literal("work_email"), Schema.Literal("private_email"), Schema.Literal("yearly_salary")))), type: Schema.String, item_type: Schema2, min_items: Schema.optional(Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308)))), max_items: Schema.optional(Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308)))) }), Schema.Struct({ label: Schema.String, required: Schema.Boolean, description: Schema.optional(Schema.NullOr(Schema.String)), unified_key: Schema.optional(Schema.NullOr(Schema.Union(Schema.Literal("first_name"), Schema.Literal("last_name"), Schema.Literal("date_of_birth"), Schema.Literal("gender"), Schema.Literal("home_address.city"), Schema.Literal("home_address.country"), Schema.Literal("home_address.state"), Schema.Literal("home_address.street_1"), Schema.Literal("home_address.street_2"), Schema.Literal("home_address.zip_code"), Schema.Literal("job_title"), Schema.Literal("legal_entity_id"), Schema.Literal("location_id"), Schema.Literal("mobile_phone_number"), Schema.Literal("home_phone_number"), Schema.Literal("nationality"), Schema.Literal("start_date"), Schema.Literal("work_email"), Schema.Literal("private_email"), Schema.Literal("yearly_salary")))), type: Schema.String, file_restrictions: Schema.Struct({ accepted_mime_types: Schema.Array(Schema.String), max_file_size: Schema.optional(Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308)))) }) })) }));
export type Schema1 = typeof Schema1.Type;

export const Schema2 = Schema.suspend(() => Schema.Union(Schema.Struct({ label: Schema.String, required: Schema.Boolean, description: Schema.optional(Schema.NullOr(Schema.String)), unified_key: Schema.optional(Schema.NullOr(Schema.Union(Schema.Literal("first_name"), Schema.Literal("last_name"), Schema.Literal("date_of_birth"), Schema.Literal("gender"), Schema.Literal("home_address.city"), Schema.Literal("home_address.country"), Schema.Literal("home_address.state"), Schema.Literal("home_address.street_1"), Schema.Literal("home_address.street_2"), Schema.Literal("home_address.zip_code"), Schema.Literal("job_title"), Schema.Literal("legal_entity_id"), Schema.Literal("location_id"), Schema.Literal("mobile_phone_number"), Schema.Literal("home_phone_number"), Schema.Literal("nationality"), Schema.Literal("start_date"), Schema.Literal("work_email"), Schema.Literal("private_email"), Schema.Literal("yearly_salary")))), type: Schema.String, min_length: Schema.optional(Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308)))), max_length: Schema.optional(Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308)))), reg_exp: Schema.optional(Schema.NullOr(Schema.String)) }), Schema.Struct({ label: Schema.String, required: Schema.Boolean, description: Schema.optional(Schema.NullOr(Schema.String)), unified_key: Schema.optional(Schema.NullOr(Schema.Union(Schema.Literal("first_name"), Schema.Literal("last_name"), Schema.Literal("date_of_birth"), Schema.Literal("gender"), Schema.Literal("home_address.city"), Schema.Literal("home_address.country"), Schema.Literal("home_address.state"), Schema.Literal("home_address.street_1"), Schema.Literal("home_address.street_2"), Schema.Literal("home_address.zip_code"), Schema.Literal("job_title"), Schema.Literal("legal_entity_id"), Schema.Literal("location_id"), Schema.Literal("mobile_phone_number"), Schema.Literal("home_phone_number"), Schema.Literal("nationality"), Schema.Literal("start_date"), Schema.Literal("work_email"), Schema.Literal("private_email"), Schema.Literal("yearly_salary")))), type: Schema.String, min: Schema.optional(Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308)))), max: Schema.optional(Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308)))) }), Schema.Struct({ label: Schema.String, required: Schema.Boolean, description: Schema.optional(Schema.NullOr(Schema.String)), unified_key: Schema.optional(Schema.NullOr(Schema.Union(Schema.Literal("first_name"), Schema.Literal("last_name"), Schema.Literal("date_of_birth"), Schema.Literal("gender"), Schema.Literal("home_address.city"), Schema.Literal("home_address.country"), Schema.Literal("home_address.state"), Schema.Literal("home_address.street_1"), Schema.Literal("home_address.street_2"), Schema.Literal("home_address.zip_code"), Schema.Literal("job_title"), Schema.Literal("legal_entity_id"), Schema.Literal("location_id"), Schema.Literal("mobile_phone_number"), Schema.Literal("home_phone_number"), Schema.Literal("nationality"), Schema.Literal("start_date"), Schema.Literal("work_email"), Schema.Literal("private_email"), Schema.Literal("yearly_salary")))), type: Schema.String }), Schema.Struct({ label: Schema.String, required: Schema.Boolean, description: Schema.optional(Schema.NullOr(Schema.String)), unified_key: Schema.optional(Schema.NullOr(Schema.Union(Schema.Literal("first_name"), Schema.Literal("last_name"), Schema.Literal("date_of_birth"), Schema.Literal("gender"), Schema.Literal("home_address.city"), Schema.Literal("home_address.country"), Schema.Literal("home_address.state"), Schema.Literal("home_address.street_1"), Schema.Literal("home_address.street_2"), Schema.Literal("home_address.zip_code"), Schema.Literal("job_title"), Schema.Literal("legal_entity_id"), Schema.Literal("location_id"), Schema.Literal("mobile_phone_number"), Schema.Literal("home_phone_number"), Schema.Literal("nationality"), Schema.Literal("start_date"), Schema.Literal("work_email"), Schema.Literal("private_email"), Schema.Literal("yearly_salary")))), type: Schema.String, options: Schema.Union(Schema.Struct({ type: Schema.String, entries: Schema.Array(Schema.Struct({ id: Schema.String, label: Schema.String, unified_value: Schema.optional(Schema.String), remote_id: Schema.Union(Schema.String, Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))) })) }), Schema.Struct({ type: Schema.String, link: Schema.String })) }), Schema.Struct({ label: Schema.String, required: Schema.Boolean, description: Schema.optional(Schema.NullOr(Schema.String)), unified_key: Schema.optional(Schema.NullOr(Schema.String)), type: Schema.String, min_items: Schema.optional(Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308)))), max_items: Schema.optional(Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308)))), options: Schema.Union(Schema.Struct({ type: Schema.String, entries: Schema.Array(Schema.Struct({ id: Schema.String, label: Schema.String, unified_value: Schema.optional(Schema.String), remote_id: Schema.Union(Schema.String, Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))) })) }), Schema.Struct({ type: Schema.String, link: Schema.String })) }), Schema.Struct({ label: Schema.String, required: Schema.Boolean, description: Schema.optional(Schema.NullOr(Schema.String)), unified_key: Schema.optional(Schema.NullOr(Schema.Union(Schema.Literal("first_name"), Schema.Literal("last_name"), Schema.Literal("date_of_birth"), Schema.Literal("gender"), Schema.Literal("home_address.city"), Schema.Literal("home_address.country"), Schema.Literal("home_address.state"), Schema.Literal("home_address.street_1"), Schema.Literal("home_address.street_2"), Schema.Literal("home_address.zip_code"), Schema.Literal("job_title"), Schema.Literal("legal_entity_id"), Schema.Literal("location_id"), Schema.Literal("mobile_phone_number"), Schema.Literal("home_phone_number"), Schema.Literal("nationality"), Schema.Literal("start_date"), Schema.Literal("work_email"), Schema.Literal("private_email"), Schema.Literal("yearly_salary")))), type: Schema.String }), Schema.Struct({ label: Schema.String, required: Schema.Boolean, description: Schema.optional(Schema.NullOr(Schema.String)), unified_key: Schema.optional(Schema.NullOr(Schema.Union(Schema.Literal("first_name"), Schema.Literal("last_name"), Schema.Literal("date_of_birth"), Schema.Literal("gender"), Schema.Literal("home_address.city"), Schema.Literal("home_address.country"), Schema.Literal("home_address.state"), Schema.Literal("home_address.street_1"), Schema.Literal("home_address.street_2"), Schema.Literal("home_address.zip_code"), Schema.Literal("job_title"), Schema.Literal("legal_entity_id"), Schema.Literal("location_id"), Schema.Literal("mobile_phone_number"), Schema.Literal("home_phone_number"), Schema.Literal("nationality"), Schema.Literal("start_date"), Schema.Literal("work_email"), Schema.Literal("private_email"), Schema.Literal("yearly_salary")))), type: Schema.String, properties: Schema1 }), Schema.Struct({ label: Schema.String, required: Schema.Boolean, description: Schema.optional(Schema.NullOr(Schema.String)), unified_key: Schema.optional(Schema.NullOr(Schema.Union(Schema.Literal("first_name"), Schema.Literal("last_name"), Schema.Literal("date_of_birth"), Schema.Literal("gender"), Schema.Literal("home_address.city"), Schema.Literal("home_address.country"), Schema.Literal("home_address.state"), Schema.Literal("home_address.street_1"), Schema.Literal("home_address.street_2"), Schema.Literal("home_address.zip_code"), Schema.Literal("job_title"), Schema.Literal("legal_entity_id"), Schema.Literal("location_id"), Schema.Literal("mobile_phone_number"), Schema.Literal("home_phone_number"), Schema.Literal("nationality"), Schema.Literal("start_date"), Schema.Literal("work_email"), Schema.Literal("private_email"), Schema.Literal("yearly_salary")))), type: Schema.String, item_type: Schema2, min_items: Schema.optional(Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308)))), max_items: Schema.optional(Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308)))) }), Schema.Struct({ label: Schema.String, required: Schema.Boolean, description: Schema.optional(Schema.NullOr(Schema.String)), unified_key: Schema.optional(Schema.NullOr(Schema.Union(Schema.Literal("first_name"), Schema.Literal("last_name"), Schema.Literal("date_of_birth"), Schema.Literal("gender"), Schema.Literal("home_address.city"), Schema.Literal("home_address.country"), Schema.Literal("home_address.state"), Schema.Literal("home_address.street_1"), Schema.Literal("home_address.street_2"), Schema.Literal("home_address.zip_code"), Schema.Literal("job_title"), Schema.Literal("legal_entity_id"), Schema.Literal("location_id"), Schema.Literal("mobile_phone_number"), Schema.Literal("home_phone_number"), Schema.Literal("nationality"), Schema.Literal("start_date"), Schema.Literal("work_email"), Schema.Literal("private_email"), Schema.Literal("yearly_salary")))), type: Schema.String, file_restrictions: Schema.Struct({ accepted_mime_types: Schema.Array(Schema.String), max_file_size: Schema.optional(Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308)))) }) })));
export type Schema2 = typeof Schema2.Type;

export const GetHrisEmployeesFormPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ properties: Schema.Record({ key: Schema.String, value: Schema.Union(Schema.Struct({ label: Schema.String, required: Schema.Boolean, description: Schema.optional(Schema.NullOr(Schema.String)), unified_key: Schema.optional(Schema.NullOr(Schema.Union(Schema.Literal("first_name"), Schema.Literal("last_name"), Schema.Literal("date_of_birth"), Schema.Literal("gender"), Schema.Literal("home_address.city"), Schema.Literal("home_address.country"), Schema.Literal("home_address.state"), Schema.Literal("home_address.street_1"), Schema.Literal("home_address.street_2"), Schema.Literal("home_address.zip_code"), Schema.Literal("job_title"), Schema.Literal("legal_entity_id"), Schema.Literal("location_id"), Schema.Literal("mobile_phone_number"), Schema.Literal("home_phone_number"), Schema.Literal("nationality"), Schema.Literal("start_date"), Schema.Literal("work_email"), Schema.Literal("private_email"), Schema.Literal("yearly_salary")))), type: Schema.String, min_length: Schema.optional(Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308)))), max_length: Schema.optional(Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308)))), reg_exp: Schema.optional(Schema.NullOr(Schema.String)) }), Schema.Struct({ label: Schema.String, required: Schema.Boolean, description: Schema.optional(Schema.NullOr(Schema.String)), unified_key: Schema.optional(Schema.NullOr(Schema.Union(Schema.Literal("first_name"), Schema.Literal("last_name"), Schema.Literal("date_of_birth"), Schema.Literal("gender"), Schema.Literal("home_address.city"), Schema.Literal("home_address.country"), Schema.Literal("home_address.state"), Schema.Literal("home_address.street_1"), Schema.Literal("home_address.street_2"), Schema.Literal("home_address.zip_code"), Schema.Literal("job_title"), Schema.Literal("legal_entity_id"), Schema.Literal("location_id"), Schema.Literal("mobile_phone_number"), Schema.Literal("home_phone_number"), Schema.Literal("nationality"), Schema.Literal("start_date"), Schema.Literal("work_email"), Schema.Literal("private_email"), Schema.Literal("yearly_salary")))), type: Schema.String, min: Schema.optional(Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308)))), max: Schema.optional(Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308)))) }), Schema.Struct({ label: Schema.String, required: Schema.Boolean, description: Schema.optional(Schema.NullOr(Schema.String)), unified_key: Schema.optional(Schema.NullOr(Schema.Union(Schema.Literal("first_name"), Schema.Literal("last_name"), Schema.Literal("date_of_birth"), Schema.Literal("gender"), Schema.Literal("home_address.city"), Schema.Literal("home_address.country"), Schema.Literal("home_address.state"), Schema.Literal("home_address.street_1"), Schema.Literal("home_address.street_2"), Schema.Literal("home_address.zip_code"), Schema.Literal("job_title"), Schema.Literal("legal_entity_id"), Schema.Literal("location_id"), Schema.Literal("mobile_phone_number"), Schema.Literal("home_phone_number"), Schema.Literal("nationality"), Schema.Literal("start_date"), Schema.Literal("work_email"), Schema.Literal("private_email"), Schema.Literal("yearly_salary")))), type: Schema.String }), Schema.Struct({ label: Schema.String, required: Schema.Boolean, description: Schema.optional(Schema.NullOr(Schema.String)), unified_key: Schema.optional(Schema.NullOr(Schema.Union(Schema.Literal("first_name"), Schema.Literal("last_name"), Schema.Literal("date_of_birth"), Schema.Literal("gender"), Schema.Literal("home_address.city"), Schema.Literal("home_address.country"), Schema.Literal("home_address.state"), Schema.Literal("home_address.street_1"), Schema.Literal("home_address.street_2"), Schema.Literal("home_address.zip_code"), Schema.Literal("job_title"), Schema.Literal("legal_entity_id"), Schema.Literal("location_id"), Schema.Literal("mobile_phone_number"), Schema.Literal("home_phone_number"), Schema.Literal("nationality"), Schema.Literal("start_date"), Schema.Literal("work_email"), Schema.Literal("private_email"), Schema.Literal("yearly_salary")))), type: Schema.String, options: Schema.Union(Schema.Struct({ type: Schema.String, entries: Schema.Array(Schema.Struct({ id: Schema.String, label: Schema.String, unified_value: Schema.optional(Schema.String), remote_id: Schema.Union(Schema.String, Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))) })) }), Schema.Struct({ type: Schema.String, link: Schema.String })) }), Schema.Struct({ label: Schema.String, required: Schema.Boolean, description: Schema.optional(Schema.NullOr(Schema.String)), unified_key: Schema.optional(Schema.NullOr(Schema.String)), type: Schema.String, min_items: Schema.optional(Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308)))), max_items: Schema.optional(Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308)))), options: Schema.Union(Schema.Struct({ type: Schema.String, entries: Schema.Array(Schema.Struct({ id: Schema.String, label: Schema.String, unified_value: Schema.optional(Schema.String), remote_id: Schema.Union(Schema.String, Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))) })) }), Schema.Struct({ type: Schema.String, link: Schema.String })) }), Schema.Struct({ label: Schema.String, required: Schema.Boolean, description: Schema.optional(Schema.NullOr(Schema.String)), unified_key: Schema.optional(Schema.NullOr(Schema.Union(Schema.Literal("first_name"), Schema.Literal("last_name"), Schema.Literal("date_of_birth"), Schema.Literal("gender"), Schema.Literal("home_address.city"), Schema.Literal("home_address.country"), Schema.Literal("home_address.state"), Schema.Literal("home_address.street_1"), Schema.Literal("home_address.street_2"), Schema.Literal("home_address.zip_code"), Schema.Literal("job_title"), Schema.Literal("legal_entity_id"), Schema.Literal("location_id"), Schema.Literal("mobile_phone_number"), Schema.Literal("home_phone_number"), Schema.Literal("nationality"), Schema.Literal("start_date"), Schema.Literal("work_email"), Schema.Literal("private_email"), Schema.Literal("yearly_salary")))), type: Schema.String }), Schema.Struct({ label: Schema.String, required: Schema.Boolean, description: Schema.optional(Schema.NullOr(Schema.String)), unified_key: Schema.optional(Schema.NullOr(Schema.Union(Schema.Literal("first_name"), Schema.Literal("last_name"), Schema.Literal("date_of_birth"), Schema.Literal("gender"), Schema.Literal("home_address.city"), Schema.Literal("home_address.country"), Schema.Literal("home_address.state"), Schema.Literal("home_address.street_1"), Schema.Literal("home_address.street_2"), Schema.Literal("home_address.zip_code"), Schema.Literal("job_title"), Schema.Literal("legal_entity_id"), Schema.Literal("location_id"), Schema.Literal("mobile_phone_number"), Schema.Literal("home_phone_number"), Schema.Literal("nationality"), Schema.Literal("start_date"), Schema.Literal("work_email"), Schema.Literal("private_email"), Schema.Literal("yearly_salary")))), type: Schema.String, properties: Schema1 }), Schema.Struct({ label: Schema.String, required: Schema.Boolean, description: Schema.optional(Schema.NullOr(Schema.String)), unified_key: Schema.optional(Schema.NullOr(Schema.Union(Schema.Literal("first_name"), Schema.Literal("last_name"), Schema.Literal("date_of_birth"), Schema.Literal("gender"), Schema.Literal("home_address.city"), Schema.Literal("home_address.country"), Schema.Literal("home_address.state"), Schema.Literal("home_address.street_1"), Schema.Literal("home_address.street_2"), Schema.Literal("home_address.zip_code"), Schema.Literal("job_title"), Schema.Literal("legal_entity_id"), Schema.Literal("location_id"), Schema.Literal("mobile_phone_number"), Schema.Literal("home_phone_number"), Schema.Literal("nationality"), Schema.Literal("start_date"), Schema.Literal("work_email"), Schema.Literal("private_email"), Schema.Literal("yearly_salary")))), type: Schema.String, item_type: Schema2, min_items: Schema.optional(Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308)))), max_items: Schema.optional(Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308)))) }), Schema.Struct({ label: Schema.String, required: Schema.Boolean, description: Schema.optional(Schema.NullOr(Schema.String)), unified_key: Schema.optional(Schema.NullOr(Schema.Union(Schema.Literal("first_name"), Schema.Literal("last_name"), Schema.Literal("date_of_birth"), Schema.Literal("gender"), Schema.Literal("home_address.city"), Schema.Literal("home_address.country"), Schema.Literal("home_address.state"), Schema.Literal("home_address.street_1"), Schema.Literal("home_address.street_2"), Schema.Literal("home_address.zip_code"), Schema.Literal("job_title"), Schema.Literal("legal_entity_id"), Schema.Literal("location_id"), Schema.Literal("mobile_phone_number"), Schema.Literal("home_phone_number"), Schema.Literal("nationality"), Schema.Literal("start_date"), Schema.Literal("work_email"), Schema.Literal("private_email"), Schema.Literal("yearly_salary")))), type: Schema.String, file_restrictions: Schema.Struct({ accepted_mime_types: Schema.Array(Schema.String), max_file_size: Schema.optional(Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308)))) }) })) }) }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type GetHrisEmployeesFormPositiveResponse = typeof GetHrisEmployeesFormPositiveResponse.Type;

export const PostHrisEmployeesFormPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ id: Schema.NullOr(Schema.String), remote_id: Schema.NullOr(Schema.String), prehire: Schema.Struct({ remote_id: Schema.NullOr(Schema.String) }) }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PostHrisEmployeesFormPositiveResponse = typeof PostHrisEmployeesFormPositiveResponse.Type;

export const Schema6 = Schema.suspend(() => Schema.Array(Schema4));
export type Schema6 = typeof Schema6.Type;

export const Schema4 = Schema.suspend(() => Schema.Union(Schema.String, Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308)), Schema.Boolean, Schema5, Schema6));
export type Schema4 = typeof Schema4.Type;

export const Schema5 = Schema.suspend(() => Schema.Record({ key: Schema.String, value: Schema4 }));
export type Schema5 = typeof Schema5.Type;

export const Schema3 = Schema.Record({ key: Schema.String, value: Schema4 });
export type Schema3 = typeof Schema3.Type;

export const PostHrisEmployeesFormRequestBody = Schema.Struct({ properties: Schema3 });
export type PostHrisEmployeesFormRequestBody = typeof PostHrisEmployeesFormRequestBody.Type;

export const PatchHrisEmployeesEmployeeIdParameterEmployeeId = Schema.String;
export type PatchHrisEmployeesEmployeeIdParameterEmployeeId = typeof PatchHrisEmployeesEmployeeIdParameterEmployeeId.Type;

export const PatchHrisEmployeesEmployeeIdPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ id: Schema.String, remote_id: Schema.String, employee_number: Schema.NullOr(Schema.String), first_name: Schema.NullOr(Schema.String), last_name: Schema.NullOr(Schema.String), nationality: Schema.NullOr(Schema.String), display_full_name: Schema.NullOr(Schema.String), job_title: Schema.NullOr(Schema.String), work_email: Schema.optional(Schema.NullOr(Schema.String.pipe(Schema.pattern(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$"))))), personal_email: Schema.optional(Schema.NullOr(Schema.String.pipe(Schema.pattern(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$"))))), mobile_phone_number: Schema.NullOr(Schema.String), ssn: Schema.NullOr(Schema.String), tax_id: Schema.NullOr(Schema.String), gender: Schema.optional(Schema.Union(Schema.Union(Schema.Literal("MALE"), Schema.Literal("FEMALE"), Schema.Literal("NON_BINARY"), Schema.Literal("NOT_SPECIFIED")), Schema.String, Schema.Null)), ethnicity: Schema.optional(Schema.Union(Schema.Union(Schema.Literal("WHITE"), Schema.Literal("ASIAN"), Schema.Literal("HISPANIC_LATINO"), Schema.Literal("HAWAIIAN"), Schema.Literal("NATIVE_AMERICAN"), Schema.Literal("BLACK_AFRICAN_AMERICAN"), Schema.Literal("MULTIPLE_ETHNICITIES"), Schema.Literal("DECLINE_TO_SPECIFY")), Schema.String, Schema.Null)), marital_status: Schema.optional(Schema.Union(Schema.Union(Schema.Literal("SINGLE"), Schema.Literal("MARRIED"), Schema.Literal("DOMESTIC_PARTNERSHIP"), Schema.Literal("WIDOWED"), Schema.Literal("DIVORCED"), Schema.Literal("SEPARATED"), Schema.Literal("NOT_MARRIED")), Schema.String, Schema.Null)), employment_status: Schema.optional(Schema.Union(Schema.Union(Schema.Literal("ACTIVE"), Schema.Literal("PENDING"), Schema.Literal("INACTIVE"), Schema.Literal("LEAVE")), Schema.String, Schema.Null)), employment_type: Schema.optional(Schema.Union(Schema.Union(Schema.Literal("FULL_TIME"), Schema.Literal("PART_TIME"), Schema.Literal("CONTRACT"), Schema.Literal("INTERNSHIP"), Schema.Literal("FREELANCE"), Schema.Literal("WORKING_STUDENT"), Schema.Literal("APPRENTICESHIP"), Schema.Literal("TRAINING")), Schema.String, Schema.Null)), weekly_hours: Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), avatar: Schema.NullOr(Schema.String), work_location_id: Schema.NullOr(Schema.String), legal_entity_id: Schema.NullOr(Schema.String), manager_id: Schema.NullOr(Schema.String), home_address: Schema.optional(Schema.NullOr(Schema.Struct({ city: Schema.optional(Schema.NullOr(Schema.String)), country: Schema.optional(Schema.NullOr(Schema.String)), raw: Schema.optional(Schema.NullOr(Schema.String)), state: Schema.optional(Schema.NullOr(Schema.String)), street_1: Schema.optional(Schema.NullOr(Schema.String)), street_2: Schema.optional(Schema.NullOr(Schema.String)), zip_code: Schema.optional(Schema.NullOr(Schema.String)) }))), bank_accounts: Schema.optional(Schema.NullOr(Schema.Array(Schema.Struct({ iban: Schema.optional(Schema.NullOr(Schema.String)), bic: Schema.optional(Schema.NullOr(Schema.String)), account_number: Schema.optional(Schema.NullOr(Schema.String)), holder_name: Schema.optional(Schema.NullOr(Schema.String)), bank_name: Schema.optional(Schema.NullOr(Schema.String)), domestic_bank_routing: Schema.optional(Schema.NullOr(Schema.Struct({ number: Schema.String, type: Schema.NullOr(Schema.Union(Schema.Literal("GB_SORT_CODE"), Schema.Literal("DE_BANKLEITZAHL"), Schema.Literal("US_ABA_ROUTING_TRANSIT_NUMBER"), Schema.Literal("CA_ROUTING_NUMBER"), Schema.Literal("AU_BSB_CODE"), Schema.Literal("FR_RIB"))) }))) })))), date_of_birth: Schema.NullOr(Schema.String), start_date: Schema.NullOr(Schema.String), termination_date: Schema.NullOr(Schema.String), remote_created_at: Schema.NullOr(Schema.String), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })) }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PatchHrisEmployeesEmployeeIdPositiveResponse = typeof PatchHrisEmployeesEmployeeIdPositiveResponse.Type;

export const PatchHrisEmployeesEmployeeIdRequestBody = Schema.Struct({ first_name: Schema.optional(Schema.String), last_name: Schema.optional(Schema.String), work_email: Schema.String.pipe(Schema.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)), gender: Schema.optional(Schema.Union(Schema.Literal("MALE"), Schema.Literal("FEMALE"), Schema.Literal("NON_BINARY"), Schema.Literal("NOT_SPECIFIED"))), job_title: Schema.optional(Schema.String), home_address: Schema.optional(Schema.Struct({ street_1: Schema.optional(Schema.String), street_2: Schema.optional(Schema.String), city: Schema.optional(Schema.String), state: Schema.optional(Schema.String), zip_code: Schema.optional(Schema.String), country: Schema.optional(Schema.String.pipe(Schema.pattern(new RegExp("^[A-Z]{2}$")))) })), date_of_birth: Schema.optional(Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), mobile_phone_number: Schema.optional(Schema.String), home_phone_number: Schema.optional(Schema.String), nationality: Schema.optional(Schema.String.pipe(Schema.pattern(new RegExp("^[A-Z]{2}$")))), start_date: Schema.optional(Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), legal_entity_id: Schema.optional(Schema.String), location_id: Schema.optional(Schema.String), remote_fields: Schema.optional(Schema.Struct({ humaans: Schema.optional(Schema.Struct({ employee: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })), hibob: Schema.optional(Schema.Struct({ employee: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })), sympa: Schema.optional(Schema.Struct({ GenericNewHire: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })), silae: Schema.optional(Schema.Struct({ siret: Schema.optional(Schema.String), employee: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })), employment: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })), peoplehr: Schema.optional(Schema.Struct({ job_role_effective_date: Schema.optional(Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), department: Schema.optional(Schema.String) })), zohopeople: Schema.optional(Schema.Struct({ employee_id: Schema.optional(Schema.String.pipe(Schema.minLength(1))) })), workday: Schema.optional(Schema.Struct({ job_requisition_id: Schema.optional(Schema.String), position_id: Schema.optional(Schema.String), ssn: Schema.optional(Schema.String), bank_account: Schema.optional(Schema.Struct({ iban: Schema.String, bic: Schema.String, bank_name: Schema.String })) })), deel: Schema.optional(Schema.Struct({ candidate_id: Schema.String, candidate_link: Schema.String })), bamboohr: Schema.optional(Schema.Struct({ employee: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })), oracle: Schema.optional(Schema.Struct({ group_id: Schema.String, department_id: Schema.String })), adpworkforcenow: Schema.optional(Schema.Struct({ onboarding_template_code: Schema.String, applicant_payroll_profile_group_code: Schema.String, manager_position_id: Schema.optional(Schema.String), home_organization_unit_code: Schema.optional(Schema.String), personal_email: Schema.optional(Schema.String) })), azuread: Schema.optional(Schema.Struct({ password: Schema.String })), paycor: Schema.optional(Schema.Struct({ paygroupRemoteId: Schema.String, departmentRemoteId: Schema.String })), planday: Schema.optional(Schema.Struct({ department_remote_id: Schema.String })), dayforce: Schema.optional(Schema.Struct({ social_security_number: Schema.String, pay_type: Schema.String, pay_class: Schema.String, pay_group: Schema.String, base_rate: Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308)), role: Schema.String, location: Schema.String, department: Schema.String, job: Schema.String, country: Schema.String })) })), ssn: Schema.optional(Schema.String), marital_status: Schema.optional(Schema.Union(Schema.Literal("SINGLE"), Schema.Literal("MARRIED"), Schema.Literal("DOMESTIC_PARTNERSHIP"), Schema.Literal("WIDOWED"), Schema.Literal("DIVORCED"), Schema.Literal("SEPARATED"), Schema.Literal("NOT_MARRIED"))), termination_date: Schema.optional(Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), tax_id: Schema.optional(Schema.String) });
export type PatchHrisEmployeesEmployeeIdRequestBody = typeof PatchHrisEmployeesEmployeeIdRequestBody.Type;

export const PostHrisEmployeesEmployeeIdDocumentsParameterEmployeeId = Schema.String;
export type PostHrisEmployeesEmployeeIdDocumentsParameterEmployeeId = typeof PostHrisEmployeesEmployeeIdDocumentsParameterEmployeeId.Type;

export const PostHrisEmployeesEmployeeIdDocumentsPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Record({ key: Schema.String, value: Schema.Unknown }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PostHrisEmployeesEmployeeIdDocumentsPositiveResponse = typeof PostHrisEmployeesEmployeeIdDocumentsPositiveResponse.Type;

export const PostHrisEmployeesEmployeeIdDocumentsRequestBody = Schema.Struct({ category_id: Schema.String, document: Schema.Struct({ name: Schema.String, content_type: Schema.optional(Schema.String.pipe(Schema.pattern(new RegExp("^[\\w.-]+\\/[\\w.-]+$")))), data_url: Schema.optional(Schema.URL), data: Schema.optional(Schema.String) }) });
export type PostHrisEmployeesEmployeeIdDocumentsRequestBody = typeof PostHrisEmployeesEmployeeIdDocumentsRequestBody.Type;

export const GetHrisEmployeeDocumentCategoriesParameterCursor = Schema.String;
export type GetHrisEmployeeDocumentCategoriesParameterCursor = typeof GetHrisEmployeeDocumentCategoriesParameterCursor.Type;

export const GetHrisEmployeeDocumentCategoriesParameterPageSize = Schema_default_100_4;
export type GetHrisEmployeeDocumentCategoriesParameterPageSize = typeof GetHrisEmployeeDocumentCategoriesParameterPageSize.Type;

export const GetHrisEmployeeDocumentCategoriesParameterUpdatedAfter = Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisEmployeeDocumentCategoriesParameterUpdatedAfter = typeof GetHrisEmployeeDocumentCategoriesParameterUpdatedAfter.Type;

export const GetHrisEmployeeDocumentCategoriesParameterIncludeDeleted = Union_default_false;
export type GetHrisEmployeeDocumentCategoriesParameterIncludeDeleted = typeof GetHrisEmployeeDocumentCategoriesParameterIncludeDeleted.Type;

export const GetHrisEmployeeDocumentCategoriesParameterIgnoreUnsupportedFilters = Union_default_false;
export type GetHrisEmployeeDocumentCategoriesParameterIgnoreUnsupportedFilters = typeof GetHrisEmployeeDocumentCategoriesParameterIgnoreUnsupportedFilters.Type;

export const GetHrisEmployeeDocumentCategoriesParameterIds = Schema.String;
export type GetHrisEmployeeDocumentCategoriesParameterIds = typeof GetHrisEmployeeDocumentCategoriesParameterIds.Type;

export const GetHrisEmployeeDocumentCategoriesParameterRemoteIds = Schema.String;
export type GetHrisEmployeeDocumentCategoriesParameterRemoteIds = typeof GetHrisEmployeeDocumentCategoriesParameterRemoteIds.Type;

export const GetHrisEmployeeDocumentCategoriesPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), name: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String) })) }) });
export type GetHrisEmployeeDocumentCategoriesPositiveResponse = typeof GetHrisEmployeeDocumentCategoriesPositiveResponse.Type;

export const GetHrisTeamsParameterCursor = Schema.String;
export type GetHrisTeamsParameterCursor = typeof GetHrisTeamsParameterCursor.Type;

export const GetHrisTeamsParameterPageSize = Schema_default_100_4;
export type GetHrisTeamsParameterPageSize = typeof GetHrisTeamsParameterPageSize.Type;

export const GetHrisTeamsParameterUpdatedAfter = Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisTeamsParameterUpdatedAfter = typeof GetHrisTeamsParameterUpdatedAfter.Type;

export const GetHrisTeamsParameterIncludeDeleted = Union_default_false;
export type GetHrisTeamsParameterIncludeDeleted = typeof GetHrisTeamsParameterIncludeDeleted.Type;

export const GetHrisTeamsParameterIgnoreUnsupportedFilters = Union_default_false;
export type GetHrisTeamsParameterIgnoreUnsupportedFilters = typeof GetHrisTeamsParameterIgnoreUnsupportedFilters.Type;

export const GetHrisTeamsParameterIds = Schema.String;
export type GetHrisTeamsParameterIds = typeof GetHrisTeamsParameterIds.Type;

export const GetHrisTeamsParameterRemoteIds = Schema.String;
export type GetHrisTeamsParameterRemoteIds = typeof GetHrisTeamsParameterRemoteIds.Type;

export const GetHrisTeamsPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.String, name: Schema.NullOr(Schema.String), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), type: Schema.NullOr(Schema.Union(Schema.Literal("DEPARTMENT"), Schema.Literal("TEAM"), Schema.Literal("COST_CENTER"))), parent_id: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })) }) });
export type GetHrisTeamsPositiveResponse = typeof GetHrisTeamsPositiveResponse.Type;

export const GetHrisGroupsParameterCursor = Schema.String;
export type GetHrisGroupsParameterCursor = typeof GetHrisGroupsParameterCursor.Type;

export const GetHrisGroupsParameterPageSize = Schema_default_100_4;
export type GetHrisGroupsParameterPageSize = typeof GetHrisGroupsParameterPageSize.Type;

export const GetHrisGroupsParameterUpdatedAfter = Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisGroupsParameterUpdatedAfter = typeof GetHrisGroupsParameterUpdatedAfter.Type;

export const GetHrisGroupsParameterIncludeDeleted = Union_default_false;
export type GetHrisGroupsParameterIncludeDeleted = typeof GetHrisGroupsParameterIncludeDeleted.Type;

export const GetHrisGroupsParameterIgnoreUnsupportedFilters = Union_default_false;
export type GetHrisGroupsParameterIgnoreUnsupportedFilters = typeof GetHrisGroupsParameterIgnoreUnsupportedFilters.Type;

export const GetHrisGroupsParameterIds = Schema.String;
export type GetHrisGroupsParameterIds = typeof GetHrisGroupsParameterIds.Type;

export const GetHrisGroupsParameterRemoteIds = Schema.String;
export type GetHrisGroupsParameterRemoteIds = typeof GetHrisGroupsParameterRemoteIds.Type;

export const GetHrisGroupsParameterTypes = Schema.String;
export type GetHrisGroupsParameterTypes = typeof GetHrisGroupsParameterTypes.Type;

export const GetHrisGroupsParameterNameContains = Schema.String;
export type GetHrisGroupsParameterNameContains = typeof GetHrisGroupsParameterNameContains.Type;

export const GetHrisGroupsPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.String, name: Schema.NullOr(Schema.String), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), type: Schema.NullOr(Schema.Union(Schema.Literal("DEPARTMENT"), Schema.Literal("TEAM"), Schema.Literal("COST_CENTER"))), parent_id: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })) }) });
export type GetHrisGroupsPositiveResponse = typeof GetHrisGroupsPositiveResponse.Type;

export const GetHrisEmploymentsParameterCursor = Schema.String;
export type GetHrisEmploymentsParameterCursor = typeof GetHrisEmploymentsParameterCursor.Type;

export const GetHrisEmploymentsParameterPageSize = Schema_default_100_4;
export type GetHrisEmploymentsParameterPageSize = typeof GetHrisEmploymentsParameterPageSize.Type;

export const GetHrisEmploymentsParameterUpdatedAfter = Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisEmploymentsParameterUpdatedAfter = typeof GetHrisEmploymentsParameterUpdatedAfter.Type;

export const GetHrisEmploymentsParameterIncludeDeleted = Union_default_false;
export type GetHrisEmploymentsParameterIncludeDeleted = typeof GetHrisEmploymentsParameterIncludeDeleted.Type;

export const GetHrisEmploymentsParameterIgnoreUnsupportedFilters = Union_default_false;
export type GetHrisEmploymentsParameterIgnoreUnsupportedFilters = typeof GetHrisEmploymentsParameterIgnoreUnsupportedFilters.Type;

export const GetHrisEmploymentsParameterIds = Schema.String;
export type GetHrisEmploymentsParameterIds = typeof GetHrisEmploymentsParameterIds.Type;

export const GetHrisEmploymentsParameterRemoteIds = Schema.String;
export type GetHrisEmploymentsParameterRemoteIds = typeof GetHrisEmploymentsParameterRemoteIds.Type;

export const GetHrisEmploymentsPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), employee_id: Schema.String, job_title: Schema.NullOr(Schema.String), pay_rate: Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), pay_period: Schema.optional(Schema.Union(Schema.Union(Schema.Literal("HOUR"), Schema.Literal("DAY"), Schema.Literal("WEEK"), Schema.Literal("TWO_WEEKS"), Schema.Literal("HALF_MONTH"), Schema.Literal("MONTH"), Schema.Literal("TWO_MONTHS"), Schema.Literal("QUARTER"), Schema.Literal("HALF_YEAR"), Schema.Literal("YEAR")), Schema.String, Schema.Null)), pay_frequency: Schema.optional(Schema.Union(Schema.Union(Schema.Literal("DAILY"), Schema.Literal("WEEKLY"), Schema.Literal("BIWEEKLY"), Schema.Literal("MONTHLY"), Schema.Literal("SEMIMONTHLY"), Schema.Literal("QUARTERLY"), Schema.Literal("SEMIANNUALLY"), Schema.Literal("ANNUALLY"), Schema.Literal("PRO_RATA")), Schema.String, Schema.Null)), employment_type: Schema.optional(Schema.Union(Schema.Union(Schema.Literal("FULL_TIME"), Schema.Literal("PART_TIME"), Schema.Literal("CONTRACT"), Schema.Literal("INTERNSHIP"), Schema.Literal("FREELANCE"), Schema.Literal("WORKING_STUDENT"), Schema.Literal("APPRENTICESHIP"), Schema.Literal("TRAINING")), Schema.String, Schema.Null)), pay_currency: Schema.NullOr(Schema.String), effective_date: Schema.NullOr(Schema.String), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })), custom_fields: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })), integration_fields: Schema.Array(Schema.Struct({ id: Schema.String, key: Schema.String, type: Schema.Union(Schema.Literal("DEFAULT"), Schema.Literal("CUSTOM")), value: Schema.optional(Schema.Null), label: Schema.NullOr(Schema.String) })) })) }) });
export type GetHrisEmploymentsPositiveResponse = typeof GetHrisEmploymentsPositiveResponse.Type;

export const GetHrisLocationsParameterCursor = Schema.String;
export type GetHrisLocationsParameterCursor = typeof GetHrisLocationsParameterCursor.Type;

export const GetHrisLocationsParameterPageSize = Schema_default_100_4;
export type GetHrisLocationsParameterPageSize = typeof GetHrisLocationsParameterPageSize.Type;

export const GetHrisLocationsParameterUpdatedAfter = Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisLocationsParameterUpdatedAfter = typeof GetHrisLocationsParameterUpdatedAfter.Type;

export const GetHrisLocationsParameterIncludeDeleted = Union_default_false;
export type GetHrisLocationsParameterIncludeDeleted = typeof GetHrisLocationsParameterIncludeDeleted.Type;

export const GetHrisLocationsParameterIgnoreUnsupportedFilters = Union_default_false;
export type GetHrisLocationsParameterIgnoreUnsupportedFilters = typeof GetHrisLocationsParameterIgnoreUnsupportedFilters.Type;

export const GetHrisLocationsParameterIds = Schema.String;
export type GetHrisLocationsParameterIds = typeof GetHrisLocationsParameterIds.Type;

export const GetHrisLocationsParameterRemoteIds = Schema.String;
export type GetHrisLocationsParameterRemoteIds = typeof GetHrisLocationsParameterRemoteIds.Type;

export const GetHrisLocationsParameterNameContains = Schema.String;
export type GetHrisLocationsParameterNameContains = typeof GetHrisLocationsParameterNameContains.Type;

export const GetHrisLocationsPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), name: Schema.NullOr(Schema.String), address: Schema.optional(Schema.NullOr(Schema.Struct({ city: Schema.optional(Schema.NullOr(Schema.String)), country: Schema.optional(Schema.NullOr(Schema.String)), raw: Schema.optional(Schema.NullOr(Schema.String)), state: Schema.optional(Schema.NullOr(Schema.String)), street_1: Schema.optional(Schema.NullOr(Schema.String)), street_2: Schema.optional(Schema.NullOr(Schema.String)), zip_code: Schema.optional(Schema.NullOr(Schema.String)) }))), type: Schema.NullOr(Schema.String), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })) }) });
export type GetHrisLocationsPositiveResponse = typeof GetHrisLocationsPositiveResponse.Type;

export const GetHrisAbsenceTypesParameterCursor = Schema.String;
export type GetHrisAbsenceTypesParameterCursor = typeof GetHrisAbsenceTypesParameterCursor.Type;

export const GetHrisAbsenceTypesParameterPageSize = Schema_default_100_4;
export type GetHrisAbsenceTypesParameterPageSize = typeof GetHrisAbsenceTypesParameterPageSize.Type;

export const GetHrisAbsenceTypesParameterUpdatedAfter = Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisAbsenceTypesParameterUpdatedAfter = typeof GetHrisAbsenceTypesParameterUpdatedAfter.Type;

export const GetHrisAbsenceTypesParameterIncludeDeleted = Union_default_false;
export type GetHrisAbsenceTypesParameterIncludeDeleted = typeof GetHrisAbsenceTypesParameterIncludeDeleted.Type;

export const GetHrisAbsenceTypesParameterIgnoreUnsupportedFilters = Union_default_false;
export type GetHrisAbsenceTypesParameterIgnoreUnsupportedFilters = typeof GetHrisAbsenceTypesParameterIgnoreUnsupportedFilters.Type;

export const GetHrisAbsenceTypesParameterIds = Schema.String;
export type GetHrisAbsenceTypesParameterIds = typeof GetHrisAbsenceTypesParameterIds.Type;

export const GetHrisAbsenceTypesParameterRemoteIds = Schema.String;
export type GetHrisAbsenceTypesParameterRemoteIds = typeof GetHrisAbsenceTypesParameterRemoteIds.Type;

export const GetHrisAbsenceTypesPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.String, name: Schema.NullOr(Schema.String), unit: Schema.NullOr(Schema.Union(Schema.Literal("HOURS"), Schema.Literal("DAYS"))), half_days_supported: Schema.NullOr(Schema.Boolean), exact_times_supported: Schema.NullOr(Schema.Boolean), remote_data: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String) })) }) });
export type GetHrisAbsenceTypesPositiveResponse = typeof GetHrisAbsenceTypesPositiveResponse.Type;

export const GetHrisTimeOffBalancesParameterCursor = Schema.String;
export type GetHrisTimeOffBalancesParameterCursor = typeof GetHrisTimeOffBalancesParameterCursor.Type;

export const GetHrisTimeOffBalancesParameterPageSize = Schema_default_100_4;
export type GetHrisTimeOffBalancesParameterPageSize = typeof GetHrisTimeOffBalancesParameterPageSize.Type;

export const GetHrisTimeOffBalancesParameterUpdatedAfter = Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisTimeOffBalancesParameterUpdatedAfter = typeof GetHrisTimeOffBalancesParameterUpdatedAfter.Type;

export const GetHrisTimeOffBalancesParameterIncludeDeleted = Union_default_false;
export type GetHrisTimeOffBalancesParameterIncludeDeleted = typeof GetHrisTimeOffBalancesParameterIncludeDeleted.Type;

export const GetHrisTimeOffBalancesParameterIgnoreUnsupportedFilters = Union_default_false;
export type GetHrisTimeOffBalancesParameterIgnoreUnsupportedFilters = typeof GetHrisTimeOffBalancesParameterIgnoreUnsupportedFilters.Type;

export const GetHrisTimeOffBalancesParameterIds = Schema.String;
export type GetHrisTimeOffBalancesParameterIds = typeof GetHrisTimeOffBalancesParameterIds.Type;

export const GetHrisTimeOffBalancesParameterRemoteIds = Schema.String;
export type GetHrisTimeOffBalancesParameterRemoteIds = typeof GetHrisTimeOffBalancesParameterRemoteIds.Type;

export const GetHrisTimeOffBalancesParameterEmployeeId = Schema.String;
export type GetHrisTimeOffBalancesParameterEmployeeId = typeof GetHrisTimeOffBalancesParameterEmployeeId.Type;

export const GetHrisTimeOffBalancesPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), employee_id: Schema.String, type_id: Schema.String, balance: Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), balance_unit: Schema.NullOr(Schema.Union(Schema.Literal("HOURS"), Schema.Literal("DAYS"))), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), used: Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), used_unit: Schema.NullOr(Schema.Union(Schema.Literal("HOURS"), Schema.Literal("DAYS"))), remote_data: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })), type: Schema.Struct({ id: Schema.String, remote_id: Schema.String, name: Schema.NullOr(Schema.String), unit: Schema.NullOr(Schema.Union(Schema.Literal("HOURS"), Schema.Literal("DAYS"))), half_days_supported: Schema.NullOr(Schema.Boolean), exact_times_supported: Schema.NullOr(Schema.Boolean), remote_data: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String) }) })) }) });
export type GetHrisTimeOffBalancesPositiveResponse = typeof GetHrisTimeOffBalancesPositiveResponse.Type;

export const GetHrisAbsencesParameterCursor = Schema.String;
export type GetHrisAbsencesParameterCursor = typeof GetHrisAbsencesParameterCursor.Type;

export const GetHrisAbsencesParameterPageSize = Schema_default_100_4;
export type GetHrisAbsencesParameterPageSize = typeof GetHrisAbsencesParameterPageSize.Type;

export const GetHrisAbsencesParameterUpdatedAfter = Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisAbsencesParameterUpdatedAfter = typeof GetHrisAbsencesParameterUpdatedAfter.Type;

export const GetHrisAbsencesParameterIncludeDeleted = Union_default_false;
export type GetHrisAbsencesParameterIncludeDeleted = typeof GetHrisAbsencesParameterIncludeDeleted.Type;

export const GetHrisAbsencesParameterIgnoreUnsupportedFilters = Union_default_false;
export type GetHrisAbsencesParameterIgnoreUnsupportedFilters = typeof GetHrisAbsencesParameterIgnoreUnsupportedFilters.Type;

export const GetHrisAbsencesParameterIds = Schema.String;
export type GetHrisAbsencesParameterIds = typeof GetHrisAbsencesParameterIds.Type;

export const GetHrisAbsencesParameterRemoteIds = Schema.String;
export type GetHrisAbsencesParameterRemoteIds = typeof GetHrisAbsencesParameterRemoteIds.Type;

export const GetHrisAbsencesParameterDateFrom = Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisAbsencesParameterDateFrom = typeof GetHrisAbsencesParameterDateFrom.Type;

export const GetHrisAbsencesParameterDateUntil = Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisAbsencesParameterDateUntil = typeof GetHrisAbsencesParameterDateUntil.Type;

export const GetHrisAbsencesParameterTypeIds = Schema.String;
export type GetHrisAbsencesParameterTypeIds = typeof GetHrisAbsencesParameterTypeIds.Type;

export const GetHrisAbsencesParameterEmployeeId = Schema.String;
export type GetHrisAbsencesParameterEmployeeId = typeof GetHrisAbsencesParameterEmployeeId.Type;

export const GetHrisAbsencesParameterTimeFrom = Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisAbsencesParameterTimeFrom = typeof GetHrisAbsencesParameterTimeFrom.Type;

export const GetHrisAbsencesParameterTimeUntil = Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisAbsencesParameterTimeUntil = typeof GetHrisAbsencesParameterTimeUntil.Type;

export const GetHrisAbsencesPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), employee_id: Schema.String, approver_id: Schema.NullOr(Schema.String), start_date: Schema.Null, end_date: Schema.Null, start_half_day: Schema.NullOr(Schema.Boolean), end_half_day: Schema.NullOr(Schema.Boolean), start_time: Schema.Null, end_time: Schema.Null, amount: Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), unit: Schema.NullOr(Schema.Union(Schema.Literal("HOURS"), Schema.Literal("DAYS"))), status: Schema.optional(Schema.Union(Schema.Union(Schema.Literal("REQUESTED"), Schema.Literal("APPROVED"), Schema.Literal("DECLINED"), Schema.Literal("CANCELLED"), Schema.Literal("DELETED")), Schema.String, Schema.Null)), employee_note: Schema.NullOr(Schema.String), type_id: Schema.NullOr(Schema.String), remote_created_at: Schema.NullOr(Schema.String), remote_updated_at: Schema.NullOr(Schema.String), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })), type: Schema.NullOr(Schema.Struct({ id: Schema.String, remote_id: Schema.String, name: Schema.NullOr(Schema.String), unit: Schema.NullOr(Schema.Union(Schema.Literal("HOURS"), Schema.Literal("DAYS"))), half_days_supported: Schema.NullOr(Schema.Boolean), exact_times_supported: Schema.NullOr(Schema.Boolean), remote_data: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String) })) })) }) });
export type GetHrisAbsencesPositiveResponse = typeof GetHrisAbsencesPositiveResponse.Type;

export const PostHrisAbsencesPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), employee_id: Schema.String, approver_id: Schema.NullOr(Schema.String), start_date: Schema.Null, end_date: Schema.Null, start_half_day: Schema.NullOr(Schema.Boolean), end_half_day: Schema.NullOr(Schema.Boolean), start_time: Schema.Null, end_time: Schema.Null, amount: Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), unit: Schema.NullOr(Schema.Union(Schema.Literal("HOURS"), Schema.Literal("DAYS"))), status: Schema.optional(Schema.Union(Schema.Union(Schema.Literal("REQUESTED"), Schema.Literal("APPROVED"), Schema.Literal("DECLINED"), Schema.Literal("CANCELLED"), Schema.Literal("DELETED")), Schema.String, Schema.Null)), employee_note: Schema.NullOr(Schema.String), type_id: Schema.NullOr(Schema.String), remote_created_at: Schema.NullOr(Schema.String), remote_updated_at: Schema.NullOr(Schema.String), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })) }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PostHrisAbsencesPositiveResponse = typeof PostHrisAbsencesPositiveResponse.Type;

export const PostHrisAbsencesRequestBody = Schema.Struct({ employee_id: Schema.String, absence_type_id: Schema.String, status: Union_default_REQUESTED_prop, start_date: Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))), end_date: Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))), start_half_day: Boolean_default_false_prop, end_half_day: Boolean_default_false_prop, amount: Schema.optional(Schema.Number.pipe(Schema.greaterThanOrEqualTo(0))), unit: Schema.optional(Schema.Union(Schema.Literal("HOURS"), Schema.Literal("DAYS"))), employee_note: Schema.NullOr(Schema.String), start_time: Schema.optional(Schema.String.pipe(Schema.pattern(new RegExp("^(?:2[0-3]|[01]?\\d):[0-5]?\\d(:[0-5]?\\d)?$")))), end_time: Schema.optional(Schema.String.pipe(Schema.pattern(new RegExp("^(?:2[0-3]|[01]?\\d):[0-5]?\\d(:[0-5]?\\d)?$")))), remote_fields: Schema.optional(Schema.Struct({ a3innuvanomina: Schema.optional(Schema.Struct({ benefit_type_id: Schema.optional(Schema.Union(Schema.Literal("Delegated Payment"), Schema.Literal("No Right to Benefit"), Schema.Literal("Direct payment"))) })), adpworkforcenow: Schema.optional(Schema.Struct({ employment_id: Schema.optional(Schema.String), paid_leave: Schema.optional(Schema.Boolean) })) })) });
export type PostHrisAbsencesRequestBody = typeof PostHrisAbsencesRequestBody.Type;

export const DeleteHrisAbsencesAbsenceIdParameterAbsenceId = Schema.String;
export type DeleteHrisAbsencesAbsenceIdParameterAbsenceId = typeof DeleteHrisAbsencesAbsenceIdParameterAbsenceId.Type;

export const DeleteHrisAbsencesAbsenceIdPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), employee_id: Schema.String, approver_id: Schema.NullOr(Schema.String), start_date: Schema.Null, end_date: Schema.Null, start_half_day: Schema.NullOr(Schema.Boolean), end_half_day: Schema.NullOr(Schema.Boolean), start_time: Schema.Null, end_time: Schema.Null, amount: Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), unit: Schema.NullOr(Schema.Union(Schema.Literal("HOURS"), Schema.Literal("DAYS"))), status: Schema.optional(Schema.Union(Schema.Union(Schema.Literal("REQUESTED"), Schema.Literal("APPROVED"), Schema.Literal("DECLINED"), Schema.Literal("CANCELLED"), Schema.Literal("DELETED")), Schema.String, Schema.Null)), employee_note: Schema.NullOr(Schema.String), type_id: Schema.NullOr(Schema.String), remote_created_at: Schema.NullOr(Schema.String), remote_updated_at: Schema.NullOr(Schema.String), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })) }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type DeleteHrisAbsencesAbsenceIdPositiveResponse = typeof DeleteHrisAbsencesAbsenceIdPositiveResponse.Type;

export const DeleteHrisAbsencesAbsenceIdRequestBody = Schema.Struct({ remote_fields: Schema.optional(Schema.Struct({ adpworkforcenow: Schema.optional(Schema.Struct({ employment_id: Schema.optional(Schema.String) })) })) });
export type DeleteHrisAbsencesAbsenceIdRequestBody = typeof DeleteHrisAbsencesAbsenceIdRequestBody.Type;

export const GetHrisLegalEntitiesParameterCursor = Schema.String;
export type GetHrisLegalEntitiesParameterCursor = typeof GetHrisLegalEntitiesParameterCursor.Type;

export const GetHrisLegalEntitiesParameterPageSize = Schema_default_100_4;
export type GetHrisLegalEntitiesParameterPageSize = typeof GetHrisLegalEntitiesParameterPageSize.Type;

export const GetHrisLegalEntitiesParameterUpdatedAfter = Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisLegalEntitiesParameterUpdatedAfter = typeof GetHrisLegalEntitiesParameterUpdatedAfter.Type;

export const GetHrisLegalEntitiesParameterIncludeDeleted = Union_default_false;
export type GetHrisLegalEntitiesParameterIncludeDeleted = typeof GetHrisLegalEntitiesParameterIncludeDeleted.Type;

export const GetHrisLegalEntitiesParameterIgnoreUnsupportedFilters = Union_default_false;
export type GetHrisLegalEntitiesParameterIgnoreUnsupportedFilters = typeof GetHrisLegalEntitiesParameterIgnoreUnsupportedFilters.Type;

export const GetHrisLegalEntitiesParameterIds = Schema.String;
export type GetHrisLegalEntitiesParameterIds = typeof GetHrisLegalEntitiesParameterIds.Type;

export const GetHrisLegalEntitiesParameterRemoteIds = Schema.String;
export type GetHrisLegalEntitiesParameterRemoteIds = typeof GetHrisLegalEntitiesParameterRemoteIds.Type;

export const GetHrisLegalEntitiesParameterNameContains = Schema.String;
export type GetHrisLegalEntitiesParameterNameContains = typeof GetHrisLegalEntitiesParameterNameContains.Type;

export const GetHrisLegalEntitiesPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), name: Schema.NullOr(Schema.String), address: Schema.optional(Schema.NullOr(Schema.Struct({ city: Schema.optional(Schema.NullOr(Schema.String)), country: Schema.optional(Schema.NullOr(Schema.String)), raw: Schema.optional(Schema.NullOr(Schema.String)), state: Schema.optional(Schema.NullOr(Schema.String)), street_1: Schema.optional(Schema.NullOr(Schema.String)), street_2: Schema.optional(Schema.NullOr(Schema.String)), zip_code: Schema.optional(Schema.NullOr(Schema.String)) }))), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })) }) });
export type GetHrisLegalEntitiesPositiveResponse = typeof GetHrisLegalEntitiesPositiveResponse.Type;

export const GetHrisTimesheetsParameterCursor = Schema.String;
export type GetHrisTimesheetsParameterCursor = typeof GetHrisTimesheetsParameterCursor.Type;

export const GetHrisTimesheetsParameterPageSize = Schema_default_100_4;
export type GetHrisTimesheetsParameterPageSize = typeof GetHrisTimesheetsParameterPageSize.Type;

export const GetHrisTimesheetsParameterUpdatedAfter = Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisTimesheetsParameterUpdatedAfter = typeof GetHrisTimesheetsParameterUpdatedAfter.Type;

export const GetHrisTimesheetsParameterIncludeDeleted = Union_default_false;
export type GetHrisTimesheetsParameterIncludeDeleted = typeof GetHrisTimesheetsParameterIncludeDeleted.Type;

export const GetHrisTimesheetsParameterIgnoreUnsupportedFilters = Union_default_false;
export type GetHrisTimesheetsParameterIgnoreUnsupportedFilters = typeof GetHrisTimesheetsParameterIgnoreUnsupportedFilters.Type;

export const GetHrisTimesheetsParameterIds = Schema.String;
export type GetHrisTimesheetsParameterIds = typeof GetHrisTimesheetsParameterIds.Type;

export const GetHrisTimesheetsParameterRemoteIds = Schema.String;
export type GetHrisTimesheetsParameterRemoteIds = typeof GetHrisTimesheetsParameterRemoteIds.Type;

export const GetHrisTimesheetsParameterEmployeeId = Schema.String;
export type GetHrisTimesheetsParameterEmployeeId = typeof GetHrisTimesheetsParameterEmployeeId.Type;

export const GetHrisTimesheetsParameterStartedBefore = Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisTimesheetsParameterStartedBefore = typeof GetHrisTimesheetsParameterStartedBefore.Type;

export const GetHrisTimesheetsParameterStartedAfter = Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisTimesheetsParameterStartedAfter = typeof GetHrisTimesheetsParameterStartedAfter.Type;

export const GetHrisTimesheetsParameterEndedBefore = Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisTimesheetsParameterEndedBefore = typeof GetHrisTimesheetsParameterEndedBefore.Type;

export const GetHrisTimesheetsParameterEndedAfter = Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisTimesheetsParameterEndedAfter = typeof GetHrisTimesheetsParameterEndedAfter.Type;

export const GetHrisTimesheetsPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), employee_id: Schema.String, started_at: Schema.NullOr(Schema.String), ended_at: Schema.NullOr(Schema.String), timezone: Schema.NullOr(Schema.String.pipe(Schema.pattern(new RegExp("^[+-](?:0\\d|1[0-4]):[0-5]\\d$")))), payable_hours: Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), unpaid_break_minutes: Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), breaks: Schema.optional(Schema.NullOr(Schema.Array(Schema.Struct({ ended_at: Schema.Union(Schema.String, Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")))), paid: Schema.Boolean, started_at: Schema.Union(Schema.String, Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")))) })))), approval_status: Schema.NullOr(Schema.String), approved_at: Schema.NullOr(Schema.String), comment: Schema.NullOr(Schema.String), custom_fields: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })), integration_fields: Schema.Array(Schema.Struct({ id: Schema.String, key: Schema.String, type: Schema.Union(Schema.Literal("DEFAULT"), Schema.Literal("CUSTOM")), value: Schema.optional(Schema.Null), label: Schema.NullOr(Schema.String) })), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })) }) });
export type GetHrisTimesheetsPositiveResponse = typeof GetHrisTimesheetsPositiveResponse.Type;

export const GetHrisPerformanceReviewCyclesParameterCursor = Schema.String;
export type GetHrisPerformanceReviewCyclesParameterCursor = typeof GetHrisPerformanceReviewCyclesParameterCursor.Type;

export const GetHrisPerformanceReviewCyclesParameterPageSize = Schema_default_100_4;
export type GetHrisPerformanceReviewCyclesParameterPageSize = typeof GetHrisPerformanceReviewCyclesParameterPageSize.Type;

export const GetHrisPerformanceReviewCyclesParameterUpdatedAfter = Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisPerformanceReviewCyclesParameterUpdatedAfter = typeof GetHrisPerformanceReviewCyclesParameterUpdatedAfter.Type;

export const GetHrisPerformanceReviewCyclesParameterIncludeDeleted = Union_default_false;
export type GetHrisPerformanceReviewCyclesParameterIncludeDeleted = typeof GetHrisPerformanceReviewCyclesParameterIncludeDeleted.Type;

export const GetHrisPerformanceReviewCyclesParameterIgnoreUnsupportedFilters = Union_default_false;
export type GetHrisPerformanceReviewCyclesParameterIgnoreUnsupportedFilters = typeof GetHrisPerformanceReviewCyclesParameterIgnoreUnsupportedFilters.Type;

export const GetHrisPerformanceReviewCyclesParameterIds = Schema.String;
export type GetHrisPerformanceReviewCyclesParameterIds = typeof GetHrisPerformanceReviewCyclesParameterIds.Type;

export const GetHrisPerformanceReviewCyclesParameterRemoteIds = Schema.String;
export type GetHrisPerformanceReviewCyclesParameterRemoteIds = typeof GetHrisPerformanceReviewCyclesParameterRemoteIds.Type;

export const GetHrisPerformanceReviewCyclesPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.String, name: Schema.NullOr(Schema.String), review_period_start_date: Schema.NullOr(Schema.String), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })) }) });
export type GetHrisPerformanceReviewCyclesPositiveResponse = typeof GetHrisPerformanceReviewCyclesPositiveResponse.Type;

export const GetHrisPerformanceReviewsParameterCursor = Schema.String;
export type GetHrisPerformanceReviewsParameterCursor = typeof GetHrisPerformanceReviewsParameterCursor.Type;

export const GetHrisPerformanceReviewsParameterPageSize = Schema_default_100_4;
export type GetHrisPerformanceReviewsParameterPageSize = typeof GetHrisPerformanceReviewsParameterPageSize.Type;

export const GetHrisPerformanceReviewsParameterUpdatedAfter = Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisPerformanceReviewsParameterUpdatedAfter = typeof GetHrisPerformanceReviewsParameterUpdatedAfter.Type;

export const GetHrisPerformanceReviewsParameterIncludeDeleted = Union_default_false;
export type GetHrisPerformanceReviewsParameterIncludeDeleted = typeof GetHrisPerformanceReviewsParameterIncludeDeleted.Type;

export const GetHrisPerformanceReviewsParameterIgnoreUnsupportedFilters = Union_default_false;
export type GetHrisPerformanceReviewsParameterIgnoreUnsupportedFilters = typeof GetHrisPerformanceReviewsParameterIgnoreUnsupportedFilters.Type;

export const GetHrisPerformanceReviewsParameterIds = Schema.String;
export type GetHrisPerformanceReviewsParameterIds = typeof GetHrisPerformanceReviewsParameterIds.Type;

export const GetHrisPerformanceReviewsParameterRemoteIds = Schema.String;
export type GetHrisPerformanceReviewsParameterRemoteIds = typeof GetHrisPerformanceReviewsParameterRemoteIds.Type;

export const GetHrisPerformanceReviewsParameterTypes = Schema.String;
export type GetHrisPerformanceReviewsParameterTypes = typeof GetHrisPerformanceReviewsParameterTypes.Type;

export const GetHrisPerformanceReviewsParameterReviewCycleIds = Schema.String;
export type GetHrisPerformanceReviewsParameterReviewCycleIds = typeof GetHrisPerformanceReviewsParameterReviewCycleIds.Type;

export const GetHrisPerformanceReviewsParameterRevieweeIds = Schema.String;
export type GetHrisPerformanceReviewsParameterRevieweeIds = typeof GetHrisPerformanceReviewsParameterRevieweeIds.Type;

export const GetHrisPerformanceReviewsPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.String, type: Schema.NullOr(Schema.Union(Schema.Literal("MANAGER"), Schema.Literal("DIRECT_REPORT"), Schema.Literal("PEER"), Schema.Literal("SELF"))), summary_comment: Schema.NullOr(Schema.String), summary_rating: Schema.optional(Schema.Union(Schema.Struct({ type: Schema.String, min: Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), max: Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), value: Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))) }), Schema.Struct({ type: Schema.String, ordered_options: Schema.NullOr(Schema.Array(Schema.String)), value: Schema.NullOr(Schema.String) }), Schema.Null)), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })), reviewee: Schema.Struct({ id: Schema.String, remote_id: Schema.String, first_name: Schema.NullOr(Schema.String), last_name: Schema.NullOr(Schema.String), display_full_name: Schema.NullOr(Schema.String), work_email: Schema.optional(Schema.NullOr(Schema.String.pipe(Schema.pattern(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$"))))), remote_deleted_at: Schema.NullOr(Schema.String) }), reviewer: Schema.NullOr(Schema.Struct({ id: Schema.String, remote_id: Schema.String, first_name: Schema.NullOr(Schema.String), last_name: Schema.NullOr(Schema.String), display_full_name: Schema.NullOr(Schema.String), work_email: Schema.optional(Schema.NullOr(Schema.String.pipe(Schema.pattern(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$"))))), remote_deleted_at: Schema.NullOr(Schema.String) })), review_cycle: Schema.NullOr(Schema.Struct({ id: Schema.String, remote_id: Schema.String, name: Schema.NullOr(Schema.String), review_period_start_date: Schema.NullOr(Schema.String), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })) })) }) });
export type GetHrisPerformanceReviewsPositiveResponse = typeof GetHrisPerformanceReviewsPositiveResponse.Type;

export const GetHrisSkillsParameterIds = Schema.String;
export type GetHrisSkillsParameterIds = typeof GetHrisSkillsParameterIds.Type;

export const GetHrisSkillsParameterRemoteIds = Schema.String;
export type GetHrisSkillsParameterRemoteIds = typeof GetHrisSkillsParameterRemoteIds.Type;

export const GetHrisSkillsParameterNameContains = Schema.String;
export type GetHrisSkillsParameterNameContains = typeof GetHrisSkillsParameterNameContains.Type;

export const GetHrisSkillsPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.String, name: Schema.String, description: Schema.NullOr(Schema.String), ordered_levels: Schema.NullOr(Schema.Array(Schema.String)), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })) }) });
export type GetHrisSkillsPositiveResponse = typeof GetHrisSkillsPositiveResponse.Type;

export const PostHrisSkillsPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ id: Schema.String, remote_id: Schema.String, name: Schema.String, description: Schema.NullOr(Schema.String), ordered_levels: Schema.NullOr(Schema.Array(Schema.String)), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })) }) });
export type PostHrisSkillsPositiveResponse = typeof PostHrisSkillsPositiveResponse.Type;

export const PostHrisSkillsRequestBody = Schema.Struct({ name: Schema.String, levels: Schema.optional(Schema.Array(Schema.String)) });
export type PostHrisSkillsRequestBody = typeof PostHrisSkillsRequestBody.Type;

export const PatchHrisSkillsSkillIdParameterSkillId = Schema.String;
export type PatchHrisSkillsSkillIdParameterSkillId = typeof PatchHrisSkillsSkillIdParameterSkillId.Type;

export const PatchHrisSkillsSkillIdPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ id: Schema.String, remote_id: Schema.String, name: Schema.String, description: Schema.NullOr(Schema.String), ordered_levels: Schema.NullOr(Schema.Array(Schema.String)), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })) }) });
export type PatchHrisSkillsSkillIdPositiveResponse = typeof PatchHrisSkillsSkillIdPositiveResponse.Type;

export const PatchHrisSkillsSkillIdRequestBody = Schema.Struct({ name: Schema.optional(Schema.String), levels: Schema.optional(Schema.Array(Schema.String)) });
export type PatchHrisSkillsSkillIdRequestBody = typeof PatchHrisSkillsSkillIdRequestBody.Type;

export const DeleteHrisSkillsSkillIdParameterSkillId = Schema.String;
export type DeleteHrisSkillsSkillIdParameterSkillId = typeof DeleteHrisSkillsSkillIdParameterSkillId.Type;

export const DeleteHrisSkillsSkillIdPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ id: Schema.String, remote_id: Schema.String, name: Schema.String, description: Schema.NullOr(Schema.String), ordered_levels: Schema.NullOr(Schema.Array(Schema.String)), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })) }) });
export type DeleteHrisSkillsSkillIdPositiveResponse = typeof DeleteHrisSkillsSkillIdPositiveResponse.Type;

export const DeleteHrisSkillsSkillIdRequestBody = Schema.Struct({  });
export type DeleteHrisSkillsSkillIdRequestBody = typeof DeleteHrisSkillsSkillIdRequestBody.Type;

export const GetHrisEmployeeSkillAssignmentsParameterIds = Schema.String;
export type GetHrisEmployeeSkillAssignmentsParameterIds = typeof GetHrisEmployeeSkillAssignmentsParameterIds.Type;

export const GetHrisEmployeeSkillAssignmentsParameterRemoteIds = Schema.String;
export type GetHrisEmployeeSkillAssignmentsParameterRemoteIds = typeof GetHrisEmployeeSkillAssignmentsParameterRemoteIds.Type;

export const GetHrisEmployeeSkillAssignmentsParameterEmployeeIds = Schema.String;
export type GetHrisEmployeeSkillAssignmentsParameterEmployeeIds = typeof GetHrisEmployeeSkillAssignmentsParameterEmployeeIds.Type;

export const GetHrisEmployeeSkillAssignmentsParameterSkillIds = Schema.String;
export type GetHrisEmployeeSkillAssignmentsParameterSkillIds = typeof GetHrisEmployeeSkillAssignmentsParameterSkillIds.Type;

export const GetHrisEmployeeSkillAssignmentsPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, employee_id: Schema.String, skill_id: Schema.String, current_level: Schema.NullOr(Schema.String) })) }) });
export type GetHrisEmployeeSkillAssignmentsPositiveResponse = typeof GetHrisEmployeeSkillAssignmentsPositiveResponse.Type;

export const PostHrisEmployeeSkillAssignmentsPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ id: Schema.String, employee_id: Schema.String, skill_id: Schema.String, current_level: Schema.NullOr(Schema.String) }) });
export type PostHrisEmployeeSkillAssignmentsPositiveResponse = typeof PostHrisEmployeeSkillAssignmentsPositiveResponse.Type;

export const PostHrisEmployeeSkillAssignmentsRequestBody = Schema.Struct({ employee_id: Schema.String, skill_id: Schema.String, current_level: Schema.optional(Schema.String) });
export type PostHrisEmployeeSkillAssignmentsRequestBody = typeof PostHrisEmployeeSkillAssignmentsRequestBody.Type;

export const PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId = Schema.String;
export type PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId = typeof PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId.Type;

export const PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ id: Schema.String, employee_id: Schema.String, skill_id: Schema.String, current_level: Schema.NullOr(Schema.String) }) });
export type PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse = typeof PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse.Type;

export const PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody = Schema.Struct({ current_level: Schema.NullOr(Schema.String) });
export type PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody = typeof PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody.Type;

export const DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId = Schema.String;
export type DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId = typeof DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId.Type;

export const DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ id: Schema.String, employee_id: Schema.String, skill_id: Schema.String, current_level: Schema.NullOr(Schema.String) }) });
export type DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse = typeof DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse.Type;

export const DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody = Schema.Struct({  });
export type DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody = typeof DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody.Type;

export const GetHrisStaffingEntitiesParameterCursor = Schema.String;
export type GetHrisStaffingEntitiesParameterCursor = typeof GetHrisStaffingEntitiesParameterCursor.Type;

export const GetHrisStaffingEntitiesParameterPageSize = Schema_default_100_4;
export type GetHrisStaffingEntitiesParameterPageSize = typeof GetHrisStaffingEntitiesParameterPageSize.Type;

export const GetHrisStaffingEntitiesParameterUpdatedAfter = Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisStaffingEntitiesParameterUpdatedAfter = typeof GetHrisStaffingEntitiesParameterUpdatedAfter.Type;

export const GetHrisStaffingEntitiesParameterIncludeDeleted = Union_default_false;
export type GetHrisStaffingEntitiesParameterIncludeDeleted = typeof GetHrisStaffingEntitiesParameterIncludeDeleted.Type;

export const GetHrisStaffingEntitiesParameterIgnoreUnsupportedFilters = Union_default_false;
export type GetHrisStaffingEntitiesParameterIgnoreUnsupportedFilters = typeof GetHrisStaffingEntitiesParameterIgnoreUnsupportedFilters.Type;

export const GetHrisStaffingEntitiesParameterIds = Schema.String;
export type GetHrisStaffingEntitiesParameterIds = typeof GetHrisStaffingEntitiesParameterIds.Type;

export const GetHrisStaffingEntitiesParameterRemoteIds = Schema.String;
export type GetHrisStaffingEntitiesParameterRemoteIds = typeof GetHrisStaffingEntitiesParameterRemoteIds.Type;

export const GetHrisStaffingEntitiesParameterModelTypes = Schema.String;
export type GetHrisStaffingEntitiesParameterModelTypes = typeof GetHrisStaffingEntitiesParameterModelTypes.Type;

export const GetHrisStaffingEntitiesParameterStatuses = Schema.String;
export type GetHrisStaffingEntitiesParameterStatuses = typeof GetHrisStaffingEntitiesParameterStatuses.Type;

export const GetHrisStaffingEntitiesPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.String, name: Schema.NullOr(Schema.String), model_type: Schema.NullOr(Schema.Union(Schema.Literal("JOB"), Schema.Literal("POSITION"), Schema.Literal("REQUISITION"))), description: Schema.NullOr(Schema.String), status: Schema.NullOr(Schema.Union(Schema.Literal("OPEN_LIMITED"), Schema.Literal("OPEN_UNLIMITED"), Schema.Literal("PENDING"), Schema.Literal("FROZEN"), Schema.Literal("FILLED"), Schema.Literal("CLOSED"))), employment_types: Schema.optional(Schema.NullOr(Schema.Array(Schema.Struct({ remote_label: Schema.String, unified_type: Schema.NullOr(Schema.Union(Schema.Literal("FULL_TIME"), Schema.Literal("PART_TIME"), Schema.Literal("CONTRACT"), Schema.Literal("INTERNSHIP"), Schema.Literal("FREELANCE"), Schema.Literal("WORKING_STUDENT"), Schema.Literal("APPRENTICESHIP"), Schema.Literal("TRAINING"))) })))), number_of_openings: Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), parent_id: Schema.NullOr(Schema.String), remote_url: Schema.NullOr(Schema.URL), remote_created_at: Schema.NullOr(Schema.String), remote_updated_at: Schema.NullOr(Schema.String), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), custom_fields: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })), integration_fields: Schema.Array(Schema.Struct({ id: Schema.String, key: Schema.String, type: Schema.Union(Schema.Literal("DEFAULT"), Schema.Literal("CUSTOM")), value: Schema.optional(Schema.Null), label: Schema.NullOr(Schema.String) })), remote_data: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })), locations: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), name: Schema.NullOr(Schema.String), type: Schema.NullOr(Schema.String) })), legal_entities: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), name: Schema.NullOr(Schema.String) })), groups: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.String, name: Schema.NullOr(Schema.String), type: Schema.NullOr(Schema.Union(Schema.Literal("DEPARTMENT"), Schema.Literal("TEAM"), Schema.Literal("COST_CENTER"))) })) })) }) });
export type GetHrisStaffingEntitiesPositiveResponse = typeof GetHrisStaffingEntitiesPositiveResponse.Type;

export const GetAtsApplicationsParameterCursor = Schema.String;
export type GetAtsApplicationsParameterCursor = typeof GetAtsApplicationsParameterCursor.Type;

export const GetAtsApplicationsParameterPageSize = Schema_default_100_4;
export type GetAtsApplicationsParameterPageSize = typeof GetAtsApplicationsParameterPageSize.Type;

export const GetAtsApplicationsParameterUpdatedAfter = Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetAtsApplicationsParameterUpdatedAfter = typeof GetAtsApplicationsParameterUpdatedAfter.Type;

export const GetAtsApplicationsParameterIncludeDeleted = Union_default_false;
export type GetAtsApplicationsParameterIncludeDeleted = typeof GetAtsApplicationsParameterIncludeDeleted.Type;

export const GetAtsApplicationsParameterIgnoreUnsupportedFilters = Union_default_false;
export type GetAtsApplicationsParameterIgnoreUnsupportedFilters = typeof GetAtsApplicationsParameterIgnoreUnsupportedFilters.Type;

export const GetAtsApplicationsParameterIds = Schema.String;
export type GetAtsApplicationsParameterIds = typeof GetAtsApplicationsParameterIds.Type;

export const GetAtsApplicationsParameterRemoteIds = Schema.String;
export type GetAtsApplicationsParameterRemoteIds = typeof GetAtsApplicationsParameterRemoteIds.Type;

export const GetAtsApplicationsParameterOutcome = Schema.Union(Schema.Literal("PENDING"), Schema.Literal("HIRED"), Schema.Literal("DECLINED"));
export type GetAtsApplicationsParameterOutcome = typeof GetAtsApplicationsParameterOutcome.Type;

export const GetAtsApplicationsParameterOutcomes = Schema.String;
export type GetAtsApplicationsParameterOutcomes = typeof GetAtsApplicationsParameterOutcomes.Type;

export const GetAtsApplicationsParameterJobIds = Schema.String;
export type GetAtsApplicationsParameterJobIds = typeof GetAtsApplicationsParameterJobIds.Type;

export const GetAtsApplicationsParameterJobRemoteIds = Schema.String;
export type GetAtsApplicationsParameterJobRemoteIds = typeof GetAtsApplicationsParameterJobRemoteIds.Type;

export const GetAtsApplicationsParameterCurrentStageIds = Schema.String;
export type GetAtsApplicationsParameterCurrentStageIds = typeof GetAtsApplicationsParameterCurrentStageIds.Type;

export const GetAtsApplicationsParameterRemoteCreatedAfter = Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetAtsApplicationsParameterRemoteCreatedAfter = typeof GetAtsApplicationsParameterRemoteCreatedAfter.Type;

export const GetAtsApplicationsPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), outcome: Schema.NullOr(Schema.Union(Schema.Literal("PENDING"), Schema.Literal("HIRED"), Schema.Literal("DECLINED"))), rejection_reason_name: Schema.NullOr(Schema.String), rejected_at: Schema.NullOr(Schema.String), current_stage_id: Schema.NullOr(Schema.String), job_id: Schema.NullOr(Schema.String), candidate_id: Schema.NullOr(Schema.String), screening_question_answers: NullOr_default_value_prop_12, custom_fields: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })), integration_fields: Schema.Array(Schema.Struct({ id: Schema.String, key: Schema.String, type: Schema.Union(Schema.Literal("DEFAULT"), Schema.Literal("CUSTOM")), value: Schema.optional(Schema.Null), label: Schema.NullOr(Schema.String) })), remote_url: Schema.NullOr(Schema.URL), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), remote_created_at: Schema.NullOr(Schema.String), remote_updated_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })), candidate: Schema.NullOr(Schema.Struct({ id: Schema.String, remote_id: Schema.String, first_name: Schema.NullOr(Schema.String), last_name: Schema.NullOr(Schema.String), email_addresses: NullOr_default_value_prop, phone_numbers: NullOr_default_value_prop_10, social_media: NullOr_default_value_prop_11, source: Schema.NullOr(Schema.String), remote_url: Schema.NullOr(Schema.URL), tags: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), name: Schema.NullOr(Schema.String) })) })), current_stage: Schema.NullOr(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), name: Schema.NullOr(Schema.String), index: Schema.NullOr(Schema.Int) })), job: Schema.NullOr(Schema.Struct({ id: Schema.String, remote_id: Schema.String, name: Schema.NullOr(Schema.String) })), interviews: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), title: Schema.NullOr(Schema.String), starting_at: Schema.NullOr(Schema.String), ending_at: Schema.NullOr(Schema.String), location: Schema.optional(Schema.NullOr(Schema.Struct({ city: Schema.optional(Schema.NullOr(Schema.String)), country: Schema.optional(Schema.NullOr(Schema.String)), raw: Schema.optional(Schema.NullOr(Schema.String)), state: Schema.optional(Schema.NullOr(Schema.String)), street_1: Schema.optional(Schema.NullOr(Schema.String)), street_2: Schema.optional(Schema.NullOr(Schema.String)), zip_code: Schema.optional(Schema.NullOr(Schema.String)) }))), canceled: Schema.NullOr(Schema.Boolean) })), offers: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), status: Schema.NullOr(Schema.Union(Schema.Literal("ACCEPTED"), Schema.Literal("DECLINED"), Schema.Literal("SENT"), Schema.Literal("APPROVED"), Schema.Literal("DRAFT"), Schema.Literal("ABANDONED"))) })) })) }) });
export type GetAtsApplicationsPositiveResponse = typeof GetAtsApplicationsPositiveResponse.Type;

export const PutAtsApplicationsApplicationIdStageParameterApplicationId = Schema.String;
export type PutAtsApplicationsApplicationIdStageParameterApplicationId = typeof PutAtsApplicationsApplicationIdStageParameterApplicationId.Type;

export const PutAtsApplicationsApplicationIdStagePositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Record({ key: Schema.String, value: Schema.Unknown }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PutAtsApplicationsApplicationIdStagePositiveResponse = typeof PutAtsApplicationsApplicationIdStagePositiveResponse.Type;

export const PutAtsApplicationsApplicationIdStageRequestBody = Schema.Struct({ stage_id: Schema.String, remote_fields: Schema.optional(Schema.Struct({ workday: Schema.optional(Schema.Struct({ Workflow_Step_ID: Schema.optional(Schema.String), Step_Type: Schema.optional(Schema.Union(Schema.Literal("Next_Step_Reference"), Schema.Literal("Disposition_Step_Reference"))) })), greenhouse: Schema.optional(Schema.Struct({ post_headers: Schema.optional(Schema.Struct({ "On-Behalf-Of": Schema.optional(Schema.NullOr(Schema.String)) })) })), workable: Schema.optional(Schema.Struct({ on_behalf_of_user_remote_id: Schema.optional(Schema.String) })) })) });
export type PutAtsApplicationsApplicationIdStageRequestBody = typeof PutAtsApplicationsApplicationIdStageRequestBody.Type;

export const PostAtsApplicationsApplicationIdResultLinksParameterApplicationId = Schema.String;
export type PostAtsApplicationsApplicationIdResultLinksParameterApplicationId = typeof PostAtsApplicationsApplicationIdResultLinksParameterApplicationId.Type;

export const PostAtsApplicationsApplicationIdResultLinksPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Record({ key: Schema.String, value: Schema.Unknown }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PostAtsApplicationsApplicationIdResultLinksPositiveResponse = typeof PostAtsApplicationsApplicationIdResultLinksPositiveResponse.Type;

export const PostAtsApplicationsApplicationIdResultLinksRequestBody = Schema.Struct({ label: Schema.String, url: Schema.URL, details: Schema.optional(Schema.Struct({ custom_field_name_prefix: Schema.String, attributes: Schema.Array(Schema.Struct({ key: Schema.String, value: Schema.String })) })), remote_fields: Schema.optional(Schema.Struct({ icims: Schema.optional(Schema.Struct({ assessment_package_id: Schema.optional(Schema.String) })), oracle: Schema.optional(Schema.Struct({ override_document_category: Schema.optional(Schema.Union(Schema.Literal("IRC_CANDIDATE_RESUME"), Schema.Literal("IRC_CANDIDATE_COVERLETTER"), Schema.Literal("MISC"), Schema.Literal("IRC_INTERNAL"))), multi_post_to_all_current_applications: Schema.optional(Schema.Boolean) })), greenhouse: Schema.optional(Schema.Struct({ post_headers: Schema.optional(Schema.Struct({ "On-Behalf-Of": Schema.optional(Schema.NullOr(Schema.String)) })) })), workable: Schema.optional(Schema.Struct({ on_behalf_of_user_remote_id: Schema.optional(Schema.String) })) })) });
export type PostAtsApplicationsApplicationIdResultLinksRequestBody = typeof PostAtsApplicationsApplicationIdResultLinksRequestBody.Type;

export const PostAtsApplicationsApplicationIdNotesParameterApplicationId = Schema.String;
export type PostAtsApplicationsApplicationIdNotesParameterApplicationId = typeof PostAtsApplicationsApplicationIdNotesParameterApplicationId.Type;

export const PostAtsApplicationsApplicationIdNotesPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Record({ key: Schema.String, value: Schema.Unknown }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PostAtsApplicationsApplicationIdNotesPositiveResponse = typeof PostAtsApplicationsApplicationIdNotesPositiveResponse.Type;

export const PostAtsApplicationsApplicationIdNotesRequestBody = Schema.Struct({ content: Schema.String, content_type: Schema.Literal("PLAIN_TEXT"), remote_fields: Schema.optional(Schema.Struct({ teamtailor: Schema.optional(Schema.Struct({ user_id: Schema.optional(Schema.String) })), greenhouse: Schema.optional(Schema.Struct({ visibility: Schema.optional(Schema.Union(Schema.Literal("admin_only"), Schema.Literal("private"), Schema.Literal("public"))), post_headers: Schema.optional(Schema.Struct({ "On-Behalf-Of": Schema.optional(Schema.NullOr(Schema.String)) })) })), recruitee: Schema.optional(Schema.Struct({ visibility: Schema.optional(Schema.Unknown), is_json: Schema.optional(Schema.Boolean) })), bullhorn: Schema.optional(Schema.Struct({ action: Schema.optional(Schema.String) })), lever: Schema.optional(Schema.Struct({ perform_as: Schema.optional(Schema.String) })), workable: Schema.optional(Schema.Struct({ on_behalf_of_user_remote_id: Schema.optional(Schema.String) })) })) });
export type PostAtsApplicationsApplicationIdNotesRequestBody = typeof PostAtsApplicationsApplicationIdNotesRequestBody.Type;

export const GetAtsApplicationsApplicationIdAttachmentsParameterApplicationId = Schema.String;
export type GetAtsApplicationsApplicationIdAttachmentsParameterApplicationId = typeof GetAtsApplicationsApplicationIdAttachmentsParameterApplicationId.Type;

export const GetAtsApplicationsApplicationIdAttachmentsPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ results: Schema.Array(Schema.Struct({ type: Schema.Union(Schema.Literal("CV"), Schema.Literal("COVER_LETTER"), Schema.Literal("OTHER")), id: Schema.String, remote_id: Schema.String, data_url: Schema.String, file_name: Schema.String, content_type: Schema.String, remote_created_at: Schema.NullOr(Schema.String), remote_updated_at: Schema.NullOr(Schema.String) })) }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type GetAtsApplicationsApplicationIdAttachmentsPositiveResponse = typeof GetAtsApplicationsApplicationIdAttachmentsPositiveResponse.Type;

export const PostAtsApplicationsApplicationIdAttachmentsParameterApplicationId = Schema.String;
export type PostAtsApplicationsApplicationIdAttachmentsParameterApplicationId = typeof PostAtsApplicationsApplicationIdAttachmentsParameterApplicationId.Type;

export const PostAtsApplicationsApplicationIdAttachmentsPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Record({ key: Schema.String, value: Schema.Unknown }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PostAtsApplicationsApplicationIdAttachmentsPositiveResponse = typeof PostAtsApplicationsApplicationIdAttachmentsPositiveResponse.Type;

export const PostAtsApplicationsApplicationIdAttachmentsRequestBody = Schema.Struct({ attachment: Schema.Struct({ name: Schema.String, content_type: Schema.optional(Schema.String.pipe(Schema.pattern(new RegExp("^[\\w.-]+\\/[\\w.-]+$")))), data_url: Schema.optional(Schema.URL), data: Schema.optional(Schema.String), type: Schema.Union(Schema.Literal("CV"), Schema.Literal("COVER_LETTER"), Schema.Literal("OTHER")) }), remote_fields: Schema.optional(Schema.Struct({ oracle: Schema.optional(Schema.Struct({ override_document_category: Schema.optional(Schema.Union(Schema.Literal("IRC_CANDIDATE_RESUME"), Schema.Literal("IRC_CANDIDATE_COVERLETTER"), Schema.Literal("MISC"), Schema.Literal("IRC_INTERNAL"))), multi_post_to_all_current_applications: Schema.optional(Schema.Boolean) })), greenhouse: Schema.optional(Schema.Struct({ post_headers: Schema.optional(Schema.Struct({ "On-Behalf-Of": Schema.optional(Schema.NullOr(Schema.String)) })) })), workable: Schema.optional(Schema.Struct({ on_behalf_of_user_remote_id: Schema.optional(Schema.String) })) })) });
export type PostAtsApplicationsApplicationIdAttachmentsRequestBody = typeof PostAtsApplicationsApplicationIdAttachmentsRequestBody.Type;

export const PostAtsApplicationsApplicationIdRejectParameterApplicationId = Schema.String;
export type PostAtsApplicationsApplicationIdRejectParameterApplicationId = typeof PostAtsApplicationsApplicationIdRejectParameterApplicationId.Type;

export const PostAtsApplicationsApplicationIdRejectPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Record({ key: Schema.String, value: Schema.Unknown }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PostAtsApplicationsApplicationIdRejectPositiveResponse = typeof PostAtsApplicationsApplicationIdRejectPositiveResponse.Type;

export const PostAtsApplicationsApplicationIdRejectRequestBody = Schema.Struct({ rejection_reason_id: Schema.String, note: Schema.optional(Schema.String), remote_fields: Schema.optional(Schema.Struct({ greenhouse: Schema.optional(Schema.Struct({ rejection_email: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })), post_headers: Schema.optional(Schema.Struct({ "On-Behalf-Of": Schema.optional(Schema.NullOr(Schema.String)) })) })), teamtailor: Schema.optional(Schema.Struct({ user_id: Schema.optional(Schema.String) })), workable: Schema.optional(Schema.Struct({ on_behalf_of_user_remote_id: Schema.optional(Schema.String) })) })) });
export type PostAtsApplicationsApplicationIdRejectRequestBody = typeof PostAtsApplicationsApplicationIdRejectRequestBody.Type;

export const PostAtsApplicationsApplicationIdInterviewsParameterApplicationId = Schema.String;
export type PostAtsApplicationsApplicationIdInterviewsParameterApplicationId = typeof PostAtsApplicationsApplicationIdInterviewsParameterApplicationId.Type;

export const PostAtsApplicationsApplicationIdInterviewsPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Record({ key: Schema.String, value: Schema.Unknown }) });
export type PostAtsApplicationsApplicationIdInterviewsPositiveResponse = typeof PostAtsApplicationsApplicationIdInterviewsPositiveResponse.Type;

export const PostAtsApplicationsApplicationIdInterviewsRequestBody = Schema.Struct({ title: Schema.String, start_time: Schema.String, end_time: Schema.String, interviewer_user_ids: Schema.Array(Schema.String), organizer_user_id: Schema.String, location: Schema.Struct({ type: Schema.Union(Schema.Literal("PHYSICAL"), Schema.Literal("VIRTUAL")), address: Schema.optional(Schema.String) }) });
export type PostAtsApplicationsApplicationIdInterviewsRequestBody = typeof PostAtsApplicationsApplicationIdInterviewsRequestBody.Type;

export const PatchAtsApplicationsApplicationIdInterviewsParameterApplicationId = Schema.String;
export type PatchAtsApplicationsApplicationIdInterviewsParameterApplicationId = typeof PatchAtsApplicationsApplicationIdInterviewsParameterApplicationId.Type;

export const PatchAtsApplicationsApplicationIdInterviewsPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Record({ key: Schema.String, value: Schema.Unknown }) });
export type PatchAtsApplicationsApplicationIdInterviewsPositiveResponse = typeof PatchAtsApplicationsApplicationIdInterviewsPositiveResponse.Type;

export const PatchAtsApplicationsApplicationIdInterviewsRequestBody = Schema.Struct({ interview_id: Schema.String, title: Schema.String, start_time: Schema.String, end_time: Schema.String, interviewer_user_ids: Schema.Array(Schema.String), organizer_user_id: Schema.String, location: Schema.Struct({ type: Schema.Union(Schema.Literal("PHYSICAL"), Schema.Literal("VIRTUAL")), address: Schema.optional(Schema.String) }) });
export type PatchAtsApplicationsApplicationIdInterviewsRequestBody = typeof PatchAtsApplicationsApplicationIdInterviewsRequestBody.Type;

export const GetAtsCandidatesParameterCursor = Schema.String;
export type GetAtsCandidatesParameterCursor = typeof GetAtsCandidatesParameterCursor.Type;

export const GetAtsCandidatesParameterPageSize = Schema_default_100_4;
export type GetAtsCandidatesParameterPageSize = typeof GetAtsCandidatesParameterPageSize.Type;

export const GetAtsCandidatesParameterUpdatedAfter = Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetAtsCandidatesParameterUpdatedAfter = typeof GetAtsCandidatesParameterUpdatedAfter.Type;

export const GetAtsCandidatesParameterIncludeDeleted = Union_default_false;
export type GetAtsCandidatesParameterIncludeDeleted = typeof GetAtsCandidatesParameterIncludeDeleted.Type;

export const GetAtsCandidatesParameterIgnoreUnsupportedFilters = Union_default_false;
export type GetAtsCandidatesParameterIgnoreUnsupportedFilters = typeof GetAtsCandidatesParameterIgnoreUnsupportedFilters.Type;

export const GetAtsCandidatesParameterIds = Schema.String;
export type GetAtsCandidatesParameterIds = typeof GetAtsCandidatesParameterIds.Type;

export const GetAtsCandidatesParameterRemoteIds = Schema.String;
export type GetAtsCandidatesParameterRemoteIds = typeof GetAtsCandidatesParameterRemoteIds.Type;

export const GetAtsCandidatesParameterEmail = Schema.String.pipe(Schema.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/));
export type GetAtsCandidatesParameterEmail = typeof GetAtsCandidatesParameterEmail.Type;

export const GetAtsCandidatesParameterJobIds = Schema.String;
export type GetAtsCandidatesParameterJobIds = typeof GetAtsCandidatesParameterJobIds.Type;

export const GetAtsCandidatesParameterFirstName = Schema.String;
export type GetAtsCandidatesParameterFirstName = typeof GetAtsCandidatesParameterFirstName.Type;

export const GetAtsCandidatesParameterLastName = Schema.String;
export type GetAtsCandidatesParameterLastName = typeof GetAtsCandidatesParameterLastName.Type;

export const GetAtsCandidatesPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.String, first_name: Schema.NullOr(Schema.String), last_name: Schema.NullOr(Schema.String), company: Schema.NullOr(Schema.String), title: Schema.NullOr(Schema.String), confidential: Schema.NullOr(Schema.Boolean), source: Schema.NullOr(Schema.String), phone_numbers: NullOr_default_value_prop_10, email_addresses: NullOr_default_value_prop, social_media: NullOr_default_value_prop_11, location: Schema.optional(Schema.NullOr(Schema.Struct({ city: Schema.optional(Schema.NullOr(Schema.String)), country: Schema.optional(Schema.NullOr(Schema.String)), raw: Schema.optional(Schema.NullOr(Schema.String)), state: Schema.optional(Schema.NullOr(Schema.String)), street_1: Schema.optional(Schema.NullOr(Schema.String)), street_2: Schema.optional(Schema.NullOr(Schema.String)), zip_code: Schema.optional(Schema.NullOr(Schema.String)) }))), custom_fields: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })), integration_fields: Schema.Array(Schema.Struct({ id: Schema.String, key: Schema.String, type: Schema.Union(Schema.Literal("DEFAULT"), Schema.Literal("CUSTOM")), value: Schema.optional(Schema.Null), label: Schema.NullOr(Schema.String) })), remote_url: Schema.NullOr(Schema.URL), remote_created_at: Schema.NullOr(Schema.String), remote_updated_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), applications: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), outcome: Schema.NullOr(Schema.Union(Schema.Literal("PENDING"), Schema.Literal("HIRED"), Schema.Literal("DECLINED"))), rejection_reason_name: Schema.NullOr(Schema.String), rejected_at: Schema.NullOr(Schema.String), remote_url: Schema.NullOr(Schema.URL), changed_at: Schema.String, remote_created_at: Schema.NullOr(Schema.String), remote_updated_at: Schema.NullOr(Schema.String), current_stage: Schema.NullOr(Schema.Struct({ id: Schema.String, name: Schema.NullOr(Schema.String), remote_id: Schema.NullOr(Schema.String), index: Schema.NullOr(Schema.Int) })), job: Schema.NullOr(Schema.Struct({ id: Schema.String, name: Schema.NullOr(Schema.String), remote_id: Schema.String })) })), tags: Schema.Array(Schema.Struct({ id: Schema.String, name: Schema.NullOr(Schema.String), remote_id: Schema.NullOr(Schema.String) })) })) }) });
export type GetAtsCandidatesPositiveResponse = typeof GetAtsCandidatesPositiveResponse.Type;

export const PostAtsCandidatesPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ id: Schema.String, remote_id: Schema.String, first_name: Schema.NullOr(Schema.String), last_name: Schema.NullOr(Schema.String), company: Schema.NullOr(Schema.String), title: Schema.NullOr(Schema.String), confidential: Schema.NullOr(Schema.Boolean), source: Schema.NullOr(Schema.String), phone_numbers: NullOr_default_value_prop_10, email_addresses: NullOr_default_value_prop, social_media: NullOr_default_value_prop_11, location: Schema.optional(Schema.NullOr(Schema.Struct({ city: Schema.optional(Schema.NullOr(Schema.String)), country: Schema.optional(Schema.NullOr(Schema.String)), raw: Schema.optional(Schema.NullOr(Schema.String)), state: Schema.optional(Schema.NullOr(Schema.String)), street_1: Schema.optional(Schema.NullOr(Schema.String)), street_2: Schema.optional(Schema.NullOr(Schema.String)), zip_code: Schema.optional(Schema.NullOr(Schema.String)) }))), custom_fields: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })), integration_fields: Schema.Array(Schema.Struct({ id: Schema.String, key: Schema.String, type: Schema.Union(Schema.Literal("DEFAULT"), Schema.Literal("CUSTOM")), value: Schema.optional(Schema.Null), label: Schema.NullOr(Schema.String) })), remote_url: Schema.NullOr(Schema.URL), remote_created_at: Schema.NullOr(Schema.String), remote_updated_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), applications: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), outcome: Schema.NullOr(Schema.Union(Schema.Literal("PENDING"), Schema.Literal("HIRED"), Schema.Literal("DECLINED"))), rejection_reason_name: Schema.NullOr(Schema.String), rejected_at: Schema.NullOr(Schema.String), remote_url: Schema.NullOr(Schema.URL), changed_at: Schema.String, remote_created_at: Schema.NullOr(Schema.String), remote_updated_at: Schema.NullOr(Schema.String), current_stage: Schema.NullOr(Schema.Struct({ id: Schema.String, name: Schema.NullOr(Schema.String), remote_id: Schema.NullOr(Schema.String), index: Schema.NullOr(Schema.Int) })), job: Schema.NullOr(Schema.Struct({ id: Schema.String, name: Schema.NullOr(Schema.String), remote_id: Schema.String })) })), tags: Schema.Array(Schema.Struct({ id: Schema.String, name: Schema.NullOr(Schema.String), remote_id: Schema.NullOr(Schema.String) })) }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PostAtsCandidatesPositiveResponse = typeof PostAtsCandidatesPositiveResponse.Type;

export const PostAtsCandidatesRequestBody = Schema.Struct({ candidate: Schema.Struct({ first_name: Schema.String, last_name: Schema.String, email_address: Schema.String.pipe(Schema.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)), additional_email_addresses: Schema.optional(Schema.Array(Schema.Struct({ type: Schema.Union(Schema.Literal("PERSONAL"), Schema.Literal("WORK"), Schema.Literal("OTHER")), email_address: Schema.String.pipe(Schema.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) }))), company: Schema.optional(Schema.String), title: Schema.optional(Schema.String), phone_number: Schema.optional(Schema.String), additional_phone_numbers: Schema.optional(Schema.Array(Schema.Struct({ type: Schema.Union(Schema.Literal("PERSONAL"), Schema.Literal("WORK"), Schema.Literal("OTHER")), phone_number: Schema.String }))), location: Schema.optional(Schema.Struct({ city: Schema.optional(Schema.String), country: Schema.String.pipe(Schema.pattern(new RegExp("^[A-Z]{2}$"))), state: Schema.optional(Schema.String), street_1: Schema.optional(Schema.String), zip_code: Schema.optional(Schema.String) })), gender: Schema.optional(Schema.Union(Schema.Literal("MALE"), Schema.Literal("FEMALE"), Schema.Literal("OTHER"))), availability_date: Schema.optional(Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), salary_expectations: Schema.optional(Schema.Struct({ period: Schema.Union(Schema.Literal("MONTH"), Schema.Literal("YEAR")), amount: Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308)) })), social_links: Array_default_value_prop_13 }), application: Schema.Struct({ job_id: Schema.String, stage_id: Schema.optional(Schema.String) }), screening_question_answers: Schema.optional(Schema.Array(Schema.Struct({ question_id: Schema.String, answer: Schema.Union(Schema.String, Schema.Boolean, Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308)), Schema.Array(Schema.String), Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))), Schema.Struct({ name: Schema.String, content_type: Schema.optional(Schema.String.pipe(Schema.pattern(new RegExp("^[\\w.-]+\\/[\\w.-]+$")))), data_url: Schema.optional(Schema.URL), data: Schema.optional(Schema.String) })) }))), attachments: Union_default_value_prop, source: Schema.optional(Schema.Struct({ name: Schema.optional(Schema.String), unified_key: Schema.optional(Schema.String), id: Schema.optional(Schema.String) })), sourced_by: Schema.optional(Schema.Struct({ user_id: Schema.String })), gdpr_consent: Schema.optional(Schema.Struct({ expires_at: Schema.optional(Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), given: Schema.optional(Schema.Boolean) })), remote_fields: Schema.optional(Schema.Struct({ successfactors: Schema.optional(Schema.Struct({ Candidate: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })), JobApplication: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })), copyJobApplicationAttachments: Schema.optional(Schema.Boolean), update_existing_candidate: Schema.optional(Schema.NullOr(Schema.Boolean)) })), personio: Schema.optional(Schema.Struct({ application: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })), talentsoft: Schema.optional(Schema.Struct({ applicant: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })), application: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })), teamtailor: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })), application: Schema.optional(Schema.Struct({ attributes: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })) })), greenhouse: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })), application: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })), post_headers: Schema.optional(Schema.Struct({ "On-Behalf-Of": Schema.optional(Schema.NullOr(Schema.String)) })) })), lever: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })), workable: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })), on_behalf_of_user_remote_id: Schema.optional(Schema.String) })), workday: Schema.optional(Schema.Struct({ Candidate_Data: Schema.optional(Schema.Struct({ Name_Detail_Data: Schema.optional(Schema.Struct({ Middle_Name: Schema.optional(Schema.String), Social_Suffix_Reference: Schema.optional(Schema.Struct({ Predefined_Name_Component_ID: Schema.String })) })), Language_Reference: Schema.optional(Schema.Struct({ WID: Schema.String })), Job_Application_Data: Schema.optional(Schema.Struct({ Job_Applied_To_Data: Schema.optional(Schema.Struct({ Global_Personal_Information_Data: Schema.optional(Schema.Struct({ Date_of_Birth: Schema.optional(Schema.String) })) })), Resume_Data: Schema.optional(Schema.Struct({ Education_Data: Schema.optional(Schema.Array(Schema.Struct({ School_Name: Schema.optional(Schema.String), First_Year_Attended: Schema.optional(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), Last_Year_Attended: Schema.optional(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), Field_of_Study_Reference: Schema.optional(Schema.Struct({ WID: Schema.String })), Degree_Reference: Schema.optional(Schema.Struct({ WID: Schema.String })), Grade_Average: Schema.optional(Schema.String) }))), Skill_Data: Schema.optional(Schema.Array(Schema.Struct({ Skill_Name: Schema.optional(Schema.String) }))), Language_Data: Schema.optional(Schema.Array(Schema.Struct({ Language_Reference: Schema.optional(Schema.Struct({ WID: Schema.optional(Schema.String) })), Language: Schema.optional(Schema.Struct({ Native: Schema.optional(Schema.Boolean), Language_Ability: Schema.Array(Schema.Struct({ Language_Ability_Data: Schema.optional(Schema.Struct({ Language_Proficiency_Reference: Schema.optional(Schema.Struct({ WID: Schema.String })), Language_Ability_Type_Reference: Schema.optional(Schema.Struct({ WID: Schema.String })) })) })) })) }))), Experience_Data: Schema.optional(Schema.Array(Schema.Struct({ Company_Name: Schema.String, Title: Schema.String, Location: Schema.optional(Schema.String), Start_Date: Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))), End_Date: Schema.optional(Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), Currently_Work_Here: Schema.optional(Schema.Boolean), Description: Schema.optional(Schema.String) }))) })) })), Contact_Data: Schema.optional(Schema.Struct({ Location_Data: Schema.optional(Schema.Struct({ Address_Line_1: Schema.optional(Schema.String), Address_Line_2: Schema.optional(Schema.String), Region_Subdivision_1: Schema.optional(Schema.String), Country_Region_Reference: Schema.optional(Schema.Struct({ Country_Region_ID: Schema.String })), Country_City_Reference: Schema.optional(Schema.Struct({ WID: Schema.String })) })) })), Worker_Reference: Schema.optional(Schema.Struct({ WID: Schema.optional(Schema.String), Employee_ID: Schema.optional(Schema.String) })) })), Override_Source_Reference_WID: Schema.optional(Schema.String) })), zohorecruit: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })), bullhorn: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })), job_submission: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })), smartrecruiters: Schema.optional(Schema.Struct({ candidate_with_questions: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })), candidate_without_questions: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })), candidate: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })), consent_decisions: Schema.optional(Schema.Struct({ SINGLE: Schema.optional(Schema.Boolean), SMART_RECRUIT: Schema.optional(Schema.Boolean), SMART_CRM: Schema.optional(Schema.Boolean), SMART_MESSAGE_SMS: Schema.optional(Schema.Boolean), SMART_MESSAGE_WHATSAPP: Schema.optional(Schema.Boolean) })) })), talentadore: Schema.optional(Schema.Struct({ applications: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })), guidecom: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })), dvinci: Schema.optional(Schema.Struct({ application: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })), candidate: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })), hrworks: Schema.optional(Schema.Struct({ jobApplication: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })), jobylon: Schema.optional(Schema.Struct({ application: Schema.optional(Schema.Struct({ message: Schema.optional(Schema.String) })) })), avature: Schema.optional(Schema.Struct({ workflow: Schema.optional(Schema.Struct({ step: Schema.optional(Schema.Struct({ id: Schema.Int })) })) })), recruitee: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Struct({ cover_letter_text: Schema.optional(Schema.String) })) })), rexx: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })), umantis: Schema.optional(Schema.Struct({ person: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })), piloga: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Struct({ street: Schema.optional(Schema.String) })) })), pinpoint: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })), covetorest: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Struct({ mandant: Schema.optional(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))) })) })) })) });
export type PostAtsCandidatesRequestBody = typeof PostAtsCandidatesRequestBody.Type;

export const GetAtsCandidatesCandidateIdAttachmentsParameterCandidateId = Schema.String;
export type GetAtsCandidatesCandidateIdAttachmentsParameterCandidateId = typeof GetAtsCandidatesCandidateIdAttachmentsParameterCandidateId.Type;

export const GetAtsCandidatesCandidateIdAttachmentsPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ results: Schema.Array(Schema.Struct({ id: Schema.String.pipe(Schema.minLength(24), Schema.maxLength(24), Schema.pattern(new RegExp("^[1-9A-HJ-NP-Za-km-z]+$"))), application_id: Schema.NullOr(Schema.String.pipe(Schema.minLength(24), Schema.maxLength(24), Schema.pattern(new RegExp("^[1-9A-HJ-NP-Za-km-z]+$")))), candidate_id: Schema.String.pipe(Schema.minLength(24), Schema.maxLength(24), Schema.pattern(new RegExp("^[1-9A-HJ-NP-Za-km-z]+$"))), type: Schema.Union(Schema.Literal("CV"), Schema.Literal("COVER_LETTER"), Schema.Literal("OTHER")), remote_id: Schema.String, data_url: Schema.String, file_name: Schema.String, content_type: Schema.String, remote_created_at: Schema.NullOr(Schema.String), remote_updated_at: Schema.NullOr(Schema.String) })) }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type GetAtsCandidatesCandidateIdAttachmentsPositiveResponse = typeof GetAtsCandidatesCandidateIdAttachmentsPositiveResponse.Type;

export const PostAtsCandidatesCandidateIdAttachmentsParameterCandidateId = Schema.String;
export type PostAtsCandidatesCandidateIdAttachmentsParameterCandidateId = typeof PostAtsCandidatesCandidateIdAttachmentsParameterCandidateId.Type;

export const PostAtsCandidatesCandidateIdAttachmentsPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Record({ key: Schema.String, value: Schema.Unknown }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PostAtsCandidatesCandidateIdAttachmentsPositiveResponse = typeof PostAtsCandidatesCandidateIdAttachmentsPositiveResponse.Type;

export const PostAtsCandidatesCandidateIdAttachmentsRequestBody = Schema.Struct({ attachment: Schema.Struct({ name: Schema.String, content_type: Schema.optional(Schema.String.pipe(Schema.pattern(new RegExp("^[\\w.-]+\\/[\\w.-]+$")))), data_url: Schema.optional(Schema.URL), data: Schema.optional(Schema.String), type: Schema.Union(Schema.Literal("CV"), Schema.Literal("COVER_LETTER"), Schema.Literal("OTHER")) }), remote_fields: Schema.optional(Schema.Struct({ greenhouse: Schema.optional(Schema.Struct({ post_headers: Schema.optional(Schema.Struct({ "On-Behalf-Of": Schema.optional(Schema.NullOr(Schema.String)) })) })), workable: Schema.optional(Schema.Struct({ on_behalf_of_user_remote_id: Schema.optional(Schema.String) })) })) });
export type PostAtsCandidatesCandidateIdAttachmentsRequestBody = typeof PostAtsCandidatesCandidateIdAttachmentsRequestBody.Type;

export const PostAtsCandidatesCandidateIdResultLinksParameterCandidateId = Schema.String;
export type PostAtsCandidatesCandidateIdResultLinksParameterCandidateId = typeof PostAtsCandidatesCandidateIdResultLinksParameterCandidateId.Type;

export const PostAtsCandidatesCandidateIdResultLinksPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Record({ key: Schema.String, value: Schema.Unknown }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PostAtsCandidatesCandidateIdResultLinksPositiveResponse = typeof PostAtsCandidatesCandidateIdResultLinksPositiveResponse.Type;

export const PostAtsCandidatesCandidateIdResultLinksRequestBody = Schema.Struct({ label: Schema.String, url: Schema.URL, details: Schema.optional(Schema.Struct({ custom_field_name_prefix: Schema.String, attributes: Schema.Array(Schema.Struct({ key: Schema.String, value: Schema.String })) })), remote_fields: Schema.optional(Schema.Struct({ icims: Schema.optional(Schema.Struct({ assessment_package_id: Schema.optional(Schema.String) })), oracle: Schema.optional(Schema.Struct({ override_document_category: Schema.optional(Schema.Union(Schema.Literal("IRC_CANDIDATE_RESUME"), Schema.Literal("IRC_CANDIDATE_COVERLETTER"), Schema.Literal("MISC"), Schema.Literal("IRC_INTERNAL"))), multi_post_to_all_current_applications: Schema.optional(Schema.Boolean) })), greenhouse: Schema.optional(Schema.Struct({ post_headers: Schema.optional(Schema.Struct({ "On-Behalf-Of": Schema.optional(Schema.NullOr(Schema.String)) })) })), workable: Schema.optional(Schema.Struct({ on_behalf_of_user_remote_id: Schema.optional(Schema.String) })) })) });
export type PostAtsCandidatesCandidateIdResultLinksRequestBody = typeof PostAtsCandidatesCandidateIdResultLinksRequestBody.Type;

export const PostAtsCandidatesCandidateIdTagsParameterCandidateId = Schema.String;
export type PostAtsCandidatesCandidateIdTagsParameterCandidateId = typeof PostAtsCandidatesCandidateIdTagsParameterCandidateId.Type;

export const PostAtsCandidatesCandidateIdTagsPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Record({ key: Schema.String, value: Schema.Unknown }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PostAtsCandidatesCandidateIdTagsPositiveResponse = typeof PostAtsCandidatesCandidateIdTagsPositiveResponse.Type;

export const PostAtsCandidatesCandidateIdTagsRequestBody = Schema.Struct({ tag: Schema.Struct({ name: Schema.String.pipe(Schema.minLength(1)) }), remote_fields: Schema.optional(Schema.Struct({ greenhouse: Schema.optional(Schema.Struct({ post_headers: Schema.optional(Schema.Struct({ "On-Behalf-Of": Schema.optional(Schema.NullOr(Schema.String)) })) })), workable: Schema.optional(Schema.Struct({ on_behalf_of_user_remote_id: Schema.optional(Schema.String) })) })) });
export type PostAtsCandidatesCandidateIdTagsRequestBody = typeof PostAtsCandidatesCandidateIdTagsRequestBody.Type;

export const DeleteAtsCandidatesCandidateIdTagsParameterCandidateId = Schema.String;
export type DeleteAtsCandidatesCandidateIdTagsParameterCandidateId = typeof DeleteAtsCandidatesCandidateIdTagsParameterCandidateId.Type;

export const DeleteAtsCandidatesCandidateIdTagsPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Record({ key: Schema.String, value: Schema.Unknown }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type DeleteAtsCandidatesCandidateIdTagsPositiveResponse = typeof DeleteAtsCandidatesCandidateIdTagsPositiveResponse.Type;

export const DeleteAtsCandidatesCandidateIdTagsRequestBody = Schema.Struct({ tag: Schema.Struct({ name: Schema.String }), remote_fields: Schema.optional(Schema.Struct({ greenhouse: Schema.optional(Schema.Struct({ post_headers: Schema.optional(Schema.Struct({ "On-Behalf-Of": Schema.optional(Schema.NullOr(Schema.String)) })) })), workable: Schema.optional(Schema.Struct({ on_behalf_of_user_remote_id: Schema.optional(Schema.String) })) })) });
export type DeleteAtsCandidatesCandidateIdTagsRequestBody = typeof DeleteAtsCandidatesCandidateIdTagsRequestBody.Type;

export const GetAtsTagsParameterCursor = Schema.String;
export type GetAtsTagsParameterCursor = typeof GetAtsTagsParameterCursor.Type;

export const GetAtsTagsParameterPageSize = Schema_default_100_4;
export type GetAtsTagsParameterPageSize = typeof GetAtsTagsParameterPageSize.Type;

export const GetAtsTagsParameterUpdatedAfter = Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetAtsTagsParameterUpdatedAfter = typeof GetAtsTagsParameterUpdatedAfter.Type;

export const GetAtsTagsParameterIncludeDeleted = Union_default_false;
export type GetAtsTagsParameterIncludeDeleted = typeof GetAtsTagsParameterIncludeDeleted.Type;

export const GetAtsTagsParameterIgnoreUnsupportedFilters = Union_default_false;
export type GetAtsTagsParameterIgnoreUnsupportedFilters = typeof GetAtsTagsParameterIgnoreUnsupportedFilters.Type;

export const GetAtsTagsParameterIds = Schema.String;
export type GetAtsTagsParameterIds = typeof GetAtsTagsParameterIds.Type;

export const GetAtsTagsParameterRemoteIds = Schema.String;
export type GetAtsTagsParameterRemoteIds = typeof GetAtsTagsParameterRemoteIds.Type;

export const GetAtsTagsPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), name: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String) })) }) });
export type GetAtsTagsPositiveResponse = typeof GetAtsTagsPositiveResponse.Type;

export const GetAtsApplicationStagesParameterCursor = Schema.String;
export type GetAtsApplicationStagesParameterCursor = typeof GetAtsApplicationStagesParameterCursor.Type;

export const GetAtsApplicationStagesParameterPageSize = Schema_default_100_4;
export type GetAtsApplicationStagesParameterPageSize = typeof GetAtsApplicationStagesParameterPageSize.Type;

export const GetAtsApplicationStagesParameterUpdatedAfter = Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetAtsApplicationStagesParameterUpdatedAfter = typeof GetAtsApplicationStagesParameterUpdatedAfter.Type;

export const GetAtsApplicationStagesParameterIncludeDeleted = Union_default_false;
export type GetAtsApplicationStagesParameterIncludeDeleted = typeof GetAtsApplicationStagesParameterIncludeDeleted.Type;

export const GetAtsApplicationStagesParameterIgnoreUnsupportedFilters = Union_default_false;
export type GetAtsApplicationStagesParameterIgnoreUnsupportedFilters = typeof GetAtsApplicationStagesParameterIgnoreUnsupportedFilters.Type;

export const GetAtsApplicationStagesParameterIds = Schema.String;
export type GetAtsApplicationStagesParameterIds = typeof GetAtsApplicationStagesParameterIds.Type;

export const GetAtsApplicationStagesParameterRemoteIds = Schema.String;
export type GetAtsApplicationStagesParameterRemoteIds = typeof GetAtsApplicationStagesParameterRemoteIds.Type;

export const GetAtsApplicationStagesPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), name: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String) })) }) });
export type GetAtsApplicationStagesPositiveResponse = typeof GetAtsApplicationStagesPositiveResponse.Type;

export const GetAtsJobsParameterCursor = Schema.String;
export type GetAtsJobsParameterCursor = typeof GetAtsJobsParameterCursor.Type;

export const GetAtsJobsParameterPageSize = Schema_default_100_4;
export type GetAtsJobsParameterPageSize = typeof GetAtsJobsParameterPageSize.Type;

export const GetAtsJobsParameterUpdatedAfter = Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetAtsJobsParameterUpdatedAfter = typeof GetAtsJobsParameterUpdatedAfter.Type;

export const GetAtsJobsParameterIncludeDeleted = Union_default_false;
export type GetAtsJobsParameterIncludeDeleted = typeof GetAtsJobsParameterIncludeDeleted.Type;

export const GetAtsJobsParameterIgnoreUnsupportedFilters = Union_default_false;
export type GetAtsJobsParameterIgnoreUnsupportedFilters = typeof GetAtsJobsParameterIgnoreUnsupportedFilters.Type;

export const GetAtsJobsParameterIds = Schema.String;
export type GetAtsJobsParameterIds = typeof GetAtsJobsParameterIds.Type;

export const GetAtsJobsParameterRemoteIds = Schema.String;
export type GetAtsJobsParameterRemoteIds = typeof GetAtsJobsParameterRemoteIds.Type;

export const GetAtsJobsParameterJobCodes = Schema.String;
export type GetAtsJobsParameterJobCodes = typeof GetAtsJobsParameterJobCodes.Type;

export const GetAtsJobsParameterPostUrl = Schema.String;
export type GetAtsJobsParameterPostUrl = typeof GetAtsJobsParameterPostUrl.Type;

export const GetAtsJobsParameterStatus = Schema.Union(Schema.Literal("OPEN"), Schema.Literal("CLOSED"), Schema.Literal("DRAFT"), Schema.Literal("ARCHIVED"));
export type GetAtsJobsParameterStatus = typeof GetAtsJobsParameterStatus.Type;

export const GetAtsJobsParameterStatuses = Schema.String;
export type GetAtsJobsParameterStatuses = typeof GetAtsJobsParameterStatuses.Type;

export const GetAtsJobsParameterEmploymentTypes = Schema.String;
export type GetAtsJobsParameterEmploymentTypes = typeof GetAtsJobsParameterEmploymentTypes.Type;

export const GetAtsJobsParameterVisibilities = Schema.String;
export type GetAtsJobsParameterVisibilities = typeof GetAtsJobsParameterVisibilities.Type;

export const GetAtsJobsParameterRemoteCreatedAfter = Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetAtsJobsParameterRemoteCreatedAfter = typeof GetAtsJobsParameterRemoteCreatedAfter.Type;

export const GetAtsJobsParameterNameContains = Schema.String;
export type GetAtsJobsParameterNameContains = typeof GetAtsJobsParameterNameContains.Type;

export const GetAtsJobsPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.String, name: Schema.NullOr(Schema.String), job_code: Schema.NullOr(Schema.String), description: Schema.NullOr(Schema.String), confidential: Schema.NullOr(Schema.Boolean), weekly_hours: Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), employment_type: Schema.optional(Schema.Union(Schema.Union(Schema.Literal("FULL_TIME"), Schema.Literal("PART_TIME"), Schema.Literal("CONTRACT"), Schema.Literal("SEASONAL"), Schema.Literal("INTERNSHIP")), Schema.String, Schema.Null)), status: Schema.optional(Schema.Union(Schema.Union(Schema.Literal("OPEN"), Schema.Literal("CLOSED"), Schema.Literal("DRAFT"), Schema.Literal("ARCHIVED")), Schema.String, Schema.Null)), visibility: Schema.optional(Schema.Union(Schema.Union(Schema.Literal("PUBLIC"), Schema.Literal("INTERNAL"), Schema.Literal("UNLISTED"), Schema.Literal("CONFIDENTIAL")), Schema.String, Schema.Null)), category: Schema.NullOr(Schema.String), department: Schema.NullOr(Schema.String), post_url: Schema.NullOr(Schema.String), experience_level: Schema.NullOr(Schema.String), remote_work_status: Schema.optional(Schema.Union(Schema.Union(Schema.Literal("REMOTE"), Schema.Literal("HYBRID"), Schema.Literal("TEMPORARY"), Schema.Literal("ON_SITE")), Schema.String, Schema.Null)), salary_amount: Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), salary_amount_from: Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), salary_amount_to: Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), salary_currency: Schema.NullOr(Schema.String), salary_period: Schema.optional(Schema.Union(Schema.Union(Schema.Literal("YEAR"), Schema.Literal("MONTH"), Schema.Literal("TWO_WEEKS"), Schema.Literal("WEEK"), Schema.Literal("DAY"), Schema.Literal("HOUR")), Schema.String, Schema.Null)), location: Schema.optional(Schema.NullOr(Schema.Struct({ city: Schema.optional(Schema.NullOr(Schema.String)), country: Schema.optional(Schema.NullOr(Schema.String)), raw: Schema.optional(Schema.NullOr(Schema.String)), state: Schema.optional(Schema.NullOr(Schema.String)), street_1: Schema.optional(Schema.NullOr(Schema.String)), street_2: Schema.optional(Schema.NullOr(Schema.String)), zip_code: Schema.optional(Schema.NullOr(Schema.String)) }))), custom_fields: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })), integration_fields: Schema.Array(Schema.Struct({ id: Schema.String, key: Schema.String, type: Schema.Union(Schema.Literal("DEFAULT"), Schema.Literal("CUSTOM")), value: Schema.optional(Schema.Null), label: Schema.NullOr(Schema.String) })), remote_url: Schema.NullOr(Schema.URL), opened_at: Schema.NullOr(Schema.String), closed_at: Schema.NullOr(Schema.String), remote_created_at: Schema.NullOr(Schema.String), remote_updated_at: Schema.NullOr(Schema.String), contact_id: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), stages: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), name: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })), index: Schema.optional(Schema.NullOr(Schema.Int)) })), screening_questions: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), title: Schema.NullOr(Schema.String), description: Schema.NullOr(Schema.String), format: Schema.optional(Schema.Union(Schema.Struct({ display_type: Schema.optional(Schema.NullOr(Schema.Union(Schema.Literal("SINGLE_LINE"), Schema.Literal("MULTI_LINE"), Schema.Literal("EMAIL"), Schema.Literal("URL")))), max_length: Schema.optional(Schema.NullOr(Schema.Int)), type: Schema.String }), Schema.Struct({ display_type: NullOr_default_FIELD_prop, max: Schema.optional(Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308)))), min: Schema.optional(Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308)))), type: Schema.String }), Schema.Struct({ accepted_mime_types: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))), max_file_size_bytes: Schema.optional(Schema.NullOr(Schema.Int)), type: Schema.String }), Schema.Struct({ display_type: Schema.optional(Schema.NullOr(Schema.Union(Schema.Literal("DROPDOWN"), Schema.Literal("RADIO")))), options: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.optional(Schema.NullOr(Schema.String)), name: Schema.String })), type: Schema.String }), Schema.Struct({ type: Schema.String }), Schema.Struct({ type: Schema.String }), Schema.Struct({ options: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.optional(Schema.NullOr(Schema.String)), name: Schema.String })), type: Schema.String }), Schema.Struct({ type: Schema.String }), Schema.Struct({ raw_question: Schema.optional(Schema.Unknown), type: Schema.String }), Schema.Null)), category: Schema.NullOr(Schema.Union(Schema.Literal("EEO"), Schema.Literal("DEMOGRAPHIC"))), index: Schema.optional(Schema.NullOr(Schema.Int)), required: Schema.NullOr(Schema.Boolean), precondition_question_id: Schema.optional(Schema.NullOr(Schema.String.pipe(Schema.minLength(24), Schema.maxLength(24), Schema.pattern(new RegExp("^[1-9A-HJ-NP-Za-km-z]+$"))))), precondition_options: Union_default_null_prop })), job_postings: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), title: Schema.NullOr(Schema.String), description_html: Schema.NullOr(Schema.String), status: Schema.NullOr(Schema.Union(Schema.Literal("ACTIVE"), Schema.Literal("INACTIVE"), Schema.Literal("DRAFT"))), visibility: Schema.NullOr(Schema.Union(Schema.Literal("PUBLIC"), Schema.Literal("INTERNAL"), Schema.Literal("UNLISTED"))), url: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })), hiring_team: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), first_name: Schema.NullOr(Schema.String), last_name: Schema.NullOr(Schema.String), email: Schema.optional(Schema.NullOr(Schema.String.pipe(Schema.pattern(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$"))))), hiring_team_roles: Schema.Array(Schema.Union(Schema.Literal("RECRUITER"), Schema.Literal("HIRING_MANAGER"), Schema.Literal("COORDINATOR"), Schema.Literal("SOURCER"), Schema.Literal("INTERVIEWER"))), job_roles: Schema.Array(Schema.Struct({ remote_id: Schema.NullOr(Schema.String), remote_label: Schema.NullOr(Schema.String), scope: Schema.NullOr(Schema.Union(Schema.Literal("SYSTEM"), Schema.Literal("JOB"))), unified_type: Schema.NullOr(Schema.Union(Schema.Literal("HIRING_MANAGER"), Schema.Literal("RECRUITER"), Schema.Literal("COORDINATOR"), Schema.Literal("SOURCER"), Schema.Literal("INTERVIEWER"), Schema.Literal("ADMIN"))) })) })) })) }) });
export type GetAtsJobsPositiveResponse = typeof GetAtsJobsPositiveResponse.Type;

export const PostAtsJobsJobIdApplicationsParameterJobId = Schema.String;
export type PostAtsJobsJobIdApplicationsParameterJobId = typeof PostAtsJobsJobIdApplicationsParameterJobId.Type;

export const PostAtsJobsJobIdApplicationsPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), outcome: Schema.NullOr(Schema.Union(Schema.Literal("PENDING"), Schema.Literal("HIRED"), Schema.Literal("DECLINED"))), rejection_reason_name: Schema.NullOr(Schema.String), rejected_at: Schema.NullOr(Schema.String), current_stage_id: Schema.NullOr(Schema.String), job_id: Schema.NullOr(Schema.String), candidate_id: Schema.NullOr(Schema.String), screening_question_answers: NullOr_default_value_prop_12, custom_fields: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })), integration_fields: Schema.Array(Schema.Struct({ id: Schema.String, key: Schema.String, type: Schema.Union(Schema.Literal("DEFAULT"), Schema.Literal("CUSTOM")), value: Schema.optional(Schema.Null), label: Schema.NullOr(Schema.String) })), remote_url: Schema.NullOr(Schema.URL), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), remote_created_at: Schema.NullOr(Schema.String), remote_updated_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })), current_stage: Schema.NullOr(Schema.Struct({ id: Schema.String, name: Schema.NullOr(Schema.String), remote_id: Schema.NullOr(Schema.String), index: Schema.NullOr(Schema.Int) })), job: Schema.NullOr(Schema.Struct({ id: Schema.String, name: Schema.NullOr(Schema.String), remote_id: Schema.String })), candidate: Schema.NullOr(Schema.Struct({ id: Schema.String, remote_id: Schema.String, first_name: Schema.NullOr(Schema.String), last_name: Schema.NullOr(Schema.String), company: Schema.NullOr(Schema.String), title: Schema.NullOr(Schema.String), confidential: Schema.NullOr(Schema.Boolean), source: Schema.NullOr(Schema.String), phone_numbers: NullOr_default_value_prop_10, email_addresses: NullOr_default_value_prop, social_media: NullOr_default_value_prop_11, location: Schema.optional(Schema.NullOr(Schema.Struct({ city: Schema.optional(Schema.NullOr(Schema.String)), country: Schema.optional(Schema.NullOr(Schema.String)), raw: Schema.optional(Schema.NullOr(Schema.String)), state: Schema.optional(Schema.NullOr(Schema.String)), street_1: Schema.optional(Schema.NullOr(Schema.String)), street_2: Schema.optional(Schema.NullOr(Schema.String)), zip_code: Schema.optional(Schema.NullOr(Schema.String)) }))), custom_fields: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })), integration_fields: Schema.Array(Schema.Struct({ id: Schema.String, key: Schema.String, type: Schema.Union(Schema.Literal("DEFAULT"), Schema.Literal("CUSTOM")), value: Schema.optional(Schema.Null), label: Schema.NullOr(Schema.String) })), remote_url: Schema.NullOr(Schema.URL), remote_created_at: Schema.NullOr(Schema.String), remote_updated_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), tags: Schema.Array(Schema.Struct({ id: Schema.String, name: Schema.NullOr(Schema.String), remote_id: Schema.NullOr(Schema.String) })) })) }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PostAtsJobsJobIdApplicationsPositiveResponse = typeof PostAtsJobsJobIdApplicationsPositiveResponse.Type;

export const PostAtsJobsJobIdApplicationsRequestBody = Schema.Struct({ stage_id: Schema.optional(Schema.String), candidate: Schema.Struct({ first_name: Schema.String, last_name: Schema.String, email_address: Schema.String.pipe(Schema.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)), additional_email_addresses: Schema.optional(Schema.Array(Schema.Struct({ type: Schema.Union(Schema.Literal("PERSONAL"), Schema.Literal("WORK"), Schema.Literal("OTHER")), email_address: Schema.String.pipe(Schema.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) }))), company: Schema.optional(Schema.String), title: Schema.optional(Schema.String), phone_number: Schema.optional(Schema.String), additional_phone_numbers: Schema.optional(Schema.Array(Schema.Struct({ type: Schema.Union(Schema.Literal("PERSONAL"), Schema.Literal("WORK"), Schema.Literal("OTHER")), phone_number: Schema.String }))), location: Schema.optional(Schema.Struct({ city: Schema.optional(Schema.String), country: Schema.String.pipe(Schema.pattern(new RegExp("^[A-Z]{2}$"))), state: Schema.optional(Schema.String), street_1: Schema.optional(Schema.String), zip_code: Schema.optional(Schema.String) })), gender: Schema.optional(Schema.Union(Schema.Literal("MALE"), Schema.Literal("FEMALE"), Schema.Literal("OTHER"))), availability_date: Schema.optional(Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), salary_expectations: Schema.optional(Schema.Struct({ period: Schema.Union(Schema.Literal("MONTH"), Schema.Literal("YEAR")), amount: Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308)) })), social_links: Array_default_value_prop_13 }), attachments: Union_default_value_prop, source: Schema.optional(Schema.Struct({ name: Schema.optional(Schema.String), unified_key: Schema.optional(Schema.String), id: Schema.optional(Schema.String) })), sourced_by: Schema.optional(Schema.Struct({ user_id: Schema.String })), gdpr_consent: Schema.optional(Schema.Struct({ expires_at: Schema.optional(Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), given: Schema.optional(Schema.Boolean) })), remote_fields: Schema.optional(Schema.Struct({ successfactors: Schema.optional(Schema.Struct({ Candidate: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })), JobApplication: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })), copyJobApplicationAttachments: Schema.optional(Schema.Boolean), update_existing_candidate: Schema.optional(Schema.NullOr(Schema.Boolean)) })), personio: Schema.optional(Schema.Struct({ application: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })), talentsoft: Schema.optional(Schema.Struct({ applicant: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })), application: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })), teamtailor: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })), application: Schema.optional(Schema.Struct({ attributes: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })) })), greenhouse: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })), application: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })), post_headers: Schema.optional(Schema.Struct({ "On-Behalf-Of": Schema.optional(Schema.NullOr(Schema.String)) })) })), lever: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })), workable: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })), on_behalf_of_user_remote_id: Schema.optional(Schema.String) })), workday: Schema.optional(Schema.Struct({ Candidate_Data: Schema.optional(Schema.Struct({ Name_Detail_Data: Schema.optional(Schema.Struct({ Middle_Name: Schema.optional(Schema.String), Social_Suffix_Reference: Schema.optional(Schema.Struct({ Predefined_Name_Component_ID: Schema.String })) })), Language_Reference: Schema.optional(Schema.Struct({ WID: Schema.String })), Job_Application_Data: Schema.optional(Schema.Struct({ Job_Applied_To_Data: Schema.optional(Schema.Struct({ Global_Personal_Information_Data: Schema.optional(Schema.Struct({ Date_of_Birth: Schema.optional(Schema.String) })) })), Resume_Data: Schema.optional(Schema.Struct({ Education_Data: Schema.optional(Schema.Array(Schema.Struct({ School_Name: Schema.optional(Schema.String), First_Year_Attended: Schema.optional(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), Last_Year_Attended: Schema.optional(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), Field_of_Study_Reference: Schema.optional(Schema.Struct({ WID: Schema.String })), Degree_Reference: Schema.optional(Schema.Struct({ WID: Schema.String })), Grade_Average: Schema.optional(Schema.String) }))), Skill_Data: Schema.optional(Schema.Array(Schema.Struct({ Skill_Name: Schema.optional(Schema.String) }))), Language_Data: Schema.optional(Schema.Array(Schema.Struct({ Language_Reference: Schema.optional(Schema.Struct({ WID: Schema.optional(Schema.String) })), Language: Schema.optional(Schema.Struct({ Native: Schema.optional(Schema.Boolean), Language_Ability: Schema.Array(Schema.Struct({ Language_Ability_Data: Schema.optional(Schema.Struct({ Language_Proficiency_Reference: Schema.optional(Schema.Struct({ WID: Schema.String })), Language_Ability_Type_Reference: Schema.optional(Schema.Struct({ WID: Schema.String })) })) })) })) }))), Experience_Data: Schema.optional(Schema.Array(Schema.Struct({ Company_Name: Schema.String, Title: Schema.String, Location: Schema.optional(Schema.String), Start_Date: Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))), End_Date: Schema.optional(Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), Currently_Work_Here: Schema.optional(Schema.Boolean), Description: Schema.optional(Schema.String) }))) })) })), Contact_Data: Schema.optional(Schema.Struct({ Location_Data: Schema.optional(Schema.Struct({ Address_Line_1: Schema.optional(Schema.String), Address_Line_2: Schema.optional(Schema.String), Region_Subdivision_1: Schema.optional(Schema.String), Country_Region_Reference: Schema.optional(Schema.Struct({ Country_Region_ID: Schema.String })), Country_City_Reference: Schema.optional(Schema.Struct({ WID: Schema.String })) })) })), Worker_Reference: Schema.optional(Schema.Struct({ WID: Schema.optional(Schema.String), Employee_ID: Schema.optional(Schema.String) })) })), Override_Source_Reference_WID: Schema.optional(Schema.String) })), zohorecruit: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })), bullhorn: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })), job_submission: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })), smartrecruiters: Schema.optional(Schema.Struct({ candidate_with_questions: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })), candidate_without_questions: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })), candidate: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })), consent_decisions: Schema.optional(Schema.Struct({ SINGLE: Schema.optional(Schema.Boolean), SMART_RECRUIT: Schema.optional(Schema.Boolean), SMART_CRM: Schema.optional(Schema.Boolean), SMART_MESSAGE_SMS: Schema.optional(Schema.Boolean), SMART_MESSAGE_WHATSAPP: Schema.optional(Schema.Boolean) })) })), talentadore: Schema.optional(Schema.Struct({ applications: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })), guidecom: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })), dvinci: Schema.optional(Schema.Struct({ application: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })), candidate: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })), hrworks: Schema.optional(Schema.Struct({ jobApplication: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })), jobylon: Schema.optional(Schema.Struct({ application: Schema.optional(Schema.Struct({ message: Schema.optional(Schema.String) })) })), avature: Schema.optional(Schema.Struct({ workflow: Schema.optional(Schema.Struct({ step: Schema.optional(Schema.Struct({ id: Schema.Int })) })) })), recruitee: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Struct({ cover_letter_text: Schema.optional(Schema.String) })) })), rexx: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })), umantis: Schema.optional(Schema.Struct({ person: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })), piloga: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Struct({ street: Schema.optional(Schema.String) })) })), pinpoint: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })), covetorest: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Struct({ mandant: Schema.optional(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))) })) })) })), screening_question_answers: Schema.optional(Schema.Array(Schema.Struct({ question_id: Schema.String, answer: Schema.Union(Schema.String, Schema.Boolean, Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308)), Schema.Array(Schema.String), Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))), Schema.Struct({ name: Schema.String, content_type: Schema.optional(Schema.String.pipe(Schema.pattern(new RegExp("^[\\w.-]+\\/[\\w.-]+$")))), data_url: Schema.optional(Schema.URL), data: Schema.optional(Schema.String) })) }))) });
export type PostAtsJobsJobIdApplicationsRequestBody = typeof PostAtsJobsJobIdApplicationsRequestBody.Type;

export const GetAtsUsersParameterCursor = Schema.String;
export type GetAtsUsersParameterCursor = typeof GetAtsUsersParameterCursor.Type;

export const GetAtsUsersParameterPageSize = Schema_default_100_4;
export type GetAtsUsersParameterPageSize = typeof GetAtsUsersParameterPageSize.Type;

export const GetAtsUsersParameterUpdatedAfter = Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetAtsUsersParameterUpdatedAfter = typeof GetAtsUsersParameterUpdatedAfter.Type;

export const GetAtsUsersParameterIncludeDeleted = Union_default_false;
export type GetAtsUsersParameterIncludeDeleted = typeof GetAtsUsersParameterIncludeDeleted.Type;

export const GetAtsUsersParameterIgnoreUnsupportedFilters = Union_default_false;
export type GetAtsUsersParameterIgnoreUnsupportedFilters = typeof GetAtsUsersParameterIgnoreUnsupportedFilters.Type;

export const GetAtsUsersParameterIds = Schema.String;
export type GetAtsUsersParameterIds = typeof GetAtsUsersParameterIds.Type;

export const GetAtsUsersParameterRemoteIds = Schema.String;
export type GetAtsUsersParameterRemoteIds = typeof GetAtsUsersParameterRemoteIds.Type;

export const GetAtsUsersParameterEmails = Schema.String;
export type GetAtsUsersParameterEmails = typeof GetAtsUsersParameterEmails.Type;

export const GetAtsUsersPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), first_name: Schema.NullOr(Schema.String), last_name: Schema.NullOr(Schema.String), email: Schema.optional(Schema.NullOr(Schema.String.pipe(Schema.pattern(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$"))))), status: Schema.NullOr(Schema.Union(Schema.Literal("ACTIVE"), Schema.Literal("INACTIVE"))), remote_data: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), system_roles: Schema.Array(Schema.Struct({ remote_id: Schema.NullOr(Schema.String), remote_label: Schema.NullOr(Schema.String), scope: Schema.NullOr(Schema.Union(Schema.Literal("SYSTEM"), Schema.Literal("JOB"))), unified_type: Schema.NullOr(Schema.Union(Schema.Literal("HIRING_MANAGER"), Schema.Literal("RECRUITER"), Schema.Literal("COORDINATOR"), Schema.Literal("SOURCER"), Schema.Literal("INTERVIEWER"), Schema.Literal("ADMIN"))) })) })) }) });
export type GetAtsUsersPositiveResponse = typeof GetAtsUsersPositiveResponse.Type;

export const GetAtsRolesParameterCursor = Schema.String;
export type GetAtsRolesParameterCursor = typeof GetAtsRolesParameterCursor.Type;

export const GetAtsRolesParameterPageSize = Schema_default_100_4;
export type GetAtsRolesParameterPageSize = typeof GetAtsRolesParameterPageSize.Type;

export const GetAtsRolesParameterUpdatedAfter = Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetAtsRolesParameterUpdatedAfter = typeof GetAtsRolesParameterUpdatedAfter.Type;

export const GetAtsRolesParameterIncludeDeleted = Union_default_false;
export type GetAtsRolesParameterIncludeDeleted = typeof GetAtsRolesParameterIncludeDeleted.Type;

export const GetAtsRolesParameterIgnoreUnsupportedFilters = Union_default_false;
export type GetAtsRolesParameterIgnoreUnsupportedFilters = typeof GetAtsRolesParameterIgnoreUnsupportedFilters.Type;

export const GetAtsRolesParameterIds = Schema.String;
export type GetAtsRolesParameterIds = typeof GetAtsRolesParameterIds.Type;

export const GetAtsRolesParameterRemoteIds = Schema.String;
export type GetAtsRolesParameterRemoteIds = typeof GetAtsRolesParameterRemoteIds.Type;

export const GetAtsRolesParameterScopes = Schema.String;
export type GetAtsRolesParameterScopes = typeof GetAtsRolesParameterScopes.Type;

export const GetAtsRolesPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), remote_label: Schema.NullOr(Schema.String), scope: Schema.NullOr(Schema.Union(Schema.Literal("SYSTEM"), Schema.Literal("JOB"))), unified_type: Schema.NullOr(Schema.Union(Schema.Literal("HIRING_MANAGER"), Schema.Literal("RECRUITER"), Schema.Literal("COORDINATOR"), Schema.Literal("SOURCER"), Schema.Literal("INTERVIEWER"), Schema.Literal("ADMIN"))), remote_data: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String) })) }) });
export type GetAtsRolesPositiveResponse = typeof GetAtsRolesPositiveResponse.Type;

export const GetAtsOffersParameterCursor = Schema.String;
export type GetAtsOffersParameterCursor = typeof GetAtsOffersParameterCursor.Type;

export const GetAtsOffersParameterPageSize = Schema_default_100_4;
export type GetAtsOffersParameterPageSize = typeof GetAtsOffersParameterPageSize.Type;

export const GetAtsOffersParameterUpdatedAfter = Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetAtsOffersParameterUpdatedAfter = typeof GetAtsOffersParameterUpdatedAfter.Type;

export const GetAtsOffersParameterIncludeDeleted = Union_default_false;
export type GetAtsOffersParameterIncludeDeleted = typeof GetAtsOffersParameterIncludeDeleted.Type;

export const GetAtsOffersParameterIgnoreUnsupportedFilters = Union_default_false;
export type GetAtsOffersParameterIgnoreUnsupportedFilters = typeof GetAtsOffersParameterIgnoreUnsupportedFilters.Type;

export const GetAtsOffersParameterIds = Schema.String;
export type GetAtsOffersParameterIds = typeof GetAtsOffersParameterIds.Type;

export const GetAtsOffersParameterRemoteIds = Schema.String;
export type GetAtsOffersParameterRemoteIds = typeof GetAtsOffersParameterRemoteIds.Type;

export const GetAtsOffersPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), status: Schema.NullOr(Schema.Union(Schema.Literal("ACCEPTED"), Schema.Literal("DECLINED"), Schema.Literal("SENT"), Schema.Literal("APPROVED"), Schema.Literal("DRAFT"), Schema.Literal("ABANDONED"))), employment_start_date: Schema.NullOr(Schema.String), application_id: Schema.NullOr(Schema.String), custom_fields: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })), integration_fields: Schema.Array(Schema.Struct({ id: Schema.String, key: Schema.String, type: Schema.Union(Schema.Literal("DEFAULT"), Schema.Literal("CUSTOM")), value: Schema.optional(Schema.Null), label: Schema.NullOr(Schema.String) })), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), remote_created_at: Schema.NullOr(Schema.String), remote_updated_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })), application: Schema.NullOr(Schema.Struct({ candidate: Schema.NullOr(Schema.Struct({ id: Schema.String, remote_id: Schema.String, first_name: Schema.NullOr(Schema.String), last_name: Schema.NullOr(Schema.String), email_addresses: NullOr_default_value_prop })), job: Schema.NullOr(Schema.Struct({ id: Schema.String, remote_id: Schema.String, name: Schema.NullOr(Schema.String) })) })) })) }) });
export type GetAtsOffersPositiveResponse = typeof GetAtsOffersPositiveResponse.Type;

export const GetAtsRejectionReasonsParameterCursor = Schema.String;
export type GetAtsRejectionReasonsParameterCursor = typeof GetAtsRejectionReasonsParameterCursor.Type;

export const GetAtsRejectionReasonsParameterPageSize = Schema_default_100_4;
export type GetAtsRejectionReasonsParameterPageSize = typeof GetAtsRejectionReasonsParameterPageSize.Type;

export const GetAtsRejectionReasonsParameterUpdatedAfter = Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetAtsRejectionReasonsParameterUpdatedAfter = typeof GetAtsRejectionReasonsParameterUpdatedAfter.Type;

export const GetAtsRejectionReasonsParameterIncludeDeleted = Union_default_false;
export type GetAtsRejectionReasonsParameterIncludeDeleted = typeof GetAtsRejectionReasonsParameterIncludeDeleted.Type;

export const GetAtsRejectionReasonsParameterIgnoreUnsupportedFilters = Union_default_false;
export type GetAtsRejectionReasonsParameterIgnoreUnsupportedFilters = typeof GetAtsRejectionReasonsParameterIgnoreUnsupportedFilters.Type;

export const GetAtsRejectionReasonsParameterIds = Schema.String;
export type GetAtsRejectionReasonsParameterIds = typeof GetAtsRejectionReasonsParameterIds.Type;

export const GetAtsRejectionReasonsParameterRemoteIds = Schema.String;
export type GetAtsRejectionReasonsParameterRemoteIds = typeof GetAtsRejectionReasonsParameterRemoteIds.Type;

export const GetAtsRejectionReasonsPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.String, name: Schema.NullOr(Schema.String), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })) }) });
export type GetAtsRejectionReasonsPositiveResponse = typeof GetAtsRejectionReasonsPositiveResponse.Type;

export const GetAtsInterviewsParameterCursor = Schema.String;
export type GetAtsInterviewsParameterCursor = typeof GetAtsInterviewsParameterCursor.Type;

export const GetAtsInterviewsParameterPageSize = Schema_default_100_4;
export type GetAtsInterviewsParameterPageSize = typeof GetAtsInterviewsParameterPageSize.Type;

export const GetAtsInterviewsParameterUpdatedAfter = Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetAtsInterviewsParameterUpdatedAfter = typeof GetAtsInterviewsParameterUpdatedAfter.Type;

export const GetAtsInterviewsParameterIncludeDeleted = Union_default_false;
export type GetAtsInterviewsParameterIncludeDeleted = typeof GetAtsInterviewsParameterIncludeDeleted.Type;

export const GetAtsInterviewsParameterIgnoreUnsupportedFilters = Union_default_false;
export type GetAtsInterviewsParameterIgnoreUnsupportedFilters = typeof GetAtsInterviewsParameterIgnoreUnsupportedFilters.Type;

export const GetAtsInterviewsParameterIds = Schema.String;
export type GetAtsInterviewsParameterIds = typeof GetAtsInterviewsParameterIds.Type;

export const GetAtsInterviewsParameterRemoteIds = Schema.String;
export type GetAtsInterviewsParameterRemoteIds = typeof GetAtsInterviewsParameterRemoteIds.Type;

export const GetAtsInterviewsParameterJobIds = Schema.String;
export type GetAtsInterviewsParameterJobIds = typeof GetAtsInterviewsParameterJobIds.Type;

export const GetAtsInterviewsPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), title: Schema.NullOr(Schema.String), starting_at: Schema.NullOr(Schema.String), ending_at: Schema.NullOr(Schema.String), location: Schema.optional(Schema.NullOr(Schema.Struct({ city: Schema.optional(Schema.NullOr(Schema.String)), country: Schema.optional(Schema.NullOr(Schema.String)), raw: Schema.optional(Schema.NullOr(Schema.String)), state: Schema.optional(Schema.NullOr(Schema.String)), street_1: Schema.optional(Schema.NullOr(Schema.String)), street_2: Schema.optional(Schema.NullOr(Schema.String)), zip_code: Schema.optional(Schema.NullOr(Schema.String)) }))), video_conferencing_url: Schema.NullOr(Schema.String), application_id: Schema.NullOr(Schema.String), stage_id: Schema.NullOr(Schema.String), canceled: Schema.NullOr(Schema.Boolean), remote_created_at: Schema.NullOr(Schema.String), remote_updated_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), users: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), first_name: Schema.NullOr(Schema.String), last_name: Schema.NullOr(Schema.String), email: Schema.optional(Schema.NullOr(Schema.String.pipe(Schema.pattern(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$"))))) })), application: Schema.NullOr(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), outcome: Schema.NullOr(Schema.Union(Schema.Literal("PENDING"), Schema.Literal("HIRED"), Schema.Literal("DECLINED"))), rejection_reason_name: Schema.NullOr(Schema.String), candidate: Schema.NullOr(Schema.Struct({ id: Schema.String, remote_id: Schema.String, first_name: Schema.NullOr(Schema.String), last_name: Schema.NullOr(Schema.String), email_addresses: NullOr_default_value_prop })), job: Schema.NullOr(Schema.Struct({ id: Schema.String, remote_id: Schema.String, name: Schema.NullOr(Schema.String) })) })) })) }) });
export type GetAtsInterviewsPositiveResponse = typeof GetAtsInterviewsPositiveResponse.Type;

export const GetAtsActionsAtsCreateCandidatePositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ attachment_restrictions: Schema.optional(Schema.NullOr(Schema.Struct({ total_size_bytes: Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), types: Schema.Struct({ CV: Schema.Union(Schema.Struct({ is_supported: Schema.Boolean, min_amount: Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), max_amount: Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), max_file_size_bytes: Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), accepted_mime_types: Schema.NullOr(Schema.Array(Schema.String)) }), Schema.Struct({ is_supported: Schema.Boolean })), COVER_LETTER: Schema.Union(Schema.Struct({ is_supported: Schema.Boolean, min_amount: Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), max_amount: Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), max_file_size_bytes: Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), accepted_mime_types: Schema.NullOr(Schema.Array(Schema.String)) }), Schema.Struct({ is_supported: Schema.Boolean })), OTHER: Schema.Union(Schema.Struct({ is_supported: Schema.Boolean, min_amount: Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), max_amount: Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), max_file_size_bytes: Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), accepted_mime_types: Schema.NullOr(Schema.Array(Schema.String)) }), Schema.Struct({ is_supported: Schema.Boolean })) }) }))) }) });
export type GetAtsActionsAtsCreateCandidatePositiveResponse = typeof GetAtsActionsAtsCreateCandidatePositiveResponse.Type;

export const GetAtsActionsAtsCreateApplicationPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ attachment_restrictions: Schema.optional(Schema.NullOr(Schema.Struct({ total_size_bytes: Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), types: Schema.Struct({ CV: Schema.Union(Schema.Struct({ is_supported: Schema.Boolean, min_amount: Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), max_amount: Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), max_file_size_bytes: Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), accepted_mime_types: Schema.NullOr(Schema.Array(Schema.String)) }), Schema.Struct({ is_supported: Schema.Boolean })), COVER_LETTER: Schema.Union(Schema.Struct({ is_supported: Schema.Boolean, min_amount: Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), max_amount: Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), max_file_size_bytes: Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), accepted_mime_types: Schema.NullOr(Schema.Array(Schema.String)) }), Schema.Struct({ is_supported: Schema.Boolean })), OTHER: Schema.Union(Schema.Struct({ is_supported: Schema.Boolean, min_amount: Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), max_amount: Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), max_file_size_bytes: Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), accepted_mime_types: Schema.NullOr(Schema.Array(Schema.String)) }), Schema.Struct({ is_supported: Schema.Boolean })) }) }))) }) });
export type GetAtsActionsAtsCreateApplicationPositiveResponse = typeof GetAtsActionsAtsCreateApplicationPositiveResponse.Type;

export const GetAtsActionsAtsAddApplicationAttachmentPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ attachment_restrictions: Schema.optional(Schema.NullOr(Schema.Struct({ types: Schema.Struct({ CV: Schema.Union(Schema.Struct({ is_supported: Schema.Boolean, max_file_size_bytes: Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), accepted_mime_types: Schema.NullOr(Schema.Array(Schema.String)) }), Schema.Struct({ is_supported: Schema.Boolean })), COVER_LETTER: Schema.Union(Schema.Struct({ is_supported: Schema.Boolean, max_file_size_bytes: Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), accepted_mime_types: Schema.NullOr(Schema.Array(Schema.String)) }), Schema.Struct({ is_supported: Schema.Boolean })), OTHER: Schema.Union(Schema.Struct({ is_supported: Schema.Boolean, max_file_size_bytes: Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), accepted_mime_types: Schema.NullOr(Schema.Array(Schema.String)) }), Schema.Struct({ is_supported: Schema.Boolean })) }) }))) }) });
export type GetAtsActionsAtsAddApplicationAttachmentPositiveResponse = typeof GetAtsActionsAtsAddApplicationAttachmentPositiveResponse.Type;

export const GetAtsActionsAtsAddCandidateAttachmentPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ attachment_restrictions: Schema.optional(Schema.NullOr(Schema.Struct({ types: Schema.Struct({ CV: Schema.Union(Schema.Struct({ is_supported: Schema.Boolean, max_file_size_bytes: Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), accepted_mime_types: Schema.NullOr(Schema.Array(Schema.String)) }), Schema.Struct({ is_supported: Schema.Boolean })), COVER_LETTER: Schema.Union(Schema.Struct({ is_supported: Schema.Boolean, max_file_size_bytes: Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), accepted_mime_types: Schema.NullOr(Schema.Array(Schema.String)) }), Schema.Struct({ is_supported: Schema.Boolean })), OTHER: Schema.Union(Schema.Struct({ is_supported: Schema.Boolean, max_file_size_bytes: Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), accepted_mime_types: Schema.NullOr(Schema.Array(Schema.String)) }), Schema.Struct({ is_supported: Schema.Boolean })) }) }))) }) });
export type GetAtsActionsAtsAddCandidateAttachmentPositiveResponse = typeof GetAtsActionsAtsAddCandidateAttachmentPositiveResponse.Type;

export const PostAtsImportTrackedApplicationPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ id: Schema.String.pipe(Schema.minLength(24), Schema.maxLength(24), Schema.pattern(new RegExp("^[1-9A-HJ-NP-Za-km-z]+$"))), tracked_at: Schema.NullOr(Schema.String), imported_id: Schema.Struct({ erecruiter: Schema.optional(Schema.Union(Schema.Struct({ id_type: Schema.String, application_remote_id: Schema.String, job_remote_id: Schema.String }), Schema.Struct({ id_type: Schema.String, candidate_remote_id: Schema.String, application_remote_id: Schema.String }))), successfactors: Schema.optional(Schema.Struct({ id_type: Schema.String, application_remote_id: Schema.String })), recruitee: Schema.optional(Schema.Struct({ id_type: Schema.String, placement_id: Schema.String })), greenhouse: Schema.optional(Schema.Struct({ id_type: Schema.String, application_id: Schema.String })), onlyfy: Schema.optional(Schema.Struct({ id_type: Schema.String, application_id: Schema.String })), smartrecruiters: Schema.optional(Schema.Struct({ id_type: Schema.String, candidate_remote_id: Schema.String, job_remote_id: Schema.String })) }) }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PostAtsImportTrackedApplicationPositiveResponse = typeof PostAtsImportTrackedApplicationPositiveResponse.Type;

export const PostAtsImportTrackedApplicationRequestBody = Schema.Struct({ erecruiter: Schema.optional(Schema.Union(Schema.Struct({ id_type: Schema.String, application_remote_id: Schema.String, job_remote_id: Schema.String }), Schema.Struct({ id_type: Schema.String, candidate_remote_id: Schema.String, application_remote_id: Schema.String }))), successfactors: Schema.optional(Schema.Struct({ id_type: Schema.String, application_remote_id: Schema.String })), recruitee: Schema.optional(Schema.Struct({ id_type: Schema.String, placement_id: Schema.String })), greenhouse: Schema.optional(Schema.Struct({ id_type: Schema.String, application_id: Schema.String })), onlyfy: Schema.optional(Schema.Struct({ id_type: Schema.String, application_id: Schema.String })), smartrecruiters: Schema.optional(Schema.Struct({ id_type: Schema.String, candidate_remote_id: Schema.String, job_remote_id: Schema.String })), tracked_at: Schema.NullOr(Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))) });
export type PostAtsImportTrackedApplicationRequestBody = typeof PostAtsImportTrackedApplicationRequestBody.Type;

export const PostAtsCustomAvionteSyncedJobsPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Record({ key: Schema.String, value: Schema.Unknown }) });
export type PostAtsCustomAvionteSyncedJobsPositiveResponse = typeof PostAtsCustomAvionteSyncedJobsPositiveResponse.Type;

export const PostAtsCustomAvionteSyncedJobsRequestBody = Schema.Struct({ job_remote_id: Schema.String.pipe(Schema.pattern(new RegExp("^\\d+$"))) });
export type PostAtsCustomAvionteSyncedJobsRequestBody = typeof PostAtsCustomAvionteSyncedJobsRequestBody.Type;

export const DeleteAtsCustomAvionteSyncedJobsJobRemoteIdParameterJobRemoteId = Schema.String;
export type DeleteAtsCustomAvionteSyncedJobsJobRemoteIdParameterJobRemoteId = typeof DeleteAtsCustomAvionteSyncedJobsJobRemoteIdParameterJobRemoteId.Type;

export const DeleteAtsCustomAvionteSyncedJobsJobRemoteIdPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Record({ key: Schema.String, value: Schema.Unknown }) });
export type DeleteAtsCustomAvionteSyncedJobsJobRemoteIdPositiveResponse = typeof DeleteAtsCustomAvionteSyncedJobsJobRemoteIdPositiveResponse.Type;

export const DeleteAtsCustomAvionteSyncedJobsJobRemoteIdRequestBody = Schema.Struct({  });
export type DeleteAtsCustomAvionteSyncedJobsJobRemoteIdRequestBody = typeof DeleteAtsCustomAvionteSyncedJobsJobRemoteIdRequestBody.Type;

export const GetAssessmentPackagesPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ packages: Schema.Array(Schema.Struct({ id: Schema.String, name: Schema.String, description: Schema.String, updated_at: Schema.NullOr(Schema.String), type: Schema.NullOr(Schema.Union(Schema.Literal("BEHAVIORAL"), Schema.Literal("VIDEO_INTERVIEW"), Schema.Literal("SKILLS_TEST"), Schema.Literal("BACKGROUND_CHECK"), Schema.Literal("REFERENCE_CHECK"))) })) }) });
export type GetAssessmentPackagesPositiveResponse = typeof GetAssessmentPackagesPositiveResponse.Type;

export const PutAssessmentPackagesPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Record({ key: Schema.String, value: Schema.Unknown }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PutAssessmentPackagesPositiveResponse = typeof PutAssessmentPackagesPositiveResponse.Type;

export const PutAssessmentPackagesRequestBody = Schema.Struct({ packages: Schema.Array(Schema.Struct({ id: Schema.String, type: Schema.Union(Schema.Literal("BEHAVIORAL"), Schema.Literal("VIDEO_INTERVIEW"), Schema.Literal("SKILLS_TEST"), Schema.Literal("BACKGROUND_CHECK"), Schema.Literal("REFERENCE_CHECK")), name: Schema.String, description: Schema.String })) });
export type PutAssessmentPackagesRequestBody = typeof PutAssessmentPackagesRequestBody.Type;

export const GetAssessmentOrdersParameterCursor = Schema.String;
export type GetAssessmentOrdersParameterCursor = typeof GetAssessmentOrdersParameterCursor.Type;

export const GetAssessmentOrdersParameterPageSize = Schema_default_100_4;
export type GetAssessmentOrdersParameterPageSize = typeof GetAssessmentOrdersParameterPageSize.Type;

export const GetAssessmentOrdersParameterIds = Schema.String;
export type GetAssessmentOrdersParameterIds = typeof GetAssessmentOrdersParameterIds.Type;

export const GetAssessmentOrdersParameterStatuses = Schema.String;
export type GetAssessmentOrdersParameterStatuses = typeof GetAssessmentOrdersParameterStatuses.Type;

export const GetAssessmentOrdersParameterCreatedAfter = Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetAssessmentOrdersParameterCreatedAfter = typeof GetAssessmentOrdersParameterCreatedAfter.Type;

export const GetAssessmentOrdersPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, package_id: Schema.String, status: Schema.Union(Schema.Literal("OPEN"), Schema.Literal("COMPLETED"), Schema.Literal("CANCELLED"), Schema.Literal("REJECTED")), candidate: Schema.Struct({ remote_id: Schema.NullOr(Schema.String), email: Schema.String.pipe(Schema.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)), first_name: Schema.NullOr(Schema.String), last_name: Schema.NullOr(Schema.String), phone: Schema.NullOr(Schema.String) }), application: Schema.Struct({ remote_id: Schema.NullOr(Schema.String) }), job: Schema.Struct({ remote_id: Schema.NullOr(Schema.String), name: Schema.NullOr(Schema.String), job_code: Schema.NullOr(Schema.String), description: Schema.NullOr(Schema.String), location: Schema.NullOr(Schema.Struct({ street_1: Schema.optional(Schema.NullOr(Schema.String)), street_2: Schema.optional(Schema.NullOr(Schema.String)), city: Schema.optional(Schema.NullOr(Schema.String)), state: Schema.optional(Schema.NullOr(Schema.String)), zip_code: Schema.optional(Schema.NullOr(Schema.String)), country: Schema.optional(Schema.NullOr(Schema.String)), raw: Schema.optional(Schema.NullOr(Schema.String)) })), hiring_team: Schema.Array(Schema.Struct({ remote_id: Schema.NullOr(Schema.String), email: Schema.NullOr(Schema.String), first_name: Schema.NullOr(Schema.String), last_name: Schema.NullOr(Schema.String), hiring_team_roles: Schema.Array(Schema.Union(Schema.Literal("RECRUITER"), Schema.Literal("HIRING_MANAGER"))) })) }) })) }) });
export type GetAssessmentOrdersPositiveResponse = typeof GetAssessmentOrdersPositiveResponse.Type;

export const GetAssessmentOrdersOpenParameterCursor = Schema.String;
export type GetAssessmentOrdersOpenParameterCursor = typeof GetAssessmentOrdersOpenParameterCursor.Type;

export const GetAssessmentOrdersOpenParameterPageSize = Schema_default_100_4;
export type GetAssessmentOrdersOpenParameterPageSize = typeof GetAssessmentOrdersOpenParameterPageSize.Type;

export const GetAssessmentOrdersOpenPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, package_id: Schema.String, candidate: Schema.Struct({ remote_id: Schema.NullOr(Schema.String), email: Schema.String.pipe(Schema.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)), first_name: Schema.NullOr(Schema.String), last_name: Schema.NullOr(Schema.String), phone: Schema.NullOr(Schema.String) }), application: Schema.Struct({ remote_id: Schema.NullOr(Schema.String) }), job: Schema.Struct({ remote_id: Schema.NullOr(Schema.String), name: Schema.NullOr(Schema.String), job_code: Schema.NullOr(Schema.String), description: Schema.NullOr(Schema.String), location: Schema.NullOr(Schema.Struct({ street_1: Schema.optional(Schema.NullOr(Schema.String)), street_2: Schema.optional(Schema.NullOr(Schema.String)), city: Schema.optional(Schema.NullOr(Schema.String)), state: Schema.optional(Schema.NullOr(Schema.String)), zip_code: Schema.optional(Schema.NullOr(Schema.String)), country: Schema.optional(Schema.NullOr(Schema.String)), raw: Schema.optional(Schema.NullOr(Schema.String)) })), hiring_team: Schema.Array(Schema.Struct({ remote_id: Schema.NullOr(Schema.String), email: Schema.NullOr(Schema.String), first_name: Schema.NullOr(Schema.String), last_name: Schema.NullOr(Schema.String), hiring_team_roles: Schema.Array(Schema.Union(Schema.Literal("RECRUITER"), Schema.Literal("HIRING_MANAGER"))) })) }) })) }) });
export type GetAssessmentOrdersOpenPositiveResponse = typeof GetAssessmentOrdersOpenPositiveResponse.Type;

export const PutAssessmentOrdersAssessmentOrderIdResultParameterAssessmentOrderId = Schema.String;
export type PutAssessmentOrdersAssessmentOrderIdResultParameterAssessmentOrderId = typeof PutAssessmentOrdersAssessmentOrderIdResultParameterAssessmentOrderId.Type;

export const PutAssessmentOrdersAssessmentOrderIdResultPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Record({ key: Schema.String, value: Schema.Unknown }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PutAssessmentOrdersAssessmentOrderIdResultPositiveResponse = typeof PutAssessmentOrdersAssessmentOrderIdResultPositiveResponse.Type;

export const PutAssessmentOrdersAssessmentOrderIdResultRequestBody = Schema.Struct({ status: Schema.Union(Schema.Literal("COMPLETED"), Schema.Literal("CANCELLED"), Schema.Literal("OPEN")), result_url: Schema.URL, completed_at: Schema.optional(Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), score: Schema.optional(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), max_score: Schema.optional(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), attributes: Union_default_value_prop_17, attachments: Array_default_value_prop_18, remote_fields: Schema.optional(Schema.Struct({ smartrecruiters: Schema.optional(Schema.Struct({ scoreLabel: Schema.optional(Schema.String) })), recruitee: Schema.optional(Schema.Struct({ subtitle: Schema.optional(Schema.String) })) })) });
export type PutAssessmentOrdersAssessmentOrderIdResultRequestBody = typeof PutAssessmentOrdersAssessmentOrderIdResultRequestBody.Type;

export const GetLmsUsersParameterCursor = Schema.String;
export type GetLmsUsersParameterCursor = typeof GetLmsUsersParameterCursor.Type;

export const GetLmsUsersParameterPageSize = Schema_default_100_4;
export type GetLmsUsersParameterPageSize = typeof GetLmsUsersParameterPageSize.Type;

export const GetLmsUsersParameterUpdatedAfter = Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetLmsUsersParameterUpdatedAfter = typeof GetLmsUsersParameterUpdatedAfter.Type;

export const GetLmsUsersParameterIncludeDeleted = Union_default_false;
export type GetLmsUsersParameterIncludeDeleted = typeof GetLmsUsersParameterIncludeDeleted.Type;

export const GetLmsUsersParameterIgnoreUnsupportedFilters = Union_default_false;
export type GetLmsUsersParameterIgnoreUnsupportedFilters = typeof GetLmsUsersParameterIgnoreUnsupportedFilters.Type;

export const GetLmsUsersParameterIds = Schema.String;
export type GetLmsUsersParameterIds = typeof GetLmsUsersParameterIds.Type;

export const GetLmsUsersParameterRemoteIds = Schema.String;
export type GetLmsUsersParameterRemoteIds = typeof GetLmsUsersParameterRemoteIds.Type;

export const GetLmsUsersParameterWorkEmails = Schema.String;
export type GetLmsUsersParameterWorkEmails = typeof GetLmsUsersParameterWorkEmails.Type;

export const GetLmsUsersPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.String, first_name: Schema.NullOr(Schema.String), last_name: Schema.NullOr(Schema.String), work_email: Schema.NullOr(Schema.String), status: Schema.NullOr(Schema.Union(Schema.Literal("ACTIVE"), Schema.Literal("INACTIVE"))), remote_created_at: Schema.NullOr(Schema.String), remote_deleted_at: Schema.NullOr(Schema.String), changed_at: Schema.String, remote_data: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })), custom_fields: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })), integration_fields: Schema.Array(Schema.Struct({ id: Schema.String, key: Schema.String, type: Schema.Union(Schema.Literal("DEFAULT"), Schema.Literal("CUSTOM")), value: Schema.optional(Schema.Null), label: Schema.NullOr(Schema.String) })) })) }) });
export type GetLmsUsersPositiveResponse = typeof GetLmsUsersPositiveResponse.Type;

export const GetLmsCourseProgressionsParameterCursor = Schema.String;
export type GetLmsCourseProgressionsParameterCursor = typeof GetLmsCourseProgressionsParameterCursor.Type;

export const GetLmsCourseProgressionsParameterPageSize = Schema_default_100_4;
export type GetLmsCourseProgressionsParameterPageSize = typeof GetLmsCourseProgressionsParameterPageSize.Type;

export const GetLmsCourseProgressionsParameterUpdatedAfter = Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetLmsCourseProgressionsParameterUpdatedAfter = typeof GetLmsCourseProgressionsParameterUpdatedAfter.Type;

export const GetLmsCourseProgressionsParameterIncludeDeleted = Union_default_false;
export type GetLmsCourseProgressionsParameterIncludeDeleted = typeof GetLmsCourseProgressionsParameterIncludeDeleted.Type;

export const GetLmsCourseProgressionsParameterIgnoreUnsupportedFilters = Union_default_false;
export type GetLmsCourseProgressionsParameterIgnoreUnsupportedFilters = typeof GetLmsCourseProgressionsParameterIgnoreUnsupportedFilters.Type;

export const GetLmsCourseProgressionsParameterIds = Schema.String;
export type GetLmsCourseProgressionsParameterIds = typeof GetLmsCourseProgressionsParameterIds.Type;

export const GetLmsCourseProgressionsParameterRemoteIds = Schema.String;
export type GetLmsCourseProgressionsParameterRemoteIds = typeof GetLmsCourseProgressionsParameterRemoteIds.Type;

export const GetLmsCourseProgressionsParameterUserIds = Schema.String;
export type GetLmsCourseProgressionsParameterUserIds = typeof GetLmsCourseProgressionsParameterUserIds.Type;

export const GetLmsCourseProgressionsParameterCourseIds = Schema.String;
export type GetLmsCourseProgressionsParameterCourseIds = typeof GetLmsCourseProgressionsParameterCourseIds.Type;

export const GetLmsCourseProgressionsPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.String, user_id: Schema.String, course_revision_id: Schema.String, status: Schema.NullOr(Schema.Union(Schema.Literal("ENROLLED"), Schema.Literal("IN_PROGRESS"), Schema.Literal("COMPLETED"), Schema.Literal("DROPPED"))), enrolled_at: Schema.NullOr(Schema.String), completed_at: Schema.NullOr(Schema.String), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })), user: Schema.Struct({ id: Schema.String, remote_id: Schema.String, first_name: Schema.NullOr(Schema.String), last_name: Schema.NullOr(Schema.String), work_email: Schema.NullOr(Schema.String) }), course_revision: Schema.Struct({ id: Schema.String, remote_id: Schema.String, title: Schema.NullOr(Schema.String), course: Schema.NullOr(Schema.Struct({ id: Schema.String, remote_id: Schema.String })) }) })) }) });
export type GetLmsCourseProgressionsPositiveResponse = typeof GetLmsCourseProgressionsPositiveResponse.Type;

export const PostLmsCourseProgressionsPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ id: Schema.String, remote_id: Schema.String, user_id: Schema.String, course_revision_id: Schema.String, status: Schema.NullOr(Schema.Union(Schema.Literal("ENROLLED"), Schema.Literal("IN_PROGRESS"), Schema.Literal("COMPLETED"), Schema.Literal("DROPPED"))), enrolled_at: Schema.NullOr(Schema.String), completed_at: Schema.NullOr(Schema.String), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })), user: Schema.Struct({ id: Schema.String, remote_id: Schema.String, first_name: Schema.NullOr(Schema.String), last_name: Schema.NullOr(Schema.String), work_email: Schema.NullOr(Schema.String) }), course_revision: Schema.Struct({ id: Schema.String, remote_id: Schema.String, title: Schema.NullOr(Schema.String), course: Schema.NullOr(Schema.Struct({ id: Schema.String, remote_id: Schema.String })) }) }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PostLmsCourseProgressionsPositiveResponse = typeof PostLmsCourseProgressionsPositiveResponse.Type;

export const PostLmsCourseProgressionsRequestBody = Schema.Struct({ user_id: Schema.String, course_revision_id: Schema.String });
export type PostLmsCourseProgressionsRequestBody = typeof PostLmsCourseProgressionsRequestBody.Type;

export const PostLmsCourseProgressionsCourseProgressionIdCompleteParameterCourseProgressionId = Schema.String;
export type PostLmsCourseProgressionsCourseProgressionIdCompleteParameterCourseProgressionId = typeof PostLmsCourseProgressionsCourseProgressionIdCompleteParameterCourseProgressionId.Type;

export const PostLmsCourseProgressionsCourseProgressionIdCompletePositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ id: Schema.String, remote_id: Schema.String, user_id: Schema.String, course_revision_id: Schema.String, status: Schema.NullOr(Schema.Union(Schema.Literal("ENROLLED"), Schema.Literal("IN_PROGRESS"), Schema.Literal("COMPLETED"), Schema.Literal("DROPPED"))), enrolled_at: Schema.NullOr(Schema.String), completed_at: Schema.NullOr(Schema.String), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })), user: Schema.Struct({ id: Schema.String, remote_id: Schema.String, first_name: Schema.NullOr(Schema.String), last_name: Schema.NullOr(Schema.String), work_email: Schema.NullOr(Schema.String) }), course_revision: Schema.Struct({ id: Schema.String, remote_id: Schema.String, title: Schema.NullOr(Schema.String), course: Schema.NullOr(Schema.Struct({ id: Schema.String, remote_id: Schema.String })) }) }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PostLmsCourseProgressionsCourseProgressionIdCompletePositiveResponse = typeof PostLmsCourseProgressionsCourseProgressionIdCompletePositiveResponse.Type;

export const PostLmsCourseProgressionsCourseProgressionIdCompleteRequestBody = Schema.Struct({ completed_at: Schema.optional(Schema.NullOr(Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))))), score: Schema.optional(Schema.NullOr(Schema.Int.pipe(Schema.greaterThanOrEqualTo(0), Schema.lessThanOrEqualTo(100)))) });
export type PostLmsCourseProgressionsCourseProgressionIdCompleteRequestBody = typeof PostLmsCourseProgressionsCourseProgressionIdCompleteRequestBody.Type;

export const GetLmsCoursesParameterCursor = Schema.String;
export type GetLmsCoursesParameterCursor = typeof GetLmsCoursesParameterCursor.Type;

export const GetLmsCoursesParameterPageSize = Schema_default_100_4;
export type GetLmsCoursesParameterPageSize = typeof GetLmsCoursesParameterPageSize.Type;

export const GetLmsCoursesParameterUpdatedAfter = Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetLmsCoursesParameterUpdatedAfter = typeof GetLmsCoursesParameterUpdatedAfter.Type;

export const GetLmsCoursesParameterIncludeDeleted = Union_default_false;
export type GetLmsCoursesParameterIncludeDeleted = typeof GetLmsCoursesParameterIncludeDeleted.Type;

export const GetLmsCoursesParameterIgnoreUnsupportedFilters = Union_default_false;
export type GetLmsCoursesParameterIgnoreUnsupportedFilters = typeof GetLmsCoursesParameterIgnoreUnsupportedFilters.Type;

export const GetLmsCoursesParameterIds = Schema.String;
export type GetLmsCoursesParameterIds = typeof GetLmsCoursesParameterIds.Type;

export const GetLmsCoursesParameterRemoteIds = Schema.String;
export type GetLmsCoursesParameterRemoteIds = typeof GetLmsCoursesParameterRemoteIds.Type;

export const GetLmsCoursesPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.String, provider_id: Schema.NullOr(Schema.String), origin_id: Schema.NullOr(Schema.String), remote_created_at: Schema.NullOr(Schema.String), remote_deleted_at: Schema.NullOr(Schema.String), changed_at: Schema.String, remote_data: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })), custom_fields: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })), integration_fields: Schema.Array(Schema.Struct({ id: Schema.String, key: Schema.String, type: Schema.Union(Schema.Literal("DEFAULT"), Schema.Literal("CUSTOM")), value: Schema.optional(Schema.Null), label: Schema.NullOr(Schema.String) })), provider: Schema.NullOr(Schema.Struct({ id: Schema.String, remote_id: Schema.String, name: Schema.NullOr(Schema.String) })), revisions: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.String, course_id: Schema.NullOr(Schema.String), title: Schema.NullOr(Schema.String), description: Schema.NullOr(Schema.String), remote_url: Schema.NullOr(Schema.String), status: Schema.NullOr(Schema.Union(Schema.Literal("ACTIVE"), Schema.Literal("INACTIVE"))), remote_created_at: Schema.NullOr(Schema.String), remote_deleted_at: Schema.NullOr(Schema.String), changed_at: Schema.String, remote_data: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })), custom_fields: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })), integration_fields: Schema.Array(Schema.Struct({ id: Schema.String, key: Schema.String, type: Schema.Union(Schema.Literal("DEFAULT"), Schema.Literal("CUSTOM")), value: Schema.optional(Schema.Null), label: Schema.NullOr(Schema.String) })), skill_assignments: Schema.Array(Schema.Struct({ skill: Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), name: Schema.NullOr(Schema.String) }) })) })) })) }) });
export type GetLmsCoursesPositiveResponse = typeof GetLmsCoursesPositiveResponse.Type;

export const PostLmsCoursesBulkPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ task_id: Schema.String }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PostLmsCoursesBulkPositiveResponse = typeof PostLmsCoursesBulkPositiveResponse.Type;

export const PostLmsCoursesBulkRequestBody = Schema.Struct({ items: Schema.Array(Schema.Struct({ origin_id: Schema.String, course: Schema.Struct({ type: Schema.String, title: Schema.String, description: Schema.optional(Schema.NullOr(Schema.String)), course_url: Schema.String, thumbnail_url: Schema.optional(Schema.NullOr(Schema.String)), duration: Schema.optional(Schema.NullOr(Schema.Int.pipe(Schema.greaterThan(0)))), languages: Schema.optional(Schema.NullOr(Schema.Array(Schema.String.pipe(Schema.pattern(new RegExp("^[a-z]{2,3}(-[A-Z]{2})?$")))))) }) })) });
export type PostLmsCoursesBulkRequestBody = typeof PostLmsCoursesBulkRequestBody.Type;

export const GetLmsCoursesBulkTaskIdParameterTaskId = Schema.String;
export type GetLmsCoursesBulkTaskIdParameterTaskId = typeof GetLmsCoursesBulkTaskIdParameterTaskId.Type;

export const GetLmsCoursesBulkTaskIdPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Union(Schema.Struct({ task_id: Schema.String, created_at: Schema.String, status: Schema.String, completed_at: Schema.Null }), Schema.Struct({ task_id: Schema.String, created_at: Schema.String, status: Schema.String, data: Schema.Array(Schema.Union(Schema.Struct({ origin_id: Schema.String, status: Schema.String, data: Schema.Struct({ id: Schema.String }) }), Schema.Struct({ origin_id: Schema.String, status: Schema.String, error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"), Schema.Literal("ATS.JOB_CLOSED"), Schema.Literal("ATS.APPLICATION_ALREADY_EXISTS"), Schema.Literal("LMS.COURSE_UPDATE_NOT_SUPPORTED"), Schema.Literal("AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING"), Schema.Literal("AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }))), completed_at: Schema.String }), Schema.Struct({ task_id: Schema.String, created_at: Schema.String, status: Schema.String, error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"), Schema.Literal("ATS.JOB_CLOSED"), Schema.Literal("ATS.APPLICATION_ALREADY_EXISTS"), Schema.Literal("LMS.COURSE_UPDATE_NOT_SUPPORTED"), Schema.Literal("AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING"), Schema.Literal("AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }), completed_at: Schema.String })) });
export type GetLmsCoursesBulkTaskIdPositiveResponse = typeof GetLmsCoursesBulkTaskIdPositiveResponse.Type;

export const PostLmsCoursesCourseIdDeactivateParameterCourseId = Schema.String;
export type PostLmsCoursesCourseIdDeactivateParameterCourseId = typeof PostLmsCoursesCourseIdDeactivateParameterCourseId.Type;

export const PostLmsCoursesCourseIdDeactivatePositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ id: Schema.String, remote_id: Schema.String, provider_id: Schema.NullOr(Schema.String), origin_id: Schema.NullOr(Schema.String), remote_created_at: Schema.NullOr(Schema.String), remote_deleted_at: Schema.NullOr(Schema.String), changed_at: Schema.String, remote_data: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })), custom_fields: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })), integration_fields: Schema.Array(Schema.Struct({ id: Schema.String, key: Schema.String, type: Schema.Union(Schema.Literal("DEFAULT"), Schema.Literal("CUSTOM")), value: Schema.optional(Schema.Null), label: Schema.NullOr(Schema.String) })), provider: Schema.NullOr(Schema.Struct({ id: Schema.String, remote_id: Schema.String, name: Schema.NullOr(Schema.String) })), revisions: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.String, course_id: Schema.NullOr(Schema.String), title: Schema.NullOr(Schema.String), description: Schema.NullOr(Schema.String), remote_url: Schema.NullOr(Schema.String), status: Schema.NullOr(Schema.Union(Schema.Literal("ACTIVE"), Schema.Literal("INACTIVE"))), remote_created_at: Schema.NullOr(Schema.String), remote_deleted_at: Schema.NullOr(Schema.String), changed_at: Schema.String, remote_data: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })), custom_fields: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })), integration_fields: Schema.Array(Schema.Struct({ id: Schema.String, key: Schema.String, type: Schema.Union(Schema.Literal("DEFAULT"), Schema.Literal("CUSTOM")), value: Schema.optional(Schema.Null), label: Schema.NullOr(Schema.String) })), skill_assignments: Schema.Array(Schema.Struct({ skill: Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), name: Schema.NullOr(Schema.String) }) })) })) }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PostLmsCoursesCourseIdDeactivatePositiveResponse = typeof PostLmsCoursesCourseIdDeactivatePositiveResponse.Type;

export const PostLmsCoursesCourseIdDeactivateRequestBody = Schema.Struct({  });
export type PostLmsCoursesCourseIdDeactivateRequestBody = typeof PostLmsCoursesCourseIdDeactivateRequestBody.Type;

export const GetLmsSkillsParameterCursor = Schema.String;
export type GetLmsSkillsParameterCursor = typeof GetLmsSkillsParameterCursor.Type;

export const GetLmsSkillsParameterPageSize = Schema_default_100_4;
export type GetLmsSkillsParameterPageSize = typeof GetLmsSkillsParameterPageSize.Type;

export const GetLmsSkillsParameterUpdatedAfter = Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetLmsSkillsParameterUpdatedAfter = typeof GetLmsSkillsParameterUpdatedAfter.Type;

export const GetLmsSkillsParameterIncludeDeleted = Union_default_false;
export type GetLmsSkillsParameterIncludeDeleted = typeof GetLmsSkillsParameterIncludeDeleted.Type;

export const GetLmsSkillsParameterIgnoreUnsupportedFilters = Union_default_false;
export type GetLmsSkillsParameterIgnoreUnsupportedFilters = typeof GetLmsSkillsParameterIgnoreUnsupportedFilters.Type;

export const GetLmsSkillsParameterIds = Schema.String;
export type GetLmsSkillsParameterIds = typeof GetLmsSkillsParameterIds.Type;

export const GetLmsSkillsParameterRemoteIds = Schema.String;
export type GetLmsSkillsParameterRemoteIds = typeof GetLmsSkillsParameterRemoteIds.Type;

export const GetLmsSkillsPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), name: Schema.NullOr(Schema.String), remote_created_at: Schema.NullOr(Schema.String), remote_deleted_at: Schema.NullOr(Schema.String), changed_at: Schema.String, remote_data: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })), custom_fields: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })), integration_fields: Schema.Array(Schema.Struct({ id: Schema.String, key: Schema.String, type: Schema.Union(Schema.Literal("DEFAULT"), Schema.Literal("CUSTOM")), value: Schema.optional(Schema.Null), label: Schema.NullOr(Schema.String) })) })) }) });
export type GetLmsSkillsPositiveResponse = typeof GetLmsSkillsPositiveResponse.Type;

export const PostAiApplyCareerSitesPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ id: Schema.String, label: Schema.String }) });
export type PostAiApplyCareerSitesPositiveResponse = typeof PostAiApplyCareerSitesPositiveResponse.Type;

export const PostAiApplyCareerSitesRequestBody = Schema.Struct({ label: Schema.String });
export type PostAiApplyCareerSitesRequestBody = typeof PostAiApplyCareerSitesRequestBody.Type;

export const GetAiApplyCareerSitesParameterCursor = Schema.String;
export type GetAiApplyCareerSitesParameterCursor = typeof GetAiApplyCareerSitesParameterCursor.Type;

export const GetAiApplyCareerSitesParameterPageSize = Schema_default_100_4;
export type GetAiApplyCareerSitesParameterPageSize = typeof GetAiApplyCareerSitesParameterPageSize.Type;

export const GetAiApplyCareerSitesParameterIds = Schema.String;
export type GetAiApplyCareerSitesParameterIds = typeof GetAiApplyCareerSitesParameterIds.Type;

export const GetAiApplyCareerSitesPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ results: Schema.Array(Schema.Struct({ id: Schema.String, label: Schema.String })), next: Schema.NullOr(Schema.String) }) });
export type GetAiApplyCareerSitesPositiveResponse = typeof GetAiApplyCareerSitesPositiveResponse.Type;

export const GetAiApplyPostingsParameterCursor = Schema.String;
export type GetAiApplyPostingsParameterCursor = typeof GetAiApplyPostingsParameterCursor.Type;

export const GetAiApplyPostingsParameterPageSize = Schema_default_100_4;
export type GetAiApplyPostingsParameterPageSize = typeof GetAiApplyPostingsParameterPageSize.Type;

export const GetAiApplyPostingsParameterIds = Schema.String;
export type GetAiApplyPostingsParameterIds = typeof GetAiApplyPostingsParameterIds.Type;

export const GetAiApplyPostingsParameterCareerSiteIds = Schema.String;
export type GetAiApplyPostingsParameterCareerSiteIds = typeof GetAiApplyPostingsParameterCareerSiteIds.Type;

export const GetAiApplyPostingsParameterJobCodes = Schema.String;
export type GetAiApplyPostingsParameterJobCodes = typeof GetAiApplyPostingsParameterJobCodes.Type;

export const GetAiApplyPostingsPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ results: Schema.Array(Schema.Struct({ id: Schema.String, career_site: Schema.Struct({ id: Schema.String, label: Schema.String }), url: Schema.String, job_code: Schema.NullOr(Schema.String), created_at: Schema.String, updated_at: Schema.String, archived_at: Schema.NullOr(Schema.String), archived_reason: Schema.NullOr(Schema.Union(Schema.Literal("JOB_POSTING_TAKEN_OFFLINE"), Schema.Literal("MANUAL_ARCHIVE"), Schema.Literal("REMOVED_FROM_JOB_FEED"))), availability: Schema.Union(Schema.Literal("APPLYABLE"), Schema.Literal("PENDING"), Schema.Literal("ARCHIVED"), Schema.Literal("UNAVAILABLE")) })), next: Schema.NullOr(Schema.String) }) });
export type GetAiApplyPostingsPositiveResponse = typeof GetAiApplyPostingsPositiveResponse.Type;

export const PostAiApplyPostingsPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ id: Schema.String, career_site: Schema.Struct({ id: Schema.String, label: Schema.String }), url: Schema.String, job_code: Schema.NullOr(Schema.String), created_at: Schema.String, updated_at: Schema.String, archived_at: Schema.NullOr(Schema.String), archived_reason: Schema.NullOr(Schema.Union(Schema.Literal("JOB_POSTING_TAKEN_OFFLINE"), Schema.Literal("MANUAL_ARCHIVE"), Schema.Literal("REMOVED_FROM_JOB_FEED"))), availability: Schema.Union(Schema.Literal("APPLYABLE"), Schema.Literal("PENDING"), Schema.Literal("ARCHIVED"), Schema.Literal("UNAVAILABLE")) }) });
export type PostAiApplyPostingsPositiveResponse = typeof PostAiApplyPostingsPositiveResponse.Type;

export const PostAiApplyPostingsRequestBody = Schema.Struct({ url: Schema.URL.pipe(Schema.pattern(new RegExp("^https?:\\/\\/"))), job_code: Schema.optional(Schema.String), location: Schema.optional(Schema.NullOr(Schema.Struct({ country: Schema.Union(Schema.Literal("AD"), Schema.Literal("AE"), Schema.Literal("AF"), Schema.Literal("AG"), Schema.Literal("AI"), Schema.Literal("AL"), Schema.Literal("AM"), Schema.Literal("AO"), Schema.Literal("AQ"), Schema.Literal("AR"), Schema.Literal("AS"), Schema.Literal("AT"), Schema.Literal("AU"), Schema.Literal("AW"), Schema.Literal("AX"), Schema.Literal("AZ"), Schema.Literal("BA"), Schema.Literal("BB"), Schema.Literal("BD"), Schema.Literal("BE"), Schema.Literal("BF"), Schema.Literal("BG"), Schema.Literal("BH"), Schema.Literal("BI"), Schema.Literal("BJ"), Schema.Literal("BL"), Schema.Literal("BM"), Schema.Literal("BN"), Schema.Literal("BO"), Schema.Literal("BQ"), Schema.Literal("BR"), Schema.Literal("BS"), Schema.Literal("BT"), Schema.Literal("BV"), Schema.Literal("BW"), Schema.Literal("BY"), Schema.Literal("BZ"), Schema.Literal("CA"), Schema.Literal("CC"), Schema.Literal("CD"), Schema.Literal("CF"), Schema.Literal("CG"), Schema.Literal("CH"), Schema.Literal("CI"), Schema.Literal("CK"), Schema.Literal("CL"), Schema.Literal("CM"), Schema.Literal("CN"), Schema.Literal("CO"), Schema.Literal("CR"), Schema.Literal("CU"), Schema.Literal("CV"), Schema.Literal("CW"), Schema.Literal("CX"), Schema.Literal("CY"), Schema.Literal("CZ"), Schema.Literal("DE"), Schema.Literal("DJ"), Schema.Literal("DK"), Schema.Literal("DM"), Schema.Literal("DO"), Schema.Literal("DZ"), Schema.Literal("EC"), Schema.Literal("EE"), Schema.Literal("EG"), Schema.Literal("EH"), Schema.Literal("ER"), Schema.Literal("ES"), Schema.Literal("ET"), Schema.Literal("FI"), Schema.Literal("FJ"), Schema.Literal("FK"), Schema.Literal("FM"), Schema.Literal("FO"), Schema.Literal("FR"), Schema.Literal("GA"), Schema.Literal("GB"), Schema.Literal("GD"), Schema.Literal("GE"), Schema.Literal("GF"), Schema.Literal("GG"), Schema.Literal("GH"), Schema.Literal("GI"), Schema.Literal("GL"), Schema.Literal("GM"), Schema.Literal("GN"), Schema.Literal("GP"), Schema.Literal("GQ"), Schema.Literal("GR"), Schema.Literal("GS"), Schema.Literal("GT"), Schema.Literal("GU"), Schema.Literal("GW"), Schema.Literal("GY"), Schema.Literal("HK"), Schema.Literal("HM"), Schema.Literal("HN"), Schema.Literal("HR"), Schema.Literal("HT"), Schema.Literal("HU"), Schema.Literal("ID"), Schema.Literal("IE"), Schema.Literal("IL"), Schema.Literal("IM"), Schema.Literal("IN"), Schema.Literal("IO"), Schema.Literal("IQ"), Schema.Literal("IR"), Schema.Literal("IS"), Schema.Literal("IT"), Schema.Literal("JE"), Schema.Literal("JM"), Schema.Literal("JO"), Schema.Literal("JP"), Schema.Literal("KE"), Schema.Literal("KG"), Schema.Literal("KH"), Schema.Literal("KI"), Schema.Literal("KM"), Schema.Literal("KN"), Schema.Literal("KP"), Schema.Literal("KR"), Schema.Literal("KW"), Schema.Literal("KY"), Schema.Literal("KZ"), Schema.Literal("LA"), Schema.Literal("LB"), Schema.Literal("LC"), Schema.Literal("LI"), Schema.Literal("LK"), Schema.Literal("LR"), Schema.Literal("LS"), Schema.Literal("LT"), Schema.Literal("LU"), Schema.Literal("LV"), Schema.Literal("LY"), Schema.Literal("MA"), Schema.Literal("MC"), Schema.Literal("MD"), Schema.Literal("ME"), Schema.Literal("MF"), Schema.Literal("MG"), Schema.Literal("MH"), Schema.Literal("MK"), Schema.Literal("ML"), Schema.Literal("MM"), Schema.Literal("MN"), Schema.Literal("MO"), Schema.Literal("MP"), Schema.Literal("MQ"), Schema.Literal("MR"), Schema.Literal("MS"), Schema.Literal("MT"), Schema.Literal("MU"), Schema.Literal("MV"), Schema.Literal("MW"), Schema.Literal("MX"), Schema.Literal("MY"), Schema.Literal("MZ"), Schema.Literal("NA"), Schema.Literal("NC"), Schema.Literal("NE"), Schema.Literal("NF"), Schema.Literal("NG"), Schema.Literal("NI"), Schema.Literal("NL"), Schema.Literal("NO"), Schema.Literal("NP"), Schema.Literal("NR"), Schema.Literal("NU"), Schema.Literal("NZ"), Schema.Literal("OM"), Schema.Literal("PA"), Schema.Literal("PE"), Schema.Literal("PF"), Schema.Literal("PG"), Schema.Literal("PH"), Schema.Literal("PK"), Schema.Literal("PL"), Schema.Literal("PM"), Schema.Literal("PN"), Schema.Literal("PR"), Schema.Literal("PS"), Schema.Literal("PT"), Schema.Literal("PW"), Schema.Literal("PY"), Schema.Literal("QA"), Schema.Literal("RE"), Schema.Literal("RO"), Schema.Literal("RS"), Schema.Literal("RU"), Schema.Literal("RW"), Schema.Literal("SA"), Schema.Literal("SB"), Schema.Literal("SC"), Schema.Literal("SD"), Schema.Literal("SE"), Schema.Literal("SG"), Schema.Literal("SH"), Schema.Literal("SI"), Schema.Literal("SJ"), Schema.Literal("SK"), Schema.Literal("SL"), Schema.Literal("SM"), Schema.Literal("SN"), Schema.Literal("SO"), Schema.Literal("SR"), Schema.Literal("SS"), Schema.Literal("ST"), Schema.Literal("SV"), Schema.Literal("SX"), Schema.Literal("SY"), Schema.Literal("SZ"), Schema.Literal("TC"), Schema.Literal("TD"), Schema.Literal("TF"), Schema.Literal("TG"), Schema.Literal("TH"), Schema.Literal("TJ"), Schema.Literal("TK"), Schema.Literal("TL"), Schema.Literal("TM"), Schema.Literal("TN"), Schema.Literal("TO"), Schema.Literal("TR"), Schema.Literal("TT"), Schema.Literal("TV"), Schema.Literal("TW"), Schema.Literal("TZ"), Schema.Literal("UA"), Schema.Literal("UG"), Schema.Literal("UM"), Schema.Literal("US"), Schema.Literal("UY"), Schema.Literal("UZ"), Schema.Literal("VA"), Schema.Literal("VC"), Schema.Literal("VE"), Schema.Literal("VG"), Schema.Literal("VI"), Schema.Literal("VN"), Schema.Literal("VU"), Schema.Literal("WF"), Schema.Literal("WS"), Schema.Literal("YE"), Schema.Literal("YT"), Schema.Literal("ZA"), Schema.Literal("ZM"), Schema.Literal("ZW")), postal_code: Schema.optional(Schema.String) }))), career_site_id: Schema.String });
export type PostAiApplyPostingsRequestBody = typeof PostAiApplyPostingsRequestBody.Type;

export const PostAiApplyPostingsPostingIdInquireParameterPostingId = Schema.String;
export type PostAiApplyPostingsPostingIdInquireParameterPostingId = typeof PostAiApplyPostingsPostingIdInquireParameterPostingId.Type;

export const PostAiApplyPostingsPostingIdInquirePositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ application_form: Schema.Array(Schema.Union(Schema.Struct({ block_type: Schema.String, question_id: Schema.String, label: Schema.String, description: Schema.NullOr(Schema.String), required: Schema.Boolean, category: Schema.NullOr(Schema.Literal("EEO")), question_type: Schema.Union(Schema.Literal("TEXT"), Schema.Literal("NUMBER"), Schema.Literal("BOOLEAN"), Schema.Literal("FILE"), Schema.Literal("DATE"), Schema.Literal("SINGLE_SELECT"), Schema.Literal("MULTI_SELECT")), unified_key: Schema.NullOr(Schema.Union(Schema.Literal("EMAIL"), Schema.Literal("RESIDENCE_TYPE"), Schema.Literal("RESIDENCE_FULL_STRING"), Schema.Literal("RESIDENCE_COUNTRY"), Schema.Literal("RESIDENCE_CITY"), Schema.Literal("RESIDENCE_STATE"), Schema.Literal("RESIDENCE_LINE_1"), Schema.Literal("RESIDENCE_LINE_2"), Schema.Literal("RESIDENCE_ZIP_CODE"), Schema.Literal("APPLICANT_POOL_CONSENT"), Schema.Literal("TERMS_AND_CONDITIONS"), Schema.Literal("FIRST_NAME"), Schema.Literal("LAST_NAME"), Schema.Literal("FULL_NAME"), Schema.Literal("GENDER"), Schema.Literal("EXPECTED_START_DATE"), Schema.Literal("RESUME"), Schema.Literal("BIRTH_DATE"), Schema.Literal("PHONE_NUMBER_TYPE"), Schema.Literal("FULL_PHONE_NUMBER"), Schema.Literal("PHONE_COUNTRY_CODE"), Schema.Literal("PHONE_NATIONAL_NUMBER"), Schema.Literal("PHONE_EXTENSION"))), options: Schema.NullOr(Schema.Array(Schema.Struct({ id: Schema.String, label: Schema.String, unified_key: Schema.NullOr(Schema.Union(Schema.Literal("HOME"), Schema.Literal("WORK"), Schema.Literal("MAILING"), Schema.Literal("AD"), Schema.Literal("AE"), Schema.Literal("AF"), Schema.Literal("AG"), Schema.Literal("AI"), Schema.Literal("AL"), Schema.Literal("AM"), Schema.Literal("AO"), Schema.Literal("AQ"), Schema.Literal("AR"), Schema.Literal("AS"), Schema.Literal("AT"), Schema.Literal("AU"), Schema.Literal("AW"), Schema.Literal("AX"), Schema.Literal("AZ"), Schema.Literal("BA"), Schema.Literal("BB"), Schema.Literal("BD"), Schema.Literal("BE"), Schema.Literal("BF"), Schema.Literal("BG"), Schema.Literal("BH"), Schema.Literal("BI"), Schema.Literal("BJ"), Schema.Literal("BL"), Schema.Literal("BM"), Schema.Literal("BN"), Schema.Literal("BO"), Schema.Literal("BQ"), Schema.Literal("BR"), Schema.Literal("BS"), Schema.Literal("BT"), Schema.Literal("BV"), Schema.Literal("BW"), Schema.Literal("BY"), Schema.Literal("BZ"), Schema.Literal("CA"), Schema.Literal("CC"), Schema.Literal("CD"), Schema.Literal("CF"), Schema.Literal("CG"), Schema.Literal("CH"), Schema.Literal("CI"), Schema.Literal("CK"), Schema.Literal("CL"), Schema.Literal("CM"), Schema.Literal("CN"), Schema.Literal("CO"), Schema.Literal("CR"), Schema.Literal("CU"), Schema.Literal("CV"), Schema.Literal("CW"), Schema.Literal("CX"), Schema.Literal("CY"), Schema.Literal("CZ"), Schema.Literal("DE"), Schema.Literal("DJ"), Schema.Literal("DK"), Schema.Literal("DM"), Schema.Literal("DO"), Schema.Literal("DZ"), Schema.Literal("EC"), Schema.Literal("EE"), Schema.Literal("EG"), Schema.Literal("EH"), Schema.Literal("ER"), Schema.Literal("ES"), Schema.Literal("ET"), Schema.Literal("FI"), Schema.Literal("FJ"), Schema.Literal("FK"), Schema.Literal("FM"), Schema.Literal("FO"), Schema.Literal("FR"), Schema.Literal("GA"), Schema.Literal("GB"), Schema.Literal("GD"), Schema.Literal("GE"), Schema.Literal("GF"), Schema.Literal("GG"), Schema.Literal("GH"), Schema.Literal("GI"), Schema.Literal("GL"), Schema.Literal("GM"), Schema.Literal("GN"), Schema.Literal("GP"), Schema.Literal("GQ"), Schema.Literal("GR"), Schema.Literal("GS"), Schema.Literal("GT"), Schema.Literal("GU"), Schema.Literal("GW"), Schema.Literal("GY"), Schema.Literal("HK"), Schema.Literal("HM"), Schema.Literal("HN"), Schema.Literal("HR"), Schema.Literal("HT"), Schema.Literal("HU"), Schema.Literal("ID"), Schema.Literal("IE"), Schema.Literal("IL"), Schema.Literal("IM"), Schema.Literal("IN"), Schema.Literal("IO"), Schema.Literal("IQ"), Schema.Literal("IR"), Schema.Literal("IS"), Schema.Literal("IT"), Schema.Literal("JE"), Schema.Literal("JM"), Schema.Literal("JO"), Schema.Literal("JP"), Schema.Literal("KE"), Schema.Literal("KG"), Schema.Literal("KH"), Schema.Literal("KI"), Schema.Literal("KM"), Schema.Literal("KN"), Schema.Literal("KP"), Schema.Literal("KR"), Schema.Literal("KW"), Schema.Literal("KY"), Schema.Literal("KZ"), Schema.Literal("LA"), Schema.Literal("LB"), Schema.Literal("LC"), Schema.Literal("LI"), Schema.Literal("LK"), Schema.Literal("LR"), Schema.Literal("LS"), Schema.Literal("LT"), Schema.Literal("LU"), Schema.Literal("LV"), Schema.Literal("LY"), Schema.Literal("MA"), Schema.Literal("MC"), Schema.Literal("MD"), Schema.Literal("ME"), Schema.Literal("MF"), Schema.Literal("MG"), Schema.Literal("MH"), Schema.Literal("MK"), Schema.Literal("ML"), Schema.Literal("MM"), Schema.Literal("MN"), Schema.Literal("MO"), Schema.Literal("MP"), Schema.Literal("MQ"), Schema.Literal("MR"), Schema.Literal("MS"), Schema.Literal("MT"), Schema.Literal("MU"), Schema.Literal("MV"), Schema.Literal("MW"), Schema.Literal("MX"), Schema.Literal("MY"), Schema.Literal("MZ"), Schema.Literal("NA"), Schema.Literal("NC"), Schema.Literal("NE"), Schema.Literal("NF"), Schema.Literal("NG"), Schema.Literal("NI"), Schema.Literal("NL"), Schema.Literal("NO"), Schema.Literal("NP"), Schema.Literal("NR"), Schema.Literal("NU"), Schema.Literal("NZ"), Schema.Literal("OM"), Schema.Literal("PA"), Schema.Literal("PE"), Schema.Literal("PF"), Schema.Literal("PG"), Schema.Literal("PH"), Schema.Literal("PK"), Schema.Literal("PL"), Schema.Literal("PM"), Schema.Literal("PN"), Schema.Literal("PR"), Schema.Literal("PS"), Schema.Literal("PT"), Schema.Literal("PW"), Schema.Literal("PY"), Schema.Literal("QA"), Schema.Literal("RE"), Schema.Literal("RO"), Schema.Literal("RS"), Schema.Literal("RU"), Schema.Literal("RW"), Schema.Literal("SA"), Schema.Literal("SB"), Schema.Literal("SC"), Schema.Literal("SD"), Schema.Literal("SE"), Schema.Literal("SG"), Schema.Literal("SH"), Schema.Literal("SI"), Schema.Literal("SJ"), Schema.Literal("SK"), Schema.Literal("SL"), Schema.Literal("SM"), Schema.Literal("SN"), Schema.Literal("SO"), Schema.Literal("SR"), Schema.Literal("SS"), Schema.Literal("ST"), Schema.Literal("SV"), Schema.Literal("SX"), Schema.Literal("SY"), Schema.Literal("SZ"), Schema.Literal("TC"), Schema.Literal("TD"), Schema.Literal("TF"), Schema.Literal("TG"), Schema.Literal("TH"), Schema.Literal("TJ"), Schema.Literal("TK"), Schema.Literal("TL"), Schema.Literal("TM"), Schema.Literal("TN"), Schema.Literal("TO"), Schema.Literal("TR"), Schema.Literal("TT"), Schema.Literal("TV"), Schema.Literal("TW"), Schema.Literal("TZ"), Schema.Literal("UA"), Schema.Literal("UG"), Schema.Literal("UM"), Schema.Literal("US"), Schema.Literal("UY"), Schema.Literal("UZ"), Schema.Literal("VA"), Schema.Literal("VC"), Schema.Literal("VE"), Schema.Literal("VG"), Schema.Literal("VI"), Schema.Literal("VN"), Schema.Literal("VU"), Schema.Literal("WF"), Schema.Literal("WS"), Schema.Literal("YE"), Schema.Literal("YT"), Schema.Literal("ZA"), Schema.Literal("ZM"), Schema.Literal("ZW"), Schema.Literal("MALE"), Schema.Literal("FEMALE"), Schema.Literal("NON_BINARY"), Schema.Literal("NOT_SPECIFIED"), Schema.Literal("MOBILE"), Schema.Literal("LANDLINE"), Schema.Literal("SOURCE_OTHER"), Schema.Literal("SOURCE_OTHER_JOB_BOARD"))) }))), display_when: Schema.NullOr(Schema.Struct({ question_id: Schema.String, answer_equals: Schema.Union(Schema.String, Schema.Array(Schema.String), Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308)), Schema.Boolean, Schema.Struct({ name: Schema.String, content_type: Schema.String, data: Schema.Unknown })) })) }), Schema.Struct({ block_type: Schema.String, label: Schema.String, children: Schema.Array(Schema.Record({ key: Schema.String, value: Schema.Unknown })) }))), submission_token: Schema.String }) });
export type PostAiApplyPostingsPostingIdInquirePositiveResponse = typeof PostAiApplyPostingsPostingIdInquirePositiveResponse.Type;

export const PostAiApplyPostingsPostingIdInquireRequestBody = Schema.Struct({  });
export type PostAiApplyPostingsPostingIdInquireRequestBody = typeof PostAiApplyPostingsPostingIdInquireRequestBody.Type;

export const PostAiApplyApplyPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ id: Schema.String, posting_id: Schema.String, status: Schema.String, created_at: Schema.String, updated_at: Schema.String }) });
export type PostAiApplyApplyPositiveResponse = typeof PostAiApplyApplyPositiveResponse.Type;

export const PostAiApplyApplyRequestBody = Schema.Struct({ submission_token: Schema.String, candidate_email: Schema.String.pipe(Schema.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)), query_params: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.String })), screening_question_answers: Schema.Array(Schema.Struct({ question_id: Schema.String, answer: Schema.Union(Schema.String, Schema.Array(Schema.String), Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308)), Schema.Boolean, Schema.Struct({ name: Schema.String, content_type: Schema.String, data: Schema.String })) })), additional_clicks: Schema.optional(Schema.Int.pipe(Schema.greaterThanOrEqualTo(0), Schema.lessThanOrEqualTo(30))), additional_clicks_scatter_duration: Schema.optional(Schema.Int.pipe(Schema.greaterThanOrEqualTo(1))) });
export type PostAiApplyApplyRequestBody = typeof PostAiApplyApplyRequestBody.Type;

export const GetAiApplyApplicationsParameterCursor = Schema.String;
export type GetAiApplyApplicationsParameterCursor = typeof GetAiApplyApplicationsParameterCursor.Type;

export const GetAiApplyApplicationsParameterPageSize = Schema_default_100_4;
export type GetAiApplyApplicationsParameterPageSize = typeof GetAiApplyApplicationsParameterPageSize.Type;

export const GetAiApplyApplicationsParameterIds = Schema.String;
export type GetAiApplyApplicationsParameterIds = typeof GetAiApplyApplicationsParameterIds.Type;

export const GetAiApplyApplicationsParameterJobPostingIds = Schema.String;
export type GetAiApplyApplicationsParameterJobPostingIds = typeof GetAiApplyApplicationsParameterJobPostingIds.Type;

export const GetAiApplyApplicationsPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ results: Schema.Array(Schema.Struct({ id: Schema.String, job_posting_id: Schema.String, status: Schema.Union(Schema.Literal("SUBMITTED"), Schema.Literal("DUPLICATE"), Schema.Literal("PENDING"), Schema.Literal("FAILED")), created_at: Schema.String, updated_at: Schema.String })), next: Schema.NullOr(Schema.String) }) });
export type GetAiApplyApplicationsPositiveResponse = typeof GetAiApplyApplicationsPositiveResponse.Type;

export const GetAiApplyUnifiedApiJobsParameterCursor = Schema.String;
export type GetAiApplyUnifiedApiJobsParameterCursor = typeof GetAiApplyUnifiedApiJobsParameterCursor.Type;

export const GetAiApplyUnifiedApiJobsParameterPageSize = Schema_default_5;
export type GetAiApplyUnifiedApiJobsParameterPageSize = typeof GetAiApplyUnifiedApiJobsParameterPageSize.Type;

export const GetAiApplyUnifiedApiJobsParameterIds = Schema.String;
export type GetAiApplyUnifiedApiJobsParameterIds = typeof GetAiApplyUnifiedApiJobsParameterIds.Type;

export const GetAiApplyUnifiedApiJobsParameterRemoteIds = Schema.String;
export type GetAiApplyUnifiedApiJobsParameterRemoteIds = typeof GetAiApplyUnifiedApiJobsParameterRemoteIds.Type;

export const GetAiApplyUnifiedApiJobsParameterJobCodes = Schema.String;
export type GetAiApplyUnifiedApiJobsParameterJobCodes = typeof GetAiApplyUnifiedApiJobsParameterJobCodes.Type;

export const GetAiApplyUnifiedApiJobsParameterCareerSiteIds = Schema.String;
export type GetAiApplyUnifiedApiJobsParameterCareerSiteIds = typeof GetAiApplyUnifiedApiJobsParameterCareerSiteIds.Type;

export const GetAiApplyUnifiedApiJobsPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.String, name: Schema.NullOr(Schema.String), job_code: Schema.NullOr(Schema.String), description: Schema.NullOr(Schema.String), confidential: Schema.NullOr(Schema.Boolean), weekly_hours: Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), category: Schema.NullOr(Schema.String), department: Schema.NullOr(Schema.String), post_url: Schema.NullOr(Schema.String), experience_level: Schema.NullOr(Schema.String), salary_amount: Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), salary_amount_from: Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), salary_amount_to: Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), salary_currency: Schema.NullOr(Schema.String), custom_fields: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })), integration_fields: Schema.Array(Schema.Record({ key: Schema.String, value: Schema.Unknown })), opened_at: Schema.NullOr(Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")))), closed_at: Schema.NullOr(Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")))), remote_created_at: Schema.NullOr(Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")))), remote_updated_at: Schema.NullOr(Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")))), contact_id: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })), changed_at: Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$"))), remote_deleted_at: Schema.NullOr(Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")))), remote_url: Schema.NullOr(Schema.String), stages: Schema.Array(Schema.Record({ key: Schema.String, value: Schema.Unknown })), screening_questions: Schema.NullOr(Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), title: Schema.NullOr(Schema.String), description: Schema.NullOr(Schema.String), format: Schema.optional(Schema.Union(Schema.Struct({ display_type: Schema.optional(Schema.NullOr(Schema.Union(Schema.Literal("SINGLE_LINE"), Schema.Literal("MULTI_LINE"), Schema.Literal("EMAIL"), Schema.Literal("URL")))), max_length: Schema.optional(Schema.NullOr(Schema.Int)), type: Schema.String }), Schema.Struct({ display_type: NullOr_default_FIELD_prop, max: Schema.optional(Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308)))), min: Schema.optional(Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308)))), type: Schema.String }), Schema.Struct({ accepted_mime_types: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))), max_file_size_bytes: Schema.optional(Schema.NullOr(Schema.Int)), type: Schema.String }), Schema.Struct({ display_type: Schema.optional(Schema.NullOr(Schema.Union(Schema.Literal("DROPDOWN"), Schema.Literal("RADIO")))), options: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.optional(Schema.NullOr(Schema.String)), name: Schema.String })), type: Schema.String }), Schema.Struct({ type: Schema.String }), Schema.Struct({ type: Schema.String }), Schema.Struct({ options: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.optional(Schema.NullOr(Schema.String)), name: Schema.String })), type: Schema.String }), Schema.Struct({ type: Schema.String }), Schema.Struct({ raw_question: Schema.optional(Schema.Unknown), type: Schema.String }), Schema.Null)), category: Schema.NullOr(Schema.Literal("EEO")), index: Schema.optional(Schema.NullOr(Schema.Int)), required: Schema.NullOr(Schema.Boolean), precondition_question_id: Schema.optional(Schema.NullOr(Schema.String)), precondition_options: Union_default_null_prop_20 }))), job_postings: Schema.Array(Schema.Record({ key: Schema.String, value: Schema.Unknown })), hiring_team: Schema.Array(Schema.Record({ key: Schema.String, value: Schema.Unknown })), employment_type: Schema.optional(Schema.Union(Schema.Union(Schema.Literal("FULL_TIME"), Schema.Literal("PART_TIME"), Schema.Literal("CONTRACT"), Schema.Literal("SEASONAL"), Schema.Literal("INTERNSHIP")), Schema.String, Schema.Null)), status: Schema.optional(Schema.Union(Schema.Union(Schema.Literal("OPEN"), Schema.Literal("CLOSED"), Schema.Literal("DRAFT"), Schema.Literal("ARCHIVED")), Schema.String, Schema.Null)), visibility: Schema.NullOr(Schema.String), remote_work_status: Schema.NullOr(Schema.String), salary_period: Schema.NullOr(Schema.String), location: Schema.optional(Schema.NullOr(Schema.Struct({ city: Schema.optional(Schema.NullOr(Schema.String)), country: Schema.optional(Schema.NullOr(Schema.String)), raw: Schema.optional(Schema.NullOr(Schema.String)), state: Schema.optional(Schema.NullOr(Schema.String)), street_1: Schema.optional(Schema.NullOr(Schema.String)), street_2: Schema.optional(Schema.NullOr(Schema.String)), zip_code: Schema.optional(Schema.NullOr(Schema.String)) }))) })), next: Schema.NullOr(Schema.String) }) });
export type GetAiApplyUnifiedApiJobsPositiveResponse = typeof GetAiApplyUnifiedApiJobsPositiveResponse.Type;

export const PostAiApplyUnifiedApiJobsJobIdApplicationsParameterJobId = Schema.String;
export type PostAiApplyUnifiedApiJobsJobIdApplicationsParameterJobId = typeof PostAiApplyUnifiedApiJobsJobIdApplicationsParameterJobId.Type;

export const PostAiApplyUnifiedApiJobsJobIdApplicationsPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), outcome: Schema.NullOr(Schema.Union(Schema.Literal("PENDING"), Schema.Literal("HIRED"), Schema.Literal("DECLINED"))), rejection_reason_name: Schema.NullOr(Schema.String), rejected_at: Schema.NullOr(Schema.String), current_stage_id: Schema.NullOr(Schema.String), job_id: Schema.NullOr(Schema.String), candidate_id: Schema.NullOr(Schema.String), screening_question_answers: NullOr_default_value_prop_12, custom_fields: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })), integration_fields: Schema.Array(Schema.Struct({ id: Schema.String, key: Schema.String, type: Schema.Union(Schema.Literal("DEFAULT"), Schema.Literal("CUSTOM")), value: Schema.optional(Schema.Null), label: Schema.NullOr(Schema.String) })), remote_url: Schema.NullOr(Schema.URL), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), remote_created_at: Schema.NullOr(Schema.String), remote_updated_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })), current_stage: Schema.NullOr(Schema.Struct({ id: Schema.String, name: Schema.NullOr(Schema.String), remote_id: Schema.NullOr(Schema.String), index: Schema.NullOr(Schema.Int) })), job: Schema.NullOr(Schema.Struct({ id: Schema.String, name: Schema.NullOr(Schema.String), remote_id: Schema.String })), candidate: Schema.NullOr(Schema.Struct({ id: Schema.String, remote_id: Schema.String, first_name: Schema.NullOr(Schema.String), last_name: Schema.NullOr(Schema.String), company: Schema.NullOr(Schema.String), title: Schema.NullOr(Schema.String), confidential: Schema.NullOr(Schema.Boolean), source: Schema.NullOr(Schema.String), phone_numbers: NullOr_default_value_prop_10, email_addresses: NullOr_default_value_prop, social_media: NullOr_default_value_prop_11, location: Schema.optional(Schema.NullOr(Schema.Struct({ city: Schema.optional(Schema.NullOr(Schema.String)), country: Schema.optional(Schema.NullOr(Schema.String)), raw: Schema.optional(Schema.NullOr(Schema.String)), state: Schema.optional(Schema.NullOr(Schema.String)), street_1: Schema.optional(Schema.NullOr(Schema.String)), street_2: Schema.optional(Schema.NullOr(Schema.String)), zip_code: Schema.optional(Schema.NullOr(Schema.String)) }))), custom_fields: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })), integration_fields: Schema.Array(Schema.Struct({ id: Schema.String, key: Schema.String, type: Schema.Union(Schema.Literal("DEFAULT"), Schema.Literal("CUSTOM")), value: Schema.optional(Schema.Null), label: Schema.NullOr(Schema.String) })), remote_url: Schema.NullOr(Schema.URL), remote_created_at: Schema.NullOr(Schema.String), remote_updated_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.Unknown })), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), tags: Schema.Array(Schema.Struct({ id: Schema.String, name: Schema.NullOr(Schema.String), remote_id: Schema.NullOr(Schema.String) })) })) }) });
export type PostAiApplyUnifiedApiJobsJobIdApplicationsPositiveResponse = typeof PostAiApplyUnifiedApiJobsJobIdApplicationsPositiveResponse.Type;

export const PostAiApplyUnifiedApiJobsJobIdApplicationsRequestBody = Schema.Struct({ stage_id: Schema.optional(Schema.String), candidate: Schema.Struct({ first_name: Schema.String, last_name: Schema.String, email_address: Schema.String.pipe(Schema.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)), additional_email_addresses: Schema.optional(Schema.Array(Schema.Struct({ type: Schema.Union(Schema.Literal("PERSONAL"), Schema.Literal("WORK"), Schema.Literal("OTHER")), email_address: Schema.String.pipe(Schema.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) }))), company: Schema.optional(Schema.String), title: Schema.optional(Schema.String), phone_number: Schema.optional(Schema.String), additional_phone_numbers: Schema.optional(Schema.Array(Schema.Struct({ type: Schema.Union(Schema.Literal("PERSONAL"), Schema.Literal("WORK"), Schema.Literal("OTHER")), phone_number: Schema.String }))), location: Schema.optional(Schema.Struct({ city: Schema.optional(Schema.String), country: Schema.String.pipe(Schema.pattern(new RegExp("^[A-Z]{2}$"))), state: Schema.optional(Schema.String), street_1: Schema.optional(Schema.String), zip_code: Schema.optional(Schema.String) })), gender: Schema.optional(Schema.Union(Schema.Literal("MALE"), Schema.Literal("FEMALE"), Schema.Literal("OTHER"))), availability_date: Schema.optional(Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), salary_expectations: Schema.optional(Schema.Struct({ period: Schema.Union(Schema.Literal("MONTH"), Schema.Literal("YEAR")), amount: Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308)) })), social_links: Array_default_value_prop_13 }), attachments: Union_default_value_prop, source: Schema.optional(Schema.Struct({ name: Schema.optional(Schema.String), unified_key: Schema.optional(Schema.String), id: Schema.optional(Schema.String) })), sourced_by: Schema.optional(Schema.Struct({ user_id: Schema.String })), gdpr_consent: Schema.optional(Schema.Struct({ expires_at: Schema.optional(Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), given: Schema.optional(Schema.Boolean) })), remote_fields: Schema.optional(Schema.Struct({ successfactors: Schema.optional(Schema.Struct({ Candidate: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })), JobApplication: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })), copyJobApplicationAttachments: Schema.optional(Schema.Boolean), update_existing_candidate: Schema.optional(Schema.NullOr(Schema.Boolean)) })), personio: Schema.optional(Schema.Struct({ application: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })), talentsoft: Schema.optional(Schema.Struct({ applicant: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })), application: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })), teamtailor: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })), application: Schema.optional(Schema.Struct({ attributes: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })) })), greenhouse: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })), application: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })), post_headers: Schema.optional(Schema.Struct({ "On-Behalf-Of": Schema.optional(Schema.NullOr(Schema.String)) })) })), lever: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })), workable: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })), on_behalf_of_user_remote_id: Schema.optional(Schema.String) })), workday: Schema.optional(Schema.Struct({ Candidate_Data: Schema.optional(Schema.Struct({ Name_Detail_Data: Schema.optional(Schema.Struct({ Middle_Name: Schema.optional(Schema.String), Social_Suffix_Reference: Schema.optional(Schema.Struct({ Predefined_Name_Component_ID: Schema.String })) })), Language_Reference: Schema.optional(Schema.Struct({ WID: Schema.String })), Job_Application_Data: Schema.optional(Schema.Struct({ Job_Applied_To_Data: Schema.optional(Schema.Struct({ Global_Personal_Information_Data: Schema.optional(Schema.Struct({ Date_of_Birth: Schema.optional(Schema.String) })) })), Resume_Data: Schema.optional(Schema.Struct({ Education_Data: Schema.optional(Schema.Array(Schema.Struct({ School_Name: Schema.optional(Schema.String), First_Year_Attended: Schema.optional(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), Last_Year_Attended: Schema.optional(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), Field_of_Study_Reference: Schema.optional(Schema.Struct({ WID: Schema.String })), Degree_Reference: Schema.optional(Schema.Struct({ WID: Schema.String })), Grade_Average: Schema.optional(Schema.String) }))), Skill_Data: Schema.optional(Schema.Array(Schema.Struct({ Skill_Name: Schema.optional(Schema.String) }))), Language_Data: Schema.optional(Schema.Array(Schema.Struct({ Language_Reference: Schema.optional(Schema.Struct({ WID: Schema.optional(Schema.String) })), Language: Schema.optional(Schema.Struct({ Native: Schema.optional(Schema.Boolean), Language_Ability: Schema.Array(Schema.Struct({ Language_Ability_Data: Schema.optional(Schema.Struct({ Language_Proficiency_Reference: Schema.optional(Schema.Struct({ WID: Schema.String })), Language_Ability_Type_Reference: Schema.optional(Schema.Struct({ WID: Schema.String })) })) })) })) }))), Experience_Data: Schema.optional(Schema.Array(Schema.Struct({ Company_Name: Schema.String, Title: Schema.String, Location: Schema.optional(Schema.String), Start_Date: Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))), End_Date: Schema.optional(Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), Currently_Work_Here: Schema.optional(Schema.Boolean), Description: Schema.optional(Schema.String) }))) })) })), Contact_Data: Schema.optional(Schema.Struct({ Location_Data: Schema.optional(Schema.Struct({ Address_Line_1: Schema.optional(Schema.String), Address_Line_2: Schema.optional(Schema.String), Region_Subdivision_1: Schema.optional(Schema.String), Country_Region_Reference: Schema.optional(Schema.Struct({ Country_Region_ID: Schema.String })), Country_City_Reference: Schema.optional(Schema.Struct({ WID: Schema.String })) })) })), Worker_Reference: Schema.optional(Schema.Struct({ WID: Schema.optional(Schema.String), Employee_ID: Schema.optional(Schema.String) })) })), Override_Source_Reference_WID: Schema.optional(Schema.String) })), zohorecruit: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })), bullhorn: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })), job_submission: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })), smartrecruiters: Schema.optional(Schema.Struct({ candidate_with_questions: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })), candidate_without_questions: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })), candidate: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })), consent_decisions: Schema.optional(Schema.Struct({ SINGLE: Schema.optional(Schema.Boolean), SMART_RECRUIT: Schema.optional(Schema.Boolean), SMART_CRM: Schema.optional(Schema.Boolean), SMART_MESSAGE_SMS: Schema.optional(Schema.Boolean), SMART_MESSAGE_WHATSAPP: Schema.optional(Schema.Boolean) })) })), talentadore: Schema.optional(Schema.Struct({ applications: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })), guidecom: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })), dvinci: Schema.optional(Schema.Struct({ application: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })), candidate: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })), hrworks: Schema.optional(Schema.Struct({ jobApplication: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })), jobylon: Schema.optional(Schema.Struct({ application: Schema.optional(Schema.Struct({ message: Schema.optional(Schema.String) })) })), avature: Schema.optional(Schema.Struct({ workflow: Schema.optional(Schema.Struct({ step: Schema.optional(Schema.Struct({ id: Schema.Int })) })) })), recruitee: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Struct({ cover_letter_text: Schema.optional(Schema.String) })) })), rexx: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })), umantis: Schema.optional(Schema.Struct({ person: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })), piloga: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Struct({ street: Schema.optional(Schema.String) })) })), pinpoint: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })) })), covetorest: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Struct({ mandant: Schema.optional(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))) })) })) })), screening_question_answers: Schema.optional(Schema.Array(Schema.Struct({ question_id: Schema.String, answer: Schema.Union(Schema.String, Schema.Boolean, Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308)), Schema.Array(Schema.String), Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))), Schema.Struct({ name: Schema.String, content_type: Schema.optional(Schema.String.pipe(Schema.pattern(new RegExp("^[\\w.-]+\\/[\\w.-]+$")))), data_url: Schema.optional(Schema.URL), data: Schema.optional(Schema.String) })) }))), query_params: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.String })) });
export type PostAiApplyUnifiedApiJobsJobIdApplicationsRequestBody = typeof PostAiApplyUnifiedApiJobsJobIdApplicationsRequestBody.Type;

export const GetAiApplyJobFeedsParameterCursor = Schema.String;
export type GetAiApplyJobFeedsParameterCursor = typeof GetAiApplyJobFeedsParameterCursor.Type;

export const GetAiApplyJobFeedsParameterPageSize = Schema_default_100_4;
export type GetAiApplyJobFeedsParameterPageSize = typeof GetAiApplyJobFeedsParameterPageSize.Type;

export const GetAiApplyJobFeedsParameterIds = Schema.String;
export type GetAiApplyJobFeedsParameterIds = typeof GetAiApplyJobFeedsParameterIds.Type;

export const GetAiApplyJobFeedsPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ results: Schema.Array(Schema.Struct({ id: Schema.String, label: Schema.String })), next: Schema.NullOr(Schema.String) }) });
export type GetAiApplyJobFeedsPositiveResponse = typeof GetAiApplyJobFeedsPositiveResponse.Type;

export const PostAiApplyJobFeedsPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ id: Schema.String, label: Schema.String }) });
export type PostAiApplyJobFeedsPositiveResponse = typeof PostAiApplyJobFeedsPositiveResponse.Type;

export const PostAiApplyJobFeedsRequestBody = Schema.Struct({ label: Schema.String.pipe(Schema.minLength(1)) });
export type PostAiApplyJobFeedsRequestBody = typeof PostAiApplyJobFeedsRequestBody.Type;

export const PostConnectCreateLinkPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ link: Schema.URL }) });
export type PostConnectCreateLinkPositiveResponse = typeof PostConnectCreateLinkPositiveResponse.Type;

export const PostConnectCreateLinkRequestBody = Schema.Struct({ end_user_email: Schema.String.pipe(Schema.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)), end_user_organization_name: Schema.String.pipe(Schema.minLength(1)), end_user_origin_id: Schema.optional(Schema.NullOr(Schema.String.pipe(Schema.minLength(1)))), remote_environment: Schema.optional(Schema.NullOr(Schema.String)), integration_category: Union_default_HRIS_prop, integration_tool: Schema.optional(Schema.NullOr(Schema.Union(Schema.Literal("workday"), Schema.Literal("successfactors"), Schema.Literal("smartrecruiters"), Schema.Literal("factorial"), Schema.Literal("oraclerecruiting"), Schema.Literal("lever"), Schema.Literal("icims"), Schema.Literal("cornerstonetalentlink"), Schema.Literal("recruitee"), Schema.Literal("recruiterflow"), Schema.Literal("greenhouse"), Schema.Literal("greenhousejobboard"), Schema.Literal("teamtailor"), Schema.Literal("teamtailorjobboards"), Schema.Literal("ashby"), Schema.Literal("talentsoft"), Schema.Literal("talentsoftcustomer"), Schema.Literal("concludis"), Schema.Literal("talention"), Schema.Literal("piloga"), Schema.Literal("onlyfy"), Schema.Literal("personio"), Schema.Literal("ukgpro"), Schema.Literal("ukgready"), Schema.Literal("adpworkforcenow"), Schema.Literal("taleo"), Schema.Literal("rexx"), Schema.Literal("afas"), Schema.Literal("bamboohr"), Schema.Literal("bullhorn"), Schema.Literal("bullhornlogin"), Schema.Literal("workable"), Schema.Literal("jobvite"), Schema.Literal("fountain"), Schema.Literal("softgarden"), Schema.Literal("softgardenpartner"), Schema.Literal("pinpoint"), Schema.Literal("welcometothejungle"), Schema.Literal("dvinci"), Schema.Literal("dvinciadmin"), Schema.Literal("join"), Schema.Literal("sagehr"), Schema.Literal("traffit"), Schema.Literal("erecruiter"), Schema.Literal("abacusumantis"), Schema.Literal("umantis"), Schema.Literal("jobylon"), Schema.Literal("taleez"), Schema.Literal("hrworks"), Schema.Literal("otys"), Schema.Literal("zohorecruit"), Schema.Literal("ceipal"), Schema.Literal("eploy"), Schema.Literal("jobdiva"), Schema.Literal("careerplug"), Schema.Literal("perview"), Schema.Literal("eightfold"), Schema.Literal("paylocity"), Schema.Literal("paycor"), Schema.Literal("avature"), Schema.Literal("apploi"), Schema.Literal("phenom"), Schema.Literal("paradox"), Schema.Literal("heyrecruit"), Schema.Literal("recruhr"), Schema.Literal("recruitcrm"), Schema.Literal("jazzhr"), Schema.Literal("bite"), Schema.Literal("brassring"), Schema.Literal("homerun"), Schema.Literal("mysolution"), Schema.Literal("carerix"), Schema.Literal("hroffice"), Schema.Literal("talentclue"), Schema.Literal("inrecruiting"), Schema.Literal("ubeeo"), Schema.Literal("connexys"), Schema.Literal("hr4you"), Schema.Literal("cornerstoneondemand"), Schema.Literal("zvooverecruit"), Schema.Literal("odoo"), Schema.Literal("comeet"), Schema.Literal("compleet"), Schema.Literal("compleetpitcher"), Schema.Literal("gem"), Schema.Literal("laura"), Schema.Literal("covetorest"), Schema.Literal("coveto"), Schema.Literal("mercury"), Schema.Literal("crelate"), Schema.Literal("manatal"), Schema.Literal("avionte"), Schema.Literal("mhmhr"), Schema.Literal("asymbl"), Schema.Literal("breezyhr"), Schema.Literal("flatchr"), Schema.Literal("dayforce"), Schema.Literal("digitalrecruiters"), Schema.Literal("applicantstack"), Schema.Literal("reachmee"), Schema.Literal("talentadore"), Schema.Literal("sandbox"), Schema.Literal("guidecom"), Schema.Literal("spott"), Schema.Literal("loxo"), Schema.Literal("kula"), Schema.Literal("workdaycustomreport"), Schema.Literal("workdaycustomreportsftp"), Schema.Literal("ukgprowfm"), Schema.Literal("payfitcustomer"), Schema.Literal("payfitpartner"), Schema.Literal("payfit"), Schema.Literal("employmenthero"), Schema.Literal("fourth"), Schema.Literal("kenjo"), Schema.Literal("heavenhr"), Schema.Literal("hibob"), Schema.Literal("cezannehr"), Schema.Literal("entraid"), Schema.Literal("azuread"), Schema.Literal("googleworkspace"), Schema.Literal("nmbrs"), Schema.Literal("deel"), Schema.Literal("remotecom"), Schema.Literal("iriscascade"), Schema.Literal("okta"), Schema.Literal("sagepeople"), Schema.Literal("humaans"), Schema.Literal("eurecia"), Schema.Literal("oraclehcm"), Schema.Literal("officient"), Schema.Literal("sesamehr"), Schema.Literal("charliehr"), Schema.Literal("abacus"), Schema.Literal("zohopeople"), Schema.Literal("gusto"), Schema.Literal("breathehr"), Schema.Literal("catalystone"), Schema.Literal("mirus"), Schema.Literal("alexishr"), Schema.Literal("simployer"), Schema.Literal("peple"), Schema.Literal("youserve"), Schema.Literal("hansalog"), Schema.Literal("lattice"), Schema.Literal("latticetalent"), Schema.Literal("hoorayhr"), Schema.Literal("trinet"), Schema.Literal("trinetpeo"), Schema.Literal("namely"), Schema.Literal("paycom"), Schema.Literal("insperity"), Schema.Literal("paychex"), Schema.Literal("rippling"), Schema.Literal("sapling"), Schema.Literal("peoplehr"), Schema.Literal("lucca"), Schema.Literal("zelt"), Schema.Literal("planday"), Schema.Literal("boondmanager"), Schema.Literal("haileyhr"), Schema.Literal("silae"), Schema.Literal("oysterhr"), Schema.Literal("kiwihr"), Schema.Literal("square"), Schema.Literal("perbilityhelix"), Schema.Literal("leapsome"), Schema.Literal("loket"), Schema.Literal("workforcecom"), Schema.Literal("peoplefirst"), Schema.Literal("sdworx"), Schema.Literal("itrent"), Schema.Literal("absenceio"), Schema.Literal("a3innuvanomina"), Schema.Literal("scim"), Schema.Literal("datevlauds"), Schema.Literal("datevhr"), Schema.Literal("datev"), Schema.Literal("datevlug"), Schema.Literal("sympa"), Schema.Literal("youforce"), Schema.Literal("nibelis"), Schema.Literal("peoplexd"), Schema.Literal("sftp"), Schema.Literal("sftpfetch"), Schema.Literal("360learning"), Schema.Literal("talentlms"), Schema.Literal("udemy"), Schema.Literal("linkedinlearning"), Schema.Literal("moodle")))), language: NullOr_default_en_prop, scope_config_id: Schema.optional(Schema.NullOr(Schema.String)), enable_filtering: Boolean_default_false_prop, enable_field_mapping: Boolean_default_false_prop, link_type: Union_default_EMBEDDED_prop });
export type PostConnectCreateLinkRequestBody = typeof PostConnectCreateLinkRequestBody.Type;

export const GetConnectIntegrationByTokenTokenParameterToken = Schema.String;
export type GetConnectIntegrationByTokenTokenParameterToken = typeof GetConnectIntegrationByTokenTokenParameterToken.Type;

export const GetConnectIntegrationByTokenTokenPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ tool: Schema.String, id: Schema.String, end_user_origin_id: Schema.NullOr(Schema.String), end_user_organization_name: Schema.String, end_user_email: Schema.NullOr(Schema.String.pipe(Schema.pattern(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$")))), setup_status: Schema.Union(Schema.Literal("INCOMPLETE"), Schema.Literal("FINAL_SYNC_PENDING"), Schema.Literal("COMPLETED")) }) });
export type GetConnectIntegrationByTokenTokenPositiveResponse = typeof GetConnectIntegrationByTokenTokenPositiveResponse.Type;

export const PostConnectActivateIntegrationPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ tool: Schema.String, id: Schema.String, end_user_origin_id: Schema.NullOr(Schema.String), end_user_organization_name: Schema.String, end_user_email: Schema.NullOr(Schema.String.pipe(Schema.pattern(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$")))), setup_status: Schema.Union(Schema.Literal("INCOMPLETE"), Schema.Literal("FINAL_SYNC_PENDING"), Schema.Literal("COMPLETED")) }) });
export type PostConnectActivateIntegrationPositiveResponse = typeof PostConnectActivateIntegrationPositiveResponse.Type;

export const PostConnectActivateIntegrationRequestBody = Schema.Struct({ token: Schema.String });
export type PostConnectActivateIntegrationRequestBody = typeof PostConnectActivateIntegrationRequestBody.Type;

export const GetCustomDatevSystemInformationPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ consultant_number: Schema.Number.pipe(Schema.greaterThanOrEqualTo(1000), Schema.lessThanOrEqualTo(9999999)), client_number: Schema.Number.pipe(Schema.greaterThanOrEqualTo(1), Schema.lessThanOrEqualTo(99999)), target_system: Schema.Union(Schema.Literal("LODAS"), Schema.Literal("LuG")) }) });
export type GetCustomDatevSystemInformationPositiveResponse = typeof GetCustomDatevSystemInformationPositiveResponse.Type;

export const PostCustomDatevPassthroughPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Record({ key: Schema.String, value: Schema.Unknown }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PostCustomDatevPassthroughPositiveResponse = typeof PostCustomDatevPassthroughPositiveResponse.Type;

export const PostCustomDatevPassthroughRequestBody = Schema.Struct({ file_content: Schema.String.pipe(Schema.minLength(1)), accounting_month: Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))), target_system: Schema.Union(Schema.Literal("LODAS"), Schema.Literal("LuG")), file_type: Schema.Union(Schema.Literal("STAMMDATEN"), Schema.Literal("BEWEGUNGSDATEN")), file_name: Schema.String });
export type PostCustomDatevPassthroughRequestBody = typeof PostCustomDatevPassthroughRequestBody.Type;

export const GetCustomDatevCheckEauPermissionPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ ready: Schema.Boolean, error: Schema.optional(Schema.String) }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type GetCustomDatevCheckEauPermissionPositiveResponse = typeof GetCustomDatevCheckEauPermissionPositiveResponse.Type;

export const GetCustomDatevEauRequestsEauIdParameterEauId = Schema.String;
export type GetCustomDatevEauRequestsEauIdParameterEauId = typeof GetCustomDatevEauRequestsEauIdParameterEauId.Type;

export const GetCustomDatevEauRequestsEauIdPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ raw: Schema.Struct({ source: Schema.String, start_work_incapacity: Schema.String, collaboration_identifier: Schema.optional(Schema.String), feedbacks_from_health_insurance: Schema.Array(Schema.Struct({ guid: Schema.String, contact_person: Schema.NullOr(Schema.Struct({ gender_contact_person: Schema.optional(Schema.NullOr(Schema.Union(Schema.Literal("M"), Schema.Literal("F"), Schema.Literal("X"), Schema.Literal("D")))), name: Schema.String, telephone: Schema.String, fax: Schema.NullOr(Schema.String), email: Schema.NullOr(Schema.String), name1_health_insurance: Schema.String, name2_health_insurance: Schema.optional(Schema.NullOr(Schema.String)), name3_health_insurance: Schema.optional(Schema.NullOr(Schema.String)), postal_code: Schema.String, city: Schema.String, street: Schema.NullOr(Schema.String), house_number: Schema.NullOr(Schema.String) })), incapacity_for_work: Schema.Struct({ start_work_incapacity_employer: Schema.String, start_work_incapacity_au: Schema.NullOr(Schema.String), end_work_incapacity_au: Schema.NullOr(Schema.String), actual_end_work_incapacity_au: Schema.optional(Schema.NullOr(Schema.String)), date_of_diagnosis: Schema.NullOr(Schema.String), flag_current_work_incapacity: Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), accident_at_work: Schema.Boolean, assignment_accident_insurance_doctor: Schema.Boolean, other_accident: Schema.Boolean, start_hospitalisation: Schema.optional(Schema.NullOr(Schema.String)), end_hospitalisation: Schema.optional(Schema.NullOr(Schema.String)), initial_certificate: Schema.Boolean, automatic_feedback_until: Schema.NullOr(Schema.String) }), error_block_list: Schema.NullOr(Schema.Array(Schema.Struct({ origin: Schema.NullOr(Schema.String), error_number: Schema.NullOr(Schema.String), error_text: Schema.NullOr(Schema.String), error_value: Schema.NullOr(Schema.String) }))) })) }) }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type GetCustomDatevEauRequestsEauIdPositiveResponse = typeof GetCustomDatevEauRequestsEauIdPositiveResponse.Type;

export const GetCustomDatevCheckDocumentPermissionPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Union(Schema.Struct({ ready: Schema.Boolean, documents_granted: Schema.Array(Schema.String) }), Schema.Struct({ ready: Schema.Boolean, error: Schema.String })), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type GetCustomDatevCheckDocumentPermissionPositiveResponse = typeof GetCustomDatevCheckDocumentPermissionPositiveResponse.Type;

export const GetCustomDatevAvailableDocumentsParameterPeriod = Schema.String;
export type GetCustomDatevAvailableDocumentsParameterPeriod = typeof GetCustomDatevAvailableDocumentsParameterPeriod.Type;

export const GetCustomDatevAvailableDocumentsPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ results: Schema.Array(Schema.Struct({ document_type: Schema.String, available_for_employees: Schema.Array(Schema.Struct({ id: Schema.NullOr(Schema.String), remote_id: Schema.String })), is_company_document: Schema.Boolean })) }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type GetCustomDatevAvailableDocumentsPositiveResponse = typeof GetCustomDatevAvailableDocumentsPositiveResponse.Type;

export const PostCustomDatevDownloadDocumentPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ data_url: Schema.URL, file_name: Schema.String, content_type: Schema.String }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PostCustomDatevDownloadDocumentPositiveResponse = typeof PostCustomDatevDownloadDocumentPositiveResponse.Type;

export const PostCustomDatevDownloadDocumentRequestBody = Schema.Struct({ accounting_month: Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))), document_type: Schema.Union(Schema.Literal("AANB"), Schema.Literal("ABEG"), Schema.Literal("BUBE"), Schema.Literal("DAWE"), Schema.Literal("KBNW"), Schema.Literal("KOST"), Schema.Literal("KOTR"), Schema.Literal("LKTO"), Schema.Literal("LOBN"), Schema.Literal("LJOE"), Schema.Literal("LOJE"), Schema.Literal("LOJO"), Schema.Literal("LOPE"), Schema.Literal("LOPN"), Schema.Literal("LOPS"), Schema.Literal("LORE"), Schema.Literal("LOWE"), Schema.Literal("LSTA"), Schema.Literal("LSTB"), Schema.Literal("LSTE"), Schema.Literal("PDAT"), Schema.Literal("PFAN"), Schema.Literal("PRZA"), Schema.Literal("SBNW"), Schema.Literal("SVNW"), Schema.Literal("WEAN"), Schema.Literal("ZABR"), Schema.Literal("ZAKF"), Schema.Literal("ZAUW")), employee_id: Schema.NullOr(Schema.String) });
export type PostCustomDatevDownloadDocumentRequestBody = typeof PostCustomDatevDownloadDocumentRequestBody.Type;

export const PostCustomDatevEmployeesEmployeeIdDownloadDocumentParameterEmployeeId = Schema.String;
export type PostCustomDatevEmployeesEmployeeIdDownloadDocumentParameterEmployeeId = typeof PostCustomDatevEmployeesEmployeeIdDownloadDocumentParameterEmployeeId.Type | null;

export const PostCustomDatevEmployeesEmployeeIdDownloadDocumentPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ data_url: Schema.URL, file_name: Schema.String, content_type: Schema.String }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PostCustomDatevEmployeesEmployeeIdDownloadDocumentPositiveResponse = typeof PostCustomDatevEmployeesEmployeeIdDownloadDocumentPositiveResponse.Type;

export const PostCustomDatevEmployeesEmployeeIdDownloadDocumentRequestBody = Schema.Struct({ accounting_month: Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))), document_type: Schema.Union(Schema.Literal("AANB"), Schema.Literal("ABEG"), Schema.Literal("BUBE"), Schema.Literal("DAWE"), Schema.Literal("KBNW"), Schema.Literal("KOST"), Schema.Literal("KOTR"), Schema.Literal("LKTO"), Schema.Literal("LOBN"), Schema.Literal("LJOE"), Schema.Literal("LOJE"), Schema.Literal("LOJO"), Schema.Literal("LOPE"), Schema.Literal("LOPN"), Schema.Literal("LOPS"), Schema.Literal("LORE"), Schema.Literal("LOWE"), Schema.Literal("LSTA"), Schema.Literal("LSTB"), Schema.Literal("LSTE"), Schema.Literal("PDAT"), Schema.Literal("PFAN"), Schema.Literal("PRZA"), Schema.Literal("SBNW"), Schema.Literal("SVNW"), Schema.Literal("WEAN"), Schema.Literal("ZABR"), Schema.Literal("ZAKF"), Schema.Literal("ZAUW")) });
export type PostCustomDatevEmployeesEmployeeIdDownloadDocumentRequestBody = typeof PostCustomDatevEmployeesEmployeeIdDownloadDocumentRequestBody.Type;

export const PostCustomDatevEmployeesEmployeeIdEauRequestsParameterEmployeeId = Schema.String;
export type PostCustomDatevEmployeesEmployeeIdEauRequestsParameterEmployeeId = typeof PostCustomDatevEmployeesEmployeeIdEauRequestsParameterEmployeeId.Type;

export const PostCustomDatevEmployeesEmployeeIdEauRequestsPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ eau_id: Schema.String }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PostCustomDatevEmployeesEmployeeIdEauRequestsPositiveResponse = typeof PostCustomDatevEmployeesEmployeeIdEauRequestsPositiveResponse.Type;

export const PostCustomDatevEmployeesEmployeeIdEauRequestsRequestBody = Schema.Struct({ start_work_incapacity: Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}$"))), notification: Schema.optional(Schema.Struct({ email: Schema.String.pipe(Schema.pattern(new RegExp("^[\\w!#$%&'*+/=?^`{|}~-]+(?:\\.[\\w!#$%&'*+/=?^`{|}~-]+)*@(?:[\\w-]+\\.)+[\\w-]{2,}$"))) })), contact_person: Schema.optional(Schema.Struct({ gender: Schema.Union(Schema.Literal("M"), Schema.Literal("W"), Schema.Literal("X"), Schema.Literal("D")), name: Schema.String.pipe(Schema.minLength(0), Schema.maxLength(30)), telephone: Schema.String.pipe(Schema.minLength(0), Schema.maxLength(20), Schema.pattern(new RegExp("([\\d+])[\\d ()/-]+"))), fax: Schema.String.pipe(Schema.minLength(0), Schema.maxLength(20), Schema.pattern(new RegExp("([\\d+])[\\d ()/-]+"))), email: Schema.String.pipe(Schema.minLength(0), Schema.maxLength(70), Schema.pattern(new RegExp("^(?=.{1,64}@)[\\w-]+(\\.[\\w-]+)*@[^-][\\dA-Za-z-]+(\\.[\\dA-Za-z-]+)*(\\.[A-Za-z]{2,})$"))), company_name: Schema.String.pipe(Schema.minLength(0), Schema.maxLength(90)), postal_code: Schema.String.pipe(Schema.minLength(0), Schema.maxLength(10), Schema.pattern(new RegExp("[\\dA-Za-z]*"))), city: Schema.String.pipe(Schema.minLength(0), Schema.maxLength(34)), street: Schema.String.pipe(Schema.minLength(0), Schema.maxLength(33)), house_number: Schema.String.pipe(Schema.minLength(0), Schema.maxLength(9)) })) });
export type PostCustomDatevEmployeesEmployeeIdEauRequestsRequestBody = typeof PostCustomDatevEmployeesEmployeeIdEauRequestsRequestBody.Type;

export const PutCustomDatevEmployeesEmployeeIdPreparePayrollParameterEmployeeId = Schema.String;
export type PutCustomDatevEmployeesEmployeeIdPreparePayrollParameterEmployeeId = typeof PutCustomDatevEmployeesEmployeeIdPreparePayrollParameterEmployeeId.Type;

export const PutCustomDatevEmployeesEmployeeIdPreparePayrollPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Record({ key: Schema.String, value: Schema.Unknown }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PutCustomDatevEmployeesEmployeeIdPreparePayrollPositiveResponse = typeof PutCustomDatevEmployeesEmployeeIdPreparePayrollPositiveResponse.Type;

export const PutCustomDatevEmployeesEmployeeIdPreparePayrollRequestBody = Schema.Struct({ payroll_run: Schema.Struct({ date: Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))) }), hourly_payments: Schema.Array(Schema.Struct({ hours: Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308)), lohnart: Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308)) })), fixed_payments: Schema.Array(Schema.Struct({ amount: Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308)), lohnart: Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308)) })), custom_lodas: Array_default_value_prop_22 });
export type PutCustomDatevEmployeesEmployeeIdPreparePayrollRequestBody = typeof PutCustomDatevEmployeesEmployeeIdPreparePayrollRequestBody.Type;

export const PutCustomDatevEmployeesEmployeeIdCompensationsParameterEmployeeId = Schema.String;
export type PutCustomDatevEmployeesEmployeeIdCompensationsParameterEmployeeId = typeof PutCustomDatevEmployeesEmployeeIdCompensationsParameterEmployeeId.Type;

export const PutCustomDatevEmployeesEmployeeIdCompensationsPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Record({ key: Schema.String, value: Schema.Unknown }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PutCustomDatevEmployeesEmployeeIdCompensationsPositiveResponse = typeof PutCustomDatevEmployeesEmployeeIdCompensationsPositiveResponse.Type;

export const PutCustomDatevEmployeesEmployeeIdCompensationsRequestBody = Schema.Struct({ effective_date: Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))), compensations: Schema.Array(Schema.Struct({ amount: Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308)), currency: Schema.String, period: Schema.Union(Schema.Literal("HOUR"), Schema.Literal("MONTH")), lohnart: Schema.optional(Schema.Int.pipe(Schema.greaterThanOrEqualTo(1), Schema.lessThanOrEqualTo(9999))) })) });
export type PutCustomDatevEmployeesEmployeeIdCompensationsRequestBody = typeof PutCustomDatevEmployeesEmployeeIdCompensationsRequestBody.Type;

export const GetCustomDatevCheckWritePermissionPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ ready: Schema.Boolean, error: Schema.optional(Schema.String) }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type GetCustomDatevCheckWritePermissionPositiveResponse = typeof GetCustomDatevCheckWritePermissionPositiveResponse.Type;

export const GetCustomDatevDataPushesPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ data_pushes: Schema.Array(Schema.Struct({ id: Schema.String, type: Schema.Union(Schema.Literal("GENERAL"), Schema.Literal("PAYROLL")), created_at: Schema.String, upload_jobs: Schema.Array(Schema.Struct({ id: Schema.String, file_name: Schema.String, state: Schema.Union(Schema.Literal("FAILED"), Schema.Literal("UPLOADED"), Schema.Literal("IMPORTED"), Schema.Literal("CORRUPTED"), Schema.Literal("DELETED"), Schema.Literal("AUTO_DELETED")), file: Schema.String })) })) }) });
export type GetCustomDatevDataPushesPositiveResponse = typeof GetCustomDatevDataPushesPositiveResponse.Type;

export const PostCustomDatevPushDataGeneralPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ files: Schema.Array(Schema.Struct({ name: Schema.String, content: Schema.String })) }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PostCustomDatevPushDataGeneralPositiveResponse = typeof PostCustomDatevPushDataGeneralPositiveResponse.Type;

export const PostCustomDatevPushDataGeneralRequestBody = Schema.Record({ key: Schema.String, value: Schema.Unknown });
export type PostCustomDatevPushDataGeneralRequestBody = typeof PostCustomDatevPushDataGeneralRequestBody.Type;

export const PostCustomDatevPushDataPayrollPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Struct({ files: Schema.Array(Schema.Struct({ name: Schema.String, content: Schema.String })) }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PostCustomDatevPushDataPayrollPositiveResponse = typeof PostCustomDatevPushDataPayrollPositiveResponse.Type;

export const PostCustomDatevPushDataPayrollRequestBody = Schema.Struct({ payroll_month: Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))) });
export type PostCustomDatevPushDataPayrollRequestBody = typeof PostCustomDatevPushDataPayrollRequestBody.Type;

export const PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsParameterEmployeeId = Schema.String;
export type PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsParameterEmployeeId = typeof PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsParameterEmployeeId.Type;

export const PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsPositiveResponse = Schema.Struct({ status: Schema.String, data: Schema.Record({ key: Schema.String, value: Schema.Unknown }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsPositiveResponse = typeof PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsPositiveResponse.Type;

export const PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsRequestBody = Schema.Struct({ supplement_code: Schema.String, effective_date: Schema.String.pipe(Schema.pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))), element_amount: Schema.optional(Schema.Number.pipe(Schema.greaterThanOrEqualTo(-1.7976931348623157e+308))), element_string: Schema.optional(Schema.String) });
export type PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsRequestBody = typeof PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsRequestBody.Type;

export const DataChangedWebhookPayload = Schema.Struct({ id: Schema.String, type: Schema.Literal("data-changed"), data: Schema.Struct({ integration_id: Schema.String, integration_tool: Schema.String, integration_category: Schema.Union(Schema.Literal("HRIS"), Schema.Literal("ATS"), Schema.Literal("ASSESSMENT"), Schema.Literal("LMS")), changed_models: Schema.Array(Schema.Struct({ name: Schema.Union(Schema.Literal("hris_legal_entities"), Schema.Literal("hris_locations"), Schema.Literal("hris_employees"), Schema.Literal("hris_absence_types"), Schema.Literal("hris_absences"), Schema.Literal("hris_employments"), Schema.Literal("hris_teams"), Schema.Literal("hris_time_off_balances"), Schema.Literal("hris_timesheets"), Schema.Literal("hris_employee_document_categories"), Schema.Literal("hris_performance_reviews"), Schema.Literal("hris_performance_review_cycles"), Schema.Literal("hris_staffing_entities"), Schema.Literal("ats_users"), Schema.Literal("ats_jobs"), Schema.Literal("ats_job_postings"), Schema.Literal("ats_candidates"), Schema.Literal("ats_application_stages"), Schema.Literal("ats_applications"), Schema.Literal("ats_screening_questions"), Schema.Literal("ats_tags"), Schema.Literal("ats_interviews"), Schema.Literal("ats_offers"), Schema.Literal("ats_rejection_reasons"), Schema.Literal("ats_roles"), Schema.Literal("lms_users"), Schema.Literal("lms_course_providers"), Schema.Literal("lms_skills"), Schema.Literal("lms_courses"), Schema.Literal("lms_course_revisions"), Schema.Literal("lms_course_progressions"), Schema.Literal("hris_join_employees_teams"), Schema.Literal("hris_join_staffing_entities_locations"), Schema.Literal("hris_join_staffing_entities_legal_entities"), Schema.Literal("hris_join_staffing_entities_groups"), Schema.Literal("ats_join_candidates_tags"), Schema.Literal("ats_join_jobs_application_stages"), Schema.Literal("ats_join_jobs_screening_questions"), Schema.Literal("ats_join_user_job_role_assignments"), Schema.Literal("ats_join_jobs_users"), Schema.Literal("ats_join_users_roles"), Schema.Literal("ats_join_interviews_users"), Schema.Literal("lms_join_revisions_skills")) })) }) });
export type DataChangedWebhookPayload = typeof DataChangedWebhookPayload.Type;

export const ConnectionFlowFailedWebhookPayload = Schema.Struct({ id: Schema.String, type: Schema.Literal("connection-flow-failed"), data: Schema.Struct({ integration_tool: Schema.String, integration_category: Schema.Union(Schema.Literal("HRIS"), Schema.Literal("ATS"), Schema.Literal("ASSESSMENT"), Schema.Literal("LMS")), end_user: Schema.Struct({ organization_name: Schema.String, creator_email: Schema.NullOr(Schema.String.pipe(Schema.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))), origin_id: Schema.NullOr(Schema.String) }), log_url: Schema.URL }) });
export type ConnectionFlowFailedWebhookPayload = typeof ConnectionFlowFailedWebhookPayload.Type;

export const IntegrationCreatedWebhookPayload = Schema.Struct({ id: Schema.String, type: Schema.Literal("integration-created"), data: Schema.Struct({ id: Schema.String, tool: Schema.String, category: Schema.Union(Schema.Literal("HRIS"), Schema.Literal("ATS"), Schema.Literal("ASSESSMENT"), Schema.Literal("LMS")), end_user: Schema.Struct({ organization_name: Schema.String, creator_email: Schema.NullOr(Schema.String.pipe(Schema.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))), origin_id: Schema.NullOr(Schema.String) }) }) });
export type IntegrationCreatedWebhookPayload = typeof IntegrationCreatedWebhookPayload.Type;

export const IntegrationDeletedWebhookPayload = Schema.Struct({ id: Schema.String, type: Schema.Literal("integration-deleted"), data: Schema.Struct({ id: Schema.String, tool: Schema.String, category: Schema.Union(Schema.Literal("HRIS"), Schema.Literal("ATS"), Schema.Literal("ASSESSMENT"), Schema.Literal("LMS")), end_user: Schema.Struct({ organization_name: Schema.String, creator_email: Schema.NullOr(Schema.String.pipe(Schema.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))), origin_id: Schema.NullOr(Schema.String) }), deleted_at: Schema.String }) });
export type IntegrationDeletedWebhookPayload = typeof IntegrationDeletedWebhookPayload.Type;

export const AssessmentOrderReceivedWebhookPayload = Schema.Struct({ id: Schema.String, type: Schema.Literal("assessment:order-received"), data: Schema.Struct({ id: Schema.String, package_id: Schema.String, status: Schema.Union(Schema.Literal("OPEN"), Schema.Literal("COMPLETED"), Schema.Literal("CANCELLED"), Schema.Literal("REJECTED")), integration_id: Schema.String, candidate: Schema.Struct({ remote_id: Schema.NullOr(Schema.String), email: Schema.String.pipe(Schema.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)), first_name: Schema.NullOr(Schema.String), last_name: Schema.NullOr(Schema.String), phone: Schema.NullOr(Schema.String) }), application: Schema.Struct({ remote_id: Schema.NullOr(Schema.String) }), job: Schema.Struct({ remote_id: Schema.NullOr(Schema.String), name: Schema.NullOr(Schema.String), job_code: Schema.NullOr(Schema.String), description: Schema.NullOr(Schema.String), location: Schema.NullOr(Schema.Struct({ street_1: Schema.optional(Schema.NullOr(Schema.String)), street_2: Schema.optional(Schema.NullOr(Schema.String)), city: Schema.optional(Schema.NullOr(Schema.String)), state: Schema.optional(Schema.NullOr(Schema.String)), zip_code: Schema.optional(Schema.NullOr(Schema.String)), country: Schema.optional(Schema.NullOr(Schema.String)), raw: Schema.optional(Schema.NullOr(Schema.String)) })), hiring_team: Schema.Array(Schema.Struct({ remote_id: Schema.NullOr(Schema.String), email: Schema.NullOr(Schema.String), first_name: Schema.NullOr(Schema.String), last_name: Schema.NullOr(Schema.String), hiring_team_roles: Schema.Array(Schema.Union(Schema.Literal("RECRUITER"), Schema.Literal("HIRING_MANAGER"))) })) }) }) });
export type AssessmentOrderReceivedWebhookPayload = typeof AssessmentOrderReceivedWebhookPayload.Type;

export const InlineAssessmentOrderReceivedWebhookPayload = Schema.Struct({ id: Schema.String, type: Schema.Literal("inline-assessment:order-received"), data: Schema.Struct({ id: Schema.String, package_id: Schema.String, status: Schema.Union(Schema.Literal("OPEN"), Schema.Literal("COMPLETED"), Schema.Literal("CANCELLED"), Schema.Literal("REJECTED")), integration_id: Schema.String, candidate: Schema.Struct({ remote_id: Schema.NullOr(Schema.String), email: Schema.String.pipe(Schema.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)), first_name: Schema.NullOr(Schema.String), last_name: Schema.NullOr(Schema.String), phone: Schema.NullOr(Schema.String) }), application: Schema.Struct({ remote_id: Schema.NullOr(Schema.String) }), job: Schema.Struct({ remote_id: Schema.NullOr(Schema.String), name: Schema.NullOr(Schema.String), job_code: Schema.NullOr(Schema.String), description: Schema.NullOr(Schema.String), location: Schema.NullOr(Schema.Struct({ street_1: Schema.optional(Schema.NullOr(Schema.String)), street_2: Schema.optional(Schema.NullOr(Schema.String)), city: Schema.optional(Schema.NullOr(Schema.String)), state: Schema.optional(Schema.NullOr(Schema.String)), zip_code: Schema.optional(Schema.NullOr(Schema.String)), country: Schema.optional(Schema.NullOr(Schema.String)), raw: Schema.optional(Schema.NullOr(Schema.String)) })), hiring_team: Schema.Array(Schema.Struct({ remote_id: Schema.NullOr(Schema.String), email: Schema.NullOr(Schema.String), first_name: Schema.NullOr(Schema.String), last_name: Schema.NullOr(Schema.String), hiring_team_roles: Schema.Array(Schema.Union(Schema.Literal("RECRUITER"), Schema.Literal("HIRING_MANAGER"))) })) }) }) });
export type InlineAssessmentOrderReceivedWebhookPayload = typeof InlineAssessmentOrderReceivedWebhookPayload.Type;

export const IntegrationStateChangedWebhookPayload = Schema.Struct({ id: Schema.String, type: Schema.Literal("integration-state-changed"), data: Schema.Struct({ integration_tool: Schema.String, integration_id: Schema.String, integration_category: Schema.Union(Schema.Literal("HRIS"), Schema.Literal("ATS"), Schema.Literal("ASSESSMENT"), Schema.Literal("LMS")), end_user: Schema.Struct({ organization_name: Schema.String, creator_email: Schema.NullOr(Schema.String.pipe(Schema.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))), origin_id: Schema.NullOr(Schema.String) }), qa_status: Schema.Union(Schema.Literal("PENDING"), Schema.Literal("FAILED"), Schema.Literal("PASSED")), setup_status: Schema.Union(Schema.Literal("INCOMPLETE"), Schema.Literal("FINAL_SYNC_PENDING"), Schema.Literal("COMPLETED")), state: Schema.Union(Schema.Literal("ACTIVE"), Schema.Literal("INVALID"), Schema.Literal("INACTIVE")), updated_at: Schema.String }) });
export type IntegrationStateChangedWebhookPayload = typeof IntegrationStateChangedWebhookPayload.Type;

export const AiApplyApplicationStatusUpdatedWebhookPayload = Schema.Struct({ id: Schema.String, type: Schema.Literal("ai-apply-application-status-updated"), data: Schema.Struct({ id: Schema.String, job_posting_id: Schema.String, status: Schema.Union(Schema.Literal("SUBMITTED"), Schema.Literal("DUPLICATE"), Schema.Literal("PENDING"), Schema.Literal("FAILED")), created_at: Schema.String, updated_at: Schema.String }) });
export type AiApplyApplicationStatusUpdatedWebhookPayload = typeof AiApplyApplicationStatusUpdatedWebhookPayload.Type;

export const AiApplyJobPostingStatusUpdatedWebhookPayload = Schema.Struct({ id: Schema.String, type: Schema.Literal("ai-apply-job-posting-status-updated"), data: Schema.Struct({ id: Schema.String, career_site: Schema.Struct({ id: Schema.String, label: Schema.String }), url: Schema.String, job_code: Schema.NullOr(Schema.String), created_at: Schema.String, updated_at: Schema.String, archived_at: Schema.NullOr(Schema.String), archived_reason: Schema.NullOr(Schema.Union(Schema.Literal("JOB_POSTING_TAKEN_OFFLINE"), Schema.Literal("MANUAL_ARCHIVE"), Schema.Literal("REMOVED_FROM_JOB_FEED"))), availability: Schema.Union(Schema.Literal("APPLYABLE"), Schema.Literal("PENDING"), Schema.Literal("ARCHIVED"), Schema.Literal("UNAVAILABLE")) }) });
export type AiApplyJobPostingStatusUpdatedWebhookPayload = typeof AiApplyJobPostingStatusUpdatedWebhookPayload.Type;

export const SyncFinishedWebhookPayload = Schema.Struct({ id: Schema.String, type: Schema.Literal("sync-finished"), data: Schema.Struct({ sync_id: Schema.String, sync_state: Schema.String, sync_started_at: Schema.String, sync_ended_at: Schema.String, sync_duration_seconds: Schema.Int.pipe(Schema.greaterThanOrEqualTo(0)), integration_id: Schema.String, integration_tool: Schema.String, integration_category: Schema.Union(Schema.Literal("HRIS"), Schema.Literal("ATS"), Schema.Literal("ASSESSMENT"), Schema.Literal("LMS")), end_user: Schema.Struct({ organization_name: Schema.String, creator_email: Schema.NullOr(Schema.String.pipe(Schema.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))), origin_id: Schema.NullOr(Schema.String) }), log_url: Schema.URL }) });
export type SyncFinishedWebhookPayload = typeof SyncFinishedWebhookPayload.Type;

export const BulkImportJobPostingLocation = Schema.Struct({ country: Schema.String, postal_code: Schema.optional(Schema.String) });
export type BulkImportJobPostingLocation = typeof BulkImportJobPostingLocation.Type;

export const BulkImportJobPostingInput = Schema.Struct({ url: Schema.URL, career_site_label: Schema.String, job_code: Schema.optional(Schema.String), location: Schema.optional(Schema.NullOr(BulkImportJobPostingLocation)) });
export type BulkImportJobPostingInput = typeof BulkImportJobPostingInput.Type;

export const BulkImportResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ created: Schema.Int, processed: Schema.Int, archived: Schema.Int }) });
export type BulkImportResponse = typeof BulkImportResponse.Type;

// </Schemas>

// <Endpoints>
export type get_GetCheckApiKey = typeof get_GetCheckApiKey;
export const get_GetCheckApiKey = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/check-api-key"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: Schema.Never,
  responses: { 200: GetCheckApiKeyPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type post_PostForceSync = typeof post_PostForceSync;
export const post_PostForceSync = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/force-sync"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostForceSyncRequestBody },
  responses: { 200: PostForceSyncPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type post_PostPassthroughToolApi = typeof post_PostPassthroughToolApi;
export const post_PostPassthroughToolApi = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/passthrough/{tool}/{api}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ tool: PostPassthroughToolApiParameterTool, api: PostPassthroughToolApiParameterApi }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostPassthroughToolApiRequestBody },
  responses: { 200: PostPassthroughToolApiPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type delete_DeleteIntegrationsIntegrationId = typeof delete_DeleteIntegrationsIntegrationId;
export const delete_DeleteIntegrationsIntegrationId = {
  method: Schema.Literal("DELETE"),
  path: Schema.Literal("/integrations/{integration_id}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ integration_id: DeleteIntegrationsIntegrationIdParameterIntegrationId }), body: DeleteIntegrationsIntegrationIdRequestBody },
  responses: { 200: DeleteIntegrationsIntegrationIdPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type get_GetIntegrationsIntegrationId = typeof get_GetIntegrationsIntegrationId;
export const get_GetIntegrationsIntegrationId = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/integrations/{integration_id}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ integration_id: GetIntegrationsIntegrationIdParameterIntegrationId }) },
  responses: { 200: GetIntegrationsIntegrationIdPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type put_PutIntegrationsIntegrationIdEnabled = typeof put_PutIntegrationsIntegrationIdEnabled;
export const put_PutIntegrationsIntegrationIdEnabled = {
  method: Schema.Literal("PUT"),
  path: Schema.Literal("/integrations/{integration_id}/enabled"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ integration_id: PutIntegrationsIntegrationIdEnabledParameterIntegrationId }), body: PutIntegrationsIntegrationIdEnabledRequestBody },
  responses: { 200: PutIntegrationsIntegrationIdEnabledPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type post_PostIntegrationsIntegrationIdRelink = typeof post_PostIntegrationsIntegrationIdRelink;
export const post_PostIntegrationsIntegrationIdRelink = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/integrations/{integration_id}/relink"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ integration_id: PostIntegrationsIntegrationIdRelinkParameterIntegrationId }), body: PostIntegrationsIntegrationIdRelinkRequestBody },
  responses: { 200: PostIntegrationsIntegrationIdRelinkPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type post_PostIntegrationsIntegrationIdSetupLink = typeof post_PostIntegrationsIntegrationIdSetupLink;
export const post_PostIntegrationsIntegrationIdSetupLink = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/integrations/{integration_id}/setup-link"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ integration_id: PostIntegrationsIntegrationIdSetupLinkParameterIntegrationId }), body: PostIntegrationsIntegrationIdSetupLinkRequestBody },
  responses: { 200: PostIntegrationsIntegrationIdSetupLinkPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type get_GetIntegrationsIntegrationIdIntegrationFields = typeof get_GetIntegrationsIntegrationIdIntegrationFields;
export const get_GetIntegrationsIntegrationIdIntegrationFields = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/integrations/{integration_id}/integration-fields"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetIntegrationsIntegrationIdIntegrationFieldsParameterCursor), page_size: Schema.optional(GetIntegrationsIntegrationIdIntegrationFieldsParameterPageSize) })), path: Schema.Struct({ integration_id: GetIntegrationsIntegrationIdIntegrationFieldsParameterIntegrationId }) },
  responses: { 200: GetIntegrationsIntegrationIdIntegrationFieldsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type patch_PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldId = typeof patch_PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldId;
export const patch_PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldId = {
  method: Schema.Literal("PATCH"),
  path: Schema.Literal("/integrations/{integration_id}/integration-fields/{integration_field_id}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ integration_id: PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationId, integration_field_id: PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationFieldId }), body: PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdRequestBody },
  responses: { 200: PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type get_GetIntegrationsIntegrationIdCustomFields = typeof get_GetIntegrationsIntegrationIdCustomFields;
export const get_GetIntegrationsIntegrationIdCustomFields = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/integrations/{integration_id}/custom-fields"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetIntegrationsIntegrationIdCustomFieldsParameterCursor), page_size: Schema.optional(GetIntegrationsIntegrationIdCustomFieldsParameterPageSize) })), path: Schema.Struct({ integration_id: GetIntegrationsIntegrationIdCustomFieldsParameterIntegrationId }) },
  responses: { 200: GetIntegrationsIntegrationIdCustomFieldsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type put_PutIntegrationsIntegrationIdCustomFieldsCustomFieldId = typeof put_PutIntegrationsIntegrationIdCustomFieldsCustomFieldId;
export const put_PutIntegrationsIntegrationIdCustomFieldsCustomFieldId = {
  method: Schema.Literal("PUT"),
  path: Schema.Literal("/integrations/{integration_id}/custom-fields/{custom_field_id}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ integration_id: PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterIntegrationId, custom_field_id: PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterCustomFieldId }), body: PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdRequestBody },
  responses: { 200: PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type get_GetToolsCategory = typeof get_GetToolsCategory;
export const get_GetToolsCategory = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/tools/{category}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ category: GetToolsCategoryParameterCategory }) },
  responses: { 200: GetToolsCategoryPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type post_PostHrisProvisioningGroupsGroupIdDiff = typeof post_PostHrisProvisioningGroupsGroupIdDiff;
export const post_PostHrisProvisioningGroupsGroupIdDiff = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/hris/provisioning-groups/{group_id}/diff"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ group_id: PostHrisProvisioningGroupsGroupIdDiffParameterGroupId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostHrisProvisioningGroupsGroupIdDiffRequestBody },
  responses: { 200: PostHrisProvisioningGroupsGroupIdDiffPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type post_PostHrisProvisioningGroupsGroupIdSetupLinks = typeof post_PostHrisProvisioningGroupsGroupIdSetupLinks;
export const post_PostHrisProvisioningGroupsGroupIdSetupLinks = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/hris/provisioning-groups/{group_id}/setup-links"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ group_id: PostHrisProvisioningGroupsGroupIdSetupLinksParameterGroupId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostHrisProvisioningGroupsGroupIdSetupLinksRequestBody },
  responses: { 200: PostHrisProvisioningGroupsGroupIdSetupLinksPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type get_GetHrisEmployees = typeof get_GetHrisEmployees;
export const get_GetHrisEmployees = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/hris/employees"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetHrisEmployeesParameterCursor), page_size: Schema.optional(GetHrisEmployeesParameterPageSize), updated_after: Schema.optional(GetHrisEmployeesParameterUpdatedAfter), include_deleted: Schema.optional(GetHrisEmployeesParameterIncludeDeleted), ignore_unsupported_filters: Schema.optional(GetHrisEmployeesParameterIgnoreUnsupportedFilters), ids: Schema.optional(GetHrisEmployeesParameterIds), remote_ids: Schema.optional(GetHrisEmployeesParameterRemoteIds), employment_status: Schema.optional(GetHrisEmployeesParameterEmploymentStatus), employment_statuses: Schema.optional(GetHrisEmployeesParameterEmploymentStatuses), group_ids: Schema.optional(GetHrisEmployeesParameterGroupIds), legal_entity_ids: Schema.optional(GetHrisEmployeesParameterLegalEntityIds), work_location_ids: Schema.optional(GetHrisEmployeesParameterWorkLocationIds), work_emails: Schema.optional(GetHrisEmployeesParameterWorkEmails), personal_emails: Schema.optional(GetHrisEmployeesParameterPersonalEmails), custom_fields: Schema.optional(GetHrisEmployeesParameterCustomFields) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetHrisEmployeesPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type post_PostHrisEmployees = typeof post_PostHrisEmployees;
export const post_PostHrisEmployees = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/hris/employees"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostHrisEmployeesRequestBody },
  responses: { 200: PostHrisEmployeesPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type get_GetHrisEmployeesForm = typeof get_GetHrisEmployeesForm;
export const get_GetHrisEmployeesForm = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/hris/employees/form"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetHrisEmployeesFormPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type post_PostHrisEmployeesForm = typeof post_PostHrisEmployeesForm;
export const post_PostHrisEmployeesForm = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/hris/employees/form"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostHrisEmployeesFormRequestBody },
  responses: { 200: PostHrisEmployeesFormPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type patch_PatchHrisEmployeesEmployeeId = typeof patch_PatchHrisEmployeesEmployeeId;
export const patch_PatchHrisEmployeesEmployeeId = {
  method: Schema.Literal("PATCH"),
  path: Schema.Literal("/hris/employees/{employee_id}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ employee_id: PatchHrisEmployeesEmployeeIdParameterEmployeeId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PatchHrisEmployeesEmployeeIdRequestBody },
  responses: { 200: PatchHrisEmployeesEmployeeIdPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type post_PostHrisEmployeesEmployeeIdDocuments = typeof post_PostHrisEmployeesEmployeeIdDocuments;
export const post_PostHrisEmployeesEmployeeIdDocuments = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/hris/employees/{employee_id}/documents"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ employee_id: PostHrisEmployeesEmployeeIdDocumentsParameterEmployeeId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostHrisEmployeesEmployeeIdDocumentsRequestBody },
  responses: { 200: PostHrisEmployeesEmployeeIdDocumentsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type get_GetHrisEmployeeDocumentCategories = typeof get_GetHrisEmployeeDocumentCategories;
export const get_GetHrisEmployeeDocumentCategories = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/hris/employee-document-categories"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetHrisEmployeeDocumentCategoriesParameterCursor), page_size: Schema.optional(GetHrisEmployeeDocumentCategoriesParameterPageSize), updated_after: Schema.optional(GetHrisEmployeeDocumentCategoriesParameterUpdatedAfter), include_deleted: Schema.optional(GetHrisEmployeeDocumentCategoriesParameterIncludeDeleted), ignore_unsupported_filters: Schema.optional(GetHrisEmployeeDocumentCategoriesParameterIgnoreUnsupportedFilters), ids: Schema.optional(GetHrisEmployeeDocumentCategoriesParameterIds), remote_ids: Schema.optional(GetHrisEmployeeDocumentCategoriesParameterRemoteIds) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetHrisEmployeeDocumentCategoriesPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type get_GetHrisTeams = typeof get_GetHrisTeams;
export const get_GetHrisTeams = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/hris/teams"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetHrisTeamsParameterCursor), page_size: Schema.optional(GetHrisTeamsParameterPageSize), updated_after: Schema.optional(GetHrisTeamsParameterUpdatedAfter), include_deleted: Schema.optional(GetHrisTeamsParameterIncludeDeleted), ignore_unsupported_filters: Schema.optional(GetHrisTeamsParameterIgnoreUnsupportedFilters), ids: Schema.optional(GetHrisTeamsParameterIds), remote_ids: Schema.optional(GetHrisTeamsParameterRemoteIds) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetHrisTeamsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type get_GetHrisGroups = typeof get_GetHrisGroups;
export const get_GetHrisGroups = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/hris/groups"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetHrisGroupsParameterCursor), page_size: Schema.optional(GetHrisGroupsParameterPageSize), updated_after: Schema.optional(GetHrisGroupsParameterUpdatedAfter), include_deleted: Schema.optional(GetHrisGroupsParameterIncludeDeleted), ignore_unsupported_filters: Schema.optional(GetHrisGroupsParameterIgnoreUnsupportedFilters), ids: Schema.optional(GetHrisGroupsParameterIds), remote_ids: Schema.optional(GetHrisGroupsParameterRemoteIds), types: Schema.optional(GetHrisGroupsParameterTypes), name_contains: Schema.optional(GetHrisGroupsParameterNameContains) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetHrisGroupsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type get_GetHrisEmployments = typeof get_GetHrisEmployments;
export const get_GetHrisEmployments = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/hris/employments"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetHrisEmploymentsParameterCursor), page_size: Schema.optional(GetHrisEmploymentsParameterPageSize), updated_after: Schema.optional(GetHrisEmploymentsParameterUpdatedAfter), include_deleted: Schema.optional(GetHrisEmploymentsParameterIncludeDeleted), ignore_unsupported_filters: Schema.optional(GetHrisEmploymentsParameterIgnoreUnsupportedFilters), ids: Schema.optional(GetHrisEmploymentsParameterIds), remote_ids: Schema.optional(GetHrisEmploymentsParameterRemoteIds) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetHrisEmploymentsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type get_GetHrisLocations = typeof get_GetHrisLocations;
export const get_GetHrisLocations = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/hris/locations"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetHrisLocationsParameterCursor), page_size: Schema.optional(GetHrisLocationsParameterPageSize), updated_after: Schema.optional(GetHrisLocationsParameterUpdatedAfter), include_deleted: Schema.optional(GetHrisLocationsParameterIncludeDeleted), ignore_unsupported_filters: Schema.optional(GetHrisLocationsParameterIgnoreUnsupportedFilters), ids: Schema.optional(GetHrisLocationsParameterIds), remote_ids: Schema.optional(GetHrisLocationsParameterRemoteIds), name_contains: Schema.optional(GetHrisLocationsParameterNameContains) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetHrisLocationsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type get_GetHrisAbsenceTypes = typeof get_GetHrisAbsenceTypes;
export const get_GetHrisAbsenceTypes = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/hris/absence-types"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetHrisAbsenceTypesParameterCursor), page_size: Schema.optional(GetHrisAbsenceTypesParameterPageSize), updated_after: Schema.optional(GetHrisAbsenceTypesParameterUpdatedAfter), include_deleted: Schema.optional(GetHrisAbsenceTypesParameterIncludeDeleted), ignore_unsupported_filters: Schema.optional(GetHrisAbsenceTypesParameterIgnoreUnsupportedFilters), ids: Schema.optional(GetHrisAbsenceTypesParameterIds), remote_ids: Schema.optional(GetHrisAbsenceTypesParameterRemoteIds) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetHrisAbsenceTypesPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type get_GetHrisTimeOffBalances = typeof get_GetHrisTimeOffBalances;
export const get_GetHrisTimeOffBalances = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/hris/time-off-balances"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetHrisTimeOffBalancesParameterCursor), page_size: Schema.optional(GetHrisTimeOffBalancesParameterPageSize), updated_after: Schema.optional(GetHrisTimeOffBalancesParameterUpdatedAfter), include_deleted: Schema.optional(GetHrisTimeOffBalancesParameterIncludeDeleted), ignore_unsupported_filters: Schema.optional(GetHrisTimeOffBalancesParameterIgnoreUnsupportedFilters), ids: Schema.optional(GetHrisTimeOffBalancesParameterIds), remote_ids: Schema.optional(GetHrisTimeOffBalancesParameterRemoteIds), employee_id: Schema.optional(GetHrisTimeOffBalancesParameterEmployeeId) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetHrisTimeOffBalancesPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type get_GetHrisAbsences = typeof get_GetHrisAbsences;
export const get_GetHrisAbsences = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/hris/absences"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetHrisAbsencesParameterCursor), page_size: Schema.optional(GetHrisAbsencesParameterPageSize), updated_after: Schema.optional(GetHrisAbsencesParameterUpdatedAfter), include_deleted: Schema.optional(GetHrisAbsencesParameterIncludeDeleted), ignore_unsupported_filters: Schema.optional(GetHrisAbsencesParameterIgnoreUnsupportedFilters), ids: Schema.optional(GetHrisAbsencesParameterIds), remote_ids: Schema.optional(GetHrisAbsencesParameterRemoteIds), date_from: Schema.optional(GetHrisAbsencesParameterDateFrom), date_until: Schema.optional(GetHrisAbsencesParameterDateUntil), type_ids: Schema.optional(GetHrisAbsencesParameterTypeIds), employee_id: Schema.optional(GetHrisAbsencesParameterEmployeeId), time_from: Schema.optional(GetHrisAbsencesParameterTimeFrom), time_until: Schema.optional(GetHrisAbsencesParameterTimeUntil) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetHrisAbsencesPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type post_PostHrisAbsences = typeof post_PostHrisAbsences;
export const post_PostHrisAbsences = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/hris/absences"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostHrisAbsencesRequestBody },
  responses: { 200: PostHrisAbsencesPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type delete_DeleteHrisAbsencesAbsenceId = typeof delete_DeleteHrisAbsencesAbsenceId;
export const delete_DeleteHrisAbsencesAbsenceId = {
  method: Schema.Literal("DELETE"),
  path: Schema.Literal("/hris/absences/{absence_id}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ absence_id: DeleteHrisAbsencesAbsenceIdParameterAbsenceId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: DeleteHrisAbsencesAbsenceIdRequestBody },
  responses: { 200: DeleteHrisAbsencesAbsenceIdPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type get_GetHrisLegalEntities = typeof get_GetHrisLegalEntities;
export const get_GetHrisLegalEntities = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/hris/legal-entities"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetHrisLegalEntitiesParameterCursor), page_size: Schema.optional(GetHrisLegalEntitiesParameterPageSize), updated_after: Schema.optional(GetHrisLegalEntitiesParameterUpdatedAfter), include_deleted: Schema.optional(GetHrisLegalEntitiesParameterIncludeDeleted), ignore_unsupported_filters: Schema.optional(GetHrisLegalEntitiesParameterIgnoreUnsupportedFilters), ids: Schema.optional(GetHrisLegalEntitiesParameterIds), remote_ids: Schema.optional(GetHrisLegalEntitiesParameterRemoteIds), name_contains: Schema.optional(GetHrisLegalEntitiesParameterNameContains) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetHrisLegalEntitiesPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type get_GetHrisTimesheets = typeof get_GetHrisTimesheets;
export const get_GetHrisTimesheets = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/hris/timesheets"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetHrisTimesheetsParameterCursor), page_size: Schema.optional(GetHrisTimesheetsParameterPageSize), updated_after: Schema.optional(GetHrisTimesheetsParameterUpdatedAfter), include_deleted: Schema.optional(GetHrisTimesheetsParameterIncludeDeleted), ignore_unsupported_filters: Schema.optional(GetHrisTimesheetsParameterIgnoreUnsupportedFilters), ids: Schema.optional(GetHrisTimesheetsParameterIds), remote_ids: Schema.optional(GetHrisTimesheetsParameterRemoteIds), employee_id: Schema.optional(GetHrisTimesheetsParameterEmployeeId), started_before: Schema.optional(GetHrisTimesheetsParameterStartedBefore), started_after: Schema.optional(GetHrisTimesheetsParameterStartedAfter), ended_before: Schema.optional(GetHrisTimesheetsParameterEndedBefore), ended_after: Schema.optional(GetHrisTimesheetsParameterEndedAfter) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetHrisTimesheetsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type get_GetHrisPerformanceReviewCycles = typeof get_GetHrisPerformanceReviewCycles;
export const get_GetHrisPerformanceReviewCycles = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/hris/performance-review-cycles"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetHrisPerformanceReviewCyclesParameterCursor), page_size: Schema.optional(GetHrisPerformanceReviewCyclesParameterPageSize), updated_after: Schema.optional(GetHrisPerformanceReviewCyclesParameterUpdatedAfter), include_deleted: Schema.optional(GetHrisPerformanceReviewCyclesParameterIncludeDeleted), ignore_unsupported_filters: Schema.optional(GetHrisPerformanceReviewCyclesParameterIgnoreUnsupportedFilters), ids: Schema.optional(GetHrisPerformanceReviewCyclesParameterIds), remote_ids: Schema.optional(GetHrisPerformanceReviewCyclesParameterRemoteIds) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetHrisPerformanceReviewCyclesPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type get_GetHrisPerformanceReviews = typeof get_GetHrisPerformanceReviews;
export const get_GetHrisPerformanceReviews = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/hris/performance-reviews"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetHrisPerformanceReviewsParameterCursor), page_size: Schema.optional(GetHrisPerformanceReviewsParameterPageSize), updated_after: Schema.optional(GetHrisPerformanceReviewsParameterUpdatedAfter), include_deleted: Schema.optional(GetHrisPerformanceReviewsParameterIncludeDeleted), ignore_unsupported_filters: Schema.optional(GetHrisPerformanceReviewsParameterIgnoreUnsupportedFilters), ids: Schema.optional(GetHrisPerformanceReviewsParameterIds), remote_ids: Schema.optional(GetHrisPerformanceReviewsParameterRemoteIds), types: Schema.optional(GetHrisPerformanceReviewsParameterTypes), review_cycle_ids: Schema.optional(GetHrisPerformanceReviewsParameterReviewCycleIds), reviewee_ids: Schema.optional(GetHrisPerformanceReviewsParameterRevieweeIds) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetHrisPerformanceReviewsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type get_GetHrisSkills = typeof get_GetHrisSkills;
export const get_GetHrisSkills = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/hris/skills"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ ids: Schema.optional(GetHrisSkillsParameterIds), remote_ids: Schema.optional(GetHrisSkillsParameterRemoteIds), name_contains: Schema.optional(GetHrisSkillsParameterNameContains) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetHrisSkillsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type post_PostHrisSkills = typeof post_PostHrisSkills;
export const post_PostHrisSkills = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/hris/skills"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostHrisSkillsRequestBody },
  responses: { 200: PostHrisSkillsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type patch_PatchHrisSkillsSkillId = typeof patch_PatchHrisSkillsSkillId;
export const patch_PatchHrisSkillsSkillId = {
  method: Schema.Literal("PATCH"),
  path: Schema.Literal("/hris/skills/{skill_id}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ skill_id: PatchHrisSkillsSkillIdParameterSkillId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PatchHrisSkillsSkillIdRequestBody },
  responses: { 200: PatchHrisSkillsSkillIdPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type delete_DeleteHrisSkillsSkillId = typeof delete_DeleteHrisSkillsSkillId;
export const delete_DeleteHrisSkillsSkillId = {
  method: Schema.Literal("DELETE"),
  path: Schema.Literal("/hris/skills/{skill_id}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ skill_id: DeleteHrisSkillsSkillIdParameterSkillId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: DeleteHrisSkillsSkillIdRequestBody },
  responses: { 200: DeleteHrisSkillsSkillIdPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type get_GetHrisEmployeeSkillAssignments = typeof get_GetHrisEmployeeSkillAssignments;
export const get_GetHrisEmployeeSkillAssignments = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/hris/employee-skill-assignments"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ ids: Schema.optional(GetHrisEmployeeSkillAssignmentsParameterIds), remote_ids: Schema.optional(GetHrisEmployeeSkillAssignmentsParameterRemoteIds), employee_ids: Schema.optional(GetHrisEmployeeSkillAssignmentsParameterEmployeeIds), skill_ids: Schema.optional(GetHrisEmployeeSkillAssignmentsParameterSkillIds) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetHrisEmployeeSkillAssignmentsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type post_PostHrisEmployeeSkillAssignments = typeof post_PostHrisEmployeeSkillAssignments;
export const post_PostHrisEmployeeSkillAssignments = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/hris/employee-skill-assignments"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostHrisEmployeeSkillAssignmentsRequestBody },
  responses: { 200: PostHrisEmployeeSkillAssignmentsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type patch_PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentId = typeof patch_PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentId;
export const patch_PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentId = {
  method: Schema.Literal("PATCH"),
  path: Schema.Literal("/hris/employee-skill-assignments/{employee_skill_assignment_id}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ employee_skill_assignment_id: PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody },
  responses: { 200: PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type delete_DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentId = typeof delete_DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentId;
export const delete_DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentId = {
  method: Schema.Literal("DELETE"),
  path: Schema.Literal("/hris/employee-skill-assignments/{employee_skill_assignment_id}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ employee_skill_assignment_id: DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody },
  responses: { 200: DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type get_GetHrisStaffingEntities = typeof get_GetHrisStaffingEntities;
export const get_GetHrisStaffingEntities = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/hris/staffing-entities"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetHrisStaffingEntitiesParameterCursor), page_size: Schema.optional(GetHrisStaffingEntitiesParameterPageSize), updated_after: Schema.optional(GetHrisStaffingEntitiesParameterUpdatedAfter), include_deleted: Schema.optional(GetHrisStaffingEntitiesParameterIncludeDeleted), ignore_unsupported_filters: Schema.optional(GetHrisStaffingEntitiesParameterIgnoreUnsupportedFilters), ids: Schema.optional(GetHrisStaffingEntitiesParameterIds), remote_ids: Schema.optional(GetHrisStaffingEntitiesParameterRemoteIds), model_types: Schema.optional(GetHrisStaffingEntitiesParameterModelTypes), statuses: Schema.optional(GetHrisStaffingEntitiesParameterStatuses) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetHrisStaffingEntitiesPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type get_GetAtsApplications = typeof get_GetAtsApplications;
export const get_GetAtsApplications = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/ats/applications"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetAtsApplicationsParameterCursor), page_size: Schema.optional(GetAtsApplicationsParameterPageSize), updated_after: Schema.optional(GetAtsApplicationsParameterUpdatedAfter), include_deleted: Schema.optional(GetAtsApplicationsParameterIncludeDeleted), ignore_unsupported_filters: Schema.optional(GetAtsApplicationsParameterIgnoreUnsupportedFilters), ids: Schema.optional(GetAtsApplicationsParameterIds), remote_ids: Schema.optional(GetAtsApplicationsParameterRemoteIds), outcome: Schema.optional(GetAtsApplicationsParameterOutcome), outcomes: Schema.optional(GetAtsApplicationsParameterOutcomes), job_ids: Schema.optional(GetAtsApplicationsParameterJobIds), job_remote_ids: Schema.optional(GetAtsApplicationsParameterJobRemoteIds), current_stage_ids: Schema.optional(GetAtsApplicationsParameterCurrentStageIds), remote_created_after: Schema.optional(GetAtsApplicationsParameterRemoteCreatedAfter) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetAtsApplicationsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("ATS.JOB_CLOSED"), Schema.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type put_PutAtsApplicationsApplicationIdStage = typeof put_PutAtsApplicationsApplicationIdStage;
export const put_PutAtsApplicationsApplicationIdStage = {
  method: Schema.Literal("PUT"),
  path: Schema.Literal("/ats/applications/{application_id}/stage"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ application_id: PutAtsApplicationsApplicationIdStageParameterApplicationId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PutAtsApplicationsApplicationIdStageRequestBody },
  responses: { 200: PutAtsApplicationsApplicationIdStagePositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("ATS.JOB_CLOSED"), Schema.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type post_PostAtsApplicationsApplicationIdResultLinks = typeof post_PostAtsApplicationsApplicationIdResultLinks;
export const post_PostAtsApplicationsApplicationIdResultLinks = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/ats/applications/{application_id}/result-links"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ application_id: PostAtsApplicationsApplicationIdResultLinksParameterApplicationId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostAtsApplicationsApplicationIdResultLinksRequestBody },
  responses: { 200: PostAtsApplicationsApplicationIdResultLinksPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("ATS.JOB_CLOSED"), Schema.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type post_PostAtsApplicationsApplicationIdNotes = typeof post_PostAtsApplicationsApplicationIdNotes;
export const post_PostAtsApplicationsApplicationIdNotes = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/ats/applications/{application_id}/notes"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ application_id: PostAtsApplicationsApplicationIdNotesParameterApplicationId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostAtsApplicationsApplicationIdNotesRequestBody },
  responses: { 200: PostAtsApplicationsApplicationIdNotesPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("ATS.JOB_CLOSED"), Schema.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type get_GetAtsApplicationsApplicationIdAttachments = typeof get_GetAtsApplicationsApplicationIdAttachments;
export const get_GetAtsApplicationsApplicationIdAttachments = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/ats/applications/{application_id}/attachments"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ application_id: GetAtsApplicationsApplicationIdAttachmentsParameterApplicationId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetAtsApplicationsApplicationIdAttachmentsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("ATS.JOB_CLOSED"), Schema.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type post_PostAtsApplicationsApplicationIdAttachments = typeof post_PostAtsApplicationsApplicationIdAttachments;
export const post_PostAtsApplicationsApplicationIdAttachments = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/ats/applications/{application_id}/attachments"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ application_id: PostAtsApplicationsApplicationIdAttachmentsParameterApplicationId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostAtsApplicationsApplicationIdAttachmentsRequestBody },
  responses: { 200: PostAtsApplicationsApplicationIdAttachmentsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("ATS.JOB_CLOSED"), Schema.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type post_PostAtsApplicationsApplicationIdReject = typeof post_PostAtsApplicationsApplicationIdReject;
export const post_PostAtsApplicationsApplicationIdReject = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/ats/applications/{application_id}/reject"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ application_id: PostAtsApplicationsApplicationIdRejectParameterApplicationId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostAtsApplicationsApplicationIdRejectRequestBody },
  responses: { 200: PostAtsApplicationsApplicationIdRejectPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("ATS.JOB_CLOSED"), Schema.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type post_PostAtsApplicationsApplicationIdInterviews = typeof post_PostAtsApplicationsApplicationIdInterviews;
export const post_PostAtsApplicationsApplicationIdInterviews = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/ats/applications/{application_id}/interviews"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ application_id: PostAtsApplicationsApplicationIdInterviewsParameterApplicationId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostAtsApplicationsApplicationIdInterviewsRequestBody },
  responses: { 200: PostAtsApplicationsApplicationIdInterviewsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("ATS.JOB_CLOSED"), Schema.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type patch_PatchAtsApplicationsApplicationIdInterviews = typeof patch_PatchAtsApplicationsApplicationIdInterviews;
export const patch_PatchAtsApplicationsApplicationIdInterviews = {
  method: Schema.Literal("PATCH"),
  path: Schema.Literal("/ats/applications/{application_id}/interviews"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ application_id: PatchAtsApplicationsApplicationIdInterviewsParameterApplicationId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PatchAtsApplicationsApplicationIdInterviewsRequestBody },
  responses: { 200: PatchAtsApplicationsApplicationIdInterviewsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("ATS.JOB_CLOSED"), Schema.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type get_GetAtsCandidates = typeof get_GetAtsCandidates;
export const get_GetAtsCandidates = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/ats/candidates"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetAtsCandidatesParameterCursor), page_size: Schema.optional(GetAtsCandidatesParameterPageSize), updated_after: Schema.optional(GetAtsCandidatesParameterUpdatedAfter), include_deleted: Schema.optional(GetAtsCandidatesParameterIncludeDeleted), ignore_unsupported_filters: Schema.optional(GetAtsCandidatesParameterIgnoreUnsupportedFilters), ids: Schema.optional(GetAtsCandidatesParameterIds), remote_ids: Schema.optional(GetAtsCandidatesParameterRemoteIds), email: Schema.optional(GetAtsCandidatesParameterEmail), job_ids: Schema.optional(GetAtsCandidatesParameterJobIds), first_name: Schema.optional(GetAtsCandidatesParameterFirstName), last_name: Schema.optional(GetAtsCandidatesParameterLastName) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetAtsCandidatesPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("ATS.JOB_CLOSED"), Schema.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type post_PostAtsCandidates = typeof post_PostAtsCandidates;
export const post_PostAtsCandidates = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/ats/candidates"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostAtsCandidatesRequestBody },
  responses: { 200: PostAtsCandidatesPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("ATS.JOB_CLOSED"), Schema.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type get_GetAtsCandidatesCandidateIdAttachments = typeof get_GetAtsCandidatesCandidateIdAttachments;
export const get_GetAtsCandidatesCandidateIdAttachments = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/ats/candidates/{candidate_id}/attachments"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ candidate_id: GetAtsCandidatesCandidateIdAttachmentsParameterCandidateId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetAtsCandidatesCandidateIdAttachmentsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("ATS.JOB_CLOSED"), Schema.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type post_PostAtsCandidatesCandidateIdAttachments = typeof post_PostAtsCandidatesCandidateIdAttachments;
export const post_PostAtsCandidatesCandidateIdAttachments = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/ats/candidates/{candidate_id}/attachments"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ candidate_id: PostAtsCandidatesCandidateIdAttachmentsParameterCandidateId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostAtsCandidatesCandidateIdAttachmentsRequestBody },
  responses: { 200: PostAtsCandidatesCandidateIdAttachmentsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("ATS.JOB_CLOSED"), Schema.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type post_PostAtsCandidatesCandidateIdResultLinks = typeof post_PostAtsCandidatesCandidateIdResultLinks;
export const post_PostAtsCandidatesCandidateIdResultLinks = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/ats/candidates/{candidate_id}/result-links"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ candidate_id: PostAtsCandidatesCandidateIdResultLinksParameterCandidateId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostAtsCandidatesCandidateIdResultLinksRequestBody },
  responses: { 200: PostAtsCandidatesCandidateIdResultLinksPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("ATS.JOB_CLOSED"), Schema.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type post_PostAtsCandidatesCandidateIdTags = typeof post_PostAtsCandidatesCandidateIdTags;
export const post_PostAtsCandidatesCandidateIdTags = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/ats/candidates/{candidate_id}/tags"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ candidate_id: PostAtsCandidatesCandidateIdTagsParameterCandidateId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostAtsCandidatesCandidateIdTagsRequestBody },
  responses: { 200: PostAtsCandidatesCandidateIdTagsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("ATS.JOB_CLOSED"), Schema.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type delete_DeleteAtsCandidatesCandidateIdTags = typeof delete_DeleteAtsCandidatesCandidateIdTags;
export const delete_DeleteAtsCandidatesCandidateIdTags = {
  method: Schema.Literal("DELETE"),
  path: Schema.Literal("/ats/candidates/{candidate_id}/tags"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ candidate_id: DeleteAtsCandidatesCandidateIdTagsParameterCandidateId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: DeleteAtsCandidatesCandidateIdTagsRequestBody },
  responses: { 200: DeleteAtsCandidatesCandidateIdTagsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("ATS.JOB_CLOSED"), Schema.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type get_GetAtsTags = typeof get_GetAtsTags;
export const get_GetAtsTags = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/ats/tags"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetAtsTagsParameterCursor), page_size: Schema.optional(GetAtsTagsParameterPageSize), updated_after: Schema.optional(GetAtsTagsParameterUpdatedAfter), include_deleted: Schema.optional(GetAtsTagsParameterIncludeDeleted), ignore_unsupported_filters: Schema.optional(GetAtsTagsParameterIgnoreUnsupportedFilters), ids: Schema.optional(GetAtsTagsParameterIds), remote_ids: Schema.optional(GetAtsTagsParameterRemoteIds) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetAtsTagsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("ATS.JOB_CLOSED"), Schema.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type get_GetAtsApplicationStages = typeof get_GetAtsApplicationStages;
export const get_GetAtsApplicationStages = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/ats/application-stages"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetAtsApplicationStagesParameterCursor), page_size: Schema.optional(GetAtsApplicationStagesParameterPageSize), updated_after: Schema.optional(GetAtsApplicationStagesParameterUpdatedAfter), include_deleted: Schema.optional(GetAtsApplicationStagesParameterIncludeDeleted), ignore_unsupported_filters: Schema.optional(GetAtsApplicationStagesParameterIgnoreUnsupportedFilters), ids: Schema.optional(GetAtsApplicationStagesParameterIds), remote_ids: Schema.optional(GetAtsApplicationStagesParameterRemoteIds) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetAtsApplicationStagesPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("ATS.JOB_CLOSED"), Schema.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type get_GetAtsJobs = typeof get_GetAtsJobs;
export const get_GetAtsJobs = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/ats/jobs"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetAtsJobsParameterCursor), page_size: Schema.optional(GetAtsJobsParameterPageSize), updated_after: Schema.optional(GetAtsJobsParameterUpdatedAfter), include_deleted: Schema.optional(GetAtsJobsParameterIncludeDeleted), ignore_unsupported_filters: Schema.optional(GetAtsJobsParameterIgnoreUnsupportedFilters), ids: Schema.optional(GetAtsJobsParameterIds), remote_ids: Schema.optional(GetAtsJobsParameterRemoteIds), job_codes: Schema.optional(GetAtsJobsParameterJobCodes), post_url: Schema.optional(GetAtsJobsParameterPostUrl), status: Schema.optional(GetAtsJobsParameterStatus), statuses: Schema.optional(GetAtsJobsParameterStatuses), employment_types: Schema.optional(GetAtsJobsParameterEmploymentTypes), visibilities: Schema.optional(GetAtsJobsParameterVisibilities), remote_created_after: Schema.optional(GetAtsJobsParameterRemoteCreatedAfter), name_contains: Schema.optional(GetAtsJobsParameterNameContains) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetAtsJobsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("ATS.JOB_CLOSED"), Schema.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type post_PostAtsJobsJobIdApplications = typeof post_PostAtsJobsJobIdApplications;
export const post_PostAtsJobsJobIdApplications = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/ats/jobs/{job_id}/applications"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ job_id: PostAtsJobsJobIdApplicationsParameterJobId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostAtsJobsJobIdApplicationsRequestBody },
  responses: { 200: PostAtsJobsJobIdApplicationsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("ATS.JOB_CLOSED"), Schema.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type get_GetAtsUsers = typeof get_GetAtsUsers;
export const get_GetAtsUsers = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/ats/users"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetAtsUsersParameterCursor), page_size: Schema.optional(GetAtsUsersParameterPageSize), updated_after: Schema.optional(GetAtsUsersParameterUpdatedAfter), include_deleted: Schema.optional(GetAtsUsersParameterIncludeDeleted), ignore_unsupported_filters: Schema.optional(GetAtsUsersParameterIgnoreUnsupportedFilters), ids: Schema.optional(GetAtsUsersParameterIds), remote_ids: Schema.optional(GetAtsUsersParameterRemoteIds), emails: Schema.optional(GetAtsUsersParameterEmails) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetAtsUsersPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("ATS.JOB_CLOSED"), Schema.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type get_GetAtsRoles = typeof get_GetAtsRoles;
export const get_GetAtsRoles = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/ats/roles"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetAtsRolesParameterCursor), page_size: Schema.optional(GetAtsRolesParameterPageSize), updated_after: Schema.optional(GetAtsRolesParameterUpdatedAfter), include_deleted: Schema.optional(GetAtsRolesParameterIncludeDeleted), ignore_unsupported_filters: Schema.optional(GetAtsRolesParameterIgnoreUnsupportedFilters), ids: Schema.optional(GetAtsRolesParameterIds), remote_ids: Schema.optional(GetAtsRolesParameterRemoteIds), scopes: Schema.optional(GetAtsRolesParameterScopes) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetAtsRolesPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("ATS.JOB_CLOSED"), Schema.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type get_GetAtsOffers = typeof get_GetAtsOffers;
export const get_GetAtsOffers = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/ats/offers"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetAtsOffersParameterCursor), page_size: Schema.optional(GetAtsOffersParameterPageSize), updated_after: Schema.optional(GetAtsOffersParameterUpdatedAfter), include_deleted: Schema.optional(GetAtsOffersParameterIncludeDeleted), ignore_unsupported_filters: Schema.optional(GetAtsOffersParameterIgnoreUnsupportedFilters), ids: Schema.optional(GetAtsOffersParameterIds), remote_ids: Schema.optional(GetAtsOffersParameterRemoteIds) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetAtsOffersPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("ATS.JOB_CLOSED"), Schema.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type get_GetAtsRejectionReasons = typeof get_GetAtsRejectionReasons;
export const get_GetAtsRejectionReasons = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/ats/rejection-reasons"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetAtsRejectionReasonsParameterCursor), page_size: Schema.optional(GetAtsRejectionReasonsParameterPageSize), updated_after: Schema.optional(GetAtsRejectionReasonsParameterUpdatedAfter), include_deleted: Schema.optional(GetAtsRejectionReasonsParameterIncludeDeleted), ignore_unsupported_filters: Schema.optional(GetAtsRejectionReasonsParameterIgnoreUnsupportedFilters), ids: Schema.optional(GetAtsRejectionReasonsParameterIds), remote_ids: Schema.optional(GetAtsRejectionReasonsParameterRemoteIds) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetAtsRejectionReasonsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("ATS.JOB_CLOSED"), Schema.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type get_GetAtsInterviews = typeof get_GetAtsInterviews;
export const get_GetAtsInterviews = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/ats/interviews"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetAtsInterviewsParameterCursor), page_size: Schema.optional(GetAtsInterviewsParameterPageSize), updated_after: Schema.optional(GetAtsInterviewsParameterUpdatedAfter), include_deleted: Schema.optional(GetAtsInterviewsParameterIncludeDeleted), ignore_unsupported_filters: Schema.optional(GetAtsInterviewsParameterIgnoreUnsupportedFilters), ids: Schema.optional(GetAtsInterviewsParameterIds), remote_ids: Schema.optional(GetAtsInterviewsParameterRemoteIds), job_ids: Schema.optional(GetAtsInterviewsParameterJobIds) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetAtsInterviewsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("ATS.JOB_CLOSED"), Schema.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type get_GetAtsActionsAtsCreateCandidate = typeof get_GetAtsActionsAtsCreateCandidate;
export const get_GetAtsActionsAtsCreateCandidate = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/ats/actions/ats_create_candidate"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetAtsActionsAtsCreateCandidatePositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("ATS.JOB_CLOSED"), Schema.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type get_GetAtsActionsAtsCreateApplication = typeof get_GetAtsActionsAtsCreateApplication;
export const get_GetAtsActionsAtsCreateApplication = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/ats/actions/ats_create_application"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetAtsActionsAtsCreateApplicationPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("ATS.JOB_CLOSED"), Schema.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type get_GetAtsActionsAtsAddApplicationAttachment = typeof get_GetAtsActionsAtsAddApplicationAttachment;
export const get_GetAtsActionsAtsAddApplicationAttachment = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/ats/actions/ats_add_application_attachment"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetAtsActionsAtsAddApplicationAttachmentPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("ATS.JOB_CLOSED"), Schema.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type get_GetAtsActionsAtsAddCandidateAttachment = typeof get_GetAtsActionsAtsAddCandidateAttachment;
export const get_GetAtsActionsAtsAddCandidateAttachment = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/ats/actions/ats_add_candidate_attachment"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetAtsActionsAtsAddCandidateAttachmentPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("ATS.JOB_CLOSED"), Schema.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type post_PostAtsImportTrackedApplication = typeof post_PostAtsImportTrackedApplication;
export const post_PostAtsImportTrackedApplication = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/ats/import-tracked-application"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostAtsImportTrackedApplicationRequestBody },
  responses: { 200: PostAtsImportTrackedApplicationPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("ATS.JOB_CLOSED"), Schema.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type post_PostAtsCustomAvionteSyncedJobs = typeof post_PostAtsCustomAvionteSyncedJobs;
export const post_PostAtsCustomAvionteSyncedJobs = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/ats/custom/avionte/synced-jobs"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostAtsCustomAvionteSyncedJobsRequestBody },
  responses: { 200: PostAtsCustomAvionteSyncedJobsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type delete_DeleteAtsCustomAvionteSyncedJobsJobRemoteId = typeof delete_DeleteAtsCustomAvionteSyncedJobsJobRemoteId;
export const delete_DeleteAtsCustomAvionteSyncedJobsJobRemoteId = {
  method: Schema.Literal("DELETE"),
  path: Schema.Literal("/ats/custom/avionte/synced-jobs/{job_remote_id}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ job_remote_id: DeleteAtsCustomAvionteSyncedJobsJobRemoteIdParameterJobRemoteId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: DeleteAtsCustomAvionteSyncedJobsJobRemoteIdRequestBody },
  responses: { 200: DeleteAtsCustomAvionteSyncedJobsJobRemoteIdPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type get_GetAssessmentPackages = typeof get_GetAssessmentPackages;
export const get_GetAssessmentPackages = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/assessment/packages"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetAssessmentPackagesPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("ATS.JOB_CLOSED"), Schema.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type put_PutAssessmentPackages = typeof put_PutAssessmentPackages;
export const put_PutAssessmentPackages = {
  method: Schema.Literal("PUT"),
  path: Schema.Literal("/assessment/packages"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PutAssessmentPackagesRequestBody },
  responses: { 200: PutAssessmentPackagesPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("ATS.JOB_CLOSED"), Schema.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type get_GetAssessmentOrders = typeof get_GetAssessmentOrders;
export const get_GetAssessmentOrders = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/assessment/orders"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetAssessmentOrdersParameterCursor), page_size: Schema.optional(GetAssessmentOrdersParameterPageSize), ids: Schema.optional(GetAssessmentOrdersParameterIds), statuses: Schema.optional(GetAssessmentOrdersParameterStatuses), created_after: Schema.optional(GetAssessmentOrdersParameterCreatedAfter) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetAssessmentOrdersPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("ATS.JOB_CLOSED"), Schema.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type get_GetAssessmentOrdersOpen = typeof get_GetAssessmentOrdersOpen;
export const get_GetAssessmentOrdersOpen = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/assessment/orders/open"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetAssessmentOrdersOpenParameterCursor), page_size: Schema.optional(GetAssessmentOrdersOpenParameterPageSize) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetAssessmentOrdersOpenPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("ATS.JOB_CLOSED"), Schema.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type put_PutAssessmentOrdersAssessmentOrderIdResult = typeof put_PutAssessmentOrdersAssessmentOrderIdResult;
export const put_PutAssessmentOrdersAssessmentOrderIdResult = {
  method: Schema.Literal("PUT"),
  path: Schema.Literal("/assessment/orders/{assessment_order_id}/result"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ assessment_order_id: PutAssessmentOrdersAssessmentOrderIdResultParameterAssessmentOrderId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PutAssessmentOrdersAssessmentOrderIdResultRequestBody },
  responses: { 200: PutAssessmentOrdersAssessmentOrderIdResultPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("INTEGRATION.PERMISSION_MISSING"), Schema.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Schema.Literal("INTEGRATION.QA_FAILED"), Schema.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Schema.Literal("INTEGRATION.SETUP_INCOMPLETE"), Schema.Literal("INTEGRATION.INACTIVE"), Schema.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.MODEL_DISABLED"), Schema.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Schema.Literal("INTEGRATION.ACTION_DISABLED"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("ATS.JOB_CLOSED"), Schema.Literal("ATS.APPLICATION_ALREADY_EXISTS"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type get_GetLmsUsers = typeof get_GetLmsUsers;
export const get_GetLmsUsers = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/lms/users"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetLmsUsersParameterCursor), page_size: Schema.optional(GetLmsUsersParameterPageSize), updated_after: Schema.optional(GetLmsUsersParameterUpdatedAfter), include_deleted: Schema.optional(GetLmsUsersParameterIncludeDeleted), ignore_unsupported_filters: Schema.optional(GetLmsUsersParameterIgnoreUnsupportedFilters), ids: Schema.optional(GetLmsUsersParameterIds), remote_ids: Schema.optional(GetLmsUsersParameterRemoteIds), work_emails: Schema.optional(GetLmsUsersParameterWorkEmails) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetLmsUsersPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type get_GetLmsCourseProgressions = typeof get_GetLmsCourseProgressions;
export const get_GetLmsCourseProgressions = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/lms/course-progressions"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetLmsCourseProgressionsParameterCursor), page_size: Schema.optional(GetLmsCourseProgressionsParameterPageSize), updated_after: Schema.optional(GetLmsCourseProgressionsParameterUpdatedAfter), include_deleted: Schema.optional(GetLmsCourseProgressionsParameterIncludeDeleted), ignore_unsupported_filters: Schema.optional(GetLmsCourseProgressionsParameterIgnoreUnsupportedFilters), ids: Schema.optional(GetLmsCourseProgressionsParameterIds), remote_ids: Schema.optional(GetLmsCourseProgressionsParameterRemoteIds), user_ids: Schema.optional(GetLmsCourseProgressionsParameterUserIds), course_ids: Schema.optional(GetLmsCourseProgressionsParameterCourseIds) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetLmsCourseProgressionsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type post_PostLmsCourseProgressions = typeof post_PostLmsCourseProgressions;
export const post_PostLmsCourseProgressions = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/lms/course-progressions"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostLmsCourseProgressionsRequestBody },
  responses: { 200: PostLmsCourseProgressionsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type post_PostLmsCourseProgressionsCourseProgressionIdComplete = typeof post_PostLmsCourseProgressionsCourseProgressionIdComplete;
export const post_PostLmsCourseProgressionsCourseProgressionIdComplete = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/lms/course-progressions/{course_progression_id}/complete"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ course_progression_id: PostLmsCourseProgressionsCourseProgressionIdCompleteParameterCourseProgressionId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostLmsCourseProgressionsCourseProgressionIdCompleteRequestBody },
  responses: { 200: PostLmsCourseProgressionsCourseProgressionIdCompletePositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type get_GetLmsCourses = typeof get_GetLmsCourses;
export const get_GetLmsCourses = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/lms/courses"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetLmsCoursesParameterCursor), page_size: Schema.optional(GetLmsCoursesParameterPageSize), updated_after: Schema.optional(GetLmsCoursesParameterUpdatedAfter), include_deleted: Schema.optional(GetLmsCoursesParameterIncludeDeleted), ignore_unsupported_filters: Schema.optional(GetLmsCoursesParameterIgnoreUnsupportedFilters), ids: Schema.optional(GetLmsCoursesParameterIds), remote_ids: Schema.optional(GetLmsCoursesParameterRemoteIds) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetLmsCoursesPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type post_PostLmsCoursesBulk = typeof post_PostLmsCoursesBulk;
export const post_PostLmsCoursesBulk = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/lms/courses/bulk"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostLmsCoursesBulkRequestBody },
  responses: { 200: PostLmsCoursesBulkPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type get_GetLmsCoursesBulkTaskId = typeof get_GetLmsCoursesBulkTaskId;
export const get_GetLmsCoursesBulkTaskId = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/lms/courses/bulk/{task_id}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ task_id: GetLmsCoursesBulkTaskIdParameterTaskId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetLmsCoursesBulkTaskIdPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type post_PostLmsCoursesCourseIdDeactivate = typeof post_PostLmsCoursesCourseIdDeactivate;
export const post_PostLmsCoursesCourseIdDeactivate = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/lms/courses/{course_id}/deactivate"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ course_id: PostLmsCoursesCourseIdDeactivateParameterCourseId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostLmsCoursesCourseIdDeactivateRequestBody },
  responses: { 200: PostLmsCoursesCourseIdDeactivatePositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type get_GetLmsSkills = typeof get_GetLmsSkills;
export const get_GetLmsSkills = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/lms/skills"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetLmsSkillsParameterCursor), page_size: Schema.optional(GetLmsSkillsParameterPageSize), updated_after: Schema.optional(GetLmsSkillsParameterUpdatedAfter), include_deleted: Schema.optional(GetLmsSkillsParameterIncludeDeleted), ignore_unsupported_filters: Schema.optional(GetLmsSkillsParameterIgnoreUnsupportedFilters), ids: Schema.optional(GetLmsSkillsParameterIds), remote_ids: Schema.optional(GetLmsSkillsParameterRemoteIds) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetLmsSkillsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type post_PostAiApplyCareerSites = typeof post_PostAiApplyCareerSites;
export const post_PostAiApplyCareerSites = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/ai-apply/career-sites"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { body: PostAiApplyCareerSitesRequestBody },
  responses: { 200: PostAiApplyCareerSitesPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING"), Schema.Literal("AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type get_GetAiApplyCareerSites = typeof get_GetAiApplyCareerSites;
export const get_GetAiApplyCareerSites = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/ai-apply/career-sites"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetAiApplyCareerSitesParameterCursor), page_size: Schema.optional(GetAiApplyCareerSitesParameterPageSize), ids: Schema.optional(GetAiApplyCareerSitesParameterIds) })) },
  responses: { 200: GetAiApplyCareerSitesPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING"), Schema.Literal("AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type get_GetAiApplyPostings = typeof get_GetAiApplyPostings;
export const get_GetAiApplyPostings = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/ai-apply/postings"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetAiApplyPostingsParameterCursor), page_size: Schema.optional(GetAiApplyPostingsParameterPageSize), ids: Schema.optional(GetAiApplyPostingsParameterIds), career_site_ids: Schema.optional(GetAiApplyPostingsParameterCareerSiteIds), job_codes: Schema.optional(GetAiApplyPostingsParameterJobCodes) })) },
  responses: { 200: GetAiApplyPostingsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING"), Schema.Literal("AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type post_PostAiApplyPostings = typeof post_PostAiApplyPostings;
export const post_PostAiApplyPostings = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/ai-apply/postings"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { body: PostAiApplyPostingsRequestBody },
  responses: { 200: PostAiApplyPostingsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING"), Schema.Literal("AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type post_PostAiApplyPostingsPostingIdInquire = typeof post_PostAiApplyPostingsPostingIdInquire;
export const post_PostAiApplyPostingsPostingIdInquire = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/ai-apply/postings/{posting_id}/inquire"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ posting_id: PostAiApplyPostingsPostingIdInquireParameterPostingId }), body: PostAiApplyPostingsPostingIdInquireRequestBody },
  responses: { 200: PostAiApplyPostingsPostingIdInquirePositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING"), Schema.Literal("AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type post_PostAiApplyApply = typeof post_PostAiApplyApply;
export const post_PostAiApplyApply = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/ai-apply/apply"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { body: PostAiApplyApplyRequestBody },
  responses: { 200: PostAiApplyApplyPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING"), Schema.Literal("AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type get_GetAiApplyApplications = typeof get_GetAiApplyApplications;
export const get_GetAiApplyApplications = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/ai-apply/applications"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetAiApplyApplicationsParameterCursor), page_size: Schema.optional(GetAiApplyApplicationsParameterPageSize), ids: Schema.optional(GetAiApplyApplicationsParameterIds), job_posting_ids: Schema.optional(GetAiApplyApplicationsParameterJobPostingIds) })) },
  responses: { 200: GetAiApplyApplicationsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING"), Schema.Literal("AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type get_GetAiApplyUnifiedApiJobs = typeof get_GetAiApplyUnifiedApiJobs;
export const get_GetAiApplyUnifiedApiJobs = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/ai-apply/unified-api/jobs"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetAiApplyUnifiedApiJobsParameterCursor), page_size: Schema.optional(GetAiApplyUnifiedApiJobsParameterPageSize), ids: Schema.optional(GetAiApplyUnifiedApiJobsParameterIds), remote_ids: Schema.optional(GetAiApplyUnifiedApiJobsParameterRemoteIds), job_codes: Schema.optional(GetAiApplyUnifiedApiJobsParameterJobCodes), career_site_ids: Schema.optional(GetAiApplyUnifiedApiJobsParameterCareerSiteIds) })) },
  responses: { 200: GetAiApplyUnifiedApiJobsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING"), Schema.Literal("AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type post_PostAiApplyUnifiedApiJobsJobIdApplications = typeof post_PostAiApplyUnifiedApiJobsJobIdApplications;
export const post_PostAiApplyUnifiedApiJobsJobIdApplications = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/ai-apply/unified-api/jobs/{job_id}/applications"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ job_id: PostAiApplyUnifiedApiJobsJobIdApplicationsParameterJobId }), body: PostAiApplyUnifiedApiJobsJobIdApplicationsRequestBody },
  responses: { 200: PostAiApplyUnifiedApiJobsJobIdApplicationsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING"), Schema.Literal("AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type get_GetAiApplyJobFeeds = typeof get_GetAiApplyJobFeeds;
export const get_GetAiApplyJobFeeds = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/ai-apply/job-feeds"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetAiApplyJobFeedsParameterCursor), page_size: Schema.optional(GetAiApplyJobFeedsParameterPageSize), ids: Schema.optional(GetAiApplyJobFeedsParameterIds) })) },
  responses: { 200: GetAiApplyJobFeedsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING"), Schema.Literal("AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type post_PostAiApplyJobFeeds = typeof post_PostAiApplyJobFeeds;
export const post_PostAiApplyJobFeeds = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/ai-apply/job-feeds"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { body: PostAiApplyJobFeedsRequestBody },
  responses: { 200: PostAiApplyJobFeedsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING"), Schema.Literal("AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type post_PostConnectCreateLink = typeof post_PostConnectCreateLink;
export const post_PostConnectCreateLink = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/connect/create-link"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { body: PostConnectCreateLinkRequestBody },
  responses: { 200: PostConnectCreateLinkPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type get_GetConnectIntegrationByTokenToken = typeof get_GetConnectIntegrationByTokenToken;
export const get_GetConnectIntegrationByTokenToken = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/connect/integration-by-token/{token}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ token: GetConnectIntegrationByTokenTokenParameterToken }) },
  responses: { 200: GetConnectIntegrationByTokenTokenPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type post_PostConnectActivateIntegration = typeof post_PostConnectActivateIntegration;
export const post_PostConnectActivateIntegration = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/connect/activate-integration"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { body: PostConnectActivateIntegrationRequestBody },
  responses: { 200: PostConnectActivateIntegrationPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type get_GetCustomDatevSystemInformation = typeof get_GetCustomDatevSystemInformation;
export const get_GetCustomDatevSystemInformation = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/custom/datev/system-information"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetCustomDatevSystemInformationPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type post_PostCustomDatevPassthrough = typeof post_PostCustomDatevPassthrough;
export const post_PostCustomDatevPassthrough = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/custom/datev/passthrough"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostCustomDatevPassthroughRequestBody },
  responses: { 200: PostCustomDatevPassthroughPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type get_GetCustomDatevCheckEauPermission = typeof get_GetCustomDatevCheckEauPermission;
export const get_GetCustomDatevCheckEauPermission = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/custom/datev/check-eau-permission"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetCustomDatevCheckEauPermissionPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type get_GetCustomDatevEauRequestsEauId = typeof get_GetCustomDatevEauRequestsEauId;
export const get_GetCustomDatevEauRequestsEauId = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/custom/datev/eau-requests/{eau_id}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ eau_id: GetCustomDatevEauRequestsEauIdParameterEauId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetCustomDatevEauRequestsEauIdPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type get_GetCustomDatevCheckDocumentPermission = typeof get_GetCustomDatevCheckDocumentPermission;
export const get_GetCustomDatevCheckDocumentPermission = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/custom/datev/check-document-permission"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetCustomDatevCheckDocumentPermissionPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type get_GetCustomDatevAvailableDocuments = typeof get_GetCustomDatevAvailableDocuments;
export const get_GetCustomDatevAvailableDocuments = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/custom/datev/available-documents"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.Struct({ period: GetCustomDatevAvailableDocumentsParameterPeriod }), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetCustomDatevAvailableDocumentsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type post_PostCustomDatevDownloadDocument = typeof post_PostCustomDatevDownloadDocument;
export const post_PostCustomDatevDownloadDocument = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/custom/datev/download-document"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostCustomDatevDownloadDocumentRequestBody },
  responses: { 200: PostCustomDatevDownloadDocumentPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type post_PostCustomDatevEmployeesEmployeeIdDownloadDocument = typeof post_PostCustomDatevEmployeesEmployeeIdDownloadDocument;
export const post_PostCustomDatevEmployeesEmployeeIdDownloadDocument = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/custom/datev/employees/{employee_id}/download-document"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ employee_id: PostCustomDatevEmployeesEmployeeIdDownloadDocumentParameterEmployeeId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostCustomDatevEmployeesEmployeeIdDownloadDocumentRequestBody },
  responses: { 200: PostCustomDatevEmployeesEmployeeIdDownloadDocumentPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type post_PostCustomDatevEmployeesEmployeeIdEauRequests = typeof post_PostCustomDatevEmployeesEmployeeIdEauRequests;
export const post_PostCustomDatevEmployeesEmployeeIdEauRequests = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/custom/datev/employees/{employee_id}/eau-requests"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ employee_id: PostCustomDatevEmployeesEmployeeIdEauRequestsParameterEmployeeId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostCustomDatevEmployeesEmployeeIdEauRequestsRequestBody },
  responses: { 200: PostCustomDatevEmployeesEmployeeIdEauRequestsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type put_PutCustomDatevEmployeesEmployeeIdPreparePayroll = typeof put_PutCustomDatevEmployeesEmployeeIdPreparePayroll;
export const put_PutCustomDatevEmployeesEmployeeIdPreparePayroll = {
  method: Schema.Literal("PUT"),
  path: Schema.Literal("/custom/datev/employees/{employee_id}/prepare-payroll"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ employee_id: PutCustomDatevEmployeesEmployeeIdPreparePayrollParameterEmployeeId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PutCustomDatevEmployeesEmployeeIdPreparePayrollRequestBody },
  responses: { 200: PutCustomDatevEmployeesEmployeeIdPreparePayrollPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type put_PutCustomDatevEmployeesEmployeeIdCompensations = typeof put_PutCustomDatevEmployeesEmployeeIdCompensations;
export const put_PutCustomDatevEmployeesEmployeeIdCompensations = {
  method: Schema.Literal("PUT"),
  path: Schema.Literal("/custom/datev/employees/{employee_id}/compensations"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ employee_id: PutCustomDatevEmployeesEmployeeIdCompensationsParameterEmployeeId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PutCustomDatevEmployeesEmployeeIdCompensationsRequestBody },
  responses: { 200: PutCustomDatevEmployeesEmployeeIdCompensationsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type get_GetCustomDatevCheckWritePermission = typeof get_GetCustomDatevCheckWritePermission;
export const get_GetCustomDatevCheckWritePermission = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/custom/datev/check-write-permission"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetCustomDatevCheckWritePermissionPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type get_GetCustomDatevDataPushes = typeof get_GetCustomDatevDataPushes;
export const get_GetCustomDatevDataPushes = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/custom/datev/data-pushes"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetCustomDatevDataPushesPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type post_PostCustomDatevPushDataGeneral = typeof post_PostCustomDatevPushDataGeneral;
export const post_PostCustomDatevPushDataGeneral = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/custom/datev/push-data/general"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostCustomDatevPushDataGeneralRequestBody },
  responses: { 200: PostCustomDatevPushDataGeneralPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type post_PostCustomDatevPushDataPayroll = typeof post_PostCustomDatevPushDataPayroll;
export const post_PostCustomDatevPushDataPayroll = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/custom/datev/push-data/payroll"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostCustomDatevPushDataPayrollRequestBody },
  responses: { 200: PostCustomDatevPushDataPayrollPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type post_PostCustomSilaeEmployeesEmployeeIdPayrollSupplements = typeof post_PostCustomSilaeEmployeesEmployeeIdPayrollSupplements;
export const post_PostCustomSilaeEmployeesEmployeeIdPayrollSupplements = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/custom/silae/employees/{employee_id}/payroll-supplements"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ employee_id: PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsParameterEmployeeId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsRequestBody },
  responses: { 200: PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
};

export type post_PostAiApplyJobFeedsBulkImport = typeof post_PostAiApplyJobFeedsBulkImport;
export const post_PostAiApplyJobFeedsBulkImport = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/ai-apply/job-feeds/{job_feed_id}/bulk-import"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ job_feed_id: Schema.String }), body: Schema.String },
  responses: { 200: BulkImportResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Union(Schema.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Schema.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Schema.Literal("PLATFORM.INPUT_INVALID"), Schema.Literal("PLATFORM.UNKNOWN_ERROR"), Schema.Literal("PLATFORM.IP_NOT_WHITELISTED"), Schema.Literal("PLATFORM.AUTHENTICATION_INVALID"), Schema.Literal("PLATFORM.TASK_TIMED_OUT"), Schema.Literal("REMOTE.SERVICE_UNAVAILABLE"), Schema.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Schema.Literal("REMOTE.INPUT_INVALID"), Schema.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Schema.Literal("AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING"), Schema.Literal("AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"))), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.URL) }) }) },
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
import type { ParseError } from "effect/ParseResult";

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
  return Schema.decodeUnknownSync(schema as Schema.Schema<unknown, unknown, never>)(value);
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
            parametersToSend[key] = yield* Schema.decodeUnknown(schema as Schema.Schema<unknown, unknown, never>)(value);
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
            data = yield* Schema.decodeUnknown(responseSchema as Schema.Schema<unknown, unknown, never>)(data);
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

  