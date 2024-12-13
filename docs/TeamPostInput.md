# LaunchDarklyApi.TeamPostInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customRoleKeys** | **[String]** | List of custom role keys the team will access | [optional] 
**description** | **String** | A description of the team | [optional] 
**key** | **String** | The team key | 
**memberIDs** | **[String]** | A list of member IDs who belong to the team | [optional] 
**name** | **String** | A human-friendly name for the team | 
**permissionGrants** | [**[PermissionGrantInput]**](PermissionGrantInput.md) | A list of permission grants. Permission grants allow access to a specific action, without having to create or update a custom role. | [optional] 
**roleAttributes** | **{String: Array}** |  | [optional] 


