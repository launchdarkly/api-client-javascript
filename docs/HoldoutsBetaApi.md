# LaunchDarklyApi.HoldoutsBetaApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllHoldouts**](HoldoutsBetaApi.md#getAllHoldouts) | **GET** /api/v2/projects/{projectKey}/environments/{environmentKey}/holdouts | Get all holdouts
[**getHoldout**](HoldoutsBetaApi.md#getHoldout) | **GET** /api/v2/projects/{projectKey}/environments/{environmentKey}/holdouts/{holdoutKey} | Get holdout
[**getHoldoutById**](HoldoutsBetaApi.md#getHoldoutById) | **GET** /api/v2/projects/{projectKey}/environments/{environmentKey}/holdouts/id/{holdoutId} | Get Holdout by Id
[**patchHoldout**](HoldoutsBetaApi.md#patchHoldout) | **PATCH** /api/v2/projects/{projectKey}/environments/{environmentKey}/holdouts/{holdoutKey} | Patch holdout
[**postHoldout**](HoldoutsBetaApi.md#postHoldout) | **POST** /api/v2/projects/{projectKey}/environments/{environmentKey}/holdouts | Create holdout



## getAllHoldouts

> HoldoutsCollectionRep getAllHoldouts(projectKey, environmentKey, opts)

Get all holdouts

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.HoldoutsBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let opts = {
  'limit': 789, // Number | The number of holdouts to return in the response. Defaults to 20
  'offset': 789 // Number | Where to start in the list. Use this with pagination. For example, an `offset` of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`.
};
apiInstance.getAllHoldouts(projectKey, environmentKey, opts, (error, data, response) => {
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
 **limit** | **Number**| The number of holdouts to return in the response. Defaults to 20 | [optional] 
 **offset** | **Number**| Where to start in the list. Use this with pagination. For example, an &#x60;offset&#x60; of 10 skips the first ten items and then returns the next items in the list, up to the query &#x60;limit&#x60;. | [optional] 

### Return type

[**HoldoutsCollectionRep**](HoldoutsCollectionRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getHoldout

> HoldoutDetailRep getHoldout(projectKey, environmentKey, holdoutKey, opts)

Get holdout

Get details about a holdout.  ### Expanding the holdout response  LaunchDarkly supports the following fields for expanding the \&quot;Get holdout\&quot; response. By default, these fields are **not** included in the response.  To expand the response, append the &#x60;expand&#x60; query parameter and add a comma-separated list with any of the following fields:  - &#x60;draftIteration&#x60; includes the iteration which has not been started yet, if any, for this holdout. - &#x60;previousIterations&#x60; includes all iterations prior to the current iteration, for this holdout. By default only the current iteration is included in the response. - &#x60;rel-draftIteration&#x60; includes the iteration which has not been started yet, if any, for the experiments related to this holdout. - &#x60;rel-metrics&#x60; includes metrics for experiments related to this holdout. - &#x60;rel-previousIterations&#x60; includes all iterations prior to the current iteration, for the experiments related to this holdout. - &#x60;rel-secondaryMetrics&#x60; includes secondary metrics for experiments related to this holdout. - &#x60;rel-treatments&#x60; includes all treatment and parameter details for experiments related to this holdout. - &#x60;secondaryMetrics&#x60; includes secondary metrics for this holdout. By default only the primary metric is included in the response. - &#x60;treatments&#x60; includes all treatment and parameter details for this holdout. By default treatment data is not included in the response.  For example, &#x60;expand&#x3D;draftIteration,rel-draftIteration&#x60; includes the &#x60;draftIteration&#x60; and &#x60;rel-draftIteration&#x60; fields in the response. If fields that you request with the &#x60;expand&#x60; query parameter are empty, they are not included in the response. 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.HoldoutsBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let holdoutKey = "holdoutKey_example"; // String | The holdout experiment key
let opts = {
  'expand': "expand_example" // String | A comma-separated list of properties that can reveal additional information in the response. Supported fields are explained above. Holdout experiment expansion fields have no prefix. Related experiment expansion fields have `rel-` as a prefix.
};
apiInstance.getHoldout(projectKey, environmentKey, holdoutKey, opts, (error, data, response) => {
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
 **holdoutKey** | **String**| The holdout experiment key | 
 **expand** | **String**| A comma-separated list of properties that can reveal additional information in the response. Supported fields are explained above. Holdout experiment expansion fields have no prefix. Related experiment expansion fields have &#x60;rel-&#x60; as a prefix. | [optional] 

### Return type

[**HoldoutDetailRep**](HoldoutDetailRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getHoldoutById

> HoldoutRep getHoldoutById(projectKey, environmentKey, holdoutId)

Get Holdout by Id

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.HoldoutsBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let holdoutId = "holdoutId_example"; // String | The holdout experiment ID
apiInstance.getHoldoutById(projectKey, environmentKey, holdoutId, (error, data, response) => {
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
 **holdoutId** | **String**| The holdout experiment ID | 

### Return type

[**HoldoutRep**](HoldoutRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## patchHoldout

> HoldoutRep patchHoldout(projectKey, environmentKey, holdoutKey, holdoutPatchInput)

Patch holdout

Updates an existing holdout, and returns the updated holdout. Updating holdouts uses the semantic patch format.  To make a semantic patch request, you must append &#x60;domain-model&#x3D;launchdarkly.semanticpatch&#x60; to your &#x60;Content-Type&#x60; header. To learn more, read [Updates using semantic patch](/reference#updates-using-semantic-patch).  ### Instructions  Semantic patch requests support the following &#x60;kind&#x60; instructions for updating holdouts.  &lt;details&gt; &lt;summary&gt;Click to expand instructions for &lt;strong&gt;updating holdouts&lt;/strong&gt;&lt;/summary&gt;  #### endHoldout  Ends a holdout.  ##### Parameters  None.  Here&#39;s an example:  &#x60;&#x60;&#x60;json {   \&quot;comment\&quot;: \&quot;Optional comment describing why the holdout is ending\&quot;,   \&quot;instructions\&quot;: [{     \&quot;kind\&quot;: \&quot;endHoldout\&quot;   }] } &#x60;&#x60;&#x60;  #### removeExperiment  Removes an experiment from a holdout.  ##### Parameters  - &#x60;value&#x60;: The key of the experiment to remove  Here&#39;s an example:  &#x60;&#x60;&#x60;json {   \&quot;comment\&quot;: \&quot;Optional comment describing the change\&quot;,   \&quot;instructions\&quot;: [{     \&quot;kind\&quot;: \&quot;removeExperiment\&quot;,     \&quot;value\&quot;: \&quot;experiment-key\&quot;   }] } &#x60;&#x60;&#x60;  #### updateDescription  Updates the description of the holdout.  ##### Parameters  - &#x60;value&#x60;: The new description.  Here&#39;s an example:  &#x60;&#x60;&#x60;json {   \&quot;comment\&quot;: \&quot;Optional comment describing the update\&quot;,   \&quot;instructions\&quot;: [{     \&quot;kind\&quot;: \&quot;updateDescription\&quot;,     \&quot;value\&quot;: \&quot;Updated holdout description\&quot;   }] } &#x60;&#x60;&#x60;  #### updateName  Updates the name of the holdout.  ##### Parameters  - &#x60;value&#x60;: The new name.  Here&#39;s an example:  &#x60;&#x60;&#x60;json {   \&quot;comment\&quot;: \&quot;Optional comment describing the update\&quot;,   \&quot;instructions\&quot;: [{     \&quot;kind\&quot;: \&quot;updateName\&quot;,     \&quot;value\&quot;: \&quot;Updated holdout name\&quot;   }] } &#x60;&#x60;&#x60;  &lt;/details&gt; 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.HoldoutsBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let holdoutKey = "holdoutKey_example"; // String | The holdout key
let holdoutPatchInput = {"comment":"Optional comment describing the update","instructions":[{"kind":"updateName","value":"Updated holdout name"}]}; // HoldoutPatchInput | 
apiInstance.patchHoldout(projectKey, environmentKey, holdoutKey, holdoutPatchInput, (error, data, response) => {
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
 **holdoutKey** | **String**| The holdout key | 
 **holdoutPatchInput** | [**HoldoutPatchInput**](HoldoutPatchInput.md)|  | 

### Return type

[**HoldoutRep**](HoldoutRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postHoldout

> HoldoutRep postHoldout(projectKey, environmentKey, holdoutPostRequest)

Create holdout

Create a new holdout in the specified project.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.HoldoutsBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let holdoutPostRequest = new LaunchDarklyApi.HoldoutPostRequest(); // HoldoutPostRequest | 
apiInstance.postHoldout(projectKey, environmentKey, holdoutPostRequest, (error, data, response) => {
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
 **holdoutPostRequest** | [**HoldoutPostRequest**](HoldoutPostRequest.md)|  | 

### Return type

[**HoldoutRep**](HoldoutRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

