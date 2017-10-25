# LaunchDarklyRestApi.UserSettingsApi

All URIs are relative to *https://app.launchdarkly.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUserFlagSetting**](UserSettingsApi.md#getUserFlagSetting) | **GET** /users/{projectKey}/{environmentKey}/{userKey}/flags/{featureFlagKey} | Get a user by key.
[**getUserFlagSettings**](UserSettingsApi.md#getUserFlagSettings) | **GET** /users/{projectKey}/{environmentKey}/{userKey}/flags | Fetch a single flag setting for a user by key.
[**putFlagSetting**](UserSettingsApi.md#putFlagSetting) | **PUT** /users/{projectKey}/{environmentKey}/{userKey}/flags/{featureFlagKey} | Specifically enable or disable a feature flag for a user based on their key.


<a name="getUserFlagSetting"></a>
# **getUserFlagSetting**
> UserFlagSetting getUserFlagSetting(projectKey, environmentKey, userKey, featureFlagKey, )

Get a user by key.

### Example
```javascript
var LaunchDarklyRestApi = require('launch_darkly_rest_api');
var defaultClient = LaunchDarklyRestApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyRestApi.UserSettingsApi();

var projectKey = "projectKey_example"; // String | The project key, used to tie the flags together under one project so they can be managed together.

var environmentKey = "environmentKey_example"; // String | The environment key

var userKey = "userKey_example"; // String | The user's key

var featureFlagKey = "featureFlagKey_example"; // String | The feature flag's key. The key identifies the flag in your code.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserFlagSetting(projectKey, environmentKey, userKey, featureFlagKey, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectKey** | **String**| The project key, used to tie the flags together under one project so they can be managed together. | 
 **environmentKey** | **String**| The environment key | 
 **userKey** | **String**| The user&#39;s key | 
 **featureFlagKey** | **String**| The feature flag&#39;s key. The key identifies the flag in your code. | 

### Return type

[**UserFlagSetting**](UserFlagSetting.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUserFlagSettings"></a>
# **getUserFlagSettings**
> UserFlagSettings getUserFlagSettings(projectKey, environmentKey, userKey, )

Fetch a single flag setting for a user by key.

### Example
```javascript
var LaunchDarklyRestApi = require('launch_darkly_rest_api');
var defaultClient = LaunchDarklyRestApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyRestApi.UserSettingsApi();

var projectKey = "projectKey_example"; // String | The project key, used to tie the flags together under one project so they can be managed together.

var environmentKey = "environmentKey_example"; // String | The environment key

var userKey = "userKey_example"; // String | The user's key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserFlagSettings(projectKey, environmentKey, userKey, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectKey** | **String**| The project key, used to tie the flags together under one project so they can be managed together. | 
 **environmentKey** | **String**| The environment key | 
 **userKey** | **String**| The user&#39;s key | 

### Return type

[**UserFlagSettings**](UserFlagSettings.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putFlagSetting"></a>
# **putFlagSetting**
> putFlagSetting(projectKey, environmentKey, userKey, featureFlagKey, userSettingsBody)

Specifically enable or disable a feature flag for a user based on their key.

### Example
```javascript
var LaunchDarklyRestApi = require('launch_darkly_rest_api');
var defaultClient = LaunchDarklyRestApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyRestApi.UserSettingsApi();

var projectKey = "projectKey_example"; // String | The project key, used to tie the flags together under one project so they can be managed together.

var environmentKey = "environmentKey_example"; // String | The environment key

var userKey = "userKey_example"; // String | The user's key

var featureFlagKey = "featureFlagKey_example"; // String | The feature flag's key. The key identifies the flag in your code.

var userSettingsBody = new LaunchDarklyRestApi.UserSettingsBody(); // UserSettingsBody | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.putFlagSetting(projectKey, environmentKey, userKey, featureFlagKey, userSettingsBody, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectKey** | **String**| The project key, used to tie the flags together under one project so they can be managed together. | 
 **environmentKey** | **String**| The environment key | 
 **userKey** | **String**| The user&#39;s key | 
 **featureFlagKey** | **String**| The feature flag&#39;s key. The key identifies the flag in your code. | 
 **userSettingsBody** | [**UserSettingsBody**](UserSettingsBody.md)|  | 

### Return type

null (empty response body)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

