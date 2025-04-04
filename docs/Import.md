# LaunchDarklyApi.Import

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The import ID | 
**segmentKey** | **String** | The segment key | 
**creationTime** | **Number** |  | 
**mode** | **String** | The import mode used, either &lt;code&gt;merge&lt;/code&gt; or &lt;code&gt;replace&lt;/code&gt; | 
**status** | **String** | The import status | 
**files** | [**[FileRep]**](FileRep.md) | The imported files and their status | [optional] 
**links** | [**{String: Link}**](Link.md) | The location and content type of related resources | 



## Enum: StatusEnum


* `preparing` (value: `"preparing"`)

* `pending_approval` (value: `"pending_approval"`)

* `ready` (value: `"ready"`)

* `in_progress` (value: `"in_progress"`)

* `complete` (value: `"complete"`)

* `stopped` (value: `"stopped"`)




