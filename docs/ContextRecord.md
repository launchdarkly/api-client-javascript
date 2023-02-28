# LaunchDarklyApi.ContextRecord

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lastSeen** | **Date** | Timestamp of the last time an evaluation occurred for this context | [optional] 
**applicationId** | **String** | An identifier representing the application where the LaunchDarkly SDK is running | [optional] 
**context** | **Object** | The context, including its kind and attributes | 
**links** | [**{String: Link}**](Link.md) | The location and content type of related resources | [optional] 
**access** | [**Access**](Access.md) |  | [optional] 
**associatedContexts** | **Number** | The total number of associated contexts. Associated contexts are contexts that have appeared in the same context instance, that is, they were part of the same flag evaluation. | [optional] 


