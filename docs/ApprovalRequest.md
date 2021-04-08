# LaunchDarklyApi.ApprovalRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | [**Id**](Id.md) |  | [optional] 
**version** | **Number** |  | [optional] 
**creationDate** | **Number** | A unix epoch time in milliseconds specifying the date the approval request was requested | [optional] 
**requestorId** | **String** | The id of the member that requested the change | [optional] 
**reviewStatus** | [**ApprovalRequestReviewStatus**](ApprovalRequestReviewStatus.md) |  | [optional] 
**status** | **String** | | Name      | Description | | ---------:| ----------- | | pending   | the approval request has not been applied yet | | completed | the approval request has been applied successfully | | scheduled | the approval request for a scheduled change has been applied successfully | | failed    | the approval request has been applied but the changes were not applied successfully |  | [optional] 
**appliedByMemberID** | **String** | The id of the member that applied the approval request | [optional] 
**appliedDate** | **Number** | A unix epoch time in milliseconds specifying the date the approval request was applied | [optional] 
**allReviews** | [**[ApprovalRequestReview]**](ApprovalRequestReview.md) |  | [optional] 
**notifyMemberIds** | **[String]** |  | [optional] 
**instructions** | [**SemanticPatchInstruction**](SemanticPatchInstruction.md) |  | [optional] 
**executionDate** | **Number** | Timestamp for when instructions will be executed | [optional] 
**operatingOnId** | **String** | ID of scheduled change to edit or delete | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `pending` (value: `"pending"`)

* `completed` (value: `"completed"`)

* `scheduled` (value: `"scheduled"`)

* `failed` (value: `"failed"`)




