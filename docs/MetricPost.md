# LaunchDarklyApi.MetricPost

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **String** | A unique key to reference the metric | 
**name** | **String** | A human-friendly name for the metric | [optional] 
**description** | **String** | Description of the metric | [optional] 
**kind** | **String** | The kind of event your metric will track | 
**selector** | **String** | One or more CSS selectors. Required for click metrics only. | [optional] 
**urls** | [**[UrlPost]**](UrlPost.md) | One or more target URLs. Required for click and pageview metrics only. | [optional] 
**isNumeric** | **Boolean** | Whether to track numeric changes in value against a baseline (&lt;code&gt;true&lt;/code&gt;) or to track a conversion when an end user takes an action (&lt;code&gt;false&lt;/code&gt;). Required for custom metrics only. | [optional] 
**unit** | **String** | The unit of measure. Applicable for numeric custom metrics only. | [optional] 
**eventKey** | **String** | The event key to use in your code. Required for custom conversion/binary and custom numeric metrics only. | [optional] 
**successCriteria** | **String** | Success criteria. Required for custom numeric metrics, optional for custom conversion metrics. | [optional] 
**tags** | **[String]** | Tags for the metric | [optional] 
**randomizationUnits** | **[String]** | An array of randomization units allowed for this metric | [optional] 
**maintainerId** | **String** | The ID of the member who maintains this metric | [optional] 
**unitAggregationType** | **String** | The method by which multiple unit event values are aggregated | [optional] 
**analysisType** | **String** | The method for analyzing metric events | [optional] 
**percentileValue** | **Number** | The percentile for the analysis method. An integer denoting the target percentile between 0 and 100. Required when &lt;code&gt;analysisType&lt;/code&gt; is &lt;code&gt;percentile&lt;/code&gt;. | [optional] 
**eventDefault** | [**MetricEventDefaultRep**](MetricEventDefaultRep.md) |  | [optional] 



## Enum: KindEnum


* `pageview` (value: `"pageview"`)

* `click` (value: `"click"`)

* `custom` (value: `"custom"`)





## Enum: SuccessCriteriaEnum


* `HigherThanBaseline` (value: `"HigherThanBaseline"`)

* `LowerThanBaseline` (value: `"LowerThanBaseline"`)





## Enum: UnitAggregationTypeEnum


* `average` (value: `"average"`)

* `sum` (value: `"sum"`)




