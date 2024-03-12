# LaunchDarklyApi.FlagEventRep

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The flag event ID | 
**projectId** | **String** | The project ID | 
**projectKey** | **String** | The project key | 
**environmentId** | **String** | The environment ID | [optional] 
**environmentKey** | **String** | The environment key | [optional] 
**flagKey** | **String** | The flag key | 
**eventType** | **String** |  | 
**eventTime** | **Number** |  | 
**description** | **String** | The event description | 
**auditLogEntryId** | **String** | The audit log entry ID | [optional] 
**member** | [**FlagEventMemberRep**](FlagEventMemberRep.md) |  | [optional] 
**actions** | **[String]** | The resource actions | [optional] 
**impact** | [**FlagEventImpactRep**](FlagEventImpactRep.md) |  | 
**experiments** | [**FlagEventExperimentCollection**](FlagEventExperimentCollection.md) |  | [optional] 


