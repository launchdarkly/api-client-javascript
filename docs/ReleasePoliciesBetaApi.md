# LaunchDarklyApi.ReleasePoliciesBetaApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteReleasePolicy**](ReleasePoliciesBetaApi.md#deleteReleasePolicy) | **DELETE** /api/v2/projects/{projectKey}/release-policies/{policyKey} | Delete a release policy
[**getReleasePolicies**](ReleasePoliciesBetaApi.md#getReleasePolicies) | **GET** /api/v2/projects/{projectKey}/release-policies | List release policies
[**getReleasePolicy**](ReleasePoliciesBetaApi.md#getReleasePolicy) | **GET** /api/v2/projects/{projectKey}/release-policies/{policyKey} | Get a release policy by key
[**postReleasePoliciesOrder**](ReleasePoliciesBetaApi.md#postReleasePoliciesOrder) | **POST** /api/v2/projects/{projectKey}/release-policies/order | Update the order of existing release policies
[**postReleasePolicy**](ReleasePoliciesBetaApi.md#postReleasePolicy) | **POST** /api/v2/projects/{projectKey}/release-policies | Create a release policy
[**putReleasePolicy**](ReleasePoliciesBetaApi.md#putReleasePolicy) | **PUT** /api/v2/projects/{projectKey}/release-policies/{policyKey} | Update a release policy



## deleteReleasePolicy

> deleteReleasePolicy(lDAPIVersion, projectKey, policyKey)

Delete a release policy

Delete an existing release policy for the specified project.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ReleasePoliciesBetaApi();
let lDAPIVersion = "lDAPIVersion_example"; // String | Version of the endpoint.
let projectKey = "default"; // String | The project key
let policyKey = "production-release"; // String | The human-readable key of the release policy
apiInstance.deleteReleasePolicy(lDAPIVersion, projectKey, policyKey, (error, data, response) => {
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
 **lDAPIVersion** | **String**| Version of the endpoint. | 
 **projectKey** | **String**| The project key | 
 **policyKey** | **String**| The human-readable key of the release policy | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getReleasePolicies

> ReleasePoliciesResponse getReleasePolicies(lDAPIVersion, projectKey, opts)

List release policies

Get a list of release policies for the specified project with optional filtering.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ReleasePoliciesBetaApi();
let lDAPIVersion = "lDAPIVersion_example"; // String | Version of the endpoint.
let projectKey = "default"; // String | The project key
let opts = {
  'excludeDefault': false // Boolean | When true, exclude the default release policy from the response. When false or omitted, include the default policy if an environment filter is present.
};
apiInstance.getReleasePolicies(lDAPIVersion, projectKey, opts, (error, data, response) => {
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
 **lDAPIVersion** | **String**| Version of the endpoint. | 
 **projectKey** | **String**| The project key | 
 **excludeDefault** | **Boolean**| When true, exclude the default release policy from the response. When false or omitted, include the default policy if an environment filter is present. | [optional] [default to false]

### Return type

[**ReleasePoliciesResponse**](ReleasePoliciesResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getReleasePolicy

> ReleasePolicy getReleasePolicy(lDAPIVersion, projectKey, policyKey)

Get a release policy by key

Retrieve a single release policy by its key for the specified project.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ReleasePoliciesBetaApi();
let lDAPIVersion = "lDAPIVersion_example"; // String | Version of the endpoint.
let projectKey = "default"; // String | The project key
let policyKey = "production-release"; // String | The release policy key
apiInstance.getReleasePolicy(lDAPIVersion, projectKey, policyKey, (error, data, response) => {
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
 **lDAPIVersion** | **String**| Version of the endpoint. | 
 **projectKey** | **String**| The project key | 
 **policyKey** | **String**| The release policy key | 

### Return type

[**ReleasePolicy**](ReleasePolicy.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postReleasePoliciesOrder

> [ReleasePolicy] postReleasePoliciesOrder(lDAPIVersion, projectKey, requestBody)

Update the order of existing release policies

Update the order of existing release policies for the specified project.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ReleasePoliciesBetaApi();
let lDAPIVersion = "lDAPIVersion_example"; // String | Version of the endpoint.
let projectKey = "default"; // String | The project key
let requestBody = ["null"]; // [String] | Array of release policy keys in the desired rank order (scoped policies only). These keys must include _all_ of the scoped release policies for the project.
apiInstance.postReleasePoliciesOrder(lDAPIVersion, projectKey, requestBody, (error, data, response) => {
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
 **lDAPIVersion** | **String**| Version of the endpoint. | 
 **projectKey** | **String**| The project key | 
 **requestBody** | [**[String]**](String.md)| Array of release policy keys in the desired rank order (scoped policies only). These keys must include _all_ of the scoped release policies for the project. | 

### Return type

[**[ReleasePolicy]**](ReleasePolicy.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postReleasePolicy

> ReleasePolicy postReleasePolicy(lDAPIVersion, projectKey, postReleasePolicyRequest)

Create a release policy

Create a new release policy for the specified project.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ReleasePoliciesBetaApi();
let lDAPIVersion = "lDAPIVersion_example"; // String | Version of the endpoint.
let projectKey = "default"; // String | The project key
let postReleasePolicyRequest = new LaunchDarklyApi.PostReleasePolicyRequest(); // PostReleasePolicyRequest | Release policy to create
apiInstance.postReleasePolicy(lDAPIVersion, projectKey, postReleasePolicyRequest, (error, data, response) => {
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
 **lDAPIVersion** | **String**| Version of the endpoint. | 
 **projectKey** | **String**| The project key | 
 **postReleasePolicyRequest** | [**PostReleasePolicyRequest**](PostReleasePolicyRequest.md)| Release policy to create | 

### Return type

[**ReleasePolicy**](ReleasePolicy.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putReleasePolicy

> ReleasePolicy putReleasePolicy(lDAPIVersion, projectKey, policyKey, putReleasePolicyRequest)

Update a release policy

Update an existing release policy for the specified project.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ReleasePoliciesBetaApi();
let lDAPIVersion = "lDAPIVersion_example"; // String | Version of the endpoint.
let projectKey = "default"; // String | The project key
let policyKey = "production-release"; // String | The human-readable key of the release policy
let putReleasePolicyRequest = new LaunchDarklyApi.PutReleasePolicyRequest(); // PutReleasePolicyRequest | Release policy data to update
apiInstance.putReleasePolicy(lDAPIVersion, projectKey, policyKey, putReleasePolicyRequest, (error, data, response) => {
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
 **lDAPIVersion** | **String**| Version of the endpoint. | 
 **projectKey** | **String**| The project key | 
 **policyKey** | **String**| The human-readable key of the release policy | 
 **putReleasePolicyRequest** | [**PutReleasePolicyRequest**](PutReleasePolicyRequest.md)| Release policy data to update | 

### Return type

[**ReleasePolicy**](ReleasePolicy.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

