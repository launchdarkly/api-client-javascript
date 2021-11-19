# LaunchDarklyApi.WorkflowsBetaApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteWorkflow**](WorkflowsBetaApi.md#deleteWorkflow) | **DELETE** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/workflows/{workflowId} | Delete workflow
[**getWorkflows**](WorkflowsBetaApi.md#getWorkflows) | **GET** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/workflows | Get workflows
[**postWorkflow**](WorkflowsBetaApi.md#postWorkflow) | **POST** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/workflows | Create workflow



## deleteWorkflow

> deleteWorkflow(projectKey, featureFlagKey, environmentKey, workflowId)

Delete workflow

Delete a workflow from a feature flag

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.WorkflowsBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let featureFlagKey = "featureFlagKey_example"; // String | The feature flag's key
let environmentKey = "environmentKey_example"; // String | The environment key
let workflowId = "workflowId_example"; // String | The workflow id
apiInstance.deleteWorkflow(projectKey, featureFlagKey, environmentKey, workflowId, (error, data, response) => {
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
 **featureFlagKey** | **String**| The feature flag&#39;s key | 
 **environmentKey** | **String**| The environment key | 
 **workflowId** | **String**| The workflow id | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWorkflows

> CustomWorkflowsListingOutputRep getWorkflows(projectKey, featureFlagKey, environmentKey)

Get workflows

Get workflows from a feature flag

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.WorkflowsBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let featureFlagKey = "featureFlagKey_example"; // String | The feature flag's key
let environmentKey = "environmentKey_example"; // String | The environment key
apiInstance.getWorkflows(projectKey, featureFlagKey, environmentKey, (error, data, response) => {
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
 **featureFlagKey** | **String**| The feature flag&#39;s key | 
 **environmentKey** | **String**| The environment key | 

### Return type

[**CustomWorkflowsListingOutputRep**](CustomWorkflowsListingOutputRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postWorkflow

> CustomWorkflowOutputRep postWorkflow(projectKey, featureFlagKey, environmentKey, customWorkflowInputRep)

Create workflow

Create a workflow for a feature flag

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.WorkflowsBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let featureFlagKey = "featureFlagKey_example"; // String | The feature flag's key
let environmentKey = "environmentKey_example"; // String | The environment key
let customWorkflowInputRep = new LaunchDarklyApi.CustomWorkflowInputRep(); // CustomWorkflowInputRep | 
apiInstance.postWorkflow(projectKey, featureFlagKey, environmentKey, customWorkflowInputRep, (error, data, response) => {
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
 **featureFlagKey** | **String**| The feature flag&#39;s key | 
 **environmentKey** | **String**| The environment key | 
 **customWorkflowInputRep** | [**CustomWorkflowInputRep**](CustomWorkflowInputRep.md)|  | 

### Return type

[**CustomWorkflowOutputRep**](CustomWorkflowOutputRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

