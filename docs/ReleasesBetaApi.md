# LaunchDarklyApi.ReleasesBetaApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createReleaseForFlag**](ReleasesBetaApi.md#createReleaseForFlag) | **PUT** /api/v2/projects/{projectKey}/flags/{flagKey}/release | Create a new release for flag
[**deleteReleaseByFlagKey**](ReleasesBetaApi.md#deleteReleaseByFlagKey) | **DELETE** /api/v2/flags/{projectKey}/{flagKey}/release | Delete a release for flag
[**getReleaseByFlagKey**](ReleasesBetaApi.md#getReleaseByFlagKey) | **GET** /api/v2/flags/{projectKey}/{flagKey}/release | Get release for flag
[**patchReleaseByFlagKey**](ReleasesBetaApi.md#patchReleaseByFlagKey) | **PATCH** /api/v2/flags/{projectKey}/{flagKey}/release | Patch release for flag
[**updatePhaseStatus**](ReleasesBetaApi.md#updatePhaseStatus) | **PUT** /api/v2/projects/{projectKey}/flags/{flagKey}/release/phases/{phaseId} | Update phase status for release



## createReleaseForFlag

> Release createReleaseForFlag(projectKey, flagKey, createReleaseInput)

Create a new release for flag

Creates a release by adding a flag to a release pipeline

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ReleasesBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let flagKey = "flagKey_example"; // String | The flag key
let createReleaseInput = new LaunchDarklyApi.CreateReleaseInput(); // CreateReleaseInput | 
apiInstance.createReleaseForFlag(projectKey, flagKey, createReleaseInput, (error, data, response) => {
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
 **flagKey** | **String**| The flag key | 
 **createReleaseInput** | [**CreateReleaseInput**](CreateReleaseInput.md)|  | 

### Return type

[**Release**](Release.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteReleaseByFlagKey

> deleteReleaseByFlagKey(projectKey, flagKey)

Delete a release for flag

Deletes a release from a flag

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ReleasesBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let flagKey = "flagKey_example"; // String | The flag key
apiInstance.deleteReleaseByFlagKey(projectKey, flagKey, (error, data, response) => {
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
 **flagKey** | **String**| The flag key | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getReleaseByFlagKey

> Release getReleaseByFlagKey(projectKey, flagKey)

Get release for flag

Get currently active release for a flag

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ReleasesBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let flagKey = "flagKey_example"; // String | The flag key
apiInstance.getReleaseByFlagKey(projectKey, flagKey, (error, data, response) => {
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
 **flagKey** | **String**| The flag key | 

### Return type

[**Release**](Release.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## patchReleaseByFlagKey

> Release patchReleaseByFlagKey(projectKey, flagKey, patchOperation)

Patch release for flag

This endpoint is only available for releases that are part of a legacy release pipeline. Releases for new release pipelines should use the [Update phase status for release](https://launchdarkly.com/docs/api/releases-beta/update-phase-status) endpoint.  Update currently active release for a flag. Updating releases requires the [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) format. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).  You can only use this endpoint to mark a release phase complete or incomplete. To indicate which phase to update, use the array index in the &#x60;path&#x60;. For example, to mark the first phase of a release as complete, use the following request body:  &#x60;&#x60;&#x60;   [     {       \&quot;op\&quot;: \&quot;replace\&quot;,       \&quot;path\&quot;: \&quot;/phase/0/complete\&quot;,       \&quot;value\&quot;: true     }   ] &#x60;&#x60;&#x60; 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ReleasesBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let flagKey = "flagKey_example"; // String | The flag key
let patchOperation = [{"op":"replace","path":"/phases/0/complete","value":true}]; // [PatchOperation] | 
apiInstance.patchReleaseByFlagKey(projectKey, flagKey, patchOperation, (error, data, response) => {
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
 **flagKey** | **String**| The flag key | 
 **patchOperation** | [**[PatchOperation]**](PatchOperation.md)|  | 

### Return type

[**Release**](Release.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updatePhaseStatus

> Release updatePhaseStatus(projectKey, flagKey, phaseId, updatePhaseStatusInput)

Update phase status for release

Updates the execution status of a phase of a release

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ReleasesBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let flagKey = "flagKey_example"; // String | The flag key
let phaseId = "phaseId_example"; // String | The phase ID
let updatePhaseStatusInput = new LaunchDarklyApi.UpdatePhaseStatusInput(); // UpdatePhaseStatusInput | 
apiInstance.updatePhaseStatus(projectKey, flagKey, phaseId, updatePhaseStatusInput, (error, data, response) => {
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
 **flagKey** | **String**| The flag key | 
 **phaseId** | **String**| The phase ID | 
 **updatePhaseStatusInput** | [**UpdatePhaseStatusInput**](UpdatePhaseStatusInput.md)|  | 

### Return type

[**Release**](Release.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

