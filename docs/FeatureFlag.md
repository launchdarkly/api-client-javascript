# LaunchDarklyApi.FeatureFlag

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | A human-friendly name for the feature flag | 
**kind** | **String** | Kind of feature flag | 
**description** | **String** | Description of the feature flag | [optional] 
**key** | **String** | A unique key used to reference the flag in your code | 
**version** | **Number** | Version of the feature flag | 
**creationDate** | **Number** |  | 
**includeInSnippet** | **Boolean** | Deprecated, use &lt;code&gt;clientSideAvailability&lt;/code&gt;. Whether this flag should be made available to the client-side JavaScript SDK | [optional] 
**clientSideAvailability** | [**ClientSideAvailability**](ClientSideAvailability.md) |  | [optional] 
**variations** | [**[Variation]**](Variation.md) | An array of possible variations for the flag | 
**temporary** | **Boolean** | Whether the flag is a temporary flag | 
**tags** | **[String]** | Tags for the feature flag | 
**links** | [**{String: Link}**](Link.md) | The location and content type of related resources | 
**maintainerId** | **String** | Associated maintainerId for the feature flag | [optional] 
**maintainer** | [**MemberSummary**](MemberSummary.md) |  | [optional] 
**maintainerTeamKey** | **String** | The key of the associated team that maintains this feature flag | [optional] 
**maintainerTeam** | [**MaintainerTeam**](MaintainerTeam.md) |  | [optional] 
**goalIds** | **[String]** | Deprecated, use &lt;code&gt;experiments&lt;/code&gt; instead | [optional] 
**experiments** | [**ExperimentInfoRep**](ExperimentInfoRep.md) |  | 
**customProperties** | [**{String: CustomProperty}**](CustomProperty.md) |  | 
**archived** | **Boolean** | Boolean indicating if the feature flag is archived | 
**archivedDate** | **Number** |  | [optional] 
**deprecated** | **Boolean** | Boolean indicating if the feature flag is deprecated | [optional] 
**deprecatedDate** | **Number** |  | [optional] 
**defaults** | [**Defaults**](Defaults.md) |  | [optional] 
**purpose** | **String** |  | [optional] 
**migrationSettings** | [**FlagMigrationSettingsRep**](FlagMigrationSettingsRep.md) |  | [optional] 
**environments** | [**{String: FeatureFlagConfig}**](FeatureFlagConfig.md) | Details on the environments for this flag. Only returned if the request is filtered by environment, using the &lt;code&gt;filterEnv&lt;/code&gt; query parameter. | [optional] 



## Enum: KindEnum


* `boolean` (value: `"boolean"`)

* `multivariate` (value: `"multivariate"`)




