# LaunchDarklyApi.MetricPost

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **String** | A unique key to reference the metric | 
**name** | **String** | A human-friendly name for the metric | [optional] 
**description** | **String** | Description of the metric | [optional] 
**kind** | **String** | The kind of event your metric will track | 
**selector** | **String** | One or more CSS selectors. Required for click metrics. | [optional] 
**urls** | [**[UrlPost]**](UrlPost.md) | One or more target URLs. Required for click and pageview metrics. | [optional] 
**isActive** | **Boolean** | Whether the metric is active | [optional] 
**isNumeric** | **Boolean** | Whether to track numeric changes in value against a baseline (&lt;code&gt;true&lt;/code&gt;) or to track a conversion when users taken an action (&lt;code&gt;false&lt;/code&gt;). Required for custom metrics. | [optional] 
**unit** | **String** | The unit of measure. Only for numeric custom metrics. | [optional] 
**eventKey** | **String** | The event name to use in your code. Required for custom metrics. | [optional] 
**successCriteria** | **String** | Success criteria. Required for numeric custom metrics. | [optional] 
**tags** | **[String]** | Tags for the metric | [optional] 



## Enum: KindEnum


* `pageview` (value: `"pageview"`)

* `click` (value: `"click"`)

* `custom` (value: `"custom"`)





## Enum: SuccessCriteriaEnum


* `HigherThanBaseline` (value: `"HigherThanBaseline"`)

* `LowerThanBaseline` (value: `"LowerThanBaseline"`)




