# LaunchDarklyApi.MetricsBetaApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createMetricGroup**](MetricsBetaApi.md#createMetricGroup) | **POST** /api/v2/projects/{projectKey}/metric-groups | Create metric group
[**deleteMetricGroup**](MetricsBetaApi.md#deleteMetricGroup) | **DELETE** /api/v2/projects/{projectKey}/metric-groups/{metricGroupKey} | Delete metric group
[**getMetricGroup**](MetricsBetaApi.md#getMetricGroup) | **GET** /api/v2/projects/{projectKey}/metric-groups/{metricGroupKey} | Get metric group
[**getMetricGroups**](MetricsBetaApi.md#getMetricGroups) | **GET** /api/v2/projects/{projectKey}/metric-groups | List metric groups
[**patchMetricGroup**](MetricsBetaApi.md#patchMetricGroup) | **PATCH** /api/v2/projects/{projectKey}/metric-groups/{metricGroupKey} | Patch metric group



## createMetricGroup

> MetricGroupRep createMetricGroup(projectKey, metricGroupPost)

Create metric group

Create a new metric group in the specified project

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.MetricsBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let metricGroupPost = new LaunchDarklyApi.MetricGroupPost(); // MetricGroupPost | 
apiInstance.createMetricGroup(projectKey, metricGroupPost, (error, data, response) => {
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
 **metricGroupPost** | [**MetricGroupPost**](MetricGroupPost.md)|  | 

### Return type

[**MetricGroupRep**](MetricGroupRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteMetricGroup

> deleteMetricGroup(projectKey, metricGroupKey)

Delete metric group

Delete a metric group by key.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.MetricsBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let metricGroupKey = "metricGroupKey_example"; // String | The metric group key
apiInstance.deleteMetricGroup(projectKey, metricGroupKey, (error, data, response) => {
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
 **metricGroupKey** | **String**| The metric group key | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMetricGroup

> MetricGroupRep getMetricGroup(projectKey, metricGroupKey, opts)

Get metric group

Get information for a single metric group from the specific project.  ### Expanding the metric group response LaunchDarkly supports two fields for expanding the \&quot;Get metric group\&quot; response. By default, these fields are **not** included in the response.  To expand the response, append the &#x60;expand&#x60; query parameter and add a comma-separated list with either or both of the following fields:  - &#x60;experiments&#x60; includes all experiments from the specific project that use the metric group - &#x60;experimentCount&#x60; includes the number of experiments from the specific project that use the metric group  For example, &#x60;expand&#x3D;experiments&#x60; includes the &#x60;experiments&#x60; field in the response. 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.MetricsBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let metricGroupKey = "metricGroupKey_example"; // String | The metric group key
let opts = {
  'expand': "expand_example" // String | A comma-separated list of properties that can reveal additional information in the response.
};
apiInstance.getMetricGroup(projectKey, metricGroupKey, opts, (error, data, response) => {
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
 **metricGroupKey** | **String**| The metric group key | 
 **expand** | **String**| A comma-separated list of properties that can reveal additional information in the response. | [optional] 

### Return type

[**MetricGroupRep**](MetricGroupRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMetricGroups

> MetricGroupCollectionRep getMetricGroups(projectKey, opts)

List metric groups

Get a list of all metric groups for the specified project.  ### Expanding the metric groups response LaunchDarkly supports one field for expanding the \&quot;Get metric groups\&quot; response. By default, these fields are **not** included in the response.  To expand the response, append the &#x60;expand&#x60; query parameter and add a comma-separated list with the following field:  - &#x60;experiments&#x60; includes all experiments from the specific project that use the metric group  For example, &#x60;expand&#x3D;experiments&#x60; includes the &#x60;experiments&#x60; field in the response. 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.MetricsBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let opts = {
  'expand': "expand_example" // String | A comma-separated list of properties that can reveal additional information in the response.
};
apiInstance.getMetricGroups(projectKey, opts, (error, data, response) => {
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

[**MetricGroupCollectionRep**](MetricGroupCollectionRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## patchMetricGroup

> MetricGroupRep patchMetricGroup(projectKey, metricGroupKey, patchOperation)

Patch metric group

Patch a metric group by key. Updating a metric group uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.MetricsBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let metricGroupKey = "metricGroupKey_example"; // String | The metric group key
let patchOperation = [{"op":"replace","path":"/name","value":"my-updated-metric-group"}]; // [PatchOperation] | 
apiInstance.patchMetricGroup(projectKey, metricGroupKey, patchOperation, (error, data, response) => {
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
 **metricGroupKey** | **String**| The metric group key | 
 **patchOperation** | [**[PatchOperation]**](PatchOperation.md)|  | 

### Return type

[**MetricGroupRep**](MetricGroupRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

