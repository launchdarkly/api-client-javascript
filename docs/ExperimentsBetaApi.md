# LaunchDarklyApi.ExperimentsBetaApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getExperiment**](ExperimentsBetaApi.md#getExperiment) | **GET** /api/v2/flags/{projKey}/{flagKey}/experiments/{envKey}/{metricKey} | Get experiment results
[**resetExperiment**](ExperimentsBetaApi.md#resetExperiment) | **DELETE** /api/v2/flags/{projKey}/{flagKey}/experiments/{envKey}/{metricKey}/results | Reset experiment results



## getExperiment

> ExperimentResultsRep getExperiment(projKey, flagKey, envKey, metricKey, opts)

Get experiment results

Get detailed experiment result data

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ExperimentsBetaApi();
let projKey = "projKey_example"; // String | The project key
let flagKey = "flagKey_example"; // String | The flag key
let envKey = "envKey_example"; // String | The environment key
let metricKey = "metricKey_example"; // String | The metric key
let opts = {
  'from': 789, // Number | A timestamp denoting the start of the data collection period, expressed as a Unix epoch time in milliseconds.
  'to': 789 // Number | A timestamp denoting the end of the data collection period, expressed as a Unix epoch time in milliseconds.
};
apiInstance.getExperiment(projKey, flagKey, envKey, metricKey, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projKey** | **String**| The project key | 
 **flagKey** | **String**| The flag key | 
 **envKey** | **String**| The environment key | 
 **metricKey** | **String**| The metric key | 
 **from** | **Number**| A timestamp denoting the start of the data collection period, expressed as a Unix epoch time in milliseconds. | [optional] 
 **to** | **Number**| A timestamp denoting the end of the data collection period, expressed as a Unix epoch time in milliseconds. | [optional] 

### Return type

[**ExperimentResultsRep**](ExperimentResultsRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## resetExperiment

> resetExperiment(projKey, flagKey, envKey, metricKey)

Reset experiment results

Reset all experiment results by deleting all existing data for an experiment

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ExperimentsBetaApi();
let projKey = "projKey_example"; // String | The project key
let flagKey = "flagKey_example"; // String | The feature flag's key
let envKey = "envKey_example"; // String | The environment key
let metricKey = "metricKey_example"; // String | The metric's key
apiInstance.resetExperiment(projKey, flagKey, envKey, metricKey, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projKey** | **String**| The project key | 
 **flagKey** | **String**| The feature flag&#39;s key | 
 **envKey** | **String**| The environment key | 
 **metricKey** | **String**| The metric&#39;s key | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

