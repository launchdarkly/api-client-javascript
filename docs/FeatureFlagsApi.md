# LaunchDarklyApi.FeatureFlagsApi

All URIs are relative to *https://app.launchdarkly.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**copyFeatureFlag**](FeatureFlagsApi.md#copyFeatureFlag) | **POST** /flags/{projectKey}/{featureFlagKey}/copy | Copies the feature flag configuration from one environment to the same feature flag in another environment.
[**deleteApprovalRequest**](FeatureFlagsApi.md#deleteApprovalRequest) | **DELETE** /projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{approvalRequestId} | Delete an approval request for a feature flag config
[**deleteFeatureFlag**](FeatureFlagsApi.md#deleteFeatureFlag) | **DELETE** /flags/{projectKey}/{featureFlagKey} | Delete a feature flag in all environments. Be careful-- only delete feature flags that are no longer being used by your application.
[**deleteFlagConfigScheduledChanges**](FeatureFlagsApi.md#deleteFlagConfigScheduledChanges) | **DELETE** /projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes/{scheduledChangeId} | Delete a scheduled change on a feature flag in an environment.
[**flagsProjectKeyEnvironmentKeyFeatureFlagKeyDependentFlagsGet**](FeatureFlagsApi.md#flagsProjectKeyEnvironmentKeyFeatureFlagKeyDependentFlagsGet) | **GET** /flags/{projectKey}/{environmentKey}/{featureFlagKey}/dependent-flags | Get dependent flags for the flag in the environment specified in path parameters
[**flagsProjectKeyFeatureFlagKeyDependentFlagsGet**](FeatureFlagsApi.md#flagsProjectKeyFeatureFlagKeyDependentFlagsGet) | **GET** /flags/{projectKey}/{featureFlagKey}/dependent-flags | Get dependent flags across all environments for the flag specified in the path parameters
[**getApprovalRequest**](FeatureFlagsApi.md#getApprovalRequest) | **GET** /projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{approvalRequestId} | Get a single approval request for a feature flag config
[**getApprovalRequests**](FeatureFlagsApi.md#getApprovalRequests) | **GET** /projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests | Get all approval requests for a feature flag config
[**getExpiringUserTargets**](FeatureFlagsApi.md#getExpiringUserTargets) | **GET** /flags/{projectKey}/{featureFlagKey}/expiring-user-targets/{environmentKey} | Get expiring user targets for feature flag
[**getFeatureFlag**](FeatureFlagsApi.md#getFeatureFlag) | **GET** /flags/{projectKey}/{featureFlagKey} | Get a single feature flag by key.
[**getFeatureFlagStatus**](FeatureFlagsApi.md#getFeatureFlagStatus) | **GET** /flag-statuses/{projectKey}/{environmentKey}/{featureFlagKey} | Get the status for a particular feature flag.
[**getFeatureFlagStatusAcrossEnvironments**](FeatureFlagsApi.md#getFeatureFlagStatusAcrossEnvironments) | **GET** /flag-status/{projectKey}/{featureFlagKey} | Get the status for a particular feature flag across environments
[**getFeatureFlagStatuses**](FeatureFlagsApi.md#getFeatureFlagStatuses) | **GET** /flag-statuses/{projectKey}/{environmentKey} | Get a list of statuses for all feature flags. The status includes the last time the feature flag was requested, as well as the state of the flag.
[**getFeatureFlags**](FeatureFlagsApi.md#getFeatureFlags) | **GET** /flags/{projectKey} | Get a list of all features in the given project.
[**getFlagConfigScheduledChange**](FeatureFlagsApi.md#getFlagConfigScheduledChange) | **GET** /projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes/{scheduledChangeId} | Get a scheduled change on a feature flag by id.
[**getFlagConfigScheduledChanges**](FeatureFlagsApi.md#getFlagConfigScheduledChanges) | **GET** /projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes | Get all scheduled workflows for a feature flag by key.
[**getFlagConfigScheduledChangesConflicts**](FeatureFlagsApi.md#getFlagConfigScheduledChangesConflicts) | **POST** /projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes-conflicts | Lists conflicts between the given instructions and any existing scheduled changes for the feature flag. The actual HTTP verb should be REPORT, not POST.
[**patchExpiringUserTargets**](FeatureFlagsApi.md#patchExpiringUserTargets) | **PATCH** /flags/{projectKey}/{featureFlagKey}/expiring-user-targets/{environmentKey} | Update, add, or delete expiring user targets on feature flag
[**patchFeatureFlag**](FeatureFlagsApi.md#patchFeatureFlag) | **PATCH** /flags/{projectKey}/{featureFlagKey} | Perform a partial update to a feature.
[**patchFlagConfigScheduledChange**](FeatureFlagsApi.md#patchFlagConfigScheduledChange) | **PATCH** /projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes/{scheduledChangeId} | Updates an existing scheduled-change on a feature flag in an environment.
[**postApplyApprovalRequest**](FeatureFlagsApi.md#postApplyApprovalRequest) | **POST** /projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{approvalRequestId}/apply | Apply approval request for a feature flag config
[**postApprovalRequest**](FeatureFlagsApi.md#postApprovalRequest) | **POST** /projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{approvalRequestId} | Create an approval request for a feature flag config
[**postFeatureFlag**](FeatureFlagsApi.md#postFeatureFlag) | **POST** /flags/{projectKey} | Creates a new feature flag.
[**postFlagConfigScheduledChanges**](FeatureFlagsApi.md#postFlagConfigScheduledChanges) | **POST** /projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes | Creates a new scheduled change for a feature flag.
[**postReviewApprovalRequest**](FeatureFlagsApi.md#postReviewApprovalRequest) | **POST** /projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{approvalRequestId}/review | Review approval request for a feature flag config


<a name="copyFeatureFlag"></a>
# **copyFeatureFlag**
> FeatureFlag copyFeatureFlag(projectKey, featureFlagKey, featureFlagCopyBody)

Copies the feature flag configuration from one environment to the same feature flag in another environment.

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.FeatureFlagsApi();

var projectKey = "projectKey_example"; // String | The project key, used to tie the flags together under one project so they can be managed together.

var featureFlagKey = "featureFlagKey_example"; // String | The feature flag's key. The key identifies the flag in your code.

var featureFlagCopyBody = new LaunchDarklyApi.FeatureFlagCopyBody(); // FeatureFlagCopyBody | Copy feature flag configurations between environments.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.copyFeatureFlag(projectKey, featureFlagKey, featureFlagCopyBody, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectKey** | **String**| The project key, used to tie the flags together under one project so they can be managed together. | 
 **featureFlagKey** | **String**| The feature flag's key. The key identifies the flag in your code. | 
 **featureFlagCopyBody** | [**FeatureFlagCopyBody**](FeatureFlagCopyBody.md)| Copy feature flag configurations between environments. | 

### Return type

[**FeatureFlag**](FeatureFlag.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteApprovalRequest"></a>
# **deleteApprovalRequest**
> deleteApprovalRequest(projectKey, environmentKey, featureFlagKey, approvalRequestId, , opts)

Delete an approval request for a feature flag config

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.FeatureFlagsApi();

var projectKey = "projectKey_example"; // String | The project key, used to tie the flags together under one project so they can be managed together.

var environmentKey = "environmentKey_example"; // String | The environment key, used to tie together flag configuration and users under one environment so they can be managed together.

var featureFlagKey = "featureFlagKey_example"; // String | The feature flag's key. The key identifies the flag in your code.

var approvalRequestId = "approvalRequestId_example"; // String | The approval request ID

var opts = { 
  'approvalRequestConfigBody': new LaunchDarklyApi.ApprovalRequestConfigBody() // ApprovalRequestConfigBody | Create a new approval request
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteApprovalRequest(projectKey, environmentKey, featureFlagKey, approvalRequestId, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectKey** | **String**| The project key, used to tie the flags together under one project so they can be managed together. | 
 **environmentKey** | **String**| The environment key, used to tie together flag configuration and users under one environment so they can be managed together. | 
 **featureFlagKey** | **String**| The feature flag's key. The key identifies the flag in your code. | 
 **approvalRequestId** | **String**| The approval request ID | 
 **approvalRequestConfigBody** | [**ApprovalRequestConfigBody**](ApprovalRequestConfigBody.md)| Create a new approval request | [optional] 

### Return type

null (empty response body)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteFeatureFlag"></a>
# **deleteFeatureFlag**
> deleteFeatureFlag(projectKey, featureFlagKey, )

Delete a feature flag in all environments. Be careful-- only delete feature flags that are no longer being used by your application.

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.FeatureFlagsApi();

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
 **featureFlagKey** | **String**| The feature flag's key. The key identifies the flag in your code. | 

### Return type

null (empty response body)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteFlagConfigScheduledChanges"></a>
# **deleteFlagConfigScheduledChanges**
> deleteFlagConfigScheduledChanges(projectKey, featureFlagKey, environmentKey, scheduledChangeId)

Delete a scheduled change on a feature flag in an environment.

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.FeatureFlagsApi();

var projectKey = "projectKey_example"; // String | The project key, used to tie the flags together under one project so they can be managed together.

var featureFlagKey = "featureFlagKey_example"; // String | The feature flag's key. The key identifies the flag in your code.

var environmentKey = "environmentKey_example"; // String | The environment key, used to tie together flag configuration and users under one environment so they can be managed together.

var scheduledChangeId = "scheduledChangeId_example"; // String | The id of the scheduled change


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteFlagConfigScheduledChanges(projectKey, featureFlagKey, environmentKey, scheduledChangeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectKey** | **String**| The project key, used to tie the flags together under one project so they can be managed together. | 
 **featureFlagKey** | **String**| The feature flag's key. The key identifies the flag in your code. | 
 **environmentKey** | **String**| The environment key, used to tie together flag configuration and users under one environment so they can be managed together. | 
 **scheduledChangeId** | **String**| The id of the scheduled change | 

### Return type

null (empty response body)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="flagsProjectKeyEnvironmentKeyFeatureFlagKeyDependentFlagsGet"></a>
# **flagsProjectKeyEnvironmentKeyFeatureFlagKeyDependentFlagsGet**
> DependentFlagsByEnvironment flagsProjectKeyEnvironmentKeyFeatureFlagKeyDependentFlagsGet(projectKey, environmentKey, featureFlagKey, )

Get dependent flags for the flag in the environment specified in path parameters

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.FeatureFlagsApi();

var projectKey = "projectKey_example"; // String | The project key, used to tie the flags together under one project so they can be managed together.

var environmentKey = "environmentKey_example"; // String | The environment key, used to tie together flag configuration and users under one environment so they can be managed together.

var featureFlagKey = "featureFlagKey_example"; // String | The feature flag's key. The key identifies the flag in your code.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.flagsProjectKeyEnvironmentKeyFeatureFlagKeyDependentFlagsGet(projectKey, environmentKey, featureFlagKey, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectKey** | **String**| The project key, used to tie the flags together under one project so they can be managed together. | 
 **environmentKey** | **String**| The environment key, used to tie together flag configuration and users under one environment so they can be managed together. | 
 **featureFlagKey** | **String**| The feature flag's key. The key identifies the flag in your code. | 

### Return type

[**DependentFlagsByEnvironment**](DependentFlagsByEnvironment.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="flagsProjectKeyFeatureFlagKeyDependentFlagsGet"></a>
# **flagsProjectKeyFeatureFlagKeyDependentFlagsGet**
> MultiEnvironmentDependentFlags flagsProjectKeyFeatureFlagKeyDependentFlagsGet(projectKey, featureFlagKey, )

Get dependent flags across all environments for the flag specified in the path parameters

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.FeatureFlagsApi();

var projectKey = "projectKey_example"; // String | The project key, used to tie the flags together under one project so they can be managed together.

var featureFlagKey = "featureFlagKey_example"; // String | The feature flag's key. The key identifies the flag in your code.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.flagsProjectKeyFeatureFlagKeyDependentFlagsGet(projectKey, featureFlagKey, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectKey** | **String**| The project key, used to tie the flags together under one project so they can be managed together. | 
 **featureFlagKey** | **String**| The feature flag's key. The key identifies the flag in your code. | 

### Return type

[**MultiEnvironmentDependentFlags**](MultiEnvironmentDependentFlags.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getApprovalRequest"></a>
# **getApprovalRequest**
> ApprovalRequests getApprovalRequest(projectKey, featureFlagKey, environmentKey, approvalRequestId, )

Get a single approval request for a feature flag config

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.FeatureFlagsApi();

var projectKey = "projectKey_example"; // String | The project key, used to tie the flags together under one project so they can be managed together.

var featureFlagKey = "featureFlagKey_example"; // String | The feature flag's key. The key identifies the flag in your code.

var environmentKey = "environmentKey_example"; // String | The environment key, used to tie together flag configuration and users under one environment so they can be managed together.

var approvalRequestId = "approvalRequestId_example"; // String | The approval request ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getApprovalRequest(projectKey, featureFlagKey, environmentKey, approvalRequestId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectKey** | **String**| The project key, used to tie the flags together under one project so they can be managed together. | 
 **featureFlagKey** | **String**| The feature flag's key. The key identifies the flag in your code. | 
 **environmentKey** | **String**| The environment key, used to tie together flag configuration and users under one environment so they can be managed together. | 
 **approvalRequestId** | **String**| The approval request ID | 

### Return type

[**ApprovalRequests**](ApprovalRequests.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getApprovalRequests"></a>
# **getApprovalRequests**
> ApprovalRequests getApprovalRequests(projectKey, featureFlagKey, environmentKey, )

Get all approval requests for a feature flag config

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.FeatureFlagsApi();

var projectKey = "projectKey_example"; // String | The project key, used to tie the flags together under one project so they can be managed together.

var featureFlagKey = "featureFlagKey_example"; // String | The feature flag's key. The key identifies the flag in your code.

var environmentKey = "environmentKey_example"; // String | The environment key, used to tie together flag configuration and users under one environment so they can be managed together.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getApprovalRequests(projectKey, featureFlagKey, environmentKey, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectKey** | **String**| The project key, used to tie the flags together under one project so they can be managed together. | 
 **featureFlagKey** | **String**| The feature flag's key. The key identifies the flag in your code. | 
 **environmentKey** | **String**| The environment key, used to tie together flag configuration and users under one environment so they can be managed together. | 

### Return type

[**ApprovalRequests**](ApprovalRequests.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getExpiringUserTargets"></a>
# **getExpiringUserTargets**
> UserTargetingExpirationForFlags getExpiringUserTargets(projectKey, environmentKey, featureFlagKey, )

Get expiring user targets for feature flag

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.FeatureFlagsApi();

var projectKey = "projectKey_example"; // String | The project key, used to tie the flags together under one project so they can be managed together.

var environmentKey = "environmentKey_example"; // String | The environment key, used to tie together flag configuration and users under one environment so they can be managed together.

var featureFlagKey = "featureFlagKey_example"; // String | The feature flag's key. The key identifies the flag in your code.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getExpiringUserTargets(projectKey, environmentKey, featureFlagKey, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectKey** | **String**| The project key, used to tie the flags together under one project so they can be managed together. | 
 **environmentKey** | **String**| The environment key, used to tie together flag configuration and users under one environment so they can be managed together. | 
 **featureFlagKey** | **String**| The feature flag's key. The key identifies the flag in your code. | 

### Return type

[**UserTargetingExpirationForFlags**](UserTargetingExpirationForFlags.md)

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
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.FeatureFlagsApi();

var projectKey = "projectKey_example"; // String | The project key, used to tie the flags together under one project so they can be managed together.

var featureFlagKey = "featureFlagKey_example"; // String | The feature flag's key. The key identifies the flag in your code.

var opts = { 
  'env': ["env_example"] // [String] | By default, each feature will include configurations for each environment. You can filter environments with the env query parameter. For example, setting env=[\"production\"] will restrict the returned configurations to just your production environment.
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
 **featureFlagKey** | **String**| The feature flag's key. The key identifies the flag in your code. | 
 **env** | [**[String]**](String.md)| By default, each feature will include configurations for each environment. You can filter environments with the env query parameter. For example, setting env=[\"production\"] will restrict the returned configurations to just your production environment. | [optional] 

### Return type

[**FeatureFlag**](FeatureFlag.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFeatureFlagStatus"></a>
# **getFeatureFlagStatus**
> FeatureFlagStatus getFeatureFlagStatus(projectKey, environmentKey, featureFlagKey, )

Get the status for a particular feature flag.

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.FeatureFlagsApi();

var projectKey = "projectKey_example"; // String | The project key, used to tie the flags together under one project so they can be managed together.

var environmentKey = "environmentKey_example"; // String | The environment key, used to tie together flag configuration and users under one environment so they can be managed together.

var featureFlagKey = "featureFlagKey_example"; // String | The feature flag's key. The key identifies the flag in your code.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFeatureFlagStatus(projectKey, environmentKey, featureFlagKey, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectKey** | **String**| The project key, used to tie the flags together under one project so they can be managed together. | 
 **environmentKey** | **String**| The environment key, used to tie together flag configuration and users under one environment so they can be managed together. | 
 **featureFlagKey** | **String**| The feature flag's key. The key identifies the flag in your code. | 

### Return type

[**FeatureFlagStatus**](FeatureFlagStatus.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFeatureFlagStatusAcrossEnvironments"></a>
# **getFeatureFlagStatusAcrossEnvironments**
> FeatureFlagStatusAcrossEnvironments getFeatureFlagStatusAcrossEnvironments(projectKey, featureFlagKey, )

Get the status for a particular feature flag across environments

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.FeatureFlagsApi();

var projectKey = "projectKey_example"; // String | The project key, used to tie the flags together under one project so they can be managed together.

var featureFlagKey = "featureFlagKey_example"; // String | The feature flag's key. The key identifies the flag in your code.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFeatureFlagStatusAcrossEnvironments(projectKey, featureFlagKey, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectKey** | **String**| The project key, used to tie the flags together under one project so they can be managed together. | 
 **featureFlagKey** | **String**| The feature flag's key. The key identifies the flag in your code. | 

### Return type

[**FeatureFlagStatusAcrossEnvironments**](FeatureFlagStatusAcrossEnvironments.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFeatureFlagStatuses"></a>
# **getFeatureFlagStatuses**
> FeatureFlagStatuses getFeatureFlagStatuses(projectKey, environmentKey, )

Get a list of statuses for all feature flags. The status includes the last time the feature flag was requested, as well as the state of the flag.

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.FeatureFlagsApi();

var projectKey = "projectKey_example"; // String | The project key, used to tie the flags together under one project so they can be managed together.

var environmentKey = "environmentKey_example"; // String | The environment key, used to tie together flag configuration and users under one environment so they can be managed together.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFeatureFlagStatuses(projectKey, environmentKey, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectKey** | **String**| The project key, used to tie the flags together under one project so they can be managed together. | 
 **environmentKey** | **String**| The environment key, used to tie together flag configuration and users under one environment so they can be managed together. | 

### Return type

[**FeatureFlagStatuses**](FeatureFlagStatuses.md)

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
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.FeatureFlagsApi();

var projectKey = "projectKey_example"; // String | The project key, used to tie the flags together under one project so they can be managed together.

var opts = { 
  'env': ["env_example"] // [String] | By default, each feature will include configurations for each environment. You can filter environments with the env query parameter. For example, setting env=[\"production\"] will restrict the returned configurations to just your production environment.
  'summary': true, // Boolean | By default in api version >= 1, flags will _not_ include their list of prerequisites, targets or rules.  Set summary=0 to include these fields for each flag returned.
  'archived': true, // Boolean | When set to 1, only archived flags will be included in the list of flags returned.  By default, archived flags are not included in the list of flags.
  'limit': 8.14, // Number | The number of objects to return. Defaults to -1, which returns everything.
  'offset': 8.14, // Number | Where to start in the list. This is for use with pagination. For example, an offset of 10 would skip the first 10 items and then return the next limit items.
  'filter': "filter_example", // String | A comma-separated list of filters. Each filter is of the form field:value.
  'sort': "sort_example" // String | A comma-separated list of fields to sort by. A field prefixed by a - will be sorted in descending order.
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
 **env** | [**[String]**](String.md)| By default, each feature will include configurations for each environment. You can filter environments with the env query parameter. For example, setting env=[\"production\"] will restrict the returned configurations to just your production environment. | [optional] 
 **summary** | **Boolean**| By default in api version >= 1, flags will _not_ include their list of prerequisites, targets or rules.  Set summary=0 to include these fields for each flag returned. | [optional] 
 **archived** | **Boolean**| When set to 1, only archived flags will be included in the list of flags returned.  By default, archived flags are not included in the list of flags. | [optional] 
 **limit** | **Number**| The number of objects to return. Defaults to -1, which returns everything. | [optional] 
 **offset** | **Number**| Where to start in the list. This is for use with pagination. For example, an offset of 10 would skip the first 10 items and then return the next limit items. | [optional] 
 **filter** | **String**| A comma-separated list of filters. Each filter is of the form field:value. | [optional] 
 **sort** | **String**| A comma-separated list of fields to sort by. A field prefixed by a - will be sorted in descending order. | [optional] 
 **tag** | **String**| Filter by tag. A tag can be used to group flags across projects. | [optional] 

### Return type

[**FeatureFlags**](FeatureFlags.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFlagConfigScheduledChange"></a>
# **getFlagConfigScheduledChange**
> FeatureFlagScheduledChange getFlagConfigScheduledChange(projectKey, featureFlagKey, environmentKey, scheduledChangeId)

Get a scheduled change on a feature flag by id.

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.FeatureFlagsApi();

var projectKey = "projectKey_example"; // String | The project key, used to tie the flags together under one project so they can be managed together.

var featureFlagKey = "featureFlagKey_example"; // String | The feature flag's key. The key identifies the flag in your code.

var environmentKey = "environmentKey_example"; // String | The environment key, used to tie together flag configuration and users under one environment so they can be managed together.

var scheduledChangeId = "scheduledChangeId_example"; // String | The id of the scheduled change


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFlagConfigScheduledChange(projectKey, featureFlagKey, environmentKey, scheduledChangeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectKey** | **String**| The project key, used to tie the flags together under one project so they can be managed together. | 
 **featureFlagKey** | **String**| The feature flag's key. The key identifies the flag in your code. | 
 **environmentKey** | **String**| The environment key, used to tie together flag configuration and users under one environment so they can be managed together. | 
 **scheduledChangeId** | **String**| The id of the scheduled change | 

### Return type

[**FeatureFlagScheduledChange**](FeatureFlagScheduledChange.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFlagConfigScheduledChanges"></a>
# **getFlagConfigScheduledChanges**
> FeatureFlagScheduledChanges getFlagConfigScheduledChanges(projectKey, featureFlagKey, environmentKey, )

Get all scheduled workflows for a feature flag by key.

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.FeatureFlagsApi();

var projectKey = "projectKey_example"; // String | The project key, used to tie the flags together under one project so they can be managed together.

var featureFlagKey = "featureFlagKey_example"; // String | The feature flag's key. The key identifies the flag in your code.

var environmentKey = "environmentKey_example"; // String | The environment key, used to tie together flag configuration and users under one environment so they can be managed together.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFlagConfigScheduledChanges(projectKey, featureFlagKey, environmentKey, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectKey** | **String**| The project key, used to tie the flags together under one project so they can be managed together. | 
 **featureFlagKey** | **String**| The feature flag's key. The key identifies the flag in your code. | 
 **environmentKey** | **String**| The environment key, used to tie together flag configuration and users under one environment so they can be managed together. | 

### Return type

[**FeatureFlagScheduledChanges**](FeatureFlagScheduledChanges.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFlagConfigScheduledChangesConflicts"></a>
# **getFlagConfigScheduledChangesConflicts**
> FeatureFlagScheduledChangesConflicts getFlagConfigScheduledChangesConflicts(projectKey, featureFlagKey, environmentKey, flagConfigScheduledChangesConflictsBody)

Lists conflicts between the given instructions and any existing scheduled changes for the feature flag. The actual HTTP verb should be REPORT, not POST.

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.FeatureFlagsApi();

var projectKey = "projectKey_example"; // String | The project key, used to tie the flags together under one project so they can be managed together.

var featureFlagKey = "featureFlagKey_example"; // String | The feature flag's key. The key identifies the flag in your code.

var environmentKey = "environmentKey_example"; // String | The environment key, used to tie together flag configuration and users under one environment so they can be managed together.

var flagConfigScheduledChangesConflictsBody = new LaunchDarklyApi.FlagConfigScheduledChangesConflictsBody(); // FlagConfigScheduledChangesConflictsBody | Used to determine if a semantic patch will result in conflicts with scheduled changes on a feature flag.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFlagConfigScheduledChangesConflicts(projectKey, featureFlagKey, environmentKey, flagConfigScheduledChangesConflictsBody, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectKey** | **String**| The project key, used to tie the flags together under one project so they can be managed together. | 
 **featureFlagKey** | **String**| The feature flag's key. The key identifies the flag in your code. | 
 **environmentKey** | **String**| The environment key, used to tie together flag configuration and users under one environment so they can be managed together. | 
 **flagConfigScheduledChangesConflictsBody** | [**FlagConfigScheduledChangesConflictsBody**](FlagConfigScheduledChangesConflictsBody.md)| Used to determine if a semantic patch will result in conflicts with scheduled changes on a feature flag. | 

### Return type

[**FeatureFlagScheduledChangesConflicts**](FeatureFlagScheduledChangesConflicts.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchExpiringUserTargets"></a>
# **patchExpiringUserTargets**
> UserTargetingExpirationForFlags patchExpiringUserTargets(projectKey, environmentKey, featureFlagKey, semanticPatchWithComment)

Update, add, or delete expiring user targets on feature flag

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.FeatureFlagsApi();

var projectKey = "projectKey_example"; // String | The project key, used to tie the flags together under one project so they can be managed together.

var environmentKey = "environmentKey_example"; // String | The environment key, used to tie together flag configuration and users under one environment so they can be managed together.

var featureFlagKey = "featureFlagKey_example"; // String | The feature flag's key. The key identifies the flag in your code.

var semanticPatchWithComment = null; // Object | Requires a Semantic Patch representation of the desired changes to the resource. 'https://apidocs.launchdarkly.com/reference#updates-via-semantic-patches'. The addition of comments is also supported.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patchExpiringUserTargets(projectKey, environmentKey, featureFlagKey, semanticPatchWithComment, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectKey** | **String**| The project key, used to tie the flags together under one project so they can be managed together. | 
 **environmentKey** | **String**| The environment key, used to tie together flag configuration and users under one environment so they can be managed together. | 
 **featureFlagKey** | **String**| The feature flag's key. The key identifies the flag in your code. | 
 **semanticPatchWithComment** | **Object**| Requires a Semantic Patch representation of the desired changes to the resource. 'https://apidocs.launchdarkly.com/reference#updates-via-semantic-patches'. The addition of comments is also supported. | 

### Return type

[**UserTargetingExpirationForFlags**](UserTargetingExpirationForFlags.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchFeatureFlag"></a>
# **patchFeatureFlag**
> FeatureFlag patchFeatureFlag(projectKey, featureFlagKey, patchComment)

Perform a partial update to a feature.

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.FeatureFlagsApi();

var projectKey = "projectKey_example"; // String | The project key, used to tie the flags together under one project so they can be managed together.

var featureFlagKey = "featureFlagKey_example"; // String | The feature flag's key. The key identifies the flag in your code.

var patchComment = new LaunchDarklyApi.PatchComment(); // PatchComment | Requires a JSON Patch representation of the desired changes to the project, and an optional comment. 'http://jsonpatch.com/' Feature flag patches also support JSON Merge Patch format. 'https://tools.ietf.org/html/rfc7386' The addition of comments is also supported.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patchFeatureFlag(projectKey, featureFlagKey, patchComment, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectKey** | **String**| The project key, used to tie the flags together under one project so they can be managed together. | 
 **featureFlagKey** | **String**| The feature flag's key. The key identifies the flag in your code. | 
 **patchComment** | [**PatchComment**](PatchComment.md)| Requires a JSON Patch representation of the desired changes to the project, and an optional comment. 'http://jsonpatch.com/' Feature flag patches also support JSON Merge Patch format. 'https://tools.ietf.org/html/rfc7386' The addition of comments is also supported. | 

### Return type

[**FeatureFlag**](FeatureFlag.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchFlagConfigScheduledChange"></a>
# **patchFlagConfigScheduledChange**
> FeatureFlagScheduledChange patchFlagConfigScheduledChange(projectKey, featureFlagKey, flagConfigScheduledChangesPatchBody, environmentKey, scheduledChangeId)

Updates an existing scheduled-change on a feature flag in an environment.

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.FeatureFlagsApi();

var projectKey = "projectKey_example"; // String | The project key, used to tie the flags together under one project so they can be managed together.

var featureFlagKey = "featureFlagKey_example"; // String | The feature flag's key. The key identifies the flag in your code.

var flagConfigScheduledChangesPatchBody = new LaunchDarklyApi.FlagConfigScheduledChangesPatchBody(); // FlagConfigScheduledChangesPatchBody | Update scheduled changes on a feature flag.

var environmentKey = "environmentKey_example"; // String | The environment key, used to tie together flag configuration and users under one environment so they can be managed together.

var scheduledChangeId = "scheduledChangeId_example"; // String | The id of the scheduled change


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patchFlagConfigScheduledChange(projectKey, featureFlagKey, flagConfigScheduledChangesPatchBody, environmentKey, scheduledChangeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectKey** | **String**| The project key, used to tie the flags together under one project so they can be managed together. | 
 **featureFlagKey** | **String**| The feature flag's key. The key identifies the flag in your code. | 
 **flagConfigScheduledChangesPatchBody** | [**FlagConfigScheduledChangesPatchBody**](FlagConfigScheduledChangesPatchBody.md)| Update scheduled changes on a feature flag. | 
 **environmentKey** | **String**| The environment key, used to tie together flag configuration and users under one environment so they can be managed together. | 
 **scheduledChangeId** | **String**| The id of the scheduled change | 

### Return type

[**FeatureFlagScheduledChange**](FeatureFlagScheduledChange.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postApplyApprovalRequest"></a>
# **postApplyApprovalRequest**
> ApprovalRequests postApplyApprovalRequest(projectKey, featureFlagKey, environmentKey, approvalRequestId, approvalRequestApplyConfigBody)

Apply approval request for a feature flag config

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.FeatureFlagsApi();

var projectKey = "projectKey_example"; // String | The project key, used to tie the flags together under one project so they can be managed together.

var featureFlagKey = "featureFlagKey_example"; // String | The feature flag's key. The key identifies the flag in your code.

var environmentKey = "environmentKey_example"; // String | The environment key, used to tie together flag configuration and users under one environment so they can be managed together.

var approvalRequestId = "approvalRequestId_example"; // String | The approval request ID

var approvalRequestApplyConfigBody = new LaunchDarklyApi.ApprovalRequestApplyConfigBody(); // ApprovalRequestApplyConfigBody | Apply an approval request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postApplyApprovalRequest(projectKey, featureFlagKey, environmentKey, approvalRequestId, approvalRequestApplyConfigBody, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectKey** | **String**| The project key, used to tie the flags together under one project so they can be managed together. | 
 **featureFlagKey** | **String**| The feature flag's key. The key identifies the flag in your code. | 
 **environmentKey** | **String**| The environment key, used to tie together flag configuration and users under one environment so they can be managed together. | 
 **approvalRequestId** | **String**| The approval request ID | 
 **approvalRequestApplyConfigBody** | [**ApprovalRequestApplyConfigBody**](ApprovalRequestApplyConfigBody.md)| Apply an approval request | 

### Return type

[**ApprovalRequests**](ApprovalRequests.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postApprovalRequest"></a>
# **postApprovalRequest**
> ApprovalRequest postApprovalRequest(projectKey, featureFlagKey, environmentKey, approvalRequestId, , opts)

Create an approval request for a feature flag config

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.FeatureFlagsApi();

var projectKey = "projectKey_example"; // String | The project key, used to tie the flags together under one project so they can be managed together.

var featureFlagKey = "featureFlagKey_example"; // String | The feature flag's key. The key identifies the flag in your code.

var environmentKey = "environmentKey_example"; // String | The environment key, used to tie together flag configuration and users under one environment so they can be managed together.

var approvalRequestId = "approvalRequestId_example"; // String | The approval request ID

var opts = { 
  'approvalRequestConfigBody': new LaunchDarklyApi.ApprovalRequestConfigBody() // ApprovalRequestConfigBody | Create a new approval request
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postApprovalRequest(projectKey, featureFlagKey, environmentKey, approvalRequestId, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectKey** | **String**| The project key, used to tie the flags together under one project so they can be managed together. | 
 **featureFlagKey** | **String**| The feature flag's key. The key identifies the flag in your code. | 
 **environmentKey** | **String**| The environment key, used to tie together flag configuration and users under one environment so they can be managed together. | 
 **approvalRequestId** | **String**| The approval request ID | 
 **approvalRequestConfigBody** | [**ApprovalRequestConfigBody**](ApprovalRequestConfigBody.md)| Create a new approval request | [optional] 

### Return type

[**ApprovalRequest**](ApprovalRequest.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postFeatureFlag"></a>
# **postFeatureFlag**
> FeatureFlag postFeatureFlag(projectKey, featureFlagBody, opts)

Creates a new feature flag.

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.FeatureFlagsApi();

var projectKey = "projectKey_example"; // String | The project key, used to tie the flags together under one project so they can be managed together.

var featureFlagBody = new LaunchDarklyApi.FeatureFlagBody(); // FeatureFlagBody | Create a new feature flag.

var opts = { 
  'clone': "clone_example" // String | The key of the feature flag to be cloned. The key identifies the flag in your code.  For example, setting clone=flagKey will copy the full targeting configuration for all environments (including on/off state) from the original flag to the new flag.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postFeatureFlag(projectKey, featureFlagBody, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectKey** | **String**| The project key, used to tie the flags together under one project so they can be managed together. | 
 **featureFlagBody** | [**FeatureFlagBody**](FeatureFlagBody.md)| Create a new feature flag. | 
 **clone** | **String**| The key of the feature flag to be cloned. The key identifies the flag in your code.  For example, setting clone=flagKey will copy the full targeting configuration for all environments (including on/off state) from the original flag to the new flag. | [optional] 

### Return type

[**FeatureFlag**](FeatureFlag.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postFlagConfigScheduledChanges"></a>
# **postFlagConfigScheduledChanges**
> FeatureFlagScheduledChange postFlagConfigScheduledChanges(projectKey, flagConfigScheduledChangesPostBody, featureFlagKey, environmentKey, )

Creates a new scheduled change for a feature flag.

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.FeatureFlagsApi();

var projectKey = "projectKey_example"; // String | The project key, used to tie the flags together under one project so they can be managed together.

var flagConfigScheduledChangesPostBody = new LaunchDarklyApi.FlagConfigScheduledChangesPostBody(); // FlagConfigScheduledChangesPostBody | Create scheduled changes on a feature flag.

var featureFlagKey = "featureFlagKey_example"; // String | The feature flag's key. The key identifies the flag in your code.

var environmentKey = "environmentKey_example"; // String | The environment key, used to tie together flag configuration and users under one environment so they can be managed together.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postFlagConfigScheduledChanges(projectKey, flagConfigScheduledChangesPostBody, featureFlagKey, environmentKey, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectKey** | **String**| The project key, used to tie the flags together under one project so they can be managed together. | 
 **flagConfigScheduledChangesPostBody** | [**FlagConfigScheduledChangesPostBody**](FlagConfigScheduledChangesPostBody.md)| Create scheduled changes on a feature flag. | 
 **featureFlagKey** | **String**| The feature flag's key. The key identifies the flag in your code. | 
 **environmentKey** | **String**| The environment key, used to tie together flag configuration and users under one environment so they can be managed together. | 

### Return type

[**FeatureFlagScheduledChange**](FeatureFlagScheduledChange.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postReviewApprovalRequest"></a>
# **postReviewApprovalRequest**
> ApprovalRequests postReviewApprovalRequest(projectKey, featureFlagKey, environmentKey, approvalRequestId, approvalRequestReviewConfigBody)

Review approval request for a feature flag config

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.FeatureFlagsApi();

var projectKey = "projectKey_example"; // String | The project key, used to tie the flags together under one project so they can be managed together.

var featureFlagKey = "featureFlagKey_example"; // String | The feature flag's key. The key identifies the flag in your code.

var environmentKey = "environmentKey_example"; // String | The environment key, used to tie together flag configuration and users under one environment so they can be managed together.

var approvalRequestId = "approvalRequestId_example"; // String | The approval request ID

var approvalRequestReviewConfigBody = new LaunchDarklyApi.ApprovalRequestReviewConfigBody(); // ApprovalRequestReviewConfigBody | Review an approval request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postReviewApprovalRequest(projectKey, featureFlagKey, environmentKey, approvalRequestId, approvalRequestReviewConfigBody, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectKey** | **String**| The project key, used to tie the flags together under one project so they can be managed together. | 
 **featureFlagKey** | **String**| The feature flag's key. The key identifies the flag in your code. | 
 **environmentKey** | **String**| The environment key, used to tie together flag configuration and users under one environment so they can be managed together. | 
 **approvalRequestId** | **String**| The approval request ID | 
 **approvalRequestReviewConfigBody** | [**ApprovalRequestReviewConfigBody**](ApprovalRequestReviewConfigBody.md)| Review an approval request | 

### Return type

[**ApprovalRequests**](ApprovalRequests.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

