# LaunchDarklyApi.InsightsDeploymentsBetaApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDeploymentEvent**](InsightsDeploymentsBetaApi.md#createDeploymentEvent) | **POST** /api/v2/engineering-insights/deployment-events | Create deployment event
[**getDeployment**](InsightsDeploymentsBetaApi.md#getDeployment) | **GET** /api/v2/engineering-insights/deployments/{deploymentID} | Get deployment
[**getDeployments**](InsightsDeploymentsBetaApi.md#getDeployments) | **GET** /api/v2/engineering-insights/deployments | List deployments
[**updateDeployment**](InsightsDeploymentsBetaApi.md#updateDeployment) | **PATCH** /api/v2/engineering-insights/deployments/{deploymentID} | Update deployment



## createDeploymentEvent

> createDeploymentEvent(postDeploymentEventInput)

Create deployment event

Create deployment event

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.InsightsDeploymentsBetaApi();
let postDeploymentEventInput = new LaunchDarklyApi.PostDeploymentEventInput(); // PostDeploymentEventInput | 
apiInstance.createDeploymentEvent(postDeploymentEventInput, (error, data, response) => {
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
 **postDeploymentEventInput** | [**PostDeploymentEventInput**](PostDeploymentEventInput.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getDeployment

> DeploymentRep getDeployment(deploymentID, opts)

Get deployment

Get a deployment by ID.  The deployment ID is returned as part of the [List deployments](#operation/getDeployments) response. It is the &#x60;id&#x60; field of each element in the &#x60;items&#x60; array.  ### Expanding the deployment response  LaunchDarkly supports expanding the deployment response to include additional fields.  To expand the response, append the &#x60;expand&#x60; query parameter and include the following:  * &#x60;pullRequests&#x60; includes details on all of the pull requests associated with each deployment * &#x60;flagReferences&#x60; includes details on all of the references to flags in each deployment  For example, use &#x60;?expand&#x3D;pullRequests&#x60; to include the &#x60;pullRequests&#x60; field in the response. By default, this field is **not** included in the response. 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.InsightsDeploymentsBetaApi();
let deploymentID = "deploymentID_example"; // String | The deployment ID
let opts = {
  'expand': "expand_example" // String | Expand properties in response. Options: `pullRequests`, `flagReferences`
};
apiInstance.getDeployment(deploymentID, opts, (error, data, response) => {
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
 **deploymentID** | **String**| The deployment ID | 
 **expand** | **String**| Expand properties in response. Options: &#x60;pullRequests&#x60;, &#x60;flagReferences&#x60; | [optional] 

### Return type

[**DeploymentRep**](DeploymentRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDeployments

> DeploymentCollectionRep getDeployments(projectKey, environmentKey, opts)

List deployments

Get a list of deployments  ### Expanding the deployment collection response  LaunchDarkly supports expanding the deployment collection response to include additional fields.  To expand the response, append the &#x60;expand&#x60; query parameter and include the following:  * &#x60;pullRequests&#x60; includes details on all of the pull requests associated with each deployment * &#x60;flagReferences&#x60; includes details on all of the references to flags in each deployment  For example, use &#x60;?expand&#x3D;pullRequests&#x60; to include the &#x60;pullRequests&#x60; field in the response. By default, this field is **not** included in the response. 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.InsightsDeploymentsBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let opts = {
  'applicationKey': "applicationKey_example", // String | Comma separated list of application keys
  'limit': 789, // Number | The number of deployments to return. Default is 20. Maximum allowed is 100.
  'expand': "expand_example", // String | Expand properties in response. Options: `pullRequests`, `flagReferences`
  'from': 789, // Number | Unix timestamp in milliseconds. Default value is 7 days ago.
  'to': 789, // Number | Unix timestamp in milliseconds. Default value is now.
  'after': "after_example", // String | Identifier used for pagination
  'before': "before_example", // String | Identifier used for pagination
  'kind': "kind_example", // String | The deployment kind
  'status': "status_example" // String | The deployment status
};
apiInstance.getDeployments(projectKey, environmentKey, opts, (error, data, response) => {
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
 **applicationKey** | **String**| Comma separated list of application keys | [optional] 
 **limit** | **Number**| The number of deployments to return. Default is 20. Maximum allowed is 100. | [optional] 
 **expand** | **String**| Expand properties in response. Options: &#x60;pullRequests&#x60;, &#x60;flagReferences&#x60; | [optional] 
 **from** | **Number**| Unix timestamp in milliseconds. Default value is 7 days ago. | [optional] 
 **to** | **Number**| Unix timestamp in milliseconds. Default value is now. | [optional] 
 **after** | **String**| Identifier used for pagination | [optional] 
 **before** | **String**| Identifier used for pagination | [optional] 
 **kind** | **String**| The deployment kind | [optional] 
 **status** | **String**| The deployment status | [optional] 

### Return type

[**DeploymentCollectionRep**](DeploymentCollectionRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateDeployment

> DeploymentRep updateDeployment(deploymentID, patchOperation)

Update deployment

Update a deployment by ID. Updating a deployment uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](/#section/Overview/Updates).&lt;br/&gt;&lt;br/&gt;The deployment ID is returned as part of the [List deployments](#operation/getDeployments) response. It is the &#x60;id&#x60; field of each element in the &#x60;items&#x60; array.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.InsightsDeploymentsBetaApi();
let deploymentID = "deploymentID_example"; // String | The deployment ID
let patchOperation = [{"op":"replace","path":"/status","value":"finished"}]; // [PatchOperation] | 
apiInstance.updateDeployment(deploymentID, patchOperation, (error, data, response) => {
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
 **deploymentID** | **String**| The deployment ID | 
 **patchOperation** | [**[PatchOperation]**](PatchOperation.md)|  | 

### Return type

[**DeploymentRep**](DeploymentRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

