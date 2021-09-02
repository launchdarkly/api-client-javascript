# LaunchDarklyApi.FlagConfigApprovalRequestResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**version** | **Number** |  | 
**creationDate** | **Number** |  | 
**serviceKind** | **String** |  | 
**requestorId** | **String** |  | [optional] 
**description** | **String** | A human-friendly name for the approval request | [optional] 
**reviewStatus** | **String** |  | 
**allReviews** | [**[ReviewResponse]**](ReviewResponse.md) |  | 
**notifyMemberIds** | **[String]** | An array of member IDs. These members are notified to review the approval request. | 
**appliedDate** | **Number** |  | [optional] 
**appliedByMemberId** | **String** |  | [optional] 
**status** | **String** |  | 
**instructions** | **[Object]** |  | 
**conflicts** | [**[Conflict]**](Conflict.md) |  | 
**links** | [**{String: Link}**](Link.md) |  | 
**executionDate** | **Number** |  | [optional] 
**operatingOnId** | **String** | ID of scheduled change to edit or delete | [optional] 
**integrationMetadata** | [**IntegrationMetadata**](IntegrationMetadata.md) |  | [optional] 
**source** | [**CopiedFromEnv**](CopiedFromEnv.md) |  | [optional] 


