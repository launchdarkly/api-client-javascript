# LaunchDarklyApi.FlagTriggersApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTriggerWorkflow**](FlagTriggersApi.md#createTriggerWorkflow) | **POST** /api/v2/flags/{projectKey}/{featureFlagKey}/triggers/{environmentKey} | Create flag trigger
[**deleteTriggerWorkflow**](FlagTriggersApi.md#deleteTriggerWorkflow) | **DELETE** /api/v2/flags/{projectKey}/{featureFlagKey}/triggers/{environmentKey}/{id} | Delete flag trigger
[**getTriggerWorkflowById**](FlagTriggersApi.md#getTriggerWorkflowById) | **GET** /api/v2/flags/{projectKey}/{featureFlagKey}/triggers/{environmentKey}/{id} | Get flag trigger by ID
[**getTriggerWorkflows**](FlagTriggersApi.md#getTriggerWorkflows) | **GET** /api/v2/flags/{projectKey}/{featureFlagKey}/triggers/{environmentKey} | List flag triggers
[**patchTriggerWorkflow**](FlagTriggersApi.md#patchTriggerWorkflow) | **PATCH** /api/v2/flags/{projectKey}/{featureFlagKey}/triggers/{environmentKey}/{id} | Update flag trigger



## createTriggerWorkflow

> TriggerWorkflowRep createTriggerWorkflow(projectKey, environmentKey, featureFlagKey, triggerPost)

Create flag trigger

Create a new flag trigger.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.FlagTriggersApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let featureFlagKey = "featureFlagKey_example"; // String | The feature flag key
let triggerPost = new LaunchDarklyApi.TriggerPost(); // TriggerPost | 
apiInstance.createTriggerWorkflow(projectKey, environmentKey, featureFlagKey, triggerPost, (error, data, response) => {
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
 **featureFlagKey** | **String**| The feature flag key | 
 **triggerPost** | [**TriggerPost**](TriggerPost.md)|  | 

### Return type

[**TriggerWorkflowRep**](TriggerWorkflowRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteTriggerWorkflow

> deleteTriggerWorkflow(projectKey, environmentKey, featureFlagKey, id)

Delete flag trigger

Delete a flag trigger by ID.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.FlagTriggersApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let featureFlagKey = "featureFlagKey_example"; // String | The feature flag key
let id = "id_example"; // String | The flag trigger ID
apiInstance.deleteTriggerWorkflow(projectKey, environmentKey, featureFlagKey, id, (error, data, response) => {
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
 **featureFlagKey** | **String**| The feature flag key | 
 **id** | **String**| The flag trigger ID | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTriggerWorkflowById

> TriggerWorkflowRep getTriggerWorkflowById(projectKey, featureFlagKey, environmentKey, id)

Get flag trigger by ID

Get a flag trigger by ID.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.FlagTriggersApi();
let projectKey = "projectKey_example"; // String | The project key
let featureFlagKey = "featureFlagKey_example"; // String | The feature flag key
let environmentKey = "environmentKey_example"; // String | The environment key
let id = "id_example"; // String | The flag trigger ID
apiInstance.getTriggerWorkflowById(projectKey, featureFlagKey, environmentKey, id, (error, data, response) => {
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
 **id** | **String**| The flag trigger ID | 

### Return type

[**TriggerWorkflowRep**](TriggerWorkflowRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTriggerWorkflows

> TriggerWorkflowCollectionRep getTriggerWorkflows(projectKey, environmentKey, featureFlagKey)

List flag triggers

Get a list of all flag triggers.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.FlagTriggersApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let featureFlagKey = "featureFlagKey_example"; // String | The feature flag key
apiInstance.getTriggerWorkflows(projectKey, environmentKey, featureFlagKey, (error, data, response) => {
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
 **featureFlagKey** | **String**| The feature flag key | 

### Return type

[**TriggerWorkflowCollectionRep**](TriggerWorkflowCollectionRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## patchTriggerWorkflow

> TriggerWorkflowRep patchTriggerWorkflow(projectKey, environmentKey, featureFlagKey, id, flagTriggerInput)

Update flag trigger

Update a flag trigger. Updating a flag trigger uses the semantic patch format.  To make a semantic patch request, you must append &#x60;domain-model&#x3D;launchdarkly.semanticpatch&#x60; to your &#x60;Content-Type&#x60; header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).  ### Instructions  Semantic patch requests support the following &#x60;kind&#x60; instructions for updating flag triggers.  &lt;details&gt; &lt;summary&gt;Click to expand instructions for &lt;strong&gt;updating flag triggers&lt;/strong&gt;&lt;/summary&gt;  #### replaceTriggerActionInstructions  Removes the existing trigger action and replaces it with the new instructions.  ##### Parameters  - &#x60;value&#x60;: An array of the new &#x60;kind&#x60;s of actions to perform when triggering. Supported flag actions are &#x60;turnFlagOn&#x60; and &#x60;turnFlagOff&#x60;.  Here&#39;s an example that replaces the existing action with new instructions to turn flag targeting off:  &#x60;&#x60;&#x60;json {   \&quot;instructions\&quot;: [     {       \&quot;kind\&quot;: \&quot;replaceTriggerActionInstructions\&quot;,       \&quot;value\&quot;: [ {\&quot;kind\&quot;: \&quot;turnFlagOff\&quot;} ]     }   ] } &#x60;&#x60;&#x60;  #### cycleTriggerUrl  Generates a new URL for this trigger. You must update any clients using the trigger to use this new URL.  Here&#39;s an example:  &#x60;&#x60;&#x60;json {   \&quot;instructions\&quot;: [{ \&quot;kind\&quot;: \&quot;cycleTriggerUrl\&quot; }] } &#x60;&#x60;&#x60;  #### disableTrigger  Disables the trigger. This saves the trigger configuration, but the trigger stops running. To re-enable, use &#x60;enableTrigger&#x60;.  Here&#39;s an example:  &#x60;&#x60;&#x60;json {   \&quot;instructions\&quot;: [{ \&quot;kind\&quot;: \&quot;disableTrigger\&quot; }] } &#x60;&#x60;&#x60;  #### enableTrigger  Enables the trigger. If you previously disabled the trigger, it begins running again.  Here&#39;s an example:  &#x60;&#x60;&#x60;json {   \&quot;instructions\&quot;: [{ \&quot;kind\&quot;: \&quot;enableTrigger\&quot; }] } &#x60;&#x60;&#x60;  &lt;/details&gt; 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.FlagTriggersApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let featureFlagKey = "featureFlagKey_example"; // String | The feature flag key
let id = "id_example"; // String | The flag trigger ID
let flagTriggerInput = new LaunchDarklyApi.FlagTriggerInput(); // FlagTriggerInput | 
apiInstance.patchTriggerWorkflow(projectKey, environmentKey, featureFlagKey, id, flagTriggerInput, (error, data, response) => {
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
 **featureFlagKey** | **String**| The feature flag key | 
 **id** | **String**| The flag trigger ID | 
 **flagTriggerInput** | [**FlagTriggerInput**](FlagTriggerInput.md)|  | 

### Return type

[**TriggerWorkflowRep**](TriggerWorkflowRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

