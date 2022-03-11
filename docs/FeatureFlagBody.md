# LaunchDarklyApi.FeatureFlagBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | A human-friendly name for the feature flag | 
**key** | **String** | A unique key to reference the flag in your code | 
**description** | **String** | Description of the feature flag | [optional] 
**includeInSnippet** | **Boolean** | Deprecated, use clientSideAvailability. Whether or not this flag should be made available to the client-side JavaScript SDK | [optional] 
**clientSideAvailability** | [**ClientSideAvailabilityPost**](ClientSideAvailabilityPost.md) |  | [optional] 
**variations** | [**[Variation]**](Variation.md) | An array of possible variations for the flag. The variation values must be unique. | [optional] 
**variationJsonSchema** | **Object** |  | [optional] 
**temporary** | **Boolean** | Whether or not the flag is a temporary flag | [optional] 
**tags** | **[String]** | Tags for the feature flag | [optional] 
**customProperties** | [**{String: CustomProperty}**](CustomProperty.md) |  | [optional] 
**defaults** | [**Defaults**](Defaults.md) |  | [optional] 


