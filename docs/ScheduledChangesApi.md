# LaunchDarklyApi.ScheduledChangesApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteFlagConfigScheduledChanges**](ScheduledChangesApi.md#deleteFlagConfigScheduledChanges) | **DELETE** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes/{id} | Delete scheduled changes workflow
[**getFeatureFlagScheduledChange**](ScheduledChangesApi.md#getFeatureFlagScheduledChange) | **GET** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes/{id} | Get a scheduled change
[**getFlagConfigScheduledChanges**](ScheduledChangesApi.md#getFlagConfigScheduledChanges) | **GET** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes | List scheduled changes
[**patchFlagConfigScheduledChange**](ScheduledChangesApi.md#patchFlagConfigScheduledChange) | **PATCH** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes/{id} | Update scheduled changes workflow
[**postFlagConfigScheduledChanges**](ScheduledChangesApi.md#postFlagConfigScheduledChanges) | **POST** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes | Create scheduled changes workflow



## deleteFlagConfigScheduledChanges

> deleteFlagConfigScheduledChanges(projectKey, featureFlagKey, environmentKey, id)

Delete scheduled changes workflow

Delete a scheduled changes workflow

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ScheduledChangesApi();
let projectKey = "projectKey_example"; // String | The project key
let featureFlagKey = "featureFlagKey_example"; // String | The feature flag's key
let environmentKey = "environmentKey_example"; // String | The environment key
let id = "id_example"; // String | The scheduled change id
apiInstance.deleteFlagConfigScheduledChanges(projectKey, featureFlagKey, environmentKey, id, (error, data, response) => {
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
 **id** | **String**| The scheduled change id | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFeatureFlagScheduledChange

> FeatureFlagScheduledChange getFeatureFlagScheduledChange(projectKey, featureFlagKey, environmentKey, id)

Get a scheduled change

Get a scheduled change that will be applied to the feature flag by ID

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ScheduledChangesApi();
let projectKey = "projectKey_example"; // String | The project key
let featureFlagKey = "featureFlagKey_example"; // String | The feature flag's key
let environmentKey = "environmentKey_example"; // String | The environment key
let id = "id_example"; // String | The scheduled change id
apiInstance.getFeatureFlagScheduledChange(projectKey, featureFlagKey, environmentKey, id, (error, data, response) => {
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
 **id** | **String**| The scheduled change id | 

### Return type

[**FeatureFlagScheduledChange**](FeatureFlagScheduledChange.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFlagConfigScheduledChanges

> FeatureFlagScheduledChanges getFlagConfigScheduledChanges(projectKey, featureFlagKey, environmentKey)

List scheduled changes

Get a list of scheduled changes that will be applied to the feature flag.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ScheduledChangesApi();
let projectKey = "projectKey_example"; // String | The project key
let featureFlagKey = "featureFlagKey_example"; // String | The feature flag's key
let environmentKey = "environmentKey_example"; // String | The environment key
apiInstance.getFlagConfigScheduledChanges(projectKey, featureFlagKey, environmentKey, (error, data, response) => {
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

[**FeatureFlagScheduledChanges**](FeatureFlagScheduledChanges.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## patchFlagConfigScheduledChange

> FeatureFlagScheduledChange patchFlagConfigScheduledChange(projectKey, featureFlagKey, environmentKey, id, flagScheduledChangesInput, opts)

Update scheduled changes workflow

Update a scheduled change, overriding existing instructions with the new ones.&lt;br /&gt;&lt;br /&gt;Requires a semantic patch representation of the desired changes to the resource. To learn more about semantic patches, read [Updates](/reference#updates-via-semantic-patches).

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ScheduledChangesApi();
let projectKey = "projectKey_example"; // String | The project key
let featureFlagKey = "featureFlagKey_example"; // String | The feature flag's key
let environmentKey = "environmentKey_example"; // String | The environment key
let id = "id_example"; // String | The scheduled change ID
let flagScheduledChangesInput = new LaunchDarklyApi.FlagScheduledChangesInput(); // FlagScheduledChangesInput | 
let opts = {
  'ignoreConflicts': true // Boolean | Whether or not to succeed or fail when the new instructions conflict with existing scheduled changes
};
apiInstance.patchFlagConfigScheduledChange(projectKey, featureFlagKey, environmentKey, id, flagScheduledChangesInput, opts, (error, data, response) => {
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
 **id** | **String**| The scheduled change ID | 
 **flagScheduledChangesInput** | [**FlagScheduledChangesInput**](FlagScheduledChangesInput.md)|  | 
 **ignoreConflicts** | **Boolean**| Whether or not to succeed or fail when the new instructions conflict with existing scheduled changes | [optional] 

### Return type

[**FeatureFlagScheduledChange**](FeatureFlagScheduledChange.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postFlagConfigScheduledChanges

> FeatureFlagScheduledChange postFlagConfigScheduledChanges(projectKey, featureFlagKey, environmentKey, postFlagScheduledChangesInput, opts)

Create scheduled changes workflow

Create scheduled changes for a feature flag. If the ignoreConficts query parameter is false and the new instructions would conflict with the current state of the feature flag or any existing scheduled changes, the request will fail. If the parameter is true and there are conflicts, the request will succeed as normal.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ScheduledChangesApi();
let projectKey = "projectKey_example"; // String | The project key
let featureFlagKey = "featureFlagKey_example"; // String | The feature flag's key
let environmentKey = "environmentKey_example"; // String | The environment key
let postFlagScheduledChangesInput = new LaunchDarklyApi.PostFlagScheduledChangesInput(); // PostFlagScheduledChangesInput | 
let opts = {
  'ignoreConflicts': true // Boolean | Whether or not to succeed or fail when the new instructions conflict with existing scheduled changes
};
apiInstance.postFlagConfigScheduledChanges(projectKey, featureFlagKey, environmentKey, postFlagScheduledChangesInput, opts, (error, data, response) => {
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
 **postFlagScheduledChangesInput** | [**PostFlagScheduledChangesInput**](PostFlagScheduledChangesInput.md)|  | 
 **ignoreConflicts** | **Boolean**| Whether or not to succeed or fail when the new instructions conflict with existing scheduled changes | [optional] 

### Return type

[**FeatureFlagScheduledChange**](FeatureFlagScheduledChange.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

