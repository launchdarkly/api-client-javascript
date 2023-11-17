# LaunchDarklyApi.ReleasesBetaApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getReleaseByFlagKey**](ReleasesBetaApi.md#getReleaseByFlagKey) | **GET** /api/v2/flags/{projectKey}/{flagKey}/release | Get release for flag
[**patchReleaseByFlagKey**](ReleasesBetaApi.md#patchReleaseByFlagKey) | **PATCH** /api/v2/flags/{projectKey}/{flagKey}/release | Patch release for flag



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

> patchReleaseByFlagKey(projectKey, flagKey, patchOperation)

Patch release for flag

Update currently active release for a flag. Updating releases requires the [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) format. To learn more, read [Updates](/#section/Overview/Updates).  You can only use this endpoint to mark a release phase complete or incomplete. To indicate which phase to update, use the array index in the &#x60;path&#x60;. For example, to mark the first phase of a release as complete, use the following request body:  &#x60;&#x60;&#x60;   [     {       \&quot;op\&quot;: \&quot;replace\&quot;,       \&quot;path\&quot;: \&quot;/phase/0/complete\&quot;,       \&quot;value\&quot;: true     }   ] &#x60;&#x60;&#x60; 

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
    console.log('API called successfully.');
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

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

