# LaunchDarklyApi.FeatureFlagsBetaApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDependentFlags**](FeatureFlagsBetaApi.md#getDependentFlags) | **GET** /api/v2/flags/{projKey}/{flagKey}/dependent-flags | List dependent feature flags
[**getDependentFlagsByEnv**](FeatureFlagsBetaApi.md#getDependentFlagsByEnv) | **GET** /api/v2/flags/{projKey}/{envKey}/{flagKey}/dependent-flags | List dependent feature flags by environment



## getDependentFlags

> MultiEnvironmentDependentFlags getDependentFlags(projKey, flagKey)

List dependent feature flags

List dependent flags across all environments for the flag specified in the path parameters. A dependent flag is a flag that uses another flag as a prerequisite.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.FeatureFlagsBetaApi();
let projKey = "projKey_example"; // String | The project key
let flagKey = "flagKey_example"; // String | The flag key
apiInstance.getDependentFlags(projKey, flagKey, (error, data, response) => {
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
 **projKey** | **String**| The project key | 
 **flagKey** | **String**| The flag key | 

### Return type

[**MultiEnvironmentDependentFlags**](MultiEnvironmentDependentFlags.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDependentFlagsByEnv

> DependentFlagsByEnvironment getDependentFlagsByEnv(projKey, envKey, flagKey)

List dependent feature flags by environment

List dependent flags across all environments for the flag specified in the path parameters. A dependent flag is a flag that uses another flag as a prerequisite.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.FeatureFlagsBetaApi();
let projKey = "projKey_example"; // String | The project key
let envKey = "envKey_example"; // String | The environment key
let flagKey = "flagKey_example"; // String | The flag key
apiInstance.getDependentFlagsByEnv(projKey, envKey, flagKey, (error, data, response) => {
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
 **projKey** | **String**| The project key | 
 **envKey** | **String**| The environment key | 
 **flagKey** | **String**| The flag key | 

### Return type

[**DependentFlagsByEnvironment**](DependentFlagsByEnvironment.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

