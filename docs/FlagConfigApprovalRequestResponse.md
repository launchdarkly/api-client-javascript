# LaunchDarklyApi.FlagConfigApprovalRequestResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The ID of this approval request | 
**version** | **Number** | Version of the approval request | 
**creationDate** | **Number** |  | 
**serviceKind** | **String** |  | 
**requestorId** | **String** | The ID of the member who requested the approval | [optional] 
**description** | **String** | A human-friendly name for the approval request | [optional] 
**reviewStatus** | **String** | Current status of the review of this approval request | 
**allReviews** | [**[ReviewResponse]**](ReviewResponse.md) | An array of individual reviews of this approval request | 
**notifyMemberIds** | **[String]** | An array of member IDs. These members are notified to review the approval request. | 
**appliedDate** | **Number** |  | [optional] 
**appliedByMemberId** | **String** | The member ID of the member who applied the approval request | [optional] 
**status** | **String** | Current status of the approval request | 
**instructions** | **[Object]** |  | 
**conflicts** | [**[Conflict]**](Conflict.md) | Details on any conflicting approval requests | 
**links** | **{String: Object}** | The location and content type of related resources | 
**executionDate** | **Number** |  | [optional] 
**operatingOnId** | **String** | ID of scheduled change to edit or delete | [optional] 
**integrationMetadata** | [**IntegrationMetadata**](IntegrationMetadata.md) |  | [optional] 
**source** | [**CopiedFromEnv**](CopiedFromEnv.md) |  | [optional] 
**customWorkflowMetadata** | [**CustomWorkflowMeta**](CustomWorkflowMeta.md) |  | [optional] 



## Enum: ReviewStatusEnum


* `approved` (value: `"approved"`)

* `declined` (value: `"declined"`)

* `pending` (value: `"pending"`)





## Enum: StatusEnum


* `pending` (value: `"pending"`)

* `completed` (value: `"completed"`)

* `failed` (value: `"failed"`)

* `scheduled` (value: `"scheduled"`)




