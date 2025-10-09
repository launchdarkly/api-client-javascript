# LaunchDarklyApi.FailedResourceLink

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resourceKey** | **String** | The key of the resource that failed to link. | 
**environmentId** | **String** | Environment ID of the resource (only present for segments) | [optional] 
**resourceType** | **String** | The type of the resource that failed to link. | 
**errorMessage** | **String** | The reason why linking this resource failed. | 



## Enum: ResourceTypeEnum


* `flag` (value: `"flag"`)

* `segment` (value: `"segment"`)

* `metric` (value: `"metric"`)

* `aiConfig` (value: `"aiConfig"`)




