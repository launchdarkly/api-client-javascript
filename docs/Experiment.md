# LaunchDarklyApi.Experiment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The experiment ID | [optional] 
**key** | **String** | The experiment key | 
**name** | **String** | The experiment name | 
**description** | **String** | The experiment description | [optional] 
**maintainerId** | **String** | The ID of the member who maintains this experiment. | 
**creationDate** | **Number** |  | 
**archivedDate** | **Number** |  | [optional] 
**links** | [**{String: Link}**](Link.md) | The location and content type of related resources | 
**currentIteration** | [**IterationRep**](IterationRep.md) |  | [optional] 
**draftIteration** | [**IterationRep**](IterationRep.md) |  | [optional] 
**previousIterations** | [**[IterationRep]**](IterationRep.md) | Details on the previous iterations for this experiment. | [optional] 


