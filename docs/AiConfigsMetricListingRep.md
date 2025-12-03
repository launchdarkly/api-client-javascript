# LaunchDarklyApi.AiConfigsMetricListingRep

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**experimentCount** | **Number** | The number of experiments using this metric | [optional] 
**metricGroupCount** | **Number** | The number of metric groups using this metric | [optional] 
**guardedRolloutCount** | **Number** | The number of guarded rollouts using this metric | [optional] 
**activeExperimentCount** | **Number** | The number of active experiments using this metric | [optional] 
**activeGuardedRolloutCount** | **Number** | The number of active guarded rollouts using this metric | [optional] 
**id** | **String** | The ID of this metric | 
**versionId** | **String** | The version ID of the metric | 
**version** | **Number** | Version of the metric | [optional] 
**key** | **String** | A unique key to reference the metric | 
**name** | **String** | A human-friendly name for the metric | 
**kind** | **String** | The kind of event the metric tracks | 
**attachedFlagCount** | **Number** | The number of feature flags currently attached to this metric | [optional] 
**links** | [**{String: AiConfigsLink}**](AiConfigsLink.md) | The location and content type of related resources | 
**site** | [**AiConfigsLink**](AiConfigsLink.md) |  | [optional] 
**access** | [**AiConfigsAccess**](AiConfigsAccess.md) |  | [optional] 
**tags** | **[String]** | Tags for the metric | 
**creationDate** | **Number** |  | 
**lastModified** | [**AiConfigsModification**](AiConfigsModification.md) |  | [optional] 
**maintainerId** | **String** | The ID of the member who maintains this metric | [optional] 
**maintainer** | [**AiConfigsMemberSummary**](AiConfigsMemberSummary.md) |  | [optional] 
**description** | **String** | Description of the metric | [optional] 
**category** | **String** | The category of the metric | [optional] 
**isNumeric** | **Boolean** | For custom metrics, whether to track numeric changes in value against a baseline (&lt;code&gt;true&lt;/code&gt;) or to track a conversion when an end user takes an action (&lt;code&gt;false&lt;/code&gt;). | [optional] 
**successCriteria** | **String** | For custom metrics, the success criteria | [optional] 
**unit** | **String** | For numeric custom metrics, the unit of measure | [optional] 
**eventKey** | **String** | For custom metrics, the event key to use in your code | [optional] 
**randomizationUnits** | **[String]** | An array of randomization units allowed for this metric | [optional] 
**filters** | [**AiConfigsFilter**](AiConfigsFilter.md) |  | [optional] 
**unitAggregationType** | **String** | The method by which multiple unit event values are aggregated | [optional] 
**analysisType** | **String** | The method for analyzing metric events | [optional] 
**percentileValue** | **Number** | The percentile for the analysis method. An integer denoting the target percentile between 0 and 100. Required when &lt;code&gt;analysisType&lt;/code&gt; is &lt;code&gt;percentile&lt;/code&gt;. | [optional] 
**eventDefault** | [**AiConfigsMetricEventDefaultRep**](AiConfigsMetricEventDefaultRep.md) |  | [optional] 
**dataSource** | [**AiConfigsMetricDataSourceRefRep**](AiConfigsMetricDataSourceRefRep.md) |  | 
**archived** | **Boolean** | Whether the metric version is archived | [optional] 
**archivedAt** | **Number** |  | [optional] 
**selector** | **String** | For click metrics, the CSS selectors | [optional] 
**urls** | **[Object]** |  | [optional] 



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





## Enum: AnalysisTypeEnum


* `mean` (value: `"mean"`)

* `percentile` (value: `"percentile"`)




