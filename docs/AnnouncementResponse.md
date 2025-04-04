# LaunchDarklyApi.AnnouncementResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The ID of the announcement | 
**isDismissible** | **Boolean** | true if the announcement is dismissible | 
**title** | **String** | The title of the announcement | 
**message** | **String** | The message of the announcement | 
**startTime** | **Number** | The start time of the announcement. This is a Unix timestamp in milliseconds. | 
**endTime** | **Number** | The end time of the announcement. This is a Unix timestamp in milliseconds. | [optional] 
**severity** | **String** | The severity of the announcement | 
**status** | **String** | The status of the announcement | 
**access** | [**AnnouncementAccessRep**](AnnouncementAccessRep.md) |  | [optional] 
**links** | [**AnnouncementResponseLinks**](AnnouncementResponseLinks.md) |  | 



## Enum: SeverityEnum


* `info` (value: `"info"`)

* `warning` (value: `"warning"`)

* `critical` (value: `"critical"`)





## Enum: StatusEnum


* `active` (value: `"active"`)

* `inactive` (value: `"inactive"`)

* `scheduled` (value: `"scheduled"`)




