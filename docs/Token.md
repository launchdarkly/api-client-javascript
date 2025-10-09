# LaunchDarklyApi.Token

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**ownerId** | **String** |  | 
**memberId** | **String** |  | 
**member** | [**MemberSummary**](MemberSummary.md) |  | [optional] 
**name** | **String** | A human-friendly name for the access token | [optional] 
**description** | **String** | A description for the access token | [optional] 
**creationDate** | **Number** |  | 
**lastModified** | **Number** |  | 
**customRoleIds** | **[String]** | A list of custom role IDs to use as access limits for the access token | [optional] 
**inlineRole** | [**[Statement]**](Statement.md) | An array of policy statements, with three attributes: effect, resources, actions. May be used in place of a role. | [optional] 
**role** | **String** | Base role for the token | [optional] 
**token** | **String** | The token value. When creating or resetting, contains the entire token value. Otherwise, contains the last four characters. | [optional] 
**serviceToken** | **Boolean** | Whether this is a service token or a personal token | [optional] 
**links** | [**{String: Link}**](Link.md) | The location and content type of related resources | 
**defaultApiVersion** | **Number** | The default API version for this token | [optional] 
**lastUsed** | **Number** |  | [optional] 


