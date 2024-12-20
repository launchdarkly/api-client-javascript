# LaunchDarklyApi.ReleasePhase

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The phase ID | 
**name** | **String** | The release phase name | 
**complete** | **Boolean** | Whether this phase is complete | 
**creationDate** | **Number** |  | 
**completionDate** | **Number** |  | [optional] 
**completedBy** | [**CompletedBy**](CompletedBy.md) |  | [optional] 
**audiences** | [**[ReleaseAudience]**](ReleaseAudience.md) | A logical grouping of one or more environments that share attributes for rolling out changes | 
**status** | **String** |  | [optional] 
**started** | **Boolean** | Whether or not this phase has started | [optional] 
**startedDate** | **Number** |  | [optional] 
**configuration** | **Object** |  | [optional] 


