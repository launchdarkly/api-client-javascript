# LaunchDarklyRestApi.FlagsApi

All URIs are relative to *https://app.launchdarkly.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteFeatureFlag**](FlagsApi.md#deleteFeatureFlag) | **DELETE** /flags/{projectKey}/{featureFlagKey} | Delete a feature flag by ID
[**getFeatureFlag**](FlagsApi.md#getFeatureFlag) | **GET** /flags/{projectKey}/{featureFlagKey} | Get a single feature flag by key.
[**getFeatureFlagStatus**](FlagsApi.md#getFeatureFlagStatus) | **GET** /flag-statuses/{projectKey}/{environmentKey} | Get a list of statuses for all feature flags
[**getFeatureFlagStatuses**](FlagsApi.md#getFeatureFlagStatuses) | **GET** /flag-statuses/{projectKey}/{environmentKey}/{featureFlagKey} | Get a list of statuses for all feature flags
[**getFeatureFlags**](FlagsApi.md#getFeatureFlags) | **GET** /flags/{projectKey} | Get a list of all features in the given project.
[**patchFeatureFlag**](FlagsApi.md#patchFeatureFlag) | **PATCH** /flags/{projectKey}/{featureFlagKey} | Modify a feature flag by ID
[**postFeatureFlag**](FlagsApi.md#postFeatureFlag) | **POST** /flags/{projectKey} | Creates a new feature flag.


<a name="deleteFeatureFlag"></a>
# **deleteFeatureFlag**
> deleteFeatureFlag(projectKey, featureFlagKey, )

Delete a feature flag by ID

### Example
```javascript
var LaunchDarklyRestApi = require('launch_darkly_rest_api');
var defaultClient = LaunchDarklyRestApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyRestApi.FlagsApi();

var projectKey = "projectKey_example"; // String | The project key, used to tie the flags together under one project so they can be managed together.

var featureFlagKey = "featureFlagKey_example"; // String | The feature flag's key. The key identifies the flag in your code.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteFeatureFlag(projectKey, featureFlagKey, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectKey** | **String**| The project key, used to tie the flags together under one project so they can be managed together. | 
 **featureFlagKey** | **String**| The feature flag&#39;s key. The key identifies the flag in your code. | 

### Return type

null (empty response body)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFeatureFlag"></a>
# **getFeatureFlag**
> FeatureFlag getFeatureFlag(projectKey, featureFlagKey, , opts)

Get a single feature flag by key.

### Example
```javascript
var LaunchDarklyRestApi = require('launch_darkly_rest_api');
var defaultClient = LaunchDarklyRestApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyRestApi.FlagsApi();

var projectKey = "projectKey_example"; // String | The project key, used to tie the flags together under one project so they can be managed together.

var featureFlagKey = "featureFlagKey_example"; // String | The feature flag's key. The key identifies the flag in your code.

var opts = { 
  'environmentKeyQuery': "environmentKeyQuery_example" // String | The environment key
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFeatureFlag(projectKey, featureFlagKey, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectKey** | **String**| The project key, used to tie the flags together under one project so they can be managed together. | 
 **featureFlagKey** | **String**| The feature flag&#39;s key. The key identifies the flag in your code. | 
 **environmentKeyQuery** | **String**| The environment key | [optional] 

### Return type

[**FeatureFlag**](FeatureFlag.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFeatureFlagStatus"></a>
# **getFeatureFlagStatus**
> FeatureFlagStatuses getFeatureFlagStatus(projectKey, environmentKey, )

Get a list of statuses for all feature flags

### Example
```javascript
var LaunchDarklyRestApi = require('launch_darkly_rest_api');
var defaultClient = LaunchDarklyRestApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyRestApi.FlagsApi();

var projectKey = "projectKey_example"; // String | The project key, used to tie the flags together under one project so they can be managed together.

var environmentKey = "environmentKey_example"; // String | The environment key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFeatureFlagStatus(projectKey, environmentKey, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectKey** | **String**| The project key, used to tie the flags together under one project so they can be managed together. | 
 **environmentKey** | **String**| The environment key | 

### Return type

[**FeatureFlagStatuses**](FeatureFlagStatuses.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFeatureFlagStatuses"></a>
# **getFeatureFlagStatuses**
> FeatureFlagStatus getFeatureFlagStatuses(projectKey, environmentKey, featureFlagKey, )

Get a list of statuses for all feature flags

### Example
```javascript
var LaunchDarklyRestApi = require('launch_darkly_rest_api');
var defaultClient = LaunchDarklyRestApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyRestApi.FlagsApi();

var projectKey = "projectKey_example"; // String | The project key, used to tie the flags together under one project so they can be managed together.

var environmentKey = "environmentKey_example"; // String | The environment key

var featureFlagKey = "featureFlagKey_example"; // String | The feature flag's key. The key identifies the flag in your code.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFeatureFlagStatuses(projectKey, environmentKey, featureFlagKey, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectKey** | **String**| The project key, used to tie the flags together under one project so they can be managed together. | 
 **environmentKey** | **String**| The environment key | 
 **featureFlagKey** | **String**| The feature flag&#39;s key. The key identifies the flag in your code. | 

### Return type

[**FeatureFlagStatus**](FeatureFlagStatus.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFeatureFlags"></a>
# **getFeatureFlags**
> FeatureFlags getFeatureFlags(projectKey, , opts)

Get a list of all features in the given project.

### Example
```javascript
var LaunchDarklyRestApi = require('launch_darkly_rest_api');
var defaultClient = LaunchDarklyRestApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyRestApi.FlagsApi();

var projectKey = "projectKey_example"; // String | The project key, used to tie the flags together under one project so they can be managed together.

var opts = { 
  'environmentKeyQuery': "environmentKeyQuery_example" // String | The environment key
  'tag': "tag_example" // String | Filter by tag. A tag can be used to group flags across projects.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFeatureFlags(projectKey, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectKey** | **String**| The project key, used to tie the flags together under one project so they can be managed together. | 
 **environmentKeyQuery** | **String**| The environment key | [optional] 
 **tag** | **String**| Filter by tag. A tag can be used to group flags across projects. | [optional] 

### Return type

[**FeatureFlags**](FeatureFlags.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchFeatureFlag"></a>
# **patchFeatureFlag**
> FeatureFlag patchFeatureFlag(projectKey, featureFlagKey, patchDelta)

Modify a feature flag by ID

### Example
```javascript
var LaunchDarklyRestApi = require('launch_darkly_rest_api');
var defaultClient = LaunchDarklyRestApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyRestApi.FlagsApi();

var projectKey = "projectKey_example"; // String | The project key, used to tie the flags together under one project so they can be managed together.

var featureFlagKey = "featureFlagKey_example"; // String | The feature flag's key. The key identifies the flag in your code.

var patchDelta = [new LaunchDarklyRestApi.PatchDelta()]; // [PatchDelta] | http://jsonpatch.com/


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patchFeatureFlag(projectKey, featureFlagKey, patchDelta, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectKey** | **String**| The project key, used to tie the flags together under one project so they can be managed together. | 
 **featureFlagKey** | **String**| The feature flag&#39;s key. The key identifies the flag in your code. | 
 **patchDelta** | [**[PatchDelta]**](PatchDelta.md)| http://jsonpatch.com/ | 

### Return type

[**FeatureFlag**](FeatureFlag.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postFeatureFlag"></a>
# **postFeatureFlag**
> postFeatureFlag(projectKey, featureFlagBody)

Creates a new feature flag.

### Example
```javascript
var LaunchDarklyRestApi = require('launch_darkly_rest_api');
var defaultClient = LaunchDarklyRestApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyRestApi.FlagsApi();

var projectKey = "projectKey_example"; // String | The project key, used to tie the flags together under one project so they can be managed together.

var featureFlagBody = new LaunchDarklyRestApi.FeatureFlagBody(); // FeatureFlagBody | Create a new feature flag


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.postFeatureFlag(projectKey, featureFlagBody, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectKey** | **String**| The project key, used to tie the flags together under one project so they can be managed together. | 
 **featureFlagBody** | [**FeatureFlagBody**](FeatureFlagBody.md)| Create a new feature flag | 

### Return type

null (empty response body)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

