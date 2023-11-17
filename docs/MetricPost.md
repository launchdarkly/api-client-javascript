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
**isActive** | **Boolean** | Whether the metric is active. Set to &lt;code&gt;true&lt;/code&gt; to record click or pageview metrics. Not applicable for custom metrics. | [optional] 
**isNumeric** | **Boolean** | Whether to track numeric changes in value against a baseline (&lt;code&gt;true&lt;/code&gt;) or to track a conversion when an end user takes an action (&lt;code&gt;false&lt;/code&gt;). Required for custom metrics only. | [optional] 
**unit** | **String** | The unit of measure. Applicable for numeric custom metrics only. | [optional] 
**eventKey** | **String** | The event key to use in your code. Required for custom metrics only. | [optional] 
**successCriteria** | **String** | Success criteria. Required for custom numeric metrics, optional for custom conversion metrics. | [optional] 
**tags** | **[String]** | Tags for the metric | [optional] 
**randomizationUnits** | **[String]** | An array of randomization units allowed for this metric | [optional] 
**unitAggregationType** | **String** | The method in which multiple unit event values are aggregated | [optional] 



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




