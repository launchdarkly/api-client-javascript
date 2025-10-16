# LaunchDarklyApi.MetricGroupRep

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The ID of this metric group | 
**key** | **String** | A unique key to reference the metric group | 
**name** | **String** | A human-friendly name for the metric group | 
**kind** | **String** | The type of the metric group | 
**description** | **String** | Description of the metric group | [optional] 
**links** | [**{String: Link}**](Link.md) | The location and content type of related resources | 
**access** | [**Access**](Access.md) |  | [optional] 
**tags** | **[String]** | Tags for the metric group | 
**creationDate** | **Number** |  | 
**lastModified** | **Number** |  | 
**maintainer** | [**MaintainerRep**](MaintainerRep.md) |  | 
**metrics** | [**[MetricInGroupRep]**](MetricInGroupRep.md) | An ordered list of the metrics in this metric group | 
**version** | **Number** | The version of this metric group | 
**experiments** | [**[DependentExperimentRep]**](DependentExperimentRep.md) |  | [optional] 
**experimentCount** | **Number** | The number of experiments using this metric group | [optional] 
**activeExperimentCount** | **Number** | The number of active experiments using this metric group | [optional] 
**activeGuardedRolloutCount** | **Number** | The number of active guarded rollouts using this metric group | [optional] 
**totalConnectionsCount** | **Number** | The total number of connections using this metric group | [optional] 
**totalActiveConnectionsCount** | **Number** | The total number of active connections using this metric group | [optional] 



## Enum: KindEnum


* `funnel` (value: `"funnel"`)

* `standard` (value: `"standard"`)

* `guardrail` (value: `"guardrail"`)




