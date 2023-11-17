# LaunchDarklyApi.MetricInGroupRep

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **String** | The metric key | 
**name** | **String** | The metric name | 
**kind** | **String** | The kind of event the metric tracks | 
**links** | [**{String: Link}**](Link.md) | The location and content type of related resources | 
**nameInGroup** | **String** | Name of the metric when used within the associated metric group. Can be different from the original name of the metric | 
**randomizationUnits** | **[String]** | The randomization units for the metric | [optional] 



## Enum: KindEnum


* `pageview` (value: `"pageview"`)

* `click` (value: `"click"`)

* `custom` (value: `"custom"`)




