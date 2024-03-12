# LaunchDarklyApi.MetricV2Rep

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **String** | The metric key | 
**versionId** | **String** | The version ID of the metric | [optional] 
**name** | **String** | The metric name | 
**kind** | **String** | The kind of event the metric tracks | 
**isNumeric** | **Boolean** | For custom metrics, whether to track numeric changes in value against a baseline (&lt;code&gt;true&lt;/code&gt;) or to track a conversion when an end user takes an action (&lt;code&gt;false&lt;/code&gt;). | [optional] 
**links** | [**{String: Link}**](Link.md) | The location and content type of related resources | 



## Enum: KindEnum


* `pageview` (value: `"pageview"`)

* `click` (value: `"click"`)

* `custom` (value: `"custom"`)




