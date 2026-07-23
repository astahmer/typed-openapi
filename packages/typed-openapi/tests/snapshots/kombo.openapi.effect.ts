
  import { Effect, Schema } from "effect";

// <DefaultSchemas>
const Schema_default_FULL_prop = Schema.Literals(["FULL", "DELTA"]).pipe(Schema.withDecodingDefaultType(Effect.succeed("FULL")));
const NullOr_default_en_prop = Schema.NullOr(Schema.Literals(["en", "de", "fr", "it", "es"])).pipe(Schema.withDecodingDefaultType(Effect.succeed("en")));
const Schema_default_EMBEDDED_prop = Schema.Literals(["EMBEDDED", "MAGIC_LINK"]).pipe(Schema.withDecodingDefaultType(Effect.succeed("EMBEDDED")));
const Schema_default_100 = Schema.Int.check(Schema.isGreaterThanOrEqualTo(1), Schema.isLessThanOrEqualTo(2000)).pipe(Schema.withDecodingDefaultType(Effect.succeed(100)));
const Schema_default_100_4 = Schema.Int.check(Schema.isGreaterThanOrEqualTo(1), Schema.isLessThanOrEqualTo(250)).pipe(Schema.withDecodingDefaultType(Effect.succeed(100)));
const Schema_default_false = Schema.Literals(["true", "false"]).pipe(Schema.withDecodingDefaultType(Effect.succeed("false")));
const Schema_default_REQUESTED_prop = Schema.Literals(["REQUESTED", "APPROVED"]).pipe(Schema.withDecodingDefaultType(Effect.succeed("REQUESTED")));
const Boolean_default_false_prop = Schema.Boolean.pipe(Schema.withDecodingDefaultType(Effect.succeed(false)));
const Array_default_value_prop = Schema.Array(Schema.String).pipe(Schema.withDecodingDefaultType(Effect.succeed([])));
const NullOr_default_value_prop = Schema.NullOr(Schema.Array(Schema.Struct({ email_address: Schema.optional(Schema.NullOr(Schema.String.check(Schema.isPattern(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$"))))), type: Schema.NullOr(Schema.String) }))).pipe(Schema.withDecodingDefaultType(Effect.succeed([])));
const NullOr_default_value_prop_10 = Schema.NullOr(Schema.Array(Schema.Struct({ phone_number: Schema.String, type: Schema.optional(Schema.NullOr(Schema.String)) }))).pipe(Schema.withDecodingDefaultType(Effect.succeed([])));
const NullOr_default_value_prop_11 = Schema.NullOr(Schema.Array(Schema.Struct({ link: Schema.optional(Schema.NullOr(Schema.String)), type: Schema.optional(Schema.NullOr(Schema.String)), username: Schema.optional(Schema.NullOr(Schema.String)) }))).pipe(Schema.withDecodingDefaultType(Effect.succeed([])));
const NullOr_default_value_prop_12 = Schema.NullOr(Schema.Array(Schema.Union([Schema.Struct({ answer: Schema.Struct({ content: Schema.NullOr(Schema.String) }), question: Schema.Struct({ remote_id: Schema.NullOr(Schema.String), title: Schema.String, type: Schema.Literal("TEXT") }) }), Schema.Struct({ answer: Schema.Struct({ choice: Schema.NullOr(Schema.String) }), question: Schema.Struct({ remote_id: Schema.NullOr(Schema.String), title: Schema.String, type: Schema.Literal("SINGLE_SELECT") }) }), Schema.Struct({ answer: Schema.Struct({ choices: Array_default_value_prop }), question: Schema.Struct({ remote_id: Schema.NullOr(Schema.String), title: Schema.String, type: Schema.Literal("MULTI_SELECT") }) }), Schema.Struct({ answer: Schema.Struct({ checked: Schema.NullOr(Schema.Boolean) }), question: Schema.Struct({ remote_id: Schema.NullOr(Schema.String), title: Schema.String, type: Schema.Literal("BOOLEAN") }) }), Schema.Struct({ answer: Schema.Struct({ number: Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))) }), question: Schema.Struct({ remote_id: Schema.NullOr(Schema.String), title: Schema.String, type: Schema.Literal("NUMBER") }) }), Schema.Struct({ answer: Schema.Struct({ date: Schema.NullOr(Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")))) }), question: Schema.Struct({ remote_id: Schema.NullOr(Schema.String), title: Schema.String, type: Schema.Literal("DATE") }) }), Schema.Struct({ answer: Schema.Struct({ raw: Schema.optional(Schema.Null) }), question: Schema.Struct({ remote_id: Schema.NullOr(Schema.String), title: Schema.String, type: Schema.Literal("UNKNOWN") }) })]))).pipe(Schema.withDecodingDefaultType(Effect.succeed([])));
const Array_default_value_prop_13 = Schema.Array(Schema.Struct({ url: Schema.String })).pipe(Schema.withDecodingDefaultType(Effect.succeed([])));
const Array_default_value_prop_14 = Schema.Array(Schema.Struct({ name: Schema.String, content_type: Schema.optional(Schema.String.check(Schema.isPattern(new RegExp("^[\\w.-]+\\/[\\w.-]+$")))), data_url: Schema.optional(Schema.String), data: Schema.optional(Schema.String), type: Schema.Literals(["CV", "COVER_LETTER", "OTHER"]) })).pipe(Schema.withDecodingDefaultType(Effect.succeed([])));
const NullOr_default_FIELD_prop = Schema.NullOr(Schema.Literals(["SLIDER", "FIELD"])).pipe(Schema.withDecodingDefaultType(Effect.succeed("FIELD")));
const Union_default_null_prop = Schema.Union([Schema.Array(Schema.String.check(Schema.isMinLength(24), Schema.isMaxLength(24), Schema.isPattern(new RegExp("^[1-9A-HJ-NP-Za-km-z]+$")))), Schema.Array(Schema.Boolean), Schema.Null]).pipe(Schema.withDecodingDefaultType(Effect.succeed(null)));
const Union_default_value_prop = Schema.Array(Schema.Union([Schema.Struct({ type: Schema.Literal("TEXT"), label: Schema.String, value: Schema.String }), Schema.Struct({ type: Schema.Literal("SUB_RESULT"), id: Schema.String, label: Schema.String, score: Schema.Struct({ value: Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308)), max: Schema.Number.check(Schema.isGreaterThanOrEqualTo(1)) }), status: Schema.Literals(["COMPLETED", "CANCELLED"]) })])).pipe(Schema.withDecodingDefaultType(Effect.succeed([])));
const Array_default_value_prop_18 = Schema.Array(Schema.Struct({ name: Schema.String, content_type: Schema.optional(Schema.String.check(Schema.isPattern(new RegExp("^[\\w.-]+\\/[\\w.-]+$")))), data_url: Schema.optional(Schema.String), data: Schema.optional(Schema.String) })).check(Schema.isMaxLength(5)).pipe(Schema.withDecodingDefaultType(Effect.succeed([])));
const Schema_default_5 = Schema.Int.check(Schema.isGreaterThanOrEqualTo(1), Schema.isLessThanOrEqualTo(5)).pipe(Schema.withDecodingDefaultType(Effect.succeed(5)));
const Union_default_null_prop_20 = Schema.Union([Schema.Array(Schema.String), Schema.Array(Schema.Boolean), Schema.Null]).pipe(Schema.withDecodingDefaultType(Effect.succeed(null)));
const Schema_default_HRIS_prop = Schema.Literals(["HRIS", "ATS", "ASSESSMENT", "LMS"]).pipe(Schema.withDecodingDefaultType(Effect.succeed("HRIS")));
const Array_default_value_prop_22 = Schema.Array(Schema.Struct({ amount: Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308)), lohnart: Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308)), bearbeitungsschluessel: Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308)) })).pipe(Schema.withDecodingDefaultType(Effect.succeed([])));

// </DefaultSchemas>

// <Schemas>
export const GetCheckApiKeyPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ environment_id: Schema.String, customer_id: Schema.String }) });
export type GetCheckApiKeyPositiveResponse = Schema.Schema.Type<typeof GetCheckApiKeyPositiveResponse>;

export const PostForceSyncPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ already_queued: Schema.Boolean, sync_id: Schema.String, type: Schema.Literals(["FULL", "DELTA"]) }) });
export type PostForceSyncPositiveResponse = Schema.Schema.Type<typeof PostForceSyncPositiveResponse>;

export const PostForceSyncRequestBody = Schema.Struct({ type: Schema_default_FULL_prop });
export type PostForceSyncRequestBody = Schema.Schema.Type<typeof PostForceSyncRequestBody>;

export const PostPassthroughToolApiParameterTool = Schema.String;
export type PostPassthroughToolApiParameterTool = Schema.Schema.Type<typeof PostPassthroughToolApiParameterTool>;

export const PostPassthroughToolApiParameterApi = Schema.String;
export type PostPassthroughToolApiParameterApi = Schema.Schema.Type<typeof PostPassthroughToolApiParameterApi>;

export const PostPassthroughToolApiPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ url: Schema.String, status: Schema.Int, headers: Schema.Record(Schema.String, Schema.Union([Schema.String, Schema.Array(Schema.String)])), data: Schema.optional(Schema.Unknown) }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PostPassthroughToolApiPositiveResponse = Schema.Schema.Type<typeof PostPassthroughToolApiPositiveResponse>;

export const PostPassthroughToolApiRequestBody = Schema.Struct({ method: Schema.Literals(["GET", "POST", "DELETE", "PUT", "PATCH"]), path: Schema.String, headers: Schema.optional(Schema.Record(Schema.String, Schema.String)), params: Schema.optional(Schema.Record(Schema.String, Schema.String)), data: Schema.optional(Schema.Unknown), response_as_base64: Schema.optional(Schema.Boolean), multipart_form_data: Schema.optional(Schema.Array(Schema.Struct({ name: Schema.String, value: Schema.Union([Schema.String, Schema.Struct({ name: Schema.String, content_type: Schema.optional(Schema.String.check(Schema.isPattern(new RegExp("^[\\w.-]+\\/[\\w.-]+$")))), data_url: Schema.optional(Schema.String), data: Schema.optional(Schema.String) })]) }))), api_options: Schema.optional(Schema.Record(Schema.String, Schema.String)) });
export type PostPassthroughToolApiRequestBody = Schema.Schema.Type<typeof PostPassthroughToolApiRequestBody>;

export const DeleteIntegrationsIntegrationIdParameterIntegrationId = Schema.String;
export type DeleteIntegrationsIntegrationIdParameterIntegrationId = Schema.Schema.Type<typeof DeleteIntegrationsIntegrationIdParameterIntegrationId>;

export const DeleteIntegrationsIntegrationIdPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Record(Schema.String, Schema.Unknown) });
export type DeleteIntegrationsIntegrationIdPositiveResponse = Schema.Schema.Type<typeof DeleteIntegrationsIntegrationIdPositiveResponse>;

export const DeleteIntegrationsIntegrationIdRequestBody = Schema.Struct({  });
export type DeleteIntegrationsIntegrationIdRequestBody = Schema.Schema.Type<typeof DeleteIntegrationsIntegrationIdRequestBody>;

export const GetIntegrationsIntegrationIdParameterIntegrationId = Schema.String;
export type GetIntegrationsIntegrationIdParameterIntegrationId = Schema.Schema.Type<typeof GetIntegrationsIntegrationIdParameterIntegrationId>;

export const GetIntegrationsIntegrationIdPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ id: Schema.String, tool: Schema.Struct({ id: Schema.String, label: Schema.String, internal_label: Schema.NullOr(Schema.String), logo_url: Schema.String, icon_url: Schema.String }), category: Schema.Literals(["HRIS", "ATS", "ASSESSMENT", "LMS"]), status: Schema.Literals(["ACTIVE", "INVALID", "INACTIVE"]), setup_status: Schema.Literals(["INCOMPLETE", "FINAL_SYNC_PENDING", "COMPLETED"]), end_user: Schema.Struct({ organization_name: Schema.String, creator_email: Schema.NullOr(Schema.String.check(Schema.isPattern(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$")))), origin_id: Schema.NullOr(Schema.String) }), scope_config: Schema.Struct({ id: Schema.String, name: Schema.NullOr(Schema.String) }), data_expired_at: Schema.NullOr(Schema.String), created_at: Schema.String, beta: Schema.Boolean, read_models: Schema.Array(Schema.Struct({ id: Schema.String, label: Schema.String, is_available: Schema.Boolean, coverage_status: Schema.Literals(["SUPPORTED", "UNSUPPORTED", "NOT_IMPLEMENTED", "UNKNOWN"]), scope_config_setting: Schema.Literals(["ENABLED", "DISABLED", "OPTIONAL"]), opted_out_by_customer: Schema.Boolean, fields: Schema.Array(Schema.Struct({ id: Schema.String, is_available: Schema.Boolean, coverage_status: Schema.Literals(["SUPPORTED", "UNSUPPORTED", "NOT_IMPLEMENTED", "UNKNOWN"]), scope_config_setting: Schema.Literals(["ENABLED", "DISABLED", "OPTIONAL"]), opted_out_by_customer: Schema.Boolean })) })), write_actions: Schema.Array(Schema.Struct({ id: Schema.String, label: Schema.String, is_available: Schema.Boolean, coverage_status: Schema.Literals(["SUPPORTED", "UNSUPPORTED", "NOT_IMPLEMENTED", "UNKNOWN"]), scope_config_setting: Schema.Literals(["ENABLED", "DISABLED", "OPTIONAL"]), opted_out_by_customer: Schema.Boolean, fields: Schema.Array(Schema.Struct({ id: Schema.String, is_available: Schema.Boolean, coverage_status: Schema.Literals(["SUPPORTED", "UNSUPPORTED", "NOT_IMPLEMENTED", "UNKNOWN"]) })) })) }) });
export type GetIntegrationsIntegrationIdPositiveResponse = Schema.Schema.Type<typeof GetIntegrationsIntegrationIdPositiveResponse>;

export const PutIntegrationsIntegrationIdEnabledParameterIntegrationId = Schema.String;
export type PutIntegrationsIntegrationIdEnabledParameterIntegrationId = Schema.Schema.Type<typeof PutIntegrationsIntegrationIdEnabledParameterIntegrationId>;

export const PutIntegrationsIntegrationIdEnabledPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Record(Schema.String, Schema.Unknown) });
export type PutIntegrationsIntegrationIdEnabledPositiveResponse = Schema.Schema.Type<typeof PutIntegrationsIntegrationIdEnabledPositiveResponse>;

export const PutIntegrationsIntegrationIdEnabledRequestBody = Schema.Struct({ value: Schema.Boolean });
export type PutIntegrationsIntegrationIdEnabledRequestBody = Schema.Schema.Type<typeof PutIntegrationsIntegrationIdEnabledRequestBody>;

export const PostIntegrationsIntegrationIdRelinkParameterIntegrationId = Schema.String;
export type PostIntegrationsIntegrationIdRelinkParameterIntegrationId = Schema.Schema.Type<typeof PostIntegrationsIntegrationIdRelinkParameterIntegrationId>;

export const PostIntegrationsIntegrationIdRelinkPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ link: Schema.String }) });
export type PostIntegrationsIntegrationIdRelinkPositiveResponse = Schema.Schema.Type<typeof PostIntegrationsIntegrationIdRelinkPositiveResponse>;

export const PostIntegrationsIntegrationIdRelinkRequestBody = Schema.Struct({ language: NullOr_default_en_prop, scope_config_id: Schema.optional(Schema.NullOr(Schema.String)), link_type: Schema_default_EMBEDDED_prop });
export type PostIntegrationsIntegrationIdRelinkRequestBody = Schema.Schema.Type<typeof PostIntegrationsIntegrationIdRelinkRequestBody>;

export const PostIntegrationsIntegrationIdSetupLinkParameterIntegrationId = Schema.String;
export type PostIntegrationsIntegrationIdSetupLinkParameterIntegrationId = Schema.Schema.Type<typeof PostIntegrationsIntegrationIdSetupLinkParameterIntegrationId>;

export const PostIntegrationsIntegrationIdSetupLinkPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ link: Schema.String }) });
export type PostIntegrationsIntegrationIdSetupLinkPositiveResponse = Schema.Schema.Type<typeof PostIntegrationsIntegrationIdSetupLinkPositiveResponse>;

export const PostIntegrationsIntegrationIdSetupLinkRequestBody = Schema.Struct({ language: NullOr_default_en_prop, link_type: Schema.Literals(["EMBEDDED", "MAGIC_LINK"]) });
export type PostIntegrationsIntegrationIdSetupLinkRequestBody = Schema.Schema.Type<typeof PostIntegrationsIntegrationIdSetupLinkRequestBody>;

export const GetIntegrationsIntegrationIdIntegrationFieldsParameterIntegrationId = Schema.String;
export type GetIntegrationsIntegrationIdIntegrationFieldsParameterIntegrationId = Schema.Schema.Type<typeof GetIntegrationsIntegrationIdIntegrationFieldsParameterIntegrationId>;

export const GetIntegrationsIntegrationIdIntegrationFieldsParameterCursor = Schema.String;
export type GetIntegrationsIntegrationIdIntegrationFieldsParameterCursor = Schema.Schema.Type<typeof GetIntegrationsIntegrationIdIntegrationFieldsParameterCursor>;

export const GetIntegrationsIntegrationIdIntegrationFieldsParameterPageSize = Schema_default_100;
export type GetIntegrationsIntegrationIdIntegrationFieldsParameterPageSize = Schema.Schema.Type<typeof GetIntegrationsIntegrationIdIntegrationFieldsParameterPageSize>;

export const GetIntegrationsIntegrationIdIntegrationFieldsPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ results: Schema.Array(Schema.Struct({ id: Schema.String, key: Schema.String, model: Schema.String, type: Schema.Literals(["DEFAULT", "CUSTOM"]), label: Schema.NullOr(Schema.String), is_passthrough_enabled: Schema.Boolean, is_writable: Schema.Literal(false) })), next_cursor: Schema.NullOr(Schema.String), next: Schema.NullOr(Schema.String) }) });
export type GetIntegrationsIntegrationIdIntegrationFieldsPositiveResponse = Schema.Schema.Type<typeof GetIntegrationsIntegrationIdIntegrationFieldsPositiveResponse>;

export const PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationId = Schema.String;
export type PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationId = Schema.Schema.Type<typeof PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationId>;

export const PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationFieldId = Schema.String;
export type PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationFieldId = Schema.Schema.Type<typeof PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationFieldId>;

export const PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ id: Schema.String, key: Schema.String, model: Schema.String, type: Schema.Literals(["DEFAULT", "CUSTOM"]), label: Schema.NullOr(Schema.String), is_passthrough_enabled: Schema.Boolean, is_writable: Schema.Literal(false) }) });
export type PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdPositiveResponse = Schema.Schema.Type<typeof PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdPositiveResponse>;

export const PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdRequestBody = Schema.Struct({ enable_passthrough: Schema.NullOr(Schema.Boolean) });
export type PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdRequestBody = Schema.Schema.Type<typeof PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdRequestBody>;

export const GetIntegrationsIntegrationIdCustomFieldsParameterIntegrationId = Schema.String;
export type GetIntegrationsIntegrationIdCustomFieldsParameterIntegrationId = Schema.Schema.Type<typeof GetIntegrationsIntegrationIdCustomFieldsParameterIntegrationId>;

export const GetIntegrationsIntegrationIdCustomFieldsParameterCursor = Schema.String;
export type GetIntegrationsIntegrationIdCustomFieldsParameterCursor = Schema.Schema.Type<typeof GetIntegrationsIntegrationIdCustomFieldsParameterCursor>;

export const GetIntegrationsIntegrationIdCustomFieldsParameterPageSize = Schema_default_100_4;
export type GetIntegrationsIntegrationIdCustomFieldsParameterPageSize = Schema.Schema.Type<typeof GetIntegrationsIntegrationIdCustomFieldsParameterPageSize>;

export const GetIntegrationsIntegrationIdCustomFieldsPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ results: Schema.Array(Schema.Struct({ id: Schema.String, key: Schema.String, integration_field: Schema.NullOr(Schema.Struct({ id: Schema.String, key: Schema.String, type: Schema.Literals(["DEFAULT", "CUSTOM"]), label: Schema.NullOr(Schema.String) })), model: Schema.String, label: Schema.NullOr(Schema.String), description: Schema.NullOr(Schema.String) })), next_cursor: Schema.NullOr(Schema.String), next: Schema.NullOr(Schema.String) }) });
export type GetIntegrationsIntegrationIdCustomFieldsPositiveResponse = Schema.Schema.Type<typeof GetIntegrationsIntegrationIdCustomFieldsPositiveResponse>;

export const PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterIntegrationId = Schema.String;
export type PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterIntegrationId = Schema.Schema.Type<typeof PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterIntegrationId>;

export const PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterCustomFieldId = Schema.String;
export type PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterCustomFieldId = Schema.Schema.Type<typeof PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterCustomFieldId>;

export const PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ id: Schema.String, key: Schema.String, integration_field: Schema.NullOr(Schema.Struct({ id: Schema.String, key: Schema.String, type: Schema.Literals(["DEFAULT", "CUSTOM"]), label: Schema.NullOr(Schema.String) })), model: Schema.String, label: Schema.NullOr(Schema.String), description: Schema.NullOr(Schema.String) }) });
export type PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdPositiveResponse = Schema.Schema.Type<typeof PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdPositiveResponse>;

export const PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdRequestBody = Schema.Struct({ integration_field_id: Schema.NullOr(Schema.String) });
export type PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdRequestBody = Schema.Schema.Type<typeof PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdRequestBody>;

export const GetToolsCategoryParameterCategory = Schema.Literals(["hris", "ats", "assessment", "lms"]);
export type GetToolsCategoryParameterCategory = Schema.Schema.Type<typeof GetToolsCategoryParameterCategory>;

export const GetToolsCategoryPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ tools: Schema.Array(Schema.Struct({ id: Schema.String, label: Schema.String, internal_label: Schema.NullOr(Schema.String), assets: Schema.Struct({ logo_url: Schema.String, icon_url: Schema.String, icon_black_url: Schema.String }), paid_api_details_markdown: Schema.NullOr(Schema.String), fast_track_details_markdown: Schema.NullOr(Schema.String), partner_only_details_markdown: Schema.NullOr(Schema.String), connection_guide_url: Schema.NullOr(Schema.String), coverage: Schema.Struct({ read_models: Schema.Array(Schema.Struct({ id: Schema.String, label: Schema.String, coverage_status: Schema.Literals(["SUPPORTED", "UNSUPPORTED", "NOT_IMPLEMENTED", "UNKNOWN"]), fields: Schema.Array(Schema.Struct({ id: Schema.String, coverage_status: Schema.Literals(["SUPPORTED", "UNSUPPORTED", "NOT_IMPLEMENTED", "UNKNOWN"]) })) })), write_actions: Schema.Array(Schema.Struct({ id: Schema.String, label: Schema.String, coverage_status: Schema.Literals(["SUPPORTED", "UNSUPPORTED", "NOT_IMPLEMENTED", "UNKNOWN"]), fields: Schema.Array(Schema.Struct({ id: Schema.String, coverage_status: Schema.Literals(["SUPPORTED", "UNSUPPORTED", "NOT_IMPLEMENTED", "UNKNOWN"]) })) })), features: Schema.Array(Schema.Struct({ id: Schema.String, label: Schema.String, coverage_status: Schema.Literals(["SUPPORTED", "UNSUPPORTED", "NOT_IMPLEMENTED", "UNKNOWN"]) })) }) })) }) });
export type GetToolsCategoryPositiveResponse = Schema.Schema.Type<typeof GetToolsCategoryPositiveResponse>;

export const PostHrisProvisioningGroupsGroupIdDiffParameterGroupId = Schema.String;
export type PostHrisProvisioningGroupsGroupIdDiffParameterGroupId = Schema.Schema.Type<typeof PostHrisProvisioningGroupsGroupIdDiffParameterGroupId>;

export const PostHrisProvisioningGroupsGroupIdDiffPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ users: Schema.Struct({ to_provision: Schema.Array(Schema.Struct({ email: Schema.NullOr(Schema.String.check(Schema.isPattern(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$")))), employee: Schema.Struct({ id: Schema.optional(Schema.String), remote_id: Schema.optional(Schema.NullOr(Schema.String)), first_name: Schema.optional(Schema.NullOr(Schema.String)), last_name: Schema.optional(Schema.NullOr(Schema.String)), groups: Schema.optional(Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), name: Schema.NullOr(Schema.String) }))), avatar: Schema.optional(Schema.NullOr(Schema.String)), work_location_id: Schema.optional(Schema.NullOr(Schema.String)), legal_entity_id: Schema.optional(Schema.NullOr(Schema.String)) }) })), to_deprovision: Schema.Array(Schema.Struct({ origin_id: Schema.String, email: Schema.String.check(Schema.isPattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) })), already_provisioned: Schema.Array(Schema.Struct({ origin_id: Schema.String, email: Schema.String.check(Schema.isPattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)), employee: Schema.Struct({ id: Schema.optional(Schema.String), remote_id: Schema.optional(Schema.NullOr(Schema.String)), first_name: Schema.optional(Schema.NullOr(Schema.String)), last_name: Schema.optional(Schema.NullOr(Schema.String)), groups: Schema.optional(Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), name: Schema.NullOr(Schema.String) }))), avatar: Schema.optional(Schema.NullOr(Schema.String)), work_location_id: Schema.optional(Schema.NullOr(Schema.String)), legal_entity_id: Schema.optional(Schema.NullOr(Schema.String)) }) })) }) }) });
export type PostHrisProvisioningGroupsGroupIdDiffPositiveResponse = Schema.Schema.Type<typeof PostHrisProvisioningGroupsGroupIdDiffPositiveResponse>;

export const PostHrisProvisioningGroupsGroupIdDiffRequestBody = Schema.Struct({ provisioned_users: Schema.Array(Schema.Struct({ origin_id: Schema.String, email: Schema.String.check(Schema.isPattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) })), options: Schema.Struct({ employee_fields: Schema.Array(Schema.Literals(["id", "remote_id", "first_name", "last_name", "groups", "avatar", "work_location_id", "legal_entity_id"])) }) });
export type PostHrisProvisioningGroupsGroupIdDiffRequestBody = Schema.Schema.Type<typeof PostHrisProvisioningGroupsGroupIdDiffRequestBody>;

export const PostHrisProvisioningGroupsGroupIdSetupLinksParameterGroupId = Schema.String;
export type PostHrisProvisioningGroupsGroupIdSetupLinksParameterGroupId = Schema.Schema.Type<typeof PostHrisProvisioningGroupsGroupIdSetupLinksParameterGroupId>;

export const PostHrisProvisioningGroupsGroupIdSetupLinksPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ url: Schema.String, expires_at: Schema.String }) });
export type PostHrisProvisioningGroupsGroupIdSetupLinksPositiveResponse = Schema.Schema.Type<typeof PostHrisProvisioningGroupsGroupIdSetupLinksPositiveResponse>;

export const PostHrisProvisioningGroupsGroupIdSetupLinksRequestBody = Schema.Struct({ language: NullOr_default_en_prop });
export type PostHrisProvisioningGroupsGroupIdSetupLinksRequestBody = Schema.Schema.Type<typeof PostHrisProvisioningGroupsGroupIdSetupLinksRequestBody>;

export const GetHrisEmployeesParameterCursor = Schema.String;
export type GetHrisEmployeesParameterCursor = Schema.Schema.Type<typeof GetHrisEmployeesParameterCursor>;

export const GetHrisEmployeesParameterPageSize = Schema_default_100_4;
export type GetHrisEmployeesParameterPageSize = Schema.Schema.Type<typeof GetHrisEmployeesParameterPageSize>;

export const GetHrisEmployeesParameterUpdatedAfter = Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisEmployeesParameterUpdatedAfter = Schema.Schema.Type<typeof GetHrisEmployeesParameterUpdatedAfter>;

export const GetHrisEmployeesParameterIncludeDeleted = Schema_default_false;
export type GetHrisEmployeesParameterIncludeDeleted = Schema.Schema.Type<typeof GetHrisEmployeesParameterIncludeDeleted>;

export const GetHrisEmployeesParameterIgnoreUnsupportedFilters = Schema_default_false;
export type GetHrisEmployeesParameterIgnoreUnsupportedFilters = Schema.Schema.Type<typeof GetHrisEmployeesParameterIgnoreUnsupportedFilters>;

export const GetHrisEmployeesParameterIds = Schema.String;
export type GetHrisEmployeesParameterIds = Schema.Schema.Type<typeof GetHrisEmployeesParameterIds>;

export const GetHrisEmployeesParameterRemoteIds = Schema.String;
export type GetHrisEmployeesParameterRemoteIds = Schema.Schema.Type<typeof GetHrisEmployeesParameterRemoteIds>;

export const GetHrisEmployeesParameterEmploymentStatus = Schema.Literals(["ACTIVE", "PENDING", "INACTIVE", "LEAVE"]);
export type GetHrisEmployeesParameterEmploymentStatus = Schema.Schema.Type<typeof GetHrisEmployeesParameterEmploymentStatus>;

export const GetHrisEmployeesParameterEmploymentStatuses = Schema.String;
export type GetHrisEmployeesParameterEmploymentStatuses = Schema.Schema.Type<typeof GetHrisEmployeesParameterEmploymentStatuses>;

export const GetHrisEmployeesParameterGroupIds = Schema.String;
export type GetHrisEmployeesParameterGroupIds = Schema.Schema.Type<typeof GetHrisEmployeesParameterGroupIds>;

export const GetHrisEmployeesParameterLegalEntityIds = Schema.String;
export type GetHrisEmployeesParameterLegalEntityIds = Schema.Schema.Type<typeof GetHrisEmployeesParameterLegalEntityIds>;

export const GetHrisEmployeesParameterWorkLocationIds = Schema.String;
export type GetHrisEmployeesParameterWorkLocationIds = Schema.Schema.Type<typeof GetHrisEmployeesParameterWorkLocationIds>;

export const GetHrisEmployeesParameterWorkEmails = Schema.String;
export type GetHrisEmployeesParameterWorkEmails = Schema.Schema.Type<typeof GetHrisEmployeesParameterWorkEmails>;

export const GetHrisEmployeesParameterPersonalEmails = Schema.String;
export type GetHrisEmployeesParameterPersonalEmails = Schema.Schema.Type<typeof GetHrisEmployeesParameterPersonalEmails>;

export const GetHrisEmployeesParameterCustomFields = Schema.String;
export type GetHrisEmployeesParameterCustomFields = Schema.Schema.Type<typeof GetHrisEmployeesParameterCustomFields>;

export const GetHrisEmployeesPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.String, employee_number: Schema.NullOr(Schema.String), first_name: Schema.NullOr(Schema.String), last_name: Schema.NullOr(Schema.String), nationality: Schema.NullOr(Schema.String), display_full_name: Schema.NullOr(Schema.String), job_title: Schema.NullOr(Schema.String), work_email: Schema.optional(Schema.NullOr(Schema.String.check(Schema.isPattern(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$"))))), personal_email: Schema.optional(Schema.NullOr(Schema.String.check(Schema.isPattern(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$"))))), mobile_phone_number: Schema.NullOr(Schema.String), ssn: Schema.NullOr(Schema.String), tax_id: Schema.NullOr(Schema.String), gender: Schema.optional(Schema.Union([Schema.Literals(["MALE", "FEMALE", "NON_BINARY", "NOT_SPECIFIED"]), Schema.String, Schema.Null])), ethnicity: Schema.optional(Schema.Union([Schema.Literals(["WHITE", "ASIAN", "HISPANIC_LATINO", "HAWAIIAN", "NATIVE_AMERICAN", "BLACK_AFRICAN_AMERICAN", "MULTIPLE_ETHNICITIES", "DECLINE_TO_SPECIFY"]), Schema.String, Schema.Null])), marital_status: Schema.optional(Schema.Union([Schema.Literals(["SINGLE", "MARRIED", "DOMESTIC_PARTNERSHIP", "WIDOWED", "DIVORCED", "SEPARATED", "NOT_MARRIED"]), Schema.String, Schema.Null])), employment_status: Schema.optional(Schema.Union([Schema.Literals(["ACTIVE", "PENDING", "INACTIVE", "LEAVE"]), Schema.String, Schema.Null])), employment_type: Schema.optional(Schema.Union([Schema.Literals(["FULL_TIME", "PART_TIME", "CONTRACT", "INTERNSHIP", "FREELANCE", "WORKING_STUDENT", "APPRENTICESHIP", "TRAINING"]), Schema.String, Schema.Null])), weekly_hours: Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), avatar: Schema.NullOr(Schema.String), work_location_id: Schema.NullOr(Schema.String), legal_entity_id: Schema.NullOr(Schema.String), manager_id: Schema.NullOr(Schema.String), home_address: Schema.optional(Schema.NullOr(Schema.Struct({ city: Schema.optional(Schema.NullOr(Schema.String)), country: Schema.optional(Schema.NullOr(Schema.String)), raw: Schema.optional(Schema.NullOr(Schema.String)), state: Schema.optional(Schema.NullOr(Schema.String)), street_1: Schema.optional(Schema.NullOr(Schema.String)), street_2: Schema.optional(Schema.NullOr(Schema.String)), zip_code: Schema.optional(Schema.NullOr(Schema.String)) }))), bank_accounts: Schema.optional(Schema.NullOr(Schema.Array(Schema.Struct({ iban: Schema.optional(Schema.NullOr(Schema.String)), bic: Schema.optional(Schema.NullOr(Schema.String)), account_number: Schema.optional(Schema.NullOr(Schema.String)), holder_name: Schema.optional(Schema.NullOr(Schema.String)), bank_name: Schema.optional(Schema.NullOr(Schema.String)), domestic_bank_routing: Schema.optional(Schema.NullOr(Schema.Struct({ number: Schema.String, type: Schema.NullOr(Schema.Literals(["GB_SORT_CODE", "DE_BANKLEITZAHL", "US_ABA_ROUTING_TRANSIT_NUMBER", "CA_ROUTING_NUMBER", "AU_BSB_CODE", "FR_RIB"])) }))) })))), date_of_birth: Schema.NullOr(Schema.String), start_date: Schema.NullOr(Schema.String), termination_date: Schema.NullOr(Schema.String), remote_created_at: Schema.NullOr(Schema.String), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), custom_fields: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)), integration_fields: Schema.Array(Schema.Struct({ id: Schema.String, key: Schema.String, type: Schema.Literals(["DEFAULT", "CUSTOM"]), value: Schema.optional(Schema.Null), label: Schema.NullOr(Schema.String) })), remote_data: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)), employments: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), employee_id: Schema.String, job_title: Schema.NullOr(Schema.String), pay_rate: Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), pay_period: Schema.optional(Schema.Union([Schema.Literals(["HOUR", "DAY", "WEEK", "TWO_WEEKS", "HALF_MONTH", "MONTH", "TWO_MONTHS", "QUARTER", "HALF_YEAR", "YEAR"]), Schema.String, Schema.Null])), pay_frequency: Schema.optional(Schema.Union([Schema.Literals(["DAILY", "WEEKLY", "BIWEEKLY", "MONTHLY", "SEMIMONTHLY", "QUARTERLY", "SEMIANNUALLY", "ANNUALLY", "PRO_RATA"]), Schema.String, Schema.Null])), employment_type: Schema.optional(Schema.Union([Schema.Literals(["FULL_TIME", "PART_TIME", "CONTRACT", "INTERNSHIP", "FREELANCE", "WORKING_STUDENT", "APPRENTICESHIP", "TRAINING"]), Schema.String, Schema.Null])), pay_currency: Schema.NullOr(Schema.String), effective_date: Schema.NullOr(Schema.String), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)), custom_fields: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)), integration_fields: Schema.Array(Schema.Struct({ id: Schema.String, key: Schema.String, type: Schema.Literals(["DEFAULT", "CUSTOM"]), value: Schema.optional(Schema.Null), label: Schema.NullOr(Schema.String) })) })), time_off_balances: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), employee_id: Schema.String, type_id: Schema.String, balance: Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), balance_unit: Schema.NullOr(Schema.Literals(["HOURS", "DAYS"])), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), used: Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), used_unit: Schema.NullOr(Schema.Literals(["HOURS", "DAYS"])), remote_data: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)) })), manager: Schema.NullOr(Schema.Struct({ first_name: Schema.NullOr(Schema.String), last_name: Schema.NullOr(Schema.String), display_full_name: Schema.NullOr(Schema.String), id: Schema.String, employee_number: Schema.NullOr(Schema.String), work_email: Schema.optional(Schema.NullOr(Schema.String.check(Schema.isPattern(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$"))))), remote_id: Schema.String, employment_status: Schema.optional(Schema.Union([Schema.Literals(["ACTIVE", "PENDING", "INACTIVE", "LEAVE"]), Schema.String, Schema.Null])), termination_date: Schema.NullOr(Schema.String) })), groups: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.String, name: Schema.NullOr(Schema.String), type: Schema.NullOr(Schema.Literals(["DEPARTMENT", "TEAM", "COST_CENTER"])) })), legal_entity: Schema.NullOr(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), name: Schema.NullOr(Schema.String), address: Schema.optional(Schema.NullOr(Schema.Struct({ city: Schema.optional(Schema.NullOr(Schema.String)), country: Schema.optional(Schema.NullOr(Schema.String)), raw: Schema.optional(Schema.NullOr(Schema.String)), state: Schema.optional(Schema.NullOr(Schema.String)), street_1: Schema.optional(Schema.NullOr(Schema.String)), street_2: Schema.optional(Schema.NullOr(Schema.String)), zip_code: Schema.optional(Schema.NullOr(Schema.String)) }))) })), teams: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.String, name: Schema.NullOr(Schema.String), type: Schema.NullOr(Schema.Literals(["DEPARTMENT", "TEAM", "COST_CENTER"])) })), work_location: Schema.NullOr(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), name: Schema.NullOr(Schema.String), address: Schema.optional(Schema.NullOr(Schema.Struct({ city: Schema.optional(Schema.NullOr(Schema.String)), country: Schema.optional(Schema.NullOr(Schema.String)), raw: Schema.optional(Schema.NullOr(Schema.String)), state: Schema.optional(Schema.NullOr(Schema.String)), street_1: Schema.optional(Schema.NullOr(Schema.String)), street_2: Schema.optional(Schema.NullOr(Schema.String)), zip_code: Schema.optional(Schema.NullOr(Schema.String)) }))), type: Schema.NullOr(Schema.String), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)) })) })) }) });
export type GetHrisEmployeesPositiveResponse = Schema.Schema.Type<typeof GetHrisEmployeesPositiveResponse>;

export const PostHrisEmployeesPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ id: Schema.String, remote_id: Schema.String, employee_number: Schema.NullOr(Schema.String), first_name: Schema.NullOr(Schema.String), last_name: Schema.NullOr(Schema.String), nationality: Schema.NullOr(Schema.String), display_full_name: Schema.NullOr(Schema.String), job_title: Schema.NullOr(Schema.String), work_email: Schema.optional(Schema.NullOr(Schema.String.check(Schema.isPattern(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$"))))), personal_email: Schema.optional(Schema.NullOr(Schema.String.check(Schema.isPattern(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$"))))), mobile_phone_number: Schema.NullOr(Schema.String), ssn: Schema.NullOr(Schema.String), tax_id: Schema.NullOr(Schema.String), gender: Schema.optional(Schema.Union([Schema.Literals(["MALE", "FEMALE", "NON_BINARY", "NOT_SPECIFIED"]), Schema.String, Schema.Null])), ethnicity: Schema.optional(Schema.Union([Schema.Literals(["WHITE", "ASIAN", "HISPANIC_LATINO", "HAWAIIAN", "NATIVE_AMERICAN", "BLACK_AFRICAN_AMERICAN", "MULTIPLE_ETHNICITIES", "DECLINE_TO_SPECIFY"]), Schema.String, Schema.Null])), marital_status: Schema.optional(Schema.Union([Schema.Literals(["SINGLE", "MARRIED", "DOMESTIC_PARTNERSHIP", "WIDOWED", "DIVORCED", "SEPARATED", "NOT_MARRIED"]), Schema.String, Schema.Null])), employment_status: Schema.optional(Schema.Union([Schema.Literals(["ACTIVE", "PENDING", "INACTIVE", "LEAVE"]), Schema.String, Schema.Null])), employment_type: Schema.optional(Schema.Union([Schema.Literals(["FULL_TIME", "PART_TIME", "CONTRACT", "INTERNSHIP", "FREELANCE", "WORKING_STUDENT", "APPRENTICESHIP", "TRAINING"]), Schema.String, Schema.Null])), weekly_hours: Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), avatar: Schema.NullOr(Schema.String), work_location_id: Schema.NullOr(Schema.String), legal_entity_id: Schema.NullOr(Schema.String), manager_id: Schema.NullOr(Schema.String), home_address: Schema.optional(Schema.NullOr(Schema.Struct({ city: Schema.optional(Schema.NullOr(Schema.String)), country: Schema.optional(Schema.NullOr(Schema.String)), raw: Schema.optional(Schema.NullOr(Schema.String)), state: Schema.optional(Schema.NullOr(Schema.String)), street_1: Schema.optional(Schema.NullOr(Schema.String)), street_2: Schema.optional(Schema.NullOr(Schema.String)), zip_code: Schema.optional(Schema.NullOr(Schema.String)) }))), bank_accounts: Schema.optional(Schema.NullOr(Schema.Array(Schema.Struct({ iban: Schema.optional(Schema.NullOr(Schema.String)), bic: Schema.optional(Schema.NullOr(Schema.String)), account_number: Schema.optional(Schema.NullOr(Schema.String)), holder_name: Schema.optional(Schema.NullOr(Schema.String)), bank_name: Schema.optional(Schema.NullOr(Schema.String)), domestic_bank_routing: Schema.optional(Schema.NullOr(Schema.Struct({ number: Schema.String, type: Schema.NullOr(Schema.Literals(["GB_SORT_CODE", "DE_BANKLEITZAHL", "US_ABA_ROUTING_TRANSIT_NUMBER", "CA_ROUTING_NUMBER", "AU_BSB_CODE", "FR_RIB"])) }))) })))), date_of_birth: Schema.NullOr(Schema.String), start_date: Schema.NullOr(Schema.String), termination_date: Schema.NullOr(Schema.String), remote_created_at: Schema.NullOr(Schema.String), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), custom_fields: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)), integration_fields: Schema.Array(Schema.Struct({ id: Schema.String, key: Schema.String, type: Schema.Literals(["DEFAULT", "CUSTOM"]), value: Schema.optional(Schema.Null), label: Schema.NullOr(Schema.String) })), remote_data: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)) }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PostHrisEmployeesPositiveResponse = Schema.Schema.Type<typeof PostHrisEmployeesPositiveResponse>;

export const PostHrisEmployeesRequestBody = Schema.Struct({ first_name: Schema.String, last_name: Schema.String, work_email: Schema.optional(Schema.String.check(Schema.isPattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))), gender: Schema.optional(Schema.Literals(["MALE", "FEMALE", "NON_BINARY", "NOT_SPECIFIED"])), job_title: Schema.optional(Schema.String), home_address: Schema.optional(Schema.Struct({ street_1: Schema.optional(Schema.String), street_2: Schema.optional(Schema.String), city: Schema.optional(Schema.String), state: Schema.optional(Schema.String), zip_code: Schema.optional(Schema.String), country: Schema.optional(Schema.String.check(Schema.isPattern(new RegExp("^[A-Z]{2}$")))) })), date_of_birth: Schema.optional(Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), mobile_phone_number: Schema.optional(Schema.String), home_phone_number: Schema.optional(Schema.String), nationality: Schema.optional(Schema.String.check(Schema.isPattern(new RegExp("^[A-Z]{2}$")))), start_date: Schema.optional(Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), legal_entity_id: Schema.optional(Schema.String), location_id: Schema.optional(Schema.String), remote_fields: Schema.optional(Schema.Struct({ humaans: Schema.optional(Schema.Struct({ employee: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)) })), hibob: Schema.optional(Schema.Struct({ employee: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)) })), sympa: Schema.optional(Schema.Struct({ GenericNewHire: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)) })), silae: Schema.optional(Schema.Struct({ siret: Schema.optional(Schema.String), employee: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)), employment: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)) })), peoplehr: Schema.optional(Schema.Struct({ job_role_effective_date: Schema.optional(Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), department: Schema.optional(Schema.String) })), zohopeople: Schema.optional(Schema.Struct({ employee_id: Schema.optional(Schema.String.check(Schema.isMinLength(1))) })), workday: Schema.optional(Schema.Struct({ job_requisition_id: Schema.optional(Schema.String), position_id: Schema.optional(Schema.String), ssn: Schema.optional(Schema.String), bank_account: Schema.optional(Schema.Struct({ iban: Schema.String, bic: Schema.String, bank_name: Schema.String })) })), deel: Schema.optional(Schema.Struct({ candidate_id: Schema.String, candidate_link: Schema.String })), bamboohr: Schema.optional(Schema.Struct({ employee: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)) })), oracle: Schema.optional(Schema.Struct({ group_id: Schema.String, department_id: Schema.String })), adpworkforcenow: Schema.optional(Schema.Struct({ onboarding_template_code: Schema.String, applicant_payroll_profile_group_code: Schema.String, manager_position_id: Schema.optional(Schema.String), home_organization_unit_code: Schema.optional(Schema.String), personal_email: Schema.optional(Schema.String) })), azuread: Schema.optional(Schema.Struct({ password: Schema.String })), paycor: Schema.optional(Schema.Struct({ paygroupRemoteId: Schema.String, departmentRemoteId: Schema.String })), planday: Schema.optional(Schema.Struct({ department_remote_id: Schema.String })), dayforce: Schema.optional(Schema.Struct({ social_security_number: Schema.String, pay_type: Schema.String, pay_class: Schema.String, pay_group: Schema.String, base_rate: Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308)), role: Schema.String, location: Schema.String, department: Schema.String, job: Schema.String, country: Schema.String })) })) });
export type PostHrisEmployeesRequestBody = Schema.Schema.Type<typeof PostHrisEmployeesRequestBody>;

export interface Schema1 { [key: string]: ({ label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: "text", min_length?: (number | null), max_length?: (number | null), reg_exp?: (string | null) } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: "number", min?: (number | null), max?: (number | null) } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: "date" } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: "single_select", options: ({ type: "inline", entries: ReadonlyArray<{ id: string, label: string, unified_value?: string, remote_id: (string | number) }> } | { type: "referenced", link: string }) } | { label: string, required: boolean, description?: (string | null), unified_key?: (string | null), type: "multi_select", min_items?: (number | null), max_items?: (number | null), options: ({ type: "inline", entries: ReadonlyArray<{ id: string, label: string, unified_value?: string, remote_id: (string | number) }> } | { type: "referenced", link: string }) } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: "checkbox" } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: "object", properties: Schema1 } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: "array", item_type: Schema2, min_items?: (number | null), max_items?: (number | null) } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: "file", file_restrictions: { accepted_mime_types: ReadonlyArray<string>, max_file_size?: (number | null) } }) }
export const Schema1: Schema.Schema<Schema1> = Schema.suspend(() => Schema.Record(Schema.String, Schema.Union([Schema.Struct({ label: Schema.String, required: Schema.Boolean, description: Schema.optional(Schema.NullOr(Schema.String)), unified_key: Schema.optional(Schema.NullOr(Schema.Literals(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]))), type: Schema.Literal("text"), min_length: Schema.optional(Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308)))), max_length: Schema.optional(Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308)))), reg_exp: Schema.optional(Schema.NullOr(Schema.String)) }), Schema.Struct({ label: Schema.String, required: Schema.Boolean, description: Schema.optional(Schema.NullOr(Schema.String)), unified_key: Schema.optional(Schema.NullOr(Schema.Literals(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]))), type: Schema.Literal("number"), min: Schema.optional(Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308)))), max: Schema.optional(Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308)))) }), Schema.Struct({ label: Schema.String, required: Schema.Boolean, description: Schema.optional(Schema.NullOr(Schema.String)), unified_key: Schema.optional(Schema.NullOr(Schema.Literals(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]))), type: Schema.Literal("date") }), Schema.Struct({ label: Schema.String, required: Schema.Boolean, description: Schema.optional(Schema.NullOr(Schema.String)), unified_key: Schema.optional(Schema.NullOr(Schema.Literals(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]))), type: Schema.Literal("single_select"), options: Schema.Union([Schema.Struct({ type: Schema.Literal("inline"), entries: Schema.Array(Schema.Struct({ id: Schema.String, label: Schema.String, unified_value: Schema.optional(Schema.String), remote_id: Schema.Union([Schema.String, Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))]) })) }), Schema.Struct({ type: Schema.Literal("referenced"), link: Schema.String })]) }), Schema.Struct({ label: Schema.String, required: Schema.Boolean, description: Schema.optional(Schema.NullOr(Schema.String)), unified_key: Schema.optional(Schema.NullOr(Schema.String)), type: Schema.Literal("multi_select"), min_items: Schema.optional(Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308)))), max_items: Schema.optional(Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308)))), options: Schema.Union([Schema.Struct({ type: Schema.Literal("inline"), entries: Schema.Array(Schema.Struct({ id: Schema.String, label: Schema.String, unified_value: Schema.optional(Schema.String), remote_id: Schema.Union([Schema.String, Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))]) })) }), Schema.Struct({ type: Schema.Literal("referenced"), link: Schema.String })]) }), Schema.Struct({ label: Schema.String, required: Schema.Boolean, description: Schema.optional(Schema.NullOr(Schema.String)), unified_key: Schema.optional(Schema.NullOr(Schema.Literals(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]))), type: Schema.Literal("checkbox") }), Schema.Struct({ label: Schema.String, required: Schema.Boolean, description: Schema.optional(Schema.NullOr(Schema.String)), unified_key: Schema.optional(Schema.NullOr(Schema.Literals(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]))), type: Schema.Literal("object"), properties: Schema1 }), Schema.Struct({ label: Schema.String, required: Schema.Boolean, description: Schema.optional(Schema.NullOr(Schema.String)), unified_key: Schema.optional(Schema.NullOr(Schema.Literals(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]))), type: Schema.Literal("array"), item_type: Schema2, min_items: Schema.optional(Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308)))), max_items: Schema.optional(Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308)))) }), Schema.Struct({ label: Schema.String, required: Schema.Boolean, description: Schema.optional(Schema.NullOr(Schema.String)), unified_key: Schema.optional(Schema.NullOr(Schema.Literals(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]))), type: Schema.Literal("file"), file_restrictions: Schema.Struct({ accepted_mime_types: Schema.Array(Schema.String), max_file_size: Schema.optional(Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308)))) }) })])));

export type Schema2 = ({ label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: "text", min_length?: (number | null), max_length?: (number | null), reg_exp?: (string | null) } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: "number", min?: (number | null), max?: (number | null) } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: "date" } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: "single_select", options: ({ type: "inline", entries: ReadonlyArray<{ id: string, label: string, unified_value?: string, remote_id: (string | number) }> } | { type: "referenced", link: string }) } | { label: string, required: boolean, description?: (string | null), unified_key?: (string | null), type: "multi_select", min_items?: (number | null), max_items?: (number | null), options: ({ type: "inline", entries: ReadonlyArray<{ id: string, label: string, unified_value?: string, remote_id: (string | number) }> } | { type: "referenced", link: string }) } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: "checkbox" } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: "object", properties: Schema1 } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: "array", item_type: Schema2, min_items?: (number | null), max_items?: (number | null) } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: "file", file_restrictions: { accepted_mime_types: ReadonlyArray<string>, max_file_size?: (number | null) } })
export const Schema2: Schema.Schema<Schema2> = Schema.suspend(() => Schema.Union([Schema.Struct({ label: Schema.String, required: Schema.Boolean, description: Schema.optional(Schema.NullOr(Schema.String)), unified_key: Schema.optional(Schema.NullOr(Schema.Literals(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]))), type: Schema.Literal("text"), min_length: Schema.optional(Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308)))), max_length: Schema.optional(Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308)))), reg_exp: Schema.optional(Schema.NullOr(Schema.String)) }), Schema.Struct({ label: Schema.String, required: Schema.Boolean, description: Schema.optional(Schema.NullOr(Schema.String)), unified_key: Schema.optional(Schema.NullOr(Schema.Literals(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]))), type: Schema.Literal("number"), min: Schema.optional(Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308)))), max: Schema.optional(Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308)))) }), Schema.Struct({ label: Schema.String, required: Schema.Boolean, description: Schema.optional(Schema.NullOr(Schema.String)), unified_key: Schema.optional(Schema.NullOr(Schema.Literals(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]))), type: Schema.Literal("date") }), Schema.Struct({ label: Schema.String, required: Schema.Boolean, description: Schema.optional(Schema.NullOr(Schema.String)), unified_key: Schema.optional(Schema.NullOr(Schema.Literals(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]))), type: Schema.Literal("single_select"), options: Schema.Union([Schema.Struct({ type: Schema.Literal("inline"), entries: Schema.Array(Schema.Struct({ id: Schema.String, label: Schema.String, unified_value: Schema.optional(Schema.String), remote_id: Schema.Union([Schema.String, Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))]) })) }), Schema.Struct({ type: Schema.Literal("referenced"), link: Schema.String })]) }), Schema.Struct({ label: Schema.String, required: Schema.Boolean, description: Schema.optional(Schema.NullOr(Schema.String)), unified_key: Schema.optional(Schema.NullOr(Schema.String)), type: Schema.Literal("multi_select"), min_items: Schema.optional(Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308)))), max_items: Schema.optional(Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308)))), options: Schema.Union([Schema.Struct({ type: Schema.Literal("inline"), entries: Schema.Array(Schema.Struct({ id: Schema.String, label: Schema.String, unified_value: Schema.optional(Schema.String), remote_id: Schema.Union([Schema.String, Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))]) })) }), Schema.Struct({ type: Schema.Literal("referenced"), link: Schema.String })]) }), Schema.Struct({ label: Schema.String, required: Schema.Boolean, description: Schema.optional(Schema.NullOr(Schema.String)), unified_key: Schema.optional(Schema.NullOr(Schema.Literals(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]))), type: Schema.Literal("checkbox") }), Schema.Struct({ label: Schema.String, required: Schema.Boolean, description: Schema.optional(Schema.NullOr(Schema.String)), unified_key: Schema.optional(Schema.NullOr(Schema.Literals(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]))), type: Schema.Literal("object"), properties: Schema1 }), Schema.Struct({ label: Schema.String, required: Schema.Boolean, description: Schema.optional(Schema.NullOr(Schema.String)), unified_key: Schema.optional(Schema.NullOr(Schema.Literals(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]))), type: Schema.Literal("array"), item_type: Schema2, min_items: Schema.optional(Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308)))), max_items: Schema.optional(Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308)))) }), Schema.Struct({ label: Schema.String, required: Schema.Boolean, description: Schema.optional(Schema.NullOr(Schema.String)), unified_key: Schema.optional(Schema.NullOr(Schema.Literals(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]))), type: Schema.Literal("file"), file_restrictions: Schema.Struct({ accepted_mime_types: Schema.Array(Schema.String), max_file_size: Schema.optional(Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308)))) }) })]));

export const GetHrisEmployeesFormPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ properties: Schema.Record(Schema.String, Schema.Union([Schema.Struct({ label: Schema.String, required: Schema.Boolean, description: Schema.optional(Schema.NullOr(Schema.String)), unified_key: Schema.optional(Schema.NullOr(Schema.Literals(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]))), type: Schema.Literal("text"), min_length: Schema.optional(Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308)))), max_length: Schema.optional(Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308)))), reg_exp: Schema.optional(Schema.NullOr(Schema.String)) }), Schema.Struct({ label: Schema.String, required: Schema.Boolean, description: Schema.optional(Schema.NullOr(Schema.String)), unified_key: Schema.optional(Schema.NullOr(Schema.Literals(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]))), type: Schema.Literal("number"), min: Schema.optional(Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308)))), max: Schema.optional(Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308)))) }), Schema.Struct({ label: Schema.String, required: Schema.Boolean, description: Schema.optional(Schema.NullOr(Schema.String)), unified_key: Schema.optional(Schema.NullOr(Schema.Literals(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]))), type: Schema.Literal("date") }), Schema.Struct({ label: Schema.String, required: Schema.Boolean, description: Schema.optional(Schema.NullOr(Schema.String)), unified_key: Schema.optional(Schema.NullOr(Schema.Literals(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]))), type: Schema.Literal("single_select"), options: Schema.Union([Schema.Struct({ type: Schema.Literal("inline"), entries: Schema.Array(Schema.Struct({ id: Schema.String, label: Schema.String, unified_value: Schema.optional(Schema.String), remote_id: Schema.Union([Schema.String, Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))]) })) }), Schema.Struct({ type: Schema.Literal("referenced"), link: Schema.String })]) }), Schema.Struct({ label: Schema.String, required: Schema.Boolean, description: Schema.optional(Schema.NullOr(Schema.String)), unified_key: Schema.optional(Schema.NullOr(Schema.String)), type: Schema.Literal("multi_select"), min_items: Schema.optional(Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308)))), max_items: Schema.optional(Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308)))), options: Schema.Union([Schema.Struct({ type: Schema.Literal("inline"), entries: Schema.Array(Schema.Struct({ id: Schema.String, label: Schema.String, unified_value: Schema.optional(Schema.String), remote_id: Schema.Union([Schema.String, Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))]) })) }), Schema.Struct({ type: Schema.Literal("referenced"), link: Schema.String })]) }), Schema.Struct({ label: Schema.String, required: Schema.Boolean, description: Schema.optional(Schema.NullOr(Schema.String)), unified_key: Schema.optional(Schema.NullOr(Schema.Literals(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]))), type: Schema.Literal("checkbox") }), Schema.Struct({ label: Schema.String, required: Schema.Boolean, description: Schema.optional(Schema.NullOr(Schema.String)), unified_key: Schema.optional(Schema.NullOr(Schema.Literals(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]))), type: Schema.Literal("object"), properties: Schema1 }), Schema.Struct({ label: Schema.String, required: Schema.Boolean, description: Schema.optional(Schema.NullOr(Schema.String)), unified_key: Schema.optional(Schema.NullOr(Schema.Literals(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]))), type: Schema.Literal("array"), item_type: Schema2, min_items: Schema.optional(Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308)))), max_items: Schema.optional(Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308)))) }), Schema.Struct({ label: Schema.String, required: Schema.Boolean, description: Schema.optional(Schema.NullOr(Schema.String)), unified_key: Schema.optional(Schema.NullOr(Schema.Literals(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]))), type: Schema.Literal("file"), file_restrictions: Schema.Struct({ accepted_mime_types: Schema.Array(Schema.String), max_file_size: Schema.optional(Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308)))) }) })])) }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type GetHrisEmployeesFormPositiveResponse = Schema.Schema.Type<typeof GetHrisEmployeesFormPositiveResponse>;

export const PostHrisEmployeesFormPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ id: Schema.NullOr(Schema.String), remote_id: Schema.NullOr(Schema.String), prehire: Schema.Struct({ remote_id: Schema.NullOr(Schema.String) }) }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PostHrisEmployeesFormPositiveResponse = Schema.Schema.Type<typeof PostHrisEmployeesFormPositiveResponse>;

export type Schema6 = ReadonlyArray<Schema4>
export const Schema6: Schema.Schema<Schema6> = Schema.suspend(() => Schema.Array(Schema4));

export type Schema4 = (string | number | boolean | Schema5 | Schema6)
export const Schema4: Schema.Schema<Schema4> = Schema.suspend(() => Schema.Union([Schema.String, Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308)), Schema.Boolean, Schema5, Schema6]));

export interface Schema5 { [key: string]: Schema4 }
export const Schema5: Schema.Schema<Schema5> = Schema.suspend(() => Schema.Record(Schema.String, Schema4));

export const Schema3 = Schema.Record(Schema.String, Schema4);
export type Schema3 = Schema.Schema.Type<typeof Schema3>;

export const PostHrisEmployeesFormRequestBody = Schema.Struct({ properties: Schema3 });
export type PostHrisEmployeesFormRequestBody = Schema.Schema.Type<typeof PostHrisEmployeesFormRequestBody>;

export const PatchHrisEmployeesEmployeeIdParameterEmployeeId = Schema.String;
export type PatchHrisEmployeesEmployeeIdParameterEmployeeId = Schema.Schema.Type<typeof PatchHrisEmployeesEmployeeIdParameterEmployeeId>;

export const PatchHrisEmployeesEmployeeIdPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ id: Schema.String, remote_id: Schema.String, employee_number: Schema.NullOr(Schema.String), first_name: Schema.NullOr(Schema.String), last_name: Schema.NullOr(Schema.String), nationality: Schema.NullOr(Schema.String), display_full_name: Schema.NullOr(Schema.String), job_title: Schema.NullOr(Schema.String), work_email: Schema.optional(Schema.NullOr(Schema.String.check(Schema.isPattern(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$"))))), personal_email: Schema.optional(Schema.NullOr(Schema.String.check(Schema.isPattern(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$"))))), mobile_phone_number: Schema.NullOr(Schema.String), ssn: Schema.NullOr(Schema.String), tax_id: Schema.NullOr(Schema.String), gender: Schema.optional(Schema.Union([Schema.Literals(["MALE", "FEMALE", "NON_BINARY", "NOT_SPECIFIED"]), Schema.String, Schema.Null])), ethnicity: Schema.optional(Schema.Union([Schema.Literals(["WHITE", "ASIAN", "HISPANIC_LATINO", "HAWAIIAN", "NATIVE_AMERICAN", "BLACK_AFRICAN_AMERICAN", "MULTIPLE_ETHNICITIES", "DECLINE_TO_SPECIFY"]), Schema.String, Schema.Null])), marital_status: Schema.optional(Schema.Union([Schema.Literals(["SINGLE", "MARRIED", "DOMESTIC_PARTNERSHIP", "WIDOWED", "DIVORCED", "SEPARATED", "NOT_MARRIED"]), Schema.String, Schema.Null])), employment_status: Schema.optional(Schema.Union([Schema.Literals(["ACTIVE", "PENDING", "INACTIVE", "LEAVE"]), Schema.String, Schema.Null])), employment_type: Schema.optional(Schema.Union([Schema.Literals(["FULL_TIME", "PART_TIME", "CONTRACT", "INTERNSHIP", "FREELANCE", "WORKING_STUDENT", "APPRENTICESHIP", "TRAINING"]), Schema.String, Schema.Null])), weekly_hours: Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), avatar: Schema.NullOr(Schema.String), work_location_id: Schema.NullOr(Schema.String), legal_entity_id: Schema.NullOr(Schema.String), manager_id: Schema.NullOr(Schema.String), home_address: Schema.optional(Schema.NullOr(Schema.Struct({ city: Schema.optional(Schema.NullOr(Schema.String)), country: Schema.optional(Schema.NullOr(Schema.String)), raw: Schema.optional(Schema.NullOr(Schema.String)), state: Schema.optional(Schema.NullOr(Schema.String)), street_1: Schema.optional(Schema.NullOr(Schema.String)), street_2: Schema.optional(Schema.NullOr(Schema.String)), zip_code: Schema.optional(Schema.NullOr(Schema.String)) }))), bank_accounts: Schema.optional(Schema.NullOr(Schema.Array(Schema.Struct({ iban: Schema.optional(Schema.NullOr(Schema.String)), bic: Schema.optional(Schema.NullOr(Schema.String)), account_number: Schema.optional(Schema.NullOr(Schema.String)), holder_name: Schema.optional(Schema.NullOr(Schema.String)), bank_name: Schema.optional(Schema.NullOr(Schema.String)), domestic_bank_routing: Schema.optional(Schema.NullOr(Schema.Struct({ number: Schema.String, type: Schema.NullOr(Schema.Literals(["GB_SORT_CODE", "DE_BANKLEITZAHL", "US_ABA_ROUTING_TRANSIT_NUMBER", "CA_ROUTING_NUMBER", "AU_BSB_CODE", "FR_RIB"])) }))) })))), date_of_birth: Schema.NullOr(Schema.String), start_date: Schema.NullOr(Schema.String), termination_date: Schema.NullOr(Schema.String), remote_created_at: Schema.NullOr(Schema.String), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)) }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PatchHrisEmployeesEmployeeIdPositiveResponse = Schema.Schema.Type<typeof PatchHrisEmployeesEmployeeIdPositiveResponse>;

export const PatchHrisEmployeesEmployeeIdRequestBody = Schema.Struct({ first_name: Schema.optional(Schema.String), last_name: Schema.optional(Schema.String), work_email: Schema.String.check(Schema.isPattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)), gender: Schema.optional(Schema.Literals(["MALE", "FEMALE", "NON_BINARY", "NOT_SPECIFIED"])), job_title: Schema.optional(Schema.String), home_address: Schema.optional(Schema.Struct({ street_1: Schema.optional(Schema.String), street_2: Schema.optional(Schema.String), city: Schema.optional(Schema.String), state: Schema.optional(Schema.String), zip_code: Schema.optional(Schema.String), country: Schema.optional(Schema.String.check(Schema.isPattern(new RegExp("^[A-Z]{2}$")))) })), date_of_birth: Schema.optional(Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), mobile_phone_number: Schema.optional(Schema.String), home_phone_number: Schema.optional(Schema.String), nationality: Schema.optional(Schema.String.check(Schema.isPattern(new RegExp("^[A-Z]{2}$")))), start_date: Schema.optional(Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), legal_entity_id: Schema.optional(Schema.String), location_id: Schema.optional(Schema.String), remote_fields: Schema.optional(Schema.Struct({ humaans: Schema.optional(Schema.Struct({ employee: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)) })), hibob: Schema.optional(Schema.Struct({ employee: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)) })), sympa: Schema.optional(Schema.Struct({ GenericNewHire: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)) })), silae: Schema.optional(Schema.Struct({ siret: Schema.optional(Schema.String), employee: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)), employment: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)) })), peoplehr: Schema.optional(Schema.Struct({ job_role_effective_date: Schema.optional(Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), department: Schema.optional(Schema.String) })), zohopeople: Schema.optional(Schema.Struct({ employee_id: Schema.optional(Schema.String.check(Schema.isMinLength(1))) })), workday: Schema.optional(Schema.Struct({ job_requisition_id: Schema.optional(Schema.String), position_id: Schema.optional(Schema.String), ssn: Schema.optional(Schema.String), bank_account: Schema.optional(Schema.Struct({ iban: Schema.String, bic: Schema.String, bank_name: Schema.String })) })), deel: Schema.optional(Schema.Struct({ candidate_id: Schema.String, candidate_link: Schema.String })), bamboohr: Schema.optional(Schema.Struct({ employee: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)) })), oracle: Schema.optional(Schema.Struct({ group_id: Schema.String, department_id: Schema.String })), adpworkforcenow: Schema.optional(Schema.Struct({ onboarding_template_code: Schema.String, applicant_payroll_profile_group_code: Schema.String, manager_position_id: Schema.optional(Schema.String), home_organization_unit_code: Schema.optional(Schema.String), personal_email: Schema.optional(Schema.String) })), azuread: Schema.optional(Schema.Struct({ password: Schema.String })), paycor: Schema.optional(Schema.Struct({ paygroupRemoteId: Schema.String, departmentRemoteId: Schema.String })), planday: Schema.optional(Schema.Struct({ department_remote_id: Schema.String })), dayforce: Schema.optional(Schema.Struct({ social_security_number: Schema.String, pay_type: Schema.String, pay_class: Schema.String, pay_group: Schema.String, base_rate: Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308)), role: Schema.String, location: Schema.String, department: Schema.String, job: Schema.String, country: Schema.String })) })), ssn: Schema.optional(Schema.String), marital_status: Schema.optional(Schema.Literals(["SINGLE", "MARRIED", "DOMESTIC_PARTNERSHIP", "WIDOWED", "DIVORCED", "SEPARATED", "NOT_MARRIED"])), termination_date: Schema.optional(Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), tax_id: Schema.optional(Schema.String) });
export type PatchHrisEmployeesEmployeeIdRequestBody = Schema.Schema.Type<typeof PatchHrisEmployeesEmployeeIdRequestBody>;

export const PostHrisEmployeesEmployeeIdDocumentsParameterEmployeeId = Schema.String;
export type PostHrisEmployeesEmployeeIdDocumentsParameterEmployeeId = Schema.Schema.Type<typeof PostHrisEmployeesEmployeeIdDocumentsParameterEmployeeId>;

export const PostHrisEmployeesEmployeeIdDocumentsPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Record(Schema.String, Schema.Unknown), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PostHrisEmployeesEmployeeIdDocumentsPositiveResponse = Schema.Schema.Type<typeof PostHrisEmployeesEmployeeIdDocumentsPositiveResponse>;

export const PostHrisEmployeesEmployeeIdDocumentsRequestBody = Schema.Struct({ category_id: Schema.String, document: Schema.Struct({ name: Schema.String, content_type: Schema.optional(Schema.String.check(Schema.isPattern(new RegExp("^[\\w.-]+\\/[\\w.-]+$")))), data_url: Schema.optional(Schema.String), data: Schema.optional(Schema.String) }) });
export type PostHrisEmployeesEmployeeIdDocumentsRequestBody = Schema.Schema.Type<typeof PostHrisEmployeesEmployeeIdDocumentsRequestBody>;

export const GetHrisEmployeeDocumentCategoriesParameterCursor = Schema.String;
export type GetHrisEmployeeDocumentCategoriesParameterCursor = Schema.Schema.Type<typeof GetHrisEmployeeDocumentCategoriesParameterCursor>;

export const GetHrisEmployeeDocumentCategoriesParameterPageSize = Schema_default_100_4;
export type GetHrisEmployeeDocumentCategoriesParameterPageSize = Schema.Schema.Type<typeof GetHrisEmployeeDocumentCategoriesParameterPageSize>;

export const GetHrisEmployeeDocumentCategoriesParameterUpdatedAfter = Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisEmployeeDocumentCategoriesParameterUpdatedAfter = Schema.Schema.Type<typeof GetHrisEmployeeDocumentCategoriesParameterUpdatedAfter>;

export const GetHrisEmployeeDocumentCategoriesParameterIncludeDeleted = Schema_default_false;
export type GetHrisEmployeeDocumentCategoriesParameterIncludeDeleted = Schema.Schema.Type<typeof GetHrisEmployeeDocumentCategoriesParameterIncludeDeleted>;

export const GetHrisEmployeeDocumentCategoriesParameterIgnoreUnsupportedFilters = Schema_default_false;
export type GetHrisEmployeeDocumentCategoriesParameterIgnoreUnsupportedFilters = Schema.Schema.Type<typeof GetHrisEmployeeDocumentCategoriesParameterIgnoreUnsupportedFilters>;

export const GetHrisEmployeeDocumentCategoriesParameterIds = Schema.String;
export type GetHrisEmployeeDocumentCategoriesParameterIds = Schema.Schema.Type<typeof GetHrisEmployeeDocumentCategoriesParameterIds>;

export const GetHrisEmployeeDocumentCategoriesParameterRemoteIds = Schema.String;
export type GetHrisEmployeeDocumentCategoriesParameterRemoteIds = Schema.Schema.Type<typeof GetHrisEmployeeDocumentCategoriesParameterRemoteIds>;

export const GetHrisEmployeeDocumentCategoriesPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), name: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String) })) }) });
export type GetHrisEmployeeDocumentCategoriesPositiveResponse = Schema.Schema.Type<typeof GetHrisEmployeeDocumentCategoriesPositiveResponse>;

export const GetHrisTeamsParameterCursor = Schema.String;
export type GetHrisTeamsParameterCursor = Schema.Schema.Type<typeof GetHrisTeamsParameterCursor>;

export const GetHrisTeamsParameterPageSize = Schema_default_100_4;
export type GetHrisTeamsParameterPageSize = Schema.Schema.Type<typeof GetHrisTeamsParameterPageSize>;

export const GetHrisTeamsParameterUpdatedAfter = Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisTeamsParameterUpdatedAfter = Schema.Schema.Type<typeof GetHrisTeamsParameterUpdatedAfter>;

export const GetHrisTeamsParameterIncludeDeleted = Schema_default_false;
export type GetHrisTeamsParameterIncludeDeleted = Schema.Schema.Type<typeof GetHrisTeamsParameterIncludeDeleted>;

export const GetHrisTeamsParameterIgnoreUnsupportedFilters = Schema_default_false;
export type GetHrisTeamsParameterIgnoreUnsupportedFilters = Schema.Schema.Type<typeof GetHrisTeamsParameterIgnoreUnsupportedFilters>;

export const GetHrisTeamsParameterIds = Schema.String;
export type GetHrisTeamsParameterIds = Schema.Schema.Type<typeof GetHrisTeamsParameterIds>;

export const GetHrisTeamsParameterRemoteIds = Schema.String;
export type GetHrisTeamsParameterRemoteIds = Schema.Schema.Type<typeof GetHrisTeamsParameterRemoteIds>;

export const GetHrisTeamsPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.String, name: Schema.NullOr(Schema.String), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), type: Schema.NullOr(Schema.Literals(["DEPARTMENT", "TEAM", "COST_CENTER"])), parent_id: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)) })) }) });
export type GetHrisTeamsPositiveResponse = Schema.Schema.Type<typeof GetHrisTeamsPositiveResponse>;

export const GetHrisGroupsParameterCursor = Schema.String;
export type GetHrisGroupsParameterCursor = Schema.Schema.Type<typeof GetHrisGroupsParameterCursor>;

export const GetHrisGroupsParameterPageSize = Schema_default_100_4;
export type GetHrisGroupsParameterPageSize = Schema.Schema.Type<typeof GetHrisGroupsParameterPageSize>;

export const GetHrisGroupsParameterUpdatedAfter = Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisGroupsParameterUpdatedAfter = Schema.Schema.Type<typeof GetHrisGroupsParameterUpdatedAfter>;

export const GetHrisGroupsParameterIncludeDeleted = Schema_default_false;
export type GetHrisGroupsParameterIncludeDeleted = Schema.Schema.Type<typeof GetHrisGroupsParameterIncludeDeleted>;

export const GetHrisGroupsParameterIgnoreUnsupportedFilters = Schema_default_false;
export type GetHrisGroupsParameterIgnoreUnsupportedFilters = Schema.Schema.Type<typeof GetHrisGroupsParameterIgnoreUnsupportedFilters>;

export const GetHrisGroupsParameterIds = Schema.String;
export type GetHrisGroupsParameterIds = Schema.Schema.Type<typeof GetHrisGroupsParameterIds>;

export const GetHrisGroupsParameterRemoteIds = Schema.String;
export type GetHrisGroupsParameterRemoteIds = Schema.Schema.Type<typeof GetHrisGroupsParameterRemoteIds>;

export const GetHrisGroupsParameterTypes = Schema.String;
export type GetHrisGroupsParameterTypes = Schema.Schema.Type<typeof GetHrisGroupsParameterTypes>;

export const GetHrisGroupsParameterNameContains = Schema.String;
export type GetHrisGroupsParameterNameContains = Schema.Schema.Type<typeof GetHrisGroupsParameterNameContains>;

export const GetHrisGroupsPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.String, name: Schema.NullOr(Schema.String), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), type: Schema.NullOr(Schema.Literals(["DEPARTMENT", "TEAM", "COST_CENTER"])), parent_id: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)) })) }) });
export type GetHrisGroupsPositiveResponse = Schema.Schema.Type<typeof GetHrisGroupsPositiveResponse>;

export const GetHrisEmploymentsParameterCursor = Schema.String;
export type GetHrisEmploymentsParameterCursor = Schema.Schema.Type<typeof GetHrisEmploymentsParameterCursor>;

export const GetHrisEmploymentsParameterPageSize = Schema_default_100_4;
export type GetHrisEmploymentsParameterPageSize = Schema.Schema.Type<typeof GetHrisEmploymentsParameterPageSize>;

export const GetHrisEmploymentsParameterUpdatedAfter = Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisEmploymentsParameterUpdatedAfter = Schema.Schema.Type<typeof GetHrisEmploymentsParameterUpdatedAfter>;

export const GetHrisEmploymentsParameterIncludeDeleted = Schema_default_false;
export type GetHrisEmploymentsParameterIncludeDeleted = Schema.Schema.Type<typeof GetHrisEmploymentsParameterIncludeDeleted>;

export const GetHrisEmploymentsParameterIgnoreUnsupportedFilters = Schema_default_false;
export type GetHrisEmploymentsParameterIgnoreUnsupportedFilters = Schema.Schema.Type<typeof GetHrisEmploymentsParameterIgnoreUnsupportedFilters>;

export const GetHrisEmploymentsParameterIds = Schema.String;
export type GetHrisEmploymentsParameterIds = Schema.Schema.Type<typeof GetHrisEmploymentsParameterIds>;

export const GetHrisEmploymentsParameterRemoteIds = Schema.String;
export type GetHrisEmploymentsParameterRemoteIds = Schema.Schema.Type<typeof GetHrisEmploymentsParameterRemoteIds>;

export const GetHrisEmploymentsPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), employee_id: Schema.String, job_title: Schema.NullOr(Schema.String), pay_rate: Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), pay_period: Schema.optional(Schema.Union([Schema.Literals(["HOUR", "DAY", "WEEK", "TWO_WEEKS", "HALF_MONTH", "MONTH", "TWO_MONTHS", "QUARTER", "HALF_YEAR", "YEAR"]), Schema.String, Schema.Null])), pay_frequency: Schema.optional(Schema.Union([Schema.Literals(["DAILY", "WEEKLY", "BIWEEKLY", "MONTHLY", "SEMIMONTHLY", "QUARTERLY", "SEMIANNUALLY", "ANNUALLY", "PRO_RATA"]), Schema.String, Schema.Null])), employment_type: Schema.optional(Schema.Union([Schema.Literals(["FULL_TIME", "PART_TIME", "CONTRACT", "INTERNSHIP", "FREELANCE", "WORKING_STUDENT", "APPRENTICESHIP", "TRAINING"]), Schema.String, Schema.Null])), pay_currency: Schema.NullOr(Schema.String), effective_date: Schema.NullOr(Schema.String), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)), custom_fields: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)), integration_fields: Schema.Array(Schema.Struct({ id: Schema.String, key: Schema.String, type: Schema.Literals(["DEFAULT", "CUSTOM"]), value: Schema.optional(Schema.Null), label: Schema.NullOr(Schema.String) })) })) }) });
export type GetHrisEmploymentsPositiveResponse = Schema.Schema.Type<typeof GetHrisEmploymentsPositiveResponse>;

export const GetHrisLocationsParameterCursor = Schema.String;
export type GetHrisLocationsParameterCursor = Schema.Schema.Type<typeof GetHrisLocationsParameterCursor>;

export const GetHrisLocationsParameterPageSize = Schema_default_100_4;
export type GetHrisLocationsParameterPageSize = Schema.Schema.Type<typeof GetHrisLocationsParameterPageSize>;

export const GetHrisLocationsParameterUpdatedAfter = Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisLocationsParameterUpdatedAfter = Schema.Schema.Type<typeof GetHrisLocationsParameterUpdatedAfter>;

export const GetHrisLocationsParameterIncludeDeleted = Schema_default_false;
export type GetHrisLocationsParameterIncludeDeleted = Schema.Schema.Type<typeof GetHrisLocationsParameterIncludeDeleted>;

export const GetHrisLocationsParameterIgnoreUnsupportedFilters = Schema_default_false;
export type GetHrisLocationsParameterIgnoreUnsupportedFilters = Schema.Schema.Type<typeof GetHrisLocationsParameterIgnoreUnsupportedFilters>;

export const GetHrisLocationsParameterIds = Schema.String;
export type GetHrisLocationsParameterIds = Schema.Schema.Type<typeof GetHrisLocationsParameterIds>;

export const GetHrisLocationsParameterRemoteIds = Schema.String;
export type GetHrisLocationsParameterRemoteIds = Schema.Schema.Type<typeof GetHrisLocationsParameterRemoteIds>;

export const GetHrisLocationsParameterNameContains = Schema.String;
export type GetHrisLocationsParameterNameContains = Schema.Schema.Type<typeof GetHrisLocationsParameterNameContains>;

export const GetHrisLocationsPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), name: Schema.NullOr(Schema.String), address: Schema.optional(Schema.NullOr(Schema.Struct({ city: Schema.optional(Schema.NullOr(Schema.String)), country: Schema.optional(Schema.NullOr(Schema.String)), raw: Schema.optional(Schema.NullOr(Schema.String)), state: Schema.optional(Schema.NullOr(Schema.String)), street_1: Schema.optional(Schema.NullOr(Schema.String)), street_2: Schema.optional(Schema.NullOr(Schema.String)), zip_code: Schema.optional(Schema.NullOr(Schema.String)) }))), type: Schema.NullOr(Schema.String), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)) })) }) });
export type GetHrisLocationsPositiveResponse = Schema.Schema.Type<typeof GetHrisLocationsPositiveResponse>;

export const GetHrisAbsenceTypesParameterCursor = Schema.String;
export type GetHrisAbsenceTypesParameterCursor = Schema.Schema.Type<typeof GetHrisAbsenceTypesParameterCursor>;

export const GetHrisAbsenceTypesParameterPageSize = Schema_default_100_4;
export type GetHrisAbsenceTypesParameterPageSize = Schema.Schema.Type<typeof GetHrisAbsenceTypesParameterPageSize>;

export const GetHrisAbsenceTypesParameterUpdatedAfter = Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisAbsenceTypesParameterUpdatedAfter = Schema.Schema.Type<typeof GetHrisAbsenceTypesParameterUpdatedAfter>;

export const GetHrisAbsenceTypesParameterIncludeDeleted = Schema_default_false;
export type GetHrisAbsenceTypesParameterIncludeDeleted = Schema.Schema.Type<typeof GetHrisAbsenceTypesParameterIncludeDeleted>;

export const GetHrisAbsenceTypesParameterIgnoreUnsupportedFilters = Schema_default_false;
export type GetHrisAbsenceTypesParameterIgnoreUnsupportedFilters = Schema.Schema.Type<typeof GetHrisAbsenceTypesParameterIgnoreUnsupportedFilters>;

export const GetHrisAbsenceTypesParameterIds = Schema.String;
export type GetHrisAbsenceTypesParameterIds = Schema.Schema.Type<typeof GetHrisAbsenceTypesParameterIds>;

export const GetHrisAbsenceTypesParameterRemoteIds = Schema.String;
export type GetHrisAbsenceTypesParameterRemoteIds = Schema.Schema.Type<typeof GetHrisAbsenceTypesParameterRemoteIds>;

export const GetHrisAbsenceTypesPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.String, name: Schema.NullOr(Schema.String), unit: Schema.NullOr(Schema.Literals(["HOURS", "DAYS"])), half_days_supported: Schema.NullOr(Schema.Boolean), exact_times_supported: Schema.NullOr(Schema.Boolean), remote_data: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String) })) }) });
export type GetHrisAbsenceTypesPositiveResponse = Schema.Schema.Type<typeof GetHrisAbsenceTypesPositiveResponse>;

export const GetHrisTimeOffBalancesParameterCursor = Schema.String;
export type GetHrisTimeOffBalancesParameterCursor = Schema.Schema.Type<typeof GetHrisTimeOffBalancesParameterCursor>;

export const GetHrisTimeOffBalancesParameterPageSize = Schema_default_100_4;
export type GetHrisTimeOffBalancesParameterPageSize = Schema.Schema.Type<typeof GetHrisTimeOffBalancesParameterPageSize>;

export const GetHrisTimeOffBalancesParameterUpdatedAfter = Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisTimeOffBalancesParameterUpdatedAfter = Schema.Schema.Type<typeof GetHrisTimeOffBalancesParameterUpdatedAfter>;

export const GetHrisTimeOffBalancesParameterIncludeDeleted = Schema_default_false;
export type GetHrisTimeOffBalancesParameterIncludeDeleted = Schema.Schema.Type<typeof GetHrisTimeOffBalancesParameterIncludeDeleted>;

export const GetHrisTimeOffBalancesParameterIgnoreUnsupportedFilters = Schema_default_false;
export type GetHrisTimeOffBalancesParameterIgnoreUnsupportedFilters = Schema.Schema.Type<typeof GetHrisTimeOffBalancesParameterIgnoreUnsupportedFilters>;

export const GetHrisTimeOffBalancesParameterIds = Schema.String;
export type GetHrisTimeOffBalancesParameterIds = Schema.Schema.Type<typeof GetHrisTimeOffBalancesParameterIds>;

export const GetHrisTimeOffBalancesParameterRemoteIds = Schema.String;
export type GetHrisTimeOffBalancesParameterRemoteIds = Schema.Schema.Type<typeof GetHrisTimeOffBalancesParameterRemoteIds>;

export const GetHrisTimeOffBalancesParameterEmployeeId = Schema.String;
export type GetHrisTimeOffBalancesParameterEmployeeId = Schema.Schema.Type<typeof GetHrisTimeOffBalancesParameterEmployeeId>;

export const GetHrisTimeOffBalancesPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), employee_id: Schema.String, type_id: Schema.String, balance: Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), balance_unit: Schema.NullOr(Schema.Literals(["HOURS", "DAYS"])), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), used: Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), used_unit: Schema.NullOr(Schema.Literals(["HOURS", "DAYS"])), remote_data: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)), type: Schema.Struct({ id: Schema.String, remote_id: Schema.String, name: Schema.NullOr(Schema.String), unit: Schema.NullOr(Schema.Literals(["HOURS", "DAYS"])), half_days_supported: Schema.NullOr(Schema.Boolean), exact_times_supported: Schema.NullOr(Schema.Boolean), remote_data: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String) }) })) }) });
export type GetHrisTimeOffBalancesPositiveResponse = Schema.Schema.Type<typeof GetHrisTimeOffBalancesPositiveResponse>;

export const GetHrisAbsencesParameterCursor = Schema.String;
export type GetHrisAbsencesParameterCursor = Schema.Schema.Type<typeof GetHrisAbsencesParameterCursor>;

export const GetHrisAbsencesParameterPageSize = Schema_default_100_4;
export type GetHrisAbsencesParameterPageSize = Schema.Schema.Type<typeof GetHrisAbsencesParameterPageSize>;

export const GetHrisAbsencesParameterUpdatedAfter = Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisAbsencesParameterUpdatedAfter = Schema.Schema.Type<typeof GetHrisAbsencesParameterUpdatedAfter>;

export const GetHrisAbsencesParameterIncludeDeleted = Schema_default_false;
export type GetHrisAbsencesParameterIncludeDeleted = Schema.Schema.Type<typeof GetHrisAbsencesParameterIncludeDeleted>;

export const GetHrisAbsencesParameterIgnoreUnsupportedFilters = Schema_default_false;
export type GetHrisAbsencesParameterIgnoreUnsupportedFilters = Schema.Schema.Type<typeof GetHrisAbsencesParameterIgnoreUnsupportedFilters>;

export const GetHrisAbsencesParameterIds = Schema.String;
export type GetHrisAbsencesParameterIds = Schema.Schema.Type<typeof GetHrisAbsencesParameterIds>;

export const GetHrisAbsencesParameterRemoteIds = Schema.String;
export type GetHrisAbsencesParameterRemoteIds = Schema.Schema.Type<typeof GetHrisAbsencesParameterRemoteIds>;

export const GetHrisAbsencesParameterDateFrom = Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisAbsencesParameterDateFrom = Schema.Schema.Type<typeof GetHrisAbsencesParameterDateFrom>;

export const GetHrisAbsencesParameterDateUntil = Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisAbsencesParameterDateUntil = Schema.Schema.Type<typeof GetHrisAbsencesParameterDateUntil>;

export const GetHrisAbsencesParameterTypeIds = Schema.String;
export type GetHrisAbsencesParameterTypeIds = Schema.Schema.Type<typeof GetHrisAbsencesParameterTypeIds>;

export const GetHrisAbsencesParameterEmployeeId = Schema.String;
export type GetHrisAbsencesParameterEmployeeId = Schema.Schema.Type<typeof GetHrisAbsencesParameterEmployeeId>;

export const GetHrisAbsencesParameterTimeFrom = Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisAbsencesParameterTimeFrom = Schema.Schema.Type<typeof GetHrisAbsencesParameterTimeFrom>;

export const GetHrisAbsencesParameterTimeUntil = Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisAbsencesParameterTimeUntil = Schema.Schema.Type<typeof GetHrisAbsencesParameterTimeUntil>;

export const GetHrisAbsencesPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), employee_id: Schema.String, approver_id: Schema.NullOr(Schema.String), start_date: Schema.Null, end_date: Schema.Null, start_half_day: Schema.NullOr(Schema.Boolean), end_half_day: Schema.NullOr(Schema.Boolean), start_time: Schema.Null, end_time: Schema.Null, amount: Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), unit: Schema.NullOr(Schema.Literals(["HOURS", "DAYS"])), status: Schema.optional(Schema.Union([Schema.Literals(["REQUESTED", "APPROVED", "DECLINED", "CANCELLED", "DELETED"]), Schema.String, Schema.Null])), employee_note: Schema.NullOr(Schema.String), type_id: Schema.NullOr(Schema.String), remote_created_at: Schema.NullOr(Schema.String), remote_updated_at: Schema.NullOr(Schema.String), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)), type: Schema.NullOr(Schema.Struct({ id: Schema.String, remote_id: Schema.String, name: Schema.NullOr(Schema.String), unit: Schema.NullOr(Schema.Literals(["HOURS", "DAYS"])), half_days_supported: Schema.NullOr(Schema.Boolean), exact_times_supported: Schema.NullOr(Schema.Boolean), remote_data: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String) })) })) }) });
export type GetHrisAbsencesPositiveResponse = Schema.Schema.Type<typeof GetHrisAbsencesPositiveResponse>;

export const PostHrisAbsencesPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), employee_id: Schema.String, approver_id: Schema.NullOr(Schema.String), start_date: Schema.Null, end_date: Schema.Null, start_half_day: Schema.NullOr(Schema.Boolean), end_half_day: Schema.NullOr(Schema.Boolean), start_time: Schema.Null, end_time: Schema.Null, amount: Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), unit: Schema.NullOr(Schema.Literals(["HOURS", "DAYS"])), status: Schema.optional(Schema.Union([Schema.Literals(["REQUESTED", "APPROVED", "DECLINED", "CANCELLED", "DELETED"]), Schema.String, Schema.Null])), employee_note: Schema.NullOr(Schema.String), type_id: Schema.NullOr(Schema.String), remote_created_at: Schema.NullOr(Schema.String), remote_updated_at: Schema.NullOr(Schema.String), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)) }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PostHrisAbsencesPositiveResponse = Schema.Schema.Type<typeof PostHrisAbsencesPositiveResponse>;

export const PostHrisAbsencesRequestBody = Schema.Struct({ employee_id: Schema.String, absence_type_id: Schema.String, status: Schema_default_REQUESTED_prop, start_date: Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))), end_date: Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))), start_half_day: Boolean_default_false_prop, end_half_day: Boolean_default_false_prop, amount: Schema.optional(Schema.Number.check(Schema.isGreaterThanOrEqualTo(0))), unit: Schema.optional(Schema.Literals(["HOURS", "DAYS"])), employee_note: Schema.NullOr(Schema.String), start_time: Schema.optional(Schema.String.check(Schema.isPattern(new RegExp("^(?:2[0-3]|[01]?\\d):[0-5]?\\d(:[0-5]?\\d)?$")))), end_time: Schema.optional(Schema.String.check(Schema.isPattern(new RegExp("^(?:2[0-3]|[01]?\\d):[0-5]?\\d(:[0-5]?\\d)?$")))), remote_fields: Schema.optional(Schema.Struct({ a3innuvanomina: Schema.optional(Schema.Struct({ benefit_type_id: Schema.optional(Schema.Literals(["Delegated Payment", "No Right to Benefit", "Direct payment"])) })), adpworkforcenow: Schema.optional(Schema.Struct({ employment_id: Schema.optional(Schema.String), paid_leave: Schema.optional(Schema.Boolean) })) })) });
export type PostHrisAbsencesRequestBody = Schema.Schema.Type<typeof PostHrisAbsencesRequestBody>;

export const DeleteHrisAbsencesAbsenceIdParameterAbsenceId = Schema.String;
export type DeleteHrisAbsencesAbsenceIdParameterAbsenceId = Schema.Schema.Type<typeof DeleteHrisAbsencesAbsenceIdParameterAbsenceId>;

export const DeleteHrisAbsencesAbsenceIdPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), employee_id: Schema.String, approver_id: Schema.NullOr(Schema.String), start_date: Schema.Null, end_date: Schema.Null, start_half_day: Schema.NullOr(Schema.Boolean), end_half_day: Schema.NullOr(Schema.Boolean), start_time: Schema.Null, end_time: Schema.Null, amount: Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), unit: Schema.NullOr(Schema.Literals(["HOURS", "DAYS"])), status: Schema.optional(Schema.Union([Schema.Literals(["REQUESTED", "APPROVED", "DECLINED", "CANCELLED", "DELETED"]), Schema.String, Schema.Null])), employee_note: Schema.NullOr(Schema.String), type_id: Schema.NullOr(Schema.String), remote_created_at: Schema.NullOr(Schema.String), remote_updated_at: Schema.NullOr(Schema.String), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)) }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type DeleteHrisAbsencesAbsenceIdPositiveResponse = Schema.Schema.Type<typeof DeleteHrisAbsencesAbsenceIdPositiveResponse>;

export const DeleteHrisAbsencesAbsenceIdRequestBody = Schema.Struct({ remote_fields: Schema.optional(Schema.Struct({ adpworkforcenow: Schema.optional(Schema.Struct({ employment_id: Schema.optional(Schema.String) })) })) });
export type DeleteHrisAbsencesAbsenceIdRequestBody = Schema.Schema.Type<typeof DeleteHrisAbsencesAbsenceIdRequestBody>;

export const GetHrisLegalEntitiesParameterCursor = Schema.String;
export type GetHrisLegalEntitiesParameterCursor = Schema.Schema.Type<typeof GetHrisLegalEntitiesParameterCursor>;

export const GetHrisLegalEntitiesParameterPageSize = Schema_default_100_4;
export type GetHrisLegalEntitiesParameterPageSize = Schema.Schema.Type<typeof GetHrisLegalEntitiesParameterPageSize>;

export const GetHrisLegalEntitiesParameterUpdatedAfter = Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisLegalEntitiesParameterUpdatedAfter = Schema.Schema.Type<typeof GetHrisLegalEntitiesParameterUpdatedAfter>;

export const GetHrisLegalEntitiesParameterIncludeDeleted = Schema_default_false;
export type GetHrisLegalEntitiesParameterIncludeDeleted = Schema.Schema.Type<typeof GetHrisLegalEntitiesParameterIncludeDeleted>;

export const GetHrisLegalEntitiesParameterIgnoreUnsupportedFilters = Schema_default_false;
export type GetHrisLegalEntitiesParameterIgnoreUnsupportedFilters = Schema.Schema.Type<typeof GetHrisLegalEntitiesParameterIgnoreUnsupportedFilters>;

export const GetHrisLegalEntitiesParameterIds = Schema.String;
export type GetHrisLegalEntitiesParameterIds = Schema.Schema.Type<typeof GetHrisLegalEntitiesParameterIds>;

export const GetHrisLegalEntitiesParameterRemoteIds = Schema.String;
export type GetHrisLegalEntitiesParameterRemoteIds = Schema.Schema.Type<typeof GetHrisLegalEntitiesParameterRemoteIds>;

export const GetHrisLegalEntitiesParameterNameContains = Schema.String;
export type GetHrisLegalEntitiesParameterNameContains = Schema.Schema.Type<typeof GetHrisLegalEntitiesParameterNameContains>;

export const GetHrisLegalEntitiesPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), name: Schema.NullOr(Schema.String), address: Schema.optional(Schema.NullOr(Schema.Struct({ city: Schema.optional(Schema.NullOr(Schema.String)), country: Schema.optional(Schema.NullOr(Schema.String)), raw: Schema.optional(Schema.NullOr(Schema.String)), state: Schema.optional(Schema.NullOr(Schema.String)), street_1: Schema.optional(Schema.NullOr(Schema.String)), street_2: Schema.optional(Schema.NullOr(Schema.String)), zip_code: Schema.optional(Schema.NullOr(Schema.String)) }))), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)) })) }) });
export type GetHrisLegalEntitiesPositiveResponse = Schema.Schema.Type<typeof GetHrisLegalEntitiesPositiveResponse>;

export const GetHrisTimesheetsParameterCursor = Schema.String;
export type GetHrisTimesheetsParameterCursor = Schema.Schema.Type<typeof GetHrisTimesheetsParameterCursor>;

export const GetHrisTimesheetsParameterPageSize = Schema_default_100_4;
export type GetHrisTimesheetsParameterPageSize = Schema.Schema.Type<typeof GetHrisTimesheetsParameterPageSize>;

export const GetHrisTimesheetsParameterUpdatedAfter = Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisTimesheetsParameterUpdatedAfter = Schema.Schema.Type<typeof GetHrisTimesheetsParameterUpdatedAfter>;

export const GetHrisTimesheetsParameterIncludeDeleted = Schema_default_false;
export type GetHrisTimesheetsParameterIncludeDeleted = Schema.Schema.Type<typeof GetHrisTimesheetsParameterIncludeDeleted>;

export const GetHrisTimesheetsParameterIgnoreUnsupportedFilters = Schema_default_false;
export type GetHrisTimesheetsParameterIgnoreUnsupportedFilters = Schema.Schema.Type<typeof GetHrisTimesheetsParameterIgnoreUnsupportedFilters>;

export const GetHrisTimesheetsParameterIds = Schema.String;
export type GetHrisTimesheetsParameterIds = Schema.Schema.Type<typeof GetHrisTimesheetsParameterIds>;

export const GetHrisTimesheetsParameterRemoteIds = Schema.String;
export type GetHrisTimesheetsParameterRemoteIds = Schema.Schema.Type<typeof GetHrisTimesheetsParameterRemoteIds>;

export const GetHrisTimesheetsParameterEmployeeId = Schema.String;
export type GetHrisTimesheetsParameterEmployeeId = Schema.Schema.Type<typeof GetHrisTimesheetsParameterEmployeeId>;

export const GetHrisTimesheetsParameterStartedBefore = Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisTimesheetsParameterStartedBefore = Schema.Schema.Type<typeof GetHrisTimesheetsParameterStartedBefore>;

export const GetHrisTimesheetsParameterStartedAfter = Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisTimesheetsParameterStartedAfter = Schema.Schema.Type<typeof GetHrisTimesheetsParameterStartedAfter>;

export const GetHrisTimesheetsParameterEndedBefore = Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisTimesheetsParameterEndedBefore = Schema.Schema.Type<typeof GetHrisTimesheetsParameterEndedBefore>;

export const GetHrisTimesheetsParameterEndedAfter = Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisTimesheetsParameterEndedAfter = Schema.Schema.Type<typeof GetHrisTimesheetsParameterEndedAfter>;

export const GetHrisTimesheetsPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), employee_id: Schema.String, started_at: Schema.NullOr(Schema.String), ended_at: Schema.NullOr(Schema.String), timezone: Schema.NullOr(Schema.String.check(Schema.isPattern(new RegExp("^[+-](?:0\\d|1[0-4]):[0-5]\\d$")))), payable_hours: Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), unpaid_break_minutes: Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), breaks: Schema.optional(Schema.NullOr(Schema.Array(Schema.Struct({ ended_at: Schema.Union([Schema.String, Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")))]), paid: Schema.Boolean, started_at: Schema.Union([Schema.String, Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")))]) })))), approval_status: Schema.NullOr(Schema.String), approved_at: Schema.NullOr(Schema.String), comment: Schema.NullOr(Schema.String), custom_fields: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)), integration_fields: Schema.Array(Schema.Struct({ id: Schema.String, key: Schema.String, type: Schema.Literals(["DEFAULT", "CUSTOM"]), value: Schema.optional(Schema.Null), label: Schema.NullOr(Schema.String) })), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)) })) }) });
export type GetHrisTimesheetsPositiveResponse = Schema.Schema.Type<typeof GetHrisTimesheetsPositiveResponse>;

export const GetHrisPerformanceReviewCyclesParameterCursor = Schema.String;
export type GetHrisPerformanceReviewCyclesParameterCursor = Schema.Schema.Type<typeof GetHrisPerformanceReviewCyclesParameterCursor>;

export const GetHrisPerformanceReviewCyclesParameterPageSize = Schema_default_100_4;
export type GetHrisPerformanceReviewCyclesParameterPageSize = Schema.Schema.Type<typeof GetHrisPerformanceReviewCyclesParameterPageSize>;

export const GetHrisPerformanceReviewCyclesParameterUpdatedAfter = Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisPerformanceReviewCyclesParameterUpdatedAfter = Schema.Schema.Type<typeof GetHrisPerformanceReviewCyclesParameterUpdatedAfter>;

export const GetHrisPerformanceReviewCyclesParameterIncludeDeleted = Schema_default_false;
export type GetHrisPerformanceReviewCyclesParameterIncludeDeleted = Schema.Schema.Type<typeof GetHrisPerformanceReviewCyclesParameterIncludeDeleted>;

export const GetHrisPerformanceReviewCyclesParameterIgnoreUnsupportedFilters = Schema_default_false;
export type GetHrisPerformanceReviewCyclesParameterIgnoreUnsupportedFilters = Schema.Schema.Type<typeof GetHrisPerformanceReviewCyclesParameterIgnoreUnsupportedFilters>;

export const GetHrisPerformanceReviewCyclesParameterIds = Schema.String;
export type GetHrisPerformanceReviewCyclesParameterIds = Schema.Schema.Type<typeof GetHrisPerformanceReviewCyclesParameterIds>;

export const GetHrisPerformanceReviewCyclesParameterRemoteIds = Schema.String;
export type GetHrisPerformanceReviewCyclesParameterRemoteIds = Schema.Schema.Type<typeof GetHrisPerformanceReviewCyclesParameterRemoteIds>;

export const GetHrisPerformanceReviewCyclesPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.String, name: Schema.NullOr(Schema.String), review_period_start_date: Schema.NullOr(Schema.String), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)) })) }) });
export type GetHrisPerformanceReviewCyclesPositiveResponse = Schema.Schema.Type<typeof GetHrisPerformanceReviewCyclesPositiveResponse>;

export const GetHrisPerformanceReviewsParameterCursor = Schema.String;
export type GetHrisPerformanceReviewsParameterCursor = Schema.Schema.Type<typeof GetHrisPerformanceReviewsParameterCursor>;

export const GetHrisPerformanceReviewsParameterPageSize = Schema_default_100_4;
export type GetHrisPerformanceReviewsParameterPageSize = Schema.Schema.Type<typeof GetHrisPerformanceReviewsParameterPageSize>;

export const GetHrisPerformanceReviewsParameterUpdatedAfter = Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisPerformanceReviewsParameterUpdatedAfter = Schema.Schema.Type<typeof GetHrisPerformanceReviewsParameterUpdatedAfter>;

export const GetHrisPerformanceReviewsParameterIncludeDeleted = Schema_default_false;
export type GetHrisPerformanceReviewsParameterIncludeDeleted = Schema.Schema.Type<typeof GetHrisPerformanceReviewsParameterIncludeDeleted>;

export const GetHrisPerformanceReviewsParameterIgnoreUnsupportedFilters = Schema_default_false;
export type GetHrisPerformanceReviewsParameterIgnoreUnsupportedFilters = Schema.Schema.Type<typeof GetHrisPerformanceReviewsParameterIgnoreUnsupportedFilters>;

export const GetHrisPerformanceReviewsParameterIds = Schema.String;
export type GetHrisPerformanceReviewsParameterIds = Schema.Schema.Type<typeof GetHrisPerformanceReviewsParameterIds>;

export const GetHrisPerformanceReviewsParameterRemoteIds = Schema.String;
export type GetHrisPerformanceReviewsParameterRemoteIds = Schema.Schema.Type<typeof GetHrisPerformanceReviewsParameterRemoteIds>;

export const GetHrisPerformanceReviewsParameterTypes = Schema.String;
export type GetHrisPerformanceReviewsParameterTypes = Schema.Schema.Type<typeof GetHrisPerformanceReviewsParameterTypes>;

export const GetHrisPerformanceReviewsParameterReviewCycleIds = Schema.String;
export type GetHrisPerformanceReviewsParameterReviewCycleIds = Schema.Schema.Type<typeof GetHrisPerformanceReviewsParameterReviewCycleIds>;

export const GetHrisPerformanceReviewsParameterRevieweeIds = Schema.String;
export type GetHrisPerformanceReviewsParameterRevieweeIds = Schema.Schema.Type<typeof GetHrisPerformanceReviewsParameterRevieweeIds>;

export const GetHrisPerformanceReviewsPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.String, type: Schema.NullOr(Schema.Literals(["MANAGER", "DIRECT_REPORT", "PEER", "SELF"])), summary_comment: Schema.NullOr(Schema.String), summary_rating: Schema.optional(Schema.Union([Schema.Struct({ type: Schema.Literal("NUMERIC"), min: Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), max: Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), value: Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))) }), Schema.Struct({ type: Schema.Literal("SINGLE_SELECT"), ordered_options: Schema.NullOr(Schema.Array(Schema.String)), value: Schema.NullOr(Schema.String) }), Schema.Null])), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)), reviewee: Schema.Struct({ id: Schema.String, remote_id: Schema.String, first_name: Schema.NullOr(Schema.String), last_name: Schema.NullOr(Schema.String), display_full_name: Schema.NullOr(Schema.String), work_email: Schema.optional(Schema.NullOr(Schema.String.check(Schema.isPattern(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$"))))), remote_deleted_at: Schema.NullOr(Schema.String) }), reviewer: Schema.NullOr(Schema.Struct({ id: Schema.String, remote_id: Schema.String, first_name: Schema.NullOr(Schema.String), last_name: Schema.NullOr(Schema.String), display_full_name: Schema.NullOr(Schema.String), work_email: Schema.optional(Schema.NullOr(Schema.String.check(Schema.isPattern(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$"))))), remote_deleted_at: Schema.NullOr(Schema.String) })), review_cycle: Schema.NullOr(Schema.Struct({ id: Schema.String, remote_id: Schema.String, name: Schema.NullOr(Schema.String), review_period_start_date: Schema.NullOr(Schema.String), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)) })) })) }) });
export type GetHrisPerformanceReviewsPositiveResponse = Schema.Schema.Type<typeof GetHrisPerformanceReviewsPositiveResponse>;

export const GetHrisSkillsParameterIds = Schema.String;
export type GetHrisSkillsParameterIds = Schema.Schema.Type<typeof GetHrisSkillsParameterIds>;

export const GetHrisSkillsParameterRemoteIds = Schema.String;
export type GetHrisSkillsParameterRemoteIds = Schema.Schema.Type<typeof GetHrisSkillsParameterRemoteIds>;

export const GetHrisSkillsParameterNameContains = Schema.String;
export type GetHrisSkillsParameterNameContains = Schema.Schema.Type<typeof GetHrisSkillsParameterNameContains>;

export const GetHrisSkillsPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.String, name: Schema.String, description: Schema.NullOr(Schema.String), ordered_levels: Schema.NullOr(Schema.Array(Schema.String)), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)) })) }) });
export type GetHrisSkillsPositiveResponse = Schema.Schema.Type<typeof GetHrisSkillsPositiveResponse>;

export const PostHrisSkillsPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ id: Schema.String, remote_id: Schema.String, name: Schema.String, description: Schema.NullOr(Schema.String), ordered_levels: Schema.NullOr(Schema.Array(Schema.String)), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)) }) });
export type PostHrisSkillsPositiveResponse = Schema.Schema.Type<typeof PostHrisSkillsPositiveResponse>;

export const PostHrisSkillsRequestBody = Schema.Struct({ name: Schema.String, levels: Schema.optional(Schema.Array(Schema.String)) });
export type PostHrisSkillsRequestBody = Schema.Schema.Type<typeof PostHrisSkillsRequestBody>;

export const PatchHrisSkillsSkillIdParameterSkillId = Schema.String;
export type PatchHrisSkillsSkillIdParameterSkillId = Schema.Schema.Type<typeof PatchHrisSkillsSkillIdParameterSkillId>;

export const PatchHrisSkillsSkillIdPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ id: Schema.String, remote_id: Schema.String, name: Schema.String, description: Schema.NullOr(Schema.String), ordered_levels: Schema.NullOr(Schema.Array(Schema.String)), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)) }) });
export type PatchHrisSkillsSkillIdPositiveResponse = Schema.Schema.Type<typeof PatchHrisSkillsSkillIdPositiveResponse>;

export const PatchHrisSkillsSkillIdRequestBody = Schema.Struct({ name: Schema.optional(Schema.String), levels: Schema.optional(Schema.Array(Schema.String)) });
export type PatchHrisSkillsSkillIdRequestBody = Schema.Schema.Type<typeof PatchHrisSkillsSkillIdRequestBody>;

export const DeleteHrisSkillsSkillIdParameterSkillId = Schema.String;
export type DeleteHrisSkillsSkillIdParameterSkillId = Schema.Schema.Type<typeof DeleteHrisSkillsSkillIdParameterSkillId>;

export const DeleteHrisSkillsSkillIdPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ id: Schema.String, remote_id: Schema.String, name: Schema.String, description: Schema.NullOr(Schema.String), ordered_levels: Schema.NullOr(Schema.Array(Schema.String)), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)) }) });
export type DeleteHrisSkillsSkillIdPositiveResponse = Schema.Schema.Type<typeof DeleteHrisSkillsSkillIdPositiveResponse>;

export const DeleteHrisSkillsSkillIdRequestBody = Schema.Struct({  });
export type DeleteHrisSkillsSkillIdRequestBody = Schema.Schema.Type<typeof DeleteHrisSkillsSkillIdRequestBody>;

export const GetHrisEmployeeSkillAssignmentsParameterIds = Schema.String;
export type GetHrisEmployeeSkillAssignmentsParameterIds = Schema.Schema.Type<typeof GetHrisEmployeeSkillAssignmentsParameterIds>;

export const GetHrisEmployeeSkillAssignmentsParameterRemoteIds = Schema.String;
export type GetHrisEmployeeSkillAssignmentsParameterRemoteIds = Schema.Schema.Type<typeof GetHrisEmployeeSkillAssignmentsParameterRemoteIds>;

export const GetHrisEmployeeSkillAssignmentsParameterEmployeeIds = Schema.String;
export type GetHrisEmployeeSkillAssignmentsParameterEmployeeIds = Schema.Schema.Type<typeof GetHrisEmployeeSkillAssignmentsParameterEmployeeIds>;

export const GetHrisEmployeeSkillAssignmentsParameterSkillIds = Schema.String;
export type GetHrisEmployeeSkillAssignmentsParameterSkillIds = Schema.Schema.Type<typeof GetHrisEmployeeSkillAssignmentsParameterSkillIds>;

export const GetHrisEmployeeSkillAssignmentsPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, employee_id: Schema.String, skill_id: Schema.String, current_level: Schema.NullOr(Schema.String) })) }) });
export type GetHrisEmployeeSkillAssignmentsPositiveResponse = Schema.Schema.Type<typeof GetHrisEmployeeSkillAssignmentsPositiveResponse>;

export const PostHrisEmployeeSkillAssignmentsPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ id: Schema.String, employee_id: Schema.String, skill_id: Schema.String, current_level: Schema.NullOr(Schema.String) }) });
export type PostHrisEmployeeSkillAssignmentsPositiveResponse = Schema.Schema.Type<typeof PostHrisEmployeeSkillAssignmentsPositiveResponse>;

export const PostHrisEmployeeSkillAssignmentsRequestBody = Schema.Struct({ employee_id: Schema.String, skill_id: Schema.String, current_level: Schema.optional(Schema.String) });
export type PostHrisEmployeeSkillAssignmentsRequestBody = Schema.Schema.Type<typeof PostHrisEmployeeSkillAssignmentsRequestBody>;

export const PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId = Schema.String;
export type PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId = Schema.Schema.Type<typeof PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId>;

export const PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ id: Schema.String, employee_id: Schema.String, skill_id: Schema.String, current_level: Schema.NullOr(Schema.String) }) });
export type PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse = Schema.Schema.Type<typeof PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse>;

export const PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody = Schema.Struct({ current_level: Schema.NullOr(Schema.String) });
export type PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody = Schema.Schema.Type<typeof PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody>;

export const DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId = Schema.String;
export type DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId = Schema.Schema.Type<typeof DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId>;

export const DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ id: Schema.String, employee_id: Schema.String, skill_id: Schema.String, current_level: Schema.NullOr(Schema.String) }) });
export type DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse = Schema.Schema.Type<typeof DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse>;

export const DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody = Schema.Struct({  });
export type DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody = Schema.Schema.Type<typeof DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody>;

export const GetHrisStaffingEntitiesParameterCursor = Schema.String;
export type GetHrisStaffingEntitiesParameterCursor = Schema.Schema.Type<typeof GetHrisStaffingEntitiesParameterCursor>;

export const GetHrisStaffingEntitiesParameterPageSize = Schema_default_100_4;
export type GetHrisStaffingEntitiesParameterPageSize = Schema.Schema.Type<typeof GetHrisStaffingEntitiesParameterPageSize>;

export const GetHrisStaffingEntitiesParameterUpdatedAfter = Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetHrisStaffingEntitiesParameterUpdatedAfter = Schema.Schema.Type<typeof GetHrisStaffingEntitiesParameterUpdatedAfter>;

export const GetHrisStaffingEntitiesParameterIncludeDeleted = Schema_default_false;
export type GetHrisStaffingEntitiesParameterIncludeDeleted = Schema.Schema.Type<typeof GetHrisStaffingEntitiesParameterIncludeDeleted>;

export const GetHrisStaffingEntitiesParameterIgnoreUnsupportedFilters = Schema_default_false;
export type GetHrisStaffingEntitiesParameterIgnoreUnsupportedFilters = Schema.Schema.Type<typeof GetHrisStaffingEntitiesParameterIgnoreUnsupportedFilters>;

export const GetHrisStaffingEntitiesParameterIds = Schema.String;
export type GetHrisStaffingEntitiesParameterIds = Schema.Schema.Type<typeof GetHrisStaffingEntitiesParameterIds>;

export const GetHrisStaffingEntitiesParameterRemoteIds = Schema.String;
export type GetHrisStaffingEntitiesParameterRemoteIds = Schema.Schema.Type<typeof GetHrisStaffingEntitiesParameterRemoteIds>;

export const GetHrisStaffingEntitiesParameterModelTypes = Schema.String;
export type GetHrisStaffingEntitiesParameterModelTypes = Schema.Schema.Type<typeof GetHrisStaffingEntitiesParameterModelTypes>;

export const GetHrisStaffingEntitiesParameterStatuses = Schema.String;
export type GetHrisStaffingEntitiesParameterStatuses = Schema.Schema.Type<typeof GetHrisStaffingEntitiesParameterStatuses>;

export const GetHrisStaffingEntitiesPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.String, name: Schema.NullOr(Schema.String), model_type: Schema.NullOr(Schema.Literals(["JOB", "POSITION", "REQUISITION"])), description: Schema.NullOr(Schema.String), status: Schema.NullOr(Schema.Literals(["OPEN_LIMITED", "OPEN_UNLIMITED", "PENDING", "FROZEN", "FILLED", "CLOSED"])), employment_types: Schema.optional(Schema.NullOr(Schema.Array(Schema.Struct({ remote_label: Schema.String, unified_type: Schema.NullOr(Schema.Literals(["FULL_TIME", "PART_TIME", "CONTRACT", "INTERNSHIP", "FREELANCE", "WORKING_STUDENT", "APPRENTICESHIP", "TRAINING"])) })))), number_of_openings: Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), parent_id: Schema.NullOr(Schema.String), remote_url: Schema.NullOr(Schema.String), remote_created_at: Schema.NullOr(Schema.String), remote_updated_at: Schema.NullOr(Schema.String), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), custom_fields: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)), integration_fields: Schema.Array(Schema.Struct({ id: Schema.String, key: Schema.String, type: Schema.Literals(["DEFAULT", "CUSTOM"]), value: Schema.optional(Schema.Null), label: Schema.NullOr(Schema.String) })), remote_data: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)), locations: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), name: Schema.NullOr(Schema.String), type: Schema.NullOr(Schema.String) })), legal_entities: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), name: Schema.NullOr(Schema.String) })), groups: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.String, name: Schema.NullOr(Schema.String), type: Schema.NullOr(Schema.Literals(["DEPARTMENT", "TEAM", "COST_CENTER"])) })) })) }) });
export type GetHrisStaffingEntitiesPositiveResponse = Schema.Schema.Type<typeof GetHrisStaffingEntitiesPositiveResponse>;

export const GetAtsApplicationsParameterCursor = Schema.String;
export type GetAtsApplicationsParameterCursor = Schema.Schema.Type<typeof GetAtsApplicationsParameterCursor>;

export const GetAtsApplicationsParameterPageSize = Schema_default_100_4;
export type GetAtsApplicationsParameterPageSize = Schema.Schema.Type<typeof GetAtsApplicationsParameterPageSize>;

export const GetAtsApplicationsParameterUpdatedAfter = Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetAtsApplicationsParameterUpdatedAfter = Schema.Schema.Type<typeof GetAtsApplicationsParameterUpdatedAfter>;

export const GetAtsApplicationsParameterIncludeDeleted = Schema_default_false;
export type GetAtsApplicationsParameterIncludeDeleted = Schema.Schema.Type<typeof GetAtsApplicationsParameterIncludeDeleted>;

export const GetAtsApplicationsParameterIgnoreUnsupportedFilters = Schema_default_false;
export type GetAtsApplicationsParameterIgnoreUnsupportedFilters = Schema.Schema.Type<typeof GetAtsApplicationsParameterIgnoreUnsupportedFilters>;

export const GetAtsApplicationsParameterIds = Schema.String;
export type GetAtsApplicationsParameterIds = Schema.Schema.Type<typeof GetAtsApplicationsParameterIds>;

export const GetAtsApplicationsParameterRemoteIds = Schema.String;
export type GetAtsApplicationsParameterRemoteIds = Schema.Schema.Type<typeof GetAtsApplicationsParameterRemoteIds>;

export const GetAtsApplicationsParameterOutcome = Schema.Literals(["PENDING", "HIRED", "DECLINED"]);
export type GetAtsApplicationsParameterOutcome = Schema.Schema.Type<typeof GetAtsApplicationsParameterOutcome>;

export const GetAtsApplicationsParameterOutcomes = Schema.String;
export type GetAtsApplicationsParameterOutcomes = Schema.Schema.Type<typeof GetAtsApplicationsParameterOutcomes>;

export const GetAtsApplicationsParameterJobIds = Schema.String;
export type GetAtsApplicationsParameterJobIds = Schema.Schema.Type<typeof GetAtsApplicationsParameterJobIds>;

export const GetAtsApplicationsParameterJobRemoteIds = Schema.String;
export type GetAtsApplicationsParameterJobRemoteIds = Schema.Schema.Type<typeof GetAtsApplicationsParameterJobRemoteIds>;

export const GetAtsApplicationsParameterCurrentStageIds = Schema.String;
export type GetAtsApplicationsParameterCurrentStageIds = Schema.Schema.Type<typeof GetAtsApplicationsParameterCurrentStageIds>;

export const GetAtsApplicationsParameterRemoteCreatedAfter = Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetAtsApplicationsParameterRemoteCreatedAfter = Schema.Schema.Type<typeof GetAtsApplicationsParameterRemoteCreatedAfter>;

export const GetAtsApplicationsPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), outcome: Schema.NullOr(Schema.Literals(["PENDING", "HIRED", "DECLINED"])), rejection_reason_name: Schema.NullOr(Schema.String), rejected_at: Schema.NullOr(Schema.String), current_stage_id: Schema.NullOr(Schema.String), job_id: Schema.NullOr(Schema.String), candidate_id: Schema.NullOr(Schema.String), screening_question_answers: NullOr_default_value_prop_12, custom_fields: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)), integration_fields: Schema.Array(Schema.Struct({ id: Schema.String, key: Schema.String, type: Schema.Literals(["DEFAULT", "CUSTOM"]), value: Schema.optional(Schema.Null), label: Schema.NullOr(Schema.String) })), remote_url: Schema.NullOr(Schema.String), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), remote_created_at: Schema.NullOr(Schema.String), remote_updated_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)), candidate: Schema.NullOr(Schema.Struct({ id: Schema.String, remote_id: Schema.String, first_name: Schema.NullOr(Schema.String), last_name: Schema.NullOr(Schema.String), email_addresses: NullOr_default_value_prop, phone_numbers: NullOr_default_value_prop_10, social_media: NullOr_default_value_prop_11, source: Schema.NullOr(Schema.String), remote_url: Schema.NullOr(Schema.String), tags: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), name: Schema.NullOr(Schema.String) })) })), current_stage: Schema.NullOr(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), name: Schema.NullOr(Schema.String), index: Schema.NullOr(Schema.Int) })), job: Schema.NullOr(Schema.Struct({ id: Schema.String, remote_id: Schema.String, name: Schema.NullOr(Schema.String) })), interviews: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), title: Schema.NullOr(Schema.String), starting_at: Schema.NullOr(Schema.String), ending_at: Schema.NullOr(Schema.String), location: Schema.optional(Schema.NullOr(Schema.Struct({ city: Schema.optional(Schema.NullOr(Schema.String)), country: Schema.optional(Schema.NullOr(Schema.String)), raw: Schema.optional(Schema.NullOr(Schema.String)), state: Schema.optional(Schema.NullOr(Schema.String)), street_1: Schema.optional(Schema.NullOr(Schema.String)), street_2: Schema.optional(Schema.NullOr(Schema.String)), zip_code: Schema.optional(Schema.NullOr(Schema.String)) }))), canceled: Schema.NullOr(Schema.Boolean) })), offers: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), status: Schema.NullOr(Schema.Literals(["ACCEPTED", "DECLINED", "SENT", "APPROVED", "DRAFT", "ABANDONED"])) })) })) }) });
export type GetAtsApplicationsPositiveResponse = Schema.Schema.Type<typeof GetAtsApplicationsPositiveResponse>;

export const PutAtsApplicationsApplicationIdStageParameterApplicationId = Schema.String;
export type PutAtsApplicationsApplicationIdStageParameterApplicationId = Schema.Schema.Type<typeof PutAtsApplicationsApplicationIdStageParameterApplicationId>;

export const PutAtsApplicationsApplicationIdStagePositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Record(Schema.String, Schema.Unknown), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PutAtsApplicationsApplicationIdStagePositiveResponse = Schema.Schema.Type<typeof PutAtsApplicationsApplicationIdStagePositiveResponse>;

export const PutAtsApplicationsApplicationIdStageRequestBody = Schema.Struct({ stage_id: Schema.String, remote_fields: Schema.optional(Schema.Struct({ workday: Schema.optional(Schema.Struct({ Workflow_Step_ID: Schema.optional(Schema.String), Step_Type: Schema.optional(Schema.Literals(["Next_Step_Reference", "Disposition_Step_Reference"])) })), greenhouse: Schema.optional(Schema.Struct({ post_headers: Schema.optional(Schema.Struct({ "On-Behalf-Of": Schema.optional(Schema.NullOr(Schema.String)) })) })), workable: Schema.optional(Schema.Struct({ on_behalf_of_user_remote_id: Schema.optional(Schema.String) })) })) });
export type PutAtsApplicationsApplicationIdStageRequestBody = Schema.Schema.Type<typeof PutAtsApplicationsApplicationIdStageRequestBody>;

export const PostAtsApplicationsApplicationIdResultLinksParameterApplicationId = Schema.String;
export type PostAtsApplicationsApplicationIdResultLinksParameterApplicationId = Schema.Schema.Type<typeof PostAtsApplicationsApplicationIdResultLinksParameterApplicationId>;

export const PostAtsApplicationsApplicationIdResultLinksPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Record(Schema.String, Schema.Unknown), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PostAtsApplicationsApplicationIdResultLinksPositiveResponse = Schema.Schema.Type<typeof PostAtsApplicationsApplicationIdResultLinksPositiveResponse>;

export const PostAtsApplicationsApplicationIdResultLinksRequestBody = Schema.Struct({ label: Schema.String, url: Schema.String, details: Schema.optional(Schema.Struct({ custom_field_name_prefix: Schema.String, attributes: Schema.Array(Schema.Struct({ key: Schema.String, value: Schema.String })) })), remote_fields: Schema.optional(Schema.Struct({ icims: Schema.optional(Schema.Struct({ assessment_package_id: Schema.optional(Schema.String) })), oracle: Schema.optional(Schema.Struct({ override_document_category: Schema.optional(Schema.Literals(["IRC_CANDIDATE_RESUME", "IRC_CANDIDATE_COVERLETTER", "MISC", "IRC_INTERNAL"])), multi_post_to_all_current_applications: Schema.optional(Schema.Boolean) })), greenhouse: Schema.optional(Schema.Struct({ post_headers: Schema.optional(Schema.Struct({ "On-Behalf-Of": Schema.optional(Schema.NullOr(Schema.String)) })) })), workable: Schema.optional(Schema.Struct({ on_behalf_of_user_remote_id: Schema.optional(Schema.String) })) })) });
export type PostAtsApplicationsApplicationIdResultLinksRequestBody = Schema.Schema.Type<typeof PostAtsApplicationsApplicationIdResultLinksRequestBody>;

export const PostAtsApplicationsApplicationIdNotesParameterApplicationId = Schema.String;
export type PostAtsApplicationsApplicationIdNotesParameterApplicationId = Schema.Schema.Type<typeof PostAtsApplicationsApplicationIdNotesParameterApplicationId>;

export const PostAtsApplicationsApplicationIdNotesPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Record(Schema.String, Schema.Unknown), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PostAtsApplicationsApplicationIdNotesPositiveResponse = Schema.Schema.Type<typeof PostAtsApplicationsApplicationIdNotesPositiveResponse>;

export const PostAtsApplicationsApplicationIdNotesRequestBody = Schema.Struct({ content: Schema.String, content_type: Schema.Literal("PLAIN_TEXT"), remote_fields: Schema.optional(Schema.Struct({ teamtailor: Schema.optional(Schema.Struct({ user_id: Schema.optional(Schema.String) })), greenhouse: Schema.optional(Schema.Struct({ visibility: Schema.optional(Schema.Literals(["admin_only", "private", "public"])), post_headers: Schema.optional(Schema.Struct({ "On-Behalf-Of": Schema.optional(Schema.NullOr(Schema.String)) })) })), recruitee: Schema.optional(Schema.Struct({ visibility: Schema.optional(Schema.Unknown), is_json: Schema.optional(Schema.Boolean) })), bullhorn: Schema.optional(Schema.Struct({ action: Schema.optional(Schema.String) })), lever: Schema.optional(Schema.Struct({ perform_as: Schema.optional(Schema.String) })), workable: Schema.optional(Schema.Struct({ on_behalf_of_user_remote_id: Schema.optional(Schema.String) })) })) });
export type PostAtsApplicationsApplicationIdNotesRequestBody = Schema.Schema.Type<typeof PostAtsApplicationsApplicationIdNotesRequestBody>;

export const GetAtsApplicationsApplicationIdAttachmentsParameterApplicationId = Schema.String;
export type GetAtsApplicationsApplicationIdAttachmentsParameterApplicationId = Schema.Schema.Type<typeof GetAtsApplicationsApplicationIdAttachmentsParameterApplicationId>;

export const GetAtsApplicationsApplicationIdAttachmentsPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ results: Schema.Array(Schema.Struct({ type: Schema.Literals(["CV", "COVER_LETTER", "OTHER"]), id: Schema.String, remote_id: Schema.String, data_url: Schema.String, file_name: Schema.String, content_type: Schema.String, remote_created_at: Schema.NullOr(Schema.String), remote_updated_at: Schema.NullOr(Schema.String) })) }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type GetAtsApplicationsApplicationIdAttachmentsPositiveResponse = Schema.Schema.Type<typeof GetAtsApplicationsApplicationIdAttachmentsPositiveResponse>;

export const PostAtsApplicationsApplicationIdAttachmentsParameterApplicationId = Schema.String;
export type PostAtsApplicationsApplicationIdAttachmentsParameterApplicationId = Schema.Schema.Type<typeof PostAtsApplicationsApplicationIdAttachmentsParameterApplicationId>;

export const PostAtsApplicationsApplicationIdAttachmentsPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Record(Schema.String, Schema.Unknown), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PostAtsApplicationsApplicationIdAttachmentsPositiveResponse = Schema.Schema.Type<typeof PostAtsApplicationsApplicationIdAttachmentsPositiveResponse>;

export const PostAtsApplicationsApplicationIdAttachmentsRequestBody = Schema.Struct({ attachment: Schema.Struct({ name: Schema.String, content_type: Schema.optional(Schema.String.check(Schema.isPattern(new RegExp("^[\\w.-]+\\/[\\w.-]+$")))), data_url: Schema.optional(Schema.String), data: Schema.optional(Schema.String), type: Schema.Literals(["CV", "COVER_LETTER", "OTHER"]) }), remote_fields: Schema.optional(Schema.Struct({ oracle: Schema.optional(Schema.Struct({ override_document_category: Schema.optional(Schema.Literals(["IRC_CANDIDATE_RESUME", "IRC_CANDIDATE_COVERLETTER", "MISC", "IRC_INTERNAL"])), multi_post_to_all_current_applications: Schema.optional(Schema.Boolean) })), greenhouse: Schema.optional(Schema.Struct({ post_headers: Schema.optional(Schema.Struct({ "On-Behalf-Of": Schema.optional(Schema.NullOr(Schema.String)) })) })), workable: Schema.optional(Schema.Struct({ on_behalf_of_user_remote_id: Schema.optional(Schema.String) })) })) });
export type PostAtsApplicationsApplicationIdAttachmentsRequestBody = Schema.Schema.Type<typeof PostAtsApplicationsApplicationIdAttachmentsRequestBody>;

export const PostAtsApplicationsApplicationIdRejectParameterApplicationId = Schema.String;
export type PostAtsApplicationsApplicationIdRejectParameterApplicationId = Schema.Schema.Type<typeof PostAtsApplicationsApplicationIdRejectParameterApplicationId>;

export const PostAtsApplicationsApplicationIdRejectPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Record(Schema.String, Schema.Unknown), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PostAtsApplicationsApplicationIdRejectPositiveResponse = Schema.Schema.Type<typeof PostAtsApplicationsApplicationIdRejectPositiveResponse>;

export const PostAtsApplicationsApplicationIdRejectRequestBody = Schema.Struct({ rejection_reason_id: Schema.String, note: Schema.optional(Schema.String), remote_fields: Schema.optional(Schema.Struct({ greenhouse: Schema.optional(Schema.Struct({ rejection_email: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)), post_headers: Schema.optional(Schema.Struct({ "On-Behalf-Of": Schema.optional(Schema.NullOr(Schema.String)) })) })), teamtailor: Schema.optional(Schema.Struct({ user_id: Schema.optional(Schema.String) })), workable: Schema.optional(Schema.Struct({ on_behalf_of_user_remote_id: Schema.optional(Schema.String) })) })) });
export type PostAtsApplicationsApplicationIdRejectRequestBody = Schema.Schema.Type<typeof PostAtsApplicationsApplicationIdRejectRequestBody>;

export const PostAtsApplicationsApplicationIdInterviewsParameterApplicationId = Schema.String;
export type PostAtsApplicationsApplicationIdInterviewsParameterApplicationId = Schema.Schema.Type<typeof PostAtsApplicationsApplicationIdInterviewsParameterApplicationId>;

export const PostAtsApplicationsApplicationIdInterviewsPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Record(Schema.String, Schema.Unknown) });
export type PostAtsApplicationsApplicationIdInterviewsPositiveResponse = Schema.Schema.Type<typeof PostAtsApplicationsApplicationIdInterviewsPositiveResponse>;

export const PostAtsApplicationsApplicationIdInterviewsRequestBody = Schema.Struct({ title: Schema.String, start_time: Schema.String, end_time: Schema.String, interviewer_user_ids: Schema.Array(Schema.String), organizer_user_id: Schema.String, location: Schema.Struct({ type: Schema.Literals(["PHYSICAL", "VIRTUAL"]), address: Schema.optional(Schema.String) }) });
export type PostAtsApplicationsApplicationIdInterviewsRequestBody = Schema.Schema.Type<typeof PostAtsApplicationsApplicationIdInterviewsRequestBody>;

export const PatchAtsApplicationsApplicationIdInterviewsParameterApplicationId = Schema.String;
export type PatchAtsApplicationsApplicationIdInterviewsParameterApplicationId = Schema.Schema.Type<typeof PatchAtsApplicationsApplicationIdInterviewsParameterApplicationId>;

export const PatchAtsApplicationsApplicationIdInterviewsPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Record(Schema.String, Schema.Unknown) });
export type PatchAtsApplicationsApplicationIdInterviewsPositiveResponse = Schema.Schema.Type<typeof PatchAtsApplicationsApplicationIdInterviewsPositiveResponse>;

export const PatchAtsApplicationsApplicationIdInterviewsRequestBody = Schema.Struct({ interview_id: Schema.String, title: Schema.String, start_time: Schema.String, end_time: Schema.String, interviewer_user_ids: Schema.Array(Schema.String), organizer_user_id: Schema.String, location: Schema.Struct({ type: Schema.Literals(["PHYSICAL", "VIRTUAL"]), address: Schema.optional(Schema.String) }) });
export type PatchAtsApplicationsApplicationIdInterviewsRequestBody = Schema.Schema.Type<typeof PatchAtsApplicationsApplicationIdInterviewsRequestBody>;

export const GetAtsCandidatesParameterCursor = Schema.String;
export type GetAtsCandidatesParameterCursor = Schema.Schema.Type<typeof GetAtsCandidatesParameterCursor>;

export const GetAtsCandidatesParameterPageSize = Schema_default_100_4;
export type GetAtsCandidatesParameterPageSize = Schema.Schema.Type<typeof GetAtsCandidatesParameterPageSize>;

export const GetAtsCandidatesParameterUpdatedAfter = Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetAtsCandidatesParameterUpdatedAfter = Schema.Schema.Type<typeof GetAtsCandidatesParameterUpdatedAfter>;

export const GetAtsCandidatesParameterIncludeDeleted = Schema_default_false;
export type GetAtsCandidatesParameterIncludeDeleted = Schema.Schema.Type<typeof GetAtsCandidatesParameterIncludeDeleted>;

export const GetAtsCandidatesParameterIgnoreUnsupportedFilters = Schema_default_false;
export type GetAtsCandidatesParameterIgnoreUnsupportedFilters = Schema.Schema.Type<typeof GetAtsCandidatesParameterIgnoreUnsupportedFilters>;

export const GetAtsCandidatesParameterIds = Schema.String;
export type GetAtsCandidatesParameterIds = Schema.Schema.Type<typeof GetAtsCandidatesParameterIds>;

export const GetAtsCandidatesParameterRemoteIds = Schema.String;
export type GetAtsCandidatesParameterRemoteIds = Schema.Schema.Type<typeof GetAtsCandidatesParameterRemoteIds>;

export const GetAtsCandidatesParameterEmail = Schema.String.check(Schema.isPattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/));
export type GetAtsCandidatesParameterEmail = Schema.Schema.Type<typeof GetAtsCandidatesParameterEmail>;

export const GetAtsCandidatesParameterJobIds = Schema.String;
export type GetAtsCandidatesParameterJobIds = Schema.Schema.Type<typeof GetAtsCandidatesParameterJobIds>;

export const GetAtsCandidatesParameterFirstName = Schema.String;
export type GetAtsCandidatesParameterFirstName = Schema.Schema.Type<typeof GetAtsCandidatesParameterFirstName>;

export const GetAtsCandidatesParameterLastName = Schema.String;
export type GetAtsCandidatesParameterLastName = Schema.Schema.Type<typeof GetAtsCandidatesParameterLastName>;

export const GetAtsCandidatesPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.String, first_name: Schema.NullOr(Schema.String), last_name: Schema.NullOr(Schema.String), company: Schema.NullOr(Schema.String), title: Schema.NullOr(Schema.String), confidential: Schema.NullOr(Schema.Boolean), source: Schema.NullOr(Schema.String), phone_numbers: NullOr_default_value_prop_10, email_addresses: NullOr_default_value_prop, social_media: NullOr_default_value_prop_11, location: Schema.optional(Schema.NullOr(Schema.Struct({ city: Schema.optional(Schema.NullOr(Schema.String)), country: Schema.optional(Schema.NullOr(Schema.String)), raw: Schema.optional(Schema.NullOr(Schema.String)), state: Schema.optional(Schema.NullOr(Schema.String)), street_1: Schema.optional(Schema.NullOr(Schema.String)), street_2: Schema.optional(Schema.NullOr(Schema.String)), zip_code: Schema.optional(Schema.NullOr(Schema.String)) }))), custom_fields: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)), integration_fields: Schema.Array(Schema.Struct({ id: Schema.String, key: Schema.String, type: Schema.Literals(["DEFAULT", "CUSTOM"]), value: Schema.optional(Schema.Null), label: Schema.NullOr(Schema.String) })), remote_url: Schema.NullOr(Schema.String), remote_created_at: Schema.NullOr(Schema.String), remote_updated_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), applications: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), outcome: Schema.NullOr(Schema.Literals(["PENDING", "HIRED", "DECLINED"])), rejection_reason_name: Schema.NullOr(Schema.String), rejected_at: Schema.NullOr(Schema.String), remote_url: Schema.NullOr(Schema.String), changed_at: Schema.String, remote_created_at: Schema.NullOr(Schema.String), remote_updated_at: Schema.NullOr(Schema.String), current_stage: Schema.NullOr(Schema.Struct({ id: Schema.String, name: Schema.NullOr(Schema.String), remote_id: Schema.NullOr(Schema.String), index: Schema.NullOr(Schema.Int) })), job: Schema.NullOr(Schema.Struct({ id: Schema.String, name: Schema.NullOr(Schema.String), remote_id: Schema.String })) })), tags: Schema.Array(Schema.Struct({ id: Schema.String, name: Schema.NullOr(Schema.String), remote_id: Schema.NullOr(Schema.String) })) })) }) });
export type GetAtsCandidatesPositiveResponse = Schema.Schema.Type<typeof GetAtsCandidatesPositiveResponse>;

export const PostAtsCandidatesPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ id: Schema.String, remote_id: Schema.String, first_name: Schema.NullOr(Schema.String), last_name: Schema.NullOr(Schema.String), company: Schema.NullOr(Schema.String), title: Schema.NullOr(Schema.String), confidential: Schema.NullOr(Schema.Boolean), source: Schema.NullOr(Schema.String), phone_numbers: NullOr_default_value_prop_10, email_addresses: NullOr_default_value_prop, social_media: NullOr_default_value_prop_11, location: Schema.optional(Schema.NullOr(Schema.Struct({ city: Schema.optional(Schema.NullOr(Schema.String)), country: Schema.optional(Schema.NullOr(Schema.String)), raw: Schema.optional(Schema.NullOr(Schema.String)), state: Schema.optional(Schema.NullOr(Schema.String)), street_1: Schema.optional(Schema.NullOr(Schema.String)), street_2: Schema.optional(Schema.NullOr(Schema.String)), zip_code: Schema.optional(Schema.NullOr(Schema.String)) }))), custom_fields: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)), integration_fields: Schema.Array(Schema.Struct({ id: Schema.String, key: Schema.String, type: Schema.Literals(["DEFAULT", "CUSTOM"]), value: Schema.optional(Schema.Null), label: Schema.NullOr(Schema.String) })), remote_url: Schema.NullOr(Schema.String), remote_created_at: Schema.NullOr(Schema.String), remote_updated_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), applications: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), outcome: Schema.NullOr(Schema.Literals(["PENDING", "HIRED", "DECLINED"])), rejection_reason_name: Schema.NullOr(Schema.String), rejected_at: Schema.NullOr(Schema.String), remote_url: Schema.NullOr(Schema.String), changed_at: Schema.String, remote_created_at: Schema.NullOr(Schema.String), remote_updated_at: Schema.NullOr(Schema.String), current_stage: Schema.NullOr(Schema.Struct({ id: Schema.String, name: Schema.NullOr(Schema.String), remote_id: Schema.NullOr(Schema.String), index: Schema.NullOr(Schema.Int) })), job: Schema.NullOr(Schema.Struct({ id: Schema.String, name: Schema.NullOr(Schema.String), remote_id: Schema.String })) })), tags: Schema.Array(Schema.Struct({ id: Schema.String, name: Schema.NullOr(Schema.String), remote_id: Schema.NullOr(Schema.String) })) }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PostAtsCandidatesPositiveResponse = Schema.Schema.Type<typeof PostAtsCandidatesPositiveResponse>;

export const PostAtsCandidatesRequestBody = Schema.Struct({ candidate: Schema.Struct({ first_name: Schema.String, last_name: Schema.String, email_address: Schema.String.check(Schema.isPattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)), additional_email_addresses: Schema.optional(Schema.Array(Schema.Struct({ type: Schema.Literals(["PERSONAL", "WORK", "OTHER"]), email_address: Schema.String.check(Schema.isPattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) }))), company: Schema.optional(Schema.String), title: Schema.optional(Schema.String), phone_number: Schema.optional(Schema.String), additional_phone_numbers: Schema.optional(Schema.Array(Schema.Struct({ type: Schema.Literals(["PERSONAL", "WORK", "OTHER"]), phone_number: Schema.String }))), location: Schema.optional(Schema.Struct({ city: Schema.optional(Schema.String), country: Schema.String.check(Schema.isPattern(new RegExp("^[A-Z]{2}$"))), state: Schema.optional(Schema.String), street_1: Schema.optional(Schema.String), zip_code: Schema.optional(Schema.String) })), gender: Schema.optional(Schema.Literals(["MALE", "FEMALE", "OTHER"])), availability_date: Schema.optional(Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), salary_expectations: Schema.optional(Schema.Struct({ period: Schema.Literals(["MONTH", "YEAR"]), amount: Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308)) })), social_links: Array_default_value_prop_13 }), application: Schema.Struct({ job_id: Schema.String, stage_id: Schema.optional(Schema.String) }), screening_question_answers: Schema.optional(Schema.Array(Schema.Struct({ question_id: Schema.String, answer: Schema.Union([Schema.String, Schema.Boolean, Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308)), Schema.Array(Schema.String), Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))), Schema.Struct({ name: Schema.String, content_type: Schema.optional(Schema.String.check(Schema.isPattern(new RegExp("^[\\w.-]+\\/[\\w.-]+$")))), data_url: Schema.optional(Schema.String), data: Schema.optional(Schema.String) })]) }))), attachments: Array_default_value_prop_14, source: Schema.optional(Schema.Struct({ name: Schema.optional(Schema.String), unified_key: Schema.optional(Schema.String), id: Schema.optional(Schema.String) })), sourced_by: Schema.optional(Schema.Struct({ user_id: Schema.String })), gdpr_consent: Schema.optional(Schema.Struct({ expires_at: Schema.optional(Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), given: Schema.optional(Schema.Boolean) })), remote_fields: Schema.optional(Schema.Struct({ successfactors: Schema.optional(Schema.Struct({ Candidate: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)), JobApplication: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)), copyJobApplicationAttachments: Schema.optional(Schema.Boolean), update_existing_candidate: Schema.optional(Schema.NullOr(Schema.Boolean)) })), personio: Schema.optional(Schema.Struct({ application: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)) })), talentsoft: Schema.optional(Schema.Struct({ applicant: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)), application: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)) })), teamtailor: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)), application: Schema.optional(Schema.Struct({ attributes: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)) })) })), greenhouse: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)), application: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)), post_headers: Schema.optional(Schema.Struct({ "On-Behalf-Of": Schema.optional(Schema.NullOr(Schema.String)) })) })), lever: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)) })), workable: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)), on_behalf_of_user_remote_id: Schema.optional(Schema.String) })), workday: Schema.optional(Schema.Struct({ Candidate_Data: Schema.optional(Schema.Struct({ Name_Detail_Data: Schema.optional(Schema.Struct({ Middle_Name: Schema.optional(Schema.String), Social_Suffix_Reference: Schema.optional(Schema.Struct({ Predefined_Name_Component_ID: Schema.String })) })), Language_Reference: Schema.optional(Schema.Struct({ WID: Schema.String })), Job_Application_Data: Schema.optional(Schema.Struct({ Job_Applied_To_Data: Schema.optional(Schema.Struct({ Global_Personal_Information_Data: Schema.optional(Schema.Struct({ Date_of_Birth: Schema.optional(Schema.String) })) })), Resume_Data: Schema.optional(Schema.Struct({ Education_Data: Schema.optional(Schema.Array(Schema.Struct({ School_Name: Schema.optional(Schema.String), First_Year_Attended: Schema.optional(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), Last_Year_Attended: Schema.optional(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), Field_of_Study_Reference: Schema.optional(Schema.Struct({ WID: Schema.String })), Degree_Reference: Schema.optional(Schema.Struct({ WID: Schema.String })), Grade_Average: Schema.optional(Schema.String) }))), Skill_Data: Schema.optional(Schema.Array(Schema.Struct({ Skill_Name: Schema.optional(Schema.String) }))), Language_Data: Schema.optional(Schema.Array(Schema.Struct({ Language_Reference: Schema.optional(Schema.Struct({ WID: Schema.optional(Schema.String) })), Language: Schema.optional(Schema.Struct({ Native: Schema.optional(Schema.Boolean), Language_Ability: Schema.Array(Schema.Struct({ Language_Ability_Data: Schema.optional(Schema.Struct({ Language_Proficiency_Reference: Schema.optional(Schema.Struct({ WID: Schema.String })), Language_Ability_Type_Reference: Schema.optional(Schema.Struct({ WID: Schema.String })) })) })) })) }))), Experience_Data: Schema.optional(Schema.Array(Schema.Struct({ Company_Name: Schema.String, Title: Schema.String, Location: Schema.optional(Schema.String), Start_Date: Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))), End_Date: Schema.optional(Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), Currently_Work_Here: Schema.optional(Schema.Boolean), Description: Schema.optional(Schema.String) }))) })) })), Contact_Data: Schema.optional(Schema.Struct({ Location_Data: Schema.optional(Schema.Struct({ Address_Line_1: Schema.optional(Schema.String), Address_Line_2: Schema.optional(Schema.String), Region_Subdivision_1: Schema.optional(Schema.String), Country_Region_Reference: Schema.optional(Schema.Struct({ Country_Region_ID: Schema.String })), Country_City_Reference: Schema.optional(Schema.Struct({ WID: Schema.String })) })) })), Worker_Reference: Schema.optional(Schema.Struct({ WID: Schema.optional(Schema.String), Employee_ID: Schema.optional(Schema.String) })) })), Override_Source_Reference_WID: Schema.optional(Schema.String) })), zohorecruit: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)) })), bullhorn: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)), job_submission: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)) })), smartrecruiters: Schema.optional(Schema.Struct({ candidate_with_questions: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)), candidate_without_questions: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)), candidate: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)), consent_decisions: Schema.optional(Schema.Struct({ SINGLE: Schema.optional(Schema.Boolean), SMART_RECRUIT: Schema.optional(Schema.Boolean), SMART_CRM: Schema.optional(Schema.Boolean), SMART_MESSAGE_SMS: Schema.optional(Schema.Boolean), SMART_MESSAGE_WHATSAPP: Schema.optional(Schema.Boolean) })) })), talentadore: Schema.optional(Schema.Struct({ applications: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)) })), guidecom: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)) })), dvinci: Schema.optional(Schema.Struct({ application: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)), candidate: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)) })), hrworks: Schema.optional(Schema.Struct({ jobApplication: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)) })), jobylon: Schema.optional(Schema.Struct({ application: Schema.optional(Schema.Struct({ message: Schema.optional(Schema.String) })) })), avature: Schema.optional(Schema.Struct({ workflow: Schema.optional(Schema.Struct({ step: Schema.optional(Schema.Struct({ id: Schema.Int })) })) })), recruitee: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Struct({ cover_letter_text: Schema.optional(Schema.String) })) })), rexx: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)) })), umantis: Schema.optional(Schema.Struct({ person: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)) })), piloga: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Struct({ street: Schema.optional(Schema.String) })) })), pinpoint: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)) })), covetorest: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Struct({ mandant: Schema.optional(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))) })) })) })) });
export type PostAtsCandidatesRequestBody = Schema.Schema.Type<typeof PostAtsCandidatesRequestBody>;

export const GetAtsCandidatesCandidateIdAttachmentsParameterCandidateId = Schema.String;
export type GetAtsCandidatesCandidateIdAttachmentsParameterCandidateId = Schema.Schema.Type<typeof GetAtsCandidatesCandidateIdAttachmentsParameterCandidateId>;

export const GetAtsCandidatesCandidateIdAttachmentsPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ results: Schema.Array(Schema.Struct({ id: Schema.String.check(Schema.isMinLength(24), Schema.isMaxLength(24), Schema.isPattern(new RegExp("^[1-9A-HJ-NP-Za-km-z]+$"))), application_id: Schema.NullOr(Schema.String.check(Schema.isMinLength(24), Schema.isMaxLength(24), Schema.isPattern(new RegExp("^[1-9A-HJ-NP-Za-km-z]+$")))), candidate_id: Schema.String.check(Schema.isMinLength(24), Schema.isMaxLength(24), Schema.isPattern(new RegExp("^[1-9A-HJ-NP-Za-km-z]+$"))), type: Schema.Literals(["CV", "COVER_LETTER", "OTHER"]), remote_id: Schema.String, data_url: Schema.String, file_name: Schema.String, content_type: Schema.String, remote_created_at: Schema.NullOr(Schema.String), remote_updated_at: Schema.NullOr(Schema.String) })) }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type GetAtsCandidatesCandidateIdAttachmentsPositiveResponse = Schema.Schema.Type<typeof GetAtsCandidatesCandidateIdAttachmentsPositiveResponse>;

export const PostAtsCandidatesCandidateIdAttachmentsParameterCandidateId = Schema.String;
export type PostAtsCandidatesCandidateIdAttachmentsParameterCandidateId = Schema.Schema.Type<typeof PostAtsCandidatesCandidateIdAttachmentsParameterCandidateId>;

export const PostAtsCandidatesCandidateIdAttachmentsPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Record(Schema.String, Schema.Unknown), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PostAtsCandidatesCandidateIdAttachmentsPositiveResponse = Schema.Schema.Type<typeof PostAtsCandidatesCandidateIdAttachmentsPositiveResponse>;

export const PostAtsCandidatesCandidateIdAttachmentsRequestBody = Schema.Struct({ attachment: Schema.Struct({ name: Schema.String, content_type: Schema.optional(Schema.String.check(Schema.isPattern(new RegExp("^[\\w.-]+\\/[\\w.-]+$")))), data_url: Schema.optional(Schema.String), data: Schema.optional(Schema.String), type: Schema.Literals(["CV", "COVER_LETTER", "OTHER"]) }), remote_fields: Schema.optional(Schema.Struct({ greenhouse: Schema.optional(Schema.Struct({ post_headers: Schema.optional(Schema.Struct({ "On-Behalf-Of": Schema.optional(Schema.NullOr(Schema.String)) })) })), workable: Schema.optional(Schema.Struct({ on_behalf_of_user_remote_id: Schema.optional(Schema.String) })) })) });
export type PostAtsCandidatesCandidateIdAttachmentsRequestBody = Schema.Schema.Type<typeof PostAtsCandidatesCandidateIdAttachmentsRequestBody>;

export const PostAtsCandidatesCandidateIdResultLinksParameterCandidateId = Schema.String;
export type PostAtsCandidatesCandidateIdResultLinksParameterCandidateId = Schema.Schema.Type<typeof PostAtsCandidatesCandidateIdResultLinksParameterCandidateId>;

export const PostAtsCandidatesCandidateIdResultLinksPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Record(Schema.String, Schema.Unknown), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PostAtsCandidatesCandidateIdResultLinksPositiveResponse = Schema.Schema.Type<typeof PostAtsCandidatesCandidateIdResultLinksPositiveResponse>;

export const PostAtsCandidatesCandidateIdResultLinksRequestBody = Schema.Struct({ label: Schema.String, url: Schema.String, details: Schema.optional(Schema.Struct({ custom_field_name_prefix: Schema.String, attributes: Schema.Array(Schema.Struct({ key: Schema.String, value: Schema.String })) })), remote_fields: Schema.optional(Schema.Struct({ icims: Schema.optional(Schema.Struct({ assessment_package_id: Schema.optional(Schema.String) })), oracle: Schema.optional(Schema.Struct({ override_document_category: Schema.optional(Schema.Literals(["IRC_CANDIDATE_RESUME", "IRC_CANDIDATE_COVERLETTER", "MISC", "IRC_INTERNAL"])), multi_post_to_all_current_applications: Schema.optional(Schema.Boolean) })), greenhouse: Schema.optional(Schema.Struct({ post_headers: Schema.optional(Schema.Struct({ "On-Behalf-Of": Schema.optional(Schema.NullOr(Schema.String)) })) })), workable: Schema.optional(Schema.Struct({ on_behalf_of_user_remote_id: Schema.optional(Schema.String) })) })) });
export type PostAtsCandidatesCandidateIdResultLinksRequestBody = Schema.Schema.Type<typeof PostAtsCandidatesCandidateIdResultLinksRequestBody>;

export const PostAtsCandidatesCandidateIdTagsParameterCandidateId = Schema.String;
export type PostAtsCandidatesCandidateIdTagsParameterCandidateId = Schema.Schema.Type<typeof PostAtsCandidatesCandidateIdTagsParameterCandidateId>;

export const PostAtsCandidatesCandidateIdTagsPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Record(Schema.String, Schema.Unknown), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PostAtsCandidatesCandidateIdTagsPositiveResponse = Schema.Schema.Type<typeof PostAtsCandidatesCandidateIdTagsPositiveResponse>;

export const PostAtsCandidatesCandidateIdTagsRequestBody = Schema.Struct({ tag: Schema.Struct({ name: Schema.String.check(Schema.isMinLength(1)) }), remote_fields: Schema.optional(Schema.Struct({ greenhouse: Schema.optional(Schema.Struct({ post_headers: Schema.optional(Schema.Struct({ "On-Behalf-Of": Schema.optional(Schema.NullOr(Schema.String)) })) })), workable: Schema.optional(Schema.Struct({ on_behalf_of_user_remote_id: Schema.optional(Schema.String) })) })) });
export type PostAtsCandidatesCandidateIdTagsRequestBody = Schema.Schema.Type<typeof PostAtsCandidatesCandidateIdTagsRequestBody>;

export const DeleteAtsCandidatesCandidateIdTagsParameterCandidateId = Schema.String;
export type DeleteAtsCandidatesCandidateIdTagsParameterCandidateId = Schema.Schema.Type<typeof DeleteAtsCandidatesCandidateIdTagsParameterCandidateId>;

export const DeleteAtsCandidatesCandidateIdTagsPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Record(Schema.String, Schema.Unknown), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type DeleteAtsCandidatesCandidateIdTagsPositiveResponse = Schema.Schema.Type<typeof DeleteAtsCandidatesCandidateIdTagsPositiveResponse>;

export const DeleteAtsCandidatesCandidateIdTagsRequestBody = Schema.Struct({ tag: Schema.Struct({ name: Schema.String }), remote_fields: Schema.optional(Schema.Struct({ greenhouse: Schema.optional(Schema.Struct({ post_headers: Schema.optional(Schema.Struct({ "On-Behalf-Of": Schema.optional(Schema.NullOr(Schema.String)) })) })), workable: Schema.optional(Schema.Struct({ on_behalf_of_user_remote_id: Schema.optional(Schema.String) })) })) });
export type DeleteAtsCandidatesCandidateIdTagsRequestBody = Schema.Schema.Type<typeof DeleteAtsCandidatesCandidateIdTagsRequestBody>;

export const GetAtsTagsParameterCursor = Schema.String;
export type GetAtsTagsParameterCursor = Schema.Schema.Type<typeof GetAtsTagsParameterCursor>;

export const GetAtsTagsParameterPageSize = Schema_default_100_4;
export type GetAtsTagsParameterPageSize = Schema.Schema.Type<typeof GetAtsTagsParameterPageSize>;

export const GetAtsTagsParameterUpdatedAfter = Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetAtsTagsParameterUpdatedAfter = Schema.Schema.Type<typeof GetAtsTagsParameterUpdatedAfter>;

export const GetAtsTagsParameterIncludeDeleted = Schema_default_false;
export type GetAtsTagsParameterIncludeDeleted = Schema.Schema.Type<typeof GetAtsTagsParameterIncludeDeleted>;

export const GetAtsTagsParameterIgnoreUnsupportedFilters = Schema_default_false;
export type GetAtsTagsParameterIgnoreUnsupportedFilters = Schema.Schema.Type<typeof GetAtsTagsParameterIgnoreUnsupportedFilters>;

export const GetAtsTagsParameterIds = Schema.String;
export type GetAtsTagsParameterIds = Schema.Schema.Type<typeof GetAtsTagsParameterIds>;

export const GetAtsTagsParameterRemoteIds = Schema.String;
export type GetAtsTagsParameterRemoteIds = Schema.Schema.Type<typeof GetAtsTagsParameterRemoteIds>;

export const GetAtsTagsPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), name: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String) })) }) });
export type GetAtsTagsPositiveResponse = Schema.Schema.Type<typeof GetAtsTagsPositiveResponse>;

export const GetAtsApplicationStagesParameterCursor = Schema.String;
export type GetAtsApplicationStagesParameterCursor = Schema.Schema.Type<typeof GetAtsApplicationStagesParameterCursor>;

export const GetAtsApplicationStagesParameterPageSize = Schema_default_100_4;
export type GetAtsApplicationStagesParameterPageSize = Schema.Schema.Type<typeof GetAtsApplicationStagesParameterPageSize>;

export const GetAtsApplicationStagesParameterUpdatedAfter = Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetAtsApplicationStagesParameterUpdatedAfter = Schema.Schema.Type<typeof GetAtsApplicationStagesParameterUpdatedAfter>;

export const GetAtsApplicationStagesParameterIncludeDeleted = Schema_default_false;
export type GetAtsApplicationStagesParameterIncludeDeleted = Schema.Schema.Type<typeof GetAtsApplicationStagesParameterIncludeDeleted>;

export const GetAtsApplicationStagesParameterIgnoreUnsupportedFilters = Schema_default_false;
export type GetAtsApplicationStagesParameterIgnoreUnsupportedFilters = Schema.Schema.Type<typeof GetAtsApplicationStagesParameterIgnoreUnsupportedFilters>;

export const GetAtsApplicationStagesParameterIds = Schema.String;
export type GetAtsApplicationStagesParameterIds = Schema.Schema.Type<typeof GetAtsApplicationStagesParameterIds>;

export const GetAtsApplicationStagesParameterRemoteIds = Schema.String;
export type GetAtsApplicationStagesParameterRemoteIds = Schema.Schema.Type<typeof GetAtsApplicationStagesParameterRemoteIds>;

export const GetAtsApplicationStagesPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), name: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String) })) }) });
export type GetAtsApplicationStagesPositiveResponse = Schema.Schema.Type<typeof GetAtsApplicationStagesPositiveResponse>;

export const GetAtsJobsParameterCursor = Schema.String;
export type GetAtsJobsParameterCursor = Schema.Schema.Type<typeof GetAtsJobsParameterCursor>;

export const GetAtsJobsParameterPageSize = Schema_default_100_4;
export type GetAtsJobsParameterPageSize = Schema.Schema.Type<typeof GetAtsJobsParameterPageSize>;

export const GetAtsJobsParameterUpdatedAfter = Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetAtsJobsParameterUpdatedAfter = Schema.Schema.Type<typeof GetAtsJobsParameterUpdatedAfter>;

export const GetAtsJobsParameterIncludeDeleted = Schema_default_false;
export type GetAtsJobsParameterIncludeDeleted = Schema.Schema.Type<typeof GetAtsJobsParameterIncludeDeleted>;

export const GetAtsJobsParameterIgnoreUnsupportedFilters = Schema_default_false;
export type GetAtsJobsParameterIgnoreUnsupportedFilters = Schema.Schema.Type<typeof GetAtsJobsParameterIgnoreUnsupportedFilters>;

export const GetAtsJobsParameterIds = Schema.String;
export type GetAtsJobsParameterIds = Schema.Schema.Type<typeof GetAtsJobsParameterIds>;

export const GetAtsJobsParameterRemoteIds = Schema.String;
export type GetAtsJobsParameterRemoteIds = Schema.Schema.Type<typeof GetAtsJobsParameterRemoteIds>;

export const GetAtsJobsParameterJobCodes = Schema.String;
export type GetAtsJobsParameterJobCodes = Schema.Schema.Type<typeof GetAtsJobsParameterJobCodes>;

export const GetAtsJobsParameterPostUrl = Schema.String;
export type GetAtsJobsParameterPostUrl = Schema.Schema.Type<typeof GetAtsJobsParameterPostUrl>;

export const GetAtsJobsParameterStatus = Schema.Literals(["OPEN", "CLOSED", "DRAFT", "ARCHIVED"]);
export type GetAtsJobsParameterStatus = Schema.Schema.Type<typeof GetAtsJobsParameterStatus>;

export const GetAtsJobsParameterStatuses = Schema.String;
export type GetAtsJobsParameterStatuses = Schema.Schema.Type<typeof GetAtsJobsParameterStatuses>;

export const GetAtsJobsParameterEmploymentTypes = Schema.String;
export type GetAtsJobsParameterEmploymentTypes = Schema.Schema.Type<typeof GetAtsJobsParameterEmploymentTypes>;

export const GetAtsJobsParameterVisibilities = Schema.String;
export type GetAtsJobsParameterVisibilities = Schema.Schema.Type<typeof GetAtsJobsParameterVisibilities>;

export const GetAtsJobsParameterRemoteCreatedAfter = Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetAtsJobsParameterRemoteCreatedAfter = Schema.Schema.Type<typeof GetAtsJobsParameterRemoteCreatedAfter>;

export const GetAtsJobsParameterNameContains = Schema.String;
export type GetAtsJobsParameterNameContains = Schema.Schema.Type<typeof GetAtsJobsParameterNameContains>;

export const GetAtsJobsPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.String, name: Schema.NullOr(Schema.String), job_code: Schema.NullOr(Schema.String), description: Schema.NullOr(Schema.String), confidential: Schema.NullOr(Schema.Boolean), weekly_hours: Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), employment_type: Schema.optional(Schema.Union([Schema.Literals(["FULL_TIME", "PART_TIME", "CONTRACT", "SEASONAL", "INTERNSHIP"]), Schema.String, Schema.Null])), status: Schema.optional(Schema.Union([Schema.Literals(["OPEN", "CLOSED", "DRAFT", "ARCHIVED"]), Schema.String, Schema.Null])), visibility: Schema.optional(Schema.Union([Schema.Literals(["PUBLIC", "INTERNAL", "UNLISTED", "CONFIDENTIAL"]), Schema.String, Schema.Null])), category: Schema.NullOr(Schema.String), department: Schema.NullOr(Schema.String), post_url: Schema.NullOr(Schema.String), experience_level: Schema.NullOr(Schema.String), remote_work_status: Schema.optional(Schema.Union([Schema.Literals(["REMOTE", "HYBRID", "TEMPORARY", "ON_SITE"]), Schema.String, Schema.Null])), salary_amount: Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), salary_amount_from: Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), salary_amount_to: Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), salary_currency: Schema.NullOr(Schema.String), salary_period: Schema.optional(Schema.Union([Schema.Literals(["YEAR", "MONTH", "TWO_WEEKS", "WEEK", "DAY", "HOUR"]), Schema.String, Schema.Null])), location: Schema.optional(Schema.NullOr(Schema.Struct({ city: Schema.optional(Schema.NullOr(Schema.String)), country: Schema.optional(Schema.NullOr(Schema.String)), raw: Schema.optional(Schema.NullOr(Schema.String)), state: Schema.optional(Schema.NullOr(Schema.String)), street_1: Schema.optional(Schema.NullOr(Schema.String)), street_2: Schema.optional(Schema.NullOr(Schema.String)), zip_code: Schema.optional(Schema.NullOr(Schema.String)) }))), custom_fields: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)), integration_fields: Schema.Array(Schema.Struct({ id: Schema.String, key: Schema.String, type: Schema.Literals(["DEFAULT", "CUSTOM"]), value: Schema.optional(Schema.Null), label: Schema.NullOr(Schema.String) })), remote_url: Schema.NullOr(Schema.String), opened_at: Schema.NullOr(Schema.String), closed_at: Schema.NullOr(Schema.String), remote_created_at: Schema.NullOr(Schema.String), remote_updated_at: Schema.NullOr(Schema.String), contact_id: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), stages: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), name: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)), index: Schema.optional(Schema.NullOr(Schema.Int)) })), screening_questions: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), title: Schema.NullOr(Schema.String), description: Schema.NullOr(Schema.String), format: Schema.optional(Schema.Union([Schema.Struct({ display_type: Schema.optional(Schema.NullOr(Schema.Literals(["SINGLE_LINE", "MULTI_LINE", "EMAIL", "URL"]))), max_length: Schema.optional(Schema.NullOr(Schema.Int)), type: Schema.Literal("TEXT") }), Schema.Struct({ display_type: NullOr_default_FIELD_prop, max: Schema.optional(Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308)))), min: Schema.optional(Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308)))), type: Schema.Literal("NUMBER") }), Schema.Struct({ accepted_mime_types: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))), max_file_size_bytes: Schema.optional(Schema.NullOr(Schema.Int)), type: Schema.Literal("FILE") }), Schema.Struct({ display_type: Schema.optional(Schema.NullOr(Schema.Literals(["DROPDOWN", "RADIO"]))), options: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.optional(Schema.NullOr(Schema.String)), name: Schema.String })), type: Schema.Literal("SINGLE_SELECT") }), Schema.Struct({ type: Schema.Literal("BOOLEAN") }), Schema.Struct({ type: Schema.Literal("DATE") }), Schema.Struct({ options: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.optional(Schema.NullOr(Schema.String)), name: Schema.String })), type: Schema.Literal("MULTI_SELECT") }), Schema.Struct({ type: Schema.Literal("INFORMATION") }), Schema.Struct({ raw_question: Schema.optional(Schema.Unknown), type: Schema.Literal("UNKNOWN") }), Schema.Null])), category: Schema.NullOr(Schema.Literals(["EEO", "DEMOGRAPHIC"])), index: Schema.optional(Schema.NullOr(Schema.Int)), required: Schema.NullOr(Schema.Boolean), precondition_question_id: Schema.optional(Schema.NullOr(Schema.String.check(Schema.isMinLength(24), Schema.isMaxLength(24), Schema.isPattern(new RegExp("^[1-9A-HJ-NP-Za-km-z]+$"))))), precondition_options: Union_default_null_prop })), job_postings: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), title: Schema.NullOr(Schema.String), description_html: Schema.NullOr(Schema.String), status: Schema.NullOr(Schema.Literals(["ACTIVE", "INACTIVE", "DRAFT"])), visibility: Schema.NullOr(Schema.Literals(["PUBLIC", "INTERNAL", "UNLISTED"])), url: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)) })), hiring_team: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), first_name: Schema.NullOr(Schema.String), last_name: Schema.NullOr(Schema.String), email: Schema.optional(Schema.NullOr(Schema.String.check(Schema.isPattern(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$"))))), hiring_team_roles: Schema.Array(Schema.Literals(["RECRUITER", "HIRING_MANAGER", "COORDINATOR", "SOURCER", "INTERVIEWER"])), job_roles: Schema.Array(Schema.Struct({ remote_id: Schema.NullOr(Schema.String), remote_label: Schema.NullOr(Schema.String), scope: Schema.NullOr(Schema.Literals(["SYSTEM", "JOB"])), unified_type: Schema.NullOr(Schema.Literals(["HIRING_MANAGER", "RECRUITER", "COORDINATOR", "SOURCER", "INTERVIEWER", "ADMIN"])) })) })) })) }) });
export type GetAtsJobsPositiveResponse = Schema.Schema.Type<typeof GetAtsJobsPositiveResponse>;

export const PostAtsJobsJobIdApplicationsParameterJobId = Schema.String;
export type PostAtsJobsJobIdApplicationsParameterJobId = Schema.Schema.Type<typeof PostAtsJobsJobIdApplicationsParameterJobId>;

export const PostAtsJobsJobIdApplicationsPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), outcome: Schema.NullOr(Schema.Literals(["PENDING", "HIRED", "DECLINED"])), rejection_reason_name: Schema.NullOr(Schema.String), rejected_at: Schema.NullOr(Schema.String), current_stage_id: Schema.NullOr(Schema.String), job_id: Schema.NullOr(Schema.String), candidate_id: Schema.NullOr(Schema.String), screening_question_answers: NullOr_default_value_prop_12, custom_fields: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)), integration_fields: Schema.Array(Schema.Struct({ id: Schema.String, key: Schema.String, type: Schema.Literals(["DEFAULT", "CUSTOM"]), value: Schema.optional(Schema.Null), label: Schema.NullOr(Schema.String) })), remote_url: Schema.NullOr(Schema.String), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), remote_created_at: Schema.NullOr(Schema.String), remote_updated_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)), current_stage: Schema.NullOr(Schema.Struct({ id: Schema.String, name: Schema.NullOr(Schema.String), remote_id: Schema.NullOr(Schema.String), index: Schema.NullOr(Schema.Int) })), job: Schema.NullOr(Schema.Struct({ id: Schema.String, name: Schema.NullOr(Schema.String), remote_id: Schema.String })), candidate: Schema.NullOr(Schema.Struct({ id: Schema.String, remote_id: Schema.String, first_name: Schema.NullOr(Schema.String), last_name: Schema.NullOr(Schema.String), company: Schema.NullOr(Schema.String), title: Schema.NullOr(Schema.String), confidential: Schema.NullOr(Schema.Boolean), source: Schema.NullOr(Schema.String), phone_numbers: NullOr_default_value_prop_10, email_addresses: NullOr_default_value_prop, social_media: NullOr_default_value_prop_11, location: Schema.optional(Schema.NullOr(Schema.Struct({ city: Schema.optional(Schema.NullOr(Schema.String)), country: Schema.optional(Schema.NullOr(Schema.String)), raw: Schema.optional(Schema.NullOr(Schema.String)), state: Schema.optional(Schema.NullOr(Schema.String)), street_1: Schema.optional(Schema.NullOr(Schema.String)), street_2: Schema.optional(Schema.NullOr(Schema.String)), zip_code: Schema.optional(Schema.NullOr(Schema.String)) }))), custom_fields: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)), integration_fields: Schema.Array(Schema.Struct({ id: Schema.String, key: Schema.String, type: Schema.Literals(["DEFAULT", "CUSTOM"]), value: Schema.optional(Schema.Null), label: Schema.NullOr(Schema.String) })), remote_url: Schema.NullOr(Schema.String), remote_created_at: Schema.NullOr(Schema.String), remote_updated_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), tags: Schema.Array(Schema.Struct({ id: Schema.String, name: Schema.NullOr(Schema.String), remote_id: Schema.NullOr(Schema.String) })) })) }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PostAtsJobsJobIdApplicationsPositiveResponse = Schema.Schema.Type<typeof PostAtsJobsJobIdApplicationsPositiveResponse>;

export const PostAtsJobsJobIdApplicationsRequestBody = Schema.Struct({ stage_id: Schema.optional(Schema.String), candidate: Schema.Struct({ first_name: Schema.String, last_name: Schema.String, email_address: Schema.String.check(Schema.isPattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)), additional_email_addresses: Schema.optional(Schema.Array(Schema.Struct({ type: Schema.Literals(["PERSONAL", "WORK", "OTHER"]), email_address: Schema.String.check(Schema.isPattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) }))), company: Schema.optional(Schema.String), title: Schema.optional(Schema.String), phone_number: Schema.optional(Schema.String), additional_phone_numbers: Schema.optional(Schema.Array(Schema.Struct({ type: Schema.Literals(["PERSONAL", "WORK", "OTHER"]), phone_number: Schema.String }))), location: Schema.optional(Schema.Struct({ city: Schema.optional(Schema.String), country: Schema.String.check(Schema.isPattern(new RegExp("^[A-Z]{2}$"))), state: Schema.optional(Schema.String), street_1: Schema.optional(Schema.String), zip_code: Schema.optional(Schema.String) })), gender: Schema.optional(Schema.Literals(["MALE", "FEMALE", "OTHER"])), availability_date: Schema.optional(Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), salary_expectations: Schema.optional(Schema.Struct({ period: Schema.Literals(["MONTH", "YEAR"]), amount: Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308)) })), social_links: Array_default_value_prop_13 }), attachments: Array_default_value_prop_14, source: Schema.optional(Schema.Struct({ name: Schema.optional(Schema.String), unified_key: Schema.optional(Schema.String), id: Schema.optional(Schema.String) })), sourced_by: Schema.optional(Schema.Struct({ user_id: Schema.String })), gdpr_consent: Schema.optional(Schema.Struct({ expires_at: Schema.optional(Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), given: Schema.optional(Schema.Boolean) })), remote_fields: Schema.optional(Schema.Struct({ successfactors: Schema.optional(Schema.Struct({ Candidate: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)), JobApplication: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)), copyJobApplicationAttachments: Schema.optional(Schema.Boolean), update_existing_candidate: Schema.optional(Schema.NullOr(Schema.Boolean)) })), personio: Schema.optional(Schema.Struct({ application: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)) })), talentsoft: Schema.optional(Schema.Struct({ applicant: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)), application: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)) })), teamtailor: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)), application: Schema.optional(Schema.Struct({ attributes: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)) })) })), greenhouse: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)), application: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)), post_headers: Schema.optional(Schema.Struct({ "On-Behalf-Of": Schema.optional(Schema.NullOr(Schema.String)) })) })), lever: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)) })), workable: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)), on_behalf_of_user_remote_id: Schema.optional(Schema.String) })), workday: Schema.optional(Schema.Struct({ Candidate_Data: Schema.optional(Schema.Struct({ Name_Detail_Data: Schema.optional(Schema.Struct({ Middle_Name: Schema.optional(Schema.String), Social_Suffix_Reference: Schema.optional(Schema.Struct({ Predefined_Name_Component_ID: Schema.String })) })), Language_Reference: Schema.optional(Schema.Struct({ WID: Schema.String })), Job_Application_Data: Schema.optional(Schema.Struct({ Job_Applied_To_Data: Schema.optional(Schema.Struct({ Global_Personal_Information_Data: Schema.optional(Schema.Struct({ Date_of_Birth: Schema.optional(Schema.String) })) })), Resume_Data: Schema.optional(Schema.Struct({ Education_Data: Schema.optional(Schema.Array(Schema.Struct({ School_Name: Schema.optional(Schema.String), First_Year_Attended: Schema.optional(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), Last_Year_Attended: Schema.optional(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), Field_of_Study_Reference: Schema.optional(Schema.Struct({ WID: Schema.String })), Degree_Reference: Schema.optional(Schema.Struct({ WID: Schema.String })), Grade_Average: Schema.optional(Schema.String) }))), Skill_Data: Schema.optional(Schema.Array(Schema.Struct({ Skill_Name: Schema.optional(Schema.String) }))), Language_Data: Schema.optional(Schema.Array(Schema.Struct({ Language_Reference: Schema.optional(Schema.Struct({ WID: Schema.optional(Schema.String) })), Language: Schema.optional(Schema.Struct({ Native: Schema.optional(Schema.Boolean), Language_Ability: Schema.Array(Schema.Struct({ Language_Ability_Data: Schema.optional(Schema.Struct({ Language_Proficiency_Reference: Schema.optional(Schema.Struct({ WID: Schema.String })), Language_Ability_Type_Reference: Schema.optional(Schema.Struct({ WID: Schema.String })) })) })) })) }))), Experience_Data: Schema.optional(Schema.Array(Schema.Struct({ Company_Name: Schema.String, Title: Schema.String, Location: Schema.optional(Schema.String), Start_Date: Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))), End_Date: Schema.optional(Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), Currently_Work_Here: Schema.optional(Schema.Boolean), Description: Schema.optional(Schema.String) }))) })) })), Contact_Data: Schema.optional(Schema.Struct({ Location_Data: Schema.optional(Schema.Struct({ Address_Line_1: Schema.optional(Schema.String), Address_Line_2: Schema.optional(Schema.String), Region_Subdivision_1: Schema.optional(Schema.String), Country_Region_Reference: Schema.optional(Schema.Struct({ Country_Region_ID: Schema.String })), Country_City_Reference: Schema.optional(Schema.Struct({ WID: Schema.String })) })) })), Worker_Reference: Schema.optional(Schema.Struct({ WID: Schema.optional(Schema.String), Employee_ID: Schema.optional(Schema.String) })) })), Override_Source_Reference_WID: Schema.optional(Schema.String) })), zohorecruit: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)) })), bullhorn: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)), job_submission: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)) })), smartrecruiters: Schema.optional(Schema.Struct({ candidate_with_questions: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)), candidate_without_questions: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)), candidate: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)), consent_decisions: Schema.optional(Schema.Struct({ SINGLE: Schema.optional(Schema.Boolean), SMART_RECRUIT: Schema.optional(Schema.Boolean), SMART_CRM: Schema.optional(Schema.Boolean), SMART_MESSAGE_SMS: Schema.optional(Schema.Boolean), SMART_MESSAGE_WHATSAPP: Schema.optional(Schema.Boolean) })) })), talentadore: Schema.optional(Schema.Struct({ applications: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)) })), guidecom: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)) })), dvinci: Schema.optional(Schema.Struct({ application: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)), candidate: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)) })), hrworks: Schema.optional(Schema.Struct({ jobApplication: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)) })), jobylon: Schema.optional(Schema.Struct({ application: Schema.optional(Schema.Struct({ message: Schema.optional(Schema.String) })) })), avature: Schema.optional(Schema.Struct({ workflow: Schema.optional(Schema.Struct({ step: Schema.optional(Schema.Struct({ id: Schema.Int })) })) })), recruitee: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Struct({ cover_letter_text: Schema.optional(Schema.String) })) })), rexx: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)) })), umantis: Schema.optional(Schema.Struct({ person: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)) })), piloga: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Struct({ street: Schema.optional(Schema.String) })) })), pinpoint: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)) })), covetorest: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Struct({ mandant: Schema.optional(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))) })) })) })), screening_question_answers: Schema.optional(Schema.Array(Schema.Struct({ question_id: Schema.String, answer: Schema.Union([Schema.String, Schema.Boolean, Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308)), Schema.Array(Schema.String), Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))), Schema.Struct({ name: Schema.String, content_type: Schema.optional(Schema.String.check(Schema.isPattern(new RegExp("^[\\w.-]+\\/[\\w.-]+$")))), data_url: Schema.optional(Schema.String), data: Schema.optional(Schema.String) })]) }))) });
export type PostAtsJobsJobIdApplicationsRequestBody = Schema.Schema.Type<typeof PostAtsJobsJobIdApplicationsRequestBody>;

export const GetAtsUsersParameterCursor = Schema.String;
export type GetAtsUsersParameterCursor = Schema.Schema.Type<typeof GetAtsUsersParameterCursor>;

export const GetAtsUsersParameterPageSize = Schema_default_100_4;
export type GetAtsUsersParameterPageSize = Schema.Schema.Type<typeof GetAtsUsersParameterPageSize>;

export const GetAtsUsersParameterUpdatedAfter = Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetAtsUsersParameterUpdatedAfter = Schema.Schema.Type<typeof GetAtsUsersParameterUpdatedAfter>;

export const GetAtsUsersParameterIncludeDeleted = Schema_default_false;
export type GetAtsUsersParameterIncludeDeleted = Schema.Schema.Type<typeof GetAtsUsersParameterIncludeDeleted>;

export const GetAtsUsersParameterIgnoreUnsupportedFilters = Schema_default_false;
export type GetAtsUsersParameterIgnoreUnsupportedFilters = Schema.Schema.Type<typeof GetAtsUsersParameterIgnoreUnsupportedFilters>;

export const GetAtsUsersParameterIds = Schema.String;
export type GetAtsUsersParameterIds = Schema.Schema.Type<typeof GetAtsUsersParameterIds>;

export const GetAtsUsersParameterRemoteIds = Schema.String;
export type GetAtsUsersParameterRemoteIds = Schema.Schema.Type<typeof GetAtsUsersParameterRemoteIds>;

export const GetAtsUsersParameterEmails = Schema.String;
export type GetAtsUsersParameterEmails = Schema.Schema.Type<typeof GetAtsUsersParameterEmails>;

export const GetAtsUsersPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), first_name: Schema.NullOr(Schema.String), last_name: Schema.NullOr(Schema.String), email: Schema.optional(Schema.NullOr(Schema.String.check(Schema.isPattern(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$"))))), status: Schema.NullOr(Schema.Literals(["ACTIVE", "INACTIVE"])), remote_data: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), system_roles: Schema.Array(Schema.Struct({ remote_id: Schema.NullOr(Schema.String), remote_label: Schema.NullOr(Schema.String), scope: Schema.NullOr(Schema.Literals(["SYSTEM", "JOB"])), unified_type: Schema.NullOr(Schema.Literals(["HIRING_MANAGER", "RECRUITER", "COORDINATOR", "SOURCER", "INTERVIEWER", "ADMIN"])) })) })) }) });
export type GetAtsUsersPositiveResponse = Schema.Schema.Type<typeof GetAtsUsersPositiveResponse>;

export const GetAtsRolesParameterCursor = Schema.String;
export type GetAtsRolesParameterCursor = Schema.Schema.Type<typeof GetAtsRolesParameterCursor>;

export const GetAtsRolesParameterPageSize = Schema_default_100_4;
export type GetAtsRolesParameterPageSize = Schema.Schema.Type<typeof GetAtsRolesParameterPageSize>;

export const GetAtsRolesParameterUpdatedAfter = Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetAtsRolesParameterUpdatedAfter = Schema.Schema.Type<typeof GetAtsRolesParameterUpdatedAfter>;

export const GetAtsRolesParameterIncludeDeleted = Schema_default_false;
export type GetAtsRolesParameterIncludeDeleted = Schema.Schema.Type<typeof GetAtsRolesParameterIncludeDeleted>;

export const GetAtsRolesParameterIgnoreUnsupportedFilters = Schema_default_false;
export type GetAtsRolesParameterIgnoreUnsupportedFilters = Schema.Schema.Type<typeof GetAtsRolesParameterIgnoreUnsupportedFilters>;

export const GetAtsRolesParameterIds = Schema.String;
export type GetAtsRolesParameterIds = Schema.Schema.Type<typeof GetAtsRolesParameterIds>;

export const GetAtsRolesParameterRemoteIds = Schema.String;
export type GetAtsRolesParameterRemoteIds = Schema.Schema.Type<typeof GetAtsRolesParameterRemoteIds>;

export const GetAtsRolesParameterScopes = Schema.String;
export type GetAtsRolesParameterScopes = Schema.Schema.Type<typeof GetAtsRolesParameterScopes>;

export const GetAtsRolesPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), remote_label: Schema.NullOr(Schema.String), scope: Schema.NullOr(Schema.Literals(["SYSTEM", "JOB"])), unified_type: Schema.NullOr(Schema.Literals(["HIRING_MANAGER", "RECRUITER", "COORDINATOR", "SOURCER", "INTERVIEWER", "ADMIN"])), remote_data: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String) })) }) });
export type GetAtsRolesPositiveResponse = Schema.Schema.Type<typeof GetAtsRolesPositiveResponse>;

export const GetAtsOffersParameterCursor = Schema.String;
export type GetAtsOffersParameterCursor = Schema.Schema.Type<typeof GetAtsOffersParameterCursor>;

export const GetAtsOffersParameterPageSize = Schema_default_100_4;
export type GetAtsOffersParameterPageSize = Schema.Schema.Type<typeof GetAtsOffersParameterPageSize>;

export const GetAtsOffersParameterUpdatedAfter = Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetAtsOffersParameterUpdatedAfter = Schema.Schema.Type<typeof GetAtsOffersParameterUpdatedAfter>;

export const GetAtsOffersParameterIncludeDeleted = Schema_default_false;
export type GetAtsOffersParameterIncludeDeleted = Schema.Schema.Type<typeof GetAtsOffersParameterIncludeDeleted>;

export const GetAtsOffersParameterIgnoreUnsupportedFilters = Schema_default_false;
export type GetAtsOffersParameterIgnoreUnsupportedFilters = Schema.Schema.Type<typeof GetAtsOffersParameterIgnoreUnsupportedFilters>;

export const GetAtsOffersParameterIds = Schema.String;
export type GetAtsOffersParameterIds = Schema.Schema.Type<typeof GetAtsOffersParameterIds>;

export const GetAtsOffersParameterRemoteIds = Schema.String;
export type GetAtsOffersParameterRemoteIds = Schema.Schema.Type<typeof GetAtsOffersParameterRemoteIds>;

export const GetAtsOffersPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), status: Schema.NullOr(Schema.Literals(["ACCEPTED", "DECLINED", "SENT", "APPROVED", "DRAFT", "ABANDONED"])), employment_start_date: Schema.NullOr(Schema.String), application_id: Schema.NullOr(Schema.String), custom_fields: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)), integration_fields: Schema.Array(Schema.Struct({ id: Schema.String, key: Schema.String, type: Schema.Literals(["DEFAULT", "CUSTOM"]), value: Schema.optional(Schema.Null), label: Schema.NullOr(Schema.String) })), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), remote_created_at: Schema.NullOr(Schema.String), remote_updated_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)), application: Schema.NullOr(Schema.Struct({ candidate: Schema.NullOr(Schema.Struct({ id: Schema.String, remote_id: Schema.String, first_name: Schema.NullOr(Schema.String), last_name: Schema.NullOr(Schema.String), email_addresses: NullOr_default_value_prop })), job: Schema.NullOr(Schema.Struct({ id: Schema.String, remote_id: Schema.String, name: Schema.NullOr(Schema.String) })) })) })) }) });
export type GetAtsOffersPositiveResponse = Schema.Schema.Type<typeof GetAtsOffersPositiveResponse>;

export const GetAtsRejectionReasonsParameterCursor = Schema.String;
export type GetAtsRejectionReasonsParameterCursor = Schema.Schema.Type<typeof GetAtsRejectionReasonsParameterCursor>;

export const GetAtsRejectionReasonsParameterPageSize = Schema_default_100_4;
export type GetAtsRejectionReasonsParameterPageSize = Schema.Schema.Type<typeof GetAtsRejectionReasonsParameterPageSize>;

export const GetAtsRejectionReasonsParameterUpdatedAfter = Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetAtsRejectionReasonsParameterUpdatedAfter = Schema.Schema.Type<typeof GetAtsRejectionReasonsParameterUpdatedAfter>;

export const GetAtsRejectionReasonsParameterIncludeDeleted = Schema_default_false;
export type GetAtsRejectionReasonsParameterIncludeDeleted = Schema.Schema.Type<typeof GetAtsRejectionReasonsParameterIncludeDeleted>;

export const GetAtsRejectionReasonsParameterIgnoreUnsupportedFilters = Schema_default_false;
export type GetAtsRejectionReasonsParameterIgnoreUnsupportedFilters = Schema.Schema.Type<typeof GetAtsRejectionReasonsParameterIgnoreUnsupportedFilters>;

export const GetAtsRejectionReasonsParameterIds = Schema.String;
export type GetAtsRejectionReasonsParameterIds = Schema.Schema.Type<typeof GetAtsRejectionReasonsParameterIds>;

export const GetAtsRejectionReasonsParameterRemoteIds = Schema.String;
export type GetAtsRejectionReasonsParameterRemoteIds = Schema.Schema.Type<typeof GetAtsRejectionReasonsParameterRemoteIds>;

export const GetAtsRejectionReasonsPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.String, name: Schema.NullOr(Schema.String), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)) })) }) });
export type GetAtsRejectionReasonsPositiveResponse = Schema.Schema.Type<typeof GetAtsRejectionReasonsPositiveResponse>;

export const GetAtsInterviewsParameterCursor = Schema.String;
export type GetAtsInterviewsParameterCursor = Schema.Schema.Type<typeof GetAtsInterviewsParameterCursor>;

export const GetAtsInterviewsParameterPageSize = Schema_default_100_4;
export type GetAtsInterviewsParameterPageSize = Schema.Schema.Type<typeof GetAtsInterviewsParameterPageSize>;

export const GetAtsInterviewsParameterUpdatedAfter = Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetAtsInterviewsParameterUpdatedAfter = Schema.Schema.Type<typeof GetAtsInterviewsParameterUpdatedAfter>;

export const GetAtsInterviewsParameterIncludeDeleted = Schema_default_false;
export type GetAtsInterviewsParameterIncludeDeleted = Schema.Schema.Type<typeof GetAtsInterviewsParameterIncludeDeleted>;

export const GetAtsInterviewsParameterIgnoreUnsupportedFilters = Schema_default_false;
export type GetAtsInterviewsParameterIgnoreUnsupportedFilters = Schema.Schema.Type<typeof GetAtsInterviewsParameterIgnoreUnsupportedFilters>;

export const GetAtsInterviewsParameterIds = Schema.String;
export type GetAtsInterviewsParameterIds = Schema.Schema.Type<typeof GetAtsInterviewsParameterIds>;

export const GetAtsInterviewsParameterRemoteIds = Schema.String;
export type GetAtsInterviewsParameterRemoteIds = Schema.Schema.Type<typeof GetAtsInterviewsParameterRemoteIds>;

export const GetAtsInterviewsParameterJobIds = Schema.String;
export type GetAtsInterviewsParameterJobIds = Schema.Schema.Type<typeof GetAtsInterviewsParameterJobIds>;

export const GetAtsInterviewsPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), title: Schema.NullOr(Schema.String), starting_at: Schema.NullOr(Schema.String), ending_at: Schema.NullOr(Schema.String), location: Schema.optional(Schema.NullOr(Schema.Struct({ city: Schema.optional(Schema.NullOr(Schema.String)), country: Schema.optional(Schema.NullOr(Schema.String)), raw: Schema.optional(Schema.NullOr(Schema.String)), state: Schema.optional(Schema.NullOr(Schema.String)), street_1: Schema.optional(Schema.NullOr(Schema.String)), street_2: Schema.optional(Schema.NullOr(Schema.String)), zip_code: Schema.optional(Schema.NullOr(Schema.String)) }))), video_conferencing_url: Schema.NullOr(Schema.String), application_id: Schema.NullOr(Schema.String), stage_id: Schema.NullOr(Schema.String), canceled: Schema.NullOr(Schema.Boolean), remote_created_at: Schema.NullOr(Schema.String), remote_updated_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), users: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), first_name: Schema.NullOr(Schema.String), last_name: Schema.NullOr(Schema.String), email: Schema.optional(Schema.NullOr(Schema.String.check(Schema.isPattern(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$"))))) })), application: Schema.NullOr(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), outcome: Schema.NullOr(Schema.Literals(["PENDING", "HIRED", "DECLINED"])), rejection_reason_name: Schema.NullOr(Schema.String), candidate: Schema.NullOr(Schema.Struct({ id: Schema.String, remote_id: Schema.String, first_name: Schema.NullOr(Schema.String), last_name: Schema.NullOr(Schema.String), email_addresses: NullOr_default_value_prop })), job: Schema.NullOr(Schema.Struct({ id: Schema.String, remote_id: Schema.String, name: Schema.NullOr(Schema.String) })) })) })) }) });
export type GetAtsInterviewsPositiveResponse = Schema.Schema.Type<typeof GetAtsInterviewsPositiveResponse>;

export const GetAtsActionsAtsCreateCandidatePositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ attachment_restrictions: Schema.optional(Schema.NullOr(Schema.Struct({ total_size_bytes: Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), types: Schema.Struct({ CV: Schema.Union([Schema.Struct({ is_supported: Schema.Literal(true), min_amount: Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), max_amount: Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), max_file_size_bytes: Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), accepted_mime_types: Schema.NullOr(Schema.Array(Schema.String)) }), Schema.Struct({ is_supported: Schema.Literal(false) })]), COVER_LETTER: Schema.Union([Schema.Struct({ is_supported: Schema.Literal(true), min_amount: Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), max_amount: Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), max_file_size_bytes: Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), accepted_mime_types: Schema.NullOr(Schema.Array(Schema.String)) }), Schema.Struct({ is_supported: Schema.Literal(false) })]), OTHER: Schema.Union([Schema.Struct({ is_supported: Schema.Literal(true), min_amount: Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), max_amount: Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), max_file_size_bytes: Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), accepted_mime_types: Schema.NullOr(Schema.Array(Schema.String)) }), Schema.Struct({ is_supported: Schema.Literal(false) })]) }) }))) }) });
export type GetAtsActionsAtsCreateCandidatePositiveResponse = Schema.Schema.Type<typeof GetAtsActionsAtsCreateCandidatePositiveResponse>;

export const GetAtsActionsAtsCreateApplicationPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ attachment_restrictions: Schema.optional(Schema.NullOr(Schema.Struct({ total_size_bytes: Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), types: Schema.Struct({ CV: Schema.Union([Schema.Struct({ is_supported: Schema.Literal(true), min_amount: Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), max_amount: Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), max_file_size_bytes: Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), accepted_mime_types: Schema.NullOr(Schema.Array(Schema.String)) }), Schema.Struct({ is_supported: Schema.Literal(false) })]), COVER_LETTER: Schema.Union([Schema.Struct({ is_supported: Schema.Literal(true), min_amount: Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), max_amount: Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), max_file_size_bytes: Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), accepted_mime_types: Schema.NullOr(Schema.Array(Schema.String)) }), Schema.Struct({ is_supported: Schema.Literal(false) })]), OTHER: Schema.Union([Schema.Struct({ is_supported: Schema.Literal(true), min_amount: Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), max_amount: Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), max_file_size_bytes: Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), accepted_mime_types: Schema.NullOr(Schema.Array(Schema.String)) }), Schema.Struct({ is_supported: Schema.Literal(false) })]) }) }))) }) });
export type GetAtsActionsAtsCreateApplicationPositiveResponse = Schema.Schema.Type<typeof GetAtsActionsAtsCreateApplicationPositiveResponse>;

export const GetAtsActionsAtsAddApplicationAttachmentPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ attachment_restrictions: Schema.optional(Schema.NullOr(Schema.Struct({ types: Schema.Struct({ CV: Schema.Union([Schema.Struct({ is_supported: Schema.Literal(true), max_file_size_bytes: Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), accepted_mime_types: Schema.NullOr(Schema.Array(Schema.String)) }), Schema.Struct({ is_supported: Schema.Literal(false) })]), COVER_LETTER: Schema.Union([Schema.Struct({ is_supported: Schema.Literal(true), max_file_size_bytes: Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), accepted_mime_types: Schema.NullOr(Schema.Array(Schema.String)) }), Schema.Struct({ is_supported: Schema.Literal(false) })]), OTHER: Schema.Union([Schema.Struct({ is_supported: Schema.Literal(true), max_file_size_bytes: Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), accepted_mime_types: Schema.NullOr(Schema.Array(Schema.String)) }), Schema.Struct({ is_supported: Schema.Literal(false) })]) }) }))) }) });
export type GetAtsActionsAtsAddApplicationAttachmentPositiveResponse = Schema.Schema.Type<typeof GetAtsActionsAtsAddApplicationAttachmentPositiveResponse>;

export const GetAtsActionsAtsAddCandidateAttachmentPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ attachment_restrictions: Schema.optional(Schema.NullOr(Schema.Struct({ types: Schema.Struct({ CV: Schema.Union([Schema.Struct({ is_supported: Schema.Literal(true), max_file_size_bytes: Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), accepted_mime_types: Schema.NullOr(Schema.Array(Schema.String)) }), Schema.Struct({ is_supported: Schema.Literal(false) })]), COVER_LETTER: Schema.Union([Schema.Struct({ is_supported: Schema.Literal(true), max_file_size_bytes: Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), accepted_mime_types: Schema.NullOr(Schema.Array(Schema.String)) }), Schema.Struct({ is_supported: Schema.Literal(false) })]), OTHER: Schema.Union([Schema.Struct({ is_supported: Schema.Literal(true), max_file_size_bytes: Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), accepted_mime_types: Schema.NullOr(Schema.Array(Schema.String)) }), Schema.Struct({ is_supported: Schema.Literal(false) })]) }) }))) }) });
export type GetAtsActionsAtsAddCandidateAttachmentPositiveResponse = Schema.Schema.Type<typeof GetAtsActionsAtsAddCandidateAttachmentPositiveResponse>;

export const PostAtsImportTrackedApplicationPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ id: Schema.String.check(Schema.isMinLength(24), Schema.isMaxLength(24), Schema.isPattern(new RegExp("^[1-9A-HJ-NP-Za-km-z]+$"))), tracked_at: Schema.NullOr(Schema.String), imported_id: Schema.Struct({ erecruiter: Schema.optional(Schema.Union([Schema.Struct({ id_type: Schema.Literal("application_and_job_remote_ids"), application_remote_id: Schema.String, job_remote_id: Schema.String }), Schema.Struct({ id_type: Schema.Literal("application_and_candidate_remote_ids"), candidate_remote_id: Schema.String, application_remote_id: Schema.String })])), successfactors: Schema.optional(Schema.Struct({ id_type: Schema.Literal("application_remote_id"), application_remote_id: Schema.String })), recruitee: Schema.optional(Schema.Struct({ id_type: Schema.Literal("placement_id"), placement_id: Schema.String })), greenhouse: Schema.optional(Schema.Struct({ id_type: Schema.Literal("application_id"), application_id: Schema.String })), onlyfy: Schema.optional(Schema.Struct({ id_type: Schema.Literal("application_id"), application_id: Schema.String })), smartrecruiters: Schema.optional(Schema.Struct({ id_type: Schema.Literal("candidate_and_job_remote_ids"), candidate_remote_id: Schema.String, job_remote_id: Schema.String })) }) }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PostAtsImportTrackedApplicationPositiveResponse = Schema.Schema.Type<typeof PostAtsImportTrackedApplicationPositiveResponse>;

export const PostAtsImportTrackedApplicationRequestBody = Schema.Struct({ erecruiter: Schema.optional(Schema.Union([Schema.Struct({ id_type: Schema.Literal("application_and_job_remote_ids"), application_remote_id: Schema.String, job_remote_id: Schema.String }), Schema.Struct({ id_type: Schema.Literal("application_and_candidate_remote_ids"), candidate_remote_id: Schema.String, application_remote_id: Schema.String })])), successfactors: Schema.optional(Schema.Struct({ id_type: Schema.Literal("application_remote_id"), application_remote_id: Schema.String })), recruitee: Schema.optional(Schema.Struct({ id_type: Schema.Literal("placement_id"), placement_id: Schema.String })), greenhouse: Schema.optional(Schema.Struct({ id_type: Schema.Literal("application_id"), application_id: Schema.String })), onlyfy: Schema.optional(Schema.Struct({ id_type: Schema.Literal("application_id"), application_id: Schema.String })), smartrecruiters: Schema.optional(Schema.Struct({ id_type: Schema.Literal("candidate_and_job_remote_ids"), candidate_remote_id: Schema.String, job_remote_id: Schema.String })), tracked_at: Schema.NullOr(Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))) });
export type PostAtsImportTrackedApplicationRequestBody = Schema.Schema.Type<typeof PostAtsImportTrackedApplicationRequestBody>;

export const PostAtsCustomAvionteSyncedJobsPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Record(Schema.String, Schema.Unknown) });
export type PostAtsCustomAvionteSyncedJobsPositiveResponse = Schema.Schema.Type<typeof PostAtsCustomAvionteSyncedJobsPositiveResponse>;

export const PostAtsCustomAvionteSyncedJobsRequestBody = Schema.Struct({ job_remote_id: Schema.String.check(Schema.isPattern(new RegExp("^\\d+$"))) });
export type PostAtsCustomAvionteSyncedJobsRequestBody = Schema.Schema.Type<typeof PostAtsCustomAvionteSyncedJobsRequestBody>;

export const DeleteAtsCustomAvionteSyncedJobsJobRemoteIdParameterJobRemoteId = Schema.String;
export type DeleteAtsCustomAvionteSyncedJobsJobRemoteIdParameterJobRemoteId = Schema.Schema.Type<typeof DeleteAtsCustomAvionteSyncedJobsJobRemoteIdParameterJobRemoteId>;

export const DeleteAtsCustomAvionteSyncedJobsJobRemoteIdPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Record(Schema.String, Schema.Unknown) });
export type DeleteAtsCustomAvionteSyncedJobsJobRemoteIdPositiveResponse = Schema.Schema.Type<typeof DeleteAtsCustomAvionteSyncedJobsJobRemoteIdPositiveResponse>;

export const DeleteAtsCustomAvionteSyncedJobsJobRemoteIdRequestBody = Schema.Struct({  });
export type DeleteAtsCustomAvionteSyncedJobsJobRemoteIdRequestBody = Schema.Schema.Type<typeof DeleteAtsCustomAvionteSyncedJobsJobRemoteIdRequestBody>;

export const GetAssessmentPackagesPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ packages: Schema.Array(Schema.Struct({ id: Schema.String, name: Schema.String, description: Schema.String, updated_at: Schema.NullOr(Schema.String), type: Schema.NullOr(Schema.Literals(["BEHAVIORAL", "VIDEO_INTERVIEW", "SKILLS_TEST", "BACKGROUND_CHECK", "REFERENCE_CHECK"])) })) }) });
export type GetAssessmentPackagesPositiveResponse = Schema.Schema.Type<typeof GetAssessmentPackagesPositiveResponse>;

export const PutAssessmentPackagesPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Record(Schema.String, Schema.Unknown), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PutAssessmentPackagesPositiveResponse = Schema.Schema.Type<typeof PutAssessmentPackagesPositiveResponse>;

export const PutAssessmentPackagesRequestBody = Schema.Struct({ packages: Schema.Array(Schema.Struct({ id: Schema.String, type: Schema.Literals(["BEHAVIORAL", "VIDEO_INTERVIEW", "SKILLS_TEST", "BACKGROUND_CHECK", "REFERENCE_CHECK"]), name: Schema.String, description: Schema.String })) });
export type PutAssessmentPackagesRequestBody = Schema.Schema.Type<typeof PutAssessmentPackagesRequestBody>;

export const GetAssessmentOrdersParameterCursor = Schema.String;
export type GetAssessmentOrdersParameterCursor = Schema.Schema.Type<typeof GetAssessmentOrdersParameterCursor>;

export const GetAssessmentOrdersParameterPageSize = Schema_default_100_4;
export type GetAssessmentOrdersParameterPageSize = Schema.Schema.Type<typeof GetAssessmentOrdersParameterPageSize>;

export const GetAssessmentOrdersParameterIds = Schema.String;
export type GetAssessmentOrdersParameterIds = Schema.Schema.Type<typeof GetAssessmentOrdersParameterIds>;

export const GetAssessmentOrdersParameterStatuses = Schema.String;
export type GetAssessmentOrdersParameterStatuses = Schema.Schema.Type<typeof GetAssessmentOrdersParameterStatuses>;

export const GetAssessmentOrdersParameterCreatedAfter = Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetAssessmentOrdersParameterCreatedAfter = Schema.Schema.Type<typeof GetAssessmentOrdersParameterCreatedAfter>;

export const GetAssessmentOrdersPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, package_id: Schema.String, status: Schema.Literals(["OPEN", "COMPLETED", "CANCELLED", "REJECTED"]), candidate: Schema.Struct({ remote_id: Schema.NullOr(Schema.String), email: Schema.String.check(Schema.isPattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)), first_name: Schema.NullOr(Schema.String), last_name: Schema.NullOr(Schema.String), phone: Schema.NullOr(Schema.String) }), application: Schema.Struct({ remote_id: Schema.NullOr(Schema.String) }), job: Schema.Struct({ remote_id: Schema.NullOr(Schema.String), name: Schema.NullOr(Schema.String), job_code: Schema.NullOr(Schema.String), description: Schema.NullOr(Schema.String), location: Schema.NullOr(Schema.Struct({ street_1: Schema.optional(Schema.NullOr(Schema.String)), street_2: Schema.optional(Schema.NullOr(Schema.String)), city: Schema.optional(Schema.NullOr(Schema.String)), state: Schema.optional(Schema.NullOr(Schema.String)), zip_code: Schema.optional(Schema.NullOr(Schema.String)), country: Schema.optional(Schema.NullOr(Schema.String)), raw: Schema.optional(Schema.NullOr(Schema.String)) })), hiring_team: Schema.Array(Schema.Struct({ remote_id: Schema.NullOr(Schema.String), email: Schema.NullOr(Schema.String), first_name: Schema.NullOr(Schema.String), last_name: Schema.NullOr(Schema.String), hiring_team_roles: Schema.Array(Schema.Literals(["RECRUITER", "HIRING_MANAGER"])) })) }) })) }) });
export type GetAssessmentOrdersPositiveResponse = Schema.Schema.Type<typeof GetAssessmentOrdersPositiveResponse>;

export const GetAssessmentOrdersOpenParameterCursor = Schema.String;
export type GetAssessmentOrdersOpenParameterCursor = Schema.Schema.Type<typeof GetAssessmentOrdersOpenParameterCursor>;

export const GetAssessmentOrdersOpenParameterPageSize = Schema_default_100_4;
export type GetAssessmentOrdersOpenParameterPageSize = Schema.Schema.Type<typeof GetAssessmentOrdersOpenParameterPageSize>;

export const GetAssessmentOrdersOpenPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, package_id: Schema.String, candidate: Schema.Struct({ remote_id: Schema.NullOr(Schema.String), email: Schema.String.check(Schema.isPattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)), first_name: Schema.NullOr(Schema.String), last_name: Schema.NullOr(Schema.String), phone: Schema.NullOr(Schema.String) }), application: Schema.Struct({ remote_id: Schema.NullOr(Schema.String) }), job: Schema.Struct({ remote_id: Schema.NullOr(Schema.String), name: Schema.NullOr(Schema.String), job_code: Schema.NullOr(Schema.String), description: Schema.NullOr(Schema.String), location: Schema.NullOr(Schema.Struct({ street_1: Schema.optional(Schema.NullOr(Schema.String)), street_2: Schema.optional(Schema.NullOr(Schema.String)), city: Schema.optional(Schema.NullOr(Schema.String)), state: Schema.optional(Schema.NullOr(Schema.String)), zip_code: Schema.optional(Schema.NullOr(Schema.String)), country: Schema.optional(Schema.NullOr(Schema.String)), raw: Schema.optional(Schema.NullOr(Schema.String)) })), hiring_team: Schema.Array(Schema.Struct({ remote_id: Schema.NullOr(Schema.String), email: Schema.NullOr(Schema.String), first_name: Schema.NullOr(Schema.String), last_name: Schema.NullOr(Schema.String), hiring_team_roles: Schema.Array(Schema.Literals(["RECRUITER", "HIRING_MANAGER"])) })) }) })) }) });
export type GetAssessmentOrdersOpenPositiveResponse = Schema.Schema.Type<typeof GetAssessmentOrdersOpenPositiveResponse>;

export const PutAssessmentOrdersAssessmentOrderIdResultParameterAssessmentOrderId = Schema.String;
export type PutAssessmentOrdersAssessmentOrderIdResultParameterAssessmentOrderId = Schema.Schema.Type<typeof PutAssessmentOrdersAssessmentOrderIdResultParameterAssessmentOrderId>;

export const PutAssessmentOrdersAssessmentOrderIdResultPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Record(Schema.String, Schema.Unknown), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PutAssessmentOrdersAssessmentOrderIdResultPositiveResponse = Schema.Schema.Type<typeof PutAssessmentOrdersAssessmentOrderIdResultPositiveResponse>;

export const PutAssessmentOrdersAssessmentOrderIdResultRequestBody = Schema.Struct({ status: Schema.Literals(["COMPLETED", "CANCELLED", "OPEN"]), result_url: Schema.String, completed_at: Schema.optional(Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), score: Schema.optional(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), max_score: Schema.optional(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), attributes: Union_default_value_prop, attachments: Array_default_value_prop_18, remote_fields: Schema.optional(Schema.Struct({ smartrecruiters: Schema.optional(Schema.Struct({ scoreLabel: Schema.optional(Schema.String) })), recruitee: Schema.optional(Schema.Struct({ subtitle: Schema.optional(Schema.String) })) })) });
export type PutAssessmentOrdersAssessmentOrderIdResultRequestBody = Schema.Schema.Type<typeof PutAssessmentOrdersAssessmentOrderIdResultRequestBody>;

export const GetLmsUsersParameterCursor = Schema.String;
export type GetLmsUsersParameterCursor = Schema.Schema.Type<typeof GetLmsUsersParameterCursor>;

export const GetLmsUsersParameterPageSize = Schema_default_100_4;
export type GetLmsUsersParameterPageSize = Schema.Schema.Type<typeof GetLmsUsersParameterPageSize>;

export const GetLmsUsersParameterUpdatedAfter = Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetLmsUsersParameterUpdatedAfter = Schema.Schema.Type<typeof GetLmsUsersParameterUpdatedAfter>;

export const GetLmsUsersParameterIncludeDeleted = Schema_default_false;
export type GetLmsUsersParameterIncludeDeleted = Schema.Schema.Type<typeof GetLmsUsersParameterIncludeDeleted>;

export const GetLmsUsersParameterIgnoreUnsupportedFilters = Schema_default_false;
export type GetLmsUsersParameterIgnoreUnsupportedFilters = Schema.Schema.Type<typeof GetLmsUsersParameterIgnoreUnsupportedFilters>;

export const GetLmsUsersParameterIds = Schema.String;
export type GetLmsUsersParameterIds = Schema.Schema.Type<typeof GetLmsUsersParameterIds>;

export const GetLmsUsersParameterRemoteIds = Schema.String;
export type GetLmsUsersParameterRemoteIds = Schema.Schema.Type<typeof GetLmsUsersParameterRemoteIds>;

export const GetLmsUsersParameterWorkEmails = Schema.String;
export type GetLmsUsersParameterWorkEmails = Schema.Schema.Type<typeof GetLmsUsersParameterWorkEmails>;

export const GetLmsUsersPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.String, first_name: Schema.NullOr(Schema.String), last_name: Schema.NullOr(Schema.String), work_email: Schema.NullOr(Schema.String), status: Schema.NullOr(Schema.Literals(["ACTIVE", "INACTIVE"])), remote_created_at: Schema.NullOr(Schema.String), remote_deleted_at: Schema.NullOr(Schema.String), changed_at: Schema.String, remote_data: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)), custom_fields: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)), integration_fields: Schema.Array(Schema.Struct({ id: Schema.String, key: Schema.String, type: Schema.Literals(["DEFAULT", "CUSTOM"]), value: Schema.optional(Schema.Null), label: Schema.NullOr(Schema.String) })) })) }) });
export type GetLmsUsersPositiveResponse = Schema.Schema.Type<typeof GetLmsUsersPositiveResponse>;

export const GetLmsCourseProgressionsParameterCursor = Schema.String;
export type GetLmsCourseProgressionsParameterCursor = Schema.Schema.Type<typeof GetLmsCourseProgressionsParameterCursor>;

export const GetLmsCourseProgressionsParameterPageSize = Schema_default_100_4;
export type GetLmsCourseProgressionsParameterPageSize = Schema.Schema.Type<typeof GetLmsCourseProgressionsParameterPageSize>;

export const GetLmsCourseProgressionsParameterUpdatedAfter = Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetLmsCourseProgressionsParameterUpdatedAfter = Schema.Schema.Type<typeof GetLmsCourseProgressionsParameterUpdatedAfter>;

export const GetLmsCourseProgressionsParameterIncludeDeleted = Schema_default_false;
export type GetLmsCourseProgressionsParameterIncludeDeleted = Schema.Schema.Type<typeof GetLmsCourseProgressionsParameterIncludeDeleted>;

export const GetLmsCourseProgressionsParameterIgnoreUnsupportedFilters = Schema_default_false;
export type GetLmsCourseProgressionsParameterIgnoreUnsupportedFilters = Schema.Schema.Type<typeof GetLmsCourseProgressionsParameterIgnoreUnsupportedFilters>;

export const GetLmsCourseProgressionsParameterIds = Schema.String;
export type GetLmsCourseProgressionsParameterIds = Schema.Schema.Type<typeof GetLmsCourseProgressionsParameterIds>;

export const GetLmsCourseProgressionsParameterRemoteIds = Schema.String;
export type GetLmsCourseProgressionsParameterRemoteIds = Schema.Schema.Type<typeof GetLmsCourseProgressionsParameterRemoteIds>;

export const GetLmsCourseProgressionsParameterUserIds = Schema.String;
export type GetLmsCourseProgressionsParameterUserIds = Schema.Schema.Type<typeof GetLmsCourseProgressionsParameterUserIds>;

export const GetLmsCourseProgressionsParameterCourseIds = Schema.String;
export type GetLmsCourseProgressionsParameterCourseIds = Schema.Schema.Type<typeof GetLmsCourseProgressionsParameterCourseIds>;

export const GetLmsCourseProgressionsPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.String, user_id: Schema.String, course_revision_id: Schema.String, status: Schema.NullOr(Schema.Literals(["ENROLLED", "IN_PROGRESS", "COMPLETED", "DROPPED"])), enrolled_at: Schema.NullOr(Schema.String), completed_at: Schema.NullOr(Schema.String), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)), user: Schema.Struct({ id: Schema.String, remote_id: Schema.String, first_name: Schema.NullOr(Schema.String), last_name: Schema.NullOr(Schema.String), work_email: Schema.NullOr(Schema.String) }), course_revision: Schema.Struct({ id: Schema.String, remote_id: Schema.String, title: Schema.NullOr(Schema.String), course: Schema.NullOr(Schema.Struct({ id: Schema.String, remote_id: Schema.String })) }) })) }) });
export type GetLmsCourseProgressionsPositiveResponse = Schema.Schema.Type<typeof GetLmsCourseProgressionsPositiveResponse>;

export const PostLmsCourseProgressionsPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ id: Schema.String, remote_id: Schema.String, user_id: Schema.String, course_revision_id: Schema.String, status: Schema.NullOr(Schema.Literals(["ENROLLED", "IN_PROGRESS", "COMPLETED", "DROPPED"])), enrolled_at: Schema.NullOr(Schema.String), completed_at: Schema.NullOr(Schema.String), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)), user: Schema.Struct({ id: Schema.String, remote_id: Schema.String, first_name: Schema.NullOr(Schema.String), last_name: Schema.NullOr(Schema.String), work_email: Schema.NullOr(Schema.String) }), course_revision: Schema.Struct({ id: Schema.String, remote_id: Schema.String, title: Schema.NullOr(Schema.String), course: Schema.NullOr(Schema.Struct({ id: Schema.String, remote_id: Schema.String })) }) }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PostLmsCourseProgressionsPositiveResponse = Schema.Schema.Type<typeof PostLmsCourseProgressionsPositiveResponse>;

export const PostLmsCourseProgressionsRequestBody = Schema.Struct({ user_id: Schema.String, course_revision_id: Schema.String });
export type PostLmsCourseProgressionsRequestBody = Schema.Schema.Type<typeof PostLmsCourseProgressionsRequestBody>;

export const PostLmsCourseProgressionsCourseProgressionIdCompleteParameterCourseProgressionId = Schema.String;
export type PostLmsCourseProgressionsCourseProgressionIdCompleteParameterCourseProgressionId = Schema.Schema.Type<typeof PostLmsCourseProgressionsCourseProgressionIdCompleteParameterCourseProgressionId>;

export const PostLmsCourseProgressionsCourseProgressionIdCompletePositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ id: Schema.String, remote_id: Schema.String, user_id: Schema.String, course_revision_id: Schema.String, status: Schema.NullOr(Schema.Literals(["ENROLLED", "IN_PROGRESS", "COMPLETED", "DROPPED"])), enrolled_at: Schema.NullOr(Schema.String), completed_at: Schema.NullOr(Schema.String), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)), user: Schema.Struct({ id: Schema.String, remote_id: Schema.String, first_name: Schema.NullOr(Schema.String), last_name: Schema.NullOr(Schema.String), work_email: Schema.NullOr(Schema.String) }), course_revision: Schema.Struct({ id: Schema.String, remote_id: Schema.String, title: Schema.NullOr(Schema.String), course: Schema.NullOr(Schema.Struct({ id: Schema.String, remote_id: Schema.String })) }) }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PostLmsCourseProgressionsCourseProgressionIdCompletePositiveResponse = Schema.Schema.Type<typeof PostLmsCourseProgressionsCourseProgressionIdCompletePositiveResponse>;

export const PostLmsCourseProgressionsCourseProgressionIdCompleteRequestBody = Schema.Struct({ completed_at: Schema.optional(Schema.NullOr(Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))))), score: Schema.optional(Schema.NullOr(Schema.Int.check(Schema.isGreaterThanOrEqualTo(0), Schema.isLessThanOrEqualTo(100)))) });
export type PostLmsCourseProgressionsCourseProgressionIdCompleteRequestBody = Schema.Schema.Type<typeof PostLmsCourseProgressionsCourseProgressionIdCompleteRequestBody>;

export const GetLmsCoursesParameterCursor = Schema.String;
export type GetLmsCoursesParameterCursor = Schema.Schema.Type<typeof GetLmsCoursesParameterCursor>;

export const GetLmsCoursesParameterPageSize = Schema_default_100_4;
export type GetLmsCoursesParameterPageSize = Schema.Schema.Type<typeof GetLmsCoursesParameterPageSize>;

export const GetLmsCoursesParameterUpdatedAfter = Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetLmsCoursesParameterUpdatedAfter = Schema.Schema.Type<typeof GetLmsCoursesParameterUpdatedAfter>;

export const GetLmsCoursesParameterIncludeDeleted = Schema_default_false;
export type GetLmsCoursesParameterIncludeDeleted = Schema.Schema.Type<typeof GetLmsCoursesParameterIncludeDeleted>;

export const GetLmsCoursesParameterIgnoreUnsupportedFilters = Schema_default_false;
export type GetLmsCoursesParameterIgnoreUnsupportedFilters = Schema.Schema.Type<typeof GetLmsCoursesParameterIgnoreUnsupportedFilters>;

export const GetLmsCoursesParameterIds = Schema.String;
export type GetLmsCoursesParameterIds = Schema.Schema.Type<typeof GetLmsCoursesParameterIds>;

export const GetLmsCoursesParameterRemoteIds = Schema.String;
export type GetLmsCoursesParameterRemoteIds = Schema.Schema.Type<typeof GetLmsCoursesParameterRemoteIds>;

export const GetLmsCoursesPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.String, provider_id: Schema.NullOr(Schema.String), origin_id: Schema.NullOr(Schema.String), remote_created_at: Schema.NullOr(Schema.String), remote_deleted_at: Schema.NullOr(Schema.String), changed_at: Schema.String, remote_data: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)), custom_fields: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)), integration_fields: Schema.Array(Schema.Struct({ id: Schema.String, key: Schema.String, type: Schema.Literals(["DEFAULT", "CUSTOM"]), value: Schema.optional(Schema.Null), label: Schema.NullOr(Schema.String) })), provider: Schema.NullOr(Schema.Struct({ id: Schema.String, remote_id: Schema.String, name: Schema.NullOr(Schema.String) })), revisions: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.String, course_id: Schema.NullOr(Schema.String), title: Schema.NullOr(Schema.String), description: Schema.NullOr(Schema.String), remote_url: Schema.NullOr(Schema.String), status: Schema.NullOr(Schema.Literals(["ACTIVE", "INACTIVE"])), remote_created_at: Schema.NullOr(Schema.String), remote_deleted_at: Schema.NullOr(Schema.String), changed_at: Schema.String, remote_data: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)), custom_fields: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)), integration_fields: Schema.Array(Schema.Struct({ id: Schema.String, key: Schema.String, type: Schema.Literals(["DEFAULT", "CUSTOM"]), value: Schema.optional(Schema.Null), label: Schema.NullOr(Schema.String) })), skill_assignments: Schema.Array(Schema.Struct({ skill: Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), name: Schema.NullOr(Schema.String) }) })) })) })) }) });
export type GetLmsCoursesPositiveResponse = Schema.Schema.Type<typeof GetLmsCoursesPositiveResponse>;

export const PostLmsCoursesBulkPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ task_id: Schema.String }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PostLmsCoursesBulkPositiveResponse = Schema.Schema.Type<typeof PostLmsCoursesBulkPositiveResponse>;

export const PostLmsCoursesBulkRequestBody = Schema.Struct({ items: Schema.Array(Schema.Struct({ origin_id: Schema.String, course: Schema.Struct({ type: Schema.Literal("EXTERNAL"), title: Schema.String, description: Schema.optional(Schema.NullOr(Schema.String)), course_url: Schema.String, thumbnail_url: Schema.optional(Schema.NullOr(Schema.String)), duration: Schema.optional(Schema.NullOr(Schema.Int.check(Schema.isGreaterThan(0)))), languages: Schema.optional(Schema.NullOr(Schema.Array(Schema.String.check(Schema.isPattern(new RegExp("^[a-z]{2,3}(-[A-Z]{2})?$")))))) }) })) });
export type PostLmsCoursesBulkRequestBody = Schema.Schema.Type<typeof PostLmsCoursesBulkRequestBody>;

export const GetLmsCoursesBulkTaskIdParameterTaskId = Schema.String;
export type GetLmsCoursesBulkTaskIdParameterTaskId = Schema.Schema.Type<typeof GetLmsCoursesBulkTaskIdParameterTaskId>;

export const GetLmsCoursesBulkTaskIdPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Union([Schema.Struct({ task_id: Schema.String, created_at: Schema.String, status: Schema.Literal("PENDING"), completed_at: Schema.Null }), Schema.Struct({ task_id: Schema.String, created_at: Schema.String, status: Schema.Literal("COMPLETED"), data: Schema.Array(Schema.Union([Schema.Struct({ origin_id: Schema.String, status: Schema.Literal("SUCCEEDED"), data: Schema.Struct({ id: Schema.String }) }), Schema.Struct({ origin_id: Schema.String, status: Schema.Literal("FAILED"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS", "LMS.COURSE_UPDATE_NOT_SUPPORTED", "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING", "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) })])), completed_at: Schema.String }), Schema.Struct({ task_id: Schema.String, created_at: Schema.String, status: Schema.Literal("FAILED"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS", "LMS.COURSE_UPDATE_NOT_SUPPORTED", "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING", "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }), completed_at: Schema.String })]) });
export type GetLmsCoursesBulkTaskIdPositiveResponse = Schema.Schema.Type<typeof GetLmsCoursesBulkTaskIdPositiveResponse>;

export const PostLmsCoursesCourseIdDeactivateParameterCourseId = Schema.String;
export type PostLmsCoursesCourseIdDeactivateParameterCourseId = Schema.Schema.Type<typeof PostLmsCoursesCourseIdDeactivateParameterCourseId>;

export const PostLmsCoursesCourseIdDeactivatePositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ id: Schema.String, remote_id: Schema.String, provider_id: Schema.NullOr(Schema.String), origin_id: Schema.NullOr(Schema.String), remote_created_at: Schema.NullOr(Schema.String), remote_deleted_at: Schema.NullOr(Schema.String), changed_at: Schema.String, remote_data: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)), custom_fields: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)), integration_fields: Schema.Array(Schema.Struct({ id: Schema.String, key: Schema.String, type: Schema.Literals(["DEFAULT", "CUSTOM"]), value: Schema.optional(Schema.Null), label: Schema.NullOr(Schema.String) })), provider: Schema.NullOr(Schema.Struct({ id: Schema.String, remote_id: Schema.String, name: Schema.NullOr(Schema.String) })), revisions: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.String, course_id: Schema.NullOr(Schema.String), title: Schema.NullOr(Schema.String), description: Schema.NullOr(Schema.String), remote_url: Schema.NullOr(Schema.String), status: Schema.NullOr(Schema.Literals(["ACTIVE", "INACTIVE"])), remote_created_at: Schema.NullOr(Schema.String), remote_deleted_at: Schema.NullOr(Schema.String), changed_at: Schema.String, remote_data: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)), custom_fields: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)), integration_fields: Schema.Array(Schema.Struct({ id: Schema.String, key: Schema.String, type: Schema.Literals(["DEFAULT", "CUSTOM"]), value: Schema.optional(Schema.Null), label: Schema.NullOr(Schema.String) })), skill_assignments: Schema.Array(Schema.Struct({ skill: Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), name: Schema.NullOr(Schema.String) }) })) })) }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PostLmsCoursesCourseIdDeactivatePositiveResponse = Schema.Schema.Type<typeof PostLmsCoursesCourseIdDeactivatePositiveResponse>;

export const PostLmsCoursesCourseIdDeactivateRequestBody = Schema.Struct({  });
export type PostLmsCoursesCourseIdDeactivateRequestBody = Schema.Schema.Type<typeof PostLmsCoursesCourseIdDeactivateRequestBody>;

export const GetLmsSkillsParameterCursor = Schema.String;
export type GetLmsSkillsParameterCursor = Schema.Schema.Type<typeof GetLmsSkillsParameterCursor>;

export const GetLmsSkillsParameterPageSize = Schema_default_100_4;
export type GetLmsSkillsParameterPageSize = Schema.Schema.Type<typeof GetLmsSkillsParameterPageSize>;

export const GetLmsSkillsParameterUpdatedAfter = Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));
export type GetLmsSkillsParameterUpdatedAfter = Schema.Schema.Type<typeof GetLmsSkillsParameterUpdatedAfter>;

export const GetLmsSkillsParameterIncludeDeleted = Schema_default_false;
export type GetLmsSkillsParameterIncludeDeleted = Schema.Schema.Type<typeof GetLmsSkillsParameterIncludeDeleted>;

export const GetLmsSkillsParameterIgnoreUnsupportedFilters = Schema_default_false;
export type GetLmsSkillsParameterIgnoreUnsupportedFilters = Schema.Schema.Type<typeof GetLmsSkillsParameterIgnoreUnsupportedFilters>;

export const GetLmsSkillsParameterIds = Schema.String;
export type GetLmsSkillsParameterIds = Schema.Schema.Type<typeof GetLmsSkillsParameterIds>;

export const GetLmsSkillsParameterRemoteIds = Schema.String;
export type GetLmsSkillsParameterRemoteIds = Schema.Schema.Type<typeof GetLmsSkillsParameterRemoteIds>;

export const GetLmsSkillsPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ next: Schema.NullOr(Schema.String), results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), name: Schema.NullOr(Schema.String), remote_created_at: Schema.NullOr(Schema.String), remote_deleted_at: Schema.NullOr(Schema.String), changed_at: Schema.String, remote_data: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)), custom_fields: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)), integration_fields: Schema.Array(Schema.Struct({ id: Schema.String, key: Schema.String, type: Schema.Literals(["DEFAULT", "CUSTOM"]), value: Schema.optional(Schema.Null), label: Schema.NullOr(Schema.String) })) })) }) });
export type GetLmsSkillsPositiveResponse = Schema.Schema.Type<typeof GetLmsSkillsPositiveResponse>;

export const PostAiApplyCareerSitesPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ id: Schema.String, label: Schema.String }) });
export type PostAiApplyCareerSitesPositiveResponse = Schema.Schema.Type<typeof PostAiApplyCareerSitesPositiveResponse>;

export const PostAiApplyCareerSitesRequestBody = Schema.Struct({ label: Schema.String });
export type PostAiApplyCareerSitesRequestBody = Schema.Schema.Type<typeof PostAiApplyCareerSitesRequestBody>;

export const GetAiApplyCareerSitesParameterCursor = Schema.String;
export type GetAiApplyCareerSitesParameterCursor = Schema.Schema.Type<typeof GetAiApplyCareerSitesParameterCursor>;

export const GetAiApplyCareerSitesParameterPageSize = Schema_default_100_4;
export type GetAiApplyCareerSitesParameterPageSize = Schema.Schema.Type<typeof GetAiApplyCareerSitesParameterPageSize>;

export const GetAiApplyCareerSitesParameterIds = Schema.String;
export type GetAiApplyCareerSitesParameterIds = Schema.Schema.Type<typeof GetAiApplyCareerSitesParameterIds>;

export const GetAiApplyCareerSitesPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ results: Schema.Array(Schema.Struct({ id: Schema.String, label: Schema.String })), next: Schema.NullOr(Schema.String) }) });
export type GetAiApplyCareerSitesPositiveResponse = Schema.Schema.Type<typeof GetAiApplyCareerSitesPositiveResponse>;

export const GetAiApplyPostingsParameterCursor = Schema.String;
export type GetAiApplyPostingsParameterCursor = Schema.Schema.Type<typeof GetAiApplyPostingsParameterCursor>;

export const GetAiApplyPostingsParameterPageSize = Schema_default_100_4;
export type GetAiApplyPostingsParameterPageSize = Schema.Schema.Type<typeof GetAiApplyPostingsParameterPageSize>;

export const GetAiApplyPostingsParameterIds = Schema.String;
export type GetAiApplyPostingsParameterIds = Schema.Schema.Type<typeof GetAiApplyPostingsParameterIds>;

export const GetAiApplyPostingsParameterCareerSiteIds = Schema.String;
export type GetAiApplyPostingsParameterCareerSiteIds = Schema.Schema.Type<typeof GetAiApplyPostingsParameterCareerSiteIds>;

export const GetAiApplyPostingsParameterJobCodes = Schema.String;
export type GetAiApplyPostingsParameterJobCodes = Schema.Schema.Type<typeof GetAiApplyPostingsParameterJobCodes>;

export const GetAiApplyPostingsPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ results: Schema.Array(Schema.Struct({ id: Schema.String, career_site: Schema.Struct({ id: Schema.String, label: Schema.String }), url: Schema.String, job_code: Schema.NullOr(Schema.String), created_at: Schema.String, updated_at: Schema.String, archived_at: Schema.NullOr(Schema.String), archived_reason: Schema.NullOr(Schema.Literals(["JOB_POSTING_TAKEN_OFFLINE", "MANUAL_ARCHIVE", "REMOVED_FROM_JOB_FEED"])), availability: Schema.Literals(["APPLYABLE", "PENDING", "ARCHIVED", "UNAVAILABLE"]) })), next: Schema.NullOr(Schema.String) }) });
export type GetAiApplyPostingsPositiveResponse = Schema.Schema.Type<typeof GetAiApplyPostingsPositiveResponse>;

export const PostAiApplyPostingsPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ id: Schema.String, career_site: Schema.Struct({ id: Schema.String, label: Schema.String }), url: Schema.String, job_code: Schema.NullOr(Schema.String), created_at: Schema.String, updated_at: Schema.String, archived_at: Schema.NullOr(Schema.String), archived_reason: Schema.NullOr(Schema.Literals(["JOB_POSTING_TAKEN_OFFLINE", "MANUAL_ARCHIVE", "REMOVED_FROM_JOB_FEED"])), availability: Schema.Literals(["APPLYABLE", "PENDING", "ARCHIVED", "UNAVAILABLE"]) }) });
export type PostAiApplyPostingsPositiveResponse = Schema.Schema.Type<typeof PostAiApplyPostingsPositiveResponse>;

export const PostAiApplyPostingsRequestBody = Schema.Struct({ url: Schema.String.check(Schema.isPattern(new RegExp("^https?:\\/\\/"))), job_code: Schema.optional(Schema.String), location: Schema.optional(Schema.NullOr(Schema.Struct({ country: Schema.Literals(["AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "YE", "YT", "ZA", "ZM", "ZW"]), postal_code: Schema.optional(Schema.String) }))), career_site_id: Schema.String });
export type PostAiApplyPostingsRequestBody = Schema.Schema.Type<typeof PostAiApplyPostingsRequestBody>;

export const PostAiApplyPostingsPostingIdInquireParameterPostingId = Schema.String;
export type PostAiApplyPostingsPostingIdInquireParameterPostingId = Schema.Schema.Type<typeof PostAiApplyPostingsPostingIdInquireParameterPostingId>;

export const PostAiApplyPostingsPostingIdInquirePositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ application_form: Schema.Array(Schema.Union([Schema.Struct({ block_type: Schema.Literal("QUESTION"), question_id: Schema.String, label: Schema.String, description: Schema.NullOr(Schema.String), required: Schema.Boolean, category: Schema.NullOr(Schema.Literal("EEO")), question_type: Schema.Literals(["TEXT", "NUMBER", "BOOLEAN", "FILE", "DATE", "SINGLE_SELECT", "MULTI_SELECT"]), unified_key: Schema.NullOr(Schema.Literals(["EMAIL", "RESIDENCE_TYPE", "RESIDENCE_FULL_STRING", "RESIDENCE_COUNTRY", "RESIDENCE_CITY", "RESIDENCE_STATE", "RESIDENCE_LINE_1", "RESIDENCE_LINE_2", "RESIDENCE_ZIP_CODE", "APPLICANT_POOL_CONSENT", "TERMS_AND_CONDITIONS", "FIRST_NAME", "LAST_NAME", "FULL_NAME", "GENDER", "EXPECTED_START_DATE", "RESUME", "BIRTH_DATE", "PHONE_NUMBER_TYPE", "FULL_PHONE_NUMBER", "PHONE_COUNTRY_CODE", "PHONE_NATIONAL_NUMBER", "PHONE_EXTENSION"])), options: Schema.NullOr(Schema.Array(Schema.Struct({ id: Schema.String, label: Schema.String, unified_key: Schema.NullOr(Schema.Literals(["HOME", "WORK", "MAILING", "AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "YE", "YT", "ZA", "ZM", "ZW", "MALE", "FEMALE", "NON_BINARY", "NOT_SPECIFIED", "MOBILE", "LANDLINE", "SOURCE_OTHER", "SOURCE_OTHER_JOB_BOARD"])) }))), display_when: Schema.NullOr(Schema.Struct({ question_id: Schema.String, answer_equals: Schema.Union([Schema.String, Schema.Array(Schema.String), Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308)), Schema.Boolean, Schema.Struct({ name: Schema.String, content_type: Schema.String, data: Schema.Unknown })]) })) }), Schema.Struct({ block_type: Schema.Literal("SECTION"), label: Schema.String, children: Schema.Array(Schema.Record(Schema.String, Schema.Unknown)) })])), submission_token: Schema.String }) });
export type PostAiApplyPostingsPostingIdInquirePositiveResponse = Schema.Schema.Type<typeof PostAiApplyPostingsPostingIdInquirePositiveResponse>;

export const PostAiApplyPostingsPostingIdInquireRequestBody = Schema.Struct({  });
export type PostAiApplyPostingsPostingIdInquireRequestBody = Schema.Schema.Type<typeof PostAiApplyPostingsPostingIdInquireRequestBody>;

export const PostAiApplyApplyPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ id: Schema.String, posting_id: Schema.String, status: Schema.String, created_at: Schema.String, updated_at: Schema.String }) });
export type PostAiApplyApplyPositiveResponse = Schema.Schema.Type<typeof PostAiApplyApplyPositiveResponse>;

export const PostAiApplyApplyRequestBody = Schema.Struct({ submission_token: Schema.String, candidate_email: Schema.String.check(Schema.isPattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)), query_params: Schema.optional(Schema.Record(Schema.String, Schema.String)), screening_question_answers: Schema.Array(Schema.Struct({ question_id: Schema.String, answer: Schema.Union([Schema.String, Schema.Array(Schema.String), Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308)), Schema.Boolean, Schema.Struct({ name: Schema.String, content_type: Schema.String, data: Schema.String })]) })), additional_clicks: Schema.optional(Schema.Int.check(Schema.isGreaterThanOrEqualTo(0), Schema.isLessThanOrEqualTo(30))), additional_clicks_scatter_duration: Schema.optional(Schema.Int.check(Schema.isGreaterThanOrEqualTo(1))) });
export type PostAiApplyApplyRequestBody = Schema.Schema.Type<typeof PostAiApplyApplyRequestBody>;

export const GetAiApplyApplicationsParameterCursor = Schema.String;
export type GetAiApplyApplicationsParameterCursor = Schema.Schema.Type<typeof GetAiApplyApplicationsParameterCursor>;

export const GetAiApplyApplicationsParameterPageSize = Schema_default_100_4;
export type GetAiApplyApplicationsParameterPageSize = Schema.Schema.Type<typeof GetAiApplyApplicationsParameterPageSize>;

export const GetAiApplyApplicationsParameterIds = Schema.String;
export type GetAiApplyApplicationsParameterIds = Schema.Schema.Type<typeof GetAiApplyApplicationsParameterIds>;

export const GetAiApplyApplicationsParameterJobPostingIds = Schema.String;
export type GetAiApplyApplicationsParameterJobPostingIds = Schema.Schema.Type<typeof GetAiApplyApplicationsParameterJobPostingIds>;

export const GetAiApplyApplicationsPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ results: Schema.Array(Schema.Struct({ id: Schema.String, job_posting_id: Schema.String, status: Schema.Literals(["SUBMITTED", "DUPLICATE", "PENDING", "FAILED"]), created_at: Schema.String, updated_at: Schema.String })), next: Schema.NullOr(Schema.String) }) });
export type GetAiApplyApplicationsPositiveResponse = Schema.Schema.Type<typeof GetAiApplyApplicationsPositiveResponse>;

export const GetAiApplyUnifiedApiJobsParameterCursor = Schema.String;
export type GetAiApplyUnifiedApiJobsParameterCursor = Schema.Schema.Type<typeof GetAiApplyUnifiedApiJobsParameterCursor>;

export const GetAiApplyUnifiedApiJobsParameterPageSize = Schema_default_5;
export type GetAiApplyUnifiedApiJobsParameterPageSize = Schema.Schema.Type<typeof GetAiApplyUnifiedApiJobsParameterPageSize>;

export const GetAiApplyUnifiedApiJobsParameterIds = Schema.String;
export type GetAiApplyUnifiedApiJobsParameterIds = Schema.Schema.Type<typeof GetAiApplyUnifiedApiJobsParameterIds>;

export const GetAiApplyUnifiedApiJobsParameterRemoteIds = Schema.String;
export type GetAiApplyUnifiedApiJobsParameterRemoteIds = Schema.Schema.Type<typeof GetAiApplyUnifiedApiJobsParameterRemoteIds>;

export const GetAiApplyUnifiedApiJobsParameterJobCodes = Schema.String;
export type GetAiApplyUnifiedApiJobsParameterJobCodes = Schema.Schema.Type<typeof GetAiApplyUnifiedApiJobsParameterJobCodes>;

export const GetAiApplyUnifiedApiJobsParameterCareerSiteIds = Schema.String;
export type GetAiApplyUnifiedApiJobsParameterCareerSiteIds = Schema.Schema.Type<typeof GetAiApplyUnifiedApiJobsParameterCareerSiteIds>;

export const GetAiApplyUnifiedApiJobsPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ results: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.String, name: Schema.NullOr(Schema.String), job_code: Schema.NullOr(Schema.String), description: Schema.NullOr(Schema.String), confidential: Schema.NullOr(Schema.Boolean), weekly_hours: Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), category: Schema.NullOr(Schema.String), department: Schema.NullOr(Schema.String), post_url: Schema.NullOr(Schema.String), experience_level: Schema.NullOr(Schema.String), salary_amount: Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), salary_amount_from: Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), salary_amount_to: Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), salary_currency: Schema.NullOr(Schema.String), custom_fields: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)), integration_fields: Schema.Array(Schema.Record(Schema.String, Schema.Unknown)), opened_at: Schema.NullOr(Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")))), closed_at: Schema.NullOr(Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")))), remote_created_at: Schema.NullOr(Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")))), remote_updated_at: Schema.NullOr(Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")))), contact_id: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)), changed_at: Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$"))), remote_deleted_at: Schema.NullOr(Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")))), remote_url: Schema.NullOr(Schema.String), stages: Schema.Array(Schema.Record(Schema.String, Schema.Unknown)), screening_questions: Schema.NullOr(Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), title: Schema.NullOr(Schema.String), description: Schema.NullOr(Schema.String), format: Schema.optional(Schema.Union([Schema.Struct({ display_type: Schema.optional(Schema.NullOr(Schema.Literals(["SINGLE_LINE", "MULTI_LINE", "EMAIL", "URL"]))), max_length: Schema.optional(Schema.NullOr(Schema.Int)), type: Schema.Literal("TEXT") }), Schema.Struct({ display_type: NullOr_default_FIELD_prop, max: Schema.optional(Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308)))), min: Schema.optional(Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308)))), type: Schema.Literal("NUMBER") }), Schema.Struct({ accepted_mime_types: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))), max_file_size_bytes: Schema.optional(Schema.NullOr(Schema.Int)), type: Schema.Literal("FILE") }), Schema.Struct({ display_type: Schema.optional(Schema.NullOr(Schema.Literals(["DROPDOWN", "RADIO"]))), options: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.optional(Schema.NullOr(Schema.String)), name: Schema.String })), type: Schema.Literal("SINGLE_SELECT") }), Schema.Struct({ type: Schema.Literal("BOOLEAN") }), Schema.Struct({ type: Schema.Literal("DATE") }), Schema.Struct({ options: Schema.Array(Schema.Struct({ id: Schema.String, remote_id: Schema.optional(Schema.NullOr(Schema.String)), name: Schema.String })), type: Schema.Literal("MULTI_SELECT") }), Schema.Struct({ type: Schema.Literal("INFORMATION") }), Schema.Struct({ raw_question: Schema.optional(Schema.Unknown), type: Schema.Literal("UNKNOWN") }), Schema.Null])), category: Schema.NullOr(Schema.Literal("EEO")), index: Schema.optional(Schema.NullOr(Schema.Int)), required: Schema.NullOr(Schema.Boolean), precondition_question_id: Schema.optional(Schema.NullOr(Schema.String)), precondition_options: Union_default_null_prop_20 }))), job_postings: Schema.Array(Schema.Record(Schema.String, Schema.Unknown)), hiring_team: Schema.Array(Schema.Record(Schema.String, Schema.Unknown)), employment_type: Schema.optional(Schema.Union([Schema.Literals(["FULL_TIME", "PART_TIME", "CONTRACT", "SEASONAL", "INTERNSHIP"]), Schema.String, Schema.Null])), status: Schema.optional(Schema.Union([Schema.Literals(["OPEN", "CLOSED", "DRAFT", "ARCHIVED"]), Schema.String, Schema.Null])), visibility: Schema.NullOr(Schema.String), remote_work_status: Schema.NullOr(Schema.String), salary_period: Schema.NullOr(Schema.String), location: Schema.optional(Schema.NullOr(Schema.Struct({ city: Schema.optional(Schema.NullOr(Schema.String)), country: Schema.optional(Schema.NullOr(Schema.String)), raw: Schema.optional(Schema.NullOr(Schema.String)), state: Schema.optional(Schema.NullOr(Schema.String)), street_1: Schema.optional(Schema.NullOr(Schema.String)), street_2: Schema.optional(Schema.NullOr(Schema.String)), zip_code: Schema.optional(Schema.NullOr(Schema.String)) }))) })), next: Schema.NullOr(Schema.String) }) });
export type GetAiApplyUnifiedApiJobsPositiveResponse = Schema.Schema.Type<typeof GetAiApplyUnifiedApiJobsPositiveResponse>;

export const PostAiApplyUnifiedApiJobsJobIdApplicationsParameterJobId = Schema.String;
export type PostAiApplyUnifiedApiJobsJobIdApplicationsParameterJobId = Schema.Schema.Type<typeof PostAiApplyUnifiedApiJobsJobIdApplicationsParameterJobId>;

export const PostAiApplyUnifiedApiJobsJobIdApplicationsPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ id: Schema.String, remote_id: Schema.NullOr(Schema.String), outcome: Schema.NullOr(Schema.Literals(["PENDING", "HIRED", "DECLINED"])), rejection_reason_name: Schema.NullOr(Schema.String), rejected_at: Schema.NullOr(Schema.String), current_stage_id: Schema.NullOr(Schema.String), job_id: Schema.NullOr(Schema.String), candidate_id: Schema.NullOr(Schema.String), screening_question_answers: NullOr_default_value_prop_12, custom_fields: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)), integration_fields: Schema.Array(Schema.Struct({ id: Schema.String, key: Schema.String, type: Schema.Literals(["DEFAULT", "CUSTOM"]), value: Schema.optional(Schema.Null), label: Schema.NullOr(Schema.String) })), remote_url: Schema.NullOr(Schema.String), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), remote_created_at: Schema.NullOr(Schema.String), remote_updated_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)), current_stage: Schema.NullOr(Schema.Struct({ id: Schema.String, name: Schema.NullOr(Schema.String), remote_id: Schema.NullOr(Schema.String), index: Schema.NullOr(Schema.Int) })), job: Schema.NullOr(Schema.Struct({ id: Schema.String, name: Schema.NullOr(Schema.String), remote_id: Schema.String })), candidate: Schema.NullOr(Schema.Struct({ id: Schema.String, remote_id: Schema.String, first_name: Schema.NullOr(Schema.String), last_name: Schema.NullOr(Schema.String), company: Schema.NullOr(Schema.String), title: Schema.NullOr(Schema.String), confidential: Schema.NullOr(Schema.Boolean), source: Schema.NullOr(Schema.String), phone_numbers: NullOr_default_value_prop_10, email_addresses: NullOr_default_value_prop, social_media: NullOr_default_value_prop_11, location: Schema.optional(Schema.NullOr(Schema.Struct({ city: Schema.optional(Schema.NullOr(Schema.String)), country: Schema.optional(Schema.NullOr(Schema.String)), raw: Schema.optional(Schema.NullOr(Schema.String)), state: Schema.optional(Schema.NullOr(Schema.String)), street_1: Schema.optional(Schema.NullOr(Schema.String)), street_2: Schema.optional(Schema.NullOr(Schema.String)), zip_code: Schema.optional(Schema.NullOr(Schema.String)) }))), custom_fields: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)), integration_fields: Schema.Array(Schema.Struct({ id: Schema.String, key: Schema.String, type: Schema.Literals(["DEFAULT", "CUSTOM"]), value: Schema.optional(Schema.Null), label: Schema.NullOr(Schema.String) })), remote_url: Schema.NullOr(Schema.String), remote_created_at: Schema.NullOr(Schema.String), remote_updated_at: Schema.NullOr(Schema.String), remote_data: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)), changed_at: Schema.String, remote_deleted_at: Schema.NullOr(Schema.String), tags: Schema.Array(Schema.Struct({ id: Schema.String, name: Schema.NullOr(Schema.String), remote_id: Schema.NullOr(Schema.String) })) })) }) });
export type PostAiApplyUnifiedApiJobsJobIdApplicationsPositiveResponse = Schema.Schema.Type<typeof PostAiApplyUnifiedApiJobsJobIdApplicationsPositiveResponse>;

export const PostAiApplyUnifiedApiJobsJobIdApplicationsRequestBody = Schema.Struct({ stage_id: Schema.optional(Schema.String), candidate: Schema.Struct({ first_name: Schema.String, last_name: Schema.String, email_address: Schema.String.check(Schema.isPattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)), additional_email_addresses: Schema.optional(Schema.Array(Schema.Struct({ type: Schema.Literals(["PERSONAL", "WORK", "OTHER"]), email_address: Schema.String.check(Schema.isPattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) }))), company: Schema.optional(Schema.String), title: Schema.optional(Schema.String), phone_number: Schema.optional(Schema.String), additional_phone_numbers: Schema.optional(Schema.Array(Schema.Struct({ type: Schema.Literals(["PERSONAL", "WORK", "OTHER"]), phone_number: Schema.String }))), location: Schema.optional(Schema.Struct({ city: Schema.optional(Schema.String), country: Schema.String.check(Schema.isPattern(new RegExp("^[A-Z]{2}$"))), state: Schema.optional(Schema.String), street_1: Schema.optional(Schema.String), zip_code: Schema.optional(Schema.String) })), gender: Schema.optional(Schema.Literals(["MALE", "FEMALE", "OTHER"])), availability_date: Schema.optional(Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), salary_expectations: Schema.optional(Schema.Struct({ period: Schema.Literals(["MONTH", "YEAR"]), amount: Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308)) })), social_links: Array_default_value_prop_13 }), attachments: Array_default_value_prop_14, source: Schema.optional(Schema.Struct({ name: Schema.optional(Schema.String), unified_key: Schema.optional(Schema.String), id: Schema.optional(Schema.String) })), sourced_by: Schema.optional(Schema.Struct({ user_id: Schema.String })), gdpr_consent: Schema.optional(Schema.Struct({ expires_at: Schema.optional(Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), given: Schema.optional(Schema.Boolean) })), remote_fields: Schema.optional(Schema.Struct({ successfactors: Schema.optional(Schema.Struct({ Candidate: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)), JobApplication: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)), copyJobApplicationAttachments: Schema.optional(Schema.Boolean), update_existing_candidate: Schema.optional(Schema.NullOr(Schema.Boolean)) })), personio: Schema.optional(Schema.Struct({ application: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)) })), talentsoft: Schema.optional(Schema.Struct({ applicant: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)), application: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)) })), teamtailor: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)), application: Schema.optional(Schema.Struct({ attributes: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)) })) })), greenhouse: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)), application: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)), post_headers: Schema.optional(Schema.Struct({ "On-Behalf-Of": Schema.optional(Schema.NullOr(Schema.String)) })) })), lever: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)) })), workable: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)), on_behalf_of_user_remote_id: Schema.optional(Schema.String) })), workday: Schema.optional(Schema.Struct({ Candidate_Data: Schema.optional(Schema.Struct({ Name_Detail_Data: Schema.optional(Schema.Struct({ Middle_Name: Schema.optional(Schema.String), Social_Suffix_Reference: Schema.optional(Schema.Struct({ Predefined_Name_Component_ID: Schema.String })) })), Language_Reference: Schema.optional(Schema.Struct({ WID: Schema.String })), Job_Application_Data: Schema.optional(Schema.Struct({ Job_Applied_To_Data: Schema.optional(Schema.Struct({ Global_Personal_Information_Data: Schema.optional(Schema.Struct({ Date_of_Birth: Schema.optional(Schema.String) })) })), Resume_Data: Schema.optional(Schema.Struct({ Education_Data: Schema.optional(Schema.Array(Schema.Struct({ School_Name: Schema.optional(Schema.String), First_Year_Attended: Schema.optional(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), Last_Year_Attended: Schema.optional(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), Field_of_Study_Reference: Schema.optional(Schema.Struct({ WID: Schema.String })), Degree_Reference: Schema.optional(Schema.Struct({ WID: Schema.String })), Grade_Average: Schema.optional(Schema.String) }))), Skill_Data: Schema.optional(Schema.Array(Schema.Struct({ Skill_Name: Schema.optional(Schema.String) }))), Language_Data: Schema.optional(Schema.Array(Schema.Struct({ Language_Reference: Schema.optional(Schema.Struct({ WID: Schema.optional(Schema.String) })), Language: Schema.optional(Schema.Struct({ Native: Schema.optional(Schema.Boolean), Language_Ability: Schema.Array(Schema.Struct({ Language_Ability_Data: Schema.optional(Schema.Struct({ Language_Proficiency_Reference: Schema.optional(Schema.Struct({ WID: Schema.String })), Language_Ability_Type_Reference: Schema.optional(Schema.Struct({ WID: Schema.String })) })) })) })) }))), Experience_Data: Schema.optional(Schema.Array(Schema.Struct({ Company_Name: Schema.String, Title: Schema.String, Location: Schema.optional(Schema.String), Start_Date: Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))), End_Date: Schema.optional(Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), Currently_Work_Here: Schema.optional(Schema.Boolean), Description: Schema.optional(Schema.String) }))) })) })), Contact_Data: Schema.optional(Schema.Struct({ Location_Data: Schema.optional(Schema.Struct({ Address_Line_1: Schema.optional(Schema.String), Address_Line_2: Schema.optional(Schema.String), Region_Subdivision_1: Schema.optional(Schema.String), Country_Region_Reference: Schema.optional(Schema.Struct({ Country_Region_ID: Schema.String })), Country_City_Reference: Schema.optional(Schema.Struct({ WID: Schema.String })) })) })), Worker_Reference: Schema.optional(Schema.Struct({ WID: Schema.optional(Schema.String), Employee_ID: Schema.optional(Schema.String) })) })), Override_Source_Reference_WID: Schema.optional(Schema.String) })), zohorecruit: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)) })), bullhorn: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)), job_submission: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)) })), smartrecruiters: Schema.optional(Schema.Struct({ candidate_with_questions: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)), candidate_without_questions: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)), candidate: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)), consent_decisions: Schema.optional(Schema.Struct({ SINGLE: Schema.optional(Schema.Boolean), SMART_RECRUIT: Schema.optional(Schema.Boolean), SMART_CRM: Schema.optional(Schema.Boolean), SMART_MESSAGE_SMS: Schema.optional(Schema.Boolean), SMART_MESSAGE_WHATSAPP: Schema.optional(Schema.Boolean) })) })), talentadore: Schema.optional(Schema.Struct({ applications: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)) })), guidecom: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)) })), dvinci: Schema.optional(Schema.Struct({ application: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)), candidate: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)) })), hrworks: Schema.optional(Schema.Struct({ jobApplication: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)) })), jobylon: Schema.optional(Schema.Struct({ application: Schema.optional(Schema.Struct({ message: Schema.optional(Schema.String) })) })), avature: Schema.optional(Schema.Struct({ workflow: Schema.optional(Schema.Struct({ step: Schema.optional(Schema.Struct({ id: Schema.Int })) })) })), recruitee: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Struct({ cover_letter_text: Schema.optional(Schema.String) })) })), rexx: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)) })), umantis: Schema.optional(Schema.Struct({ person: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)) })), piloga: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Struct({ street: Schema.optional(Schema.String) })) })), pinpoint: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)) })), covetorest: Schema.optional(Schema.Struct({ candidate: Schema.optional(Schema.Struct({ mandant: Schema.optional(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))) })) })) })), screening_question_answers: Schema.optional(Schema.Array(Schema.Struct({ question_id: Schema.String, answer: Schema.Union([Schema.String, Schema.Boolean, Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308)), Schema.Array(Schema.String), Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))), Schema.Struct({ name: Schema.String, content_type: Schema.optional(Schema.String.check(Schema.isPattern(new RegExp("^[\\w.-]+\\/[\\w.-]+$")))), data_url: Schema.optional(Schema.String), data: Schema.optional(Schema.String) })]) }))), query_params: Schema.optional(Schema.Record(Schema.String, Schema.String)) });
export type PostAiApplyUnifiedApiJobsJobIdApplicationsRequestBody = Schema.Schema.Type<typeof PostAiApplyUnifiedApiJobsJobIdApplicationsRequestBody>;

export const GetAiApplyJobFeedsParameterCursor = Schema.String;
export type GetAiApplyJobFeedsParameterCursor = Schema.Schema.Type<typeof GetAiApplyJobFeedsParameterCursor>;

export const GetAiApplyJobFeedsParameterPageSize = Schema_default_100_4;
export type GetAiApplyJobFeedsParameterPageSize = Schema.Schema.Type<typeof GetAiApplyJobFeedsParameterPageSize>;

export const GetAiApplyJobFeedsParameterIds = Schema.String;
export type GetAiApplyJobFeedsParameterIds = Schema.Schema.Type<typeof GetAiApplyJobFeedsParameterIds>;

export const GetAiApplyJobFeedsPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ results: Schema.Array(Schema.Struct({ id: Schema.String, label: Schema.String })), next: Schema.NullOr(Schema.String) }) });
export type GetAiApplyJobFeedsPositiveResponse = Schema.Schema.Type<typeof GetAiApplyJobFeedsPositiveResponse>;

export const PostAiApplyJobFeedsPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ id: Schema.String, label: Schema.String }) });
export type PostAiApplyJobFeedsPositiveResponse = Schema.Schema.Type<typeof PostAiApplyJobFeedsPositiveResponse>;

export const PostAiApplyJobFeedsRequestBody = Schema.Struct({ label: Schema.String.check(Schema.isMinLength(1)) });
export type PostAiApplyJobFeedsRequestBody = Schema.Schema.Type<typeof PostAiApplyJobFeedsRequestBody>;

export const PostConnectCreateLinkPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ link: Schema.String }) });
export type PostConnectCreateLinkPositiveResponse = Schema.Schema.Type<typeof PostConnectCreateLinkPositiveResponse>;

export const PostConnectCreateLinkRequestBody = Schema.Struct({ end_user_email: Schema.String.check(Schema.isPattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)), end_user_organization_name: Schema.String.check(Schema.isMinLength(1)), end_user_origin_id: Schema.optional(Schema.NullOr(Schema.String.check(Schema.isMinLength(1)))), remote_environment: Schema.optional(Schema.NullOr(Schema.String)), integration_category: Schema_default_HRIS_prop, integration_tool: Schema.optional(Schema.NullOr(Schema.Literals(["workday", "successfactors", "smartrecruiters", "factorial", "oraclerecruiting", "lever", "icims", "cornerstonetalentlink", "recruitee", "recruiterflow", "greenhouse", "greenhousejobboard", "teamtailor", "teamtailorjobboards", "ashby", "talentsoft", "talentsoftcustomer", "concludis", "talention", "piloga", "onlyfy", "personio", "ukgpro", "ukgready", "adpworkforcenow", "taleo", "rexx", "afas", "bamboohr", "bullhorn", "bullhornlogin", "workable", "jobvite", "fountain", "softgarden", "softgardenpartner", "pinpoint", "welcometothejungle", "dvinci", "dvinciadmin", "join", "sagehr", "traffit", "erecruiter", "abacusumantis", "umantis", "jobylon", "taleez", "hrworks", "otys", "zohorecruit", "ceipal", "eploy", "jobdiva", "careerplug", "perview", "eightfold", "paylocity", "paycor", "avature", "apploi", "phenom", "paradox", "heyrecruit", "recruhr", "recruitcrm", "jazzhr", "bite", "brassring", "homerun", "mysolution", "carerix", "hroffice", "talentclue", "inrecruiting", "ubeeo", "connexys", "hr4you", "cornerstoneondemand", "zvooverecruit", "odoo", "comeet", "compleet", "compleetpitcher", "gem", "laura", "covetorest", "coveto", "mercury", "crelate", "manatal", "avionte", "mhmhr", "asymbl", "breezyhr", "flatchr", "dayforce", "digitalrecruiters", "applicantstack", "reachmee", "talentadore", "sandbox", "guidecom", "spott", "loxo", "kula", "workdaycustomreport", "workdaycustomreportsftp", "ukgprowfm", "payfitcustomer", "payfitpartner", "payfit", "employmenthero", "fourth", "kenjo", "heavenhr", "hibob", "cezannehr", "entraid", "azuread", "googleworkspace", "nmbrs", "deel", "remotecom", "iriscascade", "okta", "sagepeople", "humaans", "eurecia", "oraclehcm", "officient", "sesamehr", "charliehr", "abacus", "zohopeople", "gusto", "breathehr", "catalystone", "mirus", "alexishr", "simployer", "peple", "youserve", "hansalog", "lattice", "latticetalent", "hoorayhr", "trinet", "trinetpeo", "namely", "paycom", "insperity", "paychex", "rippling", "sapling", "peoplehr", "lucca", "zelt", "planday", "boondmanager", "haileyhr", "silae", "oysterhr", "kiwihr", "square", "perbilityhelix", "leapsome", "loket", "workforcecom", "peoplefirst", "sdworx", "itrent", "absenceio", "a3innuvanomina", "scim", "datevlauds", "datevhr", "datev", "datevlug", "sympa", "youforce", "nibelis", "peoplexd", "sftp", "sftpfetch", "360learning", "talentlms", "udemy", "linkedinlearning", "moodle"]))), language: NullOr_default_en_prop, scope_config_id: Schema.optional(Schema.NullOr(Schema.String)), enable_filtering: Boolean_default_false_prop, enable_field_mapping: Boolean_default_false_prop, link_type: Schema_default_EMBEDDED_prop });
export type PostConnectCreateLinkRequestBody = Schema.Schema.Type<typeof PostConnectCreateLinkRequestBody>;

export const GetConnectIntegrationByTokenTokenParameterToken = Schema.String;
export type GetConnectIntegrationByTokenTokenParameterToken = Schema.Schema.Type<typeof GetConnectIntegrationByTokenTokenParameterToken>;

export const GetConnectIntegrationByTokenTokenPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ tool: Schema.String, id: Schema.String, end_user_origin_id: Schema.NullOr(Schema.String), end_user_organization_name: Schema.String, end_user_email: Schema.NullOr(Schema.String.check(Schema.isPattern(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$")))), setup_status: Schema.Literals(["INCOMPLETE", "FINAL_SYNC_PENDING", "COMPLETED"]) }) });
export type GetConnectIntegrationByTokenTokenPositiveResponse = Schema.Schema.Type<typeof GetConnectIntegrationByTokenTokenPositiveResponse>;

export const PostConnectActivateIntegrationPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ tool: Schema.String, id: Schema.String, end_user_origin_id: Schema.NullOr(Schema.String), end_user_organization_name: Schema.String, end_user_email: Schema.NullOr(Schema.String.check(Schema.isPattern(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$")))), setup_status: Schema.Literals(["INCOMPLETE", "FINAL_SYNC_PENDING", "COMPLETED"]) }) });
export type PostConnectActivateIntegrationPositiveResponse = Schema.Schema.Type<typeof PostConnectActivateIntegrationPositiveResponse>;

export const PostConnectActivateIntegrationRequestBody = Schema.Struct({ token: Schema.String });
export type PostConnectActivateIntegrationRequestBody = Schema.Schema.Type<typeof PostConnectActivateIntegrationRequestBody>;

export const GetCustomDatevSystemInformationPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ consultant_number: Schema.Number.check(Schema.isGreaterThanOrEqualTo(1000), Schema.isLessThanOrEqualTo(9999999)), client_number: Schema.Number.check(Schema.isGreaterThanOrEqualTo(1), Schema.isLessThanOrEqualTo(99999)), target_system: Schema.Literals(["LODAS", "LuG"]) }) });
export type GetCustomDatevSystemInformationPositiveResponse = Schema.Schema.Type<typeof GetCustomDatevSystemInformationPositiveResponse>;

export const PostCustomDatevPassthroughPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Record(Schema.String, Schema.Unknown), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PostCustomDatevPassthroughPositiveResponse = Schema.Schema.Type<typeof PostCustomDatevPassthroughPositiveResponse>;

export const PostCustomDatevPassthroughRequestBody = Schema.Struct({ file_content: Schema.String.check(Schema.isMinLength(1)), accounting_month: Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))), target_system: Schema.Literals(["LODAS", "LuG"]), file_type: Schema.Literals(["STAMMDATEN", "BEWEGUNGSDATEN"]), file_name: Schema.String });
export type PostCustomDatevPassthroughRequestBody = Schema.Schema.Type<typeof PostCustomDatevPassthroughRequestBody>;

export const GetCustomDatevCheckEauPermissionPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ ready: Schema.Boolean, error: Schema.optional(Schema.String) }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type GetCustomDatevCheckEauPermissionPositiveResponse = Schema.Schema.Type<typeof GetCustomDatevCheckEauPermissionPositiveResponse>;

export const GetCustomDatevEauRequestsEauIdParameterEauId = Schema.String;
export type GetCustomDatevEauRequestsEauIdParameterEauId = Schema.Schema.Type<typeof GetCustomDatevEauRequestsEauIdParameterEauId>;

export const GetCustomDatevEauRequestsEauIdPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ raw: Schema.Struct({ source: Schema.String, start_work_incapacity: Schema.String, collaboration_identifier: Schema.optional(Schema.String), feedbacks_from_health_insurance: Schema.Array(Schema.Struct({ guid: Schema.String, contact_person: Schema.NullOr(Schema.Struct({ gender_contact_person: Schema.optional(Schema.NullOr(Schema.Literals(["M", "F", "X", "D"]))), name: Schema.String, telephone: Schema.String, fax: Schema.NullOr(Schema.String), email: Schema.NullOr(Schema.String), name1_health_insurance: Schema.String, name2_health_insurance: Schema.optional(Schema.NullOr(Schema.String)), name3_health_insurance: Schema.optional(Schema.NullOr(Schema.String)), postal_code: Schema.String, city: Schema.String, street: Schema.NullOr(Schema.String), house_number: Schema.NullOr(Schema.String) })), incapacity_for_work: Schema.Struct({ start_work_incapacity_employer: Schema.String, start_work_incapacity_au: Schema.NullOr(Schema.String), end_work_incapacity_au: Schema.NullOr(Schema.String), actual_end_work_incapacity_au: Schema.optional(Schema.NullOr(Schema.String)), date_of_diagnosis: Schema.NullOr(Schema.String), flag_current_work_incapacity: Schema.NullOr(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), accident_at_work: Schema.Boolean, assignment_accident_insurance_doctor: Schema.Boolean, other_accident: Schema.Boolean, start_hospitalisation: Schema.optional(Schema.NullOr(Schema.String)), end_hospitalisation: Schema.optional(Schema.NullOr(Schema.String)), initial_certificate: Schema.Boolean, automatic_feedback_until: Schema.NullOr(Schema.String) }), error_block_list: Schema.NullOr(Schema.Array(Schema.Struct({ origin: Schema.NullOr(Schema.String), error_number: Schema.NullOr(Schema.String), error_text: Schema.NullOr(Schema.String), error_value: Schema.NullOr(Schema.String) }))) })) }) }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type GetCustomDatevEauRequestsEauIdPositiveResponse = Schema.Schema.Type<typeof GetCustomDatevEauRequestsEauIdPositiveResponse>;

export const GetCustomDatevCheckDocumentPermissionPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Union([Schema.Struct({ ready: Schema.Boolean, documents_granted: Schema.Array(Schema.String) }), Schema.Struct({ ready: Schema.Boolean, error: Schema.String })]), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type GetCustomDatevCheckDocumentPermissionPositiveResponse = Schema.Schema.Type<typeof GetCustomDatevCheckDocumentPermissionPositiveResponse>;

export const GetCustomDatevAvailableDocumentsParameterPeriod = Schema.String;
export type GetCustomDatevAvailableDocumentsParameterPeriod = Schema.Schema.Type<typeof GetCustomDatevAvailableDocumentsParameterPeriod>;

export const GetCustomDatevAvailableDocumentsPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ results: Schema.Array(Schema.Struct({ document_type: Schema.String, available_for_employees: Schema.Array(Schema.Struct({ id: Schema.NullOr(Schema.String), remote_id: Schema.String })), is_company_document: Schema.Boolean })) }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type GetCustomDatevAvailableDocumentsPositiveResponse = Schema.Schema.Type<typeof GetCustomDatevAvailableDocumentsPositiveResponse>;

export const PostCustomDatevDownloadDocumentPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ data_url: Schema.String, file_name: Schema.String, content_type: Schema.String }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PostCustomDatevDownloadDocumentPositiveResponse = Schema.Schema.Type<typeof PostCustomDatevDownloadDocumentPositiveResponse>;

export const PostCustomDatevDownloadDocumentRequestBody = Schema.Struct({ accounting_month: Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))), document_type: Schema.Literals(["AANB", "ABEG", "BUBE", "DAWE", "KBNW", "KOST", "KOTR", "LKTO", "LOBN", "LJOE", "LOJE", "LOJO", "LOPE", "LOPN", "LOPS", "LORE", "LOWE", "LSTA", "LSTB", "LSTE", "PDAT", "PFAN", "PRZA", "SBNW", "SVNW", "WEAN", "ZABR", "ZAKF", "ZAUW"]), employee_id: Schema.NullOr(Schema.String) });
export type PostCustomDatevDownloadDocumentRequestBody = Schema.Schema.Type<typeof PostCustomDatevDownloadDocumentRequestBody>;

export const PostCustomDatevEmployeesEmployeeIdDownloadDocumentParameterEmployeeId = Schema.String;
export type PostCustomDatevEmployeesEmployeeIdDownloadDocumentParameterEmployeeId = Schema.Schema.Type<typeof PostCustomDatevEmployeesEmployeeIdDownloadDocumentParameterEmployeeId> | null;

export const PostCustomDatevEmployeesEmployeeIdDownloadDocumentPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ data_url: Schema.String, file_name: Schema.String, content_type: Schema.String }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PostCustomDatevEmployeesEmployeeIdDownloadDocumentPositiveResponse = Schema.Schema.Type<typeof PostCustomDatevEmployeesEmployeeIdDownloadDocumentPositiveResponse>;

export const PostCustomDatevEmployeesEmployeeIdDownloadDocumentRequestBody = Schema.Struct({ accounting_month: Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))), document_type: Schema.Literals(["AANB", "ABEG", "BUBE", "DAWE", "KBNW", "KOST", "KOTR", "LKTO", "LOBN", "LJOE", "LOJE", "LOJO", "LOPE", "LOPN", "LOPS", "LORE", "LOWE", "LSTA", "LSTB", "LSTE", "PDAT", "PFAN", "PRZA", "SBNW", "SVNW", "WEAN", "ZABR", "ZAKF", "ZAUW"]) });
export type PostCustomDatevEmployeesEmployeeIdDownloadDocumentRequestBody = Schema.Schema.Type<typeof PostCustomDatevEmployeesEmployeeIdDownloadDocumentRequestBody>;

export const PostCustomDatevEmployeesEmployeeIdEauRequestsParameterEmployeeId = Schema.String;
export type PostCustomDatevEmployeesEmployeeIdEauRequestsParameterEmployeeId = Schema.Schema.Type<typeof PostCustomDatevEmployeesEmployeeIdEauRequestsParameterEmployeeId>;

export const PostCustomDatevEmployeesEmployeeIdEauRequestsPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ eau_id: Schema.String }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PostCustomDatevEmployeesEmployeeIdEauRequestsPositiveResponse = Schema.Schema.Type<typeof PostCustomDatevEmployeesEmployeeIdEauRequestsPositiveResponse>;

export const PostCustomDatevEmployeesEmployeeIdEauRequestsRequestBody = Schema.Struct({ start_work_incapacity: Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}$"))), notification: Schema.optional(Schema.Struct({ email: Schema.String.check(Schema.isPattern(new RegExp("^[\\w!#$%&'*+/=?^`{|}~-]+(?:\\.[\\w!#$%&'*+/=?^`{|}~-]+)*@(?:[\\w-]+\\.)+[\\w-]{2,}$"))) })), contact_person: Schema.optional(Schema.Struct({ gender: Schema.Literals(["M", "W", "X", "D"]), name: Schema.String.check(Schema.isMinLength(0), Schema.isMaxLength(30)), telephone: Schema.String.check(Schema.isMinLength(0), Schema.isMaxLength(20), Schema.isPattern(new RegExp("([\\d+])[\\d ()/-]+"))), fax: Schema.String.check(Schema.isMinLength(0), Schema.isMaxLength(20), Schema.isPattern(new RegExp("([\\d+])[\\d ()/-]+"))), email: Schema.String.check(Schema.isMinLength(0), Schema.isMaxLength(70), Schema.isPattern(new RegExp("^(?=.{1,64}@)[\\w-]+(\\.[\\w-]+)*@[^-][\\dA-Za-z-]+(\\.[\\dA-Za-z-]+)*(\\.[A-Za-z]{2,})$"))), company_name: Schema.String.check(Schema.isMinLength(0), Schema.isMaxLength(90)), postal_code: Schema.String.check(Schema.isMinLength(0), Schema.isMaxLength(10), Schema.isPattern(new RegExp("[\\dA-Za-z]*"))), city: Schema.String.check(Schema.isMinLength(0), Schema.isMaxLength(34)), street: Schema.String.check(Schema.isMinLength(0), Schema.isMaxLength(33)), house_number: Schema.String.check(Schema.isMinLength(0), Schema.isMaxLength(9)) })) });
export type PostCustomDatevEmployeesEmployeeIdEauRequestsRequestBody = Schema.Schema.Type<typeof PostCustomDatevEmployeesEmployeeIdEauRequestsRequestBody>;

export const PutCustomDatevEmployeesEmployeeIdPreparePayrollParameterEmployeeId = Schema.String;
export type PutCustomDatevEmployeesEmployeeIdPreparePayrollParameterEmployeeId = Schema.Schema.Type<typeof PutCustomDatevEmployeesEmployeeIdPreparePayrollParameterEmployeeId>;

export const PutCustomDatevEmployeesEmployeeIdPreparePayrollPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Record(Schema.String, Schema.Unknown), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PutCustomDatevEmployeesEmployeeIdPreparePayrollPositiveResponse = Schema.Schema.Type<typeof PutCustomDatevEmployeesEmployeeIdPreparePayrollPositiveResponse>;

export const PutCustomDatevEmployeesEmployeeIdPreparePayrollRequestBody = Schema.Struct({ payroll_run: Schema.Struct({ date: Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))) }), hourly_payments: Schema.Array(Schema.Struct({ hours: Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308)), lohnart: Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308)) })), fixed_payments: Schema.Array(Schema.Struct({ amount: Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308)), lohnart: Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308)) })), custom_lodas: Array_default_value_prop_22 });
export type PutCustomDatevEmployeesEmployeeIdPreparePayrollRequestBody = Schema.Schema.Type<typeof PutCustomDatevEmployeesEmployeeIdPreparePayrollRequestBody>;

export const PutCustomDatevEmployeesEmployeeIdCompensationsParameterEmployeeId = Schema.String;
export type PutCustomDatevEmployeesEmployeeIdCompensationsParameterEmployeeId = Schema.Schema.Type<typeof PutCustomDatevEmployeesEmployeeIdCompensationsParameterEmployeeId>;

export const PutCustomDatevEmployeesEmployeeIdCompensationsPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Record(Schema.String, Schema.Unknown), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PutCustomDatevEmployeesEmployeeIdCompensationsPositiveResponse = Schema.Schema.Type<typeof PutCustomDatevEmployeesEmployeeIdCompensationsPositiveResponse>;

export const PutCustomDatevEmployeesEmployeeIdCompensationsRequestBody = Schema.Struct({ effective_date: Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))), compensations: Schema.Array(Schema.Struct({ amount: Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308)), currency: Schema.Literal("EUR"), period: Schema.Literals(["HOUR", "MONTH"]), lohnart: Schema.optional(Schema.Int.check(Schema.isGreaterThanOrEqualTo(1), Schema.isLessThanOrEqualTo(9999))) })) });
export type PutCustomDatevEmployeesEmployeeIdCompensationsRequestBody = Schema.Schema.Type<typeof PutCustomDatevEmployeesEmployeeIdCompensationsRequestBody>;

export const GetCustomDatevCheckWritePermissionPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ ready: Schema.Boolean, error: Schema.optional(Schema.String) }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type GetCustomDatevCheckWritePermissionPositiveResponse = Schema.Schema.Type<typeof GetCustomDatevCheckWritePermissionPositiveResponse>;

export const GetCustomDatevDataPushesPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ data_pushes: Schema.Array(Schema.Struct({ id: Schema.String, type: Schema.Literals(["GENERAL", "PAYROLL"]), created_at: Schema.String, upload_jobs: Schema.Array(Schema.Struct({ id: Schema.String, file_name: Schema.String, state: Schema.Literals(["FAILED", "UPLOADED", "IMPORTED", "CORRUPTED", "DELETED", "AUTO_DELETED"]), file: Schema.String })) })) }) });
export type GetCustomDatevDataPushesPositiveResponse = Schema.Schema.Type<typeof GetCustomDatevDataPushesPositiveResponse>;

export const PostCustomDatevPushDataGeneralPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ files: Schema.Array(Schema.Struct({ name: Schema.String, content: Schema.String })) }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PostCustomDatevPushDataGeneralPositiveResponse = Schema.Schema.Type<typeof PostCustomDatevPushDataGeneralPositiveResponse>;

export const PostCustomDatevPushDataGeneralRequestBody = Schema.Record(Schema.String, Schema.Unknown);
export type PostCustomDatevPushDataGeneralRequestBody = Schema.Schema.Type<typeof PostCustomDatevPushDataGeneralRequestBody>;

export const PostCustomDatevPushDataPayrollPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ files: Schema.Array(Schema.Struct({ name: Schema.String, content: Schema.String })) }), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PostCustomDatevPushDataPayrollPositiveResponse = Schema.Schema.Type<typeof PostCustomDatevPushDataPayrollPositiveResponse>;

export const PostCustomDatevPushDataPayrollRequestBody = Schema.Struct({ payroll_month: Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))) });
export type PostCustomDatevPushDataPayrollRequestBody = Schema.Schema.Type<typeof PostCustomDatevPushDataPayrollRequestBody>;

export const PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsParameterEmployeeId = Schema.String;
export type PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsParameterEmployeeId = Schema.Schema.Type<typeof PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsParameterEmployeeId>;

export const PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsPositiveResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Record(Schema.String, Schema.Unknown), warnings: Schema.Array(Schema.Struct({ message: Schema.String })) });
export type PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsPositiveResponse = Schema.Schema.Type<typeof PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsPositiveResponse>;

export const PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsRequestBody = Schema.Struct({ supplement_code: Schema.String, effective_date: Schema.String.check(Schema.isPattern(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))), element_amount: Schema.optional(Schema.Number.check(Schema.isGreaterThanOrEqualTo(-1.7976931348623157e+308))), element_string: Schema.optional(Schema.String) });
export type PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsRequestBody = Schema.Schema.Type<typeof PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsRequestBody>;

export const DataChangedWebhookPayload = Schema.Struct({ id: Schema.String, type: Schema.Literal("data-changed"), data: Schema.Struct({ integration_id: Schema.String, integration_tool: Schema.String, integration_category: Schema.Literals(["HRIS", "ATS", "ASSESSMENT", "LMS"]), changed_models: Schema.Array(Schema.Struct({ name: Schema.Literals(["hris_legal_entities", "hris_locations", "hris_employees", "hris_absence_types", "hris_absences", "hris_employments", "hris_teams", "hris_time_off_balances", "hris_timesheets", "hris_employee_document_categories", "hris_performance_reviews", "hris_performance_review_cycles", "hris_staffing_entities", "ats_users", "ats_jobs", "ats_job_postings", "ats_candidates", "ats_application_stages", "ats_applications", "ats_screening_questions", "ats_tags", "ats_interviews", "ats_offers", "ats_rejection_reasons", "ats_roles", "lms_users", "lms_course_providers", "lms_skills", "lms_courses", "lms_course_revisions", "lms_course_progressions", "hris_join_employees_teams", "hris_join_staffing_entities_locations", "hris_join_staffing_entities_legal_entities", "hris_join_staffing_entities_groups", "ats_join_candidates_tags", "ats_join_jobs_application_stages", "ats_join_jobs_screening_questions", "ats_join_user_job_role_assignments", "ats_join_jobs_users", "ats_join_users_roles", "ats_join_interviews_users", "lms_join_revisions_skills"]) })) }) });
export type DataChangedWebhookPayload = Schema.Schema.Type<typeof DataChangedWebhookPayload>;

export const ConnectionFlowFailedWebhookPayload = Schema.Struct({ id: Schema.String, type: Schema.Literal("connection-flow-failed"), data: Schema.Struct({ integration_tool: Schema.String, integration_category: Schema.Literals(["HRIS", "ATS", "ASSESSMENT", "LMS"]), end_user: Schema.Struct({ organization_name: Schema.String, creator_email: Schema.NullOr(Schema.String.check(Schema.isPattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))), origin_id: Schema.NullOr(Schema.String) }), log_url: Schema.String }) });
export type ConnectionFlowFailedWebhookPayload = Schema.Schema.Type<typeof ConnectionFlowFailedWebhookPayload>;

export const IntegrationCreatedWebhookPayload = Schema.Struct({ id: Schema.String, type: Schema.Literal("integration-created"), data: Schema.Struct({ id: Schema.String, tool: Schema.String, category: Schema.Literals(["HRIS", "ATS", "ASSESSMENT", "LMS"]), end_user: Schema.Struct({ organization_name: Schema.String, creator_email: Schema.NullOr(Schema.String.check(Schema.isPattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))), origin_id: Schema.NullOr(Schema.String) }) }) });
export type IntegrationCreatedWebhookPayload = Schema.Schema.Type<typeof IntegrationCreatedWebhookPayload>;

export const IntegrationDeletedWebhookPayload = Schema.Struct({ id: Schema.String, type: Schema.Literal("integration-deleted"), data: Schema.Struct({ id: Schema.String, tool: Schema.String, category: Schema.Literals(["HRIS", "ATS", "ASSESSMENT", "LMS"]), end_user: Schema.Struct({ organization_name: Schema.String, creator_email: Schema.NullOr(Schema.String.check(Schema.isPattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))), origin_id: Schema.NullOr(Schema.String) }), deleted_at: Schema.String }) });
export type IntegrationDeletedWebhookPayload = Schema.Schema.Type<typeof IntegrationDeletedWebhookPayload>;

export const AssessmentOrderReceivedWebhookPayload = Schema.Struct({ id: Schema.String, type: Schema.Literal("assessment:order-received"), data: Schema.Struct({ id: Schema.String, package_id: Schema.String, status: Schema.Literals(["OPEN", "COMPLETED", "CANCELLED", "REJECTED"]), integration_id: Schema.String, candidate: Schema.Struct({ remote_id: Schema.NullOr(Schema.String), email: Schema.String.check(Schema.isPattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)), first_name: Schema.NullOr(Schema.String), last_name: Schema.NullOr(Schema.String), phone: Schema.NullOr(Schema.String) }), application: Schema.Struct({ remote_id: Schema.NullOr(Schema.String) }), job: Schema.Struct({ remote_id: Schema.NullOr(Schema.String), name: Schema.NullOr(Schema.String), job_code: Schema.NullOr(Schema.String), description: Schema.NullOr(Schema.String), location: Schema.NullOr(Schema.Struct({ street_1: Schema.optional(Schema.NullOr(Schema.String)), street_2: Schema.optional(Schema.NullOr(Schema.String)), city: Schema.optional(Schema.NullOr(Schema.String)), state: Schema.optional(Schema.NullOr(Schema.String)), zip_code: Schema.optional(Schema.NullOr(Schema.String)), country: Schema.optional(Schema.NullOr(Schema.String)), raw: Schema.optional(Schema.NullOr(Schema.String)) })), hiring_team: Schema.Array(Schema.Struct({ remote_id: Schema.NullOr(Schema.String), email: Schema.NullOr(Schema.String), first_name: Schema.NullOr(Schema.String), last_name: Schema.NullOr(Schema.String), hiring_team_roles: Schema.Array(Schema.Literals(["RECRUITER", "HIRING_MANAGER"])) })) }) }) });
export type AssessmentOrderReceivedWebhookPayload = Schema.Schema.Type<typeof AssessmentOrderReceivedWebhookPayload>;

export const InlineAssessmentOrderReceivedWebhookPayload = Schema.Struct({ id: Schema.String, type: Schema.Literal("inline-assessment:order-received"), data: Schema.Struct({ id: Schema.String, package_id: Schema.String, status: Schema.Literals(["OPEN", "COMPLETED", "CANCELLED", "REJECTED"]), integration_id: Schema.String, candidate: Schema.Struct({ remote_id: Schema.NullOr(Schema.String), email: Schema.String.check(Schema.isPattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)), first_name: Schema.NullOr(Schema.String), last_name: Schema.NullOr(Schema.String), phone: Schema.NullOr(Schema.String) }), application: Schema.Struct({ remote_id: Schema.NullOr(Schema.String) }), job: Schema.Struct({ remote_id: Schema.NullOr(Schema.String), name: Schema.NullOr(Schema.String), job_code: Schema.NullOr(Schema.String), description: Schema.NullOr(Schema.String), location: Schema.NullOr(Schema.Struct({ street_1: Schema.optional(Schema.NullOr(Schema.String)), street_2: Schema.optional(Schema.NullOr(Schema.String)), city: Schema.optional(Schema.NullOr(Schema.String)), state: Schema.optional(Schema.NullOr(Schema.String)), zip_code: Schema.optional(Schema.NullOr(Schema.String)), country: Schema.optional(Schema.NullOr(Schema.String)), raw: Schema.optional(Schema.NullOr(Schema.String)) })), hiring_team: Schema.Array(Schema.Struct({ remote_id: Schema.NullOr(Schema.String), email: Schema.NullOr(Schema.String), first_name: Schema.NullOr(Schema.String), last_name: Schema.NullOr(Schema.String), hiring_team_roles: Schema.Array(Schema.Literals(["RECRUITER", "HIRING_MANAGER"])) })) }) }) });
export type InlineAssessmentOrderReceivedWebhookPayload = Schema.Schema.Type<typeof InlineAssessmentOrderReceivedWebhookPayload>;

export const IntegrationStateChangedWebhookPayload = Schema.Struct({ id: Schema.String, type: Schema.Literal("integration-state-changed"), data: Schema.Struct({ integration_tool: Schema.String, integration_id: Schema.String, integration_category: Schema.Literals(["HRIS", "ATS", "ASSESSMENT", "LMS"]), end_user: Schema.Struct({ organization_name: Schema.String, creator_email: Schema.NullOr(Schema.String.check(Schema.isPattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))), origin_id: Schema.NullOr(Schema.String) }), qa_status: Schema.Literals(["PENDING", "FAILED", "PASSED"]), setup_status: Schema.Literals(["INCOMPLETE", "FINAL_SYNC_PENDING", "COMPLETED"]), state: Schema.Literals(["ACTIVE", "INVALID", "INACTIVE"]), updated_at: Schema.String }) });
export type IntegrationStateChangedWebhookPayload = Schema.Schema.Type<typeof IntegrationStateChangedWebhookPayload>;

export const AiApplyApplicationStatusUpdatedWebhookPayload = Schema.Struct({ id: Schema.String, type: Schema.Literal("ai-apply-application-status-updated"), data: Schema.Struct({ id: Schema.String, job_posting_id: Schema.String, status: Schema.Literals(["SUBMITTED", "DUPLICATE", "PENDING", "FAILED"]), created_at: Schema.String, updated_at: Schema.String }) });
export type AiApplyApplicationStatusUpdatedWebhookPayload = Schema.Schema.Type<typeof AiApplyApplicationStatusUpdatedWebhookPayload>;

export const AiApplyJobPostingStatusUpdatedWebhookPayload = Schema.Struct({ id: Schema.String, type: Schema.Literal("ai-apply-job-posting-status-updated"), data: Schema.Struct({ id: Schema.String, career_site: Schema.Struct({ id: Schema.String, label: Schema.String }), url: Schema.String, job_code: Schema.NullOr(Schema.String), created_at: Schema.String, updated_at: Schema.String, archived_at: Schema.NullOr(Schema.String), archived_reason: Schema.NullOr(Schema.Literals(["JOB_POSTING_TAKEN_OFFLINE", "MANUAL_ARCHIVE", "REMOVED_FROM_JOB_FEED"])), availability: Schema.Literals(["APPLYABLE", "PENDING", "ARCHIVED", "UNAVAILABLE"]) }) });
export type AiApplyJobPostingStatusUpdatedWebhookPayload = Schema.Schema.Type<typeof AiApplyJobPostingStatusUpdatedWebhookPayload>;

export const SyncFinishedWebhookPayload = Schema.Struct({ id: Schema.String, type: Schema.Literal("sync-finished"), data: Schema.Struct({ sync_id: Schema.String, sync_state: Schema.String, sync_started_at: Schema.String, sync_ended_at: Schema.String, sync_duration_seconds: Schema.Int.check(Schema.isGreaterThanOrEqualTo(0)), integration_id: Schema.String, integration_tool: Schema.String, integration_category: Schema.Literals(["HRIS", "ATS", "ASSESSMENT", "LMS"]), end_user: Schema.Struct({ organization_name: Schema.String, creator_email: Schema.NullOr(Schema.String.check(Schema.isPattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))), origin_id: Schema.NullOr(Schema.String) }), log_url: Schema.String }) });
export type SyncFinishedWebhookPayload = Schema.Schema.Type<typeof SyncFinishedWebhookPayload>;

export const BulkImportJobPostingLocation = Schema.Struct({ country: Schema.String, postal_code: Schema.optional(Schema.String) });
export type BulkImportJobPostingLocation = Schema.Schema.Type<typeof BulkImportJobPostingLocation>;

export const BulkImportJobPostingInput = Schema.Struct({ url: Schema.String, career_site_label: Schema.String, job_code: Schema.optional(Schema.String), location: Schema.optional(Schema.NullOr(BulkImportJobPostingLocation)) });
export type BulkImportJobPostingInput = Schema.Schema.Type<typeof BulkImportJobPostingInput>;

export const BulkImportResponse = Schema.Struct({ status: Schema.Literal("success"), data: Schema.Struct({ created: Schema.Int, processed: Schema.Int, archived: Schema.Int }) });
export type BulkImportResponse = Schema.Schema.Type<typeof BulkImportResponse>;

// </Schemas>

// <Endpoints>
export type get_GetCheckApiKey = typeof get_GetCheckApiKey;
export const get_GetCheckApiKey = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/check-api-key"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: Schema.Never,
  responses: { 200: GetCheckApiKeyPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type post_PostForceSync = typeof post_PostForceSync;
export const post_PostForceSync = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/force-sync"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostForceSyncRequestBody },
  responses: { 200: PostForceSyncPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type post_PostPassthroughToolApi = typeof post_PostPassthroughToolApi;
export const post_PostPassthroughToolApi = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/passthrough/{tool}/{api}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ tool: PostPassthroughToolApiParameterTool, api: PostPassthroughToolApiParameterApi }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostPassthroughToolApiRequestBody },
  responses: { 200: PostPassthroughToolApiPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type delete_DeleteIntegrationsIntegrationId = typeof delete_DeleteIntegrationsIntegrationId;
export const delete_DeleteIntegrationsIntegrationId = {
  method: Schema.Literal("DELETE"),
  path: Schema.Literal("/integrations/{integration_id}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ integration_id: DeleteIntegrationsIntegrationIdParameterIntegrationId }), body: DeleteIntegrationsIntegrationIdRequestBody },
  responses: { 200: DeleteIntegrationsIntegrationIdPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type get_GetIntegrationsIntegrationId = typeof get_GetIntegrationsIntegrationId;
export const get_GetIntegrationsIntegrationId = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/integrations/{integration_id}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ integration_id: GetIntegrationsIntegrationIdParameterIntegrationId }) },
  responses: { 200: GetIntegrationsIntegrationIdPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type put_PutIntegrationsIntegrationIdEnabled = typeof put_PutIntegrationsIntegrationIdEnabled;
export const put_PutIntegrationsIntegrationIdEnabled = {
  method: Schema.Literal("PUT"),
  path: Schema.Literal("/integrations/{integration_id}/enabled"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ integration_id: PutIntegrationsIntegrationIdEnabledParameterIntegrationId }), body: PutIntegrationsIntegrationIdEnabledRequestBody },
  responses: { 200: PutIntegrationsIntegrationIdEnabledPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type post_PostIntegrationsIntegrationIdRelink = typeof post_PostIntegrationsIntegrationIdRelink;
export const post_PostIntegrationsIntegrationIdRelink = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/integrations/{integration_id}/relink"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ integration_id: PostIntegrationsIntegrationIdRelinkParameterIntegrationId }), body: PostIntegrationsIntegrationIdRelinkRequestBody },
  responses: { 200: PostIntegrationsIntegrationIdRelinkPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type post_PostIntegrationsIntegrationIdSetupLink = typeof post_PostIntegrationsIntegrationIdSetupLink;
export const post_PostIntegrationsIntegrationIdSetupLink = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/integrations/{integration_id}/setup-link"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ integration_id: PostIntegrationsIntegrationIdSetupLinkParameterIntegrationId }), body: PostIntegrationsIntegrationIdSetupLinkRequestBody },
  responses: { 200: PostIntegrationsIntegrationIdSetupLinkPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type get_GetIntegrationsIntegrationIdIntegrationFields = typeof get_GetIntegrationsIntegrationIdIntegrationFields;
export const get_GetIntegrationsIntegrationIdIntegrationFields = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/integrations/{integration_id}/integration-fields"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetIntegrationsIntegrationIdIntegrationFieldsParameterCursor), page_size: Schema.optional(GetIntegrationsIntegrationIdIntegrationFieldsParameterPageSize) })), path: Schema.Struct({ integration_id: GetIntegrationsIntegrationIdIntegrationFieldsParameterIntegrationId }) },
  responses: { 200: GetIntegrationsIntegrationIdIntegrationFieldsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type patch_PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldId = typeof patch_PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldId;
export const patch_PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldId = {
  method: Schema.Literal("PATCH"),
  path: Schema.Literal("/integrations/{integration_id}/integration-fields/{integration_field_id}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ integration_id: PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationId, integration_field_id: PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationFieldId }), body: PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdRequestBody },
  responses: { 200: PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type get_GetIntegrationsIntegrationIdCustomFields = typeof get_GetIntegrationsIntegrationIdCustomFields;
export const get_GetIntegrationsIntegrationIdCustomFields = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/integrations/{integration_id}/custom-fields"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetIntegrationsIntegrationIdCustomFieldsParameterCursor), page_size: Schema.optional(GetIntegrationsIntegrationIdCustomFieldsParameterPageSize) })), path: Schema.Struct({ integration_id: GetIntegrationsIntegrationIdCustomFieldsParameterIntegrationId }) },
  responses: { 200: GetIntegrationsIntegrationIdCustomFieldsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type put_PutIntegrationsIntegrationIdCustomFieldsCustomFieldId = typeof put_PutIntegrationsIntegrationIdCustomFieldsCustomFieldId;
export const put_PutIntegrationsIntegrationIdCustomFieldsCustomFieldId = {
  method: Schema.Literal("PUT"),
  path: Schema.Literal("/integrations/{integration_id}/custom-fields/{custom_field_id}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ integration_id: PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterIntegrationId, custom_field_id: PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterCustomFieldId }), body: PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdRequestBody },
  responses: { 200: PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type get_GetToolsCategory = typeof get_GetToolsCategory;
export const get_GetToolsCategory = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/tools/{category}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ category: GetToolsCategoryParameterCategory }) },
  responses: { 200: GetToolsCategoryPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type post_PostHrisProvisioningGroupsGroupIdDiff = typeof post_PostHrisProvisioningGroupsGroupIdDiff;
export const post_PostHrisProvisioningGroupsGroupIdDiff = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/hris/provisioning-groups/{group_id}/diff"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ group_id: PostHrisProvisioningGroupsGroupIdDiffParameterGroupId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostHrisProvisioningGroupsGroupIdDiffRequestBody },
  responses: { 200: PostHrisProvisioningGroupsGroupIdDiffPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type post_PostHrisProvisioningGroupsGroupIdSetupLinks = typeof post_PostHrisProvisioningGroupsGroupIdSetupLinks;
export const post_PostHrisProvisioningGroupsGroupIdSetupLinks = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/hris/provisioning-groups/{group_id}/setup-links"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ group_id: PostHrisProvisioningGroupsGroupIdSetupLinksParameterGroupId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostHrisProvisioningGroupsGroupIdSetupLinksRequestBody },
  responses: { 200: PostHrisProvisioningGroupsGroupIdSetupLinksPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type get_GetHrisEmployees = typeof get_GetHrisEmployees;
export const get_GetHrisEmployees = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/hris/employees"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetHrisEmployeesParameterCursor), page_size: Schema.optional(GetHrisEmployeesParameterPageSize), updated_after: Schema.optional(GetHrisEmployeesParameterUpdatedAfter), include_deleted: Schema.optional(GetHrisEmployeesParameterIncludeDeleted), ignore_unsupported_filters: Schema.optional(GetHrisEmployeesParameterIgnoreUnsupportedFilters), ids: Schema.optional(GetHrisEmployeesParameterIds), remote_ids: Schema.optional(GetHrisEmployeesParameterRemoteIds), employment_status: Schema.optional(GetHrisEmployeesParameterEmploymentStatus), employment_statuses: Schema.optional(GetHrisEmployeesParameterEmploymentStatuses), group_ids: Schema.optional(GetHrisEmployeesParameterGroupIds), legal_entity_ids: Schema.optional(GetHrisEmployeesParameterLegalEntityIds), work_location_ids: Schema.optional(GetHrisEmployeesParameterWorkLocationIds), work_emails: Schema.optional(GetHrisEmployeesParameterWorkEmails), personal_emails: Schema.optional(GetHrisEmployeesParameterPersonalEmails), custom_fields: Schema.optional(GetHrisEmployeesParameterCustomFields) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetHrisEmployeesPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type post_PostHrisEmployees = typeof post_PostHrisEmployees;
export const post_PostHrisEmployees = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/hris/employees"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostHrisEmployeesRequestBody },
  responses: { 200: PostHrisEmployeesPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type get_GetHrisEmployeesForm = typeof get_GetHrisEmployeesForm;
export const get_GetHrisEmployeesForm = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/hris/employees/form"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetHrisEmployeesFormPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type post_PostHrisEmployeesForm = typeof post_PostHrisEmployeesForm;
export const post_PostHrisEmployeesForm = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/hris/employees/form"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostHrisEmployeesFormRequestBody },
  responses: { 200: PostHrisEmployeesFormPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type patch_PatchHrisEmployeesEmployeeId = typeof patch_PatchHrisEmployeesEmployeeId;
export const patch_PatchHrisEmployeesEmployeeId = {
  method: Schema.Literal("PATCH"),
  path: Schema.Literal("/hris/employees/{employee_id}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ employee_id: PatchHrisEmployeesEmployeeIdParameterEmployeeId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PatchHrisEmployeesEmployeeIdRequestBody },
  responses: { 200: PatchHrisEmployeesEmployeeIdPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type post_PostHrisEmployeesEmployeeIdDocuments = typeof post_PostHrisEmployeesEmployeeIdDocuments;
export const post_PostHrisEmployeesEmployeeIdDocuments = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/hris/employees/{employee_id}/documents"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ employee_id: PostHrisEmployeesEmployeeIdDocumentsParameterEmployeeId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostHrisEmployeesEmployeeIdDocumentsRequestBody },
  responses: { 200: PostHrisEmployeesEmployeeIdDocumentsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type get_GetHrisEmployeeDocumentCategories = typeof get_GetHrisEmployeeDocumentCategories;
export const get_GetHrisEmployeeDocumentCategories = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/hris/employee-document-categories"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetHrisEmployeeDocumentCategoriesParameterCursor), page_size: Schema.optional(GetHrisEmployeeDocumentCategoriesParameterPageSize), updated_after: Schema.optional(GetHrisEmployeeDocumentCategoriesParameterUpdatedAfter), include_deleted: Schema.optional(GetHrisEmployeeDocumentCategoriesParameterIncludeDeleted), ignore_unsupported_filters: Schema.optional(GetHrisEmployeeDocumentCategoriesParameterIgnoreUnsupportedFilters), ids: Schema.optional(GetHrisEmployeeDocumentCategoriesParameterIds), remote_ids: Schema.optional(GetHrisEmployeeDocumentCategoriesParameterRemoteIds) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetHrisEmployeeDocumentCategoriesPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type get_GetHrisTeams = typeof get_GetHrisTeams;
export const get_GetHrisTeams = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/hris/teams"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetHrisTeamsParameterCursor), page_size: Schema.optional(GetHrisTeamsParameterPageSize), updated_after: Schema.optional(GetHrisTeamsParameterUpdatedAfter), include_deleted: Schema.optional(GetHrisTeamsParameterIncludeDeleted), ignore_unsupported_filters: Schema.optional(GetHrisTeamsParameterIgnoreUnsupportedFilters), ids: Schema.optional(GetHrisTeamsParameterIds), remote_ids: Schema.optional(GetHrisTeamsParameterRemoteIds) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetHrisTeamsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type get_GetHrisGroups = typeof get_GetHrisGroups;
export const get_GetHrisGroups = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/hris/groups"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetHrisGroupsParameterCursor), page_size: Schema.optional(GetHrisGroupsParameterPageSize), updated_after: Schema.optional(GetHrisGroupsParameterUpdatedAfter), include_deleted: Schema.optional(GetHrisGroupsParameterIncludeDeleted), ignore_unsupported_filters: Schema.optional(GetHrisGroupsParameterIgnoreUnsupportedFilters), ids: Schema.optional(GetHrisGroupsParameterIds), remote_ids: Schema.optional(GetHrisGroupsParameterRemoteIds), types: Schema.optional(GetHrisGroupsParameterTypes), name_contains: Schema.optional(GetHrisGroupsParameterNameContains) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetHrisGroupsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type get_GetHrisEmployments = typeof get_GetHrisEmployments;
export const get_GetHrisEmployments = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/hris/employments"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetHrisEmploymentsParameterCursor), page_size: Schema.optional(GetHrisEmploymentsParameterPageSize), updated_after: Schema.optional(GetHrisEmploymentsParameterUpdatedAfter), include_deleted: Schema.optional(GetHrisEmploymentsParameterIncludeDeleted), ignore_unsupported_filters: Schema.optional(GetHrisEmploymentsParameterIgnoreUnsupportedFilters), ids: Schema.optional(GetHrisEmploymentsParameterIds), remote_ids: Schema.optional(GetHrisEmploymentsParameterRemoteIds) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetHrisEmploymentsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type get_GetHrisLocations = typeof get_GetHrisLocations;
export const get_GetHrisLocations = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/hris/locations"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetHrisLocationsParameterCursor), page_size: Schema.optional(GetHrisLocationsParameterPageSize), updated_after: Schema.optional(GetHrisLocationsParameterUpdatedAfter), include_deleted: Schema.optional(GetHrisLocationsParameterIncludeDeleted), ignore_unsupported_filters: Schema.optional(GetHrisLocationsParameterIgnoreUnsupportedFilters), ids: Schema.optional(GetHrisLocationsParameterIds), remote_ids: Schema.optional(GetHrisLocationsParameterRemoteIds), name_contains: Schema.optional(GetHrisLocationsParameterNameContains) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetHrisLocationsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type get_GetHrisAbsenceTypes = typeof get_GetHrisAbsenceTypes;
export const get_GetHrisAbsenceTypes = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/hris/absence-types"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetHrisAbsenceTypesParameterCursor), page_size: Schema.optional(GetHrisAbsenceTypesParameterPageSize), updated_after: Schema.optional(GetHrisAbsenceTypesParameterUpdatedAfter), include_deleted: Schema.optional(GetHrisAbsenceTypesParameterIncludeDeleted), ignore_unsupported_filters: Schema.optional(GetHrisAbsenceTypesParameterIgnoreUnsupportedFilters), ids: Schema.optional(GetHrisAbsenceTypesParameterIds), remote_ids: Schema.optional(GetHrisAbsenceTypesParameterRemoteIds) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetHrisAbsenceTypesPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type get_GetHrisTimeOffBalances = typeof get_GetHrisTimeOffBalances;
export const get_GetHrisTimeOffBalances = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/hris/time-off-balances"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetHrisTimeOffBalancesParameterCursor), page_size: Schema.optional(GetHrisTimeOffBalancesParameterPageSize), updated_after: Schema.optional(GetHrisTimeOffBalancesParameterUpdatedAfter), include_deleted: Schema.optional(GetHrisTimeOffBalancesParameterIncludeDeleted), ignore_unsupported_filters: Schema.optional(GetHrisTimeOffBalancesParameterIgnoreUnsupportedFilters), ids: Schema.optional(GetHrisTimeOffBalancesParameterIds), remote_ids: Schema.optional(GetHrisTimeOffBalancesParameterRemoteIds), employee_id: Schema.optional(GetHrisTimeOffBalancesParameterEmployeeId) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetHrisTimeOffBalancesPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type get_GetHrisAbsences = typeof get_GetHrisAbsences;
export const get_GetHrisAbsences = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/hris/absences"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetHrisAbsencesParameterCursor), page_size: Schema.optional(GetHrisAbsencesParameterPageSize), updated_after: Schema.optional(GetHrisAbsencesParameterUpdatedAfter), include_deleted: Schema.optional(GetHrisAbsencesParameterIncludeDeleted), ignore_unsupported_filters: Schema.optional(GetHrisAbsencesParameterIgnoreUnsupportedFilters), ids: Schema.optional(GetHrisAbsencesParameterIds), remote_ids: Schema.optional(GetHrisAbsencesParameterRemoteIds), date_from: Schema.optional(GetHrisAbsencesParameterDateFrom), date_until: Schema.optional(GetHrisAbsencesParameterDateUntil), type_ids: Schema.optional(GetHrisAbsencesParameterTypeIds), employee_id: Schema.optional(GetHrisAbsencesParameterEmployeeId), time_from: Schema.optional(GetHrisAbsencesParameterTimeFrom), time_until: Schema.optional(GetHrisAbsencesParameterTimeUntil) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetHrisAbsencesPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type post_PostHrisAbsences = typeof post_PostHrisAbsences;
export const post_PostHrisAbsences = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/hris/absences"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostHrisAbsencesRequestBody },
  responses: { 200: PostHrisAbsencesPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type delete_DeleteHrisAbsencesAbsenceId = typeof delete_DeleteHrisAbsencesAbsenceId;
export const delete_DeleteHrisAbsencesAbsenceId = {
  method: Schema.Literal("DELETE"),
  path: Schema.Literal("/hris/absences/{absence_id}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ absence_id: DeleteHrisAbsencesAbsenceIdParameterAbsenceId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: DeleteHrisAbsencesAbsenceIdRequestBody },
  responses: { 200: DeleteHrisAbsencesAbsenceIdPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type get_GetHrisLegalEntities = typeof get_GetHrisLegalEntities;
export const get_GetHrisLegalEntities = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/hris/legal-entities"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetHrisLegalEntitiesParameterCursor), page_size: Schema.optional(GetHrisLegalEntitiesParameterPageSize), updated_after: Schema.optional(GetHrisLegalEntitiesParameterUpdatedAfter), include_deleted: Schema.optional(GetHrisLegalEntitiesParameterIncludeDeleted), ignore_unsupported_filters: Schema.optional(GetHrisLegalEntitiesParameterIgnoreUnsupportedFilters), ids: Schema.optional(GetHrisLegalEntitiesParameterIds), remote_ids: Schema.optional(GetHrisLegalEntitiesParameterRemoteIds), name_contains: Schema.optional(GetHrisLegalEntitiesParameterNameContains) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetHrisLegalEntitiesPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type get_GetHrisTimesheets = typeof get_GetHrisTimesheets;
export const get_GetHrisTimesheets = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/hris/timesheets"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetHrisTimesheetsParameterCursor), page_size: Schema.optional(GetHrisTimesheetsParameterPageSize), updated_after: Schema.optional(GetHrisTimesheetsParameterUpdatedAfter), include_deleted: Schema.optional(GetHrisTimesheetsParameterIncludeDeleted), ignore_unsupported_filters: Schema.optional(GetHrisTimesheetsParameterIgnoreUnsupportedFilters), ids: Schema.optional(GetHrisTimesheetsParameterIds), remote_ids: Schema.optional(GetHrisTimesheetsParameterRemoteIds), employee_id: Schema.optional(GetHrisTimesheetsParameterEmployeeId), started_before: Schema.optional(GetHrisTimesheetsParameterStartedBefore), started_after: Schema.optional(GetHrisTimesheetsParameterStartedAfter), ended_before: Schema.optional(GetHrisTimesheetsParameterEndedBefore), ended_after: Schema.optional(GetHrisTimesheetsParameterEndedAfter) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetHrisTimesheetsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type get_GetHrisPerformanceReviewCycles = typeof get_GetHrisPerformanceReviewCycles;
export const get_GetHrisPerformanceReviewCycles = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/hris/performance-review-cycles"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetHrisPerformanceReviewCyclesParameterCursor), page_size: Schema.optional(GetHrisPerformanceReviewCyclesParameterPageSize), updated_after: Schema.optional(GetHrisPerformanceReviewCyclesParameterUpdatedAfter), include_deleted: Schema.optional(GetHrisPerformanceReviewCyclesParameterIncludeDeleted), ignore_unsupported_filters: Schema.optional(GetHrisPerformanceReviewCyclesParameterIgnoreUnsupportedFilters), ids: Schema.optional(GetHrisPerformanceReviewCyclesParameterIds), remote_ids: Schema.optional(GetHrisPerformanceReviewCyclesParameterRemoteIds) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetHrisPerformanceReviewCyclesPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type get_GetHrisPerformanceReviews = typeof get_GetHrisPerformanceReviews;
export const get_GetHrisPerformanceReviews = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/hris/performance-reviews"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetHrisPerformanceReviewsParameterCursor), page_size: Schema.optional(GetHrisPerformanceReviewsParameterPageSize), updated_after: Schema.optional(GetHrisPerformanceReviewsParameterUpdatedAfter), include_deleted: Schema.optional(GetHrisPerformanceReviewsParameterIncludeDeleted), ignore_unsupported_filters: Schema.optional(GetHrisPerformanceReviewsParameterIgnoreUnsupportedFilters), ids: Schema.optional(GetHrisPerformanceReviewsParameterIds), remote_ids: Schema.optional(GetHrisPerformanceReviewsParameterRemoteIds), types: Schema.optional(GetHrisPerformanceReviewsParameterTypes), review_cycle_ids: Schema.optional(GetHrisPerformanceReviewsParameterReviewCycleIds), reviewee_ids: Schema.optional(GetHrisPerformanceReviewsParameterRevieweeIds) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetHrisPerformanceReviewsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type get_GetHrisSkills = typeof get_GetHrisSkills;
export const get_GetHrisSkills = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/hris/skills"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ ids: Schema.optional(GetHrisSkillsParameterIds), remote_ids: Schema.optional(GetHrisSkillsParameterRemoteIds), name_contains: Schema.optional(GetHrisSkillsParameterNameContains) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetHrisSkillsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type post_PostHrisSkills = typeof post_PostHrisSkills;
export const post_PostHrisSkills = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/hris/skills"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostHrisSkillsRequestBody },
  responses: { 200: PostHrisSkillsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type patch_PatchHrisSkillsSkillId = typeof patch_PatchHrisSkillsSkillId;
export const patch_PatchHrisSkillsSkillId = {
  method: Schema.Literal("PATCH"),
  path: Schema.Literal("/hris/skills/{skill_id}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ skill_id: PatchHrisSkillsSkillIdParameterSkillId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PatchHrisSkillsSkillIdRequestBody },
  responses: { 200: PatchHrisSkillsSkillIdPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type delete_DeleteHrisSkillsSkillId = typeof delete_DeleteHrisSkillsSkillId;
export const delete_DeleteHrisSkillsSkillId = {
  method: Schema.Literal("DELETE"),
  path: Schema.Literal("/hris/skills/{skill_id}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ skill_id: DeleteHrisSkillsSkillIdParameterSkillId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: DeleteHrisSkillsSkillIdRequestBody },
  responses: { 200: DeleteHrisSkillsSkillIdPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type get_GetHrisEmployeeSkillAssignments = typeof get_GetHrisEmployeeSkillAssignments;
export const get_GetHrisEmployeeSkillAssignments = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/hris/employee-skill-assignments"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ ids: Schema.optional(GetHrisEmployeeSkillAssignmentsParameterIds), remote_ids: Schema.optional(GetHrisEmployeeSkillAssignmentsParameterRemoteIds), employee_ids: Schema.optional(GetHrisEmployeeSkillAssignmentsParameterEmployeeIds), skill_ids: Schema.optional(GetHrisEmployeeSkillAssignmentsParameterSkillIds) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetHrisEmployeeSkillAssignmentsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type post_PostHrisEmployeeSkillAssignments = typeof post_PostHrisEmployeeSkillAssignments;
export const post_PostHrisEmployeeSkillAssignments = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/hris/employee-skill-assignments"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostHrisEmployeeSkillAssignmentsRequestBody },
  responses: { 200: PostHrisEmployeeSkillAssignmentsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type patch_PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentId = typeof patch_PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentId;
export const patch_PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentId = {
  method: Schema.Literal("PATCH"),
  path: Schema.Literal("/hris/employee-skill-assignments/{employee_skill_assignment_id}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ employee_skill_assignment_id: PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody },
  responses: { 200: PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type delete_DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentId = typeof delete_DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentId;
export const delete_DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentId = {
  method: Schema.Literal("DELETE"),
  path: Schema.Literal("/hris/employee-skill-assignments/{employee_skill_assignment_id}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ employee_skill_assignment_id: DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody },
  responses: { 200: DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type get_GetHrisStaffingEntities = typeof get_GetHrisStaffingEntities;
export const get_GetHrisStaffingEntities = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/hris/staffing-entities"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetHrisStaffingEntitiesParameterCursor), page_size: Schema.optional(GetHrisStaffingEntitiesParameterPageSize), updated_after: Schema.optional(GetHrisStaffingEntitiesParameterUpdatedAfter), include_deleted: Schema.optional(GetHrisStaffingEntitiesParameterIncludeDeleted), ignore_unsupported_filters: Schema.optional(GetHrisStaffingEntitiesParameterIgnoreUnsupportedFilters), ids: Schema.optional(GetHrisStaffingEntitiesParameterIds), remote_ids: Schema.optional(GetHrisStaffingEntitiesParameterRemoteIds), model_types: Schema.optional(GetHrisStaffingEntitiesParameterModelTypes), statuses: Schema.optional(GetHrisStaffingEntitiesParameterStatuses) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetHrisStaffingEntitiesPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type get_GetAtsApplications = typeof get_GetAtsApplications;
export const get_GetAtsApplications = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/ats/applications"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetAtsApplicationsParameterCursor), page_size: Schema.optional(GetAtsApplicationsParameterPageSize), updated_after: Schema.optional(GetAtsApplicationsParameterUpdatedAfter), include_deleted: Schema.optional(GetAtsApplicationsParameterIncludeDeleted), ignore_unsupported_filters: Schema.optional(GetAtsApplicationsParameterIgnoreUnsupportedFilters), ids: Schema.optional(GetAtsApplicationsParameterIds), remote_ids: Schema.optional(GetAtsApplicationsParameterRemoteIds), outcome: Schema.optional(GetAtsApplicationsParameterOutcome), outcomes: Schema.optional(GetAtsApplicationsParameterOutcomes), job_ids: Schema.optional(GetAtsApplicationsParameterJobIds), job_remote_ids: Schema.optional(GetAtsApplicationsParameterJobRemoteIds), current_stage_ids: Schema.optional(GetAtsApplicationsParameterCurrentStageIds), remote_created_after: Schema.optional(GetAtsApplicationsParameterRemoteCreatedAfter) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetAtsApplicationsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type put_PutAtsApplicationsApplicationIdStage = typeof put_PutAtsApplicationsApplicationIdStage;
export const put_PutAtsApplicationsApplicationIdStage = {
  method: Schema.Literal("PUT"),
  path: Schema.Literal("/ats/applications/{application_id}/stage"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ application_id: PutAtsApplicationsApplicationIdStageParameterApplicationId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PutAtsApplicationsApplicationIdStageRequestBody },
  responses: { 200: PutAtsApplicationsApplicationIdStagePositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type post_PostAtsApplicationsApplicationIdResultLinks = typeof post_PostAtsApplicationsApplicationIdResultLinks;
export const post_PostAtsApplicationsApplicationIdResultLinks = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/ats/applications/{application_id}/result-links"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ application_id: PostAtsApplicationsApplicationIdResultLinksParameterApplicationId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostAtsApplicationsApplicationIdResultLinksRequestBody },
  responses: { 200: PostAtsApplicationsApplicationIdResultLinksPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type post_PostAtsApplicationsApplicationIdNotes = typeof post_PostAtsApplicationsApplicationIdNotes;
export const post_PostAtsApplicationsApplicationIdNotes = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/ats/applications/{application_id}/notes"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ application_id: PostAtsApplicationsApplicationIdNotesParameterApplicationId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostAtsApplicationsApplicationIdNotesRequestBody },
  responses: { 200: PostAtsApplicationsApplicationIdNotesPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type get_GetAtsApplicationsApplicationIdAttachments = typeof get_GetAtsApplicationsApplicationIdAttachments;
export const get_GetAtsApplicationsApplicationIdAttachments = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/ats/applications/{application_id}/attachments"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ application_id: GetAtsApplicationsApplicationIdAttachmentsParameterApplicationId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetAtsApplicationsApplicationIdAttachmentsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type post_PostAtsApplicationsApplicationIdAttachments = typeof post_PostAtsApplicationsApplicationIdAttachments;
export const post_PostAtsApplicationsApplicationIdAttachments = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/ats/applications/{application_id}/attachments"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ application_id: PostAtsApplicationsApplicationIdAttachmentsParameterApplicationId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostAtsApplicationsApplicationIdAttachmentsRequestBody },
  responses: { 200: PostAtsApplicationsApplicationIdAttachmentsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type post_PostAtsApplicationsApplicationIdReject = typeof post_PostAtsApplicationsApplicationIdReject;
export const post_PostAtsApplicationsApplicationIdReject = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/ats/applications/{application_id}/reject"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ application_id: PostAtsApplicationsApplicationIdRejectParameterApplicationId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostAtsApplicationsApplicationIdRejectRequestBody },
  responses: { 200: PostAtsApplicationsApplicationIdRejectPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type post_PostAtsApplicationsApplicationIdInterviews = typeof post_PostAtsApplicationsApplicationIdInterviews;
export const post_PostAtsApplicationsApplicationIdInterviews = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/ats/applications/{application_id}/interviews"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ application_id: PostAtsApplicationsApplicationIdInterviewsParameterApplicationId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostAtsApplicationsApplicationIdInterviewsRequestBody },
  responses: { 200: PostAtsApplicationsApplicationIdInterviewsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type patch_PatchAtsApplicationsApplicationIdInterviews = typeof patch_PatchAtsApplicationsApplicationIdInterviews;
export const patch_PatchAtsApplicationsApplicationIdInterviews = {
  method: Schema.Literal("PATCH"),
  path: Schema.Literal("/ats/applications/{application_id}/interviews"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ application_id: PatchAtsApplicationsApplicationIdInterviewsParameterApplicationId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PatchAtsApplicationsApplicationIdInterviewsRequestBody },
  responses: { 200: PatchAtsApplicationsApplicationIdInterviewsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type get_GetAtsCandidates = typeof get_GetAtsCandidates;
export const get_GetAtsCandidates = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/ats/candidates"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetAtsCandidatesParameterCursor), page_size: Schema.optional(GetAtsCandidatesParameterPageSize), updated_after: Schema.optional(GetAtsCandidatesParameterUpdatedAfter), include_deleted: Schema.optional(GetAtsCandidatesParameterIncludeDeleted), ignore_unsupported_filters: Schema.optional(GetAtsCandidatesParameterIgnoreUnsupportedFilters), ids: Schema.optional(GetAtsCandidatesParameterIds), remote_ids: Schema.optional(GetAtsCandidatesParameterRemoteIds), email: Schema.optional(GetAtsCandidatesParameterEmail), job_ids: Schema.optional(GetAtsCandidatesParameterJobIds), first_name: Schema.optional(GetAtsCandidatesParameterFirstName), last_name: Schema.optional(GetAtsCandidatesParameterLastName) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetAtsCandidatesPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type post_PostAtsCandidates = typeof post_PostAtsCandidates;
export const post_PostAtsCandidates = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/ats/candidates"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostAtsCandidatesRequestBody },
  responses: { 200: PostAtsCandidatesPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type get_GetAtsCandidatesCandidateIdAttachments = typeof get_GetAtsCandidatesCandidateIdAttachments;
export const get_GetAtsCandidatesCandidateIdAttachments = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/ats/candidates/{candidate_id}/attachments"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ candidate_id: GetAtsCandidatesCandidateIdAttachmentsParameterCandidateId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetAtsCandidatesCandidateIdAttachmentsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type post_PostAtsCandidatesCandidateIdAttachments = typeof post_PostAtsCandidatesCandidateIdAttachments;
export const post_PostAtsCandidatesCandidateIdAttachments = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/ats/candidates/{candidate_id}/attachments"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ candidate_id: PostAtsCandidatesCandidateIdAttachmentsParameterCandidateId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostAtsCandidatesCandidateIdAttachmentsRequestBody },
  responses: { 200: PostAtsCandidatesCandidateIdAttachmentsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type post_PostAtsCandidatesCandidateIdResultLinks = typeof post_PostAtsCandidatesCandidateIdResultLinks;
export const post_PostAtsCandidatesCandidateIdResultLinks = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/ats/candidates/{candidate_id}/result-links"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ candidate_id: PostAtsCandidatesCandidateIdResultLinksParameterCandidateId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostAtsCandidatesCandidateIdResultLinksRequestBody },
  responses: { 200: PostAtsCandidatesCandidateIdResultLinksPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type post_PostAtsCandidatesCandidateIdTags = typeof post_PostAtsCandidatesCandidateIdTags;
export const post_PostAtsCandidatesCandidateIdTags = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/ats/candidates/{candidate_id}/tags"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ candidate_id: PostAtsCandidatesCandidateIdTagsParameterCandidateId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostAtsCandidatesCandidateIdTagsRequestBody },
  responses: { 200: PostAtsCandidatesCandidateIdTagsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type delete_DeleteAtsCandidatesCandidateIdTags = typeof delete_DeleteAtsCandidatesCandidateIdTags;
export const delete_DeleteAtsCandidatesCandidateIdTags = {
  method: Schema.Literal("DELETE"),
  path: Schema.Literal("/ats/candidates/{candidate_id}/tags"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ candidate_id: DeleteAtsCandidatesCandidateIdTagsParameterCandidateId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: DeleteAtsCandidatesCandidateIdTagsRequestBody },
  responses: { 200: DeleteAtsCandidatesCandidateIdTagsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type get_GetAtsTags = typeof get_GetAtsTags;
export const get_GetAtsTags = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/ats/tags"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetAtsTagsParameterCursor), page_size: Schema.optional(GetAtsTagsParameterPageSize), updated_after: Schema.optional(GetAtsTagsParameterUpdatedAfter), include_deleted: Schema.optional(GetAtsTagsParameterIncludeDeleted), ignore_unsupported_filters: Schema.optional(GetAtsTagsParameterIgnoreUnsupportedFilters), ids: Schema.optional(GetAtsTagsParameterIds), remote_ids: Schema.optional(GetAtsTagsParameterRemoteIds) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetAtsTagsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type get_GetAtsApplicationStages = typeof get_GetAtsApplicationStages;
export const get_GetAtsApplicationStages = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/ats/application-stages"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetAtsApplicationStagesParameterCursor), page_size: Schema.optional(GetAtsApplicationStagesParameterPageSize), updated_after: Schema.optional(GetAtsApplicationStagesParameterUpdatedAfter), include_deleted: Schema.optional(GetAtsApplicationStagesParameterIncludeDeleted), ignore_unsupported_filters: Schema.optional(GetAtsApplicationStagesParameterIgnoreUnsupportedFilters), ids: Schema.optional(GetAtsApplicationStagesParameterIds), remote_ids: Schema.optional(GetAtsApplicationStagesParameterRemoteIds) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetAtsApplicationStagesPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type get_GetAtsJobs = typeof get_GetAtsJobs;
export const get_GetAtsJobs = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/ats/jobs"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetAtsJobsParameterCursor), page_size: Schema.optional(GetAtsJobsParameterPageSize), updated_after: Schema.optional(GetAtsJobsParameterUpdatedAfter), include_deleted: Schema.optional(GetAtsJobsParameterIncludeDeleted), ignore_unsupported_filters: Schema.optional(GetAtsJobsParameterIgnoreUnsupportedFilters), ids: Schema.optional(GetAtsJobsParameterIds), remote_ids: Schema.optional(GetAtsJobsParameterRemoteIds), job_codes: Schema.optional(GetAtsJobsParameterJobCodes), post_url: Schema.optional(GetAtsJobsParameterPostUrl), status: Schema.optional(GetAtsJobsParameterStatus), statuses: Schema.optional(GetAtsJobsParameterStatuses), employment_types: Schema.optional(GetAtsJobsParameterEmploymentTypes), visibilities: Schema.optional(GetAtsJobsParameterVisibilities), remote_created_after: Schema.optional(GetAtsJobsParameterRemoteCreatedAfter), name_contains: Schema.optional(GetAtsJobsParameterNameContains) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetAtsJobsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type post_PostAtsJobsJobIdApplications = typeof post_PostAtsJobsJobIdApplications;
export const post_PostAtsJobsJobIdApplications = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/ats/jobs/{job_id}/applications"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ job_id: PostAtsJobsJobIdApplicationsParameterJobId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostAtsJobsJobIdApplicationsRequestBody },
  responses: { 200: PostAtsJobsJobIdApplicationsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type get_GetAtsUsers = typeof get_GetAtsUsers;
export const get_GetAtsUsers = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/ats/users"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetAtsUsersParameterCursor), page_size: Schema.optional(GetAtsUsersParameterPageSize), updated_after: Schema.optional(GetAtsUsersParameterUpdatedAfter), include_deleted: Schema.optional(GetAtsUsersParameterIncludeDeleted), ignore_unsupported_filters: Schema.optional(GetAtsUsersParameterIgnoreUnsupportedFilters), ids: Schema.optional(GetAtsUsersParameterIds), remote_ids: Schema.optional(GetAtsUsersParameterRemoteIds), emails: Schema.optional(GetAtsUsersParameterEmails) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetAtsUsersPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type get_GetAtsRoles = typeof get_GetAtsRoles;
export const get_GetAtsRoles = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/ats/roles"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetAtsRolesParameterCursor), page_size: Schema.optional(GetAtsRolesParameterPageSize), updated_after: Schema.optional(GetAtsRolesParameterUpdatedAfter), include_deleted: Schema.optional(GetAtsRolesParameterIncludeDeleted), ignore_unsupported_filters: Schema.optional(GetAtsRolesParameterIgnoreUnsupportedFilters), ids: Schema.optional(GetAtsRolesParameterIds), remote_ids: Schema.optional(GetAtsRolesParameterRemoteIds), scopes: Schema.optional(GetAtsRolesParameterScopes) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetAtsRolesPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type get_GetAtsOffers = typeof get_GetAtsOffers;
export const get_GetAtsOffers = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/ats/offers"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetAtsOffersParameterCursor), page_size: Schema.optional(GetAtsOffersParameterPageSize), updated_after: Schema.optional(GetAtsOffersParameterUpdatedAfter), include_deleted: Schema.optional(GetAtsOffersParameterIncludeDeleted), ignore_unsupported_filters: Schema.optional(GetAtsOffersParameterIgnoreUnsupportedFilters), ids: Schema.optional(GetAtsOffersParameterIds), remote_ids: Schema.optional(GetAtsOffersParameterRemoteIds) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetAtsOffersPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type get_GetAtsRejectionReasons = typeof get_GetAtsRejectionReasons;
export const get_GetAtsRejectionReasons = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/ats/rejection-reasons"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetAtsRejectionReasonsParameterCursor), page_size: Schema.optional(GetAtsRejectionReasonsParameterPageSize), updated_after: Schema.optional(GetAtsRejectionReasonsParameterUpdatedAfter), include_deleted: Schema.optional(GetAtsRejectionReasonsParameterIncludeDeleted), ignore_unsupported_filters: Schema.optional(GetAtsRejectionReasonsParameterIgnoreUnsupportedFilters), ids: Schema.optional(GetAtsRejectionReasonsParameterIds), remote_ids: Schema.optional(GetAtsRejectionReasonsParameterRemoteIds) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetAtsRejectionReasonsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type get_GetAtsInterviews = typeof get_GetAtsInterviews;
export const get_GetAtsInterviews = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/ats/interviews"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetAtsInterviewsParameterCursor), page_size: Schema.optional(GetAtsInterviewsParameterPageSize), updated_after: Schema.optional(GetAtsInterviewsParameterUpdatedAfter), include_deleted: Schema.optional(GetAtsInterviewsParameterIncludeDeleted), ignore_unsupported_filters: Schema.optional(GetAtsInterviewsParameterIgnoreUnsupportedFilters), ids: Schema.optional(GetAtsInterviewsParameterIds), remote_ids: Schema.optional(GetAtsInterviewsParameterRemoteIds), job_ids: Schema.optional(GetAtsInterviewsParameterJobIds) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetAtsInterviewsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type get_GetAtsActionsAtsCreateCandidate = typeof get_GetAtsActionsAtsCreateCandidate;
export const get_GetAtsActionsAtsCreateCandidate = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/ats/actions/ats_create_candidate"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetAtsActionsAtsCreateCandidatePositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type get_GetAtsActionsAtsCreateApplication = typeof get_GetAtsActionsAtsCreateApplication;
export const get_GetAtsActionsAtsCreateApplication = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/ats/actions/ats_create_application"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetAtsActionsAtsCreateApplicationPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type get_GetAtsActionsAtsAddApplicationAttachment = typeof get_GetAtsActionsAtsAddApplicationAttachment;
export const get_GetAtsActionsAtsAddApplicationAttachment = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/ats/actions/ats_add_application_attachment"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetAtsActionsAtsAddApplicationAttachmentPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type get_GetAtsActionsAtsAddCandidateAttachment = typeof get_GetAtsActionsAtsAddCandidateAttachment;
export const get_GetAtsActionsAtsAddCandidateAttachment = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/ats/actions/ats_add_candidate_attachment"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetAtsActionsAtsAddCandidateAttachmentPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type post_PostAtsImportTrackedApplication = typeof post_PostAtsImportTrackedApplication;
export const post_PostAtsImportTrackedApplication = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/ats/import-tracked-application"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostAtsImportTrackedApplicationRequestBody },
  responses: { 200: PostAtsImportTrackedApplicationPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type post_PostAtsCustomAvionteSyncedJobs = typeof post_PostAtsCustomAvionteSyncedJobs;
export const post_PostAtsCustomAvionteSyncedJobs = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/ats/custom/avionte/synced-jobs"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostAtsCustomAvionteSyncedJobsRequestBody },
  responses: { 200: PostAtsCustomAvionteSyncedJobsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type delete_DeleteAtsCustomAvionteSyncedJobsJobRemoteId = typeof delete_DeleteAtsCustomAvionteSyncedJobsJobRemoteId;
export const delete_DeleteAtsCustomAvionteSyncedJobsJobRemoteId = {
  method: Schema.Literal("DELETE"),
  path: Schema.Literal("/ats/custom/avionte/synced-jobs/{job_remote_id}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ job_remote_id: DeleteAtsCustomAvionteSyncedJobsJobRemoteIdParameterJobRemoteId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: DeleteAtsCustomAvionteSyncedJobsJobRemoteIdRequestBody },
  responses: { 200: DeleteAtsCustomAvionteSyncedJobsJobRemoteIdPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type get_GetAssessmentPackages = typeof get_GetAssessmentPackages;
export const get_GetAssessmentPackages = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/assessment/packages"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetAssessmentPackagesPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type put_PutAssessmentPackages = typeof put_PutAssessmentPackages;
export const put_PutAssessmentPackages = {
  method: Schema.Literal("PUT"),
  path: Schema.Literal("/assessment/packages"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PutAssessmentPackagesRequestBody },
  responses: { 200: PutAssessmentPackagesPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type get_GetAssessmentOrders = typeof get_GetAssessmentOrders;
export const get_GetAssessmentOrders = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/assessment/orders"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetAssessmentOrdersParameterCursor), page_size: Schema.optional(GetAssessmentOrdersParameterPageSize), ids: Schema.optional(GetAssessmentOrdersParameterIds), statuses: Schema.optional(GetAssessmentOrdersParameterStatuses), created_after: Schema.optional(GetAssessmentOrdersParameterCreatedAfter) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetAssessmentOrdersPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type get_GetAssessmentOrdersOpen = typeof get_GetAssessmentOrdersOpen;
export const get_GetAssessmentOrdersOpen = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/assessment/orders/open"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetAssessmentOrdersOpenParameterCursor), page_size: Schema.optional(GetAssessmentOrdersOpenParameterPageSize) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetAssessmentOrdersOpenPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type put_PutAssessmentOrdersAssessmentOrderIdResult = typeof put_PutAssessmentOrdersAssessmentOrderIdResult;
export const put_PutAssessmentOrdersAssessmentOrderIdResult = {
  method: Schema.Literal("PUT"),
  path: Schema.Literal("/assessment/orders/{assessment_order_id}/result"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ assessment_order_id: PutAssessmentOrdersAssessmentOrderIdResultParameterAssessmentOrderId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PutAssessmentOrdersAssessmentOrderIdResultRequestBody },
  responses: { 200: PutAssessmentOrdersAssessmentOrderIdResultPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type get_GetLmsUsers = typeof get_GetLmsUsers;
export const get_GetLmsUsers = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/lms/users"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetLmsUsersParameterCursor), page_size: Schema.optional(GetLmsUsersParameterPageSize), updated_after: Schema.optional(GetLmsUsersParameterUpdatedAfter), include_deleted: Schema.optional(GetLmsUsersParameterIncludeDeleted), ignore_unsupported_filters: Schema.optional(GetLmsUsersParameterIgnoreUnsupportedFilters), ids: Schema.optional(GetLmsUsersParameterIds), remote_ids: Schema.optional(GetLmsUsersParameterRemoteIds), work_emails: Schema.optional(GetLmsUsersParameterWorkEmails) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetLmsUsersPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type get_GetLmsCourseProgressions = typeof get_GetLmsCourseProgressions;
export const get_GetLmsCourseProgressions = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/lms/course-progressions"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetLmsCourseProgressionsParameterCursor), page_size: Schema.optional(GetLmsCourseProgressionsParameterPageSize), updated_after: Schema.optional(GetLmsCourseProgressionsParameterUpdatedAfter), include_deleted: Schema.optional(GetLmsCourseProgressionsParameterIncludeDeleted), ignore_unsupported_filters: Schema.optional(GetLmsCourseProgressionsParameterIgnoreUnsupportedFilters), ids: Schema.optional(GetLmsCourseProgressionsParameterIds), remote_ids: Schema.optional(GetLmsCourseProgressionsParameterRemoteIds), user_ids: Schema.optional(GetLmsCourseProgressionsParameterUserIds), course_ids: Schema.optional(GetLmsCourseProgressionsParameterCourseIds) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetLmsCourseProgressionsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type post_PostLmsCourseProgressions = typeof post_PostLmsCourseProgressions;
export const post_PostLmsCourseProgressions = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/lms/course-progressions"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostLmsCourseProgressionsRequestBody },
  responses: { 200: PostLmsCourseProgressionsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type post_PostLmsCourseProgressionsCourseProgressionIdComplete = typeof post_PostLmsCourseProgressionsCourseProgressionIdComplete;
export const post_PostLmsCourseProgressionsCourseProgressionIdComplete = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/lms/course-progressions/{course_progression_id}/complete"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ course_progression_id: PostLmsCourseProgressionsCourseProgressionIdCompleteParameterCourseProgressionId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostLmsCourseProgressionsCourseProgressionIdCompleteRequestBody },
  responses: { 200: PostLmsCourseProgressionsCourseProgressionIdCompletePositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type get_GetLmsCourses = typeof get_GetLmsCourses;
export const get_GetLmsCourses = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/lms/courses"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetLmsCoursesParameterCursor), page_size: Schema.optional(GetLmsCoursesParameterPageSize), updated_after: Schema.optional(GetLmsCoursesParameterUpdatedAfter), include_deleted: Schema.optional(GetLmsCoursesParameterIncludeDeleted), ignore_unsupported_filters: Schema.optional(GetLmsCoursesParameterIgnoreUnsupportedFilters), ids: Schema.optional(GetLmsCoursesParameterIds), remote_ids: Schema.optional(GetLmsCoursesParameterRemoteIds) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetLmsCoursesPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type post_PostLmsCoursesBulk = typeof post_PostLmsCoursesBulk;
export const post_PostLmsCoursesBulk = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/lms/courses/bulk"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostLmsCoursesBulkRequestBody },
  responses: { 200: PostLmsCoursesBulkPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type get_GetLmsCoursesBulkTaskId = typeof get_GetLmsCoursesBulkTaskId;
export const get_GetLmsCoursesBulkTaskId = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/lms/courses/bulk/{task_id}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ task_id: GetLmsCoursesBulkTaskIdParameterTaskId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetLmsCoursesBulkTaskIdPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type post_PostLmsCoursesCourseIdDeactivate = typeof post_PostLmsCoursesCourseIdDeactivate;
export const post_PostLmsCoursesCourseIdDeactivate = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/lms/courses/{course_id}/deactivate"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ course_id: PostLmsCoursesCourseIdDeactivateParameterCourseId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostLmsCoursesCourseIdDeactivateRequestBody },
  responses: { 200: PostLmsCoursesCourseIdDeactivatePositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type get_GetLmsSkills = typeof get_GetLmsSkills;
export const get_GetLmsSkills = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/lms/skills"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetLmsSkillsParameterCursor), page_size: Schema.optional(GetLmsSkillsParameterPageSize), updated_after: Schema.optional(GetLmsSkillsParameterUpdatedAfter), include_deleted: Schema.optional(GetLmsSkillsParameterIncludeDeleted), ignore_unsupported_filters: Schema.optional(GetLmsSkillsParameterIgnoreUnsupportedFilters), ids: Schema.optional(GetLmsSkillsParameterIds), remote_ids: Schema.optional(GetLmsSkillsParameterRemoteIds) })), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetLmsSkillsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type post_PostAiApplyCareerSites = typeof post_PostAiApplyCareerSites;
export const post_PostAiApplyCareerSites = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/ai-apply/career-sites"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { body: PostAiApplyCareerSitesRequestBody },
  responses: { 200: PostAiApplyCareerSitesPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING", "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type get_GetAiApplyCareerSites = typeof get_GetAiApplyCareerSites;
export const get_GetAiApplyCareerSites = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/ai-apply/career-sites"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetAiApplyCareerSitesParameterCursor), page_size: Schema.optional(GetAiApplyCareerSitesParameterPageSize), ids: Schema.optional(GetAiApplyCareerSitesParameterIds) })) },
  responses: { 200: GetAiApplyCareerSitesPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING", "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type get_GetAiApplyPostings = typeof get_GetAiApplyPostings;
export const get_GetAiApplyPostings = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/ai-apply/postings"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetAiApplyPostingsParameterCursor), page_size: Schema.optional(GetAiApplyPostingsParameterPageSize), ids: Schema.optional(GetAiApplyPostingsParameterIds), career_site_ids: Schema.optional(GetAiApplyPostingsParameterCareerSiteIds), job_codes: Schema.optional(GetAiApplyPostingsParameterJobCodes) })) },
  responses: { 200: GetAiApplyPostingsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING", "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type post_PostAiApplyPostings = typeof post_PostAiApplyPostings;
export const post_PostAiApplyPostings = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/ai-apply/postings"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { body: PostAiApplyPostingsRequestBody },
  responses: { 200: PostAiApplyPostingsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING", "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type post_PostAiApplyPostingsPostingIdInquire = typeof post_PostAiApplyPostingsPostingIdInquire;
export const post_PostAiApplyPostingsPostingIdInquire = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/ai-apply/postings/{posting_id}/inquire"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ posting_id: PostAiApplyPostingsPostingIdInquireParameterPostingId }), body: PostAiApplyPostingsPostingIdInquireRequestBody },
  responses: { 200: PostAiApplyPostingsPostingIdInquirePositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING", "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type post_PostAiApplyApply = typeof post_PostAiApplyApply;
export const post_PostAiApplyApply = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/ai-apply/apply"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { body: PostAiApplyApplyRequestBody },
  responses: { 200: PostAiApplyApplyPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING", "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type get_GetAiApplyApplications = typeof get_GetAiApplyApplications;
export const get_GetAiApplyApplications = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/ai-apply/applications"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetAiApplyApplicationsParameterCursor), page_size: Schema.optional(GetAiApplyApplicationsParameterPageSize), ids: Schema.optional(GetAiApplyApplicationsParameterIds), job_posting_ids: Schema.optional(GetAiApplyApplicationsParameterJobPostingIds) })) },
  responses: { 200: GetAiApplyApplicationsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING", "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type get_GetAiApplyUnifiedApiJobs = typeof get_GetAiApplyUnifiedApiJobs;
export const get_GetAiApplyUnifiedApiJobs = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/ai-apply/unified-api/jobs"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetAiApplyUnifiedApiJobsParameterCursor), page_size: Schema.optional(GetAiApplyUnifiedApiJobsParameterPageSize), ids: Schema.optional(GetAiApplyUnifiedApiJobsParameterIds), remote_ids: Schema.optional(GetAiApplyUnifiedApiJobsParameterRemoteIds), job_codes: Schema.optional(GetAiApplyUnifiedApiJobsParameterJobCodes), career_site_ids: Schema.optional(GetAiApplyUnifiedApiJobsParameterCareerSiteIds) })) },
  responses: { 200: GetAiApplyUnifiedApiJobsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING", "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type post_PostAiApplyUnifiedApiJobsJobIdApplications = typeof post_PostAiApplyUnifiedApiJobsJobIdApplications;
export const post_PostAiApplyUnifiedApiJobsJobIdApplications = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/ai-apply/unified-api/jobs/{job_id}/applications"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ job_id: PostAiApplyUnifiedApiJobsJobIdApplicationsParameterJobId }), body: PostAiApplyUnifiedApiJobsJobIdApplicationsRequestBody },
  responses: { 200: PostAiApplyUnifiedApiJobsJobIdApplicationsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING", "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type get_GetAiApplyJobFeeds = typeof get_GetAiApplyJobFeeds;
export const get_GetAiApplyJobFeeds = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/ai-apply/job-feeds"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.Struct({ cursor: Schema.optional(GetAiApplyJobFeedsParameterCursor), page_size: Schema.optional(GetAiApplyJobFeedsParameterPageSize), ids: Schema.optional(GetAiApplyJobFeedsParameterIds) })) },
  responses: { 200: GetAiApplyJobFeedsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING", "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type post_PostAiApplyJobFeeds = typeof post_PostAiApplyJobFeeds;
export const post_PostAiApplyJobFeeds = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/ai-apply/job-feeds"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { body: PostAiApplyJobFeedsRequestBody },
  responses: { 200: PostAiApplyJobFeedsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING", "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type post_PostConnectCreateLink = typeof post_PostConnectCreateLink;
export const post_PostConnectCreateLink = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/connect/create-link"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { body: PostConnectCreateLinkRequestBody },
  responses: { 200: PostConnectCreateLinkPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type get_GetConnectIntegrationByTokenToken = typeof get_GetConnectIntegrationByTokenToken;
export const get_GetConnectIntegrationByTokenToken = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/connect/integration-by-token/{token}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ token: GetConnectIntegrationByTokenTokenParameterToken }) },
  responses: { 200: GetConnectIntegrationByTokenTokenPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type post_PostConnectActivateIntegration = typeof post_PostConnectActivateIntegration;
export const post_PostConnectActivateIntegration = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/connect/activate-integration"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { body: PostConnectActivateIntegrationRequestBody },
  responses: { 200: PostConnectActivateIntegrationPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type get_GetCustomDatevSystemInformation = typeof get_GetCustomDatevSystemInformation;
export const get_GetCustomDatevSystemInformation = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/custom/datev/system-information"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetCustomDatevSystemInformationPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type post_PostCustomDatevPassthrough = typeof post_PostCustomDatevPassthrough;
export const post_PostCustomDatevPassthrough = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/custom/datev/passthrough"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostCustomDatevPassthroughRequestBody },
  responses: { 200: PostCustomDatevPassthroughPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type get_GetCustomDatevCheckEauPermission = typeof get_GetCustomDatevCheckEauPermission;
export const get_GetCustomDatevCheckEauPermission = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/custom/datev/check-eau-permission"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetCustomDatevCheckEauPermissionPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type get_GetCustomDatevEauRequestsEauId = typeof get_GetCustomDatevEauRequestsEauId;
export const get_GetCustomDatevEauRequestsEauId = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/custom/datev/eau-requests/{eau_id}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ eau_id: GetCustomDatevEauRequestsEauIdParameterEauId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetCustomDatevEauRequestsEauIdPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type get_GetCustomDatevCheckDocumentPermission = typeof get_GetCustomDatevCheckDocumentPermission;
export const get_GetCustomDatevCheckDocumentPermission = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/custom/datev/check-document-permission"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetCustomDatevCheckDocumentPermissionPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type get_GetCustomDatevAvailableDocuments = typeof get_GetCustomDatevAvailableDocuments;
export const get_GetCustomDatevAvailableDocuments = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/custom/datev/available-documents"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.Struct({ period: GetCustomDatevAvailableDocumentsParameterPeriod }), header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetCustomDatevAvailableDocumentsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type post_PostCustomDatevDownloadDocument = typeof post_PostCustomDatevDownloadDocument;
export const post_PostCustomDatevDownloadDocument = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/custom/datev/download-document"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostCustomDatevDownloadDocumentRequestBody },
  responses: { 200: PostCustomDatevDownloadDocumentPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type post_PostCustomDatevEmployeesEmployeeIdDownloadDocument = typeof post_PostCustomDatevEmployeesEmployeeIdDownloadDocument;
export const post_PostCustomDatevEmployeesEmployeeIdDownloadDocument = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/custom/datev/employees/{employee_id}/download-document"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ employee_id: PostCustomDatevEmployeesEmployeeIdDownloadDocumentParameterEmployeeId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostCustomDatevEmployeesEmployeeIdDownloadDocumentRequestBody },
  responses: { 200: PostCustomDatevEmployeesEmployeeIdDownloadDocumentPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type post_PostCustomDatevEmployeesEmployeeIdEauRequests = typeof post_PostCustomDatevEmployeesEmployeeIdEauRequests;
export const post_PostCustomDatevEmployeesEmployeeIdEauRequests = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/custom/datev/employees/{employee_id}/eau-requests"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ employee_id: PostCustomDatevEmployeesEmployeeIdEauRequestsParameterEmployeeId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostCustomDatevEmployeesEmployeeIdEauRequestsRequestBody },
  responses: { 200: PostCustomDatevEmployeesEmployeeIdEauRequestsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type put_PutCustomDatevEmployeesEmployeeIdPreparePayroll = typeof put_PutCustomDatevEmployeesEmployeeIdPreparePayroll;
export const put_PutCustomDatevEmployeesEmployeeIdPreparePayroll = {
  method: Schema.Literal("PUT"),
  path: Schema.Literal("/custom/datev/employees/{employee_id}/prepare-payroll"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ employee_id: PutCustomDatevEmployeesEmployeeIdPreparePayrollParameterEmployeeId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PutCustomDatevEmployeesEmployeeIdPreparePayrollRequestBody },
  responses: { 200: PutCustomDatevEmployeesEmployeeIdPreparePayrollPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type put_PutCustomDatevEmployeesEmployeeIdCompensations = typeof put_PutCustomDatevEmployeesEmployeeIdCompensations;
export const put_PutCustomDatevEmployeesEmployeeIdCompensations = {
  method: Schema.Literal("PUT"),
  path: Schema.Literal("/custom/datev/employees/{employee_id}/compensations"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ employee_id: PutCustomDatevEmployeesEmployeeIdCompensationsParameterEmployeeId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PutCustomDatevEmployeesEmployeeIdCompensationsRequestBody },
  responses: { 200: PutCustomDatevEmployeesEmployeeIdCompensationsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type get_GetCustomDatevCheckWritePermission = typeof get_GetCustomDatevCheckWritePermission;
export const get_GetCustomDatevCheckWritePermission = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/custom/datev/check-write-permission"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetCustomDatevCheckWritePermissionPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type get_GetCustomDatevDataPushes = typeof get_GetCustomDatevDataPushes;
export const get_GetCustomDatevDataPushes = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/custom/datev/data-pushes"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { header: Schema.Struct({ "X-Integration-Id": Schema.String }) },
  responses: { 200: GetCustomDatevDataPushesPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type post_PostCustomDatevPushDataGeneral = typeof post_PostCustomDatevPushDataGeneral;
export const post_PostCustomDatevPushDataGeneral = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/custom/datev/push-data/general"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostCustomDatevPushDataGeneralRequestBody },
  responses: { 200: PostCustomDatevPushDataGeneralPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type post_PostCustomDatevPushDataPayroll = typeof post_PostCustomDatevPushDataPayroll;
export const post_PostCustomDatevPushDataPayroll = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/custom/datev/push-data/payroll"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostCustomDatevPushDataPayrollRequestBody },
  responses: { 200: PostCustomDatevPushDataPayrollPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type post_PostCustomSilaeEmployeesEmployeeIdPayrollSupplements = typeof post_PostCustomSilaeEmployeesEmployeeIdPayrollSupplements;
export const post_PostCustomSilaeEmployeesEmployeeIdPayrollSupplements = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/custom/silae/employees/{employee_id}/payroll-supplements"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ employee_id: PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsParameterEmployeeId }), header: Schema.Struct({ "X-Integration-Id": Schema.String }), body: PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsRequestBody },
  responses: { 200: PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsPositiveResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
};

export type post_PostAiApplyJobFeedsBulkImport = typeof post_PostAiApplyJobFeedsBulkImport;
export const post_PostAiApplyJobFeedsBulkImport = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/ai-apply/job-feeds/{job_feed_id}/bulk-import"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ job_feed_id: Schema.String }), body: Schema.String },
  responses: { 200: BulkImportResponse, default: Schema.Struct({ status: Schema.Literal("error"), error: Schema.Struct({ code: Schema.NullOr(Schema.Literals(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING", "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"])), title: Schema.NullOr(Schema.String), message: Schema.String, log_url: Schema.NullOr(Schema.String) }) }) },
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
export type SecurityRequirements = readonly (readonly string[])[];


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
    

    // <EndpointSecurityRequirements>
    /** OpenAPI security requirements applied when an endpoint has no explicit entry. */
    export const defaultSecurityRequirements = [["ApiKey"]] as SecurityRequirements;
    /** Endpoint-specific security requirements that differ from the default. */
    export const endpointSecurityRequirements = {
    
    } as Partial<{ [M in keyof EndpointByMethod]: Partial<{ [P in keyof EndpointByMethod[M]]: SecurityRequirements }> }>;
    // </EndpointSecurityRequirements>
    

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
      /** OpenAPI security requirements for this operation. Empty means no credentials are required. */
      security?: SecurityRequirements;
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

type OptionalUndefinedKeys<T> = {
  [K in keyof T as undefined extends T[K] ? never : K]: T[K];
} & {
  [K in keyof T as undefined extends T[K] ? K : never]?: Exclude<T[K], undefined>;
};
type InferSchemaValue<T> = T extends { Type: infer O } ? O : T extends object ? { [K in keyof T]: InferSchemaValue<T[K]> } : T;
type InferSchemaInputRaw<T> = T extends { Encoded: infer I } ? I : T extends object ? { [K in keyof T]: InferSchemaInputRaw<T[K]> } : T;
type InferSchemaInput<T> = OptionalUndefinedKeys<InferSchemaInputRaw<T>>;

export type SafeApiResponse<TEndpoint> = TEndpoint extends { responses: infer TResponses }
  ? TResponses extends Record<string, unknown>
    ? TypedApiResponse<InferSchemaValue<TResponses>, TEndpoint extends { responseHeaders: infer THeaders } ? InferSchemaValue<THeaders> : never>
    : never
  : never

export type InferResponseByStatus<TEndpoint, TStatusCode> = Extract<SafeApiResponse<TEndpoint>, { status: TStatusCode }>

/**
 * Success-body payload — InferSchemaValue only on success statuses.
 * Filter with extends {} like the old Extract { data: {} } so unknown bodies (e.g. 304) drop out.
 */
export type InferSuccessData<TEndpoint> = TEndpoint extends { responses: infer TResponses }
  ? {
      [K in keyof TResponses]: K extends string
        ? K extends `${infer TStatusCode extends number}`
          ? TStatusCode extends SuccessStatusCode
            ? InferSchemaValue<TResponses[K]> extends infer D
              ? D extends {}
                ? D
                : never
              : never
            : never
          : never
        : K extends number
          ? K extends SuccessStatusCode
            ? InferSchemaValue<TResponses[K]> extends infer D
              ? D extends {}
                ? D
                : never
              : never
            : never
          : never;
    }[keyof TResponses]
  : never;

type RequiredKeys<T> = {
  [P in keyof T]-?: undefined extends T[P] ? never : P;
}[keyof T];

type MaybeOptionalArg<T> = RequiredKeys<T> extends never ? [config?: T] : [config: T];
type NotNever<T> = [T] extends [never] ? false : true;

/** Call options merged onto inferred endpoint parameters. */
type ApiRequestOptions = {
  overrides?: RequestInit;
  withResponse?: boolean;
  throwOnStatusError?: boolean;
  validate?: ValidateSide;
};

/** Parameter bag for an endpoint + request options. */
export type ApiCallParams<TEndpoint> = TEndpoint extends { parameters: infer UParams }
  ? NotNever<UParams> extends true
    ? InferSchemaInput<UParams> & ApiRequestOptions
    : ApiRequestOptions
  : ApiRequestOptions;

/** Resolve response type from withResponse flag on the call config. */
export type ApiCallResult<TEndpoint, TParams> = TParams extends { withResponse: true }
  ? SafeApiResponse<TEndpoint>
  : InferSuccessData<TEndpoint>;

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
  return Schema.decodeUnknownSync(schema as Schema.Codec<unknown>)(value);
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
    ...params: MaybeOptionalArg<ApiCallParams<TEndpoint>>
  ): Effect.Effect<
    InferSuccessData<TEndpoint>,
    TypedStatusError | HttpClientError,
    never
  > {
    const self = this;
    return Effect.gen(function* () {
      // Implementation reads a loose param bag; call sites stay typed via MaybeOptionalArg<>.
      const requestParams = params[0] as
        | (EndpointParameters & {
            overrides?: RequestInit;
            validate?: ValidateSide;
            withResponse?: boolean;
            throwOnStatusError?: boolean;
          })
        | undefined;
      const withResponse = Boolean(requestParams?.withResponse);
      const throwOnStatusError = requestParams?.throwOnStatusError ?? (withResponse ? false : true);
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
            const onValidate = self.onValidate;
            parametersToSend[key] = yield* Effect.tryPromise({
              try: () =>
                runValidate({
                  side: "input",
                  method: String(method),
                  path: String(path),
                  schema: schema,
                  value: value,
                  onValidate,
                }),
              catch: (cause) => new HttpClientError("validation failed", cause),
            });
          } else {
            parametersToSend[key] = yield* Schema.decodeUnknownEffect(schema as Schema.Codec<unknown>)(value).pipe(
              Effect.mapError((cause) => new HttpClientError("decode failed", cause)),
            );
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
        security: endpointSecurityRequirements[method]?.[path] ?? defaultSecurityRequirements,
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
            const onValidate = self.onValidate;
            data = yield* Effect.tryPromise({
              try: () =>
                runValidate({
                  side: "output",
                  method: String(method),
                  path: String(path),
                  schema: responseSchema,
                  value: data,
                  onValidate,
                }),
              catch: (cause) => new HttpClientError("validation failed", cause),
            });
          } else {
            data = yield* Schema.decodeUnknownEffect(responseSchema as Schema.Codec<unknown>)(data).pipe(
              Effect.mapError((cause) => new HttpClientError("decode failed", cause)),
            );
          }
        }
      }

      const typedResponse = Object.assign(response, {
        data,
        json: () => Promise.resolve(data),
      });

      if ((errorStatusCodes as readonly number[]).includes(response.status)) {
        if (throwOnStatusError) {
          return yield* Effect.fail(
            new TypedStatusError(typedResponse as TypedErrorResponse<unknown, ErrorStatusCode, unknown>),
          );
        }
        return (withResponse ? typedResponse : data) as InferSuccessData<TEndpoint>;
      }

      return (withResponse ? typedResponse : data) as InferSuccessData<TEndpoint>;
    });
  }

  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<ApiCallParams<TEndpoint>>
  ): Effect.Effect<
    InferSuccessData<TEndpoint>,
    TypedStatusError | HttpClientError,
    never
  > {
    return this.request<"get", Path, GetEndpoints[Path]>("get", path, ...params);
  }
post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<ApiCallParams<TEndpoint>>
  ): Effect.Effect<
    InferSuccessData<TEndpoint>,
    TypedStatusError | HttpClientError,
    never
  > {
    return this.request<"post", Path, PostEndpoints[Path]>("post", path, ...params);
  }
delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<ApiCallParams<TEndpoint>>
  ): Effect.Effect<
    InferSuccessData<TEndpoint>,
    TypedStatusError | HttpClientError,
    never
  > {
    return this.request<"delete", Path, DeleteEndpoints[Path]>("delete", path, ...params);
  }
put<Path extends keyof PutEndpoints, TEndpoint extends PutEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<ApiCallParams<TEndpoint>>
  ): Effect.Effect<
    InferSuccessData<TEndpoint>,
    TypedStatusError | HttpClientError,
    never
  > {
    return this.request<"put", Path, PutEndpoints[Path]>("put", path, ...params);
  }
patch<Path extends keyof PatchEndpoints, TEndpoint extends PatchEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<ApiCallParams<TEndpoint>>
  ): Effect.Effect<
    InferSuccessData<TEndpoint>,
    TypedStatusError | HttpClientError,
    never
  > {
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

  