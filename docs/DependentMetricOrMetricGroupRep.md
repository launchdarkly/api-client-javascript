# LaunchDarklyApi.DependentMetricOrMetricGroupRep

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **String** | A unique key to reference the metric or metric group | 
**versionId** | **String** | The version ID of the metric or metric group | 
**name** | **String** | A human-friendly name for the metric or metric group | 
**kind** | **String** | If this is a metric, then it represents the kind of event the metric tracks. If this is a metric group, then it represents the group type | 
**isNumeric** | **Boolean** | For custom metrics, whether to track numeric changes in value against a baseline (&lt;code&gt;true&lt;/code&gt;) or to track a conversion when an end user takes an action (&lt;code&gt;false&lt;/code&gt;). | [optional] 
**links** | [**{String: Link}**](Link.md) | The location and content type of related resources | 
**isGroup** | **Boolean** | Whether this is a metric group or a metric | 
**metrics** | [**[MetricInGroupRep]**](MetricInGroupRep.md) | An ordered list of the metrics in this metric group | [optional] 



## Enum: KindEnum


* `pageview` (value: `"pageview"`)

* `click` (value: `"click"`)

* `custom` (value: `"custom"`)

* `funnel` (value: `"funnel"`)

* `standard` (value: `"standard"`)




