# LaunchDarklyApi.FlagGlobalAttributesRep

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | A human-friendly name for the feature flag | 
**kind** | **String** | Kind of feature flag | 
**description** | **String** | Description of the feature flag | [optional] 
**key** | **String** | A unique key used to reference the flag in your code | 
**version** | **Number** | Version of the feature flag | 
**creationDate** | **Number** |  | 
**includeInSnippet** | **Boolean** | Deprecated, use clientSideAvailability. Whether or not this flag should be made available to the client-side JavaScript SDK | [optional] 
**clientSideAvailability** | [**ClientSideAvailability**](ClientSideAvailability.md) |  | [optional] 
**variations** | [**[Variation]**](Variation.md) | An array of possible variations for the flag | 
**variationJsonSchema** | **Object** |  | [optional] 
**temporary** | **Boolean** | Whether or not the flag is a temporary flag | 
**tags** | **[String]** | Tags for the feature flag | 
**links** | [**{String: Link}**](Link.md) |  | 
**maintainerId** | **String** | Associated maintainerId for the feature flag | [optional] 
**maintainer** | [**MemberSummaryRep**](MemberSummaryRep.md) |  | [optional] 
**goalIds** | **[String]** |  | [optional] 
**experiments** | [**ExperimentInfoRep**](ExperimentInfoRep.md) |  | 
**customProperties** | [**{String: CustomProperty}**](CustomProperty.md) |  | 
**archived** | **Boolean** | Boolean indicating if the feature flag is archived | 
**archivedDate** | **Number** |  | [optional] 
**defaults** | [**Defaults**](Defaults.md) |  | [optional] 



## Enum: KindEnum


* `boolean` (value: `"boolean"`)

* `multivariate` (value: `"multivariate"`)



