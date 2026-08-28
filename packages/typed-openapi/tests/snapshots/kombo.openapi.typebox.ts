
  import { Type, type Static } from "@sinclair/typebox";
import { Value } from "@sinclair/typebox/value";

// <Schemas>
const __schemas = Type.Module({
  GetCheckApiKeyPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ environment_id: Type.String(), customer_id: Type.String() }) }),
  PostForceSyncPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ already_queued: Type.Boolean(), sync_id: Type.String(), type: Type.Union([Type.Literal("FULL"), Type.Literal("DELTA")]) }) }),
  PostForceSyncRequestBody: Type.Partial(Type.Object({ type: Type.Union([Type.Literal("FULL"), Type.Literal("DELTA")]) })),
  PostPassthroughToolApiParameterTool: Type.String(),
  PostPassthroughToolApiParameterApi: Type.String(),
  PostPassthroughToolApiPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ url: Type.String({ format: "uri" }), status: Type.Integer(), headers: Type.Record(Type.String(), Type.Union([Type.String(), Type.Array(Type.String())])), data: Type.Optional(Type.Unknown()) }), warnings: Type.Array(Type.Object({ message: Type.String() })) }),
  PostPassthroughToolApiRequestBody: Type.Object({ method: Type.Union([Type.Literal("GET"), Type.Literal("POST"), Type.Literal("DELETE"), Type.Literal("PUT"), Type.Literal("PATCH")]), path: Type.String(), headers: Type.Optional(Type.Record(Type.String(), Type.String())), params: Type.Optional(Type.Record(Type.String(), Type.String())), data: Type.Optional(Type.Unknown()), response_as_base64: Type.Optional(Type.Boolean()), multipart_form_data: Type.Optional(Type.Array(Type.Object({ name: Type.String(), value: Type.Union([Type.String(), Type.Object({ name: Type.String(), content_type: Type.Optional(Type.String({ pattern: "^[\\w.-]+\\/[\\w.-]+$" })), data_url: Type.Optional(Type.String({ format: "uri" })), data: Type.Optional(Type.String()) })]) }))), api_options: Type.Optional(Type.Record(Type.String(), Type.String())) }),
  DeleteIntegrationsIntegrationIdParameterIntegrationId: Type.String(),
  DeleteIntegrationsIntegrationIdPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Record(Type.String(), Type.Unknown()) }),
  DeleteIntegrationsIntegrationIdRequestBody: Type.Partial(Type.Object({  })),
  GetIntegrationsIntegrationIdParameterIntegrationId: Type.String(),
  GetIntegrationsIntegrationIdPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ id: Type.String(), tool: Type.Object({ id: Type.String(), label: Type.String(), internal_label: Type.Union([Type.String(), Type.Null()]), logo_url: Type.String({ format: "uri" }), icon_url: Type.String({ format: "uri" }) }), category: Type.Union([Type.Literal("HRIS"), Type.Literal("ATS"), Type.Literal("ASSESSMENT"), Type.Literal("LMS")]), status: Type.Union([Type.Literal("ACTIVE"), Type.Literal("INVALID"), Type.Literal("INACTIVE")]), setup_status: Type.Union([Type.Literal("INCOMPLETE"), Type.Literal("FINAL_SYNC_PENDING"), Type.Literal("COMPLETED")]), end_user: Type.Object({ organization_name: Type.String(), creator_email: Type.Union([Type.String({ pattern: "^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$" }), Type.Null()]), origin_id: Type.Union([Type.String(), Type.Null()]) }), scope_config: Type.Object({ id: Type.String(), name: Type.Union([Type.String(), Type.Null()]) }), data_expired_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), created_at: Type.String({ format: "date-time" }), beta: Type.Boolean(), read_models: Type.Array(Type.Object({ id: Type.String(), label: Type.String(), is_available: Type.Boolean(), coverage_status: Type.Union([Type.Literal("SUPPORTED"), Type.Literal("UNSUPPORTED"), Type.Literal("NOT_IMPLEMENTED"), Type.Literal("UNKNOWN")]), scope_config_setting: Type.Union([Type.Literal("ENABLED"), Type.Literal("DISABLED"), Type.Literal("OPTIONAL")]), opted_out_by_customer: Type.Boolean(), fields: Type.Array(Type.Object({ id: Type.String(), is_available: Type.Boolean(), coverage_status: Type.Union([Type.Literal("SUPPORTED"), Type.Literal("UNSUPPORTED"), Type.Literal("NOT_IMPLEMENTED"), Type.Literal("UNKNOWN")]), scope_config_setting: Type.Union([Type.Literal("ENABLED"), Type.Literal("DISABLED"), Type.Literal("OPTIONAL")]), opted_out_by_customer: Type.Boolean() })) })), write_actions: Type.Array(Type.Object({ id: Type.String(), label: Type.String(), is_available: Type.Boolean(), coverage_status: Type.Union([Type.Literal("SUPPORTED"), Type.Literal("UNSUPPORTED"), Type.Literal("NOT_IMPLEMENTED"), Type.Literal("UNKNOWN")]), scope_config_setting: Type.Union([Type.Literal("ENABLED"), Type.Literal("DISABLED"), Type.Literal("OPTIONAL")]), opted_out_by_customer: Type.Boolean(), fields: Type.Array(Type.Object({ id: Type.String(), is_available: Type.Boolean(), coverage_status: Type.Union([Type.Literal("SUPPORTED"), Type.Literal("UNSUPPORTED"), Type.Literal("NOT_IMPLEMENTED"), Type.Literal("UNKNOWN")]) })) })) }) }),
  PutIntegrationsIntegrationIdEnabledParameterIntegrationId: Type.String(),
  PutIntegrationsIntegrationIdEnabledPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Record(Type.String(), Type.Unknown()) }),
  PutIntegrationsIntegrationIdEnabledRequestBody: Type.Object({ value: Type.Boolean() }),
  PostIntegrationsIntegrationIdRelinkParameterIntegrationId: Type.String(),
  PostIntegrationsIntegrationIdRelinkPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ link: Type.String({ format: "uri" }) }) }),
  PostIntegrationsIntegrationIdRelinkRequestBody: Type.Partial(Type.Object({ language: Type.Union([Type.Union([Type.Literal("en"), Type.Literal("de"), Type.Literal("fr"), Type.Literal("it"), Type.Literal("es")]), Type.Null()]), scope_config_id: Type.Union([Type.String(), Type.Null()]), link_type: Type.Union([Type.Literal("EMBEDDED"), Type.Literal("MAGIC_LINK")]) })),
  PostIntegrationsIntegrationIdSetupLinkParameterIntegrationId: Type.String(),
  PostIntegrationsIntegrationIdSetupLinkPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ link: Type.String({ format: "uri" }) }) }),
  PostIntegrationsIntegrationIdSetupLinkRequestBody: Type.Object({ language: Type.Optional(Type.Union([Type.Union([Type.Literal("en"), Type.Literal("de"), Type.Literal("fr"), Type.Literal("it"), Type.Literal("es")]), Type.Null()])), link_type: Type.Union([Type.Literal("EMBEDDED"), Type.Literal("MAGIC_LINK")]) }),
  GetIntegrationsIntegrationIdIntegrationFieldsParameterIntegrationId: Type.String(),
  GetIntegrationsIntegrationIdIntegrationFieldsParameterCursor: Type.String(),
  GetIntegrationsIntegrationIdIntegrationFieldsParameterPageSize: Type.Integer({ minimum: 1, maximum: 2000 }),
  GetIntegrationsIntegrationIdIntegrationFieldsPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ results: Type.Array(Type.Object({ id: Type.String(), key: Type.String(), model: Type.String(), type: Type.Union([Type.Literal("DEFAULT"), Type.Literal("CUSTOM")]), label: Type.Union([Type.String(), Type.Null()]), is_passthrough_enabled: Type.Boolean(), is_writable: Type.Literal(false) })), next_cursor: Type.Union([Type.String(), Type.Null()]), next: Type.Union([Type.String(), Type.Null()]) }) }),
  PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationId: Type.String(),
  PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationFieldId: Type.String(),
  PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ id: Type.String(), key: Type.String(), model: Type.String(), type: Type.Union([Type.Literal("DEFAULT"), Type.Literal("CUSTOM")]), label: Type.Union([Type.String(), Type.Null()]), is_passthrough_enabled: Type.Boolean(), is_writable: Type.Literal(false) }) }),
  PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdRequestBody: Type.Object({ enable_passthrough: Type.Union([Type.Boolean(), Type.Null()]) }),
  GetIntegrationsIntegrationIdCustomFieldsParameterIntegrationId: Type.String(),
  GetIntegrationsIntegrationIdCustomFieldsParameterCursor: Type.String(),
  GetIntegrationsIntegrationIdCustomFieldsParameterPageSize: Type.Integer({ minimum: 1, maximum: 250 }),
  GetIntegrationsIntegrationIdCustomFieldsPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ results: Type.Array(Type.Object({ id: Type.String(), key: Type.String(), integration_field: Type.Union([Type.Object({ id: Type.String(), key: Type.String(), type: Type.Union([Type.Literal("DEFAULT"), Type.Literal("CUSTOM")]), label: Type.Union([Type.String(), Type.Null()]) }), Type.Null()]), model: Type.String(), label: Type.Union([Type.String(), Type.Null()]), description: Type.Union([Type.String(), Type.Null()]) })), next_cursor: Type.Union([Type.String(), Type.Null()]), next: Type.Union([Type.String(), Type.Null()]) }) }),
  PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterIntegrationId: Type.String(),
  PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterCustomFieldId: Type.String(),
  PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ id: Type.String(), key: Type.String(), integration_field: Type.Union([Type.Object({ id: Type.String(), key: Type.String(), type: Type.Union([Type.Literal("DEFAULT"), Type.Literal("CUSTOM")]), label: Type.Union([Type.String(), Type.Null()]) }), Type.Null()]), model: Type.String(), label: Type.Union([Type.String(), Type.Null()]), description: Type.Union([Type.String(), Type.Null()]) }) }),
  PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdRequestBody: Type.Object({ integration_field_id: Type.Union([Type.String(), Type.Null()]) }),
  GetToolsCategoryParameterCategory: Type.Union([Type.Literal("hris"), Type.Literal("ats"), Type.Literal("assessment"), Type.Literal("lms")]),
  GetToolsCategoryPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ tools: Type.Array(Type.Object({ id: Type.String(), label: Type.String(), internal_label: Type.Union([Type.String(), Type.Null()]), assets: Type.Object({ logo_url: Type.String(), icon_url: Type.String(), icon_black_url: Type.String() }), paid_api_details_markdown: Type.Union([Type.String(), Type.Null()]), fast_track_details_markdown: Type.Union([Type.String(), Type.Null()]), partner_only_details_markdown: Type.Union([Type.String(), Type.Null()]), connection_guide_url: Type.Union([Type.String(), Type.Null()]), coverage: Type.Object({ read_models: Type.Array(Type.Object({ id: Type.String(), label: Type.String(), coverage_status: Type.Union([Type.Literal("SUPPORTED"), Type.Literal("UNSUPPORTED"), Type.Literal("NOT_IMPLEMENTED"), Type.Literal("UNKNOWN")]), fields: Type.Array(Type.Object({ id: Type.String(), coverage_status: Type.Union([Type.Literal("SUPPORTED"), Type.Literal("UNSUPPORTED"), Type.Literal("NOT_IMPLEMENTED"), Type.Literal("UNKNOWN")]) })) })), write_actions: Type.Array(Type.Object({ id: Type.String(), label: Type.String(), coverage_status: Type.Union([Type.Literal("SUPPORTED"), Type.Literal("UNSUPPORTED"), Type.Literal("NOT_IMPLEMENTED"), Type.Literal("UNKNOWN")]), fields: Type.Array(Type.Object({ id: Type.String(), coverage_status: Type.Union([Type.Literal("SUPPORTED"), Type.Literal("UNSUPPORTED"), Type.Literal("NOT_IMPLEMENTED"), Type.Literal("UNKNOWN")]) })) })), features: Type.Array(Type.Object({ id: Type.String(), label: Type.String(), coverage_status: Type.Union([Type.Literal("SUPPORTED"), Type.Literal("UNSUPPORTED"), Type.Literal("NOT_IMPLEMENTED"), Type.Literal("UNKNOWN")]) })) }) })) }) }),
  PostHrisProvisioningGroupsGroupIdDiffParameterGroupId: Type.String(),
  PostHrisProvisioningGroupsGroupIdDiffPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ users: Type.Object({ to_provision: Type.Array(Type.Object({ email: Type.Union([Type.String({ pattern: "^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$" }), Type.Null()]), employee: Type.Partial(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), groups: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), name: Type.Union([Type.String(), Type.Null()]) })), avatar: Type.Union([Type.String(), Type.Null()]), work_location_id: Type.Union([Type.String(), Type.Null()]), legal_entity_id: Type.Union([Type.String(), Type.Null()]) })) })), to_deprovision: Type.Array(Type.Object({ origin_id: Type.String(), email: Type.String({ format: "email" }) })), already_provisioned: Type.Array(Type.Object({ origin_id: Type.String(), email: Type.String({ format: "email" }), employee: Type.Partial(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), groups: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), name: Type.Union([Type.String(), Type.Null()]) })), avatar: Type.Union([Type.String(), Type.Null()]), work_location_id: Type.Union([Type.String(), Type.Null()]), legal_entity_id: Type.Union([Type.String(), Type.Null()]) })) })) }) }) }),
  PostHrisProvisioningGroupsGroupIdDiffRequestBody: Type.Object({ provisioned_users: Type.Array(Type.Object({ origin_id: Type.String(), email: Type.String({ format: "email" }) })), options: Type.Object({ employee_fields: Type.Array(Type.Union([Type.Literal("id"), Type.Literal("remote_id"), Type.Literal("first_name"), Type.Literal("last_name"), Type.Literal("groups"), Type.Literal("avatar"), Type.Literal("work_location_id"), Type.Literal("legal_entity_id")])) }) }),
  PostHrisProvisioningGroupsGroupIdSetupLinksParameterGroupId: Type.String(),
  PostHrisProvisioningGroupsGroupIdSetupLinksPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ url: Type.String({ format: "uri" }), expires_at: Type.String({ format: "date-time" }) }) }),
  PostHrisProvisioningGroupsGroupIdSetupLinksRequestBody: Type.Partial(Type.Object({ language: Type.Union([Type.Union([Type.Literal("en"), Type.Literal("de"), Type.Literal("fr"), Type.Literal("it"), Type.Literal("es")]), Type.Null()]) })),
  GetHrisEmployeesParameterCursor: Type.String(),
  GetHrisEmployeesParameterPageSize: Type.Integer({ minimum: 1, maximum: 250 }),
  GetHrisEmployeesParameterUpdatedAfter: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }),
  GetHrisEmployeesParameterIncludeDeleted: Type.Union([Type.Literal("true"), Type.Literal("false")]),
  GetHrisEmployeesParameterIgnoreUnsupportedFilters: Type.Union([Type.Literal("true"), Type.Literal("false")]),
  GetHrisEmployeesParameterIds: Type.String(),
  GetHrisEmployeesParameterRemoteIds: Type.String(),
  GetHrisEmployeesParameterEmploymentStatus: Type.Union([Type.Literal("ACTIVE"), Type.Literal("PENDING"), Type.Literal("INACTIVE"), Type.Literal("LEAVE")]),
  GetHrisEmployeesParameterEmploymentStatuses: Type.String(),
  GetHrisEmployeesParameterGroupIds: Type.String(),
  GetHrisEmployeesParameterLegalEntityIds: Type.String(),
  GetHrisEmployeesParameterWorkLocationIds: Type.String(),
  GetHrisEmployeesParameterWorkEmails: Type.String(),
  GetHrisEmployeesParameterPersonalEmails: Type.String(),
  GetHrisEmployeesParameterCustomFields: Type.String(),
  GetHrisEmployeesPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.String(), employee_number: Type.Union([Type.String(), Type.Null()]), first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), nationality: Type.Union([Type.String(), Type.Null()]), display_full_name: Type.Union([Type.String(), Type.Null()]), job_title: Type.Union([Type.String(), Type.Null()]), work_email: Type.Optional(Type.Union([Type.String({ pattern: "^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$" }), Type.Null()])), personal_email: Type.Optional(Type.Union([Type.String({ pattern: "^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$" }), Type.Null()])), mobile_phone_number: Type.Union([Type.String(), Type.Null()]), ssn: Type.Union([Type.String(), Type.Null()]), tax_id: Type.Union([Type.String(), Type.Null()]), gender: Type.Optional(Type.Union([Type.Union([Type.Literal("MALE"), Type.Literal("FEMALE"), Type.Literal("NON_BINARY"), Type.Literal("NOT_SPECIFIED")]), Type.String(), Type.Null()])), ethnicity: Type.Optional(Type.Union([Type.Union([Type.Literal("WHITE"), Type.Literal("ASIAN"), Type.Literal("HISPANIC_LATINO"), Type.Literal("HAWAIIAN"), Type.Literal("NATIVE_AMERICAN"), Type.Literal("BLACK_AFRICAN_AMERICAN"), Type.Literal("MULTIPLE_ETHNICITIES"), Type.Literal("DECLINE_TO_SPECIFY")]), Type.String(), Type.Null()])), marital_status: Type.Optional(Type.Union([Type.Union([Type.Literal("SINGLE"), Type.Literal("MARRIED"), Type.Literal("DOMESTIC_PARTNERSHIP"), Type.Literal("WIDOWED"), Type.Literal("DIVORCED"), Type.Literal("SEPARATED"), Type.Literal("NOT_MARRIED")]), Type.String(), Type.Null()])), employment_status: Type.Optional(Type.Union([Type.Union([Type.Literal("ACTIVE"), Type.Literal("PENDING"), Type.Literal("INACTIVE"), Type.Literal("LEAVE")]), Type.String(), Type.Null()])), employment_type: Type.Optional(Type.Union([Type.Union([Type.Literal("FULL_TIME"), Type.Literal("PART_TIME"), Type.Literal("CONTRACT"), Type.Literal("INTERNSHIP"), Type.Literal("FREELANCE"), Type.Literal("WORKING_STUDENT"), Type.Literal("APPRENTICESHIP"), Type.Literal("TRAINING")]), Type.String(), Type.Null()])), weekly_hours: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), avatar: Type.Union([Type.String(), Type.Null()]), work_location_id: Type.Union([Type.String(), Type.Null()]), legal_entity_id: Type.Union([Type.String(), Type.Null()]), manager_id: Type.Union([Type.String(), Type.Null()]), home_address: Type.Optional(Type.Union([Type.Partial(Type.Object({ city: Type.Union([Type.String(), Type.Null()]), country: Type.Union([Type.String(), Type.Null()]), raw: Type.Union([Type.String(), Type.Null()]), state: Type.Union([Type.String(), Type.Null()]), street_1: Type.Union([Type.String(), Type.Null()]), street_2: Type.Union([Type.String(), Type.Null()]), zip_code: Type.Union([Type.String(), Type.Null()]) })), Type.Null()])), bank_accounts: Type.Optional(Type.Union([Type.Array(Type.Partial(Type.Object({ iban: Type.Union([Type.String(), Type.Null()]), bic: Type.Union([Type.String(), Type.Null()]), account_number: Type.Union([Type.String(), Type.Null()]), holder_name: Type.Union([Type.String(), Type.Null()]), bank_name: Type.Union([Type.String(), Type.Null()]), domestic_bank_routing: Type.Union([Type.Object({ number: Type.String(), type: Type.Union([Type.Union([Type.Literal("GB_SORT_CODE"), Type.Literal("DE_BANKLEITZAHL"), Type.Literal("US_ABA_ROUTING_TRANSIT_NUMBER"), Type.Literal("CA_ROUTING_NUMBER"), Type.Literal("AU_BSB_CODE"), Type.Literal("FR_RIB")]), Type.Null()]) }), Type.Null()]) }))), Type.Null()])), date_of_birth: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), start_date: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), termination_date: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_created_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), custom_fields: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), integration_fields: Type.Array(Type.Object({ id: Type.String(), key: Type.String(), type: Type.Union([Type.Literal("DEFAULT"), Type.Literal("CUSTOM")]), value: Type.Optional(Type.Null()), label: Type.Union([Type.String(), Type.Null()]) })), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), employments: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), employee_id: Type.String(), job_title: Type.Union([Type.String(), Type.Null()]), pay_rate: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), pay_period: Type.Optional(Type.Union([Type.Union([Type.Literal("HOUR"), Type.Literal("DAY"), Type.Literal("WEEK"), Type.Literal("TWO_WEEKS"), Type.Literal("HALF_MONTH"), Type.Literal("MONTH"), Type.Literal("TWO_MONTHS"), Type.Literal("QUARTER"), Type.Literal("HALF_YEAR"), Type.Literal("YEAR")]), Type.String(), Type.Null()])), pay_frequency: Type.Optional(Type.Union([Type.Union([Type.Literal("DAILY"), Type.Literal("WEEKLY"), Type.Literal("BIWEEKLY"), Type.Literal("MONTHLY"), Type.Literal("SEMIMONTHLY"), Type.Literal("QUARTERLY"), Type.Literal("SEMIANNUALLY"), Type.Literal("ANNUALLY"), Type.Literal("PRO_RATA")]), Type.String(), Type.Null()])), employment_type: Type.Optional(Type.Union([Type.Union([Type.Literal("FULL_TIME"), Type.Literal("PART_TIME"), Type.Literal("CONTRACT"), Type.Literal("INTERNSHIP"), Type.Literal("FREELANCE"), Type.Literal("WORKING_STUDENT"), Type.Literal("APPRENTICESHIP"), Type.Literal("TRAINING")]), Type.String(), Type.Null()])), pay_currency: Type.Union([Type.String(), Type.Null()]), effective_date: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), custom_fields: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), integration_fields: Type.Array(Type.Object({ id: Type.String(), key: Type.String(), type: Type.Union([Type.Literal("DEFAULT"), Type.Literal("CUSTOM")]), value: Type.Optional(Type.Null()), label: Type.Union([Type.String(), Type.Null()]) })) })), time_off_balances: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), employee_id: Type.String(), type_id: Type.String(), balance: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), balance_unit: Type.Union([Type.Union([Type.Literal("HOURS"), Type.Literal("DAYS")]), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), used: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), used_unit: Type.Union([Type.Union([Type.Literal("HOURS"), Type.Literal("DAYS")]), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]) })), manager: Type.Union([Type.Object({ first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), display_full_name: Type.Union([Type.String(), Type.Null()]), id: Type.String(), employee_number: Type.Union([Type.String(), Type.Null()]), work_email: Type.Optional(Type.Union([Type.String({ pattern: "^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$" }), Type.Null()])), remote_id: Type.String(), employment_status: Type.Optional(Type.Union([Type.Union([Type.Literal("ACTIVE"), Type.Literal("PENDING"), Type.Literal("INACTIVE"), Type.Literal("LEAVE")]), Type.String(), Type.Null()])), termination_date: Type.Union([Type.String({ format: "date-time" }), Type.Null()]) }), Type.Null()]), groups: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.String(), name: Type.Union([Type.String(), Type.Null()]), type: Type.Union([Type.Union([Type.Literal("DEPARTMENT"), Type.Literal("TEAM"), Type.Literal("COST_CENTER")]), Type.Null()]) })), legal_entity: Type.Union([Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), name: Type.Union([Type.String(), Type.Null()]), address: Type.Optional(Type.Union([Type.Partial(Type.Object({ city: Type.Union([Type.String(), Type.Null()]), country: Type.Union([Type.String(), Type.Null()]), raw: Type.Union([Type.String(), Type.Null()]), state: Type.Union([Type.String(), Type.Null()]), street_1: Type.Union([Type.String(), Type.Null()]), street_2: Type.Union([Type.String(), Type.Null()]), zip_code: Type.Union([Type.String(), Type.Null()]) })), Type.Null()])) }), Type.Null()]), teams: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.String(), name: Type.Union([Type.String(), Type.Null()]), type: Type.Union([Type.Union([Type.Literal("DEPARTMENT"), Type.Literal("TEAM"), Type.Literal("COST_CENTER")]), Type.Null()]) })), work_location: Type.Union([Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), name: Type.Union([Type.String(), Type.Null()]), address: Type.Optional(Type.Union([Type.Partial(Type.Object({ city: Type.Union([Type.String(), Type.Null()]), country: Type.Union([Type.String(), Type.Null()]), raw: Type.Union([Type.String(), Type.Null()]), state: Type.Union([Type.String(), Type.Null()]), street_1: Type.Union([Type.String(), Type.Null()]), street_2: Type.Union([Type.String(), Type.Null()]), zip_code: Type.Union([Type.String(), Type.Null()]) })), Type.Null()])), type: Type.Union([Type.String(), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]) }), Type.Null()]) })) }) }),
  PostHrisEmployeesPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ id: Type.String(), remote_id: Type.String(), employee_number: Type.Union([Type.String(), Type.Null()]), first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), nationality: Type.Union([Type.String(), Type.Null()]), display_full_name: Type.Union([Type.String(), Type.Null()]), job_title: Type.Union([Type.String(), Type.Null()]), work_email: Type.Optional(Type.Union([Type.String({ pattern: "^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$" }), Type.Null()])), personal_email: Type.Optional(Type.Union([Type.String({ pattern: "^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$" }), Type.Null()])), mobile_phone_number: Type.Union([Type.String(), Type.Null()]), ssn: Type.Union([Type.String(), Type.Null()]), tax_id: Type.Union([Type.String(), Type.Null()]), gender: Type.Optional(Type.Union([Type.Union([Type.Literal("MALE"), Type.Literal("FEMALE"), Type.Literal("NON_BINARY"), Type.Literal("NOT_SPECIFIED")]), Type.String(), Type.Null()])), ethnicity: Type.Optional(Type.Union([Type.Union([Type.Literal("WHITE"), Type.Literal("ASIAN"), Type.Literal("HISPANIC_LATINO"), Type.Literal("HAWAIIAN"), Type.Literal("NATIVE_AMERICAN"), Type.Literal("BLACK_AFRICAN_AMERICAN"), Type.Literal("MULTIPLE_ETHNICITIES"), Type.Literal("DECLINE_TO_SPECIFY")]), Type.String(), Type.Null()])), marital_status: Type.Optional(Type.Union([Type.Union([Type.Literal("SINGLE"), Type.Literal("MARRIED"), Type.Literal("DOMESTIC_PARTNERSHIP"), Type.Literal("WIDOWED"), Type.Literal("DIVORCED"), Type.Literal("SEPARATED"), Type.Literal("NOT_MARRIED")]), Type.String(), Type.Null()])), employment_status: Type.Optional(Type.Union([Type.Union([Type.Literal("ACTIVE"), Type.Literal("PENDING"), Type.Literal("INACTIVE"), Type.Literal("LEAVE")]), Type.String(), Type.Null()])), employment_type: Type.Optional(Type.Union([Type.Union([Type.Literal("FULL_TIME"), Type.Literal("PART_TIME"), Type.Literal("CONTRACT"), Type.Literal("INTERNSHIP"), Type.Literal("FREELANCE"), Type.Literal("WORKING_STUDENT"), Type.Literal("APPRENTICESHIP"), Type.Literal("TRAINING")]), Type.String(), Type.Null()])), weekly_hours: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), avatar: Type.Union([Type.String(), Type.Null()]), work_location_id: Type.Union([Type.String(), Type.Null()]), legal_entity_id: Type.Union([Type.String(), Type.Null()]), manager_id: Type.Union([Type.String(), Type.Null()]), home_address: Type.Optional(Type.Union([Type.Partial(Type.Object({ city: Type.Union([Type.String(), Type.Null()]), country: Type.Union([Type.String(), Type.Null()]), raw: Type.Union([Type.String(), Type.Null()]), state: Type.Union([Type.String(), Type.Null()]), street_1: Type.Union([Type.String(), Type.Null()]), street_2: Type.Union([Type.String(), Type.Null()]), zip_code: Type.Union([Type.String(), Type.Null()]) })), Type.Null()])), bank_accounts: Type.Optional(Type.Union([Type.Array(Type.Partial(Type.Object({ iban: Type.Union([Type.String(), Type.Null()]), bic: Type.Union([Type.String(), Type.Null()]), account_number: Type.Union([Type.String(), Type.Null()]), holder_name: Type.Union([Type.String(), Type.Null()]), bank_name: Type.Union([Type.String(), Type.Null()]), domestic_bank_routing: Type.Union([Type.Object({ number: Type.String(), type: Type.Union([Type.Union([Type.Literal("GB_SORT_CODE"), Type.Literal("DE_BANKLEITZAHL"), Type.Literal("US_ABA_ROUTING_TRANSIT_NUMBER"), Type.Literal("CA_ROUTING_NUMBER"), Type.Literal("AU_BSB_CODE"), Type.Literal("FR_RIB")]), Type.Null()]) }), Type.Null()]) }))), Type.Null()])), date_of_birth: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), start_date: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), termination_date: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_created_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), custom_fields: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), integration_fields: Type.Array(Type.Object({ id: Type.String(), key: Type.String(), type: Type.Union([Type.Literal("DEFAULT"), Type.Literal("CUSTOM")]), value: Type.Optional(Type.Null()), label: Type.Union([Type.String(), Type.Null()]) })), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]) }), warnings: Type.Array(Type.Object({ message: Type.String() })) }),
  PostHrisEmployeesRequestBody: Type.Object({ first_name: Type.String(), last_name: Type.String(), work_email: Type.Optional(Type.String({ format: "email" })), gender: Type.Optional(Type.Union([Type.Literal("MALE"), Type.Literal("FEMALE"), Type.Literal("NON_BINARY"), Type.Literal("NOT_SPECIFIED")])), job_title: Type.Optional(Type.String()), home_address: Type.Optional(Type.Partial(Type.Object({ street_1: Type.String(), street_2: Type.String(), city: Type.String(), state: Type.String(), zip_code: Type.String(), country: Type.String({ pattern: "^[A-Z]{2}$" }) }))), date_of_birth: Type.Optional(Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" })), mobile_phone_number: Type.Optional(Type.String()), home_phone_number: Type.Optional(Type.String()), nationality: Type.Optional(Type.String({ pattern: "^[A-Z]{2}$" })), start_date: Type.Optional(Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" })), legal_entity_id: Type.Optional(Type.String()), location_id: Type.Optional(Type.String()), remote_fields: Type.Optional(Type.Partial(Type.Object({ humaans: Type.Partial(Type.Object({ employee: Type.Record(Type.String(), Type.Unknown()) })), hibob: Type.Partial(Type.Object({ employee: Type.Record(Type.String(), Type.Unknown()) })), sympa: Type.Partial(Type.Object({ GenericNewHire: Type.Record(Type.String(), Type.Unknown()) })), silae: Type.Partial(Type.Object({ siret: Type.String(), employee: Type.Record(Type.String(), Type.Unknown()), employment: Type.Record(Type.String(), Type.Unknown()) })), peoplehr: Type.Partial(Type.Object({ job_role_effective_date: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }), department: Type.String() })), zohopeople: Type.Partial(Type.Object({ employee_id: Type.String({ minLength: 1 }) })), workday: Type.Partial(Type.Object({ job_requisition_id: Type.String(), position_id: Type.String(), ssn: Type.String(), bank_account: Type.Object({ iban: Type.String(), bic: Type.String(), bank_name: Type.String() }) })), deel: Type.Object({ candidate_id: Type.String(), candidate_link: Type.String() }), bamboohr: Type.Partial(Type.Object({ employee: Type.Record(Type.String(), Type.Unknown()) })), oracle: Type.Object({ group_id: Type.String(), department_id: Type.String() }), adpworkforcenow: Type.Object({ onboarding_template_code: Type.String(), applicant_payroll_profile_group_code: Type.String(), manager_position_id: Type.Optional(Type.String()), home_organization_unit_code: Type.Optional(Type.String()), personal_email: Type.Optional(Type.String()) }), azuread: Type.Object({ password: Type.String() }), paycor: Type.Object({ paygroupRemoteId: Type.String(), departmentRemoteId: Type.String() }), planday: Type.Object({ department_remote_id: Type.String() }), dayforce: Type.Object({ social_security_number: Type.String(), pay_type: Type.String(), pay_class: Type.String(), pay_group: Type.String(), base_rate: Type.Number({ minimum: -1.7976931348623157e+308 }), role: Type.String(), location: Type.String(), department: Type.String(), job: Type.String(), country: Type.String() }) }))) }),
  Schema1: Type.Record(Type.String(), Type.Union([Type.Object({ label: Type.String(), required: Type.Boolean(), description: Type.Optional(Type.Union([Type.String(), Type.Null()])), unified_key: Type.Optional(Type.Union([Type.Union([Type.Literal("first_name"), Type.Literal("last_name"), Type.Literal("date_of_birth"), Type.Literal("gender"), Type.Literal("home_address.city"), Type.Literal("home_address.country"), Type.Literal("home_address.state"), Type.Literal("home_address.street_1"), Type.Literal("home_address.street_2"), Type.Literal("home_address.zip_code"), Type.Literal("job_title"), Type.Literal("legal_entity_id"), Type.Literal("location_id"), Type.Literal("mobile_phone_number"), Type.Literal("home_phone_number"), Type.Literal("nationality"), Type.Literal("start_date"), Type.Literal("work_email"), Type.Literal("private_email"), Type.Literal("yearly_salary")]), Type.Null()])), type: Type.Literal("text"), min_length: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])), max_length: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])), reg_exp: Type.Optional(Type.Union([Type.String(), Type.Null()])) }), Type.Object({ label: Type.String(), required: Type.Boolean(), description: Type.Optional(Type.Union([Type.String(), Type.Null()])), unified_key: Type.Optional(Type.Union([Type.Union([Type.Literal("first_name"), Type.Literal("last_name"), Type.Literal("date_of_birth"), Type.Literal("gender"), Type.Literal("home_address.city"), Type.Literal("home_address.country"), Type.Literal("home_address.state"), Type.Literal("home_address.street_1"), Type.Literal("home_address.street_2"), Type.Literal("home_address.zip_code"), Type.Literal("job_title"), Type.Literal("legal_entity_id"), Type.Literal("location_id"), Type.Literal("mobile_phone_number"), Type.Literal("home_phone_number"), Type.Literal("nationality"), Type.Literal("start_date"), Type.Literal("work_email"), Type.Literal("private_email"), Type.Literal("yearly_salary")]), Type.Null()])), type: Type.Literal("number"), min: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])), max: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])) }), Type.Object({ label: Type.String(), required: Type.Boolean(), description: Type.Optional(Type.Union([Type.String(), Type.Null()])), unified_key: Type.Optional(Type.Union([Type.Union([Type.Literal("first_name"), Type.Literal("last_name"), Type.Literal("date_of_birth"), Type.Literal("gender"), Type.Literal("home_address.city"), Type.Literal("home_address.country"), Type.Literal("home_address.state"), Type.Literal("home_address.street_1"), Type.Literal("home_address.street_2"), Type.Literal("home_address.zip_code"), Type.Literal("job_title"), Type.Literal("legal_entity_id"), Type.Literal("location_id"), Type.Literal("mobile_phone_number"), Type.Literal("home_phone_number"), Type.Literal("nationality"), Type.Literal("start_date"), Type.Literal("work_email"), Type.Literal("private_email"), Type.Literal("yearly_salary")]), Type.Null()])), type: Type.Literal("date") }), Type.Object({ label: Type.String(), required: Type.Boolean(), description: Type.Optional(Type.Union([Type.String(), Type.Null()])), unified_key: Type.Optional(Type.Union([Type.Union([Type.Literal("first_name"), Type.Literal("last_name"), Type.Literal("date_of_birth"), Type.Literal("gender"), Type.Literal("home_address.city"), Type.Literal("home_address.country"), Type.Literal("home_address.state"), Type.Literal("home_address.street_1"), Type.Literal("home_address.street_2"), Type.Literal("home_address.zip_code"), Type.Literal("job_title"), Type.Literal("legal_entity_id"), Type.Literal("location_id"), Type.Literal("mobile_phone_number"), Type.Literal("home_phone_number"), Type.Literal("nationality"), Type.Literal("start_date"), Type.Literal("work_email"), Type.Literal("private_email"), Type.Literal("yearly_salary")]), Type.Null()])), type: Type.Literal("single_select"), options: Type.Union([Type.Object({ type: Type.Literal("inline"), entries: Type.Array(Type.Object({ id: Type.String(), label: Type.String(), unified_value: Type.Optional(Type.String()), remote_id: Type.Union([Type.String(), Type.Number({ minimum: -1.7976931348623157e+308 })]) })) }), Type.Object({ type: Type.Literal("referenced"), link: Type.String() })]) }), Type.Object({ label: Type.String(), required: Type.Boolean(), description: Type.Optional(Type.Union([Type.String(), Type.Null()])), unified_key: Type.Optional(Type.Union([Type.String(), Type.Null()])), type: Type.Literal("multi_select"), min_items: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])), max_items: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])), options: Type.Union([Type.Object({ type: Type.Literal("inline"), entries: Type.Array(Type.Object({ id: Type.String(), label: Type.String(), unified_value: Type.Optional(Type.String()), remote_id: Type.Union([Type.String(), Type.Number({ minimum: -1.7976931348623157e+308 })]) })) }), Type.Object({ type: Type.Literal("referenced"), link: Type.String() })]) }), Type.Object({ label: Type.String(), required: Type.Boolean(), description: Type.Optional(Type.Union([Type.String(), Type.Null()])), unified_key: Type.Optional(Type.Union([Type.Union([Type.Literal("first_name"), Type.Literal("last_name"), Type.Literal("date_of_birth"), Type.Literal("gender"), Type.Literal("home_address.city"), Type.Literal("home_address.country"), Type.Literal("home_address.state"), Type.Literal("home_address.street_1"), Type.Literal("home_address.street_2"), Type.Literal("home_address.zip_code"), Type.Literal("job_title"), Type.Literal("legal_entity_id"), Type.Literal("location_id"), Type.Literal("mobile_phone_number"), Type.Literal("home_phone_number"), Type.Literal("nationality"), Type.Literal("start_date"), Type.Literal("work_email"), Type.Literal("private_email"), Type.Literal("yearly_salary")]), Type.Null()])), type: Type.Literal("checkbox") }), Type.Object({ label: Type.String(), required: Type.Boolean(), description: Type.Optional(Type.Union([Type.String(), Type.Null()])), unified_key: Type.Optional(Type.Union([Type.Union([Type.Literal("first_name"), Type.Literal("last_name"), Type.Literal("date_of_birth"), Type.Literal("gender"), Type.Literal("home_address.city"), Type.Literal("home_address.country"), Type.Literal("home_address.state"), Type.Literal("home_address.street_1"), Type.Literal("home_address.street_2"), Type.Literal("home_address.zip_code"), Type.Literal("job_title"), Type.Literal("legal_entity_id"), Type.Literal("location_id"), Type.Literal("mobile_phone_number"), Type.Literal("home_phone_number"), Type.Literal("nationality"), Type.Literal("start_date"), Type.Literal("work_email"), Type.Literal("private_email"), Type.Literal("yearly_salary")]), Type.Null()])), type: Type.Literal("object"), properties: Type.Ref("Schema1") }), Type.Object({ label: Type.String(), required: Type.Boolean(), description: Type.Optional(Type.Union([Type.String(), Type.Null()])), unified_key: Type.Optional(Type.Union([Type.Union([Type.Literal("first_name"), Type.Literal("last_name"), Type.Literal("date_of_birth"), Type.Literal("gender"), Type.Literal("home_address.city"), Type.Literal("home_address.country"), Type.Literal("home_address.state"), Type.Literal("home_address.street_1"), Type.Literal("home_address.street_2"), Type.Literal("home_address.zip_code"), Type.Literal("job_title"), Type.Literal("legal_entity_id"), Type.Literal("location_id"), Type.Literal("mobile_phone_number"), Type.Literal("home_phone_number"), Type.Literal("nationality"), Type.Literal("start_date"), Type.Literal("work_email"), Type.Literal("private_email"), Type.Literal("yearly_salary")]), Type.Null()])), type: Type.Literal("array"), item_type: Type.Ref("Schema2"), min_items: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])), max_items: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])) }), Type.Object({ label: Type.String(), required: Type.Boolean(), description: Type.Optional(Type.Union([Type.String(), Type.Null()])), unified_key: Type.Optional(Type.Union([Type.Union([Type.Literal("first_name"), Type.Literal("last_name"), Type.Literal("date_of_birth"), Type.Literal("gender"), Type.Literal("home_address.city"), Type.Literal("home_address.country"), Type.Literal("home_address.state"), Type.Literal("home_address.street_1"), Type.Literal("home_address.street_2"), Type.Literal("home_address.zip_code"), Type.Literal("job_title"), Type.Literal("legal_entity_id"), Type.Literal("location_id"), Type.Literal("mobile_phone_number"), Type.Literal("home_phone_number"), Type.Literal("nationality"), Type.Literal("start_date"), Type.Literal("work_email"), Type.Literal("private_email"), Type.Literal("yearly_salary")]), Type.Null()])), type: Type.Literal("file"), file_restrictions: Type.Object({ accepted_mime_types: Type.Array(Type.String()), max_file_size: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])) }) })])),
  Schema2: Type.Union([Type.Object({ label: Type.String(), required: Type.Boolean(), description: Type.Optional(Type.Union([Type.String(), Type.Null()])), unified_key: Type.Optional(Type.Union([Type.Union([Type.Literal("first_name"), Type.Literal("last_name"), Type.Literal("date_of_birth"), Type.Literal("gender"), Type.Literal("home_address.city"), Type.Literal("home_address.country"), Type.Literal("home_address.state"), Type.Literal("home_address.street_1"), Type.Literal("home_address.street_2"), Type.Literal("home_address.zip_code"), Type.Literal("job_title"), Type.Literal("legal_entity_id"), Type.Literal("location_id"), Type.Literal("mobile_phone_number"), Type.Literal("home_phone_number"), Type.Literal("nationality"), Type.Literal("start_date"), Type.Literal("work_email"), Type.Literal("private_email"), Type.Literal("yearly_salary")]), Type.Null()])), type: Type.Literal("text"), min_length: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])), max_length: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])), reg_exp: Type.Optional(Type.Union([Type.String(), Type.Null()])) }), Type.Object({ label: Type.String(), required: Type.Boolean(), description: Type.Optional(Type.Union([Type.String(), Type.Null()])), unified_key: Type.Optional(Type.Union([Type.Union([Type.Literal("first_name"), Type.Literal("last_name"), Type.Literal("date_of_birth"), Type.Literal("gender"), Type.Literal("home_address.city"), Type.Literal("home_address.country"), Type.Literal("home_address.state"), Type.Literal("home_address.street_1"), Type.Literal("home_address.street_2"), Type.Literal("home_address.zip_code"), Type.Literal("job_title"), Type.Literal("legal_entity_id"), Type.Literal("location_id"), Type.Literal("mobile_phone_number"), Type.Literal("home_phone_number"), Type.Literal("nationality"), Type.Literal("start_date"), Type.Literal("work_email"), Type.Literal("private_email"), Type.Literal("yearly_salary")]), Type.Null()])), type: Type.Literal("number"), min: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])), max: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])) }), Type.Object({ label: Type.String(), required: Type.Boolean(), description: Type.Optional(Type.Union([Type.String(), Type.Null()])), unified_key: Type.Optional(Type.Union([Type.Union([Type.Literal("first_name"), Type.Literal("last_name"), Type.Literal("date_of_birth"), Type.Literal("gender"), Type.Literal("home_address.city"), Type.Literal("home_address.country"), Type.Literal("home_address.state"), Type.Literal("home_address.street_1"), Type.Literal("home_address.street_2"), Type.Literal("home_address.zip_code"), Type.Literal("job_title"), Type.Literal("legal_entity_id"), Type.Literal("location_id"), Type.Literal("mobile_phone_number"), Type.Literal("home_phone_number"), Type.Literal("nationality"), Type.Literal("start_date"), Type.Literal("work_email"), Type.Literal("private_email"), Type.Literal("yearly_salary")]), Type.Null()])), type: Type.Literal("date") }), Type.Object({ label: Type.String(), required: Type.Boolean(), description: Type.Optional(Type.Union([Type.String(), Type.Null()])), unified_key: Type.Optional(Type.Union([Type.Union([Type.Literal("first_name"), Type.Literal("last_name"), Type.Literal("date_of_birth"), Type.Literal("gender"), Type.Literal("home_address.city"), Type.Literal("home_address.country"), Type.Literal("home_address.state"), Type.Literal("home_address.street_1"), Type.Literal("home_address.street_2"), Type.Literal("home_address.zip_code"), Type.Literal("job_title"), Type.Literal("legal_entity_id"), Type.Literal("location_id"), Type.Literal("mobile_phone_number"), Type.Literal("home_phone_number"), Type.Literal("nationality"), Type.Literal("start_date"), Type.Literal("work_email"), Type.Literal("private_email"), Type.Literal("yearly_salary")]), Type.Null()])), type: Type.Literal("single_select"), options: Type.Union([Type.Object({ type: Type.Literal("inline"), entries: Type.Array(Type.Object({ id: Type.String(), label: Type.String(), unified_value: Type.Optional(Type.String()), remote_id: Type.Union([Type.String(), Type.Number({ minimum: -1.7976931348623157e+308 })]) })) }), Type.Object({ type: Type.Literal("referenced"), link: Type.String() })]) }), Type.Object({ label: Type.String(), required: Type.Boolean(), description: Type.Optional(Type.Union([Type.String(), Type.Null()])), unified_key: Type.Optional(Type.Union([Type.String(), Type.Null()])), type: Type.Literal("multi_select"), min_items: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])), max_items: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])), options: Type.Union([Type.Object({ type: Type.Literal("inline"), entries: Type.Array(Type.Object({ id: Type.String(), label: Type.String(), unified_value: Type.Optional(Type.String()), remote_id: Type.Union([Type.String(), Type.Number({ minimum: -1.7976931348623157e+308 })]) })) }), Type.Object({ type: Type.Literal("referenced"), link: Type.String() })]) }), Type.Object({ label: Type.String(), required: Type.Boolean(), description: Type.Optional(Type.Union([Type.String(), Type.Null()])), unified_key: Type.Optional(Type.Union([Type.Union([Type.Literal("first_name"), Type.Literal("last_name"), Type.Literal("date_of_birth"), Type.Literal("gender"), Type.Literal("home_address.city"), Type.Literal("home_address.country"), Type.Literal("home_address.state"), Type.Literal("home_address.street_1"), Type.Literal("home_address.street_2"), Type.Literal("home_address.zip_code"), Type.Literal("job_title"), Type.Literal("legal_entity_id"), Type.Literal("location_id"), Type.Literal("mobile_phone_number"), Type.Literal("home_phone_number"), Type.Literal("nationality"), Type.Literal("start_date"), Type.Literal("work_email"), Type.Literal("private_email"), Type.Literal("yearly_salary")]), Type.Null()])), type: Type.Literal("checkbox") }), Type.Object({ label: Type.String(), required: Type.Boolean(), description: Type.Optional(Type.Union([Type.String(), Type.Null()])), unified_key: Type.Optional(Type.Union([Type.Union([Type.Literal("first_name"), Type.Literal("last_name"), Type.Literal("date_of_birth"), Type.Literal("gender"), Type.Literal("home_address.city"), Type.Literal("home_address.country"), Type.Literal("home_address.state"), Type.Literal("home_address.street_1"), Type.Literal("home_address.street_2"), Type.Literal("home_address.zip_code"), Type.Literal("job_title"), Type.Literal("legal_entity_id"), Type.Literal("location_id"), Type.Literal("mobile_phone_number"), Type.Literal("home_phone_number"), Type.Literal("nationality"), Type.Literal("start_date"), Type.Literal("work_email"), Type.Literal("private_email"), Type.Literal("yearly_salary")]), Type.Null()])), type: Type.Literal("object"), properties: Type.Ref("Schema1") }), Type.Object({ label: Type.String(), required: Type.Boolean(), description: Type.Optional(Type.Union([Type.String(), Type.Null()])), unified_key: Type.Optional(Type.Union([Type.Union([Type.Literal("first_name"), Type.Literal("last_name"), Type.Literal("date_of_birth"), Type.Literal("gender"), Type.Literal("home_address.city"), Type.Literal("home_address.country"), Type.Literal("home_address.state"), Type.Literal("home_address.street_1"), Type.Literal("home_address.street_2"), Type.Literal("home_address.zip_code"), Type.Literal("job_title"), Type.Literal("legal_entity_id"), Type.Literal("location_id"), Type.Literal("mobile_phone_number"), Type.Literal("home_phone_number"), Type.Literal("nationality"), Type.Literal("start_date"), Type.Literal("work_email"), Type.Literal("private_email"), Type.Literal("yearly_salary")]), Type.Null()])), type: Type.Literal("array"), item_type: Type.Ref("Schema2"), min_items: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])), max_items: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])) }), Type.Object({ label: Type.String(), required: Type.Boolean(), description: Type.Optional(Type.Union([Type.String(), Type.Null()])), unified_key: Type.Optional(Type.Union([Type.Union([Type.Literal("first_name"), Type.Literal("last_name"), Type.Literal("date_of_birth"), Type.Literal("gender"), Type.Literal("home_address.city"), Type.Literal("home_address.country"), Type.Literal("home_address.state"), Type.Literal("home_address.street_1"), Type.Literal("home_address.street_2"), Type.Literal("home_address.zip_code"), Type.Literal("job_title"), Type.Literal("legal_entity_id"), Type.Literal("location_id"), Type.Literal("mobile_phone_number"), Type.Literal("home_phone_number"), Type.Literal("nationality"), Type.Literal("start_date"), Type.Literal("work_email"), Type.Literal("private_email"), Type.Literal("yearly_salary")]), Type.Null()])), type: Type.Literal("file"), file_restrictions: Type.Object({ accepted_mime_types: Type.Array(Type.String()), max_file_size: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])) }) })]),
  GetHrisEmployeesFormPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ properties: Type.Record(Type.String(), Type.Union([Type.Object({ label: Type.String(), required: Type.Boolean(), description: Type.Optional(Type.Union([Type.String(), Type.Null()])), unified_key: Type.Optional(Type.Union([Type.Union([Type.Literal("first_name"), Type.Literal("last_name"), Type.Literal("date_of_birth"), Type.Literal("gender"), Type.Literal("home_address.city"), Type.Literal("home_address.country"), Type.Literal("home_address.state"), Type.Literal("home_address.street_1"), Type.Literal("home_address.street_2"), Type.Literal("home_address.zip_code"), Type.Literal("job_title"), Type.Literal("legal_entity_id"), Type.Literal("location_id"), Type.Literal("mobile_phone_number"), Type.Literal("home_phone_number"), Type.Literal("nationality"), Type.Literal("start_date"), Type.Literal("work_email"), Type.Literal("private_email"), Type.Literal("yearly_salary")]), Type.Null()])), type: Type.Literal("text"), min_length: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])), max_length: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])), reg_exp: Type.Optional(Type.Union([Type.String(), Type.Null()])) }), Type.Object({ label: Type.String(), required: Type.Boolean(), description: Type.Optional(Type.Union([Type.String(), Type.Null()])), unified_key: Type.Optional(Type.Union([Type.Union([Type.Literal("first_name"), Type.Literal("last_name"), Type.Literal("date_of_birth"), Type.Literal("gender"), Type.Literal("home_address.city"), Type.Literal("home_address.country"), Type.Literal("home_address.state"), Type.Literal("home_address.street_1"), Type.Literal("home_address.street_2"), Type.Literal("home_address.zip_code"), Type.Literal("job_title"), Type.Literal("legal_entity_id"), Type.Literal("location_id"), Type.Literal("mobile_phone_number"), Type.Literal("home_phone_number"), Type.Literal("nationality"), Type.Literal("start_date"), Type.Literal("work_email"), Type.Literal("private_email"), Type.Literal("yearly_salary")]), Type.Null()])), type: Type.Literal("number"), min: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])), max: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])) }), Type.Object({ label: Type.String(), required: Type.Boolean(), description: Type.Optional(Type.Union([Type.String(), Type.Null()])), unified_key: Type.Optional(Type.Union([Type.Union([Type.Literal("first_name"), Type.Literal("last_name"), Type.Literal("date_of_birth"), Type.Literal("gender"), Type.Literal("home_address.city"), Type.Literal("home_address.country"), Type.Literal("home_address.state"), Type.Literal("home_address.street_1"), Type.Literal("home_address.street_2"), Type.Literal("home_address.zip_code"), Type.Literal("job_title"), Type.Literal("legal_entity_id"), Type.Literal("location_id"), Type.Literal("mobile_phone_number"), Type.Literal("home_phone_number"), Type.Literal("nationality"), Type.Literal("start_date"), Type.Literal("work_email"), Type.Literal("private_email"), Type.Literal("yearly_salary")]), Type.Null()])), type: Type.Literal("date") }), Type.Object({ label: Type.String(), required: Type.Boolean(), description: Type.Optional(Type.Union([Type.String(), Type.Null()])), unified_key: Type.Optional(Type.Union([Type.Union([Type.Literal("first_name"), Type.Literal("last_name"), Type.Literal("date_of_birth"), Type.Literal("gender"), Type.Literal("home_address.city"), Type.Literal("home_address.country"), Type.Literal("home_address.state"), Type.Literal("home_address.street_1"), Type.Literal("home_address.street_2"), Type.Literal("home_address.zip_code"), Type.Literal("job_title"), Type.Literal("legal_entity_id"), Type.Literal("location_id"), Type.Literal("mobile_phone_number"), Type.Literal("home_phone_number"), Type.Literal("nationality"), Type.Literal("start_date"), Type.Literal("work_email"), Type.Literal("private_email"), Type.Literal("yearly_salary")]), Type.Null()])), type: Type.Literal("single_select"), options: Type.Union([Type.Object({ type: Type.Literal("inline"), entries: Type.Array(Type.Object({ id: Type.String(), label: Type.String(), unified_value: Type.Optional(Type.String()), remote_id: Type.Union([Type.String(), Type.Number({ minimum: -1.7976931348623157e+308 })]) })) }), Type.Object({ type: Type.Literal("referenced"), link: Type.String() })]) }), Type.Object({ label: Type.String(), required: Type.Boolean(), description: Type.Optional(Type.Union([Type.String(), Type.Null()])), unified_key: Type.Optional(Type.Union([Type.String(), Type.Null()])), type: Type.Literal("multi_select"), min_items: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])), max_items: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])), options: Type.Union([Type.Object({ type: Type.Literal("inline"), entries: Type.Array(Type.Object({ id: Type.String(), label: Type.String(), unified_value: Type.Optional(Type.String()), remote_id: Type.Union([Type.String(), Type.Number({ minimum: -1.7976931348623157e+308 })]) })) }), Type.Object({ type: Type.Literal("referenced"), link: Type.String() })]) }), Type.Object({ label: Type.String(), required: Type.Boolean(), description: Type.Optional(Type.Union([Type.String(), Type.Null()])), unified_key: Type.Optional(Type.Union([Type.Union([Type.Literal("first_name"), Type.Literal("last_name"), Type.Literal("date_of_birth"), Type.Literal("gender"), Type.Literal("home_address.city"), Type.Literal("home_address.country"), Type.Literal("home_address.state"), Type.Literal("home_address.street_1"), Type.Literal("home_address.street_2"), Type.Literal("home_address.zip_code"), Type.Literal("job_title"), Type.Literal("legal_entity_id"), Type.Literal("location_id"), Type.Literal("mobile_phone_number"), Type.Literal("home_phone_number"), Type.Literal("nationality"), Type.Literal("start_date"), Type.Literal("work_email"), Type.Literal("private_email"), Type.Literal("yearly_salary")]), Type.Null()])), type: Type.Literal("checkbox") }), Type.Object({ label: Type.String(), required: Type.Boolean(), description: Type.Optional(Type.Union([Type.String(), Type.Null()])), unified_key: Type.Optional(Type.Union([Type.Union([Type.Literal("first_name"), Type.Literal("last_name"), Type.Literal("date_of_birth"), Type.Literal("gender"), Type.Literal("home_address.city"), Type.Literal("home_address.country"), Type.Literal("home_address.state"), Type.Literal("home_address.street_1"), Type.Literal("home_address.street_2"), Type.Literal("home_address.zip_code"), Type.Literal("job_title"), Type.Literal("legal_entity_id"), Type.Literal("location_id"), Type.Literal("mobile_phone_number"), Type.Literal("home_phone_number"), Type.Literal("nationality"), Type.Literal("start_date"), Type.Literal("work_email"), Type.Literal("private_email"), Type.Literal("yearly_salary")]), Type.Null()])), type: Type.Literal("object"), properties: Type.Ref("Schema1") }), Type.Object({ label: Type.String(), required: Type.Boolean(), description: Type.Optional(Type.Union([Type.String(), Type.Null()])), unified_key: Type.Optional(Type.Union([Type.Union([Type.Literal("first_name"), Type.Literal("last_name"), Type.Literal("date_of_birth"), Type.Literal("gender"), Type.Literal("home_address.city"), Type.Literal("home_address.country"), Type.Literal("home_address.state"), Type.Literal("home_address.street_1"), Type.Literal("home_address.street_2"), Type.Literal("home_address.zip_code"), Type.Literal("job_title"), Type.Literal("legal_entity_id"), Type.Literal("location_id"), Type.Literal("mobile_phone_number"), Type.Literal("home_phone_number"), Type.Literal("nationality"), Type.Literal("start_date"), Type.Literal("work_email"), Type.Literal("private_email"), Type.Literal("yearly_salary")]), Type.Null()])), type: Type.Literal("array"), item_type: Type.Ref("Schema2"), min_items: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])), max_items: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])) }), Type.Object({ label: Type.String(), required: Type.Boolean(), description: Type.Optional(Type.Union([Type.String(), Type.Null()])), unified_key: Type.Optional(Type.Union([Type.Union([Type.Literal("first_name"), Type.Literal("last_name"), Type.Literal("date_of_birth"), Type.Literal("gender"), Type.Literal("home_address.city"), Type.Literal("home_address.country"), Type.Literal("home_address.state"), Type.Literal("home_address.street_1"), Type.Literal("home_address.street_2"), Type.Literal("home_address.zip_code"), Type.Literal("job_title"), Type.Literal("legal_entity_id"), Type.Literal("location_id"), Type.Literal("mobile_phone_number"), Type.Literal("home_phone_number"), Type.Literal("nationality"), Type.Literal("start_date"), Type.Literal("work_email"), Type.Literal("private_email"), Type.Literal("yearly_salary")]), Type.Null()])), type: Type.Literal("file"), file_restrictions: Type.Object({ accepted_mime_types: Type.Array(Type.String()), max_file_size: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])) }) })])) }), warnings: Type.Array(Type.Object({ message: Type.String() })) }),
  PostHrisEmployeesFormPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ id: Type.Union([Type.String(), Type.Null()]), remote_id: Type.Union([Type.String(), Type.Null()]), prehire: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]) }) }), warnings: Type.Array(Type.Object({ message: Type.String() })) }),
  Schema6: Type.Array(Type.Ref("Schema4")),
  Schema4: Type.Union([Type.String(), Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Boolean(), Type.Ref("Schema5"), Type.Ref("Schema6")]),
  Schema5: Type.Record(Type.String(), Type.Ref("Schema4")),
  Schema3: Type.Record(Type.String(), Type.Ref("Schema4")),
  PostHrisEmployeesFormRequestBody: Type.Object({ properties: Type.Ref("Schema3") }),
  PatchHrisEmployeesEmployeeIdParameterEmployeeId: Type.String(),
  PatchHrisEmployeesEmployeeIdPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ id: Type.String(), remote_id: Type.String(), employee_number: Type.Union([Type.String(), Type.Null()]), first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), nationality: Type.Union([Type.String(), Type.Null()]), display_full_name: Type.Union([Type.String(), Type.Null()]), job_title: Type.Union([Type.String(), Type.Null()]), work_email: Type.Optional(Type.Union([Type.String({ pattern: "^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$" }), Type.Null()])), personal_email: Type.Optional(Type.Union([Type.String({ pattern: "^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$" }), Type.Null()])), mobile_phone_number: Type.Union([Type.String(), Type.Null()]), ssn: Type.Union([Type.String(), Type.Null()]), tax_id: Type.Union([Type.String(), Type.Null()]), gender: Type.Optional(Type.Union([Type.Union([Type.Literal("MALE"), Type.Literal("FEMALE"), Type.Literal("NON_BINARY"), Type.Literal("NOT_SPECIFIED")]), Type.String(), Type.Null()])), ethnicity: Type.Optional(Type.Union([Type.Union([Type.Literal("WHITE"), Type.Literal("ASIAN"), Type.Literal("HISPANIC_LATINO"), Type.Literal("HAWAIIAN"), Type.Literal("NATIVE_AMERICAN"), Type.Literal("BLACK_AFRICAN_AMERICAN"), Type.Literal("MULTIPLE_ETHNICITIES"), Type.Literal("DECLINE_TO_SPECIFY")]), Type.String(), Type.Null()])), marital_status: Type.Optional(Type.Union([Type.Union([Type.Literal("SINGLE"), Type.Literal("MARRIED"), Type.Literal("DOMESTIC_PARTNERSHIP"), Type.Literal("WIDOWED"), Type.Literal("DIVORCED"), Type.Literal("SEPARATED"), Type.Literal("NOT_MARRIED")]), Type.String(), Type.Null()])), employment_status: Type.Optional(Type.Union([Type.Union([Type.Literal("ACTIVE"), Type.Literal("PENDING"), Type.Literal("INACTIVE"), Type.Literal("LEAVE")]), Type.String(), Type.Null()])), employment_type: Type.Optional(Type.Union([Type.Union([Type.Literal("FULL_TIME"), Type.Literal("PART_TIME"), Type.Literal("CONTRACT"), Type.Literal("INTERNSHIP"), Type.Literal("FREELANCE"), Type.Literal("WORKING_STUDENT"), Type.Literal("APPRENTICESHIP"), Type.Literal("TRAINING")]), Type.String(), Type.Null()])), weekly_hours: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), avatar: Type.Union([Type.String(), Type.Null()]), work_location_id: Type.Union([Type.String(), Type.Null()]), legal_entity_id: Type.Union([Type.String(), Type.Null()]), manager_id: Type.Union([Type.String(), Type.Null()]), home_address: Type.Optional(Type.Union([Type.Partial(Type.Object({ city: Type.Union([Type.String(), Type.Null()]), country: Type.Union([Type.String(), Type.Null()]), raw: Type.Union([Type.String(), Type.Null()]), state: Type.Union([Type.String(), Type.Null()]), street_1: Type.Union([Type.String(), Type.Null()]), street_2: Type.Union([Type.String(), Type.Null()]), zip_code: Type.Union([Type.String(), Type.Null()]) })), Type.Null()])), bank_accounts: Type.Optional(Type.Union([Type.Array(Type.Partial(Type.Object({ iban: Type.Union([Type.String(), Type.Null()]), bic: Type.Union([Type.String(), Type.Null()]), account_number: Type.Union([Type.String(), Type.Null()]), holder_name: Type.Union([Type.String(), Type.Null()]), bank_name: Type.Union([Type.String(), Type.Null()]), domestic_bank_routing: Type.Union([Type.Object({ number: Type.String(), type: Type.Union([Type.Union([Type.Literal("GB_SORT_CODE"), Type.Literal("DE_BANKLEITZAHL"), Type.Literal("US_ABA_ROUTING_TRANSIT_NUMBER"), Type.Literal("CA_ROUTING_NUMBER"), Type.Literal("AU_BSB_CODE"), Type.Literal("FR_RIB")]), Type.Null()]) }), Type.Null()]) }))), Type.Null()])), date_of_birth: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), start_date: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), termination_date: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_created_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]) }), warnings: Type.Array(Type.Object({ message: Type.String() })) }),
  PatchHrisEmployeesEmployeeIdRequestBody: Type.Object({ first_name: Type.Optional(Type.String()), last_name: Type.Optional(Type.String()), work_email: Type.String({ format: "email" }), gender: Type.Optional(Type.Union([Type.Literal("MALE"), Type.Literal("FEMALE"), Type.Literal("NON_BINARY"), Type.Literal("NOT_SPECIFIED")])), job_title: Type.Optional(Type.String()), home_address: Type.Optional(Type.Partial(Type.Object({ street_1: Type.String(), street_2: Type.String(), city: Type.String(), state: Type.String(), zip_code: Type.String(), country: Type.String({ pattern: "^[A-Z]{2}$" }) }))), date_of_birth: Type.Optional(Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" })), mobile_phone_number: Type.Optional(Type.String()), home_phone_number: Type.Optional(Type.String()), nationality: Type.Optional(Type.String({ pattern: "^[A-Z]{2}$" })), start_date: Type.Optional(Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" })), legal_entity_id: Type.Optional(Type.String()), location_id: Type.Optional(Type.String()), remote_fields: Type.Optional(Type.Partial(Type.Object({ humaans: Type.Partial(Type.Object({ employee: Type.Record(Type.String(), Type.Unknown()) })), hibob: Type.Partial(Type.Object({ employee: Type.Record(Type.String(), Type.Unknown()) })), sympa: Type.Partial(Type.Object({ GenericNewHire: Type.Record(Type.String(), Type.Unknown()) })), silae: Type.Partial(Type.Object({ siret: Type.String(), employee: Type.Record(Type.String(), Type.Unknown()), employment: Type.Record(Type.String(), Type.Unknown()) })), peoplehr: Type.Partial(Type.Object({ job_role_effective_date: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }), department: Type.String() })), zohopeople: Type.Partial(Type.Object({ employee_id: Type.String({ minLength: 1 }) })), workday: Type.Partial(Type.Object({ job_requisition_id: Type.String(), position_id: Type.String(), ssn: Type.String(), bank_account: Type.Object({ iban: Type.String(), bic: Type.String(), bank_name: Type.String() }) })), deel: Type.Object({ candidate_id: Type.String(), candidate_link: Type.String() }), bamboohr: Type.Partial(Type.Object({ employee: Type.Record(Type.String(), Type.Unknown()) })), oracle: Type.Object({ group_id: Type.String(), department_id: Type.String() }), adpworkforcenow: Type.Object({ onboarding_template_code: Type.String(), applicant_payroll_profile_group_code: Type.String(), manager_position_id: Type.Optional(Type.String()), home_organization_unit_code: Type.Optional(Type.String()), personal_email: Type.Optional(Type.String()) }), azuread: Type.Object({ password: Type.String() }), paycor: Type.Object({ paygroupRemoteId: Type.String(), departmentRemoteId: Type.String() }), planday: Type.Object({ department_remote_id: Type.String() }), dayforce: Type.Object({ social_security_number: Type.String(), pay_type: Type.String(), pay_class: Type.String(), pay_group: Type.String(), base_rate: Type.Number({ minimum: -1.7976931348623157e+308 }), role: Type.String(), location: Type.String(), department: Type.String(), job: Type.String(), country: Type.String() }) }))), ssn: Type.Optional(Type.String()), marital_status: Type.Optional(Type.Union([Type.Literal("SINGLE"), Type.Literal("MARRIED"), Type.Literal("DOMESTIC_PARTNERSHIP"), Type.Literal("WIDOWED"), Type.Literal("DIVORCED"), Type.Literal("SEPARATED"), Type.Literal("NOT_MARRIED")])), termination_date: Type.Optional(Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" })), tax_id: Type.Optional(Type.String()) }),
  PostHrisEmployeesEmployeeIdDocumentsParameterEmployeeId: Type.String(),
  PostHrisEmployeesEmployeeIdDocumentsPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Record(Type.String(), Type.Unknown()), warnings: Type.Array(Type.Object({ message: Type.String() })) }),
  PostHrisEmployeesEmployeeIdDocumentsRequestBody: Type.Object({ category_id: Type.String(), document: Type.Object({ name: Type.String(), content_type: Type.Optional(Type.String({ pattern: "^[\\w.-]+\\/[\\w.-]+$" })), data_url: Type.Optional(Type.String({ format: "uri" })), data: Type.Optional(Type.String()) }) }),
  GetHrisEmployeeDocumentCategoriesParameterCursor: Type.String(),
  GetHrisEmployeeDocumentCategoriesParameterPageSize: Type.Integer({ minimum: 1, maximum: 250 }),
  GetHrisEmployeeDocumentCategoriesParameterUpdatedAfter: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }),
  GetHrisEmployeeDocumentCategoriesParameterIncludeDeleted: Type.Union([Type.Literal("true"), Type.Literal("false")]),
  GetHrisEmployeeDocumentCategoriesParameterIgnoreUnsupportedFilters: Type.Union([Type.Literal("true"), Type.Literal("false")]),
  GetHrisEmployeeDocumentCategoriesParameterIds: Type.String(),
  GetHrisEmployeeDocumentCategoriesParameterRemoteIds: Type.String(),
  GetHrisEmployeeDocumentCategoriesPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), name: Type.Union([Type.String(), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]) })) }) }),
  GetHrisTeamsParameterCursor: Type.String(),
  GetHrisTeamsParameterPageSize: Type.Integer({ minimum: 1, maximum: 250 }),
  GetHrisTeamsParameterUpdatedAfter: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }),
  GetHrisTeamsParameterIncludeDeleted: Type.Union([Type.Literal("true"), Type.Literal("false")]),
  GetHrisTeamsParameterIgnoreUnsupportedFilters: Type.Union([Type.Literal("true"), Type.Literal("false")]),
  GetHrisTeamsParameterIds: Type.String(),
  GetHrisTeamsParameterRemoteIds: Type.String(),
  GetHrisTeamsPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.String(), name: Type.Union([Type.String(), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), type: Type.Union([Type.Union([Type.Literal("DEPARTMENT"), Type.Literal("TEAM"), Type.Literal("COST_CENTER")]), Type.Null()]), parent_id: Type.Union([Type.String(), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]) })) }) }),
  GetHrisGroupsParameterCursor: Type.String(),
  GetHrisGroupsParameterPageSize: Type.Integer({ minimum: 1, maximum: 250 }),
  GetHrisGroupsParameterUpdatedAfter: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }),
  GetHrisGroupsParameterIncludeDeleted: Type.Union([Type.Literal("true"), Type.Literal("false")]),
  GetHrisGroupsParameterIgnoreUnsupportedFilters: Type.Union([Type.Literal("true"), Type.Literal("false")]),
  GetHrisGroupsParameterIds: Type.String(),
  GetHrisGroupsParameterRemoteIds: Type.String(),
  GetHrisGroupsParameterTypes: Type.String(),
  GetHrisGroupsParameterNameContains: Type.String(),
  GetHrisGroupsPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.String(), name: Type.Union([Type.String(), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), type: Type.Union([Type.Union([Type.Literal("DEPARTMENT"), Type.Literal("TEAM"), Type.Literal("COST_CENTER")]), Type.Null()]), parent_id: Type.Union([Type.String(), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]) })) }) }),
  GetHrisEmploymentsParameterCursor: Type.String(),
  GetHrisEmploymentsParameterPageSize: Type.Integer({ minimum: 1, maximum: 250 }),
  GetHrisEmploymentsParameterUpdatedAfter: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }),
  GetHrisEmploymentsParameterIncludeDeleted: Type.Union([Type.Literal("true"), Type.Literal("false")]),
  GetHrisEmploymentsParameterIgnoreUnsupportedFilters: Type.Union([Type.Literal("true"), Type.Literal("false")]),
  GetHrisEmploymentsParameterIds: Type.String(),
  GetHrisEmploymentsParameterRemoteIds: Type.String(),
  GetHrisEmploymentsPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), employee_id: Type.String(), job_title: Type.Union([Type.String(), Type.Null()]), pay_rate: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), pay_period: Type.Optional(Type.Union([Type.Union([Type.Literal("HOUR"), Type.Literal("DAY"), Type.Literal("WEEK"), Type.Literal("TWO_WEEKS"), Type.Literal("HALF_MONTH"), Type.Literal("MONTH"), Type.Literal("TWO_MONTHS"), Type.Literal("QUARTER"), Type.Literal("HALF_YEAR"), Type.Literal("YEAR")]), Type.String(), Type.Null()])), pay_frequency: Type.Optional(Type.Union([Type.Union([Type.Literal("DAILY"), Type.Literal("WEEKLY"), Type.Literal("BIWEEKLY"), Type.Literal("MONTHLY"), Type.Literal("SEMIMONTHLY"), Type.Literal("QUARTERLY"), Type.Literal("SEMIANNUALLY"), Type.Literal("ANNUALLY"), Type.Literal("PRO_RATA")]), Type.String(), Type.Null()])), employment_type: Type.Optional(Type.Union([Type.Union([Type.Literal("FULL_TIME"), Type.Literal("PART_TIME"), Type.Literal("CONTRACT"), Type.Literal("INTERNSHIP"), Type.Literal("FREELANCE"), Type.Literal("WORKING_STUDENT"), Type.Literal("APPRENTICESHIP"), Type.Literal("TRAINING")]), Type.String(), Type.Null()])), pay_currency: Type.Union([Type.String(), Type.Null()]), effective_date: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), custom_fields: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), integration_fields: Type.Array(Type.Object({ id: Type.String(), key: Type.String(), type: Type.Union([Type.Literal("DEFAULT"), Type.Literal("CUSTOM")]), value: Type.Optional(Type.Null()), label: Type.Union([Type.String(), Type.Null()]) })) })) }) }),
  GetHrisLocationsParameterCursor: Type.String(),
  GetHrisLocationsParameterPageSize: Type.Integer({ minimum: 1, maximum: 250 }),
  GetHrisLocationsParameterUpdatedAfter: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }),
  GetHrisLocationsParameterIncludeDeleted: Type.Union([Type.Literal("true"), Type.Literal("false")]),
  GetHrisLocationsParameterIgnoreUnsupportedFilters: Type.Union([Type.Literal("true"), Type.Literal("false")]),
  GetHrisLocationsParameterIds: Type.String(),
  GetHrisLocationsParameterRemoteIds: Type.String(),
  GetHrisLocationsParameterNameContains: Type.String(),
  GetHrisLocationsPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), name: Type.Union([Type.String(), Type.Null()]), address: Type.Optional(Type.Union([Type.Partial(Type.Object({ city: Type.Union([Type.String(), Type.Null()]), country: Type.Union([Type.String(), Type.Null()]), raw: Type.Union([Type.String(), Type.Null()]), state: Type.Union([Type.String(), Type.Null()]), street_1: Type.Union([Type.String(), Type.Null()]), street_2: Type.Union([Type.String(), Type.Null()]), zip_code: Type.Union([Type.String(), Type.Null()]) })), Type.Null()])), type: Type.Union([Type.String(), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]) })) }) }),
  GetHrisAbsenceTypesParameterCursor: Type.String(),
  GetHrisAbsenceTypesParameterPageSize: Type.Integer({ minimum: 1, maximum: 250 }),
  GetHrisAbsenceTypesParameterUpdatedAfter: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }),
  GetHrisAbsenceTypesParameterIncludeDeleted: Type.Union([Type.Literal("true"), Type.Literal("false")]),
  GetHrisAbsenceTypesParameterIgnoreUnsupportedFilters: Type.Union([Type.Literal("true"), Type.Literal("false")]),
  GetHrisAbsenceTypesParameterIds: Type.String(),
  GetHrisAbsenceTypesParameterRemoteIds: Type.String(),
  GetHrisAbsenceTypesPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.String(), name: Type.Union([Type.String(), Type.Null()]), unit: Type.Union([Type.Union([Type.Literal("HOURS"), Type.Literal("DAYS")]), Type.Null()]), half_days_supported: Type.Union([Type.Boolean(), Type.Null()]), exact_times_supported: Type.Union([Type.Boolean(), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]) })) }) }),
  GetHrisTimeOffBalancesParameterCursor: Type.String(),
  GetHrisTimeOffBalancesParameterPageSize: Type.Integer({ minimum: 1, maximum: 250 }),
  GetHrisTimeOffBalancesParameterUpdatedAfter: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }),
  GetHrisTimeOffBalancesParameterIncludeDeleted: Type.Union([Type.Literal("true"), Type.Literal("false")]),
  GetHrisTimeOffBalancesParameterIgnoreUnsupportedFilters: Type.Union([Type.Literal("true"), Type.Literal("false")]),
  GetHrisTimeOffBalancesParameterIds: Type.String(),
  GetHrisTimeOffBalancesParameterRemoteIds: Type.String(),
  GetHrisTimeOffBalancesParameterEmployeeId: Type.String(),
  GetHrisTimeOffBalancesPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), employee_id: Type.String(), type_id: Type.String(), balance: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), balance_unit: Type.Union([Type.Union([Type.Literal("HOURS"), Type.Literal("DAYS")]), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), used: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), used_unit: Type.Union([Type.Union([Type.Literal("HOURS"), Type.Literal("DAYS")]), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), type: Type.Object({ id: Type.String(), remote_id: Type.String(), name: Type.Union([Type.String(), Type.Null()]), unit: Type.Union([Type.Union([Type.Literal("HOURS"), Type.Literal("DAYS")]), Type.Null()]), half_days_supported: Type.Union([Type.Boolean(), Type.Null()]), exact_times_supported: Type.Union([Type.Boolean(), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]) }) })) }) }),
  GetHrisAbsencesParameterCursor: Type.String(),
  GetHrisAbsencesParameterPageSize: Type.Integer({ minimum: 1, maximum: 250 }),
  GetHrisAbsencesParameterUpdatedAfter: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }),
  GetHrisAbsencesParameterIncludeDeleted: Type.Union([Type.Literal("true"), Type.Literal("false")]),
  GetHrisAbsencesParameterIgnoreUnsupportedFilters: Type.Union([Type.Literal("true"), Type.Literal("false")]),
  GetHrisAbsencesParameterIds: Type.String(),
  GetHrisAbsencesParameterRemoteIds: Type.String(),
  GetHrisAbsencesParameterDateFrom: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }),
  GetHrisAbsencesParameterDateUntil: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }),
  GetHrisAbsencesParameterTypeIds: Type.String(),
  GetHrisAbsencesParameterEmployeeId: Type.String(),
  GetHrisAbsencesParameterTimeFrom: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }),
  GetHrisAbsencesParameterTimeUntil: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }),
  GetHrisAbsencesPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), employee_id: Type.String(), approver_id: Type.Union([Type.String(), Type.Null()]), start_date: Type.Null(), end_date: Type.Null(), start_half_day: Type.Union([Type.Boolean(), Type.Null()]), end_half_day: Type.Union([Type.Boolean(), Type.Null()]), start_time: Type.Null(), end_time: Type.Null(), amount: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), unit: Type.Union([Type.Union([Type.Literal("HOURS"), Type.Literal("DAYS")]), Type.Null()]), status: Type.Optional(Type.Union([Type.Union([Type.Literal("REQUESTED"), Type.Literal("APPROVED"), Type.Literal("DECLINED"), Type.Literal("CANCELLED"), Type.Literal("DELETED")]), Type.String(), Type.Null()])), employee_note: Type.Union([Type.String(), Type.Null()]), type_id: Type.Union([Type.String(), Type.Null()]), remote_created_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_updated_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), type: Type.Union([Type.Object({ id: Type.String(), remote_id: Type.String(), name: Type.Union([Type.String(), Type.Null()]), unit: Type.Union([Type.Union([Type.Literal("HOURS"), Type.Literal("DAYS")]), Type.Null()]), half_days_supported: Type.Union([Type.Boolean(), Type.Null()]), exact_times_supported: Type.Union([Type.Boolean(), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]) }), Type.Null()]) })) }) }),
  PostHrisAbsencesPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), employee_id: Type.String(), approver_id: Type.Union([Type.String(), Type.Null()]), start_date: Type.Null(), end_date: Type.Null(), start_half_day: Type.Union([Type.Boolean(), Type.Null()]), end_half_day: Type.Union([Type.Boolean(), Type.Null()]), start_time: Type.Null(), end_time: Type.Null(), amount: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), unit: Type.Union([Type.Union([Type.Literal("HOURS"), Type.Literal("DAYS")]), Type.Null()]), status: Type.Optional(Type.Union([Type.Union([Type.Literal("REQUESTED"), Type.Literal("APPROVED"), Type.Literal("DECLINED"), Type.Literal("CANCELLED"), Type.Literal("DELETED")]), Type.String(), Type.Null()])), employee_note: Type.Union([Type.String(), Type.Null()]), type_id: Type.Union([Type.String(), Type.Null()]), remote_created_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_updated_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]) }), warnings: Type.Array(Type.Object({ message: Type.String() })) }),
  PostHrisAbsencesRequestBody: Type.Object({ employee_id: Type.String(), absence_type_id: Type.String(), status: Type.Optional(Type.Union([Type.Literal("REQUESTED"), Type.Literal("APPROVED")])), start_date: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }), end_date: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }), start_half_day: Type.Optional(Type.Boolean()), end_half_day: Type.Optional(Type.Boolean()), amount: Type.Optional(Type.Number({ minimum: 0 })), unit: Type.Optional(Type.Union([Type.Literal("HOURS"), Type.Literal("DAYS")])), employee_note: Type.Union([Type.String(), Type.Null()]), start_time: Type.Optional(Type.String({ pattern: "^(?:2[0-3]|[01]?\\d):[0-5]?\\d(:[0-5]?\\d)?$" })), end_time: Type.Optional(Type.String({ pattern: "^(?:2[0-3]|[01]?\\d):[0-5]?\\d(:[0-5]?\\d)?$" })), remote_fields: Type.Optional(Type.Partial(Type.Object({ a3innuvanomina: Type.Partial(Type.Object({ benefit_type_id: Type.Union([Type.Literal("Delegated Payment"), Type.Literal("No Right to Benefit"), Type.Literal("Direct payment")]) })), adpworkforcenow: Type.Partial(Type.Object({ employment_id: Type.String(), paid_leave: Type.Boolean() })) }))) }),
  DeleteHrisAbsencesAbsenceIdParameterAbsenceId: Type.String(),
  DeleteHrisAbsencesAbsenceIdPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), employee_id: Type.String(), approver_id: Type.Union([Type.String(), Type.Null()]), start_date: Type.Null(), end_date: Type.Null(), start_half_day: Type.Union([Type.Boolean(), Type.Null()]), end_half_day: Type.Union([Type.Boolean(), Type.Null()]), start_time: Type.Null(), end_time: Type.Null(), amount: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), unit: Type.Union([Type.Union([Type.Literal("HOURS"), Type.Literal("DAYS")]), Type.Null()]), status: Type.Optional(Type.Union([Type.Union([Type.Literal("REQUESTED"), Type.Literal("APPROVED"), Type.Literal("DECLINED"), Type.Literal("CANCELLED"), Type.Literal("DELETED")]), Type.String(), Type.Null()])), employee_note: Type.Union([Type.String(), Type.Null()]), type_id: Type.Union([Type.String(), Type.Null()]), remote_created_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_updated_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]) }), warnings: Type.Array(Type.Object({ message: Type.String() })) }),
  DeleteHrisAbsencesAbsenceIdRequestBody: Type.Partial(Type.Object({ remote_fields: Type.Partial(Type.Object({ adpworkforcenow: Type.Partial(Type.Object({ employment_id: Type.String() })) })) })),
  GetHrisLegalEntitiesParameterCursor: Type.String(),
  GetHrisLegalEntitiesParameterPageSize: Type.Integer({ minimum: 1, maximum: 250 }),
  GetHrisLegalEntitiesParameterUpdatedAfter: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }),
  GetHrisLegalEntitiesParameterIncludeDeleted: Type.Union([Type.Literal("true"), Type.Literal("false")]),
  GetHrisLegalEntitiesParameterIgnoreUnsupportedFilters: Type.Union([Type.Literal("true"), Type.Literal("false")]),
  GetHrisLegalEntitiesParameterIds: Type.String(),
  GetHrisLegalEntitiesParameterRemoteIds: Type.String(),
  GetHrisLegalEntitiesParameterNameContains: Type.String(),
  GetHrisLegalEntitiesPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), name: Type.Union([Type.String(), Type.Null()]), address: Type.Optional(Type.Union([Type.Partial(Type.Object({ city: Type.Union([Type.String(), Type.Null()]), country: Type.Union([Type.String(), Type.Null()]), raw: Type.Union([Type.String(), Type.Null()]), state: Type.Union([Type.String(), Type.Null()]), street_1: Type.Union([Type.String(), Type.Null()]), street_2: Type.Union([Type.String(), Type.Null()]), zip_code: Type.Union([Type.String(), Type.Null()]) })), Type.Null()])), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]) })) }) }),
  GetHrisTimesheetsParameterCursor: Type.String(),
  GetHrisTimesheetsParameterPageSize: Type.Integer({ minimum: 1, maximum: 250 }),
  GetHrisTimesheetsParameterUpdatedAfter: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }),
  GetHrisTimesheetsParameterIncludeDeleted: Type.Union([Type.Literal("true"), Type.Literal("false")]),
  GetHrisTimesheetsParameterIgnoreUnsupportedFilters: Type.Union([Type.Literal("true"), Type.Literal("false")]),
  GetHrisTimesheetsParameterIds: Type.String(),
  GetHrisTimesheetsParameterRemoteIds: Type.String(),
  GetHrisTimesheetsParameterEmployeeId: Type.String(),
  GetHrisTimesheetsParameterStartedBefore: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }),
  GetHrisTimesheetsParameterStartedAfter: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }),
  GetHrisTimesheetsParameterEndedBefore: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }),
  GetHrisTimesheetsParameterEndedAfter: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }),
  GetHrisTimesheetsPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), employee_id: Type.String(), started_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), ended_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), timezone: Type.Union([Type.String({ pattern: "^[+-](?:0\\d|1[0-4]):[0-5]\\d$" }), Type.Null()]), payable_hours: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), unpaid_break_minutes: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), breaks: Type.Optional(Type.Union([Type.Array(Type.Object({ ended_at: Type.Union([Type.String({ format: "date-time" }), Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$" })]), paid: Type.Boolean(), started_at: Type.Union([Type.String({ format: "date-time" }), Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$" })]) })), Type.Null()])), approval_status: Type.Union([Type.String(), Type.Null()]), approved_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), comment: Type.Union([Type.String(), Type.Null()]), custom_fields: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), integration_fields: Type.Array(Type.Object({ id: Type.String(), key: Type.String(), type: Type.Union([Type.Literal("DEFAULT"), Type.Literal("CUSTOM")]), value: Type.Optional(Type.Null()), label: Type.Union([Type.String(), Type.Null()]) })), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]) })) }) }),
  GetHrisPerformanceReviewCyclesParameterCursor: Type.String(),
  GetHrisPerformanceReviewCyclesParameterPageSize: Type.Integer({ minimum: 1, maximum: 250 }),
  GetHrisPerformanceReviewCyclesParameterUpdatedAfter: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }),
  GetHrisPerformanceReviewCyclesParameterIncludeDeleted: Type.Union([Type.Literal("true"), Type.Literal("false")]),
  GetHrisPerformanceReviewCyclesParameterIgnoreUnsupportedFilters: Type.Union([Type.Literal("true"), Type.Literal("false")]),
  GetHrisPerformanceReviewCyclesParameterIds: Type.String(),
  GetHrisPerformanceReviewCyclesParameterRemoteIds: Type.String(),
  GetHrisPerformanceReviewCyclesPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.String(), name: Type.Union([Type.String(), Type.Null()]), review_period_start_date: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]) })) }) }),
  GetHrisPerformanceReviewsParameterCursor: Type.String(),
  GetHrisPerformanceReviewsParameterPageSize: Type.Integer({ minimum: 1, maximum: 250 }),
  GetHrisPerformanceReviewsParameterUpdatedAfter: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }),
  GetHrisPerformanceReviewsParameterIncludeDeleted: Type.Union([Type.Literal("true"), Type.Literal("false")]),
  GetHrisPerformanceReviewsParameterIgnoreUnsupportedFilters: Type.Union([Type.Literal("true"), Type.Literal("false")]),
  GetHrisPerformanceReviewsParameterIds: Type.String(),
  GetHrisPerformanceReviewsParameterRemoteIds: Type.String(),
  GetHrisPerformanceReviewsParameterTypes: Type.String(),
  GetHrisPerformanceReviewsParameterReviewCycleIds: Type.String(),
  GetHrisPerformanceReviewsParameterRevieweeIds: Type.String(),
  GetHrisPerformanceReviewsPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.String(), type: Type.Union([Type.Union([Type.Literal("MANAGER"), Type.Literal("DIRECT_REPORT"), Type.Literal("PEER"), Type.Literal("SELF")]), Type.Null()]), summary_comment: Type.Union([Type.String(), Type.Null()]), summary_rating: Type.Optional(Type.Union([Type.Object({ type: Type.Literal("NUMERIC"), min: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), max: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), value: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]) }), Type.Object({ type: Type.Literal("SINGLE_SELECT"), ordered_options: Type.Union([Type.Array(Type.String()), Type.Null()]), value: Type.Union([Type.String(), Type.Null()]) }), Type.Null()])), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), reviewee: Type.Object({ id: Type.String(), remote_id: Type.String(), first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), display_full_name: Type.Union([Type.String(), Type.Null()]), work_email: Type.Optional(Type.Union([Type.String({ pattern: "^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$" }), Type.Null()])), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]) }), reviewer: Type.Union([Type.Object({ id: Type.String(), remote_id: Type.String(), first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), display_full_name: Type.Union([Type.String(), Type.Null()]), work_email: Type.Optional(Type.Union([Type.String({ pattern: "^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$" }), Type.Null()])), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]) }), Type.Null()]), review_cycle: Type.Union([Type.Object({ id: Type.String(), remote_id: Type.String(), name: Type.Union([Type.String(), Type.Null()]), review_period_start_date: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]) }), Type.Null()]) })) }) }),
  GetHrisSkillsParameterIds: Type.String(),
  GetHrisSkillsParameterRemoteIds: Type.String(),
  GetHrisSkillsParameterNameContains: Type.String(),
  GetHrisSkillsPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.String(), name: Type.String(), description: Type.Union([Type.String(), Type.Null()]), ordered_levels: Type.Union([Type.Array(Type.String()), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]) })) }) }),
  PostHrisSkillsPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ id: Type.String(), remote_id: Type.String(), name: Type.String(), description: Type.Union([Type.String(), Type.Null()]), ordered_levels: Type.Union([Type.Array(Type.String()), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]) }) }),
  PostHrisSkillsRequestBody: Type.Object({ name: Type.String(), levels: Type.Optional(Type.Array(Type.String())) }),
  PatchHrisSkillsSkillIdParameterSkillId: Type.String(),
  PatchHrisSkillsSkillIdPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ id: Type.String(), remote_id: Type.String(), name: Type.String(), description: Type.Union([Type.String(), Type.Null()]), ordered_levels: Type.Union([Type.Array(Type.String()), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]) }) }),
  PatchHrisSkillsSkillIdRequestBody: Type.Partial(Type.Object({ name: Type.String(), levels: Type.Array(Type.String()) })),
  DeleteHrisSkillsSkillIdParameterSkillId: Type.String(),
  DeleteHrisSkillsSkillIdPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ id: Type.String(), remote_id: Type.String(), name: Type.String(), description: Type.Union([Type.String(), Type.Null()]), ordered_levels: Type.Union([Type.Array(Type.String()), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]) }) }),
  DeleteHrisSkillsSkillIdRequestBody: Type.Partial(Type.Object({  })),
  GetHrisEmployeeSkillAssignmentsParameterIds: Type.String(),
  GetHrisEmployeeSkillAssignmentsParameterRemoteIds: Type.String(),
  GetHrisEmployeeSkillAssignmentsParameterEmployeeIds: Type.String(),
  GetHrisEmployeeSkillAssignmentsParameterSkillIds: Type.String(),
  GetHrisEmployeeSkillAssignmentsPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), employee_id: Type.String(), skill_id: Type.String(), current_level: Type.Union([Type.String(), Type.Null()]) })) }) }),
  PostHrisEmployeeSkillAssignmentsPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ id: Type.String(), employee_id: Type.String(), skill_id: Type.String(), current_level: Type.Union([Type.String(), Type.Null()]) }) }),
  PostHrisEmployeeSkillAssignmentsRequestBody: Type.Object({ employee_id: Type.String(), skill_id: Type.String(), current_level: Type.Optional(Type.String()) }),
  PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId: Type.String(),
  PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ id: Type.String(), employee_id: Type.String(), skill_id: Type.String(), current_level: Type.Union([Type.String(), Type.Null()]) }) }),
  PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody: Type.Object({ current_level: Type.Union([Type.String(), Type.Null()]) }),
  DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId: Type.String(),
  DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ id: Type.String(), employee_id: Type.String(), skill_id: Type.String(), current_level: Type.Union([Type.String(), Type.Null()]) }) }),
  DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody: Type.Partial(Type.Object({  })),
  GetHrisStaffingEntitiesParameterCursor: Type.String(),
  GetHrisStaffingEntitiesParameterPageSize: Type.Integer({ minimum: 1, maximum: 250 }),
  GetHrisStaffingEntitiesParameterUpdatedAfter: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }),
  GetHrisStaffingEntitiesParameterIncludeDeleted: Type.Union([Type.Literal("true"), Type.Literal("false")]),
  GetHrisStaffingEntitiesParameterIgnoreUnsupportedFilters: Type.Union([Type.Literal("true"), Type.Literal("false")]),
  GetHrisStaffingEntitiesParameterIds: Type.String(),
  GetHrisStaffingEntitiesParameterRemoteIds: Type.String(),
  GetHrisStaffingEntitiesParameterModelTypes: Type.String(),
  GetHrisStaffingEntitiesParameterStatuses: Type.String(),
  GetHrisStaffingEntitiesPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.String(), name: Type.Union([Type.String(), Type.Null()]), model_type: Type.Union([Type.Union([Type.Literal("JOB"), Type.Literal("POSITION"), Type.Literal("REQUISITION")]), Type.Null()]), description: Type.Union([Type.String(), Type.Null()]), status: Type.Union([Type.Union([Type.Literal("OPEN_LIMITED"), Type.Literal("OPEN_UNLIMITED"), Type.Literal("PENDING"), Type.Literal("FROZEN"), Type.Literal("FILLED"), Type.Literal("CLOSED")]), Type.Null()]), employment_types: Type.Optional(Type.Union([Type.Array(Type.Object({ remote_label: Type.String(), unified_type: Type.Union([Type.Union([Type.Literal("FULL_TIME"), Type.Literal("PART_TIME"), Type.Literal("CONTRACT"), Type.Literal("INTERNSHIP"), Type.Literal("FREELANCE"), Type.Literal("WORKING_STUDENT"), Type.Literal("APPRENTICESHIP"), Type.Literal("TRAINING")]), Type.Null()]) })), Type.Null()])), number_of_openings: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), parent_id: Type.Union([Type.String(), Type.Null()]), remote_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]), remote_created_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_updated_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), custom_fields: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), integration_fields: Type.Array(Type.Object({ id: Type.String(), key: Type.String(), type: Type.Union([Type.Literal("DEFAULT"), Type.Literal("CUSTOM")]), value: Type.Optional(Type.Null()), label: Type.Union([Type.String(), Type.Null()]) })), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), locations: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), name: Type.Union([Type.String(), Type.Null()]), type: Type.Union([Type.String(), Type.Null()]) })), legal_entities: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), name: Type.Union([Type.String(), Type.Null()]) })), groups: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.String(), name: Type.Union([Type.String(), Type.Null()]), type: Type.Union([Type.Union([Type.Literal("DEPARTMENT"), Type.Literal("TEAM"), Type.Literal("COST_CENTER")]), Type.Null()]) })) })) }) }),
  GetAtsApplicationsParameterCursor: Type.String(),
  GetAtsApplicationsParameterPageSize: Type.Integer({ minimum: 1, maximum: 250 }),
  GetAtsApplicationsParameterUpdatedAfter: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }),
  GetAtsApplicationsParameterIncludeDeleted: Type.Union([Type.Literal("true"), Type.Literal("false")]),
  GetAtsApplicationsParameterIgnoreUnsupportedFilters: Type.Union([Type.Literal("true"), Type.Literal("false")]),
  GetAtsApplicationsParameterIds: Type.String(),
  GetAtsApplicationsParameterRemoteIds: Type.String(),
  GetAtsApplicationsParameterOutcome: Type.Union([Type.Literal("PENDING"), Type.Literal("HIRED"), Type.Literal("DECLINED")]),
  GetAtsApplicationsParameterOutcomes: Type.String(),
  GetAtsApplicationsParameterJobIds: Type.String(),
  GetAtsApplicationsParameterJobRemoteIds: Type.String(),
  GetAtsApplicationsParameterCurrentStageIds: Type.String(),
  GetAtsApplicationsParameterRemoteCreatedAfter: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }),
  GetAtsApplicationsPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), outcome: Type.Union([Type.Union([Type.Literal("PENDING"), Type.Literal("HIRED"), Type.Literal("DECLINED")]), Type.Null()]), rejection_reason_name: Type.Union([Type.String(), Type.Null()]), rejected_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), current_stage_id: Type.Union([Type.String(), Type.Null()]), job_id: Type.Union([Type.String(), Type.Null()]), candidate_id: Type.Union([Type.String(), Type.Null()]), screening_question_answers: Type.Optional(Type.Union([Type.Array(Type.Union([Type.Object({ answer: Type.Object({ content: Type.Union([Type.String(), Type.Null()]) }), question: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), title: Type.String(), type: Type.Literal("TEXT") }) }), Type.Object({ answer: Type.Object({ choice: Type.Union([Type.String(), Type.Null()]) }), question: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), title: Type.String(), type: Type.Literal("SINGLE_SELECT") }) }), Type.Object({ answer: Type.Partial(Type.Object({ choices: Type.Array(Type.String()) })), question: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), title: Type.String(), type: Type.Literal("MULTI_SELECT") }) }), Type.Object({ answer: Type.Object({ checked: Type.Union([Type.Boolean(), Type.Null()]) }), question: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), title: Type.String(), type: Type.Literal("BOOLEAN") }) }), Type.Object({ answer: Type.Object({ number: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]) }), question: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), title: Type.String(), type: Type.Literal("NUMBER") }) }), Type.Object({ answer: Type.Object({ date: Type.Union([Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$" }), Type.Null()]) }), question: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), title: Type.String(), type: Type.Literal("DATE") }) }), Type.Object({ answer: Type.Partial(Type.Object({ raw: Type.Null() })), question: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), title: Type.String(), type: Type.Literal("UNKNOWN") }) })])), Type.Null()])), custom_fields: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), integration_fields: Type.Array(Type.Object({ id: Type.String(), key: Type.String(), type: Type.Union([Type.Literal("DEFAULT"), Type.Literal("CUSTOM")]), value: Type.Optional(Type.Null()), label: Type.Union([Type.String(), Type.Null()]) })), remote_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_created_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_updated_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), candidate: Type.Union([Type.Object({ id: Type.String(), remote_id: Type.String(), first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), email_addresses: Type.Optional(Type.Union([Type.Array(Type.Object({ email_address: Type.Optional(Type.Union([Type.String({ pattern: "^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$" }), Type.Null()])), type: Type.Union([Type.String(), Type.Null()]) })), Type.Null()])), phone_numbers: Type.Optional(Type.Union([Type.Array(Type.Object({ phone_number: Type.String(), type: Type.Optional(Type.Union([Type.String(), Type.Null()])) })), Type.Null()])), social_media: Type.Optional(Type.Union([Type.Array(Type.Partial(Type.Object({ link: Type.Union([Type.String(), Type.Null()]), type: Type.Union([Type.String(), Type.Null()]), username: Type.Union([Type.String(), Type.Null()]) }))), Type.Null()])), source: Type.Union([Type.String(), Type.Null()]), remote_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]), tags: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), name: Type.Union([Type.String(), Type.Null()]) })) }), Type.Null()]), current_stage: Type.Union([Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), name: Type.Union([Type.String(), Type.Null()]), index: Type.Union([Type.Integer(), Type.Null()]) }), Type.Null()]), job: Type.Union([Type.Object({ id: Type.String(), remote_id: Type.String(), name: Type.Union([Type.String(), Type.Null()]) }), Type.Null()]), interviews: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), starting_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), ending_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), location: Type.Optional(Type.Union([Type.Partial(Type.Object({ city: Type.Union([Type.String(), Type.Null()]), country: Type.Union([Type.String(), Type.Null()]), raw: Type.Union([Type.String(), Type.Null()]), state: Type.Union([Type.String(), Type.Null()]), street_1: Type.Union([Type.String(), Type.Null()]), street_2: Type.Union([Type.String(), Type.Null()]), zip_code: Type.Union([Type.String(), Type.Null()]) })), Type.Null()])), canceled: Type.Union([Type.Boolean(), Type.Null()]) })), offers: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), status: Type.Union([Type.Union([Type.Literal("ACCEPTED"), Type.Literal("DECLINED"), Type.Literal("SENT"), Type.Literal("APPROVED"), Type.Literal("DRAFT"), Type.Literal("ABANDONED")]), Type.Null()]) })) })) }) }),
  PutAtsApplicationsApplicationIdStageParameterApplicationId: Type.String(),
  PutAtsApplicationsApplicationIdStagePositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Record(Type.String(), Type.Unknown()), warnings: Type.Array(Type.Object({ message: Type.String() })) }),
  PutAtsApplicationsApplicationIdStageRequestBody: Type.Object({ stage_id: Type.String(), remote_fields: Type.Optional(Type.Intersect([Type.Partial(Type.Object({ workday: Type.Partial(Type.Object({ Workflow_Step_ID: Type.String(), Step_Type: Type.Union([Type.Literal("Next_Step_Reference"), Type.Literal("Disposition_Step_Reference")]) })) })), Type.Partial(Type.Object({ greenhouse: Type.Partial(Type.Object({ post_headers: Type.Partial(Type.Object({ "On-Behalf-Of": Type.Union([Type.String(), Type.Null()]) })) })), workable: Type.Partial(Type.Object({ on_behalf_of_user_remote_id: Type.String() })) }))])) }),
  PostAtsApplicationsApplicationIdResultLinksParameterApplicationId: Type.String(),
  PostAtsApplicationsApplicationIdResultLinksPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Record(Type.String(), Type.Unknown()), warnings: Type.Array(Type.Object({ message: Type.String() })) }),
  PostAtsApplicationsApplicationIdResultLinksRequestBody: Type.Object({ label: Type.String(), url: Type.String({ format: "uri" }), details: Type.Optional(Type.Object({ custom_field_name_prefix: Type.String(), attributes: Type.Array(Type.Object({ key: Type.String(), value: Type.String() })) })), remote_fields: Type.Optional(Type.Intersect([Type.Partial(Type.Object({ icims: Type.Partial(Type.Object({ assessment_package_id: Type.String() })), oracle: Type.Partial(Type.Object({ override_document_category: Type.Union([Type.Literal("IRC_CANDIDATE_RESUME"), Type.Literal("IRC_CANDIDATE_COVERLETTER"), Type.Literal("MISC"), Type.Literal("IRC_INTERNAL")]), multi_post_to_all_current_applications: Type.Boolean() })) })), Type.Partial(Type.Object({ greenhouse: Type.Partial(Type.Object({ post_headers: Type.Partial(Type.Object({ "On-Behalf-Of": Type.Union([Type.String(), Type.Null()]) })) })), workable: Type.Partial(Type.Object({ on_behalf_of_user_remote_id: Type.String() })) }))])) }),
  PostAtsApplicationsApplicationIdNotesParameterApplicationId: Type.String(),
  PostAtsApplicationsApplicationIdNotesPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Record(Type.String(), Type.Unknown()), warnings: Type.Array(Type.Object({ message: Type.String() })) }),
  PostAtsApplicationsApplicationIdNotesRequestBody: Type.Object({ content: Type.String(), content_type: Type.Literal("PLAIN_TEXT"), remote_fields: Type.Optional(Type.Intersect([Type.Partial(Type.Object({ teamtailor: Type.Partial(Type.Object({ user_id: Type.String() })), greenhouse: Type.Partial(Type.Object({ visibility: Type.Union([Type.Literal("admin_only"), Type.Literal("private"), Type.Literal("public")]) })), recruitee: Type.Partial(Type.Object({ visibility: Type.Unknown(), is_json: Type.Boolean() })), bullhorn: Type.Partial(Type.Object({ action: Type.String() })), lever: Type.Partial(Type.Object({ perform_as: Type.String() })) })), Type.Partial(Type.Object({ greenhouse: Type.Partial(Type.Object({ post_headers: Type.Partial(Type.Object({ "On-Behalf-Of": Type.Union([Type.String(), Type.Null()]) })) })), workable: Type.Partial(Type.Object({ on_behalf_of_user_remote_id: Type.String() })) }))])) }),
  GetAtsApplicationsApplicationIdAttachmentsParameterApplicationId: Type.String(),
  GetAtsApplicationsApplicationIdAttachmentsPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ results: Type.Array(Type.Object({ type: Type.Union([Type.Literal("CV"), Type.Literal("COVER_LETTER"), Type.Literal("OTHER")]), id: Type.String(), remote_id: Type.String(), data_url: Type.String(), file_name: Type.String(), content_type: Type.String(), remote_created_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_updated_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]) })) }), warnings: Type.Array(Type.Object({ message: Type.String() })) }),
  PostAtsApplicationsApplicationIdAttachmentsParameterApplicationId: Type.String(),
  PostAtsApplicationsApplicationIdAttachmentsPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Record(Type.String(), Type.Unknown()), warnings: Type.Array(Type.Object({ message: Type.String() })) }),
  PostAtsApplicationsApplicationIdAttachmentsRequestBody: Type.Object({ attachment: Type.Object({ name: Type.String(), content_type: Type.Optional(Type.String({ pattern: "^[\\w.-]+\\/[\\w.-]+$" })), data_url: Type.Optional(Type.String({ format: "uri" })), data: Type.Optional(Type.String()), type: Type.Union([Type.Literal("CV"), Type.Literal("COVER_LETTER"), Type.Literal("OTHER")]) }), remote_fields: Type.Optional(Type.Intersect([Type.Partial(Type.Object({ oracle: Type.Partial(Type.Object({ override_document_category: Type.Union([Type.Literal("IRC_CANDIDATE_RESUME"), Type.Literal("IRC_CANDIDATE_COVERLETTER"), Type.Literal("MISC"), Type.Literal("IRC_INTERNAL")]), multi_post_to_all_current_applications: Type.Boolean() })) })), Type.Partial(Type.Object({ greenhouse: Type.Partial(Type.Object({ post_headers: Type.Partial(Type.Object({ "On-Behalf-Of": Type.Union([Type.String(), Type.Null()]) })) })), workable: Type.Partial(Type.Object({ on_behalf_of_user_remote_id: Type.String() })) }))])) }),
  PostAtsApplicationsApplicationIdRejectParameterApplicationId: Type.String(),
  PostAtsApplicationsApplicationIdRejectPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Record(Type.String(), Type.Unknown()), warnings: Type.Array(Type.Object({ message: Type.String() })) }),
  PostAtsApplicationsApplicationIdRejectRequestBody: Type.Object({ rejection_reason_id: Type.String(), note: Type.Optional(Type.String()), remote_fields: Type.Optional(Type.Intersect([Type.Partial(Type.Object({ greenhouse: Type.Partial(Type.Object({ rejection_email: Type.Record(Type.String(), Type.Unknown()) })), teamtailor: Type.Partial(Type.Object({ user_id: Type.String() })) })), Type.Partial(Type.Object({ greenhouse: Type.Partial(Type.Object({ post_headers: Type.Partial(Type.Object({ "On-Behalf-Of": Type.Union([Type.String(), Type.Null()]) })) })), workable: Type.Partial(Type.Object({ on_behalf_of_user_remote_id: Type.String() })) }))])) }),
  PostAtsApplicationsApplicationIdInterviewsParameterApplicationId: Type.String(),
  PostAtsApplicationsApplicationIdInterviewsPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Record(Type.String(), Type.Unknown()) }),
  PostAtsApplicationsApplicationIdInterviewsRequestBody: Type.Object({ title: Type.String(), start_time: Type.String(), end_time: Type.String(), interviewer_user_ids: Type.Array(Type.String()), organizer_user_id: Type.String(), location: Type.Object({ type: Type.Union([Type.Literal("PHYSICAL"), Type.Literal("VIRTUAL")]), address: Type.Optional(Type.String()) }) }),
  PatchAtsApplicationsApplicationIdInterviewsParameterApplicationId: Type.String(),
  PatchAtsApplicationsApplicationIdInterviewsPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Record(Type.String(), Type.Unknown()) }),
  PatchAtsApplicationsApplicationIdInterviewsRequestBody: Type.Object({ interview_id: Type.String(), title: Type.String(), start_time: Type.String(), end_time: Type.String(), interviewer_user_ids: Type.Array(Type.String()), organizer_user_id: Type.String(), location: Type.Object({ type: Type.Union([Type.Literal("PHYSICAL"), Type.Literal("VIRTUAL")]), address: Type.Optional(Type.String()) }) }),
  GetAtsCandidatesParameterCursor: Type.String(),
  GetAtsCandidatesParameterPageSize: Type.Integer({ minimum: 1, maximum: 250 }),
  GetAtsCandidatesParameterUpdatedAfter: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }),
  GetAtsCandidatesParameterIncludeDeleted: Type.Union([Type.Literal("true"), Type.Literal("false")]),
  GetAtsCandidatesParameterIgnoreUnsupportedFilters: Type.Union([Type.Literal("true"), Type.Literal("false")]),
  GetAtsCandidatesParameterIds: Type.String(),
  GetAtsCandidatesParameterRemoteIds: Type.String(),
  GetAtsCandidatesParameterEmail: Type.String({ format: "email" }),
  GetAtsCandidatesParameterJobIds: Type.String(),
  GetAtsCandidatesParameterFirstName: Type.String(),
  GetAtsCandidatesParameterLastName: Type.String(),
  GetAtsCandidatesPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.String(), first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), company: Type.Union([Type.String(), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), confidential: Type.Union([Type.Boolean(), Type.Null()]), source: Type.Union([Type.String(), Type.Null()]), phone_numbers: Type.Optional(Type.Union([Type.Array(Type.Object({ phone_number: Type.String(), type: Type.Optional(Type.Union([Type.String(), Type.Null()])) })), Type.Null()])), email_addresses: Type.Optional(Type.Union([Type.Array(Type.Object({ email_address: Type.Optional(Type.Union([Type.String({ pattern: "^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$" }), Type.Null()])), type: Type.Union([Type.String(), Type.Null()]) })), Type.Null()])), social_media: Type.Optional(Type.Union([Type.Array(Type.Partial(Type.Object({ link: Type.Union([Type.String(), Type.Null()]), type: Type.Union([Type.String(), Type.Null()]), username: Type.Union([Type.String(), Type.Null()]) }))), Type.Null()])), location: Type.Optional(Type.Union([Type.Partial(Type.Object({ city: Type.Union([Type.String(), Type.Null()]), country: Type.Union([Type.String(), Type.Null()]), raw: Type.Union([Type.String(), Type.Null()]), state: Type.Union([Type.String(), Type.Null()]), street_1: Type.Union([Type.String(), Type.Null()]), street_2: Type.Union([Type.String(), Type.Null()]), zip_code: Type.Union([Type.String(), Type.Null()]) })), Type.Null()])), custom_fields: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), integration_fields: Type.Array(Type.Object({ id: Type.String(), key: Type.String(), type: Type.Union([Type.Literal("DEFAULT"), Type.Literal("CUSTOM")]), value: Type.Optional(Type.Null()), label: Type.Union([Type.String(), Type.Null()]) })), remote_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]), remote_created_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_updated_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), applications: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), outcome: Type.Union([Type.Union([Type.Literal("PENDING"), Type.Literal("HIRED"), Type.Literal("DECLINED")]), Type.Null()]), rejection_reason_name: Type.Union([Type.String(), Type.Null()]), rejected_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_created_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_updated_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), current_stage: Type.Union([Type.Object({ id: Type.String(), name: Type.Union([Type.String(), Type.Null()]), remote_id: Type.Union([Type.String(), Type.Null()]), index: Type.Union([Type.Integer(), Type.Null()]) }), Type.Null()]), job: Type.Union([Type.Object({ id: Type.String(), name: Type.Union([Type.String(), Type.Null()]), remote_id: Type.String() }), Type.Null()]) })), tags: Type.Array(Type.Object({ id: Type.String(), name: Type.Union([Type.String(), Type.Null()]), remote_id: Type.Union([Type.String(), Type.Null()]) })) })) }) }),
  PostAtsCandidatesPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ id: Type.String(), remote_id: Type.String(), first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), company: Type.Union([Type.String(), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), confidential: Type.Union([Type.Boolean(), Type.Null()]), source: Type.Union([Type.String(), Type.Null()]), phone_numbers: Type.Optional(Type.Union([Type.Array(Type.Object({ phone_number: Type.String(), type: Type.Optional(Type.Union([Type.String(), Type.Null()])) })), Type.Null()])), email_addresses: Type.Optional(Type.Union([Type.Array(Type.Object({ email_address: Type.Optional(Type.Union([Type.String({ pattern: "^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$" }), Type.Null()])), type: Type.Union([Type.String(), Type.Null()]) })), Type.Null()])), social_media: Type.Optional(Type.Union([Type.Array(Type.Partial(Type.Object({ link: Type.Union([Type.String(), Type.Null()]), type: Type.Union([Type.String(), Type.Null()]), username: Type.Union([Type.String(), Type.Null()]) }))), Type.Null()])), location: Type.Optional(Type.Union([Type.Partial(Type.Object({ city: Type.Union([Type.String(), Type.Null()]), country: Type.Union([Type.String(), Type.Null()]), raw: Type.Union([Type.String(), Type.Null()]), state: Type.Union([Type.String(), Type.Null()]), street_1: Type.Union([Type.String(), Type.Null()]), street_2: Type.Union([Type.String(), Type.Null()]), zip_code: Type.Union([Type.String(), Type.Null()]) })), Type.Null()])), custom_fields: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), integration_fields: Type.Array(Type.Object({ id: Type.String(), key: Type.String(), type: Type.Union([Type.Literal("DEFAULT"), Type.Literal("CUSTOM")]), value: Type.Optional(Type.Null()), label: Type.Union([Type.String(), Type.Null()]) })), remote_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]), remote_created_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_updated_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), applications: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), outcome: Type.Union([Type.Union([Type.Literal("PENDING"), Type.Literal("HIRED"), Type.Literal("DECLINED")]), Type.Null()]), rejection_reason_name: Type.Union([Type.String(), Type.Null()]), rejected_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_created_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_updated_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), current_stage: Type.Union([Type.Object({ id: Type.String(), name: Type.Union([Type.String(), Type.Null()]), remote_id: Type.Union([Type.String(), Type.Null()]), index: Type.Union([Type.Integer(), Type.Null()]) }), Type.Null()]), job: Type.Union([Type.Object({ id: Type.String(), name: Type.Union([Type.String(), Type.Null()]), remote_id: Type.String() }), Type.Null()]) })), tags: Type.Array(Type.Object({ id: Type.String(), name: Type.Union([Type.String(), Type.Null()]), remote_id: Type.Union([Type.String(), Type.Null()]) })) }), warnings: Type.Array(Type.Object({ message: Type.String() })) }),
  PostAtsCandidatesRequestBody: Type.Object({ candidate: Type.Object({ first_name: Type.String(), last_name: Type.String(), email_address: Type.String({ format: "email" }), additional_email_addresses: Type.Optional(Type.Array(Type.Object({ type: Type.Union([Type.Literal("PERSONAL"), Type.Literal("WORK"), Type.Literal("OTHER")]), email_address: Type.String({ format: "email" }) }))), company: Type.Optional(Type.String()), title: Type.Optional(Type.String()), phone_number: Type.Optional(Type.String()), additional_phone_numbers: Type.Optional(Type.Array(Type.Object({ type: Type.Union([Type.Literal("PERSONAL"), Type.Literal("WORK"), Type.Literal("OTHER")]), phone_number: Type.String() }))), location: Type.Optional(Type.Object({ city: Type.Optional(Type.String()), country: Type.String({ pattern: "^[A-Z]{2}$" }), state: Type.Optional(Type.String()), street_1: Type.Optional(Type.String()), zip_code: Type.Optional(Type.String()) })), gender: Type.Optional(Type.Union([Type.Literal("MALE"), Type.Literal("FEMALE"), Type.Literal("OTHER")])), availability_date: Type.Optional(Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" })), salary_expectations: Type.Optional(Type.Object({ period: Type.Union([Type.Literal("MONTH"), Type.Literal("YEAR")]), amount: Type.Number({ minimum: -1.7976931348623157e+308 }) })), social_links: Type.Optional(Type.Array(Type.Object({ url: Type.String({ format: "uri" }) }))) }), application: Type.Object({ job_id: Type.String(), stage_id: Type.Optional(Type.String()) }), screening_question_answers: Type.Optional(Type.Array(Type.Object({ question_id: Type.String(), answer: Type.Union([Type.String(), Type.Boolean(), Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Array(Type.String()), Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }), Type.Object({ name: Type.String(), content_type: Type.Optional(Type.String({ pattern: "^[\\w.-]+\\/[\\w.-]+$" })), data_url: Type.Optional(Type.String({ format: "uri" })), data: Type.Optional(Type.String()) })]) }))), attachments: Type.Optional(Type.Array(Type.Object({ name: Type.String(), content_type: Type.Optional(Type.String({ pattern: "^[\\w.-]+\\/[\\w.-]+$" })), data_url: Type.Optional(Type.String({ format: "uri" })), data: Type.Optional(Type.String()), type: Type.Union([Type.Literal("CV"), Type.Literal("COVER_LETTER"), Type.Literal("OTHER")]) }))), source: Type.Optional(Type.Partial(Type.Object({ name: Type.String(), unified_key: Type.String(), id: Type.String() }))), sourced_by: Type.Optional(Type.Object({ user_id: Type.String() })), gdpr_consent: Type.Optional(Type.Partial(Type.Object({ expires_at: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }), given: Type.Boolean() }))), remote_fields: Type.Optional(Type.Intersect([Type.Partial(Type.Object({ successfactors: Type.Partial(Type.Object({ Candidate: Type.Record(Type.String(), Type.Unknown()), JobApplication: Type.Record(Type.String(), Type.Unknown()), copyJobApplicationAttachments: Type.Boolean(), update_existing_candidate: Type.Union([Type.Boolean(), Type.Null()]) })), personio: Type.Partial(Type.Object({ application: Type.Record(Type.String(), Type.Unknown()) })), talentsoft: Type.Partial(Type.Object({ applicant: Type.Record(Type.String(), Type.Unknown()), application: Type.Record(Type.String(), Type.Unknown()) })), teamtailor: Type.Partial(Type.Object({ candidate: Type.Record(Type.String(), Type.Unknown()), application: Type.Partial(Type.Object({ attributes: Type.Record(Type.String(), Type.Unknown()) })) })), greenhouse: Type.Partial(Type.Object({ candidate: Type.Record(Type.String(), Type.Unknown()), application: Type.Record(Type.String(), Type.Unknown()) })), lever: Type.Partial(Type.Object({ candidate: Type.Record(Type.String(), Type.Unknown()) })), workable: Type.Partial(Type.Object({ candidate: Type.Record(Type.String(), Type.Unknown()) })), workday: Type.Partial(Type.Object({ Candidate_Data: Type.Partial(Type.Object({ Name_Detail_Data: Type.Partial(Type.Object({ Middle_Name: Type.String(), Social_Suffix_Reference: Type.Object({ Predefined_Name_Component_ID: Type.String() }) })), Language_Reference: Type.Object({ WID: Type.String() }), Job_Application_Data: Type.Partial(Type.Object({ Job_Applied_To_Data: Type.Partial(Type.Object({ Global_Personal_Information_Data: Type.Partial(Type.Object({ Date_of_Birth: Type.String() })) })), Resume_Data: Type.Partial(Type.Object({ Education_Data: Type.Array(Type.Partial(Type.Object({ School_Name: Type.String(), First_Year_Attended: Type.Number({ minimum: -1.7976931348623157e+308 }), Last_Year_Attended: Type.Number({ minimum: -1.7976931348623157e+308 }), Field_of_Study_Reference: Type.Object({ WID: Type.String() }), Degree_Reference: Type.Object({ WID: Type.String() }), Grade_Average: Type.String() }))), Skill_Data: Type.Array(Type.Partial(Type.Object({ Skill_Name: Type.String() }))), Language_Data: Type.Array(Type.Partial(Type.Object({ Language_Reference: Type.Partial(Type.Object({ WID: Type.String() })), Language: Type.Object({ Native: Type.Optional(Type.Boolean()), Language_Ability: Type.Array(Type.Partial(Type.Object({ Language_Ability_Data: Type.Partial(Type.Object({ Language_Proficiency_Reference: Type.Object({ WID: Type.String() }), Language_Ability_Type_Reference: Type.Object({ WID: Type.String() }) })) }))) }) }))), Experience_Data: Type.Array(Type.Object({ Company_Name: Type.String(), Title: Type.String(), Location: Type.Optional(Type.String()), Start_Date: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }), End_Date: Type.Optional(Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" })), Currently_Work_Here: Type.Optional(Type.Boolean()), Description: Type.Optional(Type.String()) })) })) })), Contact_Data: Type.Partial(Type.Object({ Location_Data: Type.Partial(Type.Object({ Address_Line_1: Type.String(), Address_Line_2: Type.String(), Region_Subdivision_1: Type.String(), Country_Region_Reference: Type.Object({ Country_Region_ID: Type.String() }), Country_City_Reference: Type.Object({ WID: Type.String() }) })) })), Worker_Reference: Type.Partial(Type.Object({ WID: Type.String(), Employee_ID: Type.String() })) })), Override_Source_Reference_WID: Type.String() })), zohorecruit: Type.Partial(Type.Object({ candidate: Type.Record(Type.String(), Type.Unknown()) })), bullhorn: Type.Partial(Type.Object({ candidate: Type.Record(Type.String(), Type.Unknown()), job_submission: Type.Record(Type.String(), Type.Unknown()) })), smartrecruiters: Type.Partial(Type.Object({ candidate_with_questions: Type.Record(Type.String(), Type.Unknown()), candidate_without_questions: Type.Record(Type.String(), Type.Unknown()), candidate: Type.Record(Type.String(), Type.Unknown()), consent_decisions: Type.Partial(Type.Object({ SINGLE: Type.Boolean(), SMART_RECRUIT: Type.Boolean(), SMART_CRM: Type.Boolean(), SMART_MESSAGE_SMS: Type.Boolean(), SMART_MESSAGE_WHATSAPP: Type.Boolean() })) })), talentadore: Type.Partial(Type.Object({ applications: Type.Record(Type.String(), Type.Unknown()) })), guidecom: Type.Partial(Type.Object({ candidate: Type.Record(Type.String(), Type.Unknown()) })), dvinci: Type.Partial(Type.Object({ application: Type.Record(Type.String(), Type.Unknown()), candidate: Type.Record(Type.String(), Type.Unknown()) })), hrworks: Type.Partial(Type.Object({ jobApplication: Type.Record(Type.String(), Type.Unknown()) })), jobylon: Type.Partial(Type.Object({ application: Type.Partial(Type.Object({ message: Type.String() })) })), avature: Type.Partial(Type.Object({ workflow: Type.Partial(Type.Object({ step: Type.Object({ id: Type.Integer() }) })) })), recruitee: Type.Partial(Type.Object({ candidate: Type.Partial(Type.Object({ cover_letter_text: Type.String() })) })), rexx: Type.Partial(Type.Object({ candidate: Type.Record(Type.String(), Type.Unknown()) })), umantis: Type.Partial(Type.Object({ person: Type.Record(Type.String(), Type.Unknown()) })), piloga: Type.Partial(Type.Object({ candidate: Type.Partial(Type.Object({ street: Type.String() })) })), pinpoint: Type.Partial(Type.Object({ candidate: Type.Record(Type.String(), Type.Unknown()) })), covetorest: Type.Partial(Type.Object({ candidate: Type.Partial(Type.Object({ mandant: Type.Number({ minimum: -1.7976931348623157e+308 }) })) })) })), Type.Partial(Type.Object({ greenhouse: Type.Partial(Type.Object({ post_headers: Type.Partial(Type.Object({ "On-Behalf-Of": Type.Union([Type.String(), Type.Null()]) })) })), workable: Type.Partial(Type.Object({ on_behalf_of_user_remote_id: Type.String() })) }))])) }),
  GetAtsCandidatesCandidateIdAttachmentsParameterCandidateId: Type.String(),
  GetAtsCandidatesCandidateIdAttachmentsPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ results: Type.Array(Type.Object({ id: Type.String({ minLength: 24, maxLength: 24, pattern: "^[1-9A-HJ-NP-Za-km-z]+$" }), application_id: Type.Union([Type.String({ minLength: 24, maxLength: 24, pattern: "^[1-9A-HJ-NP-Za-km-z]+$" }), Type.Null()]), candidate_id: Type.String({ minLength: 24, maxLength: 24, pattern: "^[1-9A-HJ-NP-Za-km-z]+$" }), type: Type.Union([Type.Literal("CV"), Type.Literal("COVER_LETTER"), Type.Literal("OTHER")]), remote_id: Type.String(), data_url: Type.String(), file_name: Type.String(), content_type: Type.String(), remote_created_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_updated_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]) })) }), warnings: Type.Array(Type.Object({ message: Type.String() })) }),
  PostAtsCandidatesCandidateIdAttachmentsParameterCandidateId: Type.String(),
  PostAtsCandidatesCandidateIdAttachmentsPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Record(Type.String(), Type.Unknown()), warnings: Type.Array(Type.Object({ message: Type.String() })) }),
  PostAtsCandidatesCandidateIdAttachmentsRequestBody: Type.Object({ attachment: Type.Object({ name: Type.String(), content_type: Type.Optional(Type.String({ pattern: "^[\\w.-]+\\/[\\w.-]+$" })), data_url: Type.Optional(Type.String({ format: "uri" })), data: Type.Optional(Type.String()), type: Type.Union([Type.Literal("CV"), Type.Literal("COVER_LETTER"), Type.Literal("OTHER")]) }), remote_fields: Type.Optional(Type.Partial(Type.Object({ greenhouse: Type.Partial(Type.Object({ post_headers: Type.Partial(Type.Object({ "On-Behalf-Of": Type.Union([Type.String(), Type.Null()]) })) })), workable: Type.Partial(Type.Object({ on_behalf_of_user_remote_id: Type.String() })) }))) }),
  PostAtsCandidatesCandidateIdResultLinksParameterCandidateId: Type.String(),
  PostAtsCandidatesCandidateIdResultLinksPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Record(Type.String(), Type.Unknown()), warnings: Type.Array(Type.Object({ message: Type.String() })) }),
  PostAtsCandidatesCandidateIdResultLinksRequestBody: Type.Object({ label: Type.String(), url: Type.String({ format: "uri" }), details: Type.Optional(Type.Object({ custom_field_name_prefix: Type.String(), attributes: Type.Array(Type.Object({ key: Type.String(), value: Type.String() })) })), remote_fields: Type.Optional(Type.Intersect([Type.Partial(Type.Object({ icims: Type.Partial(Type.Object({ assessment_package_id: Type.String() })), oracle: Type.Partial(Type.Object({ override_document_category: Type.Union([Type.Literal("IRC_CANDIDATE_RESUME"), Type.Literal("IRC_CANDIDATE_COVERLETTER"), Type.Literal("MISC"), Type.Literal("IRC_INTERNAL")]), multi_post_to_all_current_applications: Type.Boolean() })) })), Type.Partial(Type.Object({ greenhouse: Type.Partial(Type.Object({ post_headers: Type.Partial(Type.Object({ "On-Behalf-Of": Type.Union([Type.String(), Type.Null()]) })) })), workable: Type.Partial(Type.Object({ on_behalf_of_user_remote_id: Type.String() })) }))])) }),
  PostAtsCandidatesCandidateIdTagsParameterCandidateId: Type.String(),
  PostAtsCandidatesCandidateIdTagsPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Record(Type.String(), Type.Unknown()), warnings: Type.Array(Type.Object({ message: Type.String() })) }),
  PostAtsCandidatesCandidateIdTagsRequestBody: Type.Object({ tag: Type.Object({ name: Type.String({ minLength: 1 }) }), remote_fields: Type.Optional(Type.Partial(Type.Object({ greenhouse: Type.Partial(Type.Object({ post_headers: Type.Partial(Type.Object({ "On-Behalf-Of": Type.Union([Type.String(), Type.Null()]) })) })), workable: Type.Partial(Type.Object({ on_behalf_of_user_remote_id: Type.String() })) }))) }),
  DeleteAtsCandidatesCandidateIdTagsParameterCandidateId: Type.String(),
  DeleteAtsCandidatesCandidateIdTagsPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Record(Type.String(), Type.Unknown()), warnings: Type.Array(Type.Object({ message: Type.String() })) }),
  DeleteAtsCandidatesCandidateIdTagsRequestBody: Type.Object({ tag: Type.Object({ name: Type.String() }), remote_fields: Type.Optional(Type.Partial(Type.Object({ greenhouse: Type.Partial(Type.Object({ post_headers: Type.Partial(Type.Object({ "On-Behalf-Of": Type.Union([Type.String(), Type.Null()]) })) })), workable: Type.Partial(Type.Object({ on_behalf_of_user_remote_id: Type.String() })) }))) }),
  GetAtsTagsParameterCursor: Type.String(),
  GetAtsTagsParameterPageSize: Type.Integer({ minimum: 1, maximum: 250 }),
  GetAtsTagsParameterUpdatedAfter: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }),
  GetAtsTagsParameterIncludeDeleted: Type.Union([Type.Literal("true"), Type.Literal("false")]),
  GetAtsTagsParameterIgnoreUnsupportedFilters: Type.Union([Type.Literal("true"), Type.Literal("false")]),
  GetAtsTagsParameterIds: Type.String(),
  GetAtsTagsParameterRemoteIds: Type.String(),
  GetAtsTagsPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), name: Type.Union([Type.String(), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]) })) }) }),
  GetAtsApplicationStagesParameterCursor: Type.String(),
  GetAtsApplicationStagesParameterPageSize: Type.Integer({ minimum: 1, maximum: 250 }),
  GetAtsApplicationStagesParameterUpdatedAfter: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }),
  GetAtsApplicationStagesParameterIncludeDeleted: Type.Union([Type.Literal("true"), Type.Literal("false")]),
  GetAtsApplicationStagesParameterIgnoreUnsupportedFilters: Type.Union([Type.Literal("true"), Type.Literal("false")]),
  GetAtsApplicationStagesParameterIds: Type.String(),
  GetAtsApplicationStagesParameterRemoteIds: Type.String(),
  GetAtsApplicationStagesPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), name: Type.Union([Type.String(), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]) })) }) }),
  GetAtsJobsParameterCursor: Type.String(),
  GetAtsJobsParameterPageSize: Type.Integer({ minimum: 1, maximum: 250 }),
  GetAtsJobsParameterUpdatedAfter: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }),
  GetAtsJobsParameterIncludeDeleted: Type.Union([Type.Literal("true"), Type.Literal("false")]),
  GetAtsJobsParameterIgnoreUnsupportedFilters: Type.Union([Type.Literal("true"), Type.Literal("false")]),
  GetAtsJobsParameterIds: Type.String(),
  GetAtsJobsParameterRemoteIds: Type.String(),
  GetAtsJobsParameterJobCodes: Type.String(),
  GetAtsJobsParameterPostUrl: Type.String(),
  GetAtsJobsParameterStatus: Type.Union([Type.Literal("OPEN"), Type.Literal("CLOSED"), Type.Literal("DRAFT"), Type.Literal("ARCHIVED")]),
  GetAtsJobsParameterStatuses: Type.String(),
  GetAtsJobsParameterEmploymentTypes: Type.String(),
  GetAtsJobsParameterVisibilities: Type.String(),
  GetAtsJobsParameterRemoteCreatedAfter: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }),
  GetAtsJobsParameterNameContains: Type.String(),
  GetAtsJobsPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.String(), name: Type.Union([Type.String(), Type.Null()]), job_code: Type.Union([Type.String(), Type.Null()]), description: Type.Union([Type.String(), Type.Null()]), confidential: Type.Union([Type.Boolean(), Type.Null()]), weekly_hours: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), employment_type: Type.Optional(Type.Union([Type.Union([Type.Literal("FULL_TIME"), Type.Literal("PART_TIME"), Type.Literal("CONTRACT"), Type.Literal("SEASONAL"), Type.Literal("INTERNSHIP")]), Type.String(), Type.Null()])), status: Type.Optional(Type.Union([Type.Union([Type.Literal("OPEN"), Type.Literal("CLOSED"), Type.Literal("DRAFT"), Type.Literal("ARCHIVED")]), Type.String(), Type.Null()])), visibility: Type.Optional(Type.Union([Type.Union([Type.Literal("PUBLIC"), Type.Literal("INTERNAL"), Type.Literal("UNLISTED"), Type.Literal("CONFIDENTIAL")]), Type.String(), Type.Null()])), category: Type.Union([Type.String(), Type.Null()]), department: Type.Union([Type.String(), Type.Null()]), post_url: Type.Union([Type.String(), Type.Null()]), experience_level: Type.Union([Type.String(), Type.Null()]), remote_work_status: Type.Optional(Type.Union([Type.Union([Type.Literal("REMOTE"), Type.Literal("HYBRID"), Type.Literal("TEMPORARY"), Type.Literal("ON_SITE")]), Type.String(), Type.Null()])), salary_amount: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), salary_amount_from: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), salary_amount_to: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), salary_currency: Type.Union([Type.String(), Type.Null()]), salary_period: Type.Optional(Type.Union([Type.Union([Type.Literal("YEAR"), Type.Literal("MONTH"), Type.Literal("TWO_WEEKS"), Type.Literal("WEEK"), Type.Literal("DAY"), Type.Literal("HOUR")]), Type.String(), Type.Null()])), location: Type.Optional(Type.Union([Type.Partial(Type.Object({ city: Type.Union([Type.String(), Type.Null()]), country: Type.Union([Type.String(), Type.Null()]), raw: Type.Union([Type.String(), Type.Null()]), state: Type.Union([Type.String(), Type.Null()]), street_1: Type.Union([Type.String(), Type.Null()]), street_2: Type.Union([Type.String(), Type.Null()]), zip_code: Type.Union([Type.String(), Type.Null()]) })), Type.Null()])), custom_fields: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), integration_fields: Type.Array(Type.Object({ id: Type.String(), key: Type.String(), type: Type.Union([Type.Literal("DEFAULT"), Type.Literal("CUSTOM")]), value: Type.Optional(Type.Null()), label: Type.Union([Type.String(), Type.Null()]) })), remote_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]), opened_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), closed_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_created_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_updated_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), contact_id: Type.Union([Type.String(), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), stages: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), name: Type.Union([Type.String(), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), index: Type.Optional(Type.Union([Type.Integer(), Type.Null()])) })), screening_questions: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), description: Type.Union([Type.String(), Type.Null()]), format: Type.Optional(Type.Union([Type.Object({ display_type: Type.Optional(Type.Union([Type.Union([Type.Literal("SINGLE_LINE"), Type.Literal("MULTI_LINE"), Type.Literal("EMAIL"), Type.Literal("URL")]), Type.Null()])), max_length: Type.Optional(Type.Union([Type.Integer(), Type.Null()])), type: Type.Literal("TEXT") }), Type.Object({ display_type: Type.Optional(Type.Union([Type.Union([Type.Literal("SLIDER"), Type.Literal("FIELD")]), Type.Null()])), max: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])), min: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])), type: Type.Literal("NUMBER") }), Type.Object({ accepted_mime_types: Type.Optional(Type.Union([Type.Array(Type.String()), Type.Null()])), max_file_size_bytes: Type.Optional(Type.Union([Type.Integer(), Type.Null()])), type: Type.Literal("FILE") }), Type.Object({ display_type: Type.Optional(Type.Union([Type.Union([Type.Literal("DROPDOWN"), Type.Literal("RADIO")]), Type.Null()])), options: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Optional(Type.Union([Type.String(), Type.Null()])), name: Type.String() })), type: Type.Literal("SINGLE_SELECT") }), Type.Object({ type: Type.Literal("BOOLEAN") }), Type.Object({ type: Type.Literal("DATE") }), Type.Object({ options: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Optional(Type.Union([Type.String(), Type.Null()])), name: Type.String() })), type: Type.Literal("MULTI_SELECT") }), Type.Object({ type: Type.Literal("INFORMATION") }), Type.Object({ raw_question: Type.Optional(Type.Unknown()), type: Type.Literal("UNKNOWN") }), Type.Null()])), category: Type.Union([Type.Union([Type.Literal("EEO"), Type.Literal("DEMOGRAPHIC")]), Type.Null()]), index: Type.Optional(Type.Union([Type.Integer(), Type.Null()])), required: Type.Union([Type.Boolean(), Type.Null()]), precondition_question_id: Type.Optional(Type.Union([Type.String({ minLength: 24, maxLength: 24, pattern: "^[1-9A-HJ-NP-Za-km-z]+$" }), Type.Null()])), precondition_options: Type.Optional(Type.Union([Type.Array(Type.String({ minLength: 24, maxLength: 24, pattern: "^[1-9A-HJ-NP-Za-km-z]+$" })), Type.Array(Type.Boolean()), Type.Null()])) })), job_postings: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), description_html: Type.Union([Type.String(), Type.Null()]), status: Type.Union([Type.Union([Type.Literal("ACTIVE"), Type.Literal("INACTIVE"), Type.Literal("DRAFT")]), Type.Null()]), visibility: Type.Union([Type.Union([Type.Literal("PUBLIC"), Type.Literal("INTERNAL"), Type.Literal("UNLISTED")]), Type.Null()]), url: Type.Union([Type.String(), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]) })), hiring_team: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), email: Type.Optional(Type.Union([Type.String({ pattern: "^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$" }), Type.Null()])), hiring_team_roles: Type.Array(Type.Union([Type.Literal("RECRUITER"), Type.Literal("HIRING_MANAGER"), Type.Literal("COORDINATOR"), Type.Literal("SOURCER"), Type.Literal("INTERVIEWER")])), job_roles: Type.Array(Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), remote_label: Type.Union([Type.String(), Type.Null()]), scope: Type.Union([Type.Union([Type.Literal("SYSTEM"), Type.Literal("JOB")]), Type.Null()]), unified_type: Type.Union([Type.Union([Type.Literal("HIRING_MANAGER"), Type.Literal("RECRUITER"), Type.Literal("COORDINATOR"), Type.Literal("SOURCER"), Type.Literal("INTERVIEWER"), Type.Literal("ADMIN")]), Type.Null()]) })) })) })) }) }),
  PostAtsJobsJobIdApplicationsParameterJobId: Type.String(),
  PostAtsJobsJobIdApplicationsPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), outcome: Type.Union([Type.Union([Type.Literal("PENDING"), Type.Literal("HIRED"), Type.Literal("DECLINED")]), Type.Null()]), rejection_reason_name: Type.Union([Type.String(), Type.Null()]), rejected_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), current_stage_id: Type.Union([Type.String(), Type.Null()]), job_id: Type.Union([Type.String(), Type.Null()]), candidate_id: Type.Union([Type.String(), Type.Null()]), screening_question_answers: Type.Optional(Type.Union([Type.Array(Type.Union([Type.Object({ answer: Type.Object({ content: Type.Union([Type.String(), Type.Null()]) }), question: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), title: Type.String(), type: Type.Literal("TEXT") }) }), Type.Object({ answer: Type.Object({ choice: Type.Union([Type.String(), Type.Null()]) }), question: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), title: Type.String(), type: Type.Literal("SINGLE_SELECT") }) }), Type.Object({ answer: Type.Partial(Type.Object({ choices: Type.Array(Type.String()) })), question: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), title: Type.String(), type: Type.Literal("MULTI_SELECT") }) }), Type.Object({ answer: Type.Object({ checked: Type.Union([Type.Boolean(), Type.Null()]) }), question: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), title: Type.String(), type: Type.Literal("BOOLEAN") }) }), Type.Object({ answer: Type.Object({ number: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]) }), question: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), title: Type.String(), type: Type.Literal("NUMBER") }) }), Type.Object({ answer: Type.Object({ date: Type.Union([Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$" }), Type.Null()]) }), question: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), title: Type.String(), type: Type.Literal("DATE") }) }), Type.Object({ answer: Type.Partial(Type.Object({ raw: Type.Null() })), question: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), title: Type.String(), type: Type.Literal("UNKNOWN") }) })])), Type.Null()])), custom_fields: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), integration_fields: Type.Array(Type.Object({ id: Type.String(), key: Type.String(), type: Type.Union([Type.Literal("DEFAULT"), Type.Literal("CUSTOM")]), value: Type.Optional(Type.Null()), label: Type.Union([Type.String(), Type.Null()]) })), remote_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_created_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_updated_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), current_stage: Type.Union([Type.Object({ id: Type.String(), name: Type.Union([Type.String(), Type.Null()]), remote_id: Type.Union([Type.String(), Type.Null()]), index: Type.Union([Type.Integer(), Type.Null()]) }), Type.Null()]), job: Type.Union([Type.Object({ id: Type.String(), name: Type.Union([Type.String(), Type.Null()]), remote_id: Type.String() }), Type.Null()]), candidate: Type.Union([Type.Object({ id: Type.String(), remote_id: Type.String(), first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), company: Type.Union([Type.String(), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), confidential: Type.Union([Type.Boolean(), Type.Null()]), source: Type.Union([Type.String(), Type.Null()]), phone_numbers: Type.Optional(Type.Union([Type.Array(Type.Object({ phone_number: Type.String(), type: Type.Optional(Type.Union([Type.String(), Type.Null()])) })), Type.Null()])), email_addresses: Type.Optional(Type.Union([Type.Array(Type.Object({ email_address: Type.Optional(Type.Union([Type.String({ pattern: "^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$" }), Type.Null()])), type: Type.Union([Type.String(), Type.Null()]) })), Type.Null()])), social_media: Type.Optional(Type.Union([Type.Array(Type.Partial(Type.Object({ link: Type.Union([Type.String(), Type.Null()]), type: Type.Union([Type.String(), Type.Null()]), username: Type.Union([Type.String(), Type.Null()]) }))), Type.Null()])), location: Type.Optional(Type.Union([Type.Partial(Type.Object({ city: Type.Union([Type.String(), Type.Null()]), country: Type.Union([Type.String(), Type.Null()]), raw: Type.Union([Type.String(), Type.Null()]), state: Type.Union([Type.String(), Type.Null()]), street_1: Type.Union([Type.String(), Type.Null()]), street_2: Type.Union([Type.String(), Type.Null()]), zip_code: Type.Union([Type.String(), Type.Null()]) })), Type.Null()])), custom_fields: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), integration_fields: Type.Array(Type.Object({ id: Type.String(), key: Type.String(), type: Type.Union([Type.Literal("DEFAULT"), Type.Literal("CUSTOM")]), value: Type.Optional(Type.Null()), label: Type.Union([Type.String(), Type.Null()]) })), remote_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]), remote_created_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_updated_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), tags: Type.Array(Type.Object({ id: Type.String(), name: Type.Union([Type.String(), Type.Null()]), remote_id: Type.Union([Type.String(), Type.Null()]) })) }), Type.Null()]) }), warnings: Type.Array(Type.Object({ message: Type.String() })) }),
  PostAtsJobsJobIdApplicationsRequestBody: Type.Object({ stage_id: Type.Optional(Type.String()), candidate: Type.Object({ first_name: Type.String(), last_name: Type.String(), email_address: Type.String({ format: "email" }), additional_email_addresses: Type.Optional(Type.Array(Type.Object({ type: Type.Union([Type.Literal("PERSONAL"), Type.Literal("WORK"), Type.Literal("OTHER")]), email_address: Type.String({ format: "email" }) }))), company: Type.Optional(Type.String()), title: Type.Optional(Type.String()), phone_number: Type.Optional(Type.String()), additional_phone_numbers: Type.Optional(Type.Array(Type.Object({ type: Type.Union([Type.Literal("PERSONAL"), Type.Literal("WORK"), Type.Literal("OTHER")]), phone_number: Type.String() }))), location: Type.Optional(Type.Object({ city: Type.Optional(Type.String()), country: Type.String({ pattern: "^[A-Z]{2}$" }), state: Type.Optional(Type.String()), street_1: Type.Optional(Type.String()), zip_code: Type.Optional(Type.String()) })), gender: Type.Optional(Type.Union([Type.Literal("MALE"), Type.Literal("FEMALE"), Type.Literal("OTHER")])), availability_date: Type.Optional(Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" })), salary_expectations: Type.Optional(Type.Object({ period: Type.Union([Type.Literal("MONTH"), Type.Literal("YEAR")]), amount: Type.Number({ minimum: -1.7976931348623157e+308 }) })), social_links: Type.Optional(Type.Array(Type.Object({ url: Type.String({ format: "uri" }) }))) }), attachments: Type.Optional(Type.Array(Type.Object({ name: Type.String(), content_type: Type.Optional(Type.String({ pattern: "^[\\w.-]+\\/[\\w.-]+$" })), data_url: Type.Optional(Type.String({ format: "uri" })), data: Type.Optional(Type.String()), type: Type.Union([Type.Literal("CV"), Type.Literal("COVER_LETTER"), Type.Literal("OTHER")]) }))), source: Type.Optional(Type.Partial(Type.Object({ name: Type.String(), unified_key: Type.String(), id: Type.String() }))), sourced_by: Type.Optional(Type.Object({ user_id: Type.String() })), gdpr_consent: Type.Optional(Type.Partial(Type.Object({ expires_at: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }), given: Type.Boolean() }))), remote_fields: Type.Optional(Type.Intersect([Type.Partial(Type.Object({ successfactors: Type.Partial(Type.Object({ Candidate: Type.Record(Type.String(), Type.Unknown()), JobApplication: Type.Record(Type.String(), Type.Unknown()), copyJobApplicationAttachments: Type.Boolean(), update_existing_candidate: Type.Union([Type.Boolean(), Type.Null()]) })), personio: Type.Partial(Type.Object({ application: Type.Record(Type.String(), Type.Unknown()) })), talentsoft: Type.Partial(Type.Object({ applicant: Type.Record(Type.String(), Type.Unknown()), application: Type.Record(Type.String(), Type.Unknown()) })), teamtailor: Type.Partial(Type.Object({ candidate: Type.Record(Type.String(), Type.Unknown()), application: Type.Partial(Type.Object({ attributes: Type.Record(Type.String(), Type.Unknown()) })) })), greenhouse: Type.Partial(Type.Object({ candidate: Type.Record(Type.String(), Type.Unknown()), application: Type.Record(Type.String(), Type.Unknown()) })), lever: Type.Partial(Type.Object({ candidate: Type.Record(Type.String(), Type.Unknown()) })), workable: Type.Partial(Type.Object({ candidate: Type.Record(Type.String(), Type.Unknown()) })), workday: Type.Partial(Type.Object({ Candidate_Data: Type.Partial(Type.Object({ Name_Detail_Data: Type.Partial(Type.Object({ Middle_Name: Type.String(), Social_Suffix_Reference: Type.Object({ Predefined_Name_Component_ID: Type.String() }) })), Language_Reference: Type.Object({ WID: Type.String() }), Job_Application_Data: Type.Partial(Type.Object({ Job_Applied_To_Data: Type.Partial(Type.Object({ Global_Personal_Information_Data: Type.Partial(Type.Object({ Date_of_Birth: Type.String() })) })), Resume_Data: Type.Partial(Type.Object({ Education_Data: Type.Array(Type.Partial(Type.Object({ School_Name: Type.String(), First_Year_Attended: Type.Number({ minimum: -1.7976931348623157e+308 }), Last_Year_Attended: Type.Number({ minimum: -1.7976931348623157e+308 }), Field_of_Study_Reference: Type.Object({ WID: Type.String() }), Degree_Reference: Type.Object({ WID: Type.String() }), Grade_Average: Type.String() }))), Skill_Data: Type.Array(Type.Partial(Type.Object({ Skill_Name: Type.String() }))), Language_Data: Type.Array(Type.Partial(Type.Object({ Language_Reference: Type.Partial(Type.Object({ WID: Type.String() })), Language: Type.Object({ Native: Type.Optional(Type.Boolean()), Language_Ability: Type.Array(Type.Partial(Type.Object({ Language_Ability_Data: Type.Partial(Type.Object({ Language_Proficiency_Reference: Type.Object({ WID: Type.String() }), Language_Ability_Type_Reference: Type.Object({ WID: Type.String() }) })) }))) }) }))), Experience_Data: Type.Array(Type.Object({ Company_Name: Type.String(), Title: Type.String(), Location: Type.Optional(Type.String()), Start_Date: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }), End_Date: Type.Optional(Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" })), Currently_Work_Here: Type.Optional(Type.Boolean()), Description: Type.Optional(Type.String()) })) })) })), Contact_Data: Type.Partial(Type.Object({ Location_Data: Type.Partial(Type.Object({ Address_Line_1: Type.String(), Address_Line_2: Type.String(), Region_Subdivision_1: Type.String(), Country_Region_Reference: Type.Object({ Country_Region_ID: Type.String() }), Country_City_Reference: Type.Object({ WID: Type.String() }) })) })), Worker_Reference: Type.Partial(Type.Object({ WID: Type.String(), Employee_ID: Type.String() })) })), Override_Source_Reference_WID: Type.String() })), zohorecruit: Type.Partial(Type.Object({ candidate: Type.Record(Type.String(), Type.Unknown()) })), bullhorn: Type.Partial(Type.Object({ candidate: Type.Record(Type.String(), Type.Unknown()), job_submission: Type.Record(Type.String(), Type.Unknown()) })), smartrecruiters: Type.Partial(Type.Object({ candidate_with_questions: Type.Record(Type.String(), Type.Unknown()), candidate_without_questions: Type.Record(Type.String(), Type.Unknown()), candidate: Type.Record(Type.String(), Type.Unknown()), consent_decisions: Type.Partial(Type.Object({ SINGLE: Type.Boolean(), SMART_RECRUIT: Type.Boolean(), SMART_CRM: Type.Boolean(), SMART_MESSAGE_SMS: Type.Boolean(), SMART_MESSAGE_WHATSAPP: Type.Boolean() })) })), talentadore: Type.Partial(Type.Object({ applications: Type.Record(Type.String(), Type.Unknown()) })), guidecom: Type.Partial(Type.Object({ candidate: Type.Record(Type.String(), Type.Unknown()) })), dvinci: Type.Partial(Type.Object({ application: Type.Record(Type.String(), Type.Unknown()), candidate: Type.Record(Type.String(), Type.Unknown()) })), hrworks: Type.Partial(Type.Object({ jobApplication: Type.Record(Type.String(), Type.Unknown()) })), jobylon: Type.Partial(Type.Object({ application: Type.Partial(Type.Object({ message: Type.String() })) })), avature: Type.Partial(Type.Object({ workflow: Type.Partial(Type.Object({ step: Type.Object({ id: Type.Integer() }) })) })), recruitee: Type.Partial(Type.Object({ candidate: Type.Partial(Type.Object({ cover_letter_text: Type.String() })) })), rexx: Type.Partial(Type.Object({ candidate: Type.Record(Type.String(), Type.Unknown()) })), umantis: Type.Partial(Type.Object({ person: Type.Record(Type.String(), Type.Unknown()) })), piloga: Type.Partial(Type.Object({ candidate: Type.Partial(Type.Object({ street: Type.String() })) })), pinpoint: Type.Partial(Type.Object({ candidate: Type.Record(Type.String(), Type.Unknown()) })), covetorest: Type.Partial(Type.Object({ candidate: Type.Partial(Type.Object({ mandant: Type.Number({ minimum: -1.7976931348623157e+308 }) })) })) })), Type.Partial(Type.Object({ greenhouse: Type.Partial(Type.Object({ post_headers: Type.Partial(Type.Object({ "On-Behalf-Of": Type.Union([Type.String(), Type.Null()]) })) })), workable: Type.Partial(Type.Object({ on_behalf_of_user_remote_id: Type.String() })) }))])), screening_question_answers: Type.Optional(Type.Array(Type.Object({ question_id: Type.String(), answer: Type.Union([Type.String(), Type.Boolean(), Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Array(Type.String()), Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }), Type.Object({ name: Type.String(), content_type: Type.Optional(Type.String({ pattern: "^[\\w.-]+\\/[\\w.-]+$" })), data_url: Type.Optional(Type.String({ format: "uri" })), data: Type.Optional(Type.String()) })]) }))) }),
  GetAtsUsersParameterCursor: Type.String(),
  GetAtsUsersParameterPageSize: Type.Integer({ minimum: 1, maximum: 250 }),
  GetAtsUsersParameterUpdatedAfter: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }),
  GetAtsUsersParameterIncludeDeleted: Type.Union([Type.Literal("true"), Type.Literal("false")]),
  GetAtsUsersParameterIgnoreUnsupportedFilters: Type.Union([Type.Literal("true"), Type.Literal("false")]),
  GetAtsUsersParameterIds: Type.String(),
  GetAtsUsersParameterRemoteIds: Type.String(),
  GetAtsUsersParameterEmails: Type.String(),
  GetAtsUsersPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), email: Type.Optional(Type.Union([Type.String({ pattern: "^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$" }), Type.Null()])), status: Type.Union([Type.Union([Type.Literal("ACTIVE"), Type.Literal("INACTIVE")]), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), system_roles: Type.Array(Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), remote_label: Type.Union([Type.String(), Type.Null()]), scope: Type.Union([Type.Union([Type.Literal("SYSTEM"), Type.Literal("JOB")]), Type.Null()]), unified_type: Type.Union([Type.Union([Type.Literal("HIRING_MANAGER"), Type.Literal("RECRUITER"), Type.Literal("COORDINATOR"), Type.Literal("SOURCER"), Type.Literal("INTERVIEWER"), Type.Literal("ADMIN")]), Type.Null()]) })) })) }) }),
  GetAtsRolesParameterCursor: Type.String(),
  GetAtsRolesParameterPageSize: Type.Integer({ minimum: 1, maximum: 250 }),
  GetAtsRolesParameterUpdatedAfter: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }),
  GetAtsRolesParameterIncludeDeleted: Type.Union([Type.Literal("true"), Type.Literal("false")]),
  GetAtsRolesParameterIgnoreUnsupportedFilters: Type.Union([Type.Literal("true"), Type.Literal("false")]),
  GetAtsRolesParameterIds: Type.String(),
  GetAtsRolesParameterRemoteIds: Type.String(),
  GetAtsRolesParameterScopes: Type.String(),
  GetAtsRolesPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), remote_label: Type.Union([Type.String(), Type.Null()]), scope: Type.Union([Type.Union([Type.Literal("SYSTEM"), Type.Literal("JOB")]), Type.Null()]), unified_type: Type.Union([Type.Union([Type.Literal("HIRING_MANAGER"), Type.Literal("RECRUITER"), Type.Literal("COORDINATOR"), Type.Literal("SOURCER"), Type.Literal("INTERVIEWER"), Type.Literal("ADMIN")]), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]) })) }) }),
  GetAtsOffersParameterCursor: Type.String(),
  GetAtsOffersParameterPageSize: Type.Integer({ minimum: 1, maximum: 250 }),
  GetAtsOffersParameterUpdatedAfter: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }),
  GetAtsOffersParameterIncludeDeleted: Type.Union([Type.Literal("true"), Type.Literal("false")]),
  GetAtsOffersParameterIgnoreUnsupportedFilters: Type.Union([Type.Literal("true"), Type.Literal("false")]),
  GetAtsOffersParameterIds: Type.String(),
  GetAtsOffersParameterRemoteIds: Type.String(),
  GetAtsOffersPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), status: Type.Union([Type.Union([Type.Literal("ACCEPTED"), Type.Literal("DECLINED"), Type.Literal("SENT"), Type.Literal("APPROVED"), Type.Literal("DRAFT"), Type.Literal("ABANDONED")]), Type.Null()]), employment_start_date: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), application_id: Type.Union([Type.String(), Type.Null()]), custom_fields: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), integration_fields: Type.Array(Type.Object({ id: Type.String(), key: Type.String(), type: Type.Union([Type.Literal("DEFAULT"), Type.Literal("CUSTOM")]), value: Type.Optional(Type.Null()), label: Type.Union([Type.String(), Type.Null()]) })), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_created_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_updated_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), application: Type.Union([Type.Object({ candidate: Type.Union([Type.Object({ id: Type.String(), remote_id: Type.String(), first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), email_addresses: Type.Optional(Type.Union([Type.Array(Type.Object({ email_address: Type.Optional(Type.Union([Type.String({ pattern: "^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$" }), Type.Null()])), type: Type.Union([Type.String(), Type.Null()]) })), Type.Null()])) }), Type.Null()]), job: Type.Union([Type.Object({ id: Type.String(), remote_id: Type.String(), name: Type.Union([Type.String(), Type.Null()]) }), Type.Null()]) }), Type.Null()]) })) }) }),
  GetAtsRejectionReasonsParameterCursor: Type.String(),
  GetAtsRejectionReasonsParameterPageSize: Type.Integer({ minimum: 1, maximum: 250 }),
  GetAtsRejectionReasonsParameterUpdatedAfter: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }),
  GetAtsRejectionReasonsParameterIncludeDeleted: Type.Union([Type.Literal("true"), Type.Literal("false")]),
  GetAtsRejectionReasonsParameterIgnoreUnsupportedFilters: Type.Union([Type.Literal("true"), Type.Literal("false")]),
  GetAtsRejectionReasonsParameterIds: Type.String(),
  GetAtsRejectionReasonsParameterRemoteIds: Type.String(),
  GetAtsRejectionReasonsPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.String(), name: Type.Union([Type.String(), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]) })) }) }),
  GetAtsInterviewsParameterCursor: Type.String(),
  GetAtsInterviewsParameterPageSize: Type.Integer({ minimum: 1, maximum: 250 }),
  GetAtsInterviewsParameterUpdatedAfter: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }),
  GetAtsInterviewsParameterIncludeDeleted: Type.Union([Type.Literal("true"), Type.Literal("false")]),
  GetAtsInterviewsParameterIgnoreUnsupportedFilters: Type.Union([Type.Literal("true"), Type.Literal("false")]),
  GetAtsInterviewsParameterIds: Type.String(),
  GetAtsInterviewsParameterRemoteIds: Type.String(),
  GetAtsInterviewsParameterJobIds: Type.String(),
  GetAtsInterviewsPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), starting_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), ending_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), location: Type.Optional(Type.Union([Type.Partial(Type.Object({ city: Type.Union([Type.String(), Type.Null()]), country: Type.Union([Type.String(), Type.Null()]), raw: Type.Union([Type.String(), Type.Null()]), state: Type.Union([Type.String(), Type.Null()]), street_1: Type.Union([Type.String(), Type.Null()]), street_2: Type.Union([Type.String(), Type.Null()]), zip_code: Type.Union([Type.String(), Type.Null()]) })), Type.Null()])), video_conferencing_url: Type.Union([Type.String(), Type.Null()]), application_id: Type.Union([Type.String(), Type.Null()]), stage_id: Type.Union([Type.String(), Type.Null()]), canceled: Type.Union([Type.Boolean(), Type.Null()]), remote_created_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_updated_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), users: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), email: Type.Optional(Type.Union([Type.String({ pattern: "^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$" }), Type.Null()])) })), application: Type.Union([Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), outcome: Type.Union([Type.Union([Type.Literal("PENDING"), Type.Literal("HIRED"), Type.Literal("DECLINED")]), Type.Null()]), rejection_reason_name: Type.Union([Type.String(), Type.Null()]), candidate: Type.Union([Type.Object({ id: Type.String(), remote_id: Type.String(), first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), email_addresses: Type.Optional(Type.Union([Type.Array(Type.Object({ email_address: Type.Optional(Type.Union([Type.String({ pattern: "^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$" }), Type.Null()])), type: Type.Union([Type.String(), Type.Null()]) })), Type.Null()])) }), Type.Null()]), job: Type.Union([Type.Object({ id: Type.String(), remote_id: Type.String(), name: Type.Union([Type.String(), Type.Null()]) }), Type.Null()]) }), Type.Null()]) })) }) }),
  GetAtsActionsAtsCreateCandidatePositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Partial(Type.Object({ attachment_restrictions: Type.Union([Type.Object({ total_size_bytes: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), types: Type.Object({ CV: Type.Union([Type.Object({ is_supported: Type.Literal(true), min_amount: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), max_amount: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), max_file_size_bytes: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), accepted_mime_types: Type.Union([Type.Array(Type.String()), Type.Null()]) }), Type.Object({ is_supported: Type.Literal(false) })]), COVER_LETTER: Type.Union([Type.Object({ is_supported: Type.Literal(true), min_amount: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), max_amount: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), max_file_size_bytes: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), accepted_mime_types: Type.Union([Type.Array(Type.String()), Type.Null()]) }), Type.Object({ is_supported: Type.Literal(false) })]), OTHER: Type.Union([Type.Object({ is_supported: Type.Literal(true), min_amount: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), max_amount: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), max_file_size_bytes: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), accepted_mime_types: Type.Union([Type.Array(Type.String()), Type.Null()]) }), Type.Object({ is_supported: Type.Literal(false) })]) }) }), Type.Null()]) })) }),
  GetAtsActionsAtsCreateApplicationPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Partial(Type.Object({ attachment_restrictions: Type.Union([Type.Object({ total_size_bytes: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), types: Type.Object({ CV: Type.Union([Type.Object({ is_supported: Type.Literal(true), min_amount: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), max_amount: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), max_file_size_bytes: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), accepted_mime_types: Type.Union([Type.Array(Type.String()), Type.Null()]) }), Type.Object({ is_supported: Type.Literal(false) })]), COVER_LETTER: Type.Union([Type.Object({ is_supported: Type.Literal(true), min_amount: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), max_amount: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), max_file_size_bytes: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), accepted_mime_types: Type.Union([Type.Array(Type.String()), Type.Null()]) }), Type.Object({ is_supported: Type.Literal(false) })]), OTHER: Type.Union([Type.Object({ is_supported: Type.Literal(true), min_amount: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), max_amount: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), max_file_size_bytes: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), accepted_mime_types: Type.Union([Type.Array(Type.String()), Type.Null()]) }), Type.Object({ is_supported: Type.Literal(false) })]) }) }), Type.Null()]) })) }),
  GetAtsActionsAtsAddApplicationAttachmentPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Partial(Type.Object({ attachment_restrictions: Type.Union([Type.Object({ types: Type.Object({ CV: Type.Union([Type.Object({ is_supported: Type.Literal(true), max_file_size_bytes: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), accepted_mime_types: Type.Union([Type.Array(Type.String()), Type.Null()]) }), Type.Object({ is_supported: Type.Literal(false) })]), COVER_LETTER: Type.Union([Type.Object({ is_supported: Type.Literal(true), max_file_size_bytes: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), accepted_mime_types: Type.Union([Type.Array(Type.String()), Type.Null()]) }), Type.Object({ is_supported: Type.Literal(false) })]), OTHER: Type.Union([Type.Object({ is_supported: Type.Literal(true), max_file_size_bytes: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), accepted_mime_types: Type.Union([Type.Array(Type.String()), Type.Null()]) }), Type.Object({ is_supported: Type.Literal(false) })]) }) }), Type.Null()]) })) }),
  GetAtsActionsAtsAddCandidateAttachmentPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Partial(Type.Object({ attachment_restrictions: Type.Union([Type.Object({ types: Type.Object({ CV: Type.Union([Type.Object({ is_supported: Type.Literal(true), max_file_size_bytes: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), accepted_mime_types: Type.Union([Type.Array(Type.String()), Type.Null()]) }), Type.Object({ is_supported: Type.Literal(false) })]), COVER_LETTER: Type.Union([Type.Object({ is_supported: Type.Literal(true), max_file_size_bytes: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), accepted_mime_types: Type.Union([Type.Array(Type.String()), Type.Null()]) }), Type.Object({ is_supported: Type.Literal(false) })]), OTHER: Type.Union([Type.Object({ is_supported: Type.Literal(true), max_file_size_bytes: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), accepted_mime_types: Type.Union([Type.Array(Type.String()), Type.Null()]) }), Type.Object({ is_supported: Type.Literal(false) })]) }) }), Type.Null()]) })) }),
  PostAtsImportTrackedApplicationPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ id: Type.String({ minLength: 24, maxLength: 24, pattern: "^[1-9A-HJ-NP-Za-km-z]+$" }), tracked_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), imported_id: Type.Partial(Type.Object({ erecruiter: Type.Union([Type.Object({ id_type: Type.Literal("application_and_job_remote_ids"), application_remote_id: Type.String(), job_remote_id: Type.String() }), Type.Object({ id_type: Type.Literal("application_and_candidate_remote_ids"), candidate_remote_id: Type.String(), application_remote_id: Type.String() })]), successfactors: Type.Object({ id_type: Type.Literal("application_remote_id"), application_remote_id: Type.String() }), recruitee: Type.Object({ id_type: Type.Literal("placement_id"), placement_id: Type.String() }), greenhouse: Type.Object({ id_type: Type.Literal("application_id"), application_id: Type.String() }), onlyfy: Type.Object({ id_type: Type.Literal("application_id"), application_id: Type.String() }), smartrecruiters: Type.Object({ id_type: Type.Literal("candidate_and_job_remote_ids"), candidate_remote_id: Type.String(), job_remote_id: Type.String() }) })) }), warnings: Type.Array(Type.Object({ message: Type.String() })) }),
  PostAtsImportTrackedApplicationRequestBody: Type.Object({ erecruiter: Type.Optional(Type.Union([Type.Object({ id_type: Type.Literal("application_and_job_remote_ids"), application_remote_id: Type.String(), job_remote_id: Type.String() }), Type.Object({ id_type: Type.Literal("application_and_candidate_remote_ids"), candidate_remote_id: Type.String(), application_remote_id: Type.String() })])), successfactors: Type.Optional(Type.Object({ id_type: Type.Literal("application_remote_id"), application_remote_id: Type.String() })), recruitee: Type.Optional(Type.Object({ id_type: Type.Literal("placement_id"), placement_id: Type.String() })), greenhouse: Type.Optional(Type.Object({ id_type: Type.Literal("application_id"), application_id: Type.String() })), onlyfy: Type.Optional(Type.Object({ id_type: Type.Literal("application_id"), application_id: Type.String() })), smartrecruiters: Type.Optional(Type.Object({ id_type: Type.Literal("candidate_and_job_remote_ids"), candidate_remote_id: Type.String(), job_remote_id: Type.String() })), tracked_at: Type.Union([Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }), Type.Null()]) }),
  PostAtsCustomAvionteSyncedJobsPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Record(Type.String(), Type.Unknown()) }),
  PostAtsCustomAvionteSyncedJobsRequestBody: Type.Object({ job_remote_id: Type.String({ pattern: "^\\d+$" }) }),
  DeleteAtsCustomAvionteSyncedJobsJobRemoteIdParameterJobRemoteId: Type.String(),
  DeleteAtsCustomAvionteSyncedJobsJobRemoteIdPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Record(Type.String(), Type.Unknown()) }),
  DeleteAtsCustomAvionteSyncedJobsJobRemoteIdRequestBody: Type.Partial(Type.Object({  })),
  GetAssessmentPackagesPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ packages: Type.Array(Type.Object({ id: Type.String(), name: Type.String(), description: Type.String(), updated_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), type: Type.Union([Type.Union([Type.Literal("BEHAVIORAL"), Type.Literal("VIDEO_INTERVIEW"), Type.Literal("SKILLS_TEST"), Type.Literal("BACKGROUND_CHECK"), Type.Literal("REFERENCE_CHECK")]), Type.Null()]) })) }) }),
  PutAssessmentPackagesPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Record(Type.String(), Type.Unknown()), warnings: Type.Array(Type.Object({ message: Type.String() })) }),
  PutAssessmentPackagesRequestBody: Type.Object({ packages: Type.Array(Type.Object({ id: Type.String(), type: Type.Union([Type.Literal("BEHAVIORAL"), Type.Literal("VIDEO_INTERVIEW"), Type.Literal("SKILLS_TEST"), Type.Literal("BACKGROUND_CHECK"), Type.Literal("REFERENCE_CHECK")]), name: Type.String(), description: Type.String() })) }),
  GetAssessmentOrdersParameterCursor: Type.String(),
  GetAssessmentOrdersParameterPageSize: Type.Integer({ minimum: 1, maximum: 250 }),
  GetAssessmentOrdersParameterIds: Type.String(),
  GetAssessmentOrdersParameterStatuses: Type.String(),
  GetAssessmentOrdersParameterCreatedAfter: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }),
  GetAssessmentOrdersPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), package_id: Type.String(), status: Type.Union([Type.Literal("OPEN"), Type.Literal("COMPLETED"), Type.Literal("CANCELLED"), Type.Literal("REJECTED")]), candidate: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), email: Type.String({ format: "email" }), first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), phone: Type.Union([Type.String(), Type.Null()]) }), application: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]) }), job: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), name: Type.Union([Type.String(), Type.Null()]), job_code: Type.Union([Type.String(), Type.Null()]), description: Type.Union([Type.String(), Type.Null()]), location: Type.Union([Type.Partial(Type.Object({ street_1: Type.Union([Type.String(), Type.Null()]), street_2: Type.Union([Type.String(), Type.Null()]), city: Type.Union([Type.String(), Type.Null()]), state: Type.Union([Type.String(), Type.Null()]), zip_code: Type.Union([Type.String(), Type.Null()]), country: Type.Union([Type.String(), Type.Null()]), raw: Type.Union([Type.String(), Type.Null()]) })), Type.Null()]), hiring_team: Type.Array(Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), email: Type.Union([Type.String(), Type.Null()]), first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), hiring_team_roles: Type.Array(Type.Union([Type.Literal("RECRUITER"), Type.Literal("HIRING_MANAGER")])) })) }) })) }) }),
  GetAssessmentOrdersOpenParameterCursor: Type.String(),
  GetAssessmentOrdersOpenParameterPageSize: Type.Integer({ minimum: 1, maximum: 250 }),
  GetAssessmentOrdersOpenPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), package_id: Type.String(), candidate: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), email: Type.String({ format: "email" }), first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), phone: Type.Union([Type.String(), Type.Null()]) }), application: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]) }), job: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), name: Type.Union([Type.String(), Type.Null()]), job_code: Type.Union([Type.String(), Type.Null()]), description: Type.Union([Type.String(), Type.Null()]), location: Type.Union([Type.Partial(Type.Object({ street_1: Type.Union([Type.String(), Type.Null()]), street_2: Type.Union([Type.String(), Type.Null()]), city: Type.Union([Type.String(), Type.Null()]), state: Type.Union([Type.String(), Type.Null()]), zip_code: Type.Union([Type.String(), Type.Null()]), country: Type.Union([Type.String(), Type.Null()]), raw: Type.Union([Type.String(), Type.Null()]) })), Type.Null()]), hiring_team: Type.Array(Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), email: Type.Union([Type.String(), Type.Null()]), first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), hiring_team_roles: Type.Array(Type.Union([Type.Literal("RECRUITER"), Type.Literal("HIRING_MANAGER")])) })) }) })) }) }),
  PutAssessmentOrdersAssessmentOrderIdResultParameterAssessmentOrderId: Type.String(),
  PutAssessmentOrdersAssessmentOrderIdResultPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Record(Type.String(), Type.Unknown()), warnings: Type.Array(Type.Object({ message: Type.String() })) }),
  PutAssessmentOrdersAssessmentOrderIdResultRequestBody: Type.Object({ status: Type.Union([Type.Literal("COMPLETED"), Type.Literal("CANCELLED"), Type.Literal("OPEN")]), result_url: Type.String({ format: "uri" }), completed_at: Type.Optional(Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" })), score: Type.Optional(Type.Number({ minimum: -1.7976931348623157e+308 })), max_score: Type.Optional(Type.Number({ minimum: -1.7976931348623157e+308 })), attributes: Type.Optional(Type.Array(Type.Union([Type.Object({ type: Type.Literal("TEXT"), label: Type.String(), value: Type.String() }), Type.Object({ type: Type.Literal("SUB_RESULT"), id: Type.String(), label: Type.String(), score: Type.Object({ value: Type.Number({ minimum: -1.7976931348623157e+308 }), max: Type.Number({ minimum: 1 }) }), status: Type.Union([Type.Literal("COMPLETED"), Type.Literal("CANCELLED")]) })]))), attachments: Type.Optional(Type.Array(Type.Object({ name: Type.String(), content_type: Type.Optional(Type.String({ pattern: "^[\\w.-]+\\/[\\w.-]+$" })), data_url: Type.Optional(Type.String({ format: "uri" })), data: Type.Optional(Type.String()) }), { maxItems: 5 })), remote_fields: Type.Optional(Type.Partial(Type.Object({ smartrecruiters: Type.Partial(Type.Object({ scoreLabel: Type.String() })), recruitee: Type.Partial(Type.Object({ subtitle: Type.String() })) }))) }),
  GetLmsUsersParameterCursor: Type.String(),
  GetLmsUsersParameterPageSize: Type.Integer({ minimum: 1, maximum: 250 }),
  GetLmsUsersParameterUpdatedAfter: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }),
  GetLmsUsersParameterIncludeDeleted: Type.Union([Type.Literal("true"), Type.Literal("false")]),
  GetLmsUsersParameterIgnoreUnsupportedFilters: Type.Union([Type.Literal("true"), Type.Literal("false")]),
  GetLmsUsersParameterIds: Type.String(),
  GetLmsUsersParameterRemoteIds: Type.String(),
  GetLmsUsersParameterWorkEmails: Type.String(),
  GetLmsUsersPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.String(), first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), work_email: Type.Union([Type.String(), Type.Null()]), status: Type.Union([Type.Union([Type.Literal("ACTIVE"), Type.Literal("INACTIVE")]), Type.Null()]), remote_created_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), custom_fields: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), integration_fields: Type.Array(Type.Object({ id: Type.String(), key: Type.String(), type: Type.Union([Type.Literal("DEFAULT"), Type.Literal("CUSTOM")]), value: Type.Optional(Type.Null()), label: Type.Union([Type.String(), Type.Null()]) })) })) }) }),
  GetLmsCourseProgressionsParameterCursor: Type.String(),
  GetLmsCourseProgressionsParameterPageSize: Type.Integer({ minimum: 1, maximum: 250 }),
  GetLmsCourseProgressionsParameterUpdatedAfter: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }),
  GetLmsCourseProgressionsParameterIncludeDeleted: Type.Union([Type.Literal("true"), Type.Literal("false")]),
  GetLmsCourseProgressionsParameterIgnoreUnsupportedFilters: Type.Union([Type.Literal("true"), Type.Literal("false")]),
  GetLmsCourseProgressionsParameterIds: Type.String(),
  GetLmsCourseProgressionsParameterRemoteIds: Type.String(),
  GetLmsCourseProgressionsParameterUserIds: Type.String(),
  GetLmsCourseProgressionsParameterCourseIds: Type.String(),
  GetLmsCourseProgressionsPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.String(), user_id: Type.String(), course_revision_id: Type.String(), status: Type.Union([Type.Union([Type.Literal("ENROLLED"), Type.Literal("IN_PROGRESS"), Type.Literal("COMPLETED"), Type.Literal("DROPPED")]), Type.Null()]), enrolled_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), completed_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), user: Type.Object({ id: Type.String(), remote_id: Type.String(), first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), work_email: Type.Union([Type.String(), Type.Null()]) }), course_revision: Type.Object({ id: Type.String(), remote_id: Type.String(), title: Type.Union([Type.String(), Type.Null()]), course: Type.Union([Type.Object({ id: Type.String(), remote_id: Type.String() }), Type.Null()]) }) })) }) }),
  PostLmsCourseProgressionsPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ id: Type.String(), remote_id: Type.String(), user_id: Type.String(), course_revision_id: Type.String(), status: Type.Union([Type.Union([Type.Literal("ENROLLED"), Type.Literal("IN_PROGRESS"), Type.Literal("COMPLETED"), Type.Literal("DROPPED")]), Type.Null()]), enrolled_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), completed_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), user: Type.Object({ id: Type.String(), remote_id: Type.String(), first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), work_email: Type.Union([Type.String(), Type.Null()]) }), course_revision: Type.Object({ id: Type.String(), remote_id: Type.String(), title: Type.Union([Type.String(), Type.Null()]), course: Type.Union([Type.Object({ id: Type.String(), remote_id: Type.String() }), Type.Null()]) }) }), warnings: Type.Array(Type.Object({ message: Type.String() })) }),
  PostLmsCourseProgressionsRequestBody: Type.Object({ user_id: Type.String(), course_revision_id: Type.String() }),
  PostLmsCourseProgressionsCourseProgressionIdCompleteParameterCourseProgressionId: Type.String(),
  PostLmsCourseProgressionsCourseProgressionIdCompletePositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ id: Type.String(), remote_id: Type.String(), user_id: Type.String(), course_revision_id: Type.String(), status: Type.Union([Type.Union([Type.Literal("ENROLLED"), Type.Literal("IN_PROGRESS"), Type.Literal("COMPLETED"), Type.Literal("DROPPED")]), Type.Null()]), enrolled_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), completed_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), user: Type.Object({ id: Type.String(), remote_id: Type.String(), first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), work_email: Type.Union([Type.String(), Type.Null()]) }), course_revision: Type.Object({ id: Type.String(), remote_id: Type.String(), title: Type.Union([Type.String(), Type.Null()]), course: Type.Union([Type.Object({ id: Type.String(), remote_id: Type.String() }), Type.Null()]) }) }), warnings: Type.Array(Type.Object({ message: Type.String() })) }),
  PostLmsCourseProgressionsCourseProgressionIdCompleteRequestBody: Type.Partial(Type.Object({ completed_at: Type.Union([Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }), Type.Null()]), score: Type.Union([Type.Integer({ minimum: 0, maximum: 100 }), Type.Null()]) })),
  GetLmsCoursesParameterCursor: Type.String(),
  GetLmsCoursesParameterPageSize: Type.Integer({ minimum: 1, maximum: 250 }),
  GetLmsCoursesParameterUpdatedAfter: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }),
  GetLmsCoursesParameterIncludeDeleted: Type.Union([Type.Literal("true"), Type.Literal("false")]),
  GetLmsCoursesParameterIgnoreUnsupportedFilters: Type.Union([Type.Literal("true"), Type.Literal("false")]),
  GetLmsCoursesParameterIds: Type.String(),
  GetLmsCoursesParameterRemoteIds: Type.String(),
  GetLmsCoursesPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.String(), provider_id: Type.Union([Type.String(), Type.Null()]), origin_id: Type.Union([Type.String(), Type.Null()]), remote_created_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), custom_fields: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), integration_fields: Type.Array(Type.Object({ id: Type.String(), key: Type.String(), type: Type.Union([Type.Literal("DEFAULT"), Type.Literal("CUSTOM")]), value: Type.Optional(Type.Null()), label: Type.Union([Type.String(), Type.Null()]) })), provider: Type.Union([Type.Object({ id: Type.String(), remote_id: Type.String(), name: Type.Union([Type.String(), Type.Null()]) }), Type.Null()]), revisions: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.String(), course_id: Type.Union([Type.String(), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), description: Type.Union([Type.String(), Type.Null()]), remote_url: Type.Union([Type.String(), Type.Null()]), status: Type.Union([Type.Union([Type.Literal("ACTIVE"), Type.Literal("INACTIVE")]), Type.Null()]), remote_created_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), custom_fields: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), integration_fields: Type.Array(Type.Object({ id: Type.String(), key: Type.String(), type: Type.Union([Type.Literal("DEFAULT"), Type.Literal("CUSTOM")]), value: Type.Optional(Type.Null()), label: Type.Union([Type.String(), Type.Null()]) })), skill_assignments: Type.Array(Type.Object({ skill: Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), name: Type.Union([Type.String(), Type.Null()]) }) })) })) })) }) }),
  PostLmsCoursesBulkPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ task_id: Type.String() }), warnings: Type.Array(Type.Object({ message: Type.String() })) }),
  PostLmsCoursesBulkRequestBody: Type.Object({ items: Type.Array(Type.Object({ origin_id: Type.String(), course: Type.Object({ type: Type.Literal("EXTERNAL"), title: Type.String(), description: Type.Optional(Type.Union([Type.String(), Type.Null()])), course_url: Type.String(), thumbnail_url: Type.Optional(Type.Union([Type.String(), Type.Null()])), duration: Type.Optional(Type.Union([Type.Integer({ exclusiveMinimum: 0 }), Type.Null()])), languages: Type.Optional(Type.Union([Type.Array(Type.String({ pattern: "^[a-z]{2,3}(-[A-Z]{2})?$" })), Type.Null()])) }) })) }),
  GetLmsCoursesBulkTaskIdParameterTaskId: Type.String(),
  GetLmsCoursesBulkTaskIdPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Union([Type.Object({ task_id: Type.String(), created_at: Type.String(), status: Type.Literal("PENDING"), completed_at: Type.Null() }), Type.Object({ task_id: Type.String(), created_at: Type.String(), status: Type.Literal("COMPLETED"), data: Type.Array(Type.Union([Type.Object({ origin_id: Type.String(), status: Type.Literal("SUCCEEDED"), data: Type.Object({ id: Type.String() }) }), Type.Object({ origin_id: Type.String(), status: Type.Literal("FAILED"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"), Type.Literal("ATS.JOB_CLOSED"), Type.Literal("ATS.APPLICATION_ALREADY_EXISTS"), Type.Literal("LMS.COURSE_UPDATE_NOT_SUPPORTED"), Type.Literal("AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING"), Type.Literal("AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String(), Type.Null()]) }) })])), completed_at: Type.String({ format: "date-time" }) }), Type.Object({ task_id: Type.String(), created_at: Type.String(), status: Type.Literal("FAILED"), error: Type.Object({ code: Type.Union([Type.Union([Type.Literal("PLATFORM.RATE_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.CONCURRENCY_LIMIT_EXCEEDED"), Type.Literal("PLATFORM.INTEGRATION_NOT_FOUND"), Type.Literal("PLATFORM.INPUT_INVALID"), Type.Literal("PLATFORM.UNKNOWN_ERROR"), Type.Literal("PLATFORM.IP_NOT_WHITELISTED"), Type.Literal("PLATFORM.AUTHENTICATION_INVALID"), Type.Literal("PLATFORM.TASK_TIMED_OUT"), Type.Literal("INTEGRATION.PERMISSION_MISSING"), Type.Literal("INTEGRATION.AUTHENTICATION_INVALID"), Type.Literal("INTEGRATION.QA_FAILED"), Type.Literal("INTEGRATION.SETUP_SYNC_PENDING"), Type.Literal("INTEGRATION.SETUP_INCOMPLETE"), Type.Literal("INTEGRATION.INACTIVE"), Type.Literal("INTEGRATION.MODEL_NOT_AVAILABLE"), Type.Literal("INTEGRATION.MODEL_DISABLED"), Type.Literal("INTEGRATION.ACTION_NOT_AVAILABLE"), Type.Literal("INTEGRATION.ACTION_DISABLED"), Type.Literal("REMOTE.SERVICE_UNAVAILABLE"), Type.Literal("REMOTE.RATE_LIMIT_EXCEEDED"), Type.Literal("REMOTE.INPUT_INVALID"), Type.Literal("REMOTE.UNKNOWN_HTTP_ERROR"), Type.Literal("HRIS.EMPLOYEE_ALREADY_EXISTS"), Type.Literal("ATS.JOB_CLOSED"), Type.Literal("ATS.APPLICATION_ALREADY_EXISTS"), Type.Literal("LMS.COURSE_UPDATE_NOT_SUPPORTED"), Type.Literal("AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING"), Type.Literal("AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT")]), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), message: Type.String(), log_url: Type.Union([Type.String(), Type.Null()]) }), completed_at: Type.String({ format: "date-time" }) })]) }),
  PostLmsCoursesCourseIdDeactivateParameterCourseId: Type.String(),
  PostLmsCoursesCourseIdDeactivatePositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ id: Type.String(), remote_id: Type.String(), provider_id: Type.Union([Type.String(), Type.Null()]), origin_id: Type.Union([Type.String(), Type.Null()]), remote_created_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), custom_fields: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), integration_fields: Type.Array(Type.Object({ id: Type.String(), key: Type.String(), type: Type.Union([Type.Literal("DEFAULT"), Type.Literal("CUSTOM")]), value: Type.Optional(Type.Null()), label: Type.Union([Type.String(), Type.Null()]) })), provider: Type.Union([Type.Object({ id: Type.String(), remote_id: Type.String(), name: Type.Union([Type.String(), Type.Null()]) }), Type.Null()]), revisions: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.String(), course_id: Type.Union([Type.String(), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), description: Type.Union([Type.String(), Type.Null()]), remote_url: Type.Union([Type.String(), Type.Null()]), status: Type.Union([Type.Union([Type.Literal("ACTIVE"), Type.Literal("INACTIVE")]), Type.Null()]), remote_created_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), custom_fields: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), integration_fields: Type.Array(Type.Object({ id: Type.String(), key: Type.String(), type: Type.Union([Type.Literal("DEFAULT"), Type.Literal("CUSTOM")]), value: Type.Optional(Type.Null()), label: Type.Union([Type.String(), Type.Null()]) })), skill_assignments: Type.Array(Type.Object({ skill: Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), name: Type.Union([Type.String(), Type.Null()]) }) })) })) }), warnings: Type.Array(Type.Object({ message: Type.String() })) }),
  PostLmsCoursesCourseIdDeactivateRequestBody: Type.Partial(Type.Object({  })),
  GetLmsSkillsParameterCursor: Type.String(),
  GetLmsSkillsParameterPageSize: Type.Integer({ minimum: 1, maximum: 250 }),
  GetLmsSkillsParameterUpdatedAfter: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }),
  GetLmsSkillsParameterIncludeDeleted: Type.Union([Type.Literal("true"), Type.Literal("false")]),
  GetLmsSkillsParameterIgnoreUnsupportedFilters: Type.Union([Type.Literal("true"), Type.Literal("false")]),
  GetLmsSkillsParameterIds: Type.String(),
  GetLmsSkillsParameterRemoteIds: Type.String(),
  GetLmsSkillsPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ next: Type.Union([Type.String(), Type.Null()]), results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), name: Type.Union([Type.String(), Type.Null()]), remote_created_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), custom_fields: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), integration_fields: Type.Array(Type.Object({ id: Type.String(), key: Type.String(), type: Type.Union([Type.Literal("DEFAULT"), Type.Literal("CUSTOM")]), value: Type.Optional(Type.Null()), label: Type.Union([Type.String(), Type.Null()]) })) })) }) }),
  PostAiApplyCareerSitesPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ id: Type.String(), label: Type.String() }) }),
  PostAiApplyCareerSitesRequestBody: Type.Object({ label: Type.String() }),
  GetAiApplyCareerSitesParameterCursor: Type.String(),
  GetAiApplyCareerSitesParameterPageSize: Type.Integer({ minimum: 1, maximum: 250 }),
  GetAiApplyCareerSitesParameterIds: Type.String(),
  GetAiApplyCareerSitesPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ results: Type.Array(Type.Object({ id: Type.String(), label: Type.String() })), next: Type.Union([Type.String(), Type.Null()]) }) }),
  GetAiApplyPostingsParameterCursor: Type.String(),
  GetAiApplyPostingsParameterPageSize: Type.Integer({ minimum: 1, maximum: 250 }),
  GetAiApplyPostingsParameterIds: Type.String(),
  GetAiApplyPostingsParameterCareerSiteIds: Type.String(),
  GetAiApplyPostingsParameterJobCodes: Type.String(),
  GetAiApplyPostingsPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ results: Type.Array(Type.Object({ id: Type.String(), career_site: Type.Object({ id: Type.String(), label: Type.String() }), url: Type.String(), job_code: Type.Union([Type.String(), Type.Null()]), created_at: Type.String({ format: "date-time" }), updated_at: Type.String({ format: "date-time" }), archived_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), archived_reason: Type.Union([Type.Union([Type.Literal("JOB_POSTING_TAKEN_OFFLINE"), Type.Literal("MANUAL_ARCHIVE"), Type.Literal("REMOVED_FROM_JOB_FEED")]), Type.Null()]), availability: Type.Union([Type.Literal("APPLYABLE"), Type.Literal("PENDING"), Type.Literal("ARCHIVED"), Type.Literal("UNAVAILABLE")]) })), next: Type.Union([Type.String(), Type.Null()]) }) }),
  PostAiApplyPostingsPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ id: Type.String(), career_site: Type.Object({ id: Type.String(), label: Type.String() }), url: Type.String(), job_code: Type.Union([Type.String(), Type.Null()]), created_at: Type.String({ format: "date-time" }), updated_at: Type.String({ format: "date-time" }), archived_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), archived_reason: Type.Union([Type.Union([Type.Literal("JOB_POSTING_TAKEN_OFFLINE"), Type.Literal("MANUAL_ARCHIVE"), Type.Literal("REMOVED_FROM_JOB_FEED")]), Type.Null()]), availability: Type.Union([Type.Literal("APPLYABLE"), Type.Literal("PENDING"), Type.Literal("ARCHIVED"), Type.Literal("UNAVAILABLE")]) }) }),
  PostAiApplyPostingsRequestBody: Type.Object({ url: Type.String({ format: "uri", pattern: "^https?:\\/\\/" }), job_code: Type.Optional(Type.String()), location: Type.Optional(Type.Union([Type.Object({ country: Type.Union([Type.Literal("AD"), Type.Literal("AE"), Type.Literal("AF"), Type.Literal("AG"), Type.Literal("AI"), Type.Literal("AL"), Type.Literal("AM"), Type.Literal("AO"), Type.Literal("AQ"), Type.Literal("AR"), Type.Literal("AS"), Type.Literal("AT"), Type.Literal("AU"), Type.Literal("AW"), Type.Literal("AX"), Type.Literal("AZ"), Type.Literal("BA"), Type.Literal("BB"), Type.Literal("BD"), Type.Literal("BE"), Type.Literal("BF"), Type.Literal("BG"), Type.Literal("BH"), Type.Literal("BI"), Type.Literal("BJ"), Type.Literal("BL"), Type.Literal("BM"), Type.Literal("BN"), Type.Literal("BO"), Type.Literal("BQ"), Type.Literal("BR"), Type.Literal("BS"), Type.Literal("BT"), Type.Literal("BV"), Type.Literal("BW"), Type.Literal("BY"), Type.Literal("BZ"), Type.Literal("CA"), Type.Literal("CC"), Type.Literal("CD"), Type.Literal("CF"), Type.Literal("CG"), Type.Literal("CH"), Type.Literal("CI"), Type.Literal("CK"), Type.Literal("CL"), Type.Literal("CM"), Type.Literal("CN"), Type.Literal("CO"), Type.Literal("CR"), Type.Literal("CU"), Type.Literal("CV"), Type.Literal("CW"), Type.Literal("CX"), Type.Literal("CY"), Type.Literal("CZ"), Type.Literal("DE"), Type.Literal("DJ"), Type.Literal("DK"), Type.Literal("DM"), Type.Literal("DO"), Type.Literal("DZ"), Type.Literal("EC"), Type.Literal("EE"), Type.Literal("EG"), Type.Literal("EH"), Type.Literal("ER"), Type.Literal("ES"), Type.Literal("ET"), Type.Literal("FI"), Type.Literal("FJ"), Type.Literal("FK"), Type.Literal("FM"), Type.Literal("FO"), Type.Literal("FR"), Type.Literal("GA"), Type.Literal("GB"), Type.Literal("GD"), Type.Literal("GE"), Type.Literal("GF"), Type.Literal("GG"), Type.Literal("GH"), Type.Literal("GI"), Type.Literal("GL"), Type.Literal("GM"), Type.Literal("GN"), Type.Literal("GP"), Type.Literal("GQ"), Type.Literal("GR"), Type.Literal("GS"), Type.Literal("GT"), Type.Literal("GU"), Type.Literal("GW"), Type.Literal("GY"), Type.Literal("HK"), Type.Literal("HM"), Type.Literal("HN"), Type.Literal("HR"), Type.Literal("HT"), Type.Literal("HU"), Type.Literal("ID"), Type.Literal("IE"), Type.Literal("IL"), Type.Literal("IM"), Type.Literal("IN"), Type.Literal("IO"), Type.Literal("IQ"), Type.Literal("IR"), Type.Literal("IS"), Type.Literal("IT"), Type.Literal("JE"), Type.Literal("JM"), Type.Literal("JO"), Type.Literal("JP"), Type.Literal("KE"), Type.Literal("KG"), Type.Literal("KH"), Type.Literal("KI"), Type.Literal("KM"), Type.Literal("KN"), Type.Literal("KP"), Type.Literal("KR"), Type.Literal("KW"), Type.Literal("KY"), Type.Literal("KZ"), Type.Literal("LA"), Type.Literal("LB"), Type.Literal("LC"), Type.Literal("LI"), Type.Literal("LK"), Type.Literal("LR"), Type.Literal("LS"), Type.Literal("LT"), Type.Literal("LU"), Type.Literal("LV"), Type.Literal("LY"), Type.Literal("MA"), Type.Literal("MC"), Type.Literal("MD"), Type.Literal("ME"), Type.Literal("MF"), Type.Literal("MG"), Type.Literal("MH"), Type.Literal("MK"), Type.Literal("ML"), Type.Literal("MM"), Type.Literal("MN"), Type.Literal("MO"), Type.Literal("MP"), Type.Literal("MQ"), Type.Literal("MR"), Type.Literal("MS"), Type.Literal("MT"), Type.Literal("MU"), Type.Literal("MV"), Type.Literal("MW"), Type.Literal("MX"), Type.Literal("MY"), Type.Literal("MZ"), Type.Literal("NA"), Type.Literal("NC"), Type.Literal("NE"), Type.Literal("NF"), Type.Literal("NG"), Type.Literal("NI"), Type.Literal("NL"), Type.Literal("NO"), Type.Literal("NP"), Type.Literal("NR"), Type.Literal("NU"), Type.Literal("NZ"), Type.Literal("OM"), Type.Literal("PA"), Type.Literal("PE"), Type.Literal("PF"), Type.Literal("PG"), Type.Literal("PH"), Type.Literal("PK"), Type.Literal("PL"), Type.Literal("PM"), Type.Literal("PN"), Type.Literal("PR"), Type.Literal("PS"), Type.Literal("PT"), Type.Literal("PW"), Type.Literal("PY"), Type.Literal("QA"), Type.Literal("RE"), Type.Literal("RO"), Type.Literal("RS"), Type.Literal("RU"), Type.Literal("RW"), Type.Literal("SA"), Type.Literal("SB"), Type.Literal("SC"), Type.Literal("SD"), Type.Literal("SE"), Type.Literal("SG"), Type.Literal("SH"), Type.Literal("SI"), Type.Literal("SJ"), Type.Literal("SK"), Type.Literal("SL"), Type.Literal("SM"), Type.Literal("SN"), Type.Literal("SO"), Type.Literal("SR"), Type.Literal("SS"), Type.Literal("ST"), Type.Literal("SV"), Type.Literal("SX"), Type.Literal("SY"), Type.Literal("SZ"), Type.Literal("TC"), Type.Literal("TD"), Type.Literal("TF"), Type.Literal("TG"), Type.Literal("TH"), Type.Literal("TJ"), Type.Literal("TK"), Type.Literal("TL"), Type.Literal("TM"), Type.Literal("TN"), Type.Literal("TO"), Type.Literal("TR"), Type.Literal("TT"), Type.Literal("TV"), Type.Literal("TW"), Type.Literal("TZ"), Type.Literal("UA"), Type.Literal("UG"), Type.Literal("UM"), Type.Literal("US"), Type.Literal("UY"), Type.Literal("UZ"), Type.Literal("VA"), Type.Literal("VC"), Type.Literal("VE"), Type.Literal("VG"), Type.Literal("VI"), Type.Literal("VN"), Type.Literal("VU"), Type.Literal("WF"), Type.Literal("WS"), Type.Literal("YE"), Type.Literal("YT"), Type.Literal("ZA"), Type.Literal("ZM"), Type.Literal("ZW")]), postal_code: Type.Optional(Type.String()) }), Type.Null()])), career_site_id: Type.String() }),
  PostAiApplyPostingsPostingIdInquireParameterPostingId: Type.String(),
  PostAiApplyPostingsPostingIdInquirePositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ application_form: Type.Array(Type.Union([Type.Object({ block_type: Type.Literal("QUESTION"), question_id: Type.String(), label: Type.String(), description: Type.Union([Type.String(), Type.Null()]), required: Type.Boolean(), category: Type.Union([Type.Literal("EEO"), Type.Null()]), question_type: Type.Union([Type.Literal("TEXT"), Type.Literal("NUMBER"), Type.Literal("BOOLEAN"), Type.Literal("FILE"), Type.Literal("DATE"), Type.Literal("SINGLE_SELECT"), Type.Literal("MULTI_SELECT")]), unified_key: Type.Union([Type.Union([Type.Literal("EMAIL"), Type.Literal("RESIDENCE_TYPE"), Type.Literal("RESIDENCE_FULL_STRING"), Type.Literal("RESIDENCE_COUNTRY"), Type.Literal("RESIDENCE_CITY"), Type.Literal("RESIDENCE_STATE"), Type.Literal("RESIDENCE_LINE_1"), Type.Literal("RESIDENCE_LINE_2"), Type.Literal("RESIDENCE_ZIP_CODE"), Type.Literal("APPLICANT_POOL_CONSENT"), Type.Literal("TERMS_AND_CONDITIONS"), Type.Literal("FIRST_NAME"), Type.Literal("LAST_NAME"), Type.Literal("FULL_NAME"), Type.Literal("GENDER"), Type.Literal("EXPECTED_START_DATE"), Type.Literal("RESUME"), Type.Literal("BIRTH_DATE"), Type.Literal("PHONE_NUMBER_TYPE"), Type.Literal("FULL_PHONE_NUMBER"), Type.Literal("PHONE_COUNTRY_CODE"), Type.Literal("PHONE_NATIONAL_NUMBER"), Type.Literal("PHONE_EXTENSION")]), Type.Null()]), options: Type.Union([Type.Array(Type.Object({ id: Type.String(), label: Type.String(), unified_key: Type.Union([Type.Union([Type.Literal("HOME"), Type.Literal("WORK"), Type.Literal("MAILING"), Type.Literal("AD"), Type.Literal("AE"), Type.Literal("AF"), Type.Literal("AG"), Type.Literal("AI"), Type.Literal("AL"), Type.Literal("AM"), Type.Literal("AO"), Type.Literal("AQ"), Type.Literal("AR"), Type.Literal("AS"), Type.Literal("AT"), Type.Literal("AU"), Type.Literal("AW"), Type.Literal("AX"), Type.Literal("AZ"), Type.Literal("BA"), Type.Literal("BB"), Type.Literal("BD"), Type.Literal("BE"), Type.Literal("BF"), Type.Literal("BG"), Type.Literal("BH"), Type.Literal("BI"), Type.Literal("BJ"), Type.Literal("BL"), Type.Literal("BM"), Type.Literal("BN"), Type.Literal("BO"), Type.Literal("BQ"), Type.Literal("BR"), Type.Literal("BS"), Type.Literal("BT"), Type.Literal("BV"), Type.Literal("BW"), Type.Literal("BY"), Type.Literal("BZ"), Type.Literal("CA"), Type.Literal("CC"), Type.Literal("CD"), Type.Literal("CF"), Type.Literal("CG"), Type.Literal("CH"), Type.Literal("CI"), Type.Literal("CK"), Type.Literal("CL"), Type.Literal("CM"), Type.Literal("CN"), Type.Literal("CO"), Type.Literal("CR"), Type.Literal("CU"), Type.Literal("CV"), Type.Literal("CW"), Type.Literal("CX"), Type.Literal("CY"), Type.Literal("CZ"), Type.Literal("DE"), Type.Literal("DJ"), Type.Literal("DK"), Type.Literal("DM"), Type.Literal("DO"), Type.Literal("DZ"), Type.Literal("EC"), Type.Literal("EE"), Type.Literal("EG"), Type.Literal("EH"), Type.Literal("ER"), Type.Literal("ES"), Type.Literal("ET"), Type.Literal("FI"), Type.Literal("FJ"), Type.Literal("FK"), Type.Literal("FM"), Type.Literal("FO"), Type.Literal("FR"), Type.Literal("GA"), Type.Literal("GB"), Type.Literal("GD"), Type.Literal("GE"), Type.Literal("GF"), Type.Literal("GG"), Type.Literal("GH"), Type.Literal("GI"), Type.Literal("GL"), Type.Literal("GM"), Type.Literal("GN"), Type.Literal("GP"), Type.Literal("GQ"), Type.Literal("GR"), Type.Literal("GS"), Type.Literal("GT"), Type.Literal("GU"), Type.Literal("GW"), Type.Literal("GY"), Type.Literal("HK"), Type.Literal("HM"), Type.Literal("HN"), Type.Literal("HR"), Type.Literal("HT"), Type.Literal("HU"), Type.Literal("ID"), Type.Literal("IE"), Type.Literal("IL"), Type.Literal("IM"), Type.Literal("IN"), Type.Literal("IO"), Type.Literal("IQ"), Type.Literal("IR"), Type.Literal("IS"), Type.Literal("IT"), Type.Literal("JE"), Type.Literal("JM"), Type.Literal("JO"), Type.Literal("JP"), Type.Literal("KE"), Type.Literal("KG"), Type.Literal("KH"), Type.Literal("KI"), Type.Literal("KM"), Type.Literal("KN"), Type.Literal("KP"), Type.Literal("KR"), Type.Literal("KW"), Type.Literal("KY"), Type.Literal("KZ"), Type.Literal("LA"), Type.Literal("LB"), Type.Literal("LC"), Type.Literal("LI"), Type.Literal("LK"), Type.Literal("LR"), Type.Literal("LS"), Type.Literal("LT"), Type.Literal("LU"), Type.Literal("LV"), Type.Literal("LY"), Type.Literal("MA"), Type.Literal("MC"), Type.Literal("MD"), Type.Literal("ME"), Type.Literal("MF"), Type.Literal("MG"), Type.Literal("MH"), Type.Literal("MK"), Type.Literal("ML"), Type.Literal("MM"), Type.Literal("MN"), Type.Literal("MO"), Type.Literal("MP"), Type.Literal("MQ"), Type.Literal("MR"), Type.Literal("MS"), Type.Literal("MT"), Type.Literal("MU"), Type.Literal("MV"), Type.Literal("MW"), Type.Literal("MX"), Type.Literal("MY"), Type.Literal("MZ"), Type.Literal("NA"), Type.Literal("NC"), Type.Literal("NE"), Type.Literal("NF"), Type.Literal("NG"), Type.Literal("NI"), Type.Literal("NL"), Type.Literal("NO"), Type.Literal("NP"), Type.Literal("NR"), Type.Literal("NU"), Type.Literal("NZ"), Type.Literal("OM"), Type.Literal("PA"), Type.Literal("PE"), Type.Literal("PF"), Type.Literal("PG"), Type.Literal("PH"), Type.Literal("PK"), Type.Literal("PL"), Type.Literal("PM"), Type.Literal("PN"), Type.Literal("PR"), Type.Literal("PS"), Type.Literal("PT"), Type.Literal("PW"), Type.Literal("PY"), Type.Literal("QA"), Type.Literal("RE"), Type.Literal("RO"), Type.Literal("RS"), Type.Literal("RU"), Type.Literal("RW"), Type.Literal("SA"), Type.Literal("SB"), Type.Literal("SC"), Type.Literal("SD"), Type.Literal("SE"), Type.Literal("SG"), Type.Literal("SH"), Type.Literal("SI"), Type.Literal("SJ"), Type.Literal("SK"), Type.Literal("SL"), Type.Literal("SM"), Type.Literal("SN"), Type.Literal("SO"), Type.Literal("SR"), Type.Literal("SS"), Type.Literal("ST"), Type.Literal("SV"), Type.Literal("SX"), Type.Literal("SY"), Type.Literal("SZ"), Type.Literal("TC"), Type.Literal("TD"), Type.Literal("TF"), Type.Literal("TG"), Type.Literal("TH"), Type.Literal("TJ"), Type.Literal("TK"), Type.Literal("TL"), Type.Literal("TM"), Type.Literal("TN"), Type.Literal("TO"), Type.Literal("TR"), Type.Literal("TT"), Type.Literal("TV"), Type.Literal("TW"), Type.Literal("TZ"), Type.Literal("UA"), Type.Literal("UG"), Type.Literal("UM"), Type.Literal("US"), Type.Literal("UY"), Type.Literal("UZ"), Type.Literal("VA"), Type.Literal("VC"), Type.Literal("VE"), Type.Literal("VG"), Type.Literal("VI"), Type.Literal("VN"), Type.Literal("VU"), Type.Literal("WF"), Type.Literal("WS"), Type.Literal("YE"), Type.Literal("YT"), Type.Literal("ZA"), Type.Literal("ZM"), Type.Literal("ZW"), Type.Literal("MALE"), Type.Literal("FEMALE"), Type.Literal("NON_BINARY"), Type.Literal("NOT_SPECIFIED"), Type.Literal("MOBILE"), Type.Literal("LANDLINE"), Type.Literal("SOURCE_OTHER"), Type.Literal("SOURCE_OTHER_JOB_BOARD")]), Type.Null()]) })), Type.Null()]), display_when: Type.Union([Type.Object({ question_id: Type.String(), answer_equals: Type.Union([Type.String(), Type.Array(Type.String()), Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Boolean(), Type.Object({ name: Type.String(), content_type: Type.String(), data: Type.Unknown() })]) }), Type.Null()]) }), Type.Object({ block_type: Type.Literal("SECTION"), label: Type.String(), children: Type.Array(Type.Record(Type.String(), Type.Unknown())) })])), submission_token: Type.String() }) }),
  PostAiApplyPostingsPostingIdInquireRequestBody: Type.Partial(Type.Object({  })),
  PostAiApplyApplyPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ id: Type.String(), posting_id: Type.String(), status: Type.String(), created_at: Type.String({ format: "date-time" }), updated_at: Type.String({ format: "date-time" }) }) }),
  PostAiApplyApplyRequestBody: Type.Object({ submission_token: Type.String(), candidate_email: Type.String({ format: "email" }), query_params: Type.Optional(Type.Record(Type.String(), Type.String())), screening_question_answers: Type.Array(Type.Object({ question_id: Type.String(), answer: Type.Union([Type.String(), Type.Array(Type.String()), Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Boolean(), Type.Object({ name: Type.String(), content_type: Type.String(), data: Type.String() })]) })), additional_clicks: Type.Optional(Type.Integer({ minimum: 0, maximum: 30 })), additional_clicks_scatter_duration: Type.Optional(Type.Integer({ minimum: 1 })) }),
  GetAiApplyApplicationsParameterCursor: Type.String(),
  GetAiApplyApplicationsParameterPageSize: Type.Integer({ minimum: 1, maximum: 250 }),
  GetAiApplyApplicationsParameterIds: Type.String(),
  GetAiApplyApplicationsParameterJobPostingIds: Type.String(),
  GetAiApplyApplicationsPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ results: Type.Array(Type.Object({ id: Type.String(), job_posting_id: Type.String(), status: Type.Union([Type.Literal("SUBMITTED"), Type.Literal("DUPLICATE"), Type.Literal("PENDING"), Type.Literal("FAILED")]), created_at: Type.String({ format: "date-time" }), updated_at: Type.String({ format: "date-time" }) })), next: Type.Union([Type.String(), Type.Null()]) }) }),
  GetAiApplyUnifiedApiJobsParameterCursor: Type.String(),
  GetAiApplyUnifiedApiJobsParameterPageSize: Type.Integer({ minimum: 1, maximum: 5 }),
  GetAiApplyUnifiedApiJobsParameterIds: Type.String(),
  GetAiApplyUnifiedApiJobsParameterRemoteIds: Type.String(),
  GetAiApplyUnifiedApiJobsParameterJobCodes: Type.String(),
  GetAiApplyUnifiedApiJobsParameterCareerSiteIds: Type.String(),
  GetAiApplyUnifiedApiJobsPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ results: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.String(), name: Type.Union([Type.String(), Type.Null()]), job_code: Type.Union([Type.String(), Type.Null()]), description: Type.Union([Type.String(), Type.Null()]), confidential: Type.Union([Type.Boolean(), Type.Null()]), weekly_hours: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), category: Type.Union([Type.String(), Type.Null()]), department: Type.Union([Type.String(), Type.Null()]), post_url: Type.Union([Type.String(), Type.Null()]), experience_level: Type.Union([Type.String(), Type.Null()]), salary_amount: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), salary_amount_from: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), salary_amount_to: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), salary_currency: Type.Union([Type.String(), Type.Null()]), custom_fields: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), integration_fields: Type.Array(Type.Record(Type.String(), Type.Unknown())), opened_at: Type.Union([Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$" }), Type.Null()]), closed_at: Type.Union([Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$" }), Type.Null()]), remote_created_at: Type.Union([Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$" }), Type.Null()]), remote_updated_at: Type.Union([Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$" }), Type.Null()]), contact_id: Type.Union([Type.String(), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), changed_at: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$" }), Type.Null()]), remote_url: Type.Union([Type.String(), Type.Null()]), stages: Type.Array(Type.Record(Type.String(), Type.Unknown())), screening_questions: Type.Union([Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), description: Type.Union([Type.String(), Type.Null()]), format: Type.Optional(Type.Union([Type.Object({ display_type: Type.Optional(Type.Union([Type.Union([Type.Literal("SINGLE_LINE"), Type.Literal("MULTI_LINE"), Type.Literal("EMAIL"), Type.Literal("URL")]), Type.Null()])), max_length: Type.Optional(Type.Union([Type.Integer(), Type.Null()])), type: Type.Literal("TEXT") }), Type.Object({ display_type: Type.Optional(Type.Union([Type.Union([Type.Literal("SLIDER"), Type.Literal("FIELD")]), Type.Null()])), max: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])), min: Type.Optional(Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()])), type: Type.Literal("NUMBER") }), Type.Object({ accepted_mime_types: Type.Optional(Type.Union([Type.Array(Type.String()), Type.Null()])), max_file_size_bytes: Type.Optional(Type.Union([Type.Integer(), Type.Null()])), type: Type.Literal("FILE") }), Type.Object({ display_type: Type.Optional(Type.Union([Type.Union([Type.Literal("DROPDOWN"), Type.Literal("RADIO")]), Type.Null()])), options: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Optional(Type.Union([Type.String(), Type.Null()])), name: Type.String() })), type: Type.Literal("SINGLE_SELECT") }), Type.Object({ type: Type.Literal("BOOLEAN") }), Type.Object({ type: Type.Literal("DATE") }), Type.Object({ options: Type.Array(Type.Object({ id: Type.String(), remote_id: Type.Optional(Type.Union([Type.String(), Type.Null()])), name: Type.String() })), type: Type.Literal("MULTI_SELECT") }), Type.Object({ type: Type.Literal("INFORMATION") }), Type.Object({ raw_question: Type.Optional(Type.Unknown()), type: Type.Literal("UNKNOWN") }), Type.Null()])), category: Type.Union([Type.Literal("EEO"), Type.Null()]), index: Type.Optional(Type.Union([Type.Integer(), Type.Null()])), required: Type.Union([Type.Boolean(), Type.Null()]), precondition_question_id: Type.Optional(Type.Union([Type.String(), Type.Null()])), precondition_options: Type.Optional(Type.Union([Type.Array(Type.String()), Type.Array(Type.Boolean()), Type.Null()])) })), Type.Null()]), job_postings: Type.Array(Type.Record(Type.String(), Type.Unknown())), hiring_team: Type.Array(Type.Record(Type.String(), Type.Unknown())), employment_type: Type.Optional(Type.Union([Type.Union([Type.Literal("FULL_TIME"), Type.Literal("PART_TIME"), Type.Literal("CONTRACT"), Type.Literal("SEASONAL"), Type.Literal("INTERNSHIP")]), Type.String(), Type.Null()])), status: Type.Optional(Type.Union([Type.Union([Type.Literal("OPEN"), Type.Literal("CLOSED"), Type.Literal("DRAFT"), Type.Literal("ARCHIVED")]), Type.String(), Type.Null()])), visibility: Type.Union([Type.String(), Type.Null()]), remote_work_status: Type.Union([Type.String(), Type.Null()]), salary_period: Type.Union([Type.String(), Type.Null()]), location: Type.Optional(Type.Union([Type.Partial(Type.Object({ city: Type.Union([Type.String(), Type.Null()]), country: Type.Union([Type.String(), Type.Null()]), raw: Type.Union([Type.String(), Type.Null()]), state: Type.Union([Type.String(), Type.Null()]), street_1: Type.Union([Type.String(), Type.Null()]), street_2: Type.Union([Type.String(), Type.Null()]), zip_code: Type.Union([Type.String(), Type.Null()]) })), Type.Null()])) })), next: Type.Union([Type.String(), Type.Null()]) }) }),
  PostAiApplyUnifiedApiJobsJobIdApplicationsParameterJobId: Type.String(),
  PostAiApplyUnifiedApiJobsJobIdApplicationsPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ id: Type.String(), remote_id: Type.Union([Type.String(), Type.Null()]), outcome: Type.Union([Type.Union([Type.Literal("PENDING"), Type.Literal("HIRED"), Type.Literal("DECLINED")]), Type.Null()]), rejection_reason_name: Type.Union([Type.String(), Type.Null()]), rejected_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), current_stage_id: Type.Union([Type.String(), Type.Null()]), job_id: Type.Union([Type.String(), Type.Null()]), candidate_id: Type.Union([Type.String(), Type.Null()]), screening_question_answers: Type.Optional(Type.Union([Type.Array(Type.Union([Type.Object({ answer: Type.Object({ content: Type.Union([Type.String(), Type.Null()]) }), question: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), title: Type.String(), type: Type.Literal("TEXT") }) }), Type.Object({ answer: Type.Object({ choice: Type.Union([Type.String(), Type.Null()]) }), question: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), title: Type.String(), type: Type.Literal("SINGLE_SELECT") }) }), Type.Object({ answer: Type.Partial(Type.Object({ choices: Type.Array(Type.String()) })), question: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), title: Type.String(), type: Type.Literal("MULTI_SELECT") }) }), Type.Object({ answer: Type.Object({ checked: Type.Union([Type.Boolean(), Type.Null()]) }), question: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), title: Type.String(), type: Type.Literal("BOOLEAN") }) }), Type.Object({ answer: Type.Object({ number: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]) }), question: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), title: Type.String(), type: Type.Literal("NUMBER") }) }), Type.Object({ answer: Type.Object({ date: Type.Union([Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$" }), Type.Null()]) }), question: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), title: Type.String(), type: Type.Literal("DATE") }) }), Type.Object({ answer: Type.Partial(Type.Object({ raw: Type.Null() })), question: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), title: Type.String(), type: Type.Literal("UNKNOWN") }) })])), Type.Null()])), custom_fields: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), integration_fields: Type.Array(Type.Object({ id: Type.String(), key: Type.String(), type: Type.Union([Type.Literal("DEFAULT"), Type.Literal("CUSTOM")]), value: Type.Optional(Type.Null()), label: Type.Union([Type.String(), Type.Null()]) })), remote_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_created_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_updated_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), current_stage: Type.Union([Type.Object({ id: Type.String(), name: Type.Union([Type.String(), Type.Null()]), remote_id: Type.Union([Type.String(), Type.Null()]), index: Type.Union([Type.Integer(), Type.Null()]) }), Type.Null()]), job: Type.Union([Type.Object({ id: Type.String(), name: Type.Union([Type.String(), Type.Null()]), remote_id: Type.String() }), Type.Null()]), candidate: Type.Union([Type.Object({ id: Type.String(), remote_id: Type.String(), first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), company: Type.Union([Type.String(), Type.Null()]), title: Type.Union([Type.String(), Type.Null()]), confidential: Type.Union([Type.Boolean(), Type.Null()]), source: Type.Union([Type.String(), Type.Null()]), phone_numbers: Type.Optional(Type.Union([Type.Array(Type.Object({ phone_number: Type.String(), type: Type.Optional(Type.Union([Type.String(), Type.Null()])) })), Type.Null()])), email_addresses: Type.Optional(Type.Union([Type.Array(Type.Object({ email_address: Type.Optional(Type.Union([Type.String({ pattern: "^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$" }), Type.Null()])), type: Type.Union([Type.String(), Type.Null()]) })), Type.Null()])), social_media: Type.Optional(Type.Union([Type.Array(Type.Partial(Type.Object({ link: Type.Union([Type.String(), Type.Null()]), type: Type.Union([Type.String(), Type.Null()]), username: Type.Union([Type.String(), Type.Null()]) }))), Type.Null()])), location: Type.Optional(Type.Union([Type.Partial(Type.Object({ city: Type.Union([Type.String(), Type.Null()]), country: Type.Union([Type.String(), Type.Null()]), raw: Type.Union([Type.String(), Type.Null()]), state: Type.Union([Type.String(), Type.Null()]), street_1: Type.Union([Type.String(), Type.Null()]), street_2: Type.Union([Type.String(), Type.Null()]), zip_code: Type.Union([Type.String(), Type.Null()]) })), Type.Null()])), custom_fields: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), integration_fields: Type.Array(Type.Object({ id: Type.String(), key: Type.String(), type: Type.Union([Type.Literal("DEFAULT"), Type.Literal("CUSTOM")]), value: Type.Optional(Type.Null()), label: Type.Union([Type.String(), Type.Null()]) })), remote_url: Type.Union([Type.String({ format: "uri" }), Type.Null()]), remote_created_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_updated_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), remote_data: Type.Union([Type.Record(Type.String(), Type.Unknown()), Type.Null()]), changed_at: Type.String({ format: "date-time" }), remote_deleted_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), tags: Type.Array(Type.Object({ id: Type.String(), name: Type.Union([Type.String(), Type.Null()]), remote_id: Type.Union([Type.String(), Type.Null()]) })) }), Type.Null()]) }) }),
  PostAiApplyUnifiedApiJobsJobIdApplicationsRequestBody: Type.Object({ stage_id: Type.Optional(Type.String()), candidate: Type.Object({ first_name: Type.String(), last_name: Type.String(), email_address: Type.String({ format: "email" }), additional_email_addresses: Type.Optional(Type.Array(Type.Object({ type: Type.Union([Type.Literal("PERSONAL"), Type.Literal("WORK"), Type.Literal("OTHER")]), email_address: Type.String({ format: "email" }) }))), company: Type.Optional(Type.String()), title: Type.Optional(Type.String()), phone_number: Type.Optional(Type.String()), additional_phone_numbers: Type.Optional(Type.Array(Type.Object({ type: Type.Union([Type.Literal("PERSONAL"), Type.Literal("WORK"), Type.Literal("OTHER")]), phone_number: Type.String() }))), location: Type.Optional(Type.Object({ city: Type.Optional(Type.String()), country: Type.String({ pattern: "^[A-Z]{2}$" }), state: Type.Optional(Type.String()), street_1: Type.Optional(Type.String()), zip_code: Type.Optional(Type.String()) })), gender: Type.Optional(Type.Union([Type.Literal("MALE"), Type.Literal("FEMALE"), Type.Literal("OTHER")])), availability_date: Type.Optional(Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" })), salary_expectations: Type.Optional(Type.Object({ period: Type.Union([Type.Literal("MONTH"), Type.Literal("YEAR")]), amount: Type.Number({ minimum: -1.7976931348623157e+308 }) })), social_links: Type.Optional(Type.Array(Type.Object({ url: Type.String({ format: "uri" }) }))) }), attachments: Type.Optional(Type.Array(Type.Object({ name: Type.String(), content_type: Type.Optional(Type.String({ pattern: "^[\\w.-]+\\/[\\w.-]+$" })), data_url: Type.Optional(Type.String({ format: "uri" })), data: Type.Optional(Type.String()), type: Type.Union([Type.Literal("CV"), Type.Literal("COVER_LETTER"), Type.Literal("OTHER")]) }))), source: Type.Optional(Type.Partial(Type.Object({ name: Type.String(), unified_key: Type.String(), id: Type.String() }))), sourced_by: Type.Optional(Type.Object({ user_id: Type.String() })), gdpr_consent: Type.Optional(Type.Partial(Type.Object({ expires_at: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }), given: Type.Boolean() }))), remote_fields: Type.Optional(Type.Intersect([Type.Partial(Type.Object({ successfactors: Type.Partial(Type.Object({ Candidate: Type.Record(Type.String(), Type.Unknown()), JobApplication: Type.Record(Type.String(), Type.Unknown()), copyJobApplicationAttachments: Type.Boolean(), update_existing_candidate: Type.Union([Type.Boolean(), Type.Null()]) })), personio: Type.Partial(Type.Object({ application: Type.Record(Type.String(), Type.Unknown()) })), talentsoft: Type.Partial(Type.Object({ applicant: Type.Record(Type.String(), Type.Unknown()), application: Type.Record(Type.String(), Type.Unknown()) })), teamtailor: Type.Partial(Type.Object({ candidate: Type.Record(Type.String(), Type.Unknown()), application: Type.Partial(Type.Object({ attributes: Type.Record(Type.String(), Type.Unknown()) })) })), greenhouse: Type.Partial(Type.Object({ candidate: Type.Record(Type.String(), Type.Unknown()), application: Type.Record(Type.String(), Type.Unknown()) })), lever: Type.Partial(Type.Object({ candidate: Type.Record(Type.String(), Type.Unknown()) })), workable: Type.Partial(Type.Object({ candidate: Type.Record(Type.String(), Type.Unknown()) })), workday: Type.Partial(Type.Object({ Candidate_Data: Type.Partial(Type.Object({ Name_Detail_Data: Type.Partial(Type.Object({ Middle_Name: Type.String(), Social_Suffix_Reference: Type.Object({ Predefined_Name_Component_ID: Type.String() }) })), Language_Reference: Type.Object({ WID: Type.String() }), Job_Application_Data: Type.Partial(Type.Object({ Job_Applied_To_Data: Type.Partial(Type.Object({ Global_Personal_Information_Data: Type.Partial(Type.Object({ Date_of_Birth: Type.String() })) })), Resume_Data: Type.Partial(Type.Object({ Education_Data: Type.Array(Type.Partial(Type.Object({ School_Name: Type.String(), First_Year_Attended: Type.Number({ minimum: -1.7976931348623157e+308 }), Last_Year_Attended: Type.Number({ minimum: -1.7976931348623157e+308 }), Field_of_Study_Reference: Type.Object({ WID: Type.String() }), Degree_Reference: Type.Object({ WID: Type.String() }), Grade_Average: Type.String() }))), Skill_Data: Type.Array(Type.Partial(Type.Object({ Skill_Name: Type.String() }))), Language_Data: Type.Array(Type.Partial(Type.Object({ Language_Reference: Type.Partial(Type.Object({ WID: Type.String() })), Language: Type.Object({ Native: Type.Optional(Type.Boolean()), Language_Ability: Type.Array(Type.Partial(Type.Object({ Language_Ability_Data: Type.Partial(Type.Object({ Language_Proficiency_Reference: Type.Object({ WID: Type.String() }), Language_Ability_Type_Reference: Type.Object({ WID: Type.String() }) })) }))) }) }))), Experience_Data: Type.Array(Type.Object({ Company_Name: Type.String(), Title: Type.String(), Location: Type.Optional(Type.String()), Start_Date: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }), End_Date: Type.Optional(Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" })), Currently_Work_Here: Type.Optional(Type.Boolean()), Description: Type.Optional(Type.String()) })) })) })), Contact_Data: Type.Partial(Type.Object({ Location_Data: Type.Partial(Type.Object({ Address_Line_1: Type.String(), Address_Line_2: Type.String(), Region_Subdivision_1: Type.String(), Country_Region_Reference: Type.Object({ Country_Region_ID: Type.String() }), Country_City_Reference: Type.Object({ WID: Type.String() }) })) })), Worker_Reference: Type.Partial(Type.Object({ WID: Type.String(), Employee_ID: Type.String() })) })), Override_Source_Reference_WID: Type.String() })), zohorecruit: Type.Partial(Type.Object({ candidate: Type.Record(Type.String(), Type.Unknown()) })), bullhorn: Type.Partial(Type.Object({ candidate: Type.Record(Type.String(), Type.Unknown()), job_submission: Type.Record(Type.String(), Type.Unknown()) })), smartrecruiters: Type.Partial(Type.Object({ candidate_with_questions: Type.Record(Type.String(), Type.Unknown()), candidate_without_questions: Type.Record(Type.String(), Type.Unknown()), candidate: Type.Record(Type.String(), Type.Unknown()), consent_decisions: Type.Partial(Type.Object({ SINGLE: Type.Boolean(), SMART_RECRUIT: Type.Boolean(), SMART_CRM: Type.Boolean(), SMART_MESSAGE_SMS: Type.Boolean(), SMART_MESSAGE_WHATSAPP: Type.Boolean() })) })), talentadore: Type.Partial(Type.Object({ applications: Type.Record(Type.String(), Type.Unknown()) })), guidecom: Type.Partial(Type.Object({ candidate: Type.Record(Type.String(), Type.Unknown()) })), dvinci: Type.Partial(Type.Object({ application: Type.Record(Type.String(), Type.Unknown()), candidate: Type.Record(Type.String(), Type.Unknown()) })), hrworks: Type.Partial(Type.Object({ jobApplication: Type.Record(Type.String(), Type.Unknown()) })), jobylon: Type.Partial(Type.Object({ application: Type.Partial(Type.Object({ message: Type.String() })) })), avature: Type.Partial(Type.Object({ workflow: Type.Partial(Type.Object({ step: Type.Object({ id: Type.Integer() }) })) })), recruitee: Type.Partial(Type.Object({ candidate: Type.Partial(Type.Object({ cover_letter_text: Type.String() })) })), rexx: Type.Partial(Type.Object({ candidate: Type.Record(Type.String(), Type.Unknown()) })), umantis: Type.Partial(Type.Object({ person: Type.Record(Type.String(), Type.Unknown()) })), piloga: Type.Partial(Type.Object({ candidate: Type.Partial(Type.Object({ street: Type.String() })) })), pinpoint: Type.Partial(Type.Object({ candidate: Type.Record(Type.String(), Type.Unknown()) })), covetorest: Type.Partial(Type.Object({ candidate: Type.Partial(Type.Object({ mandant: Type.Number({ minimum: -1.7976931348623157e+308 }) })) })) })), Type.Partial(Type.Object({ greenhouse: Type.Partial(Type.Object({ post_headers: Type.Partial(Type.Object({ "On-Behalf-Of": Type.Union([Type.String(), Type.Null()]) })) })), workable: Type.Partial(Type.Object({ on_behalf_of_user_remote_id: Type.String() })) }))])), screening_question_answers: Type.Optional(Type.Array(Type.Object({ question_id: Type.String(), answer: Type.Union([Type.String(), Type.Boolean(), Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Array(Type.String()), Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }), Type.Object({ name: Type.String(), content_type: Type.Optional(Type.String({ pattern: "^[\\w.-]+\\/[\\w.-]+$" })), data_url: Type.Optional(Type.String({ format: "uri" })), data: Type.Optional(Type.String()) })]) }))), query_params: Type.Optional(Type.Record(Type.String(), Type.String())) }),
  GetAiApplyJobFeedsParameterCursor: Type.String(),
  GetAiApplyJobFeedsParameterPageSize: Type.Integer({ minimum: 1, maximum: 250 }),
  GetAiApplyJobFeedsParameterIds: Type.String(),
  GetAiApplyJobFeedsPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ results: Type.Array(Type.Object({ id: Type.String(), label: Type.String() })), next: Type.Union([Type.String(), Type.Null()]) }) }),
  PostAiApplyJobFeedsPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ id: Type.String(), label: Type.String() }) }),
  PostAiApplyJobFeedsRequestBody: Type.Object({ label: Type.String({ minLength: 1 }) }),
  PostConnectCreateLinkPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ link: Type.String({ format: "uri" }) }) }),
  PostConnectCreateLinkRequestBody: Type.Object({ end_user_email: Type.String({ format: "email" }), end_user_organization_name: Type.String({ minLength: 1 }), end_user_origin_id: Type.Optional(Type.Union([Type.String({ minLength: 1 }), Type.Null()])), remote_environment: Type.Optional(Type.Union([Type.String(), Type.Null()])), integration_category: Type.Optional(Type.Union([Type.Literal("HRIS"), Type.Literal("ATS"), Type.Literal("ASSESSMENT"), Type.Literal("LMS")])), integration_tool: Type.Optional(Type.Union([Type.Union([Type.Literal("workday"), Type.Literal("successfactors"), Type.Literal("smartrecruiters"), Type.Literal("factorial"), Type.Literal("oraclerecruiting"), Type.Literal("lever"), Type.Literal("icims"), Type.Literal("cornerstonetalentlink"), Type.Literal("recruitee"), Type.Literal("recruiterflow"), Type.Literal("greenhouse"), Type.Literal("greenhousejobboard"), Type.Literal("teamtailor"), Type.Literal("teamtailorjobboards"), Type.Literal("ashby"), Type.Literal("talentsoft"), Type.Literal("talentsoftcustomer"), Type.Literal("concludis"), Type.Literal("talention"), Type.Literal("piloga"), Type.Literal("onlyfy"), Type.Literal("personio"), Type.Literal("ukgpro"), Type.Literal("ukgready"), Type.Literal("adpworkforcenow"), Type.Literal("taleo"), Type.Literal("rexx"), Type.Literal("afas"), Type.Literal("bamboohr"), Type.Literal("bullhorn"), Type.Literal("bullhornlogin"), Type.Literal("workable"), Type.Literal("jobvite"), Type.Literal("fountain"), Type.Literal("softgarden"), Type.Literal("softgardenpartner"), Type.Literal("pinpoint"), Type.Literal("welcometothejungle"), Type.Literal("dvinci"), Type.Literal("dvinciadmin"), Type.Literal("join"), Type.Literal("sagehr"), Type.Literal("traffit"), Type.Literal("erecruiter"), Type.Literal("abacusumantis"), Type.Literal("umantis"), Type.Literal("jobylon"), Type.Literal("taleez"), Type.Literal("hrworks"), Type.Literal("otys"), Type.Literal("zohorecruit"), Type.Literal("ceipal"), Type.Literal("eploy"), Type.Literal("jobdiva"), Type.Literal("careerplug"), Type.Literal("perview"), Type.Literal("eightfold"), Type.Literal("paylocity"), Type.Literal("paycor"), Type.Literal("avature"), Type.Literal("apploi"), Type.Literal("phenom"), Type.Literal("paradox"), Type.Literal("heyrecruit"), Type.Literal("recruhr"), Type.Literal("recruitcrm"), Type.Literal("jazzhr"), Type.Literal("bite"), Type.Literal("brassring"), Type.Literal("homerun"), Type.Literal("mysolution"), Type.Literal("carerix"), Type.Literal("hroffice"), Type.Literal("talentclue"), Type.Literal("inrecruiting"), Type.Literal("ubeeo"), Type.Literal("connexys"), Type.Literal("hr4you"), Type.Literal("cornerstoneondemand"), Type.Literal("zvooverecruit"), Type.Literal("odoo"), Type.Literal("comeet"), Type.Literal("compleet"), Type.Literal("compleetpitcher"), Type.Literal("gem"), Type.Literal("laura"), Type.Literal("covetorest"), Type.Literal("coveto"), Type.Literal("mercury"), Type.Literal("crelate"), Type.Literal("manatal"), Type.Literal("avionte"), Type.Literal("mhmhr"), Type.Literal("asymbl"), Type.Literal("breezyhr"), Type.Literal("flatchr"), Type.Literal("dayforce"), Type.Literal("digitalrecruiters"), Type.Literal("applicantstack"), Type.Literal("reachmee"), Type.Literal("talentadore"), Type.Literal("sandbox"), Type.Literal("guidecom"), Type.Literal("spott"), Type.Literal("loxo"), Type.Literal("kula"), Type.Literal("workdaycustomreport"), Type.Literal("workdaycustomreportsftp"), Type.Literal("ukgprowfm"), Type.Literal("payfitcustomer"), Type.Literal("payfitpartner"), Type.Literal("payfit"), Type.Literal("employmenthero"), Type.Literal("fourth"), Type.Literal("kenjo"), Type.Literal("heavenhr"), Type.Literal("hibob"), Type.Literal("cezannehr"), Type.Literal("entraid"), Type.Literal("azuread"), Type.Literal("googleworkspace"), Type.Literal("nmbrs"), Type.Literal("deel"), Type.Literal("remotecom"), Type.Literal("iriscascade"), Type.Literal("okta"), Type.Literal("sagepeople"), Type.Literal("humaans"), Type.Literal("eurecia"), Type.Literal("oraclehcm"), Type.Literal("officient"), Type.Literal("sesamehr"), Type.Literal("charliehr"), Type.Literal("abacus"), Type.Literal("zohopeople"), Type.Literal("gusto"), Type.Literal("breathehr"), Type.Literal("catalystone"), Type.Literal("mirus"), Type.Literal("alexishr"), Type.Literal("simployer"), Type.Literal("peple"), Type.Literal("youserve"), Type.Literal("hansalog"), Type.Literal("lattice"), Type.Literal("latticetalent"), Type.Literal("hoorayhr"), Type.Literal("trinet"), Type.Literal("trinetpeo"), Type.Literal("namely"), Type.Literal("paycom"), Type.Literal("insperity"), Type.Literal("paychex"), Type.Literal("rippling"), Type.Literal("sapling"), Type.Literal("peoplehr"), Type.Literal("lucca"), Type.Literal("zelt"), Type.Literal("planday"), Type.Literal("boondmanager"), Type.Literal("haileyhr"), Type.Literal("silae"), Type.Literal("oysterhr"), Type.Literal("kiwihr"), Type.Literal("square"), Type.Literal("perbilityhelix"), Type.Literal("leapsome"), Type.Literal("loket"), Type.Literal("workforcecom"), Type.Literal("peoplefirst"), Type.Literal("sdworx"), Type.Literal("itrent"), Type.Literal("absenceio"), Type.Literal("a3innuvanomina"), Type.Literal("scim"), Type.Literal("datevlauds"), Type.Literal("datevhr"), Type.Literal("datev"), Type.Literal("datevlug"), Type.Literal("sympa"), Type.Literal("youforce"), Type.Literal("nibelis"), Type.Literal("peoplexd"), Type.Literal("sftp"), Type.Literal("sftpfetch"), Type.Literal("360learning"), Type.Literal("talentlms"), Type.Literal("udemy"), Type.Literal("linkedinlearning"), Type.Literal("moodle")]), Type.Null()])), language: Type.Optional(Type.Union([Type.Union([Type.Literal("en"), Type.Literal("de"), Type.Literal("fr"), Type.Literal("it"), Type.Literal("es")]), Type.Null()])), scope_config_id: Type.Optional(Type.Union([Type.String(), Type.Null()])), enable_filtering: Type.Optional(Type.Boolean()), enable_field_mapping: Type.Optional(Type.Boolean()), link_type: Type.Optional(Type.Union([Type.Literal("EMBEDDED"), Type.Literal("MAGIC_LINK")])) }),
  GetConnectIntegrationByTokenTokenParameterToken: Type.String(),
  GetConnectIntegrationByTokenTokenPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ tool: Type.String(), id: Type.String(), end_user_origin_id: Type.Union([Type.String(), Type.Null()]), end_user_organization_name: Type.String(), end_user_email: Type.Union([Type.String({ pattern: "^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$" }), Type.Null()]), setup_status: Type.Union([Type.Literal("INCOMPLETE"), Type.Literal("FINAL_SYNC_PENDING"), Type.Literal("COMPLETED")]) }) }),
  PostConnectActivateIntegrationPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ tool: Type.String(), id: Type.String(), end_user_origin_id: Type.Union([Type.String(), Type.Null()]), end_user_organization_name: Type.String(), end_user_email: Type.Union([Type.String({ pattern: "^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$" }), Type.Null()]), setup_status: Type.Union([Type.Literal("INCOMPLETE"), Type.Literal("FINAL_SYNC_PENDING"), Type.Literal("COMPLETED")]) }) }),
  PostConnectActivateIntegrationRequestBody: Type.Object({ token: Type.String() }),
  GetCustomDatevSystemInformationPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ consultant_number: Type.Number({ minimum: 1000, maximum: 9999999 }), client_number: Type.Number({ minimum: 1, maximum: 99999 }), target_system: Type.Union([Type.Literal("LODAS"), Type.Literal("LuG")]) }) }),
  PostCustomDatevPassthroughPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Record(Type.String(), Type.Unknown()), warnings: Type.Array(Type.Object({ message: Type.String() })) }),
  PostCustomDatevPassthroughRequestBody: Type.Object({ file_content: Type.String({ minLength: 1 }), accounting_month: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }), target_system: Type.Union([Type.Literal("LODAS"), Type.Literal("LuG")]), file_type: Type.Union([Type.Literal("STAMMDATEN"), Type.Literal("BEWEGUNGSDATEN")]), file_name: Type.String() }),
  GetCustomDatevCheckEauPermissionPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ ready: Type.Boolean(), error: Type.Optional(Type.String()) }), warnings: Type.Array(Type.Object({ message: Type.String() })) }),
  GetCustomDatevEauRequestsEauIdParameterEauId: Type.String(),
  GetCustomDatevEauRequestsEauIdPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ raw: Type.Object({ source: Type.String(), start_work_incapacity: Type.String(), collaboration_identifier: Type.Optional(Type.String()), feedbacks_from_health_insurance: Type.Array(Type.Object({ guid: Type.String(), contact_person: Type.Union([Type.Object({ gender_contact_person: Type.Optional(Type.Union([Type.Union([Type.Literal("M"), Type.Literal("F"), Type.Literal("X"), Type.Literal("D")]), Type.Null()])), name: Type.String(), telephone: Type.String(), fax: Type.Union([Type.String(), Type.Null()]), email: Type.Union([Type.String(), Type.Null()]), name1_health_insurance: Type.String(), name2_health_insurance: Type.Optional(Type.Union([Type.String(), Type.Null()])), name3_health_insurance: Type.Optional(Type.Union([Type.String(), Type.Null()])), postal_code: Type.String(), city: Type.String(), street: Type.Union([Type.String(), Type.Null()]), house_number: Type.Union([Type.String(), Type.Null()]) }), Type.Null()]), incapacity_for_work: Type.Object({ start_work_incapacity_employer: Type.String(), start_work_incapacity_au: Type.Union([Type.String(), Type.Null()]), end_work_incapacity_au: Type.Union([Type.String(), Type.Null()]), actual_end_work_incapacity_au: Type.Optional(Type.Union([Type.String(), Type.Null()])), date_of_diagnosis: Type.Union([Type.String(), Type.Null()]), flag_current_work_incapacity: Type.Union([Type.Number({ minimum: -1.7976931348623157e+308 }), Type.Null()]), accident_at_work: Type.Boolean(), assignment_accident_insurance_doctor: Type.Boolean(), other_accident: Type.Boolean(), start_hospitalisation: Type.Optional(Type.Union([Type.String(), Type.Null()])), end_hospitalisation: Type.Optional(Type.Union([Type.String(), Type.Null()])), initial_certificate: Type.Boolean(), automatic_feedback_until: Type.Union([Type.String(), Type.Null()]) }), error_block_list: Type.Union([Type.Array(Type.Object({ origin: Type.Union([Type.String(), Type.Null()]), error_number: Type.Union([Type.String(), Type.Null()]), error_text: Type.Union([Type.String(), Type.Null()]), error_value: Type.Union([Type.String(), Type.Null()]) })), Type.Null()]) })) }) }), warnings: Type.Array(Type.Object({ message: Type.String() })) }),
  GetCustomDatevCheckDocumentPermissionPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Union([Type.Object({ ready: Type.Boolean(), documents_granted: Type.Array(Type.String()) }), Type.Object({ ready: Type.Boolean(), error: Type.String() })]), warnings: Type.Array(Type.Object({ message: Type.String() })) }),
  GetCustomDatevAvailableDocumentsParameterPeriod: Type.String(),
  GetCustomDatevAvailableDocumentsPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ results: Type.Array(Type.Object({ document_type: Type.String(), available_for_employees: Type.Array(Type.Object({ id: Type.Union([Type.String(), Type.Null()]), remote_id: Type.String() })), is_company_document: Type.Boolean() })) }), warnings: Type.Array(Type.Object({ message: Type.String() })) }),
  PostCustomDatevDownloadDocumentPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ data_url: Type.String({ format: "uri" }), file_name: Type.String(), content_type: Type.String() }), warnings: Type.Array(Type.Object({ message: Type.String() })) }),
  PostCustomDatevDownloadDocumentRequestBody: Type.Object({ accounting_month: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }), document_type: Type.Union([Type.Literal("AANB"), Type.Literal("ABEG"), Type.Literal("BUBE"), Type.Literal("DAWE"), Type.Literal("KBNW"), Type.Literal("KOST"), Type.Literal("KOTR"), Type.Literal("LKTO"), Type.Literal("LOBN"), Type.Literal("LJOE"), Type.Literal("LOJE"), Type.Literal("LOJO"), Type.Literal("LOPE"), Type.Literal("LOPN"), Type.Literal("LOPS"), Type.Literal("LORE"), Type.Literal("LOWE"), Type.Literal("LSTA"), Type.Literal("LSTB"), Type.Literal("LSTE"), Type.Literal("PDAT"), Type.Literal("PFAN"), Type.Literal("PRZA"), Type.Literal("SBNW"), Type.Literal("SVNW"), Type.Literal("WEAN"), Type.Literal("ZABR"), Type.Literal("ZAKF"), Type.Literal("ZAUW")]), employee_id: Type.Union([Type.String(), Type.Null()]) }),
  PostCustomDatevEmployeesEmployeeIdDownloadDocumentParameterEmployeeId: Type.Union([Type.String(), Type.Null()]),
  PostCustomDatevEmployeesEmployeeIdDownloadDocumentPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ data_url: Type.String({ format: "uri" }), file_name: Type.String(), content_type: Type.String() }), warnings: Type.Array(Type.Object({ message: Type.String() })) }),
  PostCustomDatevEmployeesEmployeeIdDownloadDocumentRequestBody: Type.Object({ accounting_month: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }), document_type: Type.Union([Type.Literal("AANB"), Type.Literal("ABEG"), Type.Literal("BUBE"), Type.Literal("DAWE"), Type.Literal("KBNW"), Type.Literal("KOST"), Type.Literal("KOTR"), Type.Literal("LKTO"), Type.Literal("LOBN"), Type.Literal("LJOE"), Type.Literal("LOJE"), Type.Literal("LOJO"), Type.Literal("LOPE"), Type.Literal("LOPN"), Type.Literal("LOPS"), Type.Literal("LORE"), Type.Literal("LOWE"), Type.Literal("LSTA"), Type.Literal("LSTB"), Type.Literal("LSTE"), Type.Literal("PDAT"), Type.Literal("PFAN"), Type.Literal("PRZA"), Type.Literal("SBNW"), Type.Literal("SVNW"), Type.Literal("WEAN"), Type.Literal("ZABR"), Type.Literal("ZAKF"), Type.Literal("ZAUW")]) }),
  PostCustomDatevEmployeesEmployeeIdEauRequestsParameterEmployeeId: Type.String(),
  PostCustomDatevEmployeesEmployeeIdEauRequestsPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ eau_id: Type.String() }), warnings: Type.Array(Type.Object({ message: Type.String() })) }),
  PostCustomDatevEmployeesEmployeeIdEauRequestsRequestBody: Type.Object({ start_work_incapacity: Type.String({ pattern: "^\\d{4}-\\d{2}-\\d{2}$" }), notification: Type.Optional(Type.Object({ email: Type.String({ pattern: "^[\\w!#$%&'*+/=?^`{|}~-]+(?:\\.[\\w!#$%&'*+/=?^`{|}~-]+)*@(?:[\\w-]+\\.)+[\\w-]{2,}$" }) })), contact_person: Type.Optional(Type.Object({ gender: Type.Union([Type.Literal("M"), Type.Literal("W"), Type.Literal("X"), Type.Literal("D")]), name: Type.String({ minLength: 0, maxLength: 30 }), telephone: Type.String({ minLength: 0, maxLength: 20, pattern: "([\\d+])[\\d ()/-]+" }), fax: Type.String({ minLength: 0, maxLength: 20, pattern: "([\\d+])[\\d ()/-]+" }), email: Type.String({ minLength: 0, maxLength: 70, pattern: "^(?=.{1,64}@)[\\w-]+(\\.[\\w-]+)*@[^-][\\dA-Za-z-]+(\\.[\\dA-Za-z-]+)*(\\.[A-Za-z]{2,})$" }), company_name: Type.String({ minLength: 0, maxLength: 90 }), postal_code: Type.String({ minLength: 0, maxLength: 10, pattern: "[\\dA-Za-z]*" }), city: Type.String({ minLength: 0, maxLength: 34 }), street: Type.String({ minLength: 0, maxLength: 33 }), house_number: Type.String({ minLength: 0, maxLength: 9 }) })) }),
  PutCustomDatevEmployeesEmployeeIdPreparePayrollParameterEmployeeId: Type.String(),
  PutCustomDatevEmployeesEmployeeIdPreparePayrollPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Record(Type.String(), Type.Unknown()), warnings: Type.Array(Type.Object({ message: Type.String() })) }),
  PutCustomDatevEmployeesEmployeeIdPreparePayrollRequestBody: Type.Object({ payroll_run: Type.Object({ date: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }) }), hourly_payments: Type.Array(Type.Object({ hours: Type.Number({ minimum: -1.7976931348623157e+308 }), lohnart: Type.Number({ minimum: -1.7976931348623157e+308 }) })), fixed_payments: Type.Array(Type.Object({ amount: Type.Number({ minimum: -1.7976931348623157e+308 }), lohnart: Type.Number({ minimum: -1.7976931348623157e+308 }) })), custom_lodas: Type.Optional(Type.Array(Type.Object({ amount: Type.Number({ minimum: -1.7976931348623157e+308 }), lohnart: Type.Number({ minimum: -1.7976931348623157e+308 }), bearbeitungsschluessel: Type.Number({ minimum: -1.7976931348623157e+308 }) }))) }),
  PutCustomDatevEmployeesEmployeeIdCompensationsParameterEmployeeId: Type.String(),
  PutCustomDatevEmployeesEmployeeIdCompensationsPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Record(Type.String(), Type.Unknown()), warnings: Type.Array(Type.Object({ message: Type.String() })) }),
  PutCustomDatevEmployeesEmployeeIdCompensationsRequestBody: Type.Object({ effective_date: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }), compensations: Type.Array(Type.Object({ amount: Type.Number({ minimum: -1.7976931348623157e+308 }), currency: Type.Literal("EUR"), period: Type.Union([Type.Literal("HOUR"), Type.Literal("MONTH")]), lohnart: Type.Optional(Type.Integer({ minimum: 1, maximum: 9999 })) })) }),
  GetCustomDatevCheckWritePermissionPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ ready: Type.Boolean(), error: Type.Optional(Type.String()) }), warnings: Type.Array(Type.Object({ message: Type.String() })) }),
  GetCustomDatevDataPushesPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ data_pushes: Type.Array(Type.Object({ id: Type.String(), type: Type.Union([Type.Literal("GENERAL"), Type.Literal("PAYROLL")]), created_at: Type.String({ format: "date-time" }), upload_jobs: Type.Array(Type.Object({ id: Type.String(), file_name: Type.String(), state: Type.Union([Type.Literal("FAILED"), Type.Literal("UPLOADED"), Type.Literal("IMPORTED"), Type.Literal("CORRUPTED"), Type.Literal("DELETED"), Type.Literal("AUTO_DELETED")]), file: Type.String() })) })) }) }),
  PostCustomDatevPushDataGeneralPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ files: Type.Array(Type.Object({ name: Type.String(), content: Type.String() })) }), warnings: Type.Array(Type.Object({ message: Type.String() })) }),
  PostCustomDatevPushDataGeneralRequestBody: Type.Record(Type.String(), Type.Unknown()),
  PostCustomDatevPushDataPayrollPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ files: Type.Array(Type.Object({ name: Type.String(), content: Type.String() })) }), warnings: Type.Array(Type.Object({ message: Type.String() })) }),
  PostCustomDatevPushDataPayrollRequestBody: Type.Object({ payroll_month: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }) }),
  PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsParameterEmployeeId: Type.String(),
  PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsPositiveResponse: Type.Object({ status: Type.Literal("success"), data: Type.Record(Type.String(), Type.Unknown()), warnings: Type.Array(Type.Object({ message: Type.String() })) }),
  PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsRequestBody: Type.Object({ supplement_code: Type.String(), effective_date: Type.String({ format: "date-time", pattern: "^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$" }), element_amount: Type.Optional(Type.Number({ minimum: -1.7976931348623157e+308 })), element_string: Type.Optional(Type.String()) }),
  DataChangedWebhookPayload: Type.Object({ id: Type.String(), type: Type.Literal("data-changed"), data: Type.Object({ integration_id: Type.String(), integration_tool: Type.String(), integration_category: Type.Union([Type.Literal("HRIS"), Type.Literal("ATS"), Type.Literal("ASSESSMENT"), Type.Literal("LMS")]), changed_models: Type.Array(Type.Object({ name: Type.Union([Type.Literal("hris_legal_entities"), Type.Literal("hris_locations"), Type.Literal("hris_employees"), Type.Literal("hris_absence_types"), Type.Literal("hris_absences"), Type.Literal("hris_employments"), Type.Literal("hris_teams"), Type.Literal("hris_time_off_balances"), Type.Literal("hris_timesheets"), Type.Literal("hris_employee_document_categories"), Type.Literal("hris_performance_reviews"), Type.Literal("hris_performance_review_cycles"), Type.Literal("hris_staffing_entities"), Type.Literal("ats_users"), Type.Literal("ats_jobs"), Type.Literal("ats_job_postings"), Type.Literal("ats_candidates"), Type.Literal("ats_application_stages"), Type.Literal("ats_applications"), Type.Literal("ats_screening_questions"), Type.Literal("ats_tags"), Type.Literal("ats_interviews"), Type.Literal("ats_offers"), Type.Literal("ats_rejection_reasons"), Type.Literal("ats_roles"), Type.Literal("lms_users"), Type.Literal("lms_course_providers"), Type.Literal("lms_skills"), Type.Literal("lms_courses"), Type.Literal("lms_course_revisions"), Type.Literal("lms_course_progressions"), Type.Literal("hris_join_employees_teams"), Type.Literal("hris_join_staffing_entities_locations"), Type.Literal("hris_join_staffing_entities_legal_entities"), Type.Literal("hris_join_staffing_entities_groups"), Type.Literal("ats_join_candidates_tags"), Type.Literal("ats_join_jobs_application_stages"), Type.Literal("ats_join_jobs_screening_questions"), Type.Literal("ats_join_user_job_role_assignments"), Type.Literal("ats_join_jobs_users"), Type.Literal("ats_join_users_roles"), Type.Literal("ats_join_interviews_users"), Type.Literal("lms_join_revisions_skills")]) })) }) }),
  ConnectionFlowFailedWebhookPayload: Type.Object({ id: Type.String(), type: Type.Literal("connection-flow-failed"), data: Type.Object({ integration_tool: Type.String(), integration_category: Type.Union([Type.Literal("HRIS"), Type.Literal("ATS"), Type.Literal("ASSESSMENT"), Type.Literal("LMS")]), end_user: Type.Object({ organization_name: Type.String(), creator_email: Type.Union([Type.String({ format: "email" }), Type.Null()]), origin_id: Type.Union([Type.String(), Type.Null()]) }), log_url: Type.String({ format: "uri" }) }) }),
  IntegrationCreatedWebhookPayload: Type.Object({ id: Type.String(), type: Type.Literal("integration-created"), data: Type.Object({ id: Type.String(), tool: Type.String(), category: Type.Union([Type.Literal("HRIS"), Type.Literal("ATS"), Type.Literal("ASSESSMENT"), Type.Literal("LMS")]), end_user: Type.Object({ organization_name: Type.String(), creator_email: Type.Union([Type.String({ format: "email" }), Type.Null()]), origin_id: Type.Union([Type.String(), Type.Null()]) }) }) }),
  IntegrationDeletedWebhookPayload: Type.Object({ id: Type.String(), type: Type.Literal("integration-deleted"), data: Type.Object({ id: Type.String(), tool: Type.String(), category: Type.Union([Type.Literal("HRIS"), Type.Literal("ATS"), Type.Literal("ASSESSMENT"), Type.Literal("LMS")]), end_user: Type.Object({ organization_name: Type.String(), creator_email: Type.Union([Type.String({ format: "email" }), Type.Null()]), origin_id: Type.Union([Type.String(), Type.Null()]) }), deleted_at: Type.String({ format: "date-time" }) }) }),
  AssessmentOrderReceivedWebhookPayload: Type.Object({ id: Type.String(), type: Type.Literal("assessment:order-received"), data: Type.Object({ id: Type.String(), package_id: Type.String(), status: Type.Union([Type.Literal("OPEN"), Type.Literal("COMPLETED"), Type.Literal("CANCELLED"), Type.Literal("REJECTED")]), integration_id: Type.String(), candidate: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), email: Type.String({ format: "email" }), first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), phone: Type.Union([Type.String(), Type.Null()]) }), application: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]) }), job: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), name: Type.Union([Type.String(), Type.Null()]), job_code: Type.Union([Type.String(), Type.Null()]), description: Type.Union([Type.String(), Type.Null()]), location: Type.Union([Type.Partial(Type.Object({ street_1: Type.Union([Type.String(), Type.Null()]), street_2: Type.Union([Type.String(), Type.Null()]), city: Type.Union([Type.String(), Type.Null()]), state: Type.Union([Type.String(), Type.Null()]), zip_code: Type.Union([Type.String(), Type.Null()]), country: Type.Union([Type.String(), Type.Null()]), raw: Type.Union([Type.String(), Type.Null()]) })), Type.Null()]), hiring_team: Type.Array(Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), email: Type.Union([Type.String(), Type.Null()]), first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), hiring_team_roles: Type.Array(Type.Union([Type.Literal("RECRUITER"), Type.Literal("HIRING_MANAGER")])) })) }) }) }),
  InlineAssessmentOrderReceivedWebhookPayload: Type.Object({ id: Type.String(), type: Type.Literal("inline-assessment:order-received"), data: Type.Object({ id: Type.String(), package_id: Type.String(), status: Type.Union([Type.Literal("OPEN"), Type.Literal("COMPLETED"), Type.Literal("CANCELLED"), Type.Literal("REJECTED")]), integration_id: Type.String(), candidate: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), email: Type.String({ format: "email" }), first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), phone: Type.Union([Type.String(), Type.Null()]) }), application: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]) }), job: Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), name: Type.Union([Type.String(), Type.Null()]), job_code: Type.Union([Type.String(), Type.Null()]), description: Type.Union([Type.String(), Type.Null()]), location: Type.Union([Type.Partial(Type.Object({ street_1: Type.Union([Type.String(), Type.Null()]), street_2: Type.Union([Type.String(), Type.Null()]), city: Type.Union([Type.String(), Type.Null()]), state: Type.Union([Type.String(), Type.Null()]), zip_code: Type.Union([Type.String(), Type.Null()]), country: Type.Union([Type.String(), Type.Null()]), raw: Type.Union([Type.String(), Type.Null()]) })), Type.Null()]), hiring_team: Type.Array(Type.Object({ remote_id: Type.Union([Type.String(), Type.Null()]), email: Type.Union([Type.String(), Type.Null()]), first_name: Type.Union([Type.String(), Type.Null()]), last_name: Type.Union([Type.String(), Type.Null()]), hiring_team_roles: Type.Array(Type.Union([Type.Literal("RECRUITER"), Type.Literal("HIRING_MANAGER")])) })) }) }) }),
  IntegrationStateChangedWebhookPayload: Type.Object({ id: Type.String(), type: Type.Literal("integration-state-changed"), data: Type.Object({ integration_tool: Type.String(), integration_id: Type.String(), integration_category: Type.Union([Type.Literal("HRIS"), Type.Literal("ATS"), Type.Literal("ASSESSMENT"), Type.Literal("LMS")]), end_user: Type.Object({ organization_name: Type.String(), creator_email: Type.Union([Type.String({ format: "email" }), Type.Null()]), origin_id: Type.Union([Type.String(), Type.Null()]) }), qa_status: Type.Union([Type.Literal("PENDING"), Type.Literal("FAILED"), Type.Literal("PASSED")]), setup_status: Type.Union([Type.Literal("INCOMPLETE"), Type.Literal("FINAL_SYNC_PENDING"), Type.Literal("COMPLETED")]), state: Type.Union([Type.Literal("ACTIVE"), Type.Literal("INVALID"), Type.Literal("INACTIVE")]), updated_at: Type.String({ format: "date-time" }) }) }),
  AiApplyApplicationStatusUpdatedWebhookPayload: Type.Object({ id: Type.String(), type: Type.Literal("ai-apply-application-status-updated"), data: Type.Object({ id: Type.String(), job_posting_id: Type.String(), status: Type.Union([Type.Literal("SUBMITTED"), Type.Literal("DUPLICATE"), Type.Literal("PENDING"), Type.Literal("FAILED")]), created_at: Type.String({ format: "date-time" }), updated_at: Type.String({ format: "date-time" }) }) }),
  AiApplyJobPostingStatusUpdatedWebhookPayload: Type.Object({ id: Type.String(), type: Type.Literal("ai-apply-job-posting-status-updated"), data: Type.Object({ id: Type.String(), career_site: Type.Object({ id: Type.String(), label: Type.String() }), url: Type.String(), job_code: Type.Union([Type.String(), Type.Null()]), created_at: Type.String({ format: "date-time" }), updated_at: Type.String({ format: "date-time" }), archived_at: Type.Union([Type.String({ format: "date-time" }), Type.Null()]), archived_reason: Type.Union([Type.Union([Type.Literal("JOB_POSTING_TAKEN_OFFLINE"), Type.Literal("MANUAL_ARCHIVE"), Type.Literal("REMOVED_FROM_JOB_FEED")]), Type.Null()]), availability: Type.Union([Type.Literal("APPLYABLE"), Type.Literal("PENDING"), Type.Literal("ARCHIVED"), Type.Literal("UNAVAILABLE")]) }) }),
  SyncFinishedWebhookPayload: Type.Object({ id: Type.String(), type: Type.Literal("sync-finished"), data: Type.Object({ sync_id: Type.String(), sync_state: Type.String(), sync_started_at: Type.String({ format: "date-time" }), sync_ended_at: Type.String({ format: "date-time" }), sync_duration_seconds: Type.Integer({ minimum: 0 }), integration_id: Type.String(), integration_tool: Type.String(), integration_category: Type.Union([Type.Literal("HRIS"), Type.Literal("ATS"), Type.Literal("ASSESSMENT"), Type.Literal("LMS")]), end_user: Type.Object({ organization_name: Type.String(), creator_email: Type.Union([Type.String({ format: "email" }), Type.Null()]), origin_id: Type.Union([Type.String(), Type.Null()]) }), log_url: Type.String({ format: "uri" }) }) }),
  BulkImportJobPostingLocation: Type.Object({ country: Type.String(), postal_code: Type.Optional(Type.String()) }),
  BulkImportJobPostingInput: Type.Object({ url: Type.String({ format: "uri" }), career_site_label: Type.String(), job_code: Type.Optional(Type.String()), location: Type.Optional(Type.Union([Type.Ref("BulkImportJobPostingLocation"), Type.Null()])) }),
  BulkImportResponse: Type.Object({ status: Type.Literal("success"), data: Type.Object({ created: Type.Integer(), processed: Type.Integer(), archived: Type.Integer() }) }),
});

export interface GetCheckApiKeyPositiveResponse { status: "success", data: { environment_id: string, customer_id: string } }
export const GetCheckApiKeyPositiveResponse = __schemas.Import("GetCheckApiKeyPositiveResponse");

export interface PostForceSyncPositiveResponse { status: "success", data: { already_queued: boolean, sync_id: string, type: ("FULL" | "DELTA") } }
export const PostForceSyncPositiveResponse = __schemas.Import("PostForceSyncPositiveResponse");

export type PostForceSyncRequestBody = Partial<{ type: ("FULL" | "DELTA") }>
export const PostForceSyncRequestBody = __schemas.Import("PostForceSyncRequestBody");

export type PostPassthroughToolApiParameterTool = string
export const PostPassthroughToolApiParameterTool = __schemas.Import("PostPassthroughToolApiParameterTool");

export type PostPassthroughToolApiParameterApi = string
export const PostPassthroughToolApiParameterApi = __schemas.Import("PostPassthroughToolApiParameterApi");

export interface PostPassthroughToolApiPositiveResponse { status: "success", data: { url: string, status: number, headers: Record<string, (string | Array<string>)>, data?: unknown }, warnings: Array<{ message: string }> }
export const PostPassthroughToolApiPositiveResponse = __schemas.Import("PostPassthroughToolApiPositiveResponse");

export interface PostPassthroughToolApiRequestBody { method: ("GET" | "POST" | "DELETE" | "PUT" | "PATCH"), path: string, headers?: Record<string, string>, params?: Record<string, string>, data?: unknown, response_as_base64?: boolean, multipart_form_data?: Array<{ name: string, value: (string | { name: string, content_type?: string, data_url?: string, data?: string }) }>, api_options?: Record<string, string> }
export const PostPassthroughToolApiRequestBody = __schemas.Import("PostPassthroughToolApiRequestBody");

export type DeleteIntegrationsIntegrationIdParameterIntegrationId = string
export const DeleteIntegrationsIntegrationIdParameterIntegrationId = __schemas.Import("DeleteIntegrationsIntegrationIdParameterIntegrationId");

export interface DeleteIntegrationsIntegrationIdPositiveResponse { status: "success", data: Record<string, unknown> }
export const DeleteIntegrationsIntegrationIdPositiveResponse = __schemas.Import("DeleteIntegrationsIntegrationIdPositiveResponse");

export type DeleteIntegrationsIntegrationIdRequestBody = Partial<{  }>
export const DeleteIntegrationsIntegrationIdRequestBody = __schemas.Import("DeleteIntegrationsIntegrationIdRequestBody");

export type GetIntegrationsIntegrationIdParameterIntegrationId = string
export const GetIntegrationsIntegrationIdParameterIntegrationId = __schemas.Import("GetIntegrationsIntegrationIdParameterIntegrationId");

export interface GetIntegrationsIntegrationIdPositiveResponse { status: "success", data: { id: string, tool: { id: string, label: string, internal_label: (string | null), logo_url: string, icon_url: string }, category: ("HRIS" | "ATS" | "ASSESSMENT" | "LMS"), status: ("ACTIVE" | "INVALID" | "INACTIVE"), setup_status: ("INCOMPLETE" | "FINAL_SYNC_PENDING" | "COMPLETED"), end_user: { organization_name: string, creator_email: (string | null), origin_id: (string | null) }, scope_config: { id: string, name: (string | null) }, data_expired_at: (string | null), created_at: string, beta: boolean, read_models: Array<{ id: string, label: string, is_available: boolean, coverage_status: ("SUPPORTED" | "UNSUPPORTED" | "NOT_IMPLEMENTED" | "UNKNOWN"), scope_config_setting: ("ENABLED" | "DISABLED" | "OPTIONAL"), opted_out_by_customer: boolean, fields: Array<{ id: string, is_available: boolean, coverage_status: ("SUPPORTED" | "UNSUPPORTED" | "NOT_IMPLEMENTED" | "UNKNOWN"), scope_config_setting: ("ENABLED" | "DISABLED" | "OPTIONAL"), opted_out_by_customer: boolean }> }>, write_actions: Array<{ id: string, label: string, is_available: boolean, coverage_status: ("SUPPORTED" | "UNSUPPORTED" | "NOT_IMPLEMENTED" | "UNKNOWN"), scope_config_setting: ("ENABLED" | "DISABLED" | "OPTIONAL"), opted_out_by_customer: boolean, fields: Array<{ id: string, is_available: boolean, coverage_status: ("SUPPORTED" | "UNSUPPORTED" | "NOT_IMPLEMENTED" | "UNKNOWN") }> }> } }
export const GetIntegrationsIntegrationIdPositiveResponse = __schemas.Import("GetIntegrationsIntegrationIdPositiveResponse");

export type PutIntegrationsIntegrationIdEnabledParameterIntegrationId = string
export const PutIntegrationsIntegrationIdEnabledParameterIntegrationId = __schemas.Import("PutIntegrationsIntegrationIdEnabledParameterIntegrationId");

export interface PutIntegrationsIntegrationIdEnabledPositiveResponse { status: "success", data: Record<string, unknown> }
export const PutIntegrationsIntegrationIdEnabledPositiveResponse = __schemas.Import("PutIntegrationsIntegrationIdEnabledPositiveResponse");

export interface PutIntegrationsIntegrationIdEnabledRequestBody { value: boolean }
export const PutIntegrationsIntegrationIdEnabledRequestBody = __schemas.Import("PutIntegrationsIntegrationIdEnabledRequestBody");

export type PostIntegrationsIntegrationIdRelinkParameterIntegrationId = string
export const PostIntegrationsIntegrationIdRelinkParameterIntegrationId = __schemas.Import("PostIntegrationsIntegrationIdRelinkParameterIntegrationId");

export interface PostIntegrationsIntegrationIdRelinkPositiveResponse { status: "success", data: { link: string } }
export const PostIntegrationsIntegrationIdRelinkPositiveResponse = __schemas.Import("PostIntegrationsIntegrationIdRelinkPositiveResponse");

export type PostIntegrationsIntegrationIdRelinkRequestBody = Partial<{ language: (("en" | "de" | "fr" | "it" | "es") | null), scope_config_id: (string | null), link_type: ("EMBEDDED" | "MAGIC_LINK") }>
export const PostIntegrationsIntegrationIdRelinkRequestBody = __schemas.Import("PostIntegrationsIntegrationIdRelinkRequestBody");

export type PostIntegrationsIntegrationIdSetupLinkParameterIntegrationId = string
export const PostIntegrationsIntegrationIdSetupLinkParameterIntegrationId = __schemas.Import("PostIntegrationsIntegrationIdSetupLinkParameterIntegrationId");

export interface PostIntegrationsIntegrationIdSetupLinkPositiveResponse { status: "success", data: { link: string } }
export const PostIntegrationsIntegrationIdSetupLinkPositiveResponse = __schemas.Import("PostIntegrationsIntegrationIdSetupLinkPositiveResponse");

export interface PostIntegrationsIntegrationIdSetupLinkRequestBody { language?: (("en" | "de" | "fr" | "it" | "es") | null), link_type: ("EMBEDDED" | "MAGIC_LINK") }
export const PostIntegrationsIntegrationIdSetupLinkRequestBody = __schemas.Import("PostIntegrationsIntegrationIdSetupLinkRequestBody");

export type GetIntegrationsIntegrationIdIntegrationFieldsParameterIntegrationId = string
export const GetIntegrationsIntegrationIdIntegrationFieldsParameterIntegrationId = __schemas.Import("GetIntegrationsIntegrationIdIntegrationFieldsParameterIntegrationId");

export type GetIntegrationsIntegrationIdIntegrationFieldsParameterCursor = string
export const GetIntegrationsIntegrationIdIntegrationFieldsParameterCursor = __schemas.Import("GetIntegrationsIntegrationIdIntegrationFieldsParameterCursor");

export type GetIntegrationsIntegrationIdIntegrationFieldsParameterPageSize = number
export const GetIntegrationsIntegrationIdIntegrationFieldsParameterPageSize = __schemas.Import("GetIntegrationsIntegrationIdIntegrationFieldsParameterPageSize");

export interface GetIntegrationsIntegrationIdIntegrationFieldsPositiveResponse { status: "success", data: { results: Array<{ id: string, key: string, model: string, type: ("DEFAULT" | "CUSTOM"), label: (string | null), is_passthrough_enabled: boolean, is_writable: false }>, next_cursor: (string | null), next: (string | null) } }
export const GetIntegrationsIntegrationIdIntegrationFieldsPositiveResponse = __schemas.Import("GetIntegrationsIntegrationIdIntegrationFieldsPositiveResponse");

export type PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationId = string
export const PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationId = __schemas.Import("PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationId");

export type PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationFieldId = string
export const PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationFieldId = __schemas.Import("PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationFieldId");

export interface PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdPositiveResponse { status: "success", data: { id: string, key: string, model: string, type: ("DEFAULT" | "CUSTOM"), label: (string | null), is_passthrough_enabled: boolean, is_writable: false } }
export const PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdPositiveResponse = __schemas.Import("PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdPositiveResponse");

export interface PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdRequestBody { enable_passthrough: (boolean | null) }
export const PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdRequestBody = __schemas.Import("PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdRequestBody");

export type GetIntegrationsIntegrationIdCustomFieldsParameterIntegrationId = string
export const GetIntegrationsIntegrationIdCustomFieldsParameterIntegrationId = __schemas.Import("GetIntegrationsIntegrationIdCustomFieldsParameterIntegrationId");

export type GetIntegrationsIntegrationIdCustomFieldsParameterCursor = string
export const GetIntegrationsIntegrationIdCustomFieldsParameterCursor = __schemas.Import("GetIntegrationsIntegrationIdCustomFieldsParameterCursor");

export type GetIntegrationsIntegrationIdCustomFieldsParameterPageSize = number
export const GetIntegrationsIntegrationIdCustomFieldsParameterPageSize = __schemas.Import("GetIntegrationsIntegrationIdCustomFieldsParameterPageSize");

export interface GetIntegrationsIntegrationIdCustomFieldsPositiveResponse { status: "success", data: { results: Array<{ id: string, key: string, integration_field: ({ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), label: (string | null) } | null), model: string, label: (string | null), description: (string | null) }>, next_cursor: (string | null), next: (string | null) } }
export const GetIntegrationsIntegrationIdCustomFieldsPositiveResponse = __schemas.Import("GetIntegrationsIntegrationIdCustomFieldsPositiveResponse");

export type PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterIntegrationId = string
export const PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterIntegrationId = __schemas.Import("PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterIntegrationId");

export type PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterCustomFieldId = string
export const PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterCustomFieldId = __schemas.Import("PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterCustomFieldId");

export interface PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdPositiveResponse { status: "success", data: { id: string, key: string, integration_field: ({ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), label: (string | null) } | null), model: string, label: (string | null), description: (string | null) } }
export const PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdPositiveResponse = __schemas.Import("PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdPositiveResponse");

export interface PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdRequestBody { integration_field_id: (string | null) }
export const PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdRequestBody = __schemas.Import("PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdRequestBody");

export type GetToolsCategoryParameterCategory = ("hris" | "ats" | "assessment" | "lms")
export const GetToolsCategoryParameterCategory = __schemas.Import("GetToolsCategoryParameterCategory");

export interface GetToolsCategoryPositiveResponse { status: "success", data: { tools: Array<{ id: string, label: string, internal_label: (string | null), assets: { logo_url: string, icon_url: string, icon_black_url: string }, paid_api_details_markdown: (string | null), fast_track_details_markdown: (string | null), partner_only_details_markdown: (string | null), connection_guide_url: (string | null), coverage: { read_models: Array<{ id: string, label: string, coverage_status: ("SUPPORTED" | "UNSUPPORTED" | "NOT_IMPLEMENTED" | "UNKNOWN"), fields: Array<{ id: string, coverage_status: ("SUPPORTED" | "UNSUPPORTED" | "NOT_IMPLEMENTED" | "UNKNOWN") }> }>, write_actions: Array<{ id: string, label: string, coverage_status: ("SUPPORTED" | "UNSUPPORTED" | "NOT_IMPLEMENTED" | "UNKNOWN"), fields: Array<{ id: string, coverage_status: ("SUPPORTED" | "UNSUPPORTED" | "NOT_IMPLEMENTED" | "UNKNOWN") }> }>, features: Array<{ id: string, label: string, coverage_status: ("SUPPORTED" | "UNSUPPORTED" | "NOT_IMPLEMENTED" | "UNKNOWN") }> } }> } }
export const GetToolsCategoryPositiveResponse = __schemas.Import("GetToolsCategoryPositiveResponse");

export type PostHrisProvisioningGroupsGroupIdDiffParameterGroupId = string
export const PostHrisProvisioningGroupsGroupIdDiffParameterGroupId = __schemas.Import("PostHrisProvisioningGroupsGroupIdDiffParameterGroupId");

export interface PostHrisProvisioningGroupsGroupIdDiffPositiveResponse { status: "success", data: { users: { to_provision: Array<{ email: (string | null), employee: Partial<{ id: string, remote_id: (string | null), first_name: (string | null), last_name: (string | null), groups: Array<{ id: string, remote_id: (string | null), name: (string | null) }>, avatar: (string | null), work_location_id: (string | null), legal_entity_id: (string | null) }> }>, to_deprovision: Array<{ origin_id: string, email: string }>, already_provisioned: Array<{ origin_id: string, email: string, employee: Partial<{ id: string, remote_id: (string | null), first_name: (string | null), last_name: (string | null), groups: Array<{ id: string, remote_id: (string | null), name: (string | null) }>, avatar: (string | null), work_location_id: (string | null), legal_entity_id: (string | null) }> }> } } }
export const PostHrisProvisioningGroupsGroupIdDiffPositiveResponse = __schemas.Import("PostHrisProvisioningGroupsGroupIdDiffPositiveResponse");

export interface PostHrisProvisioningGroupsGroupIdDiffRequestBody { provisioned_users: Array<{ origin_id: string, email: string }>, options: { employee_fields: Array<("id" | "remote_id" | "first_name" | "last_name" | "groups" | "avatar" | "work_location_id" | "legal_entity_id")> } }
export const PostHrisProvisioningGroupsGroupIdDiffRequestBody = __schemas.Import("PostHrisProvisioningGroupsGroupIdDiffRequestBody");

export type PostHrisProvisioningGroupsGroupIdSetupLinksParameterGroupId = string
export const PostHrisProvisioningGroupsGroupIdSetupLinksParameterGroupId = __schemas.Import("PostHrisProvisioningGroupsGroupIdSetupLinksParameterGroupId");

export interface PostHrisProvisioningGroupsGroupIdSetupLinksPositiveResponse { status: "success", data: { url: string, expires_at: string } }
export const PostHrisProvisioningGroupsGroupIdSetupLinksPositiveResponse = __schemas.Import("PostHrisProvisioningGroupsGroupIdSetupLinksPositiveResponse");

export type PostHrisProvisioningGroupsGroupIdSetupLinksRequestBody = Partial<{ language: (("en" | "de" | "fr" | "it" | "es") | null) }>
export const PostHrisProvisioningGroupsGroupIdSetupLinksRequestBody = __schemas.Import("PostHrisProvisioningGroupsGroupIdSetupLinksRequestBody");

export type GetHrisEmployeesParameterCursor = string
export const GetHrisEmployeesParameterCursor = __schemas.Import("GetHrisEmployeesParameterCursor");

export type GetHrisEmployeesParameterPageSize = number
export const GetHrisEmployeesParameterPageSize = __schemas.Import("GetHrisEmployeesParameterPageSize");

export type GetHrisEmployeesParameterUpdatedAfter = string
export const GetHrisEmployeesParameterUpdatedAfter = __schemas.Import("GetHrisEmployeesParameterUpdatedAfter");

export type GetHrisEmployeesParameterIncludeDeleted = ("true" | "false")
export const GetHrisEmployeesParameterIncludeDeleted = __schemas.Import("GetHrisEmployeesParameterIncludeDeleted");

export type GetHrisEmployeesParameterIgnoreUnsupportedFilters = ("true" | "false")
export const GetHrisEmployeesParameterIgnoreUnsupportedFilters = __schemas.Import("GetHrisEmployeesParameterIgnoreUnsupportedFilters");

export type GetHrisEmployeesParameterIds = string
export const GetHrisEmployeesParameterIds = __schemas.Import("GetHrisEmployeesParameterIds");

export type GetHrisEmployeesParameterRemoteIds = string
export const GetHrisEmployeesParameterRemoteIds = __schemas.Import("GetHrisEmployeesParameterRemoteIds");

export type GetHrisEmployeesParameterEmploymentStatus = ("ACTIVE" | "PENDING" | "INACTIVE" | "LEAVE")
export const GetHrisEmployeesParameterEmploymentStatus = __schemas.Import("GetHrisEmployeesParameterEmploymentStatus");

export type GetHrisEmployeesParameterEmploymentStatuses = string
export const GetHrisEmployeesParameterEmploymentStatuses = __schemas.Import("GetHrisEmployeesParameterEmploymentStatuses");

export type GetHrisEmployeesParameterGroupIds = string
export const GetHrisEmployeesParameterGroupIds = __schemas.Import("GetHrisEmployeesParameterGroupIds");

export type GetHrisEmployeesParameterLegalEntityIds = string
export const GetHrisEmployeesParameterLegalEntityIds = __schemas.Import("GetHrisEmployeesParameterLegalEntityIds");

export type GetHrisEmployeesParameterWorkLocationIds = string
export const GetHrisEmployeesParameterWorkLocationIds = __schemas.Import("GetHrisEmployeesParameterWorkLocationIds");

export type GetHrisEmployeesParameterWorkEmails = string
export const GetHrisEmployeesParameterWorkEmails = __schemas.Import("GetHrisEmployeesParameterWorkEmails");

export type GetHrisEmployeesParameterPersonalEmails = string
export const GetHrisEmployeesParameterPersonalEmails = __schemas.Import("GetHrisEmployeesParameterPersonalEmails");

export type GetHrisEmployeesParameterCustomFields = string
export const GetHrisEmployeesParameterCustomFields = __schemas.Import("GetHrisEmployeesParameterCustomFields");

export interface GetHrisEmployeesPositiveResponse { status: "success", data: { next: (string | null), results: Array<{ id: string, remote_id: string, employee_number: (string | null), first_name: (string | null), last_name: (string | null), nationality: (string | null), display_full_name: (string | null), job_title: (string | null), work_email?: (string | null), personal_email?: (string | null), mobile_phone_number: (string | null), ssn: (string | null), tax_id: (string | null), gender?: (("MALE" | "FEMALE" | "NON_BINARY" | "NOT_SPECIFIED") | string | null), ethnicity?: (("WHITE" | "ASIAN" | "HISPANIC_LATINO" | "HAWAIIAN" | "NATIVE_AMERICAN" | "BLACK_AFRICAN_AMERICAN" | "MULTIPLE_ETHNICITIES" | "DECLINE_TO_SPECIFY") | string | null), marital_status?: (("SINGLE" | "MARRIED" | "DOMESTIC_PARTNERSHIP" | "WIDOWED" | "DIVORCED" | "SEPARATED" | "NOT_MARRIED") | string | null), employment_status?: (("ACTIVE" | "PENDING" | "INACTIVE" | "LEAVE") | string | null), employment_type?: (("FULL_TIME" | "PART_TIME" | "CONTRACT" | "INTERNSHIP" | "FREELANCE" | "WORKING_STUDENT" | "APPRENTICESHIP" | "TRAINING") | string | null), weekly_hours: (number | null), avatar: (string | null), work_location_id: (string | null), legal_entity_id: (string | null), manager_id: (string | null), home_address?: (Partial<{ city: (string | null), country: (string | null), raw: (string | null), state: (string | null), street_1: (string | null), street_2: (string | null), zip_code: (string | null) }> | null), bank_accounts?: (Array<Partial<{ iban: (string | null), bic: (string | null), account_number: (string | null), holder_name: (string | null), bank_name: (string | null), domestic_bank_routing: ({ number: string, type: (("GB_SORT_CODE" | "DE_BANKLEITZAHL" | "US_ABA_ROUTING_TRANSIT_NUMBER" | "CA_ROUTING_NUMBER" | "AU_BSB_CODE" | "FR_RIB") | null) } | null) }>> | null), date_of_birth: (string | null), start_date: (string | null), termination_date: (string | null), remote_created_at: (string | null), changed_at: string, remote_deleted_at: (string | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }>, remote_data: (Record<string, unknown> | null), employments: Array<{ id: string, remote_id: (string | null), employee_id: string, job_title: (string | null), pay_rate: (number | null), pay_period?: (("HOUR" | "DAY" | "WEEK" | "TWO_WEEKS" | "HALF_MONTH" | "MONTH" | "TWO_MONTHS" | "QUARTER" | "HALF_YEAR" | "YEAR") | string | null), pay_frequency?: (("DAILY" | "WEEKLY" | "BIWEEKLY" | "MONTHLY" | "SEMIMONTHLY" | "QUARTERLY" | "SEMIANNUALLY" | "ANNUALLY" | "PRO_RATA") | string | null), employment_type?: (("FULL_TIME" | "PART_TIME" | "CONTRACT" | "INTERNSHIP" | "FREELANCE" | "WORKING_STUDENT" | "APPRENTICESHIP" | "TRAINING") | string | null), pay_currency: (string | null), effective_date: (string | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }> }>, time_off_balances: Array<{ id: string, remote_id: (string | null), employee_id: string, type_id: string, balance: (number | null), balance_unit: (("HOURS" | "DAYS") | null), changed_at: string, remote_deleted_at: (string | null), used: (number | null), used_unit: (("HOURS" | "DAYS") | null), remote_data: (Record<string, unknown> | null) }>, manager: ({ first_name: (string | null), last_name: (string | null), display_full_name: (string | null), id: string, employee_number: (string | null), work_email?: (string | null), remote_id: string, employment_status?: (("ACTIVE" | "PENDING" | "INACTIVE" | "LEAVE") | string | null), termination_date: (string | null) } | null), groups: Array<{ id: string, remote_id: string, name: (string | null), type: (("DEPARTMENT" | "TEAM" | "COST_CENTER") | null) }>, legal_entity: ({ id: string, remote_id: (string | null), name: (string | null), address?: (Partial<{ city: (string | null), country: (string | null), raw: (string | null), state: (string | null), street_1: (string | null), street_2: (string | null), zip_code: (string | null) }> | null) } | null), teams: Array<{ id: string, remote_id: string, name: (string | null), type: (("DEPARTMENT" | "TEAM" | "COST_CENTER") | null) }>, work_location: ({ id: string, remote_id: (string | null), name: (string | null), address?: (Partial<{ city: (string | null), country: (string | null), raw: (string | null), state: (string | null), street_1: (string | null), street_2: (string | null), zip_code: (string | null) }> | null), type: (string | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null) } | null) }> } }
export const GetHrisEmployeesPositiveResponse = __schemas.Import("GetHrisEmployeesPositiveResponse");

export interface PostHrisEmployeesPositiveResponse { status: "success", data: { id: string, remote_id: string, employee_number: (string | null), first_name: (string | null), last_name: (string | null), nationality: (string | null), display_full_name: (string | null), job_title: (string | null), work_email?: (string | null), personal_email?: (string | null), mobile_phone_number: (string | null), ssn: (string | null), tax_id: (string | null), gender?: (("MALE" | "FEMALE" | "NON_BINARY" | "NOT_SPECIFIED") | string | null), ethnicity?: (("WHITE" | "ASIAN" | "HISPANIC_LATINO" | "HAWAIIAN" | "NATIVE_AMERICAN" | "BLACK_AFRICAN_AMERICAN" | "MULTIPLE_ETHNICITIES" | "DECLINE_TO_SPECIFY") | string | null), marital_status?: (("SINGLE" | "MARRIED" | "DOMESTIC_PARTNERSHIP" | "WIDOWED" | "DIVORCED" | "SEPARATED" | "NOT_MARRIED") | string | null), employment_status?: (("ACTIVE" | "PENDING" | "INACTIVE" | "LEAVE") | string | null), employment_type?: (("FULL_TIME" | "PART_TIME" | "CONTRACT" | "INTERNSHIP" | "FREELANCE" | "WORKING_STUDENT" | "APPRENTICESHIP" | "TRAINING") | string | null), weekly_hours: (number | null), avatar: (string | null), work_location_id: (string | null), legal_entity_id: (string | null), manager_id: (string | null), home_address?: (Partial<{ city: (string | null), country: (string | null), raw: (string | null), state: (string | null), street_1: (string | null), street_2: (string | null), zip_code: (string | null) }> | null), bank_accounts?: (Array<Partial<{ iban: (string | null), bic: (string | null), account_number: (string | null), holder_name: (string | null), bank_name: (string | null), domestic_bank_routing: ({ number: string, type: (("GB_SORT_CODE" | "DE_BANKLEITZAHL" | "US_ABA_ROUTING_TRANSIT_NUMBER" | "CA_ROUTING_NUMBER" | "AU_BSB_CODE" | "FR_RIB") | null) } | null) }>> | null), date_of_birth: (string | null), start_date: (string | null), termination_date: (string | null), remote_created_at: (string | null), changed_at: string, remote_deleted_at: (string | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }>, remote_data: (Record<string, unknown> | null) }, warnings: Array<{ message: string }> }
export const PostHrisEmployeesPositiveResponse = __schemas.Import("PostHrisEmployeesPositiveResponse");

export interface PostHrisEmployeesRequestBody { first_name: string, last_name: string, work_email?: string, gender?: ("MALE" | "FEMALE" | "NON_BINARY" | "NOT_SPECIFIED"), job_title?: string, home_address?: Partial<{ street_1: string, street_2: string, city: string, state: string, zip_code: string, country: string }>, date_of_birth?: string, mobile_phone_number?: string, home_phone_number?: string, nationality?: string, start_date?: string, legal_entity_id?: string, location_id?: string, remote_fields?: Partial<{ humaans: Partial<{ employee: Record<string, unknown> }>, hibob: Partial<{ employee: Record<string, unknown> }>, sympa: Partial<{ GenericNewHire: Record<string, unknown> }>, silae: Partial<{ siret: string, employee: Record<string, unknown>, employment: Record<string, unknown> }>, peoplehr: Partial<{ job_role_effective_date: string, department: string }>, zohopeople: Partial<{ employee_id: string }>, workday: Partial<{ job_requisition_id: string, position_id: string, ssn: string, bank_account: { iban: string, bic: string, bank_name: string } }>, deel: { candidate_id: string, candidate_link: string }, bamboohr: Partial<{ employee: Record<string, unknown> }>, oracle: { group_id: string, department_id: string }, adpworkforcenow: { onboarding_template_code: string, applicant_payroll_profile_group_code: string, manager_position_id?: string, home_organization_unit_code?: string, personal_email?: string }, azuread: { password: string }, paycor: { paygroupRemoteId: string, departmentRemoteId: string }, planday: { department_remote_id: string }, dayforce: { social_security_number: string, pay_type: string, pay_class: string, pay_group: string, base_rate: number, role: string, location: string, department: string, job: string, country: string } }> }
export const PostHrisEmployeesRequestBody = __schemas.Import("PostHrisEmployeesRequestBody");

export interface Schema1 { [key: string]: ({ label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: "text", min_length?: (number | null), max_length?: (number | null), reg_exp?: (string | null) } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: "number", min?: (number | null), max?: (number | null) } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: "date" } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: "single_select", options: ({ type: "inline", entries: Array<{ id: string, label: string, unified_value?: string, remote_id: (string | number) }> } | { type: "referenced", link: string }) } | { label: string, required: boolean, description?: (string | null), unified_key?: (string | null), type: "multi_select", min_items?: (number | null), max_items?: (number | null), options: ({ type: "inline", entries: Array<{ id: string, label: string, unified_value?: string, remote_id: (string | number) }> } | { type: "referenced", link: string }) } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: "checkbox" } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: "object", properties: Schema1 } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: "array", item_type: Schema2, min_items?: (number | null), max_items?: (number | null) } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: "file", file_restrictions: { accepted_mime_types: Array<string>, max_file_size?: (number | null) } }) }
export const Schema1 = __schemas.Import("Schema1");

export type Schema2 = ({ label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: "text", min_length?: (number | null), max_length?: (number | null), reg_exp?: (string | null) } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: "number", min?: (number | null), max?: (number | null) } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: "date" } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: "single_select", options: ({ type: "inline", entries: Array<{ id: string, label: string, unified_value?: string, remote_id: (string | number) }> } | { type: "referenced", link: string }) } | { label: string, required: boolean, description?: (string | null), unified_key?: (string | null), type: "multi_select", min_items?: (number | null), max_items?: (number | null), options: ({ type: "inline", entries: Array<{ id: string, label: string, unified_value?: string, remote_id: (string | number) }> } | { type: "referenced", link: string }) } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: "checkbox" } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: "object", properties: Schema1 } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: "array", item_type: Schema2, min_items?: (number | null), max_items?: (number | null) } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: "file", file_restrictions: { accepted_mime_types: Array<string>, max_file_size?: (number | null) } })
export const Schema2 = __schemas.Import("Schema2");

export interface GetHrisEmployeesFormPositiveResponse { status: "success", data: { properties: Record<string, ({ label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: "text", min_length?: (number | null), max_length?: (number | null), reg_exp?: (string | null) } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: "number", min?: (number | null), max?: (number | null) } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: "date" } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: "single_select", options: ({ type: "inline", entries: Array<{ id: string, label: string, unified_value?: string, remote_id: (string | number) }> } | { type: "referenced", link: string }) } | { label: string, required: boolean, description?: (string | null), unified_key?: (string | null), type: "multi_select", min_items?: (number | null), max_items?: (number | null), options: ({ type: "inline", entries: Array<{ id: string, label: string, unified_value?: string, remote_id: (string | number) }> } | { type: "referenced", link: string }) } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: "checkbox" } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: "object", properties: Schema1 } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: "array", item_type: Schema2, min_items?: (number | null), max_items?: (number | null) } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: "file", file_restrictions: { accepted_mime_types: Array<string>, max_file_size?: (number | null) } })> }, warnings: Array<{ message: string }> }
export const GetHrisEmployeesFormPositiveResponse = __schemas.Import("GetHrisEmployeesFormPositiveResponse");

export interface PostHrisEmployeesFormPositiveResponse { status: "success", data: { id: (string | null), remote_id: (string | null), prehire: { remote_id: (string | null) } }, warnings: Array<{ message: string }> }
export const PostHrisEmployeesFormPositiveResponse = __schemas.Import("PostHrisEmployeesFormPositiveResponse");

export type Schema6 = Array<Schema4>
export const Schema6 = __schemas.Import("Schema6");

export type Schema4 = (string | number | boolean | Schema5 | Schema6)
export const Schema4 = __schemas.Import("Schema4");

export interface Schema5 { [key: string]: Schema4 }
export const Schema5 = __schemas.Import("Schema5");

export interface Schema3 { [key: string]: Schema4 }
export const Schema3 = __schemas.Import("Schema3");

export interface PostHrisEmployeesFormRequestBody { properties: Schema3 }
export const PostHrisEmployeesFormRequestBody = __schemas.Import("PostHrisEmployeesFormRequestBody");

export type PatchHrisEmployeesEmployeeIdParameterEmployeeId = string
export const PatchHrisEmployeesEmployeeIdParameterEmployeeId = __schemas.Import("PatchHrisEmployeesEmployeeIdParameterEmployeeId");

export interface PatchHrisEmployeesEmployeeIdPositiveResponse { status: "success", data: { id: string, remote_id: string, employee_number: (string | null), first_name: (string | null), last_name: (string | null), nationality: (string | null), display_full_name: (string | null), job_title: (string | null), work_email?: (string | null), personal_email?: (string | null), mobile_phone_number: (string | null), ssn: (string | null), tax_id: (string | null), gender?: (("MALE" | "FEMALE" | "NON_BINARY" | "NOT_SPECIFIED") | string | null), ethnicity?: (("WHITE" | "ASIAN" | "HISPANIC_LATINO" | "HAWAIIAN" | "NATIVE_AMERICAN" | "BLACK_AFRICAN_AMERICAN" | "MULTIPLE_ETHNICITIES" | "DECLINE_TO_SPECIFY") | string | null), marital_status?: (("SINGLE" | "MARRIED" | "DOMESTIC_PARTNERSHIP" | "WIDOWED" | "DIVORCED" | "SEPARATED" | "NOT_MARRIED") | string | null), employment_status?: (("ACTIVE" | "PENDING" | "INACTIVE" | "LEAVE") | string | null), employment_type?: (("FULL_TIME" | "PART_TIME" | "CONTRACT" | "INTERNSHIP" | "FREELANCE" | "WORKING_STUDENT" | "APPRENTICESHIP" | "TRAINING") | string | null), weekly_hours: (number | null), avatar: (string | null), work_location_id: (string | null), legal_entity_id: (string | null), manager_id: (string | null), home_address?: (Partial<{ city: (string | null), country: (string | null), raw: (string | null), state: (string | null), street_1: (string | null), street_2: (string | null), zip_code: (string | null) }> | null), bank_accounts?: (Array<Partial<{ iban: (string | null), bic: (string | null), account_number: (string | null), holder_name: (string | null), bank_name: (string | null), domestic_bank_routing: ({ number: string, type: (("GB_SORT_CODE" | "DE_BANKLEITZAHL" | "US_ABA_ROUTING_TRANSIT_NUMBER" | "CA_ROUTING_NUMBER" | "AU_BSB_CODE" | "FR_RIB") | null) } | null) }>> | null), date_of_birth: (string | null), start_date: (string | null), termination_date: (string | null), remote_created_at: (string | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null) }, warnings: Array<{ message: string }> }
export const PatchHrisEmployeesEmployeeIdPositiveResponse = __schemas.Import("PatchHrisEmployeesEmployeeIdPositiveResponse");

export interface PatchHrisEmployeesEmployeeIdRequestBody { first_name?: string, last_name?: string, work_email: string, gender?: ("MALE" | "FEMALE" | "NON_BINARY" | "NOT_SPECIFIED"), job_title?: string, home_address?: Partial<{ street_1: string, street_2: string, city: string, state: string, zip_code: string, country: string }>, date_of_birth?: string, mobile_phone_number?: string, home_phone_number?: string, nationality?: string, start_date?: string, legal_entity_id?: string, location_id?: string, remote_fields?: Partial<{ humaans: Partial<{ employee: Record<string, unknown> }>, hibob: Partial<{ employee: Record<string, unknown> }>, sympa: Partial<{ GenericNewHire: Record<string, unknown> }>, silae: Partial<{ siret: string, employee: Record<string, unknown>, employment: Record<string, unknown> }>, peoplehr: Partial<{ job_role_effective_date: string, department: string }>, zohopeople: Partial<{ employee_id: string }>, workday: Partial<{ job_requisition_id: string, position_id: string, ssn: string, bank_account: { iban: string, bic: string, bank_name: string } }>, deel: { candidate_id: string, candidate_link: string }, bamboohr: Partial<{ employee: Record<string, unknown> }>, oracle: { group_id: string, department_id: string }, adpworkforcenow: { onboarding_template_code: string, applicant_payroll_profile_group_code: string, manager_position_id?: string, home_organization_unit_code?: string, personal_email?: string }, azuread: { password: string }, paycor: { paygroupRemoteId: string, departmentRemoteId: string }, planday: { department_remote_id: string }, dayforce: { social_security_number: string, pay_type: string, pay_class: string, pay_group: string, base_rate: number, role: string, location: string, department: string, job: string, country: string } }>, ssn?: string, marital_status?: ("SINGLE" | "MARRIED" | "DOMESTIC_PARTNERSHIP" | "WIDOWED" | "DIVORCED" | "SEPARATED" | "NOT_MARRIED"), termination_date?: string, tax_id?: string }
export const PatchHrisEmployeesEmployeeIdRequestBody = __schemas.Import("PatchHrisEmployeesEmployeeIdRequestBody");

export type PostHrisEmployeesEmployeeIdDocumentsParameterEmployeeId = string
export const PostHrisEmployeesEmployeeIdDocumentsParameterEmployeeId = __schemas.Import("PostHrisEmployeesEmployeeIdDocumentsParameterEmployeeId");

export interface PostHrisEmployeesEmployeeIdDocumentsPositiveResponse { status: "success", data: Record<string, unknown>, warnings: Array<{ message: string }> }
export const PostHrisEmployeesEmployeeIdDocumentsPositiveResponse = __schemas.Import("PostHrisEmployeesEmployeeIdDocumentsPositiveResponse");

export interface PostHrisEmployeesEmployeeIdDocumentsRequestBody { category_id: string, document: { name: string, content_type?: string, data_url?: string, data?: string } }
export const PostHrisEmployeesEmployeeIdDocumentsRequestBody = __schemas.Import("PostHrisEmployeesEmployeeIdDocumentsRequestBody");

export type GetHrisEmployeeDocumentCategoriesParameterCursor = string
export const GetHrisEmployeeDocumentCategoriesParameterCursor = __schemas.Import("GetHrisEmployeeDocumentCategoriesParameterCursor");

export type GetHrisEmployeeDocumentCategoriesParameterPageSize = number
export const GetHrisEmployeeDocumentCategoriesParameterPageSize = __schemas.Import("GetHrisEmployeeDocumentCategoriesParameterPageSize");

export type GetHrisEmployeeDocumentCategoriesParameterUpdatedAfter = string
export const GetHrisEmployeeDocumentCategoriesParameterUpdatedAfter = __schemas.Import("GetHrisEmployeeDocumentCategoriesParameterUpdatedAfter");

export type GetHrisEmployeeDocumentCategoriesParameterIncludeDeleted = ("true" | "false")
export const GetHrisEmployeeDocumentCategoriesParameterIncludeDeleted = __schemas.Import("GetHrisEmployeeDocumentCategoriesParameterIncludeDeleted");

export type GetHrisEmployeeDocumentCategoriesParameterIgnoreUnsupportedFilters = ("true" | "false")
export const GetHrisEmployeeDocumentCategoriesParameterIgnoreUnsupportedFilters = __schemas.Import("GetHrisEmployeeDocumentCategoriesParameterIgnoreUnsupportedFilters");

export type GetHrisEmployeeDocumentCategoriesParameterIds = string
export const GetHrisEmployeeDocumentCategoriesParameterIds = __schemas.Import("GetHrisEmployeeDocumentCategoriesParameterIds");

export type GetHrisEmployeeDocumentCategoriesParameterRemoteIds = string
export const GetHrisEmployeeDocumentCategoriesParameterRemoteIds = __schemas.Import("GetHrisEmployeeDocumentCategoriesParameterRemoteIds");

export interface GetHrisEmployeeDocumentCategoriesPositiveResponse { status: "success", data: { next: (string | null), results: Array<{ id: string, remote_id: (string | null), name: (string | null), remote_data: (Record<string, unknown> | null), changed_at: string, remote_deleted_at: (string | null) }> } }
export const GetHrisEmployeeDocumentCategoriesPositiveResponse = __schemas.Import("GetHrisEmployeeDocumentCategoriesPositiveResponse");

export type GetHrisTeamsParameterCursor = string
export const GetHrisTeamsParameterCursor = __schemas.Import("GetHrisTeamsParameterCursor");

export type GetHrisTeamsParameterPageSize = number
export const GetHrisTeamsParameterPageSize = __schemas.Import("GetHrisTeamsParameterPageSize");

export type GetHrisTeamsParameterUpdatedAfter = string
export const GetHrisTeamsParameterUpdatedAfter = __schemas.Import("GetHrisTeamsParameterUpdatedAfter");

export type GetHrisTeamsParameterIncludeDeleted = ("true" | "false")
export const GetHrisTeamsParameterIncludeDeleted = __schemas.Import("GetHrisTeamsParameterIncludeDeleted");

export type GetHrisTeamsParameterIgnoreUnsupportedFilters = ("true" | "false")
export const GetHrisTeamsParameterIgnoreUnsupportedFilters = __schemas.Import("GetHrisTeamsParameterIgnoreUnsupportedFilters");

export type GetHrisTeamsParameterIds = string
export const GetHrisTeamsParameterIds = __schemas.Import("GetHrisTeamsParameterIds");

export type GetHrisTeamsParameterRemoteIds = string
export const GetHrisTeamsParameterRemoteIds = __schemas.Import("GetHrisTeamsParameterRemoteIds");

export interface GetHrisTeamsPositiveResponse { status: "success", data: { next: (string | null), results: Array<{ id: string, remote_id: string, name: (string | null), changed_at: string, remote_deleted_at: (string | null), type: (("DEPARTMENT" | "TEAM" | "COST_CENTER") | null), parent_id: (string | null), remote_data: (Record<string, unknown> | null) }> } }
export const GetHrisTeamsPositiveResponse = __schemas.Import("GetHrisTeamsPositiveResponse");

export type GetHrisGroupsParameterCursor = string
export const GetHrisGroupsParameterCursor = __schemas.Import("GetHrisGroupsParameterCursor");

export type GetHrisGroupsParameterPageSize = number
export const GetHrisGroupsParameterPageSize = __schemas.Import("GetHrisGroupsParameterPageSize");

export type GetHrisGroupsParameterUpdatedAfter = string
export const GetHrisGroupsParameterUpdatedAfter = __schemas.Import("GetHrisGroupsParameterUpdatedAfter");

export type GetHrisGroupsParameterIncludeDeleted = ("true" | "false")
export const GetHrisGroupsParameterIncludeDeleted = __schemas.Import("GetHrisGroupsParameterIncludeDeleted");

export type GetHrisGroupsParameterIgnoreUnsupportedFilters = ("true" | "false")
export const GetHrisGroupsParameterIgnoreUnsupportedFilters = __schemas.Import("GetHrisGroupsParameterIgnoreUnsupportedFilters");

export type GetHrisGroupsParameterIds = string
export const GetHrisGroupsParameterIds = __schemas.Import("GetHrisGroupsParameterIds");

export type GetHrisGroupsParameterRemoteIds = string
export const GetHrisGroupsParameterRemoteIds = __schemas.Import("GetHrisGroupsParameterRemoteIds");

export type GetHrisGroupsParameterTypes = string
export const GetHrisGroupsParameterTypes = __schemas.Import("GetHrisGroupsParameterTypes");

export type GetHrisGroupsParameterNameContains = string
export const GetHrisGroupsParameterNameContains = __schemas.Import("GetHrisGroupsParameterNameContains");

export interface GetHrisGroupsPositiveResponse { status: "success", data: { next: (string | null), results: Array<{ id: string, remote_id: string, name: (string | null), changed_at: string, remote_deleted_at: (string | null), type: (("DEPARTMENT" | "TEAM" | "COST_CENTER") | null), parent_id: (string | null), remote_data: (Record<string, unknown> | null) }> } }
export const GetHrisGroupsPositiveResponse = __schemas.Import("GetHrisGroupsPositiveResponse");

export type GetHrisEmploymentsParameterCursor = string
export const GetHrisEmploymentsParameterCursor = __schemas.Import("GetHrisEmploymentsParameterCursor");

export type GetHrisEmploymentsParameterPageSize = number
export const GetHrisEmploymentsParameterPageSize = __schemas.Import("GetHrisEmploymentsParameterPageSize");

export type GetHrisEmploymentsParameterUpdatedAfter = string
export const GetHrisEmploymentsParameterUpdatedAfter = __schemas.Import("GetHrisEmploymentsParameterUpdatedAfter");

export type GetHrisEmploymentsParameterIncludeDeleted = ("true" | "false")
export const GetHrisEmploymentsParameterIncludeDeleted = __schemas.Import("GetHrisEmploymentsParameterIncludeDeleted");

export type GetHrisEmploymentsParameterIgnoreUnsupportedFilters = ("true" | "false")
export const GetHrisEmploymentsParameterIgnoreUnsupportedFilters = __schemas.Import("GetHrisEmploymentsParameterIgnoreUnsupportedFilters");

export type GetHrisEmploymentsParameterIds = string
export const GetHrisEmploymentsParameterIds = __schemas.Import("GetHrisEmploymentsParameterIds");

export type GetHrisEmploymentsParameterRemoteIds = string
export const GetHrisEmploymentsParameterRemoteIds = __schemas.Import("GetHrisEmploymentsParameterRemoteIds");

export interface GetHrisEmploymentsPositiveResponse { status: "success", data: { next: (string | null), results: Array<{ id: string, remote_id: (string | null), employee_id: string, job_title: (string | null), pay_rate: (number | null), pay_period?: (("HOUR" | "DAY" | "WEEK" | "TWO_WEEKS" | "HALF_MONTH" | "MONTH" | "TWO_MONTHS" | "QUARTER" | "HALF_YEAR" | "YEAR") | string | null), pay_frequency?: (("DAILY" | "WEEKLY" | "BIWEEKLY" | "MONTHLY" | "SEMIMONTHLY" | "QUARTERLY" | "SEMIANNUALLY" | "ANNUALLY" | "PRO_RATA") | string | null), employment_type?: (("FULL_TIME" | "PART_TIME" | "CONTRACT" | "INTERNSHIP" | "FREELANCE" | "WORKING_STUDENT" | "APPRENTICESHIP" | "TRAINING") | string | null), pay_currency: (string | null), effective_date: (string | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }> }> } }
export const GetHrisEmploymentsPositiveResponse = __schemas.Import("GetHrisEmploymentsPositiveResponse");

export type GetHrisLocationsParameterCursor = string
export const GetHrisLocationsParameterCursor = __schemas.Import("GetHrisLocationsParameterCursor");

export type GetHrisLocationsParameterPageSize = number
export const GetHrisLocationsParameterPageSize = __schemas.Import("GetHrisLocationsParameterPageSize");

export type GetHrisLocationsParameterUpdatedAfter = string
export const GetHrisLocationsParameterUpdatedAfter = __schemas.Import("GetHrisLocationsParameterUpdatedAfter");

export type GetHrisLocationsParameterIncludeDeleted = ("true" | "false")
export const GetHrisLocationsParameterIncludeDeleted = __schemas.Import("GetHrisLocationsParameterIncludeDeleted");

export type GetHrisLocationsParameterIgnoreUnsupportedFilters = ("true" | "false")
export const GetHrisLocationsParameterIgnoreUnsupportedFilters = __schemas.Import("GetHrisLocationsParameterIgnoreUnsupportedFilters");

export type GetHrisLocationsParameterIds = string
export const GetHrisLocationsParameterIds = __schemas.Import("GetHrisLocationsParameterIds");

export type GetHrisLocationsParameterRemoteIds = string
export const GetHrisLocationsParameterRemoteIds = __schemas.Import("GetHrisLocationsParameterRemoteIds");

export type GetHrisLocationsParameterNameContains = string
export const GetHrisLocationsParameterNameContains = __schemas.Import("GetHrisLocationsParameterNameContains");

export interface GetHrisLocationsPositiveResponse { status: "success", data: { next: (string | null), results: Array<{ id: string, remote_id: (string | null), name: (string | null), address?: (Partial<{ city: (string | null), country: (string | null), raw: (string | null), state: (string | null), street_1: (string | null), street_2: (string | null), zip_code: (string | null) }> | null), type: (string | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null) }> } }
export const GetHrisLocationsPositiveResponse = __schemas.Import("GetHrisLocationsPositiveResponse");

export type GetHrisAbsenceTypesParameterCursor = string
export const GetHrisAbsenceTypesParameterCursor = __schemas.Import("GetHrisAbsenceTypesParameterCursor");

export type GetHrisAbsenceTypesParameterPageSize = number
export const GetHrisAbsenceTypesParameterPageSize = __schemas.Import("GetHrisAbsenceTypesParameterPageSize");

export type GetHrisAbsenceTypesParameterUpdatedAfter = string
export const GetHrisAbsenceTypesParameterUpdatedAfter = __schemas.Import("GetHrisAbsenceTypesParameterUpdatedAfter");

export type GetHrisAbsenceTypesParameterIncludeDeleted = ("true" | "false")
export const GetHrisAbsenceTypesParameterIncludeDeleted = __schemas.Import("GetHrisAbsenceTypesParameterIncludeDeleted");

export type GetHrisAbsenceTypesParameterIgnoreUnsupportedFilters = ("true" | "false")
export const GetHrisAbsenceTypesParameterIgnoreUnsupportedFilters = __schemas.Import("GetHrisAbsenceTypesParameterIgnoreUnsupportedFilters");

export type GetHrisAbsenceTypesParameterIds = string
export const GetHrisAbsenceTypesParameterIds = __schemas.Import("GetHrisAbsenceTypesParameterIds");

export type GetHrisAbsenceTypesParameterRemoteIds = string
export const GetHrisAbsenceTypesParameterRemoteIds = __schemas.Import("GetHrisAbsenceTypesParameterRemoteIds");

export interface GetHrisAbsenceTypesPositiveResponse { status: "success", data: { next: (string | null), results: Array<{ id: string, remote_id: string, name: (string | null), unit: (("HOURS" | "DAYS") | null), half_days_supported: (boolean | null), exact_times_supported: (boolean | null), remote_data: (Record<string, unknown> | null), changed_at: string, remote_deleted_at: (string | null) }> } }
export const GetHrisAbsenceTypesPositiveResponse = __schemas.Import("GetHrisAbsenceTypesPositiveResponse");

export type GetHrisTimeOffBalancesParameterCursor = string
export const GetHrisTimeOffBalancesParameterCursor = __schemas.Import("GetHrisTimeOffBalancesParameterCursor");

export type GetHrisTimeOffBalancesParameterPageSize = number
export const GetHrisTimeOffBalancesParameterPageSize = __schemas.Import("GetHrisTimeOffBalancesParameterPageSize");

export type GetHrisTimeOffBalancesParameterUpdatedAfter = string
export const GetHrisTimeOffBalancesParameterUpdatedAfter = __schemas.Import("GetHrisTimeOffBalancesParameterUpdatedAfter");

export type GetHrisTimeOffBalancesParameterIncludeDeleted = ("true" | "false")
export const GetHrisTimeOffBalancesParameterIncludeDeleted = __schemas.Import("GetHrisTimeOffBalancesParameterIncludeDeleted");

export type GetHrisTimeOffBalancesParameterIgnoreUnsupportedFilters = ("true" | "false")
export const GetHrisTimeOffBalancesParameterIgnoreUnsupportedFilters = __schemas.Import("GetHrisTimeOffBalancesParameterIgnoreUnsupportedFilters");

export type GetHrisTimeOffBalancesParameterIds = string
export const GetHrisTimeOffBalancesParameterIds = __schemas.Import("GetHrisTimeOffBalancesParameterIds");

export type GetHrisTimeOffBalancesParameterRemoteIds = string
export const GetHrisTimeOffBalancesParameterRemoteIds = __schemas.Import("GetHrisTimeOffBalancesParameterRemoteIds");

export type GetHrisTimeOffBalancesParameterEmployeeId = string
export const GetHrisTimeOffBalancesParameterEmployeeId = __schemas.Import("GetHrisTimeOffBalancesParameterEmployeeId");

export interface GetHrisTimeOffBalancesPositiveResponse { status: "success", data: { next: (string | null), results: Array<{ id: string, remote_id: (string | null), employee_id: string, type_id: string, balance: (number | null), balance_unit: (("HOURS" | "DAYS") | null), changed_at: string, remote_deleted_at: (string | null), used: (number | null), used_unit: (("HOURS" | "DAYS") | null), remote_data: (Record<string, unknown> | null), type: { id: string, remote_id: string, name: (string | null), unit: (("HOURS" | "DAYS") | null), half_days_supported: (boolean | null), exact_times_supported: (boolean | null), remote_data: (Record<string, unknown> | null), changed_at: string, remote_deleted_at: (string | null) } }> } }
export const GetHrisTimeOffBalancesPositiveResponse = __schemas.Import("GetHrisTimeOffBalancesPositiveResponse");

export type GetHrisAbsencesParameterCursor = string
export const GetHrisAbsencesParameterCursor = __schemas.Import("GetHrisAbsencesParameterCursor");

export type GetHrisAbsencesParameterPageSize = number
export const GetHrisAbsencesParameterPageSize = __schemas.Import("GetHrisAbsencesParameterPageSize");

export type GetHrisAbsencesParameterUpdatedAfter = string
export const GetHrisAbsencesParameterUpdatedAfter = __schemas.Import("GetHrisAbsencesParameterUpdatedAfter");

export type GetHrisAbsencesParameterIncludeDeleted = ("true" | "false")
export const GetHrisAbsencesParameterIncludeDeleted = __schemas.Import("GetHrisAbsencesParameterIncludeDeleted");

export type GetHrisAbsencesParameterIgnoreUnsupportedFilters = ("true" | "false")
export const GetHrisAbsencesParameterIgnoreUnsupportedFilters = __schemas.Import("GetHrisAbsencesParameterIgnoreUnsupportedFilters");

export type GetHrisAbsencesParameterIds = string
export const GetHrisAbsencesParameterIds = __schemas.Import("GetHrisAbsencesParameterIds");

export type GetHrisAbsencesParameterRemoteIds = string
export const GetHrisAbsencesParameterRemoteIds = __schemas.Import("GetHrisAbsencesParameterRemoteIds");

export type GetHrisAbsencesParameterDateFrom = string
export const GetHrisAbsencesParameterDateFrom = __schemas.Import("GetHrisAbsencesParameterDateFrom");

export type GetHrisAbsencesParameterDateUntil = string
export const GetHrisAbsencesParameterDateUntil = __schemas.Import("GetHrisAbsencesParameterDateUntil");

export type GetHrisAbsencesParameterTypeIds = string
export const GetHrisAbsencesParameterTypeIds = __schemas.Import("GetHrisAbsencesParameterTypeIds");

export type GetHrisAbsencesParameterEmployeeId = string
export const GetHrisAbsencesParameterEmployeeId = __schemas.Import("GetHrisAbsencesParameterEmployeeId");

export type GetHrisAbsencesParameterTimeFrom = string
export const GetHrisAbsencesParameterTimeFrom = __schemas.Import("GetHrisAbsencesParameterTimeFrom");

export type GetHrisAbsencesParameterTimeUntil = string
export const GetHrisAbsencesParameterTimeUntil = __schemas.Import("GetHrisAbsencesParameterTimeUntil");

export interface GetHrisAbsencesPositiveResponse { status: "success", data: { next: (string | null), results: Array<{ id: string, remote_id: (string | null), employee_id: string, approver_id: (string | null), start_date: null, end_date: null, start_half_day: (boolean | null), end_half_day: (boolean | null), start_time: null, end_time: null, amount: (number | null), unit: (("HOURS" | "DAYS") | null), status?: (("REQUESTED" | "APPROVED" | "DECLINED" | "CANCELLED" | "DELETED") | string | null), employee_note: (string | null), type_id: (string | null), remote_created_at: (string | null), remote_updated_at: (string | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null), type: ({ id: string, remote_id: string, name: (string | null), unit: (("HOURS" | "DAYS") | null), half_days_supported: (boolean | null), exact_times_supported: (boolean | null), remote_data: (Record<string, unknown> | null), changed_at: string, remote_deleted_at: (string | null) } | null) }> } }
export const GetHrisAbsencesPositiveResponse = __schemas.Import("GetHrisAbsencesPositiveResponse");

export interface PostHrisAbsencesPositiveResponse { status: "success", data: { id: string, remote_id: (string | null), employee_id: string, approver_id: (string | null), start_date: null, end_date: null, start_half_day: (boolean | null), end_half_day: (boolean | null), start_time: null, end_time: null, amount: (number | null), unit: (("HOURS" | "DAYS") | null), status?: (("REQUESTED" | "APPROVED" | "DECLINED" | "CANCELLED" | "DELETED") | string | null), employee_note: (string | null), type_id: (string | null), remote_created_at: (string | null), remote_updated_at: (string | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null) }, warnings: Array<{ message: string }> }
export const PostHrisAbsencesPositiveResponse = __schemas.Import("PostHrisAbsencesPositiveResponse");

export interface PostHrisAbsencesRequestBody { employee_id: string, absence_type_id: string, status?: ("REQUESTED" | "APPROVED"), start_date: string, end_date: string, start_half_day?: boolean, end_half_day?: boolean, amount?: number, unit?: ("HOURS" | "DAYS"), employee_note: (string | null), start_time?: string, end_time?: string, remote_fields?: Partial<{ a3innuvanomina: Partial<{ benefit_type_id: ("Delegated Payment" | "No Right to Benefit" | "Direct payment") }>, adpworkforcenow: Partial<{ employment_id: string, paid_leave: boolean }> }> }
export const PostHrisAbsencesRequestBody = __schemas.Import("PostHrisAbsencesRequestBody");

export type DeleteHrisAbsencesAbsenceIdParameterAbsenceId = string
export const DeleteHrisAbsencesAbsenceIdParameterAbsenceId = __schemas.Import("DeleteHrisAbsencesAbsenceIdParameterAbsenceId");

export interface DeleteHrisAbsencesAbsenceIdPositiveResponse { status: "success", data: { id: string, remote_id: (string | null), employee_id: string, approver_id: (string | null), start_date: null, end_date: null, start_half_day: (boolean | null), end_half_day: (boolean | null), start_time: null, end_time: null, amount: (number | null), unit: (("HOURS" | "DAYS") | null), status?: (("REQUESTED" | "APPROVED" | "DECLINED" | "CANCELLED" | "DELETED") | string | null), employee_note: (string | null), type_id: (string | null), remote_created_at: (string | null), remote_updated_at: (string | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null) }, warnings: Array<{ message: string }> }
export const DeleteHrisAbsencesAbsenceIdPositiveResponse = __schemas.Import("DeleteHrisAbsencesAbsenceIdPositiveResponse");

export type DeleteHrisAbsencesAbsenceIdRequestBody = Partial<{ remote_fields: Partial<{ adpworkforcenow: Partial<{ employment_id: string }> }> }>
export const DeleteHrisAbsencesAbsenceIdRequestBody = __schemas.Import("DeleteHrisAbsencesAbsenceIdRequestBody");

export type GetHrisLegalEntitiesParameterCursor = string
export const GetHrisLegalEntitiesParameterCursor = __schemas.Import("GetHrisLegalEntitiesParameterCursor");

export type GetHrisLegalEntitiesParameterPageSize = number
export const GetHrisLegalEntitiesParameterPageSize = __schemas.Import("GetHrisLegalEntitiesParameterPageSize");

export type GetHrisLegalEntitiesParameterUpdatedAfter = string
export const GetHrisLegalEntitiesParameterUpdatedAfter = __schemas.Import("GetHrisLegalEntitiesParameterUpdatedAfter");

export type GetHrisLegalEntitiesParameterIncludeDeleted = ("true" | "false")
export const GetHrisLegalEntitiesParameterIncludeDeleted = __schemas.Import("GetHrisLegalEntitiesParameterIncludeDeleted");

export type GetHrisLegalEntitiesParameterIgnoreUnsupportedFilters = ("true" | "false")
export const GetHrisLegalEntitiesParameterIgnoreUnsupportedFilters = __schemas.Import("GetHrisLegalEntitiesParameterIgnoreUnsupportedFilters");

export type GetHrisLegalEntitiesParameterIds = string
export const GetHrisLegalEntitiesParameterIds = __schemas.Import("GetHrisLegalEntitiesParameterIds");

export type GetHrisLegalEntitiesParameterRemoteIds = string
export const GetHrisLegalEntitiesParameterRemoteIds = __schemas.Import("GetHrisLegalEntitiesParameterRemoteIds");

export type GetHrisLegalEntitiesParameterNameContains = string
export const GetHrisLegalEntitiesParameterNameContains = __schemas.Import("GetHrisLegalEntitiesParameterNameContains");

export interface GetHrisLegalEntitiesPositiveResponse { status: "success", data: { next: (string | null), results: Array<{ id: string, remote_id: (string | null), name: (string | null), address?: (Partial<{ city: (string | null), country: (string | null), raw: (string | null), state: (string | null), street_1: (string | null), street_2: (string | null), zip_code: (string | null) }> | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null) }> } }
export const GetHrisLegalEntitiesPositiveResponse = __schemas.Import("GetHrisLegalEntitiesPositiveResponse");

export type GetHrisTimesheetsParameterCursor = string
export const GetHrisTimesheetsParameterCursor = __schemas.Import("GetHrisTimesheetsParameterCursor");

export type GetHrisTimesheetsParameterPageSize = number
export const GetHrisTimesheetsParameterPageSize = __schemas.Import("GetHrisTimesheetsParameterPageSize");

export type GetHrisTimesheetsParameterUpdatedAfter = string
export const GetHrisTimesheetsParameterUpdatedAfter = __schemas.Import("GetHrisTimesheetsParameterUpdatedAfter");

export type GetHrisTimesheetsParameterIncludeDeleted = ("true" | "false")
export const GetHrisTimesheetsParameterIncludeDeleted = __schemas.Import("GetHrisTimesheetsParameterIncludeDeleted");

export type GetHrisTimesheetsParameterIgnoreUnsupportedFilters = ("true" | "false")
export const GetHrisTimesheetsParameterIgnoreUnsupportedFilters = __schemas.Import("GetHrisTimesheetsParameterIgnoreUnsupportedFilters");

export type GetHrisTimesheetsParameterIds = string
export const GetHrisTimesheetsParameterIds = __schemas.Import("GetHrisTimesheetsParameterIds");

export type GetHrisTimesheetsParameterRemoteIds = string
export const GetHrisTimesheetsParameterRemoteIds = __schemas.Import("GetHrisTimesheetsParameterRemoteIds");

export type GetHrisTimesheetsParameterEmployeeId = string
export const GetHrisTimesheetsParameterEmployeeId = __schemas.Import("GetHrisTimesheetsParameterEmployeeId");

export type GetHrisTimesheetsParameterStartedBefore = string
export const GetHrisTimesheetsParameterStartedBefore = __schemas.Import("GetHrisTimesheetsParameterStartedBefore");

export type GetHrisTimesheetsParameterStartedAfter = string
export const GetHrisTimesheetsParameterStartedAfter = __schemas.Import("GetHrisTimesheetsParameterStartedAfter");

export type GetHrisTimesheetsParameterEndedBefore = string
export const GetHrisTimesheetsParameterEndedBefore = __schemas.Import("GetHrisTimesheetsParameterEndedBefore");

export type GetHrisTimesheetsParameterEndedAfter = string
export const GetHrisTimesheetsParameterEndedAfter = __schemas.Import("GetHrisTimesheetsParameterEndedAfter");

export interface GetHrisTimesheetsPositiveResponse { status: "success", data: { next: (string | null), results: Array<{ id: string, remote_id: (string | null), employee_id: string, started_at: (string | null), ended_at: (string | null), timezone: (string | null), payable_hours: (number | null), unpaid_break_minutes: (number | null), breaks?: (Array<{ ended_at: (string | string), paid: boolean, started_at: (string | string) }> | null), approval_status: (string | null), approved_at: (string | null), comment: (string | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }>, changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null) }> } }
export const GetHrisTimesheetsPositiveResponse = __schemas.Import("GetHrisTimesheetsPositiveResponse");

export type GetHrisPerformanceReviewCyclesParameterCursor = string
export const GetHrisPerformanceReviewCyclesParameterCursor = __schemas.Import("GetHrisPerformanceReviewCyclesParameterCursor");

export type GetHrisPerformanceReviewCyclesParameterPageSize = number
export const GetHrisPerformanceReviewCyclesParameterPageSize = __schemas.Import("GetHrisPerformanceReviewCyclesParameterPageSize");

export type GetHrisPerformanceReviewCyclesParameterUpdatedAfter = string
export const GetHrisPerformanceReviewCyclesParameterUpdatedAfter = __schemas.Import("GetHrisPerformanceReviewCyclesParameterUpdatedAfter");

export type GetHrisPerformanceReviewCyclesParameterIncludeDeleted = ("true" | "false")
export const GetHrisPerformanceReviewCyclesParameterIncludeDeleted = __schemas.Import("GetHrisPerformanceReviewCyclesParameterIncludeDeleted");

export type GetHrisPerformanceReviewCyclesParameterIgnoreUnsupportedFilters = ("true" | "false")
export const GetHrisPerformanceReviewCyclesParameterIgnoreUnsupportedFilters = __schemas.Import("GetHrisPerformanceReviewCyclesParameterIgnoreUnsupportedFilters");

export type GetHrisPerformanceReviewCyclesParameterIds = string
export const GetHrisPerformanceReviewCyclesParameterIds = __schemas.Import("GetHrisPerformanceReviewCyclesParameterIds");

export type GetHrisPerformanceReviewCyclesParameterRemoteIds = string
export const GetHrisPerformanceReviewCyclesParameterRemoteIds = __schemas.Import("GetHrisPerformanceReviewCyclesParameterRemoteIds");

export interface GetHrisPerformanceReviewCyclesPositiveResponse { status: "success", data: { next: (string | null), results: Array<{ id: string, remote_id: string, name: (string | null), review_period_start_date: (string | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null) }> } }
export const GetHrisPerformanceReviewCyclesPositiveResponse = __schemas.Import("GetHrisPerformanceReviewCyclesPositiveResponse");

export type GetHrisPerformanceReviewsParameterCursor = string
export const GetHrisPerformanceReviewsParameterCursor = __schemas.Import("GetHrisPerformanceReviewsParameterCursor");

export type GetHrisPerformanceReviewsParameterPageSize = number
export const GetHrisPerformanceReviewsParameterPageSize = __schemas.Import("GetHrisPerformanceReviewsParameterPageSize");

export type GetHrisPerformanceReviewsParameterUpdatedAfter = string
export const GetHrisPerformanceReviewsParameterUpdatedAfter = __schemas.Import("GetHrisPerformanceReviewsParameterUpdatedAfter");

export type GetHrisPerformanceReviewsParameterIncludeDeleted = ("true" | "false")
export const GetHrisPerformanceReviewsParameterIncludeDeleted = __schemas.Import("GetHrisPerformanceReviewsParameterIncludeDeleted");

export type GetHrisPerformanceReviewsParameterIgnoreUnsupportedFilters = ("true" | "false")
export const GetHrisPerformanceReviewsParameterIgnoreUnsupportedFilters = __schemas.Import("GetHrisPerformanceReviewsParameterIgnoreUnsupportedFilters");

export type GetHrisPerformanceReviewsParameterIds = string
export const GetHrisPerformanceReviewsParameterIds = __schemas.Import("GetHrisPerformanceReviewsParameterIds");

export type GetHrisPerformanceReviewsParameterRemoteIds = string
export const GetHrisPerformanceReviewsParameterRemoteIds = __schemas.Import("GetHrisPerformanceReviewsParameterRemoteIds");

export type GetHrisPerformanceReviewsParameterTypes = string
export const GetHrisPerformanceReviewsParameterTypes = __schemas.Import("GetHrisPerformanceReviewsParameterTypes");

export type GetHrisPerformanceReviewsParameterReviewCycleIds = string
export const GetHrisPerformanceReviewsParameterReviewCycleIds = __schemas.Import("GetHrisPerformanceReviewsParameterReviewCycleIds");

export type GetHrisPerformanceReviewsParameterRevieweeIds = string
export const GetHrisPerformanceReviewsParameterRevieweeIds = __schemas.Import("GetHrisPerformanceReviewsParameterRevieweeIds");

export interface GetHrisPerformanceReviewsPositiveResponse { status: "success", data: { next: (string | null), results: Array<{ id: string, remote_id: string, type: (("MANAGER" | "DIRECT_REPORT" | "PEER" | "SELF") | null), summary_comment: (string | null), summary_rating?: ({ type: "NUMERIC", min: (number | null), max: (number | null), value: (number | null) } | { type: "SINGLE_SELECT", ordered_options: (Array<string> | null), value: (string | null) } | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null), reviewee: { id: string, remote_id: string, first_name: (string | null), last_name: (string | null), display_full_name: (string | null), work_email?: (string | null), remote_deleted_at: (string | null) }, reviewer: ({ id: string, remote_id: string, first_name: (string | null), last_name: (string | null), display_full_name: (string | null), work_email?: (string | null), remote_deleted_at: (string | null) } | null), review_cycle: ({ id: string, remote_id: string, name: (string | null), review_period_start_date: (string | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null) } | null) }> } }
export const GetHrisPerformanceReviewsPositiveResponse = __schemas.Import("GetHrisPerformanceReviewsPositiveResponse");

export type GetHrisSkillsParameterIds = string
export const GetHrisSkillsParameterIds = __schemas.Import("GetHrisSkillsParameterIds");

export type GetHrisSkillsParameterRemoteIds = string
export const GetHrisSkillsParameterRemoteIds = __schemas.Import("GetHrisSkillsParameterRemoteIds");

export type GetHrisSkillsParameterNameContains = string
export const GetHrisSkillsParameterNameContains = __schemas.Import("GetHrisSkillsParameterNameContains");

export interface GetHrisSkillsPositiveResponse { status: "success", data: { next: (string | null), results: Array<{ id: string, remote_id: string, name: string, description: (string | null), ordered_levels: (Array<string> | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null) }> } }
export const GetHrisSkillsPositiveResponse = __schemas.Import("GetHrisSkillsPositiveResponse");

export interface PostHrisSkillsPositiveResponse { status: "success", data: { id: string, remote_id: string, name: string, description: (string | null), ordered_levels: (Array<string> | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null) } }
export const PostHrisSkillsPositiveResponse = __schemas.Import("PostHrisSkillsPositiveResponse");

export interface PostHrisSkillsRequestBody { name: string, levels?: Array<string> }
export const PostHrisSkillsRequestBody = __schemas.Import("PostHrisSkillsRequestBody");

export type PatchHrisSkillsSkillIdParameterSkillId = string
export const PatchHrisSkillsSkillIdParameterSkillId = __schemas.Import("PatchHrisSkillsSkillIdParameterSkillId");

export interface PatchHrisSkillsSkillIdPositiveResponse { status: "success", data: { id: string, remote_id: string, name: string, description: (string | null), ordered_levels: (Array<string> | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null) } }
export const PatchHrisSkillsSkillIdPositiveResponse = __schemas.Import("PatchHrisSkillsSkillIdPositiveResponse");

export type PatchHrisSkillsSkillIdRequestBody = Partial<{ name: string, levels: Array<string> }>
export const PatchHrisSkillsSkillIdRequestBody = __schemas.Import("PatchHrisSkillsSkillIdRequestBody");

export type DeleteHrisSkillsSkillIdParameterSkillId = string
export const DeleteHrisSkillsSkillIdParameterSkillId = __schemas.Import("DeleteHrisSkillsSkillIdParameterSkillId");

export interface DeleteHrisSkillsSkillIdPositiveResponse { status: "success", data: { id: string, remote_id: string, name: string, description: (string | null), ordered_levels: (Array<string> | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null) } }
export const DeleteHrisSkillsSkillIdPositiveResponse = __schemas.Import("DeleteHrisSkillsSkillIdPositiveResponse");

export type DeleteHrisSkillsSkillIdRequestBody = Partial<{  }>
export const DeleteHrisSkillsSkillIdRequestBody = __schemas.Import("DeleteHrisSkillsSkillIdRequestBody");

export type GetHrisEmployeeSkillAssignmentsParameterIds = string
export const GetHrisEmployeeSkillAssignmentsParameterIds = __schemas.Import("GetHrisEmployeeSkillAssignmentsParameterIds");

export type GetHrisEmployeeSkillAssignmentsParameterRemoteIds = string
export const GetHrisEmployeeSkillAssignmentsParameterRemoteIds = __schemas.Import("GetHrisEmployeeSkillAssignmentsParameterRemoteIds");

export type GetHrisEmployeeSkillAssignmentsParameterEmployeeIds = string
export const GetHrisEmployeeSkillAssignmentsParameterEmployeeIds = __schemas.Import("GetHrisEmployeeSkillAssignmentsParameterEmployeeIds");

export type GetHrisEmployeeSkillAssignmentsParameterSkillIds = string
export const GetHrisEmployeeSkillAssignmentsParameterSkillIds = __schemas.Import("GetHrisEmployeeSkillAssignmentsParameterSkillIds");

export interface GetHrisEmployeeSkillAssignmentsPositiveResponse { status: "success", data: { next: (string | null), results: Array<{ id: string, employee_id: string, skill_id: string, current_level: (string | null) }> } }
export const GetHrisEmployeeSkillAssignmentsPositiveResponse = __schemas.Import("GetHrisEmployeeSkillAssignmentsPositiveResponse");

export interface PostHrisEmployeeSkillAssignmentsPositiveResponse { status: "success", data: { id: string, employee_id: string, skill_id: string, current_level: (string | null) } }
export const PostHrisEmployeeSkillAssignmentsPositiveResponse = __schemas.Import("PostHrisEmployeeSkillAssignmentsPositiveResponse");

export interface PostHrisEmployeeSkillAssignmentsRequestBody { employee_id: string, skill_id: string, current_level?: string }
export const PostHrisEmployeeSkillAssignmentsRequestBody = __schemas.Import("PostHrisEmployeeSkillAssignmentsRequestBody");

export type PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId = string
export const PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId = __schemas.Import("PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId");

export interface PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse { status: "success", data: { id: string, employee_id: string, skill_id: string, current_level: (string | null) } }
export const PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse = __schemas.Import("PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse");

export interface PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody { current_level: (string | null) }
export const PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody = __schemas.Import("PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody");

export type DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId = string
export const DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId = __schemas.Import("DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId");

export interface DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse { status: "success", data: { id: string, employee_id: string, skill_id: string, current_level: (string | null) } }
export const DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse = __schemas.Import("DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse");

export type DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody = Partial<{  }>
export const DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody = __schemas.Import("DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody");

export type GetHrisStaffingEntitiesParameterCursor = string
export const GetHrisStaffingEntitiesParameterCursor = __schemas.Import("GetHrisStaffingEntitiesParameterCursor");

export type GetHrisStaffingEntitiesParameterPageSize = number
export const GetHrisStaffingEntitiesParameterPageSize = __schemas.Import("GetHrisStaffingEntitiesParameterPageSize");

export type GetHrisStaffingEntitiesParameterUpdatedAfter = string
export const GetHrisStaffingEntitiesParameterUpdatedAfter = __schemas.Import("GetHrisStaffingEntitiesParameterUpdatedAfter");

export type GetHrisStaffingEntitiesParameterIncludeDeleted = ("true" | "false")
export const GetHrisStaffingEntitiesParameterIncludeDeleted = __schemas.Import("GetHrisStaffingEntitiesParameterIncludeDeleted");

export type GetHrisStaffingEntitiesParameterIgnoreUnsupportedFilters = ("true" | "false")
export const GetHrisStaffingEntitiesParameterIgnoreUnsupportedFilters = __schemas.Import("GetHrisStaffingEntitiesParameterIgnoreUnsupportedFilters");

export type GetHrisStaffingEntitiesParameterIds = string
export const GetHrisStaffingEntitiesParameterIds = __schemas.Import("GetHrisStaffingEntitiesParameterIds");

export type GetHrisStaffingEntitiesParameterRemoteIds = string
export const GetHrisStaffingEntitiesParameterRemoteIds = __schemas.Import("GetHrisStaffingEntitiesParameterRemoteIds");

export type GetHrisStaffingEntitiesParameterModelTypes = string
export const GetHrisStaffingEntitiesParameterModelTypes = __schemas.Import("GetHrisStaffingEntitiesParameterModelTypes");

export type GetHrisStaffingEntitiesParameterStatuses = string
export const GetHrisStaffingEntitiesParameterStatuses = __schemas.Import("GetHrisStaffingEntitiesParameterStatuses");

export interface GetHrisStaffingEntitiesPositiveResponse { status: "success", data: { next: (string | null), results: Array<{ id: string, remote_id: string, name: (string | null), model_type: (("JOB" | "POSITION" | "REQUISITION") | null), description: (string | null), status: (("OPEN_LIMITED" | "OPEN_UNLIMITED" | "PENDING" | "FROZEN" | "FILLED" | "CLOSED") | null), employment_types?: (Array<{ remote_label: string, unified_type: (("FULL_TIME" | "PART_TIME" | "CONTRACT" | "INTERNSHIP" | "FREELANCE" | "WORKING_STUDENT" | "APPRENTICESHIP" | "TRAINING") | null) }> | null), number_of_openings: (number | null), parent_id: (string | null), remote_url: (string | null), remote_created_at: (string | null), remote_updated_at: (string | null), changed_at: string, remote_deleted_at: (string | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }>, remote_data: (Record<string, unknown> | null), locations: Array<{ id: string, remote_id: (string | null), name: (string | null), type: (string | null) }>, legal_entities: Array<{ id: string, remote_id: (string | null), name: (string | null) }>, groups: Array<{ id: string, remote_id: string, name: (string | null), type: (("DEPARTMENT" | "TEAM" | "COST_CENTER") | null) }> }> } }
export const GetHrisStaffingEntitiesPositiveResponse = __schemas.Import("GetHrisStaffingEntitiesPositiveResponse");

export type GetAtsApplicationsParameterCursor = string
export const GetAtsApplicationsParameterCursor = __schemas.Import("GetAtsApplicationsParameterCursor");

export type GetAtsApplicationsParameterPageSize = number
export const GetAtsApplicationsParameterPageSize = __schemas.Import("GetAtsApplicationsParameterPageSize");

export type GetAtsApplicationsParameterUpdatedAfter = string
export const GetAtsApplicationsParameterUpdatedAfter = __schemas.Import("GetAtsApplicationsParameterUpdatedAfter");

export type GetAtsApplicationsParameterIncludeDeleted = ("true" | "false")
export const GetAtsApplicationsParameterIncludeDeleted = __schemas.Import("GetAtsApplicationsParameterIncludeDeleted");

export type GetAtsApplicationsParameterIgnoreUnsupportedFilters = ("true" | "false")
export const GetAtsApplicationsParameterIgnoreUnsupportedFilters = __schemas.Import("GetAtsApplicationsParameterIgnoreUnsupportedFilters");

export type GetAtsApplicationsParameterIds = string
export const GetAtsApplicationsParameterIds = __schemas.Import("GetAtsApplicationsParameterIds");

export type GetAtsApplicationsParameterRemoteIds = string
export const GetAtsApplicationsParameterRemoteIds = __schemas.Import("GetAtsApplicationsParameterRemoteIds");

export type GetAtsApplicationsParameterOutcome = ("PENDING" | "HIRED" | "DECLINED")
export const GetAtsApplicationsParameterOutcome = __schemas.Import("GetAtsApplicationsParameterOutcome");

export type GetAtsApplicationsParameterOutcomes = string
export const GetAtsApplicationsParameterOutcomes = __schemas.Import("GetAtsApplicationsParameterOutcomes");

export type GetAtsApplicationsParameterJobIds = string
export const GetAtsApplicationsParameterJobIds = __schemas.Import("GetAtsApplicationsParameterJobIds");

export type GetAtsApplicationsParameterJobRemoteIds = string
export const GetAtsApplicationsParameterJobRemoteIds = __schemas.Import("GetAtsApplicationsParameterJobRemoteIds");

export type GetAtsApplicationsParameterCurrentStageIds = string
export const GetAtsApplicationsParameterCurrentStageIds = __schemas.Import("GetAtsApplicationsParameterCurrentStageIds");

export type GetAtsApplicationsParameterRemoteCreatedAfter = string
export const GetAtsApplicationsParameterRemoteCreatedAfter = __schemas.Import("GetAtsApplicationsParameterRemoteCreatedAfter");

export interface GetAtsApplicationsPositiveResponse { status: "success", data: { next: (string | null), results: Array<{ id: string, remote_id: (string | null), outcome: (("PENDING" | "HIRED" | "DECLINED") | null), rejection_reason_name: (string | null), rejected_at: (string | null), current_stage_id: (string | null), job_id: (string | null), candidate_id: (string | null), screening_question_answers?: (Array<({ answer: { content: (string | null) }, question: { remote_id: (string | null), title: string, type: "TEXT" } } | { answer: { choice: (string | null) }, question: { remote_id: (string | null), title: string, type: "SINGLE_SELECT" } } | { answer: Partial<{ choices: Array<string> }>, question: { remote_id: (string | null), title: string, type: "MULTI_SELECT" } } | { answer: { checked: (boolean | null) }, question: { remote_id: (string | null), title: string, type: "BOOLEAN" } } | { answer: { number: (number | null) }, question: { remote_id: (string | null), title: string, type: "NUMBER" } } | { answer: { date: (string | null) }, question: { remote_id: (string | null), title: string, type: "DATE" } } | { answer: Partial<{ raw: null }>, question: { remote_id: (string | null), title: string, type: "UNKNOWN" } })> | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }>, remote_url: (string | null), changed_at: string, remote_deleted_at: (string | null), remote_created_at: (string | null), remote_updated_at: (string | null), remote_data: (Record<string, unknown> | null), candidate: ({ id: string, remote_id: string, first_name: (string | null), last_name: (string | null), email_addresses?: (Array<{ email_address?: (string | null), type: (string | null) }> | null), phone_numbers?: (Array<{ phone_number: string, type?: (string | null) }> | null), social_media?: (Array<Partial<{ link: (string | null), type: (string | null), username: (string | null) }>> | null), source: (string | null), remote_url: (string | null), tags: Array<{ id: string, remote_id: (string | null), name: (string | null) }> } | null), current_stage: ({ id: string, remote_id: (string | null), name: (string | null), index: (number | null) } | null), job: ({ id: string, remote_id: string, name: (string | null) } | null), interviews: Array<{ id: string, remote_id: (string | null), title: (string | null), starting_at: (string | null), ending_at: (string | null), location?: (Partial<{ city: (string | null), country: (string | null), raw: (string | null), state: (string | null), street_1: (string | null), street_2: (string | null), zip_code: (string | null) }> | null), canceled: (boolean | null) }>, offers: Array<{ id: string, remote_id: (string | null), status: (("ACCEPTED" | "DECLINED" | "SENT" | "APPROVED" | "DRAFT" | "ABANDONED") | null) }> }> } }
export const GetAtsApplicationsPositiveResponse = __schemas.Import("GetAtsApplicationsPositiveResponse");

export type PutAtsApplicationsApplicationIdStageParameterApplicationId = string
export const PutAtsApplicationsApplicationIdStageParameterApplicationId = __schemas.Import("PutAtsApplicationsApplicationIdStageParameterApplicationId");

export interface PutAtsApplicationsApplicationIdStagePositiveResponse { status: "success", data: Record<string, unknown>, warnings: Array<{ message: string }> }
export const PutAtsApplicationsApplicationIdStagePositiveResponse = __schemas.Import("PutAtsApplicationsApplicationIdStagePositiveResponse");

export interface PutAtsApplicationsApplicationIdStageRequestBody { stage_id: string, remote_fields?: (Partial<{ workday: Partial<{ Workflow_Step_ID: string, Step_Type: ("Next_Step_Reference" | "Disposition_Step_Reference") }> }> & Partial<{ greenhouse: Partial<{ post_headers: Partial<{ "On-Behalf-Of": (string | null) }> }>, workable: Partial<{ on_behalf_of_user_remote_id: string }> }>) }
export const PutAtsApplicationsApplicationIdStageRequestBody = __schemas.Import("PutAtsApplicationsApplicationIdStageRequestBody");

export type PostAtsApplicationsApplicationIdResultLinksParameterApplicationId = string
export const PostAtsApplicationsApplicationIdResultLinksParameterApplicationId = __schemas.Import("PostAtsApplicationsApplicationIdResultLinksParameterApplicationId");

export interface PostAtsApplicationsApplicationIdResultLinksPositiveResponse { status: "success", data: Record<string, unknown>, warnings: Array<{ message: string }> }
export const PostAtsApplicationsApplicationIdResultLinksPositiveResponse = __schemas.Import("PostAtsApplicationsApplicationIdResultLinksPositiveResponse");

export interface PostAtsApplicationsApplicationIdResultLinksRequestBody { label: string, url: string, details?: { custom_field_name_prefix: string, attributes: Array<{ key: string, value: string }> }, remote_fields?: (Partial<{ icims: Partial<{ assessment_package_id: string }>, oracle: Partial<{ override_document_category: ("IRC_CANDIDATE_RESUME" | "IRC_CANDIDATE_COVERLETTER" | "MISC" | "IRC_INTERNAL"), multi_post_to_all_current_applications: boolean }> }> & Partial<{ greenhouse: Partial<{ post_headers: Partial<{ "On-Behalf-Of": (string | null) }> }>, workable: Partial<{ on_behalf_of_user_remote_id: string }> }>) }
export const PostAtsApplicationsApplicationIdResultLinksRequestBody = __schemas.Import("PostAtsApplicationsApplicationIdResultLinksRequestBody");

export type PostAtsApplicationsApplicationIdNotesParameterApplicationId = string
export const PostAtsApplicationsApplicationIdNotesParameterApplicationId = __schemas.Import("PostAtsApplicationsApplicationIdNotesParameterApplicationId");

export interface PostAtsApplicationsApplicationIdNotesPositiveResponse { status: "success", data: Record<string, unknown>, warnings: Array<{ message: string }> }
export const PostAtsApplicationsApplicationIdNotesPositiveResponse = __schemas.Import("PostAtsApplicationsApplicationIdNotesPositiveResponse");

export interface PostAtsApplicationsApplicationIdNotesRequestBody { content: string, content_type: "PLAIN_TEXT", remote_fields?: (Partial<{ teamtailor: Partial<{ user_id: string }>, greenhouse: Partial<{ visibility: ("admin_only" | "private" | "public") }>, recruitee: Partial<{ visibility: unknown, is_json: boolean }>, bullhorn: Partial<{ action: string }>, lever: Partial<{ perform_as: string }> }> & Partial<{ greenhouse: Partial<{ post_headers: Partial<{ "On-Behalf-Of": (string | null) }> }>, workable: Partial<{ on_behalf_of_user_remote_id: string }> }>) }
export const PostAtsApplicationsApplicationIdNotesRequestBody = __schemas.Import("PostAtsApplicationsApplicationIdNotesRequestBody");

export type GetAtsApplicationsApplicationIdAttachmentsParameterApplicationId = string
export const GetAtsApplicationsApplicationIdAttachmentsParameterApplicationId = __schemas.Import("GetAtsApplicationsApplicationIdAttachmentsParameterApplicationId");

export interface GetAtsApplicationsApplicationIdAttachmentsPositiveResponse { status: "success", data: { results: Array<{ type: ("CV" | "COVER_LETTER" | "OTHER"), id: string, remote_id: string, data_url: string, file_name: string, content_type: string, remote_created_at: (string | null), remote_updated_at: (string | null) }> }, warnings: Array<{ message: string }> }
export const GetAtsApplicationsApplicationIdAttachmentsPositiveResponse = __schemas.Import("GetAtsApplicationsApplicationIdAttachmentsPositiveResponse");

export type PostAtsApplicationsApplicationIdAttachmentsParameterApplicationId = string
export const PostAtsApplicationsApplicationIdAttachmentsParameterApplicationId = __schemas.Import("PostAtsApplicationsApplicationIdAttachmentsParameterApplicationId");

export interface PostAtsApplicationsApplicationIdAttachmentsPositiveResponse { status: "success", data: Record<string, unknown>, warnings: Array<{ message: string }> }
export const PostAtsApplicationsApplicationIdAttachmentsPositiveResponse = __schemas.Import("PostAtsApplicationsApplicationIdAttachmentsPositiveResponse");

export interface PostAtsApplicationsApplicationIdAttachmentsRequestBody { attachment: { name: string, content_type?: string, data_url?: string, data?: string, type: ("CV" | "COVER_LETTER" | "OTHER") }, remote_fields?: (Partial<{ oracle: Partial<{ override_document_category: ("IRC_CANDIDATE_RESUME" | "IRC_CANDIDATE_COVERLETTER" | "MISC" | "IRC_INTERNAL"), multi_post_to_all_current_applications: boolean }> }> & Partial<{ greenhouse: Partial<{ post_headers: Partial<{ "On-Behalf-Of": (string | null) }> }>, workable: Partial<{ on_behalf_of_user_remote_id: string }> }>) }
export const PostAtsApplicationsApplicationIdAttachmentsRequestBody = __schemas.Import("PostAtsApplicationsApplicationIdAttachmentsRequestBody");

export type PostAtsApplicationsApplicationIdRejectParameterApplicationId = string
export const PostAtsApplicationsApplicationIdRejectParameterApplicationId = __schemas.Import("PostAtsApplicationsApplicationIdRejectParameterApplicationId");

export interface PostAtsApplicationsApplicationIdRejectPositiveResponse { status: "success", data: Record<string, unknown>, warnings: Array<{ message: string }> }
export const PostAtsApplicationsApplicationIdRejectPositiveResponse = __schemas.Import("PostAtsApplicationsApplicationIdRejectPositiveResponse");

export interface PostAtsApplicationsApplicationIdRejectRequestBody { rejection_reason_id: string, note?: string, remote_fields?: (Partial<{ greenhouse: Partial<{ rejection_email: Record<string, unknown> }>, teamtailor: Partial<{ user_id: string }> }> & Partial<{ greenhouse: Partial<{ post_headers: Partial<{ "On-Behalf-Of": (string | null) }> }>, workable: Partial<{ on_behalf_of_user_remote_id: string }> }>) }
export const PostAtsApplicationsApplicationIdRejectRequestBody = __schemas.Import("PostAtsApplicationsApplicationIdRejectRequestBody");

export type PostAtsApplicationsApplicationIdInterviewsParameterApplicationId = string
export const PostAtsApplicationsApplicationIdInterviewsParameterApplicationId = __schemas.Import("PostAtsApplicationsApplicationIdInterviewsParameterApplicationId");

export interface PostAtsApplicationsApplicationIdInterviewsPositiveResponse { status: "success", data: Record<string, unknown> }
export const PostAtsApplicationsApplicationIdInterviewsPositiveResponse = __schemas.Import("PostAtsApplicationsApplicationIdInterviewsPositiveResponse");

export interface PostAtsApplicationsApplicationIdInterviewsRequestBody { title: string, start_time: string, end_time: string, interviewer_user_ids: Array<string>, organizer_user_id: string, location: { type: ("PHYSICAL" | "VIRTUAL"), address?: string } }
export const PostAtsApplicationsApplicationIdInterviewsRequestBody = __schemas.Import("PostAtsApplicationsApplicationIdInterviewsRequestBody");

export type PatchAtsApplicationsApplicationIdInterviewsParameterApplicationId = string
export const PatchAtsApplicationsApplicationIdInterviewsParameterApplicationId = __schemas.Import("PatchAtsApplicationsApplicationIdInterviewsParameterApplicationId");

export interface PatchAtsApplicationsApplicationIdInterviewsPositiveResponse { status: "success", data: Record<string, unknown> }
export const PatchAtsApplicationsApplicationIdInterviewsPositiveResponse = __schemas.Import("PatchAtsApplicationsApplicationIdInterviewsPositiveResponse");

export interface PatchAtsApplicationsApplicationIdInterviewsRequestBody { interview_id: string, title: string, start_time: string, end_time: string, interviewer_user_ids: Array<string>, organizer_user_id: string, location: { type: ("PHYSICAL" | "VIRTUAL"), address?: string } }
export const PatchAtsApplicationsApplicationIdInterviewsRequestBody = __schemas.Import("PatchAtsApplicationsApplicationIdInterviewsRequestBody");

export type GetAtsCandidatesParameterCursor = string
export const GetAtsCandidatesParameterCursor = __schemas.Import("GetAtsCandidatesParameterCursor");

export type GetAtsCandidatesParameterPageSize = number
export const GetAtsCandidatesParameterPageSize = __schemas.Import("GetAtsCandidatesParameterPageSize");

export type GetAtsCandidatesParameterUpdatedAfter = string
export const GetAtsCandidatesParameterUpdatedAfter = __schemas.Import("GetAtsCandidatesParameterUpdatedAfter");

export type GetAtsCandidatesParameterIncludeDeleted = ("true" | "false")
export const GetAtsCandidatesParameterIncludeDeleted = __schemas.Import("GetAtsCandidatesParameterIncludeDeleted");

export type GetAtsCandidatesParameterIgnoreUnsupportedFilters = ("true" | "false")
export const GetAtsCandidatesParameterIgnoreUnsupportedFilters = __schemas.Import("GetAtsCandidatesParameterIgnoreUnsupportedFilters");

export type GetAtsCandidatesParameterIds = string
export const GetAtsCandidatesParameterIds = __schemas.Import("GetAtsCandidatesParameterIds");

export type GetAtsCandidatesParameterRemoteIds = string
export const GetAtsCandidatesParameterRemoteIds = __schemas.Import("GetAtsCandidatesParameterRemoteIds");

export type GetAtsCandidatesParameterEmail = string
export const GetAtsCandidatesParameterEmail = __schemas.Import("GetAtsCandidatesParameterEmail");

export type GetAtsCandidatesParameterJobIds = string
export const GetAtsCandidatesParameterJobIds = __schemas.Import("GetAtsCandidatesParameterJobIds");

export type GetAtsCandidatesParameterFirstName = string
export const GetAtsCandidatesParameterFirstName = __schemas.Import("GetAtsCandidatesParameterFirstName");

export type GetAtsCandidatesParameterLastName = string
export const GetAtsCandidatesParameterLastName = __schemas.Import("GetAtsCandidatesParameterLastName");

export interface GetAtsCandidatesPositiveResponse { status: "success", data: { next: (string | null), results: Array<{ id: string, remote_id: string, first_name: (string | null), last_name: (string | null), company: (string | null), title: (string | null), confidential: (boolean | null), source: (string | null), phone_numbers?: (Array<{ phone_number: string, type?: (string | null) }> | null), email_addresses?: (Array<{ email_address?: (string | null), type: (string | null) }> | null), social_media?: (Array<Partial<{ link: (string | null), type: (string | null), username: (string | null) }>> | null), location?: (Partial<{ city: (string | null), country: (string | null), raw: (string | null), state: (string | null), street_1: (string | null), street_2: (string | null), zip_code: (string | null) }> | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }>, remote_url: (string | null), remote_created_at: (string | null), remote_updated_at: (string | null), remote_data: (Record<string, unknown> | null), changed_at: string, remote_deleted_at: (string | null), applications: Array<{ id: string, remote_id: (string | null), outcome: (("PENDING" | "HIRED" | "DECLINED") | null), rejection_reason_name: (string | null), rejected_at: (string | null), remote_url: (string | null), changed_at: string, remote_created_at: (string | null), remote_updated_at: (string | null), current_stage: ({ id: string, name: (string | null), remote_id: (string | null), index: (number | null) } | null), job: ({ id: string, name: (string | null), remote_id: string } | null) }>, tags: Array<{ id: string, name: (string | null), remote_id: (string | null) }> }> } }
export const GetAtsCandidatesPositiveResponse = __schemas.Import("GetAtsCandidatesPositiveResponse");

export interface PostAtsCandidatesPositiveResponse { status: "success", data: { id: string, remote_id: string, first_name: (string | null), last_name: (string | null), company: (string | null), title: (string | null), confidential: (boolean | null), source: (string | null), phone_numbers?: (Array<{ phone_number: string, type?: (string | null) }> | null), email_addresses?: (Array<{ email_address?: (string | null), type: (string | null) }> | null), social_media?: (Array<Partial<{ link: (string | null), type: (string | null), username: (string | null) }>> | null), location?: (Partial<{ city: (string | null), country: (string | null), raw: (string | null), state: (string | null), street_1: (string | null), street_2: (string | null), zip_code: (string | null) }> | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }>, remote_url: (string | null), remote_created_at: (string | null), remote_updated_at: (string | null), remote_data: (Record<string, unknown> | null), changed_at: string, remote_deleted_at: (string | null), applications: Array<{ id: string, remote_id: (string | null), outcome: (("PENDING" | "HIRED" | "DECLINED") | null), rejection_reason_name: (string | null), rejected_at: (string | null), remote_url: (string | null), changed_at: string, remote_created_at: (string | null), remote_updated_at: (string | null), current_stage: ({ id: string, name: (string | null), remote_id: (string | null), index: (number | null) } | null), job: ({ id: string, name: (string | null), remote_id: string } | null) }>, tags: Array<{ id: string, name: (string | null), remote_id: (string | null) }> }, warnings: Array<{ message: string }> }
export const PostAtsCandidatesPositiveResponse = __schemas.Import("PostAtsCandidatesPositiveResponse");

export interface PostAtsCandidatesRequestBody { candidate: { first_name: string, last_name: string, email_address: string, additional_email_addresses?: Array<{ type: ("PERSONAL" | "WORK" | "OTHER"), email_address: string }>, company?: string, title?: string, phone_number?: string, additional_phone_numbers?: Array<{ type: ("PERSONAL" | "WORK" | "OTHER"), phone_number: string }>, location?: { city?: string, country: string, state?: string, street_1?: string, zip_code?: string }, gender?: ("MALE" | "FEMALE" | "OTHER"), availability_date?: string, salary_expectations?: { period: ("MONTH" | "YEAR"), amount: number }, social_links?: Array<{ url: string }> }, application: { job_id: string, stage_id?: string }, screening_question_answers?: Array<{ question_id: string, answer: (string | boolean | number | Array<string> | string | { name: string, content_type?: string, data_url?: string, data?: string }) }>, attachments?: Array<{ name: string, content_type?: string, data_url?: string, data?: string, type: ("CV" | "COVER_LETTER" | "OTHER") }>, source?: Partial<{ name: string, unified_key: string, id: string }>, sourced_by?: { user_id: string }, gdpr_consent?: Partial<{ expires_at: string, given: boolean }>, remote_fields?: (Partial<{ successfactors: Partial<{ Candidate: Record<string, unknown>, JobApplication: Record<string, unknown>, copyJobApplicationAttachments: boolean, update_existing_candidate: (boolean | null) }>, personio: Partial<{ application: Record<string, unknown> }>, talentsoft: Partial<{ applicant: Record<string, unknown>, application: Record<string, unknown> }>, teamtailor: Partial<{ candidate: Record<string, unknown>, application: Partial<{ attributes: Record<string, unknown> }> }>, greenhouse: Partial<{ candidate: Record<string, unknown>, application: Record<string, unknown> }>, lever: Partial<{ candidate: Record<string, unknown> }>, workable: Partial<{ candidate: Record<string, unknown> }>, workday: Partial<{ Candidate_Data: Partial<{ Name_Detail_Data: Partial<{ Middle_Name: string, Social_Suffix_Reference: { Predefined_Name_Component_ID: string } }>, Language_Reference: { WID: string }, Job_Application_Data: Partial<{ Job_Applied_To_Data: Partial<{ Global_Personal_Information_Data: Partial<{ Date_of_Birth: string }> }>, Resume_Data: Partial<{ Education_Data: Array<Partial<{ School_Name: string, First_Year_Attended: number, Last_Year_Attended: number, Field_of_Study_Reference: { WID: string }, Degree_Reference: { WID: string }, Grade_Average: string }>>, Skill_Data: Array<Partial<{ Skill_Name: string }>>, Language_Data: Array<Partial<{ Language_Reference: Partial<{ WID: string }>, Language: { Native?: boolean, Language_Ability: Array<Partial<{ Language_Ability_Data: Partial<{ Language_Proficiency_Reference: { WID: string }, Language_Ability_Type_Reference: { WID: string } }> }>> } }>>, Experience_Data: Array<{ Company_Name: string, Title: string, Location?: string, Start_Date: string, End_Date?: string, Currently_Work_Here?: boolean, Description?: string }> }> }>, Contact_Data: Partial<{ Location_Data: Partial<{ Address_Line_1: string, Address_Line_2: string, Region_Subdivision_1: string, Country_Region_Reference: { Country_Region_ID: string }, Country_City_Reference: { WID: string } }> }>, Worker_Reference: Partial<{ WID: string, Employee_ID: string }> }>, Override_Source_Reference_WID: string }>, zohorecruit: Partial<{ candidate: Record<string, unknown> }>, bullhorn: Partial<{ candidate: Record<string, unknown>, job_submission: Record<string, unknown> }>, smartrecruiters: Partial<{ candidate_with_questions: Record<string, unknown>, candidate_without_questions: Record<string, unknown>, candidate: Record<string, unknown>, consent_decisions: Partial<{ SINGLE: boolean, SMART_RECRUIT: boolean, SMART_CRM: boolean, SMART_MESSAGE_SMS: boolean, SMART_MESSAGE_WHATSAPP: boolean }> }>, talentadore: Partial<{ applications: Record<string, unknown> }>, guidecom: Partial<{ candidate: Record<string, unknown> }>, dvinci: Partial<{ application: Record<string, unknown>, candidate: Record<string, unknown> }>, hrworks: Partial<{ jobApplication: Record<string, unknown> }>, jobylon: Partial<{ application: Partial<{ message: string }> }>, avature: Partial<{ workflow: Partial<{ step: { id: number } }> }>, recruitee: Partial<{ candidate: Partial<{ cover_letter_text: string }> }>, rexx: Partial<{ candidate: Record<string, unknown> }>, umantis: Partial<{ person: Record<string, unknown> }>, piloga: Partial<{ candidate: Partial<{ street: string }> }>, pinpoint: Partial<{ candidate: Record<string, unknown> }>, covetorest: Partial<{ candidate: Partial<{ mandant: number }> }> }> & Partial<{ greenhouse: Partial<{ post_headers: Partial<{ "On-Behalf-Of": (string | null) }> }>, workable: Partial<{ on_behalf_of_user_remote_id: string }> }>) }
export const PostAtsCandidatesRequestBody = __schemas.Import("PostAtsCandidatesRequestBody");

export type GetAtsCandidatesCandidateIdAttachmentsParameterCandidateId = string
export const GetAtsCandidatesCandidateIdAttachmentsParameterCandidateId = __schemas.Import("GetAtsCandidatesCandidateIdAttachmentsParameterCandidateId");

export interface GetAtsCandidatesCandidateIdAttachmentsPositiveResponse { status: "success", data: { results: Array<{ id: string, application_id: (string | null), candidate_id: string, type: ("CV" | "COVER_LETTER" | "OTHER"), remote_id: string, data_url: string, file_name: string, content_type: string, remote_created_at: (string | null), remote_updated_at: (string | null) }> }, warnings: Array<{ message: string }> }
export const GetAtsCandidatesCandidateIdAttachmentsPositiveResponse = __schemas.Import("GetAtsCandidatesCandidateIdAttachmentsPositiveResponse");

export type PostAtsCandidatesCandidateIdAttachmentsParameterCandidateId = string
export const PostAtsCandidatesCandidateIdAttachmentsParameterCandidateId = __schemas.Import("PostAtsCandidatesCandidateIdAttachmentsParameterCandidateId");

export interface PostAtsCandidatesCandidateIdAttachmentsPositiveResponse { status: "success", data: Record<string, unknown>, warnings: Array<{ message: string }> }
export const PostAtsCandidatesCandidateIdAttachmentsPositiveResponse = __schemas.Import("PostAtsCandidatesCandidateIdAttachmentsPositiveResponse");

export interface PostAtsCandidatesCandidateIdAttachmentsRequestBody { attachment: { name: string, content_type?: string, data_url?: string, data?: string, type: ("CV" | "COVER_LETTER" | "OTHER") }, remote_fields?: Partial<{ greenhouse: Partial<{ post_headers: Partial<{ "On-Behalf-Of": (string | null) }> }>, workable: Partial<{ on_behalf_of_user_remote_id: string }> }> }
export const PostAtsCandidatesCandidateIdAttachmentsRequestBody = __schemas.Import("PostAtsCandidatesCandidateIdAttachmentsRequestBody");

export type PostAtsCandidatesCandidateIdResultLinksParameterCandidateId = string
export const PostAtsCandidatesCandidateIdResultLinksParameterCandidateId = __schemas.Import("PostAtsCandidatesCandidateIdResultLinksParameterCandidateId");

export interface PostAtsCandidatesCandidateIdResultLinksPositiveResponse { status: "success", data: Record<string, unknown>, warnings: Array<{ message: string }> }
export const PostAtsCandidatesCandidateIdResultLinksPositiveResponse = __schemas.Import("PostAtsCandidatesCandidateIdResultLinksPositiveResponse");

export interface PostAtsCandidatesCandidateIdResultLinksRequestBody { label: string, url: string, details?: { custom_field_name_prefix: string, attributes: Array<{ key: string, value: string }> }, remote_fields?: (Partial<{ icims: Partial<{ assessment_package_id: string }>, oracle: Partial<{ override_document_category: ("IRC_CANDIDATE_RESUME" | "IRC_CANDIDATE_COVERLETTER" | "MISC" | "IRC_INTERNAL"), multi_post_to_all_current_applications: boolean }> }> & Partial<{ greenhouse: Partial<{ post_headers: Partial<{ "On-Behalf-Of": (string | null) }> }>, workable: Partial<{ on_behalf_of_user_remote_id: string }> }>) }
export const PostAtsCandidatesCandidateIdResultLinksRequestBody = __schemas.Import("PostAtsCandidatesCandidateIdResultLinksRequestBody");

export type PostAtsCandidatesCandidateIdTagsParameterCandidateId = string
export const PostAtsCandidatesCandidateIdTagsParameterCandidateId = __schemas.Import("PostAtsCandidatesCandidateIdTagsParameterCandidateId");

export interface PostAtsCandidatesCandidateIdTagsPositiveResponse { status: "success", data: Record<string, unknown>, warnings: Array<{ message: string }> }
export const PostAtsCandidatesCandidateIdTagsPositiveResponse = __schemas.Import("PostAtsCandidatesCandidateIdTagsPositiveResponse");

export interface PostAtsCandidatesCandidateIdTagsRequestBody { tag: { name: string }, remote_fields?: Partial<{ greenhouse: Partial<{ post_headers: Partial<{ "On-Behalf-Of": (string | null) }> }>, workable: Partial<{ on_behalf_of_user_remote_id: string }> }> }
export const PostAtsCandidatesCandidateIdTagsRequestBody = __schemas.Import("PostAtsCandidatesCandidateIdTagsRequestBody");

export type DeleteAtsCandidatesCandidateIdTagsParameterCandidateId = string
export const DeleteAtsCandidatesCandidateIdTagsParameterCandidateId = __schemas.Import("DeleteAtsCandidatesCandidateIdTagsParameterCandidateId");

export interface DeleteAtsCandidatesCandidateIdTagsPositiveResponse { status: "success", data: Record<string, unknown>, warnings: Array<{ message: string }> }
export const DeleteAtsCandidatesCandidateIdTagsPositiveResponse = __schemas.Import("DeleteAtsCandidatesCandidateIdTagsPositiveResponse");

export interface DeleteAtsCandidatesCandidateIdTagsRequestBody { tag: { name: string }, remote_fields?: Partial<{ greenhouse: Partial<{ post_headers: Partial<{ "On-Behalf-Of": (string | null) }> }>, workable: Partial<{ on_behalf_of_user_remote_id: string }> }> }
export const DeleteAtsCandidatesCandidateIdTagsRequestBody = __schemas.Import("DeleteAtsCandidatesCandidateIdTagsRequestBody");

export type GetAtsTagsParameterCursor = string
export const GetAtsTagsParameterCursor = __schemas.Import("GetAtsTagsParameterCursor");

export type GetAtsTagsParameterPageSize = number
export const GetAtsTagsParameterPageSize = __schemas.Import("GetAtsTagsParameterPageSize");

export type GetAtsTagsParameterUpdatedAfter = string
export const GetAtsTagsParameterUpdatedAfter = __schemas.Import("GetAtsTagsParameterUpdatedAfter");

export type GetAtsTagsParameterIncludeDeleted = ("true" | "false")
export const GetAtsTagsParameterIncludeDeleted = __schemas.Import("GetAtsTagsParameterIncludeDeleted");

export type GetAtsTagsParameterIgnoreUnsupportedFilters = ("true" | "false")
export const GetAtsTagsParameterIgnoreUnsupportedFilters = __schemas.Import("GetAtsTagsParameterIgnoreUnsupportedFilters");

export type GetAtsTagsParameterIds = string
export const GetAtsTagsParameterIds = __schemas.Import("GetAtsTagsParameterIds");

export type GetAtsTagsParameterRemoteIds = string
export const GetAtsTagsParameterRemoteIds = __schemas.Import("GetAtsTagsParameterRemoteIds");

export interface GetAtsTagsPositiveResponse { status: "success", data: { next: (string | null), results: Array<{ id: string, remote_id: (string | null), name: (string | null), remote_data: (Record<string, unknown> | null), changed_at: string, remote_deleted_at: (string | null) }> } }
export const GetAtsTagsPositiveResponse = __schemas.Import("GetAtsTagsPositiveResponse");

export type GetAtsApplicationStagesParameterCursor = string
export const GetAtsApplicationStagesParameterCursor = __schemas.Import("GetAtsApplicationStagesParameterCursor");

export type GetAtsApplicationStagesParameterPageSize = number
export const GetAtsApplicationStagesParameterPageSize = __schemas.Import("GetAtsApplicationStagesParameterPageSize");

export type GetAtsApplicationStagesParameterUpdatedAfter = string
export const GetAtsApplicationStagesParameterUpdatedAfter = __schemas.Import("GetAtsApplicationStagesParameterUpdatedAfter");

export type GetAtsApplicationStagesParameterIncludeDeleted = ("true" | "false")
export const GetAtsApplicationStagesParameterIncludeDeleted = __schemas.Import("GetAtsApplicationStagesParameterIncludeDeleted");

export type GetAtsApplicationStagesParameterIgnoreUnsupportedFilters = ("true" | "false")
export const GetAtsApplicationStagesParameterIgnoreUnsupportedFilters = __schemas.Import("GetAtsApplicationStagesParameterIgnoreUnsupportedFilters");

export type GetAtsApplicationStagesParameterIds = string
export const GetAtsApplicationStagesParameterIds = __schemas.Import("GetAtsApplicationStagesParameterIds");

export type GetAtsApplicationStagesParameterRemoteIds = string
export const GetAtsApplicationStagesParameterRemoteIds = __schemas.Import("GetAtsApplicationStagesParameterRemoteIds");

export interface GetAtsApplicationStagesPositiveResponse { status: "success", data: { next: (string | null), results: Array<{ id: string, remote_id: (string | null), name: (string | null), remote_data: (Record<string, unknown> | null), changed_at: string, remote_deleted_at: (string | null) }> } }
export const GetAtsApplicationStagesPositiveResponse = __schemas.Import("GetAtsApplicationStagesPositiveResponse");

export type GetAtsJobsParameterCursor = string
export const GetAtsJobsParameterCursor = __schemas.Import("GetAtsJobsParameterCursor");

export type GetAtsJobsParameterPageSize = number
export const GetAtsJobsParameterPageSize = __schemas.Import("GetAtsJobsParameterPageSize");

export type GetAtsJobsParameterUpdatedAfter = string
export const GetAtsJobsParameterUpdatedAfter = __schemas.Import("GetAtsJobsParameterUpdatedAfter");

export type GetAtsJobsParameterIncludeDeleted = ("true" | "false")
export const GetAtsJobsParameterIncludeDeleted = __schemas.Import("GetAtsJobsParameterIncludeDeleted");

export type GetAtsJobsParameterIgnoreUnsupportedFilters = ("true" | "false")
export const GetAtsJobsParameterIgnoreUnsupportedFilters = __schemas.Import("GetAtsJobsParameterIgnoreUnsupportedFilters");

export type GetAtsJobsParameterIds = string
export const GetAtsJobsParameterIds = __schemas.Import("GetAtsJobsParameterIds");

export type GetAtsJobsParameterRemoteIds = string
export const GetAtsJobsParameterRemoteIds = __schemas.Import("GetAtsJobsParameterRemoteIds");

export type GetAtsJobsParameterJobCodes = string
export const GetAtsJobsParameterJobCodes = __schemas.Import("GetAtsJobsParameterJobCodes");

export type GetAtsJobsParameterPostUrl = string
export const GetAtsJobsParameterPostUrl = __schemas.Import("GetAtsJobsParameterPostUrl");

export type GetAtsJobsParameterStatus = ("OPEN" | "CLOSED" | "DRAFT" | "ARCHIVED")
export const GetAtsJobsParameterStatus = __schemas.Import("GetAtsJobsParameterStatus");

export type GetAtsJobsParameterStatuses = string
export const GetAtsJobsParameterStatuses = __schemas.Import("GetAtsJobsParameterStatuses");

export type GetAtsJobsParameterEmploymentTypes = string
export const GetAtsJobsParameterEmploymentTypes = __schemas.Import("GetAtsJobsParameterEmploymentTypes");

export type GetAtsJobsParameterVisibilities = string
export const GetAtsJobsParameterVisibilities = __schemas.Import("GetAtsJobsParameterVisibilities");

export type GetAtsJobsParameterRemoteCreatedAfter = string
export const GetAtsJobsParameterRemoteCreatedAfter = __schemas.Import("GetAtsJobsParameterRemoteCreatedAfter");

export type GetAtsJobsParameterNameContains = string
export const GetAtsJobsParameterNameContains = __schemas.Import("GetAtsJobsParameterNameContains");

export interface GetAtsJobsPositiveResponse { status: "success", data: { next: (string | null), results: Array<{ id: string, remote_id: string, name: (string | null), job_code: (string | null), description: (string | null), confidential: (boolean | null), weekly_hours: (number | null), employment_type?: (("FULL_TIME" | "PART_TIME" | "CONTRACT" | "SEASONAL" | "INTERNSHIP") | string | null), status?: (("OPEN" | "CLOSED" | "DRAFT" | "ARCHIVED") | string | null), visibility?: (("PUBLIC" | "INTERNAL" | "UNLISTED" | "CONFIDENTIAL") | string | null), category: (string | null), department: (string | null), post_url: (string | null), experience_level: (string | null), remote_work_status?: (("REMOTE" | "HYBRID" | "TEMPORARY" | "ON_SITE") | string | null), salary_amount: (number | null), salary_amount_from: (number | null), salary_amount_to: (number | null), salary_currency: (string | null), salary_period?: (("YEAR" | "MONTH" | "TWO_WEEKS" | "WEEK" | "DAY" | "HOUR") | string | null), location?: (Partial<{ city: (string | null), country: (string | null), raw: (string | null), state: (string | null), street_1: (string | null), street_2: (string | null), zip_code: (string | null) }> | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }>, remote_url: (string | null), opened_at: (string | null), closed_at: (string | null), remote_created_at: (string | null), remote_updated_at: (string | null), contact_id: (string | null), remote_data: (Record<string, unknown> | null), changed_at: string, remote_deleted_at: (string | null), stages: Array<{ id: string, remote_id: (string | null), name: (string | null), remote_data: (Record<string, unknown> | null), index?: (number | null) }>, screening_questions: Array<{ id: string, remote_id: (string | null), title: (string | null), description: (string | null), format?: ({ display_type?: (("SINGLE_LINE" | "MULTI_LINE" | "EMAIL" | "URL") | null), max_length?: (number | null), type: "TEXT" } | { display_type?: (("SLIDER" | "FIELD") | null), max?: (number | null), min?: (number | null), type: "NUMBER" } | { accepted_mime_types?: (Array<string> | null), max_file_size_bytes?: (number | null), type: "FILE" } | { display_type?: (("DROPDOWN" | "RADIO") | null), options: Array<{ id: string, remote_id?: (string | null), name: string }>, type: "SINGLE_SELECT" } | { type: "BOOLEAN" } | { type: "DATE" } | { options: Array<{ id: string, remote_id?: (string | null), name: string }>, type: "MULTI_SELECT" } | { type: "INFORMATION" } | { raw_question?: unknown, type: "UNKNOWN" } | null), category: (("EEO" | "DEMOGRAPHIC") | null), index?: (number | null), required: (boolean | null), precondition_question_id?: (string | null), precondition_options?: (Array<string> | Array<boolean> | null) }>, job_postings: Array<{ id: string, remote_id: (string | null), title: (string | null), description_html: (string | null), status: (("ACTIVE" | "INACTIVE" | "DRAFT") | null), visibility: (("PUBLIC" | "INTERNAL" | "UNLISTED") | null), url: (string | null), remote_data: (Record<string, unknown> | null) }>, hiring_team: Array<{ id: string, remote_id: (string | null), first_name: (string | null), last_name: (string | null), email?: (string | null), hiring_team_roles: Array<("RECRUITER" | "HIRING_MANAGER" | "COORDINATOR" | "SOURCER" | "INTERVIEWER")>, job_roles: Array<{ remote_id: (string | null), remote_label: (string | null), scope: (("SYSTEM" | "JOB") | null), unified_type: (("HIRING_MANAGER" | "RECRUITER" | "COORDINATOR" | "SOURCER" | "INTERVIEWER" | "ADMIN") | null) }> }> }> } }
export const GetAtsJobsPositiveResponse = __schemas.Import("GetAtsJobsPositiveResponse");

export type PostAtsJobsJobIdApplicationsParameterJobId = string
export const PostAtsJobsJobIdApplicationsParameterJobId = __schemas.Import("PostAtsJobsJobIdApplicationsParameterJobId");

export interface PostAtsJobsJobIdApplicationsPositiveResponse { status: "success", data: { id: string, remote_id: (string | null), outcome: (("PENDING" | "HIRED" | "DECLINED") | null), rejection_reason_name: (string | null), rejected_at: (string | null), current_stage_id: (string | null), job_id: (string | null), candidate_id: (string | null), screening_question_answers?: (Array<({ answer: { content: (string | null) }, question: { remote_id: (string | null), title: string, type: "TEXT" } } | { answer: { choice: (string | null) }, question: { remote_id: (string | null), title: string, type: "SINGLE_SELECT" } } | { answer: Partial<{ choices: Array<string> }>, question: { remote_id: (string | null), title: string, type: "MULTI_SELECT" } } | { answer: { checked: (boolean | null) }, question: { remote_id: (string | null), title: string, type: "BOOLEAN" } } | { answer: { number: (number | null) }, question: { remote_id: (string | null), title: string, type: "NUMBER" } } | { answer: { date: (string | null) }, question: { remote_id: (string | null), title: string, type: "DATE" } } | { answer: Partial<{ raw: null }>, question: { remote_id: (string | null), title: string, type: "UNKNOWN" } })> | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }>, remote_url: (string | null), changed_at: string, remote_deleted_at: (string | null), remote_created_at: (string | null), remote_updated_at: (string | null), remote_data: (Record<string, unknown> | null), current_stage: ({ id: string, name: (string | null), remote_id: (string | null), index: (number | null) } | null), job: ({ id: string, name: (string | null), remote_id: string } | null), candidate: ({ id: string, remote_id: string, first_name: (string | null), last_name: (string | null), company: (string | null), title: (string | null), confidential: (boolean | null), source: (string | null), phone_numbers?: (Array<{ phone_number: string, type?: (string | null) }> | null), email_addresses?: (Array<{ email_address?: (string | null), type: (string | null) }> | null), social_media?: (Array<Partial<{ link: (string | null), type: (string | null), username: (string | null) }>> | null), location?: (Partial<{ city: (string | null), country: (string | null), raw: (string | null), state: (string | null), street_1: (string | null), street_2: (string | null), zip_code: (string | null) }> | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }>, remote_url: (string | null), remote_created_at: (string | null), remote_updated_at: (string | null), remote_data: (Record<string, unknown> | null), changed_at: string, remote_deleted_at: (string | null), tags: Array<{ id: string, name: (string | null), remote_id: (string | null) }> } | null) }, warnings: Array<{ message: string }> }
export const PostAtsJobsJobIdApplicationsPositiveResponse = __schemas.Import("PostAtsJobsJobIdApplicationsPositiveResponse");

export interface PostAtsJobsJobIdApplicationsRequestBody { stage_id?: string, candidate: { first_name: string, last_name: string, email_address: string, additional_email_addresses?: Array<{ type: ("PERSONAL" | "WORK" | "OTHER"), email_address: string }>, company?: string, title?: string, phone_number?: string, additional_phone_numbers?: Array<{ type: ("PERSONAL" | "WORK" | "OTHER"), phone_number: string }>, location?: { city?: string, country: string, state?: string, street_1?: string, zip_code?: string }, gender?: ("MALE" | "FEMALE" | "OTHER"), availability_date?: string, salary_expectations?: { period: ("MONTH" | "YEAR"), amount: number }, social_links?: Array<{ url: string }> }, attachments?: Array<{ name: string, content_type?: string, data_url?: string, data?: string, type: ("CV" | "COVER_LETTER" | "OTHER") }>, source?: Partial<{ name: string, unified_key: string, id: string }>, sourced_by?: { user_id: string }, gdpr_consent?: Partial<{ expires_at: string, given: boolean }>, remote_fields?: (Partial<{ successfactors: Partial<{ Candidate: Record<string, unknown>, JobApplication: Record<string, unknown>, copyJobApplicationAttachments: boolean, update_existing_candidate: (boolean | null) }>, personio: Partial<{ application: Record<string, unknown> }>, talentsoft: Partial<{ applicant: Record<string, unknown>, application: Record<string, unknown> }>, teamtailor: Partial<{ candidate: Record<string, unknown>, application: Partial<{ attributes: Record<string, unknown> }> }>, greenhouse: Partial<{ candidate: Record<string, unknown>, application: Record<string, unknown> }>, lever: Partial<{ candidate: Record<string, unknown> }>, workable: Partial<{ candidate: Record<string, unknown> }>, workday: Partial<{ Candidate_Data: Partial<{ Name_Detail_Data: Partial<{ Middle_Name: string, Social_Suffix_Reference: { Predefined_Name_Component_ID: string } }>, Language_Reference: { WID: string }, Job_Application_Data: Partial<{ Job_Applied_To_Data: Partial<{ Global_Personal_Information_Data: Partial<{ Date_of_Birth: string }> }>, Resume_Data: Partial<{ Education_Data: Array<Partial<{ School_Name: string, First_Year_Attended: number, Last_Year_Attended: number, Field_of_Study_Reference: { WID: string }, Degree_Reference: { WID: string }, Grade_Average: string }>>, Skill_Data: Array<Partial<{ Skill_Name: string }>>, Language_Data: Array<Partial<{ Language_Reference: Partial<{ WID: string }>, Language: { Native?: boolean, Language_Ability: Array<Partial<{ Language_Ability_Data: Partial<{ Language_Proficiency_Reference: { WID: string }, Language_Ability_Type_Reference: { WID: string } }> }>> } }>>, Experience_Data: Array<{ Company_Name: string, Title: string, Location?: string, Start_Date: string, End_Date?: string, Currently_Work_Here?: boolean, Description?: string }> }> }>, Contact_Data: Partial<{ Location_Data: Partial<{ Address_Line_1: string, Address_Line_2: string, Region_Subdivision_1: string, Country_Region_Reference: { Country_Region_ID: string }, Country_City_Reference: { WID: string } }> }>, Worker_Reference: Partial<{ WID: string, Employee_ID: string }> }>, Override_Source_Reference_WID: string }>, zohorecruit: Partial<{ candidate: Record<string, unknown> }>, bullhorn: Partial<{ candidate: Record<string, unknown>, job_submission: Record<string, unknown> }>, smartrecruiters: Partial<{ candidate_with_questions: Record<string, unknown>, candidate_without_questions: Record<string, unknown>, candidate: Record<string, unknown>, consent_decisions: Partial<{ SINGLE: boolean, SMART_RECRUIT: boolean, SMART_CRM: boolean, SMART_MESSAGE_SMS: boolean, SMART_MESSAGE_WHATSAPP: boolean }> }>, talentadore: Partial<{ applications: Record<string, unknown> }>, guidecom: Partial<{ candidate: Record<string, unknown> }>, dvinci: Partial<{ application: Record<string, unknown>, candidate: Record<string, unknown> }>, hrworks: Partial<{ jobApplication: Record<string, unknown> }>, jobylon: Partial<{ application: Partial<{ message: string }> }>, avature: Partial<{ workflow: Partial<{ step: { id: number } }> }>, recruitee: Partial<{ candidate: Partial<{ cover_letter_text: string }> }>, rexx: Partial<{ candidate: Record<string, unknown> }>, umantis: Partial<{ person: Record<string, unknown> }>, piloga: Partial<{ candidate: Partial<{ street: string }> }>, pinpoint: Partial<{ candidate: Record<string, unknown> }>, covetorest: Partial<{ candidate: Partial<{ mandant: number }> }> }> & Partial<{ greenhouse: Partial<{ post_headers: Partial<{ "On-Behalf-Of": (string | null) }> }>, workable: Partial<{ on_behalf_of_user_remote_id: string }> }>), screening_question_answers?: Array<{ question_id: string, answer: (string | boolean | number | Array<string> | string | { name: string, content_type?: string, data_url?: string, data?: string }) }> }
export const PostAtsJobsJobIdApplicationsRequestBody = __schemas.Import("PostAtsJobsJobIdApplicationsRequestBody");

export type GetAtsUsersParameterCursor = string
export const GetAtsUsersParameterCursor = __schemas.Import("GetAtsUsersParameterCursor");

export type GetAtsUsersParameterPageSize = number
export const GetAtsUsersParameterPageSize = __schemas.Import("GetAtsUsersParameterPageSize");

export type GetAtsUsersParameterUpdatedAfter = string
export const GetAtsUsersParameterUpdatedAfter = __schemas.Import("GetAtsUsersParameterUpdatedAfter");

export type GetAtsUsersParameterIncludeDeleted = ("true" | "false")
export const GetAtsUsersParameterIncludeDeleted = __schemas.Import("GetAtsUsersParameterIncludeDeleted");

export type GetAtsUsersParameterIgnoreUnsupportedFilters = ("true" | "false")
export const GetAtsUsersParameterIgnoreUnsupportedFilters = __schemas.Import("GetAtsUsersParameterIgnoreUnsupportedFilters");

export type GetAtsUsersParameterIds = string
export const GetAtsUsersParameterIds = __schemas.Import("GetAtsUsersParameterIds");

export type GetAtsUsersParameterRemoteIds = string
export const GetAtsUsersParameterRemoteIds = __schemas.Import("GetAtsUsersParameterRemoteIds");

export type GetAtsUsersParameterEmails = string
export const GetAtsUsersParameterEmails = __schemas.Import("GetAtsUsersParameterEmails");

export interface GetAtsUsersPositiveResponse { status: "success", data: { next: (string | null), results: Array<{ id: string, remote_id: (string | null), first_name: (string | null), last_name: (string | null), email?: (string | null), status: (("ACTIVE" | "INACTIVE") | null), remote_data: (Record<string, unknown> | null), changed_at: string, remote_deleted_at: (string | null), system_roles: Array<{ remote_id: (string | null), remote_label: (string | null), scope: (("SYSTEM" | "JOB") | null), unified_type: (("HIRING_MANAGER" | "RECRUITER" | "COORDINATOR" | "SOURCER" | "INTERVIEWER" | "ADMIN") | null) }> }> } }
export const GetAtsUsersPositiveResponse = __schemas.Import("GetAtsUsersPositiveResponse");

export type GetAtsRolesParameterCursor = string
export const GetAtsRolesParameterCursor = __schemas.Import("GetAtsRolesParameterCursor");

export type GetAtsRolesParameterPageSize = number
export const GetAtsRolesParameterPageSize = __schemas.Import("GetAtsRolesParameterPageSize");

export type GetAtsRolesParameterUpdatedAfter = string
export const GetAtsRolesParameterUpdatedAfter = __schemas.Import("GetAtsRolesParameterUpdatedAfter");

export type GetAtsRolesParameterIncludeDeleted = ("true" | "false")
export const GetAtsRolesParameterIncludeDeleted = __schemas.Import("GetAtsRolesParameterIncludeDeleted");

export type GetAtsRolesParameterIgnoreUnsupportedFilters = ("true" | "false")
export const GetAtsRolesParameterIgnoreUnsupportedFilters = __schemas.Import("GetAtsRolesParameterIgnoreUnsupportedFilters");

export type GetAtsRolesParameterIds = string
export const GetAtsRolesParameterIds = __schemas.Import("GetAtsRolesParameterIds");

export type GetAtsRolesParameterRemoteIds = string
export const GetAtsRolesParameterRemoteIds = __schemas.Import("GetAtsRolesParameterRemoteIds");

export type GetAtsRolesParameterScopes = string
export const GetAtsRolesParameterScopes = __schemas.Import("GetAtsRolesParameterScopes");

export interface GetAtsRolesPositiveResponse { status: "success", data: { next: (string | null), results: Array<{ id: string, remote_id: (string | null), remote_label: (string | null), scope: (("SYSTEM" | "JOB") | null), unified_type: (("HIRING_MANAGER" | "RECRUITER" | "COORDINATOR" | "SOURCER" | "INTERVIEWER" | "ADMIN") | null), remote_data: (Record<string, unknown> | null), changed_at: string, remote_deleted_at: (string | null) }> } }
export const GetAtsRolesPositiveResponse = __schemas.Import("GetAtsRolesPositiveResponse");

export type GetAtsOffersParameterCursor = string
export const GetAtsOffersParameterCursor = __schemas.Import("GetAtsOffersParameterCursor");

export type GetAtsOffersParameterPageSize = number
export const GetAtsOffersParameterPageSize = __schemas.Import("GetAtsOffersParameterPageSize");

export type GetAtsOffersParameterUpdatedAfter = string
export const GetAtsOffersParameterUpdatedAfter = __schemas.Import("GetAtsOffersParameterUpdatedAfter");

export type GetAtsOffersParameterIncludeDeleted = ("true" | "false")
export const GetAtsOffersParameterIncludeDeleted = __schemas.Import("GetAtsOffersParameterIncludeDeleted");

export type GetAtsOffersParameterIgnoreUnsupportedFilters = ("true" | "false")
export const GetAtsOffersParameterIgnoreUnsupportedFilters = __schemas.Import("GetAtsOffersParameterIgnoreUnsupportedFilters");

export type GetAtsOffersParameterIds = string
export const GetAtsOffersParameterIds = __schemas.Import("GetAtsOffersParameterIds");

export type GetAtsOffersParameterRemoteIds = string
export const GetAtsOffersParameterRemoteIds = __schemas.Import("GetAtsOffersParameterRemoteIds");

export interface GetAtsOffersPositiveResponse { status: "success", data: { next: (string | null), results: Array<{ id: string, remote_id: (string | null), status: (("ACCEPTED" | "DECLINED" | "SENT" | "APPROVED" | "DRAFT" | "ABANDONED") | null), employment_start_date: (string | null), application_id: (string | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }>, changed_at: string, remote_deleted_at: (string | null), remote_created_at: (string | null), remote_updated_at: (string | null), remote_data: (Record<string, unknown> | null), application: ({ candidate: ({ id: string, remote_id: string, first_name: (string | null), last_name: (string | null), email_addresses?: (Array<{ email_address?: (string | null), type: (string | null) }> | null) } | null), job: ({ id: string, remote_id: string, name: (string | null) } | null) } | null) }> } }
export const GetAtsOffersPositiveResponse = __schemas.Import("GetAtsOffersPositiveResponse");

export type GetAtsRejectionReasonsParameterCursor = string
export const GetAtsRejectionReasonsParameterCursor = __schemas.Import("GetAtsRejectionReasonsParameterCursor");

export type GetAtsRejectionReasonsParameterPageSize = number
export const GetAtsRejectionReasonsParameterPageSize = __schemas.Import("GetAtsRejectionReasonsParameterPageSize");

export type GetAtsRejectionReasonsParameterUpdatedAfter = string
export const GetAtsRejectionReasonsParameterUpdatedAfter = __schemas.Import("GetAtsRejectionReasonsParameterUpdatedAfter");

export type GetAtsRejectionReasonsParameterIncludeDeleted = ("true" | "false")
export const GetAtsRejectionReasonsParameterIncludeDeleted = __schemas.Import("GetAtsRejectionReasonsParameterIncludeDeleted");

export type GetAtsRejectionReasonsParameterIgnoreUnsupportedFilters = ("true" | "false")
export const GetAtsRejectionReasonsParameterIgnoreUnsupportedFilters = __schemas.Import("GetAtsRejectionReasonsParameterIgnoreUnsupportedFilters");

export type GetAtsRejectionReasonsParameterIds = string
export const GetAtsRejectionReasonsParameterIds = __schemas.Import("GetAtsRejectionReasonsParameterIds");

export type GetAtsRejectionReasonsParameterRemoteIds = string
export const GetAtsRejectionReasonsParameterRemoteIds = __schemas.Import("GetAtsRejectionReasonsParameterRemoteIds");

export interface GetAtsRejectionReasonsPositiveResponse { status: "success", data: { next: (string | null), results: Array<{ id: string, remote_id: string, name: (string | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null) }> } }
export const GetAtsRejectionReasonsPositiveResponse = __schemas.Import("GetAtsRejectionReasonsPositiveResponse");

export type GetAtsInterviewsParameterCursor = string
export const GetAtsInterviewsParameterCursor = __schemas.Import("GetAtsInterviewsParameterCursor");

export type GetAtsInterviewsParameterPageSize = number
export const GetAtsInterviewsParameterPageSize = __schemas.Import("GetAtsInterviewsParameterPageSize");

export type GetAtsInterviewsParameterUpdatedAfter = string
export const GetAtsInterviewsParameterUpdatedAfter = __schemas.Import("GetAtsInterviewsParameterUpdatedAfter");

export type GetAtsInterviewsParameterIncludeDeleted = ("true" | "false")
export const GetAtsInterviewsParameterIncludeDeleted = __schemas.Import("GetAtsInterviewsParameterIncludeDeleted");

export type GetAtsInterviewsParameterIgnoreUnsupportedFilters = ("true" | "false")
export const GetAtsInterviewsParameterIgnoreUnsupportedFilters = __schemas.Import("GetAtsInterviewsParameterIgnoreUnsupportedFilters");

export type GetAtsInterviewsParameterIds = string
export const GetAtsInterviewsParameterIds = __schemas.Import("GetAtsInterviewsParameterIds");

export type GetAtsInterviewsParameterRemoteIds = string
export const GetAtsInterviewsParameterRemoteIds = __schemas.Import("GetAtsInterviewsParameterRemoteIds");

export type GetAtsInterviewsParameterJobIds = string
export const GetAtsInterviewsParameterJobIds = __schemas.Import("GetAtsInterviewsParameterJobIds");

export interface GetAtsInterviewsPositiveResponse { status: "success", data: { next: (string | null), results: Array<{ id: string, remote_id: (string | null), title: (string | null), starting_at: (string | null), ending_at: (string | null), location?: (Partial<{ city: (string | null), country: (string | null), raw: (string | null), state: (string | null), street_1: (string | null), street_2: (string | null), zip_code: (string | null) }> | null), video_conferencing_url: (string | null), application_id: (string | null), stage_id: (string | null), canceled: (boolean | null), remote_created_at: (string | null), remote_updated_at: (string | null), remote_data: (Record<string, unknown> | null), changed_at: string, remote_deleted_at: (string | null), users: Array<{ id: string, remote_id: (string | null), first_name: (string | null), last_name: (string | null), email?: (string | null) }>, application: ({ id: string, remote_id: (string | null), outcome: (("PENDING" | "HIRED" | "DECLINED") | null), rejection_reason_name: (string | null), candidate: ({ id: string, remote_id: string, first_name: (string | null), last_name: (string | null), email_addresses?: (Array<{ email_address?: (string | null), type: (string | null) }> | null) } | null), job: ({ id: string, remote_id: string, name: (string | null) } | null) } | null) }> } }
export const GetAtsInterviewsPositiveResponse = __schemas.Import("GetAtsInterviewsPositiveResponse");

export interface GetAtsActionsAtsCreateCandidatePositiveResponse { status: "success", data: Partial<{ attachment_restrictions: ({ total_size_bytes: (number | null), types: { CV: ({ is_supported: true, min_amount: (number | null), max_amount: (number | null), max_file_size_bytes: (number | null), accepted_mime_types: (Array<string> | null) } | { is_supported: false }), COVER_LETTER: ({ is_supported: true, min_amount: (number | null), max_amount: (number | null), max_file_size_bytes: (number | null), accepted_mime_types: (Array<string> | null) } | { is_supported: false }), OTHER: ({ is_supported: true, min_amount: (number | null), max_amount: (number | null), max_file_size_bytes: (number | null), accepted_mime_types: (Array<string> | null) } | { is_supported: false }) } } | null) }> }
export const GetAtsActionsAtsCreateCandidatePositiveResponse = __schemas.Import("GetAtsActionsAtsCreateCandidatePositiveResponse");

export interface GetAtsActionsAtsCreateApplicationPositiveResponse { status: "success", data: Partial<{ attachment_restrictions: ({ total_size_bytes: (number | null), types: { CV: ({ is_supported: true, min_amount: (number | null), max_amount: (number | null), max_file_size_bytes: (number | null), accepted_mime_types: (Array<string> | null) } | { is_supported: false }), COVER_LETTER: ({ is_supported: true, min_amount: (number | null), max_amount: (number | null), max_file_size_bytes: (number | null), accepted_mime_types: (Array<string> | null) } | { is_supported: false }), OTHER: ({ is_supported: true, min_amount: (number | null), max_amount: (number | null), max_file_size_bytes: (number | null), accepted_mime_types: (Array<string> | null) } | { is_supported: false }) } } | null) }> }
export const GetAtsActionsAtsCreateApplicationPositiveResponse = __schemas.Import("GetAtsActionsAtsCreateApplicationPositiveResponse");

export interface GetAtsActionsAtsAddApplicationAttachmentPositiveResponse { status: "success", data: Partial<{ attachment_restrictions: ({ types: { CV: ({ is_supported: true, max_file_size_bytes: (number | null), accepted_mime_types: (Array<string> | null) } | { is_supported: false }), COVER_LETTER: ({ is_supported: true, max_file_size_bytes: (number | null), accepted_mime_types: (Array<string> | null) } | { is_supported: false }), OTHER: ({ is_supported: true, max_file_size_bytes: (number | null), accepted_mime_types: (Array<string> | null) } | { is_supported: false }) } } | null) }> }
export const GetAtsActionsAtsAddApplicationAttachmentPositiveResponse = __schemas.Import("GetAtsActionsAtsAddApplicationAttachmentPositiveResponse");

export interface GetAtsActionsAtsAddCandidateAttachmentPositiveResponse { status: "success", data: Partial<{ attachment_restrictions: ({ types: { CV: ({ is_supported: true, max_file_size_bytes: (number | null), accepted_mime_types: (Array<string> | null) } | { is_supported: false }), COVER_LETTER: ({ is_supported: true, max_file_size_bytes: (number | null), accepted_mime_types: (Array<string> | null) } | { is_supported: false }), OTHER: ({ is_supported: true, max_file_size_bytes: (number | null), accepted_mime_types: (Array<string> | null) } | { is_supported: false }) } } | null) }> }
export const GetAtsActionsAtsAddCandidateAttachmentPositiveResponse = __schemas.Import("GetAtsActionsAtsAddCandidateAttachmentPositiveResponse");

export interface PostAtsImportTrackedApplicationPositiveResponse { status: "success", data: { id: string, tracked_at: (string | null), imported_id: Partial<{ erecruiter: ({ id_type: "application_and_job_remote_ids", application_remote_id: string, job_remote_id: string } | { id_type: "application_and_candidate_remote_ids", candidate_remote_id: string, application_remote_id: string }), successfactors: { id_type: "application_remote_id", application_remote_id: string }, recruitee: { id_type: "placement_id", placement_id: string }, greenhouse: { id_type: "application_id", application_id: string }, onlyfy: { id_type: "application_id", application_id: string }, smartrecruiters: { id_type: "candidate_and_job_remote_ids", candidate_remote_id: string, job_remote_id: string } }> }, warnings: Array<{ message: string }> }
export const PostAtsImportTrackedApplicationPositiveResponse = __schemas.Import("PostAtsImportTrackedApplicationPositiveResponse");

export interface PostAtsImportTrackedApplicationRequestBody { erecruiter?: ({ id_type: "application_and_job_remote_ids", application_remote_id: string, job_remote_id: string } | { id_type: "application_and_candidate_remote_ids", candidate_remote_id: string, application_remote_id: string }), successfactors?: { id_type: "application_remote_id", application_remote_id: string }, recruitee?: { id_type: "placement_id", placement_id: string }, greenhouse?: { id_type: "application_id", application_id: string }, onlyfy?: { id_type: "application_id", application_id: string }, smartrecruiters?: { id_type: "candidate_and_job_remote_ids", candidate_remote_id: string, job_remote_id: string }, tracked_at: (string | null) }
export const PostAtsImportTrackedApplicationRequestBody = __schemas.Import("PostAtsImportTrackedApplicationRequestBody");

export interface PostAtsCustomAvionteSyncedJobsPositiveResponse { status: "success", data: Record<string, unknown> }
export const PostAtsCustomAvionteSyncedJobsPositiveResponse = __schemas.Import("PostAtsCustomAvionteSyncedJobsPositiveResponse");

export interface PostAtsCustomAvionteSyncedJobsRequestBody { job_remote_id: string }
export const PostAtsCustomAvionteSyncedJobsRequestBody = __schemas.Import("PostAtsCustomAvionteSyncedJobsRequestBody");

export type DeleteAtsCustomAvionteSyncedJobsJobRemoteIdParameterJobRemoteId = string
export const DeleteAtsCustomAvionteSyncedJobsJobRemoteIdParameterJobRemoteId = __schemas.Import("DeleteAtsCustomAvionteSyncedJobsJobRemoteIdParameterJobRemoteId");

export interface DeleteAtsCustomAvionteSyncedJobsJobRemoteIdPositiveResponse { status: "success", data: Record<string, unknown> }
export const DeleteAtsCustomAvionteSyncedJobsJobRemoteIdPositiveResponse = __schemas.Import("DeleteAtsCustomAvionteSyncedJobsJobRemoteIdPositiveResponse");

export type DeleteAtsCustomAvionteSyncedJobsJobRemoteIdRequestBody = Partial<{  }>
export const DeleteAtsCustomAvionteSyncedJobsJobRemoteIdRequestBody = __schemas.Import("DeleteAtsCustomAvionteSyncedJobsJobRemoteIdRequestBody");

export interface GetAssessmentPackagesPositiveResponse { status: "success", data: { packages: Array<{ id: string, name: string, description: string, updated_at: (string | null), type: (("BEHAVIORAL" | "VIDEO_INTERVIEW" | "SKILLS_TEST" | "BACKGROUND_CHECK" | "REFERENCE_CHECK") | null) }> } }
export const GetAssessmentPackagesPositiveResponse = __schemas.Import("GetAssessmentPackagesPositiveResponse");

export interface PutAssessmentPackagesPositiveResponse { status: "success", data: Record<string, unknown>, warnings: Array<{ message: string }> }
export const PutAssessmentPackagesPositiveResponse = __schemas.Import("PutAssessmentPackagesPositiveResponse");

export interface PutAssessmentPackagesRequestBody { packages: Array<{ id: string, type: ("BEHAVIORAL" | "VIDEO_INTERVIEW" | "SKILLS_TEST" | "BACKGROUND_CHECK" | "REFERENCE_CHECK"), name: string, description: string }> }
export const PutAssessmentPackagesRequestBody = __schemas.Import("PutAssessmentPackagesRequestBody");

export type GetAssessmentOrdersParameterCursor = string
export const GetAssessmentOrdersParameterCursor = __schemas.Import("GetAssessmentOrdersParameterCursor");

export type GetAssessmentOrdersParameterPageSize = number
export const GetAssessmentOrdersParameterPageSize = __schemas.Import("GetAssessmentOrdersParameterPageSize");

export type GetAssessmentOrdersParameterIds = string
export const GetAssessmentOrdersParameterIds = __schemas.Import("GetAssessmentOrdersParameterIds");

export type GetAssessmentOrdersParameterStatuses = string
export const GetAssessmentOrdersParameterStatuses = __schemas.Import("GetAssessmentOrdersParameterStatuses");

export type GetAssessmentOrdersParameterCreatedAfter = string
export const GetAssessmentOrdersParameterCreatedAfter = __schemas.Import("GetAssessmentOrdersParameterCreatedAfter");

export interface GetAssessmentOrdersPositiveResponse { status: "success", data: { next: (string | null), results: Array<{ id: string, package_id: string, status: ("OPEN" | "COMPLETED" | "CANCELLED" | "REJECTED"), candidate: { remote_id: (string | null), email: string, first_name: (string | null), last_name: (string | null), phone: (string | null) }, application: { remote_id: (string | null) }, job: { remote_id: (string | null), name: (string | null), job_code: (string | null), description: (string | null), location: (Partial<{ street_1: (string | null), street_2: (string | null), city: (string | null), state: (string | null), zip_code: (string | null), country: (string | null), raw: (string | null) }> | null), hiring_team: Array<{ remote_id: (string | null), email: (string | null), first_name: (string | null), last_name: (string | null), hiring_team_roles: Array<("RECRUITER" | "HIRING_MANAGER")> }> } }> } }
export const GetAssessmentOrdersPositiveResponse = __schemas.Import("GetAssessmentOrdersPositiveResponse");

export type GetAssessmentOrdersOpenParameterCursor = string
export const GetAssessmentOrdersOpenParameterCursor = __schemas.Import("GetAssessmentOrdersOpenParameterCursor");

export type GetAssessmentOrdersOpenParameterPageSize = number
export const GetAssessmentOrdersOpenParameterPageSize = __schemas.Import("GetAssessmentOrdersOpenParameterPageSize");

export interface GetAssessmentOrdersOpenPositiveResponse { status: "success", data: { next: (string | null), results: Array<{ id: string, package_id: string, candidate: { remote_id: (string | null), email: string, first_name: (string | null), last_name: (string | null), phone: (string | null) }, application: { remote_id: (string | null) }, job: { remote_id: (string | null), name: (string | null), job_code: (string | null), description: (string | null), location: (Partial<{ street_1: (string | null), street_2: (string | null), city: (string | null), state: (string | null), zip_code: (string | null), country: (string | null), raw: (string | null) }> | null), hiring_team: Array<{ remote_id: (string | null), email: (string | null), first_name: (string | null), last_name: (string | null), hiring_team_roles: Array<("RECRUITER" | "HIRING_MANAGER")> }> } }> } }
export const GetAssessmentOrdersOpenPositiveResponse = __schemas.Import("GetAssessmentOrdersOpenPositiveResponse");

export type PutAssessmentOrdersAssessmentOrderIdResultParameterAssessmentOrderId = string
export const PutAssessmentOrdersAssessmentOrderIdResultParameterAssessmentOrderId = __schemas.Import("PutAssessmentOrdersAssessmentOrderIdResultParameterAssessmentOrderId");

export interface PutAssessmentOrdersAssessmentOrderIdResultPositiveResponse { status: "success", data: Record<string, unknown>, warnings: Array<{ message: string }> }
export const PutAssessmentOrdersAssessmentOrderIdResultPositiveResponse = __schemas.Import("PutAssessmentOrdersAssessmentOrderIdResultPositiveResponse");

export interface PutAssessmentOrdersAssessmentOrderIdResultRequestBody { status: ("COMPLETED" | "CANCELLED" | "OPEN"), result_url: string, completed_at?: string, score?: number, max_score?: number, attributes?: Array<({ type: "TEXT", label: string, value: string } | { type: "SUB_RESULT", id: string, label: string, score: { value: number, max: number }, status: ("COMPLETED" | "CANCELLED") })>, attachments?: Array<{ name: string, content_type?: string, data_url?: string, data?: string }>, remote_fields?: Partial<{ smartrecruiters: Partial<{ scoreLabel: string }>, recruitee: Partial<{ subtitle: string }> }> }
export const PutAssessmentOrdersAssessmentOrderIdResultRequestBody = __schemas.Import("PutAssessmentOrdersAssessmentOrderIdResultRequestBody");

export type GetLmsUsersParameterCursor = string
export const GetLmsUsersParameterCursor = __schemas.Import("GetLmsUsersParameterCursor");

export type GetLmsUsersParameterPageSize = number
export const GetLmsUsersParameterPageSize = __schemas.Import("GetLmsUsersParameterPageSize");

export type GetLmsUsersParameterUpdatedAfter = string
export const GetLmsUsersParameterUpdatedAfter = __schemas.Import("GetLmsUsersParameterUpdatedAfter");

export type GetLmsUsersParameterIncludeDeleted = ("true" | "false")
export const GetLmsUsersParameterIncludeDeleted = __schemas.Import("GetLmsUsersParameterIncludeDeleted");

export type GetLmsUsersParameterIgnoreUnsupportedFilters = ("true" | "false")
export const GetLmsUsersParameterIgnoreUnsupportedFilters = __schemas.Import("GetLmsUsersParameterIgnoreUnsupportedFilters");

export type GetLmsUsersParameterIds = string
export const GetLmsUsersParameterIds = __schemas.Import("GetLmsUsersParameterIds");

export type GetLmsUsersParameterRemoteIds = string
export const GetLmsUsersParameterRemoteIds = __schemas.Import("GetLmsUsersParameterRemoteIds");

export type GetLmsUsersParameterWorkEmails = string
export const GetLmsUsersParameterWorkEmails = __schemas.Import("GetLmsUsersParameterWorkEmails");

export interface GetLmsUsersPositiveResponse { status: "success", data: { next: (string | null), results: Array<{ id: string, remote_id: string, first_name: (string | null), last_name: (string | null), work_email: (string | null), status: (("ACTIVE" | "INACTIVE") | null), remote_created_at: (string | null), remote_deleted_at: (string | null), changed_at: string, remote_data: (Record<string, unknown> | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }> }> } }
export const GetLmsUsersPositiveResponse = __schemas.Import("GetLmsUsersPositiveResponse");

export type GetLmsCourseProgressionsParameterCursor = string
export const GetLmsCourseProgressionsParameterCursor = __schemas.Import("GetLmsCourseProgressionsParameterCursor");

export type GetLmsCourseProgressionsParameterPageSize = number
export const GetLmsCourseProgressionsParameterPageSize = __schemas.Import("GetLmsCourseProgressionsParameterPageSize");

export type GetLmsCourseProgressionsParameterUpdatedAfter = string
export const GetLmsCourseProgressionsParameterUpdatedAfter = __schemas.Import("GetLmsCourseProgressionsParameterUpdatedAfter");

export type GetLmsCourseProgressionsParameterIncludeDeleted = ("true" | "false")
export const GetLmsCourseProgressionsParameterIncludeDeleted = __schemas.Import("GetLmsCourseProgressionsParameterIncludeDeleted");

export type GetLmsCourseProgressionsParameterIgnoreUnsupportedFilters = ("true" | "false")
export const GetLmsCourseProgressionsParameterIgnoreUnsupportedFilters = __schemas.Import("GetLmsCourseProgressionsParameterIgnoreUnsupportedFilters");

export type GetLmsCourseProgressionsParameterIds = string
export const GetLmsCourseProgressionsParameterIds = __schemas.Import("GetLmsCourseProgressionsParameterIds");

export type GetLmsCourseProgressionsParameterRemoteIds = string
export const GetLmsCourseProgressionsParameterRemoteIds = __schemas.Import("GetLmsCourseProgressionsParameterRemoteIds");

export type GetLmsCourseProgressionsParameterUserIds = string
export const GetLmsCourseProgressionsParameterUserIds = __schemas.Import("GetLmsCourseProgressionsParameterUserIds");

export type GetLmsCourseProgressionsParameterCourseIds = string
export const GetLmsCourseProgressionsParameterCourseIds = __schemas.Import("GetLmsCourseProgressionsParameterCourseIds");

export interface GetLmsCourseProgressionsPositiveResponse { status: "success", data: { next: (string | null), results: Array<{ id: string, remote_id: string, user_id: string, course_revision_id: string, status: (("ENROLLED" | "IN_PROGRESS" | "COMPLETED" | "DROPPED") | null), enrolled_at: (string | null), completed_at: (string | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null), user: { id: string, remote_id: string, first_name: (string | null), last_name: (string | null), work_email: (string | null) }, course_revision: { id: string, remote_id: string, title: (string | null), course: ({ id: string, remote_id: string } | null) } }> } }
export const GetLmsCourseProgressionsPositiveResponse = __schemas.Import("GetLmsCourseProgressionsPositiveResponse");

export interface PostLmsCourseProgressionsPositiveResponse { status: "success", data: { id: string, remote_id: string, user_id: string, course_revision_id: string, status: (("ENROLLED" | "IN_PROGRESS" | "COMPLETED" | "DROPPED") | null), enrolled_at: (string | null), completed_at: (string | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null), user: { id: string, remote_id: string, first_name: (string | null), last_name: (string | null), work_email: (string | null) }, course_revision: { id: string, remote_id: string, title: (string | null), course: ({ id: string, remote_id: string } | null) } }, warnings: Array<{ message: string }> }
export const PostLmsCourseProgressionsPositiveResponse = __schemas.Import("PostLmsCourseProgressionsPositiveResponse");

export interface PostLmsCourseProgressionsRequestBody { user_id: string, course_revision_id: string }
export const PostLmsCourseProgressionsRequestBody = __schemas.Import("PostLmsCourseProgressionsRequestBody");

export type PostLmsCourseProgressionsCourseProgressionIdCompleteParameterCourseProgressionId = string
export const PostLmsCourseProgressionsCourseProgressionIdCompleteParameterCourseProgressionId = __schemas.Import("PostLmsCourseProgressionsCourseProgressionIdCompleteParameterCourseProgressionId");

export interface PostLmsCourseProgressionsCourseProgressionIdCompletePositiveResponse { status: "success", data: { id: string, remote_id: string, user_id: string, course_revision_id: string, status: (("ENROLLED" | "IN_PROGRESS" | "COMPLETED" | "DROPPED") | null), enrolled_at: (string | null), completed_at: (string | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null), user: { id: string, remote_id: string, first_name: (string | null), last_name: (string | null), work_email: (string | null) }, course_revision: { id: string, remote_id: string, title: (string | null), course: ({ id: string, remote_id: string } | null) } }, warnings: Array<{ message: string }> }
export const PostLmsCourseProgressionsCourseProgressionIdCompletePositiveResponse = __schemas.Import("PostLmsCourseProgressionsCourseProgressionIdCompletePositiveResponse");

export type PostLmsCourseProgressionsCourseProgressionIdCompleteRequestBody = Partial<{ completed_at: (string | null), score: (number | null) }>
export const PostLmsCourseProgressionsCourseProgressionIdCompleteRequestBody = __schemas.Import("PostLmsCourseProgressionsCourseProgressionIdCompleteRequestBody");

export type GetLmsCoursesParameterCursor = string
export const GetLmsCoursesParameterCursor = __schemas.Import("GetLmsCoursesParameterCursor");

export type GetLmsCoursesParameterPageSize = number
export const GetLmsCoursesParameterPageSize = __schemas.Import("GetLmsCoursesParameterPageSize");

export type GetLmsCoursesParameterUpdatedAfter = string
export const GetLmsCoursesParameterUpdatedAfter = __schemas.Import("GetLmsCoursesParameterUpdatedAfter");

export type GetLmsCoursesParameterIncludeDeleted = ("true" | "false")
export const GetLmsCoursesParameterIncludeDeleted = __schemas.Import("GetLmsCoursesParameterIncludeDeleted");

export type GetLmsCoursesParameterIgnoreUnsupportedFilters = ("true" | "false")
export const GetLmsCoursesParameterIgnoreUnsupportedFilters = __schemas.Import("GetLmsCoursesParameterIgnoreUnsupportedFilters");

export type GetLmsCoursesParameterIds = string
export const GetLmsCoursesParameterIds = __schemas.Import("GetLmsCoursesParameterIds");

export type GetLmsCoursesParameterRemoteIds = string
export const GetLmsCoursesParameterRemoteIds = __schemas.Import("GetLmsCoursesParameterRemoteIds");

export interface GetLmsCoursesPositiveResponse { status: "success", data: { next: (string | null), results: Array<{ id: string, remote_id: string, provider_id: (string | null), origin_id: (string | null), remote_created_at: (string | null), remote_deleted_at: (string | null), changed_at: string, remote_data: (Record<string, unknown> | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }>, provider: ({ id: string, remote_id: string, name: (string | null) } | null), revisions: Array<{ id: string, remote_id: string, course_id: (string | null), title: (string | null), description: (string | null), remote_url: (string | null), status: (("ACTIVE" | "INACTIVE") | null), remote_created_at: (string | null), remote_deleted_at: (string | null), changed_at: string, remote_data: (Record<string, unknown> | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }>, skill_assignments: Array<{ skill: { id: string, remote_id: (string | null), name: (string | null) } }> }> }> } }
export const GetLmsCoursesPositiveResponse = __schemas.Import("GetLmsCoursesPositiveResponse");

export interface PostLmsCoursesBulkPositiveResponse { status: "success", data: { task_id: string }, warnings: Array<{ message: string }> }
export const PostLmsCoursesBulkPositiveResponse = __schemas.Import("PostLmsCoursesBulkPositiveResponse");

export interface PostLmsCoursesBulkRequestBody { items: Array<{ origin_id: string, course: { type: "EXTERNAL", title: string, description?: (string | null), course_url: string, thumbnail_url?: (string | null), duration?: (number | null), languages?: (Array<string> | null) } }> }
export const PostLmsCoursesBulkRequestBody = __schemas.Import("PostLmsCoursesBulkRequestBody");

export type GetLmsCoursesBulkTaskIdParameterTaskId = string
export const GetLmsCoursesBulkTaskIdParameterTaskId = __schemas.Import("GetLmsCoursesBulkTaskIdParameterTaskId");

export interface GetLmsCoursesBulkTaskIdPositiveResponse { status: "success", data: ({ task_id: string, created_at: string, status: "PENDING", completed_at: null } | { task_id: string, created_at: string, status: "COMPLETED", data: Array<({ origin_id: string, status: "SUCCEEDED", data: { id: string } } | { origin_id: string, status: "FAILED", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS" | "LMS.COURSE_UPDATE_NOT_SUPPORTED" | "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING" | "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } })>, completed_at: string } | { task_id: string, created_at: string, status: "FAILED", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS" | "LMS.COURSE_UPDATE_NOT_SUPPORTED" | "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING" | "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) }, completed_at: string }) }
export const GetLmsCoursesBulkTaskIdPositiveResponse = __schemas.Import("GetLmsCoursesBulkTaskIdPositiveResponse");

export type PostLmsCoursesCourseIdDeactivateParameterCourseId = string
export const PostLmsCoursesCourseIdDeactivateParameterCourseId = __schemas.Import("PostLmsCoursesCourseIdDeactivateParameterCourseId");

export interface PostLmsCoursesCourseIdDeactivatePositiveResponse { status: "success", data: { id: string, remote_id: string, provider_id: (string | null), origin_id: (string | null), remote_created_at: (string | null), remote_deleted_at: (string | null), changed_at: string, remote_data: (Record<string, unknown> | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }>, provider: ({ id: string, remote_id: string, name: (string | null) } | null), revisions: Array<{ id: string, remote_id: string, course_id: (string | null), title: (string | null), description: (string | null), remote_url: (string | null), status: (("ACTIVE" | "INACTIVE") | null), remote_created_at: (string | null), remote_deleted_at: (string | null), changed_at: string, remote_data: (Record<string, unknown> | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }>, skill_assignments: Array<{ skill: { id: string, remote_id: (string | null), name: (string | null) } }> }> }, warnings: Array<{ message: string }> }
export const PostLmsCoursesCourseIdDeactivatePositiveResponse = __schemas.Import("PostLmsCoursesCourseIdDeactivatePositiveResponse");

export type PostLmsCoursesCourseIdDeactivateRequestBody = Partial<{  }>
export const PostLmsCoursesCourseIdDeactivateRequestBody = __schemas.Import("PostLmsCoursesCourseIdDeactivateRequestBody");

export type GetLmsSkillsParameterCursor = string
export const GetLmsSkillsParameterCursor = __schemas.Import("GetLmsSkillsParameterCursor");

export type GetLmsSkillsParameterPageSize = number
export const GetLmsSkillsParameterPageSize = __schemas.Import("GetLmsSkillsParameterPageSize");

export type GetLmsSkillsParameterUpdatedAfter = string
export const GetLmsSkillsParameterUpdatedAfter = __schemas.Import("GetLmsSkillsParameterUpdatedAfter");

export type GetLmsSkillsParameterIncludeDeleted = ("true" | "false")
export const GetLmsSkillsParameterIncludeDeleted = __schemas.Import("GetLmsSkillsParameterIncludeDeleted");

export type GetLmsSkillsParameterIgnoreUnsupportedFilters = ("true" | "false")
export const GetLmsSkillsParameterIgnoreUnsupportedFilters = __schemas.Import("GetLmsSkillsParameterIgnoreUnsupportedFilters");

export type GetLmsSkillsParameterIds = string
export const GetLmsSkillsParameterIds = __schemas.Import("GetLmsSkillsParameterIds");

export type GetLmsSkillsParameterRemoteIds = string
export const GetLmsSkillsParameterRemoteIds = __schemas.Import("GetLmsSkillsParameterRemoteIds");

export interface GetLmsSkillsPositiveResponse { status: "success", data: { next: (string | null), results: Array<{ id: string, remote_id: (string | null), name: (string | null), remote_created_at: (string | null), remote_deleted_at: (string | null), changed_at: string, remote_data: (Record<string, unknown> | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }> }> } }
export const GetLmsSkillsPositiveResponse = __schemas.Import("GetLmsSkillsPositiveResponse");

export interface PostAiApplyCareerSitesPositiveResponse { status: "success", data: { id: string, label: string } }
export const PostAiApplyCareerSitesPositiveResponse = __schemas.Import("PostAiApplyCareerSitesPositiveResponse");

export interface PostAiApplyCareerSitesRequestBody { label: string }
export const PostAiApplyCareerSitesRequestBody = __schemas.Import("PostAiApplyCareerSitesRequestBody");

export type GetAiApplyCareerSitesParameterCursor = string
export const GetAiApplyCareerSitesParameterCursor = __schemas.Import("GetAiApplyCareerSitesParameterCursor");

export type GetAiApplyCareerSitesParameterPageSize = number
export const GetAiApplyCareerSitesParameterPageSize = __schemas.Import("GetAiApplyCareerSitesParameterPageSize");

export type GetAiApplyCareerSitesParameterIds = string
export const GetAiApplyCareerSitesParameterIds = __schemas.Import("GetAiApplyCareerSitesParameterIds");

export interface GetAiApplyCareerSitesPositiveResponse { status: "success", data: { results: Array<{ id: string, label: string }>, next: (string | null) } }
export const GetAiApplyCareerSitesPositiveResponse = __schemas.Import("GetAiApplyCareerSitesPositiveResponse");

export type GetAiApplyPostingsParameterCursor = string
export const GetAiApplyPostingsParameterCursor = __schemas.Import("GetAiApplyPostingsParameterCursor");

export type GetAiApplyPostingsParameterPageSize = number
export const GetAiApplyPostingsParameterPageSize = __schemas.Import("GetAiApplyPostingsParameterPageSize");

export type GetAiApplyPostingsParameterIds = string
export const GetAiApplyPostingsParameterIds = __schemas.Import("GetAiApplyPostingsParameterIds");

export type GetAiApplyPostingsParameterCareerSiteIds = string
export const GetAiApplyPostingsParameterCareerSiteIds = __schemas.Import("GetAiApplyPostingsParameterCareerSiteIds");

export type GetAiApplyPostingsParameterJobCodes = string
export const GetAiApplyPostingsParameterJobCodes = __schemas.Import("GetAiApplyPostingsParameterJobCodes");

export interface GetAiApplyPostingsPositiveResponse { status: "success", data: { results: Array<{ id: string, career_site: { id: string, label: string }, url: string, job_code: (string | null), created_at: string, updated_at: string, archived_at: (string | null), archived_reason: (("JOB_POSTING_TAKEN_OFFLINE" | "MANUAL_ARCHIVE" | "REMOVED_FROM_JOB_FEED") | null), availability: ("APPLYABLE" | "PENDING" | "ARCHIVED" | "UNAVAILABLE") }>, next: (string | null) } }
export const GetAiApplyPostingsPositiveResponse = __schemas.Import("GetAiApplyPostingsPositiveResponse");

export interface PostAiApplyPostingsPositiveResponse { status: "success", data: { id: string, career_site: { id: string, label: string }, url: string, job_code: (string | null), created_at: string, updated_at: string, archived_at: (string | null), archived_reason: (("JOB_POSTING_TAKEN_OFFLINE" | "MANUAL_ARCHIVE" | "REMOVED_FROM_JOB_FEED") | null), availability: ("APPLYABLE" | "PENDING" | "ARCHIVED" | "UNAVAILABLE") } }
export const PostAiApplyPostingsPositiveResponse = __schemas.Import("PostAiApplyPostingsPositiveResponse");

export interface PostAiApplyPostingsRequestBody { url: string, job_code?: string, location?: ({ country: ("AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BV" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HM" | "HN" | "HR" | "HT" | "HU" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "YE" | "YT" | "ZA" | "ZM" | "ZW"), postal_code?: string } | null), career_site_id: string }
export const PostAiApplyPostingsRequestBody = __schemas.Import("PostAiApplyPostingsRequestBody");

export type PostAiApplyPostingsPostingIdInquireParameterPostingId = string
export const PostAiApplyPostingsPostingIdInquireParameterPostingId = __schemas.Import("PostAiApplyPostingsPostingIdInquireParameterPostingId");

export interface PostAiApplyPostingsPostingIdInquirePositiveResponse { status: "success", data: { application_form: Array<({ block_type: "QUESTION", question_id: string, label: string, description: (string | null), required: boolean, category: ("EEO" | null), question_type: ("TEXT" | "NUMBER" | "BOOLEAN" | "FILE" | "DATE" | "SINGLE_SELECT" | "MULTI_SELECT"), unified_key: (("EMAIL" | "RESIDENCE_TYPE" | "RESIDENCE_FULL_STRING" | "RESIDENCE_COUNTRY" | "RESIDENCE_CITY" | "RESIDENCE_STATE" | "RESIDENCE_LINE_1" | "RESIDENCE_LINE_2" | "RESIDENCE_ZIP_CODE" | "APPLICANT_POOL_CONSENT" | "TERMS_AND_CONDITIONS" | "FIRST_NAME" | "LAST_NAME" | "FULL_NAME" | "GENDER" | "EXPECTED_START_DATE" | "RESUME" | "BIRTH_DATE" | "PHONE_NUMBER_TYPE" | "FULL_PHONE_NUMBER" | "PHONE_COUNTRY_CODE" | "PHONE_NATIONAL_NUMBER" | "PHONE_EXTENSION") | null), options: (Array<{ id: string, label: string, unified_key: (("HOME" | "WORK" | "MAILING" | "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BV" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HM" | "HN" | "HR" | "HT" | "HU" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "YE" | "YT" | "ZA" | "ZM" | "ZW" | "MALE" | "FEMALE" | "NON_BINARY" | "NOT_SPECIFIED" | "MOBILE" | "LANDLINE" | "SOURCE_OTHER" | "SOURCE_OTHER_JOB_BOARD") | null) }> | null), display_when: ({ question_id: string, answer_equals: (string | Array<string> | number | boolean | { name: string, content_type: string, data: unknown }) } | null) } | { block_type: "SECTION", label: string, children: Array<Record<string, unknown>> })>, submission_token: string } }
export const PostAiApplyPostingsPostingIdInquirePositiveResponse = __schemas.Import("PostAiApplyPostingsPostingIdInquirePositiveResponse");

export type PostAiApplyPostingsPostingIdInquireRequestBody = Partial<{  }>
export const PostAiApplyPostingsPostingIdInquireRequestBody = __schemas.Import("PostAiApplyPostingsPostingIdInquireRequestBody");

export interface PostAiApplyApplyPositiveResponse { status: "success", data: { id: string, posting_id: string, status: string, created_at: string, updated_at: string } }
export const PostAiApplyApplyPositiveResponse = __schemas.Import("PostAiApplyApplyPositiveResponse");

export interface PostAiApplyApplyRequestBody { submission_token: string, candidate_email: string, query_params?: Record<string, string>, screening_question_answers: Array<{ question_id: string, answer: (string | Array<string> | number | boolean | { name: string, content_type: string, data: string }) }>, additional_clicks?: number, additional_clicks_scatter_duration?: number }
export const PostAiApplyApplyRequestBody = __schemas.Import("PostAiApplyApplyRequestBody");

export type GetAiApplyApplicationsParameterCursor = string
export const GetAiApplyApplicationsParameterCursor = __schemas.Import("GetAiApplyApplicationsParameterCursor");

export type GetAiApplyApplicationsParameterPageSize = number
export const GetAiApplyApplicationsParameterPageSize = __schemas.Import("GetAiApplyApplicationsParameterPageSize");

export type GetAiApplyApplicationsParameterIds = string
export const GetAiApplyApplicationsParameterIds = __schemas.Import("GetAiApplyApplicationsParameterIds");

export type GetAiApplyApplicationsParameterJobPostingIds = string
export const GetAiApplyApplicationsParameterJobPostingIds = __schemas.Import("GetAiApplyApplicationsParameterJobPostingIds");

export interface GetAiApplyApplicationsPositiveResponse { status: "success", data: { results: Array<{ id: string, job_posting_id: string, status: ("SUBMITTED" | "DUPLICATE" | "PENDING" | "FAILED"), created_at: string, updated_at: string }>, next: (string | null) } }
export const GetAiApplyApplicationsPositiveResponse = __schemas.Import("GetAiApplyApplicationsPositiveResponse");

export type GetAiApplyUnifiedApiJobsParameterCursor = string
export const GetAiApplyUnifiedApiJobsParameterCursor = __schemas.Import("GetAiApplyUnifiedApiJobsParameterCursor");

export type GetAiApplyUnifiedApiJobsParameterPageSize = number
export const GetAiApplyUnifiedApiJobsParameterPageSize = __schemas.Import("GetAiApplyUnifiedApiJobsParameterPageSize");

export type GetAiApplyUnifiedApiJobsParameterIds = string
export const GetAiApplyUnifiedApiJobsParameterIds = __schemas.Import("GetAiApplyUnifiedApiJobsParameterIds");

export type GetAiApplyUnifiedApiJobsParameterRemoteIds = string
export const GetAiApplyUnifiedApiJobsParameterRemoteIds = __schemas.Import("GetAiApplyUnifiedApiJobsParameterRemoteIds");

export type GetAiApplyUnifiedApiJobsParameterJobCodes = string
export const GetAiApplyUnifiedApiJobsParameterJobCodes = __schemas.Import("GetAiApplyUnifiedApiJobsParameterJobCodes");

export type GetAiApplyUnifiedApiJobsParameterCareerSiteIds = string
export const GetAiApplyUnifiedApiJobsParameterCareerSiteIds = __schemas.Import("GetAiApplyUnifiedApiJobsParameterCareerSiteIds");

export interface GetAiApplyUnifiedApiJobsPositiveResponse { status: "success", data: { results: Array<{ id: string, remote_id: string, name: (string | null), job_code: (string | null), description: (string | null), confidential: (boolean | null), weekly_hours: (number | null), category: (string | null), department: (string | null), post_url: (string | null), experience_level: (string | null), salary_amount: (number | null), salary_amount_from: (number | null), salary_amount_to: (number | null), salary_currency: (string | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<Record<string, unknown>>, opened_at: (string | null), closed_at: (string | null), remote_created_at: (string | null), remote_updated_at: (string | null), contact_id: (string | null), remote_data: (Record<string, unknown> | null), changed_at: string, remote_deleted_at: (string | null), remote_url: (string | null), stages: Array<Record<string, unknown>>, screening_questions: (Array<{ id: string, remote_id: (string | null), title: (string | null), description: (string | null), format?: ({ display_type?: (("SINGLE_LINE" | "MULTI_LINE" | "EMAIL" | "URL") | null), max_length?: (number | null), type: "TEXT" } | { display_type?: (("SLIDER" | "FIELD") | null), max?: (number | null), min?: (number | null), type: "NUMBER" } | { accepted_mime_types?: (Array<string> | null), max_file_size_bytes?: (number | null), type: "FILE" } | { display_type?: (("DROPDOWN" | "RADIO") | null), options: Array<{ id: string, remote_id?: (string | null), name: string }>, type: "SINGLE_SELECT" } | { type: "BOOLEAN" } | { type: "DATE" } | { options: Array<{ id: string, remote_id?: (string | null), name: string }>, type: "MULTI_SELECT" } | { type: "INFORMATION" } | { raw_question?: unknown, type: "UNKNOWN" } | null), category: ("EEO" | null), index?: (number | null), required: (boolean | null), precondition_question_id?: (string | null), precondition_options?: (Array<string> | Array<boolean> | null) }> | null), job_postings: Array<Record<string, unknown>>, hiring_team: Array<Record<string, unknown>>, employment_type?: (("FULL_TIME" | "PART_TIME" | "CONTRACT" | "SEASONAL" | "INTERNSHIP") | string | null), status?: (("OPEN" | "CLOSED" | "DRAFT" | "ARCHIVED") | string | null), visibility: (string | null), remote_work_status: (string | null), salary_period: (string | null), location?: (Partial<{ city: (string | null), country: (string | null), raw: (string | null), state: (string | null), street_1: (string | null), street_2: (string | null), zip_code: (string | null) }> | null) }>, next: (string | null) } }
export const GetAiApplyUnifiedApiJobsPositiveResponse = __schemas.Import("GetAiApplyUnifiedApiJobsPositiveResponse");

export type PostAiApplyUnifiedApiJobsJobIdApplicationsParameterJobId = string
export const PostAiApplyUnifiedApiJobsJobIdApplicationsParameterJobId = __schemas.Import("PostAiApplyUnifiedApiJobsJobIdApplicationsParameterJobId");

export interface PostAiApplyUnifiedApiJobsJobIdApplicationsPositiveResponse { status: "success", data: { id: string, remote_id: (string | null), outcome: (("PENDING" | "HIRED" | "DECLINED") | null), rejection_reason_name: (string | null), rejected_at: (string | null), current_stage_id: (string | null), job_id: (string | null), candidate_id: (string | null), screening_question_answers?: (Array<({ answer: { content: (string | null) }, question: { remote_id: (string | null), title: string, type: "TEXT" } } | { answer: { choice: (string | null) }, question: { remote_id: (string | null), title: string, type: "SINGLE_SELECT" } } | { answer: Partial<{ choices: Array<string> }>, question: { remote_id: (string | null), title: string, type: "MULTI_SELECT" } } | { answer: { checked: (boolean | null) }, question: { remote_id: (string | null), title: string, type: "BOOLEAN" } } | { answer: { number: (number | null) }, question: { remote_id: (string | null), title: string, type: "NUMBER" } } | { answer: { date: (string | null) }, question: { remote_id: (string | null), title: string, type: "DATE" } } | { answer: Partial<{ raw: null }>, question: { remote_id: (string | null), title: string, type: "UNKNOWN" } })> | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }>, remote_url: (string | null), changed_at: string, remote_deleted_at: (string | null), remote_created_at: (string | null), remote_updated_at: (string | null), remote_data: (Record<string, unknown> | null), current_stage: ({ id: string, name: (string | null), remote_id: (string | null), index: (number | null) } | null), job: ({ id: string, name: (string | null), remote_id: string } | null), candidate: ({ id: string, remote_id: string, first_name: (string | null), last_name: (string | null), company: (string | null), title: (string | null), confidential: (boolean | null), source: (string | null), phone_numbers?: (Array<{ phone_number: string, type?: (string | null) }> | null), email_addresses?: (Array<{ email_address?: (string | null), type: (string | null) }> | null), social_media?: (Array<Partial<{ link: (string | null), type: (string | null), username: (string | null) }>> | null), location?: (Partial<{ city: (string | null), country: (string | null), raw: (string | null), state: (string | null), street_1: (string | null), street_2: (string | null), zip_code: (string | null) }> | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }>, remote_url: (string | null), remote_created_at: (string | null), remote_updated_at: (string | null), remote_data: (Record<string, unknown> | null), changed_at: string, remote_deleted_at: (string | null), tags: Array<{ id: string, name: (string | null), remote_id: (string | null) }> } | null) } }
export const PostAiApplyUnifiedApiJobsJobIdApplicationsPositiveResponse = __schemas.Import("PostAiApplyUnifiedApiJobsJobIdApplicationsPositiveResponse");

export interface PostAiApplyUnifiedApiJobsJobIdApplicationsRequestBody { stage_id?: string, candidate: { first_name: string, last_name: string, email_address: string, additional_email_addresses?: Array<{ type: ("PERSONAL" | "WORK" | "OTHER"), email_address: string }>, company?: string, title?: string, phone_number?: string, additional_phone_numbers?: Array<{ type: ("PERSONAL" | "WORK" | "OTHER"), phone_number: string }>, location?: { city?: string, country: string, state?: string, street_1?: string, zip_code?: string }, gender?: ("MALE" | "FEMALE" | "OTHER"), availability_date?: string, salary_expectations?: { period: ("MONTH" | "YEAR"), amount: number }, social_links?: Array<{ url: string }> }, attachments?: Array<{ name: string, content_type?: string, data_url?: string, data?: string, type: ("CV" | "COVER_LETTER" | "OTHER") }>, source?: Partial<{ name: string, unified_key: string, id: string }>, sourced_by?: { user_id: string }, gdpr_consent?: Partial<{ expires_at: string, given: boolean }>, remote_fields?: (Partial<{ successfactors: Partial<{ Candidate: Record<string, unknown>, JobApplication: Record<string, unknown>, copyJobApplicationAttachments: boolean, update_existing_candidate: (boolean | null) }>, personio: Partial<{ application: Record<string, unknown> }>, talentsoft: Partial<{ applicant: Record<string, unknown>, application: Record<string, unknown> }>, teamtailor: Partial<{ candidate: Record<string, unknown>, application: Partial<{ attributes: Record<string, unknown> }> }>, greenhouse: Partial<{ candidate: Record<string, unknown>, application: Record<string, unknown> }>, lever: Partial<{ candidate: Record<string, unknown> }>, workable: Partial<{ candidate: Record<string, unknown> }>, workday: Partial<{ Candidate_Data: Partial<{ Name_Detail_Data: Partial<{ Middle_Name: string, Social_Suffix_Reference: { Predefined_Name_Component_ID: string } }>, Language_Reference: { WID: string }, Job_Application_Data: Partial<{ Job_Applied_To_Data: Partial<{ Global_Personal_Information_Data: Partial<{ Date_of_Birth: string }> }>, Resume_Data: Partial<{ Education_Data: Array<Partial<{ School_Name: string, First_Year_Attended: number, Last_Year_Attended: number, Field_of_Study_Reference: { WID: string }, Degree_Reference: { WID: string }, Grade_Average: string }>>, Skill_Data: Array<Partial<{ Skill_Name: string }>>, Language_Data: Array<Partial<{ Language_Reference: Partial<{ WID: string }>, Language: { Native?: boolean, Language_Ability: Array<Partial<{ Language_Ability_Data: Partial<{ Language_Proficiency_Reference: { WID: string }, Language_Ability_Type_Reference: { WID: string } }> }>> } }>>, Experience_Data: Array<{ Company_Name: string, Title: string, Location?: string, Start_Date: string, End_Date?: string, Currently_Work_Here?: boolean, Description?: string }> }> }>, Contact_Data: Partial<{ Location_Data: Partial<{ Address_Line_1: string, Address_Line_2: string, Region_Subdivision_1: string, Country_Region_Reference: { Country_Region_ID: string }, Country_City_Reference: { WID: string } }> }>, Worker_Reference: Partial<{ WID: string, Employee_ID: string }> }>, Override_Source_Reference_WID: string }>, zohorecruit: Partial<{ candidate: Record<string, unknown> }>, bullhorn: Partial<{ candidate: Record<string, unknown>, job_submission: Record<string, unknown> }>, smartrecruiters: Partial<{ candidate_with_questions: Record<string, unknown>, candidate_without_questions: Record<string, unknown>, candidate: Record<string, unknown>, consent_decisions: Partial<{ SINGLE: boolean, SMART_RECRUIT: boolean, SMART_CRM: boolean, SMART_MESSAGE_SMS: boolean, SMART_MESSAGE_WHATSAPP: boolean }> }>, talentadore: Partial<{ applications: Record<string, unknown> }>, guidecom: Partial<{ candidate: Record<string, unknown> }>, dvinci: Partial<{ application: Record<string, unknown>, candidate: Record<string, unknown> }>, hrworks: Partial<{ jobApplication: Record<string, unknown> }>, jobylon: Partial<{ application: Partial<{ message: string }> }>, avature: Partial<{ workflow: Partial<{ step: { id: number } }> }>, recruitee: Partial<{ candidate: Partial<{ cover_letter_text: string }> }>, rexx: Partial<{ candidate: Record<string, unknown> }>, umantis: Partial<{ person: Record<string, unknown> }>, piloga: Partial<{ candidate: Partial<{ street: string }> }>, pinpoint: Partial<{ candidate: Record<string, unknown> }>, covetorest: Partial<{ candidate: Partial<{ mandant: number }> }> }> & Partial<{ greenhouse: Partial<{ post_headers: Partial<{ "On-Behalf-Of": (string | null) }> }>, workable: Partial<{ on_behalf_of_user_remote_id: string }> }>), screening_question_answers?: Array<{ question_id: string, answer: (string | boolean | number | Array<string> | string | { name: string, content_type?: string, data_url?: string, data?: string }) }>, query_params?: Record<string, string> }
export const PostAiApplyUnifiedApiJobsJobIdApplicationsRequestBody = __schemas.Import("PostAiApplyUnifiedApiJobsJobIdApplicationsRequestBody");

export type GetAiApplyJobFeedsParameterCursor = string
export const GetAiApplyJobFeedsParameterCursor = __schemas.Import("GetAiApplyJobFeedsParameterCursor");

export type GetAiApplyJobFeedsParameterPageSize = number
export const GetAiApplyJobFeedsParameterPageSize = __schemas.Import("GetAiApplyJobFeedsParameterPageSize");

export type GetAiApplyJobFeedsParameterIds = string
export const GetAiApplyJobFeedsParameterIds = __schemas.Import("GetAiApplyJobFeedsParameterIds");

export interface GetAiApplyJobFeedsPositiveResponse { status: "success", data: { results: Array<{ id: string, label: string }>, next: (string | null) } }
export const GetAiApplyJobFeedsPositiveResponse = __schemas.Import("GetAiApplyJobFeedsPositiveResponse");

export interface PostAiApplyJobFeedsPositiveResponse { status: "success", data: { id: string, label: string } }
export const PostAiApplyJobFeedsPositiveResponse = __schemas.Import("PostAiApplyJobFeedsPositiveResponse");

export interface PostAiApplyJobFeedsRequestBody { label: string }
export const PostAiApplyJobFeedsRequestBody = __schemas.Import("PostAiApplyJobFeedsRequestBody");

export interface PostConnectCreateLinkPositiveResponse { status: "success", data: { link: string } }
export const PostConnectCreateLinkPositiveResponse = __schemas.Import("PostConnectCreateLinkPositiveResponse");

export interface PostConnectCreateLinkRequestBody { end_user_email: string, end_user_organization_name: string, end_user_origin_id?: (string | null), remote_environment?: (string | null), integration_category?: ("HRIS" | "ATS" | "ASSESSMENT" | "LMS"), integration_tool?: (("workday" | "successfactors" | "smartrecruiters" | "factorial" | "oraclerecruiting" | "lever" | "icims" | "cornerstonetalentlink" | "recruitee" | "recruiterflow" | "greenhouse" | "greenhousejobboard" | "teamtailor" | "teamtailorjobboards" | "ashby" | "talentsoft" | "talentsoftcustomer" | "concludis" | "talention" | "piloga" | "onlyfy" | "personio" | "ukgpro" | "ukgready" | "adpworkforcenow" | "taleo" | "rexx" | "afas" | "bamboohr" | "bullhorn" | "bullhornlogin" | "workable" | "jobvite" | "fountain" | "softgarden" | "softgardenpartner" | "pinpoint" | "welcometothejungle" | "dvinci" | "dvinciadmin" | "join" | "sagehr" | "traffit" | "erecruiter" | "abacusumantis" | "umantis" | "jobylon" | "taleez" | "hrworks" | "otys" | "zohorecruit" | "ceipal" | "eploy" | "jobdiva" | "careerplug" | "perview" | "eightfold" | "paylocity" | "paycor" | "avature" | "apploi" | "phenom" | "paradox" | "heyrecruit" | "recruhr" | "recruitcrm" | "jazzhr" | "bite" | "brassring" | "homerun" | "mysolution" | "carerix" | "hroffice" | "talentclue" | "inrecruiting" | "ubeeo" | "connexys" | "hr4you" | "cornerstoneondemand" | "zvooverecruit" | "odoo" | "comeet" | "compleet" | "compleetpitcher" | "gem" | "laura" | "covetorest" | "coveto" | "mercury" | "crelate" | "manatal" | "avionte" | "mhmhr" | "asymbl" | "breezyhr" | "flatchr" | "dayforce" | "digitalrecruiters" | "applicantstack" | "reachmee" | "talentadore" | "sandbox" | "guidecom" | "spott" | "loxo" | "kula" | "workdaycustomreport" | "workdaycustomreportsftp" | "ukgprowfm" | "payfitcustomer" | "payfitpartner" | "payfit" | "employmenthero" | "fourth" | "kenjo" | "heavenhr" | "hibob" | "cezannehr" | "entraid" | "azuread" | "googleworkspace" | "nmbrs" | "deel" | "remotecom" | "iriscascade" | "okta" | "sagepeople" | "humaans" | "eurecia" | "oraclehcm" | "officient" | "sesamehr" | "charliehr" | "abacus" | "zohopeople" | "gusto" | "breathehr" | "catalystone" | "mirus" | "alexishr" | "simployer" | "peple" | "youserve" | "hansalog" | "lattice" | "latticetalent" | "hoorayhr" | "trinet" | "trinetpeo" | "namely" | "paycom" | "insperity" | "paychex" | "rippling" | "sapling" | "peoplehr" | "lucca" | "zelt" | "planday" | "boondmanager" | "haileyhr" | "silae" | "oysterhr" | "kiwihr" | "square" | "perbilityhelix" | "leapsome" | "loket" | "workforcecom" | "peoplefirst" | "sdworx" | "itrent" | "absenceio" | "a3innuvanomina" | "scim" | "datevlauds" | "datevhr" | "datev" | "datevlug" | "sympa" | "youforce" | "nibelis" | "peoplexd" | "sftp" | "sftpfetch" | "360learning" | "talentlms" | "udemy" | "linkedinlearning" | "moodle") | null), language?: (("en" | "de" | "fr" | "it" | "es") | null), scope_config_id?: (string | null), enable_filtering?: boolean, enable_field_mapping?: boolean, link_type?: ("EMBEDDED" | "MAGIC_LINK") }
export const PostConnectCreateLinkRequestBody = __schemas.Import("PostConnectCreateLinkRequestBody");

export type GetConnectIntegrationByTokenTokenParameterToken = string
export const GetConnectIntegrationByTokenTokenParameterToken = __schemas.Import("GetConnectIntegrationByTokenTokenParameterToken");

export interface GetConnectIntegrationByTokenTokenPositiveResponse { status: "success", data: { tool: string, id: string, end_user_origin_id: (string | null), end_user_organization_name: string, end_user_email: (string | null), setup_status: ("INCOMPLETE" | "FINAL_SYNC_PENDING" | "COMPLETED") } }
export const GetConnectIntegrationByTokenTokenPositiveResponse = __schemas.Import("GetConnectIntegrationByTokenTokenPositiveResponse");

export interface PostConnectActivateIntegrationPositiveResponse { status: "success", data: { tool: string, id: string, end_user_origin_id: (string | null), end_user_organization_name: string, end_user_email: (string | null), setup_status: ("INCOMPLETE" | "FINAL_SYNC_PENDING" | "COMPLETED") } }
export const PostConnectActivateIntegrationPositiveResponse = __schemas.Import("PostConnectActivateIntegrationPositiveResponse");

export interface PostConnectActivateIntegrationRequestBody { token: string }
export const PostConnectActivateIntegrationRequestBody = __schemas.Import("PostConnectActivateIntegrationRequestBody");

export interface GetCustomDatevSystemInformationPositiveResponse { status: "success", data: { consultant_number: number, client_number: number, target_system: ("LODAS" | "LuG") } }
export const GetCustomDatevSystemInformationPositiveResponse = __schemas.Import("GetCustomDatevSystemInformationPositiveResponse");

export interface PostCustomDatevPassthroughPositiveResponse { status: "success", data: Record<string, unknown>, warnings: Array<{ message: string }> }
export const PostCustomDatevPassthroughPositiveResponse = __schemas.Import("PostCustomDatevPassthroughPositiveResponse");

export interface PostCustomDatevPassthroughRequestBody { file_content: string, accounting_month: string, target_system: ("LODAS" | "LuG"), file_type: ("STAMMDATEN" | "BEWEGUNGSDATEN"), file_name: string }
export const PostCustomDatevPassthroughRequestBody = __schemas.Import("PostCustomDatevPassthroughRequestBody");

export interface GetCustomDatevCheckEauPermissionPositiveResponse { status: "success", data: { ready: boolean, error?: string }, warnings: Array<{ message: string }> }
export const GetCustomDatevCheckEauPermissionPositiveResponse = __schemas.Import("GetCustomDatevCheckEauPermissionPositiveResponse");

export type GetCustomDatevEauRequestsEauIdParameterEauId = string
export const GetCustomDatevEauRequestsEauIdParameterEauId = __schemas.Import("GetCustomDatevEauRequestsEauIdParameterEauId");

export interface GetCustomDatevEauRequestsEauIdPositiveResponse { status: "success", data: { raw: { source: string, start_work_incapacity: string, collaboration_identifier?: string, feedbacks_from_health_insurance: Array<{ guid: string, contact_person: ({ gender_contact_person?: (("M" | "F" | "X" | "D") | null), name: string, telephone: string, fax: (string | null), email: (string | null), name1_health_insurance: string, name2_health_insurance?: (string | null), name3_health_insurance?: (string | null), postal_code: string, city: string, street: (string | null), house_number: (string | null) } | null), incapacity_for_work: { start_work_incapacity_employer: string, start_work_incapacity_au: (string | null), end_work_incapacity_au: (string | null), actual_end_work_incapacity_au?: (string | null), date_of_diagnosis: (string | null), flag_current_work_incapacity: (number | null), accident_at_work: boolean, assignment_accident_insurance_doctor: boolean, other_accident: boolean, start_hospitalisation?: (string | null), end_hospitalisation?: (string | null), initial_certificate: boolean, automatic_feedback_until: (string | null) }, error_block_list: (Array<{ origin: (string | null), error_number: (string | null), error_text: (string | null), error_value: (string | null) }> | null) }> } }, warnings: Array<{ message: string }> }
export const GetCustomDatevEauRequestsEauIdPositiveResponse = __schemas.Import("GetCustomDatevEauRequestsEauIdPositiveResponse");

export interface GetCustomDatevCheckDocumentPermissionPositiveResponse { status: "success", data: ({ ready: boolean, documents_granted: Array<string> } | { ready: boolean, error: string }), warnings: Array<{ message: string }> }
export const GetCustomDatevCheckDocumentPermissionPositiveResponse = __schemas.Import("GetCustomDatevCheckDocumentPermissionPositiveResponse");

export type GetCustomDatevAvailableDocumentsParameterPeriod = string
export const GetCustomDatevAvailableDocumentsParameterPeriod = __schemas.Import("GetCustomDatevAvailableDocumentsParameterPeriod");

export interface GetCustomDatevAvailableDocumentsPositiveResponse { status: "success", data: { results: Array<{ document_type: string, available_for_employees: Array<{ id: (string | null), remote_id: string }>, is_company_document: boolean }> }, warnings: Array<{ message: string }> }
export const GetCustomDatevAvailableDocumentsPositiveResponse = __schemas.Import("GetCustomDatevAvailableDocumentsPositiveResponse");

export interface PostCustomDatevDownloadDocumentPositiveResponse { status: "success", data: { data_url: string, file_name: string, content_type: string }, warnings: Array<{ message: string }> }
export const PostCustomDatevDownloadDocumentPositiveResponse = __schemas.Import("PostCustomDatevDownloadDocumentPositiveResponse");

export interface PostCustomDatevDownloadDocumentRequestBody { accounting_month: string, document_type: ("AANB" | "ABEG" | "BUBE" | "DAWE" | "KBNW" | "KOST" | "KOTR" | "LKTO" | "LOBN" | "LJOE" | "LOJE" | "LOJO" | "LOPE" | "LOPN" | "LOPS" | "LORE" | "LOWE" | "LSTA" | "LSTB" | "LSTE" | "PDAT" | "PFAN" | "PRZA" | "SBNW" | "SVNW" | "WEAN" | "ZABR" | "ZAKF" | "ZAUW"), employee_id: (string | null) }
export const PostCustomDatevDownloadDocumentRequestBody = __schemas.Import("PostCustomDatevDownloadDocumentRequestBody");

export type PostCustomDatevEmployeesEmployeeIdDownloadDocumentParameterEmployeeId = (string | null)
export const PostCustomDatevEmployeesEmployeeIdDownloadDocumentParameterEmployeeId = __schemas.Import("PostCustomDatevEmployeesEmployeeIdDownloadDocumentParameterEmployeeId");

export interface PostCustomDatevEmployeesEmployeeIdDownloadDocumentPositiveResponse { status: "success", data: { data_url: string, file_name: string, content_type: string }, warnings: Array<{ message: string }> }
export const PostCustomDatevEmployeesEmployeeIdDownloadDocumentPositiveResponse = __schemas.Import("PostCustomDatevEmployeesEmployeeIdDownloadDocumentPositiveResponse");

export interface PostCustomDatevEmployeesEmployeeIdDownloadDocumentRequestBody { accounting_month: string, document_type: ("AANB" | "ABEG" | "BUBE" | "DAWE" | "KBNW" | "KOST" | "KOTR" | "LKTO" | "LOBN" | "LJOE" | "LOJE" | "LOJO" | "LOPE" | "LOPN" | "LOPS" | "LORE" | "LOWE" | "LSTA" | "LSTB" | "LSTE" | "PDAT" | "PFAN" | "PRZA" | "SBNW" | "SVNW" | "WEAN" | "ZABR" | "ZAKF" | "ZAUW") }
export const PostCustomDatevEmployeesEmployeeIdDownloadDocumentRequestBody = __schemas.Import("PostCustomDatevEmployeesEmployeeIdDownloadDocumentRequestBody");

export type PostCustomDatevEmployeesEmployeeIdEauRequestsParameterEmployeeId = string
export const PostCustomDatevEmployeesEmployeeIdEauRequestsParameterEmployeeId = __schemas.Import("PostCustomDatevEmployeesEmployeeIdEauRequestsParameterEmployeeId");

export interface PostCustomDatevEmployeesEmployeeIdEauRequestsPositiveResponse { status: "success", data: { eau_id: string }, warnings: Array<{ message: string }> }
export const PostCustomDatevEmployeesEmployeeIdEauRequestsPositiveResponse = __schemas.Import("PostCustomDatevEmployeesEmployeeIdEauRequestsPositiveResponse");

export interface PostCustomDatevEmployeesEmployeeIdEauRequestsRequestBody { start_work_incapacity: string, notification?: { email: string }, contact_person?: { gender: ("M" | "W" | "X" | "D"), name: string, telephone: string, fax: string, email: string, company_name: string, postal_code: string, city: string, street: string, house_number: string } }
export const PostCustomDatevEmployeesEmployeeIdEauRequestsRequestBody = __schemas.Import("PostCustomDatevEmployeesEmployeeIdEauRequestsRequestBody");

export type PutCustomDatevEmployeesEmployeeIdPreparePayrollParameterEmployeeId = string
export const PutCustomDatevEmployeesEmployeeIdPreparePayrollParameterEmployeeId = __schemas.Import("PutCustomDatevEmployeesEmployeeIdPreparePayrollParameterEmployeeId");

export interface PutCustomDatevEmployeesEmployeeIdPreparePayrollPositiveResponse { status: "success", data: Record<string, unknown>, warnings: Array<{ message: string }> }
export const PutCustomDatevEmployeesEmployeeIdPreparePayrollPositiveResponse = __schemas.Import("PutCustomDatevEmployeesEmployeeIdPreparePayrollPositiveResponse");

export interface PutCustomDatevEmployeesEmployeeIdPreparePayrollRequestBody { payroll_run: { date: string }, hourly_payments: Array<{ hours: number, lohnart: number }>, fixed_payments: Array<{ amount: number, lohnart: number }>, custom_lodas?: Array<{ amount: number, lohnart: number, bearbeitungsschluessel: number }> }
export const PutCustomDatevEmployeesEmployeeIdPreparePayrollRequestBody = __schemas.Import("PutCustomDatevEmployeesEmployeeIdPreparePayrollRequestBody");

export type PutCustomDatevEmployeesEmployeeIdCompensationsParameterEmployeeId = string
export const PutCustomDatevEmployeesEmployeeIdCompensationsParameterEmployeeId = __schemas.Import("PutCustomDatevEmployeesEmployeeIdCompensationsParameterEmployeeId");

export interface PutCustomDatevEmployeesEmployeeIdCompensationsPositiveResponse { status: "success", data: Record<string, unknown>, warnings: Array<{ message: string }> }
export const PutCustomDatevEmployeesEmployeeIdCompensationsPositiveResponse = __schemas.Import("PutCustomDatevEmployeesEmployeeIdCompensationsPositiveResponse");

export interface PutCustomDatevEmployeesEmployeeIdCompensationsRequestBody { effective_date: string, compensations: Array<{ amount: number, currency: "EUR", period: ("HOUR" | "MONTH"), lohnart?: number }> }
export const PutCustomDatevEmployeesEmployeeIdCompensationsRequestBody = __schemas.Import("PutCustomDatevEmployeesEmployeeIdCompensationsRequestBody");

export interface GetCustomDatevCheckWritePermissionPositiveResponse { status: "success", data: { ready: boolean, error?: string }, warnings: Array<{ message: string }> }
export const GetCustomDatevCheckWritePermissionPositiveResponse = __schemas.Import("GetCustomDatevCheckWritePermissionPositiveResponse");

export interface GetCustomDatevDataPushesPositiveResponse { status: "success", data: { data_pushes: Array<{ id: string, type: ("GENERAL" | "PAYROLL"), created_at: string, upload_jobs: Array<{ id: string, file_name: string, state: ("FAILED" | "UPLOADED" | "IMPORTED" | "CORRUPTED" | "DELETED" | "AUTO_DELETED"), file: string }> }> } }
export const GetCustomDatevDataPushesPositiveResponse = __schemas.Import("GetCustomDatevDataPushesPositiveResponse");

export interface PostCustomDatevPushDataGeneralPositiveResponse { status: "success", data: { files: Array<{ name: string, content: string }> }, warnings: Array<{ message: string }> }
export const PostCustomDatevPushDataGeneralPositiveResponse = __schemas.Import("PostCustomDatevPushDataGeneralPositiveResponse");

export interface PostCustomDatevPushDataGeneralRequestBody { [key: string]: unknown }
export const PostCustomDatevPushDataGeneralRequestBody = __schemas.Import("PostCustomDatevPushDataGeneralRequestBody");

export interface PostCustomDatevPushDataPayrollPositiveResponse { status: "success", data: { files: Array<{ name: string, content: string }> }, warnings: Array<{ message: string }> }
export const PostCustomDatevPushDataPayrollPositiveResponse = __schemas.Import("PostCustomDatevPushDataPayrollPositiveResponse");

export interface PostCustomDatevPushDataPayrollRequestBody { payroll_month: string }
export const PostCustomDatevPushDataPayrollRequestBody = __schemas.Import("PostCustomDatevPushDataPayrollRequestBody");

export type PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsParameterEmployeeId = string
export const PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsParameterEmployeeId = __schemas.Import("PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsParameterEmployeeId");

export interface PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsPositiveResponse { status: "success", data: Record<string, unknown>, warnings: Array<{ message: string }> }
export const PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsPositiveResponse = __schemas.Import("PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsPositiveResponse");

export interface PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsRequestBody { supplement_code: string, effective_date: string, element_amount?: number, element_string?: string }
export const PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsRequestBody = __schemas.Import("PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsRequestBody");

export interface DataChangedWebhookPayload { id: string, type: "data-changed", data: { integration_id: string, integration_tool: string, integration_category: ("HRIS" | "ATS" | "ASSESSMENT" | "LMS"), changed_models: Array<{ name: ("hris_legal_entities" | "hris_locations" | "hris_employees" | "hris_absence_types" | "hris_absences" | "hris_employments" | "hris_teams" | "hris_time_off_balances" | "hris_timesheets" | "hris_employee_document_categories" | "hris_performance_reviews" | "hris_performance_review_cycles" | "hris_staffing_entities" | "ats_users" | "ats_jobs" | "ats_job_postings" | "ats_candidates" | "ats_application_stages" | "ats_applications" | "ats_screening_questions" | "ats_tags" | "ats_interviews" | "ats_offers" | "ats_rejection_reasons" | "ats_roles" | "lms_users" | "lms_course_providers" | "lms_skills" | "lms_courses" | "lms_course_revisions" | "lms_course_progressions" | "hris_join_employees_teams" | "hris_join_staffing_entities_locations" | "hris_join_staffing_entities_legal_entities" | "hris_join_staffing_entities_groups" | "ats_join_candidates_tags" | "ats_join_jobs_application_stages" | "ats_join_jobs_screening_questions" | "ats_join_user_job_role_assignments" | "ats_join_jobs_users" | "ats_join_users_roles" | "ats_join_interviews_users" | "lms_join_revisions_skills") }> } }
export const DataChangedWebhookPayload = __schemas.Import("DataChangedWebhookPayload");

export interface ConnectionFlowFailedWebhookPayload { id: string, type: "connection-flow-failed", data: { integration_tool: string, integration_category: ("HRIS" | "ATS" | "ASSESSMENT" | "LMS"), end_user: { organization_name: string, creator_email: (string | null), origin_id: (string | null) }, log_url: string } }
export const ConnectionFlowFailedWebhookPayload = __schemas.Import("ConnectionFlowFailedWebhookPayload");

export interface IntegrationCreatedWebhookPayload { id: string, type: "integration-created", data: { id: string, tool: string, category: ("HRIS" | "ATS" | "ASSESSMENT" | "LMS"), end_user: { organization_name: string, creator_email: (string | null), origin_id: (string | null) } } }
export const IntegrationCreatedWebhookPayload = __schemas.Import("IntegrationCreatedWebhookPayload");

export interface IntegrationDeletedWebhookPayload { id: string, type: "integration-deleted", data: { id: string, tool: string, category: ("HRIS" | "ATS" | "ASSESSMENT" | "LMS"), end_user: { organization_name: string, creator_email: (string | null), origin_id: (string | null) }, deleted_at: string } }
export const IntegrationDeletedWebhookPayload = __schemas.Import("IntegrationDeletedWebhookPayload");

export interface AssessmentOrderReceivedWebhookPayload { id: string, type: "assessment:order-received", data: { id: string, package_id: string, status: ("OPEN" | "COMPLETED" | "CANCELLED" | "REJECTED"), integration_id: string, candidate: { remote_id: (string | null), email: string, first_name: (string | null), last_name: (string | null), phone: (string | null) }, application: { remote_id: (string | null) }, job: { remote_id: (string | null), name: (string | null), job_code: (string | null), description: (string | null), location: (Partial<{ street_1: (string | null), street_2: (string | null), city: (string | null), state: (string | null), zip_code: (string | null), country: (string | null), raw: (string | null) }> | null), hiring_team: Array<{ remote_id: (string | null), email: (string | null), first_name: (string | null), last_name: (string | null), hiring_team_roles: Array<("RECRUITER" | "HIRING_MANAGER")> }> } } }
export const AssessmentOrderReceivedWebhookPayload = __schemas.Import("AssessmentOrderReceivedWebhookPayload");

export interface InlineAssessmentOrderReceivedWebhookPayload { id: string, type: "inline-assessment:order-received", data: { id: string, package_id: string, status: ("OPEN" | "COMPLETED" | "CANCELLED" | "REJECTED"), integration_id: string, candidate: { remote_id: (string | null), email: string, first_name: (string | null), last_name: (string | null), phone: (string | null) }, application: { remote_id: (string | null) }, job: { remote_id: (string | null), name: (string | null), job_code: (string | null), description: (string | null), location: (Partial<{ street_1: (string | null), street_2: (string | null), city: (string | null), state: (string | null), zip_code: (string | null), country: (string | null), raw: (string | null) }> | null), hiring_team: Array<{ remote_id: (string | null), email: (string | null), first_name: (string | null), last_name: (string | null), hiring_team_roles: Array<("RECRUITER" | "HIRING_MANAGER")> }> } } }
export const InlineAssessmentOrderReceivedWebhookPayload = __schemas.Import("InlineAssessmentOrderReceivedWebhookPayload");

export interface IntegrationStateChangedWebhookPayload { id: string, type: "integration-state-changed", data: { integration_tool: string, integration_id: string, integration_category: ("HRIS" | "ATS" | "ASSESSMENT" | "LMS"), end_user: { organization_name: string, creator_email: (string | null), origin_id: (string | null) }, qa_status: ("PENDING" | "FAILED" | "PASSED"), setup_status: ("INCOMPLETE" | "FINAL_SYNC_PENDING" | "COMPLETED"), state: ("ACTIVE" | "INVALID" | "INACTIVE"), updated_at: string } }
export const IntegrationStateChangedWebhookPayload = __schemas.Import("IntegrationStateChangedWebhookPayload");

export interface AiApplyApplicationStatusUpdatedWebhookPayload { id: string, type: "ai-apply-application-status-updated", data: { id: string, job_posting_id: string, status: ("SUBMITTED" | "DUPLICATE" | "PENDING" | "FAILED"), created_at: string, updated_at: string } }
export const AiApplyApplicationStatusUpdatedWebhookPayload = __schemas.Import("AiApplyApplicationStatusUpdatedWebhookPayload");

export interface AiApplyJobPostingStatusUpdatedWebhookPayload { id: string, type: "ai-apply-job-posting-status-updated", data: { id: string, career_site: { id: string, label: string }, url: string, job_code: (string | null), created_at: string, updated_at: string, archived_at: (string | null), archived_reason: (("JOB_POSTING_TAKEN_OFFLINE" | "MANUAL_ARCHIVE" | "REMOVED_FROM_JOB_FEED") | null), availability: ("APPLYABLE" | "PENDING" | "ARCHIVED" | "UNAVAILABLE") } }
export const AiApplyJobPostingStatusUpdatedWebhookPayload = __schemas.Import("AiApplyJobPostingStatusUpdatedWebhookPayload");

export interface SyncFinishedWebhookPayload { id: string, type: "sync-finished", data: { sync_id: string, sync_state: string, sync_started_at: string, sync_ended_at: string, sync_duration_seconds: number, integration_id: string, integration_tool: string, integration_category: ("HRIS" | "ATS" | "ASSESSMENT" | "LMS"), end_user: { organization_name: string, creator_email: (string | null), origin_id: (string | null) }, log_url: string } }
export const SyncFinishedWebhookPayload = __schemas.Import("SyncFinishedWebhookPayload");

export interface BulkImportJobPostingLocation { country: string, postal_code?: string }
export const BulkImportJobPostingLocation = __schemas.Import("BulkImportJobPostingLocation");

export interface BulkImportJobPostingInput { url: string, career_site_label: string, job_code?: string, location?: (BulkImportJobPostingLocation | null) }
export const BulkImportJobPostingInput = __schemas.Import("BulkImportJobPostingInput");

export interface BulkImportResponse { status: "success", data: { created: number, processed: number, archived: number } }
export const BulkImportResponse = __schemas.Import("BulkImportResponse");
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
export interface TypedHeaders<TypedHeaderValues = unknown> extends Omit<Headers, 'append' | 'delete' | 'get' | 'getSetCookie' | 'has' | 'set' | 'forEach'> {
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
  forEach: (callbackfn: (value: TypedHeaderValues[keyof TypedHeaderValues] | string & {}, key: Extract<keyof TypedHeaderValues, string> | string & {}, parent: TypedHeaders<TypedHeaderValues>) => void, thisArg?: unknown) => void
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

type StatusCodeFromKey<TKey> = TKey extends `${infer TStatusCode extends number}`
  ? TStatusCode
  : TKey extends number
    ? TKey
    : never;

export type TypedApiResponse<TAllResponses = {}, THeaders = {}> = {
  [K in keyof TAllResponses]: StatusCodeFromKey<K> extends infer TStatusCode extends number
    ? TStatusCode extends SuccessStatusCode
      ? TypedSuccessResponse<TAllResponses[K], TStatusCode, K extends keyof THeaders ? THeaders[K] : never>
      : TypedErrorResponse<TAllResponses[K], TStatusCode, K extends keyof THeaders ? THeaders[K] : never>
    : never;
}[keyof TAllResponses];

type OptionalUndefinedKeys<T> = {
  [K in keyof T as undefined extends T[K] ? never : K]: T[K];
} & {
  [K in keyof T as undefined extends T[K] ? K : never]?: Exclude<T[K], undefined>;
};
type InferSchemaValueRaw<T> = T extends import("@sinclair/typebox").TSchema ? import("@sinclair/typebox").Static<T> : T extends (...args: never[]) => unknown ? T : T extends object ? { [K in keyof T]: InferSchemaValueRaw<T[K]> } : T;
export type InferSchemaValue<T> = InferSchemaValueRaw<T>;
type InferSchemaInput<T> = OptionalUndefinedKeys<InferSchemaValueRaw<T>>;

export type SafeApiResponse<TEndpoint> = TEndpoint extends { responses: infer TResponses }
  ? TResponses extends Record<string | number, unknown>
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
      [K in keyof TResponses]: StatusCodeFromKey<K> extends infer TStatusCode extends number
        ? TStatusCode extends SuccessStatusCode
          ? Extract<InferSchemaValue<TResponses[K]>, {}>
          : never
        : never;
    }[keyof TResponses]
  : never;

type RequiredKeys<T> = {
  [P in keyof T]-?: undefined extends T[P] ? never : P;
}[keyof T];

type MaybeOptionalArg<T> = RequiredKeys<T> extends never ? [config?: T] : [config: T];
type NotNever<T> = [T] extends [never] ? false : true;

export type ApiQueryOptions = {
  /** Override whether a generated TanStack Query consumes TanStack Query's AbortSignal. */
  consumeQuerySignal?: boolean;
};

/** Call options merged onto inferred endpoint parameters. */
type ApiRequestOptions = {
  overrides?: RequestInit;
  queryOptions?: ApiQueryOptions;
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
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<SafeApiResponse<TEndpoint>>;

    get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<InferSuccessData<TEndpoint>>;

    get<Path extends keyof GetEndpoints>(
      path: Path,
      ...params: [config?: unknown]
    ): Promise<unknown> {
        return this.request("get", path, params[0] as never) as Promise<unknown>;
    }
    // </ApiClient.get>
    
// <ApiClient.post>
    post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<SafeApiResponse<TEndpoint>>;

    post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<InferSuccessData<TEndpoint>>;

    post<Path extends keyof PostEndpoints>(
      path: Path,
      ...params: [config?: unknown]
    ): Promise<unknown> {
        return this.request("post", path, params[0] as never) as Promise<unknown>;
    }
    // </ApiClient.post>
    
// <ApiClient.delete>
    delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<SafeApiResponse<TEndpoint>>;

    delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<InferSuccessData<TEndpoint>>;

    delete<Path extends keyof DeleteEndpoints>(
      path: Path,
      ...params: [config?: unknown]
    ): Promise<unknown> {
        return this.request("delete", path, params[0] as never) as Promise<unknown>;
    }
    // </ApiClient.delete>
    
// <ApiClient.put>
    put<Path extends keyof PutEndpoints, TEndpoint extends PutEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<SafeApiResponse<TEndpoint>>;

    put<Path extends keyof PutEndpoints, TEndpoint extends PutEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<InferSuccessData<TEndpoint>>;

    put<Path extends keyof PutEndpoints>(
      path: Path,
      ...params: [config?: unknown]
    ): Promise<unknown> {
        return this.request("put", path, params[0] as never) as Promise<unknown>;
    }
    // </ApiClient.put>
    
// <ApiClient.patch>
    patch<Path extends keyof PatchEndpoints, TEndpoint extends PatchEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<SafeApiResponse<TEndpoint>>;

    patch<Path extends keyof PatchEndpoints, TEndpoint extends PatchEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<InferSuccessData<TEndpoint>>;

    patch<Path extends keyof PatchEndpoints>(
      path: Path,
      ...params: [config?: unknown]
    ): Promise<unknown> {
        return this.request("patch", path, params[0] as never) as Promise<unknown>;
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
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse: true; throwOnStatusError?: boolean; validate?: ValidateSide })
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
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide } : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide }
          : { overrides?: RequestInit; queryOptions?: ApiQueryOptions; withResponse?: false; throwOnStatusError?: boolean; validate?: ValidateSide })
      >
    ): Promise<InferSuccessData<TEndpoint>>;

    request<
      TMethod extends keyof EndpointByMethod,
      TPath extends keyof EndpointByMethod[TMethod],
      TEndpoint extends EndpointByMethod[TMethod][TPath]
    >(
      method: TMethod,
      path: TPath,
      ...params: [config?: unknown]
    ): Promise<unknown> {
      return (async () => {
      const requestParams = params[0] as
        | (EndpointParameters & {
            overrides?: RequestInit;
            queryOptions?: ApiQueryOptions;
            withResponse?: boolean;
            throwOnStatusError?: boolean;
            validate?: ValidateSide;
          })
        | undefined;
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
        security: endpointSecurityRequirements[method]?.[path] ?? defaultSecurityRequirements,
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
      })()
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

  