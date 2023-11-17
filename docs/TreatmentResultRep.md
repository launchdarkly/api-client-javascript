# LaunchDarklyApi.TreatmentResultRep

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**treatmentId** | **String** | The ID of the treatment | [optional] 
**treatmentName** | **String** | The name of the treatment | [optional] 
**mean** | **Number** | The average value of the variation in this sample. It doesn’t capture the uncertainty in the measurement, so it should not be the only measurement you use to make decisions. | [optional] 
**credibleInterval** | [**CredibleIntervalRep**](CredibleIntervalRep.md) |  | [optional] 
**pBest** | **Number** | The likelihood that this variation has the biggest effect on the primary metric. The variation with the highest probability is likely the best of the variations you&#39;re testing | [optional] 
**relativeDifferences** | [**[RelativeDifferenceRep]**](RelativeDifferenceRep.md) | Estimates of the relative difference between this treatment&#39;s mean and the mean of each other treatment | [optional] 
**units** | **Number** | The number of end users in this variation of the experiment | [optional] 
**distribution** | [**Distribution**](Distribution.md) |  | [optional] 

