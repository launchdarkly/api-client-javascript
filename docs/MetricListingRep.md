# LaunchDarklyApi.MetricListingRep

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**key** | **String** |  | 
**name** | **String** |  | 
**kind** | **String** |  | 
**attachedFlagCount** | **Number** |  | [optional] 
**links** | [**{String: Link}**](Link.md) |  | 
**site** | [**Link**](Link.md) |  | [optional] 
**access** | [**AccessRep**](AccessRep.md) |  | [optional] 
**tags** | **[String]** |  | 
**creationDate** | **Number** |  | 
**lastModified** | [**Modification**](Modification.md) |  | [optional] 
**maintainerId** | **String** |  | [optional] 
**maintainer** | [**MemberSummaryRep**](MemberSummaryRep.md) |  | [optional] 
**description** | **String** |  | [optional] 
**isNumeric** | **Boolean** |  | [optional] 
**successCriteria** | **Number** |  | [optional] 
**unit** | **String** |  | [optional] 
**eventKey** | **String** |  | [optional] 



## Enum: KindEnum


* `pageview` (value: `"pageview"`)

* `click` (value: `"click"`)

* `custom` (value: `"custom"`)




