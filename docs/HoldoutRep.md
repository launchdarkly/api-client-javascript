# LaunchDarklyApi.HoldoutRep

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**status** | **String** |  | 
**description** | **String** |  | [optional] 
**holdoutAmount** | **String** | The percentage of traffic allocated to this holdout. | 
**createdAt** | **Number** |  | 
**updatedAt** | **Number** |  | 
**baseExperiment** | [**Experiment**](Experiment.md) |  | 
**experiments** | [**[RelatedExperimentRep]**](RelatedExperimentRep.md) |  | [optional] 



## Enum: StatusEnum


* `created` (value: `"created"`)

* `enabled` (value: `"enabled"`)

* `running` (value: `"running"`)

* `ended` (value: `"ended"`)




