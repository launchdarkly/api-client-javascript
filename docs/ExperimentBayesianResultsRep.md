# LaunchDarklyApi.ExperimentBayesianResultsRep

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**{String: Link}**](Link.md) | The location and content type of related resources | [optional] 
**treatmentResults** | [**[TreatmentResultRep]**](TreatmentResultRep.md) | Deprecated, use &lt;code&gt;results&lt;/code&gt; instead. Only populated when response does not contain results sliced by multiple attributes. | [optional] 
**metricSeen** | [**MetricSeen**](MetricSeen.md) |  | [optional] 
**probabilityOfMismatch** | **Number** | The probability of a Sample Ratio Mismatch | [optional] 
**results** | [**[SlicedResultsRep]**](SlicedResultsRep.md) | A list of attribute values and their corresponding treatment results | [optional] 


