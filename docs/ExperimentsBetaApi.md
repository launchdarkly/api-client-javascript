# LaunchDarklyApi.ExperimentsBetaApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createExperiment**](ExperimentsBetaApi.md#createExperiment) | **POST** /api/v2/projects/{projectKey}/environments/{environmentKey}/experiments | Create experiment
[**createIteration**](ExperimentsBetaApi.md#createIteration) | **POST** /api/v2/projects/{projectKey}/environments/{environmentKey}/experiments/{experimentKey}/iterations | Create iteration
[**getExperiment**](ExperimentsBetaApi.md#getExperiment) | **GET** /api/v2/projects/{projectKey}/environments/{environmentKey}/experiments/{experimentKey} | Get experiment
[**getExperimentResults**](ExperimentsBetaApi.md#getExperimentResults) | **GET** /api/v2/projects/{projectKey}/environments/{environmentKey}/experiments/{experimentKey}/metrics/{metricKey}/results | Get experiment results
[**getExperiments**](ExperimentsBetaApi.md#getExperiments) | **GET** /api/v2/projects/{projectKey}/environments/{environmentKey}/experiments | Get experiments
[**getLegacyExperimentResults**](ExperimentsBetaApi.md#getLegacyExperimentResults) | **GET** /api/v2/flags/{projectKey}/{featureFlagKey}/experiments/{environmentKey}/{metricKey} | Get legacy experiment results (deprecated)
[**patchExperiment**](ExperimentsBetaApi.md#patchExperiment) | **PATCH** /api/v2/projects/{projectKey}/environments/{environmentKey}/experiments/{experimentKey} | Patch experiment
[**resetExperiment**](ExperimentsBetaApi.md#resetExperiment) | **DELETE** /api/v2/flags/{projectKey}/{featureFlagKey}/experiments/{environmentKey}/{metricKey}/results | Reset experiment results



## createExperiment

> Experiment createExperiment(projectKey, environmentKey, experimentPost)

Create experiment

Create an experiment. To learn more, read [Creating experiments](https://docs.launchdarkly.com/home/creating-experiments).

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ExperimentsBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let experimentPost = new LaunchDarklyApi.ExperimentPost(); // ExperimentPost | 
apiInstance.createExperiment(projectKey, environmentKey, experimentPost, (error, data, response) => {
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
 **experimentPost** | [**ExperimentPost**](ExperimentPost.md)|  | 

### Return type

[**Experiment**](Experiment.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createIteration

> IterationRep createIteration(projectKey, environmentKey, experimentKey, iterationInput)

Create iteration

Create an experiment iteration. Experiment iterations let you record experiments in discrete blocks of time. To learn more, read [Starting experiment iterations](https://docs.launchdarkly.com/home/creating-experiments#starting-experiment-iterations).

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ExperimentsBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let experimentKey = "experimentKey_example"; // String | The experiment key
let iterationInput = new LaunchDarklyApi.IterationInput(); // IterationInput | 
apiInstance.createIteration(projectKey, environmentKey, experimentKey, iterationInput, (error, data, response) => {
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
 **experimentKey** | **String**| The experiment key | 
 **iterationInput** | [**IterationInput**](IterationInput.md)|  | 

### Return type

[**IterationRep**](IterationRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getExperiment

> Experiment getExperiment(projectKey, environmentKey, experimentKey)

Get experiment

Get details about an experiment.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ExperimentsBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let experimentKey = "experimentKey_example"; // String | The experiment key
apiInstance.getExperiment(projectKey, environmentKey, experimentKey, (error, data, response) => {
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
 **experimentKey** | **String**| The experiment key | 

### Return type

[**Experiment**](Experiment.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getExperimentResults

> ExperimentBayesianResultsRep getExperimentResults(projectKey, environmentKey, experimentKey, metricKey)

Get experiment results

Get results from an experiment for a particular metric.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ExperimentsBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let experimentKey = "experimentKey_example"; // String | The experiment key
let metricKey = "metricKey_example"; // String | The metric key
apiInstance.getExperimentResults(projectKey, environmentKey, experimentKey, metricKey, (error, data, response) => {
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
 **experimentKey** | **String**| The experiment key | 
 **metricKey** | **String**| The metric key | 

### Return type

[**ExperimentBayesianResultsRep**](ExperimentBayesianResultsRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getExperiments

> ExperimentCollectionRep getExperiments(projectKey, environmentKey, opts)

Get experiments

Get details about all experiments in an environment.  ### Filtering experiments  LaunchDarkly supports the &#x60;filter&#x60; query param for filtering, with the following fields:  - &#x60;flagKey&#x60; filters for only experiments that use the flag with the given key. - &#x60;metricKey&#x60; filters for only experiments that use the metric with the given key. - &#x60;status&#x60; filters for only experiments with an iteration with the given status. An iteration can have the status &#x60;not_started&#x60;, &#x60;running&#x60; or &#x60;stopped&#x60;.  For example, &#x60;filter&#x3D;flagKey:my-flag,status:running,metricKey:page-load-ms&#x60; filters for experiments for the given flag key and the given metric key which have a currently running iteration.  ### Expanding the experiments response LaunchDarkly supports four fields for expanding the \&quot;List experiments\&quot; response. By default, these fields are **not** included in the response.  To expand the response, append the &#x60;expand&#x60; query parameter and add a comma-separated list with any of the following fields:  - &#x60;previousIterations&#x60; includes all iterations prior to the current iteration.  By default only the current iteration will be included in the response. - &#x60;draftIteration&#x60; includes a draft of an iteration which has not been started yet, if any. - &#x60;secondaryMetrics&#x60; includes secondary metrics.  By default only the primary metric is included in the response. - &#x60;treatments&#x60; includes all treatment and parameter details.  By default treatment data will not be included in the response.  For example, &#x60;expand&#x3D;draftIteration,treatments&#x60; includes the &#x60;draftIteration&#x60; and &#x60;treatments&#x60; fields in the response. 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ExperimentsBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let opts = {
  'limit': 789, // Number | The maximum number of experiments to return. Defaults to 20
  'offset': 789, // Number | Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`.
  'filter': "filter_example", // String | A comma-separated list of filters. Each filter is of the form `field:value`. Supported fields are explained above.
  'expand': "expand_example" // String | A comma-separated list of properties that can reveal additional information in the response. Supported fields are explained above.
};
apiInstance.getExperiments(projectKey, environmentKey, opts, (error, data, response) => {
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
 **limit** | **Number**| The maximum number of experiments to return. Defaults to 20 | [optional] 
 **offset** | **Number**| Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query &#x60;limit&#x60;. | [optional] 
 **filter** | **String**| A comma-separated list of filters. Each filter is of the form &#x60;field:value&#x60;. Supported fields are explained above. | [optional] 
 **expand** | **String**| A comma-separated list of properties that can reveal additional information in the response. Supported fields are explained above. | [optional] 

### Return type

[**ExperimentCollectionRep**](ExperimentCollectionRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLegacyExperimentResults

> ExperimentResults getLegacyExperimentResults(projectKey, featureFlagKey, environmentKey, metricKey, opts)

Get legacy experiment results (deprecated)

Get detailed experiment result data for legacy experiments.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ExperimentsBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let featureFlagKey = "featureFlagKey_example"; // String | The feature flag key
let environmentKey = "environmentKey_example"; // String | The environment key
let metricKey = "metricKey_example"; // String | The metric key
let opts = {
  'from': 789, // Number | A timestamp denoting the start of the data collection period, expressed as a Unix epoch time in milliseconds.
  'to': 789 // Number | A timestamp denoting the end of the data collection period, expressed as a Unix epoch time in milliseconds.
};
apiInstance.getLegacyExperimentResults(projectKey, featureFlagKey, environmentKey, metricKey, opts, (error, data, response) => {
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
 **metricKey** | **String**| The metric key | 
 **from** | **Number**| A timestamp denoting the start of the data collection period, expressed as a Unix epoch time in milliseconds. | [optional] 
 **to** | **Number**| A timestamp denoting the end of the data collection period, expressed as a Unix epoch time in milliseconds. | [optional] 

### Return type

[**ExperimentResults**](ExperimentResults.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## patchExperiment

> Experiment patchExperiment(projectKey, environmentKey, experimentKey, experimentPatchInput)

Patch experiment

Update an experiment. Updating an experiment uses the semantic patch format.  To make a semantic patch request, you must append &#x60;domain-model&#x3D;launchdarkly.semanticpatch&#x60; to your &#x60;Content-Type&#x60; header. To learn more, read [Updates using semantic patch](/reference#updates-using-semantic-patch).  ### Instructions  Semantic patch requests support the following &#x60;kind&#x60; instructions for updating experiments.  #### updateName  Updates the experiment name.  ##### Parameters  - &#x60;value&#x60;: The new name.  #### updateDescription  Updates the experiment description.  ##### Parameters  - &#x60;value&#x60;: The new description.  #### startIteration  Starts a new iteration for this experiment.  #### stopIteration  Stops the current iteration for this experiment. 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ExperimentsBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let experimentKey = "experimentKey_example"; // String | The experiment key
let experimentPatchInput = {"comment":"Example comment describing the update","instructions":[{"kind":"updateName","value":"Updated experiment name"}]}; // ExperimentPatchInput | 
apiInstance.patchExperiment(projectKey, environmentKey, experimentKey, experimentPatchInput, (error, data, response) => {
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
 **experimentKey** | **String**| The experiment key | 
 **experimentPatchInput** | [**ExperimentPatchInput**](ExperimentPatchInput.md)|  | 

### Return type

[**Experiment**](Experiment.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## resetExperiment

> resetExperiment(projectKey, featureFlagKey, environmentKey, metricKey)

Reset experiment results

Reset all experiment results by deleting all existing data for an experiment.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ExperimentsBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let featureFlagKey = "featureFlagKey_example"; // String | The feature flag key
let environmentKey = "environmentKey_example"; // String | The environment key
let metricKey = "metricKey_example"; // String | The metric's key
apiInstance.resetExperiment(projectKey, featureFlagKey, environmentKey, metricKey, (error, data, response) => {
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
 **metricKey** | **String**| The metric&#39;s key | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

