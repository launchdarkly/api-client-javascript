# LaunchDarklyApi.CustomWorkflowOutput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The ID of the workflow | 
**version** | **Number** | The version of the workflow | 
**conflicts** | [**[ConflictOutput]**](ConflictOutput.md) | Any conflicts that are present in the workflow stages | 
**creationDate** | **Number** |  | 
**maintainerId** | **String** | The member ID of the maintainer of the workflow. Defaults to the workflow creator. | 
**links** | [**{String: Link}**](Link.md) | The location and content type of related resources | 
**name** | **String** | The name of the workflow | 
**description** | **String** | A brief description of the workflow | [optional] 
**kind** | **String** | The kind of workflow | [optional] 
**stages** | [**[StageOutput]**](StageOutput.md) | The stages that make up the workflow. Each stage contains conditions and actions. | [optional] 
**execution** | [**ExecutionOutput**](ExecutionOutput.md) |  | 
**meta** | [**WorkflowTemplateMetadata**](WorkflowTemplateMetadata.md) |  | [optional] 
**templateKey** | **String** | For workflows being created from a workflow template, this value is the template&#39;s key | [optional] 


