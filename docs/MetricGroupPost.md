# LaunchDarklyApi.MetricGroupPost

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **String** | A unique key to reference the metric group | 
**name** | **String** | A human-friendly name for the metric group | 
**kind** | **String** | The type of the metric group | 
**description** | **String** | Description of the metric group | [optional] 
**maintainerId** | **String** | The ID of the member who maintains this metric group | 
**tags** | **[String]** | Tags for the metric group | 
**metrics** | [**[MetricInMetricGroupInput]**](MetricInMetricGroupInput.md) | An ordered list of the metrics in this metric group | 



## Enum: KindEnum


* `funnel` (value: `"funnel"`)




