# LaunchDarklyApi.DesignRep

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hypothesis** | **String** | The expected outcome of this experiment | 
**canReshuffleTraffic** | **Boolean** | Whether the experiment can reassign traffic to different variations when you increase or decrease the traffic in your experiment audience (true) or keep all traffic assigned to its initial variation (false). | [optional] 
**flags** | [**{String: FlagRep}**](FlagRep.md) | Details on the flag used in this experiment | [optional] 
**primaryMetric** | [**DependentMetricOrMetricGroupRep**](DependentMetricOrMetricGroupRep.md) |  | [optional] 
**randomizationUnit** | **String** | The unit of randomization for this iteration | [optional] 
**treatments** | [**[TreatmentRep]**](TreatmentRep.md) | Details on the variations you are testing in the experiment | [optional] 
**secondaryMetrics** | [**[MetricV2Rep]**](MetricV2Rep.md) | Details on the secondary metrics for this experiment | [optional] 

