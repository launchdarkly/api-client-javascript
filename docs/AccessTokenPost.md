# LaunchDarklyApi.AccessTokenPost

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | A human-friendly name for the access token | [optional] 
**description** | **String** | A description for the access token | [optional] 
**role** | **String** | Built-in role for the token | [optional] 
**customRoleIds** | **[String]** | A list of custom role IDs to use as access limits for the access token | [optional] 
**inlineRole** | [**[StatementPost]**](StatementPost.md) | A JSON array of statements represented as JSON objects with three attributes: effect, resources, actions. May be used in place of a built-in or custom role. | [optional] 
**serviceToken** | **Boolean** | Whether the token is a service token https://docs.launchdarkly.com/home/account/api#service-tokens | [optional] 
**defaultApiVersion** | **Number** | The default API version for this token | [optional] 



## Enum: RoleEnum


* `reader` (value: `"reader"`)

* `writer` (value: `"writer"`)

* `admin` (value: `"admin"`)




