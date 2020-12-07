# LaunchDarklyApi.FeatureFlagConfig

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**on** | **Boolean** |  | [optional] 
**archived** | **Boolean** |  | [optional] 
**salt** | **String** |  | [optional] 
**sel** | **String** |  | [optional] 
**lastModified** | **Number** |  | [optional] 
**version** | **Number** |  | [optional] 
**targets** | [**[Target]**](Target.md) |  | [optional] 
**rules** | [**[Rule]**](Rule.md) |  | [optional] 
**fallthrough** | [**Fallthrough**](Fallthrough.md) |  | [optional] 
**offVariation** | **Number** |  | [optional] 
**prerequisites** | [**[Prerequisite]**](Prerequisite.md) |  | [optional] 
**trackEvents** | **Boolean** | Set to true to send detailed event information for this flag. | [optional] 
**trackEventsFallthrough** | **Boolean** | Set to true to send detailed event information when targeting is enabled but no individual targeting rule is matched. | [optional] 
**site** | [**Site**](Site.md) |  | [optional] 
**environmentName** | **String** |  | [optional] 


