# LaunchDarklyApi.FeatureFlagsApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**copyFeatureFlag**](FeatureFlagsApi.md#copyFeatureFlag) | **POST** /api/v2/flags/{projKey}/{featureFlagKey}/copy | Copy feature flag
[**deleteFeatureFlag**](FeatureFlagsApi.md#deleteFeatureFlag) | **DELETE** /api/v2/flags/{projKey}/{key} | Delete feature flag
[**getExpiringUserTargets**](FeatureFlagsApi.md#getExpiringUserTargets) | **GET** /api/v2/flags/{projKey}/{flagKey}/expiring-user-targets/{envKey} | Get expiring user targets for feature flag
[**getFeatureFlag**](FeatureFlagsApi.md#getFeatureFlag) | **GET** /api/v2/flags/{projKey}/{key} | Get feature flag
[**getFeatureFlagStatus**](FeatureFlagsApi.md#getFeatureFlagStatus) | **GET** /api/v2/flag-statuses/{projKey}/{envKey}/{key} | Get feature flag status
[**getFeatureFlagStatusAcrossEnvironments**](FeatureFlagsApi.md#getFeatureFlagStatusAcrossEnvironments) | **GET** /api/v2/flag-status/{projKey}/{key} | Get flag status across environments
[**getFeatureFlagStatuses**](FeatureFlagsApi.md#getFeatureFlagStatuses) | **GET** /api/v2/flag-statuses/{projKey}/{envKey} | List feature flag statuses
[**getFeatureFlags**](FeatureFlagsApi.md#getFeatureFlags) | **GET** /api/v2/flags/{projKey} | List feature flags
[**patchExpiringUserTargets**](FeatureFlagsApi.md#patchExpiringUserTargets) | **PATCH** /api/v2/flags/{projKey}/{flagKey}/expiring-user-targets/{envKey} | Update expiring user targets on feature flag
[**patchFeatureFlag**](FeatureFlagsApi.md#patchFeatureFlag) | **PATCH** /api/v2/flags/{projKey}/{key} | Update feature flag
[**postFeatureFlag**](FeatureFlagsApi.md#postFeatureFlag) | **POST** /api/v2/flags/{projKey} | Create a feature flag



## copyFeatureFlag

> FeatureFlag copyFeatureFlag(projKey, featureFlagKey, flagCopyConfigPost)

Copy feature flag

The includedActions and excludedActions define the parts of the flag configuration that are copied or not copied. By default, the entire flag configuration is copied.  You can have either &#x60;includedActions&#x60; or &#x60;excludedActions&#x60; but not both.  Valid &#x60;includedActions&#x60; and &#x60;excludedActions&#x60; include:  - &#x60;updateOn&#x60; - &#x60;updatePrerequisites&#x60; - &#x60;updateTargets&#x60; - &#x60;updateRules&#x60; - &#x60;updateFallthrough&#x60; - &#x60;updateOffVariation&#x60;    The &#x60;source&#x60; and &#x60;target&#x60; must be JSON objects if using curl, specifying the environment key and (optional) current flag configuration version in that environment. For example:  &#x60;&#x60;&#x60;json {   \&quot;key\&quot;: \&quot;production\&quot;,   \&quot;currentVersion\&quot;: 3 } &#x60;&#x60;&#x60;  If target is specified as above, the API will test to ensure that the current flag version in the &#x60;production&#x60; environment is &#x60;3&#x60;, and reject attempts to copy settings to &#x60;production&#x60; otherwise. You can use this to enforce optimistic locking on copy attempts. 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.FeatureFlagsApi();
let projKey = "projKey_example"; // String | The project key.
let featureFlagKey = "featureFlagKey_example"; // String | The feature flag's key. The key identifies the flag in your code.
let flagCopyConfigPost = new LaunchDarklyApi.FlagCopyConfigPost(); // FlagCopyConfigPost | 
apiInstance.copyFeatureFlag(projKey, featureFlagKey, flagCopyConfigPost, (error, data, response) => {
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
 **featureFlagKey** | **String**| The feature flag&#39;s key. The key identifies the flag in your code. | 
 **flagCopyConfigPost** | [**FlagCopyConfigPost**](FlagCopyConfigPost.md)|  | 

### Return type

[**FeatureFlag**](FeatureFlag.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteFeatureFlag

> deleteFeatureFlag(projKey, key)

Delete feature flag

Delete a feature flag in all environments. Use with caution: only delete feature flags your application no longer uses.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.FeatureFlagsApi();
let projKey = "projKey_example"; // String | The project key.
let key = "key_example"; // String | The feature flag's key. The key identifies the flag in your code.
apiInstance.deleteFeatureFlag(projKey, key, (error, data, response) => {
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
 **key** | **String**| The feature flag&#39;s key. The key identifies the flag in your code. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getExpiringUserTargets

> ExpiringUserTargetGetResponse getExpiringUserTargets(projKey, envKey, flagKey)

Get expiring user targets for feature flag

Get a list of user targets on a feature flag that are scheduled for removal.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.FeatureFlagsApi();
let projKey = "projKey_example"; // String | The project key.
let envKey = "envKey_example"; // String | The environment key.
let flagKey = "flagKey_example"; // String | The feature flag key.
apiInstance.getExpiringUserTargets(projKey, envKey, flagKey, (error, data, response) => {
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
 **flagKey** | **String**| The feature flag key. | 

### Return type

[**ExpiringUserTargetGetResponse**](ExpiringUserTargetGetResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFeatureFlag

> FeatureFlag getFeatureFlag(projKey, key, opts)

Get feature flag

Get a single feature flag by key. By default, this returns the configurations for all environments. You can filter environments with the &#x60;env&#x60; query parameter. For example, setting &#x60;env&#x3D;production&#x60; restricts the returned configurations to just the &#x60;production&#x60; environment.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.FeatureFlagsApi();
let projKey = "projKey_example"; // String | The project key
let key = "key_example"; // String | The feature flag key
let opts = {
  'env': "env_example" // String | Filter configurations by environment
};
apiInstance.getFeatureFlag(projKey, key, opts, (error, data, response) => {
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
 **projKey** | **String**| The project key | 
 **key** | **String**| The feature flag key | 
 **env** | **String**| Filter configurations by environment | [optional] 

### Return type

[**FeatureFlag**](FeatureFlag.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFeatureFlagStatus

> FlagStatusRep getFeatureFlagStatus(projKey, envKey, key)

Get feature flag status

Get the status for a particular feature flag.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.FeatureFlagsApi();
let projKey = "projKey_example"; // String | The project key
let envKey = "envKey_example"; // String | The environment key
let key = "key_example"; // String | The feature flag key
apiInstance.getFeatureFlagStatus(projKey, envKey, key, (error, data, response) => {
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
 **projKey** | **String**| The project key | 
 **envKey** | **String**| The environment key | 
 **key** | **String**| The feature flag key | 

### Return type

[**FlagStatusRep**](FlagStatusRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFeatureFlagStatusAcrossEnvironments

> FeatureFlagStatusAcrossEnvironments getFeatureFlagStatusAcrossEnvironments(projKey, key, opts)

Get flag status across environments

Get the status for a particular feature flag across environments.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.FeatureFlagsApi();
let projKey = "projKey_example"; // String | The project key
let key = "key_example"; // String | The feature flag key
let opts = {
  'env': "env_example" // String | Optional environment filter
};
apiInstance.getFeatureFlagStatusAcrossEnvironments(projKey, key, opts, (error, data, response) => {
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
 **projKey** | **String**| The project key | 
 **key** | **String**| The feature flag key | 
 **env** | **String**| Optional environment filter | [optional] 

### Return type

[**FeatureFlagStatusAcrossEnvironments**](FeatureFlagStatusAcrossEnvironments.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFeatureFlagStatuses

> FeatureFlagStatuses getFeatureFlagStatuses(projKey, envKey)

List feature flag statuses

Get a list of statuses for all feature flags. The status includes the last time the feature flag was requested, as well as a state, which is one of the following:  - &#x60;new&#x60;: the feature flag was created within the last seven days, and has not been requested yet - &#x60;active&#x60;: the feature flag was requested by your servers or clients within the last seven days - &#x60;inactive&#x60;: the feature flag was created more than seven days ago, and hasn&#39;t been requested by your servers or clients within the past seven days - &#x60;launched&#x60;: one variation of the feature flag has been rolled out to all your users for at least 7 days 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.FeatureFlagsApi();
let projKey = "projKey_example"; // String | The project key
let envKey = "envKey_example"; // String | Filter configurations by environment
apiInstance.getFeatureFlagStatuses(projKey, envKey, (error, data, response) => {
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
 **projKey** | **String**| The project key | 
 **envKey** | **String**| Filter configurations by environment | 

### Return type

[**FeatureFlagStatuses**](FeatureFlagStatuses.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFeatureFlags

> FeatureFlags getFeatureFlags(projKey, opts)

List feature flags

Get a list of all features in the given project. By default, each feature includes configurations for each environment. You can filter environments with the env query parameter. For example, setting &#x60;env&#x3D;production&#x60; restricts the returned configurations to just your production environment. You can also filter feature flags by tag with the tag query parameter.  We support the following fields for filters:  - &#x60;query&#x60; is a string that matches against the flags&#39; keys and names. It is not case sensitive. - &#x60;archived&#x60; is a boolean to filter the list to archived flags. When this is absent, only unarchived flags are returned. - &#x60;type&#x60; is a string allowing filtering to &#x60;temporary&#x60; or &#x60;permanent&#x60; flags. - &#x60;status&#x60; is a string allowing filtering to &#x60;new&#x60;, &#x60;inactive&#x60;, &#x60;active&#x60;, or &#x60;launched&#x60; flags in the specified environment. This filter also requires a &#x60;filterEnv&#x60; field to be set to a valid environment. For example: &#x60;filter&#x3D;status:active,filterEnv:production&#x60;. - &#x60;tags&#x60; is a + separated list of tags. It filters the list to members who have all of the tags in the list. - &#x60;hasExperiment&#x60; is a boolean with values of true or false and returns any flags that have an attached metric. - &#x60;hasDataExport&#x60; is a boolean with values of true or false and returns any flags that are currently exporting data in the specified environment. This includes flags that are exporting data via Experimentation. This filter also requires a &#x60;filterEnv&#x60; field to be set to a valid environment key. e.g. &#x60;filter&#x3D;hasExperiment:true,filterEnv:production&#x60; - &#x60;evaluated&#x60; is an object that contains a key of &#x60;after&#x60; and a value in Unix time in milliseconds. This returns all flags that have been evaluated since the time you specify in the environment provided. This filter also requires a &#x60;filterEnv&#x60; field to be set to a valid environment. For example: &#x60;filter&#x3D;evaluated:{\&quot;after\&quot;: 1590768455282},filterEnv:production&#x60;. - &#x60;filterEnv&#x60; is a string with the key of a valid environment. The filterEnv field is used for filters that are environment specific. If there are multiple environment specific filters you should only declare this parameter once. For example: &#x60;filter&#x3D;evaluated:{\&quot;after\&quot;: 1590768455282},filterEnv:production,status:active&#x60;.  An example filter is &#x60;query:abc,tags:foo+bar&#x60;. This matches flags with the string &#x60;abc&#x60; in their key or name, ignoring case, which also have the tags &#x60;foo&#x60; and &#x60;bar&#x60;.  By default, this returns all flags. You can page through the list with the &#x60;limit&#x60; parameter and by following the &#x60;first&#x60;, &#x60;prev&#x60;, &#x60;next&#x60;, and &#x60;last&#x60; links in the returned &#x60;_links&#x60; field. These links will not be present if the pages they refer to don&#39;t exist. For example, the &#x60;first&#x60; and &#x60;prev&#x60; links will be missing from the response on the first page. 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.FeatureFlagsApi();
let projKey = "projKey_example"; // String | The project key
let opts = {
  'env': "env_example", // String | Filter configurations by environment
  'tag': "tag_example", // String | Filter feature flags by tag
  'limit': 789, // Number | The number of feature flags to return. Defaults to -1, which returns all flags
  'offset': 789, // Number | Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next limit items
  'query': "query_example", // String | A string that matches against the flags' keys and names. It is not case sensitive
  'archived': true, // Boolean | A boolean to filter the list to archived flags. When this is absent, only unarchived flags will be returned
  'summary': true, // Boolean | By default in API version >= 1, flags will _not_ include their list of prerequisites, targets or rules.  Set summary=0 to include these fields for each flag returned
  'filter': "filter_example", // String | A comma-separated list of filters. Each filter is of the form field:value
  'sort': "sort_example" // String | A comma-separated list of fields to sort by. Fields prefixed by a dash ( - ) sort in descending order
};
apiInstance.getFeatureFlags(projKey, opts, (error, data, response) => {
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
 **projKey** | **String**| The project key | 
 **env** | **String**| Filter configurations by environment | [optional] 
 **tag** | **String**| Filter feature flags by tag | [optional] 
 **limit** | **Number**| The number of feature flags to return. Defaults to -1, which returns all flags | [optional] 
 **offset** | **Number**| Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next limit items | [optional] 
 **query** | **String**| A string that matches against the flags&#39; keys and names. It is not case sensitive | [optional] 
 **archived** | **Boolean**| A boolean to filter the list to archived flags. When this is absent, only unarchived flags will be returned | [optional] 
 **summary** | **Boolean**| By default in API version &gt;&#x3D; 1, flags will _not_ include their list of prerequisites, targets or rules.  Set summary&#x3D;0 to include these fields for each flag returned | [optional] 
 **filter** | **String**| A comma-separated list of filters. Each filter is of the form field:value | [optional] 
 **sort** | **String**| A comma-separated list of fields to sort by. Fields prefixed by a dash ( - ) sort in descending order | [optional] 

### Return type

[**FeatureFlags**](FeatureFlags.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## patchExpiringUserTargets

> ExpiringUserTargetPatchResponse patchExpiringUserTargets(projKey, envKey, flagKey, patchWithComment)

Update expiring user targets on feature flag

Update the list of user targets on a feature flag that are scheduled for removal.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.FeatureFlagsApi();
let projKey = "projKey_example"; // String | The project key.
let envKey = "envKey_example"; // String | The environment key.
let flagKey = "flagKey_example"; // String | The feature flag key.
let patchWithComment = new LaunchDarklyApi.PatchWithComment(); // PatchWithComment | 
apiInstance.patchExpiringUserTargets(projKey, envKey, flagKey, patchWithComment, (error, data, response) => {
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
 **flagKey** | **String**| The feature flag key. | 
 **patchWithComment** | [**PatchWithComment**](PatchWithComment.md)|  | 

### Return type

[**ExpiringUserTargetPatchResponse**](ExpiringUserTargetPatchResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## patchFeatureFlag

> FeatureFlag patchFeatureFlag(projKey, key, patchWithComment)

Update feature flag

Perform a partial update to a feature

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.FeatureFlagsApi();
let projKey = "projKey_example"; // String | The project key.
let key = "key_example"; // String | The feature flag's key. The key identifies the flag in your code.
let patchWithComment = new LaunchDarklyApi.PatchWithComment(); // PatchWithComment | 
apiInstance.patchFeatureFlag(projKey, key, patchWithComment, (error, data, response) => {
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
 **key** | **String**| The feature flag&#39;s key. The key identifies the flag in your code. | 
 **patchWithComment** | [**PatchWithComment**](PatchWithComment.md)|  | 

### Return type

[**FeatureFlag**](FeatureFlag.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postFeatureFlag

> FeatureFlag postFeatureFlag(projKey, featureFlagBody, opts)

Create a feature flag

Create a feature flag with the given name, key, and variations

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.FeatureFlagsApi();
let projKey = "projKey_example"; // String | The project key.
let featureFlagBody = {"key":"my-flag","name":"My Flag"}; // FeatureFlagBody | 
let opts = {
  'clone': "clone_example" // String | The key of the feature flag to be cloned. The key identifies the flag in your code. For example, setting `clone=flagKey` copies the full targeting configuration for all environments, including `on/off` state, from the original flag to the new flag.
};
apiInstance.postFeatureFlag(projKey, featureFlagBody, opts, (error, data, response) => {
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
 **featureFlagBody** | [**FeatureFlagBody**](FeatureFlagBody.md)|  | 
 **clone** | **String**| The key of the feature flag to be cloned. The key identifies the flag in your code. For example, setting &#x60;clone&#x3D;flagKey&#x60; copies the full targeting configuration for all environments, including &#x60;on/off&#x60; state, from the original flag to the new flag. | [optional] 

### Return type

[**FeatureFlag**](FeatureFlag.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

