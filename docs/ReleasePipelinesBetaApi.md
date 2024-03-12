# LaunchDarklyApi.ReleasePipelinesBetaApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteReleasePipeline**](ReleasePipelinesBetaApi.md#deleteReleasePipeline) | **DELETE** /api/v2/projects/{projectKey}/release-pipelines/{pipelineKey} | Delete release pipeline
[**getAllReleasePipelines**](ReleasePipelinesBetaApi.md#getAllReleasePipelines) | **GET** /api/v2/projects/{projectKey}/release-pipelines | Get all release pipelines
[**getReleasePipelineByKey**](ReleasePipelinesBetaApi.md#getReleasePipelineByKey) | **GET** /api/v2/projects/{projectKey}/release-pipelines/{pipelineKey} | Get release pipeline by key
[**patchReleasePipeline**](ReleasePipelinesBetaApi.md#patchReleasePipeline) | **PATCH** /api/v2/projects/{projectKey}/release-pipelines/{pipelineKey} | Update a release pipeline
[**postReleasePipeline**](ReleasePipelinesBetaApi.md#postReleasePipeline) | **POST** /api/v2/projects/{projectKey}/release-pipelines | Create a release pipeline



## deleteReleasePipeline

> deleteReleasePipeline(projectKey, pipelineKey)

Delete release pipeline

Deletes a release pipeline.  You cannot delete the default release pipeline.  If you want to delete a release pipeline that is currently the default, create a second release pipeline and set it as the default. Then delete the first release pipeline. To change the default release pipeline, use the [Update project](/tag/Projects#operation/patchProject) API to set the &#x60;defaultReleasePipelineKey&#x60;. 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ReleasePipelinesBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let pipelineKey = "pipelineKey_example"; // String | The release pipeline key
apiInstance.deleteReleasePipeline(projectKey, pipelineKey, (error, data, response) => {
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
 **pipelineKey** | **String**| The release pipeline key | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllReleasePipelines

> ReleasePipelineCollection getAllReleasePipelines(projectKey, opts)

Get all release pipelines

Get all release pipelines for a project.  ### Filtering release pipelines  LaunchDarkly supports the following fields for filters:  - &#x60;query&#x60; is a string that matches against the release pipeline &#x60;key&#x60;, &#x60;name&#x60;, and &#x60;description&#x60;. It is not case sensitive. For example: &#x60;?filter&#x3D;query:examplePipeline&#x60;. 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ReleasePipelinesBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let opts = {
  'filter': "filter_example", // String | A comma-separated list of filters. Each filter is of the form field:value. Read the endpoint description for a full list of available filter fields.
  'limit': 789, // Number | The maximum number of items to return. Defaults to 20.
  'offset': 789 // Number | Where to start in the list. Defaults to 0. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`.
};
apiInstance.getAllReleasePipelines(projectKey, opts, (error, data, response) => {
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
 **filter** | **String**| A comma-separated list of filters. Each filter is of the form field:value. Read the endpoint description for a full list of available filter fields. | [optional] 
 **limit** | **Number**| The maximum number of items to return. Defaults to 20. | [optional] 
 **offset** | **Number**| Where to start in the list. Defaults to 0. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query &#x60;limit&#x60;. | [optional] 

### Return type

[**ReleasePipelineCollection**](ReleasePipelineCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getReleasePipelineByKey

> ReleasePipeline getReleasePipelineByKey(projectKey, pipelineKey)

Get release pipeline by key

Get a release pipeline by key

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ReleasePipelinesBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let pipelineKey = "pipelineKey_example"; // String | The release pipeline key
apiInstance.getReleasePipelineByKey(projectKey, pipelineKey, (error, data, response) => {
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
 **pipelineKey** | **String**| The release pipeline key | 

### Return type

[**ReleasePipeline**](ReleasePipeline.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## patchReleasePipeline

> ReleasePipeline patchReleasePipeline(projectKey, pipelineKey)

Update a release pipeline

Updates a release pipeline. Updating a release pipeline uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](/#section/Overview/Updates).

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ReleasePipelinesBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let pipelineKey = "pipelineKey_example"; // String | The release pipeline key
apiInstance.patchReleasePipeline(projectKey, pipelineKey, (error, data, response) => {
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
 **pipelineKey** | **String**| The release pipeline key | 

### Return type

[**ReleasePipeline**](ReleasePipeline.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postReleasePipeline

> ReleasePipeline postReleasePipeline(projectKey, createReleasePipelineInput)

Create a release pipeline

Creates a new release pipeline.  The first release pipeline you create is automatically set as the default release pipeline for your project. To change the default release pipeline, use the [Update project](/tag/Projects#operation/patchProject) API to set the &#x60;defaultReleasePipelineKey&#x60;.  You can create up to 20 release pipelines per project. 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ReleasePipelinesBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let createReleasePipelineInput = new LaunchDarklyApi.CreateReleasePipelineInput(); // CreateReleasePipelineInput | 
apiInstance.postReleasePipeline(projectKey, createReleasePipelineInput, (error, data, response) => {
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
 **createReleasePipelineInput** | [**CreateReleasePipelineInput**](CreateReleasePipelineInput.md)|  | 

### Return type

[**ReleasePipeline**](ReleasePipeline.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

