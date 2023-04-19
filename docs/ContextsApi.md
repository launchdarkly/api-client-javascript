# LaunchDarklyApi.ContextsApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteContextInstances**](ContextsApi.md#deleteContextInstances) | **DELETE** /api/v2/projects/{projectKey}/environments/{environmentKey}/context-instances/{id} | Delete context instances
[**evaluateContextInstance**](ContextsApi.md#evaluateContextInstance) | **POST** /api/v2/projects/{projectKey}/environments/{environmentKey}/flags/evaluate | Evaluate flags for context instance
[**getContextAttributeNames**](ContextsApi.md#getContextAttributeNames) | **GET** /api/v2/projects/{projectKey}/environments/{environmentKey}/context-attributes | Get context attribute names
[**getContextAttributeValues**](ContextsApi.md#getContextAttributeValues) | **GET** /api/v2/projects/{projectKey}/environments/{environmentKey}/context-attributes/{attributeName} | Get context attribute values
[**getContextInstances**](ContextsApi.md#getContextInstances) | **GET** /api/v2/projects/{projectKey}/environments/{environmentKey}/context-instances/{id} | Get context instances
[**getContexts**](ContextsApi.md#getContexts) | **GET** /api/v2/projects/{projectKey}/environments/{environmentKey}/contexts/{kind}/{key} | Get contexts
[**searchContextInstances**](ContextsApi.md#searchContextInstances) | **POST** /api/v2/projects/{projectKey}/environments/{environmentKey}/context-instances/search | Search for context instances
[**searchContexts**](ContextsApi.md#searchContexts) | **POST** /api/v2/projects/{projectKey}/environments/{environmentKey}/contexts/search | Search for contexts



## deleteContextInstances

> deleteContextInstances(projectKey, environmentKey, id)

Delete context instances

Delete context instances by ID.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ContextsApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let id = "id_example"; // String | The context instance ID
apiInstance.deleteContextInstances(projectKey, environmentKey, id, (error, data, response) => {
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
 **environmentKey** | **String**| The environment key | 
 **id** | **String**| The context instance ID | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## evaluateContextInstance

> ContextInstanceEvaluations evaluateContextInstance(projectKey, environmentKey, requestBody, opts)

Evaluate flags for context instance

Evaluate flags for a context instance, for example, to determine the expected flag variation. **Do not use this API instead of an SDK.** The LaunchDarkly SDKs are specialized for the tasks of evaluating feature flags in your application at scale and generating analytics events based on those evaluations. This API is not designed for that use case. Any evaluations you perform with this API will not be reflected in features such as flag statuses and flag insights. Context instances evaluated by this API will not appear in the Contexts list. To learn more, read [Comparing LaunchDarkly&#39;s SDKs and REST API](https://docs.launchdarkly.com/guide/api/comparing-sdk-rest-api).

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ContextsApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let requestBody = {"key":"user-key-123abc","kind":"user","otherAttribute":"other attribute value"}; // {String: Object} | 
let opts = {
  'limit': 789, // Number | The number of feature flags to return. Defaults to -1, which returns all flags
  'offset': 789, // Number | Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`.
  'sort': "sort_example", // String | A comma-separated list of fields to sort by. Fields prefixed by a dash ( - ) sort in descending order
  'filter': "filter_example" // String | A comma-separated list of filters. Each filter is of the form field:value. Supports the same filters as the List Feature Flags API.
};
apiInstance.evaluateContextInstance(projectKey, environmentKey, requestBody, opts, (error, data, response) => {
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
 **environmentKey** | **String**| The environment key | 
 **requestBody** | [**{String: Object}**](Object.md)|  | 
 **limit** | **Number**| The number of feature flags to return. Defaults to -1, which returns all flags | [optional] 
 **offset** | **Number**| Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query &#x60;limit&#x60;. | [optional] 
 **sort** | **String**| A comma-separated list of fields to sort by. Fields prefixed by a dash ( - ) sort in descending order | [optional] 
 **filter** | **String**| A comma-separated list of filters. Each filter is of the form field:value. Supports the same filters as the List Feature Flags API. | [optional] 

### Return type

[**ContextInstanceEvaluations**](ContextInstanceEvaluations.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getContextAttributeNames

> ContextAttributeNamesCollection getContextAttributeNames(projectKey, environmentKey, opts)

Get context attribute names

Get context attribute names.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ContextsApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let opts = {
  'filter': "filter_example" // String | A comma-separated list of context filters. This endpoint only accepts `kind` filters, with the `equals` operator, and `name` filters, with the `startsWith` operator. To learn more about the filter syntax, read [Filtering contexts and context instances](/tag/Contexts-(beta)#filtering-contexts-and-context-instances).
};
apiInstance.getContextAttributeNames(projectKey, environmentKey, opts, (error, data, response) => {
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
 **environmentKey** | **String**| The environment key | 
 **filter** | **String**| A comma-separated list of context filters. This endpoint only accepts &#x60;kind&#x60; filters, with the &#x60;equals&#x60; operator, and &#x60;name&#x60; filters, with the &#x60;startsWith&#x60; operator. To learn more about the filter syntax, read [Filtering contexts and context instances](/tag/Contexts-(beta)#filtering-contexts-and-context-instances). | [optional] 

### Return type

[**ContextAttributeNamesCollection**](ContextAttributeNamesCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getContextAttributeValues

> ContextAttributeValuesCollection getContextAttributeValues(projectKey, environmentKey, attributeName, opts)

Get context attribute values

Get context attribute values.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ContextsApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let attributeName = "attributeName_example"; // String | The attribute name
let opts = {
  'filter': "filter_example" // String | A comma-separated list of context filters. This endpoint only accepts `kind` filters, with the `equals` operator, and `value` filters, with the `startsWith` operator. To learn more about the filter syntax, read [Filtering contexts and context instances](/tag/Contexts-(beta)#filtering-contexts-and-context-instances).
};
apiInstance.getContextAttributeValues(projectKey, environmentKey, attributeName, opts, (error, data, response) => {
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
 **environmentKey** | **String**| The environment key | 
 **attributeName** | **String**| The attribute name | 
 **filter** | **String**| A comma-separated list of context filters. This endpoint only accepts &#x60;kind&#x60; filters, with the &#x60;equals&#x60; operator, and &#x60;value&#x60; filters, with the &#x60;startsWith&#x60; operator. To learn more about the filter syntax, read [Filtering contexts and context instances](/tag/Contexts-(beta)#filtering-contexts-and-context-instances). | [optional] 

### Return type

[**ContextAttributeValuesCollection**](ContextAttributeValuesCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getContextInstances

> ContextInstances getContextInstances(projectKey, environmentKey, id, opts)

Get context instances

Get context instances by ID.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ContextsApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let id = "id_example"; // String | The context instance ID
let opts = {
  'limit': 789, // Number | Specifies the maximum number of context instances to return (max: 50, default: 20)
  'continuationToken': "continuationToken_example", // String | Limits results to context instances with sort values after the value specified. You can use this for pagination, however, we recommend using the `next` link we provide instead.
  'sort': "sort_example", // String | Specifies a field by which to sort. LaunchDarkly supports sorting by timestamp in ascending order by specifying `ts` for this value, or descending order by specifying `-ts`.
  'filter': "filter_example", // String | A comma-separated list of context filters. This endpoint only accepts an `applicationId` filter. To learn more about the filter syntax, read [Filtering contexts and context instances](/tag/Contexts-(beta)#filtering-contexts-and-context-instances).
  'includeTotalCount': true // Boolean | Specifies whether to include or omit the total count of matching context instances. Defaults to true.
};
apiInstance.getContextInstances(projectKey, environmentKey, id, opts, (error, data, response) => {
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
 **environmentKey** | **String**| The environment key | 
 **id** | **String**| The context instance ID | 
 **limit** | **Number**| Specifies the maximum number of context instances to return (max: 50, default: 20) | [optional] 
 **continuationToken** | **String**| Limits results to context instances with sort values after the value specified. You can use this for pagination, however, we recommend using the &#x60;next&#x60; link we provide instead. | [optional] 
 **sort** | **String**| Specifies a field by which to sort. LaunchDarkly supports sorting by timestamp in ascending order by specifying &#x60;ts&#x60; for this value, or descending order by specifying &#x60;-ts&#x60;. | [optional] 
 **filter** | **String**| A comma-separated list of context filters. This endpoint only accepts an &#x60;applicationId&#x60; filter. To learn more about the filter syntax, read [Filtering contexts and context instances](/tag/Contexts-(beta)#filtering-contexts-and-context-instances). | [optional] 
 **includeTotalCount** | **Boolean**| Specifies whether to include or omit the total count of matching context instances. Defaults to true. | [optional] 

### Return type

[**ContextInstances**](ContextInstances.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getContexts

> Contexts getContexts(projectKey, environmentKey, kind, key, opts)

Get contexts

Get contexts based on kind and key.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ContextsApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let kind = "kind_example"; // String | The context kind
let key = "key_example"; // String | The context key
let opts = {
  'limit': 789, // Number | Specifies the maximum number of items in the collection to return (max: 50, default: 20)
  'continuationToken': "continuationToken_example", // String | Limits results to contexts with sort values after the value specified. You can use this for pagination, however, we recommend using the `next` link we provide instead.
  'sort': "sort_example", // String | Specifies a field by which to sort. LaunchDarkly supports sorting by timestamp in ascending order by specifying `ts` for this value, or descending order by specifying `-ts`.
  'filter': "filter_example", // String | A comma-separated list of context filters. This endpoint only accepts an `applicationId` filter. To learn more about the filter syntax, read [Filtering contexts and context instances](/tag/Contexts-(beta)#filtering-contexts-and-context-instances).
  'includeTotalCount': true // Boolean | Specifies whether to include or omit the total count of matching contexts. Defaults to true.
};
apiInstance.getContexts(projectKey, environmentKey, kind, key, opts, (error, data, response) => {
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
 **environmentKey** | **String**| The environment key | 
 **kind** | **String**| The context kind | 
 **key** | **String**| The context key | 
 **limit** | **Number**| Specifies the maximum number of items in the collection to return (max: 50, default: 20) | [optional] 
 **continuationToken** | **String**| Limits results to contexts with sort values after the value specified. You can use this for pagination, however, we recommend using the &#x60;next&#x60; link we provide instead. | [optional] 
 **sort** | **String**| Specifies a field by which to sort. LaunchDarkly supports sorting by timestamp in ascending order by specifying &#x60;ts&#x60; for this value, or descending order by specifying &#x60;-ts&#x60;. | [optional] 
 **filter** | **String**| A comma-separated list of context filters. This endpoint only accepts an &#x60;applicationId&#x60; filter. To learn more about the filter syntax, read [Filtering contexts and context instances](/tag/Contexts-(beta)#filtering-contexts-and-context-instances). | [optional] 
 **includeTotalCount** | **Boolean**| Specifies whether to include or omit the total count of matching contexts. Defaults to true. | [optional] 

### Return type

[**Contexts**](Contexts.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchContextInstances

> ContextInstances searchContextInstances(projectKey, environmentKey, contextInstanceSearch, opts)

Search for context instances

 Search for context instances.  You can use either the query parameters or the request body parameters. If both are provided, there is an error.  To learn more about the filter syntax, read [Filtering contexts and context instances](/tag/Contexts-(beta)#filtering-contexts-and-context-instances). To learn more about context instances, read [Understanding context instances](https://docs.launchdarkly.com/home/contexts#understanding-context-instances). 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ContextsApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let contextInstanceSearch = new LaunchDarklyApi.ContextInstanceSearch(); // ContextInstanceSearch | 
let opts = {
  'limit': 789, // Number | Specifies the maximum number of items in the collection to return (max: 50, default: 20)
  'continuationToken': "continuationToken_example", // String | Limits results to context instances with sort values after the value specified. You can use this for pagination, however, we recommend using the `next` link we provide instead.
  'sort': "sort_example", // String | Specifies a field by which to sort. LaunchDarkly supports sorting by timestamp in ascending order by specifying `ts` for this value, or descending order by specifying `-ts`.
  'filter': "filter_example", // String | A comma-separated list of context filters. This endpoint only accepts an `applicationId` filter. To learn more about the filter syntax, read [Filtering contexts and context instances](/tag/Contexts-(beta)#filtering-contexts-and-context-instances).
  'includeTotalCount': true // Boolean | Specifies whether to include or omit the total count of matching context instances. Defaults to true.
};
apiInstance.searchContextInstances(projectKey, environmentKey, contextInstanceSearch, opts, (error, data, response) => {
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
 **environmentKey** | **String**| The environment key | 
 **contextInstanceSearch** | [**ContextInstanceSearch**](ContextInstanceSearch.md)|  | 
 **limit** | **Number**| Specifies the maximum number of items in the collection to return (max: 50, default: 20) | [optional] 
 **continuationToken** | **String**| Limits results to context instances with sort values after the value specified. You can use this for pagination, however, we recommend using the &#x60;next&#x60; link we provide instead. | [optional] 
 **sort** | **String**| Specifies a field by which to sort. LaunchDarkly supports sorting by timestamp in ascending order by specifying &#x60;ts&#x60; for this value, or descending order by specifying &#x60;-ts&#x60;. | [optional] 
 **filter** | **String**| A comma-separated list of context filters. This endpoint only accepts an &#x60;applicationId&#x60; filter. To learn more about the filter syntax, read [Filtering contexts and context instances](/tag/Contexts-(beta)#filtering-contexts-and-context-instances). | [optional] 
 **includeTotalCount** | **Boolean**| Specifies whether to include or omit the total count of matching context instances. Defaults to true. | [optional] 

### Return type

[**ContextInstances**](ContextInstances.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## searchContexts

> Contexts searchContexts(projectKey, environmentKey, contextSearch, opts)

Search for contexts

 Search for contexts.  You can use either the query parameters or the request body parameters. If both are provided, there is an error.  To learn more about the filter syntax, read [Filtering contexts and context instances](/tag/Contexts-(beta)#filtering-contexts-and-context-instances). To learn more about contexts, read [Understanding contexts and context kinds](https://docs.launchdarkly.com/home/contexts#understanding-contexts-and-context-kinds). 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ContextsApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let contextSearch = new LaunchDarklyApi.ContextSearch(); // ContextSearch | 
let opts = {
  'limit': 789, // Number | Specifies the maximum number of items in the collection to return (max: 50, default: 20)
  'continuationToken': "continuationToken_example", // String | Limits results to contexts with sort values after the value specified. You can use this for pagination, however, we recommend using the `next` link we provide instead.
  'sort': "sort_example", // String | Specifies a field by which to sort. LaunchDarkly supports sorting by timestamp in ascending order by specifying `ts` for this value, or descending order by specifying `-ts`.
  'filter': "filter_example", // String | A comma-separated list of context filters. To learn more about the filter syntax, read [Filtering contexts and context instances](/tag/Contexts-(beta)#filtering-contexts-and-context-instances).
  'includeTotalCount': true // Boolean | Specifies whether to include or omit the total count of matching contexts. Defaults to true.
};
apiInstance.searchContexts(projectKey, environmentKey, contextSearch, opts, (error, data, response) => {
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
 **environmentKey** | **String**| The environment key | 
 **contextSearch** | [**ContextSearch**](ContextSearch.md)|  | 
 **limit** | **Number**| Specifies the maximum number of items in the collection to return (max: 50, default: 20) | [optional] 
 **continuationToken** | **String**| Limits results to contexts with sort values after the value specified. You can use this for pagination, however, we recommend using the &#x60;next&#x60; link we provide instead. | [optional] 
 **sort** | **String**| Specifies a field by which to sort. LaunchDarkly supports sorting by timestamp in ascending order by specifying &#x60;ts&#x60; for this value, or descending order by specifying &#x60;-ts&#x60;. | [optional] 
 **filter** | **String**| A comma-separated list of context filters. To learn more about the filter syntax, read [Filtering contexts and context instances](/tag/Contexts-(beta)#filtering-contexts-and-context-instances). | [optional] 
 **includeTotalCount** | **Boolean**| Specifies whether to include or omit the total count of matching contexts. Defaults to true. | [optional] 

### Return type

[**Contexts**](Contexts.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

