# LaunchDarklyApi.HoldoutDetailRep

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**status** | **String** |  | 
**description** | **String** |  | [optional] 
**holdoutAmount** | **String** | The percentage of traffic allocated to this holdout. | 
**isDirty** | **Boolean** | Indicates if the holdout experiment is running and if any related experiments are running. | [optional] 
**createdAt** | **Number** |  | 
**updatedAt** | **Number** |  | 
**baseExperiment** | [**Experiment**](Experiment.md) |  | 
**relatedExperiments** | [**[Experiment]**](Experiment.md) |  | [optional] 



## Enum: StatusEnum


* `created` (value: `"created"`)

* `enabled` (value: `"enabled"`)

* `running` (value: `"running"`)

* `ended` (value: `"ended"`)




