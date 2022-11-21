# LaunchDarklyApi.TriggerWorkflowRep

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**version** | **Number** | The flag trigger version | [optional] 
**creationDate** | **Number** |  | [optional] 
**maintainerId** | **String** | The ID of the flag trigger maintainer | [optional] 
**maintainer** | [**MemberSummary**](MemberSummary.md) |  | [optional] 
**enabled** | **Boolean** | Whether the flag trigger is currently enabled | [optional] 
**integrationKey** | **String** | The unique identifier of the integration for your trigger | [optional] 
**instructions** | **[Object]** |  | [optional] 
**lastTriggeredAt** | **Number** |  | [optional] 
**recentTriggerBodies** | [**[RecentTriggerBody]**](RecentTriggerBody.md) | Details on recent flag trigger requests. | [optional] 
**triggerCount** | **Number** | Number of times the trigger has been executed | [optional] 
**triggerURL** | **String** | The unguessable URL for this flag trigger | [optional] 
**links** | [**{String: Link}**](Link.md) | The location and content type of related resources | [optional] 


