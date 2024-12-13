# LaunchDarklyApi.Team

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** | A description of the team | [optional] 
**key** | **String** | The team key | [optional] 
**name** | **String** | A human-friendly name for the team | [optional] 
**access** | [**Access**](Access.md) |  | [optional] 
**creationDate** | **Number** |  | [optional] 
**links** | [**{String: Link}**](Link.md) | The location and content type of related resources | [optional] 
**lastModified** | **Number** |  | [optional] 
**version** | **Number** | The team version | [optional] 
**idpSynced** | **Boolean** | Whether the team has been synced with an external identity provider (IdP). Team sync is available to customers on an Enterprise plan. | [optional] 
**roleAttributes** | **{String: Array}** |  | [optional] 
**roles** | [**TeamCustomRoles**](TeamCustomRoles.md) |  | [optional] 
**members** | [**TeamMembers**](TeamMembers.md) |  | [optional] 
**projects** | [**TeamProjects**](TeamProjects.md) |  | [optional] 
**maintainers** | [**TeamMaintainers**](TeamMaintainers.md) |  | [optional] 


