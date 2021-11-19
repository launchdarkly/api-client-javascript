# LaunchDarklyApi.ApprovalsApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteApprovalRequest**](ApprovalsApi.md#deleteApprovalRequest) | **DELETE** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{id} | Delete approval request
[**getApproval**](ApprovalsApi.md#getApproval) | **GET** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{id} | Get approval request
[**getApprovals**](ApprovalsApi.md#getApprovals) | **GET** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests | List all approval requests
[**postApprovalRequest**](ApprovalsApi.md#postApprovalRequest) | **POST** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests | Create approval request
[**postApprovalRequestApplyRequest**](ApprovalsApi.md#postApprovalRequestApplyRequest) | **POST** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{id}/apply | Apply approval request
[**postApprovalRequestReview**](ApprovalsApi.md#postApprovalRequestReview) | **POST** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{id}/reviews | Review approval request
[**postFlagCopyConfigApprovalRequest**](ApprovalsApi.md#postFlagCopyConfigApprovalRequest) | **POST** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests-flag-copy | Create approval request to copy flag configurations across environments



## deleteApprovalRequest

> deleteApprovalRequest(projectKey, featureFlagKey, environmentKey, id)

Delete approval request

Delete an approval request for a feature flag

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ApprovalsApi();
let projectKey = "projectKey_example"; // String | The project key
let featureFlagKey = "featureFlagKey_example"; // String | The feature flag's key
let environmentKey = "environmentKey_example"; // String | The environment key
let id = "id_example"; // String | The feature flag approval request ID
apiInstance.deleteApprovalRequest(projectKey, featureFlagKey, environmentKey, id, (error, data, response) => {
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
 **id** | **String**| The feature flag approval request ID | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getApproval

> FlagConfigApprovalRequestResponse getApproval(projectKey, featureFlagKey, environmentKey, id)

Get approval request

Get a single approval request for a feature flag

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ApprovalsApi();
let projectKey = "projectKey_example"; // String | The project key
let featureFlagKey = "featureFlagKey_example"; // String | The feature flag's key
let environmentKey = "environmentKey_example"; // String | The environment key
let id = "id_example"; // String | The feature flag approval request ID
apiInstance.getApproval(projectKey, featureFlagKey, environmentKey, id, (error, data, response) => {
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
 **id** | **String**| The feature flag approval request ID | 

### Return type

[**FlagConfigApprovalRequestResponse**](FlagConfigApprovalRequestResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getApprovals

> FlagConfigApprovalRequestsResponse getApprovals(projectKey, featureFlagKey, environmentKey)

List all approval requests

Get all approval requests for a feature flag

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ApprovalsApi();
let projectKey = "projectKey_example"; // String | The project key
let featureFlagKey = "featureFlagKey_example"; // String | The feature flag's key
let environmentKey = "environmentKey_example"; // String | The environment key
apiInstance.getApprovals(projectKey, featureFlagKey, environmentKey, (error, data, response) => {
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

[**FlagConfigApprovalRequestsResponse**](FlagConfigApprovalRequestsResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postApprovalRequest

> FlagConfigApprovalRequestResponse postApprovalRequest(projectKey, featureFlagKey, environmentKey, createFlagConfigApprovalRequestRequest)

Create approval request

Create an approval request for a feature flag

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ApprovalsApi();
let projectKey = "projectKey_example"; // String | The project key
let featureFlagKey = "featureFlagKey_example"; // String | The feature flag's key
let environmentKey = "environmentKey_example"; // String | The environment key
let createFlagConfigApprovalRequestRequest = new LaunchDarklyApi.CreateFlagConfigApprovalRequestRequest(); // CreateFlagConfigApprovalRequestRequest | 
apiInstance.postApprovalRequest(projectKey, featureFlagKey, environmentKey, createFlagConfigApprovalRequestRequest, (error, data, response) => {
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
 **createFlagConfigApprovalRequestRequest** | [**CreateFlagConfigApprovalRequestRequest**](CreateFlagConfigApprovalRequestRequest.md)|  | 

### Return type

[**FlagConfigApprovalRequestResponse**](FlagConfigApprovalRequestResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postApprovalRequestApplyRequest

> FlagConfigApprovalRequestResponse postApprovalRequestApplyRequest(projectKey, featureFlagKey, environmentKey, id, postApprovalRequestApplyRequest)

Apply approval request

Apply approval request by either approving or declining changes.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ApprovalsApi();
let projectKey = "projectKey_example"; // String | The project key
let featureFlagKey = "featureFlagKey_example"; // String | The feature flag's key
let environmentKey = "environmentKey_example"; // String | The environment key
let id = "id_example"; // String | The feature flag approval request ID
let postApprovalRequestApplyRequest = new LaunchDarklyApi.PostApprovalRequestApplyRequest(); // PostApprovalRequestApplyRequest | 
apiInstance.postApprovalRequestApplyRequest(projectKey, featureFlagKey, environmentKey, id, postApprovalRequestApplyRequest, (error, data, response) => {
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
 **id** | **String**| The feature flag approval request ID | 
 **postApprovalRequestApplyRequest** | [**PostApprovalRequestApplyRequest**](PostApprovalRequestApplyRequest.md)|  | 

### Return type

[**FlagConfigApprovalRequestResponse**](FlagConfigApprovalRequestResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postApprovalRequestReview

> FlagConfigApprovalRequestResponse postApprovalRequestReview(projectKey, featureFlagKey, environmentKey, id, postApprovalRequestReviewRequest)

Review approval request

Review approval request by either approving or declining changes.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ApprovalsApi();
let projectKey = "projectKey_example"; // String | The project key
let featureFlagKey = "featureFlagKey_example"; // String | The feature flag's key
let environmentKey = "environmentKey_example"; // String | The environment key
let id = "id_example"; // String | The feature flag approval request ID
let postApprovalRequestReviewRequest = new LaunchDarklyApi.PostApprovalRequestReviewRequest(); // PostApprovalRequestReviewRequest | 
apiInstance.postApprovalRequestReview(projectKey, featureFlagKey, environmentKey, id, postApprovalRequestReviewRequest, (error, data, response) => {
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
 **id** | **String**| The feature flag approval request ID | 
 **postApprovalRequestReviewRequest** | [**PostApprovalRequestReviewRequest**](PostApprovalRequestReviewRequest.md)|  | 

### Return type

[**FlagConfigApprovalRequestResponse**](FlagConfigApprovalRequestResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postFlagCopyConfigApprovalRequest

> FlagConfigApprovalRequestResponse postFlagCopyConfigApprovalRequest(projectKey, featureFlagKey, environmentKey, createCopyFlagConfigApprovalRequestRequest)

Create approval request to copy flag configurations across environments

Create an approval request to copy a feature flag&#39;s configuration across environments.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ApprovalsApi();
let projectKey = "projectKey_example"; // String | The project key
let featureFlagKey = "featureFlagKey_example"; // String | The feature flag's key
let environmentKey = "environmentKey_example"; // String | The environment key
let createCopyFlagConfigApprovalRequestRequest = new LaunchDarklyApi.CreateCopyFlagConfigApprovalRequestRequest(); // CreateCopyFlagConfigApprovalRequestRequest | 
apiInstance.postFlagCopyConfigApprovalRequest(projectKey, featureFlagKey, environmentKey, createCopyFlagConfigApprovalRequestRequest, (error, data, response) => {
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
 **createCopyFlagConfigApprovalRequestRequest** | [**CreateCopyFlagConfigApprovalRequestRequest**](CreateCopyFlagConfigApprovalRequestRequest.md)|  | 

### Return type

[**FlagConfigApprovalRequestResponse**](FlagConfigApprovalRequestResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

