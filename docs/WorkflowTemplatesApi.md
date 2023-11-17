# LaunchDarklyApi.WorkflowTemplatesApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createWorkflowTemplate**](WorkflowTemplatesApi.md#createWorkflowTemplate) | **POST** /api/v2/templates | Create workflow template
[**deleteWorkflowTemplate**](WorkflowTemplatesApi.md#deleteWorkflowTemplate) | **DELETE** /api/v2/templates/{templateKey} | Delete workflow template
[**getWorkflowTemplates**](WorkflowTemplatesApi.md#getWorkflowTemplates) | **GET** /api/v2/templates | Get workflow templates



## createWorkflowTemplate

> WorkflowTemplateOutput createWorkflowTemplate(createWorkflowTemplateInput)

Create workflow template

Create a template for a feature flag workflow

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.WorkflowTemplatesApi();
let createWorkflowTemplateInput = new LaunchDarklyApi.CreateWorkflowTemplateInput(); // CreateWorkflowTemplateInput | 
apiInstance.createWorkflowTemplate(createWorkflowTemplateInput, (error, data, response) => {
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
 **createWorkflowTemplateInput** | [**CreateWorkflowTemplateInput**](CreateWorkflowTemplateInput.md)|  | 

### Return type

[**WorkflowTemplateOutput**](WorkflowTemplateOutput.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteWorkflowTemplate

> deleteWorkflowTemplate(templateKey)

Delete workflow template

Delete a workflow template

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.WorkflowTemplatesApi();
let templateKey = "templateKey_example"; // String | The template key
apiInstance.deleteWorkflowTemplate(templateKey, (error, data, response) => {
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
 **templateKey** | **String**| The template key | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWorkflowTemplates

> WorkflowTemplatesListingOutputRep getWorkflowTemplates(opts)

Get workflow templates

Get workflow templates belonging to an account, or can optionally return templates_endpoints.workflowTemplateSummariesListingOutputRep when summary query param is true

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.WorkflowTemplatesApi();
let opts = {
  'summary': true, // Boolean | Whether the entire template object or just a summary should be returned
  'search': "search_example" // String | The substring in either the name or description of a template
};
apiInstance.getWorkflowTemplates(opts, (error, data, response) => {
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
 **summary** | **Boolean**| Whether the entire template object or just a summary should be returned | [optional] 
 **search** | **String**| The substring in either the name or description of a template | [optional] 

### Return type

[**WorkflowTemplatesListingOutputRep**](WorkflowTemplatesListingOutputRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

