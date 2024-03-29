# LaunchDarklyApi.CreateFlagConfigApprovalRequestRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **String** | Optional comment describing the approval request | [optional] 
**description** | **String** | A brief description of the changes you&#39;re requesting | 
**instructions** | **[Object]** |  | 
**notifyMemberIds** | **[String]** | An array of member IDs. These members are notified to review the approval request. | [optional] 
**notifyTeamKeys** | **[String]** | An array of team keys. The members of these teams are notified to review the approval request. | [optional] 
**executionDate** | **Number** |  | [optional] 
**operatingOnId** | **String** | The ID of a scheduled change. Include this if your &lt;code&gt;instructions&lt;/code&gt; include editing or deleting a scheduled change. | [optional] 
**integrationConfig** | **{String: Object}** |  | [optional] 


