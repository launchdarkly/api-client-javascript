# LaunchDarklyApi.MetricRep

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**experimentCount** | **Number** | The number of experiments using this metric | [optional] 
**id** | **String** | The ID of this metric | 
**key** | **String** | A unique key to reference the metric | 
**name** | **String** | A human-friendly name for the metric | 
**kind** | **String** | The kind of event the metric tracks | 
**attachedFlagCount** | **Number** | The number of feature flags currently attached to this metric | [optional] 
**links** | [**{String: Link}**](Link.md) | The location and content type of related resources | 
**site** | [**Link**](Link.md) |  | [optional] 
**access** | [**Access**](Access.md) |  | [optional] 
**tags** | **[String]** | Tags for the metric | 
**creationDate** | **Number** |  | 
**lastModified** | [**Modification**](Modification.md) |  | [optional] 
**maintainerId** | **String** | The ID of the member who maintains this metric | [optional] 
**maintainer** | [**MemberSummary**](MemberSummary.md) |  | [optional] 
**description** | **String** | Description of the metric | [optional] 
**isNumeric** | **Boolean** | For custom metrics, whether to track numeric changes in value against a baseline (&lt;code&gt;true&lt;/code&gt;) or to track a conversion when users taken an action (&lt;code&gt;false&lt;/code&gt;). | [optional] 
**successCriteria** | **String** | For numeric custom metrics, the success criteria | [optional] 
**unit** | **String** | For numeric custom metrics, the unit of measure | [optional] 
**eventKey** | **String** | For custom metrics, the event name to use in your code | [optional] 
**experiments** | [**[DependentExperimentRep]**](DependentExperimentRep.md) |  | [optional] 
**isActive** | **Boolean** | Whether the metric is active | [optional] 
**attachedFeatures** | [**[FlagListingRep]**](FlagListingRep.md) | Details on the flags attached to this metric | [optional] 
**version** | **Number** | Version of the metric | [optional] 
**selector** | **String** | For click metrics, the CSS selectors | [optional] 
**urls** | **[Object]** |  | [optional] 



## Enum: KindEnum


* `pageview` (value: `"pageview"`)

* `click` (value: `"click"`)

* `custom` (value: `"custom"`)





## Enum: SuccessCriteriaEnum


* `HigherThanBaseline` (value: `"HigherThanBaseline"`)

* `LowerThanBaseline` (value: `"LowerThanBaseline"`)




