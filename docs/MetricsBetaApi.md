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

Get a list of all metric groups for the specified project.  ### Expanding the metric groups response LaunchDarkly supports one field for expanding the \&quot;Get metric groups\&quot; response. By default, these fields are **not** included in the response.  To expand the response, append the &#x60;expand&#x60; query parameter and add a comma-separated list with the following field:  - &#x60;experiments&#x60; includes all experiments from the specific project that use the metric group  For example, &#x60;expand&#x3D;experiments&#x60; includes the &#x60;experiments&#x60; field in the response.  ### Filtering metric groups  The &#x60;filter&#x60; parameter supports the &#x60;equals&#x60; operator on the following fields: &#x60;experimentStatus&#x60;, &#x60;query&#x60;.  The &#x60;experimentStatus&#x60; field supports the following values: &#x60;not_started&#x60;, &#x60;running&#x60;, &#x60;stopped&#x60;, and &#x60;started&#x60;. The &#x60;query&#x60; field is a search query that is compared against the metric group name and key.   #### Sample query  &#x60;filter&#x3D;experimentStatus equals &#39;not_started&#39; and query equals &#39;metric name&#39;&#x60; 

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
  'filter': "filter_example", // String | Accepts filter by `experimentStatus` and `query`. Example: `filter=experimentStatus equals 'running' and query equals 'test'`.
  'expand': "expand_example", // String | A comma-separated list of properties that can reveal additional information in the response.
  'limit': 789, // Number | The number of metric groups to return in the response. Defaults to 20. Maximum limit is 50.
  'offset': 789 // Number | Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and returns the next `limit` items.
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
 **filter** | **String**| Accepts filter by &#x60;experimentStatus&#x60; and &#x60;query&#x60;. Example: &#x60;filter&#x3D;experimentStatus equals &#39;running&#39; and query equals &#39;test&#39;&#x60;. | [optional] 
 **expand** | **String**| A comma-separated list of properties that can reveal additional information in the response. | [optional] 
 **limit** | **Number**| The number of metric groups to return in the response. Defaults to 20. Maximum limit is 50. | [optional] 
 **offset** | **Number**| Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and returns the next &#x60;limit&#x60; items. | [optional] 

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

