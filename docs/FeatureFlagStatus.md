# LaunchDarklyApi.FeatureFlagStatus

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | | Name     | Description | | --------:| ----------- | | new      | the feature flag was created within the last 7 days, and has not been requested yet | | active   | the feature flag was requested by your servers or clients within the last 7 days | | inactive | the feature flag was created more than 7 days ago, and hasn't been requested by your servers or clients within the past 7 days | | launched | one variation of the feature flag has been rolled out to all your users for at least 7 days |  | [optional] 
**lastRequested** | **String** |  | [optional] 
**_default** | **Object** |  | [optional] 
**links** | [**FeatureFlagStatusLinks**](FeatureFlagStatusLinks.md) |  | [optional] 


<a name="NameEnum"></a>
## Enum: NameEnum


* `_new` (value: `"new"`)

* `active` (value: `"active"`)

* `inactive` (value: `"inactive"`)

* `launched` (value: `"launched"`)




