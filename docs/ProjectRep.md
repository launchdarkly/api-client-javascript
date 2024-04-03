# LaunchDarklyApi.ProjectRep

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**{String: Link}**](Link.md) | The location and content type of related resources | 
**id** | **String** | The ID of this project | 
**key** | **String** | The key of this project | 
**includeInSnippetByDefault** | **Boolean** | Whether or not flags created in this project are made available to the client-side JavaScript SDK by default | 
**defaultClientSideAvailability** | [**ClientSideAvailability**](ClientSideAvailability.md) |  | [optional] 
**name** | **String** | A human-friendly name for the project | 
**access** | [**Access**](Access.md) |  | [optional] 
**tags** | **[String]** | A list of tags for the project | 
**defaultReleasePipelineKey** | **String** | The key of the default release pipeline for this project | [optional] 
**environments** | [**[Environment]**](Environment.md) | A list of environments for the project | 


