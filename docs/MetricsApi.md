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

> MetricRep getMetric(projectKey, metricKey, opts)

Get metric

Get information for a single metric from the specific project.  ### Expanding the metric response LaunchDarkly supports two fields for expanding the \&quot;Get metric\&quot; response. By default, these fields are **not** included in the response.  To expand the response, append the &#x60;expand&#x60; query parameter and add a comma-separated list with any of the following fields:  - &#x60;experiments&#x60; includes all experiments from the specific project that use the metric - &#x60;experimentCount&#x60; includes the number of experiments from the specific project that use the metric  For example, &#x60;expand&#x3D;experiments&#x60; includes the &#x60;experiments&#x60; field in the response. 

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
let opts = {
  'expand': "expand_example" // String | A comma-separated list of properties that can reveal additional information in the response.
};
apiInstance.getMetric(projectKey, metricKey, opts, (error, data, response) => {
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
 **expand** | **String**| A comma-separated list of properties that can reveal additional information in the response. | [optional] 

### Return type

[**MetricRep**](MetricRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMetrics

> MetricCollectionRep getMetrics(projectKey, opts)

List metrics

Get a list of all metrics for the specified project.  ### Expanding the metric list response LaunchDarkly supports expanding the \&quot;List metrics\&quot; response. By default, the expandable field is **not** included in the response.  To expand the response, append the &#x60;expand&#x60; query parameter and add the following supported field:  - &#x60;experimentCount&#x60; includes the number of experiments from the specific project that use the metric  For example, &#x60;expand&#x3D;experimentCount&#x60; includes the &#x60;experimentCount&#x60; field for each metric in the response. 

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
let opts = {
  'expand': "expand_example" // String | A comma-separated list of properties that can reveal additional information in the response.
};
apiInstance.getMetrics(projectKey, opts, (error, data, response) => {
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
 **expand** | **String**| A comma-separated list of properties that can reveal additional information in the response. | [optional] 

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

Patch a metric by key. Updating a metric uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](/#section/Overview/Updates).

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
let metricPost = {"eventKey":"trackedClick","isActive":true,"isNumeric":false,"key":"metric-key-123abc","kind":"custom"}; // MetricPost | 
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

