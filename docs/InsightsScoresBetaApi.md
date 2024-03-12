# LaunchDarklyApi.InsightsScoresBetaApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createInsightGroup**](InsightsScoresBetaApi.md#createInsightGroup) | **POST** /api/v2/engineering-insights/insights/group | Create insight group
[**deleteInsightGroup**](InsightsScoresBetaApi.md#deleteInsightGroup) | **DELETE** /api/v2/engineering-insights/insights/groups/{insightGroupKey} | Delete insight group
[**getInsightGroup**](InsightsScoresBetaApi.md#getInsightGroup) | **GET** /api/v2/engineering-insights/insights/groups/{insightGroupKey} | Get insight group
[**getInsightGroups**](InsightsScoresBetaApi.md#getInsightGroups) | **GET** /api/v2/engineering-insights/insights/groups | List insight groups
[**getInsightsScores**](InsightsScoresBetaApi.md#getInsightsScores) | **GET** /api/v2/engineering-insights/insights/scores | Get insight scores
[**patchInsightGroup**](InsightsScoresBetaApi.md#patchInsightGroup) | **PATCH** /api/v2/engineering-insights/insights/groups/{insightGroupKey} | Patch insight group



## createInsightGroup

> InsightGroup createInsightGroup(postInsightGroupParams)

Create insight group

Create insight group

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.InsightsScoresBetaApi();
let postInsightGroupParams = new LaunchDarklyApi.PostInsightGroupParams(); // PostInsightGroupParams | 
apiInstance.createInsightGroup(postInsightGroupParams, (error, data, response) => {
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
 **postInsightGroupParams** | [**PostInsightGroupParams**](PostInsightGroupParams.md)|  | 

### Return type

[**InsightGroup**](InsightGroup.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteInsightGroup

> deleteInsightGroup(insightGroupKey)

Delete insight group

Delete insight group

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.InsightsScoresBetaApi();
let insightGroupKey = "insightGroupKey_example"; // String | The insight group key
apiInstance.deleteInsightGroup(insightGroupKey, (error, data, response) => {
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
 **insightGroupKey** | **String**| The insight group key | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getInsightGroup

> InsightGroup getInsightGroup(insightGroupKey, opts)

Get insight group

Get insight group  ### Expanding the insight group response  LaunchDarkly supports expanding the insight group response to include additional fields.  To expand the response, append the &#x60;expand&#x60; query parameter and include the following:  * &#x60;scores&#x60; includes details on all of the scores used in the engineering insights metrics views for this group * &#x60;environment&#x60; includes details on each environment associated with this group  For example, use &#x60;?expand&#x3D;scores&#x60; to include the &#x60;scores&#x60; field in the response. By default, this field is **not** included in the response. 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.InsightsScoresBetaApi();
let insightGroupKey = "insightGroupKey_example"; // String | The insight group key
let opts = {
  'expand': "expand_example" // String | Options: `scores`, `environment`
};
apiInstance.getInsightGroup(insightGroupKey, opts, (error, data, response) => {
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
 **insightGroupKey** | **String**| The insight group key | 
 **expand** | **String**| Options: &#x60;scores&#x60;, &#x60;environment&#x60; | [optional] 

### Return type

[**InsightGroup**](InsightGroup.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getInsightGroups

> InsightGroupCollection getInsightGroups(opts)

List insight groups

List groups for which you are collecting insights  ### Expanding the insight groups collection response  LaunchDarkly supports expanding the insight groups collection response to include additional fields.  To expand the response, append the &#x60;expand&#x60; query parameter and include the following:  * &#x60;scores&#x60; includes details on all of the scores used in the engineering insights metrics views for each group * &#x60;environment&#x60; includes details on each environment associated with each group * &#x60;metadata&#x60; includes counts of the number of insight groups with particular indicators, such as \&quot;execellent,\&quot; \&quot;good,\&quot; \&quot;fair,\&quot; and so on.  For example, use &#x60;?expand&#x3D;scores&#x60; to include the &#x60;scores&#x60; field in the response. By default, this field is **not** included in the response. 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.InsightsScoresBetaApi();
let opts = {
  'limit': 789, // Number | The number of insight groups to return. Default is 20. Must be between 1 and 20 inclusive.
  'offset': 789, // Number | Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`.
  'sort': "sort_example", // String | Sort flag list by field. Prefix field with <code>-</code> to sort in descending order. Allowed fields: name
  'query': "query_example", // String | Filter list of insights groups by name.
  'expand': "expand_example" // String | Options: `scores`, `environment`, `metadata`
};
apiInstance.getInsightGroups(opts, (error, data, response) => {
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
 **limit** | **Number**| The number of insight groups to return. Default is 20. Must be between 1 and 20 inclusive. | [optional] 
 **offset** | **Number**| Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query &#x60;limit&#x60;. | [optional] 
 **sort** | **String**| Sort flag list by field. Prefix field with &lt;code&gt;-&lt;/code&gt; to sort in descending order. Allowed fields: name | [optional] 
 **query** | **String**| Filter list of insights groups by name. | [optional] 
 **expand** | **String**| Options: &#x60;scores&#x60;, &#x60;environment&#x60;, &#x60;metadata&#x60; | [optional] 

### Return type

[**InsightGroupCollection**](InsightGroupCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getInsightsScores

> InsightScores getInsightsScores(projectKey, environmentKey, opts)

Get insight scores

Return insights scores, based on the given parameters. This data is also used in engineering insights metrics views.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.InsightsScoresBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let opts = {
  'applicationKey': "applicationKey_example" // String | Comma separated list of application keys
};
apiInstance.getInsightsScores(projectKey, environmentKey, opts, (error, data, response) => {
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
 **applicationKey** | **String**| Comma separated list of application keys | [optional] 

### Return type

[**InsightScores**](InsightScores.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## patchInsightGroup

> InsightGroup patchInsightGroup(insightGroupKey, patchOperation)

Patch insight group

Update an insight group. Updating an insight group uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](/#section/Overview/Updates).

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.InsightsScoresBetaApi();
let insightGroupKey = "insightGroupKey_example"; // String | The insight group key
let patchOperation = [{"op":"replace","path":"/name","value":"Prod group"}]; // [PatchOperation] | 
apiInstance.patchInsightGroup(insightGroupKey, patchOperation, (error, data, response) => {
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
 **insightGroupKey** | **String**| The insight group key | 
 **patchOperation** | [**[PatchOperation]**](PatchOperation.md)|  | 

### Return type

[**InsightGroup**](InsightGroup.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

