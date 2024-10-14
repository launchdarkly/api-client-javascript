# LaunchDarklyApi.MetricInGroupRep

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **String** | The metric key | 
**versionId** | **String** | The version ID of the metric | [optional] 
**name** | **String** | The metric name | 
**kind** | **String** | The kind of event the metric tracks | 
**isNumeric** | **Boolean** | For custom metrics, whether to track numeric changes in value against a baseline (&lt;code&gt;true&lt;/code&gt;) or to track a conversion when an end user takes an action (&lt;code&gt;false&lt;/code&gt;). | [optional] 
**unitAggregationType** | **String** | The type of unit aggregation to use for the metric | [optional] 
**links** | [**{String: Link}**](Link.md) | The location and content type of related resources | 
**nameInGroup** | **String** | Name of the metric when used within the associated metric group. Can be different from the original name of the metric. Required if and only if the metric group is a &lt;code&gt;funnel&lt;/code&gt;. | [optional] 
**randomizationUnits** | **[String]** | The randomization units for the metric | [optional] 



## Enum: KindEnum


* `pageview` (value: `"pageview"`)

* `click` (value: `"click"`)

* `custom` (value: `"custom"`)





## Enum: UnitAggregationTypeEnum


* `sum` (value: `"sum"`)

* `average` (value: `"average"`)




