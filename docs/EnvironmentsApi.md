# LaunchDarklyRestApi.EnvironmentsApi

All URIs are relative to *https://app.launchdarkly.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteEnvironment**](EnvironmentsApi.md#deleteEnvironment) | **DELETE** /environments/{projectKey}/{environmentKey} | Delete an environment by ID
[**getEnvironment**](EnvironmentsApi.md#getEnvironment) | **GET** /environments/{projectKey}/{environmentKey} | Get an environment given a project and key.
[**patchEnvironment**](EnvironmentsApi.md#patchEnvironment) | **PATCH** /environments/{projectKey}/{environmentKey} | Modify an environment by ID
[**postEnvironment**](EnvironmentsApi.md#postEnvironment) | **POST** /environments/{projectKey} | Create a new environment in a specified project with a given name, key, and swatch color.


<a name="deleteEnvironment"></a>
# **deleteEnvironment**
> deleteEnvironment(projectKey, environmentKey, )

Delete an environment by ID

### Example
```javascript
var LaunchDarklyRestApi = require('launch_darkly_rest_api');
var defaultClient = LaunchDarklyRestApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyRestApi.EnvironmentsApi();

var projectKey = "projectKey_example"; // String | The project key, used to tie the flags together under one project so they can be managed together.

var environmentKey = "environmentKey_example"; // String | The environment key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteEnvironment(projectKey, environmentKey, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectKey** | **String**| The project key, used to tie the flags together under one project so they can be managed together. | 
 **environmentKey** | **String**| The environment key | 

### Return type

null (empty response body)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getEnvironment"></a>
# **getEnvironment**
> Environment getEnvironment(projectKey, environmentKey, )

Get an environment given a project and key.

### Example
```javascript
var LaunchDarklyRestApi = require('launch_darkly_rest_api');
var defaultClient = LaunchDarklyRestApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyRestApi.EnvironmentsApi();

var projectKey = "projectKey_example"; // String | The project key, used to tie the flags together under one project so they can be managed together.

var environmentKey = "environmentKey_example"; // String | The environment key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEnvironment(projectKey, environmentKey, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectKey** | **String**| The project key, used to tie the flags together under one project so they can be managed together. | 
 **environmentKey** | **String**| The environment key | 

### Return type

[**Environment**](Environment.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchEnvironment"></a>
# **patchEnvironment**
> patchEnvironment(projectKey, environmentKey, patchDelta)

Modify an environment by ID

### Example
```javascript
var LaunchDarklyRestApi = require('launch_darkly_rest_api');
var defaultClient = LaunchDarklyRestApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyRestApi.EnvironmentsApi();

var projectKey = "projectKey_example"; // String | The project key, used to tie the flags together under one project so they can be managed together.

var environmentKey = "environmentKey_example"; // String | The environment key

var patchDelta = [new LaunchDarklyRestApi.PatchDelta()]; // [PatchDelta] | http://jsonpatch.com/


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.patchEnvironment(projectKey, environmentKey, patchDelta, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectKey** | **String**| The project key, used to tie the flags together under one project so they can be managed together. | 
 **environmentKey** | **String**| The environment key | 
 **patchDelta** | [**[PatchDelta]**](PatchDelta.md)| http://jsonpatch.com/ | 

### Return type

null (empty response body)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postEnvironment"></a>
# **postEnvironment**
> postEnvironment(projectKey, environmentBody)

Create a new environment in a specified project with a given name, key, and swatch color.

### Example
```javascript
var LaunchDarklyRestApi = require('launch_darkly_rest_api');
var defaultClient = LaunchDarklyRestApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyRestApi.EnvironmentsApi();

var projectKey = "projectKey_example"; // String | The project key, used to tie the flags together under one project so they can be managed together.

var environmentBody = new LaunchDarklyRestApi.EnvironmentBody(); // EnvironmentBody | New environment


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.postEnvironment(projectKey, environmentBody, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectKey** | **String**| The project key, used to tie the flags together under one project so they can be managed together. | 
 **environmentBody** | [**EnvironmentBody**](EnvironmentBody.md)| New environment | 

### Return type

null (empty response body)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

