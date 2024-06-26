# LaunchDarklyApi.WorkflowsApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteWorkflow**](WorkflowsApi.md#deleteWorkflow) | **DELETE** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/workflows/{workflowId} | Delete workflow
[**getCustomWorkflow**](WorkflowsApi.md#getCustomWorkflow) | **GET** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/workflows/{workflowId} | Get custom workflow
[**getWorkflows**](WorkflowsApi.md#getWorkflows) | **GET** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/workflows | Get workflows
[**postWorkflow**](WorkflowsApi.md#postWorkflow) | **POST** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/workflows | Create workflow



## deleteWorkflow

> deleteWorkflow(projectKey, featureFlagKey, environmentKey, workflowId)

Delete workflow

Delete a workflow from a feature flag.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.WorkflowsApi();
let projectKey = "projectKey_example"; // String | The project key
let featureFlagKey = "featureFlagKey_example"; // String | The feature flag key
let environmentKey = "environmentKey_example"; // String | The environment key
let workflowId = "workflowId_example"; // String | The workflow id
apiInstance.deleteWorkflow(projectKey, featureFlagKey, environmentKey, workflowId, (error, data, response) => {
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
 **workflowId** | **String**| The workflow id | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomWorkflow

> CustomWorkflowOutput getCustomWorkflow(projectKey, featureFlagKey, environmentKey, workflowId)

Get custom workflow

Get a specific workflow by ID.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.WorkflowsApi();
let projectKey = "projectKey_example"; // String | The project key
let featureFlagKey = "featureFlagKey_example"; // String | The feature flag key
let environmentKey = "environmentKey_example"; // String | The environment key
let workflowId = "workflowId_example"; // String | The workflow ID
apiInstance.getCustomWorkflow(projectKey, featureFlagKey, environmentKey, workflowId, (error, data, response) => {
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
 **workflowId** | **String**| The workflow ID | 

### Return type

[**CustomWorkflowOutput**](CustomWorkflowOutput.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWorkflows

> CustomWorkflowsListingOutput getWorkflows(projectKey, featureFlagKey, environmentKey, opts)

Get workflows

Display workflows associated with a feature flag.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.WorkflowsApi();
let projectKey = "projectKey_example"; // String | The project key
let featureFlagKey = "featureFlagKey_example"; // String | The feature flag key
let environmentKey = "environmentKey_example"; // String | The environment key
let opts = {
  'status': "status_example", // String | Filter results by workflow status. Valid status filters are `active`, `completed`, and `failed`.
  'sort': "sort_example", // String | A field to sort the items by. Prefix field by a dash ( - ) to sort in descending order. This endpoint supports sorting by `creationDate` or `stopDate`.
  'limit': 789, // Number | The maximum number of workflows to return. Defaults to 20.
  'offset': 789 // Number | Where to start in the list. Defaults to 0. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`.
};
apiInstance.getWorkflows(projectKey, featureFlagKey, environmentKey, opts, (error, data, response) => {
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
 **status** | **String**| Filter results by workflow status. Valid status filters are &#x60;active&#x60;, &#x60;completed&#x60;, and &#x60;failed&#x60;. | [optional] 
 **sort** | **String**| A field to sort the items by. Prefix field by a dash ( - ) to sort in descending order. This endpoint supports sorting by &#x60;creationDate&#x60; or &#x60;stopDate&#x60;. | [optional] 
 **limit** | **Number**| The maximum number of workflows to return. Defaults to 20. | [optional] 
 **offset** | **Number**| Where to start in the list. Defaults to 0. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query &#x60;limit&#x60;. | [optional] 

### Return type

[**CustomWorkflowsListingOutput**](CustomWorkflowsListingOutput.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postWorkflow

> CustomWorkflowOutput postWorkflow(projectKey, featureFlagKey, environmentKey, customWorkflowInput, opts)

Create workflow

Create a workflow for a feature flag. You can create a workflow directly, or you can apply a template to create a new workflow.  ### Creating a workflow  You can use the create workflow endpoint to create a workflow directly by adding a &#x60;stages&#x60; array to the request body.  For each stage, define the &#x60;name&#x60;, &#x60;conditions&#x60; when the stage should be executed, and &#x60;action&#x60; that describes the stage.  &lt;details&gt; &lt;summary&gt;Click to expand example&lt;/summary&gt;  _Example request body_ &#x60;&#x60;&#x60;json {   \&quot;name\&quot;: \&quot;Progressive rollout starting in two days\&quot;,   \&quot;description\&quot;: \&quot;Turn flag targeting on and increase feature rollout in 10% increments each day\&quot;,   \&quot;stages\&quot;: [     {       \&quot;name\&quot;: \&quot;10% rollout on day 1\&quot;,       \&quot;conditions\&quot;: [         {           \&quot;kind\&quot;: \&quot;schedule\&quot;,           \&quot;scheduleKind\&quot;: \&quot;relative\&quot;, // or \&quot;absolute\&quot;               //  If \&quot;scheduleKind\&quot; is \&quot;absolute\&quot;, set \&quot;executionDate\&quot;;               // \&quot;waitDuration\&quot; and \&quot;waitDurationUnit\&quot; will be ignored           \&quot;waitDuration\&quot;: 2,           \&quot;waitDurationUnit\&quot;: \&quot;calendarDay\&quot;         },         {           \&quot;kind\&quot;: \&quot;ld-approval\&quot;,           \&quot;notifyMemberIds\&quot;: [ \&quot;507f1f77bcf86cd799439011\&quot; ],           \&quot;notifyTeamKeys\&quot;: [ \&quot;team-key-123abc\&quot; ]         }       ],       \&quot;action\&quot;: {         \&quot;instructions\&quot;: [           {             \&quot;kind\&quot;: \&quot;turnFlagOn\&quot;           },           {             \&quot;kind\&quot;: \&quot;updateFallthroughVariationOrRollout\&quot;,             \&quot;rolloutWeights\&quot;: {               \&quot;452f5fb5-7320-4ba3-81a1-8f4324f79d49\&quot;: 90000,               \&quot;fc15f6a4-05d3-4aa4-a997-446be461345d\&quot;: 10000             }           }         ]       }     }   ] } &#x60;&#x60;&#x60; &lt;/details&gt;  ### Creating a workflow by applying a workflow template  You can also create a workflow by applying a workflow template. If you pass a valid workflow template key as the &#x60;templateKey&#x60; query parameter with the request, the API will attempt to create a new workflow with the stages defined in the workflow template with the corresponding key.  #### Applicability of stages Templates are created in the context of a particular flag in a particular environment in a particular project. However, because workflows created from a template can be applied to any project, environment, and flag, some steps of the workflow may need to be updated in order to be applicable for the target resource.  You can pass a &#x60;dryRun&#x60; query parameter to tell the API to return a report of which steps of the workflow template are applicable in the target project/environment/flag, and which will need to be updated. When the &#x60;dryRun&#x60; query parameter is present the response body includes a &#x60;meta&#x60; property that holds a list of parameters that could potentially be inapplicable for the target resource. Each of these parameters will include a &#x60;valid&#x60; field. You will need to update any invalid parameters in order to create the new workflow. You can do this using the &#x60;parameters&#x60; property, which overrides the workflow template parameters.  #### Overriding template parameters You can use the &#x60;parameters&#x60; property in the request body to tell the API to override the specified workflow template parameters with new values that are specific to your target project/environment/flag.  &lt;details&gt; &lt;summary&gt;Click to expand example&lt;/summary&gt;  _Example request body_ &#x60;&#x60;&#x60;json {  \&quot;name\&quot;: \&quot;workflow created from my-template\&quot;,  \&quot;description\&quot;: \&quot;description of my workflow\&quot;,  \&quot;parameters\&quot;: [   {    \&quot;_id\&quot;: \&quot;62cf2bc4cadbeb7697943f3b\&quot;,    \&quot;path\&quot;: \&quot;/clauses/0/values\&quot;,    \&quot;default\&quot;: {     \&quot;value\&quot;: [\&quot;updated-segment\&quot;]    }   },   {    \&quot;_id\&quot;: \&quot;62cf2bc4cadbeb7697943f3d\&quot;,    \&quot;path\&quot;: \&quot;/variationId\&quot;,    \&quot;default\&quot;: {     \&quot;value\&quot;: \&quot;abcd1234-abcd-1234-abcd-1234abcd12\&quot;    }   }  ] } &#x60;&#x60;&#x60; &lt;/details&gt;  If there are any steps in the template that are not applicable to the target resource, the workflow will not be created, and the &#x60;meta&#x60; property will be included in the response body detailing which parameters need to be updated. 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.WorkflowsApi();
let projectKey = "projectKey_example"; // String | The project key
let featureFlagKey = "featureFlagKey_example"; // String | The feature flag key
let environmentKey = "environmentKey_example"; // String | The environment key
let customWorkflowInput = {"description":"Turn flag on for 10% of customers each day","name":"Progressive rollout starting in two days","stages":[{"action":{"instructions":[{"kind":"turnFlagOn"},{"kind":"updateFallthroughVariationOrRollout","rolloutWeights":{"452f5fb5-7320-4ba3-81a1-8f4324f79d49":90000,"fc15f6a4-05d3-4aa4-a997-446be461345d":10000}}]},"conditions":[{"kind":"schedule","scheduleKind":"relative","waitDuration":2,"waitDurationUnit":"calendarDay"}],"name":"10% rollout on day 1"}]}; // CustomWorkflowInput | 
let opts = {
  'templateKey': "templateKey_example", // String | The template key to apply as a starting point for the new workflow
  'dryRun': true // Boolean | Whether to call the endpoint in dry-run mode
};
apiInstance.postWorkflow(projectKey, featureFlagKey, environmentKey, customWorkflowInput, opts, (error, data, response) => {
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
 **customWorkflowInput** | [**CustomWorkflowInput**](CustomWorkflowInput.md)|  | 
 **templateKey** | **String**| The template key to apply as a starting point for the new workflow | [optional] 
 **dryRun** | **Boolean**| Whether to call the endpoint in dry-run mode | [optional] 

### Return type

[**CustomWorkflowOutput**](CustomWorkflowOutput.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

