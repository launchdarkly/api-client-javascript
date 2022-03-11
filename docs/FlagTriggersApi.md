# LaunchDarklyApi.FlagTriggersApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTriggerWorkflow**](FlagTriggersApi.md#createTriggerWorkflow) | **POST** /api/v2/flags/{projectKey}/{featureFlagKey}/triggers/{environmentKey} | Create flag trigger
[**deleteTriggerWorkflow**](FlagTriggersApi.md#deleteTriggerWorkflow) | **DELETE** /api/v2/flags/{projectKey}/{featureFlagKey}/triggers/{environmentKey}/{id} | Delete flag trigger
[**getTriggerWorkflowById**](FlagTriggersApi.md#getTriggerWorkflowById) | **GET** /api/v2/flags/{projectKey}/{featureFlagKey}/triggers/{environmentKey}/{id} | Get flag trigger by ID
[**getTriggerWorkflows**](FlagTriggersApi.md#getTriggerWorkflows) | **GET** /api/v2/flags/{projectKey}/{featureFlagKey}/triggers/{environmentKey} | List flag triggers
[**patchTriggerWorkflow**](FlagTriggersApi.md#patchTriggerWorkflow) | **PATCH** /api/v2/flags/{projectKey}/{featureFlagKey}/triggers/{environmentKey}/{id} | Update flag trigger



## createTriggerWorkflow

> TriggerWorkflowRep createTriggerWorkflow(projectKey, environmentKey, featureFlagKey, triggerPost)

Create flag trigger

Create a new flag trigger. Triggers let you initiate changes to flag targeting remotely using a unique webhook URL.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.FlagTriggersApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let featureFlagKey = "featureFlagKey_example"; // String | The feature flag key
let triggerPost = new LaunchDarklyApi.TriggerPost(); // TriggerPost | 
apiInstance.createTriggerWorkflow(projectKey, environmentKey, featureFlagKey, triggerPost, (error, data, response) => {
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
 **featureFlagKey** | **String**| The feature flag key | 
 **triggerPost** | [**TriggerPost**](TriggerPost.md)|  | 

### Return type

[**TriggerWorkflowRep**](TriggerWorkflowRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteTriggerWorkflow

> deleteTriggerWorkflow(projectKey, environmentKey, featureFlagKey, id)

Delete flag trigger

Delete a flag trigger by ID.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.FlagTriggersApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let featureFlagKey = "featureFlagKey_example"; // String | The feature flag key
let id = "id_example"; // String | The flag trigger ID
apiInstance.deleteTriggerWorkflow(projectKey, environmentKey, featureFlagKey, id, (error, data, response) => {
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
 **featureFlagKey** | **String**| The feature flag key | 
 **id** | **String**| The flag trigger ID | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTriggerWorkflowById

> TriggerWorkflowRep getTriggerWorkflowById(projectKey, featureFlagKey, environmentKey, id)

Get flag trigger by ID

Get a flag trigger by ID.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.FlagTriggersApi();
let projectKey = "projectKey_example"; // String | The project key
let featureFlagKey = "featureFlagKey_example"; // String | The feature flag key
let environmentKey = "environmentKey_example"; // String | The environment key
let id = "id_example"; // String | The flag trigger ID
apiInstance.getTriggerWorkflowById(projectKey, featureFlagKey, environmentKey, id, (error, data, response) => {
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
 **featureFlagKey** | **String**| The feature flag key | 
 **environmentKey** | **String**| The environment key | 
 **id** | **String**| The flag trigger ID | 

### Return type

[**TriggerWorkflowRep**](TriggerWorkflowRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTriggerWorkflows

> TriggerWorkflowCollectionRep getTriggerWorkflows(projectKey, environmentKey, featureFlagKey)

List flag triggers

Get a list of all flag triggers.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.FlagTriggersApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let featureFlagKey = "featureFlagKey_example"; // String | The feature flag key
apiInstance.getTriggerWorkflows(projectKey, environmentKey, featureFlagKey, (error, data, response) => {
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
 **featureFlagKey** | **String**| The feature flag key | 

### Return type

[**TriggerWorkflowCollectionRep**](TriggerWorkflowCollectionRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## patchTriggerWorkflow

> TriggerWorkflowRep patchTriggerWorkflow(projectKey, environmentKey, featureFlagKey, id, flagTriggerInput)

Update flag trigger

Update a flag trigger. The request body must be a valid JSON patch or JSON merge patch document. To learn more, read [Updates](/#section/Overview/Updates).

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.FlagTriggersApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let featureFlagKey = "featureFlagKey_example"; // String | The feature flag key
let id = "id_example"; // String | The flag trigger ID
let flagTriggerInput = new LaunchDarklyApi.FlagTriggerInput(); // FlagTriggerInput | 
apiInstance.patchTriggerWorkflow(projectKey, environmentKey, featureFlagKey, id, flagTriggerInput, (error, data, response) => {
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
 **featureFlagKey** | **String**| The feature flag key | 
 **id** | **String**| The flag trigger ID | 
 **flagTriggerInput** | [**FlagTriggerInput**](FlagTriggerInput.md)|  | 

### Return type

[**TriggerWorkflowRep**](TriggerWorkflowRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

