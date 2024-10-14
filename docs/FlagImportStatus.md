# LaunchDarklyApi.FlagImportStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **String** | The current status of the import integrations related import job | [optional] 
**lastImport** | **Number** |  | [optional] 
**lastError** | **Number** |  | [optional] 
**errors** | [**[StatusResponse]**](StatusResponse.md) |  | [optional] 



## Enum: StatusEnum


* `complete` (value: `"complete"`)

* `importing` (value: `"importing"`)

* `pending` (value: `"pending"`)

* `failed` (value: `"failed"`)

* `partial` (value: `"partial"`)




