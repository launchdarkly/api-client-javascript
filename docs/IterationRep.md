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
**winningTreatmentId** | **String** | The ID of the treatment chosen when the experiment stopped | [optional] 
**winningReason** | **String** | The reason you stopped the experiment | [optional] 
**canReshuffleTraffic** | **Boolean** | Whether the experiment may reassign traffic to different variations when the experiment audience changes (true) or must keep all traffic assigned to its initial variation (false). | [optional] 
**flags** | [**{String: FlagRep}**](FlagRep.md) | Details on the flag used in this experiment | [optional] 
**primaryMetric** | [**MetricV2Rep**](MetricV2Rep.md) |  | [optional] 
**randomizationUnit** | **String** | The unit of randomization for this iteration | [optional] 
**treatments** | [**[TreatmentRep]**](TreatmentRep.md) | Details on the variations you are testing in the experiment | [optional] 
**secondaryMetrics** | [**[MetricV2Rep]**](MetricV2Rep.md) | Details on the secondary metrics for this experiment | [optional] 


