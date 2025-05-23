# LaunchDarklyApi.IterationInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hypothesis** | **String** | The expected outcome of this experiment | 
**canReshuffleTraffic** | **Boolean** | Whether to allow the experiment to reassign traffic to different variations when you increase or decrease the traffic in your experiment audience (true) or keep all traffic assigned to its initial variation (false). Defaults to true. | [optional] 
**metrics** | [**[MetricInput]**](MetricInput.md) |  | 
**primarySingleMetricKey** | **String** | The key of the primary metric for this experiment. Either &lt;code&gt;primarySingleMetricKey&lt;/code&gt; or &lt;code&gt;primaryFunnelKey&lt;/code&gt; must be present. | [optional] 
**primaryFunnelKey** | **String** | The key of the primary funnel group for this experiment. Either &lt;code&gt;primarySingleMetricKey&lt;/code&gt; or &lt;code&gt;primaryFunnelKey&lt;/code&gt; must be present. | [optional] 
**treatments** | [**[TreatmentInput]**](TreatmentInput.md) |  | 
**flags** | [**{String: FlagInput}**](FlagInput.md) |  | 
**randomizationUnit** | **String** | The unit of randomization for this iteration. Defaults to user. | [optional] 
**attributes** | **[String]** | The attributes that this iteration&#39;s results can be sliced by | [optional] 


