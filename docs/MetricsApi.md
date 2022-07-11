# LaunchDarklyApi.MetricsApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteMetric**](MetricsApi.md#deleteMetric) | **DELETE** /api/v2/metrics/{projectKey}/{metricKey} | Delete metric
[**getMetric**](MetricsApi.md#getMetric) | **GET** /api/v2/metrics/{projectKey}/{metricKey} | Get metric
[**getMetrics**](MetricsApi.md#getMetrics) | **GET** /api/v2/metrics/{projectKey} | List metrics
[**patchMetric**](MetricsApi.md#patchMetric) | **PATCH** /api/v2/metrics/{projectKey}/{metricKey} | Update metric
[**postMetric**](MetricsApi.md#postMetric) | **POST** /api/v2/metrics/{projectKey} | Create metric



## deleteMetric

> deleteMetric(projectKey, metricKey)

Delete metric

Delete a metric by key.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.MetricsApi();
let projectKey = "projectKey_example"; // String | The project key
let metricKey = "metricKey_example"; // String | The metric key
apiInstance.deleteMetric(projectKey, metricKey, (error, data, response) => {
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
 **metricKey** | **String**| The metric key | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMetric

> MetricRep getMetric(projectKey, metricKey)

Get metric

Get information for a single metric from the specific project.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.MetricsApi();
let projectKey = "projectKey_example"; // String | The project key
let metricKey = "metricKey_example"; // String | The metric key
apiInstance.getMetric(projectKey, metricKey, (error, data, response) => {
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
 **metricKey** | **String**| The metric key | 

### Return type

[**MetricRep**](MetricRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMetrics

> MetricCollectionRep getMetrics(projectKey)

List metrics

Get a list of all metrics for the specified project.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.MetricsApi();
let projectKey = "projectKey_example"; // String | The project key
apiInstance.getMetrics(projectKey, (error, data, response) => {
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

### Return type

[**MetricCollectionRep**](MetricCollectionRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## patchMetric

> MetricRep patchMetric(projectKey, metricKey, patchOperation)

Update metric

Patch a metric by key.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.MetricsApi();
let projectKey = "projectKey_example"; // String | The project key
let metricKey = "metricKey_example"; // String | The metric key
let patchOperation = [{"op":"replace","path":"/name","value":"my-updated-metric"}]; // [PatchOperation] | 
apiInstance.patchMetric(projectKey, metricKey, patchOperation, (error, data, response) => {
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
 **metricKey** | **String**| The metric key | 
 **patchOperation** | [**[PatchOperation]**](PatchOperation.md)|  | 

### Return type

[**MetricRep**](MetricRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postMetric

> MetricRep postMetric(projectKey, metricPost)

Create metric

Create a new metric in the specified project. The expected &#x60;POST&#x60; body differs depending on the specified &#x60;kind&#x60; property.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.MetricsApi();
let projectKey = "projectKey_example"; // String | The project key
let metricPost = {"eventKey":"trackedClick","isActive":true,"isNumeric":false,"key":"my-metric","kind":"custom"}; // MetricPost | 
apiInstance.postMetric(projectKey, metricPost, (error, data, response) => {
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
 **metricPost** | [**MetricPost**](MetricPost.md)|  | 

### Return type

[**MetricRep**](MetricRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

