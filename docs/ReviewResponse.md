# LaunchDarklyApi.ReviewResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The approval request id | 
**kind** | **String** | The type of review action to take. Either \&quot;approve\&quot;, \&quot;decline\&quot; or \&quot;comment\&quot; | 
**creationDate** | **Number** |  | [optional] 
**comment** | **String** | A comment describing the approval response | [optional] 
**memberId** | **String** | ID of account member that reviewed request | [optional] 



## Enum: KindEnum


* `approve` (value: `"approve"`)

* `decline` (value: `"decline"`)

* `comment` (value: `"comment"`)




