# LaunchDarklyApi.ExpiringUserTargetPatchResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**[ExpiringUserTargetItem]**](ExpiringUserTargetItem.md) | An array of expiring user targets | 
**links** | [**{String: Link}**](Link.md) | The location and content type of related resources | [optional] 
**totalInstructions** | **Number** | The total count of instructions sent in the PATCH request | [optional] 
**successfulInstructions** | **Number** | The total count of successful instructions sent in the PATCH request | [optional] 
**failedInstructions** | **Number** | The total count of the failed instructions sent in the PATCH request | [optional] 
**errors** | [**[ExpiringTargetError]**](ExpiringTargetError.md) | An array of error messages for the failed instructions | [optional] 


