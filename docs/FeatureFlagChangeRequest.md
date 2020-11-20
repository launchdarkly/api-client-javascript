# LaunchDarklyApi.FeatureFlagChangeRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | [**Id**](Id.md) |  | [optional] 
**version** | **Number** |  | [optional] 
**creationDate** | **Number** | A unix epoch time in milliseconds specifying the date the change request was requested | [optional] 
**requestorId** | **String** | The id of the member that requested the change | [optional] 
**reviewStatus** | [**FeatureFlagChangeRequestReviewStatus**](FeatureFlagChangeRequestReviewStatus.md) |  | [optional] 
**status** | **String** | | Name     | Description | | --------:| ----------- | | pending  | the feature flag change request has not been applied yet | | completed| the feature flag change request has been applied successfully | | failed   | the feature flag change request has been applied but the changes were not applied successfully |  | [optional] 
**appliedByMemberID** | **String** | The id of the member that applied the change request | [optional] 
**appliedDate** | **Number** | A unix epoch time in milliseconds specifying the date the change request was applied | [optional] 
**currentReviewsByMemberId** | [**FeatureFlagChangeRequestReview**](FeatureFlagChangeRequestReview.md) |  | [optional] 
**allReviews** | [**[FeatureFlagChangeRequestReview]**](FeatureFlagChangeRequestReview.md) |  | [optional] 
**notifyMemberIds** | **[String]** |  | [optional] 
**instructions** | [**SemanticPatchInstruction**](SemanticPatchInstruction.md) |  | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `pending` (value: `"pending"`)

* `completed` (value: `"completed"`)

* `failed` (value: `"failed"`)




