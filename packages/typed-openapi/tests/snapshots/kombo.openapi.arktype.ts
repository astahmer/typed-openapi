
  import { type } from "arktype";

// <Schemas>
const __schemas = type.module({
  GetCheckApiKeyPositiveResponse: { status: type("'success'"), data: { environment_id: type("string"), customer_id: type("string") } },
  PostForceSyncPositiveResponse: { status: type("'success'"), data: { already_queued: type("boolean"), sync_id: type("string"), type: type.enumerated("FULL", "DELTA") } },
  PostForceSyncRequestBody: { type: type.enumerated("FULL", "DELTA") },
  PostPassthroughToolApiParameterTool: type("string"),
  PostPassthroughToolApiParameterApi: type("string"),
  PostPassthroughToolApiPositiveResponse: { status: type("'success'"), data: { url: type("string.url"), status: type("number.integer"), headers: { "[string]": [type("string"), "|", type("string").array()] }, "data?": type("unknown") }, warnings: type({ message: type("string") }).array() },
  PostPassthroughToolApiRequestBody: { method: type.enumerated("GET", "POST", "DELETE", "PUT", "PATCH"), path: type("string"), "headers?": { "[string]": type("string") }, "params?": { "[string]": type("string") }, "data?": type("unknown"), "response_as_base64?": type("boolean"), "multipart_form_data?": type({ name: type("string"), value: [type("string"), "|", { name: type("string"), "content_type?": type("string").narrow((s) => typeof s === "string" && new RegExp("^[\\w.-]+\\/[\\w.-]+$").test(s)), "data_url?": type("string.url"), "data?": type("string") }] }).array(), "api_options?": { "[string]": type("string") } },
  DeleteIntegrationsIntegrationIdParameterIntegrationId: type("string"),
  DeleteIntegrationsIntegrationIdPositiveResponse: { status: type("'success'"), data: { "[string]": type("unknown") } },
  DeleteIntegrationsIntegrationIdRequestBody: {  },
  GetIntegrationsIntegrationIdParameterIntegrationId: type("string"),
  GetIntegrationsIntegrationIdPositiveResponse: { status: type("'success'"), data: { id: type("string"), tool: { id: type("string"), label: type("string"), internal_label: type("string").or(type("null")), logo_url: type("string.url"), icon_url: type("string.url") }, category: type.enumerated("HRIS", "ATS", "ASSESSMENT", "LMS"), status: type.enumerated("ACTIVE", "INVALID", "INACTIVE"), setup_status: type.enumerated("INCOMPLETE", "FINAL_SYNC_PENDING", "COMPLETED"), end_user: { organization_name: type("string"), creator_email: type("string").narrow((s) => typeof s === "string" && new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$").test(s)).or(type("null")), origin_id: type("string").or(type("null")) }, scope_config: { id: type("string"), name: type("string").or(type("null")) }, data_expired_at: type("string.date").or(type("null")), created_at: type("string.date"), beta: type("boolean"), read_models: type({ id: type("string"), label: type("string"), is_available: type("boolean"), coverage_status: type.enumerated("SUPPORTED", "UNSUPPORTED", "NOT_IMPLEMENTED", "UNKNOWN"), scope_config_setting: type.enumerated("ENABLED", "DISABLED", "OPTIONAL"), opted_out_by_customer: type("boolean"), fields: type({ id: type("string"), is_available: type("boolean"), coverage_status: type.enumerated("SUPPORTED", "UNSUPPORTED", "NOT_IMPLEMENTED", "UNKNOWN"), scope_config_setting: type.enumerated("ENABLED", "DISABLED", "OPTIONAL"), opted_out_by_customer: type("boolean") }).array() }).array(), write_actions: type({ id: type("string"), label: type("string"), is_available: type("boolean"), coverage_status: type.enumerated("SUPPORTED", "UNSUPPORTED", "NOT_IMPLEMENTED", "UNKNOWN"), scope_config_setting: type.enumerated("ENABLED", "DISABLED", "OPTIONAL"), opted_out_by_customer: type("boolean"), fields: type({ id: type("string"), is_available: type("boolean"), coverage_status: type.enumerated("SUPPORTED", "UNSUPPORTED", "NOT_IMPLEMENTED", "UNKNOWN") }).array() }).array() } },
  PutIntegrationsIntegrationIdEnabledParameterIntegrationId: type("string"),
  PutIntegrationsIntegrationIdEnabledPositiveResponse: { status: type("'success'"), data: { "[string]": type("unknown") } },
  PutIntegrationsIntegrationIdEnabledRequestBody: { value: type("boolean") },
  PostIntegrationsIntegrationIdRelinkParameterIntegrationId: type("string"),
  PostIntegrationsIntegrationIdRelinkPositiveResponse: { status: type("'success'"), data: { link: type("string.url") } },
  PostIntegrationsIntegrationIdRelinkRequestBody: { language: type.enumerated("en", "de", "fr", "it", "es").or(type("null")), "scope_config_id?": type("string").or(type("null")), link_type: type.enumerated("EMBEDDED", "MAGIC_LINK") },
  PostIntegrationsIntegrationIdSetupLinkParameterIntegrationId: type("string"),
  PostIntegrationsIntegrationIdSetupLinkPositiveResponse: { status: type("'success'"), data: { link: type("string.url") } },
  PostIntegrationsIntegrationIdSetupLinkRequestBody: { language: type.enumerated("en", "de", "fr", "it", "es").or(type("null")), link_type: type.enumerated("EMBEDDED", "MAGIC_LINK") },
  GetIntegrationsIntegrationIdIntegrationFieldsParameterIntegrationId: type("string"),
  GetIntegrationsIntegrationIdIntegrationFieldsParameterCursor: type("string"),
  GetIntegrationsIntegrationIdIntegrationFieldsParameterPageSize: type("1 <= number.integer <= 2000"),
  GetIntegrationsIntegrationIdIntegrationFieldsPositiveResponse: { status: type("'success'"), data: { results: type({ id: type("string"), key: type("string"), model: type("string"), type: type.enumerated("DEFAULT", "CUSTOM"), label: type("string").or(type("null")), is_passthrough_enabled: type("boolean"), is_writable: type("false") }).array(), next_cursor: type("string").or(type("null")), next: type("string").or(type("null")) } },
  PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationId: type("string"),
  PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationFieldId: type("string"),
  PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdPositiveResponse: { status: type("'success'"), data: { id: type("string"), key: type("string"), model: type("string"), type: type.enumerated("DEFAULT", "CUSTOM"), label: type("string").or(type("null")), is_passthrough_enabled: type("boolean"), is_writable: type("false") } },
  PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdRequestBody: { enable_passthrough: type("boolean").or(type("null")) },
  GetIntegrationsIntegrationIdCustomFieldsParameterIntegrationId: type("string"),
  GetIntegrationsIntegrationIdCustomFieldsParameterCursor: type("string"),
  GetIntegrationsIntegrationIdCustomFieldsParameterPageSize: type("1 <= number.integer <= 250"),
  GetIntegrationsIntegrationIdCustomFieldsPositiveResponse: { status: type("'success'"), data: { results: type({ id: type("string"), key: type("string"), integration_field: type({ id: type("string"), key: type("string"), type: type.enumerated("DEFAULT", "CUSTOM"), label: type("string").or(type("null")) }).or(type("null")), model: type("string"), label: type("string").or(type("null")), description: type("string").or(type("null")) }).array(), next_cursor: type("string").or(type("null")), next: type("string").or(type("null")) } },
  PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterIntegrationId: type("string"),
  PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterCustomFieldId: type("string"),
  PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdPositiveResponse: { status: type("'success'"), data: { id: type("string"), key: type("string"), integration_field: type({ id: type("string"), key: type("string"), type: type.enumerated("DEFAULT", "CUSTOM"), label: type("string").or(type("null")) }).or(type("null")), model: type("string"), label: type("string").or(type("null")), description: type("string").or(type("null")) } },
  PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdRequestBody: { integration_field_id: type("string").or(type("null")) },
  GetToolsCategoryParameterCategory: type.enumerated("hris", "ats", "assessment", "lms"),
  GetToolsCategoryPositiveResponse: { status: type("'success'"), data: { tools: type({ id: type("string"), label: type("string"), internal_label: type("string").or(type("null")), assets: { logo_url: type("string"), icon_url: type("string"), icon_black_url: type("string") }, paid_api_details_markdown: type("string").or(type("null")), fast_track_details_markdown: type("string").or(type("null")), partner_only_details_markdown: type("string").or(type("null")), connection_guide_url: type("string").or(type("null")), coverage: { read_models: type({ id: type("string"), label: type("string"), coverage_status: type.enumerated("SUPPORTED", "UNSUPPORTED", "NOT_IMPLEMENTED", "UNKNOWN"), fields: type({ id: type("string"), coverage_status: type.enumerated("SUPPORTED", "UNSUPPORTED", "NOT_IMPLEMENTED", "UNKNOWN") }).array() }).array(), write_actions: type({ id: type("string"), label: type("string"), coverage_status: type.enumerated("SUPPORTED", "UNSUPPORTED", "NOT_IMPLEMENTED", "UNKNOWN"), fields: type({ id: type("string"), coverage_status: type.enumerated("SUPPORTED", "UNSUPPORTED", "NOT_IMPLEMENTED", "UNKNOWN") }).array() }).array(), features: type({ id: type("string"), label: type("string"), coverage_status: type.enumerated("SUPPORTED", "UNSUPPORTED", "NOT_IMPLEMENTED", "UNKNOWN") }).array() } }).array() } },
  PostHrisProvisioningGroupsGroupIdDiffParameterGroupId: type("string"),
  PostHrisProvisioningGroupsGroupIdDiffPositiveResponse: { status: type("'success'"), data: { users: { to_provision: type({ email: type("string").narrow((s) => typeof s === "string" && new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$").test(s)).or(type("null")), employee: { "id?": type("string"), "remote_id?": type("string").or(type("null")), "first_name?": type("string").or(type("null")), "last_name?": type("string").or(type("null")), "groups?": type({ id: type("string"), remote_id: type("string").or(type("null")), name: type("string").or(type("null")) }).array(), "avatar?": type("string").or(type("null")), "work_location_id?": type("string").or(type("null")), "legal_entity_id?": type("string").or(type("null")) } }).array(), to_deprovision: type({ origin_id: type("string"), email: type("string.email") }).array(), already_provisioned: type({ origin_id: type("string"), email: type("string.email"), employee: { "id?": type("string"), "remote_id?": type("string").or(type("null")), "first_name?": type("string").or(type("null")), "last_name?": type("string").or(type("null")), "groups?": type({ id: type("string"), remote_id: type("string").or(type("null")), name: type("string").or(type("null")) }).array(), "avatar?": type("string").or(type("null")), "work_location_id?": type("string").or(type("null")), "legal_entity_id?": type("string").or(type("null")) } }).array() } } },
  PostHrisProvisioningGroupsGroupIdDiffRequestBody: { provisioned_users: type({ origin_id: type("string"), email: type("string.email") }).array(), options: { employee_fields: type.enumerated("id", "remote_id", "first_name", "last_name", "groups", "avatar", "work_location_id", "legal_entity_id").array() } },
  PostHrisProvisioningGroupsGroupIdSetupLinksParameterGroupId: type("string"),
  PostHrisProvisioningGroupsGroupIdSetupLinksPositiveResponse: { status: type("'success'"), data: { url: type("string.url"), expires_at: type("string.date") } },
  PostHrisProvisioningGroupsGroupIdSetupLinksRequestBody: { language: type.enumerated("en", "de", "fr", "it", "es").or(type("null")) },
  GetHrisEmployeesParameterCursor: type("string"),
  GetHrisEmployeesParameterPageSize: type("1 <= number.integer <= 250"),
  GetHrisEmployeesParameterUpdatedAfter: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)),
  GetHrisEmployeesParameterIncludeDeleted: type.enumerated("true", "false"),
  GetHrisEmployeesParameterIgnoreUnsupportedFilters: type.enumerated("true", "false"),
  GetHrisEmployeesParameterIds: type("string"),
  GetHrisEmployeesParameterRemoteIds: type("string"),
  GetHrisEmployeesParameterEmploymentStatus: type.enumerated("ACTIVE", "PENDING", "INACTIVE", "LEAVE"),
  GetHrisEmployeesParameterEmploymentStatuses: type("string"),
  GetHrisEmployeesParameterGroupIds: type("string"),
  GetHrisEmployeesParameterLegalEntityIds: type("string"),
  GetHrisEmployeesParameterWorkLocationIds: type("string"),
  GetHrisEmployeesParameterWorkEmails: type("string"),
  GetHrisEmployeesParameterPersonalEmails: type("string"),
  GetHrisEmployeesParameterCustomFields: type("string"),
  GetHrisEmployeesPositiveResponse: { status: type("'success'"), data: { next: type("string").or(type("null")), results: type({ id: type("string"), remote_id: type("string"), employee_number: type("string").or(type("null")), first_name: type("string").or(type("null")), last_name: type("string").or(type("null")), nationality: type("string").or(type("null")), display_full_name: type("string").or(type("null")), job_title: type("string").or(type("null")), "work_email?": type("string").narrow((s) => typeof s === "string" && new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$").test(s)).or(type("null")), "personal_email?": type("string").narrow((s) => typeof s === "string" && new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$").test(s)).or(type("null")), mobile_phone_number: type("string").or(type("null")), ssn: type("string").or(type("null")), tax_id: type("string").or(type("null")), "gender?": [type.enumerated("MALE", "FEMALE", "NON_BINARY", "NOT_SPECIFIED"), "|", [type("string"), "|", type("null")]], "ethnicity?": [type.enumerated("WHITE", "ASIAN", "HISPANIC_LATINO", "HAWAIIAN", "NATIVE_AMERICAN", "BLACK_AFRICAN_AMERICAN", "MULTIPLE_ETHNICITIES", "DECLINE_TO_SPECIFY"), "|", [type("string"), "|", type("null")]], "marital_status?": [type.enumerated("SINGLE", "MARRIED", "DOMESTIC_PARTNERSHIP", "WIDOWED", "DIVORCED", "SEPARATED", "NOT_MARRIED"), "|", [type("string"), "|", type("null")]], "employment_status?": [type.enumerated("ACTIVE", "PENDING", "INACTIVE", "LEAVE"), "|", [type("string"), "|", type("null")]], "employment_type?": [type.enumerated("FULL_TIME", "PART_TIME", "CONTRACT", "INTERNSHIP", "FREELANCE", "WORKING_STUDENT", "APPRENTICESHIP", "TRAINING"), "|", [type("string"), "|", type("null")]], weekly_hours: type("number").or(type("null")), avatar: type("string").or(type("null")), work_location_id: type("string").or(type("null")), legal_entity_id: type("string").or(type("null")), manager_id: type("string").or(type("null")), "home_address?": type({ "city?": type("string").or(type("null")), "country?": type("string").or(type("null")), "raw?": type("string").or(type("null")), "state?": type("string").or(type("null")), "street_1?": type("string").or(type("null")), "street_2?": type("string").or(type("null")), "zip_code?": type("string").or(type("null")) }).or(type("null")), "bank_accounts?": type({ "iban?": type("string").or(type("null")), "bic?": type("string").or(type("null")), "account_number?": type("string").or(type("null")), "holder_name?": type("string").or(type("null")), "bank_name?": type("string").or(type("null")), "domestic_bank_routing?": type({ number: type("string"), type: type.enumerated("GB_SORT_CODE", "DE_BANKLEITZAHL", "US_ABA_ROUTING_TRANSIT_NUMBER", "CA_ROUTING_NUMBER", "AU_BSB_CODE", "FR_RIB").or(type("null")) }).or(type("null")) }).array().or(type("null")), date_of_birth: type("string.date").or(type("null")), start_date: type("string.date").or(type("null")), termination_date: type("string.date").or(type("null")), remote_created_at: type("string.date").or(type("null")), changed_at: type("string.date"), remote_deleted_at: type("string.date").or(type("null")), custom_fields: type({ "[string]": type("unknown") }).or(type("null")), integration_fields: type({ id: type("string"), key: type("string"), type: type.enumerated("DEFAULT", "CUSTOM"), "value?": type("null"), label: type("string").or(type("null")) }).array(), remote_data: type({ "[string]": type("unknown") }).or(type("null")), employments: type({ id: type("string"), remote_id: type("string").or(type("null")), employee_id: type("string"), job_title: type("string").or(type("null")), pay_rate: type("number").or(type("null")), "pay_period?": [type.enumerated("HOUR", "DAY", "WEEK", "TWO_WEEKS", "HALF_MONTH", "MONTH", "TWO_MONTHS", "QUARTER", "HALF_YEAR", "YEAR"), "|", [type("string"), "|", type("null")]], "pay_frequency?": [type.enumerated("DAILY", "WEEKLY", "BIWEEKLY", "MONTHLY", "SEMIMONTHLY", "QUARTERLY", "SEMIANNUALLY", "ANNUALLY", "PRO_RATA"), "|", [type("string"), "|", type("null")]], "employment_type?": [type.enumerated("FULL_TIME", "PART_TIME", "CONTRACT", "INTERNSHIP", "FREELANCE", "WORKING_STUDENT", "APPRENTICESHIP", "TRAINING"), "|", [type("string"), "|", type("null")]], pay_currency: type("string").or(type("null")), effective_date: type("string.date").or(type("null")), changed_at: type("string.date"), remote_deleted_at: type("string.date").or(type("null")), remote_data: type({ "[string]": type("unknown") }).or(type("null")), custom_fields: type({ "[string]": type("unknown") }).or(type("null")), integration_fields: type({ id: type("string"), key: type("string"), type: type.enumerated("DEFAULT", "CUSTOM"), "value?": type("null"), label: type("string").or(type("null")) }).array() }).array(), time_off_balances: type({ id: type("string"), remote_id: type("string").or(type("null")), employee_id: type("string"), type_id: type("string"), balance: type("number").or(type("null")), balance_unit: type.enumerated("HOURS", "DAYS").or(type("null")), changed_at: type("string.date"), remote_deleted_at: type("string.date").or(type("null")), used: type("number").or(type("null")), used_unit: type.enumerated("HOURS", "DAYS").or(type("null")), remote_data: type({ "[string]": type("unknown") }).or(type("null")) }).array(), manager: type({ first_name: type("string").or(type("null")), last_name: type("string").or(type("null")), display_full_name: type("string").or(type("null")), id: type("string"), employee_number: type("string").or(type("null")), "work_email?": type("string").narrow((s) => typeof s === "string" && new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$").test(s)).or(type("null")), remote_id: type("string"), "employment_status?": [type.enumerated("ACTIVE", "PENDING", "INACTIVE", "LEAVE"), "|", [type("string"), "|", type("null")]], termination_date: type("string.date").or(type("null")) }).or(type("null")), groups: type({ id: type("string"), remote_id: type("string"), name: type("string").or(type("null")), type: type.enumerated("DEPARTMENT", "TEAM", "COST_CENTER").or(type("null")) }).array(), legal_entity: type({ id: type("string"), remote_id: type("string").or(type("null")), name: type("string").or(type("null")), "address?": type({ "city?": type("string").or(type("null")), "country?": type("string").or(type("null")), "raw?": type("string").or(type("null")), "state?": type("string").or(type("null")), "street_1?": type("string").or(type("null")), "street_2?": type("string").or(type("null")), "zip_code?": type("string").or(type("null")) }).or(type("null")) }).or(type("null")), teams: type({ id: type("string"), remote_id: type("string"), name: type("string").or(type("null")), type: type.enumerated("DEPARTMENT", "TEAM", "COST_CENTER").or(type("null")) }).array(), work_location: type({ id: type("string"), remote_id: type("string").or(type("null")), name: type("string").or(type("null")), "address?": type({ "city?": type("string").or(type("null")), "country?": type("string").or(type("null")), "raw?": type("string").or(type("null")), "state?": type("string").or(type("null")), "street_1?": type("string").or(type("null")), "street_2?": type("string").or(type("null")), "zip_code?": type("string").or(type("null")) }).or(type("null")), type: type("string").or(type("null")), changed_at: type("string.date"), remote_deleted_at: type("string.date").or(type("null")), remote_data: type({ "[string]": type("unknown") }).or(type("null")) }).or(type("null")) }).array() } },
  PostHrisEmployeesPositiveResponse: { status: type("'success'"), data: { id: type("string"), remote_id: type("string"), employee_number: type("string").or(type("null")), first_name: type("string").or(type("null")), last_name: type("string").or(type("null")), nationality: type("string").or(type("null")), display_full_name: type("string").or(type("null")), job_title: type("string").or(type("null")), "work_email?": type("string").narrow((s) => typeof s === "string" && new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$").test(s)).or(type("null")), "personal_email?": type("string").narrow((s) => typeof s === "string" && new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$").test(s)).or(type("null")), mobile_phone_number: type("string").or(type("null")), ssn: type("string").or(type("null")), tax_id: type("string").or(type("null")), "gender?": [type.enumerated("MALE", "FEMALE", "NON_BINARY", "NOT_SPECIFIED"), "|", [type("string"), "|", type("null")]], "ethnicity?": [type.enumerated("WHITE", "ASIAN", "HISPANIC_LATINO", "HAWAIIAN", "NATIVE_AMERICAN", "BLACK_AFRICAN_AMERICAN", "MULTIPLE_ETHNICITIES", "DECLINE_TO_SPECIFY"), "|", [type("string"), "|", type("null")]], "marital_status?": [type.enumerated("SINGLE", "MARRIED", "DOMESTIC_PARTNERSHIP", "WIDOWED", "DIVORCED", "SEPARATED", "NOT_MARRIED"), "|", [type("string"), "|", type("null")]], "employment_status?": [type.enumerated("ACTIVE", "PENDING", "INACTIVE", "LEAVE"), "|", [type("string"), "|", type("null")]], "employment_type?": [type.enumerated("FULL_TIME", "PART_TIME", "CONTRACT", "INTERNSHIP", "FREELANCE", "WORKING_STUDENT", "APPRENTICESHIP", "TRAINING"), "|", [type("string"), "|", type("null")]], weekly_hours: type("number").or(type("null")), avatar: type("string").or(type("null")), work_location_id: type("string").or(type("null")), legal_entity_id: type("string").or(type("null")), manager_id: type("string").or(type("null")), "home_address?": type({ "city?": type("string").or(type("null")), "country?": type("string").or(type("null")), "raw?": type("string").or(type("null")), "state?": type("string").or(type("null")), "street_1?": type("string").or(type("null")), "street_2?": type("string").or(type("null")), "zip_code?": type("string").or(type("null")) }).or(type("null")), "bank_accounts?": type({ "iban?": type("string").or(type("null")), "bic?": type("string").or(type("null")), "account_number?": type("string").or(type("null")), "holder_name?": type("string").or(type("null")), "bank_name?": type("string").or(type("null")), "domestic_bank_routing?": type({ number: type("string"), type: type.enumerated("GB_SORT_CODE", "DE_BANKLEITZAHL", "US_ABA_ROUTING_TRANSIT_NUMBER", "CA_ROUTING_NUMBER", "AU_BSB_CODE", "FR_RIB").or(type("null")) }).or(type("null")) }).array().or(type("null")), date_of_birth: type("string.date").or(type("null")), start_date: type("string.date").or(type("null")), termination_date: type("string.date").or(type("null")), remote_created_at: type("string.date").or(type("null")), changed_at: type("string.date"), remote_deleted_at: type("string.date").or(type("null")), custom_fields: type({ "[string]": type("unknown") }).or(type("null")), integration_fields: type({ id: type("string"), key: type("string"), type: type.enumerated("DEFAULT", "CUSTOM"), "value?": type("null"), label: type("string").or(type("null")) }).array(), remote_data: type({ "[string]": type("unknown") }).or(type("null")) }, warnings: type({ message: type("string") }).array() },
  PostHrisEmployeesRequestBody: { first_name: type("string"), last_name: type("string"), "work_email?": type("string.email"), "gender?": type.enumerated("MALE", "FEMALE", "NON_BINARY", "NOT_SPECIFIED"), "job_title?": type("string"), "home_address?": { "street_1?": type("string"), "street_2?": type("string"), "city?": type("string"), "state?": type("string"), "zip_code?": type("string"), "country?": type("string").narrow((s) => typeof s === "string" && new RegExp("^[A-Z]{2}$").test(s)) }, "date_of_birth?": type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)), "mobile_phone_number?": type("string"), "home_phone_number?": type("string"), "nationality?": type("string").narrow((s) => typeof s === "string" && new RegExp("^[A-Z]{2}$").test(s)), "start_date?": type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)), "legal_entity_id?": type("string"), "location_id?": type("string"), "remote_fields?": { "humaans?": { "employee?": { "[string]": type("unknown") } }, "hibob?": { "employee?": { "[string]": type("unknown") } }, "sympa?": { "GenericNewHire?": { "[string]": type("unknown") } }, "silae?": { "siret?": type("string"), "employee?": { "[string]": type("unknown") }, "employment?": { "[string]": type("unknown") } }, "peoplehr?": { "job_role_effective_date?": type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)), "department?": type("string") }, "zohopeople?": { "employee_id?": type("string >= 1") }, "workday?": { "job_requisition_id?": type("string"), "position_id?": type("string"), "ssn?": type("string"), "bank_account?": { iban: type("string"), bic: type("string"), bank_name: type("string") } }, "deel?": { candidate_id: type("string"), candidate_link: type("string") }, "bamboohr?": { "employee?": { "[string]": type("unknown") } }, "oracle?": { group_id: type("string"), department_id: type("string") }, "adpworkforcenow?": { onboarding_template_code: type("string"), applicant_payroll_profile_group_code: type("string"), "manager_position_id?": type("string"), "home_organization_unit_code?": type("string"), "personal_email?": type("string") }, "azuread?": { password: type("string") }, "paycor?": { paygroupRemoteId: type("string"), departmentRemoteId: type("string") }, "planday?": { department_remote_id: type("string") }, "dayforce?": { social_security_number: type("string"), pay_type: type("string"), pay_class: type("string"), pay_group: type("string"), base_rate: type("number"), role: type("string"), location: type("string"), department: type("string"), job: type("string"), country: type("string") } } },
  Schema1: { "[string]": [{ label: type("string"), required: type("boolean"), "description?": type("string").or(type("null")), "unified_key?": type.enumerated("first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary").or(type("null")), type: type("'text'"), "min_length?": type("number").or(type("null")), "max_length?": type("number").or(type("null")), "reg_exp?": type("string").or(type("null")) }, "|", [{ label: type("string"), required: type("boolean"), "description?": type("string").or(type("null")), "unified_key?": type.enumerated("first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary").or(type("null")), type: type("'number'"), "min?": type("number").or(type("null")), "max?": type("number").or(type("null")) }, "|", [{ label: type("string"), required: type("boolean"), "description?": type("string").or(type("null")), "unified_key?": type.enumerated("first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary").or(type("null")), type: type("'date'") }, "|", [{ label: type("string"), required: type("boolean"), "description?": type("string").or(type("null")), "unified_key?": type.enumerated("first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary").or(type("null")), type: type("'single_select'"), options: [{ type: type("'inline'"), entries: type({ id: type("string"), label: type("string"), "unified_value?": type("string"), remote_id: [type("string"), "|", type("number")] }).array() }, "|", { type: type("'referenced'"), link: type("string") }] }, "|", [{ label: type("string"), required: type("boolean"), "description?": type("string").or(type("null")), "unified_key?": type("string").or(type("null")), type: type("'multi_select'"), "min_items?": type("number").or(type("null")), "max_items?": type("number").or(type("null")), options: [{ type: type("'inline'"), entries: type({ id: type("string"), label: type("string"), "unified_value?": type("string"), remote_id: [type("string"), "|", type("number")] }).array() }, "|", { type: type("'referenced'"), link: type("string") }] }, "|", [{ label: type("string"), required: type("boolean"), "description?": type("string").or(type("null")), "unified_key?": type.enumerated("first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary").or(type("null")), type: type("'checkbox'") }, "|", [{ label: type("string"), required: type("boolean"), "description?": type("string").or(type("null")), "unified_key?": type.enumerated("first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary").or(type("null")), type: type("'object'"), properties: "Schema1" }, "|", [{ label: type("string"), required: type("boolean"), "description?": type("string").or(type("null")), "unified_key?": type.enumerated("first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary").or(type("null")), type: type("'array'"), item_type: "Schema2", "min_items?": type("number").or(type("null")), "max_items?": type("number").or(type("null")) }, "|", { label: type("string"), required: type("boolean"), "description?": type("string").or(type("null")), "unified_key?": type.enumerated("first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary").or(type("null")), type: type("'file'"), file_restrictions: { accepted_mime_types: type("string").array(), "max_file_size?": type("number").or(type("null")) } }]]]]]]]] },
  Schema2: [{ label: type("string"), required: type("boolean"), "description?": type("string").or(type("null")), "unified_key?": type.enumerated("first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary").or(type("null")), type: type("'text'"), "min_length?": type("number").or(type("null")), "max_length?": type("number").or(type("null")), "reg_exp?": type("string").or(type("null")) }, "|", [{ label: type("string"), required: type("boolean"), "description?": type("string").or(type("null")), "unified_key?": type.enumerated("first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary").or(type("null")), type: type("'number'"), "min?": type("number").or(type("null")), "max?": type("number").or(type("null")) }, "|", [{ label: type("string"), required: type("boolean"), "description?": type("string").or(type("null")), "unified_key?": type.enumerated("first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary").or(type("null")), type: type("'date'") }, "|", [{ label: type("string"), required: type("boolean"), "description?": type("string").or(type("null")), "unified_key?": type.enumerated("first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary").or(type("null")), type: type("'single_select'"), options: [{ type: type("'inline'"), entries: type({ id: type("string"), label: type("string"), "unified_value?": type("string"), remote_id: [type("string"), "|", type("number")] }).array() }, "|", { type: type("'referenced'"), link: type("string") }] }, "|", [{ label: type("string"), required: type("boolean"), "description?": type("string").or(type("null")), "unified_key?": type("string").or(type("null")), type: type("'multi_select'"), "min_items?": type("number").or(type("null")), "max_items?": type("number").or(type("null")), options: [{ type: type("'inline'"), entries: type({ id: type("string"), label: type("string"), "unified_value?": type("string"), remote_id: [type("string"), "|", type("number")] }).array() }, "|", { type: type("'referenced'"), link: type("string") }] }, "|", [{ label: type("string"), required: type("boolean"), "description?": type("string").or(type("null")), "unified_key?": type.enumerated("first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary").or(type("null")), type: type("'checkbox'") }, "|", [{ label: type("string"), required: type("boolean"), "description?": type("string").or(type("null")), "unified_key?": type.enumerated("first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary").or(type("null")), type: type("'object'"), properties: "Schema1" }, "|", [{ label: type("string"), required: type("boolean"), "description?": type("string").or(type("null")), "unified_key?": type.enumerated("first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary").or(type("null")), type: type("'array'"), item_type: "Schema2", "min_items?": type("number").or(type("null")), "max_items?": type("number").or(type("null")) }, "|", { label: type("string"), required: type("boolean"), "description?": type("string").or(type("null")), "unified_key?": type.enumerated("first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary").or(type("null")), type: type("'file'"), file_restrictions: { accepted_mime_types: type("string").array(), "max_file_size?": type("number").or(type("null")) } }]]]]]]]],
  GetHrisEmployeesFormPositiveResponse: { status: type("'success'"), data: { properties: { "[string]": [{ label: type("string"), required: type("boolean"), "description?": type("string").or(type("null")), "unified_key?": type.enumerated("first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary").or(type("null")), type: type("'text'"), "min_length?": type("number").or(type("null")), "max_length?": type("number").or(type("null")), "reg_exp?": type("string").or(type("null")) }, "|", [{ label: type("string"), required: type("boolean"), "description?": type("string").or(type("null")), "unified_key?": type.enumerated("first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary").or(type("null")), type: type("'number'"), "min?": type("number").or(type("null")), "max?": type("number").or(type("null")) }, "|", [{ label: type("string"), required: type("boolean"), "description?": type("string").or(type("null")), "unified_key?": type.enumerated("first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary").or(type("null")), type: type("'date'") }, "|", [{ label: type("string"), required: type("boolean"), "description?": type("string").or(type("null")), "unified_key?": type.enumerated("first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary").or(type("null")), type: type("'single_select'"), options: [{ type: type("'inline'"), entries: type({ id: type("string"), label: type("string"), "unified_value?": type("string"), remote_id: [type("string"), "|", type("number")] }).array() }, "|", { type: type("'referenced'"), link: type("string") }] }, "|", [{ label: type("string"), required: type("boolean"), "description?": type("string").or(type("null")), "unified_key?": type("string").or(type("null")), type: type("'multi_select'"), "min_items?": type("number").or(type("null")), "max_items?": type("number").or(type("null")), options: [{ type: type("'inline'"), entries: type({ id: type("string"), label: type("string"), "unified_value?": type("string"), remote_id: [type("string"), "|", type("number")] }).array() }, "|", { type: type("'referenced'"), link: type("string") }] }, "|", [{ label: type("string"), required: type("boolean"), "description?": type("string").or(type("null")), "unified_key?": type.enumerated("first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary").or(type("null")), type: type("'checkbox'") }, "|", [{ label: type("string"), required: type("boolean"), "description?": type("string").or(type("null")), "unified_key?": type.enumerated("first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary").or(type("null")), type: type("'object'"), properties: "Schema1" }, "|", [{ label: type("string"), required: type("boolean"), "description?": type("string").or(type("null")), "unified_key?": type.enumerated("first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary").or(type("null")), type: type("'array'"), item_type: "Schema2", "min_items?": type("number").or(type("null")), "max_items?": type("number").or(type("null")) }, "|", { label: type("string"), required: type("boolean"), "description?": type("string").or(type("null")), "unified_key?": type.enumerated("first_name", "last_name", "date_of_birth", "gender", "home_address.city", "home_address.country", "home_address.state", "home_address.street_1", "home_address.street_2", "home_address.zip_code", "job_title", "legal_entity_id", "location_id", "mobile_phone_number", "home_phone_number", "nationality", "start_date", "work_email", "private_email", "yearly_salary").or(type("null")), type: type("'file'"), file_restrictions: { accepted_mime_types: type("string").array(), "max_file_size?": type("number").or(type("null")) } }]]]]]]]] } }, warnings: type({ message: type("string") }).array() },
  PostHrisEmployeesFormPositiveResponse: { status: type("'success'"), data: { id: type("string").or(type("null")), remote_id: type("string").or(type("null")), prehire: { remote_id: type("string").or(type("null")) } }, warnings: type({ message: type("string") }).array() },
  Schema6: "Schema4[]",
  Schema4: [type("string"), "|", [type("number"), "|", [type("boolean"), "|", ["Schema5", "|", "Schema6"]]]],
  Schema5: { "[string]": "Schema4" },
  Schema3: { "[string]": "Schema4" },
  PostHrisEmployeesFormRequestBody: { properties: "Schema3" },
  PatchHrisEmployeesEmployeeIdParameterEmployeeId: type("string"),
  PatchHrisEmployeesEmployeeIdPositiveResponse: { status: type("'success'"), data: { id: type("string"), remote_id: type("string"), employee_number: type("string").or(type("null")), first_name: type("string").or(type("null")), last_name: type("string").or(type("null")), nationality: type("string").or(type("null")), display_full_name: type("string").or(type("null")), job_title: type("string").or(type("null")), "work_email?": type("string").narrow((s) => typeof s === "string" && new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$").test(s)).or(type("null")), "personal_email?": type("string").narrow((s) => typeof s === "string" && new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$").test(s)).or(type("null")), mobile_phone_number: type("string").or(type("null")), ssn: type("string").or(type("null")), tax_id: type("string").or(type("null")), "gender?": [type.enumerated("MALE", "FEMALE", "NON_BINARY", "NOT_SPECIFIED"), "|", [type("string"), "|", type("null")]], "ethnicity?": [type.enumerated("WHITE", "ASIAN", "HISPANIC_LATINO", "HAWAIIAN", "NATIVE_AMERICAN", "BLACK_AFRICAN_AMERICAN", "MULTIPLE_ETHNICITIES", "DECLINE_TO_SPECIFY"), "|", [type("string"), "|", type("null")]], "marital_status?": [type.enumerated("SINGLE", "MARRIED", "DOMESTIC_PARTNERSHIP", "WIDOWED", "DIVORCED", "SEPARATED", "NOT_MARRIED"), "|", [type("string"), "|", type("null")]], "employment_status?": [type.enumerated("ACTIVE", "PENDING", "INACTIVE", "LEAVE"), "|", [type("string"), "|", type("null")]], "employment_type?": [type.enumerated("FULL_TIME", "PART_TIME", "CONTRACT", "INTERNSHIP", "FREELANCE", "WORKING_STUDENT", "APPRENTICESHIP", "TRAINING"), "|", [type("string"), "|", type("null")]], weekly_hours: type("number").or(type("null")), avatar: type("string").or(type("null")), work_location_id: type("string").or(type("null")), legal_entity_id: type("string").or(type("null")), manager_id: type("string").or(type("null")), "home_address?": type({ "city?": type("string").or(type("null")), "country?": type("string").or(type("null")), "raw?": type("string").or(type("null")), "state?": type("string").or(type("null")), "street_1?": type("string").or(type("null")), "street_2?": type("string").or(type("null")), "zip_code?": type("string").or(type("null")) }).or(type("null")), "bank_accounts?": type({ "iban?": type("string").or(type("null")), "bic?": type("string").or(type("null")), "account_number?": type("string").or(type("null")), "holder_name?": type("string").or(type("null")), "bank_name?": type("string").or(type("null")), "domestic_bank_routing?": type({ number: type("string"), type: type.enumerated("GB_SORT_CODE", "DE_BANKLEITZAHL", "US_ABA_ROUTING_TRANSIT_NUMBER", "CA_ROUTING_NUMBER", "AU_BSB_CODE", "FR_RIB").or(type("null")) }).or(type("null")) }).array().or(type("null")), date_of_birth: type("string.date").or(type("null")), start_date: type("string.date").or(type("null")), termination_date: type("string.date").or(type("null")), remote_created_at: type("string.date").or(type("null")), changed_at: type("string.date"), remote_deleted_at: type("string.date").or(type("null")), remote_data: type({ "[string]": type("unknown") }).or(type("null")) }, warnings: type({ message: type("string") }).array() },
  PatchHrisEmployeesEmployeeIdRequestBody: { "first_name?": type("string"), "last_name?": type("string"), work_email: type("string.email"), "gender?": type.enumerated("MALE", "FEMALE", "NON_BINARY", "NOT_SPECIFIED"), "job_title?": type("string"), "home_address?": { "street_1?": type("string"), "street_2?": type("string"), "city?": type("string"), "state?": type("string"), "zip_code?": type("string"), "country?": type("string").narrow((s) => typeof s === "string" && new RegExp("^[A-Z]{2}$").test(s)) }, "date_of_birth?": type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)), "mobile_phone_number?": type("string"), "home_phone_number?": type("string"), "nationality?": type("string").narrow((s) => typeof s === "string" && new RegExp("^[A-Z]{2}$").test(s)), "start_date?": type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)), "legal_entity_id?": type("string"), "location_id?": type("string"), "remote_fields?": { "humaans?": { "employee?": { "[string]": type("unknown") } }, "hibob?": { "employee?": { "[string]": type("unknown") } }, "sympa?": { "GenericNewHire?": { "[string]": type("unknown") } }, "silae?": { "siret?": type("string"), "employee?": { "[string]": type("unknown") }, "employment?": { "[string]": type("unknown") } }, "peoplehr?": { "job_role_effective_date?": type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)), "department?": type("string") }, "zohopeople?": { "employee_id?": type("string >= 1") }, "workday?": { "job_requisition_id?": type("string"), "position_id?": type("string"), "ssn?": type("string"), "bank_account?": { iban: type("string"), bic: type("string"), bank_name: type("string") } }, "deel?": { candidate_id: type("string"), candidate_link: type("string") }, "bamboohr?": { "employee?": { "[string]": type("unknown") } }, "oracle?": { group_id: type("string"), department_id: type("string") }, "adpworkforcenow?": { onboarding_template_code: type("string"), applicant_payroll_profile_group_code: type("string"), "manager_position_id?": type("string"), "home_organization_unit_code?": type("string"), "personal_email?": type("string") }, "azuread?": { password: type("string") }, "paycor?": { paygroupRemoteId: type("string"), departmentRemoteId: type("string") }, "planday?": { department_remote_id: type("string") }, "dayforce?": { social_security_number: type("string"), pay_type: type("string"), pay_class: type("string"), pay_group: type("string"), base_rate: type("number"), role: type("string"), location: type("string"), department: type("string"), job: type("string"), country: type("string") } }, "ssn?": type("string"), "marital_status?": type.enumerated("SINGLE", "MARRIED", "DOMESTIC_PARTNERSHIP", "WIDOWED", "DIVORCED", "SEPARATED", "NOT_MARRIED"), "termination_date?": type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)), "tax_id?": type("string") },
  PostHrisEmployeesEmployeeIdDocumentsParameterEmployeeId: type("string"),
  PostHrisEmployeesEmployeeIdDocumentsPositiveResponse: { status: type("'success'"), data: { "[string]": type("unknown") }, warnings: type({ message: type("string") }).array() },
  PostHrisEmployeesEmployeeIdDocumentsRequestBody: { category_id: type("string"), document: { name: type("string"), "content_type?": type("string").narrow((s) => typeof s === "string" && new RegExp("^[\\w.-]+\\/[\\w.-]+$").test(s)), "data_url?": type("string.url"), "data?": type("string") } },
  GetHrisEmployeeDocumentCategoriesParameterCursor: type("string"),
  GetHrisEmployeeDocumentCategoriesParameterPageSize: type("1 <= number.integer <= 250"),
  GetHrisEmployeeDocumentCategoriesParameterUpdatedAfter: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)),
  GetHrisEmployeeDocumentCategoriesParameterIncludeDeleted: type.enumerated("true", "false"),
  GetHrisEmployeeDocumentCategoriesParameterIgnoreUnsupportedFilters: type.enumerated("true", "false"),
  GetHrisEmployeeDocumentCategoriesParameterIds: type("string"),
  GetHrisEmployeeDocumentCategoriesParameterRemoteIds: type("string"),
  GetHrisEmployeeDocumentCategoriesPositiveResponse: { status: type("'success'"), data: { next: type("string").or(type("null")), results: type({ id: type("string"), remote_id: type("string").or(type("null")), name: type("string").or(type("null")), remote_data: type({ "[string]": type("unknown") }).or(type("null")), changed_at: type("string.date"), remote_deleted_at: type("string.date").or(type("null")) }).array() } },
  GetHrisTeamsParameterCursor: type("string"),
  GetHrisTeamsParameterPageSize: type("1 <= number.integer <= 250"),
  GetHrisTeamsParameterUpdatedAfter: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)),
  GetHrisTeamsParameterIncludeDeleted: type.enumerated("true", "false"),
  GetHrisTeamsParameterIgnoreUnsupportedFilters: type.enumerated("true", "false"),
  GetHrisTeamsParameterIds: type("string"),
  GetHrisTeamsParameterRemoteIds: type("string"),
  GetHrisTeamsPositiveResponse: { status: type("'success'"), data: { next: type("string").or(type("null")), results: type({ id: type("string"), remote_id: type("string"), name: type("string").or(type("null")), changed_at: type("string.date"), remote_deleted_at: type("string.date").or(type("null")), type: type.enumerated("DEPARTMENT", "TEAM", "COST_CENTER").or(type("null")), parent_id: type("string").or(type("null")), remote_data: type({ "[string]": type("unknown") }).or(type("null")) }).array() } },
  GetHrisGroupsParameterCursor: type("string"),
  GetHrisGroupsParameterPageSize: type("1 <= number.integer <= 250"),
  GetHrisGroupsParameterUpdatedAfter: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)),
  GetHrisGroupsParameterIncludeDeleted: type.enumerated("true", "false"),
  GetHrisGroupsParameterIgnoreUnsupportedFilters: type.enumerated("true", "false"),
  GetHrisGroupsParameterIds: type("string"),
  GetHrisGroupsParameterRemoteIds: type("string"),
  GetHrisGroupsParameterTypes: type("string"),
  GetHrisGroupsParameterNameContains: type("string"),
  GetHrisGroupsPositiveResponse: { status: type("'success'"), data: { next: type("string").or(type("null")), results: type({ id: type("string"), remote_id: type("string"), name: type("string").or(type("null")), changed_at: type("string.date"), remote_deleted_at: type("string.date").or(type("null")), type: type.enumerated("DEPARTMENT", "TEAM", "COST_CENTER").or(type("null")), parent_id: type("string").or(type("null")), remote_data: type({ "[string]": type("unknown") }).or(type("null")) }).array() } },
  GetHrisEmploymentsParameterCursor: type("string"),
  GetHrisEmploymentsParameterPageSize: type("1 <= number.integer <= 250"),
  GetHrisEmploymentsParameterUpdatedAfter: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)),
  GetHrisEmploymentsParameterIncludeDeleted: type.enumerated("true", "false"),
  GetHrisEmploymentsParameterIgnoreUnsupportedFilters: type.enumerated("true", "false"),
  GetHrisEmploymentsParameterIds: type("string"),
  GetHrisEmploymentsParameterRemoteIds: type("string"),
  GetHrisEmploymentsPositiveResponse: { status: type("'success'"), data: { next: type("string").or(type("null")), results: type({ id: type("string"), remote_id: type("string").or(type("null")), employee_id: type("string"), job_title: type("string").or(type("null")), pay_rate: type("number").or(type("null")), "pay_period?": [type.enumerated("HOUR", "DAY", "WEEK", "TWO_WEEKS", "HALF_MONTH", "MONTH", "TWO_MONTHS", "QUARTER", "HALF_YEAR", "YEAR"), "|", [type("string"), "|", type("null")]], "pay_frequency?": [type.enumerated("DAILY", "WEEKLY", "BIWEEKLY", "MONTHLY", "SEMIMONTHLY", "QUARTERLY", "SEMIANNUALLY", "ANNUALLY", "PRO_RATA"), "|", [type("string"), "|", type("null")]], "employment_type?": [type.enumerated("FULL_TIME", "PART_TIME", "CONTRACT", "INTERNSHIP", "FREELANCE", "WORKING_STUDENT", "APPRENTICESHIP", "TRAINING"), "|", [type("string"), "|", type("null")]], pay_currency: type("string").or(type("null")), effective_date: type("string.date").or(type("null")), changed_at: type("string.date"), remote_deleted_at: type("string.date").or(type("null")), remote_data: type({ "[string]": type("unknown") }).or(type("null")), custom_fields: type({ "[string]": type("unknown") }).or(type("null")), integration_fields: type({ id: type("string"), key: type("string"), type: type.enumerated("DEFAULT", "CUSTOM"), "value?": type("null"), label: type("string").or(type("null")) }).array() }).array() } },
  GetHrisLocationsParameterCursor: type("string"),
  GetHrisLocationsParameterPageSize: type("1 <= number.integer <= 250"),
  GetHrisLocationsParameterUpdatedAfter: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)),
  GetHrisLocationsParameterIncludeDeleted: type.enumerated("true", "false"),
  GetHrisLocationsParameterIgnoreUnsupportedFilters: type.enumerated("true", "false"),
  GetHrisLocationsParameterIds: type("string"),
  GetHrisLocationsParameterRemoteIds: type("string"),
  GetHrisLocationsParameterNameContains: type("string"),
  GetHrisLocationsPositiveResponse: { status: type("'success'"), data: { next: type("string").or(type("null")), results: type({ id: type("string"), remote_id: type("string").or(type("null")), name: type("string").or(type("null")), "address?": type({ "city?": type("string").or(type("null")), "country?": type("string").or(type("null")), "raw?": type("string").or(type("null")), "state?": type("string").or(type("null")), "street_1?": type("string").or(type("null")), "street_2?": type("string").or(type("null")), "zip_code?": type("string").or(type("null")) }).or(type("null")), type: type("string").or(type("null")), changed_at: type("string.date"), remote_deleted_at: type("string.date").or(type("null")), remote_data: type({ "[string]": type("unknown") }).or(type("null")) }).array() } },
  GetHrisAbsenceTypesParameterCursor: type("string"),
  GetHrisAbsenceTypesParameterPageSize: type("1 <= number.integer <= 250"),
  GetHrisAbsenceTypesParameterUpdatedAfter: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)),
  GetHrisAbsenceTypesParameterIncludeDeleted: type.enumerated("true", "false"),
  GetHrisAbsenceTypesParameterIgnoreUnsupportedFilters: type.enumerated("true", "false"),
  GetHrisAbsenceTypesParameterIds: type("string"),
  GetHrisAbsenceTypesParameterRemoteIds: type("string"),
  GetHrisAbsenceTypesPositiveResponse: { status: type("'success'"), data: { next: type("string").or(type("null")), results: type({ id: type("string"), remote_id: type("string"), name: type("string").or(type("null")), unit: type.enumerated("HOURS", "DAYS").or(type("null")), half_days_supported: type("boolean").or(type("null")), exact_times_supported: type("boolean").or(type("null")), remote_data: type({ "[string]": type("unknown") }).or(type("null")), changed_at: type("string.date"), remote_deleted_at: type("string.date").or(type("null")) }).array() } },
  GetHrisTimeOffBalancesParameterCursor: type("string"),
  GetHrisTimeOffBalancesParameterPageSize: type("1 <= number.integer <= 250"),
  GetHrisTimeOffBalancesParameterUpdatedAfter: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)),
  GetHrisTimeOffBalancesParameterIncludeDeleted: type.enumerated("true", "false"),
  GetHrisTimeOffBalancesParameterIgnoreUnsupportedFilters: type.enumerated("true", "false"),
  GetHrisTimeOffBalancesParameterIds: type("string"),
  GetHrisTimeOffBalancesParameterRemoteIds: type("string"),
  GetHrisTimeOffBalancesParameterEmployeeId: type("string"),
  GetHrisTimeOffBalancesPositiveResponse: { status: type("'success'"), data: { next: type("string").or(type("null")), results: type({ id: type("string"), remote_id: type("string").or(type("null")), employee_id: type("string"), type_id: type("string"), balance: type("number").or(type("null")), balance_unit: type.enumerated("HOURS", "DAYS").or(type("null")), changed_at: type("string.date"), remote_deleted_at: type("string.date").or(type("null")), used: type("number").or(type("null")), used_unit: type.enumerated("HOURS", "DAYS").or(type("null")), remote_data: type({ "[string]": type("unknown") }).or(type("null")), type: { id: type("string"), remote_id: type("string"), name: type("string").or(type("null")), unit: type.enumerated("HOURS", "DAYS").or(type("null")), half_days_supported: type("boolean").or(type("null")), exact_times_supported: type("boolean").or(type("null")), remote_data: type({ "[string]": type("unknown") }).or(type("null")), changed_at: type("string.date"), remote_deleted_at: type("string.date").or(type("null")) } }).array() } },
  GetHrisAbsencesParameterCursor: type("string"),
  GetHrisAbsencesParameterPageSize: type("1 <= number.integer <= 250"),
  GetHrisAbsencesParameterUpdatedAfter: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)),
  GetHrisAbsencesParameterIncludeDeleted: type.enumerated("true", "false"),
  GetHrisAbsencesParameterIgnoreUnsupportedFilters: type.enumerated("true", "false"),
  GetHrisAbsencesParameterIds: type("string"),
  GetHrisAbsencesParameterRemoteIds: type("string"),
  GetHrisAbsencesParameterDateFrom: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)),
  GetHrisAbsencesParameterDateUntil: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)),
  GetHrisAbsencesParameterTypeIds: type("string"),
  GetHrisAbsencesParameterEmployeeId: type("string"),
  GetHrisAbsencesParameterTimeFrom: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)),
  GetHrisAbsencesParameterTimeUntil: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)),
  GetHrisAbsencesPositiveResponse: { status: type("'success'"), data: { next: type("string").or(type("null")), results: type({ id: type("string"), remote_id: type("string").or(type("null")), employee_id: type("string"), approver_id: type("string").or(type("null")), start_date: type("null"), end_date: type("null"), start_half_day: type("boolean").or(type("null")), end_half_day: type("boolean").or(type("null")), start_time: type("null"), end_time: type("null"), amount: type("number").or(type("null")), unit: type.enumerated("HOURS", "DAYS").or(type("null")), "status?": [type.enumerated("REQUESTED", "APPROVED", "DECLINED", "CANCELLED", "DELETED"), "|", [type("string"), "|", type("null")]], employee_note: type("string").or(type("null")), type_id: type("string").or(type("null")), remote_created_at: type("string.date").or(type("null")), remote_updated_at: type("string.date").or(type("null")), changed_at: type("string.date"), remote_deleted_at: type("string.date").or(type("null")), remote_data: type({ "[string]": type("unknown") }).or(type("null")), type: type({ id: type("string"), remote_id: type("string"), name: type("string").or(type("null")), unit: type.enumerated("HOURS", "DAYS").or(type("null")), half_days_supported: type("boolean").or(type("null")), exact_times_supported: type("boolean").or(type("null")), remote_data: type({ "[string]": type("unknown") }).or(type("null")), changed_at: type("string.date"), remote_deleted_at: type("string.date").or(type("null")) }).or(type("null")) }).array() } },
  PostHrisAbsencesPositiveResponse: { status: type("'success'"), data: { id: type("string"), remote_id: type("string").or(type("null")), employee_id: type("string"), approver_id: type("string").or(type("null")), start_date: type("null"), end_date: type("null"), start_half_day: type("boolean").or(type("null")), end_half_day: type("boolean").or(type("null")), start_time: type("null"), end_time: type("null"), amount: type("number").or(type("null")), unit: type.enumerated("HOURS", "DAYS").or(type("null")), "status?": [type.enumerated("REQUESTED", "APPROVED", "DECLINED", "CANCELLED", "DELETED"), "|", [type("string"), "|", type("null")]], employee_note: type("string").or(type("null")), type_id: type("string").or(type("null")), remote_created_at: type("string.date").or(type("null")), remote_updated_at: type("string.date").or(type("null")), changed_at: type("string.date"), remote_deleted_at: type("string.date").or(type("null")), remote_data: type({ "[string]": type("unknown") }).or(type("null")) }, warnings: type({ message: type("string") }).array() },
  PostHrisAbsencesRequestBody: { employee_id: type("string"), absence_type_id: type("string"), status: type.enumerated("REQUESTED", "APPROVED"), start_date: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)), end_date: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)), start_half_day: "boolean = false", end_half_day: "boolean = false", "amount?": type("number >= 0"), "unit?": type.enumerated("HOURS", "DAYS"), employee_note: type("string").or(type("null")), "start_time?": type("string").narrow((s) => typeof s === "string" && new RegExp("^(?:2[0-3]|[01]?\\d):[0-5]?\\d(:[0-5]?\\d)?$").test(s)), "end_time?": type("string").narrow((s) => typeof s === "string" && new RegExp("^(?:2[0-3]|[01]?\\d):[0-5]?\\d(:[0-5]?\\d)?$").test(s)), "remote_fields?": { "a3innuvanomina?": { "benefit_type_id?": type.enumerated("Delegated Payment", "No Right to Benefit", "Direct payment") }, "adpworkforcenow?": { "employment_id?": type("string"), "paid_leave?": type("boolean") } } },
  DeleteHrisAbsencesAbsenceIdParameterAbsenceId: type("string"),
  DeleteHrisAbsencesAbsenceIdPositiveResponse: { status: type("'success'"), data: { id: type("string"), remote_id: type("string").or(type("null")), employee_id: type("string"), approver_id: type("string").or(type("null")), start_date: type("null"), end_date: type("null"), start_half_day: type("boolean").or(type("null")), end_half_day: type("boolean").or(type("null")), start_time: type("null"), end_time: type("null"), amount: type("number").or(type("null")), unit: type.enumerated("HOURS", "DAYS").or(type("null")), "status?": [type.enumerated("REQUESTED", "APPROVED", "DECLINED", "CANCELLED", "DELETED"), "|", [type("string"), "|", type("null")]], employee_note: type("string").or(type("null")), type_id: type("string").or(type("null")), remote_created_at: type("string.date").or(type("null")), remote_updated_at: type("string.date").or(type("null")), changed_at: type("string.date"), remote_deleted_at: type("string.date").or(type("null")), remote_data: type({ "[string]": type("unknown") }).or(type("null")) }, warnings: type({ message: type("string") }).array() },
  DeleteHrisAbsencesAbsenceIdRequestBody: { "remote_fields?": { "adpworkforcenow?": { "employment_id?": type("string") } } },
  GetHrisLegalEntitiesParameterCursor: type("string"),
  GetHrisLegalEntitiesParameterPageSize: type("1 <= number.integer <= 250"),
  GetHrisLegalEntitiesParameterUpdatedAfter: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)),
  GetHrisLegalEntitiesParameterIncludeDeleted: type.enumerated("true", "false"),
  GetHrisLegalEntitiesParameterIgnoreUnsupportedFilters: type.enumerated("true", "false"),
  GetHrisLegalEntitiesParameterIds: type("string"),
  GetHrisLegalEntitiesParameterRemoteIds: type("string"),
  GetHrisLegalEntitiesParameterNameContains: type("string"),
  GetHrisLegalEntitiesPositiveResponse: { status: type("'success'"), data: { next: type("string").or(type("null")), results: type({ id: type("string"), remote_id: type("string").or(type("null")), name: type("string").or(type("null")), "address?": type({ "city?": type("string").or(type("null")), "country?": type("string").or(type("null")), "raw?": type("string").or(type("null")), "state?": type("string").or(type("null")), "street_1?": type("string").or(type("null")), "street_2?": type("string").or(type("null")), "zip_code?": type("string").or(type("null")) }).or(type("null")), changed_at: type("string.date"), remote_deleted_at: type("string.date").or(type("null")), remote_data: type({ "[string]": type("unknown") }).or(type("null")) }).array() } },
  GetHrisTimesheetsParameterCursor: type("string"),
  GetHrisTimesheetsParameterPageSize: type("1 <= number.integer <= 250"),
  GetHrisTimesheetsParameterUpdatedAfter: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)),
  GetHrisTimesheetsParameterIncludeDeleted: type.enumerated("true", "false"),
  GetHrisTimesheetsParameterIgnoreUnsupportedFilters: type.enumerated("true", "false"),
  GetHrisTimesheetsParameterIds: type("string"),
  GetHrisTimesheetsParameterRemoteIds: type("string"),
  GetHrisTimesheetsParameterEmployeeId: type("string"),
  GetHrisTimesheetsParameterStartedBefore: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)),
  GetHrisTimesheetsParameterStartedAfter: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)),
  GetHrisTimesheetsParameterEndedBefore: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)),
  GetHrisTimesheetsParameterEndedAfter: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)),
  GetHrisTimesheetsPositiveResponse: { status: type("'success'"), data: { next: type("string").or(type("null")), results: type({ id: type("string"), remote_id: type("string").or(type("null")), employee_id: type("string"), started_at: type("string.date").or(type("null")), ended_at: type("string.date").or(type("null")), timezone: type("string").narrow((s) => typeof s === "string" && new RegExp("^[+-](?:0\\d|1[0-4]):[0-5]\\d$").test(s)).or(type("null")), payable_hours: type("number").or(type("null")), unpaid_break_minutes: type("number").or(type("null")), "breaks?": type({ ended_at: [type("string.date"), "|", type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$").test(s))], paid: type("boolean"), started_at: [type("string.date"), "|", type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$").test(s))] }).array().or(type("null")), approval_status: type("string").or(type("null")), approved_at: type("string.date").or(type("null")), comment: type("string").or(type("null")), custom_fields: type({ "[string]": type("unknown") }).or(type("null")), integration_fields: type({ id: type("string"), key: type("string"), type: type.enumerated("DEFAULT", "CUSTOM"), "value?": type("null"), label: type("string").or(type("null")) }).array(), changed_at: type("string.date"), remote_deleted_at: type("string.date").or(type("null")), remote_data: type({ "[string]": type("unknown") }).or(type("null")) }).array() } },
  GetHrisPerformanceReviewCyclesParameterCursor: type("string"),
  GetHrisPerformanceReviewCyclesParameterPageSize: type("1 <= number.integer <= 250"),
  GetHrisPerformanceReviewCyclesParameterUpdatedAfter: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)),
  GetHrisPerformanceReviewCyclesParameterIncludeDeleted: type.enumerated("true", "false"),
  GetHrisPerformanceReviewCyclesParameterIgnoreUnsupportedFilters: type.enumerated("true", "false"),
  GetHrisPerformanceReviewCyclesParameterIds: type("string"),
  GetHrisPerformanceReviewCyclesParameterRemoteIds: type("string"),
  GetHrisPerformanceReviewCyclesPositiveResponse: { status: type("'success'"), data: { next: type("string").or(type("null")), results: type({ id: type("string"), remote_id: type("string"), name: type("string").or(type("null")), review_period_start_date: type("string.date").or(type("null")), changed_at: type("string.date"), remote_deleted_at: type("string.date").or(type("null")), remote_data: type({ "[string]": type("unknown") }).or(type("null")) }).array() } },
  GetHrisPerformanceReviewsParameterCursor: type("string"),
  GetHrisPerformanceReviewsParameterPageSize: type("1 <= number.integer <= 250"),
  GetHrisPerformanceReviewsParameterUpdatedAfter: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)),
  GetHrisPerformanceReviewsParameterIncludeDeleted: type.enumerated("true", "false"),
  GetHrisPerformanceReviewsParameterIgnoreUnsupportedFilters: type.enumerated("true", "false"),
  GetHrisPerformanceReviewsParameterIds: type("string"),
  GetHrisPerformanceReviewsParameterRemoteIds: type("string"),
  GetHrisPerformanceReviewsParameterTypes: type("string"),
  GetHrisPerformanceReviewsParameterReviewCycleIds: type("string"),
  GetHrisPerformanceReviewsParameterRevieweeIds: type("string"),
  GetHrisPerformanceReviewsPositiveResponse: { status: type("'success'"), data: { next: type("string").or(type("null")), results: type({ id: type("string"), remote_id: type("string"), type: type.enumerated("MANAGER", "DIRECT_REPORT", "PEER", "SELF").or(type("null")), summary_comment: type("string").or(type("null")), "summary_rating?": [{ type: type("'NUMERIC'"), min: type("number").or(type("null")), max: type("number").or(type("null")), value: type("number").or(type("null")) }, "|", [{ type: type("'SINGLE_SELECT'"), ordered_options: type("string").array().or(type("null")), value: type("string").or(type("null")) }, "|", type("null")]], changed_at: type("string.date"), remote_deleted_at: type("string.date").or(type("null")), remote_data: type({ "[string]": type("unknown") }).or(type("null")), reviewee: { id: type("string"), remote_id: type("string"), first_name: type("string").or(type("null")), last_name: type("string").or(type("null")), display_full_name: type("string").or(type("null")), "work_email?": type("string").narrow((s) => typeof s === "string" && new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$").test(s)).or(type("null")), remote_deleted_at: type("string.date").or(type("null")) }, reviewer: type({ id: type("string"), remote_id: type("string"), first_name: type("string").or(type("null")), last_name: type("string").or(type("null")), display_full_name: type("string").or(type("null")), "work_email?": type("string").narrow((s) => typeof s === "string" && new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$").test(s)).or(type("null")), remote_deleted_at: type("string.date").or(type("null")) }).or(type("null")), review_cycle: type({ id: type("string"), remote_id: type("string"), name: type("string").or(type("null")), review_period_start_date: type("string.date").or(type("null")), changed_at: type("string.date"), remote_deleted_at: type("string.date").or(type("null")), remote_data: type({ "[string]": type("unknown") }).or(type("null")) }).or(type("null")) }).array() } },
  GetHrisSkillsParameterIds: type("string"),
  GetHrisSkillsParameterRemoteIds: type("string"),
  GetHrisSkillsParameterNameContains: type("string"),
  GetHrisSkillsPositiveResponse: { status: type("'success'"), data: { next: type("string").or(type("null")), results: type({ id: type("string"), remote_id: type("string"), name: type("string"), description: type("string").or(type("null")), ordered_levels: type("string").array().or(type("null")), changed_at: type("string.date"), remote_deleted_at: type("string.date").or(type("null")), remote_data: type({ "[string]": type("unknown") }).or(type("null")) }).array() } },
  PostHrisSkillsPositiveResponse: { status: type("'success'"), data: { id: type("string"), remote_id: type("string"), name: type("string"), description: type("string").or(type("null")), ordered_levels: type("string").array().or(type("null")), changed_at: type("string.date"), remote_deleted_at: type("string.date").or(type("null")), remote_data: type({ "[string]": type("unknown") }).or(type("null")) } },
  PostHrisSkillsRequestBody: { name: type("string"), "levels?": type("string").array() },
  PatchHrisSkillsSkillIdParameterSkillId: type("string"),
  PatchHrisSkillsSkillIdPositiveResponse: { status: type("'success'"), data: { id: type("string"), remote_id: type("string"), name: type("string"), description: type("string").or(type("null")), ordered_levels: type("string").array().or(type("null")), changed_at: type("string.date"), remote_deleted_at: type("string.date").or(type("null")), remote_data: type({ "[string]": type("unknown") }).or(type("null")) } },
  PatchHrisSkillsSkillIdRequestBody: { "name?": type("string"), "levels?": type("string").array() },
  DeleteHrisSkillsSkillIdParameterSkillId: type("string"),
  DeleteHrisSkillsSkillIdPositiveResponse: { status: type("'success'"), data: { id: type("string"), remote_id: type("string"), name: type("string"), description: type("string").or(type("null")), ordered_levels: type("string").array().or(type("null")), changed_at: type("string.date"), remote_deleted_at: type("string.date").or(type("null")), remote_data: type({ "[string]": type("unknown") }).or(type("null")) } },
  DeleteHrisSkillsSkillIdRequestBody: {  },
  GetHrisEmployeeSkillAssignmentsParameterIds: type("string"),
  GetHrisEmployeeSkillAssignmentsParameterRemoteIds: type("string"),
  GetHrisEmployeeSkillAssignmentsParameterEmployeeIds: type("string"),
  GetHrisEmployeeSkillAssignmentsParameterSkillIds: type("string"),
  GetHrisEmployeeSkillAssignmentsPositiveResponse: { status: type("'success'"), data: { next: type("string").or(type("null")), results: type({ id: type("string"), employee_id: type("string"), skill_id: type("string"), current_level: type("string").or(type("null")) }).array() } },
  PostHrisEmployeeSkillAssignmentsPositiveResponse: { status: type("'success'"), data: { id: type("string"), employee_id: type("string"), skill_id: type("string"), current_level: type("string").or(type("null")) } },
  PostHrisEmployeeSkillAssignmentsRequestBody: { employee_id: type("string"), skill_id: type("string"), "current_level?": type("string") },
  PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId: type("string"),
  PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse: { status: type("'success'"), data: { id: type("string"), employee_id: type("string"), skill_id: type("string"), current_level: type("string").or(type("null")) } },
  PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody: { current_level: type("string").or(type("null")) },
  DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId: type("string"),
  DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse: { status: type("'success'"), data: { id: type("string"), employee_id: type("string"), skill_id: type("string"), current_level: type("string").or(type("null")) } },
  DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody: {  },
  GetHrisStaffingEntitiesParameterCursor: type("string"),
  GetHrisStaffingEntitiesParameterPageSize: type("1 <= number.integer <= 250"),
  GetHrisStaffingEntitiesParameterUpdatedAfter: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)),
  GetHrisStaffingEntitiesParameterIncludeDeleted: type.enumerated("true", "false"),
  GetHrisStaffingEntitiesParameterIgnoreUnsupportedFilters: type.enumerated("true", "false"),
  GetHrisStaffingEntitiesParameterIds: type("string"),
  GetHrisStaffingEntitiesParameterRemoteIds: type("string"),
  GetHrisStaffingEntitiesParameterModelTypes: type("string"),
  GetHrisStaffingEntitiesParameterStatuses: type("string"),
  GetHrisStaffingEntitiesPositiveResponse: { status: type("'success'"), data: { next: type("string").or(type("null")), results: type({ id: type("string"), remote_id: type("string"), name: type("string").or(type("null")), model_type: type.enumerated("JOB", "POSITION", "REQUISITION").or(type("null")), description: type("string").or(type("null")), status: type.enumerated("OPEN_LIMITED", "OPEN_UNLIMITED", "PENDING", "FROZEN", "FILLED", "CLOSED").or(type("null")), "employment_types?": type({ remote_label: type("string"), unified_type: type.enumerated("FULL_TIME", "PART_TIME", "CONTRACT", "INTERNSHIP", "FREELANCE", "WORKING_STUDENT", "APPRENTICESHIP", "TRAINING").or(type("null")) }).array().or(type("null")), number_of_openings: type("number").or(type("null")), parent_id: type("string").or(type("null")), remote_url: type("string.url").or(type("null")), remote_created_at: type("string.date").or(type("null")), remote_updated_at: type("string.date").or(type("null")), changed_at: type("string.date"), remote_deleted_at: type("string.date").or(type("null")), custom_fields: type({ "[string]": type("unknown") }).or(type("null")), integration_fields: type({ id: type("string"), key: type("string"), type: type.enumerated("DEFAULT", "CUSTOM"), "value?": type("null"), label: type("string").or(type("null")) }).array(), remote_data: type({ "[string]": type("unknown") }).or(type("null")), locations: type({ id: type("string"), remote_id: type("string").or(type("null")), name: type("string").or(type("null")), type: type("string").or(type("null")) }).array(), legal_entities: type({ id: type("string"), remote_id: type("string").or(type("null")), name: type("string").or(type("null")) }).array(), groups: type({ id: type("string"), remote_id: type("string"), name: type("string").or(type("null")), type: type.enumerated("DEPARTMENT", "TEAM", "COST_CENTER").or(type("null")) }).array() }).array() } },
  GetAtsApplicationsParameterCursor: type("string"),
  GetAtsApplicationsParameterPageSize: type("1 <= number.integer <= 250"),
  GetAtsApplicationsParameterUpdatedAfter: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)),
  GetAtsApplicationsParameterIncludeDeleted: type.enumerated("true", "false"),
  GetAtsApplicationsParameterIgnoreUnsupportedFilters: type.enumerated("true", "false"),
  GetAtsApplicationsParameterIds: type("string"),
  GetAtsApplicationsParameterRemoteIds: type("string"),
  GetAtsApplicationsParameterOutcome: type.enumerated("PENDING", "HIRED", "DECLINED"),
  GetAtsApplicationsParameterOutcomes: type("string"),
  GetAtsApplicationsParameterJobIds: type("string"),
  GetAtsApplicationsParameterJobRemoteIds: type("string"),
  GetAtsApplicationsParameterCurrentStageIds: type("string"),
  GetAtsApplicationsParameterRemoteCreatedAfter: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)),
  GetAtsApplicationsPositiveResponse: { status: type("'success'"), data: { next: type("string").or(type("null")), results: type({ id: type("string"), remote_id: type("string").or(type("null")), outcome: type.enumerated("PENDING", "HIRED", "DECLINED").or(type("null")), rejection_reason_name: type("string").or(type("null")), rejected_at: type("string.date").or(type("null")), current_stage_id: type("string").or(type("null")), job_id: type("string").or(type("null")), candidate_id: type("string").or(type("null")), screening_question_answers: type([{ answer: { content: type("string").or(type("null")) }, question: { remote_id: type("string").or(type("null")), title: type("string"), type: type("'TEXT'") } }, "|", [{ answer: { choice: type("string").or(type("null")) }, question: { remote_id: type("string").or(type("null")), title: type("string"), type: type("'SINGLE_SELECT'") } }, "|", [{ answer: { choices: type("string").array() }, question: { remote_id: type("string").or(type("null")), title: type("string"), type: type("'MULTI_SELECT'") } }, "|", [{ answer: { checked: type("boolean").or(type("null")) }, question: { remote_id: type("string").or(type("null")), title: type("string"), type: type("'BOOLEAN'") } }, "|", [{ answer: { number: type("number").or(type("null")) }, question: { remote_id: type("string").or(type("null")), title: type("string"), type: type("'NUMBER'") } }, "|", [{ answer: { date: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$").test(s)).or(type("null")) }, question: { remote_id: type("string").or(type("null")), title: type("string"), type: type("'DATE'") } }, "|", { answer: { "raw?": type("null") }, question: { remote_id: type("string").or(type("null")), title: type("string"), type: type("'UNKNOWN'") } }]]]]]]).array().or(type("null")), custom_fields: type({ "[string]": type("unknown") }).or(type("null")), integration_fields: type({ id: type("string"), key: type("string"), type: type.enumerated("DEFAULT", "CUSTOM"), "value?": type("null"), label: type("string").or(type("null")) }).array(), remote_url: type("string.url").or(type("null")), changed_at: type("string.date"), remote_deleted_at: type("string.date").or(type("null")), remote_created_at: type("string.date").or(type("null")), remote_updated_at: type("string.date").or(type("null")), remote_data: type({ "[string]": type("unknown") }).or(type("null")), candidate: type({ id: type("string"), remote_id: type("string"), first_name: type("string").or(type("null")), last_name: type("string").or(type("null")), email_addresses: type({ "email_address?": type("string").narrow((s) => typeof s === "string" && new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$").test(s)).or(type("null")), type: type("string").or(type("null")) }).array().or(type("null")), phone_numbers: type({ phone_number: type("string"), "type?": type("string").or(type("null")) }).array().or(type("null")), social_media: type({ "link?": type("string").or(type("null")), "type?": type("string").or(type("null")), "username?": type("string").or(type("null")) }).array().or(type("null")), source: type("string").or(type("null")), remote_url: type("string.url").or(type("null")), tags: type({ id: type("string"), remote_id: type("string").or(type("null")), name: type("string").or(type("null")) }).array() }).or(type("null")), current_stage: type({ id: type("string"), remote_id: type("string").or(type("null")), name: type("string").or(type("null")), index: type("number.integer").or(type("null")) }).or(type("null")), job: type({ id: type("string"), remote_id: type("string"), name: type("string").or(type("null")) }).or(type("null")), interviews: type({ id: type("string"), remote_id: type("string").or(type("null")), title: type("string").or(type("null")), starting_at: type("string.date").or(type("null")), ending_at: type("string.date").or(type("null")), "location?": type({ "city?": type("string").or(type("null")), "country?": type("string").or(type("null")), "raw?": type("string").or(type("null")), "state?": type("string").or(type("null")), "street_1?": type("string").or(type("null")), "street_2?": type("string").or(type("null")), "zip_code?": type("string").or(type("null")) }).or(type("null")), canceled: type("boolean").or(type("null")) }).array(), offers: type({ id: type("string"), remote_id: type("string").or(type("null")), status: type.enumerated("ACCEPTED", "DECLINED", "SENT", "APPROVED", "DRAFT", "ABANDONED").or(type("null")) }).array() }).array() } },
  PutAtsApplicationsApplicationIdStageParameterApplicationId: type("string"),
  PutAtsApplicationsApplicationIdStagePositiveResponse: { status: type("'success'"), data: { "[string]": type("unknown") }, warnings: type({ message: type("string") }).array() },
  PutAtsApplicationsApplicationIdStageRequestBody: { stage_id: type("string"), "remote_fields?": type({ "workday?": { "Workflow_Step_ID?": type("string"), "Step_Type?": type.enumerated("Next_Step_Reference", "Disposition_Step_Reference") } }).and(type({ "greenhouse?": { "post_headers?": { "On-Behalf-Of?": type("string").or(type("null")) } }, "workable?": { "on_behalf_of_user_remote_id?": type("string") } })) },
  PostAtsApplicationsApplicationIdResultLinksParameterApplicationId: type("string"),
  PostAtsApplicationsApplicationIdResultLinksPositiveResponse: { status: type("'success'"), data: { "[string]": type("unknown") }, warnings: type({ message: type("string") }).array() },
  PostAtsApplicationsApplicationIdResultLinksRequestBody: { label: type("string"), url: type("string.url"), "details?": { custom_field_name_prefix: type("string"), attributes: type({ key: type("string"), value: type("string") }).array() }, "remote_fields?": type({ "icims?": { "assessment_package_id?": type("string") }, "oracle?": { "override_document_category?": type.enumerated("IRC_CANDIDATE_RESUME", "IRC_CANDIDATE_COVERLETTER", "MISC", "IRC_INTERNAL"), "multi_post_to_all_current_applications?": type("boolean") } }).and(type({ "greenhouse?": { "post_headers?": { "On-Behalf-Of?": type("string").or(type("null")) } }, "workable?": { "on_behalf_of_user_remote_id?": type("string") } })) },
  PostAtsApplicationsApplicationIdNotesParameterApplicationId: type("string"),
  PostAtsApplicationsApplicationIdNotesPositiveResponse: { status: type("'success'"), data: { "[string]": type("unknown") }, warnings: type({ message: type("string") }).array() },
  PostAtsApplicationsApplicationIdNotesRequestBody: { content: type("string"), content_type: type("'PLAIN_TEXT'"), "remote_fields?": type({ "teamtailor?": { "user_id?": type("string") }, "greenhouse?": { "visibility?": type.enumerated("admin_only", "private", "public") }, "recruitee?": { "visibility?": type("unknown"), "is_json?": type("boolean") }, "bullhorn?": { "action?": type("string") }, "lever?": { "perform_as?": type("string") } }).and(type({ "greenhouse?": { "post_headers?": { "On-Behalf-Of?": type("string").or(type("null")) } }, "workable?": { "on_behalf_of_user_remote_id?": type("string") } })) },
  GetAtsApplicationsApplicationIdAttachmentsParameterApplicationId: type("string"),
  GetAtsApplicationsApplicationIdAttachmentsPositiveResponse: { status: type("'success'"), data: { results: type({ type: type.enumerated("CV", "COVER_LETTER", "OTHER"), id: type("string"), remote_id: type("string"), data_url: type("string"), file_name: type("string"), content_type: type("string"), remote_created_at: type("string.date").or(type("null")), remote_updated_at: type("string.date").or(type("null")) }).array() }, warnings: type({ message: type("string") }).array() },
  PostAtsApplicationsApplicationIdAttachmentsParameterApplicationId: type("string"),
  PostAtsApplicationsApplicationIdAttachmentsPositiveResponse: { status: type("'success'"), data: { "[string]": type("unknown") }, warnings: type({ message: type("string") }).array() },
  PostAtsApplicationsApplicationIdAttachmentsRequestBody: { attachment: { name: type("string"), "content_type?": type("string").narrow((s) => typeof s === "string" && new RegExp("^[\\w.-]+\\/[\\w.-]+$").test(s)), "data_url?": type("string.url"), "data?": type("string"), type: type.enumerated("CV", "COVER_LETTER", "OTHER") }, "remote_fields?": type({ "oracle?": { "override_document_category?": type.enumerated("IRC_CANDIDATE_RESUME", "IRC_CANDIDATE_COVERLETTER", "MISC", "IRC_INTERNAL"), "multi_post_to_all_current_applications?": type("boolean") } }).and(type({ "greenhouse?": { "post_headers?": { "On-Behalf-Of?": type("string").or(type("null")) } }, "workable?": { "on_behalf_of_user_remote_id?": type("string") } })) },
  PostAtsApplicationsApplicationIdRejectParameterApplicationId: type("string"),
  PostAtsApplicationsApplicationIdRejectPositiveResponse: { status: type("'success'"), data: { "[string]": type("unknown") }, warnings: type({ message: type("string") }).array() },
  PostAtsApplicationsApplicationIdRejectRequestBody: { rejection_reason_id: type("string"), "note?": type("string"), "remote_fields?": type({ "greenhouse?": { "rejection_email?": { "[string]": type("unknown") } }, "teamtailor?": { "user_id?": type("string") } }).and(type({ "greenhouse?": { "post_headers?": { "On-Behalf-Of?": type("string").or(type("null")) } }, "workable?": { "on_behalf_of_user_remote_id?": type("string") } })) },
  PostAtsApplicationsApplicationIdInterviewsParameterApplicationId: type("string"),
  PostAtsApplicationsApplicationIdInterviewsPositiveResponse: { status: type("'success'"), data: { "[string]": type("unknown") } },
  PostAtsApplicationsApplicationIdInterviewsRequestBody: { title: type("string"), start_time: type("string"), end_time: type("string"), interviewer_user_ids: type("string").array(), organizer_user_id: type("string"), location: { type: type.enumerated("PHYSICAL", "VIRTUAL"), "address?": type("string") } },
  PatchAtsApplicationsApplicationIdInterviewsParameterApplicationId: type("string"),
  PatchAtsApplicationsApplicationIdInterviewsPositiveResponse: { status: type("'success'"), data: { "[string]": type("unknown") } },
  PatchAtsApplicationsApplicationIdInterviewsRequestBody: { interview_id: type("string"), title: type("string"), start_time: type("string"), end_time: type("string"), interviewer_user_ids: type("string").array(), organizer_user_id: type("string"), location: { type: type.enumerated("PHYSICAL", "VIRTUAL"), "address?": type("string") } },
  GetAtsCandidatesParameterCursor: type("string"),
  GetAtsCandidatesParameterPageSize: type("1 <= number.integer <= 250"),
  GetAtsCandidatesParameterUpdatedAfter: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)),
  GetAtsCandidatesParameterIncludeDeleted: type.enumerated("true", "false"),
  GetAtsCandidatesParameterIgnoreUnsupportedFilters: type.enumerated("true", "false"),
  GetAtsCandidatesParameterIds: type("string"),
  GetAtsCandidatesParameterRemoteIds: type("string"),
  GetAtsCandidatesParameterEmail: type("string.email"),
  GetAtsCandidatesParameterJobIds: type("string"),
  GetAtsCandidatesParameterFirstName: type("string"),
  GetAtsCandidatesParameterLastName: type("string"),
  GetAtsCandidatesPositiveResponse: { status: type("'success'"), data: { next: type("string").or(type("null")), results: type({ id: type("string"), remote_id: type("string"), first_name: type("string").or(type("null")), last_name: type("string").or(type("null")), company: type("string").or(type("null")), title: type("string").or(type("null")), confidential: type("boolean").or(type("null")), source: type("string").or(type("null")), phone_numbers: type({ phone_number: type("string"), "type?": type("string").or(type("null")) }).array().or(type("null")), email_addresses: type({ "email_address?": type("string").narrow((s) => typeof s === "string" && new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$").test(s)).or(type("null")), type: type("string").or(type("null")) }).array().or(type("null")), social_media: type({ "link?": type("string").or(type("null")), "type?": type("string").or(type("null")), "username?": type("string").or(type("null")) }).array().or(type("null")), "location?": type({ "city?": type("string").or(type("null")), "country?": type("string").or(type("null")), "raw?": type("string").or(type("null")), "state?": type("string").or(type("null")), "street_1?": type("string").or(type("null")), "street_2?": type("string").or(type("null")), "zip_code?": type("string").or(type("null")) }).or(type("null")), custom_fields: type({ "[string]": type("unknown") }).or(type("null")), integration_fields: type({ id: type("string"), key: type("string"), type: type.enumerated("DEFAULT", "CUSTOM"), "value?": type("null"), label: type("string").or(type("null")) }).array(), remote_url: type("string.url").or(type("null")), remote_created_at: type("string.date").or(type("null")), remote_updated_at: type("string.date").or(type("null")), remote_data: type({ "[string]": type("unknown") }).or(type("null")), changed_at: type("string.date"), remote_deleted_at: type("string.date").or(type("null")), applications: type({ id: type("string"), remote_id: type("string").or(type("null")), outcome: type.enumerated("PENDING", "HIRED", "DECLINED").or(type("null")), rejection_reason_name: type("string").or(type("null")), rejected_at: type("string.date").or(type("null")), remote_url: type("string.url").or(type("null")), changed_at: type("string.date"), remote_created_at: type("string.date").or(type("null")), remote_updated_at: type("string.date").or(type("null")), current_stage: type({ id: type("string"), name: type("string").or(type("null")), remote_id: type("string").or(type("null")), index: type("number.integer").or(type("null")) }).or(type("null")), job: type({ id: type("string"), name: type("string").or(type("null")), remote_id: type("string") }).or(type("null")) }).array(), tags: type({ id: type("string"), name: type("string").or(type("null")), remote_id: type("string").or(type("null")) }).array() }).array() } },
  PostAtsCandidatesPositiveResponse: { status: type("'success'"), data: { id: type("string"), remote_id: type("string"), first_name: type("string").or(type("null")), last_name: type("string").or(type("null")), company: type("string").or(type("null")), title: type("string").or(type("null")), confidential: type("boolean").or(type("null")), source: type("string").or(type("null")), phone_numbers: type({ phone_number: type("string"), "type?": type("string").or(type("null")) }).array().or(type("null")), email_addresses: type({ "email_address?": type("string").narrow((s) => typeof s === "string" && new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$").test(s)).or(type("null")), type: type("string").or(type("null")) }).array().or(type("null")), social_media: type({ "link?": type("string").or(type("null")), "type?": type("string").or(type("null")), "username?": type("string").or(type("null")) }).array().or(type("null")), "location?": type({ "city?": type("string").or(type("null")), "country?": type("string").or(type("null")), "raw?": type("string").or(type("null")), "state?": type("string").or(type("null")), "street_1?": type("string").or(type("null")), "street_2?": type("string").or(type("null")), "zip_code?": type("string").or(type("null")) }).or(type("null")), custom_fields: type({ "[string]": type("unknown") }).or(type("null")), integration_fields: type({ id: type("string"), key: type("string"), type: type.enumerated("DEFAULT", "CUSTOM"), "value?": type("null"), label: type("string").or(type("null")) }).array(), remote_url: type("string.url").or(type("null")), remote_created_at: type("string.date").or(type("null")), remote_updated_at: type("string.date").or(type("null")), remote_data: type({ "[string]": type("unknown") }).or(type("null")), changed_at: type("string.date"), remote_deleted_at: type("string.date").or(type("null")), applications: type({ id: type("string"), remote_id: type("string").or(type("null")), outcome: type.enumerated("PENDING", "HIRED", "DECLINED").or(type("null")), rejection_reason_name: type("string").or(type("null")), rejected_at: type("string.date").or(type("null")), remote_url: type("string.url").or(type("null")), changed_at: type("string.date"), remote_created_at: type("string.date").or(type("null")), remote_updated_at: type("string.date").or(type("null")), current_stage: type({ id: type("string"), name: type("string").or(type("null")), remote_id: type("string").or(type("null")), index: type("number.integer").or(type("null")) }).or(type("null")), job: type({ id: type("string"), name: type("string").or(type("null")), remote_id: type("string") }).or(type("null")) }).array(), tags: type({ id: type("string"), name: type("string").or(type("null")), remote_id: type("string").or(type("null")) }).array() }, warnings: type({ message: type("string") }).array() },
  PostAtsCandidatesRequestBody: { candidate: { first_name: type("string"), last_name: type("string"), email_address: type("string.email"), "additional_email_addresses?": type({ type: type.enumerated("PERSONAL", "WORK", "OTHER"), email_address: type("string.email") }).array(), "company?": type("string"), "title?": type("string"), "phone_number?": type("string"), "additional_phone_numbers?": type({ type: type.enumerated("PERSONAL", "WORK", "OTHER"), phone_number: type("string") }).array(), "location?": { "city?": type("string"), country: type("string").narrow((s) => typeof s === "string" && new RegExp("^[A-Z]{2}$").test(s)), "state?": type("string"), "street_1?": type("string"), "zip_code?": type("string") }, "gender?": type.enumerated("MALE", "FEMALE", "OTHER"), "availability_date?": type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)), "salary_expectations?": { period: type.enumerated("MONTH", "YEAR"), amount: type("number") }, social_links: type({ url: type("string.url") }).array() }, application: { job_id: type("string"), "stage_id?": type("string") }, "screening_question_answers?": type({ question_id: type("string"), answer: [type("string"), "|", [type("boolean"), "|", [type("number"), "|", [type("string").array(), "|", [type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)), "|", { name: type("string"), "content_type?": type("string").narrow((s) => typeof s === "string" && new RegExp("^[\\w.-]+\\/[\\w.-]+$").test(s)), "data_url?": type("string.url"), "data?": type("string") }]]]]] }).array(), attachments: type({ name: type("string"), "content_type?": type("string").narrow((s) => typeof s === "string" && new RegExp("^[\\w.-]+\\/[\\w.-]+$").test(s)), "data_url?": type("string.url"), "data?": type("string"), type: type.enumerated("CV", "COVER_LETTER", "OTHER") }).array(), "source?": { "name?": type("string"), "unified_key?": type("string"), "id?": type("string") }, "sourced_by?": { user_id: type("string") }, "gdpr_consent?": { "expires_at?": type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)), "given?": type("boolean") }, "remote_fields?": type({ "successfactors?": { "Candidate?": { "[string]": type("unknown") }, "JobApplication?": { "[string]": type("unknown") }, "copyJobApplicationAttachments?": type("boolean"), "update_existing_candidate?": type("boolean").or(type("null")) }, "personio?": { "application?": { "[string]": type("unknown") } }, "talentsoft?": { "applicant?": { "[string]": type("unknown") }, "application?": { "[string]": type("unknown") } }, "teamtailor?": { "candidate?": { "[string]": type("unknown") }, "application?": { "attributes?": { "[string]": type("unknown") } } }, "greenhouse?": { "candidate?": { "[string]": type("unknown") }, "application?": { "[string]": type("unknown") } }, "lever?": { "candidate?": { "[string]": type("unknown") } }, "workable?": { "candidate?": { "[string]": type("unknown") } }, "workday?": { "Candidate_Data?": { "Name_Detail_Data?": { "Middle_Name?": type("string"), "Social_Suffix_Reference?": { Predefined_Name_Component_ID: type("string") } }, "Language_Reference?": { WID: type("string") }, "Job_Application_Data?": { "Job_Applied_To_Data?": { "Global_Personal_Information_Data?": { "Date_of_Birth?": type("string") } }, "Resume_Data?": { "Education_Data?": type({ "School_Name?": type("string"), "First_Year_Attended?": type("number"), "Last_Year_Attended?": type("number"), "Field_of_Study_Reference?": { WID: type("string") }, "Degree_Reference?": { WID: type("string") }, "Grade_Average?": type("string") }).array(), "Skill_Data?": type({ "Skill_Name?": type("string") }).array(), "Language_Data?": type({ "Language_Reference?": { "WID?": type("string") }, "Language?": { "Native?": type("boolean"), Language_Ability: type({ "Language_Ability_Data?": { "Language_Proficiency_Reference?": { WID: type("string") }, "Language_Ability_Type_Reference?": { WID: type("string") } } }).array() } }).array(), "Experience_Data?": type({ Company_Name: type("string"), Title: type("string"), "Location?": type("string"), Start_Date: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)), "End_Date?": type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)), "Currently_Work_Here?": type("boolean"), "Description?": type("string") }).array() } }, "Contact_Data?": { "Location_Data?": { "Address_Line_1?": type("string"), "Address_Line_2?": type("string"), "Region_Subdivision_1?": type("string"), "Country_Region_Reference?": { Country_Region_ID: type("string") }, "Country_City_Reference?": { WID: type("string") } } }, "Worker_Reference?": { "WID?": type("string"), "Employee_ID?": type("string") } }, "Override_Source_Reference_WID?": type("string") }, "zohorecruit?": { "candidate?": { "[string]": type("unknown") } }, "bullhorn?": { "candidate?": { "[string]": type("unknown") }, "job_submission?": { "[string]": type("unknown") } }, "smartrecruiters?": { "candidate_with_questions?": { "[string]": type("unknown") }, "candidate_without_questions?": { "[string]": type("unknown") }, "candidate?": { "[string]": type("unknown") }, "consent_decisions?": { "SINGLE?": type("boolean"), "SMART_RECRUIT?": type("boolean"), "SMART_CRM?": type("boolean"), "SMART_MESSAGE_SMS?": type("boolean"), "SMART_MESSAGE_WHATSAPP?": type("boolean") } }, "talentadore?": { "applications?": { "[string]": type("unknown") } }, "guidecom?": { "candidate?": { "[string]": type("unknown") } }, "dvinci?": { "application?": { "[string]": type("unknown") }, "candidate?": { "[string]": type("unknown") } }, "hrworks?": { "jobApplication?": { "[string]": type("unknown") } }, "jobylon?": { "application?": { "message?": type("string") } }, "avature?": { "workflow?": { "step?": { id: type("number.integer") } } }, "recruitee?": { "candidate?": { "cover_letter_text?": type("string") } }, "rexx?": { "candidate?": { "[string]": type("unknown") } }, "umantis?": { "person?": { "[string]": type("unknown") } }, "piloga?": { "candidate?": { "street?": type("string") } }, "pinpoint?": { "candidate?": { "[string]": type("unknown") } }, "covetorest?": { "candidate?": { "mandant?": type("number") } } }).and(type({ "greenhouse?": { "post_headers?": { "On-Behalf-Of?": type("string").or(type("null")) } }, "workable?": { "on_behalf_of_user_remote_id?": type("string") } })) },
  GetAtsCandidatesCandidateIdAttachmentsParameterCandidateId: type("string"),
  GetAtsCandidatesCandidateIdAttachmentsPositiveResponse: { status: type("'success'"), data: { results: type({ id: type("string").narrow((s) => typeof s === "string" && new RegExp("^[1-9A-HJ-NP-Za-km-z]+$").test(s)), application_id: type("string").narrow((s) => typeof s === "string" && new RegExp("^[1-9A-HJ-NP-Za-km-z]+$").test(s)).or(type("null")), candidate_id: type("string").narrow((s) => typeof s === "string" && new RegExp("^[1-9A-HJ-NP-Za-km-z]+$").test(s)), type: type.enumerated("CV", "COVER_LETTER", "OTHER"), remote_id: type("string"), data_url: type("string"), file_name: type("string"), content_type: type("string"), remote_created_at: type("string.date").or(type("null")), remote_updated_at: type("string.date").or(type("null")) }).array() }, warnings: type({ message: type("string") }).array() },
  PostAtsCandidatesCandidateIdAttachmentsParameterCandidateId: type("string"),
  PostAtsCandidatesCandidateIdAttachmentsPositiveResponse: { status: type("'success'"), data: { "[string]": type("unknown") }, warnings: type({ message: type("string") }).array() },
  PostAtsCandidatesCandidateIdAttachmentsRequestBody: { attachment: { name: type("string"), "content_type?": type("string").narrow((s) => typeof s === "string" && new RegExp("^[\\w.-]+\\/[\\w.-]+$").test(s)), "data_url?": type("string.url"), "data?": type("string"), type: type.enumerated("CV", "COVER_LETTER", "OTHER") }, "remote_fields?": { "greenhouse?": { "post_headers?": { "On-Behalf-Of?": type("string").or(type("null")) } }, "workable?": { "on_behalf_of_user_remote_id?": type("string") } } },
  PostAtsCandidatesCandidateIdResultLinksParameterCandidateId: type("string"),
  PostAtsCandidatesCandidateIdResultLinksPositiveResponse: { status: type("'success'"), data: { "[string]": type("unknown") }, warnings: type({ message: type("string") }).array() },
  PostAtsCandidatesCandidateIdResultLinksRequestBody: { label: type("string"), url: type("string.url"), "details?": { custom_field_name_prefix: type("string"), attributes: type({ key: type("string"), value: type("string") }).array() }, "remote_fields?": type({ "icims?": { "assessment_package_id?": type("string") }, "oracle?": { "override_document_category?": type.enumerated("IRC_CANDIDATE_RESUME", "IRC_CANDIDATE_COVERLETTER", "MISC", "IRC_INTERNAL"), "multi_post_to_all_current_applications?": type("boolean") } }).and(type({ "greenhouse?": { "post_headers?": { "On-Behalf-Of?": type("string").or(type("null")) } }, "workable?": { "on_behalf_of_user_remote_id?": type("string") } })) },
  PostAtsCandidatesCandidateIdTagsParameterCandidateId: type("string"),
  PostAtsCandidatesCandidateIdTagsPositiveResponse: { status: type("'success'"), data: { "[string]": type("unknown") }, warnings: type({ message: type("string") }).array() },
  PostAtsCandidatesCandidateIdTagsRequestBody: { tag: { name: type("string >= 1") }, "remote_fields?": { "greenhouse?": { "post_headers?": { "On-Behalf-Of?": type("string").or(type("null")) } }, "workable?": { "on_behalf_of_user_remote_id?": type("string") } } },
  DeleteAtsCandidatesCandidateIdTagsParameterCandidateId: type("string"),
  DeleteAtsCandidatesCandidateIdTagsPositiveResponse: { status: type("'success'"), data: { "[string]": type("unknown") }, warnings: type({ message: type("string") }).array() },
  DeleteAtsCandidatesCandidateIdTagsRequestBody: { tag: { name: type("string") }, "remote_fields?": { "greenhouse?": { "post_headers?": { "On-Behalf-Of?": type("string").or(type("null")) } }, "workable?": { "on_behalf_of_user_remote_id?": type("string") } } },
  GetAtsTagsParameterCursor: type("string"),
  GetAtsTagsParameterPageSize: type("1 <= number.integer <= 250"),
  GetAtsTagsParameterUpdatedAfter: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)),
  GetAtsTagsParameterIncludeDeleted: type.enumerated("true", "false"),
  GetAtsTagsParameterIgnoreUnsupportedFilters: type.enumerated("true", "false"),
  GetAtsTagsParameterIds: type("string"),
  GetAtsTagsParameterRemoteIds: type("string"),
  GetAtsTagsPositiveResponse: { status: type("'success'"), data: { next: type("string").or(type("null")), results: type({ id: type("string"), remote_id: type("string").or(type("null")), name: type("string").or(type("null")), remote_data: type({ "[string]": type("unknown") }).or(type("null")), changed_at: type("string.date"), remote_deleted_at: type("string.date").or(type("null")) }).array() } },
  GetAtsApplicationStagesParameterCursor: type("string"),
  GetAtsApplicationStagesParameterPageSize: type("1 <= number.integer <= 250"),
  GetAtsApplicationStagesParameterUpdatedAfter: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)),
  GetAtsApplicationStagesParameterIncludeDeleted: type.enumerated("true", "false"),
  GetAtsApplicationStagesParameterIgnoreUnsupportedFilters: type.enumerated("true", "false"),
  GetAtsApplicationStagesParameterIds: type("string"),
  GetAtsApplicationStagesParameterRemoteIds: type("string"),
  GetAtsApplicationStagesPositiveResponse: { status: type("'success'"), data: { next: type("string").or(type("null")), results: type({ id: type("string"), remote_id: type("string").or(type("null")), name: type("string").or(type("null")), remote_data: type({ "[string]": type("unknown") }).or(type("null")), changed_at: type("string.date"), remote_deleted_at: type("string.date").or(type("null")) }).array() } },
  GetAtsJobsParameterCursor: type("string"),
  GetAtsJobsParameterPageSize: type("1 <= number.integer <= 250"),
  GetAtsJobsParameterUpdatedAfter: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)),
  GetAtsJobsParameterIncludeDeleted: type.enumerated("true", "false"),
  GetAtsJobsParameterIgnoreUnsupportedFilters: type.enumerated("true", "false"),
  GetAtsJobsParameterIds: type("string"),
  GetAtsJobsParameterRemoteIds: type("string"),
  GetAtsJobsParameterJobCodes: type("string"),
  GetAtsJobsParameterPostUrl: type("string"),
  GetAtsJobsParameterStatus: type.enumerated("OPEN", "CLOSED", "DRAFT", "ARCHIVED"),
  GetAtsJobsParameterStatuses: type("string"),
  GetAtsJobsParameterEmploymentTypes: type("string"),
  GetAtsJobsParameterVisibilities: type("string"),
  GetAtsJobsParameterRemoteCreatedAfter: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)),
  GetAtsJobsParameterNameContains: type("string"),
  GetAtsJobsPositiveResponse: { status: type("'success'"), data: { next: type("string").or(type("null")), results: type({ id: type("string"), remote_id: type("string"), name: type("string").or(type("null")), job_code: type("string").or(type("null")), description: type("string").or(type("null")), confidential: type("boolean").or(type("null")), weekly_hours: type("number").or(type("null")), "employment_type?": [type.enumerated("FULL_TIME", "PART_TIME", "CONTRACT", "SEASONAL", "INTERNSHIP"), "|", [type("string"), "|", type("null")]], "status?": [type.enumerated("OPEN", "CLOSED", "DRAFT", "ARCHIVED"), "|", [type("string"), "|", type("null")]], "visibility?": [type.enumerated("PUBLIC", "INTERNAL", "UNLISTED", "CONFIDENTIAL"), "|", [type("string"), "|", type("null")]], category: type("string").or(type("null")), department: type("string").or(type("null")), post_url: type("string").or(type("null")), experience_level: type("string").or(type("null")), "remote_work_status?": [type.enumerated("REMOTE", "HYBRID", "TEMPORARY", "ON_SITE"), "|", [type("string"), "|", type("null")]], salary_amount: type("number").or(type("null")), salary_amount_from: type("number").or(type("null")), salary_amount_to: type("number").or(type("null")), salary_currency: type("string").or(type("null")), "salary_period?": [type.enumerated("YEAR", "MONTH", "TWO_WEEKS", "WEEK", "DAY", "HOUR"), "|", [type("string"), "|", type("null")]], "location?": type({ "city?": type("string").or(type("null")), "country?": type("string").or(type("null")), "raw?": type("string").or(type("null")), "state?": type("string").or(type("null")), "street_1?": type("string").or(type("null")), "street_2?": type("string").or(type("null")), "zip_code?": type("string").or(type("null")) }).or(type("null")), custom_fields: type({ "[string]": type("unknown") }).or(type("null")), integration_fields: type({ id: type("string"), key: type("string"), type: type.enumerated("DEFAULT", "CUSTOM"), "value?": type("null"), label: type("string").or(type("null")) }).array(), remote_url: type("string.url").or(type("null")), opened_at: type("string.date").or(type("null")), closed_at: type("string.date").or(type("null")), remote_created_at: type("string.date").or(type("null")), remote_updated_at: type("string.date").or(type("null")), contact_id: type("string").or(type("null")), remote_data: type({ "[string]": type("unknown") }).or(type("null")), changed_at: type("string.date"), remote_deleted_at: type("string.date").or(type("null")), stages: type({ id: type("string"), remote_id: type("string").or(type("null")), name: type("string").or(type("null")), remote_data: type({ "[string]": type("unknown") }).or(type("null")), "index?": type("number.integer").or(type("null")) }).array(), screening_questions: type({ id: type("string"), remote_id: type("string").or(type("null")), title: type("string").or(type("null")), description: type("string").or(type("null")), "format?": [{ "display_type?": type.enumerated("SINGLE_LINE", "MULTI_LINE", "EMAIL", "URL").or(type("null")), "max_length?": type("number.integer").or(type("null")), type: type("'TEXT'") }, "|", [{ display_type: type.enumerated("SLIDER", "FIELD").or(type("null")), "max?": type("number").or(type("null")), "min?": type("number").or(type("null")), type: type("'NUMBER'") }, "|", [{ "accepted_mime_types?": type("string").array().or(type("null")), "max_file_size_bytes?": type("number.integer").or(type("null")), type: type("'FILE'") }, "|", [{ "display_type?": type.enumerated("DROPDOWN", "RADIO").or(type("null")), options: type({ id: type("string"), "remote_id?": type("string").or(type("null")), name: type("string") }).array(), type: type("'SINGLE_SELECT'") }, "|", [{ type: type("'BOOLEAN'") }, "|", [{ type: type("'DATE'") }, "|", [{ options: type({ id: type("string"), "remote_id?": type("string").or(type("null")), name: type("string") }).array(), type: type("'MULTI_SELECT'") }, "|", [{ type: type("'INFORMATION'") }, "|", [{ "raw_question?": type("unknown"), type: type("'UNKNOWN'") }, "|", type("null")]]]]]]]]], category: type.enumerated("EEO", "DEMOGRAPHIC").or(type("null")), "index?": type("number.integer").or(type("null")), required: type("boolean").or(type("null")), "precondition_question_id?": type("string").narrow((s) => typeof s === "string" && new RegExp("^[1-9A-HJ-NP-Za-km-z]+$").test(s)).or(type("null")), precondition_options: [type("string").narrow((s) => typeof s === "string" && new RegExp("^[1-9A-HJ-NP-Za-km-z]+$").test(s)).array(), "|", [type("boolean").array(), "|", type("null")]] }).array(), job_postings: type({ id: type("string"), remote_id: type("string").or(type("null")), title: type("string").or(type("null")), description_html: type("string").or(type("null")), status: type.enumerated("ACTIVE", "INACTIVE", "DRAFT").or(type("null")), visibility: type.enumerated("PUBLIC", "INTERNAL", "UNLISTED").or(type("null")), url: type("string").or(type("null")), remote_data: type({ "[string]": type("unknown") }).or(type("null")) }).array(), hiring_team: type({ id: type("string"), remote_id: type("string").or(type("null")), first_name: type("string").or(type("null")), last_name: type("string").or(type("null")), "email?": type("string").narrow((s) => typeof s === "string" && new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$").test(s)).or(type("null")), hiring_team_roles: type.enumerated("RECRUITER", "HIRING_MANAGER", "COORDINATOR", "SOURCER", "INTERVIEWER").array(), job_roles: type({ remote_id: type("string").or(type("null")), remote_label: type("string").or(type("null")), scope: type.enumerated("SYSTEM", "JOB").or(type("null")), unified_type: type.enumerated("HIRING_MANAGER", "RECRUITER", "COORDINATOR", "SOURCER", "INTERVIEWER", "ADMIN").or(type("null")) }).array() }).array() }).array() } },
  PostAtsJobsJobIdApplicationsParameterJobId: type("string"),
  PostAtsJobsJobIdApplicationsPositiveResponse: { status: type("'success'"), data: { id: type("string"), remote_id: type("string").or(type("null")), outcome: type.enumerated("PENDING", "HIRED", "DECLINED").or(type("null")), rejection_reason_name: type("string").or(type("null")), rejected_at: type("string.date").or(type("null")), current_stage_id: type("string").or(type("null")), job_id: type("string").or(type("null")), candidate_id: type("string").or(type("null")), screening_question_answers: type([{ answer: { content: type("string").or(type("null")) }, question: { remote_id: type("string").or(type("null")), title: type("string"), type: type("'TEXT'") } }, "|", [{ answer: { choice: type("string").or(type("null")) }, question: { remote_id: type("string").or(type("null")), title: type("string"), type: type("'SINGLE_SELECT'") } }, "|", [{ answer: { choices: type("string").array() }, question: { remote_id: type("string").or(type("null")), title: type("string"), type: type("'MULTI_SELECT'") } }, "|", [{ answer: { checked: type("boolean").or(type("null")) }, question: { remote_id: type("string").or(type("null")), title: type("string"), type: type("'BOOLEAN'") } }, "|", [{ answer: { number: type("number").or(type("null")) }, question: { remote_id: type("string").or(type("null")), title: type("string"), type: type("'NUMBER'") } }, "|", [{ answer: { date: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$").test(s)).or(type("null")) }, question: { remote_id: type("string").or(type("null")), title: type("string"), type: type("'DATE'") } }, "|", { answer: { "raw?": type("null") }, question: { remote_id: type("string").or(type("null")), title: type("string"), type: type("'UNKNOWN'") } }]]]]]]).array().or(type("null")), custom_fields: type({ "[string]": type("unknown") }).or(type("null")), integration_fields: type({ id: type("string"), key: type("string"), type: type.enumerated("DEFAULT", "CUSTOM"), "value?": type("null"), label: type("string").or(type("null")) }).array(), remote_url: type("string.url").or(type("null")), changed_at: type("string.date"), remote_deleted_at: type("string.date").or(type("null")), remote_created_at: type("string.date").or(type("null")), remote_updated_at: type("string.date").or(type("null")), remote_data: type({ "[string]": type("unknown") }).or(type("null")), current_stage: type({ id: type("string"), name: type("string").or(type("null")), remote_id: type("string").or(type("null")), index: type("number.integer").or(type("null")) }).or(type("null")), job: type({ id: type("string"), name: type("string").or(type("null")), remote_id: type("string") }).or(type("null")), candidate: type({ id: type("string"), remote_id: type("string"), first_name: type("string").or(type("null")), last_name: type("string").or(type("null")), company: type("string").or(type("null")), title: type("string").or(type("null")), confidential: type("boolean").or(type("null")), source: type("string").or(type("null")), phone_numbers: type({ phone_number: type("string"), "type?": type("string").or(type("null")) }).array().or(type("null")), email_addresses: type({ "email_address?": type("string").narrow((s) => typeof s === "string" && new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$").test(s)).or(type("null")), type: type("string").or(type("null")) }).array().or(type("null")), social_media: type({ "link?": type("string").or(type("null")), "type?": type("string").or(type("null")), "username?": type("string").or(type("null")) }).array().or(type("null")), "location?": type({ "city?": type("string").or(type("null")), "country?": type("string").or(type("null")), "raw?": type("string").or(type("null")), "state?": type("string").or(type("null")), "street_1?": type("string").or(type("null")), "street_2?": type("string").or(type("null")), "zip_code?": type("string").or(type("null")) }).or(type("null")), custom_fields: type({ "[string]": type("unknown") }).or(type("null")), integration_fields: type({ id: type("string"), key: type("string"), type: type.enumerated("DEFAULT", "CUSTOM"), "value?": type("null"), label: type("string").or(type("null")) }).array(), remote_url: type("string.url").or(type("null")), remote_created_at: type("string.date").or(type("null")), remote_updated_at: type("string.date").or(type("null")), remote_data: type({ "[string]": type("unknown") }).or(type("null")), changed_at: type("string.date"), remote_deleted_at: type("string.date").or(type("null")), tags: type({ id: type("string"), name: type("string").or(type("null")), remote_id: type("string").or(type("null")) }).array() }).or(type("null")) }, warnings: type({ message: type("string") }).array() },
  PostAtsJobsJobIdApplicationsRequestBody: { "stage_id?": type("string"), candidate: { first_name: type("string"), last_name: type("string"), email_address: type("string.email"), "additional_email_addresses?": type({ type: type.enumerated("PERSONAL", "WORK", "OTHER"), email_address: type("string.email") }).array(), "company?": type("string"), "title?": type("string"), "phone_number?": type("string"), "additional_phone_numbers?": type({ type: type.enumerated("PERSONAL", "WORK", "OTHER"), phone_number: type("string") }).array(), "location?": { "city?": type("string"), country: type("string").narrow((s) => typeof s === "string" && new RegExp("^[A-Z]{2}$").test(s)), "state?": type("string"), "street_1?": type("string"), "zip_code?": type("string") }, "gender?": type.enumerated("MALE", "FEMALE", "OTHER"), "availability_date?": type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)), "salary_expectations?": { period: type.enumerated("MONTH", "YEAR"), amount: type("number") }, social_links: type({ url: type("string.url") }).array() }, attachments: type({ name: type("string"), "content_type?": type("string").narrow((s) => typeof s === "string" && new RegExp("^[\\w.-]+\\/[\\w.-]+$").test(s)), "data_url?": type("string.url"), "data?": type("string"), type: type.enumerated("CV", "COVER_LETTER", "OTHER") }).array(), "source?": { "name?": type("string"), "unified_key?": type("string"), "id?": type("string") }, "sourced_by?": { user_id: type("string") }, "gdpr_consent?": { "expires_at?": type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)), "given?": type("boolean") }, "remote_fields?": type({ "successfactors?": { "Candidate?": { "[string]": type("unknown") }, "JobApplication?": { "[string]": type("unknown") }, "copyJobApplicationAttachments?": type("boolean"), "update_existing_candidate?": type("boolean").or(type("null")) }, "personio?": { "application?": { "[string]": type("unknown") } }, "talentsoft?": { "applicant?": { "[string]": type("unknown") }, "application?": { "[string]": type("unknown") } }, "teamtailor?": { "candidate?": { "[string]": type("unknown") }, "application?": { "attributes?": { "[string]": type("unknown") } } }, "greenhouse?": { "candidate?": { "[string]": type("unknown") }, "application?": { "[string]": type("unknown") } }, "lever?": { "candidate?": { "[string]": type("unknown") } }, "workable?": { "candidate?": { "[string]": type("unknown") } }, "workday?": { "Candidate_Data?": { "Name_Detail_Data?": { "Middle_Name?": type("string"), "Social_Suffix_Reference?": { Predefined_Name_Component_ID: type("string") } }, "Language_Reference?": { WID: type("string") }, "Job_Application_Data?": { "Job_Applied_To_Data?": { "Global_Personal_Information_Data?": { "Date_of_Birth?": type("string") } }, "Resume_Data?": { "Education_Data?": type({ "School_Name?": type("string"), "First_Year_Attended?": type("number"), "Last_Year_Attended?": type("number"), "Field_of_Study_Reference?": { WID: type("string") }, "Degree_Reference?": { WID: type("string") }, "Grade_Average?": type("string") }).array(), "Skill_Data?": type({ "Skill_Name?": type("string") }).array(), "Language_Data?": type({ "Language_Reference?": { "WID?": type("string") }, "Language?": { "Native?": type("boolean"), Language_Ability: type({ "Language_Ability_Data?": { "Language_Proficiency_Reference?": { WID: type("string") }, "Language_Ability_Type_Reference?": { WID: type("string") } } }).array() } }).array(), "Experience_Data?": type({ Company_Name: type("string"), Title: type("string"), "Location?": type("string"), Start_Date: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)), "End_Date?": type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)), "Currently_Work_Here?": type("boolean"), "Description?": type("string") }).array() } }, "Contact_Data?": { "Location_Data?": { "Address_Line_1?": type("string"), "Address_Line_2?": type("string"), "Region_Subdivision_1?": type("string"), "Country_Region_Reference?": { Country_Region_ID: type("string") }, "Country_City_Reference?": { WID: type("string") } } }, "Worker_Reference?": { "WID?": type("string"), "Employee_ID?": type("string") } }, "Override_Source_Reference_WID?": type("string") }, "zohorecruit?": { "candidate?": { "[string]": type("unknown") } }, "bullhorn?": { "candidate?": { "[string]": type("unknown") }, "job_submission?": { "[string]": type("unknown") } }, "smartrecruiters?": { "candidate_with_questions?": { "[string]": type("unknown") }, "candidate_without_questions?": { "[string]": type("unknown") }, "candidate?": { "[string]": type("unknown") }, "consent_decisions?": { "SINGLE?": type("boolean"), "SMART_RECRUIT?": type("boolean"), "SMART_CRM?": type("boolean"), "SMART_MESSAGE_SMS?": type("boolean"), "SMART_MESSAGE_WHATSAPP?": type("boolean") } }, "talentadore?": { "applications?": { "[string]": type("unknown") } }, "guidecom?": { "candidate?": { "[string]": type("unknown") } }, "dvinci?": { "application?": { "[string]": type("unknown") }, "candidate?": { "[string]": type("unknown") } }, "hrworks?": { "jobApplication?": { "[string]": type("unknown") } }, "jobylon?": { "application?": { "message?": type("string") } }, "avature?": { "workflow?": { "step?": { id: type("number.integer") } } }, "recruitee?": { "candidate?": { "cover_letter_text?": type("string") } }, "rexx?": { "candidate?": { "[string]": type("unknown") } }, "umantis?": { "person?": { "[string]": type("unknown") } }, "piloga?": { "candidate?": { "street?": type("string") } }, "pinpoint?": { "candidate?": { "[string]": type("unknown") } }, "covetorest?": { "candidate?": { "mandant?": type("number") } } }).and(type({ "greenhouse?": { "post_headers?": { "On-Behalf-Of?": type("string").or(type("null")) } }, "workable?": { "on_behalf_of_user_remote_id?": type("string") } })), "screening_question_answers?": type({ question_id: type("string"), answer: [type("string"), "|", [type("boolean"), "|", [type("number"), "|", [type("string").array(), "|", [type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)), "|", { name: type("string"), "content_type?": type("string").narrow((s) => typeof s === "string" && new RegExp("^[\\w.-]+\\/[\\w.-]+$").test(s)), "data_url?": type("string.url"), "data?": type("string") }]]]]] }).array() },
  GetAtsUsersParameterCursor: type("string"),
  GetAtsUsersParameterPageSize: type("1 <= number.integer <= 250"),
  GetAtsUsersParameterUpdatedAfter: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)),
  GetAtsUsersParameterIncludeDeleted: type.enumerated("true", "false"),
  GetAtsUsersParameterIgnoreUnsupportedFilters: type.enumerated("true", "false"),
  GetAtsUsersParameterIds: type("string"),
  GetAtsUsersParameterRemoteIds: type("string"),
  GetAtsUsersParameterEmails: type("string"),
  GetAtsUsersPositiveResponse: { status: type("'success'"), data: { next: type("string").or(type("null")), results: type({ id: type("string"), remote_id: type("string").or(type("null")), first_name: type("string").or(type("null")), last_name: type("string").or(type("null")), "email?": type("string").narrow((s) => typeof s === "string" && new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$").test(s)).or(type("null")), status: type.enumerated("ACTIVE", "INACTIVE").or(type("null")), remote_data: type({ "[string]": type("unknown") }).or(type("null")), changed_at: type("string.date"), remote_deleted_at: type("string.date").or(type("null")), system_roles: type({ remote_id: type("string").or(type("null")), remote_label: type("string").or(type("null")), scope: type.enumerated("SYSTEM", "JOB").or(type("null")), unified_type: type.enumerated("HIRING_MANAGER", "RECRUITER", "COORDINATOR", "SOURCER", "INTERVIEWER", "ADMIN").or(type("null")) }).array() }).array() } },
  GetAtsRolesParameterCursor: type("string"),
  GetAtsRolesParameterPageSize: type("1 <= number.integer <= 250"),
  GetAtsRolesParameterUpdatedAfter: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)),
  GetAtsRolesParameterIncludeDeleted: type.enumerated("true", "false"),
  GetAtsRolesParameterIgnoreUnsupportedFilters: type.enumerated("true", "false"),
  GetAtsRolesParameterIds: type("string"),
  GetAtsRolesParameterRemoteIds: type("string"),
  GetAtsRolesParameterScopes: type("string"),
  GetAtsRolesPositiveResponse: { status: type("'success'"), data: { next: type("string").or(type("null")), results: type({ id: type("string"), remote_id: type("string").or(type("null")), remote_label: type("string").or(type("null")), scope: type.enumerated("SYSTEM", "JOB").or(type("null")), unified_type: type.enumerated("HIRING_MANAGER", "RECRUITER", "COORDINATOR", "SOURCER", "INTERVIEWER", "ADMIN").or(type("null")), remote_data: type({ "[string]": type("unknown") }).or(type("null")), changed_at: type("string.date"), remote_deleted_at: type("string.date").or(type("null")) }).array() } },
  GetAtsOffersParameterCursor: type("string"),
  GetAtsOffersParameterPageSize: type("1 <= number.integer <= 250"),
  GetAtsOffersParameterUpdatedAfter: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)),
  GetAtsOffersParameterIncludeDeleted: type.enumerated("true", "false"),
  GetAtsOffersParameterIgnoreUnsupportedFilters: type.enumerated("true", "false"),
  GetAtsOffersParameterIds: type("string"),
  GetAtsOffersParameterRemoteIds: type("string"),
  GetAtsOffersPositiveResponse: { status: type("'success'"), data: { next: type("string").or(type("null")), results: type({ id: type("string"), remote_id: type("string").or(type("null")), status: type.enumerated("ACCEPTED", "DECLINED", "SENT", "APPROVED", "DRAFT", "ABANDONED").or(type("null")), employment_start_date: type("string.date").or(type("null")), application_id: type("string").or(type("null")), custom_fields: type({ "[string]": type("unknown") }).or(type("null")), integration_fields: type({ id: type("string"), key: type("string"), type: type.enumerated("DEFAULT", "CUSTOM"), "value?": type("null"), label: type("string").or(type("null")) }).array(), changed_at: type("string.date"), remote_deleted_at: type("string.date").or(type("null")), remote_created_at: type("string.date").or(type("null")), remote_updated_at: type("string.date").or(type("null")), remote_data: type({ "[string]": type("unknown") }).or(type("null")), application: type({ candidate: type({ id: type("string"), remote_id: type("string"), first_name: type("string").or(type("null")), last_name: type("string").or(type("null")), email_addresses: type({ "email_address?": type("string").narrow((s) => typeof s === "string" && new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$").test(s)).or(type("null")), type: type("string").or(type("null")) }).array().or(type("null")) }).or(type("null")), job: type({ id: type("string"), remote_id: type("string"), name: type("string").or(type("null")) }).or(type("null")) }).or(type("null")) }).array() } },
  GetAtsRejectionReasonsParameterCursor: type("string"),
  GetAtsRejectionReasonsParameterPageSize: type("1 <= number.integer <= 250"),
  GetAtsRejectionReasonsParameterUpdatedAfter: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)),
  GetAtsRejectionReasonsParameterIncludeDeleted: type.enumerated("true", "false"),
  GetAtsRejectionReasonsParameterIgnoreUnsupportedFilters: type.enumerated("true", "false"),
  GetAtsRejectionReasonsParameterIds: type("string"),
  GetAtsRejectionReasonsParameterRemoteIds: type("string"),
  GetAtsRejectionReasonsPositiveResponse: { status: type("'success'"), data: { next: type("string").or(type("null")), results: type({ id: type("string"), remote_id: type("string"), name: type("string").or(type("null")), changed_at: type("string.date"), remote_deleted_at: type("string.date").or(type("null")), remote_data: type({ "[string]": type("unknown") }).or(type("null")) }).array() } },
  GetAtsInterviewsParameterCursor: type("string"),
  GetAtsInterviewsParameterPageSize: type("1 <= number.integer <= 250"),
  GetAtsInterviewsParameterUpdatedAfter: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)),
  GetAtsInterviewsParameterIncludeDeleted: type.enumerated("true", "false"),
  GetAtsInterviewsParameterIgnoreUnsupportedFilters: type.enumerated("true", "false"),
  GetAtsInterviewsParameterIds: type("string"),
  GetAtsInterviewsParameterRemoteIds: type("string"),
  GetAtsInterviewsParameterJobIds: type("string"),
  GetAtsInterviewsPositiveResponse: { status: type("'success'"), data: { next: type("string").or(type("null")), results: type({ id: type("string"), remote_id: type("string").or(type("null")), title: type("string").or(type("null")), starting_at: type("string.date").or(type("null")), ending_at: type("string.date").or(type("null")), "location?": type({ "city?": type("string").or(type("null")), "country?": type("string").or(type("null")), "raw?": type("string").or(type("null")), "state?": type("string").or(type("null")), "street_1?": type("string").or(type("null")), "street_2?": type("string").or(type("null")), "zip_code?": type("string").or(type("null")) }).or(type("null")), video_conferencing_url: type("string").or(type("null")), application_id: type("string").or(type("null")), stage_id: type("string").or(type("null")), canceled: type("boolean").or(type("null")), remote_created_at: type("string.date").or(type("null")), remote_updated_at: type("string.date").or(type("null")), remote_data: type({ "[string]": type("unknown") }).or(type("null")), changed_at: type("string.date"), remote_deleted_at: type("string.date").or(type("null")), users: type({ id: type("string"), remote_id: type("string").or(type("null")), first_name: type("string").or(type("null")), last_name: type("string").or(type("null")), "email?": type("string").narrow((s) => typeof s === "string" && new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$").test(s)).or(type("null")) }).array(), application: type({ id: type("string"), remote_id: type("string").or(type("null")), outcome: type.enumerated("PENDING", "HIRED", "DECLINED").or(type("null")), rejection_reason_name: type("string").or(type("null")), candidate: type({ id: type("string"), remote_id: type("string"), first_name: type("string").or(type("null")), last_name: type("string").or(type("null")), email_addresses: type({ "email_address?": type("string").narrow((s) => typeof s === "string" && new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$").test(s)).or(type("null")), type: type("string").or(type("null")) }).array().or(type("null")) }).or(type("null")), job: type({ id: type("string"), remote_id: type("string"), name: type("string").or(type("null")) }).or(type("null")) }).or(type("null")) }).array() } },
  GetAtsActionsAtsCreateCandidatePositiveResponse: { status: type("'success'"), data: { "attachment_restrictions?": type({ total_size_bytes: type("number").or(type("null")), types: { CV: [{ is_supported: type("true"), min_amount: type("number").or(type("null")), max_amount: type("number").or(type("null")), max_file_size_bytes: type("number").or(type("null")), accepted_mime_types: type("string").array().or(type("null")) }, "|", { is_supported: type("false") }], COVER_LETTER: [{ is_supported: type("true"), min_amount: type("number").or(type("null")), max_amount: type("number").or(type("null")), max_file_size_bytes: type("number").or(type("null")), accepted_mime_types: type("string").array().or(type("null")) }, "|", { is_supported: type("false") }], OTHER: [{ is_supported: type("true"), min_amount: type("number").or(type("null")), max_amount: type("number").or(type("null")), max_file_size_bytes: type("number").or(type("null")), accepted_mime_types: type("string").array().or(type("null")) }, "|", { is_supported: type("false") }] } }).or(type("null")) } },
  GetAtsActionsAtsCreateApplicationPositiveResponse: { status: type("'success'"), data: { "attachment_restrictions?": type({ total_size_bytes: type("number").or(type("null")), types: { CV: [{ is_supported: type("true"), min_amount: type("number").or(type("null")), max_amount: type("number").or(type("null")), max_file_size_bytes: type("number").or(type("null")), accepted_mime_types: type("string").array().or(type("null")) }, "|", { is_supported: type("false") }], COVER_LETTER: [{ is_supported: type("true"), min_amount: type("number").or(type("null")), max_amount: type("number").or(type("null")), max_file_size_bytes: type("number").or(type("null")), accepted_mime_types: type("string").array().or(type("null")) }, "|", { is_supported: type("false") }], OTHER: [{ is_supported: type("true"), min_amount: type("number").or(type("null")), max_amount: type("number").or(type("null")), max_file_size_bytes: type("number").or(type("null")), accepted_mime_types: type("string").array().or(type("null")) }, "|", { is_supported: type("false") }] } }).or(type("null")) } },
  GetAtsActionsAtsAddApplicationAttachmentPositiveResponse: { status: type("'success'"), data: { "attachment_restrictions?": type({ types: { CV: [{ is_supported: type("true"), max_file_size_bytes: type("number").or(type("null")), accepted_mime_types: type("string").array().or(type("null")) }, "|", { is_supported: type("false") }], COVER_LETTER: [{ is_supported: type("true"), max_file_size_bytes: type("number").or(type("null")), accepted_mime_types: type("string").array().or(type("null")) }, "|", { is_supported: type("false") }], OTHER: [{ is_supported: type("true"), max_file_size_bytes: type("number").or(type("null")), accepted_mime_types: type("string").array().or(type("null")) }, "|", { is_supported: type("false") }] } }).or(type("null")) } },
  GetAtsActionsAtsAddCandidateAttachmentPositiveResponse: { status: type("'success'"), data: { "attachment_restrictions?": type({ types: { CV: [{ is_supported: type("true"), max_file_size_bytes: type("number").or(type("null")), accepted_mime_types: type("string").array().or(type("null")) }, "|", { is_supported: type("false") }], COVER_LETTER: [{ is_supported: type("true"), max_file_size_bytes: type("number").or(type("null")), accepted_mime_types: type("string").array().or(type("null")) }, "|", { is_supported: type("false") }], OTHER: [{ is_supported: type("true"), max_file_size_bytes: type("number").or(type("null")), accepted_mime_types: type("string").array().or(type("null")) }, "|", { is_supported: type("false") }] } }).or(type("null")) } },
  PostAtsImportTrackedApplicationPositiveResponse: { status: type("'success'"), data: { id: type("string").narrow((s) => typeof s === "string" && new RegExp("^[1-9A-HJ-NP-Za-km-z]+$").test(s)), tracked_at: type("string.date").or(type("null")), imported_id: { "erecruiter?": [{ id_type: type("'application_and_job_remote_ids'"), application_remote_id: type("string"), job_remote_id: type("string") }, "|", { id_type: type("'application_and_candidate_remote_ids'"), candidate_remote_id: type("string"), application_remote_id: type("string") }], "successfactors?": { id_type: type("'application_remote_id'"), application_remote_id: type("string") }, "recruitee?": { id_type: type("'placement_id'"), placement_id: type("string") }, "greenhouse?": { id_type: type("'application_id'"), application_id: type("string") }, "onlyfy?": { id_type: type("'application_id'"), application_id: type("string") }, "smartrecruiters?": { id_type: type("'candidate_and_job_remote_ids'"), candidate_remote_id: type("string"), job_remote_id: type("string") } } }, warnings: type({ message: type("string") }).array() },
  PostAtsImportTrackedApplicationRequestBody: { "erecruiter?": [{ id_type: type("'application_and_job_remote_ids'"), application_remote_id: type("string"), job_remote_id: type("string") }, "|", { id_type: type("'application_and_candidate_remote_ids'"), candidate_remote_id: type("string"), application_remote_id: type("string") }], "successfactors?": { id_type: type("'application_remote_id'"), application_remote_id: type("string") }, "recruitee?": { id_type: type("'placement_id'"), placement_id: type("string") }, "greenhouse?": { id_type: type("'application_id'"), application_id: type("string") }, "onlyfy?": { id_type: type("'application_id'"), application_id: type("string") }, "smartrecruiters?": { id_type: type("'candidate_and_job_remote_ids'"), candidate_remote_id: type("string"), job_remote_id: type("string") }, tracked_at: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)).or(type("null")) },
  PostAtsCustomAvionteSyncedJobsPositiveResponse: { status: type("'success'"), data: { "[string]": type("unknown") } },
  PostAtsCustomAvionteSyncedJobsRequestBody: { job_remote_id: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d+$").test(s)) },
  DeleteAtsCustomAvionteSyncedJobsJobRemoteIdParameterJobRemoteId: type("string"),
  DeleteAtsCustomAvionteSyncedJobsJobRemoteIdPositiveResponse: { status: type("'success'"), data: { "[string]": type("unknown") } },
  DeleteAtsCustomAvionteSyncedJobsJobRemoteIdRequestBody: {  },
  GetAssessmentPackagesPositiveResponse: { status: type("'success'"), data: { packages: type({ id: type("string"), name: type("string"), description: type("string"), updated_at: type("string.date").or(type("null")), type: type.enumerated("BEHAVIORAL", "VIDEO_INTERVIEW", "SKILLS_TEST", "BACKGROUND_CHECK", "REFERENCE_CHECK").or(type("null")) }).array() } },
  PutAssessmentPackagesPositiveResponse: { status: type("'success'"), data: { "[string]": type("unknown") }, warnings: type({ message: type("string") }).array() },
  PutAssessmentPackagesRequestBody: { packages: type({ id: type("string"), type: type.enumerated("BEHAVIORAL", "VIDEO_INTERVIEW", "SKILLS_TEST", "BACKGROUND_CHECK", "REFERENCE_CHECK"), name: type("string"), description: type("string") }).array() },
  GetAssessmentOrdersParameterCursor: type("string"),
  GetAssessmentOrdersParameterPageSize: type("1 <= number.integer <= 250"),
  GetAssessmentOrdersParameterIds: type("string"),
  GetAssessmentOrdersParameterStatuses: type("string"),
  GetAssessmentOrdersParameterCreatedAfter: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)),
  GetAssessmentOrdersPositiveResponse: { status: type("'success'"), data: { next: type("string").or(type("null")), results: type({ id: type("string"), package_id: type("string"), status: type.enumerated("OPEN", "COMPLETED", "CANCELLED", "REJECTED"), candidate: { remote_id: type("string").or(type("null")), email: type("string.email"), first_name: type("string").or(type("null")), last_name: type("string").or(type("null")), phone: type("string").or(type("null")) }, application: { remote_id: type("string").or(type("null")) }, job: { remote_id: type("string").or(type("null")), name: type("string").or(type("null")), job_code: type("string").or(type("null")), description: type("string").or(type("null")), location: type({ "street_1?": type("string").or(type("null")), "street_2?": type("string").or(type("null")), "city?": type("string").or(type("null")), "state?": type("string").or(type("null")), "zip_code?": type("string").or(type("null")), "country?": type("string").or(type("null")), "raw?": type("string").or(type("null")) }).or(type("null")), hiring_team: type({ remote_id: type("string").or(type("null")), email: type("string").or(type("null")), first_name: type("string").or(type("null")), last_name: type("string").or(type("null")), hiring_team_roles: type.enumerated("RECRUITER", "HIRING_MANAGER").array() }).array() } }).array() } },
  GetAssessmentOrdersOpenParameterCursor: type("string"),
  GetAssessmentOrdersOpenParameterPageSize: type("1 <= number.integer <= 250"),
  GetAssessmentOrdersOpenPositiveResponse: { status: type("'success'"), data: { next: type("string").or(type("null")), results: type({ id: type("string"), package_id: type("string"), candidate: { remote_id: type("string").or(type("null")), email: type("string.email"), first_name: type("string").or(type("null")), last_name: type("string").or(type("null")), phone: type("string").or(type("null")) }, application: { remote_id: type("string").or(type("null")) }, job: { remote_id: type("string").or(type("null")), name: type("string").or(type("null")), job_code: type("string").or(type("null")), description: type("string").or(type("null")), location: type({ "street_1?": type("string").or(type("null")), "street_2?": type("string").or(type("null")), "city?": type("string").or(type("null")), "state?": type("string").or(type("null")), "zip_code?": type("string").or(type("null")), "country?": type("string").or(type("null")), "raw?": type("string").or(type("null")) }).or(type("null")), hiring_team: type({ remote_id: type("string").or(type("null")), email: type("string").or(type("null")), first_name: type("string").or(type("null")), last_name: type("string").or(type("null")), hiring_team_roles: type.enumerated("RECRUITER", "HIRING_MANAGER").array() }).array() } }).array() } },
  PutAssessmentOrdersAssessmentOrderIdResultParameterAssessmentOrderId: type("string"),
  PutAssessmentOrdersAssessmentOrderIdResultPositiveResponse: { status: type("'success'"), data: { "[string]": type("unknown") }, warnings: type({ message: type("string") }).array() },
  PutAssessmentOrdersAssessmentOrderIdResultRequestBody: { status: type.enumerated("COMPLETED", "CANCELLED", "OPEN"), result_url: type("string.url"), "completed_at?": type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)), "score?": type("number"), "max_score?": type("number"), attributes: type([{ type: type("'TEXT'"), label: type("string"), value: type("string") }, "|", { type: type("'SUB_RESULT'"), id: type("string"), label: type("string"), score: { value: type("number"), max: type("number >= 1") }, status: type.enumerated("COMPLETED", "CANCELLED") }]).array(), attachments: type({ name: type("string"), "content_type?": type("string").narrow((s) => typeof s === "string" && new RegExp("^[\\w.-]+\\/[\\w.-]+$").test(s)), "data_url?": type("string.url"), "data?": type("string") }).array(), "remote_fields?": { "smartrecruiters?": { "scoreLabel?": type("string") }, "recruitee?": { "subtitle?": type("string") } } },
  GetLmsUsersParameterCursor: type("string"),
  GetLmsUsersParameterPageSize: type("1 <= number.integer <= 250"),
  GetLmsUsersParameterUpdatedAfter: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)),
  GetLmsUsersParameterIncludeDeleted: type.enumerated("true", "false"),
  GetLmsUsersParameterIgnoreUnsupportedFilters: type.enumerated("true", "false"),
  GetLmsUsersParameterIds: type("string"),
  GetLmsUsersParameterRemoteIds: type("string"),
  GetLmsUsersParameterWorkEmails: type("string"),
  GetLmsUsersPositiveResponse: { status: type("'success'"), data: { next: type("string").or(type("null")), results: type({ id: type("string"), remote_id: type("string"), first_name: type("string").or(type("null")), last_name: type("string").or(type("null")), work_email: type("string").or(type("null")), status: type.enumerated("ACTIVE", "INACTIVE").or(type("null")), remote_created_at: type("string.date").or(type("null")), remote_deleted_at: type("string.date").or(type("null")), changed_at: type("string.date"), remote_data: type({ "[string]": type("unknown") }).or(type("null")), custom_fields: type({ "[string]": type("unknown") }).or(type("null")), integration_fields: type({ id: type("string"), key: type("string"), type: type.enumerated("DEFAULT", "CUSTOM"), "value?": type("null"), label: type("string").or(type("null")) }).array() }).array() } },
  GetLmsCourseProgressionsParameterCursor: type("string"),
  GetLmsCourseProgressionsParameterPageSize: type("1 <= number.integer <= 250"),
  GetLmsCourseProgressionsParameterUpdatedAfter: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)),
  GetLmsCourseProgressionsParameterIncludeDeleted: type.enumerated("true", "false"),
  GetLmsCourseProgressionsParameterIgnoreUnsupportedFilters: type.enumerated("true", "false"),
  GetLmsCourseProgressionsParameterIds: type("string"),
  GetLmsCourseProgressionsParameterRemoteIds: type("string"),
  GetLmsCourseProgressionsParameterUserIds: type("string"),
  GetLmsCourseProgressionsParameterCourseIds: type("string"),
  GetLmsCourseProgressionsPositiveResponse: { status: type("'success'"), data: { next: type("string").or(type("null")), results: type({ id: type("string"), remote_id: type("string"), user_id: type("string"), course_revision_id: type("string"), status: type.enumerated("ENROLLED", "IN_PROGRESS", "COMPLETED", "DROPPED").or(type("null")), enrolled_at: type("string.date").or(type("null")), completed_at: type("string.date").or(type("null")), changed_at: type("string.date"), remote_deleted_at: type("string.date").or(type("null")), remote_data: type({ "[string]": type("unknown") }).or(type("null")), user: { id: type("string"), remote_id: type("string"), first_name: type("string").or(type("null")), last_name: type("string").or(type("null")), work_email: type("string").or(type("null")) }, course_revision: { id: type("string"), remote_id: type("string"), title: type("string").or(type("null")), course: type({ id: type("string"), remote_id: type("string") }).or(type("null")) } }).array() } },
  PostLmsCourseProgressionsPositiveResponse: { status: type("'success'"), data: { id: type("string"), remote_id: type("string"), user_id: type("string"), course_revision_id: type("string"), status: type.enumerated("ENROLLED", "IN_PROGRESS", "COMPLETED", "DROPPED").or(type("null")), enrolled_at: type("string.date").or(type("null")), completed_at: type("string.date").or(type("null")), changed_at: type("string.date"), remote_deleted_at: type("string.date").or(type("null")), remote_data: type({ "[string]": type("unknown") }).or(type("null")), user: { id: type("string"), remote_id: type("string"), first_name: type("string").or(type("null")), last_name: type("string").or(type("null")), work_email: type("string").or(type("null")) }, course_revision: { id: type("string"), remote_id: type("string"), title: type("string").or(type("null")), course: type({ id: type("string"), remote_id: type("string") }).or(type("null")) } }, warnings: type({ message: type("string") }).array() },
  PostLmsCourseProgressionsRequestBody: { user_id: type("string"), course_revision_id: type("string") },
  PostLmsCourseProgressionsCourseProgressionIdCompleteParameterCourseProgressionId: type("string"),
  PostLmsCourseProgressionsCourseProgressionIdCompletePositiveResponse: { status: type("'success'"), data: { id: type("string"), remote_id: type("string"), user_id: type("string"), course_revision_id: type("string"), status: type.enumerated("ENROLLED", "IN_PROGRESS", "COMPLETED", "DROPPED").or(type("null")), enrolled_at: type("string.date").or(type("null")), completed_at: type("string.date").or(type("null")), changed_at: type("string.date"), remote_deleted_at: type("string.date").or(type("null")), remote_data: type({ "[string]": type("unknown") }).or(type("null")), user: { id: type("string"), remote_id: type("string"), first_name: type("string").or(type("null")), last_name: type("string").or(type("null")), work_email: type("string").or(type("null")) }, course_revision: { id: type("string"), remote_id: type("string"), title: type("string").or(type("null")), course: type({ id: type("string"), remote_id: type("string") }).or(type("null")) } }, warnings: type({ message: type("string") }).array() },
  PostLmsCourseProgressionsCourseProgressionIdCompleteRequestBody: { "completed_at?": type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)).or(type("null")), "score?": type("0 <= number.integer <= 100").or(type("null")) },
  GetLmsCoursesParameterCursor: type("string"),
  GetLmsCoursesParameterPageSize: type("1 <= number.integer <= 250"),
  GetLmsCoursesParameterUpdatedAfter: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)),
  GetLmsCoursesParameterIncludeDeleted: type.enumerated("true", "false"),
  GetLmsCoursesParameterIgnoreUnsupportedFilters: type.enumerated("true", "false"),
  GetLmsCoursesParameterIds: type("string"),
  GetLmsCoursesParameterRemoteIds: type("string"),
  GetLmsCoursesPositiveResponse: { status: type("'success'"), data: { next: type("string").or(type("null")), results: type({ id: type("string"), remote_id: type("string"), provider_id: type("string").or(type("null")), origin_id: type("string").or(type("null")), remote_created_at: type("string.date").or(type("null")), remote_deleted_at: type("string.date").or(type("null")), changed_at: type("string.date"), remote_data: type({ "[string]": type("unknown") }).or(type("null")), custom_fields: type({ "[string]": type("unknown") }).or(type("null")), integration_fields: type({ id: type("string"), key: type("string"), type: type.enumerated("DEFAULT", "CUSTOM"), "value?": type("null"), label: type("string").or(type("null")) }).array(), provider: type({ id: type("string"), remote_id: type("string"), name: type("string").or(type("null")) }).or(type("null")), revisions: type({ id: type("string"), remote_id: type("string"), course_id: type("string").or(type("null")), title: type("string").or(type("null")), description: type("string").or(type("null")), remote_url: type("string").or(type("null")), status: type.enumerated("ACTIVE", "INACTIVE").or(type("null")), remote_created_at: type("string.date").or(type("null")), remote_deleted_at: type("string.date").or(type("null")), changed_at: type("string.date"), remote_data: type({ "[string]": type("unknown") }).or(type("null")), custom_fields: type({ "[string]": type("unknown") }).or(type("null")), integration_fields: type({ id: type("string"), key: type("string"), type: type.enumerated("DEFAULT", "CUSTOM"), "value?": type("null"), label: type("string").or(type("null")) }).array(), skill_assignments: type({ skill: { id: type("string"), remote_id: type("string").or(type("null")), name: type("string").or(type("null")) } }).array() }).array() }).array() } },
  PostLmsCoursesBulkPositiveResponse: { status: type("'success'"), data: { task_id: type("string") }, warnings: type({ message: type("string") }).array() },
  PostLmsCoursesBulkRequestBody: { items: type({ origin_id: type("string"), course: { type: type("'EXTERNAL'"), title: type("string"), "description?": type("string").or(type("null")), course_url: type("string"), "thumbnail_url?": type("string").or(type("null")), "duration?": type("number.integer > 0").or(type("null")), "languages?": type("string").narrow((s) => typeof s === "string" && new RegExp("^[a-z]{2,3}(-[A-Z]{2})?$").test(s)).array().or(type("null")) } }).array() },
  GetLmsCoursesBulkTaskIdParameterTaskId: type("string"),
  GetLmsCoursesBulkTaskIdPositiveResponse: { status: type("'success'"), data: [{ task_id: type("string"), created_at: type("string"), status: type("'PENDING'"), completed_at: type("null") }, "|", [{ task_id: type("string"), created_at: type("string"), status: type("'COMPLETED'"), data: type([{ origin_id: type("string"), status: type("'SUCCEEDED'"), data: { id: type("string") } }, "|", { origin_id: type("string"), status: type("'FAILED'"), error: { code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS", "LMS.COURSE_UPDATE_NOT_SUPPORTED", "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING", "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string").or(type("null")) } }]).array(), completed_at: type("string.date") }, "|", { task_id: type("string"), created_at: type("string"), status: type("'FAILED'"), error: { code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS", "LMS.COURSE_UPDATE_NOT_SUPPORTED", "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING", "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string").or(type("null")) }, completed_at: type("string.date") }]] },
  PostLmsCoursesCourseIdDeactivateParameterCourseId: type("string"),
  PostLmsCoursesCourseIdDeactivatePositiveResponse: { status: type("'success'"), data: { id: type("string"), remote_id: type("string"), provider_id: type("string").or(type("null")), origin_id: type("string").or(type("null")), remote_created_at: type("string.date").or(type("null")), remote_deleted_at: type("string.date").or(type("null")), changed_at: type("string.date"), remote_data: type({ "[string]": type("unknown") }).or(type("null")), custom_fields: type({ "[string]": type("unknown") }).or(type("null")), integration_fields: type({ id: type("string"), key: type("string"), type: type.enumerated("DEFAULT", "CUSTOM"), "value?": type("null"), label: type("string").or(type("null")) }).array(), provider: type({ id: type("string"), remote_id: type("string"), name: type("string").or(type("null")) }).or(type("null")), revisions: type({ id: type("string"), remote_id: type("string"), course_id: type("string").or(type("null")), title: type("string").or(type("null")), description: type("string").or(type("null")), remote_url: type("string").or(type("null")), status: type.enumerated("ACTIVE", "INACTIVE").or(type("null")), remote_created_at: type("string.date").or(type("null")), remote_deleted_at: type("string.date").or(type("null")), changed_at: type("string.date"), remote_data: type({ "[string]": type("unknown") }).or(type("null")), custom_fields: type({ "[string]": type("unknown") }).or(type("null")), integration_fields: type({ id: type("string"), key: type("string"), type: type.enumerated("DEFAULT", "CUSTOM"), "value?": type("null"), label: type("string").or(type("null")) }).array(), skill_assignments: type({ skill: { id: type("string"), remote_id: type("string").or(type("null")), name: type("string").or(type("null")) } }).array() }).array() }, warnings: type({ message: type("string") }).array() },
  PostLmsCoursesCourseIdDeactivateRequestBody: {  },
  GetLmsSkillsParameterCursor: type("string"),
  GetLmsSkillsParameterPageSize: type("1 <= number.integer <= 250"),
  GetLmsSkillsParameterUpdatedAfter: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)),
  GetLmsSkillsParameterIncludeDeleted: type.enumerated("true", "false"),
  GetLmsSkillsParameterIgnoreUnsupportedFilters: type.enumerated("true", "false"),
  GetLmsSkillsParameterIds: type("string"),
  GetLmsSkillsParameterRemoteIds: type("string"),
  GetLmsSkillsPositiveResponse: { status: type("'success'"), data: { next: type("string").or(type("null")), results: type({ id: type("string"), remote_id: type("string").or(type("null")), name: type("string").or(type("null")), remote_created_at: type("string.date").or(type("null")), remote_deleted_at: type("string.date").or(type("null")), changed_at: type("string.date"), remote_data: type({ "[string]": type("unknown") }).or(type("null")), custom_fields: type({ "[string]": type("unknown") }).or(type("null")), integration_fields: type({ id: type("string"), key: type("string"), type: type.enumerated("DEFAULT", "CUSTOM"), "value?": type("null"), label: type("string").or(type("null")) }).array() }).array() } },
  PostAiApplyCareerSitesPositiveResponse: { status: type("'success'"), data: { id: type("string"), label: type("string") } },
  PostAiApplyCareerSitesRequestBody: { label: type("string") },
  GetAiApplyCareerSitesParameterCursor: type("string"),
  GetAiApplyCareerSitesParameterPageSize: type("1 <= number.integer <= 250"),
  GetAiApplyCareerSitesParameterIds: type("string"),
  GetAiApplyCareerSitesPositiveResponse: { status: type("'success'"), data: { results: type({ id: type("string"), label: type("string") }).array(), next: type("string").or(type("null")) } },
  GetAiApplyPostingsParameterCursor: type("string"),
  GetAiApplyPostingsParameterPageSize: type("1 <= number.integer <= 250"),
  GetAiApplyPostingsParameterIds: type("string"),
  GetAiApplyPostingsParameterCareerSiteIds: type("string"),
  GetAiApplyPostingsParameterJobCodes: type("string"),
  GetAiApplyPostingsPositiveResponse: { status: type("'success'"), data: { results: type({ id: type("string"), career_site: { id: type("string"), label: type("string") }, url: type("string"), job_code: type("string").or(type("null")), created_at: type("string.date"), updated_at: type("string.date"), archived_at: type("string.date").or(type("null")), archived_reason: type.enumerated("JOB_POSTING_TAKEN_OFFLINE", "MANUAL_ARCHIVE", "REMOVED_FROM_JOB_FEED").or(type("null")), availability: type.enumerated("APPLYABLE", "PENDING", "ARCHIVED", "UNAVAILABLE") }).array(), next: type("string").or(type("null")) } },
  PostAiApplyPostingsPositiveResponse: { status: type("'success'"), data: { id: type("string"), career_site: { id: type("string"), label: type("string") }, url: type("string"), job_code: type("string").or(type("null")), created_at: type("string.date"), updated_at: type("string.date"), archived_at: type("string.date").or(type("null")), archived_reason: type.enumerated("JOB_POSTING_TAKEN_OFFLINE", "MANUAL_ARCHIVE", "REMOVED_FROM_JOB_FEED").or(type("null")), availability: type.enumerated("APPLYABLE", "PENDING", "ARCHIVED", "UNAVAILABLE") } },
  PostAiApplyPostingsRequestBody: { url: type("string").narrow((s) => typeof s === "string" && new RegExp("^https?:\\/\\/").test(s)), "job_code?": type("string"), "location?": type({ country: type.enumerated("AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "YE", "YT", "ZA", "ZM", "ZW"), "postal_code?": type("string") }).or(type("null")), career_site_id: type("string") },
  PostAiApplyPostingsPostingIdInquireParameterPostingId: type("string"),
  PostAiApplyPostingsPostingIdInquirePositiveResponse: { status: type("'success'"), data: { application_form: type([{ block_type: type("'QUESTION'"), question_id: type("string"), label: type("string"), description: type("string").or(type("null")), required: type("boolean"), category: type("'EEO'").or(type("null")), question_type: type.enumerated("TEXT", "NUMBER", "BOOLEAN", "FILE", "DATE", "SINGLE_SELECT", "MULTI_SELECT"), unified_key: type.enumerated("EMAIL", "RESIDENCE_TYPE", "RESIDENCE_FULL_STRING", "RESIDENCE_COUNTRY", "RESIDENCE_CITY", "RESIDENCE_STATE", "RESIDENCE_LINE_1", "RESIDENCE_LINE_2", "RESIDENCE_ZIP_CODE", "APPLICANT_POOL_CONSENT", "TERMS_AND_CONDITIONS", "FIRST_NAME", "LAST_NAME", "FULL_NAME", "GENDER", "EXPECTED_START_DATE", "RESUME", "BIRTH_DATE", "PHONE_NUMBER_TYPE", "FULL_PHONE_NUMBER", "PHONE_COUNTRY_CODE", "PHONE_NATIONAL_NUMBER", "PHONE_EXTENSION").or(type("null")), options: type({ id: type("string"), label: type("string"), unified_key: type.enumerated("HOME", "WORK", "MAILING", "AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "YE", "YT", "ZA", "ZM", "ZW", "MALE", "FEMALE", "NON_BINARY", "NOT_SPECIFIED", "MOBILE", "LANDLINE", "SOURCE_OTHER", "SOURCE_OTHER_JOB_BOARD").or(type("null")) }).array().or(type("null")), display_when: type({ question_id: type("string"), answer_equals: [type("string"), "|", [type("string").array(), "|", [type("number"), "|", [type("boolean"), "|", { name: type("string"), content_type: type("string"), data: type("unknown") }]]]] }).or(type("null")) }, "|", { block_type: type("'SECTION'"), label: type("string"), children: type({ "[string]": type("unknown") }).array() }]).array(), submission_token: type("string") } },
  PostAiApplyPostingsPostingIdInquireRequestBody: {  },
  PostAiApplyApplyPositiveResponse: { status: type("'success'"), data: { id: type("string"), posting_id: type("string"), status: type("string"), created_at: type("string.date"), updated_at: type("string.date") } },
  PostAiApplyApplyRequestBody: { submission_token: type("string"), candidate_email: type("string.email"), "query_params?": { "[string]": type("string") }, screening_question_answers: type({ question_id: type("string"), answer: [type("string"), "|", [type("string").array(), "|", [type("number"), "|", [type("boolean"), "|", { name: type("string"), content_type: type("string"), data: type("string") }]]]] }).array(), "additional_clicks?": type("0 <= number.integer <= 30"), "additional_clicks_scatter_duration?": type("number.integer >= 1") },
  GetAiApplyApplicationsParameterCursor: type("string"),
  GetAiApplyApplicationsParameterPageSize: type("1 <= number.integer <= 250"),
  GetAiApplyApplicationsParameterIds: type("string"),
  GetAiApplyApplicationsParameterJobPostingIds: type("string"),
  GetAiApplyApplicationsPositiveResponse: { status: type("'success'"), data: { results: type({ id: type("string"), job_posting_id: type("string"), status: type.enumerated("SUBMITTED", "DUPLICATE", "PENDING", "FAILED"), created_at: type("string.date"), updated_at: type("string.date") }).array(), next: type("string").or(type("null")) } },
  GetAiApplyUnifiedApiJobsParameterCursor: type("string"),
  GetAiApplyUnifiedApiJobsParameterPageSize: type("1 <= number.integer <= 5"),
  GetAiApplyUnifiedApiJobsParameterIds: type("string"),
  GetAiApplyUnifiedApiJobsParameterRemoteIds: type("string"),
  GetAiApplyUnifiedApiJobsParameterJobCodes: type("string"),
  GetAiApplyUnifiedApiJobsParameterCareerSiteIds: type("string"),
  GetAiApplyUnifiedApiJobsPositiveResponse: { status: type("'success'"), data: { results: type({ id: type("string"), remote_id: type("string"), name: type("string").or(type("null")), job_code: type("string").or(type("null")), description: type("string").or(type("null")), confidential: type("boolean").or(type("null")), weekly_hours: type("number").or(type("null")), category: type("string").or(type("null")), department: type("string").or(type("null")), post_url: type("string").or(type("null")), experience_level: type("string").or(type("null")), salary_amount: type("number").or(type("null")), salary_amount_from: type("number").or(type("null")), salary_amount_to: type("number").or(type("null")), salary_currency: type("string").or(type("null")), custom_fields: type({ "[string]": type("unknown") }).or(type("null")), integration_fields: type({ "[string]": type("unknown") }).array(), opened_at: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$").test(s)).or(type("null")), closed_at: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$").test(s)).or(type("null")), remote_created_at: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$").test(s)).or(type("null")), remote_updated_at: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$").test(s)).or(type("null")), contact_id: type("string").or(type("null")), remote_data: type({ "[string]": type("unknown") }).or(type("null")), changed_at: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$").test(s)), remote_deleted_at: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$").test(s)).or(type("null")), remote_url: type("string").or(type("null")), stages: type({ "[string]": type("unknown") }).array(), screening_questions: type({ id: type("string"), remote_id: type("string").or(type("null")), title: type("string").or(type("null")), description: type("string").or(type("null")), "format?": [{ "display_type?": type.enumerated("SINGLE_LINE", "MULTI_LINE", "EMAIL", "URL").or(type("null")), "max_length?": type("number.integer").or(type("null")), type: type("'TEXT'") }, "|", [{ display_type: type.enumerated("SLIDER", "FIELD").or(type("null")), "max?": type("number").or(type("null")), "min?": type("number").or(type("null")), type: type("'NUMBER'") }, "|", [{ "accepted_mime_types?": type("string").array().or(type("null")), "max_file_size_bytes?": type("number.integer").or(type("null")), type: type("'FILE'") }, "|", [{ "display_type?": type.enumerated("DROPDOWN", "RADIO").or(type("null")), options: type({ id: type("string"), "remote_id?": type("string").or(type("null")), name: type("string") }).array(), type: type("'SINGLE_SELECT'") }, "|", [{ type: type("'BOOLEAN'") }, "|", [{ type: type("'DATE'") }, "|", [{ options: type({ id: type("string"), "remote_id?": type("string").or(type("null")), name: type("string") }).array(), type: type("'MULTI_SELECT'") }, "|", [{ type: type("'INFORMATION'") }, "|", [{ "raw_question?": type("unknown"), type: type("'UNKNOWN'") }, "|", type("null")]]]]]]]]], category: type("'EEO'").or(type("null")), "index?": type("number.integer").or(type("null")), required: type("boolean").or(type("null")), "precondition_question_id?": type("string").or(type("null")), precondition_options: [type("string").array(), "|", [type("boolean").array(), "|", type("null")]] }).array().or(type("null")), job_postings: type({ "[string]": type("unknown") }).array(), hiring_team: type({ "[string]": type("unknown") }).array(), "employment_type?": [type.enumerated("FULL_TIME", "PART_TIME", "CONTRACT", "SEASONAL", "INTERNSHIP"), "|", [type("string"), "|", type("null")]], "status?": [type.enumerated("OPEN", "CLOSED", "DRAFT", "ARCHIVED"), "|", [type("string"), "|", type("null")]], visibility: type("string").or(type("null")), remote_work_status: type("string").or(type("null")), salary_period: type("string").or(type("null")), "location?": type({ "city?": type("string").or(type("null")), "country?": type("string").or(type("null")), "raw?": type("string").or(type("null")), "state?": type("string").or(type("null")), "street_1?": type("string").or(type("null")), "street_2?": type("string").or(type("null")), "zip_code?": type("string").or(type("null")) }).or(type("null")) }).array(), next: type("string").or(type("null")) } },
  PostAiApplyUnifiedApiJobsJobIdApplicationsParameterJobId: type("string"),
  PostAiApplyUnifiedApiJobsJobIdApplicationsPositiveResponse: { status: type("'success'"), data: { id: type("string"), remote_id: type("string").or(type("null")), outcome: type.enumerated("PENDING", "HIRED", "DECLINED").or(type("null")), rejection_reason_name: type("string").or(type("null")), rejected_at: type("string.date").or(type("null")), current_stage_id: type("string").or(type("null")), job_id: type("string").or(type("null")), candidate_id: type("string").or(type("null")), screening_question_answers: type([{ answer: { content: type("string").or(type("null")) }, question: { remote_id: type("string").or(type("null")), title: type("string"), type: type("'TEXT'") } }, "|", [{ answer: { choice: type("string").or(type("null")) }, question: { remote_id: type("string").or(type("null")), title: type("string"), type: type("'SINGLE_SELECT'") } }, "|", [{ answer: { choices: type("string").array() }, question: { remote_id: type("string").or(type("null")), title: type("string"), type: type("'MULTI_SELECT'") } }, "|", [{ answer: { checked: type("boolean").or(type("null")) }, question: { remote_id: type("string").or(type("null")), title: type("string"), type: type("'BOOLEAN'") } }, "|", [{ answer: { number: type("number").or(type("null")) }, question: { remote_id: type("string").or(type("null")), title: type("string"), type: type("'NUMBER'") } }, "|", [{ answer: { date: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$").test(s)).or(type("null")) }, question: { remote_id: type("string").or(type("null")), title: type("string"), type: type("'DATE'") } }, "|", { answer: { "raw?": type("null") }, question: { remote_id: type("string").or(type("null")), title: type("string"), type: type("'UNKNOWN'") } }]]]]]]).array().or(type("null")), custom_fields: type({ "[string]": type("unknown") }).or(type("null")), integration_fields: type({ id: type("string"), key: type("string"), type: type.enumerated("DEFAULT", "CUSTOM"), "value?": type("null"), label: type("string").or(type("null")) }).array(), remote_url: type("string.url").or(type("null")), changed_at: type("string.date"), remote_deleted_at: type("string.date").or(type("null")), remote_created_at: type("string.date").or(type("null")), remote_updated_at: type("string.date").or(type("null")), remote_data: type({ "[string]": type("unknown") }).or(type("null")), current_stage: type({ id: type("string"), name: type("string").or(type("null")), remote_id: type("string").or(type("null")), index: type("number.integer").or(type("null")) }).or(type("null")), job: type({ id: type("string"), name: type("string").or(type("null")), remote_id: type("string") }).or(type("null")), candidate: type({ id: type("string"), remote_id: type("string"), first_name: type("string").or(type("null")), last_name: type("string").or(type("null")), company: type("string").or(type("null")), title: type("string").or(type("null")), confidential: type("boolean").or(type("null")), source: type("string").or(type("null")), phone_numbers: type({ phone_number: type("string"), "type?": type("string").or(type("null")) }).array().or(type("null")), email_addresses: type({ "email_address?": type("string").narrow((s) => typeof s === "string" && new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$").test(s)).or(type("null")), type: type("string").or(type("null")) }).array().or(type("null")), social_media: type({ "link?": type("string").or(type("null")), "type?": type("string").or(type("null")), "username?": type("string").or(type("null")) }).array().or(type("null")), "location?": type({ "city?": type("string").or(type("null")), "country?": type("string").or(type("null")), "raw?": type("string").or(type("null")), "state?": type("string").or(type("null")), "street_1?": type("string").or(type("null")), "street_2?": type("string").or(type("null")), "zip_code?": type("string").or(type("null")) }).or(type("null")), custom_fields: type({ "[string]": type("unknown") }).or(type("null")), integration_fields: type({ id: type("string"), key: type("string"), type: type.enumerated("DEFAULT", "CUSTOM"), "value?": type("null"), label: type("string").or(type("null")) }).array(), remote_url: type("string.url").or(type("null")), remote_created_at: type("string.date").or(type("null")), remote_updated_at: type("string.date").or(type("null")), remote_data: type({ "[string]": type("unknown") }).or(type("null")), changed_at: type("string.date"), remote_deleted_at: type("string.date").or(type("null")), tags: type({ id: type("string"), name: type("string").or(type("null")), remote_id: type("string").or(type("null")) }).array() }).or(type("null")) } },
  PostAiApplyUnifiedApiJobsJobIdApplicationsRequestBody: { "stage_id?": type("string"), candidate: { first_name: type("string"), last_name: type("string"), email_address: type("string.email"), "additional_email_addresses?": type({ type: type.enumerated("PERSONAL", "WORK", "OTHER"), email_address: type("string.email") }).array(), "company?": type("string"), "title?": type("string"), "phone_number?": type("string"), "additional_phone_numbers?": type({ type: type.enumerated("PERSONAL", "WORK", "OTHER"), phone_number: type("string") }).array(), "location?": { "city?": type("string"), country: type("string").narrow((s) => typeof s === "string" && new RegExp("^[A-Z]{2}$").test(s)), "state?": type("string"), "street_1?": type("string"), "zip_code?": type("string") }, "gender?": type.enumerated("MALE", "FEMALE", "OTHER"), "availability_date?": type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)), "salary_expectations?": { period: type.enumerated("MONTH", "YEAR"), amount: type("number") }, social_links: type({ url: type("string.url") }).array() }, attachments: type({ name: type("string"), "content_type?": type("string").narrow((s) => typeof s === "string" && new RegExp("^[\\w.-]+\\/[\\w.-]+$").test(s)), "data_url?": type("string.url"), "data?": type("string"), type: type.enumerated("CV", "COVER_LETTER", "OTHER") }).array(), "source?": { "name?": type("string"), "unified_key?": type("string"), "id?": type("string") }, "sourced_by?": { user_id: type("string") }, "gdpr_consent?": { "expires_at?": type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)), "given?": type("boolean") }, "remote_fields?": type({ "successfactors?": { "Candidate?": { "[string]": type("unknown") }, "JobApplication?": { "[string]": type("unknown") }, "copyJobApplicationAttachments?": type("boolean"), "update_existing_candidate?": type("boolean").or(type("null")) }, "personio?": { "application?": { "[string]": type("unknown") } }, "talentsoft?": { "applicant?": { "[string]": type("unknown") }, "application?": { "[string]": type("unknown") } }, "teamtailor?": { "candidate?": { "[string]": type("unknown") }, "application?": { "attributes?": { "[string]": type("unknown") } } }, "greenhouse?": { "candidate?": { "[string]": type("unknown") }, "application?": { "[string]": type("unknown") } }, "lever?": { "candidate?": { "[string]": type("unknown") } }, "workable?": { "candidate?": { "[string]": type("unknown") } }, "workday?": { "Candidate_Data?": { "Name_Detail_Data?": { "Middle_Name?": type("string"), "Social_Suffix_Reference?": { Predefined_Name_Component_ID: type("string") } }, "Language_Reference?": { WID: type("string") }, "Job_Application_Data?": { "Job_Applied_To_Data?": { "Global_Personal_Information_Data?": { "Date_of_Birth?": type("string") } }, "Resume_Data?": { "Education_Data?": type({ "School_Name?": type("string"), "First_Year_Attended?": type("number"), "Last_Year_Attended?": type("number"), "Field_of_Study_Reference?": { WID: type("string") }, "Degree_Reference?": { WID: type("string") }, "Grade_Average?": type("string") }).array(), "Skill_Data?": type({ "Skill_Name?": type("string") }).array(), "Language_Data?": type({ "Language_Reference?": { "WID?": type("string") }, "Language?": { "Native?": type("boolean"), Language_Ability: type({ "Language_Ability_Data?": { "Language_Proficiency_Reference?": { WID: type("string") }, "Language_Ability_Type_Reference?": { WID: type("string") } } }).array() } }).array(), "Experience_Data?": type({ Company_Name: type("string"), Title: type("string"), "Location?": type("string"), Start_Date: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)), "End_Date?": type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)), "Currently_Work_Here?": type("boolean"), "Description?": type("string") }).array() } }, "Contact_Data?": { "Location_Data?": { "Address_Line_1?": type("string"), "Address_Line_2?": type("string"), "Region_Subdivision_1?": type("string"), "Country_Region_Reference?": { Country_Region_ID: type("string") }, "Country_City_Reference?": { WID: type("string") } } }, "Worker_Reference?": { "WID?": type("string"), "Employee_ID?": type("string") } }, "Override_Source_Reference_WID?": type("string") }, "zohorecruit?": { "candidate?": { "[string]": type("unknown") } }, "bullhorn?": { "candidate?": { "[string]": type("unknown") }, "job_submission?": { "[string]": type("unknown") } }, "smartrecruiters?": { "candidate_with_questions?": { "[string]": type("unknown") }, "candidate_without_questions?": { "[string]": type("unknown") }, "candidate?": { "[string]": type("unknown") }, "consent_decisions?": { "SINGLE?": type("boolean"), "SMART_RECRUIT?": type("boolean"), "SMART_CRM?": type("boolean"), "SMART_MESSAGE_SMS?": type("boolean"), "SMART_MESSAGE_WHATSAPP?": type("boolean") } }, "talentadore?": { "applications?": { "[string]": type("unknown") } }, "guidecom?": { "candidate?": { "[string]": type("unknown") } }, "dvinci?": { "application?": { "[string]": type("unknown") }, "candidate?": { "[string]": type("unknown") } }, "hrworks?": { "jobApplication?": { "[string]": type("unknown") } }, "jobylon?": { "application?": { "message?": type("string") } }, "avature?": { "workflow?": { "step?": { id: type("number.integer") } } }, "recruitee?": { "candidate?": { "cover_letter_text?": type("string") } }, "rexx?": { "candidate?": { "[string]": type("unknown") } }, "umantis?": { "person?": { "[string]": type("unknown") } }, "piloga?": { "candidate?": { "street?": type("string") } }, "pinpoint?": { "candidate?": { "[string]": type("unknown") } }, "covetorest?": { "candidate?": { "mandant?": type("number") } } }).and(type({ "greenhouse?": { "post_headers?": { "On-Behalf-Of?": type("string").or(type("null")) } }, "workable?": { "on_behalf_of_user_remote_id?": type("string") } })), "screening_question_answers?": type({ question_id: type("string"), answer: [type("string"), "|", [type("boolean"), "|", [type("number"), "|", [type("string").array(), "|", [type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)), "|", { name: type("string"), "content_type?": type("string").narrow((s) => typeof s === "string" && new RegExp("^[\\w.-]+\\/[\\w.-]+$").test(s)), "data_url?": type("string.url"), "data?": type("string") }]]]]] }).array(), "query_params?": { "[string]": type("string") } },
  GetAiApplyJobFeedsParameterCursor: type("string"),
  GetAiApplyJobFeedsParameterPageSize: type("1 <= number.integer <= 250"),
  GetAiApplyJobFeedsParameterIds: type("string"),
  GetAiApplyJobFeedsPositiveResponse: { status: type("'success'"), data: { results: type({ id: type("string"), label: type("string") }).array(), next: type("string").or(type("null")) } },
  PostAiApplyJobFeedsPositiveResponse: { status: type("'success'"), data: { id: type("string"), label: type("string") } },
  PostAiApplyJobFeedsRequestBody: { label: type("string >= 1") },
  PostConnectCreateLinkPositiveResponse: { status: type("'success'"), data: { link: type("string.url") } },
  PostConnectCreateLinkRequestBody: { end_user_email: type("string.email"), end_user_organization_name: type("string >= 1"), "end_user_origin_id?": type("string >= 1").or(type("null")), "remote_environment?": type("string").or(type("null")), integration_category: type.enumerated("HRIS", "ATS", "ASSESSMENT", "LMS"), "integration_tool?": type.enumerated("workday", "successfactors", "smartrecruiters", "factorial", "oraclerecruiting", "lever", "icims", "cornerstonetalentlink", "recruitee", "recruiterflow", "greenhouse", "greenhousejobboard", "teamtailor", "teamtailorjobboards", "ashby", "talentsoft", "talentsoftcustomer", "concludis", "talention", "piloga", "onlyfy", "personio", "ukgpro", "ukgready", "adpworkforcenow", "taleo", "rexx", "afas", "bamboohr", "bullhorn", "bullhornlogin", "workable", "jobvite", "fountain", "softgarden", "softgardenpartner", "pinpoint", "welcometothejungle", "dvinci", "dvinciadmin", "join", "sagehr", "traffit", "erecruiter", "abacusumantis", "umantis", "jobylon", "taleez", "hrworks", "otys", "zohorecruit", "ceipal", "eploy", "jobdiva", "careerplug", "perview", "eightfold", "paylocity", "paycor", "avature", "apploi", "phenom", "paradox", "heyrecruit", "recruhr", "recruitcrm", "jazzhr", "bite", "brassring", "homerun", "mysolution", "carerix", "hroffice", "talentclue", "inrecruiting", "ubeeo", "connexys", "hr4you", "cornerstoneondemand", "zvooverecruit", "odoo", "comeet", "compleet", "compleetpitcher", "gem", "laura", "covetorest", "coveto", "mercury", "crelate", "manatal", "avionte", "mhmhr", "asymbl", "breezyhr", "flatchr", "dayforce", "digitalrecruiters", "applicantstack", "reachmee", "talentadore", "sandbox", "guidecom", "spott", "loxo", "kula", "workdaycustomreport", "workdaycustomreportsftp", "ukgprowfm", "payfitcustomer", "payfitpartner", "payfit", "employmenthero", "fourth", "kenjo", "heavenhr", "hibob", "cezannehr", "entraid", "azuread", "googleworkspace", "nmbrs", "deel", "remotecom", "iriscascade", "okta", "sagepeople", "humaans", "eurecia", "oraclehcm", "officient", "sesamehr", "charliehr", "abacus", "zohopeople", "gusto", "breathehr", "catalystone", "mirus", "alexishr", "simployer", "peple", "youserve", "hansalog", "lattice", "latticetalent", "hoorayhr", "trinet", "trinetpeo", "namely", "paycom", "insperity", "paychex", "rippling", "sapling", "peoplehr", "lucca", "zelt", "planday", "boondmanager", "haileyhr", "silae", "oysterhr", "kiwihr", "square", "perbilityhelix", "leapsome", "loket", "workforcecom", "peoplefirst", "sdworx", "itrent", "absenceio", "a3innuvanomina", "scim", "datevlauds", "datevhr", "datev", "datevlug", "sympa", "youforce", "nibelis", "peoplexd", "sftp", "sftpfetch", "360learning", "talentlms", "udemy", "linkedinlearning", "moodle").or(type("null")), language: type.enumerated("en", "de", "fr", "it", "es").or(type("null")), "scope_config_id?": type("string").or(type("null")), enable_filtering: "boolean = false", enable_field_mapping: "boolean = false", link_type: type.enumerated("EMBEDDED", "MAGIC_LINK") },
  GetConnectIntegrationByTokenTokenParameterToken: type("string"),
  GetConnectIntegrationByTokenTokenPositiveResponse: { status: type("'success'"), data: { tool: type("string"), id: type("string"), end_user_origin_id: type("string").or(type("null")), end_user_organization_name: type("string"), end_user_email: type("string").narrow((s) => typeof s === "string" && new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$").test(s)).or(type("null")), setup_status: type.enumerated("INCOMPLETE", "FINAL_SYNC_PENDING", "COMPLETED") } },
  PostConnectActivateIntegrationPositiveResponse: { status: type("'success'"), data: { tool: type("string"), id: type("string"), end_user_origin_id: type("string").or(type("null")), end_user_organization_name: type("string"), end_user_email: type("string").narrow((s) => typeof s === "string" && new RegExp("^(?!\\.)(?!.*\\.\\.)([\\w'+-.]*)[\\w+-]@([\\da-z][\\da-z-]*\\.)+[a-z]{2,}$").test(s)).or(type("null")), setup_status: type.enumerated("INCOMPLETE", "FINAL_SYNC_PENDING", "COMPLETED") } },
  PostConnectActivateIntegrationRequestBody: { token: type("string") },
  GetCustomDatevSystemInformationPositiveResponse: { status: type("'success'"), data: { consultant_number: type("1000 <= number <= 9999999"), client_number: type("1 <= number <= 99999"), target_system: type.enumerated("LODAS", "LuG") } },
  PostCustomDatevPassthroughPositiveResponse: { status: type("'success'"), data: { "[string]": type("unknown") }, warnings: type({ message: type("string") }).array() },
  PostCustomDatevPassthroughRequestBody: { file_content: type("string >= 1"), accounting_month: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)), target_system: type.enumerated("LODAS", "LuG"), file_type: type.enumerated("STAMMDATEN", "BEWEGUNGSDATEN"), file_name: type("string") },
  GetCustomDatevCheckEauPermissionPositiveResponse: { status: type("'success'"), data: { ready: type("boolean"), "error?": type("string") }, warnings: type({ message: type("string") }).array() },
  GetCustomDatevEauRequestsEauIdParameterEauId: type("string"),
  GetCustomDatevEauRequestsEauIdPositiveResponse: { status: type("'success'"), data: { raw: { source: type("string"), start_work_incapacity: type("string"), "collaboration_identifier?": type("string"), feedbacks_from_health_insurance: type({ guid: type("string"), contact_person: type({ "gender_contact_person?": type.enumerated("M", "F", "X", "D").or(type("null")), name: type("string"), telephone: type("string"), fax: type("string").or(type("null")), email: type("string").or(type("null")), name1_health_insurance: type("string"), "name2_health_insurance?": type("string").or(type("null")), "name3_health_insurance?": type("string").or(type("null")), postal_code: type("string"), city: type("string"), street: type("string").or(type("null")), house_number: type("string").or(type("null")) }).or(type("null")), incapacity_for_work: { start_work_incapacity_employer: type("string"), start_work_incapacity_au: type("string").or(type("null")), end_work_incapacity_au: type("string").or(type("null")), "actual_end_work_incapacity_au?": type("string").or(type("null")), date_of_diagnosis: type("string").or(type("null")), flag_current_work_incapacity: type("number").or(type("null")), accident_at_work: type("boolean"), assignment_accident_insurance_doctor: type("boolean"), other_accident: type("boolean"), "start_hospitalisation?": type("string").or(type("null")), "end_hospitalisation?": type("string").or(type("null")), initial_certificate: type("boolean"), automatic_feedback_until: type("string").or(type("null")) }, error_block_list: type({ origin: type("string").or(type("null")), error_number: type("string").or(type("null")), error_text: type("string").or(type("null")), error_value: type("string").or(type("null")) }).array().or(type("null")) }).array() } }, warnings: type({ message: type("string") }).array() },
  GetCustomDatevCheckDocumentPermissionPositiveResponse: { status: type("'success'"), data: [{ ready: type("boolean"), documents_granted: type("string").array() }, "|", { ready: type("boolean"), error: type("string") }], warnings: type({ message: type("string") }).array() },
  GetCustomDatevAvailableDocumentsParameterPeriod: type("string"),
  GetCustomDatevAvailableDocumentsPositiveResponse: { status: type("'success'"), data: { results: type({ document_type: type("string"), available_for_employees: type({ id: type("string").or(type("null")), remote_id: type("string") }).array(), is_company_document: type("boolean") }).array() }, warnings: type({ message: type("string") }).array() },
  PostCustomDatevDownloadDocumentPositiveResponse: { status: type("'success'"), data: { data_url: type("string.url"), file_name: type("string"), content_type: type("string") }, warnings: type({ message: type("string") }).array() },
  PostCustomDatevDownloadDocumentRequestBody: { accounting_month: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)), document_type: type.enumerated("AANB", "ABEG", "BUBE", "DAWE", "KBNW", "KOST", "KOTR", "LKTO", "LOBN", "LJOE", "LOJE", "LOJO", "LOPE", "LOPN", "LOPS", "LORE", "LOWE", "LSTA", "LSTB", "LSTE", "PDAT", "PFAN", "PRZA", "SBNW", "SVNW", "WEAN", "ZABR", "ZAKF", "ZAUW"), employee_id: type("string").or(type("null")) },
  PostCustomDatevEmployeesEmployeeIdDownloadDocumentParameterEmployeeId: type("string").or(type("null")),
  PostCustomDatevEmployeesEmployeeIdDownloadDocumentPositiveResponse: { status: type("'success'"), data: { data_url: type("string.url"), file_name: type("string"), content_type: type("string") }, warnings: type({ message: type("string") }).array() },
  PostCustomDatevEmployeesEmployeeIdDownloadDocumentRequestBody: { accounting_month: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)), document_type: type.enumerated("AANB", "ABEG", "BUBE", "DAWE", "KBNW", "KOST", "KOTR", "LKTO", "LOBN", "LJOE", "LOJE", "LOJO", "LOPE", "LOPN", "LOPS", "LORE", "LOWE", "LSTA", "LSTB", "LSTE", "PDAT", "PFAN", "PRZA", "SBNW", "SVNW", "WEAN", "ZABR", "ZAKF", "ZAUW") },
  PostCustomDatevEmployeesEmployeeIdEauRequestsParameterEmployeeId: type("string"),
  PostCustomDatevEmployeesEmployeeIdEauRequestsPositiveResponse: { status: type("'success'"), data: { eau_id: type("string") }, warnings: type({ message: type("string") }).array() },
  PostCustomDatevEmployeesEmployeeIdEauRequestsRequestBody: { start_work_incapacity: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}$").test(s)), "notification?": { email: type("string").narrow((s) => typeof s === "string" && new RegExp("^[\\w!#$%&'*+/=?^`{|}~-]+(?:\\.[\\w!#$%&'*+/=?^`{|}~-]+)*@(?:[\\w-]+\\.)+[\\w-]{2,}$").test(s)) }, "contact_person?": { gender: type.enumerated("M", "W", "X", "D"), name: type("0 <= string <= 30"), telephone: type("string").narrow((s) => typeof s === "string" && new RegExp("([\\d+])[\\d ()/-]+").test(s)), fax: type("string").narrow((s) => typeof s === "string" && new RegExp("([\\d+])[\\d ()/-]+").test(s)), email: type("string").narrow((s) => typeof s === "string" && new RegExp("^(?=.{1,64}@)[\\w-]+(\\.[\\w-]+)*@[^-][\\dA-Za-z-]+(\\.[\\dA-Za-z-]+)*(\\.[A-Za-z]{2,})$").test(s)), company_name: type("0 <= string <= 90"), postal_code: type("string").narrow((s) => typeof s === "string" && new RegExp("[\\dA-Za-z]*").test(s)), city: type("0 <= string <= 34"), street: type("0 <= string <= 33"), house_number: type("0 <= string <= 9") } },
  PutCustomDatevEmployeesEmployeeIdPreparePayrollParameterEmployeeId: type("string"),
  PutCustomDatevEmployeesEmployeeIdPreparePayrollPositiveResponse: { status: type("'success'"), data: { "[string]": type("unknown") }, warnings: type({ message: type("string") }).array() },
  PutCustomDatevEmployeesEmployeeIdPreparePayrollRequestBody: { payroll_run: { date: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)) }, hourly_payments: type({ hours: type("number"), lohnart: type("number") }).array(), fixed_payments: type({ amount: type("number"), lohnart: type("number") }).array(), custom_lodas: type({ amount: type("number"), lohnart: type("number"), bearbeitungsschluessel: type("number") }).array() },
  PutCustomDatevEmployeesEmployeeIdCompensationsParameterEmployeeId: type("string"),
  PutCustomDatevEmployeesEmployeeIdCompensationsPositiveResponse: { status: type("'success'"), data: { "[string]": type("unknown") }, warnings: type({ message: type("string") }).array() },
  PutCustomDatevEmployeesEmployeeIdCompensationsRequestBody: { effective_date: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)), compensations: type({ amount: type("number"), currency: type("'EUR'"), period: type.enumerated("HOUR", "MONTH"), "lohnart?": type("1 <= number.integer <= 9999") }).array() },
  GetCustomDatevCheckWritePermissionPositiveResponse: { status: type("'success'"), data: { ready: type("boolean"), "error?": type("string") }, warnings: type({ message: type("string") }).array() },
  GetCustomDatevDataPushesPositiveResponse: { status: type("'success'"), data: { data_pushes: type({ id: type("string"), type: type.enumerated("GENERAL", "PAYROLL"), created_at: type("string.date"), upload_jobs: type({ id: type("string"), file_name: type("string"), state: type.enumerated("FAILED", "UPLOADED", "IMPORTED", "CORRUPTED", "DELETED", "AUTO_DELETED"), file: type("string") }).array() }).array() } },
  PostCustomDatevPushDataGeneralPositiveResponse: { status: type("'success'"), data: { files: type({ name: type("string"), content: type("string") }).array() }, warnings: type({ message: type("string") }).array() },
  PostCustomDatevPushDataGeneralRequestBody: { "[string]": type("unknown") },
  PostCustomDatevPushDataPayrollPositiveResponse: { status: type("'success'"), data: { files: type({ name: type("string"), content: type("string") }).array() }, warnings: type({ message: type("string") }).array() },
  PostCustomDatevPushDataPayrollRequestBody: { payroll_month: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)) },
  PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsParameterEmployeeId: type("string"),
  PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsPositiveResponse: { status: type("'success'"), data: { "[string]": type("unknown") }, warnings: type({ message: type("string") }).array() },
  PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsRequestBody: { supplement_code: type("string"), effective_date: type("string").narrow((s) => typeof s === "string" && new RegExp("^\\d{4}-\\d{2}-\\d{2}(T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?)?Z?$").test(s)), "element_amount?": type("number"), "element_string?": type("string") },
  DataChangedWebhookPayload: { id: type("string"), type: type("'data-changed'"), data: { integration_id: type("string"), integration_tool: type("string"), integration_category: type.enumerated("HRIS", "ATS", "ASSESSMENT", "LMS"), changed_models: type({ name: type.enumerated("hris_legal_entities", "hris_locations", "hris_employees", "hris_absence_types", "hris_absences", "hris_employments", "hris_teams", "hris_time_off_balances", "hris_timesheets", "hris_employee_document_categories", "hris_performance_reviews", "hris_performance_review_cycles", "hris_staffing_entities", "ats_users", "ats_jobs", "ats_job_postings", "ats_candidates", "ats_application_stages", "ats_applications", "ats_screening_questions", "ats_tags", "ats_interviews", "ats_offers", "ats_rejection_reasons", "ats_roles", "lms_users", "lms_course_providers", "lms_skills", "lms_courses", "lms_course_revisions", "lms_course_progressions", "hris_join_employees_teams", "hris_join_staffing_entities_locations", "hris_join_staffing_entities_legal_entities", "hris_join_staffing_entities_groups", "ats_join_candidates_tags", "ats_join_jobs_application_stages", "ats_join_jobs_screening_questions", "ats_join_user_job_role_assignments", "ats_join_jobs_users", "ats_join_users_roles", "ats_join_interviews_users", "lms_join_revisions_skills") }).array() } },
  ConnectionFlowFailedWebhookPayload: { id: type("string"), type: type("'connection-flow-failed'"), data: { integration_tool: type("string"), integration_category: type.enumerated("HRIS", "ATS", "ASSESSMENT", "LMS"), end_user: { organization_name: type("string"), creator_email: type("string.email").or(type("null")), origin_id: type("string").or(type("null")) }, log_url: type("string.url") } },
  IntegrationCreatedWebhookPayload: { id: type("string"), type: type("'integration-created'"), data: { id: type("string"), tool: type("string"), category: type.enumerated("HRIS", "ATS", "ASSESSMENT", "LMS"), end_user: { organization_name: type("string"), creator_email: type("string.email").or(type("null")), origin_id: type("string").or(type("null")) } } },
  IntegrationDeletedWebhookPayload: { id: type("string"), type: type("'integration-deleted'"), data: { id: type("string"), tool: type("string"), category: type.enumerated("HRIS", "ATS", "ASSESSMENT", "LMS"), end_user: { organization_name: type("string"), creator_email: type("string.email").or(type("null")), origin_id: type("string").or(type("null")) }, deleted_at: type("string.date") } },
  AssessmentOrderReceivedWebhookPayload: { id: type("string"), type: type("'assessment:order-received'"), data: { id: type("string"), package_id: type("string"), status: type.enumerated("OPEN", "COMPLETED", "CANCELLED", "REJECTED"), integration_id: type("string"), candidate: { remote_id: type("string").or(type("null")), email: type("string.email"), first_name: type("string").or(type("null")), last_name: type("string").or(type("null")), phone: type("string").or(type("null")) }, application: { remote_id: type("string").or(type("null")) }, job: { remote_id: type("string").or(type("null")), name: type("string").or(type("null")), job_code: type("string").or(type("null")), description: type("string").or(type("null")), location: type({ "street_1?": type("string").or(type("null")), "street_2?": type("string").or(type("null")), "city?": type("string").or(type("null")), "state?": type("string").or(type("null")), "zip_code?": type("string").or(type("null")), "country?": type("string").or(type("null")), "raw?": type("string").or(type("null")) }).or(type("null")), hiring_team: type({ remote_id: type("string").or(type("null")), email: type("string").or(type("null")), first_name: type("string").or(type("null")), last_name: type("string").or(type("null")), hiring_team_roles: type.enumerated("RECRUITER", "HIRING_MANAGER").array() }).array() } } },
  InlineAssessmentOrderReceivedWebhookPayload: { id: type("string"), type: type("'inline-assessment:order-received'"), data: { id: type("string"), package_id: type("string"), status: type.enumerated("OPEN", "COMPLETED", "CANCELLED", "REJECTED"), integration_id: type("string"), candidate: { remote_id: type("string").or(type("null")), email: type("string.email"), first_name: type("string").or(type("null")), last_name: type("string").or(type("null")), phone: type("string").or(type("null")) }, application: { remote_id: type("string").or(type("null")) }, job: { remote_id: type("string").or(type("null")), name: type("string").or(type("null")), job_code: type("string").or(type("null")), description: type("string").or(type("null")), location: type({ "street_1?": type("string").or(type("null")), "street_2?": type("string").or(type("null")), "city?": type("string").or(type("null")), "state?": type("string").or(type("null")), "zip_code?": type("string").or(type("null")), "country?": type("string").or(type("null")), "raw?": type("string").or(type("null")) }).or(type("null")), hiring_team: type({ remote_id: type("string").or(type("null")), email: type("string").or(type("null")), first_name: type("string").or(type("null")), last_name: type("string").or(type("null")), hiring_team_roles: type.enumerated("RECRUITER", "HIRING_MANAGER").array() }).array() } } },
  IntegrationStateChangedWebhookPayload: { id: type("string"), type: type("'integration-state-changed'"), data: { integration_tool: type("string"), integration_id: type("string"), integration_category: type.enumerated("HRIS", "ATS", "ASSESSMENT", "LMS"), end_user: { organization_name: type("string"), creator_email: type("string.email").or(type("null")), origin_id: type("string").or(type("null")) }, qa_status: type.enumerated("PENDING", "FAILED", "PASSED"), setup_status: type.enumerated("INCOMPLETE", "FINAL_SYNC_PENDING", "COMPLETED"), state: type.enumerated("ACTIVE", "INVALID", "INACTIVE"), updated_at: type("string.date") } },
  AiApplyApplicationStatusUpdatedWebhookPayload: { id: type("string"), type: type("'ai-apply-application-status-updated'"), data: { id: type("string"), job_posting_id: type("string"), status: type.enumerated("SUBMITTED", "DUPLICATE", "PENDING", "FAILED"), created_at: type("string.date"), updated_at: type("string.date") } },
  AiApplyJobPostingStatusUpdatedWebhookPayload: { id: type("string"), type: type("'ai-apply-job-posting-status-updated'"), data: { id: type("string"), career_site: { id: type("string"), label: type("string") }, url: type("string"), job_code: type("string").or(type("null")), created_at: type("string.date"), updated_at: type("string.date"), archived_at: type("string.date").or(type("null")), archived_reason: type.enumerated("JOB_POSTING_TAKEN_OFFLINE", "MANUAL_ARCHIVE", "REMOVED_FROM_JOB_FEED").or(type("null")), availability: type.enumerated("APPLYABLE", "PENDING", "ARCHIVED", "UNAVAILABLE") } },
  SyncFinishedWebhookPayload: { id: type("string"), type: type("'sync-finished'"), data: { sync_id: type("string"), sync_state: type("string"), sync_started_at: type("string.date"), sync_ended_at: type("string.date"), sync_duration_seconds: type("number.integer >= 0"), integration_id: type("string"), integration_tool: type("string"), integration_category: type.enumerated("HRIS", "ATS", "ASSESSMENT", "LMS"), end_user: { organization_name: type("string"), creator_email: type("string.email").or(type("null")), origin_id: type("string").or(type("null")) }, log_url: type("string.url") } },
  BulkImportJobPostingLocation: { country: type("string"), "postal_code?": type("string") },
  BulkImportJobPostingInput: { url: type("string.url"), career_site_label: type("string"), "job_code?": type("string"), "location?": "BulkImportJobPostingLocation | null" },
  BulkImportResponse: { status: type("'success'"), data: { created: type("number.integer"), processed: type("number.integer"), archived: type("number.integer") } },
});

export const GetCheckApiKeyPositiveResponse = __schemas.GetCheckApiKeyPositiveResponse;
export type GetCheckApiKeyPositiveResponse = typeof GetCheckApiKeyPositiveResponse.infer;

export const PostForceSyncPositiveResponse = __schemas.PostForceSyncPositiveResponse;
export type PostForceSyncPositiveResponse = typeof PostForceSyncPositiveResponse.infer;

export const PostForceSyncRequestBody = __schemas.PostForceSyncRequestBody;
export type PostForceSyncRequestBody = typeof PostForceSyncRequestBody.infer;

export const PostPassthroughToolApiParameterTool = __schemas.PostPassthroughToolApiParameterTool;
export type PostPassthroughToolApiParameterTool = typeof PostPassthroughToolApiParameterTool.infer;

export const PostPassthroughToolApiParameterApi = __schemas.PostPassthroughToolApiParameterApi;
export type PostPassthroughToolApiParameterApi = typeof PostPassthroughToolApiParameterApi.infer;

export const PostPassthroughToolApiPositiveResponse = __schemas.PostPassthroughToolApiPositiveResponse;
export type PostPassthroughToolApiPositiveResponse = typeof PostPassthroughToolApiPositiveResponse.infer;

export const PostPassthroughToolApiRequestBody = __schemas.PostPassthroughToolApiRequestBody;
export type PostPassthroughToolApiRequestBody = typeof PostPassthroughToolApiRequestBody.infer;

export const DeleteIntegrationsIntegrationIdParameterIntegrationId = __schemas.DeleteIntegrationsIntegrationIdParameterIntegrationId;
export type DeleteIntegrationsIntegrationIdParameterIntegrationId = typeof DeleteIntegrationsIntegrationIdParameterIntegrationId.infer;

export const DeleteIntegrationsIntegrationIdPositiveResponse = __schemas.DeleteIntegrationsIntegrationIdPositiveResponse;
export type DeleteIntegrationsIntegrationIdPositiveResponse = typeof DeleteIntegrationsIntegrationIdPositiveResponse.infer;

export const DeleteIntegrationsIntegrationIdRequestBody = __schemas.DeleteIntegrationsIntegrationIdRequestBody;
export type DeleteIntegrationsIntegrationIdRequestBody = typeof DeleteIntegrationsIntegrationIdRequestBody.infer;

export const GetIntegrationsIntegrationIdParameterIntegrationId = __schemas.GetIntegrationsIntegrationIdParameterIntegrationId;
export type GetIntegrationsIntegrationIdParameterIntegrationId = typeof GetIntegrationsIntegrationIdParameterIntegrationId.infer;

export const GetIntegrationsIntegrationIdPositiveResponse = __schemas.GetIntegrationsIntegrationIdPositiveResponse;
export type GetIntegrationsIntegrationIdPositiveResponse = typeof GetIntegrationsIntegrationIdPositiveResponse.infer;

export const PutIntegrationsIntegrationIdEnabledParameterIntegrationId = __schemas.PutIntegrationsIntegrationIdEnabledParameterIntegrationId;
export type PutIntegrationsIntegrationIdEnabledParameterIntegrationId = typeof PutIntegrationsIntegrationIdEnabledParameterIntegrationId.infer;

export const PutIntegrationsIntegrationIdEnabledPositiveResponse = __schemas.PutIntegrationsIntegrationIdEnabledPositiveResponse;
export type PutIntegrationsIntegrationIdEnabledPositiveResponse = typeof PutIntegrationsIntegrationIdEnabledPositiveResponse.infer;

export const PutIntegrationsIntegrationIdEnabledRequestBody = __schemas.PutIntegrationsIntegrationIdEnabledRequestBody;
export type PutIntegrationsIntegrationIdEnabledRequestBody = typeof PutIntegrationsIntegrationIdEnabledRequestBody.infer;

export const PostIntegrationsIntegrationIdRelinkParameterIntegrationId = __schemas.PostIntegrationsIntegrationIdRelinkParameterIntegrationId;
export type PostIntegrationsIntegrationIdRelinkParameterIntegrationId = typeof PostIntegrationsIntegrationIdRelinkParameterIntegrationId.infer;

export const PostIntegrationsIntegrationIdRelinkPositiveResponse = __schemas.PostIntegrationsIntegrationIdRelinkPositiveResponse;
export type PostIntegrationsIntegrationIdRelinkPositiveResponse = typeof PostIntegrationsIntegrationIdRelinkPositiveResponse.infer;

export const PostIntegrationsIntegrationIdRelinkRequestBody = __schemas.PostIntegrationsIntegrationIdRelinkRequestBody;
export type PostIntegrationsIntegrationIdRelinkRequestBody = typeof PostIntegrationsIntegrationIdRelinkRequestBody.infer;

export const PostIntegrationsIntegrationIdSetupLinkParameterIntegrationId = __schemas.PostIntegrationsIntegrationIdSetupLinkParameterIntegrationId;
export type PostIntegrationsIntegrationIdSetupLinkParameterIntegrationId = typeof PostIntegrationsIntegrationIdSetupLinkParameterIntegrationId.infer;

export const PostIntegrationsIntegrationIdSetupLinkPositiveResponse = __schemas.PostIntegrationsIntegrationIdSetupLinkPositiveResponse;
export type PostIntegrationsIntegrationIdSetupLinkPositiveResponse = typeof PostIntegrationsIntegrationIdSetupLinkPositiveResponse.infer;

export const PostIntegrationsIntegrationIdSetupLinkRequestBody = __schemas.PostIntegrationsIntegrationIdSetupLinkRequestBody;
export type PostIntegrationsIntegrationIdSetupLinkRequestBody = typeof PostIntegrationsIntegrationIdSetupLinkRequestBody.infer;

export const GetIntegrationsIntegrationIdIntegrationFieldsParameterIntegrationId = __schemas.GetIntegrationsIntegrationIdIntegrationFieldsParameterIntegrationId;
export type GetIntegrationsIntegrationIdIntegrationFieldsParameterIntegrationId = typeof GetIntegrationsIntegrationIdIntegrationFieldsParameterIntegrationId.infer;

export const GetIntegrationsIntegrationIdIntegrationFieldsParameterCursor = __schemas.GetIntegrationsIntegrationIdIntegrationFieldsParameterCursor;
export type GetIntegrationsIntegrationIdIntegrationFieldsParameterCursor = typeof GetIntegrationsIntegrationIdIntegrationFieldsParameterCursor.infer;

export const GetIntegrationsIntegrationIdIntegrationFieldsParameterPageSize = __schemas.GetIntegrationsIntegrationIdIntegrationFieldsParameterPageSize;
export type GetIntegrationsIntegrationIdIntegrationFieldsParameterPageSize = typeof GetIntegrationsIntegrationIdIntegrationFieldsParameterPageSize.infer;

export const GetIntegrationsIntegrationIdIntegrationFieldsPositiveResponse = __schemas.GetIntegrationsIntegrationIdIntegrationFieldsPositiveResponse;
export type GetIntegrationsIntegrationIdIntegrationFieldsPositiveResponse = typeof GetIntegrationsIntegrationIdIntegrationFieldsPositiveResponse.infer;

export const PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationId = __schemas.PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationId;
export type PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationId = typeof PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationId.infer;

export const PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationFieldId = __schemas.PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationFieldId;
export type PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationFieldId = typeof PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationFieldId.infer;

export const PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdPositiveResponse = __schemas.PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdPositiveResponse;
export type PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdPositiveResponse = typeof PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdPositiveResponse.infer;

export const PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdRequestBody = __schemas.PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdRequestBody;
export type PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdRequestBody = typeof PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdRequestBody.infer;

export const GetIntegrationsIntegrationIdCustomFieldsParameterIntegrationId = __schemas.GetIntegrationsIntegrationIdCustomFieldsParameterIntegrationId;
export type GetIntegrationsIntegrationIdCustomFieldsParameterIntegrationId = typeof GetIntegrationsIntegrationIdCustomFieldsParameterIntegrationId.infer;

export const GetIntegrationsIntegrationIdCustomFieldsParameterCursor = __schemas.GetIntegrationsIntegrationIdCustomFieldsParameterCursor;
export type GetIntegrationsIntegrationIdCustomFieldsParameterCursor = typeof GetIntegrationsIntegrationIdCustomFieldsParameterCursor.infer;

export const GetIntegrationsIntegrationIdCustomFieldsParameterPageSize = __schemas.GetIntegrationsIntegrationIdCustomFieldsParameterPageSize;
export type GetIntegrationsIntegrationIdCustomFieldsParameterPageSize = typeof GetIntegrationsIntegrationIdCustomFieldsParameterPageSize.infer;

export const GetIntegrationsIntegrationIdCustomFieldsPositiveResponse = __schemas.GetIntegrationsIntegrationIdCustomFieldsPositiveResponse;
export type GetIntegrationsIntegrationIdCustomFieldsPositiveResponse = typeof GetIntegrationsIntegrationIdCustomFieldsPositiveResponse.infer;

export const PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterIntegrationId = __schemas.PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterIntegrationId;
export type PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterIntegrationId = typeof PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterIntegrationId.infer;

export const PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterCustomFieldId = __schemas.PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterCustomFieldId;
export type PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterCustomFieldId = typeof PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterCustomFieldId.infer;

export const PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdPositiveResponse = __schemas.PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdPositiveResponse;
export type PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdPositiveResponse = typeof PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdPositiveResponse.infer;

export const PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdRequestBody = __schemas.PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdRequestBody;
export type PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdRequestBody = typeof PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdRequestBody.infer;

export const GetToolsCategoryParameterCategory = __schemas.GetToolsCategoryParameterCategory;
export type GetToolsCategoryParameterCategory = typeof GetToolsCategoryParameterCategory.infer;

export const GetToolsCategoryPositiveResponse = __schemas.GetToolsCategoryPositiveResponse;
export type GetToolsCategoryPositiveResponse = typeof GetToolsCategoryPositiveResponse.infer;

export const PostHrisProvisioningGroupsGroupIdDiffParameterGroupId = __schemas.PostHrisProvisioningGroupsGroupIdDiffParameterGroupId;
export type PostHrisProvisioningGroupsGroupIdDiffParameterGroupId = typeof PostHrisProvisioningGroupsGroupIdDiffParameterGroupId.infer;

export const PostHrisProvisioningGroupsGroupIdDiffPositiveResponse = __schemas.PostHrisProvisioningGroupsGroupIdDiffPositiveResponse;
export type PostHrisProvisioningGroupsGroupIdDiffPositiveResponse = typeof PostHrisProvisioningGroupsGroupIdDiffPositiveResponse.infer;

export const PostHrisProvisioningGroupsGroupIdDiffRequestBody = __schemas.PostHrisProvisioningGroupsGroupIdDiffRequestBody;
export type PostHrisProvisioningGroupsGroupIdDiffRequestBody = typeof PostHrisProvisioningGroupsGroupIdDiffRequestBody.infer;

export const PostHrisProvisioningGroupsGroupIdSetupLinksParameterGroupId = __schemas.PostHrisProvisioningGroupsGroupIdSetupLinksParameterGroupId;
export type PostHrisProvisioningGroupsGroupIdSetupLinksParameterGroupId = typeof PostHrisProvisioningGroupsGroupIdSetupLinksParameterGroupId.infer;

export const PostHrisProvisioningGroupsGroupIdSetupLinksPositiveResponse = __schemas.PostHrisProvisioningGroupsGroupIdSetupLinksPositiveResponse;
export type PostHrisProvisioningGroupsGroupIdSetupLinksPositiveResponse = typeof PostHrisProvisioningGroupsGroupIdSetupLinksPositiveResponse.infer;

export const PostHrisProvisioningGroupsGroupIdSetupLinksRequestBody = __schemas.PostHrisProvisioningGroupsGroupIdSetupLinksRequestBody;
export type PostHrisProvisioningGroupsGroupIdSetupLinksRequestBody = typeof PostHrisProvisioningGroupsGroupIdSetupLinksRequestBody.infer;

export const GetHrisEmployeesParameterCursor = __schemas.GetHrisEmployeesParameterCursor;
export type GetHrisEmployeesParameterCursor = typeof GetHrisEmployeesParameterCursor.infer;

export const GetHrisEmployeesParameterPageSize = __schemas.GetHrisEmployeesParameterPageSize;
export type GetHrisEmployeesParameterPageSize = typeof GetHrisEmployeesParameterPageSize.infer;

export const GetHrisEmployeesParameterUpdatedAfter = __schemas.GetHrisEmployeesParameterUpdatedAfter;
export type GetHrisEmployeesParameterUpdatedAfter = typeof GetHrisEmployeesParameterUpdatedAfter.infer;

export const GetHrisEmployeesParameterIncludeDeleted = __schemas.GetHrisEmployeesParameterIncludeDeleted;
export type GetHrisEmployeesParameterIncludeDeleted = typeof GetHrisEmployeesParameterIncludeDeleted.infer;

export const GetHrisEmployeesParameterIgnoreUnsupportedFilters = __schemas.GetHrisEmployeesParameterIgnoreUnsupportedFilters;
export type GetHrisEmployeesParameterIgnoreUnsupportedFilters = typeof GetHrisEmployeesParameterIgnoreUnsupportedFilters.infer;

export const GetHrisEmployeesParameterIds = __schemas.GetHrisEmployeesParameterIds;
export type GetHrisEmployeesParameterIds = typeof GetHrisEmployeesParameterIds.infer;

export const GetHrisEmployeesParameterRemoteIds = __schemas.GetHrisEmployeesParameterRemoteIds;
export type GetHrisEmployeesParameterRemoteIds = typeof GetHrisEmployeesParameterRemoteIds.infer;

export const GetHrisEmployeesParameterEmploymentStatus = __schemas.GetHrisEmployeesParameterEmploymentStatus;
export type GetHrisEmployeesParameterEmploymentStatus = typeof GetHrisEmployeesParameterEmploymentStatus.infer;

export const GetHrisEmployeesParameterEmploymentStatuses = __schemas.GetHrisEmployeesParameterEmploymentStatuses;
export type GetHrisEmployeesParameterEmploymentStatuses = typeof GetHrisEmployeesParameterEmploymentStatuses.infer;

export const GetHrisEmployeesParameterGroupIds = __schemas.GetHrisEmployeesParameterGroupIds;
export type GetHrisEmployeesParameterGroupIds = typeof GetHrisEmployeesParameterGroupIds.infer;

export const GetHrisEmployeesParameterLegalEntityIds = __schemas.GetHrisEmployeesParameterLegalEntityIds;
export type GetHrisEmployeesParameterLegalEntityIds = typeof GetHrisEmployeesParameterLegalEntityIds.infer;

export const GetHrisEmployeesParameterWorkLocationIds = __schemas.GetHrisEmployeesParameterWorkLocationIds;
export type GetHrisEmployeesParameterWorkLocationIds = typeof GetHrisEmployeesParameterWorkLocationIds.infer;

export const GetHrisEmployeesParameterWorkEmails = __schemas.GetHrisEmployeesParameterWorkEmails;
export type GetHrisEmployeesParameterWorkEmails = typeof GetHrisEmployeesParameterWorkEmails.infer;

export const GetHrisEmployeesParameterPersonalEmails = __schemas.GetHrisEmployeesParameterPersonalEmails;
export type GetHrisEmployeesParameterPersonalEmails = typeof GetHrisEmployeesParameterPersonalEmails.infer;

export const GetHrisEmployeesParameterCustomFields = __schemas.GetHrisEmployeesParameterCustomFields;
export type GetHrisEmployeesParameterCustomFields = typeof GetHrisEmployeesParameterCustomFields.infer;

export const GetHrisEmployeesPositiveResponse = __schemas.GetHrisEmployeesPositiveResponse;
export type GetHrisEmployeesPositiveResponse = typeof GetHrisEmployeesPositiveResponse.infer;

export const PostHrisEmployeesPositiveResponse = __schemas.PostHrisEmployeesPositiveResponse;
export type PostHrisEmployeesPositiveResponse = typeof PostHrisEmployeesPositiveResponse.infer;

export const PostHrisEmployeesRequestBody = __schemas.PostHrisEmployeesRequestBody;
export type PostHrisEmployeesRequestBody = typeof PostHrisEmployeesRequestBody.infer;

export const Schema1 = __schemas.Schema1;
export type Schema1 = typeof Schema1.infer;

export const Schema2 = __schemas.Schema2;
export type Schema2 = typeof Schema2.infer;

export const GetHrisEmployeesFormPositiveResponse = __schemas.GetHrisEmployeesFormPositiveResponse;
export type GetHrisEmployeesFormPositiveResponse = typeof GetHrisEmployeesFormPositiveResponse.infer;

export const PostHrisEmployeesFormPositiveResponse = __schemas.PostHrisEmployeesFormPositiveResponse;
export type PostHrisEmployeesFormPositiveResponse = typeof PostHrisEmployeesFormPositiveResponse.infer;

export const Schema6 = __schemas.Schema6;
export type Schema6 = typeof Schema6.infer;

export const Schema4 = __schemas.Schema4;
export type Schema4 = typeof Schema4.infer;

export const Schema5 = __schemas.Schema5;
export type Schema5 = typeof Schema5.infer;

export const Schema3 = __schemas.Schema3;
export type Schema3 = typeof Schema3.infer;

export const PostHrisEmployeesFormRequestBody = __schemas.PostHrisEmployeesFormRequestBody;
export type PostHrisEmployeesFormRequestBody = typeof PostHrisEmployeesFormRequestBody.infer;

export const PatchHrisEmployeesEmployeeIdParameterEmployeeId = __schemas.PatchHrisEmployeesEmployeeIdParameterEmployeeId;
export type PatchHrisEmployeesEmployeeIdParameterEmployeeId = typeof PatchHrisEmployeesEmployeeIdParameterEmployeeId.infer;

export const PatchHrisEmployeesEmployeeIdPositiveResponse = __schemas.PatchHrisEmployeesEmployeeIdPositiveResponse;
export type PatchHrisEmployeesEmployeeIdPositiveResponse = typeof PatchHrisEmployeesEmployeeIdPositiveResponse.infer;

export const PatchHrisEmployeesEmployeeIdRequestBody = __schemas.PatchHrisEmployeesEmployeeIdRequestBody;
export type PatchHrisEmployeesEmployeeIdRequestBody = typeof PatchHrisEmployeesEmployeeIdRequestBody.infer;

export const PostHrisEmployeesEmployeeIdDocumentsParameterEmployeeId = __schemas.PostHrisEmployeesEmployeeIdDocumentsParameterEmployeeId;
export type PostHrisEmployeesEmployeeIdDocumentsParameterEmployeeId = typeof PostHrisEmployeesEmployeeIdDocumentsParameterEmployeeId.infer;

export const PostHrisEmployeesEmployeeIdDocumentsPositiveResponse = __schemas.PostHrisEmployeesEmployeeIdDocumentsPositiveResponse;
export type PostHrisEmployeesEmployeeIdDocumentsPositiveResponse = typeof PostHrisEmployeesEmployeeIdDocumentsPositiveResponse.infer;

export const PostHrisEmployeesEmployeeIdDocumentsRequestBody = __schemas.PostHrisEmployeesEmployeeIdDocumentsRequestBody;
export type PostHrisEmployeesEmployeeIdDocumentsRequestBody = typeof PostHrisEmployeesEmployeeIdDocumentsRequestBody.infer;

export const GetHrisEmployeeDocumentCategoriesParameterCursor = __schemas.GetHrisEmployeeDocumentCategoriesParameterCursor;
export type GetHrisEmployeeDocumentCategoriesParameterCursor = typeof GetHrisEmployeeDocumentCategoriesParameterCursor.infer;

export const GetHrisEmployeeDocumentCategoriesParameterPageSize = __schemas.GetHrisEmployeeDocumentCategoriesParameterPageSize;
export type GetHrisEmployeeDocumentCategoriesParameterPageSize = typeof GetHrisEmployeeDocumentCategoriesParameterPageSize.infer;

export const GetHrisEmployeeDocumentCategoriesParameterUpdatedAfter = __schemas.GetHrisEmployeeDocumentCategoriesParameterUpdatedAfter;
export type GetHrisEmployeeDocumentCategoriesParameterUpdatedAfter = typeof GetHrisEmployeeDocumentCategoriesParameterUpdatedAfter.infer;

export const GetHrisEmployeeDocumentCategoriesParameterIncludeDeleted = __schemas.GetHrisEmployeeDocumentCategoriesParameterIncludeDeleted;
export type GetHrisEmployeeDocumentCategoriesParameterIncludeDeleted = typeof GetHrisEmployeeDocumentCategoriesParameterIncludeDeleted.infer;

export const GetHrisEmployeeDocumentCategoriesParameterIgnoreUnsupportedFilters = __schemas.GetHrisEmployeeDocumentCategoriesParameterIgnoreUnsupportedFilters;
export type GetHrisEmployeeDocumentCategoriesParameterIgnoreUnsupportedFilters = typeof GetHrisEmployeeDocumentCategoriesParameterIgnoreUnsupportedFilters.infer;

export const GetHrisEmployeeDocumentCategoriesParameterIds = __schemas.GetHrisEmployeeDocumentCategoriesParameterIds;
export type GetHrisEmployeeDocumentCategoriesParameterIds = typeof GetHrisEmployeeDocumentCategoriesParameterIds.infer;

export const GetHrisEmployeeDocumentCategoriesParameterRemoteIds = __schemas.GetHrisEmployeeDocumentCategoriesParameterRemoteIds;
export type GetHrisEmployeeDocumentCategoriesParameterRemoteIds = typeof GetHrisEmployeeDocumentCategoriesParameterRemoteIds.infer;

export const GetHrisEmployeeDocumentCategoriesPositiveResponse = __schemas.GetHrisEmployeeDocumentCategoriesPositiveResponse;
export type GetHrisEmployeeDocumentCategoriesPositiveResponse = typeof GetHrisEmployeeDocumentCategoriesPositiveResponse.infer;

export const GetHrisTeamsParameterCursor = __schemas.GetHrisTeamsParameterCursor;
export type GetHrisTeamsParameterCursor = typeof GetHrisTeamsParameterCursor.infer;

export const GetHrisTeamsParameterPageSize = __schemas.GetHrisTeamsParameterPageSize;
export type GetHrisTeamsParameterPageSize = typeof GetHrisTeamsParameterPageSize.infer;

export const GetHrisTeamsParameterUpdatedAfter = __schemas.GetHrisTeamsParameterUpdatedAfter;
export type GetHrisTeamsParameterUpdatedAfter = typeof GetHrisTeamsParameterUpdatedAfter.infer;

export const GetHrisTeamsParameterIncludeDeleted = __schemas.GetHrisTeamsParameterIncludeDeleted;
export type GetHrisTeamsParameterIncludeDeleted = typeof GetHrisTeamsParameterIncludeDeleted.infer;

export const GetHrisTeamsParameterIgnoreUnsupportedFilters = __schemas.GetHrisTeamsParameterIgnoreUnsupportedFilters;
export type GetHrisTeamsParameterIgnoreUnsupportedFilters = typeof GetHrisTeamsParameterIgnoreUnsupportedFilters.infer;

export const GetHrisTeamsParameterIds = __schemas.GetHrisTeamsParameterIds;
export type GetHrisTeamsParameterIds = typeof GetHrisTeamsParameterIds.infer;

export const GetHrisTeamsParameterRemoteIds = __schemas.GetHrisTeamsParameterRemoteIds;
export type GetHrisTeamsParameterRemoteIds = typeof GetHrisTeamsParameterRemoteIds.infer;

export const GetHrisTeamsPositiveResponse = __schemas.GetHrisTeamsPositiveResponse;
export type GetHrisTeamsPositiveResponse = typeof GetHrisTeamsPositiveResponse.infer;

export const GetHrisGroupsParameterCursor = __schemas.GetHrisGroupsParameterCursor;
export type GetHrisGroupsParameterCursor = typeof GetHrisGroupsParameterCursor.infer;

export const GetHrisGroupsParameterPageSize = __schemas.GetHrisGroupsParameterPageSize;
export type GetHrisGroupsParameterPageSize = typeof GetHrisGroupsParameterPageSize.infer;

export const GetHrisGroupsParameterUpdatedAfter = __schemas.GetHrisGroupsParameterUpdatedAfter;
export type GetHrisGroupsParameterUpdatedAfter = typeof GetHrisGroupsParameterUpdatedAfter.infer;

export const GetHrisGroupsParameterIncludeDeleted = __schemas.GetHrisGroupsParameterIncludeDeleted;
export type GetHrisGroupsParameterIncludeDeleted = typeof GetHrisGroupsParameterIncludeDeleted.infer;

export const GetHrisGroupsParameterIgnoreUnsupportedFilters = __schemas.GetHrisGroupsParameterIgnoreUnsupportedFilters;
export type GetHrisGroupsParameterIgnoreUnsupportedFilters = typeof GetHrisGroupsParameterIgnoreUnsupportedFilters.infer;

export const GetHrisGroupsParameterIds = __schemas.GetHrisGroupsParameterIds;
export type GetHrisGroupsParameterIds = typeof GetHrisGroupsParameterIds.infer;

export const GetHrisGroupsParameterRemoteIds = __schemas.GetHrisGroupsParameterRemoteIds;
export type GetHrisGroupsParameterRemoteIds = typeof GetHrisGroupsParameterRemoteIds.infer;

export const GetHrisGroupsParameterTypes = __schemas.GetHrisGroupsParameterTypes;
export type GetHrisGroupsParameterTypes = typeof GetHrisGroupsParameterTypes.infer;

export const GetHrisGroupsParameterNameContains = __schemas.GetHrisGroupsParameterNameContains;
export type GetHrisGroupsParameterNameContains = typeof GetHrisGroupsParameterNameContains.infer;

export const GetHrisGroupsPositiveResponse = __schemas.GetHrisGroupsPositiveResponse;
export type GetHrisGroupsPositiveResponse = typeof GetHrisGroupsPositiveResponse.infer;

export const GetHrisEmploymentsParameterCursor = __schemas.GetHrisEmploymentsParameterCursor;
export type GetHrisEmploymentsParameterCursor = typeof GetHrisEmploymentsParameterCursor.infer;

export const GetHrisEmploymentsParameterPageSize = __schemas.GetHrisEmploymentsParameterPageSize;
export type GetHrisEmploymentsParameterPageSize = typeof GetHrisEmploymentsParameterPageSize.infer;

export const GetHrisEmploymentsParameterUpdatedAfter = __schemas.GetHrisEmploymentsParameterUpdatedAfter;
export type GetHrisEmploymentsParameterUpdatedAfter = typeof GetHrisEmploymentsParameterUpdatedAfter.infer;

export const GetHrisEmploymentsParameterIncludeDeleted = __schemas.GetHrisEmploymentsParameterIncludeDeleted;
export type GetHrisEmploymentsParameterIncludeDeleted = typeof GetHrisEmploymentsParameterIncludeDeleted.infer;

export const GetHrisEmploymentsParameterIgnoreUnsupportedFilters = __schemas.GetHrisEmploymentsParameterIgnoreUnsupportedFilters;
export type GetHrisEmploymentsParameterIgnoreUnsupportedFilters = typeof GetHrisEmploymentsParameterIgnoreUnsupportedFilters.infer;

export const GetHrisEmploymentsParameterIds = __schemas.GetHrisEmploymentsParameterIds;
export type GetHrisEmploymentsParameterIds = typeof GetHrisEmploymentsParameterIds.infer;

export const GetHrisEmploymentsParameterRemoteIds = __schemas.GetHrisEmploymentsParameterRemoteIds;
export type GetHrisEmploymentsParameterRemoteIds = typeof GetHrisEmploymentsParameterRemoteIds.infer;

export const GetHrisEmploymentsPositiveResponse = __schemas.GetHrisEmploymentsPositiveResponse;
export type GetHrisEmploymentsPositiveResponse = typeof GetHrisEmploymentsPositiveResponse.infer;

export const GetHrisLocationsParameterCursor = __schemas.GetHrisLocationsParameterCursor;
export type GetHrisLocationsParameterCursor = typeof GetHrisLocationsParameterCursor.infer;

export const GetHrisLocationsParameterPageSize = __schemas.GetHrisLocationsParameterPageSize;
export type GetHrisLocationsParameterPageSize = typeof GetHrisLocationsParameterPageSize.infer;

export const GetHrisLocationsParameterUpdatedAfter = __schemas.GetHrisLocationsParameterUpdatedAfter;
export type GetHrisLocationsParameterUpdatedAfter = typeof GetHrisLocationsParameterUpdatedAfter.infer;

export const GetHrisLocationsParameterIncludeDeleted = __schemas.GetHrisLocationsParameterIncludeDeleted;
export type GetHrisLocationsParameterIncludeDeleted = typeof GetHrisLocationsParameterIncludeDeleted.infer;

export const GetHrisLocationsParameterIgnoreUnsupportedFilters = __schemas.GetHrisLocationsParameterIgnoreUnsupportedFilters;
export type GetHrisLocationsParameterIgnoreUnsupportedFilters = typeof GetHrisLocationsParameterIgnoreUnsupportedFilters.infer;

export const GetHrisLocationsParameterIds = __schemas.GetHrisLocationsParameterIds;
export type GetHrisLocationsParameterIds = typeof GetHrisLocationsParameterIds.infer;

export const GetHrisLocationsParameterRemoteIds = __schemas.GetHrisLocationsParameterRemoteIds;
export type GetHrisLocationsParameterRemoteIds = typeof GetHrisLocationsParameterRemoteIds.infer;

export const GetHrisLocationsParameterNameContains = __schemas.GetHrisLocationsParameterNameContains;
export type GetHrisLocationsParameterNameContains = typeof GetHrisLocationsParameterNameContains.infer;

export const GetHrisLocationsPositiveResponse = __schemas.GetHrisLocationsPositiveResponse;
export type GetHrisLocationsPositiveResponse = typeof GetHrisLocationsPositiveResponse.infer;

export const GetHrisAbsenceTypesParameterCursor = __schemas.GetHrisAbsenceTypesParameterCursor;
export type GetHrisAbsenceTypesParameterCursor = typeof GetHrisAbsenceTypesParameterCursor.infer;

export const GetHrisAbsenceTypesParameterPageSize = __schemas.GetHrisAbsenceTypesParameterPageSize;
export type GetHrisAbsenceTypesParameterPageSize = typeof GetHrisAbsenceTypesParameterPageSize.infer;

export const GetHrisAbsenceTypesParameterUpdatedAfter = __schemas.GetHrisAbsenceTypesParameterUpdatedAfter;
export type GetHrisAbsenceTypesParameterUpdatedAfter = typeof GetHrisAbsenceTypesParameterUpdatedAfter.infer;

export const GetHrisAbsenceTypesParameterIncludeDeleted = __schemas.GetHrisAbsenceTypesParameterIncludeDeleted;
export type GetHrisAbsenceTypesParameterIncludeDeleted = typeof GetHrisAbsenceTypesParameterIncludeDeleted.infer;

export const GetHrisAbsenceTypesParameterIgnoreUnsupportedFilters = __schemas.GetHrisAbsenceTypesParameterIgnoreUnsupportedFilters;
export type GetHrisAbsenceTypesParameterIgnoreUnsupportedFilters = typeof GetHrisAbsenceTypesParameterIgnoreUnsupportedFilters.infer;

export const GetHrisAbsenceTypesParameterIds = __schemas.GetHrisAbsenceTypesParameterIds;
export type GetHrisAbsenceTypesParameterIds = typeof GetHrisAbsenceTypesParameterIds.infer;

export const GetHrisAbsenceTypesParameterRemoteIds = __schemas.GetHrisAbsenceTypesParameterRemoteIds;
export type GetHrisAbsenceTypesParameterRemoteIds = typeof GetHrisAbsenceTypesParameterRemoteIds.infer;

export const GetHrisAbsenceTypesPositiveResponse = __schemas.GetHrisAbsenceTypesPositiveResponse;
export type GetHrisAbsenceTypesPositiveResponse = typeof GetHrisAbsenceTypesPositiveResponse.infer;

export const GetHrisTimeOffBalancesParameterCursor = __schemas.GetHrisTimeOffBalancesParameterCursor;
export type GetHrisTimeOffBalancesParameterCursor = typeof GetHrisTimeOffBalancesParameterCursor.infer;

export const GetHrisTimeOffBalancesParameterPageSize = __schemas.GetHrisTimeOffBalancesParameterPageSize;
export type GetHrisTimeOffBalancesParameterPageSize = typeof GetHrisTimeOffBalancesParameterPageSize.infer;

export const GetHrisTimeOffBalancesParameterUpdatedAfter = __schemas.GetHrisTimeOffBalancesParameterUpdatedAfter;
export type GetHrisTimeOffBalancesParameterUpdatedAfter = typeof GetHrisTimeOffBalancesParameterUpdatedAfter.infer;

export const GetHrisTimeOffBalancesParameterIncludeDeleted = __schemas.GetHrisTimeOffBalancesParameterIncludeDeleted;
export type GetHrisTimeOffBalancesParameterIncludeDeleted = typeof GetHrisTimeOffBalancesParameterIncludeDeleted.infer;

export const GetHrisTimeOffBalancesParameterIgnoreUnsupportedFilters = __schemas.GetHrisTimeOffBalancesParameterIgnoreUnsupportedFilters;
export type GetHrisTimeOffBalancesParameterIgnoreUnsupportedFilters = typeof GetHrisTimeOffBalancesParameterIgnoreUnsupportedFilters.infer;

export const GetHrisTimeOffBalancesParameterIds = __schemas.GetHrisTimeOffBalancesParameterIds;
export type GetHrisTimeOffBalancesParameterIds = typeof GetHrisTimeOffBalancesParameterIds.infer;

export const GetHrisTimeOffBalancesParameterRemoteIds = __schemas.GetHrisTimeOffBalancesParameterRemoteIds;
export type GetHrisTimeOffBalancesParameterRemoteIds = typeof GetHrisTimeOffBalancesParameterRemoteIds.infer;

export const GetHrisTimeOffBalancesParameterEmployeeId = __schemas.GetHrisTimeOffBalancesParameterEmployeeId;
export type GetHrisTimeOffBalancesParameterEmployeeId = typeof GetHrisTimeOffBalancesParameterEmployeeId.infer;

export const GetHrisTimeOffBalancesPositiveResponse = __schemas.GetHrisTimeOffBalancesPositiveResponse;
export type GetHrisTimeOffBalancesPositiveResponse = typeof GetHrisTimeOffBalancesPositiveResponse.infer;

export const GetHrisAbsencesParameterCursor = __schemas.GetHrisAbsencesParameterCursor;
export type GetHrisAbsencesParameterCursor = typeof GetHrisAbsencesParameterCursor.infer;

export const GetHrisAbsencesParameterPageSize = __schemas.GetHrisAbsencesParameterPageSize;
export type GetHrisAbsencesParameterPageSize = typeof GetHrisAbsencesParameterPageSize.infer;

export const GetHrisAbsencesParameterUpdatedAfter = __schemas.GetHrisAbsencesParameterUpdatedAfter;
export type GetHrisAbsencesParameterUpdatedAfter = typeof GetHrisAbsencesParameterUpdatedAfter.infer;

export const GetHrisAbsencesParameterIncludeDeleted = __schemas.GetHrisAbsencesParameterIncludeDeleted;
export type GetHrisAbsencesParameterIncludeDeleted = typeof GetHrisAbsencesParameterIncludeDeleted.infer;

export const GetHrisAbsencesParameterIgnoreUnsupportedFilters = __schemas.GetHrisAbsencesParameterIgnoreUnsupportedFilters;
export type GetHrisAbsencesParameterIgnoreUnsupportedFilters = typeof GetHrisAbsencesParameterIgnoreUnsupportedFilters.infer;

export const GetHrisAbsencesParameterIds = __schemas.GetHrisAbsencesParameterIds;
export type GetHrisAbsencesParameterIds = typeof GetHrisAbsencesParameterIds.infer;

export const GetHrisAbsencesParameterRemoteIds = __schemas.GetHrisAbsencesParameterRemoteIds;
export type GetHrisAbsencesParameterRemoteIds = typeof GetHrisAbsencesParameterRemoteIds.infer;

export const GetHrisAbsencesParameterDateFrom = __schemas.GetHrisAbsencesParameterDateFrom;
export type GetHrisAbsencesParameterDateFrom = typeof GetHrisAbsencesParameterDateFrom.infer;

export const GetHrisAbsencesParameterDateUntil = __schemas.GetHrisAbsencesParameterDateUntil;
export type GetHrisAbsencesParameterDateUntil = typeof GetHrisAbsencesParameterDateUntil.infer;

export const GetHrisAbsencesParameterTypeIds = __schemas.GetHrisAbsencesParameterTypeIds;
export type GetHrisAbsencesParameterTypeIds = typeof GetHrisAbsencesParameterTypeIds.infer;

export const GetHrisAbsencesParameterEmployeeId = __schemas.GetHrisAbsencesParameterEmployeeId;
export type GetHrisAbsencesParameterEmployeeId = typeof GetHrisAbsencesParameterEmployeeId.infer;

export const GetHrisAbsencesParameterTimeFrom = __schemas.GetHrisAbsencesParameterTimeFrom;
export type GetHrisAbsencesParameterTimeFrom = typeof GetHrisAbsencesParameterTimeFrom.infer;

export const GetHrisAbsencesParameterTimeUntil = __schemas.GetHrisAbsencesParameterTimeUntil;
export type GetHrisAbsencesParameterTimeUntil = typeof GetHrisAbsencesParameterTimeUntil.infer;

export const GetHrisAbsencesPositiveResponse = __schemas.GetHrisAbsencesPositiveResponse;
export type GetHrisAbsencesPositiveResponse = typeof GetHrisAbsencesPositiveResponse.infer;

export const PostHrisAbsencesPositiveResponse = __schemas.PostHrisAbsencesPositiveResponse;
export type PostHrisAbsencesPositiveResponse = typeof PostHrisAbsencesPositiveResponse.infer;

export const PostHrisAbsencesRequestBody = __schemas.PostHrisAbsencesRequestBody;
export type PostHrisAbsencesRequestBody = typeof PostHrisAbsencesRequestBody.infer;

export const DeleteHrisAbsencesAbsenceIdParameterAbsenceId = __schemas.DeleteHrisAbsencesAbsenceIdParameterAbsenceId;
export type DeleteHrisAbsencesAbsenceIdParameterAbsenceId = typeof DeleteHrisAbsencesAbsenceIdParameterAbsenceId.infer;

export const DeleteHrisAbsencesAbsenceIdPositiveResponse = __schemas.DeleteHrisAbsencesAbsenceIdPositiveResponse;
export type DeleteHrisAbsencesAbsenceIdPositiveResponse = typeof DeleteHrisAbsencesAbsenceIdPositiveResponse.infer;

export const DeleteHrisAbsencesAbsenceIdRequestBody = __schemas.DeleteHrisAbsencesAbsenceIdRequestBody;
export type DeleteHrisAbsencesAbsenceIdRequestBody = typeof DeleteHrisAbsencesAbsenceIdRequestBody.infer;

export const GetHrisLegalEntitiesParameterCursor = __schemas.GetHrisLegalEntitiesParameterCursor;
export type GetHrisLegalEntitiesParameterCursor = typeof GetHrisLegalEntitiesParameterCursor.infer;

export const GetHrisLegalEntitiesParameterPageSize = __schemas.GetHrisLegalEntitiesParameterPageSize;
export type GetHrisLegalEntitiesParameterPageSize = typeof GetHrisLegalEntitiesParameterPageSize.infer;

export const GetHrisLegalEntitiesParameterUpdatedAfter = __schemas.GetHrisLegalEntitiesParameterUpdatedAfter;
export type GetHrisLegalEntitiesParameterUpdatedAfter = typeof GetHrisLegalEntitiesParameterUpdatedAfter.infer;

export const GetHrisLegalEntitiesParameterIncludeDeleted = __schemas.GetHrisLegalEntitiesParameterIncludeDeleted;
export type GetHrisLegalEntitiesParameterIncludeDeleted = typeof GetHrisLegalEntitiesParameterIncludeDeleted.infer;

export const GetHrisLegalEntitiesParameterIgnoreUnsupportedFilters = __schemas.GetHrisLegalEntitiesParameterIgnoreUnsupportedFilters;
export type GetHrisLegalEntitiesParameterIgnoreUnsupportedFilters = typeof GetHrisLegalEntitiesParameterIgnoreUnsupportedFilters.infer;

export const GetHrisLegalEntitiesParameterIds = __schemas.GetHrisLegalEntitiesParameterIds;
export type GetHrisLegalEntitiesParameterIds = typeof GetHrisLegalEntitiesParameterIds.infer;

export const GetHrisLegalEntitiesParameterRemoteIds = __schemas.GetHrisLegalEntitiesParameterRemoteIds;
export type GetHrisLegalEntitiesParameterRemoteIds = typeof GetHrisLegalEntitiesParameterRemoteIds.infer;

export const GetHrisLegalEntitiesParameterNameContains = __schemas.GetHrisLegalEntitiesParameterNameContains;
export type GetHrisLegalEntitiesParameterNameContains = typeof GetHrisLegalEntitiesParameterNameContains.infer;

export const GetHrisLegalEntitiesPositiveResponse = __schemas.GetHrisLegalEntitiesPositiveResponse;
export type GetHrisLegalEntitiesPositiveResponse = typeof GetHrisLegalEntitiesPositiveResponse.infer;

export const GetHrisTimesheetsParameterCursor = __schemas.GetHrisTimesheetsParameterCursor;
export type GetHrisTimesheetsParameterCursor = typeof GetHrisTimesheetsParameterCursor.infer;

export const GetHrisTimesheetsParameterPageSize = __schemas.GetHrisTimesheetsParameterPageSize;
export type GetHrisTimesheetsParameterPageSize = typeof GetHrisTimesheetsParameterPageSize.infer;

export const GetHrisTimesheetsParameterUpdatedAfter = __schemas.GetHrisTimesheetsParameterUpdatedAfter;
export type GetHrisTimesheetsParameterUpdatedAfter = typeof GetHrisTimesheetsParameterUpdatedAfter.infer;

export const GetHrisTimesheetsParameterIncludeDeleted = __schemas.GetHrisTimesheetsParameterIncludeDeleted;
export type GetHrisTimesheetsParameterIncludeDeleted = typeof GetHrisTimesheetsParameterIncludeDeleted.infer;

export const GetHrisTimesheetsParameterIgnoreUnsupportedFilters = __schemas.GetHrisTimesheetsParameterIgnoreUnsupportedFilters;
export type GetHrisTimesheetsParameterIgnoreUnsupportedFilters = typeof GetHrisTimesheetsParameterIgnoreUnsupportedFilters.infer;

export const GetHrisTimesheetsParameterIds = __schemas.GetHrisTimesheetsParameterIds;
export type GetHrisTimesheetsParameterIds = typeof GetHrisTimesheetsParameterIds.infer;

export const GetHrisTimesheetsParameterRemoteIds = __schemas.GetHrisTimesheetsParameterRemoteIds;
export type GetHrisTimesheetsParameterRemoteIds = typeof GetHrisTimesheetsParameterRemoteIds.infer;

export const GetHrisTimesheetsParameterEmployeeId = __schemas.GetHrisTimesheetsParameterEmployeeId;
export type GetHrisTimesheetsParameterEmployeeId = typeof GetHrisTimesheetsParameterEmployeeId.infer;

export const GetHrisTimesheetsParameterStartedBefore = __schemas.GetHrisTimesheetsParameterStartedBefore;
export type GetHrisTimesheetsParameterStartedBefore = typeof GetHrisTimesheetsParameterStartedBefore.infer;

export const GetHrisTimesheetsParameterStartedAfter = __schemas.GetHrisTimesheetsParameterStartedAfter;
export type GetHrisTimesheetsParameterStartedAfter = typeof GetHrisTimesheetsParameterStartedAfter.infer;

export const GetHrisTimesheetsParameterEndedBefore = __schemas.GetHrisTimesheetsParameterEndedBefore;
export type GetHrisTimesheetsParameterEndedBefore = typeof GetHrisTimesheetsParameterEndedBefore.infer;

export const GetHrisTimesheetsParameterEndedAfter = __schemas.GetHrisTimesheetsParameterEndedAfter;
export type GetHrisTimesheetsParameterEndedAfter = typeof GetHrisTimesheetsParameterEndedAfter.infer;

export const GetHrisTimesheetsPositiveResponse = __schemas.GetHrisTimesheetsPositiveResponse;
export type GetHrisTimesheetsPositiveResponse = typeof GetHrisTimesheetsPositiveResponse.infer;

export const GetHrisPerformanceReviewCyclesParameterCursor = __schemas.GetHrisPerformanceReviewCyclesParameterCursor;
export type GetHrisPerformanceReviewCyclesParameterCursor = typeof GetHrisPerformanceReviewCyclesParameterCursor.infer;

export const GetHrisPerformanceReviewCyclesParameterPageSize = __schemas.GetHrisPerformanceReviewCyclesParameterPageSize;
export type GetHrisPerformanceReviewCyclesParameterPageSize = typeof GetHrisPerformanceReviewCyclesParameterPageSize.infer;

export const GetHrisPerformanceReviewCyclesParameterUpdatedAfter = __schemas.GetHrisPerformanceReviewCyclesParameterUpdatedAfter;
export type GetHrisPerformanceReviewCyclesParameterUpdatedAfter = typeof GetHrisPerformanceReviewCyclesParameterUpdatedAfter.infer;

export const GetHrisPerformanceReviewCyclesParameterIncludeDeleted = __schemas.GetHrisPerformanceReviewCyclesParameterIncludeDeleted;
export type GetHrisPerformanceReviewCyclesParameterIncludeDeleted = typeof GetHrisPerformanceReviewCyclesParameterIncludeDeleted.infer;

export const GetHrisPerformanceReviewCyclesParameterIgnoreUnsupportedFilters = __schemas.GetHrisPerformanceReviewCyclesParameterIgnoreUnsupportedFilters;
export type GetHrisPerformanceReviewCyclesParameterIgnoreUnsupportedFilters = typeof GetHrisPerformanceReviewCyclesParameterIgnoreUnsupportedFilters.infer;

export const GetHrisPerformanceReviewCyclesParameterIds = __schemas.GetHrisPerformanceReviewCyclesParameterIds;
export type GetHrisPerformanceReviewCyclesParameterIds = typeof GetHrisPerformanceReviewCyclesParameterIds.infer;

export const GetHrisPerformanceReviewCyclesParameterRemoteIds = __schemas.GetHrisPerformanceReviewCyclesParameterRemoteIds;
export type GetHrisPerformanceReviewCyclesParameterRemoteIds = typeof GetHrisPerformanceReviewCyclesParameterRemoteIds.infer;

export const GetHrisPerformanceReviewCyclesPositiveResponse = __schemas.GetHrisPerformanceReviewCyclesPositiveResponse;
export type GetHrisPerformanceReviewCyclesPositiveResponse = typeof GetHrisPerformanceReviewCyclesPositiveResponse.infer;

export const GetHrisPerformanceReviewsParameterCursor = __schemas.GetHrisPerformanceReviewsParameterCursor;
export type GetHrisPerformanceReviewsParameterCursor = typeof GetHrisPerformanceReviewsParameterCursor.infer;

export const GetHrisPerformanceReviewsParameterPageSize = __schemas.GetHrisPerformanceReviewsParameterPageSize;
export type GetHrisPerformanceReviewsParameterPageSize = typeof GetHrisPerformanceReviewsParameterPageSize.infer;

export const GetHrisPerformanceReviewsParameterUpdatedAfter = __schemas.GetHrisPerformanceReviewsParameterUpdatedAfter;
export type GetHrisPerformanceReviewsParameterUpdatedAfter = typeof GetHrisPerformanceReviewsParameterUpdatedAfter.infer;

export const GetHrisPerformanceReviewsParameterIncludeDeleted = __schemas.GetHrisPerformanceReviewsParameterIncludeDeleted;
export type GetHrisPerformanceReviewsParameterIncludeDeleted = typeof GetHrisPerformanceReviewsParameterIncludeDeleted.infer;

export const GetHrisPerformanceReviewsParameterIgnoreUnsupportedFilters = __schemas.GetHrisPerformanceReviewsParameterIgnoreUnsupportedFilters;
export type GetHrisPerformanceReviewsParameterIgnoreUnsupportedFilters = typeof GetHrisPerformanceReviewsParameterIgnoreUnsupportedFilters.infer;

export const GetHrisPerformanceReviewsParameterIds = __schemas.GetHrisPerformanceReviewsParameterIds;
export type GetHrisPerformanceReviewsParameterIds = typeof GetHrisPerformanceReviewsParameterIds.infer;

export const GetHrisPerformanceReviewsParameterRemoteIds = __schemas.GetHrisPerformanceReviewsParameterRemoteIds;
export type GetHrisPerformanceReviewsParameterRemoteIds = typeof GetHrisPerformanceReviewsParameterRemoteIds.infer;

export const GetHrisPerformanceReviewsParameterTypes = __schemas.GetHrisPerformanceReviewsParameterTypes;
export type GetHrisPerformanceReviewsParameterTypes = typeof GetHrisPerformanceReviewsParameterTypes.infer;

export const GetHrisPerformanceReviewsParameterReviewCycleIds = __schemas.GetHrisPerformanceReviewsParameterReviewCycleIds;
export type GetHrisPerformanceReviewsParameterReviewCycleIds = typeof GetHrisPerformanceReviewsParameterReviewCycleIds.infer;

export const GetHrisPerformanceReviewsParameterRevieweeIds = __schemas.GetHrisPerformanceReviewsParameterRevieweeIds;
export type GetHrisPerformanceReviewsParameterRevieweeIds = typeof GetHrisPerformanceReviewsParameterRevieweeIds.infer;

export const GetHrisPerformanceReviewsPositiveResponse = __schemas.GetHrisPerformanceReviewsPositiveResponse;
export type GetHrisPerformanceReviewsPositiveResponse = typeof GetHrisPerformanceReviewsPositiveResponse.infer;

export const GetHrisSkillsParameterIds = __schemas.GetHrisSkillsParameterIds;
export type GetHrisSkillsParameterIds = typeof GetHrisSkillsParameterIds.infer;

export const GetHrisSkillsParameterRemoteIds = __schemas.GetHrisSkillsParameterRemoteIds;
export type GetHrisSkillsParameterRemoteIds = typeof GetHrisSkillsParameterRemoteIds.infer;

export const GetHrisSkillsParameterNameContains = __schemas.GetHrisSkillsParameterNameContains;
export type GetHrisSkillsParameterNameContains = typeof GetHrisSkillsParameterNameContains.infer;

export const GetHrisSkillsPositiveResponse = __schemas.GetHrisSkillsPositiveResponse;
export type GetHrisSkillsPositiveResponse = typeof GetHrisSkillsPositiveResponse.infer;

export const PostHrisSkillsPositiveResponse = __schemas.PostHrisSkillsPositiveResponse;
export type PostHrisSkillsPositiveResponse = typeof PostHrisSkillsPositiveResponse.infer;

export const PostHrisSkillsRequestBody = __schemas.PostHrisSkillsRequestBody;
export type PostHrisSkillsRequestBody = typeof PostHrisSkillsRequestBody.infer;

export const PatchHrisSkillsSkillIdParameterSkillId = __schemas.PatchHrisSkillsSkillIdParameterSkillId;
export type PatchHrisSkillsSkillIdParameterSkillId = typeof PatchHrisSkillsSkillIdParameterSkillId.infer;

export const PatchHrisSkillsSkillIdPositiveResponse = __schemas.PatchHrisSkillsSkillIdPositiveResponse;
export type PatchHrisSkillsSkillIdPositiveResponse = typeof PatchHrisSkillsSkillIdPositiveResponse.infer;

export const PatchHrisSkillsSkillIdRequestBody = __schemas.PatchHrisSkillsSkillIdRequestBody;
export type PatchHrisSkillsSkillIdRequestBody = typeof PatchHrisSkillsSkillIdRequestBody.infer;

export const DeleteHrisSkillsSkillIdParameterSkillId = __schemas.DeleteHrisSkillsSkillIdParameterSkillId;
export type DeleteHrisSkillsSkillIdParameterSkillId = typeof DeleteHrisSkillsSkillIdParameterSkillId.infer;

export const DeleteHrisSkillsSkillIdPositiveResponse = __schemas.DeleteHrisSkillsSkillIdPositiveResponse;
export type DeleteHrisSkillsSkillIdPositiveResponse = typeof DeleteHrisSkillsSkillIdPositiveResponse.infer;

export const DeleteHrisSkillsSkillIdRequestBody = __schemas.DeleteHrisSkillsSkillIdRequestBody;
export type DeleteHrisSkillsSkillIdRequestBody = typeof DeleteHrisSkillsSkillIdRequestBody.infer;

export const GetHrisEmployeeSkillAssignmentsParameterIds = __schemas.GetHrisEmployeeSkillAssignmentsParameterIds;
export type GetHrisEmployeeSkillAssignmentsParameterIds = typeof GetHrisEmployeeSkillAssignmentsParameterIds.infer;

export const GetHrisEmployeeSkillAssignmentsParameterRemoteIds = __schemas.GetHrisEmployeeSkillAssignmentsParameterRemoteIds;
export type GetHrisEmployeeSkillAssignmentsParameterRemoteIds = typeof GetHrisEmployeeSkillAssignmentsParameterRemoteIds.infer;

export const GetHrisEmployeeSkillAssignmentsParameterEmployeeIds = __schemas.GetHrisEmployeeSkillAssignmentsParameterEmployeeIds;
export type GetHrisEmployeeSkillAssignmentsParameterEmployeeIds = typeof GetHrisEmployeeSkillAssignmentsParameterEmployeeIds.infer;

export const GetHrisEmployeeSkillAssignmentsParameterSkillIds = __schemas.GetHrisEmployeeSkillAssignmentsParameterSkillIds;
export type GetHrisEmployeeSkillAssignmentsParameterSkillIds = typeof GetHrisEmployeeSkillAssignmentsParameterSkillIds.infer;

export const GetHrisEmployeeSkillAssignmentsPositiveResponse = __schemas.GetHrisEmployeeSkillAssignmentsPositiveResponse;
export type GetHrisEmployeeSkillAssignmentsPositiveResponse = typeof GetHrisEmployeeSkillAssignmentsPositiveResponse.infer;

export const PostHrisEmployeeSkillAssignmentsPositiveResponse = __schemas.PostHrisEmployeeSkillAssignmentsPositiveResponse;
export type PostHrisEmployeeSkillAssignmentsPositiveResponse = typeof PostHrisEmployeeSkillAssignmentsPositiveResponse.infer;

export const PostHrisEmployeeSkillAssignmentsRequestBody = __schemas.PostHrisEmployeeSkillAssignmentsRequestBody;
export type PostHrisEmployeeSkillAssignmentsRequestBody = typeof PostHrisEmployeeSkillAssignmentsRequestBody.infer;

export const PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId = __schemas.PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId;
export type PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId = typeof PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId.infer;

export const PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse = __schemas.PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse;
export type PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse = typeof PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse.infer;

export const PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody = __schemas.PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody;
export type PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody = typeof PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody.infer;

export const DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId = __schemas.DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId;
export type DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId = typeof DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId.infer;

export const DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse = __schemas.DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse;
export type DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse = typeof DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse.infer;

export const DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody = __schemas.DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody;
export type DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody = typeof DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody.infer;

export const GetHrisStaffingEntitiesParameterCursor = __schemas.GetHrisStaffingEntitiesParameterCursor;
export type GetHrisStaffingEntitiesParameterCursor = typeof GetHrisStaffingEntitiesParameterCursor.infer;

export const GetHrisStaffingEntitiesParameterPageSize = __schemas.GetHrisStaffingEntitiesParameterPageSize;
export type GetHrisStaffingEntitiesParameterPageSize = typeof GetHrisStaffingEntitiesParameterPageSize.infer;

export const GetHrisStaffingEntitiesParameterUpdatedAfter = __schemas.GetHrisStaffingEntitiesParameterUpdatedAfter;
export type GetHrisStaffingEntitiesParameterUpdatedAfter = typeof GetHrisStaffingEntitiesParameterUpdatedAfter.infer;

export const GetHrisStaffingEntitiesParameterIncludeDeleted = __schemas.GetHrisStaffingEntitiesParameterIncludeDeleted;
export type GetHrisStaffingEntitiesParameterIncludeDeleted = typeof GetHrisStaffingEntitiesParameterIncludeDeleted.infer;

export const GetHrisStaffingEntitiesParameterIgnoreUnsupportedFilters = __schemas.GetHrisStaffingEntitiesParameterIgnoreUnsupportedFilters;
export type GetHrisStaffingEntitiesParameterIgnoreUnsupportedFilters = typeof GetHrisStaffingEntitiesParameterIgnoreUnsupportedFilters.infer;

export const GetHrisStaffingEntitiesParameterIds = __schemas.GetHrisStaffingEntitiesParameterIds;
export type GetHrisStaffingEntitiesParameterIds = typeof GetHrisStaffingEntitiesParameterIds.infer;

export const GetHrisStaffingEntitiesParameterRemoteIds = __schemas.GetHrisStaffingEntitiesParameterRemoteIds;
export type GetHrisStaffingEntitiesParameterRemoteIds = typeof GetHrisStaffingEntitiesParameterRemoteIds.infer;

export const GetHrisStaffingEntitiesParameterModelTypes = __schemas.GetHrisStaffingEntitiesParameterModelTypes;
export type GetHrisStaffingEntitiesParameterModelTypes = typeof GetHrisStaffingEntitiesParameterModelTypes.infer;

export const GetHrisStaffingEntitiesParameterStatuses = __schemas.GetHrisStaffingEntitiesParameterStatuses;
export type GetHrisStaffingEntitiesParameterStatuses = typeof GetHrisStaffingEntitiesParameterStatuses.infer;

export const GetHrisStaffingEntitiesPositiveResponse = __schemas.GetHrisStaffingEntitiesPositiveResponse;
export type GetHrisStaffingEntitiesPositiveResponse = typeof GetHrisStaffingEntitiesPositiveResponse.infer;

export const GetAtsApplicationsParameterCursor = __schemas.GetAtsApplicationsParameterCursor;
export type GetAtsApplicationsParameterCursor = typeof GetAtsApplicationsParameterCursor.infer;

export const GetAtsApplicationsParameterPageSize = __schemas.GetAtsApplicationsParameterPageSize;
export type GetAtsApplicationsParameterPageSize = typeof GetAtsApplicationsParameterPageSize.infer;

export const GetAtsApplicationsParameterUpdatedAfter = __schemas.GetAtsApplicationsParameterUpdatedAfter;
export type GetAtsApplicationsParameterUpdatedAfter = typeof GetAtsApplicationsParameterUpdatedAfter.infer;

export const GetAtsApplicationsParameterIncludeDeleted = __schemas.GetAtsApplicationsParameterIncludeDeleted;
export type GetAtsApplicationsParameterIncludeDeleted = typeof GetAtsApplicationsParameterIncludeDeleted.infer;

export const GetAtsApplicationsParameterIgnoreUnsupportedFilters = __schemas.GetAtsApplicationsParameterIgnoreUnsupportedFilters;
export type GetAtsApplicationsParameterIgnoreUnsupportedFilters = typeof GetAtsApplicationsParameterIgnoreUnsupportedFilters.infer;

export const GetAtsApplicationsParameterIds = __schemas.GetAtsApplicationsParameterIds;
export type GetAtsApplicationsParameterIds = typeof GetAtsApplicationsParameterIds.infer;

export const GetAtsApplicationsParameterRemoteIds = __schemas.GetAtsApplicationsParameterRemoteIds;
export type GetAtsApplicationsParameterRemoteIds = typeof GetAtsApplicationsParameterRemoteIds.infer;

export const GetAtsApplicationsParameterOutcome = __schemas.GetAtsApplicationsParameterOutcome;
export type GetAtsApplicationsParameterOutcome = typeof GetAtsApplicationsParameterOutcome.infer;

export const GetAtsApplicationsParameterOutcomes = __schemas.GetAtsApplicationsParameterOutcomes;
export type GetAtsApplicationsParameterOutcomes = typeof GetAtsApplicationsParameterOutcomes.infer;

export const GetAtsApplicationsParameterJobIds = __schemas.GetAtsApplicationsParameterJobIds;
export type GetAtsApplicationsParameterJobIds = typeof GetAtsApplicationsParameterJobIds.infer;

export const GetAtsApplicationsParameterJobRemoteIds = __schemas.GetAtsApplicationsParameterJobRemoteIds;
export type GetAtsApplicationsParameterJobRemoteIds = typeof GetAtsApplicationsParameterJobRemoteIds.infer;

export const GetAtsApplicationsParameterCurrentStageIds = __schemas.GetAtsApplicationsParameterCurrentStageIds;
export type GetAtsApplicationsParameterCurrentStageIds = typeof GetAtsApplicationsParameterCurrentStageIds.infer;

export const GetAtsApplicationsParameterRemoteCreatedAfter = __schemas.GetAtsApplicationsParameterRemoteCreatedAfter;
export type GetAtsApplicationsParameterRemoteCreatedAfter = typeof GetAtsApplicationsParameterRemoteCreatedAfter.infer;

export const GetAtsApplicationsPositiveResponse = __schemas.GetAtsApplicationsPositiveResponse;
export type GetAtsApplicationsPositiveResponse = typeof GetAtsApplicationsPositiveResponse.infer;

export const PutAtsApplicationsApplicationIdStageParameterApplicationId = __schemas.PutAtsApplicationsApplicationIdStageParameterApplicationId;
export type PutAtsApplicationsApplicationIdStageParameterApplicationId = typeof PutAtsApplicationsApplicationIdStageParameterApplicationId.infer;

export const PutAtsApplicationsApplicationIdStagePositiveResponse = __schemas.PutAtsApplicationsApplicationIdStagePositiveResponse;
export type PutAtsApplicationsApplicationIdStagePositiveResponse = typeof PutAtsApplicationsApplicationIdStagePositiveResponse.infer;

export const PutAtsApplicationsApplicationIdStageRequestBody = __schemas.PutAtsApplicationsApplicationIdStageRequestBody;
export type PutAtsApplicationsApplicationIdStageRequestBody = typeof PutAtsApplicationsApplicationIdStageRequestBody.infer;

export const PostAtsApplicationsApplicationIdResultLinksParameterApplicationId = __schemas.PostAtsApplicationsApplicationIdResultLinksParameterApplicationId;
export type PostAtsApplicationsApplicationIdResultLinksParameterApplicationId = typeof PostAtsApplicationsApplicationIdResultLinksParameterApplicationId.infer;

export const PostAtsApplicationsApplicationIdResultLinksPositiveResponse = __schemas.PostAtsApplicationsApplicationIdResultLinksPositiveResponse;
export type PostAtsApplicationsApplicationIdResultLinksPositiveResponse = typeof PostAtsApplicationsApplicationIdResultLinksPositiveResponse.infer;

export const PostAtsApplicationsApplicationIdResultLinksRequestBody = __schemas.PostAtsApplicationsApplicationIdResultLinksRequestBody;
export type PostAtsApplicationsApplicationIdResultLinksRequestBody = typeof PostAtsApplicationsApplicationIdResultLinksRequestBody.infer;

export const PostAtsApplicationsApplicationIdNotesParameterApplicationId = __schemas.PostAtsApplicationsApplicationIdNotesParameterApplicationId;
export type PostAtsApplicationsApplicationIdNotesParameterApplicationId = typeof PostAtsApplicationsApplicationIdNotesParameterApplicationId.infer;

export const PostAtsApplicationsApplicationIdNotesPositiveResponse = __schemas.PostAtsApplicationsApplicationIdNotesPositiveResponse;
export type PostAtsApplicationsApplicationIdNotesPositiveResponse = typeof PostAtsApplicationsApplicationIdNotesPositiveResponse.infer;

export const PostAtsApplicationsApplicationIdNotesRequestBody = __schemas.PostAtsApplicationsApplicationIdNotesRequestBody;
export type PostAtsApplicationsApplicationIdNotesRequestBody = typeof PostAtsApplicationsApplicationIdNotesRequestBody.infer;

export const GetAtsApplicationsApplicationIdAttachmentsParameterApplicationId = __schemas.GetAtsApplicationsApplicationIdAttachmentsParameterApplicationId;
export type GetAtsApplicationsApplicationIdAttachmentsParameterApplicationId = typeof GetAtsApplicationsApplicationIdAttachmentsParameterApplicationId.infer;

export const GetAtsApplicationsApplicationIdAttachmentsPositiveResponse = __schemas.GetAtsApplicationsApplicationIdAttachmentsPositiveResponse;
export type GetAtsApplicationsApplicationIdAttachmentsPositiveResponse = typeof GetAtsApplicationsApplicationIdAttachmentsPositiveResponse.infer;

export const PostAtsApplicationsApplicationIdAttachmentsParameterApplicationId = __schemas.PostAtsApplicationsApplicationIdAttachmentsParameterApplicationId;
export type PostAtsApplicationsApplicationIdAttachmentsParameterApplicationId = typeof PostAtsApplicationsApplicationIdAttachmentsParameterApplicationId.infer;

export const PostAtsApplicationsApplicationIdAttachmentsPositiveResponse = __schemas.PostAtsApplicationsApplicationIdAttachmentsPositiveResponse;
export type PostAtsApplicationsApplicationIdAttachmentsPositiveResponse = typeof PostAtsApplicationsApplicationIdAttachmentsPositiveResponse.infer;

export const PostAtsApplicationsApplicationIdAttachmentsRequestBody = __schemas.PostAtsApplicationsApplicationIdAttachmentsRequestBody;
export type PostAtsApplicationsApplicationIdAttachmentsRequestBody = typeof PostAtsApplicationsApplicationIdAttachmentsRequestBody.infer;

export const PostAtsApplicationsApplicationIdRejectParameterApplicationId = __schemas.PostAtsApplicationsApplicationIdRejectParameterApplicationId;
export type PostAtsApplicationsApplicationIdRejectParameterApplicationId = typeof PostAtsApplicationsApplicationIdRejectParameterApplicationId.infer;

export const PostAtsApplicationsApplicationIdRejectPositiveResponse = __schemas.PostAtsApplicationsApplicationIdRejectPositiveResponse;
export type PostAtsApplicationsApplicationIdRejectPositiveResponse = typeof PostAtsApplicationsApplicationIdRejectPositiveResponse.infer;

export const PostAtsApplicationsApplicationIdRejectRequestBody = __schemas.PostAtsApplicationsApplicationIdRejectRequestBody;
export type PostAtsApplicationsApplicationIdRejectRequestBody = typeof PostAtsApplicationsApplicationIdRejectRequestBody.infer;

export const PostAtsApplicationsApplicationIdInterviewsParameterApplicationId = __schemas.PostAtsApplicationsApplicationIdInterviewsParameterApplicationId;
export type PostAtsApplicationsApplicationIdInterviewsParameterApplicationId = typeof PostAtsApplicationsApplicationIdInterviewsParameterApplicationId.infer;

export const PostAtsApplicationsApplicationIdInterviewsPositiveResponse = __schemas.PostAtsApplicationsApplicationIdInterviewsPositiveResponse;
export type PostAtsApplicationsApplicationIdInterviewsPositiveResponse = typeof PostAtsApplicationsApplicationIdInterviewsPositiveResponse.infer;

export const PostAtsApplicationsApplicationIdInterviewsRequestBody = __schemas.PostAtsApplicationsApplicationIdInterviewsRequestBody;
export type PostAtsApplicationsApplicationIdInterviewsRequestBody = typeof PostAtsApplicationsApplicationIdInterviewsRequestBody.infer;

export const PatchAtsApplicationsApplicationIdInterviewsParameterApplicationId = __schemas.PatchAtsApplicationsApplicationIdInterviewsParameterApplicationId;
export type PatchAtsApplicationsApplicationIdInterviewsParameterApplicationId = typeof PatchAtsApplicationsApplicationIdInterviewsParameterApplicationId.infer;

export const PatchAtsApplicationsApplicationIdInterviewsPositiveResponse = __schemas.PatchAtsApplicationsApplicationIdInterviewsPositiveResponse;
export type PatchAtsApplicationsApplicationIdInterviewsPositiveResponse = typeof PatchAtsApplicationsApplicationIdInterviewsPositiveResponse.infer;

export const PatchAtsApplicationsApplicationIdInterviewsRequestBody = __schemas.PatchAtsApplicationsApplicationIdInterviewsRequestBody;
export type PatchAtsApplicationsApplicationIdInterviewsRequestBody = typeof PatchAtsApplicationsApplicationIdInterviewsRequestBody.infer;

export const GetAtsCandidatesParameterCursor = __schemas.GetAtsCandidatesParameterCursor;
export type GetAtsCandidatesParameterCursor = typeof GetAtsCandidatesParameterCursor.infer;

export const GetAtsCandidatesParameterPageSize = __schemas.GetAtsCandidatesParameterPageSize;
export type GetAtsCandidatesParameterPageSize = typeof GetAtsCandidatesParameterPageSize.infer;

export const GetAtsCandidatesParameterUpdatedAfter = __schemas.GetAtsCandidatesParameterUpdatedAfter;
export type GetAtsCandidatesParameterUpdatedAfter = typeof GetAtsCandidatesParameterUpdatedAfter.infer;

export const GetAtsCandidatesParameterIncludeDeleted = __schemas.GetAtsCandidatesParameterIncludeDeleted;
export type GetAtsCandidatesParameterIncludeDeleted = typeof GetAtsCandidatesParameterIncludeDeleted.infer;

export const GetAtsCandidatesParameterIgnoreUnsupportedFilters = __schemas.GetAtsCandidatesParameterIgnoreUnsupportedFilters;
export type GetAtsCandidatesParameterIgnoreUnsupportedFilters = typeof GetAtsCandidatesParameterIgnoreUnsupportedFilters.infer;

export const GetAtsCandidatesParameterIds = __schemas.GetAtsCandidatesParameterIds;
export type GetAtsCandidatesParameterIds = typeof GetAtsCandidatesParameterIds.infer;

export const GetAtsCandidatesParameterRemoteIds = __schemas.GetAtsCandidatesParameterRemoteIds;
export type GetAtsCandidatesParameterRemoteIds = typeof GetAtsCandidatesParameterRemoteIds.infer;

export const GetAtsCandidatesParameterEmail = __schemas.GetAtsCandidatesParameterEmail;
export type GetAtsCandidatesParameterEmail = typeof GetAtsCandidatesParameterEmail.infer;

export const GetAtsCandidatesParameterJobIds = __schemas.GetAtsCandidatesParameterJobIds;
export type GetAtsCandidatesParameterJobIds = typeof GetAtsCandidatesParameterJobIds.infer;

export const GetAtsCandidatesParameterFirstName = __schemas.GetAtsCandidatesParameterFirstName;
export type GetAtsCandidatesParameterFirstName = typeof GetAtsCandidatesParameterFirstName.infer;

export const GetAtsCandidatesParameterLastName = __schemas.GetAtsCandidatesParameterLastName;
export type GetAtsCandidatesParameterLastName = typeof GetAtsCandidatesParameterLastName.infer;

export const GetAtsCandidatesPositiveResponse = __schemas.GetAtsCandidatesPositiveResponse;
export type GetAtsCandidatesPositiveResponse = typeof GetAtsCandidatesPositiveResponse.infer;

export const PostAtsCandidatesPositiveResponse = __schemas.PostAtsCandidatesPositiveResponse;
export type PostAtsCandidatesPositiveResponse = typeof PostAtsCandidatesPositiveResponse.infer;

export const PostAtsCandidatesRequestBody = __schemas.PostAtsCandidatesRequestBody;
export type PostAtsCandidatesRequestBody = typeof PostAtsCandidatesRequestBody.infer;

export const GetAtsCandidatesCandidateIdAttachmentsParameterCandidateId = __schemas.GetAtsCandidatesCandidateIdAttachmentsParameterCandidateId;
export type GetAtsCandidatesCandidateIdAttachmentsParameterCandidateId = typeof GetAtsCandidatesCandidateIdAttachmentsParameterCandidateId.infer;

export const GetAtsCandidatesCandidateIdAttachmentsPositiveResponse = __schemas.GetAtsCandidatesCandidateIdAttachmentsPositiveResponse;
export type GetAtsCandidatesCandidateIdAttachmentsPositiveResponse = typeof GetAtsCandidatesCandidateIdAttachmentsPositiveResponse.infer;

export const PostAtsCandidatesCandidateIdAttachmentsParameterCandidateId = __schemas.PostAtsCandidatesCandidateIdAttachmentsParameterCandidateId;
export type PostAtsCandidatesCandidateIdAttachmentsParameterCandidateId = typeof PostAtsCandidatesCandidateIdAttachmentsParameterCandidateId.infer;

export const PostAtsCandidatesCandidateIdAttachmentsPositiveResponse = __schemas.PostAtsCandidatesCandidateIdAttachmentsPositiveResponse;
export type PostAtsCandidatesCandidateIdAttachmentsPositiveResponse = typeof PostAtsCandidatesCandidateIdAttachmentsPositiveResponse.infer;

export const PostAtsCandidatesCandidateIdAttachmentsRequestBody = __schemas.PostAtsCandidatesCandidateIdAttachmentsRequestBody;
export type PostAtsCandidatesCandidateIdAttachmentsRequestBody = typeof PostAtsCandidatesCandidateIdAttachmentsRequestBody.infer;

export const PostAtsCandidatesCandidateIdResultLinksParameterCandidateId = __schemas.PostAtsCandidatesCandidateIdResultLinksParameterCandidateId;
export type PostAtsCandidatesCandidateIdResultLinksParameterCandidateId = typeof PostAtsCandidatesCandidateIdResultLinksParameterCandidateId.infer;

export const PostAtsCandidatesCandidateIdResultLinksPositiveResponse = __schemas.PostAtsCandidatesCandidateIdResultLinksPositiveResponse;
export type PostAtsCandidatesCandidateIdResultLinksPositiveResponse = typeof PostAtsCandidatesCandidateIdResultLinksPositiveResponse.infer;

export const PostAtsCandidatesCandidateIdResultLinksRequestBody = __schemas.PostAtsCandidatesCandidateIdResultLinksRequestBody;
export type PostAtsCandidatesCandidateIdResultLinksRequestBody = typeof PostAtsCandidatesCandidateIdResultLinksRequestBody.infer;

export const PostAtsCandidatesCandidateIdTagsParameterCandidateId = __schemas.PostAtsCandidatesCandidateIdTagsParameterCandidateId;
export type PostAtsCandidatesCandidateIdTagsParameterCandidateId = typeof PostAtsCandidatesCandidateIdTagsParameterCandidateId.infer;

export const PostAtsCandidatesCandidateIdTagsPositiveResponse = __schemas.PostAtsCandidatesCandidateIdTagsPositiveResponse;
export type PostAtsCandidatesCandidateIdTagsPositiveResponse = typeof PostAtsCandidatesCandidateIdTagsPositiveResponse.infer;

export const PostAtsCandidatesCandidateIdTagsRequestBody = __schemas.PostAtsCandidatesCandidateIdTagsRequestBody;
export type PostAtsCandidatesCandidateIdTagsRequestBody = typeof PostAtsCandidatesCandidateIdTagsRequestBody.infer;

export const DeleteAtsCandidatesCandidateIdTagsParameterCandidateId = __schemas.DeleteAtsCandidatesCandidateIdTagsParameterCandidateId;
export type DeleteAtsCandidatesCandidateIdTagsParameterCandidateId = typeof DeleteAtsCandidatesCandidateIdTagsParameterCandidateId.infer;

export const DeleteAtsCandidatesCandidateIdTagsPositiveResponse = __schemas.DeleteAtsCandidatesCandidateIdTagsPositiveResponse;
export type DeleteAtsCandidatesCandidateIdTagsPositiveResponse = typeof DeleteAtsCandidatesCandidateIdTagsPositiveResponse.infer;

export const DeleteAtsCandidatesCandidateIdTagsRequestBody = __schemas.DeleteAtsCandidatesCandidateIdTagsRequestBody;
export type DeleteAtsCandidatesCandidateIdTagsRequestBody = typeof DeleteAtsCandidatesCandidateIdTagsRequestBody.infer;

export const GetAtsTagsParameterCursor = __schemas.GetAtsTagsParameterCursor;
export type GetAtsTagsParameterCursor = typeof GetAtsTagsParameterCursor.infer;

export const GetAtsTagsParameterPageSize = __schemas.GetAtsTagsParameterPageSize;
export type GetAtsTagsParameterPageSize = typeof GetAtsTagsParameterPageSize.infer;

export const GetAtsTagsParameterUpdatedAfter = __schemas.GetAtsTagsParameterUpdatedAfter;
export type GetAtsTagsParameterUpdatedAfter = typeof GetAtsTagsParameterUpdatedAfter.infer;

export const GetAtsTagsParameterIncludeDeleted = __schemas.GetAtsTagsParameterIncludeDeleted;
export type GetAtsTagsParameterIncludeDeleted = typeof GetAtsTagsParameterIncludeDeleted.infer;

export const GetAtsTagsParameterIgnoreUnsupportedFilters = __schemas.GetAtsTagsParameterIgnoreUnsupportedFilters;
export type GetAtsTagsParameterIgnoreUnsupportedFilters = typeof GetAtsTagsParameterIgnoreUnsupportedFilters.infer;

export const GetAtsTagsParameterIds = __schemas.GetAtsTagsParameterIds;
export type GetAtsTagsParameterIds = typeof GetAtsTagsParameterIds.infer;

export const GetAtsTagsParameterRemoteIds = __schemas.GetAtsTagsParameterRemoteIds;
export type GetAtsTagsParameterRemoteIds = typeof GetAtsTagsParameterRemoteIds.infer;

export const GetAtsTagsPositiveResponse = __schemas.GetAtsTagsPositiveResponse;
export type GetAtsTagsPositiveResponse = typeof GetAtsTagsPositiveResponse.infer;

export const GetAtsApplicationStagesParameterCursor = __schemas.GetAtsApplicationStagesParameterCursor;
export type GetAtsApplicationStagesParameterCursor = typeof GetAtsApplicationStagesParameterCursor.infer;

export const GetAtsApplicationStagesParameterPageSize = __schemas.GetAtsApplicationStagesParameterPageSize;
export type GetAtsApplicationStagesParameterPageSize = typeof GetAtsApplicationStagesParameterPageSize.infer;

export const GetAtsApplicationStagesParameterUpdatedAfter = __schemas.GetAtsApplicationStagesParameterUpdatedAfter;
export type GetAtsApplicationStagesParameterUpdatedAfter = typeof GetAtsApplicationStagesParameterUpdatedAfter.infer;

export const GetAtsApplicationStagesParameterIncludeDeleted = __schemas.GetAtsApplicationStagesParameterIncludeDeleted;
export type GetAtsApplicationStagesParameterIncludeDeleted = typeof GetAtsApplicationStagesParameterIncludeDeleted.infer;

export const GetAtsApplicationStagesParameterIgnoreUnsupportedFilters = __schemas.GetAtsApplicationStagesParameterIgnoreUnsupportedFilters;
export type GetAtsApplicationStagesParameterIgnoreUnsupportedFilters = typeof GetAtsApplicationStagesParameterIgnoreUnsupportedFilters.infer;

export const GetAtsApplicationStagesParameterIds = __schemas.GetAtsApplicationStagesParameterIds;
export type GetAtsApplicationStagesParameterIds = typeof GetAtsApplicationStagesParameterIds.infer;

export const GetAtsApplicationStagesParameterRemoteIds = __schemas.GetAtsApplicationStagesParameterRemoteIds;
export type GetAtsApplicationStagesParameterRemoteIds = typeof GetAtsApplicationStagesParameterRemoteIds.infer;

export const GetAtsApplicationStagesPositiveResponse = __schemas.GetAtsApplicationStagesPositiveResponse;
export type GetAtsApplicationStagesPositiveResponse = typeof GetAtsApplicationStagesPositiveResponse.infer;

export const GetAtsJobsParameterCursor = __schemas.GetAtsJobsParameterCursor;
export type GetAtsJobsParameterCursor = typeof GetAtsJobsParameterCursor.infer;

export const GetAtsJobsParameterPageSize = __schemas.GetAtsJobsParameterPageSize;
export type GetAtsJobsParameterPageSize = typeof GetAtsJobsParameterPageSize.infer;

export const GetAtsJobsParameterUpdatedAfter = __schemas.GetAtsJobsParameterUpdatedAfter;
export type GetAtsJobsParameterUpdatedAfter = typeof GetAtsJobsParameterUpdatedAfter.infer;

export const GetAtsJobsParameterIncludeDeleted = __schemas.GetAtsJobsParameterIncludeDeleted;
export type GetAtsJobsParameterIncludeDeleted = typeof GetAtsJobsParameterIncludeDeleted.infer;

export const GetAtsJobsParameterIgnoreUnsupportedFilters = __schemas.GetAtsJobsParameterIgnoreUnsupportedFilters;
export type GetAtsJobsParameterIgnoreUnsupportedFilters = typeof GetAtsJobsParameterIgnoreUnsupportedFilters.infer;

export const GetAtsJobsParameterIds = __schemas.GetAtsJobsParameterIds;
export type GetAtsJobsParameterIds = typeof GetAtsJobsParameterIds.infer;

export const GetAtsJobsParameterRemoteIds = __schemas.GetAtsJobsParameterRemoteIds;
export type GetAtsJobsParameterRemoteIds = typeof GetAtsJobsParameterRemoteIds.infer;

export const GetAtsJobsParameterJobCodes = __schemas.GetAtsJobsParameterJobCodes;
export type GetAtsJobsParameterJobCodes = typeof GetAtsJobsParameterJobCodes.infer;

export const GetAtsJobsParameterPostUrl = __schemas.GetAtsJobsParameterPostUrl;
export type GetAtsJobsParameterPostUrl = typeof GetAtsJobsParameterPostUrl.infer;

export const GetAtsJobsParameterStatus = __schemas.GetAtsJobsParameterStatus;
export type GetAtsJobsParameterStatus = typeof GetAtsJobsParameterStatus.infer;

export const GetAtsJobsParameterStatuses = __schemas.GetAtsJobsParameterStatuses;
export type GetAtsJobsParameterStatuses = typeof GetAtsJobsParameterStatuses.infer;

export const GetAtsJobsParameterEmploymentTypes = __schemas.GetAtsJobsParameterEmploymentTypes;
export type GetAtsJobsParameterEmploymentTypes = typeof GetAtsJobsParameterEmploymentTypes.infer;

export const GetAtsJobsParameterVisibilities = __schemas.GetAtsJobsParameterVisibilities;
export type GetAtsJobsParameterVisibilities = typeof GetAtsJobsParameterVisibilities.infer;

export const GetAtsJobsParameterRemoteCreatedAfter = __schemas.GetAtsJobsParameterRemoteCreatedAfter;
export type GetAtsJobsParameterRemoteCreatedAfter = typeof GetAtsJobsParameterRemoteCreatedAfter.infer;

export const GetAtsJobsParameterNameContains = __schemas.GetAtsJobsParameterNameContains;
export type GetAtsJobsParameterNameContains = typeof GetAtsJobsParameterNameContains.infer;

export const GetAtsJobsPositiveResponse = __schemas.GetAtsJobsPositiveResponse;
export type GetAtsJobsPositiveResponse = typeof GetAtsJobsPositiveResponse.infer;

export const PostAtsJobsJobIdApplicationsParameterJobId = __schemas.PostAtsJobsJobIdApplicationsParameterJobId;
export type PostAtsJobsJobIdApplicationsParameterJobId = typeof PostAtsJobsJobIdApplicationsParameterJobId.infer;

export const PostAtsJobsJobIdApplicationsPositiveResponse = __schemas.PostAtsJobsJobIdApplicationsPositiveResponse;
export type PostAtsJobsJobIdApplicationsPositiveResponse = typeof PostAtsJobsJobIdApplicationsPositiveResponse.infer;

export const PostAtsJobsJobIdApplicationsRequestBody = __schemas.PostAtsJobsJobIdApplicationsRequestBody;
export type PostAtsJobsJobIdApplicationsRequestBody = typeof PostAtsJobsJobIdApplicationsRequestBody.infer;

export const GetAtsUsersParameterCursor = __schemas.GetAtsUsersParameterCursor;
export type GetAtsUsersParameterCursor = typeof GetAtsUsersParameterCursor.infer;

export const GetAtsUsersParameterPageSize = __schemas.GetAtsUsersParameterPageSize;
export type GetAtsUsersParameterPageSize = typeof GetAtsUsersParameterPageSize.infer;

export const GetAtsUsersParameterUpdatedAfter = __schemas.GetAtsUsersParameterUpdatedAfter;
export type GetAtsUsersParameterUpdatedAfter = typeof GetAtsUsersParameterUpdatedAfter.infer;

export const GetAtsUsersParameterIncludeDeleted = __schemas.GetAtsUsersParameterIncludeDeleted;
export type GetAtsUsersParameterIncludeDeleted = typeof GetAtsUsersParameterIncludeDeleted.infer;

export const GetAtsUsersParameterIgnoreUnsupportedFilters = __schemas.GetAtsUsersParameterIgnoreUnsupportedFilters;
export type GetAtsUsersParameterIgnoreUnsupportedFilters = typeof GetAtsUsersParameterIgnoreUnsupportedFilters.infer;

export const GetAtsUsersParameterIds = __schemas.GetAtsUsersParameterIds;
export type GetAtsUsersParameterIds = typeof GetAtsUsersParameterIds.infer;

export const GetAtsUsersParameterRemoteIds = __schemas.GetAtsUsersParameterRemoteIds;
export type GetAtsUsersParameterRemoteIds = typeof GetAtsUsersParameterRemoteIds.infer;

export const GetAtsUsersParameterEmails = __schemas.GetAtsUsersParameterEmails;
export type GetAtsUsersParameterEmails = typeof GetAtsUsersParameterEmails.infer;

export const GetAtsUsersPositiveResponse = __schemas.GetAtsUsersPositiveResponse;
export type GetAtsUsersPositiveResponse = typeof GetAtsUsersPositiveResponse.infer;

export const GetAtsRolesParameterCursor = __schemas.GetAtsRolesParameterCursor;
export type GetAtsRolesParameterCursor = typeof GetAtsRolesParameterCursor.infer;

export const GetAtsRolesParameterPageSize = __schemas.GetAtsRolesParameterPageSize;
export type GetAtsRolesParameterPageSize = typeof GetAtsRolesParameterPageSize.infer;

export const GetAtsRolesParameterUpdatedAfter = __schemas.GetAtsRolesParameterUpdatedAfter;
export type GetAtsRolesParameterUpdatedAfter = typeof GetAtsRolesParameterUpdatedAfter.infer;

export const GetAtsRolesParameterIncludeDeleted = __schemas.GetAtsRolesParameterIncludeDeleted;
export type GetAtsRolesParameterIncludeDeleted = typeof GetAtsRolesParameterIncludeDeleted.infer;

export const GetAtsRolesParameterIgnoreUnsupportedFilters = __schemas.GetAtsRolesParameterIgnoreUnsupportedFilters;
export type GetAtsRolesParameterIgnoreUnsupportedFilters = typeof GetAtsRolesParameterIgnoreUnsupportedFilters.infer;

export const GetAtsRolesParameterIds = __schemas.GetAtsRolesParameterIds;
export type GetAtsRolesParameterIds = typeof GetAtsRolesParameterIds.infer;

export const GetAtsRolesParameterRemoteIds = __schemas.GetAtsRolesParameterRemoteIds;
export type GetAtsRolesParameterRemoteIds = typeof GetAtsRolesParameterRemoteIds.infer;

export const GetAtsRolesParameterScopes = __schemas.GetAtsRolesParameterScopes;
export type GetAtsRolesParameterScopes = typeof GetAtsRolesParameterScopes.infer;

export const GetAtsRolesPositiveResponse = __schemas.GetAtsRolesPositiveResponse;
export type GetAtsRolesPositiveResponse = typeof GetAtsRolesPositiveResponse.infer;

export const GetAtsOffersParameterCursor = __schemas.GetAtsOffersParameterCursor;
export type GetAtsOffersParameterCursor = typeof GetAtsOffersParameterCursor.infer;

export const GetAtsOffersParameterPageSize = __schemas.GetAtsOffersParameterPageSize;
export type GetAtsOffersParameterPageSize = typeof GetAtsOffersParameterPageSize.infer;

export const GetAtsOffersParameterUpdatedAfter = __schemas.GetAtsOffersParameterUpdatedAfter;
export type GetAtsOffersParameterUpdatedAfter = typeof GetAtsOffersParameterUpdatedAfter.infer;

export const GetAtsOffersParameterIncludeDeleted = __schemas.GetAtsOffersParameterIncludeDeleted;
export type GetAtsOffersParameterIncludeDeleted = typeof GetAtsOffersParameterIncludeDeleted.infer;

export const GetAtsOffersParameterIgnoreUnsupportedFilters = __schemas.GetAtsOffersParameterIgnoreUnsupportedFilters;
export type GetAtsOffersParameterIgnoreUnsupportedFilters = typeof GetAtsOffersParameterIgnoreUnsupportedFilters.infer;

export const GetAtsOffersParameterIds = __schemas.GetAtsOffersParameterIds;
export type GetAtsOffersParameterIds = typeof GetAtsOffersParameterIds.infer;

export const GetAtsOffersParameterRemoteIds = __schemas.GetAtsOffersParameterRemoteIds;
export type GetAtsOffersParameterRemoteIds = typeof GetAtsOffersParameterRemoteIds.infer;

export const GetAtsOffersPositiveResponse = __schemas.GetAtsOffersPositiveResponse;
export type GetAtsOffersPositiveResponse = typeof GetAtsOffersPositiveResponse.infer;

export const GetAtsRejectionReasonsParameterCursor = __schemas.GetAtsRejectionReasonsParameterCursor;
export type GetAtsRejectionReasonsParameterCursor = typeof GetAtsRejectionReasonsParameterCursor.infer;

export const GetAtsRejectionReasonsParameterPageSize = __schemas.GetAtsRejectionReasonsParameterPageSize;
export type GetAtsRejectionReasonsParameterPageSize = typeof GetAtsRejectionReasonsParameterPageSize.infer;

export const GetAtsRejectionReasonsParameterUpdatedAfter = __schemas.GetAtsRejectionReasonsParameterUpdatedAfter;
export type GetAtsRejectionReasonsParameterUpdatedAfter = typeof GetAtsRejectionReasonsParameterUpdatedAfter.infer;

export const GetAtsRejectionReasonsParameterIncludeDeleted = __schemas.GetAtsRejectionReasonsParameterIncludeDeleted;
export type GetAtsRejectionReasonsParameterIncludeDeleted = typeof GetAtsRejectionReasonsParameterIncludeDeleted.infer;

export const GetAtsRejectionReasonsParameterIgnoreUnsupportedFilters = __schemas.GetAtsRejectionReasonsParameterIgnoreUnsupportedFilters;
export type GetAtsRejectionReasonsParameterIgnoreUnsupportedFilters = typeof GetAtsRejectionReasonsParameterIgnoreUnsupportedFilters.infer;

export const GetAtsRejectionReasonsParameterIds = __schemas.GetAtsRejectionReasonsParameterIds;
export type GetAtsRejectionReasonsParameterIds = typeof GetAtsRejectionReasonsParameterIds.infer;

export const GetAtsRejectionReasonsParameterRemoteIds = __schemas.GetAtsRejectionReasonsParameterRemoteIds;
export type GetAtsRejectionReasonsParameterRemoteIds = typeof GetAtsRejectionReasonsParameterRemoteIds.infer;

export const GetAtsRejectionReasonsPositiveResponse = __schemas.GetAtsRejectionReasonsPositiveResponse;
export type GetAtsRejectionReasonsPositiveResponse = typeof GetAtsRejectionReasonsPositiveResponse.infer;

export const GetAtsInterviewsParameterCursor = __schemas.GetAtsInterviewsParameterCursor;
export type GetAtsInterviewsParameterCursor = typeof GetAtsInterviewsParameterCursor.infer;

export const GetAtsInterviewsParameterPageSize = __schemas.GetAtsInterviewsParameterPageSize;
export type GetAtsInterviewsParameterPageSize = typeof GetAtsInterviewsParameterPageSize.infer;

export const GetAtsInterviewsParameterUpdatedAfter = __schemas.GetAtsInterviewsParameterUpdatedAfter;
export type GetAtsInterviewsParameterUpdatedAfter = typeof GetAtsInterviewsParameterUpdatedAfter.infer;

export const GetAtsInterviewsParameterIncludeDeleted = __schemas.GetAtsInterviewsParameterIncludeDeleted;
export type GetAtsInterviewsParameterIncludeDeleted = typeof GetAtsInterviewsParameterIncludeDeleted.infer;

export const GetAtsInterviewsParameterIgnoreUnsupportedFilters = __schemas.GetAtsInterviewsParameterIgnoreUnsupportedFilters;
export type GetAtsInterviewsParameterIgnoreUnsupportedFilters = typeof GetAtsInterviewsParameterIgnoreUnsupportedFilters.infer;

export const GetAtsInterviewsParameterIds = __schemas.GetAtsInterviewsParameterIds;
export type GetAtsInterviewsParameterIds = typeof GetAtsInterviewsParameterIds.infer;

export const GetAtsInterviewsParameterRemoteIds = __schemas.GetAtsInterviewsParameterRemoteIds;
export type GetAtsInterviewsParameterRemoteIds = typeof GetAtsInterviewsParameterRemoteIds.infer;

export const GetAtsInterviewsParameterJobIds = __schemas.GetAtsInterviewsParameterJobIds;
export type GetAtsInterviewsParameterJobIds = typeof GetAtsInterviewsParameterJobIds.infer;

export const GetAtsInterviewsPositiveResponse = __schemas.GetAtsInterviewsPositiveResponse;
export type GetAtsInterviewsPositiveResponse = typeof GetAtsInterviewsPositiveResponse.infer;

export const GetAtsActionsAtsCreateCandidatePositiveResponse = __schemas.GetAtsActionsAtsCreateCandidatePositiveResponse;
export type GetAtsActionsAtsCreateCandidatePositiveResponse = typeof GetAtsActionsAtsCreateCandidatePositiveResponse.infer;

export const GetAtsActionsAtsCreateApplicationPositiveResponse = __schemas.GetAtsActionsAtsCreateApplicationPositiveResponse;
export type GetAtsActionsAtsCreateApplicationPositiveResponse = typeof GetAtsActionsAtsCreateApplicationPositiveResponse.infer;

export const GetAtsActionsAtsAddApplicationAttachmentPositiveResponse = __schemas.GetAtsActionsAtsAddApplicationAttachmentPositiveResponse;
export type GetAtsActionsAtsAddApplicationAttachmentPositiveResponse = typeof GetAtsActionsAtsAddApplicationAttachmentPositiveResponse.infer;

export const GetAtsActionsAtsAddCandidateAttachmentPositiveResponse = __schemas.GetAtsActionsAtsAddCandidateAttachmentPositiveResponse;
export type GetAtsActionsAtsAddCandidateAttachmentPositiveResponse = typeof GetAtsActionsAtsAddCandidateAttachmentPositiveResponse.infer;

export const PostAtsImportTrackedApplicationPositiveResponse = __schemas.PostAtsImportTrackedApplicationPositiveResponse;
export type PostAtsImportTrackedApplicationPositiveResponse = typeof PostAtsImportTrackedApplicationPositiveResponse.infer;

export const PostAtsImportTrackedApplicationRequestBody = __schemas.PostAtsImportTrackedApplicationRequestBody;
export type PostAtsImportTrackedApplicationRequestBody = typeof PostAtsImportTrackedApplicationRequestBody.infer;

export const PostAtsCustomAvionteSyncedJobsPositiveResponse = __schemas.PostAtsCustomAvionteSyncedJobsPositiveResponse;
export type PostAtsCustomAvionteSyncedJobsPositiveResponse = typeof PostAtsCustomAvionteSyncedJobsPositiveResponse.infer;

export const PostAtsCustomAvionteSyncedJobsRequestBody = __schemas.PostAtsCustomAvionteSyncedJobsRequestBody;
export type PostAtsCustomAvionteSyncedJobsRequestBody = typeof PostAtsCustomAvionteSyncedJobsRequestBody.infer;

export const DeleteAtsCustomAvionteSyncedJobsJobRemoteIdParameterJobRemoteId = __schemas.DeleteAtsCustomAvionteSyncedJobsJobRemoteIdParameterJobRemoteId;
export type DeleteAtsCustomAvionteSyncedJobsJobRemoteIdParameterJobRemoteId = typeof DeleteAtsCustomAvionteSyncedJobsJobRemoteIdParameterJobRemoteId.infer;

export const DeleteAtsCustomAvionteSyncedJobsJobRemoteIdPositiveResponse = __schemas.DeleteAtsCustomAvionteSyncedJobsJobRemoteIdPositiveResponse;
export type DeleteAtsCustomAvionteSyncedJobsJobRemoteIdPositiveResponse = typeof DeleteAtsCustomAvionteSyncedJobsJobRemoteIdPositiveResponse.infer;

export const DeleteAtsCustomAvionteSyncedJobsJobRemoteIdRequestBody = __schemas.DeleteAtsCustomAvionteSyncedJobsJobRemoteIdRequestBody;
export type DeleteAtsCustomAvionteSyncedJobsJobRemoteIdRequestBody = typeof DeleteAtsCustomAvionteSyncedJobsJobRemoteIdRequestBody.infer;

export const GetAssessmentPackagesPositiveResponse = __schemas.GetAssessmentPackagesPositiveResponse;
export type GetAssessmentPackagesPositiveResponse = typeof GetAssessmentPackagesPositiveResponse.infer;

export const PutAssessmentPackagesPositiveResponse = __schemas.PutAssessmentPackagesPositiveResponse;
export type PutAssessmentPackagesPositiveResponse = typeof PutAssessmentPackagesPositiveResponse.infer;

export const PutAssessmentPackagesRequestBody = __schemas.PutAssessmentPackagesRequestBody;
export type PutAssessmentPackagesRequestBody = typeof PutAssessmentPackagesRequestBody.infer;

export const GetAssessmentOrdersParameterCursor = __schemas.GetAssessmentOrdersParameterCursor;
export type GetAssessmentOrdersParameterCursor = typeof GetAssessmentOrdersParameterCursor.infer;

export const GetAssessmentOrdersParameterPageSize = __schemas.GetAssessmentOrdersParameterPageSize;
export type GetAssessmentOrdersParameterPageSize = typeof GetAssessmentOrdersParameterPageSize.infer;

export const GetAssessmentOrdersParameterIds = __schemas.GetAssessmentOrdersParameterIds;
export type GetAssessmentOrdersParameterIds = typeof GetAssessmentOrdersParameterIds.infer;

export const GetAssessmentOrdersParameterStatuses = __schemas.GetAssessmentOrdersParameterStatuses;
export type GetAssessmentOrdersParameterStatuses = typeof GetAssessmentOrdersParameterStatuses.infer;

export const GetAssessmentOrdersParameterCreatedAfter = __schemas.GetAssessmentOrdersParameterCreatedAfter;
export type GetAssessmentOrdersParameterCreatedAfter = typeof GetAssessmentOrdersParameterCreatedAfter.infer;

export const GetAssessmentOrdersPositiveResponse = __schemas.GetAssessmentOrdersPositiveResponse;
export type GetAssessmentOrdersPositiveResponse = typeof GetAssessmentOrdersPositiveResponse.infer;

export const GetAssessmentOrdersOpenParameterCursor = __schemas.GetAssessmentOrdersOpenParameterCursor;
export type GetAssessmentOrdersOpenParameterCursor = typeof GetAssessmentOrdersOpenParameterCursor.infer;

export const GetAssessmentOrdersOpenParameterPageSize = __schemas.GetAssessmentOrdersOpenParameterPageSize;
export type GetAssessmentOrdersOpenParameterPageSize = typeof GetAssessmentOrdersOpenParameterPageSize.infer;

export const GetAssessmentOrdersOpenPositiveResponse = __schemas.GetAssessmentOrdersOpenPositiveResponse;
export type GetAssessmentOrdersOpenPositiveResponse = typeof GetAssessmentOrdersOpenPositiveResponse.infer;

export const PutAssessmentOrdersAssessmentOrderIdResultParameterAssessmentOrderId = __schemas.PutAssessmentOrdersAssessmentOrderIdResultParameterAssessmentOrderId;
export type PutAssessmentOrdersAssessmentOrderIdResultParameterAssessmentOrderId = typeof PutAssessmentOrdersAssessmentOrderIdResultParameterAssessmentOrderId.infer;

export const PutAssessmentOrdersAssessmentOrderIdResultPositiveResponse = __schemas.PutAssessmentOrdersAssessmentOrderIdResultPositiveResponse;
export type PutAssessmentOrdersAssessmentOrderIdResultPositiveResponse = typeof PutAssessmentOrdersAssessmentOrderIdResultPositiveResponse.infer;

export const PutAssessmentOrdersAssessmentOrderIdResultRequestBody = __schemas.PutAssessmentOrdersAssessmentOrderIdResultRequestBody;
export type PutAssessmentOrdersAssessmentOrderIdResultRequestBody = typeof PutAssessmentOrdersAssessmentOrderIdResultRequestBody.infer;

export const GetLmsUsersParameterCursor = __schemas.GetLmsUsersParameterCursor;
export type GetLmsUsersParameterCursor = typeof GetLmsUsersParameterCursor.infer;

export const GetLmsUsersParameterPageSize = __schemas.GetLmsUsersParameterPageSize;
export type GetLmsUsersParameterPageSize = typeof GetLmsUsersParameterPageSize.infer;

export const GetLmsUsersParameterUpdatedAfter = __schemas.GetLmsUsersParameterUpdatedAfter;
export type GetLmsUsersParameterUpdatedAfter = typeof GetLmsUsersParameterUpdatedAfter.infer;

export const GetLmsUsersParameterIncludeDeleted = __schemas.GetLmsUsersParameterIncludeDeleted;
export type GetLmsUsersParameterIncludeDeleted = typeof GetLmsUsersParameterIncludeDeleted.infer;

export const GetLmsUsersParameterIgnoreUnsupportedFilters = __schemas.GetLmsUsersParameterIgnoreUnsupportedFilters;
export type GetLmsUsersParameterIgnoreUnsupportedFilters = typeof GetLmsUsersParameterIgnoreUnsupportedFilters.infer;

export const GetLmsUsersParameterIds = __schemas.GetLmsUsersParameterIds;
export type GetLmsUsersParameterIds = typeof GetLmsUsersParameterIds.infer;

export const GetLmsUsersParameterRemoteIds = __schemas.GetLmsUsersParameterRemoteIds;
export type GetLmsUsersParameterRemoteIds = typeof GetLmsUsersParameterRemoteIds.infer;

export const GetLmsUsersParameterWorkEmails = __schemas.GetLmsUsersParameterWorkEmails;
export type GetLmsUsersParameterWorkEmails = typeof GetLmsUsersParameterWorkEmails.infer;

export const GetLmsUsersPositiveResponse = __schemas.GetLmsUsersPositiveResponse;
export type GetLmsUsersPositiveResponse = typeof GetLmsUsersPositiveResponse.infer;

export const GetLmsCourseProgressionsParameterCursor = __schemas.GetLmsCourseProgressionsParameterCursor;
export type GetLmsCourseProgressionsParameterCursor = typeof GetLmsCourseProgressionsParameterCursor.infer;

export const GetLmsCourseProgressionsParameterPageSize = __schemas.GetLmsCourseProgressionsParameterPageSize;
export type GetLmsCourseProgressionsParameterPageSize = typeof GetLmsCourseProgressionsParameterPageSize.infer;

export const GetLmsCourseProgressionsParameterUpdatedAfter = __schemas.GetLmsCourseProgressionsParameterUpdatedAfter;
export type GetLmsCourseProgressionsParameterUpdatedAfter = typeof GetLmsCourseProgressionsParameterUpdatedAfter.infer;

export const GetLmsCourseProgressionsParameterIncludeDeleted = __schemas.GetLmsCourseProgressionsParameterIncludeDeleted;
export type GetLmsCourseProgressionsParameterIncludeDeleted = typeof GetLmsCourseProgressionsParameterIncludeDeleted.infer;

export const GetLmsCourseProgressionsParameterIgnoreUnsupportedFilters = __schemas.GetLmsCourseProgressionsParameterIgnoreUnsupportedFilters;
export type GetLmsCourseProgressionsParameterIgnoreUnsupportedFilters = typeof GetLmsCourseProgressionsParameterIgnoreUnsupportedFilters.infer;

export const GetLmsCourseProgressionsParameterIds = __schemas.GetLmsCourseProgressionsParameterIds;
export type GetLmsCourseProgressionsParameterIds = typeof GetLmsCourseProgressionsParameterIds.infer;

export const GetLmsCourseProgressionsParameterRemoteIds = __schemas.GetLmsCourseProgressionsParameterRemoteIds;
export type GetLmsCourseProgressionsParameterRemoteIds = typeof GetLmsCourseProgressionsParameterRemoteIds.infer;

export const GetLmsCourseProgressionsParameterUserIds = __schemas.GetLmsCourseProgressionsParameterUserIds;
export type GetLmsCourseProgressionsParameterUserIds = typeof GetLmsCourseProgressionsParameterUserIds.infer;

export const GetLmsCourseProgressionsParameterCourseIds = __schemas.GetLmsCourseProgressionsParameterCourseIds;
export type GetLmsCourseProgressionsParameterCourseIds = typeof GetLmsCourseProgressionsParameterCourseIds.infer;

export const GetLmsCourseProgressionsPositiveResponse = __schemas.GetLmsCourseProgressionsPositiveResponse;
export type GetLmsCourseProgressionsPositiveResponse = typeof GetLmsCourseProgressionsPositiveResponse.infer;

export const PostLmsCourseProgressionsPositiveResponse = __schemas.PostLmsCourseProgressionsPositiveResponse;
export type PostLmsCourseProgressionsPositiveResponse = typeof PostLmsCourseProgressionsPositiveResponse.infer;

export const PostLmsCourseProgressionsRequestBody = __schemas.PostLmsCourseProgressionsRequestBody;
export type PostLmsCourseProgressionsRequestBody = typeof PostLmsCourseProgressionsRequestBody.infer;

export const PostLmsCourseProgressionsCourseProgressionIdCompleteParameterCourseProgressionId = __schemas.PostLmsCourseProgressionsCourseProgressionIdCompleteParameterCourseProgressionId;
export type PostLmsCourseProgressionsCourseProgressionIdCompleteParameterCourseProgressionId = typeof PostLmsCourseProgressionsCourseProgressionIdCompleteParameterCourseProgressionId.infer;

export const PostLmsCourseProgressionsCourseProgressionIdCompletePositiveResponse = __schemas.PostLmsCourseProgressionsCourseProgressionIdCompletePositiveResponse;
export type PostLmsCourseProgressionsCourseProgressionIdCompletePositiveResponse = typeof PostLmsCourseProgressionsCourseProgressionIdCompletePositiveResponse.infer;

export const PostLmsCourseProgressionsCourseProgressionIdCompleteRequestBody = __schemas.PostLmsCourseProgressionsCourseProgressionIdCompleteRequestBody;
export type PostLmsCourseProgressionsCourseProgressionIdCompleteRequestBody = typeof PostLmsCourseProgressionsCourseProgressionIdCompleteRequestBody.infer;

export const GetLmsCoursesParameterCursor = __schemas.GetLmsCoursesParameterCursor;
export type GetLmsCoursesParameterCursor = typeof GetLmsCoursesParameterCursor.infer;

export const GetLmsCoursesParameterPageSize = __schemas.GetLmsCoursesParameterPageSize;
export type GetLmsCoursesParameterPageSize = typeof GetLmsCoursesParameterPageSize.infer;

export const GetLmsCoursesParameterUpdatedAfter = __schemas.GetLmsCoursesParameterUpdatedAfter;
export type GetLmsCoursesParameterUpdatedAfter = typeof GetLmsCoursesParameterUpdatedAfter.infer;

export const GetLmsCoursesParameterIncludeDeleted = __schemas.GetLmsCoursesParameterIncludeDeleted;
export type GetLmsCoursesParameterIncludeDeleted = typeof GetLmsCoursesParameterIncludeDeleted.infer;

export const GetLmsCoursesParameterIgnoreUnsupportedFilters = __schemas.GetLmsCoursesParameterIgnoreUnsupportedFilters;
export type GetLmsCoursesParameterIgnoreUnsupportedFilters = typeof GetLmsCoursesParameterIgnoreUnsupportedFilters.infer;

export const GetLmsCoursesParameterIds = __schemas.GetLmsCoursesParameterIds;
export type GetLmsCoursesParameterIds = typeof GetLmsCoursesParameterIds.infer;

export const GetLmsCoursesParameterRemoteIds = __schemas.GetLmsCoursesParameterRemoteIds;
export type GetLmsCoursesParameterRemoteIds = typeof GetLmsCoursesParameterRemoteIds.infer;

export const GetLmsCoursesPositiveResponse = __schemas.GetLmsCoursesPositiveResponse;
export type GetLmsCoursesPositiveResponse = typeof GetLmsCoursesPositiveResponse.infer;

export const PostLmsCoursesBulkPositiveResponse = __schemas.PostLmsCoursesBulkPositiveResponse;
export type PostLmsCoursesBulkPositiveResponse = typeof PostLmsCoursesBulkPositiveResponse.infer;

export const PostLmsCoursesBulkRequestBody = __schemas.PostLmsCoursesBulkRequestBody;
export type PostLmsCoursesBulkRequestBody = typeof PostLmsCoursesBulkRequestBody.infer;

export const GetLmsCoursesBulkTaskIdParameterTaskId = __schemas.GetLmsCoursesBulkTaskIdParameterTaskId;
export type GetLmsCoursesBulkTaskIdParameterTaskId = typeof GetLmsCoursesBulkTaskIdParameterTaskId.infer;

export const GetLmsCoursesBulkTaskIdPositiveResponse = __schemas.GetLmsCoursesBulkTaskIdPositiveResponse;
export type GetLmsCoursesBulkTaskIdPositiveResponse = typeof GetLmsCoursesBulkTaskIdPositiveResponse.infer;

export const PostLmsCoursesCourseIdDeactivateParameterCourseId = __schemas.PostLmsCoursesCourseIdDeactivateParameterCourseId;
export type PostLmsCoursesCourseIdDeactivateParameterCourseId = typeof PostLmsCoursesCourseIdDeactivateParameterCourseId.infer;

export const PostLmsCoursesCourseIdDeactivatePositiveResponse = __schemas.PostLmsCoursesCourseIdDeactivatePositiveResponse;
export type PostLmsCoursesCourseIdDeactivatePositiveResponse = typeof PostLmsCoursesCourseIdDeactivatePositiveResponse.infer;

export const PostLmsCoursesCourseIdDeactivateRequestBody = __schemas.PostLmsCoursesCourseIdDeactivateRequestBody;
export type PostLmsCoursesCourseIdDeactivateRequestBody = typeof PostLmsCoursesCourseIdDeactivateRequestBody.infer;

export const GetLmsSkillsParameterCursor = __schemas.GetLmsSkillsParameterCursor;
export type GetLmsSkillsParameterCursor = typeof GetLmsSkillsParameterCursor.infer;

export const GetLmsSkillsParameterPageSize = __schemas.GetLmsSkillsParameterPageSize;
export type GetLmsSkillsParameterPageSize = typeof GetLmsSkillsParameterPageSize.infer;

export const GetLmsSkillsParameterUpdatedAfter = __schemas.GetLmsSkillsParameterUpdatedAfter;
export type GetLmsSkillsParameterUpdatedAfter = typeof GetLmsSkillsParameterUpdatedAfter.infer;

export const GetLmsSkillsParameterIncludeDeleted = __schemas.GetLmsSkillsParameterIncludeDeleted;
export type GetLmsSkillsParameterIncludeDeleted = typeof GetLmsSkillsParameterIncludeDeleted.infer;

export const GetLmsSkillsParameterIgnoreUnsupportedFilters = __schemas.GetLmsSkillsParameterIgnoreUnsupportedFilters;
export type GetLmsSkillsParameterIgnoreUnsupportedFilters = typeof GetLmsSkillsParameterIgnoreUnsupportedFilters.infer;

export const GetLmsSkillsParameterIds = __schemas.GetLmsSkillsParameterIds;
export type GetLmsSkillsParameterIds = typeof GetLmsSkillsParameterIds.infer;

export const GetLmsSkillsParameterRemoteIds = __schemas.GetLmsSkillsParameterRemoteIds;
export type GetLmsSkillsParameterRemoteIds = typeof GetLmsSkillsParameterRemoteIds.infer;

export const GetLmsSkillsPositiveResponse = __schemas.GetLmsSkillsPositiveResponse;
export type GetLmsSkillsPositiveResponse = typeof GetLmsSkillsPositiveResponse.infer;

export const PostAiApplyCareerSitesPositiveResponse = __schemas.PostAiApplyCareerSitesPositiveResponse;
export type PostAiApplyCareerSitesPositiveResponse = typeof PostAiApplyCareerSitesPositiveResponse.infer;

export const PostAiApplyCareerSitesRequestBody = __schemas.PostAiApplyCareerSitesRequestBody;
export type PostAiApplyCareerSitesRequestBody = typeof PostAiApplyCareerSitesRequestBody.infer;

export const GetAiApplyCareerSitesParameterCursor = __schemas.GetAiApplyCareerSitesParameterCursor;
export type GetAiApplyCareerSitesParameterCursor = typeof GetAiApplyCareerSitesParameterCursor.infer;

export const GetAiApplyCareerSitesParameterPageSize = __schemas.GetAiApplyCareerSitesParameterPageSize;
export type GetAiApplyCareerSitesParameterPageSize = typeof GetAiApplyCareerSitesParameterPageSize.infer;

export const GetAiApplyCareerSitesParameterIds = __schemas.GetAiApplyCareerSitesParameterIds;
export type GetAiApplyCareerSitesParameterIds = typeof GetAiApplyCareerSitesParameterIds.infer;

export const GetAiApplyCareerSitesPositiveResponse = __schemas.GetAiApplyCareerSitesPositiveResponse;
export type GetAiApplyCareerSitesPositiveResponse = typeof GetAiApplyCareerSitesPositiveResponse.infer;

export const GetAiApplyPostingsParameterCursor = __schemas.GetAiApplyPostingsParameterCursor;
export type GetAiApplyPostingsParameterCursor = typeof GetAiApplyPostingsParameterCursor.infer;

export const GetAiApplyPostingsParameterPageSize = __schemas.GetAiApplyPostingsParameterPageSize;
export type GetAiApplyPostingsParameterPageSize = typeof GetAiApplyPostingsParameterPageSize.infer;

export const GetAiApplyPostingsParameterIds = __schemas.GetAiApplyPostingsParameterIds;
export type GetAiApplyPostingsParameterIds = typeof GetAiApplyPostingsParameterIds.infer;

export const GetAiApplyPostingsParameterCareerSiteIds = __schemas.GetAiApplyPostingsParameterCareerSiteIds;
export type GetAiApplyPostingsParameterCareerSiteIds = typeof GetAiApplyPostingsParameterCareerSiteIds.infer;

export const GetAiApplyPostingsParameterJobCodes = __schemas.GetAiApplyPostingsParameterJobCodes;
export type GetAiApplyPostingsParameterJobCodes = typeof GetAiApplyPostingsParameterJobCodes.infer;

export const GetAiApplyPostingsPositiveResponse = __schemas.GetAiApplyPostingsPositiveResponse;
export type GetAiApplyPostingsPositiveResponse = typeof GetAiApplyPostingsPositiveResponse.infer;

export const PostAiApplyPostingsPositiveResponse = __schemas.PostAiApplyPostingsPositiveResponse;
export type PostAiApplyPostingsPositiveResponse = typeof PostAiApplyPostingsPositiveResponse.infer;

export const PostAiApplyPostingsRequestBody = __schemas.PostAiApplyPostingsRequestBody;
export type PostAiApplyPostingsRequestBody = typeof PostAiApplyPostingsRequestBody.infer;

export const PostAiApplyPostingsPostingIdInquireParameterPostingId = __schemas.PostAiApplyPostingsPostingIdInquireParameterPostingId;
export type PostAiApplyPostingsPostingIdInquireParameterPostingId = typeof PostAiApplyPostingsPostingIdInquireParameterPostingId.infer;

export const PostAiApplyPostingsPostingIdInquirePositiveResponse = __schemas.PostAiApplyPostingsPostingIdInquirePositiveResponse;
export type PostAiApplyPostingsPostingIdInquirePositiveResponse = typeof PostAiApplyPostingsPostingIdInquirePositiveResponse.infer;

export const PostAiApplyPostingsPostingIdInquireRequestBody = __schemas.PostAiApplyPostingsPostingIdInquireRequestBody;
export type PostAiApplyPostingsPostingIdInquireRequestBody = typeof PostAiApplyPostingsPostingIdInquireRequestBody.infer;

export const PostAiApplyApplyPositiveResponse = __schemas.PostAiApplyApplyPositiveResponse;
export type PostAiApplyApplyPositiveResponse = typeof PostAiApplyApplyPositiveResponse.infer;

export const PostAiApplyApplyRequestBody = __schemas.PostAiApplyApplyRequestBody;
export type PostAiApplyApplyRequestBody = typeof PostAiApplyApplyRequestBody.infer;

export const GetAiApplyApplicationsParameterCursor = __schemas.GetAiApplyApplicationsParameterCursor;
export type GetAiApplyApplicationsParameterCursor = typeof GetAiApplyApplicationsParameterCursor.infer;

export const GetAiApplyApplicationsParameterPageSize = __schemas.GetAiApplyApplicationsParameterPageSize;
export type GetAiApplyApplicationsParameterPageSize = typeof GetAiApplyApplicationsParameterPageSize.infer;

export const GetAiApplyApplicationsParameterIds = __schemas.GetAiApplyApplicationsParameterIds;
export type GetAiApplyApplicationsParameterIds = typeof GetAiApplyApplicationsParameterIds.infer;

export const GetAiApplyApplicationsParameterJobPostingIds = __schemas.GetAiApplyApplicationsParameterJobPostingIds;
export type GetAiApplyApplicationsParameterJobPostingIds = typeof GetAiApplyApplicationsParameterJobPostingIds.infer;

export const GetAiApplyApplicationsPositiveResponse = __schemas.GetAiApplyApplicationsPositiveResponse;
export type GetAiApplyApplicationsPositiveResponse = typeof GetAiApplyApplicationsPositiveResponse.infer;

export const GetAiApplyUnifiedApiJobsParameterCursor = __schemas.GetAiApplyUnifiedApiJobsParameterCursor;
export type GetAiApplyUnifiedApiJobsParameterCursor = typeof GetAiApplyUnifiedApiJobsParameterCursor.infer;

export const GetAiApplyUnifiedApiJobsParameterPageSize = __schemas.GetAiApplyUnifiedApiJobsParameterPageSize;
export type GetAiApplyUnifiedApiJobsParameterPageSize = typeof GetAiApplyUnifiedApiJobsParameterPageSize.infer;

export const GetAiApplyUnifiedApiJobsParameterIds = __schemas.GetAiApplyUnifiedApiJobsParameterIds;
export type GetAiApplyUnifiedApiJobsParameterIds = typeof GetAiApplyUnifiedApiJobsParameterIds.infer;

export const GetAiApplyUnifiedApiJobsParameterRemoteIds = __schemas.GetAiApplyUnifiedApiJobsParameterRemoteIds;
export type GetAiApplyUnifiedApiJobsParameterRemoteIds = typeof GetAiApplyUnifiedApiJobsParameterRemoteIds.infer;

export const GetAiApplyUnifiedApiJobsParameterJobCodes = __schemas.GetAiApplyUnifiedApiJobsParameterJobCodes;
export type GetAiApplyUnifiedApiJobsParameterJobCodes = typeof GetAiApplyUnifiedApiJobsParameterJobCodes.infer;

export const GetAiApplyUnifiedApiJobsParameterCareerSiteIds = __schemas.GetAiApplyUnifiedApiJobsParameterCareerSiteIds;
export type GetAiApplyUnifiedApiJobsParameterCareerSiteIds = typeof GetAiApplyUnifiedApiJobsParameterCareerSiteIds.infer;

export const GetAiApplyUnifiedApiJobsPositiveResponse = __schemas.GetAiApplyUnifiedApiJobsPositiveResponse;
export type GetAiApplyUnifiedApiJobsPositiveResponse = typeof GetAiApplyUnifiedApiJobsPositiveResponse.infer;

export const PostAiApplyUnifiedApiJobsJobIdApplicationsParameterJobId = __schemas.PostAiApplyUnifiedApiJobsJobIdApplicationsParameterJobId;
export type PostAiApplyUnifiedApiJobsJobIdApplicationsParameterJobId = typeof PostAiApplyUnifiedApiJobsJobIdApplicationsParameterJobId.infer;

export const PostAiApplyUnifiedApiJobsJobIdApplicationsPositiveResponse = __schemas.PostAiApplyUnifiedApiJobsJobIdApplicationsPositiveResponse;
export type PostAiApplyUnifiedApiJobsJobIdApplicationsPositiveResponse = typeof PostAiApplyUnifiedApiJobsJobIdApplicationsPositiveResponse.infer;

export const PostAiApplyUnifiedApiJobsJobIdApplicationsRequestBody = __schemas.PostAiApplyUnifiedApiJobsJobIdApplicationsRequestBody;
export type PostAiApplyUnifiedApiJobsJobIdApplicationsRequestBody = typeof PostAiApplyUnifiedApiJobsJobIdApplicationsRequestBody.infer;

export const GetAiApplyJobFeedsParameterCursor = __schemas.GetAiApplyJobFeedsParameterCursor;
export type GetAiApplyJobFeedsParameterCursor = typeof GetAiApplyJobFeedsParameterCursor.infer;

export const GetAiApplyJobFeedsParameterPageSize = __schemas.GetAiApplyJobFeedsParameterPageSize;
export type GetAiApplyJobFeedsParameterPageSize = typeof GetAiApplyJobFeedsParameterPageSize.infer;

export const GetAiApplyJobFeedsParameterIds = __schemas.GetAiApplyJobFeedsParameterIds;
export type GetAiApplyJobFeedsParameterIds = typeof GetAiApplyJobFeedsParameterIds.infer;

export const GetAiApplyJobFeedsPositiveResponse = __schemas.GetAiApplyJobFeedsPositiveResponse;
export type GetAiApplyJobFeedsPositiveResponse = typeof GetAiApplyJobFeedsPositiveResponse.infer;

export const PostAiApplyJobFeedsPositiveResponse = __schemas.PostAiApplyJobFeedsPositiveResponse;
export type PostAiApplyJobFeedsPositiveResponse = typeof PostAiApplyJobFeedsPositiveResponse.infer;

export const PostAiApplyJobFeedsRequestBody = __schemas.PostAiApplyJobFeedsRequestBody;
export type PostAiApplyJobFeedsRequestBody = typeof PostAiApplyJobFeedsRequestBody.infer;

export const PostConnectCreateLinkPositiveResponse = __schemas.PostConnectCreateLinkPositiveResponse;
export type PostConnectCreateLinkPositiveResponse = typeof PostConnectCreateLinkPositiveResponse.infer;

export const PostConnectCreateLinkRequestBody = __schemas.PostConnectCreateLinkRequestBody;
export type PostConnectCreateLinkRequestBody = typeof PostConnectCreateLinkRequestBody.infer;

export const GetConnectIntegrationByTokenTokenParameterToken = __schemas.GetConnectIntegrationByTokenTokenParameterToken;
export type GetConnectIntegrationByTokenTokenParameterToken = typeof GetConnectIntegrationByTokenTokenParameterToken.infer;

export const GetConnectIntegrationByTokenTokenPositiveResponse = __schemas.GetConnectIntegrationByTokenTokenPositiveResponse;
export type GetConnectIntegrationByTokenTokenPositiveResponse = typeof GetConnectIntegrationByTokenTokenPositiveResponse.infer;

export const PostConnectActivateIntegrationPositiveResponse = __schemas.PostConnectActivateIntegrationPositiveResponse;
export type PostConnectActivateIntegrationPositiveResponse = typeof PostConnectActivateIntegrationPositiveResponse.infer;

export const PostConnectActivateIntegrationRequestBody = __schemas.PostConnectActivateIntegrationRequestBody;
export type PostConnectActivateIntegrationRequestBody = typeof PostConnectActivateIntegrationRequestBody.infer;

export const GetCustomDatevSystemInformationPositiveResponse = __schemas.GetCustomDatevSystemInformationPositiveResponse;
export type GetCustomDatevSystemInformationPositiveResponse = typeof GetCustomDatevSystemInformationPositiveResponse.infer;

export const PostCustomDatevPassthroughPositiveResponse = __schemas.PostCustomDatevPassthroughPositiveResponse;
export type PostCustomDatevPassthroughPositiveResponse = typeof PostCustomDatevPassthroughPositiveResponse.infer;

export const PostCustomDatevPassthroughRequestBody = __schemas.PostCustomDatevPassthroughRequestBody;
export type PostCustomDatevPassthroughRequestBody = typeof PostCustomDatevPassthroughRequestBody.infer;

export const GetCustomDatevCheckEauPermissionPositiveResponse = __schemas.GetCustomDatevCheckEauPermissionPositiveResponse;
export type GetCustomDatevCheckEauPermissionPositiveResponse = typeof GetCustomDatevCheckEauPermissionPositiveResponse.infer;

export const GetCustomDatevEauRequestsEauIdParameterEauId = __schemas.GetCustomDatevEauRequestsEauIdParameterEauId;
export type GetCustomDatevEauRequestsEauIdParameterEauId = typeof GetCustomDatevEauRequestsEauIdParameterEauId.infer;

export const GetCustomDatevEauRequestsEauIdPositiveResponse = __schemas.GetCustomDatevEauRequestsEauIdPositiveResponse;
export type GetCustomDatevEauRequestsEauIdPositiveResponse = typeof GetCustomDatevEauRequestsEauIdPositiveResponse.infer;

export const GetCustomDatevCheckDocumentPermissionPositiveResponse = __schemas.GetCustomDatevCheckDocumentPermissionPositiveResponse;
export type GetCustomDatevCheckDocumentPermissionPositiveResponse = typeof GetCustomDatevCheckDocumentPermissionPositiveResponse.infer;

export const GetCustomDatevAvailableDocumentsParameterPeriod = __schemas.GetCustomDatevAvailableDocumentsParameterPeriod;
export type GetCustomDatevAvailableDocumentsParameterPeriod = typeof GetCustomDatevAvailableDocumentsParameterPeriod.infer;

export const GetCustomDatevAvailableDocumentsPositiveResponse = __schemas.GetCustomDatevAvailableDocumentsPositiveResponse;
export type GetCustomDatevAvailableDocumentsPositiveResponse = typeof GetCustomDatevAvailableDocumentsPositiveResponse.infer;

export const PostCustomDatevDownloadDocumentPositiveResponse = __schemas.PostCustomDatevDownloadDocumentPositiveResponse;
export type PostCustomDatevDownloadDocumentPositiveResponse = typeof PostCustomDatevDownloadDocumentPositiveResponse.infer;

export const PostCustomDatevDownloadDocumentRequestBody = __schemas.PostCustomDatevDownloadDocumentRequestBody;
export type PostCustomDatevDownloadDocumentRequestBody = typeof PostCustomDatevDownloadDocumentRequestBody.infer;

export const PostCustomDatevEmployeesEmployeeIdDownloadDocumentParameterEmployeeId = __schemas.PostCustomDatevEmployeesEmployeeIdDownloadDocumentParameterEmployeeId;
export type PostCustomDatevEmployeesEmployeeIdDownloadDocumentParameterEmployeeId = typeof PostCustomDatevEmployeesEmployeeIdDownloadDocumentParameterEmployeeId.infer;

export const PostCustomDatevEmployeesEmployeeIdDownloadDocumentPositiveResponse = __schemas.PostCustomDatevEmployeesEmployeeIdDownloadDocumentPositiveResponse;
export type PostCustomDatevEmployeesEmployeeIdDownloadDocumentPositiveResponse = typeof PostCustomDatevEmployeesEmployeeIdDownloadDocumentPositiveResponse.infer;

export const PostCustomDatevEmployeesEmployeeIdDownloadDocumentRequestBody = __schemas.PostCustomDatevEmployeesEmployeeIdDownloadDocumentRequestBody;
export type PostCustomDatevEmployeesEmployeeIdDownloadDocumentRequestBody = typeof PostCustomDatevEmployeesEmployeeIdDownloadDocumentRequestBody.infer;

export const PostCustomDatevEmployeesEmployeeIdEauRequestsParameterEmployeeId = __schemas.PostCustomDatevEmployeesEmployeeIdEauRequestsParameterEmployeeId;
export type PostCustomDatevEmployeesEmployeeIdEauRequestsParameterEmployeeId = typeof PostCustomDatevEmployeesEmployeeIdEauRequestsParameterEmployeeId.infer;

export const PostCustomDatevEmployeesEmployeeIdEauRequestsPositiveResponse = __schemas.PostCustomDatevEmployeesEmployeeIdEauRequestsPositiveResponse;
export type PostCustomDatevEmployeesEmployeeIdEauRequestsPositiveResponse = typeof PostCustomDatevEmployeesEmployeeIdEauRequestsPositiveResponse.infer;

export const PostCustomDatevEmployeesEmployeeIdEauRequestsRequestBody = __schemas.PostCustomDatevEmployeesEmployeeIdEauRequestsRequestBody;
export type PostCustomDatevEmployeesEmployeeIdEauRequestsRequestBody = typeof PostCustomDatevEmployeesEmployeeIdEauRequestsRequestBody.infer;

export const PutCustomDatevEmployeesEmployeeIdPreparePayrollParameterEmployeeId = __schemas.PutCustomDatevEmployeesEmployeeIdPreparePayrollParameterEmployeeId;
export type PutCustomDatevEmployeesEmployeeIdPreparePayrollParameterEmployeeId = typeof PutCustomDatevEmployeesEmployeeIdPreparePayrollParameterEmployeeId.infer;

export const PutCustomDatevEmployeesEmployeeIdPreparePayrollPositiveResponse = __schemas.PutCustomDatevEmployeesEmployeeIdPreparePayrollPositiveResponse;
export type PutCustomDatevEmployeesEmployeeIdPreparePayrollPositiveResponse = typeof PutCustomDatevEmployeesEmployeeIdPreparePayrollPositiveResponse.infer;

export const PutCustomDatevEmployeesEmployeeIdPreparePayrollRequestBody = __schemas.PutCustomDatevEmployeesEmployeeIdPreparePayrollRequestBody;
export type PutCustomDatevEmployeesEmployeeIdPreparePayrollRequestBody = typeof PutCustomDatevEmployeesEmployeeIdPreparePayrollRequestBody.infer;

export const PutCustomDatevEmployeesEmployeeIdCompensationsParameterEmployeeId = __schemas.PutCustomDatevEmployeesEmployeeIdCompensationsParameterEmployeeId;
export type PutCustomDatevEmployeesEmployeeIdCompensationsParameterEmployeeId = typeof PutCustomDatevEmployeesEmployeeIdCompensationsParameterEmployeeId.infer;

export const PutCustomDatevEmployeesEmployeeIdCompensationsPositiveResponse = __schemas.PutCustomDatevEmployeesEmployeeIdCompensationsPositiveResponse;
export type PutCustomDatevEmployeesEmployeeIdCompensationsPositiveResponse = typeof PutCustomDatevEmployeesEmployeeIdCompensationsPositiveResponse.infer;

export const PutCustomDatevEmployeesEmployeeIdCompensationsRequestBody = __schemas.PutCustomDatevEmployeesEmployeeIdCompensationsRequestBody;
export type PutCustomDatevEmployeesEmployeeIdCompensationsRequestBody = typeof PutCustomDatevEmployeesEmployeeIdCompensationsRequestBody.infer;

export const GetCustomDatevCheckWritePermissionPositiveResponse = __schemas.GetCustomDatevCheckWritePermissionPositiveResponse;
export type GetCustomDatevCheckWritePermissionPositiveResponse = typeof GetCustomDatevCheckWritePermissionPositiveResponse.infer;

export const GetCustomDatevDataPushesPositiveResponse = __schemas.GetCustomDatevDataPushesPositiveResponse;
export type GetCustomDatevDataPushesPositiveResponse = typeof GetCustomDatevDataPushesPositiveResponse.infer;

export const PostCustomDatevPushDataGeneralPositiveResponse = __schemas.PostCustomDatevPushDataGeneralPositiveResponse;
export type PostCustomDatevPushDataGeneralPositiveResponse = typeof PostCustomDatevPushDataGeneralPositiveResponse.infer;

export const PostCustomDatevPushDataGeneralRequestBody = __schemas.PostCustomDatevPushDataGeneralRequestBody;
export type PostCustomDatevPushDataGeneralRequestBody = typeof PostCustomDatevPushDataGeneralRequestBody.infer;

export const PostCustomDatevPushDataPayrollPositiveResponse = __schemas.PostCustomDatevPushDataPayrollPositiveResponse;
export type PostCustomDatevPushDataPayrollPositiveResponse = typeof PostCustomDatevPushDataPayrollPositiveResponse.infer;

export const PostCustomDatevPushDataPayrollRequestBody = __schemas.PostCustomDatevPushDataPayrollRequestBody;
export type PostCustomDatevPushDataPayrollRequestBody = typeof PostCustomDatevPushDataPayrollRequestBody.infer;

export const PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsParameterEmployeeId = __schemas.PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsParameterEmployeeId;
export type PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsParameterEmployeeId = typeof PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsParameterEmployeeId.infer;

export const PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsPositiveResponse = __schemas.PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsPositiveResponse;
export type PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsPositiveResponse = typeof PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsPositiveResponse.infer;

export const PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsRequestBody = __schemas.PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsRequestBody;
export type PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsRequestBody = typeof PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsRequestBody.infer;

export const DataChangedWebhookPayload = __schemas.DataChangedWebhookPayload;
export type DataChangedWebhookPayload = typeof DataChangedWebhookPayload.infer;

export const ConnectionFlowFailedWebhookPayload = __schemas.ConnectionFlowFailedWebhookPayload;
export type ConnectionFlowFailedWebhookPayload = typeof ConnectionFlowFailedWebhookPayload.infer;

export const IntegrationCreatedWebhookPayload = __schemas.IntegrationCreatedWebhookPayload;
export type IntegrationCreatedWebhookPayload = typeof IntegrationCreatedWebhookPayload.infer;

export const IntegrationDeletedWebhookPayload = __schemas.IntegrationDeletedWebhookPayload;
export type IntegrationDeletedWebhookPayload = typeof IntegrationDeletedWebhookPayload.infer;

export const AssessmentOrderReceivedWebhookPayload = __schemas.AssessmentOrderReceivedWebhookPayload;
export type AssessmentOrderReceivedWebhookPayload = typeof AssessmentOrderReceivedWebhookPayload.infer;

export const InlineAssessmentOrderReceivedWebhookPayload = __schemas.InlineAssessmentOrderReceivedWebhookPayload;
export type InlineAssessmentOrderReceivedWebhookPayload = typeof InlineAssessmentOrderReceivedWebhookPayload.infer;

export const IntegrationStateChangedWebhookPayload = __schemas.IntegrationStateChangedWebhookPayload;
export type IntegrationStateChangedWebhookPayload = typeof IntegrationStateChangedWebhookPayload.infer;

export const AiApplyApplicationStatusUpdatedWebhookPayload = __schemas.AiApplyApplicationStatusUpdatedWebhookPayload;
export type AiApplyApplicationStatusUpdatedWebhookPayload = typeof AiApplyApplicationStatusUpdatedWebhookPayload.infer;

export const AiApplyJobPostingStatusUpdatedWebhookPayload = __schemas.AiApplyJobPostingStatusUpdatedWebhookPayload;
export type AiApplyJobPostingStatusUpdatedWebhookPayload = typeof AiApplyJobPostingStatusUpdatedWebhookPayload.infer;

export const SyncFinishedWebhookPayload = __schemas.SyncFinishedWebhookPayload;
export type SyncFinishedWebhookPayload = typeof SyncFinishedWebhookPayload.infer;

export const BulkImportJobPostingLocation = __schemas.BulkImportJobPostingLocation;
export type BulkImportJobPostingLocation = typeof BulkImportJobPostingLocation.infer;

export const BulkImportJobPostingInput = __schemas.BulkImportJobPostingInput;
export type BulkImportJobPostingInput = typeof BulkImportJobPostingInput.infer;

export const BulkImportResponse = __schemas.BulkImportResponse;
export type BulkImportResponse = typeof BulkImportResponse.infer;
// </Schemas>

// <Endpoints>
export type get_GetCheckApiKey = typeof get_GetCheckApiKey;
export const get_GetCheckApiKey = {
  method: type("'GET'"),
  path: type("'/check-api-key'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: type("never"),
  responses: { 200: GetCheckApiKeyPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type post_PostForceSync = typeof post_PostForceSync;
export const post_PostForceSync = {
  method: type("'POST'"),
  path: type("'/force-sync'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { header: type({ "X-Integration-Id": type("string") }), body: PostForceSyncRequestBody },
  responses: { 200: PostForceSyncPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type post_PostPassthroughToolApi = typeof post_PostPassthroughToolApi;
export const post_PostPassthroughToolApi = {
  method: type("'POST'"),
  path: type("'/passthrough/{tool}/{api}'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ tool: PostPassthroughToolApiParameterTool, api: PostPassthroughToolApiParameterApi }), header: type({ "X-Integration-Id": type("string") }), body: PostPassthroughToolApiRequestBody },
  responses: { 200: PostPassthroughToolApiPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type delete_DeleteIntegrationsIntegrationId = typeof delete_DeleteIntegrationsIntegrationId;
export const delete_DeleteIntegrationsIntegrationId = {
  method: type("'DELETE'"),
  path: type("'/integrations/{integration_id}'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ integration_id: DeleteIntegrationsIntegrationIdParameterIntegrationId }), body: DeleteIntegrationsIntegrationIdRequestBody },
  responses: { 200: DeleteIntegrationsIntegrationIdPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type get_GetIntegrationsIntegrationId = typeof get_GetIntegrationsIntegrationId;
export const get_GetIntegrationsIntegrationId = {
  method: type("'GET'"),
  path: type("'/integrations/{integration_id}'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ integration_id: GetIntegrationsIntegrationIdParameterIntegrationId }) },
  responses: { 200: GetIntegrationsIntegrationIdPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type put_PutIntegrationsIntegrationIdEnabled = typeof put_PutIntegrationsIntegrationIdEnabled;
export const put_PutIntegrationsIntegrationIdEnabled = {
  method: type("'PUT'"),
  path: type("'/integrations/{integration_id}/enabled'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ integration_id: PutIntegrationsIntegrationIdEnabledParameterIntegrationId }), body: PutIntegrationsIntegrationIdEnabledRequestBody },
  responses: { 200: PutIntegrationsIntegrationIdEnabledPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type post_PostIntegrationsIntegrationIdRelink = typeof post_PostIntegrationsIntegrationIdRelink;
export const post_PostIntegrationsIntegrationIdRelink = {
  method: type("'POST'"),
  path: type("'/integrations/{integration_id}/relink'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ integration_id: PostIntegrationsIntegrationIdRelinkParameterIntegrationId }), body: PostIntegrationsIntegrationIdRelinkRequestBody },
  responses: { 200: PostIntegrationsIntegrationIdRelinkPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type post_PostIntegrationsIntegrationIdSetupLink = typeof post_PostIntegrationsIntegrationIdSetupLink;
export const post_PostIntegrationsIntegrationIdSetupLink = {
  method: type("'POST'"),
  path: type("'/integrations/{integration_id}/setup-link'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ integration_id: PostIntegrationsIntegrationIdSetupLinkParameterIntegrationId }), body: PostIntegrationsIntegrationIdSetupLinkRequestBody },
  responses: { 200: PostIntegrationsIntegrationIdSetupLinkPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type get_GetIntegrationsIntegrationIdIntegrationFields = typeof get_GetIntegrationsIntegrationIdIntegrationFields;
export const get_GetIntegrationsIntegrationIdIntegrationFields = {
  method: type("'GET'"),
  path: type("'/integrations/{integration_id}/integration-fields'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ cursor: GetIntegrationsIntegrationIdIntegrationFieldsParameterCursor, page_size: GetIntegrationsIntegrationIdIntegrationFieldsParameterPageSize }).partial().optional(), path: type({ integration_id: GetIntegrationsIntegrationIdIntegrationFieldsParameterIntegrationId }) },
  responses: { 200: GetIntegrationsIntegrationIdIntegrationFieldsPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type patch_PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldId = typeof patch_PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldId;
export const patch_PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldId = {
  method: type("'PATCH'"),
  path: type("'/integrations/{integration_id}/integration-fields/{integration_field_id}'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ integration_id: PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationId, integration_field_id: PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationFieldId }), body: PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdRequestBody },
  responses: { 200: PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type get_GetIntegrationsIntegrationIdCustomFields = typeof get_GetIntegrationsIntegrationIdCustomFields;
export const get_GetIntegrationsIntegrationIdCustomFields = {
  method: type("'GET'"),
  path: type("'/integrations/{integration_id}/custom-fields'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ cursor: GetIntegrationsIntegrationIdCustomFieldsParameterCursor, page_size: GetIntegrationsIntegrationIdCustomFieldsParameterPageSize }).partial().optional(), path: type({ integration_id: GetIntegrationsIntegrationIdCustomFieldsParameterIntegrationId }) },
  responses: { 200: GetIntegrationsIntegrationIdCustomFieldsPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type put_PutIntegrationsIntegrationIdCustomFieldsCustomFieldId = typeof put_PutIntegrationsIntegrationIdCustomFieldsCustomFieldId;
export const put_PutIntegrationsIntegrationIdCustomFieldsCustomFieldId = {
  method: type("'PUT'"),
  path: type("'/integrations/{integration_id}/custom-fields/{custom_field_id}'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ integration_id: PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterIntegrationId, custom_field_id: PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterCustomFieldId }), body: PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdRequestBody },
  responses: { 200: PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type get_GetToolsCategory = typeof get_GetToolsCategory;
export const get_GetToolsCategory = {
  method: type("'GET'"),
  path: type("'/tools/{category}'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ category: GetToolsCategoryParameterCategory }) },
  responses: { 200: GetToolsCategoryPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type post_PostHrisProvisioningGroupsGroupIdDiff = typeof post_PostHrisProvisioningGroupsGroupIdDiff;
export const post_PostHrisProvisioningGroupsGroupIdDiff = {
  method: type("'POST'"),
  path: type("'/hris/provisioning-groups/{group_id}/diff'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ group_id: PostHrisProvisioningGroupsGroupIdDiffParameterGroupId }), header: type({ "X-Integration-Id": type("string") }), body: PostHrisProvisioningGroupsGroupIdDiffRequestBody },
  responses: { 200: PostHrisProvisioningGroupsGroupIdDiffPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type post_PostHrisProvisioningGroupsGroupIdSetupLinks = typeof post_PostHrisProvisioningGroupsGroupIdSetupLinks;
export const post_PostHrisProvisioningGroupsGroupIdSetupLinks = {
  method: type("'POST'"),
  path: type("'/hris/provisioning-groups/{group_id}/setup-links'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ group_id: PostHrisProvisioningGroupsGroupIdSetupLinksParameterGroupId }), header: type({ "X-Integration-Id": type("string") }), body: PostHrisProvisioningGroupsGroupIdSetupLinksRequestBody },
  responses: { 200: PostHrisProvisioningGroupsGroupIdSetupLinksPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type get_GetHrisEmployees = typeof get_GetHrisEmployees;
export const get_GetHrisEmployees = {
  method: type("'GET'"),
  path: type("'/hris/employees'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ cursor: GetHrisEmployeesParameterCursor, page_size: GetHrisEmployeesParameterPageSize, updated_after: GetHrisEmployeesParameterUpdatedAfter, include_deleted: GetHrisEmployeesParameterIncludeDeleted, ignore_unsupported_filters: GetHrisEmployeesParameterIgnoreUnsupportedFilters, ids: GetHrisEmployeesParameterIds, remote_ids: GetHrisEmployeesParameterRemoteIds, employment_status: GetHrisEmployeesParameterEmploymentStatus, employment_statuses: GetHrisEmployeesParameterEmploymentStatuses, group_ids: GetHrisEmployeesParameterGroupIds, legal_entity_ids: GetHrisEmployeesParameterLegalEntityIds, work_location_ids: GetHrisEmployeesParameterWorkLocationIds, work_emails: GetHrisEmployeesParameterWorkEmails, personal_emails: GetHrisEmployeesParameterPersonalEmails, custom_fields: GetHrisEmployeesParameterCustomFields }).partial().optional(), header: type({ "X-Integration-Id": type("string") }) },
  responses: { 200: GetHrisEmployeesPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type post_PostHrisEmployees = typeof post_PostHrisEmployees;
export const post_PostHrisEmployees = {
  method: type("'POST'"),
  path: type("'/hris/employees'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { header: type({ "X-Integration-Id": type("string") }), body: PostHrisEmployeesRequestBody },
  responses: { 200: PostHrisEmployeesPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type get_GetHrisEmployeesForm = typeof get_GetHrisEmployeesForm;
export const get_GetHrisEmployeesForm = {
  method: type("'GET'"),
  path: type("'/hris/employees/form'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { header: type({ "X-Integration-Id": type("string") }) },
  responses: { 200: GetHrisEmployeesFormPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type post_PostHrisEmployeesForm = typeof post_PostHrisEmployeesForm;
export const post_PostHrisEmployeesForm = {
  method: type("'POST'"),
  path: type("'/hris/employees/form'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { header: type({ "X-Integration-Id": type("string") }), body: PostHrisEmployeesFormRequestBody },
  responses: { 200: PostHrisEmployeesFormPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type patch_PatchHrisEmployeesEmployeeId = typeof patch_PatchHrisEmployeesEmployeeId;
export const patch_PatchHrisEmployeesEmployeeId = {
  method: type("'PATCH'"),
  path: type("'/hris/employees/{employee_id}'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ employee_id: PatchHrisEmployeesEmployeeIdParameterEmployeeId }), header: type({ "X-Integration-Id": type("string") }), body: PatchHrisEmployeesEmployeeIdRequestBody },
  responses: { 200: PatchHrisEmployeesEmployeeIdPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type post_PostHrisEmployeesEmployeeIdDocuments = typeof post_PostHrisEmployeesEmployeeIdDocuments;
export const post_PostHrisEmployeesEmployeeIdDocuments = {
  method: type("'POST'"),
  path: type("'/hris/employees/{employee_id}/documents'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ employee_id: PostHrisEmployeesEmployeeIdDocumentsParameterEmployeeId }), header: type({ "X-Integration-Id": type("string") }), body: PostHrisEmployeesEmployeeIdDocumentsRequestBody },
  responses: { 200: PostHrisEmployeesEmployeeIdDocumentsPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type get_GetHrisEmployeeDocumentCategories = typeof get_GetHrisEmployeeDocumentCategories;
export const get_GetHrisEmployeeDocumentCategories = {
  method: type("'GET'"),
  path: type("'/hris/employee-document-categories'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ cursor: GetHrisEmployeeDocumentCategoriesParameterCursor, page_size: GetHrisEmployeeDocumentCategoriesParameterPageSize, updated_after: GetHrisEmployeeDocumentCategoriesParameterUpdatedAfter, include_deleted: GetHrisEmployeeDocumentCategoriesParameterIncludeDeleted, ignore_unsupported_filters: GetHrisEmployeeDocumentCategoriesParameterIgnoreUnsupportedFilters, ids: GetHrisEmployeeDocumentCategoriesParameterIds, remote_ids: GetHrisEmployeeDocumentCategoriesParameterRemoteIds }).partial().optional(), header: type({ "X-Integration-Id": type("string") }) },
  responses: { 200: GetHrisEmployeeDocumentCategoriesPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type get_GetHrisTeams = typeof get_GetHrisTeams;
export const get_GetHrisTeams = {
  method: type("'GET'"),
  path: type("'/hris/teams'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ cursor: GetHrisTeamsParameterCursor, page_size: GetHrisTeamsParameterPageSize, updated_after: GetHrisTeamsParameterUpdatedAfter, include_deleted: GetHrisTeamsParameterIncludeDeleted, ignore_unsupported_filters: GetHrisTeamsParameterIgnoreUnsupportedFilters, ids: GetHrisTeamsParameterIds, remote_ids: GetHrisTeamsParameterRemoteIds }).partial().optional(), header: type({ "X-Integration-Id": type("string") }) },
  responses: { 200: GetHrisTeamsPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type get_GetHrisGroups = typeof get_GetHrisGroups;
export const get_GetHrisGroups = {
  method: type("'GET'"),
  path: type("'/hris/groups'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ cursor: GetHrisGroupsParameterCursor, page_size: GetHrisGroupsParameterPageSize, updated_after: GetHrisGroupsParameterUpdatedAfter, include_deleted: GetHrisGroupsParameterIncludeDeleted, ignore_unsupported_filters: GetHrisGroupsParameterIgnoreUnsupportedFilters, ids: GetHrisGroupsParameterIds, remote_ids: GetHrisGroupsParameterRemoteIds, types: GetHrisGroupsParameterTypes, name_contains: GetHrisGroupsParameterNameContains }).partial().optional(), header: type({ "X-Integration-Id": type("string") }) },
  responses: { 200: GetHrisGroupsPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type get_GetHrisEmployments = typeof get_GetHrisEmployments;
export const get_GetHrisEmployments = {
  method: type("'GET'"),
  path: type("'/hris/employments'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ cursor: GetHrisEmploymentsParameterCursor, page_size: GetHrisEmploymentsParameterPageSize, updated_after: GetHrisEmploymentsParameterUpdatedAfter, include_deleted: GetHrisEmploymentsParameterIncludeDeleted, ignore_unsupported_filters: GetHrisEmploymentsParameterIgnoreUnsupportedFilters, ids: GetHrisEmploymentsParameterIds, remote_ids: GetHrisEmploymentsParameterRemoteIds }).partial().optional(), header: type({ "X-Integration-Id": type("string") }) },
  responses: { 200: GetHrisEmploymentsPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type get_GetHrisLocations = typeof get_GetHrisLocations;
export const get_GetHrisLocations = {
  method: type("'GET'"),
  path: type("'/hris/locations'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ cursor: GetHrisLocationsParameterCursor, page_size: GetHrisLocationsParameterPageSize, updated_after: GetHrisLocationsParameterUpdatedAfter, include_deleted: GetHrisLocationsParameterIncludeDeleted, ignore_unsupported_filters: GetHrisLocationsParameterIgnoreUnsupportedFilters, ids: GetHrisLocationsParameterIds, remote_ids: GetHrisLocationsParameterRemoteIds, name_contains: GetHrisLocationsParameterNameContains }).partial().optional(), header: type({ "X-Integration-Id": type("string") }) },
  responses: { 200: GetHrisLocationsPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type get_GetHrisAbsenceTypes = typeof get_GetHrisAbsenceTypes;
export const get_GetHrisAbsenceTypes = {
  method: type("'GET'"),
  path: type("'/hris/absence-types'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ cursor: GetHrisAbsenceTypesParameterCursor, page_size: GetHrisAbsenceTypesParameterPageSize, updated_after: GetHrisAbsenceTypesParameterUpdatedAfter, include_deleted: GetHrisAbsenceTypesParameterIncludeDeleted, ignore_unsupported_filters: GetHrisAbsenceTypesParameterIgnoreUnsupportedFilters, ids: GetHrisAbsenceTypesParameterIds, remote_ids: GetHrisAbsenceTypesParameterRemoteIds }).partial().optional(), header: type({ "X-Integration-Id": type("string") }) },
  responses: { 200: GetHrisAbsenceTypesPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type get_GetHrisTimeOffBalances = typeof get_GetHrisTimeOffBalances;
export const get_GetHrisTimeOffBalances = {
  method: type("'GET'"),
  path: type("'/hris/time-off-balances'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ cursor: GetHrisTimeOffBalancesParameterCursor, page_size: GetHrisTimeOffBalancesParameterPageSize, updated_after: GetHrisTimeOffBalancesParameterUpdatedAfter, include_deleted: GetHrisTimeOffBalancesParameterIncludeDeleted, ignore_unsupported_filters: GetHrisTimeOffBalancesParameterIgnoreUnsupportedFilters, ids: GetHrisTimeOffBalancesParameterIds, remote_ids: GetHrisTimeOffBalancesParameterRemoteIds, employee_id: GetHrisTimeOffBalancesParameterEmployeeId }).partial().optional(), header: type({ "X-Integration-Id": type("string") }) },
  responses: { 200: GetHrisTimeOffBalancesPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type get_GetHrisAbsences = typeof get_GetHrisAbsences;
export const get_GetHrisAbsences = {
  method: type("'GET'"),
  path: type("'/hris/absences'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ cursor: GetHrisAbsencesParameterCursor, page_size: GetHrisAbsencesParameterPageSize, updated_after: GetHrisAbsencesParameterUpdatedAfter, include_deleted: GetHrisAbsencesParameterIncludeDeleted, ignore_unsupported_filters: GetHrisAbsencesParameterIgnoreUnsupportedFilters, ids: GetHrisAbsencesParameterIds, remote_ids: GetHrisAbsencesParameterRemoteIds, date_from: GetHrisAbsencesParameterDateFrom, date_until: GetHrisAbsencesParameterDateUntil, type_ids: GetHrisAbsencesParameterTypeIds, employee_id: GetHrisAbsencesParameterEmployeeId, time_from: GetHrisAbsencesParameterTimeFrom, time_until: GetHrisAbsencesParameterTimeUntil }).partial().optional(), header: type({ "X-Integration-Id": type("string") }) },
  responses: { 200: GetHrisAbsencesPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type post_PostHrisAbsences = typeof post_PostHrisAbsences;
export const post_PostHrisAbsences = {
  method: type("'POST'"),
  path: type("'/hris/absences'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { header: type({ "X-Integration-Id": type("string") }), body: PostHrisAbsencesRequestBody },
  responses: { 200: PostHrisAbsencesPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type delete_DeleteHrisAbsencesAbsenceId = typeof delete_DeleteHrisAbsencesAbsenceId;
export const delete_DeleteHrisAbsencesAbsenceId = {
  method: type("'DELETE'"),
  path: type("'/hris/absences/{absence_id}'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ absence_id: DeleteHrisAbsencesAbsenceIdParameterAbsenceId }), header: type({ "X-Integration-Id": type("string") }), body: DeleteHrisAbsencesAbsenceIdRequestBody },
  responses: { 200: DeleteHrisAbsencesAbsenceIdPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type get_GetHrisLegalEntities = typeof get_GetHrisLegalEntities;
export const get_GetHrisLegalEntities = {
  method: type("'GET'"),
  path: type("'/hris/legal-entities'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ cursor: GetHrisLegalEntitiesParameterCursor, page_size: GetHrisLegalEntitiesParameterPageSize, updated_after: GetHrisLegalEntitiesParameterUpdatedAfter, include_deleted: GetHrisLegalEntitiesParameterIncludeDeleted, ignore_unsupported_filters: GetHrisLegalEntitiesParameterIgnoreUnsupportedFilters, ids: GetHrisLegalEntitiesParameterIds, remote_ids: GetHrisLegalEntitiesParameterRemoteIds, name_contains: GetHrisLegalEntitiesParameterNameContains }).partial().optional(), header: type({ "X-Integration-Id": type("string") }) },
  responses: { 200: GetHrisLegalEntitiesPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type get_GetHrisTimesheets = typeof get_GetHrisTimesheets;
export const get_GetHrisTimesheets = {
  method: type("'GET'"),
  path: type("'/hris/timesheets'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ cursor: GetHrisTimesheetsParameterCursor, page_size: GetHrisTimesheetsParameterPageSize, updated_after: GetHrisTimesheetsParameterUpdatedAfter, include_deleted: GetHrisTimesheetsParameterIncludeDeleted, ignore_unsupported_filters: GetHrisTimesheetsParameterIgnoreUnsupportedFilters, ids: GetHrisTimesheetsParameterIds, remote_ids: GetHrisTimesheetsParameterRemoteIds, employee_id: GetHrisTimesheetsParameterEmployeeId, started_before: GetHrisTimesheetsParameterStartedBefore, started_after: GetHrisTimesheetsParameterStartedAfter, ended_before: GetHrisTimesheetsParameterEndedBefore, ended_after: GetHrisTimesheetsParameterEndedAfter }).partial().optional(), header: type({ "X-Integration-Id": type("string") }) },
  responses: { 200: GetHrisTimesheetsPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type get_GetHrisPerformanceReviewCycles = typeof get_GetHrisPerformanceReviewCycles;
export const get_GetHrisPerformanceReviewCycles = {
  method: type("'GET'"),
  path: type("'/hris/performance-review-cycles'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ cursor: GetHrisPerformanceReviewCyclesParameterCursor, page_size: GetHrisPerformanceReviewCyclesParameterPageSize, updated_after: GetHrisPerformanceReviewCyclesParameterUpdatedAfter, include_deleted: GetHrisPerformanceReviewCyclesParameterIncludeDeleted, ignore_unsupported_filters: GetHrisPerformanceReviewCyclesParameterIgnoreUnsupportedFilters, ids: GetHrisPerformanceReviewCyclesParameterIds, remote_ids: GetHrisPerformanceReviewCyclesParameterRemoteIds }).partial().optional(), header: type({ "X-Integration-Id": type("string") }) },
  responses: { 200: GetHrisPerformanceReviewCyclesPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type get_GetHrisPerformanceReviews = typeof get_GetHrisPerformanceReviews;
export const get_GetHrisPerformanceReviews = {
  method: type("'GET'"),
  path: type("'/hris/performance-reviews'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ cursor: GetHrisPerformanceReviewsParameterCursor, page_size: GetHrisPerformanceReviewsParameterPageSize, updated_after: GetHrisPerformanceReviewsParameterUpdatedAfter, include_deleted: GetHrisPerformanceReviewsParameterIncludeDeleted, ignore_unsupported_filters: GetHrisPerformanceReviewsParameterIgnoreUnsupportedFilters, ids: GetHrisPerformanceReviewsParameterIds, remote_ids: GetHrisPerformanceReviewsParameterRemoteIds, types: GetHrisPerformanceReviewsParameterTypes, review_cycle_ids: GetHrisPerformanceReviewsParameterReviewCycleIds, reviewee_ids: GetHrisPerformanceReviewsParameterRevieweeIds }).partial().optional(), header: type({ "X-Integration-Id": type("string") }) },
  responses: { 200: GetHrisPerformanceReviewsPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type get_GetHrisSkills = typeof get_GetHrisSkills;
export const get_GetHrisSkills = {
  method: type("'GET'"),
  path: type("'/hris/skills'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ ids: GetHrisSkillsParameterIds, remote_ids: GetHrisSkillsParameterRemoteIds, name_contains: GetHrisSkillsParameterNameContains }).partial().optional(), header: type({ "X-Integration-Id": type("string") }) },
  responses: { 200: GetHrisSkillsPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type post_PostHrisSkills = typeof post_PostHrisSkills;
export const post_PostHrisSkills = {
  method: type("'POST'"),
  path: type("'/hris/skills'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { header: type({ "X-Integration-Id": type("string") }), body: PostHrisSkillsRequestBody },
  responses: { 200: PostHrisSkillsPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type patch_PatchHrisSkillsSkillId = typeof patch_PatchHrisSkillsSkillId;
export const patch_PatchHrisSkillsSkillId = {
  method: type("'PATCH'"),
  path: type("'/hris/skills/{skill_id}'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ skill_id: PatchHrisSkillsSkillIdParameterSkillId }), header: type({ "X-Integration-Id": type("string") }), body: PatchHrisSkillsSkillIdRequestBody },
  responses: { 200: PatchHrisSkillsSkillIdPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type delete_DeleteHrisSkillsSkillId = typeof delete_DeleteHrisSkillsSkillId;
export const delete_DeleteHrisSkillsSkillId = {
  method: type("'DELETE'"),
  path: type("'/hris/skills/{skill_id}'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ skill_id: DeleteHrisSkillsSkillIdParameterSkillId }), header: type({ "X-Integration-Id": type("string") }), body: DeleteHrisSkillsSkillIdRequestBody },
  responses: { 200: DeleteHrisSkillsSkillIdPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type get_GetHrisEmployeeSkillAssignments = typeof get_GetHrisEmployeeSkillAssignments;
export const get_GetHrisEmployeeSkillAssignments = {
  method: type("'GET'"),
  path: type("'/hris/employee-skill-assignments'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ ids: GetHrisEmployeeSkillAssignmentsParameterIds, remote_ids: GetHrisEmployeeSkillAssignmentsParameterRemoteIds, employee_ids: GetHrisEmployeeSkillAssignmentsParameterEmployeeIds, skill_ids: GetHrisEmployeeSkillAssignmentsParameterSkillIds }).partial().optional(), header: type({ "X-Integration-Id": type("string") }) },
  responses: { 200: GetHrisEmployeeSkillAssignmentsPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type post_PostHrisEmployeeSkillAssignments = typeof post_PostHrisEmployeeSkillAssignments;
export const post_PostHrisEmployeeSkillAssignments = {
  method: type("'POST'"),
  path: type("'/hris/employee-skill-assignments'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { header: type({ "X-Integration-Id": type("string") }), body: PostHrisEmployeeSkillAssignmentsRequestBody },
  responses: { 200: PostHrisEmployeeSkillAssignmentsPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type patch_PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentId = typeof patch_PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentId;
export const patch_PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentId = {
  method: type("'PATCH'"),
  path: type("'/hris/employee-skill-assignments/{employee_skill_assignment_id}'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ employee_skill_assignment_id: PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId }), header: type({ "X-Integration-Id": type("string") }), body: PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody },
  responses: { 200: PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type delete_DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentId = typeof delete_DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentId;
export const delete_DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentId = {
  method: type("'DELETE'"),
  path: type("'/hris/employee-skill-assignments/{employee_skill_assignment_id}'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ employee_skill_assignment_id: DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId }), header: type({ "X-Integration-Id": type("string") }), body: DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody },
  responses: { 200: DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type get_GetHrisStaffingEntities = typeof get_GetHrisStaffingEntities;
export const get_GetHrisStaffingEntities = {
  method: type("'GET'"),
  path: type("'/hris/staffing-entities'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ cursor: GetHrisStaffingEntitiesParameterCursor, page_size: GetHrisStaffingEntitiesParameterPageSize, updated_after: GetHrisStaffingEntitiesParameterUpdatedAfter, include_deleted: GetHrisStaffingEntitiesParameterIncludeDeleted, ignore_unsupported_filters: GetHrisStaffingEntitiesParameterIgnoreUnsupportedFilters, ids: GetHrisStaffingEntitiesParameterIds, remote_ids: GetHrisStaffingEntitiesParameterRemoteIds, model_types: GetHrisStaffingEntitiesParameterModelTypes, statuses: GetHrisStaffingEntitiesParameterStatuses }).partial().optional(), header: type({ "X-Integration-Id": type("string") }) },
  responses: { 200: GetHrisStaffingEntitiesPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "HRIS.EMPLOYEE_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type get_GetAtsApplications = typeof get_GetAtsApplications;
export const get_GetAtsApplications = {
  method: type("'GET'"),
  path: type("'/ats/applications'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ cursor: GetAtsApplicationsParameterCursor, page_size: GetAtsApplicationsParameterPageSize, updated_after: GetAtsApplicationsParameterUpdatedAfter, include_deleted: GetAtsApplicationsParameterIncludeDeleted, ignore_unsupported_filters: GetAtsApplicationsParameterIgnoreUnsupportedFilters, ids: GetAtsApplicationsParameterIds, remote_ids: GetAtsApplicationsParameterRemoteIds, outcome: GetAtsApplicationsParameterOutcome, outcomes: GetAtsApplicationsParameterOutcomes, job_ids: GetAtsApplicationsParameterJobIds, job_remote_ids: GetAtsApplicationsParameterJobRemoteIds, current_stage_ids: GetAtsApplicationsParameterCurrentStageIds, remote_created_after: GetAtsApplicationsParameterRemoteCreatedAfter }).partial().optional(), header: type({ "X-Integration-Id": type("string") }) },
  responses: { 200: GetAtsApplicationsPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type put_PutAtsApplicationsApplicationIdStage = typeof put_PutAtsApplicationsApplicationIdStage;
export const put_PutAtsApplicationsApplicationIdStage = {
  method: type("'PUT'"),
  path: type("'/ats/applications/{application_id}/stage'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ application_id: PutAtsApplicationsApplicationIdStageParameterApplicationId }), header: type({ "X-Integration-Id": type("string") }), body: PutAtsApplicationsApplicationIdStageRequestBody },
  responses: { 200: PutAtsApplicationsApplicationIdStagePositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type post_PostAtsApplicationsApplicationIdResultLinks = typeof post_PostAtsApplicationsApplicationIdResultLinks;
export const post_PostAtsApplicationsApplicationIdResultLinks = {
  method: type("'POST'"),
  path: type("'/ats/applications/{application_id}/result-links'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ application_id: PostAtsApplicationsApplicationIdResultLinksParameterApplicationId }), header: type({ "X-Integration-Id": type("string") }), body: PostAtsApplicationsApplicationIdResultLinksRequestBody },
  responses: { 200: PostAtsApplicationsApplicationIdResultLinksPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type post_PostAtsApplicationsApplicationIdNotes = typeof post_PostAtsApplicationsApplicationIdNotes;
export const post_PostAtsApplicationsApplicationIdNotes = {
  method: type("'POST'"),
  path: type("'/ats/applications/{application_id}/notes'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ application_id: PostAtsApplicationsApplicationIdNotesParameterApplicationId }), header: type({ "X-Integration-Id": type("string") }), body: PostAtsApplicationsApplicationIdNotesRequestBody },
  responses: { 200: PostAtsApplicationsApplicationIdNotesPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type get_GetAtsApplicationsApplicationIdAttachments = typeof get_GetAtsApplicationsApplicationIdAttachments;
export const get_GetAtsApplicationsApplicationIdAttachments = {
  method: type("'GET'"),
  path: type("'/ats/applications/{application_id}/attachments'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ application_id: GetAtsApplicationsApplicationIdAttachmentsParameterApplicationId }), header: type({ "X-Integration-Id": type("string") }) },
  responses: { 200: GetAtsApplicationsApplicationIdAttachmentsPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type post_PostAtsApplicationsApplicationIdAttachments = typeof post_PostAtsApplicationsApplicationIdAttachments;
export const post_PostAtsApplicationsApplicationIdAttachments = {
  method: type("'POST'"),
  path: type("'/ats/applications/{application_id}/attachments'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ application_id: PostAtsApplicationsApplicationIdAttachmentsParameterApplicationId }), header: type({ "X-Integration-Id": type("string") }), body: PostAtsApplicationsApplicationIdAttachmentsRequestBody },
  responses: { 200: PostAtsApplicationsApplicationIdAttachmentsPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type post_PostAtsApplicationsApplicationIdReject = typeof post_PostAtsApplicationsApplicationIdReject;
export const post_PostAtsApplicationsApplicationIdReject = {
  method: type("'POST'"),
  path: type("'/ats/applications/{application_id}/reject'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ application_id: PostAtsApplicationsApplicationIdRejectParameterApplicationId }), header: type({ "X-Integration-Id": type("string") }), body: PostAtsApplicationsApplicationIdRejectRequestBody },
  responses: { 200: PostAtsApplicationsApplicationIdRejectPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type post_PostAtsApplicationsApplicationIdInterviews = typeof post_PostAtsApplicationsApplicationIdInterviews;
export const post_PostAtsApplicationsApplicationIdInterviews = {
  method: type("'POST'"),
  path: type("'/ats/applications/{application_id}/interviews'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ application_id: PostAtsApplicationsApplicationIdInterviewsParameterApplicationId }), header: type({ "X-Integration-Id": type("string") }), body: PostAtsApplicationsApplicationIdInterviewsRequestBody },
  responses: { 200: PostAtsApplicationsApplicationIdInterviewsPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type patch_PatchAtsApplicationsApplicationIdInterviews = typeof patch_PatchAtsApplicationsApplicationIdInterviews;
export const patch_PatchAtsApplicationsApplicationIdInterviews = {
  method: type("'PATCH'"),
  path: type("'/ats/applications/{application_id}/interviews'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ application_id: PatchAtsApplicationsApplicationIdInterviewsParameterApplicationId }), header: type({ "X-Integration-Id": type("string") }), body: PatchAtsApplicationsApplicationIdInterviewsRequestBody },
  responses: { 200: PatchAtsApplicationsApplicationIdInterviewsPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type get_GetAtsCandidates = typeof get_GetAtsCandidates;
export const get_GetAtsCandidates = {
  method: type("'GET'"),
  path: type("'/ats/candidates'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ cursor: GetAtsCandidatesParameterCursor, page_size: GetAtsCandidatesParameterPageSize, updated_after: GetAtsCandidatesParameterUpdatedAfter, include_deleted: GetAtsCandidatesParameterIncludeDeleted, ignore_unsupported_filters: GetAtsCandidatesParameterIgnoreUnsupportedFilters, ids: GetAtsCandidatesParameterIds, remote_ids: GetAtsCandidatesParameterRemoteIds, email: GetAtsCandidatesParameterEmail, job_ids: GetAtsCandidatesParameterJobIds, first_name: GetAtsCandidatesParameterFirstName, last_name: GetAtsCandidatesParameterLastName }).partial().optional(), header: type({ "X-Integration-Id": type("string") }) },
  responses: { 200: GetAtsCandidatesPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type post_PostAtsCandidates = typeof post_PostAtsCandidates;
export const post_PostAtsCandidates = {
  method: type("'POST'"),
  path: type("'/ats/candidates'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { header: type({ "X-Integration-Id": type("string") }), body: PostAtsCandidatesRequestBody },
  responses: { 200: PostAtsCandidatesPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type get_GetAtsCandidatesCandidateIdAttachments = typeof get_GetAtsCandidatesCandidateIdAttachments;
export const get_GetAtsCandidatesCandidateIdAttachments = {
  method: type("'GET'"),
  path: type("'/ats/candidates/{candidate_id}/attachments'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ candidate_id: GetAtsCandidatesCandidateIdAttachmentsParameterCandidateId }), header: type({ "X-Integration-Id": type("string") }) },
  responses: { 200: GetAtsCandidatesCandidateIdAttachmentsPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type post_PostAtsCandidatesCandidateIdAttachments = typeof post_PostAtsCandidatesCandidateIdAttachments;
export const post_PostAtsCandidatesCandidateIdAttachments = {
  method: type("'POST'"),
  path: type("'/ats/candidates/{candidate_id}/attachments'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ candidate_id: PostAtsCandidatesCandidateIdAttachmentsParameterCandidateId }), header: type({ "X-Integration-Id": type("string") }), body: PostAtsCandidatesCandidateIdAttachmentsRequestBody },
  responses: { 200: PostAtsCandidatesCandidateIdAttachmentsPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type post_PostAtsCandidatesCandidateIdResultLinks = typeof post_PostAtsCandidatesCandidateIdResultLinks;
export const post_PostAtsCandidatesCandidateIdResultLinks = {
  method: type("'POST'"),
  path: type("'/ats/candidates/{candidate_id}/result-links'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ candidate_id: PostAtsCandidatesCandidateIdResultLinksParameterCandidateId }), header: type({ "X-Integration-Id": type("string") }), body: PostAtsCandidatesCandidateIdResultLinksRequestBody },
  responses: { 200: PostAtsCandidatesCandidateIdResultLinksPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type post_PostAtsCandidatesCandidateIdTags = typeof post_PostAtsCandidatesCandidateIdTags;
export const post_PostAtsCandidatesCandidateIdTags = {
  method: type("'POST'"),
  path: type("'/ats/candidates/{candidate_id}/tags'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ candidate_id: PostAtsCandidatesCandidateIdTagsParameterCandidateId }), header: type({ "X-Integration-Id": type("string") }), body: PostAtsCandidatesCandidateIdTagsRequestBody },
  responses: { 200: PostAtsCandidatesCandidateIdTagsPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type delete_DeleteAtsCandidatesCandidateIdTags = typeof delete_DeleteAtsCandidatesCandidateIdTags;
export const delete_DeleteAtsCandidatesCandidateIdTags = {
  method: type("'DELETE'"),
  path: type("'/ats/candidates/{candidate_id}/tags'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ candidate_id: DeleteAtsCandidatesCandidateIdTagsParameterCandidateId }), header: type({ "X-Integration-Id": type("string") }), body: DeleteAtsCandidatesCandidateIdTagsRequestBody },
  responses: { 200: DeleteAtsCandidatesCandidateIdTagsPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type get_GetAtsTags = typeof get_GetAtsTags;
export const get_GetAtsTags = {
  method: type("'GET'"),
  path: type("'/ats/tags'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ cursor: GetAtsTagsParameterCursor, page_size: GetAtsTagsParameterPageSize, updated_after: GetAtsTagsParameterUpdatedAfter, include_deleted: GetAtsTagsParameterIncludeDeleted, ignore_unsupported_filters: GetAtsTagsParameterIgnoreUnsupportedFilters, ids: GetAtsTagsParameterIds, remote_ids: GetAtsTagsParameterRemoteIds }).partial().optional(), header: type({ "X-Integration-Id": type("string") }) },
  responses: { 200: GetAtsTagsPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type get_GetAtsApplicationStages = typeof get_GetAtsApplicationStages;
export const get_GetAtsApplicationStages = {
  method: type("'GET'"),
  path: type("'/ats/application-stages'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ cursor: GetAtsApplicationStagesParameterCursor, page_size: GetAtsApplicationStagesParameterPageSize, updated_after: GetAtsApplicationStagesParameterUpdatedAfter, include_deleted: GetAtsApplicationStagesParameterIncludeDeleted, ignore_unsupported_filters: GetAtsApplicationStagesParameterIgnoreUnsupportedFilters, ids: GetAtsApplicationStagesParameterIds, remote_ids: GetAtsApplicationStagesParameterRemoteIds }).partial().optional(), header: type({ "X-Integration-Id": type("string") }) },
  responses: { 200: GetAtsApplicationStagesPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type get_GetAtsJobs = typeof get_GetAtsJobs;
export const get_GetAtsJobs = {
  method: type("'GET'"),
  path: type("'/ats/jobs'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ cursor: GetAtsJobsParameterCursor, page_size: GetAtsJobsParameterPageSize, updated_after: GetAtsJobsParameterUpdatedAfter, include_deleted: GetAtsJobsParameterIncludeDeleted, ignore_unsupported_filters: GetAtsJobsParameterIgnoreUnsupportedFilters, ids: GetAtsJobsParameterIds, remote_ids: GetAtsJobsParameterRemoteIds, job_codes: GetAtsJobsParameterJobCodes, post_url: GetAtsJobsParameterPostUrl, status: GetAtsJobsParameterStatus, statuses: GetAtsJobsParameterStatuses, employment_types: GetAtsJobsParameterEmploymentTypes, visibilities: GetAtsJobsParameterVisibilities, remote_created_after: GetAtsJobsParameterRemoteCreatedAfter, name_contains: GetAtsJobsParameterNameContains }).partial().optional(), header: type({ "X-Integration-Id": type("string") }) },
  responses: { 200: GetAtsJobsPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type post_PostAtsJobsJobIdApplications = typeof post_PostAtsJobsJobIdApplications;
export const post_PostAtsJobsJobIdApplications = {
  method: type("'POST'"),
  path: type("'/ats/jobs/{job_id}/applications'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ job_id: PostAtsJobsJobIdApplicationsParameterJobId }), header: type({ "X-Integration-Id": type("string") }), body: PostAtsJobsJobIdApplicationsRequestBody },
  responses: { 200: PostAtsJobsJobIdApplicationsPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type get_GetAtsUsers = typeof get_GetAtsUsers;
export const get_GetAtsUsers = {
  method: type("'GET'"),
  path: type("'/ats/users'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ cursor: GetAtsUsersParameterCursor, page_size: GetAtsUsersParameterPageSize, updated_after: GetAtsUsersParameterUpdatedAfter, include_deleted: GetAtsUsersParameterIncludeDeleted, ignore_unsupported_filters: GetAtsUsersParameterIgnoreUnsupportedFilters, ids: GetAtsUsersParameterIds, remote_ids: GetAtsUsersParameterRemoteIds, emails: GetAtsUsersParameterEmails }).partial().optional(), header: type({ "X-Integration-Id": type("string") }) },
  responses: { 200: GetAtsUsersPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type get_GetAtsRoles = typeof get_GetAtsRoles;
export const get_GetAtsRoles = {
  method: type("'GET'"),
  path: type("'/ats/roles'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ cursor: GetAtsRolesParameterCursor, page_size: GetAtsRolesParameterPageSize, updated_after: GetAtsRolesParameterUpdatedAfter, include_deleted: GetAtsRolesParameterIncludeDeleted, ignore_unsupported_filters: GetAtsRolesParameterIgnoreUnsupportedFilters, ids: GetAtsRolesParameterIds, remote_ids: GetAtsRolesParameterRemoteIds, scopes: GetAtsRolesParameterScopes }).partial().optional(), header: type({ "X-Integration-Id": type("string") }) },
  responses: { 200: GetAtsRolesPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type get_GetAtsOffers = typeof get_GetAtsOffers;
export const get_GetAtsOffers = {
  method: type("'GET'"),
  path: type("'/ats/offers'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ cursor: GetAtsOffersParameterCursor, page_size: GetAtsOffersParameterPageSize, updated_after: GetAtsOffersParameterUpdatedAfter, include_deleted: GetAtsOffersParameterIncludeDeleted, ignore_unsupported_filters: GetAtsOffersParameterIgnoreUnsupportedFilters, ids: GetAtsOffersParameterIds, remote_ids: GetAtsOffersParameterRemoteIds }).partial().optional(), header: type({ "X-Integration-Id": type("string") }) },
  responses: { 200: GetAtsOffersPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type get_GetAtsRejectionReasons = typeof get_GetAtsRejectionReasons;
export const get_GetAtsRejectionReasons = {
  method: type("'GET'"),
  path: type("'/ats/rejection-reasons'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ cursor: GetAtsRejectionReasonsParameterCursor, page_size: GetAtsRejectionReasonsParameterPageSize, updated_after: GetAtsRejectionReasonsParameterUpdatedAfter, include_deleted: GetAtsRejectionReasonsParameterIncludeDeleted, ignore_unsupported_filters: GetAtsRejectionReasonsParameterIgnoreUnsupportedFilters, ids: GetAtsRejectionReasonsParameterIds, remote_ids: GetAtsRejectionReasonsParameterRemoteIds }).partial().optional(), header: type({ "X-Integration-Id": type("string") }) },
  responses: { 200: GetAtsRejectionReasonsPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type get_GetAtsInterviews = typeof get_GetAtsInterviews;
export const get_GetAtsInterviews = {
  method: type("'GET'"),
  path: type("'/ats/interviews'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ cursor: GetAtsInterviewsParameterCursor, page_size: GetAtsInterviewsParameterPageSize, updated_after: GetAtsInterviewsParameterUpdatedAfter, include_deleted: GetAtsInterviewsParameterIncludeDeleted, ignore_unsupported_filters: GetAtsInterviewsParameterIgnoreUnsupportedFilters, ids: GetAtsInterviewsParameterIds, remote_ids: GetAtsInterviewsParameterRemoteIds, job_ids: GetAtsInterviewsParameterJobIds }).partial().optional(), header: type({ "X-Integration-Id": type("string") }) },
  responses: { 200: GetAtsInterviewsPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type get_GetAtsActionsAtsCreateCandidate = typeof get_GetAtsActionsAtsCreateCandidate;
export const get_GetAtsActionsAtsCreateCandidate = {
  method: type("'GET'"),
  path: type("'/ats/actions/ats_create_candidate'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { header: type({ "X-Integration-Id": type("string") }) },
  responses: { 200: GetAtsActionsAtsCreateCandidatePositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type get_GetAtsActionsAtsCreateApplication = typeof get_GetAtsActionsAtsCreateApplication;
export const get_GetAtsActionsAtsCreateApplication = {
  method: type("'GET'"),
  path: type("'/ats/actions/ats_create_application'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { header: type({ "X-Integration-Id": type("string") }) },
  responses: { 200: GetAtsActionsAtsCreateApplicationPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type get_GetAtsActionsAtsAddApplicationAttachment = typeof get_GetAtsActionsAtsAddApplicationAttachment;
export const get_GetAtsActionsAtsAddApplicationAttachment = {
  method: type("'GET'"),
  path: type("'/ats/actions/ats_add_application_attachment'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { header: type({ "X-Integration-Id": type("string") }) },
  responses: { 200: GetAtsActionsAtsAddApplicationAttachmentPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type get_GetAtsActionsAtsAddCandidateAttachment = typeof get_GetAtsActionsAtsAddCandidateAttachment;
export const get_GetAtsActionsAtsAddCandidateAttachment = {
  method: type("'GET'"),
  path: type("'/ats/actions/ats_add_candidate_attachment'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { header: type({ "X-Integration-Id": type("string") }) },
  responses: { 200: GetAtsActionsAtsAddCandidateAttachmentPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type post_PostAtsImportTrackedApplication = typeof post_PostAtsImportTrackedApplication;
export const post_PostAtsImportTrackedApplication = {
  method: type("'POST'"),
  path: type("'/ats/import-tracked-application'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { header: type({ "X-Integration-Id": type("string") }), body: PostAtsImportTrackedApplicationRequestBody },
  responses: { 200: PostAtsImportTrackedApplicationPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type post_PostAtsCustomAvionteSyncedJobs = typeof post_PostAtsCustomAvionteSyncedJobs;
export const post_PostAtsCustomAvionteSyncedJobs = {
  method: type("'POST'"),
  path: type("'/ats/custom/avionte/synced-jobs'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { header: type({ "X-Integration-Id": type("string") }), body: PostAtsCustomAvionteSyncedJobsRequestBody },
  responses: { 200: PostAtsCustomAvionteSyncedJobsPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type delete_DeleteAtsCustomAvionteSyncedJobsJobRemoteId = typeof delete_DeleteAtsCustomAvionteSyncedJobsJobRemoteId;
export const delete_DeleteAtsCustomAvionteSyncedJobsJobRemoteId = {
  method: type("'DELETE'"),
  path: type("'/ats/custom/avionte/synced-jobs/{job_remote_id}'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ job_remote_id: DeleteAtsCustomAvionteSyncedJobsJobRemoteIdParameterJobRemoteId }), header: type({ "X-Integration-Id": type("string") }), body: DeleteAtsCustomAvionteSyncedJobsJobRemoteIdRequestBody },
  responses: { 200: DeleteAtsCustomAvionteSyncedJobsJobRemoteIdPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type get_GetAssessmentPackages = typeof get_GetAssessmentPackages;
export const get_GetAssessmentPackages = {
  method: type("'GET'"),
  path: type("'/assessment/packages'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { header: type({ "X-Integration-Id": type("string") }) },
  responses: { 200: GetAssessmentPackagesPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type put_PutAssessmentPackages = typeof put_PutAssessmentPackages;
export const put_PutAssessmentPackages = {
  method: type("'PUT'"),
  path: type("'/assessment/packages'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { header: type({ "X-Integration-Id": type("string") }), body: PutAssessmentPackagesRequestBody },
  responses: { 200: PutAssessmentPackagesPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type get_GetAssessmentOrders = typeof get_GetAssessmentOrders;
export const get_GetAssessmentOrders = {
  method: type("'GET'"),
  path: type("'/assessment/orders'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ cursor: GetAssessmentOrdersParameterCursor, page_size: GetAssessmentOrdersParameterPageSize, ids: GetAssessmentOrdersParameterIds, statuses: GetAssessmentOrdersParameterStatuses, created_after: GetAssessmentOrdersParameterCreatedAfter }).partial().optional(), header: type({ "X-Integration-Id": type("string") }) },
  responses: { 200: GetAssessmentOrdersPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type get_GetAssessmentOrdersOpen = typeof get_GetAssessmentOrdersOpen;
export const get_GetAssessmentOrdersOpen = {
  method: type("'GET'"),
  path: type("'/assessment/orders/open'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ cursor: GetAssessmentOrdersOpenParameterCursor, page_size: GetAssessmentOrdersOpenParameterPageSize }).partial().optional(), header: type({ "X-Integration-Id": type("string") }) },
  responses: { 200: GetAssessmentOrdersOpenPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type put_PutAssessmentOrdersAssessmentOrderIdResult = typeof put_PutAssessmentOrdersAssessmentOrderIdResult;
export const put_PutAssessmentOrdersAssessmentOrderIdResult = {
  method: type("'PUT'"),
  path: type("'/assessment/orders/{assessment_order_id}/result'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ assessment_order_id: PutAssessmentOrdersAssessmentOrderIdResultParameterAssessmentOrderId }), header: type({ "X-Integration-Id": type("string") }), body: PutAssessmentOrdersAssessmentOrderIdResultRequestBody },
  responses: { 200: PutAssessmentOrdersAssessmentOrderIdResultPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "INTEGRATION.PERMISSION_MISSING", "INTEGRATION.AUTHENTICATION_INVALID", "INTEGRATION.QA_FAILED", "INTEGRATION.SETUP_SYNC_PENDING", "INTEGRATION.SETUP_INCOMPLETE", "INTEGRATION.INACTIVE", "INTEGRATION.MODEL_NOT_AVAILABLE", "INTEGRATION.MODEL_DISABLED", "INTEGRATION.ACTION_NOT_AVAILABLE", "INTEGRATION.ACTION_DISABLED", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "ATS.JOB_CLOSED", "ATS.APPLICATION_ALREADY_EXISTS").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type get_GetLmsUsers = typeof get_GetLmsUsers;
export const get_GetLmsUsers = {
  method: type("'GET'"),
  path: type("'/lms/users'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ cursor: GetLmsUsersParameterCursor, page_size: GetLmsUsersParameterPageSize, updated_after: GetLmsUsersParameterUpdatedAfter, include_deleted: GetLmsUsersParameterIncludeDeleted, ignore_unsupported_filters: GetLmsUsersParameterIgnoreUnsupportedFilters, ids: GetLmsUsersParameterIds, remote_ids: GetLmsUsersParameterRemoteIds, work_emails: GetLmsUsersParameterWorkEmails }).partial().optional(), header: type({ "X-Integration-Id": type("string") }) },
  responses: { 200: GetLmsUsersPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type get_GetLmsCourseProgressions = typeof get_GetLmsCourseProgressions;
export const get_GetLmsCourseProgressions = {
  method: type("'GET'"),
  path: type("'/lms/course-progressions'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ cursor: GetLmsCourseProgressionsParameterCursor, page_size: GetLmsCourseProgressionsParameterPageSize, updated_after: GetLmsCourseProgressionsParameterUpdatedAfter, include_deleted: GetLmsCourseProgressionsParameterIncludeDeleted, ignore_unsupported_filters: GetLmsCourseProgressionsParameterIgnoreUnsupportedFilters, ids: GetLmsCourseProgressionsParameterIds, remote_ids: GetLmsCourseProgressionsParameterRemoteIds, user_ids: GetLmsCourseProgressionsParameterUserIds, course_ids: GetLmsCourseProgressionsParameterCourseIds }).partial().optional(), header: type({ "X-Integration-Id": type("string") }) },
  responses: { 200: GetLmsCourseProgressionsPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type post_PostLmsCourseProgressions = typeof post_PostLmsCourseProgressions;
export const post_PostLmsCourseProgressions = {
  method: type("'POST'"),
  path: type("'/lms/course-progressions'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { header: type({ "X-Integration-Id": type("string") }), body: PostLmsCourseProgressionsRequestBody },
  responses: { 200: PostLmsCourseProgressionsPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type post_PostLmsCourseProgressionsCourseProgressionIdComplete = typeof post_PostLmsCourseProgressionsCourseProgressionIdComplete;
export const post_PostLmsCourseProgressionsCourseProgressionIdComplete = {
  method: type("'POST'"),
  path: type("'/lms/course-progressions/{course_progression_id}/complete'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ course_progression_id: PostLmsCourseProgressionsCourseProgressionIdCompleteParameterCourseProgressionId }), header: type({ "X-Integration-Id": type("string") }), body: PostLmsCourseProgressionsCourseProgressionIdCompleteRequestBody },
  responses: { 200: PostLmsCourseProgressionsCourseProgressionIdCompletePositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type get_GetLmsCourses = typeof get_GetLmsCourses;
export const get_GetLmsCourses = {
  method: type("'GET'"),
  path: type("'/lms/courses'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ cursor: GetLmsCoursesParameterCursor, page_size: GetLmsCoursesParameterPageSize, updated_after: GetLmsCoursesParameterUpdatedAfter, include_deleted: GetLmsCoursesParameterIncludeDeleted, ignore_unsupported_filters: GetLmsCoursesParameterIgnoreUnsupportedFilters, ids: GetLmsCoursesParameterIds, remote_ids: GetLmsCoursesParameterRemoteIds }).partial().optional(), header: type({ "X-Integration-Id": type("string") }) },
  responses: { 200: GetLmsCoursesPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type post_PostLmsCoursesBulk = typeof post_PostLmsCoursesBulk;
export const post_PostLmsCoursesBulk = {
  method: type("'POST'"),
  path: type("'/lms/courses/bulk'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { header: type({ "X-Integration-Id": type("string") }), body: PostLmsCoursesBulkRequestBody },
  responses: { 200: PostLmsCoursesBulkPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type get_GetLmsCoursesBulkTaskId = typeof get_GetLmsCoursesBulkTaskId;
export const get_GetLmsCoursesBulkTaskId = {
  method: type("'GET'"),
  path: type("'/lms/courses/bulk/{task_id}'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ task_id: GetLmsCoursesBulkTaskIdParameterTaskId }), header: type({ "X-Integration-Id": type("string") }) },
  responses: { 200: GetLmsCoursesBulkTaskIdPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type post_PostLmsCoursesCourseIdDeactivate = typeof post_PostLmsCoursesCourseIdDeactivate;
export const post_PostLmsCoursesCourseIdDeactivate = {
  method: type("'POST'"),
  path: type("'/lms/courses/{course_id}/deactivate'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ course_id: PostLmsCoursesCourseIdDeactivateParameterCourseId }), header: type({ "X-Integration-Id": type("string") }), body: PostLmsCoursesCourseIdDeactivateRequestBody },
  responses: { 200: PostLmsCoursesCourseIdDeactivatePositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type get_GetLmsSkills = typeof get_GetLmsSkills;
export const get_GetLmsSkills = {
  method: type("'GET'"),
  path: type("'/lms/skills'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ cursor: GetLmsSkillsParameterCursor, page_size: GetLmsSkillsParameterPageSize, updated_after: GetLmsSkillsParameterUpdatedAfter, include_deleted: GetLmsSkillsParameterIncludeDeleted, ignore_unsupported_filters: GetLmsSkillsParameterIgnoreUnsupportedFilters, ids: GetLmsSkillsParameterIds, remote_ids: GetLmsSkillsParameterRemoteIds }).partial().optional(), header: type({ "X-Integration-Id": type("string") }) },
  responses: { 200: GetLmsSkillsPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type post_PostAiApplyCareerSites = typeof post_PostAiApplyCareerSites;
export const post_PostAiApplyCareerSites = {
  method: type("'POST'"),
  path: type("'/ai-apply/career-sites'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { body: PostAiApplyCareerSitesRequestBody },
  responses: { 200: PostAiApplyCareerSitesPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING", "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type get_GetAiApplyCareerSites = typeof get_GetAiApplyCareerSites;
export const get_GetAiApplyCareerSites = {
  method: type("'GET'"),
  path: type("'/ai-apply/career-sites'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ cursor: GetAiApplyCareerSitesParameterCursor, page_size: GetAiApplyCareerSitesParameterPageSize, ids: GetAiApplyCareerSitesParameterIds }).partial().optional() },
  responses: { 200: GetAiApplyCareerSitesPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING", "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type get_GetAiApplyPostings = typeof get_GetAiApplyPostings;
export const get_GetAiApplyPostings = {
  method: type("'GET'"),
  path: type("'/ai-apply/postings'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ cursor: GetAiApplyPostingsParameterCursor, page_size: GetAiApplyPostingsParameterPageSize, ids: GetAiApplyPostingsParameterIds, career_site_ids: GetAiApplyPostingsParameterCareerSiteIds, job_codes: GetAiApplyPostingsParameterJobCodes }).partial().optional() },
  responses: { 200: GetAiApplyPostingsPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING", "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type post_PostAiApplyPostings = typeof post_PostAiApplyPostings;
export const post_PostAiApplyPostings = {
  method: type("'POST'"),
  path: type("'/ai-apply/postings'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { body: PostAiApplyPostingsRequestBody },
  responses: { 200: PostAiApplyPostingsPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING", "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type post_PostAiApplyPostingsPostingIdInquire = typeof post_PostAiApplyPostingsPostingIdInquire;
export const post_PostAiApplyPostingsPostingIdInquire = {
  method: type("'POST'"),
  path: type("'/ai-apply/postings/{posting_id}/inquire'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ posting_id: PostAiApplyPostingsPostingIdInquireParameterPostingId }), body: PostAiApplyPostingsPostingIdInquireRequestBody },
  responses: { 200: PostAiApplyPostingsPostingIdInquirePositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING", "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type post_PostAiApplyApply = typeof post_PostAiApplyApply;
export const post_PostAiApplyApply = {
  method: type("'POST'"),
  path: type("'/ai-apply/apply'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { body: PostAiApplyApplyRequestBody },
  responses: { 200: PostAiApplyApplyPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING", "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type get_GetAiApplyApplications = typeof get_GetAiApplyApplications;
export const get_GetAiApplyApplications = {
  method: type("'GET'"),
  path: type("'/ai-apply/applications'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ cursor: GetAiApplyApplicationsParameterCursor, page_size: GetAiApplyApplicationsParameterPageSize, ids: GetAiApplyApplicationsParameterIds, job_posting_ids: GetAiApplyApplicationsParameterJobPostingIds }).partial().optional() },
  responses: { 200: GetAiApplyApplicationsPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING", "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type get_GetAiApplyUnifiedApiJobs = typeof get_GetAiApplyUnifiedApiJobs;
export const get_GetAiApplyUnifiedApiJobs = {
  method: type("'GET'"),
  path: type("'/ai-apply/unified-api/jobs'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ cursor: GetAiApplyUnifiedApiJobsParameterCursor, page_size: GetAiApplyUnifiedApiJobsParameterPageSize, ids: GetAiApplyUnifiedApiJobsParameterIds, remote_ids: GetAiApplyUnifiedApiJobsParameterRemoteIds, job_codes: GetAiApplyUnifiedApiJobsParameterJobCodes, career_site_ids: GetAiApplyUnifiedApiJobsParameterCareerSiteIds }).partial().optional() },
  responses: { 200: GetAiApplyUnifiedApiJobsPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING", "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type post_PostAiApplyUnifiedApiJobsJobIdApplications = typeof post_PostAiApplyUnifiedApiJobsJobIdApplications;
export const post_PostAiApplyUnifiedApiJobsJobIdApplications = {
  method: type("'POST'"),
  path: type("'/ai-apply/unified-api/jobs/{job_id}/applications'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ job_id: PostAiApplyUnifiedApiJobsJobIdApplicationsParameterJobId }), body: PostAiApplyUnifiedApiJobsJobIdApplicationsRequestBody },
  responses: { 200: PostAiApplyUnifiedApiJobsJobIdApplicationsPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING", "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type get_GetAiApplyJobFeeds = typeof get_GetAiApplyJobFeeds;
export const get_GetAiApplyJobFeeds = {
  method: type("'GET'"),
  path: type("'/ai-apply/job-feeds'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ cursor: GetAiApplyJobFeedsParameterCursor, page_size: GetAiApplyJobFeedsParameterPageSize, ids: GetAiApplyJobFeedsParameterIds }).partial().optional() },
  responses: { 200: GetAiApplyJobFeedsPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING", "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type post_PostAiApplyJobFeeds = typeof post_PostAiApplyJobFeeds;
export const post_PostAiApplyJobFeeds = {
  method: type("'POST'"),
  path: type("'/ai-apply/job-feeds'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { body: PostAiApplyJobFeedsRequestBody },
  responses: { 200: PostAiApplyJobFeedsPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING", "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type post_PostConnectCreateLink = typeof post_PostConnectCreateLink;
export const post_PostConnectCreateLink = {
  method: type("'POST'"),
  path: type("'/connect/create-link'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { body: PostConnectCreateLinkRequestBody },
  responses: { 200: PostConnectCreateLinkPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type get_GetConnectIntegrationByTokenToken = typeof get_GetConnectIntegrationByTokenToken;
export const get_GetConnectIntegrationByTokenToken = {
  method: type("'GET'"),
  path: type("'/connect/integration-by-token/{token}'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ token: GetConnectIntegrationByTokenTokenParameterToken }) },
  responses: { 200: GetConnectIntegrationByTokenTokenPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type post_PostConnectActivateIntegration = typeof post_PostConnectActivateIntegration;
export const post_PostConnectActivateIntegration = {
  method: type("'POST'"),
  path: type("'/connect/activate-integration'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { body: PostConnectActivateIntegrationRequestBody },
  responses: { 200: PostConnectActivateIntegrationPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type get_GetCustomDatevSystemInformation = typeof get_GetCustomDatevSystemInformation;
export const get_GetCustomDatevSystemInformation = {
  method: type("'GET'"),
  path: type("'/custom/datev/system-information'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { header: type({ "X-Integration-Id": type("string") }) },
  responses: { 200: GetCustomDatevSystemInformationPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type post_PostCustomDatevPassthrough = typeof post_PostCustomDatevPassthrough;
export const post_PostCustomDatevPassthrough = {
  method: type("'POST'"),
  path: type("'/custom/datev/passthrough'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { header: type({ "X-Integration-Id": type("string") }), body: PostCustomDatevPassthroughRequestBody },
  responses: { 200: PostCustomDatevPassthroughPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type get_GetCustomDatevCheckEauPermission = typeof get_GetCustomDatevCheckEauPermission;
export const get_GetCustomDatevCheckEauPermission = {
  method: type("'GET'"),
  path: type("'/custom/datev/check-eau-permission'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { header: type({ "X-Integration-Id": type("string") }) },
  responses: { 200: GetCustomDatevCheckEauPermissionPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type get_GetCustomDatevEauRequestsEauId = typeof get_GetCustomDatevEauRequestsEauId;
export const get_GetCustomDatevEauRequestsEauId = {
  method: type("'GET'"),
  path: type("'/custom/datev/eau-requests/{eau_id}'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ eau_id: GetCustomDatevEauRequestsEauIdParameterEauId }), header: type({ "X-Integration-Id": type("string") }) },
  responses: { 200: GetCustomDatevEauRequestsEauIdPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type get_GetCustomDatevCheckDocumentPermission = typeof get_GetCustomDatevCheckDocumentPermission;
export const get_GetCustomDatevCheckDocumentPermission = {
  method: type("'GET'"),
  path: type("'/custom/datev/check-document-permission'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { header: type({ "X-Integration-Id": type("string") }) },
  responses: { 200: GetCustomDatevCheckDocumentPermissionPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type get_GetCustomDatevAvailableDocuments = typeof get_GetCustomDatevAvailableDocuments;
export const get_GetCustomDatevAvailableDocuments = {
  method: type("'GET'"),
  path: type("'/custom/datev/available-documents'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ period: GetCustomDatevAvailableDocumentsParameterPeriod }), header: type({ "X-Integration-Id": type("string") }) },
  responses: { 200: GetCustomDatevAvailableDocumentsPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type post_PostCustomDatevDownloadDocument = typeof post_PostCustomDatevDownloadDocument;
export const post_PostCustomDatevDownloadDocument = {
  method: type("'POST'"),
  path: type("'/custom/datev/download-document'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { header: type({ "X-Integration-Id": type("string") }), body: PostCustomDatevDownloadDocumentRequestBody },
  responses: { 200: PostCustomDatevDownloadDocumentPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type post_PostCustomDatevEmployeesEmployeeIdDownloadDocument = typeof post_PostCustomDatevEmployeesEmployeeIdDownloadDocument;
export const post_PostCustomDatevEmployeesEmployeeIdDownloadDocument = {
  method: type("'POST'"),
  path: type("'/custom/datev/employees/{employee_id}/download-document'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ employee_id: PostCustomDatevEmployeesEmployeeIdDownloadDocumentParameterEmployeeId }), header: type({ "X-Integration-Id": type("string") }), body: PostCustomDatevEmployeesEmployeeIdDownloadDocumentRequestBody },
  responses: { 200: PostCustomDatevEmployeesEmployeeIdDownloadDocumentPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type post_PostCustomDatevEmployeesEmployeeIdEauRequests = typeof post_PostCustomDatevEmployeesEmployeeIdEauRequests;
export const post_PostCustomDatevEmployeesEmployeeIdEauRequests = {
  method: type("'POST'"),
  path: type("'/custom/datev/employees/{employee_id}/eau-requests'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ employee_id: PostCustomDatevEmployeesEmployeeIdEauRequestsParameterEmployeeId }), header: type({ "X-Integration-Id": type("string") }), body: PostCustomDatevEmployeesEmployeeIdEauRequestsRequestBody },
  responses: { 200: PostCustomDatevEmployeesEmployeeIdEauRequestsPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type put_PutCustomDatevEmployeesEmployeeIdPreparePayroll = typeof put_PutCustomDatevEmployeesEmployeeIdPreparePayroll;
export const put_PutCustomDatevEmployeesEmployeeIdPreparePayroll = {
  method: type("'PUT'"),
  path: type("'/custom/datev/employees/{employee_id}/prepare-payroll'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ employee_id: PutCustomDatevEmployeesEmployeeIdPreparePayrollParameterEmployeeId }), header: type({ "X-Integration-Id": type("string") }), body: PutCustomDatevEmployeesEmployeeIdPreparePayrollRequestBody },
  responses: { 200: PutCustomDatevEmployeesEmployeeIdPreparePayrollPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type put_PutCustomDatevEmployeesEmployeeIdCompensations = typeof put_PutCustomDatevEmployeesEmployeeIdCompensations;
export const put_PutCustomDatevEmployeesEmployeeIdCompensations = {
  method: type("'PUT'"),
  path: type("'/custom/datev/employees/{employee_id}/compensations'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ employee_id: PutCustomDatevEmployeesEmployeeIdCompensationsParameterEmployeeId }), header: type({ "X-Integration-Id": type("string") }), body: PutCustomDatevEmployeesEmployeeIdCompensationsRequestBody },
  responses: { 200: PutCustomDatevEmployeesEmployeeIdCompensationsPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type get_GetCustomDatevCheckWritePermission = typeof get_GetCustomDatevCheckWritePermission;
export const get_GetCustomDatevCheckWritePermission = {
  method: type("'GET'"),
  path: type("'/custom/datev/check-write-permission'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { header: type({ "X-Integration-Id": type("string") }) },
  responses: { 200: GetCustomDatevCheckWritePermissionPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type get_GetCustomDatevDataPushes = typeof get_GetCustomDatevDataPushes;
export const get_GetCustomDatevDataPushes = {
  method: type("'GET'"),
  path: type("'/custom/datev/data-pushes'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { header: type({ "X-Integration-Id": type("string") }) },
  responses: { 200: GetCustomDatevDataPushesPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type post_PostCustomDatevPushDataGeneral = typeof post_PostCustomDatevPushDataGeneral;
export const post_PostCustomDatevPushDataGeneral = {
  method: type("'POST'"),
  path: type("'/custom/datev/push-data/general'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { header: type({ "X-Integration-Id": type("string") }), body: PostCustomDatevPushDataGeneralRequestBody },
  responses: { 200: PostCustomDatevPushDataGeneralPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type post_PostCustomDatevPushDataPayroll = typeof post_PostCustomDatevPushDataPayroll;
export const post_PostCustomDatevPushDataPayroll = {
  method: type("'POST'"),
  path: type("'/custom/datev/push-data/payroll'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { header: type({ "X-Integration-Id": type("string") }), body: PostCustomDatevPushDataPayrollRequestBody },
  responses: { 200: PostCustomDatevPushDataPayrollPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type post_PostCustomSilaeEmployeesEmployeeIdPayrollSupplements = typeof post_PostCustomSilaeEmployeesEmployeeIdPayrollSupplements;
export const post_PostCustomSilaeEmployeesEmployeeIdPayrollSupplements = {
  method: type("'POST'"),
  path: type("'/custom/silae/employees/{employee_id}/payroll-supplements'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ employee_id: PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsParameterEmployeeId }), header: type({ "X-Integration-Id": type("string") }), body: PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsRequestBody },
  responses: { 200: PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsPositiveResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
};

export type post_PostAiApplyJobFeedsBulkImport = typeof post_PostAiApplyJobFeedsBulkImport;
export const post_PostAiApplyJobFeedsBulkImport = {
  method: type("'POST'"),
  path: type("'/ai-apply/job-feeds/{job_feed_id}/bulk-import'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ job_feed_id: type("string") }), body: type("string") },
  responses: { 200: BulkImportResponse, default: type({ status: type("'error'"), error: type({ code: type.enumerated("PLATFORM.RATE_LIMIT_EXCEEDED", "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED", "PLATFORM.INTEGRATION_NOT_FOUND", "PLATFORM.INPUT_INVALID", "PLATFORM.UNKNOWN_ERROR", "PLATFORM.IP_NOT_WHITELISTED", "PLATFORM.AUTHENTICATION_INVALID", "PLATFORM.TASK_TIMED_OUT", "REMOTE.SERVICE_UNAVAILABLE", "REMOTE.RATE_LIMIT_EXCEEDED", "REMOTE.INPUT_INVALID", "REMOTE.UNKNOWN_HTTP_ERROR", "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING", "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT").or(type("null")), title: type("string").or(type("null")), message: type("string"), log_url: type("string.url").or(type("null")) }) }) },
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
type InferSchemaValue<T> = T extends { infer: infer O } ? O : T extends object ? { [K in keyof T]: InferSchemaValue<T[K]> } : T;
type InferSchemaInputRaw<T> = T extends { inferIn: infer I } ? I : T extends object ? { [K in keyof T]: InferSchemaInputRaw<T[K]> } : T;
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
  return (() => { const out = (schema as (data: unknown) => unknown)(value); if (out instanceof type.errors) throw out; return out; })();
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

  