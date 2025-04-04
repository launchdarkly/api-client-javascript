# LaunchDarklyApi.CreateAnnouncementBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**isDismissible** | **Boolean** | true if the announcement is dismissible | 
**title** | **String** | The title of the announcement | 
**message** | **String** | The message of the announcement | 
**startTime** | **Number** | The start time of the announcement. This is a Unix timestamp in milliseconds. | 
**endTime** | **Number** | The end time of the announcement. This is a Unix timestamp in milliseconds. | [optional] 
**severity** | **String** | The severity of the announcement | 



## Enum: SeverityEnum


* `info` (value: `"info"`)

* `warning` (value: `"warning"`)

* `critical` (value: `"critical"`)




