
  import * as v from "valibot";

// <Schemas>
export type GetCheckApiKeyPositiveResponse = v.InferOutput<typeof GetCheckApiKeyPositiveResponse>;
export const GetCheckApiKeyPositiveResponse = v.object({ status: v.string(), data: v.object({ environment_id: v.string(), customer_id: v.string() }) });

export type PostForceSyncPositiveResponse = v.InferOutput<typeof PostForceSyncPositiveResponse>;
export const PostForceSyncPositiveResponse = v.object({ status: v.string(), data: v.object({ already_queued: v.boolean(), sync_id: v.string(), type: v.picklist(["FULL", "DELTA"]) }) });

export type PostForceSyncRequestBody = v.InferOutput<typeof PostForceSyncRequestBody>;
export const PostForceSyncRequestBody = v.partial(v.object({ type: v.optional(v.picklist(["FULL", "DELTA"]), "FULL") }));

export type PostPassthroughToolApiParameterTool = v.InferOutput<typeof PostPassthroughToolApiParameterTool>;
export const PostPassthroughToolApiParameterTool = v.string();

export type PostPassthroughToolApiParameterApi = v.InferOutput<typeof PostPassthroughToolApiParameterApi>;
export const PostPassthroughToolApiParameterApi = v.string();

export type PostPassthroughToolApiPositiveResponse = v.InferOutput<typeof PostPassthroughToolApiPositiveResponse>;
export const PostPassthroughToolApiPositiveResponse = v.object({ status: v.string(), data: v.object({ url: v.pipe(v.string(), v.url()), status: v.pipe(v.number(), v.integer()), headers: v.record(v.string(), v.union([v.string(), v.array(v.string())])), data: v.optional(v.unknown()) }), warnings: v.array(v.object({ message: v.string() })) });

export type PostPassthroughToolApiRequestBody = v.InferOutput<typeof PostPassthroughToolApiRequestBody>;
export const PostPassthroughToolApiRequestBody = v.object({ method: v.picklist(["GET", "POST", "DELETE", "PUT", "PATCH"]), path: v.string(), headers: v.optional(v.record(v.string(), v.string())), params: v.optional(v.record(v.string(), v.string())), data: v.optional(v.unknown()), response_as_base64: v.optional(v.boolean()), multipart_form_data: v.optional(v.array(v.object({ name: v.string(), value: v.union([v.string(), v.object({ name: v.string(), content_type: v.optional(v.pipe(v.string(), v.regex(new RegExp("^[\\w.-]+\\/[\\w.-]+$")))), data_url: v.optional(v.pipe(v.string(), v.url())), data: v.optional(v.string()) })]) }))), api_options: v.optional(v.record(v.string(), v.string())) });

export type DeleteIntegrationsIntegrationIdParameterIntegrationId = v.InferOutput<typeof DeleteIntegrationsIntegrationIdParameterIntegrationId>;
export const DeleteIntegrationsIntegrationIdParameterIntegrationId = v.string();

export type DeleteIntegrationsIntegrationIdPositiveResponse = v.InferOutput<typeof DeleteIntegrationsIntegrationIdPositiveResponse>;
export const DeleteIntegrationsIntegrationIdPositiveResponse = v.object({ status: v.string(), data: v.record(v.string(), v.unknown()) });

export type DeleteIntegrationsIntegrationIdRequestBody = v.InferOutput<typeof DeleteIntegrationsIntegrationIdRequestBody>;
export const DeleteIntegrationsIntegrationIdRequestBody = v.partial(v.object({  }));

export type GetIntegrationsIntegrationIdParameterIntegrationId = v.InferOutput<typeof GetIntegrationsIntegrationIdParameterIntegrationId>;
export const GetIntegrationsIntegrationIdParameterIntegrationId = v.string();

export type GetIntegrationsIntegrationIdPositiveResponse = v.InferOutput<typeof GetIntegrationsIntegrationIdPositiveResponse>;
export const GetIntegrationsIntegrationIdPositiveResponse = v.object({ status: v.string(), data: v.object({ id: v.string(), tool: v.object({ id: v.string(), label: v.string(), internal_label: v.nullable(v.string()), logo_url: v.pipe(v.string(), v.url()), icon_url: v.pipe(v.string(), v.url()) }), category: v.picklist(["HRIS", "ATS", "ASSESSMENT", "LMS"]), status: v.picklist(["ACTIVE", "INVALID", "INACTIVE"]), setup_status: v.picklist(["INCOMPLETE", "FINAL_SYNC_PENDING", "COMPLETED"]), end_user: v.object({ organization_name: v.string(), creator_email: v.nullable(v.pipe(v.string(), v.regex(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$")))), origin_id: v.nullable(v.string()) }), scope_config: v.object({ id: v.string(), name: v.nullable(v.string()) }), data_expired_at: v.nullable(v.string()), created_at: v.string(), beta: v.boolean(), read_models: v.array(v.object({ id: v.string(), label: v.string(), is_available: v.boolean(), coverage_status: v.picklist(["SUPPORTED", "UNSUPPORTED", "NOT_IMPLEMENTED", "UNKNOWN"]), scope_config_setting: v.picklist(["ENABLED", "DISABLED", "OPTIONAL"]), opted_out_by_customer: v.boolean(), fields: v.array(v.object({ id: v.string(), is_available: v.boolean(), coverage_status: v.picklist(["SUPPORTED", "UNSUPPORTED", "NOT_IMPLEMENTED", "UNKNOWN"]), scope_config_setting: v.picklist(["ENABLED", "DISABLED", "OPTIONAL"]), opted_out_by_customer: v.boolean() })) })), write_actions: v.array(v.object({ id: v.string(), label: v.string(), is_available: v.boolean(), coverage_status: v.picklist(["SUPPORTED", "UNSUPPORTED", "NOT_IMPLEMENTED", "UNKNOWN"]), scope_config_setting: v.picklist(["ENABLED", "DISABLED", "OPTIONAL"]), opted_out_by_customer: v.boolean(), fields: v.array(v.object({ id: v.string(), is_available: v.boolean(), coverage_status: v.picklist(["SUPPORTED", "UNSUPPORTED", "NOT_IMPLEMENTED", "UNKNOWN"]) })) })) }) });

export type PutIntegrationsIntegrationIdEnabledParameterIntegrationId = v.InferOutput<typeof PutIntegrationsIntegrationIdEnabledParameterIntegrationId>;
export const PutIntegrationsIntegrationIdEnabledParameterIntegrationId = v.string();

export type PutIntegrationsIntegrationIdEnabledPositiveResponse = v.InferOutput<typeof PutIntegrationsIntegrationIdEnabledPositiveResponse>;
export const PutIntegrationsIntegrationIdEnabledPositiveResponse = v.object({ status: v.string(), data: v.record(v.string(), v.unknown()) });

export type PutIntegrationsIntegrationIdEnabledRequestBody = v.InferOutput<typeof PutIntegrationsIntegrationIdEnabledRequestBody>;
export const PutIntegrationsIntegrationIdEnabledRequestBody = v.object({ value: v.boolean() });

export type PostIntegrationsIntegrationIdRelinkParameterIntegrationId = v.InferOutput<typeof PostIntegrationsIntegrationIdRelinkParameterIntegrationId>;
export const PostIntegrationsIntegrationIdRelinkParameterIntegrationId = v.string();

export type PostIntegrationsIntegrationIdRelinkPositiveResponse = v.InferOutput<typeof PostIntegrationsIntegrationIdRelinkPositiveResponse>;
export const PostIntegrationsIntegrationIdRelinkPositiveResponse = v.object({ status: v.string(), data: v.object({ link: v.pipe(v.string(), v.url()) }) });

export type PostIntegrationsIntegrationIdRelinkRequestBody = v.InferOutput<typeof PostIntegrationsIntegrationIdRelinkRequestBody>;
export const PostIntegrationsIntegrationIdRelinkRequestBody = v.partial(v.object({ language: v.optional(v.nullable(v.optional(v.picklist(["en", "de", "fr", "it", "es"]), "en")), "en"), scope_config_id: v.nullable(v.string()), link_type: v.optional(v.picklist(["EMBEDDED", "MAGIC_LINK"]), "EMBEDDED") }));

export type PostIntegrationsIntegrationIdSetupLinkParameterIntegrationId = v.InferOutput<typeof PostIntegrationsIntegrationIdSetupLinkParameterIntegrationId>;
export const PostIntegrationsIntegrationIdSetupLinkParameterIntegrationId = v.string();

export type PostIntegrationsIntegrationIdSetupLinkPositiveResponse = v.InferOutput<typeof PostIntegrationsIntegrationIdSetupLinkPositiveResponse>;
export const PostIntegrationsIntegrationIdSetupLinkPositiveResponse = v.object({ status: v.string(), data: v.object({ link: v.pipe(v.string(), v.url()) }) });

export type PostIntegrationsIntegrationIdSetupLinkRequestBody = v.InferOutput<typeof PostIntegrationsIntegrationIdSetupLinkRequestBody>;
export const PostIntegrationsIntegrationIdSetupLinkRequestBody = v.object({ language: v.optional(v.nullable(v.optional(v.picklist(["en", "de", "fr", "it", "es"]), "en")), "en"), link_type: v.picklist(["EMBEDDED", "MAGIC_LINK"]) });

export type GetIntegrationsIntegrationIdIntegrationFieldsParameterIntegrationId = v.InferOutput<typeof GetIntegrationsIntegrationIdIntegrationFieldsParameterIntegrationId>;
export const GetIntegrationsIntegrationIdIntegrationFieldsParameterIntegrationId = v.string();

export type GetIntegrationsIntegrationIdIntegrationFieldsParameterCursor = v.InferOutput<typeof GetIntegrationsIntegrationIdIntegrationFieldsParameterCursor>;
export const GetIntegrationsIntegrationIdIntegrationFieldsParameterCursor = v.string();

export type GetIntegrationsIntegrationIdIntegrationFieldsParameterPageSize = v.InferOutput<typeof GetIntegrationsIntegrationIdIntegrationFieldsParameterPageSize>;
export const GetIntegrationsIntegrationIdIntegrationFieldsParameterPageSize = v.optional(v.pipe(v.number(), v.integer(), v.minValue(1), v.maxValue(2000)), 100);

export type GetIntegrationsIntegrationIdIntegrationFieldsPositiveResponse = v.InferOutput<typeof GetIntegrationsIntegrationIdIntegrationFieldsPositiveResponse>;
export const GetIntegrationsIntegrationIdIntegrationFieldsPositiveResponse = v.object({ status: v.string(), data: v.object({ results: v.array(v.object({ id: v.string(), key: v.string(), model: v.string(), type: v.picklist(["DEFAULT", "CUSTOM"]), label: v.nullable(v.string()), is_passthrough_enabled: v.boolean(), is_writable: v.boolean() })), next_cursor: v.nullable(v.string()), next: v.nullable(v.string()) }) });

export type PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationId = v.InferOutput<typeof PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationId>;
export const PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationId = v.string();

export type PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationFieldId = v.InferOutput<typeof PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationFieldId>;
export const PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationFieldId = v.string();

export type PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdPositiveResponse = v.InferOutput<typeof PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdPositiveResponse>;
export const PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdPositiveResponse = v.object({ status: v.string(), data: v.object({ id: v.string(), key: v.string(), model: v.string(), type: v.picklist(["DEFAULT", "CUSTOM"]), label: v.nullable(v.string()), is_passthrough_enabled: v.boolean(), is_writable: v.boolean() }) });

export type PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdRequestBody = v.InferOutput<typeof PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdRequestBody>;
export const PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdRequestBody = v.object({ enable_passthrough: v.nullable(v.boolean()) });

export type GetIntegrationsIntegrationIdCustomFieldsParameterIntegrationId = v.InferOutput<typeof GetIntegrationsIntegrationIdCustomFieldsParameterIntegrationId>;
export const GetIntegrationsIntegrationIdCustomFieldsParameterIntegrationId = v.string();

export type GetIntegrationsIntegrationIdCustomFieldsParameterCursor = v.InferOutput<typeof GetIntegrationsIntegrationIdCustomFieldsParameterCursor>;
export const GetIntegrationsIntegrationIdCustomFieldsParameterCursor = v.string();

export type GetIntegrationsIntegrationIdCustomFieldsParameterPageSize = v.InferOutput<typeof GetIntegrationsIntegrationIdCustomFieldsParameterPageSize>;
export const GetIntegrationsIntegrationIdCustomFieldsParameterPageSize = v.optional(v.pipe(v.number(), v.integer(), v.minValue(1), v.maxValue(250)), 100);

export type GetIntegrationsIntegrationIdCustomFieldsPositiveResponse = v.InferOutput<typeof GetIntegrationsIntegrationIdCustomFieldsPositiveResponse>;
export const GetIntegrationsIntegrationIdCustomFieldsPositiveResponse = v.object({ status: v.string(), data: v.object({ results: v.array(v.object({ id: v.string(), key: v.string(), integration_field: v.nullable(v.object({ id: v.string(), key: v.string(), type: v.picklist(["DEFAULT", "CUSTOM"]), label: v.nullable(v.string()) })), model: v.string(), label: v.nullable(v.string()), description: v.nullable(v.string()) })), next_cursor: v.nullable(v.string()), next: v.nullable(v.string()) }) });

export type PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterIntegrationId = v.InferOutput<typeof PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterIntegrationId>;
export const PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterIntegrationId = v.string();

export type PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterCustomFieldId = v.InferOutput<typeof PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterCustomFieldId>;
export const PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterCustomFieldId = v.string();

export type PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdPositiveResponse = v.InferOutput<typeof PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdPositiveResponse>;
export const PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdPositiveResponse = v.object({ status: v.string(), data: v.object({ id: v.string(), key: v.string(), integration_field: v.nullable(v.object({ id: v.string(), key: v.string(), type: v.picklist(["DEFAULT", "CUSTOM"]), label: v.nullable(v.string()) })), model: v.string(), label: v.nullable(v.string()), description: v.nullable(v.string()) }) });

export type PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdRequestBody = v.InferOutput<typeof PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdRequestBody>;
export const PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdRequestBody = v.object({ integration_field_id: v.nullable(v.string()) });

export type GetToolsCategoryParameterCategory = v.InferOutput<typeof GetToolsCategoryParameterCategory>;
export const GetToolsCategoryParameterCategory = v.picklist(["hris", "ats", "assessment", "lms"]);

export type GetToolsCategoryPositiveResponse = v.InferOutput<typeof GetToolsCategoryPositiveResponse>;
export const GetToolsCategoryPositiveResponse = v.object({ status: v.string(), data: v.object({ tools: v.array(v.object({ id: v.string(), label: v.string(), internal_label: v.nullable(v.string()), assets: v.object({ logo_url: v.string(), icon_url: v.string(), icon_black_url: v.string() }), paid_api_details_markdown: v.nullable(v.string()), fast_track_details_markdown: v.nullable(v.string()), partner_only_details_markdown: v.nullable(v.string()), connection_guide_url: v.nullable(v.string()), coverage: v.object({ read_models: v.array(v.object({ id: v.string(), label: v.string(), coverage_status: v.picklist(["SUPPORTED", "UNSUPPORTED", "NOT_IMPLEMENTED", "UNKNOWN"]), fields: v.array(v.object({ id: v.string(), coverage_status: v.picklist(["SUPPORTED", "UNSUPPORTED", "NOT_IMPLEMENTED", "UNKNOWN"]) })) })), write_actions: v.array(v.object({ id: v.string(), label: v.string(), coverage_status: v.picklist(["SUPPORTED", "UNSUPPORTED", "NOT_IMPLEMENTED", "UNKNOWN"]), fields: v.array(v.object({ id: v.string(), coverage_status: v.picklist(["SUPPORTED", "UNSUPPORTED", "NOT_IMPLEMENTED", "UNKNOWN"]) })) })), features: v.array(v.object({ id: v.string(), label: v.string(), coverage_status: v.picklist(["SUPPORTED", "UNSUPPORTED", "NOT_IMPLEMENTED", "UNKNOWN"]) })) }) })) }) });

export type PostHrisProvisioningGroupsGroupIdDiffParameterGroupId = v.InferOutput<typeof PostHrisProvisioningGroupsGroupIdDiffParameterGroupId>;
export const PostHrisProvisioningGroupsGroupIdDiffParameterGroupId = v.string();

export type PostHrisProvisioningGroupsGroupIdDiffPositiveResponse = v.InferOutput<typeof PostHrisProvisioningGroupsGroupIdDiffPositiveResponse>;
export const PostHrisProvisioningGroupsGroupIdDiffPositiveResponse = v.object({ status: v.string(), data: v.object({ users: v.object({ to_provision: v.array(v.object({ email: v.nullable(v.pipe(v.string(), v.regex(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$")))), employee: v.partial(v.object({ id: v.string(), remote_id: v.nullable(v.string()), first_name: v.nullable(v.string()), last_name: v.nullable(v.string()), groups: v.array(v.object({ id: v.string(), remote_id: v.nullable(v.string()), name: v.nullable(v.string()) })), avatar: v.nullable(v.string()), work_location_id: v.nullable(v.string()), legal_entity_id: v.nullable(v.string()) })) })), to_deprovision: v.array(v.object({ origin_id: v.string(), email: v.pipe(v.string(), v.email()) })), already_provisioned: v.array(v.object({ origin_id: v.string(), email: v.pipe(v.string(), v.email()), employee: v.partial(v.object({ id: v.string(), remote_id: v.nullable(v.string()), first_name: v.nullable(v.string()), last_name: v.nullable(v.string()), groups: v.array(v.object({ id: v.string(), remote_id: v.nullable(v.string()), name: v.nullable(v.string()) })), avatar: v.nullable(v.string()), work_location_id: v.nullable(v.string()), legal_entity_id: v.nullable(v.string()) })) })) }) }) });

export type PostHrisProvisioningGroupsGroupIdDiffRequestBody = v.InferOutput<typeof PostHrisProvisioningGroupsGroupIdDiffRequestBody>;
export const PostHrisProvisioningGroupsGroupIdDiffRequestBody = v.object({ provisioned_users: v.array(v.object({ origin_id: v.string(), email: v.pipe(v.string(), v.email()) })), options: v.object({ employee_fields: v.array(v.picklist(["id", "remote_id", "first_name", "last_name", "groups", "avatar", "work_location_id", "legal_entity_id"])) }) });

export type PostHrisProvisioningGroupsGroupIdSetupLinksParameterGroupId = v.InferOutput<typeof PostHrisProvisioningGroupsGroupIdSetupLinksParameterGroupId>;
export const PostHrisProvisioningGroupsGroupIdSetupLinksParameterGroupId = v.string();

export type PostHrisProvisioningGroupsGroupIdSetupLinksPositiveResponse = v.InferOutput<typeof PostHrisProvisioningGroupsGroupIdSetupLinksPositiveResponse>;
export const PostHrisProvisioningGroupsGroupIdSetupLinksPositiveResponse = v.object({ status: v.string(), data: v.object({ url: v.pipe(v.string(), v.url()), expires_at: v.string() }) });

export type PostHrisProvisioningGroupsGroupIdSetupLinksRequestBody = v.InferOutput<typeof PostHrisProvisioningGroupsGroupIdSetupLinksRequestBody>;
export const PostHrisProvisioningGroupsGroupIdSetupLinksRequestBody = v.partial(v.object({ language: v.optional(v.nullable(v.optional(v.picklist(["en", "de", "fr", "it", "es"]), "en")), "en") }));

export type GetHrisEmployeesParameterCursor = v.InferOutput<typeof GetHrisEmployeesParameterCursor>;
export const GetHrisEmployeesParameterCursor = v.string();

export type GetHrisEmployeesParameterPageSize = v.InferOutput<typeof GetHrisEmployeesParameterPageSize>;
export const GetHrisEmployeesParameterPageSize = v.optional(v.pipe(v.number(), v.integer(), v.minValue(1), v.maxValue(250)), 100);

export type GetHrisEmployeesParameterUpdatedAfter = v.InferOutput<typeof GetHrisEmployeesParameterUpdatedAfter>;
export const GetHrisEmployeesParameterUpdatedAfter = v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));

export type GetHrisEmployeesParameterIncludeDeleted = v.InferOutput<typeof GetHrisEmployeesParameterIncludeDeleted>;
export const GetHrisEmployeesParameterIncludeDeleted = v.optional(v.picklist(["true", "false"]), "false");

export type GetHrisEmployeesParameterIgnoreUnsupportedFilters = v.InferOutput<typeof GetHrisEmployeesParameterIgnoreUnsupportedFilters>;
export const GetHrisEmployeesParameterIgnoreUnsupportedFilters = v.optional(v.picklist(["true", "false"]), "false");

export type GetHrisEmployeesParameterIds = v.InferOutput<typeof GetHrisEmployeesParameterIds>;
export const GetHrisEmployeesParameterIds = v.string();

export type GetHrisEmployeesParameterRemoteIds = v.InferOutput<typeof GetHrisEmployeesParameterRemoteIds>;
export const GetHrisEmployeesParameterRemoteIds = v.string();

export type GetHrisEmployeesParameterEmploymentStatus = v.InferOutput<typeof GetHrisEmployeesParameterEmploymentStatus>;
export const GetHrisEmployeesParameterEmploymentStatus = v.picklist(["ACTIVE", "PENDING", "INACTIVE", "LEAVE"]);

export type GetHrisEmployeesParameterEmploymentStatuses = v.InferOutput<typeof GetHrisEmployeesParameterEmploymentStatuses>;
export const GetHrisEmployeesParameterEmploymentStatuses = v.string();

export type GetHrisEmployeesParameterGroupIds = v.InferOutput<typeof GetHrisEmployeesParameterGroupIds>;
export const GetHrisEmployeesParameterGroupIds = v.string();

export type GetHrisEmployeesParameterLegalEntityIds = v.InferOutput<typeof GetHrisEmployeesParameterLegalEntityIds>;
export const GetHrisEmployeesParameterLegalEntityIds = v.string();

export type GetHrisEmployeesParameterWorkLocationIds = v.InferOutput<typeof GetHrisEmployeesParameterWorkLocationIds>;
export const GetHrisEmployeesParameterWorkLocationIds = v.string();

export type GetHrisEmployeesParameterWorkEmails = v.InferOutput<typeof GetHrisEmployeesParameterWorkEmails>;
export const GetHrisEmployeesParameterWorkEmails = v.string();

export type GetHrisEmployeesParameterPersonalEmails = v.InferOutput<typeof GetHrisEmployeesParameterPersonalEmails>;
export const GetHrisEmployeesParameterPersonalEmails = v.string();

export type GetHrisEmployeesParameterCustomFields = v.InferOutput<typeof GetHrisEmployeesParameterCustomFields>;
export const GetHrisEmployeesParameterCustomFields = v.string();

export type GetHrisEmployeesPositiveResponse = v.InferOutput<typeof GetHrisEmployeesPositiveResponse>;
export const GetHrisEmployeesPositiveResponse = v.object({ status: v.string(), data: v.object({ next: v.nullable(v.string()), results: v.array(v.object({ id: v.string(), remote_id: v.string(), employee_number: v.nullable(v.string()), first_name: v.nullable(v.string()), last_name: v.nullable(v.string()), nationality: v.nullable(v.string()), display_full_name: v.nullable(v.string()), job_title: v.nullable(v.string()), work_email: v.optional(v.nullable(v.pipe(v.string(), v.regex(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$"))))), personal_email: v.optional(v.nullable(v.pipe(v.string(), v.regex(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$"))))), mobile_phone_number: v.nullable(v.string()), ssn: v.nullable(v.string()), tax_id: v.nullable(v.string()), gender: v.optional(v.union([v.picklist(["MALE", "FEMALE", "NON_BINARY", "NOT_SPECIFIED"]), v.string(), v.null()])), ethnicity: v.optional(v.union([v.picklist(["WHITE", "ASIAN", "HISPANIC_LATINO", "HAWAIIAN", "NATIVE_AMERICAN", "BLACK_AFRICAN_AMERICAN", "MULTIPLE_ETHNICITIES", "DECLINE_TO_SPECIFY"]), v.string(), v.null()])), marital_status: v.optional(v.union([v.picklist(["SINGLE", "MARRIED", "DOMESTIC_PARTNERSHIP", "WIDOWED", "DIVORCED", "SEPARATED", "NOT_MARRIED"]), v.string(), v.null()])), employment_status: v.optional(v.union([v.picklist(["ACTIVE", "PENDING", "INACTIVE", "LEAVE"]), v.string(), v.null()])), employment_type: v.optional(v.union([v.picklist(["FULL_TIME", "PART_TIME", "CONTRACT", "INTERNSHIP", "FREELANCE", "WORKING_STUDENT", "APPRENTICESHIP", "TRAINING"]), v.string(), v.null()])), weekly_hours: v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))), avatar: v.nullable(v.string()), work_location_id: v.nullable(v.string()), legal_entity_id: v.nullable(v.string()), manager_id: v.nullable(v.string()), home_address: v.optional(v.nullable(v.partial(v.object({ city: v.nullable(v.string()), country: v.nullable(v.string()), raw: v.nullable(v.string()), state: v.nullable(v.string()), street_1: v.nullable(v.string()), street_2: v.nullable(v.string()), zip_code: v.nullable(v.string()) })))), bank_accounts: v.optional(v.nullable(v.array(v.partial(v.object({ iban: v.nullable(v.string()), bic: v.nullable(v.string()), account_number: v.nullable(v.string()), holder_name: v.nullable(v.string()), bank_name: v.nullable(v.string()), domestic_bank_routing: v.nullable(v.object({ number: v.string(), type: v.nullable(v.picklist(["GB_SORT_CODE", "DE_BANKLEITZAHL", "US_ABA_ROUTING_TRANSIT_NUMBER", "CA_ROUTING_NUMBER", "AU_BSB_CODE", "FR_RIB"])) })) }))))), date_of_birth: v.nullable(v.string()), start_date: v.nullable(v.string()), termination_date: v.nullable(v.string()), remote_created_at: v.nullable(v.string()), changed_at: v.string(), remote_deleted_at: v.nullable(v.string()), custom_fields: v.nullable(v.record(v.string(), v.unknown())), integration_fields: v.array(v.object({ id: v.string(), key: v.string(), type: v.picklist(["DEFAULT", "CUSTOM"]), value: v.optional(v.null()), label: v.nullable(v.string()) })), remote_data: v.nullable(v.record(v.string(), v.unknown())), employments: v.array(v.object({ id: v.string(), remote_id: v.nullable(v.string()), employee_id: v.string(), job_title: v.nullable(v.string()), pay_rate: v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))), pay_period: v.optional(v.union([v.picklist(["HOUR", "DAY", "WEEK", "TWO_WEEKS", "HALF_MONTH", "MONTH", "TWO_MONTHS", "QUARTER", "HALF_YEAR", "YEAR"]), v.string(), v.null()])), pay_frequency: v.optional(v.union([v.picklist(["DAILY", "WEEKLY", "BIWEEKLY", "MONTHLY", "SEMIMONTHLY", "QUARTERLY", "SEMIANNUALLY", "ANNUALLY", "PRO_RATA"]), v.string(), v.null()])), employment_type: v.optional(v.union([v.picklist(["FULL_TIME", "PART_TIME", "CONTRACT", "INTERNSHIP", "FREELANCE", "WORKING_STUDENT", "APPRENTICESHIP", "TRAINING"]), v.string(), v.null()])), pay_currency: v.nullable(v.string()), effective_date: v.nullable(v.string()), changed_at: v.string(), remote_deleted_at: v.nullable(v.string()), remote_data: v.nullable(v.record(v.string(), v.unknown())), custom_fields: v.nullable(v.record(v.string(), v.unknown())), integration_fields: v.array(v.object({ id: v.string(), key: v.string(), type: v.picklist(["DEFAULT", "CUSTOM"]), value: v.optional(v.null()), label: v.nullable(v.string()) })) })), time_off_balances: v.array(v.object({ id: v.string(), remote_id: v.nullable(v.string()), employee_id: v.string(), type_id: v.string(), balance: v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))), balance_unit: v.nullable(v.picklist(["HOURS", "DAYS"])), changed_at: v.string(), remote_deleted_at: v.nullable(v.string()), used: v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))), used_unit: v.nullable(v.picklist(["HOURS", "DAYS"])), remote_data: v.nullable(v.record(v.string(), v.unknown())) })), manager: v.nullable(v.object({ first_name: v.nullable(v.string()), last_name: v.nullable(v.string()), display_full_name: v.nullable(v.string()), id: v.string(), employee_number: v.nullable(v.string()), work_email: v.optional(v.nullable(v.pipe(v.string(), v.regex(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$"))))), remote_id: v.string(), employment_status: v.optional(v.union([v.picklist(["ACTIVE", "PENDING", "INACTIVE", "LEAVE"]), v.string(), v.null()])), termination_date: v.nullable(v.string()) })), groups: v.array(v.object({ id: v.string(), remote_id: v.string(), name: v.nullable(v.string()), type: v.nullable(v.picklist(["DEPARTMENT", "TEAM", "COST_CENTER"])) })), legal_entity: v.nullable(v.object({ id: v.string(), remote_id: v.nullable(v.string()), name: v.nullable(v.string()), address: v.optional(v.nullable(v.partial(v.object({ city: v.nullable(v.string()), country: v.nullable(v.string()), raw: v.nullable(v.string()), state: v.nullable(v.string()), street_1: v.nullable(v.string()), street_2: v.nullable(v.string()), zip_code: v.nullable(v.string()) })))) })), teams: v.array(v.object({ id: v.string(), remote_id: v.string(), name: v.nullable(v.string()), type: v.nullable(v.picklist(["DEPARTMENT", "TEAM", "COST_CENTER"])) })), work_location: v.nullable(v.object({ id: v.string(), remote_id: v.nullable(v.string()), name: v.nullable(v.string()), address: v.optional(v.nullable(v.partial(v.object({ city: v.nullable(v.string()), country: v.nullable(v.string()), raw: v.nullable(v.string()), state: v.nullable(v.string()), street_1: v.nullable(v.string()), street_2: v.nullable(v.string()), zip_code: v.nullable(v.string()) })))), type: v.nullable(v.string()), changed_at: v.string(), remote_deleted_at: v.nullable(v.string()), remote_data: v.nullable(v.record(v.string(), v.unknown())) })) })) }) });

export type PostHrisEmployeesPositiveResponse = v.InferOutput<typeof PostHrisEmployeesPositiveResponse>;
export const PostHrisEmployeesPositiveResponse = v.object({ status: v.string(), data: v.object({ id: v.string(), remote_id: v.string(), employee_number: v.nullable(v.string()), first_name: v.nullable(v.string()), last_name: v.nullable(v.string()), nationality: v.nullable(v.string()), display_full_name: v.nullable(v.string()), job_title: v.nullable(v.string()), work_email: v.optional(v.nullable(v.pipe(v.string(), v.regex(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$"))))), personal_email: v.optional(v.nullable(v.pipe(v.string(), v.regex(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$"))))), mobile_phone_number: v.nullable(v.string()), ssn: v.nullable(v.string()), tax_id: v.nullable(v.string()), gender: v.optional(v.union([v.picklist(["MALE", "FEMALE", "NON_BINARY", "NOT_SPECIFIED"]), v.string(), v.null()])), ethnicity: v.optional(v.union([v.picklist(["WHITE", "ASIAN", "HISPANIC_LATINO", "HAWAIIAN", "NATIVE_AMERICAN", "BLACK_AFRICAN_AMERICAN", "MULTIPLE_ETHNICITIES", "DECLINE_TO_SPECIFY"]), v.string(), v.null()])), marital_status: v.optional(v.union([v.picklist(["SINGLE", "MARRIED", "DOMESTIC_PARTNERSHIP", "WIDOWED", "DIVORCED", "SEPARATED", "NOT_MARRIED"]), v.string(), v.null()])), employment_status: v.optional(v.union([v.picklist(["ACTIVE", "PENDING", "INACTIVE", "LEAVE"]), v.string(), v.null()])), employment_type: v.optional(v.union([v.picklist(["FULL_TIME", "PART_TIME", "CONTRACT", "INTERNSHIP", "FREELANCE", "WORKING_STUDENT", "APPRENTICESHIP", "TRAINING"]), v.string(), v.null()])), weekly_hours: v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))), avatar: v.nullable(v.string()), work_location_id: v.nullable(v.string()), legal_entity_id: v.nullable(v.string()), manager_id: v.nullable(v.string()), home_address: v.optional(v.nullable(v.partial(v.object({ city: v.nullable(v.string()), country: v.nullable(v.string()), raw: v.nullable(v.string()), state: v.nullable(v.string()), street_1: v.nullable(v.string()), street_2: v.nullable(v.string()), zip_code: v.nullable(v.string()) })))), bank_accounts: v.optional(v.nullable(v.array(v.partial(v.object({ iban: v.nullable(v.string()), bic: v.nullable(v.string()), account_number: v.nullable(v.string()), holder_name: v.nullable(v.string()), bank_name: v.nullable(v.string()), domestic_bank_routing: v.nullable(v.object({ number: v.string(), type: v.nullable(v.picklist(["GB_SORT_CODE", "DE_BANKLEITZAHL", "US_ABA_ROUTING_TRANSIT_NUMBER", "CA_ROUTING_NUMBER", "AU_BSB_CODE", "FR_RIB"])) })) }))))), date_of_birth: v.nullable(v.string()), start_date: v.nullable(v.string()), termination_date: v.nullable(v.string()), remote_created_at: v.nullable(v.string()), changed_at: v.string(), remote_deleted_at: v.nullable(v.string()), custom_fields: v.nullable(v.record(v.string(), v.unknown())), integration_fields: v.array(v.object({ id: v.string(), key: v.string(), type: v.picklist(["DEFAULT", "CUSTOM"]), value: v.optional(v.null()), label: v.nullable(v.string()) })), remote_data: v.nullable(v.record(v.string(), v.unknown())) }), warnings: v.array(v.object({ message: v.string() })) });

export type PostHrisEmployeesRequestBody = v.InferOutput<typeof PostHrisEmployeesRequestBody>;
export const PostHrisEmployeesRequestBody = v.object({ first_name: v.string(), last_name: v.string(), work_email: v.optional(v.pipe(v.string(), v.email())), gender: v.optional(v.picklist(["MALE", "FEMALE", "NON_BINARY", "NOT_SPECIFIED"])), job_title: v.optional(v.string()), home_address: v.optional(v.partial(v.object({ street_1: v.string(), street_2: v.string(), city: v.string(), state: v.string(), zip_code: v.string(), country: v.pipe(v.string(), v.regex(new RegExp("^[A-Z]{2}$"))) }))), date_of_birth: v.optional(v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), mobile_phone_number: v.optional(v.string()), home_phone_number: v.optional(v.string()), nationality: v.optional(v.pipe(v.string(), v.regex(new RegExp("^[A-Z]{2}$")))), start_date: v.optional(v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), legal_entity_id: v.optional(v.string()), location_id: v.optional(v.string()), remote_fields: v.optional(v.partial(v.object({ humaans: v.partial(v.object({ employee: v.record(v.string(), v.unknown()) })), hibob: v.partial(v.object({ employee: v.record(v.string(), v.unknown()) })), sympa: v.partial(v.object({ GenericNewHire: v.record(v.string(), v.unknown()) })), silae: v.partial(v.object({ siret: v.string(), employee: v.record(v.string(), v.unknown()), employment: v.record(v.string(), v.unknown()) })), peoplehr: v.partial(v.object({ job_role_effective_date: v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))), department: v.string() })), zohopeople: v.partial(v.object({ employee_id: v.pipe(v.string(), v.minLength(1)) })), workday: v.partial(v.object({ job_requisition_id: v.string(), position_id: v.string(), ssn: v.string(), bank_account: v.object({ iban: v.string(), bic: v.string(), bank_name: v.string() }) })), deel: v.object({ candidate_id: v.string(), candidate_link: v.string() }), bamboohr: v.partial(v.object({ employee: v.record(v.string(), v.unknown()) })), oracle: v.object({ group_id: v.string(), department_id: v.string() }), adpworkforcenow: v.object({ onboarding_template_code: v.string(), applicant_payroll_profile_group_code: v.string(), manager_position_id: v.optional(v.string()), home_organization_unit_code: v.optional(v.string()), personal_email: v.optional(v.string()) }), azuread: v.object({ password: v.string() }), paycor: v.object({ paygroupRemoteId: v.string(), departmentRemoteId: v.string() }), planday: v.object({ department_remote_id: v.string() }), dayforce: v.object({ social_security_number: v.string(), pay_type: v.string(), pay_class: v.string(), pay_group: v.string(), base_rate: v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)), role: v.string(), location: v.string(), department: v.string(), job: v.string(), country: v.string() }) }))) });

export type Schema1 = v.InferOutput<typeof Schema1>;
export const Schema1 = v.lazy(() => v.record(v.string(), v.union([v.object({ label: v.string(), required: v.boolean(), description: v.optional(v.nullable(v.string())), unified_key: v.optional(v.nullable(v.picklist(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]))), type: v.string(), min_length: v.optional(v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)))), max_length: v.optional(v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)))), reg_exp: v.optional(v.nullable(v.string())) }), v.object({ label: v.string(), required: v.boolean(), description: v.optional(v.nullable(v.string())), unified_key: v.optional(v.nullable(v.picklist(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]))), type: v.string(), min: v.optional(v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)))), max: v.optional(v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)))) }), v.object({ label: v.string(), required: v.boolean(), description: v.optional(v.nullable(v.string())), unified_key: v.optional(v.nullable(v.picklist(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]))), type: v.string() }), v.object({ label: v.string(), required: v.boolean(), description: v.optional(v.nullable(v.string())), unified_key: v.optional(v.nullable(v.picklist(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]))), type: v.string(), options: v.union([v.object({ type: v.string(), entries: v.array(v.object({ id: v.string(), label: v.string(), unified_value: v.optional(v.string()), remote_id: v.union([v.string(), v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))]) })) }), v.object({ type: v.string(), link: v.string() })]) }), v.object({ label: v.string(), required: v.boolean(), description: v.optional(v.nullable(v.string())), unified_key: v.optional(v.nullable(v.string())), type: v.string(), min_items: v.optional(v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)))), max_items: v.optional(v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)))), options: v.union([v.object({ type: v.string(), entries: v.array(v.object({ id: v.string(), label: v.string(), unified_value: v.optional(v.string()), remote_id: v.union([v.string(), v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))]) })) }), v.object({ type: v.string(), link: v.string() })]) }), v.object({ label: v.string(), required: v.boolean(), description: v.optional(v.nullable(v.string())), unified_key: v.optional(v.nullable(v.picklist(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]))), type: v.string() }), v.object({ label: v.string(), required: v.boolean(), description: v.optional(v.nullable(v.string())), unified_key: v.optional(v.nullable(v.picklist(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]))), type: v.string(), properties: Schema1 }), v.object({ label: v.string(), required: v.boolean(), description: v.optional(v.nullable(v.string())), unified_key: v.optional(v.nullable(v.picklist(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]))), type: v.string(), item_type: Schema2, min_items: v.optional(v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)))), max_items: v.optional(v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)))) }), v.object({ label: v.string(), required: v.boolean(), description: v.optional(v.nullable(v.string())), unified_key: v.optional(v.nullable(v.picklist(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]))), type: v.string(), file_restrictions: v.object({ accepted_mime_types: v.array(v.string()), max_file_size: v.optional(v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)))) }) })])));

export type Schema2 = v.InferOutput<typeof Schema2>;
export const Schema2 = v.lazy(() => v.union([v.object({ label: v.string(), required: v.boolean(), description: v.optional(v.nullable(v.string())), unified_key: v.optional(v.nullable(v.picklist(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]))), type: v.string(), min_length: v.optional(v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)))), max_length: v.optional(v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)))), reg_exp: v.optional(v.nullable(v.string())) }), v.object({ label: v.string(), required: v.boolean(), description: v.optional(v.nullable(v.string())), unified_key: v.optional(v.nullable(v.picklist(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]))), type: v.string(), min: v.optional(v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)))), max: v.optional(v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)))) }), v.object({ label: v.string(), required: v.boolean(), description: v.optional(v.nullable(v.string())), unified_key: v.optional(v.nullable(v.picklist(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]))), type: v.string() }), v.object({ label: v.string(), required: v.boolean(), description: v.optional(v.nullable(v.string())), unified_key: v.optional(v.nullable(v.picklist(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]))), type: v.string(), options: v.union([v.object({ type: v.string(), entries: v.array(v.object({ id: v.string(), label: v.string(), unified_value: v.optional(v.string()), remote_id: v.union([v.string(), v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))]) })) }), v.object({ type: v.string(), link: v.string() })]) }), v.object({ label: v.string(), required: v.boolean(), description: v.optional(v.nullable(v.string())), unified_key: v.optional(v.nullable(v.string())), type: v.string(), min_items: v.optional(v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)))), max_items: v.optional(v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)))), options: v.union([v.object({ type: v.string(), entries: v.array(v.object({ id: v.string(), label: v.string(), unified_value: v.optional(v.string()), remote_id: v.union([v.string(), v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))]) })) }), v.object({ type: v.string(), link: v.string() })]) }), v.object({ label: v.string(), required: v.boolean(), description: v.optional(v.nullable(v.string())), unified_key: v.optional(v.nullable(v.picklist(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]))), type: v.string() }), v.object({ label: v.string(), required: v.boolean(), description: v.optional(v.nullable(v.string())), unified_key: v.optional(v.nullable(v.picklist(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]))), type: v.string(), properties: Schema1 }), v.object({ label: v.string(), required: v.boolean(), description: v.optional(v.nullable(v.string())), unified_key: v.optional(v.nullable(v.picklist(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]))), type: v.string(), item_type: Schema2, min_items: v.optional(v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)))), max_items: v.optional(v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)))) }), v.object({ label: v.string(), required: v.boolean(), description: v.optional(v.nullable(v.string())), unified_key: v.optional(v.nullable(v.picklist(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]))), type: v.string(), file_restrictions: v.object({ accepted_mime_types: v.array(v.string()), max_file_size: v.optional(v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)))) }) })]));

export type GetHrisEmployeesFormPositiveResponse = v.InferOutput<typeof GetHrisEmployeesFormPositiveResponse>;
export const GetHrisEmployeesFormPositiveResponse = v.object({ status: v.string(), data: v.object({ properties: v.record(v.string(), v.union([v.object({ label: v.string(), required: v.boolean(), description: v.optional(v.nullable(v.string())), unified_key: v.optional(v.nullable(v.picklist(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]))), type: v.string(), min_length: v.optional(v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)))), max_length: v.optional(v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)))), reg_exp: v.optional(v.nullable(v.string())) }), v.object({ label: v.string(), required: v.boolean(), description: v.optional(v.nullable(v.string())), unified_key: v.optional(v.nullable(v.picklist(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]))), type: v.string(), min: v.optional(v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)))), max: v.optional(v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)))) }), v.object({ label: v.string(), required: v.boolean(), description: v.optional(v.nullable(v.string())), unified_key: v.optional(v.nullable(v.picklist(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]))), type: v.string() }), v.object({ label: v.string(), required: v.boolean(), description: v.optional(v.nullable(v.string())), unified_key: v.optional(v.nullable(v.picklist(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]))), type: v.string(), options: v.union([v.object({ type: v.string(), entries: v.array(v.object({ id: v.string(), label: v.string(), unified_value: v.optional(v.string()), remote_id: v.union([v.string(), v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))]) })) }), v.object({ type: v.string(), link: v.string() })]) }), v.object({ label: v.string(), required: v.boolean(), description: v.optional(v.nullable(v.string())), unified_key: v.optional(v.nullable(v.string())), type: v.string(), min_items: v.optional(v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)))), max_items: v.optional(v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)))), options: v.union([v.object({ type: v.string(), entries: v.array(v.object({ id: v.string(), label: v.string(), unified_value: v.optional(v.string()), remote_id: v.union([v.string(), v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))]) })) }), v.object({ type: v.string(), link: v.string() })]) }), v.object({ label: v.string(), required: v.boolean(), description: v.optional(v.nullable(v.string())), unified_key: v.optional(v.nullable(v.picklist(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]))), type: v.string() }), v.object({ label: v.string(), required: v.boolean(), description: v.optional(v.nullable(v.string())), unified_key: v.optional(v.nullable(v.picklist(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]))), type: v.string(), properties: Schema1 }), v.object({ label: v.string(), required: v.boolean(), description: v.optional(v.nullable(v.string())), unified_key: v.optional(v.nullable(v.picklist(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]))), type: v.string(), item_type: Schema2, min_items: v.optional(v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)))), max_items: v.optional(v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)))) }), v.object({ label: v.string(), required: v.boolean(), description: v.optional(v.nullable(v.string())), unified_key: v.optional(v.nullable(v.picklist(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]))), type: v.string(), file_restrictions: v.object({ accepted_mime_types: v.array(v.string()), max_file_size: v.optional(v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)))) }) })])) }), warnings: v.array(v.object({ message: v.string() })) });

export type PostHrisEmployeesFormPositiveResponse = v.InferOutput<typeof PostHrisEmployeesFormPositiveResponse>;
export const PostHrisEmployeesFormPositiveResponse = v.object({ status: v.string(), data: v.object({ id: v.nullable(v.string()), remote_id: v.nullable(v.string()), prehire: v.object({ remote_id: v.nullable(v.string()) }) }), warnings: v.array(v.object({ message: v.string() })) });

export type Schema6 = v.InferOutput<typeof Schema6>;
export const Schema6 = v.lazy(() => v.array(Schema4));

export type Schema4 = v.InferOutput<typeof Schema4>;
export const Schema4 = v.lazy(() => v.union([v.string(), v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)), v.boolean(), Schema5, Schema6]));

export type Schema5 = v.InferOutput<typeof Schema5>;
export const Schema5 = v.lazy(() => v.record(v.string(), Schema4));

export type Schema3 = v.InferOutput<typeof Schema3>;
export const Schema3 = v.record(v.string(), Schema4);

export type PostHrisEmployeesFormRequestBody = v.InferOutput<typeof PostHrisEmployeesFormRequestBody>;
export const PostHrisEmployeesFormRequestBody = v.object({ properties: Schema3 });

export type PatchHrisEmployeesEmployeeIdParameterEmployeeId = v.InferOutput<typeof PatchHrisEmployeesEmployeeIdParameterEmployeeId>;
export const PatchHrisEmployeesEmployeeIdParameterEmployeeId = v.string();

export type PatchHrisEmployeesEmployeeIdPositiveResponse = v.InferOutput<typeof PatchHrisEmployeesEmployeeIdPositiveResponse>;
export const PatchHrisEmployeesEmployeeIdPositiveResponse = v.object({ status: v.string(), data: v.object({ id: v.string(), remote_id: v.string(), employee_number: v.nullable(v.string()), first_name: v.nullable(v.string()), last_name: v.nullable(v.string()), nationality: v.nullable(v.string()), display_full_name: v.nullable(v.string()), job_title: v.nullable(v.string()), work_email: v.optional(v.nullable(v.pipe(v.string(), v.regex(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$"))))), personal_email: v.optional(v.nullable(v.pipe(v.string(), v.regex(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$"))))), mobile_phone_number: v.nullable(v.string()), ssn: v.nullable(v.string()), tax_id: v.nullable(v.string()), gender: v.optional(v.union([v.picklist(["MALE", "FEMALE", "NON_BINARY", "NOT_SPECIFIED"]), v.string(), v.null()])), ethnicity: v.optional(v.union([v.picklist(["WHITE", "ASIAN", "HISPANIC_LATINO", "HAWAIIAN", "NATIVE_AMERICAN", "BLACK_AFRICAN_AMERICAN", "MULTIPLE_ETHNICITIES", "DECLINE_TO_SPECIFY"]), v.string(), v.null()])), marital_status: v.optional(v.union([v.picklist(["SINGLE", "MARRIED", "DOMESTIC_PARTNERSHIP", "WIDOWED", "DIVORCED", "SEPARATED", "NOT_MARRIED"]), v.string(), v.null()])), employment_status: v.optional(v.union([v.picklist(["ACTIVE", "PENDING", "INACTIVE", "LEAVE"]), v.string(), v.null()])), employment_type: v.optional(v.union([v.picklist(["FULL_TIME", "PART_TIME", "CONTRACT", "INTERNSHIP", "FREELANCE", "WORKING_STUDENT", "APPRENTICESHIP", "TRAINING"]), v.string(), v.null()])), weekly_hours: v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))), avatar: v.nullable(v.string()), work_location_id: v.nullable(v.string()), legal_entity_id: v.nullable(v.string()), manager_id: v.nullable(v.string()), home_address: v.optional(v.nullable(v.partial(v.object({ city: v.nullable(v.string()), country: v.nullable(v.string()), raw: v.nullable(v.string()), state: v.nullable(v.string()), street_1: v.nullable(v.string()), street_2: v.nullable(v.string()), zip_code: v.nullable(v.string()) })))), bank_accounts: v.optional(v.nullable(v.array(v.partial(v.object({ iban: v.nullable(v.string()), bic: v.nullable(v.string()), account_number: v.nullable(v.string()), holder_name: v.nullable(v.string()), bank_name: v.nullable(v.string()), domestic_bank_routing: v.nullable(v.object({ number: v.string(), type: v.nullable(v.picklist(["GB_SORT_CODE", "DE_BANKLEITZAHL", "US_ABA_ROUTING_TRANSIT_NUMBER", "CA_ROUTING_NUMBER", "AU_BSB_CODE", "FR_RIB"])) })) }))))), date_of_birth: v.nullable(v.string()), start_date: v.nullable(v.string()), termination_date: v.nullable(v.string()), remote_created_at: v.nullable(v.string()), changed_at: v.string(), remote_deleted_at: v.nullable(v.string()), remote_data: v.nullable(v.record(v.string(), v.unknown())) }), warnings: v.array(v.object({ message: v.string() })) });

export type PatchHrisEmployeesEmployeeIdRequestBody = v.InferOutput<typeof PatchHrisEmployeesEmployeeIdRequestBody>;
export const PatchHrisEmployeesEmployeeIdRequestBody = v.object({ first_name: v.optional(v.string()), last_name: v.optional(v.string()), work_email: v.pipe(v.string(), v.email()), gender: v.optional(v.picklist(["MALE", "FEMALE", "NON_BINARY", "NOT_SPECIFIED"])), job_title: v.optional(v.string()), home_address: v.optional(v.partial(v.object({ street_1: v.string(), street_2: v.string(), city: v.string(), state: v.string(), zip_code: v.string(), country: v.pipe(v.string(), v.regex(new RegExp("^[A-Z]{2}$"))) }))), date_of_birth: v.optional(v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), mobile_phone_number: v.optional(v.string()), home_phone_number: v.optional(v.string()), nationality: v.optional(v.pipe(v.string(), v.regex(new RegExp("^[A-Z]{2}$")))), start_date: v.optional(v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), legal_entity_id: v.optional(v.string()), location_id: v.optional(v.string()), remote_fields: v.optional(v.partial(v.object({ humaans: v.partial(v.object({ employee: v.record(v.string(), v.unknown()) })), hibob: v.partial(v.object({ employee: v.record(v.string(), v.unknown()) })), sympa: v.partial(v.object({ GenericNewHire: v.record(v.string(), v.unknown()) })), silae: v.partial(v.object({ siret: v.string(), employee: v.record(v.string(), v.unknown()), employment: v.record(v.string(), v.unknown()) })), peoplehr: v.partial(v.object({ job_role_effective_date: v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))), department: v.string() })), zohopeople: v.partial(v.object({ employee_id: v.pipe(v.string(), v.minLength(1)) })), workday: v.partial(v.object({ job_requisition_id: v.string(), position_id: v.string(), ssn: v.string(), bank_account: v.object({ iban: v.string(), bic: v.string(), bank_name: v.string() }) })), deel: v.object({ candidate_id: v.string(), candidate_link: v.string() }), bamboohr: v.partial(v.object({ employee: v.record(v.string(), v.unknown()) })), oracle: v.object({ group_id: v.string(), department_id: v.string() }), adpworkforcenow: v.object({ onboarding_template_code: v.string(), applicant_payroll_profile_group_code: v.string(), manager_position_id: v.optional(v.string()), home_organization_unit_code: v.optional(v.string()), personal_email: v.optional(v.string()) }), azuread: v.object({ password: v.string() }), paycor: v.object({ paygroupRemoteId: v.string(), departmentRemoteId: v.string() }), planday: v.object({ department_remote_id: v.string() }), dayforce: v.object({ social_security_number: v.string(), pay_type: v.string(), pay_class: v.string(), pay_group: v.string(), base_rate: v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)), role: v.string(), location: v.string(), department: v.string(), job: v.string(), country: v.string() }) }))), ssn: v.optional(v.string()), marital_status: v.optional(v.picklist(["SINGLE", "MARRIED", "DOMESTIC_PARTNERSHIP", "WIDOWED", "DIVORCED", "SEPARATED", "NOT_MARRIED"])), termination_date: v.optional(v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), tax_id: v.optional(v.string()) });

export type PostHrisEmployeesEmployeeIdDocumentsParameterEmployeeId = v.InferOutput<typeof PostHrisEmployeesEmployeeIdDocumentsParameterEmployeeId>;
export const PostHrisEmployeesEmployeeIdDocumentsParameterEmployeeId = v.string();

export type PostHrisEmployeesEmployeeIdDocumentsPositiveResponse = v.InferOutput<typeof PostHrisEmployeesEmployeeIdDocumentsPositiveResponse>;
export const PostHrisEmployeesEmployeeIdDocumentsPositiveResponse = v.object({ status: v.string(), data: v.record(v.string(), v.unknown()), warnings: v.array(v.object({ message: v.string() })) });

export type PostHrisEmployeesEmployeeIdDocumentsRequestBody = v.InferOutput<typeof PostHrisEmployeesEmployeeIdDocumentsRequestBody>;
export const PostHrisEmployeesEmployeeIdDocumentsRequestBody = v.object({ category_id: v.string(), document: v.object({ name: v.string(), content_type: v.optional(v.pipe(v.string(), v.regex(new RegExp("^[\\w.-]+\\/[\\w.-]+$")))), data_url: v.optional(v.pipe(v.string(), v.url())), data: v.optional(v.string()) }) });

export type GetHrisEmployeeDocumentCategoriesParameterCursor = v.InferOutput<typeof GetHrisEmployeeDocumentCategoriesParameterCursor>;
export const GetHrisEmployeeDocumentCategoriesParameterCursor = v.string();

export type GetHrisEmployeeDocumentCategoriesParameterPageSize = v.InferOutput<typeof GetHrisEmployeeDocumentCategoriesParameterPageSize>;
export const GetHrisEmployeeDocumentCategoriesParameterPageSize = v.optional(v.pipe(v.number(), v.integer(), v.minValue(1), v.maxValue(250)), 100);

export type GetHrisEmployeeDocumentCategoriesParameterUpdatedAfter = v.InferOutput<typeof GetHrisEmployeeDocumentCategoriesParameterUpdatedAfter>;
export const GetHrisEmployeeDocumentCategoriesParameterUpdatedAfter = v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));

export type GetHrisEmployeeDocumentCategoriesParameterIncludeDeleted = v.InferOutput<typeof GetHrisEmployeeDocumentCategoriesParameterIncludeDeleted>;
export const GetHrisEmployeeDocumentCategoriesParameterIncludeDeleted = v.optional(v.picklist(["true", "false"]), "false");

export type GetHrisEmployeeDocumentCategoriesParameterIgnoreUnsupportedFilters = v.InferOutput<typeof GetHrisEmployeeDocumentCategoriesParameterIgnoreUnsupportedFilters>;
export const GetHrisEmployeeDocumentCategoriesParameterIgnoreUnsupportedFilters = v.optional(v.picklist(["true", "false"]), "false");

export type GetHrisEmployeeDocumentCategoriesParameterIds = v.InferOutput<typeof GetHrisEmployeeDocumentCategoriesParameterIds>;
export const GetHrisEmployeeDocumentCategoriesParameterIds = v.string();

export type GetHrisEmployeeDocumentCategoriesParameterRemoteIds = v.InferOutput<typeof GetHrisEmployeeDocumentCategoriesParameterRemoteIds>;
export const GetHrisEmployeeDocumentCategoriesParameterRemoteIds = v.string();

export type GetHrisEmployeeDocumentCategoriesPositiveResponse = v.InferOutput<typeof GetHrisEmployeeDocumentCategoriesPositiveResponse>;
export const GetHrisEmployeeDocumentCategoriesPositiveResponse = v.object({ status: v.string(), data: v.object({ next: v.nullable(v.string()), results: v.array(v.object({ id: v.string(), remote_id: v.nullable(v.string()), name: v.nullable(v.string()), remote_data: v.nullable(v.record(v.string(), v.unknown())), changed_at: v.string(), remote_deleted_at: v.nullable(v.string()) })) }) });

export type GetHrisTeamsParameterCursor = v.InferOutput<typeof GetHrisTeamsParameterCursor>;
export const GetHrisTeamsParameterCursor = v.string();

export type GetHrisTeamsParameterPageSize = v.InferOutput<typeof GetHrisTeamsParameterPageSize>;
export const GetHrisTeamsParameterPageSize = v.optional(v.pipe(v.number(), v.integer(), v.minValue(1), v.maxValue(250)), 100);

export type GetHrisTeamsParameterUpdatedAfter = v.InferOutput<typeof GetHrisTeamsParameterUpdatedAfter>;
export const GetHrisTeamsParameterUpdatedAfter = v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));

export type GetHrisTeamsParameterIncludeDeleted = v.InferOutput<typeof GetHrisTeamsParameterIncludeDeleted>;
export const GetHrisTeamsParameterIncludeDeleted = v.optional(v.picklist(["true", "false"]), "false");

export type GetHrisTeamsParameterIgnoreUnsupportedFilters = v.InferOutput<typeof GetHrisTeamsParameterIgnoreUnsupportedFilters>;
export const GetHrisTeamsParameterIgnoreUnsupportedFilters = v.optional(v.picklist(["true", "false"]), "false");

export type GetHrisTeamsParameterIds = v.InferOutput<typeof GetHrisTeamsParameterIds>;
export const GetHrisTeamsParameterIds = v.string();

export type GetHrisTeamsParameterRemoteIds = v.InferOutput<typeof GetHrisTeamsParameterRemoteIds>;
export const GetHrisTeamsParameterRemoteIds = v.string();

export type GetHrisTeamsPositiveResponse = v.InferOutput<typeof GetHrisTeamsPositiveResponse>;
export const GetHrisTeamsPositiveResponse = v.object({ status: v.string(), data: v.object({ next: v.nullable(v.string()), results: v.array(v.object({ id: v.string(), remote_id: v.string(), name: v.nullable(v.string()), changed_at: v.string(), remote_deleted_at: v.nullable(v.string()), type: v.nullable(v.picklist(["DEPARTMENT", "TEAM", "COST_CENTER"])), parent_id: v.nullable(v.string()), remote_data: v.nullable(v.record(v.string(), v.unknown())) })) }) });

export type GetHrisGroupsParameterCursor = v.InferOutput<typeof GetHrisGroupsParameterCursor>;
export const GetHrisGroupsParameterCursor = v.string();

export type GetHrisGroupsParameterPageSize = v.InferOutput<typeof GetHrisGroupsParameterPageSize>;
export const GetHrisGroupsParameterPageSize = v.optional(v.pipe(v.number(), v.integer(), v.minValue(1), v.maxValue(250)), 100);

export type GetHrisGroupsParameterUpdatedAfter = v.InferOutput<typeof GetHrisGroupsParameterUpdatedAfter>;
export const GetHrisGroupsParameterUpdatedAfter = v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));

export type GetHrisGroupsParameterIncludeDeleted = v.InferOutput<typeof GetHrisGroupsParameterIncludeDeleted>;
export const GetHrisGroupsParameterIncludeDeleted = v.optional(v.picklist(["true", "false"]), "false");

export type GetHrisGroupsParameterIgnoreUnsupportedFilters = v.InferOutput<typeof GetHrisGroupsParameterIgnoreUnsupportedFilters>;
export const GetHrisGroupsParameterIgnoreUnsupportedFilters = v.optional(v.picklist(["true", "false"]), "false");

export type GetHrisGroupsParameterIds = v.InferOutput<typeof GetHrisGroupsParameterIds>;
export const GetHrisGroupsParameterIds = v.string();

export type GetHrisGroupsParameterRemoteIds = v.InferOutput<typeof GetHrisGroupsParameterRemoteIds>;
export const GetHrisGroupsParameterRemoteIds = v.string();

export type GetHrisGroupsParameterTypes = v.InferOutput<typeof GetHrisGroupsParameterTypes>;
export const GetHrisGroupsParameterTypes = v.string();

export type GetHrisGroupsParameterNameContains = v.InferOutput<typeof GetHrisGroupsParameterNameContains>;
export const GetHrisGroupsParameterNameContains = v.string();

export type GetHrisGroupsPositiveResponse = v.InferOutput<typeof GetHrisGroupsPositiveResponse>;
export const GetHrisGroupsPositiveResponse = v.object({ status: v.string(), data: v.object({ next: v.nullable(v.string()), results: v.array(v.object({ id: v.string(), remote_id: v.string(), name: v.nullable(v.string()), changed_at: v.string(), remote_deleted_at: v.nullable(v.string()), type: v.nullable(v.picklist(["DEPARTMENT", "TEAM", "COST_CENTER"])), parent_id: v.nullable(v.string()), remote_data: v.nullable(v.record(v.string(), v.unknown())) })) }) });

export type GetHrisEmploymentsParameterCursor = v.InferOutput<typeof GetHrisEmploymentsParameterCursor>;
export const GetHrisEmploymentsParameterCursor = v.string();

export type GetHrisEmploymentsParameterPageSize = v.InferOutput<typeof GetHrisEmploymentsParameterPageSize>;
export const GetHrisEmploymentsParameterPageSize = v.optional(v.pipe(v.number(), v.integer(), v.minValue(1), v.maxValue(250)), 100);

export type GetHrisEmploymentsParameterUpdatedAfter = v.InferOutput<typeof GetHrisEmploymentsParameterUpdatedAfter>;
export const GetHrisEmploymentsParameterUpdatedAfter = v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));

export type GetHrisEmploymentsParameterIncludeDeleted = v.InferOutput<typeof GetHrisEmploymentsParameterIncludeDeleted>;
export const GetHrisEmploymentsParameterIncludeDeleted = v.optional(v.picklist(["true", "false"]), "false");

export type GetHrisEmploymentsParameterIgnoreUnsupportedFilters = v.InferOutput<typeof GetHrisEmploymentsParameterIgnoreUnsupportedFilters>;
export const GetHrisEmploymentsParameterIgnoreUnsupportedFilters = v.optional(v.picklist(["true", "false"]), "false");

export type GetHrisEmploymentsParameterIds = v.InferOutput<typeof GetHrisEmploymentsParameterIds>;
export const GetHrisEmploymentsParameterIds = v.string();

export type GetHrisEmploymentsParameterRemoteIds = v.InferOutput<typeof GetHrisEmploymentsParameterRemoteIds>;
export const GetHrisEmploymentsParameterRemoteIds = v.string();

export type GetHrisEmploymentsPositiveResponse = v.InferOutput<typeof GetHrisEmploymentsPositiveResponse>;
export const GetHrisEmploymentsPositiveResponse = v.object({ status: v.string(), data: v.object({ next: v.nullable(v.string()), results: v.array(v.object({ id: v.string(), remote_id: v.nullable(v.string()), employee_id: v.string(), job_title: v.nullable(v.string()), pay_rate: v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))), pay_period: v.optional(v.union([v.picklist(["HOUR", "DAY", "WEEK", "TWO_WEEKS", "HALF_MONTH", "MONTH", "TWO_MONTHS", "QUARTER", "HALF_YEAR", "YEAR"]), v.string(), v.null()])), pay_frequency: v.optional(v.union([v.picklist(["DAILY", "WEEKLY", "BIWEEKLY", "MONTHLY", "SEMIMONTHLY", "QUARTERLY", "SEMIANNUALLY", "ANNUALLY", "PRO_RATA"]), v.string(), v.null()])), employment_type: v.optional(v.union([v.picklist(["FULL_TIME", "PART_TIME", "CONTRACT", "INTERNSHIP", "FREELANCE", "WORKING_STUDENT", "APPRENTICESHIP", "TRAINING"]), v.string(), v.null()])), pay_currency: v.nullable(v.string()), effective_date: v.nullable(v.string()), changed_at: v.string(), remote_deleted_at: v.nullable(v.string()), remote_data: v.nullable(v.record(v.string(), v.unknown())), custom_fields: v.nullable(v.record(v.string(), v.unknown())), integration_fields: v.array(v.object({ id: v.string(), key: v.string(), type: v.picklist(["DEFAULT", "CUSTOM"]), value: v.optional(v.null()), label: v.nullable(v.string()) })) })) }) });

export type GetHrisLocationsParameterCursor = v.InferOutput<typeof GetHrisLocationsParameterCursor>;
export const GetHrisLocationsParameterCursor = v.string();

export type GetHrisLocationsParameterPageSize = v.InferOutput<typeof GetHrisLocationsParameterPageSize>;
export const GetHrisLocationsParameterPageSize = v.optional(v.pipe(v.number(), v.integer(), v.minValue(1), v.maxValue(250)), 100);

export type GetHrisLocationsParameterUpdatedAfter = v.InferOutput<typeof GetHrisLocationsParameterUpdatedAfter>;
export const GetHrisLocationsParameterUpdatedAfter = v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));

export type GetHrisLocationsParameterIncludeDeleted = v.InferOutput<typeof GetHrisLocationsParameterIncludeDeleted>;
export const GetHrisLocationsParameterIncludeDeleted = v.optional(v.picklist(["true", "false"]), "false");

export type GetHrisLocationsParameterIgnoreUnsupportedFilters = v.InferOutput<typeof GetHrisLocationsParameterIgnoreUnsupportedFilters>;
export const GetHrisLocationsParameterIgnoreUnsupportedFilters = v.optional(v.picklist(["true", "false"]), "false");

export type GetHrisLocationsParameterIds = v.InferOutput<typeof GetHrisLocationsParameterIds>;
export const GetHrisLocationsParameterIds = v.string();

export type GetHrisLocationsParameterRemoteIds = v.InferOutput<typeof GetHrisLocationsParameterRemoteIds>;
export const GetHrisLocationsParameterRemoteIds = v.string();

export type GetHrisLocationsParameterNameContains = v.InferOutput<typeof GetHrisLocationsParameterNameContains>;
export const GetHrisLocationsParameterNameContains = v.string();

export type GetHrisLocationsPositiveResponse = v.InferOutput<typeof GetHrisLocationsPositiveResponse>;
export const GetHrisLocationsPositiveResponse = v.object({ status: v.string(), data: v.object({ next: v.nullable(v.string()), results: v.array(v.object({ id: v.string(), remote_id: v.nullable(v.string()), name: v.nullable(v.string()), address: v.optional(v.nullable(v.partial(v.object({ city: v.nullable(v.string()), country: v.nullable(v.string()), raw: v.nullable(v.string()), state: v.nullable(v.string()), street_1: v.nullable(v.string()), street_2: v.nullable(v.string()), zip_code: v.nullable(v.string()) })))), type: v.nullable(v.string()), changed_at: v.string(), remote_deleted_at: v.nullable(v.string()), remote_data: v.nullable(v.record(v.string(), v.unknown())) })) }) });

export type GetHrisAbsenceTypesParameterCursor = v.InferOutput<typeof GetHrisAbsenceTypesParameterCursor>;
export const GetHrisAbsenceTypesParameterCursor = v.string();

export type GetHrisAbsenceTypesParameterPageSize = v.InferOutput<typeof GetHrisAbsenceTypesParameterPageSize>;
export const GetHrisAbsenceTypesParameterPageSize = v.optional(v.pipe(v.number(), v.integer(), v.minValue(1), v.maxValue(250)), 100);

export type GetHrisAbsenceTypesParameterUpdatedAfter = v.InferOutput<typeof GetHrisAbsenceTypesParameterUpdatedAfter>;
export const GetHrisAbsenceTypesParameterUpdatedAfter = v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));

export type GetHrisAbsenceTypesParameterIncludeDeleted = v.InferOutput<typeof GetHrisAbsenceTypesParameterIncludeDeleted>;
export const GetHrisAbsenceTypesParameterIncludeDeleted = v.optional(v.picklist(["true", "false"]), "false");

export type GetHrisAbsenceTypesParameterIgnoreUnsupportedFilters = v.InferOutput<typeof GetHrisAbsenceTypesParameterIgnoreUnsupportedFilters>;
export const GetHrisAbsenceTypesParameterIgnoreUnsupportedFilters = v.optional(v.picklist(["true", "false"]), "false");

export type GetHrisAbsenceTypesParameterIds = v.InferOutput<typeof GetHrisAbsenceTypesParameterIds>;
export const GetHrisAbsenceTypesParameterIds = v.string();

export type GetHrisAbsenceTypesParameterRemoteIds = v.InferOutput<typeof GetHrisAbsenceTypesParameterRemoteIds>;
export const GetHrisAbsenceTypesParameterRemoteIds = v.string();

export type GetHrisAbsenceTypesPositiveResponse = v.InferOutput<typeof GetHrisAbsenceTypesPositiveResponse>;
export const GetHrisAbsenceTypesPositiveResponse = v.object({ status: v.string(), data: v.object({ next: v.nullable(v.string()), results: v.array(v.object({ id: v.string(), remote_id: v.string(), name: v.nullable(v.string()), unit: v.nullable(v.picklist(["HOURS", "DAYS"])), half_days_supported: v.nullable(v.boolean()), exact_times_supported: v.nullable(v.boolean()), remote_data: v.nullable(v.record(v.string(), v.unknown())), changed_at: v.string(), remote_deleted_at: v.nullable(v.string()) })) }) });

export type GetHrisTimeOffBalancesParameterCursor = v.InferOutput<typeof GetHrisTimeOffBalancesParameterCursor>;
export const GetHrisTimeOffBalancesParameterCursor = v.string();

export type GetHrisTimeOffBalancesParameterPageSize = v.InferOutput<typeof GetHrisTimeOffBalancesParameterPageSize>;
export const GetHrisTimeOffBalancesParameterPageSize = v.optional(v.pipe(v.number(), v.integer(), v.minValue(1), v.maxValue(250)), 100);

export type GetHrisTimeOffBalancesParameterUpdatedAfter = v.InferOutput<typeof GetHrisTimeOffBalancesParameterUpdatedAfter>;
export const GetHrisTimeOffBalancesParameterUpdatedAfter = v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));

export type GetHrisTimeOffBalancesParameterIncludeDeleted = v.InferOutput<typeof GetHrisTimeOffBalancesParameterIncludeDeleted>;
export const GetHrisTimeOffBalancesParameterIncludeDeleted = v.optional(v.picklist(["true", "false"]), "false");

export type GetHrisTimeOffBalancesParameterIgnoreUnsupportedFilters = v.InferOutput<typeof GetHrisTimeOffBalancesParameterIgnoreUnsupportedFilters>;
export const GetHrisTimeOffBalancesParameterIgnoreUnsupportedFilters = v.optional(v.picklist(["true", "false"]), "false");

export type GetHrisTimeOffBalancesParameterIds = v.InferOutput<typeof GetHrisTimeOffBalancesParameterIds>;
export const GetHrisTimeOffBalancesParameterIds = v.string();

export type GetHrisTimeOffBalancesParameterRemoteIds = v.InferOutput<typeof GetHrisTimeOffBalancesParameterRemoteIds>;
export const GetHrisTimeOffBalancesParameterRemoteIds = v.string();

export type GetHrisTimeOffBalancesParameterEmployeeId = v.InferOutput<typeof GetHrisTimeOffBalancesParameterEmployeeId>;
export const GetHrisTimeOffBalancesParameterEmployeeId = v.string();

export type GetHrisTimeOffBalancesPositiveResponse = v.InferOutput<typeof GetHrisTimeOffBalancesPositiveResponse>;
export const GetHrisTimeOffBalancesPositiveResponse = v.object({ status: v.string(), data: v.object({ next: v.nullable(v.string()), results: v.array(v.object({ id: v.string(), remote_id: v.nullable(v.string()), employee_id: v.string(), type_id: v.string(), balance: v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))), balance_unit: v.nullable(v.picklist(["HOURS", "DAYS"])), changed_at: v.string(), remote_deleted_at: v.nullable(v.string()), used: v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))), used_unit: v.nullable(v.picklist(["HOURS", "DAYS"])), remote_data: v.nullable(v.record(v.string(), v.unknown())), type: v.object({ id: v.string(), remote_id: v.string(), name: v.nullable(v.string()), unit: v.nullable(v.picklist(["HOURS", "DAYS"])), half_days_supported: v.nullable(v.boolean()), exact_times_supported: v.nullable(v.boolean()), remote_data: v.nullable(v.record(v.string(), v.unknown())), changed_at: v.string(), remote_deleted_at: v.nullable(v.string()) }) })) }) });

export type GetHrisAbsencesParameterCursor = v.InferOutput<typeof GetHrisAbsencesParameterCursor>;
export const GetHrisAbsencesParameterCursor = v.string();

export type GetHrisAbsencesParameterPageSize = v.InferOutput<typeof GetHrisAbsencesParameterPageSize>;
export const GetHrisAbsencesParameterPageSize = v.optional(v.pipe(v.number(), v.integer(), v.minValue(1), v.maxValue(250)), 100);

export type GetHrisAbsencesParameterUpdatedAfter = v.InferOutput<typeof GetHrisAbsencesParameterUpdatedAfter>;
export const GetHrisAbsencesParameterUpdatedAfter = v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));

export type GetHrisAbsencesParameterIncludeDeleted = v.InferOutput<typeof GetHrisAbsencesParameterIncludeDeleted>;
export const GetHrisAbsencesParameterIncludeDeleted = v.optional(v.picklist(["true", "false"]), "false");

export type GetHrisAbsencesParameterIgnoreUnsupportedFilters = v.InferOutput<typeof GetHrisAbsencesParameterIgnoreUnsupportedFilters>;
export const GetHrisAbsencesParameterIgnoreUnsupportedFilters = v.optional(v.picklist(["true", "false"]), "false");

export type GetHrisAbsencesParameterIds = v.InferOutput<typeof GetHrisAbsencesParameterIds>;
export const GetHrisAbsencesParameterIds = v.string();

export type GetHrisAbsencesParameterRemoteIds = v.InferOutput<typeof GetHrisAbsencesParameterRemoteIds>;
export const GetHrisAbsencesParameterRemoteIds = v.string();

export type GetHrisAbsencesParameterDateFrom = v.InferOutput<typeof GetHrisAbsencesParameterDateFrom>;
export const GetHrisAbsencesParameterDateFrom = v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));

export type GetHrisAbsencesParameterDateUntil = v.InferOutput<typeof GetHrisAbsencesParameterDateUntil>;
export const GetHrisAbsencesParameterDateUntil = v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));

export type GetHrisAbsencesParameterTypeIds = v.InferOutput<typeof GetHrisAbsencesParameterTypeIds>;
export const GetHrisAbsencesParameterTypeIds = v.string();

export type GetHrisAbsencesParameterEmployeeId = v.InferOutput<typeof GetHrisAbsencesParameterEmployeeId>;
export const GetHrisAbsencesParameterEmployeeId = v.string();

export type GetHrisAbsencesParameterTimeFrom = v.InferOutput<typeof GetHrisAbsencesParameterTimeFrom>;
export const GetHrisAbsencesParameterTimeFrom = v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));

export type GetHrisAbsencesParameterTimeUntil = v.InferOutput<typeof GetHrisAbsencesParameterTimeUntil>;
export const GetHrisAbsencesParameterTimeUntil = v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));

export type GetHrisAbsencesPositiveResponse = v.InferOutput<typeof GetHrisAbsencesPositiveResponse>;
export const GetHrisAbsencesPositiveResponse = v.object({ status: v.string(), data: v.object({ next: v.nullable(v.string()), results: v.array(v.object({ id: v.string(), remote_id: v.nullable(v.string()), employee_id: v.string(), approver_id: v.nullable(v.string()), start_date: v.null(), end_date: v.null(), start_half_day: v.nullable(v.boolean()), end_half_day: v.nullable(v.boolean()), start_time: v.null(), end_time: v.null(), amount: v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))), unit: v.nullable(v.picklist(["HOURS", "DAYS"])), status: v.optional(v.union([v.picklist(["REQUESTED", "APPROVED", "DECLINED", "CANCELLED", "DELETED"]), v.string(), v.null()])), employee_note: v.nullable(v.string()), type_id: v.nullable(v.string()), remote_created_at: v.nullable(v.string()), remote_updated_at: v.nullable(v.string()), changed_at: v.string(), remote_deleted_at: v.nullable(v.string()), remote_data: v.nullable(v.record(v.string(), v.unknown())), type: v.nullable(v.object({ id: v.string(), remote_id: v.string(), name: v.nullable(v.string()), unit: v.nullable(v.picklist(["HOURS", "DAYS"])), half_days_supported: v.nullable(v.boolean()), exact_times_supported: v.nullable(v.boolean()), remote_data: v.nullable(v.record(v.string(), v.unknown())), changed_at: v.string(), remote_deleted_at: v.nullable(v.string()) })) })) }) });

export type PostHrisAbsencesPositiveResponse = v.InferOutput<typeof PostHrisAbsencesPositiveResponse>;
export const PostHrisAbsencesPositiveResponse = v.object({ status: v.string(), data: v.object({ id: v.string(), remote_id: v.nullable(v.string()), employee_id: v.string(), approver_id: v.nullable(v.string()), start_date: v.null(), end_date: v.null(), start_half_day: v.nullable(v.boolean()), end_half_day: v.nullable(v.boolean()), start_time: v.null(), end_time: v.null(), amount: v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))), unit: v.nullable(v.picklist(["HOURS", "DAYS"])), status: v.optional(v.union([v.picklist(["REQUESTED", "APPROVED", "DECLINED", "CANCELLED", "DELETED"]), v.string(), v.null()])), employee_note: v.nullable(v.string()), type_id: v.nullable(v.string()), remote_created_at: v.nullable(v.string()), remote_updated_at: v.nullable(v.string()), changed_at: v.string(), remote_deleted_at: v.nullable(v.string()), remote_data: v.nullable(v.record(v.string(), v.unknown())) }), warnings: v.array(v.object({ message: v.string() })) });

export type PostHrisAbsencesRequestBody = v.InferOutput<typeof PostHrisAbsencesRequestBody>;
export const PostHrisAbsencesRequestBody = v.object({ employee_id: v.string(), absence_type_id: v.string(), status: v.optional(v.picklist(["REQUESTED", "APPROVED"]), "REQUESTED"), start_date: v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))), end_date: v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))), start_half_day: v.optional(v.boolean(), false), end_half_day: v.optional(v.boolean(), false), amount: v.optional(v.pipe(v.number(), v.minValue(0))), unit: v.optional(v.picklist(["HOURS", "DAYS"])), employee_note: v.nullable(v.string()), start_time: v.optional(v.pipe(v.string(), v.regex(new RegExp("^(?:2[0-3]|[01]?\\d):[0-5]?\\d(:[0-5]?\\d)?$")))), end_time: v.optional(v.pipe(v.string(), v.regex(new RegExp("^(?:2[0-3]|[01]?\\d):[0-5]?\\d(:[0-5]?\\d)?$")))), remote_fields: v.optional(v.partial(v.object({ a3innuvanomina: v.partial(v.object({ benefit_type_id: v.picklist(["Delegated Payment", "No Right to Benefit", "Direct payment"]) })), adpworkforcenow: v.partial(v.object({ employment_id: v.string(), paid_leave: v.boolean() })) }))) });

export type DeleteHrisAbsencesAbsenceIdParameterAbsenceId = v.InferOutput<typeof DeleteHrisAbsencesAbsenceIdParameterAbsenceId>;
export const DeleteHrisAbsencesAbsenceIdParameterAbsenceId = v.string();

export type DeleteHrisAbsencesAbsenceIdPositiveResponse = v.InferOutput<typeof DeleteHrisAbsencesAbsenceIdPositiveResponse>;
export const DeleteHrisAbsencesAbsenceIdPositiveResponse = v.object({ status: v.string(), data: v.object({ id: v.string(), remote_id: v.nullable(v.string()), employee_id: v.string(), approver_id: v.nullable(v.string()), start_date: v.null(), end_date: v.null(), start_half_day: v.nullable(v.boolean()), end_half_day: v.nullable(v.boolean()), start_time: v.null(), end_time: v.null(), amount: v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))), unit: v.nullable(v.picklist(["HOURS", "DAYS"])), status: v.optional(v.union([v.picklist(["REQUESTED", "APPROVED", "DECLINED", "CANCELLED", "DELETED"]), v.string(), v.null()])), employee_note: v.nullable(v.string()), type_id: v.nullable(v.string()), remote_created_at: v.nullable(v.string()), remote_updated_at: v.nullable(v.string()), changed_at: v.string(), remote_deleted_at: v.nullable(v.string()), remote_data: v.nullable(v.record(v.string(), v.unknown())) }), warnings: v.array(v.object({ message: v.string() })) });

export type DeleteHrisAbsencesAbsenceIdRequestBody = v.InferOutput<typeof DeleteHrisAbsencesAbsenceIdRequestBody>;
export const DeleteHrisAbsencesAbsenceIdRequestBody = v.partial(v.object({ remote_fields: v.partial(v.object({ adpworkforcenow: v.partial(v.object({ employment_id: v.string() })) })) }));

export type GetHrisLegalEntitiesParameterCursor = v.InferOutput<typeof GetHrisLegalEntitiesParameterCursor>;
export const GetHrisLegalEntitiesParameterCursor = v.string();

export type GetHrisLegalEntitiesParameterPageSize = v.InferOutput<typeof GetHrisLegalEntitiesParameterPageSize>;
export const GetHrisLegalEntitiesParameterPageSize = v.optional(v.pipe(v.number(), v.integer(), v.minValue(1), v.maxValue(250)), 100);

export type GetHrisLegalEntitiesParameterUpdatedAfter = v.InferOutput<typeof GetHrisLegalEntitiesParameterUpdatedAfter>;
export const GetHrisLegalEntitiesParameterUpdatedAfter = v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));

export type GetHrisLegalEntitiesParameterIncludeDeleted = v.InferOutput<typeof GetHrisLegalEntitiesParameterIncludeDeleted>;
export const GetHrisLegalEntitiesParameterIncludeDeleted = v.optional(v.picklist(["true", "false"]), "false");

export type GetHrisLegalEntitiesParameterIgnoreUnsupportedFilters = v.InferOutput<typeof GetHrisLegalEntitiesParameterIgnoreUnsupportedFilters>;
export const GetHrisLegalEntitiesParameterIgnoreUnsupportedFilters = v.optional(v.picklist(["true", "false"]), "false");

export type GetHrisLegalEntitiesParameterIds = v.InferOutput<typeof GetHrisLegalEntitiesParameterIds>;
export const GetHrisLegalEntitiesParameterIds = v.string();

export type GetHrisLegalEntitiesParameterRemoteIds = v.InferOutput<typeof GetHrisLegalEntitiesParameterRemoteIds>;
export const GetHrisLegalEntitiesParameterRemoteIds = v.string();

export type GetHrisLegalEntitiesParameterNameContains = v.InferOutput<typeof GetHrisLegalEntitiesParameterNameContains>;
export const GetHrisLegalEntitiesParameterNameContains = v.string();

export type GetHrisLegalEntitiesPositiveResponse = v.InferOutput<typeof GetHrisLegalEntitiesPositiveResponse>;
export const GetHrisLegalEntitiesPositiveResponse = v.object({ status: v.string(), data: v.object({ next: v.nullable(v.string()), results: v.array(v.object({ id: v.string(), remote_id: v.nullable(v.string()), name: v.nullable(v.string()), address: v.optional(v.nullable(v.partial(v.object({ city: v.nullable(v.string()), country: v.nullable(v.string()), raw: v.nullable(v.string()), state: v.nullable(v.string()), street_1: v.nullable(v.string()), street_2: v.nullable(v.string()), zip_code: v.nullable(v.string()) })))), changed_at: v.string(), remote_deleted_at: v.nullable(v.string()), remote_data: v.nullable(v.record(v.string(), v.unknown())) })) }) });

export type GetHrisTimesheetsParameterCursor = v.InferOutput<typeof GetHrisTimesheetsParameterCursor>;
export const GetHrisTimesheetsParameterCursor = v.string();

export type GetHrisTimesheetsParameterPageSize = v.InferOutput<typeof GetHrisTimesheetsParameterPageSize>;
export const GetHrisTimesheetsParameterPageSize = v.optional(v.pipe(v.number(), v.integer(), v.minValue(1), v.maxValue(250)), 100);

export type GetHrisTimesheetsParameterUpdatedAfter = v.InferOutput<typeof GetHrisTimesheetsParameterUpdatedAfter>;
export const GetHrisTimesheetsParameterUpdatedAfter = v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));

export type GetHrisTimesheetsParameterIncludeDeleted = v.InferOutput<typeof GetHrisTimesheetsParameterIncludeDeleted>;
export const GetHrisTimesheetsParameterIncludeDeleted = v.optional(v.picklist(["true", "false"]), "false");

export type GetHrisTimesheetsParameterIgnoreUnsupportedFilters = v.InferOutput<typeof GetHrisTimesheetsParameterIgnoreUnsupportedFilters>;
export const GetHrisTimesheetsParameterIgnoreUnsupportedFilters = v.optional(v.picklist(["true", "false"]), "false");

export type GetHrisTimesheetsParameterIds = v.InferOutput<typeof GetHrisTimesheetsParameterIds>;
export const GetHrisTimesheetsParameterIds = v.string();

export type GetHrisTimesheetsParameterRemoteIds = v.InferOutput<typeof GetHrisTimesheetsParameterRemoteIds>;
export const GetHrisTimesheetsParameterRemoteIds = v.string();

export type GetHrisTimesheetsParameterEmployeeId = v.InferOutput<typeof GetHrisTimesheetsParameterEmployeeId>;
export const GetHrisTimesheetsParameterEmployeeId = v.string();

export type GetHrisTimesheetsParameterStartedBefore = v.InferOutput<typeof GetHrisTimesheetsParameterStartedBefore>;
export const GetHrisTimesheetsParameterStartedBefore = v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));

export type GetHrisTimesheetsParameterStartedAfter = v.InferOutput<typeof GetHrisTimesheetsParameterStartedAfter>;
export const GetHrisTimesheetsParameterStartedAfter = v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));

export type GetHrisTimesheetsParameterEndedBefore = v.InferOutput<typeof GetHrisTimesheetsParameterEndedBefore>;
export const GetHrisTimesheetsParameterEndedBefore = v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));

export type GetHrisTimesheetsParameterEndedAfter = v.InferOutput<typeof GetHrisTimesheetsParameterEndedAfter>;
export const GetHrisTimesheetsParameterEndedAfter = v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));

export type GetHrisTimesheetsPositiveResponse = v.InferOutput<typeof GetHrisTimesheetsPositiveResponse>;
export const GetHrisTimesheetsPositiveResponse = v.object({ status: v.string(), data: v.object({ next: v.nullable(v.string()), results: v.array(v.object({ id: v.string(), remote_id: v.nullable(v.string()), employee_id: v.string(), started_at: v.nullable(v.string()), ended_at: v.nullable(v.string()), timezone: v.nullable(v.pipe(v.string(), v.regex(new RegExp("^[+-](?:0\\d|1[0-4]):[0-5]\\d$")))), payable_hours: v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))), unpaid_break_minutes: v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))), breaks: v.optional(v.nullable(v.array(v.object({ ended_at: v.union([v.string(), v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")))]), paid: v.boolean(), started_at: v.union([v.string(), v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")))]) })))), approval_status: v.nullable(v.string()), approved_at: v.nullable(v.string()), comment: v.nullable(v.string()), custom_fields: v.nullable(v.record(v.string(), v.unknown())), integration_fields: v.array(v.object({ id: v.string(), key: v.string(), type: v.picklist(["DEFAULT", "CUSTOM"]), value: v.optional(v.null()), label: v.nullable(v.string()) })), changed_at: v.string(), remote_deleted_at: v.nullable(v.string()), remote_data: v.nullable(v.record(v.string(), v.unknown())) })) }) });

export type GetHrisPerformanceReviewCyclesParameterCursor = v.InferOutput<typeof GetHrisPerformanceReviewCyclesParameterCursor>;
export const GetHrisPerformanceReviewCyclesParameterCursor = v.string();

export type GetHrisPerformanceReviewCyclesParameterPageSize = v.InferOutput<typeof GetHrisPerformanceReviewCyclesParameterPageSize>;
export const GetHrisPerformanceReviewCyclesParameterPageSize = v.optional(v.pipe(v.number(), v.integer(), v.minValue(1), v.maxValue(250)), 100);

export type GetHrisPerformanceReviewCyclesParameterUpdatedAfter = v.InferOutput<typeof GetHrisPerformanceReviewCyclesParameterUpdatedAfter>;
export const GetHrisPerformanceReviewCyclesParameterUpdatedAfter = v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));

export type GetHrisPerformanceReviewCyclesParameterIncludeDeleted = v.InferOutput<typeof GetHrisPerformanceReviewCyclesParameterIncludeDeleted>;
export const GetHrisPerformanceReviewCyclesParameterIncludeDeleted = v.optional(v.picklist(["true", "false"]), "false");

export type GetHrisPerformanceReviewCyclesParameterIgnoreUnsupportedFilters = v.InferOutput<typeof GetHrisPerformanceReviewCyclesParameterIgnoreUnsupportedFilters>;
export const GetHrisPerformanceReviewCyclesParameterIgnoreUnsupportedFilters = v.optional(v.picklist(["true", "false"]), "false");

export type GetHrisPerformanceReviewCyclesParameterIds = v.InferOutput<typeof GetHrisPerformanceReviewCyclesParameterIds>;
export const GetHrisPerformanceReviewCyclesParameterIds = v.string();

export type GetHrisPerformanceReviewCyclesParameterRemoteIds = v.InferOutput<typeof GetHrisPerformanceReviewCyclesParameterRemoteIds>;
export const GetHrisPerformanceReviewCyclesParameterRemoteIds = v.string();

export type GetHrisPerformanceReviewCyclesPositiveResponse = v.InferOutput<typeof GetHrisPerformanceReviewCyclesPositiveResponse>;
export const GetHrisPerformanceReviewCyclesPositiveResponse = v.object({ status: v.string(), data: v.object({ next: v.nullable(v.string()), results: v.array(v.object({ id: v.string(), remote_id: v.string(), name: v.nullable(v.string()), review_period_start_date: v.nullable(v.string()), changed_at: v.string(), remote_deleted_at: v.nullable(v.string()), remote_data: v.nullable(v.record(v.string(), v.unknown())) })) }) });

export type GetHrisPerformanceReviewsParameterCursor = v.InferOutput<typeof GetHrisPerformanceReviewsParameterCursor>;
export const GetHrisPerformanceReviewsParameterCursor = v.string();

export type GetHrisPerformanceReviewsParameterPageSize = v.InferOutput<typeof GetHrisPerformanceReviewsParameterPageSize>;
export const GetHrisPerformanceReviewsParameterPageSize = v.optional(v.pipe(v.number(), v.integer(), v.minValue(1), v.maxValue(250)), 100);

export type GetHrisPerformanceReviewsParameterUpdatedAfter = v.InferOutput<typeof GetHrisPerformanceReviewsParameterUpdatedAfter>;
export const GetHrisPerformanceReviewsParameterUpdatedAfter = v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));

export type GetHrisPerformanceReviewsParameterIncludeDeleted = v.InferOutput<typeof GetHrisPerformanceReviewsParameterIncludeDeleted>;
export const GetHrisPerformanceReviewsParameterIncludeDeleted = v.optional(v.picklist(["true", "false"]), "false");

export type GetHrisPerformanceReviewsParameterIgnoreUnsupportedFilters = v.InferOutput<typeof GetHrisPerformanceReviewsParameterIgnoreUnsupportedFilters>;
export const GetHrisPerformanceReviewsParameterIgnoreUnsupportedFilters = v.optional(v.picklist(["true", "false"]), "false");

export type GetHrisPerformanceReviewsParameterIds = v.InferOutput<typeof GetHrisPerformanceReviewsParameterIds>;
export const GetHrisPerformanceReviewsParameterIds = v.string();

export type GetHrisPerformanceReviewsParameterRemoteIds = v.InferOutput<typeof GetHrisPerformanceReviewsParameterRemoteIds>;
export const GetHrisPerformanceReviewsParameterRemoteIds = v.string();

export type GetHrisPerformanceReviewsParameterTypes = v.InferOutput<typeof GetHrisPerformanceReviewsParameterTypes>;
export const GetHrisPerformanceReviewsParameterTypes = v.string();

export type GetHrisPerformanceReviewsParameterReviewCycleIds = v.InferOutput<typeof GetHrisPerformanceReviewsParameterReviewCycleIds>;
export const GetHrisPerformanceReviewsParameterReviewCycleIds = v.string();

export type GetHrisPerformanceReviewsParameterRevieweeIds = v.InferOutput<typeof GetHrisPerformanceReviewsParameterRevieweeIds>;
export const GetHrisPerformanceReviewsParameterRevieweeIds = v.string();

export type GetHrisPerformanceReviewsPositiveResponse = v.InferOutput<typeof GetHrisPerformanceReviewsPositiveResponse>;
export const GetHrisPerformanceReviewsPositiveResponse = v.object({ status: v.string(), data: v.object({ next: v.nullable(v.string()), results: v.array(v.object({ id: v.string(), remote_id: v.string(), type: v.nullable(v.picklist(["MANAGER", "DIRECT_REPORT", "PEER", "SELF"])), summary_comment: v.nullable(v.string()), summary_rating: v.optional(v.union([v.object({ type: v.string(), min: v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))), max: v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))), value: v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))) }), v.object({ type: v.string(), ordered_options: v.nullable(v.array(v.string())), value: v.nullable(v.string()) }), v.null()])), changed_at: v.string(), remote_deleted_at: v.nullable(v.string()), remote_data: v.nullable(v.record(v.string(), v.unknown())), reviewee: v.object({ id: v.string(), remote_id: v.string(), first_name: v.nullable(v.string()), last_name: v.nullable(v.string()), display_full_name: v.nullable(v.string()), work_email: v.optional(v.nullable(v.pipe(v.string(), v.regex(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$"))))), remote_deleted_at: v.nullable(v.string()) }), reviewer: v.nullable(v.object({ id: v.string(), remote_id: v.string(), first_name: v.nullable(v.string()), last_name: v.nullable(v.string()), display_full_name: v.nullable(v.string()), work_email: v.optional(v.nullable(v.pipe(v.string(), v.regex(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$"))))), remote_deleted_at: v.nullable(v.string()) })), review_cycle: v.nullable(v.object({ id: v.string(), remote_id: v.string(), name: v.nullable(v.string()), review_period_start_date: v.nullable(v.string()), changed_at: v.string(), remote_deleted_at: v.nullable(v.string()), remote_data: v.nullable(v.record(v.string(), v.unknown())) })) })) }) });

export type GetHrisSkillsParameterIds = v.InferOutput<typeof GetHrisSkillsParameterIds>;
export const GetHrisSkillsParameterIds = v.string();

export type GetHrisSkillsParameterRemoteIds = v.InferOutput<typeof GetHrisSkillsParameterRemoteIds>;
export const GetHrisSkillsParameterRemoteIds = v.string();

export type GetHrisSkillsParameterNameContains = v.InferOutput<typeof GetHrisSkillsParameterNameContains>;
export const GetHrisSkillsParameterNameContains = v.string();

export type GetHrisSkillsPositiveResponse = v.InferOutput<typeof GetHrisSkillsPositiveResponse>;
export const GetHrisSkillsPositiveResponse = v.object({ status: v.string(), data: v.object({ next: v.nullable(v.string()), results: v.array(v.object({ id: v.string(), remote_id: v.string(), name: v.string(), description: v.nullable(v.string()), ordered_levels: v.nullable(v.array(v.string())), changed_at: v.string(), remote_deleted_at: v.nullable(v.string()), remote_data: v.nullable(v.record(v.string(), v.unknown())) })) }) });

export type PostHrisSkillsPositiveResponse = v.InferOutput<typeof PostHrisSkillsPositiveResponse>;
export const PostHrisSkillsPositiveResponse = v.object({ status: v.string(), data: v.object({ id: v.string(), remote_id: v.string(), name: v.string(), description: v.nullable(v.string()), ordered_levels: v.nullable(v.array(v.string())), changed_at: v.string(), remote_deleted_at: v.nullable(v.string()), remote_data: v.nullable(v.record(v.string(), v.unknown())) }) });

export type PostHrisSkillsRequestBody = v.InferOutput<typeof PostHrisSkillsRequestBody>;
export const PostHrisSkillsRequestBody = v.object({ name: v.string(), levels: v.optional(v.array(v.string())) });

export type PatchHrisSkillsSkillIdParameterSkillId = v.InferOutput<typeof PatchHrisSkillsSkillIdParameterSkillId>;
export const PatchHrisSkillsSkillIdParameterSkillId = v.string();

export type PatchHrisSkillsSkillIdPositiveResponse = v.InferOutput<typeof PatchHrisSkillsSkillIdPositiveResponse>;
export const PatchHrisSkillsSkillIdPositiveResponse = v.object({ status: v.string(), data: v.object({ id: v.string(), remote_id: v.string(), name: v.string(), description: v.nullable(v.string()), ordered_levels: v.nullable(v.array(v.string())), changed_at: v.string(), remote_deleted_at: v.nullable(v.string()), remote_data: v.nullable(v.record(v.string(), v.unknown())) }) });

export type PatchHrisSkillsSkillIdRequestBody = v.InferOutput<typeof PatchHrisSkillsSkillIdRequestBody>;
export const PatchHrisSkillsSkillIdRequestBody = v.partial(v.object({ name: v.string(), levels: v.array(v.string()) }));

export type DeleteHrisSkillsSkillIdParameterSkillId = v.InferOutput<typeof DeleteHrisSkillsSkillIdParameterSkillId>;
export const DeleteHrisSkillsSkillIdParameterSkillId = v.string();

export type DeleteHrisSkillsSkillIdPositiveResponse = v.InferOutput<typeof DeleteHrisSkillsSkillIdPositiveResponse>;
export const DeleteHrisSkillsSkillIdPositiveResponse = v.object({ status: v.string(), data: v.object({ id: v.string(), remote_id: v.string(), name: v.string(), description: v.nullable(v.string()), ordered_levels: v.nullable(v.array(v.string())), changed_at: v.string(), remote_deleted_at: v.nullable(v.string()), remote_data: v.nullable(v.record(v.string(), v.unknown())) }) });

export type DeleteHrisSkillsSkillIdRequestBody = v.InferOutput<typeof DeleteHrisSkillsSkillIdRequestBody>;
export const DeleteHrisSkillsSkillIdRequestBody = v.partial(v.object({  }));

export type GetHrisEmployeeSkillAssignmentsParameterIds = v.InferOutput<typeof GetHrisEmployeeSkillAssignmentsParameterIds>;
export const GetHrisEmployeeSkillAssignmentsParameterIds = v.string();

export type GetHrisEmployeeSkillAssignmentsParameterRemoteIds = v.InferOutput<typeof GetHrisEmployeeSkillAssignmentsParameterRemoteIds>;
export const GetHrisEmployeeSkillAssignmentsParameterRemoteIds = v.string();

export type GetHrisEmployeeSkillAssignmentsParameterEmployeeIds = v.InferOutput<typeof GetHrisEmployeeSkillAssignmentsParameterEmployeeIds>;
export const GetHrisEmployeeSkillAssignmentsParameterEmployeeIds = v.string();

export type GetHrisEmployeeSkillAssignmentsParameterSkillIds = v.InferOutput<typeof GetHrisEmployeeSkillAssignmentsParameterSkillIds>;
export const GetHrisEmployeeSkillAssignmentsParameterSkillIds = v.string();

export type GetHrisEmployeeSkillAssignmentsPositiveResponse = v.InferOutput<typeof GetHrisEmployeeSkillAssignmentsPositiveResponse>;
export const GetHrisEmployeeSkillAssignmentsPositiveResponse = v.object({ status: v.string(), data: v.object({ next: v.nullable(v.string()), results: v.array(v.object({ id: v.string(), employee_id: v.string(), skill_id: v.string(), current_level: v.nullable(v.string()) })) }) });

export type PostHrisEmployeeSkillAssignmentsPositiveResponse = v.InferOutput<typeof PostHrisEmployeeSkillAssignmentsPositiveResponse>;
export const PostHrisEmployeeSkillAssignmentsPositiveResponse = v.object({ status: v.string(), data: v.object({ id: v.string(), employee_id: v.string(), skill_id: v.string(), current_level: v.nullable(v.string()) }) });

export type PostHrisEmployeeSkillAssignmentsRequestBody = v.InferOutput<typeof PostHrisEmployeeSkillAssignmentsRequestBody>;
export const PostHrisEmployeeSkillAssignmentsRequestBody = v.object({ employee_id: v.string(), skill_id: v.string(), current_level: v.optional(v.string()) });

export type PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId = v.InferOutput<typeof PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId>;
export const PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId = v.string();

export type PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse = v.InferOutput<typeof PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse>;
export const PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse = v.object({ status: v.string(), data: v.object({ id: v.string(), employee_id: v.string(), skill_id: v.string(), current_level: v.nullable(v.string()) }) });

export type PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody = v.InferOutput<typeof PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody>;
export const PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody = v.object({ current_level: v.nullable(v.string()) });

export type DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId = v.InferOutput<typeof DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId>;
export const DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId = v.string();

export type DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse = v.InferOutput<typeof DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse>;
export const DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse = v.object({ status: v.string(), data: v.object({ id: v.string(), employee_id: v.string(), skill_id: v.string(), current_level: v.nullable(v.string()) }) });

export type DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody = v.InferOutput<typeof DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody>;
export const DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody = v.partial(v.object({  }));

export type GetHrisStaffingEntitiesParameterCursor = v.InferOutput<typeof GetHrisStaffingEntitiesParameterCursor>;
export const GetHrisStaffingEntitiesParameterCursor = v.string();

export type GetHrisStaffingEntitiesParameterPageSize = v.InferOutput<typeof GetHrisStaffingEntitiesParameterPageSize>;
export const GetHrisStaffingEntitiesParameterPageSize = v.optional(v.pipe(v.number(), v.integer(), v.minValue(1), v.maxValue(250)), 100);

export type GetHrisStaffingEntitiesParameterUpdatedAfter = v.InferOutput<typeof GetHrisStaffingEntitiesParameterUpdatedAfter>;
export const GetHrisStaffingEntitiesParameterUpdatedAfter = v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));

export type GetHrisStaffingEntitiesParameterIncludeDeleted = v.InferOutput<typeof GetHrisStaffingEntitiesParameterIncludeDeleted>;
export const GetHrisStaffingEntitiesParameterIncludeDeleted = v.optional(v.picklist(["true", "false"]), "false");

export type GetHrisStaffingEntitiesParameterIgnoreUnsupportedFilters = v.InferOutput<typeof GetHrisStaffingEntitiesParameterIgnoreUnsupportedFilters>;
export const GetHrisStaffingEntitiesParameterIgnoreUnsupportedFilters = v.optional(v.picklist(["true", "false"]), "false");

export type GetHrisStaffingEntitiesParameterIds = v.InferOutput<typeof GetHrisStaffingEntitiesParameterIds>;
export const GetHrisStaffingEntitiesParameterIds = v.string();

export type GetHrisStaffingEntitiesParameterRemoteIds = v.InferOutput<typeof GetHrisStaffingEntitiesParameterRemoteIds>;
export const GetHrisStaffingEntitiesParameterRemoteIds = v.string();

export type GetHrisStaffingEntitiesParameterModelTypes = v.InferOutput<typeof GetHrisStaffingEntitiesParameterModelTypes>;
export const GetHrisStaffingEntitiesParameterModelTypes = v.string();

export type GetHrisStaffingEntitiesParameterStatuses = v.InferOutput<typeof GetHrisStaffingEntitiesParameterStatuses>;
export const GetHrisStaffingEntitiesParameterStatuses = v.string();

export type GetHrisStaffingEntitiesPositiveResponse = v.InferOutput<typeof GetHrisStaffingEntitiesPositiveResponse>;
export const GetHrisStaffingEntitiesPositiveResponse = v.object({ status: v.string(), data: v.object({ next: v.nullable(v.string()), results: v.array(v.object({ id: v.string(), remote_id: v.string(), name: v.nullable(v.string()), model_type: v.nullable(v.picklist(["JOB", "POSITION", "REQUISITION"])), description: v.nullable(v.string()), status: v.nullable(v.picklist(["OPEN_LIMITED", "OPEN_UNLIMITED", "PENDING", "FROZEN", "FILLED", "CLOSED"])), employment_types: v.optional(v.nullable(v.array(v.object({ remote_label: v.string(), unified_type: v.nullable(v.picklist(["FULL_TIME", "PART_TIME", "CONTRACT", "INTERNSHIP", "FREELANCE", "WORKING_STUDENT", "APPRENTICESHIP", "TRAINING"])) })))), number_of_openings: v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))), parent_id: v.nullable(v.string()), remote_url: v.nullable(v.pipe(v.string(), v.url())), remote_created_at: v.nullable(v.string()), remote_updated_at: v.nullable(v.string()), changed_at: v.string(), remote_deleted_at: v.nullable(v.string()), custom_fields: v.nullable(v.record(v.string(), v.unknown())), integration_fields: v.array(v.object({ id: v.string(), key: v.string(), type: v.picklist(["DEFAULT", "CUSTOM"]), value: v.optional(v.null()), label: v.nullable(v.string()) })), remote_data: v.nullable(v.record(v.string(), v.unknown())), locations: v.array(v.object({ id: v.string(), remote_id: v.nullable(v.string()), name: v.nullable(v.string()), type: v.nullable(v.string()) })), legal_entities: v.array(v.object({ id: v.string(), remote_id: v.nullable(v.string()), name: v.nullable(v.string()) })), groups: v.array(v.object({ id: v.string(), remote_id: v.string(), name: v.nullable(v.string()), type: v.nullable(v.picklist(["DEPARTMENT", "TEAM", "COST_CENTER"])) })) })) }) });

export type GetAtsApplicationsParameterCursor = v.InferOutput<typeof GetAtsApplicationsParameterCursor>;
export const GetAtsApplicationsParameterCursor = v.string();

export type GetAtsApplicationsParameterPageSize = v.InferOutput<typeof GetAtsApplicationsParameterPageSize>;
export const GetAtsApplicationsParameterPageSize = v.optional(v.pipe(v.number(), v.integer(), v.minValue(1), v.maxValue(250)), 100);

export type GetAtsApplicationsParameterUpdatedAfter = v.InferOutput<typeof GetAtsApplicationsParameterUpdatedAfter>;
export const GetAtsApplicationsParameterUpdatedAfter = v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));

export type GetAtsApplicationsParameterIncludeDeleted = v.InferOutput<typeof GetAtsApplicationsParameterIncludeDeleted>;
export const GetAtsApplicationsParameterIncludeDeleted = v.optional(v.picklist(["true", "false"]), "false");

export type GetAtsApplicationsParameterIgnoreUnsupportedFilters = v.InferOutput<typeof GetAtsApplicationsParameterIgnoreUnsupportedFilters>;
export const GetAtsApplicationsParameterIgnoreUnsupportedFilters = v.optional(v.picklist(["true", "false"]), "false");

export type GetAtsApplicationsParameterIds = v.InferOutput<typeof GetAtsApplicationsParameterIds>;
export const GetAtsApplicationsParameterIds = v.string();

export type GetAtsApplicationsParameterRemoteIds = v.InferOutput<typeof GetAtsApplicationsParameterRemoteIds>;
export const GetAtsApplicationsParameterRemoteIds = v.string();

export type GetAtsApplicationsParameterOutcome = v.InferOutput<typeof GetAtsApplicationsParameterOutcome>;
export const GetAtsApplicationsParameterOutcome = v.picklist(["PENDING", "HIRED", "DECLINED"]);

export type GetAtsApplicationsParameterOutcomes = v.InferOutput<typeof GetAtsApplicationsParameterOutcomes>;
export const GetAtsApplicationsParameterOutcomes = v.string();

export type GetAtsApplicationsParameterJobIds = v.InferOutput<typeof GetAtsApplicationsParameterJobIds>;
export const GetAtsApplicationsParameterJobIds = v.string();

export type GetAtsApplicationsParameterJobRemoteIds = v.InferOutput<typeof GetAtsApplicationsParameterJobRemoteIds>;
export const GetAtsApplicationsParameterJobRemoteIds = v.string();

export type GetAtsApplicationsParameterCurrentStageIds = v.InferOutput<typeof GetAtsApplicationsParameterCurrentStageIds>;
export const GetAtsApplicationsParameterCurrentStageIds = v.string();

export type GetAtsApplicationsParameterRemoteCreatedAfter = v.InferOutput<typeof GetAtsApplicationsParameterRemoteCreatedAfter>;
export const GetAtsApplicationsParameterRemoteCreatedAfter = v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));

export type GetAtsApplicationsPositiveResponse = v.InferOutput<typeof GetAtsApplicationsPositiveResponse>;
export const GetAtsApplicationsPositiveResponse = v.object({ status: v.string(), data: v.object({ next: v.nullable(v.string()), results: v.array(v.object({ id: v.string(), remote_id: v.nullable(v.string()), outcome: v.nullable(v.picklist(["PENDING", "HIRED", "DECLINED"])), rejection_reason_name: v.nullable(v.string()), rejected_at: v.nullable(v.string()), current_stage_id: v.nullable(v.string()), job_id: v.nullable(v.string()), candidate_id: v.nullable(v.string()), screening_question_answers: v.optional(v.nullable(v.optional(v.array(v.union([v.object({ answer: v.object({ content: v.nullable(v.string()) }), question: v.object({ remote_id: v.nullable(v.string()), title: v.string(), type: v.string() }) }), v.object({ answer: v.object({ choice: v.nullable(v.string()) }), question: v.object({ remote_id: v.nullable(v.string()), title: v.string(), type: v.string() }) }), v.object({ answer: v.partial(v.object({ choices: v.optional(v.array(v.string()), []) })), question: v.object({ remote_id: v.nullable(v.string()), title: v.string(), type: v.string() }) }), v.object({ answer: v.object({ checked: v.nullable(v.boolean()) }), question: v.object({ remote_id: v.nullable(v.string()), title: v.string(), type: v.string() }) }), v.object({ answer: v.object({ number: v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))) }), question: v.object({ remote_id: v.nullable(v.string()), title: v.string(), type: v.string() }) }), v.object({ answer: v.object({ date: v.nullable(v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")))) }), question: v.object({ remote_id: v.nullable(v.string()), title: v.string(), type: v.string() }) }), v.object({ answer: v.partial(v.object({ raw: v.null() })), question: v.object({ remote_id: v.nullable(v.string()), title: v.string(), type: v.string() }) })])), [])), []), custom_fields: v.nullable(v.record(v.string(), v.unknown())), integration_fields: v.array(v.object({ id: v.string(), key: v.string(), type: v.picklist(["DEFAULT", "CUSTOM"]), value: v.optional(v.null()), label: v.nullable(v.string()) })), remote_url: v.nullable(v.pipe(v.string(), v.url())), changed_at: v.string(), remote_deleted_at: v.nullable(v.string()), remote_created_at: v.nullable(v.string()), remote_updated_at: v.nullable(v.string()), remote_data: v.nullable(v.record(v.string(), v.unknown())), candidate: v.nullable(v.object({ id: v.string(), remote_id: v.string(), first_name: v.nullable(v.string()), last_name: v.nullable(v.string()), email_addresses: v.optional(v.nullable(v.optional(v.array(v.object({ email_address: v.optional(v.nullable(v.pipe(v.string(), v.regex(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$"))))), type: v.nullable(v.string()) })), [])), []), phone_numbers: v.optional(v.nullable(v.optional(v.array(v.object({ phone_number: v.string(), type: v.optional(v.nullable(v.string())) })), [])), []), social_media: v.optional(v.nullable(v.optional(v.array(v.partial(v.object({ link: v.nullable(v.string()), type: v.nullable(v.string()), username: v.nullable(v.string()) }))), [])), []), source: v.nullable(v.string()), remote_url: v.nullable(v.pipe(v.string(), v.url())), tags: v.array(v.object({ id: v.string(), remote_id: v.nullable(v.string()), name: v.nullable(v.string()) })) })), current_stage: v.nullable(v.object({ id: v.string(), remote_id: v.nullable(v.string()), name: v.nullable(v.string()), index: v.nullable(v.pipe(v.number(), v.integer())) })), job: v.nullable(v.object({ id: v.string(), remote_id: v.string(), name: v.nullable(v.string()) })), interviews: v.array(v.object({ id: v.string(), remote_id: v.nullable(v.string()), title: v.nullable(v.string()), starting_at: v.nullable(v.string()), ending_at: v.nullable(v.string()), location: v.optional(v.nullable(v.partial(v.object({ city: v.nullable(v.string()), country: v.nullable(v.string()), raw: v.nullable(v.string()), state: v.nullable(v.string()), street_1: v.nullable(v.string()), street_2: v.nullable(v.string()), zip_code: v.nullable(v.string()) })))), canceled: v.nullable(v.boolean()) })), offers: v.array(v.object({ id: v.string(), remote_id: v.nullable(v.string()), status: v.nullable(v.picklist(["ACCEPTED", "DECLINED", "SENT", "APPROVED", "DRAFT", "ABANDONED"])) })) })) }) });

export type PutAtsApplicationsApplicationIdStageParameterApplicationId = v.InferOutput<typeof PutAtsApplicationsApplicationIdStageParameterApplicationId>;
export const PutAtsApplicationsApplicationIdStageParameterApplicationId = v.string();

export type PutAtsApplicationsApplicationIdStagePositiveResponse = v.InferOutput<typeof PutAtsApplicationsApplicationIdStagePositiveResponse>;
export const PutAtsApplicationsApplicationIdStagePositiveResponse = v.object({ status: v.string(), data: v.record(v.string(), v.unknown()), warnings: v.array(v.object({ message: v.string() })) });

export type PutAtsApplicationsApplicationIdStageRequestBody = v.InferOutput<typeof PutAtsApplicationsApplicationIdStageRequestBody>;
export const PutAtsApplicationsApplicationIdStageRequestBody = v.object({ stage_id: v.string(), remote_fields: v.optional(v.intersect([v.partial(v.object({ workday: v.partial(v.object({ Workflow_Step_ID: v.string(), Step_Type: v.picklist(["Next_Step_Reference", "Disposition_Step_Reference"]) })) })), v.partial(v.object({ greenhouse: v.partial(v.object({ post_headers: v.partial(v.object({ "On-Behalf-Of": v.nullable(v.string()) })) })), workable: v.partial(v.object({ on_behalf_of_user_remote_id: v.string() })) }))])) });

export type PostAtsApplicationsApplicationIdResultLinksParameterApplicationId = v.InferOutput<typeof PostAtsApplicationsApplicationIdResultLinksParameterApplicationId>;
export const PostAtsApplicationsApplicationIdResultLinksParameterApplicationId = v.string();

export type PostAtsApplicationsApplicationIdResultLinksPositiveResponse = v.InferOutput<typeof PostAtsApplicationsApplicationIdResultLinksPositiveResponse>;
export const PostAtsApplicationsApplicationIdResultLinksPositiveResponse = v.object({ status: v.string(), data: v.record(v.string(), v.unknown()), warnings: v.array(v.object({ message: v.string() })) });

export type PostAtsApplicationsApplicationIdResultLinksRequestBody = v.InferOutput<typeof PostAtsApplicationsApplicationIdResultLinksRequestBody>;
export const PostAtsApplicationsApplicationIdResultLinksRequestBody = v.object({ label: v.string(), url: v.pipe(v.string(), v.url()), details: v.optional(v.object({ custom_field_name_prefix: v.string(), attributes: v.array(v.object({ key: v.string(), value: v.string() })) })), remote_fields: v.optional(v.intersect([v.partial(v.object({ icims: v.partial(v.object({ assessment_package_id: v.string() })), oracle: v.partial(v.object({ override_document_category: v.picklist(["IRC_CANDIDATE_RESUME", "IRC_CANDIDATE_COVERLETTER", "MISC", "IRC_INTERNAL"]), multi_post_to_all_current_applications: v.boolean() })) })), v.partial(v.object({ greenhouse: v.partial(v.object({ post_headers: v.partial(v.object({ "On-Behalf-Of": v.nullable(v.string()) })) })), workable: v.partial(v.object({ on_behalf_of_user_remote_id: v.string() })) }))])) });

export type PostAtsApplicationsApplicationIdNotesParameterApplicationId = v.InferOutput<typeof PostAtsApplicationsApplicationIdNotesParameterApplicationId>;
export const PostAtsApplicationsApplicationIdNotesParameterApplicationId = v.string();

export type PostAtsApplicationsApplicationIdNotesPositiveResponse = v.InferOutput<typeof PostAtsApplicationsApplicationIdNotesPositiveResponse>;
export const PostAtsApplicationsApplicationIdNotesPositiveResponse = v.object({ status: v.string(), data: v.record(v.string(), v.unknown()), warnings: v.array(v.object({ message: v.string() })) });

export type PostAtsApplicationsApplicationIdNotesRequestBody = v.InferOutput<typeof PostAtsApplicationsApplicationIdNotesRequestBody>;
export const PostAtsApplicationsApplicationIdNotesRequestBody = v.object({ content: v.string(), content_type: v.literal("PLAIN_TEXT"), remote_fields: v.optional(v.intersect([v.partial(v.object({ teamtailor: v.partial(v.object({ user_id: v.string() })), greenhouse: v.partial(v.object({ visibility: v.picklist(["admin_only", "private", "public"]) })), recruitee: v.partial(v.object({ visibility: v.unknown(), is_json: v.boolean() })), bullhorn: v.partial(v.object({ action: v.string() })), lever: v.partial(v.object({ perform_as: v.string() })) })), v.partial(v.object({ greenhouse: v.partial(v.object({ post_headers: v.partial(v.object({ "On-Behalf-Of": v.nullable(v.string()) })) })), workable: v.partial(v.object({ on_behalf_of_user_remote_id: v.string() })) }))])) });

export type GetAtsApplicationsApplicationIdAttachmentsParameterApplicationId = v.InferOutput<typeof GetAtsApplicationsApplicationIdAttachmentsParameterApplicationId>;
export const GetAtsApplicationsApplicationIdAttachmentsParameterApplicationId = v.string();

export type GetAtsApplicationsApplicationIdAttachmentsPositiveResponse = v.InferOutput<typeof GetAtsApplicationsApplicationIdAttachmentsPositiveResponse>;
export const GetAtsApplicationsApplicationIdAttachmentsPositiveResponse = v.object({ status: v.string(), data: v.object({ results: v.array(v.object({ type: v.picklist(["CV", "COVER_LETTER", "OTHER"]), id: v.string(), remote_id: v.string(), data_url: v.string(), file_name: v.string(), content_type: v.string(), remote_created_at: v.nullable(v.string()), remote_updated_at: v.nullable(v.string()) })) }), warnings: v.array(v.object({ message: v.string() })) });

export type PostAtsApplicationsApplicationIdAttachmentsParameterApplicationId = v.InferOutput<typeof PostAtsApplicationsApplicationIdAttachmentsParameterApplicationId>;
export const PostAtsApplicationsApplicationIdAttachmentsParameterApplicationId = v.string();

export type PostAtsApplicationsApplicationIdAttachmentsPositiveResponse = v.InferOutput<typeof PostAtsApplicationsApplicationIdAttachmentsPositiveResponse>;
export const PostAtsApplicationsApplicationIdAttachmentsPositiveResponse = v.object({ status: v.string(), data: v.record(v.string(), v.unknown()), warnings: v.array(v.object({ message: v.string() })) });

export type PostAtsApplicationsApplicationIdAttachmentsRequestBody = v.InferOutput<typeof PostAtsApplicationsApplicationIdAttachmentsRequestBody>;
export const PostAtsApplicationsApplicationIdAttachmentsRequestBody = v.object({ attachment: v.object({ name: v.string(), content_type: v.optional(v.pipe(v.string(), v.regex(new RegExp("^[\\w.-]+\\/[\\w.-]+$")))), data_url: v.optional(v.pipe(v.string(), v.url())), data: v.optional(v.string()), type: v.picklist(["CV", "COVER_LETTER", "OTHER"]) }), remote_fields: v.optional(v.intersect([v.partial(v.object({ oracle: v.partial(v.object({ override_document_category: v.picklist(["IRC_CANDIDATE_RESUME", "IRC_CANDIDATE_COVERLETTER", "MISC", "IRC_INTERNAL"]), multi_post_to_all_current_applications: v.boolean() })) })), v.partial(v.object({ greenhouse: v.partial(v.object({ post_headers: v.partial(v.object({ "On-Behalf-Of": v.nullable(v.string()) })) })), workable: v.partial(v.object({ on_behalf_of_user_remote_id: v.string() })) }))])) });

export type PostAtsApplicationsApplicationIdRejectParameterApplicationId = v.InferOutput<typeof PostAtsApplicationsApplicationIdRejectParameterApplicationId>;
export const PostAtsApplicationsApplicationIdRejectParameterApplicationId = v.string();

export type PostAtsApplicationsApplicationIdRejectPositiveResponse = v.InferOutput<typeof PostAtsApplicationsApplicationIdRejectPositiveResponse>;
export const PostAtsApplicationsApplicationIdRejectPositiveResponse = v.object({ status: v.string(), data: v.record(v.string(), v.unknown()), warnings: v.array(v.object({ message: v.string() })) });

export type PostAtsApplicationsApplicationIdRejectRequestBody = v.InferOutput<typeof PostAtsApplicationsApplicationIdRejectRequestBody>;
export const PostAtsApplicationsApplicationIdRejectRequestBody = v.object({ rejection_reason_id: v.string(), note: v.optional(v.string()), remote_fields: v.optional(v.intersect([v.partial(v.object({ greenhouse: v.partial(v.object({ rejection_email: v.record(v.string(), v.unknown()) })), teamtailor: v.partial(v.object({ user_id: v.string() })) })), v.partial(v.object({ greenhouse: v.partial(v.object({ post_headers: v.partial(v.object({ "On-Behalf-Of": v.nullable(v.string()) })) })), workable: v.partial(v.object({ on_behalf_of_user_remote_id: v.string() })) }))])) });

export type PostAtsApplicationsApplicationIdInterviewsParameterApplicationId = v.InferOutput<typeof PostAtsApplicationsApplicationIdInterviewsParameterApplicationId>;
export const PostAtsApplicationsApplicationIdInterviewsParameterApplicationId = v.string();

export type PostAtsApplicationsApplicationIdInterviewsPositiveResponse = v.InferOutput<typeof PostAtsApplicationsApplicationIdInterviewsPositiveResponse>;
export const PostAtsApplicationsApplicationIdInterviewsPositiveResponse = v.object({ status: v.string(), data: v.record(v.string(), v.unknown()) });

export type PostAtsApplicationsApplicationIdInterviewsRequestBody = v.InferOutput<typeof PostAtsApplicationsApplicationIdInterviewsRequestBody>;
export const PostAtsApplicationsApplicationIdInterviewsRequestBody = v.object({ title: v.string(), start_time: v.string(), end_time: v.string(), interviewer_user_ids: v.array(v.string()), organizer_user_id: v.string(), location: v.object({ type: v.picklist(["PHYSICAL", "VIRTUAL"]), address: v.optional(v.string()) }) });

export type PatchAtsApplicationsApplicationIdInterviewsParameterApplicationId = v.InferOutput<typeof PatchAtsApplicationsApplicationIdInterviewsParameterApplicationId>;
export const PatchAtsApplicationsApplicationIdInterviewsParameterApplicationId = v.string();

export type PatchAtsApplicationsApplicationIdInterviewsPositiveResponse = v.InferOutput<typeof PatchAtsApplicationsApplicationIdInterviewsPositiveResponse>;
export const PatchAtsApplicationsApplicationIdInterviewsPositiveResponse = v.object({ status: v.string(), data: v.record(v.string(), v.unknown()) });

export type PatchAtsApplicationsApplicationIdInterviewsRequestBody = v.InferOutput<typeof PatchAtsApplicationsApplicationIdInterviewsRequestBody>;
export const PatchAtsApplicationsApplicationIdInterviewsRequestBody = v.object({ interview_id: v.string(), title: v.string(), start_time: v.string(), end_time: v.string(), interviewer_user_ids: v.array(v.string()), organizer_user_id: v.string(), location: v.object({ type: v.picklist(["PHYSICAL", "VIRTUAL"]), address: v.optional(v.string()) }) });

export type GetAtsCandidatesParameterCursor = v.InferOutput<typeof GetAtsCandidatesParameterCursor>;
export const GetAtsCandidatesParameterCursor = v.string();

export type GetAtsCandidatesParameterPageSize = v.InferOutput<typeof GetAtsCandidatesParameterPageSize>;
export const GetAtsCandidatesParameterPageSize = v.optional(v.pipe(v.number(), v.integer(), v.minValue(1), v.maxValue(250)), 100);

export type GetAtsCandidatesParameterUpdatedAfter = v.InferOutput<typeof GetAtsCandidatesParameterUpdatedAfter>;
export const GetAtsCandidatesParameterUpdatedAfter = v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));

export type GetAtsCandidatesParameterIncludeDeleted = v.InferOutput<typeof GetAtsCandidatesParameterIncludeDeleted>;
export const GetAtsCandidatesParameterIncludeDeleted = v.optional(v.picklist(["true", "false"]), "false");

export type GetAtsCandidatesParameterIgnoreUnsupportedFilters = v.InferOutput<typeof GetAtsCandidatesParameterIgnoreUnsupportedFilters>;
export const GetAtsCandidatesParameterIgnoreUnsupportedFilters = v.optional(v.picklist(["true", "false"]), "false");

export type GetAtsCandidatesParameterIds = v.InferOutput<typeof GetAtsCandidatesParameterIds>;
export const GetAtsCandidatesParameterIds = v.string();

export type GetAtsCandidatesParameterRemoteIds = v.InferOutput<typeof GetAtsCandidatesParameterRemoteIds>;
export const GetAtsCandidatesParameterRemoteIds = v.string();

export type GetAtsCandidatesParameterEmail = v.InferOutput<typeof GetAtsCandidatesParameterEmail>;
export const GetAtsCandidatesParameterEmail = v.pipe(v.string(), v.email());

export type GetAtsCandidatesParameterJobIds = v.InferOutput<typeof GetAtsCandidatesParameterJobIds>;
export const GetAtsCandidatesParameterJobIds = v.string();

export type GetAtsCandidatesParameterFirstName = v.InferOutput<typeof GetAtsCandidatesParameterFirstName>;
export const GetAtsCandidatesParameterFirstName = v.string();

export type GetAtsCandidatesParameterLastName = v.InferOutput<typeof GetAtsCandidatesParameterLastName>;
export const GetAtsCandidatesParameterLastName = v.string();

export type GetAtsCandidatesPositiveResponse = v.InferOutput<typeof GetAtsCandidatesPositiveResponse>;
export const GetAtsCandidatesPositiveResponse = v.object({ status: v.string(), data: v.object({ next: v.nullable(v.string()), results: v.array(v.object({ id: v.string(), remote_id: v.string(), first_name: v.nullable(v.string()), last_name: v.nullable(v.string()), company: v.nullable(v.string()), title: v.nullable(v.string()), confidential: v.nullable(v.boolean()), source: v.nullable(v.string()), phone_numbers: v.optional(v.nullable(v.optional(v.array(v.object({ phone_number: v.string(), type: v.optional(v.nullable(v.string())) })), [])), []), email_addresses: v.optional(v.nullable(v.optional(v.array(v.object({ email_address: v.optional(v.nullable(v.pipe(v.string(), v.regex(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$"))))), type: v.nullable(v.string()) })), [])), []), social_media: v.optional(v.nullable(v.optional(v.array(v.partial(v.object({ link: v.nullable(v.string()), type: v.nullable(v.string()), username: v.nullable(v.string()) }))), [])), []), location: v.optional(v.nullable(v.partial(v.object({ city: v.nullable(v.string()), country: v.nullable(v.string()), raw: v.nullable(v.string()), state: v.nullable(v.string()), street_1: v.nullable(v.string()), street_2: v.nullable(v.string()), zip_code: v.nullable(v.string()) })))), custom_fields: v.nullable(v.record(v.string(), v.unknown())), integration_fields: v.array(v.object({ id: v.string(), key: v.string(), type: v.picklist(["DEFAULT", "CUSTOM"]), value: v.optional(v.null()), label: v.nullable(v.string()) })), remote_url: v.nullable(v.pipe(v.string(), v.url())), remote_created_at: v.nullable(v.string()), remote_updated_at: v.nullable(v.string()), remote_data: v.nullable(v.record(v.string(), v.unknown())), changed_at: v.string(), remote_deleted_at: v.nullable(v.string()), applications: v.array(v.object({ id: v.string(), remote_id: v.nullable(v.string()), outcome: v.nullable(v.picklist(["PENDING", "HIRED", "DECLINED"])), rejection_reason_name: v.nullable(v.string()), rejected_at: v.nullable(v.string()), remote_url: v.nullable(v.pipe(v.string(), v.url())), changed_at: v.string(), remote_created_at: v.nullable(v.string()), remote_updated_at: v.nullable(v.string()), current_stage: v.nullable(v.object({ id: v.string(), name: v.nullable(v.string()), remote_id: v.nullable(v.string()), index: v.nullable(v.pipe(v.number(), v.integer())) })), job: v.nullable(v.object({ id: v.string(), name: v.nullable(v.string()), remote_id: v.string() })) })), tags: v.array(v.object({ id: v.string(), name: v.nullable(v.string()), remote_id: v.nullable(v.string()) })) })) }) });

export type PostAtsCandidatesPositiveResponse = v.InferOutput<typeof PostAtsCandidatesPositiveResponse>;
export const PostAtsCandidatesPositiveResponse = v.object({ status: v.string(), data: v.object({ id: v.string(), remote_id: v.string(), first_name: v.nullable(v.string()), last_name: v.nullable(v.string()), company: v.nullable(v.string()), title: v.nullable(v.string()), confidential: v.nullable(v.boolean()), source: v.nullable(v.string()), phone_numbers: v.optional(v.nullable(v.optional(v.array(v.object({ phone_number: v.string(), type: v.optional(v.nullable(v.string())) })), [])), []), email_addresses: v.optional(v.nullable(v.optional(v.array(v.object({ email_address: v.optional(v.nullable(v.pipe(v.string(), v.regex(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$"))))), type: v.nullable(v.string()) })), [])), []), social_media: v.optional(v.nullable(v.optional(v.array(v.partial(v.object({ link: v.nullable(v.string()), type: v.nullable(v.string()), username: v.nullable(v.string()) }))), [])), []), location: v.optional(v.nullable(v.partial(v.object({ city: v.nullable(v.string()), country: v.nullable(v.string()), raw: v.nullable(v.string()), state: v.nullable(v.string()), street_1: v.nullable(v.string()), street_2: v.nullable(v.string()), zip_code: v.nullable(v.string()) })))), custom_fields: v.nullable(v.record(v.string(), v.unknown())), integration_fields: v.array(v.object({ id: v.string(), key: v.string(), type: v.picklist(["DEFAULT", "CUSTOM"]), value: v.optional(v.null()), label: v.nullable(v.string()) })), remote_url: v.nullable(v.pipe(v.string(), v.url())), remote_created_at: v.nullable(v.string()), remote_updated_at: v.nullable(v.string()), remote_data: v.nullable(v.record(v.string(), v.unknown())), changed_at: v.string(), remote_deleted_at: v.nullable(v.string()), applications: v.array(v.object({ id: v.string(), remote_id: v.nullable(v.string()), outcome: v.nullable(v.picklist(["PENDING", "HIRED", "DECLINED"])), rejection_reason_name: v.nullable(v.string()), rejected_at: v.nullable(v.string()), remote_url: v.nullable(v.pipe(v.string(), v.url())), changed_at: v.string(), remote_created_at: v.nullable(v.string()), remote_updated_at: v.nullable(v.string()), current_stage: v.nullable(v.object({ id: v.string(), name: v.nullable(v.string()), remote_id: v.nullable(v.string()), index: v.nullable(v.pipe(v.number(), v.integer())) })), job: v.nullable(v.object({ id: v.string(), name: v.nullable(v.string()), remote_id: v.string() })) })), tags: v.array(v.object({ id: v.string(), name: v.nullable(v.string()), remote_id: v.nullable(v.string()) })) }), warnings: v.array(v.object({ message: v.string() })) });

export type PostAtsCandidatesRequestBody = v.InferOutput<typeof PostAtsCandidatesRequestBody>;
export const PostAtsCandidatesRequestBody = v.object({ candidate: v.object({ first_name: v.string(), last_name: v.string(), email_address: v.pipe(v.string(), v.email()), additional_email_addresses: v.optional(v.array(v.object({ type: v.picklist(["PERSONAL", "WORK", "OTHER"]), email_address: v.pipe(v.string(), v.email()) }))), company: v.optional(v.string()), title: v.optional(v.string()), phone_number: v.optional(v.string()), additional_phone_numbers: v.optional(v.array(v.object({ type: v.picklist(["PERSONAL", "WORK", "OTHER"]), phone_number: v.string() }))), location: v.optional(v.object({ city: v.optional(v.string()), country: v.pipe(v.string(), v.regex(new RegExp("^[A-Z]{2}$"))), state: v.optional(v.string()), street_1: v.optional(v.string()), zip_code: v.optional(v.string()) })), gender: v.optional(v.picklist(["MALE", "FEMALE", "OTHER"])), availability_date: v.optional(v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), salary_expectations: v.optional(v.object({ period: v.picklist(["MONTH", "YEAR"]), amount: v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)) })), social_links: v.optional(v.array(v.object({ url: v.pipe(v.string(), v.url()) })), []) }), application: v.object({ job_id: v.string(), stage_id: v.optional(v.string()) }), screening_question_answers: v.optional(v.array(v.object({ question_id: v.string(), answer: v.union([v.string(), v.boolean(), v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)), v.array(v.string()), v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))), v.object({ name: v.string(), content_type: v.optional(v.pipe(v.string(), v.regex(new RegExp("^[\\w.-]+\\/[\\w.-]+$")))), data_url: v.optional(v.pipe(v.string(), v.url())), data: v.optional(v.string()) })]) }))), attachments: v.optional(v.array(v.object({ name: v.string(), content_type: v.optional(v.pipe(v.string(), v.regex(new RegExp("^[\\w.-]+\\/[\\w.-]+$")))), data_url: v.optional(v.pipe(v.string(), v.url())), data: v.optional(v.string()), type: v.picklist(["CV", "COVER_LETTER", "OTHER"]) })), []), source: v.optional(v.partial(v.object({ name: v.string(), unified_key: v.string(), id: v.string() }))), sourced_by: v.optional(v.object({ user_id: v.string() })), gdpr_consent: v.optional(v.partial(v.object({ expires_at: v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))), given: v.boolean() }))), remote_fields: v.optional(v.intersect([v.partial(v.object({ successfactors: v.partial(v.object({ Candidate: v.record(v.string(), v.unknown()), JobApplication: v.record(v.string(), v.unknown()), copyJobApplicationAttachments: v.boolean(), update_existing_candidate: v.nullable(v.boolean()) })), personio: v.partial(v.object({ application: v.record(v.string(), v.unknown()) })), talentsoft: v.partial(v.object({ applicant: v.record(v.string(), v.unknown()), application: v.record(v.string(), v.unknown()) })), teamtailor: v.partial(v.object({ candidate: v.record(v.string(), v.unknown()), application: v.partial(v.object({ attributes: v.record(v.string(), v.unknown()) })) })), greenhouse: v.partial(v.object({ candidate: v.record(v.string(), v.unknown()), application: v.record(v.string(), v.unknown()) })), lever: v.partial(v.object({ candidate: v.record(v.string(), v.unknown()) })), workable: v.partial(v.object({ candidate: v.record(v.string(), v.unknown()) })), workday: v.partial(v.object({ Candidate_Data: v.partial(v.object({ Name_Detail_Data: v.partial(v.object({ Middle_Name: v.string(), Social_Suffix_Reference: v.object({ Predefined_Name_Component_ID: v.string() }) })), Language_Reference: v.object({ WID: v.string() }), Job_Application_Data: v.partial(v.object({ Job_Applied_To_Data: v.partial(v.object({ Global_Personal_Information_Data: v.partial(v.object({ Date_of_Birth: v.string() })) })), Resume_Data: v.partial(v.object({ Education_Data: v.array(v.partial(v.object({ School_Name: v.string(), First_Year_Attended: v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)), Last_Year_Attended: v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)), Field_of_Study_Reference: v.object({ WID: v.string() }), Degree_Reference: v.object({ WID: v.string() }), Grade_Average: v.string() }))), Skill_Data: v.array(v.partial(v.object({ Skill_Name: v.string() }))), Language_Data: v.array(v.partial(v.object({ Language_Reference: v.partial(v.object({ WID: v.string() })), Language: v.object({ Native: v.optional(v.boolean()), Language_Ability: v.array(v.partial(v.object({ Language_Ability_Data: v.partial(v.object({ Language_Proficiency_Reference: v.object({ WID: v.string() }), Language_Ability_Type_Reference: v.object({ WID: v.string() }) })) }))) }) }))), Experience_Data: v.array(v.object({ Company_Name: v.string(), Title: v.string(), Location: v.optional(v.string()), Start_Date: v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))), End_Date: v.optional(v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), Currently_Work_Here: v.optional(v.boolean()), Description: v.optional(v.string()) })) })) })), Contact_Data: v.partial(v.object({ Location_Data: v.partial(v.object({ Address_Line_1: v.string(), Address_Line_2: v.string(), Region_Subdivision_1: v.string(), Country_Region_Reference: v.object({ Country_Region_ID: v.string() }), Country_City_Reference: v.object({ WID: v.string() }) })) })), Worker_Reference: v.partial(v.object({ WID: v.string(), Employee_ID: v.string() })) })), Override_Source_Reference_WID: v.string() })), zohorecruit: v.partial(v.object({ candidate: v.record(v.string(), v.unknown()) })), bullhorn: v.partial(v.object({ candidate: v.record(v.string(), v.unknown()), job_submission: v.record(v.string(), v.unknown()) })), smartrecruiters: v.partial(v.object({ candidate_with_questions: v.record(v.string(), v.unknown()), candidate_without_questions: v.record(v.string(), v.unknown()), candidate: v.record(v.string(), v.unknown()), consent_decisions: v.partial(v.object({ SINGLE: v.boolean(), SMART_RECRUIT: v.boolean(), SMART_CRM: v.boolean(), SMART_MESSAGE_SMS: v.boolean(), SMART_MESSAGE_WHATSAPP: v.boolean() })) })), talentadore: v.partial(v.object({ applications: v.record(v.string(), v.unknown()) })), guidecom: v.partial(v.object({ candidate: v.record(v.string(), v.unknown()) })), dvinci: v.partial(v.object({ application: v.record(v.string(), v.unknown()), candidate: v.record(v.string(), v.unknown()) })), hrworks: v.partial(v.object({ jobApplication: v.record(v.string(), v.unknown()) })), jobylon: v.partial(v.object({ application: v.partial(v.object({ message: v.string() })) })), avature: v.partial(v.object({ workflow: v.partial(v.object({ step: v.object({ id: v.pipe(v.number(), v.integer()) }) })) })), recruitee: v.partial(v.object({ candidate: v.partial(v.object({ cover_letter_text: v.string() })) })), rexx: v.partial(v.object({ candidate: v.record(v.string(), v.unknown()) })), umantis: v.partial(v.object({ person: v.record(v.string(), v.unknown()) })), piloga: v.partial(v.object({ candidate: v.partial(v.object({ street: v.string() })) })), pinpoint: v.partial(v.object({ candidate: v.record(v.string(), v.unknown()) })), covetorest: v.partial(v.object({ candidate: v.partial(v.object({ mandant: v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)) })) })) })), v.partial(v.object({ greenhouse: v.partial(v.object({ post_headers: v.partial(v.object({ "On-Behalf-Of": v.nullable(v.string()) })) })), workable: v.partial(v.object({ on_behalf_of_user_remote_id: v.string() })) }))])) });

export type GetAtsCandidatesCandidateIdAttachmentsParameterCandidateId = v.InferOutput<typeof GetAtsCandidatesCandidateIdAttachmentsParameterCandidateId>;
export const GetAtsCandidatesCandidateIdAttachmentsParameterCandidateId = v.string();

export type GetAtsCandidatesCandidateIdAttachmentsPositiveResponse = v.InferOutput<typeof GetAtsCandidatesCandidateIdAttachmentsPositiveResponse>;
export const GetAtsCandidatesCandidateIdAttachmentsPositiveResponse = v.object({ status: v.string(), data: v.object({ results: v.array(v.object({ id: v.pipe(v.string(), v.minLength(24), v.maxLength(24), v.regex(new RegExp("^[1-9A-HJ-NP-Za-km-z]+$"))), application_id: v.nullable(v.pipe(v.string(), v.minLength(24), v.maxLength(24), v.regex(new RegExp("^[1-9A-HJ-NP-Za-km-z]+$")))), candidate_id: v.pipe(v.string(), v.minLength(24), v.maxLength(24), v.regex(new RegExp("^[1-9A-HJ-NP-Za-km-z]+$"))), type: v.picklist(["CV", "COVER_LETTER", "OTHER"]), remote_id: v.string(), data_url: v.string(), file_name: v.string(), content_type: v.string(), remote_created_at: v.nullable(v.string()), remote_updated_at: v.nullable(v.string()) })) }), warnings: v.array(v.object({ message: v.string() })) });

export type PostAtsCandidatesCandidateIdAttachmentsParameterCandidateId = v.InferOutput<typeof PostAtsCandidatesCandidateIdAttachmentsParameterCandidateId>;
export const PostAtsCandidatesCandidateIdAttachmentsParameterCandidateId = v.string();

export type PostAtsCandidatesCandidateIdAttachmentsPositiveResponse = v.InferOutput<typeof PostAtsCandidatesCandidateIdAttachmentsPositiveResponse>;
export const PostAtsCandidatesCandidateIdAttachmentsPositiveResponse = v.object({ status: v.string(), data: v.record(v.string(), v.unknown()), warnings: v.array(v.object({ message: v.string() })) });

export type PostAtsCandidatesCandidateIdAttachmentsRequestBody = v.InferOutput<typeof PostAtsCandidatesCandidateIdAttachmentsRequestBody>;
export const PostAtsCandidatesCandidateIdAttachmentsRequestBody = v.object({ attachment: v.object({ name: v.string(), content_type: v.optional(v.pipe(v.string(), v.regex(new RegExp("^[\\w.-]+\\/[\\w.-]+$")))), data_url: v.optional(v.pipe(v.string(), v.url())), data: v.optional(v.string()), type: v.picklist(["CV", "COVER_LETTER", "OTHER"]) }), remote_fields: v.optional(v.partial(v.object({ greenhouse: v.partial(v.object({ post_headers: v.partial(v.object({ "On-Behalf-Of": v.nullable(v.string()) })) })), workable: v.partial(v.object({ on_behalf_of_user_remote_id: v.string() })) }))) });

export type PostAtsCandidatesCandidateIdResultLinksParameterCandidateId = v.InferOutput<typeof PostAtsCandidatesCandidateIdResultLinksParameterCandidateId>;
export const PostAtsCandidatesCandidateIdResultLinksParameterCandidateId = v.string();

export type PostAtsCandidatesCandidateIdResultLinksPositiveResponse = v.InferOutput<typeof PostAtsCandidatesCandidateIdResultLinksPositiveResponse>;
export const PostAtsCandidatesCandidateIdResultLinksPositiveResponse = v.object({ status: v.string(), data: v.record(v.string(), v.unknown()), warnings: v.array(v.object({ message: v.string() })) });

export type PostAtsCandidatesCandidateIdResultLinksRequestBody = v.InferOutput<typeof PostAtsCandidatesCandidateIdResultLinksRequestBody>;
export const PostAtsCandidatesCandidateIdResultLinksRequestBody = v.object({ label: v.string(), url: v.pipe(v.string(), v.url()), details: v.optional(v.object({ custom_field_name_prefix: v.string(), attributes: v.array(v.object({ key: v.string(), value: v.string() })) })), remote_fields: v.optional(v.intersect([v.partial(v.object({ icims: v.partial(v.object({ assessment_package_id: v.string() })), oracle: v.partial(v.object({ override_document_category: v.picklist(["IRC_CANDIDATE_RESUME", "IRC_CANDIDATE_COVERLETTER", "MISC", "IRC_INTERNAL"]), multi_post_to_all_current_applications: v.boolean() })) })), v.partial(v.object({ greenhouse: v.partial(v.object({ post_headers: v.partial(v.object({ "On-Behalf-Of": v.nullable(v.string()) })) })), workable: v.partial(v.object({ on_behalf_of_user_remote_id: v.string() })) }))])) });

export type PostAtsCandidatesCandidateIdTagsParameterCandidateId = v.InferOutput<typeof PostAtsCandidatesCandidateIdTagsParameterCandidateId>;
export const PostAtsCandidatesCandidateIdTagsParameterCandidateId = v.string();

export type PostAtsCandidatesCandidateIdTagsPositiveResponse = v.InferOutput<typeof PostAtsCandidatesCandidateIdTagsPositiveResponse>;
export const PostAtsCandidatesCandidateIdTagsPositiveResponse = v.object({ status: v.string(), data: v.record(v.string(), v.unknown()), warnings: v.array(v.object({ message: v.string() })) });

export type PostAtsCandidatesCandidateIdTagsRequestBody = v.InferOutput<typeof PostAtsCandidatesCandidateIdTagsRequestBody>;
export const PostAtsCandidatesCandidateIdTagsRequestBody = v.object({ tag: v.object({ name: v.pipe(v.string(), v.minLength(1)) }), remote_fields: v.optional(v.partial(v.object({ greenhouse: v.partial(v.object({ post_headers: v.partial(v.object({ "On-Behalf-Of": v.nullable(v.string()) })) })), workable: v.partial(v.object({ on_behalf_of_user_remote_id: v.string() })) }))) });

export type DeleteAtsCandidatesCandidateIdTagsParameterCandidateId = v.InferOutput<typeof DeleteAtsCandidatesCandidateIdTagsParameterCandidateId>;
export const DeleteAtsCandidatesCandidateIdTagsParameterCandidateId = v.string();

export type DeleteAtsCandidatesCandidateIdTagsPositiveResponse = v.InferOutput<typeof DeleteAtsCandidatesCandidateIdTagsPositiveResponse>;
export const DeleteAtsCandidatesCandidateIdTagsPositiveResponse = v.object({ status: v.string(), data: v.record(v.string(), v.unknown()), warnings: v.array(v.object({ message: v.string() })) });

export type DeleteAtsCandidatesCandidateIdTagsRequestBody = v.InferOutput<typeof DeleteAtsCandidatesCandidateIdTagsRequestBody>;
export const DeleteAtsCandidatesCandidateIdTagsRequestBody = v.object({ tag: v.object({ name: v.string() }), remote_fields: v.optional(v.partial(v.object({ greenhouse: v.partial(v.object({ post_headers: v.partial(v.object({ "On-Behalf-Of": v.nullable(v.string()) })) })), workable: v.partial(v.object({ on_behalf_of_user_remote_id: v.string() })) }))) });

export type GetAtsTagsParameterCursor = v.InferOutput<typeof GetAtsTagsParameterCursor>;
export const GetAtsTagsParameterCursor = v.string();

export type GetAtsTagsParameterPageSize = v.InferOutput<typeof GetAtsTagsParameterPageSize>;
export const GetAtsTagsParameterPageSize = v.optional(v.pipe(v.number(), v.integer(), v.minValue(1), v.maxValue(250)), 100);

export type GetAtsTagsParameterUpdatedAfter = v.InferOutput<typeof GetAtsTagsParameterUpdatedAfter>;
export const GetAtsTagsParameterUpdatedAfter = v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));

export type GetAtsTagsParameterIncludeDeleted = v.InferOutput<typeof GetAtsTagsParameterIncludeDeleted>;
export const GetAtsTagsParameterIncludeDeleted = v.optional(v.picklist(["true", "false"]), "false");

export type GetAtsTagsParameterIgnoreUnsupportedFilters = v.InferOutput<typeof GetAtsTagsParameterIgnoreUnsupportedFilters>;
export const GetAtsTagsParameterIgnoreUnsupportedFilters = v.optional(v.picklist(["true", "false"]), "false");

export type GetAtsTagsParameterIds = v.InferOutput<typeof GetAtsTagsParameterIds>;
export const GetAtsTagsParameterIds = v.string();

export type GetAtsTagsParameterRemoteIds = v.InferOutput<typeof GetAtsTagsParameterRemoteIds>;
export const GetAtsTagsParameterRemoteIds = v.string();

export type GetAtsTagsPositiveResponse = v.InferOutput<typeof GetAtsTagsPositiveResponse>;
export const GetAtsTagsPositiveResponse = v.object({ status: v.string(), data: v.object({ next: v.nullable(v.string()), results: v.array(v.object({ id: v.string(), remote_id: v.nullable(v.string()), name: v.nullable(v.string()), remote_data: v.nullable(v.record(v.string(), v.unknown())), changed_at: v.string(), remote_deleted_at: v.nullable(v.string()) })) }) });

export type GetAtsApplicationStagesParameterCursor = v.InferOutput<typeof GetAtsApplicationStagesParameterCursor>;
export const GetAtsApplicationStagesParameterCursor = v.string();

export type GetAtsApplicationStagesParameterPageSize = v.InferOutput<typeof GetAtsApplicationStagesParameterPageSize>;
export const GetAtsApplicationStagesParameterPageSize = v.optional(v.pipe(v.number(), v.integer(), v.minValue(1), v.maxValue(250)), 100);

export type GetAtsApplicationStagesParameterUpdatedAfter = v.InferOutput<typeof GetAtsApplicationStagesParameterUpdatedAfter>;
export const GetAtsApplicationStagesParameterUpdatedAfter = v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));

export type GetAtsApplicationStagesParameterIncludeDeleted = v.InferOutput<typeof GetAtsApplicationStagesParameterIncludeDeleted>;
export const GetAtsApplicationStagesParameterIncludeDeleted = v.optional(v.picklist(["true", "false"]), "false");

export type GetAtsApplicationStagesParameterIgnoreUnsupportedFilters = v.InferOutput<typeof GetAtsApplicationStagesParameterIgnoreUnsupportedFilters>;
export const GetAtsApplicationStagesParameterIgnoreUnsupportedFilters = v.optional(v.picklist(["true", "false"]), "false");

export type GetAtsApplicationStagesParameterIds = v.InferOutput<typeof GetAtsApplicationStagesParameterIds>;
export const GetAtsApplicationStagesParameterIds = v.string();

export type GetAtsApplicationStagesParameterRemoteIds = v.InferOutput<typeof GetAtsApplicationStagesParameterRemoteIds>;
export const GetAtsApplicationStagesParameterRemoteIds = v.string();

export type GetAtsApplicationStagesPositiveResponse = v.InferOutput<typeof GetAtsApplicationStagesPositiveResponse>;
export const GetAtsApplicationStagesPositiveResponse = v.object({ status: v.string(), data: v.object({ next: v.nullable(v.string()), results: v.array(v.object({ id: v.string(), remote_id: v.nullable(v.string()), name: v.nullable(v.string()), remote_data: v.nullable(v.record(v.string(), v.unknown())), changed_at: v.string(), remote_deleted_at: v.nullable(v.string()) })) }) });

export type GetAtsJobsParameterCursor = v.InferOutput<typeof GetAtsJobsParameterCursor>;
export const GetAtsJobsParameterCursor = v.string();

export type GetAtsJobsParameterPageSize = v.InferOutput<typeof GetAtsJobsParameterPageSize>;
export const GetAtsJobsParameterPageSize = v.optional(v.pipe(v.number(), v.integer(), v.minValue(1), v.maxValue(250)), 100);

export type GetAtsJobsParameterUpdatedAfter = v.InferOutput<typeof GetAtsJobsParameterUpdatedAfter>;
export const GetAtsJobsParameterUpdatedAfter = v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));

export type GetAtsJobsParameterIncludeDeleted = v.InferOutput<typeof GetAtsJobsParameterIncludeDeleted>;
export const GetAtsJobsParameterIncludeDeleted = v.optional(v.picklist(["true", "false"]), "false");

export type GetAtsJobsParameterIgnoreUnsupportedFilters = v.InferOutput<typeof GetAtsJobsParameterIgnoreUnsupportedFilters>;
export const GetAtsJobsParameterIgnoreUnsupportedFilters = v.optional(v.picklist(["true", "false"]), "false");

export type GetAtsJobsParameterIds = v.InferOutput<typeof GetAtsJobsParameterIds>;
export const GetAtsJobsParameterIds = v.string();

export type GetAtsJobsParameterRemoteIds = v.InferOutput<typeof GetAtsJobsParameterRemoteIds>;
export const GetAtsJobsParameterRemoteIds = v.string();

export type GetAtsJobsParameterJobCodes = v.InferOutput<typeof GetAtsJobsParameterJobCodes>;
export const GetAtsJobsParameterJobCodes = v.string();

export type GetAtsJobsParameterPostUrl = v.InferOutput<typeof GetAtsJobsParameterPostUrl>;
export const GetAtsJobsParameterPostUrl = v.string();

export type GetAtsJobsParameterStatus = v.InferOutput<typeof GetAtsJobsParameterStatus>;
export const GetAtsJobsParameterStatus = v.picklist(["OPEN", "CLOSED", "DRAFT", "ARCHIVED"]);

export type GetAtsJobsParameterStatuses = v.InferOutput<typeof GetAtsJobsParameterStatuses>;
export const GetAtsJobsParameterStatuses = v.string();

export type GetAtsJobsParameterEmploymentTypes = v.InferOutput<typeof GetAtsJobsParameterEmploymentTypes>;
export const GetAtsJobsParameterEmploymentTypes = v.string();

export type GetAtsJobsParameterVisibilities = v.InferOutput<typeof GetAtsJobsParameterVisibilities>;
export const GetAtsJobsParameterVisibilities = v.string();

export type GetAtsJobsParameterRemoteCreatedAfter = v.InferOutput<typeof GetAtsJobsParameterRemoteCreatedAfter>;
export const GetAtsJobsParameterRemoteCreatedAfter = v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));

export type GetAtsJobsParameterNameContains = v.InferOutput<typeof GetAtsJobsParameterNameContains>;
export const GetAtsJobsParameterNameContains = v.string();

export type GetAtsJobsPositiveResponse = v.InferOutput<typeof GetAtsJobsPositiveResponse>;
export const GetAtsJobsPositiveResponse = v.object({ status: v.string(), data: v.object({ next: v.nullable(v.string()), results: v.array(v.object({ id: v.string(), remote_id: v.string(), name: v.nullable(v.string()), job_code: v.nullable(v.string()), description: v.nullable(v.string()), confidential: v.nullable(v.boolean()), weekly_hours: v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))), employment_type: v.optional(v.union([v.picklist(["FULL_TIME", "PART_TIME", "CONTRACT", "SEASONAL", "INTERNSHIP"]), v.string(), v.null()])), status: v.optional(v.union([v.picklist(["OPEN", "CLOSED", "DRAFT", "ARCHIVED"]), v.string(), v.null()])), visibility: v.optional(v.union([v.picklist(["PUBLIC", "INTERNAL", "UNLISTED", "CONFIDENTIAL"]), v.string(), v.null()])), category: v.nullable(v.string()), department: v.nullable(v.string()), post_url: v.nullable(v.string()), experience_level: v.nullable(v.string()), remote_work_status: v.optional(v.union([v.picklist(["REMOTE", "HYBRID", "TEMPORARY", "ON_SITE"]), v.string(), v.null()])), salary_amount: v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))), salary_amount_from: v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))), salary_amount_to: v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))), salary_currency: v.nullable(v.string()), salary_period: v.optional(v.union([v.picklist(["YEAR", "MONTH", "TWO_WEEKS", "WEEK", "DAY", "HOUR"]), v.string(), v.null()])), location: v.optional(v.nullable(v.partial(v.object({ city: v.nullable(v.string()), country: v.nullable(v.string()), raw: v.nullable(v.string()), state: v.nullable(v.string()), street_1: v.nullable(v.string()), street_2: v.nullable(v.string()), zip_code: v.nullable(v.string()) })))), custom_fields: v.nullable(v.record(v.string(), v.unknown())), integration_fields: v.array(v.object({ id: v.string(), key: v.string(), type: v.picklist(["DEFAULT", "CUSTOM"]), value: v.optional(v.null()), label: v.nullable(v.string()) })), remote_url: v.nullable(v.pipe(v.string(), v.url())), opened_at: v.nullable(v.string()), closed_at: v.nullable(v.string()), remote_created_at: v.nullable(v.string()), remote_updated_at: v.nullable(v.string()), contact_id: v.nullable(v.string()), remote_data: v.nullable(v.record(v.string(), v.unknown())), changed_at: v.string(), remote_deleted_at: v.nullable(v.string()), stages: v.array(v.object({ id: v.string(), remote_id: v.nullable(v.string()), name: v.nullable(v.string()), remote_data: v.nullable(v.record(v.string(), v.unknown())), index: v.optional(v.nullable(v.pipe(v.number(), v.integer()))) })), screening_questions: v.array(v.object({ id: v.string(), remote_id: v.nullable(v.string()), title: v.nullable(v.string()), description: v.nullable(v.string()), format: v.optional(v.union([v.object({ display_type: v.optional(v.nullable(v.picklist(["SINGLE_LINE", "MULTI_LINE", "EMAIL", "URL"]))), max_length: v.optional(v.nullable(v.pipe(v.number(), v.integer()))), type: v.string() }), v.object({ display_type: v.optional(v.nullable(v.optional(v.picklist(["SLIDER", "FIELD"]), "FIELD")), "FIELD"), max: v.optional(v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)))), min: v.optional(v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)))), type: v.string() }), v.object({ accepted_mime_types: v.optional(v.nullable(v.array(v.string()))), max_file_size_bytes: v.optional(v.nullable(v.pipe(v.number(), v.integer()))), type: v.string() }), v.object({ display_type: v.optional(v.nullable(v.picklist(["DROPDOWN", "RADIO"]))), options: v.array(v.object({ id: v.string(), remote_id: v.optional(v.nullable(v.string())), name: v.string() })), type: v.string() }), v.object({ type: v.string() }), v.object({ type: v.string() }), v.object({ options: v.array(v.object({ id: v.string(), remote_id: v.optional(v.nullable(v.string())), name: v.string() })), type: v.string() }), v.object({ type: v.string() }), v.object({ raw_question: v.optional(v.unknown()), type: v.string() }), v.null()])), category: v.nullable(v.picklist(["EEO", "DEMOGRAPHIC"])), index: v.optional(v.nullable(v.pipe(v.number(), v.integer()))), required: v.nullable(v.boolean()), precondition_question_id: v.optional(v.nullable(v.pipe(v.string(), v.minLength(24), v.maxLength(24), v.regex(new RegExp("^[1-9A-HJ-NP-Za-km-z]+$"))))), precondition_options: v.optional(v.union([v.array(v.pipe(v.string(), v.minLength(24), v.maxLength(24), v.regex(new RegExp("^[1-9A-HJ-NP-Za-km-z]+$")))), v.array(v.boolean()), v.null()]), null) })), job_postings: v.array(v.object({ id: v.string(), remote_id: v.nullable(v.string()), title: v.nullable(v.string()), description_html: v.nullable(v.string()), status: v.nullable(v.picklist(["ACTIVE", "INACTIVE", "DRAFT"])), visibility: v.nullable(v.picklist(["PUBLIC", "INTERNAL", "UNLISTED"])), url: v.nullable(v.string()), remote_data: v.nullable(v.record(v.string(), v.unknown())) })), hiring_team: v.array(v.object({ id: v.string(), remote_id: v.nullable(v.string()), first_name: v.nullable(v.string()), last_name: v.nullable(v.string()), email: v.optional(v.nullable(v.pipe(v.string(), v.regex(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$"))))), hiring_team_roles: v.array(v.picklist(["RECRUITER", "HIRING_MANAGER", "COORDINATOR", "SOURCER", "INTERVIEWER"])), job_roles: v.array(v.object({ remote_id: v.nullable(v.string()), remote_label: v.nullable(v.string()), scope: v.nullable(v.picklist(["SYSTEM", "JOB"])), unified_type: v.nullable(v.picklist(["HIRING_MANAGER", "RECRUITER", "COORDINATOR", "SOURCER", "INTERVIEWER", "ADMIN"])) })) })) })) }) });

export type PostAtsJobsJobIdApplicationsParameterJobId = v.InferOutput<typeof PostAtsJobsJobIdApplicationsParameterJobId>;
export const PostAtsJobsJobIdApplicationsParameterJobId = v.string();

export type PostAtsJobsJobIdApplicationsPositiveResponse = v.InferOutput<typeof PostAtsJobsJobIdApplicationsPositiveResponse>;
export const PostAtsJobsJobIdApplicationsPositiveResponse = v.object({ status: v.string(), data: v.object({ id: v.string(), remote_id: v.nullable(v.string()), outcome: v.nullable(v.picklist(["PENDING", "HIRED", "DECLINED"])), rejection_reason_name: v.nullable(v.string()), rejected_at: v.nullable(v.string()), current_stage_id: v.nullable(v.string()), job_id: v.nullable(v.string()), candidate_id: v.nullable(v.string()), screening_question_answers: v.optional(v.nullable(v.optional(v.array(v.union([v.object({ answer: v.object({ content: v.nullable(v.string()) }), question: v.object({ remote_id: v.nullable(v.string()), title: v.string(), type: v.string() }) }), v.object({ answer: v.object({ choice: v.nullable(v.string()) }), question: v.object({ remote_id: v.nullable(v.string()), title: v.string(), type: v.string() }) }), v.object({ answer: v.partial(v.object({ choices: v.optional(v.array(v.string()), []) })), question: v.object({ remote_id: v.nullable(v.string()), title: v.string(), type: v.string() }) }), v.object({ answer: v.object({ checked: v.nullable(v.boolean()) }), question: v.object({ remote_id: v.nullable(v.string()), title: v.string(), type: v.string() }) }), v.object({ answer: v.object({ number: v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))) }), question: v.object({ remote_id: v.nullable(v.string()), title: v.string(), type: v.string() }) }), v.object({ answer: v.object({ date: v.nullable(v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")))) }), question: v.object({ remote_id: v.nullable(v.string()), title: v.string(), type: v.string() }) }), v.object({ answer: v.partial(v.object({ raw: v.null() })), question: v.object({ remote_id: v.nullable(v.string()), title: v.string(), type: v.string() }) })])), [])), []), custom_fields: v.nullable(v.record(v.string(), v.unknown())), integration_fields: v.array(v.object({ id: v.string(), key: v.string(), type: v.picklist(["DEFAULT", "CUSTOM"]), value: v.optional(v.null()), label: v.nullable(v.string()) })), remote_url: v.nullable(v.pipe(v.string(), v.url())), changed_at: v.string(), remote_deleted_at: v.nullable(v.string()), remote_created_at: v.nullable(v.string()), remote_updated_at: v.nullable(v.string()), remote_data: v.nullable(v.record(v.string(), v.unknown())), current_stage: v.nullable(v.object({ id: v.string(), name: v.nullable(v.string()), remote_id: v.nullable(v.string()), index: v.nullable(v.pipe(v.number(), v.integer())) })), job: v.nullable(v.object({ id: v.string(), name: v.nullable(v.string()), remote_id: v.string() })), candidate: v.nullable(v.object({ id: v.string(), remote_id: v.string(), first_name: v.nullable(v.string()), last_name: v.nullable(v.string()), company: v.nullable(v.string()), title: v.nullable(v.string()), confidential: v.nullable(v.boolean()), source: v.nullable(v.string()), phone_numbers: v.optional(v.nullable(v.optional(v.array(v.object({ phone_number: v.string(), type: v.optional(v.nullable(v.string())) })), [])), []), email_addresses: v.optional(v.nullable(v.optional(v.array(v.object({ email_address: v.optional(v.nullable(v.pipe(v.string(), v.regex(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$"))))), type: v.nullable(v.string()) })), [])), []), social_media: v.optional(v.nullable(v.optional(v.array(v.partial(v.object({ link: v.nullable(v.string()), type: v.nullable(v.string()), username: v.nullable(v.string()) }))), [])), []), location: v.optional(v.nullable(v.partial(v.object({ city: v.nullable(v.string()), country: v.nullable(v.string()), raw: v.nullable(v.string()), state: v.nullable(v.string()), street_1: v.nullable(v.string()), street_2: v.nullable(v.string()), zip_code: v.nullable(v.string()) })))), custom_fields: v.nullable(v.record(v.string(), v.unknown())), integration_fields: v.array(v.object({ id: v.string(), key: v.string(), type: v.picklist(["DEFAULT", "CUSTOM"]), value: v.optional(v.null()), label: v.nullable(v.string()) })), remote_url: v.nullable(v.pipe(v.string(), v.url())), remote_created_at: v.nullable(v.string()), remote_updated_at: v.nullable(v.string()), remote_data: v.nullable(v.record(v.string(), v.unknown())), changed_at: v.string(), remote_deleted_at: v.nullable(v.string()), tags: v.array(v.object({ id: v.string(), name: v.nullable(v.string()), remote_id: v.nullable(v.string()) })) })) }), warnings: v.array(v.object({ message: v.string() })) });

export type PostAtsJobsJobIdApplicationsRequestBody = v.InferOutput<typeof PostAtsJobsJobIdApplicationsRequestBody>;
export const PostAtsJobsJobIdApplicationsRequestBody = v.object({ stage_id: v.optional(v.string()), candidate: v.object({ first_name: v.string(), last_name: v.string(), email_address: v.pipe(v.string(), v.email()), additional_email_addresses: v.optional(v.array(v.object({ type: v.picklist(["PERSONAL", "WORK", "OTHER"]), email_address: v.pipe(v.string(), v.email()) }))), company: v.optional(v.string()), title: v.optional(v.string()), phone_number: v.optional(v.string()), additional_phone_numbers: v.optional(v.array(v.object({ type: v.picklist(["PERSONAL", "WORK", "OTHER"]), phone_number: v.string() }))), location: v.optional(v.object({ city: v.optional(v.string()), country: v.pipe(v.string(), v.regex(new RegExp("^[A-Z]{2}$"))), state: v.optional(v.string()), street_1: v.optional(v.string()), zip_code: v.optional(v.string()) })), gender: v.optional(v.picklist(["MALE", "FEMALE", "OTHER"])), availability_date: v.optional(v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), salary_expectations: v.optional(v.object({ period: v.picklist(["MONTH", "YEAR"]), amount: v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)) })), social_links: v.optional(v.array(v.object({ url: v.pipe(v.string(), v.url()) })), []) }), attachments: v.optional(v.array(v.object({ name: v.string(), content_type: v.optional(v.pipe(v.string(), v.regex(new RegExp("^[\\w.-]+\\/[\\w.-]+$")))), data_url: v.optional(v.pipe(v.string(), v.url())), data: v.optional(v.string()), type: v.picklist(["CV", "COVER_LETTER", "OTHER"]) })), []), source: v.optional(v.partial(v.object({ name: v.string(), unified_key: v.string(), id: v.string() }))), sourced_by: v.optional(v.object({ user_id: v.string() })), gdpr_consent: v.optional(v.partial(v.object({ expires_at: v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))), given: v.boolean() }))), remote_fields: v.optional(v.intersect([v.partial(v.object({ successfactors: v.partial(v.object({ Candidate: v.record(v.string(), v.unknown()), JobApplication: v.record(v.string(), v.unknown()), copyJobApplicationAttachments: v.boolean(), update_existing_candidate: v.nullable(v.boolean()) })), personio: v.partial(v.object({ application: v.record(v.string(), v.unknown()) })), talentsoft: v.partial(v.object({ applicant: v.record(v.string(), v.unknown()), application: v.record(v.string(), v.unknown()) })), teamtailor: v.partial(v.object({ candidate: v.record(v.string(), v.unknown()), application: v.partial(v.object({ attributes: v.record(v.string(), v.unknown()) })) })), greenhouse: v.partial(v.object({ candidate: v.record(v.string(), v.unknown()), application: v.record(v.string(), v.unknown()) })), lever: v.partial(v.object({ candidate: v.record(v.string(), v.unknown()) })), workable: v.partial(v.object({ candidate: v.record(v.string(), v.unknown()) })), workday: v.partial(v.object({ Candidate_Data: v.partial(v.object({ Name_Detail_Data: v.partial(v.object({ Middle_Name: v.string(), Social_Suffix_Reference: v.object({ Predefined_Name_Component_ID: v.string() }) })), Language_Reference: v.object({ WID: v.string() }), Job_Application_Data: v.partial(v.object({ Job_Applied_To_Data: v.partial(v.object({ Global_Personal_Information_Data: v.partial(v.object({ Date_of_Birth: v.string() })) })), Resume_Data: v.partial(v.object({ Education_Data: v.array(v.partial(v.object({ School_Name: v.string(), First_Year_Attended: v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)), Last_Year_Attended: v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)), Field_of_Study_Reference: v.object({ WID: v.string() }), Degree_Reference: v.object({ WID: v.string() }), Grade_Average: v.string() }))), Skill_Data: v.array(v.partial(v.object({ Skill_Name: v.string() }))), Language_Data: v.array(v.partial(v.object({ Language_Reference: v.partial(v.object({ WID: v.string() })), Language: v.object({ Native: v.optional(v.boolean()), Language_Ability: v.array(v.partial(v.object({ Language_Ability_Data: v.partial(v.object({ Language_Proficiency_Reference: v.object({ WID: v.string() }), Language_Ability_Type_Reference: v.object({ WID: v.string() }) })) }))) }) }))), Experience_Data: v.array(v.object({ Company_Name: v.string(), Title: v.string(), Location: v.optional(v.string()), Start_Date: v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))), End_Date: v.optional(v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), Currently_Work_Here: v.optional(v.boolean()), Description: v.optional(v.string()) })) })) })), Contact_Data: v.partial(v.object({ Location_Data: v.partial(v.object({ Address_Line_1: v.string(), Address_Line_2: v.string(), Region_Subdivision_1: v.string(), Country_Region_Reference: v.object({ Country_Region_ID: v.string() }), Country_City_Reference: v.object({ WID: v.string() }) })) })), Worker_Reference: v.partial(v.object({ WID: v.string(), Employee_ID: v.string() })) })), Override_Source_Reference_WID: v.string() })), zohorecruit: v.partial(v.object({ candidate: v.record(v.string(), v.unknown()) })), bullhorn: v.partial(v.object({ candidate: v.record(v.string(), v.unknown()), job_submission: v.record(v.string(), v.unknown()) })), smartrecruiters: v.partial(v.object({ candidate_with_questions: v.record(v.string(), v.unknown()), candidate_without_questions: v.record(v.string(), v.unknown()), candidate: v.record(v.string(), v.unknown()), consent_decisions: v.partial(v.object({ SINGLE: v.boolean(), SMART_RECRUIT: v.boolean(), SMART_CRM: v.boolean(), SMART_MESSAGE_SMS: v.boolean(), SMART_MESSAGE_WHATSAPP: v.boolean() })) })), talentadore: v.partial(v.object({ applications: v.record(v.string(), v.unknown()) })), guidecom: v.partial(v.object({ candidate: v.record(v.string(), v.unknown()) })), dvinci: v.partial(v.object({ application: v.record(v.string(), v.unknown()), candidate: v.record(v.string(), v.unknown()) })), hrworks: v.partial(v.object({ jobApplication: v.record(v.string(), v.unknown()) })), jobylon: v.partial(v.object({ application: v.partial(v.object({ message: v.string() })) })), avature: v.partial(v.object({ workflow: v.partial(v.object({ step: v.object({ id: v.pipe(v.number(), v.integer()) }) })) })), recruitee: v.partial(v.object({ candidate: v.partial(v.object({ cover_letter_text: v.string() })) })), rexx: v.partial(v.object({ candidate: v.record(v.string(), v.unknown()) })), umantis: v.partial(v.object({ person: v.record(v.string(), v.unknown()) })), piloga: v.partial(v.object({ candidate: v.partial(v.object({ street: v.string() })) })), pinpoint: v.partial(v.object({ candidate: v.record(v.string(), v.unknown()) })), covetorest: v.partial(v.object({ candidate: v.partial(v.object({ mandant: v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)) })) })) })), v.partial(v.object({ greenhouse: v.partial(v.object({ post_headers: v.partial(v.object({ "On-Behalf-Of": v.nullable(v.string()) })) })), workable: v.partial(v.object({ on_behalf_of_user_remote_id: v.string() })) }))])), screening_question_answers: v.optional(v.array(v.object({ question_id: v.string(), answer: v.union([v.string(), v.boolean(), v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)), v.array(v.string()), v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))), v.object({ name: v.string(), content_type: v.optional(v.pipe(v.string(), v.regex(new RegExp("^[\\w.-]+\\/[\\w.-]+$")))), data_url: v.optional(v.pipe(v.string(), v.url())), data: v.optional(v.string()) })]) }))) });

export type GetAtsUsersParameterCursor = v.InferOutput<typeof GetAtsUsersParameterCursor>;
export const GetAtsUsersParameterCursor = v.string();

export type GetAtsUsersParameterPageSize = v.InferOutput<typeof GetAtsUsersParameterPageSize>;
export const GetAtsUsersParameterPageSize = v.optional(v.pipe(v.number(), v.integer(), v.minValue(1), v.maxValue(250)), 100);

export type GetAtsUsersParameterUpdatedAfter = v.InferOutput<typeof GetAtsUsersParameterUpdatedAfter>;
export const GetAtsUsersParameterUpdatedAfter = v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));

export type GetAtsUsersParameterIncludeDeleted = v.InferOutput<typeof GetAtsUsersParameterIncludeDeleted>;
export const GetAtsUsersParameterIncludeDeleted = v.optional(v.picklist(["true", "false"]), "false");

export type GetAtsUsersParameterIgnoreUnsupportedFilters = v.InferOutput<typeof GetAtsUsersParameterIgnoreUnsupportedFilters>;
export const GetAtsUsersParameterIgnoreUnsupportedFilters = v.optional(v.picklist(["true", "false"]), "false");

export type GetAtsUsersParameterIds = v.InferOutput<typeof GetAtsUsersParameterIds>;
export const GetAtsUsersParameterIds = v.string();

export type GetAtsUsersParameterRemoteIds = v.InferOutput<typeof GetAtsUsersParameterRemoteIds>;
export const GetAtsUsersParameterRemoteIds = v.string();

export type GetAtsUsersParameterEmails = v.InferOutput<typeof GetAtsUsersParameterEmails>;
export const GetAtsUsersParameterEmails = v.string();

export type GetAtsUsersPositiveResponse = v.InferOutput<typeof GetAtsUsersPositiveResponse>;
export const GetAtsUsersPositiveResponse = v.object({ status: v.string(), data: v.object({ next: v.nullable(v.string()), results: v.array(v.object({ id: v.string(), remote_id: v.nullable(v.string()), first_name: v.nullable(v.string()), last_name: v.nullable(v.string()), email: v.optional(v.nullable(v.pipe(v.string(), v.regex(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$"))))), status: v.nullable(v.picklist(["ACTIVE", "INACTIVE"])), remote_data: v.nullable(v.record(v.string(), v.unknown())), changed_at: v.string(), remote_deleted_at: v.nullable(v.string()), system_roles: v.array(v.object({ remote_id: v.nullable(v.string()), remote_label: v.nullable(v.string()), scope: v.nullable(v.picklist(["SYSTEM", "JOB"])), unified_type: v.nullable(v.picklist(["HIRING_MANAGER", "RECRUITER", "COORDINATOR", "SOURCER", "INTERVIEWER", "ADMIN"])) })) })) }) });

export type GetAtsRolesParameterCursor = v.InferOutput<typeof GetAtsRolesParameterCursor>;
export const GetAtsRolesParameterCursor = v.string();

export type GetAtsRolesParameterPageSize = v.InferOutput<typeof GetAtsRolesParameterPageSize>;
export const GetAtsRolesParameterPageSize = v.optional(v.pipe(v.number(), v.integer(), v.minValue(1), v.maxValue(250)), 100);

export type GetAtsRolesParameterUpdatedAfter = v.InferOutput<typeof GetAtsRolesParameterUpdatedAfter>;
export const GetAtsRolesParameterUpdatedAfter = v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));

export type GetAtsRolesParameterIncludeDeleted = v.InferOutput<typeof GetAtsRolesParameterIncludeDeleted>;
export const GetAtsRolesParameterIncludeDeleted = v.optional(v.picklist(["true", "false"]), "false");

export type GetAtsRolesParameterIgnoreUnsupportedFilters = v.InferOutput<typeof GetAtsRolesParameterIgnoreUnsupportedFilters>;
export const GetAtsRolesParameterIgnoreUnsupportedFilters = v.optional(v.picklist(["true", "false"]), "false");

export type GetAtsRolesParameterIds = v.InferOutput<typeof GetAtsRolesParameterIds>;
export const GetAtsRolesParameterIds = v.string();

export type GetAtsRolesParameterRemoteIds = v.InferOutput<typeof GetAtsRolesParameterRemoteIds>;
export const GetAtsRolesParameterRemoteIds = v.string();

export type GetAtsRolesParameterScopes = v.InferOutput<typeof GetAtsRolesParameterScopes>;
export const GetAtsRolesParameterScopes = v.string();

export type GetAtsRolesPositiveResponse = v.InferOutput<typeof GetAtsRolesPositiveResponse>;
export const GetAtsRolesPositiveResponse = v.object({ status: v.string(), data: v.object({ next: v.nullable(v.string()), results: v.array(v.object({ id: v.string(), remote_id: v.nullable(v.string()), remote_label: v.nullable(v.string()), scope: v.nullable(v.picklist(["SYSTEM", "JOB"])), unified_type: v.nullable(v.picklist(["HIRING_MANAGER", "RECRUITER", "COORDINATOR", "SOURCER", "INTERVIEWER", "ADMIN"])), remote_data: v.nullable(v.record(v.string(), v.unknown())), changed_at: v.string(), remote_deleted_at: v.nullable(v.string()) })) }) });

export type GetAtsOffersParameterCursor = v.InferOutput<typeof GetAtsOffersParameterCursor>;
export const GetAtsOffersParameterCursor = v.string();

export type GetAtsOffersParameterPageSize = v.InferOutput<typeof GetAtsOffersParameterPageSize>;
export const GetAtsOffersParameterPageSize = v.optional(v.pipe(v.number(), v.integer(), v.minValue(1), v.maxValue(250)), 100);

export type GetAtsOffersParameterUpdatedAfter = v.InferOutput<typeof GetAtsOffersParameterUpdatedAfter>;
export const GetAtsOffersParameterUpdatedAfter = v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));

export type GetAtsOffersParameterIncludeDeleted = v.InferOutput<typeof GetAtsOffersParameterIncludeDeleted>;
export const GetAtsOffersParameterIncludeDeleted = v.optional(v.picklist(["true", "false"]), "false");

export type GetAtsOffersParameterIgnoreUnsupportedFilters = v.InferOutput<typeof GetAtsOffersParameterIgnoreUnsupportedFilters>;
export const GetAtsOffersParameterIgnoreUnsupportedFilters = v.optional(v.picklist(["true", "false"]), "false");

export type GetAtsOffersParameterIds = v.InferOutput<typeof GetAtsOffersParameterIds>;
export const GetAtsOffersParameterIds = v.string();

export type GetAtsOffersParameterRemoteIds = v.InferOutput<typeof GetAtsOffersParameterRemoteIds>;
export const GetAtsOffersParameterRemoteIds = v.string();

export type GetAtsOffersPositiveResponse = v.InferOutput<typeof GetAtsOffersPositiveResponse>;
export const GetAtsOffersPositiveResponse = v.object({ status: v.string(), data: v.object({ next: v.nullable(v.string()), results: v.array(v.object({ id: v.string(), remote_id: v.nullable(v.string()), status: v.nullable(v.picklist(["ACCEPTED", "DECLINED", "SENT", "APPROVED", "DRAFT", "ABANDONED"])), employment_start_date: v.nullable(v.string()), application_id: v.nullable(v.string()), custom_fields: v.nullable(v.record(v.string(), v.unknown())), integration_fields: v.array(v.object({ id: v.string(), key: v.string(), type: v.picklist(["DEFAULT", "CUSTOM"]), value: v.optional(v.null()), label: v.nullable(v.string()) })), changed_at: v.string(), remote_deleted_at: v.nullable(v.string()), remote_created_at: v.nullable(v.string()), remote_updated_at: v.nullable(v.string()), remote_data: v.nullable(v.record(v.string(), v.unknown())), application: v.nullable(v.object({ candidate: v.nullable(v.object({ id: v.string(), remote_id: v.string(), first_name: v.nullable(v.string()), last_name: v.nullable(v.string()), email_addresses: v.optional(v.nullable(v.optional(v.array(v.object({ email_address: v.optional(v.nullable(v.pipe(v.string(), v.regex(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$"))))), type: v.nullable(v.string()) })), [])), []) })), job: v.nullable(v.object({ id: v.string(), remote_id: v.string(), name: v.nullable(v.string()) })) })) })) }) });

export type GetAtsRejectionReasonsParameterCursor = v.InferOutput<typeof GetAtsRejectionReasonsParameterCursor>;
export const GetAtsRejectionReasonsParameterCursor = v.string();

export type GetAtsRejectionReasonsParameterPageSize = v.InferOutput<typeof GetAtsRejectionReasonsParameterPageSize>;
export const GetAtsRejectionReasonsParameterPageSize = v.optional(v.pipe(v.number(), v.integer(), v.minValue(1), v.maxValue(250)), 100);

export type GetAtsRejectionReasonsParameterUpdatedAfter = v.InferOutput<typeof GetAtsRejectionReasonsParameterUpdatedAfter>;
export const GetAtsRejectionReasonsParameterUpdatedAfter = v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));

export type GetAtsRejectionReasonsParameterIncludeDeleted = v.InferOutput<typeof GetAtsRejectionReasonsParameterIncludeDeleted>;
export const GetAtsRejectionReasonsParameterIncludeDeleted = v.optional(v.picklist(["true", "false"]), "false");

export type GetAtsRejectionReasonsParameterIgnoreUnsupportedFilters = v.InferOutput<typeof GetAtsRejectionReasonsParameterIgnoreUnsupportedFilters>;
export const GetAtsRejectionReasonsParameterIgnoreUnsupportedFilters = v.optional(v.picklist(["true", "false"]), "false");

export type GetAtsRejectionReasonsParameterIds = v.InferOutput<typeof GetAtsRejectionReasonsParameterIds>;
export const GetAtsRejectionReasonsParameterIds = v.string();

export type GetAtsRejectionReasonsParameterRemoteIds = v.InferOutput<typeof GetAtsRejectionReasonsParameterRemoteIds>;
export const GetAtsRejectionReasonsParameterRemoteIds = v.string();

export type GetAtsRejectionReasonsPositiveResponse = v.InferOutput<typeof GetAtsRejectionReasonsPositiveResponse>;
export const GetAtsRejectionReasonsPositiveResponse = v.object({ status: v.string(), data: v.object({ next: v.nullable(v.string()), results: v.array(v.object({ id: v.string(), remote_id: v.string(), name: v.nullable(v.string()), changed_at: v.string(), remote_deleted_at: v.nullable(v.string()), remote_data: v.nullable(v.record(v.string(), v.unknown())) })) }) });

export type GetAtsInterviewsParameterCursor = v.InferOutput<typeof GetAtsInterviewsParameterCursor>;
export const GetAtsInterviewsParameterCursor = v.string();

export type GetAtsInterviewsParameterPageSize = v.InferOutput<typeof GetAtsInterviewsParameterPageSize>;
export const GetAtsInterviewsParameterPageSize = v.optional(v.pipe(v.number(), v.integer(), v.minValue(1), v.maxValue(250)), 100);

export type GetAtsInterviewsParameterUpdatedAfter = v.InferOutput<typeof GetAtsInterviewsParameterUpdatedAfter>;
export const GetAtsInterviewsParameterUpdatedAfter = v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));

export type GetAtsInterviewsParameterIncludeDeleted = v.InferOutput<typeof GetAtsInterviewsParameterIncludeDeleted>;
export const GetAtsInterviewsParameterIncludeDeleted = v.optional(v.picklist(["true", "false"]), "false");

export type GetAtsInterviewsParameterIgnoreUnsupportedFilters = v.InferOutput<typeof GetAtsInterviewsParameterIgnoreUnsupportedFilters>;
export const GetAtsInterviewsParameterIgnoreUnsupportedFilters = v.optional(v.picklist(["true", "false"]), "false");

export type GetAtsInterviewsParameterIds = v.InferOutput<typeof GetAtsInterviewsParameterIds>;
export const GetAtsInterviewsParameterIds = v.string();

export type GetAtsInterviewsParameterRemoteIds = v.InferOutput<typeof GetAtsInterviewsParameterRemoteIds>;
export const GetAtsInterviewsParameterRemoteIds = v.string();

export type GetAtsInterviewsParameterJobIds = v.InferOutput<typeof GetAtsInterviewsParameterJobIds>;
export const GetAtsInterviewsParameterJobIds = v.string();

export type GetAtsInterviewsPositiveResponse = v.InferOutput<typeof GetAtsInterviewsPositiveResponse>;
export const GetAtsInterviewsPositiveResponse = v.object({ status: v.string(), data: v.object({ next: v.nullable(v.string()), results: v.array(v.object({ id: v.string(), remote_id: v.nullable(v.string()), title: v.nullable(v.string()), starting_at: v.nullable(v.string()), ending_at: v.nullable(v.string()), location: v.optional(v.nullable(v.partial(v.object({ city: v.nullable(v.string()), country: v.nullable(v.string()), raw: v.nullable(v.string()), state: v.nullable(v.string()), street_1: v.nullable(v.string()), street_2: v.nullable(v.string()), zip_code: v.nullable(v.string()) })))), video_conferencing_url: v.nullable(v.string()), application_id: v.nullable(v.string()), stage_id: v.nullable(v.string()), canceled: v.nullable(v.boolean()), remote_created_at: v.nullable(v.string()), remote_updated_at: v.nullable(v.string()), remote_data: v.nullable(v.record(v.string(), v.unknown())), changed_at: v.string(), remote_deleted_at: v.nullable(v.string()), users: v.array(v.object({ id: v.string(), remote_id: v.nullable(v.string()), first_name: v.nullable(v.string()), last_name: v.nullable(v.string()), email: v.optional(v.nullable(v.pipe(v.string(), v.regex(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$"))))) })), application: v.nullable(v.object({ id: v.string(), remote_id: v.nullable(v.string()), outcome: v.nullable(v.picklist(["PENDING", "HIRED", "DECLINED"])), rejection_reason_name: v.nullable(v.string()), candidate: v.nullable(v.object({ id: v.string(), remote_id: v.string(), first_name: v.nullable(v.string()), last_name: v.nullable(v.string()), email_addresses: v.optional(v.nullable(v.optional(v.array(v.object({ email_address: v.optional(v.nullable(v.pipe(v.string(), v.regex(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$"))))), type: v.nullable(v.string()) })), [])), []) })), job: v.nullable(v.object({ id: v.string(), remote_id: v.string(), name: v.nullable(v.string()) })) })) })) }) });

export type GetAtsActionsAtsCreateCandidatePositiveResponse = v.InferOutput<typeof GetAtsActionsAtsCreateCandidatePositiveResponse>;
export const GetAtsActionsAtsCreateCandidatePositiveResponse = v.object({ status: v.string(), data: v.partial(v.object({ attachment_restrictions: v.nullable(v.object({ total_size_bytes: v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))), types: v.object({ CV: v.union([v.object({ is_supported: v.boolean(), min_amount: v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))), max_amount: v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))), max_file_size_bytes: v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))), accepted_mime_types: v.nullable(v.array(v.string())) }), v.object({ is_supported: v.boolean() })]), COVER_LETTER: v.union([v.object({ is_supported: v.boolean(), min_amount: v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))), max_amount: v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))), max_file_size_bytes: v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))), accepted_mime_types: v.nullable(v.array(v.string())) }), v.object({ is_supported: v.boolean() })]), OTHER: v.union([v.object({ is_supported: v.boolean(), min_amount: v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))), max_amount: v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))), max_file_size_bytes: v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))), accepted_mime_types: v.nullable(v.array(v.string())) }), v.object({ is_supported: v.boolean() })]) }) })) })) });

export type GetAtsActionsAtsCreateApplicationPositiveResponse = v.InferOutput<typeof GetAtsActionsAtsCreateApplicationPositiveResponse>;
export const GetAtsActionsAtsCreateApplicationPositiveResponse = v.object({ status: v.string(), data: v.partial(v.object({ attachment_restrictions: v.nullable(v.object({ total_size_bytes: v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))), types: v.object({ CV: v.union([v.object({ is_supported: v.boolean(), min_amount: v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))), max_amount: v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))), max_file_size_bytes: v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))), accepted_mime_types: v.nullable(v.array(v.string())) }), v.object({ is_supported: v.boolean() })]), COVER_LETTER: v.union([v.object({ is_supported: v.boolean(), min_amount: v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))), max_amount: v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))), max_file_size_bytes: v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))), accepted_mime_types: v.nullable(v.array(v.string())) }), v.object({ is_supported: v.boolean() })]), OTHER: v.union([v.object({ is_supported: v.boolean(), min_amount: v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))), max_amount: v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))), max_file_size_bytes: v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))), accepted_mime_types: v.nullable(v.array(v.string())) }), v.object({ is_supported: v.boolean() })]) }) })) })) });

export type GetAtsActionsAtsAddApplicationAttachmentPositiveResponse = v.InferOutput<typeof GetAtsActionsAtsAddApplicationAttachmentPositiveResponse>;
export const GetAtsActionsAtsAddApplicationAttachmentPositiveResponse = v.object({ status: v.string(), data: v.partial(v.object({ attachment_restrictions: v.nullable(v.object({ types: v.object({ CV: v.union([v.object({ is_supported: v.boolean(), max_file_size_bytes: v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))), accepted_mime_types: v.nullable(v.array(v.string())) }), v.object({ is_supported: v.boolean() })]), COVER_LETTER: v.union([v.object({ is_supported: v.boolean(), max_file_size_bytes: v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))), accepted_mime_types: v.nullable(v.array(v.string())) }), v.object({ is_supported: v.boolean() })]), OTHER: v.union([v.object({ is_supported: v.boolean(), max_file_size_bytes: v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))), accepted_mime_types: v.nullable(v.array(v.string())) }), v.object({ is_supported: v.boolean() })]) }) })) })) });

export type GetAtsActionsAtsAddCandidateAttachmentPositiveResponse = v.InferOutput<typeof GetAtsActionsAtsAddCandidateAttachmentPositiveResponse>;
export const GetAtsActionsAtsAddCandidateAttachmentPositiveResponse = v.object({ status: v.string(), data: v.partial(v.object({ attachment_restrictions: v.nullable(v.object({ types: v.object({ CV: v.union([v.object({ is_supported: v.boolean(), max_file_size_bytes: v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))), accepted_mime_types: v.nullable(v.array(v.string())) }), v.object({ is_supported: v.boolean() })]), COVER_LETTER: v.union([v.object({ is_supported: v.boolean(), max_file_size_bytes: v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))), accepted_mime_types: v.nullable(v.array(v.string())) }), v.object({ is_supported: v.boolean() })]), OTHER: v.union([v.object({ is_supported: v.boolean(), max_file_size_bytes: v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))), accepted_mime_types: v.nullable(v.array(v.string())) }), v.object({ is_supported: v.boolean() })]) }) })) })) });

export type PostAtsImportTrackedApplicationPositiveResponse = v.InferOutput<typeof PostAtsImportTrackedApplicationPositiveResponse>;
export const PostAtsImportTrackedApplicationPositiveResponse = v.object({ status: v.string(), data: v.object({ id: v.pipe(v.string(), v.minLength(24), v.maxLength(24), v.regex(new RegExp("^[1-9A-HJ-NP-Za-km-z]+$"))), tracked_at: v.nullable(v.string()), imported_id: v.partial(v.object({ erecruiter: v.union([v.object({ id_type: v.string(), application_remote_id: v.string(), job_remote_id: v.string() }), v.object({ id_type: v.string(), candidate_remote_id: v.string(), application_remote_id: v.string() })]), successfactors: v.object({ id_type: v.string(), application_remote_id: v.string() }), recruitee: v.object({ id_type: v.string(), placement_id: v.string() }), greenhouse: v.object({ id_type: v.string(), application_id: v.string() }), onlyfy: v.object({ id_type: v.string(), application_id: v.string() }), smartrecruiters: v.object({ id_type: v.string(), candidate_remote_id: v.string(), job_remote_id: v.string() }) })) }), warnings: v.array(v.object({ message: v.string() })) });

export type PostAtsImportTrackedApplicationRequestBody = v.InferOutput<typeof PostAtsImportTrackedApplicationRequestBody>;
export const PostAtsImportTrackedApplicationRequestBody = v.object({ erecruiter: v.optional(v.union([v.object({ id_type: v.string(), application_remote_id: v.string(), job_remote_id: v.string() }), v.object({ id_type: v.string(), candidate_remote_id: v.string(), application_remote_id: v.string() })])), successfactors: v.optional(v.object({ id_type: v.string(), application_remote_id: v.string() })), recruitee: v.optional(v.object({ id_type: v.string(), placement_id: v.string() })), greenhouse: v.optional(v.object({ id_type: v.string(), application_id: v.string() })), onlyfy: v.optional(v.object({ id_type: v.string(), application_id: v.string() })), smartrecruiters: v.optional(v.object({ id_type: v.string(), candidate_remote_id: v.string(), job_remote_id: v.string() })), tracked_at: v.nullable(v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))) });

export type PostAtsCustomAvionteSyncedJobsPositiveResponse = v.InferOutput<typeof PostAtsCustomAvionteSyncedJobsPositiveResponse>;
export const PostAtsCustomAvionteSyncedJobsPositiveResponse = v.object({ status: v.string(), data: v.record(v.string(), v.unknown()) });

export type PostAtsCustomAvionteSyncedJobsRequestBody = v.InferOutput<typeof PostAtsCustomAvionteSyncedJobsRequestBody>;
export const PostAtsCustomAvionteSyncedJobsRequestBody = v.object({ job_remote_id: v.pipe(v.string(), v.regex(new RegExp("^\\d+$"))) });

export type DeleteAtsCustomAvionteSyncedJobsJobRemoteIdParameterJobRemoteId = v.InferOutput<typeof DeleteAtsCustomAvionteSyncedJobsJobRemoteIdParameterJobRemoteId>;
export const DeleteAtsCustomAvionteSyncedJobsJobRemoteIdParameterJobRemoteId = v.string();

export type DeleteAtsCustomAvionteSyncedJobsJobRemoteIdPositiveResponse = v.InferOutput<typeof DeleteAtsCustomAvionteSyncedJobsJobRemoteIdPositiveResponse>;
export const DeleteAtsCustomAvionteSyncedJobsJobRemoteIdPositiveResponse = v.object({ status: v.string(), data: v.record(v.string(), v.unknown()) });

export type DeleteAtsCustomAvionteSyncedJobsJobRemoteIdRequestBody = v.InferOutput<typeof DeleteAtsCustomAvionteSyncedJobsJobRemoteIdRequestBody>;
export const DeleteAtsCustomAvionteSyncedJobsJobRemoteIdRequestBody = v.partial(v.object({  }));

export type GetAssessmentPackagesPositiveResponse = v.InferOutput<typeof GetAssessmentPackagesPositiveResponse>;
export const GetAssessmentPackagesPositiveResponse = v.object({ status: v.string(), data: v.object({ packages: v.array(v.object({ id: v.string(), name: v.string(), description: v.string(), updated_at: v.nullable(v.string()), type: v.nullable(v.picklist(["BEHAVIORAL", "VIDEO_INTERVIEW", "SKILLS_TEST", "BACKGROUND_CHECK", "REFERENCE_CHECK"])) })) }) });

export type PutAssessmentPackagesPositiveResponse = v.InferOutput<typeof PutAssessmentPackagesPositiveResponse>;
export const PutAssessmentPackagesPositiveResponse = v.object({ status: v.string(), data: v.record(v.string(), v.unknown()), warnings: v.array(v.object({ message: v.string() })) });

export type PutAssessmentPackagesRequestBody = v.InferOutput<typeof PutAssessmentPackagesRequestBody>;
export const PutAssessmentPackagesRequestBody = v.object({ packages: v.array(v.object({ id: v.string(), type: v.picklist(["BEHAVIORAL", "VIDEO_INTERVIEW", "SKILLS_TEST", "BACKGROUND_CHECK", "REFERENCE_CHECK"]), name: v.string(), description: v.string() })) });

export type GetAssessmentOrdersParameterCursor = v.InferOutput<typeof GetAssessmentOrdersParameterCursor>;
export const GetAssessmentOrdersParameterCursor = v.string();

export type GetAssessmentOrdersParameterPageSize = v.InferOutput<typeof GetAssessmentOrdersParameterPageSize>;
export const GetAssessmentOrdersParameterPageSize = v.optional(v.pipe(v.number(), v.integer(), v.minValue(1), v.maxValue(250)), 100);

export type GetAssessmentOrdersParameterIds = v.InferOutput<typeof GetAssessmentOrdersParameterIds>;
export const GetAssessmentOrdersParameterIds = v.string();

export type GetAssessmentOrdersParameterStatuses = v.InferOutput<typeof GetAssessmentOrdersParameterStatuses>;
export const GetAssessmentOrdersParameterStatuses = v.string();

export type GetAssessmentOrdersParameterCreatedAfter = v.InferOutput<typeof GetAssessmentOrdersParameterCreatedAfter>;
export const GetAssessmentOrdersParameterCreatedAfter = v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));

export type GetAssessmentOrdersPositiveResponse = v.InferOutput<typeof GetAssessmentOrdersPositiveResponse>;
export const GetAssessmentOrdersPositiveResponse = v.object({ status: v.string(), data: v.object({ next: v.nullable(v.string()), results: v.array(v.object({ id: v.string(), package_id: v.string(), status: v.picklist(["OPEN", "COMPLETED", "CANCELLED", "REJECTED"]), candidate: v.object({ remote_id: v.nullable(v.string()), email: v.pipe(v.string(), v.email()), first_name: v.nullable(v.string()), last_name: v.nullable(v.string()), phone: v.nullable(v.string()) }), application: v.object({ remote_id: v.nullable(v.string()) }), job: v.object({ remote_id: v.nullable(v.string()), name: v.nullable(v.string()), job_code: v.nullable(v.string()), description: v.nullable(v.string()), location: v.nullable(v.partial(v.object({ street_1: v.nullable(v.string()), street_2: v.nullable(v.string()), city: v.nullable(v.string()), state: v.nullable(v.string()), zip_code: v.nullable(v.string()), country: v.nullable(v.string()), raw: v.nullable(v.string()) }))), hiring_team: v.array(v.object({ remote_id: v.nullable(v.string()), email: v.nullable(v.string()), first_name: v.nullable(v.string()), last_name: v.nullable(v.string()), hiring_team_roles: v.array(v.picklist(["RECRUITER", "HIRING_MANAGER"])) })) }) })) }) });

export type GetAssessmentOrdersOpenParameterCursor = v.InferOutput<typeof GetAssessmentOrdersOpenParameterCursor>;
export const GetAssessmentOrdersOpenParameterCursor = v.string();

export type GetAssessmentOrdersOpenParameterPageSize = v.InferOutput<typeof GetAssessmentOrdersOpenParameterPageSize>;
export const GetAssessmentOrdersOpenParameterPageSize = v.optional(v.pipe(v.number(), v.integer(), v.minValue(1), v.maxValue(250)), 100);

export type GetAssessmentOrdersOpenPositiveResponse = v.InferOutput<typeof GetAssessmentOrdersOpenPositiveResponse>;
export const GetAssessmentOrdersOpenPositiveResponse = v.object({ status: v.string(), data: v.object({ next: v.nullable(v.string()), results: v.array(v.object({ id: v.string(), package_id: v.string(), candidate: v.object({ remote_id: v.nullable(v.string()), email: v.pipe(v.string(), v.email()), first_name: v.nullable(v.string()), last_name: v.nullable(v.string()), phone: v.nullable(v.string()) }), application: v.object({ remote_id: v.nullable(v.string()) }), job: v.object({ remote_id: v.nullable(v.string()), name: v.nullable(v.string()), job_code: v.nullable(v.string()), description: v.nullable(v.string()), location: v.nullable(v.partial(v.object({ street_1: v.nullable(v.string()), street_2: v.nullable(v.string()), city: v.nullable(v.string()), state: v.nullable(v.string()), zip_code: v.nullable(v.string()), country: v.nullable(v.string()), raw: v.nullable(v.string()) }))), hiring_team: v.array(v.object({ remote_id: v.nullable(v.string()), email: v.nullable(v.string()), first_name: v.nullable(v.string()), last_name: v.nullable(v.string()), hiring_team_roles: v.array(v.picklist(["RECRUITER", "HIRING_MANAGER"])) })) }) })) }) });

export type PutAssessmentOrdersAssessmentOrderIdResultParameterAssessmentOrderId = v.InferOutput<typeof PutAssessmentOrdersAssessmentOrderIdResultParameterAssessmentOrderId>;
export const PutAssessmentOrdersAssessmentOrderIdResultParameterAssessmentOrderId = v.string();

export type PutAssessmentOrdersAssessmentOrderIdResultPositiveResponse = v.InferOutput<typeof PutAssessmentOrdersAssessmentOrderIdResultPositiveResponse>;
export const PutAssessmentOrdersAssessmentOrderIdResultPositiveResponse = v.object({ status: v.string(), data: v.record(v.string(), v.unknown()), warnings: v.array(v.object({ message: v.string() })) });

export type PutAssessmentOrdersAssessmentOrderIdResultRequestBody = v.InferOutput<typeof PutAssessmentOrdersAssessmentOrderIdResultRequestBody>;
export const PutAssessmentOrdersAssessmentOrderIdResultRequestBody = v.object({ status: v.picklist(["COMPLETED", "CANCELLED", "OPEN"]), result_url: v.pipe(v.string(), v.url()), completed_at: v.optional(v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), score: v.optional(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))), max_score: v.optional(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))), attributes: v.optional(v.array(v.union([v.object({ type: v.string(), label: v.string(), value: v.string() }), v.object({ type: v.string(), id: v.string(), label: v.string(), score: v.object({ value: v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)), max: v.pipe(v.number(), v.minValue(1)) }), status: v.picklist(["COMPLETED", "CANCELLED"]) })])), []), attachments: v.optional(v.pipe(v.array(v.object({ name: v.string(), content_type: v.optional(v.pipe(v.string(), v.regex(new RegExp("^[\\w.-]+\\/[\\w.-]+$")))), data_url: v.optional(v.pipe(v.string(), v.url())), data: v.optional(v.string()) })), v.maxLength(5)), []), remote_fields: v.optional(v.partial(v.object({ smartrecruiters: v.partial(v.object({ scoreLabel: v.string() })), recruitee: v.partial(v.object({ subtitle: v.string() })) }))) });

export type GetLmsUsersParameterCursor = v.InferOutput<typeof GetLmsUsersParameterCursor>;
export const GetLmsUsersParameterCursor = v.string();

export type GetLmsUsersParameterPageSize = v.InferOutput<typeof GetLmsUsersParameterPageSize>;
export const GetLmsUsersParameterPageSize = v.optional(v.pipe(v.number(), v.integer(), v.minValue(1), v.maxValue(250)), 100);

export type GetLmsUsersParameterUpdatedAfter = v.InferOutput<typeof GetLmsUsersParameterUpdatedAfter>;
export const GetLmsUsersParameterUpdatedAfter = v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));

export type GetLmsUsersParameterIncludeDeleted = v.InferOutput<typeof GetLmsUsersParameterIncludeDeleted>;
export const GetLmsUsersParameterIncludeDeleted = v.optional(v.picklist(["true", "false"]), "false");

export type GetLmsUsersParameterIgnoreUnsupportedFilters = v.InferOutput<typeof GetLmsUsersParameterIgnoreUnsupportedFilters>;
export const GetLmsUsersParameterIgnoreUnsupportedFilters = v.optional(v.picklist(["true", "false"]), "false");

export type GetLmsUsersParameterIds = v.InferOutput<typeof GetLmsUsersParameterIds>;
export const GetLmsUsersParameterIds = v.string();

export type GetLmsUsersParameterRemoteIds = v.InferOutput<typeof GetLmsUsersParameterRemoteIds>;
export const GetLmsUsersParameterRemoteIds = v.string();

export type GetLmsUsersParameterWorkEmails = v.InferOutput<typeof GetLmsUsersParameterWorkEmails>;
export const GetLmsUsersParameterWorkEmails = v.string();

export type GetLmsUsersPositiveResponse = v.InferOutput<typeof GetLmsUsersPositiveResponse>;
export const GetLmsUsersPositiveResponse = v.object({ status: v.string(), data: v.object({ next: v.nullable(v.string()), results: v.array(v.object({ id: v.string(), remote_id: v.string(), first_name: v.nullable(v.string()), last_name: v.nullable(v.string()), work_email: v.nullable(v.string()), status: v.nullable(v.picklist(["ACTIVE", "INACTIVE"])), remote_created_at: v.nullable(v.string()), remote_deleted_at: v.nullable(v.string()), changed_at: v.string(), remote_data: v.nullable(v.record(v.string(), v.unknown())), custom_fields: v.nullable(v.record(v.string(), v.unknown())), integration_fields: v.array(v.object({ id: v.string(), key: v.string(), type: v.picklist(["DEFAULT", "CUSTOM"]), value: v.optional(v.null()), label: v.nullable(v.string()) })) })) }) });

export type GetLmsCourseProgressionsParameterCursor = v.InferOutput<typeof GetLmsCourseProgressionsParameterCursor>;
export const GetLmsCourseProgressionsParameterCursor = v.string();

export type GetLmsCourseProgressionsParameterPageSize = v.InferOutput<typeof GetLmsCourseProgressionsParameterPageSize>;
export const GetLmsCourseProgressionsParameterPageSize = v.optional(v.pipe(v.number(), v.integer(), v.minValue(1), v.maxValue(250)), 100);

export type GetLmsCourseProgressionsParameterUpdatedAfter = v.InferOutput<typeof GetLmsCourseProgressionsParameterUpdatedAfter>;
export const GetLmsCourseProgressionsParameterUpdatedAfter = v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));

export type GetLmsCourseProgressionsParameterIncludeDeleted = v.InferOutput<typeof GetLmsCourseProgressionsParameterIncludeDeleted>;
export const GetLmsCourseProgressionsParameterIncludeDeleted = v.optional(v.picklist(["true", "false"]), "false");

export type GetLmsCourseProgressionsParameterIgnoreUnsupportedFilters = v.InferOutput<typeof GetLmsCourseProgressionsParameterIgnoreUnsupportedFilters>;
export const GetLmsCourseProgressionsParameterIgnoreUnsupportedFilters = v.optional(v.picklist(["true", "false"]), "false");

export type GetLmsCourseProgressionsParameterIds = v.InferOutput<typeof GetLmsCourseProgressionsParameterIds>;
export const GetLmsCourseProgressionsParameterIds = v.string();

export type GetLmsCourseProgressionsParameterRemoteIds = v.InferOutput<typeof GetLmsCourseProgressionsParameterRemoteIds>;
export const GetLmsCourseProgressionsParameterRemoteIds = v.string();

export type GetLmsCourseProgressionsParameterUserIds = v.InferOutput<typeof GetLmsCourseProgressionsParameterUserIds>;
export const GetLmsCourseProgressionsParameterUserIds = v.string();

export type GetLmsCourseProgressionsParameterCourseIds = v.InferOutput<typeof GetLmsCourseProgressionsParameterCourseIds>;
export const GetLmsCourseProgressionsParameterCourseIds = v.string();

export type GetLmsCourseProgressionsPositiveResponse = v.InferOutput<typeof GetLmsCourseProgressionsPositiveResponse>;
export const GetLmsCourseProgressionsPositiveResponse = v.object({ status: v.string(), data: v.object({ next: v.nullable(v.string()), results: v.array(v.object({ id: v.string(), remote_id: v.string(), user_id: v.string(), course_revision_id: v.string(), status: v.nullable(v.picklist(["ENROLLED", "IN_PROGRESS", "COMPLETED", "DROPPED"])), enrolled_at: v.nullable(v.string()), completed_at: v.nullable(v.string()), changed_at: v.string(), remote_deleted_at: v.nullable(v.string()), remote_data: v.nullable(v.record(v.string(), v.unknown())), user: v.object({ id: v.string(), remote_id: v.string(), first_name: v.nullable(v.string()), last_name: v.nullable(v.string()), work_email: v.nullable(v.string()) }), course_revision: v.object({ id: v.string(), remote_id: v.string(), title: v.nullable(v.string()), course: v.nullable(v.object({ id: v.string(), remote_id: v.string() })) }) })) }) });

export type PostLmsCourseProgressionsPositiveResponse = v.InferOutput<typeof PostLmsCourseProgressionsPositiveResponse>;
export const PostLmsCourseProgressionsPositiveResponse = v.object({ status: v.string(), data: v.object({ id: v.string(), remote_id: v.string(), user_id: v.string(), course_revision_id: v.string(), status: v.nullable(v.picklist(["ENROLLED", "IN_PROGRESS", "COMPLETED", "DROPPED"])), enrolled_at: v.nullable(v.string()), completed_at: v.nullable(v.string()), changed_at: v.string(), remote_deleted_at: v.nullable(v.string()), remote_data: v.nullable(v.record(v.string(), v.unknown())), user: v.object({ id: v.string(), remote_id: v.string(), first_name: v.nullable(v.string()), last_name: v.nullable(v.string()), work_email: v.nullable(v.string()) }), course_revision: v.object({ id: v.string(), remote_id: v.string(), title: v.nullable(v.string()), course: v.nullable(v.object({ id: v.string(), remote_id: v.string() })) }) }), warnings: v.array(v.object({ message: v.string() })) });

export type PostLmsCourseProgressionsRequestBody = v.InferOutput<typeof PostLmsCourseProgressionsRequestBody>;
export const PostLmsCourseProgressionsRequestBody = v.object({ user_id: v.string(), course_revision_id: v.string() });

export type PostLmsCourseProgressionsCourseProgressionIdCompleteParameterCourseProgressionId = v.InferOutput<typeof PostLmsCourseProgressionsCourseProgressionIdCompleteParameterCourseProgressionId>;
export const PostLmsCourseProgressionsCourseProgressionIdCompleteParameterCourseProgressionId = v.string();

export type PostLmsCourseProgressionsCourseProgressionIdCompletePositiveResponse = v.InferOutput<typeof PostLmsCourseProgressionsCourseProgressionIdCompletePositiveResponse>;
export const PostLmsCourseProgressionsCourseProgressionIdCompletePositiveResponse = v.object({ status: v.string(), data: v.object({ id: v.string(), remote_id: v.string(), user_id: v.string(), course_revision_id: v.string(), status: v.nullable(v.picklist(["ENROLLED", "IN_PROGRESS", "COMPLETED", "DROPPED"])), enrolled_at: v.nullable(v.string()), completed_at: v.nullable(v.string()), changed_at: v.string(), remote_deleted_at: v.nullable(v.string()), remote_data: v.nullable(v.record(v.string(), v.unknown())), user: v.object({ id: v.string(), remote_id: v.string(), first_name: v.nullable(v.string()), last_name: v.nullable(v.string()), work_email: v.nullable(v.string()) }), course_revision: v.object({ id: v.string(), remote_id: v.string(), title: v.nullable(v.string()), course: v.nullable(v.object({ id: v.string(), remote_id: v.string() })) }) }), warnings: v.array(v.object({ message: v.string() })) });

export type PostLmsCourseProgressionsCourseProgressionIdCompleteRequestBody = v.InferOutput<typeof PostLmsCourseProgressionsCourseProgressionIdCompleteRequestBody>;
export const PostLmsCourseProgressionsCourseProgressionIdCompleteRequestBody = v.partial(v.object({ completed_at: v.nullable(v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), score: v.nullable(v.pipe(v.number(), v.integer(), v.minValue(0), v.maxValue(100))) }));

export type GetLmsCoursesParameterCursor = v.InferOutput<typeof GetLmsCoursesParameterCursor>;
export const GetLmsCoursesParameterCursor = v.string();

export type GetLmsCoursesParameterPageSize = v.InferOutput<typeof GetLmsCoursesParameterPageSize>;
export const GetLmsCoursesParameterPageSize = v.optional(v.pipe(v.number(), v.integer(), v.minValue(1), v.maxValue(250)), 100);

export type GetLmsCoursesParameterUpdatedAfter = v.InferOutput<typeof GetLmsCoursesParameterUpdatedAfter>;
export const GetLmsCoursesParameterUpdatedAfter = v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));

export type GetLmsCoursesParameterIncludeDeleted = v.InferOutput<typeof GetLmsCoursesParameterIncludeDeleted>;
export const GetLmsCoursesParameterIncludeDeleted = v.optional(v.picklist(["true", "false"]), "false");

export type GetLmsCoursesParameterIgnoreUnsupportedFilters = v.InferOutput<typeof GetLmsCoursesParameterIgnoreUnsupportedFilters>;
export const GetLmsCoursesParameterIgnoreUnsupportedFilters = v.optional(v.picklist(["true", "false"]), "false");

export type GetLmsCoursesParameterIds = v.InferOutput<typeof GetLmsCoursesParameterIds>;
export const GetLmsCoursesParameterIds = v.string();

export type GetLmsCoursesParameterRemoteIds = v.InferOutput<typeof GetLmsCoursesParameterRemoteIds>;
export const GetLmsCoursesParameterRemoteIds = v.string();

export type GetLmsCoursesPositiveResponse = v.InferOutput<typeof GetLmsCoursesPositiveResponse>;
export const GetLmsCoursesPositiveResponse = v.object({ status: v.string(), data: v.object({ next: v.nullable(v.string()), results: v.array(v.object({ id: v.string(), remote_id: v.string(), provider_id: v.nullable(v.string()), origin_id: v.nullable(v.string()), remote_created_at: v.nullable(v.string()), remote_deleted_at: v.nullable(v.string()), changed_at: v.string(), remote_data: v.nullable(v.record(v.string(), v.unknown())), custom_fields: v.nullable(v.record(v.string(), v.unknown())), integration_fields: v.array(v.object({ id: v.string(), key: v.string(), type: v.picklist(["DEFAULT", "CUSTOM"]), value: v.optional(v.null()), label: v.nullable(v.string()) })), provider: v.nullable(v.object({ id: v.string(), remote_id: v.string(), name: v.nullable(v.string()) })), revisions: v.array(v.object({ id: v.string(), remote_id: v.string(), course_id: v.nullable(v.string()), title: v.nullable(v.string()), description: v.nullable(v.string()), remote_url: v.nullable(v.string()), status: v.nullable(v.picklist(["ACTIVE", "INACTIVE"])), remote_created_at: v.nullable(v.string()), remote_deleted_at: v.nullable(v.string()), changed_at: v.string(), remote_data: v.nullable(v.record(v.string(), v.unknown())), custom_fields: v.nullable(v.record(v.string(), v.unknown())), integration_fields: v.array(v.object({ id: v.string(), key: v.string(), type: v.picklist(["DEFAULT", "CUSTOM"]), value: v.optional(v.null()), label: v.nullable(v.string()) })), skill_assignments: v.array(v.object({ skill: v.object({ id: v.string(), remote_id: v.nullable(v.string()), name: v.nullable(v.string()) }) })) })) })) }) });

export type PostLmsCoursesBulkPositiveResponse = v.InferOutput<typeof PostLmsCoursesBulkPositiveResponse>;
export const PostLmsCoursesBulkPositiveResponse = v.object({ status: v.string(), data: v.object({ task_id: v.string() }), warnings: v.array(v.object({ message: v.string() })) });

export type PostLmsCoursesBulkRequestBody = v.InferOutput<typeof PostLmsCoursesBulkRequestBody>;
export const PostLmsCoursesBulkRequestBody = v.object({ items: v.array(v.object({ origin_id: v.string(), course: v.object({ type: v.string(), title: v.string(), description: v.optional(v.nullable(v.string())), course_url: v.string(), thumbnail_url: v.optional(v.nullable(v.string())), duration: v.optional(v.nullable(v.pipe(v.number(), v.integer(), v.gtValue(0)))), languages: v.optional(v.nullable(v.array(v.pipe(v.string(), v.regex(new RegExp("^[a-z]{2,3}(-[A-Z]{2})?$")))))) }) })) });

export type GetLmsCoursesBulkTaskIdParameterTaskId = v.InferOutput<typeof GetLmsCoursesBulkTaskIdParameterTaskId>;
export const GetLmsCoursesBulkTaskIdParameterTaskId = v.string();

export type GetLmsCoursesBulkTaskIdPositiveResponse = v.InferOutput<typeof GetLmsCoursesBulkTaskIdPositiveResponse>;
export const GetLmsCoursesBulkTaskIdPositiveResponse = v.object({ status: v.string(), data: v.union([v.object({ task_id: v.string(), created_at: v.string(), status: v.string(), completed_at: v.null() }), v.object({ task_id: v.string(), created_at: v.string(), status: v.string(), data: v.array(v.union([v.object({ origin_id: v.string(), status: v.string(), data: v.object({ id: v.string() }) }), v.object({ origin_id: v.string(), status: v.string(), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS", "LMS.COURSE_UPDATE_NOT_SUPPORTED", "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING", "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.string()) }) })])), completed_at: v.string() }), v.object({ task_id: v.string(), created_at: v.string(), status: v.string(), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS", "LMS.COURSE_UPDATE_NOT_SUPPORTED", "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING", "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.string()) }), completed_at: v.string() })]) });

export type PostLmsCoursesCourseIdDeactivateParameterCourseId = v.InferOutput<typeof PostLmsCoursesCourseIdDeactivateParameterCourseId>;
export const PostLmsCoursesCourseIdDeactivateParameterCourseId = v.string();

export type PostLmsCoursesCourseIdDeactivatePositiveResponse = v.InferOutput<typeof PostLmsCoursesCourseIdDeactivatePositiveResponse>;
export const PostLmsCoursesCourseIdDeactivatePositiveResponse = v.object({ status: v.string(), data: v.object({ id: v.string(), remote_id: v.string(), provider_id: v.nullable(v.string()), origin_id: v.nullable(v.string()), remote_created_at: v.nullable(v.string()), remote_deleted_at: v.nullable(v.string()), changed_at: v.string(), remote_data: v.nullable(v.record(v.string(), v.unknown())), custom_fields: v.nullable(v.record(v.string(), v.unknown())), integration_fields: v.array(v.object({ id: v.string(), key: v.string(), type: v.picklist(["DEFAULT", "CUSTOM"]), value: v.optional(v.null()), label: v.nullable(v.string()) })), provider: v.nullable(v.object({ id: v.string(), remote_id: v.string(), name: v.nullable(v.string()) })), revisions: v.array(v.object({ id: v.string(), remote_id: v.string(), course_id: v.nullable(v.string()), title: v.nullable(v.string()), description: v.nullable(v.string()), remote_url: v.nullable(v.string()), status: v.nullable(v.picklist(["ACTIVE", "INACTIVE"])), remote_created_at: v.nullable(v.string()), remote_deleted_at: v.nullable(v.string()), changed_at: v.string(), remote_data: v.nullable(v.record(v.string(), v.unknown())), custom_fields: v.nullable(v.record(v.string(), v.unknown())), integration_fields: v.array(v.object({ id: v.string(), key: v.string(), type: v.picklist(["DEFAULT", "CUSTOM"]), value: v.optional(v.null()), label: v.nullable(v.string()) })), skill_assignments: v.array(v.object({ skill: v.object({ id: v.string(), remote_id: v.nullable(v.string()), name: v.nullable(v.string()) }) })) })) }), warnings: v.array(v.object({ message: v.string() })) });

export type PostLmsCoursesCourseIdDeactivateRequestBody = v.InferOutput<typeof PostLmsCoursesCourseIdDeactivateRequestBody>;
export const PostLmsCoursesCourseIdDeactivateRequestBody = v.partial(v.object({  }));

export type GetLmsSkillsParameterCursor = v.InferOutput<typeof GetLmsSkillsParameterCursor>;
export const GetLmsSkillsParameterCursor = v.string();

export type GetLmsSkillsParameterPageSize = v.InferOutput<typeof GetLmsSkillsParameterPageSize>;
export const GetLmsSkillsParameterPageSize = v.optional(v.pipe(v.number(), v.integer(), v.minValue(1), v.maxValue(250)), 100);

export type GetLmsSkillsParameterUpdatedAfter = v.InferOutput<typeof GetLmsSkillsParameterUpdatedAfter>;
export const GetLmsSkillsParameterUpdatedAfter = v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")));

export type GetLmsSkillsParameterIncludeDeleted = v.InferOutput<typeof GetLmsSkillsParameterIncludeDeleted>;
export const GetLmsSkillsParameterIncludeDeleted = v.optional(v.picklist(["true", "false"]), "false");

export type GetLmsSkillsParameterIgnoreUnsupportedFilters = v.InferOutput<typeof GetLmsSkillsParameterIgnoreUnsupportedFilters>;
export const GetLmsSkillsParameterIgnoreUnsupportedFilters = v.optional(v.picklist(["true", "false"]), "false");

export type GetLmsSkillsParameterIds = v.InferOutput<typeof GetLmsSkillsParameterIds>;
export const GetLmsSkillsParameterIds = v.string();

export type GetLmsSkillsParameterRemoteIds = v.InferOutput<typeof GetLmsSkillsParameterRemoteIds>;
export const GetLmsSkillsParameterRemoteIds = v.string();

export type GetLmsSkillsPositiveResponse = v.InferOutput<typeof GetLmsSkillsPositiveResponse>;
export const GetLmsSkillsPositiveResponse = v.object({ status: v.string(), data: v.object({ next: v.nullable(v.string()), results: v.array(v.object({ id: v.string(), remote_id: v.nullable(v.string()), name: v.nullable(v.string()), remote_created_at: v.nullable(v.string()), remote_deleted_at: v.nullable(v.string()), changed_at: v.string(), remote_data: v.nullable(v.record(v.string(), v.unknown())), custom_fields: v.nullable(v.record(v.string(), v.unknown())), integration_fields: v.array(v.object({ id: v.string(), key: v.string(), type: v.picklist(["DEFAULT", "CUSTOM"]), value: v.optional(v.null()), label: v.nullable(v.string()) })) })) }) });

export type PostAiApplyCareerSitesPositiveResponse = v.InferOutput<typeof PostAiApplyCareerSitesPositiveResponse>;
export const PostAiApplyCareerSitesPositiveResponse = v.object({ status: v.string(), data: v.object({ id: v.string(), label: v.string() }) });

export type PostAiApplyCareerSitesRequestBody = v.InferOutput<typeof PostAiApplyCareerSitesRequestBody>;
export const PostAiApplyCareerSitesRequestBody = v.object({ label: v.string() });

export type GetAiApplyCareerSitesParameterCursor = v.InferOutput<typeof GetAiApplyCareerSitesParameterCursor>;
export const GetAiApplyCareerSitesParameterCursor = v.string();

export type GetAiApplyCareerSitesParameterPageSize = v.InferOutput<typeof GetAiApplyCareerSitesParameterPageSize>;
export const GetAiApplyCareerSitesParameterPageSize = v.optional(v.pipe(v.number(), v.integer(), v.minValue(1), v.maxValue(250)), 100);

export type GetAiApplyCareerSitesParameterIds = v.InferOutput<typeof GetAiApplyCareerSitesParameterIds>;
export const GetAiApplyCareerSitesParameterIds = v.string();

export type GetAiApplyCareerSitesPositiveResponse = v.InferOutput<typeof GetAiApplyCareerSitesPositiveResponse>;
export const GetAiApplyCareerSitesPositiveResponse = v.object({ status: v.string(), data: v.object({ results: v.array(v.object({ id: v.string(), label: v.string() })), next: v.nullable(v.string()) }) });

export type GetAiApplyPostingsParameterCursor = v.InferOutput<typeof GetAiApplyPostingsParameterCursor>;
export const GetAiApplyPostingsParameterCursor = v.string();

export type GetAiApplyPostingsParameterPageSize = v.InferOutput<typeof GetAiApplyPostingsParameterPageSize>;
export const GetAiApplyPostingsParameterPageSize = v.optional(v.pipe(v.number(), v.integer(), v.minValue(1), v.maxValue(250)), 100);

export type GetAiApplyPostingsParameterIds = v.InferOutput<typeof GetAiApplyPostingsParameterIds>;
export const GetAiApplyPostingsParameterIds = v.string();

export type GetAiApplyPostingsParameterCareerSiteIds = v.InferOutput<typeof GetAiApplyPostingsParameterCareerSiteIds>;
export const GetAiApplyPostingsParameterCareerSiteIds = v.string();

export type GetAiApplyPostingsParameterJobCodes = v.InferOutput<typeof GetAiApplyPostingsParameterJobCodes>;
export const GetAiApplyPostingsParameterJobCodes = v.string();

export type GetAiApplyPostingsPositiveResponse = v.InferOutput<typeof GetAiApplyPostingsPositiveResponse>;
export const GetAiApplyPostingsPositiveResponse = v.object({ status: v.string(), data: v.object({ results: v.array(v.object({ id: v.string(), career_site: v.object({ id: v.string(), label: v.string() }), url: v.string(), job_code: v.nullable(v.string()), created_at: v.string(), updated_at: v.string(), archived_at: v.nullable(v.string()), archived_reason: v.nullable(v.picklist(["JOB_POSTING_TAKEN_OFFLINE", "MANUAL_ARCHIVE", "REMOVED_FROM_JOB_FEED"])), availability: v.picklist(["APPLYABLE", "PENDING", "ARCHIVED", "UNAVAILABLE"]) })), next: v.nullable(v.string()) }) });

export type PostAiApplyPostingsPositiveResponse = v.InferOutput<typeof PostAiApplyPostingsPositiveResponse>;
export const PostAiApplyPostingsPositiveResponse = v.object({ status: v.string(), data: v.object({ id: v.string(), career_site: v.object({ id: v.string(), label: v.string() }), url: v.string(), job_code: v.nullable(v.string()), created_at: v.string(), updated_at: v.string(), archived_at: v.nullable(v.string()), archived_reason: v.nullable(v.picklist(["JOB_POSTING_TAKEN_OFFLINE", "MANUAL_ARCHIVE", "REMOVED_FROM_JOB_FEED"])), availability: v.picklist(["APPLYABLE", "PENDING", "ARCHIVED", "UNAVAILABLE"]) }) });

export type PostAiApplyPostingsRequestBody = v.InferOutput<typeof PostAiApplyPostingsRequestBody>;
export const PostAiApplyPostingsRequestBody = v.object({ url: v.pipe(v.string(), v.url(), v.regex(new RegExp("^https?:\\/\\/"))), job_code: v.optional(v.string()), location: v.optional(v.nullable(v.object({ country: v.picklist(["AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "YE", "YT", "ZA", "ZM", "ZW"]), postal_code: v.optional(v.string()) }))), career_site_id: v.string() });

export type PostAiApplyPostingsPostingIdInquireParameterPostingId = v.InferOutput<typeof PostAiApplyPostingsPostingIdInquireParameterPostingId>;
export const PostAiApplyPostingsPostingIdInquireParameterPostingId = v.string();

export type PostAiApplyPostingsPostingIdInquirePositiveResponse = v.InferOutput<typeof PostAiApplyPostingsPostingIdInquirePositiveResponse>;
export const PostAiApplyPostingsPostingIdInquirePositiveResponse = v.object({ status: v.string(), data: v.object({ application_form: v.array(v.union([v.object({ block_type: v.string(), question_id: v.string(), label: v.string(), description: v.nullable(v.string()), required: v.boolean(), category: v.nullable(v.literal("EEO")), question_type: v.picklist(["TEXT", "NUMBER", "BOOLEAN", "FILE", "DATE", "SINGLE_SELECT", "MULTI_SELECT"]), unified_key: v.nullable(v.picklist(["EMAIL", "RESIDENCE_TYPE", "RESIDENCE_FULL_STRING", "RESIDENCE_COUNTRY", "RESIDENCE_CITY", "RESIDENCE_STATE", "RESIDENCE_LINE_1", "RESIDENCE_LINE_2", "RESIDENCE_ZIP_CODE", "APPLICANT_POOL_CONSENT", "TERMS_AND_CONDITIONS", "FIRST_NAME", "LAST_NAME", "FULL_NAME", "GENDER", "EXPECTED_START_DATE", "RESUME", "BIRTH_DATE", "PHONE_NUMBER_TYPE", "FULL_PHONE_NUMBER", "PHONE_COUNTRY_CODE", "PHONE_NATIONAL_NUMBER", "PHONE_EXTENSION"])), options: v.nullable(v.array(v.object({ id: v.string(), label: v.string(), unified_key: v.nullable(v.picklist(["HOME", "WORK", "MAILING", "AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "YE", "YT", "ZA", "ZM", "ZW", "MALE", "FEMALE", "NON_BINARY", "NOT_SPECIFIED", "MOBILE", "LANDLINE", "SOURCE_OTHER", "SOURCE_OTHER_JOB_BOARD"])) }))), display_when: v.nullable(v.object({ question_id: v.string(), answer_equals: v.union([v.string(), v.array(v.string()), v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)), v.boolean(), v.object({ name: v.string(), content_type: v.string(), data: v.unknown() })]) })) }), v.object({ block_type: v.string(), label: v.string(), children: v.array(v.record(v.string(), v.unknown())) })])), submission_token: v.string() }) });

export type PostAiApplyPostingsPostingIdInquireRequestBody = v.InferOutput<typeof PostAiApplyPostingsPostingIdInquireRequestBody>;
export const PostAiApplyPostingsPostingIdInquireRequestBody = v.partial(v.object({  }));

export type PostAiApplyApplyPositiveResponse = v.InferOutput<typeof PostAiApplyApplyPositiveResponse>;
export const PostAiApplyApplyPositiveResponse = v.object({ status: v.string(), data: v.object({ id: v.string(), posting_id: v.string(), status: v.string(), created_at: v.string(), updated_at: v.string() }) });

export type PostAiApplyApplyRequestBody = v.InferOutput<typeof PostAiApplyApplyRequestBody>;
export const PostAiApplyApplyRequestBody = v.object({ submission_token: v.string(), candidate_email: v.pipe(v.string(), v.email()), query_params: v.optional(v.record(v.string(), v.string())), screening_question_answers: v.array(v.object({ question_id: v.string(), answer: v.union([v.string(), v.array(v.string()), v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)), v.boolean(), v.object({ name: v.string(), content_type: v.string(), data: v.string() })]) })), additional_clicks: v.optional(v.pipe(v.number(), v.integer(), v.minValue(0), v.maxValue(30))), additional_clicks_scatter_duration: v.optional(v.pipe(v.number(), v.integer(), v.minValue(1))) });

export type GetAiApplyApplicationsParameterCursor = v.InferOutput<typeof GetAiApplyApplicationsParameterCursor>;
export const GetAiApplyApplicationsParameterCursor = v.string();

export type GetAiApplyApplicationsParameterPageSize = v.InferOutput<typeof GetAiApplyApplicationsParameterPageSize>;
export const GetAiApplyApplicationsParameterPageSize = v.optional(v.pipe(v.number(), v.integer(), v.minValue(1), v.maxValue(250)), 100);

export type GetAiApplyApplicationsParameterIds = v.InferOutput<typeof GetAiApplyApplicationsParameterIds>;
export const GetAiApplyApplicationsParameterIds = v.string();

export type GetAiApplyApplicationsParameterJobPostingIds = v.InferOutput<typeof GetAiApplyApplicationsParameterJobPostingIds>;
export const GetAiApplyApplicationsParameterJobPostingIds = v.string();

export type GetAiApplyApplicationsPositiveResponse = v.InferOutput<typeof GetAiApplyApplicationsPositiveResponse>;
export const GetAiApplyApplicationsPositiveResponse = v.object({ status: v.string(), data: v.object({ results: v.array(v.object({ id: v.string(), job_posting_id: v.string(), status: v.picklist(["SUBMITTED", "DUPLICATE", "PENDING", "FAILED"]), created_at: v.string(), updated_at: v.string() })), next: v.nullable(v.string()) }) });

export type GetAiApplyUnifiedApiJobsParameterCursor = v.InferOutput<typeof GetAiApplyUnifiedApiJobsParameterCursor>;
export const GetAiApplyUnifiedApiJobsParameterCursor = v.string();

export type GetAiApplyUnifiedApiJobsParameterPageSize = v.InferOutput<typeof GetAiApplyUnifiedApiJobsParameterPageSize>;
export const GetAiApplyUnifiedApiJobsParameterPageSize = v.optional(v.pipe(v.number(), v.integer(), v.minValue(1), v.maxValue(5)), 5);

export type GetAiApplyUnifiedApiJobsParameterIds = v.InferOutput<typeof GetAiApplyUnifiedApiJobsParameterIds>;
export const GetAiApplyUnifiedApiJobsParameterIds = v.string();

export type GetAiApplyUnifiedApiJobsParameterRemoteIds = v.InferOutput<typeof GetAiApplyUnifiedApiJobsParameterRemoteIds>;
export const GetAiApplyUnifiedApiJobsParameterRemoteIds = v.string();

export type GetAiApplyUnifiedApiJobsParameterJobCodes = v.InferOutput<typeof GetAiApplyUnifiedApiJobsParameterJobCodes>;
export const GetAiApplyUnifiedApiJobsParameterJobCodes = v.string();

export type GetAiApplyUnifiedApiJobsParameterCareerSiteIds = v.InferOutput<typeof GetAiApplyUnifiedApiJobsParameterCareerSiteIds>;
export const GetAiApplyUnifiedApiJobsParameterCareerSiteIds = v.string();

export type GetAiApplyUnifiedApiJobsPositiveResponse = v.InferOutput<typeof GetAiApplyUnifiedApiJobsPositiveResponse>;
export const GetAiApplyUnifiedApiJobsPositiveResponse = v.object({ status: v.string(), data: v.object({ results: v.array(v.object({ id: v.string(), remote_id: v.string(), name: v.nullable(v.string()), job_code: v.nullable(v.string()), description: v.nullable(v.string()), confidential: v.nullable(v.boolean()), weekly_hours: v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))), category: v.nullable(v.string()), department: v.nullable(v.string()), post_url: v.nullable(v.string()), experience_level: v.nullable(v.string()), salary_amount: v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))), salary_amount_from: v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))), salary_amount_to: v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))), salary_currency: v.nullable(v.string()), custom_fields: v.nullable(v.record(v.string(), v.unknown())), integration_fields: v.array(v.record(v.string(), v.unknown())), opened_at: v.nullable(v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")))), closed_at: v.nullable(v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")))), remote_created_at: v.nullable(v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")))), remote_updated_at: v.nullable(v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")))), contact_id: v.nullable(v.string()), remote_data: v.nullable(v.record(v.string(), v.unknown())), changed_at: v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$"))), remote_deleted_at: v.nullable(v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")))), remote_url: v.nullable(v.string()), stages: v.array(v.record(v.string(), v.unknown())), screening_questions: v.nullable(v.array(v.object({ id: v.string(), remote_id: v.nullable(v.string()), title: v.nullable(v.string()), description: v.nullable(v.string()), format: v.optional(v.union([v.object({ display_type: v.optional(v.nullable(v.picklist(["SINGLE_LINE", "MULTI_LINE", "EMAIL", "URL"]))), max_length: v.optional(v.nullable(v.pipe(v.number(), v.integer()))), type: v.string() }), v.object({ display_type: v.optional(v.nullable(v.optional(v.picklist(["SLIDER", "FIELD"]), "FIELD")), "FIELD"), max: v.optional(v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)))), min: v.optional(v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)))), type: v.string() }), v.object({ accepted_mime_types: v.optional(v.nullable(v.array(v.string()))), max_file_size_bytes: v.optional(v.nullable(v.pipe(v.number(), v.integer()))), type: v.string() }), v.object({ display_type: v.optional(v.nullable(v.picklist(["DROPDOWN", "RADIO"]))), options: v.array(v.object({ id: v.string(), remote_id: v.optional(v.nullable(v.string())), name: v.string() })), type: v.string() }), v.object({ type: v.string() }), v.object({ type: v.string() }), v.object({ options: v.array(v.object({ id: v.string(), remote_id: v.optional(v.nullable(v.string())), name: v.string() })), type: v.string() }), v.object({ type: v.string() }), v.object({ raw_question: v.optional(v.unknown()), type: v.string() }), v.null()])), category: v.nullable(v.literal("EEO")), index: v.optional(v.nullable(v.pipe(v.number(), v.integer()))), required: v.nullable(v.boolean()), precondition_question_id: v.optional(v.nullable(v.string())), precondition_options: v.optional(v.union([v.array(v.string()), v.array(v.boolean()), v.null()]), null) }))), job_postings: v.array(v.record(v.string(), v.unknown())), hiring_team: v.array(v.record(v.string(), v.unknown())), employment_type: v.optional(v.union([v.picklist(["FULL_TIME", "PART_TIME", "CONTRACT", "SEASONAL", "INTERNSHIP"]), v.string(), v.null()])), status: v.optional(v.union([v.picklist(["OPEN", "CLOSED", "DRAFT", "ARCHIVED"]), v.string(), v.null()])), visibility: v.nullable(v.string()), remote_work_status: v.nullable(v.string()), salary_period: v.nullable(v.string()), location: v.optional(v.nullable(v.partial(v.object({ city: v.nullable(v.string()), country: v.nullable(v.string()), raw: v.nullable(v.string()), state: v.nullable(v.string()), street_1: v.nullable(v.string()), street_2: v.nullable(v.string()), zip_code: v.nullable(v.string()) })))) })), next: v.nullable(v.string()) }) });

export type PostAiApplyUnifiedApiJobsJobIdApplicationsParameterJobId = v.InferOutput<typeof PostAiApplyUnifiedApiJobsJobIdApplicationsParameterJobId>;
export const PostAiApplyUnifiedApiJobsJobIdApplicationsParameterJobId = v.string();

export type PostAiApplyUnifiedApiJobsJobIdApplicationsPositiveResponse = v.InferOutput<typeof PostAiApplyUnifiedApiJobsJobIdApplicationsPositiveResponse>;
export const PostAiApplyUnifiedApiJobsJobIdApplicationsPositiveResponse = v.object({ status: v.string(), data: v.object({ id: v.string(), remote_id: v.nullable(v.string()), outcome: v.nullable(v.picklist(["PENDING", "HIRED", "DECLINED"])), rejection_reason_name: v.nullable(v.string()), rejected_at: v.nullable(v.string()), current_stage_id: v.nullable(v.string()), job_id: v.nullable(v.string()), candidate_id: v.nullable(v.string()), screening_question_answers: v.optional(v.nullable(v.optional(v.array(v.union([v.object({ answer: v.object({ content: v.nullable(v.string()) }), question: v.object({ remote_id: v.nullable(v.string()), title: v.string(), type: v.string() }) }), v.object({ answer: v.object({ choice: v.nullable(v.string()) }), question: v.object({ remote_id: v.nullable(v.string()), title: v.string(), type: v.string() }) }), v.object({ answer: v.partial(v.object({ choices: v.optional(v.array(v.string()), []) })), question: v.object({ remote_id: v.nullable(v.string()), title: v.string(), type: v.string() }) }), v.object({ answer: v.object({ checked: v.nullable(v.boolean()) }), question: v.object({ remote_id: v.nullable(v.string()), title: v.string(), type: v.string() }) }), v.object({ answer: v.object({ number: v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))) }), question: v.object({ remote_id: v.nullable(v.string()), title: v.string(), type: v.string() }) }), v.object({ answer: v.object({ date: v.nullable(v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")))) }), question: v.object({ remote_id: v.nullable(v.string()), title: v.string(), type: v.string() }) }), v.object({ answer: v.partial(v.object({ raw: v.null() })), question: v.object({ remote_id: v.nullable(v.string()), title: v.string(), type: v.string() }) })])), [])), []), custom_fields: v.nullable(v.record(v.string(), v.unknown())), integration_fields: v.array(v.object({ id: v.string(), key: v.string(), type: v.picklist(["DEFAULT", "CUSTOM"]), value: v.optional(v.null()), label: v.nullable(v.string()) })), remote_url: v.nullable(v.pipe(v.string(), v.url())), changed_at: v.string(), remote_deleted_at: v.nullable(v.string()), remote_created_at: v.nullable(v.string()), remote_updated_at: v.nullable(v.string()), remote_data: v.nullable(v.record(v.string(), v.unknown())), current_stage: v.nullable(v.object({ id: v.string(), name: v.nullable(v.string()), remote_id: v.nullable(v.string()), index: v.nullable(v.pipe(v.number(), v.integer())) })), job: v.nullable(v.object({ id: v.string(), name: v.nullable(v.string()), remote_id: v.string() })), candidate: v.nullable(v.object({ id: v.string(), remote_id: v.string(), first_name: v.nullable(v.string()), last_name: v.nullable(v.string()), company: v.nullable(v.string()), title: v.nullable(v.string()), confidential: v.nullable(v.boolean()), source: v.nullable(v.string()), phone_numbers: v.optional(v.nullable(v.optional(v.array(v.object({ phone_number: v.string(), type: v.optional(v.nullable(v.string())) })), [])), []), email_addresses: v.optional(v.nullable(v.optional(v.array(v.object({ email_address: v.optional(v.nullable(v.pipe(v.string(), v.regex(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$"))))), type: v.nullable(v.string()) })), [])), []), social_media: v.optional(v.nullable(v.optional(v.array(v.partial(v.object({ link: v.nullable(v.string()), type: v.nullable(v.string()), username: v.nullable(v.string()) }))), [])), []), location: v.optional(v.nullable(v.partial(v.object({ city: v.nullable(v.string()), country: v.nullable(v.string()), raw: v.nullable(v.string()), state: v.nullable(v.string()), street_1: v.nullable(v.string()), street_2: v.nullable(v.string()), zip_code: v.nullable(v.string()) })))), custom_fields: v.nullable(v.record(v.string(), v.unknown())), integration_fields: v.array(v.object({ id: v.string(), key: v.string(), type: v.picklist(["DEFAULT", "CUSTOM"]), value: v.optional(v.null()), label: v.nullable(v.string()) })), remote_url: v.nullable(v.pipe(v.string(), v.url())), remote_created_at: v.nullable(v.string()), remote_updated_at: v.nullable(v.string()), remote_data: v.nullable(v.record(v.string(), v.unknown())), changed_at: v.string(), remote_deleted_at: v.nullable(v.string()), tags: v.array(v.object({ id: v.string(), name: v.nullable(v.string()), remote_id: v.nullable(v.string()) })) })) }) });

export type PostAiApplyUnifiedApiJobsJobIdApplicationsRequestBody = v.InferOutput<typeof PostAiApplyUnifiedApiJobsJobIdApplicationsRequestBody>;
export const PostAiApplyUnifiedApiJobsJobIdApplicationsRequestBody = v.object({ stage_id: v.optional(v.string()), candidate: v.object({ first_name: v.string(), last_name: v.string(), email_address: v.pipe(v.string(), v.email()), additional_email_addresses: v.optional(v.array(v.object({ type: v.picklist(["PERSONAL", "WORK", "OTHER"]), email_address: v.pipe(v.string(), v.email()) }))), company: v.optional(v.string()), title: v.optional(v.string()), phone_number: v.optional(v.string()), additional_phone_numbers: v.optional(v.array(v.object({ type: v.picklist(["PERSONAL", "WORK", "OTHER"]), phone_number: v.string() }))), location: v.optional(v.object({ city: v.optional(v.string()), country: v.pipe(v.string(), v.regex(new RegExp("^[A-Z]{2}$"))), state: v.optional(v.string()), street_1: v.optional(v.string()), zip_code: v.optional(v.string()) })), gender: v.optional(v.picklist(["MALE", "FEMALE", "OTHER"])), availability_date: v.optional(v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), salary_expectations: v.optional(v.object({ period: v.picklist(["MONTH", "YEAR"]), amount: v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)) })), social_links: v.optional(v.array(v.object({ url: v.pipe(v.string(), v.url()) })), []) }), attachments: v.optional(v.array(v.object({ name: v.string(), content_type: v.optional(v.pipe(v.string(), v.regex(new RegExp("^[\\w.-]+\\/[\\w.-]+$")))), data_url: v.optional(v.pipe(v.string(), v.url())), data: v.optional(v.string()), type: v.picklist(["CV", "COVER_LETTER", "OTHER"]) })), []), source: v.optional(v.partial(v.object({ name: v.string(), unified_key: v.string(), id: v.string() }))), sourced_by: v.optional(v.object({ user_id: v.string() })), gdpr_consent: v.optional(v.partial(v.object({ expires_at: v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))), given: v.boolean() }))), remote_fields: v.optional(v.intersect([v.partial(v.object({ successfactors: v.partial(v.object({ Candidate: v.record(v.string(), v.unknown()), JobApplication: v.record(v.string(), v.unknown()), copyJobApplicationAttachments: v.boolean(), update_existing_candidate: v.nullable(v.boolean()) })), personio: v.partial(v.object({ application: v.record(v.string(), v.unknown()) })), talentsoft: v.partial(v.object({ applicant: v.record(v.string(), v.unknown()), application: v.record(v.string(), v.unknown()) })), teamtailor: v.partial(v.object({ candidate: v.record(v.string(), v.unknown()), application: v.partial(v.object({ attributes: v.record(v.string(), v.unknown()) })) })), greenhouse: v.partial(v.object({ candidate: v.record(v.string(), v.unknown()), application: v.record(v.string(), v.unknown()) })), lever: v.partial(v.object({ candidate: v.record(v.string(), v.unknown()) })), workable: v.partial(v.object({ candidate: v.record(v.string(), v.unknown()) })), workday: v.partial(v.object({ Candidate_Data: v.partial(v.object({ Name_Detail_Data: v.partial(v.object({ Middle_Name: v.string(), Social_Suffix_Reference: v.object({ Predefined_Name_Component_ID: v.string() }) })), Language_Reference: v.object({ WID: v.string() }), Job_Application_Data: v.partial(v.object({ Job_Applied_To_Data: v.partial(v.object({ Global_Personal_Information_Data: v.partial(v.object({ Date_of_Birth: v.string() })) })), Resume_Data: v.partial(v.object({ Education_Data: v.array(v.partial(v.object({ School_Name: v.string(), First_Year_Attended: v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)), Last_Year_Attended: v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)), Field_of_Study_Reference: v.object({ WID: v.string() }), Degree_Reference: v.object({ WID: v.string() }), Grade_Average: v.string() }))), Skill_Data: v.array(v.partial(v.object({ Skill_Name: v.string() }))), Language_Data: v.array(v.partial(v.object({ Language_Reference: v.partial(v.object({ WID: v.string() })), Language: v.object({ Native: v.optional(v.boolean()), Language_Ability: v.array(v.partial(v.object({ Language_Ability_Data: v.partial(v.object({ Language_Proficiency_Reference: v.object({ WID: v.string() }), Language_Ability_Type_Reference: v.object({ WID: v.string() }) })) }))) }) }))), Experience_Data: v.array(v.object({ Company_Name: v.string(), Title: v.string(), Location: v.optional(v.string()), Start_Date: v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))), End_Date: v.optional(v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")))), Currently_Work_Here: v.optional(v.boolean()), Description: v.optional(v.string()) })) })) })), Contact_Data: v.partial(v.object({ Location_Data: v.partial(v.object({ Address_Line_1: v.string(), Address_Line_2: v.string(), Region_Subdivision_1: v.string(), Country_Region_Reference: v.object({ Country_Region_ID: v.string() }), Country_City_Reference: v.object({ WID: v.string() }) })) })), Worker_Reference: v.partial(v.object({ WID: v.string(), Employee_ID: v.string() })) })), Override_Source_Reference_WID: v.string() })), zohorecruit: v.partial(v.object({ candidate: v.record(v.string(), v.unknown()) })), bullhorn: v.partial(v.object({ candidate: v.record(v.string(), v.unknown()), job_submission: v.record(v.string(), v.unknown()) })), smartrecruiters: v.partial(v.object({ candidate_with_questions: v.record(v.string(), v.unknown()), candidate_without_questions: v.record(v.string(), v.unknown()), candidate: v.record(v.string(), v.unknown()), consent_decisions: v.partial(v.object({ SINGLE: v.boolean(), SMART_RECRUIT: v.boolean(), SMART_CRM: v.boolean(), SMART_MESSAGE_SMS: v.boolean(), SMART_MESSAGE_WHATSAPP: v.boolean() })) })), talentadore: v.partial(v.object({ applications: v.record(v.string(), v.unknown()) })), guidecom: v.partial(v.object({ candidate: v.record(v.string(), v.unknown()) })), dvinci: v.partial(v.object({ application: v.record(v.string(), v.unknown()), candidate: v.record(v.string(), v.unknown()) })), hrworks: v.partial(v.object({ jobApplication: v.record(v.string(), v.unknown()) })), jobylon: v.partial(v.object({ application: v.partial(v.object({ message: v.string() })) })), avature: v.partial(v.object({ workflow: v.partial(v.object({ step: v.object({ id: v.pipe(v.number(), v.integer()) }) })) })), recruitee: v.partial(v.object({ candidate: v.partial(v.object({ cover_letter_text: v.string() })) })), rexx: v.partial(v.object({ candidate: v.record(v.string(), v.unknown()) })), umantis: v.partial(v.object({ person: v.record(v.string(), v.unknown()) })), piloga: v.partial(v.object({ candidate: v.partial(v.object({ street: v.string() })) })), pinpoint: v.partial(v.object({ candidate: v.record(v.string(), v.unknown()) })), covetorest: v.partial(v.object({ candidate: v.partial(v.object({ mandant: v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)) })) })) })), v.partial(v.object({ greenhouse: v.partial(v.object({ post_headers: v.partial(v.object({ "On-Behalf-Of": v.nullable(v.string()) })) })), workable: v.partial(v.object({ on_behalf_of_user_remote_id: v.string() })) }))])), screening_question_answers: v.optional(v.array(v.object({ question_id: v.string(), answer: v.union([v.string(), v.boolean(), v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)), v.array(v.string()), v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))), v.object({ name: v.string(), content_type: v.optional(v.pipe(v.string(), v.regex(new RegExp("^[\\w.-]+\\/[\\w.-]+$")))), data_url: v.optional(v.pipe(v.string(), v.url())), data: v.optional(v.string()) })]) }))), query_params: v.optional(v.record(v.string(), v.string())) });

export type GetAiApplyJobFeedsParameterCursor = v.InferOutput<typeof GetAiApplyJobFeedsParameterCursor>;
export const GetAiApplyJobFeedsParameterCursor = v.string();

export type GetAiApplyJobFeedsParameterPageSize = v.InferOutput<typeof GetAiApplyJobFeedsParameterPageSize>;
export const GetAiApplyJobFeedsParameterPageSize = v.optional(v.pipe(v.number(), v.integer(), v.minValue(1), v.maxValue(250)), 100);

export type GetAiApplyJobFeedsParameterIds = v.InferOutput<typeof GetAiApplyJobFeedsParameterIds>;
export const GetAiApplyJobFeedsParameterIds = v.string();

export type GetAiApplyJobFeedsPositiveResponse = v.InferOutput<typeof GetAiApplyJobFeedsPositiveResponse>;
export const GetAiApplyJobFeedsPositiveResponse = v.object({ status: v.string(), data: v.object({ results: v.array(v.object({ id: v.string(), label: v.string() })), next: v.nullable(v.string()) }) });

export type PostAiApplyJobFeedsPositiveResponse = v.InferOutput<typeof PostAiApplyJobFeedsPositiveResponse>;
export const PostAiApplyJobFeedsPositiveResponse = v.object({ status: v.string(), data: v.object({ id: v.string(), label: v.string() }) });

export type PostAiApplyJobFeedsRequestBody = v.InferOutput<typeof PostAiApplyJobFeedsRequestBody>;
export const PostAiApplyJobFeedsRequestBody = v.object({ label: v.pipe(v.string(), v.minLength(1)) });

export type PostConnectCreateLinkPositiveResponse = v.InferOutput<typeof PostConnectCreateLinkPositiveResponse>;
export const PostConnectCreateLinkPositiveResponse = v.object({ status: v.string(), data: v.object({ link: v.pipe(v.string(), v.url()) }) });

export type PostConnectCreateLinkRequestBody = v.InferOutput<typeof PostConnectCreateLinkRequestBody>;
export const PostConnectCreateLinkRequestBody = v.object({ end_user_email: v.pipe(v.string(), v.email()), end_user_organization_name: v.pipe(v.string(), v.minLength(1)), end_user_origin_id: v.optional(v.nullable(v.pipe(v.string(), v.minLength(1)))), remote_environment: v.optional(v.nullable(v.string())), integration_category: v.optional(v.picklist(["HRIS", "ATS", "ASSESSMENT", "LMS"]), "HRIS"), integration_tool: v.optional(v.nullable(v.picklist(["workday", "successfactors", "smartrecruiters", "factorial", "oraclerecruiting", "lever", "icims", "cornerstonetalentlink", "recruitee", "recruiterflow", "greenhouse", "greenhousejobboard", "teamtailor", "teamtailorjobboards", "ashby", "talentsoft", "talentsoftcustomer", "concludis", "talention", "piloga", "onlyfy", "personio", "ukgpro", "ukgready", "adpworkforcenow", "taleo", "rexx", "afas", "bamboohr", "bullhorn", "bullhornlogin", "workable", "jobvite", "fountain", "softgarden", "softgardenpartner", "pinpoint", "welcometothejungle", "dvinci", "dvinciadmin", "join", "sagehr", "traffit", "erecruiter", "abacusumantis", "umantis", "jobylon", "taleez", "hrworks", "otys", "zohorecruit", "ceipal", "eploy", "jobdiva", "careerplug", "perview", "eightfold", "paylocity", "paycor", "avature", "apploi", "phenom", "paradox", "heyrecruit", "recruhr", "recruitcrm", "jazzhr", "bite", "brassring", "homerun", "mysolution", "carerix", "hroffice", "talentclue", "inrecruiting", "ubeeo", "connexys", "hr4you", "cornerstoneondemand", "zvooverecruit", "odoo", "comeet", "compleet", "compleetpitcher", "gem", "laura", "covetorest", "coveto", "mercury", "crelate", "manatal", "avionte", "mhmhr", "asymbl", "breezyhr", "flatchr", "dayforce", "digitalrecruiters", "applicantstack", "reachmee", "talentadore", "sandbox", "guidecom", "spott", "loxo", "kula", "workdaycustomreport", "workdaycustomreportsftp", "ukgprowfm", "payfitcustomer", "payfitpartner", "payfit", "employmenthero", "fourth", "kenjo", "heavenhr", "hibob", "cezannehr", "entraid", "azuread", "googleworkspace", "nmbrs", "deel", "remotecom", "iriscascade", "okta", "sagepeople", "humaans", "eurecia", "oraclehcm", "officient", "sesamehr", "charliehr", "abacus", "zohopeople", "gusto", "breathehr", "catalystone", "mirus", "alexishr", "simployer", "peple", "youserve", "hansalog", "lattice", "latticetalent", "hoorayhr", "trinet", "trinetpeo", "namely", "paycom", "insperity", "paychex", "rippling", "sapling", "peoplehr", "lucca", "zelt", "planday", "boondmanager", "haileyhr", "silae", "oysterhr", "kiwihr", "square", "perbilityhelix", "leapsome", "loket", "workforcecom", "peoplefirst", "sdworx", "itrent", "absenceio", "a3innuvanomina", "scim", "datevlauds", "datevhr", "datev", "datevlug", "sympa", "youforce", "nibelis", "peoplexd", "sftp", "sftpfetch", "360learning", "talentlms", "udemy", "linkedinlearning", "moodle"]))), language: v.optional(v.nullable(v.optional(v.picklist(["en", "de", "fr", "it", "es"]), "en")), "en"), scope_config_id: v.optional(v.nullable(v.string())), enable_filtering: v.optional(v.boolean(), false), enable_field_mapping: v.optional(v.boolean(), false), link_type: v.optional(v.picklist(["EMBEDDED", "MAGIC_LINK"]), "EMBEDDED") });

export type GetConnectIntegrationByTokenTokenParameterToken = v.InferOutput<typeof GetConnectIntegrationByTokenTokenParameterToken>;
export const GetConnectIntegrationByTokenTokenParameterToken = v.string();

export type GetConnectIntegrationByTokenTokenPositiveResponse = v.InferOutput<typeof GetConnectIntegrationByTokenTokenPositiveResponse>;
export const GetConnectIntegrationByTokenTokenPositiveResponse = v.object({ status: v.string(), data: v.object({ tool: v.string(), id: v.string(), end_user_origin_id: v.nullable(v.string()), end_user_organization_name: v.string(), end_user_email: v.nullable(v.pipe(v.string(), v.regex(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$")))), setup_status: v.picklist(["INCOMPLETE", "FINAL_SYNC_PENDING", "COMPLETED"]) }) });

export type PostConnectActivateIntegrationPositiveResponse = v.InferOutput<typeof PostConnectActivateIntegrationPositiveResponse>;
export const PostConnectActivateIntegrationPositiveResponse = v.object({ status: v.string(), data: v.object({ tool: v.string(), id: v.string(), end_user_origin_id: v.nullable(v.string()), end_user_organization_name: v.string(), end_user_email: v.nullable(v.pipe(v.string(), v.regex(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$")))), setup_status: v.picklist(["INCOMPLETE", "FINAL_SYNC_PENDING", "COMPLETED"]) }) });

export type PostConnectActivateIntegrationRequestBody = v.InferOutput<typeof PostConnectActivateIntegrationRequestBody>;
export const PostConnectActivateIntegrationRequestBody = v.object({ token: v.string() });

export type GetCustomDatevSystemInformationPositiveResponse = v.InferOutput<typeof GetCustomDatevSystemInformationPositiveResponse>;
export const GetCustomDatevSystemInformationPositiveResponse = v.object({ status: v.string(), data: v.object({ consultant_number: v.pipe(v.number(), v.minValue(1000), v.maxValue(9999999)), client_number: v.pipe(v.number(), v.minValue(1), v.maxValue(99999)), target_system: v.picklist(["LODAS", "LuG"]) }) });

export type PostCustomDatevPassthroughPositiveResponse = v.InferOutput<typeof PostCustomDatevPassthroughPositiveResponse>;
export const PostCustomDatevPassthroughPositiveResponse = v.object({ status: v.string(), data: v.record(v.string(), v.unknown()), warnings: v.array(v.object({ message: v.string() })) });

export type PostCustomDatevPassthroughRequestBody = v.InferOutput<typeof PostCustomDatevPassthroughRequestBody>;
export const PostCustomDatevPassthroughRequestBody = v.object({ file_content: v.pipe(v.string(), v.minLength(1)), accounting_month: v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))), target_system: v.picklist(["LODAS", "LuG"]), file_type: v.picklist(["STAMMDATEN", "BEWEGUNGSDATEN"]), file_name: v.string() });

export type GetCustomDatevCheckEauPermissionPositiveResponse = v.InferOutput<typeof GetCustomDatevCheckEauPermissionPositiveResponse>;
export const GetCustomDatevCheckEauPermissionPositiveResponse = v.object({ status: v.string(), data: v.object({ ready: v.boolean(), error: v.optional(v.string()) }), warnings: v.array(v.object({ message: v.string() })) });

export type GetCustomDatevEauRequestsEauIdParameterEauId = v.InferOutput<typeof GetCustomDatevEauRequestsEauIdParameterEauId>;
export const GetCustomDatevEauRequestsEauIdParameterEauId = v.string();

export type GetCustomDatevEauRequestsEauIdPositiveResponse = v.InferOutput<typeof GetCustomDatevEauRequestsEauIdPositiveResponse>;
export const GetCustomDatevEauRequestsEauIdPositiveResponse = v.object({ status: v.string(), data: v.object({ raw: v.object({ source: v.string(), start_work_incapacity: v.string(), collaboration_identifier: v.optional(v.string()), feedbacks_from_health_insurance: v.array(v.object({ guid: v.string(), contact_person: v.nullable(v.object({ gender_contact_person: v.optional(v.nullable(v.picklist(["M", "F", "X", "D"]))), name: v.string(), telephone: v.string(), fax: v.nullable(v.string()), email: v.nullable(v.string()), name1_health_insurance: v.string(), name2_health_insurance: v.optional(v.nullable(v.string())), name3_health_insurance: v.optional(v.nullable(v.string())), postal_code: v.string(), city: v.string(), street: v.nullable(v.string()), house_number: v.nullable(v.string()) })), incapacity_for_work: v.object({ start_work_incapacity_employer: v.string(), start_work_incapacity_au: v.nullable(v.string()), end_work_incapacity_au: v.nullable(v.string()), actual_end_work_incapacity_au: v.optional(v.nullable(v.string())), date_of_diagnosis: v.nullable(v.string()), flag_current_work_incapacity: v.nullable(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))), accident_at_work: v.boolean(), assignment_accident_insurance_doctor: v.boolean(), other_accident: v.boolean(), start_hospitalisation: v.optional(v.nullable(v.string())), end_hospitalisation: v.optional(v.nullable(v.string())), initial_certificate: v.boolean(), automatic_feedback_until: v.nullable(v.string()) }), error_block_list: v.nullable(v.array(v.object({ origin: v.nullable(v.string()), error_number: v.nullable(v.string()), error_text: v.nullable(v.string()), error_value: v.nullable(v.string()) }))) })) }) }), warnings: v.array(v.object({ message: v.string() })) });

export type GetCustomDatevCheckDocumentPermissionPositiveResponse = v.InferOutput<typeof GetCustomDatevCheckDocumentPermissionPositiveResponse>;
export const GetCustomDatevCheckDocumentPermissionPositiveResponse = v.object({ status: v.string(), data: v.union([v.object({ ready: v.boolean(), documents_granted: v.array(v.string()) }), v.object({ ready: v.boolean(), error: v.string() })]), warnings: v.array(v.object({ message: v.string() })) });

export type GetCustomDatevAvailableDocumentsParameterPeriod = v.InferOutput<typeof GetCustomDatevAvailableDocumentsParameterPeriod>;
export const GetCustomDatevAvailableDocumentsParameterPeriod = v.string();

export type GetCustomDatevAvailableDocumentsPositiveResponse = v.InferOutput<typeof GetCustomDatevAvailableDocumentsPositiveResponse>;
export const GetCustomDatevAvailableDocumentsPositiveResponse = v.object({ status: v.string(), data: v.object({ results: v.array(v.object({ document_type: v.string(), available_for_employees: v.array(v.object({ id: v.nullable(v.string()), remote_id: v.string() })), is_company_document: v.boolean() })) }), warnings: v.array(v.object({ message: v.string() })) });

export type PostCustomDatevDownloadDocumentPositiveResponse = v.InferOutput<typeof PostCustomDatevDownloadDocumentPositiveResponse>;
export const PostCustomDatevDownloadDocumentPositiveResponse = v.object({ status: v.string(), data: v.object({ data_url: v.pipe(v.string(), v.url()), file_name: v.string(), content_type: v.string() }), warnings: v.array(v.object({ message: v.string() })) });

export type PostCustomDatevDownloadDocumentRequestBody = v.InferOutput<typeof PostCustomDatevDownloadDocumentRequestBody>;
export const PostCustomDatevDownloadDocumentRequestBody = v.object({ accounting_month: v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))), document_type: v.picklist(["AANB", "ABEG", "BUBE", "DAWE", "KBNW", "KOST", "KOTR", "LKTO", "LOBN", "LJOE", "LOJE", "LOJO", "LOPE", "LOPN", "LOPS", "LORE", "LOWE", "LSTA", "LSTB", "LSTE", "PDAT", "PFAN", "PRZA", "SBNW", "SVNW", "WEAN", "ZABR", "ZAKF", "ZAUW"]), employee_id: v.nullable(v.string()) });

export type PostCustomDatevEmployeesEmployeeIdDownloadDocumentParameterEmployeeId = v.InferOutput<typeof PostCustomDatevEmployeesEmployeeIdDownloadDocumentParameterEmployeeId>;
export const PostCustomDatevEmployeesEmployeeIdDownloadDocumentParameterEmployeeId = v.nullable(v.string());

export type PostCustomDatevEmployeesEmployeeIdDownloadDocumentPositiveResponse = v.InferOutput<typeof PostCustomDatevEmployeesEmployeeIdDownloadDocumentPositiveResponse>;
export const PostCustomDatevEmployeesEmployeeIdDownloadDocumentPositiveResponse = v.object({ status: v.string(), data: v.object({ data_url: v.pipe(v.string(), v.url()), file_name: v.string(), content_type: v.string() }), warnings: v.array(v.object({ message: v.string() })) });

export type PostCustomDatevEmployeesEmployeeIdDownloadDocumentRequestBody = v.InferOutput<typeof PostCustomDatevEmployeesEmployeeIdDownloadDocumentRequestBody>;
export const PostCustomDatevEmployeesEmployeeIdDownloadDocumentRequestBody = v.object({ accounting_month: v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))), document_type: v.picklist(["AANB", "ABEG", "BUBE", "DAWE", "KBNW", "KOST", "KOTR", "LKTO", "LOBN", "LJOE", "LOJE", "LOJO", "LOPE", "LOPN", "LOPS", "LORE", "LOWE", "LSTA", "LSTB", "LSTE", "PDAT", "PFAN", "PRZA", "SBNW", "SVNW", "WEAN", "ZABR", "ZAKF", "ZAUW"]) });

export type PostCustomDatevEmployeesEmployeeIdEauRequestsParameterEmployeeId = v.InferOutput<typeof PostCustomDatevEmployeesEmployeeIdEauRequestsParameterEmployeeId>;
export const PostCustomDatevEmployeesEmployeeIdEauRequestsParameterEmployeeId = v.string();

export type PostCustomDatevEmployeesEmployeeIdEauRequestsPositiveResponse = v.InferOutput<typeof PostCustomDatevEmployeesEmployeeIdEauRequestsPositiveResponse>;
export const PostCustomDatevEmployeesEmployeeIdEauRequestsPositiveResponse = v.object({ status: v.string(), data: v.object({ eau_id: v.string() }), warnings: v.array(v.object({ message: v.string() })) });

export type PostCustomDatevEmployeesEmployeeIdEauRequestsRequestBody = v.InferOutput<typeof PostCustomDatevEmployeesEmployeeIdEauRequestsRequestBody>;
export const PostCustomDatevEmployeesEmployeeIdEauRequestsRequestBody = v.object({ start_work_incapacity: v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}$"))), notification: v.optional(v.object({ email: v.pipe(v.string(), v.regex(new RegExp("^[\\w!#$%&'*+/=?^`{|}~-]+(?:\\.[\\w!#$%&'*+/=?^`{|}~-]+)*@(?:[\\w-]+\\.)+[\\w-]{2,}$"))) })), contact_person: v.optional(v.object({ gender: v.picklist(["M", "W", "X", "D"]), name: v.pipe(v.string(), v.minLength(0), v.maxLength(30)), telephone: v.pipe(v.string(), v.minLength(0), v.maxLength(20), v.regex(new RegExp("([\\d+])[\\d ()/-]+"))), fax: v.pipe(v.string(), v.minLength(0), v.maxLength(20), v.regex(new RegExp("([\\d+])[\\d ()/-]+"))), email: v.pipe(v.string(), v.minLength(0), v.maxLength(70), v.regex(new RegExp("^(?=.{1,64}@)[\\w-]+(\\.[\\w-]+)*@[^-][\\dA-Za-z-]+(\\.[\\dA-Za-z-]+)*(\\.[A-Za-z]{2,})$"))), company_name: v.pipe(v.string(), v.minLength(0), v.maxLength(90)), postal_code: v.pipe(v.string(), v.minLength(0), v.maxLength(10), v.regex(new RegExp("[\\dA-Za-z]*"))), city: v.pipe(v.string(), v.minLength(0), v.maxLength(34)), street: v.pipe(v.string(), v.minLength(0), v.maxLength(33)), house_number: v.pipe(v.string(), v.minLength(0), v.maxLength(9)) })) });

export type PutCustomDatevEmployeesEmployeeIdPreparePayrollParameterEmployeeId = v.InferOutput<typeof PutCustomDatevEmployeesEmployeeIdPreparePayrollParameterEmployeeId>;
export const PutCustomDatevEmployeesEmployeeIdPreparePayrollParameterEmployeeId = v.string();

export type PutCustomDatevEmployeesEmployeeIdPreparePayrollPositiveResponse = v.InferOutput<typeof PutCustomDatevEmployeesEmployeeIdPreparePayrollPositiveResponse>;
export const PutCustomDatevEmployeesEmployeeIdPreparePayrollPositiveResponse = v.object({ status: v.string(), data: v.record(v.string(), v.unknown()), warnings: v.array(v.object({ message: v.string() })) });

export type PutCustomDatevEmployeesEmployeeIdPreparePayrollRequestBody = v.InferOutput<typeof PutCustomDatevEmployeesEmployeeIdPreparePayrollRequestBody>;
export const PutCustomDatevEmployeesEmployeeIdPreparePayrollRequestBody = v.object({ payroll_run: v.object({ date: v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))) }), hourly_payments: v.array(v.object({ hours: v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)), lohnart: v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)) })), fixed_payments: v.array(v.object({ amount: v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)), lohnart: v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)) })), custom_lodas: v.optional(v.array(v.object({ amount: v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)), lohnart: v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)), bearbeitungsschluessel: v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)) })), []) });

export type PutCustomDatevEmployeesEmployeeIdCompensationsParameterEmployeeId = v.InferOutput<typeof PutCustomDatevEmployeesEmployeeIdCompensationsParameterEmployeeId>;
export const PutCustomDatevEmployeesEmployeeIdCompensationsParameterEmployeeId = v.string();

export type PutCustomDatevEmployeesEmployeeIdCompensationsPositiveResponse = v.InferOutput<typeof PutCustomDatevEmployeesEmployeeIdCompensationsPositiveResponse>;
export const PutCustomDatevEmployeesEmployeeIdCompensationsPositiveResponse = v.object({ status: v.string(), data: v.record(v.string(), v.unknown()), warnings: v.array(v.object({ message: v.string() })) });

export type PutCustomDatevEmployeesEmployeeIdCompensationsRequestBody = v.InferOutput<typeof PutCustomDatevEmployeesEmployeeIdCompensationsRequestBody>;
export const PutCustomDatevEmployeesEmployeeIdCompensationsRequestBody = v.object({ effective_date: v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))), compensations: v.array(v.object({ amount: v.pipe(v.number(), v.minValue(-1.7976931348623157e+308)), currency: v.string(), period: v.picklist(["HOUR", "MONTH"]), lohnart: v.optional(v.pipe(v.number(), v.integer(), v.minValue(1), v.maxValue(9999))) })) });

export type GetCustomDatevCheckWritePermissionPositiveResponse = v.InferOutput<typeof GetCustomDatevCheckWritePermissionPositiveResponse>;
export const GetCustomDatevCheckWritePermissionPositiveResponse = v.object({ status: v.string(), data: v.object({ ready: v.boolean(), error: v.optional(v.string()) }), warnings: v.array(v.object({ message: v.string() })) });

export type GetCustomDatevDataPushesPositiveResponse = v.InferOutput<typeof GetCustomDatevDataPushesPositiveResponse>;
export const GetCustomDatevDataPushesPositiveResponse = v.object({ status: v.string(), data: v.object({ data_pushes: v.array(v.object({ id: v.string(), type: v.picklist(["GENERAL", "PAYROLL"]), created_at: v.string(), upload_jobs: v.array(v.object({ id: v.string(), file_name: v.string(), state: v.picklist(["FAILED", "UPLOADED", "IMPORTED", "CORRUPTED", "DELETED", "AUTO_DELETED"]), file: v.string() })) })) }) });

export type PostCustomDatevPushDataGeneralPositiveResponse = v.InferOutput<typeof PostCustomDatevPushDataGeneralPositiveResponse>;
export const PostCustomDatevPushDataGeneralPositiveResponse = v.object({ status: v.string(), data: v.object({ files: v.array(v.object({ name: v.string(), content: v.string() })) }), warnings: v.array(v.object({ message: v.string() })) });

export type PostCustomDatevPushDataGeneralRequestBody = v.InferOutput<typeof PostCustomDatevPushDataGeneralRequestBody>;
export const PostCustomDatevPushDataGeneralRequestBody = v.record(v.string(), v.unknown());

export type PostCustomDatevPushDataPayrollPositiveResponse = v.InferOutput<typeof PostCustomDatevPushDataPayrollPositiveResponse>;
export const PostCustomDatevPushDataPayrollPositiveResponse = v.object({ status: v.string(), data: v.object({ files: v.array(v.object({ name: v.string(), content: v.string() })) }), warnings: v.array(v.object({ message: v.string() })) });

export type PostCustomDatevPushDataPayrollRequestBody = v.InferOutput<typeof PostCustomDatevPushDataPayrollRequestBody>;
export const PostCustomDatevPushDataPayrollRequestBody = v.object({ payroll_month: v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))) });

export type PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsParameterEmployeeId = v.InferOutput<typeof PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsParameterEmployeeId>;
export const PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsParameterEmployeeId = v.string();

export type PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsPositiveResponse = v.InferOutput<typeof PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsPositiveResponse>;
export const PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsPositiveResponse = v.object({ status: v.string(), data: v.record(v.string(), v.unknown()), warnings: v.array(v.object({ message: v.string() })) });

export type PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsRequestBody = v.InferOutput<typeof PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsRequestBody>;
export const PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsRequestBody = v.object({ supplement_code: v.string(), effective_date: v.pipe(v.string(), v.regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"))), element_amount: v.optional(v.pipe(v.number(), v.minValue(-1.7976931348623157e+308))), element_string: v.optional(v.string()) });

export type DataChangedWebhookPayload = v.InferOutput<typeof DataChangedWebhookPayload>;
export const DataChangedWebhookPayload = v.object({ id: v.string(), type: v.literal("data-changed"), data: v.object({ integration_id: v.string(), integration_tool: v.string(), integration_category: v.picklist(["HRIS", "ATS", "ASSESSMENT", "LMS"]), changed_models: v.array(v.object({ name: v.picklist(["hris_legal_entities", "hris_locations", "hris_employees", "hris_absence_types", "hris_absences", "hris_employments", "hris_teams", "hris_time_off_balances", "hris_timesheets", "hris_employee_document_categories", "hris_performance_reviews", "hris_performance_review_cycles", "hris_staffing_entities", "ats_users", "ats_jobs", "ats_job_postings", "ats_candidates", "ats_application_stages", "ats_applications", "ats_screening_questions", "ats_tags", "ats_interviews", "ats_offers", "ats_rejection_reasons", "ats_roles", "lms_users", "lms_course_providers", "lms_skills", "lms_courses", "lms_course_revisions", "lms_course_progressions", "hris_join_employees_teams", "hris_join_staffing_entities_locations", "hris_join_staffing_entities_legal_entities", "hris_join_staffing_entities_groups", "ats_join_candidates_tags", "ats_join_jobs_application_stages", "ats_join_jobs_screening_questions", "ats_join_user_job_role_assignments", "ats_join_jobs_users", "ats_join_users_roles", "ats_join_interviews_users", "lms_join_revisions_skills"]) })) }) });

export type ConnectionFlowFailedWebhookPayload = v.InferOutput<typeof ConnectionFlowFailedWebhookPayload>;
export const ConnectionFlowFailedWebhookPayload = v.object({ id: v.string(), type: v.literal("connection-flow-failed"), data: v.object({ integration_tool: v.string(), integration_category: v.picklist(["HRIS", "ATS", "ASSESSMENT", "LMS"]), end_user: v.object({ organization_name: v.string(), creator_email: v.nullable(v.pipe(v.string(), v.email())), origin_id: v.nullable(v.string()) }), log_url: v.pipe(v.string(), v.url()) }) });

export type IntegrationCreatedWebhookPayload = v.InferOutput<typeof IntegrationCreatedWebhookPayload>;
export const IntegrationCreatedWebhookPayload = v.object({ id: v.string(), type: v.literal("integration-created"), data: v.object({ id: v.string(), tool: v.string(), category: v.picklist(["HRIS", "ATS", "ASSESSMENT", "LMS"]), end_user: v.object({ organization_name: v.string(), creator_email: v.nullable(v.pipe(v.string(), v.email())), origin_id: v.nullable(v.string()) }) }) });

export type IntegrationDeletedWebhookPayload = v.InferOutput<typeof IntegrationDeletedWebhookPayload>;
export const IntegrationDeletedWebhookPayload = v.object({ id: v.string(), type: v.literal("integration-deleted"), data: v.object({ id: v.string(), tool: v.string(), category: v.picklist(["HRIS", "ATS", "ASSESSMENT", "LMS"]), end_user: v.object({ organization_name: v.string(), creator_email: v.nullable(v.pipe(v.string(), v.email())), origin_id: v.nullable(v.string()) }), deleted_at: v.string() }) });

export type AssessmentOrderReceivedWebhookPayload = v.InferOutput<typeof AssessmentOrderReceivedWebhookPayload>;
export const AssessmentOrderReceivedWebhookPayload = v.object({ id: v.string(), type: v.literal("assessment:order-received"), data: v.object({ id: v.string(), package_id: v.string(), status: v.picklist(["OPEN", "COMPLETED", "CANCELLED", "REJECTED"]), integration_id: v.string(), candidate: v.object({ remote_id: v.nullable(v.string()), email: v.pipe(v.string(), v.email()), first_name: v.nullable(v.string()), last_name: v.nullable(v.string()), phone: v.nullable(v.string()) }), application: v.object({ remote_id: v.nullable(v.string()) }), job: v.object({ remote_id: v.nullable(v.string()), name: v.nullable(v.string()), job_code: v.nullable(v.string()), description: v.nullable(v.string()), location: v.nullable(v.partial(v.object({ street_1: v.nullable(v.string()), street_2: v.nullable(v.string()), city: v.nullable(v.string()), state: v.nullable(v.string()), zip_code: v.nullable(v.string()), country: v.nullable(v.string()), raw: v.nullable(v.string()) }))), hiring_team: v.array(v.object({ remote_id: v.nullable(v.string()), email: v.nullable(v.string()), first_name: v.nullable(v.string()), last_name: v.nullable(v.string()), hiring_team_roles: v.array(v.picklist(["RECRUITER", "HIRING_MANAGER"])) })) }) }) });

export type InlineAssessmentOrderReceivedWebhookPayload = v.InferOutput<typeof InlineAssessmentOrderReceivedWebhookPayload>;
export const InlineAssessmentOrderReceivedWebhookPayload = v.object({ id: v.string(), type: v.literal("inline-assessment:order-received"), data: v.object({ id: v.string(), package_id: v.string(), status: v.picklist(["OPEN", "COMPLETED", "CANCELLED", "REJECTED"]), integration_id: v.string(), candidate: v.object({ remote_id: v.nullable(v.string()), email: v.pipe(v.string(), v.email()), first_name: v.nullable(v.string()), last_name: v.nullable(v.string()), phone: v.nullable(v.string()) }), application: v.object({ remote_id: v.nullable(v.string()) }), job: v.object({ remote_id: v.nullable(v.string()), name: v.nullable(v.string()), job_code: v.nullable(v.string()), description: v.nullable(v.string()), location: v.nullable(v.partial(v.object({ street_1: v.nullable(v.string()), street_2: v.nullable(v.string()), city: v.nullable(v.string()), state: v.nullable(v.string()), zip_code: v.nullable(v.string()), country: v.nullable(v.string()), raw: v.nullable(v.string()) }))), hiring_team: v.array(v.object({ remote_id: v.nullable(v.string()), email: v.nullable(v.string()), first_name: v.nullable(v.string()), last_name: v.nullable(v.string()), hiring_team_roles: v.array(v.picklist(["RECRUITER", "HIRING_MANAGER"])) })) }) }) });

export type IntegrationStateChangedWebhookPayload = v.InferOutput<typeof IntegrationStateChangedWebhookPayload>;
export const IntegrationStateChangedWebhookPayload = v.object({ id: v.string(), type: v.literal("integration-state-changed"), data: v.object({ integration_tool: v.string(), integration_id: v.string(), integration_category: v.picklist(["HRIS", "ATS", "ASSESSMENT", "LMS"]), end_user: v.object({ organization_name: v.string(), creator_email: v.nullable(v.pipe(v.string(), v.email())), origin_id: v.nullable(v.string()) }), qa_status: v.picklist(["PENDING", "FAILED", "PASSED"]), setup_status: v.picklist(["INCOMPLETE", "FINAL_SYNC_PENDING", "COMPLETED"]), state: v.picklist(["ACTIVE", "INVALID", "INACTIVE"]), updated_at: v.string() }) });

export type AiApplyApplicationStatusUpdatedWebhookPayload = v.InferOutput<typeof AiApplyApplicationStatusUpdatedWebhookPayload>;
export const AiApplyApplicationStatusUpdatedWebhookPayload = v.object({ id: v.string(), type: v.literal("ai-apply-application-status-updated"), data: v.object({ id: v.string(), job_posting_id: v.string(), status: v.picklist(["SUBMITTED", "DUPLICATE", "PENDING", "FAILED"]), created_at: v.string(), updated_at: v.string() }) });

export type AiApplyJobPostingStatusUpdatedWebhookPayload = v.InferOutput<typeof AiApplyJobPostingStatusUpdatedWebhookPayload>;
export const AiApplyJobPostingStatusUpdatedWebhookPayload = v.object({ id: v.string(), type: v.literal("ai-apply-job-posting-status-updated"), data: v.object({ id: v.string(), career_site: v.object({ id: v.string(), label: v.string() }), url: v.string(), job_code: v.nullable(v.string()), created_at: v.string(), updated_at: v.string(), archived_at: v.nullable(v.string()), archived_reason: v.nullable(v.picklist(["JOB_POSTING_TAKEN_OFFLINE", "MANUAL_ARCHIVE", "REMOVED_FROM_JOB_FEED"])), availability: v.picklist(["APPLYABLE", "PENDING", "ARCHIVED", "UNAVAILABLE"]) }) });

export type SyncFinishedWebhookPayload = v.InferOutput<typeof SyncFinishedWebhookPayload>;
export const SyncFinishedWebhookPayload = v.object({ id: v.string(), type: v.literal("sync-finished"), data: v.object({ sync_id: v.string(), sync_state: v.string(), sync_started_at: v.string(), sync_ended_at: v.string(), sync_duration_seconds: v.pipe(v.number(), v.integer(), v.minValue(0)), integration_id: v.string(), integration_tool: v.string(), integration_category: v.picklist(["HRIS", "ATS", "ASSESSMENT", "LMS"]), end_user: v.object({ organization_name: v.string(), creator_email: v.nullable(v.pipe(v.string(), v.email())), origin_id: v.nullable(v.string()) }), log_url: v.pipe(v.string(), v.url()) }) });

export type BulkImportJobPostingLocation = v.InferOutput<typeof BulkImportJobPostingLocation>;
export const BulkImportJobPostingLocation = v.object({ country: v.string(), postal_code: v.optional(v.string()) });

export type BulkImportJobPostingInput = v.InferOutput<typeof BulkImportJobPostingInput>;
export const BulkImportJobPostingInput = v.object({ url: v.pipe(v.string(), v.url()), career_site_label: v.string(), job_code: v.optional(v.string()), location: v.optional(v.nullable(BulkImportJobPostingLocation)) });

export type BulkImportResponse = v.InferOutput<typeof BulkImportResponse>;
export const BulkImportResponse = v.object({ status: v.literal("success"), data: v.object({ created: v.pipe(v.number(), v.integer()), processed: v.pipe(v.number(), v.integer()), archived: v.pipe(v.number(), v.integer()) }) });

// </Schemas>

// <Endpoints>
export type get_GetCheckApiKey = typeof get_GetCheckApiKey;
export const get_GetCheckApiKey = {
  method: v.literal("GET"),
  path: v.literal("/check-api-key"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: v.never(),
  responses: { 200: GetCheckApiKeyPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type post_PostForceSync = typeof post_PostForceSync;
export const post_PostForceSync = {
  method: v.literal("POST"),
  path: v.literal("/force-sync"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { header: v.object({ "X-Integration-Id": v.string() }), body: PostForceSyncRequestBody },
  responses: { 200: PostForceSyncPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type post_PostPassthroughToolApi = typeof post_PostPassthroughToolApi;
export const post_PostPassthroughToolApi = {
  method: v.literal("POST"),
  path: v.literal("/passthrough/{tool}/{api}"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ tool: PostPassthroughToolApiParameterTool, api: PostPassthroughToolApiParameterApi }), header: v.object({ "X-Integration-Id": v.string() }), body: PostPassthroughToolApiRequestBody },
  responses: { 200: PostPassthroughToolApiPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type delete_DeleteIntegrationsIntegrationId = typeof delete_DeleteIntegrationsIntegrationId;
export const delete_DeleteIntegrationsIntegrationId = {
  method: v.literal("DELETE"),
  path: v.literal("/integrations/{integration_id}"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ integration_id: DeleteIntegrationsIntegrationIdParameterIntegrationId }), body: DeleteIntegrationsIntegrationIdRequestBody },
  responses: { 200: DeleteIntegrationsIntegrationIdPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type get_GetIntegrationsIntegrationId = typeof get_GetIntegrationsIntegrationId;
export const get_GetIntegrationsIntegrationId = {
  method: v.literal("GET"),
  path: v.literal("/integrations/{integration_id}"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ integration_id: GetIntegrationsIntegrationIdParameterIntegrationId }) },
  responses: { 200: GetIntegrationsIntegrationIdPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type put_PutIntegrationsIntegrationIdEnabled = typeof put_PutIntegrationsIntegrationIdEnabled;
export const put_PutIntegrationsIntegrationIdEnabled = {
  method: v.literal("PUT"),
  path: v.literal("/integrations/{integration_id}/enabled"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ integration_id: PutIntegrationsIntegrationIdEnabledParameterIntegrationId }), body: PutIntegrationsIntegrationIdEnabledRequestBody },
  responses: { 200: PutIntegrationsIntegrationIdEnabledPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type post_PostIntegrationsIntegrationIdRelink = typeof post_PostIntegrationsIntegrationIdRelink;
export const post_PostIntegrationsIntegrationIdRelink = {
  method: v.literal("POST"),
  path: v.literal("/integrations/{integration_id}/relink"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ integration_id: PostIntegrationsIntegrationIdRelinkParameterIntegrationId }), body: PostIntegrationsIntegrationIdRelinkRequestBody },
  responses: { 200: PostIntegrationsIntegrationIdRelinkPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type post_PostIntegrationsIntegrationIdSetupLink = typeof post_PostIntegrationsIntegrationIdSetupLink;
export const post_PostIntegrationsIntegrationIdSetupLink = {
  method: v.literal("POST"),
  path: v.literal("/integrations/{integration_id}/setup-link"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ integration_id: PostIntegrationsIntegrationIdSetupLinkParameterIntegrationId }), body: PostIntegrationsIntegrationIdSetupLinkRequestBody },
  responses: { 200: PostIntegrationsIntegrationIdSetupLinkPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type get_GetIntegrationsIntegrationIdIntegrationFields = typeof get_GetIntegrationsIntegrationIdIntegrationFields;
export const get_GetIntegrationsIntegrationIdIntegrationFields = {
  method: v.literal("GET"),
  path: v.literal("/integrations/{integration_id}/integration-fields"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ cursor: GetIntegrationsIntegrationIdIntegrationFieldsParameterCursor, page_size: GetIntegrationsIntegrationIdIntegrationFieldsParameterPageSize }))), path: v.object({ integration_id: GetIntegrationsIntegrationIdIntegrationFieldsParameterIntegrationId }) },
  responses: { 200: GetIntegrationsIntegrationIdIntegrationFieldsPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type patch_PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldId = typeof patch_PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldId;
export const patch_PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldId = {
  method: v.literal("PATCH"),
  path: v.literal("/integrations/{integration_id}/integration-fields/{integration_field_id}"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ integration_id: PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationId, integration_field_id: PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationFieldId }), body: PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdRequestBody },
  responses: { 200: PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type get_GetIntegrationsIntegrationIdCustomFields = typeof get_GetIntegrationsIntegrationIdCustomFields;
export const get_GetIntegrationsIntegrationIdCustomFields = {
  method: v.literal("GET"),
  path: v.literal("/integrations/{integration_id}/custom-fields"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ cursor: GetIntegrationsIntegrationIdCustomFieldsParameterCursor, page_size: GetIntegrationsIntegrationIdCustomFieldsParameterPageSize }))), path: v.object({ integration_id: GetIntegrationsIntegrationIdCustomFieldsParameterIntegrationId }) },
  responses: { 200: GetIntegrationsIntegrationIdCustomFieldsPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type put_PutIntegrationsIntegrationIdCustomFieldsCustomFieldId = typeof put_PutIntegrationsIntegrationIdCustomFieldsCustomFieldId;
export const put_PutIntegrationsIntegrationIdCustomFieldsCustomFieldId = {
  method: v.literal("PUT"),
  path: v.literal("/integrations/{integration_id}/custom-fields/{custom_field_id}"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ integration_id: PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterIntegrationId, custom_field_id: PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterCustomFieldId }), body: PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdRequestBody },
  responses: { 200: PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type get_GetToolsCategory = typeof get_GetToolsCategory;
export const get_GetToolsCategory = {
  method: v.literal("GET"),
  path: v.literal("/tools/{category}"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ category: GetToolsCategoryParameterCategory }) },
  responses: { 200: GetToolsCategoryPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type post_PostHrisProvisioningGroupsGroupIdDiff = typeof post_PostHrisProvisioningGroupsGroupIdDiff;
export const post_PostHrisProvisioningGroupsGroupIdDiff = {
  method: v.literal("POST"),
  path: v.literal("/hris/provisioning-groups/{group_id}/diff"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ group_id: PostHrisProvisioningGroupsGroupIdDiffParameterGroupId }), header: v.object({ "X-Integration-Id": v.string() }), body: PostHrisProvisioningGroupsGroupIdDiffRequestBody },
  responses: { 200: PostHrisProvisioningGroupsGroupIdDiffPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type post_PostHrisProvisioningGroupsGroupIdSetupLinks = typeof post_PostHrisProvisioningGroupsGroupIdSetupLinks;
export const post_PostHrisProvisioningGroupsGroupIdSetupLinks = {
  method: v.literal("POST"),
  path: v.literal("/hris/provisioning-groups/{group_id}/setup-links"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ group_id: PostHrisProvisioningGroupsGroupIdSetupLinksParameterGroupId }), header: v.object({ "X-Integration-Id": v.string() }), body: PostHrisProvisioningGroupsGroupIdSetupLinksRequestBody },
  responses: { 200: PostHrisProvisioningGroupsGroupIdSetupLinksPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type get_GetHrisEmployees = typeof get_GetHrisEmployees;
export const get_GetHrisEmployees = {
  method: v.literal("GET"),
  path: v.literal("/hris/employees"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ cursor: GetHrisEmployeesParameterCursor, page_size: GetHrisEmployeesParameterPageSize, updated_after: GetHrisEmployeesParameterUpdatedAfter, include_deleted: GetHrisEmployeesParameterIncludeDeleted, ignore_unsupported_filters: GetHrisEmployeesParameterIgnoreUnsupportedFilters, ids: GetHrisEmployeesParameterIds, remote_ids: GetHrisEmployeesParameterRemoteIds, employment_status: GetHrisEmployeesParameterEmploymentStatus, employment_statuses: GetHrisEmployeesParameterEmploymentStatuses, group_ids: GetHrisEmployeesParameterGroupIds, legal_entity_ids: GetHrisEmployeesParameterLegalEntityIds, work_location_ids: GetHrisEmployeesParameterWorkLocationIds, work_emails: GetHrisEmployeesParameterWorkEmails, personal_emails: GetHrisEmployeesParameterPersonalEmails, custom_fields: GetHrisEmployeesParameterCustomFields }))), header: v.object({ "X-Integration-Id": v.string() }) },
  responses: { 200: GetHrisEmployeesPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type post_PostHrisEmployees = typeof post_PostHrisEmployees;
export const post_PostHrisEmployees = {
  method: v.literal("POST"),
  path: v.literal("/hris/employees"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { header: v.object({ "X-Integration-Id": v.string() }), body: PostHrisEmployeesRequestBody },
  responses: { 200: PostHrisEmployeesPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type get_GetHrisEmployeesForm = typeof get_GetHrisEmployeesForm;
export const get_GetHrisEmployeesForm = {
  method: v.literal("GET"),
  path: v.literal("/hris/employees/form"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { header: v.object({ "X-Integration-Id": v.string() }) },
  responses: { 200: GetHrisEmployeesFormPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type post_PostHrisEmployeesForm = typeof post_PostHrisEmployeesForm;
export const post_PostHrisEmployeesForm = {
  method: v.literal("POST"),
  path: v.literal("/hris/employees/form"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { header: v.object({ "X-Integration-Id": v.string() }), body: PostHrisEmployeesFormRequestBody },
  responses: { 200: PostHrisEmployeesFormPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type patch_PatchHrisEmployeesEmployeeId = typeof patch_PatchHrisEmployeesEmployeeId;
export const patch_PatchHrisEmployeesEmployeeId = {
  method: v.literal("PATCH"),
  path: v.literal("/hris/employees/{employee_id}"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ employee_id: PatchHrisEmployeesEmployeeIdParameterEmployeeId }), header: v.object({ "X-Integration-Id": v.string() }), body: PatchHrisEmployeesEmployeeIdRequestBody },
  responses: { 200: PatchHrisEmployeesEmployeeIdPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type post_PostHrisEmployeesEmployeeIdDocuments = typeof post_PostHrisEmployeesEmployeeIdDocuments;
export const post_PostHrisEmployeesEmployeeIdDocuments = {
  method: v.literal("POST"),
  path: v.literal("/hris/employees/{employee_id}/documents"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ employee_id: PostHrisEmployeesEmployeeIdDocumentsParameterEmployeeId }), header: v.object({ "X-Integration-Id": v.string() }), body: PostHrisEmployeesEmployeeIdDocumentsRequestBody },
  responses: { 200: PostHrisEmployeesEmployeeIdDocumentsPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type get_GetHrisEmployeeDocumentCategories = typeof get_GetHrisEmployeeDocumentCategories;
export const get_GetHrisEmployeeDocumentCategories = {
  method: v.literal("GET"),
  path: v.literal("/hris/employee-document-categories"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ cursor: GetHrisEmployeeDocumentCategoriesParameterCursor, page_size: GetHrisEmployeeDocumentCategoriesParameterPageSize, updated_after: GetHrisEmployeeDocumentCategoriesParameterUpdatedAfter, include_deleted: GetHrisEmployeeDocumentCategoriesParameterIncludeDeleted, ignore_unsupported_filters: GetHrisEmployeeDocumentCategoriesParameterIgnoreUnsupportedFilters, ids: GetHrisEmployeeDocumentCategoriesParameterIds, remote_ids: GetHrisEmployeeDocumentCategoriesParameterRemoteIds }))), header: v.object({ "X-Integration-Id": v.string() }) },
  responses: { 200: GetHrisEmployeeDocumentCategoriesPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type get_GetHrisTeams = typeof get_GetHrisTeams;
export const get_GetHrisTeams = {
  method: v.literal("GET"),
  path: v.literal("/hris/teams"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ cursor: GetHrisTeamsParameterCursor, page_size: GetHrisTeamsParameterPageSize, updated_after: GetHrisTeamsParameterUpdatedAfter, include_deleted: GetHrisTeamsParameterIncludeDeleted, ignore_unsupported_filters: GetHrisTeamsParameterIgnoreUnsupportedFilters, ids: GetHrisTeamsParameterIds, remote_ids: GetHrisTeamsParameterRemoteIds }))), header: v.object({ "X-Integration-Id": v.string() }) },
  responses: { 200: GetHrisTeamsPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type get_GetHrisGroups = typeof get_GetHrisGroups;
export const get_GetHrisGroups = {
  method: v.literal("GET"),
  path: v.literal("/hris/groups"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ cursor: GetHrisGroupsParameterCursor, page_size: GetHrisGroupsParameterPageSize, updated_after: GetHrisGroupsParameterUpdatedAfter, include_deleted: GetHrisGroupsParameterIncludeDeleted, ignore_unsupported_filters: GetHrisGroupsParameterIgnoreUnsupportedFilters, ids: GetHrisGroupsParameterIds, remote_ids: GetHrisGroupsParameterRemoteIds, types: GetHrisGroupsParameterTypes, name_contains: GetHrisGroupsParameterNameContains }))), header: v.object({ "X-Integration-Id": v.string() }) },
  responses: { 200: GetHrisGroupsPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type get_GetHrisEmployments = typeof get_GetHrisEmployments;
export const get_GetHrisEmployments = {
  method: v.literal("GET"),
  path: v.literal("/hris/employments"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ cursor: GetHrisEmploymentsParameterCursor, page_size: GetHrisEmploymentsParameterPageSize, updated_after: GetHrisEmploymentsParameterUpdatedAfter, include_deleted: GetHrisEmploymentsParameterIncludeDeleted, ignore_unsupported_filters: GetHrisEmploymentsParameterIgnoreUnsupportedFilters, ids: GetHrisEmploymentsParameterIds, remote_ids: GetHrisEmploymentsParameterRemoteIds }))), header: v.object({ "X-Integration-Id": v.string() }) },
  responses: { 200: GetHrisEmploymentsPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type get_GetHrisLocations = typeof get_GetHrisLocations;
export const get_GetHrisLocations = {
  method: v.literal("GET"),
  path: v.literal("/hris/locations"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ cursor: GetHrisLocationsParameterCursor, page_size: GetHrisLocationsParameterPageSize, updated_after: GetHrisLocationsParameterUpdatedAfter, include_deleted: GetHrisLocationsParameterIncludeDeleted, ignore_unsupported_filters: GetHrisLocationsParameterIgnoreUnsupportedFilters, ids: GetHrisLocationsParameterIds, remote_ids: GetHrisLocationsParameterRemoteIds, name_contains: GetHrisLocationsParameterNameContains }))), header: v.object({ "X-Integration-Id": v.string() }) },
  responses: { 200: GetHrisLocationsPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type get_GetHrisAbsenceTypes = typeof get_GetHrisAbsenceTypes;
export const get_GetHrisAbsenceTypes = {
  method: v.literal("GET"),
  path: v.literal("/hris/absence-types"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ cursor: GetHrisAbsenceTypesParameterCursor, page_size: GetHrisAbsenceTypesParameterPageSize, updated_after: GetHrisAbsenceTypesParameterUpdatedAfter, include_deleted: GetHrisAbsenceTypesParameterIncludeDeleted, ignore_unsupported_filters: GetHrisAbsenceTypesParameterIgnoreUnsupportedFilters, ids: GetHrisAbsenceTypesParameterIds, remote_ids: GetHrisAbsenceTypesParameterRemoteIds }))), header: v.object({ "X-Integration-Id": v.string() }) },
  responses: { 200: GetHrisAbsenceTypesPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type get_GetHrisTimeOffBalances = typeof get_GetHrisTimeOffBalances;
export const get_GetHrisTimeOffBalances = {
  method: v.literal("GET"),
  path: v.literal("/hris/time-off-balances"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ cursor: GetHrisTimeOffBalancesParameterCursor, page_size: GetHrisTimeOffBalancesParameterPageSize, updated_after: GetHrisTimeOffBalancesParameterUpdatedAfter, include_deleted: GetHrisTimeOffBalancesParameterIncludeDeleted, ignore_unsupported_filters: GetHrisTimeOffBalancesParameterIgnoreUnsupportedFilters, ids: GetHrisTimeOffBalancesParameterIds, remote_ids: GetHrisTimeOffBalancesParameterRemoteIds, employee_id: GetHrisTimeOffBalancesParameterEmployeeId }))), header: v.object({ "X-Integration-Id": v.string() }) },
  responses: { 200: GetHrisTimeOffBalancesPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type get_GetHrisAbsences = typeof get_GetHrisAbsences;
export const get_GetHrisAbsences = {
  method: v.literal("GET"),
  path: v.literal("/hris/absences"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ cursor: GetHrisAbsencesParameterCursor, page_size: GetHrisAbsencesParameterPageSize, updated_after: GetHrisAbsencesParameterUpdatedAfter, include_deleted: GetHrisAbsencesParameterIncludeDeleted, ignore_unsupported_filters: GetHrisAbsencesParameterIgnoreUnsupportedFilters, ids: GetHrisAbsencesParameterIds, remote_ids: GetHrisAbsencesParameterRemoteIds, date_from: GetHrisAbsencesParameterDateFrom, date_until: GetHrisAbsencesParameterDateUntil, type_ids: GetHrisAbsencesParameterTypeIds, employee_id: GetHrisAbsencesParameterEmployeeId, time_from: GetHrisAbsencesParameterTimeFrom, time_until: GetHrisAbsencesParameterTimeUntil }))), header: v.object({ "X-Integration-Id": v.string() }) },
  responses: { 200: GetHrisAbsencesPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type post_PostHrisAbsences = typeof post_PostHrisAbsences;
export const post_PostHrisAbsences = {
  method: v.literal("POST"),
  path: v.literal("/hris/absences"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { header: v.object({ "X-Integration-Id": v.string() }), body: PostHrisAbsencesRequestBody },
  responses: { 200: PostHrisAbsencesPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type delete_DeleteHrisAbsencesAbsenceId = typeof delete_DeleteHrisAbsencesAbsenceId;
export const delete_DeleteHrisAbsencesAbsenceId = {
  method: v.literal("DELETE"),
  path: v.literal("/hris/absences/{absence_id}"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ absence_id: DeleteHrisAbsencesAbsenceIdParameterAbsenceId }), header: v.object({ "X-Integration-Id": v.string() }), body: DeleteHrisAbsencesAbsenceIdRequestBody },
  responses: { 200: DeleteHrisAbsencesAbsenceIdPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type get_GetHrisLegalEntities = typeof get_GetHrisLegalEntities;
export const get_GetHrisLegalEntities = {
  method: v.literal("GET"),
  path: v.literal("/hris/legal-entities"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ cursor: GetHrisLegalEntitiesParameterCursor, page_size: GetHrisLegalEntitiesParameterPageSize, updated_after: GetHrisLegalEntitiesParameterUpdatedAfter, include_deleted: GetHrisLegalEntitiesParameterIncludeDeleted, ignore_unsupported_filters: GetHrisLegalEntitiesParameterIgnoreUnsupportedFilters, ids: GetHrisLegalEntitiesParameterIds, remote_ids: GetHrisLegalEntitiesParameterRemoteIds, name_contains: GetHrisLegalEntitiesParameterNameContains }))), header: v.object({ "X-Integration-Id": v.string() }) },
  responses: { 200: GetHrisLegalEntitiesPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type get_GetHrisTimesheets = typeof get_GetHrisTimesheets;
export const get_GetHrisTimesheets = {
  method: v.literal("GET"),
  path: v.literal("/hris/timesheets"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ cursor: GetHrisTimesheetsParameterCursor, page_size: GetHrisTimesheetsParameterPageSize, updated_after: GetHrisTimesheetsParameterUpdatedAfter, include_deleted: GetHrisTimesheetsParameterIncludeDeleted, ignore_unsupported_filters: GetHrisTimesheetsParameterIgnoreUnsupportedFilters, ids: GetHrisTimesheetsParameterIds, remote_ids: GetHrisTimesheetsParameterRemoteIds, employee_id: GetHrisTimesheetsParameterEmployeeId, started_before: GetHrisTimesheetsParameterStartedBefore, started_after: GetHrisTimesheetsParameterStartedAfter, ended_before: GetHrisTimesheetsParameterEndedBefore, ended_after: GetHrisTimesheetsParameterEndedAfter }))), header: v.object({ "X-Integration-Id": v.string() }) },
  responses: { 200: GetHrisTimesheetsPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type get_GetHrisPerformanceReviewCycles = typeof get_GetHrisPerformanceReviewCycles;
export const get_GetHrisPerformanceReviewCycles = {
  method: v.literal("GET"),
  path: v.literal("/hris/performance-review-cycles"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ cursor: GetHrisPerformanceReviewCyclesParameterCursor, page_size: GetHrisPerformanceReviewCyclesParameterPageSize, updated_after: GetHrisPerformanceReviewCyclesParameterUpdatedAfter, include_deleted: GetHrisPerformanceReviewCyclesParameterIncludeDeleted, ignore_unsupported_filters: GetHrisPerformanceReviewCyclesParameterIgnoreUnsupportedFilters, ids: GetHrisPerformanceReviewCyclesParameterIds, remote_ids: GetHrisPerformanceReviewCyclesParameterRemoteIds }))), header: v.object({ "X-Integration-Id": v.string() }) },
  responses: { 200: GetHrisPerformanceReviewCyclesPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type get_GetHrisPerformanceReviews = typeof get_GetHrisPerformanceReviews;
export const get_GetHrisPerformanceReviews = {
  method: v.literal("GET"),
  path: v.literal("/hris/performance-reviews"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ cursor: GetHrisPerformanceReviewsParameterCursor, page_size: GetHrisPerformanceReviewsParameterPageSize, updated_after: GetHrisPerformanceReviewsParameterUpdatedAfter, include_deleted: GetHrisPerformanceReviewsParameterIncludeDeleted, ignore_unsupported_filters: GetHrisPerformanceReviewsParameterIgnoreUnsupportedFilters, ids: GetHrisPerformanceReviewsParameterIds, remote_ids: GetHrisPerformanceReviewsParameterRemoteIds, types: GetHrisPerformanceReviewsParameterTypes, review_cycle_ids: GetHrisPerformanceReviewsParameterReviewCycleIds, reviewee_ids: GetHrisPerformanceReviewsParameterRevieweeIds }))), header: v.object({ "X-Integration-Id": v.string() }) },
  responses: { 200: GetHrisPerformanceReviewsPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type get_GetHrisSkills = typeof get_GetHrisSkills;
export const get_GetHrisSkills = {
  method: v.literal("GET"),
  path: v.literal("/hris/skills"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ ids: GetHrisSkillsParameterIds, remote_ids: GetHrisSkillsParameterRemoteIds, name_contains: GetHrisSkillsParameterNameContains }))), header: v.object({ "X-Integration-Id": v.string() }) },
  responses: { 200: GetHrisSkillsPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type post_PostHrisSkills = typeof post_PostHrisSkills;
export const post_PostHrisSkills = {
  method: v.literal("POST"),
  path: v.literal("/hris/skills"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { header: v.object({ "X-Integration-Id": v.string() }), body: PostHrisSkillsRequestBody },
  responses: { 200: PostHrisSkillsPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type patch_PatchHrisSkillsSkillId = typeof patch_PatchHrisSkillsSkillId;
export const patch_PatchHrisSkillsSkillId = {
  method: v.literal("PATCH"),
  path: v.literal("/hris/skills/{skill_id}"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ skill_id: PatchHrisSkillsSkillIdParameterSkillId }), header: v.object({ "X-Integration-Id": v.string() }), body: PatchHrisSkillsSkillIdRequestBody },
  responses: { 200: PatchHrisSkillsSkillIdPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type delete_DeleteHrisSkillsSkillId = typeof delete_DeleteHrisSkillsSkillId;
export const delete_DeleteHrisSkillsSkillId = {
  method: v.literal("DELETE"),
  path: v.literal("/hris/skills/{skill_id}"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ skill_id: DeleteHrisSkillsSkillIdParameterSkillId }), header: v.object({ "X-Integration-Id": v.string() }), body: DeleteHrisSkillsSkillIdRequestBody },
  responses: { 200: DeleteHrisSkillsSkillIdPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type get_GetHrisEmployeeSkillAssignments = typeof get_GetHrisEmployeeSkillAssignments;
export const get_GetHrisEmployeeSkillAssignments = {
  method: v.literal("GET"),
  path: v.literal("/hris/employee-skill-assignments"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ ids: GetHrisEmployeeSkillAssignmentsParameterIds, remote_ids: GetHrisEmployeeSkillAssignmentsParameterRemoteIds, employee_ids: GetHrisEmployeeSkillAssignmentsParameterEmployeeIds, skill_ids: GetHrisEmployeeSkillAssignmentsParameterSkillIds }))), header: v.object({ "X-Integration-Id": v.string() }) },
  responses: { 200: GetHrisEmployeeSkillAssignmentsPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type post_PostHrisEmployeeSkillAssignments = typeof post_PostHrisEmployeeSkillAssignments;
export const post_PostHrisEmployeeSkillAssignments = {
  method: v.literal("POST"),
  path: v.literal("/hris/employee-skill-assignments"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { header: v.object({ "X-Integration-Id": v.string() }), body: PostHrisEmployeeSkillAssignmentsRequestBody },
  responses: { 200: PostHrisEmployeeSkillAssignmentsPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type patch_PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentId = typeof patch_PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentId;
export const patch_PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentId = {
  method: v.literal("PATCH"),
  path: v.literal("/hris/employee-skill-assignments/{employee_skill_assignment_id}"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ employee_skill_assignment_id: PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId }), header: v.object({ "X-Integration-Id": v.string() }), body: PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody },
  responses: { 200: PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type delete_DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentId = typeof delete_DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentId;
export const delete_DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentId = {
  method: v.literal("DELETE"),
  path: v.literal("/hris/employee-skill-assignments/{employee_skill_assignment_id}"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ employee_skill_assignment_id: DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId }), header: v.object({ "X-Integration-Id": v.string() }), body: DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody },
  responses: { 200: DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type get_GetHrisStaffingEntities = typeof get_GetHrisStaffingEntities;
export const get_GetHrisStaffingEntities = {
  method: v.literal("GET"),
  path: v.literal("/hris/staffing-entities"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ cursor: GetHrisStaffingEntitiesParameterCursor, page_size: GetHrisStaffingEntitiesParameterPageSize, updated_after: GetHrisStaffingEntitiesParameterUpdatedAfter, include_deleted: GetHrisStaffingEntitiesParameterIncludeDeleted, ignore_unsupported_filters: GetHrisStaffingEntitiesParameterIgnoreUnsupportedFilters, ids: GetHrisStaffingEntitiesParameterIds, remote_ids: GetHrisStaffingEntitiesParameterRemoteIds, model_types: GetHrisStaffingEntitiesParameterModelTypes, statuses: GetHrisStaffingEntitiesParameterStatuses }))), header: v.object({ "X-Integration-Id": v.string() }) },
  responses: { 200: GetHrisStaffingEntitiesPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type get_GetAtsApplications = typeof get_GetAtsApplications;
export const get_GetAtsApplications = {
  method: v.literal("GET"),
  path: v.literal("/ats/applications"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ cursor: GetAtsApplicationsParameterCursor, page_size: GetAtsApplicationsParameterPageSize, updated_after: GetAtsApplicationsParameterUpdatedAfter, include_deleted: GetAtsApplicationsParameterIncludeDeleted, ignore_unsupported_filters: GetAtsApplicationsParameterIgnoreUnsupportedFilters, ids: GetAtsApplicationsParameterIds, remote_ids: GetAtsApplicationsParameterRemoteIds, outcome: GetAtsApplicationsParameterOutcome, outcomes: GetAtsApplicationsParameterOutcomes, job_ids: GetAtsApplicationsParameterJobIds, job_remote_ids: GetAtsApplicationsParameterJobRemoteIds, current_stage_ids: GetAtsApplicationsParameterCurrentStageIds, remote_created_after: GetAtsApplicationsParameterRemoteCreatedAfter }))), header: v.object({ "X-Integration-Id": v.string() }) },
  responses: { 200: GetAtsApplicationsPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type put_PutAtsApplicationsApplicationIdStage = typeof put_PutAtsApplicationsApplicationIdStage;
export const put_PutAtsApplicationsApplicationIdStage = {
  method: v.literal("PUT"),
  path: v.literal("/ats/applications/{application_id}/stage"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ application_id: PutAtsApplicationsApplicationIdStageParameterApplicationId }), header: v.object({ "X-Integration-Id": v.string() }), body: PutAtsApplicationsApplicationIdStageRequestBody },
  responses: { 200: PutAtsApplicationsApplicationIdStagePositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type post_PostAtsApplicationsApplicationIdResultLinks = typeof post_PostAtsApplicationsApplicationIdResultLinks;
export const post_PostAtsApplicationsApplicationIdResultLinks = {
  method: v.literal("POST"),
  path: v.literal("/ats/applications/{application_id}/result-links"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ application_id: PostAtsApplicationsApplicationIdResultLinksParameterApplicationId }), header: v.object({ "X-Integration-Id": v.string() }), body: PostAtsApplicationsApplicationIdResultLinksRequestBody },
  responses: { 200: PostAtsApplicationsApplicationIdResultLinksPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type post_PostAtsApplicationsApplicationIdNotes = typeof post_PostAtsApplicationsApplicationIdNotes;
export const post_PostAtsApplicationsApplicationIdNotes = {
  method: v.literal("POST"),
  path: v.literal("/ats/applications/{application_id}/notes"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ application_id: PostAtsApplicationsApplicationIdNotesParameterApplicationId }), header: v.object({ "X-Integration-Id": v.string() }), body: PostAtsApplicationsApplicationIdNotesRequestBody },
  responses: { 200: PostAtsApplicationsApplicationIdNotesPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type get_GetAtsApplicationsApplicationIdAttachments = typeof get_GetAtsApplicationsApplicationIdAttachments;
export const get_GetAtsApplicationsApplicationIdAttachments = {
  method: v.literal("GET"),
  path: v.literal("/ats/applications/{application_id}/attachments"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ application_id: GetAtsApplicationsApplicationIdAttachmentsParameterApplicationId }), header: v.object({ "X-Integration-Id": v.string() }) },
  responses: { 200: GetAtsApplicationsApplicationIdAttachmentsPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type post_PostAtsApplicationsApplicationIdAttachments = typeof post_PostAtsApplicationsApplicationIdAttachments;
export const post_PostAtsApplicationsApplicationIdAttachments = {
  method: v.literal("POST"),
  path: v.literal("/ats/applications/{application_id}/attachments"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ application_id: PostAtsApplicationsApplicationIdAttachmentsParameterApplicationId }), header: v.object({ "X-Integration-Id": v.string() }), body: PostAtsApplicationsApplicationIdAttachmentsRequestBody },
  responses: { 200: PostAtsApplicationsApplicationIdAttachmentsPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type post_PostAtsApplicationsApplicationIdReject = typeof post_PostAtsApplicationsApplicationIdReject;
export const post_PostAtsApplicationsApplicationIdReject = {
  method: v.literal("POST"),
  path: v.literal("/ats/applications/{application_id}/reject"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ application_id: PostAtsApplicationsApplicationIdRejectParameterApplicationId }), header: v.object({ "X-Integration-Id": v.string() }), body: PostAtsApplicationsApplicationIdRejectRequestBody },
  responses: { 200: PostAtsApplicationsApplicationIdRejectPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type post_PostAtsApplicationsApplicationIdInterviews = typeof post_PostAtsApplicationsApplicationIdInterviews;
export const post_PostAtsApplicationsApplicationIdInterviews = {
  method: v.literal("POST"),
  path: v.literal("/ats/applications/{application_id}/interviews"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ application_id: PostAtsApplicationsApplicationIdInterviewsParameterApplicationId }), header: v.object({ "X-Integration-Id": v.string() }), body: PostAtsApplicationsApplicationIdInterviewsRequestBody },
  responses: { 200: PostAtsApplicationsApplicationIdInterviewsPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type patch_PatchAtsApplicationsApplicationIdInterviews = typeof patch_PatchAtsApplicationsApplicationIdInterviews;
export const patch_PatchAtsApplicationsApplicationIdInterviews = {
  method: v.literal("PATCH"),
  path: v.literal("/ats/applications/{application_id}/interviews"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ application_id: PatchAtsApplicationsApplicationIdInterviewsParameterApplicationId }), header: v.object({ "X-Integration-Id": v.string() }), body: PatchAtsApplicationsApplicationIdInterviewsRequestBody },
  responses: { 200: PatchAtsApplicationsApplicationIdInterviewsPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type get_GetAtsCandidates = typeof get_GetAtsCandidates;
export const get_GetAtsCandidates = {
  method: v.literal("GET"),
  path: v.literal("/ats/candidates"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ cursor: GetAtsCandidatesParameterCursor, page_size: GetAtsCandidatesParameterPageSize, updated_after: GetAtsCandidatesParameterUpdatedAfter, include_deleted: GetAtsCandidatesParameterIncludeDeleted, ignore_unsupported_filters: GetAtsCandidatesParameterIgnoreUnsupportedFilters, ids: GetAtsCandidatesParameterIds, remote_ids: GetAtsCandidatesParameterRemoteIds, email: GetAtsCandidatesParameterEmail, job_ids: GetAtsCandidatesParameterJobIds, first_name: GetAtsCandidatesParameterFirstName, last_name: GetAtsCandidatesParameterLastName }))), header: v.object({ "X-Integration-Id": v.string() }) },
  responses: { 200: GetAtsCandidatesPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type post_PostAtsCandidates = typeof post_PostAtsCandidates;
export const post_PostAtsCandidates = {
  method: v.literal("POST"),
  path: v.literal("/ats/candidates"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { header: v.object({ "X-Integration-Id": v.string() }), body: PostAtsCandidatesRequestBody },
  responses: { 200: PostAtsCandidatesPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type get_GetAtsCandidatesCandidateIdAttachments = typeof get_GetAtsCandidatesCandidateIdAttachments;
export const get_GetAtsCandidatesCandidateIdAttachments = {
  method: v.literal("GET"),
  path: v.literal("/ats/candidates/{candidate_id}/attachments"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ candidate_id: GetAtsCandidatesCandidateIdAttachmentsParameterCandidateId }), header: v.object({ "X-Integration-Id": v.string() }) },
  responses: { 200: GetAtsCandidatesCandidateIdAttachmentsPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type post_PostAtsCandidatesCandidateIdAttachments = typeof post_PostAtsCandidatesCandidateIdAttachments;
export const post_PostAtsCandidatesCandidateIdAttachments = {
  method: v.literal("POST"),
  path: v.literal("/ats/candidates/{candidate_id}/attachments"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ candidate_id: PostAtsCandidatesCandidateIdAttachmentsParameterCandidateId }), header: v.object({ "X-Integration-Id": v.string() }), body: PostAtsCandidatesCandidateIdAttachmentsRequestBody },
  responses: { 200: PostAtsCandidatesCandidateIdAttachmentsPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type post_PostAtsCandidatesCandidateIdResultLinks = typeof post_PostAtsCandidatesCandidateIdResultLinks;
export const post_PostAtsCandidatesCandidateIdResultLinks = {
  method: v.literal("POST"),
  path: v.literal("/ats/candidates/{candidate_id}/result-links"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ candidate_id: PostAtsCandidatesCandidateIdResultLinksParameterCandidateId }), header: v.object({ "X-Integration-Id": v.string() }), body: PostAtsCandidatesCandidateIdResultLinksRequestBody },
  responses: { 200: PostAtsCandidatesCandidateIdResultLinksPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type post_PostAtsCandidatesCandidateIdTags = typeof post_PostAtsCandidatesCandidateIdTags;
export const post_PostAtsCandidatesCandidateIdTags = {
  method: v.literal("POST"),
  path: v.literal("/ats/candidates/{candidate_id}/tags"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ candidate_id: PostAtsCandidatesCandidateIdTagsParameterCandidateId }), header: v.object({ "X-Integration-Id": v.string() }), body: PostAtsCandidatesCandidateIdTagsRequestBody },
  responses: { 200: PostAtsCandidatesCandidateIdTagsPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type delete_DeleteAtsCandidatesCandidateIdTags = typeof delete_DeleteAtsCandidatesCandidateIdTags;
export const delete_DeleteAtsCandidatesCandidateIdTags = {
  method: v.literal("DELETE"),
  path: v.literal("/ats/candidates/{candidate_id}/tags"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ candidate_id: DeleteAtsCandidatesCandidateIdTagsParameterCandidateId }), header: v.object({ "X-Integration-Id": v.string() }), body: DeleteAtsCandidatesCandidateIdTagsRequestBody },
  responses: { 200: DeleteAtsCandidatesCandidateIdTagsPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type get_GetAtsTags = typeof get_GetAtsTags;
export const get_GetAtsTags = {
  method: v.literal("GET"),
  path: v.literal("/ats/tags"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ cursor: GetAtsTagsParameterCursor, page_size: GetAtsTagsParameterPageSize, updated_after: GetAtsTagsParameterUpdatedAfter, include_deleted: GetAtsTagsParameterIncludeDeleted, ignore_unsupported_filters: GetAtsTagsParameterIgnoreUnsupportedFilters, ids: GetAtsTagsParameterIds, remote_ids: GetAtsTagsParameterRemoteIds }))), header: v.object({ "X-Integration-Id": v.string() }) },
  responses: { 200: GetAtsTagsPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type get_GetAtsApplicationStages = typeof get_GetAtsApplicationStages;
export const get_GetAtsApplicationStages = {
  method: v.literal("GET"),
  path: v.literal("/ats/application-stages"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ cursor: GetAtsApplicationStagesParameterCursor, page_size: GetAtsApplicationStagesParameterPageSize, updated_after: GetAtsApplicationStagesParameterUpdatedAfter, include_deleted: GetAtsApplicationStagesParameterIncludeDeleted, ignore_unsupported_filters: GetAtsApplicationStagesParameterIgnoreUnsupportedFilters, ids: GetAtsApplicationStagesParameterIds, remote_ids: GetAtsApplicationStagesParameterRemoteIds }))), header: v.object({ "X-Integration-Id": v.string() }) },
  responses: { 200: GetAtsApplicationStagesPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type get_GetAtsJobs = typeof get_GetAtsJobs;
export const get_GetAtsJobs = {
  method: v.literal("GET"),
  path: v.literal("/ats/jobs"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ cursor: GetAtsJobsParameterCursor, page_size: GetAtsJobsParameterPageSize, updated_after: GetAtsJobsParameterUpdatedAfter, include_deleted: GetAtsJobsParameterIncludeDeleted, ignore_unsupported_filters: GetAtsJobsParameterIgnoreUnsupportedFilters, ids: GetAtsJobsParameterIds, remote_ids: GetAtsJobsParameterRemoteIds, job_codes: GetAtsJobsParameterJobCodes, post_url: GetAtsJobsParameterPostUrl, status: GetAtsJobsParameterStatus, statuses: GetAtsJobsParameterStatuses, employment_types: GetAtsJobsParameterEmploymentTypes, visibilities: GetAtsJobsParameterVisibilities, remote_created_after: GetAtsJobsParameterRemoteCreatedAfter, name_contains: GetAtsJobsParameterNameContains }))), header: v.object({ "X-Integration-Id": v.string() }) },
  responses: { 200: GetAtsJobsPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type post_PostAtsJobsJobIdApplications = typeof post_PostAtsJobsJobIdApplications;
export const post_PostAtsJobsJobIdApplications = {
  method: v.literal("POST"),
  path: v.literal("/ats/jobs/{job_id}/applications"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ job_id: PostAtsJobsJobIdApplicationsParameterJobId }), header: v.object({ "X-Integration-Id": v.string() }), body: PostAtsJobsJobIdApplicationsRequestBody },
  responses: { 200: PostAtsJobsJobIdApplicationsPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type get_GetAtsUsers = typeof get_GetAtsUsers;
export const get_GetAtsUsers = {
  method: v.literal("GET"),
  path: v.literal("/ats/users"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ cursor: GetAtsUsersParameterCursor, page_size: GetAtsUsersParameterPageSize, updated_after: GetAtsUsersParameterUpdatedAfter, include_deleted: GetAtsUsersParameterIncludeDeleted, ignore_unsupported_filters: GetAtsUsersParameterIgnoreUnsupportedFilters, ids: GetAtsUsersParameterIds, remote_ids: GetAtsUsersParameterRemoteIds, emails: GetAtsUsersParameterEmails }))), header: v.object({ "X-Integration-Id": v.string() }) },
  responses: { 200: GetAtsUsersPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type get_GetAtsRoles = typeof get_GetAtsRoles;
export const get_GetAtsRoles = {
  method: v.literal("GET"),
  path: v.literal("/ats/roles"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ cursor: GetAtsRolesParameterCursor, page_size: GetAtsRolesParameterPageSize, updated_after: GetAtsRolesParameterUpdatedAfter, include_deleted: GetAtsRolesParameterIncludeDeleted, ignore_unsupported_filters: GetAtsRolesParameterIgnoreUnsupportedFilters, ids: GetAtsRolesParameterIds, remote_ids: GetAtsRolesParameterRemoteIds, scopes: GetAtsRolesParameterScopes }))), header: v.object({ "X-Integration-Id": v.string() }) },
  responses: { 200: GetAtsRolesPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type get_GetAtsOffers = typeof get_GetAtsOffers;
export const get_GetAtsOffers = {
  method: v.literal("GET"),
  path: v.literal("/ats/offers"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ cursor: GetAtsOffersParameterCursor, page_size: GetAtsOffersParameterPageSize, updated_after: GetAtsOffersParameterUpdatedAfter, include_deleted: GetAtsOffersParameterIncludeDeleted, ignore_unsupported_filters: GetAtsOffersParameterIgnoreUnsupportedFilters, ids: GetAtsOffersParameterIds, remote_ids: GetAtsOffersParameterRemoteIds }))), header: v.object({ "X-Integration-Id": v.string() }) },
  responses: { 200: GetAtsOffersPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type get_GetAtsRejectionReasons = typeof get_GetAtsRejectionReasons;
export const get_GetAtsRejectionReasons = {
  method: v.literal("GET"),
  path: v.literal("/ats/rejection-reasons"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ cursor: GetAtsRejectionReasonsParameterCursor, page_size: GetAtsRejectionReasonsParameterPageSize, updated_after: GetAtsRejectionReasonsParameterUpdatedAfter, include_deleted: GetAtsRejectionReasonsParameterIncludeDeleted, ignore_unsupported_filters: GetAtsRejectionReasonsParameterIgnoreUnsupportedFilters, ids: GetAtsRejectionReasonsParameterIds, remote_ids: GetAtsRejectionReasonsParameterRemoteIds }))), header: v.object({ "X-Integration-Id": v.string() }) },
  responses: { 200: GetAtsRejectionReasonsPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type get_GetAtsInterviews = typeof get_GetAtsInterviews;
export const get_GetAtsInterviews = {
  method: v.literal("GET"),
  path: v.literal("/ats/interviews"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ cursor: GetAtsInterviewsParameterCursor, page_size: GetAtsInterviewsParameterPageSize, updated_after: GetAtsInterviewsParameterUpdatedAfter, include_deleted: GetAtsInterviewsParameterIncludeDeleted, ignore_unsupported_filters: GetAtsInterviewsParameterIgnoreUnsupportedFilters, ids: GetAtsInterviewsParameterIds, remote_ids: GetAtsInterviewsParameterRemoteIds, job_ids: GetAtsInterviewsParameterJobIds }))), header: v.object({ "X-Integration-Id": v.string() }) },
  responses: { 200: GetAtsInterviewsPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type get_GetAtsActionsAtsCreateCandidate = typeof get_GetAtsActionsAtsCreateCandidate;
export const get_GetAtsActionsAtsCreateCandidate = {
  method: v.literal("GET"),
  path: v.literal("/ats/actions/ats_create_candidate"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { header: v.object({ "X-Integration-Id": v.string() }) },
  responses: { 200: GetAtsActionsAtsCreateCandidatePositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type get_GetAtsActionsAtsCreateApplication = typeof get_GetAtsActionsAtsCreateApplication;
export const get_GetAtsActionsAtsCreateApplication = {
  method: v.literal("GET"),
  path: v.literal("/ats/actions/ats_create_application"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { header: v.object({ "X-Integration-Id": v.string() }) },
  responses: { 200: GetAtsActionsAtsCreateApplicationPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type get_GetAtsActionsAtsAddApplicationAttachment = typeof get_GetAtsActionsAtsAddApplicationAttachment;
export const get_GetAtsActionsAtsAddApplicationAttachment = {
  method: v.literal("GET"),
  path: v.literal("/ats/actions/ats_add_application_attachment"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { header: v.object({ "X-Integration-Id": v.string() }) },
  responses: { 200: GetAtsActionsAtsAddApplicationAttachmentPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type get_GetAtsActionsAtsAddCandidateAttachment = typeof get_GetAtsActionsAtsAddCandidateAttachment;
export const get_GetAtsActionsAtsAddCandidateAttachment = {
  method: v.literal("GET"),
  path: v.literal("/ats/actions/ats_add_candidate_attachment"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { header: v.object({ "X-Integration-Id": v.string() }) },
  responses: { 200: GetAtsActionsAtsAddCandidateAttachmentPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type post_PostAtsImportTrackedApplication = typeof post_PostAtsImportTrackedApplication;
export const post_PostAtsImportTrackedApplication = {
  method: v.literal("POST"),
  path: v.literal("/ats/import-tracked-application"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { header: v.object({ "X-Integration-Id": v.string() }), body: PostAtsImportTrackedApplicationRequestBody },
  responses: { 200: PostAtsImportTrackedApplicationPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type post_PostAtsCustomAvionteSyncedJobs = typeof post_PostAtsCustomAvionteSyncedJobs;
export const post_PostAtsCustomAvionteSyncedJobs = {
  method: v.literal("POST"),
  path: v.literal("/ats/custom/avionte/synced-jobs"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { header: v.object({ "X-Integration-Id": v.string() }), body: PostAtsCustomAvionteSyncedJobsRequestBody },
  responses: { 200: PostAtsCustomAvionteSyncedJobsPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type delete_DeleteAtsCustomAvionteSyncedJobsJobRemoteId = typeof delete_DeleteAtsCustomAvionteSyncedJobsJobRemoteId;
export const delete_DeleteAtsCustomAvionteSyncedJobsJobRemoteId = {
  method: v.literal("DELETE"),
  path: v.literal("/ats/custom/avionte/synced-jobs/{job_remote_id}"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ job_remote_id: DeleteAtsCustomAvionteSyncedJobsJobRemoteIdParameterJobRemoteId }), header: v.object({ "X-Integration-Id": v.string() }), body: DeleteAtsCustomAvionteSyncedJobsJobRemoteIdRequestBody },
  responses: { 200: DeleteAtsCustomAvionteSyncedJobsJobRemoteIdPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type get_GetAssessmentPackages = typeof get_GetAssessmentPackages;
export const get_GetAssessmentPackages = {
  method: v.literal("GET"),
  path: v.literal("/assessment/packages"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { header: v.object({ "X-Integration-Id": v.string() }) },
  responses: { 200: GetAssessmentPackagesPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type put_PutAssessmentPackages = typeof put_PutAssessmentPackages;
export const put_PutAssessmentPackages = {
  method: v.literal("PUT"),
  path: v.literal("/assessment/packages"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { header: v.object({ "X-Integration-Id": v.string() }), body: PutAssessmentPackagesRequestBody },
  responses: { 200: PutAssessmentPackagesPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type get_GetAssessmentOrders = typeof get_GetAssessmentOrders;
export const get_GetAssessmentOrders = {
  method: v.literal("GET"),
  path: v.literal("/assessment/orders"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ cursor: GetAssessmentOrdersParameterCursor, page_size: GetAssessmentOrdersParameterPageSize, ids: GetAssessmentOrdersParameterIds, statuses: GetAssessmentOrdersParameterStatuses, created_after: GetAssessmentOrdersParameterCreatedAfter }))), header: v.object({ "X-Integration-Id": v.string() }) },
  responses: { 200: GetAssessmentOrdersPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type get_GetAssessmentOrdersOpen = typeof get_GetAssessmentOrdersOpen;
export const get_GetAssessmentOrdersOpen = {
  method: v.literal("GET"),
  path: v.literal("/assessment/orders/open"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ cursor: GetAssessmentOrdersOpenParameterCursor, page_size: GetAssessmentOrdersOpenParameterPageSize }))), header: v.object({ "X-Integration-Id": v.string() }) },
  responses: { 200: GetAssessmentOrdersOpenPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type put_PutAssessmentOrdersAssessmentOrderIdResult = typeof put_PutAssessmentOrdersAssessmentOrderIdResult;
export const put_PutAssessmentOrdersAssessmentOrderIdResult = {
  method: v.literal("PUT"),
  path: v.literal("/assessment/orders/{assessment_order_id}/result"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ assessment_order_id: PutAssessmentOrdersAssessmentOrderIdResultParameterAssessmentOrderId }), header: v.object({ "X-Integration-Id": v.string() }), body: PutAssessmentOrdersAssessmentOrderIdResultRequestBody },
  responses: { 200: PutAssessmentOrdersAssessmentOrderIdResultPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type get_GetLmsUsers = typeof get_GetLmsUsers;
export const get_GetLmsUsers = {
  method: v.literal("GET"),
  path: v.literal("/lms/users"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ cursor: GetLmsUsersParameterCursor, page_size: GetLmsUsersParameterPageSize, updated_after: GetLmsUsersParameterUpdatedAfter, include_deleted: GetLmsUsersParameterIncludeDeleted, ignore_unsupported_filters: GetLmsUsersParameterIgnoreUnsupportedFilters, ids: GetLmsUsersParameterIds, remote_ids: GetLmsUsersParameterRemoteIds, work_emails: GetLmsUsersParameterWorkEmails }))), header: v.object({ "X-Integration-Id": v.string() }) },
  responses: { 200: GetLmsUsersPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type get_GetLmsCourseProgressions = typeof get_GetLmsCourseProgressions;
export const get_GetLmsCourseProgressions = {
  method: v.literal("GET"),
  path: v.literal("/lms/course-progressions"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ cursor: GetLmsCourseProgressionsParameterCursor, page_size: GetLmsCourseProgressionsParameterPageSize, updated_after: GetLmsCourseProgressionsParameterUpdatedAfter, include_deleted: GetLmsCourseProgressionsParameterIncludeDeleted, ignore_unsupported_filters: GetLmsCourseProgressionsParameterIgnoreUnsupportedFilters, ids: GetLmsCourseProgressionsParameterIds, remote_ids: GetLmsCourseProgressionsParameterRemoteIds, user_ids: GetLmsCourseProgressionsParameterUserIds, course_ids: GetLmsCourseProgressionsParameterCourseIds }))), header: v.object({ "X-Integration-Id": v.string() }) },
  responses: { 200: GetLmsCourseProgressionsPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type post_PostLmsCourseProgressions = typeof post_PostLmsCourseProgressions;
export const post_PostLmsCourseProgressions = {
  method: v.literal("POST"),
  path: v.literal("/lms/course-progressions"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { header: v.object({ "X-Integration-Id": v.string() }), body: PostLmsCourseProgressionsRequestBody },
  responses: { 200: PostLmsCourseProgressionsPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type post_PostLmsCourseProgressionsCourseProgressionIdComplete = typeof post_PostLmsCourseProgressionsCourseProgressionIdComplete;
export const post_PostLmsCourseProgressionsCourseProgressionIdComplete = {
  method: v.literal("POST"),
  path: v.literal("/lms/course-progressions/{course_progression_id}/complete"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ course_progression_id: PostLmsCourseProgressionsCourseProgressionIdCompleteParameterCourseProgressionId }), header: v.object({ "X-Integration-Id": v.string() }), body: PostLmsCourseProgressionsCourseProgressionIdCompleteRequestBody },
  responses: { 200: PostLmsCourseProgressionsCourseProgressionIdCompletePositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type get_GetLmsCourses = typeof get_GetLmsCourses;
export const get_GetLmsCourses = {
  method: v.literal("GET"),
  path: v.literal("/lms/courses"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ cursor: GetLmsCoursesParameterCursor, page_size: GetLmsCoursesParameterPageSize, updated_after: GetLmsCoursesParameterUpdatedAfter, include_deleted: GetLmsCoursesParameterIncludeDeleted, ignore_unsupported_filters: GetLmsCoursesParameterIgnoreUnsupportedFilters, ids: GetLmsCoursesParameterIds, remote_ids: GetLmsCoursesParameterRemoteIds }))), header: v.object({ "X-Integration-Id": v.string() }) },
  responses: { 200: GetLmsCoursesPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type post_PostLmsCoursesBulk = typeof post_PostLmsCoursesBulk;
export const post_PostLmsCoursesBulk = {
  method: v.literal("POST"),
  path: v.literal("/lms/courses/bulk"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { header: v.object({ "X-Integration-Id": v.string() }), body: PostLmsCoursesBulkRequestBody },
  responses: { 200: PostLmsCoursesBulkPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type get_GetLmsCoursesBulkTaskId = typeof get_GetLmsCoursesBulkTaskId;
export const get_GetLmsCoursesBulkTaskId = {
  method: v.literal("GET"),
  path: v.literal("/lms/courses/bulk/{task_id}"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ task_id: GetLmsCoursesBulkTaskIdParameterTaskId }), header: v.object({ "X-Integration-Id": v.string() }) },
  responses: { 200: GetLmsCoursesBulkTaskIdPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type post_PostLmsCoursesCourseIdDeactivate = typeof post_PostLmsCoursesCourseIdDeactivate;
export const post_PostLmsCoursesCourseIdDeactivate = {
  method: v.literal("POST"),
  path: v.literal("/lms/courses/{course_id}/deactivate"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ course_id: PostLmsCoursesCourseIdDeactivateParameterCourseId }), header: v.object({ "X-Integration-Id": v.string() }), body: PostLmsCoursesCourseIdDeactivateRequestBody },
  responses: { 200: PostLmsCoursesCourseIdDeactivatePositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type get_GetLmsSkills = typeof get_GetLmsSkills;
export const get_GetLmsSkills = {
  method: v.literal("GET"),
  path: v.literal("/lms/skills"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ cursor: GetLmsSkillsParameterCursor, page_size: GetLmsSkillsParameterPageSize, updated_after: GetLmsSkillsParameterUpdatedAfter, include_deleted: GetLmsSkillsParameterIncludeDeleted, ignore_unsupported_filters: GetLmsSkillsParameterIgnoreUnsupportedFilters, ids: GetLmsSkillsParameterIds, remote_ids: GetLmsSkillsParameterRemoteIds }))), header: v.object({ "X-Integration-Id": v.string() }) },
  responses: { 200: GetLmsSkillsPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type post_PostAiApplyCareerSites = typeof post_PostAiApplyCareerSites;
export const post_PostAiApplyCareerSites = {
  method: v.literal("POST"),
  path: v.literal("/ai-apply/career-sites"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { body: PostAiApplyCareerSitesRequestBody },
  responses: { 200: PostAiApplyCareerSitesPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING", "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type get_GetAiApplyCareerSites = typeof get_GetAiApplyCareerSites;
export const get_GetAiApplyCareerSites = {
  method: v.literal("GET"),
  path: v.literal("/ai-apply/career-sites"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ cursor: GetAiApplyCareerSitesParameterCursor, page_size: GetAiApplyCareerSitesParameterPageSize, ids: GetAiApplyCareerSitesParameterIds }))) },
  responses: { 200: GetAiApplyCareerSitesPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING", "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type get_GetAiApplyPostings = typeof get_GetAiApplyPostings;
export const get_GetAiApplyPostings = {
  method: v.literal("GET"),
  path: v.literal("/ai-apply/postings"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ cursor: GetAiApplyPostingsParameterCursor, page_size: GetAiApplyPostingsParameterPageSize, ids: GetAiApplyPostingsParameterIds, career_site_ids: GetAiApplyPostingsParameterCareerSiteIds, job_codes: GetAiApplyPostingsParameterJobCodes }))) },
  responses: { 200: GetAiApplyPostingsPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING", "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type post_PostAiApplyPostings = typeof post_PostAiApplyPostings;
export const post_PostAiApplyPostings = {
  method: v.literal("POST"),
  path: v.literal("/ai-apply/postings"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { body: PostAiApplyPostingsRequestBody },
  responses: { 200: PostAiApplyPostingsPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING", "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type post_PostAiApplyPostingsPostingIdInquire = typeof post_PostAiApplyPostingsPostingIdInquire;
export const post_PostAiApplyPostingsPostingIdInquire = {
  method: v.literal("POST"),
  path: v.literal("/ai-apply/postings/{posting_id}/inquire"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ posting_id: PostAiApplyPostingsPostingIdInquireParameterPostingId }), body: PostAiApplyPostingsPostingIdInquireRequestBody },
  responses: { 200: PostAiApplyPostingsPostingIdInquirePositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING", "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type post_PostAiApplyApply = typeof post_PostAiApplyApply;
export const post_PostAiApplyApply = {
  method: v.literal("POST"),
  path: v.literal("/ai-apply/apply"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { body: PostAiApplyApplyRequestBody },
  responses: { 200: PostAiApplyApplyPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING", "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type get_GetAiApplyApplications = typeof get_GetAiApplyApplications;
export const get_GetAiApplyApplications = {
  method: v.literal("GET"),
  path: v.literal("/ai-apply/applications"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ cursor: GetAiApplyApplicationsParameterCursor, page_size: GetAiApplyApplicationsParameterPageSize, ids: GetAiApplyApplicationsParameterIds, job_posting_ids: GetAiApplyApplicationsParameterJobPostingIds }))) },
  responses: { 200: GetAiApplyApplicationsPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING", "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type get_GetAiApplyUnifiedApiJobs = typeof get_GetAiApplyUnifiedApiJobs;
export const get_GetAiApplyUnifiedApiJobs = {
  method: v.literal("GET"),
  path: v.literal("/ai-apply/unified-api/jobs"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ cursor: GetAiApplyUnifiedApiJobsParameterCursor, page_size: GetAiApplyUnifiedApiJobsParameterPageSize, ids: GetAiApplyUnifiedApiJobsParameterIds, remote_ids: GetAiApplyUnifiedApiJobsParameterRemoteIds, job_codes: GetAiApplyUnifiedApiJobsParameterJobCodes, career_site_ids: GetAiApplyUnifiedApiJobsParameterCareerSiteIds }))) },
  responses: { 200: GetAiApplyUnifiedApiJobsPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING", "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type post_PostAiApplyUnifiedApiJobsJobIdApplications = typeof post_PostAiApplyUnifiedApiJobsJobIdApplications;
export const post_PostAiApplyUnifiedApiJobsJobIdApplications = {
  method: v.literal("POST"),
  path: v.literal("/ai-apply/unified-api/jobs/{job_id}/applications"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ job_id: PostAiApplyUnifiedApiJobsJobIdApplicationsParameterJobId }), body: PostAiApplyUnifiedApiJobsJobIdApplicationsRequestBody },
  responses: { 200: PostAiApplyUnifiedApiJobsJobIdApplicationsPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING", "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type get_GetAiApplyJobFeeds = typeof get_GetAiApplyJobFeeds;
export const get_GetAiApplyJobFeeds = {
  method: v.literal("GET"),
  path: v.literal("/ai-apply/job-feeds"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.optional(v.partial(v.object({ cursor: GetAiApplyJobFeedsParameterCursor, page_size: GetAiApplyJobFeedsParameterPageSize, ids: GetAiApplyJobFeedsParameterIds }))) },
  responses: { 200: GetAiApplyJobFeedsPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING", "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type post_PostAiApplyJobFeeds = typeof post_PostAiApplyJobFeeds;
export const post_PostAiApplyJobFeeds = {
  method: v.literal("POST"),
  path: v.literal("/ai-apply/job-feeds"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { body: PostAiApplyJobFeedsRequestBody },
  responses: { 200: PostAiApplyJobFeedsPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING", "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type post_PostConnectCreateLink = typeof post_PostConnectCreateLink;
export const post_PostConnectCreateLink = {
  method: v.literal("POST"),
  path: v.literal("/connect/create-link"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { body: PostConnectCreateLinkRequestBody },
  responses: { 200: PostConnectCreateLinkPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type get_GetConnectIntegrationByTokenToken = typeof get_GetConnectIntegrationByTokenToken;
export const get_GetConnectIntegrationByTokenToken = {
  method: v.literal("GET"),
  path: v.literal("/connect/integration-by-token/{token}"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ token: GetConnectIntegrationByTokenTokenParameterToken }) },
  responses: { 200: GetConnectIntegrationByTokenTokenPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type post_PostConnectActivateIntegration = typeof post_PostConnectActivateIntegration;
export const post_PostConnectActivateIntegration = {
  method: v.literal("POST"),
  path: v.literal("/connect/activate-integration"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { body: PostConnectActivateIntegrationRequestBody },
  responses: { 200: PostConnectActivateIntegrationPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type get_GetCustomDatevSystemInformation = typeof get_GetCustomDatevSystemInformation;
export const get_GetCustomDatevSystemInformation = {
  method: v.literal("GET"),
  path: v.literal("/custom/datev/system-information"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { header: v.object({ "X-Integration-Id": v.string() }) },
  responses: { 200: GetCustomDatevSystemInformationPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type post_PostCustomDatevPassthrough = typeof post_PostCustomDatevPassthrough;
export const post_PostCustomDatevPassthrough = {
  method: v.literal("POST"),
  path: v.literal("/custom/datev/passthrough"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { header: v.object({ "X-Integration-Id": v.string() }), body: PostCustomDatevPassthroughRequestBody },
  responses: { 200: PostCustomDatevPassthroughPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type get_GetCustomDatevCheckEauPermission = typeof get_GetCustomDatevCheckEauPermission;
export const get_GetCustomDatevCheckEauPermission = {
  method: v.literal("GET"),
  path: v.literal("/custom/datev/check-eau-permission"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { header: v.object({ "X-Integration-Id": v.string() }) },
  responses: { 200: GetCustomDatevCheckEauPermissionPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type get_GetCustomDatevEauRequestsEauId = typeof get_GetCustomDatevEauRequestsEauId;
export const get_GetCustomDatevEauRequestsEauId = {
  method: v.literal("GET"),
  path: v.literal("/custom/datev/eau-requests/{eau_id}"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ eau_id: GetCustomDatevEauRequestsEauIdParameterEauId }), header: v.object({ "X-Integration-Id": v.string() }) },
  responses: { 200: GetCustomDatevEauRequestsEauIdPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type get_GetCustomDatevCheckDocumentPermission = typeof get_GetCustomDatevCheckDocumentPermission;
export const get_GetCustomDatevCheckDocumentPermission = {
  method: v.literal("GET"),
  path: v.literal("/custom/datev/check-document-permission"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { header: v.object({ "X-Integration-Id": v.string() }) },
  responses: { 200: GetCustomDatevCheckDocumentPermissionPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type get_GetCustomDatevAvailableDocuments = typeof get_GetCustomDatevAvailableDocuments;
export const get_GetCustomDatevAvailableDocuments = {
  method: v.literal("GET"),
  path: v.literal("/custom/datev/available-documents"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { query: v.object({ period: GetCustomDatevAvailableDocumentsParameterPeriod }), header: v.object({ "X-Integration-Id": v.string() }) },
  responses: { 200: GetCustomDatevAvailableDocumentsPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type post_PostCustomDatevDownloadDocument = typeof post_PostCustomDatevDownloadDocument;
export const post_PostCustomDatevDownloadDocument = {
  method: v.literal("POST"),
  path: v.literal("/custom/datev/download-document"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { header: v.object({ "X-Integration-Id": v.string() }), body: PostCustomDatevDownloadDocumentRequestBody },
  responses: { 200: PostCustomDatevDownloadDocumentPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type post_PostCustomDatevEmployeesEmployeeIdDownloadDocument = typeof post_PostCustomDatevEmployeesEmployeeIdDownloadDocument;
export const post_PostCustomDatevEmployeesEmployeeIdDownloadDocument = {
  method: v.literal("POST"),
  path: v.literal("/custom/datev/employees/{employee_id}/download-document"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ employee_id: PostCustomDatevEmployeesEmployeeIdDownloadDocumentParameterEmployeeId }), header: v.object({ "X-Integration-Id": v.string() }), body: PostCustomDatevEmployeesEmployeeIdDownloadDocumentRequestBody },
  responses: { 200: PostCustomDatevEmployeesEmployeeIdDownloadDocumentPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type post_PostCustomDatevEmployeesEmployeeIdEauRequests = typeof post_PostCustomDatevEmployeesEmployeeIdEauRequests;
export const post_PostCustomDatevEmployeesEmployeeIdEauRequests = {
  method: v.literal("POST"),
  path: v.literal("/custom/datev/employees/{employee_id}/eau-requests"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ employee_id: PostCustomDatevEmployeesEmployeeIdEauRequestsParameterEmployeeId }), header: v.object({ "X-Integration-Id": v.string() }), body: PostCustomDatevEmployeesEmployeeIdEauRequestsRequestBody },
  responses: { 200: PostCustomDatevEmployeesEmployeeIdEauRequestsPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type put_PutCustomDatevEmployeesEmployeeIdPreparePayroll = typeof put_PutCustomDatevEmployeesEmployeeIdPreparePayroll;
export const put_PutCustomDatevEmployeesEmployeeIdPreparePayroll = {
  method: v.literal("PUT"),
  path: v.literal("/custom/datev/employees/{employee_id}/prepare-payroll"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ employee_id: PutCustomDatevEmployeesEmployeeIdPreparePayrollParameterEmployeeId }), header: v.object({ "X-Integration-Id": v.string() }), body: PutCustomDatevEmployeesEmployeeIdPreparePayrollRequestBody },
  responses: { 200: PutCustomDatevEmployeesEmployeeIdPreparePayrollPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type put_PutCustomDatevEmployeesEmployeeIdCompensations = typeof put_PutCustomDatevEmployeesEmployeeIdCompensations;
export const put_PutCustomDatevEmployeesEmployeeIdCompensations = {
  method: v.literal("PUT"),
  path: v.literal("/custom/datev/employees/{employee_id}/compensations"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ employee_id: PutCustomDatevEmployeesEmployeeIdCompensationsParameterEmployeeId }), header: v.object({ "X-Integration-Id": v.string() }), body: PutCustomDatevEmployeesEmployeeIdCompensationsRequestBody },
  responses: { 200: PutCustomDatevEmployeesEmployeeIdCompensationsPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type get_GetCustomDatevCheckWritePermission = typeof get_GetCustomDatevCheckWritePermission;
export const get_GetCustomDatevCheckWritePermission = {
  method: v.literal("GET"),
  path: v.literal("/custom/datev/check-write-permission"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { header: v.object({ "X-Integration-Id": v.string() }) },
  responses: { 200: GetCustomDatevCheckWritePermissionPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type get_GetCustomDatevDataPushes = typeof get_GetCustomDatevDataPushes;
export const get_GetCustomDatevDataPushes = {
  method: v.literal("GET"),
  path: v.literal("/custom/datev/data-pushes"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { header: v.object({ "X-Integration-Id": v.string() }) },
  responses: { 200: GetCustomDatevDataPushesPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type post_PostCustomDatevPushDataGeneral = typeof post_PostCustomDatevPushDataGeneral;
export const post_PostCustomDatevPushDataGeneral = {
  method: v.literal("POST"),
  path: v.literal("/custom/datev/push-data/general"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { header: v.object({ "X-Integration-Id": v.string() }), body: PostCustomDatevPushDataGeneralRequestBody },
  responses: { 200: PostCustomDatevPushDataGeneralPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type post_PostCustomDatevPushDataPayroll = typeof post_PostCustomDatevPushDataPayroll;
export const post_PostCustomDatevPushDataPayroll = {
  method: v.literal("POST"),
  path: v.literal("/custom/datev/push-data/payroll"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { header: v.object({ "X-Integration-Id": v.string() }), body: PostCustomDatevPushDataPayrollRequestBody },
  responses: { 200: PostCustomDatevPushDataPayrollPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type post_PostCustomSilaeEmployeesEmployeeIdPayrollSupplements = typeof post_PostCustomSilaeEmployeesEmployeeIdPayrollSupplements;
export const post_PostCustomSilaeEmployeesEmployeeIdPayrollSupplements = {
  method: v.literal("POST"),
  path: v.literal("/custom/silae/employees/{employee_id}/payroll-supplements"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ employee_id: PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsParameterEmployeeId }), header: v.object({ "X-Integration-Id": v.string() }), body: PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsRequestBody },
  responses: { 200: PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsPositiveResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
};

export type post_PostAiApplyJobFeedsBulkImport = typeof post_PostAiApplyJobFeedsBulkImport;
export const post_PostAiApplyJobFeedsBulkImport = {
  method: v.literal("POST"),
  path: v.literal("/ai-apply/job-feeds/{job_feed_id}/bulk-import"),
  requestFormat: v.literal("json"),
  responseFormat: v.literal("json"),
  parameters: { path: v.object({ job_feed_id: v.string() }), body: v.string() },
  responses: { 200: BulkImportResponse, default: v.object({ status: v.literal("error"), error: v.object({ code: v.nullable(v.picklist(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING", "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"])), title: v.nullable(v.string()), message: v.string(), log_url: v.nullable(v.pipe(v.string(), v.url())) }) }) },
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
type InferSchemaValue<T> = T extends v.GenericSchema ? v.InferOutput<T> : T extends object ? { [K in keyof T]: InferSchemaValue<T[K]> } : T;
type InferSchemaInputRaw<T> = T extends v.GenericSchema ? v.InferInput<T> : T extends object ? { [K in keyof T]: InferSchemaInputRaw<T[K]> } : T;
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


// <ValidateHelpers>
const defaultParse = (schema: unknown, value: unknown): unknown => {
  return v.parse(schema as v.GenericSchema, value);
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

  