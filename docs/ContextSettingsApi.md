# LaunchDarklyApi.ContextSettingsApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**putContextFlagSetting**](ContextSettingsApi.md#putContextFlagSetting) | **PUT** /api/v2/projects/{projectKey}/environments/{environmentKey}/contexts/{contextKind}/{contextKey}/flags/{featureFlagKey} | Update flag settings for context



## putContextFlagSetting

> putContextFlagSetting(projectKey, environmentKey, contextKind, contextKey, featureFlagKey, valuePut)

Update flag settings for context

 Enable or disable a feature flag for a context based on its context kind and key.  In the request body, the &#x60;setting&#x60; should be the variation value to set for the context. It must match the flag&#39;s variation type. For example, for a boolean flag you can use &#x60;\&quot;setting\&quot;: true&#x60; or &#x60;\&quot;setting\&quot;: false&#x60; in the request body. For a string flag, you can use &#x60;\&quot;setting\&quot;: \&quot;existing_variation_value_to_use\&quot;&#x60;.  Omitting the &#x60;setting&#x60; attribute from the request body, or including a &#x60;setting&#x60; of &#x60;null&#x60;, erases the current setting for a context.  If you previously patched the flag, and the patch included the context&#39;s data, LaunchDarkly continues to use that data. If LaunchDarkly has never encountered the combination of the context&#39;s key and kind before, it calculates the flag values based on the context kind and key. 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ContextSettingsApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let contextKind = "contextKind_example"; // String | The context kind
let contextKey = "contextKey_example"; // String | The context key
let featureFlagKey = "featureFlagKey_example"; // String | The feature flag key
let valuePut = new LaunchDarklyApi.ValuePut(); // ValuePut | 
apiInstance.putContextFlagSetting(projectKey, environmentKey, contextKind, contextKey, featureFlagKey, valuePut, (error, data, response) => {
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
 **environmentKey** | **String**| The environment key | 
 **contextKind** | **String**| The context kind | 
 **contextKey** | **String**| The context key | 
 **featureFlagKey** | **String**| The feature flag key | 
 **valuePut** | [**ValuePut**](ValuePut.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

