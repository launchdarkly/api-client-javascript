# LaunchDarklyApi.IterationRep

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**hypothesis** | **String** |  | 
**status** | **String** |  | 
**startedAt** | **Number** |  | [optional] 
**endedAt** | **Number** |  | [optional] 
**winningTreatmentId** | **String** |  | [optional] 
**winningReason** | **String** |  | [optional] 
**canReshuffleTraffic** | **Boolean** |  | [optional] 
**flags** | [**{String: FlagRep}**](FlagRep.md) |  | [optional] 
**primaryMetric** | [**MetricV2Rep**](MetricV2Rep.md) |  | [optional] 
**treatments** | [**[TreatmentRep]**](TreatmentRep.md) |  | [optional] 
**secondaryMetrics** | [**[MetricV2Rep]**](MetricV2Rep.md) |  | [optional] 


