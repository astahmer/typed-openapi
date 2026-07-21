
  
  export namespace Schemas {
    // <Schemas>
  export type GetCheckApiKeyPositiveResponse = { status: string, data: { environment_id: string, customer_id: string } }
export type PostForceSyncPositiveResponse = { status: string, data: { already_queued: boolean, sync_id: string, type: ("FULL" | "DELTA") } }
export type PostForceSyncRequestBody = Partial<{ type: ("FULL" | "DELTA") }>
export type PostPassthroughToolApiParameterTool = string
export type PostPassthroughToolApiParameterApi = string
export type PostPassthroughToolApiPositiveResponse = { status: string, data: { url: string, status: number, headers: Record<string, (string | Array<string>)>, data?: unknown }, warnings: Array<{ message: string }> }
export type PostPassthroughToolApiRequestBody = { method: ("GET" | "POST" | "DELETE" | "PUT" | "PATCH"), path: string, headers?: Record<string, string>, params?: Record<string, string>, data?: unknown, response_as_base64?: boolean, multipart_form_data?: Array<{ name: string, value: (string | { name: string, content_type?: string, data_url?: string, data?: string }) }>, api_options?: Record<string, string> }
export type DeleteIntegrationsIntegrationIdParameterIntegrationId = string
export type DeleteIntegrationsIntegrationIdPositiveResponse = { status: string, data: Record<string, unknown> }
export type DeleteIntegrationsIntegrationIdRequestBody = Partial<{  }>
export type GetIntegrationsIntegrationIdParameterIntegrationId = string
export type GetIntegrationsIntegrationIdPositiveResponse = { status: string, data: { id: string, tool: { id: string, label: string, internal_label: (string | null), logo_url: string, icon_url: string }, category: ("HRIS" | "ATS" | "ASSESSMENT" | "LMS"), status: ("ACTIVE" | "INVALID" | "INACTIVE"), setup_status: ("INCOMPLETE" | "FINAL_SYNC_PENDING" | "COMPLETED"), end_user: { organization_name: string, creator_email: (string | null), origin_id: (string | null) }, scope_config: { id: string, name: (string | null) }, data_expired_at: (string | null), created_at: string, beta: boolean, read_models: Array<{ id: string, label: string, is_available: boolean, coverage_status: ("SUPPORTED" | "UNSUPPORTED" | "NOT_IMPLEMENTED" | "UNKNOWN"), scope_config_setting: ("ENABLED" | "DISABLED" | "OPTIONAL"), opted_out_by_customer: boolean, fields: Array<{ id: string, is_available: boolean, coverage_status: ("SUPPORTED" | "UNSUPPORTED" | "NOT_IMPLEMENTED" | "UNKNOWN"), scope_config_setting: ("ENABLED" | "DISABLED" | "OPTIONAL"), opted_out_by_customer: boolean }> }>, write_actions: Array<{ id: string, label: string, is_available: boolean, coverage_status: ("SUPPORTED" | "UNSUPPORTED" | "NOT_IMPLEMENTED" | "UNKNOWN"), scope_config_setting: ("ENABLED" | "DISABLED" | "OPTIONAL"), opted_out_by_customer: boolean, fields: Array<{ id: string, is_available: boolean, coverage_status: ("SUPPORTED" | "UNSUPPORTED" | "NOT_IMPLEMENTED" | "UNKNOWN") }> }> } }
export type PutIntegrationsIntegrationIdEnabledParameterIntegrationId = string
export type PutIntegrationsIntegrationIdEnabledPositiveResponse = { status: string, data: Record<string, unknown> }
export type PutIntegrationsIntegrationIdEnabledRequestBody = { value: boolean }
export type PostIntegrationsIntegrationIdRelinkParameterIntegrationId = string
export type PostIntegrationsIntegrationIdRelinkPositiveResponse = { status: string, data: { link: string } }
export type PostIntegrationsIntegrationIdRelinkRequestBody = Partial<{ language: (("en" | "de" | "fr" | "it" | "es") | null), scope_config_id: (string | null), link_type: ("EMBEDDED" | "MAGIC_LINK") }>
export type PostIntegrationsIntegrationIdSetupLinkParameterIntegrationId = string
export type PostIntegrationsIntegrationIdSetupLinkPositiveResponse = { status: string, data: { link: string } }
export type PostIntegrationsIntegrationIdSetupLinkRequestBody = { language?: (("en" | "de" | "fr" | "it" | "es") | null), link_type: ("EMBEDDED" | "MAGIC_LINK") }
export type GetIntegrationsIntegrationIdIntegrationFieldsParameterIntegrationId = string
export type GetIntegrationsIntegrationIdIntegrationFieldsParameterCursor = string
export type GetIntegrationsIntegrationIdIntegrationFieldsParameterPageSize = number
export type GetIntegrationsIntegrationIdIntegrationFieldsPositiveResponse = { status: string, data: { results: Array<{ id: string, key: string, model: string, type: ("DEFAULT" | "CUSTOM"), label: (string | null), is_passthrough_enabled: boolean, is_writable: boolean }>, next_cursor: (string | null), next: (string | null) } }
export type PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationId = string
export type PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationFieldId = string
export type PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdPositiveResponse = { status: string, data: { id: string, key: string, model: string, type: ("DEFAULT" | "CUSTOM"), label: (string | null), is_passthrough_enabled: boolean, is_writable: boolean } }
export type PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdRequestBody = { enable_passthrough: (boolean | null) }
export type GetIntegrationsIntegrationIdCustomFieldsParameterIntegrationId = string
export type GetIntegrationsIntegrationIdCustomFieldsParameterCursor = string
export type GetIntegrationsIntegrationIdCustomFieldsParameterPageSize = number
export type GetIntegrationsIntegrationIdCustomFieldsPositiveResponse = { status: string, data: { results: Array<{ id: string, key: string, integration_field: ({ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), label: (string | null) } | null), model: string, label: (string | null), description: (string | null) }>, next_cursor: (string | null), next: (string | null) } }
export type PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterIntegrationId = string
export type PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterCustomFieldId = string
export type PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdPositiveResponse = { status: string, data: { id: string, key: string, integration_field: ({ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), label: (string | null) } | null), model: string, label: (string | null), description: (string | null) } }
export type PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdRequestBody = { integration_field_id: (string | null) }
export type GetToolsCategoryParameterCategory = ("hris" | "ats" | "assessment" | "lms")
export type GetToolsCategoryPositiveResponse = { status: string, data: { tools: Array<{ id: string, label: string, internal_label: (string | null), assets: { logo_url: string, icon_url: string, icon_black_url: string }, paid_api_details_markdown: (string | null), fast_track_details_markdown: (string | null), partner_only_details_markdown: (string | null), connection_guide_url: (string | null), coverage: { read_models: Array<{ id: string, label: string, coverage_status: ("SUPPORTED" | "UNSUPPORTED" | "NOT_IMPLEMENTED" | "UNKNOWN"), fields: Array<{ id: string, coverage_status: ("SUPPORTED" | "UNSUPPORTED" | "NOT_IMPLEMENTED" | "UNKNOWN") }> }>, write_actions: Array<{ id: string, label: string, coverage_status: ("SUPPORTED" | "UNSUPPORTED" | "NOT_IMPLEMENTED" | "UNKNOWN"), fields: Array<{ id: string, coverage_status: ("SUPPORTED" | "UNSUPPORTED" | "NOT_IMPLEMENTED" | "UNKNOWN") }> }>, features: Array<{ id: string, label: string, coverage_status: ("SUPPORTED" | "UNSUPPORTED" | "NOT_IMPLEMENTED" | "UNKNOWN") }> } }> } }
export type PostHrisProvisioningGroupsGroupIdDiffParameterGroupId = string
export type PostHrisProvisioningGroupsGroupIdDiffPositiveResponse = { status: string, data: { users: { to_provision: Array<{ email: (string | null), employee: Partial<{ id: string, remote_id: (string | null), first_name: (string | null), last_name: (string | null), groups: Array<{ id: string, remote_id: (string | null), name: (string | null) }>, avatar: (string | null), work_location_id: (string | null), legal_entity_id: (string | null) }> }>, to_deprovision: Array<{ origin_id: string, email: string }>, already_provisioned: Array<{ origin_id: string, email: string, employee: Partial<{ id: string, remote_id: (string | null), first_name: (string | null), last_name: (string | null), groups: Array<{ id: string, remote_id: (string | null), name: (string | null) }>, avatar: (string | null), work_location_id: (string | null), legal_entity_id: (string | null) }> }> } } }
export type PostHrisProvisioningGroupsGroupIdDiffRequestBody = { provisioned_users: Array<{ origin_id: string, email: string }>, options: { employee_fields: Array<("id" | "remote_id" | "first_name" | "last_name" | "groups" | "avatar" | "work_location_id" | "legal_entity_id")> } }
export type PostHrisProvisioningGroupsGroupIdSetupLinksParameterGroupId = string
export type PostHrisProvisioningGroupsGroupIdSetupLinksPositiveResponse = { status: string, data: { url: string, expires_at: string } }
export type PostHrisProvisioningGroupsGroupIdSetupLinksRequestBody = Partial<{ language: (("en" | "de" | "fr" | "it" | "es") | null) }>
export type GetHrisEmployeesParameterCursor = string
export type GetHrisEmployeesParameterPageSize = number
export type GetHrisEmployeesParameterUpdatedAfter = string
export type GetHrisEmployeesParameterIncludeDeleted = ("true" | "false")
export type GetHrisEmployeesParameterIgnoreUnsupportedFilters = ("true" | "false")
export type GetHrisEmployeesParameterIds = string
export type GetHrisEmployeesParameterRemoteIds = string
export type GetHrisEmployeesParameterEmploymentStatus = ("ACTIVE" | "PENDING" | "INACTIVE" | "LEAVE")
export type GetHrisEmployeesParameterEmploymentStatuses = string
export type GetHrisEmployeesParameterGroupIds = string
export type GetHrisEmployeesParameterLegalEntityIds = string
export type GetHrisEmployeesParameterWorkLocationIds = string
export type GetHrisEmployeesParameterWorkEmails = string
export type GetHrisEmployeesParameterPersonalEmails = string
export type GetHrisEmployeesParameterCustomFields = string
export type GetHrisEmployeesPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, remote_id: string, employee_number: (string | null), first_name: (string | null), last_name: (string | null), nationality: (string | null), display_full_name: (string | null), job_title: (string | null), work_email?: (string | null), personal_email?: (string | null), mobile_phone_number: (string | null), ssn: (string | null), tax_id: (string | null), gender?: (("MALE" | "FEMALE" | "NON_BINARY" | "NOT_SPECIFIED") | string | null), ethnicity?: (("WHITE" | "ASIAN" | "HISPANIC_LATINO" | "HAWAIIAN" | "NATIVE_AMERICAN" | "BLACK_AFRICAN_AMERICAN" | "MULTIPLE_ETHNICITIES" | "DECLINE_TO_SPECIFY") | string | null), marital_status?: (("SINGLE" | "MARRIED" | "DOMESTIC_PARTNERSHIP" | "WIDOWED" | "DIVORCED" | "SEPARATED" | "NOT_MARRIED") | string | null), employment_status?: (("ACTIVE" | "PENDING" | "INACTIVE" | "LEAVE") | string | null), employment_type?: (("FULL_TIME" | "PART_TIME" | "CONTRACT" | "INTERNSHIP" | "FREELANCE" | "WORKING_STUDENT" | "APPRENTICESHIP" | "TRAINING") | string | null), weekly_hours: (number | null), avatar: (string | null), work_location_id: (string | null), legal_entity_id: (string | null), manager_id: (string | null), home_address?: (Partial<{ city: (string | null), country: (string | null), raw: (string | null), state: (string | null), street_1: (string | null), street_2: (string | null), zip_code: (string | null) }> | null), bank_accounts?: (Array<Partial<{ iban: (string | null), bic: (string | null), account_number: (string | null), holder_name: (string | null), bank_name: (string | null), domestic_bank_routing: ({ number: string, type: (("GB_SORT_CODE" | "DE_BANKLEITZAHL" | "US_ABA_ROUTING_TRANSIT_NUMBER" | "CA_ROUTING_NUMBER" | "AU_BSB_CODE" | "FR_RIB") | null) } | null) }>> | null), date_of_birth: (string | null), start_date: (string | null), termination_date: (string | null), remote_created_at: (string | null), changed_at: string, remote_deleted_at: (string | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }>, remote_data: (Record<string, unknown> | null), employments: Array<{ id: string, remote_id: (string | null), employee_id: string, job_title: (string | null), pay_rate: (number | null), pay_period?: (("HOUR" | "DAY" | "WEEK" | "TWO_WEEKS" | "HALF_MONTH" | "MONTH" | "TWO_MONTHS" | "QUARTER" | "HALF_YEAR" | "YEAR") | string | null), pay_frequency?: (("DAILY" | "WEEKLY" | "BIWEEKLY" | "MONTHLY" | "SEMIMONTHLY" | "QUARTERLY" | "SEMIANNUALLY" | "ANNUALLY" | "PRO_RATA") | string | null), employment_type?: (("FULL_TIME" | "PART_TIME" | "CONTRACT" | "INTERNSHIP" | "FREELANCE" | "WORKING_STUDENT" | "APPRENTICESHIP" | "TRAINING") | string | null), pay_currency: (string | null), effective_date: (string | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }> }>, time_off_balances: Array<{ id: string, remote_id: (string | null), employee_id: string, type_id: string, balance: (number | null), balance_unit: (("HOURS" | "DAYS") | null), changed_at: string, remote_deleted_at: (string | null), used: (number | null), used_unit: (("HOURS" | "DAYS") | null), remote_data: (Record<string, unknown> | null) }>, manager: ({ first_name: (string | null), last_name: (string | null), display_full_name: (string | null), id: string, employee_number: (string | null), work_email?: (string | null), remote_id: string, employment_status?: (("ACTIVE" | "PENDING" | "INACTIVE" | "LEAVE") | string | null), termination_date: (string | null) } | null), groups: Array<{ id: string, remote_id: string, name: (string | null), type: (("DEPARTMENT" | "TEAM" | "COST_CENTER") | null) }>, legal_entity: ({ id: string, remote_id: (string | null), name: (string | null), address?: (Partial<{ city: (string | null), country: (string | null), raw: (string | null), state: (string | null), street_1: (string | null), street_2: (string | null), zip_code: (string | null) }> | null) } | null), teams: Array<{ id: string, remote_id: string, name: (string | null), type: (("DEPARTMENT" | "TEAM" | "COST_CENTER") | null) }>, work_location: ({ id: string, remote_id: (string | null), name: (string | null), address?: (Partial<{ city: (string | null), country: (string | null), raw: (string | null), state: (string | null), street_1: (string | null), street_2: (string | null), zip_code: (string | null) }> | null), type: (string | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null) } | null) }> } }
export type PostHrisEmployeesPositiveResponse = { status: string, data: { id: string, remote_id: string, employee_number: (string | null), first_name: (string | null), last_name: (string | null), nationality: (string | null), display_full_name: (string | null), job_title: (string | null), work_email?: (string | null), personal_email?: (string | null), mobile_phone_number: (string | null), ssn: (string | null), tax_id: (string | null), gender?: (("MALE" | "FEMALE" | "NON_BINARY" | "NOT_SPECIFIED") | string | null), ethnicity?: (("WHITE" | "ASIAN" | "HISPANIC_LATINO" | "HAWAIIAN" | "NATIVE_AMERICAN" | "BLACK_AFRICAN_AMERICAN" | "MULTIPLE_ETHNICITIES" | "DECLINE_TO_SPECIFY") | string | null), marital_status?: (("SINGLE" | "MARRIED" | "DOMESTIC_PARTNERSHIP" | "WIDOWED" | "DIVORCED" | "SEPARATED" | "NOT_MARRIED") | string | null), employment_status?: (("ACTIVE" | "PENDING" | "INACTIVE" | "LEAVE") | string | null), employment_type?: (("FULL_TIME" | "PART_TIME" | "CONTRACT" | "INTERNSHIP" | "FREELANCE" | "WORKING_STUDENT" | "APPRENTICESHIP" | "TRAINING") | string | null), weekly_hours: (number | null), avatar: (string | null), work_location_id: (string | null), legal_entity_id: (string | null), manager_id: (string | null), home_address?: (Partial<{ city: (string | null), country: (string | null), raw: (string | null), state: (string | null), street_1: (string | null), street_2: (string | null), zip_code: (string | null) }> | null), bank_accounts?: (Array<Partial<{ iban: (string | null), bic: (string | null), account_number: (string | null), holder_name: (string | null), bank_name: (string | null), domestic_bank_routing: ({ number: string, type: (("GB_SORT_CODE" | "DE_BANKLEITZAHL" | "US_ABA_ROUTING_TRANSIT_NUMBER" | "CA_ROUTING_NUMBER" | "AU_BSB_CODE" | "FR_RIB") | null) } | null) }>> | null), date_of_birth: (string | null), start_date: (string | null), termination_date: (string | null), remote_created_at: (string | null), changed_at: string, remote_deleted_at: (string | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }>, remote_data: (Record<string, unknown> | null) }, warnings: Array<{ message: string }> }
export type PostHrisEmployeesRequestBody = { first_name: string, last_name: string, work_email?: string, gender?: ("MALE" | "FEMALE" | "NON_BINARY" | "NOT_SPECIFIED"), job_title?: string, home_address?: Partial<{ street_1: string, street_2: string, city: string, state: string, zip_code: string, country: string }>, date_of_birth?: string, mobile_phone_number?: string, home_phone_number?: string, nationality?: string, start_date?: string, legal_entity_id?: string, location_id?: string, remote_fields?: Partial<{ humaans: Partial<{ employee: Record<string, unknown> }>, hibob: Partial<{ employee: Record<string, unknown> }>, sympa: Partial<{ GenericNewHire: Record<string, unknown> }>, silae: Partial<{ siret: string, employee: Record<string, unknown>, employment: Record<string, unknown> }>, peoplehr: Partial<{ job_role_effective_date: string, department: string }>, zohopeople: Partial<{ employee_id: string }>, workday: Partial<{ job_requisition_id: string, position_id: string, ssn: string, bank_account: { iban: string, bic: string, bank_name: string } }>, deel: { candidate_id: string, candidate_link: string }, bamboohr: Partial<{ employee: Record<string, unknown> }>, oracle: { group_id: string, department_id: string }, adpworkforcenow: { onboarding_template_code: string, applicant_payroll_profile_group_code: string, manager_position_id?: string, home_organization_unit_code?: string, personal_email?: string }, azuread: { password: string }, paycor: { paygroupRemoteId: string, departmentRemoteId: string }, planday: { department_remote_id: string }, dayforce: { social_security_number: string, pay_type: string, pay_class: string, pay_group: string, base_rate: number, role: string, location: string, department: string, job: string, country: string } }> }
export type Schema1 = Record<string, ({ label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: string, min_length?: (number | null), max_length?: (number | null), reg_exp?: (string | null) } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: string, min?: (number | null), max?: (number | null) } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: string } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: string, options: ({ type: string, entries: Array<{ id: string, label: string, unified_value?: string, remote_id: (string | number) }> } | { type: string, link: string }) } | { label: string, required: boolean, description?: (string | null), unified_key?: (string | null), type: string, min_items?: (number | null), max_items?: (number | null), options: ({ type: string, entries: Array<{ id: string, label: string, unified_value?: string, remote_id: (string | number) }> } | { type: string, link: string }) } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: string } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: string, properties: Schema1 } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: string, item_type: Schema2, min_items?: (number | null), max_items?: (number | null) } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: string, file_restrictions: { accepted_mime_types: Array<string>, max_file_size?: (number | null) } })>
export type Schema2 = ({ label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: string, min_length?: (number | null), max_length?: (number | null), reg_exp?: (string | null) } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: string, min?: (number | null), max?: (number | null) } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: string } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: string, options: ({ type: string, entries: Array<{ id: string, label: string, unified_value?: string, remote_id: (string | number) }> } | { type: string, link: string }) } | { label: string, required: boolean, description?: (string | null), unified_key?: (string | null), type: string, min_items?: (number | null), max_items?: (number | null), options: ({ type: string, entries: Array<{ id: string, label: string, unified_value?: string, remote_id: (string | number) }> } | { type: string, link: string }) } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: string } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: string, properties: Schema1 } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: string, item_type: Schema2, min_items?: (number | null), max_items?: (number | null) } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: string, file_restrictions: { accepted_mime_types: Array<string>, max_file_size?: (number | null) } })
export type GetHrisEmployeesFormPositiveResponse = { status: string, data: { properties: Record<string, ({ label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: string, min_length?: (number | null), max_length?: (number | null), reg_exp?: (string | null) } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: string, min?: (number | null), max?: (number | null) } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: string } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: string, options: ({ type: string, entries: Array<{ id: string, label: string, unified_value?: string, remote_id: (string | number) }> } | { type: string, link: string }) } | { label: string, required: boolean, description?: (string | null), unified_key?: (string | null), type: string, min_items?: (number | null), max_items?: (number | null), options: ({ type: string, entries: Array<{ id: string, label: string, unified_value?: string, remote_id: (string | number) }> } | { type: string, link: string }) } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: string } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: string, properties: Schema1 } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: string, item_type: Schema2, min_items?: (number | null), max_items?: (number | null) } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: string, file_restrictions: { accepted_mime_types: Array<string>, max_file_size?: (number | null) } })> }, warnings: Array<{ message: string }> }
export type PostHrisEmployeesFormPositiveResponse = { status: string, data: { id: (string | null), remote_id: (string | null), prehire: { remote_id: (string | null) } }, warnings: Array<{ message: string }> }
export type Schema6 = Array<Schema4>
export type Schema4 = (string | number | boolean | Schema5 | Schema6)
export type Schema5 = Record<string, Schema4>
export type Schema3 = Record<string, Schema4>
export type PostHrisEmployeesFormRequestBody = { properties: Schema3 }
export type PatchHrisEmployeesEmployeeIdParameterEmployeeId = string
export type PatchHrisEmployeesEmployeeIdPositiveResponse = { status: string, data: { id: string, remote_id: string, employee_number: (string | null), first_name: (string | null), last_name: (string | null), nationality: (string | null), display_full_name: (string | null), job_title: (string | null), work_email?: (string | null), personal_email?: (string | null), mobile_phone_number: (string | null), ssn: (string | null), tax_id: (string | null), gender?: (("MALE" | "FEMALE" | "NON_BINARY" | "NOT_SPECIFIED") | string | null), ethnicity?: (("WHITE" | "ASIAN" | "HISPANIC_LATINO" | "HAWAIIAN" | "NATIVE_AMERICAN" | "BLACK_AFRICAN_AMERICAN" | "MULTIPLE_ETHNICITIES" | "DECLINE_TO_SPECIFY") | string | null), marital_status?: (("SINGLE" | "MARRIED" | "DOMESTIC_PARTNERSHIP" | "WIDOWED" | "DIVORCED" | "SEPARATED" | "NOT_MARRIED") | string | null), employment_status?: (("ACTIVE" | "PENDING" | "INACTIVE" | "LEAVE") | string | null), employment_type?: (("FULL_TIME" | "PART_TIME" | "CONTRACT" | "INTERNSHIP" | "FREELANCE" | "WORKING_STUDENT" | "APPRENTICESHIP" | "TRAINING") | string | null), weekly_hours: (number | null), avatar: (string | null), work_location_id: (string | null), legal_entity_id: (string | null), manager_id: (string | null), home_address?: (Partial<{ city: (string | null), country: (string | null), raw: (string | null), state: (string | null), street_1: (string | null), street_2: (string | null), zip_code: (string | null) }> | null), bank_accounts?: (Array<Partial<{ iban: (string | null), bic: (string | null), account_number: (string | null), holder_name: (string | null), bank_name: (string | null), domestic_bank_routing: ({ number: string, type: (("GB_SORT_CODE" | "DE_BANKLEITZAHL" | "US_ABA_ROUTING_TRANSIT_NUMBER" | "CA_ROUTING_NUMBER" | "AU_BSB_CODE" | "FR_RIB") | null) } | null) }>> | null), date_of_birth: (string | null), start_date: (string | null), termination_date: (string | null), remote_created_at: (string | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null) }, warnings: Array<{ message: string }> }
export type PatchHrisEmployeesEmployeeIdRequestBody = { first_name?: string, last_name?: string, work_email: string, gender?: ("MALE" | "FEMALE" | "NON_BINARY" | "NOT_SPECIFIED"), job_title?: string, home_address?: Partial<{ street_1: string, street_2: string, city: string, state: string, zip_code: string, country: string }>, date_of_birth?: string, mobile_phone_number?: string, home_phone_number?: string, nationality?: string, start_date?: string, legal_entity_id?: string, location_id?: string, remote_fields?: Partial<{ humaans: Partial<{ employee: Record<string, unknown> }>, hibob: Partial<{ employee: Record<string, unknown> }>, sympa: Partial<{ GenericNewHire: Record<string, unknown> }>, silae: Partial<{ siret: string, employee: Record<string, unknown>, employment: Record<string, unknown> }>, peoplehr: Partial<{ job_role_effective_date: string, department: string }>, zohopeople: Partial<{ employee_id: string }>, workday: Partial<{ job_requisition_id: string, position_id: string, ssn: string, bank_account: { iban: string, bic: string, bank_name: string } }>, deel: { candidate_id: string, candidate_link: string }, bamboohr: Partial<{ employee: Record<string, unknown> }>, oracle: { group_id: string, department_id: string }, adpworkforcenow: { onboarding_template_code: string, applicant_payroll_profile_group_code: string, manager_position_id?: string, home_organization_unit_code?: string, personal_email?: string }, azuread: { password: string }, paycor: { paygroupRemoteId: string, departmentRemoteId: string }, planday: { department_remote_id: string }, dayforce: { social_security_number: string, pay_type: string, pay_class: string, pay_group: string, base_rate: number, role: string, location: string, department: string, job: string, country: string } }>, ssn?: string, marital_status?: ("SINGLE" | "MARRIED" | "DOMESTIC_PARTNERSHIP" | "WIDOWED" | "DIVORCED" | "SEPARATED" | "NOT_MARRIED"), termination_date?: string, tax_id?: string }
export type PostHrisEmployeesEmployeeIdDocumentsParameterEmployeeId = string
export type PostHrisEmployeesEmployeeIdDocumentsPositiveResponse = { status: string, data: Record<string, unknown>, warnings: Array<{ message: string }> }
export type PostHrisEmployeesEmployeeIdDocumentsRequestBody = { category_id: string, document: { name: string, content_type?: string, data_url?: string, data?: string } }
export type GetHrisEmployeeDocumentCategoriesParameterCursor = string
export type GetHrisEmployeeDocumentCategoriesParameterPageSize = number
export type GetHrisEmployeeDocumentCategoriesParameterUpdatedAfter = string
export type GetHrisEmployeeDocumentCategoriesParameterIncludeDeleted = ("true" | "false")
export type GetHrisEmployeeDocumentCategoriesParameterIgnoreUnsupportedFilters = ("true" | "false")
export type GetHrisEmployeeDocumentCategoriesParameterIds = string
export type GetHrisEmployeeDocumentCategoriesParameterRemoteIds = string
export type GetHrisEmployeeDocumentCategoriesPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, remote_id: (string | null), name: (string | null), remote_data: (Record<string, unknown> | null), changed_at: string, remote_deleted_at: (string | null) }> } }
export type GetHrisTeamsParameterCursor = string
export type GetHrisTeamsParameterPageSize = number
export type GetHrisTeamsParameterUpdatedAfter = string
export type GetHrisTeamsParameterIncludeDeleted = ("true" | "false")
export type GetHrisTeamsParameterIgnoreUnsupportedFilters = ("true" | "false")
export type GetHrisTeamsParameterIds = string
export type GetHrisTeamsParameterRemoteIds = string
export type GetHrisTeamsPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, remote_id: string, name: (string | null), changed_at: string, remote_deleted_at: (string | null), type: (("DEPARTMENT" | "TEAM" | "COST_CENTER") | null), parent_id: (string | null), remote_data: (Record<string, unknown> | null) }> } }
export type GetHrisGroupsParameterCursor = string
export type GetHrisGroupsParameterPageSize = number
export type GetHrisGroupsParameterUpdatedAfter = string
export type GetHrisGroupsParameterIncludeDeleted = ("true" | "false")
export type GetHrisGroupsParameterIgnoreUnsupportedFilters = ("true" | "false")
export type GetHrisGroupsParameterIds = string
export type GetHrisGroupsParameterRemoteIds = string
export type GetHrisGroupsParameterTypes = string
export type GetHrisGroupsParameterNameContains = string
export type GetHrisGroupsPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, remote_id: string, name: (string | null), changed_at: string, remote_deleted_at: (string | null), type: (("DEPARTMENT" | "TEAM" | "COST_CENTER") | null), parent_id: (string | null), remote_data: (Record<string, unknown> | null) }> } }
export type GetHrisEmploymentsParameterCursor = string
export type GetHrisEmploymentsParameterPageSize = number
export type GetHrisEmploymentsParameterUpdatedAfter = string
export type GetHrisEmploymentsParameterIncludeDeleted = ("true" | "false")
export type GetHrisEmploymentsParameterIgnoreUnsupportedFilters = ("true" | "false")
export type GetHrisEmploymentsParameterIds = string
export type GetHrisEmploymentsParameterRemoteIds = string
export type GetHrisEmploymentsPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, remote_id: (string | null), employee_id: string, job_title: (string | null), pay_rate: (number | null), pay_period?: (("HOUR" | "DAY" | "WEEK" | "TWO_WEEKS" | "HALF_MONTH" | "MONTH" | "TWO_MONTHS" | "QUARTER" | "HALF_YEAR" | "YEAR") | string | null), pay_frequency?: (("DAILY" | "WEEKLY" | "BIWEEKLY" | "MONTHLY" | "SEMIMONTHLY" | "QUARTERLY" | "SEMIANNUALLY" | "ANNUALLY" | "PRO_RATA") | string | null), employment_type?: (("FULL_TIME" | "PART_TIME" | "CONTRACT" | "INTERNSHIP" | "FREELANCE" | "WORKING_STUDENT" | "APPRENTICESHIP" | "TRAINING") | string | null), pay_currency: (string | null), effective_date: (string | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }> }> } }
export type GetHrisLocationsParameterCursor = string
export type GetHrisLocationsParameterPageSize = number
export type GetHrisLocationsParameterUpdatedAfter = string
export type GetHrisLocationsParameterIncludeDeleted = ("true" | "false")
export type GetHrisLocationsParameterIgnoreUnsupportedFilters = ("true" | "false")
export type GetHrisLocationsParameterIds = string
export type GetHrisLocationsParameterRemoteIds = string
export type GetHrisLocationsParameterNameContains = string
export type GetHrisLocationsPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, remote_id: (string | null), name: (string | null), address?: (Partial<{ city: (string | null), country: (string | null), raw: (string | null), state: (string | null), street_1: (string | null), street_2: (string | null), zip_code: (string | null) }> | null), type: (string | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null) }> } }
export type GetHrisAbsenceTypesParameterCursor = string
export type GetHrisAbsenceTypesParameterPageSize = number
export type GetHrisAbsenceTypesParameterUpdatedAfter = string
export type GetHrisAbsenceTypesParameterIncludeDeleted = ("true" | "false")
export type GetHrisAbsenceTypesParameterIgnoreUnsupportedFilters = ("true" | "false")
export type GetHrisAbsenceTypesParameterIds = string
export type GetHrisAbsenceTypesParameterRemoteIds = string
export type GetHrisAbsenceTypesPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, remote_id: string, name: (string | null), unit: (("HOURS" | "DAYS") | null), half_days_supported: (boolean | null), exact_times_supported: (boolean | null), remote_data: (Record<string, unknown> | null), changed_at: string, remote_deleted_at: (string | null) }> } }
export type GetHrisTimeOffBalancesParameterCursor = string
export type GetHrisTimeOffBalancesParameterPageSize = number
export type GetHrisTimeOffBalancesParameterUpdatedAfter = string
export type GetHrisTimeOffBalancesParameterIncludeDeleted = ("true" | "false")
export type GetHrisTimeOffBalancesParameterIgnoreUnsupportedFilters = ("true" | "false")
export type GetHrisTimeOffBalancesParameterIds = string
export type GetHrisTimeOffBalancesParameterRemoteIds = string
export type GetHrisTimeOffBalancesParameterEmployeeId = string
export type GetHrisTimeOffBalancesPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, remote_id: (string | null), employee_id: string, type_id: string, balance: (number | null), balance_unit: (("HOURS" | "DAYS") | null), changed_at: string, remote_deleted_at: (string | null), used: (number | null), used_unit: (("HOURS" | "DAYS") | null), remote_data: (Record<string, unknown> | null), type: { id: string, remote_id: string, name: (string | null), unit: (("HOURS" | "DAYS") | null), half_days_supported: (boolean | null), exact_times_supported: (boolean | null), remote_data: (Record<string, unknown> | null), changed_at: string, remote_deleted_at: (string | null) } }> } }
export type GetHrisAbsencesParameterCursor = string
export type GetHrisAbsencesParameterPageSize = number
export type GetHrisAbsencesParameterUpdatedAfter = string
export type GetHrisAbsencesParameterIncludeDeleted = ("true" | "false")
export type GetHrisAbsencesParameterIgnoreUnsupportedFilters = ("true" | "false")
export type GetHrisAbsencesParameterIds = string
export type GetHrisAbsencesParameterRemoteIds = string
export type GetHrisAbsencesParameterDateFrom = string
export type GetHrisAbsencesParameterDateUntil = string
export type GetHrisAbsencesParameterTypeIds = string
export type GetHrisAbsencesParameterEmployeeId = string
export type GetHrisAbsencesParameterTimeFrom = string
export type GetHrisAbsencesParameterTimeUntil = string
export type GetHrisAbsencesPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, remote_id: (string | null), employee_id: string, approver_id: (string | null), start_date: null, end_date: null, start_half_day: (boolean | null), end_half_day: (boolean | null), start_time: null, end_time: null, amount: (number | null), unit: (("HOURS" | "DAYS") | null), status?: (("REQUESTED" | "APPROVED" | "DECLINED" | "CANCELLED" | "DELETED") | string | null), employee_note: (string | null), type_id: (string | null), remote_created_at: (string | null), remote_updated_at: (string | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null), type: ({ id: string, remote_id: string, name: (string | null), unit: (("HOURS" | "DAYS") | null), half_days_supported: (boolean | null), exact_times_supported: (boolean | null), remote_data: (Record<string, unknown> | null), changed_at: string, remote_deleted_at: (string | null) } | null) }> } }
export type PostHrisAbsencesPositiveResponse = { status: string, data: { id: string, remote_id: (string | null), employee_id: string, approver_id: (string | null), start_date: null, end_date: null, start_half_day: (boolean | null), end_half_day: (boolean | null), start_time: null, end_time: null, amount: (number | null), unit: (("HOURS" | "DAYS") | null), status?: (("REQUESTED" | "APPROVED" | "DECLINED" | "CANCELLED" | "DELETED") | string | null), employee_note: (string | null), type_id: (string | null), remote_created_at: (string | null), remote_updated_at: (string | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null) }, warnings: Array<{ message: string }> }
export type PostHrisAbsencesRequestBody = { employee_id: string, absence_type_id: string, status?: ("REQUESTED" | "APPROVED"), start_date: string, end_date: string, start_half_day?: boolean, end_half_day?: boolean, amount?: number, unit?: ("HOURS" | "DAYS"), employee_note: (string | null), start_time?: string, end_time?: string, remote_fields?: Partial<{ a3innuvanomina: Partial<{ benefit_type_id: ("Delegated Payment" | "No Right to Benefit" | "Direct payment") }>, adpworkforcenow: Partial<{ employment_id: string, paid_leave: boolean }> }> }
export type DeleteHrisAbsencesAbsenceIdParameterAbsenceId = string
export type DeleteHrisAbsencesAbsenceIdPositiveResponse = { status: string, data: { id: string, remote_id: (string | null), employee_id: string, approver_id: (string | null), start_date: null, end_date: null, start_half_day: (boolean | null), end_half_day: (boolean | null), start_time: null, end_time: null, amount: (number | null), unit: (("HOURS" | "DAYS") | null), status?: (("REQUESTED" | "APPROVED" | "DECLINED" | "CANCELLED" | "DELETED") | string | null), employee_note: (string | null), type_id: (string | null), remote_created_at: (string | null), remote_updated_at: (string | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null) }, warnings: Array<{ message: string }> }
export type DeleteHrisAbsencesAbsenceIdRequestBody = Partial<{ remote_fields: Partial<{ adpworkforcenow: Partial<{ employment_id: string }> }> }>
export type GetHrisLegalEntitiesParameterCursor = string
export type GetHrisLegalEntitiesParameterPageSize = number
export type GetHrisLegalEntitiesParameterUpdatedAfter = string
export type GetHrisLegalEntitiesParameterIncludeDeleted = ("true" | "false")
export type GetHrisLegalEntitiesParameterIgnoreUnsupportedFilters = ("true" | "false")
export type GetHrisLegalEntitiesParameterIds = string
export type GetHrisLegalEntitiesParameterRemoteIds = string
export type GetHrisLegalEntitiesParameterNameContains = string
export type GetHrisLegalEntitiesPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, remote_id: (string | null), name: (string | null), address?: (Partial<{ city: (string | null), country: (string | null), raw: (string | null), state: (string | null), street_1: (string | null), street_2: (string | null), zip_code: (string | null) }> | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null) }> } }
export type GetHrisTimesheetsParameterCursor = string
export type GetHrisTimesheetsParameterPageSize = number
export type GetHrisTimesheetsParameterUpdatedAfter = string
export type GetHrisTimesheetsParameterIncludeDeleted = ("true" | "false")
export type GetHrisTimesheetsParameterIgnoreUnsupportedFilters = ("true" | "false")
export type GetHrisTimesheetsParameterIds = string
export type GetHrisTimesheetsParameterRemoteIds = string
export type GetHrisTimesheetsParameterEmployeeId = string
export type GetHrisTimesheetsParameterStartedBefore = string
export type GetHrisTimesheetsParameterStartedAfter = string
export type GetHrisTimesheetsParameterEndedBefore = string
export type GetHrisTimesheetsParameterEndedAfter = string
export type GetHrisTimesheetsPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, remote_id: (string | null), employee_id: string, started_at: (string | null), ended_at: (string | null), timezone: (string | null), payable_hours: (number | null), unpaid_break_minutes: (number | null), breaks?: (Array<{ ended_at: (string | string), paid: boolean, started_at: (string | string) }> | null), approval_status: (string | null), approved_at: (string | null), comment: (string | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }>, changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null) }> } }
export type GetHrisPerformanceReviewCyclesParameterCursor = string
export type GetHrisPerformanceReviewCyclesParameterPageSize = number
export type GetHrisPerformanceReviewCyclesParameterUpdatedAfter = string
export type GetHrisPerformanceReviewCyclesParameterIncludeDeleted = ("true" | "false")
export type GetHrisPerformanceReviewCyclesParameterIgnoreUnsupportedFilters = ("true" | "false")
export type GetHrisPerformanceReviewCyclesParameterIds = string
export type GetHrisPerformanceReviewCyclesParameterRemoteIds = string
export type GetHrisPerformanceReviewCyclesPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, remote_id: string, name: (string | null), review_period_start_date: (string | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null) }> } }
export type GetHrisPerformanceReviewsParameterCursor = string
export type GetHrisPerformanceReviewsParameterPageSize = number
export type GetHrisPerformanceReviewsParameterUpdatedAfter = string
export type GetHrisPerformanceReviewsParameterIncludeDeleted = ("true" | "false")
export type GetHrisPerformanceReviewsParameterIgnoreUnsupportedFilters = ("true" | "false")
export type GetHrisPerformanceReviewsParameterIds = string
export type GetHrisPerformanceReviewsParameterRemoteIds = string
export type GetHrisPerformanceReviewsParameterTypes = string
export type GetHrisPerformanceReviewsParameterReviewCycleIds = string
export type GetHrisPerformanceReviewsParameterRevieweeIds = string
export type GetHrisPerformanceReviewsPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, remote_id: string, type: (("MANAGER" | "DIRECT_REPORT" | "PEER" | "SELF") | null), summary_comment: (string | null), summary_rating?: ({ type: string, min: (number | null), max: (number | null), value: (number | null) } | { type: string, ordered_options: (Array<string> | null), value: (string | null) } | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null), reviewee: { id: string, remote_id: string, first_name: (string | null), last_name: (string | null), display_full_name: (string | null), work_email?: (string | null), remote_deleted_at: (string | null) }, reviewer: ({ id: string, remote_id: string, first_name: (string | null), last_name: (string | null), display_full_name: (string | null), work_email?: (string | null), remote_deleted_at: (string | null) } | null), review_cycle: ({ id: string, remote_id: string, name: (string | null), review_period_start_date: (string | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null) } | null) }> } }
export type GetHrisSkillsParameterIds = string
export type GetHrisSkillsParameterRemoteIds = string
export type GetHrisSkillsParameterNameContains = string
export type GetHrisSkillsPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, remote_id: string, name: string, description: (string | null), ordered_levels: (Array<string> | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null) }> } }
export type PostHrisSkillsPositiveResponse = { status: string, data: { id: string, remote_id: string, name: string, description: (string | null), ordered_levels: (Array<string> | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null) } }
export type PostHrisSkillsRequestBody = { name: string, levels?: Array<string> }
export type PatchHrisSkillsSkillIdParameterSkillId = string
export type PatchHrisSkillsSkillIdPositiveResponse = { status: string, data: { id: string, remote_id: string, name: string, description: (string | null), ordered_levels: (Array<string> | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null) } }
export type PatchHrisSkillsSkillIdRequestBody = Partial<{ name: string, levels: Array<string> }>
export type DeleteHrisSkillsSkillIdParameterSkillId = string
export type DeleteHrisSkillsSkillIdPositiveResponse = { status: string, data: { id: string, remote_id: string, name: string, description: (string | null), ordered_levels: (Array<string> | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null) } }
export type DeleteHrisSkillsSkillIdRequestBody = Partial<{  }>
export type GetHrisEmployeeSkillAssignmentsParameterIds = string
export type GetHrisEmployeeSkillAssignmentsParameterRemoteIds = string
export type GetHrisEmployeeSkillAssignmentsParameterEmployeeIds = string
export type GetHrisEmployeeSkillAssignmentsParameterSkillIds = string
export type GetHrisEmployeeSkillAssignmentsPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, employee_id: string, skill_id: string, current_level: (string | null) }> } }
export type PostHrisEmployeeSkillAssignmentsPositiveResponse = { status: string, data: { id: string, employee_id: string, skill_id: string, current_level: (string | null) } }
export type PostHrisEmployeeSkillAssignmentsRequestBody = { employee_id: string, skill_id: string, current_level?: string }
export type PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId = string
export type PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse = { status: string, data: { id: string, employee_id: string, skill_id: string, current_level: (string | null) } }
export type PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody = { current_level: (string | null) }
export type DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId = string
export type DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse = { status: string, data: { id: string, employee_id: string, skill_id: string, current_level: (string | null) } }
export type DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody = Partial<{  }>
export type GetHrisStaffingEntitiesParameterCursor = string
export type GetHrisStaffingEntitiesParameterPageSize = number
export type GetHrisStaffingEntitiesParameterUpdatedAfter = string
export type GetHrisStaffingEntitiesParameterIncludeDeleted = ("true" | "false")
export type GetHrisStaffingEntitiesParameterIgnoreUnsupportedFilters = ("true" | "false")
export type GetHrisStaffingEntitiesParameterIds = string
export type GetHrisStaffingEntitiesParameterRemoteIds = string
export type GetHrisStaffingEntitiesParameterModelTypes = string
export type GetHrisStaffingEntitiesParameterStatuses = string
export type GetHrisStaffingEntitiesPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, remote_id: string, name: (string | null), model_type: (("JOB" | "POSITION" | "REQUISITION") | null), description: (string | null), status: (("OPEN_LIMITED" | "OPEN_UNLIMITED" | "PENDING" | "FROZEN" | "FILLED" | "CLOSED") | null), employment_types?: (Array<{ remote_label: string, unified_type: (("FULL_TIME" | "PART_TIME" | "CONTRACT" | "INTERNSHIP" | "FREELANCE" | "WORKING_STUDENT" | "APPRENTICESHIP" | "TRAINING") | null) }> | null), number_of_openings: (number | null), parent_id: (string | null), remote_url: (string | null), remote_created_at: (string | null), remote_updated_at: (string | null), changed_at: string, remote_deleted_at: (string | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }>, remote_data: (Record<string, unknown> | null), locations: Array<{ id: string, remote_id: (string | null), name: (string | null), type: (string | null) }>, legal_entities: Array<{ id: string, remote_id: (string | null), name: (string | null) }>, groups: Array<{ id: string, remote_id: string, name: (string | null), type: (("DEPARTMENT" | "TEAM" | "COST_CENTER") | null) }> }> } }
export type GetAtsApplicationsParameterCursor = string
export type GetAtsApplicationsParameterPageSize = number
export type GetAtsApplicationsParameterUpdatedAfter = string
export type GetAtsApplicationsParameterIncludeDeleted = ("true" | "false")
export type GetAtsApplicationsParameterIgnoreUnsupportedFilters = ("true" | "false")
export type GetAtsApplicationsParameterIds = string
export type GetAtsApplicationsParameterRemoteIds = string
export type GetAtsApplicationsParameterOutcome = ("PENDING" | "HIRED" | "DECLINED")
export type GetAtsApplicationsParameterOutcomes = string
export type GetAtsApplicationsParameterJobIds = string
export type GetAtsApplicationsParameterJobRemoteIds = string
export type GetAtsApplicationsParameterCurrentStageIds = string
export type GetAtsApplicationsParameterRemoteCreatedAfter = string
export type GetAtsApplicationsPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, remote_id: (string | null), outcome: (("PENDING" | "HIRED" | "DECLINED") | null), rejection_reason_name: (string | null), rejected_at: (string | null), current_stage_id: (string | null), job_id: (string | null), candidate_id: (string | null), screening_question_answers?: (Array<({ answer: { content: (string | null) }, question: { remote_id: (string | null), title: string, type: string } } | { answer: { choice: (string | null) }, question: { remote_id: (string | null), title: string, type: string } } | { answer: Partial<{ choices: Array<string> }>, question: { remote_id: (string | null), title: string, type: string } } | { answer: { checked: (boolean | null) }, question: { remote_id: (string | null), title: string, type: string } } | { answer: { number: (number | null) }, question: { remote_id: (string | null), title: string, type: string } } | { answer: { date: (string | null) }, question: { remote_id: (string | null), title: string, type: string } } | { answer: Partial<{ raw: null }>, question: { remote_id: (string | null), title: string, type: string } })> | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }>, remote_url: (string | null), changed_at: string, remote_deleted_at: (string | null), remote_created_at: (string | null), remote_updated_at: (string | null), remote_data: (Record<string, unknown> | null), candidate: ({ id: string, remote_id: string, first_name: (string | null), last_name: (string | null), email_addresses?: (Array<{ email_address?: (string | null), type: (string | null) }> | null), phone_numbers?: (Array<{ phone_number: string, type?: (string | null) }> | null), social_media?: (Array<Partial<{ link: (string | null), type: (string | null), username: (string | null) }>> | null), source: (string | null), remote_url: (string | null), tags: Array<{ id: string, remote_id: (string | null), name: (string | null) }> } | null), current_stage: ({ id: string, remote_id: (string | null), name: (string | null), index: (number | null) } | null), job: ({ id: string, remote_id: string, name: (string | null) } | null), interviews: Array<{ id: string, remote_id: (string | null), title: (string | null), starting_at: (string | null), ending_at: (string | null), location?: (Partial<{ city: (string | null), country: (string | null), raw: (string | null), state: (string | null), street_1: (string | null), street_2: (string | null), zip_code: (string | null) }> | null), canceled: (boolean | null) }>, offers: Array<{ id: string, remote_id: (string | null), status: (("ACCEPTED" | "DECLINED" | "SENT" | "APPROVED" | "DRAFT" | "ABANDONED") | null) }> }> } }
export type PutAtsApplicationsApplicationIdStageParameterApplicationId = string
export type PutAtsApplicationsApplicationIdStagePositiveResponse = { status: string, data: Record<string, unknown>, warnings: Array<{ message: string }> }
export type PutAtsApplicationsApplicationIdStageRequestBody = { stage_id: string, remote_fields?: (Partial<{ workday: Partial<{ Workflow_Step_ID: string, Step_Type: ("Next_Step_Reference" | "Disposition_Step_Reference") }> }> & Partial<{ greenhouse: Partial<{ post_headers: Partial<{ "On-Behalf-Of": (string | null) }> }>, workable: Partial<{ on_behalf_of_user_remote_id: string }> }>) }
export type PostAtsApplicationsApplicationIdResultLinksParameterApplicationId = string
export type PostAtsApplicationsApplicationIdResultLinksPositiveResponse = { status: string, data: Record<string, unknown>, warnings: Array<{ message: string }> }
export type PostAtsApplicationsApplicationIdResultLinksRequestBody = { label: string, url: string, details?: { custom_field_name_prefix: string, attributes: Array<{ key: string, value: string }> }, remote_fields?: (Partial<{ icims: Partial<{ assessment_package_id: string }>, oracle: Partial<{ override_document_category: ("IRC_CANDIDATE_RESUME" | "IRC_CANDIDATE_COVERLETTER" | "MISC" | "IRC_INTERNAL"), multi_post_to_all_current_applications: boolean }> }> & Partial<{ greenhouse: Partial<{ post_headers: Partial<{ "On-Behalf-Of": (string | null) }> }>, workable: Partial<{ on_behalf_of_user_remote_id: string }> }>) }
export type PostAtsApplicationsApplicationIdNotesParameterApplicationId = string
export type PostAtsApplicationsApplicationIdNotesPositiveResponse = { status: string, data: Record<string, unknown>, warnings: Array<{ message: string }> }
export type PostAtsApplicationsApplicationIdNotesRequestBody = { content: string, content_type: "PLAIN_TEXT", remote_fields?: (Partial<{ teamtailor: Partial<{ user_id: string }>, greenhouse: Partial<{ visibility: ("admin_only" | "private" | "public") }>, recruitee: Partial<{ visibility: unknown, is_json: boolean }>, bullhorn: Partial<{ action: string }>, lever: Partial<{ perform_as: string }> }> & Partial<{ greenhouse: Partial<{ post_headers: Partial<{ "On-Behalf-Of": (string | null) }> }>, workable: Partial<{ on_behalf_of_user_remote_id: string }> }>) }
export type GetAtsApplicationsApplicationIdAttachmentsParameterApplicationId = string
export type GetAtsApplicationsApplicationIdAttachmentsPositiveResponse = { status: string, data: { results: Array<{ type: ("CV" | "COVER_LETTER" | "OTHER"), id: string, remote_id: string, data_url: string, file_name: string, content_type: string, remote_created_at: (string | null), remote_updated_at: (string | null) }> }, warnings: Array<{ message: string }> }
export type PostAtsApplicationsApplicationIdAttachmentsParameterApplicationId = string
export type PostAtsApplicationsApplicationIdAttachmentsPositiveResponse = { status: string, data: Record<string, unknown>, warnings: Array<{ message: string }> }
export type PostAtsApplicationsApplicationIdAttachmentsRequestBody = { attachment: { name: string, content_type?: string, data_url?: string, data?: string, type: ("CV" | "COVER_LETTER" | "OTHER") }, remote_fields?: (Partial<{ oracle: Partial<{ override_document_category: ("IRC_CANDIDATE_RESUME" | "IRC_CANDIDATE_COVERLETTER" | "MISC" | "IRC_INTERNAL"), multi_post_to_all_current_applications: boolean }> }> & Partial<{ greenhouse: Partial<{ post_headers: Partial<{ "On-Behalf-Of": (string | null) }> }>, workable: Partial<{ on_behalf_of_user_remote_id: string }> }>) }
export type PostAtsApplicationsApplicationIdRejectParameterApplicationId = string
export type PostAtsApplicationsApplicationIdRejectPositiveResponse = { status: string, data: Record<string, unknown>, warnings: Array<{ message: string }> }
export type PostAtsApplicationsApplicationIdRejectRequestBody = { rejection_reason_id: string, note?: string, remote_fields?: (Partial<{ greenhouse: Partial<{ rejection_email: Record<string, unknown> }>, teamtailor: Partial<{ user_id: string }> }> & Partial<{ greenhouse: Partial<{ post_headers: Partial<{ "On-Behalf-Of": (string | null) }> }>, workable: Partial<{ on_behalf_of_user_remote_id: string }> }>) }
export type PostAtsApplicationsApplicationIdInterviewsParameterApplicationId = string
export type PostAtsApplicationsApplicationIdInterviewsPositiveResponse = { status: string, data: Record<string, unknown> }
export type PostAtsApplicationsApplicationIdInterviewsRequestBody = { title: string, start_time: string, end_time: string, interviewer_user_ids: Array<string>, organizer_user_id: string, location: { type: ("PHYSICAL" | "VIRTUAL"), address?: string } }
export type PatchAtsApplicationsApplicationIdInterviewsParameterApplicationId = string
export type PatchAtsApplicationsApplicationIdInterviewsPositiveResponse = { status: string, data: Record<string, unknown> }
export type PatchAtsApplicationsApplicationIdInterviewsRequestBody = { interview_id: string, title: string, start_time: string, end_time: string, interviewer_user_ids: Array<string>, organizer_user_id: string, location: { type: ("PHYSICAL" | "VIRTUAL"), address?: string } }
export type GetAtsCandidatesParameterCursor = string
export type GetAtsCandidatesParameterPageSize = number
export type GetAtsCandidatesParameterUpdatedAfter = string
export type GetAtsCandidatesParameterIncludeDeleted = ("true" | "false")
export type GetAtsCandidatesParameterIgnoreUnsupportedFilters = ("true" | "false")
export type GetAtsCandidatesParameterIds = string
export type GetAtsCandidatesParameterRemoteIds = string
export type GetAtsCandidatesParameterEmail = string
export type GetAtsCandidatesParameterJobIds = string
export type GetAtsCandidatesParameterFirstName = string
export type GetAtsCandidatesParameterLastName = string
export type GetAtsCandidatesPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, remote_id: string, first_name: (string | null), last_name: (string | null), company: (string | null), title: (string | null), confidential: (boolean | null), source: (string | null), phone_numbers?: (Array<{ phone_number: string, type?: (string | null) }> | null), email_addresses?: (Array<{ email_address?: (string | null), type: (string | null) }> | null), social_media?: (Array<Partial<{ link: (string | null), type: (string | null), username: (string | null) }>> | null), location?: (Partial<{ city: (string | null), country: (string | null), raw: (string | null), state: (string | null), street_1: (string | null), street_2: (string | null), zip_code: (string | null) }> | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }>, remote_url: (string | null), remote_created_at: (string | null), remote_updated_at: (string | null), remote_data: (Record<string, unknown> | null), changed_at: string, remote_deleted_at: (string | null), applications: Array<{ id: string, remote_id: (string | null), outcome: (("PENDING" | "HIRED" | "DECLINED") | null), rejection_reason_name: (string | null), rejected_at: (string | null), remote_url: (string | null), changed_at: string, remote_created_at: (string | null), remote_updated_at: (string | null), current_stage: ({ id: string, name: (string | null), remote_id: (string | null), index: (number | null) } | null), job: ({ id: string, name: (string | null), remote_id: string } | null) }>, tags: Array<{ id: string, name: (string | null), remote_id: (string | null) }> }> } }
export type PostAtsCandidatesPositiveResponse = { status: string, data: { id: string, remote_id: string, first_name: (string | null), last_name: (string | null), company: (string | null), title: (string | null), confidential: (boolean | null), source: (string | null), phone_numbers?: (Array<{ phone_number: string, type?: (string | null) }> | null), email_addresses?: (Array<{ email_address?: (string | null), type: (string | null) }> | null), social_media?: (Array<Partial<{ link: (string | null), type: (string | null), username: (string | null) }>> | null), location?: (Partial<{ city: (string | null), country: (string | null), raw: (string | null), state: (string | null), street_1: (string | null), street_2: (string | null), zip_code: (string | null) }> | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }>, remote_url: (string | null), remote_created_at: (string | null), remote_updated_at: (string | null), remote_data: (Record<string, unknown> | null), changed_at: string, remote_deleted_at: (string | null), applications: Array<{ id: string, remote_id: (string | null), outcome: (("PENDING" | "HIRED" | "DECLINED") | null), rejection_reason_name: (string | null), rejected_at: (string | null), remote_url: (string | null), changed_at: string, remote_created_at: (string | null), remote_updated_at: (string | null), current_stage: ({ id: string, name: (string | null), remote_id: (string | null), index: (number | null) } | null), job: ({ id: string, name: (string | null), remote_id: string } | null) }>, tags: Array<{ id: string, name: (string | null), remote_id: (string | null) }> }, warnings: Array<{ message: string }> }
export type PostAtsCandidatesRequestBody = { candidate: { first_name: string, last_name: string, email_address: string, additional_email_addresses?: Array<{ type: ("PERSONAL" | "WORK" | "OTHER"), email_address: string }>, company?: string, title?: string, phone_number?: string, additional_phone_numbers?: Array<{ type: ("PERSONAL" | "WORK" | "OTHER"), phone_number: string }>, location?: { city?: string, country: string, state?: string, street_1?: string, zip_code?: string }, gender?: ("MALE" | "FEMALE" | "OTHER"), availability_date?: string, salary_expectations?: { period: ("MONTH" | "YEAR"), amount: number }, social_links?: Array<{ url: string }> }, application: { job_id: string, stage_id?: string }, screening_question_answers?: Array<{ question_id: string, answer: (string | boolean | number | Array<string> | string | { name: string, content_type?: string, data_url?: string, data?: string }) }>, attachments?: Array<{ name: string, content_type?: string, data_url?: string, data?: string, type: ("CV" | "COVER_LETTER" | "OTHER") }>, source?: Partial<{ name: string, unified_key: string, id: string }>, sourced_by?: { user_id: string }, gdpr_consent?: Partial<{ expires_at: string, given: boolean }>, remote_fields?: (Partial<{ successfactors: Partial<{ Candidate: Record<string, unknown>, JobApplication: Record<string, unknown>, copyJobApplicationAttachments: boolean, update_existing_candidate: (boolean | null) }>, personio: Partial<{ application: Record<string, unknown> }>, talentsoft: Partial<{ applicant: Record<string, unknown>, application: Record<string, unknown> }>, teamtailor: Partial<{ candidate: Record<string, unknown>, application: Partial<{ attributes: Record<string, unknown> }> }>, greenhouse: Partial<{ candidate: Record<string, unknown>, application: Record<string, unknown> }>, lever: Partial<{ candidate: Record<string, unknown> }>, workable: Partial<{ candidate: Record<string, unknown> }>, workday: Partial<{ Candidate_Data: Partial<{ Name_Detail_Data: Partial<{ Middle_Name: string, Social_Suffix_Reference: { Predefined_Name_Component_ID: string } }>, Language_Reference: { WID: string }, Job_Application_Data: Partial<{ Job_Applied_To_Data: Partial<{ Global_Personal_Information_Data: Partial<{ Date_of_Birth: string }> }>, Resume_Data: Partial<{ Education_Data: Array<Partial<{ School_Name: string, First_Year_Attended: number, Last_Year_Attended: number, Field_of_Study_Reference: { WID: string }, Degree_Reference: { WID: string }, Grade_Average: string }>>, Skill_Data: Array<Partial<{ Skill_Name: string }>>, Language_Data: Array<Partial<{ Language_Reference: Partial<{ WID: string }>, Language: { Native?: boolean, Language_Ability: Array<Partial<{ Language_Ability_Data: Partial<{ Language_Proficiency_Reference: { WID: string }, Language_Ability_Type_Reference: { WID: string } }> }>> } }>>, Experience_Data: Array<{ Company_Name: string, Title: string, Location?: string, Start_Date: string, End_Date?: string, Currently_Work_Here?: boolean, Description?: string }> }> }>, Contact_Data: Partial<{ Location_Data: Partial<{ Address_Line_1: string, Address_Line_2: string, Region_Subdivision_1: string, Country_Region_Reference: { Country_Region_ID: string }, Country_City_Reference: { WID: string } }> }>, Worker_Reference: Partial<{ WID: string, Employee_ID: string }> }>, Override_Source_Reference_WID: string }>, zohorecruit: Partial<{ candidate: Record<string, unknown> }>, bullhorn: Partial<{ candidate: Record<string, unknown>, job_submission: Record<string, unknown> }>, smartrecruiters: Partial<{ candidate_with_questions: Record<string, unknown>, candidate_without_questions: Record<string, unknown>, candidate: Record<string, unknown>, consent_decisions: Partial<{ SINGLE: boolean, SMART_RECRUIT: boolean, SMART_CRM: boolean, SMART_MESSAGE_SMS: boolean, SMART_MESSAGE_WHATSAPP: boolean }> }>, talentadore: Partial<{ applications: Record<string, unknown> }>, guidecom: Partial<{ candidate: Record<string, unknown> }>, dvinci: Partial<{ application: Record<string, unknown>, candidate: Record<string, unknown> }>, hrworks: Partial<{ jobApplication: Record<string, unknown> }>, jobylon: Partial<{ application: Partial<{ message: string }> }>, avature: Partial<{ workflow: Partial<{ step: { id: number } }> }>, recruitee: Partial<{ candidate: Partial<{ cover_letter_text: string }> }>, rexx: Partial<{ candidate: Record<string, unknown> }>, umantis: Partial<{ person: Record<string, unknown> }>, piloga: Partial<{ candidate: Partial<{ street: string }> }>, pinpoint: Partial<{ candidate: Record<string, unknown> }>, covetorest: Partial<{ candidate: Partial<{ mandant: number }> }> }> & Partial<{ greenhouse: Partial<{ post_headers: Partial<{ "On-Behalf-Of": (string | null) }> }>, workable: Partial<{ on_behalf_of_user_remote_id: string }> }>) }
export type GetAtsCandidatesCandidateIdAttachmentsParameterCandidateId = string
export type GetAtsCandidatesCandidateIdAttachmentsPositiveResponse = { status: string, data: { results: Array<{ id: string, application_id: (string | null), candidate_id: string, type: ("CV" | "COVER_LETTER" | "OTHER"), remote_id: string, data_url: string, file_name: string, content_type: string, remote_created_at: (string | null), remote_updated_at: (string | null) }> }, warnings: Array<{ message: string }> }
export type PostAtsCandidatesCandidateIdAttachmentsParameterCandidateId = string
export type PostAtsCandidatesCandidateIdAttachmentsPositiveResponse = { status: string, data: Record<string, unknown>, warnings: Array<{ message: string }> }
export type PostAtsCandidatesCandidateIdAttachmentsRequestBody = { attachment: { name: string, content_type?: string, data_url?: string, data?: string, type: ("CV" | "COVER_LETTER" | "OTHER") }, remote_fields?: Partial<{ greenhouse: Partial<{ post_headers: Partial<{ "On-Behalf-Of": (string | null) }> }>, workable: Partial<{ on_behalf_of_user_remote_id: string }> }> }
export type PostAtsCandidatesCandidateIdResultLinksParameterCandidateId = string
export type PostAtsCandidatesCandidateIdResultLinksPositiveResponse = { status: string, data: Record<string, unknown>, warnings: Array<{ message: string }> }
export type PostAtsCandidatesCandidateIdResultLinksRequestBody = { label: string, url: string, details?: { custom_field_name_prefix: string, attributes: Array<{ key: string, value: string }> }, remote_fields?: (Partial<{ icims: Partial<{ assessment_package_id: string }>, oracle: Partial<{ override_document_category: ("IRC_CANDIDATE_RESUME" | "IRC_CANDIDATE_COVERLETTER" | "MISC" | "IRC_INTERNAL"), multi_post_to_all_current_applications: boolean }> }> & Partial<{ greenhouse: Partial<{ post_headers: Partial<{ "On-Behalf-Of": (string | null) }> }>, workable: Partial<{ on_behalf_of_user_remote_id: string }> }>) }
export type PostAtsCandidatesCandidateIdTagsParameterCandidateId = string
export type PostAtsCandidatesCandidateIdTagsPositiveResponse = { status: string, data: Record<string, unknown>, warnings: Array<{ message: string }> }
export type PostAtsCandidatesCandidateIdTagsRequestBody = { tag: { name: string }, remote_fields?: Partial<{ greenhouse: Partial<{ post_headers: Partial<{ "On-Behalf-Of": (string | null) }> }>, workable: Partial<{ on_behalf_of_user_remote_id: string }> }> }
export type DeleteAtsCandidatesCandidateIdTagsParameterCandidateId = string
export type DeleteAtsCandidatesCandidateIdTagsPositiveResponse = { status: string, data: Record<string, unknown>, warnings: Array<{ message: string }> }
export type DeleteAtsCandidatesCandidateIdTagsRequestBody = { tag: { name: string }, remote_fields?: Partial<{ greenhouse: Partial<{ post_headers: Partial<{ "On-Behalf-Of": (string | null) }> }>, workable: Partial<{ on_behalf_of_user_remote_id: string }> }> }
export type GetAtsTagsParameterCursor = string
export type GetAtsTagsParameterPageSize = number
export type GetAtsTagsParameterUpdatedAfter = string
export type GetAtsTagsParameterIncludeDeleted = ("true" | "false")
export type GetAtsTagsParameterIgnoreUnsupportedFilters = ("true" | "false")
export type GetAtsTagsParameterIds = string
export type GetAtsTagsParameterRemoteIds = string
export type GetAtsTagsPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, remote_id: (string | null), name: (string | null), remote_data: (Record<string, unknown> | null), changed_at: string, remote_deleted_at: (string | null) }> } }
export type GetAtsApplicationStagesParameterCursor = string
export type GetAtsApplicationStagesParameterPageSize = number
export type GetAtsApplicationStagesParameterUpdatedAfter = string
export type GetAtsApplicationStagesParameterIncludeDeleted = ("true" | "false")
export type GetAtsApplicationStagesParameterIgnoreUnsupportedFilters = ("true" | "false")
export type GetAtsApplicationStagesParameterIds = string
export type GetAtsApplicationStagesParameterRemoteIds = string
export type GetAtsApplicationStagesPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, remote_id: (string | null), name: (string | null), remote_data: (Record<string, unknown> | null), changed_at: string, remote_deleted_at: (string | null) }> } }
export type GetAtsJobsParameterCursor = string
export type GetAtsJobsParameterPageSize = number
export type GetAtsJobsParameterUpdatedAfter = string
export type GetAtsJobsParameterIncludeDeleted = ("true" | "false")
export type GetAtsJobsParameterIgnoreUnsupportedFilters = ("true" | "false")
export type GetAtsJobsParameterIds = string
export type GetAtsJobsParameterRemoteIds = string
export type GetAtsJobsParameterJobCodes = string
export type GetAtsJobsParameterPostUrl = string
export type GetAtsJobsParameterStatus = ("OPEN" | "CLOSED" | "DRAFT" | "ARCHIVED")
export type GetAtsJobsParameterStatuses = string
export type GetAtsJobsParameterEmploymentTypes = string
export type GetAtsJobsParameterVisibilities = string
export type GetAtsJobsParameterRemoteCreatedAfter = string
export type GetAtsJobsParameterNameContains = string
export type GetAtsJobsPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, remote_id: string, name: (string | null), job_code: (string | null), description: (string | null), confidential: (boolean | null), weekly_hours: (number | null), employment_type?: (("FULL_TIME" | "PART_TIME" | "CONTRACT" | "SEASONAL" | "INTERNSHIP") | string | null), status?: (("OPEN" | "CLOSED" | "DRAFT" | "ARCHIVED") | string | null), visibility?: (("PUBLIC" | "INTERNAL" | "UNLISTED" | "CONFIDENTIAL") | string | null), category: (string | null), department: (string | null), post_url: (string | null), experience_level: (string | null), remote_work_status?: (("REMOTE" | "HYBRID" | "TEMPORARY" | "ON_SITE") | string | null), salary_amount: (number | null), salary_amount_from: (number | null), salary_amount_to: (number | null), salary_currency: (string | null), salary_period?: (("YEAR" | "MONTH" | "TWO_WEEKS" | "WEEK" | "DAY" | "HOUR") | string | null), location?: (Partial<{ city: (string | null), country: (string | null), raw: (string | null), state: (string | null), street_1: (string | null), street_2: (string | null), zip_code: (string | null) }> | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }>, remote_url: (string | null), opened_at: (string | null), closed_at: (string | null), remote_created_at: (string | null), remote_updated_at: (string | null), contact_id: (string | null), remote_data: (Record<string, unknown> | null), changed_at: string, remote_deleted_at: (string | null), stages: Array<{ id: string, remote_id: (string | null), name: (string | null), remote_data: (Record<string, unknown> | null), index?: (number | null) }>, screening_questions: Array<{ id: string, remote_id: (string | null), title: (string | null), description: (string | null), format?: ({ display_type?: (("SINGLE_LINE" | "MULTI_LINE" | "EMAIL" | "URL") | null), max_length?: (number | null), type: string } | { display_type?: (("SLIDER" | "FIELD") | null), max?: (number | null), min?: (number | null), type: string } | { accepted_mime_types?: (Array<string> | null), max_file_size_bytes?: (number | null), type: string } | { display_type?: (("DROPDOWN" | "RADIO") | null), options: Array<{ id: string, remote_id?: (string | null), name: string }>, type: string } | { type: string } | { type: string } | { options: Array<{ id: string, remote_id?: (string | null), name: string }>, type: string } | { type: string } | { raw_question?: unknown, type: string } | null), category: (("EEO" | "DEMOGRAPHIC") | null), index?: (number | null), required: (boolean | null), precondition_question_id?: (string | null), precondition_options?: (Array<string> | Array<boolean> | null) }>, job_postings: Array<{ id: string, remote_id: (string | null), title: (string | null), description_html: (string | null), status: (("ACTIVE" | "INACTIVE" | "DRAFT") | null), visibility: (("PUBLIC" | "INTERNAL" | "UNLISTED") | null), url: (string | null), remote_data: (Record<string, unknown> | null) }>, hiring_team: Array<{ id: string, remote_id: (string | null), first_name: (string | null), last_name: (string | null), email?: (string | null), hiring_team_roles: Array<("RECRUITER" | "HIRING_MANAGER" | "COORDINATOR" | "SOURCER" | "INTERVIEWER")>, job_roles: Array<{ remote_id: (string | null), remote_label: (string | null), scope: (("SYSTEM" | "JOB") | null), unified_type: (("HIRING_MANAGER" | "RECRUITER" | "COORDINATOR" | "SOURCER" | "INTERVIEWER" | "ADMIN") | null) }> }> }> } }
export type PostAtsJobsJobIdApplicationsParameterJobId = string
export type PostAtsJobsJobIdApplicationsPositiveResponse = { status: string, data: { id: string, remote_id: (string | null), outcome: (("PENDING" | "HIRED" | "DECLINED") | null), rejection_reason_name: (string | null), rejected_at: (string | null), current_stage_id: (string | null), job_id: (string | null), candidate_id: (string | null), screening_question_answers?: (Array<({ answer: { content: (string | null) }, question: { remote_id: (string | null), title: string, type: string } } | { answer: { choice: (string | null) }, question: { remote_id: (string | null), title: string, type: string } } | { answer: Partial<{ choices: Array<string> }>, question: { remote_id: (string | null), title: string, type: string } } | { answer: { checked: (boolean | null) }, question: { remote_id: (string | null), title: string, type: string } } | { answer: { number: (number | null) }, question: { remote_id: (string | null), title: string, type: string } } | { answer: { date: (string | null) }, question: { remote_id: (string | null), title: string, type: string } } | { answer: Partial<{ raw: null }>, question: { remote_id: (string | null), title: string, type: string } })> | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }>, remote_url: (string | null), changed_at: string, remote_deleted_at: (string | null), remote_created_at: (string | null), remote_updated_at: (string | null), remote_data: (Record<string, unknown> | null), current_stage: ({ id: string, name: (string | null), remote_id: (string | null), index: (number | null) } | null), job: ({ id: string, name: (string | null), remote_id: string } | null), candidate: ({ id: string, remote_id: string, first_name: (string | null), last_name: (string | null), company: (string | null), title: (string | null), confidential: (boolean | null), source: (string | null), phone_numbers?: (Array<{ phone_number: string, type?: (string | null) }> | null), email_addresses?: (Array<{ email_address?: (string | null), type: (string | null) }> | null), social_media?: (Array<Partial<{ link: (string | null), type: (string | null), username: (string | null) }>> | null), location?: (Partial<{ city: (string | null), country: (string | null), raw: (string | null), state: (string | null), street_1: (string | null), street_2: (string | null), zip_code: (string | null) }> | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }>, remote_url: (string | null), remote_created_at: (string | null), remote_updated_at: (string | null), remote_data: (Record<string, unknown> | null), changed_at: string, remote_deleted_at: (string | null), tags: Array<{ id: string, name: (string | null), remote_id: (string | null) }> } | null) }, warnings: Array<{ message: string }> }
export type PostAtsJobsJobIdApplicationsRequestBody = { stage_id?: string, candidate: { first_name: string, last_name: string, email_address: string, additional_email_addresses?: Array<{ type: ("PERSONAL" | "WORK" | "OTHER"), email_address: string }>, company?: string, title?: string, phone_number?: string, additional_phone_numbers?: Array<{ type: ("PERSONAL" | "WORK" | "OTHER"), phone_number: string }>, location?: { city?: string, country: string, state?: string, street_1?: string, zip_code?: string }, gender?: ("MALE" | "FEMALE" | "OTHER"), availability_date?: string, salary_expectations?: { period: ("MONTH" | "YEAR"), amount: number }, social_links?: Array<{ url: string }> }, attachments?: Array<{ name: string, content_type?: string, data_url?: string, data?: string, type: ("CV" | "COVER_LETTER" | "OTHER") }>, source?: Partial<{ name: string, unified_key: string, id: string }>, sourced_by?: { user_id: string }, gdpr_consent?: Partial<{ expires_at: string, given: boolean }>, remote_fields?: (Partial<{ successfactors: Partial<{ Candidate: Record<string, unknown>, JobApplication: Record<string, unknown>, copyJobApplicationAttachments: boolean, update_existing_candidate: (boolean | null) }>, personio: Partial<{ application: Record<string, unknown> }>, talentsoft: Partial<{ applicant: Record<string, unknown>, application: Record<string, unknown> }>, teamtailor: Partial<{ candidate: Record<string, unknown>, application: Partial<{ attributes: Record<string, unknown> }> }>, greenhouse: Partial<{ candidate: Record<string, unknown>, application: Record<string, unknown> }>, lever: Partial<{ candidate: Record<string, unknown> }>, workable: Partial<{ candidate: Record<string, unknown> }>, workday: Partial<{ Candidate_Data: Partial<{ Name_Detail_Data: Partial<{ Middle_Name: string, Social_Suffix_Reference: { Predefined_Name_Component_ID: string } }>, Language_Reference: { WID: string }, Job_Application_Data: Partial<{ Job_Applied_To_Data: Partial<{ Global_Personal_Information_Data: Partial<{ Date_of_Birth: string }> }>, Resume_Data: Partial<{ Education_Data: Array<Partial<{ School_Name: string, First_Year_Attended: number, Last_Year_Attended: number, Field_of_Study_Reference: { WID: string }, Degree_Reference: { WID: string }, Grade_Average: string }>>, Skill_Data: Array<Partial<{ Skill_Name: string }>>, Language_Data: Array<Partial<{ Language_Reference: Partial<{ WID: string }>, Language: { Native?: boolean, Language_Ability: Array<Partial<{ Language_Ability_Data: Partial<{ Language_Proficiency_Reference: { WID: string }, Language_Ability_Type_Reference: { WID: string } }> }>> } }>>, Experience_Data: Array<{ Company_Name: string, Title: string, Location?: string, Start_Date: string, End_Date?: string, Currently_Work_Here?: boolean, Description?: string }> }> }>, Contact_Data: Partial<{ Location_Data: Partial<{ Address_Line_1: string, Address_Line_2: string, Region_Subdivision_1: string, Country_Region_Reference: { Country_Region_ID: string }, Country_City_Reference: { WID: string } }> }>, Worker_Reference: Partial<{ WID: string, Employee_ID: string }> }>, Override_Source_Reference_WID: string }>, zohorecruit: Partial<{ candidate: Record<string, unknown> }>, bullhorn: Partial<{ candidate: Record<string, unknown>, job_submission: Record<string, unknown> }>, smartrecruiters: Partial<{ candidate_with_questions: Record<string, unknown>, candidate_without_questions: Record<string, unknown>, candidate: Record<string, unknown>, consent_decisions: Partial<{ SINGLE: boolean, SMART_RECRUIT: boolean, SMART_CRM: boolean, SMART_MESSAGE_SMS: boolean, SMART_MESSAGE_WHATSAPP: boolean }> }>, talentadore: Partial<{ applications: Record<string, unknown> }>, guidecom: Partial<{ candidate: Record<string, unknown> }>, dvinci: Partial<{ application: Record<string, unknown>, candidate: Record<string, unknown> }>, hrworks: Partial<{ jobApplication: Record<string, unknown> }>, jobylon: Partial<{ application: Partial<{ message: string }> }>, avature: Partial<{ workflow: Partial<{ step: { id: number } }> }>, recruitee: Partial<{ candidate: Partial<{ cover_letter_text: string }> }>, rexx: Partial<{ candidate: Record<string, unknown> }>, umantis: Partial<{ person: Record<string, unknown> }>, piloga: Partial<{ candidate: Partial<{ street: string }> }>, pinpoint: Partial<{ candidate: Record<string, unknown> }>, covetorest: Partial<{ candidate: Partial<{ mandant: number }> }> }> & Partial<{ greenhouse: Partial<{ post_headers: Partial<{ "On-Behalf-Of": (string | null) }> }>, workable: Partial<{ on_behalf_of_user_remote_id: string }> }>), screening_question_answers?: Array<{ question_id: string, answer: (string | boolean | number | Array<string> | string | { name: string, content_type?: string, data_url?: string, data?: string }) }> }
export type GetAtsUsersParameterCursor = string
export type GetAtsUsersParameterPageSize = number
export type GetAtsUsersParameterUpdatedAfter = string
export type GetAtsUsersParameterIncludeDeleted = ("true" | "false")
export type GetAtsUsersParameterIgnoreUnsupportedFilters = ("true" | "false")
export type GetAtsUsersParameterIds = string
export type GetAtsUsersParameterRemoteIds = string
export type GetAtsUsersParameterEmails = string
export type GetAtsUsersPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, remote_id: (string | null), first_name: (string | null), last_name: (string | null), email?: (string | null), status: (("ACTIVE" | "INACTIVE") | null), remote_data: (Record<string, unknown> | null), changed_at: string, remote_deleted_at: (string | null), system_roles: Array<{ remote_id: (string | null), remote_label: (string | null), scope: (("SYSTEM" | "JOB") | null), unified_type: (("HIRING_MANAGER" | "RECRUITER" | "COORDINATOR" | "SOURCER" | "INTERVIEWER" | "ADMIN") | null) }> }> } }
export type GetAtsRolesParameterCursor = string
export type GetAtsRolesParameterPageSize = number
export type GetAtsRolesParameterUpdatedAfter = string
export type GetAtsRolesParameterIncludeDeleted = ("true" | "false")
export type GetAtsRolesParameterIgnoreUnsupportedFilters = ("true" | "false")
export type GetAtsRolesParameterIds = string
export type GetAtsRolesParameterRemoteIds = string
export type GetAtsRolesParameterScopes = string
export type GetAtsRolesPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, remote_id: (string | null), remote_label: (string | null), scope: (("SYSTEM" | "JOB") | null), unified_type: (("HIRING_MANAGER" | "RECRUITER" | "COORDINATOR" | "SOURCER" | "INTERVIEWER" | "ADMIN") | null), remote_data: (Record<string, unknown> | null), changed_at: string, remote_deleted_at: (string | null) }> } }
export type GetAtsOffersParameterCursor = string
export type GetAtsOffersParameterPageSize = number
export type GetAtsOffersParameterUpdatedAfter = string
export type GetAtsOffersParameterIncludeDeleted = ("true" | "false")
export type GetAtsOffersParameterIgnoreUnsupportedFilters = ("true" | "false")
export type GetAtsOffersParameterIds = string
export type GetAtsOffersParameterRemoteIds = string
export type GetAtsOffersPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, remote_id: (string | null), status: (("ACCEPTED" | "DECLINED" | "SENT" | "APPROVED" | "DRAFT" | "ABANDONED") | null), employment_start_date: (string | null), application_id: (string | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }>, changed_at: string, remote_deleted_at: (string | null), remote_created_at: (string | null), remote_updated_at: (string | null), remote_data: (Record<string, unknown> | null), application: ({ candidate: ({ id: string, remote_id: string, first_name: (string | null), last_name: (string | null), email_addresses?: (Array<{ email_address?: (string | null), type: (string | null) }> | null) } | null), job: ({ id: string, remote_id: string, name: (string | null) } | null) } | null) }> } }
export type GetAtsRejectionReasonsParameterCursor = string
export type GetAtsRejectionReasonsParameterPageSize = number
export type GetAtsRejectionReasonsParameterUpdatedAfter = string
export type GetAtsRejectionReasonsParameterIncludeDeleted = ("true" | "false")
export type GetAtsRejectionReasonsParameterIgnoreUnsupportedFilters = ("true" | "false")
export type GetAtsRejectionReasonsParameterIds = string
export type GetAtsRejectionReasonsParameterRemoteIds = string
export type GetAtsRejectionReasonsPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, remote_id: string, name: (string | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null) }> } }
export type GetAtsInterviewsParameterCursor = string
export type GetAtsInterviewsParameterPageSize = number
export type GetAtsInterviewsParameterUpdatedAfter = string
export type GetAtsInterviewsParameterIncludeDeleted = ("true" | "false")
export type GetAtsInterviewsParameterIgnoreUnsupportedFilters = ("true" | "false")
export type GetAtsInterviewsParameterIds = string
export type GetAtsInterviewsParameterRemoteIds = string
export type GetAtsInterviewsParameterJobIds = string
export type GetAtsInterviewsPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, remote_id: (string | null), title: (string | null), starting_at: (string | null), ending_at: (string | null), location?: (Partial<{ city: (string | null), country: (string | null), raw: (string | null), state: (string | null), street_1: (string | null), street_2: (string | null), zip_code: (string | null) }> | null), video_conferencing_url: (string | null), application_id: (string | null), stage_id: (string | null), canceled: (boolean | null), remote_created_at: (string | null), remote_updated_at: (string | null), remote_data: (Record<string, unknown> | null), changed_at: string, remote_deleted_at: (string | null), users: Array<{ id: string, remote_id: (string | null), first_name: (string | null), last_name: (string | null), email?: (string | null) }>, application: ({ id: string, remote_id: (string | null), outcome: (("PENDING" | "HIRED" | "DECLINED") | null), rejection_reason_name: (string | null), candidate: ({ id: string, remote_id: string, first_name: (string | null), last_name: (string | null), email_addresses?: (Array<{ email_address?: (string | null), type: (string | null) }> | null) } | null), job: ({ id: string, remote_id: string, name: (string | null) } | null) } | null) }> } }
export type GetAtsActionsAtsCreateCandidatePositiveResponse = { status: string, data: Partial<{ attachment_restrictions: ({ total_size_bytes: (number | null), types: { CV: ({ is_supported: boolean, min_amount: (number | null), max_amount: (number | null), max_file_size_bytes: (number | null), accepted_mime_types: (Array<string> | null) } | { is_supported: boolean }), COVER_LETTER: ({ is_supported: boolean, min_amount: (number | null), max_amount: (number | null), max_file_size_bytes: (number | null), accepted_mime_types: (Array<string> | null) } | { is_supported: boolean }), OTHER: ({ is_supported: boolean, min_amount: (number | null), max_amount: (number | null), max_file_size_bytes: (number | null), accepted_mime_types: (Array<string> | null) } | { is_supported: boolean }) } } | null) }> }
export type GetAtsActionsAtsCreateApplicationPositiveResponse = { status: string, data: Partial<{ attachment_restrictions: ({ total_size_bytes: (number | null), types: { CV: ({ is_supported: boolean, min_amount: (number | null), max_amount: (number | null), max_file_size_bytes: (number | null), accepted_mime_types: (Array<string> | null) } | { is_supported: boolean }), COVER_LETTER: ({ is_supported: boolean, min_amount: (number | null), max_amount: (number | null), max_file_size_bytes: (number | null), accepted_mime_types: (Array<string> | null) } | { is_supported: boolean }), OTHER: ({ is_supported: boolean, min_amount: (number | null), max_amount: (number | null), max_file_size_bytes: (number | null), accepted_mime_types: (Array<string> | null) } | { is_supported: boolean }) } } | null) }> }
export type GetAtsActionsAtsAddApplicationAttachmentPositiveResponse = { status: string, data: Partial<{ attachment_restrictions: ({ types: { CV: ({ is_supported: boolean, max_file_size_bytes: (number | null), accepted_mime_types: (Array<string> | null) } | { is_supported: boolean }), COVER_LETTER: ({ is_supported: boolean, max_file_size_bytes: (number | null), accepted_mime_types: (Array<string> | null) } | { is_supported: boolean }), OTHER: ({ is_supported: boolean, max_file_size_bytes: (number | null), accepted_mime_types: (Array<string> | null) } | { is_supported: boolean }) } } | null) }> }
export type GetAtsActionsAtsAddCandidateAttachmentPositiveResponse = { status: string, data: Partial<{ attachment_restrictions: ({ types: { CV: ({ is_supported: boolean, max_file_size_bytes: (number | null), accepted_mime_types: (Array<string> | null) } | { is_supported: boolean }), COVER_LETTER: ({ is_supported: boolean, max_file_size_bytes: (number | null), accepted_mime_types: (Array<string> | null) } | { is_supported: boolean }), OTHER: ({ is_supported: boolean, max_file_size_bytes: (number | null), accepted_mime_types: (Array<string> | null) } | { is_supported: boolean }) } } | null) }> }
export type PostAtsImportTrackedApplicationPositiveResponse = { status: string, data: { id: string, tracked_at: (string | null), imported_id: Partial<{ erecruiter: ({ id_type: string, application_remote_id: string, job_remote_id: string } | { id_type: string, candidate_remote_id: string, application_remote_id: string }), successfactors: { id_type: string, application_remote_id: string }, recruitee: { id_type: string, placement_id: string }, greenhouse: { id_type: string, application_id: string }, onlyfy: { id_type: string, application_id: string }, smartrecruiters: { id_type: string, candidate_remote_id: string, job_remote_id: string } }> }, warnings: Array<{ message: string }> }
export type PostAtsImportTrackedApplicationRequestBody = { erecruiter?: ({ id_type: string, application_remote_id: string, job_remote_id: string } | { id_type: string, candidate_remote_id: string, application_remote_id: string }), successfactors?: { id_type: string, application_remote_id: string }, recruitee?: { id_type: string, placement_id: string }, greenhouse?: { id_type: string, application_id: string }, onlyfy?: { id_type: string, application_id: string }, smartrecruiters?: { id_type: string, candidate_remote_id: string, job_remote_id: string }, tracked_at: (string | null) }
export type PostAtsCustomAvionteSyncedJobsPositiveResponse = { status: string, data: Record<string, unknown> }
export type PostAtsCustomAvionteSyncedJobsRequestBody = { job_remote_id: string }
export type DeleteAtsCustomAvionteSyncedJobsJobRemoteIdParameterJobRemoteId = string
export type DeleteAtsCustomAvionteSyncedJobsJobRemoteIdPositiveResponse = { status: string, data: Record<string, unknown> }
export type DeleteAtsCustomAvionteSyncedJobsJobRemoteIdRequestBody = Partial<{  }>
export type GetAssessmentPackagesPositiveResponse = { status: string, data: { packages: Array<{ id: string, name: string, description: string, updated_at: (string | null), type: (("BEHAVIORAL" | "VIDEO_INTERVIEW" | "SKILLS_TEST" | "BACKGROUND_CHECK" | "REFERENCE_CHECK") | null) }> } }
export type PutAssessmentPackagesPositiveResponse = { status: string, data: Record<string, unknown>, warnings: Array<{ message: string }> }
export type PutAssessmentPackagesRequestBody = { packages: Array<{ id: string, type: ("BEHAVIORAL" | "VIDEO_INTERVIEW" | "SKILLS_TEST" | "BACKGROUND_CHECK" | "REFERENCE_CHECK"), name: string, description: string }> }
export type GetAssessmentOrdersParameterCursor = string
export type GetAssessmentOrdersParameterPageSize = number
export type GetAssessmentOrdersParameterIds = string
export type GetAssessmentOrdersParameterStatuses = string
export type GetAssessmentOrdersParameterCreatedAfter = string
export type GetAssessmentOrdersPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, package_id: string, status: ("OPEN" | "COMPLETED" | "CANCELLED" | "REJECTED"), candidate: { remote_id: (string | null), email: string, first_name: (string | null), last_name: (string | null), phone: (string | null) }, application: { remote_id: (string | null) }, job: { remote_id: (string | null), name: (string | null), job_code: (string | null), description: (string | null), location: (Partial<{ street_1: (string | null), street_2: (string | null), city: (string | null), state: (string | null), zip_code: (string | null), country: (string | null), raw: (string | null) }> | null), hiring_team: Array<{ remote_id: (string | null), email: (string | null), first_name: (string | null), last_name: (string | null), hiring_team_roles: Array<("RECRUITER" | "HIRING_MANAGER")> }> } }> } }
export type GetAssessmentOrdersOpenParameterCursor = string
export type GetAssessmentOrdersOpenParameterPageSize = number
export type GetAssessmentOrdersOpenPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, package_id: string, candidate: { remote_id: (string | null), email: string, first_name: (string | null), last_name: (string | null), phone: (string | null) }, application: { remote_id: (string | null) }, job: { remote_id: (string | null), name: (string | null), job_code: (string | null), description: (string | null), location: (Partial<{ street_1: (string | null), street_2: (string | null), city: (string | null), state: (string | null), zip_code: (string | null), country: (string | null), raw: (string | null) }> | null), hiring_team: Array<{ remote_id: (string | null), email: (string | null), first_name: (string | null), last_name: (string | null), hiring_team_roles: Array<("RECRUITER" | "HIRING_MANAGER")> }> } }> } }
export type PutAssessmentOrdersAssessmentOrderIdResultParameterAssessmentOrderId = string
export type PutAssessmentOrdersAssessmentOrderIdResultPositiveResponse = { status: string, data: Record<string, unknown>, warnings: Array<{ message: string }> }
export type PutAssessmentOrdersAssessmentOrderIdResultRequestBody = { status: ("COMPLETED" | "CANCELLED" | "OPEN"), result_url: string, completed_at?: string, score?: number, max_score?: number, attributes?: Array<({ type: string, label: string, value: string } | { type: string, id: string, label: string, score: { value: number, max: number }, status: ("COMPLETED" | "CANCELLED") })>, attachments?: Array<{ name: string, content_type?: string, data_url?: string, data?: string }>, remote_fields?: Partial<{ smartrecruiters: Partial<{ scoreLabel: string }>, recruitee: Partial<{ subtitle: string }> }> }
export type GetLmsUsersParameterCursor = string
export type GetLmsUsersParameterPageSize = number
export type GetLmsUsersParameterUpdatedAfter = string
export type GetLmsUsersParameterIncludeDeleted = ("true" | "false")
export type GetLmsUsersParameterIgnoreUnsupportedFilters = ("true" | "false")
export type GetLmsUsersParameterIds = string
export type GetLmsUsersParameterRemoteIds = string
export type GetLmsUsersParameterWorkEmails = string
export type GetLmsUsersPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, remote_id: string, first_name: (string | null), last_name: (string | null), work_email: (string | null), status: (("ACTIVE" | "INACTIVE") | null), remote_created_at: (string | null), remote_deleted_at: (string | null), changed_at: string, remote_data: (Record<string, unknown> | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }> }> } }
export type GetLmsCourseProgressionsParameterCursor = string
export type GetLmsCourseProgressionsParameterPageSize = number
export type GetLmsCourseProgressionsParameterUpdatedAfter = string
export type GetLmsCourseProgressionsParameterIncludeDeleted = ("true" | "false")
export type GetLmsCourseProgressionsParameterIgnoreUnsupportedFilters = ("true" | "false")
export type GetLmsCourseProgressionsParameterIds = string
export type GetLmsCourseProgressionsParameterRemoteIds = string
export type GetLmsCourseProgressionsParameterUserIds = string
export type GetLmsCourseProgressionsParameterCourseIds = string
export type GetLmsCourseProgressionsPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, remote_id: string, user_id: string, course_revision_id: string, status: (("ENROLLED" | "IN_PROGRESS" | "COMPLETED" | "DROPPED") | null), enrolled_at: (string | null), completed_at: (string | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null), user: { id: string, remote_id: string, first_name: (string | null), last_name: (string | null), work_email: (string | null) }, course_revision: { id: string, remote_id: string, title: (string | null), course: ({ id: string, remote_id: string } | null) } }> } }
export type PostLmsCourseProgressionsPositiveResponse = { status: string, data: { id: string, remote_id: string, user_id: string, course_revision_id: string, status: (("ENROLLED" | "IN_PROGRESS" | "COMPLETED" | "DROPPED") | null), enrolled_at: (string | null), completed_at: (string | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null), user: { id: string, remote_id: string, first_name: (string | null), last_name: (string | null), work_email: (string | null) }, course_revision: { id: string, remote_id: string, title: (string | null), course: ({ id: string, remote_id: string } | null) } }, warnings: Array<{ message: string }> }
export type PostLmsCourseProgressionsRequestBody = { user_id: string, course_revision_id: string }
export type PostLmsCourseProgressionsCourseProgressionIdCompleteParameterCourseProgressionId = string
export type PostLmsCourseProgressionsCourseProgressionIdCompletePositiveResponse = { status: string, data: { id: string, remote_id: string, user_id: string, course_revision_id: string, status: (("ENROLLED" | "IN_PROGRESS" | "COMPLETED" | "DROPPED") | null), enrolled_at: (string | null), completed_at: (string | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null), user: { id: string, remote_id: string, first_name: (string | null), last_name: (string | null), work_email: (string | null) }, course_revision: { id: string, remote_id: string, title: (string | null), course: ({ id: string, remote_id: string } | null) } }, warnings: Array<{ message: string }> }
export type PostLmsCourseProgressionsCourseProgressionIdCompleteRequestBody = Partial<{ completed_at: (string | null), score: (number | null) }>
export type GetLmsCoursesParameterCursor = string
export type GetLmsCoursesParameterPageSize = number
export type GetLmsCoursesParameterUpdatedAfter = string
export type GetLmsCoursesParameterIncludeDeleted = ("true" | "false")
export type GetLmsCoursesParameterIgnoreUnsupportedFilters = ("true" | "false")
export type GetLmsCoursesParameterIds = string
export type GetLmsCoursesParameterRemoteIds = string
export type GetLmsCoursesPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, remote_id: string, provider_id: (string | null), origin_id: (string | null), remote_created_at: (string | null), remote_deleted_at: (string | null), changed_at: string, remote_data: (Record<string, unknown> | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }>, provider: ({ id: string, remote_id: string, name: (string | null) } | null), revisions: Array<{ id: string, remote_id: string, course_id: (string | null), title: (string | null), description: (string | null), remote_url: (string | null), status: (("ACTIVE" | "INACTIVE") | null), remote_created_at: (string | null), remote_deleted_at: (string | null), changed_at: string, remote_data: (Record<string, unknown> | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }>, skill_assignments: Array<{ skill: { id: string, remote_id: (string | null), name: (string | null) } }> }> }> } }
export type PostLmsCoursesBulkPositiveResponse = { status: string, data: { task_id: string }, warnings: Array<{ message: string }> }
export type PostLmsCoursesBulkRequestBody = { items: Array<{ origin_id: string, course: { type: string, title: string, description?: (string | null), course_url: string, thumbnail_url?: (string | null), duration?: (number | null), languages?: (Array<string> | null) } }> }
export type GetLmsCoursesBulkTaskIdParameterTaskId = string
export type GetLmsCoursesBulkTaskIdPositiveResponse = { status: string, data: ({ task_id: string, created_at: string, status: string, completed_at: null } | { task_id: string, created_at: string, status: string, data: Array<({ origin_id: string, status: string, data: { id: string } } | { origin_id: string, status: string, error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS" | "LMS.COURSE_UPDATE_NOT_SUPPORTED" | "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING" | "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } })>, completed_at: string } | { task_id: string, created_at: string, status: string, error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS" | "LMS.COURSE_UPDATE_NOT_SUPPORTED" | "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING" | "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) }, completed_at: string }) }
export type PostLmsCoursesCourseIdDeactivateParameterCourseId = string
export type PostLmsCoursesCourseIdDeactivatePositiveResponse = { status: string, data: { id: string, remote_id: string, provider_id: (string | null), origin_id: (string | null), remote_created_at: (string | null), remote_deleted_at: (string | null), changed_at: string, remote_data: (Record<string, unknown> | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }>, provider: ({ id: string, remote_id: string, name: (string | null) } | null), revisions: Array<{ id: string, remote_id: string, course_id: (string | null), title: (string | null), description: (string | null), remote_url: (string | null), status: (("ACTIVE" | "INACTIVE") | null), remote_created_at: (string | null), remote_deleted_at: (string | null), changed_at: string, remote_data: (Record<string, unknown> | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }>, skill_assignments: Array<{ skill: { id: string, remote_id: (string | null), name: (string | null) } }> }> }, warnings: Array<{ message: string }> }
export type PostLmsCoursesCourseIdDeactivateRequestBody = Partial<{  }>
export type GetLmsSkillsParameterCursor = string
export type GetLmsSkillsParameterPageSize = number
export type GetLmsSkillsParameterUpdatedAfter = string
export type GetLmsSkillsParameterIncludeDeleted = ("true" | "false")
export type GetLmsSkillsParameterIgnoreUnsupportedFilters = ("true" | "false")
export type GetLmsSkillsParameterIds = string
export type GetLmsSkillsParameterRemoteIds = string
export type GetLmsSkillsPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, remote_id: (string | null), name: (string | null), remote_created_at: (string | null), remote_deleted_at: (string | null), changed_at: string, remote_data: (Record<string, unknown> | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }> }> } }
export type PostAiApplyCareerSitesPositiveResponse = { status: string, data: { id: string, label: string } }
export type PostAiApplyCareerSitesRequestBody = { label: string }
export type GetAiApplyCareerSitesParameterCursor = string
export type GetAiApplyCareerSitesParameterPageSize = number
export type GetAiApplyCareerSitesParameterIds = string
export type GetAiApplyCareerSitesPositiveResponse = { status: string, data: { results: Array<{ id: string, label: string }>, next: (string | null) } }
export type GetAiApplyPostingsParameterCursor = string
export type GetAiApplyPostingsParameterPageSize = number
export type GetAiApplyPostingsParameterIds = string
export type GetAiApplyPostingsParameterCareerSiteIds = string
export type GetAiApplyPostingsParameterJobCodes = string
export type GetAiApplyPostingsPositiveResponse = { status: string, data: { results: Array<{ id: string, career_site: { id: string, label: string }, url: string, job_code: (string | null), created_at: string, updated_at: string, archived_at: (string | null), archived_reason: (("JOB_POSTING_TAKEN_OFFLINE" | "MANUAL_ARCHIVE" | "REMOVED_FROM_JOB_FEED") | null), availability: ("APPLYABLE" | "PENDING" | "ARCHIVED" | "UNAVAILABLE") }>, next: (string | null) } }
export type PostAiApplyPostingsPositiveResponse = { status: string, data: { id: string, career_site: { id: string, label: string }, url: string, job_code: (string | null), created_at: string, updated_at: string, archived_at: (string | null), archived_reason: (("JOB_POSTING_TAKEN_OFFLINE" | "MANUAL_ARCHIVE" | "REMOVED_FROM_JOB_FEED") | null), availability: ("APPLYABLE" | "PENDING" | "ARCHIVED" | "UNAVAILABLE") } }
export type PostAiApplyPostingsRequestBody = { url: string, job_code?: string, location?: ({ country: ("AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BV" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HM" | "HN" | "HR" | "HT" | "HU" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "YE" | "YT" | "ZA" | "ZM" | "ZW"), postal_code?: string } | null), career_site_id: string }
export type PostAiApplyPostingsPostingIdInquireParameterPostingId = string
export type PostAiApplyPostingsPostingIdInquirePositiveResponse = { status: string, data: { application_form: Array<({ block_type: string, question_id: string, label: string, description: (string | null), required: boolean, category: ("EEO" | null), question_type: ("TEXT" | "NUMBER" | "BOOLEAN" | "FILE" | "DATE" | "SINGLE_SELECT" | "MULTI_SELECT"), unified_key: (("EMAIL" | "RESIDENCE_TYPE" | "RESIDENCE_FULL_STRING" | "RESIDENCE_COUNTRY" | "RESIDENCE_CITY" | "RESIDENCE_STATE" | "RESIDENCE_LINE_1" | "RESIDENCE_LINE_2" | "RESIDENCE_ZIP_CODE" | "APPLICANT_POOL_CONSENT" | "TERMS_AND_CONDITIONS" | "FIRST_NAME" | "LAST_NAME" | "FULL_NAME" | "GENDER" | "EXPECTED_START_DATE" | "RESUME" | "BIRTH_DATE" | "PHONE_NUMBER_TYPE" | "FULL_PHONE_NUMBER" | "PHONE_COUNTRY_CODE" | "PHONE_NATIONAL_NUMBER" | "PHONE_EXTENSION") | null), options: (Array<{ id: string, label: string, unified_key: (("HOME" | "WORK" | "MAILING" | "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BV" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HM" | "HN" | "HR" | "HT" | "HU" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "YE" | "YT" | "ZA" | "ZM" | "ZW" | "MALE" | "FEMALE" | "NON_BINARY" | "NOT_SPECIFIED" | "MOBILE" | "LANDLINE" | "SOURCE_OTHER" | "SOURCE_OTHER_JOB_BOARD") | null) }> | null), display_when: ({ question_id: string, answer_equals: (string | Array<string> | number | boolean | { name: string, content_type: string, data: unknown }) } | null) } | { block_type: string, label: string, children: Array<Record<string, unknown>> })>, submission_token: string } }
export type PostAiApplyPostingsPostingIdInquireRequestBody = Partial<{  }>
export type PostAiApplyApplyPositiveResponse = { status: string, data: { id: string, posting_id: string, status: string, created_at: string, updated_at: string } }
export type PostAiApplyApplyRequestBody = { submission_token: string, candidate_email: string, query_params?: Record<string, string>, screening_question_answers: Array<{ question_id: string, answer: (string | Array<string> | number | boolean | { name: string, content_type: string, data: string }) }>, additional_clicks?: number, additional_clicks_scatter_duration?: number }
export type GetAiApplyApplicationsParameterCursor = string
export type GetAiApplyApplicationsParameterPageSize = number
export type GetAiApplyApplicationsParameterIds = string
export type GetAiApplyApplicationsParameterJobPostingIds = string
export type GetAiApplyApplicationsPositiveResponse = { status: string, data: { results: Array<{ id: string, job_posting_id: string, status: ("SUBMITTED" | "DUPLICATE" | "PENDING" | "FAILED"), created_at: string, updated_at: string }>, next: (string | null) } }
export type GetAiApplyUnifiedApiJobsParameterCursor = string
export type GetAiApplyUnifiedApiJobsParameterPageSize = number
export type GetAiApplyUnifiedApiJobsParameterIds = string
export type GetAiApplyUnifiedApiJobsParameterRemoteIds = string
export type GetAiApplyUnifiedApiJobsParameterJobCodes = string
export type GetAiApplyUnifiedApiJobsParameterCareerSiteIds = string
export type GetAiApplyUnifiedApiJobsPositiveResponse = { status: string, data: { results: Array<{ id: string, remote_id: string, name: (string | null), job_code: (string | null), description: (string | null), confidential: (boolean | null), weekly_hours: (number | null), category: (string | null), department: (string | null), post_url: (string | null), experience_level: (string | null), salary_amount: (number | null), salary_amount_from: (number | null), salary_amount_to: (number | null), salary_currency: (string | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<Record<string, unknown>>, opened_at: (string | null), closed_at: (string | null), remote_created_at: (string | null), remote_updated_at: (string | null), contact_id: (string | null), remote_data: (Record<string, unknown> | null), changed_at: string, remote_deleted_at: (string | null), remote_url: (string | null), stages: Array<Record<string, unknown>>, screening_questions: (Array<{ id: string, remote_id: (string | null), title: (string | null), description: (string | null), format?: ({ display_type?: (("SINGLE_LINE" | "MULTI_LINE" | "EMAIL" | "URL") | null), max_length?: (number | null), type: string } | { display_type?: (("SLIDER" | "FIELD") | null), max?: (number | null), min?: (number | null), type: string } | { accepted_mime_types?: (Array<string> | null), max_file_size_bytes?: (number | null), type: string } | { display_type?: (("DROPDOWN" | "RADIO") | null), options: Array<{ id: string, remote_id?: (string | null), name: string }>, type: string } | { type: string } | { type: string } | { options: Array<{ id: string, remote_id?: (string | null), name: string }>, type: string } | { type: string } | { raw_question?: unknown, type: string } | null), category: ("EEO" | null), index?: (number | null), required: (boolean | null), precondition_question_id?: (string | null), precondition_options?: (Array<string> | Array<boolean> | null) }> | null), job_postings: Array<Record<string, unknown>>, hiring_team: Array<Record<string, unknown>>, employment_type?: (("FULL_TIME" | "PART_TIME" | "CONTRACT" | "SEASONAL" | "INTERNSHIP") | string | null), status?: (("OPEN" | "CLOSED" | "DRAFT" | "ARCHIVED") | string | null), visibility: (string | null), remote_work_status: (string | null), salary_period: (string | null), location?: (Partial<{ city: (string | null), country: (string | null), raw: (string | null), state: (string | null), street_1: (string | null), street_2: (string | null), zip_code: (string | null) }> | null) }>, next: (string | null) } }
export type PostAiApplyUnifiedApiJobsJobIdApplicationsParameterJobId = string
export type PostAiApplyUnifiedApiJobsJobIdApplicationsPositiveResponse = { status: string, data: { id: string, remote_id: (string | null), outcome: (("PENDING" | "HIRED" | "DECLINED") | null), rejection_reason_name: (string | null), rejected_at: (string | null), current_stage_id: (string | null), job_id: (string | null), candidate_id: (string | null), screening_question_answers?: (Array<({ answer: { content: (string | null) }, question: { remote_id: (string | null), title: string, type: string } } | { answer: { choice: (string | null) }, question: { remote_id: (string | null), title: string, type: string } } | { answer: Partial<{ choices: Array<string> }>, question: { remote_id: (string | null), title: string, type: string } } | { answer: { checked: (boolean | null) }, question: { remote_id: (string | null), title: string, type: string } } | { answer: { number: (number | null) }, question: { remote_id: (string | null), title: string, type: string } } | { answer: { date: (string | null) }, question: { remote_id: (string | null), title: string, type: string } } | { answer: Partial<{ raw: null }>, question: { remote_id: (string | null), title: string, type: string } })> | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }>, remote_url: (string | null), changed_at: string, remote_deleted_at: (string | null), remote_created_at: (string | null), remote_updated_at: (string | null), remote_data: (Record<string, unknown> | null), current_stage: ({ id: string, name: (string | null), remote_id: (string | null), index: (number | null) } | null), job: ({ id: string, name: (string | null), remote_id: string } | null), candidate: ({ id: string, remote_id: string, first_name: (string | null), last_name: (string | null), company: (string | null), title: (string | null), confidential: (boolean | null), source: (string | null), phone_numbers?: (Array<{ phone_number: string, type?: (string | null) }> | null), email_addresses?: (Array<{ email_address?: (string | null), type: (string | null) }> | null), social_media?: (Array<Partial<{ link: (string | null), type: (string | null), username: (string | null) }>> | null), location?: (Partial<{ city: (string | null), country: (string | null), raw: (string | null), state: (string | null), street_1: (string | null), street_2: (string | null), zip_code: (string | null) }> | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }>, remote_url: (string | null), remote_created_at: (string | null), remote_updated_at: (string | null), remote_data: (Record<string, unknown> | null), changed_at: string, remote_deleted_at: (string | null), tags: Array<{ id: string, name: (string | null), remote_id: (string | null) }> } | null) } }
export type PostAiApplyUnifiedApiJobsJobIdApplicationsRequestBody = { stage_id?: string, candidate: { first_name: string, last_name: string, email_address: string, additional_email_addresses?: Array<{ type: ("PERSONAL" | "WORK" | "OTHER"), email_address: string }>, company?: string, title?: string, phone_number?: string, additional_phone_numbers?: Array<{ type: ("PERSONAL" | "WORK" | "OTHER"), phone_number: string }>, location?: { city?: string, country: string, state?: string, street_1?: string, zip_code?: string }, gender?: ("MALE" | "FEMALE" | "OTHER"), availability_date?: string, salary_expectations?: { period: ("MONTH" | "YEAR"), amount: number }, social_links?: Array<{ url: string }> }, attachments?: Array<{ name: string, content_type?: string, data_url?: string, data?: string, type: ("CV" | "COVER_LETTER" | "OTHER") }>, source?: Partial<{ name: string, unified_key: string, id: string }>, sourced_by?: { user_id: string }, gdpr_consent?: Partial<{ expires_at: string, given: boolean }>, remote_fields?: (Partial<{ successfactors: Partial<{ Candidate: Record<string, unknown>, JobApplication: Record<string, unknown>, copyJobApplicationAttachments: boolean, update_existing_candidate: (boolean | null) }>, personio: Partial<{ application: Record<string, unknown> }>, talentsoft: Partial<{ applicant: Record<string, unknown>, application: Record<string, unknown> }>, teamtailor: Partial<{ candidate: Record<string, unknown>, application: Partial<{ attributes: Record<string, unknown> }> }>, greenhouse: Partial<{ candidate: Record<string, unknown>, application: Record<string, unknown> }>, lever: Partial<{ candidate: Record<string, unknown> }>, workable: Partial<{ candidate: Record<string, unknown> }>, workday: Partial<{ Candidate_Data: Partial<{ Name_Detail_Data: Partial<{ Middle_Name: string, Social_Suffix_Reference: { Predefined_Name_Component_ID: string } }>, Language_Reference: { WID: string }, Job_Application_Data: Partial<{ Job_Applied_To_Data: Partial<{ Global_Personal_Information_Data: Partial<{ Date_of_Birth: string }> }>, Resume_Data: Partial<{ Education_Data: Array<Partial<{ School_Name: string, First_Year_Attended: number, Last_Year_Attended: number, Field_of_Study_Reference: { WID: string }, Degree_Reference: { WID: string }, Grade_Average: string }>>, Skill_Data: Array<Partial<{ Skill_Name: string }>>, Language_Data: Array<Partial<{ Language_Reference: Partial<{ WID: string }>, Language: { Native?: boolean, Language_Ability: Array<Partial<{ Language_Ability_Data: Partial<{ Language_Proficiency_Reference: { WID: string }, Language_Ability_Type_Reference: { WID: string } }> }>> } }>>, Experience_Data: Array<{ Company_Name: string, Title: string, Location?: string, Start_Date: string, End_Date?: string, Currently_Work_Here?: boolean, Description?: string }> }> }>, Contact_Data: Partial<{ Location_Data: Partial<{ Address_Line_1: string, Address_Line_2: string, Region_Subdivision_1: string, Country_Region_Reference: { Country_Region_ID: string }, Country_City_Reference: { WID: string } }> }>, Worker_Reference: Partial<{ WID: string, Employee_ID: string }> }>, Override_Source_Reference_WID: string }>, zohorecruit: Partial<{ candidate: Record<string, unknown> }>, bullhorn: Partial<{ candidate: Record<string, unknown>, job_submission: Record<string, unknown> }>, smartrecruiters: Partial<{ candidate_with_questions: Record<string, unknown>, candidate_without_questions: Record<string, unknown>, candidate: Record<string, unknown>, consent_decisions: Partial<{ SINGLE: boolean, SMART_RECRUIT: boolean, SMART_CRM: boolean, SMART_MESSAGE_SMS: boolean, SMART_MESSAGE_WHATSAPP: boolean }> }>, talentadore: Partial<{ applications: Record<string, unknown> }>, guidecom: Partial<{ candidate: Record<string, unknown> }>, dvinci: Partial<{ application: Record<string, unknown>, candidate: Record<string, unknown> }>, hrworks: Partial<{ jobApplication: Record<string, unknown> }>, jobylon: Partial<{ application: Partial<{ message: string }> }>, avature: Partial<{ workflow: Partial<{ step: { id: number } }> }>, recruitee: Partial<{ candidate: Partial<{ cover_letter_text: string }> }>, rexx: Partial<{ candidate: Record<string, unknown> }>, umantis: Partial<{ person: Record<string, unknown> }>, piloga: Partial<{ candidate: Partial<{ street: string }> }>, pinpoint: Partial<{ candidate: Record<string, unknown> }>, covetorest: Partial<{ candidate: Partial<{ mandant: number }> }> }> & Partial<{ greenhouse: Partial<{ post_headers: Partial<{ "On-Behalf-Of": (string | null) }> }>, workable: Partial<{ on_behalf_of_user_remote_id: string }> }>), screening_question_answers?: Array<{ question_id: string, answer: (string | boolean | number | Array<string> | string | { name: string, content_type?: string, data_url?: string, data?: string }) }>, query_params?: Record<string, string> }
export type GetAiApplyJobFeedsParameterCursor = string
export type GetAiApplyJobFeedsParameterPageSize = number
export type GetAiApplyJobFeedsParameterIds = string
export type GetAiApplyJobFeedsPositiveResponse = { status: string, data: { results: Array<{ id: string, label: string }>, next: (string | null) } }
export type PostAiApplyJobFeedsPositiveResponse = { status: string, data: { id: string, label: string } }
export type PostAiApplyJobFeedsRequestBody = { label: string }
export type PostConnectCreateLinkPositiveResponse = { status: string, data: { link: string } }
export type PostConnectCreateLinkRequestBody = { end_user_email: string, end_user_organization_name: string, end_user_origin_id?: (string | null), remote_environment?: (string | null), integration_category?: ("HRIS" | "ATS" | "ASSESSMENT" | "LMS"), integration_tool?: (("workday" | "successfactors" | "smartrecruiters" | "factorial" | "oraclerecruiting" | "lever" | "icims" | "cornerstonetalentlink" | "recruitee" | "recruiterflow" | "greenhouse" | "greenhousejobboard" | "teamtailor" | "teamtailorjobboards" | "ashby" | "talentsoft" | "talentsoftcustomer" | "concludis" | "talention" | "piloga" | "onlyfy" | "personio" | "ukgpro" | "ukgready" | "adpworkforcenow" | "taleo" | "rexx" | "afas" | "bamboohr" | "bullhorn" | "bullhornlogin" | "workable" | "jobvite" | "fountain" | "softgarden" | "softgardenpartner" | "pinpoint" | "welcometothejungle" | "dvinci" | "dvinciadmin" | "join" | "sagehr" | "traffit" | "erecruiter" | "abacusumantis" | "umantis" | "jobylon" | "taleez" | "hrworks" | "otys" | "zohorecruit" | "ceipal" | "eploy" | "jobdiva" | "careerplug" | "perview" | "eightfold" | "paylocity" | "paycor" | "avature" | "apploi" | "phenom" | "paradox" | "heyrecruit" | "recruhr" | "recruitcrm" | "jazzhr" | "bite" | "brassring" | "homerun" | "mysolution" | "carerix" | "hroffice" | "talentclue" | "inrecruiting" | "ubeeo" | "connexys" | "hr4you" | "cornerstoneondemand" | "zvooverecruit" | "odoo" | "comeet" | "compleet" | "compleetpitcher" | "gem" | "laura" | "covetorest" | "coveto" | "mercury" | "crelate" | "manatal" | "avionte" | "mhmhr" | "asymbl" | "breezyhr" | "flatchr" | "dayforce" | "digitalrecruiters" | "applicantstack" | "reachmee" | "talentadore" | "sandbox" | "guidecom" | "spott" | "loxo" | "kula" | "workdaycustomreport" | "workdaycustomreportsftp" | "ukgprowfm" | "payfitcustomer" | "payfitpartner" | "payfit" | "employmenthero" | "fourth" | "kenjo" | "heavenhr" | "hibob" | "cezannehr" | "entraid" | "azuread" | "googleworkspace" | "nmbrs" | "deel" | "remotecom" | "iriscascade" | "okta" | "sagepeople" | "humaans" | "eurecia" | "oraclehcm" | "officient" | "sesamehr" | "charliehr" | "abacus" | "zohopeople" | "gusto" | "breathehr" | "catalystone" | "mirus" | "alexishr" | "simployer" | "peple" | "youserve" | "hansalog" | "lattice" | "latticetalent" | "hoorayhr" | "trinet" | "trinetpeo" | "namely" | "paycom" | "insperity" | "paychex" | "rippling" | "sapling" | "peoplehr" | "lucca" | "zelt" | "planday" | "boondmanager" | "haileyhr" | "silae" | "oysterhr" | "kiwihr" | "square" | "perbilityhelix" | "leapsome" | "loket" | "workforcecom" | "peoplefirst" | "sdworx" | "itrent" | "absenceio" | "a3innuvanomina" | "scim" | "datevlauds" | "datevhr" | "datev" | "datevlug" | "sympa" | "youforce" | "nibelis" | "peoplexd" | "sftp" | "sftpfetch" | "360learning" | "talentlms" | "udemy" | "linkedinlearning" | "moodle") | null), language?: (("en" | "de" | "fr" | "it" | "es") | null), scope_config_id?: (string | null), enable_filtering?: boolean, enable_field_mapping?: boolean, link_type?: ("EMBEDDED" | "MAGIC_LINK") }
export type GetConnectIntegrationByTokenTokenParameterToken = string
export type GetConnectIntegrationByTokenTokenPositiveResponse = { status: string, data: { tool: string, id: string, end_user_origin_id: (string | null), end_user_organization_name: string, end_user_email: (string | null), setup_status: ("INCOMPLETE" | "FINAL_SYNC_PENDING" | "COMPLETED") } }
export type PostConnectActivateIntegrationPositiveResponse = { status: string, data: { tool: string, id: string, end_user_origin_id: (string | null), end_user_organization_name: string, end_user_email: (string | null), setup_status: ("INCOMPLETE" | "FINAL_SYNC_PENDING" | "COMPLETED") } }
export type PostConnectActivateIntegrationRequestBody = { token: string }
export type GetCustomDatevSystemInformationPositiveResponse = { status: string, data: { consultant_number: number, client_number: number, target_system: ("LODAS" | "LuG") } }
export type PostCustomDatevPassthroughPositiveResponse = { status: string, data: Record<string, unknown>, warnings: Array<{ message: string }> }
export type PostCustomDatevPassthroughRequestBody = { file_content: string, accounting_month: string, target_system: ("LODAS" | "LuG"), file_type: ("STAMMDATEN" | "BEWEGUNGSDATEN"), file_name: string }
export type GetCustomDatevCheckEauPermissionPositiveResponse = { status: string, data: { ready: boolean, error?: string }, warnings: Array<{ message: string }> }
export type GetCustomDatevEauRequestsEauIdParameterEauId = string
export type GetCustomDatevEauRequestsEauIdPositiveResponse = { status: string, data: { raw: { source: string, start_work_incapacity: string, collaboration_identifier?: string, feedbacks_from_health_insurance: Array<{ guid: string, contact_person: ({ gender_contact_person?: (("M" | "F" | "X" | "D") | null), name: string, telephone: string, fax: (string | null), email: (string | null), name1_health_insurance: string, name2_health_insurance?: (string | null), name3_health_insurance?: (string | null), postal_code: string, city: string, street: (string | null), house_number: (string | null) } | null), incapacity_for_work: { start_work_incapacity_employer: string, start_work_incapacity_au: (string | null), end_work_incapacity_au: (string | null), actual_end_work_incapacity_au?: (string | null), date_of_diagnosis: (string | null), flag_current_work_incapacity: (number | null), accident_at_work: boolean, assignment_accident_insurance_doctor: boolean, other_accident: boolean, start_hospitalisation?: (string | null), end_hospitalisation?: (string | null), initial_certificate: boolean, automatic_feedback_until: (string | null) }, error_block_list: (Array<{ origin: (string | null), error_number: (string | null), error_text: (string | null), error_value: (string | null) }> | null) }> } }, warnings: Array<{ message: string }> }
export type GetCustomDatevCheckDocumentPermissionPositiveResponse = { status: string, data: ({ ready: boolean, documents_granted: Array<string> } | { ready: boolean, error: string }), warnings: Array<{ message: string }> }
export type GetCustomDatevAvailableDocumentsParameterPeriod = string
export type GetCustomDatevAvailableDocumentsPositiveResponse = { status: string, data: { results: Array<{ document_type: string, available_for_employees: Array<{ id: (string | null), remote_id: string }>, is_company_document: boolean }> }, warnings: Array<{ message: string }> }
export type PostCustomDatevDownloadDocumentPositiveResponse = { status: string, data: { data_url: string, file_name: string, content_type: string }, warnings: Array<{ message: string }> }
export type PostCustomDatevDownloadDocumentRequestBody = { accounting_month: string, document_type: ("AANB" | "ABEG" | "BUBE" | "DAWE" | "KBNW" | "KOST" | "KOTR" | "LKTO" | "LOBN" | "LJOE" | "LOJE" | "LOJO" | "LOPE" | "LOPN" | "LOPS" | "LORE" | "LOWE" | "LSTA" | "LSTB" | "LSTE" | "PDAT" | "PFAN" | "PRZA" | "SBNW" | "SVNW" | "WEAN" | "ZABR" | "ZAKF" | "ZAUW"), employee_id: (string | null) }
export type PostCustomDatevEmployeesEmployeeIdDownloadDocumentParameterEmployeeId = (string | null)
export type PostCustomDatevEmployeesEmployeeIdDownloadDocumentPositiveResponse = { status: string, data: { data_url: string, file_name: string, content_type: string }, warnings: Array<{ message: string }> }
export type PostCustomDatevEmployeesEmployeeIdDownloadDocumentRequestBody = { accounting_month: string, document_type: ("AANB" | "ABEG" | "BUBE" | "DAWE" | "KBNW" | "KOST" | "KOTR" | "LKTO" | "LOBN" | "LJOE" | "LOJE" | "LOJO" | "LOPE" | "LOPN" | "LOPS" | "LORE" | "LOWE" | "LSTA" | "LSTB" | "LSTE" | "PDAT" | "PFAN" | "PRZA" | "SBNW" | "SVNW" | "WEAN" | "ZABR" | "ZAKF" | "ZAUW") }
export type PostCustomDatevEmployeesEmployeeIdEauRequestsParameterEmployeeId = string
export type PostCustomDatevEmployeesEmployeeIdEauRequestsPositiveResponse = { status: string, data: { eau_id: string }, warnings: Array<{ message: string }> }
export type PostCustomDatevEmployeesEmployeeIdEauRequestsRequestBody = { start_work_incapacity: string, notification?: { email: string }, contact_person?: { gender: ("M" | "W" | "X" | "D"), name: string, telephone: string, fax: string, email: string, company_name: string, postal_code: string, city: string, street: string, house_number: string } }
export type PutCustomDatevEmployeesEmployeeIdPreparePayrollParameterEmployeeId = string
export type PutCustomDatevEmployeesEmployeeIdPreparePayrollPositiveResponse = { status: string, data: Record<string, unknown>, warnings: Array<{ message: string }> }
export type PutCustomDatevEmployeesEmployeeIdPreparePayrollRequestBody = { payroll_run: { date: string }, hourly_payments: Array<{ hours: number, lohnart: number }>, fixed_payments: Array<{ amount: number, lohnart: number }>, custom_lodas?: Array<{ amount: number, lohnart: number, bearbeitungsschluessel: number }> }
export type PutCustomDatevEmployeesEmployeeIdCompensationsParameterEmployeeId = string
export type PutCustomDatevEmployeesEmployeeIdCompensationsPositiveResponse = { status: string, data: Record<string, unknown>, warnings: Array<{ message: string }> }
export type PutCustomDatevEmployeesEmployeeIdCompensationsRequestBody = { effective_date: string, compensations: Array<{ amount: number, currency: string, period: ("HOUR" | "MONTH"), lohnart?: number }> }
export type GetCustomDatevCheckWritePermissionPositiveResponse = { status: string, data: { ready: boolean, error?: string }, warnings: Array<{ message: string }> }
export type GetCustomDatevDataPushesPositiveResponse = { status: string, data: { data_pushes: Array<{ id: string, type: ("GENERAL" | "PAYROLL"), created_at: string, upload_jobs: Array<{ id: string, file_name: string, state: ("FAILED" | "UPLOADED" | "IMPORTED" | "CORRUPTED" | "DELETED" | "AUTO_DELETED"), file: string }> }> } }
export type PostCustomDatevPushDataGeneralPositiveResponse = { status: string, data: { files: Array<{ name: string, content: string }> }, warnings: Array<{ message: string }> }
export type PostCustomDatevPushDataGeneralRequestBody = Record<string, unknown>
export type PostCustomDatevPushDataPayrollPositiveResponse = { status: string, data: { files: Array<{ name: string, content: string }> }, warnings: Array<{ message: string }> }
export type PostCustomDatevPushDataPayrollRequestBody = { payroll_month: string }
export type PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsParameterEmployeeId = string
export type PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsPositiveResponse = { status: string, data: Record<string, unknown>, warnings: Array<{ message: string }> }
export type PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsRequestBody = { supplement_code: string, effective_date: string, element_amount?: number, element_string?: string }
export type DataChangedWebhookPayload = { id: string, type: "data-changed", data: { integration_id: string, integration_tool: string, integration_category: ("HRIS" | "ATS" | "ASSESSMENT" | "LMS"), changed_models: Array<{ name: ("hris_legal_entities" | "hris_locations" | "hris_employees" | "hris_absence_types" | "hris_absences" | "hris_employments" | "hris_teams" | "hris_time_off_balances" | "hris_timesheets" | "hris_employee_document_categories" | "hris_performance_reviews" | "hris_performance_review_cycles" | "hris_staffing_entities" | "ats_users" | "ats_jobs" | "ats_job_postings" | "ats_candidates" | "ats_application_stages" | "ats_applications" | "ats_screening_questions" | "ats_tags" | "ats_interviews" | "ats_offers" | "ats_rejection_reasons" | "ats_roles" | "lms_users" | "lms_course_providers" | "lms_skills" | "lms_courses" | "lms_course_revisions" | "lms_course_progressions" | "hris_join_employees_teams" | "hris_join_staffing_entities_locations" | "hris_join_staffing_entities_legal_entities" | "hris_join_staffing_entities_groups" | "ats_join_candidates_tags" | "ats_join_jobs_application_stages" | "ats_join_jobs_screening_questions" | "ats_join_user_job_role_assignments" | "ats_join_jobs_users" | "ats_join_users_roles" | "ats_join_interviews_users" | "lms_join_revisions_skills") }> } }
export type ConnectionFlowFailedWebhookPayload = { id: string, type: "connection-flow-failed", data: { integration_tool: string, integration_category: ("HRIS" | "ATS" | "ASSESSMENT" | "LMS"), end_user: { organization_name: string, creator_email: (string | null), origin_id: (string | null) }, log_url: string } }
export type IntegrationCreatedWebhookPayload = { id: string, type: "integration-created", data: { id: string, tool: string, category: ("HRIS" | "ATS" | "ASSESSMENT" | "LMS"), end_user: { organization_name: string, creator_email: (string | null), origin_id: (string | null) } } }
export type IntegrationDeletedWebhookPayload = { id: string, type: "integration-deleted", data: { id: string, tool: string, category: ("HRIS" | "ATS" | "ASSESSMENT" | "LMS"), end_user: { organization_name: string, creator_email: (string | null), origin_id: (string | null) }, deleted_at: string } }
export type AssessmentOrderReceivedWebhookPayload = { id: string, type: "assessment:order-received", data: { id: string, package_id: string, status: ("OPEN" | "COMPLETED" | "CANCELLED" | "REJECTED"), integration_id: string, candidate: { remote_id: (string | null), email: string, first_name: (string | null), last_name: (string | null), phone: (string | null) }, application: { remote_id: (string | null) }, job: { remote_id: (string | null), name: (string | null), job_code: (string | null), description: (string | null), location: (Partial<{ street_1: (string | null), street_2: (string | null), city: (string | null), state: (string | null), zip_code: (string | null), country: (string | null), raw: (string | null) }> | null), hiring_team: Array<{ remote_id: (string | null), email: (string | null), first_name: (string | null), last_name: (string | null), hiring_team_roles: Array<("RECRUITER" | "HIRING_MANAGER")> }> } } }
export type InlineAssessmentOrderReceivedWebhookPayload = { id: string, type: "inline-assessment:order-received", data: { id: string, package_id: string, status: ("OPEN" | "COMPLETED" | "CANCELLED" | "REJECTED"), integration_id: string, candidate: { remote_id: (string | null), email: string, first_name: (string | null), last_name: (string | null), phone: (string | null) }, application: { remote_id: (string | null) }, job: { remote_id: (string | null), name: (string | null), job_code: (string | null), description: (string | null), location: (Partial<{ street_1: (string | null), street_2: (string | null), city: (string | null), state: (string | null), zip_code: (string | null), country: (string | null), raw: (string | null) }> | null), hiring_team: Array<{ remote_id: (string | null), email: (string | null), first_name: (string | null), last_name: (string | null), hiring_team_roles: Array<("RECRUITER" | "HIRING_MANAGER")> }> } } }
export type IntegrationStateChangedWebhookPayload = { id: string, type: "integration-state-changed", data: { integration_tool: string, integration_id: string, integration_category: ("HRIS" | "ATS" | "ASSESSMENT" | "LMS"), end_user: { organization_name: string, creator_email: (string | null), origin_id: (string | null) }, qa_status: ("PENDING" | "FAILED" | "PASSED"), setup_status: ("INCOMPLETE" | "FINAL_SYNC_PENDING" | "COMPLETED"), state: ("ACTIVE" | "INVALID" | "INACTIVE"), updated_at: string } }
export type AiApplyApplicationStatusUpdatedWebhookPayload = { id: string, type: "ai-apply-application-status-updated", data: { id: string, job_posting_id: string, status: ("SUBMITTED" | "DUPLICATE" | "PENDING" | "FAILED"), created_at: string, updated_at: string } }
export type AiApplyJobPostingStatusUpdatedWebhookPayload = { id: string, type: "ai-apply-job-posting-status-updated", data: { id: string, career_site: { id: string, label: string }, url: string, job_code: (string | null), created_at: string, updated_at: string, archived_at: (string | null), archived_reason: (("JOB_POSTING_TAKEN_OFFLINE" | "MANUAL_ARCHIVE" | "REMOVED_FROM_JOB_FEED") | null), availability: ("APPLYABLE" | "PENDING" | "ARCHIVED" | "UNAVAILABLE") } }
export type SyncFinishedWebhookPayload = { id: string, type: "sync-finished", data: { sync_id: string, sync_state: string, sync_started_at: string, sync_ended_at: string, sync_duration_seconds: number, integration_id: string, integration_tool: string, integration_category: ("HRIS" | "ATS" | "ASSESSMENT" | "LMS"), end_user: { organization_name: string, creator_email: (string | null), origin_id: (string | null) }, log_url: string } }
export type BulkImportJobPostingLocation = { country: string, postal_code?: string }
export type BulkImportJobPostingInput = { url: string, career_site_label: string, job_code?: string, location?: (BulkImportJobPostingLocation | null) }
export type BulkImportResponse = { status: "success", data: { created: number, processed: number, archived: number } }

    // </Schemas>
    }
  
  export namespace Endpoints {
  // <Endpoints>
  
  export type get_GetCheckApiKey = {
      method: "GET",
      path: "/check-api-key",
      requestFormat: "json",
      responseFormat: "json",
      parameters: never,
      responses: {200: Schemas.GetCheckApiKeyPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type post_PostForceSync = {
      method: "POST",
      path: "/force-sync",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        
        header:  { "X-Integration-Id": string },
        
        body:  Schemas.PostForceSyncRequestBody,
          }
      responses: {200: Schemas.PostForceSyncPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type post_PostPassthroughToolApi = {
      method: "POST",
      path: "/passthrough/{tool}/{api}",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        path:  { tool: Schemas.PostPassthroughToolApiParameterTool, api: Schemas.PostPassthroughToolApiParameterApi },
        header:  { "X-Integration-Id": string },
        
        body:  Schemas.PostPassthroughToolApiRequestBody,
          }
      responses: {200: Schemas.PostPassthroughToolApiPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type delete_DeleteIntegrationsIntegrationId = {
      method: "DELETE",
      path: "/integrations/{integration_id}",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        path:  { integration_id: Schemas.DeleteIntegrationsIntegrationIdParameterIntegrationId },
        
        
        body:  Schemas.DeleteIntegrationsIntegrationIdRequestBody,
          }
      responses: {200: Schemas.DeleteIntegrationsIntegrationIdPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type get_GetIntegrationsIntegrationId = {
      method: "GET",
      path: "/integrations/{integration_id}",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        path:  { integration_id: Schemas.GetIntegrationsIntegrationIdParameterIntegrationId },
        
        
        
          }
      responses: {200: Schemas.GetIntegrationsIntegrationIdPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type put_PutIntegrationsIntegrationIdEnabled = {
      method: "PUT",
      path: "/integrations/{integration_id}/enabled",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        path:  { integration_id: Schemas.PutIntegrationsIntegrationIdEnabledParameterIntegrationId },
        
        
        body:  Schemas.PutIntegrationsIntegrationIdEnabledRequestBody,
          }
      responses: {200: Schemas.PutIntegrationsIntegrationIdEnabledPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type post_PostIntegrationsIntegrationIdRelink = {
      method: "POST",
      path: "/integrations/{integration_id}/relink",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        path:  { integration_id: Schemas.PostIntegrationsIntegrationIdRelinkParameterIntegrationId },
        
        
        body:  Schemas.PostIntegrationsIntegrationIdRelinkRequestBody,
          }
      responses: {200: Schemas.PostIntegrationsIntegrationIdRelinkPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type post_PostIntegrationsIntegrationIdSetupLink = {
      method: "POST",
      path: "/integrations/{integration_id}/setup-link",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        path:  { integration_id: Schemas.PostIntegrationsIntegrationIdSetupLinkParameterIntegrationId },
        
        
        body:  Schemas.PostIntegrationsIntegrationIdSetupLinkRequestBody,
          }
      responses: {200: Schemas.PostIntegrationsIntegrationIdSetupLinkPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type get_GetIntegrationsIntegrationIdIntegrationFields = {
      method: "GET",
      path: "/integrations/{integration_id}/integration-fields",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            query?:  Partial<{ cursor: Schemas.GetIntegrationsIntegrationIdIntegrationFieldsParameterCursor, page_size: Schemas.GetIntegrationsIntegrationIdIntegrationFieldsParameterPageSize }>,
        path:  { integration_id: Schemas.GetIntegrationsIntegrationIdIntegrationFieldsParameterIntegrationId },
        
        
        
          }
      responses: {200: Schemas.GetIntegrationsIntegrationIdIntegrationFieldsPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type patch_PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldId = {
      method: "PATCH",
      path: "/integrations/{integration_id}/integration-fields/{integration_field_id}",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        path:  { integration_id: Schemas.PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationId, integration_field_id: Schemas.PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationFieldId },
        
        
        body:  Schemas.PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdRequestBody,
          }
      responses: {200: Schemas.PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type get_GetIntegrationsIntegrationIdCustomFields = {
      method: "GET",
      path: "/integrations/{integration_id}/custom-fields",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            query?:  Partial<{ cursor: Schemas.GetIntegrationsIntegrationIdCustomFieldsParameterCursor, page_size: Schemas.GetIntegrationsIntegrationIdCustomFieldsParameterPageSize }>,
        path:  { integration_id: Schemas.GetIntegrationsIntegrationIdCustomFieldsParameterIntegrationId },
        
        
        
          }
      responses: {200: Schemas.GetIntegrationsIntegrationIdCustomFieldsPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type put_PutIntegrationsIntegrationIdCustomFieldsCustomFieldId = {
      method: "PUT",
      path: "/integrations/{integration_id}/custom-fields/{custom_field_id}",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        path:  { integration_id: Schemas.PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterIntegrationId, custom_field_id: Schemas.PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterCustomFieldId },
        
        
        body:  Schemas.PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdRequestBody,
          }
      responses: {200: Schemas.PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type get_GetToolsCategory = {
      method: "GET",
      path: "/tools/{category}",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        path:  { category: Schemas.GetToolsCategoryParameterCategory },
        
        
        
          }
      responses: {200: Schemas.GetToolsCategoryPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type post_PostHrisProvisioningGroupsGroupIdDiff = {
      method: "POST",
      path: "/hris/provisioning-groups/{group_id}/diff",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        path:  { group_id: Schemas.PostHrisProvisioningGroupsGroupIdDiffParameterGroupId },
        header:  { "X-Integration-Id": string },
        
        body:  Schemas.PostHrisProvisioningGroupsGroupIdDiffRequestBody,
          }
      responses: {200: Schemas.PostHrisProvisioningGroupsGroupIdDiffPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type post_PostHrisProvisioningGroupsGroupIdSetupLinks = {
      method: "POST",
      path: "/hris/provisioning-groups/{group_id}/setup-links",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        path:  { group_id: Schemas.PostHrisProvisioningGroupsGroupIdSetupLinksParameterGroupId },
        header:  { "X-Integration-Id": string },
        
        body:  Schemas.PostHrisProvisioningGroupsGroupIdSetupLinksRequestBody,
          }
      responses: {200: Schemas.PostHrisProvisioningGroupsGroupIdSetupLinksPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type get_GetHrisEmployees = {
      method: "GET",
      path: "/hris/employees",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            query?:  Partial<{ cursor: Schemas.GetHrisEmployeesParameterCursor, page_size: Schemas.GetHrisEmployeesParameterPageSize, updated_after: Schemas.GetHrisEmployeesParameterUpdatedAfter, include_deleted: Schemas.GetHrisEmployeesParameterIncludeDeleted, ignore_unsupported_filters: Schemas.GetHrisEmployeesParameterIgnoreUnsupportedFilters, ids: Schemas.GetHrisEmployeesParameterIds, remote_ids: Schemas.GetHrisEmployeesParameterRemoteIds, employment_status: Schemas.GetHrisEmployeesParameterEmploymentStatus, employment_statuses: Schemas.GetHrisEmployeesParameterEmploymentStatuses, group_ids: Schemas.GetHrisEmployeesParameterGroupIds, legal_entity_ids: Schemas.GetHrisEmployeesParameterLegalEntityIds, work_location_ids: Schemas.GetHrisEmployeesParameterWorkLocationIds, work_emails: Schemas.GetHrisEmployeesParameterWorkEmails, personal_emails: Schemas.GetHrisEmployeesParameterPersonalEmails, custom_fields: Schemas.GetHrisEmployeesParameterCustomFields }>,
        
        header:  { "X-Integration-Id": string },
        
        
          }
      responses: {200: Schemas.GetHrisEmployeesPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type post_PostHrisEmployees = {
      method: "POST",
      path: "/hris/employees",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        
        header:  { "X-Integration-Id": string },
        
        body:  Schemas.PostHrisEmployeesRequestBody,
          }
      responses: {200: Schemas.PostHrisEmployeesPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type get_GetHrisEmployeesForm = {
      method: "GET",
      path: "/hris/employees/form",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        
        header:  { "X-Integration-Id": string },
        
        
          }
      responses: {200: Schemas.GetHrisEmployeesFormPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type post_PostHrisEmployeesForm = {
      method: "POST",
      path: "/hris/employees/form",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        
        header:  { "X-Integration-Id": string },
        
        body:  Schemas.PostHrisEmployeesFormRequestBody,
          }
      responses: {200: Schemas.PostHrisEmployeesFormPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type patch_PatchHrisEmployeesEmployeeId = {
      method: "PATCH",
      path: "/hris/employees/{employee_id}",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        path:  { employee_id: Schemas.PatchHrisEmployeesEmployeeIdParameterEmployeeId },
        header:  { "X-Integration-Id": string },
        
        body:  Schemas.PatchHrisEmployeesEmployeeIdRequestBody,
          }
      responses: {200: Schemas.PatchHrisEmployeesEmployeeIdPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type post_PostHrisEmployeesEmployeeIdDocuments = {
      method: "POST",
      path: "/hris/employees/{employee_id}/documents",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        path:  { employee_id: Schemas.PostHrisEmployeesEmployeeIdDocumentsParameterEmployeeId },
        header:  { "X-Integration-Id": string },
        
        body:  Schemas.PostHrisEmployeesEmployeeIdDocumentsRequestBody,
          }
      responses: {200: Schemas.PostHrisEmployeesEmployeeIdDocumentsPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type get_GetHrisEmployeeDocumentCategories = {
      method: "GET",
      path: "/hris/employee-document-categories",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            query?:  Partial<{ cursor: Schemas.GetHrisEmployeeDocumentCategoriesParameterCursor, page_size: Schemas.GetHrisEmployeeDocumentCategoriesParameterPageSize, updated_after: Schemas.GetHrisEmployeeDocumentCategoriesParameterUpdatedAfter, include_deleted: Schemas.GetHrisEmployeeDocumentCategoriesParameterIncludeDeleted, ignore_unsupported_filters: Schemas.GetHrisEmployeeDocumentCategoriesParameterIgnoreUnsupportedFilters, ids: Schemas.GetHrisEmployeeDocumentCategoriesParameterIds, remote_ids: Schemas.GetHrisEmployeeDocumentCategoriesParameterRemoteIds }>,
        
        header:  { "X-Integration-Id": string },
        
        
          }
      responses: {200: Schemas.GetHrisEmployeeDocumentCategoriesPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type get_GetHrisTeams = {
      method: "GET",
      path: "/hris/teams",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            query?:  Partial<{ cursor: Schemas.GetHrisTeamsParameterCursor, page_size: Schemas.GetHrisTeamsParameterPageSize, updated_after: Schemas.GetHrisTeamsParameterUpdatedAfter, include_deleted: Schemas.GetHrisTeamsParameterIncludeDeleted, ignore_unsupported_filters: Schemas.GetHrisTeamsParameterIgnoreUnsupportedFilters, ids: Schemas.GetHrisTeamsParameterIds, remote_ids: Schemas.GetHrisTeamsParameterRemoteIds }>,
        
        header:  { "X-Integration-Id": string },
        
        
          }
      responses: {200: Schemas.GetHrisTeamsPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type get_GetHrisGroups = {
      method: "GET",
      path: "/hris/groups",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            query?:  Partial<{ cursor: Schemas.GetHrisGroupsParameterCursor, page_size: Schemas.GetHrisGroupsParameterPageSize, updated_after: Schemas.GetHrisGroupsParameterUpdatedAfter, include_deleted: Schemas.GetHrisGroupsParameterIncludeDeleted, ignore_unsupported_filters: Schemas.GetHrisGroupsParameterIgnoreUnsupportedFilters, ids: Schemas.GetHrisGroupsParameterIds, remote_ids: Schemas.GetHrisGroupsParameterRemoteIds, types: Schemas.GetHrisGroupsParameterTypes, name_contains: Schemas.GetHrisGroupsParameterNameContains }>,
        
        header:  { "X-Integration-Id": string },
        
        
          }
      responses: {200: Schemas.GetHrisGroupsPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type get_GetHrisEmployments = {
      method: "GET",
      path: "/hris/employments",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            query?:  Partial<{ cursor: Schemas.GetHrisEmploymentsParameterCursor, page_size: Schemas.GetHrisEmploymentsParameterPageSize, updated_after: Schemas.GetHrisEmploymentsParameterUpdatedAfter, include_deleted: Schemas.GetHrisEmploymentsParameterIncludeDeleted, ignore_unsupported_filters: Schemas.GetHrisEmploymentsParameterIgnoreUnsupportedFilters, ids: Schemas.GetHrisEmploymentsParameterIds, remote_ids: Schemas.GetHrisEmploymentsParameterRemoteIds }>,
        
        header:  { "X-Integration-Id": string },
        
        
          }
      responses: {200: Schemas.GetHrisEmploymentsPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type get_GetHrisLocations = {
      method: "GET",
      path: "/hris/locations",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            query?:  Partial<{ cursor: Schemas.GetHrisLocationsParameterCursor, page_size: Schemas.GetHrisLocationsParameterPageSize, updated_after: Schemas.GetHrisLocationsParameterUpdatedAfter, include_deleted: Schemas.GetHrisLocationsParameterIncludeDeleted, ignore_unsupported_filters: Schemas.GetHrisLocationsParameterIgnoreUnsupportedFilters, ids: Schemas.GetHrisLocationsParameterIds, remote_ids: Schemas.GetHrisLocationsParameterRemoteIds, name_contains: Schemas.GetHrisLocationsParameterNameContains }>,
        
        header:  { "X-Integration-Id": string },
        
        
          }
      responses: {200: Schemas.GetHrisLocationsPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type get_GetHrisAbsenceTypes = {
      method: "GET",
      path: "/hris/absence-types",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            query?:  Partial<{ cursor: Schemas.GetHrisAbsenceTypesParameterCursor, page_size: Schemas.GetHrisAbsenceTypesParameterPageSize, updated_after: Schemas.GetHrisAbsenceTypesParameterUpdatedAfter, include_deleted: Schemas.GetHrisAbsenceTypesParameterIncludeDeleted, ignore_unsupported_filters: Schemas.GetHrisAbsenceTypesParameterIgnoreUnsupportedFilters, ids: Schemas.GetHrisAbsenceTypesParameterIds, remote_ids: Schemas.GetHrisAbsenceTypesParameterRemoteIds }>,
        
        header:  { "X-Integration-Id": string },
        
        
          }
      responses: {200: Schemas.GetHrisAbsenceTypesPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type get_GetHrisTimeOffBalances = {
      method: "GET",
      path: "/hris/time-off-balances",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            query?:  Partial<{ cursor: Schemas.GetHrisTimeOffBalancesParameterCursor, page_size: Schemas.GetHrisTimeOffBalancesParameterPageSize, updated_after: Schemas.GetHrisTimeOffBalancesParameterUpdatedAfter, include_deleted: Schemas.GetHrisTimeOffBalancesParameterIncludeDeleted, ignore_unsupported_filters: Schemas.GetHrisTimeOffBalancesParameterIgnoreUnsupportedFilters, ids: Schemas.GetHrisTimeOffBalancesParameterIds, remote_ids: Schemas.GetHrisTimeOffBalancesParameterRemoteIds, employee_id: Schemas.GetHrisTimeOffBalancesParameterEmployeeId }>,
        
        header:  { "X-Integration-Id": string },
        
        
          }
      responses: {200: Schemas.GetHrisTimeOffBalancesPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type get_GetHrisAbsences = {
      method: "GET",
      path: "/hris/absences",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            query?:  Partial<{ cursor: Schemas.GetHrisAbsencesParameterCursor, page_size: Schemas.GetHrisAbsencesParameterPageSize, updated_after: Schemas.GetHrisAbsencesParameterUpdatedAfter, include_deleted: Schemas.GetHrisAbsencesParameterIncludeDeleted, ignore_unsupported_filters: Schemas.GetHrisAbsencesParameterIgnoreUnsupportedFilters, ids: Schemas.GetHrisAbsencesParameterIds, remote_ids: Schemas.GetHrisAbsencesParameterRemoteIds, date_from: Schemas.GetHrisAbsencesParameterDateFrom, date_until: Schemas.GetHrisAbsencesParameterDateUntil, type_ids: Schemas.GetHrisAbsencesParameterTypeIds, employee_id: Schemas.GetHrisAbsencesParameterEmployeeId, time_from: Schemas.GetHrisAbsencesParameterTimeFrom, time_until: Schemas.GetHrisAbsencesParameterTimeUntil }>,
        
        header:  { "X-Integration-Id": string },
        
        
          }
      responses: {200: Schemas.GetHrisAbsencesPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type post_PostHrisAbsences = {
      method: "POST",
      path: "/hris/absences",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        
        header:  { "X-Integration-Id": string },
        
        body:  Schemas.PostHrisAbsencesRequestBody,
          }
      responses: {200: Schemas.PostHrisAbsencesPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type delete_DeleteHrisAbsencesAbsenceId = {
      method: "DELETE",
      path: "/hris/absences/{absence_id}",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        path:  { absence_id: Schemas.DeleteHrisAbsencesAbsenceIdParameterAbsenceId },
        header:  { "X-Integration-Id": string },
        
        body:  Schemas.DeleteHrisAbsencesAbsenceIdRequestBody,
          }
      responses: {200: Schemas.DeleteHrisAbsencesAbsenceIdPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type get_GetHrisLegalEntities = {
      method: "GET",
      path: "/hris/legal-entities",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            query?:  Partial<{ cursor: Schemas.GetHrisLegalEntitiesParameterCursor, page_size: Schemas.GetHrisLegalEntitiesParameterPageSize, updated_after: Schemas.GetHrisLegalEntitiesParameterUpdatedAfter, include_deleted: Schemas.GetHrisLegalEntitiesParameterIncludeDeleted, ignore_unsupported_filters: Schemas.GetHrisLegalEntitiesParameterIgnoreUnsupportedFilters, ids: Schemas.GetHrisLegalEntitiesParameterIds, remote_ids: Schemas.GetHrisLegalEntitiesParameterRemoteIds, name_contains: Schemas.GetHrisLegalEntitiesParameterNameContains }>,
        
        header:  { "X-Integration-Id": string },
        
        
          }
      responses: {200: Schemas.GetHrisLegalEntitiesPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type get_GetHrisTimesheets = {
      method: "GET",
      path: "/hris/timesheets",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            query?:  Partial<{ cursor: Schemas.GetHrisTimesheetsParameterCursor, page_size: Schemas.GetHrisTimesheetsParameterPageSize, updated_after: Schemas.GetHrisTimesheetsParameterUpdatedAfter, include_deleted: Schemas.GetHrisTimesheetsParameterIncludeDeleted, ignore_unsupported_filters: Schemas.GetHrisTimesheetsParameterIgnoreUnsupportedFilters, ids: Schemas.GetHrisTimesheetsParameterIds, remote_ids: Schemas.GetHrisTimesheetsParameterRemoteIds, employee_id: Schemas.GetHrisTimesheetsParameterEmployeeId, started_before: Schemas.GetHrisTimesheetsParameterStartedBefore, started_after: Schemas.GetHrisTimesheetsParameterStartedAfter, ended_before: Schemas.GetHrisTimesheetsParameterEndedBefore, ended_after: Schemas.GetHrisTimesheetsParameterEndedAfter }>,
        
        header:  { "X-Integration-Id": string },
        
        
          }
      responses: {200: Schemas.GetHrisTimesheetsPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type get_GetHrisPerformanceReviewCycles = {
      method: "GET",
      path: "/hris/performance-review-cycles",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            query?:  Partial<{ cursor: Schemas.GetHrisPerformanceReviewCyclesParameterCursor, page_size: Schemas.GetHrisPerformanceReviewCyclesParameterPageSize, updated_after: Schemas.GetHrisPerformanceReviewCyclesParameterUpdatedAfter, include_deleted: Schemas.GetHrisPerformanceReviewCyclesParameterIncludeDeleted, ignore_unsupported_filters: Schemas.GetHrisPerformanceReviewCyclesParameterIgnoreUnsupportedFilters, ids: Schemas.GetHrisPerformanceReviewCyclesParameterIds, remote_ids: Schemas.GetHrisPerformanceReviewCyclesParameterRemoteIds }>,
        
        header:  { "X-Integration-Id": string },
        
        
          }
      responses: {200: Schemas.GetHrisPerformanceReviewCyclesPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type get_GetHrisPerformanceReviews = {
      method: "GET",
      path: "/hris/performance-reviews",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            query?:  Partial<{ cursor: Schemas.GetHrisPerformanceReviewsParameterCursor, page_size: Schemas.GetHrisPerformanceReviewsParameterPageSize, updated_after: Schemas.GetHrisPerformanceReviewsParameterUpdatedAfter, include_deleted: Schemas.GetHrisPerformanceReviewsParameterIncludeDeleted, ignore_unsupported_filters: Schemas.GetHrisPerformanceReviewsParameterIgnoreUnsupportedFilters, ids: Schemas.GetHrisPerformanceReviewsParameterIds, remote_ids: Schemas.GetHrisPerformanceReviewsParameterRemoteIds, types: Schemas.GetHrisPerformanceReviewsParameterTypes, review_cycle_ids: Schemas.GetHrisPerformanceReviewsParameterReviewCycleIds, reviewee_ids: Schemas.GetHrisPerformanceReviewsParameterRevieweeIds }>,
        
        header:  { "X-Integration-Id": string },
        
        
          }
      responses: {200: Schemas.GetHrisPerformanceReviewsPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type get_GetHrisSkills = {
      method: "GET",
      path: "/hris/skills",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            query?:  Partial<{ ids: Schemas.GetHrisSkillsParameterIds, remote_ids: Schemas.GetHrisSkillsParameterRemoteIds, name_contains: Schemas.GetHrisSkillsParameterNameContains }>,
        
        header:  { "X-Integration-Id": string },
        
        
          }
      responses: {200: Schemas.GetHrisSkillsPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type post_PostHrisSkills = {
      method: "POST",
      path: "/hris/skills",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        
        header:  { "X-Integration-Id": string },
        
        body:  Schemas.PostHrisSkillsRequestBody,
          }
      responses: {200: Schemas.PostHrisSkillsPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type patch_PatchHrisSkillsSkillId = {
      method: "PATCH",
      path: "/hris/skills/{skill_id}",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        path:  { skill_id: Schemas.PatchHrisSkillsSkillIdParameterSkillId },
        header:  { "X-Integration-Id": string },
        
        body:  Schemas.PatchHrisSkillsSkillIdRequestBody,
          }
      responses: {200: Schemas.PatchHrisSkillsSkillIdPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type delete_DeleteHrisSkillsSkillId = {
      method: "DELETE",
      path: "/hris/skills/{skill_id}",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        path:  { skill_id: Schemas.DeleteHrisSkillsSkillIdParameterSkillId },
        header:  { "X-Integration-Id": string },
        
        body:  Schemas.DeleteHrisSkillsSkillIdRequestBody,
          }
      responses: {200: Schemas.DeleteHrisSkillsSkillIdPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type get_GetHrisEmployeeSkillAssignments = {
      method: "GET",
      path: "/hris/employee-skill-assignments",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            query?:  Partial<{ ids: Schemas.GetHrisEmployeeSkillAssignmentsParameterIds, remote_ids: Schemas.GetHrisEmployeeSkillAssignmentsParameterRemoteIds, employee_ids: Schemas.GetHrisEmployeeSkillAssignmentsParameterEmployeeIds, skill_ids: Schemas.GetHrisEmployeeSkillAssignmentsParameterSkillIds }>,
        
        header:  { "X-Integration-Id": string },
        
        
          }
      responses: {200: Schemas.GetHrisEmployeeSkillAssignmentsPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type post_PostHrisEmployeeSkillAssignments = {
      method: "POST",
      path: "/hris/employee-skill-assignments",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        
        header:  { "X-Integration-Id": string },
        
        body:  Schemas.PostHrisEmployeeSkillAssignmentsRequestBody,
          }
      responses: {200: Schemas.PostHrisEmployeeSkillAssignmentsPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type patch_PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentId = {
      method: "PATCH",
      path: "/hris/employee-skill-assignments/{employee_skill_assignment_id}",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        path:  { employee_skill_assignment_id: Schemas.PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId },
        header:  { "X-Integration-Id": string },
        
        body:  Schemas.PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody,
          }
      responses: {200: Schemas.PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type delete_DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentId = {
      method: "DELETE",
      path: "/hris/employee-skill-assignments/{employee_skill_assignment_id}",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        path:  { employee_skill_assignment_id: Schemas.DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId },
        header:  { "X-Integration-Id": string },
        
        body:  Schemas.DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody,
          }
      responses: {200: Schemas.DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type get_GetHrisStaffingEntities = {
      method: "GET",
      path: "/hris/staffing-entities",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            query?:  Partial<{ cursor: Schemas.GetHrisStaffingEntitiesParameterCursor, page_size: Schemas.GetHrisStaffingEntitiesParameterPageSize, updated_after: Schemas.GetHrisStaffingEntitiesParameterUpdatedAfter, include_deleted: Schemas.GetHrisStaffingEntitiesParameterIncludeDeleted, ignore_unsupported_filters: Schemas.GetHrisStaffingEntitiesParameterIgnoreUnsupportedFilters, ids: Schemas.GetHrisStaffingEntitiesParameterIds, remote_ids: Schemas.GetHrisStaffingEntitiesParameterRemoteIds, model_types: Schemas.GetHrisStaffingEntitiesParameterModelTypes, statuses: Schemas.GetHrisStaffingEntitiesParameterStatuses }>,
        
        header:  { "X-Integration-Id": string },
        
        
          }
      responses: {200: Schemas.GetHrisStaffingEntitiesPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type get_GetAtsApplications = {
      method: "GET",
      path: "/ats/applications",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            query?:  Partial<{ cursor: Schemas.GetAtsApplicationsParameterCursor, page_size: Schemas.GetAtsApplicationsParameterPageSize, updated_after: Schemas.GetAtsApplicationsParameterUpdatedAfter, include_deleted: Schemas.GetAtsApplicationsParameterIncludeDeleted, ignore_unsupported_filters: Schemas.GetAtsApplicationsParameterIgnoreUnsupportedFilters, ids: Schemas.GetAtsApplicationsParameterIds, remote_ids: Schemas.GetAtsApplicationsParameterRemoteIds, outcome: Schemas.GetAtsApplicationsParameterOutcome, outcomes: Schemas.GetAtsApplicationsParameterOutcomes, job_ids: Schemas.GetAtsApplicationsParameterJobIds, job_remote_ids: Schemas.GetAtsApplicationsParameterJobRemoteIds, current_stage_ids: Schemas.GetAtsApplicationsParameterCurrentStageIds, remote_created_after: Schemas.GetAtsApplicationsParameterRemoteCreatedAfter }>,
        
        header:  { "X-Integration-Id": string },
        
        
          }
      responses: {200: Schemas.GetAtsApplicationsPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type put_PutAtsApplicationsApplicationIdStage = {
      method: "PUT",
      path: "/ats/applications/{application_id}/stage",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        path:  { application_id: Schemas.PutAtsApplicationsApplicationIdStageParameterApplicationId },
        header:  { "X-Integration-Id": string },
        
        body:  Schemas.PutAtsApplicationsApplicationIdStageRequestBody,
          }
      responses: {200: Schemas.PutAtsApplicationsApplicationIdStagePositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type post_PostAtsApplicationsApplicationIdResultLinks = {
      method: "POST",
      path: "/ats/applications/{application_id}/result-links",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        path:  { application_id: Schemas.PostAtsApplicationsApplicationIdResultLinksParameterApplicationId },
        header:  { "X-Integration-Id": string },
        
        body:  Schemas.PostAtsApplicationsApplicationIdResultLinksRequestBody,
          }
      responses: {200: Schemas.PostAtsApplicationsApplicationIdResultLinksPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type post_PostAtsApplicationsApplicationIdNotes = {
      method: "POST",
      path: "/ats/applications/{application_id}/notes",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        path:  { application_id: Schemas.PostAtsApplicationsApplicationIdNotesParameterApplicationId },
        header:  { "X-Integration-Id": string },
        
        body:  Schemas.PostAtsApplicationsApplicationIdNotesRequestBody,
          }
      responses: {200: Schemas.PostAtsApplicationsApplicationIdNotesPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type get_GetAtsApplicationsApplicationIdAttachments = {
      method: "GET",
      path: "/ats/applications/{application_id}/attachments",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        path:  { application_id: Schemas.GetAtsApplicationsApplicationIdAttachmentsParameterApplicationId },
        header:  { "X-Integration-Id": string },
        
        
          }
      responses: {200: Schemas.GetAtsApplicationsApplicationIdAttachmentsPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type post_PostAtsApplicationsApplicationIdAttachments = {
      method: "POST",
      path: "/ats/applications/{application_id}/attachments",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        path:  { application_id: Schemas.PostAtsApplicationsApplicationIdAttachmentsParameterApplicationId },
        header:  { "X-Integration-Id": string },
        
        body:  Schemas.PostAtsApplicationsApplicationIdAttachmentsRequestBody,
          }
      responses: {200: Schemas.PostAtsApplicationsApplicationIdAttachmentsPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type post_PostAtsApplicationsApplicationIdReject = {
      method: "POST",
      path: "/ats/applications/{application_id}/reject",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        path:  { application_id: Schemas.PostAtsApplicationsApplicationIdRejectParameterApplicationId },
        header:  { "X-Integration-Id": string },
        
        body:  Schemas.PostAtsApplicationsApplicationIdRejectRequestBody,
          }
      responses: {200: Schemas.PostAtsApplicationsApplicationIdRejectPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type post_PostAtsApplicationsApplicationIdInterviews = {
      method: "POST",
      path: "/ats/applications/{application_id}/interviews",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        path:  { application_id: Schemas.PostAtsApplicationsApplicationIdInterviewsParameterApplicationId },
        header:  { "X-Integration-Id": string },
        
        body:  Schemas.PostAtsApplicationsApplicationIdInterviewsRequestBody,
          }
      responses: {200: Schemas.PostAtsApplicationsApplicationIdInterviewsPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type patch_PatchAtsApplicationsApplicationIdInterviews = {
      method: "PATCH",
      path: "/ats/applications/{application_id}/interviews",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        path:  { application_id: Schemas.PatchAtsApplicationsApplicationIdInterviewsParameterApplicationId },
        header:  { "X-Integration-Id": string },
        
        body:  Schemas.PatchAtsApplicationsApplicationIdInterviewsRequestBody,
          }
      responses: {200: Schemas.PatchAtsApplicationsApplicationIdInterviewsPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type get_GetAtsCandidates = {
      method: "GET",
      path: "/ats/candidates",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            query?:  Partial<{ cursor: Schemas.GetAtsCandidatesParameterCursor, page_size: Schemas.GetAtsCandidatesParameterPageSize, updated_after: Schemas.GetAtsCandidatesParameterUpdatedAfter, include_deleted: Schemas.GetAtsCandidatesParameterIncludeDeleted, ignore_unsupported_filters: Schemas.GetAtsCandidatesParameterIgnoreUnsupportedFilters, ids: Schemas.GetAtsCandidatesParameterIds, remote_ids: Schemas.GetAtsCandidatesParameterRemoteIds, email: Schemas.GetAtsCandidatesParameterEmail, job_ids: Schemas.GetAtsCandidatesParameterJobIds, first_name: Schemas.GetAtsCandidatesParameterFirstName, last_name: Schemas.GetAtsCandidatesParameterLastName }>,
        
        header:  { "X-Integration-Id": string },
        
        
          }
      responses: {200: Schemas.GetAtsCandidatesPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type post_PostAtsCandidates = {
      method: "POST",
      path: "/ats/candidates",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        
        header:  { "X-Integration-Id": string },
        
        body:  Schemas.PostAtsCandidatesRequestBody,
          }
      responses: {200: Schemas.PostAtsCandidatesPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type get_GetAtsCandidatesCandidateIdAttachments = {
      method: "GET",
      path: "/ats/candidates/{candidate_id}/attachments",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        path:  { candidate_id: Schemas.GetAtsCandidatesCandidateIdAttachmentsParameterCandidateId },
        header:  { "X-Integration-Id": string },
        
        
          }
      responses: {200: Schemas.GetAtsCandidatesCandidateIdAttachmentsPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type post_PostAtsCandidatesCandidateIdAttachments = {
      method: "POST",
      path: "/ats/candidates/{candidate_id}/attachments",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        path:  { candidate_id: Schemas.PostAtsCandidatesCandidateIdAttachmentsParameterCandidateId },
        header:  { "X-Integration-Id": string },
        
        body:  Schemas.PostAtsCandidatesCandidateIdAttachmentsRequestBody,
          }
      responses: {200: Schemas.PostAtsCandidatesCandidateIdAttachmentsPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type post_PostAtsCandidatesCandidateIdResultLinks = {
      method: "POST",
      path: "/ats/candidates/{candidate_id}/result-links",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        path:  { candidate_id: Schemas.PostAtsCandidatesCandidateIdResultLinksParameterCandidateId },
        header:  { "X-Integration-Id": string },
        
        body:  Schemas.PostAtsCandidatesCandidateIdResultLinksRequestBody,
          }
      responses: {200: Schemas.PostAtsCandidatesCandidateIdResultLinksPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type post_PostAtsCandidatesCandidateIdTags = {
      method: "POST",
      path: "/ats/candidates/{candidate_id}/tags",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        path:  { candidate_id: Schemas.PostAtsCandidatesCandidateIdTagsParameterCandidateId },
        header:  { "X-Integration-Id": string },
        
        body:  Schemas.PostAtsCandidatesCandidateIdTagsRequestBody,
          }
      responses: {200: Schemas.PostAtsCandidatesCandidateIdTagsPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type delete_DeleteAtsCandidatesCandidateIdTags = {
      method: "DELETE",
      path: "/ats/candidates/{candidate_id}/tags",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        path:  { candidate_id: Schemas.DeleteAtsCandidatesCandidateIdTagsParameterCandidateId },
        header:  { "X-Integration-Id": string },
        
        body:  Schemas.DeleteAtsCandidatesCandidateIdTagsRequestBody,
          }
      responses: {200: Schemas.DeleteAtsCandidatesCandidateIdTagsPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type get_GetAtsTags = {
      method: "GET",
      path: "/ats/tags",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            query?:  Partial<{ cursor: Schemas.GetAtsTagsParameterCursor, page_size: Schemas.GetAtsTagsParameterPageSize, updated_after: Schemas.GetAtsTagsParameterUpdatedAfter, include_deleted: Schemas.GetAtsTagsParameterIncludeDeleted, ignore_unsupported_filters: Schemas.GetAtsTagsParameterIgnoreUnsupportedFilters, ids: Schemas.GetAtsTagsParameterIds, remote_ids: Schemas.GetAtsTagsParameterRemoteIds }>,
        
        header:  { "X-Integration-Id": string },
        
        
          }
      responses: {200: Schemas.GetAtsTagsPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type get_GetAtsApplicationStages = {
      method: "GET",
      path: "/ats/application-stages",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            query?:  Partial<{ cursor: Schemas.GetAtsApplicationStagesParameterCursor, page_size: Schemas.GetAtsApplicationStagesParameterPageSize, updated_after: Schemas.GetAtsApplicationStagesParameterUpdatedAfter, include_deleted: Schemas.GetAtsApplicationStagesParameterIncludeDeleted, ignore_unsupported_filters: Schemas.GetAtsApplicationStagesParameterIgnoreUnsupportedFilters, ids: Schemas.GetAtsApplicationStagesParameterIds, remote_ids: Schemas.GetAtsApplicationStagesParameterRemoteIds }>,
        
        header:  { "X-Integration-Id": string },
        
        
          }
      responses: {200: Schemas.GetAtsApplicationStagesPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type get_GetAtsJobs = {
      method: "GET",
      path: "/ats/jobs",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            query?:  Partial<{ cursor: Schemas.GetAtsJobsParameterCursor, page_size: Schemas.GetAtsJobsParameterPageSize, updated_after: Schemas.GetAtsJobsParameterUpdatedAfter, include_deleted: Schemas.GetAtsJobsParameterIncludeDeleted, ignore_unsupported_filters: Schemas.GetAtsJobsParameterIgnoreUnsupportedFilters, ids: Schemas.GetAtsJobsParameterIds, remote_ids: Schemas.GetAtsJobsParameterRemoteIds, job_codes: Schemas.GetAtsJobsParameterJobCodes, post_url: Schemas.GetAtsJobsParameterPostUrl, status: Schemas.GetAtsJobsParameterStatus, statuses: Schemas.GetAtsJobsParameterStatuses, employment_types: Schemas.GetAtsJobsParameterEmploymentTypes, visibilities: Schemas.GetAtsJobsParameterVisibilities, remote_created_after: Schemas.GetAtsJobsParameterRemoteCreatedAfter, name_contains: Schemas.GetAtsJobsParameterNameContains }>,
        
        header:  { "X-Integration-Id": string },
        
        
          }
      responses: {200: Schemas.GetAtsJobsPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type post_PostAtsJobsJobIdApplications = {
      method: "POST",
      path: "/ats/jobs/{job_id}/applications",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        path:  { job_id: Schemas.PostAtsJobsJobIdApplicationsParameterJobId },
        header:  { "X-Integration-Id": string },
        
        body:  Schemas.PostAtsJobsJobIdApplicationsRequestBody,
          }
      responses: {200: Schemas.PostAtsJobsJobIdApplicationsPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type get_GetAtsUsers = {
      method: "GET",
      path: "/ats/users",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            query?:  Partial<{ cursor: Schemas.GetAtsUsersParameterCursor, page_size: Schemas.GetAtsUsersParameterPageSize, updated_after: Schemas.GetAtsUsersParameterUpdatedAfter, include_deleted: Schemas.GetAtsUsersParameterIncludeDeleted, ignore_unsupported_filters: Schemas.GetAtsUsersParameterIgnoreUnsupportedFilters, ids: Schemas.GetAtsUsersParameterIds, remote_ids: Schemas.GetAtsUsersParameterRemoteIds, emails: Schemas.GetAtsUsersParameterEmails }>,
        
        header:  { "X-Integration-Id": string },
        
        
          }
      responses: {200: Schemas.GetAtsUsersPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type get_GetAtsRoles = {
      method: "GET",
      path: "/ats/roles",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            query?:  Partial<{ cursor: Schemas.GetAtsRolesParameterCursor, page_size: Schemas.GetAtsRolesParameterPageSize, updated_after: Schemas.GetAtsRolesParameterUpdatedAfter, include_deleted: Schemas.GetAtsRolesParameterIncludeDeleted, ignore_unsupported_filters: Schemas.GetAtsRolesParameterIgnoreUnsupportedFilters, ids: Schemas.GetAtsRolesParameterIds, remote_ids: Schemas.GetAtsRolesParameterRemoteIds, scopes: Schemas.GetAtsRolesParameterScopes }>,
        
        header:  { "X-Integration-Id": string },
        
        
          }
      responses: {200: Schemas.GetAtsRolesPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type get_GetAtsOffers = {
      method: "GET",
      path: "/ats/offers",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            query?:  Partial<{ cursor: Schemas.GetAtsOffersParameterCursor, page_size: Schemas.GetAtsOffersParameterPageSize, updated_after: Schemas.GetAtsOffersParameterUpdatedAfter, include_deleted: Schemas.GetAtsOffersParameterIncludeDeleted, ignore_unsupported_filters: Schemas.GetAtsOffersParameterIgnoreUnsupportedFilters, ids: Schemas.GetAtsOffersParameterIds, remote_ids: Schemas.GetAtsOffersParameterRemoteIds }>,
        
        header:  { "X-Integration-Id": string },
        
        
          }
      responses: {200: Schemas.GetAtsOffersPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type get_GetAtsRejectionReasons = {
      method: "GET",
      path: "/ats/rejection-reasons",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            query?:  Partial<{ cursor: Schemas.GetAtsRejectionReasonsParameterCursor, page_size: Schemas.GetAtsRejectionReasonsParameterPageSize, updated_after: Schemas.GetAtsRejectionReasonsParameterUpdatedAfter, include_deleted: Schemas.GetAtsRejectionReasonsParameterIncludeDeleted, ignore_unsupported_filters: Schemas.GetAtsRejectionReasonsParameterIgnoreUnsupportedFilters, ids: Schemas.GetAtsRejectionReasonsParameterIds, remote_ids: Schemas.GetAtsRejectionReasonsParameterRemoteIds }>,
        
        header:  { "X-Integration-Id": string },
        
        
          }
      responses: {200: Schemas.GetAtsRejectionReasonsPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type get_GetAtsInterviews = {
      method: "GET",
      path: "/ats/interviews",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            query?:  Partial<{ cursor: Schemas.GetAtsInterviewsParameterCursor, page_size: Schemas.GetAtsInterviewsParameterPageSize, updated_after: Schemas.GetAtsInterviewsParameterUpdatedAfter, include_deleted: Schemas.GetAtsInterviewsParameterIncludeDeleted, ignore_unsupported_filters: Schemas.GetAtsInterviewsParameterIgnoreUnsupportedFilters, ids: Schemas.GetAtsInterviewsParameterIds, remote_ids: Schemas.GetAtsInterviewsParameterRemoteIds, job_ids: Schemas.GetAtsInterviewsParameterJobIds }>,
        
        header:  { "X-Integration-Id": string },
        
        
          }
      responses: {200: Schemas.GetAtsInterviewsPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type get_GetAtsActionsAtsCreateCandidate = {
      method: "GET",
      path: "/ats/actions/ats_create_candidate",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        
        header:  { "X-Integration-Id": string },
        
        
          }
      responses: {200: Schemas.GetAtsActionsAtsCreateCandidatePositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type get_GetAtsActionsAtsCreateApplication = {
      method: "GET",
      path: "/ats/actions/ats_create_application",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        
        header:  { "X-Integration-Id": string },
        
        
          }
      responses: {200: Schemas.GetAtsActionsAtsCreateApplicationPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type get_GetAtsActionsAtsAddApplicationAttachment = {
      method: "GET",
      path: "/ats/actions/ats_add_application_attachment",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        
        header:  { "X-Integration-Id": string },
        
        
          }
      responses: {200: Schemas.GetAtsActionsAtsAddApplicationAttachmentPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type get_GetAtsActionsAtsAddCandidateAttachment = {
      method: "GET",
      path: "/ats/actions/ats_add_candidate_attachment",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        
        header:  { "X-Integration-Id": string },
        
        
          }
      responses: {200: Schemas.GetAtsActionsAtsAddCandidateAttachmentPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type post_PostAtsImportTrackedApplication = {
      method: "POST",
      path: "/ats/import-tracked-application",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        
        header:  { "X-Integration-Id": string },
        
        body:  Schemas.PostAtsImportTrackedApplicationRequestBody,
          }
      responses: {200: Schemas.PostAtsImportTrackedApplicationPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type post_PostAtsCustomAvionteSyncedJobs = {
      method: "POST",
      path: "/ats/custom/avionte/synced-jobs",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        
        header:  { "X-Integration-Id": string },
        
        body:  Schemas.PostAtsCustomAvionteSyncedJobsRequestBody,
          }
      responses: {200: Schemas.PostAtsCustomAvionteSyncedJobsPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type delete_DeleteAtsCustomAvionteSyncedJobsJobRemoteId = {
      method: "DELETE",
      path: "/ats/custom/avionte/synced-jobs/{job_remote_id}",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        path:  { job_remote_id: Schemas.DeleteAtsCustomAvionteSyncedJobsJobRemoteIdParameterJobRemoteId },
        header:  { "X-Integration-Id": string },
        
        body:  Schemas.DeleteAtsCustomAvionteSyncedJobsJobRemoteIdRequestBody,
          }
      responses: {200: Schemas.DeleteAtsCustomAvionteSyncedJobsJobRemoteIdPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type get_GetAssessmentPackages = {
      method: "GET",
      path: "/assessment/packages",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        
        header:  { "X-Integration-Id": string },
        
        
          }
      responses: {200: Schemas.GetAssessmentPackagesPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type put_PutAssessmentPackages = {
      method: "PUT",
      path: "/assessment/packages",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        
        header:  { "X-Integration-Id": string },
        
        body:  Schemas.PutAssessmentPackagesRequestBody,
          }
      responses: {200: Schemas.PutAssessmentPackagesPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type get_GetAssessmentOrders = {
      method: "GET",
      path: "/assessment/orders",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            query?:  Partial<{ cursor: Schemas.GetAssessmentOrdersParameterCursor, page_size: Schemas.GetAssessmentOrdersParameterPageSize, ids: Schemas.GetAssessmentOrdersParameterIds, statuses: Schemas.GetAssessmentOrdersParameterStatuses, created_after: Schemas.GetAssessmentOrdersParameterCreatedAfter }>,
        
        header:  { "X-Integration-Id": string },
        
        
          }
      responses: {200: Schemas.GetAssessmentOrdersPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type get_GetAssessmentOrdersOpen = {
      method: "GET",
      path: "/assessment/orders/open",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            query?:  Partial<{ cursor: Schemas.GetAssessmentOrdersOpenParameterCursor, page_size: Schemas.GetAssessmentOrdersOpenParameterPageSize }>,
        
        header:  { "X-Integration-Id": string },
        
        
          }
      responses: {200: Schemas.GetAssessmentOrdersOpenPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type put_PutAssessmentOrdersAssessmentOrderIdResult = {
      method: "PUT",
      path: "/assessment/orders/{assessment_order_id}/result",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        path:  { assessment_order_id: Schemas.PutAssessmentOrdersAssessmentOrderIdResultParameterAssessmentOrderId },
        header:  { "X-Integration-Id": string },
        
        body:  Schemas.PutAssessmentOrdersAssessmentOrderIdResultRequestBody,
          }
      responses: {200: Schemas.PutAssessmentOrdersAssessmentOrderIdResultPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type get_GetLmsUsers = {
      method: "GET",
      path: "/lms/users",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            query?:  Partial<{ cursor: Schemas.GetLmsUsersParameterCursor, page_size: Schemas.GetLmsUsersParameterPageSize, updated_after: Schemas.GetLmsUsersParameterUpdatedAfter, include_deleted: Schemas.GetLmsUsersParameterIncludeDeleted, ignore_unsupported_filters: Schemas.GetLmsUsersParameterIgnoreUnsupportedFilters, ids: Schemas.GetLmsUsersParameterIds, remote_ids: Schemas.GetLmsUsersParameterRemoteIds, work_emails: Schemas.GetLmsUsersParameterWorkEmails }>,
        
        header:  { "X-Integration-Id": string },
        
        
          }
      responses: {200: Schemas.GetLmsUsersPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type get_GetLmsCourseProgressions = {
      method: "GET",
      path: "/lms/course-progressions",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            query?:  Partial<{ cursor: Schemas.GetLmsCourseProgressionsParameterCursor, page_size: Schemas.GetLmsCourseProgressionsParameterPageSize, updated_after: Schemas.GetLmsCourseProgressionsParameterUpdatedAfter, include_deleted: Schemas.GetLmsCourseProgressionsParameterIncludeDeleted, ignore_unsupported_filters: Schemas.GetLmsCourseProgressionsParameterIgnoreUnsupportedFilters, ids: Schemas.GetLmsCourseProgressionsParameterIds, remote_ids: Schemas.GetLmsCourseProgressionsParameterRemoteIds, user_ids: Schemas.GetLmsCourseProgressionsParameterUserIds, course_ids: Schemas.GetLmsCourseProgressionsParameterCourseIds }>,
        
        header:  { "X-Integration-Id": string },
        
        
          }
      responses: {200: Schemas.GetLmsCourseProgressionsPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type post_PostLmsCourseProgressions = {
      method: "POST",
      path: "/lms/course-progressions",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        
        header:  { "X-Integration-Id": string },
        
        body:  Schemas.PostLmsCourseProgressionsRequestBody,
          }
      responses: {200: Schemas.PostLmsCourseProgressionsPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type post_PostLmsCourseProgressionsCourseProgressionIdComplete = {
      method: "POST",
      path: "/lms/course-progressions/{course_progression_id}/complete",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        path:  { course_progression_id: Schemas.PostLmsCourseProgressionsCourseProgressionIdCompleteParameterCourseProgressionId },
        header:  { "X-Integration-Id": string },
        
        body:  Schemas.PostLmsCourseProgressionsCourseProgressionIdCompleteRequestBody,
          }
      responses: {200: Schemas.PostLmsCourseProgressionsCourseProgressionIdCompletePositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type get_GetLmsCourses = {
      method: "GET",
      path: "/lms/courses",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            query?:  Partial<{ cursor: Schemas.GetLmsCoursesParameterCursor, page_size: Schemas.GetLmsCoursesParameterPageSize, updated_after: Schemas.GetLmsCoursesParameterUpdatedAfter, include_deleted: Schemas.GetLmsCoursesParameterIncludeDeleted, ignore_unsupported_filters: Schemas.GetLmsCoursesParameterIgnoreUnsupportedFilters, ids: Schemas.GetLmsCoursesParameterIds, remote_ids: Schemas.GetLmsCoursesParameterRemoteIds }>,
        
        header:  { "X-Integration-Id": string },
        
        
          }
      responses: {200: Schemas.GetLmsCoursesPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type post_PostLmsCoursesBulk = {
      method: "POST",
      path: "/lms/courses/bulk",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        
        header:  { "X-Integration-Id": string },
        
        body:  Schemas.PostLmsCoursesBulkRequestBody,
          }
      responses: {200: Schemas.PostLmsCoursesBulkPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type get_GetLmsCoursesBulkTaskId = {
      method: "GET",
      path: "/lms/courses/bulk/{task_id}",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        path:  { task_id: Schemas.GetLmsCoursesBulkTaskIdParameterTaskId },
        header:  { "X-Integration-Id": string },
        
        
          }
      responses: {200: Schemas.GetLmsCoursesBulkTaskIdPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type post_PostLmsCoursesCourseIdDeactivate = {
      method: "POST",
      path: "/lms/courses/{course_id}/deactivate",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        path:  { course_id: Schemas.PostLmsCoursesCourseIdDeactivateParameterCourseId },
        header:  { "X-Integration-Id": string },
        
        body:  Schemas.PostLmsCoursesCourseIdDeactivateRequestBody,
          }
      responses: {200: Schemas.PostLmsCoursesCourseIdDeactivatePositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type get_GetLmsSkills = {
      method: "GET",
      path: "/lms/skills",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            query?:  Partial<{ cursor: Schemas.GetLmsSkillsParameterCursor, page_size: Schemas.GetLmsSkillsParameterPageSize, updated_after: Schemas.GetLmsSkillsParameterUpdatedAfter, include_deleted: Schemas.GetLmsSkillsParameterIncludeDeleted, ignore_unsupported_filters: Schemas.GetLmsSkillsParameterIgnoreUnsupportedFilters, ids: Schemas.GetLmsSkillsParameterIds, remote_ids: Schemas.GetLmsSkillsParameterRemoteIds }>,
        
        header:  { "X-Integration-Id": string },
        
        
          }
      responses: {200: Schemas.GetLmsSkillsPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type post_PostAiApplyCareerSites = {
      method: "POST",
      path: "/ai-apply/career-sites",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        
        
        
        body:  Schemas.PostAiApplyCareerSitesRequestBody,
          }
      responses: {200: Schemas.PostAiApplyCareerSitesPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING" | "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type get_GetAiApplyCareerSites = {
      method: "GET",
      path: "/ai-apply/career-sites",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            query?:  Partial<{ cursor: Schemas.GetAiApplyCareerSitesParameterCursor, page_size: Schemas.GetAiApplyCareerSitesParameterPageSize, ids: Schemas.GetAiApplyCareerSitesParameterIds }>,
        
        
        
        
          }
      responses: {200: Schemas.GetAiApplyCareerSitesPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING" | "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type get_GetAiApplyPostings = {
      method: "GET",
      path: "/ai-apply/postings",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            query?:  Partial<{ cursor: Schemas.GetAiApplyPostingsParameterCursor, page_size: Schemas.GetAiApplyPostingsParameterPageSize, ids: Schemas.GetAiApplyPostingsParameterIds, career_site_ids: Schemas.GetAiApplyPostingsParameterCareerSiteIds, job_codes: Schemas.GetAiApplyPostingsParameterJobCodes }>,
        
        
        
        
          }
      responses: {200: Schemas.GetAiApplyPostingsPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING" | "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type post_PostAiApplyPostings = {
      method: "POST",
      path: "/ai-apply/postings",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        
        
        
        body:  Schemas.PostAiApplyPostingsRequestBody,
          }
      responses: {200: Schemas.PostAiApplyPostingsPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING" | "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type post_PostAiApplyPostingsPostingIdInquire = {
      method: "POST",
      path: "/ai-apply/postings/{posting_id}/inquire",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        path:  { posting_id: Schemas.PostAiApplyPostingsPostingIdInquireParameterPostingId },
        
        
        body:  Schemas.PostAiApplyPostingsPostingIdInquireRequestBody,
          }
      responses: {200: Schemas.PostAiApplyPostingsPostingIdInquirePositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING" | "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type post_PostAiApplyApply = {
      method: "POST",
      path: "/ai-apply/apply",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        
        
        
        body:  Schemas.PostAiApplyApplyRequestBody,
          }
      responses: {200: Schemas.PostAiApplyApplyPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING" | "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type get_GetAiApplyApplications = {
      method: "GET",
      path: "/ai-apply/applications",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            query?:  Partial<{ cursor: Schemas.GetAiApplyApplicationsParameterCursor, page_size: Schemas.GetAiApplyApplicationsParameterPageSize, ids: Schemas.GetAiApplyApplicationsParameterIds, job_posting_ids: Schemas.GetAiApplyApplicationsParameterJobPostingIds }>,
        
        
        
        
          }
      responses: {200: Schemas.GetAiApplyApplicationsPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING" | "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type get_GetAiApplyUnifiedApiJobs = {
      method: "GET",
      path: "/ai-apply/unified-api/jobs",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            query?:  Partial<{ cursor: Schemas.GetAiApplyUnifiedApiJobsParameterCursor, page_size: Schemas.GetAiApplyUnifiedApiJobsParameterPageSize, ids: Schemas.GetAiApplyUnifiedApiJobsParameterIds, remote_ids: Schemas.GetAiApplyUnifiedApiJobsParameterRemoteIds, job_codes: Schemas.GetAiApplyUnifiedApiJobsParameterJobCodes, career_site_ids: Schemas.GetAiApplyUnifiedApiJobsParameterCareerSiteIds }>,
        
        
        
        
          }
      responses: {200: Schemas.GetAiApplyUnifiedApiJobsPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING" | "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type post_PostAiApplyUnifiedApiJobsJobIdApplications = {
      method: "POST",
      path: "/ai-apply/unified-api/jobs/{job_id}/applications",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        path:  { job_id: Schemas.PostAiApplyUnifiedApiJobsJobIdApplicationsParameterJobId },
        
        
        body:  Schemas.PostAiApplyUnifiedApiJobsJobIdApplicationsRequestBody,
          }
      responses: {200: Schemas.PostAiApplyUnifiedApiJobsJobIdApplicationsPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING" | "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type get_GetAiApplyJobFeeds = {
      method: "GET",
      path: "/ai-apply/job-feeds",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            query?:  Partial<{ cursor: Schemas.GetAiApplyJobFeedsParameterCursor, page_size: Schemas.GetAiApplyJobFeedsParameterPageSize, ids: Schemas.GetAiApplyJobFeedsParameterIds }>,
        
        
        
        
          }
      responses: {200: Schemas.GetAiApplyJobFeedsPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING" | "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type post_PostAiApplyJobFeeds = {
      method: "POST",
      path: "/ai-apply/job-feeds",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        
        
        
        body:  Schemas.PostAiApplyJobFeedsRequestBody,
          }
      responses: {200: Schemas.PostAiApplyJobFeedsPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING" | "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type post_PostConnectCreateLink = {
      method: "POST",
      path: "/connect/create-link",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        
        
        
        body:  Schemas.PostConnectCreateLinkRequestBody,
          }
      responses: {200: Schemas.PostConnectCreateLinkPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type get_GetConnectIntegrationByTokenToken = {
      method: "GET",
      path: "/connect/integration-by-token/{token}",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        path:  { token: Schemas.GetConnectIntegrationByTokenTokenParameterToken },
        
        
        
          }
      responses: {200: Schemas.GetConnectIntegrationByTokenTokenPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type post_PostConnectActivateIntegration = {
      method: "POST",
      path: "/connect/activate-integration",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        
        
        
        body:  Schemas.PostConnectActivateIntegrationRequestBody,
          }
      responses: {200: Schemas.PostConnectActivateIntegrationPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type get_GetCustomDatevSystemInformation = {
      method: "GET",
      path: "/custom/datev/system-information",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        
        header:  { "X-Integration-Id": string },
        
        
          }
      responses: {200: Schemas.GetCustomDatevSystemInformationPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type post_PostCustomDatevPassthrough = {
      method: "POST",
      path: "/custom/datev/passthrough",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        
        header:  { "X-Integration-Id": string },
        
        body:  Schemas.PostCustomDatevPassthroughRequestBody,
          }
      responses: {200: Schemas.PostCustomDatevPassthroughPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type get_GetCustomDatevCheckEauPermission = {
      method: "GET",
      path: "/custom/datev/check-eau-permission",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        
        header:  { "X-Integration-Id": string },
        
        
          }
      responses: {200: Schemas.GetCustomDatevCheckEauPermissionPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type get_GetCustomDatevEauRequestsEauId = {
      method: "GET",
      path: "/custom/datev/eau-requests/{eau_id}",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        path:  { eau_id: Schemas.GetCustomDatevEauRequestsEauIdParameterEauId },
        header:  { "X-Integration-Id": string },
        
        
          }
      responses: {200: Schemas.GetCustomDatevEauRequestsEauIdPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type get_GetCustomDatevCheckDocumentPermission = {
      method: "GET",
      path: "/custom/datev/check-document-permission",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        
        header:  { "X-Integration-Id": string },
        
        
          }
      responses: {200: Schemas.GetCustomDatevCheckDocumentPermissionPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type get_GetCustomDatevAvailableDocuments = {
      method: "GET",
      path: "/custom/datev/available-documents",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            query:  { period: Schemas.GetCustomDatevAvailableDocumentsParameterPeriod },
        
        header:  { "X-Integration-Id": string },
        
        
          }
      responses: {200: Schemas.GetCustomDatevAvailableDocumentsPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type post_PostCustomDatevDownloadDocument = {
      method: "POST",
      path: "/custom/datev/download-document",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        
        header:  { "X-Integration-Id": string },
        
        body:  Schemas.PostCustomDatevDownloadDocumentRequestBody,
          }
      responses: {200: Schemas.PostCustomDatevDownloadDocumentPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type post_PostCustomDatevEmployeesEmployeeIdDownloadDocument = {
      method: "POST",
      path: "/custom/datev/employees/{employee_id}/download-document",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        path:  { employee_id: Schemas.PostCustomDatevEmployeesEmployeeIdDownloadDocumentParameterEmployeeId },
        header:  { "X-Integration-Id": string },
        
        body:  Schemas.PostCustomDatevEmployeesEmployeeIdDownloadDocumentRequestBody,
          }
      responses: {200: Schemas.PostCustomDatevEmployeesEmployeeIdDownloadDocumentPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type post_PostCustomDatevEmployeesEmployeeIdEauRequests = {
      method: "POST",
      path: "/custom/datev/employees/{employee_id}/eau-requests",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        path:  { employee_id: Schemas.PostCustomDatevEmployeesEmployeeIdEauRequestsParameterEmployeeId },
        header:  { "X-Integration-Id": string },
        
        body:  Schemas.PostCustomDatevEmployeesEmployeeIdEauRequestsRequestBody,
          }
      responses: {200: Schemas.PostCustomDatevEmployeesEmployeeIdEauRequestsPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type put_PutCustomDatevEmployeesEmployeeIdPreparePayroll = {
      method: "PUT",
      path: "/custom/datev/employees/{employee_id}/prepare-payroll",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        path:  { employee_id: Schemas.PutCustomDatevEmployeesEmployeeIdPreparePayrollParameterEmployeeId },
        header:  { "X-Integration-Id": string },
        
        body:  Schemas.PutCustomDatevEmployeesEmployeeIdPreparePayrollRequestBody,
          }
      responses: {200: Schemas.PutCustomDatevEmployeesEmployeeIdPreparePayrollPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type put_PutCustomDatevEmployeesEmployeeIdCompensations = {
      method: "PUT",
      path: "/custom/datev/employees/{employee_id}/compensations",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        path:  { employee_id: Schemas.PutCustomDatevEmployeesEmployeeIdCompensationsParameterEmployeeId },
        header:  { "X-Integration-Id": string },
        
        body:  Schemas.PutCustomDatevEmployeesEmployeeIdCompensationsRequestBody,
          }
      responses: {200: Schemas.PutCustomDatevEmployeesEmployeeIdCompensationsPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type get_GetCustomDatevCheckWritePermission = {
      method: "GET",
      path: "/custom/datev/check-write-permission",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        
        header:  { "X-Integration-Id": string },
        
        
          }
      responses: {200: Schemas.GetCustomDatevCheckWritePermissionPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type get_GetCustomDatevDataPushes = {
      method: "GET",
      path: "/custom/datev/data-pushes",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        
        header:  { "X-Integration-Id": string },
        
        
          }
      responses: {200: Schemas.GetCustomDatevDataPushesPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type post_PostCustomDatevPushDataGeneral = {
      method: "POST",
      path: "/custom/datev/push-data/general",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        
        header:  { "X-Integration-Id": string },
        
        body:  Schemas.PostCustomDatevPushDataGeneralRequestBody,
          }
      responses: {200: Schemas.PostCustomDatevPushDataGeneralPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type post_PostCustomDatevPushDataPayroll = {
      method: "POST",
      path: "/custom/datev/push-data/payroll",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        
        header:  { "X-Integration-Id": string },
        
        body:  Schemas.PostCustomDatevPushDataPayrollRequestBody,
          }
      responses: {200: Schemas.PostCustomDatevPushDataPayrollPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type post_PostCustomSilaeEmployeesEmployeeIdPayrollSupplements = {
      method: "POST",
      path: "/custom/silae/employees/{employee_id}/payroll-supplements",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        path:  { employee_id: Schemas.PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsParameterEmployeeId },
        header:  { "X-Integration-Id": string },
        
        body:  Schemas.PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsRequestBody,
          }
      responses: {200: Schemas.PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsPositiveResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }
export type post_PostAiApplyJobFeedsBulkImport = {
      method: "POST",
      path: "/ai-apply/job-feeds/{job_feed_id}/bulk-import",
      requestFormat: "json",
      responseFormat: "json",
      parameters: {
            
        path:  { job_feed_id: string },
        
        
        body:  string,
          }
      responses: {200: Schemas.BulkImportResponse,
default: { status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING" | "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } },
},
      
    }

  // </Endpoints>
  }
  
  
  
     // <EndpointByMethod>
     export type EndpointByMethod = {
     get: {
           "/check-api-key": Endpoints.get_GetCheckApiKey,
"/integrations/{integration_id}": Endpoints.get_GetIntegrationsIntegrationId,
"/integrations/{integration_id}/integration-fields": Endpoints.get_GetIntegrationsIntegrationIdIntegrationFields,
"/integrations/{integration_id}/custom-fields": Endpoints.get_GetIntegrationsIntegrationIdCustomFields,
"/tools/{category}": Endpoints.get_GetToolsCategory,
"/hris/employees": Endpoints.get_GetHrisEmployees,
"/hris/employees/form": Endpoints.get_GetHrisEmployeesForm,
"/hris/employee-document-categories": Endpoints.get_GetHrisEmployeeDocumentCategories,
"/hris/teams": Endpoints.get_GetHrisTeams,
"/hris/groups": Endpoints.get_GetHrisGroups,
"/hris/employments": Endpoints.get_GetHrisEmployments,
"/hris/locations": Endpoints.get_GetHrisLocations,
"/hris/absence-types": Endpoints.get_GetHrisAbsenceTypes,
"/hris/time-off-balances": Endpoints.get_GetHrisTimeOffBalances,
"/hris/absences": Endpoints.get_GetHrisAbsences,
"/hris/legal-entities": Endpoints.get_GetHrisLegalEntities,
"/hris/timesheets": Endpoints.get_GetHrisTimesheets,
"/hris/performance-review-cycles": Endpoints.get_GetHrisPerformanceReviewCycles,
"/hris/performance-reviews": Endpoints.get_GetHrisPerformanceReviews,
"/hris/skills": Endpoints.get_GetHrisSkills,
"/hris/employee-skill-assignments": Endpoints.get_GetHrisEmployeeSkillAssignments,
"/hris/staffing-entities": Endpoints.get_GetHrisStaffingEntities,
"/ats/applications": Endpoints.get_GetAtsApplications,
"/ats/applications/{application_id}/attachments": Endpoints.get_GetAtsApplicationsApplicationIdAttachments,
"/ats/candidates": Endpoints.get_GetAtsCandidates,
"/ats/candidates/{candidate_id}/attachments": Endpoints.get_GetAtsCandidatesCandidateIdAttachments,
"/ats/tags": Endpoints.get_GetAtsTags,
"/ats/application-stages": Endpoints.get_GetAtsApplicationStages,
"/ats/jobs": Endpoints.get_GetAtsJobs,
"/ats/users": Endpoints.get_GetAtsUsers,
"/ats/roles": Endpoints.get_GetAtsRoles,
"/ats/offers": Endpoints.get_GetAtsOffers,
"/ats/rejection-reasons": Endpoints.get_GetAtsRejectionReasons,
"/ats/interviews": Endpoints.get_GetAtsInterviews,
"/ats/actions/ats_create_candidate": Endpoints.get_GetAtsActionsAtsCreateCandidate,
"/ats/actions/ats_create_application": Endpoints.get_GetAtsActionsAtsCreateApplication,
"/ats/actions/ats_add_application_attachment": Endpoints.get_GetAtsActionsAtsAddApplicationAttachment,
"/ats/actions/ats_add_candidate_attachment": Endpoints.get_GetAtsActionsAtsAddCandidateAttachment,
"/assessment/packages": Endpoints.get_GetAssessmentPackages,
"/assessment/orders": Endpoints.get_GetAssessmentOrders,
"/assessment/orders/open": Endpoints.get_GetAssessmentOrdersOpen,
"/lms/users": Endpoints.get_GetLmsUsers,
"/lms/course-progressions": Endpoints.get_GetLmsCourseProgressions,
"/lms/courses": Endpoints.get_GetLmsCourses,
"/lms/courses/bulk/{task_id}": Endpoints.get_GetLmsCoursesBulkTaskId,
"/lms/skills": Endpoints.get_GetLmsSkills,
"/ai-apply/career-sites": Endpoints.get_GetAiApplyCareerSites,
"/ai-apply/postings": Endpoints.get_GetAiApplyPostings,
"/ai-apply/applications": Endpoints.get_GetAiApplyApplications,
"/ai-apply/unified-api/jobs": Endpoints.get_GetAiApplyUnifiedApiJobs,
"/ai-apply/job-feeds": Endpoints.get_GetAiApplyJobFeeds,
"/connect/integration-by-token/{token}": Endpoints.get_GetConnectIntegrationByTokenToken,
"/custom/datev/system-information": Endpoints.get_GetCustomDatevSystemInformation,
"/custom/datev/check-eau-permission": Endpoints.get_GetCustomDatevCheckEauPermission,
"/custom/datev/eau-requests/{eau_id}": Endpoints.get_GetCustomDatevEauRequestsEauId,
"/custom/datev/check-document-permission": Endpoints.get_GetCustomDatevCheckDocumentPermission,
"/custom/datev/available-documents": Endpoints.get_GetCustomDatevAvailableDocuments,
"/custom/datev/check-write-permission": Endpoints.get_GetCustomDatevCheckWritePermission,
"/custom/datev/data-pushes": Endpoints.get_GetCustomDatevDataPushes
         },
post: {
           "/force-sync": Endpoints.post_PostForceSync,
"/passthrough/{tool}/{api}": Endpoints.post_PostPassthroughToolApi,
"/integrations/{integration_id}/relink": Endpoints.post_PostIntegrationsIntegrationIdRelink,
"/integrations/{integration_id}/setup-link": Endpoints.post_PostIntegrationsIntegrationIdSetupLink,
"/hris/provisioning-groups/{group_id}/diff": Endpoints.post_PostHrisProvisioningGroupsGroupIdDiff,
"/hris/provisioning-groups/{group_id}/setup-links": Endpoints.post_PostHrisProvisioningGroupsGroupIdSetupLinks,
"/hris/employees": Endpoints.post_PostHrisEmployees,
"/hris/employees/form": Endpoints.post_PostHrisEmployeesForm,
"/hris/employees/{employee_id}/documents": Endpoints.post_PostHrisEmployeesEmployeeIdDocuments,
"/hris/absences": Endpoints.post_PostHrisAbsences,
"/hris/skills": Endpoints.post_PostHrisSkills,
"/hris/employee-skill-assignments": Endpoints.post_PostHrisEmployeeSkillAssignments,
"/ats/applications/{application_id}/result-links": Endpoints.post_PostAtsApplicationsApplicationIdResultLinks,
"/ats/applications/{application_id}/notes": Endpoints.post_PostAtsApplicationsApplicationIdNotes,
"/ats/applications/{application_id}/attachments": Endpoints.post_PostAtsApplicationsApplicationIdAttachments,
"/ats/applications/{application_id}/reject": Endpoints.post_PostAtsApplicationsApplicationIdReject,
"/ats/applications/{application_id}/interviews": Endpoints.post_PostAtsApplicationsApplicationIdInterviews,
"/ats/candidates": Endpoints.post_PostAtsCandidates,
"/ats/candidates/{candidate_id}/attachments": Endpoints.post_PostAtsCandidatesCandidateIdAttachments,
"/ats/candidates/{candidate_id}/result-links": Endpoints.post_PostAtsCandidatesCandidateIdResultLinks,
"/ats/candidates/{candidate_id}/tags": Endpoints.post_PostAtsCandidatesCandidateIdTags,
"/ats/jobs/{job_id}/applications": Endpoints.post_PostAtsJobsJobIdApplications,
"/ats/import-tracked-application": Endpoints.post_PostAtsImportTrackedApplication,
"/ats/custom/avionte/synced-jobs": Endpoints.post_PostAtsCustomAvionteSyncedJobs,
"/lms/course-progressions": Endpoints.post_PostLmsCourseProgressions,
"/lms/course-progressions/{course_progression_id}/complete": Endpoints.post_PostLmsCourseProgressionsCourseProgressionIdComplete,
"/lms/courses/bulk": Endpoints.post_PostLmsCoursesBulk,
"/lms/courses/{course_id}/deactivate": Endpoints.post_PostLmsCoursesCourseIdDeactivate,
"/ai-apply/career-sites": Endpoints.post_PostAiApplyCareerSites,
"/ai-apply/postings": Endpoints.post_PostAiApplyPostings,
"/ai-apply/postings/{posting_id}/inquire": Endpoints.post_PostAiApplyPostingsPostingIdInquire,
"/ai-apply/apply": Endpoints.post_PostAiApplyApply,
"/ai-apply/unified-api/jobs/{job_id}/applications": Endpoints.post_PostAiApplyUnifiedApiJobsJobIdApplications,
"/ai-apply/job-feeds": Endpoints.post_PostAiApplyJobFeeds,
"/connect/create-link": Endpoints.post_PostConnectCreateLink,
"/connect/activate-integration": Endpoints.post_PostConnectActivateIntegration,
"/custom/datev/passthrough": Endpoints.post_PostCustomDatevPassthrough,
"/custom/datev/download-document": Endpoints.post_PostCustomDatevDownloadDocument,
"/custom/datev/employees/{employee_id}/download-document": Endpoints.post_PostCustomDatevEmployeesEmployeeIdDownloadDocument,
"/custom/datev/employees/{employee_id}/eau-requests": Endpoints.post_PostCustomDatevEmployeesEmployeeIdEauRequests,
"/custom/datev/push-data/general": Endpoints.post_PostCustomDatevPushDataGeneral,
"/custom/datev/push-data/payroll": Endpoints.post_PostCustomDatevPushDataPayroll,
"/custom/silae/employees/{employee_id}/payroll-supplements": Endpoints.post_PostCustomSilaeEmployeesEmployeeIdPayrollSupplements,
"/ai-apply/job-feeds/{job_feed_id}/bulk-import": Endpoints.post_PostAiApplyJobFeedsBulkImport
         },
delete: {
           "/integrations/{integration_id}": Endpoints.delete_DeleteIntegrationsIntegrationId,
"/hris/absences/{absence_id}": Endpoints.delete_DeleteHrisAbsencesAbsenceId,
"/hris/skills/{skill_id}": Endpoints.delete_DeleteHrisSkillsSkillId,
"/hris/employee-skill-assignments/{employee_skill_assignment_id}": Endpoints.delete_DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentId,
"/ats/candidates/{candidate_id}/tags": Endpoints.delete_DeleteAtsCandidatesCandidateIdTags,
"/ats/custom/avionte/synced-jobs/{job_remote_id}": Endpoints.delete_DeleteAtsCustomAvionteSyncedJobsJobRemoteId
         },
put: {
           "/integrations/{integration_id}/enabled": Endpoints.put_PutIntegrationsIntegrationIdEnabled,
"/integrations/{integration_id}/custom-fields/{custom_field_id}": Endpoints.put_PutIntegrationsIntegrationIdCustomFieldsCustomFieldId,
"/ats/applications/{application_id}/stage": Endpoints.put_PutAtsApplicationsApplicationIdStage,
"/assessment/packages": Endpoints.put_PutAssessmentPackages,
"/assessment/orders/{assessment_order_id}/result": Endpoints.put_PutAssessmentOrdersAssessmentOrderIdResult,
"/custom/datev/employees/{employee_id}/prepare-payroll": Endpoints.put_PutCustomDatevEmployeesEmployeeIdPreparePayroll,
"/custom/datev/employees/{employee_id}/compensations": Endpoints.put_PutCustomDatevEmployeesEmployeeIdCompensations
         },
patch: {
           "/integrations/{integration_id}/integration-fields/{integration_field_id}": Endpoints.patch_PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldId,
"/hris/employees/{employee_id}": Endpoints.patch_PatchHrisEmployeesEmployeeId,
"/hris/skills/{skill_id}": Endpoints.patch_PatchHrisSkillsSkillId,
"/hris/employee-skill-assignments/{employee_skill_assignment_id}": Endpoints.patch_PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentId,
"/ats/applications/{application_id}/interviews": Endpoints.patch_PatchAtsApplicationsApplicationIdInterviews
         }
     }
     
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

type InferSchemaValue<T> = T;
type InferSchemaInput<T> = T;

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



// <ApiClient>
export class ApiClient {
  baseUrl: string = "";
  successStatusCodes = successStatusCodes;
  errorStatusCodes = errorStatusCodes;
  validate: ValidateSide = "none";
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
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean } : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean })
      >
    ): Promise<Extract<InferResponseByStatus<TEndpoint, SuccessStatusCode>, { data: {} }>["data"]>;

    get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean } : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean })
      >
    ): Promise<SafeApiResponse<TEndpoint>>;

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
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean } : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean })
      >
    ): Promise<Extract<InferResponseByStatus<TEndpoint, SuccessStatusCode>, { data: {} }>["data"]>;

    post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean } : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean })
      >
    ): Promise<SafeApiResponse<TEndpoint>>;

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
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean } : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean })
      >
    ): Promise<Extract<InferResponseByStatus<TEndpoint, SuccessStatusCode>, { data: {} }>["data"]>;

    delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean } : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean })
      >
    ): Promise<SafeApiResponse<TEndpoint>>;

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
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean } : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean })
      >
    ): Promise<Extract<InferResponseByStatus<TEndpoint, SuccessStatusCode>, { data: {} }>["data"]>;

    put<Path extends keyof PutEndpoints, TEndpoint extends PutEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean } : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean })
      >
    ): Promise<SafeApiResponse<TEndpoint>>;

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
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean } : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean })
      >
    ): Promise<Extract<InferResponseByStatus<TEndpoint, SuccessStatusCode>, { data: {} }>["data"]>;

    patch<Path extends keyof PatchEndpoints, TEndpoint extends PatchEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean } : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean })
      >
    ): Promise<SafeApiResponse<TEndpoint>>;

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
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean } : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean })
      >
    ): Promise<Extract<InferResponseByStatus<TEndpoint, SuccessStatusCode>, { data: {} }>["data"]>

    request<
      TMethod extends keyof EndpointByMethod,
      TPath extends keyof EndpointByMethod[TMethod],
      TEndpoint extends EndpointByMethod[TMethod][TPath]
    >(
      method: TMethod,
      path: TPath,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean } : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean })
      >
    ): Promise<SafeApiResponse<TEndpoint>>;

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
      

      const parametersToSend: EndpointParameters = {};
      if (requestParams?.body !== undefined) parametersToSend.body = requestParams.body;
      if (requestParams?.query !== undefined) parametersToSend.query = requestParams.query;
      if (requestParams?.header !== undefined) parametersToSend.header = requestParams.header;
      if (requestParams?.path !== undefined) parametersToSend.path = requestParams.path;
      if (requestParams?.cookie !== undefined) parametersToSend.cookie = requestParams.cookie;

      

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
          
          const typedResponse = Object.assign(response, {
            data: data,
            json: () => Promise.resolve(data)
          }) as SafeApiResponse<TEndpoint>;

          if (throwOnStatusError && (errorStatusCodes as readonly number[]).includes(response.status)) {
            throw new TypedStatusError(typedResponse as TypedErrorResponse<unknown, ErrorStatusCode, unknown>);
          }

          return withResponse ? typedResponse : data;
      })() as Extract<InferResponseByStatus<TEndpoint, SuccessStatusCode>, { data: {} }>["data"]
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

  