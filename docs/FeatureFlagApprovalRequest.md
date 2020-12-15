# LaunchDarklyApi.FeatureFlagApprovalRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | [**Id**](Id.md) |  | [optional] 
**version** | **Number** |  | [optional] 
**creationDate** | **Number** | A unix epoch time in milliseconds specifying the date the approval request was requested | [optional] 
**requestorId** | **String** | The id of the member that requested the change | [optional] 
**reviewStatus** | [**FeatureFlagApprovalRequestReviewStatus**](FeatureFlagApprovalRequestReviewStatus.md) |  | [optional] 
**status** | **String** | | Name     | Description | | --------:| ----------- | | pending  | the feature flag approval request has not been applied yet | | completed| the feature flag approval request has been applied successfully | | failed   | the feature flag approval request has been applied but the changes were not applied successfully |  | [optional] 
**appliedByMemberID** | **String** | The id of the member that applied the approval request | [optional] 
**appliedDate** | **Number** | A unix epoch time in milliseconds specifying the date the approval request was applied | [optional] 
**allReviews** | [**[FeatureFlagApprovalRequestReview]**](FeatureFlagApprovalRequestReview.md) |  | [optional] 
**notifyMemberIds** | **[String]** |  | [optional] 
**instructions** | [**SemanticPatchInstruction**](SemanticPatchInstruction.md) |  | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `pending` (value: `"pending"`)

* `completed` (value: `"completed"`)

* `failed` (value: `"failed"`)




