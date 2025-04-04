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

Get information for a single metric from the specific project.  ### Expanding the metric response LaunchDarkly supports four fields for expanding the \&quot;Get metric\&quot; response. By default, these fields are **not** included in the response.  To expand the response, append the &#x60;expand&#x60; query parameter and add a comma-separated list with any of the following fields:  - &#x60;experiments&#x60; includes all experiments from the specific project that use the metric - &#x60;experimentCount&#x60; includes the number of experiments from the specific project that use the metric - &#x60;metricGroups&#x60; includes all metric groups from the specific project that use the metric - &#x60;metricGroupCount&#x60; includes the number of metric groups from the specific project that use the metric  For example, &#x60;expand&#x3D;experiments&#x60; includes the &#x60;experiments&#x60; field in the response. 

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
  'expand': "expand_example", // String | A comma-separated list of properties that can reveal additional information in the response.
  'versionId': "versionId_example" // String | The specific version ID of the metric
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
 **versionId** | **String**| The specific version ID of the metric | [optional] 

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

Get a list of all metrics for the specified project.  ### Filtering metrics  The &#x60;filter&#x60; parameter supports the following operators: &#x60;contains&#x60;, &#x60;equals&#x60;, &#x60;anyOf&#x60;.  #### Supported fields and operators  You can only filter certain fields in metrics when using the &#x60;filter&#x60; parameter. Additionally, you can only filter some fields with certain operators.  When you search for metrics, the &#x60;filter&#x60; parameter supports the following fields and operators:  |&lt;div style&#x3D;\&quot;width:120px\&quot;&gt;Field&lt;/div&gt; |Description |Supported operators | |---|---|---| | &#x60;eventKind&#x60; | The metric event kind. One of &#x60;custom&#x60;, &#x60;pageview&#x60;, &#x60;click&#x60;. | &#x60;equals&#x60; | | &#x60;hasConnections&#x60; | Whether the metric has connections to experiments or guarded rollouts. One of &#x60;true&#x60;, &#x60;false&#x60;. | &#x60;equals&#x60; | | &#x60;isNumeric&#x60; | Whether the metric is numeric. One of &#x60;true&#x60;, &#x60;false&#x60;. | &#x60;equals&#x60; | | &#x60;maintainerIds&#x60; | A comma-separated list of metric maintainer IDs. | &#x60;anyOf&#x60; | | &#x60;maintainerTeamKey&#x60; | The metric maintainer team key. | &#x60;equals&#x60; | | &#x60;query&#x60; | A \&quot;fuzzy\&quot; search across metric key and name. Supply a string or list of strings to the operator. | &#x60;equals&#x60; | | &#x60;tags&#x60; | The metric tags. | &#x60;contains&#x60; | | &#x60;unitAggregationType&#x60; | The metric&#39;s unit aggregation type. One of &#x60;sum&#x60;, &#x60;average&#x60;. | &#x60;equals&#x60; |  For example, the filter &#x60;?filter&#x3D;tags contains [\&quot;tag1\&quot;, \&quot;tag2\&quot;, \&quot;tag3\&quot;]&#x60; matches metrics that have all three tags.  The documented values for &#x60;filter&#x60; query parameters are prior to URL encoding. For example, the &#x60;[&#x60; in &#x60;?filter&#x3D;tags contains [\&quot;tag1\&quot;, \&quot;tag2\&quot;, \&quot;tag3\&quot;]&#x60; must be encoded to &#x60;%5B&#x60;.  ### Expanding the metric list response  LaunchDarkly supports expanding the \&quot;List metrics\&quot; response. By default, the expandable field is **not** included in the response.  To expand the response, append the &#x60;expand&#x60; query parameter and add the following supported field:  - &#x60;experimentCount&#x60; includes the number of experiments from the specific project that use the metric  For example, &#x60;expand&#x3D;experimentCount&#x60; includes the &#x60;experimentCount&#x60; field for each metric in the response. 

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
  'expand': "expand_example", // String | A comma-separated list of properties that can reveal additional information in the response.
  'limit': 789, // Number | The number of metrics to return in the response. Defaults to 20. Maximum limit is 50.
  'offset': 789, // Number | Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and returns the next `limit` items.
  'sort': "sort_example", // String | A field to sort the items by. Prefix field by a dash ( - ) to sort in descending order. This endpoint supports sorting by `createdAt` or `name`.
  'filter': "filter_example" // String | A comma-separated list of filters. This endpoint accepts filtering by `query`, `tags`, 'eventKind', 'isNumeric', 'unitAggregationType`, `hasConnections`, `maintainerIds`, and `maintainerTeamKey`. To learn more about the filter syntax, read the 'Filtering metrics' section above.
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
 **limit** | **Number**| The number of metrics to return in the response. Defaults to 20. Maximum limit is 50. | [optional] 
 **offset** | **Number**| Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and returns the next &#x60;limit&#x60; items. | [optional] 
 **sort** | **String**| A field to sort the items by. Prefix field by a dash ( - ) to sort in descending order. This endpoint supports sorting by &#x60;createdAt&#x60; or &#x60;name&#x60;. | [optional] 
 **filter** | **String**| A comma-separated list of filters. This endpoint accepts filtering by &#x60;query&#x60;, &#x60;tags&#x60;, &#39;eventKind&#39;, &#39;isNumeric&#39;, &#39;unitAggregationType&#x60;, &#x60;hasConnections&#x60;, &#x60;maintainerIds&#x60;, and &#x60;maintainerTeamKey&#x60;. To learn more about the filter syntax, read the &#39;Filtering metrics&#39; section above. | [optional] 

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

Patch a metric by key. Updating a metric uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).

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
let metricPost = {"eventKey":"Order placed","isNumeric":false,"key":"metric-key-123abc","kind":"custom"}; // MetricPost | 
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

