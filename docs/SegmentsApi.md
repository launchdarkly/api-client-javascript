# LaunchDarklyApi.SegmentsApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteSegment**](SegmentsApi.md#deleteSegment) | **DELETE** /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey} | Delete segment
[**getContextInstanceSegmentsMembershipByEnv**](SegmentsApi.md#getContextInstanceSegmentsMembershipByEnv) | **POST** /api/v2/projects/{projectKey}/environments/{environmentKey}/segments/evaluate | List segment memberships for context instance
[**getExpiringTargetsForSegment**](SegmentsApi.md#getExpiringTargetsForSegment) | **GET** /api/v2/segments/{projectKey}/{segmentKey}/expiring-targets/{environmentKey} | Get expiring targets for segment
[**getExpiringUserTargetsForSegment**](SegmentsApi.md#getExpiringUserTargetsForSegment) | **GET** /api/v2/segments/{projectKey}/{segmentKey}/expiring-user-targets/{environmentKey} | Get expiring user targets for segment
[**getSegment**](SegmentsApi.md#getSegment) | **GET** /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey} | Get segment
[**getSegmentMembershipForContext**](SegmentsApi.md#getSegmentMembershipForContext) | **GET** /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/contexts/{contextKey} | Get big segment membership for context
[**getSegmentMembershipForUser**](SegmentsApi.md#getSegmentMembershipForUser) | **GET** /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/users/{userKey} | Get big segment membership for user
[**getSegments**](SegmentsApi.md#getSegments) | **GET** /api/v2/segments/{projectKey}/{environmentKey} | List segments
[**patchExpiringTargetsForSegment**](SegmentsApi.md#patchExpiringTargetsForSegment) | **PATCH** /api/v2/segments/{projectKey}/{segmentKey}/expiring-targets/{environmentKey} | Update expiring targets for segment
[**patchExpiringUserTargetsForSegment**](SegmentsApi.md#patchExpiringUserTargetsForSegment) | **PATCH** /api/v2/segments/{projectKey}/{segmentKey}/expiring-user-targets/{environmentKey} | Update expiring user targets for segment
[**patchSegment**](SegmentsApi.md#patchSegment) | **PATCH** /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey} | Patch segment
[**postSegment**](SegmentsApi.md#postSegment) | **POST** /api/v2/segments/{projectKey}/{environmentKey} | Create segment
[**updateBigSegmentContextTargets**](SegmentsApi.md#updateBigSegmentContextTargets) | **POST** /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/contexts | Update context targets on a big segment
[**updateBigSegmentTargets**](SegmentsApi.md#updateBigSegmentTargets) | **POST** /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/users | Update user context targets on a big segment



## deleteSegment

> deleteSegment(projectKey, environmentKey, segmentKey)

Delete segment

Delete a segment.

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


## getContextInstanceSegmentsMembershipByEnv

> ContextInstanceSegmentMemberships getContextInstanceSegmentsMembershipByEnv(projectKey, environmentKey, requestBody)

List segment memberships for context instance

For a given context instance with attributes, get membership details for all segments. In the request body, pass in the context instance.

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
let requestBody = {"address":{"city":"Springfield","street":"123 Main Street"},"jobFunction":"doctor","key":"context-key-123abc","kind":"user","name":"Sandy"}; // {String: Object} | 
apiInstance.getContextInstanceSegmentsMembershipByEnv(projectKey, environmentKey, requestBody, (error, data, response) => {
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
 **requestBody** | [**{String: Object}**](Object.md)|  | 

### Return type

[**ContextInstanceSegmentMemberships**](ContextInstanceSegmentMemberships.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getExpiringTargetsForSegment

> ExpiringTargetGetResponse getExpiringTargetsForSegment(projectKey, environmentKey, segmentKey)

Get expiring targets for segment

Get a list of a segment&#39;s context targets that are scheduled for removal.

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
apiInstance.getExpiringTargetsForSegment(projectKey, environmentKey, segmentKey, (error, data, response) => {
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

[**ExpiringTargetGetResponse**](ExpiringTargetGetResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getExpiringUserTargetsForSegment

> ExpiringUserTargetGetResponse getExpiringUserTargetsForSegment(projectKey, environmentKey, segmentKey)

Get expiring user targets for segment

&gt; ### Contexts are now available &gt; &gt; After you have upgraded your LaunchDarkly SDK to use contexts instead of users, you should use [Get expiring targets for segment](/tag/Segments#operation/getExpiringTargetsForSegment) instead of this endpoint. To learn more, read [Contexts](https://docs.launchdarkly.com/home/observability/contexts).  Get a list of a segment&#39;s user targets that are scheduled for removal. 

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

Get a single segment by key.&lt;br/&gt;&lt;br/&gt;Segments can be rule-based, list-based, or synced. Big segments include larger list-based segments and synced segments. Some fields in the response only apply to big segments.

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


## getSegmentMembershipForContext

> BigSegmentTarget getSegmentMembershipForContext(projectKey, environmentKey, segmentKey, contextKey)

Get big segment membership for context

Get the membership status (included/excluded) for a given context in this big segment. Big segments include larger list-based segments and synced segments. This operation does not support standard segments.

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
let contextKey = "contextKey_example"; // String | The context key
apiInstance.getSegmentMembershipForContext(projectKey, environmentKey, segmentKey, contextKey, (error, data, response) => {
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
 **contextKey** | **String**| The context key | 

### Return type

[**BigSegmentTarget**](BigSegmentTarget.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSegmentMembershipForUser

> BigSegmentTarget getSegmentMembershipForUser(projectKey, environmentKey, segmentKey, userKey)

Get big segment membership for user

&gt; ### Contexts are now available &gt; &gt; After you have upgraded your LaunchDarkly SDK to use contexts instead of users, you should use [Get expiring targets for segment](/tag/Segments#operation/getExpiringTargetsForSegment) instead of this endpoint. To learn more, read [Contexts](https://docs.launchdarkly.com/home/observability/contexts).  Get the membership status (included/excluded) for a given user in this big segment. This operation does not support standard segments. 

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

> UserSegments getSegments(projectKey, environmentKey, opts)

List segments

Get a list of all segments in the given project.  Segments can be rule-based, list-based, or synced. Big segments include larger list-based segments and synced segments. Some fields in the response only apply to big segments.  ### Filtering segments  The &#x60;filter&#x60; parameter supports the following operators: &#x60;equals&#x60;, &#x60;anyOf&#x60;, and &#x60;exists&#x60;.  You can also combine filters in the following ways:  - Use a comma (&#x60;,&#x60;) as an AND operator - Use a vertical bar (&#x60;|&#x60;) as an OR operator - Use parentheses (&#x60;()&#x60;) to group filters  #### Supported fields and operators  You can only filter certain fields in segments when using the &#x60;filter&#x60; parameter. Additionally, you can only filter some fields with certain operators.  When you search for segments, the &#x60;filter&#x60; parameter supports the following fields and operators:  |&lt;div style&#x3D;\&quot;width:120px\&quot;&gt;Field&lt;/div&gt; |Description |Supported operators | |---|---|---| | &#x60;excludedKeys&#x60; | The segment keys of segments to exclude from the results. | &#x60;anyOf&#x60; | | &#x60;external&#x60; | Whether the segment is a synced segment. | &#x60;exists&#x60; | | &#x60;includedKeys&#x60; | The segment keys of segments to include in the results. | &#x60;anyOf&#x60; | | &#x60;query&#x60; | A \&quot;fuzzy\&quot; search across segment key, name, and description. Supply a string or list of strings to the operator. | &#x60;equals&#x60; | | &#x60;tags&#x60; | The segment tags. | &#x60;anyOf&#x60; | | &#x60;unbounded&#x60; | Whether the segment is a standard segment (&#x60;false&#x60;) or a big segment (&#x60;true&#x60;). Standard segments include rule-based segments and smaller list-based segments. Big segments include larger list-based segments and synced segments. | &#x60;equals&#x60; |  Here are a few examples:  * The filter &#x60;?filter&#x3D;tags anyOf [\&quot;enterprise\&quot;, \&quot;beta\&quot;],query equals \&quot;toggle\&quot;&#x60; matches segments with \&quot;toggle\&quot; in their key, name, or description that also have \&quot;enterprise\&quot; or \&quot;beta\&quot; as a tag. * The filter &#x60;?filter&#x3D;excludedKeys anyOf [\&quot;segmentKey1\&quot;, \&quot;segmentKey2\&quot;]&#x60; excludes the segments with those keys from the results. * The filter &#x60;?filter&#x3D;unbounded equals true&#x60; matches larger list-based segments and synced segments.  The documented values for &#x60;filter&#x60; query parameters are prior to URL encoding. For example, the &#x60;[&#x60; in &#x60;?filter&#x3D;tags anyOf [\&quot;enterprise\&quot;, \&quot;beta\&quot;]&#x60; must be encoded to &#x60;%5B&#x60;. 

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
let opts = {
  'limit': 789, // Number | The number of segments to return. Defaults to 20.
  'offset': 789, // Number | Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`.
  'sort': "sort_example", // String | Accepts sorting order and fields. Fields can be comma separated. Possible fields are 'creationDate', 'name', 'lastModified'. Example: `sort=name` sort by names ascending or `sort=-name,creationDate` sort by names descending and creationDate ascending.
  'filter': "filter_example" // String | Accepts filter by `excludedKeys`, `external`, `includedKeys`, `query`, `tags`, `unbounded`. To learn more about the filter syntax, read the  'Filtering segments' section above.
};
apiInstance.getSegments(projectKey, environmentKey, opts, (error, data, response) => {
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
 **limit** | **Number**| The number of segments to return. Defaults to 20. | [optional] 
 **offset** | **Number**| Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query &#x60;limit&#x60;. | [optional] 
 **sort** | **String**| Accepts sorting order and fields. Fields can be comma separated. Possible fields are &#39;creationDate&#39;, &#39;name&#39;, &#39;lastModified&#39;. Example: &#x60;sort&#x3D;name&#x60; sort by names ascending or &#x60;sort&#x3D;-name,creationDate&#x60; sort by names descending and creationDate ascending. | [optional] 
 **filter** | **String**| Accepts filter by &#x60;excludedKeys&#x60;, &#x60;external&#x60;, &#x60;includedKeys&#x60;, &#x60;query&#x60;, &#x60;tags&#x60;, &#x60;unbounded&#x60;. To learn more about the filter syntax, read the  &#39;Filtering segments&#39; section above. | [optional] 

### Return type

[**UserSegments**](UserSegments.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## patchExpiringTargetsForSegment

> ExpiringTargetPatchResponse patchExpiringTargetsForSegment(projectKey, environmentKey, segmentKey, patchSegmentExpiringTargetInputRep)

Update expiring targets for segment

 Update expiring context targets for a segment. Updating a context target expiration uses the semantic patch format.  To make a semantic patch request, you must append &#x60;domain-model&#x3D;launchdarkly.semanticpatch&#x60; to your &#x60;Content-Type&#x60; header. To learn more, read [Updates using semantic patch](/reference#updates-using-semantic-patch).  If the request is well-formed but any of its instructions failed to process, this operation returns status code &#x60;200&#x60;. In this case, the response &#x60;errors&#x60; array will be non-empty.  ### Instructions  Semantic patch requests support the following &#x60;kind&#x60; instructions for updating expiring context targets.  &lt;details&gt; &lt;summary&gt;Click to expand instructions for &lt;strong&gt;updating expiring context targets&lt;/strong&gt;&lt;/summary&gt;  #### addExpiringTarget  Schedules a date and time when LaunchDarkly will remove a context from segment targeting. The segment must already have the context as an individual target.  ##### Parameters  - &#x60;targetType&#x60;: The type of individual target for this context. Must be either &#x60;included&#x60; or &#x60;excluded&#x60;. - &#x60;contextKey&#x60;: The context key. - &#x60;contextKind&#x60;: The kind of context being targeted. - &#x60;value&#x60;: The date when the context should expire from the segment targeting, in Unix milliseconds.  Here&#39;s an example:  &#x60;&#x60;&#x60;json {   \&quot;instructions\&quot;: [{     \&quot;kind\&quot;: \&quot;addExpiringTarget\&quot;,     \&quot;targetType\&quot;: \&quot;included\&quot;,     \&quot;contextKey\&quot;: \&quot;user-key-123abc\&quot;,     \&quot;contextKind\&quot;: \&quot;user\&quot;,     \&quot;value\&quot;: 1754092860000   }] } &#x60;&#x60;&#x60;  #### updateExpiringTarget  Updates the date and time when LaunchDarkly will remove a context from segment targeting.  ##### Parameters  - &#x60;targetType&#x60;: The type of individual target for this context. Must be either &#x60;included&#x60; or &#x60;excluded&#x60;. - &#x60;contextKey&#x60;: The context key. - &#x60;contextKind&#x60;: The kind of context being targeted. - &#x60;value&#x60;: The new date when the context should expire from the segment targeting, in Unix milliseconds. - &#x60;version&#x60;: (Optional) The version of the expiring target to update. If included, update will fail if version doesn&#39;t match current version of the expiring target.  Here&#39;s an example:  &#x60;&#x60;&#x60;json {   \&quot;instructions\&quot;: [{     \&quot;kind\&quot;: \&quot;updateExpiringTarget\&quot;,     \&quot;targetType\&quot;: \&quot;included\&quot;,     \&quot;contextKey\&quot;: \&quot;user-key-123abc\&quot;,     \&quot;contextKind\&quot;: \&quot;user\&quot;,     \&quot;value\&quot;: 1754179260000   }] } &#x60;&#x60;&#x60;  #### removeExpiringTarget  Removes the scheduled expiration for the context in the segment.  ##### Parameters  - &#x60;targetType&#x60;: The type of individual target for this context. Must be either &#x60;included&#x60; or &#x60;excluded&#x60;. - &#x60;contextKey&#x60;: The context key. - &#x60;contextKind&#x60;: The kind of context being targeted.  Here&#39;s an example:  &#x60;&#x60;&#x60;json {   \&quot;instructions\&quot;: [{     \&quot;kind\&quot;: \&quot;removeExpiringTarget\&quot;,     \&quot;targetType\&quot;: \&quot;included\&quot;,     \&quot;contextKey\&quot;: \&quot;user-key-123abc\&quot;,     \&quot;contextKind\&quot;: \&quot;user\&quot;,   }] } &#x60;&#x60;&#x60;  &lt;/details&gt; 

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
let patchSegmentExpiringTargetInputRep = new LaunchDarklyApi.PatchSegmentExpiringTargetInputRep(); // PatchSegmentExpiringTargetInputRep | 
apiInstance.patchExpiringTargetsForSegment(projectKey, environmentKey, segmentKey, patchSegmentExpiringTargetInputRep, (error, data, response) => {
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
 **patchSegmentExpiringTargetInputRep** | [**PatchSegmentExpiringTargetInputRep**](PatchSegmentExpiringTargetInputRep.md)|  | 

### Return type

[**ExpiringTargetPatchResponse**](ExpiringTargetPatchResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## patchExpiringUserTargetsForSegment

> ExpiringUserTargetPatchResponse patchExpiringUserTargetsForSegment(projectKey, environmentKey, segmentKey, patchSegmentRequest)

Update expiring user targets for segment

 &gt; ### Contexts are now available &gt; &gt; After you have upgraded your LaunchDarkly SDK to use contexts instead of users, you should use [Update expiring targets for segment](/tag/Segments#operation/patchExpiringTargetsForSegment) instead of this endpoint. To learn more, read [Contexts](https://docs.launchdarkly.com/home/observability/contexts).  Update expiring user targets for a segment. Updating a user target expiration uses the semantic patch format.  To make a semantic patch request, you must append &#x60;domain-model&#x3D;launchdarkly.semanticpatch&#x60; to your &#x60;Content-Type&#x60; header. To learn more, read [Updates using semantic patch](/reference#updates-using-semantic-patch).  If the request is well-formed but any of its instructions failed to process, this operation returns status code &#x60;200&#x60;. In this case, the response &#x60;errors&#x60; array will be non-empty.  ### Instructions  Semantic patch requests support the following &#x60;kind&#x60; instructions for updating expiring user targets.  &lt;details&gt; &lt;summary&gt;Click to expand instructions for &lt;strong&gt;updating expiring user targets&lt;/strong&gt;&lt;/summary&gt;  #### addExpireUserTargetDate  Schedules a date and time when LaunchDarkly will remove a user from segment targeting.  ##### Parameters  - &#x60;targetType&#x60;: A segment&#39;s target type, must be either &#x60;included&#x60; or &#x60;excluded&#x60;. - &#x60;userKey&#x60;: The user key. - &#x60;value&#x60;: The date when the user should expire from the segment targeting, in Unix milliseconds.  #### updateExpireUserTargetDate  Updates the date and time when LaunchDarkly will remove a user from segment targeting.  ##### Parameters  - &#x60;targetType&#x60;: A segment&#39;s target type, must be either &#x60;included&#x60; or &#x60;excluded&#x60;. - &#x60;userKey&#x60;: The user key. - &#x60;value&#x60;: The new date when the user should expire from the segment targeting, in Unix milliseconds. - &#x60;version&#x60;: The segment version.  #### removeExpireUserTargetDate  Removes the scheduled expiration for the user in the segment.  ##### Parameters  - &#x60;targetType&#x60;: A segment&#39;s target type, must be either &#x60;included&#x60; or &#x60;excluded&#x60;. - &#x60;userKey&#x60;: The user key.  &lt;/details&gt; 

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

Update a segment. The request body must be a valid semantic patch, JSON patch, or JSON merge patch. To learn more the different formats, read [Updates](/#section/Overview/Updates).  ### Using semantic patches on a segment  To make a semantic patch request, you must append &#x60;domain-model&#x3D;launchdarkly.semanticpatch&#x60; to your &#x60;Content-Type&#x60; header. To learn more, read [Updates using semantic patch](/reference#updates-using-semantic-patch).  The body of a semantic patch request for updating segments requires an &#x60;environmentKey&#x60; in addition to &#x60;instructions&#x60; and an optional &#x60;comment&#x60;. The body of the request takes the following properties:  * &#x60;comment&#x60; (string): (Optional) A description of the update. * &#x60;environmentKey&#x60; (string): (Required) The key of the LaunchDarkly environment. * &#x60;instructions&#x60; (array): (Required) A list of actions the update should perform. Each action in the list must be an object with a &#x60;kind&#x60; property that indicates the instruction. If the action requires parameters, you must include those parameters as additional fields in the object.  ### Instructions  Semantic patch requests support the following &#x60;kind&#x60; instructions for updating segments.  &lt;details&gt; &lt;summary&gt;Click to expand instructions for &lt;strong&gt;updating segments&lt;/strong&gt;&lt;/summary&gt;  #### addIncludedTargets  Adds context keys to the individual context targets included in the segment for the specified &#x60;contextKind&#x60;. Returns an error if this causes the same context key to be both included and excluded.  ##### Parameters  - &#x60;contextKind&#x60;: The context kind the targets should be added to. - &#x60;values&#x60;: List of keys.  Here&#39;s an example:  &#x60;&#x60;&#x60;json {   \&quot;instructions\&quot;: [{     \&quot;kind\&quot;: \&quot;addIncludedTargets\&quot;,     \&quot;contextKind\&quot;: \&quot;org\&quot;,     \&quot;values\&quot;: [ \&quot;org-key-123abc\&quot;, \&quot;org-key-456def\&quot; ]   }] } &#x60;&#x60;&#x60;  #### addIncludedUsers  Adds user keys to the individual user targets included in the segment. Returns an error if this causes the same user key to be both included and excluded. If you are working with contexts, use &#x60;addIncludedTargets&#x60; instead of this instruction.  ##### Parameters  - &#x60;values&#x60;: List of user keys.  Here&#39;s an example:  &#x60;&#x60;&#x60;json {   \&quot;instructions\&quot;: [{     \&quot;kind\&quot;: \&quot;addIncludedUsers\&quot;,     \&quot;values\&quot;: [ \&quot;user-key-123abc\&quot;, \&quot;user-key-456def\&quot; ]   }] } &#x60;&#x60;&#x60;  #### addExcludedTargets  Adds context keys to the individual context targets excluded in the segment for the specified &#x60;contextKind&#x60;. Returns an error if this causes the same context key to be both included and excluded.  ##### Parameters  - &#x60;contextKind&#x60;: The context kind the targets should be added to. - &#x60;values&#x60;: List of keys.  Here&#39;s an example:  &#x60;&#x60;&#x60;json {   \&quot;instructions\&quot;: [{     \&quot;kind\&quot;: \&quot;addExcludedTargets\&quot;,     \&quot;contextKind\&quot;: \&quot;org\&quot;,     \&quot;values\&quot;: [ \&quot;org-key-123abc\&quot;, \&quot;org-key-456def\&quot; ]   }] } &#x60;&#x60;&#x60;  #### addExcludedUsers  Adds user keys to the individual user targets excluded from the segment. Returns an error if this causes the same user key to be both included and excluded. If you are working with contexts, use &#x60;addExcludedTargets&#x60; instead of this instruction.  ##### Parameters  - &#x60;values&#x60;: List of user keys.  Here&#39;s an example:  &#x60;&#x60;&#x60;json {   \&quot;instructions\&quot;: [{     \&quot;kind\&quot;: \&quot;addExcludedUsers\&quot;,     \&quot;values\&quot;: [ \&quot;user-key-123abc\&quot;, \&quot;user-key-456def\&quot; ]   }] } &#x60;&#x60;&#x60;  #### removeIncludedTargets  Removes context keys from the individual context targets included in the segment for the specified &#x60;contextKind&#x60;.  ##### Parameters  - &#x60;contextKind&#x60;: The context kind the targets should be removed from. - &#x60;values&#x60;: List of keys.  Here&#39;s an example:  &#x60;&#x60;&#x60;json {   \&quot;instructions\&quot;: [{     \&quot;kind\&quot;: \&quot;removeIncludedTargets\&quot;,     \&quot;contextKind\&quot;: \&quot;org\&quot;,     \&quot;values\&quot;: [ \&quot;org-key-123abc\&quot;, \&quot;org-key-456def\&quot; ]   }] } &#x60;&#x60;&#x60;  #### removeIncludedUsers  Removes user keys from the individual user targets included in the segment. If you are working with contexts, use &#x60;removeIncludedTargets&#x60; instead of this instruction.  ##### Parameters  - &#x60;values&#x60;: List of user keys.  Here&#39;s an example:  &#x60;&#x60;&#x60;json {   \&quot;instructions\&quot;: [{     \&quot;kind\&quot;: \&quot;removeIncludedUsers\&quot;,     \&quot;values\&quot;: [ \&quot;user-key-123abc\&quot;, \&quot;user-key-456def\&quot; ]   }] } &#x60;&#x60;&#x60;  #### removeExcludedTargets  Removes context keys from the individual context targets excluded from the segment for the specified &#x60;contextKind&#x60;.  ##### Parameters  - &#x60;contextKind&#x60;: The context kind the targets should be removed from. - &#x60;values&#x60;: List of keys.  Here&#39;s an example:  &#x60;&#x60;&#x60;json {   \&quot;instructions\&quot;: [{     \&quot;kind\&quot;: \&quot;removeExcludedTargets\&quot;,     \&quot;contextKind\&quot;: \&quot;org\&quot;,     \&quot;values\&quot;: [ \&quot;org-key-123abc\&quot;, \&quot;org-key-456def\&quot; ]   }] } &#x60;&#x60;&#x60;  #### removeExcludedUsers  Removes user keys from the individual user targets excluded from the segment. If you are working with contexts, use &#x60;removeExcludedTargets&#x60; instead of this instruction.  ##### Parameters  - &#x60;values&#x60;: List of user keys.  Here&#39;s an example:  &#x60;&#x60;&#x60;json {   \&quot;instructions\&quot;: [{     \&quot;kind\&quot;: \&quot;removeExcludedUsers\&quot;,     \&quot;values\&quot;: [ \&quot;user-key-123abc\&quot;, \&quot;user-key-456def\&quot; ]   }] } &#x60;&#x60;&#x60;  #### updateName  Updates the name of the segment.  ##### Parameters  - &#x60;value&#x60;: Name of the segment.  Here&#39;s an example:  &#x60;&#x60;&#x60;json {   \&quot;instructions\&quot;: [{     \&quot;kind\&quot;: \&quot;updateName\&quot;,     \&quot;value\&quot;: \&quot;Updated segment name\&quot;   }] } &#x60;&#x60;&#x60;  &lt;/details&gt;  ## Using JSON patches on a segment  If you do not include the header described above, you can use a [JSON patch](/reference#updates-using-json-patch) or [JSON merge patch](https://datatracker.ietf.org/doc/html/rfc7386) representation of the desired changes.  For example, to update the description for a segment with a JSON patch, use the following request body:  &#x60;&#x60;&#x60;json {   \&quot;patch\&quot;: [     {       \&quot;op\&quot;: \&quot;replace\&quot;,       \&quot;path\&quot;: \&quot;/description\&quot;,       \&quot;value\&quot;: \&quot;new description\&quot;     }   ] } &#x60;&#x60;&#x60;  To update fields in the segment that are arrays, set the &#x60;path&#x60; to the name of the field and then append &#x60;/&lt;array index&gt;&#x60;. Use &#x60;/0&#x60; to add the new entry to the beginning of the array. Use &#x60;/-&#x60; to add the new entry to the end of the array.  For example, to add a rule to a segment, use the following request body:  &#x60;&#x60;&#x60;json {   \&quot;patch\&quot;:[     {       \&quot;op\&quot;: \&quot;add\&quot;,       \&quot;path\&quot;: \&quot;/rules/0\&quot;,       \&quot;value\&quot;: {         \&quot;clauses\&quot;: [{ \&quot;contextKind\&quot;: \&quot;user\&quot;, \&quot;attribute\&quot;: \&quot;email\&quot;, \&quot;op\&quot;: \&quot;endsWith\&quot;, \&quot;values\&quot;: [\&quot;.edu\&quot;], \&quot;negate\&quot;: false }]       }     }   ] } &#x60;&#x60;&#x60;  To add or remove targets from segments, we recommend using semantic patch. Semantic patch for segments includes specific instructions for adding and removing both included and excluded targets. 

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

Create a new segment.

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


## updateBigSegmentContextTargets

> updateBigSegmentContextTargets(projectKey, environmentKey, segmentKey, segmentUserState)

Update context targets on a big segment

Update context targets included or excluded in a big segment. Big segments include larger list-based segments and synced segments. This operation does not support standard segments.

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
apiInstance.updateBigSegmentContextTargets(projectKey, environmentKey, segmentKey, segmentUserState, (error, data, response) => {
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


## updateBigSegmentTargets

> updateBigSegmentTargets(projectKey, environmentKey, segmentKey, segmentUserState)

Update user context targets on a big segment

Update user context targets included or excluded in a big segment. Big segments include larger list-based segments and synced segments. This operation does not support standard segments.

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

