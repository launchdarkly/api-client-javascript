# LaunchDarklyApi.ViewsBetaApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createView**](ViewsBetaApi.md#createView) | **POST** /api/v2/projects/{projectKey}/views | Create view
[**deleteView**](ViewsBetaApi.md#deleteView) | **DELETE** /api/v2/projects/{projectKey}/views/{viewKey} | Delete view
[**getLinkedResources**](ViewsBetaApi.md#getLinkedResources) | **GET** /api/v2/projects/{projectKey}/views/{viewKey}/linked/{resourceType} | Get linked resources
[**getLinkedViews**](ViewsBetaApi.md#getLinkedViews) | **GET** /api/v2/projects/{projectKey}/view-associations/{resourceType}/{resourceKey} | Get linked views for a given resource
[**getView**](ViewsBetaApi.md#getView) | **GET** /api/v2/projects/{projectKey}/views/{viewKey} | Get view
[**getViews**](ViewsBetaApi.md#getViews) | **GET** /api/v2/projects/{projectKey}/views | List views
[**linkResource**](ViewsBetaApi.md#linkResource) | **POST** /api/v2/projects/{projectKey}/views/{viewKey}/link/{resourceType} | Link resource
[**unlinkResource**](ViewsBetaApi.md#unlinkResource) | **DELETE** /api/v2/projects/{projectKey}/views/{viewKey}/link/{resourceType} | Unlink resource
[**updateView**](ViewsBetaApi.md#updateView) | **PATCH** /api/v2/projects/{projectKey}/views/{viewKey} | Update view



## createView

> View createView(lDAPIVersion, projectKey, viewPost)

Create view

Create a new view in the given project.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ViewsBetaApi();
let lDAPIVersion = "lDAPIVersion_example"; // String | Version of the endpoint.
let projectKey = "default"; // String | 
let viewPost = new LaunchDarklyApi.ViewPost(); // ViewPost | View object to create
apiInstance.createView(lDAPIVersion, projectKey, viewPost, (error, data, response) => {
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
 **lDAPIVersion** | **String**| Version of the endpoint. | 
 **projectKey** | **String**|  | 
 **viewPost** | [**ViewPost**](ViewPost.md)| View object to create | 

### Return type

[**View**](View.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteView

> deleteView(lDAPIVersion, projectKey, viewKey)

Delete view

Delete a specific view by its key.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ViewsBetaApi();
let lDAPIVersion = "lDAPIVersion_example"; // String | Version of the endpoint.
let projectKey = "default"; // String | 
let viewKey = "my-view"; // String | 
apiInstance.deleteView(lDAPIVersion, projectKey, viewKey, (error, data, response) => {
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
 **lDAPIVersion** | **String**| Version of the endpoint. | 
 **projectKey** | **String**|  | 
 **viewKey** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLinkedResources

> ViewLinkedResources getLinkedResources(lDAPIVersion, projectKey, viewKey, resourceType, opts)

Get linked resources

Get a list of all linked resources for a given view.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ViewsBetaApi();
let lDAPIVersion = "lDAPIVersion_example"; // String | Version of the endpoint.
let projectKey = "default"; // String | 
let viewKey = "my-view"; // String | 
let resourceType = "flags"; // String | 
let opts = {
  'limit': 56, // Number | The number of views to return.
  'offset': 56, // Number | Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`.
  'sort': "'linkedAt'" // String | Field to sort by. Default field is `linkedAt`, default order is ascending.
};
apiInstance.getLinkedResources(lDAPIVersion, projectKey, viewKey, resourceType, opts, (error, data, response) => {
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
 **lDAPIVersion** | **String**| Version of the endpoint. | 
 **projectKey** | **String**|  | 
 **viewKey** | **String**|  | 
 **resourceType** | **String**|  | 
 **limit** | **Number**| The number of views to return. | [optional] 
 **offset** | **Number**| Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query &#x60;limit&#x60;. | [optional] 
 **sort** | **String**| Field to sort by. Default field is &#x60;linkedAt&#x60;, default order is ascending. | [optional] [default to &#39;linkedAt&#39;]

### Return type

[**ViewLinkedResources**](ViewLinkedResources.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLinkedViews

> Views getLinkedViews(lDAPIVersion, projectKey, resourceType, resourceKey, opts)

Get linked views for a given resource

Get a list of all linked views for a resource. Flags, AI configs and metrics are identified by key. Segments are identified by segment ID.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ViewsBetaApi();
let lDAPIVersion = "lDAPIVersion_example"; // String | Version of the endpoint.
let projectKey = "default"; // String | 
let resourceType = "flags"; // String | 
let resourceKey = "my-flag"; // String | 
let opts = {
  'environmentId': "6890ff25c3e3830ba1a352e4", // String | Environment ID. Required when resourceType is 'segments'
  'limit': 56, // Number | The number of views to return.
  'offset': 56 // Number | Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`.
};
apiInstance.getLinkedViews(lDAPIVersion, projectKey, resourceType, resourceKey, opts, (error, data, response) => {
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
 **lDAPIVersion** | **String**| Version of the endpoint. | 
 **projectKey** | **String**|  | 
 **resourceType** | **String**|  | 
 **resourceKey** | **String**|  | 
 **environmentId** | **String**| Environment ID. Required when resourceType is &#39;segments&#39; | [optional] 
 **limit** | **Number**| The number of views to return. | [optional] 
 **offset** | **Number**| Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query &#x60;limit&#x60;. | [optional] 

### Return type

[**Views**](Views.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getView

> View getView(lDAPIVersion, projectKey, viewKey, opts)

Get view

Retrieve a specific view by its key.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ViewsBetaApi();
let lDAPIVersion = "lDAPIVersion_example"; // String | Version of the endpoint.
let projectKey = "default"; // String | 
let viewKey = "my-view"; // String | 
let opts = {
  'sort': "sort_example", // String | A sort to apply to the list of views.
  'limit': 56, // Number | The number of views to return.
  'offset': 56, // Number | Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`.
  'filter': "filter_example", // String | A filter to apply to the list of views.
  'expand': ["null"] // [String] | A comma-separated list of fields to expand.
};
apiInstance.getView(lDAPIVersion, projectKey, viewKey, opts, (error, data, response) => {
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
 **lDAPIVersion** | **String**| Version of the endpoint. | 
 **projectKey** | **String**|  | 
 **viewKey** | **String**|  | 
 **sort** | **String**| A sort to apply to the list of views. | [optional] 
 **limit** | **Number**| The number of views to return. | [optional] 
 **offset** | **Number**| Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query &#x60;limit&#x60;. | [optional] 
 **filter** | **String**| A filter to apply to the list of views. | [optional] 
 **expand** | [**[String]**](String.md)| A comma-separated list of fields to expand. | [optional] 

### Return type

[**View**](View.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getViews

> Views getViews(lDAPIVersion, projectKey, opts)

List views

Get a list of all views in the given project.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ViewsBetaApi();
let lDAPIVersion = "lDAPIVersion_example"; // String | Version of the endpoint.
let projectKey = "default"; // String | 
let opts = {
  'sort': "sort_example", // String | A sort to apply to the list of views.
  'limit': 56, // Number | The number of views to return.
  'offset': 56, // Number | Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`.
  'filter': "filter_example", // String | A filter to apply to the list of views.
  'expand': ["null"] // [String] | A comma-separated list of fields to expand.
};
apiInstance.getViews(lDAPIVersion, projectKey, opts, (error, data, response) => {
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
 **lDAPIVersion** | **String**| Version of the endpoint. | 
 **projectKey** | **String**|  | 
 **sort** | **String**| A sort to apply to the list of views. | [optional] 
 **limit** | **Number**| The number of views to return. | [optional] 
 **offset** | **Number**| Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query &#x60;limit&#x60;. | [optional] 
 **filter** | **String**| A filter to apply to the list of views. | [optional] 
 **expand** | [**[String]**](String.md)| A comma-separated list of fields to expand. | [optional] 

### Return type

[**Views**](Views.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## linkResource

> LinkResourceSuccessResponse linkResource(lDAPIVersion, projectKey, viewKey, resourceType, viewLinkRequest)

Link resource

Link one or multiple resources to a view: - Link flags using flag keys - Link AI configs using AI config keys - Link metrics using metric keys - Link segments using segment IDs 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ViewsBetaApi();
let lDAPIVersion = "lDAPIVersion_example"; // String | Version of the endpoint.
let projectKey = "default"; // String | 
let viewKey = "my-view"; // String | 
let resourceType = "flags"; // String | 
let viewLinkRequest = new LaunchDarklyApi.ViewLinkRequest(); // ViewLinkRequest | The resource to link to the view. Flags are identified by key. Segments are identified by segment ID.
apiInstance.linkResource(lDAPIVersion, projectKey, viewKey, resourceType, viewLinkRequest, (error, data, response) => {
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
 **lDAPIVersion** | **String**| Version of the endpoint. | 
 **projectKey** | **String**|  | 
 **viewKey** | **String**|  | 
 **resourceType** | **String**|  | 
 **viewLinkRequest** | [**ViewLinkRequest**](ViewLinkRequest.md)| The resource to link to the view. Flags are identified by key. Segments are identified by segment ID. | 

### Return type

[**LinkResourceSuccessResponse**](LinkResourceSuccessResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## unlinkResource

> UnlinkResourceSuccessResponse unlinkResource(lDAPIVersion, projectKey, viewKey, resourceType, viewLinkRequest)

Unlink resource

Unlink one or multiple resources from a view: - Unlink flags using flag keys - Unlink segments using segment IDs - Unlink AI configs using AI config keys - Unlink metrics using metric keys 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ViewsBetaApi();
let lDAPIVersion = "lDAPIVersion_example"; // String | Version of the endpoint.
let projectKey = "default"; // String | 
let viewKey = "my-view"; // String | 
let resourceType = "flags"; // String | 
let viewLinkRequest = new LaunchDarklyApi.ViewLinkRequest(); // ViewLinkRequest | The resource to link to the view. Flags are identified by key. Segments are identified by segment ID.
apiInstance.unlinkResource(lDAPIVersion, projectKey, viewKey, resourceType, viewLinkRequest, (error, data, response) => {
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
 **lDAPIVersion** | **String**| Version of the endpoint. | 
 **projectKey** | **String**|  | 
 **viewKey** | **String**|  | 
 **resourceType** | **String**|  | 
 **viewLinkRequest** | [**ViewLinkRequest**](ViewLinkRequest.md)| The resource to link to the view. Flags are identified by key. Segments are identified by segment ID. | 

### Return type

[**UnlinkResourceSuccessResponse**](UnlinkResourceSuccessResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateView

> View updateView(lDAPIVersion, projectKey, viewKey, viewPatch)

Update view

Edit an existing view.  The request body must be a JSON object of the fields to update. The values you include replace the existing values for the fields.  Here&#39;s an example:   &#x60;&#x60;&#x60;     {       \&quot;description\&quot;: \&quot;Example updated description\&quot;,       \&quot;tags\&quot;: [\&quot;new-tag\&quot;]     }   &#x60;&#x60;&#x60; 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ViewsBetaApi();
let lDAPIVersion = "lDAPIVersion_example"; // String | Version of the endpoint.
let projectKey = "default"; // String | 
let viewKey = "my-view"; // String | 
let viewPatch = new LaunchDarklyApi.ViewPatch(); // ViewPatch | A JSON representation of the view including only the fields to update.
apiInstance.updateView(lDAPIVersion, projectKey, viewKey, viewPatch, (error, data, response) => {
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
 **lDAPIVersion** | **String**| Version of the endpoint. | 
 **projectKey** | **String**|  | 
 **viewKey** | **String**|  | 
 **viewPatch** | [**ViewPatch**](ViewPatch.md)| A JSON representation of the view including only the fields to update. | 

### Return type

[**View**](View.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

