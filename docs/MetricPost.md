# LaunchDarklyApi.MetricPost

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **String** |  | 
**name** | **String** |  | [optional] 
**description** | **String** |  | [optional] 
**kind** | **String** |  | 
**selector** | **String** | Required for click metrics | [optional] 
**urls** | [**[UrlPost]**](UrlPost.md) | Required for click and pageview metrics | [optional] 
**isActive** | **Boolean** |  | [optional] 
**isNumeric** | **Boolean** |  | [optional] 
**unit** | **String** |  | [optional] 
**eventKey** | **String** | Required for custom metrics | [optional] 
**successCriteria** | **Number** |  | [optional] 
**tags** | **[String]** |  | [optional] 



## Enum: KindEnum


* `pageview` (value: `"pageview"`)

* `click` (value: `"click"`)

* `custom` (value: `"custom"`)




