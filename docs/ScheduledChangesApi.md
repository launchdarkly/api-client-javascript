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

Delete a scheduled changes workflow.

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
let featureFlagKey = "featureFlagKey_example"; // String | The feature flag key
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
 **featureFlagKey** | **String**| The feature flag key | 
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

Get a scheduled change that will be applied to the feature flag by ID.

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
let featureFlagKey = "featureFlagKey_example"; // String | The feature flag key
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
 **featureFlagKey** | **String**| The feature flag key | 
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
let featureFlagKey = "featureFlagKey_example"; // String | The feature flag key
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
 **featureFlagKey** | **String**| The feature flag key | 
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

 Update a scheduled change, overriding existing instructions with the new ones. Updating a scheduled change uses the semantic patch format.  To make a semantic patch request, you must append &#x60;domain-model&#x3D;launchdarkly.semanticpatch&#x60; to your &#x60;Content-Type&#x60; header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).  ### Instructions  Semantic patch requests support the following &#x60;kind&#x60; instructions for updating scheduled changes.  &lt;details&gt; &lt;summary&gt;Click to expand instructions for &lt;strong&gt;updating scheduled changes&lt;/strong&gt;&lt;/summary&gt;  #### deleteScheduledChange  Removes the scheduled change.  Here&#39;s an example:  &#x60;&#x60;&#x60;json {   \&quot;instructions\&quot;: [{ \&quot;kind\&quot;: \&quot;deleteScheduledChange\&quot; }] } &#x60;&#x60;&#x60;  #### replaceScheduledChangesInstructions  Removes the existing scheduled changes and replaces them with the new instructions.  ##### Parameters  - &#x60;value&#x60;: An array of the new actions to perform when the execution date for these scheduled changes arrives. Supported scheduled actions are &#x60;turnFlagOn&#x60; and &#x60;turnFlagOff&#x60;.  Here&#39;s an example that replaces the scheduled changes with new instructions to turn flag targeting off:  &#x60;&#x60;&#x60;json {   \&quot;instructions\&quot;: [     {       \&quot;kind\&quot;: \&quot;replaceScheduledChangesInstructions\&quot;,       \&quot;value\&quot;: [ {\&quot;kind\&quot;: \&quot;turnFlagOff\&quot;} ]     }   ] } &#x60;&#x60;&#x60;  #### updateScheduledChangesExecutionDate  Updates the execution date for the scheduled changes.  ##### Parameters  - &#x60;value&#x60;: the new execution date, in Unix milliseconds.  Here&#39;s an example:  &#x60;&#x60;&#x60;json {   \&quot;instructions\&quot;: [     {       \&quot;kind\&quot;: \&quot;updateScheduledChangesExecutionDate\&quot;,       \&quot;value\&quot;: 1754092860000     }   ] } &#x60;&#x60;&#x60;  &lt;/details&gt; 

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
let featureFlagKey = "featureFlagKey_example"; // String | The feature flag key
let environmentKey = "environmentKey_example"; // String | The environment key
let id = "id_example"; // String | The scheduled change ID
let flagScheduledChangesInput = {"comment":"Optional comment describing the update to the scheduled changes","instructions":[{"kind":"replaceScheduledChangesInstructions","value":[{"kind":"turnFlagOff"}]}]}; // FlagScheduledChangesInput | 
let opts = {
  'ignoreConflicts': true // Boolean | Whether to succeed (`true`) or fail (`false`) when these new instructions conflict with existing scheduled changes
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
 **featureFlagKey** | **String**| The feature flag key | 
 **environmentKey** | **String**| The environment key | 
 **id** | **String**| The scheduled change ID | 
 **flagScheduledChangesInput** | [**FlagScheduledChangesInput**](FlagScheduledChangesInput.md)|  | 
 **ignoreConflicts** | **Boolean**| Whether to succeed (&#x60;true&#x60;) or fail (&#x60;false&#x60;) when these new instructions conflict with existing scheduled changes | [optional] 

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

Create scheduled changes for a feature flag. The changes you schedule may include any semantic patch instructions available when [updating a feature flag](https://launchdarkly.com/docs/api/feature-flags/patch-feature-flag#using-semantic-patches-on-a-feature-flag). If the &#x60;ignoreConficts&#x60; query parameter is false and there are conflicts between these instructions and existing scheduled changes, the request will fail. If the parameter is true and there are conflicts, the request will succeed.

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
let featureFlagKey = "featureFlagKey_example"; // String | The feature flag key
let environmentKey = "environmentKey_example"; // String | The environment key
let postFlagScheduledChangesInput = {"comment":"Optional comment describing the scheduled changes","executionDate":1718467200000,"instructions":[{"kind":"turnFlagOn"}]}; // PostFlagScheduledChangesInput | 
let opts = {
  'ignoreConflicts': true // Boolean | Whether to succeed (`true`) or fail (`false`) when these instructions conflict with existing scheduled changes
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
 **featureFlagKey** | **String**| The feature flag key | 
 **environmentKey** | **String**| The environment key | 
 **postFlagScheduledChangesInput** | [**PostFlagScheduledChangesInput**](PostFlagScheduledChangesInput.md)|  | 
 **ignoreConflicts** | **Boolean**| Whether to succeed (&#x60;true&#x60;) or fail (&#x60;false&#x60;) when these instructions conflict with existing scheduled changes | [optional] 

### Return type

[**FeatureFlagScheduledChange**](FeatureFlagScheduledChange.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

