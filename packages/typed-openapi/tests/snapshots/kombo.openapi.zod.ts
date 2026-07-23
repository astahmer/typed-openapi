
  import { z } from "zod";

// <Schemas>
export type GetCheckApiKeyPositiveResponse = z.infer<typeof GetCheckApiKeyPositiveResponse>;
export const GetCheckApiKeyPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ environment_id: z.string(), customer_id: z.string() }) });

export type PostForceSyncPositiveResponse = z.infer<typeof PostForceSyncPositiveResponse>;
export const PostForceSyncPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ already_queued: z.boolean(), sync_id: z.string(), type: z.enum(["FULL", "DELTA"]) }) });

export type PostForceSyncRequestBody = z.infer<typeof PostForceSyncRequestBody>;
export const PostForceSyncRequestBody = z.object({ type: z.enum(["FULL", "DELTA"]).default("FULL") }).partial();

export type PostPassthroughToolApiParameterTool = z.infer<typeof PostPassthroughToolApiParameterTool>;
export const PostPassthroughToolApiParameterTool = z.string();

export type PostPassthroughToolApiParameterApi = z.infer<typeof PostPassthroughToolApiParameterApi>;
export const PostPassthroughToolApiParameterApi = z.string();

export type PostPassthroughToolApiPositiveResponse = z.infer<typeof PostPassthroughToolApiPositiveResponse>;
export const PostPassthroughToolApiPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ url: z.url(), status: z.number().int(), headers: z.record(z.string(), z.union([z.string(), z.array(z.string())])), data: z.unknown().optional() }), warnings: z.array(z.object({ message: z.string() })) });

export type PostPassthroughToolApiRequestBody = z.infer<typeof PostPassthroughToolApiRequestBody>;
export const PostPassthroughToolApiRequestBody = z.object({ method: z.enum(["GET", "POST", "DELETE", "PUT", "PATCH"]), path: z.string(), headers: z.record(z.string(), z.string()).optional(), params: z.record(z.string(), z.string()).optional(), data: z.unknown().optional(), response_as_base64: z.boolean().optional(), multipart_form_data: z.array(z.object({ name: z.string(), value: z.union([z.string(), z.object({ name: z.string(), content_type: z.string().regex(new RegExp("^[\\w.-]+\\/[\\w.-]+$")).optional(), data_url: z.url().optional(), data: z.string().optional() })]) })).optional(), api_options: z.record(z.string(), z.string()).optional() });

export type DeleteIntegrationsIntegrationIdParameterIntegrationId = z.infer<typeof DeleteIntegrationsIntegrationIdParameterIntegrationId>;
export const DeleteIntegrationsIntegrationIdParameterIntegrationId = z.string();

export type DeleteIntegrationsIntegrationIdPositiveResponse = z.infer<typeof DeleteIntegrationsIntegrationIdPositiveResponse>;
export const DeleteIntegrationsIntegrationIdPositiveResponse = z.object({ status: z.literal("success"), data: z.record(z.string(), z.unknown()) });

export type DeleteIntegrationsIntegrationIdRequestBody = z.infer<typeof DeleteIntegrationsIntegrationIdRequestBody>;
export const DeleteIntegrationsIntegrationIdRequestBody = z.object({  }).partial();

export type GetIntegrationsIntegrationIdParameterIntegrationId = z.infer<typeof GetIntegrationsIntegrationIdParameterIntegrationId>;
export const GetIntegrationsIntegrationIdParameterIntegrationId = z.string();

export type GetIntegrationsIntegrationIdPositiveResponse = z.infer<typeof GetIntegrationsIntegrationIdPositiveResponse>;
export const GetIntegrationsIntegrationIdPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ id: z.string(), tool: z.object({ id: z.string(), label: z.string(), internal_label: z.string().nullable(), logo_url: z.url(), icon_url: z.url() }), category: z.enum(["HRIS", "ATS", "ASSESSMENT", "LMS"]), status: z.enum(["ACTIVE", "INVALID", "INACTIVE"]), setup_status: z.enum(["INCOMPLETE", "FINAL_SYNC_PENDING", "COMPLETED"]), end_user: z.object({ organization_name: z.string(), creator_email: z.string().regex(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$")).nullable(), origin_id: z.string().nullable() }), scope_config: z.object({ id: z.string(), name: z.string().nullable() }), data_expired_at: z.iso.datetime().nullable(), created_at: z.iso.datetime(), beta: z.boolean(), read_models: z.array(z.object({ id: z.string(), label: z.string(), is_available: z.boolean(), coverage_status: z.enum(["SUPPORTED", "UNSUPPORTED", "NOT_IMPLEMENTED", "UNKNOWN"]), scope_config_setting: z.enum(["ENABLED", "DISABLED", "OPTIONAL"]), opted_out_by_customer: z.boolean(), fields: z.array(z.object({ id: z.string(), is_available: z.boolean(), coverage_status: z.enum(["SUPPORTED", "UNSUPPORTED", "NOT_IMPLEMENTED", "UNKNOWN"]), scope_config_setting: z.enum(["ENABLED", "DISABLED", "OPTIONAL"]), opted_out_by_customer: z.boolean() })) })), write_actions: z.array(z.object({ id: z.string(), label: z.string(), is_available: z.boolean(), coverage_status: z.enum(["SUPPORTED", "UNSUPPORTED", "NOT_IMPLEMENTED", "UNKNOWN"]), scope_config_setting: z.enum(["ENABLED", "DISABLED", "OPTIONAL"]), opted_out_by_customer: z.boolean(), fields: z.array(z.object({ id: z.string(), is_available: z.boolean(), coverage_status: z.enum(["SUPPORTED", "UNSUPPORTED", "NOT_IMPLEMENTED", "UNKNOWN"]) })) })) }) });

export type PutIntegrationsIntegrationIdEnabledParameterIntegrationId = z.infer<typeof PutIntegrationsIntegrationIdEnabledParameterIntegrationId>;
export const PutIntegrationsIntegrationIdEnabledParameterIntegrationId = z.string();

export type PutIntegrationsIntegrationIdEnabledPositiveResponse = z.infer<typeof PutIntegrationsIntegrationIdEnabledPositiveResponse>;
export const PutIntegrationsIntegrationIdEnabledPositiveResponse = z.object({ status: z.literal("success"), data: z.record(z.string(), z.unknown()) });

export type PutIntegrationsIntegrationIdEnabledRequestBody = z.infer<typeof PutIntegrationsIntegrationIdEnabledRequestBody>;
export const PutIntegrationsIntegrationIdEnabledRequestBody = z.object({ value: z.boolean() });

export type PostIntegrationsIntegrationIdRelinkParameterIntegrationId = z.infer<typeof PostIntegrationsIntegrationIdRelinkParameterIntegrationId>;
export const PostIntegrationsIntegrationIdRelinkParameterIntegrationId = z.string();

export type PostIntegrationsIntegrationIdRelinkPositiveResponse = z.infer<typeof PostIntegrationsIntegrationIdRelinkPositiveResponse>;
export const PostIntegrationsIntegrationIdRelinkPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ link: z.url() }) });

export type PostIntegrationsIntegrationIdRelinkRequestBody = z.infer<typeof PostIntegrationsIntegrationIdRelinkRequestBody>;
export const PostIntegrationsIntegrationIdRelinkRequestBody = z.object({ language: z.enum(["en", "de", "fr", "it", "es"]).default("en").nullable().default("en"), scope_config_id: z.string().nullable(), link_type: z.enum(["EMBEDDED", "MAGIC_LINK"]).default("EMBEDDED") }).partial();

export type PostIntegrationsIntegrationIdSetupLinkParameterIntegrationId = z.infer<typeof PostIntegrationsIntegrationIdSetupLinkParameterIntegrationId>;
export const PostIntegrationsIntegrationIdSetupLinkParameterIntegrationId = z.string();

export type PostIntegrationsIntegrationIdSetupLinkPositiveResponse = z.infer<typeof PostIntegrationsIntegrationIdSetupLinkPositiveResponse>;
export const PostIntegrationsIntegrationIdSetupLinkPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ link: z.url() }) });

export type PostIntegrationsIntegrationIdSetupLinkRequestBody = z.infer<typeof PostIntegrationsIntegrationIdSetupLinkRequestBody>;
export const PostIntegrationsIntegrationIdSetupLinkRequestBody = z.object({ language: z.enum(["en", "de", "fr", "it", "es"]).default("en").nullable().default("en"), link_type: z.enum(["EMBEDDED", "MAGIC_LINK"]) });

export type GetIntegrationsIntegrationIdIntegrationFieldsParameterIntegrationId = z.infer<typeof GetIntegrationsIntegrationIdIntegrationFieldsParameterIntegrationId>;
export const GetIntegrationsIntegrationIdIntegrationFieldsParameterIntegrationId = z.string();

export type GetIntegrationsIntegrationIdIntegrationFieldsParameterCursor = z.infer<typeof GetIntegrationsIntegrationIdIntegrationFieldsParameterCursor>;
export const GetIntegrationsIntegrationIdIntegrationFieldsParameterCursor = z.string();

export type GetIntegrationsIntegrationIdIntegrationFieldsParameterPageSize = z.infer<typeof GetIntegrationsIntegrationIdIntegrationFieldsParameterPageSize>;
export const GetIntegrationsIntegrationIdIntegrationFieldsParameterPageSize = z.number().int().min(1).max(2000).default(100);

export type GetIntegrationsIntegrationIdIntegrationFieldsPositiveResponse = z.infer<typeof GetIntegrationsIntegrationIdIntegrationFieldsPositiveResponse>;
export const GetIntegrationsIntegrationIdIntegrationFieldsPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ results: z.array(z.object({ id: z.string(), key: z.string(), model: z.string(), type: z.enum(["DEFAULT", "CUSTOM"]), label: z.string().nullable(), is_passthrough_enabled: z.boolean(), is_writable: z.literal(false) })), next_cursor: z.string().nullable(), next: z.string().nullable() }) });

export type PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationId = z.infer<typeof PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationId>;
export const PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationId = z.string();

export type PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationFieldId = z.infer<typeof PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationFieldId>;
export const PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationFieldId = z.string();

export type PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdPositiveResponse = z.infer<typeof PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdPositiveResponse>;
export const PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ id: z.string(), key: z.string(), model: z.string(), type: z.enum(["DEFAULT", "CUSTOM"]), label: z.string().nullable(), is_passthrough_enabled: z.boolean(), is_writable: z.literal(false) }) });

export type PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdRequestBody = z.infer<typeof PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdRequestBody>;
export const PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdRequestBody = z.object({ enable_passthrough: z.boolean().nullable() });

export type GetIntegrationsIntegrationIdCustomFieldsParameterIntegrationId = z.infer<typeof GetIntegrationsIntegrationIdCustomFieldsParameterIntegrationId>;
export const GetIntegrationsIntegrationIdCustomFieldsParameterIntegrationId = z.string();

export type GetIntegrationsIntegrationIdCustomFieldsParameterCursor = z.infer<typeof GetIntegrationsIntegrationIdCustomFieldsParameterCursor>;
export const GetIntegrationsIntegrationIdCustomFieldsParameterCursor = z.string();

export type GetIntegrationsIntegrationIdCustomFieldsParameterPageSize = z.infer<typeof GetIntegrationsIntegrationIdCustomFieldsParameterPageSize>;
export const GetIntegrationsIntegrationIdCustomFieldsParameterPageSize = z.number().int().min(1).max(250).default(100);

export type GetIntegrationsIntegrationIdCustomFieldsPositiveResponse = z.infer<typeof GetIntegrationsIntegrationIdCustomFieldsPositiveResponse>;
export const GetIntegrationsIntegrationIdCustomFieldsPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ results: z.array(z.object({ id: z.string(), key: z.string(), integration_field: z.object({ id: z.string(), key: z.string(), type: z.enum(["DEFAULT", "CUSTOM"]), label: z.string().nullable() }).nullable(), model: z.string(), label: z.string().nullable(), description: z.string().nullable() })), next_cursor: z.string().nullable(), next: z.string().nullable() }) });

export type PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterIntegrationId = z.infer<typeof PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterIntegrationId>;
export const PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterIntegrationId = z.string();

export type PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterCustomFieldId = z.infer<typeof PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterCustomFieldId>;
export const PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterCustomFieldId = z.string();

export type PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdPositiveResponse = z.infer<typeof PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdPositiveResponse>;
export const PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ id: z.string(), key: z.string(), integration_field: z.object({ id: z.string(), key: z.string(), type: z.enum(["DEFAULT", "CUSTOM"]), label: z.string().nullable() }).nullable(), model: z.string(), label: z.string().nullable(), description: z.string().nullable() }) });

export type PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdRequestBody = z.infer<typeof PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdRequestBody>;
export const PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdRequestBody = z.object({ integration_field_id: z.string().nullable() });

export type GetToolsCategoryParameterCategory = z.infer<typeof GetToolsCategoryParameterCategory>;
export const GetToolsCategoryParameterCategory = z.enum(["hris", "ats", "assessment", "lms"]);

export type GetToolsCategoryPositiveResponse = z.infer<typeof GetToolsCategoryPositiveResponse>;
export const GetToolsCategoryPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ tools: z.array(z.object({ id: z.string(), label: z.string(), internal_label: z.string().nullable(), assets: z.object({ logo_url: z.string(), icon_url: z.string(), icon_black_url: z.string() }), paid_api_details_markdown: z.string().nullable(), fast_track_details_markdown: z.string().nullable(), partner_only_details_markdown: z.string().nullable(), connection_guide_url: z.string().nullable(), coverage: z.object({ read_models: z.array(z.object({ id: z.string(), label: z.string(), coverage_status: z.enum(["SUPPORTED", "UNSUPPORTED", "NOT_IMPLEMENTED", "UNKNOWN"]), fields: z.array(z.object({ id: z.string(), coverage_status: z.enum(["SUPPORTED", "UNSUPPORTED", "NOT_IMPLEMENTED", "UNKNOWN"]) })) })), write_actions: z.array(z.object({ id: z.string(), label: z.string(), coverage_status: z.enum(["SUPPORTED", "UNSUPPORTED", "NOT_IMPLEMENTED", "UNKNOWN"]), fields: z.array(z.object({ id: z.string(), coverage_status: z.enum(["SUPPORTED", "UNSUPPORTED", "NOT_IMPLEMENTED", "UNKNOWN"]) })) })), features: z.array(z.object({ id: z.string(), label: z.string(), coverage_status: z.enum(["SUPPORTED", "UNSUPPORTED", "NOT_IMPLEMENTED", "UNKNOWN"]) })) }) })) }) });

export type PostHrisProvisioningGroupsGroupIdDiffParameterGroupId = z.infer<typeof PostHrisProvisioningGroupsGroupIdDiffParameterGroupId>;
export const PostHrisProvisioningGroupsGroupIdDiffParameterGroupId = z.string();

export type PostHrisProvisioningGroupsGroupIdDiffPositiveResponse = z.infer<typeof PostHrisProvisioningGroupsGroupIdDiffPositiveResponse>;
export const PostHrisProvisioningGroupsGroupIdDiffPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ users: z.object({ to_provision: z.array(z.object({ email: z.string().regex(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$")).nullable(), employee: z.object({ id: z.string(), remote_id: z.string().nullable(), first_name: z.string().nullable(), last_name: z.string().nullable(), groups: z.array(z.object({ id: z.string(), remote_id: z.string().nullable(), name: z.string().nullable() })), avatar: z.string().nullable(), work_location_id: z.string().nullable(), legal_entity_id: z.string().nullable() }).partial() })), to_deprovision: z.array(z.object({ origin_id: z.string(), email: z.email() })), already_provisioned: z.array(z.object({ origin_id: z.string(), email: z.email(), employee: z.object({ id: z.string(), remote_id: z.string().nullable(), first_name: z.string().nullable(), last_name: z.string().nullable(), groups: z.array(z.object({ id: z.string(), remote_id: z.string().nullable(), name: z.string().nullable() })), avatar: z.string().nullable(), work_location_id: z.string().nullable(), legal_entity_id: z.string().nullable() }).partial() })) }) }) });

export type PostHrisProvisioningGroupsGroupIdDiffRequestBody = z.infer<typeof PostHrisProvisioningGroupsGroupIdDiffRequestBody>;
export const PostHrisProvisioningGroupsGroupIdDiffRequestBody = z.object({ provisioned_users: z.array(z.object({ origin_id: z.string(), email: z.email() })), options: z.object({ employee_fields: z.array(z.enum(["id", "remote_id", "first_name", "last_name", "groups", "avatar", "work_location_id", "legal_entity_id"])) }) });

export type PostHrisProvisioningGroupsGroupIdSetupLinksParameterGroupId = z.infer<typeof PostHrisProvisioningGroupsGroupIdSetupLinksParameterGroupId>;
export const PostHrisProvisioningGroupsGroupIdSetupLinksParameterGroupId = z.string();

export type PostHrisProvisioningGroupsGroupIdSetupLinksPositiveResponse = z.infer<typeof PostHrisProvisioningGroupsGroupIdSetupLinksPositiveResponse>;
export const PostHrisProvisioningGroupsGroupIdSetupLinksPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ url: z.url(), expires_at: z.iso.datetime() }) });

export type PostHrisProvisioningGroupsGroupIdSetupLinksRequestBody = z.infer<typeof PostHrisProvisioningGroupsGroupIdSetupLinksRequestBody>;
export const PostHrisProvisioningGroupsGroupIdSetupLinksRequestBody = z.object({ language: z.enum(["en", "de", "fr", "it", "es"]).default("en").nullable().default("en") }).partial();

export type GetHrisEmployeesParameterCursor = z.infer<typeof GetHrisEmployeesParameterCursor>;
export const GetHrisEmployeesParameterCursor = z.string();

export type GetHrisEmployeesParameterPageSize = z.infer<typeof GetHrisEmployeesParameterPageSize>;
export const GetHrisEmployeesParameterPageSize = z.number().int().min(1).max(250).default(100);

export type GetHrisEmployeesParameterUpdatedAfter = z.infer<typeof GetHrisEmployeesParameterUpdatedAfter>;
export const GetHrisEmployeesParameterUpdatedAfter = z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"));

export type GetHrisEmployeesParameterIncludeDeleted = z.infer<typeof GetHrisEmployeesParameterIncludeDeleted>;
export const GetHrisEmployeesParameterIncludeDeleted = z.enum(["true", "false"]).default("false");

export type GetHrisEmployeesParameterIgnoreUnsupportedFilters = z.infer<typeof GetHrisEmployeesParameterIgnoreUnsupportedFilters>;
export const GetHrisEmployeesParameterIgnoreUnsupportedFilters = z.enum(["true", "false"]).default("false");

export type GetHrisEmployeesParameterIds = z.infer<typeof GetHrisEmployeesParameterIds>;
export const GetHrisEmployeesParameterIds = z.string();

export type GetHrisEmployeesParameterRemoteIds = z.infer<typeof GetHrisEmployeesParameterRemoteIds>;
export const GetHrisEmployeesParameterRemoteIds = z.string();

export type GetHrisEmployeesParameterEmploymentStatus = z.infer<typeof GetHrisEmployeesParameterEmploymentStatus>;
export const GetHrisEmployeesParameterEmploymentStatus = z.enum(["ACTIVE", "PENDING", "INACTIVE", "LEAVE"]);

export type GetHrisEmployeesParameterEmploymentStatuses = z.infer<typeof GetHrisEmployeesParameterEmploymentStatuses>;
export const GetHrisEmployeesParameterEmploymentStatuses = z.string();

export type GetHrisEmployeesParameterGroupIds = z.infer<typeof GetHrisEmployeesParameterGroupIds>;
export const GetHrisEmployeesParameterGroupIds = z.string();

export type GetHrisEmployeesParameterLegalEntityIds = z.infer<typeof GetHrisEmployeesParameterLegalEntityIds>;
export const GetHrisEmployeesParameterLegalEntityIds = z.string();

export type GetHrisEmployeesParameterWorkLocationIds = z.infer<typeof GetHrisEmployeesParameterWorkLocationIds>;
export const GetHrisEmployeesParameterWorkLocationIds = z.string();

export type GetHrisEmployeesParameterWorkEmails = z.infer<typeof GetHrisEmployeesParameterWorkEmails>;
export const GetHrisEmployeesParameterWorkEmails = z.string();

export type GetHrisEmployeesParameterPersonalEmails = z.infer<typeof GetHrisEmployeesParameterPersonalEmails>;
export const GetHrisEmployeesParameterPersonalEmails = z.string();

export type GetHrisEmployeesParameterCustomFields = z.infer<typeof GetHrisEmployeesParameterCustomFields>;
export const GetHrisEmployeesParameterCustomFields = z.string();

export type GetHrisEmployeesPositiveResponse = z.infer<typeof GetHrisEmployeesPositiveResponse>;
export const GetHrisEmployeesPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ next: z.string().nullable(), results: z.array(z.object({ id: z.string(), remote_id: z.string(), employee_number: z.string().nullable(), first_name: z.string().nullable(), last_name: z.string().nullable(), nationality: z.string().nullable(), display_full_name: z.string().nullable(), job_title: z.string().nullable(), work_email: z.string().regex(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$")).nullable().optional(), personal_email: z.string().regex(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$")).nullable().optional(), mobile_phone_number: z.string().nullable(), ssn: z.string().nullable(), tax_id: z.string().nullable(), gender: z.union([z.enum(["MALE", "FEMALE", "NON_BINARY", "NOT_SPECIFIED"]), z.string(), z.null()]).optional(), ethnicity: z.union([z.enum(["WHITE", "ASIAN", "HISPANIC_LATINO", "HAWAIIAN", "NATIVE_AMERICAN", "BLACK_AFRICAN_AMERICAN", "MULTIPLE_ETHNICITIES", "DECLINE_TO_SPECIFY"]), z.string(), z.null()]).optional(), marital_status: z.union([z.enum(["SINGLE", "MARRIED", "DOMESTIC_PARTNERSHIP", "WIDOWED", "DIVORCED", "SEPARATED", "NOT_MARRIED"]), z.string(), z.null()]).optional(), employment_status: z.union([z.enum(["ACTIVE", "PENDING", "INACTIVE", "LEAVE"]), z.string(), z.null()]).optional(), employment_type: z.union([z.enum(["FULL_TIME", "PART_TIME", "CONTRACT", "INTERNSHIP", "FREELANCE", "WORKING_STUDENT", "APPRENTICESHIP", "TRAINING"]), z.string(), z.null()]).optional(), weekly_hours: z.number().min(-1.7976931348623157e+308).nullable(), avatar: z.string().nullable(), work_location_id: z.string().nullable(), legal_entity_id: z.string().nullable(), manager_id: z.string().nullable(), home_address: z.object({ city: z.string().nullable(), country: z.string().nullable(), raw: z.string().nullable(), state: z.string().nullable(), street_1: z.string().nullable(), street_2: z.string().nullable(), zip_code: z.string().nullable() }).partial().nullable().optional(), bank_accounts: z.array(z.object({ iban: z.string().nullable(), bic: z.string().nullable(), account_number: z.string().nullable(), holder_name: z.string().nullable(), bank_name: z.string().nullable(), domestic_bank_routing: z.object({ number: z.string(), type: z.enum(["GB_SORT_CODE", "DE_BANKLEITZAHL", "US_ABA_ROUTING_TRANSIT_NUMBER", "CA_ROUTING_NUMBER", "AU_BSB_CODE", "FR_RIB"]).nullable() }).nullable() }).partial()).nullable().optional(), date_of_birth: z.iso.datetime().nullable(), start_date: z.iso.datetime().nullable(), termination_date: z.iso.datetime().nullable(), remote_created_at: z.iso.datetime().nullable(), changed_at: z.iso.datetime(), remote_deleted_at: z.iso.datetime().nullable(), custom_fields: z.record(z.string(), z.unknown()).nullable(), integration_fields: z.array(z.object({ id: z.string(), key: z.string(), type: z.enum(["DEFAULT", "CUSTOM"]), value: z.null().optional(), label: z.string().nullable() })), remote_data: z.record(z.string(), z.unknown()).nullable(), employments: z.array(z.object({ id: z.string(), remote_id: z.string().nullable(), employee_id: z.string(), job_title: z.string().nullable(), pay_rate: z.number().min(-1.7976931348623157e+308).nullable(), pay_period: z.union([z.enum(["HOUR", "DAY", "WEEK", "TWO_WEEKS", "HALF_MONTH", "MONTH", "TWO_MONTHS", "QUARTER", "HALF_YEAR", "YEAR"]), z.string(), z.null()]).optional(), pay_frequency: z.union([z.enum(["DAILY", "WEEKLY", "BIWEEKLY", "MONTHLY", "SEMIMONTHLY", "QUARTERLY", "SEMIANNUALLY", "ANNUALLY", "PRO_RATA"]), z.string(), z.null()]).optional(), employment_type: z.union([z.enum(["FULL_TIME", "PART_TIME", "CONTRACT", "INTERNSHIP", "FREELANCE", "WORKING_STUDENT", "APPRENTICESHIP", "TRAINING"]), z.string(), z.null()]).optional(), pay_currency: z.string().nullable(), effective_date: z.iso.datetime().nullable(), changed_at: z.iso.datetime(), remote_deleted_at: z.iso.datetime().nullable(), remote_data: z.record(z.string(), z.unknown()).nullable(), custom_fields: z.record(z.string(), z.unknown()).nullable(), integration_fields: z.array(z.object({ id: z.string(), key: z.string(), type: z.enum(["DEFAULT", "CUSTOM"]), value: z.null().optional(), label: z.string().nullable() })) })), time_off_balances: z.array(z.object({ id: z.string(), remote_id: z.string().nullable(), employee_id: z.string(), type_id: z.string(), balance: z.number().min(-1.7976931348623157e+308).nullable(), balance_unit: z.enum(["HOURS", "DAYS"]).nullable(), changed_at: z.iso.datetime(), remote_deleted_at: z.iso.datetime().nullable(), used: z.number().min(-1.7976931348623157e+308).nullable(), used_unit: z.enum(["HOURS", "DAYS"]).nullable(), remote_data: z.record(z.string(), z.unknown()).nullable() })), manager: z.object({ first_name: z.string().nullable(), last_name: z.string().nullable(), display_full_name: z.string().nullable(), id: z.string(), employee_number: z.string().nullable(), work_email: z.string().regex(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$")).nullable().optional(), remote_id: z.string(), employment_status: z.union([z.enum(["ACTIVE", "PENDING", "INACTIVE", "LEAVE"]), z.string(), z.null()]).optional(), termination_date: z.iso.datetime().nullable() }).nullable(), groups: z.array(z.object({ id: z.string(), remote_id: z.string(), name: z.string().nullable(), type: z.enum(["DEPARTMENT", "TEAM", "COST_CENTER"]).nullable() })), legal_entity: z.object({ id: z.string(), remote_id: z.string().nullable(), name: z.string().nullable(), address: z.object({ city: z.string().nullable(), country: z.string().nullable(), raw: z.string().nullable(), state: z.string().nullable(), street_1: z.string().nullable(), street_2: z.string().nullable(), zip_code: z.string().nullable() }).partial().nullable().optional() }).nullable(), teams: z.array(z.object({ id: z.string(), remote_id: z.string(), name: z.string().nullable(), type: z.enum(["DEPARTMENT", "TEAM", "COST_CENTER"]).nullable() })), work_location: z.object({ id: z.string(), remote_id: z.string().nullable(), name: z.string().nullable(), address: z.object({ city: z.string().nullable(), country: z.string().nullable(), raw: z.string().nullable(), state: z.string().nullable(), street_1: z.string().nullable(), street_2: z.string().nullable(), zip_code: z.string().nullable() }).partial().nullable().optional(), type: z.string().nullable(), changed_at: z.iso.datetime(), remote_deleted_at: z.iso.datetime().nullable(), remote_data: z.record(z.string(), z.unknown()).nullable() }).nullable() })) }) });

export type PostHrisEmployeesPositiveResponse = z.infer<typeof PostHrisEmployeesPositiveResponse>;
export const PostHrisEmployeesPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ id: z.string(), remote_id: z.string(), employee_number: z.string().nullable(), first_name: z.string().nullable(), last_name: z.string().nullable(), nationality: z.string().nullable(), display_full_name: z.string().nullable(), job_title: z.string().nullable(), work_email: z.string().regex(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$")).nullable().optional(), personal_email: z.string().regex(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$")).nullable().optional(), mobile_phone_number: z.string().nullable(), ssn: z.string().nullable(), tax_id: z.string().nullable(), gender: z.union([z.enum(["MALE", "FEMALE", "NON_BINARY", "NOT_SPECIFIED"]), z.string(), z.null()]).optional(), ethnicity: z.union([z.enum(["WHITE", "ASIAN", "HISPANIC_LATINO", "HAWAIIAN", "NATIVE_AMERICAN", "BLACK_AFRICAN_AMERICAN", "MULTIPLE_ETHNICITIES", "DECLINE_TO_SPECIFY"]), z.string(), z.null()]).optional(), marital_status: z.union([z.enum(["SINGLE", "MARRIED", "DOMESTIC_PARTNERSHIP", "WIDOWED", "DIVORCED", "SEPARATED", "NOT_MARRIED"]), z.string(), z.null()]).optional(), employment_status: z.union([z.enum(["ACTIVE", "PENDING", "INACTIVE", "LEAVE"]), z.string(), z.null()]).optional(), employment_type: z.union([z.enum(["FULL_TIME", "PART_TIME", "CONTRACT", "INTERNSHIP", "FREELANCE", "WORKING_STUDENT", "APPRENTICESHIP", "TRAINING"]), z.string(), z.null()]).optional(), weekly_hours: z.number().min(-1.7976931348623157e+308).nullable(), avatar: z.string().nullable(), work_location_id: z.string().nullable(), legal_entity_id: z.string().nullable(), manager_id: z.string().nullable(), home_address: z.object({ city: z.string().nullable(), country: z.string().nullable(), raw: z.string().nullable(), state: z.string().nullable(), street_1: z.string().nullable(), street_2: z.string().nullable(), zip_code: z.string().nullable() }).partial().nullable().optional(), bank_accounts: z.array(z.object({ iban: z.string().nullable(), bic: z.string().nullable(), account_number: z.string().nullable(), holder_name: z.string().nullable(), bank_name: z.string().nullable(), domestic_bank_routing: z.object({ number: z.string(), type: z.enum(["GB_SORT_CODE", "DE_BANKLEITZAHL", "US_ABA_ROUTING_TRANSIT_NUMBER", "CA_ROUTING_NUMBER", "AU_BSB_CODE", "FR_RIB"]).nullable() }).nullable() }).partial()).nullable().optional(), date_of_birth: z.iso.datetime().nullable(), start_date: z.iso.datetime().nullable(), termination_date: z.iso.datetime().nullable(), remote_created_at: z.iso.datetime().nullable(), changed_at: z.iso.datetime(), remote_deleted_at: z.iso.datetime().nullable(), custom_fields: z.record(z.string(), z.unknown()).nullable(), integration_fields: z.array(z.object({ id: z.string(), key: z.string(), type: z.enum(["DEFAULT", "CUSTOM"]), value: z.null().optional(), label: z.string().nullable() })), remote_data: z.record(z.string(), z.unknown()).nullable() }), warnings: z.array(z.object({ message: z.string() })) });

export type PostHrisEmployeesRequestBody = z.infer<typeof PostHrisEmployeesRequestBody>;
export const PostHrisEmployeesRequestBody = z.object({ first_name: z.string(), last_name: z.string(), work_email: z.email().optional(), gender: z.enum(["MALE", "FEMALE", "NON_BINARY", "NOT_SPECIFIED"]).optional(), job_title: z.string().optional(), home_address: z.object({ street_1: z.string(), street_2: z.string(), city: z.string(), state: z.string(), zip_code: z.string(), country: z.string().regex(new RegExp("^[A-Z]{2}$")) }).partial().optional(), date_of_birth: z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")).optional(), mobile_phone_number: z.string().optional(), home_phone_number: z.string().optional(), nationality: z.string().regex(new RegExp("^[A-Z]{2}$")).optional(), start_date: z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")).optional(), legal_entity_id: z.string().optional(), location_id: z.string().optional(), remote_fields: z.object({ humaans: z.object({ employee: z.record(z.string(), z.unknown()) }).partial(), hibob: z.object({ employee: z.record(z.string(), z.unknown()) }).partial(), sympa: z.object({ GenericNewHire: z.record(z.string(), z.unknown()) }).partial(), silae: z.object({ siret: z.string(), employee: z.record(z.string(), z.unknown()), employment: z.record(z.string(), z.unknown()) }).partial(), peoplehr: z.object({ job_role_effective_date: z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")), department: z.string() }).partial(), zohopeople: z.object({ employee_id: z.string().min(1) }).partial(), workday: z.object({ job_requisition_id: z.string(), position_id: z.string(), ssn: z.string(), bank_account: z.object({ iban: z.string(), bic: z.string(), bank_name: z.string() }) }).partial(), deel: z.object({ candidate_id: z.string(), candidate_link: z.string() }), bamboohr: z.object({ employee: z.record(z.string(), z.unknown()) }).partial(), oracle: z.object({ group_id: z.string(), department_id: z.string() }), adpworkforcenow: z.object({ onboarding_template_code: z.string(), applicant_payroll_profile_group_code: z.string(), manager_position_id: z.string().optional(), home_organization_unit_code: z.string().optional(), personal_email: z.string().optional() }), azuread: z.object({ password: z.string() }), paycor: z.object({ paygroupRemoteId: z.string(), departmentRemoteId: z.string() }), planday: z.object({ department_remote_id: z.string() }), dayforce: z.object({ social_security_number: z.string(), pay_type: z.string(), pay_class: z.string(), pay_group: z.string(), base_rate: z.number().min(-1.7976931348623157e+308), role: z.string(), location: z.string(), department: z.string(), job: z.string(), country: z.string() }) }).partial().optional() });

export interface Schema1 { [key: string]: ({ label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: "text", min_length?: (number | null), max_length?: (number | null), reg_exp?: (string | null) } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: "number", min?: (number | null), max?: (number | null) } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: "date" } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: "single_select", options: ({ type: "inline", entries: Array<{ id: string, label: string, unified_value?: string, remote_id: (string | number) }> } | { type: "referenced", link: string }) } | { label: string, required: boolean, description?: (string | null), unified_key?: (string | null), type: "multi_select", min_items?: (number | null), max_items?: (number | null), options: ({ type: "inline", entries: Array<{ id: string, label: string, unified_value?: string, remote_id: (string | number) }> } | { type: "referenced", link: string }) } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: "checkbox" } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: "object", properties: Schema1 } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: "array", item_type: Schema2, min_items?: (number | null), max_items?: (number | null) } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: "file", file_restrictions: { accepted_mime_types: Array<string>, max_file_size?: (number | null) } }) }
export const Schema1: z.ZodType<Schema1> = z.lazy(() => z.record(z.string(), z.discriminatedUnion("type", [z.object({ label: z.string(), required: z.boolean(), description: z.string().nullable().optional(), unified_key: z.enum(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]).nullable().optional(), type: z.literal("text"), min_length: z.number().min(-1.7976931348623157e+308).nullable().optional(), max_length: z.number().min(-1.7976931348623157e+308).nullable().optional(), reg_exp: z.string().nullable().optional() }), z.object({ label: z.string(), required: z.boolean(), description: z.string().nullable().optional(), unified_key: z.enum(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]).nullable().optional(), type: z.literal("number"), min: z.number().min(-1.7976931348623157e+308).nullable().optional(), max: z.number().min(-1.7976931348623157e+308).nullable().optional() }), z.object({ label: z.string(), required: z.boolean(), description: z.string().nullable().optional(), unified_key: z.enum(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]).nullable().optional(), type: z.literal("date") }), z.object({ label: z.string(), required: z.boolean(), description: z.string().nullable().optional(), unified_key: z.enum(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]).nullable().optional(), type: z.literal("single_select"), options: z.discriminatedUnion("type", [z.object({ type: z.literal("inline"), entries: z.array(z.object({ id: z.string(), label: z.string(), unified_value: z.string().optional(), remote_id: z.union([z.string(), z.number().min(-1.7976931348623157e+308)]) })) }), z.object({ type: z.literal("referenced"), link: z.string() })]) }), z.object({ label: z.string(), required: z.boolean(), description: z.string().nullable().optional(), unified_key: z.string().nullable().optional(), type: z.literal("multi_select"), min_items: z.number().min(-1.7976931348623157e+308).nullable().optional(), max_items: z.number().min(-1.7976931348623157e+308).nullable().optional(), options: z.discriminatedUnion("type", [z.object({ type: z.literal("inline"), entries: z.array(z.object({ id: z.string(), label: z.string(), unified_value: z.string().optional(), remote_id: z.union([z.string(), z.number().min(-1.7976931348623157e+308)]) })) }), z.object({ type: z.literal("referenced"), link: z.string() })]) }), z.object({ label: z.string(), required: z.boolean(), description: z.string().nullable().optional(), unified_key: z.enum(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]).nullable().optional(), type: z.literal("checkbox") }), z.object({ label: z.string(), required: z.boolean(), description: z.string().nullable().optional(), unified_key: z.enum(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]).nullable().optional(), type: z.literal("object"), properties: Schema1 }), z.object({ label: z.string(), required: z.boolean(), description: z.string().nullable().optional(), unified_key: z.enum(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]).nullable().optional(), type: z.literal("array"), item_type: Schema2, min_items: z.number().min(-1.7976931348623157e+308).nullable().optional(), max_items: z.number().min(-1.7976931348623157e+308).nullable().optional() }), z.object({ label: z.string(), required: z.boolean(), description: z.string().nullable().optional(), unified_key: z.enum(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]).nullable().optional(), type: z.literal("file"), file_restrictions: z.object({ accepted_mime_types: z.array(z.string()), max_file_size: z.number().min(-1.7976931348623157e+308).nullable().optional() }) })])));

export type Schema2 = ({ label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: "text", min_length?: (number | null), max_length?: (number | null), reg_exp?: (string | null) } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: "number", min?: (number | null), max?: (number | null) } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: "date" } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: "single_select", options: ({ type: "inline", entries: Array<{ id: string, label: string, unified_value?: string, remote_id: (string | number) }> } | { type: "referenced", link: string }) } | { label: string, required: boolean, description?: (string | null), unified_key?: (string | null), type: "multi_select", min_items?: (number | null), max_items?: (number | null), options: ({ type: "inline", entries: Array<{ id: string, label: string, unified_value?: string, remote_id: (string | number) }> } | { type: "referenced", link: string }) } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: "checkbox" } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: "object", properties: Schema1 } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: "array", item_type: Schema2, min_items?: (number | null), max_items?: (number | null) } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: "file", file_restrictions: { accepted_mime_types: Array<string>, max_file_size?: (number | null) } })
export const Schema2: z.ZodType<Schema2> = z.lazy(() => z.discriminatedUnion("type", [z.object({ label: z.string(), required: z.boolean(), description: z.string().nullable().optional(), unified_key: z.enum(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]).nullable().optional(), type: z.literal("text"), min_length: z.number().min(-1.7976931348623157e+308).nullable().optional(), max_length: z.number().min(-1.7976931348623157e+308).nullable().optional(), reg_exp: z.string().nullable().optional() }), z.object({ label: z.string(), required: z.boolean(), description: z.string().nullable().optional(), unified_key: z.enum(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]).nullable().optional(), type: z.literal("number"), min: z.number().min(-1.7976931348623157e+308).nullable().optional(), max: z.number().min(-1.7976931348623157e+308).nullable().optional() }), z.object({ label: z.string(), required: z.boolean(), description: z.string().nullable().optional(), unified_key: z.enum(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]).nullable().optional(), type: z.literal("date") }), z.object({ label: z.string(), required: z.boolean(), description: z.string().nullable().optional(), unified_key: z.enum(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]).nullable().optional(), type: z.literal("single_select"), options: z.discriminatedUnion("type", [z.object({ type: z.literal("inline"), entries: z.array(z.object({ id: z.string(), label: z.string(), unified_value: z.string().optional(), remote_id: z.union([z.string(), z.number().min(-1.7976931348623157e+308)]) })) }), z.object({ type: z.literal("referenced"), link: z.string() })]) }), z.object({ label: z.string(), required: z.boolean(), description: z.string().nullable().optional(), unified_key: z.string().nullable().optional(), type: z.literal("multi_select"), min_items: z.number().min(-1.7976931348623157e+308).nullable().optional(), max_items: z.number().min(-1.7976931348623157e+308).nullable().optional(), options: z.discriminatedUnion("type", [z.object({ type: z.literal("inline"), entries: z.array(z.object({ id: z.string(), label: z.string(), unified_value: z.string().optional(), remote_id: z.union([z.string(), z.number().min(-1.7976931348623157e+308)]) })) }), z.object({ type: z.literal("referenced"), link: z.string() })]) }), z.object({ label: z.string(), required: z.boolean(), description: z.string().nullable().optional(), unified_key: z.enum(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]).nullable().optional(), type: z.literal("checkbox") }), z.object({ label: z.string(), required: z.boolean(), description: z.string().nullable().optional(), unified_key: z.enum(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]).nullable().optional(), type: z.literal("object"), properties: Schema1 }), z.object({ label: z.string(), required: z.boolean(), description: z.string().nullable().optional(), unified_key: z.enum(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]).nullable().optional(), type: z.literal("array"), item_type: Schema2, min_items: z.number().min(-1.7976931348623157e+308).nullable().optional(), max_items: z.number().min(-1.7976931348623157e+308).nullable().optional() }), z.object({ label: z.string(), required: z.boolean(), description: z.string().nullable().optional(), unified_key: z.enum(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]).nullable().optional(), type: z.literal("file"), file_restrictions: z.object({ accepted_mime_types: z.array(z.string()), max_file_size: z.number().min(-1.7976931348623157e+308).nullable().optional() }) })]));

export type GetHrisEmployeesFormPositiveResponse = z.infer<typeof GetHrisEmployeesFormPositiveResponse>;
export const GetHrisEmployeesFormPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ properties: z.record(z.string(), z.discriminatedUnion("type", [z.object({ label: z.string(), required: z.boolean(), description: z.string().nullable().optional(), unified_key: z.enum(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]).nullable().optional(), type: z.literal("text"), min_length: z.number().min(-1.7976931348623157e+308).nullable().optional(), max_length: z.number().min(-1.7976931348623157e+308).nullable().optional(), reg_exp: z.string().nullable().optional() }), z.object({ label: z.string(), required: z.boolean(), description: z.string().nullable().optional(), unified_key: z.enum(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]).nullable().optional(), type: z.literal("number"), min: z.number().min(-1.7976931348623157e+308).nullable().optional(), max: z.number().min(-1.7976931348623157e+308).nullable().optional() }), z.object({ label: z.string(), required: z.boolean(), description: z.string().nullable().optional(), unified_key: z.enum(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]).nullable().optional(), type: z.literal("date") }), z.object({ label: z.string(), required: z.boolean(), description: z.string().nullable().optional(), unified_key: z.enum(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]).nullable().optional(), type: z.literal("single_select"), options: z.discriminatedUnion("type", [z.object({ type: z.literal("inline"), entries: z.array(z.object({ id: z.string(), label: z.string(), unified_value: z.string().optional(), remote_id: z.union([z.string(), z.number().min(-1.7976931348623157e+308)]) })) }), z.object({ type: z.literal("referenced"), link: z.string() })]) }), z.object({ label: z.string(), required: z.boolean(), description: z.string().nullable().optional(), unified_key: z.string().nullable().optional(), type: z.literal("multi_select"), min_items: z.number().min(-1.7976931348623157e+308).nullable().optional(), max_items: z.number().min(-1.7976931348623157e+308).nullable().optional(), options: z.discriminatedUnion("type", [z.object({ type: z.literal("inline"), entries: z.array(z.object({ id: z.string(), label: z.string(), unified_value: z.string().optional(), remote_id: z.union([z.string(), z.number().min(-1.7976931348623157e+308)]) })) }), z.object({ type: z.literal("referenced"), link: z.string() })]) }), z.object({ label: z.string(), required: z.boolean(), description: z.string().nullable().optional(), unified_key: z.enum(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]).nullable().optional(), type: z.literal("checkbox") }), z.object({ label: z.string(), required: z.boolean(), description: z.string().nullable().optional(), unified_key: z.enum(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]).nullable().optional(), type: z.literal("object"), properties: Schema1 }), z.object({ label: z.string(), required: z.boolean(), description: z.string().nullable().optional(), unified_key: z.enum(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]).nullable().optional(), type: z.literal("array"), item_type: Schema2, min_items: z.number().min(-1.7976931348623157e+308).nullable().optional(), max_items: z.number().min(-1.7976931348623157e+308).nullable().optional() }), z.object({ label: z.string(), required: z.boolean(), description: z.string().nullable().optional(), unified_key: z.enum(["first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary"]).nullable().optional(), type: z.literal("file"), file_restrictions: z.object({ accepted_mime_types: z.array(z.string()), max_file_size: z.number().min(-1.7976931348623157e+308).nullable().optional() }) })])) }), warnings: z.array(z.object({ message: z.string() })) });

export type PostHrisEmployeesFormPositiveResponse = z.infer<typeof PostHrisEmployeesFormPositiveResponse>;
export const PostHrisEmployeesFormPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ id: z.string().nullable(), remote_id: z.string().nullable(), prehire: z.object({ remote_id: z.string().nullable() }) }), warnings: z.array(z.object({ message: z.string() })) });

export type Schema6 = Array<Schema4>
export const Schema6: z.ZodType<Schema6> = z.lazy(() => z.array(Schema4));

export type Schema4 = (string | number | boolean | Schema5 | Schema6)
export const Schema4: z.ZodType<Schema4> = z.lazy(() => z.union([z.string(), z.number().min(-1.7976931348623157e+308), z.boolean(), Schema5, Schema6]));

export interface Schema5 { [key: string]: Schema4 }
export const Schema5: z.ZodType<Schema5> = z.lazy(() => z.record(z.string(), Schema4));

export type Schema3 = z.infer<typeof Schema3>;
export const Schema3 = z.record(z.string(), Schema4);

export type PostHrisEmployeesFormRequestBody = z.infer<typeof PostHrisEmployeesFormRequestBody>;
export const PostHrisEmployeesFormRequestBody = z.object({ properties: Schema3 });

export type PatchHrisEmployeesEmployeeIdParameterEmployeeId = z.infer<typeof PatchHrisEmployeesEmployeeIdParameterEmployeeId>;
export const PatchHrisEmployeesEmployeeIdParameterEmployeeId = z.string();

export type PatchHrisEmployeesEmployeeIdPositiveResponse = z.infer<typeof PatchHrisEmployeesEmployeeIdPositiveResponse>;
export const PatchHrisEmployeesEmployeeIdPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ id: z.string(), remote_id: z.string(), employee_number: z.string().nullable(), first_name: z.string().nullable(), last_name: z.string().nullable(), nationality: z.string().nullable(), display_full_name: z.string().nullable(), job_title: z.string().nullable(), work_email: z.string().regex(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$")).nullable().optional(), personal_email: z.string().regex(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$")).nullable().optional(), mobile_phone_number: z.string().nullable(), ssn: z.string().nullable(), tax_id: z.string().nullable(), gender: z.union([z.enum(["MALE", "FEMALE", "NON_BINARY", "NOT_SPECIFIED"]), z.string(), z.null()]).optional(), ethnicity: z.union([z.enum(["WHITE", "ASIAN", "HISPANIC_LATINO", "HAWAIIAN", "NATIVE_AMERICAN", "BLACK_AFRICAN_AMERICAN", "MULTIPLE_ETHNICITIES", "DECLINE_TO_SPECIFY"]), z.string(), z.null()]).optional(), marital_status: z.union([z.enum(["SINGLE", "MARRIED", "DOMESTIC_PARTNERSHIP", "WIDOWED", "DIVORCED", "SEPARATED", "NOT_MARRIED"]), z.string(), z.null()]).optional(), employment_status: z.union([z.enum(["ACTIVE", "PENDING", "INACTIVE", "LEAVE"]), z.string(), z.null()]).optional(), employment_type: z.union([z.enum(["FULL_TIME", "PART_TIME", "CONTRACT", "INTERNSHIP", "FREELANCE", "WORKING_STUDENT", "APPRENTICESHIP", "TRAINING"]), z.string(), z.null()]).optional(), weekly_hours: z.number().min(-1.7976931348623157e+308).nullable(), avatar: z.string().nullable(), work_location_id: z.string().nullable(), legal_entity_id: z.string().nullable(), manager_id: z.string().nullable(), home_address: z.object({ city: z.string().nullable(), country: z.string().nullable(), raw: z.string().nullable(), state: z.string().nullable(), street_1: z.string().nullable(), street_2: z.string().nullable(), zip_code: z.string().nullable() }).partial().nullable().optional(), bank_accounts: z.array(z.object({ iban: z.string().nullable(), bic: z.string().nullable(), account_number: z.string().nullable(), holder_name: z.string().nullable(), bank_name: z.string().nullable(), domestic_bank_routing: z.object({ number: z.string(), type: z.enum(["GB_SORT_CODE", "DE_BANKLEITZAHL", "US_ABA_ROUTING_TRANSIT_NUMBER", "CA_ROUTING_NUMBER", "AU_BSB_CODE", "FR_RIB"]).nullable() }).nullable() }).partial()).nullable().optional(), date_of_birth: z.iso.datetime().nullable(), start_date: z.iso.datetime().nullable(), termination_date: z.iso.datetime().nullable(), remote_created_at: z.iso.datetime().nullable(), changed_at: z.iso.datetime(), remote_deleted_at: z.iso.datetime().nullable(), remote_data: z.record(z.string(), z.unknown()).nullable() }), warnings: z.array(z.object({ message: z.string() })) });

export type PatchHrisEmployeesEmployeeIdRequestBody = z.infer<typeof PatchHrisEmployeesEmployeeIdRequestBody>;
export const PatchHrisEmployeesEmployeeIdRequestBody = z.object({ first_name: z.string().optional(), last_name: z.string().optional(), work_email: z.email(), gender: z.enum(["MALE", "FEMALE", "NON_BINARY", "NOT_SPECIFIED"]).optional(), job_title: z.string().optional(), home_address: z.object({ street_1: z.string(), street_2: z.string(), city: z.string(), state: z.string(), zip_code: z.string(), country: z.string().regex(new RegExp("^[A-Z]{2}$")) }).partial().optional(), date_of_birth: z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")).optional(), mobile_phone_number: z.string().optional(), home_phone_number: z.string().optional(), nationality: z.string().regex(new RegExp("^[A-Z]{2}$")).optional(), start_date: z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")).optional(), legal_entity_id: z.string().optional(), location_id: z.string().optional(), remote_fields: z.object({ humaans: z.object({ employee: z.record(z.string(), z.unknown()) }).partial(), hibob: z.object({ employee: z.record(z.string(), z.unknown()) }).partial(), sympa: z.object({ GenericNewHire: z.record(z.string(), z.unknown()) }).partial(), silae: z.object({ siret: z.string(), employee: z.record(z.string(), z.unknown()), employment: z.record(z.string(), z.unknown()) }).partial(), peoplehr: z.object({ job_role_effective_date: z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")), department: z.string() }).partial(), zohopeople: z.object({ employee_id: z.string().min(1) }).partial(), workday: z.object({ job_requisition_id: z.string(), position_id: z.string(), ssn: z.string(), bank_account: z.object({ iban: z.string(), bic: z.string(), bank_name: z.string() }) }).partial(), deel: z.object({ candidate_id: z.string(), candidate_link: z.string() }), bamboohr: z.object({ employee: z.record(z.string(), z.unknown()) }).partial(), oracle: z.object({ group_id: z.string(), department_id: z.string() }), adpworkforcenow: z.object({ onboarding_template_code: z.string(), applicant_payroll_profile_group_code: z.string(), manager_position_id: z.string().optional(), home_organization_unit_code: z.string().optional(), personal_email: z.string().optional() }), azuread: z.object({ password: z.string() }), paycor: z.object({ paygroupRemoteId: z.string(), departmentRemoteId: z.string() }), planday: z.object({ department_remote_id: z.string() }), dayforce: z.object({ social_security_number: z.string(), pay_type: z.string(), pay_class: z.string(), pay_group: z.string(), base_rate: z.number().min(-1.7976931348623157e+308), role: z.string(), location: z.string(), department: z.string(), job: z.string(), country: z.string() }) }).partial().optional(), ssn: z.string().optional(), marital_status: z.enum(["SINGLE", "MARRIED", "DOMESTIC_PARTNERSHIP", "WIDOWED", "DIVORCED", "SEPARATED", "NOT_MARRIED"]).optional(), termination_date: z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")).optional(), tax_id: z.string().optional() });

export type PostHrisEmployeesEmployeeIdDocumentsParameterEmployeeId = z.infer<typeof PostHrisEmployeesEmployeeIdDocumentsParameterEmployeeId>;
export const PostHrisEmployeesEmployeeIdDocumentsParameterEmployeeId = z.string();

export type PostHrisEmployeesEmployeeIdDocumentsPositiveResponse = z.infer<typeof PostHrisEmployeesEmployeeIdDocumentsPositiveResponse>;
export const PostHrisEmployeesEmployeeIdDocumentsPositiveResponse = z.object({ status: z.literal("success"), data: z.record(z.string(), z.unknown()), warnings: z.array(z.object({ message: z.string() })) });

export type PostHrisEmployeesEmployeeIdDocumentsRequestBody = z.infer<typeof PostHrisEmployeesEmployeeIdDocumentsRequestBody>;
export const PostHrisEmployeesEmployeeIdDocumentsRequestBody = z.object({ category_id: z.string(), document: z.object({ name: z.string(), content_type: z.string().regex(new RegExp("^[\\w.-]+\\/[\\w.-]+$")).optional(), data_url: z.url().optional(), data: z.string().optional() }) });

export type GetHrisEmployeeDocumentCategoriesParameterCursor = z.infer<typeof GetHrisEmployeeDocumentCategoriesParameterCursor>;
export const GetHrisEmployeeDocumentCategoriesParameterCursor = z.string();

export type GetHrisEmployeeDocumentCategoriesParameterPageSize = z.infer<typeof GetHrisEmployeeDocumentCategoriesParameterPageSize>;
export const GetHrisEmployeeDocumentCategoriesParameterPageSize = z.number().int().min(1).max(250).default(100);

export type GetHrisEmployeeDocumentCategoriesParameterUpdatedAfter = z.infer<typeof GetHrisEmployeeDocumentCategoriesParameterUpdatedAfter>;
export const GetHrisEmployeeDocumentCategoriesParameterUpdatedAfter = z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"));

export type GetHrisEmployeeDocumentCategoriesParameterIncludeDeleted = z.infer<typeof GetHrisEmployeeDocumentCategoriesParameterIncludeDeleted>;
export const GetHrisEmployeeDocumentCategoriesParameterIncludeDeleted = z.enum(["true", "false"]).default("false");

export type GetHrisEmployeeDocumentCategoriesParameterIgnoreUnsupportedFilters = z.infer<typeof GetHrisEmployeeDocumentCategoriesParameterIgnoreUnsupportedFilters>;
export const GetHrisEmployeeDocumentCategoriesParameterIgnoreUnsupportedFilters = z.enum(["true", "false"]).default("false");

export type GetHrisEmployeeDocumentCategoriesParameterIds = z.infer<typeof GetHrisEmployeeDocumentCategoriesParameterIds>;
export const GetHrisEmployeeDocumentCategoriesParameterIds = z.string();

export type GetHrisEmployeeDocumentCategoriesParameterRemoteIds = z.infer<typeof GetHrisEmployeeDocumentCategoriesParameterRemoteIds>;
export const GetHrisEmployeeDocumentCategoriesParameterRemoteIds = z.string();

export type GetHrisEmployeeDocumentCategoriesPositiveResponse = z.infer<typeof GetHrisEmployeeDocumentCategoriesPositiveResponse>;
export const GetHrisEmployeeDocumentCategoriesPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ next: z.string().nullable(), results: z.array(z.object({ id: z.string(), remote_id: z.string().nullable(), name: z.string().nullable(), remote_data: z.record(z.string(), z.unknown()).nullable(), changed_at: z.iso.datetime(), remote_deleted_at: z.iso.datetime().nullable() })) }) });

export type GetHrisTeamsParameterCursor = z.infer<typeof GetHrisTeamsParameterCursor>;
export const GetHrisTeamsParameterCursor = z.string();

export type GetHrisTeamsParameterPageSize = z.infer<typeof GetHrisTeamsParameterPageSize>;
export const GetHrisTeamsParameterPageSize = z.number().int().min(1).max(250).default(100);

export type GetHrisTeamsParameterUpdatedAfter = z.infer<typeof GetHrisTeamsParameterUpdatedAfter>;
export const GetHrisTeamsParameterUpdatedAfter = z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"));

export type GetHrisTeamsParameterIncludeDeleted = z.infer<typeof GetHrisTeamsParameterIncludeDeleted>;
export const GetHrisTeamsParameterIncludeDeleted = z.enum(["true", "false"]).default("false");

export type GetHrisTeamsParameterIgnoreUnsupportedFilters = z.infer<typeof GetHrisTeamsParameterIgnoreUnsupportedFilters>;
export const GetHrisTeamsParameterIgnoreUnsupportedFilters = z.enum(["true", "false"]).default("false");

export type GetHrisTeamsParameterIds = z.infer<typeof GetHrisTeamsParameterIds>;
export const GetHrisTeamsParameterIds = z.string();

export type GetHrisTeamsParameterRemoteIds = z.infer<typeof GetHrisTeamsParameterRemoteIds>;
export const GetHrisTeamsParameterRemoteIds = z.string();

export type GetHrisTeamsPositiveResponse = z.infer<typeof GetHrisTeamsPositiveResponse>;
export const GetHrisTeamsPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ next: z.string().nullable(), results: z.array(z.object({ id: z.string(), remote_id: z.string(), name: z.string().nullable(), changed_at: z.iso.datetime(), remote_deleted_at: z.iso.datetime().nullable(), type: z.enum(["DEPARTMENT", "TEAM", "COST_CENTER"]).nullable(), parent_id: z.string().nullable(), remote_data: z.record(z.string(), z.unknown()).nullable() })) }) });

export type GetHrisGroupsParameterCursor = z.infer<typeof GetHrisGroupsParameterCursor>;
export const GetHrisGroupsParameterCursor = z.string();

export type GetHrisGroupsParameterPageSize = z.infer<typeof GetHrisGroupsParameterPageSize>;
export const GetHrisGroupsParameterPageSize = z.number().int().min(1).max(250).default(100);

export type GetHrisGroupsParameterUpdatedAfter = z.infer<typeof GetHrisGroupsParameterUpdatedAfter>;
export const GetHrisGroupsParameterUpdatedAfter = z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"));

export type GetHrisGroupsParameterIncludeDeleted = z.infer<typeof GetHrisGroupsParameterIncludeDeleted>;
export const GetHrisGroupsParameterIncludeDeleted = z.enum(["true", "false"]).default("false");

export type GetHrisGroupsParameterIgnoreUnsupportedFilters = z.infer<typeof GetHrisGroupsParameterIgnoreUnsupportedFilters>;
export const GetHrisGroupsParameterIgnoreUnsupportedFilters = z.enum(["true", "false"]).default("false");

export type GetHrisGroupsParameterIds = z.infer<typeof GetHrisGroupsParameterIds>;
export const GetHrisGroupsParameterIds = z.string();

export type GetHrisGroupsParameterRemoteIds = z.infer<typeof GetHrisGroupsParameterRemoteIds>;
export const GetHrisGroupsParameterRemoteIds = z.string();

export type GetHrisGroupsParameterTypes = z.infer<typeof GetHrisGroupsParameterTypes>;
export const GetHrisGroupsParameterTypes = z.string();

export type GetHrisGroupsParameterNameContains = z.infer<typeof GetHrisGroupsParameterNameContains>;
export const GetHrisGroupsParameterNameContains = z.string();

export type GetHrisGroupsPositiveResponse = z.infer<typeof GetHrisGroupsPositiveResponse>;
export const GetHrisGroupsPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ next: z.string().nullable(), results: z.array(z.object({ id: z.string(), remote_id: z.string(), name: z.string().nullable(), changed_at: z.iso.datetime(), remote_deleted_at: z.iso.datetime().nullable(), type: z.enum(["DEPARTMENT", "TEAM", "COST_CENTER"]).nullable(), parent_id: z.string().nullable(), remote_data: z.record(z.string(), z.unknown()).nullable() })) }) });

export type GetHrisEmploymentsParameterCursor = z.infer<typeof GetHrisEmploymentsParameterCursor>;
export const GetHrisEmploymentsParameterCursor = z.string();

export type GetHrisEmploymentsParameterPageSize = z.infer<typeof GetHrisEmploymentsParameterPageSize>;
export const GetHrisEmploymentsParameterPageSize = z.number().int().min(1).max(250).default(100);

export type GetHrisEmploymentsParameterUpdatedAfter = z.infer<typeof GetHrisEmploymentsParameterUpdatedAfter>;
export const GetHrisEmploymentsParameterUpdatedAfter = z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"));

export type GetHrisEmploymentsParameterIncludeDeleted = z.infer<typeof GetHrisEmploymentsParameterIncludeDeleted>;
export const GetHrisEmploymentsParameterIncludeDeleted = z.enum(["true", "false"]).default("false");

export type GetHrisEmploymentsParameterIgnoreUnsupportedFilters = z.infer<typeof GetHrisEmploymentsParameterIgnoreUnsupportedFilters>;
export const GetHrisEmploymentsParameterIgnoreUnsupportedFilters = z.enum(["true", "false"]).default("false");

export type GetHrisEmploymentsParameterIds = z.infer<typeof GetHrisEmploymentsParameterIds>;
export const GetHrisEmploymentsParameterIds = z.string();

export type GetHrisEmploymentsParameterRemoteIds = z.infer<typeof GetHrisEmploymentsParameterRemoteIds>;
export const GetHrisEmploymentsParameterRemoteIds = z.string();

export type GetHrisEmploymentsPositiveResponse = z.infer<typeof GetHrisEmploymentsPositiveResponse>;
export const GetHrisEmploymentsPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ next: z.string().nullable(), results: z.array(z.object({ id: z.string(), remote_id: z.string().nullable(), employee_id: z.string(), job_title: z.string().nullable(), pay_rate: z.number().min(-1.7976931348623157e+308).nullable(), pay_period: z.union([z.enum(["HOUR", "DAY", "WEEK", "TWO_WEEKS", "HALF_MONTH", "MONTH", "TWO_MONTHS", "QUARTER", "HALF_YEAR", "YEAR"]), z.string(), z.null()]).optional(), pay_frequency: z.union([z.enum(["DAILY", "WEEKLY", "BIWEEKLY", "MONTHLY", "SEMIMONTHLY", "QUARTERLY", "SEMIANNUALLY", "ANNUALLY", "PRO_RATA"]), z.string(), z.null()]).optional(), employment_type: z.union([z.enum(["FULL_TIME", "PART_TIME", "CONTRACT", "INTERNSHIP", "FREELANCE", "WORKING_STUDENT", "APPRENTICESHIP", "TRAINING"]), z.string(), z.null()]).optional(), pay_currency: z.string().nullable(), effective_date: z.iso.datetime().nullable(), changed_at: z.iso.datetime(), remote_deleted_at: z.iso.datetime().nullable(), remote_data: z.record(z.string(), z.unknown()).nullable(), custom_fields: z.record(z.string(), z.unknown()).nullable(), integration_fields: z.array(z.object({ id: z.string(), key: z.string(), type: z.enum(["DEFAULT", "CUSTOM"]), value: z.null().optional(), label: z.string().nullable() })) })) }) });

export type GetHrisLocationsParameterCursor = z.infer<typeof GetHrisLocationsParameterCursor>;
export const GetHrisLocationsParameterCursor = z.string();

export type GetHrisLocationsParameterPageSize = z.infer<typeof GetHrisLocationsParameterPageSize>;
export const GetHrisLocationsParameterPageSize = z.number().int().min(1).max(250).default(100);

export type GetHrisLocationsParameterUpdatedAfter = z.infer<typeof GetHrisLocationsParameterUpdatedAfter>;
export const GetHrisLocationsParameterUpdatedAfter = z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"));

export type GetHrisLocationsParameterIncludeDeleted = z.infer<typeof GetHrisLocationsParameterIncludeDeleted>;
export const GetHrisLocationsParameterIncludeDeleted = z.enum(["true", "false"]).default("false");

export type GetHrisLocationsParameterIgnoreUnsupportedFilters = z.infer<typeof GetHrisLocationsParameterIgnoreUnsupportedFilters>;
export const GetHrisLocationsParameterIgnoreUnsupportedFilters = z.enum(["true", "false"]).default("false");

export type GetHrisLocationsParameterIds = z.infer<typeof GetHrisLocationsParameterIds>;
export const GetHrisLocationsParameterIds = z.string();

export type GetHrisLocationsParameterRemoteIds = z.infer<typeof GetHrisLocationsParameterRemoteIds>;
export const GetHrisLocationsParameterRemoteIds = z.string();

export type GetHrisLocationsParameterNameContains = z.infer<typeof GetHrisLocationsParameterNameContains>;
export const GetHrisLocationsParameterNameContains = z.string();

export type GetHrisLocationsPositiveResponse = z.infer<typeof GetHrisLocationsPositiveResponse>;
export const GetHrisLocationsPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ next: z.string().nullable(), results: z.array(z.object({ id: z.string(), remote_id: z.string().nullable(), name: z.string().nullable(), address: z.object({ city: z.string().nullable(), country: z.string().nullable(), raw: z.string().nullable(), state: z.string().nullable(), street_1: z.string().nullable(), street_2: z.string().nullable(), zip_code: z.string().nullable() }).partial().nullable().optional(), type: z.string().nullable(), changed_at: z.iso.datetime(), remote_deleted_at: z.iso.datetime().nullable(), remote_data: z.record(z.string(), z.unknown()).nullable() })) }) });

export type GetHrisAbsenceTypesParameterCursor = z.infer<typeof GetHrisAbsenceTypesParameterCursor>;
export const GetHrisAbsenceTypesParameterCursor = z.string();

export type GetHrisAbsenceTypesParameterPageSize = z.infer<typeof GetHrisAbsenceTypesParameterPageSize>;
export const GetHrisAbsenceTypesParameterPageSize = z.number().int().min(1).max(250).default(100);

export type GetHrisAbsenceTypesParameterUpdatedAfter = z.infer<typeof GetHrisAbsenceTypesParameterUpdatedAfter>;
export const GetHrisAbsenceTypesParameterUpdatedAfter = z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"));

export type GetHrisAbsenceTypesParameterIncludeDeleted = z.infer<typeof GetHrisAbsenceTypesParameterIncludeDeleted>;
export const GetHrisAbsenceTypesParameterIncludeDeleted = z.enum(["true", "false"]).default("false");

export type GetHrisAbsenceTypesParameterIgnoreUnsupportedFilters = z.infer<typeof GetHrisAbsenceTypesParameterIgnoreUnsupportedFilters>;
export const GetHrisAbsenceTypesParameterIgnoreUnsupportedFilters = z.enum(["true", "false"]).default("false");

export type GetHrisAbsenceTypesParameterIds = z.infer<typeof GetHrisAbsenceTypesParameterIds>;
export const GetHrisAbsenceTypesParameterIds = z.string();

export type GetHrisAbsenceTypesParameterRemoteIds = z.infer<typeof GetHrisAbsenceTypesParameterRemoteIds>;
export const GetHrisAbsenceTypesParameterRemoteIds = z.string();

export type GetHrisAbsenceTypesPositiveResponse = z.infer<typeof GetHrisAbsenceTypesPositiveResponse>;
export const GetHrisAbsenceTypesPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ next: z.string().nullable(), results: z.array(z.object({ id: z.string(), remote_id: z.string(), name: z.string().nullable(), unit: z.enum(["HOURS", "DAYS"]).nullable(), half_days_supported: z.boolean().nullable(), exact_times_supported: z.boolean().nullable(), remote_data: z.record(z.string(), z.unknown()).nullable(), changed_at: z.iso.datetime(), remote_deleted_at: z.iso.datetime().nullable() })) }) });

export type GetHrisTimeOffBalancesParameterCursor = z.infer<typeof GetHrisTimeOffBalancesParameterCursor>;
export const GetHrisTimeOffBalancesParameterCursor = z.string();

export type GetHrisTimeOffBalancesParameterPageSize = z.infer<typeof GetHrisTimeOffBalancesParameterPageSize>;
export const GetHrisTimeOffBalancesParameterPageSize = z.number().int().min(1).max(250).default(100);

export type GetHrisTimeOffBalancesParameterUpdatedAfter = z.infer<typeof GetHrisTimeOffBalancesParameterUpdatedAfter>;
export const GetHrisTimeOffBalancesParameterUpdatedAfter = z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"));

export type GetHrisTimeOffBalancesParameterIncludeDeleted = z.infer<typeof GetHrisTimeOffBalancesParameterIncludeDeleted>;
export const GetHrisTimeOffBalancesParameterIncludeDeleted = z.enum(["true", "false"]).default("false");

export type GetHrisTimeOffBalancesParameterIgnoreUnsupportedFilters = z.infer<typeof GetHrisTimeOffBalancesParameterIgnoreUnsupportedFilters>;
export const GetHrisTimeOffBalancesParameterIgnoreUnsupportedFilters = z.enum(["true", "false"]).default("false");

export type GetHrisTimeOffBalancesParameterIds = z.infer<typeof GetHrisTimeOffBalancesParameterIds>;
export const GetHrisTimeOffBalancesParameterIds = z.string();

export type GetHrisTimeOffBalancesParameterRemoteIds = z.infer<typeof GetHrisTimeOffBalancesParameterRemoteIds>;
export const GetHrisTimeOffBalancesParameterRemoteIds = z.string();

export type GetHrisTimeOffBalancesParameterEmployeeId = z.infer<typeof GetHrisTimeOffBalancesParameterEmployeeId>;
export const GetHrisTimeOffBalancesParameterEmployeeId = z.string();

export type GetHrisTimeOffBalancesPositiveResponse = z.infer<typeof GetHrisTimeOffBalancesPositiveResponse>;
export const GetHrisTimeOffBalancesPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ next: z.string().nullable(), results: z.array(z.object({ id: z.string(), remote_id: z.string().nullable(), employee_id: z.string(), type_id: z.string(), balance: z.number().min(-1.7976931348623157e+308).nullable(), balance_unit: z.enum(["HOURS", "DAYS"]).nullable(), changed_at: z.iso.datetime(), remote_deleted_at: z.iso.datetime().nullable(), used: z.number().min(-1.7976931348623157e+308).nullable(), used_unit: z.enum(["HOURS", "DAYS"]).nullable(), remote_data: z.record(z.string(), z.unknown()).nullable(), type: z.object({ id: z.string(), remote_id: z.string(), name: z.string().nullable(), unit: z.enum(["HOURS", "DAYS"]).nullable(), half_days_supported: z.boolean().nullable(), exact_times_supported: z.boolean().nullable(), remote_data: z.record(z.string(), z.unknown()).nullable(), changed_at: z.iso.datetime(), remote_deleted_at: z.iso.datetime().nullable() }) })) }) });

export type GetHrisAbsencesParameterCursor = z.infer<typeof GetHrisAbsencesParameterCursor>;
export const GetHrisAbsencesParameterCursor = z.string();

export type GetHrisAbsencesParameterPageSize = z.infer<typeof GetHrisAbsencesParameterPageSize>;
export const GetHrisAbsencesParameterPageSize = z.number().int().min(1).max(250).default(100);

export type GetHrisAbsencesParameterUpdatedAfter = z.infer<typeof GetHrisAbsencesParameterUpdatedAfter>;
export const GetHrisAbsencesParameterUpdatedAfter = z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"));

export type GetHrisAbsencesParameterIncludeDeleted = z.infer<typeof GetHrisAbsencesParameterIncludeDeleted>;
export const GetHrisAbsencesParameterIncludeDeleted = z.enum(["true", "false"]).default("false");

export type GetHrisAbsencesParameterIgnoreUnsupportedFilters = z.infer<typeof GetHrisAbsencesParameterIgnoreUnsupportedFilters>;
export const GetHrisAbsencesParameterIgnoreUnsupportedFilters = z.enum(["true", "false"]).default("false");

export type GetHrisAbsencesParameterIds = z.infer<typeof GetHrisAbsencesParameterIds>;
export const GetHrisAbsencesParameterIds = z.string();

export type GetHrisAbsencesParameterRemoteIds = z.infer<typeof GetHrisAbsencesParameterRemoteIds>;
export const GetHrisAbsencesParameterRemoteIds = z.string();

export type GetHrisAbsencesParameterDateFrom = z.infer<typeof GetHrisAbsencesParameterDateFrom>;
export const GetHrisAbsencesParameterDateFrom = z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"));

export type GetHrisAbsencesParameterDateUntil = z.infer<typeof GetHrisAbsencesParameterDateUntil>;
export const GetHrisAbsencesParameterDateUntil = z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"));

export type GetHrisAbsencesParameterTypeIds = z.infer<typeof GetHrisAbsencesParameterTypeIds>;
export const GetHrisAbsencesParameterTypeIds = z.string();

export type GetHrisAbsencesParameterEmployeeId = z.infer<typeof GetHrisAbsencesParameterEmployeeId>;
export const GetHrisAbsencesParameterEmployeeId = z.string();

export type GetHrisAbsencesParameterTimeFrom = z.infer<typeof GetHrisAbsencesParameterTimeFrom>;
export const GetHrisAbsencesParameterTimeFrom = z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"));

export type GetHrisAbsencesParameterTimeUntil = z.infer<typeof GetHrisAbsencesParameterTimeUntil>;
export const GetHrisAbsencesParameterTimeUntil = z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"));

export type GetHrisAbsencesPositiveResponse = z.infer<typeof GetHrisAbsencesPositiveResponse>;
export const GetHrisAbsencesPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ next: z.string().nullable(), results: z.array(z.object({ id: z.string(), remote_id: z.string().nullable(), employee_id: z.string(), approver_id: z.string().nullable(), start_date: z.null(), end_date: z.null(), start_half_day: z.boolean().nullable(), end_half_day: z.boolean().nullable(), start_time: z.null(), end_time: z.null(), amount: z.number().min(-1.7976931348623157e+308).nullable(), unit: z.enum(["HOURS", "DAYS"]).nullable(), status: z.union([z.enum(["REQUESTED", "APPROVED", "DECLINED", "CANCELLED", "DELETED"]), z.string(), z.null()]).optional(), employee_note: z.string().nullable(), type_id: z.string().nullable(), remote_created_at: z.iso.datetime().nullable(), remote_updated_at: z.iso.datetime().nullable(), changed_at: z.iso.datetime(), remote_deleted_at: z.iso.datetime().nullable(), remote_data: z.record(z.string(), z.unknown()).nullable(), type: z.object({ id: z.string(), remote_id: z.string(), name: z.string().nullable(), unit: z.enum(["HOURS", "DAYS"]).nullable(), half_days_supported: z.boolean().nullable(), exact_times_supported: z.boolean().nullable(), remote_data: z.record(z.string(), z.unknown()).nullable(), changed_at: z.iso.datetime(), remote_deleted_at: z.iso.datetime().nullable() }).nullable() })) }) });

export type PostHrisAbsencesPositiveResponse = z.infer<typeof PostHrisAbsencesPositiveResponse>;
export const PostHrisAbsencesPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ id: z.string(), remote_id: z.string().nullable(), employee_id: z.string(), approver_id: z.string().nullable(), start_date: z.null(), end_date: z.null(), start_half_day: z.boolean().nullable(), end_half_day: z.boolean().nullable(), start_time: z.null(), end_time: z.null(), amount: z.number().min(-1.7976931348623157e+308).nullable(), unit: z.enum(["HOURS", "DAYS"]).nullable(), status: z.union([z.enum(["REQUESTED", "APPROVED", "DECLINED", "CANCELLED", "DELETED"]), z.string(), z.null()]).optional(), employee_note: z.string().nullable(), type_id: z.string().nullable(), remote_created_at: z.iso.datetime().nullable(), remote_updated_at: z.iso.datetime().nullable(), changed_at: z.iso.datetime(), remote_deleted_at: z.iso.datetime().nullable(), remote_data: z.record(z.string(), z.unknown()).nullable() }), warnings: z.array(z.object({ message: z.string() })) });

export type PostHrisAbsencesRequestBody = z.infer<typeof PostHrisAbsencesRequestBody>;
export const PostHrisAbsencesRequestBody = z.object({ employee_id: z.string(), absence_type_id: z.string(), status: z.enum(["REQUESTED", "APPROVED"]).default("REQUESTED"), start_date: z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")), end_date: z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")), start_half_day: z.boolean().default(false), end_half_day: z.boolean().default(false), amount: z.number().min(0).optional(), unit: z.enum(["HOURS", "DAYS"]).optional(), employee_note: z.string().nullable(), start_time: z.string().regex(new RegExp("^(?:2[0-3]|[01]?\\d):[0-5]?\\d(:[0-5]?\\d)?$")).optional(), end_time: z.string().regex(new RegExp("^(?:2[0-3]|[01]?\\d):[0-5]?\\d(:[0-5]?\\d)?$")).optional(), remote_fields: z.object({ a3innuvanomina: z.object({ benefit_type_id: z.enum(["Delegated Payment", "No Right to Benefit", "Direct payment"]) }).partial(), adpworkforcenow: z.object({ employment_id: z.string(), paid_leave: z.boolean() }).partial() }).partial().optional() });

export type DeleteHrisAbsencesAbsenceIdParameterAbsenceId = z.infer<typeof DeleteHrisAbsencesAbsenceIdParameterAbsenceId>;
export const DeleteHrisAbsencesAbsenceIdParameterAbsenceId = z.string();

export type DeleteHrisAbsencesAbsenceIdPositiveResponse = z.infer<typeof DeleteHrisAbsencesAbsenceIdPositiveResponse>;
export const DeleteHrisAbsencesAbsenceIdPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ id: z.string(), remote_id: z.string().nullable(), employee_id: z.string(), approver_id: z.string().nullable(), start_date: z.null(), end_date: z.null(), start_half_day: z.boolean().nullable(), end_half_day: z.boolean().nullable(), start_time: z.null(), end_time: z.null(), amount: z.number().min(-1.7976931348623157e+308).nullable(), unit: z.enum(["HOURS", "DAYS"]).nullable(), status: z.union([z.enum(["REQUESTED", "APPROVED", "DECLINED", "CANCELLED", "DELETED"]), z.string(), z.null()]).optional(), employee_note: z.string().nullable(), type_id: z.string().nullable(), remote_created_at: z.iso.datetime().nullable(), remote_updated_at: z.iso.datetime().nullable(), changed_at: z.iso.datetime(), remote_deleted_at: z.iso.datetime().nullable(), remote_data: z.record(z.string(), z.unknown()).nullable() }), warnings: z.array(z.object({ message: z.string() })) });

export type DeleteHrisAbsencesAbsenceIdRequestBody = z.infer<typeof DeleteHrisAbsencesAbsenceIdRequestBody>;
export const DeleteHrisAbsencesAbsenceIdRequestBody = z.object({ remote_fields: z.object({ adpworkforcenow: z.object({ employment_id: z.string() }).partial() }).partial() }).partial();

export type GetHrisLegalEntitiesParameterCursor = z.infer<typeof GetHrisLegalEntitiesParameterCursor>;
export const GetHrisLegalEntitiesParameterCursor = z.string();

export type GetHrisLegalEntitiesParameterPageSize = z.infer<typeof GetHrisLegalEntitiesParameterPageSize>;
export const GetHrisLegalEntitiesParameterPageSize = z.number().int().min(1).max(250).default(100);

export type GetHrisLegalEntitiesParameterUpdatedAfter = z.infer<typeof GetHrisLegalEntitiesParameterUpdatedAfter>;
export const GetHrisLegalEntitiesParameterUpdatedAfter = z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"));

export type GetHrisLegalEntitiesParameterIncludeDeleted = z.infer<typeof GetHrisLegalEntitiesParameterIncludeDeleted>;
export const GetHrisLegalEntitiesParameterIncludeDeleted = z.enum(["true", "false"]).default("false");

export type GetHrisLegalEntitiesParameterIgnoreUnsupportedFilters = z.infer<typeof GetHrisLegalEntitiesParameterIgnoreUnsupportedFilters>;
export const GetHrisLegalEntitiesParameterIgnoreUnsupportedFilters = z.enum(["true", "false"]).default("false");

export type GetHrisLegalEntitiesParameterIds = z.infer<typeof GetHrisLegalEntitiesParameterIds>;
export const GetHrisLegalEntitiesParameterIds = z.string();

export type GetHrisLegalEntitiesParameterRemoteIds = z.infer<typeof GetHrisLegalEntitiesParameterRemoteIds>;
export const GetHrisLegalEntitiesParameterRemoteIds = z.string();

export type GetHrisLegalEntitiesParameterNameContains = z.infer<typeof GetHrisLegalEntitiesParameterNameContains>;
export const GetHrisLegalEntitiesParameterNameContains = z.string();

export type GetHrisLegalEntitiesPositiveResponse = z.infer<typeof GetHrisLegalEntitiesPositiveResponse>;
export const GetHrisLegalEntitiesPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ next: z.string().nullable(), results: z.array(z.object({ id: z.string(), remote_id: z.string().nullable(), name: z.string().nullable(), address: z.object({ city: z.string().nullable(), country: z.string().nullable(), raw: z.string().nullable(), state: z.string().nullable(), street_1: z.string().nullable(), street_2: z.string().nullable(), zip_code: z.string().nullable() }).partial().nullable().optional(), changed_at: z.iso.datetime(), remote_deleted_at: z.iso.datetime().nullable(), remote_data: z.record(z.string(), z.unknown()).nullable() })) }) });

export type GetHrisTimesheetsParameterCursor = z.infer<typeof GetHrisTimesheetsParameterCursor>;
export const GetHrisTimesheetsParameterCursor = z.string();

export type GetHrisTimesheetsParameterPageSize = z.infer<typeof GetHrisTimesheetsParameterPageSize>;
export const GetHrisTimesheetsParameterPageSize = z.number().int().min(1).max(250).default(100);

export type GetHrisTimesheetsParameterUpdatedAfter = z.infer<typeof GetHrisTimesheetsParameterUpdatedAfter>;
export const GetHrisTimesheetsParameterUpdatedAfter = z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"));

export type GetHrisTimesheetsParameterIncludeDeleted = z.infer<typeof GetHrisTimesheetsParameterIncludeDeleted>;
export const GetHrisTimesheetsParameterIncludeDeleted = z.enum(["true", "false"]).default("false");

export type GetHrisTimesheetsParameterIgnoreUnsupportedFilters = z.infer<typeof GetHrisTimesheetsParameterIgnoreUnsupportedFilters>;
export const GetHrisTimesheetsParameterIgnoreUnsupportedFilters = z.enum(["true", "false"]).default("false");

export type GetHrisTimesheetsParameterIds = z.infer<typeof GetHrisTimesheetsParameterIds>;
export const GetHrisTimesheetsParameterIds = z.string();

export type GetHrisTimesheetsParameterRemoteIds = z.infer<typeof GetHrisTimesheetsParameterRemoteIds>;
export const GetHrisTimesheetsParameterRemoteIds = z.string();

export type GetHrisTimesheetsParameterEmployeeId = z.infer<typeof GetHrisTimesheetsParameterEmployeeId>;
export const GetHrisTimesheetsParameterEmployeeId = z.string();

export type GetHrisTimesheetsParameterStartedBefore = z.infer<typeof GetHrisTimesheetsParameterStartedBefore>;
export const GetHrisTimesheetsParameterStartedBefore = z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"));

export type GetHrisTimesheetsParameterStartedAfter = z.infer<typeof GetHrisTimesheetsParameterStartedAfter>;
export const GetHrisTimesheetsParameterStartedAfter = z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"));

export type GetHrisTimesheetsParameterEndedBefore = z.infer<typeof GetHrisTimesheetsParameterEndedBefore>;
export const GetHrisTimesheetsParameterEndedBefore = z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"));

export type GetHrisTimesheetsParameterEndedAfter = z.infer<typeof GetHrisTimesheetsParameterEndedAfter>;
export const GetHrisTimesheetsParameterEndedAfter = z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"));

export type GetHrisTimesheetsPositiveResponse = z.infer<typeof GetHrisTimesheetsPositiveResponse>;
export const GetHrisTimesheetsPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ next: z.string().nullable(), results: z.array(z.object({ id: z.string(), remote_id: z.string().nullable(), employee_id: z.string(), started_at: z.iso.datetime().nullable(), ended_at: z.iso.datetime().nullable(), timezone: z.string().regex(new RegExp("^[+-](?:0\\d|1[0-4]):[0-5]\\d$")).nullable(), payable_hours: z.number().min(-1.7976931348623157e+308).nullable(), unpaid_break_minutes: z.number().min(-1.7976931348623157e+308).nullable(), breaks: z.array(z.object({ ended_at: z.union([z.iso.datetime(), z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$"))]), paid: z.boolean(), started_at: z.union([z.iso.datetime(), z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$"))]) })).nullable().optional(), approval_status: z.string().nullable(), approved_at: z.iso.datetime().nullable(), comment: z.string().nullable(), custom_fields: z.record(z.string(), z.unknown()).nullable(), integration_fields: z.array(z.object({ id: z.string(), key: z.string(), type: z.enum(["DEFAULT", "CUSTOM"]), value: z.null().optional(), label: z.string().nullable() })), changed_at: z.iso.datetime(), remote_deleted_at: z.iso.datetime().nullable(), remote_data: z.record(z.string(), z.unknown()).nullable() })) }) });

export type GetHrisPerformanceReviewCyclesParameterCursor = z.infer<typeof GetHrisPerformanceReviewCyclesParameterCursor>;
export const GetHrisPerformanceReviewCyclesParameterCursor = z.string();

export type GetHrisPerformanceReviewCyclesParameterPageSize = z.infer<typeof GetHrisPerformanceReviewCyclesParameterPageSize>;
export const GetHrisPerformanceReviewCyclesParameterPageSize = z.number().int().min(1).max(250).default(100);

export type GetHrisPerformanceReviewCyclesParameterUpdatedAfter = z.infer<typeof GetHrisPerformanceReviewCyclesParameterUpdatedAfter>;
export const GetHrisPerformanceReviewCyclesParameterUpdatedAfter = z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"));

export type GetHrisPerformanceReviewCyclesParameterIncludeDeleted = z.infer<typeof GetHrisPerformanceReviewCyclesParameterIncludeDeleted>;
export const GetHrisPerformanceReviewCyclesParameterIncludeDeleted = z.enum(["true", "false"]).default("false");

export type GetHrisPerformanceReviewCyclesParameterIgnoreUnsupportedFilters = z.infer<typeof GetHrisPerformanceReviewCyclesParameterIgnoreUnsupportedFilters>;
export const GetHrisPerformanceReviewCyclesParameterIgnoreUnsupportedFilters = z.enum(["true", "false"]).default("false");

export type GetHrisPerformanceReviewCyclesParameterIds = z.infer<typeof GetHrisPerformanceReviewCyclesParameterIds>;
export const GetHrisPerformanceReviewCyclesParameterIds = z.string();

export type GetHrisPerformanceReviewCyclesParameterRemoteIds = z.infer<typeof GetHrisPerformanceReviewCyclesParameterRemoteIds>;
export const GetHrisPerformanceReviewCyclesParameterRemoteIds = z.string();

export type GetHrisPerformanceReviewCyclesPositiveResponse = z.infer<typeof GetHrisPerformanceReviewCyclesPositiveResponse>;
export const GetHrisPerformanceReviewCyclesPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ next: z.string().nullable(), results: z.array(z.object({ id: z.string(), remote_id: z.string(), name: z.string().nullable(), review_period_start_date: z.iso.datetime().nullable(), changed_at: z.iso.datetime(), remote_deleted_at: z.iso.datetime().nullable(), remote_data: z.record(z.string(), z.unknown()).nullable() })) }) });

export type GetHrisPerformanceReviewsParameterCursor = z.infer<typeof GetHrisPerformanceReviewsParameterCursor>;
export const GetHrisPerformanceReviewsParameterCursor = z.string();

export type GetHrisPerformanceReviewsParameterPageSize = z.infer<typeof GetHrisPerformanceReviewsParameterPageSize>;
export const GetHrisPerformanceReviewsParameterPageSize = z.number().int().min(1).max(250).default(100);

export type GetHrisPerformanceReviewsParameterUpdatedAfter = z.infer<typeof GetHrisPerformanceReviewsParameterUpdatedAfter>;
export const GetHrisPerformanceReviewsParameterUpdatedAfter = z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"));

export type GetHrisPerformanceReviewsParameterIncludeDeleted = z.infer<typeof GetHrisPerformanceReviewsParameterIncludeDeleted>;
export const GetHrisPerformanceReviewsParameterIncludeDeleted = z.enum(["true", "false"]).default("false");

export type GetHrisPerformanceReviewsParameterIgnoreUnsupportedFilters = z.infer<typeof GetHrisPerformanceReviewsParameterIgnoreUnsupportedFilters>;
export const GetHrisPerformanceReviewsParameterIgnoreUnsupportedFilters = z.enum(["true", "false"]).default("false");

export type GetHrisPerformanceReviewsParameterIds = z.infer<typeof GetHrisPerformanceReviewsParameterIds>;
export const GetHrisPerformanceReviewsParameterIds = z.string();

export type GetHrisPerformanceReviewsParameterRemoteIds = z.infer<typeof GetHrisPerformanceReviewsParameterRemoteIds>;
export const GetHrisPerformanceReviewsParameterRemoteIds = z.string();

export type GetHrisPerformanceReviewsParameterTypes = z.infer<typeof GetHrisPerformanceReviewsParameterTypes>;
export const GetHrisPerformanceReviewsParameterTypes = z.string();

export type GetHrisPerformanceReviewsParameterReviewCycleIds = z.infer<typeof GetHrisPerformanceReviewsParameterReviewCycleIds>;
export const GetHrisPerformanceReviewsParameterReviewCycleIds = z.string();

export type GetHrisPerformanceReviewsParameterRevieweeIds = z.infer<typeof GetHrisPerformanceReviewsParameterRevieweeIds>;
export const GetHrisPerformanceReviewsParameterRevieweeIds = z.string();

export type GetHrisPerformanceReviewsPositiveResponse = z.infer<typeof GetHrisPerformanceReviewsPositiveResponse>;
export const GetHrisPerformanceReviewsPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ next: z.string().nullable(), results: z.array(z.object({ id: z.string(), remote_id: z.string(), type: z.enum(["MANAGER", "DIRECT_REPORT", "PEER", "SELF"]).nullable(), summary_comment: z.string().nullable(), summary_rating: z.union([z.discriminatedUnion("type", [z.object({ type: z.literal("NUMERIC"), min: z.number().min(-1.7976931348623157e+308).nullable(), max: z.number().min(-1.7976931348623157e+308).nullable(), value: z.number().min(-1.7976931348623157e+308).nullable() }), z.object({ type: z.literal("SINGLE_SELECT"), ordered_options: z.array(z.string()).nullable(), value: z.string().nullable() })]), z.null()]).optional(), changed_at: z.iso.datetime(), remote_deleted_at: z.iso.datetime().nullable(), remote_data: z.record(z.string(), z.unknown()).nullable(), reviewee: z.object({ id: z.string(), remote_id: z.string(), first_name: z.string().nullable(), last_name: z.string().nullable(), display_full_name: z.string().nullable(), work_email: z.string().regex(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$")).nullable().optional(), remote_deleted_at: z.iso.datetime().nullable() }), reviewer: z.object({ id: z.string(), remote_id: z.string(), first_name: z.string().nullable(), last_name: z.string().nullable(), display_full_name: z.string().nullable(), work_email: z.string().regex(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$")).nullable().optional(), remote_deleted_at: z.iso.datetime().nullable() }).nullable(), review_cycle: z.object({ id: z.string(), remote_id: z.string(), name: z.string().nullable(), review_period_start_date: z.iso.datetime().nullable(), changed_at: z.iso.datetime(), remote_deleted_at: z.iso.datetime().nullable(), remote_data: z.record(z.string(), z.unknown()).nullable() }).nullable() })) }) });

export type GetHrisSkillsParameterIds = z.infer<typeof GetHrisSkillsParameterIds>;
export const GetHrisSkillsParameterIds = z.string();

export type GetHrisSkillsParameterRemoteIds = z.infer<typeof GetHrisSkillsParameterRemoteIds>;
export const GetHrisSkillsParameterRemoteIds = z.string();

export type GetHrisSkillsParameterNameContains = z.infer<typeof GetHrisSkillsParameterNameContains>;
export const GetHrisSkillsParameterNameContains = z.string();

export type GetHrisSkillsPositiveResponse = z.infer<typeof GetHrisSkillsPositiveResponse>;
export const GetHrisSkillsPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ next: z.string().nullable(), results: z.array(z.object({ id: z.string(), remote_id: z.string(), name: z.string(), description: z.string().nullable(), ordered_levels: z.array(z.string()).nullable(), changed_at: z.iso.datetime(), remote_deleted_at: z.iso.datetime().nullable(), remote_data: z.record(z.string(), z.unknown()).nullable() })) }) });

export type PostHrisSkillsPositiveResponse = z.infer<typeof PostHrisSkillsPositiveResponse>;
export const PostHrisSkillsPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ id: z.string(), remote_id: z.string(), name: z.string(), description: z.string().nullable(), ordered_levels: z.array(z.string()).nullable(), changed_at: z.iso.datetime(), remote_deleted_at: z.iso.datetime().nullable(), remote_data: z.record(z.string(), z.unknown()).nullable() }) });

export type PostHrisSkillsRequestBody = z.infer<typeof PostHrisSkillsRequestBody>;
export const PostHrisSkillsRequestBody = z.object({ name: z.string(), levels: z.array(z.string()).optional() });

export type PatchHrisSkillsSkillIdParameterSkillId = z.infer<typeof PatchHrisSkillsSkillIdParameterSkillId>;
export const PatchHrisSkillsSkillIdParameterSkillId = z.string();

export type PatchHrisSkillsSkillIdPositiveResponse = z.infer<typeof PatchHrisSkillsSkillIdPositiveResponse>;
export const PatchHrisSkillsSkillIdPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ id: z.string(), remote_id: z.string(), name: z.string(), description: z.string().nullable(), ordered_levels: z.array(z.string()).nullable(), changed_at: z.iso.datetime(), remote_deleted_at: z.iso.datetime().nullable(), remote_data: z.record(z.string(), z.unknown()).nullable() }) });

export type PatchHrisSkillsSkillIdRequestBody = z.infer<typeof PatchHrisSkillsSkillIdRequestBody>;
export const PatchHrisSkillsSkillIdRequestBody = z.object({ name: z.string(), levels: z.array(z.string()) }).partial();

export type DeleteHrisSkillsSkillIdParameterSkillId = z.infer<typeof DeleteHrisSkillsSkillIdParameterSkillId>;
export const DeleteHrisSkillsSkillIdParameterSkillId = z.string();

export type DeleteHrisSkillsSkillIdPositiveResponse = z.infer<typeof DeleteHrisSkillsSkillIdPositiveResponse>;
export const DeleteHrisSkillsSkillIdPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ id: z.string(), remote_id: z.string(), name: z.string(), description: z.string().nullable(), ordered_levels: z.array(z.string()).nullable(), changed_at: z.iso.datetime(), remote_deleted_at: z.iso.datetime().nullable(), remote_data: z.record(z.string(), z.unknown()).nullable() }) });

export type DeleteHrisSkillsSkillIdRequestBody = z.infer<typeof DeleteHrisSkillsSkillIdRequestBody>;
export const DeleteHrisSkillsSkillIdRequestBody = z.object({  }).partial();

export type GetHrisEmployeeSkillAssignmentsParameterIds = z.infer<typeof GetHrisEmployeeSkillAssignmentsParameterIds>;
export const GetHrisEmployeeSkillAssignmentsParameterIds = z.string();

export type GetHrisEmployeeSkillAssignmentsParameterRemoteIds = z.infer<typeof GetHrisEmployeeSkillAssignmentsParameterRemoteIds>;
export const GetHrisEmployeeSkillAssignmentsParameterRemoteIds = z.string();

export type GetHrisEmployeeSkillAssignmentsParameterEmployeeIds = z.infer<typeof GetHrisEmployeeSkillAssignmentsParameterEmployeeIds>;
export const GetHrisEmployeeSkillAssignmentsParameterEmployeeIds = z.string();

export type GetHrisEmployeeSkillAssignmentsParameterSkillIds = z.infer<typeof GetHrisEmployeeSkillAssignmentsParameterSkillIds>;
export const GetHrisEmployeeSkillAssignmentsParameterSkillIds = z.string();

export type GetHrisEmployeeSkillAssignmentsPositiveResponse = z.infer<typeof GetHrisEmployeeSkillAssignmentsPositiveResponse>;
export const GetHrisEmployeeSkillAssignmentsPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ next: z.string().nullable(), results: z.array(z.object({ id: z.string(), employee_id: z.string(), skill_id: z.string(), current_level: z.string().nullable() })) }) });

export type PostHrisEmployeeSkillAssignmentsPositiveResponse = z.infer<typeof PostHrisEmployeeSkillAssignmentsPositiveResponse>;
export const PostHrisEmployeeSkillAssignmentsPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ id: z.string(), employee_id: z.string(), skill_id: z.string(), current_level: z.string().nullable() }) });

export type PostHrisEmployeeSkillAssignmentsRequestBody = z.infer<typeof PostHrisEmployeeSkillAssignmentsRequestBody>;
export const PostHrisEmployeeSkillAssignmentsRequestBody = z.object({ employee_id: z.string(), skill_id: z.string(), current_level: z.string().optional() });

export type PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId = z.infer<typeof PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId>;
export const PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId = z.string();

export type PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse = z.infer<typeof PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse>;
export const PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ id: z.string(), employee_id: z.string(), skill_id: z.string(), current_level: z.string().nullable() }) });

export type PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody = z.infer<typeof PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody>;
export const PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody = z.object({ current_level: z.string().nullable() });

export type DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId = z.infer<typeof DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId>;
export const DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId = z.string();

export type DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse = z.infer<typeof DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse>;
export const DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ id: z.string(), employee_id: z.string(), skill_id: z.string(), current_level: z.string().nullable() }) });

export type DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody = z.infer<typeof DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody>;
export const DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody = z.object({  }).partial();

export type GetHrisStaffingEntitiesParameterCursor = z.infer<typeof GetHrisStaffingEntitiesParameterCursor>;
export const GetHrisStaffingEntitiesParameterCursor = z.string();

export type GetHrisStaffingEntitiesParameterPageSize = z.infer<typeof GetHrisStaffingEntitiesParameterPageSize>;
export const GetHrisStaffingEntitiesParameterPageSize = z.number().int().min(1).max(250).default(100);

export type GetHrisStaffingEntitiesParameterUpdatedAfter = z.infer<typeof GetHrisStaffingEntitiesParameterUpdatedAfter>;
export const GetHrisStaffingEntitiesParameterUpdatedAfter = z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"));

export type GetHrisStaffingEntitiesParameterIncludeDeleted = z.infer<typeof GetHrisStaffingEntitiesParameterIncludeDeleted>;
export const GetHrisStaffingEntitiesParameterIncludeDeleted = z.enum(["true", "false"]).default("false");

export type GetHrisStaffingEntitiesParameterIgnoreUnsupportedFilters = z.infer<typeof GetHrisStaffingEntitiesParameterIgnoreUnsupportedFilters>;
export const GetHrisStaffingEntitiesParameterIgnoreUnsupportedFilters = z.enum(["true", "false"]).default("false");

export type GetHrisStaffingEntitiesParameterIds = z.infer<typeof GetHrisStaffingEntitiesParameterIds>;
export const GetHrisStaffingEntitiesParameterIds = z.string();

export type GetHrisStaffingEntitiesParameterRemoteIds = z.infer<typeof GetHrisStaffingEntitiesParameterRemoteIds>;
export const GetHrisStaffingEntitiesParameterRemoteIds = z.string();

export type GetHrisStaffingEntitiesParameterModelTypes = z.infer<typeof GetHrisStaffingEntitiesParameterModelTypes>;
export const GetHrisStaffingEntitiesParameterModelTypes = z.string();

export type GetHrisStaffingEntitiesParameterStatuses = z.infer<typeof GetHrisStaffingEntitiesParameterStatuses>;
export const GetHrisStaffingEntitiesParameterStatuses = z.string();

export type GetHrisStaffingEntitiesPositiveResponse = z.infer<typeof GetHrisStaffingEntitiesPositiveResponse>;
export const GetHrisStaffingEntitiesPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ next: z.string().nullable(), results: z.array(z.object({ id: z.string(), remote_id: z.string(), name: z.string().nullable(), model_type: z.enum(["JOB", "POSITION", "REQUISITION"]).nullable(), description: z.string().nullable(), status: z.enum(["OPEN_LIMITED", "OPEN_UNLIMITED", "PENDING", "FROZEN", "FILLED", "CLOSED"]).nullable(), employment_types: z.array(z.object({ remote_label: z.string(), unified_type: z.enum(["FULL_TIME", "PART_TIME", "CONTRACT", "INTERNSHIP", "FREELANCE", "WORKING_STUDENT", "APPRENTICESHIP", "TRAINING"]).nullable() })).nullable().optional(), number_of_openings: z.number().min(-1.7976931348623157e+308).nullable(), parent_id: z.string().nullable(), remote_url: z.url().nullable(), remote_created_at: z.iso.datetime().nullable(), remote_updated_at: z.iso.datetime().nullable(), changed_at: z.iso.datetime(), remote_deleted_at: z.iso.datetime().nullable(), custom_fields: z.record(z.string(), z.unknown()).nullable(), integration_fields: z.array(z.object({ id: z.string(), key: z.string(), type: z.enum(["DEFAULT", "CUSTOM"]), value: z.null().optional(), label: z.string().nullable() })), remote_data: z.record(z.string(), z.unknown()).nullable(), locations: z.array(z.object({ id: z.string(), remote_id: z.string().nullable(), name: z.string().nullable(), type: z.string().nullable() })), legal_entities: z.array(z.object({ id: z.string(), remote_id: z.string().nullable(), name: z.string().nullable() })), groups: z.array(z.object({ id: z.string(), remote_id: z.string(), name: z.string().nullable(), type: z.enum(["DEPARTMENT", "TEAM", "COST_CENTER"]).nullable() })) })) }) });

export type GetAtsApplicationsParameterCursor = z.infer<typeof GetAtsApplicationsParameterCursor>;
export const GetAtsApplicationsParameterCursor = z.string();

export type GetAtsApplicationsParameterPageSize = z.infer<typeof GetAtsApplicationsParameterPageSize>;
export const GetAtsApplicationsParameterPageSize = z.number().int().min(1).max(250).default(100);

export type GetAtsApplicationsParameterUpdatedAfter = z.infer<typeof GetAtsApplicationsParameterUpdatedAfter>;
export const GetAtsApplicationsParameterUpdatedAfter = z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"));

export type GetAtsApplicationsParameterIncludeDeleted = z.infer<typeof GetAtsApplicationsParameterIncludeDeleted>;
export const GetAtsApplicationsParameterIncludeDeleted = z.enum(["true", "false"]).default("false");

export type GetAtsApplicationsParameterIgnoreUnsupportedFilters = z.infer<typeof GetAtsApplicationsParameterIgnoreUnsupportedFilters>;
export const GetAtsApplicationsParameterIgnoreUnsupportedFilters = z.enum(["true", "false"]).default("false");

export type GetAtsApplicationsParameterIds = z.infer<typeof GetAtsApplicationsParameterIds>;
export const GetAtsApplicationsParameterIds = z.string();

export type GetAtsApplicationsParameterRemoteIds = z.infer<typeof GetAtsApplicationsParameterRemoteIds>;
export const GetAtsApplicationsParameterRemoteIds = z.string();

export type GetAtsApplicationsParameterOutcome = z.infer<typeof GetAtsApplicationsParameterOutcome>;
export const GetAtsApplicationsParameterOutcome = z.enum(["PENDING", "HIRED", "DECLINED"]);

export type GetAtsApplicationsParameterOutcomes = z.infer<typeof GetAtsApplicationsParameterOutcomes>;
export const GetAtsApplicationsParameterOutcomes = z.string();

export type GetAtsApplicationsParameterJobIds = z.infer<typeof GetAtsApplicationsParameterJobIds>;
export const GetAtsApplicationsParameterJobIds = z.string();

export type GetAtsApplicationsParameterJobRemoteIds = z.infer<typeof GetAtsApplicationsParameterJobRemoteIds>;
export const GetAtsApplicationsParameterJobRemoteIds = z.string();

export type GetAtsApplicationsParameterCurrentStageIds = z.infer<typeof GetAtsApplicationsParameterCurrentStageIds>;
export const GetAtsApplicationsParameterCurrentStageIds = z.string();

export type GetAtsApplicationsParameterRemoteCreatedAfter = z.infer<typeof GetAtsApplicationsParameterRemoteCreatedAfter>;
export const GetAtsApplicationsParameterRemoteCreatedAfter = z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"));

export type GetAtsApplicationsPositiveResponse = z.infer<typeof GetAtsApplicationsPositiveResponse>;
export const GetAtsApplicationsPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ next: z.string().nullable(), results: z.array(z.object({ id: z.string(), remote_id: z.string().nullable(), outcome: z.enum(["PENDING", "HIRED", "DECLINED"]).nullable(), rejection_reason_name: z.string().nullable(), rejected_at: z.iso.datetime().nullable(), current_stage_id: z.string().nullable(), job_id: z.string().nullable(), candidate_id: z.string().nullable(), screening_question_answers: z.array(z.union([z.object({ answer: z.object({ content: z.string().nullable() }), question: z.object({ remote_id: z.string().nullable(), title: z.string(), type: z.literal("TEXT") }) }), z.object({ answer: z.object({ choice: z.string().nullable() }), question: z.object({ remote_id: z.string().nullable(), title: z.string(), type: z.literal("SINGLE_SELECT") }) }), z.object({ answer: z.object({ choices: z.array(z.string()).default([]) }).partial(), question: z.object({ remote_id: z.string().nullable(), title: z.string(), type: z.literal("MULTI_SELECT") }) }), z.object({ answer: z.object({ checked: z.boolean().nullable() }), question: z.object({ remote_id: z.string().nullable(), title: z.string(), type: z.literal("BOOLEAN") }) }), z.object({ answer: z.object({ number: z.number().min(-1.7976931348623157e+308).nullable() }), question: z.object({ remote_id: z.string().nullable(), title: z.string(), type: z.literal("NUMBER") }) }), z.object({ answer: z.object({ date: z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).nullable() }), question: z.object({ remote_id: z.string().nullable(), title: z.string(), type: z.literal("DATE") }) }), z.object({ answer: z.object({ raw: z.null() }).partial(), question: z.object({ remote_id: z.string().nullable(), title: z.string(), type: z.literal("UNKNOWN") }) })])).default([]).nullable().default([]), custom_fields: z.record(z.string(), z.unknown()).nullable(), integration_fields: z.array(z.object({ id: z.string(), key: z.string(), type: z.enum(["DEFAULT", "CUSTOM"]), value: z.null().optional(), label: z.string().nullable() })), remote_url: z.url().nullable(), changed_at: z.iso.datetime(), remote_deleted_at: z.iso.datetime().nullable(), remote_created_at: z.iso.datetime().nullable(), remote_updated_at: z.iso.datetime().nullable(), remote_data: z.record(z.string(), z.unknown()).nullable(), candidate: z.object({ id: z.string(), remote_id: z.string(), first_name: z.string().nullable(), last_name: z.string().nullable(), email_addresses: z.array(z.object({ email_address: z.string().regex(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$")).nullable().optional(), type: z.string().nullable() })).default([]).nullable().default([]), phone_numbers: z.array(z.object({ phone_number: z.string(), type: z.string().nullable().optional() })).default([]).nullable().default([]), social_media: z.array(z.object({ link: z.string().nullable(), type: z.string().nullable(), username: z.string().nullable() }).partial()).default([]).nullable().default([]), source: z.string().nullable(), remote_url: z.url().nullable(), tags: z.array(z.object({ id: z.string(), remote_id: z.string().nullable(), name: z.string().nullable() })) }).nullable(), current_stage: z.object({ id: z.string(), remote_id: z.string().nullable(), name: z.string().nullable(), index: z.number().int().nullable() }).nullable(), job: z.object({ id: z.string(), remote_id: z.string(), name: z.string().nullable() }).nullable(), interviews: z.array(z.object({ id: z.string(), remote_id: z.string().nullable(), title: z.string().nullable(), starting_at: z.iso.datetime().nullable(), ending_at: z.iso.datetime().nullable(), location: z.object({ city: z.string().nullable(), country: z.string().nullable(), raw: z.string().nullable(), state: z.string().nullable(), street_1: z.string().nullable(), street_2: z.string().nullable(), zip_code: z.string().nullable() }).partial().nullable().optional(), canceled: z.boolean().nullable() })), offers: z.array(z.object({ id: z.string(), remote_id: z.string().nullable(), status: z.enum(["ACCEPTED", "DECLINED", "SENT", "APPROVED", "DRAFT", "ABANDONED"]).nullable() })) })) }) });

export type PutAtsApplicationsApplicationIdStageParameterApplicationId = z.infer<typeof PutAtsApplicationsApplicationIdStageParameterApplicationId>;
export const PutAtsApplicationsApplicationIdStageParameterApplicationId = z.string();

export type PutAtsApplicationsApplicationIdStagePositiveResponse = z.infer<typeof PutAtsApplicationsApplicationIdStagePositiveResponse>;
export const PutAtsApplicationsApplicationIdStagePositiveResponse = z.object({ status: z.literal("success"), data: z.record(z.string(), z.unknown()), warnings: z.array(z.object({ message: z.string() })) });

export type PutAtsApplicationsApplicationIdStageRequestBody = z.infer<typeof PutAtsApplicationsApplicationIdStageRequestBody>;
export const PutAtsApplicationsApplicationIdStageRequestBody = z.object({ stage_id: z.string(), remote_fields: z.object({ workday: z.object({ Workflow_Step_ID: z.string(), Step_Type: z.enum(["Next_Step_Reference", "Disposition_Step_Reference"]) }).partial() }).partial().and(z.object({ greenhouse: z.object({ post_headers: z.object({ "On-Behalf-Of": z.string().nullable() }).partial() }).partial(), workable: z.object({ on_behalf_of_user_remote_id: z.string() }).partial() }).partial()).optional() });

export type PostAtsApplicationsApplicationIdResultLinksParameterApplicationId = z.infer<typeof PostAtsApplicationsApplicationIdResultLinksParameterApplicationId>;
export const PostAtsApplicationsApplicationIdResultLinksParameterApplicationId = z.string();

export type PostAtsApplicationsApplicationIdResultLinksPositiveResponse = z.infer<typeof PostAtsApplicationsApplicationIdResultLinksPositiveResponse>;
export const PostAtsApplicationsApplicationIdResultLinksPositiveResponse = z.object({ status: z.literal("success"), data: z.record(z.string(), z.unknown()), warnings: z.array(z.object({ message: z.string() })) });

export type PostAtsApplicationsApplicationIdResultLinksRequestBody = z.infer<typeof PostAtsApplicationsApplicationIdResultLinksRequestBody>;
export const PostAtsApplicationsApplicationIdResultLinksRequestBody = z.object({ label: z.string(), url: z.url(), details: z.object({ custom_field_name_prefix: z.string(), attributes: z.array(z.object({ key: z.string(), value: z.string() })) }).optional(), remote_fields: z.object({ icims: z.object({ assessment_package_id: z.string() }).partial(), oracle: z.object({ override_document_category: z.enum(["IRC_CANDIDATE_RESUME", "IRC_CANDIDATE_COVERLETTER", "MISC", "IRC_INTERNAL"]), multi_post_to_all_current_applications: z.boolean() }).partial() }).partial().and(z.object({ greenhouse: z.object({ post_headers: z.object({ "On-Behalf-Of": z.string().nullable() }).partial() }).partial(), workable: z.object({ on_behalf_of_user_remote_id: z.string() }).partial() }).partial()).optional() });

export type PostAtsApplicationsApplicationIdNotesParameterApplicationId = z.infer<typeof PostAtsApplicationsApplicationIdNotesParameterApplicationId>;
export const PostAtsApplicationsApplicationIdNotesParameterApplicationId = z.string();

export type PostAtsApplicationsApplicationIdNotesPositiveResponse = z.infer<typeof PostAtsApplicationsApplicationIdNotesPositiveResponse>;
export const PostAtsApplicationsApplicationIdNotesPositiveResponse = z.object({ status: z.literal("success"), data: z.record(z.string(), z.unknown()), warnings: z.array(z.object({ message: z.string() })) });

export type PostAtsApplicationsApplicationIdNotesRequestBody = z.infer<typeof PostAtsApplicationsApplicationIdNotesRequestBody>;
export const PostAtsApplicationsApplicationIdNotesRequestBody = z.object({ content: z.string(), content_type: z.literal("PLAIN_TEXT"), remote_fields: z.object({ teamtailor: z.object({ user_id: z.string() }).partial(), greenhouse: z.object({ visibility: z.enum(["admin_only", "private", "public"]) }).partial(), recruitee: z.object({ visibility: z.unknown(), is_json: z.boolean() }).partial(), bullhorn: z.object({ action: z.string() }).partial(), lever: z.object({ perform_as: z.string() }).partial() }).partial().and(z.object({ greenhouse: z.object({ post_headers: z.object({ "On-Behalf-Of": z.string().nullable() }).partial() }).partial(), workable: z.object({ on_behalf_of_user_remote_id: z.string() }).partial() }).partial()).optional() });

export type GetAtsApplicationsApplicationIdAttachmentsParameterApplicationId = z.infer<typeof GetAtsApplicationsApplicationIdAttachmentsParameterApplicationId>;
export const GetAtsApplicationsApplicationIdAttachmentsParameterApplicationId = z.string();

export type GetAtsApplicationsApplicationIdAttachmentsPositiveResponse = z.infer<typeof GetAtsApplicationsApplicationIdAttachmentsPositiveResponse>;
export const GetAtsApplicationsApplicationIdAttachmentsPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ results: z.array(z.object({ type: z.enum(["CV", "COVER_LETTER", "OTHER"]), id: z.string(), remote_id: z.string(), data_url: z.string(), file_name: z.string(), content_type: z.string(), remote_created_at: z.iso.datetime().nullable(), remote_updated_at: z.iso.datetime().nullable() })) }), warnings: z.array(z.object({ message: z.string() })) });

export type PostAtsApplicationsApplicationIdAttachmentsParameterApplicationId = z.infer<typeof PostAtsApplicationsApplicationIdAttachmentsParameterApplicationId>;
export const PostAtsApplicationsApplicationIdAttachmentsParameterApplicationId = z.string();

export type PostAtsApplicationsApplicationIdAttachmentsPositiveResponse = z.infer<typeof PostAtsApplicationsApplicationIdAttachmentsPositiveResponse>;
export const PostAtsApplicationsApplicationIdAttachmentsPositiveResponse = z.object({ status: z.literal("success"), data: z.record(z.string(), z.unknown()), warnings: z.array(z.object({ message: z.string() })) });

export type PostAtsApplicationsApplicationIdAttachmentsRequestBody = z.infer<typeof PostAtsApplicationsApplicationIdAttachmentsRequestBody>;
export const PostAtsApplicationsApplicationIdAttachmentsRequestBody = z.object({ attachment: z.object({ name: z.string(), content_type: z.string().regex(new RegExp("^[\\w.-]+\\/[\\w.-]+$")).optional(), data_url: z.url().optional(), data: z.string().optional(), type: z.enum(["CV", "COVER_LETTER", "OTHER"]) }), remote_fields: z.object({ oracle: z.object({ override_document_category: z.enum(["IRC_CANDIDATE_RESUME", "IRC_CANDIDATE_COVERLETTER", "MISC", "IRC_INTERNAL"]), multi_post_to_all_current_applications: z.boolean() }).partial() }).partial().and(z.object({ greenhouse: z.object({ post_headers: z.object({ "On-Behalf-Of": z.string().nullable() }).partial() }).partial(), workable: z.object({ on_behalf_of_user_remote_id: z.string() }).partial() }).partial()).optional() });

export type PostAtsApplicationsApplicationIdRejectParameterApplicationId = z.infer<typeof PostAtsApplicationsApplicationIdRejectParameterApplicationId>;
export const PostAtsApplicationsApplicationIdRejectParameterApplicationId = z.string();

export type PostAtsApplicationsApplicationIdRejectPositiveResponse = z.infer<typeof PostAtsApplicationsApplicationIdRejectPositiveResponse>;
export const PostAtsApplicationsApplicationIdRejectPositiveResponse = z.object({ status: z.literal("success"), data: z.record(z.string(), z.unknown()), warnings: z.array(z.object({ message: z.string() })) });

export type PostAtsApplicationsApplicationIdRejectRequestBody = z.infer<typeof PostAtsApplicationsApplicationIdRejectRequestBody>;
export const PostAtsApplicationsApplicationIdRejectRequestBody = z.object({ rejection_reason_id: z.string(), note: z.string().optional(), remote_fields: z.object({ greenhouse: z.object({ rejection_email: z.record(z.string(), z.unknown()) }).partial(), teamtailor: z.object({ user_id: z.string() }).partial() }).partial().and(z.object({ greenhouse: z.object({ post_headers: z.object({ "On-Behalf-Of": z.string().nullable() }).partial() }).partial(), workable: z.object({ on_behalf_of_user_remote_id: z.string() }).partial() }).partial()).optional() });

export type PostAtsApplicationsApplicationIdInterviewsParameterApplicationId = z.infer<typeof PostAtsApplicationsApplicationIdInterviewsParameterApplicationId>;
export const PostAtsApplicationsApplicationIdInterviewsParameterApplicationId = z.string();

export type PostAtsApplicationsApplicationIdInterviewsPositiveResponse = z.infer<typeof PostAtsApplicationsApplicationIdInterviewsPositiveResponse>;
export const PostAtsApplicationsApplicationIdInterviewsPositiveResponse = z.object({ status: z.literal("success"), data: z.record(z.string(), z.unknown()) });

export type PostAtsApplicationsApplicationIdInterviewsRequestBody = z.infer<typeof PostAtsApplicationsApplicationIdInterviewsRequestBody>;
export const PostAtsApplicationsApplicationIdInterviewsRequestBody = z.object({ title: z.string(), start_time: z.string(), end_time: z.string(), interviewer_user_ids: z.array(z.string()), organizer_user_id: z.string(), location: z.object({ type: z.enum(["PHYSICAL", "VIRTUAL"]), address: z.string().optional() }) });

export type PatchAtsApplicationsApplicationIdInterviewsParameterApplicationId = z.infer<typeof PatchAtsApplicationsApplicationIdInterviewsParameterApplicationId>;
export const PatchAtsApplicationsApplicationIdInterviewsParameterApplicationId = z.string();

export type PatchAtsApplicationsApplicationIdInterviewsPositiveResponse = z.infer<typeof PatchAtsApplicationsApplicationIdInterviewsPositiveResponse>;
export const PatchAtsApplicationsApplicationIdInterviewsPositiveResponse = z.object({ status: z.literal("success"), data: z.record(z.string(), z.unknown()) });

export type PatchAtsApplicationsApplicationIdInterviewsRequestBody = z.infer<typeof PatchAtsApplicationsApplicationIdInterviewsRequestBody>;
export const PatchAtsApplicationsApplicationIdInterviewsRequestBody = z.object({ interview_id: z.string(), title: z.string(), start_time: z.string(), end_time: z.string(), interviewer_user_ids: z.array(z.string()), organizer_user_id: z.string(), location: z.object({ type: z.enum(["PHYSICAL", "VIRTUAL"]), address: z.string().optional() }) });

export type GetAtsCandidatesParameterCursor = z.infer<typeof GetAtsCandidatesParameterCursor>;
export const GetAtsCandidatesParameterCursor = z.string();

export type GetAtsCandidatesParameterPageSize = z.infer<typeof GetAtsCandidatesParameterPageSize>;
export const GetAtsCandidatesParameterPageSize = z.number().int().min(1).max(250).default(100);

export type GetAtsCandidatesParameterUpdatedAfter = z.infer<typeof GetAtsCandidatesParameterUpdatedAfter>;
export const GetAtsCandidatesParameterUpdatedAfter = z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"));

export type GetAtsCandidatesParameterIncludeDeleted = z.infer<typeof GetAtsCandidatesParameterIncludeDeleted>;
export const GetAtsCandidatesParameterIncludeDeleted = z.enum(["true", "false"]).default("false");

export type GetAtsCandidatesParameterIgnoreUnsupportedFilters = z.infer<typeof GetAtsCandidatesParameterIgnoreUnsupportedFilters>;
export const GetAtsCandidatesParameterIgnoreUnsupportedFilters = z.enum(["true", "false"]).default("false");

export type GetAtsCandidatesParameterIds = z.infer<typeof GetAtsCandidatesParameterIds>;
export const GetAtsCandidatesParameterIds = z.string();

export type GetAtsCandidatesParameterRemoteIds = z.infer<typeof GetAtsCandidatesParameterRemoteIds>;
export const GetAtsCandidatesParameterRemoteIds = z.string();

export type GetAtsCandidatesParameterEmail = z.infer<typeof GetAtsCandidatesParameterEmail>;
export const GetAtsCandidatesParameterEmail = z.email();

export type GetAtsCandidatesParameterJobIds = z.infer<typeof GetAtsCandidatesParameterJobIds>;
export const GetAtsCandidatesParameterJobIds = z.string();

export type GetAtsCandidatesParameterFirstName = z.infer<typeof GetAtsCandidatesParameterFirstName>;
export const GetAtsCandidatesParameterFirstName = z.string();

export type GetAtsCandidatesParameterLastName = z.infer<typeof GetAtsCandidatesParameterLastName>;
export const GetAtsCandidatesParameterLastName = z.string();

export type GetAtsCandidatesPositiveResponse = z.infer<typeof GetAtsCandidatesPositiveResponse>;
export const GetAtsCandidatesPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ next: z.string().nullable(), results: z.array(z.object({ id: z.string(), remote_id: z.string(), first_name: z.string().nullable(), last_name: z.string().nullable(), company: z.string().nullable(), title: z.string().nullable(), confidential: z.boolean().nullable(), source: z.string().nullable(), phone_numbers: z.array(z.object({ phone_number: z.string(), type: z.string().nullable().optional() })).default([]).nullable().default([]), email_addresses: z.array(z.object({ email_address: z.string().regex(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$")).nullable().optional(), type: z.string().nullable() })).default([]).nullable().default([]), social_media: z.array(z.object({ link: z.string().nullable(), type: z.string().nullable(), username: z.string().nullable() }).partial()).default([]).nullable().default([]), location: z.object({ city: z.string().nullable(), country: z.string().nullable(), raw: z.string().nullable(), state: z.string().nullable(), street_1: z.string().nullable(), street_2: z.string().nullable(), zip_code: z.string().nullable() }).partial().nullable().optional(), custom_fields: z.record(z.string(), z.unknown()).nullable(), integration_fields: z.array(z.object({ id: z.string(), key: z.string(), type: z.enum(["DEFAULT", "CUSTOM"]), value: z.null().optional(), label: z.string().nullable() })), remote_url: z.url().nullable(), remote_created_at: z.iso.datetime().nullable(), remote_updated_at: z.iso.datetime().nullable(), remote_data: z.record(z.string(), z.unknown()).nullable(), changed_at: z.iso.datetime(), remote_deleted_at: z.iso.datetime().nullable(), applications: z.array(z.object({ id: z.string(), remote_id: z.string().nullable(), outcome: z.enum(["PENDING", "HIRED", "DECLINED"]).nullable(), rejection_reason_name: z.string().nullable(), rejected_at: z.iso.datetime().nullable(), remote_url: z.url().nullable(), changed_at: z.iso.datetime(), remote_created_at: z.iso.datetime().nullable(), remote_updated_at: z.iso.datetime().nullable(), current_stage: z.object({ id: z.string(), name: z.string().nullable(), remote_id: z.string().nullable(), index: z.number().int().nullable() }).nullable(), job: z.object({ id: z.string(), name: z.string().nullable(), remote_id: z.string() }).nullable() })), tags: z.array(z.object({ id: z.string(), name: z.string().nullable(), remote_id: z.string().nullable() })) })) }) });

export type PostAtsCandidatesPositiveResponse = z.infer<typeof PostAtsCandidatesPositiveResponse>;
export const PostAtsCandidatesPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ id: z.string(), remote_id: z.string(), first_name: z.string().nullable(), last_name: z.string().nullable(), company: z.string().nullable(), title: z.string().nullable(), confidential: z.boolean().nullable(), source: z.string().nullable(), phone_numbers: z.array(z.object({ phone_number: z.string(), type: z.string().nullable().optional() })).default([]).nullable().default([]), email_addresses: z.array(z.object({ email_address: z.string().regex(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$")).nullable().optional(), type: z.string().nullable() })).default([]).nullable().default([]), social_media: z.array(z.object({ link: z.string().nullable(), type: z.string().nullable(), username: z.string().nullable() }).partial()).default([]).nullable().default([]), location: z.object({ city: z.string().nullable(), country: z.string().nullable(), raw: z.string().nullable(), state: z.string().nullable(), street_1: z.string().nullable(), street_2: z.string().nullable(), zip_code: z.string().nullable() }).partial().nullable().optional(), custom_fields: z.record(z.string(), z.unknown()).nullable(), integration_fields: z.array(z.object({ id: z.string(), key: z.string(), type: z.enum(["DEFAULT", "CUSTOM"]), value: z.null().optional(), label: z.string().nullable() })), remote_url: z.url().nullable(), remote_created_at: z.iso.datetime().nullable(), remote_updated_at: z.iso.datetime().nullable(), remote_data: z.record(z.string(), z.unknown()).nullable(), changed_at: z.iso.datetime(), remote_deleted_at: z.iso.datetime().nullable(), applications: z.array(z.object({ id: z.string(), remote_id: z.string().nullable(), outcome: z.enum(["PENDING", "HIRED", "DECLINED"]).nullable(), rejection_reason_name: z.string().nullable(), rejected_at: z.iso.datetime().nullable(), remote_url: z.url().nullable(), changed_at: z.iso.datetime(), remote_created_at: z.iso.datetime().nullable(), remote_updated_at: z.iso.datetime().nullable(), current_stage: z.object({ id: z.string(), name: z.string().nullable(), remote_id: z.string().nullable(), index: z.number().int().nullable() }).nullable(), job: z.object({ id: z.string(), name: z.string().nullable(), remote_id: z.string() }).nullable() })), tags: z.array(z.object({ id: z.string(), name: z.string().nullable(), remote_id: z.string().nullable() })) }), warnings: z.array(z.object({ message: z.string() })) });

export type PostAtsCandidatesRequestBody = z.infer<typeof PostAtsCandidatesRequestBody>;
export const PostAtsCandidatesRequestBody = z.object({ candidate: z.object({ first_name: z.string(), last_name: z.string(), email_address: z.email(), additional_email_addresses: z.array(z.object({ type: z.enum(["PERSONAL", "WORK", "OTHER"]), email_address: z.email() })).optional(), company: z.string().optional(), title: z.string().optional(), phone_number: z.string().optional(), additional_phone_numbers: z.array(z.object({ type: z.enum(["PERSONAL", "WORK", "OTHER"]), phone_number: z.string() })).optional(), location: z.object({ city: z.string().optional(), country: z.string().regex(new RegExp("^[A-Z]{2}$")), state: z.string().optional(), street_1: z.string().optional(), zip_code: z.string().optional() }).optional(), gender: z.enum(["MALE", "FEMALE", "OTHER"]).optional(), availability_date: z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")).optional(), salary_expectations: z.object({ period: z.enum(["MONTH", "YEAR"]), amount: z.number().min(-1.7976931348623157e+308) }).optional(), social_links: z.array(z.object({ url: z.url() })).default([]) }), application: z.object({ job_id: z.string(), stage_id: z.string().optional() }), screening_question_answers: z.array(z.object({ question_id: z.string(), answer: z.union([z.string(), z.boolean(), z.number().min(-1.7976931348623157e+308), z.array(z.string()), z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")), z.object({ name: z.string(), content_type: z.string().regex(new RegExp("^[\\w.-]+\\/[\\w.-]+$")).optional(), data_url: z.url().optional(), data: z.string().optional() })]) })).optional(), attachments: z.array(z.object({ name: z.string(), content_type: z.string().regex(new RegExp("^[\\w.-]+\\/[\\w.-]+$")).optional(), data_url: z.url().optional(), data: z.string().optional(), type: z.enum(["CV", "COVER_LETTER", "OTHER"]) })).default([]), source: z.object({ name: z.string(), unified_key: z.string(), id: z.string() }).partial().optional(), sourced_by: z.object({ user_id: z.string() }).optional(), gdpr_consent: z.object({ expires_at: z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")), given: z.boolean() }).partial().optional(), remote_fields: z.object({ successfactors: z.object({ Candidate: z.record(z.string(), z.unknown()), JobApplication: z.record(z.string(), z.unknown()), copyJobApplicationAttachments: z.boolean(), update_existing_candidate: z.boolean().nullable() }).partial(), personio: z.object({ application: z.record(z.string(), z.unknown()) }).partial(), talentsoft: z.object({ applicant: z.record(z.string(), z.unknown()), application: z.record(z.string(), z.unknown()) }).partial(), teamtailor: z.object({ candidate: z.record(z.string(), z.unknown()), application: z.object({ attributes: z.record(z.string(), z.unknown()) }).partial() }).partial(), greenhouse: z.object({ candidate: z.record(z.string(), z.unknown()), application: z.record(z.string(), z.unknown()) }).partial(), lever: z.object({ candidate: z.record(z.string(), z.unknown()) }).partial(), workable: z.object({ candidate: z.record(z.string(), z.unknown()) }).partial(), workday: z.object({ Candidate_Data: z.object({ Name_Detail_Data: z.object({ Middle_Name: z.string(), Social_Suffix_Reference: z.object({ Predefined_Name_Component_ID: z.string() }) }).partial(), Language_Reference: z.object({ WID: z.string() }), Job_Application_Data: z.object({ Job_Applied_To_Data: z.object({ Global_Personal_Information_Data: z.object({ Date_of_Birth: z.string() }).partial() }).partial(), Resume_Data: z.object({ Education_Data: z.array(z.object({ School_Name: z.string(), First_Year_Attended: z.number().min(-1.7976931348623157e+308), Last_Year_Attended: z.number().min(-1.7976931348623157e+308), Field_of_Study_Reference: z.object({ WID: z.string() }), Degree_Reference: z.object({ WID: z.string() }), Grade_Average: z.string() }).partial()), Skill_Data: z.array(z.object({ Skill_Name: z.string() }).partial()), Language_Data: z.array(z.object({ Language_Reference: z.object({ WID: z.string() }).partial(), Language: z.object({ Native: z.boolean().optional(), Language_Ability: z.array(z.object({ Language_Ability_Data: z.object({ Language_Proficiency_Reference: z.object({ WID: z.string() }), Language_Ability_Type_Reference: z.object({ WID: z.string() }) }).partial() }).partial()) }) }).partial()), Experience_Data: z.array(z.object({ Company_Name: z.string(), Title: z.string(), Location: z.string().optional(), Start_Date: z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")), End_Date: z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")).optional(), Currently_Work_Here: z.boolean().optional(), Description: z.string().optional() })) }).partial() }).partial(), Contact_Data: z.object({ Location_Data: z.object({ Address_Line_1: z.string(), Address_Line_2: z.string(), Region_Subdivision_1: z.string(), Country_Region_Reference: z.object({ Country_Region_ID: z.string() }), Country_City_Reference: z.object({ WID: z.string() }) }).partial() }).partial(), Worker_Reference: z.object({ WID: z.string(), Employee_ID: z.string() }).partial() }).partial(), Override_Source_Reference_WID: z.string() }).partial(), zohorecruit: z.object({ candidate: z.record(z.string(), z.unknown()) }).partial(), bullhorn: z.object({ candidate: z.record(z.string(), z.unknown()), job_submission: z.record(z.string(), z.unknown()) }).partial(), smartrecruiters: z.object({ candidate_with_questions: z.record(z.string(), z.unknown()), candidate_without_questions: z.record(z.string(), z.unknown()), candidate: z.record(z.string(), z.unknown()), consent_decisions: z.object({ SINGLE: z.boolean(), SMART_RECRUIT: z.boolean(), SMART_CRM: z.boolean(), SMART_MESSAGE_SMS: z.boolean(), SMART_MESSAGE_WHATSAPP: z.boolean() }).partial() }).partial(), talentadore: z.object({ applications: z.record(z.string(), z.unknown()) }).partial(), guidecom: z.object({ candidate: z.record(z.string(), z.unknown()) }).partial(), dvinci: z.object({ application: z.record(z.string(), z.unknown()), candidate: z.record(z.string(), z.unknown()) }).partial(), hrworks: z.object({ jobApplication: z.record(z.string(), z.unknown()) }).partial(), jobylon: z.object({ application: z.object({ message: z.string() }).partial() }).partial(), avature: z.object({ workflow: z.object({ step: z.object({ id: z.number().int() }) }).partial() }).partial(), recruitee: z.object({ candidate: z.object({ cover_letter_text: z.string() }).partial() }).partial(), rexx: z.object({ candidate: z.record(z.string(), z.unknown()) }).partial(), umantis: z.object({ person: z.record(z.string(), z.unknown()) }).partial(), piloga: z.object({ candidate: z.object({ street: z.string() }).partial() }).partial(), pinpoint: z.object({ candidate: z.record(z.string(), z.unknown()) }).partial(), covetorest: z.object({ candidate: z.object({ mandant: z.number().min(-1.7976931348623157e+308) }).partial() }).partial() }).partial().and(z.object({ greenhouse: z.object({ post_headers: z.object({ "On-Behalf-Of": z.string().nullable() }).partial() }).partial(), workable: z.object({ on_behalf_of_user_remote_id: z.string() }).partial() }).partial()).optional() });

export type GetAtsCandidatesCandidateIdAttachmentsParameterCandidateId = z.infer<typeof GetAtsCandidatesCandidateIdAttachmentsParameterCandidateId>;
export const GetAtsCandidatesCandidateIdAttachmentsParameterCandidateId = z.string();

export type GetAtsCandidatesCandidateIdAttachmentsPositiveResponse = z.infer<typeof GetAtsCandidatesCandidateIdAttachmentsPositiveResponse>;
export const GetAtsCandidatesCandidateIdAttachmentsPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ results: z.array(z.object({ id: z.string().min(24).max(24).regex(new RegExp("^[1-9A-HJ-NP-Za-km-z]+$")), application_id: z.string().min(24).max(24).regex(new RegExp("^[1-9A-HJ-NP-Za-km-z]+$")).nullable(), candidate_id: z.string().min(24).max(24).regex(new RegExp("^[1-9A-HJ-NP-Za-km-z]+$")), type: z.enum(["CV", "COVER_LETTER", "OTHER"]), remote_id: z.string(), data_url: z.string(), file_name: z.string(), content_type: z.string(), remote_created_at: z.iso.datetime().nullable(), remote_updated_at: z.iso.datetime().nullable() })) }), warnings: z.array(z.object({ message: z.string() })) });

export type PostAtsCandidatesCandidateIdAttachmentsParameterCandidateId = z.infer<typeof PostAtsCandidatesCandidateIdAttachmentsParameterCandidateId>;
export const PostAtsCandidatesCandidateIdAttachmentsParameterCandidateId = z.string();

export type PostAtsCandidatesCandidateIdAttachmentsPositiveResponse = z.infer<typeof PostAtsCandidatesCandidateIdAttachmentsPositiveResponse>;
export const PostAtsCandidatesCandidateIdAttachmentsPositiveResponse = z.object({ status: z.literal("success"), data: z.record(z.string(), z.unknown()), warnings: z.array(z.object({ message: z.string() })) });

export type PostAtsCandidatesCandidateIdAttachmentsRequestBody = z.infer<typeof PostAtsCandidatesCandidateIdAttachmentsRequestBody>;
export const PostAtsCandidatesCandidateIdAttachmentsRequestBody = z.object({ attachment: z.object({ name: z.string(), content_type: z.string().regex(new RegExp("^[\\w.-]+\\/[\\w.-]+$")).optional(), data_url: z.url().optional(), data: z.string().optional(), type: z.enum(["CV", "COVER_LETTER", "OTHER"]) }), remote_fields: z.object({ greenhouse: z.object({ post_headers: z.object({ "On-Behalf-Of": z.string().nullable() }).partial() }).partial(), workable: z.object({ on_behalf_of_user_remote_id: z.string() }).partial() }).partial().optional() });

export type PostAtsCandidatesCandidateIdResultLinksParameterCandidateId = z.infer<typeof PostAtsCandidatesCandidateIdResultLinksParameterCandidateId>;
export const PostAtsCandidatesCandidateIdResultLinksParameterCandidateId = z.string();

export type PostAtsCandidatesCandidateIdResultLinksPositiveResponse = z.infer<typeof PostAtsCandidatesCandidateIdResultLinksPositiveResponse>;
export const PostAtsCandidatesCandidateIdResultLinksPositiveResponse = z.object({ status: z.literal("success"), data: z.record(z.string(), z.unknown()), warnings: z.array(z.object({ message: z.string() })) });

export type PostAtsCandidatesCandidateIdResultLinksRequestBody = z.infer<typeof PostAtsCandidatesCandidateIdResultLinksRequestBody>;
export const PostAtsCandidatesCandidateIdResultLinksRequestBody = z.object({ label: z.string(), url: z.url(), details: z.object({ custom_field_name_prefix: z.string(), attributes: z.array(z.object({ key: z.string(), value: z.string() })) }).optional(), remote_fields: z.object({ icims: z.object({ assessment_package_id: z.string() }).partial(), oracle: z.object({ override_document_category: z.enum(["IRC_CANDIDATE_RESUME", "IRC_CANDIDATE_COVERLETTER", "MISC", "IRC_INTERNAL"]), multi_post_to_all_current_applications: z.boolean() }).partial() }).partial().and(z.object({ greenhouse: z.object({ post_headers: z.object({ "On-Behalf-Of": z.string().nullable() }).partial() }).partial(), workable: z.object({ on_behalf_of_user_remote_id: z.string() }).partial() }).partial()).optional() });

export type PostAtsCandidatesCandidateIdTagsParameterCandidateId = z.infer<typeof PostAtsCandidatesCandidateIdTagsParameterCandidateId>;
export const PostAtsCandidatesCandidateIdTagsParameterCandidateId = z.string();

export type PostAtsCandidatesCandidateIdTagsPositiveResponse = z.infer<typeof PostAtsCandidatesCandidateIdTagsPositiveResponse>;
export const PostAtsCandidatesCandidateIdTagsPositiveResponse = z.object({ status: z.literal("success"), data: z.record(z.string(), z.unknown()), warnings: z.array(z.object({ message: z.string() })) });

export type PostAtsCandidatesCandidateIdTagsRequestBody = z.infer<typeof PostAtsCandidatesCandidateIdTagsRequestBody>;
export const PostAtsCandidatesCandidateIdTagsRequestBody = z.object({ tag: z.object({ name: z.string().min(1) }), remote_fields: z.object({ greenhouse: z.object({ post_headers: z.object({ "On-Behalf-Of": z.string().nullable() }).partial() }).partial(), workable: z.object({ on_behalf_of_user_remote_id: z.string() }).partial() }).partial().optional() });

export type DeleteAtsCandidatesCandidateIdTagsParameterCandidateId = z.infer<typeof DeleteAtsCandidatesCandidateIdTagsParameterCandidateId>;
export const DeleteAtsCandidatesCandidateIdTagsParameterCandidateId = z.string();

export type DeleteAtsCandidatesCandidateIdTagsPositiveResponse = z.infer<typeof DeleteAtsCandidatesCandidateIdTagsPositiveResponse>;
export const DeleteAtsCandidatesCandidateIdTagsPositiveResponse = z.object({ status: z.literal("success"), data: z.record(z.string(), z.unknown()), warnings: z.array(z.object({ message: z.string() })) });

export type DeleteAtsCandidatesCandidateIdTagsRequestBody = z.infer<typeof DeleteAtsCandidatesCandidateIdTagsRequestBody>;
export const DeleteAtsCandidatesCandidateIdTagsRequestBody = z.object({ tag: z.object({ name: z.string() }), remote_fields: z.object({ greenhouse: z.object({ post_headers: z.object({ "On-Behalf-Of": z.string().nullable() }).partial() }).partial(), workable: z.object({ on_behalf_of_user_remote_id: z.string() }).partial() }).partial().optional() });

export type GetAtsTagsParameterCursor = z.infer<typeof GetAtsTagsParameterCursor>;
export const GetAtsTagsParameterCursor = z.string();

export type GetAtsTagsParameterPageSize = z.infer<typeof GetAtsTagsParameterPageSize>;
export const GetAtsTagsParameterPageSize = z.number().int().min(1).max(250).default(100);

export type GetAtsTagsParameterUpdatedAfter = z.infer<typeof GetAtsTagsParameterUpdatedAfter>;
export const GetAtsTagsParameterUpdatedAfter = z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"));

export type GetAtsTagsParameterIncludeDeleted = z.infer<typeof GetAtsTagsParameterIncludeDeleted>;
export const GetAtsTagsParameterIncludeDeleted = z.enum(["true", "false"]).default("false");

export type GetAtsTagsParameterIgnoreUnsupportedFilters = z.infer<typeof GetAtsTagsParameterIgnoreUnsupportedFilters>;
export const GetAtsTagsParameterIgnoreUnsupportedFilters = z.enum(["true", "false"]).default("false");

export type GetAtsTagsParameterIds = z.infer<typeof GetAtsTagsParameterIds>;
export const GetAtsTagsParameterIds = z.string();

export type GetAtsTagsParameterRemoteIds = z.infer<typeof GetAtsTagsParameterRemoteIds>;
export const GetAtsTagsParameterRemoteIds = z.string();

export type GetAtsTagsPositiveResponse = z.infer<typeof GetAtsTagsPositiveResponse>;
export const GetAtsTagsPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ next: z.string().nullable(), results: z.array(z.object({ id: z.string(), remote_id: z.string().nullable(), name: z.string().nullable(), remote_data: z.record(z.string(), z.unknown()).nullable(), changed_at: z.iso.datetime(), remote_deleted_at: z.iso.datetime().nullable() })) }) });

export type GetAtsApplicationStagesParameterCursor = z.infer<typeof GetAtsApplicationStagesParameterCursor>;
export const GetAtsApplicationStagesParameterCursor = z.string();

export type GetAtsApplicationStagesParameterPageSize = z.infer<typeof GetAtsApplicationStagesParameterPageSize>;
export const GetAtsApplicationStagesParameterPageSize = z.number().int().min(1).max(250).default(100);

export type GetAtsApplicationStagesParameterUpdatedAfter = z.infer<typeof GetAtsApplicationStagesParameterUpdatedAfter>;
export const GetAtsApplicationStagesParameterUpdatedAfter = z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"));

export type GetAtsApplicationStagesParameterIncludeDeleted = z.infer<typeof GetAtsApplicationStagesParameterIncludeDeleted>;
export const GetAtsApplicationStagesParameterIncludeDeleted = z.enum(["true", "false"]).default("false");

export type GetAtsApplicationStagesParameterIgnoreUnsupportedFilters = z.infer<typeof GetAtsApplicationStagesParameterIgnoreUnsupportedFilters>;
export const GetAtsApplicationStagesParameterIgnoreUnsupportedFilters = z.enum(["true", "false"]).default("false");

export type GetAtsApplicationStagesParameterIds = z.infer<typeof GetAtsApplicationStagesParameterIds>;
export const GetAtsApplicationStagesParameterIds = z.string();

export type GetAtsApplicationStagesParameterRemoteIds = z.infer<typeof GetAtsApplicationStagesParameterRemoteIds>;
export const GetAtsApplicationStagesParameterRemoteIds = z.string();

export type GetAtsApplicationStagesPositiveResponse = z.infer<typeof GetAtsApplicationStagesPositiveResponse>;
export const GetAtsApplicationStagesPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ next: z.string().nullable(), results: z.array(z.object({ id: z.string(), remote_id: z.string().nullable(), name: z.string().nullable(), remote_data: z.record(z.string(), z.unknown()).nullable(), changed_at: z.iso.datetime(), remote_deleted_at: z.iso.datetime().nullable() })) }) });

export type GetAtsJobsParameterCursor = z.infer<typeof GetAtsJobsParameterCursor>;
export const GetAtsJobsParameterCursor = z.string();

export type GetAtsJobsParameterPageSize = z.infer<typeof GetAtsJobsParameterPageSize>;
export const GetAtsJobsParameterPageSize = z.number().int().min(1).max(250).default(100);

export type GetAtsJobsParameterUpdatedAfter = z.infer<typeof GetAtsJobsParameterUpdatedAfter>;
export const GetAtsJobsParameterUpdatedAfter = z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"));

export type GetAtsJobsParameterIncludeDeleted = z.infer<typeof GetAtsJobsParameterIncludeDeleted>;
export const GetAtsJobsParameterIncludeDeleted = z.enum(["true", "false"]).default("false");

export type GetAtsJobsParameterIgnoreUnsupportedFilters = z.infer<typeof GetAtsJobsParameterIgnoreUnsupportedFilters>;
export const GetAtsJobsParameterIgnoreUnsupportedFilters = z.enum(["true", "false"]).default("false");

export type GetAtsJobsParameterIds = z.infer<typeof GetAtsJobsParameterIds>;
export const GetAtsJobsParameterIds = z.string();

export type GetAtsJobsParameterRemoteIds = z.infer<typeof GetAtsJobsParameterRemoteIds>;
export const GetAtsJobsParameterRemoteIds = z.string();

export type GetAtsJobsParameterJobCodes = z.infer<typeof GetAtsJobsParameterJobCodes>;
export const GetAtsJobsParameterJobCodes = z.string();

export type GetAtsJobsParameterPostUrl = z.infer<typeof GetAtsJobsParameterPostUrl>;
export const GetAtsJobsParameterPostUrl = z.string();

export type GetAtsJobsParameterStatus = z.infer<typeof GetAtsJobsParameterStatus>;
export const GetAtsJobsParameterStatus = z.enum(["OPEN", "CLOSED", "DRAFT", "ARCHIVED"]);

export type GetAtsJobsParameterStatuses = z.infer<typeof GetAtsJobsParameterStatuses>;
export const GetAtsJobsParameterStatuses = z.string();

export type GetAtsJobsParameterEmploymentTypes = z.infer<typeof GetAtsJobsParameterEmploymentTypes>;
export const GetAtsJobsParameterEmploymentTypes = z.string();

export type GetAtsJobsParameterVisibilities = z.infer<typeof GetAtsJobsParameterVisibilities>;
export const GetAtsJobsParameterVisibilities = z.string();

export type GetAtsJobsParameterRemoteCreatedAfter = z.infer<typeof GetAtsJobsParameterRemoteCreatedAfter>;
export const GetAtsJobsParameterRemoteCreatedAfter = z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"));

export type GetAtsJobsParameterNameContains = z.infer<typeof GetAtsJobsParameterNameContains>;
export const GetAtsJobsParameterNameContains = z.string();

export type GetAtsJobsPositiveResponse = z.infer<typeof GetAtsJobsPositiveResponse>;
export const GetAtsJobsPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ next: z.string().nullable(), results: z.array(z.object({ id: z.string(), remote_id: z.string(), name: z.string().nullable(), job_code: z.string().nullable(), description: z.string().nullable(), confidential: z.boolean().nullable(), weekly_hours: z.number().min(-1.7976931348623157e+308).nullable(), employment_type: z.union([z.enum(["FULL_TIME", "PART_TIME", "CONTRACT", "SEASONAL", "INTERNSHIP"]), z.string(), z.null()]).optional(), status: z.union([z.enum(["OPEN", "CLOSED", "DRAFT", "ARCHIVED"]), z.string(), z.null()]).optional(), visibility: z.union([z.enum(["PUBLIC", "INTERNAL", "UNLISTED", "CONFIDENTIAL"]), z.string(), z.null()]).optional(), category: z.string().nullable(), department: z.string().nullable(), post_url: z.string().nullable(), experience_level: z.string().nullable(), remote_work_status: z.union([z.enum(["REMOTE", "HYBRID", "TEMPORARY", "ON_SITE"]), z.string(), z.null()]).optional(), salary_amount: z.number().min(-1.7976931348623157e+308).nullable(), salary_amount_from: z.number().min(-1.7976931348623157e+308).nullable(), salary_amount_to: z.number().min(-1.7976931348623157e+308).nullable(), salary_currency: z.string().nullable(), salary_period: z.union([z.enum(["YEAR", "MONTH", "TWO_WEEKS", "WEEK", "DAY", "HOUR"]), z.string(), z.null()]).optional(), location: z.object({ city: z.string().nullable(), country: z.string().nullable(), raw: z.string().nullable(), state: z.string().nullable(), street_1: z.string().nullable(), street_2: z.string().nullable(), zip_code: z.string().nullable() }).partial().nullable().optional(), custom_fields: z.record(z.string(), z.unknown()).nullable(), integration_fields: z.array(z.object({ id: z.string(), key: z.string(), type: z.enum(["DEFAULT", "CUSTOM"]), value: z.null().optional(), label: z.string().nullable() })), remote_url: z.url().nullable(), opened_at: z.iso.datetime().nullable(), closed_at: z.iso.datetime().nullable(), remote_created_at: z.iso.datetime().nullable(), remote_updated_at: z.iso.datetime().nullable(), contact_id: z.string().nullable(), remote_data: z.record(z.string(), z.unknown()).nullable(), changed_at: z.iso.datetime(), remote_deleted_at: z.iso.datetime().nullable(), stages: z.array(z.object({ id: z.string(), remote_id: z.string().nullable(), name: z.string().nullable(), remote_data: z.record(z.string(), z.unknown()).nullable(), index: z.number().int().nullable().optional() })), screening_questions: z.array(z.object({ id: z.string(), remote_id: z.string().nullable(), title: z.string().nullable(), description: z.string().nullable(), format: z.union([z.object({ display_type: z.enum(["SINGLE_LINE", "MULTI_LINE", "EMAIL", "URL"]).nullable().optional(), max_length: z.number().int().nullable().optional(), type: z.literal("TEXT") }), z.object({ display_type: z.enum(["SLIDER", "FIELD"]).default("FIELD").nullable().default("FIELD"), max: z.number().min(-1.7976931348623157e+308).nullable().optional(), min: z.number().min(-1.7976931348623157e+308).nullable().optional(), type: z.literal("NUMBER") }), z.object({ accepted_mime_types: z.array(z.string()).nullable().optional(), max_file_size_bytes: z.number().int().nullable().optional(), type: z.literal("FILE") }), z.object({ display_type: z.enum(["DROPDOWN", "RADIO"]).nullable().optional(), options: z.array(z.object({ id: z.string(), remote_id: z.string().nullable().optional(), name: z.string() })), type: z.literal("SINGLE_SELECT") }), z.object({ type: z.literal("BOOLEAN") }), z.object({ type: z.literal("DATE") }), z.object({ options: z.array(z.object({ id: z.string(), remote_id: z.string().nullable().optional(), name: z.string() })), type: z.literal("MULTI_SELECT") }), z.object({ type: z.literal("INFORMATION") }), z.object({ raw_question: z.unknown().optional(), type: z.literal("UNKNOWN") }), z.null()]).optional(), category: z.enum(["EEO", "DEMOGRAPHIC"]).nullable(), index: z.number().int().nullable().optional(), required: z.boolean().nullable(), precondition_question_id: z.string().min(24).max(24).regex(new RegExp("^[1-9A-HJ-NP-Za-km-z]+$")).nullable().optional(), precondition_options: z.union([z.array(z.string().min(24).max(24).regex(new RegExp("^[1-9A-HJ-NP-Za-km-z]+$"))), z.array(z.boolean()), z.null()]).default(null) })), job_postings: z.array(z.object({ id: z.string(), remote_id: z.string().nullable(), title: z.string().nullable(), description_html: z.string().nullable(), status: z.enum(["ACTIVE", "INACTIVE", "DRAFT"]).nullable(), visibility: z.enum(["PUBLIC", "INTERNAL", "UNLISTED"]).nullable(), url: z.string().nullable(), remote_data: z.record(z.string(), z.unknown()).nullable() })), hiring_team: z.array(z.object({ id: z.string(), remote_id: z.string().nullable(), first_name: z.string().nullable(), last_name: z.string().nullable(), email: z.string().regex(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$")).nullable().optional(), hiring_team_roles: z.array(z.enum(["RECRUITER", "HIRING_MANAGER", "COORDINATOR", "SOURCER", "INTERVIEWER"])), job_roles: z.array(z.object({ remote_id: z.string().nullable(), remote_label: z.string().nullable(), scope: z.enum(["SYSTEM", "JOB"]).nullable(), unified_type: z.enum(["HIRING_MANAGER", "RECRUITER", "COORDINATOR", "SOURCER", "INTERVIEWER", "ADMIN"]).nullable() })) })) })) }) });

export type PostAtsJobsJobIdApplicationsParameterJobId = z.infer<typeof PostAtsJobsJobIdApplicationsParameterJobId>;
export const PostAtsJobsJobIdApplicationsParameterJobId = z.string();

export type PostAtsJobsJobIdApplicationsPositiveResponse = z.infer<typeof PostAtsJobsJobIdApplicationsPositiveResponse>;
export const PostAtsJobsJobIdApplicationsPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ id: z.string(), remote_id: z.string().nullable(), outcome: z.enum(["PENDING", "HIRED", "DECLINED"]).nullable(), rejection_reason_name: z.string().nullable(), rejected_at: z.iso.datetime().nullable(), current_stage_id: z.string().nullable(), job_id: z.string().nullable(), candidate_id: z.string().nullable(), screening_question_answers: z.array(z.union([z.object({ answer: z.object({ content: z.string().nullable() }), question: z.object({ remote_id: z.string().nullable(), title: z.string(), type: z.literal("TEXT") }) }), z.object({ answer: z.object({ choice: z.string().nullable() }), question: z.object({ remote_id: z.string().nullable(), title: z.string(), type: z.literal("SINGLE_SELECT") }) }), z.object({ answer: z.object({ choices: z.array(z.string()).default([]) }).partial(), question: z.object({ remote_id: z.string().nullable(), title: z.string(), type: z.literal("MULTI_SELECT") }) }), z.object({ answer: z.object({ checked: z.boolean().nullable() }), question: z.object({ remote_id: z.string().nullable(), title: z.string(), type: z.literal("BOOLEAN") }) }), z.object({ answer: z.object({ number: z.number().min(-1.7976931348623157e+308).nullable() }), question: z.object({ remote_id: z.string().nullable(), title: z.string(), type: z.literal("NUMBER") }) }), z.object({ answer: z.object({ date: z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).nullable() }), question: z.object({ remote_id: z.string().nullable(), title: z.string(), type: z.literal("DATE") }) }), z.object({ answer: z.object({ raw: z.null() }).partial(), question: z.object({ remote_id: z.string().nullable(), title: z.string(), type: z.literal("UNKNOWN") }) })])).default([]).nullable().default([]), custom_fields: z.record(z.string(), z.unknown()).nullable(), integration_fields: z.array(z.object({ id: z.string(), key: z.string(), type: z.enum(["DEFAULT", "CUSTOM"]), value: z.null().optional(), label: z.string().nullable() })), remote_url: z.url().nullable(), changed_at: z.iso.datetime(), remote_deleted_at: z.iso.datetime().nullable(), remote_created_at: z.iso.datetime().nullable(), remote_updated_at: z.iso.datetime().nullable(), remote_data: z.record(z.string(), z.unknown()).nullable(), current_stage: z.object({ id: z.string(), name: z.string().nullable(), remote_id: z.string().nullable(), index: z.number().int().nullable() }).nullable(), job: z.object({ id: z.string(), name: z.string().nullable(), remote_id: z.string() }).nullable(), candidate: z.object({ id: z.string(), remote_id: z.string(), first_name: z.string().nullable(), last_name: z.string().nullable(), company: z.string().nullable(), title: z.string().nullable(), confidential: z.boolean().nullable(), source: z.string().nullable(), phone_numbers: z.array(z.object({ phone_number: z.string(), type: z.string().nullable().optional() })).default([]).nullable().default([]), email_addresses: z.array(z.object({ email_address: z.string().regex(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$")).nullable().optional(), type: z.string().nullable() })).default([]).nullable().default([]), social_media: z.array(z.object({ link: z.string().nullable(), type: z.string().nullable(), username: z.string().nullable() }).partial()).default([]).nullable().default([]), location: z.object({ city: z.string().nullable(), country: z.string().nullable(), raw: z.string().nullable(), state: z.string().nullable(), street_1: z.string().nullable(), street_2: z.string().nullable(), zip_code: z.string().nullable() }).partial().nullable().optional(), custom_fields: z.record(z.string(), z.unknown()).nullable(), integration_fields: z.array(z.object({ id: z.string(), key: z.string(), type: z.enum(["DEFAULT", "CUSTOM"]), value: z.null().optional(), label: z.string().nullable() })), remote_url: z.url().nullable(), remote_created_at: z.iso.datetime().nullable(), remote_updated_at: z.iso.datetime().nullable(), remote_data: z.record(z.string(), z.unknown()).nullable(), changed_at: z.iso.datetime(), remote_deleted_at: z.iso.datetime().nullable(), tags: z.array(z.object({ id: z.string(), name: z.string().nullable(), remote_id: z.string().nullable() })) }).nullable() }), warnings: z.array(z.object({ message: z.string() })) });

export type PostAtsJobsJobIdApplicationsRequestBody = z.infer<typeof PostAtsJobsJobIdApplicationsRequestBody>;
export const PostAtsJobsJobIdApplicationsRequestBody = z.object({ stage_id: z.string().optional(), candidate: z.object({ first_name: z.string(), last_name: z.string(), email_address: z.email(), additional_email_addresses: z.array(z.object({ type: z.enum(["PERSONAL", "WORK", "OTHER"]), email_address: z.email() })).optional(), company: z.string().optional(), title: z.string().optional(), phone_number: z.string().optional(), additional_phone_numbers: z.array(z.object({ type: z.enum(["PERSONAL", "WORK", "OTHER"]), phone_number: z.string() })).optional(), location: z.object({ city: z.string().optional(), country: z.string().regex(new RegExp("^[A-Z]{2}$")), state: z.string().optional(), street_1: z.string().optional(), zip_code: z.string().optional() }).optional(), gender: z.enum(["MALE", "FEMALE", "OTHER"]).optional(), availability_date: z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")).optional(), salary_expectations: z.object({ period: z.enum(["MONTH", "YEAR"]), amount: z.number().min(-1.7976931348623157e+308) }).optional(), social_links: z.array(z.object({ url: z.url() })).default([]) }), attachments: z.array(z.object({ name: z.string(), content_type: z.string().regex(new RegExp("^[\\w.-]+\\/[\\w.-]+$")).optional(), data_url: z.url().optional(), data: z.string().optional(), type: z.enum(["CV", "COVER_LETTER", "OTHER"]) })).default([]), source: z.object({ name: z.string(), unified_key: z.string(), id: z.string() }).partial().optional(), sourced_by: z.object({ user_id: z.string() }).optional(), gdpr_consent: z.object({ expires_at: z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")), given: z.boolean() }).partial().optional(), remote_fields: z.object({ successfactors: z.object({ Candidate: z.record(z.string(), z.unknown()), JobApplication: z.record(z.string(), z.unknown()), copyJobApplicationAttachments: z.boolean(), update_existing_candidate: z.boolean().nullable() }).partial(), personio: z.object({ application: z.record(z.string(), z.unknown()) }).partial(), talentsoft: z.object({ applicant: z.record(z.string(), z.unknown()), application: z.record(z.string(), z.unknown()) }).partial(), teamtailor: z.object({ candidate: z.record(z.string(), z.unknown()), application: z.object({ attributes: z.record(z.string(), z.unknown()) }).partial() }).partial(), greenhouse: z.object({ candidate: z.record(z.string(), z.unknown()), application: z.record(z.string(), z.unknown()) }).partial(), lever: z.object({ candidate: z.record(z.string(), z.unknown()) }).partial(), workable: z.object({ candidate: z.record(z.string(), z.unknown()) }).partial(), workday: z.object({ Candidate_Data: z.object({ Name_Detail_Data: z.object({ Middle_Name: z.string(), Social_Suffix_Reference: z.object({ Predefined_Name_Component_ID: z.string() }) }).partial(), Language_Reference: z.object({ WID: z.string() }), Job_Application_Data: z.object({ Job_Applied_To_Data: z.object({ Global_Personal_Information_Data: z.object({ Date_of_Birth: z.string() }).partial() }).partial(), Resume_Data: z.object({ Education_Data: z.array(z.object({ School_Name: z.string(), First_Year_Attended: z.number().min(-1.7976931348623157e+308), Last_Year_Attended: z.number().min(-1.7976931348623157e+308), Field_of_Study_Reference: z.object({ WID: z.string() }), Degree_Reference: z.object({ WID: z.string() }), Grade_Average: z.string() }).partial()), Skill_Data: z.array(z.object({ Skill_Name: z.string() }).partial()), Language_Data: z.array(z.object({ Language_Reference: z.object({ WID: z.string() }).partial(), Language: z.object({ Native: z.boolean().optional(), Language_Ability: z.array(z.object({ Language_Ability_Data: z.object({ Language_Proficiency_Reference: z.object({ WID: z.string() }), Language_Ability_Type_Reference: z.object({ WID: z.string() }) }).partial() }).partial()) }) }).partial()), Experience_Data: z.array(z.object({ Company_Name: z.string(), Title: z.string(), Location: z.string().optional(), Start_Date: z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")), End_Date: z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")).optional(), Currently_Work_Here: z.boolean().optional(), Description: z.string().optional() })) }).partial() }).partial(), Contact_Data: z.object({ Location_Data: z.object({ Address_Line_1: z.string(), Address_Line_2: z.string(), Region_Subdivision_1: z.string(), Country_Region_Reference: z.object({ Country_Region_ID: z.string() }), Country_City_Reference: z.object({ WID: z.string() }) }).partial() }).partial(), Worker_Reference: z.object({ WID: z.string(), Employee_ID: z.string() }).partial() }).partial(), Override_Source_Reference_WID: z.string() }).partial(), zohorecruit: z.object({ candidate: z.record(z.string(), z.unknown()) }).partial(), bullhorn: z.object({ candidate: z.record(z.string(), z.unknown()), job_submission: z.record(z.string(), z.unknown()) }).partial(), smartrecruiters: z.object({ candidate_with_questions: z.record(z.string(), z.unknown()), candidate_without_questions: z.record(z.string(), z.unknown()), candidate: z.record(z.string(), z.unknown()), consent_decisions: z.object({ SINGLE: z.boolean(), SMART_RECRUIT: z.boolean(), SMART_CRM: z.boolean(), SMART_MESSAGE_SMS: z.boolean(), SMART_MESSAGE_WHATSAPP: z.boolean() }).partial() }).partial(), talentadore: z.object({ applications: z.record(z.string(), z.unknown()) }).partial(), guidecom: z.object({ candidate: z.record(z.string(), z.unknown()) }).partial(), dvinci: z.object({ application: z.record(z.string(), z.unknown()), candidate: z.record(z.string(), z.unknown()) }).partial(), hrworks: z.object({ jobApplication: z.record(z.string(), z.unknown()) }).partial(), jobylon: z.object({ application: z.object({ message: z.string() }).partial() }).partial(), avature: z.object({ workflow: z.object({ step: z.object({ id: z.number().int() }) }).partial() }).partial(), recruitee: z.object({ candidate: z.object({ cover_letter_text: z.string() }).partial() }).partial(), rexx: z.object({ candidate: z.record(z.string(), z.unknown()) }).partial(), umantis: z.object({ person: z.record(z.string(), z.unknown()) }).partial(), piloga: z.object({ candidate: z.object({ street: z.string() }).partial() }).partial(), pinpoint: z.object({ candidate: z.record(z.string(), z.unknown()) }).partial(), covetorest: z.object({ candidate: z.object({ mandant: z.number().min(-1.7976931348623157e+308) }).partial() }).partial() }).partial().and(z.object({ greenhouse: z.object({ post_headers: z.object({ "On-Behalf-Of": z.string().nullable() }).partial() }).partial(), workable: z.object({ on_behalf_of_user_remote_id: z.string() }).partial() }).partial()).optional(), screening_question_answers: z.array(z.object({ question_id: z.string(), answer: z.union([z.string(), z.boolean(), z.number().min(-1.7976931348623157e+308), z.array(z.string()), z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")), z.object({ name: z.string(), content_type: z.string().regex(new RegExp("^[\\w.-]+\\/[\\w.-]+$")).optional(), data_url: z.url().optional(), data: z.string().optional() })]) })).optional() });

export type GetAtsUsersParameterCursor = z.infer<typeof GetAtsUsersParameterCursor>;
export const GetAtsUsersParameterCursor = z.string();

export type GetAtsUsersParameterPageSize = z.infer<typeof GetAtsUsersParameterPageSize>;
export const GetAtsUsersParameterPageSize = z.number().int().min(1).max(250).default(100);

export type GetAtsUsersParameterUpdatedAfter = z.infer<typeof GetAtsUsersParameterUpdatedAfter>;
export const GetAtsUsersParameterUpdatedAfter = z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"));

export type GetAtsUsersParameterIncludeDeleted = z.infer<typeof GetAtsUsersParameterIncludeDeleted>;
export const GetAtsUsersParameterIncludeDeleted = z.enum(["true", "false"]).default("false");

export type GetAtsUsersParameterIgnoreUnsupportedFilters = z.infer<typeof GetAtsUsersParameterIgnoreUnsupportedFilters>;
export const GetAtsUsersParameterIgnoreUnsupportedFilters = z.enum(["true", "false"]).default("false");

export type GetAtsUsersParameterIds = z.infer<typeof GetAtsUsersParameterIds>;
export const GetAtsUsersParameterIds = z.string();

export type GetAtsUsersParameterRemoteIds = z.infer<typeof GetAtsUsersParameterRemoteIds>;
export const GetAtsUsersParameterRemoteIds = z.string();

export type GetAtsUsersParameterEmails = z.infer<typeof GetAtsUsersParameterEmails>;
export const GetAtsUsersParameterEmails = z.string();

export type GetAtsUsersPositiveResponse = z.infer<typeof GetAtsUsersPositiveResponse>;
export const GetAtsUsersPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ next: z.string().nullable(), results: z.array(z.object({ id: z.string(), remote_id: z.string().nullable(), first_name: z.string().nullable(), last_name: z.string().nullable(), email: z.string().regex(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$")).nullable().optional(), status: z.enum(["ACTIVE", "INACTIVE"]).nullable(), remote_data: z.record(z.string(), z.unknown()).nullable(), changed_at: z.iso.datetime(), remote_deleted_at: z.iso.datetime().nullable(), system_roles: z.array(z.object({ remote_id: z.string().nullable(), remote_label: z.string().nullable(), scope: z.enum(["SYSTEM", "JOB"]).nullable(), unified_type: z.enum(["HIRING_MANAGER", "RECRUITER", "COORDINATOR", "SOURCER", "INTERVIEWER", "ADMIN"]).nullable() })) })) }) });

export type GetAtsRolesParameterCursor = z.infer<typeof GetAtsRolesParameterCursor>;
export const GetAtsRolesParameterCursor = z.string();

export type GetAtsRolesParameterPageSize = z.infer<typeof GetAtsRolesParameterPageSize>;
export const GetAtsRolesParameterPageSize = z.number().int().min(1).max(250).default(100);

export type GetAtsRolesParameterUpdatedAfter = z.infer<typeof GetAtsRolesParameterUpdatedAfter>;
export const GetAtsRolesParameterUpdatedAfter = z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"));

export type GetAtsRolesParameterIncludeDeleted = z.infer<typeof GetAtsRolesParameterIncludeDeleted>;
export const GetAtsRolesParameterIncludeDeleted = z.enum(["true", "false"]).default("false");

export type GetAtsRolesParameterIgnoreUnsupportedFilters = z.infer<typeof GetAtsRolesParameterIgnoreUnsupportedFilters>;
export const GetAtsRolesParameterIgnoreUnsupportedFilters = z.enum(["true", "false"]).default("false");

export type GetAtsRolesParameterIds = z.infer<typeof GetAtsRolesParameterIds>;
export const GetAtsRolesParameterIds = z.string();

export type GetAtsRolesParameterRemoteIds = z.infer<typeof GetAtsRolesParameterRemoteIds>;
export const GetAtsRolesParameterRemoteIds = z.string();

export type GetAtsRolesParameterScopes = z.infer<typeof GetAtsRolesParameterScopes>;
export const GetAtsRolesParameterScopes = z.string();

export type GetAtsRolesPositiveResponse = z.infer<typeof GetAtsRolesPositiveResponse>;
export const GetAtsRolesPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ next: z.string().nullable(), results: z.array(z.object({ id: z.string(), remote_id: z.string().nullable(), remote_label: z.string().nullable(), scope: z.enum(["SYSTEM", "JOB"]).nullable(), unified_type: z.enum(["HIRING_MANAGER", "RECRUITER", "COORDINATOR", "SOURCER", "INTERVIEWER", "ADMIN"]).nullable(), remote_data: z.record(z.string(), z.unknown()).nullable(), changed_at: z.iso.datetime(), remote_deleted_at: z.iso.datetime().nullable() })) }) });

export type GetAtsOffersParameterCursor = z.infer<typeof GetAtsOffersParameterCursor>;
export const GetAtsOffersParameterCursor = z.string();

export type GetAtsOffersParameterPageSize = z.infer<typeof GetAtsOffersParameterPageSize>;
export const GetAtsOffersParameterPageSize = z.number().int().min(1).max(250).default(100);

export type GetAtsOffersParameterUpdatedAfter = z.infer<typeof GetAtsOffersParameterUpdatedAfter>;
export const GetAtsOffersParameterUpdatedAfter = z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"));

export type GetAtsOffersParameterIncludeDeleted = z.infer<typeof GetAtsOffersParameterIncludeDeleted>;
export const GetAtsOffersParameterIncludeDeleted = z.enum(["true", "false"]).default("false");

export type GetAtsOffersParameterIgnoreUnsupportedFilters = z.infer<typeof GetAtsOffersParameterIgnoreUnsupportedFilters>;
export const GetAtsOffersParameterIgnoreUnsupportedFilters = z.enum(["true", "false"]).default("false");

export type GetAtsOffersParameterIds = z.infer<typeof GetAtsOffersParameterIds>;
export const GetAtsOffersParameterIds = z.string();

export type GetAtsOffersParameterRemoteIds = z.infer<typeof GetAtsOffersParameterRemoteIds>;
export const GetAtsOffersParameterRemoteIds = z.string();

export type GetAtsOffersPositiveResponse = z.infer<typeof GetAtsOffersPositiveResponse>;
export const GetAtsOffersPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ next: z.string().nullable(), results: z.array(z.object({ id: z.string(), remote_id: z.string().nullable(), status: z.enum(["ACCEPTED", "DECLINED", "SENT", "APPROVED", "DRAFT", "ABANDONED"]).nullable(), employment_start_date: z.iso.datetime().nullable(), application_id: z.string().nullable(), custom_fields: z.record(z.string(), z.unknown()).nullable(), integration_fields: z.array(z.object({ id: z.string(), key: z.string(), type: z.enum(["DEFAULT", "CUSTOM"]), value: z.null().optional(), label: z.string().nullable() })), changed_at: z.iso.datetime(), remote_deleted_at: z.iso.datetime().nullable(), remote_created_at: z.iso.datetime().nullable(), remote_updated_at: z.iso.datetime().nullable(), remote_data: z.record(z.string(), z.unknown()).nullable(), application: z.object({ candidate: z.object({ id: z.string(), remote_id: z.string(), first_name: z.string().nullable(), last_name: z.string().nullable(), email_addresses: z.array(z.object({ email_address: z.string().regex(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$")).nullable().optional(), type: z.string().nullable() })).default([]).nullable().default([]) }).nullable(), job: z.object({ id: z.string(), remote_id: z.string(), name: z.string().nullable() }).nullable() }).nullable() })) }) });

export type GetAtsRejectionReasonsParameterCursor = z.infer<typeof GetAtsRejectionReasonsParameterCursor>;
export const GetAtsRejectionReasonsParameterCursor = z.string();

export type GetAtsRejectionReasonsParameterPageSize = z.infer<typeof GetAtsRejectionReasonsParameterPageSize>;
export const GetAtsRejectionReasonsParameterPageSize = z.number().int().min(1).max(250).default(100);

export type GetAtsRejectionReasonsParameterUpdatedAfter = z.infer<typeof GetAtsRejectionReasonsParameterUpdatedAfter>;
export const GetAtsRejectionReasonsParameterUpdatedAfter = z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"));

export type GetAtsRejectionReasonsParameterIncludeDeleted = z.infer<typeof GetAtsRejectionReasonsParameterIncludeDeleted>;
export const GetAtsRejectionReasonsParameterIncludeDeleted = z.enum(["true", "false"]).default("false");

export type GetAtsRejectionReasonsParameterIgnoreUnsupportedFilters = z.infer<typeof GetAtsRejectionReasonsParameterIgnoreUnsupportedFilters>;
export const GetAtsRejectionReasonsParameterIgnoreUnsupportedFilters = z.enum(["true", "false"]).default("false");

export type GetAtsRejectionReasonsParameterIds = z.infer<typeof GetAtsRejectionReasonsParameterIds>;
export const GetAtsRejectionReasonsParameterIds = z.string();

export type GetAtsRejectionReasonsParameterRemoteIds = z.infer<typeof GetAtsRejectionReasonsParameterRemoteIds>;
export const GetAtsRejectionReasonsParameterRemoteIds = z.string();

export type GetAtsRejectionReasonsPositiveResponse = z.infer<typeof GetAtsRejectionReasonsPositiveResponse>;
export const GetAtsRejectionReasonsPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ next: z.string().nullable(), results: z.array(z.object({ id: z.string(), remote_id: z.string(), name: z.string().nullable(), changed_at: z.iso.datetime(), remote_deleted_at: z.iso.datetime().nullable(), remote_data: z.record(z.string(), z.unknown()).nullable() })) }) });

export type GetAtsInterviewsParameterCursor = z.infer<typeof GetAtsInterviewsParameterCursor>;
export const GetAtsInterviewsParameterCursor = z.string();

export type GetAtsInterviewsParameterPageSize = z.infer<typeof GetAtsInterviewsParameterPageSize>;
export const GetAtsInterviewsParameterPageSize = z.number().int().min(1).max(250).default(100);

export type GetAtsInterviewsParameterUpdatedAfter = z.infer<typeof GetAtsInterviewsParameterUpdatedAfter>;
export const GetAtsInterviewsParameterUpdatedAfter = z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"));

export type GetAtsInterviewsParameterIncludeDeleted = z.infer<typeof GetAtsInterviewsParameterIncludeDeleted>;
export const GetAtsInterviewsParameterIncludeDeleted = z.enum(["true", "false"]).default("false");

export type GetAtsInterviewsParameterIgnoreUnsupportedFilters = z.infer<typeof GetAtsInterviewsParameterIgnoreUnsupportedFilters>;
export const GetAtsInterviewsParameterIgnoreUnsupportedFilters = z.enum(["true", "false"]).default("false");

export type GetAtsInterviewsParameterIds = z.infer<typeof GetAtsInterviewsParameterIds>;
export const GetAtsInterviewsParameterIds = z.string();

export type GetAtsInterviewsParameterRemoteIds = z.infer<typeof GetAtsInterviewsParameterRemoteIds>;
export const GetAtsInterviewsParameterRemoteIds = z.string();

export type GetAtsInterviewsParameterJobIds = z.infer<typeof GetAtsInterviewsParameterJobIds>;
export const GetAtsInterviewsParameterJobIds = z.string();

export type GetAtsInterviewsPositiveResponse = z.infer<typeof GetAtsInterviewsPositiveResponse>;
export const GetAtsInterviewsPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ next: z.string().nullable(), results: z.array(z.object({ id: z.string(), remote_id: z.string().nullable(), title: z.string().nullable(), starting_at: z.iso.datetime().nullable(), ending_at: z.iso.datetime().nullable(), location: z.object({ city: z.string().nullable(), country: z.string().nullable(), raw: z.string().nullable(), state: z.string().nullable(), street_1: z.string().nullable(), street_2: z.string().nullable(), zip_code: z.string().nullable() }).partial().nullable().optional(), video_conferencing_url: z.string().nullable(), application_id: z.string().nullable(), stage_id: z.string().nullable(), canceled: z.boolean().nullable(), remote_created_at: z.iso.datetime().nullable(), remote_updated_at: z.iso.datetime().nullable(), remote_data: z.record(z.string(), z.unknown()).nullable(), changed_at: z.iso.datetime(), remote_deleted_at: z.iso.datetime().nullable(), users: z.array(z.object({ id: z.string(), remote_id: z.string().nullable(), first_name: z.string().nullable(), last_name: z.string().nullable(), email: z.string().regex(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$")).nullable().optional() })), application: z.object({ id: z.string(), remote_id: z.string().nullable(), outcome: z.enum(["PENDING", "HIRED", "DECLINED"]).nullable(), rejection_reason_name: z.string().nullable(), candidate: z.object({ id: z.string(), remote_id: z.string(), first_name: z.string().nullable(), last_name: z.string().nullable(), email_addresses: z.array(z.object({ email_address: z.string().regex(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$")).nullable().optional(), type: z.string().nullable() })).default([]).nullable().default([]) }).nullable(), job: z.object({ id: z.string(), remote_id: z.string(), name: z.string().nullable() }).nullable() }).nullable() })) }) });

export type GetAtsActionsAtsCreateCandidatePositiveResponse = z.infer<typeof GetAtsActionsAtsCreateCandidatePositiveResponse>;
export const GetAtsActionsAtsCreateCandidatePositiveResponse = z.object({ status: z.literal("success"), data: z.object({ attachment_restrictions: z.object({ total_size_bytes: z.number().min(-1.7976931348623157e+308).nullable(), types: z.object({ CV: z.union([z.object({ is_supported: z.literal(true), min_amount: z.number().min(-1.7976931348623157e+308).nullable(), max_amount: z.number().min(-1.7976931348623157e+308).nullable(), max_file_size_bytes: z.number().min(-1.7976931348623157e+308).nullable(), accepted_mime_types: z.array(z.string()).nullable() }), z.object({ is_supported: z.literal(false) })]), COVER_LETTER: z.union([z.object({ is_supported: z.literal(true), min_amount: z.number().min(-1.7976931348623157e+308).nullable(), max_amount: z.number().min(-1.7976931348623157e+308).nullable(), max_file_size_bytes: z.number().min(-1.7976931348623157e+308).nullable(), accepted_mime_types: z.array(z.string()).nullable() }), z.object({ is_supported: z.literal(false) })]), OTHER: z.union([z.object({ is_supported: z.literal(true), min_amount: z.number().min(-1.7976931348623157e+308).nullable(), max_amount: z.number().min(-1.7976931348623157e+308).nullable(), max_file_size_bytes: z.number().min(-1.7976931348623157e+308).nullable(), accepted_mime_types: z.array(z.string()).nullable() }), z.object({ is_supported: z.literal(false) })]) }) }).nullable() }).partial() });

export type GetAtsActionsAtsCreateApplicationPositiveResponse = z.infer<typeof GetAtsActionsAtsCreateApplicationPositiveResponse>;
export const GetAtsActionsAtsCreateApplicationPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ attachment_restrictions: z.object({ total_size_bytes: z.number().min(-1.7976931348623157e+308).nullable(), types: z.object({ CV: z.union([z.object({ is_supported: z.literal(true), min_amount: z.number().min(-1.7976931348623157e+308).nullable(), max_amount: z.number().min(-1.7976931348623157e+308).nullable(), max_file_size_bytes: z.number().min(-1.7976931348623157e+308).nullable(), accepted_mime_types: z.array(z.string()).nullable() }), z.object({ is_supported: z.literal(false) })]), COVER_LETTER: z.union([z.object({ is_supported: z.literal(true), min_amount: z.number().min(-1.7976931348623157e+308).nullable(), max_amount: z.number().min(-1.7976931348623157e+308).nullable(), max_file_size_bytes: z.number().min(-1.7976931348623157e+308).nullable(), accepted_mime_types: z.array(z.string()).nullable() }), z.object({ is_supported: z.literal(false) })]), OTHER: z.union([z.object({ is_supported: z.literal(true), min_amount: z.number().min(-1.7976931348623157e+308).nullable(), max_amount: z.number().min(-1.7976931348623157e+308).nullable(), max_file_size_bytes: z.number().min(-1.7976931348623157e+308).nullable(), accepted_mime_types: z.array(z.string()).nullable() }), z.object({ is_supported: z.literal(false) })]) }) }).nullable() }).partial() });

export type GetAtsActionsAtsAddApplicationAttachmentPositiveResponse = z.infer<typeof GetAtsActionsAtsAddApplicationAttachmentPositiveResponse>;
export const GetAtsActionsAtsAddApplicationAttachmentPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ attachment_restrictions: z.object({ types: z.object({ CV: z.union([z.object({ is_supported: z.literal(true), max_file_size_bytes: z.number().min(-1.7976931348623157e+308).nullable(), accepted_mime_types: z.array(z.string()).nullable() }), z.object({ is_supported: z.literal(false) })]), COVER_LETTER: z.union([z.object({ is_supported: z.literal(true), max_file_size_bytes: z.number().min(-1.7976931348623157e+308).nullable(), accepted_mime_types: z.array(z.string()).nullable() }), z.object({ is_supported: z.literal(false) })]), OTHER: z.union([z.object({ is_supported: z.literal(true), max_file_size_bytes: z.number().min(-1.7976931348623157e+308).nullable(), accepted_mime_types: z.array(z.string()).nullable() }), z.object({ is_supported: z.literal(false) })]) }) }).nullable() }).partial() });

export type GetAtsActionsAtsAddCandidateAttachmentPositiveResponse = z.infer<typeof GetAtsActionsAtsAddCandidateAttachmentPositiveResponse>;
export const GetAtsActionsAtsAddCandidateAttachmentPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ attachment_restrictions: z.object({ types: z.object({ CV: z.union([z.object({ is_supported: z.literal(true), max_file_size_bytes: z.number().min(-1.7976931348623157e+308).nullable(), accepted_mime_types: z.array(z.string()).nullable() }), z.object({ is_supported: z.literal(false) })]), COVER_LETTER: z.union([z.object({ is_supported: z.literal(true), max_file_size_bytes: z.number().min(-1.7976931348623157e+308).nullable(), accepted_mime_types: z.array(z.string()).nullable() }), z.object({ is_supported: z.literal(false) })]), OTHER: z.union([z.object({ is_supported: z.literal(true), max_file_size_bytes: z.number().min(-1.7976931348623157e+308).nullable(), accepted_mime_types: z.array(z.string()).nullable() }), z.object({ is_supported: z.literal(false) })]) }) }).nullable() }).partial() });

export type PostAtsImportTrackedApplicationPositiveResponse = z.infer<typeof PostAtsImportTrackedApplicationPositiveResponse>;
export const PostAtsImportTrackedApplicationPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ id: z.string().min(24).max(24).regex(new RegExp("^[1-9A-HJ-NP-Za-km-z]+$")), tracked_at: z.iso.datetime().nullable(), imported_id: z.object({ erecruiter: z.discriminatedUnion("id_type", [z.object({ id_type: z.literal("application_and_job_remote_ids"), application_remote_id: z.string(), job_remote_id: z.string() }), z.object({ id_type: z.literal("application_and_candidate_remote_ids"), candidate_remote_id: z.string(), application_remote_id: z.string() })]), successfactors: z.object({ id_type: z.literal("application_remote_id"), application_remote_id: z.string() }), recruitee: z.object({ id_type: z.literal("placement_id"), placement_id: z.string() }), greenhouse: z.object({ id_type: z.literal("application_id"), application_id: z.string() }), onlyfy: z.object({ id_type: z.literal("application_id"), application_id: z.string() }), smartrecruiters: z.object({ id_type: z.literal("candidate_and_job_remote_ids"), candidate_remote_id: z.string(), job_remote_id: z.string() }) }).partial() }), warnings: z.array(z.object({ message: z.string() })) });

export type PostAtsImportTrackedApplicationRequestBody = z.infer<typeof PostAtsImportTrackedApplicationRequestBody>;
export const PostAtsImportTrackedApplicationRequestBody = z.object({ erecruiter: z.discriminatedUnion("id_type", [z.object({ id_type: z.literal("application_and_job_remote_ids"), application_remote_id: z.string(), job_remote_id: z.string() }), z.object({ id_type: z.literal("application_and_candidate_remote_ids"), candidate_remote_id: z.string(), application_remote_id: z.string() })]).optional(), successfactors: z.object({ id_type: z.literal("application_remote_id"), application_remote_id: z.string() }).optional(), recruitee: z.object({ id_type: z.literal("placement_id"), placement_id: z.string() }).optional(), greenhouse: z.object({ id_type: z.literal("application_id"), application_id: z.string() }).optional(), onlyfy: z.object({ id_type: z.literal("application_id"), application_id: z.string() }).optional(), smartrecruiters: z.object({ id_type: z.literal("candidate_and_job_remote_ids"), candidate_remote_id: z.string(), job_remote_id: z.string() }).optional(), tracked_at: z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")).nullable() });

export type PostAtsCustomAvionteSyncedJobsPositiveResponse = z.infer<typeof PostAtsCustomAvionteSyncedJobsPositiveResponse>;
export const PostAtsCustomAvionteSyncedJobsPositiveResponse = z.object({ status: z.literal("success"), data: z.record(z.string(), z.unknown()) });

export type PostAtsCustomAvionteSyncedJobsRequestBody = z.infer<typeof PostAtsCustomAvionteSyncedJobsRequestBody>;
export const PostAtsCustomAvionteSyncedJobsRequestBody = z.object({ job_remote_id: z.string().regex(new RegExp("^\\d+$")) });

export type DeleteAtsCustomAvionteSyncedJobsJobRemoteIdParameterJobRemoteId = z.infer<typeof DeleteAtsCustomAvionteSyncedJobsJobRemoteIdParameterJobRemoteId>;
export const DeleteAtsCustomAvionteSyncedJobsJobRemoteIdParameterJobRemoteId = z.string();

export type DeleteAtsCustomAvionteSyncedJobsJobRemoteIdPositiveResponse = z.infer<typeof DeleteAtsCustomAvionteSyncedJobsJobRemoteIdPositiveResponse>;
export const DeleteAtsCustomAvionteSyncedJobsJobRemoteIdPositiveResponse = z.object({ status: z.literal("success"), data: z.record(z.string(), z.unknown()) });

export type DeleteAtsCustomAvionteSyncedJobsJobRemoteIdRequestBody = z.infer<typeof DeleteAtsCustomAvionteSyncedJobsJobRemoteIdRequestBody>;
export const DeleteAtsCustomAvionteSyncedJobsJobRemoteIdRequestBody = z.object({  }).partial();

export type GetAssessmentPackagesPositiveResponse = z.infer<typeof GetAssessmentPackagesPositiveResponse>;
export const GetAssessmentPackagesPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ packages: z.array(z.object({ id: z.string(), name: z.string(), description: z.string(), updated_at: z.iso.datetime().nullable(), type: z.enum(["BEHAVIORAL", "VIDEO_INTERVIEW", "SKILLS_TEST", "BACKGROUND_CHECK", "REFERENCE_CHECK"]).nullable() })) }) });

export type PutAssessmentPackagesPositiveResponse = z.infer<typeof PutAssessmentPackagesPositiveResponse>;
export const PutAssessmentPackagesPositiveResponse = z.object({ status: z.literal("success"), data: z.record(z.string(), z.unknown()), warnings: z.array(z.object({ message: z.string() })) });

export type PutAssessmentPackagesRequestBody = z.infer<typeof PutAssessmentPackagesRequestBody>;
export const PutAssessmentPackagesRequestBody = z.object({ packages: z.array(z.object({ id: z.string(), type: z.enum(["BEHAVIORAL", "VIDEO_INTERVIEW", "SKILLS_TEST", "BACKGROUND_CHECK", "REFERENCE_CHECK"]), name: z.string(), description: z.string() })) });

export type GetAssessmentOrdersParameterCursor = z.infer<typeof GetAssessmentOrdersParameterCursor>;
export const GetAssessmentOrdersParameterCursor = z.string();

export type GetAssessmentOrdersParameterPageSize = z.infer<typeof GetAssessmentOrdersParameterPageSize>;
export const GetAssessmentOrdersParameterPageSize = z.number().int().min(1).max(250).default(100);

export type GetAssessmentOrdersParameterIds = z.infer<typeof GetAssessmentOrdersParameterIds>;
export const GetAssessmentOrdersParameterIds = z.string();

export type GetAssessmentOrdersParameterStatuses = z.infer<typeof GetAssessmentOrdersParameterStatuses>;
export const GetAssessmentOrdersParameterStatuses = z.string();

export type GetAssessmentOrdersParameterCreatedAfter = z.infer<typeof GetAssessmentOrdersParameterCreatedAfter>;
export const GetAssessmentOrdersParameterCreatedAfter = z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"));

export type GetAssessmentOrdersPositiveResponse = z.infer<typeof GetAssessmentOrdersPositiveResponse>;
export const GetAssessmentOrdersPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ next: z.string().nullable(), results: z.array(z.object({ id: z.string(), package_id: z.string(), status: z.enum(["OPEN", "COMPLETED", "CANCELLED", "REJECTED"]), candidate: z.object({ remote_id: z.string().nullable(), email: z.email(), first_name: z.string().nullable(), last_name: z.string().nullable(), phone: z.string().nullable() }), application: z.object({ remote_id: z.string().nullable() }), job: z.object({ remote_id: z.string().nullable(), name: z.string().nullable(), job_code: z.string().nullable(), description: z.string().nullable(), location: z.object({ street_1: z.string().nullable(), street_2: z.string().nullable(), city: z.string().nullable(), state: z.string().nullable(), zip_code: z.string().nullable(), country: z.string().nullable(), raw: z.string().nullable() }).partial().nullable(), hiring_team: z.array(z.object({ remote_id: z.string().nullable(), email: z.string().nullable(), first_name: z.string().nullable(), last_name: z.string().nullable(), hiring_team_roles: z.array(z.enum(["RECRUITER", "HIRING_MANAGER"])) })) }) })) }) });

export type GetAssessmentOrdersOpenParameterCursor = z.infer<typeof GetAssessmentOrdersOpenParameterCursor>;
export const GetAssessmentOrdersOpenParameterCursor = z.string();

export type GetAssessmentOrdersOpenParameterPageSize = z.infer<typeof GetAssessmentOrdersOpenParameterPageSize>;
export const GetAssessmentOrdersOpenParameterPageSize = z.number().int().min(1).max(250).default(100);

export type GetAssessmentOrdersOpenPositiveResponse = z.infer<typeof GetAssessmentOrdersOpenPositiveResponse>;
export const GetAssessmentOrdersOpenPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ next: z.string().nullable(), results: z.array(z.object({ id: z.string(), package_id: z.string(), candidate: z.object({ remote_id: z.string().nullable(), email: z.email(), first_name: z.string().nullable(), last_name: z.string().nullable(), phone: z.string().nullable() }), application: z.object({ remote_id: z.string().nullable() }), job: z.object({ remote_id: z.string().nullable(), name: z.string().nullable(), job_code: z.string().nullable(), description: z.string().nullable(), location: z.object({ street_1: z.string().nullable(), street_2: z.string().nullable(), city: z.string().nullable(), state: z.string().nullable(), zip_code: z.string().nullable(), country: z.string().nullable(), raw: z.string().nullable() }).partial().nullable(), hiring_team: z.array(z.object({ remote_id: z.string().nullable(), email: z.string().nullable(), first_name: z.string().nullable(), last_name: z.string().nullable(), hiring_team_roles: z.array(z.enum(["RECRUITER", "HIRING_MANAGER"])) })) }) })) }) });

export type PutAssessmentOrdersAssessmentOrderIdResultParameterAssessmentOrderId = z.infer<typeof PutAssessmentOrdersAssessmentOrderIdResultParameterAssessmentOrderId>;
export const PutAssessmentOrdersAssessmentOrderIdResultParameterAssessmentOrderId = z.string();

export type PutAssessmentOrdersAssessmentOrderIdResultPositiveResponse = z.infer<typeof PutAssessmentOrdersAssessmentOrderIdResultPositiveResponse>;
export const PutAssessmentOrdersAssessmentOrderIdResultPositiveResponse = z.object({ status: z.literal("success"), data: z.record(z.string(), z.unknown()), warnings: z.array(z.object({ message: z.string() })) });

export type PutAssessmentOrdersAssessmentOrderIdResultRequestBody = z.infer<typeof PutAssessmentOrdersAssessmentOrderIdResultRequestBody>;
export const PutAssessmentOrdersAssessmentOrderIdResultRequestBody = z.object({ status: z.enum(["COMPLETED", "CANCELLED", "OPEN"]), result_url: z.url(), completed_at: z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")).optional(), score: z.number().min(-1.7976931348623157e+308).optional(), max_score: z.number().min(-1.7976931348623157e+308).optional(), attributes: z.array(z.union([z.object({ type: z.literal("TEXT"), label: z.string(), value: z.string() }), z.object({ type: z.literal("SUB_RESULT"), id: z.string(), label: z.string(), score: z.object({ value: z.number().min(-1.7976931348623157e+308), max: z.number().min(1) }), status: z.enum(["COMPLETED", "CANCELLED"]) })])).default([]), attachments: z.array(z.object({ name: z.string(), content_type: z.string().regex(new RegExp("^[\\w.-]+\\/[\\w.-]+$")).optional(), data_url: z.url().optional(), data: z.string().optional() })).max(5).default([]), remote_fields: z.object({ smartrecruiters: z.object({ scoreLabel: z.string() }).partial(), recruitee: z.object({ subtitle: z.string() }).partial() }).partial().optional() });

export type GetLmsUsersParameterCursor = z.infer<typeof GetLmsUsersParameterCursor>;
export const GetLmsUsersParameterCursor = z.string();

export type GetLmsUsersParameterPageSize = z.infer<typeof GetLmsUsersParameterPageSize>;
export const GetLmsUsersParameterPageSize = z.number().int().min(1).max(250).default(100);

export type GetLmsUsersParameterUpdatedAfter = z.infer<typeof GetLmsUsersParameterUpdatedAfter>;
export const GetLmsUsersParameterUpdatedAfter = z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"));

export type GetLmsUsersParameterIncludeDeleted = z.infer<typeof GetLmsUsersParameterIncludeDeleted>;
export const GetLmsUsersParameterIncludeDeleted = z.enum(["true", "false"]).default("false");

export type GetLmsUsersParameterIgnoreUnsupportedFilters = z.infer<typeof GetLmsUsersParameterIgnoreUnsupportedFilters>;
export const GetLmsUsersParameterIgnoreUnsupportedFilters = z.enum(["true", "false"]).default("false");

export type GetLmsUsersParameterIds = z.infer<typeof GetLmsUsersParameterIds>;
export const GetLmsUsersParameterIds = z.string();

export type GetLmsUsersParameterRemoteIds = z.infer<typeof GetLmsUsersParameterRemoteIds>;
export const GetLmsUsersParameterRemoteIds = z.string();

export type GetLmsUsersParameterWorkEmails = z.infer<typeof GetLmsUsersParameterWorkEmails>;
export const GetLmsUsersParameterWorkEmails = z.string();

export type GetLmsUsersPositiveResponse = z.infer<typeof GetLmsUsersPositiveResponse>;
export const GetLmsUsersPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ next: z.string().nullable(), results: z.array(z.object({ id: z.string(), remote_id: z.string(), first_name: z.string().nullable(), last_name: z.string().nullable(), work_email: z.string().nullable(), status: z.enum(["ACTIVE", "INACTIVE"]).nullable(), remote_created_at: z.iso.datetime().nullable(), remote_deleted_at: z.iso.datetime().nullable(), changed_at: z.iso.datetime(), remote_data: z.record(z.string(), z.unknown()).nullable(), custom_fields: z.record(z.string(), z.unknown()).nullable(), integration_fields: z.array(z.object({ id: z.string(), key: z.string(), type: z.enum(["DEFAULT", "CUSTOM"]), value: z.null().optional(), label: z.string().nullable() })) })) }) });

export type GetLmsCourseProgressionsParameterCursor = z.infer<typeof GetLmsCourseProgressionsParameterCursor>;
export const GetLmsCourseProgressionsParameterCursor = z.string();

export type GetLmsCourseProgressionsParameterPageSize = z.infer<typeof GetLmsCourseProgressionsParameterPageSize>;
export const GetLmsCourseProgressionsParameterPageSize = z.number().int().min(1).max(250).default(100);

export type GetLmsCourseProgressionsParameterUpdatedAfter = z.infer<typeof GetLmsCourseProgressionsParameterUpdatedAfter>;
export const GetLmsCourseProgressionsParameterUpdatedAfter = z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"));

export type GetLmsCourseProgressionsParameterIncludeDeleted = z.infer<typeof GetLmsCourseProgressionsParameterIncludeDeleted>;
export const GetLmsCourseProgressionsParameterIncludeDeleted = z.enum(["true", "false"]).default("false");

export type GetLmsCourseProgressionsParameterIgnoreUnsupportedFilters = z.infer<typeof GetLmsCourseProgressionsParameterIgnoreUnsupportedFilters>;
export const GetLmsCourseProgressionsParameterIgnoreUnsupportedFilters = z.enum(["true", "false"]).default("false");

export type GetLmsCourseProgressionsParameterIds = z.infer<typeof GetLmsCourseProgressionsParameterIds>;
export const GetLmsCourseProgressionsParameterIds = z.string();

export type GetLmsCourseProgressionsParameterRemoteIds = z.infer<typeof GetLmsCourseProgressionsParameterRemoteIds>;
export const GetLmsCourseProgressionsParameterRemoteIds = z.string();

export type GetLmsCourseProgressionsParameterUserIds = z.infer<typeof GetLmsCourseProgressionsParameterUserIds>;
export const GetLmsCourseProgressionsParameterUserIds = z.string();

export type GetLmsCourseProgressionsParameterCourseIds = z.infer<typeof GetLmsCourseProgressionsParameterCourseIds>;
export const GetLmsCourseProgressionsParameterCourseIds = z.string();

export type GetLmsCourseProgressionsPositiveResponse = z.infer<typeof GetLmsCourseProgressionsPositiveResponse>;
export const GetLmsCourseProgressionsPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ next: z.string().nullable(), results: z.array(z.object({ id: z.string(), remote_id: z.string(), user_id: z.string(), course_revision_id: z.string(), status: z.enum(["ENROLLED", "IN_PROGRESS", "COMPLETED", "DROPPED"]).nullable(), enrolled_at: z.iso.datetime().nullable(), completed_at: z.iso.datetime().nullable(), changed_at: z.iso.datetime(), remote_deleted_at: z.iso.datetime().nullable(), remote_data: z.record(z.string(), z.unknown()).nullable(), user: z.object({ id: z.string(), remote_id: z.string(), first_name: z.string().nullable(), last_name: z.string().nullable(), work_email: z.string().nullable() }), course_revision: z.object({ id: z.string(), remote_id: z.string(), title: z.string().nullable(), course: z.object({ id: z.string(), remote_id: z.string() }).nullable() }) })) }) });

export type PostLmsCourseProgressionsPositiveResponse = z.infer<typeof PostLmsCourseProgressionsPositiveResponse>;
export const PostLmsCourseProgressionsPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ id: z.string(), remote_id: z.string(), user_id: z.string(), course_revision_id: z.string(), status: z.enum(["ENROLLED", "IN_PROGRESS", "COMPLETED", "DROPPED"]).nullable(), enrolled_at: z.iso.datetime().nullable(), completed_at: z.iso.datetime().nullable(), changed_at: z.iso.datetime(), remote_deleted_at: z.iso.datetime().nullable(), remote_data: z.record(z.string(), z.unknown()).nullable(), user: z.object({ id: z.string(), remote_id: z.string(), first_name: z.string().nullable(), last_name: z.string().nullable(), work_email: z.string().nullable() }), course_revision: z.object({ id: z.string(), remote_id: z.string(), title: z.string().nullable(), course: z.object({ id: z.string(), remote_id: z.string() }).nullable() }) }), warnings: z.array(z.object({ message: z.string() })) });

export type PostLmsCourseProgressionsRequestBody = z.infer<typeof PostLmsCourseProgressionsRequestBody>;
export const PostLmsCourseProgressionsRequestBody = z.object({ user_id: z.string(), course_revision_id: z.string() });

export type PostLmsCourseProgressionsCourseProgressionIdCompleteParameterCourseProgressionId = z.infer<typeof PostLmsCourseProgressionsCourseProgressionIdCompleteParameterCourseProgressionId>;
export const PostLmsCourseProgressionsCourseProgressionIdCompleteParameterCourseProgressionId = z.string();

export type PostLmsCourseProgressionsCourseProgressionIdCompletePositiveResponse = z.infer<typeof PostLmsCourseProgressionsCourseProgressionIdCompletePositiveResponse>;
export const PostLmsCourseProgressionsCourseProgressionIdCompletePositiveResponse = z.object({ status: z.literal("success"), data: z.object({ id: z.string(), remote_id: z.string(), user_id: z.string(), course_revision_id: z.string(), status: z.enum(["ENROLLED", "IN_PROGRESS", "COMPLETED", "DROPPED"]).nullable(), enrolled_at: z.iso.datetime().nullable(), completed_at: z.iso.datetime().nullable(), changed_at: z.iso.datetime(), remote_deleted_at: z.iso.datetime().nullable(), remote_data: z.record(z.string(), z.unknown()).nullable(), user: z.object({ id: z.string(), remote_id: z.string(), first_name: z.string().nullable(), last_name: z.string().nullable(), work_email: z.string().nullable() }), course_revision: z.object({ id: z.string(), remote_id: z.string(), title: z.string().nullable(), course: z.object({ id: z.string(), remote_id: z.string() }).nullable() }) }), warnings: z.array(z.object({ message: z.string() })) });

export type PostLmsCourseProgressionsCourseProgressionIdCompleteRequestBody = z.infer<typeof PostLmsCourseProgressionsCourseProgressionIdCompleteRequestBody>;
export const PostLmsCourseProgressionsCourseProgressionIdCompleteRequestBody = z.object({ completed_at: z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")).nullable(), score: z.number().int().min(0).max(100).nullable() }).partial();

export type GetLmsCoursesParameterCursor = z.infer<typeof GetLmsCoursesParameterCursor>;
export const GetLmsCoursesParameterCursor = z.string();

export type GetLmsCoursesParameterPageSize = z.infer<typeof GetLmsCoursesParameterPageSize>;
export const GetLmsCoursesParameterPageSize = z.number().int().min(1).max(250).default(100);

export type GetLmsCoursesParameterUpdatedAfter = z.infer<typeof GetLmsCoursesParameterUpdatedAfter>;
export const GetLmsCoursesParameterUpdatedAfter = z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"));

export type GetLmsCoursesParameterIncludeDeleted = z.infer<typeof GetLmsCoursesParameterIncludeDeleted>;
export const GetLmsCoursesParameterIncludeDeleted = z.enum(["true", "false"]).default("false");

export type GetLmsCoursesParameterIgnoreUnsupportedFilters = z.infer<typeof GetLmsCoursesParameterIgnoreUnsupportedFilters>;
export const GetLmsCoursesParameterIgnoreUnsupportedFilters = z.enum(["true", "false"]).default("false");

export type GetLmsCoursesParameterIds = z.infer<typeof GetLmsCoursesParameterIds>;
export const GetLmsCoursesParameterIds = z.string();

export type GetLmsCoursesParameterRemoteIds = z.infer<typeof GetLmsCoursesParameterRemoteIds>;
export const GetLmsCoursesParameterRemoteIds = z.string();

export type GetLmsCoursesPositiveResponse = z.infer<typeof GetLmsCoursesPositiveResponse>;
export const GetLmsCoursesPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ next: z.string().nullable(), results: z.array(z.object({ id: z.string(), remote_id: z.string(), provider_id: z.string().nullable(), origin_id: z.string().nullable(), remote_created_at: z.iso.datetime().nullable(), remote_deleted_at: z.iso.datetime().nullable(), changed_at: z.iso.datetime(), remote_data: z.record(z.string(), z.unknown()).nullable(), custom_fields: z.record(z.string(), z.unknown()).nullable(), integration_fields: z.array(z.object({ id: z.string(), key: z.string(), type: z.enum(["DEFAULT", "CUSTOM"]), value: z.null().optional(), label: z.string().nullable() })), provider: z.object({ id: z.string(), remote_id: z.string(), name: z.string().nullable() }).nullable(), revisions: z.array(z.object({ id: z.string(), remote_id: z.string(), course_id: z.string().nullable(), title: z.string().nullable(), description: z.string().nullable(), remote_url: z.string().nullable(), status: z.enum(["ACTIVE", "INACTIVE"]).nullable(), remote_created_at: z.iso.datetime().nullable(), remote_deleted_at: z.iso.datetime().nullable(), changed_at: z.iso.datetime(), remote_data: z.record(z.string(), z.unknown()).nullable(), custom_fields: z.record(z.string(), z.unknown()).nullable(), integration_fields: z.array(z.object({ id: z.string(), key: z.string(), type: z.enum(["DEFAULT", "CUSTOM"]), value: z.null().optional(), label: z.string().nullable() })), skill_assignments: z.array(z.object({ skill: z.object({ id: z.string(), remote_id: z.string().nullable(), name: z.string().nullable() }) })) })) })) }) });

export type PostLmsCoursesBulkPositiveResponse = z.infer<typeof PostLmsCoursesBulkPositiveResponse>;
export const PostLmsCoursesBulkPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ task_id: z.string() }), warnings: z.array(z.object({ message: z.string() })) });

export type PostLmsCoursesBulkRequestBody = z.infer<typeof PostLmsCoursesBulkRequestBody>;
export const PostLmsCoursesBulkRequestBody = z.object({ items: z.array(z.object({ origin_id: z.string(), course: z.object({ type: z.literal("EXTERNAL"), title: z.string(), description: z.string().nullable().optional(), course_url: z.string(), thumbnail_url: z.string().nullable().optional(), duration: z.number().int().gt(0).nullable().optional(), languages: z.array(z.string().regex(new RegExp("^[a-z]{2,3}(-[A-Z]{2})?$"))).nullable().optional() }) })) });

export type GetLmsCoursesBulkTaskIdParameterTaskId = z.infer<typeof GetLmsCoursesBulkTaskIdParameterTaskId>;
export const GetLmsCoursesBulkTaskIdParameterTaskId = z.string();

export type GetLmsCoursesBulkTaskIdPositiveResponse = z.infer<typeof GetLmsCoursesBulkTaskIdPositiveResponse>;
export const GetLmsCoursesBulkTaskIdPositiveResponse = z.object({ status: z.literal("success"), data: z.discriminatedUnion("status", [z.object({ task_id: z.string(), created_at: z.string(), status: z.literal("PENDING"), completed_at: z.null() }), z.object({ task_id: z.string(), created_at: z.string(), status: z.literal("COMPLETED"), data: z.array(z.discriminatedUnion("status", [z.object({ origin_id: z.string(), status: z.literal("SUCCEEDED"), data: z.object({ id: z.string() }) }), z.object({ origin_id: z.string(), status: z.literal("FAILED"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS", "LMS.COURSE_UPDATE_NOT_SUPPORTED", "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING", "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.string().nullable() }) })])), completed_at: z.iso.datetime() }), z.object({ task_id: z.string(), created_at: z.string(), status: z.literal("FAILED"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS", "LMS.COURSE_UPDATE_NOT_SUPPORTED", "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING", "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.string().nullable() }), completed_at: z.iso.datetime() })]) });

export type PostLmsCoursesCourseIdDeactivateParameterCourseId = z.infer<typeof PostLmsCoursesCourseIdDeactivateParameterCourseId>;
export const PostLmsCoursesCourseIdDeactivateParameterCourseId = z.string();

export type PostLmsCoursesCourseIdDeactivatePositiveResponse = z.infer<typeof PostLmsCoursesCourseIdDeactivatePositiveResponse>;
export const PostLmsCoursesCourseIdDeactivatePositiveResponse = z.object({ status: z.literal("success"), data: z.object({ id: z.string(), remote_id: z.string(), provider_id: z.string().nullable(), origin_id: z.string().nullable(), remote_created_at: z.iso.datetime().nullable(), remote_deleted_at: z.iso.datetime().nullable(), changed_at: z.iso.datetime(), remote_data: z.record(z.string(), z.unknown()).nullable(), custom_fields: z.record(z.string(), z.unknown()).nullable(), integration_fields: z.array(z.object({ id: z.string(), key: z.string(), type: z.enum(["DEFAULT", "CUSTOM"]), value: z.null().optional(), label: z.string().nullable() })), provider: z.object({ id: z.string(), remote_id: z.string(), name: z.string().nullable() }).nullable(), revisions: z.array(z.object({ id: z.string(), remote_id: z.string(), course_id: z.string().nullable(), title: z.string().nullable(), description: z.string().nullable(), remote_url: z.string().nullable(), status: z.enum(["ACTIVE", "INACTIVE"]).nullable(), remote_created_at: z.iso.datetime().nullable(), remote_deleted_at: z.iso.datetime().nullable(), changed_at: z.iso.datetime(), remote_data: z.record(z.string(), z.unknown()).nullable(), custom_fields: z.record(z.string(), z.unknown()).nullable(), integration_fields: z.array(z.object({ id: z.string(), key: z.string(), type: z.enum(["DEFAULT", "CUSTOM"]), value: z.null().optional(), label: z.string().nullable() })), skill_assignments: z.array(z.object({ skill: z.object({ id: z.string(), remote_id: z.string().nullable(), name: z.string().nullable() }) })) })) }), warnings: z.array(z.object({ message: z.string() })) });

export type PostLmsCoursesCourseIdDeactivateRequestBody = z.infer<typeof PostLmsCoursesCourseIdDeactivateRequestBody>;
export const PostLmsCoursesCourseIdDeactivateRequestBody = z.object({  }).partial();

export type GetLmsSkillsParameterCursor = z.infer<typeof GetLmsSkillsParameterCursor>;
export const GetLmsSkillsParameterCursor = z.string();

export type GetLmsSkillsParameterPageSize = z.infer<typeof GetLmsSkillsParameterPageSize>;
export const GetLmsSkillsParameterPageSize = z.number().int().min(1).max(250).default(100);

export type GetLmsSkillsParameterUpdatedAfter = z.infer<typeof GetLmsSkillsParameterUpdatedAfter>;
export const GetLmsSkillsParameterUpdatedAfter = z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$"));

export type GetLmsSkillsParameterIncludeDeleted = z.infer<typeof GetLmsSkillsParameterIncludeDeleted>;
export const GetLmsSkillsParameterIncludeDeleted = z.enum(["true", "false"]).default("false");

export type GetLmsSkillsParameterIgnoreUnsupportedFilters = z.infer<typeof GetLmsSkillsParameterIgnoreUnsupportedFilters>;
export const GetLmsSkillsParameterIgnoreUnsupportedFilters = z.enum(["true", "false"]).default("false");

export type GetLmsSkillsParameterIds = z.infer<typeof GetLmsSkillsParameterIds>;
export const GetLmsSkillsParameterIds = z.string();

export type GetLmsSkillsParameterRemoteIds = z.infer<typeof GetLmsSkillsParameterRemoteIds>;
export const GetLmsSkillsParameterRemoteIds = z.string();

export type GetLmsSkillsPositiveResponse = z.infer<typeof GetLmsSkillsPositiveResponse>;
export const GetLmsSkillsPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ next: z.string().nullable(), results: z.array(z.object({ id: z.string(), remote_id: z.string().nullable(), name: z.string().nullable(), remote_created_at: z.iso.datetime().nullable(), remote_deleted_at: z.iso.datetime().nullable(), changed_at: z.iso.datetime(), remote_data: z.record(z.string(), z.unknown()).nullable(), custom_fields: z.record(z.string(), z.unknown()).nullable(), integration_fields: z.array(z.object({ id: z.string(), key: z.string(), type: z.enum(["DEFAULT", "CUSTOM"]), value: z.null().optional(), label: z.string().nullable() })) })) }) });

export type PostAiApplyCareerSitesPositiveResponse = z.infer<typeof PostAiApplyCareerSitesPositiveResponse>;
export const PostAiApplyCareerSitesPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ id: z.string(), label: z.string() }) });

export type PostAiApplyCareerSitesRequestBody = z.infer<typeof PostAiApplyCareerSitesRequestBody>;
export const PostAiApplyCareerSitesRequestBody = z.object({ label: z.string() });

export type GetAiApplyCareerSitesParameterCursor = z.infer<typeof GetAiApplyCareerSitesParameterCursor>;
export const GetAiApplyCareerSitesParameterCursor = z.string();

export type GetAiApplyCareerSitesParameterPageSize = z.infer<typeof GetAiApplyCareerSitesParameterPageSize>;
export const GetAiApplyCareerSitesParameterPageSize = z.number().int().min(1).max(250).default(100);

export type GetAiApplyCareerSitesParameterIds = z.infer<typeof GetAiApplyCareerSitesParameterIds>;
export const GetAiApplyCareerSitesParameterIds = z.string();

export type GetAiApplyCareerSitesPositiveResponse = z.infer<typeof GetAiApplyCareerSitesPositiveResponse>;
export const GetAiApplyCareerSitesPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ results: z.array(z.object({ id: z.string(), label: z.string() })), next: z.string().nullable() }) });

export type GetAiApplyPostingsParameterCursor = z.infer<typeof GetAiApplyPostingsParameterCursor>;
export const GetAiApplyPostingsParameterCursor = z.string();

export type GetAiApplyPostingsParameterPageSize = z.infer<typeof GetAiApplyPostingsParameterPageSize>;
export const GetAiApplyPostingsParameterPageSize = z.number().int().min(1).max(250).default(100);

export type GetAiApplyPostingsParameterIds = z.infer<typeof GetAiApplyPostingsParameterIds>;
export const GetAiApplyPostingsParameterIds = z.string();

export type GetAiApplyPostingsParameterCareerSiteIds = z.infer<typeof GetAiApplyPostingsParameterCareerSiteIds>;
export const GetAiApplyPostingsParameterCareerSiteIds = z.string();

export type GetAiApplyPostingsParameterJobCodes = z.infer<typeof GetAiApplyPostingsParameterJobCodes>;
export const GetAiApplyPostingsParameterJobCodes = z.string();

export type GetAiApplyPostingsPositiveResponse = z.infer<typeof GetAiApplyPostingsPositiveResponse>;
export const GetAiApplyPostingsPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ results: z.array(z.object({ id: z.string(), career_site: z.object({ id: z.string(), label: z.string() }), url: z.string(), job_code: z.string().nullable(), created_at: z.iso.datetime(), updated_at: z.iso.datetime(), archived_at: z.iso.datetime().nullable(), archived_reason: z.enum(["JOB_POSTING_TAKEN_OFFLINE", "MANUAL_ARCHIVE", "REMOVED_FROM_JOB_FEED"]).nullable(), availability: z.enum(["APPLYABLE", "PENDING", "ARCHIVED", "UNAVAILABLE"]) })), next: z.string().nullable() }) });

export type PostAiApplyPostingsPositiveResponse = z.infer<typeof PostAiApplyPostingsPositiveResponse>;
export const PostAiApplyPostingsPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ id: z.string(), career_site: z.object({ id: z.string(), label: z.string() }), url: z.string(), job_code: z.string().nullable(), created_at: z.iso.datetime(), updated_at: z.iso.datetime(), archived_at: z.iso.datetime().nullable(), archived_reason: z.enum(["JOB_POSTING_TAKEN_OFFLINE", "MANUAL_ARCHIVE", "REMOVED_FROM_JOB_FEED"]).nullable(), availability: z.enum(["APPLYABLE", "PENDING", "ARCHIVED", "UNAVAILABLE"]) }) });

export type PostAiApplyPostingsRequestBody = z.infer<typeof PostAiApplyPostingsRequestBody>;
export const PostAiApplyPostingsRequestBody = z.object({ url: z.url().regex(new RegExp("^https?:\\/\\/")), job_code: z.string().optional(), location: z.object({ country: z.enum(["AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "YE", "YT", "ZA", "ZM", "ZW"]), postal_code: z.string().optional() }).nullable().optional(), career_site_id: z.string() });

export type PostAiApplyPostingsPostingIdInquireParameterPostingId = z.infer<typeof PostAiApplyPostingsPostingIdInquireParameterPostingId>;
export const PostAiApplyPostingsPostingIdInquireParameterPostingId = z.string();

export type PostAiApplyPostingsPostingIdInquirePositiveResponse = z.infer<typeof PostAiApplyPostingsPostingIdInquirePositiveResponse>;
export const PostAiApplyPostingsPostingIdInquirePositiveResponse = z.object({ status: z.literal("success"), data: z.object({ application_form: z.array(z.union([z.object({ block_type: z.literal("QUESTION"), question_id: z.string(), label: z.string(), description: z.string().nullable(), required: z.boolean(), category: z.literal("EEO").nullable(), question_type: z.enum(["TEXT", "NUMBER", "BOOLEAN", "FILE", "DATE", "SINGLE_SELECT", "MULTI_SELECT"]), unified_key: z.enum(["EMAIL", "RESIDENCE_TYPE", "RESIDENCE_FULL_STRING", "RESIDENCE_COUNTRY", "RESIDENCE_CITY", "RESIDENCE_STATE", "RESIDENCE_LINE_1", "RESIDENCE_LINE_2", "RESIDENCE_ZIP_CODE", "APPLICANT_POOL_CONSENT", "TERMS_AND_CONDITIONS", "FIRST_NAME", "LAST_NAME", "FULL_NAME", "GENDER", "EXPECTED_START_DATE", "RESUME", "BIRTH_DATE", "PHONE_NUMBER_TYPE", "FULL_PHONE_NUMBER", "PHONE_COUNTRY_CODE", "PHONE_NATIONAL_NUMBER", "PHONE_EXTENSION"]).nullable(), options: z.array(z.object({ id: z.string(), label: z.string(), unified_key: z.enum(["HOME", "WORK", "MAILING", "AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "YE", "YT", "ZA", "ZM", "ZW", "MALE", "FEMALE", "NON_BINARY", "NOT_SPECIFIED", "MOBILE", "LANDLINE", "SOURCE_OTHER", "SOURCE_OTHER_JOB_BOARD"]).nullable() })).nullable(), display_when: z.object({ question_id: z.string(), answer_equals: z.union([z.string(), z.array(z.string()), z.number().min(-1.7976931348623157e+308), z.boolean(), z.object({ name: z.string(), content_type: z.string(), data: z.unknown() })]) }).nullable() }), z.object({ block_type: z.literal("SECTION"), label: z.string(), children: z.array(z.record(z.string(), z.unknown())) })])), submission_token: z.string() }) });

export type PostAiApplyPostingsPostingIdInquireRequestBody = z.infer<typeof PostAiApplyPostingsPostingIdInquireRequestBody>;
export const PostAiApplyPostingsPostingIdInquireRequestBody = z.object({  }).partial();

export type PostAiApplyApplyPositiveResponse = z.infer<typeof PostAiApplyApplyPositiveResponse>;
export const PostAiApplyApplyPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ id: z.string(), posting_id: z.string(), status: z.string(), created_at: z.iso.datetime(), updated_at: z.iso.datetime() }) });

export type PostAiApplyApplyRequestBody = z.infer<typeof PostAiApplyApplyRequestBody>;
export const PostAiApplyApplyRequestBody = z.object({ submission_token: z.string(), candidate_email: z.email(), query_params: z.record(z.string(), z.string()).optional(), screening_question_answers: z.array(z.object({ question_id: z.string(), answer: z.union([z.string(), z.array(z.string()), z.number().min(-1.7976931348623157e+308), z.boolean(), z.object({ name: z.string(), content_type: z.string(), data: z.string() })]) })), additional_clicks: z.number().int().min(0).max(30).optional(), additional_clicks_scatter_duration: z.number().int().min(1).optional() });

export type GetAiApplyApplicationsParameterCursor = z.infer<typeof GetAiApplyApplicationsParameterCursor>;
export const GetAiApplyApplicationsParameterCursor = z.string();

export type GetAiApplyApplicationsParameterPageSize = z.infer<typeof GetAiApplyApplicationsParameterPageSize>;
export const GetAiApplyApplicationsParameterPageSize = z.number().int().min(1).max(250).default(100);

export type GetAiApplyApplicationsParameterIds = z.infer<typeof GetAiApplyApplicationsParameterIds>;
export const GetAiApplyApplicationsParameterIds = z.string();

export type GetAiApplyApplicationsParameterJobPostingIds = z.infer<typeof GetAiApplyApplicationsParameterJobPostingIds>;
export const GetAiApplyApplicationsParameterJobPostingIds = z.string();

export type GetAiApplyApplicationsPositiveResponse = z.infer<typeof GetAiApplyApplicationsPositiveResponse>;
export const GetAiApplyApplicationsPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ results: z.array(z.object({ id: z.string(), job_posting_id: z.string(), status: z.enum(["SUBMITTED", "DUPLICATE", "PENDING", "FAILED"]), created_at: z.iso.datetime(), updated_at: z.iso.datetime() })), next: z.string().nullable() }) });

export type GetAiApplyUnifiedApiJobsParameterCursor = z.infer<typeof GetAiApplyUnifiedApiJobsParameterCursor>;
export const GetAiApplyUnifiedApiJobsParameterCursor = z.string();

export type GetAiApplyUnifiedApiJobsParameterPageSize = z.infer<typeof GetAiApplyUnifiedApiJobsParameterPageSize>;
export const GetAiApplyUnifiedApiJobsParameterPageSize = z.number().int().min(1).max(5).default(5);

export type GetAiApplyUnifiedApiJobsParameterIds = z.infer<typeof GetAiApplyUnifiedApiJobsParameterIds>;
export const GetAiApplyUnifiedApiJobsParameterIds = z.string();

export type GetAiApplyUnifiedApiJobsParameterRemoteIds = z.infer<typeof GetAiApplyUnifiedApiJobsParameterRemoteIds>;
export const GetAiApplyUnifiedApiJobsParameterRemoteIds = z.string();

export type GetAiApplyUnifiedApiJobsParameterJobCodes = z.infer<typeof GetAiApplyUnifiedApiJobsParameterJobCodes>;
export const GetAiApplyUnifiedApiJobsParameterJobCodes = z.string();

export type GetAiApplyUnifiedApiJobsParameterCareerSiteIds = z.infer<typeof GetAiApplyUnifiedApiJobsParameterCareerSiteIds>;
export const GetAiApplyUnifiedApiJobsParameterCareerSiteIds = z.string();

export type GetAiApplyUnifiedApiJobsPositiveResponse = z.infer<typeof GetAiApplyUnifiedApiJobsPositiveResponse>;
export const GetAiApplyUnifiedApiJobsPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ results: z.array(z.object({ id: z.string(), remote_id: z.string(), name: z.string().nullable(), job_code: z.string().nullable(), description: z.string().nullable(), confidential: z.boolean().nullable(), weekly_hours: z.number().min(-1.7976931348623157e+308).nullable(), category: z.string().nullable(), department: z.string().nullable(), post_url: z.string().nullable(), experience_level: z.string().nullable(), salary_amount: z.number().min(-1.7976931348623157e+308).nullable(), salary_amount_from: z.number().min(-1.7976931348623157e+308).nullable(), salary_amount_to: z.number().min(-1.7976931348623157e+308).nullable(), salary_currency: z.string().nullable(), custom_fields: z.record(z.string(), z.unknown()).nullable(), integration_fields: z.array(z.record(z.string(), z.unknown())), opened_at: z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).nullable(), closed_at: z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).nullable(), remote_created_at: z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).nullable(), remote_updated_at: z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).nullable(), contact_id: z.string().nullable(), remote_data: z.record(z.string(), z.unknown()).nullable(), changed_at: z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")), remote_deleted_at: z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).nullable(), remote_url: z.string().nullable(), stages: z.array(z.record(z.string(), z.unknown())), screening_questions: z.array(z.object({ id: z.string(), remote_id: z.string().nullable(), title: z.string().nullable(), description: z.string().nullable(), format: z.union([z.object({ display_type: z.enum(["SINGLE_LINE", "MULTI_LINE", "EMAIL", "URL"]).nullable().optional(), max_length: z.number().int().nullable().optional(), type: z.literal("TEXT") }), z.object({ display_type: z.enum(["SLIDER", "FIELD"]).default("FIELD").nullable().default("FIELD"), max: z.number().min(-1.7976931348623157e+308).nullable().optional(), min: z.number().min(-1.7976931348623157e+308).nullable().optional(), type: z.literal("NUMBER") }), z.object({ accepted_mime_types: z.array(z.string()).nullable().optional(), max_file_size_bytes: z.number().int().nullable().optional(), type: z.literal("FILE") }), z.object({ display_type: z.enum(["DROPDOWN", "RADIO"]).nullable().optional(), options: z.array(z.object({ id: z.string(), remote_id: z.string().nullable().optional(), name: z.string() })), type: z.literal("SINGLE_SELECT") }), z.object({ type: z.literal("BOOLEAN") }), z.object({ type: z.literal("DATE") }), z.object({ options: z.array(z.object({ id: z.string(), remote_id: z.string().nullable().optional(), name: z.string() })), type: z.literal("MULTI_SELECT") }), z.object({ type: z.literal("INFORMATION") }), z.object({ raw_question: z.unknown().optional(), type: z.literal("UNKNOWN") }), z.null()]).optional(), category: z.literal("EEO").nullable(), index: z.number().int().nullable().optional(), required: z.boolean().nullable(), precondition_question_id: z.string().nullable().optional(), precondition_options: z.union([z.array(z.string()), z.array(z.boolean()), z.null()]).default(null) })).nullable(), job_postings: z.array(z.record(z.string(), z.unknown())), hiring_team: z.array(z.record(z.string(), z.unknown())), employment_type: z.union([z.enum(["FULL_TIME", "PART_TIME", "CONTRACT", "SEASONAL", "INTERNSHIP"]), z.string(), z.null()]).optional(), status: z.union([z.enum(["OPEN", "CLOSED", "DRAFT", "ARCHIVED"]), z.string(), z.null()]).optional(), visibility: z.string().nullable(), remote_work_status: z.string().nullable(), salary_period: z.string().nullable(), location: z.object({ city: z.string().nullable(), country: z.string().nullable(), raw: z.string().nullable(), state: z.string().nullable(), street_1: z.string().nullable(), street_2: z.string().nullable(), zip_code: z.string().nullable() }).partial().nullable().optional() })), next: z.string().nullable() }) });

export type PostAiApplyUnifiedApiJobsJobIdApplicationsParameterJobId = z.infer<typeof PostAiApplyUnifiedApiJobsJobIdApplicationsParameterJobId>;
export const PostAiApplyUnifiedApiJobsJobIdApplicationsParameterJobId = z.string();

export type PostAiApplyUnifiedApiJobsJobIdApplicationsPositiveResponse = z.infer<typeof PostAiApplyUnifiedApiJobsJobIdApplicationsPositiveResponse>;
export const PostAiApplyUnifiedApiJobsJobIdApplicationsPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ id: z.string(), remote_id: z.string().nullable(), outcome: z.enum(["PENDING", "HIRED", "DECLINED"]).nullable(), rejection_reason_name: z.string().nullable(), rejected_at: z.iso.datetime().nullable(), current_stage_id: z.string().nullable(), job_id: z.string().nullable(), candidate_id: z.string().nullable(), screening_question_answers: z.array(z.union([z.object({ answer: z.object({ content: z.string().nullable() }), question: z.object({ remote_id: z.string().nullable(), title: z.string(), type: z.literal("TEXT") }) }), z.object({ answer: z.object({ choice: z.string().nullable() }), question: z.object({ remote_id: z.string().nullable(), title: z.string(), type: z.literal("SINGLE_SELECT") }) }), z.object({ answer: z.object({ choices: z.array(z.string()).default([]) }).partial(), question: z.object({ remote_id: z.string().nullable(), title: z.string(), type: z.literal("MULTI_SELECT") }) }), z.object({ answer: z.object({ checked: z.boolean().nullable() }), question: z.object({ remote_id: z.string().nullable(), title: z.string(), type: z.literal("BOOLEAN") }) }), z.object({ answer: z.object({ number: z.number().min(-1.7976931348623157e+308).nullable() }), question: z.object({ remote_id: z.string().nullable(), title: z.string(), type: z.literal("NUMBER") }) }), z.object({ answer: z.object({ date: z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).nullable() }), question: z.object({ remote_id: z.string().nullable(), title: z.string(), type: z.literal("DATE") }) }), z.object({ answer: z.object({ raw: z.null() }).partial(), question: z.object({ remote_id: z.string().nullable(), title: z.string(), type: z.literal("UNKNOWN") }) })])).default([]).nullable().default([]), custom_fields: z.record(z.string(), z.unknown()).nullable(), integration_fields: z.array(z.object({ id: z.string(), key: z.string(), type: z.enum(["DEFAULT", "CUSTOM"]), value: z.null().optional(), label: z.string().nullable() })), remote_url: z.url().nullable(), changed_at: z.iso.datetime(), remote_deleted_at: z.iso.datetime().nullable(), remote_created_at: z.iso.datetime().nullable(), remote_updated_at: z.iso.datetime().nullable(), remote_data: z.record(z.string(), z.unknown()).nullable(), current_stage: z.object({ id: z.string(), name: z.string().nullable(), remote_id: z.string().nullable(), index: z.number().int().nullable() }).nullable(), job: z.object({ id: z.string(), name: z.string().nullable(), remote_id: z.string() }).nullable(), candidate: z.object({ id: z.string(), remote_id: z.string(), first_name: z.string().nullable(), last_name: z.string().nullable(), company: z.string().nullable(), title: z.string().nullable(), confidential: z.boolean().nullable(), source: z.string().nullable(), phone_numbers: z.array(z.object({ phone_number: z.string(), type: z.string().nullable().optional() })).default([]).nullable().default([]), email_addresses: z.array(z.object({ email_address: z.string().regex(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$")).nullable().optional(), type: z.string().nullable() })).default([]).nullable().default([]), social_media: z.array(z.object({ link: z.string().nullable(), type: z.string().nullable(), username: z.string().nullable() }).partial()).default([]).nullable().default([]), location: z.object({ city: z.string().nullable(), country: z.string().nullable(), raw: z.string().nullable(), state: z.string().nullable(), street_1: z.string().nullable(), street_2: z.string().nullable(), zip_code: z.string().nullable() }).partial().nullable().optional(), custom_fields: z.record(z.string(), z.unknown()).nullable(), integration_fields: z.array(z.object({ id: z.string(), key: z.string(), type: z.enum(["DEFAULT", "CUSTOM"]), value: z.null().optional(), label: z.string().nullable() })), remote_url: z.url().nullable(), remote_created_at: z.iso.datetime().nullable(), remote_updated_at: z.iso.datetime().nullable(), remote_data: z.record(z.string(), z.unknown()).nullable(), changed_at: z.iso.datetime(), remote_deleted_at: z.iso.datetime().nullable(), tags: z.array(z.object({ id: z.string(), name: z.string().nullable(), remote_id: z.string().nullable() })) }).nullable() }) });

export type PostAiApplyUnifiedApiJobsJobIdApplicationsRequestBody = z.infer<typeof PostAiApplyUnifiedApiJobsJobIdApplicationsRequestBody>;
export const PostAiApplyUnifiedApiJobsJobIdApplicationsRequestBody = z.object({ stage_id: z.string().optional(), candidate: z.object({ first_name: z.string(), last_name: z.string(), email_address: z.email(), additional_email_addresses: z.array(z.object({ type: z.enum(["PERSONAL", "WORK", "OTHER"]), email_address: z.email() })).optional(), company: z.string().optional(), title: z.string().optional(), phone_number: z.string().optional(), additional_phone_numbers: z.array(z.object({ type: z.enum(["PERSONAL", "WORK", "OTHER"]), phone_number: z.string() })).optional(), location: z.object({ city: z.string().optional(), country: z.string().regex(new RegExp("^[A-Z]{2}$")), state: z.string().optional(), street_1: z.string().optional(), zip_code: z.string().optional() }).optional(), gender: z.enum(["MALE", "FEMALE", "OTHER"]).optional(), availability_date: z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")).optional(), salary_expectations: z.object({ period: z.enum(["MONTH", "YEAR"]), amount: z.number().min(-1.7976931348623157e+308) }).optional(), social_links: z.array(z.object({ url: z.url() })).default([]) }), attachments: z.array(z.object({ name: z.string(), content_type: z.string().regex(new RegExp("^[\\w.-]+\\/[\\w.-]+$")).optional(), data_url: z.url().optional(), data: z.string().optional(), type: z.enum(["CV", "COVER_LETTER", "OTHER"]) })).default([]), source: z.object({ name: z.string(), unified_key: z.string(), id: z.string() }).partial().optional(), sourced_by: z.object({ user_id: z.string() }).optional(), gdpr_consent: z.object({ expires_at: z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")), given: z.boolean() }).partial().optional(), remote_fields: z.object({ successfactors: z.object({ Candidate: z.record(z.string(), z.unknown()), JobApplication: z.record(z.string(), z.unknown()), copyJobApplicationAttachments: z.boolean(), update_existing_candidate: z.boolean().nullable() }).partial(), personio: z.object({ application: z.record(z.string(), z.unknown()) }).partial(), talentsoft: z.object({ applicant: z.record(z.string(), z.unknown()), application: z.record(z.string(), z.unknown()) }).partial(), teamtailor: z.object({ candidate: z.record(z.string(), z.unknown()), application: z.object({ attributes: z.record(z.string(), z.unknown()) }).partial() }).partial(), greenhouse: z.object({ candidate: z.record(z.string(), z.unknown()), application: z.record(z.string(), z.unknown()) }).partial(), lever: z.object({ candidate: z.record(z.string(), z.unknown()) }).partial(), workable: z.object({ candidate: z.record(z.string(), z.unknown()) }).partial(), workday: z.object({ Candidate_Data: z.object({ Name_Detail_Data: z.object({ Middle_Name: z.string(), Social_Suffix_Reference: z.object({ Predefined_Name_Component_ID: z.string() }) }).partial(), Language_Reference: z.object({ WID: z.string() }), Job_Application_Data: z.object({ Job_Applied_To_Data: z.object({ Global_Personal_Information_Data: z.object({ Date_of_Birth: z.string() }).partial() }).partial(), Resume_Data: z.object({ Education_Data: z.array(z.object({ School_Name: z.string(), First_Year_Attended: z.number().min(-1.7976931348623157e+308), Last_Year_Attended: z.number().min(-1.7976931348623157e+308), Field_of_Study_Reference: z.object({ WID: z.string() }), Degree_Reference: z.object({ WID: z.string() }), Grade_Average: z.string() }).partial()), Skill_Data: z.array(z.object({ Skill_Name: z.string() }).partial()), Language_Data: z.array(z.object({ Language_Reference: z.object({ WID: z.string() }).partial(), Language: z.object({ Native: z.boolean().optional(), Language_Ability: z.array(z.object({ Language_Ability_Data: z.object({ Language_Proficiency_Reference: z.object({ WID: z.string() }), Language_Ability_Type_Reference: z.object({ WID: z.string() }) }).partial() }).partial()) }) }).partial()), Experience_Data: z.array(z.object({ Company_Name: z.string(), Title: z.string(), Location: z.string().optional(), Start_Date: z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")), End_Date: z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")).optional(), Currently_Work_Here: z.boolean().optional(), Description: z.string().optional() })) }).partial() }).partial(), Contact_Data: z.object({ Location_Data: z.object({ Address_Line_1: z.string(), Address_Line_2: z.string(), Region_Subdivision_1: z.string(), Country_Region_Reference: z.object({ Country_Region_ID: z.string() }), Country_City_Reference: z.object({ WID: z.string() }) }).partial() }).partial(), Worker_Reference: z.object({ WID: z.string(), Employee_ID: z.string() }).partial() }).partial(), Override_Source_Reference_WID: z.string() }).partial(), zohorecruit: z.object({ candidate: z.record(z.string(), z.unknown()) }).partial(), bullhorn: z.object({ candidate: z.record(z.string(), z.unknown()), job_submission: z.record(z.string(), z.unknown()) }).partial(), smartrecruiters: z.object({ candidate_with_questions: z.record(z.string(), z.unknown()), candidate_without_questions: z.record(z.string(), z.unknown()), candidate: z.record(z.string(), z.unknown()), consent_decisions: z.object({ SINGLE: z.boolean(), SMART_RECRUIT: z.boolean(), SMART_CRM: z.boolean(), SMART_MESSAGE_SMS: z.boolean(), SMART_MESSAGE_WHATSAPP: z.boolean() }).partial() }).partial(), talentadore: z.object({ applications: z.record(z.string(), z.unknown()) }).partial(), guidecom: z.object({ candidate: z.record(z.string(), z.unknown()) }).partial(), dvinci: z.object({ application: z.record(z.string(), z.unknown()), candidate: z.record(z.string(), z.unknown()) }).partial(), hrworks: z.object({ jobApplication: z.record(z.string(), z.unknown()) }).partial(), jobylon: z.object({ application: z.object({ message: z.string() }).partial() }).partial(), avature: z.object({ workflow: z.object({ step: z.object({ id: z.number().int() }) }).partial() }).partial(), recruitee: z.object({ candidate: z.object({ cover_letter_text: z.string() }).partial() }).partial(), rexx: z.object({ candidate: z.record(z.string(), z.unknown()) }).partial(), umantis: z.object({ person: z.record(z.string(), z.unknown()) }).partial(), piloga: z.object({ candidate: z.object({ street: z.string() }).partial() }).partial(), pinpoint: z.object({ candidate: z.record(z.string(), z.unknown()) }).partial(), covetorest: z.object({ candidate: z.object({ mandant: z.number().min(-1.7976931348623157e+308) }).partial() }).partial() }).partial().and(z.object({ greenhouse: z.object({ post_headers: z.object({ "On-Behalf-Of": z.string().nullable() }).partial() }).partial(), workable: z.object({ on_behalf_of_user_remote_id: z.string() }).partial() }).partial()).optional(), screening_question_answers: z.array(z.object({ question_id: z.string(), answer: z.union([z.string(), z.boolean(), z.number().min(-1.7976931348623157e+308), z.array(z.string()), z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")), z.object({ name: z.string(), content_type: z.string().regex(new RegExp("^[\\w.-]+\\/[\\w.-]+$")).optional(), data_url: z.url().optional(), data: z.string().optional() })]) })).optional(), query_params: z.record(z.string(), z.string()).optional() });

export type GetAiApplyJobFeedsParameterCursor = z.infer<typeof GetAiApplyJobFeedsParameterCursor>;
export const GetAiApplyJobFeedsParameterCursor = z.string();

export type GetAiApplyJobFeedsParameterPageSize = z.infer<typeof GetAiApplyJobFeedsParameterPageSize>;
export const GetAiApplyJobFeedsParameterPageSize = z.number().int().min(1).max(250).default(100);

export type GetAiApplyJobFeedsParameterIds = z.infer<typeof GetAiApplyJobFeedsParameterIds>;
export const GetAiApplyJobFeedsParameterIds = z.string();

export type GetAiApplyJobFeedsPositiveResponse = z.infer<typeof GetAiApplyJobFeedsPositiveResponse>;
export const GetAiApplyJobFeedsPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ results: z.array(z.object({ id: z.string(), label: z.string() })), next: z.string().nullable() }) });

export type PostAiApplyJobFeedsPositiveResponse = z.infer<typeof PostAiApplyJobFeedsPositiveResponse>;
export const PostAiApplyJobFeedsPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ id: z.string(), label: z.string() }) });

export type PostAiApplyJobFeedsRequestBody = z.infer<typeof PostAiApplyJobFeedsRequestBody>;
export const PostAiApplyJobFeedsRequestBody = z.object({ label: z.string().min(1) });

export type PostConnectCreateLinkPositiveResponse = z.infer<typeof PostConnectCreateLinkPositiveResponse>;
export const PostConnectCreateLinkPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ link: z.url() }) });

export type PostConnectCreateLinkRequestBody = z.infer<typeof PostConnectCreateLinkRequestBody>;
export const PostConnectCreateLinkRequestBody = z.object({ end_user_email: z.email(), end_user_organization_name: z.string().min(1), end_user_origin_id: z.string().min(1).nullable().optional(), remote_environment: z.string().nullable().optional(), integration_category: z.enum(["HRIS", "ATS", "ASSESSMENT", "LMS"]).default("HRIS"), integration_tool: z.enum(["workday", "successfactors", "smartrecruiters", "factorial", "oraclerecruiting", "lever", "icims", "cornerstonetalentlink", "recruitee", "recruiterflow", "greenhouse", "greenhousejobboard", "teamtailor", "teamtailorjobboards", "ashby", "talentsoft", "talentsoftcustomer", "concludis", "talention", "piloga", "onlyfy", "personio", "ukgpro", "ukgready", "adpworkforcenow", "taleo", "rexx", "afas", "bamboohr", "bullhorn", "bullhornlogin", "workable", "jobvite", "fountain", "softgarden", "softgardenpartner", "pinpoint", "welcometothejungle", "dvinci", "dvinciadmin", "join", "sagehr", "traffit", "erecruiter", "abacusumantis", "umantis", "jobylon", "taleez", "hrworks", "otys", "zohorecruit", "ceipal", "eploy", "jobdiva", "careerplug", "perview", "eightfold", "paylocity", "paycor", "avature", "apploi", "phenom", "paradox", "heyrecruit", "recruhr", "recruitcrm", "jazzhr", "bite", "brassring", "homerun", "mysolution", "carerix", "hroffice", "talentclue", "inrecruiting", "ubeeo", "connexys", "hr4you", "cornerstoneondemand", "zvooverecruit", "odoo", "comeet", "compleet", "compleetpitcher", "gem", "laura", "covetorest", "coveto", "mercury", "crelate", "manatal", "avionte", "mhmhr", "asymbl", "breezyhr", "flatchr", "dayforce", "digitalrecruiters", "applicantstack", "reachmee", "talentadore", "sandbox", "guidecom", "spott", "loxo", "kula", "workdaycustomreport", "workdaycustomreportsftp", "ukgprowfm", "payfitcustomer", "payfitpartner", "payfit", "employmenthero", "fourth", "kenjo", "heavenhr", "hibob", "cezannehr", "entraid", "azuread", "googleworkspace", "nmbrs", "deel", "remotecom", "iriscascade", "okta", "sagepeople", "humaans", "eurecia", "oraclehcm", "officient", "sesamehr", "charliehr", "abacus", "zohopeople", "gusto", "breathehr", "catalystone", "mirus", "alexishr", "simployer", "peple", "youserve", "hansalog", "lattice", "latticetalent", "hoorayhr", "trinet", "trinetpeo", "namely", "paycom", "insperity", "paychex", "rippling", "sapling", "peoplehr", "lucca", "zelt", "planday", "boondmanager", "haileyhr", "silae", "oysterhr", "kiwihr", "square", "perbilityhelix", "leapsome", "loket", "workforcecom", "peoplefirst", "sdworx", "itrent", "absenceio", "a3innuvanomina", "scim", "datevlauds", "datevhr", "datev", "datevlug", "sympa", "youforce", "nibelis", "peoplexd", "sftp", "sftpfetch", "360learning", "talentlms", "udemy", "linkedinlearning", "moodle"]).nullable().optional(), language: z.enum(["en", "de", "fr", "it", "es"]).default("en").nullable().default("en"), scope_config_id: z.string().nullable().optional(), enable_filtering: z.boolean().default(false), enable_field_mapping: z.boolean().default(false), link_type: z.enum(["EMBEDDED", "MAGIC_LINK"]).default("EMBEDDED") });

export type GetConnectIntegrationByTokenTokenParameterToken = z.infer<typeof GetConnectIntegrationByTokenTokenParameterToken>;
export const GetConnectIntegrationByTokenTokenParameterToken = z.string();

export type GetConnectIntegrationByTokenTokenPositiveResponse = z.infer<typeof GetConnectIntegrationByTokenTokenPositiveResponse>;
export const GetConnectIntegrationByTokenTokenPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ tool: z.string(), id: z.string(), end_user_origin_id: z.string().nullable(), end_user_organization_name: z.string(), end_user_email: z.string().regex(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$")).nullable(), setup_status: z.enum(["INCOMPLETE", "FINAL_SYNC_PENDING", "COMPLETED"]) }) });

export type PostConnectActivateIntegrationPositiveResponse = z.infer<typeof PostConnectActivateIntegrationPositiveResponse>;
export const PostConnectActivateIntegrationPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ tool: z.string(), id: z.string(), end_user_origin_id: z.string().nullable(), end_user_organization_name: z.string(), end_user_email: z.string().regex(new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$")).nullable(), setup_status: z.enum(["INCOMPLETE", "FINAL_SYNC_PENDING", "COMPLETED"]) }) });

export type PostConnectActivateIntegrationRequestBody = z.infer<typeof PostConnectActivateIntegrationRequestBody>;
export const PostConnectActivateIntegrationRequestBody = z.object({ token: z.string() });

export type GetCustomDatevSystemInformationPositiveResponse = z.infer<typeof GetCustomDatevSystemInformationPositiveResponse>;
export const GetCustomDatevSystemInformationPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ consultant_number: z.number().min(1000).max(9999999), client_number: z.number().min(1).max(99999), target_system: z.enum(["LODAS", "LuG"]) }) });

export type PostCustomDatevPassthroughPositiveResponse = z.infer<typeof PostCustomDatevPassthroughPositiveResponse>;
export const PostCustomDatevPassthroughPositiveResponse = z.object({ status: z.literal("success"), data: z.record(z.string(), z.unknown()), warnings: z.array(z.object({ message: z.string() })) });

export type PostCustomDatevPassthroughRequestBody = z.infer<typeof PostCustomDatevPassthroughRequestBody>;
export const PostCustomDatevPassthroughRequestBody = z.object({ file_content: z.string().min(1), accounting_month: z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")), target_system: z.enum(["LODAS", "LuG"]), file_type: z.enum(["STAMMDATEN", "BEWEGUNGSDATEN"]), file_name: z.string() });

export type GetCustomDatevCheckEauPermissionPositiveResponse = z.infer<typeof GetCustomDatevCheckEauPermissionPositiveResponse>;
export const GetCustomDatevCheckEauPermissionPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ ready: z.boolean(), error: z.string().optional() }), warnings: z.array(z.object({ message: z.string() })) });

export type GetCustomDatevEauRequestsEauIdParameterEauId = z.infer<typeof GetCustomDatevEauRequestsEauIdParameterEauId>;
export const GetCustomDatevEauRequestsEauIdParameterEauId = z.string();

export type GetCustomDatevEauRequestsEauIdPositiveResponse = z.infer<typeof GetCustomDatevEauRequestsEauIdPositiveResponse>;
export const GetCustomDatevEauRequestsEauIdPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ raw: z.object({ source: z.string(), start_work_incapacity: z.string(), collaboration_identifier: z.string().optional(), feedbacks_from_health_insurance: z.array(z.object({ guid: z.string(), contact_person: z.object({ gender_contact_person: z.enum(["M", "F", "X", "D"]).nullable().optional(), name: z.string(), telephone: z.string(), fax: z.string().nullable(), email: z.string().nullable(), name1_health_insurance: z.string(), name2_health_insurance: z.string().nullable().optional(), name3_health_insurance: z.string().nullable().optional(), postal_code: z.string(), city: z.string(), street: z.string().nullable(), house_number: z.string().nullable() }).nullable(), incapacity_for_work: z.object({ start_work_incapacity_employer: z.string(), start_work_incapacity_au: z.string().nullable(), end_work_incapacity_au: z.string().nullable(), actual_end_work_incapacity_au: z.string().nullable().optional(), date_of_diagnosis: z.string().nullable(), flag_current_work_incapacity: z.number().min(-1.7976931348623157e+308).nullable(), accident_at_work: z.boolean(), assignment_accident_insurance_doctor: z.boolean(), other_accident: z.boolean(), start_hospitalisation: z.string().nullable().optional(), end_hospitalisation: z.string().nullable().optional(), initial_certificate: z.boolean(), automatic_feedback_until: z.string().nullable() }), error_block_list: z.array(z.object({ origin: z.string().nullable(), error_number: z.string().nullable(), error_text: z.string().nullable(), error_value: z.string().nullable() })).nullable() })) }) }), warnings: z.array(z.object({ message: z.string() })) });

export type GetCustomDatevCheckDocumentPermissionPositiveResponse = z.infer<typeof GetCustomDatevCheckDocumentPermissionPositiveResponse>;
export const GetCustomDatevCheckDocumentPermissionPositiveResponse = z.object({ status: z.literal("success"), data: z.union([z.object({ ready: z.boolean(), documents_granted: z.array(z.string()) }), z.object({ ready: z.boolean(), error: z.string() })]), warnings: z.array(z.object({ message: z.string() })) });

export type GetCustomDatevAvailableDocumentsParameterPeriod = z.infer<typeof GetCustomDatevAvailableDocumentsParameterPeriod>;
export const GetCustomDatevAvailableDocumentsParameterPeriod = z.string();

export type GetCustomDatevAvailableDocumentsPositiveResponse = z.infer<typeof GetCustomDatevAvailableDocumentsPositiveResponse>;
export const GetCustomDatevAvailableDocumentsPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ results: z.array(z.object({ document_type: z.string(), available_for_employees: z.array(z.object({ id: z.string().nullable(), remote_id: z.string() })), is_company_document: z.boolean() })) }), warnings: z.array(z.object({ message: z.string() })) });

export type PostCustomDatevDownloadDocumentPositiveResponse = z.infer<typeof PostCustomDatevDownloadDocumentPositiveResponse>;
export const PostCustomDatevDownloadDocumentPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ data_url: z.url(), file_name: z.string(), content_type: z.string() }), warnings: z.array(z.object({ message: z.string() })) });

export type PostCustomDatevDownloadDocumentRequestBody = z.infer<typeof PostCustomDatevDownloadDocumentRequestBody>;
export const PostCustomDatevDownloadDocumentRequestBody = z.object({ accounting_month: z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")), document_type: z.enum(["AANB", "ABEG", "BUBE", "DAWE", "KBNW", "KOST", "KOTR", "LKTO", "LOBN", "LJOE", "LOJE", "LOJO", "LOPE", "LOPN", "LOPS", "LORE", "LOWE", "LSTA", "LSTB", "LSTE", "PDAT", "PFAN", "PRZA", "SBNW", "SVNW", "WEAN", "ZABR", "ZAKF", "ZAUW"]), employee_id: z.string().nullable() });

export type PostCustomDatevEmployeesEmployeeIdDownloadDocumentParameterEmployeeId = z.infer<typeof PostCustomDatevEmployeesEmployeeIdDownloadDocumentParameterEmployeeId>;
export const PostCustomDatevEmployeesEmployeeIdDownloadDocumentParameterEmployeeId = z.string().nullable();

export type PostCustomDatevEmployeesEmployeeIdDownloadDocumentPositiveResponse = z.infer<typeof PostCustomDatevEmployeesEmployeeIdDownloadDocumentPositiveResponse>;
export const PostCustomDatevEmployeesEmployeeIdDownloadDocumentPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ data_url: z.url(), file_name: z.string(), content_type: z.string() }), warnings: z.array(z.object({ message: z.string() })) });

export type PostCustomDatevEmployeesEmployeeIdDownloadDocumentRequestBody = z.infer<typeof PostCustomDatevEmployeesEmployeeIdDownloadDocumentRequestBody>;
export const PostCustomDatevEmployeesEmployeeIdDownloadDocumentRequestBody = z.object({ accounting_month: z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")), document_type: z.enum(["AANB", "ABEG", "BUBE", "DAWE", "KBNW", "KOST", "KOTR", "LKTO", "LOBN", "LJOE", "LOJE", "LOJO", "LOPE", "LOPN", "LOPS", "LORE", "LOWE", "LSTA", "LSTB", "LSTE", "PDAT", "PFAN", "PRZA", "SBNW", "SVNW", "WEAN", "ZABR", "ZAKF", "ZAUW"]) });

export type PostCustomDatevEmployeesEmployeeIdEauRequestsParameterEmployeeId = z.infer<typeof PostCustomDatevEmployeesEmployeeIdEauRequestsParameterEmployeeId>;
export const PostCustomDatevEmployeesEmployeeIdEauRequestsParameterEmployeeId = z.string();

export type PostCustomDatevEmployeesEmployeeIdEauRequestsPositiveResponse = z.infer<typeof PostCustomDatevEmployeesEmployeeIdEauRequestsPositiveResponse>;
export const PostCustomDatevEmployeesEmployeeIdEauRequestsPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ eau_id: z.string() }), warnings: z.array(z.object({ message: z.string() })) });

export type PostCustomDatevEmployeesEmployeeIdEauRequestsRequestBody = z.infer<typeof PostCustomDatevEmployeesEmployeeIdEauRequestsRequestBody>;
export const PostCustomDatevEmployeesEmployeeIdEauRequestsRequestBody = z.object({ start_work_incapacity: z.string().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}$")), notification: z.object({ email: z.string().regex(new RegExp("^[\\w!#$%&'*+/=?^`{|}~-]+(?:\\.[\\w!#$%&'*+/=?^`{|}~-]+)*@(?:[\\w-]+\\.)+[\\w-]{2,}$")) }).optional(), contact_person: z.object({ gender: z.enum(["M", "W", "X", "D"]), name: z.string().min(0).max(30), telephone: z.string().min(0).max(20).regex(new RegExp("([\\d+])[\\d ()/-]+")), fax: z.string().min(0).max(20).regex(new RegExp("([\\d+])[\\d ()/-]+")), email: z.string().min(0).max(70).regex(new RegExp("^(?=.{1,64}@)[\\w-]+(\\.[\\w-]+)*@[^-][\\dA-Za-z-]+(\\.[\\dA-Za-z-]+)*(\\.[A-Za-z]{2,})$")), company_name: z.string().min(0).max(90), postal_code: z.string().min(0).max(10).regex(new RegExp("[\\dA-Za-z]*")), city: z.string().min(0).max(34), street: z.string().min(0).max(33), house_number: z.string().min(0).max(9) }).optional() });

export type PutCustomDatevEmployeesEmployeeIdPreparePayrollParameterEmployeeId = z.infer<typeof PutCustomDatevEmployeesEmployeeIdPreparePayrollParameterEmployeeId>;
export const PutCustomDatevEmployeesEmployeeIdPreparePayrollParameterEmployeeId = z.string();

export type PutCustomDatevEmployeesEmployeeIdPreparePayrollPositiveResponse = z.infer<typeof PutCustomDatevEmployeesEmployeeIdPreparePayrollPositiveResponse>;
export const PutCustomDatevEmployeesEmployeeIdPreparePayrollPositiveResponse = z.object({ status: z.literal("success"), data: z.record(z.string(), z.unknown()), warnings: z.array(z.object({ message: z.string() })) });

export type PutCustomDatevEmployeesEmployeeIdPreparePayrollRequestBody = z.infer<typeof PutCustomDatevEmployeesEmployeeIdPreparePayrollRequestBody>;
export const PutCustomDatevEmployeesEmployeeIdPreparePayrollRequestBody = z.object({ payroll_run: z.object({ date: z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")) }), hourly_payments: z.array(z.object({ hours: z.number().min(-1.7976931348623157e+308), lohnart: z.number().min(-1.7976931348623157e+308) })), fixed_payments: z.array(z.object({ amount: z.number().min(-1.7976931348623157e+308), lohnart: z.number().min(-1.7976931348623157e+308) })), custom_lodas: z.array(z.object({ amount: z.number().min(-1.7976931348623157e+308), lohnart: z.number().min(-1.7976931348623157e+308), bearbeitungsschluessel: z.number().min(-1.7976931348623157e+308) })).default([]) });

export type PutCustomDatevEmployeesEmployeeIdCompensationsParameterEmployeeId = z.infer<typeof PutCustomDatevEmployeesEmployeeIdCompensationsParameterEmployeeId>;
export const PutCustomDatevEmployeesEmployeeIdCompensationsParameterEmployeeId = z.string();

export type PutCustomDatevEmployeesEmployeeIdCompensationsPositiveResponse = z.infer<typeof PutCustomDatevEmployeesEmployeeIdCompensationsPositiveResponse>;
export const PutCustomDatevEmployeesEmployeeIdCompensationsPositiveResponse = z.object({ status: z.literal("success"), data: z.record(z.string(), z.unknown()), warnings: z.array(z.object({ message: z.string() })) });

export type PutCustomDatevEmployeesEmployeeIdCompensationsRequestBody = z.infer<typeof PutCustomDatevEmployeesEmployeeIdCompensationsRequestBody>;
export const PutCustomDatevEmployeesEmployeeIdCompensationsRequestBody = z.object({ effective_date: z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")), compensations: z.array(z.object({ amount: z.number().min(-1.7976931348623157e+308), currency: z.literal("EUR"), period: z.enum(["HOUR", "MONTH"]), lohnart: z.number().int().min(1).max(9999).optional() })) });

export type GetCustomDatevCheckWritePermissionPositiveResponse = z.infer<typeof GetCustomDatevCheckWritePermissionPositiveResponse>;
export const GetCustomDatevCheckWritePermissionPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ ready: z.boolean(), error: z.string().optional() }), warnings: z.array(z.object({ message: z.string() })) });

export type GetCustomDatevDataPushesPositiveResponse = z.infer<typeof GetCustomDatevDataPushesPositiveResponse>;
export const GetCustomDatevDataPushesPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ data_pushes: z.array(z.object({ id: z.string(), type: z.enum(["GENERAL", "PAYROLL"]), created_at: z.iso.datetime(), upload_jobs: z.array(z.object({ id: z.string(), file_name: z.string(), state: z.enum(["FAILED", "UPLOADED", "IMPORTED", "CORRUPTED", "DELETED", "AUTO_DELETED"]), file: z.string() })) })) }) });

export type PostCustomDatevPushDataGeneralPositiveResponse = z.infer<typeof PostCustomDatevPushDataGeneralPositiveResponse>;
export const PostCustomDatevPushDataGeneralPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ files: z.array(z.object({ name: z.string(), content: z.string() })) }), warnings: z.array(z.object({ message: z.string() })) });

export type PostCustomDatevPushDataGeneralRequestBody = z.infer<typeof PostCustomDatevPushDataGeneralRequestBody>;
export const PostCustomDatevPushDataGeneralRequestBody = z.record(z.string(), z.unknown());

export type PostCustomDatevPushDataPayrollPositiveResponse = z.infer<typeof PostCustomDatevPushDataPayrollPositiveResponse>;
export const PostCustomDatevPushDataPayrollPositiveResponse = z.object({ status: z.literal("success"), data: z.object({ files: z.array(z.object({ name: z.string(), content: z.string() })) }), warnings: z.array(z.object({ message: z.string() })) });

export type PostCustomDatevPushDataPayrollRequestBody = z.infer<typeof PostCustomDatevPushDataPayrollRequestBody>;
export const PostCustomDatevPushDataPayrollRequestBody = z.object({ payroll_month: z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")) });

export type PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsParameterEmployeeId = z.infer<typeof PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsParameterEmployeeId>;
export const PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsParameterEmployeeId = z.string();

export type PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsPositiveResponse = z.infer<typeof PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsPositiveResponse>;
export const PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsPositiveResponse = z.object({ status: z.literal("success"), data: z.record(z.string(), z.unknown()), warnings: z.array(z.object({ message: z.string() })) });

export type PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsRequestBody = z.infer<typeof PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsRequestBody>;
export const PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsRequestBody = z.object({ supplement_code: z.string(), effective_date: z.iso.datetime().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$")), element_amount: z.number().min(-1.7976931348623157e+308).optional(), element_string: z.string().optional() });

export type DataChangedWebhookPayload = z.infer<typeof DataChangedWebhookPayload>;
export const DataChangedWebhookPayload = z.object({ id: z.string(), type: z.literal("data-changed"), data: z.object({ integration_id: z.string(), integration_tool: z.string(), integration_category: z.enum(["HRIS", "ATS", "ASSESSMENT", "LMS"]), changed_models: z.array(z.object({ name: z.enum(["hris_legal_entities", "hris_locations", "hris_employees", "hris_absence_types", "hris_absences", "hris_employments", "hris_teams", "hris_time_off_balances", "hris_timesheets", "hris_employee_document_categories", "hris_performance_reviews", "hris_performance_review_cycles", "hris_staffing_entities", "ats_users", "ats_jobs", "ats_job_postings", "ats_candidates", "ats_application_stages", "ats_applications", "ats_screening_questions", "ats_tags", "ats_interviews", "ats_offers", "ats_rejection_reasons", "ats_roles", "lms_users", "lms_course_providers", "lms_skills", "lms_courses", "lms_course_revisions", "lms_course_progressions", "hris_join_employees_teams", "hris_join_staffing_entities_locations", "hris_join_staffing_entities_legal_entities", "hris_join_staffing_entities_groups", "ats_join_candidates_tags", "ats_join_jobs_application_stages", "ats_join_jobs_screening_questions", "ats_join_user_job_role_assignments", "ats_join_jobs_users", "ats_join_users_roles", "ats_join_interviews_users", "lms_join_revisions_skills"]) })) }) });

export type ConnectionFlowFailedWebhookPayload = z.infer<typeof ConnectionFlowFailedWebhookPayload>;
export const ConnectionFlowFailedWebhookPayload = z.object({ id: z.string(), type: z.literal("connection-flow-failed"), data: z.object({ integration_tool: z.string(), integration_category: z.enum(["HRIS", "ATS", "ASSESSMENT", "LMS"]), end_user: z.object({ organization_name: z.string(), creator_email: z.email().nullable(), origin_id: z.string().nullable() }), log_url: z.url() }) });

export type IntegrationCreatedWebhookPayload = z.infer<typeof IntegrationCreatedWebhookPayload>;
export const IntegrationCreatedWebhookPayload = z.object({ id: z.string(), type: z.literal("integration-created"), data: z.object({ id: z.string(), tool: z.string(), category: z.enum(["HRIS", "ATS", "ASSESSMENT", "LMS"]), end_user: z.object({ organization_name: z.string(), creator_email: z.email().nullable(), origin_id: z.string().nullable() }) }) });

export type IntegrationDeletedWebhookPayload = z.infer<typeof IntegrationDeletedWebhookPayload>;
export const IntegrationDeletedWebhookPayload = z.object({ id: z.string(), type: z.literal("integration-deleted"), data: z.object({ id: z.string(), tool: z.string(), category: z.enum(["HRIS", "ATS", "ASSESSMENT", "LMS"]), end_user: z.object({ organization_name: z.string(), creator_email: z.email().nullable(), origin_id: z.string().nullable() }), deleted_at: z.iso.datetime() }) });

export type AssessmentOrderReceivedWebhookPayload = z.infer<typeof AssessmentOrderReceivedWebhookPayload>;
export const AssessmentOrderReceivedWebhookPayload = z.object({ id: z.string(), type: z.literal("assessment:order-received"), data: z.object({ id: z.string(), package_id: z.string(), status: z.enum(["OPEN", "COMPLETED", "CANCELLED", "REJECTED"]), integration_id: z.string(), candidate: z.object({ remote_id: z.string().nullable(), email: z.email(), first_name: z.string().nullable(), last_name: z.string().nullable(), phone: z.string().nullable() }), application: z.object({ remote_id: z.string().nullable() }), job: z.object({ remote_id: z.string().nullable(), name: z.string().nullable(), job_code: z.string().nullable(), description: z.string().nullable(), location: z.object({ street_1: z.string().nullable(), street_2: z.string().nullable(), city: z.string().nullable(), state: z.string().nullable(), zip_code: z.string().nullable(), country: z.string().nullable(), raw: z.string().nullable() }).partial().nullable(), hiring_team: z.array(z.object({ remote_id: z.string().nullable(), email: z.string().nullable(), first_name: z.string().nullable(), last_name: z.string().nullable(), hiring_team_roles: z.array(z.enum(["RECRUITER", "HIRING_MANAGER"])) })) }) }) });

export type InlineAssessmentOrderReceivedWebhookPayload = z.infer<typeof InlineAssessmentOrderReceivedWebhookPayload>;
export const InlineAssessmentOrderReceivedWebhookPayload = z.object({ id: z.string(), type: z.literal("inline-assessment:order-received"), data: z.object({ id: z.string(), package_id: z.string(), status: z.enum(["OPEN", "COMPLETED", "CANCELLED", "REJECTED"]), integration_id: z.string(), candidate: z.object({ remote_id: z.string().nullable(), email: z.email(), first_name: z.string().nullable(), last_name: z.string().nullable(), phone: z.string().nullable() }), application: z.object({ remote_id: z.string().nullable() }), job: z.object({ remote_id: z.string().nullable(), name: z.string().nullable(), job_code: z.string().nullable(), description: z.string().nullable(), location: z.object({ street_1: z.string().nullable(), street_2: z.string().nullable(), city: z.string().nullable(), state: z.string().nullable(), zip_code: z.string().nullable(), country: z.string().nullable(), raw: z.string().nullable() }).partial().nullable(), hiring_team: z.array(z.object({ remote_id: z.string().nullable(), email: z.string().nullable(), first_name: z.string().nullable(), last_name: z.string().nullable(), hiring_team_roles: z.array(z.enum(["RECRUITER", "HIRING_MANAGER"])) })) }) }) });

export type IntegrationStateChangedWebhookPayload = z.infer<typeof IntegrationStateChangedWebhookPayload>;
export const IntegrationStateChangedWebhookPayload = z.object({ id: z.string(), type: z.literal("integration-state-changed"), data: z.object({ integration_tool: z.string(), integration_id: z.string(), integration_category: z.enum(["HRIS", "ATS", "ASSESSMENT", "LMS"]), end_user: z.object({ organization_name: z.string(), creator_email: z.email().nullable(), origin_id: z.string().nullable() }), qa_status: z.enum(["PENDING", "FAILED", "PASSED"]), setup_status: z.enum(["INCOMPLETE", "FINAL_SYNC_PENDING", "COMPLETED"]), state: z.enum(["ACTIVE", "INVALID", "INACTIVE"]), updated_at: z.iso.datetime() }) });

export type AiApplyApplicationStatusUpdatedWebhookPayload = z.infer<typeof AiApplyApplicationStatusUpdatedWebhookPayload>;
export const AiApplyApplicationStatusUpdatedWebhookPayload = z.object({ id: z.string(), type: z.literal("ai-apply-application-status-updated"), data: z.object({ id: z.string(), job_posting_id: z.string(), status: z.enum(["SUBMITTED", "DUPLICATE", "PENDING", "FAILED"]), created_at: z.iso.datetime(), updated_at: z.iso.datetime() }) });

export type AiApplyJobPostingStatusUpdatedWebhookPayload = z.infer<typeof AiApplyJobPostingStatusUpdatedWebhookPayload>;
export const AiApplyJobPostingStatusUpdatedWebhookPayload = z.object({ id: z.string(), type: z.literal("ai-apply-job-posting-status-updated"), data: z.object({ id: z.string(), career_site: z.object({ id: z.string(), label: z.string() }), url: z.string(), job_code: z.string().nullable(), created_at: z.iso.datetime(), updated_at: z.iso.datetime(), archived_at: z.iso.datetime().nullable(), archived_reason: z.enum(["JOB_POSTING_TAKEN_OFFLINE", "MANUAL_ARCHIVE", "REMOVED_FROM_JOB_FEED"]).nullable(), availability: z.enum(["APPLYABLE", "PENDING", "ARCHIVED", "UNAVAILABLE"]) }) });

export type SyncFinishedWebhookPayload = z.infer<typeof SyncFinishedWebhookPayload>;
export const SyncFinishedWebhookPayload = z.object({ id: z.string(), type: z.literal("sync-finished"), data: z.object({ sync_id: z.string(), sync_state: z.string(), sync_started_at: z.iso.datetime(), sync_ended_at: z.iso.datetime(), sync_duration_seconds: z.number().int().min(0), integration_id: z.string(), integration_tool: z.string(), integration_category: z.enum(["HRIS", "ATS", "ASSESSMENT", "LMS"]), end_user: z.object({ organization_name: z.string(), creator_email: z.email().nullable(), origin_id: z.string().nullable() }), log_url: z.url() }) });

export type BulkImportJobPostingLocation = z.infer<typeof BulkImportJobPostingLocation>;
export const BulkImportJobPostingLocation = z.object({ country: z.string(), postal_code: z.string().optional() });

export type BulkImportJobPostingInput = z.infer<typeof BulkImportJobPostingInput>;
export const BulkImportJobPostingInput = z.object({ url: z.url(), career_site_label: z.string(), job_code: z.string().optional(), location: BulkImportJobPostingLocation.nullable().optional() });

export type BulkImportResponse = z.infer<typeof BulkImportResponse>;
export const BulkImportResponse = z.object({ status: z.literal("success"), data: z.object({ created: z.number().int(), processed: z.number().int(), archived: z.number().int() }) });

// </Schemas>

// <Endpoints>
export type get_GetCheckApiKey = typeof get_GetCheckApiKey;
export const get_GetCheckApiKey = {
  method: z.literal("GET"),
  path: z.literal("/check-api-key"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: z.never(),
  responses: { 200: GetCheckApiKeyPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type post_PostForceSync = typeof post_PostForceSync;
export const post_PostForceSync = {
  method: z.literal("POST"),
  path: z.literal("/force-sync"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { header: z.object({ "X-Integration-Id": z.string() }), body: PostForceSyncRequestBody },
  responses: { 200: PostForceSyncPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type post_PostPassthroughToolApi = typeof post_PostPassthroughToolApi;
export const post_PostPassthroughToolApi = {
  method: z.literal("POST"),
  path: z.literal("/passthrough/{tool}/{api}"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { path: z.object({ tool: PostPassthroughToolApiParameterTool, api: PostPassthroughToolApiParameterApi }), header: z.object({ "X-Integration-Id": z.string() }), body: PostPassthroughToolApiRequestBody },
  responses: { 200: PostPassthroughToolApiPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type delete_DeleteIntegrationsIntegrationId = typeof delete_DeleteIntegrationsIntegrationId;
export const delete_DeleteIntegrationsIntegrationId = {
  method: z.literal("DELETE"),
  path: z.literal("/integrations/{integration_id}"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { path: z.object({ integration_id: DeleteIntegrationsIntegrationIdParameterIntegrationId }), body: DeleteIntegrationsIntegrationIdRequestBody },
  responses: { 200: DeleteIntegrationsIntegrationIdPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type get_GetIntegrationsIntegrationId = typeof get_GetIntegrationsIntegrationId;
export const get_GetIntegrationsIntegrationId = {
  method: z.literal("GET"),
  path: z.literal("/integrations/{integration_id}"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { path: z.object({ integration_id: GetIntegrationsIntegrationIdParameterIntegrationId }) },
  responses: { 200: GetIntegrationsIntegrationIdPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type put_PutIntegrationsIntegrationIdEnabled = typeof put_PutIntegrationsIntegrationIdEnabled;
export const put_PutIntegrationsIntegrationIdEnabled = {
  method: z.literal("PUT"),
  path: z.literal("/integrations/{integration_id}/enabled"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { path: z.object({ integration_id: PutIntegrationsIntegrationIdEnabledParameterIntegrationId }), body: PutIntegrationsIntegrationIdEnabledRequestBody },
  responses: { 200: PutIntegrationsIntegrationIdEnabledPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type post_PostIntegrationsIntegrationIdRelink = typeof post_PostIntegrationsIntegrationIdRelink;
export const post_PostIntegrationsIntegrationIdRelink = {
  method: z.literal("POST"),
  path: z.literal("/integrations/{integration_id}/relink"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { path: z.object({ integration_id: PostIntegrationsIntegrationIdRelinkParameterIntegrationId }), body: PostIntegrationsIntegrationIdRelinkRequestBody },
  responses: { 200: PostIntegrationsIntegrationIdRelinkPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type post_PostIntegrationsIntegrationIdSetupLink = typeof post_PostIntegrationsIntegrationIdSetupLink;
export const post_PostIntegrationsIntegrationIdSetupLink = {
  method: z.literal("POST"),
  path: z.literal("/integrations/{integration_id}/setup-link"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { path: z.object({ integration_id: PostIntegrationsIntegrationIdSetupLinkParameterIntegrationId }), body: PostIntegrationsIntegrationIdSetupLinkRequestBody },
  responses: { 200: PostIntegrationsIntegrationIdSetupLinkPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type get_GetIntegrationsIntegrationIdIntegrationFields = typeof get_GetIntegrationsIntegrationIdIntegrationFields;
export const get_GetIntegrationsIntegrationIdIntegrationFields = {
  method: z.literal("GET"),
  path: z.literal("/integrations/{integration_id}/integration-fields"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { query: z.object({ cursor: GetIntegrationsIntegrationIdIntegrationFieldsParameterCursor, page_size: GetIntegrationsIntegrationIdIntegrationFieldsParameterPageSize }).partial().optional(), path: z.object({ integration_id: GetIntegrationsIntegrationIdIntegrationFieldsParameterIntegrationId }) },
  responses: { 200: GetIntegrationsIntegrationIdIntegrationFieldsPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type patch_PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldId = typeof patch_PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldId;
export const patch_PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldId = {
  method: z.literal("PATCH"),
  path: z.literal("/integrations/{integration_id}/integration-fields/{integration_field_id}"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { path: z.object({ integration_id: PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationId, integration_field_id: PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationFieldId }), body: PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdRequestBody },
  responses: { 200: PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type get_GetIntegrationsIntegrationIdCustomFields = typeof get_GetIntegrationsIntegrationIdCustomFields;
export const get_GetIntegrationsIntegrationIdCustomFields = {
  method: z.literal("GET"),
  path: z.literal("/integrations/{integration_id}/custom-fields"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { query: z.object({ cursor: GetIntegrationsIntegrationIdCustomFieldsParameterCursor, page_size: GetIntegrationsIntegrationIdCustomFieldsParameterPageSize }).partial().optional(), path: z.object({ integration_id: GetIntegrationsIntegrationIdCustomFieldsParameterIntegrationId }) },
  responses: { 200: GetIntegrationsIntegrationIdCustomFieldsPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type put_PutIntegrationsIntegrationIdCustomFieldsCustomFieldId = typeof put_PutIntegrationsIntegrationIdCustomFieldsCustomFieldId;
export const put_PutIntegrationsIntegrationIdCustomFieldsCustomFieldId = {
  method: z.literal("PUT"),
  path: z.literal("/integrations/{integration_id}/custom-fields/{custom_field_id}"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { path: z.object({ integration_id: PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterIntegrationId, custom_field_id: PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterCustomFieldId }), body: PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdRequestBody },
  responses: { 200: PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type get_GetToolsCategory = typeof get_GetToolsCategory;
export const get_GetToolsCategory = {
  method: z.literal("GET"),
  path: z.literal("/tools/{category}"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { path: z.object({ category: GetToolsCategoryParameterCategory }) },
  responses: { 200: GetToolsCategoryPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type post_PostHrisProvisioningGroupsGroupIdDiff = typeof post_PostHrisProvisioningGroupsGroupIdDiff;
export const post_PostHrisProvisioningGroupsGroupIdDiff = {
  method: z.literal("POST"),
  path: z.literal("/hris/provisioning-groups/{group_id}/diff"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { path: z.object({ group_id: PostHrisProvisioningGroupsGroupIdDiffParameterGroupId }), header: z.object({ "X-Integration-Id": z.string() }), body: PostHrisProvisioningGroupsGroupIdDiffRequestBody },
  responses: { 200: PostHrisProvisioningGroupsGroupIdDiffPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type post_PostHrisProvisioningGroupsGroupIdSetupLinks = typeof post_PostHrisProvisioningGroupsGroupIdSetupLinks;
export const post_PostHrisProvisioningGroupsGroupIdSetupLinks = {
  method: z.literal("POST"),
  path: z.literal("/hris/provisioning-groups/{group_id}/setup-links"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { path: z.object({ group_id: PostHrisProvisioningGroupsGroupIdSetupLinksParameterGroupId }), header: z.object({ "X-Integration-Id": z.string() }), body: PostHrisProvisioningGroupsGroupIdSetupLinksRequestBody },
  responses: { 200: PostHrisProvisioningGroupsGroupIdSetupLinksPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type get_GetHrisEmployees = typeof get_GetHrisEmployees;
export const get_GetHrisEmployees = {
  method: z.literal("GET"),
  path: z.literal("/hris/employees"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { query: z.object({ cursor: GetHrisEmployeesParameterCursor, page_size: GetHrisEmployeesParameterPageSize, updated_after: GetHrisEmployeesParameterUpdatedAfter, include_deleted: GetHrisEmployeesParameterIncludeDeleted, ignore_unsupported_filters: GetHrisEmployeesParameterIgnoreUnsupportedFilters, ids: GetHrisEmployeesParameterIds, remote_ids: GetHrisEmployeesParameterRemoteIds, employment_status: GetHrisEmployeesParameterEmploymentStatus, employment_statuses: GetHrisEmployeesParameterEmploymentStatuses, group_ids: GetHrisEmployeesParameterGroupIds, legal_entity_ids: GetHrisEmployeesParameterLegalEntityIds, work_location_ids: GetHrisEmployeesParameterWorkLocationIds, work_emails: GetHrisEmployeesParameterWorkEmails, personal_emails: GetHrisEmployeesParameterPersonalEmails, custom_fields: GetHrisEmployeesParameterCustomFields }).partial().optional(), header: z.object({ "X-Integration-Id": z.string() }) },
  responses: { 200: GetHrisEmployeesPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type post_PostHrisEmployees = typeof post_PostHrisEmployees;
export const post_PostHrisEmployees = {
  method: z.literal("POST"),
  path: z.literal("/hris/employees"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { header: z.object({ "X-Integration-Id": z.string() }), body: PostHrisEmployeesRequestBody },
  responses: { 200: PostHrisEmployeesPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type get_GetHrisEmployeesForm = typeof get_GetHrisEmployeesForm;
export const get_GetHrisEmployeesForm = {
  method: z.literal("GET"),
  path: z.literal("/hris/employees/form"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { header: z.object({ "X-Integration-Id": z.string() }) },
  responses: { 200: GetHrisEmployeesFormPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type post_PostHrisEmployeesForm = typeof post_PostHrisEmployeesForm;
export const post_PostHrisEmployeesForm = {
  method: z.literal("POST"),
  path: z.literal("/hris/employees/form"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { header: z.object({ "X-Integration-Id": z.string() }), body: PostHrisEmployeesFormRequestBody },
  responses: { 200: PostHrisEmployeesFormPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type patch_PatchHrisEmployeesEmployeeId = typeof patch_PatchHrisEmployeesEmployeeId;
export const patch_PatchHrisEmployeesEmployeeId = {
  method: z.literal("PATCH"),
  path: z.literal("/hris/employees/{employee_id}"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { path: z.object({ employee_id: PatchHrisEmployeesEmployeeIdParameterEmployeeId }), header: z.object({ "X-Integration-Id": z.string() }), body: PatchHrisEmployeesEmployeeIdRequestBody },
  responses: { 200: PatchHrisEmployeesEmployeeIdPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type post_PostHrisEmployeesEmployeeIdDocuments = typeof post_PostHrisEmployeesEmployeeIdDocuments;
export const post_PostHrisEmployeesEmployeeIdDocuments = {
  method: z.literal("POST"),
  path: z.literal("/hris/employees/{employee_id}/documents"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { path: z.object({ employee_id: PostHrisEmployeesEmployeeIdDocumentsParameterEmployeeId }), header: z.object({ "X-Integration-Id": z.string() }), body: PostHrisEmployeesEmployeeIdDocumentsRequestBody },
  responses: { 200: PostHrisEmployeesEmployeeIdDocumentsPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type get_GetHrisEmployeeDocumentCategories = typeof get_GetHrisEmployeeDocumentCategories;
export const get_GetHrisEmployeeDocumentCategories = {
  method: z.literal("GET"),
  path: z.literal("/hris/employee-document-categories"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { query: z.object({ cursor: GetHrisEmployeeDocumentCategoriesParameterCursor, page_size: GetHrisEmployeeDocumentCategoriesParameterPageSize, updated_after: GetHrisEmployeeDocumentCategoriesParameterUpdatedAfter, include_deleted: GetHrisEmployeeDocumentCategoriesParameterIncludeDeleted, ignore_unsupported_filters: GetHrisEmployeeDocumentCategoriesParameterIgnoreUnsupportedFilters, ids: GetHrisEmployeeDocumentCategoriesParameterIds, remote_ids: GetHrisEmployeeDocumentCategoriesParameterRemoteIds }).partial().optional(), header: z.object({ "X-Integration-Id": z.string() }) },
  responses: { 200: GetHrisEmployeeDocumentCategoriesPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type get_GetHrisTeams = typeof get_GetHrisTeams;
export const get_GetHrisTeams = {
  method: z.literal("GET"),
  path: z.literal("/hris/teams"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { query: z.object({ cursor: GetHrisTeamsParameterCursor, page_size: GetHrisTeamsParameterPageSize, updated_after: GetHrisTeamsParameterUpdatedAfter, include_deleted: GetHrisTeamsParameterIncludeDeleted, ignore_unsupported_filters: GetHrisTeamsParameterIgnoreUnsupportedFilters, ids: GetHrisTeamsParameterIds, remote_ids: GetHrisTeamsParameterRemoteIds }).partial().optional(), header: z.object({ "X-Integration-Id": z.string() }) },
  responses: { 200: GetHrisTeamsPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type get_GetHrisGroups = typeof get_GetHrisGroups;
export const get_GetHrisGroups = {
  method: z.literal("GET"),
  path: z.literal("/hris/groups"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { query: z.object({ cursor: GetHrisGroupsParameterCursor, page_size: GetHrisGroupsParameterPageSize, updated_after: GetHrisGroupsParameterUpdatedAfter, include_deleted: GetHrisGroupsParameterIncludeDeleted, ignore_unsupported_filters: GetHrisGroupsParameterIgnoreUnsupportedFilters, ids: GetHrisGroupsParameterIds, remote_ids: GetHrisGroupsParameterRemoteIds, types: GetHrisGroupsParameterTypes, name_contains: GetHrisGroupsParameterNameContains }).partial().optional(), header: z.object({ "X-Integration-Id": z.string() }) },
  responses: { 200: GetHrisGroupsPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type get_GetHrisEmployments = typeof get_GetHrisEmployments;
export const get_GetHrisEmployments = {
  method: z.literal("GET"),
  path: z.literal("/hris/employments"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { query: z.object({ cursor: GetHrisEmploymentsParameterCursor, page_size: GetHrisEmploymentsParameterPageSize, updated_after: GetHrisEmploymentsParameterUpdatedAfter, include_deleted: GetHrisEmploymentsParameterIncludeDeleted, ignore_unsupported_filters: GetHrisEmploymentsParameterIgnoreUnsupportedFilters, ids: GetHrisEmploymentsParameterIds, remote_ids: GetHrisEmploymentsParameterRemoteIds }).partial().optional(), header: z.object({ "X-Integration-Id": z.string() }) },
  responses: { 200: GetHrisEmploymentsPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type get_GetHrisLocations = typeof get_GetHrisLocations;
export const get_GetHrisLocations = {
  method: z.literal("GET"),
  path: z.literal("/hris/locations"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { query: z.object({ cursor: GetHrisLocationsParameterCursor, page_size: GetHrisLocationsParameterPageSize, updated_after: GetHrisLocationsParameterUpdatedAfter, include_deleted: GetHrisLocationsParameterIncludeDeleted, ignore_unsupported_filters: GetHrisLocationsParameterIgnoreUnsupportedFilters, ids: GetHrisLocationsParameterIds, remote_ids: GetHrisLocationsParameterRemoteIds, name_contains: GetHrisLocationsParameterNameContains }).partial().optional(), header: z.object({ "X-Integration-Id": z.string() }) },
  responses: { 200: GetHrisLocationsPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type get_GetHrisAbsenceTypes = typeof get_GetHrisAbsenceTypes;
export const get_GetHrisAbsenceTypes = {
  method: z.literal("GET"),
  path: z.literal("/hris/absence-types"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { query: z.object({ cursor: GetHrisAbsenceTypesParameterCursor, page_size: GetHrisAbsenceTypesParameterPageSize, updated_after: GetHrisAbsenceTypesParameterUpdatedAfter, include_deleted: GetHrisAbsenceTypesParameterIncludeDeleted, ignore_unsupported_filters: GetHrisAbsenceTypesParameterIgnoreUnsupportedFilters, ids: GetHrisAbsenceTypesParameterIds, remote_ids: GetHrisAbsenceTypesParameterRemoteIds }).partial().optional(), header: z.object({ "X-Integration-Id": z.string() }) },
  responses: { 200: GetHrisAbsenceTypesPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type get_GetHrisTimeOffBalances = typeof get_GetHrisTimeOffBalances;
export const get_GetHrisTimeOffBalances = {
  method: z.literal("GET"),
  path: z.literal("/hris/time-off-balances"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { query: z.object({ cursor: GetHrisTimeOffBalancesParameterCursor, page_size: GetHrisTimeOffBalancesParameterPageSize, updated_after: GetHrisTimeOffBalancesParameterUpdatedAfter, include_deleted: GetHrisTimeOffBalancesParameterIncludeDeleted, ignore_unsupported_filters: GetHrisTimeOffBalancesParameterIgnoreUnsupportedFilters, ids: GetHrisTimeOffBalancesParameterIds, remote_ids: GetHrisTimeOffBalancesParameterRemoteIds, employee_id: GetHrisTimeOffBalancesParameterEmployeeId }).partial().optional(), header: z.object({ "X-Integration-Id": z.string() }) },
  responses: { 200: GetHrisTimeOffBalancesPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type get_GetHrisAbsences = typeof get_GetHrisAbsences;
export const get_GetHrisAbsences = {
  method: z.literal("GET"),
  path: z.literal("/hris/absences"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { query: z.object({ cursor: GetHrisAbsencesParameterCursor, page_size: GetHrisAbsencesParameterPageSize, updated_after: GetHrisAbsencesParameterUpdatedAfter, include_deleted: GetHrisAbsencesParameterIncludeDeleted, ignore_unsupported_filters: GetHrisAbsencesParameterIgnoreUnsupportedFilters, ids: GetHrisAbsencesParameterIds, remote_ids: GetHrisAbsencesParameterRemoteIds, date_from: GetHrisAbsencesParameterDateFrom, date_until: GetHrisAbsencesParameterDateUntil, type_ids: GetHrisAbsencesParameterTypeIds, employee_id: GetHrisAbsencesParameterEmployeeId, time_from: GetHrisAbsencesParameterTimeFrom, time_until: GetHrisAbsencesParameterTimeUntil }).partial().optional(), header: z.object({ "X-Integration-Id": z.string() }) },
  responses: { 200: GetHrisAbsencesPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type post_PostHrisAbsences = typeof post_PostHrisAbsences;
export const post_PostHrisAbsences = {
  method: z.literal("POST"),
  path: z.literal("/hris/absences"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { header: z.object({ "X-Integration-Id": z.string() }), body: PostHrisAbsencesRequestBody },
  responses: { 200: PostHrisAbsencesPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type delete_DeleteHrisAbsencesAbsenceId = typeof delete_DeleteHrisAbsencesAbsenceId;
export const delete_DeleteHrisAbsencesAbsenceId = {
  method: z.literal("DELETE"),
  path: z.literal("/hris/absences/{absence_id}"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { path: z.object({ absence_id: DeleteHrisAbsencesAbsenceIdParameterAbsenceId }), header: z.object({ "X-Integration-Id": z.string() }), body: DeleteHrisAbsencesAbsenceIdRequestBody },
  responses: { 200: DeleteHrisAbsencesAbsenceIdPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type get_GetHrisLegalEntities = typeof get_GetHrisLegalEntities;
export const get_GetHrisLegalEntities = {
  method: z.literal("GET"),
  path: z.literal("/hris/legal-entities"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { query: z.object({ cursor: GetHrisLegalEntitiesParameterCursor, page_size: GetHrisLegalEntitiesParameterPageSize, updated_after: GetHrisLegalEntitiesParameterUpdatedAfter, include_deleted: GetHrisLegalEntitiesParameterIncludeDeleted, ignore_unsupported_filters: GetHrisLegalEntitiesParameterIgnoreUnsupportedFilters, ids: GetHrisLegalEntitiesParameterIds, remote_ids: GetHrisLegalEntitiesParameterRemoteIds, name_contains: GetHrisLegalEntitiesParameterNameContains }).partial().optional(), header: z.object({ "X-Integration-Id": z.string() }) },
  responses: { 200: GetHrisLegalEntitiesPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type get_GetHrisTimesheets = typeof get_GetHrisTimesheets;
export const get_GetHrisTimesheets = {
  method: z.literal("GET"),
  path: z.literal("/hris/timesheets"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { query: z.object({ cursor: GetHrisTimesheetsParameterCursor, page_size: GetHrisTimesheetsParameterPageSize, updated_after: GetHrisTimesheetsParameterUpdatedAfter, include_deleted: GetHrisTimesheetsParameterIncludeDeleted, ignore_unsupported_filters: GetHrisTimesheetsParameterIgnoreUnsupportedFilters, ids: GetHrisTimesheetsParameterIds, remote_ids: GetHrisTimesheetsParameterRemoteIds, employee_id: GetHrisTimesheetsParameterEmployeeId, started_before: GetHrisTimesheetsParameterStartedBefore, started_after: GetHrisTimesheetsParameterStartedAfter, ended_before: GetHrisTimesheetsParameterEndedBefore, ended_after: GetHrisTimesheetsParameterEndedAfter }).partial().optional(), header: z.object({ "X-Integration-Id": z.string() }) },
  responses: { 200: GetHrisTimesheetsPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type get_GetHrisPerformanceReviewCycles = typeof get_GetHrisPerformanceReviewCycles;
export const get_GetHrisPerformanceReviewCycles = {
  method: z.literal("GET"),
  path: z.literal("/hris/performance-review-cycles"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { query: z.object({ cursor: GetHrisPerformanceReviewCyclesParameterCursor, page_size: GetHrisPerformanceReviewCyclesParameterPageSize, updated_after: GetHrisPerformanceReviewCyclesParameterUpdatedAfter, include_deleted: GetHrisPerformanceReviewCyclesParameterIncludeDeleted, ignore_unsupported_filters: GetHrisPerformanceReviewCyclesParameterIgnoreUnsupportedFilters, ids: GetHrisPerformanceReviewCyclesParameterIds, remote_ids: GetHrisPerformanceReviewCyclesParameterRemoteIds }).partial().optional(), header: z.object({ "X-Integration-Id": z.string() }) },
  responses: { 200: GetHrisPerformanceReviewCyclesPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type get_GetHrisPerformanceReviews = typeof get_GetHrisPerformanceReviews;
export const get_GetHrisPerformanceReviews = {
  method: z.literal("GET"),
  path: z.literal("/hris/performance-reviews"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { query: z.object({ cursor: GetHrisPerformanceReviewsParameterCursor, page_size: GetHrisPerformanceReviewsParameterPageSize, updated_after: GetHrisPerformanceReviewsParameterUpdatedAfter, include_deleted: GetHrisPerformanceReviewsParameterIncludeDeleted, ignore_unsupported_filters: GetHrisPerformanceReviewsParameterIgnoreUnsupportedFilters, ids: GetHrisPerformanceReviewsParameterIds, remote_ids: GetHrisPerformanceReviewsParameterRemoteIds, types: GetHrisPerformanceReviewsParameterTypes, review_cycle_ids: GetHrisPerformanceReviewsParameterReviewCycleIds, reviewee_ids: GetHrisPerformanceReviewsParameterRevieweeIds }).partial().optional(), header: z.object({ "X-Integration-Id": z.string() }) },
  responses: { 200: GetHrisPerformanceReviewsPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type get_GetHrisSkills = typeof get_GetHrisSkills;
export const get_GetHrisSkills = {
  method: z.literal("GET"),
  path: z.literal("/hris/skills"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { query: z.object({ ids: GetHrisSkillsParameterIds, remote_ids: GetHrisSkillsParameterRemoteIds, name_contains: GetHrisSkillsParameterNameContains }).partial().optional(), header: z.object({ "X-Integration-Id": z.string() }) },
  responses: { 200: GetHrisSkillsPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type post_PostHrisSkills = typeof post_PostHrisSkills;
export const post_PostHrisSkills = {
  method: z.literal("POST"),
  path: z.literal("/hris/skills"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { header: z.object({ "X-Integration-Id": z.string() }), body: PostHrisSkillsRequestBody },
  responses: { 200: PostHrisSkillsPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type patch_PatchHrisSkillsSkillId = typeof patch_PatchHrisSkillsSkillId;
export const patch_PatchHrisSkillsSkillId = {
  method: z.literal("PATCH"),
  path: z.literal("/hris/skills/{skill_id}"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { path: z.object({ skill_id: PatchHrisSkillsSkillIdParameterSkillId }), header: z.object({ "X-Integration-Id": z.string() }), body: PatchHrisSkillsSkillIdRequestBody },
  responses: { 200: PatchHrisSkillsSkillIdPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type delete_DeleteHrisSkillsSkillId = typeof delete_DeleteHrisSkillsSkillId;
export const delete_DeleteHrisSkillsSkillId = {
  method: z.literal("DELETE"),
  path: z.literal("/hris/skills/{skill_id}"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { path: z.object({ skill_id: DeleteHrisSkillsSkillIdParameterSkillId }), header: z.object({ "X-Integration-Id": z.string() }), body: DeleteHrisSkillsSkillIdRequestBody },
  responses: { 200: DeleteHrisSkillsSkillIdPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type get_GetHrisEmployeeSkillAssignments = typeof get_GetHrisEmployeeSkillAssignments;
export const get_GetHrisEmployeeSkillAssignments = {
  method: z.literal("GET"),
  path: z.literal("/hris/employee-skill-assignments"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { query: z.object({ ids: GetHrisEmployeeSkillAssignmentsParameterIds, remote_ids: GetHrisEmployeeSkillAssignmentsParameterRemoteIds, employee_ids: GetHrisEmployeeSkillAssignmentsParameterEmployeeIds, skill_ids: GetHrisEmployeeSkillAssignmentsParameterSkillIds }).partial().optional(), header: z.object({ "X-Integration-Id": z.string() }) },
  responses: { 200: GetHrisEmployeeSkillAssignmentsPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type post_PostHrisEmployeeSkillAssignments = typeof post_PostHrisEmployeeSkillAssignments;
export const post_PostHrisEmployeeSkillAssignments = {
  method: z.literal("POST"),
  path: z.literal("/hris/employee-skill-assignments"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { header: z.object({ "X-Integration-Id": z.string() }), body: PostHrisEmployeeSkillAssignmentsRequestBody },
  responses: { 200: PostHrisEmployeeSkillAssignmentsPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type patch_PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentId = typeof patch_PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentId;
export const patch_PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentId = {
  method: z.literal("PATCH"),
  path: z.literal("/hris/employee-skill-assignments/{employee_skill_assignment_id}"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { path: z.object({ employee_skill_assignment_id: PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId }), header: z.object({ "X-Integration-Id": z.string() }), body: PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody },
  responses: { 200: PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type delete_DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentId = typeof delete_DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentId;
export const delete_DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentId = {
  method: z.literal("DELETE"),
  path: z.literal("/hris/employee-skill-assignments/{employee_skill_assignment_id}"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { path: z.object({ employee_skill_assignment_id: DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId }), header: z.object({ "X-Integration-Id": z.string() }), body: DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody },
  responses: { 200: DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type get_GetHrisStaffingEntities = typeof get_GetHrisStaffingEntities;
export const get_GetHrisStaffingEntities = {
  method: z.literal("GET"),
  path: z.literal("/hris/staffing-entities"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { query: z.object({ cursor: GetHrisStaffingEntitiesParameterCursor, page_size: GetHrisStaffingEntitiesParameterPageSize, updated_after: GetHrisStaffingEntitiesParameterUpdatedAfter, include_deleted: GetHrisStaffingEntitiesParameterIncludeDeleted, ignore_unsupported_filters: GetHrisStaffingEntitiesParameterIgnoreUnsupportedFilters, ids: GetHrisStaffingEntitiesParameterIds, remote_ids: GetHrisStaffingEntitiesParameterRemoteIds, model_types: GetHrisStaffingEntitiesParameterModelTypes, statuses: GetHrisStaffingEntitiesParameterStatuses }).partial().optional(), header: z.object({ "X-Integration-Id": z.string() }) },
  responses: { 200: GetHrisStaffingEntitiesPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type get_GetAtsApplications = typeof get_GetAtsApplications;
export const get_GetAtsApplications = {
  method: z.literal("GET"),
  path: z.literal("/ats/applications"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { query: z.object({ cursor: GetAtsApplicationsParameterCursor, page_size: GetAtsApplicationsParameterPageSize, updated_after: GetAtsApplicationsParameterUpdatedAfter, include_deleted: GetAtsApplicationsParameterIncludeDeleted, ignore_unsupported_filters: GetAtsApplicationsParameterIgnoreUnsupportedFilters, ids: GetAtsApplicationsParameterIds, remote_ids: GetAtsApplicationsParameterRemoteIds, outcome: GetAtsApplicationsParameterOutcome, outcomes: GetAtsApplicationsParameterOutcomes, job_ids: GetAtsApplicationsParameterJobIds, job_remote_ids: GetAtsApplicationsParameterJobRemoteIds, current_stage_ids: GetAtsApplicationsParameterCurrentStageIds, remote_created_after: GetAtsApplicationsParameterRemoteCreatedAfter }).partial().optional(), header: z.object({ "X-Integration-Id": z.string() }) },
  responses: { 200: GetAtsApplicationsPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type put_PutAtsApplicationsApplicationIdStage = typeof put_PutAtsApplicationsApplicationIdStage;
export const put_PutAtsApplicationsApplicationIdStage = {
  method: z.literal("PUT"),
  path: z.literal("/ats/applications/{application_id}/stage"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { path: z.object({ application_id: PutAtsApplicationsApplicationIdStageParameterApplicationId }), header: z.object({ "X-Integration-Id": z.string() }), body: PutAtsApplicationsApplicationIdStageRequestBody },
  responses: { 200: PutAtsApplicationsApplicationIdStagePositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type post_PostAtsApplicationsApplicationIdResultLinks = typeof post_PostAtsApplicationsApplicationIdResultLinks;
export const post_PostAtsApplicationsApplicationIdResultLinks = {
  method: z.literal("POST"),
  path: z.literal("/ats/applications/{application_id}/result-links"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { path: z.object({ application_id: PostAtsApplicationsApplicationIdResultLinksParameterApplicationId }), header: z.object({ "X-Integration-Id": z.string() }), body: PostAtsApplicationsApplicationIdResultLinksRequestBody },
  responses: { 200: PostAtsApplicationsApplicationIdResultLinksPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type post_PostAtsApplicationsApplicationIdNotes = typeof post_PostAtsApplicationsApplicationIdNotes;
export const post_PostAtsApplicationsApplicationIdNotes = {
  method: z.literal("POST"),
  path: z.literal("/ats/applications/{application_id}/notes"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { path: z.object({ application_id: PostAtsApplicationsApplicationIdNotesParameterApplicationId }), header: z.object({ "X-Integration-Id": z.string() }), body: PostAtsApplicationsApplicationIdNotesRequestBody },
  responses: { 200: PostAtsApplicationsApplicationIdNotesPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type get_GetAtsApplicationsApplicationIdAttachments = typeof get_GetAtsApplicationsApplicationIdAttachments;
export const get_GetAtsApplicationsApplicationIdAttachments = {
  method: z.literal("GET"),
  path: z.literal("/ats/applications/{application_id}/attachments"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { path: z.object({ application_id: GetAtsApplicationsApplicationIdAttachmentsParameterApplicationId }), header: z.object({ "X-Integration-Id": z.string() }) },
  responses: { 200: GetAtsApplicationsApplicationIdAttachmentsPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type post_PostAtsApplicationsApplicationIdAttachments = typeof post_PostAtsApplicationsApplicationIdAttachments;
export const post_PostAtsApplicationsApplicationIdAttachments = {
  method: z.literal("POST"),
  path: z.literal("/ats/applications/{application_id}/attachments"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { path: z.object({ application_id: PostAtsApplicationsApplicationIdAttachmentsParameterApplicationId }), header: z.object({ "X-Integration-Id": z.string() }), body: PostAtsApplicationsApplicationIdAttachmentsRequestBody },
  responses: { 200: PostAtsApplicationsApplicationIdAttachmentsPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type post_PostAtsApplicationsApplicationIdReject = typeof post_PostAtsApplicationsApplicationIdReject;
export const post_PostAtsApplicationsApplicationIdReject = {
  method: z.literal("POST"),
  path: z.literal("/ats/applications/{application_id}/reject"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { path: z.object({ application_id: PostAtsApplicationsApplicationIdRejectParameterApplicationId }), header: z.object({ "X-Integration-Id": z.string() }), body: PostAtsApplicationsApplicationIdRejectRequestBody },
  responses: { 200: PostAtsApplicationsApplicationIdRejectPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type post_PostAtsApplicationsApplicationIdInterviews = typeof post_PostAtsApplicationsApplicationIdInterviews;
export const post_PostAtsApplicationsApplicationIdInterviews = {
  method: z.literal("POST"),
  path: z.literal("/ats/applications/{application_id}/interviews"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { path: z.object({ application_id: PostAtsApplicationsApplicationIdInterviewsParameterApplicationId }), header: z.object({ "X-Integration-Id": z.string() }), body: PostAtsApplicationsApplicationIdInterviewsRequestBody },
  responses: { 200: PostAtsApplicationsApplicationIdInterviewsPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type patch_PatchAtsApplicationsApplicationIdInterviews = typeof patch_PatchAtsApplicationsApplicationIdInterviews;
export const patch_PatchAtsApplicationsApplicationIdInterviews = {
  method: z.literal("PATCH"),
  path: z.literal("/ats/applications/{application_id}/interviews"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { path: z.object({ application_id: PatchAtsApplicationsApplicationIdInterviewsParameterApplicationId }), header: z.object({ "X-Integration-Id": z.string() }), body: PatchAtsApplicationsApplicationIdInterviewsRequestBody },
  responses: { 200: PatchAtsApplicationsApplicationIdInterviewsPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type get_GetAtsCandidates = typeof get_GetAtsCandidates;
export const get_GetAtsCandidates = {
  method: z.literal("GET"),
  path: z.literal("/ats/candidates"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { query: z.object({ cursor: GetAtsCandidatesParameterCursor, page_size: GetAtsCandidatesParameterPageSize, updated_after: GetAtsCandidatesParameterUpdatedAfter, include_deleted: GetAtsCandidatesParameterIncludeDeleted, ignore_unsupported_filters: GetAtsCandidatesParameterIgnoreUnsupportedFilters, ids: GetAtsCandidatesParameterIds, remote_ids: GetAtsCandidatesParameterRemoteIds, email: GetAtsCandidatesParameterEmail, job_ids: GetAtsCandidatesParameterJobIds, first_name: GetAtsCandidatesParameterFirstName, last_name: GetAtsCandidatesParameterLastName }).partial().optional(), header: z.object({ "X-Integration-Id": z.string() }) },
  responses: { 200: GetAtsCandidatesPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type post_PostAtsCandidates = typeof post_PostAtsCandidates;
export const post_PostAtsCandidates = {
  method: z.literal("POST"),
  path: z.literal("/ats/candidates"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { header: z.object({ "X-Integration-Id": z.string() }), body: PostAtsCandidatesRequestBody },
  responses: { 200: PostAtsCandidatesPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type get_GetAtsCandidatesCandidateIdAttachments = typeof get_GetAtsCandidatesCandidateIdAttachments;
export const get_GetAtsCandidatesCandidateIdAttachments = {
  method: z.literal("GET"),
  path: z.literal("/ats/candidates/{candidate_id}/attachments"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { path: z.object({ candidate_id: GetAtsCandidatesCandidateIdAttachmentsParameterCandidateId }), header: z.object({ "X-Integration-Id": z.string() }) },
  responses: { 200: GetAtsCandidatesCandidateIdAttachmentsPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type post_PostAtsCandidatesCandidateIdAttachments = typeof post_PostAtsCandidatesCandidateIdAttachments;
export const post_PostAtsCandidatesCandidateIdAttachments = {
  method: z.literal("POST"),
  path: z.literal("/ats/candidates/{candidate_id}/attachments"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { path: z.object({ candidate_id: PostAtsCandidatesCandidateIdAttachmentsParameterCandidateId }), header: z.object({ "X-Integration-Id": z.string() }), body: PostAtsCandidatesCandidateIdAttachmentsRequestBody },
  responses: { 200: PostAtsCandidatesCandidateIdAttachmentsPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type post_PostAtsCandidatesCandidateIdResultLinks = typeof post_PostAtsCandidatesCandidateIdResultLinks;
export const post_PostAtsCandidatesCandidateIdResultLinks = {
  method: z.literal("POST"),
  path: z.literal("/ats/candidates/{candidate_id}/result-links"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { path: z.object({ candidate_id: PostAtsCandidatesCandidateIdResultLinksParameterCandidateId }), header: z.object({ "X-Integration-Id": z.string() }), body: PostAtsCandidatesCandidateIdResultLinksRequestBody },
  responses: { 200: PostAtsCandidatesCandidateIdResultLinksPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type post_PostAtsCandidatesCandidateIdTags = typeof post_PostAtsCandidatesCandidateIdTags;
export const post_PostAtsCandidatesCandidateIdTags = {
  method: z.literal("POST"),
  path: z.literal("/ats/candidates/{candidate_id}/tags"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { path: z.object({ candidate_id: PostAtsCandidatesCandidateIdTagsParameterCandidateId }), header: z.object({ "X-Integration-Id": z.string() }), body: PostAtsCandidatesCandidateIdTagsRequestBody },
  responses: { 200: PostAtsCandidatesCandidateIdTagsPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type delete_DeleteAtsCandidatesCandidateIdTags = typeof delete_DeleteAtsCandidatesCandidateIdTags;
export const delete_DeleteAtsCandidatesCandidateIdTags = {
  method: z.literal("DELETE"),
  path: z.literal("/ats/candidates/{candidate_id}/tags"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { path: z.object({ candidate_id: DeleteAtsCandidatesCandidateIdTagsParameterCandidateId }), header: z.object({ "X-Integration-Id": z.string() }), body: DeleteAtsCandidatesCandidateIdTagsRequestBody },
  responses: { 200: DeleteAtsCandidatesCandidateIdTagsPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type get_GetAtsTags = typeof get_GetAtsTags;
export const get_GetAtsTags = {
  method: z.literal("GET"),
  path: z.literal("/ats/tags"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { query: z.object({ cursor: GetAtsTagsParameterCursor, page_size: GetAtsTagsParameterPageSize, updated_after: GetAtsTagsParameterUpdatedAfter, include_deleted: GetAtsTagsParameterIncludeDeleted, ignore_unsupported_filters: GetAtsTagsParameterIgnoreUnsupportedFilters, ids: GetAtsTagsParameterIds, remote_ids: GetAtsTagsParameterRemoteIds }).partial().optional(), header: z.object({ "X-Integration-Id": z.string() }) },
  responses: { 200: GetAtsTagsPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type get_GetAtsApplicationStages = typeof get_GetAtsApplicationStages;
export const get_GetAtsApplicationStages = {
  method: z.literal("GET"),
  path: z.literal("/ats/application-stages"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { query: z.object({ cursor: GetAtsApplicationStagesParameterCursor, page_size: GetAtsApplicationStagesParameterPageSize, updated_after: GetAtsApplicationStagesParameterUpdatedAfter, include_deleted: GetAtsApplicationStagesParameterIncludeDeleted, ignore_unsupported_filters: GetAtsApplicationStagesParameterIgnoreUnsupportedFilters, ids: GetAtsApplicationStagesParameterIds, remote_ids: GetAtsApplicationStagesParameterRemoteIds }).partial().optional(), header: z.object({ "X-Integration-Id": z.string() }) },
  responses: { 200: GetAtsApplicationStagesPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type get_GetAtsJobs = typeof get_GetAtsJobs;
export const get_GetAtsJobs = {
  method: z.literal("GET"),
  path: z.literal("/ats/jobs"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { query: z.object({ cursor: GetAtsJobsParameterCursor, page_size: GetAtsJobsParameterPageSize, updated_after: GetAtsJobsParameterUpdatedAfter, include_deleted: GetAtsJobsParameterIncludeDeleted, ignore_unsupported_filters: GetAtsJobsParameterIgnoreUnsupportedFilters, ids: GetAtsJobsParameterIds, remote_ids: GetAtsJobsParameterRemoteIds, job_codes: GetAtsJobsParameterJobCodes, post_url: GetAtsJobsParameterPostUrl, status: GetAtsJobsParameterStatus, statuses: GetAtsJobsParameterStatuses, employment_types: GetAtsJobsParameterEmploymentTypes, visibilities: GetAtsJobsParameterVisibilities, remote_created_after: GetAtsJobsParameterRemoteCreatedAfter, name_contains: GetAtsJobsParameterNameContains }).partial().optional(), header: z.object({ "X-Integration-Id": z.string() }) },
  responses: { 200: GetAtsJobsPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type post_PostAtsJobsJobIdApplications = typeof post_PostAtsJobsJobIdApplications;
export const post_PostAtsJobsJobIdApplications = {
  method: z.literal("POST"),
  path: z.literal("/ats/jobs/{job_id}/applications"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { path: z.object({ job_id: PostAtsJobsJobIdApplicationsParameterJobId }), header: z.object({ "X-Integration-Id": z.string() }), body: PostAtsJobsJobIdApplicationsRequestBody },
  responses: { 200: PostAtsJobsJobIdApplicationsPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type get_GetAtsUsers = typeof get_GetAtsUsers;
export const get_GetAtsUsers = {
  method: z.literal("GET"),
  path: z.literal("/ats/users"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { query: z.object({ cursor: GetAtsUsersParameterCursor, page_size: GetAtsUsersParameterPageSize, updated_after: GetAtsUsersParameterUpdatedAfter, include_deleted: GetAtsUsersParameterIncludeDeleted, ignore_unsupported_filters: GetAtsUsersParameterIgnoreUnsupportedFilters, ids: GetAtsUsersParameterIds, remote_ids: GetAtsUsersParameterRemoteIds, emails: GetAtsUsersParameterEmails }).partial().optional(), header: z.object({ "X-Integration-Id": z.string() }) },
  responses: { 200: GetAtsUsersPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type get_GetAtsRoles = typeof get_GetAtsRoles;
export const get_GetAtsRoles = {
  method: z.literal("GET"),
  path: z.literal("/ats/roles"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { query: z.object({ cursor: GetAtsRolesParameterCursor, page_size: GetAtsRolesParameterPageSize, updated_after: GetAtsRolesParameterUpdatedAfter, include_deleted: GetAtsRolesParameterIncludeDeleted, ignore_unsupported_filters: GetAtsRolesParameterIgnoreUnsupportedFilters, ids: GetAtsRolesParameterIds, remote_ids: GetAtsRolesParameterRemoteIds, scopes: GetAtsRolesParameterScopes }).partial().optional(), header: z.object({ "X-Integration-Id": z.string() }) },
  responses: { 200: GetAtsRolesPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type get_GetAtsOffers = typeof get_GetAtsOffers;
export const get_GetAtsOffers = {
  method: z.literal("GET"),
  path: z.literal("/ats/offers"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { query: z.object({ cursor: GetAtsOffersParameterCursor, page_size: GetAtsOffersParameterPageSize, updated_after: GetAtsOffersParameterUpdatedAfter, include_deleted: GetAtsOffersParameterIncludeDeleted, ignore_unsupported_filters: GetAtsOffersParameterIgnoreUnsupportedFilters, ids: GetAtsOffersParameterIds, remote_ids: GetAtsOffersParameterRemoteIds }).partial().optional(), header: z.object({ "X-Integration-Id": z.string() }) },
  responses: { 200: GetAtsOffersPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type get_GetAtsRejectionReasons = typeof get_GetAtsRejectionReasons;
export const get_GetAtsRejectionReasons = {
  method: z.literal("GET"),
  path: z.literal("/ats/rejection-reasons"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { query: z.object({ cursor: GetAtsRejectionReasonsParameterCursor, page_size: GetAtsRejectionReasonsParameterPageSize, updated_after: GetAtsRejectionReasonsParameterUpdatedAfter, include_deleted: GetAtsRejectionReasonsParameterIncludeDeleted, ignore_unsupported_filters: GetAtsRejectionReasonsParameterIgnoreUnsupportedFilters, ids: GetAtsRejectionReasonsParameterIds, remote_ids: GetAtsRejectionReasonsParameterRemoteIds }).partial().optional(), header: z.object({ "X-Integration-Id": z.string() }) },
  responses: { 200: GetAtsRejectionReasonsPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type get_GetAtsInterviews = typeof get_GetAtsInterviews;
export const get_GetAtsInterviews = {
  method: z.literal("GET"),
  path: z.literal("/ats/interviews"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { query: z.object({ cursor: GetAtsInterviewsParameterCursor, page_size: GetAtsInterviewsParameterPageSize, updated_after: GetAtsInterviewsParameterUpdatedAfter, include_deleted: GetAtsInterviewsParameterIncludeDeleted, ignore_unsupported_filters: GetAtsInterviewsParameterIgnoreUnsupportedFilters, ids: GetAtsInterviewsParameterIds, remote_ids: GetAtsInterviewsParameterRemoteIds, job_ids: GetAtsInterviewsParameterJobIds }).partial().optional(), header: z.object({ "X-Integration-Id": z.string() }) },
  responses: { 200: GetAtsInterviewsPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type get_GetAtsActionsAtsCreateCandidate = typeof get_GetAtsActionsAtsCreateCandidate;
export const get_GetAtsActionsAtsCreateCandidate = {
  method: z.literal("GET"),
  path: z.literal("/ats/actions/ats_create_candidate"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { header: z.object({ "X-Integration-Id": z.string() }) },
  responses: { 200: GetAtsActionsAtsCreateCandidatePositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type get_GetAtsActionsAtsCreateApplication = typeof get_GetAtsActionsAtsCreateApplication;
export const get_GetAtsActionsAtsCreateApplication = {
  method: z.literal("GET"),
  path: z.literal("/ats/actions/ats_create_application"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { header: z.object({ "X-Integration-Id": z.string() }) },
  responses: { 200: GetAtsActionsAtsCreateApplicationPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type get_GetAtsActionsAtsAddApplicationAttachment = typeof get_GetAtsActionsAtsAddApplicationAttachment;
export const get_GetAtsActionsAtsAddApplicationAttachment = {
  method: z.literal("GET"),
  path: z.literal("/ats/actions/ats_add_application_attachment"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { header: z.object({ "X-Integration-Id": z.string() }) },
  responses: { 200: GetAtsActionsAtsAddApplicationAttachmentPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type get_GetAtsActionsAtsAddCandidateAttachment = typeof get_GetAtsActionsAtsAddCandidateAttachment;
export const get_GetAtsActionsAtsAddCandidateAttachment = {
  method: z.literal("GET"),
  path: z.literal("/ats/actions/ats_add_candidate_attachment"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { header: z.object({ "X-Integration-Id": z.string() }) },
  responses: { 200: GetAtsActionsAtsAddCandidateAttachmentPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type post_PostAtsImportTrackedApplication = typeof post_PostAtsImportTrackedApplication;
export const post_PostAtsImportTrackedApplication = {
  method: z.literal("POST"),
  path: z.literal("/ats/import-tracked-application"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { header: z.object({ "X-Integration-Id": z.string() }), body: PostAtsImportTrackedApplicationRequestBody },
  responses: { 200: PostAtsImportTrackedApplicationPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type post_PostAtsCustomAvionteSyncedJobs = typeof post_PostAtsCustomAvionteSyncedJobs;
export const post_PostAtsCustomAvionteSyncedJobs = {
  method: z.literal("POST"),
  path: z.literal("/ats/custom/avionte/synced-jobs"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { header: z.object({ "X-Integration-Id": z.string() }), body: PostAtsCustomAvionteSyncedJobsRequestBody },
  responses: { 200: PostAtsCustomAvionteSyncedJobsPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type delete_DeleteAtsCustomAvionteSyncedJobsJobRemoteId = typeof delete_DeleteAtsCustomAvionteSyncedJobsJobRemoteId;
export const delete_DeleteAtsCustomAvionteSyncedJobsJobRemoteId = {
  method: z.literal("DELETE"),
  path: z.literal("/ats/custom/avionte/synced-jobs/{job_remote_id}"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { path: z.object({ job_remote_id: DeleteAtsCustomAvionteSyncedJobsJobRemoteIdParameterJobRemoteId }), header: z.object({ "X-Integration-Id": z.string() }), body: DeleteAtsCustomAvionteSyncedJobsJobRemoteIdRequestBody },
  responses: { 200: DeleteAtsCustomAvionteSyncedJobsJobRemoteIdPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type get_GetAssessmentPackages = typeof get_GetAssessmentPackages;
export const get_GetAssessmentPackages = {
  method: z.literal("GET"),
  path: z.literal("/assessment/packages"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { header: z.object({ "X-Integration-Id": z.string() }) },
  responses: { 200: GetAssessmentPackagesPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type put_PutAssessmentPackages = typeof put_PutAssessmentPackages;
export const put_PutAssessmentPackages = {
  method: z.literal("PUT"),
  path: z.literal("/assessment/packages"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { header: z.object({ "X-Integration-Id": z.string() }), body: PutAssessmentPackagesRequestBody },
  responses: { 200: PutAssessmentPackagesPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type get_GetAssessmentOrders = typeof get_GetAssessmentOrders;
export const get_GetAssessmentOrders = {
  method: z.literal("GET"),
  path: z.literal("/assessment/orders"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { query: z.object({ cursor: GetAssessmentOrdersParameterCursor, page_size: GetAssessmentOrdersParameterPageSize, ids: GetAssessmentOrdersParameterIds, statuses: GetAssessmentOrdersParameterStatuses, created_after: GetAssessmentOrdersParameterCreatedAfter }).partial().optional(), header: z.object({ "X-Integration-Id": z.string() }) },
  responses: { 200: GetAssessmentOrdersPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type get_GetAssessmentOrdersOpen = typeof get_GetAssessmentOrdersOpen;
export const get_GetAssessmentOrdersOpen = {
  method: z.literal("GET"),
  path: z.literal("/assessment/orders/open"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { query: z.object({ cursor: GetAssessmentOrdersOpenParameterCursor, page_size: GetAssessmentOrdersOpenParameterPageSize }).partial().optional(), header: z.object({ "X-Integration-Id": z.string() }) },
  responses: { 200: GetAssessmentOrdersOpenPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type put_PutAssessmentOrdersAssessmentOrderIdResult = typeof put_PutAssessmentOrdersAssessmentOrderIdResult;
export const put_PutAssessmentOrdersAssessmentOrderIdResult = {
  method: z.literal("PUT"),
  path: z.literal("/assessment/orders/{assessment_order_id}/result"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { path: z.object({ assessment_order_id: PutAssessmentOrdersAssessmentOrderIdResultParameterAssessmentOrderId }), header: z.object({ "X-Integration-Id": z.string() }), body: PutAssessmentOrdersAssessmentOrderIdResultRequestBody },
  responses: { 200: PutAssessmentOrdersAssessmentOrderIdResultPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type get_GetLmsUsers = typeof get_GetLmsUsers;
export const get_GetLmsUsers = {
  method: z.literal("GET"),
  path: z.literal("/lms/users"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { query: z.object({ cursor: GetLmsUsersParameterCursor, page_size: GetLmsUsersParameterPageSize, updated_after: GetLmsUsersParameterUpdatedAfter, include_deleted: GetLmsUsersParameterIncludeDeleted, ignore_unsupported_filters: GetLmsUsersParameterIgnoreUnsupportedFilters, ids: GetLmsUsersParameterIds, remote_ids: GetLmsUsersParameterRemoteIds, work_emails: GetLmsUsersParameterWorkEmails }).partial().optional(), header: z.object({ "X-Integration-Id": z.string() }) },
  responses: { 200: GetLmsUsersPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type get_GetLmsCourseProgressions = typeof get_GetLmsCourseProgressions;
export const get_GetLmsCourseProgressions = {
  method: z.literal("GET"),
  path: z.literal("/lms/course-progressions"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { query: z.object({ cursor: GetLmsCourseProgressionsParameterCursor, page_size: GetLmsCourseProgressionsParameterPageSize, updated_after: GetLmsCourseProgressionsParameterUpdatedAfter, include_deleted: GetLmsCourseProgressionsParameterIncludeDeleted, ignore_unsupported_filters: GetLmsCourseProgressionsParameterIgnoreUnsupportedFilters, ids: GetLmsCourseProgressionsParameterIds, remote_ids: GetLmsCourseProgressionsParameterRemoteIds, user_ids: GetLmsCourseProgressionsParameterUserIds, course_ids: GetLmsCourseProgressionsParameterCourseIds }).partial().optional(), header: z.object({ "X-Integration-Id": z.string() }) },
  responses: { 200: GetLmsCourseProgressionsPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type post_PostLmsCourseProgressions = typeof post_PostLmsCourseProgressions;
export const post_PostLmsCourseProgressions = {
  method: z.literal("POST"),
  path: z.literal("/lms/course-progressions"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { header: z.object({ "X-Integration-Id": z.string() }), body: PostLmsCourseProgressionsRequestBody },
  responses: { 200: PostLmsCourseProgressionsPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type post_PostLmsCourseProgressionsCourseProgressionIdComplete = typeof post_PostLmsCourseProgressionsCourseProgressionIdComplete;
export const post_PostLmsCourseProgressionsCourseProgressionIdComplete = {
  method: z.literal("POST"),
  path: z.literal("/lms/course-progressions/{course_progression_id}/complete"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { path: z.object({ course_progression_id: PostLmsCourseProgressionsCourseProgressionIdCompleteParameterCourseProgressionId }), header: z.object({ "X-Integration-Id": z.string() }), body: PostLmsCourseProgressionsCourseProgressionIdCompleteRequestBody },
  responses: { 200: PostLmsCourseProgressionsCourseProgressionIdCompletePositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type get_GetLmsCourses = typeof get_GetLmsCourses;
export const get_GetLmsCourses = {
  method: z.literal("GET"),
  path: z.literal("/lms/courses"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { query: z.object({ cursor: GetLmsCoursesParameterCursor, page_size: GetLmsCoursesParameterPageSize, updated_after: GetLmsCoursesParameterUpdatedAfter, include_deleted: GetLmsCoursesParameterIncludeDeleted, ignore_unsupported_filters: GetLmsCoursesParameterIgnoreUnsupportedFilters, ids: GetLmsCoursesParameterIds, remote_ids: GetLmsCoursesParameterRemoteIds }).partial().optional(), header: z.object({ "X-Integration-Id": z.string() }) },
  responses: { 200: GetLmsCoursesPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type post_PostLmsCoursesBulk = typeof post_PostLmsCoursesBulk;
export const post_PostLmsCoursesBulk = {
  method: z.literal("POST"),
  path: z.literal("/lms/courses/bulk"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { header: z.object({ "X-Integration-Id": z.string() }), body: PostLmsCoursesBulkRequestBody },
  responses: { 200: PostLmsCoursesBulkPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type get_GetLmsCoursesBulkTaskId = typeof get_GetLmsCoursesBulkTaskId;
export const get_GetLmsCoursesBulkTaskId = {
  method: z.literal("GET"),
  path: z.literal("/lms/courses/bulk/{task_id}"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { path: z.object({ task_id: GetLmsCoursesBulkTaskIdParameterTaskId }), header: z.object({ "X-Integration-Id": z.string() }) },
  responses: { 200: GetLmsCoursesBulkTaskIdPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type post_PostLmsCoursesCourseIdDeactivate = typeof post_PostLmsCoursesCourseIdDeactivate;
export const post_PostLmsCoursesCourseIdDeactivate = {
  method: z.literal("POST"),
  path: z.literal("/lms/courses/{course_id}/deactivate"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { path: z.object({ course_id: PostLmsCoursesCourseIdDeactivateParameterCourseId }), header: z.object({ "X-Integration-Id": z.string() }), body: PostLmsCoursesCourseIdDeactivateRequestBody },
  responses: { 200: PostLmsCoursesCourseIdDeactivatePositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type get_GetLmsSkills = typeof get_GetLmsSkills;
export const get_GetLmsSkills = {
  method: z.literal("GET"),
  path: z.literal("/lms/skills"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { query: z.object({ cursor: GetLmsSkillsParameterCursor, page_size: GetLmsSkillsParameterPageSize, updated_after: GetLmsSkillsParameterUpdatedAfter, include_deleted: GetLmsSkillsParameterIncludeDeleted, ignore_unsupported_filters: GetLmsSkillsParameterIgnoreUnsupportedFilters, ids: GetLmsSkillsParameterIds, remote_ids: GetLmsSkillsParameterRemoteIds }).partial().optional(), header: z.object({ "X-Integration-Id": z.string() }) },
  responses: { 200: GetLmsSkillsPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type post_PostAiApplyCareerSites = typeof post_PostAiApplyCareerSites;
export const post_PostAiApplyCareerSites = {
  method: z.literal("POST"),
  path: z.literal("/ai-apply/career-sites"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { body: PostAiApplyCareerSitesRequestBody },
  responses: { 200: PostAiApplyCareerSitesPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING", "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type get_GetAiApplyCareerSites = typeof get_GetAiApplyCareerSites;
export const get_GetAiApplyCareerSites = {
  method: z.literal("GET"),
  path: z.literal("/ai-apply/career-sites"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { query: z.object({ cursor: GetAiApplyCareerSitesParameterCursor, page_size: GetAiApplyCareerSitesParameterPageSize, ids: GetAiApplyCareerSitesParameterIds }).partial().optional() },
  responses: { 200: GetAiApplyCareerSitesPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING", "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type get_GetAiApplyPostings = typeof get_GetAiApplyPostings;
export const get_GetAiApplyPostings = {
  method: z.literal("GET"),
  path: z.literal("/ai-apply/postings"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { query: z.object({ cursor: GetAiApplyPostingsParameterCursor, page_size: GetAiApplyPostingsParameterPageSize, ids: GetAiApplyPostingsParameterIds, career_site_ids: GetAiApplyPostingsParameterCareerSiteIds, job_codes: GetAiApplyPostingsParameterJobCodes }).partial().optional() },
  responses: { 200: GetAiApplyPostingsPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING", "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type post_PostAiApplyPostings = typeof post_PostAiApplyPostings;
export const post_PostAiApplyPostings = {
  method: z.literal("POST"),
  path: z.literal("/ai-apply/postings"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { body: PostAiApplyPostingsRequestBody },
  responses: { 200: PostAiApplyPostingsPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING", "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type post_PostAiApplyPostingsPostingIdInquire = typeof post_PostAiApplyPostingsPostingIdInquire;
export const post_PostAiApplyPostingsPostingIdInquire = {
  method: z.literal("POST"),
  path: z.literal("/ai-apply/postings/{posting_id}/inquire"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { path: z.object({ posting_id: PostAiApplyPostingsPostingIdInquireParameterPostingId }), body: PostAiApplyPostingsPostingIdInquireRequestBody },
  responses: { 200: PostAiApplyPostingsPostingIdInquirePositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING", "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type post_PostAiApplyApply = typeof post_PostAiApplyApply;
export const post_PostAiApplyApply = {
  method: z.literal("POST"),
  path: z.literal("/ai-apply/apply"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { body: PostAiApplyApplyRequestBody },
  responses: { 200: PostAiApplyApplyPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING", "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type get_GetAiApplyApplications = typeof get_GetAiApplyApplications;
export const get_GetAiApplyApplications = {
  method: z.literal("GET"),
  path: z.literal("/ai-apply/applications"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { query: z.object({ cursor: GetAiApplyApplicationsParameterCursor, page_size: GetAiApplyApplicationsParameterPageSize, ids: GetAiApplyApplicationsParameterIds, job_posting_ids: GetAiApplyApplicationsParameterJobPostingIds }).partial().optional() },
  responses: { 200: GetAiApplyApplicationsPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING", "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type get_GetAiApplyUnifiedApiJobs = typeof get_GetAiApplyUnifiedApiJobs;
export const get_GetAiApplyUnifiedApiJobs = {
  method: z.literal("GET"),
  path: z.literal("/ai-apply/unified-api/jobs"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { query: z.object({ cursor: GetAiApplyUnifiedApiJobsParameterCursor, page_size: GetAiApplyUnifiedApiJobsParameterPageSize, ids: GetAiApplyUnifiedApiJobsParameterIds, remote_ids: GetAiApplyUnifiedApiJobsParameterRemoteIds, job_codes: GetAiApplyUnifiedApiJobsParameterJobCodes, career_site_ids: GetAiApplyUnifiedApiJobsParameterCareerSiteIds }).partial().optional() },
  responses: { 200: GetAiApplyUnifiedApiJobsPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING", "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type post_PostAiApplyUnifiedApiJobsJobIdApplications = typeof post_PostAiApplyUnifiedApiJobsJobIdApplications;
export const post_PostAiApplyUnifiedApiJobsJobIdApplications = {
  method: z.literal("POST"),
  path: z.literal("/ai-apply/unified-api/jobs/{job_id}/applications"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { path: z.object({ job_id: PostAiApplyUnifiedApiJobsJobIdApplicationsParameterJobId }), body: PostAiApplyUnifiedApiJobsJobIdApplicationsRequestBody },
  responses: { 200: PostAiApplyUnifiedApiJobsJobIdApplicationsPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING", "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type get_GetAiApplyJobFeeds = typeof get_GetAiApplyJobFeeds;
export const get_GetAiApplyJobFeeds = {
  method: z.literal("GET"),
  path: z.literal("/ai-apply/job-feeds"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { query: z.object({ cursor: GetAiApplyJobFeedsParameterCursor, page_size: GetAiApplyJobFeedsParameterPageSize, ids: GetAiApplyJobFeedsParameterIds }).partial().optional() },
  responses: { 200: GetAiApplyJobFeedsPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING", "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type post_PostAiApplyJobFeeds = typeof post_PostAiApplyJobFeeds;
export const post_PostAiApplyJobFeeds = {
  method: z.literal("POST"),
  path: z.literal("/ai-apply/job-feeds"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { body: PostAiApplyJobFeedsRequestBody },
  responses: { 200: PostAiApplyJobFeedsPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING", "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type post_PostConnectCreateLink = typeof post_PostConnectCreateLink;
export const post_PostConnectCreateLink = {
  method: z.literal("POST"),
  path: z.literal("/connect/create-link"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { body: PostConnectCreateLinkRequestBody },
  responses: { 200: PostConnectCreateLinkPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type get_GetConnectIntegrationByTokenToken = typeof get_GetConnectIntegrationByTokenToken;
export const get_GetConnectIntegrationByTokenToken = {
  method: z.literal("GET"),
  path: z.literal("/connect/integration-by-token/{token}"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { path: z.object({ token: GetConnectIntegrationByTokenTokenParameterToken }) },
  responses: { 200: GetConnectIntegrationByTokenTokenPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type post_PostConnectActivateIntegration = typeof post_PostConnectActivateIntegration;
export const post_PostConnectActivateIntegration = {
  method: z.literal("POST"),
  path: z.literal("/connect/activate-integration"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { body: PostConnectActivateIntegrationRequestBody },
  responses: { 200: PostConnectActivateIntegrationPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type get_GetCustomDatevSystemInformation = typeof get_GetCustomDatevSystemInformation;
export const get_GetCustomDatevSystemInformation = {
  method: z.literal("GET"),
  path: z.literal("/custom/datev/system-information"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { header: z.object({ "X-Integration-Id": z.string() }) },
  responses: { 200: GetCustomDatevSystemInformationPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type post_PostCustomDatevPassthrough = typeof post_PostCustomDatevPassthrough;
export const post_PostCustomDatevPassthrough = {
  method: z.literal("POST"),
  path: z.literal("/custom/datev/passthrough"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { header: z.object({ "X-Integration-Id": z.string() }), body: PostCustomDatevPassthroughRequestBody },
  responses: { 200: PostCustomDatevPassthroughPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type get_GetCustomDatevCheckEauPermission = typeof get_GetCustomDatevCheckEauPermission;
export const get_GetCustomDatevCheckEauPermission = {
  method: z.literal("GET"),
  path: z.literal("/custom/datev/check-eau-permission"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { header: z.object({ "X-Integration-Id": z.string() }) },
  responses: { 200: GetCustomDatevCheckEauPermissionPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type get_GetCustomDatevEauRequestsEauId = typeof get_GetCustomDatevEauRequestsEauId;
export const get_GetCustomDatevEauRequestsEauId = {
  method: z.literal("GET"),
  path: z.literal("/custom/datev/eau-requests/{eau_id}"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { path: z.object({ eau_id: GetCustomDatevEauRequestsEauIdParameterEauId }), header: z.object({ "X-Integration-Id": z.string() }) },
  responses: { 200: GetCustomDatevEauRequestsEauIdPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type get_GetCustomDatevCheckDocumentPermission = typeof get_GetCustomDatevCheckDocumentPermission;
export const get_GetCustomDatevCheckDocumentPermission = {
  method: z.literal("GET"),
  path: z.literal("/custom/datev/check-document-permission"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { header: z.object({ "X-Integration-Id": z.string() }) },
  responses: { 200: GetCustomDatevCheckDocumentPermissionPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type get_GetCustomDatevAvailableDocuments = typeof get_GetCustomDatevAvailableDocuments;
export const get_GetCustomDatevAvailableDocuments = {
  method: z.literal("GET"),
  path: z.literal("/custom/datev/available-documents"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { query: z.object({ period: GetCustomDatevAvailableDocumentsParameterPeriod }), header: z.object({ "X-Integration-Id": z.string() }) },
  responses: { 200: GetCustomDatevAvailableDocumentsPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type post_PostCustomDatevDownloadDocument = typeof post_PostCustomDatevDownloadDocument;
export const post_PostCustomDatevDownloadDocument = {
  method: z.literal("POST"),
  path: z.literal("/custom/datev/download-document"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { header: z.object({ "X-Integration-Id": z.string() }), body: PostCustomDatevDownloadDocumentRequestBody },
  responses: { 200: PostCustomDatevDownloadDocumentPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type post_PostCustomDatevEmployeesEmployeeIdDownloadDocument = typeof post_PostCustomDatevEmployeesEmployeeIdDownloadDocument;
export const post_PostCustomDatevEmployeesEmployeeIdDownloadDocument = {
  method: z.literal("POST"),
  path: z.literal("/custom/datev/employees/{employee_id}/download-document"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { path: z.object({ employee_id: PostCustomDatevEmployeesEmployeeIdDownloadDocumentParameterEmployeeId }), header: z.object({ "X-Integration-Id": z.string() }), body: PostCustomDatevEmployeesEmployeeIdDownloadDocumentRequestBody },
  responses: { 200: PostCustomDatevEmployeesEmployeeIdDownloadDocumentPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type post_PostCustomDatevEmployeesEmployeeIdEauRequests = typeof post_PostCustomDatevEmployeesEmployeeIdEauRequests;
export const post_PostCustomDatevEmployeesEmployeeIdEauRequests = {
  method: z.literal("POST"),
  path: z.literal("/custom/datev/employees/{employee_id}/eau-requests"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { path: z.object({ employee_id: PostCustomDatevEmployeesEmployeeIdEauRequestsParameterEmployeeId }), header: z.object({ "X-Integration-Id": z.string() }), body: PostCustomDatevEmployeesEmployeeIdEauRequestsRequestBody },
  responses: { 200: PostCustomDatevEmployeesEmployeeIdEauRequestsPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type put_PutCustomDatevEmployeesEmployeeIdPreparePayroll = typeof put_PutCustomDatevEmployeesEmployeeIdPreparePayroll;
export const put_PutCustomDatevEmployeesEmployeeIdPreparePayroll = {
  method: z.literal("PUT"),
  path: z.literal("/custom/datev/employees/{employee_id}/prepare-payroll"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { path: z.object({ employee_id: PutCustomDatevEmployeesEmployeeIdPreparePayrollParameterEmployeeId }), header: z.object({ "X-Integration-Id": z.string() }), body: PutCustomDatevEmployeesEmployeeIdPreparePayrollRequestBody },
  responses: { 200: PutCustomDatevEmployeesEmployeeIdPreparePayrollPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type put_PutCustomDatevEmployeesEmployeeIdCompensations = typeof put_PutCustomDatevEmployeesEmployeeIdCompensations;
export const put_PutCustomDatevEmployeesEmployeeIdCompensations = {
  method: z.literal("PUT"),
  path: z.literal("/custom/datev/employees/{employee_id}/compensations"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { path: z.object({ employee_id: PutCustomDatevEmployeesEmployeeIdCompensationsParameterEmployeeId }), header: z.object({ "X-Integration-Id": z.string() }), body: PutCustomDatevEmployeesEmployeeIdCompensationsRequestBody },
  responses: { 200: PutCustomDatevEmployeesEmployeeIdCompensationsPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type get_GetCustomDatevCheckWritePermission = typeof get_GetCustomDatevCheckWritePermission;
export const get_GetCustomDatevCheckWritePermission = {
  method: z.literal("GET"),
  path: z.literal("/custom/datev/check-write-permission"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { header: z.object({ "X-Integration-Id": z.string() }) },
  responses: { 200: GetCustomDatevCheckWritePermissionPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type get_GetCustomDatevDataPushes = typeof get_GetCustomDatevDataPushes;
export const get_GetCustomDatevDataPushes = {
  method: z.literal("GET"),
  path: z.literal("/custom/datev/data-pushes"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { header: z.object({ "X-Integration-Id": z.string() }) },
  responses: { 200: GetCustomDatevDataPushesPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type post_PostCustomDatevPushDataGeneral = typeof post_PostCustomDatevPushDataGeneral;
export const post_PostCustomDatevPushDataGeneral = {
  method: z.literal("POST"),
  path: z.literal("/custom/datev/push-data/general"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { header: z.object({ "X-Integration-Id": z.string() }), body: PostCustomDatevPushDataGeneralRequestBody },
  responses: { 200: PostCustomDatevPushDataGeneralPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type post_PostCustomDatevPushDataPayroll = typeof post_PostCustomDatevPushDataPayroll;
export const post_PostCustomDatevPushDataPayroll = {
  method: z.literal("POST"),
  path: z.literal("/custom/datev/push-data/payroll"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { header: z.object({ "X-Integration-Id": z.string() }), body: PostCustomDatevPushDataPayrollRequestBody },
  responses: { 200: PostCustomDatevPushDataPayrollPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type post_PostCustomSilaeEmployeesEmployeeIdPayrollSupplements = typeof post_PostCustomSilaeEmployeesEmployeeIdPayrollSupplements;
export const post_PostCustomSilaeEmployeesEmployeeIdPayrollSupplements = {
  method: z.literal("POST"),
  path: z.literal("/custom/silae/employees/{employee_id}/payroll-supplements"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { path: z.object({ employee_id: PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsParameterEmployeeId }), header: z.object({ "X-Integration-Id": z.string() }), body: PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsRequestBody },
  responses: { 200: PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsPositiveResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
};

export type post_PostAiApplyJobFeedsBulkImport = typeof post_PostAiApplyJobFeedsBulkImport;
export const post_PostAiApplyJobFeedsBulkImport = {
  method: z.literal("POST"),
  path: z.literal("/ai-apply/job-feeds/{job_feed_id}/bulk-import"),
  requestFormat: z.literal("json"),
  responseFormat: z.literal("json"),
  parameters: { path: z.object({ job_feed_id: z.string() }), body: z.string() },
  responses: { 200: BulkImportResponse, default: z.object({ status: z.literal("error"), error: z.object({ code: z.enum(["PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING", "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT"]).nullable(), title: z.string().nullable(), message: z.string(), log_url: z.url().nullable() }) }) },
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
    /** OpenAPI security requirements. Missing entries require no credentials. */
    export const endpointSecurityRequirements = {
    get: { "/check-api-key": [["ApiKey"]],
"/integrations/{integration_id}": [["ApiKey"]],
"/integrations/{integration_id}/integration-fields": [["ApiKey"]],
"/integrations/{integration_id}/custom-fields": [["ApiKey"]],
"/tools/{category}": [["ApiKey"]],
"/hris/employees": [["ApiKey"]],
"/hris/employees/form": [["ApiKey"]],
"/hris/employee-document-categories": [["ApiKey"]],
"/hris/teams": [["ApiKey"]],
"/hris/groups": [["ApiKey"]],
"/hris/employments": [["ApiKey"]],
"/hris/locations": [["ApiKey"]],
"/hris/absence-types": [["ApiKey"]],
"/hris/time-off-balances": [["ApiKey"]],
"/hris/absences": [["ApiKey"]],
"/hris/legal-entities": [["ApiKey"]],
"/hris/timesheets": [["ApiKey"]],
"/hris/performance-review-cycles": [["ApiKey"]],
"/hris/performance-reviews": [["ApiKey"]],
"/hris/skills": [["ApiKey"]],
"/hris/employee-skill-assignments": [["ApiKey"]],
"/hris/staffing-entities": [["ApiKey"]],
"/ats/applications": [["ApiKey"]],
"/ats/applications/{application_id}/attachments": [["ApiKey"]],
"/ats/candidates": [["ApiKey"]],
"/ats/candidates/{candidate_id}/attachments": [["ApiKey"]],
"/ats/tags": [["ApiKey"]],
"/ats/application-stages": [["ApiKey"]],
"/ats/jobs": [["ApiKey"]],
"/ats/users": [["ApiKey"]],
"/ats/roles": [["ApiKey"]],
"/ats/offers": [["ApiKey"]],
"/ats/rejection-reasons": [["ApiKey"]],
"/ats/interviews": [["ApiKey"]],
"/ats/actions/ats_create_candidate": [["ApiKey"]],
"/ats/actions/ats_create_application": [["ApiKey"]],
"/ats/actions/ats_add_application_attachment": [["ApiKey"]],
"/ats/actions/ats_add_candidate_attachment": [["ApiKey"]],
"/assessment/packages": [["ApiKey"]],
"/assessment/orders": [["ApiKey"]],
"/assessment/orders/open": [["ApiKey"]],
"/lms/users": [["ApiKey"]],
"/lms/course-progressions": [["ApiKey"]],
"/lms/courses": [["ApiKey"]],
"/lms/courses/bulk/{task_id}": [["ApiKey"]],
"/lms/skills": [["ApiKey"]],
"/ai-apply/career-sites": [["ApiKey"]],
"/ai-apply/postings": [["ApiKey"]],
"/ai-apply/applications": [["ApiKey"]],
"/ai-apply/unified-api/jobs": [["ApiKey"]],
"/ai-apply/job-feeds": [["ApiKey"]],
"/connect/integration-by-token/{token}": [["ApiKey"]],
"/custom/datev/system-information": [["ApiKey"]],
"/custom/datev/check-eau-permission": [["ApiKey"]],
"/custom/datev/eau-requests/{eau_id}": [["ApiKey"]],
"/custom/datev/check-document-permission": [["ApiKey"]],
"/custom/datev/available-documents": [["ApiKey"]],
"/custom/datev/check-write-permission": [["ApiKey"]],
"/custom/datev/data-pushes": [["ApiKey"]] },
post: { "/force-sync": [["ApiKey"]],
"/passthrough/{tool}/{api}": [["ApiKey"]],
"/integrations/{integration_id}/relink": [["ApiKey"]],
"/integrations/{integration_id}/setup-link": [["ApiKey"]],
"/hris/provisioning-groups/{group_id}/diff": [["ApiKey"]],
"/hris/provisioning-groups/{group_id}/setup-links": [["ApiKey"]],
"/hris/employees": [["ApiKey"]],
"/hris/employees/form": [["ApiKey"]],
"/hris/employees/{employee_id}/documents": [["ApiKey"]],
"/hris/absences": [["ApiKey"]],
"/hris/skills": [["ApiKey"]],
"/hris/employee-skill-assignments": [["ApiKey"]],
"/ats/applications/{application_id}/result-links": [["ApiKey"]],
"/ats/applications/{application_id}/notes": [["ApiKey"]],
"/ats/applications/{application_id}/attachments": [["ApiKey"]],
"/ats/applications/{application_id}/reject": [["ApiKey"]],
"/ats/applications/{application_id}/interviews": [["ApiKey"]],
"/ats/candidates": [["ApiKey"]],
"/ats/candidates/{candidate_id}/attachments": [["ApiKey"]],
"/ats/candidates/{candidate_id}/result-links": [["ApiKey"]],
"/ats/candidates/{candidate_id}/tags": [["ApiKey"]],
"/ats/jobs/{job_id}/applications": [["ApiKey"]],
"/ats/import-tracked-application": [["ApiKey"]],
"/ats/custom/avionte/synced-jobs": [["ApiKey"]],
"/lms/course-progressions": [["ApiKey"]],
"/lms/course-progressions/{course_progression_id}/complete": [["ApiKey"]],
"/lms/courses/bulk": [["ApiKey"]],
"/lms/courses/{course_id}/deactivate": [["ApiKey"]],
"/ai-apply/career-sites": [["ApiKey"]],
"/ai-apply/postings": [["ApiKey"]],
"/ai-apply/postings/{posting_id}/inquire": [["ApiKey"]],
"/ai-apply/apply": [["ApiKey"]],
"/ai-apply/unified-api/jobs/{job_id}/applications": [["ApiKey"]],
"/ai-apply/job-feeds": [["ApiKey"]],
"/connect/create-link": [["ApiKey"]],
"/connect/activate-integration": [["ApiKey"]],
"/custom/datev/passthrough": [["ApiKey"]],
"/custom/datev/download-document": [["ApiKey"]],
"/custom/datev/employees/{employee_id}/download-document": [["ApiKey"]],
"/custom/datev/employees/{employee_id}/eau-requests": [["ApiKey"]],
"/custom/datev/push-data/general": [["ApiKey"]],
"/custom/datev/push-data/payroll": [["ApiKey"]],
"/custom/silae/employees/{employee_id}/payroll-supplements": [["ApiKey"]],
"/ai-apply/job-feeds/{job_feed_id}/bulk-import": [["ApiKey"]] },
delete: { "/integrations/{integration_id}": [["ApiKey"]],
"/hris/absences/{absence_id}": [["ApiKey"]],
"/hris/skills/{skill_id}": [["ApiKey"]],
"/hris/employee-skill-assignments/{employee_skill_assignment_id}": [["ApiKey"]],
"/ats/candidates/{candidate_id}/tags": [["ApiKey"]],
"/ats/custom/avionte/synced-jobs/{job_remote_id}": [["ApiKey"]] },
put: { "/integrations/{integration_id}/enabled": [["ApiKey"]],
"/integrations/{integration_id}/custom-fields/{custom_field_id}": [["ApiKey"]],
"/ats/applications/{application_id}/stage": [["ApiKey"]],
"/assessment/packages": [["ApiKey"]],
"/assessment/orders/{assessment_order_id}/result": [["ApiKey"]],
"/custom/datev/employees/{employee_id}/prepare-payroll": [["ApiKey"]],
"/custom/datev/employees/{employee_id}/compensations": [["ApiKey"]] },
patch: { "/integrations/{integration_id}/integration-fields/{integration_field_id}": [["ApiKey"]],
"/hris/employees/{employee_id}": [["ApiKey"]],
"/hris/skills/{skill_id}": [["ApiKey"]],
"/hris/employee-skill-assignments/{employee_skill_assignment_id}": [["ApiKey"]],
"/ats/applications/{application_id}/interviews": [["ApiKey"]] }
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
type InferSchemaValue<T> = T extends z.ZodType ? z.infer<T> : T extends object ? { [K in keyof T]: InferSchemaValue<T[K]> } : T;
type InferSchemaInputRaw<T> = T extends z.ZodType ? z.input<T> : T extends object ? { [K in keyof T]: InferSchemaInputRaw<T[K]> } : T;
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
  return (schema as { parse: (v: unknown) => unknown }).parse(value);
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

    if (contentType.toLowerCase().startsWith("application/octet-stream")) {
      return new Blob([await response.arrayBuffer()])
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
        security: endpointSecurityRequirements[method]?.[path] ?? [],
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

  