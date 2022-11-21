# LaunchDarklyApi.IterationRep

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The iteration ID | [optional] 
**hypothesis** | **String** | The expected outcome of this experiment | 
**status** | **String** | The status of the iteration: &lt;code&gt;not_started&lt;/code&gt;, &lt;code&gt;running&lt;/code&gt;, &lt;code&gt;stopped&lt;/code&gt; | 
**createdAt** | **Number** |  | 
**startedAt** | **Number** |  | [optional] 
**endedAt** | **Number** |  | [optional] 
**winningTreatmentId** | **String** | The ID of the treatment with the probability to be best | [optional] 
**winningReason** | **String** | The reason you stopped the experiment | [optional] 
**canReshuffleTraffic** | **Boolean** | Whether the experiment is allowed to reassign users to different variations (true) or must keep users assigned to their initial variation (false). | [optional] 
**flags** | [**{String: FlagRep}**](FlagRep.md) | Details on the flag used in this experiment | [optional] 
**primaryMetric** | [**MetricV2Rep**](MetricV2Rep.md) |  | [optional] 
**treatments** | [**[TreatmentRep]**](TreatmentRep.md) | Details on the variations you are testing in the experiment | [optional] 
**secondaryMetrics** | [**[MetricV2Rep]**](MetricV2Rep.md) | Details on the secondary metrics for this experiment | [optional] 


