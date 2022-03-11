# LaunchDarklyApi.ExperimentsBetaApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getExperiment**](ExperimentsBetaApi.md#getExperiment) | **GET** /api/v2/flags/{projectKey}/{featureFlagKey}/experiments/{environmentKey}/{metricKey} | Get experiment results
[**resetExperiment**](ExperimentsBetaApi.md#resetExperiment) | **DELETE** /api/v2/flags/{projectKey}/{featureFlagKey}/experiments/{environmentKey}/{metricKey}/results | Reset experiment results



## getExperiment

> ExperimentResultsRep getExperiment(projectKey, featureFlagKey, environmentKey, metricKey, opts)

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
let projectKey = "projectKey_example"; // String | The project key
let featureFlagKey = "featureFlagKey_example"; // String | The feature flag key
let environmentKey = "environmentKey_example"; // String | The environment key
let metricKey = "metricKey_example"; // String | The metric key
let opts = {
  'from': 789, // Number | A timestamp denoting the start of the data collection period, expressed as a Unix epoch time in milliseconds.
  'to': 789 // Number | A timestamp denoting the end of the data collection period, expressed as a Unix epoch time in milliseconds.
};
apiInstance.getExperiment(projectKey, featureFlagKey, environmentKey, metricKey, opts, (error, data, response) => {
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
 **projectKey** | **String**| The project key | 
 **featureFlagKey** | **String**| The feature flag key | 
 **environmentKey** | **String**| The environment key | 
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

> resetExperiment(projectKey, featureFlagKey, environmentKey, metricKey)

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
let projectKey = "projectKey_example"; // String | The project key
let featureFlagKey = "featureFlagKey_example"; // String | The feature flag key
let environmentKey = "environmentKey_example"; // String | The environment key
let metricKey = "metricKey_example"; // String | The metric's key
apiInstance.resetExperiment(projectKey, featureFlagKey, environmentKey, metricKey, (error, data, response) => {
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
 **projectKey** | **String**| The project key | 
 **featureFlagKey** | **String**| The feature flag key | 
 **environmentKey** | **String**| The environment key | 
 **metricKey** | **String**| The metric&#39;s key | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

