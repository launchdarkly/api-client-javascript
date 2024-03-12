# LaunchDarklyApi.InsightsPullRequestsBetaApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPullRequests**](InsightsPullRequestsBetaApi.md#getPullRequests) | **GET** /api/v2/engineering-insights/pull-requests | List pull requests



## getPullRequests

> PullRequestCollectionRep getPullRequests(projectKey, opts)

List pull requests

Get a list of pull requests  ### Expanding the pull request collection response  LaunchDarkly supports expanding the pull request collection response to include additional fields.  To expand the response, append the &#x60;expand&#x60; query parameter and include the following:  * &#x60;deployments&#x60; includes details on all of the deployments associated with each pull request * &#x60;flagReferences&#x60; includes details on all of the references to flags in each pull request * &#x60;leadTime&#x60; includes details about the lead time of the pull request for each stage  For example, use &#x60;?expand&#x3D;deployments&#x60; to include the &#x60;deployments&#x60; field in the response. By default, this field is **not** included in the response. 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.InsightsPullRequestsBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let opts = {
  'environmentKey': "environmentKey_example", // String | Required if you are using the <code>sort</code> parameter's <code>leadTime</code> option to sort pull requests.
  'applicationKey': "applicationKey_example", // String | Filter the results to pull requests deployed to a comma separated list of applications
  'status': "status_example", // String | Filter results to pull requests with the given status. Options: `open`, `merged`, `closed`, `deployed`.
  'query': "query_example", // String | Filter list of pull requests by title or author
  'limit': 789, // Number | The number of pull requests to return. Default is 20. Maximum allowed is 100.
  'expand': "expand_example", // String | Expand properties in response. Options: `deployments`, `flagReferences`, `leadTime`.
  'sort': "sort_example", // String | Sort results. Requires the `environmentKey` to be set. Options: `leadTime` (asc) and `-leadTime` (desc). When query option is excluded, default sort is by created or merged date.
  'from': new Date("2013-10-20T19:20:30+01:00"), // Date | Unix timestamp in milliseconds. Default value is 7 days ago.
  'to': new Date("2013-10-20T19:20:30+01:00"), // Date | Unix timestamp in milliseconds. Default value is now.
  'after': "after_example", // String | Identifier used for pagination
  'before': "before_example" // String | Identifier used for pagination
};
apiInstance.getPullRequests(projectKey, opts, (error, data, response) => {
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
 **environmentKey** | **String**| Required if you are using the &lt;code&gt;sort&lt;/code&gt; parameter&#39;s &lt;code&gt;leadTime&lt;/code&gt; option to sort pull requests. | [optional] 
 **applicationKey** | **String**| Filter the results to pull requests deployed to a comma separated list of applications | [optional] 
 **status** | **String**| Filter results to pull requests with the given status. Options: &#x60;open&#x60;, &#x60;merged&#x60;, &#x60;closed&#x60;, &#x60;deployed&#x60;. | [optional] 
 **query** | **String**| Filter list of pull requests by title or author | [optional] 
 **limit** | **Number**| The number of pull requests to return. Default is 20. Maximum allowed is 100. | [optional] 
 **expand** | **String**| Expand properties in response. Options: &#x60;deployments&#x60;, &#x60;flagReferences&#x60;, &#x60;leadTime&#x60;. | [optional] 
 **sort** | **String**| Sort results. Requires the &#x60;environmentKey&#x60; to be set. Options: &#x60;leadTime&#x60; (asc) and &#x60;-leadTime&#x60; (desc). When query option is excluded, default sort is by created or merged date. | [optional] 
 **from** | **Date**| Unix timestamp in milliseconds. Default value is 7 days ago. | [optional] 
 **to** | **Date**| Unix timestamp in milliseconds. Default value is now. | [optional] 
 **after** | **String**| Identifier used for pagination | [optional] 
 **before** | **String**| Identifier used for pagination | [optional] 

### Return type

[**PullRequestCollectionRep**](PullRequestCollectionRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

