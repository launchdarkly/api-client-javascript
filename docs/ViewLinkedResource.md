# LaunchDarklyApi.ViewLinkedResource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**ParentAndSelfLinks**](ParentAndSelfLinks.md) |  | 
**resourceKey** | **String** | Key of the resource (flag, segment, AI config or metric) | 
**environmentId** | **String** | Environment ID of the resource (only present for segments) | [optional] 
**environmentKey** | **String** | Environment Key of the resource (only present for segments) | [optional] 
**resourceType** | **String** |  | 
**linkedAt** | **Number** |  | 
**resourceDetails** | [**ViewLinkedResourceDetails**](ViewLinkedResourceDetails.md) |  | [optional] 



## Enum: ResourceTypeEnum


* `flag` (value: `"flag"`)

* `segment` (value: `"segment"`)

* `metric` (value: `"metric"`)

* `aiConfig` (value: `"aiConfig"`)




