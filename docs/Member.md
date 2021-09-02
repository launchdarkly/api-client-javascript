# LaunchDarklyApi.Member

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**{String: Link}**](Link.md) |  | 
**id** | **String** | The member&#39;s ID | 
**firstName** | **String** | The member&#39;s first name | [optional] 
**lastName** | **String** | The member&#39;s last name | [optional] 
**role** | **String** | The member&#39;s built-in role. If the member has no custom roles, this role will be in effect. | 
**email** | **String** | The member&#39;s email address | 
**pendingInvite** | **Boolean** | Whether or not the member has a pending invitation | 
**verified** | **Boolean** | Whether or not the member&#39;s email address has been verified | 
**pendingEmail** | **String** |  | [optional] 
**customRoles** | **[String]** | The set of custom roles (as keys) assigned to the member | 
**mfa** | **String** | Whether or not multi-factor authentication is enabled for this member | 
**excludedDashboards** | **[String]** | Default dashboards that the member has chosen to ignore | 
**lastSeen** | **Number** |  | 
**lastSeenMetadata** | [**LastSeenMetadata**](LastSeenMetadata.md) |  | [optional] 
**integrationMetadata** | [**IntegrationMetadata**](IntegrationMetadata.md) |  | [optional] 
**teams** | [**[MemberTeamSummaryRep]**](MemberTeamSummaryRep.md) |  | [optional] 
**permissionGrants** | [**[MemberPermissionGrantSummaryRep]**](MemberPermissionGrantSummaryRep.md) |  | [optional] 


