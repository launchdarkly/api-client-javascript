# LaunchDarklyApi.ProjectPost

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | A human-friendly name for the project. | 
**key** | **String** | A unique key used to reference the project in your code. | 
**includeInSnippetByDefault** | **Boolean** | Whether or not flags created in this project are made available to the client-side JavaScript SDK by default. | [optional] 
**defaultClientSideAvailability** | [**DefaultClientSideAvailabilityPost**](DefaultClientSideAvailabilityPost.md) |  | [optional] 
**tags** | **[String]** | Tags for the project | [optional] 
**environments** | [**[EnvironmentPost]**](EnvironmentPost.md) | Creates the provided environments for this project. If omitted default environments will be created instead. | [optional] 
**namingConvention** | [**NamingConvention**](NamingConvention.md) |  | [optional] 


