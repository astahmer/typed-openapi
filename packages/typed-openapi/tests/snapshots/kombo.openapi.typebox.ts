
  import { Type, type Static } from "@sinclair/typebox";
import { Value } from "@sinclair/typebox/value";

// <Schemas>
export type GetCheckApiKeyPositiveResponse = Static<typeof GetCheckApiKeyPositiveResponse>;
export const GetCheckApiKeyPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ environment_id: Type.String(), customer_id: Type.String() }) });

export type PostForceSyncPositiveResponse = Static<typeof PostForceSyncPositiveResponse>;
export const PostForceSyncPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ already_queued: Type.Boolean(), sync_id: Type.String(), type: Type.Union([Type.Literal("FULL"), Type.Literal("DELTA")]) }) });

export type PostForceSyncRequestBody = Static<typeof PostForceSyncRequestBody>;
export const PostForceSyncRequestBody = Type.Partial(Type.Object({ type: Type.Union([Type.Literal("FULL"), Type.Literal("DELTA")]) }));

export type PostPassthroughToolApiParameterTool = Static<typeof PostPassthroughToolApiParameterTool>;
export const PostPassthroughToolApiParameterTool = Type.String();

export type PostPassthroughToolApiParameterApi = Static<typeof PostPassthroughToolApiParameterApi>;
export const PostPassthroughToolApiParameterApi = Type.String();

export type PostPassthroughToolApiPositiveResponse = Static<typeof PostPassthroughToolApiPositiveResponse>;
export const PostPassthroughToolApiPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ url: Type.String({ format: "uri" }), status: Type.Integer(), headers: Type.Record(Type.String(), Type.Union([Type.String(), Type.Array(Type.String())])), data: Type.Optional(Type.Unknown()) }), warnings: Type.Array(Type.Object({ message: Type.String() })) });

export type PostPassthroughToolApiRequestBody = Static<typeof PostPassthroughToolApiRequestBody>;
export const PostPassthroughToolApiRequestBody = Type.Object({ method: Type.Union([Type.Literal("GET"), Type.Literal("POST"), Type.Literal("DELETE"), Type.Literal("PUT"), Type.Literal("PATCH")]), path: Type.String(), headers: Type.Optional(Type.Record(Type.String(), Type.String())), params: Type.Optional(Type.Record(Type.String(), Type.String())), data: Type.Optional(Type.Unknown()), response_as_base64: Type.Optional(Type.Boolean()), multipart_form_data: Type.Optional(Type.Array(Type.Object({ name: Type.String(), value: Type.Union([Type.String(), Type.Object({ name: Type.String(), content_type: Type.Optional(Type.String({ pattern: "^[\\w.-]+\\/[\\w.-]+$" })), data_url: Type.Optional(Type.String({ format: "uri" })), data: Type.Optional(Type.String()) })]) }))), api_options: Type.Optional(Type.Record(Type.String(), Type.String())) });

export type DeleteIntegrationsIntegrationIdParameterIntegrationId = Static<typeof DeleteIntegrationsIntegrationIdParameterIntegrationId>;
export const DeleteIntegrationsIntegrationIdParameterIntegrationId = Type.String();

export type DeleteIntegrationsIntegrationIdPositiveResponse = Static<typeof DeleteIntegrationsIntegrationIdPositiveResponse>;
export const DeleteIntegrationsIntegrationIdPositiveResponse = Type.Object({ status: Type.String(), data: Type.Record(Type.String(), Type.Unknown()) });

export type DeleteIntegrationsIntegrationIdRequestBody = Static<typeof DeleteIntegrationsIntegrationIdRequestBody>;
export const DeleteIntegrationsIntegrationIdRequestBody = Type.Partial(Type.Object({  }));

export type GetIntegrationsIntegrationIdParameterIntegrationId = Static<typeof GetIntegrationsIntegrationIdParameterIntegrationId>;
export const GetIntegrationsIntegrationIdParameterIntegrationId = Type.String();

export type GetIntegrationsIntegrationIdPositiveResponse = Static<typeof GetIntegrationsIntegrationIdPositiveResponse>;
export const GetIntegrationsIntegrationIdPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ id: Type.String(), tool: Type.Object({ id: Type.String(), label: Type.String(), internal_label: Type.Union([Type.String(), Type.Null()]), logo_url: Type.String({ format: "uri" }), icon_url: Type.String({ format: "uri" }) }), category: Type.Union([Type.Literal("HRIS"), Type.Literal("ATS"), Type.Literal("ASSESSMENT"), Type.Literal("LMS")]), status: Type.Union([Type.Literal("ACTIVE"), Type.Literal("INVALID"), Type.Literal("INACTIVE")]), setup_status: Type.Union([Type.Literal("INCOMPLETE"), Type.Literal("FINAL_SYNC_PENDING"), Type.Literal("COMPLETED")]), end_user: Type.Object({ organization_name: Type.String(), creator_email: Type.Union([Type.String({ pattern: "^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$" }), Type.Null()]), origin_id: Type.Union([Type.String(), Type.Null()]) }), scope_config: Type.Object({ id: Type.String(), name: Type.Union([Type.String(), Type.Null()]) }), data_expired_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), created_at: Type.String({ format: "date-time" }), beta: Type.Boolean(), read_models: Type.Array(Type.Object({ id: Type.String(), label: Type.String(), is_available: Type.Boolean(), coverage_status: Type.Union([Type.Literal("SUPPORTED"), Type.Literal("UNSUPPORTED"), Type.Literal("NOT_IMPLEMENTED"), Type.Literal("UNKNOWN")]), scope_config_setting: Type.Union([Type.Literal("ENABLED"), Type.Literal("DISABLED"), Type.Literal("OPTIONAL")]), opted_out_by_customer: Type.Boolean(), fields: Type.Array(Type.Object({ id: Type.String(), is_available: Type.Boolean(), coverage_status: Type.Union([Type.Literal("SUPPORTED"), Type.Literal("UNSUPPORTED"), Type.Literal("NOT_IMPLEMENTED"), Type.Literal("UNKNOWN")]), scope_config_setting: Type.Union([Type.Literal("ENABLED"), Type.Literal("DISABLED"), Type.Literal("OPTIONAL")]), opted_out_by_customer: Type.Boolean() })) })), write_actions: Type.Array(Type.Object({ id: Type.String(), label: Type.String(), is_available: Type.Boolean(), coverage_status: Type.Union([Type.Literal("SUPPORTED"), Type.Literal("UNSUPPORTED"), Type.Literal("NOT_IMPLEMENTED"), Type.Literal("UNKNOWN")]), scope_config_setting: Type.Union([Type.Literal("ENABLED"), Type.Literal("DISABLED"), Type.Literal("OPTIONAL")]), opted_out_by_customer: Type.Boolean(), fields: Type.Array(Type.Object({ id: Type.String(), is_available: Type.Boolean(), coverage_status: Type.Union([Type.Literal("SUPPORTED"), Type.Literal("UNSUPPORTED"), Type.Literal("NOT_IMPLEMENTED"), Type.Literal("UNKNOWN")]) })) })) }) });

export type PutIntegrationsIntegrationIdEnabledParameterIntegrationId = Static<typeof PutIntegrationsIntegrationIdEnabledParameterIntegrationId>;
export const PutIntegrationsIntegrationIdEnabledParameterIntegrationId = Type.String();

export type PutIntegrationsIntegrationIdEnabledPositiveResponse = Static<typeof PutIntegrationsIntegrationIdEnabledPositiveResponse>;
export const PutIntegrationsIntegrationIdEnabledPositiveResponse = Type.Object({ status: Type.String(), data: Type.Record(Type.String(), Type.Unknown()) });

export type PutIntegrationsIntegrationIdEnabledRequestBody = Static<typeof PutIntegrationsIntegrationIdEnabledRequestBody>;
export const PutIntegrationsIntegrationIdEnabledRequestBody = Type.Object({ value: Type.Boolean() });

export type PostIntegrationsIntegrationIdRelinkParameterIntegrationId = Static<typeof PostIntegrationsIntegrationIdRelinkParameterIntegrationId>;
export const PostIntegrationsIntegrationIdRelinkParameterIntegrationId = Type.String();

export type PostIntegrationsIntegrationIdRelinkPositiveResponse = Static<typeof PostIntegrationsIntegrationIdRelinkPositiveResponse>;
export const PostIntegrationsIntegrationIdRelinkPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ link: Type.String({ format: "uri" }) }) });

export type PostIntegrationsIntegrationIdRelinkRequestBody = Static<typeof PostIntegrationsIntegrationIdRelinkRequestBody>;
export const PostIntegrationsIntegrationIdRelinkRequestBody = Type.Partial(Type.Object({ language: Type.Union([Type.Union([Type.Literal("en"), Type.Literal("de"), Type.Literal("fr"), Type.Literal("it"), Type.Literal("es")]), Type.Null()]), scope_config_id: Type.Union([Type.String(), Type.Null()]), link_type: Type.Union([Type.Literal("EMBEDDED"), Type.Literal("MAGIC_LINK")]) }));

export type PostIntegrationsIntegrationIdSetupLinkParameterIntegrationId = Static<typeof PostIntegrationsIntegrationIdSetupLinkParameterIntegrationId>;
export const PostIntegrationsIntegrationIdSetupLinkParameterIntegrationId = Type.String();

export type PostIntegrationsIntegrationIdSetupLinkPositiveResponse = Static<typeof PostIntegrationsIntegrationIdSetupLinkPositiveResponse>;
export const PostIntegrationsIntegrationIdSetupLinkPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ link: Type.String({ format: "uri" }) }) });

export type PostIntegrationsIntegrationIdSetupLinkRequestBody = Static<typeof PostIntegrationsIntegrationIdSetupLinkRequestBody>;
export const PostIntegrationsIntegrationIdSetupLinkRequestBody = Type.Object({ language: Type.Optional(Type.Union([Type.Union([Type.Literal("en"), Type.Literal("de"), Type.Literal("fr"), Type.Literal("it"), Type.Literal("es")]), Type.Null()])), link_type: Type.Union([Type.Literal("EMBEDDED"), Type.Literal("MAGIC_LINK")]) });

export type GetIntegrationsIntegrationIdIntegrationFieldsParameterIntegrationId = Static<typeof GetIntegrationsIntegrationIdIntegrationFieldsParameterIntegrationId>;
export const GetIntegrationsIntegrationIdIntegrationFieldsParameterIntegrationId = Type.String();

export type GetIntegrationsIntegrationIdIntegrationFieldsParameterCursor = Static<typeof GetIntegrationsIntegrationIdIntegrationFieldsParameterCursor>;
export const GetIntegrationsIntegrationIdIntegrationFieldsParameterCursor = Type.String();

export type GetIntegrationsIntegrationIdIntegrationFieldsParameterPageSize = Static<typeof GetIntegrationsIntegrationIdIntegrationFieldsParameterPageSize>;
export const GetIntegrationsIntegrationIdIntegrationFieldsParameterPageSize = Type.Integer({ minimum: 1, maximum: 2000 });

export type GetIntegrationsIntegrationIdIntegrationFieldsPositiveResponse = Static<typeof GetIntegrationsIntegrationIdIntegrationFieldsPositiveResponse>;
export const GetIntegrationsIntegrationIdIntegrationFieldsPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ results: Type.Array(Type.Object({ id: Type.String(), key: Type.String(), model: Type.String(), type: Type.Union([Type.Literal("DEFAULT"), Type.Literal("CUSTOM")]), label: Type.Union([Type.String(), Type.Null()]), is_passthrough_enabled: Type.Boolean(), is_writable: Type.Boolean() })), next_cursor: Type.Union([Type.String(), Type.Null()]), next: Type.Union([Type.String(), Type.Null()]) }) });

export type PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationId = Static<typeof PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationId>;
export const PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationId = Type.String();

export type PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationFieldId = Static<typeof PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationFieldId>;
export const PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationFieldId = Type.String();

export type PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdPositiveResponse = Static<typeof PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdPositiveResponse>;
export const PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ id: Type.String(), key: Type.String(), model: Type.String(), type: Type.Union([Type.Literal("DEFAULT"), Type.Literal("CUSTOM")]), label: Type.Union([Type.String(), Type.Null()]), is_passthrough_enabled: Type.Boolean(), is_writable: Type.Boolean() }) });

export type PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdRequestBody = Static<typeof PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdRequestBody>;
export const PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdRequestBody = Type.Object({ enable_passthrough: Type.Union([Type.Boolean(), Type.Null()]) });

export type GetIntegrationsIntegrationIdCustomFieldsParameterIntegrationId = Static<typeof GetIntegrationsIntegrationIdCustomFieldsParameterIntegrationId>;
export const GetIntegrationsIntegrationIdCustomFieldsParameterIntegrationId = Type.String();

export type GetIntegrationsIntegrationIdCustomFieldsParameterCursor = Static<typeof GetIntegrationsIntegrationIdCustomFieldsParameterCursor>;
export const GetIntegrationsIntegrationIdCustomFieldsParameterCursor = Type.String();

export type GetIntegrationsIntegrationIdCustomFieldsParameterPageSize = Static<typeof GetIntegrationsIntegrationIdCustomFieldsParameterPageSize>;
export const GetIntegrationsIntegrationIdCustomFieldsParameterPageSize = Type.Integer({ minimum: 1, maximum: 250 });

export type GetIntegrationsIntegrationIdCustomFieldsPositiveResponse = Static<typeof GetIntegrationsIntegrationIdCustomFieldsPositiveResponse>;
export const GetIntegrationsIntegrationIdCustomFieldsPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ results: Type.Array(Type.Object({ id: Type.String(), key: Type.String(), integration_field: Type.Union([Type.Object({ id: Type.String(), key: Type.String(), type: Type.Union([Type.Literal("DEFAULT"), Type.Literal("CUSTOM")]), label: Type.Union([Type.String(), Type.Null()]) }), Type.Null()]), model: Type.String(), label: Type.Union([Type.String(), Type.Null()]), description: Type.Union([Type.String(), Type.Null()]) })), next_cursor: Type.Union([Type.String(), Type.Null()]), next: Type.Union([Type.String(), Type.Null()]) }) });

export type PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterIntegrationId = Static<typeof PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterIntegrationId>;
export const PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterIntegrationId = Type.String();

export type PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterCustomFieldId = Static<typeof PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterCustomFieldId>;
export const PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterCustomFieldId = Type.String();

export type PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdPositiveResponse = Static<typeof PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdPositiveResponse>;
export const PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ id: Type.String(), key: Type.String(), integration_field: Type.Union([Type.Object({ id: Type.String(), key: Type.String(), type: Type.Union([Type.Literal("DEFAULT"), Type.Literal("CUSTOM")]), label: Type.Union([Type.String(), Type.Null()]) }), Type.Null()]), model: Type.String(), label: Type.Union([Type.String(), Type.Null()]), description: Type.Union([Type.String(), Type.Null()]) }) });

export type PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdRequestBody = Static<typeof PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdRequestBody>;
export const PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdRequestBody = Type.Object({ integration_field_id: Type.Union([Type.String(), Type.Null()]) });

export type GetToolsCategoryParameterCategory = Static<typeof GetToolsCategoryParameterCategory>;
export const GetToolsCategoryParameterCategory = Type.Union([Type.Literal("hris"), Type.Literal("ats"), Type.Literal("assessment"), Type.Literal("lms")]);

export type GetToolsCategoryPositiveResponse = Static<typeof GetToolsCategoryPositiveResponse>;
export const GetToolsCategoryPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ tools: Type.Array(Type.Object({ id: Type.String(), label: Type.String(), internal_label: Type.Union([Type.String(), Type.Null()]), assets: Type.Object({ logo_url: Type.String(), icon_url: Type.String(), icon_black_url: Type.String() }), paid_api_details_markdown: Type.Union([Type.String(), Type.Null()]), fast_track_details_markdown: Type.Union([Type.String(), Type.Null()]), partner_only_details_markdown: Type.Union([Type.String(), Type.Null()]), connection_guide_url: Type.Union([Type.String(), Type.Null()]), coverage: Type.Object({ read_models: Type.Array(Type.Object({ id: Type.String(), label: Type.String(), coverage_status: Type.Union([Type.Literal("SUPPORTED"), Type.Literal("UNSUPPORTED"), Type.Literal("NOT_IMPLEMENTED"), Type.Literal("UNKNOWN")]), fields: Type.Array(Type.Object({ id: Type.String(), coverage_status: Type.Union([Type.Literal("SUPPORTED"), Type.Literal("UNSUPPORTED"), Type.Literal("NOT_IMPLEMENTED"), Type.Literal("UNKNOWN")]) })) })), write_actions: Type.Array(Type.Object({ id: Type.String(), label: Type.String(), coverage_status: Type.Union([Type.Literal("SUPPORTED"), Type.Literal("UNSUPPORTED"), Type.Literal("NOT_IMPLEMENTED"), Type.Literal("UNKNOWN")]), fields: Type.Array(Type.Object({ id: Type.String(), coverage_status: Type.Union([Type.Literal("SUPPORTED"), Type.Literal("UNSUPPORTED"), Type.Literal("NOT_IMPLEMENTED"), Type.Literal("UNKNOWN")]) })) })), features: Type.Array(Type.Object({ id: Type.String(), label: Type.String(), coverage_status: Type.Union([Type.Literal("SUPPORTED"), Type.Literal("UNSUPPORTED"), Type.Literal("NOT_IMPLEMENTED"), Type.Literal("UNKNOWN")]) })) }) })) }) });

export type PostHrisProvisioningGroupsGroupIdDiffParameterGroupId = Static<typeof PostHrisProvisioningGroupsGroupIdDiffParameterGroupId>;
export const PostHrisProvisioningGroupsGroupIdDiffParameterGroupId = Type.String();

export type PostHrisProvisioningGroupsGroupIdDiffPositiveResponse = Static<typeof PostHrisProvisioningGroupsGroupIdDiffPositiveResponse>;
export const PostHrisProvisioningGroupsGroupIdDiffPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ users: Type.Object({ to_provision: Type.Array(Type.Object({ email: Type.Union([Type.String({ pattern: "^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$" }), Type.Null()]), employee: Type.Partial(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), groups: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), name: Type.Union([Type.String(), Type.Null()]) })), avatar: Type.Union([Type.String(), Type.Null()]), work_location_id: Type.Union([Type.String(), Type.Null()]), legal_entity_id: Type.Union([Type.String(), Type.Null()]) })) })), to_deprovision: Type.Array(Type.Object({ origin_id: Type.String(), email: Type.String({ format: "email" }) })), already_provisioned: Type.Array(Type.Object({ origin_id: Type.String(), email: Type.String({ format: "email" }), employee: Type.Partial(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), groups: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), name: Type.Union([Type.String(), Type.Null()]) })), avatar: Type.Union([Type.String(), Type.Null()]), work_location_id: Type.Union([Type.String(), Type.Null()]), legal_entity_id: Type.Union([Type.String(), Type.Null()]) })) })) }) }) });

export type PostHrisProvisioningGroupsGroupIdDiffRequestBody = Static<typeof PostHrisProvisioningGroupsGroupIdDiffRequestBody>;
export const PostHrisProvisioningGroupsGroupIdDiffRequestBody = Type.Object({ provisioned_users: Type.Array(Type.Object({ origin_id: Type.String(), email: Type.String({ format: "email" }) })), options: Type.Object({ employee_fields: Type.Array(Type.Union([Type.Literal("id"), Type.Literal("remote_id"), Type.Literal("first_name"), Type.Literal("last_name"), Type.Literal("groups"), Type.Literal("avatar"), Type.Literal("work_location_id"), Type.Literal("legal_entity_id")])) }) });

export type PostHrisProvisioningGroupsGroupIdSetupLinksParameterGroupId = Static<typeof PostHrisProvisioningGroupsGroupIdSetupLinksParameterGroupId>;
export const PostHrisProvisioningGroupsGroupIdSetupLinksParameterGroupId = Type.String();

export type PostHrisProvisioningGroupsGroupIdSetupLinksPositiveResponse = Static<typeof PostHrisProvisioningGroupsGroupIdSetupLinksPositiveResponse>;
export const PostHrisProvisioningGroupsGroupIdSetupLinksPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ url: Type.String({ format: "uri" }), expires_at: Type.String({ format: "date-time" }) }) });

export type PostHrisProvisioningGroupsGroupIdSetupLinksRequestBody = Static<typeof PostHrisProvisioningGroupsGroupIdSetupLinksRequestBody>;
export const PostHrisProvisioningGroupsGroupIdSetupLinksRequestBody = Type.Partial(Type.Object({ language: Type.Union([Type.Union([Type.Literal("en"), Type.Literal("de"), Type.Literal("fr"), Type.Literal("it"), Type.Literal("es")]), Type.Null()]) }));

export type GetHrisEmployeesParameterCursor = Static<typeof GetHrisEmployeesParameterCursor>;
export const GetHrisEmployeesParameterCursor = Type.String();

export type GetHrisEmployeesParameterPageSize = Static<typeof GetHrisEmployeesParameterPageSize>;
export const GetHrisEmployeesParameterPageSize = Type.Integer({ minimum: 1, maximum: 250 });

export type GetHrisEmployeesParameterUpdatedAfter = Static<typeof GetHrisEmployeesParameterUpdatedAfter>;
export const GetHrisEmployeesParameterUpdatedAfter = Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" });

export type GetHrisEmployeesParameterIncludeDeleted = Static<typeof GetHrisEmployeesParameterIncludeDeleted>;
export const GetHrisEmployeesParameterIncludeDeleted = Type.Union([Type.Literal("true"), Type.Literal("false")]);

export type GetHrisEmployeesParameterIgnoreUnsupportedFilters = Static<typeof GetHrisEmployeesParameterIgnoreUnsupportedFilters>;
export const GetHrisEmployeesParameterIgnoreUnsupportedFilters = Type.Union([Type.Literal("true"), Type.Literal("false")]);

export type GetHrisEmployeesParameterIds = Static<typeof GetHrisEmployeesParameterIds>;
export const GetHrisEmployeesParameterIds = Type.String();

export type GetHrisEmployeesParameterRemoteIds = Static<typeof GetHrisEmployeesParameterRemoteIds>;
export const GetHrisEmployeesParameterRemoteIds = Type.String();

export type GetHrisEmployeesParameterEmploymentStatus = Static<typeof GetHrisEmployeesParameterEmploymentStatus>;
export const GetHrisEmployeesParameterEmploymentStatus = Type.Union([Type.Literal("ACTIVE"), Type.Literal("PENDING"), Type.Literal("INACTIVE"), Type.Literal("LEAVE")]);

export type GetHrisEmployeesParameterEmploymentStatuses = Static<typeof GetHrisEmployeesParameterEmploymentStatuses>;
export const GetHrisEmployeesParameterEmploymentStatuses = Type.String();

export type GetHrisEmployeesParameterGroupIds = Static<typeof GetHrisEmployeesParameterGroupIds>;
export const GetHrisEmployeesParameterGroupIds = Type.String();

export type GetHrisEmployeesParameterLegalEntityIds = Static<typeof GetHrisEmployeesParameterLegalEntityIds>;
export const GetHrisEmployeesParameterLegalEntityIds = Type.String();

export type GetHrisEmployeesParameterWorkLocationIds = Static<typeof GetHrisEmployeesParameterWorkLocationIds>;
export const GetHrisEmployeesParameterWorkLocationIds = Type.String();

export type GetHrisEmployeesParameterWorkEmails = Static<typeof GetHrisEmployeesParameterWorkEmails>;
export const GetHrisEmployeesParameterWorkEmails = Type.String();

export type GetHrisEmployeesParameterPersonalEmails = Static<typeof GetHrisEmployeesParameterPersonalEmails>;
export const GetHrisEmployeesParameterPersonalEmails = Type.String();

export type GetHrisEmployeesParameterCustomFields = Static<typeof GetHrisEmployeesParameterCustomFields>;
export const GetHrisEmployeesParameterCustomFields = Type.String();

export type GetHrisEmployeesPositiveResponse = Static<typeof GetHrisEmployeesPositiveResponse>;
export const GetHrisEmployeesPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.String(), employee_number: Type.Union([Type.String(), Type.Null()]), first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), nationality: Type.Union([Type.String(), Type.Null()]), display_full_name: Type.Union([Type.String(), Type.Null()]), job_title: Type.Union([Type.String(), Type.Null()]), work_email: Type.Optional(Type.Union([Type.String({ pattern: "^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$" }), Type.Null()])), personal_email: Type.Optional(Type.Union([Type.String({ pattern: "^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$" }), Type.Null()])), mobile_phone_number: Type.Union([Type.String(), Type.Null()]), ssn: Type.Union([Type.String(), Type.Null()]), tax_id: Type.Union([Type.String(), Type.Null()]), gender: Type.Optional(Type.Union([Type.Union([Type.Literal("MALE"), Type.Literal("FEMALE"), Type.Literal("NON_BINARY"), Type.Literal("NOT_SPECIFIED")]), Type.String(), Type.Null()])), ethnicity: Type.Optional(Type.Union([Type.Union([Type.Literal("WHITE"), Type.Literal("ASIAN"), Type.Literal("HISPANIC_LATINO"), Type.Literal("HAWAIIAN"), Type.Literal("NATIVE_AMERICAN"), Type.Literal("BLACK_AFRICAN_AMERICAN"), Type.Literal("MULTIPLE_ETHNICITIES"), Type.Literal("DECLINE_TO_SPECIFY")]), Type.String(), Type.Null()])), marital_status: Type.Optional(Type.Union([Type.Union([Type.Literal("SINGLE"), Type.Literal("MARRIED"), Type.Literal("DOMESTIC_PARTNERSHIP"), Type.Literal("WIDOWED"), Type.Literal("DIVORCED"), Type.Literal("SEPARATED"), Type.Literal("NOT_MARRIED")]), Type.String(), Type.Null()])), employment_status: Type.Optional(Type.Union([Type.Union([Type.Literal("ACTIVE"), Type.Literal("PENDING"), Type.Literal("INACTIVE"), Type.Literal("LEAVE")]), Type.String(), Type.Null()])), employment_type: Type.Optional(Type.Union([Type.Union([Type.Literal("FULL_TIME"), Type.Literal("PART_TIME"), Type.Literal("CONTRACT"), Type.Literal("INTERNSHIP"), Type.Literal("FREELANCE"), Type.Literal("WORKING_STUDENT"), Type.Literal("APPRENTICESHIP"), Type.Literal("TRAINING")]), Type.String(), Type.Null()])), weekly_hours: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), avatar: Type.Union([Type.String(), Type.Null()]), work_location_id: Type.Union([Type.String(), Type.Null()]), legal_entity_id: Type.Union([Type.String(), Type.Null()]), manager_id: Type.Union([Type.String(), Type.Null()]), home_address: Type.Optional(Type.Union([Type.Partial(Type.Object({ city: Type.Union([Type.String(), Type.Null()]), country: Type.Union([Type.String(), Type.Null()]), raw: Type.Union([Type.String(), Type.Null()]), state: Type.Union([Type.String(), Type.Null()]), street_1: Type.Union([Type.String(), Type.Null()]), street_2: Type.Union([Type.String(), Type.Null()]), zip_code: Type.Union([Type.String(), Type.Null()]) })), Type.Null()])), bank_accounts: Type.Optional(Type.Union([Type.Array(Type.Partial(Type.Object({ iban: Type.Union([Type.String(), Type.Null()]), bic: Type.Union([Type.String(), Type.Null()]), account_number: Type.Union([Type.String(), Type.Null()]), holder_name: Type.Union([Type.String(), Type.Null()]), bank_name: Type.Union([Type.String(), Type.Null()]), domestic_bank_routing: Type.Union([Type.Object({ number: Type.String(), type: Type.Union([Type.Union([Type.Literal("GB_SORT_CODE"), Type.Literal("DE_BANKLEITZAHL"), Type.Literal("US_ABA_ROUTING_TRANSIT_NUMBER"), Type.Literal("CA_ROUTING_NUMBER"), Type.Literal("AU_BSB_CODE"), Type.Literal("FR_RIB")]), Type.Null()]) }), Type.Null()]) }))), Type.Null()])), date_of_birth: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), start_date: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), termination_date: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_created_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), custom_fields: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), integration_fields: Type.Array(Type.Object({ id: Type.String(), key: Type.String(), type: Type.Union([Type.Literal("DEFAULT"), Type.Literal("CUSTOM")]), value: Type.Optional(Type.Null()), label: Type.Union([Type.String(), Type.Null()]) })), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), employments: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), employee_id: Type.String(), job_title: Type.Union([Type.String(), Type.Null()]), pay_rate: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), pay_period: Type.Optional(Type.Union([Type.Union([Type.Literal("HOUR"), Type.Literal("DAY"), Type.Literal("WEEK"), Type.Literal("TWO_WEEKS"), Type.Literal("HALF_MONTH"), Type.Literal("MONTH"), Type.Literal("TWO_MONTHS"), Type.Literal("QUARTER"), Type.Literal("HALF_YEAR"), Type.Literal("YEAR")]), Type.String(), Type.Null()])), pay_frequency: Type.Optional(Type.Union([Type.Union([Type.Literal("DAILY"), Type.Literal("WEEKLY"), Type.Literal("BIWEEKLY"), Type.Literal("MONTHLY"), Type.Literal("SEMIMONTHLY"), Type.Literal("QUARTERLY"), Type.Literal("SEMIANNUALLY"), Type.Literal("ANNUALLY"), Type.Literal("PRO_RATA")]), Type.String(), Type.Null()])), employment_type: Type.Optional(Type.Union([Type.Union([Type.Literal("FULL_TIME"), Type.Literal("PART_TIME"), Type.Literal("CONTRACT"), Type.Literal("INTERNSHIP"), Type.Literal("FREELANCE"), Type.Literal("WORKING_STUDENT"), Type.Literal("APPRENTICESHIP"), Type.Literal("TRAINING")]), Type.String(), Type.Null()])), pay_currency: Type.Union([Type.String(), Type.Null()]), effective_date: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), custom_fields: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), integration_fields: Type.Array(Type.Object({ id: Type.String(), key: Type.String(), type: Type.Union([Type.Literal("DEFAULT"), Type.Literal("CUSTOM")]), value: Type.Optional(Type.Null()), label: Type.Union([Type.String(), Type.Null()]) })) })), time_off_balances: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), employee_id: Type.String(), type_id: Type.String(), balance: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), balance_unit: Type.Union([Type.Union([Type.Literal("HOURS"), Type.Literal("DAYS")]), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), used: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), used_unit: Type.Union([Type.Union([Type.Literal("HOURS"), Type.Literal("DAYS")]), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]) })), manager: Type.Union([Type.Object({ first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), display_full_name: Type.Union([Type.String(), Type.Null()]), id: Type.String(), employee_number: Type.Union([Type.String(), Type.Null()]), work_email: Type.Optional(Type.Union([Type.String({ pattern: "^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$" }), Type.Null()])), remote_id: Type.String(), employment_status: Type.Optional(Type.Union([Type.Union([Type.Literal("ACTIVE"), Type.Literal("PENDING"), Type.Literal("INACTIVE"), Type.Literal("LEAVE")]), Type.String(), Type.Null()])), termination_date: Type.Union([Type.String({ format: "date-time" }), Type.Null()]) }), Type.Null()]), groups: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.String(), name: Type.Union([Type.String(), Type.Null()]), type: Type.Union([Type.Union([Type.Literal("DEPARTMENT"), Type.Literal("TEAM"), Type.Literal("COST_CENTER")]), Type.Null()]) })), legal_entity: Type.Union([Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), name: Type.Union([Type.String(), Type.Null()]), address: Type.Optional(Type.Union([Type.Partial(Type.Object({ city: Type.Union([Type.String(), Type.Null()]), country: Type.Union([Type.String(), Type.Null()]), raw: Type.Union([Type.String(), Type.Null()]), state: Type.Union([Type.String(), Type.Null()]), street_1: Type.Union([Type.String(), Type.Null()]), street_2: Type.Union([Type.String(), Type.Null()]), zip_code: Type.Union([Type.String(), Type.Null()]) })), Type.Null()])) }), Type.Null()]), teams: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.String(), name: Type.Union([Type.String(), Type.Null()]), type: Type.Union([Type.Union([Type.Literal("DEPARTMENT"), Type.Literal("TEAM"), Type.Literal("COST_CENTER")]), Type.Null()]) })), work_location: Type.Union([Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), name: Type.Union([Type.String(), Type.Null()]), address: Type.Optional(Type.Union([Type.Partial(Type.Object({ city: Type.Union([Type.String(), Type.Null()]), country: Type.Union([Type.String(), Type.Null()]), raw: Type.Union([Type.String(), Type.Null()]), state: Type.Union([Type.String(), Type.Null()]), street_1: Type.Union([Type.String(), Type.Null()]), street_2: Type.Union([Type.String(), Type.Null()]), zip_code: Type.Union([Type.String(), Type.Null()]) })), Type.Null()])), type: Type.Union([Type.String(), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]) }), Type.Null()]) })) }) });

export type PostHrisEmployeesPositiveResponse = Static<typeof PostHrisEmployeesPositiveResponse>;
export const PostHrisEmployeesPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ id: Type.String(), remote_id: Type.String(), employee_number: Type.Union([Type.String(), Type.Null()]), first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), nationality: Type.Union([Type.String(), Type.Null()]), display_full_name: Type.Union([Type.String(), Type.Null()]), job_title: Type.Union([Type.String(), Type.Null()]), work_email: Type.Optional(Type.Union([Type.String({ pattern: "^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$" }), Type.Null()])), personal_email: Type.Optional(Type.Union([Type.String({ pattern: "^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$" }), Type.Null()])), mobile_phone_number: Type.Union([Type.String(), Type.Null()]), ssn: Type.Union([Type.String(), Type.Null()]), tax_id: Type.Union([Type.String(), Type.Null()]), gender: Type.Optional(Type.Union([Type.Union([Type.Literal("MALE"), Type.Literal("FEMALE"), Type.Literal("NON_BINARY"), Type.Literal("NOT_SPECIFIED")]), Type.String(), Type.Null()])), ethnicity: Type.Optional(Type.Union([Type.Union([Type.Literal("WHITE"), Type.Literal("ASIAN"), Type.Literal("HISPANIC_LATINO"), Type.Literal("HAWAIIAN"), Type.Literal("NATIVE_AMERICAN"), Type.Literal("BLACK_AFRICAN_AMERICAN"), Type.Literal("MULTIPLE_ETHNICITIES"), Type.Literal("DECLINE_TO_SPECIFY")]), Type.String(), Type.Null()])), marital_status: Type.Optional(Type.Union([Type.Union([Type.Literal("SINGLE"), Type.Literal("MARRIED"), Type.Literal("DOMESTIC_PARTNERSHIP"), Type.Literal("WIDOWED"), Type.Literal("DIVORCED"), Type.Literal("SEPARATED"), Type.Literal("NOT_MARRIED")]), Type.String(), Type.Null()])), employment_status: Type.Optional(Type.Union([Type.Union([Type.Literal("ACTIVE"), Type.Literal("PENDING"), Type.Literal("INACTIVE"), Type.Literal("LEAVE")]), Type.String(), Type.Null()])), employment_type: Type.Optional(Type.Union([Type.Union([Type.Literal("FULL_TIME"), Type.Literal("PART_TIME"), Type.Literal("CONTRACT"), Type.Literal("INTERNSHIP"), Type.Literal("FREELANCE"), Type.Literal("WORKING_STUDENT"), Type.Literal("APPRENTICESHIP"), Type.Literal("TRAINING")]), Type.String(), Type.Null()])), weekly_hours: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), avatar: Type.Union([Type.String(), Type.Null()]), work_location_id: Type.Union([Type.String(), Type.Null()]), legal_entity_id: Type.Union([Type.String(), Type.Null()]), manager_id: Type.Union([Type.String(), Type.Null()]), home_address: Type.Optional(Type.Union([Type.Partial(Type.Object({ city: Type.Union([Type.String(), Type.Null()]), country: Type.Union([Type.String(), Type.Null()]), raw: Type.Union([Type.String(), Type.Null()]), state: Type.Union([Type.String(), Type.Null()]), street_1: Type.Union([Type.String(), Type.Null()]), street_2: Type.Union([Type.String(), Type.Null()]), zip_code: Type.Union([Type.String(), Type.Null()]) })), Type.Null()])), bank_accounts: Type.Optional(Type.Union([Type.Array(Type.Partial(Type.Object({ iban: Type.Union([Type.String(), Type.Null()]), bic: Type.Union([Type.String(), Type.Null()]), account_number: Type.Union([Type.String(), Type.Null()]), holder_name: Type.Union([Type.String(), Type.Null()]), bank_name: Type.Union([Type.String(), Type.Null()]), domestic_bank_routing: Type.Union([Type.Object({ number: Type.String(), type: Type.Union([Type.Union([Type.Literal("GB_SORT_CODE"), Type.Literal("DE_BANKLEITZAHL"), Type.Literal("US_ABA_ROUTING_TRANSIT_NUMBER"), Type.Literal("CA_ROUTING_NUMBER"), Type.Literal("AU_BSB_CODE"), Type.Literal("FR_RIB")]), Type.Null()]) }), Type.Null()]) }))), Type.Null()])), date_of_birth: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), start_date: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), termination_date: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_created_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), custom_fields: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), integration_fields: Type.Array(Type.Object({ id: Type.String(), key: Type.String(), type: Type.Union([Type.Literal("DEFAULT"), Type.Literal("CUSTOM")]), value: Type.Optional(Type.Null()), label: Type.Union([Type.String(), Type.Null()]) })), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]) }), warnings: Type.Array(Type.Object({ message: Type.String() })) });

export type PostHrisEmployeesRequestBody = Static<typeof PostHrisEmployeesRequestBody>;
export const PostHrisEmployeesRequestBody = Type.Object({ first_name: Type.String(), last_name: Type.String(), work_email: Type.Optional(Type.String({ format: "email" })), gender: Type.Optional(Type.Union([Type.Literal("MALE"), Type.Literal("FEMALE"), Type.Literal("NON_BINARY"), Type.Literal("NOT_SPECIFIED")])), job_title: Type.Optional(Type.String()), home_address: Type.Optional(Type.Partial(Type.Object({ street_1: Type.String(), street_2: Type.String(), city: Type.String(), state: Type.String(), zip_code: Type.String(), country: Type.String({ pattern: "^[A-Z]{2}$" }) }))), date_of_birth: Type.Optional(Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" })), mobile_phone_number: Type.Optional(Type.String()), home_phone_number: Type.Optional(Type.String()), nationality: Type.Optional(Type.String({ pattern: "^[A-Z]{2}$" })), start_date: Type.Optional(Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" })), legal_entity_id: Type.Optional(Type.String()), location_id: Type.Optional(Type.String()), remote_fields: Type.Optional(Type.Partial(Type.Object({ humaans: Type.Partial(Type.Object({ employee: Type.Record(Type.String(), Type.Unknown()) })), hibob: Type.Partial(Type.Object({ employee: Type.Record(Type.String(), Type.Unknown()) })), sympa: Type.Partial(Type.Object({ GenericNewHire: Type.Record(Type.String(), Type.Unknown()) })), silae: Type.Partial(Type.Object({ siret: Type.String(), employee: Type.Record(Type.String(), Type.Unknown()), employment: Type.Record(Type.String(), Type.Unknown()) })), peoplehr: Type.Partial(Type.Object({ job_role_effective_date: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }), department: Type.String() })), zohopeople: Type.Partial(Type.Object({ employee_id: Type.String({ minLength: 1 }) })), workday: Type.Partial(Type.Object({ job_requisition_id: Type.String(), position_id: Type.String(), ssn: Type.String(), bank_account: Type.Object({ iban: Type.String(), bic: Type.String(), bank_name: Type.String() }) })), deel: Type.Object({ candidate_id: Type.String(), candidate_link: Type.String() }), bamboohr: Type.Partial(Type.Object({ employee: Type.Record(Type.String(), Type.Unknown()) })), oracle: Type.Object({ group_id: Type.String(), department_id: Type.String() }), adpworkforcenow: Type.Object({ onboarding_template_code: Type.String(), applicant_payroll_profile_group_code: Type.String(), manager_position_id: Type.Optional(Type.String()), home_organization_unit_code: Type.Optional(Type.String()), personal_email: Type.Optional(Type.String()) }), azuread: Type.Object({ password: Type.String() }), paycor: Type.Object({ paygroupRemoteId: Type.String(), departmentRemoteId: Type.String() }), planday: Type.Object({ department_remote_id: Type.String() }), dayforce: Type.Object({ social_security_number: Type.String(), pay_type: Type.String(), pay_class: Type.String(), pay_group: Type.String(), base_rate: Type.Number({ minimum: -1.7976931348623157e+308 }), role: Type.String(), location: Type.String(), department: Type.String(), job: Type.String(), country: Type.String() }) }))) });

export type Schema1 = Static<typeof Schema1>;
export const Schema1 = Type.Recursive((This) => Type.Record(Type.String(), Type.Union([Type.Object({ label: Type.String(), required: Type.Boolean(), description: Type.Optional(Type.Union([Type.String(), Type.Null()])), unified_key: Type.Optional(Type.Union([Type.Union([Type.Literal("first_name"), Type.Literal("last_name"), Type.Literal("date_of_birth"), Type.Literal("gender"), Type.Literal("home_address.city"), Type.Literal("home_address.country"), Type.Literal("home_address.state"), Type.Literal("home_address.street_1"), Type.Literal("home_address.street_2"), Type.Literal("home_address.zip_code"), Type.Literal("job_title"), Type.Literal("legal_entity_id"), Type.Literal("location_id"), Type.Literal("mobile_phone_number"), Type.Literal("home_phone_number"), Type.Literal("nationality"), Type.Literal("start_date"), Type.Literal("work_email"), Type.Literal("private_email"), Type.Literal("yearly_salary")]), Type.Null()])), type: Type.String(), min_length: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])), max_length: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])), reg_exp: Type.Optional(Type.Union([Type.String(), Type.Null()])) }), Type.Object({ label: Type.String(), required: Type.Boolean(), description: Type.Optional(Type.Union([Type.String(), Type.Null()])), unified_key: Type.Optional(Type.Union([Type.Union([Type.Literal("first_name"), Type.Literal("last_name"), Type.Literal("date_of_birth"), Type.Literal("gender"), Type.Literal("home_address.city"), Type.Literal("home_address.country"), Type.Literal("home_address.state"), Type.Literal("home_address.street_1"), Type.Literal("home_address.street_2"), Type.Literal("home_address.zip_code"), Type.Literal("job_title"), Type.Literal("legal_entity_id"), Type.Literal("location_id"), Type.Literal("mobile_phone_number"), Type.Literal("home_phone_number"), Type.Literal("nationality"), Type.Literal("start_date"), Type.Literal("work_email"), Type.Literal("private_email"), Type.Literal("yearly_salary")]), Type.Null()])), type: Type.String(), min: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])), max: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])) }), Type.Object({ label: Type.String(), required: Type.Boolean(), description: Type.Optional(Type.Union([Type.String(), Type.Null()])), unified_key: Type.Optional(Type.Union([Type.Union([Type.Literal("first_name"), Type.Literal("last_name"), Type.Literal("date_of_birth"), Type.Literal("gender"), Type.Literal("home_address.city"), Type.Literal("home_address.country"), Type.Literal("home_address.state"), Type.Literal("home_address.street_1"), Type.Literal("home_address.street_2"), Type.Literal("home_address.zip_code"), Type.Literal("job_title"), Type.Literal("legal_entity_id"), Type.Literal("location_id"), Type.Literal("mobile_phone_number"), Type.Literal("home_phone_number"), Type.Literal("nationality"), Type.Literal("start_date"), Type.Literal("work_email"), Type.Literal("private_email"), Type.Literal("yearly_salary")]), Type.Null()])), type: Type.String() }), Type.Object({ label: Type.String(), required: Type.Boolean(), description: Type.Optional(Type.Union([Type.String(), Type.Null()])), unified_key: Type.Optional(Type.Union([Type.Union([Type.Literal("first_name"), Type.Literal("last_name"), Type.Literal("date_of_birth"), Type.Literal("gender"), Type.Literal("home_address.city"), Type.Literal("home_address.country"), Type.Literal("home_address.state"), Type.Literal("home_address.street_1"), Type.Literal("home_address.street_2"), Type.Literal("home_address.zip_code"), Type.Literal("job_title"), Type.Literal("legal_entity_id"), Type.Literal("location_id"), Type.Literal("mobile_phone_number"), Type.Literal("home_phone_number"), Type.Literal("nationality"), Type.Literal("start_date"), Type.Literal("work_email"), Type.Literal("private_email"), Type.Literal("yearly_salary")]), Type.Null()])), type: Type.String(), options: Type.Union([Type.Object({ type: Type.String(), entries: Type.Array(Type.Object({ id: Type.String(), label: Type.String(), unified_value: Type.Optional(Type.String()), remote_id: Type.Union([Type.String(), Type.Number({ minimum: -1.7976931348623157e+308 })]) })) }), Type.Object({ type: Type.String(), link: Type.String() })]) }), Type.Object({ label: Type.String(), required: Type.Boolean(), description: Type.Optional(Type.Union([Type.String(), Type.Null()])), unified_key: Type.Optional(Type.Union([Type.String(), Type.Null()])), type: Type.String(), min_items: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])), max_items: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])), options: Type.Union([Type.Object({ type: Type.String(), entries: Type.Array(Type.Object({ id: Type.String(), label: Type.String(), unified_value: Type.Optional(Type.String()), remote_id: Type.Union([Type.String(), Type.Number({ minimum: -1.7976931348623157e+308 })]) })) }), Type.Object({ type: Type.String(), link: Type.String() })]) }), Type.Object({ label: Type.String(), required: Type.Boolean(), description: Type.Optional(Type.Union([Type.String(), Type.Null()])), unified_key: Type.Optional(Type.Union([Type.Union([Type.Literal("first_name"), Type.Literal("last_name"), Type.Literal("date_of_birth"), Type.Literal("gender"), Type.Literal("home_address.city"), Type.Literal("home_address.country"), Type.Literal("home_address.state"), Type.Literal("home_address.street_1"), Type.Literal("home_address.street_2"), Type.Literal("home_address.zip_code"), Type.Literal("job_title"), Type.Literal("legal_entity_id"), Type.Literal("location_id"), Type.Literal("mobile_phone_number"), Type.Literal("home_phone_number"), Type.Literal("nationality"), Type.Literal("start_date"), Type.Literal("work_email"), Type.Literal("private_email"), Type.Literal("yearly_salary")]), Type.Null()])), type: Type.String() }), Type.Object({ label: Type.String(), required: Type.Boolean(), description: Type.Optional(Type.Union([Type.String(), Type.Null()])), unified_key: Type.Optional(Type.Union([Type.Union([Type.Literal("first_name"), Type.Literal("last_name"), Type.Literal("date_of_birth"), Type.Literal("gender"), Type.Literal("home_address.city"), Type.Literal("home_address.country"), Type.Literal("home_address.state"), Type.Literal("home_address.street_1"), Type.Literal("home_address.street_2"), Type.Literal("home_address.zip_code"), Type.Literal("job_title"), Type.Literal("legal_entity_id"), Type.Literal("location_id"), Type.Literal("mobile_phone_number"), Type.Literal("home_phone_number"), Type.Literal("nationality"), Type.Literal("start_date"), Type.Literal("work_email"), Type.Literal("private_email"), Type.Literal("yearly_salary")]), Type.Null()])), type: Type.String(), properties: This }), Type.Object({ label: Type.String(), required: Type.Boolean(), description: Type.Optional(Type.Union([Type.String(), Type.Null()])), unified_key: Type.Optional(Type.Union([Type.Union([Type.Literal("first_name"), Type.Literal("last_name"), Type.Literal("date_of_birth"), Type.Literal("gender"), Type.Literal("home_address.city"), Type.Literal("home_address.country"), Type.Literal("home_address.state"), Type.Literal("home_address.street_1"), Type.Literal("home_address.street_2"), Type.Literal("home_address.zip_code"), Type.Literal("job_title"), Type.Literal("legal_entity_id"), Type.Literal("location_id"), Type.Literal("mobile_phone_number"), Type.Literal("home_phone_number"), Type.Literal("nationality"), Type.Literal("start_date"), Type.Literal("work_email"), Type.Literal("private_email"), Type.Literal("yearly_salary")]), Type.Null()])), type: Type.String(), item_type: Type.Unsafe(() => Schema2), min_items: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])), max_items: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])) }), Type.Object({ label: Type.String(), required: Type.Boolean(), description: Type.Optional(Type.Union([Type.String(), Type.Null()])), unified_key: Type.Optional(Type.Union([Type.Union([Type.Literal("first_name"), Type.Literal("last_name"), Type.Literal("date_of_birth"), Type.Literal("gender"), Type.Literal("home_address.city"), Type.Literal("home_address.country"), Type.Literal("home_address.state"), Type.Literal("home_address.street_1"), Type.Literal("home_address.street_2"), Type.Literal("home_address.zip_code"), Type.Literal("job_title"), Type.Literal("legal_entity_id"), Type.Literal("location_id"), Type.Literal("mobile_phone_number"), Type.Literal("home_phone_number"), Type.Literal("nationality"), Type.Literal("start_date"), Type.Literal("work_email"), Type.Literal("private_email"), Type.Literal("yearly_salary")]), Type.Null()])), type: Type.String(), file_restrictions: Type.Object({ accepted_mime_types: Type.Array(Type.String()), max_file_size: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])) }) })])));

export type Schema2 = Static<typeof Schema2>;
export const Schema2 = Type.Recursive((This) => Type.Union([Type.Object({ label: Type.String(), required: Type.Boolean(), description: Type.Optional(Type.Union([Type.String(), Type.Null()])), unified_key: Type.Optional(Type.Union([Type.Union([Type.Literal("first_name"), Type.Literal("last_name"), Type.Literal("date_of_birth"), Type.Literal("gender"), Type.Literal("home_address.city"), Type.Literal("home_address.country"), Type.Literal("home_address.state"), Type.Literal("home_address.street_1"), Type.Literal("home_address.street_2"), Type.Literal("home_address.zip_code"), Type.Literal("job_title"), Type.Literal("legal_entity_id"), Type.Literal("location_id"), Type.Literal("mobile_phone_number"), Type.Literal("home_phone_number"), Type.Literal("nationality"), Type.Literal("start_date"), Type.Literal("work_email"), Type.Literal("private_email"), Type.Literal("yearly_salary")]), Type.Null()])), type: Type.String(), min_length: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])), max_length: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])), reg_exp: Type.Optional(Type.Union([Type.String(), Type.Null()])) }), Type.Object({ label: Type.String(), required: Type.Boolean(), description: Type.Optional(Type.Union([Type.String(), Type.Null()])), unified_key: Type.Optional(Type.Union([Type.Union([Type.Literal("first_name"), Type.Literal("last_name"), Type.Literal("date_of_birth"), Type.Literal("gender"), Type.Literal("home_address.city"), Type.Literal("home_address.country"), Type.Literal("home_address.state"), Type.Literal("home_address.street_1"), Type.Literal("home_address.street_2"), Type.Literal("home_address.zip_code"), Type.Literal("job_title"), Type.Literal("legal_entity_id"), Type.Literal("location_id"), Type.Literal("mobile_phone_number"), Type.Literal("home_phone_number"), Type.Literal("nationality"), Type.Literal("start_date"), Type.Literal("work_email"), Type.Literal("private_email"), Type.Literal("yearly_salary")]), Type.Null()])), type: Type.String(), min: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])), max: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])) }), Type.Object({ label: Type.String(), required: Type.Boolean(), description: Type.Optional(Type.Union([Type.String(), Type.Null()])), unified_key: Type.Optional(Type.Union([Type.Union([Type.Literal("first_name"), Type.Literal("last_name"), Type.Literal("date_of_birth"), Type.Literal("gender"), Type.Literal("home_address.city"), Type.Literal("home_address.country"), Type.Literal("home_address.state"), Type.Literal("home_address.street_1"), Type.Literal("home_address.street_2"), Type.Literal("home_address.zip_code"), Type.Literal("job_title"), Type.Literal("legal_entity_id"), Type.Literal("location_id"), Type.Literal("mobile_phone_number"), Type.Literal("home_phone_number"), Type.Literal("nationality"), Type.Literal("start_date"), Type.Literal("work_email"), Type.Literal("private_email"), Type.Literal("yearly_salary")]), Type.Null()])), type: Type.String() }), Type.Object({ label: Type.String(), required: Type.Boolean(), description: Type.Optional(Type.Union([Type.String(), Type.Null()])), unified_key: Type.Optional(Type.Union([Type.Union([Type.Literal("first_name"), Type.Literal("last_name"), Type.Literal("date_of_birth"), Type.Literal("gender"), Type.Literal("home_address.city"), Type.Literal("home_address.country"), Type.Literal("home_address.state"), Type.Literal("home_address.street_1"), Type.Literal("home_address.street_2"), Type.Literal("home_address.zip_code"), Type.Literal("job_title"), Type.Literal("legal_entity_id"), Type.Literal("location_id"), Type.Literal("mobile_phone_number"), Type.Literal("home_phone_number"), Type.Literal("nationality"), Type.Literal("start_date"), Type.Literal("work_email"), Type.Literal("private_email"), Type.Literal("yearly_salary")]), Type.Null()])), type: Type.String(), options: Type.Union([Type.Object({ type: Type.String(), entries: Type.Array(Type.Object({ id: Type.String(), label: Type.String(), unified_value: Type.Optional(Type.String()), remote_id: Type.Union([Type.String(), Type.Number({ minimum: -1.7976931348623157e+308 })]) })) }), Type.Object({ type: Type.String(), link: Type.String() })]) }), Type.Object({ label: Type.String(), required: Type.Boolean(), description: Type.Optional(Type.Union([Type.String(), Type.Null()])), unified_key: Type.Optional(Type.Union([Type.String(), Type.Null()])), type: Type.String(), min_items: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])), max_items: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])), options: Type.Union([Type.Object({ type: Type.String(), entries: Type.Array(Type.Object({ id: Type.String(), label: Type.String(), unified_value: Type.Optional(Type.String()), remote_id: Type.Union([Type.String(), Type.Number({ minimum: -1.7976931348623157e+308 })]) })) }), Type.Object({ type: Type.String(), link: Type.String() })]) }), Type.Object({ label: Type.String(), required: Type.Boolean(), description: Type.Optional(Type.Union([Type.String(), Type.Null()])), unified_key: Type.Optional(Type.Union([Type.Union([Type.Literal("first_name"), Type.Literal("last_name"), Type.Literal("date_of_birth"), Type.Literal("gender"), Type.Literal("home_address.city"), Type.Literal("home_address.country"), Type.Literal("home_address.state"), Type.Literal("home_address.street_1"), Type.Literal("home_address.street_2"), Type.Literal("home_address.zip_code"), Type.Literal("job_title"), Type.Literal("legal_entity_id"), Type.Literal("location_id"), Type.Literal("mobile_phone_number"), Type.Literal("home_phone_number"), Type.Literal("nationality"), Type.Literal("start_date"), Type.Literal("work_email"), Type.Literal("private_email"), Type.Literal("yearly_salary")]), Type.Null()])), type: Type.String() }), Type.Object({ label: Type.String(), required: Type.Boolean(), description: Type.Optional(Type.Union([Type.String(), Type.Null()])), unified_key: Type.Optional(Type.Union([Type.Union([Type.Literal("first_name"), Type.Literal("last_name"), Type.Literal("date_of_birth"), Type.Literal("gender"), Type.Literal("home_address.city"), Type.Literal("home_address.country"), Type.Literal("home_address.state"), Type.Literal("home_address.street_1"), Type.Literal("home_address.street_2"), Type.Literal("home_address.zip_code"), Type.Literal("job_title"), Type.Literal("legal_entity_id"), Type.Literal("location_id"), Type.Literal("mobile_phone_number"), Type.Literal("home_phone_number"), Type.Literal("nationality"), Type.Literal("start_date"), Type.Literal("work_email"), Type.Literal("private_email"), Type.Literal("yearly_salary")]), Type.Null()])), type: Type.String(), properties: Type.Unsafe(() => Schema1) }), Type.Object({ label: Type.String(), required: Type.Boolean(), description: Type.Optional(Type.Union([Type.String(), Type.Null()])), unified_key: Type.Optional(Type.Union([Type.Union([Type.Literal("first_name"), Type.Literal("last_name"), Type.Literal("date_of_birth"), Type.Literal("gender"), Type.Literal("home_address.city"), Type.Literal("home_address.country"), Type.Literal("home_address.state"), Type.Literal("home_address.street_1"), Type.Literal("home_address.street_2"), Type.Literal("home_address.zip_code"), Type.Literal("job_title"), Type.Literal("legal_entity_id"), Type.Literal("location_id"), Type.Literal("mobile_phone_number"), Type.Literal("home_phone_number"), Type.Literal("nationality"), Type.Literal("start_date"), Type.Literal("work_email"), Type.Literal("private_email"), Type.Literal("yearly_salary")]), Type.Null()])), type: Type.String(), item_type: This, min_items: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])), max_items: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])) }), Type.Object({ label: Type.String(), required: Type.Boolean(), description: Type.Optional(Type.Union([Type.String(), Type.Null()])), unified_key: Type.Optional(Type.Union([Type.Union([Type.Literal("first_name"), Type.Literal("last_name"), Type.Literal("date_of_birth"), Type.Literal("gender"), Type.Literal("home_address.city"), Type.Literal("home_address.country"), Type.Literal("home_address.state"), Type.Literal("home_address.street_1"), Type.Literal("home_address.street_2"), Type.Literal("home_address.zip_code"), Type.Literal("job_title"), Type.Literal("legal_entity_id"), Type.Literal("location_id"), Type.Literal("mobile_phone_number"), Type.Literal("home_phone_number"), Type.Literal("nationality"), Type.Literal("start_date"), Type.Literal("work_email"), Type.Literal("private_email"), Type.Literal("yearly_salary")]), Type.Null()])), type: Type.String(), file_restrictions: Type.Object({ accepted_mime_types: Type.Array(Type.String()), max_file_size: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])) }) })]));

export type GetHrisEmployeesFormPositiveResponse = Static<typeof GetHrisEmployeesFormPositiveResponse>;
export const GetHrisEmployeesFormPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ properties: Type.Record(Type.String(), Type.Union([Type.Object({ label: Type.String(), required: Type.Boolean(), description: Type.Optional(Type.Union([Type.String(), Type.Null()])), unified_key: Type.Optional(Type.Union([Type.Union([Type.Literal("first_name"), Type.Literal("last_name"), Type.Literal("date_of_birth"), Type.Literal("gender"), Type.Literal("home_address.city"), Type.Literal("home_address.country"), Type.Literal("home_address.state"), Type.Literal("home_address.street_1"), Type.Literal("home_address.street_2"), Type.Literal("home_address.zip_code"), Type.Literal("job_title"), Type.Literal("legal_entity_id"), Type.Literal("location_id"), Type.Literal("mobile_phone_number"), Type.Literal("home_phone_number"), Type.Literal("nationality"), Type.Literal("start_date"), Type.Literal("work_email"), Type.Literal("private_email"), Type.Literal("yearly_salary")]), Type.Null()])), type: Type.String(), min_length: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])), max_length: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])), reg_exp: Type.Optional(Type.Union([Type.String(), Type.Null()])) }), Type.Object({ label: Type.String(), required: Type.Boolean(), description: Type.Optional(Type.Union([Type.String(), Type.Null()])), unified_key: Type.Optional(Type.Union([Type.Union([Type.Literal("first_name"), Type.Literal("last_name"), Type.Literal("date_of_birth"), Type.Literal("gender"), Type.Literal("home_address.city"), Type.Literal("home_address.country"), Type.Literal("home_address.state"), Type.Literal("home_address.street_1"), Type.Literal("home_address.street_2"), Type.Literal("home_address.zip_code"), Type.Literal("job_title"), Type.Literal("legal_entity_id"), Type.Literal("location_id"), Type.Literal("mobile_phone_number"), Type.Literal("home_phone_number"), Type.Literal("nationality"), Type.Literal("start_date"), Type.Literal("work_email"), Type.Literal("private_email"), Type.Literal("yearly_salary")]), Type.Null()])), type: Type.String(), min: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])), max: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])) }), Type.Object({ label: Type.String(), required: Type.Boolean(), description: Type.Optional(Type.Union([Type.String(), Type.Null()])), unified_key: Type.Optional(Type.Union([Type.Union([Type.Literal("first_name"), Type.Literal("last_name"), Type.Literal("date_of_birth"), Type.Literal("gender"), Type.Literal("home_address.city"), Type.Literal("home_address.country"), Type.Literal("home_address.state"), Type.Literal("home_address.street_1"), Type.Literal("home_address.street_2"), Type.Literal("home_address.zip_code"), Type.Literal("job_title"), Type.Literal("legal_entity_id"), Type.Literal("location_id"), Type.Literal("mobile_phone_number"), Type.Literal("home_phone_number"), Type.Literal("nationality"), Type.Literal("start_date"), Type.Literal("work_email"), Type.Literal("private_email"), Type.Literal("yearly_salary")]), Type.Null()])), type: Type.String() }), Type.Object({ label: Type.String(), required: Type.Boolean(), description: Type.Optional(Type.Union([Type.String(), Type.Null()])), unified_key: Type.Optional(Type.Union([Type.Union([Type.Literal("first_name"), Type.Literal("last_name"), Type.Literal("date_of_birth"), Type.Literal("gender"), Type.Literal("home_address.city"), Type.Literal("home_address.country"), Type.Literal("home_address.state"), Type.Literal("home_address.street_1"), Type.Literal("home_address.street_2"), Type.Literal("home_address.zip_code"), Type.Literal("job_title"), Type.Literal("legal_entity_id"), Type.Literal("location_id"), Type.Literal("mobile_phone_number"), Type.Literal("home_phone_number"), Type.Literal("nationality"), Type.Literal("start_date"), Type.Literal("work_email"), Type.Literal("private_email"), Type.Literal("yearly_salary")]), Type.Null()])), type: Type.String(), options: Type.Union([Type.Object({ type: Type.String(), entries: Type.Array(Type.Object({ id: Type.String(), label: Type.String(), unified_value: Type.Optional(Type.String()), remote_id: Type.Union([Type.String(), Type.Number({ minimum: -1.7976931348623157e+308 })]) })) }), Type.Object({ type: Type.String(), link: Type.String() })]) }), Type.Object({ label: Type.String(), required: Type.Boolean(), description: Type.Optional(Type.Union([Type.String(), Type.Null()])), unified_key: Type.Optional(Type.Union([Type.String(), Type.Null()])), type: Type.String(), min_items: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])), max_items: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])), options: Type.Union([Type.Object({ type: Type.String(), entries: Type.Array(Type.Object({ id: Type.String(), label: Type.String(), unified_value: Type.Optional(Type.String()), remote_id: Type.Union([Type.String(), Type.Number({ minimum: -1.7976931348623157e+308 })]) })) }), Type.Object({ type: Type.String(), link: Type.String() })]) }), Type.Object({ label: Type.String(), required: Type.Boolean(), description: Type.Optional(Type.Union([Type.String(), Type.Null()])), unified_key: Type.Optional(Type.Union([Type.Union([Type.Literal("first_name"), Type.Literal("last_name"), Type.Literal("date_of_birth"), Type.Literal("gender"), Type.Literal("home_address.city"), Type.Literal("home_address.country"), Type.Literal("home_address.state"), Type.Literal("home_address.street_1"), Type.Literal("home_address.street_2"), Type.Literal("home_address.zip_code"), Type.Literal("job_title"), Type.Literal("legal_entity_id"), Type.Literal("location_id"), Type.Literal("mobile_phone_number"), Type.Literal("home_phone_number"), Type.Literal("nationality"), Type.Literal("start_date"), Type.Literal("work_email"), Type.Literal("private_email"), Type.Literal("yearly_salary")]), Type.Null()])), type: Type.String() }), Type.Object({ label: Type.String(), required: Type.Boolean(), description: Type.Optional(Type.Union([Type.String(), Type.Null()])), unified_key: Type.Optional(Type.Union([Type.Union([Type.Literal("first_name"), Type.Literal("last_name"), Type.Literal("date_of_birth"), Type.Literal("gender"), Type.Literal("home_address.city"), Type.Literal("home_address.country"), Type.Literal("home_address.state"), Type.Literal("home_address.street_1"), Type.Literal("home_address.street_2"), Type.Literal("home_address.zip_code"), Type.Literal("job_title"), Type.Literal("legal_entity_id"), Type.Literal("location_id"), Type.Literal("mobile_phone_number"), Type.Literal("home_phone_number"), Type.Literal("nationality"), Type.Literal("start_date"), Type.Literal("work_email"), Type.Literal("private_email"), Type.Literal("yearly_salary")]), Type.Null()])), type: Type.String(), properties: Type.Unsafe(() => Schema1) }), Type.Object({ label: Type.String(), required: Type.Boolean(), description: Type.Optional(Type.Union([Type.String(), Type.Null()])), unified_key: Type.Optional(Type.Union([Type.Union([Type.Literal("first_name"), Type.Literal("last_name"), Type.Literal("date_of_birth"), Type.Literal("gender"), Type.Literal("home_address.city"), Type.Literal("home_address.country"), Type.Literal("home_address.state"), Type.Literal("home_address.street_1"), Type.Literal("home_address.street_2"), Type.Literal("home_address.zip_code"), Type.Literal("job_title"), Type.Literal("legal_entity_id"), Type.Literal("location_id"), Type.Literal("mobile_phone_number"), Type.Literal("home_phone_number"), Type.Literal("nationality"), Type.Literal("start_date"), Type.Literal("work_email"), Type.Literal("private_email"), Type.Literal("yearly_salary")]), Type.Null()])), type: Type.String(), item_type: Type.Unsafe(() => Schema2), min_items: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])), max_items: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])) }), Type.Object({ label: Type.String(), required: Type.Boolean(), description: Type.Optional(Type.Union([Type.String(), Type.Null()])), unified_key: Type.Optional(Type.Union([Type.Union([Type.Literal("first_name"), Type.Literal("last_name"), Type.Literal("date_of_birth"), Type.Literal("gender"), Type.Literal("home_address.city"), Type.Literal("home_address.country"), Type.Literal("home_address.state"), Type.Literal("home_address.street_1"), Type.Literal("home_address.street_2"), Type.Literal("home_address.zip_code"), Type.Literal("job_title"), Type.Literal("legal_entity_id"), Type.Literal("location_id"), Type.Literal("mobile_phone_number"), Type.Literal("home_phone_number"), Type.Literal("nationality"), Type.Literal("start_date"), Type.Literal("work_email"), Type.Literal("private_email"), Type.Literal("yearly_salary")]), Type.Null()])), type: Type.String(), file_restrictions: Type.Object({ accepted_mime_types: Type.Array(Type.String()), max_file_size: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])) }) })])) }), warnings: Type.Array(Type.Object({ message: Type.String() })) });

export type PostHrisEmployeesFormPositiveResponse = Static<typeof PostHrisEmployeesFormPositiveResponse>;
export const PostHrisEmployeesFormPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ id: Type.Union([Type.String(), Type.Null()]), remote_id: Type.Union([Type.String(), Type.Null()]), prehire: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]) }) }), warnings: Type.Array(Type.Object({ message: Type.String() })) });

export type Schema6 = Static<typeof Schema6>;
export const Schema6 = Type.Recursive((This) => Type.Array(Type.Unsafe(() => Schema4)));

export type Schema4 = Static<typeof Schema4>;
export const Schema4 = Type.Recursive((This) => Type.Union([Type.String(), Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Boolean(), Type.Unsafe(() => Schema5), Type.Unsafe(() => Schema6)]));

export type Schema5 = Static<typeof Schema5>;
export const Schema5 = Type.Recursive((This) => Type.Record(Type.String(), Type.Unsafe(() => Schema4)));

export type Schema3 = Static<typeof Schema3>;
export const Schema3 = Type.Record(Type.String(), Type.Unsafe(() => Schema4));

export type PostHrisEmployeesFormRequestBody = Static<typeof PostHrisEmployeesFormRequestBody>;
export const PostHrisEmployeesFormRequestBody = Type.Object({ properties: Schema3 });

export type PatchHrisEmployeesEmployeeIdParameterEmployeeId = Static<typeof PatchHrisEmployeesEmployeeIdParameterEmployeeId>;
export const PatchHrisEmployeesEmployeeIdParameterEmployeeId = Type.String();

export type PatchHrisEmployeesEmployeeIdPositiveResponse = Static<typeof PatchHrisEmployeesEmployeeIdPositiveResponse>;
export const PatchHrisEmployeesEmployeeIdPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ id: Type.String(), remote_id: Type.String(), employee_number: Type.Union([Type.String(), Type.Null()]), first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), nationality: Type.Union([Type.String(), Type.Null()]), display_full_name: Type.Union([Type.String(), Type.Null()]), job_title: Type.Union([Type.String(), Type.Null()]), work_email: Type.Optional(Type.Union([Type.String({ pattern: "^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$" }), Type.Null()])), personal_email: Type.Optional(Type.Union([Type.String({ pattern: "^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$" }), Type.Null()])), mobile_phone_number: Type.Union([Type.String(), Type.Null()]), ssn: Type.Union([Type.String(), Type.Null()]), tax_id: Type.Union([Type.String(), Type.Null()]), gender: Type.Optional(Type.Union([Type.Union([Type.Literal("MALE"), Type.Literal("FEMALE"), Type.Literal("NON_BINARY"), Type.Literal("NOT_SPECIFIED")]), Type.String(), Type.Null()])), ethnicity: Type.Optional(Type.Union([Type.Union([Type.Literal("WHITE"), Type.Literal("ASIAN"), Type.Literal("HISPANIC_LATINO"), Type.Literal("HAWAIIAN"), Type.Literal("NATIVE_AMERICAN"), Type.Literal("BLACK_AFRICAN_AMERICAN"), Type.Literal("MULTIPLE_ETHNICITIES"), Type.Literal("DECLINE_TO_SPECIFY")]), Type.String(), Type.Null()])), marital_status: Type.Optional(Type.Union([Type.Union([Type.Literal("SINGLE"), Type.Literal("MARRIED"), Type.Literal("DOMESTIC_PARTNERSHIP"), Type.Literal("WIDOWED"), Type.Literal("DIVORCED"), Type.Literal("SEPARATED"), Type.Literal("NOT_MARRIED")]), Type.String(), Type.Null()])), employment_status: Type.Optional(Type.Union([Type.Union([Type.Literal("ACTIVE"), Type.Literal("PENDING"), Type.Literal("INACTIVE"), Type.Literal("LEAVE")]), Type.String(), Type.Null()])), employment_type: Type.Optional(Type.Union([Type.Union([Type.Literal("FULL_TIME"), Type.Literal("PART_TIME"), Type.Literal("CONTRACT"), Type.Literal("INTERNSHIP"), Type.Literal("FREELANCE"), Type.Literal("WORKING_STUDENT"), Type.Literal("APPRENTICESHIP"), Type.Literal("TRAINING")]), Type.String(), Type.Null()])), weekly_hours: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), avatar: Type.Union([Type.String(), Type.Null()]), work_location_id: Type.Union([Type.String(), Type.Null()]), legal_entity_id: Type.Union([Type.String(), Type.Null()]), manager_id: Type.Union([Type.String(), Type.Null()]), home_address: Type.Optional(Type.Union([Type.Partial(Type.Object({ city: Type.Union([Type.String(), Type.Null()]), country: Type.Union([Type.String(), Type.Null()]), raw: Type.Union([Type.String(), Type.Null()]), state: Type.Union([Type.String(), Type.Null()]), street_1: Type.Union([Type.String(), Type.Null()]), street_2: Type.Union([Type.String(), Type.Null()]), zip_code: Type.Union([Type.String(), Type.Null()]) })), Type.Null()])), bank_accounts: Type.Optional(Type.Union([Type.Array(Type.Partial(Type.Object({ iban: Type.Union([Type.String(), Type.Null()]), bic: Type.Union([Type.String(), Type.Null()]), account_number: Type.Union([Type.String(), Type.Null()]), holder_name: Type.Union([Type.String(), Type.Null()]), bank_name: Type.Union([Type.String(), Type.Null()]), domestic_bank_routing: Type.Union([Type.Object({ number: Type.String(), type: Type.Union([Type.Union([Type.Literal("GB_SORT_CODE"), Type.Literal("DE_BANKLEITZAHL"), Type.Literal("US_ABA_ROUTING_TRANSIT_NUMBER"), Type.Literal("CA_ROUTING_NUMBER"), Type.Literal("AU_BSB_CODE"), Type.Literal("FR_RIB")]), Type.Null()]) }), Type.Null()]) }))), Type.Null()])), date_of_birth: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), start_date: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), termination_date: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_created_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]) }), warnings: Type.Array(Type.Object({ message: Type.String() })) });

export type PatchHrisEmployeesEmployeeIdRequestBody = Static<typeof PatchHrisEmployeesEmployeeIdRequestBody>;
export const PatchHrisEmployeesEmployeeIdRequestBody = Type.Object({ first_name: Type.Optional(Type.String()), last_name: Type.Optional(Type.String()), work_email: Type.String({ format: "email" }), gender: Type.Optional(Type.Union([Type.Literal("MALE"), Type.Literal("FEMALE"), Type.Literal("NON_BINARY"), Type.Literal("NOT_SPECIFIED")])), job_title: Type.Optional(Type.String()), home_address: Type.Optional(Type.Partial(Type.Object({ street_1: Type.String(), street_2: Type.String(), city: Type.String(), state: Type.String(), zip_code: Type.String(), country: Type.String({ pattern: "^[A-Z]{2}$" }) }))), date_of_birth: Type.Optional(Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" })), mobile_phone_number: Type.Optional(Type.String()), home_phone_number: Type.Optional(Type.String()), nationality: Type.Optional(Type.String({ pattern: "^[A-Z]{2}$" })), start_date: Type.Optional(Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" })), legal_entity_id: Type.Optional(Type.String()), location_id: Type.Optional(Type.String()), remote_fields: Type.Optional(Type.Partial(Type.Object({ humaans: Type.Partial(Type.Object({ employee: Type.Record(Type.String(), Type.Unknown()) })), hibob: Type.Partial(Type.Object({ employee: Type.Record(Type.String(), Type.Unknown()) })), sympa: Type.Partial(Type.Object({ GenericNewHire: Type.Record(Type.String(), Type.Unknown()) })), silae: Type.Partial(Type.Object({ siret: Type.String(), employee: Type.Record(Type.String(), Type.Unknown()), employment: Type.Record(Type.String(), Type.Unknown()) })), peoplehr: Type.Partial(Type.Object({ job_role_effective_date: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }), department: Type.String() })), zohopeople: Type.Partial(Type.Object({ employee_id: Type.String({ minLength: 1 }) })), workday: Type.Partial(Type.Object({ job_requisition_id: Type.String(), position_id: Type.String(), ssn: Type.String(), bank_account: Type.Object({ iban: Type.String(), bic: Type.String(), bank_name: Type.String() }) })), deel: Type.Object({ candidate_id: Type.String(), candidate_link: Type.String() }), bamboohr: Type.Partial(Type.Object({ employee: Type.Record(Type.String(), Type.Unknown()) })), oracle: Type.Object({ group_id: Type.String(), department_id: Type.String() }), adpworkforcenow: Type.Object({ onboarding_template_code: Type.String(), applicant_payroll_profile_group_code: Type.String(), manager_position_id: Type.Optional(Type.String()), home_organization_unit_code: Type.Optional(Type.String()), personal_email: Type.Optional(Type.String()) }), azuread: Type.Object({ password: Type.String() }), paycor: Type.Object({ paygroupRemoteId: Type.String(), departmentRemoteId: Type.String() }), planday: Type.Object({ department_remote_id: Type.String() }), dayforce: Type.Object({ social_security_number: Type.String(), pay_type: Type.String(), pay_class: Type.String(), pay_group: Type.String(), base_rate: Type.Number({ minimum: -1.7976931348623157e+308 }), role: Type.String(), location: Type.String(), department: Type.String(), job: Type.String(), country: Type.String() }) }))), ssn: Type.Optional(Type.String()), marital_status: Type.Optional(Type.Union([Type.Literal("SINGLE"), Type.Literal("MARRIED"), Type.Literal("DOMESTIC_PARTNERSHIP"), Type.Literal("WIDOWED"), Type.Literal("DIVORCED"), Type.Literal("SEPARATED"), Type.Literal("NOT_MARRIED")])), termination_date: Type.Optional(Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" })), tax_id: Type.Optional(Type.String()) });

export type PostHrisEmployeesEmployeeIdDocumentsParameterEmployeeId = Static<typeof PostHrisEmployeesEmployeeIdDocumentsParameterEmployeeId>;
export const PostHrisEmployeesEmployeeIdDocumentsParameterEmployeeId = Type.String();

export type PostHrisEmployeesEmployeeIdDocumentsPositiveResponse = Static<typeof PostHrisEmployeesEmployeeIdDocumentsPositiveResponse>;
export const PostHrisEmployeesEmployeeIdDocumentsPositiveResponse = Type.Object({ status: Type.String(), data: Type.Record(Type.String(), Type.Unknown()), warnings: Type.Array(Type.Object({ message: Type.String() })) });

export type PostHrisEmployeesEmployeeIdDocumentsRequestBody = Static<typeof PostHrisEmployeesEmployeeIdDocumentsRequestBody>;
export const PostHrisEmployeesEmployeeIdDocumentsRequestBody = Type.Object({ category_id: Type.String(), document: Type.Object({ name: Type.String(), content_type: Type.Optional(Type.String({ pattern: "^[\\w.-]+\\/[\\w.-]+$" })), data_url: Type.Optional(Type.String({ format: "uri" })), data: Type.Optional(Type.String()) }) });

export type GetHrisEmployeeDocumentCategoriesParameterCursor = Static<typeof GetHrisEmployeeDocumentCategoriesParameterCursor>;
export const GetHrisEmployeeDocumentCategoriesParameterCursor = Type.String();

export type GetHrisEmployeeDocumentCategoriesParameterPageSize = Static<typeof GetHrisEmployeeDocumentCategoriesParameterPageSize>;
export const GetHrisEmployeeDocumentCategoriesParameterPageSize = Type.Integer({ minimum: 1, maximum: 250 });

export type GetHrisEmployeeDocumentCategoriesParameterUpdatedAfter = Static<typeof GetHrisEmployeeDocumentCategoriesParameterUpdatedAfter>;
export const GetHrisEmployeeDocumentCategoriesParameterUpdatedAfter = Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" });

export type GetHrisEmployeeDocumentCategoriesParameterIncludeDeleted = Static<typeof GetHrisEmployeeDocumentCategoriesParameterIncludeDeleted>;
export const GetHrisEmployeeDocumentCategoriesParameterIncludeDeleted = Type.Union([Type.Literal("true"), Type.Literal("false")]);

export type GetHrisEmployeeDocumentCategoriesParameterIgnoreUnsupportedFilters = Static<typeof GetHrisEmployeeDocumentCategoriesParameterIgnoreUnsupportedFilters>;
export const GetHrisEmployeeDocumentCategoriesParameterIgnoreUnsupportedFilters = Type.Union([Type.Literal("true"), Type.Literal("false")]);

export type GetHrisEmployeeDocumentCategoriesParameterIds = Static<typeof GetHrisEmployeeDocumentCategoriesParameterIds>;
export const GetHrisEmployeeDocumentCategoriesParameterIds = Type.String();

export type GetHrisEmployeeDocumentCategoriesParameterRemoteIds = Static<typeof GetHrisEmployeeDocumentCategoriesParameterRemoteIds>;
export const GetHrisEmployeeDocumentCategoriesParameterRemoteIds = Type.String();

export type GetHrisEmployeeDocumentCategoriesPositiveResponse = Static<typeof GetHrisEmployeeDocumentCategoriesPositiveResponse>;
export const GetHrisEmployeeDocumentCategoriesPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), name: Type.Union([Type.String(), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]) })) }) });

export type GetHrisTeamsParameterCursor = Static<typeof GetHrisTeamsParameterCursor>;
export const GetHrisTeamsParameterCursor = Type.String();

export type GetHrisTeamsParameterPageSize = Static<typeof GetHrisTeamsParameterPageSize>;
export const GetHrisTeamsParameterPageSize = Type.Integer({ minimum: 1, maximum: 250 });

export type GetHrisTeamsParameterUpdatedAfter = Static<typeof GetHrisTeamsParameterUpdatedAfter>;
export const GetHrisTeamsParameterUpdatedAfter = Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" });

export type GetHrisTeamsParameterIncludeDeleted = Static<typeof GetHrisTeamsParameterIncludeDeleted>;
export const GetHrisTeamsParameterIncludeDeleted = Type.Union([Type.Literal("true"), Type.Literal("false")]);

export type GetHrisTeamsParameterIgnoreUnsupportedFilters = Static<typeof GetHrisTeamsParameterIgnoreUnsupportedFilters>;
export const GetHrisTeamsParameterIgnoreUnsupportedFilters = Type.Union([Type.Literal("true"), Type.Literal("false")]);

export type GetHrisTeamsParameterIds = Static<typeof GetHrisTeamsParameterIds>;
export const GetHrisTeamsParameterIds = Type.String();

export type GetHrisTeamsParameterRemoteIds = Static<typeof GetHrisTeamsParameterRemoteIds>;
export const GetHrisTeamsParameterRemoteIds = Type.String();

export type GetHrisTeamsPositiveResponse = Static<typeof GetHrisTeamsPositiveResponse>;
export const GetHrisTeamsPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.String(), name: Type.Union([Type.String(), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), type: Type.Union([Type.Union([Type.Literal("DEPARTMENT"), Type.Literal("TEAM"), Type.Literal("COST_CENTER")]), Type.Null()]), parent_id: Type.Union([Type.String(), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]) })) }) });

export type GetHrisGroupsParameterCursor = Static<typeof GetHrisGroupsParameterCursor>;
export const GetHrisGroupsParameterCursor = Type.String();

export type GetHrisGroupsParameterPageSize = Static<typeof GetHrisGroupsParameterPageSize>;
export const GetHrisGroupsParameterPageSize = Type.Integer({ minimum: 1, maximum: 250 });

export type GetHrisGroupsParameterUpdatedAfter = Static<typeof GetHrisGroupsParameterUpdatedAfter>;
export const GetHrisGroupsParameterUpdatedAfter = Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" });

export type GetHrisGroupsParameterIncludeDeleted = Static<typeof GetHrisGroupsParameterIncludeDeleted>;
export const GetHrisGroupsParameterIncludeDeleted = Type.Union([Type.Literal("true"), Type.Literal("false")]);

export type GetHrisGroupsParameterIgnoreUnsupportedFilters = Static<typeof GetHrisGroupsParameterIgnoreUnsupportedFilters>;
export const GetHrisGroupsParameterIgnoreUnsupportedFilters = Type.Union([Type.Literal("true"), Type.Literal("false")]);

export type GetHrisGroupsParameterIds = Static<typeof GetHrisGroupsParameterIds>;
export const GetHrisGroupsParameterIds = Type.String();

export type GetHrisGroupsParameterRemoteIds = Static<typeof GetHrisGroupsParameterRemoteIds>;
export const GetHrisGroupsParameterRemoteIds = Type.String();

export type GetHrisGroupsParameterTypes = Static<typeof GetHrisGroupsParameterTypes>;
export const GetHrisGroupsParameterTypes = Type.String();

export type GetHrisGroupsParameterNameContains = Static<typeof GetHrisGroupsParameterNameContains>;
export const GetHrisGroupsParameterNameContains = Type.String();

export type GetHrisGroupsPositiveResponse = Static<typeof GetHrisGroupsPositiveResponse>;
export const GetHrisGroupsPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.String(), name: Type.Union([Type.String(), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), type: Type.Union([Type.Union([Type.Literal("DEPARTMENT"), Type.Literal("TEAM"), Type.Literal("COST_CENTER")]), Type.Null()]), parent_id: Type.Union([Type.String(), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]) })) }) });

export type GetHrisEmploymentsParameterCursor = Static<typeof GetHrisEmploymentsParameterCursor>;
export const GetHrisEmploymentsParameterCursor = Type.String();

export type GetHrisEmploymentsParameterPageSize = Static<typeof GetHrisEmploymentsParameterPageSize>;
export const GetHrisEmploymentsParameterPageSize = Type.Integer({ minimum: 1, maximum: 250 });

export type GetHrisEmploymentsParameterUpdatedAfter = Static<typeof GetHrisEmploymentsParameterUpdatedAfter>;
export const GetHrisEmploymentsParameterUpdatedAfter = Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" });

export type GetHrisEmploymentsParameterIncludeDeleted = Static<typeof GetHrisEmploymentsParameterIncludeDeleted>;
export const GetHrisEmploymentsParameterIncludeDeleted = Type.Union([Type.Literal("true"), Type.Literal("false")]);

export type GetHrisEmploymentsParameterIgnoreUnsupportedFilters = Static<typeof GetHrisEmploymentsParameterIgnoreUnsupportedFilters>;
export const GetHrisEmploymentsParameterIgnoreUnsupportedFilters = Type.Union([Type.Literal("true"), Type.Literal("false")]);

export type GetHrisEmploymentsParameterIds = Static<typeof GetHrisEmploymentsParameterIds>;
export const GetHrisEmploymentsParameterIds = Type.String();

export type GetHrisEmploymentsParameterRemoteIds = Static<typeof GetHrisEmploymentsParameterRemoteIds>;
export const GetHrisEmploymentsParameterRemoteIds = Type.String();

export type GetHrisEmploymentsPositiveResponse = Static<typeof GetHrisEmploymentsPositiveResponse>;
export const GetHrisEmploymentsPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), employee_id: Type.String(), job_title: Type.Union([Type.String(), Type.Null()]), pay_rate: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), pay_period: Type.Optional(Type.Union([Type.Union([Type.Literal("HOUR"), Type.Literal("DAY"), Type.Literal("WEEK"), Type.Literal("TWO_WEEKS"), Type.Literal("HALF_MONTH"), Type.Literal("MONTH"), Type.Literal("TWO_MONTHS"), Type.Literal("QUARTER"), Type.Literal("HALF_YEAR"), Type.Literal("YEAR")]), Type.String(), Type.Null()])), pay_frequency: Type.Optional(Type.Union([Type.Union([Type.Literal("DAILY"), Type.Literal("WEEKLY"), Type.Literal("BIWEEKLY"), Type.Literal("MONTHLY"), Type.Literal("SEMIMONTHLY"), Type.Literal("QUARTERLY"), Type.Literal("SEMIANNUALLY"), Type.Literal("ANNUALLY"), Type.Literal("PRO_RATA")]), Type.String(), Type.Null()])), employment_type: Type.Optional(Type.Union([Type.Union([Type.Literal("FULL_TIME"), Type.Literal("PART_TIME"), Type.Literal("CONTRACT"), Type.Literal("INTERNSHIP"), Type.Literal("FREELANCE"), Type.Literal("WORKING_STUDENT"), Type.Literal("APPRENTICESHIP"), Type.Literal("TRAINING")]), Type.String(), Type.Null()])), pay_currency: Type.Union([Type.String(), Type.Null()]), effective_date: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), custom_fields: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), integration_fields: Type.Array(Type.Object({ id: Type.String(), key: Type.String(), type: Type.Union([Type.Literal("DEFAULT"), Type.Literal("CUSTOM")]), value: Type.Optional(Type.Null()), label: Type.Union([Type.String(), Type.Null()]) })) })) }) });

export type GetHrisLocationsParameterCursor = Static<typeof GetHrisLocationsParameterCursor>;
export const GetHrisLocationsParameterCursor = Type.String();

export type GetHrisLocationsParameterPageSize = Static<typeof GetHrisLocationsParameterPageSize>;
export const GetHrisLocationsParameterPageSize = Type.Integer({ minimum: 1, maximum: 250 });

export type GetHrisLocationsParameterUpdatedAfter = Static<typeof GetHrisLocationsParameterUpdatedAfter>;
export const GetHrisLocationsParameterUpdatedAfter = Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" });

export type GetHrisLocationsParameterIncludeDeleted = Static<typeof GetHrisLocationsParameterIncludeDeleted>;
export const GetHrisLocationsParameterIncludeDeleted = Type.Union([Type.Literal("true"), Type.Literal("false")]);

export type GetHrisLocationsParameterIgnoreUnsupportedFilters = Static<typeof GetHrisLocationsParameterIgnoreUnsupportedFilters>;
export const GetHrisLocationsParameterIgnoreUnsupportedFilters = Type.Union([Type.Literal("true"), Type.Literal("false")]);

export type GetHrisLocationsParameterIds = Static<typeof GetHrisLocationsParameterIds>;
export const GetHrisLocationsParameterIds = Type.String();

export type GetHrisLocationsParameterRemoteIds = Static<typeof GetHrisLocationsParameterRemoteIds>;
export const GetHrisLocationsParameterRemoteIds = Type.String();

export type GetHrisLocationsParameterNameContains = Static<typeof GetHrisLocationsParameterNameContains>;
export const GetHrisLocationsParameterNameContains = Type.String();

export type GetHrisLocationsPositiveResponse = Static<typeof GetHrisLocationsPositiveResponse>;
export const GetHrisLocationsPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), name: Type.Union([Type.String(), Type.Null()]), address: Type.Optional(Type.Union([Type.Partial(Type.Object({ city: Type.Union([Type.String(), Type.Null()]), country: Type.Union([Type.String(), Type.Null()]), raw: Type.Union([Type.String(), Type.Null()]), state: Type.Union([Type.String(), Type.Null()]), street_1: Type.Union([Type.String(), Type.Null()]), street_2: Type.Union([Type.String(), Type.Null()]), zip_code: Type.Union([Type.String(), Type.Null()]) })), Type.Null()])), type: Type.Union([Type.String(), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]) })) }) });

export type GetHrisAbsenceTypesParameterCursor = Static<typeof GetHrisAbsenceTypesParameterCursor>;
export const GetHrisAbsenceTypesParameterCursor = Type.String();

export type GetHrisAbsenceTypesParameterPageSize = Static<typeof GetHrisAbsenceTypesParameterPageSize>;
export const GetHrisAbsenceTypesParameterPageSize = Type.Integer({ minimum: 1, maximum: 250 });

export type GetHrisAbsenceTypesParameterUpdatedAfter = Static<typeof GetHrisAbsenceTypesParameterUpdatedAfter>;
export const GetHrisAbsenceTypesParameterUpdatedAfter = Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" });

export type GetHrisAbsenceTypesParameterIncludeDeleted = Static<typeof GetHrisAbsenceTypesParameterIncludeDeleted>;
export const GetHrisAbsenceTypesParameterIncludeDeleted = Type.Union([Type.Literal("true"), Type.Literal("false")]);

export type GetHrisAbsenceTypesParameterIgnoreUnsupportedFilters = Static<typeof GetHrisAbsenceTypesParameterIgnoreUnsupportedFilters>;
export const GetHrisAbsenceTypesParameterIgnoreUnsupportedFilters = Type.Union([Type.Literal("true"), Type.Literal("false")]);

export type GetHrisAbsenceTypesParameterIds = Static<typeof GetHrisAbsenceTypesParameterIds>;
export const GetHrisAbsenceTypesParameterIds = Type.String();

export type GetHrisAbsenceTypesParameterRemoteIds = Static<typeof GetHrisAbsenceTypesParameterRemoteIds>;
export const GetHrisAbsenceTypesParameterRemoteIds = Type.String();

export type GetHrisAbsenceTypesPositiveResponse = Static<typeof GetHrisAbsenceTypesPositiveResponse>;
export const GetHrisAbsenceTypesPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.String(), name: Type.Union([Type.String(), Type.Null()]), unit: Type.Union([Type.Union([Type.Literal("HOURS"), Type.Literal("DAYS")]), Type.Null()]), half_days_supported: Type.Union([Type.Boolean(), Type.Null()]), exact_times_supported: Type.Union([Type.Boolean(), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]) })) }) });

export type GetHrisTimeOffBalancesParameterCursor = Static<typeof GetHrisTimeOffBalancesParameterCursor>;
export const GetHrisTimeOffBalancesParameterCursor = Type.String();

export type GetHrisTimeOffBalancesParameterPageSize = Static<typeof GetHrisTimeOffBalancesParameterPageSize>;
export const GetHrisTimeOffBalancesParameterPageSize = Type.Integer({ minimum: 1, maximum: 250 });

export type GetHrisTimeOffBalancesParameterUpdatedAfter = Static<typeof GetHrisTimeOffBalancesParameterUpdatedAfter>;
export const GetHrisTimeOffBalancesParameterUpdatedAfter = Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" });

export type GetHrisTimeOffBalancesParameterIncludeDeleted = Static<typeof GetHrisTimeOffBalancesParameterIncludeDeleted>;
export const GetHrisTimeOffBalancesParameterIncludeDeleted = Type.Union([Type.Literal("true"), Type.Literal("false")]);

export type GetHrisTimeOffBalancesParameterIgnoreUnsupportedFilters = Static<typeof GetHrisTimeOffBalancesParameterIgnoreUnsupportedFilters>;
export const GetHrisTimeOffBalancesParameterIgnoreUnsupportedFilters = Type.Union([Type.Literal("true"), Type.Literal("false")]);

export type GetHrisTimeOffBalancesParameterIds = Static<typeof GetHrisTimeOffBalancesParameterIds>;
export const GetHrisTimeOffBalancesParameterIds = Type.String();

export type GetHrisTimeOffBalancesParameterRemoteIds = Static<typeof GetHrisTimeOffBalancesParameterRemoteIds>;
export const GetHrisTimeOffBalancesParameterRemoteIds = Type.String();

export type GetHrisTimeOffBalancesParameterEmployeeId = Static<typeof GetHrisTimeOffBalancesParameterEmployeeId>;
export const GetHrisTimeOffBalancesParameterEmployeeId = Type.String();

export type GetHrisTimeOffBalancesPositiveResponse = Static<typeof GetHrisTimeOffBalancesPositiveResponse>;
export const GetHrisTimeOffBalancesPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), employee_id: Type.String(), type_id: Type.String(), balance: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), balance_unit: Type.Union([Type.Union([Type.Literal("HOURS"), Type.Literal("DAYS")]), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), used: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), used_unit: Type.Union([Type.Union([Type.Literal("HOURS"), Type.Literal("DAYS")]), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), type: Type.Object({ id: Type.String(), remote_id: Type.String(), name: Type.Union([Type.String(), Type.Null()]), unit: Type.Union([Type.Union([Type.Literal("HOURS"), Type.Literal("DAYS")]), Type.Null()]), half_days_supported: Type.Union([Type.Boolean(), Type.Null()]), exact_times_supported: Type.Union([Type.Boolean(), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]) }) })) }) });

export type GetHrisAbsencesParameterCursor = Static<typeof GetHrisAbsencesParameterCursor>;
export const GetHrisAbsencesParameterCursor = Type.String();

export type GetHrisAbsencesParameterPageSize = Static<typeof GetHrisAbsencesParameterPageSize>;
export const GetHrisAbsencesParameterPageSize = Type.Integer({ minimum: 1, maximum: 250 });

export type GetHrisAbsencesParameterUpdatedAfter = Static<typeof GetHrisAbsencesParameterUpdatedAfter>;
export const GetHrisAbsencesParameterUpdatedAfter = Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" });

export type GetHrisAbsencesParameterIncludeDeleted = Static<typeof GetHrisAbsencesParameterIncludeDeleted>;
export const GetHrisAbsencesParameterIncludeDeleted = Type.Union([Type.Literal("true"), Type.Literal("false")]);

export type GetHrisAbsencesParameterIgnoreUnsupportedFilters = Static<typeof GetHrisAbsencesParameterIgnoreUnsupportedFilters>;
export const GetHrisAbsencesParameterIgnoreUnsupportedFilters = Type.Union([Type.Literal("true"), Type.Literal("false")]);

export type GetHrisAbsencesParameterIds = Static<typeof GetHrisAbsencesParameterIds>;
export const GetHrisAbsencesParameterIds = Type.String();

export type GetHrisAbsencesParameterRemoteIds = Static<typeof GetHrisAbsencesParameterRemoteIds>;
export const GetHrisAbsencesParameterRemoteIds = Type.String();

export type GetHrisAbsencesParameterDateFrom = Static<typeof GetHrisAbsencesParameterDateFrom>;
export const GetHrisAbsencesParameterDateFrom = Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" });

export type GetHrisAbsencesParameterDateUntil = Static<typeof GetHrisAbsencesParameterDateUntil>;
export const GetHrisAbsencesParameterDateUntil = Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" });

export type GetHrisAbsencesParameterTypeIds = Static<typeof GetHrisAbsencesParameterTypeIds>;
export const GetHrisAbsencesParameterTypeIds = Type.String();

export type GetHrisAbsencesParameterEmployeeId = Static<typeof GetHrisAbsencesParameterEmployeeId>;
export const GetHrisAbsencesParameterEmployeeId = Type.String();

export type GetHrisAbsencesParameterTimeFrom = Static<typeof GetHrisAbsencesParameterTimeFrom>;
export const GetHrisAbsencesParameterTimeFrom = Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" });

export type GetHrisAbsencesParameterTimeUntil = Static<typeof GetHrisAbsencesParameterTimeUntil>;
export const GetHrisAbsencesParameterTimeUntil = Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" });

export type GetHrisAbsencesPositiveResponse = Static<typeof GetHrisAbsencesPositiveResponse>;
export const GetHrisAbsencesPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), employee_id: Type.String(), approver_id: Type.Union([Type.String(), Type.Null()]), start_date: Type.Null(), end_date: Type.Null(), start_half_day: Type.Union([Type.Boolean(), Type.Null()]), end_half_day: Type.Union([Type.Boolean(), Type.Null()]), start_time: Type.Null(), end_time: Type.Null(), amount: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), unit: Type.Union([Type.Union([Type.Literal("HOURS"), Type.Literal("DAYS")]), Type.Null()]), status: Type.Optional(Type.Union([Type.Union([Type.Literal("REQUESTED"), Type.Literal("APPROVED"), Type.Literal("DECLINED"), Type.Literal("CANCELLED"), Type.Literal("DELETED")]), Type.String(), Type.Null()])), employee_note: Type.Union([Type.String(), Type.Null()]), type_id: Type.Union([Type.String(), Type.Null()]), remote_created_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_updated_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), type: Type.Union([Type.Object({ id: Type.String(), remote_id: Type.String(), name: Type.Union([Type.String(), Type.Null()]), unit: Type.Union([Type.Union([Type.Literal("HOURS"), Type.Literal("DAYS")]), Type.Null()]), half_days_supported: Type.Union([Type.Boolean(), Type.Null()]), exact_times_supported: Type.Union([Type.Boolean(), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]) }), Type.Null()]) })) }) });

export type PostHrisAbsencesPositiveResponse = Static<typeof PostHrisAbsencesPositiveResponse>;
export const PostHrisAbsencesPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), employee_id: Type.String(), approver_id: Type.Union([Type.String(), Type.Null()]), start_date: Type.Null(), end_date: Type.Null(), start_half_day: Type.Union([Type.Boolean(), Type.Null()]), end_half_day: Type.Union([Type.Boolean(), Type.Null()]), start_time: Type.Null(), end_time: Type.Null(), amount: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), unit: Type.Union([Type.Union([Type.Literal("HOURS"), Type.Literal("DAYS")]), Type.Null()]), status: Type.Optional(Type.Union([Type.Union([Type.Literal("REQUESTED"), Type.Literal("APPROVED"), Type.Literal("DECLINED"), Type.Literal("CANCELLED"), Type.Literal("DELETED")]), Type.String(), Type.Null()])), employee_note: Type.Union([Type.String(), Type.Null()]), type_id: Type.Union([Type.String(), Type.Null()]), remote_created_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_updated_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]) }), warnings: Type.Array(Type.Object({ message: Type.String() })) });

export type PostHrisAbsencesRequestBody = Static<typeof PostHrisAbsencesRequestBody>;
export const PostHrisAbsencesRequestBody = Type.Object({ employee_id: Type.String(), absence_type_id: Type.String(), status: Type.Optional(Type.Union([Type.Literal("REQUESTED"), Type.Literal("APPROVED")])), start_date: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }), end_date: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }), start_half_day: Type.Optional(Type.Boolean()), end_half_day: Type.Optional(Type.Boolean()), amount: Type.Optional(Type.Number({ minimum: 0 })), unit: Type.Optional(Type.Union([Type.Literal("HOURS"), Type.Literal("DAYS")])), employee_note: Type.Union([Type.String(), Type.Null()]), start_time: Type.Optional(Type.String({ pattern: "^(?:2[0-3]|[01]?\\d):[0-5]?\\d(:[0-5]?\\d)?$" })), end_time: Type.Optional(Type.String({ pattern: "^(?:2[0-3]|[01]?\\d):[0-5]?\\d(:[0-5]?\\d)?$" })), remote_fields: Type.Optional(Type.Partial(Type.Object({ a3innuvanomina: Type.Partial(Type.Object({ benefit_type_id: Type.Union([Type.Literal("Delegated Payment"), Type.Literal("No Right to Benefit"), Type.Literal("Direct payment")]) })), adpworkforcenow: Type.Partial(Type.Object({ employment_id: Type.String(), paid_leave: Type.Boolean() })) }))) });

export type DeleteHrisAbsencesAbsenceIdParameterAbsenceId = Static<typeof DeleteHrisAbsencesAbsenceIdParameterAbsenceId>;
export const DeleteHrisAbsencesAbsenceIdParameterAbsenceId = Type.String();

export type DeleteHrisAbsencesAbsenceIdPositiveResponse = Static<typeof DeleteHrisAbsencesAbsenceIdPositiveResponse>;
export const DeleteHrisAbsencesAbsenceIdPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), employee_id: Type.String(), approver_id: Type.Union([Type.String(), Type.Null()]), start_date: Type.Null(), end_date: Type.Null(), start_half_day: Type.Union([Type.Boolean(), Type.Null()]), end_half_day: Type.Union([Type.Boolean(), Type.Null()]), start_time: Type.Null(), end_time: Type.Null(), amount: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), unit: Type.Union([Type.Union([Type.Literal("HOURS"), Type.Literal("DAYS")]), Type.Null()]), status: Type.Optional(Type.Union([Type.Union([Type.Literal("REQUESTED"), Type.Literal("APPROVED"), Type.Literal("DECLINED"), Type.Literal("CANCELLED"), Type.Literal("DELETED")]), Type.String(), Type.Null()])), employee_note: Type.Union([Type.String(), Type.Null()]), type_id: Type.Union([Type.String(), Type.Null()]), remote_created_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_updated_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]) }), warnings: Type.Array(Type.Object({ message: Type.String() })) });

export type DeleteHrisAbsencesAbsenceIdRequestBody = Static<typeof DeleteHrisAbsencesAbsenceIdRequestBody>;
export const DeleteHrisAbsencesAbsenceIdRequestBody = Type.Partial(Type.Object({ remote_fields: Type.Partial(Type.Object({ adpworkforcenow: Type.Partial(Type.Object({ employment_id: Type.String() })) })) }));

export type GetHrisLegalEntitiesParameterCursor = Static<typeof GetHrisLegalEntitiesParameterCursor>;
export const GetHrisLegalEntitiesParameterCursor = Type.String();

export type GetHrisLegalEntitiesParameterPageSize = Static<typeof GetHrisLegalEntitiesParameterPageSize>;
export const GetHrisLegalEntitiesParameterPageSize = Type.Integer({ minimum: 1, maximum: 250 });

export type GetHrisLegalEntitiesParameterUpdatedAfter = Static<typeof GetHrisLegalEntitiesParameterUpdatedAfter>;
export const GetHrisLegalEntitiesParameterUpdatedAfter = Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" });

export type GetHrisLegalEntitiesParameterIncludeDeleted = Static<typeof GetHrisLegalEntitiesParameterIncludeDeleted>;
export const GetHrisLegalEntitiesParameterIncludeDeleted = Type.Union([Type.Literal("true"), Type.Literal("false")]);

export type GetHrisLegalEntitiesParameterIgnoreUnsupportedFilters = Static<typeof GetHrisLegalEntitiesParameterIgnoreUnsupportedFilters>;
export const GetHrisLegalEntitiesParameterIgnoreUnsupportedFilters = Type.Union([Type.Literal("true"), Type.Literal("false")]);

export type GetHrisLegalEntitiesParameterIds = Static<typeof GetHrisLegalEntitiesParameterIds>;
export const GetHrisLegalEntitiesParameterIds = Type.String();

export type GetHrisLegalEntitiesParameterRemoteIds = Static<typeof GetHrisLegalEntitiesParameterRemoteIds>;
export const GetHrisLegalEntitiesParameterRemoteIds = Type.String();

export type GetHrisLegalEntitiesParameterNameContains = Static<typeof GetHrisLegalEntitiesParameterNameContains>;
export const GetHrisLegalEntitiesParameterNameContains = Type.String();

export type GetHrisLegalEntitiesPositiveResponse = Static<typeof GetHrisLegalEntitiesPositiveResponse>;
export const GetHrisLegalEntitiesPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), name: Type.Union([Type.String(), Type.Null()]), address: Type.Optional(Type.Union([Type.Partial(Type.Object({ city: Type.Union([Type.String(), Type.Null()]), country: Type.Union([Type.String(), Type.Null()]), raw: Type.Union([Type.String(), Type.Null()]), state: Type.Union([Type.String(), Type.Null()]), street_1: Type.Union([Type.String(), Type.Null()]), street_2: Type.Union([Type.String(), Type.Null()]), zip_code: Type.Union([Type.String(), Type.Null()]) })), Type.Null()])), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]) })) }) });

export type GetHrisTimesheetsParameterCursor = Static<typeof GetHrisTimesheetsParameterCursor>;
export const GetHrisTimesheetsParameterCursor = Type.String();

export type GetHrisTimesheetsParameterPageSize = Static<typeof GetHrisTimesheetsParameterPageSize>;
export const GetHrisTimesheetsParameterPageSize = Type.Integer({ minimum: 1, maximum: 250 });

export type GetHrisTimesheetsParameterUpdatedAfter = Static<typeof GetHrisTimesheetsParameterUpdatedAfter>;
export const GetHrisTimesheetsParameterUpdatedAfter = Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" });

export type GetHrisTimesheetsParameterIncludeDeleted = Static<typeof GetHrisTimesheetsParameterIncludeDeleted>;
export const GetHrisTimesheetsParameterIncludeDeleted = Type.Union([Type.Literal("true"), Type.Literal("false")]);

export type GetHrisTimesheetsParameterIgnoreUnsupportedFilters = Static<typeof GetHrisTimesheetsParameterIgnoreUnsupportedFilters>;
export const GetHrisTimesheetsParameterIgnoreUnsupportedFilters = Type.Union([Type.Literal("true"), Type.Literal("false")]);

export type GetHrisTimesheetsParameterIds = Static<typeof GetHrisTimesheetsParameterIds>;
export const GetHrisTimesheetsParameterIds = Type.String();

export type GetHrisTimesheetsParameterRemoteIds = Static<typeof GetHrisTimesheetsParameterRemoteIds>;
export const GetHrisTimesheetsParameterRemoteIds = Type.String();

export type GetHrisTimesheetsParameterEmployeeId = Static<typeof GetHrisTimesheetsParameterEmployeeId>;
export const GetHrisTimesheetsParameterEmployeeId = Type.String();

export type GetHrisTimesheetsParameterStartedBefore = Static<typeof GetHrisTimesheetsParameterStartedBefore>;
export const GetHrisTimesheetsParameterStartedBefore = Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" });

export type GetHrisTimesheetsParameterStartedAfter = Static<typeof GetHrisTimesheetsParameterStartedAfter>;
export const GetHrisTimesheetsParameterStartedAfter = Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" });

export type GetHrisTimesheetsParameterEndedBefore = Static<typeof GetHrisTimesheetsParameterEndedBefore>;
export const GetHrisTimesheetsParameterEndedBefore = Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" });

export type GetHrisTimesheetsParameterEndedAfter = Static<typeof GetHrisTimesheetsParameterEndedAfter>;
export const GetHrisTimesheetsParameterEndedAfter = Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" });

export type GetHrisTimesheetsPositiveResponse = Static<typeof GetHrisTimesheetsPositiveResponse>;
export const GetHrisTimesheetsPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), employee_id: Type.String(), started_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), ended_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), timezone: Type.Union([Type.String({ pattern: "^[+-](?:0\\d|1[0-4]):[0-5]\\d$" }), Type.Null()]), payable_hours: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), unpaid_break_minutes: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), breaks: Type.Optional(Type.Union([Type.Array(Type.Object({ ended_at: Type.Union([Type.String({ format: "date-time" }), Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$" })]), paid: Type.Boolean(), started_at: Type.Union([Type.String({ format: "date-time" }), Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$" })]) })), Type.Null()])), approval_status: Type.Union([Type.String(), Type.Null()]), approved_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), comment: Type.Union([Type.String(), Type.Null()]), custom_fields: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), integration_fields: Type.Array(Type.Object({ id: Type.String(), key: Type.String(), type: Type.Union([Type.Literal("DEFAULT"), Type.Literal("CUSTOM")]), value: Type.Optional(Type.Null()), label: Type.Union([Type.String(), Type.Null()]) })), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]) })) }) });

export type GetHrisPerformanceReviewCyclesParameterCursor = Static<typeof GetHrisPerformanceReviewCyclesParameterCursor>;
export const GetHrisPerformanceReviewCyclesParameterCursor = Type.String();

export type GetHrisPerformanceReviewCyclesParameterPageSize = Static<typeof GetHrisPerformanceReviewCyclesParameterPageSize>;
export const GetHrisPerformanceReviewCyclesParameterPageSize = Type.Integer({ minimum: 1, maximum: 250 });

export type GetHrisPerformanceReviewCyclesParameterUpdatedAfter = Static<typeof GetHrisPerformanceReviewCyclesParameterUpdatedAfter>;
export const GetHrisPerformanceReviewCyclesParameterUpdatedAfter = Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" });

export type GetHrisPerformanceReviewCyclesParameterIncludeDeleted = Static<typeof GetHrisPerformanceReviewCyclesParameterIncludeDeleted>;
export const GetHrisPerformanceReviewCyclesParameterIncludeDeleted = Type.Union([Type.Literal("true"), Type.Literal("false")]);

export type GetHrisPerformanceReviewCyclesParameterIgnoreUnsupportedFilters = Static<typeof GetHrisPerformanceReviewCyclesParameterIgnoreUnsupportedFilters>;
export const GetHrisPerformanceReviewCyclesParameterIgnoreUnsupportedFilters = Type.Union([Type.Literal("true"), Type.Literal("false")]);

export type GetHrisPerformanceReviewCyclesParameterIds = Static<typeof GetHrisPerformanceReviewCyclesParameterIds>;
export const GetHrisPerformanceReviewCyclesParameterIds = Type.String();

export type GetHrisPerformanceReviewCyclesParameterRemoteIds = Static<typeof GetHrisPerformanceReviewCyclesParameterRemoteIds>;
export const GetHrisPerformanceReviewCyclesParameterRemoteIds = Type.String();

export type GetHrisPerformanceReviewCyclesPositiveResponse = Static<typeof GetHrisPerformanceReviewCyclesPositiveResponse>;
export const GetHrisPerformanceReviewCyclesPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.String(), name: Type.Union([Type.String(), Type.Null()]), review_period_start_date: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]) })) }) });

export type GetHrisPerformanceReviewsParameterCursor = Static<typeof GetHrisPerformanceReviewsParameterCursor>;
export const GetHrisPerformanceReviewsParameterCursor = Type.String();

export type GetHrisPerformanceReviewsParameterPageSize = Static<typeof GetHrisPerformanceReviewsParameterPageSize>;
export const GetHrisPerformanceReviewsParameterPageSize = Type.Integer({ minimum: 1, maximum: 250 });

export type GetHrisPerformanceReviewsParameterUpdatedAfter = Static<typeof GetHrisPerformanceReviewsParameterUpdatedAfter>;
export const GetHrisPerformanceReviewsParameterUpdatedAfter = Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" });

export type GetHrisPerformanceReviewsParameterIncludeDeleted = Static<typeof GetHrisPerformanceReviewsParameterIncludeDeleted>;
export const GetHrisPerformanceReviewsParameterIncludeDeleted = Type.Union([Type.Literal("true"), Type.Literal("false")]);

export type GetHrisPerformanceReviewsParameterIgnoreUnsupportedFilters = Static<typeof GetHrisPerformanceReviewsParameterIgnoreUnsupportedFilters>;
export const GetHrisPerformanceReviewsParameterIgnoreUnsupportedFilters = Type.Union([Type.Literal("true"), Type.Literal("false")]);

export type GetHrisPerformanceReviewsParameterIds = Static<typeof GetHrisPerformanceReviewsParameterIds>;
export const GetHrisPerformanceReviewsParameterIds = Type.String();

export type GetHrisPerformanceReviewsParameterRemoteIds = Static<typeof GetHrisPerformanceReviewsParameterRemoteIds>;
export const GetHrisPerformanceReviewsParameterRemoteIds = Type.String();

export type GetHrisPerformanceReviewsParameterTypes = Static<typeof GetHrisPerformanceReviewsParameterTypes>;
export const GetHrisPerformanceReviewsParameterTypes = Type.String();

export type GetHrisPerformanceReviewsParameterReviewCycleIds = Static<typeof GetHrisPerformanceReviewsParameterReviewCycleIds>;
export const GetHrisPerformanceReviewsParameterReviewCycleIds = Type.String();

export type GetHrisPerformanceReviewsParameterRevieweeIds = Static<typeof GetHrisPerformanceReviewsParameterRevieweeIds>;
export const GetHrisPerformanceReviewsParameterRevieweeIds = Type.String();

export type GetHrisPerformanceReviewsPositiveResponse = Static<typeof GetHrisPerformanceReviewsPositiveResponse>;
export const GetHrisPerformanceReviewsPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.String(), type: Type.Union([Type.Union([Type.Literal("MANAGER"), Type.Literal("DIRECT_REPORT"), Type.Literal("PEER"), Type.Literal("SELF")]), Type.Null()]), summary_comment: Type.Union([Type.String(), Type.Null()]), summary_rating: Type.Optional(Type.Union([Type.Object({ type: Type.String(), min: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), max: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), value: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]) }), Type.Object({ type: Type.String(), ordered_options: Type.Union([Type.Array(Type.String()), Type.Null()]), value: Type.Union([Type.String(), Type.Null()]) }), Type.Null()])), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), reviewee: Type.Object({ id: Type.String(), remote_id: Type.String(), first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), display_full_name: Type.Union([Type.String(), Type.Null()]), work_email: Type.Optional(Type.Union([Type.String({ pattern: "^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$" }), Type.Null()])), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]) }), reviewer: Type.Union([Type.Object({ id: Type.String(), remote_id: Type.String(), first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), display_full_name: Type.Union([Type.String(), Type.Null()]), work_email: Type.Optional(Type.Union([Type.String({ pattern: "^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$" }), Type.Null()])), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]) }), Type.Null()]), review_cycle: Type.Union([Type.Object({ id: Type.String(), remote_id: Type.String(), name: Type.Union([Type.String(), Type.Null()]), review_period_start_date: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]) }), Type.Null()]) })) }) });

export type GetHrisSkillsParameterIds = Static<typeof GetHrisSkillsParameterIds>;
export const GetHrisSkillsParameterIds = Type.String();

export type GetHrisSkillsParameterRemoteIds = Static<typeof GetHrisSkillsParameterRemoteIds>;
export const GetHrisSkillsParameterRemoteIds = Type.String();

export type GetHrisSkillsParameterNameContains = Static<typeof GetHrisSkillsParameterNameContains>;
export const GetHrisSkillsParameterNameContains = Type.String();

export type GetHrisSkillsPositiveResponse = Static<typeof GetHrisSkillsPositiveResponse>;
export const GetHrisSkillsPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.String(), name: Type.String(), description: Type.Union([Type.String(), Type.Null()]), ordered_levels: Type.Union([Type.Array(Type.String()), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]) })) }) });

export type PostHrisSkillsPositiveResponse = Static<typeof PostHrisSkillsPositiveResponse>;
export const PostHrisSkillsPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ id: Type.String(), remote_id: Type.String(), name: Type.String(), description: Type.Union([Type.String(), Type.Null()]), ordered_levels: Type.Union([Type.Array(Type.String()), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]) }) });

export type PostHrisSkillsRequestBody = Static<typeof PostHrisSkillsRequestBody>;
export const PostHrisSkillsRequestBody = Type.Object({ name: Type.String(), levels: Type.Optional(Type.Array(Type.String())) });

export type PatchHrisSkillsSkillIdParameterSkillId = Static<typeof PatchHrisSkillsSkillIdParameterSkillId>;
export const PatchHrisSkillsSkillIdParameterSkillId = Type.String();

export type PatchHrisSkillsSkillIdPositiveResponse = Static<typeof PatchHrisSkillsSkillIdPositiveResponse>;
export const PatchHrisSkillsSkillIdPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ id: Type.String(), remote_id: Type.String(), name: Type.String(), description: Type.Union([Type.String(), Type.Null()]), ordered_levels: Type.Union([Type.Array(Type.String()), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]) }) });

export type PatchHrisSkillsSkillIdRequestBody = Static<typeof PatchHrisSkillsSkillIdRequestBody>;
export const PatchHrisSkillsSkillIdRequestBody = Type.Partial(Type.Object({ name: Type.String(), levels: Type.Array(Type.String()) }));

export type DeleteHrisSkillsSkillIdParameterSkillId = Static<typeof DeleteHrisSkillsSkillIdParameterSkillId>;
export const DeleteHrisSkillsSkillIdParameterSkillId = Type.String();

export type DeleteHrisSkillsSkillIdPositiveResponse = Static<typeof DeleteHrisSkillsSkillIdPositiveResponse>;
export const DeleteHrisSkillsSkillIdPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ id: Type.String(), remote_id: Type.String(), name: Type.String(), description: Type.Union([Type.String(), Type.Null()]), ordered_levels: Type.Union([Type.Array(Type.String()), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]) }) });

export type DeleteHrisSkillsSkillIdRequestBody = Static<typeof DeleteHrisSkillsSkillIdRequestBody>;
export const DeleteHrisSkillsSkillIdRequestBody = Type.Partial(Type.Object({  }));

export type GetHrisEmployeeSkillAssignmentsParameterIds = Static<typeof GetHrisEmployeeSkillAssignmentsParameterIds>;
export const GetHrisEmployeeSkillAssignmentsParameterIds = Type.String();

export type GetHrisEmployeeSkillAssignmentsParameterRemoteIds = Static<typeof GetHrisEmployeeSkillAssignmentsParameterRemoteIds>;
export const GetHrisEmployeeSkillAssignmentsParameterRemoteIds = Type.String();

export type GetHrisEmployeeSkillAssignmentsParameterEmployeeIds = Static<typeof GetHrisEmployeeSkillAssignmentsParameterEmployeeIds>;
export const GetHrisEmployeeSkillAssignmentsParameterEmployeeIds = Type.String();

export type GetHrisEmployeeSkillAssignmentsParameterSkillIds = Static<typeof GetHrisEmployeeSkillAssignmentsParameterSkillIds>;
export const GetHrisEmployeeSkillAssignmentsParameterSkillIds = Type.String();

export type GetHrisEmployeeSkillAssignmentsPositiveResponse = Static<typeof GetHrisEmployeeSkillAssignmentsPositiveResponse>;
export const GetHrisEmployeeSkillAssignmentsPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), employee_id: Type.String(), skill_id: Type.String(), current_level: Type.Union([Type.String(), Type.Null()]) })) }) });

export type PostHrisEmployeeSkillAssignmentsPositiveResponse = Static<typeof PostHrisEmployeeSkillAssignmentsPositiveResponse>;
export const PostHrisEmployeeSkillAssignmentsPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ id: Type.String(), employee_id: Type.String(), skill_id: Type.String(), current_level: Type.Union([Type.String(), Type.Null()]) }) });

export type PostHrisEmployeeSkillAssignmentsRequestBody = Static<typeof PostHrisEmployeeSkillAssignmentsRequestBody>;
export const PostHrisEmployeeSkillAssignmentsRequestBody = Type.Object({ employee_id: Type.String(), skill_id: Type.String(), current_level: Type.Optional(Type.String()) });

export type PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId = Static<typeof PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId>;
export const PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId = Type.String();

export type PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse = Static<typeof PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse>;
export const PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ id: Type.String(), employee_id: Type.String(), skill_id: Type.String(), current_level: Type.Union([Type.String(), Type.Null()]) }) });

export type PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody = Static<typeof PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody>;
export const PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody = Type.Object({ current_level: Type.Union([Type.String(), Type.Null()]) });

export type DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId = Static<typeof DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId>;
export const DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId = Type.String();

export type DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse = Static<typeof DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse>;
export const DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ id: Type.String(), employee_id: Type.String(), skill_id: Type.String(), current_level: Type.Union([Type.String(), Type.Null()]) }) });

export type DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody = Static<typeof DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody>;
export const DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody = Type.Partial(Type.Object({  }));

export type GetHrisStaffingEntitiesParameterCursor = Static<typeof GetHrisStaffingEntitiesParameterCursor>;
export const GetHrisStaffingEntitiesParameterCursor = Type.String();

export type GetHrisStaffingEntitiesParameterPageSize = Static<typeof GetHrisStaffingEntitiesParameterPageSize>;
export const GetHrisStaffingEntitiesParameterPageSize = Type.Integer({ minimum: 1, maximum: 250 });

export type GetHrisStaffingEntitiesParameterUpdatedAfter = Static<typeof GetHrisStaffingEntitiesParameterUpdatedAfter>;
export const GetHrisStaffingEntitiesParameterUpdatedAfter = Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" });

export type GetHrisStaffingEntitiesParameterIncludeDeleted = Static<typeof GetHrisStaffingEntitiesParameterIncludeDeleted>;
export const GetHrisStaffingEntitiesParameterIncludeDeleted = Type.Union([Type.Literal("true"), Type.Literal("false")]);

export type GetHrisStaffingEntitiesParameterIgnoreUnsupportedFilters = Static<typeof GetHrisStaffingEntitiesParameterIgnoreUnsupportedFilters>;
export const GetHrisStaffingEntitiesParameterIgnoreUnsupportedFilters = Type.Union([Type.Literal("true"), Type.Literal("false")]);

export type GetHrisStaffingEntitiesParameterIds = Static<typeof GetHrisStaffingEntitiesParameterIds>;
export const GetHrisStaffingEntitiesParameterIds = Type.String();

export type GetHrisStaffingEntitiesParameterRemoteIds = Static<typeof GetHrisStaffingEntitiesParameterRemoteIds>;
export const GetHrisStaffingEntitiesParameterRemoteIds = Type.String();

export type GetHrisStaffingEntitiesParameterModelTypes = Static<typeof GetHrisStaffingEntitiesParameterModelTypes>;
export const GetHrisStaffingEntitiesParameterModelTypes = Type.String();

export type GetHrisStaffingEntitiesParameterStatuses = Static<typeof GetHrisStaffingEntitiesParameterStatuses>;
export const GetHrisStaffingEntitiesParameterStatuses = Type.String();

export type GetHrisStaffingEntitiesPositiveResponse = Static<typeof GetHrisStaffingEntitiesPositiveResponse>;
export const GetHrisStaffingEntitiesPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.String(), name: Type.Union([Type.String(), Type.Null()]), model_type: Type.Union([Type.Union([Type.Literal("JOB"), Type.Literal("POSITION"), Type.Literal("REQUISITION")]), Type.Null()]), description: Type.Union([Type.String(), Type.Null()]), status: Type.Union([Type.Union([Type.Literal("OPEN_LIMITED"), Type.Literal("OPEN_UNLIMITED"), Type.Literal("PENDING"), Type.Literal("FROZEN"), Type.Literal("FILLED"), Type.Literal("CLOSED")]), Type.Null()]), employment_types: Type.Optional(Type.Union([Type.Array(Type.Object({ remote_label: Type.String(), unified_type: Type.Union([Type.Union([Type.Literal("FULL_TIME"), Type.Literal("PART_TIME"), Type.Literal("CONTRACT"), Type.Literal("INTERNSHIP"), Type.Literal("FREELANCE"), Type.Literal("WORKING_STUDENT"), Type.Literal("APPRENTICESHIP"), Type.Literal("TRAINING")]), Type.Null()]) })), Type.Null()])), number_of_openings: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), parent_id: Type.Union([Type.String(), Type.Null()]), remote_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]), remote_created_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_updated_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), custom_fields: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), integration_fields: Type.Array(Type.Object({ id: Type.String(), key: Type.String(), type: Type.Union([Type.Literal("DEFAULT"), Type.Literal("CUSTOM")]), value: Type.Optional(Type.Null()), label: Type.Union([Type.String(), Type.Null()]) })), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), locations: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), name: Type.Union([Type.String(), Type.Null()]), type: Type.Union([Type.String(), Type.Null()]) })), legal_entities: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), name: Type.Union([Type.String(), Type.Null()]) })), groups: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.String(), name: Type.Union([Type.String(), Type.Null()]), type: Type.Union([Type.Union([Type.Literal("DEPARTMENT"), Type.Literal("TEAM"), Type.Literal("COST_CENTER")]), Type.Null()]) })) })) }) });

export type GetAtsApplicationsParameterCursor = Static<typeof GetAtsApplicationsParameterCursor>;
export const GetAtsApplicationsParameterCursor = Type.String();

export type GetAtsApplicationsParameterPageSize = Static<typeof GetAtsApplicationsParameterPageSize>;
export const GetAtsApplicationsParameterPageSize = Type.Integer({ minimum: 1, maximum: 250 });

export type GetAtsApplicationsParameterUpdatedAfter = Static<typeof GetAtsApplicationsParameterUpdatedAfter>;
export const GetAtsApplicationsParameterUpdatedAfter = Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" });

export type GetAtsApplicationsParameterIncludeDeleted = Static<typeof GetAtsApplicationsParameterIncludeDeleted>;
export const GetAtsApplicationsParameterIncludeDeleted = Type.Union([Type.Literal("true"), Type.Literal("false")]);

export type GetAtsApplicationsParameterIgnoreUnsupportedFilters = Static<typeof GetAtsApplicationsParameterIgnoreUnsupportedFilters>;
export const GetAtsApplicationsParameterIgnoreUnsupportedFilters = Type.Union([Type.Literal("true"), Type.Literal("false")]);

export type GetAtsApplicationsParameterIds = Static<typeof GetAtsApplicationsParameterIds>;
export const GetAtsApplicationsParameterIds = Type.String();

export type GetAtsApplicationsParameterRemoteIds = Static<typeof GetAtsApplicationsParameterRemoteIds>;
export const GetAtsApplicationsParameterRemoteIds = Type.String();

export type GetAtsApplicationsParameterOutcome = Static<typeof GetAtsApplicationsParameterOutcome>;
export const GetAtsApplicationsParameterOutcome = Type.Union([Type.Literal("PENDING"), Type.Literal("HIRED"), Type.Literal("DECLINED")]);

export type GetAtsApplicationsParameterOutcomes = Static<typeof GetAtsApplicationsParameterOutcomes>;
export const GetAtsApplicationsParameterOutcomes = Type.String();

export type GetAtsApplicationsParameterJobIds = Static<typeof GetAtsApplicationsParameterJobIds>;
export const GetAtsApplicationsParameterJobIds = Type.String();

export type GetAtsApplicationsParameterJobRemoteIds = Static<typeof GetAtsApplicationsParameterJobRemoteIds>;
export const GetAtsApplicationsParameterJobRemoteIds = Type.String();

export type GetAtsApplicationsParameterCurrentStageIds = Static<typeof GetAtsApplicationsParameterCurrentStageIds>;
export const GetAtsApplicationsParameterCurrentStageIds = Type.String();

export type GetAtsApplicationsParameterRemoteCreatedAfter = Static<typeof GetAtsApplicationsParameterRemoteCreatedAfter>;
export const GetAtsApplicationsParameterRemoteCreatedAfter = Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" });

export type GetAtsApplicationsPositiveResponse = Static<typeof GetAtsApplicationsPositiveResponse>;
export const GetAtsApplicationsPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), outcome: Type.Union([Type.Union([Type.Literal("PENDING"), Type.Literal("HIRED"), Type.Literal("DECLINED")]), Type.Null()]), rejection_reason_name: Type.Union([Type.String(), Type.Null()]), rejected_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), current_stage_id: Type.Union([Type.String(), Type.Null()]), job_id: Type.Union([Type.String(), Type.Null()]), candidate_id: Type.Union([Type.String(), Type.Null()]), screening_question_answers: Type.Optional(Type.Union([Type.Array(Type.Union([Type.Object({ answer: Type.Object({ content: Type.Union([Type.String(), Type.Null()]) }), question: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), title: Type.String(), type: Type.String() }) }), Type.Object({ answer: Type.Object({ choice: Type.Union([Type.String(), Type.Null()]) }), question: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), title: Type.String(), type: Type.String() }) }), Type.Object({ answer: Type.Partial(Type.Object({ choices: Type.Array(Type.String()) })), question: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), title: Type.String(), type: Type.String() }) }), Type.Object({ answer: Type.Object({ checked: Type.Union([Type.Boolean(), Type.Null()]) }), question: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), title: Type.String(), type: Type.String() }) }), Type.Object({ answer: Type.Object({ number: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]) }), question: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), title: Type.String(), type: Type.String() }) }), Type.Object({ answer: Type.Object({ date: Type.Union([Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$" }), Type.Null()]) }), question: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), title: Type.String(), type: Type.String() }) }), Type.Object({ answer: Type.Partial(Type.Object({ raw: Type.Null() })), question: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), title: Type.String(), type: Type.String() }) })])), Type.Null()])), custom_fields: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), integration_fields: Type.Array(Type.Object({ id: Type.String(), key: Type.String(), type: Type.Union([Type.Literal("DEFAULT"), Type.Literal("CUSTOM")]), value: Type.Optional(Type.Null()), label: Type.Union([Type.String(), Type.Null()]) })), remote_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_created_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_updated_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), candidate: Type.Union([Type.Object({ id: Type.String(), remote_id: Type.String(), first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), email_addresses: Type.Optional(Type.Union([Type.Array(Type.Object({ email_address: Type.Optional(Type.Union([Type.String({ pattern: "^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$" }), Type.Null()])), type: Type.Union([Type.String(), Type.Null()]) })), Type.Null()])), phone_numbers: Type.Optional(Type.Union([Type.Array(Type.Object({ phone_number: Type.String(), type: Type.Optional(Type.Union([Type.String(), Type.Null()])) })), Type.Null()])), social_media: Type.Optional(Type.Union([Type.Array(Type.Partial(Type.Object({ link: Type.Union([Type.String(), Type.Null()]), type: Type.Union([Type.String(), Type.Null()]), username: Type.Union([Type.String(), Type.Null()]) }))), Type.Null()])), source: Type.Union([Type.String(), Type.Null()]), remote_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]), tags: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), name: Type.Union([Type.String(), Type.Null()]) })) }), Type.Null()]), current_stage: Type.Union([Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), name: Type.Union([Type.String(), Type.Null()]), index: Type.Union([Type.Integer(), Type.Null()]) }), Type.Null()]), job: Type.Union([Type.Object({ id: Type.String(), remote_id: Type.String(), name: Type.Union([Type.String(), Type.Null()]) }), Type.Null()]), interviews: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), starting_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), ending_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), location: Type.Optional(Type.Union([Type.Partial(Type.Object({ city: Type.Union([Type.String(), Type.Null()]), country: Type.Union([Type.String(), Type.Null()]), raw: Type.Union([Type.String(), Type.Null()]), state: Type.Union([Type.String(), Type.Null()]), street_1: Type.Union([Type.String(), Type.Null()]), street_2: Type.Union([Type.String(), Type.Null()]), zip_code: Type.Union([Type.String(), Type.Null()]) })), Type.Null()])), canceled: Type.Union([Type.Boolean(), Type.Null()]) })), offers: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), status: Type.Union([Type.Union([Type.Literal("ACCEPTED"), Type.Literal("DECLINED"), Type.Literal("SENT"), Type.Literal("APPROVED"), Type.Literal("DRAFT"), Type.Literal("ABANDONED")]), Type.Null()]) })) })) }) });

export type PutAtsApplicationsApplicationIdStageParameterApplicationId = Static<typeof PutAtsApplicationsApplicationIdStageParameterApplicationId>;
export const PutAtsApplicationsApplicationIdStageParameterApplicationId = Type.String();

export type PutAtsApplicationsApplicationIdStagePositiveResponse = Static<typeof PutAtsApplicationsApplicationIdStagePositiveResponse>;
export const PutAtsApplicationsApplicationIdStagePositiveResponse = Type.Object({ status: Type.String(), data: Type.Record(Type.String(), Type.Unknown()), warnings: Type.Array(Type.Object({ message: Type.String() })) });

export type PutAtsApplicationsApplicationIdStageRequestBody = Static<typeof PutAtsApplicationsApplicationIdStageRequestBody>;
export const PutAtsApplicationsApplicationIdStageRequestBody = Type.Object({ stage_id: Type.String(), remote_fields: Type.Optional(Type.Intersect([Type.Partial(Type.Object({ workday: Type.Partial(Type.Object({ Workflow_Step_ID: Type.String(), Step_Type: Type.Union([Type.Literal("Next_Step_Reference"), Type.Literal("Disposition_Step_Reference")]) })) })), Type.Partial(Type.Object({ greenhouse: Type.Partial(Type.Object({ post_headers: Type.Partial(Type.Object({ "On-Behalf-Of": Type.Union([Type.String(), Type.Null()]) })) })), workable: Type.Partial(Type.Object({ on_behalf_of_user_remote_id: Type.String() })) }))])) });

export type PostAtsApplicationsApplicationIdResultLinksParameterApplicationId = Static<typeof PostAtsApplicationsApplicationIdResultLinksParameterApplicationId>;
export const PostAtsApplicationsApplicationIdResultLinksParameterApplicationId = Type.String();

export type PostAtsApplicationsApplicationIdResultLinksPositiveResponse = Static<typeof PostAtsApplicationsApplicationIdResultLinksPositiveResponse>;
export const PostAtsApplicationsApplicationIdResultLinksPositiveResponse = Type.Object({ status: Type.String(), data: Type.Record(Type.String(), Type.Unknown()), warnings: Type.Array(Type.Object({ message: Type.String() })) });

export type PostAtsApplicationsApplicationIdResultLinksRequestBody = Static<typeof PostAtsApplicationsApplicationIdResultLinksRequestBody>;
export const PostAtsApplicationsApplicationIdResultLinksRequestBody = Type.Object({ label: Type.String(), url: Type.String({ format: "uri" }), details: Type.Optional(Type.Object({ custom_field_name_prefix: Type.String(), attributes: Type.Array(Type.Object({ key: Type.String(), value: Type.String() })) })), remote_fields: Type.Optional(Type.Intersect([Type.Partial(Type.Object({ icims: Type.Partial(Type.Object({ assessment_package_id: Type.String() })), oracle: Type.Partial(Type.Object({ override_document_category: Type.Union([Type.Literal("IRC_CANDIDATE_RESUME"), Type.Literal("IRC_CANDIDATE_COVERLETTER"), Type.Literal("MISC"), Type.Literal("IRC_INTERNAL")]), multi_post_to_all_current_applications: Type.Boolean() })) })), Type.Partial(Type.Object({ greenhouse: Type.Partial(Type.Object({ post_headers: Type.Partial(Type.Object({ "On-Behalf-Of": Type.Union([Type.String(), Type.Null()]) })) })), workable: Type.Partial(Type.Object({ on_behalf_of_user_remote_id: Type.String() })) }))])) });

export type PostAtsApplicationsApplicationIdNotesParameterApplicationId = Static<typeof PostAtsApplicationsApplicationIdNotesParameterApplicationId>;
export const PostAtsApplicationsApplicationIdNotesParameterApplicationId = Type.String();

export type PostAtsApplicationsApplicationIdNotesPositiveResponse = Static<typeof PostAtsApplicationsApplicationIdNotesPositiveResponse>;
export const PostAtsApplicationsApplicationIdNotesPositiveResponse = Type.Object({ status: Type.String(), data: Type.Record(Type.String(), Type.Unknown()), warnings: Type.Array(Type.Object({ message: Type.String() })) });

export type PostAtsApplicationsApplicationIdNotesRequestBody = Static<typeof PostAtsApplicationsApplicationIdNotesRequestBody>;
export const PostAtsApplicationsApplicationIdNotesRequestBody = Type.Object({ content: Type.String(), content_type: Type.Literal("PLAIN_TEXT"), remote_fields: Type.Optional(Type.Intersect([Type.Partial(Type.Object({ teamtailor: Type.Partial(Type.Object({ user_id: Type.String() })), greenhouse: Type.Partial(Type.Object({ visibility: Type.Union([Type.Literal("admin_only"), Type.Literal("private"), Type.Literal("public")]) })), recruitee: Type.Partial(Type.Object({ visibility: Type.Unknown(), is_json: Type.Boolean() })), bullhorn: Type.Partial(Type.Object({ action: Type.String() })), lever: Type.Partial(Type.Object({ perform_as: Type.String() })) })), Type.Partial(Type.Object({ greenhouse: Type.Partial(Type.Object({ post_headers: Type.Partial(Type.Object({ "On-Behalf-Of": Type.Union([Type.String(), Type.Null()]) })) })), workable: Type.Partial(Type.Object({ on_behalf_of_user_remote_id: Type.String() })) }))])) });

export type GetAtsApplicationsApplicationIdAttachmentsParameterApplicationId = Static<typeof GetAtsApplicationsApplicationIdAttachmentsParameterApplicationId>;
export const GetAtsApplicationsApplicationIdAttachmentsParameterApplicationId = Type.String();

export type GetAtsApplicationsApplicationIdAttachmentsPositiveResponse = Static<typeof GetAtsApplicationsApplicationIdAttachmentsPositiveResponse>;
export const GetAtsApplicationsApplicationIdAttachmentsPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ results: Type.Array(Type.Object({ type: Type.Union([Type.Literal("CV"), Type.Literal("COVER_LETTER"), Type.Literal("OTHER")]), id: Type.String(), remote_id: Type.String(), data_url: Type.String(), file_name: Type.String(), content_type: Type.String(), remote_created_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_updated_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]) })) }), warnings: Type.Array(Type.Object({ message: Type.String() })) });

export type PostAtsApplicationsApplicationIdAttachmentsParameterApplicationId = Static<typeof PostAtsApplicationsApplicationIdAttachmentsParameterApplicationId>;
export const PostAtsApplicationsApplicationIdAttachmentsParameterApplicationId = Type.String();

export type PostAtsApplicationsApplicationIdAttachmentsPositiveResponse = Static<typeof PostAtsApplicationsApplicationIdAttachmentsPositiveResponse>;
export const PostAtsApplicationsApplicationIdAttachmentsPositiveResponse = Type.Object({ status: Type.String(), data: Type.Record(Type.String(), Type.Unknown()), warnings: Type.Array(Type.Object({ message: Type.String() })) });

export type PostAtsApplicationsApplicationIdAttachmentsRequestBody = Static<typeof PostAtsApplicationsApplicationIdAttachmentsRequestBody>;
export const PostAtsApplicationsApplicationIdAttachmentsRequestBody = Type.Object({ attachment: Type.Object({ name: Type.String(), content_type: Type.Optional(Type.String({ pattern: "^[\\w.-]+\\/[\\w.-]+$" })), data_url: Type.Optional(Type.String({ format: "uri" })), data: Type.Optional(Type.String()), type: Type.Union([Type.Literal("CV"), Type.Literal("COVER_LETTER"), Type.Literal("OTHER")]) }), remote_fields: Type.Optional(Type.Intersect([Type.Partial(Type.Object({ oracle: Type.Partial(Type.Object({ override_document_category: Type.Union([Type.Literal("IRC_CANDIDATE_RESUME"), Type.Literal("IRC_CANDIDATE_COVERLETTER"), Type.Literal("MISC"), Type.Literal("IRC_INTERNAL")]), multi_post_to_all_current_applications: Type.Boolean() })) })), Type.Partial(Type.Object({ greenhouse: Type.Partial(Type.Object({ post_headers: Type.Partial(Type.Object({ "On-Behalf-Of": Type.Union([Type.String(), Type.Null()]) })) })), workable: Type.Partial(Type.Object({ on_behalf_of_user_remote_id: Type.String() })) }))])) });

export type PostAtsApplicationsApplicationIdRejectParameterApplicationId = Static<typeof PostAtsApplicationsApplicationIdRejectParameterApplicationId>;
export const PostAtsApplicationsApplicationIdRejectParameterApplicationId = Type.String();

export type PostAtsApplicationsApplicationIdRejectPositiveResponse = Static<typeof PostAtsApplicationsApplicationIdRejectPositiveResponse>;
export const PostAtsApplicationsApplicationIdRejectPositiveResponse = Type.Object({ status: Type.String(), data: Type.Record(Type.String(), Type.Unknown()), warnings: Type.Array(Type.Object({ message: Type.String() })) });

export type PostAtsApplicationsApplicationIdRejectRequestBody = Static<typeof PostAtsApplicationsApplicationIdRejectRequestBody>;
export const PostAtsApplicationsApplicationIdRejectRequestBody = Type.Object({ rejection_reason_id: Type.String(), note: Type.Optional(Type.String()), remote_fields: Type.Optional(Type.Intersect([Type.Partial(Type.Object({ greenhouse: Type.Partial(Type.Object({ rejection_email: Type.Record(Type.String(), Type.Unknown()) })), teamtailor: Type.Partial(Type.Object({ user_id: Type.String() })) })), Type.Partial(Type.Object({ greenhouse: Type.Partial(Type.Object({ post_headers: Type.Partial(Type.Object({ "On-Behalf-Of": Type.Union([Type.String(), Type.Null()]) })) })), workable: Type.Partial(Type.Object({ on_behalf_of_user_remote_id: Type.String() })) }))])) });

export type PostAtsApplicationsApplicationIdInterviewsParameterApplicationId = Static<typeof PostAtsApplicationsApplicationIdInterviewsParameterApplicationId>;
export const PostAtsApplicationsApplicationIdInterviewsParameterApplicationId = Type.String();

export type PostAtsApplicationsApplicationIdInterviewsPositiveResponse = Static<typeof PostAtsApplicationsApplicationIdInterviewsPositiveResponse>;
export const PostAtsApplicationsApplicationIdInterviewsPositiveResponse = Type.Object({ status: Type.String(), data: Type.Record(Type.String(), Type.Unknown()) });

export type PostAtsApplicationsApplicationIdInterviewsRequestBody = Static<typeof PostAtsApplicationsApplicationIdInterviewsRequestBody>;
export const PostAtsApplicationsApplicationIdInterviewsRequestBody = Type.Object({ title: Type.String(), start_time: Type.String(), end_time: Type.String(), interviewer_user_ids: Type.Array(Type.String()), organizer_user_id: Type.String(), location: Type.Object({ type: Type.Union([Type.Literal("PHYSICAL"), Type.Literal("VIRTUAL")]), address: Type.Optional(Type.String()) }) });

export type PatchAtsApplicationsApplicationIdInterviewsParameterApplicationId = Static<typeof PatchAtsApplicationsApplicationIdInterviewsParameterApplicationId>;
export const PatchAtsApplicationsApplicationIdInterviewsParameterApplicationId = Type.String();

export type PatchAtsApplicationsApplicationIdInterviewsPositiveResponse = Static<typeof PatchAtsApplicationsApplicationIdInterviewsPositiveResponse>;
export const PatchAtsApplicationsApplicationIdInterviewsPositiveResponse = Type.Object({ status: Type.String(), data: Type.Record(Type.String(), Type.Unknown()) });

export type PatchAtsApplicationsApplicationIdInterviewsRequestBody = Static<typeof PatchAtsApplicationsApplicationIdInterviewsRequestBody>;
export const PatchAtsApplicationsApplicationIdInterviewsRequestBody = Type.Object({ interview_id: Type.String(), title: Type.String(), start_time: Type.String(), end_time: Type.String(), interviewer_user_ids: Type.Array(Type.String()), organizer_user_id: Type.String(), location: Type.Object({ type: Type.Union([Type.Literal("PHYSICAL"), Type.Literal("VIRTUAL")]), address: Type.Optional(Type.String()) }) });

export type GetAtsCandidatesParameterCursor = Static<typeof GetAtsCandidatesParameterCursor>;
export const GetAtsCandidatesParameterCursor = Type.String();

export type GetAtsCandidatesParameterPageSize = Static<typeof GetAtsCandidatesParameterPageSize>;
export const GetAtsCandidatesParameterPageSize = Type.Integer({ minimum: 1, maximum: 250 });

export type GetAtsCandidatesParameterUpdatedAfter = Static<typeof GetAtsCandidatesParameterUpdatedAfter>;
export const GetAtsCandidatesParameterUpdatedAfter = Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" });

export type GetAtsCandidatesParameterIncludeDeleted = Static<typeof GetAtsCandidatesParameterIncludeDeleted>;
export const GetAtsCandidatesParameterIncludeDeleted = Type.Union([Type.Literal("true"), Type.Literal("false")]);

export type GetAtsCandidatesParameterIgnoreUnsupportedFilters = Static<typeof GetAtsCandidatesParameterIgnoreUnsupportedFilters>;
export const GetAtsCandidatesParameterIgnoreUnsupportedFilters = Type.Union([Type.Literal("true"), Type.Literal("false")]);

export type GetAtsCandidatesParameterIds = Static<typeof GetAtsCandidatesParameterIds>;
export const GetAtsCandidatesParameterIds = Type.String();

export type GetAtsCandidatesParameterRemoteIds = Static<typeof GetAtsCandidatesParameterRemoteIds>;
export const GetAtsCandidatesParameterRemoteIds = Type.String();

export type GetAtsCandidatesParameterEmail = Static<typeof GetAtsCandidatesParameterEmail>;
export const GetAtsCandidatesParameterEmail = Type.String({ format: "email" });

export type GetAtsCandidatesParameterJobIds = Static<typeof GetAtsCandidatesParameterJobIds>;
export const GetAtsCandidatesParameterJobIds = Type.String();

export type GetAtsCandidatesParameterFirstName = Static<typeof GetAtsCandidatesParameterFirstName>;
export const GetAtsCandidatesParameterFirstName = Type.String();

export type GetAtsCandidatesParameterLastName = Static<typeof GetAtsCandidatesParameterLastName>;
export const GetAtsCandidatesParameterLastName = Type.String();

export type GetAtsCandidatesPositiveResponse = Static<typeof GetAtsCandidatesPositiveResponse>;
export const GetAtsCandidatesPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.String(), first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), company: Type.Union([Type.String(), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), confidential: Type.Union([Type.Boolean(), Type.Null()]), source: Type.Union([Type.String(), Type.Null()]), phone_numbers: Type.Optional(Type.Union([Type.Array(Type.Object({ phone_number: Type.String(), type: Type.Optional(Type.Union([Type.String(), Type.Null()])) })), Type.Null()])), email_addresses: Type.Optional(Type.Union([Type.Array(Type.Object({ email_address: Type.Optional(Type.Union([Type.String({ pattern: "^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$" }), Type.Null()])), type: Type.Union([Type.String(), Type.Null()]) })), Type.Null()])), social_media: Type.Optional(Type.Union([Type.Array(Type.Partial(Type.Object({ link: Type.Union([Type.String(), Type.Null()]), type: Type.Union([Type.String(), Type.Null()]), username: Type.Union([Type.String(), Type.Null()]) }))), Type.Null()])), location: Type.Optional(Type.Union([Type.Partial(Type.Object({ city: Type.Union([Type.String(), Type.Null()]), country: Type.Union([Type.String(), Type.Null()]), raw: Type.Union([Type.String(), Type.Null()]), state: Type.Union([Type.String(), Type.Null()]), street_1: Type.Union([Type.String(), Type.Null()]), street_2: Type.Union([Type.String(), Type.Null()]), zip_code: Type.Union([Type.String(), Type.Null()]) })), Type.Null()])), custom_fields: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), integration_fields: Type.Array(Type.Object({ id: Type.String(), key: Type.String(), type: Type.Union([Type.Literal("DEFAULT"), Type.Literal("CUSTOM")]), value: Type.Optional(Type.Null()), label: Type.Union([Type.String(), Type.Null()]) })), remote_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]), remote_created_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_updated_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), applications: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), outcome: Type.Union([Type.Union([Type.Literal("PENDING"), Type.Literal("HIRED"), Type.Literal("DECLINED")]), Type.Null()]), rejection_reason_name: Type.Union([Type.String(), Type.Null()]), rejected_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_created_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_updated_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), current_stage: Type.Union([Type.Object({ id: Type.String(), name: Type.Union([Type.String(), Type.Null()]), remote_id: Type.Union([Type.String(), Type.Null()]), index: Type.Union([Type.Integer(), Type.Null()]) }), Type.Null()]), job: Type.Union([Type.Object({ id: Type.String(), name: Type.Union([Type.String(), Type.Null()]), remote_id: Type.String() }), Type.Null()]) })), tags: Type.Array(Type.Object({ id: Type.String(), name: Type.Union([Type.String(), Type.Null()]), remote_id: Type.Union([Type.String(), Type.Null()]) })) })) }) });

export type PostAtsCandidatesPositiveResponse = Static<typeof PostAtsCandidatesPositiveResponse>;
export const PostAtsCandidatesPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ id: Type.String(), remote_id: Type.String(), first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), company: Type.Union([Type.String(), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), confidential: Type.Union([Type.Boolean(), Type.Null()]), source: Type.Union([Type.String(), Type.Null()]), phone_numbers: Type.Optional(Type.Union([Type.Array(Type.Object({ phone_number: Type.String(), type: Type.Optional(Type.Union([Type.String(), Type.Null()])) })), Type.Null()])), email_addresses: Type.Optional(Type.Union([Type.Array(Type.Object({ email_address: Type.Optional(Type.Union([Type.String({ pattern: "^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$" }), Type.Null()])), type: Type.Union([Type.String(), Type.Null()]) })), Type.Null()])), social_media: Type.Optional(Type.Union([Type.Array(Type.Partial(Type.Object({ link: Type.Union([Type.String(), Type.Null()]), type: Type.Union([Type.String(), Type.Null()]), username: Type.Union([Type.String(), Type.Null()]) }))), Type.Null()])), location: Type.Optional(Type.Union([Type.Partial(Type.Object({ city: Type.Union([Type.String(), Type.Null()]), country: Type.Union([Type.String(), Type.Null()]), raw: Type.Union([Type.String(), Type.Null()]), state: Type.Union([Type.String(), Type.Null()]), street_1: Type.Union([Type.String(), Type.Null()]), street_2: Type.Union([Type.String(), Type.Null()]), zip_code: Type.Union([Type.String(), Type.Null()]) })), Type.Null()])), custom_fields: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), integration_fields: Type.Array(Type.Object({ id: Type.String(), key: Type.String(), type: Type.Union([Type.Literal("DEFAULT"), Type.Literal("CUSTOM")]), value: Type.Optional(Type.Null()), label: Type.Union([Type.String(), Type.Null()]) })), remote_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]), remote_created_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_updated_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), applications: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), outcome: Type.Union([Type.Union([Type.Literal("PENDING"), Type.Literal("HIRED"), Type.Literal("DECLINED")]), Type.Null()]), rejection_reason_name: Type.Union([Type.String(), Type.Null()]), rejected_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_created_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_updated_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), current_stage: Type.Union([Type.Object({ id: Type.String(), name: Type.Union([Type.String(), Type.Null()]), remote_id: Type.Union([Type.String(), Type.Null()]), index: Type.Union([Type.Integer(), Type.Null()]) }), Type.Null()]), job: Type.Union([Type.Object({ id: Type.String(), name: Type.Union([Type.String(), Type.Null()]), remote_id: Type.String() }), Type.Null()]) })), tags: Type.Array(Type.Object({ id: Type.String(), name: Type.Union([Type.String(), Type.Null()]), remote_id: Type.Union([Type.String(), Type.Null()]) })) }), warnings: Type.Array(Type.Object({ message: Type.String() })) });

export type PostAtsCandidatesRequestBody = Static<typeof PostAtsCandidatesRequestBody>;
export const PostAtsCandidatesRequestBody = Type.Object({ candidate: Type.Object({ first_name: Type.String(), last_name: Type.String(), email_address: Type.String({ format: "email" }), additional_email_addresses: Type.Optional(Type.Array(Type.Object({ type: Type.Union([Type.Literal("PERSONAL"), Type.Literal("WORK"), Type.Literal("OTHER")]), email_address: Type.String({ format: "email" }) }))), company: Type.Optional(Type.String()), title: Type.Optional(Type.String()), phone_number: Type.Optional(Type.String()), additional_phone_numbers: Type.Optional(Type.Array(Type.Object({ type: Type.Union([Type.Literal("PERSONAL"), Type.Literal("WORK"), Type.Literal("OTHER")]), phone_number: Type.String() }))), location: Type.Optional(Type.Object({ city: Type.Optional(Type.String()), country: Type.String({ pattern: "^[A-Z]{2}$" }), state: Type.Optional(Type.String()), street_1: Type.Optional(Type.String()), zip_code: Type.Optional(Type.String()) })), gender: Type.Optional(Type.Union([Type.Literal("MALE"), Type.Literal("FEMALE"), Type.Literal("OTHER")])), availability_date: Type.Optional(Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" })), salary_expectations: Type.Optional(Type.Object({ period: Type.Union([Type.Literal("MONTH"), Type.Literal("YEAR")]), amount: Type.Number({ minimum: -1.7976931348623157e+308 }) })), social_links: Type.Optional(Type.Array(Type.Object({ url: Type.String({ format: "uri" }) }))) }), application: Type.Object({ job_id: Type.String(), stage_id: Type.Optional(Type.String()) }), screening_question_answers: Type.Optional(Type.Array(Type.Object({ question_id: Type.String(), answer: Type.Union([Type.String(), Type.Boolean(), Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Array(Type.String()), Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }), Type.Object({ name: Type.String(), content_type: Type.Optional(Type.String({ pattern: "^[\\w.-]+\\/[\\w.-]+$" })), data_url: Type.Optional(Type.String({ format: "uri" })), data: Type.Optional(Type.String()) })]) }))), attachments: Type.Optional(Type.Array(Type.Object({ name: Type.String(), content_type: Type.Optional(Type.String({ pattern: "^[\\w.-]+\\/[\\w.-]+$" })), data_url: Type.Optional(Type.String({ format: "uri" })), data: Type.Optional(Type.String()), type: Type.Union([Type.Literal("CV"), Type.Literal("COVER_LETTER"), Type.Literal("OTHER")]) }))), source: Type.Optional(Type.Partial(Type.Object({ name: Type.String(), unified_key: Type.String(), id: Type.String() }))), sourced_by: Type.Optional(Type.Object({ user_id: Type.String() })), gdpr_consent: Type.Optional(Type.Partial(Type.Object({ expires_at: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }), given: Type.Boolean() }))), remote_fields: Type.Optional(Type.Intersect([Type.Partial(Type.Object({ successfactors: Type.Partial(Type.Object({ Candidate: Type.Record(Type.String(), Type.Unknown()), JobApplication: Type.Record(Type.String(), Type.Unknown()), copyJobApplicationAttachments: Type.Boolean(), update_existing_candidate: Type.Union([Type.Boolean(), Type.Null()]) })), personio: Type.Partial(Type.Object({ application: Type.Record(Type.String(), Type.Unknown()) })), talentsoft: Type.Partial(Type.Object({ applicant: Type.Record(Type.String(), Type.Unknown()), application: Type.Record(Type.String(), Type.Unknown()) })), teamtailor: Type.Partial(Type.Object({ candidate: Type.Record(Type.String(), Type.Unknown()), application: Type.Partial(Type.Object({ attributes: Type.Record(Type.String(), Type.Unknown()) })) })), greenhouse: Type.Partial(Type.Object({ candidate: Type.Record(Type.String(), Type.Unknown()), application: Type.Record(Type.String(), Type.Unknown()) })), lever: Type.Partial(Type.Object({ candidate: Type.Record(Type.String(), Type.Unknown()) })), workable: Type.Partial(Type.Object({ candidate: Type.Record(Type.String(), Type.Unknown()) })), workday: Type.Partial(Type.Object({ Candidate_Data: Type.Partial(Type.Object({ Name_Detail_Data: Type.Partial(Type.Object({ Middle_Name: Type.String(), Social_Suffix_Reference: Type.Object({ Predefined_Name_Component_ID: Type.String() }) })), Language_Reference: Type.Object({ WID: Type.String() }), Job_Application_Data: Type.Partial(Type.Object({ Job_Applied_To_Data: Type.Partial(Type.Object({ Global_Personal_Information_Data: Type.Partial(Type.Object({ Date_of_Birth: Type.String() })) })), Resume_Data: Type.Partial(Type.Object({ Education_Data: Type.Array(Type.Partial(Type.Object({ School_Name: Type.String(), First_Year_Attended: Type.Number({ minimum: -1.7976931348623157e+308 }), Last_Year_Attended: Type.Number({ minimum: -1.7976931348623157e+308 }), Field_of_Study_Reference: Type.Object({ WID: Type.String() }), Degree_Reference: Type.Object({ WID: Type.String() }), Grade_Average: Type.String() }))), Skill_Data: Type.Array(Type.Partial(Type.Object({ Skill_Name: Type.String() }))), Language_Data: Type.Array(Type.Partial(Type.Object({ Language_Reference: Type.Partial(Type.Object({ WID: Type.String() })), Language: Type.Object({ Native: Type.Optional(Type.Boolean()), Language_Ability: Type.Array(Type.Partial(Type.Object({ Language_Ability_Data: Type.Partial(Type.Object({ Language_Proficiency_Reference: Type.Object({ WID: Type.String() }), Language_Ability_Type_Reference: Type.Object({ WID: Type.String() }) })) }))) }) }))), Experience_Data: Type.Array(Type.Object({ Company_Name: Type.String(), Title: Type.String(), Location: Type.Optional(Type.String()), Start_Date: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }), End_Date: Type.Optional(Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" })), Currently_Work_Here: Type.Optional(Type.Boolean()), Description: Type.Optional(Type.String()) })) })) })), Contact_Data: Type.Partial(Type.Object({ Location_Data: Type.Partial(Type.Object({ Address_Line_1: Type.String(), Address_Line_2: Type.String(), Region_Subdivision_1: Type.String(), Country_Region_Reference: Type.Object({ Country_Region_ID: Type.String() }), Country_City_Reference: Type.Object({ WID: Type.String() }) })) })), Worker_Reference: Type.Partial(Type.Object({ WID: Type.String(), Employee_ID: Type.String() })) })), Override_Source_Reference_WID: Type.String() })), zohorecruit: Type.Partial(Type.Object({ candidate: Type.Record(Type.String(), Type.Unknown()) })), bullhorn: Type.Partial(Type.Object({ candidate: Type.Record(Type.String(), Type.Unknown()), job_submission: Type.Record(Type.String(), Type.Unknown()) })), smartrecruiters: Type.Partial(Type.Object({ candidate_with_questions: Type.Record(Type.String(), Type.Unknown()), candidate_without_questions: Type.Record(Type.String(), Type.Unknown()), candidate: Type.Record(Type.String(), Type.Unknown()), consent_decisions: Type.Partial(Type.Object({ SINGLE: Type.Boolean(), SMART_RECRUIT: Type.Boolean(), SMART_CRM: Type.Boolean(), SMART_MESSAGE_SMS: Type.Boolean(), SMART_MESSAGE_WHATSAPP: Type.Boolean() })) })), talentadore: Type.Partial(Type.Object({ applications: Type.Record(Type.String(), Type.Unknown()) })), guidecom: Type.Partial(Type.Object({ candidate: Type.Record(Type.String(), Type.Unknown()) })), dvinci: Type.Partial(Type.Object({ application: Type.Record(Type.String(), Type.Unknown()), candidate: Type.Record(Type.String(), Type.Unknown()) })), hrworks: Type.Partial(Type.Object({ jobApplication: Type.Record(Type.String(), Type.Unknown()) })), jobylon: Type.Partial(Type.Object({ application: Type.Partial(Type.Object({ message: Type.String() })) })), avature: Type.Partial(Type.Object({ workflow: Type.Partial(Type.Object({ step: Type.Object({ id: Type.Integer() }) })) })), recruitee: Type.Partial(Type.Object({ candidate: Type.Partial(Type.Object({ cover_letter_text: Type.String() })) })), rexx: Type.Partial(Type.Object({ candidate: Type.Record(Type.String(), Type.Unknown()) })), umantis: Type.Partial(Type.Object({ person: Type.Record(Type.String(), Type.Unknown()) })), piloga: Type.Partial(Type.Object({ candidate: Type.Partial(Type.Object({ street: Type.String() })) })), pinpoint: Type.Partial(Type.Object({ candidate: Type.Record(Type.String(), Type.Unknown()) })), covetorest: Type.Partial(Type.Object({ candidate: Type.Partial(Type.Object({ mandant: Type.Number({ minimum: -1.7976931348623157e+308 }) })) })) })), Type.Partial(Type.Object({ greenhouse: Type.Partial(Type.Object({ post_headers: Type.Partial(Type.Object({ "On-Behalf-Of": Type.Union([Type.String(), Type.Null()]) })) })), workable: Type.Partial(Type.Object({ on_behalf_of_user_remote_id: Type.String() })) }))])) });

export type GetAtsCandidatesCandidateIdAttachmentsParameterCandidateId = Static<typeof GetAtsCandidatesCandidateIdAttachmentsParameterCandidateId>;
export const GetAtsCandidatesCandidateIdAttachmentsParameterCandidateId = Type.String();

export type GetAtsCandidatesCandidateIdAttachmentsPositiveResponse = Static<typeof GetAtsCandidatesCandidateIdAttachmentsPositiveResponse>;
export const GetAtsCandidatesCandidateIdAttachmentsPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ results: Type.Array(Type.Object({ id: Type.String({ minLength: 24, maxLength: 24, pattern: "^[1-9A-HJ-NP-Za-km-z]+$" }), application_id: Type.Union([Type.String({ minLength: 24, maxLength: 24, pattern: "^[1-9A-HJ-NP-Za-km-z]+$" }), Type.Null()]), candidate_id: Type.String({ minLength: 24, maxLength: 24, pattern: "^[1-9A-HJ-NP-Za-km-z]+$" }), type: Type.Union([Type.Literal("CV"), Type.Literal("COVER_LETTER"), Type.Literal("OTHER")]), remote_id: Type.String(), data_url: Type.String(), file_name: Type.String(), content_type: Type.String(), remote_created_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_updated_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]) })) }), warnings: Type.Array(Type.Object({ message: Type.String() })) });

export type PostAtsCandidatesCandidateIdAttachmentsParameterCandidateId = Static<typeof PostAtsCandidatesCandidateIdAttachmentsParameterCandidateId>;
export const PostAtsCandidatesCandidateIdAttachmentsParameterCandidateId = Type.String();

export type PostAtsCandidatesCandidateIdAttachmentsPositiveResponse = Static<typeof PostAtsCandidatesCandidateIdAttachmentsPositiveResponse>;
export const PostAtsCandidatesCandidateIdAttachmentsPositiveResponse = Type.Object({ status: Type.String(), data: Type.Record(Type.String(), Type.Unknown()), warnings: Type.Array(Type.Object({ message: Type.String() })) });

export type PostAtsCandidatesCandidateIdAttachmentsRequestBody = Static<typeof PostAtsCandidatesCandidateIdAttachmentsRequestBody>;
export const PostAtsCandidatesCandidateIdAttachmentsRequestBody = Type.Object({ attachment: Type.Object({ name: Type.String(), content_type: Type.Optional(Type.String({ pattern: "^[\\w.-]+\\/[\\w.-]+$" })), data_url: Type.Optional(Type.String({ format: "uri" })), data: Type.Optional(Type.String()), type: Type.Union([Type.Literal("CV"), Type.Literal("COVER_LETTER"), Type.Literal("OTHER")]) }), remote_fields: Type.Optional(Type.Partial(Type.Object({ greenhouse: Type.Partial(Type.Object({ post_headers: Type.Partial(Type.Object({ "On-Behalf-Of": Type.Union([Type.String(), Type.Null()]) })) })), workable: Type.Partial(Type.Object({ on_behalf_of_user_remote_id: Type.String() })) }))) });

export type PostAtsCandidatesCandidateIdResultLinksParameterCandidateId = Static<typeof PostAtsCandidatesCandidateIdResultLinksParameterCandidateId>;
export const PostAtsCandidatesCandidateIdResultLinksParameterCandidateId = Type.String();

export type PostAtsCandidatesCandidateIdResultLinksPositiveResponse = Static<typeof PostAtsCandidatesCandidateIdResultLinksPositiveResponse>;
export const PostAtsCandidatesCandidateIdResultLinksPositiveResponse = Type.Object({ status: Type.String(), data: Type.Record(Type.String(), Type.Unknown()), warnings: Type.Array(Type.Object({ message: Type.String() })) });

export type PostAtsCandidatesCandidateIdResultLinksRequestBody = Static<typeof PostAtsCandidatesCandidateIdResultLinksRequestBody>;
export const PostAtsCandidatesCandidateIdResultLinksRequestBody = Type.Object({ label: Type.String(), url: Type.String({ format: "uri" }), details: Type.Optional(Type.Object({ custom_field_name_prefix: Type.String(), attributes: Type.Array(Type.Object({ key: Type.String(), value: Type.String() })) })), remote_fields: Type.Optional(Type.Intersect([Type.Partial(Type.Object({ icims: Type.Partial(Type.Object({ assessment_package_id: Type.String() })), oracle: Type.Partial(Type.Object({ override_document_category: Type.Union([Type.Literal("IRC_CANDIDATE_RESUME"), Type.Literal("IRC_CANDIDATE_COVERLETTER"), Type.Literal("MISC"), Type.Literal("IRC_INTERNAL")]), multi_post_to_all_current_applications: Type.Boolean() })) })), Type.Partial(Type.Object({ greenhouse: Type.Partial(Type.Object({ post_headers: Type.Partial(Type.Object({ "On-Behalf-Of": Type.Union([Type.String(), Type.Null()]) })) })), workable: Type.Partial(Type.Object({ on_behalf_of_user_remote_id: Type.String() })) }))])) });

export type PostAtsCandidatesCandidateIdTagsParameterCandidateId = Static<typeof PostAtsCandidatesCandidateIdTagsParameterCandidateId>;
export const PostAtsCandidatesCandidateIdTagsParameterCandidateId = Type.String();

export type PostAtsCandidatesCandidateIdTagsPositiveResponse = Static<typeof PostAtsCandidatesCandidateIdTagsPositiveResponse>;
export const PostAtsCandidatesCandidateIdTagsPositiveResponse = Type.Object({ status: Type.String(), data: Type.Record(Type.String(), Type.Unknown()), warnings: Type.Array(Type.Object({ message: Type.String() })) });

export type PostAtsCandidatesCandidateIdTagsRequestBody = Static<typeof PostAtsCandidatesCandidateIdTagsRequestBody>;
export const PostAtsCandidatesCandidateIdTagsRequestBody = Type.Object({ tag: Type.Object({ name: Type.String({ minLength: 1 }) }), remote_fields: Type.Optional(Type.Partial(Type.Object({ greenhouse: Type.Partial(Type.Object({ post_headers: Type.Partial(Type.Object({ "On-Behalf-Of": Type.Union([Type.String(), Type.Null()]) })) })), workable: Type.Partial(Type.Object({ on_behalf_of_user_remote_id: Type.String() })) }))) });

export type DeleteAtsCandidatesCandidateIdTagsParameterCandidateId = Static<typeof DeleteAtsCandidatesCandidateIdTagsParameterCandidateId>;
export const DeleteAtsCandidatesCandidateIdTagsParameterCandidateId = Type.String();

export type DeleteAtsCandidatesCandidateIdTagsPositiveResponse = Static<typeof DeleteAtsCandidatesCandidateIdTagsPositiveResponse>;
export const DeleteAtsCandidatesCandidateIdTagsPositiveResponse = Type.Object({ status: Type.String(), data: Type.Record(Type.String(), Type.Unknown()), warnings: Type.Array(Type.Object({ message: Type.String() })) });

export type DeleteAtsCandidatesCandidateIdTagsRequestBody = Static<typeof DeleteAtsCandidatesCandidateIdTagsRequestBody>;
export const DeleteAtsCandidatesCandidateIdTagsRequestBody = Type.Object({ tag: Type.Object({ name: Type.String() }), remote_fields: Type.Optional(Type.Partial(Type.Object({ greenhouse: Type.Partial(Type.Object({ post_headers: Type.Partial(Type.Object({ "On-Behalf-Of": Type.Union([Type.String(), Type.Null()]) })) })), workable: Type.Partial(Type.Object({ on_behalf_of_user_remote_id: Type.String() })) }))) });

export type GetAtsTagsParameterCursor = Static<typeof GetAtsTagsParameterCursor>;
export const GetAtsTagsParameterCursor = Type.String();

export type GetAtsTagsParameterPageSize = Static<typeof GetAtsTagsParameterPageSize>;
export const GetAtsTagsParameterPageSize = Type.Integer({ minimum: 1, maximum: 250 });

export type GetAtsTagsParameterUpdatedAfter = Static<typeof GetAtsTagsParameterUpdatedAfter>;
export const GetAtsTagsParameterUpdatedAfter = Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" });

export type GetAtsTagsParameterIncludeDeleted = Static<typeof GetAtsTagsParameterIncludeDeleted>;
export const GetAtsTagsParameterIncludeDeleted = Type.Union([Type.Literal("true"), Type.Literal("false")]);

export type GetAtsTagsParameterIgnoreUnsupportedFilters = Static<typeof GetAtsTagsParameterIgnoreUnsupportedFilters>;
export const GetAtsTagsParameterIgnoreUnsupportedFilters = Type.Union([Type.Literal("true"), Type.Literal("false")]);

export type GetAtsTagsParameterIds = Static<typeof GetAtsTagsParameterIds>;
export const GetAtsTagsParameterIds = Type.String();

export type GetAtsTagsParameterRemoteIds = Static<typeof GetAtsTagsParameterRemoteIds>;
export const GetAtsTagsParameterRemoteIds = Type.String();

export type GetAtsTagsPositiveResponse = Static<typeof GetAtsTagsPositiveResponse>;
export const GetAtsTagsPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), name: Type.Union([Type.String(), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]) })) }) });

export type GetAtsApplicationStagesParameterCursor = Static<typeof GetAtsApplicationStagesParameterCursor>;
export const GetAtsApplicationStagesParameterCursor = Type.String();

export type GetAtsApplicationStagesParameterPageSize = Static<typeof GetAtsApplicationStagesParameterPageSize>;
export const GetAtsApplicationStagesParameterPageSize = Type.Integer({ minimum: 1, maximum: 250 });

export type GetAtsApplicationStagesParameterUpdatedAfter = Static<typeof GetAtsApplicationStagesParameterUpdatedAfter>;
export const GetAtsApplicationStagesParameterUpdatedAfter = Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" });

export type GetAtsApplicationStagesParameterIncludeDeleted = Static<typeof GetAtsApplicationStagesParameterIncludeDeleted>;
export const GetAtsApplicationStagesParameterIncludeDeleted = Type.Union([Type.Literal("true"), Type.Literal("false")]);

export type GetAtsApplicationStagesParameterIgnoreUnsupportedFilters = Static<typeof GetAtsApplicationStagesParameterIgnoreUnsupportedFilters>;
export const GetAtsApplicationStagesParameterIgnoreUnsupportedFilters = Type.Union([Type.Literal("true"), Type.Literal("false")]);

export type GetAtsApplicationStagesParameterIds = Static<typeof GetAtsApplicationStagesParameterIds>;
export const GetAtsApplicationStagesParameterIds = Type.String();

export type GetAtsApplicationStagesParameterRemoteIds = Static<typeof GetAtsApplicationStagesParameterRemoteIds>;
export const GetAtsApplicationStagesParameterRemoteIds = Type.String();

export type GetAtsApplicationStagesPositiveResponse = Static<typeof GetAtsApplicationStagesPositiveResponse>;
export const GetAtsApplicationStagesPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), name: Type.Union([Type.String(), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]) })) }) });

export type GetAtsJobsParameterCursor = Static<typeof GetAtsJobsParameterCursor>;
export const GetAtsJobsParameterCursor = Type.String();

export type GetAtsJobsParameterPageSize = Static<typeof GetAtsJobsParameterPageSize>;
export const GetAtsJobsParameterPageSize = Type.Integer({ minimum: 1, maximum: 250 });

export type GetAtsJobsParameterUpdatedAfter = Static<typeof GetAtsJobsParameterUpdatedAfter>;
export const GetAtsJobsParameterUpdatedAfter = Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" });

export type GetAtsJobsParameterIncludeDeleted = Static<typeof GetAtsJobsParameterIncludeDeleted>;
export const GetAtsJobsParameterIncludeDeleted = Type.Union([Type.Literal("true"), Type.Literal("false")]);

export type GetAtsJobsParameterIgnoreUnsupportedFilters = Static<typeof GetAtsJobsParameterIgnoreUnsupportedFilters>;
export const GetAtsJobsParameterIgnoreUnsupportedFilters = Type.Union([Type.Literal("true"), Type.Literal("false")]);

export type GetAtsJobsParameterIds = Static<typeof GetAtsJobsParameterIds>;
export const GetAtsJobsParameterIds = Type.String();

export type GetAtsJobsParameterRemoteIds = Static<typeof GetAtsJobsParameterRemoteIds>;
export const GetAtsJobsParameterRemoteIds = Type.String();

export type GetAtsJobsParameterJobCodes = Static<typeof GetAtsJobsParameterJobCodes>;
export const GetAtsJobsParameterJobCodes = Type.String();

export type GetAtsJobsParameterPostUrl = Static<typeof GetAtsJobsParameterPostUrl>;
export const GetAtsJobsParameterPostUrl = Type.String();

export type GetAtsJobsParameterStatus = Static<typeof GetAtsJobsParameterStatus>;
export const GetAtsJobsParameterStatus = Type.Union([Type.Literal("OPEN"), Type.Literal("CLOSED"), Type.Literal("DRAFT"), Type.Literal("ARCHIVED")]);

export type GetAtsJobsParameterStatuses = Static<typeof GetAtsJobsParameterStatuses>;
export const GetAtsJobsParameterStatuses = Type.String();

export type GetAtsJobsParameterEmploymentTypes = Static<typeof GetAtsJobsParameterEmploymentTypes>;
export const GetAtsJobsParameterEmploymentTypes = Type.String();

export type GetAtsJobsParameterVisibilities = Static<typeof GetAtsJobsParameterVisibilities>;
export const GetAtsJobsParameterVisibilities = Type.String();

export type GetAtsJobsParameterRemoteCreatedAfter = Static<typeof GetAtsJobsParameterRemoteCreatedAfter>;
export const GetAtsJobsParameterRemoteCreatedAfter = Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" });

export type GetAtsJobsParameterNameContains = Static<typeof GetAtsJobsParameterNameContains>;
export const GetAtsJobsParameterNameContains = Type.String();

export type GetAtsJobsPositiveResponse = Static<typeof GetAtsJobsPositiveResponse>;
export const GetAtsJobsPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.String(), name: Type.Union([Type.String(), Type.Null()]), job_code: Type.Union([Type.String(), Type.Null()]), description: Type.Union([Type.String(), Type.Null()]), confidential: Type.Union([Type.Boolean(), Type.Null()]), weekly_hours: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), employment_type: Type.Optional(Type.Union([Type.Union([Type.Literal("FULL_TIME"), Type.Literal("PART_TIME"), Type.Literal("CONTRACT"), Type.Literal("SEASONAL"), Type.Literal("INTERNSHIP")]), Type.String(), Type.Null()])), status: Type.Optional(Type.Union([Type.Union([Type.Literal("OPEN"), Type.Literal("CLOSED"), Type.Literal("DRAFT"), Type.Literal("ARCHIVED")]), Type.String(), Type.Null()])), visibility: Type.Optional(Type.Union([Type.Union([Type.Literal("PUBLIC"), Type.Literal("INTERNAL"), Type.Literal("UNLISTED"), Type.Literal("CONFIDENTIAL")]), Type.String(), Type.Null()])), category: Type.Union([Type.String(), Type.Null()]), department: Type.Union([Type.String(), Type.Null()]), post_url: Type.Union([Type.String(), Type.Null()]), experience_level: Type.Union([Type.String(), Type.Null()]), remote_work_status: Type.Optional(Type.Union([Type.Union([Type.Literal("REMOTE"), Type.Literal("HYBRID"), Type.Literal("TEMPORARY"), Type.Literal("ON_SITE")]), Type.String(), Type.Null()])), salary_amount: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), salary_amount_from: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), salary_amount_to: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), salary_currency: Type.Union([Type.String(), Type.Null()]), salary_period: Type.Optional(Type.Union([Type.Union([Type.Literal("YEAR"), Type.Literal("MONTH"), Type.Literal("TWO_WEEKS"), Type.Literal("WEEK"), Type.Literal("DAY"), Type.Literal("HOUR")]), Type.String(), Type.Null()])), location: Type.Optional(Type.Union([Type.Partial(Type.Object({ city: Type.Union([Type.String(), Type.Null()]), country: Type.Union([Type.String(), Type.Null()]), raw: Type.Union([Type.String(), Type.Null()]), state: Type.Union([Type.String(), Type.Null()]), street_1: Type.Union([Type.String(), Type.Null()]), street_2: Type.Union([Type.String(), Type.Null()]), zip_code: Type.Union([Type.String(), Type.Null()]) })), Type.Null()])), custom_fields: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), integration_fields: Type.Array(Type.Object({ id: Type.String(), key: Type.String(), type: Type.Union([Type.Literal("DEFAULT"), Type.Literal("CUSTOM")]), value: Type.Optional(Type.Null()), label: Type.Union([Type.String(), Type.Null()]) })), remote_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]), opened_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), closed_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_created_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_updated_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), contact_id: Type.Union([Type.String(), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), stages: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), name: Type.Union([Type.String(), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), index: Type.Optional(Type.Union([Type.Integer(), Type.Null()])) })), screening_questions: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), description: Type.Union([Type.String(), Type.Null()]), format: Type.Optional(Type.Union([Type.Object({ display_type: Type.Optional(Type.Union([Type.Union([Type.Literal("SINGLE_LINE"), Type.Literal("MULTI_LINE"), Type.Literal("EMAIL"), Type.Literal("URL")]), Type.Null()])), max_length: Type.Optional(Type.Union([Type.Integer(), Type.Null()])), type: Type.String() }), Type.Object({ display_type: Type.Optional(Type.Union([Type.Union([Type.Literal("SLIDER"), Type.Literal("FIELD")]), Type.Null()])), max: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])), min: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])), type: Type.String() }), Type.Object({ accepted_mime_types: Type.Optional(Type.Union([Type.Array(Type.String()), Type.Null()])), max_file_size_bytes: Type.Optional(Type.Union([Type.Integer(), Type.Null()])), type: Type.String() }), Type.Object({ display_type: Type.Optional(Type.Union([Type.Union([Type.Literal("DROPDOWN"), Type.Literal("RADIO")]), Type.Null()])), options: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Optional(Type.Union([Type.String(), Type.Null()])), name: Type.String() })), type: Type.String() }), Type.Object({ type: Type.String() }), Type.Object({ type: Type.String() }), Type.Object({ options: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Optional(Type.Union([Type.String(), Type.Null()])), name: Type.String() })), type: Type.String() }), Type.Object({ type: Type.String() }), Type.Object({ raw_question: Type.Optional(Type.Unknown()), type: Type.String() }), Type.Null()])), category: Type.Union([Type.Union([Type.Literal("EEO"), Type.Literal("DEMOGRAPHIC")]), Type.Null()]), index: Type.Optional(Type.Union([Type.Integer(), Type.Null()])), required: Type.Union([Type.Boolean(), Type.Null()]), precondition_question_id: Type.Optional(Type.Union([Type.String({ minLength: 24, maxLength: 24, pattern: "^[1-9A-HJ-NP-Za-km-z]+$" }), Type.Null()])), precondition_options: Type.Optional(Type.Union([Type.Array(Type.String({ minLength: 24, maxLength: 24, pattern: "^[1-9A-HJ-NP-Za-km-z]+$" })), Type.Array(Type.Boolean()), Type.Null()])) })), job_postings: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), description_html: Type.Union([Type.String(), Type.Null()]), status: Type.Union([Type.Union([Type.Literal("ACTIVE"), Type.Literal("INACTIVE"), Type.Literal("DRAFT")]), Type.Null()]), visibility: Type.Union([Type.Union([Type.Literal("PUBLIC"), Type.Literal("INTERNAL"), Type.Literal("UNLISTED")]), Type.Null()]), url: Type.Union([Type.String(), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]) })), hiring_team: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), email: Type.Optional(Type.Union([Type.String({ pattern: "^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$" }), Type.Null()])), hiring_team_roles: Type.Array(Type.Union([Type.Literal("RECRUITER"), Type.Literal("HIRING_MANAGER"), Type.Literal("COORDINATOR"), Type.Literal("SOURCER"), Type.Literal("INTERVIEWER")])), job_roles: Type.Array(Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), remote_label: Type.Union([Type.String(), Type.Null()]), scope: Type.Union([Type.Union([Type.Literal("SYSTEM"), Type.Literal("JOB")]), Type.Null()]), unified_type: Type.Union([Type.Union([Type.Literal("HIRING_MANAGER"), Type.Literal("RECRUITER"), Type.Literal("COORDINATOR"), Type.Literal("SOURCER"), Type.Literal("INTERVIEWER"), Type.Literal("ADMIN")]), Type.Null()]) })) })) })) }) });

export type PostAtsJobsJobIdApplicationsParameterJobId = Static<typeof PostAtsJobsJobIdApplicationsParameterJobId>;
export const PostAtsJobsJobIdApplicationsParameterJobId = Type.String();

export type PostAtsJobsJobIdApplicationsPositiveResponse = Static<typeof PostAtsJobsJobIdApplicationsPositiveResponse>;
export const PostAtsJobsJobIdApplicationsPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), outcome: Type.Union([Type.Union([Type.Literal("PENDING"), Type.Literal("HIRED"), Type.Literal("DECLINED")]), Type.Null()]), rejection_reason_name: Type.Union([Type.String(), Type.Null()]), rejected_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), current_stage_id: Type.Union([Type.String(), Type.Null()]), job_id: Type.Union([Type.String(), Type.Null()]), candidate_id: Type.Union([Type.String(), Type.Null()]), screening_question_answers: Type.Optional(Type.Union([Type.Array(Type.Union([Type.Object({ answer: Type.Object({ content: Type.Union([Type.String(), Type.Null()]) }), question: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), title: Type.String(), type: Type.String() }) }), Type.Object({ answer: Type.Object({ choice: Type.Union([Type.String(), Type.Null()]) }), question: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), title: Type.String(), type: Type.String() }) }), Type.Object({ answer: Type.Partial(Type.Object({ choices: Type.Array(Type.String()) })), question: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), title: Type.String(), type: Type.String() }) }), Type.Object({ answer: Type.Object({ checked: Type.Union([Type.Boolean(), Type.Null()]) }), question: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), title: Type.String(), type: Type.String() }) }), Type.Object({ answer: Type.Object({ number: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]) }), question: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), title: Type.String(), type: Type.String() }) }), Type.Object({ answer: Type.Object({ date: Type.Union([Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$" }), Type.Null()]) }), question: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), title: Type.String(), type: Type.String() }) }), Type.Object({ answer: Type.Partial(Type.Object({ raw: Type.Null() })), question: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), title: Type.String(), type: Type.String() }) })])), Type.Null()])), custom_fields: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), integration_fields: Type.Array(Type.Object({ id: Type.String(), key: Type.String(), type: Type.Union([Type.Literal("DEFAULT"), Type.Literal("CUSTOM")]), value: Type.Optional(Type.Null()), label: Type.Union([Type.String(), Type.Null()]) })), remote_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_created_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_updated_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), current_stage: Type.Union([Type.Object({ id: Type.String(), name: Type.Union([Type.String(), Type.Null()]), remote_id: Type.Union([Type.String(), Type.Null()]), index: Type.Union([Type.Integer(), Type.Null()]) }), Type.Null()]), job: Type.Union([Type.Object({ id: Type.String(), name: Type.Union([Type.String(), Type.Null()]), remote_id: Type.String() }), Type.Null()]), candidate: Type.Union([Type.Object({ id: Type.String(), remote_id: Type.String(), first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), company: Type.Union([Type.String(), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), confidential: Type.Union([Type.Boolean(), Type.Null()]), source: Type.Union([Type.String(), Type.Null()]), phone_numbers: Type.Optional(Type.Union([Type.Array(Type.Object({ phone_number: Type.String(), type: Type.Optional(Type.Union([Type.String(), Type.Null()])) })), Type.Null()])), email_addresses: Type.Optional(Type.Union([Type.Array(Type.Object({ email_address: Type.Optional(Type.Union([Type.String({ pattern: "^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$" }), Type.Null()])), type: Type.Union([Type.String(), Type.Null()]) })), Type.Null()])), social_media: Type.Optional(Type.Union([Type.Array(Type.Partial(Type.Object({ link: Type.Union([Type.String(), Type.Null()]), type: Type.Union([Type.String(), Type.Null()]), username: Type.Union([Type.String(), Type.Null()]) }))), Type.Null()])), location: Type.Optional(Type.Union([Type.Partial(Type.Object({ city: Type.Union([Type.String(), Type.Null()]), country: Type.Union([Type.String(), Type.Null()]), raw: Type.Union([Type.String(), Type.Null()]), state: Type.Union([Type.String(), Type.Null()]), street_1: Type.Union([Type.String(), Type.Null()]), street_2: Type.Union([Type.String(), Type.Null()]), zip_code: Type.Union([Type.String(), Type.Null()]) })), Type.Null()])), custom_fields: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), integration_fields: Type.Array(Type.Object({ id: Type.String(), key: Type.String(), type: Type.Union([Type.Literal("DEFAULT"), Type.Literal("CUSTOM")]), value: Type.Optional(Type.Null()), label: Type.Union([Type.String(), Type.Null()]) })), remote_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]), remote_created_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_updated_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), tags: Type.Array(Type.Object({ id: Type.String(), name: Type.Union([Type.String(), Type.Null()]), remote_id: Type.Union([Type.String(), Type.Null()]) })) }), Type.Null()]) }), warnings: Type.Array(Type.Object({ message: Type.String() })) });

export type PostAtsJobsJobIdApplicationsRequestBody = Static<typeof PostAtsJobsJobIdApplicationsRequestBody>;
export const PostAtsJobsJobIdApplicationsRequestBody = Type.Object({ stage_id: Type.Optional(Type.String()), candidate: Type.Object({ first_name: Type.String(), last_name: Type.String(), email_address: Type.String({ format: "email" }), additional_email_addresses: Type.Optional(Type.Array(Type.Object({ type: Type.Union([Type.Literal("PERSONAL"), Type.Literal("WORK"), Type.Literal("OTHER")]), email_address: Type.String({ format: "email" }) }))), company: Type.Optional(Type.String()), title: Type.Optional(Type.String()), phone_number: Type.Optional(Type.String()), additional_phone_numbers: Type.Optional(Type.Array(Type.Object({ type: Type.Union([Type.Literal("PERSONAL"), Type.Literal("WORK"), Type.Literal("OTHER")]), phone_number: Type.String() }))), location: Type.Optional(Type.Object({ city: Type.Optional(Type.String()), country: Type.String({ pattern: "^[A-Z]{2}$" }), state: Type.Optional(Type.String()), street_1: Type.Optional(Type.String()), zip_code: Type.Optional(Type.String()) })), gender: Type.Optional(Type.Union([Type.Literal("MALE"), Type.Literal("FEMALE"), Type.Literal("OTHER")])), availability_date: Type.Optional(Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" })), salary_expectations: Type.Optional(Type.Object({ period: Type.Union([Type.Literal("MONTH"), Type.Literal("YEAR")]), amount: Type.Number({ minimum: -1.7976931348623157e+308 }) })), social_links: Type.Optional(Type.Array(Type.Object({ url: Type.String({ format: "uri" }) }))) }), attachments: Type.Optional(Type.Array(Type.Object({ name: Type.String(), content_type: Type.Optional(Type.String({ pattern: "^[\\w.-]+\\/[\\w.-]+$" })), data_url: Type.Optional(Type.String({ format: "uri" })), data: Type.Optional(Type.String()), type: Type.Union([Type.Literal("CV"), Type.Literal("COVER_LETTER"), Type.Literal("OTHER")]) }))), source: Type.Optional(Type.Partial(Type.Object({ name: Type.String(), unified_key: Type.String(), id: Type.String() }))), sourced_by: Type.Optional(Type.Object({ user_id: Type.String() })), gdpr_consent: Type.Optional(Type.Partial(Type.Object({ expires_at: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }), given: Type.Boolean() }))), remote_fields: Type.Optional(Type.Intersect([Type.Partial(Type.Object({ successfactors: Type.Partial(Type.Object({ Candidate: Type.Record(Type.String(), Type.Unknown()), JobApplication: Type.Record(Type.String(), Type.Unknown()), copyJobApplicationAttachments: Type.Boolean(), update_existing_candidate: Type.Union([Type.Boolean(), Type.Null()]) })), personio: Type.Partial(Type.Object({ application: Type.Record(Type.String(), Type.Unknown()) })), talentsoft: Type.Partial(Type.Object({ applicant: Type.Record(Type.String(), Type.Unknown()), application: Type.Record(Type.String(), Type.Unknown()) })), teamtailor: Type.Partial(Type.Object({ candidate: Type.Record(Type.String(), Type.Unknown()), application: Type.Partial(Type.Object({ attributes: Type.Record(Type.String(), Type.Unknown()) })) })), greenhouse: Type.Partial(Type.Object({ candidate: Type.Record(Type.String(), Type.Unknown()), application: Type.Record(Type.String(), Type.Unknown()) })), lever: Type.Partial(Type.Object({ candidate: Type.Record(Type.String(), Type.Unknown()) })), workable: Type.Partial(Type.Object({ candidate: Type.Record(Type.String(), Type.Unknown()) })), workday: Type.Partial(Type.Object({ Candidate_Data: Type.Partial(Type.Object({ Name_Detail_Data: Type.Partial(Type.Object({ Middle_Name: Type.String(), Social_Suffix_Reference: Type.Object({ Predefined_Name_Component_ID: Type.String() }) })), Language_Reference: Type.Object({ WID: Type.String() }), Job_Application_Data: Type.Partial(Type.Object({ Job_Applied_To_Data: Type.Partial(Type.Object({ Global_Personal_Information_Data: Type.Partial(Type.Object({ Date_of_Birth: Type.String() })) })), Resume_Data: Type.Partial(Type.Object({ Education_Data: Type.Array(Type.Partial(Type.Object({ School_Name: Type.String(), First_Year_Attended: Type.Number({ minimum: -1.7976931348623157e+308 }), Last_Year_Attended: Type.Number({ minimum: -1.7976931348623157e+308 }), Field_of_Study_Reference: Type.Object({ WID: Type.String() }), Degree_Reference: Type.Object({ WID: Type.String() }), Grade_Average: Type.String() }))), Skill_Data: Type.Array(Type.Partial(Type.Object({ Skill_Name: Type.String() }))), Language_Data: Type.Array(Type.Partial(Type.Object({ Language_Reference: Type.Partial(Type.Object({ WID: Type.String() })), Language: Type.Object({ Native: Type.Optional(Type.Boolean()), Language_Ability: Type.Array(Type.Partial(Type.Object({ Language_Ability_Data: Type.Partial(Type.Object({ Language_Proficiency_Reference: Type.Object({ WID: Type.String() }), Language_Ability_Type_Reference: Type.Object({ WID: Type.String() }) })) }))) }) }))), Experience_Data: Type.Array(Type.Object({ Company_Name: Type.String(), Title: Type.String(), Location: Type.Optional(Type.String()), Start_Date: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }), End_Date: Type.Optional(Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" })), Currently_Work_Here: Type.Optional(Type.Boolean()), Description: Type.Optional(Type.String()) })) })) })), Contact_Data: Type.Partial(Type.Object({ Location_Data: Type.Partial(Type.Object({ Address_Line_1: Type.String(), Address_Line_2: Type.String(), Region_Subdivision_1: Type.String(), Country_Region_Reference: Type.Object({ Country_Region_ID: Type.String() }), Country_City_Reference: Type.Object({ WID: Type.String() }) })) })), Worker_Reference: Type.Partial(Type.Object({ WID: Type.String(), Employee_ID: Type.String() })) })), Override_Source_Reference_WID: Type.String() })), zohorecruit: Type.Partial(Type.Object({ candidate: Type.Record(Type.String(), Type.Unknown()) })), bullhorn: Type.Partial(Type.Object({ candidate: Type.Record(Type.String(), Type.Unknown()), job_submission: Type.Record(Type.String(), Type.Unknown()) })), smartrecruiters: Type.Partial(Type.Object({ candidate_with_questions: Type.Record(Type.String(), Type.Unknown()), candidate_without_questions: Type.Record(Type.String(), Type.Unknown()), candidate: Type.Record(Type.String(), Type.Unknown()), consent_decisions: Type.Partial(Type.Object({ SINGLE: Type.Boolean(), SMART_RECRUIT: Type.Boolean(), SMART_CRM: Type.Boolean(), SMART_MESSAGE_SMS: Type.Boolean(), SMART_MESSAGE_WHATSAPP: Type.Boolean() })) })), talentadore: Type.Partial(Type.Object({ applications: Type.Record(Type.String(), Type.Unknown()) })), guidecom: Type.Partial(Type.Object({ candidate: Type.Record(Type.String(), Type.Unknown()) })), dvinci: Type.Partial(Type.Object({ application: Type.Record(Type.String(), Type.Unknown()), candidate: Type.Record(Type.String(), Type.Unknown()) })), hrworks: Type.Partial(Type.Object({ jobApplication: Type.Record(Type.String(), Type.Unknown()) })), jobylon: Type.Partial(Type.Object({ application: Type.Partial(Type.Object({ message: Type.String() })) })), avature: Type.Partial(Type.Object({ workflow: Type.Partial(Type.Object({ step: Type.Object({ id: Type.Integer() }) })) })), recruitee: Type.Partial(Type.Object({ candidate: Type.Partial(Type.Object({ cover_letter_text: Type.String() })) })), rexx: Type.Partial(Type.Object({ candidate: Type.Record(Type.String(), Type.Unknown()) })), umantis: Type.Partial(Type.Object({ person: Type.Record(Type.String(), Type.Unknown()) })), piloga: Type.Partial(Type.Object({ candidate: Type.Partial(Type.Object({ street: Type.String() })) })), pinpoint: Type.Partial(Type.Object({ candidate: Type.Record(Type.String(), Type.Unknown()) })), covetorest: Type.Partial(Type.Object({ candidate: Type.Partial(Type.Object({ mandant: Type.Number({ minimum: -1.7976931348623157e+308 }) })) })) })), Type.Partial(Type.Object({ greenhouse: Type.Partial(Type.Object({ post_headers: Type.Partial(Type.Object({ "On-Behalf-Of": Type.Union([Type.String(), Type.Null()]) })) })), workable: Type.Partial(Type.Object({ on_behalf_of_user_remote_id: Type.String() })) }))])), screening_question_answers: Type.Optional(Type.Array(Type.Object({ question_id: Type.String(), answer: Type.Union([Type.String(), Type.Boolean(), Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Array(Type.String()), Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }), Type.Object({ name: Type.String(), content_type: Type.Optional(Type.String({ pattern: "^[\\w.-]+\\/[\\w.-]+$" })), data_url: Type.Optional(Type.String({ format: "uri" })), data: Type.Optional(Type.String()) })]) }))) });

export type GetAtsUsersParameterCursor = Static<typeof GetAtsUsersParameterCursor>;
export const GetAtsUsersParameterCursor = Type.String();

export type GetAtsUsersParameterPageSize = Static<typeof GetAtsUsersParameterPageSize>;
export const GetAtsUsersParameterPageSize = Type.Integer({ minimum: 1, maximum: 250 });

export type GetAtsUsersParameterUpdatedAfter = Static<typeof GetAtsUsersParameterUpdatedAfter>;
export const GetAtsUsersParameterUpdatedAfter = Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" });

export type GetAtsUsersParameterIncludeDeleted = Static<typeof GetAtsUsersParameterIncludeDeleted>;
export const GetAtsUsersParameterIncludeDeleted = Type.Union([Type.Literal("true"), Type.Literal("false")]);

export type GetAtsUsersParameterIgnoreUnsupportedFilters = Static<typeof GetAtsUsersParameterIgnoreUnsupportedFilters>;
export const GetAtsUsersParameterIgnoreUnsupportedFilters = Type.Union([Type.Literal("true"), Type.Literal("false")]);

export type GetAtsUsersParameterIds = Static<typeof GetAtsUsersParameterIds>;
export const GetAtsUsersParameterIds = Type.String();

export type GetAtsUsersParameterRemoteIds = Static<typeof GetAtsUsersParameterRemoteIds>;
export const GetAtsUsersParameterRemoteIds = Type.String();

export type GetAtsUsersParameterEmails = Static<typeof GetAtsUsersParameterEmails>;
export const GetAtsUsersParameterEmails = Type.String();

export type GetAtsUsersPositiveResponse = Static<typeof GetAtsUsersPositiveResponse>;
export const GetAtsUsersPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), email: Type.Optional(Type.Union([Type.String({ pattern: "^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$" }), Type.Null()])), status: Type.Union([Type.Union([Type.Literal("ACTIVE"), Type.Literal("INACTIVE")]), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), system_roles: Type.Array(Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), remote_label: Type.Union([Type.String(), Type.Null()]), scope: Type.Union([Type.Union([Type.Literal("SYSTEM"), Type.Literal("JOB")]), Type.Null()]), unified_type: Type.Union([Type.Union([Type.Literal("HIRING_MANAGER"), Type.Literal("RECRUITER"), Type.Literal("COORDINATOR"), Type.Literal("SOURCER"), Type.Literal("INTERVIEWER"), Type.Literal("ADMIN")]), Type.Null()]) })) })) }) });

export type GetAtsRolesParameterCursor = Static<typeof GetAtsRolesParameterCursor>;
export const GetAtsRolesParameterCursor = Type.String();

export type GetAtsRolesParameterPageSize = Static<typeof GetAtsRolesParameterPageSize>;
export const GetAtsRolesParameterPageSize = Type.Integer({ minimum: 1, maximum: 250 });

export type GetAtsRolesParameterUpdatedAfter = Static<typeof GetAtsRolesParameterUpdatedAfter>;
export const GetAtsRolesParameterUpdatedAfter = Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" });

export type GetAtsRolesParameterIncludeDeleted = Static<typeof GetAtsRolesParameterIncludeDeleted>;
export const GetAtsRolesParameterIncludeDeleted = Type.Union([Type.Literal("true"), Type.Literal("false")]);

export type GetAtsRolesParameterIgnoreUnsupportedFilters = Static<typeof GetAtsRolesParameterIgnoreUnsupportedFilters>;
export const GetAtsRolesParameterIgnoreUnsupportedFilters = Type.Union([Type.Literal("true"), Type.Literal("false")]);

export type GetAtsRolesParameterIds = Static<typeof GetAtsRolesParameterIds>;
export const GetAtsRolesParameterIds = Type.String();

export type GetAtsRolesParameterRemoteIds = Static<typeof GetAtsRolesParameterRemoteIds>;
export const GetAtsRolesParameterRemoteIds = Type.String();

export type GetAtsRolesParameterScopes = Static<typeof GetAtsRolesParameterScopes>;
export const GetAtsRolesParameterScopes = Type.String();

export type GetAtsRolesPositiveResponse = Static<typeof GetAtsRolesPositiveResponse>;
export const GetAtsRolesPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), remote_label: Type.Union([Type.String(), Type.Null()]), scope: Type.Union([Type.Union([Type.Literal("SYSTEM"), Type.Literal("JOB")]), Type.Null()]), unified_type: Type.Union([Type.Union([Type.Literal("HIRING_MANAGER"), Type.Literal("RECRUITER"), Type.Literal("COORDINATOR"), Type.Literal("SOURCER"), Type.Literal("INTERVIEWER"), Type.Literal("ADMIN")]), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]) })) }) });

export type GetAtsOffersParameterCursor = Static<typeof GetAtsOffersParameterCursor>;
export const GetAtsOffersParameterCursor = Type.String();

export type GetAtsOffersParameterPageSize = Static<typeof GetAtsOffersParameterPageSize>;
export const GetAtsOffersParameterPageSize = Type.Integer({ minimum: 1, maximum: 250 });

export type GetAtsOffersParameterUpdatedAfter = Static<typeof GetAtsOffersParameterUpdatedAfter>;
export const GetAtsOffersParameterUpdatedAfter = Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" });

export type GetAtsOffersParameterIncludeDeleted = Static<typeof GetAtsOffersParameterIncludeDeleted>;
export const GetAtsOffersParameterIncludeDeleted = Type.Union([Type.Literal("true"), Type.Literal("false")]);

export type GetAtsOffersParameterIgnoreUnsupportedFilters = Static<typeof GetAtsOffersParameterIgnoreUnsupportedFilters>;
export const GetAtsOffersParameterIgnoreUnsupportedFilters = Type.Union([Type.Literal("true"), Type.Literal("false")]);

export type GetAtsOffersParameterIds = Static<typeof GetAtsOffersParameterIds>;
export const GetAtsOffersParameterIds = Type.String();

export type GetAtsOffersParameterRemoteIds = Static<typeof GetAtsOffersParameterRemoteIds>;
export const GetAtsOffersParameterRemoteIds = Type.String();

export type GetAtsOffersPositiveResponse = Static<typeof GetAtsOffersPositiveResponse>;
export const GetAtsOffersPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), status: Type.Union([Type.Union([Type.Literal("ACCEPTED"), Type.Literal("DECLINED"), Type.Literal("SENT"), Type.Literal("APPROVED"), Type.Literal("DRAFT"), Type.Literal("ABANDONED")]), Type.Null()]), employment_start_date: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), application_id: Type.Union([Type.String(), Type.Null()]), custom_fields: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), integration_fields: Type.Array(Type.Object({ id: Type.String(), key: Type.String(), type: Type.Union([Type.Literal("DEFAULT"), Type.Literal("CUSTOM")]), value: Type.Optional(Type.Null()), label: Type.Union([Type.String(), Type.Null()]) })), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_created_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_updated_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), application: Type.Union([Type.Object({ candidate: Type.Union([Type.Object({ id: Type.String(), remote_id: Type.String(), first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), email_addresses: Type.Optional(Type.Union([Type.Array(Type.Object({ email_address: Type.Optional(Type.Union([Type.String({ pattern: "^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$" }), Type.Null()])), type: Type.Union([Type.String(), Type.Null()]) })), Type.Null()])) }), Type.Null()]), job: Type.Union([Type.Object({ id: Type.String(), remote_id: Type.String(), name: Type.Union([Type.String(), Type.Null()]) }), Type.Null()]) }), Type.Null()]) })) }) });

export type GetAtsRejectionReasonsParameterCursor = Static<typeof GetAtsRejectionReasonsParameterCursor>;
export const GetAtsRejectionReasonsParameterCursor = Type.String();

export type GetAtsRejectionReasonsParameterPageSize = Static<typeof GetAtsRejectionReasonsParameterPageSize>;
export const GetAtsRejectionReasonsParameterPageSize = Type.Integer({ minimum: 1, maximum: 250 });

export type GetAtsRejectionReasonsParameterUpdatedAfter = Static<typeof GetAtsRejectionReasonsParameterUpdatedAfter>;
export const GetAtsRejectionReasonsParameterUpdatedAfter = Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" });

export type GetAtsRejectionReasonsParameterIncludeDeleted = Static<typeof GetAtsRejectionReasonsParameterIncludeDeleted>;
export const GetAtsRejectionReasonsParameterIncludeDeleted = Type.Union([Type.Literal("true"), Type.Literal("false")]);

export type GetAtsRejectionReasonsParameterIgnoreUnsupportedFilters = Static<typeof GetAtsRejectionReasonsParameterIgnoreUnsupportedFilters>;
export const GetAtsRejectionReasonsParameterIgnoreUnsupportedFilters = Type.Union([Type.Literal("true"), Type.Literal("false")]);

export type GetAtsRejectionReasonsParameterIds = Static<typeof GetAtsRejectionReasonsParameterIds>;
export const GetAtsRejectionReasonsParameterIds = Type.String();

export type GetAtsRejectionReasonsParameterRemoteIds = Static<typeof GetAtsRejectionReasonsParameterRemoteIds>;
export const GetAtsRejectionReasonsParameterRemoteIds = Type.String();

export type GetAtsRejectionReasonsPositiveResponse = Static<typeof GetAtsRejectionReasonsPositiveResponse>;
export const GetAtsRejectionReasonsPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.String(), name: Type.Union([Type.String(), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]) })) }) });

export type GetAtsInterviewsParameterCursor = Static<typeof GetAtsInterviewsParameterCursor>;
export const GetAtsInterviewsParameterCursor = Type.String();

export type GetAtsInterviewsParameterPageSize = Static<typeof GetAtsInterviewsParameterPageSize>;
export const GetAtsInterviewsParameterPageSize = Type.Integer({ minimum: 1, maximum: 250 });

export type GetAtsInterviewsParameterUpdatedAfter = Static<typeof GetAtsInterviewsParameterUpdatedAfter>;
export const GetAtsInterviewsParameterUpdatedAfter = Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" });

export type GetAtsInterviewsParameterIncludeDeleted = Static<typeof GetAtsInterviewsParameterIncludeDeleted>;
export const GetAtsInterviewsParameterIncludeDeleted = Type.Union([Type.Literal("true"), Type.Literal("false")]);

export type GetAtsInterviewsParameterIgnoreUnsupportedFilters = Static<typeof GetAtsInterviewsParameterIgnoreUnsupportedFilters>;
export const GetAtsInterviewsParameterIgnoreUnsupportedFilters = Type.Union([Type.Literal("true"), Type.Literal("false")]);

export type GetAtsInterviewsParameterIds = Static<typeof GetAtsInterviewsParameterIds>;
export const GetAtsInterviewsParameterIds = Type.String();

export type GetAtsInterviewsParameterRemoteIds = Static<typeof GetAtsInterviewsParameterRemoteIds>;
export const GetAtsInterviewsParameterRemoteIds = Type.String();

export type GetAtsInterviewsParameterJobIds = Static<typeof GetAtsInterviewsParameterJobIds>;
export const GetAtsInterviewsParameterJobIds = Type.String();

export type GetAtsInterviewsPositiveResponse = Static<typeof GetAtsInterviewsPositiveResponse>;
export const GetAtsInterviewsPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), starting_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), ending_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), location: Type.Optional(Type.Union([Type.Partial(Type.Object({ city: Type.Union([Type.String(), Type.Null()]), country: Type.Union([Type.String(), Type.Null()]), raw: Type.Union([Type.String(), Type.Null()]), state: Type.Union([Type.String(), Type.Null()]), street_1: Type.Union([Type.String(), Type.Null()]), street_2: Type.Union([Type.String(), Type.Null()]), zip_code: Type.Union([Type.String(), Type.Null()]) })), Type.Null()])), video_conferencing_url: Type.Union([Type.String(), Type.Null()]), application_id: Type.Union([Type.String(), Type.Null()]), stage_id: Type.Union([Type.String(), Type.Null()]), canceled: Type.Union([Type.Boolean(), Type.Null()]), remote_created_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_updated_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), users: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), email: Type.Optional(Type.Union([Type.String({ pattern: "^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$" }), Type.Null()])) })), application: Type.Union([Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), outcome: Type.Union([Type.Union([Type.Literal("PENDING"), Type.Literal("HIRED"), Type.Literal("DECLINED")]), Type.Null()]), rejection_reason_name: Type.Union([Type.String(), Type.Null()]), candidate: Type.Union([Type.Object({ id: Type.String(), remote_id: Type.String(), first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), email_addresses: Type.Optional(Type.Union([Type.Array(Type.Object({ email_address: Type.Optional(Type.Union([Type.String({ pattern: "^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$" }), Type.Null()])), type: Type.Union([Type.String(), Type.Null()]) })), Type.Null()])) }), Type.Null()]), job: Type.Union([Type.Object({ id: Type.String(), remote_id: Type.String(), name: Type.Union([Type.String(), Type.Null()]) }), Type.Null()]) }), Type.Null()]) })) }) });

export type GetAtsActionsAtsCreateCandidatePositiveResponse = Static<typeof GetAtsActionsAtsCreateCandidatePositiveResponse>;
export const GetAtsActionsAtsCreateCandidatePositiveResponse = Type.Object({ status: Type.String(), data: Type.Partial(Type.Object({ attachment_restrictions: Type.Union([Type.Object({ total_size_bytes: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), types: Type.Object({ CV: Type.Union([Type.Object({ is_supported: Type.Boolean(), min_amount: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), max_amount: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), max_file_size_bytes: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), accepted_mime_types: Type.Union([Type.Array(Type.String()), Type.Null()]) }), Type.Object({ is_supported: Type.Boolean() })]), COVER_LETTER: Type.Union([Type.Object({ is_supported: Type.Boolean(), min_amount: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), max_amount: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), max_file_size_bytes: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), accepted_mime_types: Type.Union([Type.Array(Type.String()), Type.Null()]) }), Type.Object({ is_supported: Type.Boolean() })]), OTHER: Type.Union([Type.Object({ is_supported: Type.Boolean(), min_amount: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), max_amount: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), max_file_size_bytes: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), accepted_mime_types: Type.Union([Type.Array(Type.String()), Type.Null()]) }), Type.Object({ is_supported: Type.Boolean() })]) }) }), Type.Null()]) })) });

export type GetAtsActionsAtsCreateApplicationPositiveResponse = Static<typeof GetAtsActionsAtsCreateApplicationPositiveResponse>;
export const GetAtsActionsAtsCreateApplicationPositiveResponse = Type.Object({ status: Type.String(), data: Type.Partial(Type.Object({ attachment_restrictions: Type.Union([Type.Object({ total_size_bytes: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), types: Type.Object({ CV: Type.Union([Type.Object({ is_supported: Type.Boolean(), min_amount: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), max_amount: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), max_file_size_bytes: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), accepted_mime_types: Type.Union([Type.Array(Type.String()), Type.Null()]) }), Type.Object({ is_supported: Type.Boolean() })]), COVER_LETTER: Type.Union([Type.Object({ is_supported: Type.Boolean(), min_amount: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), max_amount: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), max_file_size_bytes: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), accepted_mime_types: Type.Union([Type.Array(Type.String()), Type.Null()]) }), Type.Object({ is_supported: Type.Boolean() })]), OTHER: Type.Union([Type.Object({ is_supported: Type.Boolean(), min_amount: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), max_amount: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), max_file_size_bytes: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), accepted_mime_types: Type.Union([Type.Array(Type.String()), Type.Null()]) }), Type.Object({ is_supported: Type.Boolean() })]) }) }), Type.Null()]) })) });

export type GetAtsActionsAtsAddApplicationAttachmentPositiveResponse = Static<typeof GetAtsActionsAtsAddApplicationAttachmentPositiveResponse>;
export const GetAtsActionsAtsAddApplicationAttachmentPositiveResponse = Type.Object({ status: Type.String(), data: Type.Partial(Type.Object({ attachment_restrictions: Type.Union([Type.Object({ types: Type.Object({ CV: Type.Union([Type.Object({ is_supported: Type.Boolean(), max_file_size_bytes: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), accepted_mime_types: Type.Union([Type.Array(Type.String()), Type.Null()]) }), Type.Object({ is_supported: Type.Boolean() })]), COVER_LETTER: Type.Union([Type.Object({ is_supported: Type.Boolean(), max_file_size_bytes: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), accepted_mime_types: Type.Union([Type.Array(Type.String()), Type.Null()]) }), Type.Object({ is_supported: Type.Boolean() })]), OTHER: Type.Union([Type.Object({ is_supported: Type.Boolean(), max_file_size_bytes: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), accepted_mime_types: Type.Union([Type.Array(Type.String()), Type.Null()]) }), Type.Object({ is_supported: Type.Boolean() })]) }) }), Type.Null()]) })) });

export type GetAtsActionsAtsAddCandidateAttachmentPositiveResponse = Static<typeof GetAtsActionsAtsAddCandidateAttachmentPositiveResponse>;
export const GetAtsActionsAtsAddCandidateAttachmentPositiveResponse = Type.Object({ status: Type.String(), data: Type.Partial(Type.Object({ attachment_restrictions: Type.Union([Type.Object({ types: Type.Object({ CV: Type.Union([Type.Object({ is_supported: Type.Boolean(), max_file_size_bytes: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), accepted_mime_types: Type.Union([Type.Array(Type.String()), Type.Null()]) }), Type.Object({ is_supported: Type.Boolean() })]), COVER_LETTER: Type.Union([Type.Object({ is_supported: Type.Boolean(), max_file_size_bytes: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), accepted_mime_types: Type.Union([Type.Array(Type.String()), Type.Null()]) }), Type.Object({ is_supported: Type.Boolean() })]), OTHER: Type.Union([Type.Object({ is_supported: Type.Boolean(), max_file_size_bytes: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), accepted_mime_types: Type.Union([Type.Array(Type.String()), Type.Null()]) }), Type.Object({ is_supported: Type.Boolean() })]) }) }), Type.Null()]) })) });

export type PostAtsImportTrackedApplicationPositiveResponse = Static<typeof PostAtsImportTrackedApplicationPositiveResponse>;
export const PostAtsImportTrackedApplicationPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ id: Type.String({ minLength: 24, maxLength: 24, pattern: "^[1-9A-HJ-NP-Za-km-z]+$" }), tracked_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), imported_id: Type.Partial(Type.Object({ erecruiter: Type.Union([Type.Object({ id_type: Type.String(), application_remote_id: Type.String(), job_remote_id: Type.String() }), Type.Object({ id_type: Type.String(), candidate_remote_id: Type.String(), application_remote_id: Type.String() })]), successfactors: Type.Object({ id_type: Type.String(), application_remote_id: Type.String() }), recruitee: Type.Object({ id_type: Type.String(), placement_id: Type.String() }), greenhouse: Type.Object({ id_type: Type.String(), application_id: Type.String() }), onlyfy: Type.Object({ id_type: Type.String(), application_id: Type.String() }), smartrecruiters: Type.Object({ id_type: Type.String(), candidate_remote_id: Type.String(), job_remote_id: Type.String() }) })) }), warnings: Type.Array(Type.Object({ message: Type.String() })) });

export type PostAtsImportTrackedApplicationRequestBody = Static<typeof PostAtsImportTrackedApplicationRequestBody>;
export const PostAtsImportTrackedApplicationRequestBody = Type.Object({ erecruiter: Type.Optional(Type.Union([Type.Object({ id_type: Type.String(), application_remote_id: Type.String(), job_remote_id: Type.String() }), Type.Object({ id_type: Type.String(), candidate_remote_id: Type.String(), application_remote_id: Type.String() })])), successfactors: Type.Optional(Type.Object({ id_type: Type.String(), application_remote_id: Type.String() })), recruitee: Type.Optional(Type.Object({ id_type: Type.String(), placement_id: Type.String() })), greenhouse: Type.Optional(Type.Object({ id_type: Type.String(), application_id: Type.String() })), onlyfy: Type.Optional(Type.Object({ id_type: Type.String(), application_id: Type.String() })), smartrecruiters: Type.Optional(Type.Object({ id_type: Type.String(), candidate_remote_id: Type.String(), job_remote_id: Type.String() })), tracked_at: Type.Union([Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }), Type.Null()]) });

export type PostAtsCustomAvionteSyncedJobsPositiveResponse = Static<typeof PostAtsCustomAvionteSyncedJobsPositiveResponse>;
export const PostAtsCustomAvionteSyncedJobsPositiveResponse = Type.Object({ status: Type.String(), data: Type.Record(Type.String(), Type.Unknown()) });

export type PostAtsCustomAvionteSyncedJobsRequestBody = Static<typeof PostAtsCustomAvionteSyncedJobsRequestBody>;
export const PostAtsCustomAvionteSyncedJobsRequestBody = Type.Object({ job_remote_id: Type.String({ pattern: "^\\d+$" }) });

export type DeleteAtsCustomAvionteSyncedJobsJobRemoteIdParameterJobRemoteId = Static<typeof DeleteAtsCustomAvionteSyncedJobsJobRemoteIdParameterJobRemoteId>;
export const DeleteAtsCustomAvionteSyncedJobsJobRemoteIdParameterJobRemoteId = Type.String();

export type DeleteAtsCustomAvionteSyncedJobsJobRemoteIdPositiveResponse = Static<typeof DeleteAtsCustomAvionteSyncedJobsJobRemoteIdPositiveResponse>;
export const DeleteAtsCustomAvionteSyncedJobsJobRemoteIdPositiveResponse = Type.Object({ status: Type.String(), data: Type.Record(Type.String(), Type.Unknown()) });

export type DeleteAtsCustomAvionteSyncedJobsJobRemoteIdRequestBody = Static<typeof DeleteAtsCustomAvionteSyncedJobsJobRemoteIdRequestBody>;
export const DeleteAtsCustomAvionteSyncedJobsJobRemoteIdRequestBody = Type.Partial(Type.Object({  }));

export type GetAssessmentPackagesPositiveResponse = Static<typeof GetAssessmentPackagesPositiveResponse>;
export const GetAssessmentPackagesPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ packages: Type.Array(Type.Object({ id: Type.String(), name: Type.String(), description: Type.String(), updated_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), type: Type.Union([Type.Union([Type.Literal("BEHAVIORAL"), Type.Literal("VIDEO_INTERVIEW"), Type.Literal("SKILLS_TEST"), Type.Literal("BACKGROUND_CHECK"), Type.Literal("REFERENCE_CHECK")]), Type.Null()]) })) }) });

export type PutAssessmentPackagesPositiveResponse = Static<typeof PutAssessmentPackagesPositiveResponse>;
export const PutAssessmentPackagesPositiveResponse = Type.Object({ status: Type.String(), data: Type.Record(Type.String(), Type.Unknown()), warnings: Type.Array(Type.Object({ message: Type.String() })) });

export type PutAssessmentPackagesRequestBody = Static<typeof PutAssessmentPackagesRequestBody>;
export const PutAssessmentPackagesRequestBody = Type.Object({ packages: Type.Array(Type.Object({ id: Type.String(), type: Type.Union([Type.Literal("BEHAVIORAL"), Type.Literal("VIDEO_INTERVIEW"), Type.Literal("SKILLS_TEST"), Type.Literal("BACKGROUND_CHECK"), Type.Literal("REFERENCE_CHECK")]), name: Type.String(), description: Type.String() })) });

export type GetAssessmentOrdersParameterCursor = Static<typeof GetAssessmentOrdersParameterCursor>;
export const GetAssessmentOrdersParameterCursor = Type.String();

export type GetAssessmentOrdersParameterPageSize = Static<typeof GetAssessmentOrdersParameterPageSize>;
export const GetAssessmentOrdersParameterPageSize = Type.Integer({ minimum: 1, maximum: 250 });

export type GetAssessmentOrdersParameterIds = Static<typeof GetAssessmentOrdersParameterIds>;
export const GetAssessmentOrdersParameterIds = Type.String();

export type GetAssessmentOrdersParameterStatuses = Static<typeof GetAssessmentOrdersParameterStatuses>;
export const GetAssessmentOrdersParameterStatuses = Type.String();

export type GetAssessmentOrdersParameterCreatedAfter = Static<typeof GetAssessmentOrdersParameterCreatedAfter>;
export const GetAssessmentOrdersParameterCreatedAfter = Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" });

export type GetAssessmentOrdersPositiveResponse = Static<typeof GetAssessmentOrdersPositiveResponse>;
export const GetAssessmentOrdersPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), package_id: Type.String(), status: Type.Union([Type.Literal("OPEN"), Type.Literal("COMPLETED"), Type.Literal("CANCELLED"), Type.Literal("REJECTED")]), candidate: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), email: Type.String({ format: "email" }), first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), phone: Type.Union([Type.String(), Type.Null()]) }), application: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]) }), job: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), name: Type.Union([Type.String(), Type.Null()]), job_code: Type.Union([Type.String(), Type.Null()]), description: Type.Union([Type.String(), Type.Null()]), location: Type.Union([Type.Partial(Type.Object({ street_1: Type.Union([Type.String(), Type.Null()]), street_2: Type.Union([Type.String(), Type.Null()]), city: Type.Union([Type.String(), Type.Null()]), state: Type.Union([Type.String(), Type.Null()]), zip_code: Type.Union([Type.String(), Type.Null()]), country: Type.Union([Type.String(), Type.Null()]), raw: Type.Union([Type.String(), Type.Null()]) })), Type.Null()]), hiring_team: Type.Array(Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), email: Type.Union([Type.String(), Type.Null()]), first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), hiring_team_roles: Type.Array(Type.Union([Type.Literal("RECRUITER"), Type.Literal("HIRING_MANAGER")])) })) }) })) }) });

export type GetAssessmentOrdersOpenParameterCursor = Static<typeof GetAssessmentOrdersOpenParameterCursor>;
export const GetAssessmentOrdersOpenParameterCursor = Type.String();

export type GetAssessmentOrdersOpenParameterPageSize = Static<typeof GetAssessmentOrdersOpenParameterPageSize>;
export const GetAssessmentOrdersOpenParameterPageSize = Type.Integer({ minimum: 1, maximum: 250 });

export type GetAssessmentOrdersOpenPositiveResponse = Static<typeof GetAssessmentOrdersOpenPositiveResponse>;
export const GetAssessmentOrdersOpenPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), package_id: Type.String(), candidate: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), email: Type.String({ format: "email" }), first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), phone: Type.Union([Type.String(), Type.Null()]) }), application: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]) }), job: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), name: Type.Union([Type.String(), Type.Null()]), job_code: Type.Union([Type.String(), Type.Null()]), description: Type.Union([Type.String(), Type.Null()]), location: Type.Union([Type.Partial(Type.Object({ street_1: Type.Union([Type.String(), Type.Null()]), street_2: Type.Union([Type.String(), Type.Null()]), city: Type.Union([Type.String(), Type.Null()]), state: Type.Union([Type.String(), Type.Null()]), zip_code: Type.Union([Type.String(), Type.Null()]), country: Type.Union([Type.String(), Type.Null()]), raw: Type.Union([Type.String(), Type.Null()]) })), Type.Null()]), hiring_team: Type.Array(Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), email: Type.Union([Type.String(), Type.Null()]), first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), hiring_team_roles: Type.Array(Type.Union([Type.Literal("RECRUITER"), Type.Literal("HIRING_MANAGER")])) })) }) })) }) });

export type PutAssessmentOrdersAssessmentOrderIdResultParameterAssessmentOrderId = Static<typeof PutAssessmentOrdersAssessmentOrderIdResultParameterAssessmentOrderId>;
export const PutAssessmentOrdersAssessmentOrderIdResultParameterAssessmentOrderId = Type.String();

export type PutAssessmentOrdersAssessmentOrderIdResultPositiveResponse = Static<typeof PutAssessmentOrdersAssessmentOrderIdResultPositiveResponse>;
export const PutAssessmentOrdersAssessmentOrderIdResultPositiveResponse = Type.Object({ status: Type.String(), data: Type.Record(Type.String(), Type.Unknown()), warnings: Type.Array(Type.Object({ message: Type.String() })) });

export type PutAssessmentOrdersAssessmentOrderIdResultRequestBody = Static<typeof PutAssessmentOrdersAssessmentOrderIdResultRequestBody>;
export const PutAssessmentOrdersAssessmentOrderIdResultRequestBody = Type.Object({ status: Type.Union([Type.Literal("COMPLETED"), Type.Literal("CANCELLED"), Type.Literal("OPEN")]), result_url: Type.String({ format: "uri" }), completed_at: Type.Optional(Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" })), score: Type.Optional(Type.Number({ minimum: -1.7976931348623157e+308 })), max_score: Type.Optional(Type.Number({ minimum: -1.7976931348623157e+308 })), attributes: Type.Optional(Type.Array(Type.Union([Type.Object({ type: Type.String(), label: Type.String(), value: Type.String() }), Type.Object({ type: Type.String(), id: Type.String(), label: Type.String(), score: Type.Object({ value: Type.Number({ minimum: -1.7976931348623157e+308 }), max: Type.Number({ minimum: 1 }) }), status: Type.Union([Type.Literal("COMPLETED"), Type.Literal("CANCELLED")]) })]))), attachments: Type.Optional(Type.Array(Type.Object({ name: Type.String(), content_type: Type.Optional(Type.String({ pattern: "^[\\w.-]+\\/[\\w.-]+$" })), data_url: Type.Optional(Type.String({ format: "uri" })), data: Type.Optional(Type.String()) }), { maxItems: 5 })), remote_fields: Type.Optional(Type.Partial(Type.Object({ smartrecruiters: Type.Partial(Type.Object({ scoreLabel: Type.String() })), recruitee: Type.Partial(Type.Object({ subtitle: Type.String() })) }))) });

export type GetLmsUsersParameterCursor = Static<typeof GetLmsUsersParameterCursor>;
export const GetLmsUsersParameterCursor = Type.String();

export type GetLmsUsersParameterPageSize = Static<typeof GetLmsUsersParameterPageSize>;
export const GetLmsUsersParameterPageSize = Type.Integer({ minimum: 1, maximum: 250 });

export type GetLmsUsersParameterUpdatedAfter = Static<typeof GetLmsUsersParameterUpdatedAfter>;
export const GetLmsUsersParameterUpdatedAfter = Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" });

export type GetLmsUsersParameterIncludeDeleted = Static<typeof GetLmsUsersParameterIncludeDeleted>;
export const GetLmsUsersParameterIncludeDeleted = Type.Union([Type.Literal("true"), Type.Literal("false")]);

export type GetLmsUsersParameterIgnoreUnsupportedFilters = Static<typeof GetLmsUsersParameterIgnoreUnsupportedFilters>;
export const GetLmsUsersParameterIgnoreUnsupportedFilters = Type.Union([Type.Literal("true"), Type.Literal("false")]);

export type GetLmsUsersParameterIds = Static<typeof GetLmsUsersParameterIds>;
export const GetLmsUsersParameterIds = Type.String();

export type GetLmsUsersParameterRemoteIds = Static<typeof GetLmsUsersParameterRemoteIds>;
export const GetLmsUsersParameterRemoteIds = Type.String();

export type GetLmsUsersParameterWorkEmails = Static<typeof GetLmsUsersParameterWorkEmails>;
export const GetLmsUsersParameterWorkEmails = Type.String();

export type GetLmsUsersPositiveResponse = Static<typeof GetLmsUsersPositiveResponse>;
export const GetLmsUsersPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.String(), first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), work_email: Type.Union([Type.String(), Type.Null()]), status: Type.Union([Type.Union([Type.Literal("ACTIVE"), Type.Literal("INACTIVE")]), Type.Null()]), remote_created_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), custom_fields: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), integration_fields: Type.Array(Type.Object({ id: Type.String(), key: Type.String(), type: Type.Union([Type.Literal("DEFAULT"), Type.Literal("CUSTOM")]), value: Type.Optional(Type.Null()), label: Type.Union([Type.String(), Type.Null()]) })) })) }) });

export type GetLmsCourseProgressionsParameterCursor = Static<typeof GetLmsCourseProgressionsParameterCursor>;
export const GetLmsCourseProgressionsParameterCursor = Type.String();

export type GetLmsCourseProgressionsParameterPageSize = Static<typeof GetLmsCourseProgressionsParameterPageSize>;
export const GetLmsCourseProgressionsParameterPageSize = Type.Integer({ minimum: 1, maximum: 250 });

export type GetLmsCourseProgressionsParameterUpdatedAfter = Static<typeof GetLmsCourseProgressionsParameterUpdatedAfter>;
export const GetLmsCourseProgressionsParameterUpdatedAfter = Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" });

export type GetLmsCourseProgressionsParameterIncludeDeleted = Static<typeof GetLmsCourseProgressionsParameterIncludeDeleted>;
export const GetLmsCourseProgressionsParameterIncludeDeleted = Type.Union([Type.Literal("true"), Type.Literal("false")]);

export type GetLmsCourseProgressionsParameterIgnoreUnsupportedFilters = Static<typeof GetLmsCourseProgressionsParameterIgnoreUnsupportedFilters>;
export const GetLmsCourseProgressionsParameterIgnoreUnsupportedFilters = Type.Union([Type.Literal("true"), Type.Literal("false")]);

export type GetLmsCourseProgressionsParameterIds = Static<typeof GetLmsCourseProgressionsParameterIds>;
export const GetLmsCourseProgressionsParameterIds = Type.String();

export type GetLmsCourseProgressionsParameterRemoteIds = Static<typeof GetLmsCourseProgressionsParameterRemoteIds>;
export const GetLmsCourseProgressionsParameterRemoteIds = Type.String();

export type GetLmsCourseProgressionsParameterUserIds = Static<typeof GetLmsCourseProgressionsParameterUserIds>;
export const GetLmsCourseProgressionsParameterUserIds = Type.String();

export type GetLmsCourseProgressionsParameterCourseIds = Static<typeof GetLmsCourseProgressionsParameterCourseIds>;
export const GetLmsCourseProgressionsParameterCourseIds = Type.String();

export type GetLmsCourseProgressionsPositiveResponse = Static<typeof GetLmsCourseProgressionsPositiveResponse>;
export const GetLmsCourseProgressionsPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.String(), user_id: Type.String(), course_revision_id: Type.String(), status: Type.Union([Type.Union([Type.Literal("ENROLLED"), Type.Literal("IN_PROGRESS"), Type.Literal("COMPLETED"), Type.Literal("DROPPED")]), Type.Null()]), enrolled_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), completed_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), user: Type.Object({ id: Type.String(), remote_id: Type.String(), first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), work_email: Type.Union([Type.String(), Type.Null()]) }), course_revision: Type.Object({ id: Type.String(), remote_id: Type.String(), title: Type.Union([Type.String(), Type.Null()]), course: Type.Union([Type.Object({ id: Type.String(), remote_id: Type.String() }), Type.Null()]) }) })) }) });

export type PostLmsCourseProgressionsPositiveResponse = Static<typeof PostLmsCourseProgressionsPositiveResponse>;
export const PostLmsCourseProgressionsPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ id: Type.String(), remote_id: Type.String(), user_id: Type.String(), course_revision_id: Type.String(), status: Type.Union([Type.Union([Type.Literal("ENROLLED"), Type.Literal("IN_PROGRESS"), Type.Literal("COMPLETED"), Type.Literal("DROPPED")]), Type.Null()]), enrolled_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), completed_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), user: Type.Object({ id: Type.String(), remote_id: Type.String(), first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), work_email: Type.Union([Type.String(), Type.Null()]) }), course_revision: Type.Object({ id: Type.String(), remote_id: Type.String(), title: Type.Union([Type.String(), Type.Null()]), course: Type.Union([Type.Object({ id: Type.String(), remote_id: Type.String() }), Type.Null()]) }) }), warnings: Type.Array(Type.Object({ message: Type.String() })) });

export type PostLmsCourseProgressionsRequestBody = Static<typeof PostLmsCourseProgressionsRequestBody>;
export const PostLmsCourseProgressionsRequestBody = Type.Object({ user_id: Type.String(), course_revision_id: Type.String() });

export type PostLmsCourseProgressionsCourseProgressionIdCompleteParameterCourseProgressionId = Static<typeof PostLmsCourseProgressionsCourseProgressionIdCompleteParameterCourseProgressionId>;
export const PostLmsCourseProgressionsCourseProgressionIdCompleteParameterCourseProgressionId = Type.String();

export type PostLmsCourseProgressionsCourseProgressionIdCompletePositiveResponse = Static<typeof PostLmsCourseProgressionsCourseProgressionIdCompletePositiveResponse>;
export const PostLmsCourseProgressionsCourseProgressionIdCompletePositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ id: Type.String(), remote_id: Type.String(), user_id: Type.String(), course_revision_id: Type.String(), status: Type.Union([Type.Union([Type.Literal("ENROLLED"), Type.Literal("IN_PROGRESS"), Type.Literal("COMPLETED"), Type.Literal("DROPPED")]), Type.Null()]), enrolled_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), completed_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), user: Type.Object({ id: Type.String(), remote_id: Type.String(), first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), work_email: Type.Union([Type.String(), Type.Null()]) }), course_revision: Type.Object({ id: Type.String(), remote_id: Type.String(), title: Type.Union([Type.String(), Type.Null()]), course: Type.Union([Type.Object({ id: Type.String(), remote_id: Type.String() }), Type.Null()]) }) }), warnings: Type.Array(Type.Object({ message: Type.String() })) });

export type PostLmsCourseProgressionsCourseProgressionIdCompleteRequestBody = Static<typeof PostLmsCourseProgressionsCourseProgressionIdCompleteRequestBody>;
export const PostLmsCourseProgressionsCourseProgressionIdCompleteRequestBody = Type.Partial(Type.Object({ completed_at: Type.Union([Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }), Type.Null()]), score: Type.Union([Type.Integer({ minimum: 0, maximum: 100 }), Type.Null()]) }));

export type GetLmsCoursesParameterCursor = Static<typeof GetLmsCoursesParameterCursor>;
export const GetLmsCoursesParameterCursor = Type.String();

export type GetLmsCoursesParameterPageSize = Static<typeof GetLmsCoursesParameterPageSize>;
export const GetLmsCoursesParameterPageSize = Type.Integer({ minimum: 1, maximum: 250 });

export type GetLmsCoursesParameterUpdatedAfter = Static<typeof GetLmsCoursesParameterUpdatedAfter>;
export const GetLmsCoursesParameterUpdatedAfter = Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" });

export type GetLmsCoursesParameterIncludeDeleted = Static<typeof GetLmsCoursesParameterIncludeDeleted>;
export const GetLmsCoursesParameterIncludeDeleted = Type.Union([Type.Literal("true"), Type.Literal("false")]);

export type GetLmsCoursesParameterIgnoreUnsupportedFilters = Static<typeof GetLmsCoursesParameterIgnoreUnsupportedFilters>;
export const GetLmsCoursesParameterIgnoreUnsupportedFilters = Type.Union([Type.Literal("true"), Type.Literal("false")]);

export type GetLmsCoursesParameterIds = Static<typeof GetLmsCoursesParameterIds>;
export const GetLmsCoursesParameterIds = Type.String();

export type GetLmsCoursesParameterRemoteIds = Static<typeof GetLmsCoursesParameterRemoteIds>;
export const GetLmsCoursesParameterRemoteIds = Type.String();

export type GetLmsCoursesPositiveResponse = Static<typeof GetLmsCoursesPositiveResponse>;
export const GetLmsCoursesPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.String(), provider_id: Type.Union([Type.String(), Type.Null()]), origin_id: Type.Union([Type.String(), Type.Null()]), remote_created_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), custom_fields: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), integration_fields: Type.Array(Type.Object({ id: Type.String(), key: Type.String(), type: Type.Union([Type.Literal("DEFAULT"), Type.Literal("CUSTOM")]), value: Type.Optional(Type.Null()), label: Type.Union([Type.String(), Type.Null()]) })), provider: Type.Union([Type.Object({ id: Type.String(), remote_id: Type.String(), name: Type.Union([Type.String(), Type.Null()]) }), Type.Null()]), revisions: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.String(), course_id: Type.Union([Type.String(), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), description: Type.Union([Type.String(), Type.Null()]), remote_url: Type.Union([Type.String(), Type.Null()]), status: Type.Union([Type.Union([Type.Literal("ACTIVE"), Type.Literal("INACTIVE")]), Type.Null()]), remote_created_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), custom_fields: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), integration_fields: Type.Array(Type.Object({ id: Type.String(), key: Type.String(), type: Type.Union([Type.Literal("DEFAULT"), Type.Literal("CUSTOM")]), value: Type.Optional(Type.Null()), label: Type.Union([Type.String(), Type.Null()]) })), skill_assignments: Type.Array(Type.Object({ skill: Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), name: Type.Union([Type.String(), Type.Null()]) }) })) })) })) }) });

export type PostLmsCoursesBulkPositiveResponse = Static<typeof PostLmsCoursesBulkPositiveResponse>;
export const PostLmsCoursesBulkPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ task_id: Type.String() }), warnings: Type.Array(Type.Object({ message: Type.String() })) });

export type PostLmsCoursesBulkRequestBody = Static<typeof PostLmsCoursesBulkRequestBody>;
export const PostLmsCoursesBulkRequestBody = Type.Object({ items: Type.Array(Type.Object({ origin_id: Type.String(), course: Type.Object({ type: Type.String(), title: Type.String(), description: Type.Optional(Type.Union([Type.String(), Type.Null()])), course_url: Type.String(), thumbnail_url: Type.Optional(Type.Union([Type.String(), Type.Null()])), duration: Type.Optional(Type.Union([Type.Integer({ exclusiveMinimum: 0 }), Type.Null()])), languages: Type.Optional(Type.Union([Type.Array(Type.String({ pattern: "^[a-z]{2,3}(-[A-Z]{2})?$" })), Type.Null()])) }) })) });

export type GetLmsCoursesBulkTaskIdParameterTaskId = Static<typeof GetLmsCoursesBulkTaskIdParameterTaskId>;
export const GetLmsCoursesBulkTaskIdParameterTaskId = Type.String();

export type GetLmsCoursesBulkTaskIdPositiveResponse = Static<typeof GetLmsCoursesBulkTaskIdPositiveResponse>;
export const GetLmsCoursesBulkTaskIdPositiveResponse = Type.Object({ status: Type.String(), data: Type.Union([Type.Object({ task_id: Type.String(), created_at: Type.String(), status: Type.String(), completed_at: Type.Null() }), Type.Object({ task_id: Type.String(), created_at: Type.String(), status: Type.String(), data: Type.Array(Type.Union([Type.Object({ origin_id: Type.String(), status: Type.String(), data: Type.Object({ id: Type.String() }) }), Type.Object({ origin_id: Type.String(), status: Type.String(), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"), Type.Literal("ATS.JOB_CLOSED"), Type.Literal("ATS.APPLICATION_ALREADY_EXISTS"), Type.Literal("LMS.COURSE_UPDATE_NOT_SUPPORTED"), Type.Literal("AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING"), Type.Literal("AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String(), Type.Null()]) }) })])), completed_at: Type.String({ format: "date-time" }) }), Type.Object({ task_id: Type.String(), created_at: Type.String(), status: Type.String(), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"), Type.Literal("ATS.JOB_CLOSED"), Type.Literal("ATS.APPLICATION_ALREADY_EXISTS"), Type.Literal("LMS.COURSE_UPDATE_NOT_SUPPORTED"), Type.Literal("AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING"), Type.Literal("AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String(), Type.Null()]) }), completed_at: Type.String({ format: "date-time" }) })]) });

export type PostLmsCoursesCourseIdDeactivateParameterCourseId = Static<typeof PostLmsCoursesCourseIdDeactivateParameterCourseId>;
export const PostLmsCoursesCourseIdDeactivateParameterCourseId = Type.String();

export type PostLmsCoursesCourseIdDeactivatePositiveResponse = Static<typeof PostLmsCoursesCourseIdDeactivatePositiveResponse>;
export const PostLmsCoursesCourseIdDeactivatePositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ id: Type.String(), remote_id: Type.String(), provider_id: Type.Union([Type.String(), Type.Null()]), origin_id: Type.Union([Type.String(), Type.Null()]), remote_created_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), custom_fields: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), integration_fields: Type.Array(Type.Object({ id: Type.String(), key: Type.String(), type: Type.Union([Type.Literal("DEFAULT"), Type.Literal("CUSTOM")]), value: Type.Optional(Type.Null()), label: Type.Union([Type.String(), Type.Null()]) })), provider: Type.Union([Type.Object({ id: Type.String(), remote_id: Type.String(), name: Type.Union([Type.String(), Type.Null()]) }), Type.Null()]), revisions: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.String(), course_id: Type.Union([Type.String(), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), description: Type.Union([Type.String(), Type.Null()]), remote_url: Type.Union([Type.String(), Type.Null()]), status: Type.Union([Type.Union([Type.Literal("ACTIVE"), Type.Literal("INACTIVE")]), Type.Null()]), remote_created_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), custom_fields: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), integration_fields: Type.Array(Type.Object({ id: Type.String(), key: Type.String(), type: Type.Union([Type.Literal("DEFAULT"), Type.Literal("CUSTOM")]), value: Type.Optional(Type.Null()), label: Type.Union([Type.String(), Type.Null()]) })), skill_assignments: Type.Array(Type.Object({ skill: Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), name: Type.Union([Type.String(), Type.Null()]) }) })) })) }), warnings: Type.Array(Type.Object({ message: Type.String() })) });

export type PostLmsCoursesCourseIdDeactivateRequestBody = Static<typeof PostLmsCoursesCourseIdDeactivateRequestBody>;
export const PostLmsCoursesCourseIdDeactivateRequestBody = Type.Partial(Type.Object({  }));

export type GetLmsSkillsParameterCursor = Static<typeof GetLmsSkillsParameterCursor>;
export const GetLmsSkillsParameterCursor = Type.String();

export type GetLmsSkillsParameterPageSize = Static<typeof GetLmsSkillsParameterPageSize>;
export const GetLmsSkillsParameterPageSize = Type.Integer({ minimum: 1, maximum: 250 });

export type GetLmsSkillsParameterUpdatedAfter = Static<typeof GetLmsSkillsParameterUpdatedAfter>;
export const GetLmsSkillsParameterUpdatedAfter = Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" });

export type GetLmsSkillsParameterIncludeDeleted = Static<typeof GetLmsSkillsParameterIncludeDeleted>;
export const GetLmsSkillsParameterIncludeDeleted = Type.Union([Type.Literal("true"), Type.Literal("false")]);

export type GetLmsSkillsParameterIgnoreUnsupportedFilters = Static<typeof GetLmsSkillsParameterIgnoreUnsupportedFilters>;
export const GetLmsSkillsParameterIgnoreUnsupportedFilters = Type.Union([Type.Literal("true"), Type.Literal("false")]);

export type GetLmsSkillsParameterIds = Static<typeof GetLmsSkillsParameterIds>;
export const GetLmsSkillsParameterIds = Type.String();

export type GetLmsSkillsParameterRemoteIds = Static<typeof GetLmsSkillsParameterRemoteIds>;
export const GetLmsSkillsParameterRemoteIds = Type.String();

export type GetLmsSkillsPositiveResponse = Static<typeof GetLmsSkillsPositiveResponse>;
export const GetLmsSkillsPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), name: Type.Union([Type.String(), Type.Null()]), remote_created_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), custom_fields: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), integration_fields: Type.Array(Type.Object({ id: Type.String(), key: Type.String(), type: Type.Union([Type.Literal("DEFAULT"), Type.Literal("CUSTOM")]), value: Type.Optional(Type.Null()), label: Type.Union([Type.String(), Type.Null()]) })) })) }) });

export type PostAiApplyCareerSitesPositiveResponse = Static<typeof PostAiApplyCareerSitesPositiveResponse>;
export const PostAiApplyCareerSitesPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ id: Type.String(), label: Type.String() }) });

export type PostAiApplyCareerSitesRequestBody = Static<typeof PostAiApplyCareerSitesRequestBody>;
export const PostAiApplyCareerSitesRequestBody = Type.Object({ label: Type.String() });

export type GetAiApplyCareerSitesParameterCursor = Static<typeof GetAiApplyCareerSitesParameterCursor>;
export const GetAiApplyCareerSitesParameterCursor = Type.String();

export type GetAiApplyCareerSitesParameterPageSize = Static<typeof GetAiApplyCareerSitesParameterPageSize>;
export const GetAiApplyCareerSitesParameterPageSize = Type.Integer({ minimum: 1, maximum: 250 });

export type GetAiApplyCareerSitesParameterIds = Static<typeof GetAiApplyCareerSitesParameterIds>;
export const GetAiApplyCareerSitesParameterIds = Type.String();

export type GetAiApplyCareerSitesPositiveResponse = Static<typeof GetAiApplyCareerSitesPositiveResponse>;
export const GetAiApplyCareerSitesPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ results: Type.Array(Type.Object({ id: Type.String(), label: Type.String() })), next: Type.Union([Type.String(), Type.Null()]) }) });

export type GetAiApplyPostingsParameterCursor = Static<typeof GetAiApplyPostingsParameterCursor>;
export const GetAiApplyPostingsParameterCursor = Type.String();

export type GetAiApplyPostingsParameterPageSize = Static<typeof GetAiApplyPostingsParameterPageSize>;
export const GetAiApplyPostingsParameterPageSize = Type.Integer({ minimum: 1, maximum: 250 });

export type GetAiApplyPostingsParameterIds = Static<typeof GetAiApplyPostingsParameterIds>;
export const GetAiApplyPostingsParameterIds = Type.String();

export type GetAiApplyPostingsParameterCareerSiteIds = Static<typeof GetAiApplyPostingsParameterCareerSiteIds>;
export const GetAiApplyPostingsParameterCareerSiteIds = Type.String();

export type GetAiApplyPostingsParameterJobCodes = Static<typeof GetAiApplyPostingsParameterJobCodes>;
export const GetAiApplyPostingsParameterJobCodes = Type.String();

export type GetAiApplyPostingsPositiveResponse = Static<typeof GetAiApplyPostingsPositiveResponse>;
export const GetAiApplyPostingsPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ results: Type.Array(Type.Object({ id: Type.String(), career_site: Type.Object({ id: Type.String(), label: Type.String() }), url: Type.String(), job_code: Type.Union([Type.String(), Type.Null()]), created_at: Type.String({ format: "date-time" }), updated_at: Type.String({ format: "date-time" }), archived_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), archived_reason: Type.Union([Type.Union([Type.Literal("JOB_POSTING_TAKEN_OFFLINE"), Type.Literal("MANUAL_ARCHIVE"), Type.Literal("REMOVED_FROM_JOB_FEED")]), Type.Null()]), availability: Type.Union([Type.Literal("APPLYABLE"), Type.Literal("PENDING"), Type.Literal("ARCHIVED"), Type.Literal("UNAVAILABLE")]) })), next: Type.Union([Type.String(), Type.Null()]) }) });

export type PostAiApplyPostingsPositiveResponse = Static<typeof PostAiApplyPostingsPositiveResponse>;
export const PostAiApplyPostingsPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ id: Type.String(), career_site: Type.Object({ id: Type.String(), label: Type.String() }), url: Type.String(), job_code: Type.Union([Type.String(), Type.Null()]), created_at: Type.String({ format: "date-time" }), updated_at: Type.String({ format: "date-time" }), archived_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), archived_reason: Type.Union([Type.Union([Type.Literal("JOB_POSTING_TAKEN_OFFLINE"), Type.Literal("MANUAL_ARCHIVE"), Type.Literal("REMOVED_FROM_JOB_FEED")]), Type.Null()]), availability: Type.Union([Type.Literal("APPLYABLE"), Type.Literal("PENDING"), Type.Literal("ARCHIVED"), Type.Literal("UNAVAILABLE")]) }) });

export type PostAiApplyPostingsRequestBody = Static<typeof PostAiApplyPostingsRequestBody>;
export const PostAiApplyPostingsRequestBody = Type.Object({ url: Type.String({ format: "uri", pattern: "^https?:\\/\\/" }), job_code: Type.Optional(Type.String()), location: Type.Optional(Type.Union([Type.Object({ country: Type.Union([Type.Literal("AD"), Type.Literal("AE"), Type.Literal("AF"), Type.Literal("AG"), Type.Literal("AI"), Type.Literal("AL"), Type.Literal("AM"), Type.Literal("AO"), Type.Literal("AQ"), Type.Literal("AR"), Type.Literal("AS"), Type.Literal("AT"), Type.Literal("AU"), Type.Literal("AW"), Type.Literal("AX"), Type.Literal("AZ"), Type.Literal("BA"), Type.Literal("BB"), Type.Literal("BD"), Type.Literal("BE"), Type.Literal("BF"), Type.Literal("BG"), Type.Literal("BH"), Type.Literal("BI"), Type.Literal("BJ"), Type.Literal("BL"), Type.Literal("BM"), Type.Literal("BN"), Type.Literal("BO"), Type.Literal("BQ"), Type.Literal("BR"), Type.Literal("BS"), Type.Literal("BT"), Type.Literal("BV"), Type.Literal("BW"), Type.Literal("BY"), Type.Literal("BZ"), Type.Literal("CA"), Type.Literal("CC"), Type.Literal("CD"), Type.Literal("CF"), Type.Literal("CG"), Type.Literal("CH"), Type.Literal("CI"), Type.Literal("CK"), Type.Literal("CL"), Type.Literal("CM"), Type.Literal("CN"), Type.Literal("CO"), Type.Literal("CR"), Type.Literal("CU"), Type.Literal("CV"), Type.Literal("CW"), Type.Literal("CX"), Type.Literal("CY"), Type.Literal("CZ"), Type.Literal("DE"), Type.Literal("DJ"), Type.Literal("DK"), Type.Literal("DM"), Type.Literal("DO"), Type.Literal("DZ"), Type.Literal("EC"), Type.Literal("EE"), Type.Literal("EG"), Type.Literal("EH"), Type.Literal("ER"), Type.Literal("ES"), Type.Literal("ET"), Type.Literal("FI"), Type.Literal("FJ"), Type.Literal("FK"), Type.Literal("FM"), Type.Literal("FO"), Type.Literal("FR"), Type.Literal("GA"), Type.Literal("GB"), Type.Literal("GD"), Type.Literal("GE"), Type.Literal("GF"), Type.Literal("GG"), Type.Literal("GH"), Type.Literal("GI"), Type.Literal("GL"), Type.Literal("GM"), Type.Literal("GN"), Type.Literal("GP"), Type.Literal("GQ"), Type.Literal("GR"), Type.Literal("GS"), Type.Literal("GT"), Type.Literal("GU"), Type.Literal("GW"), Type.Literal("GY"), Type.Literal("HK"), Type.Literal("HM"), Type.Literal("HN"), Type.Literal("HR"), Type.Literal("HT"), Type.Literal("HU"), Type.Literal("ID"), Type.Literal("IE"), Type.Literal("IL"), Type.Literal("IM"), Type.Literal("IN"), Type.Literal("IO"), Type.Literal("IQ"), Type.Literal("IR"), Type.Literal("IS"), Type.Literal("IT"), Type.Literal("JE"), Type.Literal("JM"), Type.Literal("JO"), Type.Literal("JP"), Type.Literal("KE"), Type.Literal("KG"), Type.Literal("KH"), Type.Literal("KI"), Type.Literal("KM"), Type.Literal("KN"), Type.Literal("KP"), Type.Literal("KR"), Type.Literal("KW"), Type.Literal("KY"), Type.Literal("KZ"), Type.Literal("LA"), Type.Literal("LB"), Type.Literal("LC"), Type.Literal("LI"), Type.Literal("LK"), Type.Literal("LR"), Type.Literal("LS"), Type.Literal("LT"), Type.Literal("LU"), Type.Literal("LV"), Type.Literal("LY"), Type.Literal("MA"), Type.Literal("MC"), Type.Literal("MD"), Type.Literal("ME"), Type.Literal("MF"), Type.Literal("MG"), Type.Literal("MH"), Type.Literal("MK"), Type.Literal("ML"), Type.Literal("MM"), Type.Literal("MN"), Type.Literal("MO"), Type.Literal("MP"), Type.Literal("MQ"), Type.Literal("MR"), Type.Literal("MS"), Type.Literal("MT"), Type.Literal("MU"), Type.Literal("MV"), Type.Literal("MW"), Type.Literal("MX"), Type.Literal("MY"), Type.Literal("MZ"), Type.Literal("NA"), Type.Literal("NC"), Type.Literal("NE"), Type.Literal("NF"), Type.Literal("NG"), Type.Literal("NI"), Type.Literal("NL"), Type.Literal("NO"), Type.Literal("NP"), Type.Literal("NR"), Type.Literal("NU"), Type.Literal("NZ"), Type.Literal("OM"), Type.Literal("PA"), Type.Literal("PE"), Type.Literal("PF"), Type.Literal("PG"), Type.Literal("PH"), Type.Literal("PK"), Type.Literal("PL"), Type.Literal("PM"), Type.Literal("PN"), Type.Literal("PR"), Type.Literal("PS"), Type.Literal("PT"), Type.Literal("PW"), Type.Literal("PY"), Type.Literal("QA"), Type.Literal("RE"), Type.Literal("RO"), Type.Literal("RS"), Type.Literal("RU"), Type.Literal("RW"), Type.Literal("SA"), Type.Literal("SB"), Type.Literal("SC"), Type.Literal("SD"), Type.Literal("SE"), Type.Literal("SG"), Type.Literal("SH"), Type.Literal("SI"), Type.Literal("SJ"), Type.Literal("SK"), Type.Literal("SL"), Type.Literal("SM"), Type.Literal("SN"), Type.Literal("SO"), Type.Literal("SR"), Type.Literal("SS"), Type.Literal("ST"), Type.Literal("SV"), Type.Literal("SX"), Type.Literal("SY"), Type.Literal("SZ"), Type.Literal("TC"), Type.Literal("TD"), Type.Literal("TF"), Type.Literal("TG"), Type.Literal("TH"), Type.Literal("TJ"), Type.Literal("TK"), Type.Literal("TL"), Type.Literal("TM"), Type.Literal("TN"), Type.Literal("TO"), Type.Literal("TR"), Type.Literal("TT"), Type.Literal("TV"), Type.Literal("TW"), Type.Literal("TZ"), Type.Literal("UA"), Type.Literal("UG"), Type.Literal("UM"), Type.Literal("US"), Type.Literal("UY"), Type.Literal("UZ"), Type.Literal("VA"), Type.Literal("VC"), Type.Literal("VE"), Type.Literal("VG"), Type.Literal("VI"), Type.Literal("VN"), Type.Literal("VU"), Type.Literal("WF"), Type.Literal("WS"), Type.Literal("YE"), Type.Literal("YT"), Type.Literal("ZA"), Type.Literal("ZM"), Type.Literal("ZW")]), postal_code: Type.Optional(Type.String()) }), Type.Null()])), career_site_id: Type.String() });

export type PostAiApplyPostingsPostingIdInquireParameterPostingId = Static<typeof PostAiApplyPostingsPostingIdInquireParameterPostingId>;
export const PostAiApplyPostingsPostingIdInquireParameterPostingId = Type.String();

export type PostAiApplyPostingsPostingIdInquirePositiveResponse = Static<typeof PostAiApplyPostingsPostingIdInquirePositiveResponse>;
export const PostAiApplyPostingsPostingIdInquirePositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ application_form: Type.Array(Type.Union([Type.Object({ block_type: Type.String(), question_id: Type.String(), label: Type.String(), description: Type.Union([Type.String(), Type.Null()]), required: Type.Boolean(), category: Type.Union([Type.Literal("EEO"), Type.Null()]), question_type: Type.Union([Type.Literal("TEXT"), Type.Literal("NUMBER"), Type.Literal("BOOLEAN"), Type.Literal("FILE"), Type.Literal("DATE"), Type.Literal("SINGLE_SELECT"), Type.Literal("MULTI_SELECT")]), unified_key: Type.Union([Type.Union([Type.Literal("EMAIL"), Type.Literal("RESIDENCE_TYPE"), Type.Literal("RESIDENCE_FULL_STRING"), Type.Literal("RESIDENCE_COUNTRY"), Type.Literal("RESIDENCE_CITY"), Type.Literal("RESIDENCE_STATE"), Type.Literal("RESIDENCE_LINE_1"), Type.Literal("RESIDENCE_LINE_2"), Type.Literal("RESIDENCE_ZIP_CODE"), Type.Literal("APPLICANT_POOL_CONSENT"), Type.Literal("TERMS_AND_CONDITIONS"), Type.Literal("FIRST_NAME"), Type.Literal("LAST_NAME"), Type.Literal("FULL_NAME"), Type.Literal("GENDER"), Type.Literal("EXPECTED_START_DATE"), Type.Literal("RESUME"), Type.Literal("BIRTH_DATE"), Type.Literal("PHONE_NUMBER_TYPE"), Type.Literal("FULL_PHONE_NUMBER"), Type.Literal("PHONE_COUNTRY_CODE"), Type.Literal("PHONE_NATIONAL_NUMBER"), Type.Literal("PHONE_EXTENSION")]), Type.Null()]), options: Type.Union([Type.Array(Type.Object({ id: Type.String(), label: Type.String(), unified_key: Type.Union([Type.Union([Type.Literal("HOME"), Type.Literal("WORK"), Type.Literal("MAILING"), Type.Literal("AD"), Type.Literal("AE"), Type.Literal("AF"), Type.Literal("AG"), Type.Literal("AI"), Type.Literal("AL"), Type.Literal("AM"), Type.Literal("AO"), Type.Literal("AQ"), Type.Literal("AR"), Type.Literal("AS"), Type.Literal("AT"), Type.Literal("AU"), Type.Literal("AW"), Type.Literal("AX"), Type.Literal("AZ"), Type.Literal("BA"), Type.Literal("BB"), Type.Literal("BD"), Type.Literal("BE"), Type.Literal("BF"), Type.Literal("BG"), Type.Literal("BH"), Type.Literal("BI"), Type.Literal("BJ"), Type.Literal("BL"), Type.Literal("BM"), Type.Literal("BN"), Type.Literal("BO"), Type.Literal("BQ"), Type.Literal("BR"), Type.Literal("BS"), Type.Literal("BT"), Type.Literal("BV"), Type.Literal("BW"), Type.Literal("BY"), Type.Literal("BZ"), Type.Literal("CA"), Type.Literal("CC"), Type.Literal("CD"), Type.Literal("CF"), Type.Literal("CG"), Type.Literal("CH"), Type.Literal("CI"), Type.Literal("CK"), Type.Literal("CL"), Type.Literal("CM"), Type.Literal("CN"), Type.Literal("CO"), Type.Literal("CR"), Type.Literal("CU"), Type.Literal("CV"), Type.Literal("CW"), Type.Literal("CX"), Type.Literal("CY"), Type.Literal("CZ"), Type.Literal("DE"), Type.Literal("DJ"), Type.Literal("DK"), Type.Literal("DM"), Type.Literal("DO"), Type.Literal("DZ"), Type.Literal("EC"), Type.Literal("EE"), Type.Literal("EG"), Type.Literal("EH"), Type.Literal("ER"), Type.Literal("ES"), Type.Literal("ET"), Type.Literal("FI"), Type.Literal("FJ"), Type.Literal("FK"), Type.Literal("FM"), Type.Literal("FO"), Type.Literal("FR"), Type.Literal("GA"), Type.Literal("GB"), Type.Literal("GD"), Type.Literal("GE"), Type.Literal("GF"), Type.Literal("GG"), Type.Literal("GH"), Type.Literal("GI"), Type.Literal("GL"), Type.Literal("GM"), Type.Literal("GN"), Type.Literal("GP"), Type.Literal("GQ"), Type.Literal("GR"), Type.Literal("GS"), Type.Literal("GT"), Type.Literal("GU"), Type.Literal("GW"), Type.Literal("GY"), Type.Literal("HK"), Type.Literal("HM"), Type.Literal("HN"), Type.Literal("HR"), Type.Literal("HT"), Type.Literal("HU"), Type.Literal("ID"), Type.Literal("IE"), Type.Literal("IL"), Type.Literal("IM"), Type.Literal("IN"), Type.Literal("IO"), Type.Literal("IQ"), Type.Literal("IR"), Type.Literal("IS"), Type.Literal("IT"), Type.Literal("JE"), Type.Literal("JM"), Type.Literal("JO"), Type.Literal("JP"), Type.Literal("KE"), Type.Literal("KG"), Type.Literal("KH"), Type.Literal("KI"), Type.Literal("KM"), Type.Literal("KN"), Type.Literal("KP"), Type.Literal("KR"), Type.Literal("KW"), Type.Literal("KY"), Type.Literal("KZ"), Type.Literal("LA"), Type.Literal("LB"), Type.Literal("LC"), Type.Literal("LI"), Type.Literal("LK"), Type.Literal("LR"), Type.Literal("LS"), Type.Literal("LT"), Type.Literal("LU"), Type.Literal("LV"), Type.Literal("LY"), Type.Literal("MA"), Type.Literal("MC"), Type.Literal("MD"), Type.Literal("ME"), Type.Literal("MF"), Type.Literal("MG"), Type.Literal("MH"), Type.Literal("MK"), Type.Literal("ML"), Type.Literal("MM"), Type.Literal("MN"), Type.Literal("MO"), Type.Literal("MP"), Type.Literal("MQ"), Type.Literal("MR"), Type.Literal("MS"), Type.Literal("MT"), Type.Literal("MU"), Type.Literal("MV"), Type.Literal("MW"), Type.Literal("MX"), Type.Literal("MY"), Type.Literal("MZ"), Type.Literal("NA"), Type.Literal("NC"), Type.Literal("NE"), Type.Literal("NF"), Type.Literal("NG"), Type.Literal("NI"), Type.Literal("NL"), Type.Literal("NO"), Type.Literal("NP"), Type.Literal("NR"), Type.Literal("NU"), Type.Literal("NZ"), Type.Literal("OM"), Type.Literal("PA"), Type.Literal("PE"), Type.Literal("PF"), Type.Literal("PG"), Type.Literal("PH"), Type.Literal("PK"), Type.Literal("PL"), Type.Literal("PM"), Type.Literal("PN"), Type.Literal("PR"), Type.Literal("PS"), Type.Literal("PT"), Type.Literal("PW"), Type.Literal("PY"), Type.Literal("QA"), Type.Literal("RE"), Type.Literal("RO"), Type.Literal("RS"), Type.Literal("RU"), Type.Literal("RW"), Type.Literal("SA"), Type.Literal("SB"), Type.Literal("SC"), Type.Literal("SD"), Type.Literal("SE"), Type.Literal("SG"), Type.Literal("SH"), Type.Literal("SI"), Type.Literal("SJ"), Type.Literal("SK"), Type.Literal("SL"), Type.Literal("SM"), Type.Literal("SN"), Type.Literal("SO"), Type.Literal("SR"), Type.Literal("SS"), Type.Literal("ST"), Type.Literal("SV"), Type.Literal("SX"), Type.Literal("SY"), Type.Literal("SZ"), Type.Literal("TC"), Type.Literal("TD"), Type.Literal("TF"), Type.Literal("TG"), Type.Literal("TH"), Type.Literal("TJ"), Type.Literal("TK"), Type.Literal("TL"), Type.Literal("TM"), Type.Literal("TN"), Type.Literal("TO"), Type.Literal("TR"), Type.Literal("TT"), Type.Literal("TV"), Type.Literal("TW"), Type.Literal("TZ"), Type.Literal("UA"), Type.Literal("UG"), Type.Literal("UM"), Type.Literal("US"), Type.Literal("UY"), Type.Literal("UZ"), Type.Literal("VA"), Type.Literal("VC"), Type.Literal("VE"), Type.Literal("VG"), Type.Literal("VI"), Type.Literal("VN"), Type.Literal("VU"), Type.Literal("WF"), Type.Literal("WS"), Type.Literal("YE"), Type.Literal("YT"), Type.Literal("ZA"), Type.Literal("ZM"), Type.Literal("ZW"), Type.Literal("MALE"), Type.Literal("FEMALE"), Type.Literal("NON_BINARY"), Type.Literal("NOT_SPECIFIED"), Type.Literal("MOBILE"), Type.Literal("LANDLINE"), Type.Literal("SOURCE_OTHER"), Type.Literal("SOURCE_OTHER_JOB_BOARD")]), Type.Null()]) })), Type.Null()]), display_when: Type.Union([Type.Object({ question_id: Type.String(), answer_equals: Type.Union([Type.String(), Type.Array(Type.String()), Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Boolean(), Type.Object({ name: Type.String(), content_type: Type.String(), data: Type.Unknown() })]) }), Type.Null()]) }), Type.Object({ block_type: Type.String(), label: Type.String(), children: Type.Array(Type.Record(Type.String(), Type.Unknown())) })])), submission_token: Type.String() }) });

export type PostAiApplyPostingsPostingIdInquireRequestBody = Static<typeof PostAiApplyPostingsPostingIdInquireRequestBody>;
export const PostAiApplyPostingsPostingIdInquireRequestBody = Type.Partial(Type.Object({  }));

export type PostAiApplyApplyPositiveResponse = Static<typeof PostAiApplyApplyPositiveResponse>;
export const PostAiApplyApplyPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ id: Type.String(), posting_id: Type.String(), status: Type.String(), created_at: Type.String({ format: "date-time" }), updated_at: Type.String({ format: "date-time" }) }) });

export type PostAiApplyApplyRequestBody = Static<typeof PostAiApplyApplyRequestBody>;
export const PostAiApplyApplyRequestBody = Type.Object({ submission_token: Type.String(), candidate_email: Type.String({ format: "email" }), query_params: Type.Optional(Type.Record(Type.String(), Type.String())), screening_question_answers: Type.Array(Type.Object({ question_id: Type.String(), answer: Type.Union([Type.String(), Type.Array(Type.String()), Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Boolean(), Type.Object({ name: Type.String(), content_type: Type.String(), data: Type.String() })]) })), additional_clicks: Type.Optional(Type.Integer({ minimum: 0, maximum: 30 })), additional_clicks_scatter_duration: Type.Optional(Type.Integer({ minimum: 1 })) });

export type GetAiApplyApplicationsParameterCursor = Static<typeof GetAiApplyApplicationsParameterCursor>;
export const GetAiApplyApplicationsParameterCursor = Type.String();

export type GetAiApplyApplicationsParameterPageSize = Static<typeof GetAiApplyApplicationsParameterPageSize>;
export const GetAiApplyApplicationsParameterPageSize = Type.Integer({ minimum: 1, maximum: 250 });

export type GetAiApplyApplicationsParameterIds = Static<typeof GetAiApplyApplicationsParameterIds>;
export const GetAiApplyApplicationsParameterIds = Type.String();

export type GetAiApplyApplicationsParameterJobPostingIds = Static<typeof GetAiApplyApplicationsParameterJobPostingIds>;
export const GetAiApplyApplicationsParameterJobPostingIds = Type.String();

export type GetAiApplyApplicationsPositiveResponse = Static<typeof GetAiApplyApplicationsPositiveResponse>;
export const GetAiApplyApplicationsPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ results: Type.Array(Type.Object({ id: Type.String(), job_posting_id: Type.String(), status: Type.Union([Type.Literal("SUBMITTED"), Type.Literal("DUPLICATE"), Type.Literal("PENDING"), Type.Literal("FAILED")]), created_at: Type.String({ format: "date-time" }), updated_at: Type.String({ format: "date-time" }) })), next: Type.Union([Type.String(), Type.Null()]) }) });

export type GetAiApplyUnifiedApiJobsParameterCursor = Static<typeof GetAiApplyUnifiedApiJobsParameterCursor>;
export const GetAiApplyUnifiedApiJobsParameterCursor = Type.String();

export type GetAiApplyUnifiedApiJobsParameterPageSize = Static<typeof GetAiApplyUnifiedApiJobsParameterPageSize>;
export const GetAiApplyUnifiedApiJobsParameterPageSize = Type.Integer({ minimum: 1, maximum: 5 });

export type GetAiApplyUnifiedApiJobsParameterIds = Static<typeof GetAiApplyUnifiedApiJobsParameterIds>;
export const GetAiApplyUnifiedApiJobsParameterIds = Type.String();

export type GetAiApplyUnifiedApiJobsParameterRemoteIds = Static<typeof GetAiApplyUnifiedApiJobsParameterRemoteIds>;
export const GetAiApplyUnifiedApiJobsParameterRemoteIds = Type.String();

export type GetAiApplyUnifiedApiJobsParameterJobCodes = Static<typeof GetAiApplyUnifiedApiJobsParameterJobCodes>;
export const GetAiApplyUnifiedApiJobsParameterJobCodes = Type.String();

export type GetAiApplyUnifiedApiJobsParameterCareerSiteIds = Static<typeof GetAiApplyUnifiedApiJobsParameterCareerSiteIds>;
export const GetAiApplyUnifiedApiJobsParameterCareerSiteIds = Type.String();

export type GetAiApplyUnifiedApiJobsPositiveResponse = Static<typeof GetAiApplyUnifiedApiJobsPositiveResponse>;
export const GetAiApplyUnifiedApiJobsPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.String(), name: Type.Union([Type.String(), Type.Null()]), job_code: Type.Union([Type.String(), Type.Null()]), description: Type.Union([Type.String(), Type.Null()]), confidential: Type.Union([Type.Boolean(), Type.Null()]), weekly_hours: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), category: Type.Union([Type.String(), Type.Null()]), department: Type.Union([Type.String(), Type.Null()]), post_url: Type.Union([Type.String(), Type.Null()]), experience_level: Type.Union([Type.String(), Type.Null()]), salary_amount: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), salary_amount_from: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), salary_amount_to: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), salary_currency: Type.Union([Type.String(), Type.Null()]), custom_fields: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), integration_fields: Type.Array(Type.Record(Type.String(), Type.Unknown())), opened_at: Type.Union([Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$" }), Type.Null()]), closed_at: Type.Union([Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$" }), Type.Null()]), remote_created_at: Type.Union([Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$" }), Type.Null()]), remote_updated_at: Type.Union([Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$" }), Type.Null()]), contact_id: Type.Union([Type.String(), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), changed_at: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$" }), Type.Null()]), remote_url: Type.Union([Type.String(), Type.Null()]), stages: Type.Array(Type.Record(Type.String(), Type.Unknown())), screening_questions: Type.Union([Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), description: Type.Union([Type.String(), Type.Null()]), format: Type.Optional(Type.Union([Type.Object({ display_type: Type.Optional(Type.Union([Type.Union([Type.Literal("SINGLE_LINE"), Type.Literal("MULTI_LINE"), Type.Literal("EMAIL"), Type.Literal("URL")]), Type.Null()])), max_length: Type.Optional(Type.Union([Type.Integer(), Type.Null()])), type: Type.String() }), Type.Object({ display_type: Type.Optional(Type.Union([Type.Union([Type.Literal("SLIDER"), Type.Literal("FIELD")]), Type.Null()])), max: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])), min: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])), type: Type.String() }), Type.Object({ accepted_mime_types: Type.Optional(Type.Union([Type.Array(Type.String()), Type.Null()])), max_file_size_bytes: Type.Optional(Type.Union([Type.Integer(), Type.Null()])), type: Type.String() }), Type.Object({ display_type: Type.Optional(Type.Union([Type.Union([Type.Literal("DROPDOWN"), Type.Literal("RADIO")]), Type.Null()])), options: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Optional(Type.Union([Type.String(), Type.Null()])), name: Type.String() })), type: Type.String() }), Type.Object({ type: Type.String() }), Type.Object({ type: Type.String() }), Type.Object({ options: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Optional(Type.Union([Type.String(), Type.Null()])), name: Type.String() })), type: Type.String() }), Type.Object({ type: Type.String() }), Type.Object({ raw_question: Type.Optional(Type.Unknown()), type: Type.String() }), Type.Null()])), category: Type.Union([Type.Literal("EEO"), Type.Null()]), index: Type.Optional(Type.Union([Type.Integer(), Type.Null()])), required: Type.Union([Type.Boolean(), Type.Null()]), precondition_question_id: Type.Optional(Type.Union([Type.String(), Type.Null()])), precondition_options: Type.Optional(Type.Union([Type.Array(Type.String()), Type.Array(Type.Boolean()), Type.Null()])) })), Type.Null()]), job_postings: Type.Array(Type.Record(Type.String(), Type.Unknown())), hiring_team: Type.Array(Type.Record(Type.String(), Type.Unknown())), employment_type: Type.Optional(Type.Union([Type.Union([Type.Literal("FULL_TIME"), Type.Literal("PART_TIME"), Type.Literal("CONTRACT"), Type.Literal("SEASONAL"), Type.Literal("INTERNSHIP")]), Type.String(), Type.Null()])), status: Type.Optional(Type.Union([Type.Union([Type.Literal("OPEN"), Type.Literal("CLOSED"), Type.Literal("DRAFT"), Type.Literal("ARCHIVED")]), Type.String(), Type.Null()])), visibility: Type.Union([Type.String(), Type.Null()]), remote_work_status: Type.Union([Type.String(), Type.Null()]), salary_period: Type.Union([Type.String(), Type.Null()]), location: Type.Optional(Type.Union([Type.Partial(Type.Object({ city: Type.Union([Type.String(), Type.Null()]), country: Type.Union([Type.String(), Type.Null()]), raw: Type.Union([Type.String(), Type.Null()]), state: Type.Union([Type.String(), Type.Null()]), street_1: Type.Union([Type.String(), Type.Null()]), street_2: Type.Union([Type.String(), Type.Null()]), zip_code: Type.Union([Type.String(), Type.Null()]) })), Type.Null()])) })), next: Type.Union([Type.String(), Type.Null()]) }) });

export type PostAiApplyUnifiedApiJobsJobIdApplicationsParameterJobId = Static<typeof PostAiApplyUnifiedApiJobsJobIdApplicationsParameterJobId>;
export const PostAiApplyUnifiedApiJobsJobIdApplicationsParameterJobId = Type.String();

export type PostAiApplyUnifiedApiJobsJobIdApplicationsPositiveResponse = Static<typeof PostAiApplyUnifiedApiJobsJobIdApplicationsPositiveResponse>;
export const PostAiApplyUnifiedApiJobsJobIdApplicationsPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), outcome: Type.Union([Type.Union([Type.Literal("PENDING"), Type.Literal("HIRED"), Type.Literal("DECLINED")]), Type.Null()]), rejection_reason_name: Type.Union([Type.String(), Type.Null()]), rejected_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), current_stage_id: Type.Union([Type.String(), Type.Null()]), job_id: Type.Union([Type.String(), Type.Null()]), candidate_id: Type.Union([Type.String(), Type.Null()]), screening_question_answers: Type.Optional(Type.Union([Type.Array(Type.Union([Type.Object({ answer: Type.Object({ content: Type.Union([Type.String(), Type.Null()]) }), question: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), title: Type.String(), type: Type.String() }) }), Type.Object({ answer: Type.Object({ choice: Type.Union([Type.String(), Type.Null()]) }), question: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), title: Type.String(), type: Type.String() }) }), Type.Object({ answer: Type.Partial(Type.Object({ choices: Type.Array(Type.String()) })), question: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), title: Type.String(), type: Type.String() }) }), Type.Object({ answer: Type.Object({ checked: Type.Union([Type.Boolean(), Type.Null()]) }), question: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), title: Type.String(), type: Type.String() }) }), Type.Object({ answer: Type.Object({ number: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]) }), question: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), title: Type.String(), type: Type.String() }) }), Type.Object({ answer: Type.Object({ date: Type.Union([Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$" }), Type.Null()]) }), question: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), title: Type.String(), type: Type.String() }) }), Type.Object({ answer: Type.Partial(Type.Object({ raw: Type.Null() })), question: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), title: Type.String(), type: Type.String() }) })])), Type.Null()])), custom_fields: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), integration_fields: Type.Array(Type.Object({ id: Type.String(), key: Type.String(), type: Type.Union([Type.Literal("DEFAULT"), Type.Literal("CUSTOM")]), value: Type.Optional(Type.Null()), label: Type.Union([Type.String(), Type.Null()]) })), remote_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_created_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_updated_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), current_stage: Type.Union([Type.Object({ id: Type.String(), name: Type.Union([Type.String(), Type.Null()]), remote_id: Type.Union([Type.String(), Type.Null()]), index: Type.Union([Type.Integer(), Type.Null()]) }), Type.Null()]), job: Type.Union([Type.Object({ id: Type.String(), name: Type.Union([Type.String(), Type.Null()]), remote_id: Type.String() }), Type.Null()]), candidate: Type.Union([Type.Object({ id: Type.String(), remote_id: Type.String(), first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), company: Type.Union([Type.String(), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), confidential: Type.Union([Type.Boolean(), Type.Null()]), source: Type.Union([Type.String(), Type.Null()]), phone_numbers: Type.Optional(Type.Union([Type.Array(Type.Object({ phone_number: Type.String(), type: Type.Optional(Type.Union([Type.String(), Type.Null()])) })), Type.Null()])), email_addresses: Type.Optional(Type.Union([Type.Array(Type.Object({ email_address: Type.Optional(Type.Union([Type.String({ pattern: "^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$" }), Type.Null()])), type: Type.Union([Type.String(), Type.Null()]) })), Type.Null()])), social_media: Type.Optional(Type.Union([Type.Array(Type.Partial(Type.Object({ link: Type.Union([Type.String(), Type.Null()]), type: Type.Union([Type.String(), Type.Null()]), username: Type.Union([Type.String(), Type.Null()]) }))), Type.Null()])), location: Type.Optional(Type.Union([Type.Partial(Type.Object({ city: Type.Union([Type.String(), Type.Null()]), country: Type.Union([Type.String(), Type.Null()]), raw: Type.Union([Type.String(), Type.Null()]), state: Type.Union([Type.String(), Type.Null()]), street_1: Type.Union([Type.String(), Type.Null()]), street_2: Type.Union([Type.String(), Type.Null()]), zip_code: Type.Union([Type.String(), Type.Null()]) })), Type.Null()])), custom_fields: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), integration_fields: Type.Array(Type.Object({ id: Type.String(), key: Type.String(), type: Type.Union([Type.Literal("DEFAULT"), Type.Literal("CUSTOM")]), value: Type.Optional(Type.Null()), label: Type.Union([Type.String(), Type.Null()]) })), remote_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]), remote_created_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_updated_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), tags: Type.Array(Type.Object({ id: Type.String(), name: Type.Union([Type.String(), Type.Null()]), remote_id: Type.Union([Type.String(), Type.Null()]) })) }), Type.Null()]) }) });

export type PostAiApplyUnifiedApiJobsJobIdApplicationsRequestBody = Static<typeof PostAiApplyUnifiedApiJobsJobIdApplicationsRequestBody>;
export const PostAiApplyUnifiedApiJobsJobIdApplicationsRequestBody = Type.Object({ stage_id: Type.Optional(Type.String()), candidate: Type.Object({ first_name: Type.String(), last_name: Type.String(), email_address: Type.String({ format: "email" }), additional_email_addresses: Type.Optional(Type.Array(Type.Object({ type: Type.Union([Type.Literal("PERSONAL"), Type.Literal("WORK"), Type.Literal("OTHER")]), email_address: Type.String({ format: "email" }) }))), company: Type.Optional(Type.String()), title: Type.Optional(Type.String()), phone_number: Type.Optional(Type.String()), additional_phone_numbers: Type.Optional(Type.Array(Type.Object({ type: Type.Union([Type.Literal("PERSONAL"), Type.Literal("WORK"), Type.Literal("OTHER")]), phone_number: Type.String() }))), location: Type.Optional(Type.Object({ city: Type.Optional(Type.String()), country: Type.String({ pattern: "^[A-Z]{2}$" }), state: Type.Optional(Type.String()), street_1: Type.Optional(Type.String()), zip_code: Type.Optional(Type.String()) })), gender: Type.Optional(Type.Union([Type.Literal("MALE"), Type.Literal("FEMALE"), Type.Literal("OTHER")])), availability_date: Type.Optional(Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" })), salary_expectations: Type.Optional(Type.Object({ period: Type.Union([Type.Literal("MONTH"), Type.Literal("YEAR")]), amount: Type.Number({ minimum: -1.7976931348623157e+308 }) })), social_links: Type.Optional(Type.Array(Type.Object({ url: Type.String({ format: "uri" }) }))) }), attachments: Type.Optional(Type.Array(Type.Object({ name: Type.String(), content_type: Type.Optional(Type.String({ pattern: "^[\\w.-]+\\/[\\w.-]+$" })), data_url: Type.Optional(Type.String({ format: "uri" })), data: Type.Optional(Type.String()), type: Type.Union([Type.Literal("CV"), Type.Literal("COVER_LETTER"), Type.Literal("OTHER")]) }))), source: Type.Optional(Type.Partial(Type.Object({ name: Type.String(), unified_key: Type.String(), id: Type.String() }))), sourced_by: Type.Optional(Type.Object({ user_id: Type.String() })), gdpr_consent: Type.Optional(Type.Partial(Type.Object({ expires_at: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }), given: Type.Boolean() }))), remote_fields: Type.Optional(Type.Intersect([Type.Partial(Type.Object({ successfactors: Type.Partial(Type.Object({ Candidate: Type.Record(Type.String(), Type.Unknown()), JobApplication: Type.Record(Type.String(), Type.Unknown()), copyJobApplicationAttachments: Type.Boolean(), update_existing_candidate: Type.Union([Type.Boolean(), Type.Null()]) })), personio: Type.Partial(Type.Object({ application: Type.Record(Type.String(), Type.Unknown()) })), talentsoft: Type.Partial(Type.Object({ applicant: Type.Record(Type.String(), Type.Unknown()), application: Type.Record(Type.String(), Type.Unknown()) })), teamtailor: Type.Partial(Type.Object({ candidate: Type.Record(Type.String(), Type.Unknown()), application: Type.Partial(Type.Object({ attributes: Type.Record(Type.String(), Type.Unknown()) })) })), greenhouse: Type.Partial(Type.Object({ candidate: Type.Record(Type.String(), Type.Unknown()), application: Type.Record(Type.String(), Type.Unknown()) })), lever: Type.Partial(Type.Object({ candidate: Type.Record(Type.String(), Type.Unknown()) })), workable: Type.Partial(Type.Object({ candidate: Type.Record(Type.String(), Type.Unknown()) })), workday: Type.Partial(Type.Object({ Candidate_Data: Type.Partial(Type.Object({ Name_Detail_Data: Type.Partial(Type.Object({ Middle_Name: Type.String(), Social_Suffix_Reference: Type.Object({ Predefined_Name_Component_ID: Type.String() }) })), Language_Reference: Type.Object({ WID: Type.String() }), Job_Application_Data: Type.Partial(Type.Object({ Job_Applied_To_Data: Type.Partial(Type.Object({ Global_Personal_Information_Data: Type.Partial(Type.Object({ Date_of_Birth: Type.String() })) })), Resume_Data: Type.Partial(Type.Object({ Education_Data: Type.Array(Type.Partial(Type.Object({ School_Name: Type.String(), First_Year_Attended: Type.Number({ minimum: -1.7976931348623157e+308 }), Last_Year_Attended: Type.Number({ minimum: -1.7976931348623157e+308 }), Field_of_Study_Reference: Type.Object({ WID: Type.String() }), Degree_Reference: Type.Object({ WID: Type.String() }), Grade_Average: Type.String() }))), Skill_Data: Type.Array(Type.Partial(Type.Object({ Skill_Name: Type.String() }))), Language_Data: Type.Array(Type.Partial(Type.Object({ Language_Reference: Type.Partial(Type.Object({ WID: Type.String() })), Language: Type.Object({ Native: Type.Optional(Type.Boolean()), Language_Ability: Type.Array(Type.Partial(Type.Object({ Language_Ability_Data: Type.Partial(Type.Object({ Language_Proficiency_Reference: Type.Object({ WID: Type.String() }), Language_Ability_Type_Reference: Type.Object({ WID: Type.String() }) })) }))) }) }))), Experience_Data: Type.Array(Type.Object({ Company_Name: Type.String(), Title: Type.String(), Location: Type.Optional(Type.String()), Start_Date: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }), End_Date: Type.Optional(Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" })), Currently_Work_Here: Type.Optional(Type.Boolean()), Description: Type.Optional(Type.String()) })) })) })), Contact_Data: Type.Partial(Type.Object({ Location_Data: Type.Partial(Type.Object({ Address_Line_1: Type.String(), Address_Line_2: Type.String(), Region_Subdivision_1: Type.String(), Country_Region_Reference: Type.Object({ Country_Region_ID: Type.String() }), Country_City_Reference: Type.Object({ WID: Type.String() }) })) })), Worker_Reference: Type.Partial(Type.Object({ WID: Type.String(), Employee_ID: Type.String() })) })), Override_Source_Reference_WID: Type.String() })), zohorecruit: Type.Partial(Type.Object({ candidate: Type.Record(Type.String(), Type.Unknown()) })), bullhorn: Type.Partial(Type.Object({ candidate: Type.Record(Type.String(), Type.Unknown()), job_submission: Type.Record(Type.String(), Type.Unknown()) })), smartrecruiters: Type.Partial(Type.Object({ candidate_with_questions: Type.Record(Type.String(), Type.Unknown()), candidate_without_questions: Type.Record(Type.String(), Type.Unknown()), candidate: Type.Record(Type.String(), Type.Unknown()), consent_decisions: Type.Partial(Type.Object({ SINGLE: Type.Boolean(), SMART_RECRUIT: Type.Boolean(), SMART_CRM: Type.Boolean(), SMART_MESSAGE_SMS: Type.Boolean(), SMART_MESSAGE_WHATSAPP: Type.Boolean() })) })), talentadore: Type.Partial(Type.Object({ applications: Type.Record(Type.String(), Type.Unknown()) })), guidecom: Type.Partial(Type.Object({ candidate: Type.Record(Type.String(), Type.Unknown()) })), dvinci: Type.Partial(Type.Object({ application: Type.Record(Type.String(), Type.Unknown()), candidate: Type.Record(Type.String(), Type.Unknown()) })), hrworks: Type.Partial(Type.Object({ jobApplication: Type.Record(Type.String(), Type.Unknown()) })), jobylon: Type.Partial(Type.Object({ application: Type.Partial(Type.Object({ message: Type.String() })) })), avature: Type.Partial(Type.Object({ workflow: Type.Partial(Type.Object({ step: Type.Object({ id: Type.Integer() }) })) })), recruitee: Type.Partial(Type.Object({ candidate: Type.Partial(Type.Object({ cover_letter_text: Type.String() })) })), rexx: Type.Partial(Type.Object({ candidate: Type.Record(Type.String(), Type.Unknown()) })), umantis: Type.Partial(Type.Object({ person: Type.Record(Type.String(), Type.Unknown()) })), piloga: Type.Partial(Type.Object({ candidate: Type.Partial(Type.Object({ street: Type.String() })) })), pinpoint: Type.Partial(Type.Object({ candidate: Type.Record(Type.String(), Type.Unknown()) })), covetorest: Type.Partial(Type.Object({ candidate: Type.Partial(Type.Object({ mandant: Type.Number({ minimum: -1.7976931348623157e+308 }) })) })) })), Type.Partial(Type.Object({ greenhouse: Type.Partial(Type.Object({ post_headers: Type.Partial(Type.Object({ "On-Behalf-Of": Type.Union([Type.String(), Type.Null()]) })) })), workable: Type.Partial(Type.Object({ on_behalf_of_user_remote_id: Type.String() })) }))])), screening_question_answers: Type.Optional(Type.Array(Type.Object({ question_id: Type.String(), answer: Type.Union([Type.String(), Type.Boolean(), Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Array(Type.String()), Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }), Type.Object({ name: Type.String(), content_type: Type.Optional(Type.String({ pattern: "^[\\w.-]+\\/[\\w.-]+$" })), data_url: Type.Optional(Type.String({ format: "uri" })), data: Type.Optional(Type.String()) })]) }))), query_params: Type.Optional(Type.Record(Type.String(), Type.String())) });

export type GetAiApplyJobFeedsParameterCursor = Static<typeof GetAiApplyJobFeedsParameterCursor>;
export const GetAiApplyJobFeedsParameterCursor = Type.String();

export type GetAiApplyJobFeedsParameterPageSize = Static<typeof GetAiApplyJobFeedsParameterPageSize>;
export const GetAiApplyJobFeedsParameterPageSize = Type.Integer({ minimum: 1, maximum: 250 });

export type GetAiApplyJobFeedsParameterIds = Static<typeof GetAiApplyJobFeedsParameterIds>;
export const GetAiApplyJobFeedsParameterIds = Type.String();

export type GetAiApplyJobFeedsPositiveResponse = Static<typeof GetAiApplyJobFeedsPositiveResponse>;
export const GetAiApplyJobFeedsPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ results: Type.Array(Type.Object({ id: Type.String(), label: Type.String() })), next: Type.Union([Type.String(), Type.Null()]) }) });

export type PostAiApplyJobFeedsPositiveResponse = Static<typeof PostAiApplyJobFeedsPositiveResponse>;
export const PostAiApplyJobFeedsPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ id: Type.String(), label: Type.String() }) });

export type PostAiApplyJobFeedsRequestBody = Static<typeof PostAiApplyJobFeedsRequestBody>;
export const PostAiApplyJobFeedsRequestBody = Type.Object({ label: Type.String({ minLength: 1 }) });

export type PostConnectCreateLinkPositiveResponse = Static<typeof PostConnectCreateLinkPositiveResponse>;
export const PostConnectCreateLinkPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ link: Type.String({ format: "uri" }) }) });

export type PostConnectCreateLinkRequestBody = Static<typeof PostConnectCreateLinkRequestBody>;
export const PostConnectCreateLinkRequestBody = Type.Object({ end_user_email: Type.String({ format: "email" }), end_user_organization_name: Type.String({ minLength: 1 }), end_user_origin_id: Type.Optional(Type.Union([Type.String({ minLength: 1 }), Type.Null()])), remote_environment: Type.Optional(Type.Union([Type.String(), Type.Null()])), integration_category: Type.Optional(Type.Union([Type.Literal("HRIS"), Type.Literal("ATS"), Type.Literal("ASSESSMENT"), Type.Literal("LMS")])), integration_tool: Type.Optional(Type.Union([Type.Union([Type.Literal("workday"), Type.Literal("successfactors"), Type.Literal("smartrecruiters"), Type.Literal("factorial"), Type.Literal("oraclerecruiting"), Type.Literal("lever"), Type.Literal("icims"), Type.Literal("cornerstonetalentlink"), Type.Literal("recruitee"), Type.Literal("recruiterflow"), Type.Literal("greenhouse"), Type.Literal("greenhousejobboard"), Type.Literal("teamtailor"), Type.Literal("teamtailorjobboards"), Type.Literal("ashby"), Type.Literal("talentsoft"), Type.Literal("talentsoftcustomer"), Type.Literal("concludis"), Type.Literal("talention"), Type.Literal("piloga"), Type.Literal("onlyfy"), Type.Literal("personio"), Type.Literal("ukgpro"), Type.Literal("ukgready"), Type.Literal("adpworkforcenow"), Type.Literal("taleo"), Type.Literal("rexx"), Type.Literal("afas"), Type.Literal("bamboohr"), Type.Literal("bullhorn"), Type.Literal("bullhornlogin"), Type.Literal("workable"), Type.Literal("jobvite"), Type.Literal("fountain"), Type.Literal("softgarden"), Type.Literal("softgardenpartner"), Type.Literal("pinpoint"), Type.Literal("welcometothejungle"), Type.Literal("dvinci"), Type.Literal("dvinciadmin"), Type.Literal("join"), Type.Literal("sagehr"), Type.Literal("traffit"), Type.Literal("erecruiter"), Type.Literal("abacusumantis"), Type.Literal("umantis"), Type.Literal("jobylon"), Type.Literal("taleez"), Type.Literal("hrworks"), Type.Literal("otys"), Type.Literal("zohorecruit"), Type.Literal("ceipal"), Type.Literal("eploy"), Type.Literal("jobdiva"), Type.Literal("careerplug"), Type.Literal("perview"), Type.Literal("eightfold"), Type.Literal("paylocity"), Type.Literal("paycor"), Type.Literal("avature"), Type.Literal("apploi"), Type.Literal("phenom"), Type.Literal("paradox"), Type.Literal("heyrecruit"), Type.Literal("recruhr"), Type.Literal("recruitcrm"), Type.Literal("jazzhr"), Type.Literal("bite"), Type.Literal("brassring"), Type.Literal("homerun"), Type.Literal("mysolution"), Type.Literal("carerix"), Type.Literal("hroffice"), Type.Literal("talentclue"), Type.Literal("inrecruiting"), Type.Literal("ubeeo"), Type.Literal("connexys"), Type.Literal("hr4you"), Type.Literal("cornerstoneondemand"), Type.Literal("zvooverecruit"), Type.Literal("odoo"), Type.Literal("comeet"), Type.Literal("compleet"), Type.Literal("compleetpitcher"), Type.Literal("gem"), Type.Literal("laura"), Type.Literal("covetorest"), Type.Literal("coveto"), Type.Literal("mercury"), Type.Literal("crelate"), Type.Literal("manatal"), Type.Literal("avionte"), Type.Literal("mhmhr"), Type.Literal("asymbl"), Type.Literal("breezyhr"), Type.Literal("flatchr"), Type.Literal("dayforce"), Type.Literal("digitalrecruiters"), Type.Literal("applicantstack"), Type.Literal("reachmee"), Type.Literal("talentadore"), Type.Literal("sandbox"), Type.Literal("guidecom"), Type.Literal("spott"), Type.Literal("loxo"), Type.Literal("kula"), Type.Literal("workdaycustomreport"), Type.Literal("workdaycustomreportsftp"), Type.Literal("ukgprowfm"), Type.Literal("payfitcustomer"), Type.Literal("payfitpartner"), Type.Literal("payfit"), Type.Literal("employmenthero"), Type.Literal("fourth"), Type.Literal("kenjo"), Type.Literal("heavenhr"), Type.Literal("hibob"), Type.Literal("cezannehr"), Type.Literal("entraid"), Type.Literal("azuread"), Type.Literal("googleworkspace"), Type.Literal("nmbrs"), Type.Literal("deel"), Type.Literal("remotecom"), Type.Literal("iriscascade"), Type.Literal("okta"), Type.Literal("sagepeople"), Type.Literal("humaans"), Type.Literal("eurecia"), Type.Literal("oraclehcm"), Type.Literal("officient"), Type.Literal("sesamehr"), Type.Literal("charliehr"), Type.Literal("abacus"), Type.Literal("zohopeople"), Type.Literal("gusto"), Type.Literal("breathehr"), Type.Literal("catalystone"), Type.Literal("mirus"), Type.Literal("alexishr"), Type.Literal("simployer"), Type.Literal("peple"), Type.Literal("youserve"), Type.Literal("hansalog"), Type.Literal("lattice"), Type.Literal("latticetalent"), Type.Literal("hoorayhr"), Type.Literal("trinet"), Type.Literal("trinetpeo"), Type.Literal("namely"), Type.Literal("paycom"), Type.Literal("insperity"), Type.Literal("paychex"), Type.Literal("rippling"), Type.Literal("sapling"), Type.Literal("peoplehr"), Type.Literal("lucca"), Type.Literal("zelt"), Type.Literal("planday"), Type.Literal("boondmanager"), Type.Literal("haileyhr"), Type.Literal("silae"), Type.Literal("oysterhr"), Type.Literal("kiwihr"), Type.Literal("square"), Type.Literal("perbilityhelix"), Type.Literal("leapsome"), Type.Literal("loket"), Type.Literal("workforcecom"), Type.Literal("peoplefirst"), Type.Literal("sdworx"), Type.Literal("itrent"), Type.Literal("absenceio"), Type.Literal("a3innuvanomina"), Type.Literal("scim"), Type.Literal("datevlauds"), Type.Literal("datevhr"), Type.Literal("datev"), Type.Literal("datevlug"), Type.Literal("sympa"), Type.Literal("youforce"), Type.Literal("nibelis"), Type.Literal("peoplexd"), Type.Literal("sftp"), Type.Literal("sftpfetch"), Type.Literal("360learning"), Type.Literal("talentlms"), Type.Literal("udemy"), Type.Literal("linkedinlearning"), Type.Literal("moodle")]), Type.Null()])), language: Type.Optional(Type.Union([Type.Union([Type.Literal("en"), Type.Literal("de"), Type.Literal("fr"), Type.Literal("it"), Type.Literal("es")]), Type.Null()])), scope_config_id: Type.Optional(Type.Union([Type.String(), Type.Null()])), enable_filtering: Type.Optional(Type.Boolean()), enable_field_mapping: Type.Optional(Type.Boolean()), link_type: Type.Optional(Type.Union([Type.Literal("EMBEDDED"), Type.Literal("MAGIC_LINK")])) });

export type GetConnectIntegrationByTokenTokenParameterToken = Static<typeof GetConnectIntegrationByTokenTokenParameterToken>;
export const GetConnectIntegrationByTokenTokenParameterToken = Type.String();

export type GetConnectIntegrationByTokenTokenPositiveResponse = Static<typeof GetConnectIntegrationByTokenTokenPositiveResponse>;
export const GetConnectIntegrationByTokenTokenPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ tool: Type.String(), id: Type.String(), end_user_origin_id: Type.Union([Type.String(), Type.Null()]), end_user_organization_name: Type.String(), end_user_email: Type.Union([Type.String({ pattern: "^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$" }), Type.Null()]), setup_status: Type.Union([Type.Literal("INCOMPLETE"), Type.Literal("FINAL_SYNC_PENDING"), Type.Literal("COMPLETED")]) }) });

export type PostConnectActivateIntegrationPositiveResponse = Static<typeof PostConnectActivateIntegrationPositiveResponse>;
export const PostConnectActivateIntegrationPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ tool: Type.String(), id: Type.String(), end_user_origin_id: Type.Union([Type.String(), Type.Null()]), end_user_organization_name: Type.String(), end_user_email: Type.Union([Type.String({ pattern: "^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$" }), Type.Null()]), setup_status: Type.Union([Type.Literal("INCOMPLETE"), Type.Literal("FINAL_SYNC_PENDING"), Type.Literal("COMPLETED")]) }) });

export type PostConnectActivateIntegrationRequestBody = Static<typeof PostConnectActivateIntegrationRequestBody>;
export const PostConnectActivateIntegrationRequestBody = Type.Object({ token: Type.String() });

export type GetCustomDatevSystemInformationPositiveResponse = Static<typeof GetCustomDatevSystemInformationPositiveResponse>;
export const GetCustomDatevSystemInformationPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ consultant_number: Type.Number({ minimum: 1000, maximum: 9999999 }), client_number: Type.Number({ minimum: 1, maximum: 99999 }), target_system: Type.Union([Type.Literal("LODAS"), Type.Literal("LuG")]) }) });

export type PostCustomDatevPassthroughPositiveResponse = Static<typeof PostCustomDatevPassthroughPositiveResponse>;
export const PostCustomDatevPassthroughPositiveResponse = Type.Object({ status: Type.String(), data: Type.Record(Type.String(), Type.Unknown()), warnings: Type.Array(Type.Object({ message: Type.String() })) });

export type PostCustomDatevPassthroughRequestBody = Static<typeof PostCustomDatevPassthroughRequestBody>;
export const PostCustomDatevPassthroughRequestBody = Type.Object({ file_content: Type.String({ minLength: 1 }), accounting_month: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }), target_system: Type.Union([Type.Literal("LODAS"), Type.Literal("LuG")]), file_type: Type.Union([Type.Literal("STAMMDATEN"), Type.Literal("BEWEGUNGSDATEN")]), file_name: Type.String() });

export type GetCustomDatevCheckEauPermissionPositiveResponse = Static<typeof GetCustomDatevCheckEauPermissionPositiveResponse>;
export const GetCustomDatevCheckEauPermissionPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ ready: Type.Boolean(), error: Type.Optional(Type.String()) }), warnings: Type.Array(Type.Object({ message: Type.String() })) });

export type GetCustomDatevEauRequestsEauIdParameterEauId = Static<typeof GetCustomDatevEauRequestsEauIdParameterEauId>;
export const GetCustomDatevEauRequestsEauIdParameterEauId = Type.String();

export type GetCustomDatevEauRequestsEauIdPositiveResponse = Static<typeof GetCustomDatevEauRequestsEauIdPositiveResponse>;
export const GetCustomDatevEauRequestsEauIdPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ raw: Type.Object({ source: Type.String(), start_work_incapacity: Type.String(), collaboration_identifier: Type.Optional(Type.String()), feedbacks_from_health_insurance: Type.Array(Type.Object({ guid: Type.String(), contact_person: Type.Union([Type.Object({ gender_contact_person: Type.Optional(Type.Union([Type.Union([Type.Literal("M"), Type.Literal("F"), Type.Literal("X"), Type.Literal("D")]), Type.Null()])), name: Type.String(), telephone: Type.String(), fax: Type.Union([Type.String(), Type.Null()]), email: Type.Union([Type.String(), Type.Null()]), name1_health_insurance: Type.String(), name2_health_insurance: Type.Optional(Type.Union([Type.String(), Type.Null()])), name3_health_insurance: Type.Optional(Type.Union([Type.String(), Type.Null()])), postal_code: Type.String(), city: Type.String(), street: Type.Union([Type.String(), Type.Null()]), house_number: Type.Union([Type.String(), Type.Null()]) }), Type.Null()]), incapacity_for_work: Type.Object({ start_work_incapacity_employer: Type.String(), start_work_incapacity_au: Type.Union([Type.String(), Type.Null()]), end_work_incapacity_au: Type.Union([Type.String(), Type.Null()]), actual_end_work_incapacity_au: Type.Optional(Type.Union([Type.String(), Type.Null()])), date_of_diagnosis: Type.Union([Type.String(), Type.Null()]), flag_current_work_incapacity: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), accident_at_work: Type.Boolean(), assignment_accident_insurance_doctor: Type.Boolean(), other_accident: Type.Boolean(), start_hospitalisation: Type.Optional(Type.Union([Type.String(), Type.Null()])), end_hospitalisation: Type.Optional(Type.Union([Type.String(), Type.Null()])), initial_certificate: Type.Boolean(), automatic_feedback_until: Type.Union([Type.String(), Type.Null()]) }), error_block_list: Type.Union([Type.Array(Type.Object({ origin: Type.Union([Type.String(), Type.Null()]), error_number: Type.Union([Type.String(), Type.Null()]), error_text: Type.Union([Type.String(), Type.Null()]), error_value: Type.Union([Type.String(), Type.Null()]) })), Type.Null()]) })) }) }), warnings: Type.Array(Type.Object({ message: Type.String() })) });

export type GetCustomDatevCheckDocumentPermissionPositiveResponse = Static<typeof GetCustomDatevCheckDocumentPermissionPositiveResponse>;
export const GetCustomDatevCheckDocumentPermissionPositiveResponse = Type.Object({ status: Type.String(), data: Type.Union([Type.Object({ ready: Type.Boolean(), documents_granted: Type.Array(Type.String()) }), Type.Object({ ready: Type.Boolean(), error: Type.String() })]), warnings: Type.Array(Type.Object({ message: Type.String() })) });

export type GetCustomDatevAvailableDocumentsParameterPeriod = Static<typeof GetCustomDatevAvailableDocumentsParameterPeriod>;
export const GetCustomDatevAvailableDocumentsParameterPeriod = Type.String();

export type GetCustomDatevAvailableDocumentsPositiveResponse = Static<typeof GetCustomDatevAvailableDocumentsPositiveResponse>;
export const GetCustomDatevAvailableDocumentsPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ results: Type.Array(Type.Object({ document_type: Type.String(), available_for_employees: Type.Array(Type.Object({ id: Type.Union([Type.String(), Type.Null()]), remote_id: Type.String() })), is_company_document: Type.Boolean() })) }), warnings: Type.Array(Type.Object({ message: Type.String() })) });

export type PostCustomDatevDownloadDocumentPositiveResponse = Static<typeof PostCustomDatevDownloadDocumentPositiveResponse>;
export const PostCustomDatevDownloadDocumentPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ data_url: Type.String({ format: "uri" }), file_name: Type.String(), content_type: Type.String() }), warnings: Type.Array(Type.Object({ message: Type.String() })) });

export type PostCustomDatevDownloadDocumentRequestBody = Static<typeof PostCustomDatevDownloadDocumentRequestBody>;
export const PostCustomDatevDownloadDocumentRequestBody = Type.Object({ accounting_month: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }), document_type: Type.Union([Type.Literal("AANB"), Type.Literal("ABEG"), Type.Literal("BUBE"), Type.Literal("DAWE"), Type.Literal("KBNW"), Type.Literal("KOST"), Type.Literal("KOTR"), Type.Literal("LKTO"), Type.Literal("LOBN"), Type.Literal("LJOE"), Type.Literal("LOJE"), Type.Literal("LOJO"), Type.Literal("LOPE"), Type.Literal("LOPN"), Type.Literal("LOPS"), Type.Literal("LORE"), Type.Literal("LOWE"), Type.Literal("LSTA"), Type.Literal("LSTB"), Type.Literal("LSTE"), Type.Literal("PDAT"), Type.Literal("PFAN"), Type.Literal("PRZA"), Type.Literal("SBNW"), Type.Literal("SVNW"), Type.Literal("WEAN"), Type.Literal("ZABR"), Type.Literal("ZAKF"), Type.Literal("ZAUW")]), employee_id: Type.Union([Type.String(), Type.Null()]) });

export type PostCustomDatevEmployeesEmployeeIdDownloadDocumentParameterEmployeeId = Static<typeof PostCustomDatevEmployeesEmployeeIdDownloadDocumentParameterEmployeeId>;
export const PostCustomDatevEmployeesEmployeeIdDownloadDocumentParameterEmployeeId = Type.Union([Type.String(), Type.Null()]);

export type PostCustomDatevEmployeesEmployeeIdDownloadDocumentPositiveResponse = Static<typeof PostCustomDatevEmployeesEmployeeIdDownloadDocumentPositiveResponse>;
export const PostCustomDatevEmployeesEmployeeIdDownloadDocumentPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ data_url: Type.String({ format: "uri" }), file_name: Type.String(), content_type: Type.String() }), warnings: Type.Array(Type.Object({ message: Type.String() })) });

export type PostCustomDatevEmployeesEmployeeIdDownloadDocumentRequestBody = Static<typeof PostCustomDatevEmployeesEmployeeIdDownloadDocumentRequestBody>;
export const PostCustomDatevEmployeesEmployeeIdDownloadDocumentRequestBody = Type.Object({ accounting_month: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }), document_type: Type.Union([Type.Literal("AANB"), Type.Literal("ABEG"), Type.Literal("BUBE"), Type.Literal("DAWE"), Type.Literal("KBNW"), Type.Literal("KOST"), Type.Literal("KOTR"), Type.Literal("LKTO"), Type.Literal("LOBN"), Type.Literal("LJOE"), Type.Literal("LOJE"), Type.Literal("LOJO"), Type.Literal("LOPE"), Type.Literal("LOPN"), Type.Literal("LOPS"), Type.Literal("LORE"), Type.Literal("LOWE"), Type.Literal("LSTA"), Type.Literal("LSTB"), Type.Literal("LSTE"), Type.Literal("PDAT"), Type.Literal("PFAN"), Type.Literal("PRZA"), Type.Literal("SBNW"), Type.Literal("SVNW"), Type.Literal("WEAN"), Type.Literal("ZABR"), Type.Literal("ZAKF"), Type.Literal("ZAUW")]) });

export type PostCustomDatevEmployeesEmployeeIdEauRequestsParameterEmployeeId = Static<typeof PostCustomDatevEmployeesEmployeeIdEauRequestsParameterEmployeeId>;
export const PostCustomDatevEmployeesEmployeeIdEauRequestsParameterEmployeeId = Type.String();

export type PostCustomDatevEmployeesEmployeeIdEauRequestsPositiveResponse = Static<typeof PostCustomDatevEmployeesEmployeeIdEauRequestsPositiveResponse>;
export const PostCustomDatevEmployeesEmployeeIdEauRequestsPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ eau_id: Type.String() }), warnings: Type.Array(Type.Object({ message: Type.String() })) });

export type PostCustomDatevEmployeesEmployeeIdEauRequestsRequestBody = Static<typeof PostCustomDatevEmployeesEmployeeIdEauRequestsRequestBody>;
export const PostCustomDatevEmployeesEmployeeIdEauRequestsRequestBody = Type.Object({ start_work_incapacity: Type.String({ pattern: "^\\d{4}-\\d{2}-\\d{2}$" }), notification: Type.Optional(Type.Object({ email: Type.String({ pattern: "^[\\w!#$%&'*+/=?^`{|}~-]+(?:\\.[\\w!#$%&'*+/=?^`{|}~-]+)*@(?:[\\w-]+\\.)+[\\w-]{2,}$" }) })), contact_person: Type.Optional(Type.Object({ gender: Type.Union([Type.Literal("M"), Type.Literal("W"), Type.Literal("X"), Type.Literal("D")]), name: Type.String({ minLength: 0, maxLength: 30 }), telephone: Type.String({ minLength: 0, maxLength: 20, pattern: "([\\d+])[\\d ()/-]+" }), fax: Type.String({ minLength: 0, maxLength: 20, pattern: "([\\d+])[\\d ()/-]+" }), email: Type.String({ minLength: 0, maxLength: 70, pattern: "^(?=.{1,64}@)[\\w-]+(\\.[\\w-]+)*@[^-][\\dA-Za-z-]+(\\.[\\dA-Za-z-]+)*(\\.[A-Za-z]{2,})$" }), company_name: Type.String({ minLength: 0, maxLength: 90 }), postal_code: Type.String({ minLength: 0, maxLength: 10, pattern: "[\\dA-Za-z]*" }), city: Type.String({ minLength: 0, maxLength: 34 }), street: Type.String({ minLength: 0, maxLength: 33 }), house_number: Type.String({ minLength: 0, maxLength: 9 }) })) });

export type PutCustomDatevEmployeesEmployeeIdPreparePayrollParameterEmployeeId = Static<typeof PutCustomDatevEmployeesEmployeeIdPreparePayrollParameterEmployeeId>;
export const PutCustomDatevEmployeesEmployeeIdPreparePayrollParameterEmployeeId = Type.String();

export type PutCustomDatevEmployeesEmployeeIdPreparePayrollPositiveResponse = Static<typeof PutCustomDatevEmployeesEmployeeIdPreparePayrollPositiveResponse>;
export const PutCustomDatevEmployeesEmployeeIdPreparePayrollPositiveResponse = Type.Object({ status: Type.String(), data: Type.Record(Type.String(), Type.Unknown()), warnings: Type.Array(Type.Object({ message: Type.String() })) });

export type PutCustomDatevEmployeesEmployeeIdPreparePayrollRequestBody = Static<typeof PutCustomDatevEmployeesEmployeeIdPreparePayrollRequestBody>;
export const PutCustomDatevEmployeesEmployeeIdPreparePayrollRequestBody = Type.Object({ payroll_run: Type.Object({ date: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }) }), hourly_payments: Type.Array(Type.Object({ hours: Type.Number({ minimum: -1.7976931348623157e+308 }), lohnart: Type.Number({ minimum: -1.7976931348623157e+308 }) })), fixed_payments: Type.Array(Type.Object({ amount: Type.Number({ minimum: -1.7976931348623157e+308 }), lohnart: Type.Number({ minimum: -1.7976931348623157e+308 }) })), custom_lodas: Type.Optional(Type.Array(Type.Object({ amount: Type.Number({ minimum: -1.7976931348623157e+308 }), lohnart: Type.Number({ minimum: -1.7976931348623157e+308 }), bearbeitungsschluessel: Type.Number({ minimum: -1.7976931348623157e+308 }) }))) });

export type PutCustomDatevEmployeesEmployeeIdCompensationsParameterEmployeeId = Static<typeof PutCustomDatevEmployeesEmployeeIdCompensationsParameterEmployeeId>;
export const PutCustomDatevEmployeesEmployeeIdCompensationsParameterEmployeeId = Type.String();

export type PutCustomDatevEmployeesEmployeeIdCompensationsPositiveResponse = Static<typeof PutCustomDatevEmployeesEmployeeIdCompensationsPositiveResponse>;
export const PutCustomDatevEmployeesEmployeeIdCompensationsPositiveResponse = Type.Object({ status: Type.String(), data: Type.Record(Type.String(), Type.Unknown()), warnings: Type.Array(Type.Object({ message: Type.String() })) });

export type PutCustomDatevEmployeesEmployeeIdCompensationsRequestBody = Static<typeof PutCustomDatevEmployeesEmployeeIdCompensationsRequestBody>;
export const PutCustomDatevEmployeesEmployeeIdCompensationsRequestBody = Type.Object({ effective_date: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }), compensations: Type.Array(Type.Object({ amount: Type.Number({ minimum: -1.7976931348623157e+308 }), currency: Type.String(), period: Type.Union([Type.Literal("HOUR"), Type.Literal("MONTH")]), lohnart: Type.Optional(Type.Integer({ minimum: 1, maximum: 9999 })) })) });

export type GetCustomDatevCheckWritePermissionPositiveResponse = Static<typeof GetCustomDatevCheckWritePermissionPositiveResponse>;
export const GetCustomDatevCheckWritePermissionPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ ready: Type.Boolean(), error: Type.Optional(Type.String()) }), warnings: Type.Array(Type.Object({ message: Type.String() })) });

export type GetCustomDatevDataPushesPositiveResponse = Static<typeof GetCustomDatevDataPushesPositiveResponse>;
export const GetCustomDatevDataPushesPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ data_pushes: Type.Array(Type.Object({ id: Type.String(), type: Type.Union([Type.Literal("GENERAL"), Type.Literal("PAYROLL")]), created_at: Type.String({ format: "date-time" }), upload_jobs: Type.Array(Type.Object({ id: Type.String(), file_name: Type.String(), state: Type.Union([Type.Literal("FAILED"), Type.Literal("UPLOADED"), Type.Literal("IMPORTED"), Type.Literal("CORRUPTED"), Type.Literal("DELETED"), Type.Literal("AUTO_DELETED")]), file: Type.String() })) })) }) });

export type PostCustomDatevPushDataGeneralPositiveResponse = Static<typeof PostCustomDatevPushDataGeneralPositiveResponse>;
export const PostCustomDatevPushDataGeneralPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ files: Type.Array(Type.Object({ name: Type.String(), content: Type.String() })) }), warnings: Type.Array(Type.Object({ message: Type.String() })) });

export type PostCustomDatevPushDataGeneralRequestBody = Static<typeof PostCustomDatevPushDataGeneralRequestBody>;
export const PostCustomDatevPushDataGeneralRequestBody = Type.Record(Type.String(), Type.Unknown());

export type PostCustomDatevPushDataPayrollPositiveResponse = Static<typeof PostCustomDatevPushDataPayrollPositiveResponse>;
export const PostCustomDatevPushDataPayrollPositiveResponse = Type.Object({ status: Type.String(), data: Type.Object({ files: Type.Array(Type.Object({ name: Type.String(), content: Type.String() })) }), warnings: Type.Array(Type.Object({ message: Type.String() })) });

export type PostCustomDatevPushDataPayrollRequestBody = Static<typeof PostCustomDatevPushDataPayrollRequestBody>;
export const PostCustomDatevPushDataPayrollRequestBody = Type.Object({ payroll_month: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }) });

export type PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsParameterEmployeeId = Static<typeof PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsParameterEmployeeId>;
export const PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsParameterEmployeeId = Type.String();

export type PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsPositiveResponse = Static<typeof PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsPositiveResponse>;
export const PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsPositiveResponse = Type.Object({ status: Type.String(), data: Type.Record(Type.String(), Type.Unknown()), warnings: Type.Array(Type.Object({ message: Type.String() })) });

export type PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsRequestBody = Static<typeof PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsRequestBody>;
export const PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsRequestBody = Type.Object({ supplement_code: Type.String(), effective_date: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }), element_amount: Type.Optional(Type.Number({ minimum: -1.7976931348623157e+308 })), element_string: Type.Optional(Type.String()) });

export type DataChangedWebhookPayload = Static<typeof DataChangedWebhookPayload>;
export const DataChangedWebhookPayload = Type.Object({ id: Type.String(), type: Type.Literal("data-changed"), data: Type.Object({ integration_id: Type.String(), integration_tool: Type.String(), integration_category: Type.Union([Type.Literal("HRIS"), Type.Literal("ATS"), Type.Literal("ASSESSMENT"), Type.Literal("LMS")]), changed_models: Type.Array(Type.Object({ name: Type.Union([Type.Literal("hris_legal_entities"), Type.Literal("hris_locations"), Type.Literal("hris_employees"), Type.Literal("hris_absence_types"), Type.Literal("hris_absences"), Type.Literal("hris_employments"), Type.Literal("hris_teams"), Type.Literal("hris_time_off_balances"), Type.Literal("hris_timesheets"), Type.Literal("hris_employee_document_categories"), Type.Literal("hris_performance_reviews"), Type.Literal("hris_performance_review_cycles"), Type.Literal("hris_staffing_entities"), Type.Literal("ats_users"), Type.Literal("ats_jobs"), Type.Literal("ats_job_postings"), Type.Literal("ats_candidates"), Type.Literal("ats_application_stages"), Type.Literal("ats_applications"), Type.Literal("ats_screening_questions"), Type.Literal("ats_tags"), Type.Literal("ats_interviews"), Type.Literal("ats_offers"), Type.Literal("ats_rejection_reasons"), Type.Literal("ats_roles"), Type.Literal("lms_users"), Type.Literal("lms_course_providers"), Type.Literal("lms_skills"), Type.Literal("lms_courses"), Type.Literal("lms_course_revisions"), Type.Literal("lms_course_progressions"), Type.Literal("hris_join_employees_teams"), Type.Literal("hris_join_staffing_entities_locations"), Type.Literal("hris_join_staffing_entities_legal_entities"), Type.Literal("hris_join_staffing_entities_groups"), Type.Literal("ats_join_candidates_tags"), Type.Literal("ats_join_jobs_application_stages"), Type.Literal("ats_join_jobs_screening_questions"), Type.Literal("ats_join_user_job_role_assignments"), Type.Literal("ats_join_jobs_users"), Type.Literal("ats_join_users_roles"), Type.Literal("ats_join_interviews_users"), Type.Literal("lms_join_revisions_skills")]) })) }) });

export type ConnectionFlowFailedWebhookPayload = Static<typeof ConnectionFlowFailedWebhookPayload>;
export const ConnectionFlowFailedWebhookPayload = Type.Object({ id: Type.String(), type: Type.Literal("connection-flow-failed"), data: Type.Object({ integration_tool: Type.String(), integration_category: Type.Union([Type.Literal("HRIS"), Type.Literal("ATS"), Type.Literal("ASSESSMENT"), Type.Literal("LMS")]), end_user: Type.Object({ organization_name: Type.String(), creator_email: Type.Union([Type.String({ format: "email" }), Type.Null()]), origin_id: Type.Union([Type.String(), Type.Null()]) }), log_url: Type.String({ format: "uri" }) }) });

export type IntegrationCreatedWebhookPayload = Static<typeof IntegrationCreatedWebhookPayload>;
export const IntegrationCreatedWebhookPayload = Type.Object({ id: Type.String(), type: Type.Literal("integration-created"), data: Type.Object({ id: Type.String(), tool: Type.String(), category: Type.Union([Type.Literal("HRIS"), Type.Literal("ATS"), Type.Literal("ASSESSMENT"), Type.Literal("LMS")]), end_user: Type.Object({ organization_name: Type.String(), creator_email: Type.Union([Type.String({ format: "email" }), Type.Null()]), origin_id: Type.Union([Type.String(), Type.Null()]) }) }) });

export type IntegrationDeletedWebhookPayload = Static<typeof IntegrationDeletedWebhookPayload>;
export const IntegrationDeletedWebhookPayload = Type.Object({ id: Type.String(), type: Type.Literal("integration-deleted"), data: Type.Object({ id: Type.String(), tool: Type.String(), category: Type.Union([Type.Literal("HRIS"), Type.Literal("ATS"), Type.Literal("ASSESSMENT"), Type.Literal("LMS")]), end_user: Type.Object({ organization_name: Type.String(), creator_email: Type.Union([Type.String({ format: "email" }), Type.Null()]), origin_id: Type.Union([Type.String(), Type.Null()]) }), deleted_at: Type.String({ format: "date-time" }) }) });

export type AssessmentOrderReceivedWebhookPayload = Static<typeof AssessmentOrderReceivedWebhookPayload>;
export const AssessmentOrderReceivedWebhookPayload = Type.Object({ id: Type.String(), type: Type.Literal("assessment:order-received"), data: Type.Object({ id: Type.String(), package_id: Type.String(), status: Type.Union([Type.Literal("OPEN"), Type.Literal("COMPLETED"), Type.Literal("CANCELLED"), Type.Literal("REJECTED")]), integration_id: Type.String(), candidate: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), email: Type.String({ format: "email" }), first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), phone: Type.Union([Type.String(), Type.Null()]) }), application: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]) }), job: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), name: Type.Union([Type.String(), Type.Null()]), job_code: Type.Union([Type.String(), Type.Null()]), description: Type.Union([Type.String(), Type.Null()]), location: Type.Union([Type.Partial(Type.Object({ street_1: Type.Union([Type.String(), Type.Null()]), street_2: Type.Union([Type.String(), Type.Null()]), city: Type.Union([Type.String(), Type.Null()]), state: Type.Union([Type.String(), Type.Null()]), zip_code: Type.Union([Type.String(), Type.Null()]), country: Type.Union([Type.String(), Type.Null()]), raw: Type.Union([Type.String(), Type.Null()]) })), Type.Null()]), hiring_team: Type.Array(Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), email: Type.Union([Type.String(), Type.Null()]), first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), hiring_team_roles: Type.Array(Type.Union([Type.Literal("RECRUITER"), Type.Literal("HIRING_MANAGER")])) })) }) }) });

export type InlineAssessmentOrderReceivedWebhookPayload = Static<typeof InlineAssessmentOrderReceivedWebhookPayload>;
export const InlineAssessmentOrderReceivedWebhookPayload = Type.Object({ id: Type.String(), type: Type.Literal("inline-assessment:order-received"), data: Type.Object({ id: Type.String(), package_id: Type.String(), status: Type.Union([Type.Literal("OPEN"), Type.Literal("COMPLETED"), Type.Literal("CANCELLED"), Type.Literal("REJECTED")]), integration_id: Type.String(), candidate: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), email: Type.String({ format: "email" }), first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), phone: Type.Union([Type.String(), Type.Null()]) }), application: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]) }), job: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), name: Type.Union([Type.String(), Type.Null()]), job_code: Type.Union([Type.String(), Type.Null()]), description: Type.Union([Type.String(), Type.Null()]), location: Type.Union([Type.Partial(Type.Object({ street_1: Type.Union([Type.String(), Type.Null()]), street_2: Type.Union([Type.String(), Type.Null()]), city: Type.Union([Type.String(), Type.Null()]), state: Type.Union([Type.String(), Type.Null()]), zip_code: Type.Union([Type.String(), Type.Null()]), country: Type.Union([Type.String(), Type.Null()]), raw: Type.Union([Type.String(), Type.Null()]) })), Type.Null()]), hiring_team: Type.Array(Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), email: Type.Union([Type.String(), Type.Null()]), first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), hiring_team_roles: Type.Array(Type.Union([Type.Literal("RECRUITER"), Type.Literal("HIRING_MANAGER")])) })) }) }) });

export type IntegrationStateChangedWebhookPayload = Static<typeof IntegrationStateChangedWebhookPayload>;
export const IntegrationStateChangedWebhookPayload = Type.Object({ id: Type.String(), type: Type.Literal("integration-state-changed"), data: Type.Object({ integration_tool: Type.String(), integration_id: Type.String(), integration_category: Type.Union([Type.Literal("HRIS"), Type.Literal("ATS"), Type.Literal("ASSESSMENT"), Type.Literal("LMS")]), end_user: Type.Object({ organization_name: Type.String(), creator_email: Type.Union([Type.String({ format: "email" }), Type.Null()]), origin_id: Type.Union([Type.String(), Type.Null()]) }), qa_status: Type.Union([Type.Literal("PENDING"), Type.Literal("FAILED"), Type.Literal("PASSED")]), setup_status: Type.Union([Type.Literal("INCOMPLETE"), Type.Literal("FINAL_SYNC_PENDING"), Type.Literal("COMPLETED")]), state: Type.Union([Type.Literal("ACTIVE"), Type.Literal("INVALID"), Type.Literal("INACTIVE")]), updated_at: Type.String({ format: "date-time" }) }) });

export type AiApplyApplicationStatusUpdatedWebhookPayload = Static<typeof AiApplyApplicationStatusUpdatedWebhookPayload>;
export const AiApplyApplicationStatusUpdatedWebhookPayload = Type.Object({ id: Type.String(), type: Type.Literal("ai-apply-application-status-updated"), data: Type.Object({ id: Type.String(), job_posting_id: Type.String(), status: Type.Union([Type.Literal("SUBMITTED"), Type.Literal("DUPLICATE"), Type.Literal("PENDING"), Type.Literal("FAILED")]), created_at: Type.String({ format: "date-time" }), updated_at: Type.String({ format: "date-time" }) }) });

export type AiApplyJobPostingStatusUpdatedWebhookPayload = Static<typeof AiApplyJobPostingStatusUpdatedWebhookPayload>;
export const AiApplyJobPostingStatusUpdatedWebhookPayload = Type.Object({ id: Type.String(), type: Type.Literal("ai-apply-job-posting-status-updated"), data: Type.Object({ id: Type.String(), career_site: Type.Object({ id: Type.String(), label: Type.String() }), url: Type.String(), job_code: Type.Union([Type.String(), Type.Null()]), created_at: Type.String({ format: "date-time" }), updated_at: Type.String({ format: "date-time" }), archived_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), archived_reason: Type.Union([Type.Union([Type.Literal("JOB_POSTING_TAKEN_OFFLINE"), Type.Literal("MANUAL_ARCHIVE"), Type.Literal("REMOVED_FROM_JOB_FEED")]), Type.Null()]), availability: Type.Union([Type.Literal("APPLYABLE"), Type.Literal("PENDING"), Type.Literal("ARCHIVED"), Type.Literal("UNAVAILABLE")]) }) });

export type SyncFinishedWebhookPayload = Static<typeof SyncFinishedWebhookPayload>;
export const SyncFinishedWebhookPayload = Type.Object({ id: Type.String(), type: Type.Literal("sync-finished"), data: Type.Object({ sync_id: Type.String(), sync_state: Type.String(), sync_started_at: Type.String({ format: "date-time" }), sync_ended_at: Type.String({ format: "date-time" }), sync_duration_seconds: Type.Integer({ minimum: 0 }), integration_id: Type.String(), integration_tool: Type.String(), integration_category: Type.Union([Type.Literal("HRIS"), Type.Literal("ATS"), Type.Literal("ASSESSMENT"), Type.Literal("LMS")]), end_user: Type.Object({ organization_name: Type.String(), creator_email: Type.Union([Type.String({ format: "email" }), Type.Null()]), origin_id: Type.Union([Type.String(), Type.Null()]) }), log_url: Type.String({ format: "uri" }) }) });

export type BulkImportJobPostingLocation = Static<typeof BulkImportJobPostingLocation>;
export const BulkImportJobPostingLocation = Type.Object({ country: Type.String(), postal_code: Type.Optional(Type.String()) });

export type BulkImportJobPostingInput = Static<typeof BulkImportJobPostingInput>;
export const BulkImportJobPostingInput = Type.Object({ url: Type.String({ format: "uri" }), career_site_label: Type.String(), job_code: Type.Optional(Type.String()), location: Type.Optional(Type.Union([BulkImportJobPostingLocation, Type.Null()])) });

export type BulkImportResponse = Static<typeof BulkImportResponse>;
export const BulkImportResponse = Type.Object({ status: Type.Literal("success"), data: Type.Object({ created: Type.Integer(), processed: Type.Integer(), archived: Type.Integer() }) });

// </Schemas>

// <Endpoints>
export type get_GetCheckApiKey = typeof get_GetCheckApiKey;
export const get_GetCheckApiKey = {
  method: Type.Literal("GET"),
  path: Type.Literal("/check-api-key"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: Type.Never(),
  responses: { 200: GetCheckApiKeyPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type post_PostForceSync = typeof post_PostForceSync;
export const post_PostForceSync = {
  method: Type.Literal("POST"),
  path: Type.Literal("/force-sync"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { header: Type.Object({ "X-Integration-Id": Type.String() }), body: PostForceSyncRequestBody },
  responses: { 200: PostForceSyncPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type post_PostPassthroughToolApi = typeof post_PostPassthroughToolApi;
export const post_PostPassthroughToolApi = {
  method: Type.Literal("POST"),
  path: Type.Literal("/passthrough/{tool}/{api}"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ tool: PostPassthroughToolApiParameterTool, api: PostPassthroughToolApiParameterApi }), header: Type.Object({ "X-Integration-Id": Type.String() }), body: PostPassthroughToolApiRequestBody },
  responses: { 200: PostPassthroughToolApiPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type delete_DeleteIntegrationsIntegrationId = typeof delete_DeleteIntegrationsIntegrationId;
export const delete_DeleteIntegrationsIntegrationId = {
  method: Type.Literal("DELETE"),
  path: Type.Literal("/integrations/{integration_id}"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ integration_id: DeleteIntegrationsIntegrationIdParameterIntegrationId }), body: DeleteIntegrationsIntegrationIdRequestBody },
  responses: { 200: DeleteIntegrationsIntegrationIdPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type get_GetIntegrationsIntegrationId = typeof get_GetIntegrationsIntegrationId;
export const get_GetIntegrationsIntegrationId = {
  method: Type.Literal("GET"),
  path: Type.Literal("/integrations/{integration_id}"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ integration_id: GetIntegrationsIntegrationIdParameterIntegrationId }) },
  responses: { 200: GetIntegrationsIntegrationIdPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type put_PutIntegrationsIntegrationIdEnabled = typeof put_PutIntegrationsIntegrationIdEnabled;
export const put_PutIntegrationsIntegrationIdEnabled = {
  method: Type.Literal("PUT"),
  path: Type.Literal("/integrations/{integration_id}/enabled"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ integration_id: PutIntegrationsIntegrationIdEnabledParameterIntegrationId }), body: PutIntegrationsIntegrationIdEnabledRequestBody },
  responses: { 200: PutIntegrationsIntegrationIdEnabledPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type post_PostIntegrationsIntegrationIdRelink = typeof post_PostIntegrationsIntegrationIdRelink;
export const post_PostIntegrationsIntegrationIdRelink = {
  method: Type.Literal("POST"),
  path: Type.Literal("/integrations/{integration_id}/relink"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ integration_id: PostIntegrationsIntegrationIdRelinkParameterIntegrationId }), body: PostIntegrationsIntegrationIdRelinkRequestBody },
  responses: { 200: PostIntegrationsIntegrationIdRelinkPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type post_PostIntegrationsIntegrationIdSetupLink = typeof post_PostIntegrationsIntegrationIdSetupLink;
export const post_PostIntegrationsIntegrationIdSetupLink = {
  method: Type.Literal("POST"),
  path: Type.Literal("/integrations/{integration_id}/setup-link"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ integration_id: PostIntegrationsIntegrationIdSetupLinkParameterIntegrationId }), body: PostIntegrationsIntegrationIdSetupLinkRequestBody },
  responses: { 200: PostIntegrationsIntegrationIdSetupLinkPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type get_GetIntegrationsIntegrationIdIntegrationFields = typeof get_GetIntegrationsIntegrationIdIntegrationFields;
export const get_GetIntegrationsIntegrationIdIntegrationFields = {
  method: Type.Literal("GET"),
  path: Type.Literal("/integrations/{integration_id}/integration-fields"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ cursor: GetIntegrationsIntegrationIdIntegrationFieldsParameterCursor, page_size: GetIntegrationsIntegrationIdIntegrationFieldsParameterPageSize }))), path: Type.Object({ integration_id: GetIntegrationsIntegrationIdIntegrationFieldsParameterIntegrationId }) },
  responses: { 200: GetIntegrationsIntegrationIdIntegrationFieldsPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type patch_PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldId = typeof patch_PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldId;
export const patch_PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldId = {
  method: Type.Literal("PATCH"),
  path: Type.Literal("/integrations/{integration_id}/integration-fields/{integration_field_id}"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ integration_id: PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationId, integration_field_id: PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationFieldId }), body: PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdRequestBody },
  responses: { 200: PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type get_GetIntegrationsIntegrationIdCustomFields = typeof get_GetIntegrationsIntegrationIdCustomFields;
export const get_GetIntegrationsIntegrationIdCustomFields = {
  method: Type.Literal("GET"),
  path: Type.Literal("/integrations/{integration_id}/custom-fields"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ cursor: GetIntegrationsIntegrationIdCustomFieldsParameterCursor, page_size: GetIntegrationsIntegrationIdCustomFieldsParameterPageSize }))), path: Type.Object({ integration_id: GetIntegrationsIntegrationIdCustomFieldsParameterIntegrationId }) },
  responses: { 200: GetIntegrationsIntegrationIdCustomFieldsPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type put_PutIntegrationsIntegrationIdCustomFieldsCustomFieldId = typeof put_PutIntegrationsIntegrationIdCustomFieldsCustomFieldId;
export const put_PutIntegrationsIntegrationIdCustomFieldsCustomFieldId = {
  method: Type.Literal("PUT"),
  path: Type.Literal("/integrations/{integration_id}/custom-fields/{custom_field_id}"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ integration_id: PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterIntegrationId, custom_field_id: PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterCustomFieldId }), body: PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdRequestBody },
  responses: { 200: PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type get_GetToolsCategory = typeof get_GetToolsCategory;
export const get_GetToolsCategory = {
  method: Type.Literal("GET"),
  path: Type.Literal("/tools/{category}"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ category: GetToolsCategoryParameterCategory }) },
  responses: { 200: GetToolsCategoryPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type post_PostHrisProvisioningGroupsGroupIdDiff = typeof post_PostHrisProvisioningGroupsGroupIdDiff;
export const post_PostHrisProvisioningGroupsGroupIdDiff = {
  method: Type.Literal("POST"),
  path: Type.Literal("/hris/provisioning-groups/{group_id}/diff"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ group_id: PostHrisProvisioningGroupsGroupIdDiffParameterGroupId }), header: Type.Object({ "X-Integration-Id": Type.String() }), body: PostHrisProvisioningGroupsGroupIdDiffRequestBody },
  responses: { 200: PostHrisProvisioningGroupsGroupIdDiffPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type post_PostHrisProvisioningGroupsGroupIdSetupLinks = typeof post_PostHrisProvisioningGroupsGroupIdSetupLinks;
export const post_PostHrisProvisioningGroupsGroupIdSetupLinks = {
  method: Type.Literal("POST"),
  path: Type.Literal("/hris/provisioning-groups/{group_id}/setup-links"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ group_id: PostHrisProvisioningGroupsGroupIdSetupLinksParameterGroupId }), header: Type.Object({ "X-Integration-Id": Type.String() }), body: PostHrisProvisioningGroupsGroupIdSetupLinksRequestBody },
  responses: { 200: PostHrisProvisioningGroupsGroupIdSetupLinksPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type get_GetHrisEmployees = typeof get_GetHrisEmployees;
export const get_GetHrisEmployees = {
  method: Type.Literal("GET"),
  path: Type.Literal("/hris/employees"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ cursor: GetHrisEmployeesParameterCursor, page_size: GetHrisEmployeesParameterPageSize, updated_after: GetHrisEmployeesParameterUpdatedAfter, include_deleted: GetHrisEmployeesParameterIncludeDeleted, ignore_unsupported_filters: GetHrisEmployeesParameterIgnoreUnsupportedFilters, ids: GetHrisEmployeesParameterIds, remote_ids: GetHrisEmployeesParameterRemoteIds, employment_status: GetHrisEmployeesParameterEmploymentStatus, employment_statuses: GetHrisEmployeesParameterEmploymentStatuses, group_ids: GetHrisEmployeesParameterGroupIds, legal_entity_ids: GetHrisEmployeesParameterLegalEntityIds, work_location_ids: GetHrisEmployeesParameterWorkLocationIds, work_emails: GetHrisEmployeesParameterWorkEmails, personal_emails: GetHrisEmployeesParameterPersonalEmails, custom_fields: GetHrisEmployeesParameterCustomFields }))), header: Type.Object({ "X-Integration-Id": Type.String() }) },
  responses: { 200: GetHrisEmployeesPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type post_PostHrisEmployees = typeof post_PostHrisEmployees;
export const post_PostHrisEmployees = {
  method: Type.Literal("POST"),
  path: Type.Literal("/hris/employees"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { header: Type.Object({ "X-Integration-Id": Type.String() }), body: PostHrisEmployeesRequestBody },
  responses: { 200: PostHrisEmployeesPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type get_GetHrisEmployeesForm = typeof get_GetHrisEmployeesForm;
export const get_GetHrisEmployeesForm = {
  method: Type.Literal("GET"),
  path: Type.Literal("/hris/employees/form"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { header: Type.Object({ "X-Integration-Id": Type.String() }) },
  responses: { 200: GetHrisEmployeesFormPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type post_PostHrisEmployeesForm = typeof post_PostHrisEmployeesForm;
export const post_PostHrisEmployeesForm = {
  method: Type.Literal("POST"),
  path: Type.Literal("/hris/employees/form"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { header: Type.Object({ "X-Integration-Id": Type.String() }), body: PostHrisEmployeesFormRequestBody },
  responses: { 200: PostHrisEmployeesFormPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type patch_PatchHrisEmployeesEmployeeId = typeof patch_PatchHrisEmployeesEmployeeId;
export const patch_PatchHrisEmployeesEmployeeId = {
  method: Type.Literal("PATCH"),
  path: Type.Literal("/hris/employees/{employee_id}"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ employee_id: PatchHrisEmployeesEmployeeIdParameterEmployeeId }), header: Type.Object({ "X-Integration-Id": Type.String() }), body: PatchHrisEmployeesEmployeeIdRequestBody },
  responses: { 200: PatchHrisEmployeesEmployeeIdPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type post_PostHrisEmployeesEmployeeIdDocuments = typeof post_PostHrisEmployeesEmployeeIdDocuments;
export const post_PostHrisEmployeesEmployeeIdDocuments = {
  method: Type.Literal("POST"),
  path: Type.Literal("/hris/employees/{employee_id}/documents"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ employee_id: PostHrisEmployeesEmployeeIdDocumentsParameterEmployeeId }), header: Type.Object({ "X-Integration-Id": Type.String() }), body: PostHrisEmployeesEmployeeIdDocumentsRequestBody },
  responses: { 200: PostHrisEmployeesEmployeeIdDocumentsPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type get_GetHrisEmployeeDocumentCategories = typeof get_GetHrisEmployeeDocumentCategories;
export const get_GetHrisEmployeeDocumentCategories = {
  method: Type.Literal("GET"),
  path: Type.Literal("/hris/employee-document-categories"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ cursor: GetHrisEmployeeDocumentCategoriesParameterCursor, page_size: GetHrisEmployeeDocumentCategoriesParameterPageSize, updated_after: GetHrisEmployeeDocumentCategoriesParameterUpdatedAfter, include_deleted: GetHrisEmployeeDocumentCategoriesParameterIncludeDeleted, ignore_unsupported_filters: GetHrisEmployeeDocumentCategoriesParameterIgnoreUnsupportedFilters, ids: GetHrisEmployeeDocumentCategoriesParameterIds, remote_ids: GetHrisEmployeeDocumentCategoriesParameterRemoteIds }))), header: Type.Object({ "X-Integration-Id": Type.String() }) },
  responses: { 200: GetHrisEmployeeDocumentCategoriesPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type get_GetHrisTeams = typeof get_GetHrisTeams;
export const get_GetHrisTeams = {
  method: Type.Literal("GET"),
  path: Type.Literal("/hris/teams"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ cursor: GetHrisTeamsParameterCursor, page_size: GetHrisTeamsParameterPageSize, updated_after: GetHrisTeamsParameterUpdatedAfter, include_deleted: GetHrisTeamsParameterIncludeDeleted, ignore_unsupported_filters: GetHrisTeamsParameterIgnoreUnsupportedFilters, ids: GetHrisTeamsParameterIds, remote_ids: GetHrisTeamsParameterRemoteIds }))), header: Type.Object({ "X-Integration-Id": Type.String() }) },
  responses: { 200: GetHrisTeamsPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type get_GetHrisGroups = typeof get_GetHrisGroups;
export const get_GetHrisGroups = {
  method: Type.Literal("GET"),
  path: Type.Literal("/hris/groups"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ cursor: GetHrisGroupsParameterCursor, page_size: GetHrisGroupsParameterPageSize, updated_after: GetHrisGroupsParameterUpdatedAfter, include_deleted: GetHrisGroupsParameterIncludeDeleted, ignore_unsupported_filters: GetHrisGroupsParameterIgnoreUnsupportedFilters, ids: GetHrisGroupsParameterIds, remote_ids: GetHrisGroupsParameterRemoteIds, types: GetHrisGroupsParameterTypes, name_contains: GetHrisGroupsParameterNameContains }))), header: Type.Object({ "X-Integration-Id": Type.String() }) },
  responses: { 200: GetHrisGroupsPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type get_GetHrisEmployments = typeof get_GetHrisEmployments;
export const get_GetHrisEmployments = {
  method: Type.Literal("GET"),
  path: Type.Literal("/hris/employments"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ cursor: GetHrisEmploymentsParameterCursor, page_size: GetHrisEmploymentsParameterPageSize, updated_after: GetHrisEmploymentsParameterUpdatedAfter, include_deleted: GetHrisEmploymentsParameterIncludeDeleted, ignore_unsupported_filters: GetHrisEmploymentsParameterIgnoreUnsupportedFilters, ids: GetHrisEmploymentsParameterIds, remote_ids: GetHrisEmploymentsParameterRemoteIds }))), header: Type.Object({ "X-Integration-Id": Type.String() }) },
  responses: { 200: GetHrisEmploymentsPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type get_GetHrisLocations = typeof get_GetHrisLocations;
export const get_GetHrisLocations = {
  method: Type.Literal("GET"),
  path: Type.Literal("/hris/locations"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ cursor: GetHrisLocationsParameterCursor, page_size: GetHrisLocationsParameterPageSize, updated_after: GetHrisLocationsParameterUpdatedAfter, include_deleted: GetHrisLocationsParameterIncludeDeleted, ignore_unsupported_filters: GetHrisLocationsParameterIgnoreUnsupportedFilters, ids: GetHrisLocationsParameterIds, remote_ids: GetHrisLocationsParameterRemoteIds, name_contains: GetHrisLocationsParameterNameContains }))), header: Type.Object({ "X-Integration-Id": Type.String() }) },
  responses: { 200: GetHrisLocationsPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type get_GetHrisAbsenceTypes = typeof get_GetHrisAbsenceTypes;
export const get_GetHrisAbsenceTypes = {
  method: Type.Literal("GET"),
  path: Type.Literal("/hris/absence-types"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ cursor: GetHrisAbsenceTypesParameterCursor, page_size: GetHrisAbsenceTypesParameterPageSize, updated_after: GetHrisAbsenceTypesParameterUpdatedAfter, include_deleted: GetHrisAbsenceTypesParameterIncludeDeleted, ignore_unsupported_filters: GetHrisAbsenceTypesParameterIgnoreUnsupportedFilters, ids: GetHrisAbsenceTypesParameterIds, remote_ids: GetHrisAbsenceTypesParameterRemoteIds }))), header: Type.Object({ "X-Integration-Id": Type.String() }) },
  responses: { 200: GetHrisAbsenceTypesPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type get_GetHrisTimeOffBalances = typeof get_GetHrisTimeOffBalances;
export const get_GetHrisTimeOffBalances = {
  method: Type.Literal("GET"),
  path: Type.Literal("/hris/time-off-balances"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ cursor: GetHrisTimeOffBalancesParameterCursor, page_size: GetHrisTimeOffBalancesParameterPageSize, updated_after: GetHrisTimeOffBalancesParameterUpdatedAfter, include_deleted: GetHrisTimeOffBalancesParameterIncludeDeleted, ignore_unsupported_filters: GetHrisTimeOffBalancesParameterIgnoreUnsupportedFilters, ids: GetHrisTimeOffBalancesParameterIds, remote_ids: GetHrisTimeOffBalancesParameterRemoteIds, employee_id: GetHrisTimeOffBalancesParameterEmployeeId }))), header: Type.Object({ "X-Integration-Id": Type.String() }) },
  responses: { 200: GetHrisTimeOffBalancesPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type get_GetHrisAbsences = typeof get_GetHrisAbsences;
export const get_GetHrisAbsences = {
  method: Type.Literal("GET"),
  path: Type.Literal("/hris/absences"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ cursor: GetHrisAbsencesParameterCursor, page_size: GetHrisAbsencesParameterPageSize, updated_after: GetHrisAbsencesParameterUpdatedAfter, include_deleted: GetHrisAbsencesParameterIncludeDeleted, ignore_unsupported_filters: GetHrisAbsencesParameterIgnoreUnsupportedFilters, ids: GetHrisAbsencesParameterIds, remote_ids: GetHrisAbsencesParameterRemoteIds, date_from: GetHrisAbsencesParameterDateFrom, date_until: GetHrisAbsencesParameterDateUntil, type_ids: GetHrisAbsencesParameterTypeIds, employee_id: GetHrisAbsencesParameterEmployeeId, time_from: GetHrisAbsencesParameterTimeFrom, time_until: GetHrisAbsencesParameterTimeUntil }))), header: Type.Object({ "X-Integration-Id": Type.String() }) },
  responses: { 200: GetHrisAbsencesPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type post_PostHrisAbsences = typeof post_PostHrisAbsences;
export const post_PostHrisAbsences = {
  method: Type.Literal("POST"),
  path: Type.Literal("/hris/absences"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { header: Type.Object({ "X-Integration-Id": Type.String() }), body: PostHrisAbsencesRequestBody },
  responses: { 200: PostHrisAbsencesPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type delete_DeleteHrisAbsencesAbsenceId = typeof delete_DeleteHrisAbsencesAbsenceId;
export const delete_DeleteHrisAbsencesAbsenceId = {
  method: Type.Literal("DELETE"),
  path: Type.Literal("/hris/absences/{absence_id}"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ absence_id: DeleteHrisAbsencesAbsenceIdParameterAbsenceId }), header: Type.Object({ "X-Integration-Id": Type.String() }), body: DeleteHrisAbsencesAbsenceIdRequestBody },
  responses: { 200: DeleteHrisAbsencesAbsenceIdPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type get_GetHrisLegalEntities = typeof get_GetHrisLegalEntities;
export const get_GetHrisLegalEntities = {
  method: Type.Literal("GET"),
  path: Type.Literal("/hris/legal-entities"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ cursor: GetHrisLegalEntitiesParameterCursor, page_size: GetHrisLegalEntitiesParameterPageSize, updated_after: GetHrisLegalEntitiesParameterUpdatedAfter, include_deleted: GetHrisLegalEntitiesParameterIncludeDeleted, ignore_unsupported_filters: GetHrisLegalEntitiesParameterIgnoreUnsupportedFilters, ids: GetHrisLegalEntitiesParameterIds, remote_ids: GetHrisLegalEntitiesParameterRemoteIds, name_contains: GetHrisLegalEntitiesParameterNameContains }))), header: Type.Object({ "X-Integration-Id": Type.String() }) },
  responses: { 200: GetHrisLegalEntitiesPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type get_GetHrisTimesheets = typeof get_GetHrisTimesheets;
export const get_GetHrisTimesheets = {
  method: Type.Literal("GET"),
  path: Type.Literal("/hris/timesheets"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ cursor: GetHrisTimesheetsParameterCursor, page_size: GetHrisTimesheetsParameterPageSize, updated_after: GetHrisTimesheetsParameterUpdatedAfter, include_deleted: GetHrisTimesheetsParameterIncludeDeleted, ignore_unsupported_filters: GetHrisTimesheetsParameterIgnoreUnsupportedFilters, ids: GetHrisTimesheetsParameterIds, remote_ids: GetHrisTimesheetsParameterRemoteIds, employee_id: GetHrisTimesheetsParameterEmployeeId, started_before: GetHrisTimesheetsParameterStartedBefore, started_after: GetHrisTimesheetsParameterStartedAfter, ended_before: GetHrisTimesheetsParameterEndedBefore, ended_after: GetHrisTimesheetsParameterEndedAfter }))), header: Type.Object({ "X-Integration-Id": Type.String() }) },
  responses: { 200: GetHrisTimesheetsPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type get_GetHrisPerformanceReviewCycles = typeof get_GetHrisPerformanceReviewCycles;
export const get_GetHrisPerformanceReviewCycles = {
  method: Type.Literal("GET"),
  path: Type.Literal("/hris/performance-review-cycles"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ cursor: GetHrisPerformanceReviewCyclesParameterCursor, page_size: GetHrisPerformanceReviewCyclesParameterPageSize, updated_after: GetHrisPerformanceReviewCyclesParameterUpdatedAfter, include_deleted: GetHrisPerformanceReviewCyclesParameterIncludeDeleted, ignore_unsupported_filters: GetHrisPerformanceReviewCyclesParameterIgnoreUnsupportedFilters, ids: GetHrisPerformanceReviewCyclesParameterIds, remote_ids: GetHrisPerformanceReviewCyclesParameterRemoteIds }))), header: Type.Object({ "X-Integration-Id": Type.String() }) },
  responses: { 200: GetHrisPerformanceReviewCyclesPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type get_GetHrisPerformanceReviews = typeof get_GetHrisPerformanceReviews;
export const get_GetHrisPerformanceReviews = {
  method: Type.Literal("GET"),
  path: Type.Literal("/hris/performance-reviews"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ cursor: GetHrisPerformanceReviewsParameterCursor, page_size: GetHrisPerformanceReviewsParameterPageSize, updated_after: GetHrisPerformanceReviewsParameterUpdatedAfter, include_deleted: GetHrisPerformanceReviewsParameterIncludeDeleted, ignore_unsupported_filters: GetHrisPerformanceReviewsParameterIgnoreUnsupportedFilters, ids: GetHrisPerformanceReviewsParameterIds, remote_ids: GetHrisPerformanceReviewsParameterRemoteIds, types: GetHrisPerformanceReviewsParameterTypes, review_cycle_ids: GetHrisPerformanceReviewsParameterReviewCycleIds, reviewee_ids: GetHrisPerformanceReviewsParameterRevieweeIds }))), header: Type.Object({ "X-Integration-Id": Type.String() }) },
  responses: { 200: GetHrisPerformanceReviewsPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type get_GetHrisSkills = typeof get_GetHrisSkills;
export const get_GetHrisSkills = {
  method: Type.Literal("GET"),
  path: Type.Literal("/hris/skills"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ ids: GetHrisSkillsParameterIds, remote_ids: GetHrisSkillsParameterRemoteIds, name_contains: GetHrisSkillsParameterNameContains }))), header: Type.Object({ "X-Integration-Id": Type.String() }) },
  responses: { 200: GetHrisSkillsPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type post_PostHrisSkills = typeof post_PostHrisSkills;
export const post_PostHrisSkills = {
  method: Type.Literal("POST"),
  path: Type.Literal("/hris/skills"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { header: Type.Object({ "X-Integration-Id": Type.String() }), body: PostHrisSkillsRequestBody },
  responses: { 200: PostHrisSkillsPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type patch_PatchHrisSkillsSkillId = typeof patch_PatchHrisSkillsSkillId;
export const patch_PatchHrisSkillsSkillId = {
  method: Type.Literal("PATCH"),
  path: Type.Literal("/hris/skills/{skill_id}"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ skill_id: PatchHrisSkillsSkillIdParameterSkillId }), header: Type.Object({ "X-Integration-Id": Type.String() }), body: PatchHrisSkillsSkillIdRequestBody },
  responses: { 200: PatchHrisSkillsSkillIdPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type delete_DeleteHrisSkillsSkillId = typeof delete_DeleteHrisSkillsSkillId;
export const delete_DeleteHrisSkillsSkillId = {
  method: Type.Literal("DELETE"),
  path: Type.Literal("/hris/skills/{skill_id}"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ skill_id: DeleteHrisSkillsSkillIdParameterSkillId }), header: Type.Object({ "X-Integration-Id": Type.String() }), body: DeleteHrisSkillsSkillIdRequestBody },
  responses: { 200: DeleteHrisSkillsSkillIdPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type get_GetHrisEmployeeSkillAssignments = typeof get_GetHrisEmployeeSkillAssignments;
export const get_GetHrisEmployeeSkillAssignments = {
  method: Type.Literal("GET"),
  path: Type.Literal("/hris/employee-skill-assignments"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ ids: GetHrisEmployeeSkillAssignmentsParameterIds, remote_ids: GetHrisEmployeeSkillAssignmentsParameterRemoteIds, employee_ids: GetHrisEmployeeSkillAssignmentsParameterEmployeeIds, skill_ids: GetHrisEmployeeSkillAssignmentsParameterSkillIds }))), header: Type.Object({ "X-Integration-Id": Type.String() }) },
  responses: { 200: GetHrisEmployeeSkillAssignmentsPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type post_PostHrisEmployeeSkillAssignments = typeof post_PostHrisEmployeeSkillAssignments;
export const post_PostHrisEmployeeSkillAssignments = {
  method: Type.Literal("POST"),
  path: Type.Literal("/hris/employee-skill-assignments"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { header: Type.Object({ "X-Integration-Id": Type.String() }), body: PostHrisEmployeeSkillAssignmentsRequestBody },
  responses: { 200: PostHrisEmployeeSkillAssignmentsPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type patch_PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentId = typeof patch_PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentId;
export const patch_PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentId = {
  method: Type.Literal("PATCH"),
  path: Type.Literal("/hris/employee-skill-assignments/{employee_skill_assignment_id}"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ employee_skill_assignment_id: PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId }), header: Type.Object({ "X-Integration-Id": Type.String() }), body: PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody },
  responses: { 200: PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type delete_DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentId = typeof delete_DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentId;
export const delete_DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentId = {
  method: Type.Literal("DELETE"),
  path: Type.Literal("/hris/employee-skill-assignments/{employee_skill_assignment_id}"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ employee_skill_assignment_id: DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId }), header: Type.Object({ "X-Integration-Id": Type.String() }), body: DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody },
  responses: { 200: DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type get_GetHrisStaffingEntities = typeof get_GetHrisStaffingEntities;
export const get_GetHrisStaffingEntities = {
  method: Type.Literal("GET"),
  path: Type.Literal("/hris/staffing-entities"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ cursor: GetHrisStaffingEntitiesParameterCursor, page_size: GetHrisStaffingEntitiesParameterPageSize, updated_after: GetHrisStaffingEntitiesParameterUpdatedAfter, include_deleted: GetHrisStaffingEntitiesParameterIncludeDeleted, ignore_unsupported_filters: GetHrisStaffingEntitiesParameterIgnoreUnsupportedFilters, ids: GetHrisStaffingEntitiesParameterIds, remote_ids: GetHrisStaffingEntitiesParameterRemoteIds, model_types: GetHrisStaffingEntitiesParameterModelTypes, statuses: GetHrisStaffingEntitiesParameterStatuses }))), header: Type.Object({ "X-Integration-Id": Type.String() }) },
  responses: { 200: GetHrisStaffingEntitiesPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type get_GetAtsApplications = typeof get_GetAtsApplications;
export const get_GetAtsApplications = {
  method: Type.Literal("GET"),
  path: Type.Literal("/ats/applications"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ cursor: GetAtsApplicationsParameterCursor, page_size: GetAtsApplicationsParameterPageSize, updated_after: GetAtsApplicationsParameterUpdatedAfter, include_deleted: GetAtsApplicationsParameterIncludeDeleted, ignore_unsupported_filters: GetAtsApplicationsParameterIgnoreUnsupportedFilters, ids: GetAtsApplicationsParameterIds, remote_ids: GetAtsApplicationsParameterRemoteIds, outcome: GetAtsApplicationsParameterOutcome, outcomes: GetAtsApplicationsParameterOutcomes, job_ids: GetAtsApplicationsParameterJobIds, job_remote_ids: GetAtsApplicationsParameterJobRemoteIds, current_stage_ids: GetAtsApplicationsParameterCurrentStageIds, remote_created_after: GetAtsApplicationsParameterRemoteCreatedAfter }))), header: Type.Object({ "X-Integration-Id": Type.String() }) },
  responses: { 200: GetAtsApplicationsPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("ATS.JOB_CLOSED"), Type.Literal("ATS.APPLICATION_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type put_PutAtsApplicationsApplicationIdStage = typeof put_PutAtsApplicationsApplicationIdStage;
export const put_PutAtsApplicationsApplicationIdStage = {
  method: Type.Literal("PUT"),
  path: Type.Literal("/ats/applications/{application_id}/stage"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ application_id: PutAtsApplicationsApplicationIdStageParameterApplicationId }), header: Type.Object({ "X-Integration-Id": Type.String() }), body: PutAtsApplicationsApplicationIdStageRequestBody },
  responses: { 200: PutAtsApplicationsApplicationIdStagePositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("ATS.JOB_CLOSED"), Type.Literal("ATS.APPLICATION_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type post_PostAtsApplicationsApplicationIdResultLinks = typeof post_PostAtsApplicationsApplicationIdResultLinks;
export const post_PostAtsApplicationsApplicationIdResultLinks = {
  method: Type.Literal("POST"),
  path: Type.Literal("/ats/applications/{application_id}/result-links"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ application_id: PostAtsApplicationsApplicationIdResultLinksParameterApplicationId }), header: Type.Object({ "X-Integration-Id": Type.String() }), body: PostAtsApplicationsApplicationIdResultLinksRequestBody },
  responses: { 200: PostAtsApplicationsApplicationIdResultLinksPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("ATS.JOB_CLOSED"), Type.Literal("ATS.APPLICATION_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type post_PostAtsApplicationsApplicationIdNotes = typeof post_PostAtsApplicationsApplicationIdNotes;
export const post_PostAtsApplicationsApplicationIdNotes = {
  method: Type.Literal("POST"),
  path: Type.Literal("/ats/applications/{application_id}/notes"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ application_id: PostAtsApplicationsApplicationIdNotesParameterApplicationId }), header: Type.Object({ "X-Integration-Id": Type.String() }), body: PostAtsApplicationsApplicationIdNotesRequestBody },
  responses: { 200: PostAtsApplicationsApplicationIdNotesPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("ATS.JOB_CLOSED"), Type.Literal("ATS.APPLICATION_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type get_GetAtsApplicationsApplicationIdAttachments = typeof get_GetAtsApplicationsApplicationIdAttachments;
export const get_GetAtsApplicationsApplicationIdAttachments = {
  method: Type.Literal("GET"),
  path: Type.Literal("/ats/applications/{application_id}/attachments"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ application_id: GetAtsApplicationsApplicationIdAttachmentsParameterApplicationId }), header: Type.Object({ "X-Integration-Id": Type.String() }) },
  responses: { 200: GetAtsApplicationsApplicationIdAttachmentsPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("ATS.JOB_CLOSED"), Type.Literal("ATS.APPLICATION_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type post_PostAtsApplicationsApplicationIdAttachments = typeof post_PostAtsApplicationsApplicationIdAttachments;
export const post_PostAtsApplicationsApplicationIdAttachments = {
  method: Type.Literal("POST"),
  path: Type.Literal("/ats/applications/{application_id}/attachments"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ application_id: PostAtsApplicationsApplicationIdAttachmentsParameterApplicationId }), header: Type.Object({ "X-Integration-Id": Type.String() }), body: PostAtsApplicationsApplicationIdAttachmentsRequestBody },
  responses: { 200: PostAtsApplicationsApplicationIdAttachmentsPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("ATS.JOB_CLOSED"), Type.Literal("ATS.APPLICATION_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type post_PostAtsApplicationsApplicationIdReject = typeof post_PostAtsApplicationsApplicationIdReject;
export const post_PostAtsApplicationsApplicationIdReject = {
  method: Type.Literal("POST"),
  path: Type.Literal("/ats/applications/{application_id}/reject"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ application_id: PostAtsApplicationsApplicationIdRejectParameterApplicationId }), header: Type.Object({ "X-Integration-Id": Type.String() }), body: PostAtsApplicationsApplicationIdRejectRequestBody },
  responses: { 200: PostAtsApplicationsApplicationIdRejectPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("ATS.JOB_CLOSED"), Type.Literal("ATS.APPLICATION_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type post_PostAtsApplicationsApplicationIdInterviews = typeof post_PostAtsApplicationsApplicationIdInterviews;
export const post_PostAtsApplicationsApplicationIdInterviews = {
  method: Type.Literal("POST"),
  path: Type.Literal("/ats/applications/{application_id}/interviews"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ application_id: PostAtsApplicationsApplicationIdInterviewsParameterApplicationId }), header: Type.Object({ "X-Integration-Id": Type.String() }), body: PostAtsApplicationsApplicationIdInterviewsRequestBody },
  responses: { 200: PostAtsApplicationsApplicationIdInterviewsPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("ATS.JOB_CLOSED"), Type.Literal("ATS.APPLICATION_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type patch_PatchAtsApplicationsApplicationIdInterviews = typeof patch_PatchAtsApplicationsApplicationIdInterviews;
export const patch_PatchAtsApplicationsApplicationIdInterviews = {
  method: Type.Literal("PATCH"),
  path: Type.Literal("/ats/applications/{application_id}/interviews"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ application_id: PatchAtsApplicationsApplicationIdInterviewsParameterApplicationId }), header: Type.Object({ "X-Integration-Id": Type.String() }), body: PatchAtsApplicationsApplicationIdInterviewsRequestBody },
  responses: { 200: PatchAtsApplicationsApplicationIdInterviewsPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("ATS.JOB_CLOSED"), Type.Literal("ATS.APPLICATION_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type get_GetAtsCandidates = typeof get_GetAtsCandidates;
export const get_GetAtsCandidates = {
  method: Type.Literal("GET"),
  path: Type.Literal("/ats/candidates"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ cursor: GetAtsCandidatesParameterCursor, page_size: GetAtsCandidatesParameterPageSize, updated_after: GetAtsCandidatesParameterUpdatedAfter, include_deleted: GetAtsCandidatesParameterIncludeDeleted, ignore_unsupported_filters: GetAtsCandidatesParameterIgnoreUnsupportedFilters, ids: GetAtsCandidatesParameterIds, remote_ids: GetAtsCandidatesParameterRemoteIds, email: GetAtsCandidatesParameterEmail, job_ids: GetAtsCandidatesParameterJobIds, first_name: GetAtsCandidatesParameterFirstName, last_name: GetAtsCandidatesParameterLastName }))), header: Type.Object({ "X-Integration-Id": Type.String() }) },
  responses: { 200: GetAtsCandidatesPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("ATS.JOB_CLOSED"), Type.Literal("ATS.APPLICATION_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type post_PostAtsCandidates = typeof post_PostAtsCandidates;
export const post_PostAtsCandidates = {
  method: Type.Literal("POST"),
  path: Type.Literal("/ats/candidates"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { header: Type.Object({ "X-Integration-Id": Type.String() }), body: PostAtsCandidatesRequestBody },
  responses: { 200: PostAtsCandidatesPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("ATS.JOB_CLOSED"), Type.Literal("ATS.APPLICATION_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type get_GetAtsCandidatesCandidateIdAttachments = typeof get_GetAtsCandidatesCandidateIdAttachments;
export const get_GetAtsCandidatesCandidateIdAttachments = {
  method: Type.Literal("GET"),
  path: Type.Literal("/ats/candidates/{candidate_id}/attachments"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ candidate_id: GetAtsCandidatesCandidateIdAttachmentsParameterCandidateId }), header: Type.Object({ "X-Integration-Id": Type.String() }) },
  responses: { 200: GetAtsCandidatesCandidateIdAttachmentsPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("ATS.JOB_CLOSED"), Type.Literal("ATS.APPLICATION_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type post_PostAtsCandidatesCandidateIdAttachments = typeof post_PostAtsCandidatesCandidateIdAttachments;
export const post_PostAtsCandidatesCandidateIdAttachments = {
  method: Type.Literal("POST"),
  path: Type.Literal("/ats/candidates/{candidate_id}/attachments"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ candidate_id: PostAtsCandidatesCandidateIdAttachmentsParameterCandidateId }), header: Type.Object({ "X-Integration-Id": Type.String() }), body: PostAtsCandidatesCandidateIdAttachmentsRequestBody },
  responses: { 200: PostAtsCandidatesCandidateIdAttachmentsPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("ATS.JOB_CLOSED"), Type.Literal("ATS.APPLICATION_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type post_PostAtsCandidatesCandidateIdResultLinks = typeof post_PostAtsCandidatesCandidateIdResultLinks;
export const post_PostAtsCandidatesCandidateIdResultLinks = {
  method: Type.Literal("POST"),
  path: Type.Literal("/ats/candidates/{candidate_id}/result-links"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ candidate_id: PostAtsCandidatesCandidateIdResultLinksParameterCandidateId }), header: Type.Object({ "X-Integration-Id": Type.String() }), body: PostAtsCandidatesCandidateIdResultLinksRequestBody },
  responses: { 200: PostAtsCandidatesCandidateIdResultLinksPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("ATS.JOB_CLOSED"), Type.Literal("ATS.APPLICATION_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type post_PostAtsCandidatesCandidateIdTags = typeof post_PostAtsCandidatesCandidateIdTags;
export const post_PostAtsCandidatesCandidateIdTags = {
  method: Type.Literal("POST"),
  path: Type.Literal("/ats/candidates/{candidate_id}/tags"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ candidate_id: PostAtsCandidatesCandidateIdTagsParameterCandidateId }), header: Type.Object({ "X-Integration-Id": Type.String() }), body: PostAtsCandidatesCandidateIdTagsRequestBody },
  responses: { 200: PostAtsCandidatesCandidateIdTagsPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("ATS.JOB_CLOSED"), Type.Literal("ATS.APPLICATION_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type delete_DeleteAtsCandidatesCandidateIdTags = typeof delete_DeleteAtsCandidatesCandidateIdTags;
export const delete_DeleteAtsCandidatesCandidateIdTags = {
  method: Type.Literal("DELETE"),
  path: Type.Literal("/ats/candidates/{candidate_id}/tags"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ candidate_id: DeleteAtsCandidatesCandidateIdTagsParameterCandidateId }), header: Type.Object({ "X-Integration-Id": Type.String() }), body: DeleteAtsCandidatesCandidateIdTagsRequestBody },
  responses: { 200: DeleteAtsCandidatesCandidateIdTagsPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("ATS.JOB_CLOSED"), Type.Literal("ATS.APPLICATION_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type get_GetAtsTags = typeof get_GetAtsTags;
export const get_GetAtsTags = {
  method: Type.Literal("GET"),
  path: Type.Literal("/ats/tags"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ cursor: GetAtsTagsParameterCursor, page_size: GetAtsTagsParameterPageSize, updated_after: GetAtsTagsParameterUpdatedAfter, include_deleted: GetAtsTagsParameterIncludeDeleted, ignore_unsupported_filters: GetAtsTagsParameterIgnoreUnsupportedFilters, ids: GetAtsTagsParameterIds, remote_ids: GetAtsTagsParameterRemoteIds }))), header: Type.Object({ "X-Integration-Id": Type.String() }) },
  responses: { 200: GetAtsTagsPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("ATS.JOB_CLOSED"), Type.Literal("ATS.APPLICATION_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type get_GetAtsApplicationStages = typeof get_GetAtsApplicationStages;
export const get_GetAtsApplicationStages = {
  method: Type.Literal("GET"),
  path: Type.Literal("/ats/application-stages"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ cursor: GetAtsApplicationStagesParameterCursor, page_size: GetAtsApplicationStagesParameterPageSize, updated_after: GetAtsApplicationStagesParameterUpdatedAfter, include_deleted: GetAtsApplicationStagesParameterIncludeDeleted, ignore_unsupported_filters: GetAtsApplicationStagesParameterIgnoreUnsupportedFilters, ids: GetAtsApplicationStagesParameterIds, remote_ids: GetAtsApplicationStagesParameterRemoteIds }))), header: Type.Object({ "X-Integration-Id": Type.String() }) },
  responses: { 200: GetAtsApplicationStagesPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("ATS.JOB_CLOSED"), Type.Literal("ATS.APPLICATION_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type get_GetAtsJobs = typeof get_GetAtsJobs;
export const get_GetAtsJobs = {
  method: Type.Literal("GET"),
  path: Type.Literal("/ats/jobs"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ cursor: GetAtsJobsParameterCursor, page_size: GetAtsJobsParameterPageSize, updated_after: GetAtsJobsParameterUpdatedAfter, include_deleted: GetAtsJobsParameterIncludeDeleted, ignore_unsupported_filters: GetAtsJobsParameterIgnoreUnsupportedFilters, ids: GetAtsJobsParameterIds, remote_ids: GetAtsJobsParameterRemoteIds, job_codes: GetAtsJobsParameterJobCodes, post_url: GetAtsJobsParameterPostUrl, status: GetAtsJobsParameterStatus, statuses: GetAtsJobsParameterStatuses, employment_types: GetAtsJobsParameterEmploymentTypes, visibilities: GetAtsJobsParameterVisibilities, remote_created_after: GetAtsJobsParameterRemoteCreatedAfter, name_contains: GetAtsJobsParameterNameContains }))), header: Type.Object({ "X-Integration-Id": Type.String() }) },
  responses: { 200: GetAtsJobsPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("ATS.JOB_CLOSED"), Type.Literal("ATS.APPLICATION_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type post_PostAtsJobsJobIdApplications = typeof post_PostAtsJobsJobIdApplications;
export const post_PostAtsJobsJobIdApplications = {
  method: Type.Literal("POST"),
  path: Type.Literal("/ats/jobs/{job_id}/applications"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ job_id: PostAtsJobsJobIdApplicationsParameterJobId }), header: Type.Object({ "X-Integration-Id": Type.String() }), body: PostAtsJobsJobIdApplicationsRequestBody },
  responses: { 200: PostAtsJobsJobIdApplicationsPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("ATS.JOB_CLOSED"), Type.Literal("ATS.APPLICATION_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type get_GetAtsUsers = typeof get_GetAtsUsers;
export const get_GetAtsUsers = {
  method: Type.Literal("GET"),
  path: Type.Literal("/ats/users"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ cursor: GetAtsUsersParameterCursor, page_size: GetAtsUsersParameterPageSize, updated_after: GetAtsUsersParameterUpdatedAfter, include_deleted: GetAtsUsersParameterIncludeDeleted, ignore_unsupported_filters: GetAtsUsersParameterIgnoreUnsupportedFilters, ids: GetAtsUsersParameterIds, remote_ids: GetAtsUsersParameterRemoteIds, emails: GetAtsUsersParameterEmails }))), header: Type.Object({ "X-Integration-Id": Type.String() }) },
  responses: { 200: GetAtsUsersPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("ATS.JOB_CLOSED"), Type.Literal("ATS.APPLICATION_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type get_GetAtsRoles = typeof get_GetAtsRoles;
export const get_GetAtsRoles = {
  method: Type.Literal("GET"),
  path: Type.Literal("/ats/roles"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ cursor: GetAtsRolesParameterCursor, page_size: GetAtsRolesParameterPageSize, updated_after: GetAtsRolesParameterUpdatedAfter, include_deleted: GetAtsRolesParameterIncludeDeleted, ignore_unsupported_filters: GetAtsRolesParameterIgnoreUnsupportedFilters, ids: GetAtsRolesParameterIds, remote_ids: GetAtsRolesParameterRemoteIds, scopes: GetAtsRolesParameterScopes }))), header: Type.Object({ "X-Integration-Id": Type.String() }) },
  responses: { 200: GetAtsRolesPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("ATS.JOB_CLOSED"), Type.Literal("ATS.APPLICATION_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type get_GetAtsOffers = typeof get_GetAtsOffers;
export const get_GetAtsOffers = {
  method: Type.Literal("GET"),
  path: Type.Literal("/ats/offers"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ cursor: GetAtsOffersParameterCursor, page_size: GetAtsOffersParameterPageSize, updated_after: GetAtsOffersParameterUpdatedAfter, include_deleted: GetAtsOffersParameterIncludeDeleted, ignore_unsupported_filters: GetAtsOffersParameterIgnoreUnsupportedFilters, ids: GetAtsOffersParameterIds, remote_ids: GetAtsOffersParameterRemoteIds }))), header: Type.Object({ "X-Integration-Id": Type.String() }) },
  responses: { 200: GetAtsOffersPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("ATS.JOB_CLOSED"), Type.Literal("ATS.APPLICATION_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type get_GetAtsRejectionReasons = typeof get_GetAtsRejectionReasons;
export const get_GetAtsRejectionReasons = {
  method: Type.Literal("GET"),
  path: Type.Literal("/ats/rejection-reasons"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ cursor: GetAtsRejectionReasonsParameterCursor, page_size: GetAtsRejectionReasonsParameterPageSize, updated_after: GetAtsRejectionReasonsParameterUpdatedAfter, include_deleted: GetAtsRejectionReasonsParameterIncludeDeleted, ignore_unsupported_filters: GetAtsRejectionReasonsParameterIgnoreUnsupportedFilters, ids: GetAtsRejectionReasonsParameterIds, remote_ids: GetAtsRejectionReasonsParameterRemoteIds }))), header: Type.Object({ "X-Integration-Id": Type.String() }) },
  responses: { 200: GetAtsRejectionReasonsPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("ATS.JOB_CLOSED"), Type.Literal("ATS.APPLICATION_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type get_GetAtsInterviews = typeof get_GetAtsInterviews;
export const get_GetAtsInterviews = {
  method: Type.Literal("GET"),
  path: Type.Literal("/ats/interviews"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ cursor: GetAtsInterviewsParameterCursor, page_size: GetAtsInterviewsParameterPageSize, updated_after: GetAtsInterviewsParameterUpdatedAfter, include_deleted: GetAtsInterviewsParameterIncludeDeleted, ignore_unsupported_filters: GetAtsInterviewsParameterIgnoreUnsupportedFilters, ids: GetAtsInterviewsParameterIds, remote_ids: GetAtsInterviewsParameterRemoteIds, job_ids: GetAtsInterviewsParameterJobIds }))), header: Type.Object({ "X-Integration-Id": Type.String() }) },
  responses: { 200: GetAtsInterviewsPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("ATS.JOB_CLOSED"), Type.Literal("ATS.APPLICATION_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type get_GetAtsActionsAtsCreateCandidate = typeof get_GetAtsActionsAtsCreateCandidate;
export const get_GetAtsActionsAtsCreateCandidate = {
  method: Type.Literal("GET"),
  path: Type.Literal("/ats/actions/ats_create_candidate"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { header: Type.Object({ "X-Integration-Id": Type.String() }) },
  responses: { 200: GetAtsActionsAtsCreateCandidatePositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("ATS.JOB_CLOSED"), Type.Literal("ATS.APPLICATION_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type get_GetAtsActionsAtsCreateApplication = typeof get_GetAtsActionsAtsCreateApplication;
export const get_GetAtsActionsAtsCreateApplication = {
  method: Type.Literal("GET"),
  path: Type.Literal("/ats/actions/ats_create_application"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { header: Type.Object({ "X-Integration-Id": Type.String() }) },
  responses: { 200: GetAtsActionsAtsCreateApplicationPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("ATS.JOB_CLOSED"), Type.Literal("ATS.APPLICATION_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type get_GetAtsActionsAtsAddApplicationAttachment = typeof get_GetAtsActionsAtsAddApplicationAttachment;
export const get_GetAtsActionsAtsAddApplicationAttachment = {
  method: Type.Literal("GET"),
  path: Type.Literal("/ats/actions/ats_add_application_attachment"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { header: Type.Object({ "X-Integration-Id": Type.String() }) },
  responses: { 200: GetAtsActionsAtsAddApplicationAttachmentPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("ATS.JOB_CLOSED"), Type.Literal("ATS.APPLICATION_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type get_GetAtsActionsAtsAddCandidateAttachment = typeof get_GetAtsActionsAtsAddCandidateAttachment;
export const get_GetAtsActionsAtsAddCandidateAttachment = {
  method: Type.Literal("GET"),
  path: Type.Literal("/ats/actions/ats_add_candidate_attachment"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { header: Type.Object({ "X-Integration-Id": Type.String() }) },
  responses: { 200: GetAtsActionsAtsAddCandidateAttachmentPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("ATS.JOB_CLOSED"), Type.Literal("ATS.APPLICATION_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type post_PostAtsImportTrackedApplication = typeof post_PostAtsImportTrackedApplication;
export const post_PostAtsImportTrackedApplication = {
  method: Type.Literal("POST"),
  path: Type.Literal("/ats/import-tracked-application"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { header: Type.Object({ "X-Integration-Id": Type.String() }), body: PostAtsImportTrackedApplicationRequestBody },
  responses: { 200: PostAtsImportTrackedApplicationPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("ATS.JOB_CLOSED"), Type.Literal("ATS.APPLICATION_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type post_PostAtsCustomAvionteSyncedJobs = typeof post_PostAtsCustomAvionteSyncedJobs;
export const post_PostAtsCustomAvionteSyncedJobs = {
  method: Type.Literal("POST"),
  path: Type.Literal("/ats/custom/avionte/synced-jobs"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { header: Type.Object({ "X-Integration-Id": Type.String() }), body: PostAtsCustomAvionteSyncedJobsRequestBody },
  responses: { 200: PostAtsCustomAvionteSyncedJobsPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type delete_DeleteAtsCustomAvionteSyncedJobsJobRemoteId = typeof delete_DeleteAtsCustomAvionteSyncedJobsJobRemoteId;
export const delete_DeleteAtsCustomAvionteSyncedJobsJobRemoteId = {
  method: Type.Literal("DELETE"),
  path: Type.Literal("/ats/custom/avionte/synced-jobs/{job_remote_id}"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ job_remote_id: DeleteAtsCustomAvionteSyncedJobsJobRemoteIdParameterJobRemoteId }), header: Type.Object({ "X-Integration-Id": Type.String() }), body: DeleteAtsCustomAvionteSyncedJobsJobRemoteIdRequestBody },
  responses: { 200: DeleteAtsCustomAvionteSyncedJobsJobRemoteIdPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type get_GetAssessmentPackages = typeof get_GetAssessmentPackages;
export const get_GetAssessmentPackages = {
  method: Type.Literal("GET"),
  path: Type.Literal("/assessment/packages"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { header: Type.Object({ "X-Integration-Id": Type.String() }) },
  responses: { 200: GetAssessmentPackagesPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("ATS.JOB_CLOSED"), Type.Literal("ATS.APPLICATION_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type put_PutAssessmentPackages = typeof put_PutAssessmentPackages;
export const put_PutAssessmentPackages = {
  method: Type.Literal("PUT"),
  path: Type.Literal("/assessment/packages"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { header: Type.Object({ "X-Integration-Id": Type.String() }), body: PutAssessmentPackagesRequestBody },
  responses: { 200: PutAssessmentPackagesPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("ATS.JOB_CLOSED"), Type.Literal("ATS.APPLICATION_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type get_GetAssessmentOrders = typeof get_GetAssessmentOrders;
export const get_GetAssessmentOrders = {
  method: Type.Literal("GET"),
  path: Type.Literal("/assessment/orders"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ cursor: GetAssessmentOrdersParameterCursor, page_size: GetAssessmentOrdersParameterPageSize, ids: GetAssessmentOrdersParameterIds, statuses: GetAssessmentOrdersParameterStatuses, created_after: GetAssessmentOrdersParameterCreatedAfter }))), header: Type.Object({ "X-Integration-Id": Type.String() }) },
  responses: { 200: GetAssessmentOrdersPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("ATS.JOB_CLOSED"), Type.Literal("ATS.APPLICATION_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type get_GetAssessmentOrdersOpen = typeof get_GetAssessmentOrdersOpen;
export const get_GetAssessmentOrdersOpen = {
  method: Type.Literal("GET"),
  path: Type.Literal("/assessment/orders/open"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ cursor: GetAssessmentOrdersOpenParameterCursor, page_size: GetAssessmentOrdersOpenParameterPageSize }))), header: Type.Object({ "X-Integration-Id": Type.String() }) },
  responses: { 200: GetAssessmentOrdersOpenPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("ATS.JOB_CLOSED"), Type.Literal("ATS.APPLICATION_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type put_PutAssessmentOrdersAssessmentOrderIdResult = typeof put_PutAssessmentOrdersAssessmentOrderIdResult;
export const put_PutAssessmentOrdersAssessmentOrderIdResult = {
  method: Type.Literal("PUT"),
  path: Type.Literal("/assessment/orders/{assessment_order_id}/result"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ assessment_order_id: PutAssessmentOrdersAssessmentOrderIdResultParameterAssessmentOrderId }), header: Type.Object({ "X-Integration-Id": Type.String() }), body: PutAssessmentOrdersAssessmentOrderIdResultRequestBody },
  responses: { 200: PutAssessmentOrdersAssessmentOrderIdResultPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("ATS.JOB_CLOSED"), Type.Literal("ATS.APPLICATION_ALREADY_EXISTS")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type get_GetLmsUsers = typeof get_GetLmsUsers;
export const get_GetLmsUsers = {
  method: Type.Literal("GET"),
  path: Type.Literal("/lms/users"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ cursor: GetLmsUsersParameterCursor, page_size: GetLmsUsersParameterPageSize, updated_after: GetLmsUsersParameterUpdatedAfter, include_deleted: GetLmsUsersParameterIncludeDeleted, ignore_unsupported_filters: GetLmsUsersParameterIgnoreUnsupportedFilters, ids: GetLmsUsersParameterIds, remote_ids: GetLmsUsersParameterRemoteIds, work_emails: GetLmsUsersParameterWorkEmails }))), header: Type.Object({ "X-Integration-Id": Type.String() }) },
  responses: { 200: GetLmsUsersPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type get_GetLmsCourseProgressions = typeof get_GetLmsCourseProgressions;
export const get_GetLmsCourseProgressions = {
  method: Type.Literal("GET"),
  path: Type.Literal("/lms/course-progressions"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ cursor: GetLmsCourseProgressionsParameterCursor, page_size: GetLmsCourseProgressionsParameterPageSize, updated_after: GetLmsCourseProgressionsParameterUpdatedAfter, include_deleted: GetLmsCourseProgressionsParameterIncludeDeleted, ignore_unsupported_filters: GetLmsCourseProgressionsParameterIgnoreUnsupportedFilters, ids: GetLmsCourseProgressionsParameterIds, remote_ids: GetLmsCourseProgressionsParameterRemoteIds, user_ids: GetLmsCourseProgressionsParameterUserIds, course_ids: GetLmsCourseProgressionsParameterCourseIds }))), header: Type.Object({ "X-Integration-Id": Type.String() }) },
  responses: { 200: GetLmsCourseProgressionsPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type post_PostLmsCourseProgressions = typeof post_PostLmsCourseProgressions;
export const post_PostLmsCourseProgressions = {
  method: Type.Literal("POST"),
  path: Type.Literal("/lms/course-progressions"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { header: Type.Object({ "X-Integration-Id": Type.String() }), body: PostLmsCourseProgressionsRequestBody },
  responses: { 200: PostLmsCourseProgressionsPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type post_PostLmsCourseProgressionsCourseProgressionIdComplete = typeof post_PostLmsCourseProgressionsCourseProgressionIdComplete;
export const post_PostLmsCourseProgressionsCourseProgressionIdComplete = {
  method: Type.Literal("POST"),
  path: Type.Literal("/lms/course-progressions/{course_progression_id}/complete"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ course_progression_id: PostLmsCourseProgressionsCourseProgressionIdCompleteParameterCourseProgressionId }), header: Type.Object({ "X-Integration-Id": Type.String() }), body: PostLmsCourseProgressionsCourseProgressionIdCompleteRequestBody },
  responses: { 200: PostLmsCourseProgressionsCourseProgressionIdCompletePositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type get_GetLmsCourses = typeof get_GetLmsCourses;
export const get_GetLmsCourses = {
  method: Type.Literal("GET"),
  path: Type.Literal("/lms/courses"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ cursor: GetLmsCoursesParameterCursor, page_size: GetLmsCoursesParameterPageSize, updated_after: GetLmsCoursesParameterUpdatedAfter, include_deleted: GetLmsCoursesParameterIncludeDeleted, ignore_unsupported_filters: GetLmsCoursesParameterIgnoreUnsupportedFilters, ids: GetLmsCoursesParameterIds, remote_ids: GetLmsCoursesParameterRemoteIds }))), header: Type.Object({ "X-Integration-Id": Type.String() }) },
  responses: { 200: GetLmsCoursesPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type post_PostLmsCoursesBulk = typeof post_PostLmsCoursesBulk;
export const post_PostLmsCoursesBulk = {
  method: Type.Literal("POST"),
  path: Type.Literal("/lms/courses/bulk"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { header: Type.Object({ "X-Integration-Id": Type.String() }), body: PostLmsCoursesBulkRequestBody },
  responses: { 200: PostLmsCoursesBulkPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type get_GetLmsCoursesBulkTaskId = typeof get_GetLmsCoursesBulkTaskId;
export const get_GetLmsCoursesBulkTaskId = {
  method: Type.Literal("GET"),
  path: Type.Literal("/lms/courses/bulk/{task_id}"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ task_id: GetLmsCoursesBulkTaskIdParameterTaskId }), header: Type.Object({ "X-Integration-Id": Type.String() }) },
  responses: { 200: GetLmsCoursesBulkTaskIdPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type post_PostLmsCoursesCourseIdDeactivate = typeof post_PostLmsCoursesCourseIdDeactivate;
export const post_PostLmsCoursesCourseIdDeactivate = {
  method: Type.Literal("POST"),
  path: Type.Literal("/lms/courses/{course_id}/deactivate"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ course_id: PostLmsCoursesCourseIdDeactivateParameterCourseId }), header: Type.Object({ "X-Integration-Id": Type.String() }), body: PostLmsCoursesCourseIdDeactivateRequestBody },
  responses: { 200: PostLmsCoursesCourseIdDeactivatePositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type get_GetLmsSkills = typeof get_GetLmsSkills;
export const get_GetLmsSkills = {
  method: Type.Literal("GET"),
  path: Type.Literal("/lms/skills"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ cursor: GetLmsSkillsParameterCursor, page_size: GetLmsSkillsParameterPageSize, updated_after: GetLmsSkillsParameterUpdatedAfter, include_deleted: GetLmsSkillsParameterIncludeDeleted, ignore_unsupported_filters: GetLmsSkillsParameterIgnoreUnsupportedFilters, ids: GetLmsSkillsParameterIds, remote_ids: GetLmsSkillsParameterRemoteIds }))), header: Type.Object({ "X-Integration-Id": Type.String() }) },
  responses: { 200: GetLmsSkillsPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type post_PostAiApplyCareerSites = typeof post_PostAiApplyCareerSites;
export const post_PostAiApplyCareerSites = {
  method: Type.Literal("POST"),
  path: Type.Literal("/ai-apply/career-sites"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { body: PostAiApplyCareerSitesRequestBody },
  responses: { 200: PostAiApplyCareerSitesPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING"), Type.Literal("AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type get_GetAiApplyCareerSites = typeof get_GetAiApplyCareerSites;
export const get_GetAiApplyCareerSites = {
  method: Type.Literal("GET"),
  path: Type.Literal("/ai-apply/career-sites"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ cursor: GetAiApplyCareerSitesParameterCursor, page_size: GetAiApplyCareerSitesParameterPageSize, ids: GetAiApplyCareerSitesParameterIds }))) },
  responses: { 200: GetAiApplyCareerSitesPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING"), Type.Literal("AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type get_GetAiApplyPostings = typeof get_GetAiApplyPostings;
export const get_GetAiApplyPostings = {
  method: Type.Literal("GET"),
  path: Type.Literal("/ai-apply/postings"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ cursor: GetAiApplyPostingsParameterCursor, page_size: GetAiApplyPostingsParameterPageSize, ids: GetAiApplyPostingsParameterIds, career_site_ids: GetAiApplyPostingsParameterCareerSiteIds, job_codes: GetAiApplyPostingsParameterJobCodes }))) },
  responses: { 200: GetAiApplyPostingsPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING"), Type.Literal("AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type post_PostAiApplyPostings = typeof post_PostAiApplyPostings;
export const post_PostAiApplyPostings = {
  method: Type.Literal("POST"),
  path: Type.Literal("/ai-apply/postings"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { body: PostAiApplyPostingsRequestBody },
  responses: { 200: PostAiApplyPostingsPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING"), Type.Literal("AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type post_PostAiApplyPostingsPostingIdInquire = typeof post_PostAiApplyPostingsPostingIdInquire;
export const post_PostAiApplyPostingsPostingIdInquire = {
  method: Type.Literal("POST"),
  path: Type.Literal("/ai-apply/postings/{posting_id}/inquire"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ posting_id: PostAiApplyPostingsPostingIdInquireParameterPostingId }), body: PostAiApplyPostingsPostingIdInquireRequestBody },
  responses: { 200: PostAiApplyPostingsPostingIdInquirePositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING"), Type.Literal("AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type post_PostAiApplyApply = typeof post_PostAiApplyApply;
export const post_PostAiApplyApply = {
  method: Type.Literal("POST"),
  path: Type.Literal("/ai-apply/apply"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { body: PostAiApplyApplyRequestBody },
  responses: { 200: PostAiApplyApplyPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING"), Type.Literal("AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type get_GetAiApplyApplications = typeof get_GetAiApplyApplications;
export const get_GetAiApplyApplications = {
  method: Type.Literal("GET"),
  path: Type.Literal("/ai-apply/applications"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ cursor: GetAiApplyApplicationsParameterCursor, page_size: GetAiApplyApplicationsParameterPageSize, ids: GetAiApplyApplicationsParameterIds, job_posting_ids: GetAiApplyApplicationsParameterJobPostingIds }))) },
  responses: { 200: GetAiApplyApplicationsPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING"), Type.Literal("AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type get_GetAiApplyUnifiedApiJobs = typeof get_GetAiApplyUnifiedApiJobs;
export const get_GetAiApplyUnifiedApiJobs = {
  method: Type.Literal("GET"),
  path: Type.Literal("/ai-apply/unified-api/jobs"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ cursor: GetAiApplyUnifiedApiJobsParameterCursor, page_size: GetAiApplyUnifiedApiJobsParameterPageSize, ids: GetAiApplyUnifiedApiJobsParameterIds, remote_ids: GetAiApplyUnifiedApiJobsParameterRemoteIds, job_codes: GetAiApplyUnifiedApiJobsParameterJobCodes, career_site_ids: GetAiApplyUnifiedApiJobsParameterCareerSiteIds }))) },
  responses: { 200: GetAiApplyUnifiedApiJobsPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING"), Type.Literal("AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type post_PostAiApplyUnifiedApiJobsJobIdApplications = typeof post_PostAiApplyUnifiedApiJobsJobIdApplications;
export const post_PostAiApplyUnifiedApiJobsJobIdApplications = {
  method: Type.Literal("POST"),
  path: Type.Literal("/ai-apply/unified-api/jobs/{job_id}/applications"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ job_id: PostAiApplyUnifiedApiJobsJobIdApplicationsParameterJobId }), body: PostAiApplyUnifiedApiJobsJobIdApplicationsRequestBody },
  responses: { 200: PostAiApplyUnifiedApiJobsJobIdApplicationsPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING"), Type.Literal("AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type get_GetAiApplyJobFeeds = typeof get_GetAiApplyJobFeeds;
export const get_GetAiApplyJobFeeds = {
  method: Type.Literal("GET"),
  path: Type.Literal("/ai-apply/job-feeds"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Optional(Type.Partial(Type.Object({ cursor: GetAiApplyJobFeedsParameterCursor, page_size: GetAiApplyJobFeedsParameterPageSize, ids: GetAiApplyJobFeedsParameterIds }))) },
  responses: { 200: GetAiApplyJobFeedsPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING"), Type.Literal("AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type post_PostAiApplyJobFeeds = typeof post_PostAiApplyJobFeeds;
export const post_PostAiApplyJobFeeds = {
  method: Type.Literal("POST"),
  path: Type.Literal("/ai-apply/job-feeds"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { body: PostAiApplyJobFeedsRequestBody },
  responses: { 200: PostAiApplyJobFeedsPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING"), Type.Literal("AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type post_PostConnectCreateLink = typeof post_PostConnectCreateLink;
export const post_PostConnectCreateLink = {
  method: Type.Literal("POST"),
  path: Type.Literal("/connect/create-link"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { body: PostConnectCreateLinkRequestBody },
  responses: { 200: PostConnectCreateLinkPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type get_GetConnectIntegrationByTokenToken = typeof get_GetConnectIntegrationByTokenToken;
export const get_GetConnectIntegrationByTokenToken = {
  method: Type.Literal("GET"),
  path: Type.Literal("/connect/integration-by-token/{token}"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ token: GetConnectIntegrationByTokenTokenParameterToken }) },
  responses: { 200: GetConnectIntegrationByTokenTokenPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type post_PostConnectActivateIntegration = typeof post_PostConnectActivateIntegration;
export const post_PostConnectActivateIntegration = {
  method: Type.Literal("POST"),
  path: Type.Literal("/connect/activate-integration"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { body: PostConnectActivateIntegrationRequestBody },
  responses: { 200: PostConnectActivateIntegrationPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type get_GetCustomDatevSystemInformation = typeof get_GetCustomDatevSystemInformation;
export const get_GetCustomDatevSystemInformation = {
  method: Type.Literal("GET"),
  path: Type.Literal("/custom/datev/system-information"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { header: Type.Object({ "X-Integration-Id": Type.String() }) },
  responses: { 200: GetCustomDatevSystemInformationPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type post_PostCustomDatevPassthrough = typeof post_PostCustomDatevPassthrough;
export const post_PostCustomDatevPassthrough = {
  method: Type.Literal("POST"),
  path: Type.Literal("/custom/datev/passthrough"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { header: Type.Object({ "X-Integration-Id": Type.String() }), body: PostCustomDatevPassthroughRequestBody },
  responses: { 200: PostCustomDatevPassthroughPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type get_GetCustomDatevCheckEauPermission = typeof get_GetCustomDatevCheckEauPermission;
export const get_GetCustomDatevCheckEauPermission = {
  method: Type.Literal("GET"),
  path: Type.Literal("/custom/datev/check-eau-permission"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { header: Type.Object({ "X-Integration-Id": Type.String() }) },
  responses: { 200: GetCustomDatevCheckEauPermissionPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type get_GetCustomDatevEauRequestsEauId = typeof get_GetCustomDatevEauRequestsEauId;
export const get_GetCustomDatevEauRequestsEauId = {
  method: Type.Literal("GET"),
  path: Type.Literal("/custom/datev/eau-requests/{eau_id}"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ eau_id: GetCustomDatevEauRequestsEauIdParameterEauId }), header: Type.Object({ "X-Integration-Id": Type.String() }) },
  responses: { 200: GetCustomDatevEauRequestsEauIdPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type get_GetCustomDatevCheckDocumentPermission = typeof get_GetCustomDatevCheckDocumentPermission;
export const get_GetCustomDatevCheckDocumentPermission = {
  method: Type.Literal("GET"),
  path: Type.Literal("/custom/datev/check-document-permission"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { header: Type.Object({ "X-Integration-Id": Type.String() }) },
  responses: { 200: GetCustomDatevCheckDocumentPermissionPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type get_GetCustomDatevAvailableDocuments = typeof get_GetCustomDatevAvailableDocuments;
export const get_GetCustomDatevAvailableDocuments = {
  method: Type.Literal("GET"),
  path: Type.Literal("/custom/datev/available-documents"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { query: Type.Object({ period: GetCustomDatevAvailableDocumentsParameterPeriod }), header: Type.Object({ "X-Integration-Id": Type.String() }) },
  responses: { 200: GetCustomDatevAvailableDocumentsPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type post_PostCustomDatevDownloadDocument = typeof post_PostCustomDatevDownloadDocument;
export const post_PostCustomDatevDownloadDocument = {
  method: Type.Literal("POST"),
  path: Type.Literal("/custom/datev/download-document"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { header: Type.Object({ "X-Integration-Id": Type.String() }), body: PostCustomDatevDownloadDocumentRequestBody },
  responses: { 200: PostCustomDatevDownloadDocumentPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type post_PostCustomDatevEmployeesEmployeeIdDownloadDocument = typeof post_PostCustomDatevEmployeesEmployeeIdDownloadDocument;
export const post_PostCustomDatevEmployeesEmployeeIdDownloadDocument = {
  method: Type.Literal("POST"),
  path: Type.Literal("/custom/datev/employees/{employee_id}/download-document"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ employee_id: PostCustomDatevEmployeesEmployeeIdDownloadDocumentParameterEmployeeId }), header: Type.Object({ "X-Integration-Id": Type.String() }), body: PostCustomDatevEmployeesEmployeeIdDownloadDocumentRequestBody },
  responses: { 200: PostCustomDatevEmployeesEmployeeIdDownloadDocumentPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type post_PostCustomDatevEmployeesEmployeeIdEauRequests = typeof post_PostCustomDatevEmployeesEmployeeIdEauRequests;
export const post_PostCustomDatevEmployeesEmployeeIdEauRequests = {
  method: Type.Literal("POST"),
  path: Type.Literal("/custom/datev/employees/{employee_id}/eau-requests"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ employee_id: PostCustomDatevEmployeesEmployeeIdEauRequestsParameterEmployeeId }), header: Type.Object({ "X-Integration-Id": Type.String() }), body: PostCustomDatevEmployeesEmployeeIdEauRequestsRequestBody },
  responses: { 200: PostCustomDatevEmployeesEmployeeIdEauRequestsPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type put_PutCustomDatevEmployeesEmployeeIdPreparePayroll = typeof put_PutCustomDatevEmployeesEmployeeIdPreparePayroll;
export const put_PutCustomDatevEmployeesEmployeeIdPreparePayroll = {
  method: Type.Literal("PUT"),
  path: Type.Literal("/custom/datev/employees/{employee_id}/prepare-payroll"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ employee_id: PutCustomDatevEmployeesEmployeeIdPreparePayrollParameterEmployeeId }), header: Type.Object({ "X-Integration-Id": Type.String() }), body: PutCustomDatevEmployeesEmployeeIdPreparePayrollRequestBody },
  responses: { 200: PutCustomDatevEmployeesEmployeeIdPreparePayrollPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type put_PutCustomDatevEmployeesEmployeeIdCompensations = typeof put_PutCustomDatevEmployeesEmployeeIdCompensations;
export const put_PutCustomDatevEmployeesEmployeeIdCompensations = {
  method: Type.Literal("PUT"),
  path: Type.Literal("/custom/datev/employees/{employee_id}/compensations"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ employee_id: PutCustomDatevEmployeesEmployeeIdCompensationsParameterEmployeeId }), header: Type.Object({ "X-Integration-Id": Type.String() }), body: PutCustomDatevEmployeesEmployeeIdCompensationsRequestBody },
  responses: { 200: PutCustomDatevEmployeesEmployeeIdCompensationsPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type get_GetCustomDatevCheckWritePermission = typeof get_GetCustomDatevCheckWritePermission;
export const get_GetCustomDatevCheckWritePermission = {
  method: Type.Literal("GET"),
  path: Type.Literal("/custom/datev/check-write-permission"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { header: Type.Object({ "X-Integration-Id": Type.String() }) },
  responses: { 200: GetCustomDatevCheckWritePermissionPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type get_GetCustomDatevDataPushes = typeof get_GetCustomDatevDataPushes;
export const get_GetCustomDatevDataPushes = {
  method: Type.Literal("GET"),
  path: Type.Literal("/custom/datev/data-pushes"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { header: Type.Object({ "X-Integration-Id": Type.String() }) },
  responses: { 200: GetCustomDatevDataPushesPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type post_PostCustomDatevPushDataGeneral = typeof post_PostCustomDatevPushDataGeneral;
export const post_PostCustomDatevPushDataGeneral = {
  method: Type.Literal("POST"),
  path: Type.Literal("/custom/datev/push-data/general"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { header: Type.Object({ "X-Integration-Id": Type.String() }), body: PostCustomDatevPushDataGeneralRequestBody },
  responses: { 200: PostCustomDatevPushDataGeneralPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type post_PostCustomDatevPushDataPayroll = typeof post_PostCustomDatevPushDataPayroll;
export const post_PostCustomDatevPushDataPayroll = {
  method: Type.Literal("POST"),
  path: Type.Literal("/custom/datev/push-data/payroll"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { header: Type.Object({ "X-Integration-Id": Type.String() }), body: PostCustomDatevPushDataPayrollRequestBody },
  responses: { 200: PostCustomDatevPushDataPayrollPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type post_PostCustomSilaeEmployeesEmployeeIdPayrollSupplements = typeof post_PostCustomSilaeEmployeesEmployeeIdPayrollSupplements;
export const post_PostCustomSilaeEmployeesEmployeeIdPayrollSupplements = {
  method: Type.Literal("POST"),
  path: Type.Literal("/custom/silae/employees/{employee_id}/payroll-supplements"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ employee_id: PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsParameterEmployeeId }), header: Type.Object({ "X-Integration-Id": Type.String() }), body: PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsRequestBody },
  responses: { 200: PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsPositiveResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
};

export type post_PostAiApplyJobFeedsBulkImport = typeof post_PostAiApplyJobFeedsBulkImport;
export const post_PostAiApplyJobFeedsBulkImport = {
  method: Type.Literal("POST"),
  path: Type.Literal("/ai-apply/job-feeds/{job_feed_id}/bulk-import"),
  requestFormat: Type.Literal("json"),
  responseFormat: Type.Literal("json"),
  parameters: { path: Type.Object({ job_feed_id: Type.String() }), body: Type.String() },
  responses: { 200: BulkImportResponse, default: Type.Object({ status: Type.Literal("error"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING"), Type.Literal("AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]) }) }) },
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

type OptionalUndefinedKeys<T> = {
  [K in keyof T as undefined extends T[K] ? never : K]: T[K];
} & {
  [K in keyof T as undefined extends T[K] ? K : never]?: Exclude<T[K], undefined>;
};
type InferSchemaValueRaw<T> = T extends import("@sinclair/typebox").TSchema ? import("@sinclair/typebox").Static<T> : T extends object ? { [K in keyof T]: InferSchemaValueRaw<T[K]> } : T;
type InferSchemaValue<T> = InferSchemaValueRaw<T>;
type InferSchemaInput<T> = OptionalUndefinedKeys<InferSchemaValueRaw<T>>;

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


// <ValidateHelpers>
const defaultParse = (schema: unknown, value: unknown): unknown => {
  return (() => { if (!Value.Check(schema as import("@sinclair/typebox").TSchema, value)) throw new Error("TypeBox validation failed"); return value; })();
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



// <ApiClient>
export class ApiClient {
  baseUrl: string = "";
  successStatusCodes = successStatusCodes;
  errorStatusCodes = errorStatusCodes;
  validate: ValidateSide = "both";
  onValidate?: OnValidate;

  constructor(
    public fetcher: Fetcher,
    options?: { validate?: ValidateSide; onValidate?: OnValidate },
  ) {
    if (options?.validate !== undefined) this.validate = options.validate;
    if (options?.onValidate) this.onValidate = options.onValidate;
  }

  setBaseUrl(baseUrl: string) {
    this.baseUrl = baseUrl;
    return this;
  }

  setValidate(validate: ValidateSide) {
    this.validate = validate;
    return this;
  }

  setOnValidate(onValidate: OnValidate | undefined) {
    if (onValidate === undefined) {
      delete this.onValidate;
    } else {
      this.onValidate = onValidate;
    }
    return this;
  }

  /**
   * Replace path parameters in URL
   * Supports both OpenAPI format {param} and Express format :param
   */
  defaultDecodePathParams = (url: string, params: unknown): string => {
    const record = (params ?? {}) as Record<string, unknown>;
    return url
      .replace(/{(\w+)}/g, (_, key: string) => (record[key] != null ? String(record[key]) : `{${key}}`))
      .replace(/:([a-zA-Z0-9_]+)/g, (_, key: string) => (record[key] != null ? String(record[key]) : `:${key}`));
  }

  /** Uses URLSearchParams, skips null/undefined values */
  defaultEncodeSearchParams = (queryParams: unknown): URLSearchParams | undefined => {
    if (!queryParams || typeof queryParams !== "object") return;

    const searchParams = new URLSearchParams();
    Object.entries(queryParams as Record<string, unknown>).forEach(([key, value]) => {
      if (value != null) {
        // Skip null/undefined values
        if (Array.isArray(value)) {
          value.forEach((val) => val != null && searchParams.append(key, String(val)));
        } else {
          searchParams.append(key, String(value));
        }
      }
    });

    return searchParams;
  }

  /** Append cookie params as a Cookie header (or merge into existing). */
  defaultEncodeCookies = (cookies: unknown, headers: Headers): void => {
    if (!cookies || typeof cookies !== "object") return;
    const parts = Object.entries(cookies as Record<string, unknown>)
      .filter(([, value]) => value != null)
      .map(([key, value]) => `${key}=${String(value)}`);
    if (!parts.length) return;
    const existing = headers.get("cookie");
    headers.set("cookie", existing ? `${existing}; ${parts.join("; ")}` : parts.join("; "));
  }

  defaultParseResponseData = async (response: FetcherResponse): Promise<unknown> => {
    const contentType = response.headers.get("content-type") ?? "";
    if (contentType.includes("text/event-stream")) {
      return response.body ?? null;
    }
    if (contentType.startsWith("text/")) {
      return (await response.text())
    }

    if (contentType === "application/octet-stream") {
      return (await response.arrayBuffer())
    }

    if (
      contentType.includes("application/json") ||
      (contentType.includes("application/") && contentType.includes("json")) ||
      contentType === "*/*"
      ) {
      try {
        return await response.json();
      } catch {
        return undefined
      }
    }

    return
  }

  // <ApiClient.get>
    get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<SafeApiResponse<TEndpoint>>;

    get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<InferSuccessData<TEndpoint>>;

    get<Path extends keyof GetEndpoints, _TEndpoint extends GetEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<any>
    ): Promise<any> {
        return this.request("get", path, ...params);
    }
    // </ApiClient.get>
    
// <ApiClient.post>
    post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<SafeApiResponse<TEndpoint>>;

    post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<InferSuccessData<TEndpoint>>;

    post<Path extends keyof PostEndpoints, _TEndpoint extends PostEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<any>
    ): Promise<any> {
        return this.request("post", path, ...params);
    }
    // </ApiClient.post>
    
// <ApiClient.delete>
    delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<SafeApiResponse<TEndpoint>>;

    delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<InferSuccessData<TEndpoint>>;

    delete<Path extends keyof DeleteEndpoints, _TEndpoint extends DeleteEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<any>
    ): Promise<any> {
        return this.request("delete", path, ...params);
    }
    // </ApiClient.delete>
    
// <ApiClient.put>
    put<Path extends keyof PutEndpoints, TEndpoint extends PutEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<SafeApiResponse<TEndpoint>>;

    put<Path extends keyof PutEndpoints, TEndpoint extends PutEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<InferSuccessData<TEndpoint>>;

    put<Path extends keyof PutEndpoints, _TEndpoint extends PutEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<any>
    ): Promise<any> {
        return this.request("put", path, ...params);
    }
    // </ApiClient.put>
    
// <ApiClient.patch>
    patch<Path extends keyof PatchEndpoints, TEndpoint extends PatchEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<SafeApiResponse<TEndpoint>>;

    patch<Path extends keyof PatchEndpoints, TEndpoint extends PatchEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<InferSuccessData<TEndpoint>>;

    patch<Path extends keyof PatchEndpoints, _TEndpoint extends PatchEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<any>
    ): Promise<any> {
        return this.request("patch", path, ...params);
    }
    // </ApiClient.patch>
    

    // <ApiClient.request>
    /**
     * Generic request method with full type-safety for any endpoint
     */
    request<
      TMethod extends keyof EndpointByMethod,
      TPath extends keyof EndpointByMethod[TMethod],
      TEndpoint extends EndpointByMethod[TMethod][TPath]
    >(
      method: TMethod,
      path: TPath,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<SafeApiResponse<TEndpoint>>;

    request<
      TMethod extends keyof EndpointByMethod,
      TPath extends keyof EndpointByMethod[TMethod],
      TEndpoint extends EndpointByMethod[TMethod][TPath]
    >(
      method: TMethod,
      path: TPath,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<InferSuccessData<TEndpoint>>;

    request<
      TMethod extends keyof EndpointByMethod,
      TPath extends keyof EndpointByMethod[TMethod],
      TEndpoint extends EndpointByMethod[TMethod][TPath]
    >(
      method: TMethod,
      path: TPath,
      ...params: MaybeOptionalArg<any>
    ): Promise<any> {
      return (async () => {
      const requestParams = params[0];
      const withResponse = requestParams?.withResponse;
      const throwOnStatusError = requestParams?.throwOnStatusError ?? (withResponse ? false : true);
      let overrides = requestParams?.overrides;
      const validateSide: ValidateSide = requestParams?.validate ?? this.validate;

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
      const shouldValidateInput = validateSide === "input" || validateSide === "both";
      if (shouldValidateInput && endpointSchema.parameters) {
        const paramSchema = endpointSchema.parameters;
        for (const key of ["body", "query", "header", "path", "cookie"] as const) {
          const schema = paramSchema[key];
          const value = parametersToSend[key];
          if (schema !== undefined && value !== undefined) {
            parametersToSend[key] = await runValidate({
              side: "input",
              method: String(method),
              path: String(path),
              schema,
              value,
              ...(this.onValidate ? { onValidate: this.onValidate } : {}),
            });
          }
        }
      }

      const resolvedPath = (this.fetcher.decodePathParams ?? this.defaultDecodePathParams)(this.baseUrl + (path as string), parametersToSend.path ?? {});
      const url = new URL(resolvedPath);
      const urlSearchParams = (this.fetcher.encodeSearchParams ?? this.defaultEncodeSearchParams)(parametersToSend.query);

      if (parametersToSend.cookie) {
        const headers = new Headers((overrides as RequestInit | undefined)?.headers);
        (this.fetcher.encodeCookies ?? this.defaultEncodeCookies)(parametersToSend.cookie, headers);
        overrides = { ...overrides, headers };
      }

      const response = await this.fetcher.fetch({
        method: method,
        path: (path as string),
        url,
        ...(urlSearchParams ? { urlSearchParams } : {}),
        ...(Object.keys(parametersToSend).length ? { parameters: parametersToSend } : {}),
        requestFormat: endpointRequestFormats[method]?.[path] ?? "json",
        ...(overrides ? { overrides } : {}),
        throwOnStatusError
      });
          const responseFormat = endpointResponseFormats[method]?.[path] ?? "json";
          let data =
            responseFormat === "sse"
              ? (response.body ?? null)
              : await (this.fetcher.parseResponseData ?? this.defaultParseResponseData)(response);
          const shouldValidateOutput = validateSide === "output" || validateSide === "both";
          if (shouldValidateOutput && responseFormat !== "sse" && response.ok && endpointSchema?.responses) {
            const responseSchema = endpointSchema.responses[String(response.status)] ?? endpointSchema.responses["default"];
            if (responseSchema) {
              data = await runValidate({
                side: "output",
                method: String(method),
                path: String(path),
                schema: responseSchema,
                value: data,
                ...(this.onValidate ? { onValidate: this.onValidate } : {}),
              });
            }
          }
          const typedResponse = Object.assign(response, {
            data: data,
            json: () => Promise.resolve(data)
          }) as SafeApiResponse<TEndpoint>;

          if (throwOnStatusError && (errorStatusCodes as readonly number[]).includes(response.status)) {
            throw new TypedStatusError(typedResponse as TypedErrorResponse<unknown, ErrorStatusCode, unknown>);
          }

          return withResponse ? typedResponse : data;
      })() as Promise<any>
    }
    // </ApiClient.request>
}

export function createApiClient(
  fetcher: Fetcher,
  baseUrl?: string,
  options?: { validate?: ValidateSide; onValidate?: OnValidate },
) {
  return new ApiClient(fetcher, options).setBaseUrl(baseUrl ?? "");
}


/**
 Example usage:
 const api = createApiClient((method, url, params) =>
   fetch(url, { method, body: JSON.stringify(params) }).then((res) => res.json()),
 );
 api.get("/users").then((users) => console.log(users));
 api.post("/users", { body: { name: "John" } }).then((user) => console.log(user));
 api.put("/users/:id", { path: { id: 1 }, body: { name: "John" } }).then((user) => console.log(user));

 // With error handling
 const result = await api.get("/users/{id}", { path: { id: "123" }, withResponse: true });
 if (result.ok) {
   // Access data directly
   const user = result.data;
   console.log(user);

   // Or use the json() method for compatibility
   const userFromJson = await result.json();
   console.log(userFromJson);
 } else {
   const error = result.data;
   console.error(`Error ${result.status}:`, error);
 }
*/

// </ApiClient>

  