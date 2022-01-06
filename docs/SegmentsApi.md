# LaunchDarklyApi.SegmentsApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteSegment**](SegmentsApi.md#deleteSegment) | **DELETE** /api/v2/segments/{projKey}/{envKey}/{key} | Delete segment
[**getExpiringUserTargetsForSegment**](SegmentsApi.md#getExpiringUserTargetsForSegment) | **GET** /api/v2/segments/{projKey}/{segmentKey}/expiring-user-targets/{envKey} | Get expiring user targets for segment
[**getSegment**](SegmentsApi.md#getSegment) | **GET** /api/v2/segments/{projKey}/{envKey}/{key} | Get segment
[**getSegmentMembershipForUser**](SegmentsApi.md#getSegmentMembershipForUser) | **GET** /api/v2/segments/{projKey}/{envKey}/{key}/users/{userKey} | Get Big Segment membership for user
[**getSegments**](SegmentsApi.md#getSegments) | **GET** /api/v2/segments/{projKey}/{envKey} | List segments
[**patchExpiringUserTargetsForSegment**](SegmentsApi.md#patchExpiringUserTargetsForSegment) | **PATCH** /api/v2/segments/{projKey}/{segmentKey}/expiring-user-targets/{envKey} | Update expiring user targets for segment
[**patchSegment**](SegmentsApi.md#patchSegment) | **PATCH** /api/v2/segments/{projKey}/{envKey}/{key} | Patch segment
[**postSegment**](SegmentsApi.md#postSegment) | **POST** /api/v2/segments/{projKey}/{envKey} | Create segment
[**updateBigSegmentTargets**](SegmentsApi.md#updateBigSegmentTargets) | **POST** /api/v2/segments/{projKey}/{envKey}/{key}/users | Update targets on a Big Segment



## deleteSegment

> deleteSegment(projKey, envKey, key)

Delete segment

Delete a user segment.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.SegmentsApi();
let projKey = "projKey_example"; // String | The project key.
let envKey = "envKey_example"; // String | The environment key.
let key = "key_example"; // String | The user segment key.
apiInstance.deleteSegment(projKey, envKey, key, (error, data, response) => {
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
 **projKey** | **String**| The project key. | 
 **envKey** | **String**| The environment key. | 
 **key** | **String**| The user segment key. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getExpiringUserTargetsForSegment

> ExpiringUserTargetGetResponse getExpiringUserTargetsForSegment(projKey, envKey, segmentKey)

Get expiring user targets for segment

Get a list of a segment&#39;s user targets that are scheduled for removal

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.SegmentsApi();
let projKey = "projKey_example"; // String | The project key.
let envKey = "envKey_example"; // String | The environment key.
let segmentKey = "segmentKey_example"; // String | The segment key.
apiInstance.getExpiringUserTargetsForSegment(projKey, envKey, segmentKey, (error, data, response) => {
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
 **projKey** | **String**| The project key. | 
 **envKey** | **String**| The environment key. | 
 **segmentKey** | **String**| The segment key. | 

### Return type

[**ExpiringUserTargetGetResponse**](ExpiringUserTargetGetResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSegment

> UserSegment getSegment(projKey, envKey, key)

Get segment

Get a single user segment by key

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.SegmentsApi();
let projKey = "projKey_example"; // String | The project key.
let envKey = "envKey_example"; // String | The environment key.
let key = "key_example"; // String | The segment key
apiInstance.getSegment(projKey, envKey, key, (error, data, response) => {
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
 **projKey** | **String**| The project key. | 
 **envKey** | **String**| The environment key. | 
 **key** | **String**| The segment key | 

### Return type

[**UserSegment**](UserSegment.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSegmentMembershipForUser

> BigSegmentTarget getSegmentMembershipForUser(projKey, envKey, key, userKey)

Get Big Segment membership for user

Returns the membership status (included/excluded) for a given user in this segment. This operation does not support basic Segments.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.SegmentsApi();
let projKey = "projKey_example"; // String | The project key.
let envKey = "envKey_example"; // String | The environment key.
let key = "key_example"; // String | The segment key.
let userKey = "userKey_example"; // String | The user key.
apiInstance.getSegmentMembershipForUser(projKey, envKey, key, userKey, (error, data, response) => {
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
 **projKey** | **String**| The project key. | 
 **envKey** | **String**| The environment key. | 
 **key** | **String**| The segment key. | 
 **userKey** | **String**| The user key. | 

### Return type

[**BigSegmentTarget**](BigSegmentTarget.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSegments

> UserSegments getSegments(projKey, envKey)

List segments

Get a list of all user segments in the given project

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.SegmentsApi();
let projKey = "projKey_example"; // String | The project key.
let envKey = "envKey_example"; // String | The environment key.
apiInstance.getSegments(projKey, envKey, (error, data, response) => {
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
 **projKey** | **String**| The project key. | 
 **envKey** | **String**| The environment key. | 

### Return type

[**UserSegments**](UserSegments.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## patchExpiringUserTargetsForSegment

> ExpiringUserTargetPatchResponse patchExpiringUserTargetsForSegment(projKey, envKey, segmentKey, patchSegmentRequest)

Update expiring user targets for segment

Update the list of a segment&#39;s user targets that are scheduled for removal&lt;br /&gt;&lt;br /&gt;Requires a semantic patch representation of the desired changes to the resource. To learn more about semantic patches, read [Updates](/reference#updates-via-semantic-patches).&lt;br /&gt;&lt;br /&gt;If the request is well-formed but any of its instructions failed to process, this operation returns status code &#x60;200&#x60;. In this case, the response &#x60;errors&#x60; array will be non-empty.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.SegmentsApi();
let projKey = "projKey_example"; // String | The project key.
let envKey = "envKey_example"; // String | The environment key.
let segmentKey = "segmentKey_example"; // String | The user segment key.
let patchSegmentRequest = new LaunchDarklyApi.PatchSegmentRequest(); // PatchSegmentRequest | 
apiInstance.patchExpiringUserTargetsForSegment(projKey, envKey, segmentKey, patchSegmentRequest, (error, data, response) => {
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
 **projKey** | **String**| The project key. | 
 **envKey** | **String**| The environment key. | 
 **segmentKey** | **String**| The user segment key. | 
 **patchSegmentRequest** | [**PatchSegmentRequest**](PatchSegmentRequest.md)|  | 

### Return type

[**ExpiringUserTargetPatchResponse**](ExpiringUserTargetPatchResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## patchSegment

> UserSegment patchSegment(projKey, envKey, key, patchWithComment)

Patch segment

Update a user segment. The request body must be a valid JSON patch or JSON merge patch document. To learn more about semantic patches, read [Updates](/#section/Overview/Updates).

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.SegmentsApi();
let projKey = "projKey_example"; // String | The project key.
let envKey = "envKey_example"; // String | The environment key.
let key = "key_example"; // String | The user segment key.
let patchWithComment = new LaunchDarklyApi.PatchWithComment(); // PatchWithComment | 
apiInstance.patchSegment(projKey, envKey, key, patchWithComment, (error, data, response) => {
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
 **projKey** | **String**| The project key. | 
 **envKey** | **String**| The environment key. | 
 **key** | **String**| The user segment key. | 
 **patchWithComment** | [**PatchWithComment**](PatchWithComment.md)|  | 

### Return type

[**UserSegment**](UserSegment.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postSegment

> UserSegment postSegment(projKey, envKey, segmentBody)

Create segment

Create a new user segment

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.SegmentsApi();
let projKey = "projKey_example"; // String | The project key.
let envKey = "envKey_example"; // String | The environment key.
let segmentBody = new LaunchDarklyApi.SegmentBody(); // SegmentBody | 
apiInstance.postSegment(projKey, envKey, segmentBody, (error, data, response) => {
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
 **projKey** | **String**| The project key. | 
 **envKey** | **String**| The environment key. | 
 **segmentBody** | [**SegmentBody**](SegmentBody.md)|  | 

### Return type

[**UserSegment**](UserSegment.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateBigSegmentTargets

> updateBigSegmentTargets(projKey, envKey, key, segmentUserState)

Update targets on a Big Segment

Update targets included or excluded in a Big Segment

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.SegmentsApi();
let projKey = "projKey_example"; // String | The project key.
let envKey = "envKey_example"; // String | The environment key.
let key = "key_example"; // String | The segment key.
let segmentUserState = new LaunchDarklyApi.SegmentUserState(); // SegmentUserState | 
apiInstance.updateBigSegmentTargets(projKey, envKey, key, segmentUserState, (error, data, response) => {
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
 **projKey** | **String**| The project key. | 
 **envKey** | **String**| The environment key. | 
 **key** | **String**| The segment key. | 
 **segmentUserState** | [**SegmentUserState**](SegmentUserState.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

