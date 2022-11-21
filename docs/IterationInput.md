# LaunchDarklyApi.IterationInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hypothesis** | **String** | The expected outcome of this experiment | 
**canReshuffleTraffic** | **Boolean** | Whether to allow the experiment to reassign users to different variations (true) or keep users assigned to their initial variation (false). Defaults to true. | [optional] 
**metrics** | [**[MetricInput]**](MetricInput.md) |  | 
**treatments** | [**[TreatmentInput]**](TreatmentInput.md) |  | 
**flags** | [**{String: FlagInput}**](FlagInput.md) |  | 


