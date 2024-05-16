# LaunchDarklyApi.FeatureFlagsBetaApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDependentFlags**](FeatureFlagsBetaApi.md#getDependentFlags) | **GET** /api/v2/flags/{projectKey}/{featureFlagKey}/dependent-flags | List dependent feature flags
[**getDependentFlagsByEnv**](FeatureFlagsBetaApi.md#getDependentFlagsByEnv) | **GET** /api/v2/flags/{projectKey}/{environmentKey}/{featureFlagKey}/dependent-flags | List dependent feature flags by environment



## getDependentFlags

> MultiEnvironmentDependentFlags getDependentFlags(projectKey, featureFlagKey)

List dependent feature flags

&gt; ### Flag prerequisites is an Enterprise feature &gt; &gt; Flag prerequisites is available to customers on an Enterprise plan. To learn more, [read about our pricing](https://launchdarkly.com/pricing/). To upgrade your plan, [contact Sales](https://launchdarkly.com/contact-sales/).  List dependent flags across all environments for the flag specified in the path parameters. A dependent flag is a flag that uses another flag as a prerequisite. To learn more, read [Flag prerequisites](https://docs.launchdarkly.com/home/flags/prereqs). 

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
let projectKey = "projectKey_example"; // String | The project key
let featureFlagKey = "featureFlagKey_example"; // String | The feature flag key
apiInstance.getDependentFlags(projectKey, featureFlagKey, (error, data, response) => {
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

### Return type

[**MultiEnvironmentDependentFlags**](MultiEnvironmentDependentFlags.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDependentFlagsByEnv

> DependentFlagsByEnvironment getDependentFlagsByEnv(projectKey, environmentKey, featureFlagKey)

List dependent feature flags by environment

&gt; ### Flag prerequisites is an Enterprise feature &gt; &gt; Flag prerequisites is available to customers on an Enterprise plan. To learn more, [read about our pricing](https://launchdarkly.com/pricing/). To upgrade your plan, [contact Sales](https://launchdarkly.com/contact-sales/).  List dependent flags across all environments for the flag specified in the path parameters. A dependent flag is a flag that uses another flag as a prerequisite. To learn more, read [Flag prerequisites](https://docs.launchdarkly.com/home/flags/prereqs). 

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
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let featureFlagKey = "featureFlagKey_example"; // String | The feature flag key
apiInstance.getDependentFlagsByEnv(projectKey, environmentKey, featureFlagKey, (error, data, response) => {
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

[**DependentFlagsByEnvironment**](DependentFlagsByEnvironment.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

