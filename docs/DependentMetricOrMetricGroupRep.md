# LaunchDarklyApi.DependentMetricOrMetricGroupRep

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **String** | A unique key to reference the metric or metric group | 
**name** | **String** | A human-friendly name for the metric or metric group | 
**kind** | **String** | If this is a metric, then it represents the kind of event the metric tracks. If this is a metric group, then it represents the group type | 
**links** | [**{String: Link}**](Link.md) | The location and content type of related resources | 
**isGroup** | **Boolean** | Whether this is a metric group or a metric | 
**metrics** | [**[MetricInGroupRep]**](MetricInGroupRep.md) | An ordered list of the metrics in this metric group | [optional] 



## Enum: KindEnum


* `pageview` (value: `"pageview"`)

* `click` (value: `"click"`)

* `custom` (value: `"custom"`)

* `funnel` (value: `"funnel"`)




