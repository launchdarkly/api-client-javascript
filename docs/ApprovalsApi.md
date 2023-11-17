# LaunchDarklyApi.ApprovalsApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteApprovalRequest**](ApprovalsApi.md#deleteApprovalRequest) | **DELETE** /api/v2/approval-requests/{id} | Delete approval request
[**deleteApprovalRequestForFlag**](ApprovalsApi.md#deleteApprovalRequestForFlag) | **DELETE** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{id} | Delete approval request for a flag
[**getApprovalForFlag**](ApprovalsApi.md#getApprovalForFlag) | **GET** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{id} | Get approval request for a flag
[**getApprovalRequest**](ApprovalsApi.md#getApprovalRequest) | **GET** /api/v2/approval-requests/{id} | Get approval request
[**getApprovalRequests**](ApprovalsApi.md#getApprovalRequests) | **GET** /api/v2/approval-requests | List approval requests
[**getApprovalsForFlag**](ApprovalsApi.md#getApprovalsForFlag) | **GET** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests | List approval requests for a flag
[**postApprovalRequest**](ApprovalsApi.md#postApprovalRequest) | **POST** /api/v2/approval-requests | Create approval request
[**postApprovalRequestApply**](ApprovalsApi.md#postApprovalRequestApply) | **POST** /api/v2/approval-requests/{id}/apply | Apply approval request
[**postApprovalRequestApplyForFlag**](ApprovalsApi.md#postApprovalRequestApplyForFlag) | **POST** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{id}/apply | Apply approval request for a flag
[**postApprovalRequestForFlag**](ApprovalsApi.md#postApprovalRequestForFlag) | **POST** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests | Create approval request for a flag
[**postApprovalRequestReview**](ApprovalsApi.md#postApprovalRequestReview) | **POST** /api/v2/approval-requests/{id}/reviews | Review approval request
[**postApprovalRequestReviewForFlag**](ApprovalsApi.md#postApprovalRequestReviewForFlag) | **POST** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{id}/reviews | Review approval request for a flag
[**postFlagCopyConfigApprovalRequest**](ApprovalsApi.md#postFlagCopyConfigApprovalRequest) | **POST** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests-flag-copy | Create approval request to copy flag configurations across environments



## deleteApprovalRequest

> deleteApprovalRequest(id)

Delete approval request

Delete an approval request.

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
let id = "id_example"; // String | The approval request ID
apiInstance.deleteApprovalRequest(id, (error, data, response) => {
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
 **id** | **String**| The approval request ID | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteApprovalRequestForFlag

> deleteApprovalRequestForFlag(projectKey, featureFlagKey, environmentKey, id)

Delete approval request for a flag

Delete an approval request for a feature flag.

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
let featureFlagKey = "featureFlagKey_example"; // String | The feature flag key
let environmentKey = "environmentKey_example"; // String | The environment key
let id = "id_example"; // String | The feature flag approval request ID
apiInstance.deleteApprovalRequestForFlag(projectKey, featureFlagKey, environmentKey, id, (error, data, response) => {
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
 **featureFlagKey** | **String**| The feature flag key | 
 **environmentKey** | **String**| The environment key | 
 **id** | **String**| The feature flag approval request ID | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getApprovalForFlag

> FlagConfigApprovalRequestResponse getApprovalForFlag(projectKey, featureFlagKey, environmentKey, id)

Get approval request for a flag

Get a single approval request for a feature flag.

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
let featureFlagKey = "featureFlagKey_example"; // String | The feature flag key
let environmentKey = "environmentKey_example"; // String | The environment key
let id = "id_example"; // String | The feature flag approval request ID
apiInstance.getApprovalForFlag(projectKey, featureFlagKey, environmentKey, id, (error, data, response) => {
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
 **id** | **String**| The feature flag approval request ID | 

### Return type

[**FlagConfigApprovalRequestResponse**](FlagConfigApprovalRequestResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getApprovalRequest

> ExpandableApprovalRequestResponse getApprovalRequest(id, opts)

Get approval request

Get an approval request by approval request ID.  ### Expanding approval response  LaunchDarkly supports the &#x60;expand&#x60; query param to include additional fields in the response, with the following fields:  - &#x60;flag&#x60; includes the flag the approval request belongs to - &#x60;project&#x60; includes the project the approval request belongs to - &#x60;environments&#x60; includes the environments the approval request relates to  For example, &#x60;expand&#x3D;project,flag&#x60; includes the &#x60;project&#x60; and &#x60;flag&#x60; fields in the response. 

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
let id = "id_example"; // String | The approval request ID
let opts = {
  'expand': "expand_example" // String | A comma-separated list of fields to expand in the response. Supported fields are explained above.
};
apiInstance.getApprovalRequest(id, opts, (error, data, response) => {
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
 **id** | **String**| The approval request ID | 
 **expand** | **String**| A comma-separated list of fields to expand in the response. Supported fields are explained above. | [optional] 

### Return type

[**ExpandableApprovalRequestResponse**](ExpandableApprovalRequestResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getApprovalRequests

> ExpandableApprovalRequestsResponse getApprovalRequests(opts)

List approval requests

Get all approval requests.  ### Filtering approvals  LaunchDarkly supports the &#x60;filter&#x60; query param for filtering, with the following fields:  - &#x60;notifyMemberIds&#x60; filters for only approvals that are assigned to a member in the specified list. For example: &#x60;filter&#x3D;notifyMemberIds anyOf [\&quot;memberId1\&quot;, \&quot;memberId2\&quot;]&#x60;. - &#x60;requestorId&#x60; filters for only approvals that correspond to the ID of the member who requested the approval. For example: &#x60;filter&#x3D;requestorId equals 457034721476302714390214&#x60;. - &#x60;resourceId&#x60; filters for only approvals that correspond to the the specified resource identifier. For example: &#x60;filter&#x3D;resourceId equals proj/my-project:env/my-environment:flag/my-flag&#x60;. - &#x60;reviewStatus&#x60; filters for only approvals which correspond to the review status in the specified list. The possible values are &#x60;approved&#x60;, &#x60;declined&#x60;, and &#x60;pending&#x60;. For example: &#x60;filter&#x3D;reviewStatus anyOf [\&quot;pending\&quot;, \&quot;approved\&quot;]&#x60;. - &#x60;status&#x60; filters for only approvals which correspond to the status in the specified list. The possible values are &#x60;pending&#x60;, &#x60;scheduled&#x60;, &#x60;failed&#x60;, and &#x60;completed&#x60;. For example: &#x60;filter&#x3D;status anyOf [\&quot;pending\&quot;, \&quot;scheduled\&quot;]&#x60;.  You can also apply multiple filters at once. For example, setting &#x60;filter&#x3D;projectKey equals my-project, reviewStatus anyOf [\&quot;pending\&quot;,\&quot;approved\&quot;]&#x60; matches approval requests which correspond to the &#x60;my-project&#x60; project key, and a review status of either &#x60;pending&#x60; or &#x60;approved&#x60;.  ### Expanding approval response  LaunchDarkly supports the &#x60;expand&#x60; query param to include additional fields in the response, with the following fields:  - &#x60;flag&#x60; includes the flag the approval request belongs to - &#x60;project&#x60; includes the project the approval request belongs to - &#x60;environments&#x60; includes the environments the approval request relates to  For example, &#x60;expand&#x3D;project,flag&#x60; includes the &#x60;project&#x60; and &#x60;flag&#x60; fields in the response. 

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
let opts = {
  'filter': "filter_example", // String | A comma-separated list of filters. Each filter is of the form `field operator value`. Supported fields are explained above.
  'expand': "expand_example", // String | A comma-separated list of fields to expand in the response. Supported fields are explained above.
  'limit': 789, // Number | The number of approvals to return. Defaults to 20. Maximum limit is 200.
  'offset': 789 // Number | Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`.
};
apiInstance.getApprovalRequests(opts, (error, data, response) => {
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
 **filter** | **String**| A comma-separated list of filters. Each filter is of the form &#x60;field operator value&#x60;. Supported fields are explained above. | [optional] 
 **expand** | **String**| A comma-separated list of fields to expand in the response. Supported fields are explained above. | [optional] 
 **limit** | **Number**| The number of approvals to return. Defaults to 20. Maximum limit is 200. | [optional] 
 **offset** | **Number**| Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query &#x60;limit&#x60;. | [optional] 

### Return type

[**ExpandableApprovalRequestsResponse**](ExpandableApprovalRequestsResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getApprovalsForFlag

> FlagConfigApprovalRequestsResponse getApprovalsForFlag(projectKey, featureFlagKey, environmentKey)

List approval requests for a flag

Get all approval requests for a feature flag.

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
let featureFlagKey = "featureFlagKey_example"; // String | The feature flag key
let environmentKey = "environmentKey_example"; // String | The environment key
apiInstance.getApprovalsForFlag(projectKey, featureFlagKey, environmentKey, (error, data, response) => {
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

### Return type

[**FlagConfigApprovalRequestsResponse**](FlagConfigApprovalRequestsResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postApprovalRequest

> ApprovalRequestResponse postApprovalRequest(createApprovalRequestRequest)

Create approval request

Create an approval request.  This endpoint currently supports creating an approval request for a flag across all environments with the following instructions:  - &#x60;addVariation&#x60; - &#x60;removeVariation&#x60; - &#x60;updateVariation&#x60; - &#x60;updateDefaultVariation&#x60;  For details on using these instructions, read [Update feature flag](/tag/Feature-flags#operation/patchFeatureFlag).  To create an approval for a flag specific to an environment, use [Create approval request for a flag](/tag/Approvals#operation/postApprovalRequestForFlag). 

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
let createApprovalRequestRequest = new LaunchDarklyApi.CreateApprovalRequestRequest(); // CreateApprovalRequestRequest | 
apiInstance.postApprovalRequest(createApprovalRequestRequest, (error, data, response) => {
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
 **createApprovalRequestRequest** | [**CreateApprovalRequestRequest**](CreateApprovalRequestRequest.md)|  | 

### Return type

[**ApprovalRequestResponse**](ApprovalRequestResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postApprovalRequestApply

> ApprovalRequestResponse postApprovalRequestApply(id, postApprovalRequestApplyRequest)

Apply approval request

Apply an approval request that has been approved.

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
let id = "id_example"; // String | The feature flag approval request ID
let postApprovalRequestApplyRequest = new LaunchDarklyApi.PostApprovalRequestApplyRequest(); // PostApprovalRequestApplyRequest | 
apiInstance.postApprovalRequestApply(id, postApprovalRequestApplyRequest, (error, data, response) => {
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
 **id** | **String**| The feature flag approval request ID | 
 **postApprovalRequestApplyRequest** | [**PostApprovalRequestApplyRequest**](PostApprovalRequestApplyRequest.md)|  | 

### Return type

[**ApprovalRequestResponse**](ApprovalRequestResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postApprovalRequestApplyForFlag

> FlagConfigApprovalRequestResponse postApprovalRequestApplyForFlag(projectKey, featureFlagKey, environmentKey, id, postApprovalRequestApplyRequest)

Apply approval request for a flag

Apply an approval request that has been approved.

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
let featureFlagKey = "featureFlagKey_example"; // String | The feature flag key
let environmentKey = "environmentKey_example"; // String | The environment key
let id = "id_example"; // String | The feature flag approval request ID
let postApprovalRequestApplyRequest = new LaunchDarklyApi.PostApprovalRequestApplyRequest(); // PostApprovalRequestApplyRequest | 
apiInstance.postApprovalRequestApplyForFlag(projectKey, featureFlagKey, environmentKey, id, postApprovalRequestApplyRequest, (error, data, response) => {
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
 **id** | **String**| The feature flag approval request ID | 
 **postApprovalRequestApplyRequest** | [**PostApprovalRequestApplyRequest**](PostApprovalRequestApplyRequest.md)|  | 

### Return type

[**FlagConfigApprovalRequestResponse**](FlagConfigApprovalRequestResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postApprovalRequestForFlag

> FlagConfigApprovalRequestResponse postApprovalRequestForFlag(projectKey, featureFlagKey, environmentKey, createFlagConfigApprovalRequestRequest)

Create approval request for a flag

Create an approval request for a feature flag.

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
let featureFlagKey = "featureFlagKey_example"; // String | The feature flag key
let environmentKey = "environmentKey_example"; // String | The environment key
let createFlagConfigApprovalRequestRequest = new LaunchDarklyApi.CreateFlagConfigApprovalRequestRequest(); // CreateFlagConfigApprovalRequestRequest | 
apiInstance.postApprovalRequestForFlag(projectKey, featureFlagKey, environmentKey, createFlagConfigApprovalRequestRequest, (error, data, response) => {
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
 **createFlagConfigApprovalRequestRequest** | [**CreateFlagConfigApprovalRequestRequest**](CreateFlagConfigApprovalRequestRequest.md)|  | 

### Return type

[**FlagConfigApprovalRequestResponse**](FlagConfigApprovalRequestResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postApprovalRequestReview

> ApprovalRequestResponse postApprovalRequestReview(id, postApprovalRequestReviewRequest)

Review approval request

Review an approval request by approving or denying changes.

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
let id = "id_example"; // String | The approval request ID
let postApprovalRequestReviewRequest = new LaunchDarklyApi.PostApprovalRequestReviewRequest(); // PostApprovalRequestReviewRequest | 
apiInstance.postApprovalRequestReview(id, postApprovalRequestReviewRequest, (error, data, response) => {
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
 **id** | **String**| The approval request ID | 
 **postApprovalRequestReviewRequest** | [**PostApprovalRequestReviewRequest**](PostApprovalRequestReviewRequest.md)|  | 

### Return type

[**ApprovalRequestResponse**](ApprovalRequestResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postApprovalRequestReviewForFlag

> FlagConfigApprovalRequestResponse postApprovalRequestReviewForFlag(projectKey, featureFlagKey, environmentKey, id, postApprovalRequestReviewRequest)

Review approval request for a flag

Review an approval request by approving or denying changes.

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
let featureFlagKey = "featureFlagKey_example"; // String | The feature flag key
let environmentKey = "environmentKey_example"; // String | The environment key
let id = "id_example"; // String | The feature flag approval request ID
let postApprovalRequestReviewRequest = new LaunchDarklyApi.PostApprovalRequestReviewRequest(); // PostApprovalRequestReviewRequest | 
apiInstance.postApprovalRequestReviewForFlag(projectKey, featureFlagKey, environmentKey, id, postApprovalRequestReviewRequest, (error, data, response) => {
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
let featureFlagKey = "featureFlagKey_example"; // String | The feature flag key
let environmentKey = "environmentKey_example"; // String | The environment key for the target environment
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
 **featureFlagKey** | **String**| The feature flag key | 
 **environmentKey** | **String**| The environment key for the target environment | 
 **createCopyFlagConfigApprovalRequestRequest** | [**CreateCopyFlagConfigApprovalRequestRequest**](CreateCopyFlagConfigApprovalRequestRequest.md)|  | 

### Return type

[**FlagConfigApprovalRequestResponse**](FlagConfigApprovalRequestResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

