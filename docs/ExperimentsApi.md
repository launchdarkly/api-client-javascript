# LaunchDarklyApi.ExperimentsApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createExperiment**](ExperimentsApi.md#createExperiment) | **POST** /api/v2/projects/{projectKey}/environments/{environmentKey}/experiments | Create experiment
[**createIteration**](ExperimentsApi.md#createIteration) | **POST** /api/v2/projects/{projectKey}/environments/{environmentKey}/experiments/{experimentKey}/iterations | Create iteration
[**getExperiment**](ExperimentsApi.md#getExperiment) | **GET** /api/v2/projects/{projectKey}/environments/{environmentKey}/experiments/{experimentKey} | Get experiment
[**getExperimentResults**](ExperimentsApi.md#getExperimentResults) | **GET** /api/v2/projects/{projectKey}/environments/{environmentKey}/experiments/{experimentKey}/metrics/{metricKey}/results | Get experiment results (Deprecated)
[**getExperimentResultsForMetricGroup**](ExperimentsApi.md#getExperimentResultsForMetricGroup) | **GET** /api/v2/projects/{projectKey}/environments/{environmentKey}/experiments/{experimentKey}/metric-groups/{metricGroupKey}/results | Get experiment results for metric group (Deprecated)
[**getExperimentationSettings**](ExperimentsApi.md#getExperimentationSettings) | **GET** /api/v2/projects/{projectKey}/experimentation-settings | Get experimentation settings
[**getExperiments**](ExperimentsApi.md#getExperiments) | **GET** /api/v2/projects/{projectKey}/environments/{environmentKey}/experiments | Get experiments
[**patchExperiment**](ExperimentsApi.md#patchExperiment) | **PATCH** /api/v2/projects/{projectKey}/environments/{environmentKey}/experiments/{experimentKey} | Patch experiment
[**putExperimentationSettings**](ExperimentsApi.md#putExperimentationSettings) | **PUT** /api/v2/projects/{projectKey}/experimentation-settings | Update experimentation settings



## createExperiment

> Experiment createExperiment(projectKey, environmentKey, experimentPost)

Create experiment

Create an experiment.  To run this experiment, you&#39;ll need to [create an iteration](https://launchdarkly.com/docs/ld-docs/api/experiments/create-iteration) and then [update the experiment](https://launchdarkly.com/docs/ld-docs/api/experiments/patch-experiment) with the &#x60;startIteration&#x60; instruction.  To learn more, read [Creating experiments](https://launchdarkly.com/docs/home/experimentation/create). 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ExperimentsApi();
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

Create an experiment iteration.  Experiment iterations let you record experiments in individual blocks of time. Initially, iterations are created with a status of &#x60;not_started&#x60; and appear in the &#x60;draftIteration&#x60; field of an experiment. To start or stop an iteration, [update the experiment](https://launchdarkly.com/docs/ld-docs/api/experiments/patch-experiment) with the &#x60;startIteration&#x60; or &#x60;stopIteration&#x60; instruction.   To learn more, read [Start experiment iterations](https://launchdarkly.com/docs/home/experimentation/feature#start-experiment-iterations). 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ExperimentsApi();
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

> Experiment getExperiment(projectKey, environmentKey, experimentKey, opts)

Get experiment

Get details about an experiment.  ### Expanding the experiment response  LaunchDarkly supports four fields for expanding the \&quot;Get experiment\&quot; response. By default, these fields are **not** included in the response.  To expand the response, append the &#x60;expand&#x60; query parameter and add a comma-separated list with any of the following fields:  - &#x60;previousIterations&#x60; includes all iterations prior to the current iteration. By default only the current iteration is included in the response. - &#x60;draftIteration&#x60; includes the iteration which has not been started yet, if any. - &#x60;secondaryMetrics&#x60; includes secondary metrics. By default only the primary metric is included in the response. - &#x60;treatments&#x60; includes all treatment and parameter details. By default treatment data is not included in the response.  For example, &#x60;expand&#x3D;draftIteration,treatments&#x60; includes the &#x60;draftIteration&#x60; and &#x60;treatments&#x60; fields in the response. If fields that you request with the &#x60;expand&#x60; query parameter are empty, they are not included in the response. 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ExperimentsApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let experimentKey = "experimentKey_example"; // String | The experiment key
let opts = {
  'expand': "expand_example" // String | A comma-separated list of properties that can reveal additional information in the response. Supported fields are explained above.
};
apiInstance.getExperiment(projectKey, environmentKey, experimentKey, opts, (error, data, response) => {
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
 **expand** | **String**| A comma-separated list of properties that can reveal additional information in the response. Supported fields are explained above. | [optional] 

### Return type

[**Experiment**](Experiment.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getExperimentResults

> ExperimentBayesianResultsRep getExperimentResults(projectKey, environmentKey, experimentKey, metricKey, opts)

Get experiment results (Deprecated)

Get results from an experiment for a particular metric.  LaunchDarkly supports one field for expanding the \&quot;Get experiment results\&quot; response. By default, this field is **not** included in the response.  To expand the response, append the &#x60;expand&#x60; query parameter with the following field: * &#x60;traffic&#x60; includes the total count of units for each treatment.  For example, &#x60;expand&#x3D;traffic&#x60; includes the &#x60;traffic&#x60; field for the project in the response. 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ExperimentsApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let experimentKey = "experimentKey_example"; // String | The experiment key
let metricKey = "metricKey_example"; // String | The metric key
let opts = {
  'iterationId': "iterationId_example", // String | The iteration ID
  'expand': "expand_example" // String | A comma-separated list of fields to expand in the response. Supported fields are explained above.
};
apiInstance.getExperimentResults(projectKey, environmentKey, experimentKey, metricKey, opts, (error, data, response) => {
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
 **iterationId** | **String**| The iteration ID | [optional] 
 **expand** | **String**| A comma-separated list of fields to expand in the response. Supported fields are explained above. | [optional] 

### Return type

[**ExperimentBayesianResultsRep**](ExperimentBayesianResultsRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getExperimentResultsForMetricGroup

> MetricGroupResultsRep getExperimentResultsForMetricGroup(projectKey, environmentKey, experimentKey, metricGroupKey, opts)

Get experiment results for metric group (Deprecated)

Get results from an experiment for a particular metric group.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ExperimentsApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let experimentKey = "experimentKey_example"; // String | The experiment key
let metricGroupKey = "metricGroupKey_example"; // String | The metric group key
let opts = {
  'iterationId': "iterationId_example" // String | The iteration ID
};
apiInstance.getExperimentResultsForMetricGroup(projectKey, environmentKey, experimentKey, metricGroupKey, opts, (error, data, response) => {
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
 **metricGroupKey** | **String**| The metric group key | 
 **iterationId** | **String**| The iteration ID | [optional] 

### Return type

[**MetricGroupResultsRep**](MetricGroupResultsRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getExperimentationSettings

> RandomizationSettingsRep getExperimentationSettings(projectKey)

Get experimentation settings

Get current experimentation settings for the given project

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ExperimentsApi();
let projectKey = "projectKey_example"; // String | The project key
apiInstance.getExperimentationSettings(projectKey, (error, data, response) => {
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

### Return type

[**RandomizationSettingsRep**](RandomizationSettingsRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getExperiments

> ExperimentCollectionRep getExperiments(projectKey, environmentKey, opts)

Get experiments

Get details about all experiments in an environment.  ### Filtering experiments  LaunchDarkly supports the &#x60;filter&#x60; query param for filtering, with the following fields:  - &#x60;flagKey&#x60; filters for only experiments that use the flag with the given key. - &#x60;metricKey&#x60; filters for only experiments that use the metric with the given key. - &#x60;status&#x60; filters for only experiments with an iteration with the given status. An iteration can have the status &#x60;not_started&#x60;, &#x60;running&#x60; or &#x60;stopped&#x60;.  For example, &#x60;filter&#x3D;flagKey:my-flag,status:running,metricKey:page-load-ms&#x60; filters for experiments for the given flag key and the given metric key which have a currently running iteration.  ### Expanding the experiments response  LaunchDarkly supports four fields for expanding the \&quot;Get experiments\&quot; response. By default, these fields are **not** included in the response.  To expand the response, append the &#x60;expand&#x60; query parameter and add a comma-separated list with any of the following fields:  - &#x60;previousIterations&#x60; includes all iterations prior to the current iteration. By default only the current iteration is included in the response. - &#x60;draftIteration&#x60; includes the iteration which has not been started yet, if any. - &#x60;secondaryMetrics&#x60; includes secondary metrics. By default only the primary metric is included in the response. - &#x60;treatments&#x60; includes all treatment and parameter details. By default treatment data is not included in the response.  For example, &#x60;expand&#x3D;draftIteration,treatments&#x60; includes the &#x60;draftIteration&#x60; and &#x60;treatments&#x60; fields in the response. If fields that you request with the &#x60;expand&#x60; query parameter are empty, they are not included in the response. 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ExperimentsApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let opts = {
  'limit': 789, // Number | The maximum number of experiments to return. Defaults to 20.
  'offset': 789, // Number | Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`.
  'filter': "filter_example", // String | A comma-separated list of filters. Each filter is of the form `field:value`. Supported fields are explained above.
  'expand': "expand_example", // String | A comma-separated list of properties that can reveal additional information in the response. Supported fields are explained above.
  'lifecycleState': "lifecycleState_example" // String | A comma-separated list of experiment archived states. Supports `archived`, `active`, or both. Defaults to `active` experiments.
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
 **limit** | **Number**| The maximum number of experiments to return. Defaults to 20. | [optional] 
 **offset** | **Number**| Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query &#x60;limit&#x60;. | [optional] 
 **filter** | **String**| A comma-separated list of filters. Each filter is of the form &#x60;field:value&#x60;. Supported fields are explained above. | [optional] 
 **expand** | **String**| A comma-separated list of properties that can reveal additional information in the response. Supported fields are explained above. | [optional] 
 **lifecycleState** | **String**| A comma-separated list of experiment archived states. Supports &#x60;archived&#x60;, &#x60;active&#x60;, or both. Defaults to &#x60;active&#x60; experiments. | [optional] 

### Return type

[**ExperimentCollectionRep**](ExperimentCollectionRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## patchExperiment

> Experiment patchExperiment(projectKey, environmentKey, experimentKey, experimentPatchInput)

Patch experiment

Update an experiment. Updating an experiment uses the semantic patch format.  To make a semantic patch request, you must append &#x60;domain-model&#x3D;launchdarkly.semanticpatch&#x60; to your &#x60;Content-Type&#x60; header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).  ### Instructions  Semantic patch requests support the following &#x60;kind&#x60; instructions for updating experiments.  #### updateName  Updates the experiment name.  ##### Parameters  - &#x60;value&#x60;: The new name.  Here&#39;s an example:  &#x60;&#x60;&#x60;json {   \&quot;instructions\&quot;: [{     \&quot;kind\&quot;: \&quot;updateName\&quot;,     \&quot;value\&quot;: \&quot;Example updated experiment name\&quot;   }] } &#x60;&#x60;&#x60;  #### updateDescription  Updates the experiment description.  ##### Parameters  - &#x60;value&#x60;: The new description.  Here&#39;s an example:  &#x60;&#x60;&#x60;json {   \&quot;instructions\&quot;: [{     \&quot;kind\&quot;: \&quot;updateDescription\&quot;,     \&quot;value\&quot;: \&quot;Example updated description\&quot;   }] } &#x60;&#x60;&#x60;  #### startIteration  Starts a new iteration for this experiment. You must [create a new iteration](https://launchdarkly.com/docs/ld-docs/api/experiments/create-iteration) before calling this instruction.  An iteration may not be started until it meets the following criteria:  * Its associated flag is toggled on and is not archived * Its &#x60;randomizationUnit&#x60; is set * At least one of its &#x60;treatments&#x60; has a non-zero &#x60;allocationPercent&#x60;  ##### Parameters  - &#x60;changeJustification&#x60;: The reason for starting a new iteration. Required when you call &#x60;startIteration&#x60; on an already running experiment, otherwise optional.  Here&#39;s an example:  &#x60;&#x60;&#x60;json {   \&quot;instructions\&quot;: [{     \&quot;kind\&quot;: \&quot;startIteration\&quot;,     \&quot;changeJustification\&quot;: \&quot;It&#39;s time to start a new iteration\&quot;   }] } &#x60;&#x60;&#x60;  #### stopIteration  Stops the current iteration for this experiment.  ##### Parameters  - &#x60;winningTreatmentId&#x60;: The ID of the winning treatment. Treatment IDs are returned as part of the [Get experiment](https://launchdarkly.com/docs/ld-docs/api/experiments/get-experiment) response. They are the &#x60;_id&#x60; of each element in the &#x60;treatments&#x60; array. - &#x60;winningReason&#x60;: The reason for the winner  Here&#39;s an example:  &#x60;&#x60;&#x60;json {   \&quot;instructions\&quot;: [{     \&quot;kind\&quot;: \&quot;stopIteration\&quot;,     \&quot;winningTreatmentId\&quot;: \&quot;3a548ec2-72ac-4e59-8518-5c24f5609ccf\&quot;,     \&quot;winningReason\&quot;: \&quot;Example reason to stop the iteration\&quot;   }] } &#x60;&#x60;&#x60;  #### archiveExperiment  Archives this experiment. Archived experiments are hidden by default in the LaunchDarkly user interface. You cannot start new iterations for archived experiments.  Here&#39;s an example:  &#x60;&#x60;&#x60;json {   \&quot;instructions\&quot;: [{ \&quot;kind\&quot;: \&quot;archiveExperiment\&quot; }] } &#x60;&#x60;&#x60;  #### restoreExperiment  Restores an archived experiment. After restoring an experiment, you can start new iterations for it again.  Here&#39;s an example:  &#x60;&#x60;&#x60;json {   \&quot;instructions\&quot;: [{ \&quot;kind\&quot;: \&quot;restoreExperiment\&quot; }] } &#x60;&#x60;&#x60; 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ExperimentsApi();
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


## putExperimentationSettings

> RandomizationSettingsRep putExperimentationSettings(projectKey, randomizationSettingsPut)

Update experimentation settings

Update experimentation settings for the given project

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ExperimentsApi();
let projectKey = "projectKey_example"; // String | The project key
let randomizationSettingsPut = new LaunchDarklyApi.RandomizationSettingsPut(); // RandomizationSettingsPut | 
apiInstance.putExperimentationSettings(projectKey, randomizationSettingsPut, (error, data, response) => {
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
 **randomizationSettingsPut** | [**RandomizationSettingsPut**](RandomizationSettingsPut.md)|  | 

### Return type

[**RandomizationSettingsRep**](RandomizationSettingsRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

