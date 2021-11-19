# LaunchDarklyApi.EnvironmentsApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteEnvironment**](EnvironmentsApi.md#deleteEnvironment) | **DELETE** /api/v2/projects/{projectKey}/environments/{environmentKey} | Delete environment
[**getEnvironment**](EnvironmentsApi.md#getEnvironment) | **GET** /api/v2/projects/{projectKey}/environments/{environmentKey} | Get environment
[**patchEnvironment**](EnvironmentsApi.md#patchEnvironment) | **PATCH** /api/v2/projects/{projectKey}/environments/{environmentKey} | Update environment
[**postEnvironment**](EnvironmentsApi.md#postEnvironment) | **POST** /api/v2/projects/{projectKey}/environments | Create environment
[**resetEnvironmentMobileKey**](EnvironmentsApi.md#resetEnvironmentMobileKey) | **POST** /api/v2/projects/{projectKey}/environments/{envKey}/mobileKey | Reset environment mobile SDK key
[**resetEnvironmentSDKKey**](EnvironmentsApi.md#resetEnvironmentSDKKey) | **POST** /api/v2/projects/{projectKey}/environments/{envKey}/apiKey | Reset environment SDK key



## deleteEnvironment

> deleteEnvironment(projectKey, environmentKey)

Delete environment

Delete a environment by key.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.EnvironmentsApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
apiInstance.deleteEnvironment(projectKey, environmentKey, (error, data, response) => {
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

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEnvironment

> Environment getEnvironment(projectKey, environmentKey)

Get environment

&gt; ### Approval settings &gt; &gt; The &#x60;approvalSettings&#x60; key is only returned when the Flag Approvals feature is enabled.  Get an environment given a project and key. 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.EnvironmentsApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
apiInstance.getEnvironment(projectKey, environmentKey, (error, data, response) => {
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

### Return type

[**Environment**](Environment.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## patchEnvironment

> Environment patchEnvironment(projectKey, environmentKey, patchOperation)

Update environment

&gt; ### Approval settings &gt; &gt; The &#x60;approvalSettings&#x60; key is only returned when the Flag Approvals feature is enabled. &gt; &gt; Only the &#x60;canReviewOwnRequest&#x60;, &#x60;canApplyDeclinedChanges&#x60;, &#x60;minNumApprovals&#x60;, &#x60;required&#x60; and &#x60;requiredApprovalTagsfields&#x60; are editable. &gt; &gt; If you try to patch the environment by setting both &#x60;required&#x60; and &#x60;requiredApprovalTags&#x60;, it fails and an error appears. Users can specify either required approvals for all flags in an environment or those with specific tags, but not both. Only customers on an Enterprise plan can require approval for flag updates by either mechanism. 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.EnvironmentsApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let patchOperation = [new LaunchDarklyApi.PatchOperation()]; // [PatchOperation] | 
apiInstance.patchEnvironment(projectKey, environmentKey, patchOperation, (error, data, response) => {
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
 **patchOperation** | [**[PatchOperation]**](PatchOperation.md)|  | 

### Return type

[**Environment**](Environment.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postEnvironment

> Environment postEnvironment(projectKey, environmentPost)

Create environment

&gt; ### Approval settings &gt; &gt; The &#x60;approvalSettings&#x60; key is only returned when the Flag Approvals feature is enabled. &gt; &gt; You cannot update approval settings when creating new environments. Update approval settings with the PATCH Environment API.  Create a new environment in a specified project with a given name, key, swatch color, and default TTL. 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.EnvironmentsApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentPost = {"color":"DADBEE","key":"my-environment","name":"My Environment"}; // EnvironmentPost | 
apiInstance.postEnvironment(projectKey, environmentPost, (error, data, response) => {
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
 **environmentPost** | [**EnvironmentPost**](EnvironmentPost.md)|  | 

### Return type

[**Environment**](Environment.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## resetEnvironmentMobileKey

> Environment resetEnvironmentMobileKey(projectKey, envKey)

Reset environment mobile SDK key

Reset an environment&#39;s mobile key. The optional expiry for the old key is deprecated for this endpoint, so the old key will always expire immediately.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.EnvironmentsApi();
let projectKey = "projectKey_example"; // String | The project key
let envKey = "envKey_example"; // String | The environment key
apiInstance.resetEnvironmentMobileKey(projectKey, envKey, (error, data, response) => {
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
 **envKey** | **String**| The environment key | 

### Return type

[**Environment**](Environment.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## resetEnvironmentSDKKey

> Environment resetEnvironmentSDKKey(projectKey, envKey, opts)

Reset environment SDK key

Reset an environment&#39;s SDK key with an optional expiry time for the old key.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.EnvironmentsApi();
let projectKey = "projectKey_example"; // String | The project key
let envKey = "envKey_example"; // String | The environment key
let opts = {
  'expiry': 789 // Number | The time at which you want the old SDK key to expire, in UNIX milliseconds. By default, the key expires immediately.
};
apiInstance.resetEnvironmentSDKKey(projectKey, envKey, opts, (error, data, response) => {
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
 **envKey** | **String**| The environment key | 
 **expiry** | **Number**| The time at which you want the old SDK key to expire, in UNIX milliseconds. By default, the key expires immediately. | [optional] 

### Return type

[**Environment**](Environment.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

