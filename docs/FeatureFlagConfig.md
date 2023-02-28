# LaunchDarklyApi.FeatureFlagConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**on** | **Boolean** | Whether the flag is on | 
**archived** | **Boolean** | Boolean indicating if the feature flag is archived | 
**salt** | **String** |  | 
**sel** | **String** |  | 
**lastModified** | **Number** |  | 
**version** | **Number** | Version of the feature flag | 
**targets** | [**[Target]**](Target.md) | An array of the individual targets that will receive a specific variation based on their key | [optional] 
**contextTargets** | [**[Target]**](Target.md) |  | [optional] 
**rules** | [**[Rule]**](Rule.md) | An array of the rules for how to serve a variation to specific targets based on their attributes | [optional] 
**fallthrough** | [**VariationOrRolloutRep**](VariationOrRolloutRep.md) |  | [optional] 
**offVariation** | **Number** | The ID of the variation to serve when the flag is off | [optional] 
**prerequisites** | [**[Prerequisite]**](Prerequisite.md) | An array of the prerequisite flags and their variations that are required before this flag takes effect | [optional] 
**site** | [**Link**](Link.md) |  | 
**access** | [**Access**](Access.md) |  | [optional] 
**environmentName** | **String** | The environment name | 
**trackEvents** | **Boolean** | Whether LaunchDarkly tracks events for the feature flag, for all rules | 
**trackEventsFallthrough** | **Boolean** | Whether LaunchDarkly tracks events for the feature flag, for the default rule | 
**debugEventsUntilDate** | **Number** |  | [optional] 
**summary** | [**FlagSummary**](FlagSummary.md) |  | [optional] 


