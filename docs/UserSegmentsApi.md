# LaunchDarklyApi.UserSegmentsApi

All URIs are relative to *https://app.launchdarkly.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteUserSegment**](UserSegmentsApi.md#deleteUserSegment) | **DELETE** /segments/{projectKey}/{environmentKey}/{userSegmentKey} | Delete a user segment.
[**getExpiringUserTargetsOnSegment**](UserSegmentsApi.md#getExpiringUserTargetsOnSegment) | **GET** /segments/{projectKey}/{userSegmentKey}/expiring-user-targets/{environmentKey} | Get expiring user targets for user segment
[**getUserSegment**](UserSegmentsApi.md#getUserSegment) | **GET** /segments/{projectKey}/{environmentKey}/{userSegmentKey} | Get a single user segment by key.
[**getUserSegments**](UserSegmentsApi.md#getUserSegments) | **GET** /segments/{projectKey}/{environmentKey} | Get a list of all user segments in the given project.
[**patchExpiringUserTargetsOnSegment**](UserSegmentsApi.md#patchExpiringUserTargetsOnSegment) | **PATCH** /segments/{projectKey}/{userSegmentKey}/expiring-user-targets/{environmentKey} | Update, add, or delete expiring user targets on user segment
[**patchUserSegment**](UserSegmentsApi.md#patchUserSegment) | **PATCH** /segments/{projectKey}/{environmentKey}/{userSegmentKey} | Perform a partial update to a user segment.
[**postUserSegment**](UserSegmentsApi.md#postUserSegment) | **POST** /segments/{projectKey}/{environmentKey} | Creates a new user segment.
[**updateBigSegmentTargets**](UserSegmentsApi.md#updateBigSegmentTargets) | **POST** /segments/{projectKey}/{environmentKey}/{userSegmentKey}/users | Update targets included or excluded in a big segment


<a name="deleteUserSegment"></a>
# **deleteUserSegment**
> deleteUserSegment(projectKey, environmentKey, userSegmentKey, )

Delete a user segment.

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.UserSegmentsApi();

var projectKey = "projectKey_example"; // String | The project key, used to tie the flags together under one project so they can be managed together.

var environmentKey = "environmentKey_example"; // String | The environment key, used to tie together flag configuration and users under one environment so they can be managed together.

var userSegmentKey = "userSegmentKey_example"; // String | The user segment's key. The key identifies the user segment in your code.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteUserSegment(projectKey, environmentKey, userSegmentKey, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectKey** | **String**| The project key, used to tie the flags together under one project so they can be managed together. | 
 **environmentKey** | **String**| The environment key, used to tie together flag configuration and users under one environment so they can be managed together. | 
 **userSegmentKey** | **String**| The user segment's key. The key identifies the user segment in your code. | 

### Return type

null (empty response body)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getExpiringUserTargetsOnSegment"></a>
# **getExpiringUserTargetsOnSegment**
> UserTargetingExpirationForSegment getExpiringUserTargetsOnSegment(projectKey, environmentKey, userSegmentKey, )

Get expiring user targets for user segment

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.UserSegmentsApi();

var projectKey = "projectKey_example"; // String | The project key, used to tie the flags together under one project so they can be managed together.

var environmentKey = "environmentKey_example"; // String | The environment key, used to tie together flag configuration and users under one environment so they can be managed together.

var userSegmentKey = "userSegmentKey_example"; // String | The user segment's key. The key identifies the user segment in your code.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getExpiringUserTargetsOnSegment(projectKey, environmentKey, userSegmentKey, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectKey** | **String**| The project key, used to tie the flags together under one project so they can be managed together. | 
 **environmentKey** | **String**| The environment key, used to tie together flag configuration and users under one environment so they can be managed together. | 
 **userSegmentKey** | **String**| The user segment's key. The key identifies the user segment in your code. | 

### Return type

[**UserTargetingExpirationForSegment**](UserTargetingExpirationForSegment.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUserSegment"></a>
# **getUserSegment**
> UserSegment getUserSegment(projectKey, environmentKey, userSegmentKey, )

Get a single user segment by key.

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.UserSegmentsApi();

var projectKey = "projectKey_example"; // String | The project key, used to tie the flags together under one project so they can be managed together.

var environmentKey = "environmentKey_example"; // String | The environment key, used to tie together flag configuration and users under one environment so they can be managed together.

var userSegmentKey = "userSegmentKey_example"; // String | The user segment's key. The key identifies the user segment in your code.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserSegment(projectKey, environmentKey, userSegmentKey, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectKey** | **String**| The project key, used to tie the flags together under one project so they can be managed together. | 
 **environmentKey** | **String**| The environment key, used to tie together flag configuration and users under one environment so they can be managed together. | 
 **userSegmentKey** | **String**| The user segment's key. The key identifies the user segment in your code. | 

### Return type

[**UserSegment**](UserSegment.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUserSegments"></a>
# **getUserSegments**
> UserSegments getUserSegments(projectKey, environmentKey, , opts)

Get a list of all user segments in the given project.

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.UserSegmentsApi();

var projectKey = "projectKey_example"; // String | The project key, used to tie the flags together under one project so they can be managed together.

var environmentKey = "environmentKey_example"; // String | The environment key, used to tie together flag configuration and users under one environment so they can be managed together.

var opts = { 
  'tag': "tag_example" // String | Filter by tag. A tag can be used to group flags across projects.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserSegments(projectKey, environmentKey, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectKey** | **String**| The project key, used to tie the flags together under one project so they can be managed together. | 
 **environmentKey** | **String**| The environment key, used to tie together flag configuration and users under one environment so they can be managed together. | 
 **tag** | **String**| Filter by tag. A tag can be used to group flags across projects. | [optional] 

### Return type

[**UserSegments**](UserSegments.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchExpiringUserTargetsOnSegment"></a>
# **patchExpiringUserTargetsOnSegment**
> UserTargetingExpirationForSegment patchExpiringUserTargetsOnSegment(projectKey, environmentKey, userSegmentKey, semanticPatchWithComment)

Update, add, or delete expiring user targets on user segment

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.UserSegmentsApi();

var projectKey = "projectKey_example"; // String | The project key, used to tie the flags together under one project so they can be managed together.

var environmentKey = "environmentKey_example"; // String | The environment key, used to tie together flag configuration and users under one environment so they can be managed together.

var userSegmentKey = "userSegmentKey_example"; // String | The user segment's key. The key identifies the user segment in your code.

var semanticPatchWithComment = null; // Object | Requires a Semantic Patch representation of the desired changes to the resource. 'https://apidocs.launchdarkly.com/reference#updates-via-semantic-patches'. The addition of comments is also supported.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patchExpiringUserTargetsOnSegment(projectKey, environmentKey, userSegmentKey, semanticPatchWithComment, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectKey** | **String**| The project key, used to tie the flags together under one project so they can be managed together. | 
 **environmentKey** | **String**| The environment key, used to tie together flag configuration and users under one environment so they can be managed together. | 
 **userSegmentKey** | **String**| The user segment's key. The key identifies the user segment in your code. | 
 **semanticPatchWithComment** | **Object**| Requires a Semantic Patch representation of the desired changes to the resource. 'https://apidocs.launchdarkly.com/reference#updates-via-semantic-patches'. The addition of comments is also supported. | 

### Return type

[**UserTargetingExpirationForSegment**](UserTargetingExpirationForSegment.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchUserSegment"></a>
# **patchUserSegment**
> UserSegment patchUserSegment(projectKey, environmentKey, userSegmentKey, patchOnly)

Perform a partial update to a user segment.

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.UserSegmentsApi();

var projectKey = "projectKey_example"; // String | The project key, used to tie the flags together under one project so they can be managed together.

var environmentKey = "environmentKey_example"; // String | The environment key, used to tie together flag configuration and users under one environment so they can be managed together.

var userSegmentKey = "userSegmentKey_example"; // String | The user segment's key. The key identifies the user segment in your code.

var patchOnly = [new LaunchDarklyApi.PatchOperation()]; // [PatchOperation] | Requires a JSON Patch representation of the desired changes to the project. 'http://jsonpatch.com/' Feature flag patches also support JSON Merge Patch format. 'https://tools.ietf.org/html/rfc7386' The addition of comments is also supported.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patchUserSegment(projectKey, environmentKey, userSegmentKey, patchOnly, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectKey** | **String**| The project key, used to tie the flags together under one project so they can be managed together. | 
 **environmentKey** | **String**| The environment key, used to tie together flag configuration and users under one environment so they can be managed together. | 
 **userSegmentKey** | **String**| The user segment's key. The key identifies the user segment in your code. | 
 **patchOnly** | [**[PatchOperation]**](PatchOperation.md)| Requires a JSON Patch representation of the desired changes to the project. 'http://jsonpatch.com/' Feature flag patches also support JSON Merge Patch format. 'https://tools.ietf.org/html/rfc7386' The addition of comments is also supported. | 

### Return type

[**UserSegment**](UserSegment.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postUserSegment"></a>
# **postUserSegment**
> UserSegment postUserSegment(projectKey, environmentKey, userSegmentBody)

Creates a new user segment.

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.UserSegmentsApi();

var projectKey = "projectKey_example"; // String | The project key, used to tie the flags together under one project so they can be managed together.

var environmentKey = "environmentKey_example"; // String | The environment key, used to tie together flag configuration and users under one environment so they can be managed together.

var userSegmentBody = new LaunchDarklyApi.UserSegmentBody(); // UserSegmentBody | Create a new user segment.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postUserSegment(projectKey, environmentKey, userSegmentBody, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectKey** | **String**| The project key, used to tie the flags together under one project so they can be managed together. | 
 **environmentKey** | **String**| The environment key, used to tie together flag configuration and users under one environment so they can be managed together. | 
 **userSegmentBody** | [**UserSegmentBody**](UserSegmentBody.md)| Create a new user segment. | 

### Return type

[**UserSegment**](UserSegment.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateBigSegmentTargets"></a>
# **updateBigSegmentTargets**
> updateBigSegmentTargets(projectKey, environmentKey, userSegmentKey, bigSegmentTargetsBody)

Update targets included or excluded in a big segment

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.UserSegmentsApi();

var projectKey = "projectKey_example"; // String | The project key, used to tie the flags together under one project so they can be managed together.

var environmentKey = "environmentKey_example"; // String | The environment key, used to tie together flag configuration and users under one environment so they can be managed together.

var userSegmentKey = "userSegmentKey_example"; // String | The user segment's key. The key identifies the user segment in your code.

var bigSegmentTargetsBody = new LaunchDarklyApi.BigSegmentTargetsBody(); // BigSegmentTargetsBody | Add or remove user targets to the included or excluded lists on a big segment. Contact your account manager for early access to this feature.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateBigSegmentTargets(projectKey, environmentKey, userSegmentKey, bigSegmentTargetsBody, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectKey** | **String**| The project key, used to tie the flags together under one project so they can be managed together. | 
 **environmentKey** | **String**| The environment key, used to tie together flag configuration and users under one environment so they can be managed together. | 
 **userSegmentKey** | **String**| The user segment's key. The key identifies the user segment in your code. | 
 **bigSegmentTargetsBody** | [**BigSegmentTargetsBody**](BigSegmentTargetsBody.md)| Add or remove user targets to the included or excluded lists on a big segment. Contact your account manager for early access to this feature. | 

### Return type

null (empty response body)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

