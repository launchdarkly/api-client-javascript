# LaunchDarklyApi.SegmentsApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteSegment**](SegmentsApi.md#deleteSegment) | **DELETE** /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey} | Delete segment
[**getExpiringUserTargetsForSegment**](SegmentsApi.md#getExpiringUserTargetsForSegment) | **GET** /api/v2/segments/{projectKey}/{segmentKey}/expiring-user-targets/{environmentKey} | Get expiring user targets for segment
[**getSegment**](SegmentsApi.md#getSegment) | **GET** /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey} | Get segment
[**getSegmentMembershipForUser**](SegmentsApi.md#getSegmentMembershipForUser) | **GET** /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/users/{userKey} | Get Big Segment membership for user
[**getSegments**](SegmentsApi.md#getSegments) | **GET** /api/v2/segments/{projectKey}/{environmentKey} | List segments
[**patchExpiringUserTargetsForSegment**](SegmentsApi.md#patchExpiringUserTargetsForSegment) | **PATCH** /api/v2/segments/{projectKey}/{segmentKey}/expiring-user-targets/{environmentKey} | Update expiring user targets for segment
[**patchSegment**](SegmentsApi.md#patchSegment) | **PATCH** /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey} | Patch segment
[**postSegment**](SegmentsApi.md#postSegment) | **POST** /api/v2/segments/{projectKey}/{environmentKey} | Create segment
[**updateBigSegmentTargets**](SegmentsApi.md#updateBigSegmentTargets) | **POST** /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/users | Update targets on a Big Segment



## deleteSegment

> deleteSegment(projectKey, environmentKey, segmentKey)

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
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let segmentKey = "segmentKey_example"; // String | The segment key
apiInstance.deleteSegment(projectKey, environmentKey, segmentKey, (error, data, response) => {
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
 **segmentKey** | **String**| The segment key | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getExpiringUserTargetsForSegment

> ExpiringUserTargetGetResponse getExpiringUserTargetsForSegment(projectKey, environmentKey, segmentKey)

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
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let segmentKey = "segmentKey_example"; // String | The segment key
apiInstance.getExpiringUserTargetsForSegment(projectKey, environmentKey, segmentKey, (error, data, response) => {
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
 **segmentKey** | **String**| The segment key | 

### Return type

[**ExpiringUserTargetGetResponse**](ExpiringUserTargetGetResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSegment

> UserSegment getSegment(projectKey, environmentKey, segmentKey)

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
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let segmentKey = "segmentKey_example"; // String | The segment key
apiInstance.getSegment(projectKey, environmentKey, segmentKey, (error, data, response) => {
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
 **segmentKey** | **String**| The segment key | 

### Return type

[**UserSegment**](UserSegment.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSegmentMembershipForUser

> BigSegmentTarget getSegmentMembershipForUser(projectKey, environmentKey, segmentKey, userKey)

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
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let segmentKey = "segmentKey_example"; // String | The segment key
let userKey = "userKey_example"; // String | The user key
apiInstance.getSegmentMembershipForUser(projectKey, environmentKey, segmentKey, userKey, (error, data, response) => {
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
 **segmentKey** | **String**| The segment key | 
 **userKey** | **String**| The user key | 

### Return type

[**BigSegmentTarget**](BigSegmentTarget.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSegments

> UserSegments getSegments(projectKey, environmentKey)

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
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
apiInstance.getSegments(projectKey, environmentKey, (error, data, response) => {
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

[**UserSegments**](UserSegments.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## patchExpiringUserTargetsForSegment

> ExpiringUserTargetPatchResponse patchExpiringUserTargetsForSegment(projectKey, environmentKey, segmentKey, patchSegmentRequest)

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
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let segmentKey = "segmentKey_example"; // String | The segment key
let patchSegmentRequest = new LaunchDarklyApi.PatchSegmentRequest(); // PatchSegmentRequest | 
apiInstance.patchExpiringUserTargetsForSegment(projectKey, environmentKey, segmentKey, patchSegmentRequest, (error, data, response) => {
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
 **segmentKey** | **String**| The segment key | 
 **patchSegmentRequest** | [**PatchSegmentRequest**](PatchSegmentRequest.md)|  | 

### Return type

[**ExpiringUserTargetPatchResponse**](ExpiringUserTargetPatchResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## patchSegment

> UserSegment patchSegment(projectKey, environmentKey, segmentKey, patchWithComment)

Patch segment

Update a user segment. The request body must be a valid JSON patch, JSON merge patch, or semantic patch.  ## Using semantic patches on a segment  To use a [semantic patch](/reference#updates-via-semantic-patches) on a segment resource, you must include a header in the request. If you call a semantic patch resource without this header, you will receive a &#x60;400&#x60; response because your semantic patch will be interpreted as a JSON patch.  Use this header:  &#x60;&#x60;&#x60; Content-Type: application/json; domain-model&#x3D;launchdarkly.semanticpatch &#x60;&#x60;&#x60;  The body of a semantic patch request takes the following three properties:  1. &#x60;comment&#x60; (string): (Optional) A description of the update. 1. &#x60;environmentKey&#x60; (string): (Required) The key of the LaunchDarkly environment. 1. &#x60;instructions&#x60; (array): (Required) The list of actions to be performed by the update. Each action in the list must be an object/hash table with a &#x60;kind&#x60; property that indicates the instruction. Depending on the &#x60;kind&#x60;, the API may require other parameters. When this is the case, add the parameters as additional fields to the instruction object. Read below for more information on the specific supported semantic patch instructions.  If any instruction in the patch encounters an error, the error will be returned and the segment will not be changed. In general, instructions will silently do nothing if the segment is already in the state requested by the patch instruction. For example, &#x60;addIncludedUsers&#x60; does nothing when the targets have already been included. Specific error conditions are noted in the instruction descriptions.  ### Instructions  #### &#x60;addIncludedUsers&#x60;  Adds the user keys in &#x60;values&#x60; to the individual user targets included in the segment. Returns an error if this causes the same user key to be both included and excluded.  ##### Parameters  - &#x60;values&#x60;: list of user keys  #### &#x60;addExcludedUsers&#x60;  Adds the user keys in &#x60;values&#x60; to the individual user targets excluded from the segment. Returns an error if this causes the same user key to be both included and excluded.  ##### Parameters  - &#x60;values&#x60;: list of user keys  #### &#x60;removeIncludedUsers&#x60;  Removes the user keys in &#x60;values&#x60; from the individual user targets included in the segment.  ##### Parameters  - &#x60;values&#x60;: list of user keys  #### &#x60;removeExcludedUsers&#x60;  Removes the user keys in &#x60;values&#x60; from the individual user targets excluded from the segment.  ##### Parameters  - &#x60;values&#x60;: list of user keys  #### &#x60;updateName&#x60;  Updates the name of the segment to the string provided in &#x60;value&#x60;.  ##### Parameters  - &#x60;value&#x60;: string  ## Using JSON patches on a segment  If you do not include the header described above, you can use [JSON patch](/reference#updates-via-json-patch).  For example, to update the description for a segment, use the following request body:  &#x60;&#x60;&#x60;json {   \&quot;patch\&quot;: [     {       \&quot;op\&quot;: \&quot;replace\&quot;,       \&quot;path\&quot;: \&quot;/description\&quot;,       \&quot;value\&quot;: \&quot;new description\&quot;     }   ] } &#x60;&#x60;&#x60;  To update fields in the segment that are arrays, set the &#x60;path&#x60; to the name of the field and then append &#x60;/&lt;array index&gt;&#x60;. Using &#x60;/0&#x60; adds the new entry to the beginning of the array.  For example, to add a rule to a segment, use the following request body:  &#x60;&#x60;&#x60;json {   \&quot;patch\&quot;:[     {       \&quot;op\&quot;: \&quot;add\&quot;,       \&quot;path\&quot;: \&quot;/rules/0\&quot;,       \&quot;value\&quot;: {         \&quot;clauses\&quot;: [{ \&quot;attribute\&quot;: \&quot;email\&quot;, \&quot;op\&quot;: \&quot;endsWith\&quot;, \&quot;values\&quot;: [\&quot;.edu\&quot;], \&quot;negate\&quot;: false }]       }     }   ] } &#x60;&#x60;&#x60;  To add or remove users from segments, we recommend using semantic patch. Semantic patch for segments includes specific &#x60;instructions&#x60; for adding and removing both included and excluded users. 

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
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let segmentKey = "segmentKey_example"; // String | The segment key
let patchWithComment = {"patch":[{"op":"replace","path":"/description","value":"New description for this segment"},{"op":"add","path":"/tags/0","value":"example"}]}; // PatchWithComment | 
apiInstance.patchSegment(projectKey, environmentKey, segmentKey, patchWithComment, (error, data, response) => {
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
 **segmentKey** | **String**| The segment key | 
 **patchWithComment** | [**PatchWithComment**](PatchWithComment.md)|  | 

### Return type

[**UserSegment**](UserSegment.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postSegment

> UserSegment postSegment(projectKey, environmentKey, segmentBody)

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
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let segmentBody = new LaunchDarklyApi.SegmentBody(); // SegmentBody | 
apiInstance.postSegment(projectKey, environmentKey, segmentBody, (error, data, response) => {
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
 **segmentBody** | [**SegmentBody**](SegmentBody.md)|  | 

### Return type

[**UserSegment**](UserSegment.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateBigSegmentTargets

> updateBigSegmentTargets(projectKey, environmentKey, segmentKey, segmentUserState)

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
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let segmentKey = "segmentKey_example"; // String | The segment key
let segmentUserState = new LaunchDarklyApi.SegmentUserState(); // SegmentUserState | 
apiInstance.updateBigSegmentTargets(projectKey, environmentKey, segmentKey, segmentUserState, (error, data, response) => {
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
 **segmentKey** | **String**| The segment key | 
 **segmentUserState** | [**SegmentUserState**](SegmentUserState.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

