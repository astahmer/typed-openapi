
  import typia from "typia";

// <Schemas>
export type GetCheckApiKeyPositiveResponse = { status: string, data: { environment_id: string, customer_id: string } };
export const isGetCheckApiKeyPositiveResponse = typia.createIs<GetCheckApiKeyPositiveResponse>();
export const assertGetCheckApiKeyPositiveResponse = typia.createAssert<GetCheckApiKeyPositiveResponse>();
export const validateGetCheckApiKeyPositiveResponse = typia.createValidate<GetCheckApiKeyPositiveResponse>();

export type PostForceSyncPositiveResponse = { status: string, data: { already_queued: boolean, sync_id: string, type: ("FULL" | "DELTA") } };
export const isPostForceSyncPositiveResponse = typia.createIs<PostForceSyncPositiveResponse>();
export const assertPostForceSyncPositiveResponse = typia.createAssert<PostForceSyncPositiveResponse>();
export const validatePostForceSyncPositiveResponse = typia.createValidate<PostForceSyncPositiveResponse>();

export type PostForceSyncRequestBody = Partial<{ type: ("FULL" | "DELTA") }>;
export const isPostForceSyncRequestBody = typia.createIs<PostForceSyncRequestBody>();
export const assertPostForceSyncRequestBody = typia.createAssert<PostForceSyncRequestBody>();
export const validatePostForceSyncRequestBody = typia.createValidate<PostForceSyncRequestBody>();

export type PostPassthroughToolApiParameterTool = string;
export const isPostPassthroughToolApiParameterTool = typia.createIs<PostPassthroughToolApiParameterTool>();
export const assertPostPassthroughToolApiParameterTool = typia.createAssert<PostPassthroughToolApiParameterTool>();
export const validatePostPassthroughToolApiParameterTool = typia.createValidate<PostPassthroughToolApiParameterTool>();

export type PostPassthroughToolApiParameterApi = string;
export const isPostPassthroughToolApiParameterApi = typia.createIs<PostPassthroughToolApiParameterApi>();
export const assertPostPassthroughToolApiParameterApi = typia.createAssert<PostPassthroughToolApiParameterApi>();
export const validatePostPassthroughToolApiParameterApi = typia.createValidate<PostPassthroughToolApiParameterApi>();

export type PostPassthroughToolApiPositiveResponse = { status: string, data: { url: string, status: number, headers: Record<string, (string | Array<string>)>, data?: unknown }, warnings: Array<{ message: string }> };
export const isPostPassthroughToolApiPositiveResponse = typia.createIs<PostPassthroughToolApiPositiveResponse>();
export const assertPostPassthroughToolApiPositiveResponse = typia.createAssert<PostPassthroughToolApiPositiveResponse>();
export const validatePostPassthroughToolApiPositiveResponse = typia.createValidate<PostPassthroughToolApiPositiveResponse>();

export type PostPassthroughToolApiRequestBody = { method: ("GET" | "POST" | "DELETE" | "PUT" | "PATCH"), path: string, headers?: Record<string, string>, params?: Record<string, string>, data?: unknown, response_as_base64?: boolean, multipart_form_data?: Array<{ name: string, value: (string | { name: string, content_type?: string, data_url?: string, data?: string }) }>, api_options?: Record<string, string> };
export const isPostPassthroughToolApiRequestBody = typia.createIs<PostPassthroughToolApiRequestBody>();
export const assertPostPassthroughToolApiRequestBody = typia.createAssert<PostPassthroughToolApiRequestBody>();
export const validatePostPassthroughToolApiRequestBody = typia.createValidate<PostPassthroughToolApiRequestBody>();

export type DeleteIntegrationsIntegrationIdParameterIntegrationId = string;
export const isDeleteIntegrationsIntegrationIdParameterIntegrationId = typia.createIs<DeleteIntegrationsIntegrationIdParameterIntegrationId>();
export const assertDeleteIntegrationsIntegrationIdParameterIntegrationId = typia.createAssert<DeleteIntegrationsIntegrationIdParameterIntegrationId>();
export const validateDeleteIntegrationsIntegrationIdParameterIntegrationId = typia.createValidate<DeleteIntegrationsIntegrationIdParameterIntegrationId>();

export type DeleteIntegrationsIntegrationIdPositiveResponse = { status: string, data: Record<string, unknown> };
export const isDeleteIntegrationsIntegrationIdPositiveResponse = typia.createIs<DeleteIntegrationsIntegrationIdPositiveResponse>();
export const assertDeleteIntegrationsIntegrationIdPositiveResponse = typia.createAssert<DeleteIntegrationsIntegrationIdPositiveResponse>();
export const validateDeleteIntegrationsIntegrationIdPositiveResponse = typia.createValidate<DeleteIntegrationsIntegrationIdPositiveResponse>();

export type DeleteIntegrationsIntegrationIdRequestBody = Partial<{  }>;
export const isDeleteIntegrationsIntegrationIdRequestBody = typia.createIs<DeleteIntegrationsIntegrationIdRequestBody>();
export const assertDeleteIntegrationsIntegrationIdRequestBody = typia.createAssert<DeleteIntegrationsIntegrationIdRequestBody>();
export const validateDeleteIntegrationsIntegrationIdRequestBody = typia.createValidate<DeleteIntegrationsIntegrationIdRequestBody>();

export type GetIntegrationsIntegrationIdParameterIntegrationId = string;
export const isGetIntegrationsIntegrationIdParameterIntegrationId = typia.createIs<GetIntegrationsIntegrationIdParameterIntegrationId>();
export const assertGetIntegrationsIntegrationIdParameterIntegrationId = typia.createAssert<GetIntegrationsIntegrationIdParameterIntegrationId>();
export const validateGetIntegrationsIntegrationIdParameterIntegrationId = typia.createValidate<GetIntegrationsIntegrationIdParameterIntegrationId>();

export type GetIntegrationsIntegrationIdPositiveResponse = { status: string, data: { id: string, tool: { id: string, label: string, internal_label: (string | null), logo_url: string, icon_url: string }, category: ("HRIS" | "ATS" | "ASSESSMENT" | "LMS"), status: ("ACTIVE" | "INVALID" | "INACTIVE"), setup_status: ("INCOMPLETE" | "FINAL_SYNC_PENDING" | "COMPLETED"), end_user: { organization_name: string, creator_email: (string | null), origin_id: (string | null) }, scope_config: { id: string, name: (string | null) }, data_expired_at: (string | null), created_at: string, beta: boolean, read_models: Array<{ id: string, label: string, is_available: boolean, coverage_status: ("SUPPORTED" | "UNSUPPORTED" | "NOT_IMPLEMENTED" | "UNKNOWN"), scope_config_setting: ("ENABLED" | "DISABLED" | "OPTIONAL"), opted_out_by_customer: boolean, fields: Array<{ id: string, is_available: boolean, coverage_status: ("SUPPORTED" | "UNSUPPORTED" | "NOT_IMPLEMENTED" | "UNKNOWN"), scope_config_setting: ("ENABLED" | "DISABLED" | "OPTIONAL"), opted_out_by_customer: boolean }> }>, write_actions: Array<{ id: string, label: string, is_available: boolean, coverage_status: ("SUPPORTED" | "UNSUPPORTED" | "NOT_IMPLEMENTED" | "UNKNOWN"), scope_config_setting: ("ENABLED" | "DISABLED" | "OPTIONAL"), opted_out_by_customer: boolean, fields: Array<{ id: string, is_available: boolean, coverage_status: ("SUPPORTED" | "UNSUPPORTED" | "NOT_IMPLEMENTED" | "UNKNOWN") }> }> } };
export const isGetIntegrationsIntegrationIdPositiveResponse = typia.createIs<GetIntegrationsIntegrationIdPositiveResponse>();
export const assertGetIntegrationsIntegrationIdPositiveResponse = typia.createAssert<GetIntegrationsIntegrationIdPositiveResponse>();
export const validateGetIntegrationsIntegrationIdPositiveResponse = typia.createValidate<GetIntegrationsIntegrationIdPositiveResponse>();

export type PutIntegrationsIntegrationIdEnabledParameterIntegrationId = string;
export const isPutIntegrationsIntegrationIdEnabledParameterIntegrationId = typia.createIs<PutIntegrationsIntegrationIdEnabledParameterIntegrationId>();
export const assertPutIntegrationsIntegrationIdEnabledParameterIntegrationId = typia.createAssert<PutIntegrationsIntegrationIdEnabledParameterIntegrationId>();
export const validatePutIntegrationsIntegrationIdEnabledParameterIntegrationId = typia.createValidate<PutIntegrationsIntegrationIdEnabledParameterIntegrationId>();

export type PutIntegrationsIntegrationIdEnabledPositiveResponse = { status: string, data: Record<string, unknown> };
export const isPutIntegrationsIntegrationIdEnabledPositiveResponse = typia.createIs<PutIntegrationsIntegrationIdEnabledPositiveResponse>();
export const assertPutIntegrationsIntegrationIdEnabledPositiveResponse = typia.createAssert<PutIntegrationsIntegrationIdEnabledPositiveResponse>();
export const validatePutIntegrationsIntegrationIdEnabledPositiveResponse = typia.createValidate<PutIntegrationsIntegrationIdEnabledPositiveResponse>();

export type PutIntegrationsIntegrationIdEnabledRequestBody = { value: boolean };
export const isPutIntegrationsIntegrationIdEnabledRequestBody = typia.createIs<PutIntegrationsIntegrationIdEnabledRequestBody>();
export const assertPutIntegrationsIntegrationIdEnabledRequestBody = typia.createAssert<PutIntegrationsIntegrationIdEnabledRequestBody>();
export const validatePutIntegrationsIntegrationIdEnabledRequestBody = typia.createValidate<PutIntegrationsIntegrationIdEnabledRequestBody>();

export type PostIntegrationsIntegrationIdRelinkParameterIntegrationId = string;
export const isPostIntegrationsIntegrationIdRelinkParameterIntegrationId = typia.createIs<PostIntegrationsIntegrationIdRelinkParameterIntegrationId>();
export const assertPostIntegrationsIntegrationIdRelinkParameterIntegrationId = typia.createAssert<PostIntegrationsIntegrationIdRelinkParameterIntegrationId>();
export const validatePostIntegrationsIntegrationIdRelinkParameterIntegrationId = typia.createValidate<PostIntegrationsIntegrationIdRelinkParameterIntegrationId>();

export type PostIntegrationsIntegrationIdRelinkPositiveResponse = { status: string, data: { link: string } };
export const isPostIntegrationsIntegrationIdRelinkPositiveResponse = typia.createIs<PostIntegrationsIntegrationIdRelinkPositiveResponse>();
export const assertPostIntegrationsIntegrationIdRelinkPositiveResponse = typia.createAssert<PostIntegrationsIntegrationIdRelinkPositiveResponse>();
export const validatePostIntegrationsIntegrationIdRelinkPositiveResponse = typia.createValidate<PostIntegrationsIntegrationIdRelinkPositiveResponse>();

export type PostIntegrationsIntegrationIdRelinkRequestBody = Partial<{ language: (("en" | "de" | "fr" | "it" | "es") | null), scope_config_id: (string | null), link_type: ("EMBEDDED" | "MAGIC_LINK") }>;
export const isPostIntegrationsIntegrationIdRelinkRequestBody = typia.createIs<PostIntegrationsIntegrationIdRelinkRequestBody>();
export const assertPostIntegrationsIntegrationIdRelinkRequestBody = typia.createAssert<PostIntegrationsIntegrationIdRelinkRequestBody>();
export const validatePostIntegrationsIntegrationIdRelinkRequestBody = typia.createValidate<PostIntegrationsIntegrationIdRelinkRequestBody>();

export type PostIntegrationsIntegrationIdSetupLinkParameterIntegrationId = string;
export const isPostIntegrationsIntegrationIdSetupLinkParameterIntegrationId = typia.createIs<PostIntegrationsIntegrationIdSetupLinkParameterIntegrationId>();
export const assertPostIntegrationsIntegrationIdSetupLinkParameterIntegrationId = typia.createAssert<PostIntegrationsIntegrationIdSetupLinkParameterIntegrationId>();
export const validatePostIntegrationsIntegrationIdSetupLinkParameterIntegrationId = typia.createValidate<PostIntegrationsIntegrationIdSetupLinkParameterIntegrationId>();

export type PostIntegrationsIntegrationIdSetupLinkPositiveResponse = { status: string, data: { link: string } };
export const isPostIntegrationsIntegrationIdSetupLinkPositiveResponse = typia.createIs<PostIntegrationsIntegrationIdSetupLinkPositiveResponse>();
export const assertPostIntegrationsIntegrationIdSetupLinkPositiveResponse = typia.createAssert<PostIntegrationsIntegrationIdSetupLinkPositiveResponse>();
export const validatePostIntegrationsIntegrationIdSetupLinkPositiveResponse = typia.createValidate<PostIntegrationsIntegrationIdSetupLinkPositiveResponse>();

export type PostIntegrationsIntegrationIdSetupLinkRequestBody = { language?: (("en" | "de" | "fr" | "it" | "es") | null), link_type: ("EMBEDDED" | "MAGIC_LINK") };
export const isPostIntegrationsIntegrationIdSetupLinkRequestBody = typia.createIs<PostIntegrationsIntegrationIdSetupLinkRequestBody>();
export const assertPostIntegrationsIntegrationIdSetupLinkRequestBody = typia.createAssert<PostIntegrationsIntegrationIdSetupLinkRequestBody>();
export const validatePostIntegrationsIntegrationIdSetupLinkRequestBody = typia.createValidate<PostIntegrationsIntegrationIdSetupLinkRequestBody>();

export type GetIntegrationsIntegrationIdIntegrationFieldsParameterIntegrationId = string;
export const isGetIntegrationsIntegrationIdIntegrationFieldsParameterIntegrationId = typia.createIs<GetIntegrationsIntegrationIdIntegrationFieldsParameterIntegrationId>();
export const assertGetIntegrationsIntegrationIdIntegrationFieldsParameterIntegrationId = typia.createAssert<GetIntegrationsIntegrationIdIntegrationFieldsParameterIntegrationId>();
export const validateGetIntegrationsIntegrationIdIntegrationFieldsParameterIntegrationId = typia.createValidate<GetIntegrationsIntegrationIdIntegrationFieldsParameterIntegrationId>();

export type GetIntegrationsIntegrationIdIntegrationFieldsParameterCursor = string;
export const isGetIntegrationsIntegrationIdIntegrationFieldsParameterCursor = typia.createIs<GetIntegrationsIntegrationIdIntegrationFieldsParameterCursor>();
export const assertGetIntegrationsIntegrationIdIntegrationFieldsParameterCursor = typia.createAssert<GetIntegrationsIntegrationIdIntegrationFieldsParameterCursor>();
export const validateGetIntegrationsIntegrationIdIntegrationFieldsParameterCursor = typia.createValidate<GetIntegrationsIntegrationIdIntegrationFieldsParameterCursor>();

export type GetIntegrationsIntegrationIdIntegrationFieldsParameterPageSize = number;
export const isGetIntegrationsIntegrationIdIntegrationFieldsParameterPageSize = typia.createIs<GetIntegrationsIntegrationIdIntegrationFieldsParameterPageSize>();
export const assertGetIntegrationsIntegrationIdIntegrationFieldsParameterPageSize = typia.createAssert<GetIntegrationsIntegrationIdIntegrationFieldsParameterPageSize>();
export const validateGetIntegrationsIntegrationIdIntegrationFieldsParameterPageSize = typia.createValidate<GetIntegrationsIntegrationIdIntegrationFieldsParameterPageSize>();

export type GetIntegrationsIntegrationIdIntegrationFieldsPositiveResponse = { status: string, data: { results: Array<{ id: string, key: string, model: string, type: ("DEFAULT" | "CUSTOM"), label: (string | null), is_passthrough_enabled: boolean, is_writable: boolean }>, next_cursor: (string | null), next: (string | null) } };
export const isGetIntegrationsIntegrationIdIntegrationFieldsPositiveResponse = typia.createIs<GetIntegrationsIntegrationIdIntegrationFieldsPositiveResponse>();
export const assertGetIntegrationsIntegrationIdIntegrationFieldsPositiveResponse = typia.createAssert<GetIntegrationsIntegrationIdIntegrationFieldsPositiveResponse>();
export const validateGetIntegrationsIntegrationIdIntegrationFieldsPositiveResponse = typia.createValidate<GetIntegrationsIntegrationIdIntegrationFieldsPositiveResponse>();

export type PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationId = string;
export const isPatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationId = typia.createIs<PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationId>();
export const assertPatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationId = typia.createAssert<PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationId>();
export const validatePatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationId = typia.createValidate<PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationId>();

export type PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationFieldId = string;
export const isPatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationFieldId = typia.createIs<PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationFieldId>();
export const assertPatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationFieldId = typia.createAssert<PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationFieldId>();
export const validatePatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationFieldId = typia.createValidate<PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationFieldId>();

export type PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdPositiveResponse = { status: string, data: { id: string, key: string, model: string, type: ("DEFAULT" | "CUSTOM"), label: (string | null), is_passthrough_enabled: boolean, is_writable: boolean } };
export const isPatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdPositiveResponse = typia.createIs<PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdPositiveResponse>();
export const assertPatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdPositiveResponse = typia.createAssert<PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdPositiveResponse>();
export const validatePatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdPositiveResponse = typia.createValidate<PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdPositiveResponse>();

export type PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdRequestBody = { enable_passthrough: (boolean | null) };
export const isPatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdRequestBody = typia.createIs<PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdRequestBody>();
export const assertPatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdRequestBody = typia.createAssert<PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdRequestBody>();
export const validatePatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdRequestBody = typia.createValidate<PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdRequestBody>();

export type GetIntegrationsIntegrationIdCustomFieldsParameterIntegrationId = string;
export const isGetIntegrationsIntegrationIdCustomFieldsParameterIntegrationId = typia.createIs<GetIntegrationsIntegrationIdCustomFieldsParameterIntegrationId>();
export const assertGetIntegrationsIntegrationIdCustomFieldsParameterIntegrationId = typia.createAssert<GetIntegrationsIntegrationIdCustomFieldsParameterIntegrationId>();
export const validateGetIntegrationsIntegrationIdCustomFieldsParameterIntegrationId = typia.createValidate<GetIntegrationsIntegrationIdCustomFieldsParameterIntegrationId>();

export type GetIntegrationsIntegrationIdCustomFieldsParameterCursor = string;
export const isGetIntegrationsIntegrationIdCustomFieldsParameterCursor = typia.createIs<GetIntegrationsIntegrationIdCustomFieldsParameterCursor>();
export const assertGetIntegrationsIntegrationIdCustomFieldsParameterCursor = typia.createAssert<GetIntegrationsIntegrationIdCustomFieldsParameterCursor>();
export const validateGetIntegrationsIntegrationIdCustomFieldsParameterCursor = typia.createValidate<GetIntegrationsIntegrationIdCustomFieldsParameterCursor>();

export type GetIntegrationsIntegrationIdCustomFieldsParameterPageSize = number;
export const isGetIntegrationsIntegrationIdCustomFieldsParameterPageSize = typia.createIs<GetIntegrationsIntegrationIdCustomFieldsParameterPageSize>();
export const assertGetIntegrationsIntegrationIdCustomFieldsParameterPageSize = typia.createAssert<GetIntegrationsIntegrationIdCustomFieldsParameterPageSize>();
export const validateGetIntegrationsIntegrationIdCustomFieldsParameterPageSize = typia.createValidate<GetIntegrationsIntegrationIdCustomFieldsParameterPageSize>();

export type GetIntegrationsIntegrationIdCustomFieldsPositiveResponse = { status: string, data: { results: Array<{ id: string, key: string, integration_field: ({ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), label: (string | null) } | null), model: string, label: (string | null), description: (string | null) }>, next_cursor: (string | null), next: (string | null) } };
export const isGetIntegrationsIntegrationIdCustomFieldsPositiveResponse = typia.createIs<GetIntegrationsIntegrationIdCustomFieldsPositiveResponse>();
export const assertGetIntegrationsIntegrationIdCustomFieldsPositiveResponse = typia.createAssert<GetIntegrationsIntegrationIdCustomFieldsPositiveResponse>();
export const validateGetIntegrationsIntegrationIdCustomFieldsPositiveResponse = typia.createValidate<GetIntegrationsIntegrationIdCustomFieldsPositiveResponse>();

export type PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterIntegrationId = string;
export const isPutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterIntegrationId = typia.createIs<PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterIntegrationId>();
export const assertPutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterIntegrationId = typia.createAssert<PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterIntegrationId>();
export const validatePutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterIntegrationId = typia.createValidate<PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterIntegrationId>();

export type PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterCustomFieldId = string;
export const isPutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterCustomFieldId = typia.createIs<PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterCustomFieldId>();
export const assertPutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterCustomFieldId = typia.createAssert<PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterCustomFieldId>();
export const validatePutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterCustomFieldId = typia.createValidate<PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterCustomFieldId>();

export type PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdPositiveResponse = { status: string, data: { id: string, key: string, integration_field: ({ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), label: (string | null) } | null), model: string, label: (string | null), description: (string | null) } };
export const isPutIntegrationsIntegrationIdCustomFieldsCustomFieldIdPositiveResponse = typia.createIs<PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdPositiveResponse>();
export const assertPutIntegrationsIntegrationIdCustomFieldsCustomFieldIdPositiveResponse = typia.createAssert<PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdPositiveResponse>();
export const validatePutIntegrationsIntegrationIdCustomFieldsCustomFieldIdPositiveResponse = typia.createValidate<PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdPositiveResponse>();

export type PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdRequestBody = { integration_field_id: (string | null) };
export const isPutIntegrationsIntegrationIdCustomFieldsCustomFieldIdRequestBody = typia.createIs<PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdRequestBody>();
export const assertPutIntegrationsIntegrationIdCustomFieldsCustomFieldIdRequestBody = typia.createAssert<PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdRequestBody>();
export const validatePutIntegrationsIntegrationIdCustomFieldsCustomFieldIdRequestBody = typia.createValidate<PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdRequestBody>();

export type GetToolsCategoryParameterCategory = ("hris" | "ats" | "assessment" | "lms");
export const isGetToolsCategoryParameterCategory = typia.createIs<GetToolsCategoryParameterCategory>();
export const assertGetToolsCategoryParameterCategory = typia.createAssert<GetToolsCategoryParameterCategory>();
export const validateGetToolsCategoryParameterCategory = typia.createValidate<GetToolsCategoryParameterCategory>();

export type GetToolsCategoryPositiveResponse = { status: string, data: { tools: Array<{ id: string, label: string, internal_label: (string | null), assets: { logo_url: string, icon_url: string, icon_black_url: string }, paid_api_details_markdown: (string | null), fast_track_details_markdown: (string | null), partner_only_details_markdown: (string | null), connection_guide_url: (string | null), coverage: { read_models: Array<{ id: string, label: string, coverage_status: ("SUPPORTED" | "UNSUPPORTED" | "NOT_IMPLEMENTED" | "UNKNOWN"), fields: Array<{ id: string, coverage_status: ("SUPPORTED" | "UNSUPPORTED" | "NOT_IMPLEMENTED" | "UNKNOWN") }> }>, write_actions: Array<{ id: string, label: string, coverage_status: ("SUPPORTED" | "UNSUPPORTED" | "NOT_IMPLEMENTED" | "UNKNOWN"), fields: Array<{ id: string, coverage_status: ("SUPPORTED" | "UNSUPPORTED" | "NOT_IMPLEMENTED" | "UNKNOWN") }> }>, features: Array<{ id: string, label: string, coverage_status: ("SUPPORTED" | "UNSUPPORTED" | "NOT_IMPLEMENTED" | "UNKNOWN") }> } }> } };
export const isGetToolsCategoryPositiveResponse = typia.createIs<GetToolsCategoryPositiveResponse>();
export const assertGetToolsCategoryPositiveResponse = typia.createAssert<GetToolsCategoryPositiveResponse>();
export const validateGetToolsCategoryPositiveResponse = typia.createValidate<GetToolsCategoryPositiveResponse>();

export type PostHrisProvisioningGroupsGroupIdDiffParameterGroupId = string;
export const isPostHrisProvisioningGroupsGroupIdDiffParameterGroupId = typia.createIs<PostHrisProvisioningGroupsGroupIdDiffParameterGroupId>();
export const assertPostHrisProvisioningGroupsGroupIdDiffParameterGroupId = typia.createAssert<PostHrisProvisioningGroupsGroupIdDiffParameterGroupId>();
export const validatePostHrisProvisioningGroupsGroupIdDiffParameterGroupId = typia.createValidate<PostHrisProvisioningGroupsGroupIdDiffParameterGroupId>();

export type PostHrisProvisioningGroupsGroupIdDiffPositiveResponse = { status: string, data: { users: { to_provision: Array<{ email: (string | null), employee: Partial<{ id: string, remote_id: (string | null), first_name: (string | null), last_name: (string | null), groups: Array<{ id: string, remote_id: (string | null), name: (string | null) }>, avatar: (string | null), work_location_id: (string | null), legal_entity_id: (string | null) }> }>, to_deprovision: Array<{ origin_id: string, email: string }>, already_provisioned: Array<{ origin_id: string, email: string, employee: Partial<{ id: string, remote_id: (string | null), first_name: (string | null), last_name: (string | null), groups: Array<{ id: string, remote_id: (string | null), name: (string | null) }>, avatar: (string | null), work_location_id: (string | null), legal_entity_id: (string | null) }> }> } } };
export const isPostHrisProvisioningGroupsGroupIdDiffPositiveResponse = typia.createIs<PostHrisProvisioningGroupsGroupIdDiffPositiveResponse>();
export const assertPostHrisProvisioningGroupsGroupIdDiffPositiveResponse = typia.createAssert<PostHrisProvisioningGroupsGroupIdDiffPositiveResponse>();
export const validatePostHrisProvisioningGroupsGroupIdDiffPositiveResponse = typia.createValidate<PostHrisProvisioningGroupsGroupIdDiffPositiveResponse>();

export type PostHrisProvisioningGroupsGroupIdDiffRequestBody = { provisioned_users: Array<{ origin_id: string, email: string }>, options: { employee_fields: Array<("id" | "remote_id" | "first_name" | "last_name" | "groups" | "avatar" | "work_location_id" | "legal_entity_id")> } };
export const isPostHrisProvisioningGroupsGroupIdDiffRequestBody = typia.createIs<PostHrisProvisioningGroupsGroupIdDiffRequestBody>();
export const assertPostHrisProvisioningGroupsGroupIdDiffRequestBody = typia.createAssert<PostHrisProvisioningGroupsGroupIdDiffRequestBody>();
export const validatePostHrisProvisioningGroupsGroupIdDiffRequestBody = typia.createValidate<PostHrisProvisioningGroupsGroupIdDiffRequestBody>();

export type PostHrisProvisioningGroupsGroupIdSetupLinksParameterGroupId = string;
export const isPostHrisProvisioningGroupsGroupIdSetupLinksParameterGroupId = typia.createIs<PostHrisProvisioningGroupsGroupIdSetupLinksParameterGroupId>();
export const assertPostHrisProvisioningGroupsGroupIdSetupLinksParameterGroupId = typia.createAssert<PostHrisProvisioningGroupsGroupIdSetupLinksParameterGroupId>();
export const validatePostHrisProvisioningGroupsGroupIdSetupLinksParameterGroupId = typia.createValidate<PostHrisProvisioningGroupsGroupIdSetupLinksParameterGroupId>();

export type PostHrisProvisioningGroupsGroupIdSetupLinksPositiveResponse = { status: string, data: { url: string, expires_at: string } };
export const isPostHrisProvisioningGroupsGroupIdSetupLinksPositiveResponse = typia.createIs<PostHrisProvisioningGroupsGroupIdSetupLinksPositiveResponse>();
export const assertPostHrisProvisioningGroupsGroupIdSetupLinksPositiveResponse = typia.createAssert<PostHrisProvisioningGroupsGroupIdSetupLinksPositiveResponse>();
export const validatePostHrisProvisioningGroupsGroupIdSetupLinksPositiveResponse = typia.createValidate<PostHrisProvisioningGroupsGroupIdSetupLinksPositiveResponse>();

export type PostHrisProvisioningGroupsGroupIdSetupLinksRequestBody = Partial<{ language: (("en" | "de" | "fr" | "it" | "es") | null) }>;
export const isPostHrisProvisioningGroupsGroupIdSetupLinksRequestBody = typia.createIs<PostHrisProvisioningGroupsGroupIdSetupLinksRequestBody>();
export const assertPostHrisProvisioningGroupsGroupIdSetupLinksRequestBody = typia.createAssert<PostHrisProvisioningGroupsGroupIdSetupLinksRequestBody>();
export const validatePostHrisProvisioningGroupsGroupIdSetupLinksRequestBody = typia.createValidate<PostHrisProvisioningGroupsGroupIdSetupLinksRequestBody>();

export type GetHrisEmployeesParameterCursor = string;
export const isGetHrisEmployeesParameterCursor = typia.createIs<GetHrisEmployeesParameterCursor>();
export const assertGetHrisEmployeesParameterCursor = typia.createAssert<GetHrisEmployeesParameterCursor>();
export const validateGetHrisEmployeesParameterCursor = typia.createValidate<GetHrisEmployeesParameterCursor>();

export type GetHrisEmployeesParameterPageSize = number;
export const isGetHrisEmployeesParameterPageSize = typia.createIs<GetHrisEmployeesParameterPageSize>();
export const assertGetHrisEmployeesParameterPageSize = typia.createAssert<GetHrisEmployeesParameterPageSize>();
export const validateGetHrisEmployeesParameterPageSize = typia.createValidate<GetHrisEmployeesParameterPageSize>();

export type GetHrisEmployeesParameterUpdatedAfter = string;
export const isGetHrisEmployeesParameterUpdatedAfter = typia.createIs<GetHrisEmployeesParameterUpdatedAfter>();
export const assertGetHrisEmployeesParameterUpdatedAfter = typia.createAssert<GetHrisEmployeesParameterUpdatedAfter>();
export const validateGetHrisEmployeesParameterUpdatedAfter = typia.createValidate<GetHrisEmployeesParameterUpdatedAfter>();

export type GetHrisEmployeesParameterIncludeDeleted = ("true" | "false");
export const isGetHrisEmployeesParameterIncludeDeleted = typia.createIs<GetHrisEmployeesParameterIncludeDeleted>();
export const assertGetHrisEmployeesParameterIncludeDeleted = typia.createAssert<GetHrisEmployeesParameterIncludeDeleted>();
export const validateGetHrisEmployeesParameterIncludeDeleted = typia.createValidate<GetHrisEmployeesParameterIncludeDeleted>();

export type GetHrisEmployeesParameterIgnoreUnsupportedFilters = ("true" | "false");
export const isGetHrisEmployeesParameterIgnoreUnsupportedFilters = typia.createIs<GetHrisEmployeesParameterIgnoreUnsupportedFilters>();
export const assertGetHrisEmployeesParameterIgnoreUnsupportedFilters = typia.createAssert<GetHrisEmployeesParameterIgnoreUnsupportedFilters>();
export const validateGetHrisEmployeesParameterIgnoreUnsupportedFilters = typia.createValidate<GetHrisEmployeesParameterIgnoreUnsupportedFilters>();

export type GetHrisEmployeesParameterIds = string;
export const isGetHrisEmployeesParameterIds = typia.createIs<GetHrisEmployeesParameterIds>();
export const assertGetHrisEmployeesParameterIds = typia.createAssert<GetHrisEmployeesParameterIds>();
export const validateGetHrisEmployeesParameterIds = typia.createValidate<GetHrisEmployeesParameterIds>();

export type GetHrisEmployeesParameterRemoteIds = string;
export const isGetHrisEmployeesParameterRemoteIds = typia.createIs<GetHrisEmployeesParameterRemoteIds>();
export const assertGetHrisEmployeesParameterRemoteIds = typia.createAssert<GetHrisEmployeesParameterRemoteIds>();
export const validateGetHrisEmployeesParameterRemoteIds = typia.createValidate<GetHrisEmployeesParameterRemoteIds>();

export type GetHrisEmployeesParameterEmploymentStatus = ("ACTIVE" | "PENDING" | "INACTIVE" | "LEAVE");
export const isGetHrisEmployeesParameterEmploymentStatus = typia.createIs<GetHrisEmployeesParameterEmploymentStatus>();
export const assertGetHrisEmployeesParameterEmploymentStatus = typia.createAssert<GetHrisEmployeesParameterEmploymentStatus>();
export const validateGetHrisEmployeesParameterEmploymentStatus = typia.createValidate<GetHrisEmployeesParameterEmploymentStatus>();

export type GetHrisEmployeesParameterEmploymentStatuses = string;
export const isGetHrisEmployeesParameterEmploymentStatuses = typia.createIs<GetHrisEmployeesParameterEmploymentStatuses>();
export const assertGetHrisEmployeesParameterEmploymentStatuses = typia.createAssert<GetHrisEmployeesParameterEmploymentStatuses>();
export const validateGetHrisEmployeesParameterEmploymentStatuses = typia.createValidate<GetHrisEmployeesParameterEmploymentStatuses>();

export type GetHrisEmployeesParameterGroupIds = string;
export const isGetHrisEmployeesParameterGroupIds = typia.createIs<GetHrisEmployeesParameterGroupIds>();
export const assertGetHrisEmployeesParameterGroupIds = typia.createAssert<GetHrisEmployeesParameterGroupIds>();
export const validateGetHrisEmployeesParameterGroupIds = typia.createValidate<GetHrisEmployeesParameterGroupIds>();

export type GetHrisEmployeesParameterLegalEntityIds = string;
export const isGetHrisEmployeesParameterLegalEntityIds = typia.createIs<GetHrisEmployeesParameterLegalEntityIds>();
export const assertGetHrisEmployeesParameterLegalEntityIds = typia.createAssert<GetHrisEmployeesParameterLegalEntityIds>();
export const validateGetHrisEmployeesParameterLegalEntityIds = typia.createValidate<GetHrisEmployeesParameterLegalEntityIds>();

export type GetHrisEmployeesParameterWorkLocationIds = string;
export const isGetHrisEmployeesParameterWorkLocationIds = typia.createIs<GetHrisEmployeesParameterWorkLocationIds>();
export const assertGetHrisEmployeesParameterWorkLocationIds = typia.createAssert<GetHrisEmployeesParameterWorkLocationIds>();
export const validateGetHrisEmployeesParameterWorkLocationIds = typia.createValidate<GetHrisEmployeesParameterWorkLocationIds>();

export type GetHrisEmployeesParameterWorkEmails = string;
export const isGetHrisEmployeesParameterWorkEmails = typia.createIs<GetHrisEmployeesParameterWorkEmails>();
export const assertGetHrisEmployeesParameterWorkEmails = typia.createAssert<GetHrisEmployeesParameterWorkEmails>();
export const validateGetHrisEmployeesParameterWorkEmails = typia.createValidate<GetHrisEmployeesParameterWorkEmails>();

export type GetHrisEmployeesParameterPersonalEmails = string;
export const isGetHrisEmployeesParameterPersonalEmails = typia.createIs<GetHrisEmployeesParameterPersonalEmails>();
export const assertGetHrisEmployeesParameterPersonalEmails = typia.createAssert<GetHrisEmployeesParameterPersonalEmails>();
export const validateGetHrisEmployeesParameterPersonalEmails = typia.createValidate<GetHrisEmployeesParameterPersonalEmails>();

export type GetHrisEmployeesParameterCustomFields = string;
export const isGetHrisEmployeesParameterCustomFields = typia.createIs<GetHrisEmployeesParameterCustomFields>();
export const assertGetHrisEmployeesParameterCustomFields = typia.createAssert<GetHrisEmployeesParameterCustomFields>();
export const validateGetHrisEmployeesParameterCustomFields = typia.createValidate<GetHrisEmployeesParameterCustomFields>();

export type GetHrisEmployeesPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, remote_id: string, employee_number: (string | null), first_name: (string | null), last_name: (string | null), nationality: (string | null), display_full_name: (string | null), job_title: (string | null), work_email?: (string | null), personal_email?: (string | null), mobile_phone_number: (string | null), ssn: (string | null), tax_id: (string | null), gender?: (("MALE" | "FEMALE" | "NON_BINARY" | "NOT_SPECIFIED") | string | null), ethnicity?: (("WHITE" | "ASIAN" | "HISPANIC_LATINO" | "HAWAIIAN" | "NATIVE_AMERICAN" | "BLACK_AFRICAN_AMERICAN" | "MULTIPLE_ETHNICITIES" | "DECLINE_TO_SPECIFY") | string | null), marital_status?: (("SINGLE" | "MARRIED" | "DOMESTIC_PARTNERSHIP" | "WIDOWED" | "DIVORCED" | "SEPARATED" | "NOT_MARRIED") | string | null), employment_status?: (("ACTIVE" | "PENDING" | "INACTIVE" | "LEAVE") | string | null), employment_type?: (("FULL_TIME" | "PART_TIME" | "CONTRACT" | "INTERNSHIP" | "FREELANCE" | "WORKING_STUDENT" | "APPRENTICESHIP" | "TRAINING") | string | null), weekly_hours: (number | null), avatar: (string | null), work_location_id: (string | null), legal_entity_id: (string | null), manager_id: (string | null), home_address?: (Partial<{ city: (string | null), country: (string | null), raw: (string | null), state: (string | null), street_1: (string | null), street_2: (string | null), zip_code: (string | null) }> | null), bank_accounts?: (Array<Partial<{ iban: (string | null), bic: (string | null), account_number: (string | null), holder_name: (string | null), bank_name: (string | null), domestic_bank_routing: ({ number: string, type: (("GB_SORT_CODE" | "DE_BANKLEITZAHL" | "US_ABA_ROUTING_TRANSIT_NUMBER" | "CA_ROUTING_NUMBER" | "AU_BSB_CODE" | "FR_RIB") | null) } | null) }>> | null), date_of_birth: (string | null), start_date: (string | null), termination_date: (string | null), remote_created_at: (string | null), changed_at: string, remote_deleted_at: (string | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }>, remote_data: (Record<string, unknown> | null), employments: Array<{ id: string, remote_id: (string | null), employee_id: string, job_title: (string | null), pay_rate: (number | null), pay_period?: (("HOUR" | "DAY" | "WEEK" | "TWO_WEEKS" | "HALF_MONTH" | "MONTH" | "TWO_MONTHS" | "QUARTER" | "HALF_YEAR" | "YEAR") | string | null), pay_frequency?: (("DAILY" | "WEEKLY" | "BIWEEKLY" | "MONTHLY" | "SEMIMONTHLY" | "QUARTERLY" | "SEMIANNUALLY" | "ANNUALLY" | "PRO_RATA") | string | null), employment_type?: (("FULL_TIME" | "PART_TIME" | "CONTRACT" | "INTERNSHIP" | "FREELANCE" | "WORKING_STUDENT" | "APPRENTICESHIP" | "TRAINING") | string | null), pay_currency: (string | null), effective_date: (string | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }> }>, time_off_balances: Array<{ id: string, remote_id: (string | null), employee_id: string, type_id: string, balance: (number | null), balance_unit: (("HOURS" | "DAYS") | null), changed_at: string, remote_deleted_at: (string | null), used: (number | null), used_unit: (("HOURS" | "DAYS") | null), remote_data: (Record<string, unknown> | null) }>, manager: ({ first_name: (string | null), last_name: (string | null), display_full_name: (string | null), id: string, employee_number: (string | null), work_email?: (string | null), remote_id: string, employment_status?: (("ACTIVE" | "PENDING" | "INACTIVE" | "LEAVE") | string | null), termination_date: (string | null) } | null), groups: Array<{ id: string, remote_id: string, name: (string | null), type: (("DEPARTMENT" | "TEAM" | "COST_CENTER") | null) }>, legal_entity: ({ id: string, remote_id: (string | null), name: (string | null), address?: (Partial<{ city: (string | null), country: (string | null), raw: (string | null), state: (string | null), street_1: (string | null), street_2: (string | null), zip_code: (string | null) }> | null) } | null), teams: Array<{ id: string, remote_id: string, name: (string | null), type: (("DEPARTMENT" | "TEAM" | "COST_CENTER") | null) }>, work_location: ({ id: string, remote_id: (string | null), name: (string | null), address?: (Partial<{ city: (string | null), country: (string | null), raw: (string | null), state: (string | null), street_1: (string | null), street_2: (string | null), zip_code: (string | null) }> | null), type: (string | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null) } | null) }> } };
export const isGetHrisEmployeesPositiveResponse = typia.createIs<GetHrisEmployeesPositiveResponse>();
export const assertGetHrisEmployeesPositiveResponse = typia.createAssert<GetHrisEmployeesPositiveResponse>();
export const validateGetHrisEmployeesPositiveResponse = typia.createValidate<GetHrisEmployeesPositiveResponse>();

export type PostHrisEmployeesPositiveResponse = { status: string, data: { id: string, remote_id: string, employee_number: (string | null), first_name: (string | null), last_name: (string | null), nationality: (string | null), display_full_name: (string | null), job_title: (string | null), work_email?: (string | null), personal_email?: (string | null), mobile_phone_number: (string | null), ssn: (string | null), tax_id: (string | null), gender?: (("MALE" | "FEMALE" | "NON_BINARY" | "NOT_SPECIFIED") | string | null), ethnicity?: (("WHITE" | "ASIAN" | "HISPANIC_LATINO" | "HAWAIIAN" | "NATIVE_AMERICAN" | "BLACK_AFRICAN_AMERICAN" | "MULTIPLE_ETHNICITIES" | "DECLINE_TO_SPECIFY") | string | null), marital_status?: (("SINGLE" | "MARRIED" | "DOMESTIC_PARTNERSHIP" | "WIDOWED" | "DIVORCED" | "SEPARATED" | "NOT_MARRIED") | string | null), employment_status?: (("ACTIVE" | "PENDING" | "INACTIVE" | "LEAVE") | string | null), employment_type?: (("FULL_TIME" | "PART_TIME" | "CONTRACT" | "INTERNSHIP" | "FREELANCE" | "WORKING_STUDENT" | "APPRENTICESHIP" | "TRAINING") | string | null), weekly_hours: (number | null), avatar: (string | null), work_location_id: (string | null), legal_entity_id: (string | null), manager_id: (string | null), home_address?: (Partial<{ city: (string | null), country: (string | null), raw: (string | null), state: (string | null), street_1: (string | null), street_2: (string | null), zip_code: (string | null) }> | null), bank_accounts?: (Array<Partial<{ iban: (string | null), bic: (string | null), account_number: (string | null), holder_name: (string | null), bank_name: (string | null), domestic_bank_routing: ({ number: string, type: (("GB_SORT_CODE" | "DE_BANKLEITZAHL" | "US_ABA_ROUTING_TRANSIT_NUMBER" | "CA_ROUTING_NUMBER" | "AU_BSB_CODE" | "FR_RIB") | null) } | null) }>> | null), date_of_birth: (string | null), start_date: (string | null), termination_date: (string | null), remote_created_at: (string | null), changed_at: string, remote_deleted_at: (string | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }>, remote_data: (Record<string, unknown> | null) }, warnings: Array<{ message: string }> };
export const isPostHrisEmployeesPositiveResponse = typia.createIs<PostHrisEmployeesPositiveResponse>();
export const assertPostHrisEmployeesPositiveResponse = typia.createAssert<PostHrisEmployeesPositiveResponse>();
export const validatePostHrisEmployeesPositiveResponse = typia.createValidate<PostHrisEmployeesPositiveResponse>();

export type PostHrisEmployeesRequestBody = { first_name: string, last_name: string, work_email?: string, gender?: ("MALE" | "FEMALE" | "NON_BINARY" | "NOT_SPECIFIED"), job_title?: string, home_address?: Partial<{ street_1: string, street_2: string, city: string, state: string, zip_code: string, country: string }>, date_of_birth?: string, mobile_phone_number?: string, home_phone_number?: string, nationality?: string, start_date?: string, legal_entity_id?: string, location_id?: string, remote_fields?: Partial<{ humaans: Partial<{ employee: Record<string, unknown> }>, hibob: Partial<{ employee: Record<string, unknown> }>, sympa: Partial<{ GenericNewHire: Record<string, unknown> }>, silae: Partial<{ siret: string, employee: Record<string, unknown>, employment: Record<string, unknown> }>, peoplehr: Partial<{ job_role_effective_date: string, department: string }>, zohopeople: Partial<{ employee_id: string }>, workday: Partial<{ job_requisition_id: string, position_id: string, ssn: string, bank_account: { iban: string, bic: string, bank_name: string } }>, deel: { candidate_id: string, candidate_link: string }, bamboohr: Partial<{ employee: Record<string, unknown> }>, oracle: { group_id: string, department_id: string }, adpworkforcenow: { onboarding_template_code: string, applicant_payroll_profile_group_code: string, manager_position_id?: string, home_organization_unit_code?: string, personal_email?: string }, azuread: { password: string }, paycor: { paygroupRemoteId: string, departmentRemoteId: string }, planday: { department_remote_id: string }, dayforce: { social_security_number: string, pay_type: string, pay_class: string, pay_group: string, base_rate: number, role: string, location: string, department: string, job: string, country: string } }> };
export const isPostHrisEmployeesRequestBody = typia.createIs<PostHrisEmployeesRequestBody>();
export const assertPostHrisEmployeesRequestBody = typia.createAssert<PostHrisEmployeesRequestBody>();
export const validatePostHrisEmployeesRequestBody = typia.createValidate<PostHrisEmployeesRequestBody>();

export type Schema1 = Record<string, ({ label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: string, min_length?: (number | null), max_length?: (number | null), reg_exp?: (string | null) } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: string, min?: (number | null), max?: (number | null) } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: string } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: string, options: ({ type: string, entries: Array<{ id: string, label: string, unified_value?: string, remote_id: (string | number) }> } | { type: string, link: string }) } | { label: string, required: boolean, description?: (string | null), unified_key?: (string | null), type: string, min_items?: (number | null), max_items?: (number | null), options: ({ type: string, entries: Array<{ id: string, label: string, unified_value?: string, remote_id: (string | number) }> } | { type: string, link: string }) } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: string } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: string, properties: Schema1 } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: string, item_type: Schema2, min_items?: (number | null), max_items?: (number | null) } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: string, file_restrictions: { accepted_mime_types: Array<string>, max_file_size?: (number | null) } })>;
export const isSchema1 = typia.createIs<Schema1>();
export const assertSchema1 = typia.createAssert<Schema1>();
export const validateSchema1 = typia.createValidate<Schema1>();

export type Schema2 = ({ label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: string, min_length?: (number | null), max_length?: (number | null), reg_exp?: (string | null) } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: string, min?: (number | null), max?: (number | null) } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: string } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: string, options: ({ type: string, entries: Array<{ id: string, label: string, unified_value?: string, remote_id: (string | number) }> } | { type: string, link: string }) } | { label: string, required: boolean, description?: (string | null), unified_key?: (string | null), type: string, min_items?: (number | null), max_items?: (number | null), options: ({ type: string, entries: Array<{ id: string, label: string, unified_value?: string, remote_id: (string | number) }> } | { type: string, link: string }) } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: string } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: string, properties: Schema1 } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: string, item_type: Schema2, min_items?: (number | null), max_items?: (number | null) } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: string, file_restrictions: { accepted_mime_types: Array<string>, max_file_size?: (number | null) } });
export const isSchema2 = typia.createIs<Schema2>();
export const assertSchema2 = typia.createAssert<Schema2>();
export const validateSchema2 = typia.createValidate<Schema2>();

export type GetHrisEmployeesFormPositiveResponse = { status: string, data: { properties: Record<string, ({ label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: string, min_length?: (number | null), max_length?: (number | null), reg_exp?: (string | null) } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: string, min?: (number | null), max?: (number | null) } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: string } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: string, options: ({ type: string, entries: Array<{ id: string, label: string, unified_value?: string, remote_id: (string | number) }> } | { type: string, link: string }) } | { label: string, required: boolean, description?: (string | null), unified_key?: (string | null), type: string, min_items?: (number | null), max_items?: (number | null), options: ({ type: string, entries: Array<{ id: string, label: string, unified_value?: string, remote_id: (string | number) }> } | { type: string, link: string }) } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: string } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: string, properties: Schema1 } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: string, item_type: Schema2, min_items?: (number | null), max_items?: (number | null) } | { label: string, required: boolean, description?: (string | null), unified_key?: (("first_name" | "last_name" | "date_of_birth" | "gender" | "home_address.city" | "home_address.country" | "home_address.state" | "home_address.street_1" | "home_address.street_2" | "home_address.zip_code" | "job_title" | "legal_entity_id" | "location_id" | "mobile_phone_number" | "home_phone_number" | "nationality" | "start_date" | "work_email" | "private_email" | "yearly_salary") | null), type: string, file_restrictions: { accepted_mime_types: Array<string>, max_file_size?: (number | null) } })> }, warnings: Array<{ message: string }> };
export const isGetHrisEmployeesFormPositiveResponse = typia.createIs<GetHrisEmployeesFormPositiveResponse>();
export const assertGetHrisEmployeesFormPositiveResponse = typia.createAssert<GetHrisEmployeesFormPositiveResponse>();
export const validateGetHrisEmployeesFormPositiveResponse = typia.createValidate<GetHrisEmployeesFormPositiveResponse>();

export type PostHrisEmployeesFormPositiveResponse = { status: string, data: { id: (string | null), remote_id: (string | null), prehire: { remote_id: (string | null) } }, warnings: Array<{ message: string }> };
export const isPostHrisEmployeesFormPositiveResponse = typia.createIs<PostHrisEmployeesFormPositiveResponse>();
export const assertPostHrisEmployeesFormPositiveResponse = typia.createAssert<PostHrisEmployeesFormPositiveResponse>();
export const validatePostHrisEmployeesFormPositiveResponse = typia.createValidate<PostHrisEmployeesFormPositiveResponse>();

export type Schema6 = Array<Schema4>;
export const isSchema6 = typia.createIs<Schema6>();
export const assertSchema6 = typia.createAssert<Schema6>();
export const validateSchema6 = typia.createValidate<Schema6>();

export type Schema4 = (string | number | boolean | Schema5 | Schema6);
export const isSchema4 = typia.createIs<Schema4>();
export const assertSchema4 = typia.createAssert<Schema4>();
export const validateSchema4 = typia.createValidate<Schema4>();

export type Schema5 = Record<string, Schema4>;
export const isSchema5 = typia.createIs<Schema5>();
export const assertSchema5 = typia.createAssert<Schema5>();
export const validateSchema5 = typia.createValidate<Schema5>();

export type Schema3 = Record<string, Schema4>;
export const isSchema3 = typia.createIs<Schema3>();
export const assertSchema3 = typia.createAssert<Schema3>();
export const validateSchema3 = typia.createValidate<Schema3>();

export type PostHrisEmployeesFormRequestBody = { properties: Schema3 };
export const isPostHrisEmployeesFormRequestBody = typia.createIs<PostHrisEmployeesFormRequestBody>();
export const assertPostHrisEmployeesFormRequestBody = typia.createAssert<PostHrisEmployeesFormRequestBody>();
export const validatePostHrisEmployeesFormRequestBody = typia.createValidate<PostHrisEmployeesFormRequestBody>();

export type PatchHrisEmployeesEmployeeIdParameterEmployeeId = string;
export const isPatchHrisEmployeesEmployeeIdParameterEmployeeId = typia.createIs<PatchHrisEmployeesEmployeeIdParameterEmployeeId>();
export const assertPatchHrisEmployeesEmployeeIdParameterEmployeeId = typia.createAssert<PatchHrisEmployeesEmployeeIdParameterEmployeeId>();
export const validatePatchHrisEmployeesEmployeeIdParameterEmployeeId = typia.createValidate<PatchHrisEmployeesEmployeeIdParameterEmployeeId>();

export type PatchHrisEmployeesEmployeeIdPositiveResponse = { status: string, data: { id: string, remote_id: string, employee_number: (string | null), first_name: (string | null), last_name: (string | null), nationality: (string | null), display_full_name: (string | null), job_title: (string | null), work_email?: (string | null), personal_email?: (string | null), mobile_phone_number: (string | null), ssn: (string | null), tax_id: (string | null), gender?: (("MALE" | "FEMALE" | "NON_BINARY" | "NOT_SPECIFIED") | string | null), ethnicity?: (("WHITE" | "ASIAN" | "HISPANIC_LATINO" | "HAWAIIAN" | "NATIVE_AMERICAN" | "BLACK_AFRICAN_AMERICAN" | "MULTIPLE_ETHNICITIES" | "DECLINE_TO_SPECIFY") | string | null), marital_status?: (("SINGLE" | "MARRIED" | "DOMESTIC_PARTNERSHIP" | "WIDOWED" | "DIVORCED" | "SEPARATED" | "NOT_MARRIED") | string | null), employment_status?: (("ACTIVE" | "PENDING" | "INACTIVE" | "LEAVE") | string | null), employment_type?: (("FULL_TIME" | "PART_TIME" | "CONTRACT" | "INTERNSHIP" | "FREELANCE" | "WORKING_STUDENT" | "APPRENTICESHIP" | "TRAINING") | string | null), weekly_hours: (number | null), avatar: (string | null), work_location_id: (string | null), legal_entity_id: (string | null), manager_id: (string | null), home_address?: (Partial<{ city: (string | null), country: (string | null), raw: (string | null), state: (string | null), street_1: (string | null), street_2: (string | null), zip_code: (string | null) }> | null), bank_accounts?: (Array<Partial<{ iban: (string | null), bic: (string | null), account_number: (string | null), holder_name: (string | null), bank_name: (string | null), domestic_bank_routing: ({ number: string, type: (("GB_SORT_CODE" | "DE_BANKLEITZAHL" | "US_ABA_ROUTING_TRANSIT_NUMBER" | "CA_ROUTING_NUMBER" | "AU_BSB_CODE" | "FR_RIB") | null) } | null) }>> | null), date_of_birth: (string | null), start_date: (string | null), termination_date: (string | null), remote_created_at: (string | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null) }, warnings: Array<{ message: string }> };
export const isPatchHrisEmployeesEmployeeIdPositiveResponse = typia.createIs<PatchHrisEmployeesEmployeeIdPositiveResponse>();
export const assertPatchHrisEmployeesEmployeeIdPositiveResponse = typia.createAssert<PatchHrisEmployeesEmployeeIdPositiveResponse>();
export const validatePatchHrisEmployeesEmployeeIdPositiveResponse = typia.createValidate<PatchHrisEmployeesEmployeeIdPositiveResponse>();

export type PatchHrisEmployeesEmployeeIdRequestBody = { first_name?: string, last_name?: string, work_email: string, gender?: ("MALE" | "FEMALE" | "NON_BINARY" | "NOT_SPECIFIED"), job_title?: string, home_address?: Partial<{ street_1: string, street_2: string, city: string, state: string, zip_code: string, country: string }>, date_of_birth?: string, mobile_phone_number?: string, home_phone_number?: string, nationality?: string, start_date?: string, legal_entity_id?: string, location_id?: string, remote_fields?: Partial<{ humaans: Partial<{ employee: Record<string, unknown> }>, hibob: Partial<{ employee: Record<string, unknown> }>, sympa: Partial<{ GenericNewHire: Record<string, unknown> }>, silae: Partial<{ siret: string, employee: Record<string, unknown>, employment: Record<string, unknown> }>, peoplehr: Partial<{ job_role_effective_date: string, department: string }>, zohopeople: Partial<{ employee_id: string }>, workday: Partial<{ job_requisition_id: string, position_id: string, ssn: string, bank_account: { iban: string, bic: string, bank_name: string } }>, deel: { candidate_id: string, candidate_link: string }, bamboohr: Partial<{ employee: Record<string, unknown> }>, oracle: { group_id: string, department_id: string }, adpworkforcenow: { onboarding_template_code: string, applicant_payroll_profile_group_code: string, manager_position_id?: string, home_organization_unit_code?: string, personal_email?: string }, azuread: { password: string }, paycor: { paygroupRemoteId: string, departmentRemoteId: string }, planday: { department_remote_id: string }, dayforce: { social_security_number: string, pay_type: string, pay_class: string, pay_group: string, base_rate: number, role: string, location: string, department: string, job: string, country: string } }>, ssn?: string, marital_status?: ("SINGLE" | "MARRIED" | "DOMESTIC_PARTNERSHIP" | "WIDOWED" | "DIVORCED" | "SEPARATED" | "NOT_MARRIED"), termination_date?: string, tax_id?: string };
export const isPatchHrisEmployeesEmployeeIdRequestBody = typia.createIs<PatchHrisEmployeesEmployeeIdRequestBody>();
export const assertPatchHrisEmployeesEmployeeIdRequestBody = typia.createAssert<PatchHrisEmployeesEmployeeIdRequestBody>();
export const validatePatchHrisEmployeesEmployeeIdRequestBody = typia.createValidate<PatchHrisEmployeesEmployeeIdRequestBody>();

export type PostHrisEmployeesEmployeeIdDocumentsParameterEmployeeId = string;
export const isPostHrisEmployeesEmployeeIdDocumentsParameterEmployeeId = typia.createIs<PostHrisEmployeesEmployeeIdDocumentsParameterEmployeeId>();
export const assertPostHrisEmployeesEmployeeIdDocumentsParameterEmployeeId = typia.createAssert<PostHrisEmployeesEmployeeIdDocumentsParameterEmployeeId>();
export const validatePostHrisEmployeesEmployeeIdDocumentsParameterEmployeeId = typia.createValidate<PostHrisEmployeesEmployeeIdDocumentsParameterEmployeeId>();

export type PostHrisEmployeesEmployeeIdDocumentsPositiveResponse = { status: string, data: Record<string, unknown>, warnings: Array<{ message: string }> };
export const isPostHrisEmployeesEmployeeIdDocumentsPositiveResponse = typia.createIs<PostHrisEmployeesEmployeeIdDocumentsPositiveResponse>();
export const assertPostHrisEmployeesEmployeeIdDocumentsPositiveResponse = typia.createAssert<PostHrisEmployeesEmployeeIdDocumentsPositiveResponse>();
export const validatePostHrisEmployeesEmployeeIdDocumentsPositiveResponse = typia.createValidate<PostHrisEmployeesEmployeeIdDocumentsPositiveResponse>();

export type PostHrisEmployeesEmployeeIdDocumentsRequestBody = { category_id: string, document: { name: string, content_type?: string, data_url?: string, data?: string } };
export const isPostHrisEmployeesEmployeeIdDocumentsRequestBody = typia.createIs<PostHrisEmployeesEmployeeIdDocumentsRequestBody>();
export const assertPostHrisEmployeesEmployeeIdDocumentsRequestBody = typia.createAssert<PostHrisEmployeesEmployeeIdDocumentsRequestBody>();
export const validatePostHrisEmployeesEmployeeIdDocumentsRequestBody = typia.createValidate<PostHrisEmployeesEmployeeIdDocumentsRequestBody>();

export type GetHrisEmployeeDocumentCategoriesParameterCursor = string;
export const isGetHrisEmployeeDocumentCategoriesParameterCursor = typia.createIs<GetHrisEmployeeDocumentCategoriesParameterCursor>();
export const assertGetHrisEmployeeDocumentCategoriesParameterCursor = typia.createAssert<GetHrisEmployeeDocumentCategoriesParameterCursor>();
export const validateGetHrisEmployeeDocumentCategoriesParameterCursor = typia.createValidate<GetHrisEmployeeDocumentCategoriesParameterCursor>();

export type GetHrisEmployeeDocumentCategoriesParameterPageSize = number;
export const isGetHrisEmployeeDocumentCategoriesParameterPageSize = typia.createIs<GetHrisEmployeeDocumentCategoriesParameterPageSize>();
export const assertGetHrisEmployeeDocumentCategoriesParameterPageSize = typia.createAssert<GetHrisEmployeeDocumentCategoriesParameterPageSize>();
export const validateGetHrisEmployeeDocumentCategoriesParameterPageSize = typia.createValidate<GetHrisEmployeeDocumentCategoriesParameterPageSize>();

export type GetHrisEmployeeDocumentCategoriesParameterUpdatedAfter = string;
export const isGetHrisEmployeeDocumentCategoriesParameterUpdatedAfter = typia.createIs<GetHrisEmployeeDocumentCategoriesParameterUpdatedAfter>();
export const assertGetHrisEmployeeDocumentCategoriesParameterUpdatedAfter = typia.createAssert<GetHrisEmployeeDocumentCategoriesParameterUpdatedAfter>();
export const validateGetHrisEmployeeDocumentCategoriesParameterUpdatedAfter = typia.createValidate<GetHrisEmployeeDocumentCategoriesParameterUpdatedAfter>();

export type GetHrisEmployeeDocumentCategoriesParameterIncludeDeleted = ("true" | "false");
export const isGetHrisEmployeeDocumentCategoriesParameterIncludeDeleted = typia.createIs<GetHrisEmployeeDocumentCategoriesParameterIncludeDeleted>();
export const assertGetHrisEmployeeDocumentCategoriesParameterIncludeDeleted = typia.createAssert<GetHrisEmployeeDocumentCategoriesParameterIncludeDeleted>();
export const validateGetHrisEmployeeDocumentCategoriesParameterIncludeDeleted = typia.createValidate<GetHrisEmployeeDocumentCategoriesParameterIncludeDeleted>();

export type GetHrisEmployeeDocumentCategoriesParameterIgnoreUnsupportedFilters = ("true" | "false");
export const isGetHrisEmployeeDocumentCategoriesParameterIgnoreUnsupportedFilters = typia.createIs<GetHrisEmployeeDocumentCategoriesParameterIgnoreUnsupportedFilters>();
export const assertGetHrisEmployeeDocumentCategoriesParameterIgnoreUnsupportedFilters = typia.createAssert<GetHrisEmployeeDocumentCategoriesParameterIgnoreUnsupportedFilters>();
export const validateGetHrisEmployeeDocumentCategoriesParameterIgnoreUnsupportedFilters = typia.createValidate<GetHrisEmployeeDocumentCategoriesParameterIgnoreUnsupportedFilters>();

export type GetHrisEmployeeDocumentCategoriesParameterIds = string;
export const isGetHrisEmployeeDocumentCategoriesParameterIds = typia.createIs<GetHrisEmployeeDocumentCategoriesParameterIds>();
export const assertGetHrisEmployeeDocumentCategoriesParameterIds = typia.createAssert<GetHrisEmployeeDocumentCategoriesParameterIds>();
export const validateGetHrisEmployeeDocumentCategoriesParameterIds = typia.createValidate<GetHrisEmployeeDocumentCategoriesParameterIds>();

export type GetHrisEmployeeDocumentCategoriesParameterRemoteIds = string;
export const isGetHrisEmployeeDocumentCategoriesParameterRemoteIds = typia.createIs<GetHrisEmployeeDocumentCategoriesParameterRemoteIds>();
export const assertGetHrisEmployeeDocumentCategoriesParameterRemoteIds = typia.createAssert<GetHrisEmployeeDocumentCategoriesParameterRemoteIds>();
export const validateGetHrisEmployeeDocumentCategoriesParameterRemoteIds = typia.createValidate<GetHrisEmployeeDocumentCategoriesParameterRemoteIds>();

export type GetHrisEmployeeDocumentCategoriesPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, remote_id: (string | null), name: (string | null), remote_data: (Record<string, unknown> | null), changed_at: string, remote_deleted_at: (string | null) }> } };
export const isGetHrisEmployeeDocumentCategoriesPositiveResponse = typia.createIs<GetHrisEmployeeDocumentCategoriesPositiveResponse>();
export const assertGetHrisEmployeeDocumentCategoriesPositiveResponse = typia.createAssert<GetHrisEmployeeDocumentCategoriesPositiveResponse>();
export const validateGetHrisEmployeeDocumentCategoriesPositiveResponse = typia.createValidate<GetHrisEmployeeDocumentCategoriesPositiveResponse>();

export type GetHrisTeamsParameterCursor = string;
export const isGetHrisTeamsParameterCursor = typia.createIs<GetHrisTeamsParameterCursor>();
export const assertGetHrisTeamsParameterCursor = typia.createAssert<GetHrisTeamsParameterCursor>();
export const validateGetHrisTeamsParameterCursor = typia.createValidate<GetHrisTeamsParameterCursor>();

export type GetHrisTeamsParameterPageSize = number;
export const isGetHrisTeamsParameterPageSize = typia.createIs<GetHrisTeamsParameterPageSize>();
export const assertGetHrisTeamsParameterPageSize = typia.createAssert<GetHrisTeamsParameterPageSize>();
export const validateGetHrisTeamsParameterPageSize = typia.createValidate<GetHrisTeamsParameterPageSize>();

export type GetHrisTeamsParameterUpdatedAfter = string;
export const isGetHrisTeamsParameterUpdatedAfter = typia.createIs<GetHrisTeamsParameterUpdatedAfter>();
export const assertGetHrisTeamsParameterUpdatedAfter = typia.createAssert<GetHrisTeamsParameterUpdatedAfter>();
export const validateGetHrisTeamsParameterUpdatedAfter = typia.createValidate<GetHrisTeamsParameterUpdatedAfter>();

export type GetHrisTeamsParameterIncludeDeleted = ("true" | "false");
export const isGetHrisTeamsParameterIncludeDeleted = typia.createIs<GetHrisTeamsParameterIncludeDeleted>();
export const assertGetHrisTeamsParameterIncludeDeleted = typia.createAssert<GetHrisTeamsParameterIncludeDeleted>();
export const validateGetHrisTeamsParameterIncludeDeleted = typia.createValidate<GetHrisTeamsParameterIncludeDeleted>();

export type GetHrisTeamsParameterIgnoreUnsupportedFilters = ("true" | "false");
export const isGetHrisTeamsParameterIgnoreUnsupportedFilters = typia.createIs<GetHrisTeamsParameterIgnoreUnsupportedFilters>();
export const assertGetHrisTeamsParameterIgnoreUnsupportedFilters = typia.createAssert<GetHrisTeamsParameterIgnoreUnsupportedFilters>();
export const validateGetHrisTeamsParameterIgnoreUnsupportedFilters = typia.createValidate<GetHrisTeamsParameterIgnoreUnsupportedFilters>();

export type GetHrisTeamsParameterIds = string;
export const isGetHrisTeamsParameterIds = typia.createIs<GetHrisTeamsParameterIds>();
export const assertGetHrisTeamsParameterIds = typia.createAssert<GetHrisTeamsParameterIds>();
export const validateGetHrisTeamsParameterIds = typia.createValidate<GetHrisTeamsParameterIds>();

export type GetHrisTeamsParameterRemoteIds = string;
export const isGetHrisTeamsParameterRemoteIds = typia.createIs<GetHrisTeamsParameterRemoteIds>();
export const assertGetHrisTeamsParameterRemoteIds = typia.createAssert<GetHrisTeamsParameterRemoteIds>();
export const validateGetHrisTeamsParameterRemoteIds = typia.createValidate<GetHrisTeamsParameterRemoteIds>();

export type GetHrisTeamsPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, remote_id: string, name: (string | null), changed_at: string, remote_deleted_at: (string | null), type: (("DEPARTMENT" | "TEAM" | "COST_CENTER") | null), parent_id: (string | null), remote_data: (Record<string, unknown> | null) }> } };
export const isGetHrisTeamsPositiveResponse = typia.createIs<GetHrisTeamsPositiveResponse>();
export const assertGetHrisTeamsPositiveResponse = typia.createAssert<GetHrisTeamsPositiveResponse>();
export const validateGetHrisTeamsPositiveResponse = typia.createValidate<GetHrisTeamsPositiveResponse>();

export type GetHrisGroupsParameterCursor = string;
export const isGetHrisGroupsParameterCursor = typia.createIs<GetHrisGroupsParameterCursor>();
export const assertGetHrisGroupsParameterCursor = typia.createAssert<GetHrisGroupsParameterCursor>();
export const validateGetHrisGroupsParameterCursor = typia.createValidate<GetHrisGroupsParameterCursor>();

export type GetHrisGroupsParameterPageSize = number;
export const isGetHrisGroupsParameterPageSize = typia.createIs<GetHrisGroupsParameterPageSize>();
export const assertGetHrisGroupsParameterPageSize = typia.createAssert<GetHrisGroupsParameterPageSize>();
export const validateGetHrisGroupsParameterPageSize = typia.createValidate<GetHrisGroupsParameterPageSize>();

export type GetHrisGroupsParameterUpdatedAfter = string;
export const isGetHrisGroupsParameterUpdatedAfter = typia.createIs<GetHrisGroupsParameterUpdatedAfter>();
export const assertGetHrisGroupsParameterUpdatedAfter = typia.createAssert<GetHrisGroupsParameterUpdatedAfter>();
export const validateGetHrisGroupsParameterUpdatedAfter = typia.createValidate<GetHrisGroupsParameterUpdatedAfter>();

export type GetHrisGroupsParameterIncludeDeleted = ("true" | "false");
export const isGetHrisGroupsParameterIncludeDeleted = typia.createIs<GetHrisGroupsParameterIncludeDeleted>();
export const assertGetHrisGroupsParameterIncludeDeleted = typia.createAssert<GetHrisGroupsParameterIncludeDeleted>();
export const validateGetHrisGroupsParameterIncludeDeleted = typia.createValidate<GetHrisGroupsParameterIncludeDeleted>();

export type GetHrisGroupsParameterIgnoreUnsupportedFilters = ("true" | "false");
export const isGetHrisGroupsParameterIgnoreUnsupportedFilters = typia.createIs<GetHrisGroupsParameterIgnoreUnsupportedFilters>();
export const assertGetHrisGroupsParameterIgnoreUnsupportedFilters = typia.createAssert<GetHrisGroupsParameterIgnoreUnsupportedFilters>();
export const validateGetHrisGroupsParameterIgnoreUnsupportedFilters = typia.createValidate<GetHrisGroupsParameterIgnoreUnsupportedFilters>();

export type GetHrisGroupsParameterIds = string;
export const isGetHrisGroupsParameterIds = typia.createIs<GetHrisGroupsParameterIds>();
export const assertGetHrisGroupsParameterIds = typia.createAssert<GetHrisGroupsParameterIds>();
export const validateGetHrisGroupsParameterIds = typia.createValidate<GetHrisGroupsParameterIds>();

export type GetHrisGroupsParameterRemoteIds = string;
export const isGetHrisGroupsParameterRemoteIds = typia.createIs<GetHrisGroupsParameterRemoteIds>();
export const assertGetHrisGroupsParameterRemoteIds = typia.createAssert<GetHrisGroupsParameterRemoteIds>();
export const validateGetHrisGroupsParameterRemoteIds = typia.createValidate<GetHrisGroupsParameterRemoteIds>();

export type GetHrisGroupsParameterTypes = string;
export const isGetHrisGroupsParameterTypes = typia.createIs<GetHrisGroupsParameterTypes>();
export const assertGetHrisGroupsParameterTypes = typia.createAssert<GetHrisGroupsParameterTypes>();
export const validateGetHrisGroupsParameterTypes = typia.createValidate<GetHrisGroupsParameterTypes>();

export type GetHrisGroupsParameterNameContains = string;
export const isGetHrisGroupsParameterNameContains = typia.createIs<GetHrisGroupsParameterNameContains>();
export const assertGetHrisGroupsParameterNameContains = typia.createAssert<GetHrisGroupsParameterNameContains>();
export const validateGetHrisGroupsParameterNameContains = typia.createValidate<GetHrisGroupsParameterNameContains>();

export type GetHrisGroupsPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, remote_id: string, name: (string | null), changed_at: string, remote_deleted_at: (string | null), type: (("DEPARTMENT" | "TEAM" | "COST_CENTER") | null), parent_id: (string | null), remote_data: (Record<string, unknown> | null) }> } };
export const isGetHrisGroupsPositiveResponse = typia.createIs<GetHrisGroupsPositiveResponse>();
export const assertGetHrisGroupsPositiveResponse = typia.createAssert<GetHrisGroupsPositiveResponse>();
export const validateGetHrisGroupsPositiveResponse = typia.createValidate<GetHrisGroupsPositiveResponse>();

export type GetHrisEmploymentsParameterCursor = string;
export const isGetHrisEmploymentsParameterCursor = typia.createIs<GetHrisEmploymentsParameterCursor>();
export const assertGetHrisEmploymentsParameterCursor = typia.createAssert<GetHrisEmploymentsParameterCursor>();
export const validateGetHrisEmploymentsParameterCursor = typia.createValidate<GetHrisEmploymentsParameterCursor>();

export type GetHrisEmploymentsParameterPageSize = number;
export const isGetHrisEmploymentsParameterPageSize = typia.createIs<GetHrisEmploymentsParameterPageSize>();
export const assertGetHrisEmploymentsParameterPageSize = typia.createAssert<GetHrisEmploymentsParameterPageSize>();
export const validateGetHrisEmploymentsParameterPageSize = typia.createValidate<GetHrisEmploymentsParameterPageSize>();

export type GetHrisEmploymentsParameterUpdatedAfter = string;
export const isGetHrisEmploymentsParameterUpdatedAfter = typia.createIs<GetHrisEmploymentsParameterUpdatedAfter>();
export const assertGetHrisEmploymentsParameterUpdatedAfter = typia.createAssert<GetHrisEmploymentsParameterUpdatedAfter>();
export const validateGetHrisEmploymentsParameterUpdatedAfter = typia.createValidate<GetHrisEmploymentsParameterUpdatedAfter>();

export type GetHrisEmploymentsParameterIncludeDeleted = ("true" | "false");
export const isGetHrisEmploymentsParameterIncludeDeleted = typia.createIs<GetHrisEmploymentsParameterIncludeDeleted>();
export const assertGetHrisEmploymentsParameterIncludeDeleted = typia.createAssert<GetHrisEmploymentsParameterIncludeDeleted>();
export const validateGetHrisEmploymentsParameterIncludeDeleted = typia.createValidate<GetHrisEmploymentsParameterIncludeDeleted>();

export type GetHrisEmploymentsParameterIgnoreUnsupportedFilters = ("true" | "false");
export const isGetHrisEmploymentsParameterIgnoreUnsupportedFilters = typia.createIs<GetHrisEmploymentsParameterIgnoreUnsupportedFilters>();
export const assertGetHrisEmploymentsParameterIgnoreUnsupportedFilters = typia.createAssert<GetHrisEmploymentsParameterIgnoreUnsupportedFilters>();
export const validateGetHrisEmploymentsParameterIgnoreUnsupportedFilters = typia.createValidate<GetHrisEmploymentsParameterIgnoreUnsupportedFilters>();

export type GetHrisEmploymentsParameterIds = string;
export const isGetHrisEmploymentsParameterIds = typia.createIs<GetHrisEmploymentsParameterIds>();
export const assertGetHrisEmploymentsParameterIds = typia.createAssert<GetHrisEmploymentsParameterIds>();
export const validateGetHrisEmploymentsParameterIds = typia.createValidate<GetHrisEmploymentsParameterIds>();

export type GetHrisEmploymentsParameterRemoteIds = string;
export const isGetHrisEmploymentsParameterRemoteIds = typia.createIs<GetHrisEmploymentsParameterRemoteIds>();
export const assertGetHrisEmploymentsParameterRemoteIds = typia.createAssert<GetHrisEmploymentsParameterRemoteIds>();
export const validateGetHrisEmploymentsParameterRemoteIds = typia.createValidate<GetHrisEmploymentsParameterRemoteIds>();

export type GetHrisEmploymentsPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, remote_id: (string | null), employee_id: string, job_title: (string | null), pay_rate: (number | null), pay_period?: (("HOUR" | "DAY" | "WEEK" | "TWO_WEEKS" | "HALF_MONTH" | "MONTH" | "TWO_MONTHS" | "QUARTER" | "HALF_YEAR" | "YEAR") | string | null), pay_frequency?: (("DAILY" | "WEEKLY" | "BIWEEKLY" | "MONTHLY" | "SEMIMONTHLY" | "QUARTERLY" | "SEMIANNUALLY" | "ANNUALLY" | "PRO_RATA") | string | null), employment_type?: (("FULL_TIME" | "PART_TIME" | "CONTRACT" | "INTERNSHIP" | "FREELANCE" | "WORKING_STUDENT" | "APPRENTICESHIP" | "TRAINING") | string | null), pay_currency: (string | null), effective_date: (string | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }> }> } };
export const isGetHrisEmploymentsPositiveResponse = typia.createIs<GetHrisEmploymentsPositiveResponse>();
export const assertGetHrisEmploymentsPositiveResponse = typia.createAssert<GetHrisEmploymentsPositiveResponse>();
export const validateGetHrisEmploymentsPositiveResponse = typia.createValidate<GetHrisEmploymentsPositiveResponse>();

export type GetHrisLocationsParameterCursor = string;
export const isGetHrisLocationsParameterCursor = typia.createIs<GetHrisLocationsParameterCursor>();
export const assertGetHrisLocationsParameterCursor = typia.createAssert<GetHrisLocationsParameterCursor>();
export const validateGetHrisLocationsParameterCursor = typia.createValidate<GetHrisLocationsParameterCursor>();

export type GetHrisLocationsParameterPageSize = number;
export const isGetHrisLocationsParameterPageSize = typia.createIs<GetHrisLocationsParameterPageSize>();
export const assertGetHrisLocationsParameterPageSize = typia.createAssert<GetHrisLocationsParameterPageSize>();
export const validateGetHrisLocationsParameterPageSize = typia.createValidate<GetHrisLocationsParameterPageSize>();

export type GetHrisLocationsParameterUpdatedAfter = string;
export const isGetHrisLocationsParameterUpdatedAfter = typia.createIs<GetHrisLocationsParameterUpdatedAfter>();
export const assertGetHrisLocationsParameterUpdatedAfter = typia.createAssert<GetHrisLocationsParameterUpdatedAfter>();
export const validateGetHrisLocationsParameterUpdatedAfter = typia.createValidate<GetHrisLocationsParameterUpdatedAfter>();

export type GetHrisLocationsParameterIncludeDeleted = ("true" | "false");
export const isGetHrisLocationsParameterIncludeDeleted = typia.createIs<GetHrisLocationsParameterIncludeDeleted>();
export const assertGetHrisLocationsParameterIncludeDeleted = typia.createAssert<GetHrisLocationsParameterIncludeDeleted>();
export const validateGetHrisLocationsParameterIncludeDeleted = typia.createValidate<GetHrisLocationsParameterIncludeDeleted>();

export type GetHrisLocationsParameterIgnoreUnsupportedFilters = ("true" | "false");
export const isGetHrisLocationsParameterIgnoreUnsupportedFilters = typia.createIs<GetHrisLocationsParameterIgnoreUnsupportedFilters>();
export const assertGetHrisLocationsParameterIgnoreUnsupportedFilters = typia.createAssert<GetHrisLocationsParameterIgnoreUnsupportedFilters>();
export const validateGetHrisLocationsParameterIgnoreUnsupportedFilters = typia.createValidate<GetHrisLocationsParameterIgnoreUnsupportedFilters>();

export type GetHrisLocationsParameterIds = string;
export const isGetHrisLocationsParameterIds = typia.createIs<GetHrisLocationsParameterIds>();
export const assertGetHrisLocationsParameterIds = typia.createAssert<GetHrisLocationsParameterIds>();
export const validateGetHrisLocationsParameterIds = typia.createValidate<GetHrisLocationsParameterIds>();

export type GetHrisLocationsParameterRemoteIds = string;
export const isGetHrisLocationsParameterRemoteIds = typia.createIs<GetHrisLocationsParameterRemoteIds>();
export const assertGetHrisLocationsParameterRemoteIds = typia.createAssert<GetHrisLocationsParameterRemoteIds>();
export const validateGetHrisLocationsParameterRemoteIds = typia.createValidate<GetHrisLocationsParameterRemoteIds>();

export type GetHrisLocationsParameterNameContains = string;
export const isGetHrisLocationsParameterNameContains = typia.createIs<GetHrisLocationsParameterNameContains>();
export const assertGetHrisLocationsParameterNameContains = typia.createAssert<GetHrisLocationsParameterNameContains>();
export const validateGetHrisLocationsParameterNameContains = typia.createValidate<GetHrisLocationsParameterNameContains>();

export type GetHrisLocationsPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, remote_id: (string | null), name: (string | null), address?: (Partial<{ city: (string | null), country: (string | null), raw: (string | null), state: (string | null), street_1: (string | null), street_2: (string | null), zip_code: (string | null) }> | null), type: (string | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null) }> } };
export const isGetHrisLocationsPositiveResponse = typia.createIs<GetHrisLocationsPositiveResponse>();
export const assertGetHrisLocationsPositiveResponse = typia.createAssert<GetHrisLocationsPositiveResponse>();
export const validateGetHrisLocationsPositiveResponse = typia.createValidate<GetHrisLocationsPositiveResponse>();

export type GetHrisAbsenceTypesParameterCursor = string;
export const isGetHrisAbsenceTypesParameterCursor = typia.createIs<GetHrisAbsenceTypesParameterCursor>();
export const assertGetHrisAbsenceTypesParameterCursor = typia.createAssert<GetHrisAbsenceTypesParameterCursor>();
export const validateGetHrisAbsenceTypesParameterCursor = typia.createValidate<GetHrisAbsenceTypesParameterCursor>();

export type GetHrisAbsenceTypesParameterPageSize = number;
export const isGetHrisAbsenceTypesParameterPageSize = typia.createIs<GetHrisAbsenceTypesParameterPageSize>();
export const assertGetHrisAbsenceTypesParameterPageSize = typia.createAssert<GetHrisAbsenceTypesParameterPageSize>();
export const validateGetHrisAbsenceTypesParameterPageSize = typia.createValidate<GetHrisAbsenceTypesParameterPageSize>();

export type GetHrisAbsenceTypesParameterUpdatedAfter = string;
export const isGetHrisAbsenceTypesParameterUpdatedAfter = typia.createIs<GetHrisAbsenceTypesParameterUpdatedAfter>();
export const assertGetHrisAbsenceTypesParameterUpdatedAfter = typia.createAssert<GetHrisAbsenceTypesParameterUpdatedAfter>();
export const validateGetHrisAbsenceTypesParameterUpdatedAfter = typia.createValidate<GetHrisAbsenceTypesParameterUpdatedAfter>();

export type GetHrisAbsenceTypesParameterIncludeDeleted = ("true" | "false");
export const isGetHrisAbsenceTypesParameterIncludeDeleted = typia.createIs<GetHrisAbsenceTypesParameterIncludeDeleted>();
export const assertGetHrisAbsenceTypesParameterIncludeDeleted = typia.createAssert<GetHrisAbsenceTypesParameterIncludeDeleted>();
export const validateGetHrisAbsenceTypesParameterIncludeDeleted = typia.createValidate<GetHrisAbsenceTypesParameterIncludeDeleted>();

export type GetHrisAbsenceTypesParameterIgnoreUnsupportedFilters = ("true" | "false");
export const isGetHrisAbsenceTypesParameterIgnoreUnsupportedFilters = typia.createIs<GetHrisAbsenceTypesParameterIgnoreUnsupportedFilters>();
export const assertGetHrisAbsenceTypesParameterIgnoreUnsupportedFilters = typia.createAssert<GetHrisAbsenceTypesParameterIgnoreUnsupportedFilters>();
export const validateGetHrisAbsenceTypesParameterIgnoreUnsupportedFilters = typia.createValidate<GetHrisAbsenceTypesParameterIgnoreUnsupportedFilters>();

export type GetHrisAbsenceTypesParameterIds = string;
export const isGetHrisAbsenceTypesParameterIds = typia.createIs<GetHrisAbsenceTypesParameterIds>();
export const assertGetHrisAbsenceTypesParameterIds = typia.createAssert<GetHrisAbsenceTypesParameterIds>();
export const validateGetHrisAbsenceTypesParameterIds = typia.createValidate<GetHrisAbsenceTypesParameterIds>();

export type GetHrisAbsenceTypesParameterRemoteIds = string;
export const isGetHrisAbsenceTypesParameterRemoteIds = typia.createIs<GetHrisAbsenceTypesParameterRemoteIds>();
export const assertGetHrisAbsenceTypesParameterRemoteIds = typia.createAssert<GetHrisAbsenceTypesParameterRemoteIds>();
export const validateGetHrisAbsenceTypesParameterRemoteIds = typia.createValidate<GetHrisAbsenceTypesParameterRemoteIds>();

export type GetHrisAbsenceTypesPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, remote_id: string, name: (string | null), unit: (("HOURS" | "DAYS") | null), half_days_supported: (boolean | null), exact_times_supported: (boolean | null), remote_data: (Record<string, unknown> | null), changed_at: string, remote_deleted_at: (string | null) }> } };
export const isGetHrisAbsenceTypesPositiveResponse = typia.createIs<GetHrisAbsenceTypesPositiveResponse>();
export const assertGetHrisAbsenceTypesPositiveResponse = typia.createAssert<GetHrisAbsenceTypesPositiveResponse>();
export const validateGetHrisAbsenceTypesPositiveResponse = typia.createValidate<GetHrisAbsenceTypesPositiveResponse>();

export type GetHrisTimeOffBalancesParameterCursor = string;
export const isGetHrisTimeOffBalancesParameterCursor = typia.createIs<GetHrisTimeOffBalancesParameterCursor>();
export const assertGetHrisTimeOffBalancesParameterCursor = typia.createAssert<GetHrisTimeOffBalancesParameterCursor>();
export const validateGetHrisTimeOffBalancesParameterCursor = typia.createValidate<GetHrisTimeOffBalancesParameterCursor>();

export type GetHrisTimeOffBalancesParameterPageSize = number;
export const isGetHrisTimeOffBalancesParameterPageSize = typia.createIs<GetHrisTimeOffBalancesParameterPageSize>();
export const assertGetHrisTimeOffBalancesParameterPageSize = typia.createAssert<GetHrisTimeOffBalancesParameterPageSize>();
export const validateGetHrisTimeOffBalancesParameterPageSize = typia.createValidate<GetHrisTimeOffBalancesParameterPageSize>();

export type GetHrisTimeOffBalancesParameterUpdatedAfter = string;
export const isGetHrisTimeOffBalancesParameterUpdatedAfter = typia.createIs<GetHrisTimeOffBalancesParameterUpdatedAfter>();
export const assertGetHrisTimeOffBalancesParameterUpdatedAfter = typia.createAssert<GetHrisTimeOffBalancesParameterUpdatedAfter>();
export const validateGetHrisTimeOffBalancesParameterUpdatedAfter = typia.createValidate<GetHrisTimeOffBalancesParameterUpdatedAfter>();

export type GetHrisTimeOffBalancesParameterIncludeDeleted = ("true" | "false");
export const isGetHrisTimeOffBalancesParameterIncludeDeleted = typia.createIs<GetHrisTimeOffBalancesParameterIncludeDeleted>();
export const assertGetHrisTimeOffBalancesParameterIncludeDeleted = typia.createAssert<GetHrisTimeOffBalancesParameterIncludeDeleted>();
export const validateGetHrisTimeOffBalancesParameterIncludeDeleted = typia.createValidate<GetHrisTimeOffBalancesParameterIncludeDeleted>();

export type GetHrisTimeOffBalancesParameterIgnoreUnsupportedFilters = ("true" | "false");
export const isGetHrisTimeOffBalancesParameterIgnoreUnsupportedFilters = typia.createIs<GetHrisTimeOffBalancesParameterIgnoreUnsupportedFilters>();
export const assertGetHrisTimeOffBalancesParameterIgnoreUnsupportedFilters = typia.createAssert<GetHrisTimeOffBalancesParameterIgnoreUnsupportedFilters>();
export const validateGetHrisTimeOffBalancesParameterIgnoreUnsupportedFilters = typia.createValidate<GetHrisTimeOffBalancesParameterIgnoreUnsupportedFilters>();

export type GetHrisTimeOffBalancesParameterIds = string;
export const isGetHrisTimeOffBalancesParameterIds = typia.createIs<GetHrisTimeOffBalancesParameterIds>();
export const assertGetHrisTimeOffBalancesParameterIds = typia.createAssert<GetHrisTimeOffBalancesParameterIds>();
export const validateGetHrisTimeOffBalancesParameterIds = typia.createValidate<GetHrisTimeOffBalancesParameterIds>();

export type GetHrisTimeOffBalancesParameterRemoteIds = string;
export const isGetHrisTimeOffBalancesParameterRemoteIds = typia.createIs<GetHrisTimeOffBalancesParameterRemoteIds>();
export const assertGetHrisTimeOffBalancesParameterRemoteIds = typia.createAssert<GetHrisTimeOffBalancesParameterRemoteIds>();
export const validateGetHrisTimeOffBalancesParameterRemoteIds = typia.createValidate<GetHrisTimeOffBalancesParameterRemoteIds>();

export type GetHrisTimeOffBalancesParameterEmployeeId = string;
export const isGetHrisTimeOffBalancesParameterEmployeeId = typia.createIs<GetHrisTimeOffBalancesParameterEmployeeId>();
export const assertGetHrisTimeOffBalancesParameterEmployeeId = typia.createAssert<GetHrisTimeOffBalancesParameterEmployeeId>();
export const validateGetHrisTimeOffBalancesParameterEmployeeId = typia.createValidate<GetHrisTimeOffBalancesParameterEmployeeId>();

export type GetHrisTimeOffBalancesPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, remote_id: (string | null), employee_id: string, type_id: string, balance: (number | null), balance_unit: (("HOURS" | "DAYS") | null), changed_at: string, remote_deleted_at: (string | null), used: (number | null), used_unit: (("HOURS" | "DAYS") | null), remote_data: (Record<string, unknown> | null), type: { id: string, remote_id: string, name: (string | null), unit: (("HOURS" | "DAYS") | null), half_days_supported: (boolean | null), exact_times_supported: (boolean | null), remote_data: (Record<string, unknown> | null), changed_at: string, remote_deleted_at: (string | null) } }> } };
export const isGetHrisTimeOffBalancesPositiveResponse = typia.createIs<GetHrisTimeOffBalancesPositiveResponse>();
export const assertGetHrisTimeOffBalancesPositiveResponse = typia.createAssert<GetHrisTimeOffBalancesPositiveResponse>();
export const validateGetHrisTimeOffBalancesPositiveResponse = typia.createValidate<GetHrisTimeOffBalancesPositiveResponse>();

export type GetHrisAbsencesParameterCursor = string;
export const isGetHrisAbsencesParameterCursor = typia.createIs<GetHrisAbsencesParameterCursor>();
export const assertGetHrisAbsencesParameterCursor = typia.createAssert<GetHrisAbsencesParameterCursor>();
export const validateGetHrisAbsencesParameterCursor = typia.createValidate<GetHrisAbsencesParameterCursor>();

export type GetHrisAbsencesParameterPageSize = number;
export const isGetHrisAbsencesParameterPageSize = typia.createIs<GetHrisAbsencesParameterPageSize>();
export const assertGetHrisAbsencesParameterPageSize = typia.createAssert<GetHrisAbsencesParameterPageSize>();
export const validateGetHrisAbsencesParameterPageSize = typia.createValidate<GetHrisAbsencesParameterPageSize>();

export type GetHrisAbsencesParameterUpdatedAfter = string;
export const isGetHrisAbsencesParameterUpdatedAfter = typia.createIs<GetHrisAbsencesParameterUpdatedAfter>();
export const assertGetHrisAbsencesParameterUpdatedAfter = typia.createAssert<GetHrisAbsencesParameterUpdatedAfter>();
export const validateGetHrisAbsencesParameterUpdatedAfter = typia.createValidate<GetHrisAbsencesParameterUpdatedAfter>();

export type GetHrisAbsencesParameterIncludeDeleted = ("true" | "false");
export const isGetHrisAbsencesParameterIncludeDeleted = typia.createIs<GetHrisAbsencesParameterIncludeDeleted>();
export const assertGetHrisAbsencesParameterIncludeDeleted = typia.createAssert<GetHrisAbsencesParameterIncludeDeleted>();
export const validateGetHrisAbsencesParameterIncludeDeleted = typia.createValidate<GetHrisAbsencesParameterIncludeDeleted>();

export type GetHrisAbsencesParameterIgnoreUnsupportedFilters = ("true" | "false");
export const isGetHrisAbsencesParameterIgnoreUnsupportedFilters = typia.createIs<GetHrisAbsencesParameterIgnoreUnsupportedFilters>();
export const assertGetHrisAbsencesParameterIgnoreUnsupportedFilters = typia.createAssert<GetHrisAbsencesParameterIgnoreUnsupportedFilters>();
export const validateGetHrisAbsencesParameterIgnoreUnsupportedFilters = typia.createValidate<GetHrisAbsencesParameterIgnoreUnsupportedFilters>();

export type GetHrisAbsencesParameterIds = string;
export const isGetHrisAbsencesParameterIds = typia.createIs<GetHrisAbsencesParameterIds>();
export const assertGetHrisAbsencesParameterIds = typia.createAssert<GetHrisAbsencesParameterIds>();
export const validateGetHrisAbsencesParameterIds = typia.createValidate<GetHrisAbsencesParameterIds>();

export type GetHrisAbsencesParameterRemoteIds = string;
export const isGetHrisAbsencesParameterRemoteIds = typia.createIs<GetHrisAbsencesParameterRemoteIds>();
export const assertGetHrisAbsencesParameterRemoteIds = typia.createAssert<GetHrisAbsencesParameterRemoteIds>();
export const validateGetHrisAbsencesParameterRemoteIds = typia.createValidate<GetHrisAbsencesParameterRemoteIds>();

export type GetHrisAbsencesParameterDateFrom = string;
export const isGetHrisAbsencesParameterDateFrom = typia.createIs<GetHrisAbsencesParameterDateFrom>();
export const assertGetHrisAbsencesParameterDateFrom = typia.createAssert<GetHrisAbsencesParameterDateFrom>();
export const validateGetHrisAbsencesParameterDateFrom = typia.createValidate<GetHrisAbsencesParameterDateFrom>();

export type GetHrisAbsencesParameterDateUntil = string;
export const isGetHrisAbsencesParameterDateUntil = typia.createIs<GetHrisAbsencesParameterDateUntil>();
export const assertGetHrisAbsencesParameterDateUntil = typia.createAssert<GetHrisAbsencesParameterDateUntil>();
export const validateGetHrisAbsencesParameterDateUntil = typia.createValidate<GetHrisAbsencesParameterDateUntil>();

export type GetHrisAbsencesParameterTypeIds = string;
export const isGetHrisAbsencesParameterTypeIds = typia.createIs<GetHrisAbsencesParameterTypeIds>();
export const assertGetHrisAbsencesParameterTypeIds = typia.createAssert<GetHrisAbsencesParameterTypeIds>();
export const validateGetHrisAbsencesParameterTypeIds = typia.createValidate<GetHrisAbsencesParameterTypeIds>();

export type GetHrisAbsencesParameterEmployeeId = string;
export const isGetHrisAbsencesParameterEmployeeId = typia.createIs<GetHrisAbsencesParameterEmployeeId>();
export const assertGetHrisAbsencesParameterEmployeeId = typia.createAssert<GetHrisAbsencesParameterEmployeeId>();
export const validateGetHrisAbsencesParameterEmployeeId = typia.createValidate<GetHrisAbsencesParameterEmployeeId>();

export type GetHrisAbsencesParameterTimeFrom = string;
export const isGetHrisAbsencesParameterTimeFrom = typia.createIs<GetHrisAbsencesParameterTimeFrom>();
export const assertGetHrisAbsencesParameterTimeFrom = typia.createAssert<GetHrisAbsencesParameterTimeFrom>();
export const validateGetHrisAbsencesParameterTimeFrom = typia.createValidate<GetHrisAbsencesParameterTimeFrom>();

export type GetHrisAbsencesParameterTimeUntil = string;
export const isGetHrisAbsencesParameterTimeUntil = typia.createIs<GetHrisAbsencesParameterTimeUntil>();
export const assertGetHrisAbsencesParameterTimeUntil = typia.createAssert<GetHrisAbsencesParameterTimeUntil>();
export const validateGetHrisAbsencesParameterTimeUntil = typia.createValidate<GetHrisAbsencesParameterTimeUntil>();

export type GetHrisAbsencesPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, remote_id: (string | null), employee_id: string, approver_id: (string | null), start_date: null, end_date: null, start_half_day: (boolean | null), end_half_day: (boolean | null), start_time: null, end_time: null, amount: (number | null), unit: (("HOURS" | "DAYS") | null), status?: (("REQUESTED" | "APPROVED" | "DECLINED" | "CANCELLED" | "DELETED") | string | null), employee_note: (string | null), type_id: (string | null), remote_created_at: (string | null), remote_updated_at: (string | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null), type: ({ id: string, remote_id: string, name: (string | null), unit: (("HOURS" | "DAYS") | null), half_days_supported: (boolean | null), exact_times_supported: (boolean | null), remote_data: (Record<string, unknown> | null), changed_at: string, remote_deleted_at: (string | null) } | null) }> } };
export const isGetHrisAbsencesPositiveResponse = typia.createIs<GetHrisAbsencesPositiveResponse>();
export const assertGetHrisAbsencesPositiveResponse = typia.createAssert<GetHrisAbsencesPositiveResponse>();
export const validateGetHrisAbsencesPositiveResponse = typia.createValidate<GetHrisAbsencesPositiveResponse>();

export type PostHrisAbsencesPositiveResponse = { status: string, data: { id: string, remote_id: (string | null), employee_id: string, approver_id: (string | null), start_date: null, end_date: null, start_half_day: (boolean | null), end_half_day: (boolean | null), start_time: null, end_time: null, amount: (number | null), unit: (("HOURS" | "DAYS") | null), status?: (("REQUESTED" | "APPROVED" | "DECLINED" | "CANCELLED" | "DELETED") | string | null), employee_note: (string | null), type_id: (string | null), remote_created_at: (string | null), remote_updated_at: (string | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null) }, warnings: Array<{ message: string }> };
export const isPostHrisAbsencesPositiveResponse = typia.createIs<PostHrisAbsencesPositiveResponse>();
export const assertPostHrisAbsencesPositiveResponse = typia.createAssert<PostHrisAbsencesPositiveResponse>();
export const validatePostHrisAbsencesPositiveResponse = typia.createValidate<PostHrisAbsencesPositiveResponse>();

export type PostHrisAbsencesRequestBody = { employee_id: string, absence_type_id: string, status?: ("REQUESTED" | "APPROVED"), start_date: string, end_date: string, start_half_day?: boolean, end_half_day?: boolean, amount?: number, unit?: ("HOURS" | "DAYS"), employee_note: (string | null), start_time?: string, end_time?: string, remote_fields?: Partial<{ a3innuvanomina: Partial<{ benefit_type_id: ("Delegated Payment" | "No Right to Benefit" | "Direct payment") }>, adpworkforcenow: Partial<{ employment_id: string, paid_leave: boolean }> }> };
export const isPostHrisAbsencesRequestBody = typia.createIs<PostHrisAbsencesRequestBody>();
export const assertPostHrisAbsencesRequestBody = typia.createAssert<PostHrisAbsencesRequestBody>();
export const validatePostHrisAbsencesRequestBody = typia.createValidate<PostHrisAbsencesRequestBody>();

export type DeleteHrisAbsencesAbsenceIdParameterAbsenceId = string;
export const isDeleteHrisAbsencesAbsenceIdParameterAbsenceId = typia.createIs<DeleteHrisAbsencesAbsenceIdParameterAbsenceId>();
export const assertDeleteHrisAbsencesAbsenceIdParameterAbsenceId = typia.createAssert<DeleteHrisAbsencesAbsenceIdParameterAbsenceId>();
export const validateDeleteHrisAbsencesAbsenceIdParameterAbsenceId = typia.createValidate<DeleteHrisAbsencesAbsenceIdParameterAbsenceId>();

export type DeleteHrisAbsencesAbsenceIdPositiveResponse = { status: string, data: { id: string, remote_id: (string | null), employee_id: string, approver_id: (string | null), start_date: null, end_date: null, start_half_day: (boolean | null), end_half_day: (boolean | null), start_time: null, end_time: null, amount: (number | null), unit: (("HOURS" | "DAYS") | null), status?: (("REQUESTED" | "APPROVED" | "DECLINED" | "CANCELLED" | "DELETED") | string | null), employee_note: (string | null), type_id: (string | null), remote_created_at: (string | null), remote_updated_at: (string | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null) }, warnings: Array<{ message: string }> };
export const isDeleteHrisAbsencesAbsenceIdPositiveResponse = typia.createIs<DeleteHrisAbsencesAbsenceIdPositiveResponse>();
export const assertDeleteHrisAbsencesAbsenceIdPositiveResponse = typia.createAssert<DeleteHrisAbsencesAbsenceIdPositiveResponse>();
export const validateDeleteHrisAbsencesAbsenceIdPositiveResponse = typia.createValidate<DeleteHrisAbsencesAbsenceIdPositiveResponse>();

export type DeleteHrisAbsencesAbsenceIdRequestBody = Partial<{ remote_fields: Partial<{ adpworkforcenow: Partial<{ employment_id: string }> }> }>;
export const isDeleteHrisAbsencesAbsenceIdRequestBody = typia.createIs<DeleteHrisAbsencesAbsenceIdRequestBody>();
export const assertDeleteHrisAbsencesAbsenceIdRequestBody = typia.createAssert<DeleteHrisAbsencesAbsenceIdRequestBody>();
export const validateDeleteHrisAbsencesAbsenceIdRequestBody = typia.createValidate<DeleteHrisAbsencesAbsenceIdRequestBody>();

export type GetHrisLegalEntitiesParameterCursor = string;
export const isGetHrisLegalEntitiesParameterCursor = typia.createIs<GetHrisLegalEntitiesParameterCursor>();
export const assertGetHrisLegalEntitiesParameterCursor = typia.createAssert<GetHrisLegalEntitiesParameterCursor>();
export const validateGetHrisLegalEntitiesParameterCursor = typia.createValidate<GetHrisLegalEntitiesParameterCursor>();

export type GetHrisLegalEntitiesParameterPageSize = number;
export const isGetHrisLegalEntitiesParameterPageSize = typia.createIs<GetHrisLegalEntitiesParameterPageSize>();
export const assertGetHrisLegalEntitiesParameterPageSize = typia.createAssert<GetHrisLegalEntitiesParameterPageSize>();
export const validateGetHrisLegalEntitiesParameterPageSize = typia.createValidate<GetHrisLegalEntitiesParameterPageSize>();

export type GetHrisLegalEntitiesParameterUpdatedAfter = string;
export const isGetHrisLegalEntitiesParameterUpdatedAfter = typia.createIs<GetHrisLegalEntitiesParameterUpdatedAfter>();
export const assertGetHrisLegalEntitiesParameterUpdatedAfter = typia.createAssert<GetHrisLegalEntitiesParameterUpdatedAfter>();
export const validateGetHrisLegalEntitiesParameterUpdatedAfter = typia.createValidate<GetHrisLegalEntitiesParameterUpdatedAfter>();

export type GetHrisLegalEntitiesParameterIncludeDeleted = ("true" | "false");
export const isGetHrisLegalEntitiesParameterIncludeDeleted = typia.createIs<GetHrisLegalEntitiesParameterIncludeDeleted>();
export const assertGetHrisLegalEntitiesParameterIncludeDeleted = typia.createAssert<GetHrisLegalEntitiesParameterIncludeDeleted>();
export const validateGetHrisLegalEntitiesParameterIncludeDeleted = typia.createValidate<GetHrisLegalEntitiesParameterIncludeDeleted>();

export type GetHrisLegalEntitiesParameterIgnoreUnsupportedFilters = ("true" | "false");
export const isGetHrisLegalEntitiesParameterIgnoreUnsupportedFilters = typia.createIs<GetHrisLegalEntitiesParameterIgnoreUnsupportedFilters>();
export const assertGetHrisLegalEntitiesParameterIgnoreUnsupportedFilters = typia.createAssert<GetHrisLegalEntitiesParameterIgnoreUnsupportedFilters>();
export const validateGetHrisLegalEntitiesParameterIgnoreUnsupportedFilters = typia.createValidate<GetHrisLegalEntitiesParameterIgnoreUnsupportedFilters>();

export type GetHrisLegalEntitiesParameterIds = string;
export const isGetHrisLegalEntitiesParameterIds = typia.createIs<GetHrisLegalEntitiesParameterIds>();
export const assertGetHrisLegalEntitiesParameterIds = typia.createAssert<GetHrisLegalEntitiesParameterIds>();
export const validateGetHrisLegalEntitiesParameterIds = typia.createValidate<GetHrisLegalEntitiesParameterIds>();

export type GetHrisLegalEntitiesParameterRemoteIds = string;
export const isGetHrisLegalEntitiesParameterRemoteIds = typia.createIs<GetHrisLegalEntitiesParameterRemoteIds>();
export const assertGetHrisLegalEntitiesParameterRemoteIds = typia.createAssert<GetHrisLegalEntitiesParameterRemoteIds>();
export const validateGetHrisLegalEntitiesParameterRemoteIds = typia.createValidate<GetHrisLegalEntitiesParameterRemoteIds>();

export type GetHrisLegalEntitiesParameterNameContains = string;
export const isGetHrisLegalEntitiesParameterNameContains = typia.createIs<GetHrisLegalEntitiesParameterNameContains>();
export const assertGetHrisLegalEntitiesParameterNameContains = typia.createAssert<GetHrisLegalEntitiesParameterNameContains>();
export const validateGetHrisLegalEntitiesParameterNameContains = typia.createValidate<GetHrisLegalEntitiesParameterNameContains>();

export type GetHrisLegalEntitiesPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, remote_id: (string | null), name: (string | null), address?: (Partial<{ city: (string | null), country: (string | null), raw: (string | null), state: (string | null), street_1: (string | null), street_2: (string | null), zip_code: (string | null) }> | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null) }> } };
export const isGetHrisLegalEntitiesPositiveResponse = typia.createIs<GetHrisLegalEntitiesPositiveResponse>();
export const assertGetHrisLegalEntitiesPositiveResponse = typia.createAssert<GetHrisLegalEntitiesPositiveResponse>();
export const validateGetHrisLegalEntitiesPositiveResponse = typia.createValidate<GetHrisLegalEntitiesPositiveResponse>();

export type GetHrisTimesheetsParameterCursor = string;
export const isGetHrisTimesheetsParameterCursor = typia.createIs<GetHrisTimesheetsParameterCursor>();
export const assertGetHrisTimesheetsParameterCursor = typia.createAssert<GetHrisTimesheetsParameterCursor>();
export const validateGetHrisTimesheetsParameterCursor = typia.createValidate<GetHrisTimesheetsParameterCursor>();

export type GetHrisTimesheetsParameterPageSize = number;
export const isGetHrisTimesheetsParameterPageSize = typia.createIs<GetHrisTimesheetsParameterPageSize>();
export const assertGetHrisTimesheetsParameterPageSize = typia.createAssert<GetHrisTimesheetsParameterPageSize>();
export const validateGetHrisTimesheetsParameterPageSize = typia.createValidate<GetHrisTimesheetsParameterPageSize>();

export type GetHrisTimesheetsParameterUpdatedAfter = string;
export const isGetHrisTimesheetsParameterUpdatedAfter = typia.createIs<GetHrisTimesheetsParameterUpdatedAfter>();
export const assertGetHrisTimesheetsParameterUpdatedAfter = typia.createAssert<GetHrisTimesheetsParameterUpdatedAfter>();
export const validateGetHrisTimesheetsParameterUpdatedAfter = typia.createValidate<GetHrisTimesheetsParameterUpdatedAfter>();

export type GetHrisTimesheetsParameterIncludeDeleted = ("true" | "false");
export const isGetHrisTimesheetsParameterIncludeDeleted = typia.createIs<GetHrisTimesheetsParameterIncludeDeleted>();
export const assertGetHrisTimesheetsParameterIncludeDeleted = typia.createAssert<GetHrisTimesheetsParameterIncludeDeleted>();
export const validateGetHrisTimesheetsParameterIncludeDeleted = typia.createValidate<GetHrisTimesheetsParameterIncludeDeleted>();

export type GetHrisTimesheetsParameterIgnoreUnsupportedFilters = ("true" | "false");
export const isGetHrisTimesheetsParameterIgnoreUnsupportedFilters = typia.createIs<GetHrisTimesheetsParameterIgnoreUnsupportedFilters>();
export const assertGetHrisTimesheetsParameterIgnoreUnsupportedFilters = typia.createAssert<GetHrisTimesheetsParameterIgnoreUnsupportedFilters>();
export const validateGetHrisTimesheetsParameterIgnoreUnsupportedFilters = typia.createValidate<GetHrisTimesheetsParameterIgnoreUnsupportedFilters>();

export type GetHrisTimesheetsParameterIds = string;
export const isGetHrisTimesheetsParameterIds = typia.createIs<GetHrisTimesheetsParameterIds>();
export const assertGetHrisTimesheetsParameterIds = typia.createAssert<GetHrisTimesheetsParameterIds>();
export const validateGetHrisTimesheetsParameterIds = typia.createValidate<GetHrisTimesheetsParameterIds>();

export type GetHrisTimesheetsParameterRemoteIds = string;
export const isGetHrisTimesheetsParameterRemoteIds = typia.createIs<GetHrisTimesheetsParameterRemoteIds>();
export const assertGetHrisTimesheetsParameterRemoteIds = typia.createAssert<GetHrisTimesheetsParameterRemoteIds>();
export const validateGetHrisTimesheetsParameterRemoteIds = typia.createValidate<GetHrisTimesheetsParameterRemoteIds>();

export type GetHrisTimesheetsParameterEmployeeId = string;
export const isGetHrisTimesheetsParameterEmployeeId = typia.createIs<GetHrisTimesheetsParameterEmployeeId>();
export const assertGetHrisTimesheetsParameterEmployeeId = typia.createAssert<GetHrisTimesheetsParameterEmployeeId>();
export const validateGetHrisTimesheetsParameterEmployeeId = typia.createValidate<GetHrisTimesheetsParameterEmployeeId>();

export type GetHrisTimesheetsParameterStartedBefore = string;
export const isGetHrisTimesheetsParameterStartedBefore = typia.createIs<GetHrisTimesheetsParameterStartedBefore>();
export const assertGetHrisTimesheetsParameterStartedBefore = typia.createAssert<GetHrisTimesheetsParameterStartedBefore>();
export const validateGetHrisTimesheetsParameterStartedBefore = typia.createValidate<GetHrisTimesheetsParameterStartedBefore>();

export type GetHrisTimesheetsParameterStartedAfter = string;
export const isGetHrisTimesheetsParameterStartedAfter = typia.createIs<GetHrisTimesheetsParameterStartedAfter>();
export const assertGetHrisTimesheetsParameterStartedAfter = typia.createAssert<GetHrisTimesheetsParameterStartedAfter>();
export const validateGetHrisTimesheetsParameterStartedAfter = typia.createValidate<GetHrisTimesheetsParameterStartedAfter>();

export type GetHrisTimesheetsParameterEndedBefore = string;
export const isGetHrisTimesheetsParameterEndedBefore = typia.createIs<GetHrisTimesheetsParameterEndedBefore>();
export const assertGetHrisTimesheetsParameterEndedBefore = typia.createAssert<GetHrisTimesheetsParameterEndedBefore>();
export const validateGetHrisTimesheetsParameterEndedBefore = typia.createValidate<GetHrisTimesheetsParameterEndedBefore>();

export type GetHrisTimesheetsParameterEndedAfter = string;
export const isGetHrisTimesheetsParameterEndedAfter = typia.createIs<GetHrisTimesheetsParameterEndedAfter>();
export const assertGetHrisTimesheetsParameterEndedAfter = typia.createAssert<GetHrisTimesheetsParameterEndedAfter>();
export const validateGetHrisTimesheetsParameterEndedAfter = typia.createValidate<GetHrisTimesheetsParameterEndedAfter>();

export type GetHrisTimesheetsPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, remote_id: (string | null), employee_id: string, started_at: (string | null), ended_at: (string | null), timezone: (string | null), payable_hours: (number | null), unpaid_break_minutes: (number | null), breaks?: (Array<{ ended_at: (string | string), paid: boolean, started_at: (string | string) }> | null), approval_status: (string | null), approved_at: (string | null), comment: (string | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }>, changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null) }> } };
export const isGetHrisTimesheetsPositiveResponse = typia.createIs<GetHrisTimesheetsPositiveResponse>();
export const assertGetHrisTimesheetsPositiveResponse = typia.createAssert<GetHrisTimesheetsPositiveResponse>();
export const validateGetHrisTimesheetsPositiveResponse = typia.createValidate<GetHrisTimesheetsPositiveResponse>();

export type GetHrisPerformanceReviewCyclesParameterCursor = string;
export const isGetHrisPerformanceReviewCyclesParameterCursor = typia.createIs<GetHrisPerformanceReviewCyclesParameterCursor>();
export const assertGetHrisPerformanceReviewCyclesParameterCursor = typia.createAssert<GetHrisPerformanceReviewCyclesParameterCursor>();
export const validateGetHrisPerformanceReviewCyclesParameterCursor = typia.createValidate<GetHrisPerformanceReviewCyclesParameterCursor>();

export type GetHrisPerformanceReviewCyclesParameterPageSize = number;
export const isGetHrisPerformanceReviewCyclesParameterPageSize = typia.createIs<GetHrisPerformanceReviewCyclesParameterPageSize>();
export const assertGetHrisPerformanceReviewCyclesParameterPageSize = typia.createAssert<GetHrisPerformanceReviewCyclesParameterPageSize>();
export const validateGetHrisPerformanceReviewCyclesParameterPageSize = typia.createValidate<GetHrisPerformanceReviewCyclesParameterPageSize>();

export type GetHrisPerformanceReviewCyclesParameterUpdatedAfter = string;
export const isGetHrisPerformanceReviewCyclesParameterUpdatedAfter = typia.createIs<GetHrisPerformanceReviewCyclesParameterUpdatedAfter>();
export const assertGetHrisPerformanceReviewCyclesParameterUpdatedAfter = typia.createAssert<GetHrisPerformanceReviewCyclesParameterUpdatedAfter>();
export const validateGetHrisPerformanceReviewCyclesParameterUpdatedAfter = typia.createValidate<GetHrisPerformanceReviewCyclesParameterUpdatedAfter>();

export type GetHrisPerformanceReviewCyclesParameterIncludeDeleted = ("true" | "false");
export const isGetHrisPerformanceReviewCyclesParameterIncludeDeleted = typia.createIs<GetHrisPerformanceReviewCyclesParameterIncludeDeleted>();
export const assertGetHrisPerformanceReviewCyclesParameterIncludeDeleted = typia.createAssert<GetHrisPerformanceReviewCyclesParameterIncludeDeleted>();
export const validateGetHrisPerformanceReviewCyclesParameterIncludeDeleted = typia.createValidate<GetHrisPerformanceReviewCyclesParameterIncludeDeleted>();

export type GetHrisPerformanceReviewCyclesParameterIgnoreUnsupportedFilters = ("true" | "false");
export const isGetHrisPerformanceReviewCyclesParameterIgnoreUnsupportedFilters = typia.createIs<GetHrisPerformanceReviewCyclesParameterIgnoreUnsupportedFilters>();
export const assertGetHrisPerformanceReviewCyclesParameterIgnoreUnsupportedFilters = typia.createAssert<GetHrisPerformanceReviewCyclesParameterIgnoreUnsupportedFilters>();
export const validateGetHrisPerformanceReviewCyclesParameterIgnoreUnsupportedFilters = typia.createValidate<GetHrisPerformanceReviewCyclesParameterIgnoreUnsupportedFilters>();

export type GetHrisPerformanceReviewCyclesParameterIds = string;
export const isGetHrisPerformanceReviewCyclesParameterIds = typia.createIs<GetHrisPerformanceReviewCyclesParameterIds>();
export const assertGetHrisPerformanceReviewCyclesParameterIds = typia.createAssert<GetHrisPerformanceReviewCyclesParameterIds>();
export const validateGetHrisPerformanceReviewCyclesParameterIds = typia.createValidate<GetHrisPerformanceReviewCyclesParameterIds>();

export type GetHrisPerformanceReviewCyclesParameterRemoteIds = string;
export const isGetHrisPerformanceReviewCyclesParameterRemoteIds = typia.createIs<GetHrisPerformanceReviewCyclesParameterRemoteIds>();
export const assertGetHrisPerformanceReviewCyclesParameterRemoteIds = typia.createAssert<GetHrisPerformanceReviewCyclesParameterRemoteIds>();
export const validateGetHrisPerformanceReviewCyclesParameterRemoteIds = typia.createValidate<GetHrisPerformanceReviewCyclesParameterRemoteIds>();

export type GetHrisPerformanceReviewCyclesPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, remote_id: string, name: (string | null), review_period_start_date: (string | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null) }> } };
export const isGetHrisPerformanceReviewCyclesPositiveResponse = typia.createIs<GetHrisPerformanceReviewCyclesPositiveResponse>();
export const assertGetHrisPerformanceReviewCyclesPositiveResponse = typia.createAssert<GetHrisPerformanceReviewCyclesPositiveResponse>();
export const validateGetHrisPerformanceReviewCyclesPositiveResponse = typia.createValidate<GetHrisPerformanceReviewCyclesPositiveResponse>();

export type GetHrisPerformanceReviewsParameterCursor = string;
export const isGetHrisPerformanceReviewsParameterCursor = typia.createIs<GetHrisPerformanceReviewsParameterCursor>();
export const assertGetHrisPerformanceReviewsParameterCursor = typia.createAssert<GetHrisPerformanceReviewsParameterCursor>();
export const validateGetHrisPerformanceReviewsParameterCursor = typia.createValidate<GetHrisPerformanceReviewsParameterCursor>();

export type GetHrisPerformanceReviewsParameterPageSize = number;
export const isGetHrisPerformanceReviewsParameterPageSize = typia.createIs<GetHrisPerformanceReviewsParameterPageSize>();
export const assertGetHrisPerformanceReviewsParameterPageSize = typia.createAssert<GetHrisPerformanceReviewsParameterPageSize>();
export const validateGetHrisPerformanceReviewsParameterPageSize = typia.createValidate<GetHrisPerformanceReviewsParameterPageSize>();

export type GetHrisPerformanceReviewsParameterUpdatedAfter = string;
export const isGetHrisPerformanceReviewsParameterUpdatedAfter = typia.createIs<GetHrisPerformanceReviewsParameterUpdatedAfter>();
export const assertGetHrisPerformanceReviewsParameterUpdatedAfter = typia.createAssert<GetHrisPerformanceReviewsParameterUpdatedAfter>();
export const validateGetHrisPerformanceReviewsParameterUpdatedAfter = typia.createValidate<GetHrisPerformanceReviewsParameterUpdatedAfter>();

export type GetHrisPerformanceReviewsParameterIncludeDeleted = ("true" | "false");
export const isGetHrisPerformanceReviewsParameterIncludeDeleted = typia.createIs<GetHrisPerformanceReviewsParameterIncludeDeleted>();
export const assertGetHrisPerformanceReviewsParameterIncludeDeleted = typia.createAssert<GetHrisPerformanceReviewsParameterIncludeDeleted>();
export const validateGetHrisPerformanceReviewsParameterIncludeDeleted = typia.createValidate<GetHrisPerformanceReviewsParameterIncludeDeleted>();

export type GetHrisPerformanceReviewsParameterIgnoreUnsupportedFilters = ("true" | "false");
export const isGetHrisPerformanceReviewsParameterIgnoreUnsupportedFilters = typia.createIs<GetHrisPerformanceReviewsParameterIgnoreUnsupportedFilters>();
export const assertGetHrisPerformanceReviewsParameterIgnoreUnsupportedFilters = typia.createAssert<GetHrisPerformanceReviewsParameterIgnoreUnsupportedFilters>();
export const validateGetHrisPerformanceReviewsParameterIgnoreUnsupportedFilters = typia.createValidate<GetHrisPerformanceReviewsParameterIgnoreUnsupportedFilters>();

export type GetHrisPerformanceReviewsParameterIds = string;
export const isGetHrisPerformanceReviewsParameterIds = typia.createIs<GetHrisPerformanceReviewsParameterIds>();
export const assertGetHrisPerformanceReviewsParameterIds = typia.createAssert<GetHrisPerformanceReviewsParameterIds>();
export const validateGetHrisPerformanceReviewsParameterIds = typia.createValidate<GetHrisPerformanceReviewsParameterIds>();

export type GetHrisPerformanceReviewsParameterRemoteIds = string;
export const isGetHrisPerformanceReviewsParameterRemoteIds = typia.createIs<GetHrisPerformanceReviewsParameterRemoteIds>();
export const assertGetHrisPerformanceReviewsParameterRemoteIds = typia.createAssert<GetHrisPerformanceReviewsParameterRemoteIds>();
export const validateGetHrisPerformanceReviewsParameterRemoteIds = typia.createValidate<GetHrisPerformanceReviewsParameterRemoteIds>();

export type GetHrisPerformanceReviewsParameterTypes = string;
export const isGetHrisPerformanceReviewsParameterTypes = typia.createIs<GetHrisPerformanceReviewsParameterTypes>();
export const assertGetHrisPerformanceReviewsParameterTypes = typia.createAssert<GetHrisPerformanceReviewsParameterTypes>();
export const validateGetHrisPerformanceReviewsParameterTypes = typia.createValidate<GetHrisPerformanceReviewsParameterTypes>();

export type GetHrisPerformanceReviewsParameterReviewCycleIds = string;
export const isGetHrisPerformanceReviewsParameterReviewCycleIds = typia.createIs<GetHrisPerformanceReviewsParameterReviewCycleIds>();
export const assertGetHrisPerformanceReviewsParameterReviewCycleIds = typia.createAssert<GetHrisPerformanceReviewsParameterReviewCycleIds>();
export const validateGetHrisPerformanceReviewsParameterReviewCycleIds = typia.createValidate<GetHrisPerformanceReviewsParameterReviewCycleIds>();

export type GetHrisPerformanceReviewsParameterRevieweeIds = string;
export const isGetHrisPerformanceReviewsParameterRevieweeIds = typia.createIs<GetHrisPerformanceReviewsParameterRevieweeIds>();
export const assertGetHrisPerformanceReviewsParameterRevieweeIds = typia.createAssert<GetHrisPerformanceReviewsParameterRevieweeIds>();
export const validateGetHrisPerformanceReviewsParameterRevieweeIds = typia.createValidate<GetHrisPerformanceReviewsParameterRevieweeIds>();

export type GetHrisPerformanceReviewsPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, remote_id: string, type: (("MANAGER" | "DIRECT_REPORT" | "PEER" | "SELF") | null), summary_comment: (string | null), summary_rating?: ({ type: string, min: (number | null), max: (number | null), value: (number | null) } | { type: string, ordered_options: (Array<string> | null), value: (string | null) } | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null), reviewee: { id: string, remote_id: string, first_name: (string | null), last_name: (string | null), display_full_name: (string | null), work_email?: (string | null), remote_deleted_at: (string | null) }, reviewer: ({ id: string, remote_id: string, first_name: (string | null), last_name: (string | null), display_full_name: (string | null), work_email?: (string | null), remote_deleted_at: (string | null) } | null), review_cycle: ({ id: string, remote_id: string, name: (string | null), review_period_start_date: (string | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null) } | null) }> } };
export const isGetHrisPerformanceReviewsPositiveResponse = typia.createIs<GetHrisPerformanceReviewsPositiveResponse>();
export const assertGetHrisPerformanceReviewsPositiveResponse = typia.createAssert<GetHrisPerformanceReviewsPositiveResponse>();
export const validateGetHrisPerformanceReviewsPositiveResponse = typia.createValidate<GetHrisPerformanceReviewsPositiveResponse>();

export type GetHrisSkillsParameterIds = string;
export const isGetHrisSkillsParameterIds = typia.createIs<GetHrisSkillsParameterIds>();
export const assertGetHrisSkillsParameterIds = typia.createAssert<GetHrisSkillsParameterIds>();
export const validateGetHrisSkillsParameterIds = typia.createValidate<GetHrisSkillsParameterIds>();

export type GetHrisSkillsParameterRemoteIds = string;
export const isGetHrisSkillsParameterRemoteIds = typia.createIs<GetHrisSkillsParameterRemoteIds>();
export const assertGetHrisSkillsParameterRemoteIds = typia.createAssert<GetHrisSkillsParameterRemoteIds>();
export const validateGetHrisSkillsParameterRemoteIds = typia.createValidate<GetHrisSkillsParameterRemoteIds>();

export type GetHrisSkillsParameterNameContains = string;
export const isGetHrisSkillsParameterNameContains = typia.createIs<GetHrisSkillsParameterNameContains>();
export const assertGetHrisSkillsParameterNameContains = typia.createAssert<GetHrisSkillsParameterNameContains>();
export const validateGetHrisSkillsParameterNameContains = typia.createValidate<GetHrisSkillsParameterNameContains>();

export type GetHrisSkillsPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, remote_id: string, name: string, description: (string | null), ordered_levels: (Array<string> | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null) }> } };
export const isGetHrisSkillsPositiveResponse = typia.createIs<GetHrisSkillsPositiveResponse>();
export const assertGetHrisSkillsPositiveResponse = typia.createAssert<GetHrisSkillsPositiveResponse>();
export const validateGetHrisSkillsPositiveResponse = typia.createValidate<GetHrisSkillsPositiveResponse>();

export type PostHrisSkillsPositiveResponse = { status: string, data: { id: string, remote_id: string, name: string, description: (string | null), ordered_levels: (Array<string> | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null) } };
export const isPostHrisSkillsPositiveResponse = typia.createIs<PostHrisSkillsPositiveResponse>();
export const assertPostHrisSkillsPositiveResponse = typia.createAssert<PostHrisSkillsPositiveResponse>();
export const validatePostHrisSkillsPositiveResponse = typia.createValidate<PostHrisSkillsPositiveResponse>();

export type PostHrisSkillsRequestBody = { name: string, levels?: Array<string> };
export const isPostHrisSkillsRequestBody = typia.createIs<PostHrisSkillsRequestBody>();
export const assertPostHrisSkillsRequestBody = typia.createAssert<PostHrisSkillsRequestBody>();
export const validatePostHrisSkillsRequestBody = typia.createValidate<PostHrisSkillsRequestBody>();

export type PatchHrisSkillsSkillIdParameterSkillId = string;
export const isPatchHrisSkillsSkillIdParameterSkillId = typia.createIs<PatchHrisSkillsSkillIdParameterSkillId>();
export const assertPatchHrisSkillsSkillIdParameterSkillId = typia.createAssert<PatchHrisSkillsSkillIdParameterSkillId>();
export const validatePatchHrisSkillsSkillIdParameterSkillId = typia.createValidate<PatchHrisSkillsSkillIdParameterSkillId>();

export type PatchHrisSkillsSkillIdPositiveResponse = { status: string, data: { id: string, remote_id: string, name: string, description: (string | null), ordered_levels: (Array<string> | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null) } };
export const isPatchHrisSkillsSkillIdPositiveResponse = typia.createIs<PatchHrisSkillsSkillIdPositiveResponse>();
export const assertPatchHrisSkillsSkillIdPositiveResponse = typia.createAssert<PatchHrisSkillsSkillIdPositiveResponse>();
export const validatePatchHrisSkillsSkillIdPositiveResponse = typia.createValidate<PatchHrisSkillsSkillIdPositiveResponse>();

export type PatchHrisSkillsSkillIdRequestBody = Partial<{ name: string, levels: Array<string> }>;
export const isPatchHrisSkillsSkillIdRequestBody = typia.createIs<PatchHrisSkillsSkillIdRequestBody>();
export const assertPatchHrisSkillsSkillIdRequestBody = typia.createAssert<PatchHrisSkillsSkillIdRequestBody>();
export const validatePatchHrisSkillsSkillIdRequestBody = typia.createValidate<PatchHrisSkillsSkillIdRequestBody>();

export type DeleteHrisSkillsSkillIdParameterSkillId = string;
export const isDeleteHrisSkillsSkillIdParameterSkillId = typia.createIs<DeleteHrisSkillsSkillIdParameterSkillId>();
export const assertDeleteHrisSkillsSkillIdParameterSkillId = typia.createAssert<DeleteHrisSkillsSkillIdParameterSkillId>();
export const validateDeleteHrisSkillsSkillIdParameterSkillId = typia.createValidate<DeleteHrisSkillsSkillIdParameterSkillId>();

export type DeleteHrisSkillsSkillIdPositiveResponse = { status: string, data: { id: string, remote_id: string, name: string, description: (string | null), ordered_levels: (Array<string> | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null) } };
export const isDeleteHrisSkillsSkillIdPositiveResponse = typia.createIs<DeleteHrisSkillsSkillIdPositiveResponse>();
export const assertDeleteHrisSkillsSkillIdPositiveResponse = typia.createAssert<DeleteHrisSkillsSkillIdPositiveResponse>();
export const validateDeleteHrisSkillsSkillIdPositiveResponse = typia.createValidate<DeleteHrisSkillsSkillIdPositiveResponse>();

export type DeleteHrisSkillsSkillIdRequestBody = Partial<{  }>;
export const isDeleteHrisSkillsSkillIdRequestBody = typia.createIs<DeleteHrisSkillsSkillIdRequestBody>();
export const assertDeleteHrisSkillsSkillIdRequestBody = typia.createAssert<DeleteHrisSkillsSkillIdRequestBody>();
export const validateDeleteHrisSkillsSkillIdRequestBody = typia.createValidate<DeleteHrisSkillsSkillIdRequestBody>();

export type GetHrisEmployeeSkillAssignmentsParameterIds = string;
export const isGetHrisEmployeeSkillAssignmentsParameterIds = typia.createIs<GetHrisEmployeeSkillAssignmentsParameterIds>();
export const assertGetHrisEmployeeSkillAssignmentsParameterIds = typia.createAssert<GetHrisEmployeeSkillAssignmentsParameterIds>();
export const validateGetHrisEmployeeSkillAssignmentsParameterIds = typia.createValidate<GetHrisEmployeeSkillAssignmentsParameterIds>();

export type GetHrisEmployeeSkillAssignmentsParameterRemoteIds = string;
export const isGetHrisEmployeeSkillAssignmentsParameterRemoteIds = typia.createIs<GetHrisEmployeeSkillAssignmentsParameterRemoteIds>();
export const assertGetHrisEmployeeSkillAssignmentsParameterRemoteIds = typia.createAssert<GetHrisEmployeeSkillAssignmentsParameterRemoteIds>();
export const validateGetHrisEmployeeSkillAssignmentsParameterRemoteIds = typia.createValidate<GetHrisEmployeeSkillAssignmentsParameterRemoteIds>();

export type GetHrisEmployeeSkillAssignmentsParameterEmployeeIds = string;
export const isGetHrisEmployeeSkillAssignmentsParameterEmployeeIds = typia.createIs<GetHrisEmployeeSkillAssignmentsParameterEmployeeIds>();
export const assertGetHrisEmployeeSkillAssignmentsParameterEmployeeIds = typia.createAssert<GetHrisEmployeeSkillAssignmentsParameterEmployeeIds>();
export const validateGetHrisEmployeeSkillAssignmentsParameterEmployeeIds = typia.createValidate<GetHrisEmployeeSkillAssignmentsParameterEmployeeIds>();

export type GetHrisEmployeeSkillAssignmentsParameterSkillIds = string;
export const isGetHrisEmployeeSkillAssignmentsParameterSkillIds = typia.createIs<GetHrisEmployeeSkillAssignmentsParameterSkillIds>();
export const assertGetHrisEmployeeSkillAssignmentsParameterSkillIds = typia.createAssert<GetHrisEmployeeSkillAssignmentsParameterSkillIds>();
export const validateGetHrisEmployeeSkillAssignmentsParameterSkillIds = typia.createValidate<GetHrisEmployeeSkillAssignmentsParameterSkillIds>();

export type GetHrisEmployeeSkillAssignmentsPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, employee_id: string, skill_id: string, current_level: (string | null) }> } };
export const isGetHrisEmployeeSkillAssignmentsPositiveResponse = typia.createIs<GetHrisEmployeeSkillAssignmentsPositiveResponse>();
export const assertGetHrisEmployeeSkillAssignmentsPositiveResponse = typia.createAssert<GetHrisEmployeeSkillAssignmentsPositiveResponse>();
export const validateGetHrisEmployeeSkillAssignmentsPositiveResponse = typia.createValidate<GetHrisEmployeeSkillAssignmentsPositiveResponse>();

export type PostHrisEmployeeSkillAssignmentsPositiveResponse = { status: string, data: { id: string, employee_id: string, skill_id: string, current_level: (string | null) } };
export const isPostHrisEmployeeSkillAssignmentsPositiveResponse = typia.createIs<PostHrisEmployeeSkillAssignmentsPositiveResponse>();
export const assertPostHrisEmployeeSkillAssignmentsPositiveResponse = typia.createAssert<PostHrisEmployeeSkillAssignmentsPositiveResponse>();
export const validatePostHrisEmployeeSkillAssignmentsPositiveResponse = typia.createValidate<PostHrisEmployeeSkillAssignmentsPositiveResponse>();

export type PostHrisEmployeeSkillAssignmentsRequestBody = { employee_id: string, skill_id: string, current_level?: string };
export const isPostHrisEmployeeSkillAssignmentsRequestBody = typia.createIs<PostHrisEmployeeSkillAssignmentsRequestBody>();
export const assertPostHrisEmployeeSkillAssignmentsRequestBody = typia.createAssert<PostHrisEmployeeSkillAssignmentsRequestBody>();
export const validatePostHrisEmployeeSkillAssignmentsRequestBody = typia.createValidate<PostHrisEmployeeSkillAssignmentsRequestBody>();

export type PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId = string;
export const isPatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId = typia.createIs<PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId>();
export const assertPatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId = typia.createAssert<PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId>();
export const validatePatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId = typia.createValidate<PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId>();

export type PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse = { status: string, data: { id: string, employee_id: string, skill_id: string, current_level: (string | null) } };
export const isPatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse = typia.createIs<PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse>();
export const assertPatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse = typia.createAssert<PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse>();
export const validatePatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse = typia.createValidate<PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse>();

export type PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody = { current_level: (string | null) };
export const isPatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody = typia.createIs<PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody>();
export const assertPatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody = typia.createAssert<PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody>();
export const validatePatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody = typia.createValidate<PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody>();

export type DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId = string;
export const isDeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId = typia.createIs<DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId>();
export const assertDeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId = typia.createAssert<DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId>();
export const validateDeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId = typia.createValidate<DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId>();

export type DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse = { status: string, data: { id: string, employee_id: string, skill_id: string, current_level: (string | null) } };
export const isDeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse = typia.createIs<DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse>();
export const assertDeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse = typia.createAssert<DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse>();
export const validateDeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse = typia.createValidate<DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse>();

export type DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody = Partial<{  }>;
export const isDeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody = typia.createIs<DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody>();
export const assertDeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody = typia.createAssert<DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody>();
export const validateDeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody = typia.createValidate<DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody>();

export type GetHrisStaffingEntitiesParameterCursor = string;
export const isGetHrisStaffingEntitiesParameterCursor = typia.createIs<GetHrisStaffingEntitiesParameterCursor>();
export const assertGetHrisStaffingEntitiesParameterCursor = typia.createAssert<GetHrisStaffingEntitiesParameterCursor>();
export const validateGetHrisStaffingEntitiesParameterCursor = typia.createValidate<GetHrisStaffingEntitiesParameterCursor>();

export type GetHrisStaffingEntitiesParameterPageSize = number;
export const isGetHrisStaffingEntitiesParameterPageSize = typia.createIs<GetHrisStaffingEntitiesParameterPageSize>();
export const assertGetHrisStaffingEntitiesParameterPageSize = typia.createAssert<GetHrisStaffingEntitiesParameterPageSize>();
export const validateGetHrisStaffingEntitiesParameterPageSize = typia.createValidate<GetHrisStaffingEntitiesParameterPageSize>();

export type GetHrisStaffingEntitiesParameterUpdatedAfter = string;
export const isGetHrisStaffingEntitiesParameterUpdatedAfter = typia.createIs<GetHrisStaffingEntitiesParameterUpdatedAfter>();
export const assertGetHrisStaffingEntitiesParameterUpdatedAfter = typia.createAssert<GetHrisStaffingEntitiesParameterUpdatedAfter>();
export const validateGetHrisStaffingEntitiesParameterUpdatedAfter = typia.createValidate<GetHrisStaffingEntitiesParameterUpdatedAfter>();

export type GetHrisStaffingEntitiesParameterIncludeDeleted = ("true" | "false");
export const isGetHrisStaffingEntitiesParameterIncludeDeleted = typia.createIs<GetHrisStaffingEntitiesParameterIncludeDeleted>();
export const assertGetHrisStaffingEntitiesParameterIncludeDeleted = typia.createAssert<GetHrisStaffingEntitiesParameterIncludeDeleted>();
export const validateGetHrisStaffingEntitiesParameterIncludeDeleted = typia.createValidate<GetHrisStaffingEntitiesParameterIncludeDeleted>();

export type GetHrisStaffingEntitiesParameterIgnoreUnsupportedFilters = ("true" | "false");
export const isGetHrisStaffingEntitiesParameterIgnoreUnsupportedFilters = typia.createIs<GetHrisStaffingEntitiesParameterIgnoreUnsupportedFilters>();
export const assertGetHrisStaffingEntitiesParameterIgnoreUnsupportedFilters = typia.createAssert<GetHrisStaffingEntitiesParameterIgnoreUnsupportedFilters>();
export const validateGetHrisStaffingEntitiesParameterIgnoreUnsupportedFilters = typia.createValidate<GetHrisStaffingEntitiesParameterIgnoreUnsupportedFilters>();

export type GetHrisStaffingEntitiesParameterIds = string;
export const isGetHrisStaffingEntitiesParameterIds = typia.createIs<GetHrisStaffingEntitiesParameterIds>();
export const assertGetHrisStaffingEntitiesParameterIds = typia.createAssert<GetHrisStaffingEntitiesParameterIds>();
export const validateGetHrisStaffingEntitiesParameterIds = typia.createValidate<GetHrisStaffingEntitiesParameterIds>();

export type GetHrisStaffingEntitiesParameterRemoteIds = string;
export const isGetHrisStaffingEntitiesParameterRemoteIds = typia.createIs<GetHrisStaffingEntitiesParameterRemoteIds>();
export const assertGetHrisStaffingEntitiesParameterRemoteIds = typia.createAssert<GetHrisStaffingEntitiesParameterRemoteIds>();
export const validateGetHrisStaffingEntitiesParameterRemoteIds = typia.createValidate<GetHrisStaffingEntitiesParameterRemoteIds>();

export type GetHrisStaffingEntitiesParameterModelTypes = string;
export const isGetHrisStaffingEntitiesParameterModelTypes = typia.createIs<GetHrisStaffingEntitiesParameterModelTypes>();
export const assertGetHrisStaffingEntitiesParameterModelTypes = typia.createAssert<GetHrisStaffingEntitiesParameterModelTypes>();
export const validateGetHrisStaffingEntitiesParameterModelTypes = typia.createValidate<GetHrisStaffingEntitiesParameterModelTypes>();

export type GetHrisStaffingEntitiesParameterStatuses = string;
export const isGetHrisStaffingEntitiesParameterStatuses = typia.createIs<GetHrisStaffingEntitiesParameterStatuses>();
export const assertGetHrisStaffingEntitiesParameterStatuses = typia.createAssert<GetHrisStaffingEntitiesParameterStatuses>();
export const validateGetHrisStaffingEntitiesParameterStatuses = typia.createValidate<GetHrisStaffingEntitiesParameterStatuses>();

export type GetHrisStaffingEntitiesPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, remote_id: string, name: (string | null), model_type: (("JOB" | "POSITION" | "REQUISITION") | null), description: (string | null), status: (("OPEN_LIMITED" | "OPEN_UNLIMITED" | "PENDING" | "FROZEN" | "FILLED" | "CLOSED") | null), employment_types?: (Array<{ remote_label: string, unified_type: (("FULL_TIME" | "PART_TIME" | "CONTRACT" | "INTERNSHIP" | "FREELANCE" | "WORKING_STUDENT" | "APPRENTICESHIP" | "TRAINING") | null) }> | null), number_of_openings: (number | null), parent_id: (string | null), remote_url: (string | null), remote_created_at: (string | null), remote_updated_at: (string | null), changed_at: string, remote_deleted_at: (string | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }>, remote_data: (Record<string, unknown> | null), locations: Array<{ id: string, remote_id: (string | null), name: (string | null), type: (string | null) }>, legal_entities: Array<{ id: string, remote_id: (string | null), name: (string | null) }>, groups: Array<{ id: string, remote_id: string, name: (string | null), type: (("DEPARTMENT" | "TEAM" | "COST_CENTER") | null) }> }> } };
export const isGetHrisStaffingEntitiesPositiveResponse = typia.createIs<GetHrisStaffingEntitiesPositiveResponse>();
export const assertGetHrisStaffingEntitiesPositiveResponse = typia.createAssert<GetHrisStaffingEntitiesPositiveResponse>();
export const validateGetHrisStaffingEntitiesPositiveResponse = typia.createValidate<GetHrisStaffingEntitiesPositiveResponse>();

export type GetAtsApplicationsParameterCursor = string;
export const isGetAtsApplicationsParameterCursor = typia.createIs<GetAtsApplicationsParameterCursor>();
export const assertGetAtsApplicationsParameterCursor = typia.createAssert<GetAtsApplicationsParameterCursor>();
export const validateGetAtsApplicationsParameterCursor = typia.createValidate<GetAtsApplicationsParameterCursor>();

export type GetAtsApplicationsParameterPageSize = number;
export const isGetAtsApplicationsParameterPageSize = typia.createIs<GetAtsApplicationsParameterPageSize>();
export const assertGetAtsApplicationsParameterPageSize = typia.createAssert<GetAtsApplicationsParameterPageSize>();
export const validateGetAtsApplicationsParameterPageSize = typia.createValidate<GetAtsApplicationsParameterPageSize>();

export type GetAtsApplicationsParameterUpdatedAfter = string;
export const isGetAtsApplicationsParameterUpdatedAfter = typia.createIs<GetAtsApplicationsParameterUpdatedAfter>();
export const assertGetAtsApplicationsParameterUpdatedAfter = typia.createAssert<GetAtsApplicationsParameterUpdatedAfter>();
export const validateGetAtsApplicationsParameterUpdatedAfter = typia.createValidate<GetAtsApplicationsParameterUpdatedAfter>();

export type GetAtsApplicationsParameterIncludeDeleted = ("true" | "false");
export const isGetAtsApplicationsParameterIncludeDeleted = typia.createIs<GetAtsApplicationsParameterIncludeDeleted>();
export const assertGetAtsApplicationsParameterIncludeDeleted = typia.createAssert<GetAtsApplicationsParameterIncludeDeleted>();
export const validateGetAtsApplicationsParameterIncludeDeleted = typia.createValidate<GetAtsApplicationsParameterIncludeDeleted>();

export type GetAtsApplicationsParameterIgnoreUnsupportedFilters = ("true" | "false");
export const isGetAtsApplicationsParameterIgnoreUnsupportedFilters = typia.createIs<GetAtsApplicationsParameterIgnoreUnsupportedFilters>();
export const assertGetAtsApplicationsParameterIgnoreUnsupportedFilters = typia.createAssert<GetAtsApplicationsParameterIgnoreUnsupportedFilters>();
export const validateGetAtsApplicationsParameterIgnoreUnsupportedFilters = typia.createValidate<GetAtsApplicationsParameterIgnoreUnsupportedFilters>();

export type GetAtsApplicationsParameterIds = string;
export const isGetAtsApplicationsParameterIds = typia.createIs<GetAtsApplicationsParameterIds>();
export const assertGetAtsApplicationsParameterIds = typia.createAssert<GetAtsApplicationsParameterIds>();
export const validateGetAtsApplicationsParameterIds = typia.createValidate<GetAtsApplicationsParameterIds>();

export type GetAtsApplicationsParameterRemoteIds = string;
export const isGetAtsApplicationsParameterRemoteIds = typia.createIs<GetAtsApplicationsParameterRemoteIds>();
export const assertGetAtsApplicationsParameterRemoteIds = typia.createAssert<GetAtsApplicationsParameterRemoteIds>();
export const validateGetAtsApplicationsParameterRemoteIds = typia.createValidate<GetAtsApplicationsParameterRemoteIds>();

export type GetAtsApplicationsParameterOutcome = ("PENDING" | "HIRED" | "DECLINED");
export const isGetAtsApplicationsParameterOutcome = typia.createIs<GetAtsApplicationsParameterOutcome>();
export const assertGetAtsApplicationsParameterOutcome = typia.createAssert<GetAtsApplicationsParameterOutcome>();
export const validateGetAtsApplicationsParameterOutcome = typia.createValidate<GetAtsApplicationsParameterOutcome>();

export type GetAtsApplicationsParameterOutcomes = string;
export const isGetAtsApplicationsParameterOutcomes = typia.createIs<GetAtsApplicationsParameterOutcomes>();
export const assertGetAtsApplicationsParameterOutcomes = typia.createAssert<GetAtsApplicationsParameterOutcomes>();
export const validateGetAtsApplicationsParameterOutcomes = typia.createValidate<GetAtsApplicationsParameterOutcomes>();

export type GetAtsApplicationsParameterJobIds = string;
export const isGetAtsApplicationsParameterJobIds = typia.createIs<GetAtsApplicationsParameterJobIds>();
export const assertGetAtsApplicationsParameterJobIds = typia.createAssert<GetAtsApplicationsParameterJobIds>();
export const validateGetAtsApplicationsParameterJobIds = typia.createValidate<GetAtsApplicationsParameterJobIds>();

export type GetAtsApplicationsParameterJobRemoteIds = string;
export const isGetAtsApplicationsParameterJobRemoteIds = typia.createIs<GetAtsApplicationsParameterJobRemoteIds>();
export const assertGetAtsApplicationsParameterJobRemoteIds = typia.createAssert<GetAtsApplicationsParameterJobRemoteIds>();
export const validateGetAtsApplicationsParameterJobRemoteIds = typia.createValidate<GetAtsApplicationsParameterJobRemoteIds>();

export type GetAtsApplicationsParameterCurrentStageIds = string;
export const isGetAtsApplicationsParameterCurrentStageIds = typia.createIs<GetAtsApplicationsParameterCurrentStageIds>();
export const assertGetAtsApplicationsParameterCurrentStageIds = typia.createAssert<GetAtsApplicationsParameterCurrentStageIds>();
export const validateGetAtsApplicationsParameterCurrentStageIds = typia.createValidate<GetAtsApplicationsParameterCurrentStageIds>();

export type GetAtsApplicationsParameterRemoteCreatedAfter = string;
export const isGetAtsApplicationsParameterRemoteCreatedAfter = typia.createIs<GetAtsApplicationsParameterRemoteCreatedAfter>();
export const assertGetAtsApplicationsParameterRemoteCreatedAfter = typia.createAssert<GetAtsApplicationsParameterRemoteCreatedAfter>();
export const validateGetAtsApplicationsParameterRemoteCreatedAfter = typia.createValidate<GetAtsApplicationsParameterRemoteCreatedAfter>();

export type GetAtsApplicationsPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, remote_id: (string | null), outcome: (("PENDING" | "HIRED" | "DECLINED") | null), rejection_reason_name: (string | null), rejected_at: (string | null), current_stage_id: (string | null), job_id: (string | null), candidate_id: (string | null), screening_question_answers?: (Array<({ answer: { content: (string | null) }, question: { remote_id: (string | null), title: string, type: string } } | { answer: { choice: (string | null) }, question: { remote_id: (string | null), title: string, type: string } } | { answer: Partial<{ choices: Array<string> }>, question: { remote_id: (string | null), title: string, type: string } } | { answer: { checked: (boolean | null) }, question: { remote_id: (string | null), title: string, type: string } } | { answer: { number: (number | null) }, question: { remote_id: (string | null), title: string, type: string } } | { answer: { date: (string | null) }, question: { remote_id: (string | null), title: string, type: string } } | { answer: Partial<{ raw: null }>, question: { remote_id: (string | null), title: string, type: string } })> | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }>, remote_url: (string | null), changed_at: string, remote_deleted_at: (string | null), remote_created_at: (string | null), remote_updated_at: (string | null), remote_data: (Record<string, unknown> | null), candidate: ({ id: string, remote_id: string, first_name: (string | null), last_name: (string | null), email_addresses?: (Array<{ email_address?: (string | null), type: (string | null) }> | null), phone_numbers?: (Array<{ phone_number: string, type?: (string | null) }> | null), social_media?: (Array<Partial<{ link: (string | null), type: (string | null), username: (string | null) }>> | null), source: (string | null), remote_url: (string | null), tags: Array<{ id: string, remote_id: (string | null), name: (string | null) }> } | null), current_stage: ({ id: string, remote_id: (string | null), name: (string | null), index: (number | null) } | null), job: ({ id: string, remote_id: string, name: (string | null) } | null), interviews: Array<{ id: string, remote_id: (string | null), title: (string | null), starting_at: (string | null), ending_at: (string | null), location?: (Partial<{ city: (string | null), country: (string | null), raw: (string | null), state: (string | null), street_1: (string | null), street_2: (string | null), zip_code: (string | null) }> | null), canceled: (boolean | null) }>, offers: Array<{ id: string, remote_id: (string | null), status: (("ACCEPTED" | "DECLINED" | "SENT" | "APPROVED" | "DRAFT" | "ABANDONED") | null) }> }> } };
export const isGetAtsApplicationsPositiveResponse = typia.createIs<GetAtsApplicationsPositiveResponse>();
export const assertGetAtsApplicationsPositiveResponse = typia.createAssert<GetAtsApplicationsPositiveResponse>();
export const validateGetAtsApplicationsPositiveResponse = typia.createValidate<GetAtsApplicationsPositiveResponse>();

export type PutAtsApplicationsApplicationIdStageParameterApplicationId = string;
export const isPutAtsApplicationsApplicationIdStageParameterApplicationId = typia.createIs<PutAtsApplicationsApplicationIdStageParameterApplicationId>();
export const assertPutAtsApplicationsApplicationIdStageParameterApplicationId = typia.createAssert<PutAtsApplicationsApplicationIdStageParameterApplicationId>();
export const validatePutAtsApplicationsApplicationIdStageParameterApplicationId = typia.createValidate<PutAtsApplicationsApplicationIdStageParameterApplicationId>();

export type PutAtsApplicationsApplicationIdStagePositiveResponse = { status: string, data: Record<string, unknown>, warnings: Array<{ message: string }> };
export const isPutAtsApplicationsApplicationIdStagePositiveResponse = typia.createIs<PutAtsApplicationsApplicationIdStagePositiveResponse>();
export const assertPutAtsApplicationsApplicationIdStagePositiveResponse = typia.createAssert<PutAtsApplicationsApplicationIdStagePositiveResponse>();
export const validatePutAtsApplicationsApplicationIdStagePositiveResponse = typia.createValidate<PutAtsApplicationsApplicationIdStagePositiveResponse>();

export type PutAtsApplicationsApplicationIdStageRequestBody = { stage_id: string, remote_fields?: (Partial<{ workday: Partial<{ Workflow_Step_ID: string, Step_Type: ("Next_Step_Reference" | "Disposition_Step_Reference") }> }> & Partial<{ greenhouse: Partial<{ post_headers: Partial<{ "On-Behalf-Of": (string | null) }> }>, workable: Partial<{ on_behalf_of_user_remote_id: string }> }>) };
export const isPutAtsApplicationsApplicationIdStageRequestBody = typia.createIs<PutAtsApplicationsApplicationIdStageRequestBody>();
export const assertPutAtsApplicationsApplicationIdStageRequestBody = typia.createAssert<PutAtsApplicationsApplicationIdStageRequestBody>();
export const validatePutAtsApplicationsApplicationIdStageRequestBody = typia.createValidate<PutAtsApplicationsApplicationIdStageRequestBody>();

export type PostAtsApplicationsApplicationIdResultLinksParameterApplicationId = string;
export const isPostAtsApplicationsApplicationIdResultLinksParameterApplicationId = typia.createIs<PostAtsApplicationsApplicationIdResultLinksParameterApplicationId>();
export const assertPostAtsApplicationsApplicationIdResultLinksParameterApplicationId = typia.createAssert<PostAtsApplicationsApplicationIdResultLinksParameterApplicationId>();
export const validatePostAtsApplicationsApplicationIdResultLinksParameterApplicationId = typia.createValidate<PostAtsApplicationsApplicationIdResultLinksParameterApplicationId>();

export type PostAtsApplicationsApplicationIdResultLinksPositiveResponse = { status: string, data: Record<string, unknown>, warnings: Array<{ message: string }> };
export const isPostAtsApplicationsApplicationIdResultLinksPositiveResponse = typia.createIs<PostAtsApplicationsApplicationIdResultLinksPositiveResponse>();
export const assertPostAtsApplicationsApplicationIdResultLinksPositiveResponse = typia.createAssert<PostAtsApplicationsApplicationIdResultLinksPositiveResponse>();
export const validatePostAtsApplicationsApplicationIdResultLinksPositiveResponse = typia.createValidate<PostAtsApplicationsApplicationIdResultLinksPositiveResponse>();

export type PostAtsApplicationsApplicationIdResultLinksRequestBody = { label: string, url: string, details?: { custom_field_name_prefix: string, attributes: Array<{ key: string, value: string }> }, remote_fields?: (Partial<{ icims: Partial<{ assessment_package_id: string }>, oracle: Partial<{ override_document_category: ("IRC_CANDIDATE_RESUME" | "IRC_CANDIDATE_COVERLETTER" | "MISC" | "IRC_INTERNAL"), multi_post_to_all_current_applications: boolean }> }> & Partial<{ greenhouse: Partial<{ post_headers: Partial<{ "On-Behalf-Of": (string | null) }> }>, workable: Partial<{ on_behalf_of_user_remote_id: string }> }>) };
export const isPostAtsApplicationsApplicationIdResultLinksRequestBody = typia.createIs<PostAtsApplicationsApplicationIdResultLinksRequestBody>();
export const assertPostAtsApplicationsApplicationIdResultLinksRequestBody = typia.createAssert<PostAtsApplicationsApplicationIdResultLinksRequestBody>();
export const validatePostAtsApplicationsApplicationIdResultLinksRequestBody = typia.createValidate<PostAtsApplicationsApplicationIdResultLinksRequestBody>();

export type PostAtsApplicationsApplicationIdNotesParameterApplicationId = string;
export const isPostAtsApplicationsApplicationIdNotesParameterApplicationId = typia.createIs<PostAtsApplicationsApplicationIdNotesParameterApplicationId>();
export const assertPostAtsApplicationsApplicationIdNotesParameterApplicationId = typia.createAssert<PostAtsApplicationsApplicationIdNotesParameterApplicationId>();
export const validatePostAtsApplicationsApplicationIdNotesParameterApplicationId = typia.createValidate<PostAtsApplicationsApplicationIdNotesParameterApplicationId>();

export type PostAtsApplicationsApplicationIdNotesPositiveResponse = { status: string, data: Record<string, unknown>, warnings: Array<{ message: string }> };
export const isPostAtsApplicationsApplicationIdNotesPositiveResponse = typia.createIs<PostAtsApplicationsApplicationIdNotesPositiveResponse>();
export const assertPostAtsApplicationsApplicationIdNotesPositiveResponse = typia.createAssert<PostAtsApplicationsApplicationIdNotesPositiveResponse>();
export const validatePostAtsApplicationsApplicationIdNotesPositiveResponse = typia.createValidate<PostAtsApplicationsApplicationIdNotesPositiveResponse>();

export type PostAtsApplicationsApplicationIdNotesRequestBody = { content: string, content_type: "PLAIN_TEXT", remote_fields?: (Partial<{ teamtailor: Partial<{ user_id: string }>, greenhouse: Partial<{ visibility: ("admin_only" | "private" | "public") }>, recruitee: Partial<{ visibility: unknown, is_json: boolean }>, bullhorn: Partial<{ action: string }>, lever: Partial<{ perform_as: string }> }> & Partial<{ greenhouse: Partial<{ post_headers: Partial<{ "On-Behalf-Of": (string | null) }> }>, workable: Partial<{ on_behalf_of_user_remote_id: string }> }>) };
export const isPostAtsApplicationsApplicationIdNotesRequestBody = typia.createIs<PostAtsApplicationsApplicationIdNotesRequestBody>();
export const assertPostAtsApplicationsApplicationIdNotesRequestBody = typia.createAssert<PostAtsApplicationsApplicationIdNotesRequestBody>();
export const validatePostAtsApplicationsApplicationIdNotesRequestBody = typia.createValidate<PostAtsApplicationsApplicationIdNotesRequestBody>();

export type GetAtsApplicationsApplicationIdAttachmentsParameterApplicationId = string;
export const isGetAtsApplicationsApplicationIdAttachmentsParameterApplicationId = typia.createIs<GetAtsApplicationsApplicationIdAttachmentsParameterApplicationId>();
export const assertGetAtsApplicationsApplicationIdAttachmentsParameterApplicationId = typia.createAssert<GetAtsApplicationsApplicationIdAttachmentsParameterApplicationId>();
export const validateGetAtsApplicationsApplicationIdAttachmentsParameterApplicationId = typia.createValidate<GetAtsApplicationsApplicationIdAttachmentsParameterApplicationId>();

export type GetAtsApplicationsApplicationIdAttachmentsPositiveResponse = { status: string, data: { results: Array<{ type: ("CV" | "COVER_LETTER" | "OTHER"), id: string, remote_id: string, data_url: string, file_name: string, content_type: string, remote_created_at: (string | null), remote_updated_at: (string | null) }> }, warnings: Array<{ message: string }> };
export const isGetAtsApplicationsApplicationIdAttachmentsPositiveResponse = typia.createIs<GetAtsApplicationsApplicationIdAttachmentsPositiveResponse>();
export const assertGetAtsApplicationsApplicationIdAttachmentsPositiveResponse = typia.createAssert<GetAtsApplicationsApplicationIdAttachmentsPositiveResponse>();
export const validateGetAtsApplicationsApplicationIdAttachmentsPositiveResponse = typia.createValidate<GetAtsApplicationsApplicationIdAttachmentsPositiveResponse>();

export type PostAtsApplicationsApplicationIdAttachmentsParameterApplicationId = string;
export const isPostAtsApplicationsApplicationIdAttachmentsParameterApplicationId = typia.createIs<PostAtsApplicationsApplicationIdAttachmentsParameterApplicationId>();
export const assertPostAtsApplicationsApplicationIdAttachmentsParameterApplicationId = typia.createAssert<PostAtsApplicationsApplicationIdAttachmentsParameterApplicationId>();
export const validatePostAtsApplicationsApplicationIdAttachmentsParameterApplicationId = typia.createValidate<PostAtsApplicationsApplicationIdAttachmentsParameterApplicationId>();

export type PostAtsApplicationsApplicationIdAttachmentsPositiveResponse = { status: string, data: Record<string, unknown>, warnings: Array<{ message: string }> };
export const isPostAtsApplicationsApplicationIdAttachmentsPositiveResponse = typia.createIs<PostAtsApplicationsApplicationIdAttachmentsPositiveResponse>();
export const assertPostAtsApplicationsApplicationIdAttachmentsPositiveResponse = typia.createAssert<PostAtsApplicationsApplicationIdAttachmentsPositiveResponse>();
export const validatePostAtsApplicationsApplicationIdAttachmentsPositiveResponse = typia.createValidate<PostAtsApplicationsApplicationIdAttachmentsPositiveResponse>();

export type PostAtsApplicationsApplicationIdAttachmentsRequestBody = { attachment: { name: string, content_type?: string, data_url?: string, data?: string, type: ("CV" | "COVER_LETTER" | "OTHER") }, remote_fields?: (Partial<{ oracle: Partial<{ override_document_category: ("IRC_CANDIDATE_RESUME" | "IRC_CANDIDATE_COVERLETTER" | "MISC" | "IRC_INTERNAL"), multi_post_to_all_current_applications: boolean }> }> & Partial<{ greenhouse: Partial<{ post_headers: Partial<{ "On-Behalf-Of": (string | null) }> }>, workable: Partial<{ on_behalf_of_user_remote_id: string }> }>) };
export const isPostAtsApplicationsApplicationIdAttachmentsRequestBody = typia.createIs<PostAtsApplicationsApplicationIdAttachmentsRequestBody>();
export const assertPostAtsApplicationsApplicationIdAttachmentsRequestBody = typia.createAssert<PostAtsApplicationsApplicationIdAttachmentsRequestBody>();
export const validatePostAtsApplicationsApplicationIdAttachmentsRequestBody = typia.createValidate<PostAtsApplicationsApplicationIdAttachmentsRequestBody>();

export type PostAtsApplicationsApplicationIdRejectParameterApplicationId = string;
export const isPostAtsApplicationsApplicationIdRejectParameterApplicationId = typia.createIs<PostAtsApplicationsApplicationIdRejectParameterApplicationId>();
export const assertPostAtsApplicationsApplicationIdRejectParameterApplicationId = typia.createAssert<PostAtsApplicationsApplicationIdRejectParameterApplicationId>();
export const validatePostAtsApplicationsApplicationIdRejectParameterApplicationId = typia.createValidate<PostAtsApplicationsApplicationIdRejectParameterApplicationId>();

export type PostAtsApplicationsApplicationIdRejectPositiveResponse = { status: string, data: Record<string, unknown>, warnings: Array<{ message: string }> };
export const isPostAtsApplicationsApplicationIdRejectPositiveResponse = typia.createIs<PostAtsApplicationsApplicationIdRejectPositiveResponse>();
export const assertPostAtsApplicationsApplicationIdRejectPositiveResponse = typia.createAssert<PostAtsApplicationsApplicationIdRejectPositiveResponse>();
export const validatePostAtsApplicationsApplicationIdRejectPositiveResponse = typia.createValidate<PostAtsApplicationsApplicationIdRejectPositiveResponse>();

export type PostAtsApplicationsApplicationIdRejectRequestBody = { rejection_reason_id: string, note?: string, remote_fields?: (Partial<{ greenhouse: Partial<{ rejection_email: Record<string, unknown> }>, teamtailor: Partial<{ user_id: string }> }> & Partial<{ greenhouse: Partial<{ post_headers: Partial<{ "On-Behalf-Of": (string | null) }> }>, workable: Partial<{ on_behalf_of_user_remote_id: string }> }>) };
export const isPostAtsApplicationsApplicationIdRejectRequestBody = typia.createIs<PostAtsApplicationsApplicationIdRejectRequestBody>();
export const assertPostAtsApplicationsApplicationIdRejectRequestBody = typia.createAssert<PostAtsApplicationsApplicationIdRejectRequestBody>();
export const validatePostAtsApplicationsApplicationIdRejectRequestBody = typia.createValidate<PostAtsApplicationsApplicationIdRejectRequestBody>();

export type PostAtsApplicationsApplicationIdInterviewsParameterApplicationId = string;
export const isPostAtsApplicationsApplicationIdInterviewsParameterApplicationId = typia.createIs<PostAtsApplicationsApplicationIdInterviewsParameterApplicationId>();
export const assertPostAtsApplicationsApplicationIdInterviewsParameterApplicationId = typia.createAssert<PostAtsApplicationsApplicationIdInterviewsParameterApplicationId>();
export const validatePostAtsApplicationsApplicationIdInterviewsParameterApplicationId = typia.createValidate<PostAtsApplicationsApplicationIdInterviewsParameterApplicationId>();

export type PostAtsApplicationsApplicationIdInterviewsPositiveResponse = { status: string, data: Record<string, unknown> };
export const isPostAtsApplicationsApplicationIdInterviewsPositiveResponse = typia.createIs<PostAtsApplicationsApplicationIdInterviewsPositiveResponse>();
export const assertPostAtsApplicationsApplicationIdInterviewsPositiveResponse = typia.createAssert<PostAtsApplicationsApplicationIdInterviewsPositiveResponse>();
export const validatePostAtsApplicationsApplicationIdInterviewsPositiveResponse = typia.createValidate<PostAtsApplicationsApplicationIdInterviewsPositiveResponse>();

export type PostAtsApplicationsApplicationIdInterviewsRequestBody = { title: string, start_time: string, end_time: string, interviewer_user_ids: Array<string>, organizer_user_id: string, location: { type: ("PHYSICAL" | "VIRTUAL"), address?: string } };
export const isPostAtsApplicationsApplicationIdInterviewsRequestBody = typia.createIs<PostAtsApplicationsApplicationIdInterviewsRequestBody>();
export const assertPostAtsApplicationsApplicationIdInterviewsRequestBody = typia.createAssert<PostAtsApplicationsApplicationIdInterviewsRequestBody>();
export const validatePostAtsApplicationsApplicationIdInterviewsRequestBody = typia.createValidate<PostAtsApplicationsApplicationIdInterviewsRequestBody>();

export type PatchAtsApplicationsApplicationIdInterviewsParameterApplicationId = string;
export const isPatchAtsApplicationsApplicationIdInterviewsParameterApplicationId = typia.createIs<PatchAtsApplicationsApplicationIdInterviewsParameterApplicationId>();
export const assertPatchAtsApplicationsApplicationIdInterviewsParameterApplicationId = typia.createAssert<PatchAtsApplicationsApplicationIdInterviewsParameterApplicationId>();
export const validatePatchAtsApplicationsApplicationIdInterviewsParameterApplicationId = typia.createValidate<PatchAtsApplicationsApplicationIdInterviewsParameterApplicationId>();

export type PatchAtsApplicationsApplicationIdInterviewsPositiveResponse = { status: string, data: Record<string, unknown> };
export const isPatchAtsApplicationsApplicationIdInterviewsPositiveResponse = typia.createIs<PatchAtsApplicationsApplicationIdInterviewsPositiveResponse>();
export const assertPatchAtsApplicationsApplicationIdInterviewsPositiveResponse = typia.createAssert<PatchAtsApplicationsApplicationIdInterviewsPositiveResponse>();
export const validatePatchAtsApplicationsApplicationIdInterviewsPositiveResponse = typia.createValidate<PatchAtsApplicationsApplicationIdInterviewsPositiveResponse>();

export type PatchAtsApplicationsApplicationIdInterviewsRequestBody = { interview_id: string, title: string, start_time: string, end_time: string, interviewer_user_ids: Array<string>, organizer_user_id: string, location: { type: ("PHYSICAL" | "VIRTUAL"), address?: string } };
export const isPatchAtsApplicationsApplicationIdInterviewsRequestBody = typia.createIs<PatchAtsApplicationsApplicationIdInterviewsRequestBody>();
export const assertPatchAtsApplicationsApplicationIdInterviewsRequestBody = typia.createAssert<PatchAtsApplicationsApplicationIdInterviewsRequestBody>();
export const validatePatchAtsApplicationsApplicationIdInterviewsRequestBody = typia.createValidate<PatchAtsApplicationsApplicationIdInterviewsRequestBody>();

export type GetAtsCandidatesParameterCursor = string;
export const isGetAtsCandidatesParameterCursor = typia.createIs<GetAtsCandidatesParameterCursor>();
export const assertGetAtsCandidatesParameterCursor = typia.createAssert<GetAtsCandidatesParameterCursor>();
export const validateGetAtsCandidatesParameterCursor = typia.createValidate<GetAtsCandidatesParameterCursor>();

export type GetAtsCandidatesParameterPageSize = number;
export const isGetAtsCandidatesParameterPageSize = typia.createIs<GetAtsCandidatesParameterPageSize>();
export const assertGetAtsCandidatesParameterPageSize = typia.createAssert<GetAtsCandidatesParameterPageSize>();
export const validateGetAtsCandidatesParameterPageSize = typia.createValidate<GetAtsCandidatesParameterPageSize>();

export type GetAtsCandidatesParameterUpdatedAfter = string;
export const isGetAtsCandidatesParameterUpdatedAfter = typia.createIs<GetAtsCandidatesParameterUpdatedAfter>();
export const assertGetAtsCandidatesParameterUpdatedAfter = typia.createAssert<GetAtsCandidatesParameterUpdatedAfter>();
export const validateGetAtsCandidatesParameterUpdatedAfter = typia.createValidate<GetAtsCandidatesParameterUpdatedAfter>();

export type GetAtsCandidatesParameterIncludeDeleted = ("true" | "false");
export const isGetAtsCandidatesParameterIncludeDeleted = typia.createIs<GetAtsCandidatesParameterIncludeDeleted>();
export const assertGetAtsCandidatesParameterIncludeDeleted = typia.createAssert<GetAtsCandidatesParameterIncludeDeleted>();
export const validateGetAtsCandidatesParameterIncludeDeleted = typia.createValidate<GetAtsCandidatesParameterIncludeDeleted>();

export type GetAtsCandidatesParameterIgnoreUnsupportedFilters = ("true" | "false");
export const isGetAtsCandidatesParameterIgnoreUnsupportedFilters = typia.createIs<GetAtsCandidatesParameterIgnoreUnsupportedFilters>();
export const assertGetAtsCandidatesParameterIgnoreUnsupportedFilters = typia.createAssert<GetAtsCandidatesParameterIgnoreUnsupportedFilters>();
export const validateGetAtsCandidatesParameterIgnoreUnsupportedFilters = typia.createValidate<GetAtsCandidatesParameterIgnoreUnsupportedFilters>();

export type GetAtsCandidatesParameterIds = string;
export const isGetAtsCandidatesParameterIds = typia.createIs<GetAtsCandidatesParameterIds>();
export const assertGetAtsCandidatesParameterIds = typia.createAssert<GetAtsCandidatesParameterIds>();
export const validateGetAtsCandidatesParameterIds = typia.createValidate<GetAtsCandidatesParameterIds>();

export type GetAtsCandidatesParameterRemoteIds = string;
export const isGetAtsCandidatesParameterRemoteIds = typia.createIs<GetAtsCandidatesParameterRemoteIds>();
export const assertGetAtsCandidatesParameterRemoteIds = typia.createAssert<GetAtsCandidatesParameterRemoteIds>();
export const validateGetAtsCandidatesParameterRemoteIds = typia.createValidate<GetAtsCandidatesParameterRemoteIds>();

export type GetAtsCandidatesParameterEmail = string;
export const isGetAtsCandidatesParameterEmail = typia.createIs<GetAtsCandidatesParameterEmail>();
export const assertGetAtsCandidatesParameterEmail = typia.createAssert<GetAtsCandidatesParameterEmail>();
export const validateGetAtsCandidatesParameterEmail = typia.createValidate<GetAtsCandidatesParameterEmail>();

export type GetAtsCandidatesParameterJobIds = string;
export const isGetAtsCandidatesParameterJobIds = typia.createIs<GetAtsCandidatesParameterJobIds>();
export const assertGetAtsCandidatesParameterJobIds = typia.createAssert<GetAtsCandidatesParameterJobIds>();
export const validateGetAtsCandidatesParameterJobIds = typia.createValidate<GetAtsCandidatesParameterJobIds>();

export type GetAtsCandidatesParameterFirstName = string;
export const isGetAtsCandidatesParameterFirstName = typia.createIs<GetAtsCandidatesParameterFirstName>();
export const assertGetAtsCandidatesParameterFirstName = typia.createAssert<GetAtsCandidatesParameterFirstName>();
export const validateGetAtsCandidatesParameterFirstName = typia.createValidate<GetAtsCandidatesParameterFirstName>();

export type GetAtsCandidatesParameterLastName = string;
export const isGetAtsCandidatesParameterLastName = typia.createIs<GetAtsCandidatesParameterLastName>();
export const assertGetAtsCandidatesParameterLastName = typia.createAssert<GetAtsCandidatesParameterLastName>();
export const validateGetAtsCandidatesParameterLastName = typia.createValidate<GetAtsCandidatesParameterLastName>();

export type GetAtsCandidatesPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, remote_id: string, first_name: (string | null), last_name: (string | null), company: (string | null), title: (string | null), confidential: (boolean | null), source: (string | null), phone_numbers?: (Array<{ phone_number: string, type?: (string | null) }> | null), email_addresses?: (Array<{ email_address?: (string | null), type: (string | null) }> | null), social_media?: (Array<Partial<{ link: (string | null), type: (string | null), username: (string | null) }>> | null), location?: (Partial<{ city: (string | null), country: (string | null), raw: (string | null), state: (string | null), street_1: (string | null), street_2: (string | null), zip_code: (string | null) }> | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }>, remote_url: (string | null), remote_created_at: (string | null), remote_updated_at: (string | null), remote_data: (Record<string, unknown> | null), changed_at: string, remote_deleted_at: (string | null), applications: Array<{ id: string, remote_id: (string | null), outcome: (("PENDING" | "HIRED" | "DECLINED") | null), rejection_reason_name: (string | null), rejected_at: (string | null), remote_url: (string | null), changed_at: string, remote_created_at: (string | null), remote_updated_at: (string | null), current_stage: ({ id: string, name: (string | null), remote_id: (string | null), index: (number | null) } | null), job: ({ id: string, name: (string | null), remote_id: string } | null) }>, tags: Array<{ id: string, name: (string | null), remote_id: (string | null) }> }> } };
export const isGetAtsCandidatesPositiveResponse = typia.createIs<GetAtsCandidatesPositiveResponse>();
export const assertGetAtsCandidatesPositiveResponse = typia.createAssert<GetAtsCandidatesPositiveResponse>();
export const validateGetAtsCandidatesPositiveResponse = typia.createValidate<GetAtsCandidatesPositiveResponse>();

export type PostAtsCandidatesPositiveResponse = { status: string, data: { id: string, remote_id: string, first_name: (string | null), last_name: (string | null), company: (string | null), title: (string | null), confidential: (boolean | null), source: (string | null), phone_numbers?: (Array<{ phone_number: string, type?: (string | null) }> | null), email_addresses?: (Array<{ email_address?: (string | null), type: (string | null) }> | null), social_media?: (Array<Partial<{ link: (string | null), type: (string | null), username: (string | null) }>> | null), location?: (Partial<{ city: (string | null), country: (string | null), raw: (string | null), state: (string | null), street_1: (string | null), street_2: (string | null), zip_code: (string | null) }> | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }>, remote_url: (string | null), remote_created_at: (string | null), remote_updated_at: (string | null), remote_data: (Record<string, unknown> | null), changed_at: string, remote_deleted_at: (string | null), applications: Array<{ id: string, remote_id: (string | null), outcome: (("PENDING" | "HIRED" | "DECLINED") | null), rejection_reason_name: (string | null), rejected_at: (string | null), remote_url: (string | null), changed_at: string, remote_created_at: (string | null), remote_updated_at: (string | null), current_stage: ({ id: string, name: (string | null), remote_id: (string | null), index: (number | null) } | null), job: ({ id: string, name: (string | null), remote_id: string } | null) }>, tags: Array<{ id: string, name: (string | null), remote_id: (string | null) }> }, warnings: Array<{ message: string }> };
export const isPostAtsCandidatesPositiveResponse = typia.createIs<PostAtsCandidatesPositiveResponse>();
export const assertPostAtsCandidatesPositiveResponse = typia.createAssert<PostAtsCandidatesPositiveResponse>();
export const validatePostAtsCandidatesPositiveResponse = typia.createValidate<PostAtsCandidatesPositiveResponse>();

export type PostAtsCandidatesRequestBody = { candidate: { first_name: string, last_name: string, email_address: string, additional_email_addresses?: Array<{ type: ("PERSONAL" | "WORK" | "OTHER"), email_address: string }>, company?: string, title?: string, phone_number?: string, additional_phone_numbers?: Array<{ type: ("PERSONAL" | "WORK" | "OTHER"), phone_number: string }>, location?: { city?: string, country: string, state?: string, street_1?: string, zip_code?: string }, gender?: ("MALE" | "FEMALE" | "OTHER"), availability_date?: string, salary_expectations?: { period: ("MONTH" | "YEAR"), amount: number }, social_links?: Array<{ url: string }> }, application: { job_id: string, stage_id?: string }, screening_question_answers?: Array<{ question_id: string, answer: (string | boolean | number | Array<string> | string | { name: string, content_type?: string, data_url?: string, data?: string }) }>, attachments?: Array<{ name: string, content_type?: string, data_url?: string, data?: string, type: ("CV" | "COVER_LETTER" | "OTHER") }>, source?: Partial<{ name: string, unified_key: string, id: string }>, sourced_by?: { user_id: string }, gdpr_consent?: Partial<{ expires_at: string, given: boolean }>, remote_fields?: (Partial<{ successfactors: Partial<{ Candidate: Record<string, unknown>, JobApplication: Record<string, unknown>, copyJobApplicationAttachments: boolean, update_existing_candidate: (boolean | null) }>, personio: Partial<{ application: Record<string, unknown> }>, talentsoft: Partial<{ applicant: Record<string, unknown>, application: Record<string, unknown> }>, teamtailor: Partial<{ candidate: Record<string, unknown>, application: Partial<{ attributes: Record<string, unknown> }> }>, greenhouse: Partial<{ candidate: Record<string, unknown>, application: Record<string, unknown> }>, lever: Partial<{ candidate: Record<string, unknown> }>, workable: Partial<{ candidate: Record<string, unknown> }>, workday: Partial<{ Candidate_Data: Partial<{ Name_Detail_Data: Partial<{ Middle_Name: string, Social_Suffix_Reference: { Predefined_Name_Component_ID: string } }>, Language_Reference: { WID: string }, Job_Application_Data: Partial<{ Job_Applied_To_Data: Partial<{ Global_Personal_Information_Data: Partial<{ Date_of_Birth: string }> }>, Resume_Data: Partial<{ Education_Data: Array<Partial<{ School_Name: string, First_Year_Attended: number, Last_Year_Attended: number, Field_of_Study_Reference: { WID: string }, Degree_Reference: { WID: string }, Grade_Average: string }>>, Skill_Data: Array<Partial<{ Skill_Name: string }>>, Language_Data: Array<Partial<{ Language_Reference: Partial<{ WID: string }>, Language: { Native?: boolean, Language_Ability: Array<Partial<{ Language_Ability_Data: Partial<{ Language_Proficiency_Reference: { WID: string }, Language_Ability_Type_Reference: { WID: string } }> }>> } }>>, Experience_Data: Array<{ Company_Name: string, Title: string, Location?: string, Start_Date: string, End_Date?: string, Currently_Work_Here?: boolean, Description?: string }> }> }>, Contact_Data: Partial<{ Location_Data: Partial<{ Address_Line_1: string, Address_Line_2: string, Region_Subdivision_1: string, Country_Region_Reference: { Country_Region_ID: string }, Country_City_Reference: { WID: string } }> }>, Worker_Reference: Partial<{ WID: string, Employee_ID: string }> }>, Override_Source_Reference_WID: string }>, zohorecruit: Partial<{ candidate: Record<string, unknown> }>, bullhorn: Partial<{ candidate: Record<string, unknown>, job_submission: Record<string, unknown> }>, smartrecruiters: Partial<{ candidate_with_questions: Record<string, unknown>, candidate_without_questions: Record<string, unknown>, candidate: Record<string, unknown>, consent_decisions: Partial<{ SINGLE: boolean, SMART_RECRUIT: boolean, SMART_CRM: boolean, SMART_MESSAGE_SMS: boolean, SMART_MESSAGE_WHATSAPP: boolean }> }>, talentadore: Partial<{ applications: Record<string, unknown> }>, guidecom: Partial<{ candidate: Record<string, unknown> }>, dvinci: Partial<{ application: Record<string, unknown>, candidate: Record<string, unknown> }>, hrworks: Partial<{ jobApplication: Record<string, unknown> }>, jobylon: Partial<{ application: Partial<{ message: string }> }>, avature: Partial<{ workflow: Partial<{ step: { id: number } }> }>, recruitee: Partial<{ candidate: Partial<{ cover_letter_text: string }> }>, rexx: Partial<{ candidate: Record<string, unknown> }>, umantis: Partial<{ person: Record<string, unknown> }>, piloga: Partial<{ candidate: Partial<{ street: string }> }>, pinpoint: Partial<{ candidate: Record<string, unknown> }>, covetorest: Partial<{ candidate: Partial<{ mandant: number }> }> }> & Partial<{ greenhouse: Partial<{ post_headers: Partial<{ "On-Behalf-Of": (string | null) }> }>, workable: Partial<{ on_behalf_of_user_remote_id: string }> }>) };
export const isPostAtsCandidatesRequestBody = typia.createIs<PostAtsCandidatesRequestBody>();
export const assertPostAtsCandidatesRequestBody = typia.createAssert<PostAtsCandidatesRequestBody>();
export const validatePostAtsCandidatesRequestBody = typia.createValidate<PostAtsCandidatesRequestBody>();

export type GetAtsCandidatesCandidateIdAttachmentsParameterCandidateId = string;
export const isGetAtsCandidatesCandidateIdAttachmentsParameterCandidateId = typia.createIs<GetAtsCandidatesCandidateIdAttachmentsParameterCandidateId>();
export const assertGetAtsCandidatesCandidateIdAttachmentsParameterCandidateId = typia.createAssert<GetAtsCandidatesCandidateIdAttachmentsParameterCandidateId>();
export const validateGetAtsCandidatesCandidateIdAttachmentsParameterCandidateId = typia.createValidate<GetAtsCandidatesCandidateIdAttachmentsParameterCandidateId>();

export type GetAtsCandidatesCandidateIdAttachmentsPositiveResponse = { status: string, data: { results: Array<{ id: string, application_id: (string | null), candidate_id: string, type: ("CV" | "COVER_LETTER" | "OTHER"), remote_id: string, data_url: string, file_name: string, content_type: string, remote_created_at: (string | null), remote_updated_at: (string | null) }> }, warnings: Array<{ message: string }> };
export const isGetAtsCandidatesCandidateIdAttachmentsPositiveResponse = typia.createIs<GetAtsCandidatesCandidateIdAttachmentsPositiveResponse>();
export const assertGetAtsCandidatesCandidateIdAttachmentsPositiveResponse = typia.createAssert<GetAtsCandidatesCandidateIdAttachmentsPositiveResponse>();
export const validateGetAtsCandidatesCandidateIdAttachmentsPositiveResponse = typia.createValidate<GetAtsCandidatesCandidateIdAttachmentsPositiveResponse>();

export type PostAtsCandidatesCandidateIdAttachmentsParameterCandidateId = string;
export const isPostAtsCandidatesCandidateIdAttachmentsParameterCandidateId = typia.createIs<PostAtsCandidatesCandidateIdAttachmentsParameterCandidateId>();
export const assertPostAtsCandidatesCandidateIdAttachmentsParameterCandidateId = typia.createAssert<PostAtsCandidatesCandidateIdAttachmentsParameterCandidateId>();
export const validatePostAtsCandidatesCandidateIdAttachmentsParameterCandidateId = typia.createValidate<PostAtsCandidatesCandidateIdAttachmentsParameterCandidateId>();

export type PostAtsCandidatesCandidateIdAttachmentsPositiveResponse = { status: string, data: Record<string, unknown>, warnings: Array<{ message: string }> };
export const isPostAtsCandidatesCandidateIdAttachmentsPositiveResponse = typia.createIs<PostAtsCandidatesCandidateIdAttachmentsPositiveResponse>();
export const assertPostAtsCandidatesCandidateIdAttachmentsPositiveResponse = typia.createAssert<PostAtsCandidatesCandidateIdAttachmentsPositiveResponse>();
export const validatePostAtsCandidatesCandidateIdAttachmentsPositiveResponse = typia.createValidate<PostAtsCandidatesCandidateIdAttachmentsPositiveResponse>();

export type PostAtsCandidatesCandidateIdAttachmentsRequestBody = { attachment: { name: string, content_type?: string, data_url?: string, data?: string, type: ("CV" | "COVER_LETTER" | "OTHER") }, remote_fields?: Partial<{ greenhouse: Partial<{ post_headers: Partial<{ "On-Behalf-Of": (string | null) }> }>, workable: Partial<{ on_behalf_of_user_remote_id: string }> }> };
export const isPostAtsCandidatesCandidateIdAttachmentsRequestBody = typia.createIs<PostAtsCandidatesCandidateIdAttachmentsRequestBody>();
export const assertPostAtsCandidatesCandidateIdAttachmentsRequestBody = typia.createAssert<PostAtsCandidatesCandidateIdAttachmentsRequestBody>();
export const validatePostAtsCandidatesCandidateIdAttachmentsRequestBody = typia.createValidate<PostAtsCandidatesCandidateIdAttachmentsRequestBody>();

export type PostAtsCandidatesCandidateIdResultLinksParameterCandidateId = string;
export const isPostAtsCandidatesCandidateIdResultLinksParameterCandidateId = typia.createIs<PostAtsCandidatesCandidateIdResultLinksParameterCandidateId>();
export const assertPostAtsCandidatesCandidateIdResultLinksParameterCandidateId = typia.createAssert<PostAtsCandidatesCandidateIdResultLinksParameterCandidateId>();
export const validatePostAtsCandidatesCandidateIdResultLinksParameterCandidateId = typia.createValidate<PostAtsCandidatesCandidateIdResultLinksParameterCandidateId>();

export type PostAtsCandidatesCandidateIdResultLinksPositiveResponse = { status: string, data: Record<string, unknown>, warnings: Array<{ message: string }> };
export const isPostAtsCandidatesCandidateIdResultLinksPositiveResponse = typia.createIs<PostAtsCandidatesCandidateIdResultLinksPositiveResponse>();
export const assertPostAtsCandidatesCandidateIdResultLinksPositiveResponse = typia.createAssert<PostAtsCandidatesCandidateIdResultLinksPositiveResponse>();
export const validatePostAtsCandidatesCandidateIdResultLinksPositiveResponse = typia.createValidate<PostAtsCandidatesCandidateIdResultLinksPositiveResponse>();

export type PostAtsCandidatesCandidateIdResultLinksRequestBody = { label: string, url: string, details?: { custom_field_name_prefix: string, attributes: Array<{ key: string, value: string }> }, remote_fields?: (Partial<{ icims: Partial<{ assessment_package_id: string }>, oracle: Partial<{ override_document_category: ("IRC_CANDIDATE_RESUME" | "IRC_CANDIDATE_COVERLETTER" | "MISC" | "IRC_INTERNAL"), multi_post_to_all_current_applications: boolean }> }> & Partial<{ greenhouse: Partial<{ post_headers: Partial<{ "On-Behalf-Of": (string | null) }> }>, workable: Partial<{ on_behalf_of_user_remote_id: string }> }>) };
export const isPostAtsCandidatesCandidateIdResultLinksRequestBody = typia.createIs<PostAtsCandidatesCandidateIdResultLinksRequestBody>();
export const assertPostAtsCandidatesCandidateIdResultLinksRequestBody = typia.createAssert<PostAtsCandidatesCandidateIdResultLinksRequestBody>();
export const validatePostAtsCandidatesCandidateIdResultLinksRequestBody = typia.createValidate<PostAtsCandidatesCandidateIdResultLinksRequestBody>();

export type PostAtsCandidatesCandidateIdTagsParameterCandidateId = string;
export const isPostAtsCandidatesCandidateIdTagsParameterCandidateId = typia.createIs<PostAtsCandidatesCandidateIdTagsParameterCandidateId>();
export const assertPostAtsCandidatesCandidateIdTagsParameterCandidateId = typia.createAssert<PostAtsCandidatesCandidateIdTagsParameterCandidateId>();
export const validatePostAtsCandidatesCandidateIdTagsParameterCandidateId = typia.createValidate<PostAtsCandidatesCandidateIdTagsParameterCandidateId>();

export type PostAtsCandidatesCandidateIdTagsPositiveResponse = { status: string, data: Record<string, unknown>, warnings: Array<{ message: string }> };
export const isPostAtsCandidatesCandidateIdTagsPositiveResponse = typia.createIs<PostAtsCandidatesCandidateIdTagsPositiveResponse>();
export const assertPostAtsCandidatesCandidateIdTagsPositiveResponse = typia.createAssert<PostAtsCandidatesCandidateIdTagsPositiveResponse>();
export const validatePostAtsCandidatesCandidateIdTagsPositiveResponse = typia.createValidate<PostAtsCandidatesCandidateIdTagsPositiveResponse>();

export type PostAtsCandidatesCandidateIdTagsRequestBody = { tag: { name: string }, remote_fields?: Partial<{ greenhouse: Partial<{ post_headers: Partial<{ "On-Behalf-Of": (string | null) }> }>, workable: Partial<{ on_behalf_of_user_remote_id: string }> }> };
export const isPostAtsCandidatesCandidateIdTagsRequestBody = typia.createIs<PostAtsCandidatesCandidateIdTagsRequestBody>();
export const assertPostAtsCandidatesCandidateIdTagsRequestBody = typia.createAssert<PostAtsCandidatesCandidateIdTagsRequestBody>();
export const validatePostAtsCandidatesCandidateIdTagsRequestBody = typia.createValidate<PostAtsCandidatesCandidateIdTagsRequestBody>();

export type DeleteAtsCandidatesCandidateIdTagsParameterCandidateId = string;
export const isDeleteAtsCandidatesCandidateIdTagsParameterCandidateId = typia.createIs<DeleteAtsCandidatesCandidateIdTagsParameterCandidateId>();
export const assertDeleteAtsCandidatesCandidateIdTagsParameterCandidateId = typia.createAssert<DeleteAtsCandidatesCandidateIdTagsParameterCandidateId>();
export const validateDeleteAtsCandidatesCandidateIdTagsParameterCandidateId = typia.createValidate<DeleteAtsCandidatesCandidateIdTagsParameterCandidateId>();

export type DeleteAtsCandidatesCandidateIdTagsPositiveResponse = { status: string, data: Record<string, unknown>, warnings: Array<{ message: string }> };
export const isDeleteAtsCandidatesCandidateIdTagsPositiveResponse = typia.createIs<DeleteAtsCandidatesCandidateIdTagsPositiveResponse>();
export const assertDeleteAtsCandidatesCandidateIdTagsPositiveResponse = typia.createAssert<DeleteAtsCandidatesCandidateIdTagsPositiveResponse>();
export const validateDeleteAtsCandidatesCandidateIdTagsPositiveResponse = typia.createValidate<DeleteAtsCandidatesCandidateIdTagsPositiveResponse>();

export type DeleteAtsCandidatesCandidateIdTagsRequestBody = { tag: { name: string }, remote_fields?: Partial<{ greenhouse: Partial<{ post_headers: Partial<{ "On-Behalf-Of": (string | null) }> }>, workable: Partial<{ on_behalf_of_user_remote_id: string }> }> };
export const isDeleteAtsCandidatesCandidateIdTagsRequestBody = typia.createIs<DeleteAtsCandidatesCandidateIdTagsRequestBody>();
export const assertDeleteAtsCandidatesCandidateIdTagsRequestBody = typia.createAssert<DeleteAtsCandidatesCandidateIdTagsRequestBody>();
export const validateDeleteAtsCandidatesCandidateIdTagsRequestBody = typia.createValidate<DeleteAtsCandidatesCandidateIdTagsRequestBody>();

export type GetAtsTagsParameterCursor = string;
export const isGetAtsTagsParameterCursor = typia.createIs<GetAtsTagsParameterCursor>();
export const assertGetAtsTagsParameterCursor = typia.createAssert<GetAtsTagsParameterCursor>();
export const validateGetAtsTagsParameterCursor = typia.createValidate<GetAtsTagsParameterCursor>();

export type GetAtsTagsParameterPageSize = number;
export const isGetAtsTagsParameterPageSize = typia.createIs<GetAtsTagsParameterPageSize>();
export const assertGetAtsTagsParameterPageSize = typia.createAssert<GetAtsTagsParameterPageSize>();
export const validateGetAtsTagsParameterPageSize = typia.createValidate<GetAtsTagsParameterPageSize>();

export type GetAtsTagsParameterUpdatedAfter = string;
export const isGetAtsTagsParameterUpdatedAfter = typia.createIs<GetAtsTagsParameterUpdatedAfter>();
export const assertGetAtsTagsParameterUpdatedAfter = typia.createAssert<GetAtsTagsParameterUpdatedAfter>();
export const validateGetAtsTagsParameterUpdatedAfter = typia.createValidate<GetAtsTagsParameterUpdatedAfter>();

export type GetAtsTagsParameterIncludeDeleted = ("true" | "false");
export const isGetAtsTagsParameterIncludeDeleted = typia.createIs<GetAtsTagsParameterIncludeDeleted>();
export const assertGetAtsTagsParameterIncludeDeleted = typia.createAssert<GetAtsTagsParameterIncludeDeleted>();
export const validateGetAtsTagsParameterIncludeDeleted = typia.createValidate<GetAtsTagsParameterIncludeDeleted>();

export type GetAtsTagsParameterIgnoreUnsupportedFilters = ("true" | "false");
export const isGetAtsTagsParameterIgnoreUnsupportedFilters = typia.createIs<GetAtsTagsParameterIgnoreUnsupportedFilters>();
export const assertGetAtsTagsParameterIgnoreUnsupportedFilters = typia.createAssert<GetAtsTagsParameterIgnoreUnsupportedFilters>();
export const validateGetAtsTagsParameterIgnoreUnsupportedFilters = typia.createValidate<GetAtsTagsParameterIgnoreUnsupportedFilters>();

export type GetAtsTagsParameterIds = string;
export const isGetAtsTagsParameterIds = typia.createIs<GetAtsTagsParameterIds>();
export const assertGetAtsTagsParameterIds = typia.createAssert<GetAtsTagsParameterIds>();
export const validateGetAtsTagsParameterIds = typia.createValidate<GetAtsTagsParameterIds>();

export type GetAtsTagsParameterRemoteIds = string;
export const isGetAtsTagsParameterRemoteIds = typia.createIs<GetAtsTagsParameterRemoteIds>();
export const assertGetAtsTagsParameterRemoteIds = typia.createAssert<GetAtsTagsParameterRemoteIds>();
export const validateGetAtsTagsParameterRemoteIds = typia.createValidate<GetAtsTagsParameterRemoteIds>();

export type GetAtsTagsPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, remote_id: (string | null), name: (string | null), remote_data: (Record<string, unknown> | null), changed_at: string, remote_deleted_at: (string | null) }> } };
export const isGetAtsTagsPositiveResponse = typia.createIs<GetAtsTagsPositiveResponse>();
export const assertGetAtsTagsPositiveResponse = typia.createAssert<GetAtsTagsPositiveResponse>();
export const validateGetAtsTagsPositiveResponse = typia.createValidate<GetAtsTagsPositiveResponse>();

export type GetAtsApplicationStagesParameterCursor = string;
export const isGetAtsApplicationStagesParameterCursor = typia.createIs<GetAtsApplicationStagesParameterCursor>();
export const assertGetAtsApplicationStagesParameterCursor = typia.createAssert<GetAtsApplicationStagesParameterCursor>();
export const validateGetAtsApplicationStagesParameterCursor = typia.createValidate<GetAtsApplicationStagesParameterCursor>();

export type GetAtsApplicationStagesParameterPageSize = number;
export const isGetAtsApplicationStagesParameterPageSize = typia.createIs<GetAtsApplicationStagesParameterPageSize>();
export const assertGetAtsApplicationStagesParameterPageSize = typia.createAssert<GetAtsApplicationStagesParameterPageSize>();
export const validateGetAtsApplicationStagesParameterPageSize = typia.createValidate<GetAtsApplicationStagesParameterPageSize>();

export type GetAtsApplicationStagesParameterUpdatedAfter = string;
export const isGetAtsApplicationStagesParameterUpdatedAfter = typia.createIs<GetAtsApplicationStagesParameterUpdatedAfter>();
export const assertGetAtsApplicationStagesParameterUpdatedAfter = typia.createAssert<GetAtsApplicationStagesParameterUpdatedAfter>();
export const validateGetAtsApplicationStagesParameterUpdatedAfter = typia.createValidate<GetAtsApplicationStagesParameterUpdatedAfter>();

export type GetAtsApplicationStagesParameterIncludeDeleted = ("true" | "false");
export const isGetAtsApplicationStagesParameterIncludeDeleted = typia.createIs<GetAtsApplicationStagesParameterIncludeDeleted>();
export const assertGetAtsApplicationStagesParameterIncludeDeleted = typia.createAssert<GetAtsApplicationStagesParameterIncludeDeleted>();
export const validateGetAtsApplicationStagesParameterIncludeDeleted = typia.createValidate<GetAtsApplicationStagesParameterIncludeDeleted>();

export type GetAtsApplicationStagesParameterIgnoreUnsupportedFilters = ("true" | "false");
export const isGetAtsApplicationStagesParameterIgnoreUnsupportedFilters = typia.createIs<GetAtsApplicationStagesParameterIgnoreUnsupportedFilters>();
export const assertGetAtsApplicationStagesParameterIgnoreUnsupportedFilters = typia.createAssert<GetAtsApplicationStagesParameterIgnoreUnsupportedFilters>();
export const validateGetAtsApplicationStagesParameterIgnoreUnsupportedFilters = typia.createValidate<GetAtsApplicationStagesParameterIgnoreUnsupportedFilters>();

export type GetAtsApplicationStagesParameterIds = string;
export const isGetAtsApplicationStagesParameterIds = typia.createIs<GetAtsApplicationStagesParameterIds>();
export const assertGetAtsApplicationStagesParameterIds = typia.createAssert<GetAtsApplicationStagesParameterIds>();
export const validateGetAtsApplicationStagesParameterIds = typia.createValidate<GetAtsApplicationStagesParameterIds>();

export type GetAtsApplicationStagesParameterRemoteIds = string;
export const isGetAtsApplicationStagesParameterRemoteIds = typia.createIs<GetAtsApplicationStagesParameterRemoteIds>();
export const assertGetAtsApplicationStagesParameterRemoteIds = typia.createAssert<GetAtsApplicationStagesParameterRemoteIds>();
export const validateGetAtsApplicationStagesParameterRemoteIds = typia.createValidate<GetAtsApplicationStagesParameterRemoteIds>();

export type GetAtsApplicationStagesPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, remote_id: (string | null), name: (string | null), remote_data: (Record<string, unknown> | null), changed_at: string, remote_deleted_at: (string | null) }> } };
export const isGetAtsApplicationStagesPositiveResponse = typia.createIs<GetAtsApplicationStagesPositiveResponse>();
export const assertGetAtsApplicationStagesPositiveResponse = typia.createAssert<GetAtsApplicationStagesPositiveResponse>();
export const validateGetAtsApplicationStagesPositiveResponse = typia.createValidate<GetAtsApplicationStagesPositiveResponse>();

export type GetAtsJobsParameterCursor = string;
export const isGetAtsJobsParameterCursor = typia.createIs<GetAtsJobsParameterCursor>();
export const assertGetAtsJobsParameterCursor = typia.createAssert<GetAtsJobsParameterCursor>();
export const validateGetAtsJobsParameterCursor = typia.createValidate<GetAtsJobsParameterCursor>();

export type GetAtsJobsParameterPageSize = number;
export const isGetAtsJobsParameterPageSize = typia.createIs<GetAtsJobsParameterPageSize>();
export const assertGetAtsJobsParameterPageSize = typia.createAssert<GetAtsJobsParameterPageSize>();
export const validateGetAtsJobsParameterPageSize = typia.createValidate<GetAtsJobsParameterPageSize>();

export type GetAtsJobsParameterUpdatedAfter = string;
export const isGetAtsJobsParameterUpdatedAfter = typia.createIs<GetAtsJobsParameterUpdatedAfter>();
export const assertGetAtsJobsParameterUpdatedAfter = typia.createAssert<GetAtsJobsParameterUpdatedAfter>();
export const validateGetAtsJobsParameterUpdatedAfter = typia.createValidate<GetAtsJobsParameterUpdatedAfter>();

export type GetAtsJobsParameterIncludeDeleted = ("true" | "false");
export const isGetAtsJobsParameterIncludeDeleted = typia.createIs<GetAtsJobsParameterIncludeDeleted>();
export const assertGetAtsJobsParameterIncludeDeleted = typia.createAssert<GetAtsJobsParameterIncludeDeleted>();
export const validateGetAtsJobsParameterIncludeDeleted = typia.createValidate<GetAtsJobsParameterIncludeDeleted>();

export type GetAtsJobsParameterIgnoreUnsupportedFilters = ("true" | "false");
export const isGetAtsJobsParameterIgnoreUnsupportedFilters = typia.createIs<GetAtsJobsParameterIgnoreUnsupportedFilters>();
export const assertGetAtsJobsParameterIgnoreUnsupportedFilters = typia.createAssert<GetAtsJobsParameterIgnoreUnsupportedFilters>();
export const validateGetAtsJobsParameterIgnoreUnsupportedFilters = typia.createValidate<GetAtsJobsParameterIgnoreUnsupportedFilters>();

export type GetAtsJobsParameterIds = string;
export const isGetAtsJobsParameterIds = typia.createIs<GetAtsJobsParameterIds>();
export const assertGetAtsJobsParameterIds = typia.createAssert<GetAtsJobsParameterIds>();
export const validateGetAtsJobsParameterIds = typia.createValidate<GetAtsJobsParameterIds>();

export type GetAtsJobsParameterRemoteIds = string;
export const isGetAtsJobsParameterRemoteIds = typia.createIs<GetAtsJobsParameterRemoteIds>();
export const assertGetAtsJobsParameterRemoteIds = typia.createAssert<GetAtsJobsParameterRemoteIds>();
export const validateGetAtsJobsParameterRemoteIds = typia.createValidate<GetAtsJobsParameterRemoteIds>();

export type GetAtsJobsParameterJobCodes = string;
export const isGetAtsJobsParameterJobCodes = typia.createIs<GetAtsJobsParameterJobCodes>();
export const assertGetAtsJobsParameterJobCodes = typia.createAssert<GetAtsJobsParameterJobCodes>();
export const validateGetAtsJobsParameterJobCodes = typia.createValidate<GetAtsJobsParameterJobCodes>();

export type GetAtsJobsParameterPostUrl = string;
export const isGetAtsJobsParameterPostUrl = typia.createIs<GetAtsJobsParameterPostUrl>();
export const assertGetAtsJobsParameterPostUrl = typia.createAssert<GetAtsJobsParameterPostUrl>();
export const validateGetAtsJobsParameterPostUrl = typia.createValidate<GetAtsJobsParameterPostUrl>();

export type GetAtsJobsParameterStatus = ("OPEN" | "CLOSED" | "DRAFT" | "ARCHIVED");
export const isGetAtsJobsParameterStatus = typia.createIs<GetAtsJobsParameterStatus>();
export const assertGetAtsJobsParameterStatus = typia.createAssert<GetAtsJobsParameterStatus>();
export const validateGetAtsJobsParameterStatus = typia.createValidate<GetAtsJobsParameterStatus>();

export type GetAtsJobsParameterStatuses = string;
export const isGetAtsJobsParameterStatuses = typia.createIs<GetAtsJobsParameterStatuses>();
export const assertGetAtsJobsParameterStatuses = typia.createAssert<GetAtsJobsParameterStatuses>();
export const validateGetAtsJobsParameterStatuses = typia.createValidate<GetAtsJobsParameterStatuses>();

export type GetAtsJobsParameterEmploymentTypes = string;
export const isGetAtsJobsParameterEmploymentTypes = typia.createIs<GetAtsJobsParameterEmploymentTypes>();
export const assertGetAtsJobsParameterEmploymentTypes = typia.createAssert<GetAtsJobsParameterEmploymentTypes>();
export const validateGetAtsJobsParameterEmploymentTypes = typia.createValidate<GetAtsJobsParameterEmploymentTypes>();

export type GetAtsJobsParameterVisibilities = string;
export const isGetAtsJobsParameterVisibilities = typia.createIs<GetAtsJobsParameterVisibilities>();
export const assertGetAtsJobsParameterVisibilities = typia.createAssert<GetAtsJobsParameterVisibilities>();
export const validateGetAtsJobsParameterVisibilities = typia.createValidate<GetAtsJobsParameterVisibilities>();

export type GetAtsJobsParameterRemoteCreatedAfter = string;
export const isGetAtsJobsParameterRemoteCreatedAfter = typia.createIs<GetAtsJobsParameterRemoteCreatedAfter>();
export const assertGetAtsJobsParameterRemoteCreatedAfter = typia.createAssert<GetAtsJobsParameterRemoteCreatedAfter>();
export const validateGetAtsJobsParameterRemoteCreatedAfter = typia.createValidate<GetAtsJobsParameterRemoteCreatedAfter>();

export type GetAtsJobsParameterNameContains = string;
export const isGetAtsJobsParameterNameContains = typia.createIs<GetAtsJobsParameterNameContains>();
export const assertGetAtsJobsParameterNameContains = typia.createAssert<GetAtsJobsParameterNameContains>();
export const validateGetAtsJobsParameterNameContains = typia.createValidate<GetAtsJobsParameterNameContains>();

export type GetAtsJobsPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, remote_id: string, name: (string | null), job_code: (string | null), description: (string | null), confidential: (boolean | null), weekly_hours: (number | null), employment_type?: (("FULL_TIME" | "PART_TIME" | "CONTRACT" | "SEASONAL" | "INTERNSHIP") | string | null), status?: (("OPEN" | "CLOSED" | "DRAFT" | "ARCHIVED") | string | null), visibility?: (("PUBLIC" | "INTERNAL" | "UNLISTED" | "CONFIDENTIAL") | string | null), category: (string | null), department: (string | null), post_url: (string | null), experience_level: (string | null), remote_work_status?: (("REMOTE" | "HYBRID" | "TEMPORARY" | "ON_SITE") | string | null), salary_amount: (number | null), salary_amount_from: (number | null), salary_amount_to: (number | null), salary_currency: (string | null), salary_period?: (("YEAR" | "MONTH" | "TWO_WEEKS" | "WEEK" | "DAY" | "HOUR") | string | null), location?: (Partial<{ city: (string | null), country: (string | null), raw: (string | null), state: (string | null), street_1: (string | null), street_2: (string | null), zip_code: (string | null) }> | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }>, remote_url: (string | null), opened_at: (string | null), closed_at: (string | null), remote_created_at: (string | null), remote_updated_at: (string | null), contact_id: (string | null), remote_data: (Record<string, unknown> | null), changed_at: string, remote_deleted_at: (string | null), stages: Array<{ id: string, remote_id: (string | null), name: (string | null), remote_data: (Record<string, unknown> | null), index?: (number | null) }>, screening_questions: Array<{ id: string, remote_id: (string | null), title: (string | null), description: (string | null), format?: ({ display_type?: (("SINGLE_LINE" | "MULTI_LINE" | "EMAIL" | "URL") | null), max_length?: (number | null), type: string } | { display_type?: (("SLIDER" | "FIELD") | null), max?: (number | null), min?: (number | null), type: string } | { accepted_mime_types?: (Array<string> | null), max_file_size_bytes?: (number | null), type: string } | { display_type?: (("DROPDOWN" | "RADIO") | null), options: Array<{ id: string, remote_id?: (string | null), name: string }>, type: string } | { type: string } | { type: string } | { options: Array<{ id: string, remote_id?: (string | null), name: string }>, type: string } | { type: string } | { raw_question?: unknown, type: string } | null), category: (("EEO" | "DEMOGRAPHIC") | null), index?: (number | null), required: (boolean | null), precondition_question_id?: (string | null), precondition_options?: (Array<string> | Array<boolean> | null) }>, job_postings: Array<{ id: string, remote_id: (string | null), title: (string | null), description_html: (string | null), status: (("ACTIVE" | "INACTIVE" | "DRAFT") | null), visibility: (("PUBLIC" | "INTERNAL" | "UNLISTED") | null), url: (string | null), remote_data: (Record<string, unknown> | null) }>, hiring_team: Array<{ id: string, remote_id: (string | null), first_name: (string | null), last_name: (string | null), email?: (string | null), hiring_team_roles: Array<("RECRUITER" | "HIRING_MANAGER" | "COORDINATOR" | "SOURCER" | "INTERVIEWER")>, job_roles: Array<{ remote_id: (string | null), remote_label: (string | null), scope: (("SYSTEM" | "JOB") | null), unified_type: (("HIRING_MANAGER" | "RECRUITER" | "COORDINATOR" | "SOURCER" | "INTERVIEWER" | "ADMIN") | null) }> }> }> } };
export const isGetAtsJobsPositiveResponse = typia.createIs<GetAtsJobsPositiveResponse>();
export const assertGetAtsJobsPositiveResponse = typia.createAssert<GetAtsJobsPositiveResponse>();
export const validateGetAtsJobsPositiveResponse = typia.createValidate<GetAtsJobsPositiveResponse>();

export type PostAtsJobsJobIdApplicationsParameterJobId = string;
export const isPostAtsJobsJobIdApplicationsParameterJobId = typia.createIs<PostAtsJobsJobIdApplicationsParameterJobId>();
export const assertPostAtsJobsJobIdApplicationsParameterJobId = typia.createAssert<PostAtsJobsJobIdApplicationsParameterJobId>();
export const validatePostAtsJobsJobIdApplicationsParameterJobId = typia.createValidate<PostAtsJobsJobIdApplicationsParameterJobId>();

export type PostAtsJobsJobIdApplicationsPositiveResponse = { status: string, data: { id: string, remote_id: (string | null), outcome: (("PENDING" | "HIRED" | "DECLINED") | null), rejection_reason_name: (string | null), rejected_at: (string | null), current_stage_id: (string | null), job_id: (string | null), candidate_id: (string | null), screening_question_answers?: (Array<({ answer: { content: (string | null) }, question: { remote_id: (string | null), title: string, type: string } } | { answer: { choice: (string | null) }, question: { remote_id: (string | null), title: string, type: string } } | { answer: Partial<{ choices: Array<string> }>, question: { remote_id: (string | null), title: string, type: string } } | { answer: { checked: (boolean | null) }, question: { remote_id: (string | null), title: string, type: string } } | { answer: { number: (number | null) }, question: { remote_id: (string | null), title: string, type: string } } | { answer: { date: (string | null) }, question: { remote_id: (string | null), title: string, type: string } } | { answer: Partial<{ raw: null }>, question: { remote_id: (string | null), title: string, type: string } })> | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }>, remote_url: (string | null), changed_at: string, remote_deleted_at: (string | null), remote_created_at: (string | null), remote_updated_at: (string | null), remote_data: (Record<string, unknown> | null), current_stage: ({ id: string, name: (string | null), remote_id: (string | null), index: (number | null) } | null), job: ({ id: string, name: (string | null), remote_id: string } | null), candidate: ({ id: string, remote_id: string, first_name: (string | null), last_name: (string | null), company: (string | null), title: (string | null), confidential: (boolean | null), source: (string | null), phone_numbers?: (Array<{ phone_number: string, type?: (string | null) }> | null), email_addresses?: (Array<{ email_address?: (string | null), type: (string | null) }> | null), social_media?: (Array<Partial<{ link: (string | null), type: (string | null), username: (string | null) }>> | null), location?: (Partial<{ city: (string | null), country: (string | null), raw: (string | null), state: (string | null), street_1: (string | null), street_2: (string | null), zip_code: (string | null) }> | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }>, remote_url: (string | null), remote_created_at: (string | null), remote_updated_at: (string | null), remote_data: (Record<string, unknown> | null), changed_at: string, remote_deleted_at: (string | null), tags: Array<{ id: string, name: (string | null), remote_id: (string | null) }> } | null) }, warnings: Array<{ message: string }> };
export const isPostAtsJobsJobIdApplicationsPositiveResponse = typia.createIs<PostAtsJobsJobIdApplicationsPositiveResponse>();
export const assertPostAtsJobsJobIdApplicationsPositiveResponse = typia.createAssert<PostAtsJobsJobIdApplicationsPositiveResponse>();
export const validatePostAtsJobsJobIdApplicationsPositiveResponse = typia.createValidate<PostAtsJobsJobIdApplicationsPositiveResponse>();

export type PostAtsJobsJobIdApplicationsRequestBody = { stage_id?: string, candidate: { first_name: string, last_name: string, email_address: string, additional_email_addresses?: Array<{ type: ("PERSONAL" | "WORK" | "OTHER"), email_address: string }>, company?: string, title?: string, phone_number?: string, additional_phone_numbers?: Array<{ type: ("PERSONAL" | "WORK" | "OTHER"), phone_number: string }>, location?: { city?: string, country: string, state?: string, street_1?: string, zip_code?: string }, gender?: ("MALE" | "FEMALE" | "OTHER"), availability_date?: string, salary_expectations?: { period: ("MONTH" | "YEAR"), amount: number }, social_links?: Array<{ url: string }> }, attachments?: Array<{ name: string, content_type?: string, data_url?: string, data?: string, type: ("CV" | "COVER_LETTER" | "OTHER") }>, source?: Partial<{ name: string, unified_key: string, id: string }>, sourced_by?: { user_id: string }, gdpr_consent?: Partial<{ expires_at: string, given: boolean }>, remote_fields?: (Partial<{ successfactors: Partial<{ Candidate: Record<string, unknown>, JobApplication: Record<string, unknown>, copyJobApplicationAttachments: boolean, update_existing_candidate: (boolean | null) }>, personio: Partial<{ application: Record<string, unknown> }>, talentsoft: Partial<{ applicant: Record<string, unknown>, application: Record<string, unknown> }>, teamtailor: Partial<{ candidate: Record<string, unknown>, application: Partial<{ attributes: Record<string, unknown> }> }>, greenhouse: Partial<{ candidate: Record<string, unknown>, application: Record<string, unknown> }>, lever: Partial<{ candidate: Record<string, unknown> }>, workable: Partial<{ candidate: Record<string, unknown> }>, workday: Partial<{ Candidate_Data: Partial<{ Name_Detail_Data: Partial<{ Middle_Name: string, Social_Suffix_Reference: { Predefined_Name_Component_ID: string } }>, Language_Reference: { WID: string }, Job_Application_Data: Partial<{ Job_Applied_To_Data: Partial<{ Global_Personal_Information_Data: Partial<{ Date_of_Birth: string }> }>, Resume_Data: Partial<{ Education_Data: Array<Partial<{ School_Name: string, First_Year_Attended: number, Last_Year_Attended: number, Field_of_Study_Reference: { WID: string }, Degree_Reference: { WID: string }, Grade_Average: string }>>, Skill_Data: Array<Partial<{ Skill_Name: string }>>, Language_Data: Array<Partial<{ Language_Reference: Partial<{ WID: string }>, Language: { Native?: boolean, Language_Ability: Array<Partial<{ Language_Ability_Data: Partial<{ Language_Proficiency_Reference: { WID: string }, Language_Ability_Type_Reference: { WID: string } }> }>> } }>>, Experience_Data: Array<{ Company_Name: string, Title: string, Location?: string, Start_Date: string, End_Date?: string, Currently_Work_Here?: boolean, Description?: string }> }> }>, Contact_Data: Partial<{ Location_Data: Partial<{ Address_Line_1: string, Address_Line_2: string, Region_Subdivision_1: string, Country_Region_Reference: { Country_Region_ID: string }, Country_City_Reference: { WID: string } }> }>, Worker_Reference: Partial<{ WID: string, Employee_ID: string }> }>, Override_Source_Reference_WID: string }>, zohorecruit: Partial<{ candidate: Record<string, unknown> }>, bullhorn: Partial<{ candidate: Record<string, unknown>, job_submission: Record<string, unknown> }>, smartrecruiters: Partial<{ candidate_with_questions: Record<string, unknown>, candidate_without_questions: Record<string, unknown>, candidate: Record<string, unknown>, consent_decisions: Partial<{ SINGLE: boolean, SMART_RECRUIT: boolean, SMART_CRM: boolean, SMART_MESSAGE_SMS: boolean, SMART_MESSAGE_WHATSAPP: boolean }> }>, talentadore: Partial<{ applications: Record<string, unknown> }>, guidecom: Partial<{ candidate: Record<string, unknown> }>, dvinci: Partial<{ application: Record<string, unknown>, candidate: Record<string, unknown> }>, hrworks: Partial<{ jobApplication: Record<string, unknown> }>, jobylon: Partial<{ application: Partial<{ message: string }> }>, avature: Partial<{ workflow: Partial<{ step: { id: number } }> }>, recruitee: Partial<{ candidate: Partial<{ cover_letter_text: string }> }>, rexx: Partial<{ candidate: Record<string, unknown> }>, umantis: Partial<{ person: Record<string, unknown> }>, piloga: Partial<{ candidate: Partial<{ street: string }> }>, pinpoint: Partial<{ candidate: Record<string, unknown> }>, covetorest: Partial<{ candidate: Partial<{ mandant: number }> }> }> & Partial<{ greenhouse: Partial<{ post_headers: Partial<{ "On-Behalf-Of": (string | null) }> }>, workable: Partial<{ on_behalf_of_user_remote_id: string }> }>), screening_question_answers?: Array<{ question_id: string, answer: (string | boolean | number | Array<string> | string | { name: string, content_type?: string, data_url?: string, data?: string }) }> };
export const isPostAtsJobsJobIdApplicationsRequestBody = typia.createIs<PostAtsJobsJobIdApplicationsRequestBody>();
export const assertPostAtsJobsJobIdApplicationsRequestBody = typia.createAssert<PostAtsJobsJobIdApplicationsRequestBody>();
export const validatePostAtsJobsJobIdApplicationsRequestBody = typia.createValidate<PostAtsJobsJobIdApplicationsRequestBody>();

export type GetAtsUsersParameterCursor = string;
export const isGetAtsUsersParameterCursor = typia.createIs<GetAtsUsersParameterCursor>();
export const assertGetAtsUsersParameterCursor = typia.createAssert<GetAtsUsersParameterCursor>();
export const validateGetAtsUsersParameterCursor = typia.createValidate<GetAtsUsersParameterCursor>();

export type GetAtsUsersParameterPageSize = number;
export const isGetAtsUsersParameterPageSize = typia.createIs<GetAtsUsersParameterPageSize>();
export const assertGetAtsUsersParameterPageSize = typia.createAssert<GetAtsUsersParameterPageSize>();
export const validateGetAtsUsersParameterPageSize = typia.createValidate<GetAtsUsersParameterPageSize>();

export type GetAtsUsersParameterUpdatedAfter = string;
export const isGetAtsUsersParameterUpdatedAfter = typia.createIs<GetAtsUsersParameterUpdatedAfter>();
export const assertGetAtsUsersParameterUpdatedAfter = typia.createAssert<GetAtsUsersParameterUpdatedAfter>();
export const validateGetAtsUsersParameterUpdatedAfter = typia.createValidate<GetAtsUsersParameterUpdatedAfter>();

export type GetAtsUsersParameterIncludeDeleted = ("true" | "false");
export const isGetAtsUsersParameterIncludeDeleted = typia.createIs<GetAtsUsersParameterIncludeDeleted>();
export const assertGetAtsUsersParameterIncludeDeleted = typia.createAssert<GetAtsUsersParameterIncludeDeleted>();
export const validateGetAtsUsersParameterIncludeDeleted = typia.createValidate<GetAtsUsersParameterIncludeDeleted>();

export type GetAtsUsersParameterIgnoreUnsupportedFilters = ("true" | "false");
export const isGetAtsUsersParameterIgnoreUnsupportedFilters = typia.createIs<GetAtsUsersParameterIgnoreUnsupportedFilters>();
export const assertGetAtsUsersParameterIgnoreUnsupportedFilters = typia.createAssert<GetAtsUsersParameterIgnoreUnsupportedFilters>();
export const validateGetAtsUsersParameterIgnoreUnsupportedFilters = typia.createValidate<GetAtsUsersParameterIgnoreUnsupportedFilters>();

export type GetAtsUsersParameterIds = string;
export const isGetAtsUsersParameterIds = typia.createIs<GetAtsUsersParameterIds>();
export const assertGetAtsUsersParameterIds = typia.createAssert<GetAtsUsersParameterIds>();
export const validateGetAtsUsersParameterIds = typia.createValidate<GetAtsUsersParameterIds>();

export type GetAtsUsersParameterRemoteIds = string;
export const isGetAtsUsersParameterRemoteIds = typia.createIs<GetAtsUsersParameterRemoteIds>();
export const assertGetAtsUsersParameterRemoteIds = typia.createAssert<GetAtsUsersParameterRemoteIds>();
export const validateGetAtsUsersParameterRemoteIds = typia.createValidate<GetAtsUsersParameterRemoteIds>();

export type GetAtsUsersParameterEmails = string;
export const isGetAtsUsersParameterEmails = typia.createIs<GetAtsUsersParameterEmails>();
export const assertGetAtsUsersParameterEmails = typia.createAssert<GetAtsUsersParameterEmails>();
export const validateGetAtsUsersParameterEmails = typia.createValidate<GetAtsUsersParameterEmails>();

export type GetAtsUsersPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, remote_id: (string | null), first_name: (string | null), last_name: (string | null), email?: (string | null), status: (("ACTIVE" | "INACTIVE") | null), remote_data: (Record<string, unknown> | null), changed_at: string, remote_deleted_at: (string | null), system_roles: Array<{ remote_id: (string | null), remote_label: (string | null), scope: (("SYSTEM" | "JOB") | null), unified_type: (("HIRING_MANAGER" | "RECRUITER" | "COORDINATOR" | "SOURCER" | "INTERVIEWER" | "ADMIN") | null) }> }> } };
export const isGetAtsUsersPositiveResponse = typia.createIs<GetAtsUsersPositiveResponse>();
export const assertGetAtsUsersPositiveResponse = typia.createAssert<GetAtsUsersPositiveResponse>();
export const validateGetAtsUsersPositiveResponse = typia.createValidate<GetAtsUsersPositiveResponse>();

export type GetAtsRolesParameterCursor = string;
export const isGetAtsRolesParameterCursor = typia.createIs<GetAtsRolesParameterCursor>();
export const assertGetAtsRolesParameterCursor = typia.createAssert<GetAtsRolesParameterCursor>();
export const validateGetAtsRolesParameterCursor = typia.createValidate<GetAtsRolesParameterCursor>();

export type GetAtsRolesParameterPageSize = number;
export const isGetAtsRolesParameterPageSize = typia.createIs<GetAtsRolesParameterPageSize>();
export const assertGetAtsRolesParameterPageSize = typia.createAssert<GetAtsRolesParameterPageSize>();
export const validateGetAtsRolesParameterPageSize = typia.createValidate<GetAtsRolesParameterPageSize>();

export type GetAtsRolesParameterUpdatedAfter = string;
export const isGetAtsRolesParameterUpdatedAfter = typia.createIs<GetAtsRolesParameterUpdatedAfter>();
export const assertGetAtsRolesParameterUpdatedAfter = typia.createAssert<GetAtsRolesParameterUpdatedAfter>();
export const validateGetAtsRolesParameterUpdatedAfter = typia.createValidate<GetAtsRolesParameterUpdatedAfter>();

export type GetAtsRolesParameterIncludeDeleted = ("true" | "false");
export const isGetAtsRolesParameterIncludeDeleted = typia.createIs<GetAtsRolesParameterIncludeDeleted>();
export const assertGetAtsRolesParameterIncludeDeleted = typia.createAssert<GetAtsRolesParameterIncludeDeleted>();
export const validateGetAtsRolesParameterIncludeDeleted = typia.createValidate<GetAtsRolesParameterIncludeDeleted>();

export type GetAtsRolesParameterIgnoreUnsupportedFilters = ("true" | "false");
export const isGetAtsRolesParameterIgnoreUnsupportedFilters = typia.createIs<GetAtsRolesParameterIgnoreUnsupportedFilters>();
export const assertGetAtsRolesParameterIgnoreUnsupportedFilters = typia.createAssert<GetAtsRolesParameterIgnoreUnsupportedFilters>();
export const validateGetAtsRolesParameterIgnoreUnsupportedFilters = typia.createValidate<GetAtsRolesParameterIgnoreUnsupportedFilters>();

export type GetAtsRolesParameterIds = string;
export const isGetAtsRolesParameterIds = typia.createIs<GetAtsRolesParameterIds>();
export const assertGetAtsRolesParameterIds = typia.createAssert<GetAtsRolesParameterIds>();
export const validateGetAtsRolesParameterIds = typia.createValidate<GetAtsRolesParameterIds>();

export type GetAtsRolesParameterRemoteIds = string;
export const isGetAtsRolesParameterRemoteIds = typia.createIs<GetAtsRolesParameterRemoteIds>();
export const assertGetAtsRolesParameterRemoteIds = typia.createAssert<GetAtsRolesParameterRemoteIds>();
export const validateGetAtsRolesParameterRemoteIds = typia.createValidate<GetAtsRolesParameterRemoteIds>();

export type GetAtsRolesParameterScopes = string;
export const isGetAtsRolesParameterScopes = typia.createIs<GetAtsRolesParameterScopes>();
export const assertGetAtsRolesParameterScopes = typia.createAssert<GetAtsRolesParameterScopes>();
export const validateGetAtsRolesParameterScopes = typia.createValidate<GetAtsRolesParameterScopes>();

export type GetAtsRolesPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, remote_id: (string | null), remote_label: (string | null), scope: (("SYSTEM" | "JOB") | null), unified_type: (("HIRING_MANAGER" | "RECRUITER" | "COORDINATOR" | "SOURCER" | "INTERVIEWER" | "ADMIN") | null), remote_data: (Record<string, unknown> | null), changed_at: string, remote_deleted_at: (string | null) }> } };
export const isGetAtsRolesPositiveResponse = typia.createIs<GetAtsRolesPositiveResponse>();
export const assertGetAtsRolesPositiveResponse = typia.createAssert<GetAtsRolesPositiveResponse>();
export const validateGetAtsRolesPositiveResponse = typia.createValidate<GetAtsRolesPositiveResponse>();

export type GetAtsOffersParameterCursor = string;
export const isGetAtsOffersParameterCursor = typia.createIs<GetAtsOffersParameterCursor>();
export const assertGetAtsOffersParameterCursor = typia.createAssert<GetAtsOffersParameterCursor>();
export const validateGetAtsOffersParameterCursor = typia.createValidate<GetAtsOffersParameterCursor>();

export type GetAtsOffersParameterPageSize = number;
export const isGetAtsOffersParameterPageSize = typia.createIs<GetAtsOffersParameterPageSize>();
export const assertGetAtsOffersParameterPageSize = typia.createAssert<GetAtsOffersParameterPageSize>();
export const validateGetAtsOffersParameterPageSize = typia.createValidate<GetAtsOffersParameterPageSize>();

export type GetAtsOffersParameterUpdatedAfter = string;
export const isGetAtsOffersParameterUpdatedAfter = typia.createIs<GetAtsOffersParameterUpdatedAfter>();
export const assertGetAtsOffersParameterUpdatedAfter = typia.createAssert<GetAtsOffersParameterUpdatedAfter>();
export const validateGetAtsOffersParameterUpdatedAfter = typia.createValidate<GetAtsOffersParameterUpdatedAfter>();

export type GetAtsOffersParameterIncludeDeleted = ("true" | "false");
export const isGetAtsOffersParameterIncludeDeleted = typia.createIs<GetAtsOffersParameterIncludeDeleted>();
export const assertGetAtsOffersParameterIncludeDeleted = typia.createAssert<GetAtsOffersParameterIncludeDeleted>();
export const validateGetAtsOffersParameterIncludeDeleted = typia.createValidate<GetAtsOffersParameterIncludeDeleted>();

export type GetAtsOffersParameterIgnoreUnsupportedFilters = ("true" | "false");
export const isGetAtsOffersParameterIgnoreUnsupportedFilters = typia.createIs<GetAtsOffersParameterIgnoreUnsupportedFilters>();
export const assertGetAtsOffersParameterIgnoreUnsupportedFilters = typia.createAssert<GetAtsOffersParameterIgnoreUnsupportedFilters>();
export const validateGetAtsOffersParameterIgnoreUnsupportedFilters = typia.createValidate<GetAtsOffersParameterIgnoreUnsupportedFilters>();

export type GetAtsOffersParameterIds = string;
export const isGetAtsOffersParameterIds = typia.createIs<GetAtsOffersParameterIds>();
export const assertGetAtsOffersParameterIds = typia.createAssert<GetAtsOffersParameterIds>();
export const validateGetAtsOffersParameterIds = typia.createValidate<GetAtsOffersParameterIds>();

export type GetAtsOffersParameterRemoteIds = string;
export const isGetAtsOffersParameterRemoteIds = typia.createIs<GetAtsOffersParameterRemoteIds>();
export const assertGetAtsOffersParameterRemoteIds = typia.createAssert<GetAtsOffersParameterRemoteIds>();
export const validateGetAtsOffersParameterRemoteIds = typia.createValidate<GetAtsOffersParameterRemoteIds>();

export type GetAtsOffersPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, remote_id: (string | null), status: (("ACCEPTED" | "DECLINED" | "SENT" | "APPROVED" | "DRAFT" | "ABANDONED") | null), employment_start_date: (string | null), application_id: (string | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }>, changed_at: string, remote_deleted_at: (string | null), remote_created_at: (string | null), remote_updated_at: (string | null), remote_data: (Record<string, unknown> | null), application: ({ candidate: ({ id: string, remote_id: string, first_name: (string | null), last_name: (string | null), email_addresses?: (Array<{ email_address?: (string | null), type: (string | null) }> | null) } | null), job: ({ id: string, remote_id: string, name: (string | null) } | null) } | null) }> } };
export const isGetAtsOffersPositiveResponse = typia.createIs<GetAtsOffersPositiveResponse>();
export const assertGetAtsOffersPositiveResponse = typia.createAssert<GetAtsOffersPositiveResponse>();
export const validateGetAtsOffersPositiveResponse = typia.createValidate<GetAtsOffersPositiveResponse>();

export type GetAtsRejectionReasonsParameterCursor = string;
export const isGetAtsRejectionReasonsParameterCursor = typia.createIs<GetAtsRejectionReasonsParameterCursor>();
export const assertGetAtsRejectionReasonsParameterCursor = typia.createAssert<GetAtsRejectionReasonsParameterCursor>();
export const validateGetAtsRejectionReasonsParameterCursor = typia.createValidate<GetAtsRejectionReasonsParameterCursor>();

export type GetAtsRejectionReasonsParameterPageSize = number;
export const isGetAtsRejectionReasonsParameterPageSize = typia.createIs<GetAtsRejectionReasonsParameterPageSize>();
export const assertGetAtsRejectionReasonsParameterPageSize = typia.createAssert<GetAtsRejectionReasonsParameterPageSize>();
export const validateGetAtsRejectionReasonsParameterPageSize = typia.createValidate<GetAtsRejectionReasonsParameterPageSize>();

export type GetAtsRejectionReasonsParameterUpdatedAfter = string;
export const isGetAtsRejectionReasonsParameterUpdatedAfter = typia.createIs<GetAtsRejectionReasonsParameterUpdatedAfter>();
export const assertGetAtsRejectionReasonsParameterUpdatedAfter = typia.createAssert<GetAtsRejectionReasonsParameterUpdatedAfter>();
export const validateGetAtsRejectionReasonsParameterUpdatedAfter = typia.createValidate<GetAtsRejectionReasonsParameterUpdatedAfter>();

export type GetAtsRejectionReasonsParameterIncludeDeleted = ("true" | "false");
export const isGetAtsRejectionReasonsParameterIncludeDeleted = typia.createIs<GetAtsRejectionReasonsParameterIncludeDeleted>();
export const assertGetAtsRejectionReasonsParameterIncludeDeleted = typia.createAssert<GetAtsRejectionReasonsParameterIncludeDeleted>();
export const validateGetAtsRejectionReasonsParameterIncludeDeleted = typia.createValidate<GetAtsRejectionReasonsParameterIncludeDeleted>();

export type GetAtsRejectionReasonsParameterIgnoreUnsupportedFilters = ("true" | "false");
export const isGetAtsRejectionReasonsParameterIgnoreUnsupportedFilters = typia.createIs<GetAtsRejectionReasonsParameterIgnoreUnsupportedFilters>();
export const assertGetAtsRejectionReasonsParameterIgnoreUnsupportedFilters = typia.createAssert<GetAtsRejectionReasonsParameterIgnoreUnsupportedFilters>();
export const validateGetAtsRejectionReasonsParameterIgnoreUnsupportedFilters = typia.createValidate<GetAtsRejectionReasonsParameterIgnoreUnsupportedFilters>();

export type GetAtsRejectionReasonsParameterIds = string;
export const isGetAtsRejectionReasonsParameterIds = typia.createIs<GetAtsRejectionReasonsParameterIds>();
export const assertGetAtsRejectionReasonsParameterIds = typia.createAssert<GetAtsRejectionReasonsParameterIds>();
export const validateGetAtsRejectionReasonsParameterIds = typia.createValidate<GetAtsRejectionReasonsParameterIds>();

export type GetAtsRejectionReasonsParameterRemoteIds = string;
export const isGetAtsRejectionReasonsParameterRemoteIds = typia.createIs<GetAtsRejectionReasonsParameterRemoteIds>();
export const assertGetAtsRejectionReasonsParameterRemoteIds = typia.createAssert<GetAtsRejectionReasonsParameterRemoteIds>();
export const validateGetAtsRejectionReasonsParameterRemoteIds = typia.createValidate<GetAtsRejectionReasonsParameterRemoteIds>();

export type GetAtsRejectionReasonsPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, remote_id: string, name: (string | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null) }> } };
export const isGetAtsRejectionReasonsPositiveResponse = typia.createIs<GetAtsRejectionReasonsPositiveResponse>();
export const assertGetAtsRejectionReasonsPositiveResponse = typia.createAssert<GetAtsRejectionReasonsPositiveResponse>();
export const validateGetAtsRejectionReasonsPositiveResponse = typia.createValidate<GetAtsRejectionReasonsPositiveResponse>();

export type GetAtsInterviewsParameterCursor = string;
export const isGetAtsInterviewsParameterCursor = typia.createIs<GetAtsInterviewsParameterCursor>();
export const assertGetAtsInterviewsParameterCursor = typia.createAssert<GetAtsInterviewsParameterCursor>();
export const validateGetAtsInterviewsParameterCursor = typia.createValidate<GetAtsInterviewsParameterCursor>();

export type GetAtsInterviewsParameterPageSize = number;
export const isGetAtsInterviewsParameterPageSize = typia.createIs<GetAtsInterviewsParameterPageSize>();
export const assertGetAtsInterviewsParameterPageSize = typia.createAssert<GetAtsInterviewsParameterPageSize>();
export const validateGetAtsInterviewsParameterPageSize = typia.createValidate<GetAtsInterviewsParameterPageSize>();

export type GetAtsInterviewsParameterUpdatedAfter = string;
export const isGetAtsInterviewsParameterUpdatedAfter = typia.createIs<GetAtsInterviewsParameterUpdatedAfter>();
export const assertGetAtsInterviewsParameterUpdatedAfter = typia.createAssert<GetAtsInterviewsParameterUpdatedAfter>();
export const validateGetAtsInterviewsParameterUpdatedAfter = typia.createValidate<GetAtsInterviewsParameterUpdatedAfter>();

export type GetAtsInterviewsParameterIncludeDeleted = ("true" | "false");
export const isGetAtsInterviewsParameterIncludeDeleted = typia.createIs<GetAtsInterviewsParameterIncludeDeleted>();
export const assertGetAtsInterviewsParameterIncludeDeleted = typia.createAssert<GetAtsInterviewsParameterIncludeDeleted>();
export const validateGetAtsInterviewsParameterIncludeDeleted = typia.createValidate<GetAtsInterviewsParameterIncludeDeleted>();

export type GetAtsInterviewsParameterIgnoreUnsupportedFilters = ("true" | "false");
export const isGetAtsInterviewsParameterIgnoreUnsupportedFilters = typia.createIs<GetAtsInterviewsParameterIgnoreUnsupportedFilters>();
export const assertGetAtsInterviewsParameterIgnoreUnsupportedFilters = typia.createAssert<GetAtsInterviewsParameterIgnoreUnsupportedFilters>();
export const validateGetAtsInterviewsParameterIgnoreUnsupportedFilters = typia.createValidate<GetAtsInterviewsParameterIgnoreUnsupportedFilters>();

export type GetAtsInterviewsParameterIds = string;
export const isGetAtsInterviewsParameterIds = typia.createIs<GetAtsInterviewsParameterIds>();
export const assertGetAtsInterviewsParameterIds = typia.createAssert<GetAtsInterviewsParameterIds>();
export const validateGetAtsInterviewsParameterIds = typia.createValidate<GetAtsInterviewsParameterIds>();

export type GetAtsInterviewsParameterRemoteIds = string;
export const isGetAtsInterviewsParameterRemoteIds = typia.createIs<GetAtsInterviewsParameterRemoteIds>();
export const assertGetAtsInterviewsParameterRemoteIds = typia.createAssert<GetAtsInterviewsParameterRemoteIds>();
export const validateGetAtsInterviewsParameterRemoteIds = typia.createValidate<GetAtsInterviewsParameterRemoteIds>();

export type GetAtsInterviewsParameterJobIds = string;
export const isGetAtsInterviewsParameterJobIds = typia.createIs<GetAtsInterviewsParameterJobIds>();
export const assertGetAtsInterviewsParameterJobIds = typia.createAssert<GetAtsInterviewsParameterJobIds>();
export const validateGetAtsInterviewsParameterJobIds = typia.createValidate<GetAtsInterviewsParameterJobIds>();

export type GetAtsInterviewsPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, remote_id: (string | null), title: (string | null), starting_at: (string | null), ending_at: (string | null), location?: (Partial<{ city: (string | null), country: (string | null), raw: (string | null), state: (string | null), street_1: (string | null), street_2: (string | null), zip_code: (string | null) }> | null), video_conferencing_url: (string | null), application_id: (string | null), stage_id: (string | null), canceled: (boolean | null), remote_created_at: (string | null), remote_updated_at: (string | null), remote_data: (Record<string, unknown> | null), changed_at: string, remote_deleted_at: (string | null), users: Array<{ id: string, remote_id: (string | null), first_name: (string | null), last_name: (string | null), email?: (string | null) }>, application: ({ id: string, remote_id: (string | null), outcome: (("PENDING" | "HIRED" | "DECLINED") | null), rejection_reason_name: (string | null), candidate: ({ id: string, remote_id: string, first_name: (string | null), last_name: (string | null), email_addresses?: (Array<{ email_address?: (string | null), type: (string | null) }> | null) } | null), job: ({ id: string, remote_id: string, name: (string | null) } | null) } | null) }> } };
export const isGetAtsInterviewsPositiveResponse = typia.createIs<GetAtsInterviewsPositiveResponse>();
export const assertGetAtsInterviewsPositiveResponse = typia.createAssert<GetAtsInterviewsPositiveResponse>();
export const validateGetAtsInterviewsPositiveResponse = typia.createValidate<GetAtsInterviewsPositiveResponse>();

export type GetAtsActionsAtsCreateCandidatePositiveResponse = { status: string, data: Partial<{ attachment_restrictions: ({ total_size_bytes: (number | null), types: { CV: ({ is_supported: boolean, min_amount: (number | null), max_amount: (number | null), max_file_size_bytes: (number | null), accepted_mime_types: (Array<string> | null) } | { is_supported: boolean }), COVER_LETTER: ({ is_supported: boolean, min_amount: (number | null), max_amount: (number | null), max_file_size_bytes: (number | null), accepted_mime_types: (Array<string> | null) } | { is_supported: boolean }), OTHER: ({ is_supported: boolean, min_amount: (number | null), max_amount: (number | null), max_file_size_bytes: (number | null), accepted_mime_types: (Array<string> | null) } | { is_supported: boolean }) } } | null) }> };
export const isGetAtsActionsAtsCreateCandidatePositiveResponse = typia.createIs<GetAtsActionsAtsCreateCandidatePositiveResponse>();
export const assertGetAtsActionsAtsCreateCandidatePositiveResponse = typia.createAssert<GetAtsActionsAtsCreateCandidatePositiveResponse>();
export const validateGetAtsActionsAtsCreateCandidatePositiveResponse = typia.createValidate<GetAtsActionsAtsCreateCandidatePositiveResponse>();

export type GetAtsActionsAtsCreateApplicationPositiveResponse = { status: string, data: Partial<{ attachment_restrictions: ({ total_size_bytes: (number | null), types: { CV: ({ is_supported: boolean, min_amount: (number | null), max_amount: (number | null), max_file_size_bytes: (number | null), accepted_mime_types: (Array<string> | null) } | { is_supported: boolean }), COVER_LETTER: ({ is_supported: boolean, min_amount: (number | null), max_amount: (number | null), max_file_size_bytes: (number | null), accepted_mime_types: (Array<string> | null) } | { is_supported: boolean }), OTHER: ({ is_supported: boolean, min_amount: (number | null), max_amount: (number | null), max_file_size_bytes: (number | null), accepted_mime_types: (Array<string> | null) } | { is_supported: boolean }) } } | null) }> };
export const isGetAtsActionsAtsCreateApplicationPositiveResponse = typia.createIs<GetAtsActionsAtsCreateApplicationPositiveResponse>();
export const assertGetAtsActionsAtsCreateApplicationPositiveResponse = typia.createAssert<GetAtsActionsAtsCreateApplicationPositiveResponse>();
export const validateGetAtsActionsAtsCreateApplicationPositiveResponse = typia.createValidate<GetAtsActionsAtsCreateApplicationPositiveResponse>();

export type GetAtsActionsAtsAddApplicationAttachmentPositiveResponse = { status: string, data: Partial<{ attachment_restrictions: ({ types: { CV: ({ is_supported: boolean, max_file_size_bytes: (number | null), accepted_mime_types: (Array<string> | null) } | { is_supported: boolean }), COVER_LETTER: ({ is_supported: boolean, max_file_size_bytes: (number | null), accepted_mime_types: (Array<string> | null) } | { is_supported: boolean }), OTHER: ({ is_supported: boolean, max_file_size_bytes: (number | null), accepted_mime_types: (Array<string> | null) } | { is_supported: boolean }) } } | null) }> };
export const isGetAtsActionsAtsAddApplicationAttachmentPositiveResponse = typia.createIs<GetAtsActionsAtsAddApplicationAttachmentPositiveResponse>();
export const assertGetAtsActionsAtsAddApplicationAttachmentPositiveResponse = typia.createAssert<GetAtsActionsAtsAddApplicationAttachmentPositiveResponse>();
export const validateGetAtsActionsAtsAddApplicationAttachmentPositiveResponse = typia.createValidate<GetAtsActionsAtsAddApplicationAttachmentPositiveResponse>();

export type GetAtsActionsAtsAddCandidateAttachmentPositiveResponse = { status: string, data: Partial<{ attachment_restrictions: ({ types: { CV: ({ is_supported: boolean, max_file_size_bytes: (number | null), accepted_mime_types: (Array<string> | null) } | { is_supported: boolean }), COVER_LETTER: ({ is_supported: boolean, max_file_size_bytes: (number | null), accepted_mime_types: (Array<string> | null) } | { is_supported: boolean }), OTHER: ({ is_supported: boolean, max_file_size_bytes: (number | null), accepted_mime_types: (Array<string> | null) } | { is_supported: boolean }) } } | null) }> };
export const isGetAtsActionsAtsAddCandidateAttachmentPositiveResponse = typia.createIs<GetAtsActionsAtsAddCandidateAttachmentPositiveResponse>();
export const assertGetAtsActionsAtsAddCandidateAttachmentPositiveResponse = typia.createAssert<GetAtsActionsAtsAddCandidateAttachmentPositiveResponse>();
export const validateGetAtsActionsAtsAddCandidateAttachmentPositiveResponse = typia.createValidate<GetAtsActionsAtsAddCandidateAttachmentPositiveResponse>();

export type PostAtsImportTrackedApplicationPositiveResponse = { status: string, data: { id: string, tracked_at: (string | null), imported_id: Partial<{ erecruiter: ({ id_type: string, application_remote_id: string, job_remote_id: string } | { id_type: string, candidate_remote_id: string, application_remote_id: string }), successfactors: { id_type: string, application_remote_id: string }, recruitee: { id_type: string, placement_id: string }, greenhouse: { id_type: string, application_id: string }, onlyfy: { id_type: string, application_id: string }, smartrecruiters: { id_type: string, candidate_remote_id: string, job_remote_id: string } }> }, warnings: Array<{ message: string }> };
export const isPostAtsImportTrackedApplicationPositiveResponse = typia.createIs<PostAtsImportTrackedApplicationPositiveResponse>();
export const assertPostAtsImportTrackedApplicationPositiveResponse = typia.createAssert<PostAtsImportTrackedApplicationPositiveResponse>();
export const validatePostAtsImportTrackedApplicationPositiveResponse = typia.createValidate<PostAtsImportTrackedApplicationPositiveResponse>();

export type PostAtsImportTrackedApplicationRequestBody = { erecruiter?: ({ id_type: string, application_remote_id: string, job_remote_id: string } | { id_type: string, candidate_remote_id: string, application_remote_id: string }), successfactors?: { id_type: string, application_remote_id: string }, recruitee?: { id_type: string, placement_id: string }, greenhouse?: { id_type: string, application_id: string }, onlyfy?: { id_type: string, application_id: string }, smartrecruiters?: { id_type: string, candidate_remote_id: string, job_remote_id: string }, tracked_at: (string | null) };
export const isPostAtsImportTrackedApplicationRequestBody = typia.createIs<PostAtsImportTrackedApplicationRequestBody>();
export const assertPostAtsImportTrackedApplicationRequestBody = typia.createAssert<PostAtsImportTrackedApplicationRequestBody>();
export const validatePostAtsImportTrackedApplicationRequestBody = typia.createValidate<PostAtsImportTrackedApplicationRequestBody>();

export type PostAtsCustomAvionteSyncedJobsPositiveResponse = { status: string, data: Record<string, unknown> };
export const isPostAtsCustomAvionteSyncedJobsPositiveResponse = typia.createIs<PostAtsCustomAvionteSyncedJobsPositiveResponse>();
export const assertPostAtsCustomAvionteSyncedJobsPositiveResponse = typia.createAssert<PostAtsCustomAvionteSyncedJobsPositiveResponse>();
export const validatePostAtsCustomAvionteSyncedJobsPositiveResponse = typia.createValidate<PostAtsCustomAvionteSyncedJobsPositiveResponse>();

export type PostAtsCustomAvionteSyncedJobsRequestBody = { job_remote_id: string };
export const isPostAtsCustomAvionteSyncedJobsRequestBody = typia.createIs<PostAtsCustomAvionteSyncedJobsRequestBody>();
export const assertPostAtsCustomAvionteSyncedJobsRequestBody = typia.createAssert<PostAtsCustomAvionteSyncedJobsRequestBody>();
export const validatePostAtsCustomAvionteSyncedJobsRequestBody = typia.createValidate<PostAtsCustomAvionteSyncedJobsRequestBody>();

export type DeleteAtsCustomAvionteSyncedJobsJobRemoteIdParameterJobRemoteId = string;
export const isDeleteAtsCustomAvionteSyncedJobsJobRemoteIdParameterJobRemoteId = typia.createIs<DeleteAtsCustomAvionteSyncedJobsJobRemoteIdParameterJobRemoteId>();
export const assertDeleteAtsCustomAvionteSyncedJobsJobRemoteIdParameterJobRemoteId = typia.createAssert<DeleteAtsCustomAvionteSyncedJobsJobRemoteIdParameterJobRemoteId>();
export const validateDeleteAtsCustomAvionteSyncedJobsJobRemoteIdParameterJobRemoteId = typia.createValidate<DeleteAtsCustomAvionteSyncedJobsJobRemoteIdParameterJobRemoteId>();

export type DeleteAtsCustomAvionteSyncedJobsJobRemoteIdPositiveResponse = { status: string, data: Record<string, unknown> };
export const isDeleteAtsCustomAvionteSyncedJobsJobRemoteIdPositiveResponse = typia.createIs<DeleteAtsCustomAvionteSyncedJobsJobRemoteIdPositiveResponse>();
export const assertDeleteAtsCustomAvionteSyncedJobsJobRemoteIdPositiveResponse = typia.createAssert<DeleteAtsCustomAvionteSyncedJobsJobRemoteIdPositiveResponse>();
export const validateDeleteAtsCustomAvionteSyncedJobsJobRemoteIdPositiveResponse = typia.createValidate<DeleteAtsCustomAvionteSyncedJobsJobRemoteIdPositiveResponse>();

export type DeleteAtsCustomAvionteSyncedJobsJobRemoteIdRequestBody = Partial<{  }>;
export const isDeleteAtsCustomAvionteSyncedJobsJobRemoteIdRequestBody = typia.createIs<DeleteAtsCustomAvionteSyncedJobsJobRemoteIdRequestBody>();
export const assertDeleteAtsCustomAvionteSyncedJobsJobRemoteIdRequestBody = typia.createAssert<DeleteAtsCustomAvionteSyncedJobsJobRemoteIdRequestBody>();
export const validateDeleteAtsCustomAvionteSyncedJobsJobRemoteIdRequestBody = typia.createValidate<DeleteAtsCustomAvionteSyncedJobsJobRemoteIdRequestBody>();

export type GetAssessmentPackagesPositiveResponse = { status: string, data: { packages: Array<{ id: string, name: string, description: string, updated_at: (string | null), type: (("BEHAVIORAL" | "VIDEO_INTERVIEW" | "SKILLS_TEST" | "BACKGROUND_CHECK" | "REFERENCE_CHECK") | null) }> } };
export const isGetAssessmentPackagesPositiveResponse = typia.createIs<GetAssessmentPackagesPositiveResponse>();
export const assertGetAssessmentPackagesPositiveResponse = typia.createAssert<GetAssessmentPackagesPositiveResponse>();
export const validateGetAssessmentPackagesPositiveResponse = typia.createValidate<GetAssessmentPackagesPositiveResponse>();

export type PutAssessmentPackagesPositiveResponse = { status: string, data: Record<string, unknown>, warnings: Array<{ message: string }> };
export const isPutAssessmentPackagesPositiveResponse = typia.createIs<PutAssessmentPackagesPositiveResponse>();
export const assertPutAssessmentPackagesPositiveResponse = typia.createAssert<PutAssessmentPackagesPositiveResponse>();
export const validatePutAssessmentPackagesPositiveResponse = typia.createValidate<PutAssessmentPackagesPositiveResponse>();

export type PutAssessmentPackagesRequestBody = { packages: Array<{ id: string, type: ("BEHAVIORAL" | "VIDEO_INTERVIEW" | "SKILLS_TEST" | "BACKGROUND_CHECK" | "REFERENCE_CHECK"), name: string, description: string }> };
export const isPutAssessmentPackagesRequestBody = typia.createIs<PutAssessmentPackagesRequestBody>();
export const assertPutAssessmentPackagesRequestBody = typia.createAssert<PutAssessmentPackagesRequestBody>();
export const validatePutAssessmentPackagesRequestBody = typia.createValidate<PutAssessmentPackagesRequestBody>();

export type GetAssessmentOrdersParameterCursor = string;
export const isGetAssessmentOrdersParameterCursor = typia.createIs<GetAssessmentOrdersParameterCursor>();
export const assertGetAssessmentOrdersParameterCursor = typia.createAssert<GetAssessmentOrdersParameterCursor>();
export const validateGetAssessmentOrdersParameterCursor = typia.createValidate<GetAssessmentOrdersParameterCursor>();

export type GetAssessmentOrdersParameterPageSize = number;
export const isGetAssessmentOrdersParameterPageSize = typia.createIs<GetAssessmentOrdersParameterPageSize>();
export const assertGetAssessmentOrdersParameterPageSize = typia.createAssert<GetAssessmentOrdersParameterPageSize>();
export const validateGetAssessmentOrdersParameterPageSize = typia.createValidate<GetAssessmentOrdersParameterPageSize>();

export type GetAssessmentOrdersParameterIds = string;
export const isGetAssessmentOrdersParameterIds = typia.createIs<GetAssessmentOrdersParameterIds>();
export const assertGetAssessmentOrdersParameterIds = typia.createAssert<GetAssessmentOrdersParameterIds>();
export const validateGetAssessmentOrdersParameterIds = typia.createValidate<GetAssessmentOrdersParameterIds>();

export type GetAssessmentOrdersParameterStatuses = string;
export const isGetAssessmentOrdersParameterStatuses = typia.createIs<GetAssessmentOrdersParameterStatuses>();
export const assertGetAssessmentOrdersParameterStatuses = typia.createAssert<GetAssessmentOrdersParameterStatuses>();
export const validateGetAssessmentOrdersParameterStatuses = typia.createValidate<GetAssessmentOrdersParameterStatuses>();

export type GetAssessmentOrdersParameterCreatedAfter = string;
export const isGetAssessmentOrdersParameterCreatedAfter = typia.createIs<GetAssessmentOrdersParameterCreatedAfter>();
export const assertGetAssessmentOrdersParameterCreatedAfter = typia.createAssert<GetAssessmentOrdersParameterCreatedAfter>();
export const validateGetAssessmentOrdersParameterCreatedAfter = typia.createValidate<GetAssessmentOrdersParameterCreatedAfter>();

export type GetAssessmentOrdersPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, package_id: string, status: ("OPEN" | "COMPLETED" | "CANCELLED" | "REJECTED"), candidate: { remote_id: (string | null), email: string, first_name: (string | null), last_name: (string | null), phone: (string | null) }, application: { remote_id: (string | null) }, job: { remote_id: (string | null), name: (string | null), job_code: (string | null), description: (string | null), location: (Partial<{ street_1: (string | null), street_2: (string | null), city: (string | null), state: (string | null), zip_code: (string | null), country: (string | null), raw: (string | null) }> | null), hiring_team: Array<{ remote_id: (string | null), email: (string | null), first_name: (string | null), last_name: (string | null), hiring_team_roles: Array<("RECRUITER" | "HIRING_MANAGER")> }> } }> } };
export const isGetAssessmentOrdersPositiveResponse = typia.createIs<GetAssessmentOrdersPositiveResponse>();
export const assertGetAssessmentOrdersPositiveResponse = typia.createAssert<GetAssessmentOrdersPositiveResponse>();
export const validateGetAssessmentOrdersPositiveResponse = typia.createValidate<GetAssessmentOrdersPositiveResponse>();

export type GetAssessmentOrdersOpenParameterCursor = string;
export const isGetAssessmentOrdersOpenParameterCursor = typia.createIs<GetAssessmentOrdersOpenParameterCursor>();
export const assertGetAssessmentOrdersOpenParameterCursor = typia.createAssert<GetAssessmentOrdersOpenParameterCursor>();
export const validateGetAssessmentOrdersOpenParameterCursor = typia.createValidate<GetAssessmentOrdersOpenParameterCursor>();

export type GetAssessmentOrdersOpenParameterPageSize = number;
export const isGetAssessmentOrdersOpenParameterPageSize = typia.createIs<GetAssessmentOrdersOpenParameterPageSize>();
export const assertGetAssessmentOrdersOpenParameterPageSize = typia.createAssert<GetAssessmentOrdersOpenParameterPageSize>();
export const validateGetAssessmentOrdersOpenParameterPageSize = typia.createValidate<GetAssessmentOrdersOpenParameterPageSize>();

export type GetAssessmentOrdersOpenPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, package_id: string, candidate: { remote_id: (string | null), email: string, first_name: (string | null), last_name: (string | null), phone: (string | null) }, application: { remote_id: (string | null) }, job: { remote_id: (string | null), name: (string | null), job_code: (string | null), description: (string | null), location: (Partial<{ street_1: (string | null), street_2: (string | null), city: (string | null), state: (string | null), zip_code: (string | null), country: (string | null), raw: (string | null) }> | null), hiring_team: Array<{ remote_id: (string | null), email: (string | null), first_name: (string | null), last_name: (string | null), hiring_team_roles: Array<("RECRUITER" | "HIRING_MANAGER")> }> } }> } };
export const isGetAssessmentOrdersOpenPositiveResponse = typia.createIs<GetAssessmentOrdersOpenPositiveResponse>();
export const assertGetAssessmentOrdersOpenPositiveResponse = typia.createAssert<GetAssessmentOrdersOpenPositiveResponse>();
export const validateGetAssessmentOrdersOpenPositiveResponse = typia.createValidate<GetAssessmentOrdersOpenPositiveResponse>();

export type PutAssessmentOrdersAssessmentOrderIdResultParameterAssessmentOrderId = string;
export const isPutAssessmentOrdersAssessmentOrderIdResultParameterAssessmentOrderId = typia.createIs<PutAssessmentOrdersAssessmentOrderIdResultParameterAssessmentOrderId>();
export const assertPutAssessmentOrdersAssessmentOrderIdResultParameterAssessmentOrderId = typia.createAssert<PutAssessmentOrdersAssessmentOrderIdResultParameterAssessmentOrderId>();
export const validatePutAssessmentOrdersAssessmentOrderIdResultParameterAssessmentOrderId = typia.createValidate<PutAssessmentOrdersAssessmentOrderIdResultParameterAssessmentOrderId>();

export type PutAssessmentOrdersAssessmentOrderIdResultPositiveResponse = { status: string, data: Record<string, unknown>, warnings: Array<{ message: string }> };
export const isPutAssessmentOrdersAssessmentOrderIdResultPositiveResponse = typia.createIs<PutAssessmentOrdersAssessmentOrderIdResultPositiveResponse>();
export const assertPutAssessmentOrdersAssessmentOrderIdResultPositiveResponse = typia.createAssert<PutAssessmentOrdersAssessmentOrderIdResultPositiveResponse>();
export const validatePutAssessmentOrdersAssessmentOrderIdResultPositiveResponse = typia.createValidate<PutAssessmentOrdersAssessmentOrderIdResultPositiveResponse>();

export type PutAssessmentOrdersAssessmentOrderIdResultRequestBody = { status: ("COMPLETED" | "CANCELLED" | "OPEN"), result_url: string, completed_at?: string, score?: number, max_score?: number, attributes?: Array<({ type: string, label: string, value: string } | { type: string, id: string, label: string, score: { value: number, max: number }, status: ("COMPLETED" | "CANCELLED") })>, attachments?: Array<{ name: string, content_type?: string, data_url?: string, data?: string }>, remote_fields?: Partial<{ smartrecruiters: Partial<{ scoreLabel: string }>, recruitee: Partial<{ subtitle: string }> }> };
export const isPutAssessmentOrdersAssessmentOrderIdResultRequestBody = typia.createIs<PutAssessmentOrdersAssessmentOrderIdResultRequestBody>();
export const assertPutAssessmentOrdersAssessmentOrderIdResultRequestBody = typia.createAssert<PutAssessmentOrdersAssessmentOrderIdResultRequestBody>();
export const validatePutAssessmentOrdersAssessmentOrderIdResultRequestBody = typia.createValidate<PutAssessmentOrdersAssessmentOrderIdResultRequestBody>();

export type GetLmsUsersParameterCursor = string;
export const isGetLmsUsersParameterCursor = typia.createIs<GetLmsUsersParameterCursor>();
export const assertGetLmsUsersParameterCursor = typia.createAssert<GetLmsUsersParameterCursor>();
export const validateGetLmsUsersParameterCursor = typia.createValidate<GetLmsUsersParameterCursor>();

export type GetLmsUsersParameterPageSize = number;
export const isGetLmsUsersParameterPageSize = typia.createIs<GetLmsUsersParameterPageSize>();
export const assertGetLmsUsersParameterPageSize = typia.createAssert<GetLmsUsersParameterPageSize>();
export const validateGetLmsUsersParameterPageSize = typia.createValidate<GetLmsUsersParameterPageSize>();

export type GetLmsUsersParameterUpdatedAfter = string;
export const isGetLmsUsersParameterUpdatedAfter = typia.createIs<GetLmsUsersParameterUpdatedAfter>();
export const assertGetLmsUsersParameterUpdatedAfter = typia.createAssert<GetLmsUsersParameterUpdatedAfter>();
export const validateGetLmsUsersParameterUpdatedAfter = typia.createValidate<GetLmsUsersParameterUpdatedAfter>();

export type GetLmsUsersParameterIncludeDeleted = ("true" | "false");
export const isGetLmsUsersParameterIncludeDeleted = typia.createIs<GetLmsUsersParameterIncludeDeleted>();
export const assertGetLmsUsersParameterIncludeDeleted = typia.createAssert<GetLmsUsersParameterIncludeDeleted>();
export const validateGetLmsUsersParameterIncludeDeleted = typia.createValidate<GetLmsUsersParameterIncludeDeleted>();

export type GetLmsUsersParameterIgnoreUnsupportedFilters = ("true" | "false");
export const isGetLmsUsersParameterIgnoreUnsupportedFilters = typia.createIs<GetLmsUsersParameterIgnoreUnsupportedFilters>();
export const assertGetLmsUsersParameterIgnoreUnsupportedFilters = typia.createAssert<GetLmsUsersParameterIgnoreUnsupportedFilters>();
export const validateGetLmsUsersParameterIgnoreUnsupportedFilters = typia.createValidate<GetLmsUsersParameterIgnoreUnsupportedFilters>();

export type GetLmsUsersParameterIds = string;
export const isGetLmsUsersParameterIds = typia.createIs<GetLmsUsersParameterIds>();
export const assertGetLmsUsersParameterIds = typia.createAssert<GetLmsUsersParameterIds>();
export const validateGetLmsUsersParameterIds = typia.createValidate<GetLmsUsersParameterIds>();

export type GetLmsUsersParameterRemoteIds = string;
export const isGetLmsUsersParameterRemoteIds = typia.createIs<GetLmsUsersParameterRemoteIds>();
export const assertGetLmsUsersParameterRemoteIds = typia.createAssert<GetLmsUsersParameterRemoteIds>();
export const validateGetLmsUsersParameterRemoteIds = typia.createValidate<GetLmsUsersParameterRemoteIds>();

export type GetLmsUsersParameterWorkEmails = string;
export const isGetLmsUsersParameterWorkEmails = typia.createIs<GetLmsUsersParameterWorkEmails>();
export const assertGetLmsUsersParameterWorkEmails = typia.createAssert<GetLmsUsersParameterWorkEmails>();
export const validateGetLmsUsersParameterWorkEmails = typia.createValidate<GetLmsUsersParameterWorkEmails>();

export type GetLmsUsersPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, remote_id: string, first_name: (string | null), last_name: (string | null), work_email: (string | null), status: (("ACTIVE" | "INACTIVE") | null), remote_created_at: (string | null), remote_deleted_at: (string | null), changed_at: string, remote_data: (Record<string, unknown> | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }> }> } };
export const isGetLmsUsersPositiveResponse = typia.createIs<GetLmsUsersPositiveResponse>();
export const assertGetLmsUsersPositiveResponse = typia.createAssert<GetLmsUsersPositiveResponse>();
export const validateGetLmsUsersPositiveResponse = typia.createValidate<GetLmsUsersPositiveResponse>();

export type GetLmsCourseProgressionsParameterCursor = string;
export const isGetLmsCourseProgressionsParameterCursor = typia.createIs<GetLmsCourseProgressionsParameterCursor>();
export const assertGetLmsCourseProgressionsParameterCursor = typia.createAssert<GetLmsCourseProgressionsParameterCursor>();
export const validateGetLmsCourseProgressionsParameterCursor = typia.createValidate<GetLmsCourseProgressionsParameterCursor>();

export type GetLmsCourseProgressionsParameterPageSize = number;
export const isGetLmsCourseProgressionsParameterPageSize = typia.createIs<GetLmsCourseProgressionsParameterPageSize>();
export const assertGetLmsCourseProgressionsParameterPageSize = typia.createAssert<GetLmsCourseProgressionsParameterPageSize>();
export const validateGetLmsCourseProgressionsParameterPageSize = typia.createValidate<GetLmsCourseProgressionsParameterPageSize>();

export type GetLmsCourseProgressionsParameterUpdatedAfter = string;
export const isGetLmsCourseProgressionsParameterUpdatedAfter = typia.createIs<GetLmsCourseProgressionsParameterUpdatedAfter>();
export const assertGetLmsCourseProgressionsParameterUpdatedAfter = typia.createAssert<GetLmsCourseProgressionsParameterUpdatedAfter>();
export const validateGetLmsCourseProgressionsParameterUpdatedAfter = typia.createValidate<GetLmsCourseProgressionsParameterUpdatedAfter>();

export type GetLmsCourseProgressionsParameterIncludeDeleted = ("true" | "false");
export const isGetLmsCourseProgressionsParameterIncludeDeleted = typia.createIs<GetLmsCourseProgressionsParameterIncludeDeleted>();
export const assertGetLmsCourseProgressionsParameterIncludeDeleted = typia.createAssert<GetLmsCourseProgressionsParameterIncludeDeleted>();
export const validateGetLmsCourseProgressionsParameterIncludeDeleted = typia.createValidate<GetLmsCourseProgressionsParameterIncludeDeleted>();

export type GetLmsCourseProgressionsParameterIgnoreUnsupportedFilters = ("true" | "false");
export const isGetLmsCourseProgressionsParameterIgnoreUnsupportedFilters = typia.createIs<GetLmsCourseProgressionsParameterIgnoreUnsupportedFilters>();
export const assertGetLmsCourseProgressionsParameterIgnoreUnsupportedFilters = typia.createAssert<GetLmsCourseProgressionsParameterIgnoreUnsupportedFilters>();
export const validateGetLmsCourseProgressionsParameterIgnoreUnsupportedFilters = typia.createValidate<GetLmsCourseProgressionsParameterIgnoreUnsupportedFilters>();

export type GetLmsCourseProgressionsParameterIds = string;
export const isGetLmsCourseProgressionsParameterIds = typia.createIs<GetLmsCourseProgressionsParameterIds>();
export const assertGetLmsCourseProgressionsParameterIds = typia.createAssert<GetLmsCourseProgressionsParameterIds>();
export const validateGetLmsCourseProgressionsParameterIds = typia.createValidate<GetLmsCourseProgressionsParameterIds>();

export type GetLmsCourseProgressionsParameterRemoteIds = string;
export const isGetLmsCourseProgressionsParameterRemoteIds = typia.createIs<GetLmsCourseProgressionsParameterRemoteIds>();
export const assertGetLmsCourseProgressionsParameterRemoteIds = typia.createAssert<GetLmsCourseProgressionsParameterRemoteIds>();
export const validateGetLmsCourseProgressionsParameterRemoteIds = typia.createValidate<GetLmsCourseProgressionsParameterRemoteIds>();

export type GetLmsCourseProgressionsParameterUserIds = string;
export const isGetLmsCourseProgressionsParameterUserIds = typia.createIs<GetLmsCourseProgressionsParameterUserIds>();
export const assertGetLmsCourseProgressionsParameterUserIds = typia.createAssert<GetLmsCourseProgressionsParameterUserIds>();
export const validateGetLmsCourseProgressionsParameterUserIds = typia.createValidate<GetLmsCourseProgressionsParameterUserIds>();

export type GetLmsCourseProgressionsParameterCourseIds = string;
export const isGetLmsCourseProgressionsParameterCourseIds = typia.createIs<GetLmsCourseProgressionsParameterCourseIds>();
export const assertGetLmsCourseProgressionsParameterCourseIds = typia.createAssert<GetLmsCourseProgressionsParameterCourseIds>();
export const validateGetLmsCourseProgressionsParameterCourseIds = typia.createValidate<GetLmsCourseProgressionsParameterCourseIds>();

export type GetLmsCourseProgressionsPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, remote_id: string, user_id: string, course_revision_id: string, status: (("ENROLLED" | "IN_PROGRESS" | "COMPLETED" | "DROPPED") | null), enrolled_at: (string | null), completed_at: (string | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null), user: { id: string, remote_id: string, first_name: (string | null), last_name: (string | null), work_email: (string | null) }, course_revision: { id: string, remote_id: string, title: (string | null), course: ({ id: string, remote_id: string } | null) } }> } };
export const isGetLmsCourseProgressionsPositiveResponse = typia.createIs<GetLmsCourseProgressionsPositiveResponse>();
export const assertGetLmsCourseProgressionsPositiveResponse = typia.createAssert<GetLmsCourseProgressionsPositiveResponse>();
export const validateGetLmsCourseProgressionsPositiveResponse = typia.createValidate<GetLmsCourseProgressionsPositiveResponse>();

export type PostLmsCourseProgressionsPositiveResponse = { status: string, data: { id: string, remote_id: string, user_id: string, course_revision_id: string, status: (("ENROLLED" | "IN_PROGRESS" | "COMPLETED" | "DROPPED") | null), enrolled_at: (string | null), completed_at: (string | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null), user: { id: string, remote_id: string, first_name: (string | null), last_name: (string | null), work_email: (string | null) }, course_revision: { id: string, remote_id: string, title: (string | null), course: ({ id: string, remote_id: string } | null) } }, warnings: Array<{ message: string }> };
export const isPostLmsCourseProgressionsPositiveResponse = typia.createIs<PostLmsCourseProgressionsPositiveResponse>();
export const assertPostLmsCourseProgressionsPositiveResponse = typia.createAssert<PostLmsCourseProgressionsPositiveResponse>();
export const validatePostLmsCourseProgressionsPositiveResponse = typia.createValidate<PostLmsCourseProgressionsPositiveResponse>();

export type PostLmsCourseProgressionsRequestBody = { user_id: string, course_revision_id: string };
export const isPostLmsCourseProgressionsRequestBody = typia.createIs<PostLmsCourseProgressionsRequestBody>();
export const assertPostLmsCourseProgressionsRequestBody = typia.createAssert<PostLmsCourseProgressionsRequestBody>();
export const validatePostLmsCourseProgressionsRequestBody = typia.createValidate<PostLmsCourseProgressionsRequestBody>();

export type PostLmsCourseProgressionsCourseProgressionIdCompleteParameterCourseProgressionId = string;
export const isPostLmsCourseProgressionsCourseProgressionIdCompleteParameterCourseProgressionId = typia.createIs<PostLmsCourseProgressionsCourseProgressionIdCompleteParameterCourseProgressionId>();
export const assertPostLmsCourseProgressionsCourseProgressionIdCompleteParameterCourseProgressionId = typia.createAssert<PostLmsCourseProgressionsCourseProgressionIdCompleteParameterCourseProgressionId>();
export const validatePostLmsCourseProgressionsCourseProgressionIdCompleteParameterCourseProgressionId = typia.createValidate<PostLmsCourseProgressionsCourseProgressionIdCompleteParameterCourseProgressionId>();

export type PostLmsCourseProgressionsCourseProgressionIdCompletePositiveResponse = { status: string, data: { id: string, remote_id: string, user_id: string, course_revision_id: string, status: (("ENROLLED" | "IN_PROGRESS" | "COMPLETED" | "DROPPED") | null), enrolled_at: (string | null), completed_at: (string | null), changed_at: string, remote_deleted_at: (string | null), remote_data: (Record<string, unknown> | null), user: { id: string, remote_id: string, first_name: (string | null), last_name: (string | null), work_email: (string | null) }, course_revision: { id: string, remote_id: string, title: (string | null), course: ({ id: string, remote_id: string } | null) } }, warnings: Array<{ message: string }> };
export const isPostLmsCourseProgressionsCourseProgressionIdCompletePositiveResponse = typia.createIs<PostLmsCourseProgressionsCourseProgressionIdCompletePositiveResponse>();
export const assertPostLmsCourseProgressionsCourseProgressionIdCompletePositiveResponse = typia.createAssert<PostLmsCourseProgressionsCourseProgressionIdCompletePositiveResponse>();
export const validatePostLmsCourseProgressionsCourseProgressionIdCompletePositiveResponse = typia.createValidate<PostLmsCourseProgressionsCourseProgressionIdCompletePositiveResponse>();

export type PostLmsCourseProgressionsCourseProgressionIdCompleteRequestBody = Partial<{ completed_at: (string | null), score: (number | null) }>;
export const isPostLmsCourseProgressionsCourseProgressionIdCompleteRequestBody = typia.createIs<PostLmsCourseProgressionsCourseProgressionIdCompleteRequestBody>();
export const assertPostLmsCourseProgressionsCourseProgressionIdCompleteRequestBody = typia.createAssert<PostLmsCourseProgressionsCourseProgressionIdCompleteRequestBody>();
export const validatePostLmsCourseProgressionsCourseProgressionIdCompleteRequestBody = typia.createValidate<PostLmsCourseProgressionsCourseProgressionIdCompleteRequestBody>();

export type GetLmsCoursesParameterCursor = string;
export const isGetLmsCoursesParameterCursor = typia.createIs<GetLmsCoursesParameterCursor>();
export const assertGetLmsCoursesParameterCursor = typia.createAssert<GetLmsCoursesParameterCursor>();
export const validateGetLmsCoursesParameterCursor = typia.createValidate<GetLmsCoursesParameterCursor>();

export type GetLmsCoursesParameterPageSize = number;
export const isGetLmsCoursesParameterPageSize = typia.createIs<GetLmsCoursesParameterPageSize>();
export const assertGetLmsCoursesParameterPageSize = typia.createAssert<GetLmsCoursesParameterPageSize>();
export const validateGetLmsCoursesParameterPageSize = typia.createValidate<GetLmsCoursesParameterPageSize>();

export type GetLmsCoursesParameterUpdatedAfter = string;
export const isGetLmsCoursesParameterUpdatedAfter = typia.createIs<GetLmsCoursesParameterUpdatedAfter>();
export const assertGetLmsCoursesParameterUpdatedAfter = typia.createAssert<GetLmsCoursesParameterUpdatedAfter>();
export const validateGetLmsCoursesParameterUpdatedAfter = typia.createValidate<GetLmsCoursesParameterUpdatedAfter>();

export type GetLmsCoursesParameterIncludeDeleted = ("true" | "false");
export const isGetLmsCoursesParameterIncludeDeleted = typia.createIs<GetLmsCoursesParameterIncludeDeleted>();
export const assertGetLmsCoursesParameterIncludeDeleted = typia.createAssert<GetLmsCoursesParameterIncludeDeleted>();
export const validateGetLmsCoursesParameterIncludeDeleted = typia.createValidate<GetLmsCoursesParameterIncludeDeleted>();

export type GetLmsCoursesParameterIgnoreUnsupportedFilters = ("true" | "false");
export const isGetLmsCoursesParameterIgnoreUnsupportedFilters = typia.createIs<GetLmsCoursesParameterIgnoreUnsupportedFilters>();
export const assertGetLmsCoursesParameterIgnoreUnsupportedFilters = typia.createAssert<GetLmsCoursesParameterIgnoreUnsupportedFilters>();
export const validateGetLmsCoursesParameterIgnoreUnsupportedFilters = typia.createValidate<GetLmsCoursesParameterIgnoreUnsupportedFilters>();

export type GetLmsCoursesParameterIds = string;
export const isGetLmsCoursesParameterIds = typia.createIs<GetLmsCoursesParameterIds>();
export const assertGetLmsCoursesParameterIds = typia.createAssert<GetLmsCoursesParameterIds>();
export const validateGetLmsCoursesParameterIds = typia.createValidate<GetLmsCoursesParameterIds>();

export type GetLmsCoursesParameterRemoteIds = string;
export const isGetLmsCoursesParameterRemoteIds = typia.createIs<GetLmsCoursesParameterRemoteIds>();
export const assertGetLmsCoursesParameterRemoteIds = typia.createAssert<GetLmsCoursesParameterRemoteIds>();
export const validateGetLmsCoursesParameterRemoteIds = typia.createValidate<GetLmsCoursesParameterRemoteIds>();

export type GetLmsCoursesPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, remote_id: string, provider_id: (string | null), origin_id: (string | null), remote_created_at: (string | null), remote_deleted_at: (string | null), changed_at: string, remote_data: (Record<string, unknown> | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }>, provider: ({ id: string, remote_id: string, name: (string | null) } | null), revisions: Array<{ id: string, remote_id: string, course_id: (string | null), title: (string | null), description: (string | null), remote_url: (string | null), status: (("ACTIVE" | "INACTIVE") | null), remote_created_at: (string | null), remote_deleted_at: (string | null), changed_at: string, remote_data: (Record<string, unknown> | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }>, skill_assignments: Array<{ skill: { id: string, remote_id: (string | null), name: (string | null) } }> }> }> } };
export const isGetLmsCoursesPositiveResponse = typia.createIs<GetLmsCoursesPositiveResponse>();
export const assertGetLmsCoursesPositiveResponse = typia.createAssert<GetLmsCoursesPositiveResponse>();
export const validateGetLmsCoursesPositiveResponse = typia.createValidate<GetLmsCoursesPositiveResponse>();

export type PostLmsCoursesBulkPositiveResponse = { status: string, data: { task_id: string }, warnings: Array<{ message: string }> };
export const isPostLmsCoursesBulkPositiveResponse = typia.createIs<PostLmsCoursesBulkPositiveResponse>();
export const assertPostLmsCoursesBulkPositiveResponse = typia.createAssert<PostLmsCoursesBulkPositiveResponse>();
export const validatePostLmsCoursesBulkPositiveResponse = typia.createValidate<PostLmsCoursesBulkPositiveResponse>();

export type PostLmsCoursesBulkRequestBody = { items: Array<{ origin_id: string, course: { type: string, title: string, description?: (string | null), course_url: string, thumbnail_url?: (string | null), duration?: (number | null), languages?: (Array<string> | null) } }> };
export const isPostLmsCoursesBulkRequestBody = typia.createIs<PostLmsCoursesBulkRequestBody>();
export const assertPostLmsCoursesBulkRequestBody = typia.createAssert<PostLmsCoursesBulkRequestBody>();
export const validatePostLmsCoursesBulkRequestBody = typia.createValidate<PostLmsCoursesBulkRequestBody>();

export type GetLmsCoursesBulkTaskIdParameterTaskId = string;
export const isGetLmsCoursesBulkTaskIdParameterTaskId = typia.createIs<GetLmsCoursesBulkTaskIdParameterTaskId>();
export const assertGetLmsCoursesBulkTaskIdParameterTaskId = typia.createAssert<GetLmsCoursesBulkTaskIdParameterTaskId>();
export const validateGetLmsCoursesBulkTaskIdParameterTaskId = typia.createValidate<GetLmsCoursesBulkTaskIdParameterTaskId>();

export type GetLmsCoursesBulkTaskIdPositiveResponse = { status: string, data: ({ task_id: string, created_at: string, status: string, completed_at: null } | { task_id: string, created_at: string, status: string, data: Array<({ origin_id: string, status: string, data: { id: string } } | { origin_id: string, status: string, error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS" | "LMS.COURSE_UPDATE_NOT_SUPPORTED" | "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING" | "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } })>, completed_at: string } | { task_id: string, created_at: string, status: string, error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS" | "LMS.COURSE_UPDATE_NOT_SUPPORTED" | "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING" | "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) }, completed_at: string }) };
export const isGetLmsCoursesBulkTaskIdPositiveResponse = typia.createIs<GetLmsCoursesBulkTaskIdPositiveResponse>();
export const assertGetLmsCoursesBulkTaskIdPositiveResponse = typia.createAssert<GetLmsCoursesBulkTaskIdPositiveResponse>();
export const validateGetLmsCoursesBulkTaskIdPositiveResponse = typia.createValidate<GetLmsCoursesBulkTaskIdPositiveResponse>();

export type PostLmsCoursesCourseIdDeactivateParameterCourseId = string;
export const isPostLmsCoursesCourseIdDeactivateParameterCourseId = typia.createIs<PostLmsCoursesCourseIdDeactivateParameterCourseId>();
export const assertPostLmsCoursesCourseIdDeactivateParameterCourseId = typia.createAssert<PostLmsCoursesCourseIdDeactivateParameterCourseId>();
export const validatePostLmsCoursesCourseIdDeactivateParameterCourseId = typia.createValidate<PostLmsCoursesCourseIdDeactivateParameterCourseId>();

export type PostLmsCoursesCourseIdDeactivatePositiveResponse = { status: string, data: { id: string, remote_id: string, provider_id: (string | null), origin_id: (string | null), remote_created_at: (string | null), remote_deleted_at: (string | null), changed_at: string, remote_data: (Record<string, unknown> | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }>, provider: ({ id: string, remote_id: string, name: (string | null) } | null), revisions: Array<{ id: string, remote_id: string, course_id: (string | null), title: (string | null), description: (string | null), remote_url: (string | null), status: (("ACTIVE" | "INACTIVE") | null), remote_created_at: (string | null), remote_deleted_at: (string | null), changed_at: string, remote_data: (Record<string, unknown> | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }>, skill_assignments: Array<{ skill: { id: string, remote_id: (string | null), name: (string | null) } }> }> }, warnings: Array<{ message: string }> };
export const isPostLmsCoursesCourseIdDeactivatePositiveResponse = typia.createIs<PostLmsCoursesCourseIdDeactivatePositiveResponse>();
export const assertPostLmsCoursesCourseIdDeactivatePositiveResponse = typia.createAssert<PostLmsCoursesCourseIdDeactivatePositiveResponse>();
export const validatePostLmsCoursesCourseIdDeactivatePositiveResponse = typia.createValidate<PostLmsCoursesCourseIdDeactivatePositiveResponse>();

export type PostLmsCoursesCourseIdDeactivateRequestBody = Partial<{  }>;
export const isPostLmsCoursesCourseIdDeactivateRequestBody = typia.createIs<PostLmsCoursesCourseIdDeactivateRequestBody>();
export const assertPostLmsCoursesCourseIdDeactivateRequestBody = typia.createAssert<PostLmsCoursesCourseIdDeactivateRequestBody>();
export const validatePostLmsCoursesCourseIdDeactivateRequestBody = typia.createValidate<PostLmsCoursesCourseIdDeactivateRequestBody>();

export type GetLmsSkillsParameterCursor = string;
export const isGetLmsSkillsParameterCursor = typia.createIs<GetLmsSkillsParameterCursor>();
export const assertGetLmsSkillsParameterCursor = typia.createAssert<GetLmsSkillsParameterCursor>();
export const validateGetLmsSkillsParameterCursor = typia.createValidate<GetLmsSkillsParameterCursor>();

export type GetLmsSkillsParameterPageSize = number;
export const isGetLmsSkillsParameterPageSize = typia.createIs<GetLmsSkillsParameterPageSize>();
export const assertGetLmsSkillsParameterPageSize = typia.createAssert<GetLmsSkillsParameterPageSize>();
export const validateGetLmsSkillsParameterPageSize = typia.createValidate<GetLmsSkillsParameterPageSize>();

export type GetLmsSkillsParameterUpdatedAfter = string;
export const isGetLmsSkillsParameterUpdatedAfter = typia.createIs<GetLmsSkillsParameterUpdatedAfter>();
export const assertGetLmsSkillsParameterUpdatedAfter = typia.createAssert<GetLmsSkillsParameterUpdatedAfter>();
export const validateGetLmsSkillsParameterUpdatedAfter = typia.createValidate<GetLmsSkillsParameterUpdatedAfter>();

export type GetLmsSkillsParameterIncludeDeleted = ("true" | "false");
export const isGetLmsSkillsParameterIncludeDeleted = typia.createIs<GetLmsSkillsParameterIncludeDeleted>();
export const assertGetLmsSkillsParameterIncludeDeleted = typia.createAssert<GetLmsSkillsParameterIncludeDeleted>();
export const validateGetLmsSkillsParameterIncludeDeleted = typia.createValidate<GetLmsSkillsParameterIncludeDeleted>();

export type GetLmsSkillsParameterIgnoreUnsupportedFilters = ("true" | "false");
export const isGetLmsSkillsParameterIgnoreUnsupportedFilters = typia.createIs<GetLmsSkillsParameterIgnoreUnsupportedFilters>();
export const assertGetLmsSkillsParameterIgnoreUnsupportedFilters = typia.createAssert<GetLmsSkillsParameterIgnoreUnsupportedFilters>();
export const validateGetLmsSkillsParameterIgnoreUnsupportedFilters = typia.createValidate<GetLmsSkillsParameterIgnoreUnsupportedFilters>();

export type GetLmsSkillsParameterIds = string;
export const isGetLmsSkillsParameterIds = typia.createIs<GetLmsSkillsParameterIds>();
export const assertGetLmsSkillsParameterIds = typia.createAssert<GetLmsSkillsParameterIds>();
export const validateGetLmsSkillsParameterIds = typia.createValidate<GetLmsSkillsParameterIds>();

export type GetLmsSkillsParameterRemoteIds = string;
export const isGetLmsSkillsParameterRemoteIds = typia.createIs<GetLmsSkillsParameterRemoteIds>();
export const assertGetLmsSkillsParameterRemoteIds = typia.createAssert<GetLmsSkillsParameterRemoteIds>();
export const validateGetLmsSkillsParameterRemoteIds = typia.createValidate<GetLmsSkillsParameterRemoteIds>();

export type GetLmsSkillsPositiveResponse = { status: string, data: { next: (string | null), results: Array<{ id: string, remote_id: (string | null), name: (string | null), remote_created_at: (string | null), remote_deleted_at: (string | null), changed_at: string, remote_data: (Record<string, unknown> | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }> }> } };
export const isGetLmsSkillsPositiveResponse = typia.createIs<GetLmsSkillsPositiveResponse>();
export const assertGetLmsSkillsPositiveResponse = typia.createAssert<GetLmsSkillsPositiveResponse>();
export const validateGetLmsSkillsPositiveResponse = typia.createValidate<GetLmsSkillsPositiveResponse>();

export type PostAiApplyCareerSitesPositiveResponse = { status: string, data: { id: string, label: string } };
export const isPostAiApplyCareerSitesPositiveResponse = typia.createIs<PostAiApplyCareerSitesPositiveResponse>();
export const assertPostAiApplyCareerSitesPositiveResponse = typia.createAssert<PostAiApplyCareerSitesPositiveResponse>();
export const validatePostAiApplyCareerSitesPositiveResponse = typia.createValidate<PostAiApplyCareerSitesPositiveResponse>();

export type PostAiApplyCareerSitesRequestBody = { label: string };
export const isPostAiApplyCareerSitesRequestBody = typia.createIs<PostAiApplyCareerSitesRequestBody>();
export const assertPostAiApplyCareerSitesRequestBody = typia.createAssert<PostAiApplyCareerSitesRequestBody>();
export const validatePostAiApplyCareerSitesRequestBody = typia.createValidate<PostAiApplyCareerSitesRequestBody>();

export type GetAiApplyCareerSitesParameterCursor = string;
export const isGetAiApplyCareerSitesParameterCursor = typia.createIs<GetAiApplyCareerSitesParameterCursor>();
export const assertGetAiApplyCareerSitesParameterCursor = typia.createAssert<GetAiApplyCareerSitesParameterCursor>();
export const validateGetAiApplyCareerSitesParameterCursor = typia.createValidate<GetAiApplyCareerSitesParameterCursor>();

export type GetAiApplyCareerSitesParameterPageSize = number;
export const isGetAiApplyCareerSitesParameterPageSize = typia.createIs<GetAiApplyCareerSitesParameterPageSize>();
export const assertGetAiApplyCareerSitesParameterPageSize = typia.createAssert<GetAiApplyCareerSitesParameterPageSize>();
export const validateGetAiApplyCareerSitesParameterPageSize = typia.createValidate<GetAiApplyCareerSitesParameterPageSize>();

export type GetAiApplyCareerSitesParameterIds = string;
export const isGetAiApplyCareerSitesParameterIds = typia.createIs<GetAiApplyCareerSitesParameterIds>();
export const assertGetAiApplyCareerSitesParameterIds = typia.createAssert<GetAiApplyCareerSitesParameterIds>();
export const validateGetAiApplyCareerSitesParameterIds = typia.createValidate<GetAiApplyCareerSitesParameterIds>();

export type GetAiApplyCareerSitesPositiveResponse = { status: string, data: { results: Array<{ id: string, label: string }>, next: (string | null) } };
export const isGetAiApplyCareerSitesPositiveResponse = typia.createIs<GetAiApplyCareerSitesPositiveResponse>();
export const assertGetAiApplyCareerSitesPositiveResponse = typia.createAssert<GetAiApplyCareerSitesPositiveResponse>();
export const validateGetAiApplyCareerSitesPositiveResponse = typia.createValidate<GetAiApplyCareerSitesPositiveResponse>();

export type GetAiApplyPostingsParameterCursor = string;
export const isGetAiApplyPostingsParameterCursor = typia.createIs<GetAiApplyPostingsParameterCursor>();
export const assertGetAiApplyPostingsParameterCursor = typia.createAssert<GetAiApplyPostingsParameterCursor>();
export const validateGetAiApplyPostingsParameterCursor = typia.createValidate<GetAiApplyPostingsParameterCursor>();

export type GetAiApplyPostingsParameterPageSize = number;
export const isGetAiApplyPostingsParameterPageSize = typia.createIs<GetAiApplyPostingsParameterPageSize>();
export const assertGetAiApplyPostingsParameterPageSize = typia.createAssert<GetAiApplyPostingsParameterPageSize>();
export const validateGetAiApplyPostingsParameterPageSize = typia.createValidate<GetAiApplyPostingsParameterPageSize>();

export type GetAiApplyPostingsParameterIds = string;
export const isGetAiApplyPostingsParameterIds = typia.createIs<GetAiApplyPostingsParameterIds>();
export const assertGetAiApplyPostingsParameterIds = typia.createAssert<GetAiApplyPostingsParameterIds>();
export const validateGetAiApplyPostingsParameterIds = typia.createValidate<GetAiApplyPostingsParameterIds>();

export type GetAiApplyPostingsParameterCareerSiteIds = string;
export const isGetAiApplyPostingsParameterCareerSiteIds = typia.createIs<GetAiApplyPostingsParameterCareerSiteIds>();
export const assertGetAiApplyPostingsParameterCareerSiteIds = typia.createAssert<GetAiApplyPostingsParameterCareerSiteIds>();
export const validateGetAiApplyPostingsParameterCareerSiteIds = typia.createValidate<GetAiApplyPostingsParameterCareerSiteIds>();

export type GetAiApplyPostingsParameterJobCodes = string;
export const isGetAiApplyPostingsParameterJobCodes = typia.createIs<GetAiApplyPostingsParameterJobCodes>();
export const assertGetAiApplyPostingsParameterJobCodes = typia.createAssert<GetAiApplyPostingsParameterJobCodes>();
export const validateGetAiApplyPostingsParameterJobCodes = typia.createValidate<GetAiApplyPostingsParameterJobCodes>();

export type GetAiApplyPostingsPositiveResponse = { status: string, data: { results: Array<{ id: string, career_site: { id: string, label: string }, url: string, job_code: (string | null), created_at: string, updated_at: string, archived_at: (string | null), archived_reason: (("JOB_POSTING_TAKEN_OFFLINE" | "MANUAL_ARCHIVE" | "REMOVED_FROM_JOB_FEED") | null), availability: ("APPLYABLE" | "PENDING" | "ARCHIVED" | "UNAVAILABLE") }>, next: (string | null) } };
export const isGetAiApplyPostingsPositiveResponse = typia.createIs<GetAiApplyPostingsPositiveResponse>();
export const assertGetAiApplyPostingsPositiveResponse = typia.createAssert<GetAiApplyPostingsPositiveResponse>();
export const validateGetAiApplyPostingsPositiveResponse = typia.createValidate<GetAiApplyPostingsPositiveResponse>();

export type PostAiApplyPostingsPositiveResponse = { status: string, data: { id: string, career_site: { id: string, label: string }, url: string, job_code: (string | null), created_at: string, updated_at: string, archived_at: (string | null), archived_reason: (("JOB_POSTING_TAKEN_OFFLINE" | "MANUAL_ARCHIVE" | "REMOVED_FROM_JOB_FEED") | null), availability: ("APPLYABLE" | "PENDING" | "ARCHIVED" | "UNAVAILABLE") } };
export const isPostAiApplyPostingsPositiveResponse = typia.createIs<PostAiApplyPostingsPositiveResponse>();
export const assertPostAiApplyPostingsPositiveResponse = typia.createAssert<PostAiApplyPostingsPositiveResponse>();
export const validatePostAiApplyPostingsPositiveResponse = typia.createValidate<PostAiApplyPostingsPositiveResponse>();

export type PostAiApplyPostingsRequestBody = { url: string, job_code?: string, location?: ({ country: ("AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BV" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HM" | "HN" | "HR" | "HT" | "HU" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "YE" | "YT" | "ZA" | "ZM" | "ZW"), postal_code?: string } | null), career_site_id: string };
export const isPostAiApplyPostingsRequestBody = typia.createIs<PostAiApplyPostingsRequestBody>();
export const assertPostAiApplyPostingsRequestBody = typia.createAssert<PostAiApplyPostingsRequestBody>();
export const validatePostAiApplyPostingsRequestBody = typia.createValidate<PostAiApplyPostingsRequestBody>();

export type PostAiApplyPostingsPostingIdInquireParameterPostingId = string;
export const isPostAiApplyPostingsPostingIdInquireParameterPostingId = typia.createIs<PostAiApplyPostingsPostingIdInquireParameterPostingId>();
export const assertPostAiApplyPostingsPostingIdInquireParameterPostingId = typia.createAssert<PostAiApplyPostingsPostingIdInquireParameterPostingId>();
export const validatePostAiApplyPostingsPostingIdInquireParameterPostingId = typia.createValidate<PostAiApplyPostingsPostingIdInquireParameterPostingId>();

export type PostAiApplyPostingsPostingIdInquirePositiveResponse = { status: string, data: { application_form: Array<({ block_type: string, question_id: string, label: string, description: (string | null), required: boolean, category: ("EEO" | null), question_type: ("TEXT" | "NUMBER" | "BOOLEAN" | "FILE" | "DATE" | "SINGLE_SELECT" | "MULTI_SELECT"), unified_key: (("EMAIL" | "RESIDENCE_TYPE" | "RESIDENCE_FULL_STRING" | "RESIDENCE_COUNTRY" | "RESIDENCE_CITY" | "RESIDENCE_STATE" | "RESIDENCE_LINE_1" | "RESIDENCE_LINE_2" | "RESIDENCE_ZIP_CODE" | "APPLICANT_POOL_CONSENT" | "TERMS_AND_CONDITIONS" | "FIRST_NAME" | "LAST_NAME" | "FULL_NAME" | "GENDER" | "EXPECTED_START_DATE" | "RESUME" | "BIRTH_DATE" | "PHONE_NUMBER_TYPE" | "FULL_PHONE_NUMBER" | "PHONE_COUNTRY_CODE" | "PHONE_NATIONAL_NUMBER" | "PHONE_EXTENSION") | null), options: (Array<{ id: string, label: string, unified_key: (("HOME" | "WORK" | "MAILING" | "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BV" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HM" | "HN" | "HR" | "HT" | "HU" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "YE" | "YT" | "ZA" | "ZM" | "ZW" | "MALE" | "FEMALE" | "NON_BINARY" | "NOT_SPECIFIED" | "MOBILE" | "LANDLINE" | "SOURCE_OTHER" | "SOURCE_OTHER_JOB_BOARD") | null) }> | null), display_when: ({ question_id: string, answer_equals: (string | Array<string> | number | boolean | { name: string, content_type: string, data: unknown }) } | null) } | { block_type: string, label: string, children: Array<Record<string, unknown>> })>, submission_token: string } };
export const isPostAiApplyPostingsPostingIdInquirePositiveResponse = typia.createIs<PostAiApplyPostingsPostingIdInquirePositiveResponse>();
export const assertPostAiApplyPostingsPostingIdInquirePositiveResponse = typia.createAssert<PostAiApplyPostingsPostingIdInquirePositiveResponse>();
export const validatePostAiApplyPostingsPostingIdInquirePositiveResponse = typia.createValidate<PostAiApplyPostingsPostingIdInquirePositiveResponse>();

export type PostAiApplyPostingsPostingIdInquireRequestBody = Partial<{  }>;
export const isPostAiApplyPostingsPostingIdInquireRequestBody = typia.createIs<PostAiApplyPostingsPostingIdInquireRequestBody>();
export const assertPostAiApplyPostingsPostingIdInquireRequestBody = typia.createAssert<PostAiApplyPostingsPostingIdInquireRequestBody>();
export const validatePostAiApplyPostingsPostingIdInquireRequestBody = typia.createValidate<PostAiApplyPostingsPostingIdInquireRequestBody>();

export type PostAiApplyApplyPositiveResponse = { status: string, data: { id: string, posting_id: string, status: string, created_at: string, updated_at: string } };
export const isPostAiApplyApplyPositiveResponse = typia.createIs<PostAiApplyApplyPositiveResponse>();
export const assertPostAiApplyApplyPositiveResponse = typia.createAssert<PostAiApplyApplyPositiveResponse>();
export const validatePostAiApplyApplyPositiveResponse = typia.createValidate<PostAiApplyApplyPositiveResponse>();

export type PostAiApplyApplyRequestBody = { submission_token: string, candidate_email: string, query_params?: Record<string, string>, screening_question_answers: Array<{ question_id: string, answer: (string | Array<string> | number | boolean | { name: string, content_type: string, data: string }) }>, additional_clicks?: number, additional_clicks_scatter_duration?: number };
export const isPostAiApplyApplyRequestBody = typia.createIs<PostAiApplyApplyRequestBody>();
export const assertPostAiApplyApplyRequestBody = typia.createAssert<PostAiApplyApplyRequestBody>();
export const validatePostAiApplyApplyRequestBody = typia.createValidate<PostAiApplyApplyRequestBody>();

export type GetAiApplyApplicationsParameterCursor = string;
export const isGetAiApplyApplicationsParameterCursor = typia.createIs<GetAiApplyApplicationsParameterCursor>();
export const assertGetAiApplyApplicationsParameterCursor = typia.createAssert<GetAiApplyApplicationsParameterCursor>();
export const validateGetAiApplyApplicationsParameterCursor = typia.createValidate<GetAiApplyApplicationsParameterCursor>();

export type GetAiApplyApplicationsParameterPageSize = number;
export const isGetAiApplyApplicationsParameterPageSize = typia.createIs<GetAiApplyApplicationsParameterPageSize>();
export const assertGetAiApplyApplicationsParameterPageSize = typia.createAssert<GetAiApplyApplicationsParameterPageSize>();
export const validateGetAiApplyApplicationsParameterPageSize = typia.createValidate<GetAiApplyApplicationsParameterPageSize>();

export type GetAiApplyApplicationsParameterIds = string;
export const isGetAiApplyApplicationsParameterIds = typia.createIs<GetAiApplyApplicationsParameterIds>();
export const assertGetAiApplyApplicationsParameterIds = typia.createAssert<GetAiApplyApplicationsParameterIds>();
export const validateGetAiApplyApplicationsParameterIds = typia.createValidate<GetAiApplyApplicationsParameterIds>();

export type GetAiApplyApplicationsParameterJobPostingIds = string;
export const isGetAiApplyApplicationsParameterJobPostingIds = typia.createIs<GetAiApplyApplicationsParameterJobPostingIds>();
export const assertGetAiApplyApplicationsParameterJobPostingIds = typia.createAssert<GetAiApplyApplicationsParameterJobPostingIds>();
export const validateGetAiApplyApplicationsParameterJobPostingIds = typia.createValidate<GetAiApplyApplicationsParameterJobPostingIds>();

export type GetAiApplyApplicationsPositiveResponse = { status: string, data: { results: Array<{ id: string, job_posting_id: string, status: ("SUBMITTED" | "DUPLICATE" | "PENDING" | "FAILED"), created_at: string, updated_at: string }>, next: (string | null) } };
export const isGetAiApplyApplicationsPositiveResponse = typia.createIs<GetAiApplyApplicationsPositiveResponse>();
export const assertGetAiApplyApplicationsPositiveResponse = typia.createAssert<GetAiApplyApplicationsPositiveResponse>();
export const validateGetAiApplyApplicationsPositiveResponse = typia.createValidate<GetAiApplyApplicationsPositiveResponse>();

export type GetAiApplyUnifiedApiJobsParameterCursor = string;
export const isGetAiApplyUnifiedApiJobsParameterCursor = typia.createIs<GetAiApplyUnifiedApiJobsParameterCursor>();
export const assertGetAiApplyUnifiedApiJobsParameterCursor = typia.createAssert<GetAiApplyUnifiedApiJobsParameterCursor>();
export const validateGetAiApplyUnifiedApiJobsParameterCursor = typia.createValidate<GetAiApplyUnifiedApiJobsParameterCursor>();

export type GetAiApplyUnifiedApiJobsParameterPageSize = number;
export const isGetAiApplyUnifiedApiJobsParameterPageSize = typia.createIs<GetAiApplyUnifiedApiJobsParameterPageSize>();
export const assertGetAiApplyUnifiedApiJobsParameterPageSize = typia.createAssert<GetAiApplyUnifiedApiJobsParameterPageSize>();
export const validateGetAiApplyUnifiedApiJobsParameterPageSize = typia.createValidate<GetAiApplyUnifiedApiJobsParameterPageSize>();

export type GetAiApplyUnifiedApiJobsParameterIds = string;
export const isGetAiApplyUnifiedApiJobsParameterIds = typia.createIs<GetAiApplyUnifiedApiJobsParameterIds>();
export const assertGetAiApplyUnifiedApiJobsParameterIds = typia.createAssert<GetAiApplyUnifiedApiJobsParameterIds>();
export const validateGetAiApplyUnifiedApiJobsParameterIds = typia.createValidate<GetAiApplyUnifiedApiJobsParameterIds>();

export type GetAiApplyUnifiedApiJobsParameterRemoteIds = string;
export const isGetAiApplyUnifiedApiJobsParameterRemoteIds = typia.createIs<GetAiApplyUnifiedApiJobsParameterRemoteIds>();
export const assertGetAiApplyUnifiedApiJobsParameterRemoteIds = typia.createAssert<GetAiApplyUnifiedApiJobsParameterRemoteIds>();
export const validateGetAiApplyUnifiedApiJobsParameterRemoteIds = typia.createValidate<GetAiApplyUnifiedApiJobsParameterRemoteIds>();

export type GetAiApplyUnifiedApiJobsParameterJobCodes = string;
export const isGetAiApplyUnifiedApiJobsParameterJobCodes = typia.createIs<GetAiApplyUnifiedApiJobsParameterJobCodes>();
export const assertGetAiApplyUnifiedApiJobsParameterJobCodes = typia.createAssert<GetAiApplyUnifiedApiJobsParameterJobCodes>();
export const validateGetAiApplyUnifiedApiJobsParameterJobCodes = typia.createValidate<GetAiApplyUnifiedApiJobsParameterJobCodes>();

export type GetAiApplyUnifiedApiJobsParameterCareerSiteIds = string;
export const isGetAiApplyUnifiedApiJobsParameterCareerSiteIds = typia.createIs<GetAiApplyUnifiedApiJobsParameterCareerSiteIds>();
export const assertGetAiApplyUnifiedApiJobsParameterCareerSiteIds = typia.createAssert<GetAiApplyUnifiedApiJobsParameterCareerSiteIds>();
export const validateGetAiApplyUnifiedApiJobsParameterCareerSiteIds = typia.createValidate<GetAiApplyUnifiedApiJobsParameterCareerSiteIds>();

export type GetAiApplyUnifiedApiJobsPositiveResponse = { status: string, data: { results: Array<{ id: string, remote_id: string, name: (string | null), job_code: (string | null), description: (string | null), confidential: (boolean | null), weekly_hours: (number | null), category: (string | null), department: (string | null), post_url: (string | null), experience_level: (string | null), salary_amount: (number | null), salary_amount_from: (number | null), salary_amount_to: (number | null), salary_currency: (string | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<Record<string, unknown>>, opened_at: (string | null), closed_at: (string | null), remote_created_at: (string | null), remote_updated_at: (string | null), contact_id: (string | null), remote_data: (Record<string, unknown> | null), changed_at: string, remote_deleted_at: (string | null), remote_url: (string | null), stages: Array<Record<string, unknown>>, screening_questions: (Array<{ id: string, remote_id: (string | null), title: (string | null), description: (string | null), format?: ({ display_type?: (("SINGLE_LINE" | "MULTI_LINE" | "EMAIL" | "URL") | null), max_length?: (number | null), type: string } | { display_type?: (("SLIDER" | "FIELD") | null), max?: (number | null), min?: (number | null), type: string } | { accepted_mime_types?: (Array<string> | null), max_file_size_bytes?: (number | null), type: string } | { display_type?: (("DROPDOWN" | "RADIO") | null), options: Array<{ id: string, remote_id?: (string | null), name: string }>, type: string } | { type: string } | { type: string } | { options: Array<{ id: string, remote_id?: (string | null), name: string }>, type: string } | { type: string } | { raw_question?: unknown, type: string } | null), category: ("EEO" | null), index?: (number | null), required: (boolean | null), precondition_question_id?: (string | null), precondition_options?: (Array<string> | Array<boolean> | null) }> | null), job_postings: Array<Record<string, unknown>>, hiring_team: Array<Record<string, unknown>>, employment_type?: (("FULL_TIME" | "PART_TIME" | "CONTRACT" | "SEASONAL" | "INTERNSHIP") | string | null), status?: (("OPEN" | "CLOSED" | "DRAFT" | "ARCHIVED") | string | null), visibility: (string | null), remote_work_status: (string | null), salary_period: (string | null), location?: (Partial<{ city: (string | null), country: (string | null), raw: (string | null), state: (string | null), street_1: (string | null), street_2: (string | null), zip_code: (string | null) }> | null) }>, next: (string | null) } };
export const isGetAiApplyUnifiedApiJobsPositiveResponse = typia.createIs<GetAiApplyUnifiedApiJobsPositiveResponse>();
export const assertGetAiApplyUnifiedApiJobsPositiveResponse = typia.createAssert<GetAiApplyUnifiedApiJobsPositiveResponse>();
export const validateGetAiApplyUnifiedApiJobsPositiveResponse = typia.createValidate<GetAiApplyUnifiedApiJobsPositiveResponse>();

export type PostAiApplyUnifiedApiJobsJobIdApplicationsParameterJobId = string;
export const isPostAiApplyUnifiedApiJobsJobIdApplicationsParameterJobId = typia.createIs<PostAiApplyUnifiedApiJobsJobIdApplicationsParameterJobId>();
export const assertPostAiApplyUnifiedApiJobsJobIdApplicationsParameterJobId = typia.createAssert<PostAiApplyUnifiedApiJobsJobIdApplicationsParameterJobId>();
export const validatePostAiApplyUnifiedApiJobsJobIdApplicationsParameterJobId = typia.createValidate<PostAiApplyUnifiedApiJobsJobIdApplicationsParameterJobId>();

export type PostAiApplyUnifiedApiJobsJobIdApplicationsPositiveResponse = { status: string, data: { id: string, remote_id: (string | null), outcome: (("PENDING" | "HIRED" | "DECLINED") | null), rejection_reason_name: (string | null), rejected_at: (string | null), current_stage_id: (string | null), job_id: (string | null), candidate_id: (string | null), screening_question_answers?: (Array<({ answer: { content: (string | null) }, question: { remote_id: (string | null), title: string, type: string } } | { answer: { choice: (string | null) }, question: { remote_id: (string | null), title: string, type: string } } | { answer: Partial<{ choices: Array<string> }>, question: { remote_id: (string | null), title: string, type: string } } | { answer: { checked: (boolean | null) }, question: { remote_id: (string | null), title: string, type: string } } | { answer: { number: (number | null) }, question: { remote_id: (string | null), title: string, type: string } } | { answer: { date: (string | null) }, question: { remote_id: (string | null), title: string, type: string } } | { answer: Partial<{ raw: null }>, question: { remote_id: (string | null), title: string, type: string } })> | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }>, remote_url: (string | null), changed_at: string, remote_deleted_at: (string | null), remote_created_at: (string | null), remote_updated_at: (string | null), remote_data: (Record<string, unknown> | null), current_stage: ({ id: string, name: (string | null), remote_id: (string | null), index: (number | null) } | null), job: ({ id: string, name: (string | null), remote_id: string } | null), candidate: ({ id: string, remote_id: string, first_name: (string | null), last_name: (string | null), company: (string | null), title: (string | null), confidential: (boolean | null), source: (string | null), phone_numbers?: (Array<{ phone_number: string, type?: (string | null) }> | null), email_addresses?: (Array<{ email_address?: (string | null), type: (string | null) }> | null), social_media?: (Array<Partial<{ link: (string | null), type: (string | null), username: (string | null) }>> | null), location?: (Partial<{ city: (string | null), country: (string | null), raw: (string | null), state: (string | null), street_1: (string | null), street_2: (string | null), zip_code: (string | null) }> | null), custom_fields: (Record<string, unknown> | null), integration_fields: Array<{ id: string, key: string, type: ("DEFAULT" | "CUSTOM"), value?: null, label: (string | null) }>, remote_url: (string | null), remote_created_at: (string | null), remote_updated_at: (string | null), remote_data: (Record<string, unknown> | null), changed_at: string, remote_deleted_at: (string | null), tags: Array<{ id: string, name: (string | null), remote_id: (string | null) }> } | null) } };
export const isPostAiApplyUnifiedApiJobsJobIdApplicationsPositiveResponse = typia.createIs<PostAiApplyUnifiedApiJobsJobIdApplicationsPositiveResponse>();
export const assertPostAiApplyUnifiedApiJobsJobIdApplicationsPositiveResponse = typia.createAssert<PostAiApplyUnifiedApiJobsJobIdApplicationsPositiveResponse>();
export const validatePostAiApplyUnifiedApiJobsJobIdApplicationsPositiveResponse = typia.createValidate<PostAiApplyUnifiedApiJobsJobIdApplicationsPositiveResponse>();

export type PostAiApplyUnifiedApiJobsJobIdApplicationsRequestBody = { stage_id?: string, candidate: { first_name: string, last_name: string, email_address: string, additional_email_addresses?: Array<{ type: ("PERSONAL" | "WORK" | "OTHER"), email_address: string }>, company?: string, title?: string, phone_number?: string, additional_phone_numbers?: Array<{ type: ("PERSONAL" | "WORK" | "OTHER"), phone_number: string }>, location?: { city?: string, country: string, state?: string, street_1?: string, zip_code?: string }, gender?: ("MALE" | "FEMALE" | "OTHER"), availability_date?: string, salary_expectations?: { period: ("MONTH" | "YEAR"), amount: number }, social_links?: Array<{ url: string }> }, attachments?: Array<{ name: string, content_type?: string, data_url?: string, data?: string, type: ("CV" | "COVER_LETTER" | "OTHER") }>, source?: Partial<{ name: string, unified_key: string, id: string }>, sourced_by?: { user_id: string }, gdpr_consent?: Partial<{ expires_at: string, given: boolean }>, remote_fields?: (Partial<{ successfactors: Partial<{ Candidate: Record<string, unknown>, JobApplication: Record<string, unknown>, copyJobApplicationAttachments: boolean, update_existing_candidate: (boolean | null) }>, personio: Partial<{ application: Record<string, unknown> }>, talentsoft: Partial<{ applicant: Record<string, unknown>, application: Record<string, unknown> }>, teamtailor: Partial<{ candidate: Record<string, unknown>, application: Partial<{ attributes: Record<string, unknown> }> }>, greenhouse: Partial<{ candidate: Record<string, unknown>, application: Record<string, unknown> }>, lever: Partial<{ candidate: Record<string, unknown> }>, workable: Partial<{ candidate: Record<string, unknown> }>, workday: Partial<{ Candidate_Data: Partial<{ Name_Detail_Data: Partial<{ Middle_Name: string, Social_Suffix_Reference: { Predefined_Name_Component_ID: string } }>, Language_Reference: { WID: string }, Job_Application_Data: Partial<{ Job_Applied_To_Data: Partial<{ Global_Personal_Information_Data: Partial<{ Date_of_Birth: string }> }>, Resume_Data: Partial<{ Education_Data: Array<Partial<{ School_Name: string, First_Year_Attended: number, Last_Year_Attended: number, Field_of_Study_Reference: { WID: string }, Degree_Reference: { WID: string }, Grade_Average: string }>>, Skill_Data: Array<Partial<{ Skill_Name: string }>>, Language_Data: Array<Partial<{ Language_Reference: Partial<{ WID: string }>, Language: { Native?: boolean, Language_Ability: Array<Partial<{ Language_Ability_Data: Partial<{ Language_Proficiency_Reference: { WID: string }, Language_Ability_Type_Reference: { WID: string } }> }>> } }>>, Experience_Data: Array<{ Company_Name: string, Title: string, Location?: string, Start_Date: string, End_Date?: string, Currently_Work_Here?: boolean, Description?: string }> }> }>, Contact_Data: Partial<{ Location_Data: Partial<{ Address_Line_1: string, Address_Line_2: string, Region_Subdivision_1: string, Country_Region_Reference: { Country_Region_ID: string }, Country_City_Reference: { WID: string } }> }>, Worker_Reference: Partial<{ WID: string, Employee_ID: string }> }>, Override_Source_Reference_WID: string }>, zohorecruit: Partial<{ candidate: Record<string, unknown> }>, bullhorn: Partial<{ candidate: Record<string, unknown>, job_submission: Record<string, unknown> }>, smartrecruiters: Partial<{ candidate_with_questions: Record<string, unknown>, candidate_without_questions: Record<string, unknown>, candidate: Record<string, unknown>, consent_decisions: Partial<{ SINGLE: boolean, SMART_RECRUIT: boolean, SMART_CRM: boolean, SMART_MESSAGE_SMS: boolean, SMART_MESSAGE_WHATSAPP: boolean }> }>, talentadore: Partial<{ applications: Record<string, unknown> }>, guidecom: Partial<{ candidate: Record<string, unknown> }>, dvinci: Partial<{ application: Record<string, unknown>, candidate: Record<string, unknown> }>, hrworks: Partial<{ jobApplication: Record<string, unknown> }>, jobylon: Partial<{ application: Partial<{ message: string }> }>, avature: Partial<{ workflow: Partial<{ step: { id: number } }> }>, recruitee: Partial<{ candidate: Partial<{ cover_letter_text: string }> }>, rexx: Partial<{ candidate: Record<string, unknown> }>, umantis: Partial<{ person: Record<string, unknown> }>, piloga: Partial<{ candidate: Partial<{ street: string }> }>, pinpoint: Partial<{ candidate: Record<string, unknown> }>, covetorest: Partial<{ candidate: Partial<{ mandant: number }> }> }> & Partial<{ greenhouse: Partial<{ post_headers: Partial<{ "On-Behalf-Of": (string | null) }> }>, workable: Partial<{ on_behalf_of_user_remote_id: string }> }>), screening_question_answers?: Array<{ question_id: string, answer: (string | boolean | number | Array<string> | string | { name: string, content_type?: string, data_url?: string, data?: string }) }>, query_params?: Record<string, string> };
export const isPostAiApplyUnifiedApiJobsJobIdApplicationsRequestBody = typia.createIs<PostAiApplyUnifiedApiJobsJobIdApplicationsRequestBody>();
export const assertPostAiApplyUnifiedApiJobsJobIdApplicationsRequestBody = typia.createAssert<PostAiApplyUnifiedApiJobsJobIdApplicationsRequestBody>();
export const validatePostAiApplyUnifiedApiJobsJobIdApplicationsRequestBody = typia.createValidate<PostAiApplyUnifiedApiJobsJobIdApplicationsRequestBody>();

export type GetAiApplyJobFeedsParameterCursor = string;
export const isGetAiApplyJobFeedsParameterCursor = typia.createIs<GetAiApplyJobFeedsParameterCursor>();
export const assertGetAiApplyJobFeedsParameterCursor = typia.createAssert<GetAiApplyJobFeedsParameterCursor>();
export const validateGetAiApplyJobFeedsParameterCursor = typia.createValidate<GetAiApplyJobFeedsParameterCursor>();

export type GetAiApplyJobFeedsParameterPageSize = number;
export const isGetAiApplyJobFeedsParameterPageSize = typia.createIs<GetAiApplyJobFeedsParameterPageSize>();
export const assertGetAiApplyJobFeedsParameterPageSize = typia.createAssert<GetAiApplyJobFeedsParameterPageSize>();
export const validateGetAiApplyJobFeedsParameterPageSize = typia.createValidate<GetAiApplyJobFeedsParameterPageSize>();

export type GetAiApplyJobFeedsParameterIds = string;
export const isGetAiApplyJobFeedsParameterIds = typia.createIs<GetAiApplyJobFeedsParameterIds>();
export const assertGetAiApplyJobFeedsParameterIds = typia.createAssert<GetAiApplyJobFeedsParameterIds>();
export const validateGetAiApplyJobFeedsParameterIds = typia.createValidate<GetAiApplyJobFeedsParameterIds>();

export type GetAiApplyJobFeedsPositiveResponse = { status: string, data: { results: Array<{ id: string, label: string }>, next: (string | null) } };
export const isGetAiApplyJobFeedsPositiveResponse = typia.createIs<GetAiApplyJobFeedsPositiveResponse>();
export const assertGetAiApplyJobFeedsPositiveResponse = typia.createAssert<GetAiApplyJobFeedsPositiveResponse>();
export const validateGetAiApplyJobFeedsPositiveResponse = typia.createValidate<GetAiApplyJobFeedsPositiveResponse>();

export type PostAiApplyJobFeedsPositiveResponse = { status: string, data: { id: string, label: string } };
export const isPostAiApplyJobFeedsPositiveResponse = typia.createIs<PostAiApplyJobFeedsPositiveResponse>();
export const assertPostAiApplyJobFeedsPositiveResponse = typia.createAssert<PostAiApplyJobFeedsPositiveResponse>();
export const validatePostAiApplyJobFeedsPositiveResponse = typia.createValidate<PostAiApplyJobFeedsPositiveResponse>();

export type PostAiApplyJobFeedsRequestBody = { label: string };
export const isPostAiApplyJobFeedsRequestBody = typia.createIs<PostAiApplyJobFeedsRequestBody>();
export const assertPostAiApplyJobFeedsRequestBody = typia.createAssert<PostAiApplyJobFeedsRequestBody>();
export const validatePostAiApplyJobFeedsRequestBody = typia.createValidate<PostAiApplyJobFeedsRequestBody>();

export type PostConnectCreateLinkPositiveResponse = { status: string, data: { link: string } };
export const isPostConnectCreateLinkPositiveResponse = typia.createIs<PostConnectCreateLinkPositiveResponse>();
export const assertPostConnectCreateLinkPositiveResponse = typia.createAssert<PostConnectCreateLinkPositiveResponse>();
export const validatePostConnectCreateLinkPositiveResponse = typia.createValidate<PostConnectCreateLinkPositiveResponse>();

export type PostConnectCreateLinkRequestBody = { end_user_email: string, end_user_organization_name: string, end_user_origin_id?: (string | null), remote_environment?: (string | null), integration_category?: ("HRIS" | "ATS" | "ASSESSMENT" | "LMS"), integration_tool?: (("workday" | "successfactors" | "smartrecruiters" | "factorial" | "oraclerecruiting" | "lever" | "icims" | "cornerstonetalentlink" | "recruitee" | "recruiterflow" | "greenhouse" | "greenhousejobboard" | "teamtailor" | "teamtailorjobboards" | "ashby" | "talentsoft" | "talentsoftcustomer" | "concludis" | "talention" | "piloga" | "onlyfy" | "personio" | "ukgpro" | "ukgready" | "adpworkforcenow" | "taleo" | "rexx" | "afas" | "bamboohr" | "bullhorn" | "bullhornlogin" | "workable" | "jobvite" | "fountain" | "softgarden" | "softgardenpartner" | "pinpoint" | "welcometothejungle" | "dvinci" | "dvinciadmin" | "join" | "sagehr" | "traffit" | "erecruiter" | "abacusumantis" | "umantis" | "jobylon" | "taleez" | "hrworks" | "otys" | "zohorecruit" | "ceipal" | "eploy" | "jobdiva" | "careerplug" | "perview" | "eightfold" | "paylocity" | "paycor" | "avature" | "apploi" | "phenom" | "paradox" | "heyrecruit" | "recruhr" | "recruitcrm" | "jazzhr" | "bite" | "brassring" | "homerun" | "mysolution" | "carerix" | "hroffice" | "talentclue" | "inrecruiting" | "ubeeo" | "connexys" | "hr4you" | "cornerstoneondemand" | "zvooverecruit" | "odoo" | "comeet" | "compleet" | "compleetpitcher" | "gem" | "laura" | "covetorest" | "coveto" | "mercury" | "crelate" | "manatal" | "avionte" | "mhmhr" | "asymbl" | "breezyhr" | "flatchr" | "dayforce" | "digitalrecruiters" | "applicantstack" | "reachmee" | "talentadore" | "sandbox" | "guidecom" | "spott" | "loxo" | "kula" | "workdaycustomreport" | "workdaycustomreportsftp" | "ukgprowfm" | "payfitcustomer" | "payfitpartner" | "payfit" | "employmenthero" | "fourth" | "kenjo" | "heavenhr" | "hibob" | "cezannehr" | "entraid" | "azuread" | "googleworkspace" | "nmbrs" | "deel" | "remotecom" | "iriscascade" | "okta" | "sagepeople" | "humaans" | "eurecia" | "oraclehcm" | "officient" | "sesamehr" | "charliehr" | "abacus" | "zohopeople" | "gusto" | "breathehr" | "catalystone" | "mirus" | "alexishr" | "simployer" | "peple" | "youserve" | "hansalog" | "lattice" | "latticetalent" | "hoorayhr" | "trinet" | "trinetpeo" | "namely" | "paycom" | "insperity" | "paychex" | "rippling" | "sapling" | "peoplehr" | "lucca" | "zelt" | "planday" | "boondmanager" | "haileyhr" | "silae" | "oysterhr" | "kiwihr" | "square" | "perbilityhelix" | "leapsome" | "loket" | "workforcecom" | "peoplefirst" | "sdworx" | "itrent" | "absenceio" | "a3innuvanomina" | "scim" | "datevlauds" | "datevhr" | "datev" | "datevlug" | "sympa" | "youforce" | "nibelis" | "peoplexd" | "sftp" | "sftpfetch" | "360learning" | "talentlms" | "udemy" | "linkedinlearning" | "moodle") | null), language?: (("en" | "de" | "fr" | "it" | "es") | null), scope_config_id?: (string | null), enable_filtering?: boolean, enable_field_mapping?: boolean, link_type?: ("EMBEDDED" | "MAGIC_LINK") };
export const isPostConnectCreateLinkRequestBody = typia.createIs<PostConnectCreateLinkRequestBody>();
export const assertPostConnectCreateLinkRequestBody = typia.createAssert<PostConnectCreateLinkRequestBody>();
export const validatePostConnectCreateLinkRequestBody = typia.createValidate<PostConnectCreateLinkRequestBody>();

export type GetConnectIntegrationByTokenTokenParameterToken = string;
export const isGetConnectIntegrationByTokenTokenParameterToken = typia.createIs<GetConnectIntegrationByTokenTokenParameterToken>();
export const assertGetConnectIntegrationByTokenTokenParameterToken = typia.createAssert<GetConnectIntegrationByTokenTokenParameterToken>();
export const validateGetConnectIntegrationByTokenTokenParameterToken = typia.createValidate<GetConnectIntegrationByTokenTokenParameterToken>();

export type GetConnectIntegrationByTokenTokenPositiveResponse = { status: string, data: { tool: string, id: string, end_user_origin_id: (string | null), end_user_organization_name: string, end_user_email: (string | null), setup_status: ("INCOMPLETE" | "FINAL_SYNC_PENDING" | "COMPLETED") } };
export const isGetConnectIntegrationByTokenTokenPositiveResponse = typia.createIs<GetConnectIntegrationByTokenTokenPositiveResponse>();
export const assertGetConnectIntegrationByTokenTokenPositiveResponse = typia.createAssert<GetConnectIntegrationByTokenTokenPositiveResponse>();
export const validateGetConnectIntegrationByTokenTokenPositiveResponse = typia.createValidate<GetConnectIntegrationByTokenTokenPositiveResponse>();

export type PostConnectActivateIntegrationPositiveResponse = { status: string, data: { tool: string, id: string, end_user_origin_id: (string | null), end_user_organization_name: string, end_user_email: (string | null), setup_status: ("INCOMPLETE" | "FINAL_SYNC_PENDING" | "COMPLETED") } };
export const isPostConnectActivateIntegrationPositiveResponse = typia.createIs<PostConnectActivateIntegrationPositiveResponse>();
export const assertPostConnectActivateIntegrationPositiveResponse = typia.createAssert<PostConnectActivateIntegrationPositiveResponse>();
export const validatePostConnectActivateIntegrationPositiveResponse = typia.createValidate<PostConnectActivateIntegrationPositiveResponse>();

export type PostConnectActivateIntegrationRequestBody = { token: string };
export const isPostConnectActivateIntegrationRequestBody = typia.createIs<PostConnectActivateIntegrationRequestBody>();
export const assertPostConnectActivateIntegrationRequestBody = typia.createAssert<PostConnectActivateIntegrationRequestBody>();
export const validatePostConnectActivateIntegrationRequestBody = typia.createValidate<PostConnectActivateIntegrationRequestBody>();

export type GetCustomDatevSystemInformationPositiveResponse = { status: string, data: { consultant_number: number, client_number: number, target_system: ("LODAS" | "LuG") } };
export const isGetCustomDatevSystemInformationPositiveResponse = typia.createIs<GetCustomDatevSystemInformationPositiveResponse>();
export const assertGetCustomDatevSystemInformationPositiveResponse = typia.createAssert<GetCustomDatevSystemInformationPositiveResponse>();
export const validateGetCustomDatevSystemInformationPositiveResponse = typia.createValidate<GetCustomDatevSystemInformationPositiveResponse>();

export type PostCustomDatevPassthroughPositiveResponse = { status: string, data: Record<string, unknown>, warnings: Array<{ message: string }> };
export const isPostCustomDatevPassthroughPositiveResponse = typia.createIs<PostCustomDatevPassthroughPositiveResponse>();
export const assertPostCustomDatevPassthroughPositiveResponse = typia.createAssert<PostCustomDatevPassthroughPositiveResponse>();
export const validatePostCustomDatevPassthroughPositiveResponse = typia.createValidate<PostCustomDatevPassthroughPositiveResponse>();

export type PostCustomDatevPassthroughRequestBody = { file_content: string, accounting_month: string, target_system: ("LODAS" | "LuG"), file_type: ("STAMMDATEN" | "BEWEGUNGSDATEN"), file_name: string };
export const isPostCustomDatevPassthroughRequestBody = typia.createIs<PostCustomDatevPassthroughRequestBody>();
export const assertPostCustomDatevPassthroughRequestBody = typia.createAssert<PostCustomDatevPassthroughRequestBody>();
export const validatePostCustomDatevPassthroughRequestBody = typia.createValidate<PostCustomDatevPassthroughRequestBody>();

export type GetCustomDatevCheckEauPermissionPositiveResponse = { status: string, data: { ready: boolean, error?: string }, warnings: Array<{ message: string }> };
export const isGetCustomDatevCheckEauPermissionPositiveResponse = typia.createIs<GetCustomDatevCheckEauPermissionPositiveResponse>();
export const assertGetCustomDatevCheckEauPermissionPositiveResponse = typia.createAssert<GetCustomDatevCheckEauPermissionPositiveResponse>();
export const validateGetCustomDatevCheckEauPermissionPositiveResponse = typia.createValidate<GetCustomDatevCheckEauPermissionPositiveResponse>();

export type GetCustomDatevEauRequestsEauIdParameterEauId = string;
export const isGetCustomDatevEauRequestsEauIdParameterEauId = typia.createIs<GetCustomDatevEauRequestsEauIdParameterEauId>();
export const assertGetCustomDatevEauRequestsEauIdParameterEauId = typia.createAssert<GetCustomDatevEauRequestsEauIdParameterEauId>();
export const validateGetCustomDatevEauRequestsEauIdParameterEauId = typia.createValidate<GetCustomDatevEauRequestsEauIdParameterEauId>();

export type GetCustomDatevEauRequestsEauIdPositiveResponse = { status: string, data: { raw: { source: string, start_work_incapacity: string, collaboration_identifier?: string, feedbacks_from_health_insurance: Array<{ guid: string, contact_person: ({ gender_contact_person?: (("M" | "F" | "X" | "D") | null), name: string, telephone: string, fax: (string | null), email: (string | null), name1_health_insurance: string, name2_health_insurance?: (string | null), name3_health_insurance?: (string | null), postal_code: string, city: string, street: (string | null), house_number: (string | null) } | null), incapacity_for_work: { start_work_incapacity_employer: string, start_work_incapacity_au: (string | null), end_work_incapacity_au: (string | null), actual_end_work_incapacity_au?: (string | null), date_of_diagnosis: (string | null), flag_current_work_incapacity: (number | null), accident_at_work: boolean, assignment_accident_insurance_doctor: boolean, other_accident: boolean, start_hospitalisation?: (string | null), end_hospitalisation?: (string | null), initial_certificate: boolean, automatic_feedback_until: (string | null) }, error_block_list: (Array<{ origin: (string | null), error_number: (string | null), error_text: (string | null), error_value: (string | null) }> | null) }> } }, warnings: Array<{ message: string }> };
export const isGetCustomDatevEauRequestsEauIdPositiveResponse = typia.createIs<GetCustomDatevEauRequestsEauIdPositiveResponse>();
export const assertGetCustomDatevEauRequestsEauIdPositiveResponse = typia.createAssert<GetCustomDatevEauRequestsEauIdPositiveResponse>();
export const validateGetCustomDatevEauRequestsEauIdPositiveResponse = typia.createValidate<GetCustomDatevEauRequestsEauIdPositiveResponse>();

export type GetCustomDatevCheckDocumentPermissionPositiveResponse = { status: string, data: ({ ready: boolean, documents_granted: Array<string> } | { ready: boolean, error: string }), warnings: Array<{ message: string }> };
export const isGetCustomDatevCheckDocumentPermissionPositiveResponse = typia.createIs<GetCustomDatevCheckDocumentPermissionPositiveResponse>();
export const assertGetCustomDatevCheckDocumentPermissionPositiveResponse = typia.createAssert<GetCustomDatevCheckDocumentPermissionPositiveResponse>();
export const validateGetCustomDatevCheckDocumentPermissionPositiveResponse = typia.createValidate<GetCustomDatevCheckDocumentPermissionPositiveResponse>();

export type GetCustomDatevAvailableDocumentsParameterPeriod = string;
export const isGetCustomDatevAvailableDocumentsParameterPeriod = typia.createIs<GetCustomDatevAvailableDocumentsParameterPeriod>();
export const assertGetCustomDatevAvailableDocumentsParameterPeriod = typia.createAssert<GetCustomDatevAvailableDocumentsParameterPeriod>();
export const validateGetCustomDatevAvailableDocumentsParameterPeriod = typia.createValidate<GetCustomDatevAvailableDocumentsParameterPeriod>();

export type GetCustomDatevAvailableDocumentsPositiveResponse = { status: string, data: { results: Array<{ document_type: string, available_for_employees: Array<{ id: (string | null), remote_id: string }>, is_company_document: boolean }> }, warnings: Array<{ message: string }> };
export const isGetCustomDatevAvailableDocumentsPositiveResponse = typia.createIs<GetCustomDatevAvailableDocumentsPositiveResponse>();
export const assertGetCustomDatevAvailableDocumentsPositiveResponse = typia.createAssert<GetCustomDatevAvailableDocumentsPositiveResponse>();
export const validateGetCustomDatevAvailableDocumentsPositiveResponse = typia.createValidate<GetCustomDatevAvailableDocumentsPositiveResponse>();

export type PostCustomDatevDownloadDocumentPositiveResponse = { status: string, data: { data_url: string, file_name: string, content_type: string }, warnings: Array<{ message: string }> };
export const isPostCustomDatevDownloadDocumentPositiveResponse = typia.createIs<PostCustomDatevDownloadDocumentPositiveResponse>();
export const assertPostCustomDatevDownloadDocumentPositiveResponse = typia.createAssert<PostCustomDatevDownloadDocumentPositiveResponse>();
export const validatePostCustomDatevDownloadDocumentPositiveResponse = typia.createValidate<PostCustomDatevDownloadDocumentPositiveResponse>();

export type PostCustomDatevDownloadDocumentRequestBody = { accounting_month: string, document_type: ("AANB" | "ABEG" | "BUBE" | "DAWE" | "KBNW" | "KOST" | "KOTR" | "LKTO" | "LOBN" | "LJOE" | "LOJE" | "LOJO" | "LOPE" | "LOPN" | "LOPS" | "LORE" | "LOWE" | "LSTA" | "LSTB" | "LSTE" | "PDAT" | "PFAN" | "PRZA" | "SBNW" | "SVNW" | "WEAN" | "ZABR" | "ZAKF" | "ZAUW"), employee_id: (string | null) };
export const isPostCustomDatevDownloadDocumentRequestBody = typia.createIs<PostCustomDatevDownloadDocumentRequestBody>();
export const assertPostCustomDatevDownloadDocumentRequestBody = typia.createAssert<PostCustomDatevDownloadDocumentRequestBody>();
export const validatePostCustomDatevDownloadDocumentRequestBody = typia.createValidate<PostCustomDatevDownloadDocumentRequestBody>();

export type PostCustomDatevEmployeesEmployeeIdDownloadDocumentParameterEmployeeId = (string | null);
export const isPostCustomDatevEmployeesEmployeeIdDownloadDocumentParameterEmployeeId = typia.createIs<PostCustomDatevEmployeesEmployeeIdDownloadDocumentParameterEmployeeId>();
export const assertPostCustomDatevEmployeesEmployeeIdDownloadDocumentParameterEmployeeId = typia.createAssert<PostCustomDatevEmployeesEmployeeIdDownloadDocumentParameterEmployeeId>();
export const validatePostCustomDatevEmployeesEmployeeIdDownloadDocumentParameterEmployeeId = typia.createValidate<PostCustomDatevEmployeesEmployeeIdDownloadDocumentParameterEmployeeId>();

export type PostCustomDatevEmployeesEmployeeIdDownloadDocumentPositiveResponse = { status: string, data: { data_url: string, file_name: string, content_type: string }, warnings: Array<{ message: string }> };
export const isPostCustomDatevEmployeesEmployeeIdDownloadDocumentPositiveResponse = typia.createIs<PostCustomDatevEmployeesEmployeeIdDownloadDocumentPositiveResponse>();
export const assertPostCustomDatevEmployeesEmployeeIdDownloadDocumentPositiveResponse = typia.createAssert<PostCustomDatevEmployeesEmployeeIdDownloadDocumentPositiveResponse>();
export const validatePostCustomDatevEmployeesEmployeeIdDownloadDocumentPositiveResponse = typia.createValidate<PostCustomDatevEmployeesEmployeeIdDownloadDocumentPositiveResponse>();

export type PostCustomDatevEmployeesEmployeeIdDownloadDocumentRequestBody = { accounting_month: string, document_type: ("AANB" | "ABEG" | "BUBE" | "DAWE" | "KBNW" | "KOST" | "KOTR" | "LKTO" | "LOBN" | "LJOE" | "LOJE" | "LOJO" | "LOPE" | "LOPN" | "LOPS" | "LORE" | "LOWE" | "LSTA" | "LSTB" | "LSTE" | "PDAT" | "PFAN" | "PRZA" | "SBNW" | "SVNW" | "WEAN" | "ZABR" | "ZAKF" | "ZAUW") };
export const isPostCustomDatevEmployeesEmployeeIdDownloadDocumentRequestBody = typia.createIs<PostCustomDatevEmployeesEmployeeIdDownloadDocumentRequestBody>();
export const assertPostCustomDatevEmployeesEmployeeIdDownloadDocumentRequestBody = typia.createAssert<PostCustomDatevEmployeesEmployeeIdDownloadDocumentRequestBody>();
export const validatePostCustomDatevEmployeesEmployeeIdDownloadDocumentRequestBody = typia.createValidate<PostCustomDatevEmployeesEmployeeIdDownloadDocumentRequestBody>();

export type PostCustomDatevEmployeesEmployeeIdEauRequestsParameterEmployeeId = string;
export const isPostCustomDatevEmployeesEmployeeIdEauRequestsParameterEmployeeId = typia.createIs<PostCustomDatevEmployeesEmployeeIdEauRequestsParameterEmployeeId>();
export const assertPostCustomDatevEmployeesEmployeeIdEauRequestsParameterEmployeeId = typia.createAssert<PostCustomDatevEmployeesEmployeeIdEauRequestsParameterEmployeeId>();
export const validatePostCustomDatevEmployeesEmployeeIdEauRequestsParameterEmployeeId = typia.createValidate<PostCustomDatevEmployeesEmployeeIdEauRequestsParameterEmployeeId>();

export type PostCustomDatevEmployeesEmployeeIdEauRequestsPositiveResponse = { status: string, data: { eau_id: string }, warnings: Array<{ message: string }> };
export const isPostCustomDatevEmployeesEmployeeIdEauRequestsPositiveResponse = typia.createIs<PostCustomDatevEmployeesEmployeeIdEauRequestsPositiveResponse>();
export const assertPostCustomDatevEmployeesEmployeeIdEauRequestsPositiveResponse = typia.createAssert<PostCustomDatevEmployeesEmployeeIdEauRequestsPositiveResponse>();
export const validatePostCustomDatevEmployeesEmployeeIdEauRequestsPositiveResponse = typia.createValidate<PostCustomDatevEmployeesEmployeeIdEauRequestsPositiveResponse>();

export type PostCustomDatevEmployeesEmployeeIdEauRequestsRequestBody = { start_work_incapacity: string, notification?: { email: string }, contact_person?: { gender: ("M" | "W" | "X" | "D"), name: string, telephone: string, fax: string, email: string, company_name: string, postal_code: string, city: string, street: string, house_number: string } };
export const isPostCustomDatevEmployeesEmployeeIdEauRequestsRequestBody = typia.createIs<PostCustomDatevEmployeesEmployeeIdEauRequestsRequestBody>();
export const assertPostCustomDatevEmployeesEmployeeIdEauRequestsRequestBody = typia.createAssert<PostCustomDatevEmployeesEmployeeIdEauRequestsRequestBody>();
export const validatePostCustomDatevEmployeesEmployeeIdEauRequestsRequestBody = typia.createValidate<PostCustomDatevEmployeesEmployeeIdEauRequestsRequestBody>();

export type PutCustomDatevEmployeesEmployeeIdPreparePayrollParameterEmployeeId = string;
export const isPutCustomDatevEmployeesEmployeeIdPreparePayrollParameterEmployeeId = typia.createIs<PutCustomDatevEmployeesEmployeeIdPreparePayrollParameterEmployeeId>();
export const assertPutCustomDatevEmployeesEmployeeIdPreparePayrollParameterEmployeeId = typia.createAssert<PutCustomDatevEmployeesEmployeeIdPreparePayrollParameterEmployeeId>();
export const validatePutCustomDatevEmployeesEmployeeIdPreparePayrollParameterEmployeeId = typia.createValidate<PutCustomDatevEmployeesEmployeeIdPreparePayrollParameterEmployeeId>();

export type PutCustomDatevEmployeesEmployeeIdPreparePayrollPositiveResponse = { status: string, data: Record<string, unknown>, warnings: Array<{ message: string }> };
export const isPutCustomDatevEmployeesEmployeeIdPreparePayrollPositiveResponse = typia.createIs<PutCustomDatevEmployeesEmployeeIdPreparePayrollPositiveResponse>();
export const assertPutCustomDatevEmployeesEmployeeIdPreparePayrollPositiveResponse = typia.createAssert<PutCustomDatevEmployeesEmployeeIdPreparePayrollPositiveResponse>();
export const validatePutCustomDatevEmployeesEmployeeIdPreparePayrollPositiveResponse = typia.createValidate<PutCustomDatevEmployeesEmployeeIdPreparePayrollPositiveResponse>();

export type PutCustomDatevEmployeesEmployeeIdPreparePayrollRequestBody = { payroll_run: { date: string }, hourly_payments: Array<{ hours: number, lohnart: number }>, fixed_payments: Array<{ amount: number, lohnart: number }>, custom_lodas?: Array<{ amount: number, lohnart: number, bearbeitungsschluessel: number }> };
export const isPutCustomDatevEmployeesEmployeeIdPreparePayrollRequestBody = typia.createIs<PutCustomDatevEmployeesEmployeeIdPreparePayrollRequestBody>();
export const assertPutCustomDatevEmployeesEmployeeIdPreparePayrollRequestBody = typia.createAssert<PutCustomDatevEmployeesEmployeeIdPreparePayrollRequestBody>();
export const validatePutCustomDatevEmployeesEmployeeIdPreparePayrollRequestBody = typia.createValidate<PutCustomDatevEmployeesEmployeeIdPreparePayrollRequestBody>();

export type PutCustomDatevEmployeesEmployeeIdCompensationsParameterEmployeeId = string;
export const isPutCustomDatevEmployeesEmployeeIdCompensationsParameterEmployeeId = typia.createIs<PutCustomDatevEmployeesEmployeeIdCompensationsParameterEmployeeId>();
export const assertPutCustomDatevEmployeesEmployeeIdCompensationsParameterEmployeeId = typia.createAssert<PutCustomDatevEmployeesEmployeeIdCompensationsParameterEmployeeId>();
export const validatePutCustomDatevEmployeesEmployeeIdCompensationsParameterEmployeeId = typia.createValidate<PutCustomDatevEmployeesEmployeeIdCompensationsParameterEmployeeId>();

export type PutCustomDatevEmployeesEmployeeIdCompensationsPositiveResponse = { status: string, data: Record<string, unknown>, warnings: Array<{ message: string }> };
export const isPutCustomDatevEmployeesEmployeeIdCompensationsPositiveResponse = typia.createIs<PutCustomDatevEmployeesEmployeeIdCompensationsPositiveResponse>();
export const assertPutCustomDatevEmployeesEmployeeIdCompensationsPositiveResponse = typia.createAssert<PutCustomDatevEmployeesEmployeeIdCompensationsPositiveResponse>();
export const validatePutCustomDatevEmployeesEmployeeIdCompensationsPositiveResponse = typia.createValidate<PutCustomDatevEmployeesEmployeeIdCompensationsPositiveResponse>();

export type PutCustomDatevEmployeesEmployeeIdCompensationsRequestBody = { effective_date: string, compensations: Array<{ amount: number, currency: string, period: ("HOUR" | "MONTH"), lohnart?: number }> };
export const isPutCustomDatevEmployeesEmployeeIdCompensationsRequestBody = typia.createIs<PutCustomDatevEmployeesEmployeeIdCompensationsRequestBody>();
export const assertPutCustomDatevEmployeesEmployeeIdCompensationsRequestBody = typia.createAssert<PutCustomDatevEmployeesEmployeeIdCompensationsRequestBody>();
export const validatePutCustomDatevEmployeesEmployeeIdCompensationsRequestBody = typia.createValidate<PutCustomDatevEmployeesEmployeeIdCompensationsRequestBody>();

export type GetCustomDatevCheckWritePermissionPositiveResponse = { status: string, data: { ready: boolean, error?: string }, warnings: Array<{ message: string }> };
export const isGetCustomDatevCheckWritePermissionPositiveResponse = typia.createIs<GetCustomDatevCheckWritePermissionPositiveResponse>();
export const assertGetCustomDatevCheckWritePermissionPositiveResponse = typia.createAssert<GetCustomDatevCheckWritePermissionPositiveResponse>();
export const validateGetCustomDatevCheckWritePermissionPositiveResponse = typia.createValidate<GetCustomDatevCheckWritePermissionPositiveResponse>();

export type GetCustomDatevDataPushesPositiveResponse = { status: string, data: { data_pushes: Array<{ id: string, type: ("GENERAL" | "PAYROLL"), created_at: string, upload_jobs: Array<{ id: string, file_name: string, state: ("FAILED" | "UPLOADED" | "IMPORTED" | "CORRUPTED" | "DELETED" | "AUTO_DELETED"), file: string }> }> } };
export const isGetCustomDatevDataPushesPositiveResponse = typia.createIs<GetCustomDatevDataPushesPositiveResponse>();
export const assertGetCustomDatevDataPushesPositiveResponse = typia.createAssert<GetCustomDatevDataPushesPositiveResponse>();
export const validateGetCustomDatevDataPushesPositiveResponse = typia.createValidate<GetCustomDatevDataPushesPositiveResponse>();

export type PostCustomDatevPushDataGeneralPositiveResponse = { status: string, data: { files: Array<{ name: string, content: string }> }, warnings: Array<{ message: string }> };
export const isPostCustomDatevPushDataGeneralPositiveResponse = typia.createIs<PostCustomDatevPushDataGeneralPositiveResponse>();
export const assertPostCustomDatevPushDataGeneralPositiveResponse = typia.createAssert<PostCustomDatevPushDataGeneralPositiveResponse>();
export const validatePostCustomDatevPushDataGeneralPositiveResponse = typia.createValidate<PostCustomDatevPushDataGeneralPositiveResponse>();

export type PostCustomDatevPushDataGeneralRequestBody = Record<string, unknown>;
export const isPostCustomDatevPushDataGeneralRequestBody = typia.createIs<PostCustomDatevPushDataGeneralRequestBody>();
export const assertPostCustomDatevPushDataGeneralRequestBody = typia.createAssert<PostCustomDatevPushDataGeneralRequestBody>();
export const validatePostCustomDatevPushDataGeneralRequestBody = typia.createValidate<PostCustomDatevPushDataGeneralRequestBody>();

export type PostCustomDatevPushDataPayrollPositiveResponse = { status: string, data: { files: Array<{ name: string, content: string }> }, warnings: Array<{ message: string }> };
export const isPostCustomDatevPushDataPayrollPositiveResponse = typia.createIs<PostCustomDatevPushDataPayrollPositiveResponse>();
export const assertPostCustomDatevPushDataPayrollPositiveResponse = typia.createAssert<PostCustomDatevPushDataPayrollPositiveResponse>();
export const validatePostCustomDatevPushDataPayrollPositiveResponse = typia.createValidate<PostCustomDatevPushDataPayrollPositiveResponse>();

export type PostCustomDatevPushDataPayrollRequestBody = { payroll_month: string };
export const isPostCustomDatevPushDataPayrollRequestBody = typia.createIs<PostCustomDatevPushDataPayrollRequestBody>();
export const assertPostCustomDatevPushDataPayrollRequestBody = typia.createAssert<PostCustomDatevPushDataPayrollRequestBody>();
export const validatePostCustomDatevPushDataPayrollRequestBody = typia.createValidate<PostCustomDatevPushDataPayrollRequestBody>();

export type PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsParameterEmployeeId = string;
export const isPostCustomSilaeEmployeesEmployeeIdPayrollSupplementsParameterEmployeeId = typia.createIs<PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsParameterEmployeeId>();
export const assertPostCustomSilaeEmployeesEmployeeIdPayrollSupplementsParameterEmployeeId = typia.createAssert<PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsParameterEmployeeId>();
export const validatePostCustomSilaeEmployeesEmployeeIdPayrollSupplementsParameterEmployeeId = typia.createValidate<PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsParameterEmployeeId>();

export type PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsPositiveResponse = { status: string, data: Record<string, unknown>, warnings: Array<{ message: string }> };
export const isPostCustomSilaeEmployeesEmployeeIdPayrollSupplementsPositiveResponse = typia.createIs<PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsPositiveResponse>();
export const assertPostCustomSilaeEmployeesEmployeeIdPayrollSupplementsPositiveResponse = typia.createAssert<PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsPositiveResponse>();
export const validatePostCustomSilaeEmployeesEmployeeIdPayrollSupplementsPositiveResponse = typia.createValidate<PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsPositiveResponse>();

export type PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsRequestBody = { supplement_code: string, effective_date: string, element_amount?: number, element_string?: string };
export const isPostCustomSilaeEmployeesEmployeeIdPayrollSupplementsRequestBody = typia.createIs<PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsRequestBody>();
export const assertPostCustomSilaeEmployeesEmployeeIdPayrollSupplementsRequestBody = typia.createAssert<PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsRequestBody>();
export const validatePostCustomSilaeEmployeesEmployeeIdPayrollSupplementsRequestBody = typia.createValidate<PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsRequestBody>();

export type DataChangedWebhookPayload = { id: string, type: "data-changed", data: { integration_id: string, integration_tool: string, integration_category: ("HRIS" | "ATS" | "ASSESSMENT" | "LMS"), changed_models: Array<{ name: ("hris_legal_entities" | "hris_locations" | "hris_employees" | "hris_absence_types" | "hris_absences" | "hris_employments" | "hris_teams" | "hris_time_off_balances" | "hris_timesheets" | "hris_employee_document_categories" | "hris_performance_reviews" | "hris_performance_review_cycles" | "hris_staffing_entities" | "ats_users" | "ats_jobs" | "ats_job_postings" | "ats_candidates" | "ats_application_stages" | "ats_applications" | "ats_screening_questions" | "ats_tags" | "ats_interviews" | "ats_offers" | "ats_rejection_reasons" | "ats_roles" | "lms_users" | "lms_course_providers" | "lms_skills" | "lms_courses" | "lms_course_revisions" | "lms_course_progressions" | "hris_join_employees_teams" | "hris_join_staffing_entities_locations" | "hris_join_staffing_entities_legal_entities" | "hris_join_staffing_entities_groups" | "ats_join_candidates_tags" | "ats_join_jobs_application_stages" | "ats_join_jobs_screening_questions" | "ats_join_user_job_role_assignments" | "ats_join_jobs_users" | "ats_join_users_roles" | "ats_join_interviews_users" | "lms_join_revisions_skills") }> } };
export const isDataChangedWebhookPayload = typia.createIs<DataChangedWebhookPayload>();
export const assertDataChangedWebhookPayload = typia.createAssert<DataChangedWebhookPayload>();
export const validateDataChangedWebhookPayload = typia.createValidate<DataChangedWebhookPayload>();

export type ConnectionFlowFailedWebhookPayload = { id: string, type: "connection-flow-failed", data: { integration_tool: string, integration_category: ("HRIS" | "ATS" | "ASSESSMENT" | "LMS"), end_user: { organization_name: string, creator_email: (string | null), origin_id: (string | null) }, log_url: string } };
export const isConnectionFlowFailedWebhookPayload = typia.createIs<ConnectionFlowFailedWebhookPayload>();
export const assertConnectionFlowFailedWebhookPayload = typia.createAssert<ConnectionFlowFailedWebhookPayload>();
export const validateConnectionFlowFailedWebhookPayload = typia.createValidate<ConnectionFlowFailedWebhookPayload>();

export type IntegrationCreatedWebhookPayload = { id: string, type: "integration-created", data: { id: string, tool: string, category: ("HRIS" | "ATS" | "ASSESSMENT" | "LMS"), end_user: { organization_name: string, creator_email: (string | null), origin_id: (string | null) } } };
export const isIntegrationCreatedWebhookPayload = typia.createIs<IntegrationCreatedWebhookPayload>();
export const assertIntegrationCreatedWebhookPayload = typia.createAssert<IntegrationCreatedWebhookPayload>();
export const validateIntegrationCreatedWebhookPayload = typia.createValidate<IntegrationCreatedWebhookPayload>();

export type IntegrationDeletedWebhookPayload = { id: string, type: "integration-deleted", data: { id: string, tool: string, category: ("HRIS" | "ATS" | "ASSESSMENT" | "LMS"), end_user: { organization_name: string, creator_email: (string | null), origin_id: (string | null) }, deleted_at: string } };
export const isIntegrationDeletedWebhookPayload = typia.createIs<IntegrationDeletedWebhookPayload>();
export const assertIntegrationDeletedWebhookPayload = typia.createAssert<IntegrationDeletedWebhookPayload>();
export const validateIntegrationDeletedWebhookPayload = typia.createValidate<IntegrationDeletedWebhookPayload>();

export type AssessmentOrderReceivedWebhookPayload = { id: string, type: "assessment:order-received", data: { id: string, package_id: string, status: ("OPEN" | "COMPLETED" | "CANCELLED" | "REJECTED"), integration_id: string, candidate: { remote_id: (string | null), email: string, first_name: (string | null), last_name: (string | null), phone: (string | null) }, application: { remote_id: (string | null) }, job: { remote_id: (string | null), name: (string | null), job_code: (string | null), description: (string | null), location: (Partial<{ street_1: (string | null), street_2: (string | null), city: (string | null), state: (string | null), zip_code: (string | null), country: (string | null), raw: (string | null) }> | null), hiring_team: Array<{ remote_id: (string | null), email: (string | null), first_name: (string | null), last_name: (string | null), hiring_team_roles: Array<("RECRUITER" | "HIRING_MANAGER")> }> } } };
export const isAssessmentOrderReceivedWebhookPayload = typia.createIs<AssessmentOrderReceivedWebhookPayload>();
export const assertAssessmentOrderReceivedWebhookPayload = typia.createAssert<AssessmentOrderReceivedWebhookPayload>();
export const validateAssessmentOrderReceivedWebhookPayload = typia.createValidate<AssessmentOrderReceivedWebhookPayload>();

export type InlineAssessmentOrderReceivedWebhookPayload = { id: string, type: "inline-assessment:order-received", data: { id: string, package_id: string, status: ("OPEN" | "COMPLETED" | "CANCELLED" | "REJECTED"), integration_id: string, candidate: { remote_id: (string | null), email: string, first_name: (string | null), last_name: (string | null), phone: (string | null) }, application: { remote_id: (string | null) }, job: { remote_id: (string | null), name: (string | null), job_code: (string | null), description: (string | null), location: (Partial<{ street_1: (string | null), street_2: (string | null), city: (string | null), state: (string | null), zip_code: (string | null), country: (string | null), raw: (string | null) }> | null), hiring_team: Array<{ remote_id: (string | null), email: (string | null), first_name: (string | null), last_name: (string | null), hiring_team_roles: Array<("RECRUITER" | "HIRING_MANAGER")> }> } } };
export const isInlineAssessmentOrderReceivedWebhookPayload = typia.createIs<InlineAssessmentOrderReceivedWebhookPayload>();
export const assertInlineAssessmentOrderReceivedWebhookPayload = typia.createAssert<InlineAssessmentOrderReceivedWebhookPayload>();
export const validateInlineAssessmentOrderReceivedWebhookPayload = typia.createValidate<InlineAssessmentOrderReceivedWebhookPayload>();

export type IntegrationStateChangedWebhookPayload = { id: string, type: "integration-state-changed", data: { integration_tool: string, integration_id: string, integration_category: ("HRIS" | "ATS" | "ASSESSMENT" | "LMS"), end_user: { organization_name: string, creator_email: (string | null), origin_id: (string | null) }, qa_status: ("PENDING" | "FAILED" | "PASSED"), setup_status: ("INCOMPLETE" | "FINAL_SYNC_PENDING" | "COMPLETED"), state: ("ACTIVE" | "INVALID" | "INACTIVE"), updated_at: string } };
export const isIntegrationStateChangedWebhookPayload = typia.createIs<IntegrationStateChangedWebhookPayload>();
export const assertIntegrationStateChangedWebhookPayload = typia.createAssert<IntegrationStateChangedWebhookPayload>();
export const validateIntegrationStateChangedWebhookPayload = typia.createValidate<IntegrationStateChangedWebhookPayload>();

export type AiApplyApplicationStatusUpdatedWebhookPayload = { id: string, type: "ai-apply-application-status-updated", data: { id: string, job_posting_id: string, status: ("SUBMITTED" | "DUPLICATE" | "PENDING" | "FAILED"), created_at: string, updated_at: string } };
export const isAiApplyApplicationStatusUpdatedWebhookPayload = typia.createIs<AiApplyApplicationStatusUpdatedWebhookPayload>();
export const assertAiApplyApplicationStatusUpdatedWebhookPayload = typia.createAssert<AiApplyApplicationStatusUpdatedWebhookPayload>();
export const validateAiApplyApplicationStatusUpdatedWebhookPayload = typia.createValidate<AiApplyApplicationStatusUpdatedWebhookPayload>();

export type AiApplyJobPostingStatusUpdatedWebhookPayload = { id: string, type: "ai-apply-job-posting-status-updated", data: { id: string, career_site: { id: string, label: string }, url: string, job_code: (string | null), created_at: string, updated_at: string, archived_at: (string | null), archived_reason: (("JOB_POSTING_TAKEN_OFFLINE" | "MANUAL_ARCHIVE" | "REMOVED_FROM_JOB_FEED") | null), availability: ("APPLYABLE" | "PENDING" | "ARCHIVED" | "UNAVAILABLE") } };
export const isAiApplyJobPostingStatusUpdatedWebhookPayload = typia.createIs<AiApplyJobPostingStatusUpdatedWebhookPayload>();
export const assertAiApplyJobPostingStatusUpdatedWebhookPayload = typia.createAssert<AiApplyJobPostingStatusUpdatedWebhookPayload>();
export const validateAiApplyJobPostingStatusUpdatedWebhookPayload = typia.createValidate<AiApplyJobPostingStatusUpdatedWebhookPayload>();

export type SyncFinishedWebhookPayload = { id: string, type: "sync-finished", data: { sync_id: string, sync_state: string, sync_started_at: string, sync_ended_at: string, sync_duration_seconds: number, integration_id: string, integration_tool: string, integration_category: ("HRIS" | "ATS" | "ASSESSMENT" | "LMS"), end_user: { organization_name: string, creator_email: (string | null), origin_id: (string | null) }, log_url: string } };
export const isSyncFinishedWebhookPayload = typia.createIs<SyncFinishedWebhookPayload>();
export const assertSyncFinishedWebhookPayload = typia.createAssert<SyncFinishedWebhookPayload>();
export const validateSyncFinishedWebhookPayload = typia.createValidate<SyncFinishedWebhookPayload>();

export type BulkImportJobPostingLocation = { country: string, postal_code?: string };
export const isBulkImportJobPostingLocation = typia.createIs<BulkImportJobPostingLocation>();
export const assertBulkImportJobPostingLocation = typia.createAssert<BulkImportJobPostingLocation>();
export const validateBulkImportJobPostingLocation = typia.createValidate<BulkImportJobPostingLocation>();

export type BulkImportJobPostingInput = { url: string, career_site_label: string, job_code?: string, location?: (BulkImportJobPostingLocation | null) };
export const isBulkImportJobPostingInput = typia.createIs<BulkImportJobPostingInput>();
export const assertBulkImportJobPostingInput = typia.createAssert<BulkImportJobPostingInput>();
export const validateBulkImportJobPostingInput = typia.createValidate<BulkImportJobPostingInput>();

export type BulkImportResponse = { status: "success", data: { created: number, processed: number, archived: number } };
export const isBulkImportResponse = typia.createIs<BulkImportResponse>();
export const assertBulkImportResponse = typia.createAssert<BulkImportResponse>();
export const validateBulkImportResponse = typia.createValidate<BulkImportResponse>();

// </Schemas>

// <Endpoints>
export type get_GetCheckApiKey = typeof get_GetCheckApiKey;
export const get_GetCheckApiKey = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/check-api-key">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: typia.createIs<never>(),
  responses: { 200: isGetCheckApiKeyPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type post_PostForceSync = typeof post_PostForceSync;
export const post_PostForceSync = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/force-sync">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { header: typia.createIs<{ "X-Integration-Id": string }>(), body: isPostForceSyncRequestBody },
  responses: { 200: isPostForceSyncPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type post_PostPassthroughToolApi = typeof post_PostPassthroughToolApi;
export const post_PostPassthroughToolApi = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/passthrough/{tool}/{api}">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: typia.createIs<{ tool: PostPassthroughToolApiParameterTool, api: PostPassthroughToolApiParameterApi }>(), header: typia.createIs<{ "X-Integration-Id": string }>(), body: isPostPassthroughToolApiRequestBody },
  responses: { 200: isPostPassthroughToolApiPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type delete_DeleteIntegrationsIntegrationId = typeof delete_DeleteIntegrationsIntegrationId;
export const delete_DeleteIntegrationsIntegrationId = {
  method: typia.createIs<"DELETE">(),
  path: typia.createIs<"/integrations/{integration_id}">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: typia.createIs<{ integration_id: DeleteIntegrationsIntegrationIdParameterIntegrationId }>(), body: isDeleteIntegrationsIntegrationIdRequestBody },
  responses: { 200: isDeleteIntegrationsIntegrationIdPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type get_GetIntegrationsIntegrationId = typeof get_GetIntegrationsIntegrationId;
export const get_GetIntegrationsIntegrationId = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/integrations/{integration_id}">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: typia.createIs<{ integration_id: GetIntegrationsIntegrationIdParameterIntegrationId }>() },
  responses: { 200: isGetIntegrationsIntegrationIdPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type put_PutIntegrationsIntegrationIdEnabled = typeof put_PutIntegrationsIntegrationIdEnabled;
export const put_PutIntegrationsIntegrationIdEnabled = {
  method: typia.createIs<"PUT">(),
  path: typia.createIs<"/integrations/{integration_id}/enabled">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: typia.createIs<{ integration_id: PutIntegrationsIntegrationIdEnabledParameterIntegrationId }>(), body: isPutIntegrationsIntegrationIdEnabledRequestBody },
  responses: { 200: isPutIntegrationsIntegrationIdEnabledPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type post_PostIntegrationsIntegrationIdRelink = typeof post_PostIntegrationsIntegrationIdRelink;
export const post_PostIntegrationsIntegrationIdRelink = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/integrations/{integration_id}/relink">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: typia.createIs<{ integration_id: PostIntegrationsIntegrationIdRelinkParameterIntegrationId }>(), body: isPostIntegrationsIntegrationIdRelinkRequestBody },
  responses: { 200: isPostIntegrationsIntegrationIdRelinkPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type post_PostIntegrationsIntegrationIdSetupLink = typeof post_PostIntegrationsIntegrationIdSetupLink;
export const post_PostIntegrationsIntegrationIdSetupLink = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/integrations/{integration_id}/setup-link">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: typia.createIs<{ integration_id: PostIntegrationsIntegrationIdSetupLinkParameterIntegrationId }>(), body: isPostIntegrationsIntegrationIdSetupLinkRequestBody },
  responses: { 200: isPostIntegrationsIntegrationIdSetupLinkPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type get_GetIntegrationsIntegrationIdIntegrationFields = typeof get_GetIntegrationsIntegrationIdIntegrationFields;
export const get_GetIntegrationsIntegrationIdIntegrationFields = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/integrations/{integration_id}/integration-fields">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: typia.createIs<Partial<{ cursor: GetIntegrationsIntegrationIdIntegrationFieldsParameterCursor, page_size: GetIntegrationsIntegrationIdIntegrationFieldsParameterPageSize }>>(), path: typia.createIs<{ integration_id: GetIntegrationsIntegrationIdIntegrationFieldsParameterIntegrationId }>() },
  responses: { 200: isGetIntegrationsIntegrationIdIntegrationFieldsPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type patch_PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldId = typeof patch_PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldId;
export const patch_PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldId = {
  method: typia.createIs<"PATCH">(),
  path: typia.createIs<"/integrations/{integration_id}/integration-fields/{integration_field_id}">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: typia.createIs<{ integration_id: PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationId, integration_field_id: PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdParameterIntegrationFieldId }>(), body: isPatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdRequestBody },
  responses: { 200: isPatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type get_GetIntegrationsIntegrationIdCustomFields = typeof get_GetIntegrationsIntegrationIdCustomFields;
export const get_GetIntegrationsIntegrationIdCustomFields = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/integrations/{integration_id}/custom-fields">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: typia.createIs<Partial<{ cursor: GetIntegrationsIntegrationIdCustomFieldsParameterCursor, page_size: GetIntegrationsIntegrationIdCustomFieldsParameterPageSize }>>(), path: typia.createIs<{ integration_id: GetIntegrationsIntegrationIdCustomFieldsParameterIntegrationId }>() },
  responses: { 200: isGetIntegrationsIntegrationIdCustomFieldsPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type put_PutIntegrationsIntegrationIdCustomFieldsCustomFieldId = typeof put_PutIntegrationsIntegrationIdCustomFieldsCustomFieldId;
export const put_PutIntegrationsIntegrationIdCustomFieldsCustomFieldId = {
  method: typia.createIs<"PUT">(),
  path: typia.createIs<"/integrations/{integration_id}/custom-fields/{custom_field_id}">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: typia.createIs<{ integration_id: PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterIntegrationId, custom_field_id: PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdParameterCustomFieldId }>(), body: isPutIntegrationsIntegrationIdCustomFieldsCustomFieldIdRequestBody },
  responses: { 200: isPutIntegrationsIntegrationIdCustomFieldsCustomFieldIdPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type get_GetToolsCategory = typeof get_GetToolsCategory;
export const get_GetToolsCategory = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/tools/{category}">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: typia.createIs<{ category: GetToolsCategoryParameterCategory }>() },
  responses: { 200: isGetToolsCategoryPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type post_PostHrisProvisioningGroupsGroupIdDiff = typeof post_PostHrisProvisioningGroupsGroupIdDiff;
export const post_PostHrisProvisioningGroupsGroupIdDiff = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/hris/provisioning-groups/{group_id}/diff">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: typia.createIs<{ group_id: PostHrisProvisioningGroupsGroupIdDiffParameterGroupId }>(), header: typia.createIs<{ "X-Integration-Id": string }>(), body: isPostHrisProvisioningGroupsGroupIdDiffRequestBody },
  responses: { 200: isPostHrisProvisioningGroupsGroupIdDiffPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type post_PostHrisProvisioningGroupsGroupIdSetupLinks = typeof post_PostHrisProvisioningGroupsGroupIdSetupLinks;
export const post_PostHrisProvisioningGroupsGroupIdSetupLinks = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/hris/provisioning-groups/{group_id}/setup-links">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: typia.createIs<{ group_id: PostHrisProvisioningGroupsGroupIdSetupLinksParameterGroupId }>(), header: typia.createIs<{ "X-Integration-Id": string }>(), body: isPostHrisProvisioningGroupsGroupIdSetupLinksRequestBody },
  responses: { 200: isPostHrisProvisioningGroupsGroupIdSetupLinksPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type get_GetHrisEmployees = typeof get_GetHrisEmployees;
export const get_GetHrisEmployees = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/hris/employees">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: typia.createIs<Partial<{ cursor: GetHrisEmployeesParameterCursor, page_size: GetHrisEmployeesParameterPageSize, updated_after: GetHrisEmployeesParameterUpdatedAfter, include_deleted: GetHrisEmployeesParameterIncludeDeleted, ignore_unsupported_filters: GetHrisEmployeesParameterIgnoreUnsupportedFilters, ids: GetHrisEmployeesParameterIds, remote_ids: GetHrisEmployeesParameterRemoteIds, employment_status: GetHrisEmployeesParameterEmploymentStatus, employment_statuses: GetHrisEmployeesParameterEmploymentStatuses, group_ids: GetHrisEmployeesParameterGroupIds, legal_entity_ids: GetHrisEmployeesParameterLegalEntityIds, work_location_ids: GetHrisEmployeesParameterWorkLocationIds, work_emails: GetHrisEmployeesParameterWorkEmails, personal_emails: GetHrisEmployeesParameterPersonalEmails, custom_fields: GetHrisEmployeesParameterCustomFields }>>(), header: typia.createIs<{ "X-Integration-Id": string }>() },
  responses: { 200: isGetHrisEmployeesPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type post_PostHrisEmployees = typeof post_PostHrisEmployees;
export const post_PostHrisEmployees = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/hris/employees">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { header: typia.createIs<{ "X-Integration-Id": string }>(), body: isPostHrisEmployeesRequestBody },
  responses: { 200: isPostHrisEmployeesPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type get_GetHrisEmployeesForm = typeof get_GetHrisEmployeesForm;
export const get_GetHrisEmployeesForm = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/hris/employees/form">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { header: typia.createIs<{ "X-Integration-Id": string }>() },
  responses: { 200: isGetHrisEmployeesFormPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type post_PostHrisEmployeesForm = typeof post_PostHrisEmployeesForm;
export const post_PostHrisEmployeesForm = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/hris/employees/form">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { header: typia.createIs<{ "X-Integration-Id": string }>(), body: isPostHrisEmployeesFormRequestBody },
  responses: { 200: isPostHrisEmployeesFormPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type patch_PatchHrisEmployeesEmployeeId = typeof patch_PatchHrisEmployeesEmployeeId;
export const patch_PatchHrisEmployeesEmployeeId = {
  method: typia.createIs<"PATCH">(),
  path: typia.createIs<"/hris/employees/{employee_id}">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: typia.createIs<{ employee_id: PatchHrisEmployeesEmployeeIdParameterEmployeeId }>(), header: typia.createIs<{ "X-Integration-Id": string }>(), body: isPatchHrisEmployeesEmployeeIdRequestBody },
  responses: { 200: isPatchHrisEmployeesEmployeeIdPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type post_PostHrisEmployeesEmployeeIdDocuments = typeof post_PostHrisEmployeesEmployeeIdDocuments;
export const post_PostHrisEmployeesEmployeeIdDocuments = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/hris/employees/{employee_id}/documents">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: typia.createIs<{ employee_id: PostHrisEmployeesEmployeeIdDocumentsParameterEmployeeId }>(), header: typia.createIs<{ "X-Integration-Id": string }>(), body: isPostHrisEmployeesEmployeeIdDocumentsRequestBody },
  responses: { 200: isPostHrisEmployeesEmployeeIdDocumentsPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type get_GetHrisEmployeeDocumentCategories = typeof get_GetHrisEmployeeDocumentCategories;
export const get_GetHrisEmployeeDocumentCategories = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/hris/employee-document-categories">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: typia.createIs<Partial<{ cursor: GetHrisEmployeeDocumentCategoriesParameterCursor, page_size: GetHrisEmployeeDocumentCategoriesParameterPageSize, updated_after: GetHrisEmployeeDocumentCategoriesParameterUpdatedAfter, include_deleted: GetHrisEmployeeDocumentCategoriesParameterIncludeDeleted, ignore_unsupported_filters: GetHrisEmployeeDocumentCategoriesParameterIgnoreUnsupportedFilters, ids: GetHrisEmployeeDocumentCategoriesParameterIds, remote_ids: GetHrisEmployeeDocumentCategoriesParameterRemoteIds }>>(), header: typia.createIs<{ "X-Integration-Id": string }>() },
  responses: { 200: isGetHrisEmployeeDocumentCategoriesPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type get_GetHrisTeams = typeof get_GetHrisTeams;
export const get_GetHrisTeams = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/hris/teams">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: typia.createIs<Partial<{ cursor: GetHrisTeamsParameterCursor, page_size: GetHrisTeamsParameterPageSize, updated_after: GetHrisTeamsParameterUpdatedAfter, include_deleted: GetHrisTeamsParameterIncludeDeleted, ignore_unsupported_filters: GetHrisTeamsParameterIgnoreUnsupportedFilters, ids: GetHrisTeamsParameterIds, remote_ids: GetHrisTeamsParameterRemoteIds }>>(), header: typia.createIs<{ "X-Integration-Id": string }>() },
  responses: { 200: isGetHrisTeamsPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type get_GetHrisGroups = typeof get_GetHrisGroups;
export const get_GetHrisGroups = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/hris/groups">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: typia.createIs<Partial<{ cursor: GetHrisGroupsParameterCursor, page_size: GetHrisGroupsParameterPageSize, updated_after: GetHrisGroupsParameterUpdatedAfter, include_deleted: GetHrisGroupsParameterIncludeDeleted, ignore_unsupported_filters: GetHrisGroupsParameterIgnoreUnsupportedFilters, ids: GetHrisGroupsParameterIds, remote_ids: GetHrisGroupsParameterRemoteIds, types: GetHrisGroupsParameterTypes, name_contains: GetHrisGroupsParameterNameContains }>>(), header: typia.createIs<{ "X-Integration-Id": string }>() },
  responses: { 200: isGetHrisGroupsPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type get_GetHrisEmployments = typeof get_GetHrisEmployments;
export const get_GetHrisEmployments = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/hris/employments">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: typia.createIs<Partial<{ cursor: GetHrisEmploymentsParameterCursor, page_size: GetHrisEmploymentsParameterPageSize, updated_after: GetHrisEmploymentsParameterUpdatedAfter, include_deleted: GetHrisEmploymentsParameterIncludeDeleted, ignore_unsupported_filters: GetHrisEmploymentsParameterIgnoreUnsupportedFilters, ids: GetHrisEmploymentsParameterIds, remote_ids: GetHrisEmploymentsParameterRemoteIds }>>(), header: typia.createIs<{ "X-Integration-Id": string }>() },
  responses: { 200: isGetHrisEmploymentsPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type get_GetHrisLocations = typeof get_GetHrisLocations;
export const get_GetHrisLocations = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/hris/locations">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: typia.createIs<Partial<{ cursor: GetHrisLocationsParameterCursor, page_size: GetHrisLocationsParameterPageSize, updated_after: GetHrisLocationsParameterUpdatedAfter, include_deleted: GetHrisLocationsParameterIncludeDeleted, ignore_unsupported_filters: GetHrisLocationsParameterIgnoreUnsupportedFilters, ids: GetHrisLocationsParameterIds, remote_ids: GetHrisLocationsParameterRemoteIds, name_contains: GetHrisLocationsParameterNameContains }>>(), header: typia.createIs<{ "X-Integration-Id": string }>() },
  responses: { 200: isGetHrisLocationsPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type get_GetHrisAbsenceTypes = typeof get_GetHrisAbsenceTypes;
export const get_GetHrisAbsenceTypes = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/hris/absence-types">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: typia.createIs<Partial<{ cursor: GetHrisAbsenceTypesParameterCursor, page_size: GetHrisAbsenceTypesParameterPageSize, updated_after: GetHrisAbsenceTypesParameterUpdatedAfter, include_deleted: GetHrisAbsenceTypesParameterIncludeDeleted, ignore_unsupported_filters: GetHrisAbsenceTypesParameterIgnoreUnsupportedFilters, ids: GetHrisAbsenceTypesParameterIds, remote_ids: GetHrisAbsenceTypesParameterRemoteIds }>>(), header: typia.createIs<{ "X-Integration-Id": string }>() },
  responses: { 200: isGetHrisAbsenceTypesPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type get_GetHrisTimeOffBalances = typeof get_GetHrisTimeOffBalances;
export const get_GetHrisTimeOffBalances = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/hris/time-off-balances">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: typia.createIs<Partial<{ cursor: GetHrisTimeOffBalancesParameterCursor, page_size: GetHrisTimeOffBalancesParameterPageSize, updated_after: GetHrisTimeOffBalancesParameterUpdatedAfter, include_deleted: GetHrisTimeOffBalancesParameterIncludeDeleted, ignore_unsupported_filters: GetHrisTimeOffBalancesParameterIgnoreUnsupportedFilters, ids: GetHrisTimeOffBalancesParameterIds, remote_ids: GetHrisTimeOffBalancesParameterRemoteIds, employee_id: GetHrisTimeOffBalancesParameterEmployeeId }>>(), header: typia.createIs<{ "X-Integration-Id": string }>() },
  responses: { 200: isGetHrisTimeOffBalancesPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type get_GetHrisAbsences = typeof get_GetHrisAbsences;
export const get_GetHrisAbsences = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/hris/absences">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: typia.createIs<Partial<{ cursor: GetHrisAbsencesParameterCursor, page_size: GetHrisAbsencesParameterPageSize, updated_after: GetHrisAbsencesParameterUpdatedAfter, include_deleted: GetHrisAbsencesParameterIncludeDeleted, ignore_unsupported_filters: GetHrisAbsencesParameterIgnoreUnsupportedFilters, ids: GetHrisAbsencesParameterIds, remote_ids: GetHrisAbsencesParameterRemoteIds, date_from: GetHrisAbsencesParameterDateFrom, date_until: GetHrisAbsencesParameterDateUntil, type_ids: GetHrisAbsencesParameterTypeIds, employee_id: GetHrisAbsencesParameterEmployeeId, time_from: GetHrisAbsencesParameterTimeFrom, time_until: GetHrisAbsencesParameterTimeUntil }>>(), header: typia.createIs<{ "X-Integration-Id": string }>() },
  responses: { 200: isGetHrisAbsencesPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type post_PostHrisAbsences = typeof post_PostHrisAbsences;
export const post_PostHrisAbsences = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/hris/absences">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { header: typia.createIs<{ "X-Integration-Id": string }>(), body: isPostHrisAbsencesRequestBody },
  responses: { 200: isPostHrisAbsencesPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type delete_DeleteHrisAbsencesAbsenceId = typeof delete_DeleteHrisAbsencesAbsenceId;
export const delete_DeleteHrisAbsencesAbsenceId = {
  method: typia.createIs<"DELETE">(),
  path: typia.createIs<"/hris/absences/{absence_id}">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: typia.createIs<{ absence_id: DeleteHrisAbsencesAbsenceIdParameterAbsenceId }>(), header: typia.createIs<{ "X-Integration-Id": string }>(), body: isDeleteHrisAbsencesAbsenceIdRequestBody },
  responses: { 200: isDeleteHrisAbsencesAbsenceIdPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type get_GetHrisLegalEntities = typeof get_GetHrisLegalEntities;
export const get_GetHrisLegalEntities = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/hris/legal-entities">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: typia.createIs<Partial<{ cursor: GetHrisLegalEntitiesParameterCursor, page_size: GetHrisLegalEntitiesParameterPageSize, updated_after: GetHrisLegalEntitiesParameterUpdatedAfter, include_deleted: GetHrisLegalEntitiesParameterIncludeDeleted, ignore_unsupported_filters: GetHrisLegalEntitiesParameterIgnoreUnsupportedFilters, ids: GetHrisLegalEntitiesParameterIds, remote_ids: GetHrisLegalEntitiesParameterRemoteIds, name_contains: GetHrisLegalEntitiesParameterNameContains }>>(), header: typia.createIs<{ "X-Integration-Id": string }>() },
  responses: { 200: isGetHrisLegalEntitiesPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type get_GetHrisTimesheets = typeof get_GetHrisTimesheets;
export const get_GetHrisTimesheets = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/hris/timesheets">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: typia.createIs<Partial<{ cursor: GetHrisTimesheetsParameterCursor, page_size: GetHrisTimesheetsParameterPageSize, updated_after: GetHrisTimesheetsParameterUpdatedAfter, include_deleted: GetHrisTimesheetsParameterIncludeDeleted, ignore_unsupported_filters: GetHrisTimesheetsParameterIgnoreUnsupportedFilters, ids: GetHrisTimesheetsParameterIds, remote_ids: GetHrisTimesheetsParameterRemoteIds, employee_id: GetHrisTimesheetsParameterEmployeeId, started_before: GetHrisTimesheetsParameterStartedBefore, started_after: GetHrisTimesheetsParameterStartedAfter, ended_before: GetHrisTimesheetsParameterEndedBefore, ended_after: GetHrisTimesheetsParameterEndedAfter }>>(), header: typia.createIs<{ "X-Integration-Id": string }>() },
  responses: { 200: isGetHrisTimesheetsPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type get_GetHrisPerformanceReviewCycles = typeof get_GetHrisPerformanceReviewCycles;
export const get_GetHrisPerformanceReviewCycles = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/hris/performance-review-cycles">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: typia.createIs<Partial<{ cursor: GetHrisPerformanceReviewCyclesParameterCursor, page_size: GetHrisPerformanceReviewCyclesParameterPageSize, updated_after: GetHrisPerformanceReviewCyclesParameterUpdatedAfter, include_deleted: GetHrisPerformanceReviewCyclesParameterIncludeDeleted, ignore_unsupported_filters: GetHrisPerformanceReviewCyclesParameterIgnoreUnsupportedFilters, ids: GetHrisPerformanceReviewCyclesParameterIds, remote_ids: GetHrisPerformanceReviewCyclesParameterRemoteIds }>>(), header: typia.createIs<{ "X-Integration-Id": string }>() },
  responses: { 200: isGetHrisPerformanceReviewCyclesPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type get_GetHrisPerformanceReviews = typeof get_GetHrisPerformanceReviews;
export const get_GetHrisPerformanceReviews = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/hris/performance-reviews">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: typia.createIs<Partial<{ cursor: GetHrisPerformanceReviewsParameterCursor, page_size: GetHrisPerformanceReviewsParameterPageSize, updated_after: GetHrisPerformanceReviewsParameterUpdatedAfter, include_deleted: GetHrisPerformanceReviewsParameterIncludeDeleted, ignore_unsupported_filters: GetHrisPerformanceReviewsParameterIgnoreUnsupportedFilters, ids: GetHrisPerformanceReviewsParameterIds, remote_ids: GetHrisPerformanceReviewsParameterRemoteIds, types: GetHrisPerformanceReviewsParameterTypes, review_cycle_ids: GetHrisPerformanceReviewsParameterReviewCycleIds, reviewee_ids: GetHrisPerformanceReviewsParameterRevieweeIds }>>(), header: typia.createIs<{ "X-Integration-Id": string }>() },
  responses: { 200: isGetHrisPerformanceReviewsPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type get_GetHrisSkills = typeof get_GetHrisSkills;
export const get_GetHrisSkills = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/hris/skills">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: typia.createIs<Partial<{ ids: GetHrisSkillsParameterIds, remote_ids: GetHrisSkillsParameterRemoteIds, name_contains: GetHrisSkillsParameterNameContains }>>(), header: typia.createIs<{ "X-Integration-Id": string }>() },
  responses: { 200: isGetHrisSkillsPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type post_PostHrisSkills = typeof post_PostHrisSkills;
export const post_PostHrisSkills = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/hris/skills">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { header: typia.createIs<{ "X-Integration-Id": string }>(), body: isPostHrisSkillsRequestBody },
  responses: { 200: isPostHrisSkillsPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type patch_PatchHrisSkillsSkillId = typeof patch_PatchHrisSkillsSkillId;
export const patch_PatchHrisSkillsSkillId = {
  method: typia.createIs<"PATCH">(),
  path: typia.createIs<"/hris/skills/{skill_id}">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: typia.createIs<{ skill_id: PatchHrisSkillsSkillIdParameterSkillId }>(), header: typia.createIs<{ "X-Integration-Id": string }>(), body: isPatchHrisSkillsSkillIdRequestBody },
  responses: { 200: isPatchHrisSkillsSkillIdPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type delete_DeleteHrisSkillsSkillId = typeof delete_DeleteHrisSkillsSkillId;
export const delete_DeleteHrisSkillsSkillId = {
  method: typia.createIs<"DELETE">(),
  path: typia.createIs<"/hris/skills/{skill_id}">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: typia.createIs<{ skill_id: DeleteHrisSkillsSkillIdParameterSkillId }>(), header: typia.createIs<{ "X-Integration-Id": string }>(), body: isDeleteHrisSkillsSkillIdRequestBody },
  responses: { 200: isDeleteHrisSkillsSkillIdPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type get_GetHrisEmployeeSkillAssignments = typeof get_GetHrisEmployeeSkillAssignments;
export const get_GetHrisEmployeeSkillAssignments = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/hris/employee-skill-assignments">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: typia.createIs<Partial<{ ids: GetHrisEmployeeSkillAssignmentsParameterIds, remote_ids: GetHrisEmployeeSkillAssignmentsParameterRemoteIds, employee_ids: GetHrisEmployeeSkillAssignmentsParameterEmployeeIds, skill_ids: GetHrisEmployeeSkillAssignmentsParameterSkillIds }>>(), header: typia.createIs<{ "X-Integration-Id": string }>() },
  responses: { 200: isGetHrisEmployeeSkillAssignmentsPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type post_PostHrisEmployeeSkillAssignments = typeof post_PostHrisEmployeeSkillAssignments;
export const post_PostHrisEmployeeSkillAssignments = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/hris/employee-skill-assignments">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { header: typia.createIs<{ "X-Integration-Id": string }>(), body: isPostHrisEmployeeSkillAssignmentsRequestBody },
  responses: { 200: isPostHrisEmployeeSkillAssignmentsPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type patch_PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentId = typeof patch_PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentId;
export const patch_PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentId = {
  method: typia.createIs<"PATCH">(),
  path: typia.createIs<"/hris/employee-skill-assignments/{employee_skill_assignment_id}">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: typia.createIs<{ employee_skill_assignment_id: PatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId }>(), header: typia.createIs<{ "X-Integration-Id": string }>(), body: isPatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody },
  responses: { 200: isPatchHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type delete_DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentId = typeof delete_DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentId;
export const delete_DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentId = {
  method: typia.createIs<"DELETE">(),
  path: typia.createIs<"/hris/employee-skill-assignments/{employee_skill_assignment_id}">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: typia.createIs<{ employee_skill_assignment_id: DeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdParameterEmployeeSkillAssignmentId }>(), header: typia.createIs<{ "X-Integration-Id": string }>(), body: isDeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdRequestBody },
  responses: { 200: isDeleteHrisEmployeeSkillAssignmentsEmployeeSkillAssignmentIdPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type get_GetHrisStaffingEntities = typeof get_GetHrisStaffingEntities;
export const get_GetHrisStaffingEntities = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/hris/staffing-entities">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: typia.createIs<Partial<{ cursor: GetHrisStaffingEntitiesParameterCursor, page_size: GetHrisStaffingEntitiesParameterPageSize, updated_after: GetHrisStaffingEntitiesParameterUpdatedAfter, include_deleted: GetHrisStaffingEntitiesParameterIncludeDeleted, ignore_unsupported_filters: GetHrisStaffingEntitiesParameterIgnoreUnsupportedFilters, ids: GetHrisStaffingEntitiesParameterIds, remote_ids: GetHrisStaffingEntitiesParameterRemoteIds, model_types: GetHrisStaffingEntitiesParameterModelTypes, statuses: GetHrisStaffingEntitiesParameterStatuses }>>(), header: typia.createIs<{ "X-Integration-Id": string }>() },
  responses: { 200: isGetHrisStaffingEntitiesPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "HRIS.EMPLOYEE_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type get_GetAtsApplications = typeof get_GetAtsApplications;
export const get_GetAtsApplications = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/ats/applications">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: typia.createIs<Partial<{ cursor: GetAtsApplicationsParameterCursor, page_size: GetAtsApplicationsParameterPageSize, updated_after: GetAtsApplicationsParameterUpdatedAfter, include_deleted: GetAtsApplicationsParameterIncludeDeleted, ignore_unsupported_filters: GetAtsApplicationsParameterIgnoreUnsupportedFilters, ids: GetAtsApplicationsParameterIds, remote_ids: GetAtsApplicationsParameterRemoteIds, outcome: GetAtsApplicationsParameterOutcome, outcomes: GetAtsApplicationsParameterOutcomes, job_ids: GetAtsApplicationsParameterJobIds, job_remote_ids: GetAtsApplicationsParameterJobRemoteIds, current_stage_ids: GetAtsApplicationsParameterCurrentStageIds, remote_created_after: GetAtsApplicationsParameterRemoteCreatedAfter }>>(), header: typia.createIs<{ "X-Integration-Id": string }>() },
  responses: { 200: isGetAtsApplicationsPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type put_PutAtsApplicationsApplicationIdStage = typeof put_PutAtsApplicationsApplicationIdStage;
export const put_PutAtsApplicationsApplicationIdStage = {
  method: typia.createIs<"PUT">(),
  path: typia.createIs<"/ats/applications/{application_id}/stage">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: typia.createIs<{ application_id: PutAtsApplicationsApplicationIdStageParameterApplicationId }>(), header: typia.createIs<{ "X-Integration-Id": string }>(), body: isPutAtsApplicationsApplicationIdStageRequestBody },
  responses: { 200: isPutAtsApplicationsApplicationIdStagePositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type post_PostAtsApplicationsApplicationIdResultLinks = typeof post_PostAtsApplicationsApplicationIdResultLinks;
export const post_PostAtsApplicationsApplicationIdResultLinks = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/ats/applications/{application_id}/result-links">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: typia.createIs<{ application_id: PostAtsApplicationsApplicationIdResultLinksParameterApplicationId }>(), header: typia.createIs<{ "X-Integration-Id": string }>(), body: isPostAtsApplicationsApplicationIdResultLinksRequestBody },
  responses: { 200: isPostAtsApplicationsApplicationIdResultLinksPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type post_PostAtsApplicationsApplicationIdNotes = typeof post_PostAtsApplicationsApplicationIdNotes;
export const post_PostAtsApplicationsApplicationIdNotes = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/ats/applications/{application_id}/notes">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: typia.createIs<{ application_id: PostAtsApplicationsApplicationIdNotesParameterApplicationId }>(), header: typia.createIs<{ "X-Integration-Id": string }>(), body: isPostAtsApplicationsApplicationIdNotesRequestBody },
  responses: { 200: isPostAtsApplicationsApplicationIdNotesPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type get_GetAtsApplicationsApplicationIdAttachments = typeof get_GetAtsApplicationsApplicationIdAttachments;
export const get_GetAtsApplicationsApplicationIdAttachments = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/ats/applications/{application_id}/attachments">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: typia.createIs<{ application_id: GetAtsApplicationsApplicationIdAttachmentsParameterApplicationId }>(), header: typia.createIs<{ "X-Integration-Id": string }>() },
  responses: { 200: isGetAtsApplicationsApplicationIdAttachmentsPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type post_PostAtsApplicationsApplicationIdAttachments = typeof post_PostAtsApplicationsApplicationIdAttachments;
export const post_PostAtsApplicationsApplicationIdAttachments = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/ats/applications/{application_id}/attachments">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: typia.createIs<{ application_id: PostAtsApplicationsApplicationIdAttachmentsParameterApplicationId }>(), header: typia.createIs<{ "X-Integration-Id": string }>(), body: isPostAtsApplicationsApplicationIdAttachmentsRequestBody },
  responses: { 200: isPostAtsApplicationsApplicationIdAttachmentsPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type post_PostAtsApplicationsApplicationIdReject = typeof post_PostAtsApplicationsApplicationIdReject;
export const post_PostAtsApplicationsApplicationIdReject = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/ats/applications/{application_id}/reject">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: typia.createIs<{ application_id: PostAtsApplicationsApplicationIdRejectParameterApplicationId }>(), header: typia.createIs<{ "X-Integration-Id": string }>(), body: isPostAtsApplicationsApplicationIdRejectRequestBody },
  responses: { 200: isPostAtsApplicationsApplicationIdRejectPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type post_PostAtsApplicationsApplicationIdInterviews = typeof post_PostAtsApplicationsApplicationIdInterviews;
export const post_PostAtsApplicationsApplicationIdInterviews = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/ats/applications/{application_id}/interviews">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: typia.createIs<{ application_id: PostAtsApplicationsApplicationIdInterviewsParameterApplicationId }>(), header: typia.createIs<{ "X-Integration-Id": string }>(), body: isPostAtsApplicationsApplicationIdInterviewsRequestBody },
  responses: { 200: isPostAtsApplicationsApplicationIdInterviewsPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type patch_PatchAtsApplicationsApplicationIdInterviews = typeof patch_PatchAtsApplicationsApplicationIdInterviews;
export const patch_PatchAtsApplicationsApplicationIdInterviews = {
  method: typia.createIs<"PATCH">(),
  path: typia.createIs<"/ats/applications/{application_id}/interviews">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: typia.createIs<{ application_id: PatchAtsApplicationsApplicationIdInterviewsParameterApplicationId }>(), header: typia.createIs<{ "X-Integration-Id": string }>(), body: isPatchAtsApplicationsApplicationIdInterviewsRequestBody },
  responses: { 200: isPatchAtsApplicationsApplicationIdInterviewsPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type get_GetAtsCandidates = typeof get_GetAtsCandidates;
export const get_GetAtsCandidates = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/ats/candidates">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: typia.createIs<Partial<{ cursor: GetAtsCandidatesParameterCursor, page_size: GetAtsCandidatesParameterPageSize, updated_after: GetAtsCandidatesParameterUpdatedAfter, include_deleted: GetAtsCandidatesParameterIncludeDeleted, ignore_unsupported_filters: GetAtsCandidatesParameterIgnoreUnsupportedFilters, ids: GetAtsCandidatesParameterIds, remote_ids: GetAtsCandidatesParameterRemoteIds, email: GetAtsCandidatesParameterEmail, job_ids: GetAtsCandidatesParameterJobIds, first_name: GetAtsCandidatesParameterFirstName, last_name: GetAtsCandidatesParameterLastName }>>(), header: typia.createIs<{ "X-Integration-Id": string }>() },
  responses: { 200: isGetAtsCandidatesPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type post_PostAtsCandidates = typeof post_PostAtsCandidates;
export const post_PostAtsCandidates = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/ats/candidates">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { header: typia.createIs<{ "X-Integration-Id": string }>(), body: isPostAtsCandidatesRequestBody },
  responses: { 200: isPostAtsCandidatesPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type get_GetAtsCandidatesCandidateIdAttachments = typeof get_GetAtsCandidatesCandidateIdAttachments;
export const get_GetAtsCandidatesCandidateIdAttachments = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/ats/candidates/{candidate_id}/attachments">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: typia.createIs<{ candidate_id: GetAtsCandidatesCandidateIdAttachmentsParameterCandidateId }>(), header: typia.createIs<{ "X-Integration-Id": string }>() },
  responses: { 200: isGetAtsCandidatesCandidateIdAttachmentsPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type post_PostAtsCandidatesCandidateIdAttachments = typeof post_PostAtsCandidatesCandidateIdAttachments;
export const post_PostAtsCandidatesCandidateIdAttachments = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/ats/candidates/{candidate_id}/attachments">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: typia.createIs<{ candidate_id: PostAtsCandidatesCandidateIdAttachmentsParameterCandidateId }>(), header: typia.createIs<{ "X-Integration-Id": string }>(), body: isPostAtsCandidatesCandidateIdAttachmentsRequestBody },
  responses: { 200: isPostAtsCandidatesCandidateIdAttachmentsPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type post_PostAtsCandidatesCandidateIdResultLinks = typeof post_PostAtsCandidatesCandidateIdResultLinks;
export const post_PostAtsCandidatesCandidateIdResultLinks = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/ats/candidates/{candidate_id}/result-links">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: typia.createIs<{ candidate_id: PostAtsCandidatesCandidateIdResultLinksParameterCandidateId }>(), header: typia.createIs<{ "X-Integration-Id": string }>(), body: isPostAtsCandidatesCandidateIdResultLinksRequestBody },
  responses: { 200: isPostAtsCandidatesCandidateIdResultLinksPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type post_PostAtsCandidatesCandidateIdTags = typeof post_PostAtsCandidatesCandidateIdTags;
export const post_PostAtsCandidatesCandidateIdTags = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/ats/candidates/{candidate_id}/tags">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: typia.createIs<{ candidate_id: PostAtsCandidatesCandidateIdTagsParameterCandidateId }>(), header: typia.createIs<{ "X-Integration-Id": string }>(), body: isPostAtsCandidatesCandidateIdTagsRequestBody },
  responses: { 200: isPostAtsCandidatesCandidateIdTagsPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type delete_DeleteAtsCandidatesCandidateIdTags = typeof delete_DeleteAtsCandidatesCandidateIdTags;
export const delete_DeleteAtsCandidatesCandidateIdTags = {
  method: typia.createIs<"DELETE">(),
  path: typia.createIs<"/ats/candidates/{candidate_id}/tags">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: typia.createIs<{ candidate_id: DeleteAtsCandidatesCandidateIdTagsParameterCandidateId }>(), header: typia.createIs<{ "X-Integration-Id": string }>(), body: isDeleteAtsCandidatesCandidateIdTagsRequestBody },
  responses: { 200: isDeleteAtsCandidatesCandidateIdTagsPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type get_GetAtsTags = typeof get_GetAtsTags;
export const get_GetAtsTags = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/ats/tags">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: typia.createIs<Partial<{ cursor: GetAtsTagsParameterCursor, page_size: GetAtsTagsParameterPageSize, updated_after: GetAtsTagsParameterUpdatedAfter, include_deleted: GetAtsTagsParameterIncludeDeleted, ignore_unsupported_filters: GetAtsTagsParameterIgnoreUnsupportedFilters, ids: GetAtsTagsParameterIds, remote_ids: GetAtsTagsParameterRemoteIds }>>(), header: typia.createIs<{ "X-Integration-Id": string }>() },
  responses: { 200: isGetAtsTagsPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type get_GetAtsApplicationStages = typeof get_GetAtsApplicationStages;
export const get_GetAtsApplicationStages = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/ats/application-stages">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: typia.createIs<Partial<{ cursor: GetAtsApplicationStagesParameterCursor, page_size: GetAtsApplicationStagesParameterPageSize, updated_after: GetAtsApplicationStagesParameterUpdatedAfter, include_deleted: GetAtsApplicationStagesParameterIncludeDeleted, ignore_unsupported_filters: GetAtsApplicationStagesParameterIgnoreUnsupportedFilters, ids: GetAtsApplicationStagesParameterIds, remote_ids: GetAtsApplicationStagesParameterRemoteIds }>>(), header: typia.createIs<{ "X-Integration-Id": string }>() },
  responses: { 200: isGetAtsApplicationStagesPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type get_GetAtsJobs = typeof get_GetAtsJobs;
export const get_GetAtsJobs = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/ats/jobs">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: typia.createIs<Partial<{ cursor: GetAtsJobsParameterCursor, page_size: GetAtsJobsParameterPageSize, updated_after: GetAtsJobsParameterUpdatedAfter, include_deleted: GetAtsJobsParameterIncludeDeleted, ignore_unsupported_filters: GetAtsJobsParameterIgnoreUnsupportedFilters, ids: GetAtsJobsParameterIds, remote_ids: GetAtsJobsParameterRemoteIds, job_codes: GetAtsJobsParameterJobCodes, post_url: GetAtsJobsParameterPostUrl, status: GetAtsJobsParameterStatus, statuses: GetAtsJobsParameterStatuses, employment_types: GetAtsJobsParameterEmploymentTypes, visibilities: GetAtsJobsParameterVisibilities, remote_created_after: GetAtsJobsParameterRemoteCreatedAfter, name_contains: GetAtsJobsParameterNameContains }>>(), header: typia.createIs<{ "X-Integration-Id": string }>() },
  responses: { 200: isGetAtsJobsPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type post_PostAtsJobsJobIdApplications = typeof post_PostAtsJobsJobIdApplications;
export const post_PostAtsJobsJobIdApplications = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/ats/jobs/{job_id}/applications">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: typia.createIs<{ job_id: PostAtsJobsJobIdApplicationsParameterJobId }>(), header: typia.createIs<{ "X-Integration-Id": string }>(), body: isPostAtsJobsJobIdApplicationsRequestBody },
  responses: { 200: isPostAtsJobsJobIdApplicationsPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type get_GetAtsUsers = typeof get_GetAtsUsers;
export const get_GetAtsUsers = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/ats/users">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: typia.createIs<Partial<{ cursor: GetAtsUsersParameterCursor, page_size: GetAtsUsersParameterPageSize, updated_after: GetAtsUsersParameterUpdatedAfter, include_deleted: GetAtsUsersParameterIncludeDeleted, ignore_unsupported_filters: GetAtsUsersParameterIgnoreUnsupportedFilters, ids: GetAtsUsersParameterIds, remote_ids: GetAtsUsersParameterRemoteIds, emails: GetAtsUsersParameterEmails }>>(), header: typia.createIs<{ "X-Integration-Id": string }>() },
  responses: { 200: isGetAtsUsersPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type get_GetAtsRoles = typeof get_GetAtsRoles;
export const get_GetAtsRoles = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/ats/roles">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: typia.createIs<Partial<{ cursor: GetAtsRolesParameterCursor, page_size: GetAtsRolesParameterPageSize, updated_after: GetAtsRolesParameterUpdatedAfter, include_deleted: GetAtsRolesParameterIncludeDeleted, ignore_unsupported_filters: GetAtsRolesParameterIgnoreUnsupportedFilters, ids: GetAtsRolesParameterIds, remote_ids: GetAtsRolesParameterRemoteIds, scopes: GetAtsRolesParameterScopes }>>(), header: typia.createIs<{ "X-Integration-Id": string }>() },
  responses: { 200: isGetAtsRolesPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type get_GetAtsOffers = typeof get_GetAtsOffers;
export const get_GetAtsOffers = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/ats/offers">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: typia.createIs<Partial<{ cursor: GetAtsOffersParameterCursor, page_size: GetAtsOffersParameterPageSize, updated_after: GetAtsOffersParameterUpdatedAfter, include_deleted: GetAtsOffersParameterIncludeDeleted, ignore_unsupported_filters: GetAtsOffersParameterIgnoreUnsupportedFilters, ids: GetAtsOffersParameterIds, remote_ids: GetAtsOffersParameterRemoteIds }>>(), header: typia.createIs<{ "X-Integration-Id": string }>() },
  responses: { 200: isGetAtsOffersPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type get_GetAtsRejectionReasons = typeof get_GetAtsRejectionReasons;
export const get_GetAtsRejectionReasons = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/ats/rejection-reasons">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: typia.createIs<Partial<{ cursor: GetAtsRejectionReasonsParameterCursor, page_size: GetAtsRejectionReasonsParameterPageSize, updated_after: GetAtsRejectionReasonsParameterUpdatedAfter, include_deleted: GetAtsRejectionReasonsParameterIncludeDeleted, ignore_unsupported_filters: GetAtsRejectionReasonsParameterIgnoreUnsupportedFilters, ids: GetAtsRejectionReasonsParameterIds, remote_ids: GetAtsRejectionReasonsParameterRemoteIds }>>(), header: typia.createIs<{ "X-Integration-Id": string }>() },
  responses: { 200: isGetAtsRejectionReasonsPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type get_GetAtsInterviews = typeof get_GetAtsInterviews;
export const get_GetAtsInterviews = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/ats/interviews">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: typia.createIs<Partial<{ cursor: GetAtsInterviewsParameterCursor, page_size: GetAtsInterviewsParameterPageSize, updated_after: GetAtsInterviewsParameterUpdatedAfter, include_deleted: GetAtsInterviewsParameterIncludeDeleted, ignore_unsupported_filters: GetAtsInterviewsParameterIgnoreUnsupportedFilters, ids: GetAtsInterviewsParameterIds, remote_ids: GetAtsInterviewsParameterRemoteIds, job_ids: GetAtsInterviewsParameterJobIds }>>(), header: typia.createIs<{ "X-Integration-Id": string }>() },
  responses: { 200: isGetAtsInterviewsPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type get_GetAtsActionsAtsCreateCandidate = typeof get_GetAtsActionsAtsCreateCandidate;
export const get_GetAtsActionsAtsCreateCandidate = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/ats/actions/ats_create_candidate">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { header: typia.createIs<{ "X-Integration-Id": string }>() },
  responses: { 200: isGetAtsActionsAtsCreateCandidatePositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type get_GetAtsActionsAtsCreateApplication = typeof get_GetAtsActionsAtsCreateApplication;
export const get_GetAtsActionsAtsCreateApplication = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/ats/actions/ats_create_application">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { header: typia.createIs<{ "X-Integration-Id": string }>() },
  responses: { 200: isGetAtsActionsAtsCreateApplicationPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type get_GetAtsActionsAtsAddApplicationAttachment = typeof get_GetAtsActionsAtsAddApplicationAttachment;
export const get_GetAtsActionsAtsAddApplicationAttachment = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/ats/actions/ats_add_application_attachment">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { header: typia.createIs<{ "X-Integration-Id": string }>() },
  responses: { 200: isGetAtsActionsAtsAddApplicationAttachmentPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type get_GetAtsActionsAtsAddCandidateAttachment = typeof get_GetAtsActionsAtsAddCandidateAttachment;
export const get_GetAtsActionsAtsAddCandidateAttachment = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/ats/actions/ats_add_candidate_attachment">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { header: typia.createIs<{ "X-Integration-Id": string }>() },
  responses: { 200: isGetAtsActionsAtsAddCandidateAttachmentPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type post_PostAtsImportTrackedApplication = typeof post_PostAtsImportTrackedApplication;
export const post_PostAtsImportTrackedApplication = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/ats/import-tracked-application">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { header: typia.createIs<{ "X-Integration-Id": string }>(), body: isPostAtsImportTrackedApplicationRequestBody },
  responses: { 200: isPostAtsImportTrackedApplicationPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type post_PostAtsCustomAvionteSyncedJobs = typeof post_PostAtsCustomAvionteSyncedJobs;
export const post_PostAtsCustomAvionteSyncedJobs = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/ats/custom/avionte/synced-jobs">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { header: typia.createIs<{ "X-Integration-Id": string }>(), body: isPostAtsCustomAvionteSyncedJobsRequestBody },
  responses: { 200: isPostAtsCustomAvionteSyncedJobsPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type delete_DeleteAtsCustomAvionteSyncedJobsJobRemoteId = typeof delete_DeleteAtsCustomAvionteSyncedJobsJobRemoteId;
export const delete_DeleteAtsCustomAvionteSyncedJobsJobRemoteId = {
  method: typia.createIs<"DELETE">(),
  path: typia.createIs<"/ats/custom/avionte/synced-jobs/{job_remote_id}">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: typia.createIs<{ job_remote_id: DeleteAtsCustomAvionteSyncedJobsJobRemoteIdParameterJobRemoteId }>(), header: typia.createIs<{ "X-Integration-Id": string }>(), body: isDeleteAtsCustomAvionteSyncedJobsJobRemoteIdRequestBody },
  responses: { 200: isDeleteAtsCustomAvionteSyncedJobsJobRemoteIdPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type get_GetAssessmentPackages = typeof get_GetAssessmentPackages;
export const get_GetAssessmentPackages = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/assessment/packages">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { header: typia.createIs<{ "X-Integration-Id": string }>() },
  responses: { 200: isGetAssessmentPackagesPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type put_PutAssessmentPackages = typeof put_PutAssessmentPackages;
export const put_PutAssessmentPackages = {
  method: typia.createIs<"PUT">(),
  path: typia.createIs<"/assessment/packages">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { header: typia.createIs<{ "X-Integration-Id": string }>(), body: isPutAssessmentPackagesRequestBody },
  responses: { 200: isPutAssessmentPackagesPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type get_GetAssessmentOrders = typeof get_GetAssessmentOrders;
export const get_GetAssessmentOrders = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/assessment/orders">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: typia.createIs<Partial<{ cursor: GetAssessmentOrdersParameterCursor, page_size: GetAssessmentOrdersParameterPageSize, ids: GetAssessmentOrdersParameterIds, statuses: GetAssessmentOrdersParameterStatuses, created_after: GetAssessmentOrdersParameterCreatedAfter }>>(), header: typia.createIs<{ "X-Integration-Id": string }>() },
  responses: { 200: isGetAssessmentOrdersPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type get_GetAssessmentOrdersOpen = typeof get_GetAssessmentOrdersOpen;
export const get_GetAssessmentOrdersOpen = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/assessment/orders/open">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: typia.createIs<Partial<{ cursor: GetAssessmentOrdersOpenParameterCursor, page_size: GetAssessmentOrdersOpenParameterPageSize }>>(), header: typia.createIs<{ "X-Integration-Id": string }>() },
  responses: { 200: isGetAssessmentOrdersOpenPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type put_PutAssessmentOrdersAssessmentOrderIdResult = typeof put_PutAssessmentOrdersAssessmentOrderIdResult;
export const put_PutAssessmentOrdersAssessmentOrderIdResult = {
  method: typia.createIs<"PUT">(),
  path: typia.createIs<"/assessment/orders/{assessment_order_id}/result">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: typia.createIs<{ assessment_order_id: PutAssessmentOrdersAssessmentOrderIdResultParameterAssessmentOrderId }>(), header: typia.createIs<{ "X-Integration-Id": string }>(), body: isPutAssessmentOrdersAssessmentOrderIdResultRequestBody },
  responses: { 200: isPutAssessmentOrdersAssessmentOrderIdResultPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "INTEGRATION.PERMISSION_MISSING" | "INTEGRATION.AUTHENTICATION_INVALID" | "INTEGRATION.QA_FAILED" | "INTEGRATION.SETUP_SYNC_PENDING" | "INTEGRATION.SETUP_INCOMPLETE" | "INTEGRATION.INACTIVE" | "INTEGRATION.MODEL_NOT_AVAILABLE" | "INTEGRATION.MODEL_DISABLED" | "INTEGRATION.ACTION_NOT_AVAILABLE" | "INTEGRATION.ACTION_DISABLED" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "ATS.JOB_CLOSED" | "ATS.APPLICATION_ALREADY_EXISTS") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type get_GetLmsUsers = typeof get_GetLmsUsers;
export const get_GetLmsUsers = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/lms/users">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: typia.createIs<Partial<{ cursor: GetLmsUsersParameterCursor, page_size: GetLmsUsersParameterPageSize, updated_after: GetLmsUsersParameterUpdatedAfter, include_deleted: GetLmsUsersParameterIncludeDeleted, ignore_unsupported_filters: GetLmsUsersParameterIgnoreUnsupportedFilters, ids: GetLmsUsersParameterIds, remote_ids: GetLmsUsersParameterRemoteIds, work_emails: GetLmsUsersParameterWorkEmails }>>(), header: typia.createIs<{ "X-Integration-Id": string }>() },
  responses: { 200: isGetLmsUsersPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type get_GetLmsCourseProgressions = typeof get_GetLmsCourseProgressions;
export const get_GetLmsCourseProgressions = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/lms/course-progressions">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: typia.createIs<Partial<{ cursor: GetLmsCourseProgressionsParameterCursor, page_size: GetLmsCourseProgressionsParameterPageSize, updated_after: GetLmsCourseProgressionsParameterUpdatedAfter, include_deleted: GetLmsCourseProgressionsParameterIncludeDeleted, ignore_unsupported_filters: GetLmsCourseProgressionsParameterIgnoreUnsupportedFilters, ids: GetLmsCourseProgressionsParameterIds, remote_ids: GetLmsCourseProgressionsParameterRemoteIds, user_ids: GetLmsCourseProgressionsParameterUserIds, course_ids: GetLmsCourseProgressionsParameterCourseIds }>>(), header: typia.createIs<{ "X-Integration-Id": string }>() },
  responses: { 200: isGetLmsCourseProgressionsPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type post_PostLmsCourseProgressions = typeof post_PostLmsCourseProgressions;
export const post_PostLmsCourseProgressions = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/lms/course-progressions">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { header: typia.createIs<{ "X-Integration-Id": string }>(), body: isPostLmsCourseProgressionsRequestBody },
  responses: { 200: isPostLmsCourseProgressionsPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type post_PostLmsCourseProgressionsCourseProgressionIdComplete = typeof post_PostLmsCourseProgressionsCourseProgressionIdComplete;
export const post_PostLmsCourseProgressionsCourseProgressionIdComplete = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/lms/course-progressions/{course_progression_id}/complete">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: typia.createIs<{ course_progression_id: PostLmsCourseProgressionsCourseProgressionIdCompleteParameterCourseProgressionId }>(), header: typia.createIs<{ "X-Integration-Id": string }>(), body: isPostLmsCourseProgressionsCourseProgressionIdCompleteRequestBody },
  responses: { 200: isPostLmsCourseProgressionsCourseProgressionIdCompletePositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type get_GetLmsCourses = typeof get_GetLmsCourses;
export const get_GetLmsCourses = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/lms/courses">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: typia.createIs<Partial<{ cursor: GetLmsCoursesParameterCursor, page_size: GetLmsCoursesParameterPageSize, updated_after: GetLmsCoursesParameterUpdatedAfter, include_deleted: GetLmsCoursesParameterIncludeDeleted, ignore_unsupported_filters: GetLmsCoursesParameterIgnoreUnsupportedFilters, ids: GetLmsCoursesParameterIds, remote_ids: GetLmsCoursesParameterRemoteIds }>>(), header: typia.createIs<{ "X-Integration-Id": string }>() },
  responses: { 200: isGetLmsCoursesPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type post_PostLmsCoursesBulk = typeof post_PostLmsCoursesBulk;
export const post_PostLmsCoursesBulk = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/lms/courses/bulk">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { header: typia.createIs<{ "X-Integration-Id": string }>(), body: isPostLmsCoursesBulkRequestBody },
  responses: { 200: isPostLmsCoursesBulkPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type get_GetLmsCoursesBulkTaskId = typeof get_GetLmsCoursesBulkTaskId;
export const get_GetLmsCoursesBulkTaskId = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/lms/courses/bulk/{task_id}">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: typia.createIs<{ task_id: GetLmsCoursesBulkTaskIdParameterTaskId }>(), header: typia.createIs<{ "X-Integration-Id": string }>() },
  responses: { 200: isGetLmsCoursesBulkTaskIdPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type post_PostLmsCoursesCourseIdDeactivate = typeof post_PostLmsCoursesCourseIdDeactivate;
export const post_PostLmsCoursesCourseIdDeactivate = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/lms/courses/{course_id}/deactivate">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: typia.createIs<{ course_id: PostLmsCoursesCourseIdDeactivateParameterCourseId }>(), header: typia.createIs<{ "X-Integration-Id": string }>(), body: isPostLmsCoursesCourseIdDeactivateRequestBody },
  responses: { 200: isPostLmsCoursesCourseIdDeactivatePositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type get_GetLmsSkills = typeof get_GetLmsSkills;
export const get_GetLmsSkills = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/lms/skills">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: typia.createIs<Partial<{ cursor: GetLmsSkillsParameterCursor, page_size: GetLmsSkillsParameterPageSize, updated_after: GetLmsSkillsParameterUpdatedAfter, include_deleted: GetLmsSkillsParameterIncludeDeleted, ignore_unsupported_filters: GetLmsSkillsParameterIgnoreUnsupportedFilters, ids: GetLmsSkillsParameterIds, remote_ids: GetLmsSkillsParameterRemoteIds }>>(), header: typia.createIs<{ "X-Integration-Id": string }>() },
  responses: { 200: isGetLmsSkillsPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type post_PostAiApplyCareerSites = typeof post_PostAiApplyCareerSites;
export const post_PostAiApplyCareerSites = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/ai-apply/career-sites">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { body: isPostAiApplyCareerSitesRequestBody },
  responses: { 200: isPostAiApplyCareerSitesPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING" | "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type get_GetAiApplyCareerSites = typeof get_GetAiApplyCareerSites;
export const get_GetAiApplyCareerSites = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/ai-apply/career-sites">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: typia.createIs<Partial<{ cursor: GetAiApplyCareerSitesParameterCursor, page_size: GetAiApplyCareerSitesParameterPageSize, ids: GetAiApplyCareerSitesParameterIds }>>() },
  responses: { 200: isGetAiApplyCareerSitesPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING" | "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type get_GetAiApplyPostings = typeof get_GetAiApplyPostings;
export const get_GetAiApplyPostings = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/ai-apply/postings">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: typia.createIs<Partial<{ cursor: GetAiApplyPostingsParameterCursor, page_size: GetAiApplyPostingsParameterPageSize, ids: GetAiApplyPostingsParameterIds, career_site_ids: GetAiApplyPostingsParameterCareerSiteIds, job_codes: GetAiApplyPostingsParameterJobCodes }>>() },
  responses: { 200: isGetAiApplyPostingsPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING" | "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type post_PostAiApplyPostings = typeof post_PostAiApplyPostings;
export const post_PostAiApplyPostings = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/ai-apply/postings">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { body: isPostAiApplyPostingsRequestBody },
  responses: { 200: isPostAiApplyPostingsPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING" | "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type post_PostAiApplyPostingsPostingIdInquire = typeof post_PostAiApplyPostingsPostingIdInquire;
export const post_PostAiApplyPostingsPostingIdInquire = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/ai-apply/postings/{posting_id}/inquire">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: typia.createIs<{ posting_id: PostAiApplyPostingsPostingIdInquireParameterPostingId }>(), body: isPostAiApplyPostingsPostingIdInquireRequestBody },
  responses: { 200: isPostAiApplyPostingsPostingIdInquirePositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING" | "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type post_PostAiApplyApply = typeof post_PostAiApplyApply;
export const post_PostAiApplyApply = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/ai-apply/apply">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { body: isPostAiApplyApplyRequestBody },
  responses: { 200: isPostAiApplyApplyPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING" | "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type get_GetAiApplyApplications = typeof get_GetAiApplyApplications;
export const get_GetAiApplyApplications = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/ai-apply/applications">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: typia.createIs<Partial<{ cursor: GetAiApplyApplicationsParameterCursor, page_size: GetAiApplyApplicationsParameterPageSize, ids: GetAiApplyApplicationsParameterIds, job_posting_ids: GetAiApplyApplicationsParameterJobPostingIds }>>() },
  responses: { 200: isGetAiApplyApplicationsPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING" | "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type get_GetAiApplyUnifiedApiJobs = typeof get_GetAiApplyUnifiedApiJobs;
export const get_GetAiApplyUnifiedApiJobs = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/ai-apply/unified-api/jobs">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: typia.createIs<Partial<{ cursor: GetAiApplyUnifiedApiJobsParameterCursor, page_size: GetAiApplyUnifiedApiJobsParameterPageSize, ids: GetAiApplyUnifiedApiJobsParameterIds, remote_ids: GetAiApplyUnifiedApiJobsParameterRemoteIds, job_codes: GetAiApplyUnifiedApiJobsParameterJobCodes, career_site_ids: GetAiApplyUnifiedApiJobsParameterCareerSiteIds }>>() },
  responses: { 200: isGetAiApplyUnifiedApiJobsPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING" | "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type post_PostAiApplyUnifiedApiJobsJobIdApplications = typeof post_PostAiApplyUnifiedApiJobsJobIdApplications;
export const post_PostAiApplyUnifiedApiJobsJobIdApplications = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/ai-apply/unified-api/jobs/{job_id}/applications">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: typia.createIs<{ job_id: PostAiApplyUnifiedApiJobsJobIdApplicationsParameterJobId }>(), body: isPostAiApplyUnifiedApiJobsJobIdApplicationsRequestBody },
  responses: { 200: isPostAiApplyUnifiedApiJobsJobIdApplicationsPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING" | "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type get_GetAiApplyJobFeeds = typeof get_GetAiApplyJobFeeds;
export const get_GetAiApplyJobFeeds = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/ai-apply/job-feeds">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: typia.createIs<Partial<{ cursor: GetAiApplyJobFeedsParameterCursor, page_size: GetAiApplyJobFeedsParameterPageSize, ids: GetAiApplyJobFeedsParameterIds }>>() },
  responses: { 200: isGetAiApplyJobFeedsPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING" | "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type post_PostAiApplyJobFeeds = typeof post_PostAiApplyJobFeeds;
export const post_PostAiApplyJobFeeds = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/ai-apply/job-feeds">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { body: isPostAiApplyJobFeedsRequestBody },
  responses: { 200: isPostAiApplyJobFeedsPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING" | "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type post_PostConnectCreateLink = typeof post_PostConnectCreateLink;
export const post_PostConnectCreateLink = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/connect/create-link">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { body: isPostConnectCreateLinkRequestBody },
  responses: { 200: isPostConnectCreateLinkPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type get_GetConnectIntegrationByTokenToken = typeof get_GetConnectIntegrationByTokenToken;
export const get_GetConnectIntegrationByTokenToken = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/connect/integration-by-token/{token}">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: typia.createIs<{ token: GetConnectIntegrationByTokenTokenParameterToken }>() },
  responses: { 200: isGetConnectIntegrationByTokenTokenPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type post_PostConnectActivateIntegration = typeof post_PostConnectActivateIntegration;
export const post_PostConnectActivateIntegration = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/connect/activate-integration">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { body: isPostConnectActivateIntegrationRequestBody },
  responses: { 200: isPostConnectActivateIntegrationPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type get_GetCustomDatevSystemInformation = typeof get_GetCustomDatevSystemInformation;
export const get_GetCustomDatevSystemInformation = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/custom/datev/system-information">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { header: typia.createIs<{ "X-Integration-Id": string }>() },
  responses: { 200: isGetCustomDatevSystemInformationPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type post_PostCustomDatevPassthrough = typeof post_PostCustomDatevPassthrough;
export const post_PostCustomDatevPassthrough = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/custom/datev/passthrough">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { header: typia.createIs<{ "X-Integration-Id": string }>(), body: isPostCustomDatevPassthroughRequestBody },
  responses: { 200: isPostCustomDatevPassthroughPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type get_GetCustomDatevCheckEauPermission = typeof get_GetCustomDatevCheckEauPermission;
export const get_GetCustomDatevCheckEauPermission = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/custom/datev/check-eau-permission">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { header: typia.createIs<{ "X-Integration-Id": string }>() },
  responses: { 200: isGetCustomDatevCheckEauPermissionPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type get_GetCustomDatevEauRequestsEauId = typeof get_GetCustomDatevEauRequestsEauId;
export const get_GetCustomDatevEauRequestsEauId = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/custom/datev/eau-requests/{eau_id}">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: typia.createIs<{ eau_id: GetCustomDatevEauRequestsEauIdParameterEauId }>(), header: typia.createIs<{ "X-Integration-Id": string }>() },
  responses: { 200: isGetCustomDatevEauRequestsEauIdPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type get_GetCustomDatevCheckDocumentPermission = typeof get_GetCustomDatevCheckDocumentPermission;
export const get_GetCustomDatevCheckDocumentPermission = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/custom/datev/check-document-permission">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { header: typia.createIs<{ "X-Integration-Id": string }>() },
  responses: { 200: isGetCustomDatevCheckDocumentPermissionPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type get_GetCustomDatevAvailableDocuments = typeof get_GetCustomDatevAvailableDocuments;
export const get_GetCustomDatevAvailableDocuments = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/custom/datev/available-documents">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { query: typia.createIs<{ period: GetCustomDatevAvailableDocumentsParameterPeriod }>(), header: typia.createIs<{ "X-Integration-Id": string }>() },
  responses: { 200: isGetCustomDatevAvailableDocumentsPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type post_PostCustomDatevDownloadDocument = typeof post_PostCustomDatevDownloadDocument;
export const post_PostCustomDatevDownloadDocument = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/custom/datev/download-document">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { header: typia.createIs<{ "X-Integration-Id": string }>(), body: isPostCustomDatevDownloadDocumentRequestBody },
  responses: { 200: isPostCustomDatevDownloadDocumentPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type post_PostCustomDatevEmployeesEmployeeIdDownloadDocument = typeof post_PostCustomDatevEmployeesEmployeeIdDownloadDocument;
export const post_PostCustomDatevEmployeesEmployeeIdDownloadDocument = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/custom/datev/employees/{employee_id}/download-document">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: typia.createIs<{ employee_id: PostCustomDatevEmployeesEmployeeIdDownloadDocumentParameterEmployeeId }>(), header: typia.createIs<{ "X-Integration-Id": string }>(), body: isPostCustomDatevEmployeesEmployeeIdDownloadDocumentRequestBody },
  responses: { 200: isPostCustomDatevEmployeesEmployeeIdDownloadDocumentPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type post_PostCustomDatevEmployeesEmployeeIdEauRequests = typeof post_PostCustomDatevEmployeesEmployeeIdEauRequests;
export const post_PostCustomDatevEmployeesEmployeeIdEauRequests = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/custom/datev/employees/{employee_id}/eau-requests">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: typia.createIs<{ employee_id: PostCustomDatevEmployeesEmployeeIdEauRequestsParameterEmployeeId }>(), header: typia.createIs<{ "X-Integration-Id": string }>(), body: isPostCustomDatevEmployeesEmployeeIdEauRequestsRequestBody },
  responses: { 200: isPostCustomDatevEmployeesEmployeeIdEauRequestsPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type put_PutCustomDatevEmployeesEmployeeIdPreparePayroll = typeof put_PutCustomDatevEmployeesEmployeeIdPreparePayroll;
export const put_PutCustomDatevEmployeesEmployeeIdPreparePayroll = {
  method: typia.createIs<"PUT">(),
  path: typia.createIs<"/custom/datev/employees/{employee_id}/prepare-payroll">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: typia.createIs<{ employee_id: PutCustomDatevEmployeesEmployeeIdPreparePayrollParameterEmployeeId }>(), header: typia.createIs<{ "X-Integration-Id": string }>(), body: isPutCustomDatevEmployeesEmployeeIdPreparePayrollRequestBody },
  responses: { 200: isPutCustomDatevEmployeesEmployeeIdPreparePayrollPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type put_PutCustomDatevEmployeesEmployeeIdCompensations = typeof put_PutCustomDatevEmployeesEmployeeIdCompensations;
export const put_PutCustomDatevEmployeesEmployeeIdCompensations = {
  method: typia.createIs<"PUT">(),
  path: typia.createIs<"/custom/datev/employees/{employee_id}/compensations">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: typia.createIs<{ employee_id: PutCustomDatevEmployeesEmployeeIdCompensationsParameterEmployeeId }>(), header: typia.createIs<{ "X-Integration-Id": string }>(), body: isPutCustomDatevEmployeesEmployeeIdCompensationsRequestBody },
  responses: { 200: isPutCustomDatevEmployeesEmployeeIdCompensationsPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type get_GetCustomDatevCheckWritePermission = typeof get_GetCustomDatevCheckWritePermission;
export const get_GetCustomDatevCheckWritePermission = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/custom/datev/check-write-permission">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { header: typia.createIs<{ "X-Integration-Id": string }>() },
  responses: { 200: isGetCustomDatevCheckWritePermissionPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type get_GetCustomDatevDataPushes = typeof get_GetCustomDatevDataPushes;
export const get_GetCustomDatevDataPushes = {
  method: typia.createIs<"GET">(),
  path: typia.createIs<"/custom/datev/data-pushes">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { header: typia.createIs<{ "X-Integration-Id": string }>() },
  responses: { 200: isGetCustomDatevDataPushesPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type post_PostCustomDatevPushDataGeneral = typeof post_PostCustomDatevPushDataGeneral;
export const post_PostCustomDatevPushDataGeneral = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/custom/datev/push-data/general">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { header: typia.createIs<{ "X-Integration-Id": string }>(), body: isPostCustomDatevPushDataGeneralRequestBody },
  responses: { 200: isPostCustomDatevPushDataGeneralPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type post_PostCustomDatevPushDataPayroll = typeof post_PostCustomDatevPushDataPayroll;
export const post_PostCustomDatevPushDataPayroll = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/custom/datev/push-data/payroll">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { header: typia.createIs<{ "X-Integration-Id": string }>(), body: isPostCustomDatevPushDataPayrollRequestBody },
  responses: { 200: isPostCustomDatevPushDataPayrollPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type post_PostCustomSilaeEmployeesEmployeeIdPayrollSupplements = typeof post_PostCustomSilaeEmployeesEmployeeIdPayrollSupplements;
export const post_PostCustomSilaeEmployeesEmployeeIdPayrollSupplements = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/custom/silae/employees/{employee_id}/payroll-supplements">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: typia.createIs<{ employee_id: PostCustomSilaeEmployeesEmployeeIdPayrollSupplementsParameterEmployeeId }>(), header: typia.createIs<{ "X-Integration-Id": string }>(), body: isPostCustomSilaeEmployeesEmployeeIdPayrollSupplementsRequestBody },
  responses: { 200: isPostCustomSilaeEmployeesEmployeeIdPayrollSupplementsPositiveResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
};

export type post_PostAiApplyJobFeedsBulkImport = typeof post_PostAiApplyJobFeedsBulkImport;
export const post_PostAiApplyJobFeedsBulkImport = {
  method: typia.createIs<"POST">(),
  path: typia.createIs<"/ai-apply/job-feeds/{job_feed_id}/bulk-import">(),
  requestFormat: typia.createIs<"json">(),
  responseFormat: typia.createIs<"json">(),
  parameters: { path: typia.createIs<{ job_feed_id: string }>(), body: typia.createIs<string>() },
  responses: { 200: isBulkImportResponse, default: typia.createIs<{ status: "error", error: { code: (("PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.CONCURRENCY_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID" | "PLATFORM.TASK_TIMED_OUT" | "REMOTE.SERVICE_UNAVAILABLE" | "REMOTE.RATE_LIMIT_EXCEEDED" | "REMOTE.INPUT_INVALID" | "REMOTE.UNKNOWN_HTTP_ERROR" | "AI_APPLY.JOB_FEED_IMPORT_ALREADY_RUNNING" | "AI_APPLY.JOB_FEED_IMPORT_TIMED_OUT") | null), title: (string | null), message: string, log_url: (string | null) } }>() },
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

type InferSchemaValue<T> = T extends (input: unknown) => input is infer U ? U : T extends object ? { [K in keyof T as undefined extends InferSchemaValue<T[K]> ? never : K]: InferSchemaValue<T[K]> } & { [K in keyof T as undefined extends InferSchemaValue<T[K]> ? K : never]?: Exclude<InferSchemaValue<T[K]>, undefined> } : T;
type InferSchemaInput<T> = InferSchemaValue<T>;

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


// <ValidateHelpers>
const defaultParse = (schema: unknown, value: unknown): unknown => {
  return (() => { const isValid = (schema as (input: unknown) => boolean)(value); if (!isValid) throw new Error("typia validation failed"); return value; })();
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

  