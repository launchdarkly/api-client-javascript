# LaunchDarklyApi.EnvironmentsApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteEnvironment**](EnvironmentsApi.md#deleteEnvironment) | **DELETE** /api/v2/projects/{projectKey}/environments/{environmentKey} | Delete environment
[**getEnvironment**](EnvironmentsApi.md#getEnvironment) | **GET** /api/v2/projects/{projectKey}/environments/{environmentKey} | Get environment
[**getEnvironmentsByProject**](EnvironmentsApi.md#getEnvironmentsByProject) | **GET** /api/v2/projects/{projectKey}/environments | List environments
[**patchEnvironment**](EnvironmentsApi.md#patchEnvironment) | **PATCH** /api/v2/projects/{projectKey}/environments/{environmentKey} | Update environment
[**postEnvironment**](EnvironmentsApi.md#postEnvironment) | **POST** /api/v2/projects/{projectKey}/environments | Create environment
[**resetEnvironmentMobileKey**](EnvironmentsApi.md#resetEnvironmentMobileKey) | **POST** /api/v2/projects/{projectKey}/environments/{environmentKey}/mobileKey | Reset environment mobile SDK key
[**resetEnvironmentSDKKey**](EnvironmentsApi.md#resetEnvironmentSDKKey) | **POST** /api/v2/projects/{projectKey}/environments/{environmentKey}/apiKey | Reset environment SDK key



## deleteEnvironment

> deleteEnvironment(projectKey, environmentKey)

Delete environment

Delete a environment by key.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.EnvironmentsApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
apiInstance.deleteEnvironment(projectKey, environmentKey, (error, data, response) => {
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

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEnvironment

> Environment getEnvironment(projectKey, environmentKey)

Get environment

&gt; ### Approval settings &gt; &gt; The &#x60;approvalSettings&#x60; key is only returned when [approvals](https://launchdarkly.com/docs/home/releases/approvals) for flags or segments are enabled.  Get an environment given a project and key. 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.EnvironmentsApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
apiInstance.getEnvironment(projectKey, environmentKey, (error, data, response) => {
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

[**Environment**](Environment.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEnvironmentsByProject

> Environments getEnvironmentsByProject(projectKey, opts)

List environments

Return a list of environments for the specified project.  By default, this returns the first 20 environments. Page through this list with the &#x60;limit&#x60; parameter and by following the &#x60;first&#x60;, &#x60;prev&#x60;, &#x60;next&#x60;, and &#x60;last&#x60; links in the &#x60;_links&#x60; field that returns. If those links do not appear, the pages they refer to don&#39;t exist. For example, the &#x60;first&#x60; and &#x60;prev&#x60; links will be missing from the response on the first page, because there is no previous page and you cannot return to the first page when you are already on the first page.  ### Filtering environments  LaunchDarkly supports two fields for filters: - &#x60;query&#x60; is a string that matches against the environments&#39; names and keys. It is not case sensitive. - &#x60;tags&#x60; is a &#x60;+&#x60;-separated list of environment tags. It filters the list of environments that have all of the tags in the list.  For example, the filter &#x60;filter&#x3D;query:abc,tags:tag-1+tag-2&#x60; matches environments with the string &#x60;abc&#x60; in their name or key and also are tagged with &#x60;tag-1&#x60; and &#x60;tag-2&#x60;. The filter is not case-sensitive.  The documented values for &#x60;filter&#x60; query parameters are prior to URL encoding. For example, the &#x60;+&#x60; in &#x60;filter&#x3D;tags:tag-1+tag-2&#x60; must be encoded to &#x60;%2B&#x60;.  ### Sorting environments  LaunchDarkly supports the following fields for sorting:  - &#x60;createdOn&#x60; sorts by the creation date of the environment. - &#x60;critical&#x60; sorts by whether the environments are marked as critical. - &#x60;name&#x60; sorts by environment name.  For example, &#x60;sort&#x3D;name&#x60; sorts the response by environment name in ascending order. 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.EnvironmentsApi();
let projectKey = "projectKey_example"; // String | The project key
let opts = {
  'limit': 789, // Number | The number of environments to return in the response. Defaults to 20.
  'offset': 789, // Number | Where to start in the list. This is for use with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`.
  'filter': "filter_example", // String | A comma-separated list of filters. Each filter is of the form `field:value`.
  'sort': "sort_example" // String | A comma-separated list of fields to sort by. Fields prefixed by a dash ( - ) sort in descending order.
};
apiInstance.getEnvironmentsByProject(projectKey, opts, (error, data, response) => {
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
 **limit** | **Number**| The number of environments to return in the response. Defaults to 20. | [optional] 
 **offset** | **Number**| Where to start in the list. This is for use with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query &#x60;limit&#x60;. | [optional] 
 **filter** | **String**| A comma-separated list of filters. Each filter is of the form &#x60;field:value&#x60;. | [optional] 
 **sort** | **String**| A comma-separated list of fields to sort by. Fields prefixed by a dash ( - ) sort in descending order. | [optional] 

### Return type

[**Environments**](Environments.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## patchEnvironment

> Environment patchEnvironment(projectKey, environmentKey, patchOperation)

Update environment

 Update an environment. Updating an environment uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).  To update fields in the environment object that are arrays, set the &#x60;path&#x60; to the name of the field and then append &#x60;/&lt;array index&gt;&#x60;. Using &#x60;/0&#x60; appends to the beginning of the array.  ### Approval settings  This request only returns the &#x60;approvalSettings&#x60; key if the [approvals](https://launchdarkly.com/docs/home/releases/approvals/) feature is enabled.  Only the &#x60;canReviewOwnRequest&#x60;, &#x60;canApplyDeclinedChanges&#x60;, &#x60;minNumApprovals&#x60;, &#x60;required&#x60; and &#x60;requiredApprovalTagsfields&#x60; are editable.  If you try to patch the environment by setting both &#x60;required&#x60; and &#x60;requiredApprovalTags&#x60;, the request fails and an error appears. You can specify either required approvals for all flags in an environment or those with specific tags, but not both. 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.EnvironmentsApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let patchOperation = [{"op":"replace","path":"/requireComments","value":true}]; // [PatchOperation] | 
apiInstance.patchEnvironment(projectKey, environmentKey, patchOperation, (error, data, response) => {
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
 **patchOperation** | [**[PatchOperation]**](PatchOperation.md)|  | 

### Return type

[**Environment**](Environment.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postEnvironment

> Environment postEnvironment(projectKey, environmentPost)

Create environment

&gt; ### Approval settings &gt; &gt; The &#x60;approvalSettings&#x60; key is only returned when the [approvals](https://launchdarkly.com/docs/home/releases/approvals/) feature is enabled. &gt; &gt; You cannot update approval settings when creating new environments. Update approval settings with the [https://launchdarkly.com/docs/api/environments/patch-environment).  Create a new environment in a specified project with a given name, key, swatch color, and default TTL. 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.EnvironmentsApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentPost = {"color":"DADBEE","key":"environment-key-123abc","name":"My Environment"}; // EnvironmentPost | 
apiInstance.postEnvironment(projectKey, environmentPost, (error, data, response) => {
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
 **environmentPost** | [**EnvironmentPost**](EnvironmentPost.md)|  | 

### Return type

[**Environment**](Environment.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## resetEnvironmentMobileKey

> Environment resetEnvironmentMobileKey(projectKey, environmentKey)

Reset environment mobile SDK key

Reset an environment&#39;s mobile key. The optional expiry for the old key is deprecated for this endpoint, so the old key will always expire immediately.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.EnvironmentsApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
apiInstance.resetEnvironmentMobileKey(projectKey, environmentKey, (error, data, response) => {
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

[**Environment**](Environment.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## resetEnvironmentSDKKey

> Environment resetEnvironmentSDKKey(projectKey, environmentKey, opts)

Reset environment SDK key

Reset an environment&#39;s SDK key with an optional expiry time for the old key.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.EnvironmentsApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let opts = {
  'expiry': 789 // Number | The time at which you want the old SDK key to expire, in UNIX milliseconds. By default, the key expires immediately. During the period between this call and the time when the old SDK key expires, both the old SDK key and the new SDK key will work.
};
apiInstance.resetEnvironmentSDKKey(projectKey, environmentKey, opts, (error, data, response) => {
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
 **expiry** | **Number**| The time at which you want the old SDK key to expire, in UNIX milliseconds. By default, the key expires immediately. During the period between this call and the time when the old SDK key expires, both the old SDK key and the new SDK key will work. | [optional] 

### Return type

[**Environment**](Environment.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

