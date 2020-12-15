# LaunchDarklyApi.Environment

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**Links**](Links.md) |  | [optional] 
**id** | [**Id**](Id.md) |  | [optional] 
**key** | **String** | The key for the environment. | [optional] 
**name** | **String** | The name of the environment. | [optional] 
**apiKey** | **String** | The SDK key for backend LaunchDarkly SDKs. | [optional] 
**mobileKey** | **String** | The SDK key for mobile LaunchDarkly SDKs. | [optional] 
**color** | **String** | The swatch color for the environment. | [optional] 
**defaultTtl** | **Number** | The default TTL. | [optional] 
**secureMode** | **Boolean** | Determines if this environment is in safe mode. | [optional] 
**defaultTrackEvents** | **Boolean** | Set to true to send detailed event information for new flags. | [optional] 
**tags** | **[String]** | An array of tags for this environment. | [optional] 
**requireComments** | **Boolean** | Determines if this environment requires comments for flag and segment changes. | [optional] 
**confirmChanges** | **Boolean** | Determines if this environment requires confirmation for flag and segment changes. | [optional] 
**approvalSettings** | [**EnvironmentApprovalSettings**](EnvironmentApprovalSettings.md) |  | [optional] 


