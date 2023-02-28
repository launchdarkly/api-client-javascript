# LaunchDarklyApi.ContextInstanceRecord

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lastSeen** | **Date** | Timestamp of the last time an evaluation occurred for this context instance | [optional] 
**id** | **String** | The context instance ID | 
**applicationId** | **String** | An identifier representing the application where the LaunchDarkly SDK is running | [optional] 
**anonymousKinds** | **[String]** | A list of the context kinds this context was associated with that the SDK removed because they were marked as anonymous at flag evaluation | [optional] 
**context** | **Object** | The context, including its kind and attributes | 
**links** | [**{String: Link}**](Link.md) | The location and content type of related resources | [optional] 
**access** | [**Access**](Access.md) |  | [optional] 


