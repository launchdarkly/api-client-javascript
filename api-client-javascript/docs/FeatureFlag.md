# LaunchDarklyApi.FeatureFlag

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **String** |  | [optional] 
**name** | **String** | Name of the feature flag. | [optional] 
**description** | **String** | Description of the feature flag. | [optional] 
**kind** | **String** | Whether the feature flag is a boolean flag or multivariate. | [optional] 
**creationDate** | **Number** | A unix epoch time in milliseconds specifying the creation time of this flag. | [optional] 
**includeInSnippet** | **Boolean** |  | [optional] 
**temporary** | **Boolean** | Whether or not this flag is temporary. | [optional] 
**maintainerId** | **String** | The ID of the member that should maintain this flag. | [optional] 
**tags** | **[String]** | An array of tags for this feature flag. | [optional] 
**variations** | [**[Variation]**](Variation.md) | The variations for this feature flag. | [optional] 
**goalIds** | **[String]** | An array goals from all environments associated with this feature flag | [optional] 
**version** | **Number** |  | [optional] 
**customProperties** | [**{String: CustomProperty}**](CustomProperty.md) | A mapping of keys to CustomProperty entries. | [optional] 
**links** | [**Links**](Links.md) |  | [optional] 
**maintainer** | [**Member**](Member.md) |  | [optional] 
**environments** | [**{String: FeatureFlagConfig}**](FeatureFlagConfig.md) |  | [optional] 
**archivedDate** | **Number** | A unix epoch time in milliseconds specifying the archived time of this flag. | [optional] 
**archived** | **Boolean** | Whether or not this flag is archived. | [optional] 


