# LaunchDarklyApi.UserSettingsApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getExpiringFlagsForUser**](UserSettingsApi.md#getExpiringFlagsForUser) | **GET** /api/v2/users/{projKey}/{userKey}/expiring-user-targets/{envKey} | Get expiring dates on flags for user
[**getUserFlagSetting**](UserSettingsApi.md#getUserFlagSetting) | **GET** /api/v2/users/{projKey}/{envKey}/{key}/flags/{featureKey} | Get flag setting for user
[**getUserFlagSettings**](UserSettingsApi.md#getUserFlagSettings) | **GET** /api/v2/users/{projKey}/{envKey}/{key}/flags | List flag settings for user
[**patchExpiringFlagsForUser**](UserSettingsApi.md#patchExpiringFlagsForUser) | **PATCH** /api/v2/users/{projKey}/{userKey}/expiring-user-targets/{envKey} | Update expiring user target for flags
[**putFlagSetting**](UserSettingsApi.md#putFlagSetting) | **PUT** /api/v2/users/{projKey}/{envKey}/{key}/flags/{featureKey} | Update flag settings for user



## getExpiringFlagsForUser

> ExpiringUserTargetGetResponse getExpiringFlagsForUser(projKey, userKey, envKey)

Get expiring dates on flags for user

Get a list of flags for which the given user is scheduled for removal.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.UserSettingsApi();
let projKey = "projKey_example"; // String | The project key.
let userKey = "userKey_example"; // String | The user key.
let envKey = "envKey_example"; // String | The environment key.
apiInstance.getExpiringFlagsForUser(projKey, userKey, envKey, (error, data, response) => {
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
 **projKey** | **String**| The project key. | 
 **userKey** | **String**| The user key. | 
 **envKey** | **String**| The environment key. | 

### Return type

[**ExpiringUserTargetGetResponse**](ExpiringUserTargetGetResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserFlagSetting

> UserFlagSetting getUserFlagSetting(projKey, envKey, key, featureKey)

Get flag setting for user

Get a single flag setting for a user by key. The most important attribute in the response is the &#x60;_value&#x60;. The &#x60;_value&#x60; is the current setting that the user sees. For a boolean feature toggle, this is &#x60;true&#x60;, &#x60;false&#x60;, or &#x60;null&#x60;. &#x60;null&#x60; returns if there is no defined fallback value. The example response indicates that the user &#x60;Abbie_Braun&#x60; has the &#x60;sort.order&#x60; flag enabled.&lt;br /&gt;&lt;br /&gt;The setting attribute indicates whether you&#39;ve explicitly targeted a user to receive a particular variation. For example, if you have turned off a feature flag for a user, this setting will be &#x60;false&#x60;. A setting of &#x60;null&#x60; means that you haven&#39;t assigned that user to a specific variation.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.UserSettingsApi();
let projKey = "projKey_example"; // String | The project key
let envKey = "envKey_example"; // String | The environment key
let key = "key_example"; // String | The user key
let featureKey = "featureKey_example"; // String | The feature flag key
apiInstance.getUserFlagSetting(projKey, envKey, key, featureKey, (error, data, response) => {
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
 **key** | **String**| The user key | 
 **featureKey** | **String**| The feature flag key | 

### Return type

[**UserFlagSetting**](UserFlagSetting.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserFlagSettings

> UserFlagSettings getUserFlagSettings(projKey, envKey, key)

List flag settings for user

Get the current flag settings for a given user. The most important attribute in the response is the &#x60;_value&#x60;. The &#x60;_value&#x60; is the setting that the user sees. For a boolean feature toggle, this is &#x60;true&#x60;, &#x60;false&#x60;, or &#x60;null&#x60;. &#x60;null&#x60; returns if there is no defined fallthrough value. The example response indicates that the user &#x60;Abbie_Braun&#x60; has the &#x60;sort.order&#x60; flag enabled and the &#x60;alternate.page&#x60; flag disabled.&lt;br /&gt;&lt;br /&gt;The setting attribute indicates whether you&#39;ve explicitly targeted a user to receive a particular variation. For example, if you have turned off a feature flag for a user, this setting will be &#x60;false&#x60;. A setting of &#x60;null&#x60; means that you haven&#39;t assigned that user to a specific variation.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.UserSettingsApi();
let projKey = "projKey_example"; // String | The project key
let envKey = "envKey_example"; // String | The environment key
let key = "key_example"; // String | The user key
apiInstance.getUserFlagSettings(projKey, envKey, key, (error, data, response) => {
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
 **key** | **String**| The user key | 

### Return type

[**UserFlagSettings**](UserFlagSettings.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## patchExpiringFlagsForUser

> ExpiringUserTargetPatchResponse patchExpiringFlagsForUser(projKey, userKey, envKey, patchWithComment)

Update expiring user target for flags

Schedule the specified user for removal from individual user targeting on one or more flags. You can only schedule a user for removal on a single variation per flag.  To learn more about semantic patches, read [Updates](/#section/Updates).  If you previously patched the flag, and the patch included the user&#39;s data, LaunchDarkly continues to use that data. If LaunchDarkly has never encountered the user&#39;s key before, it calculates the flag values based on the user key alone. 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.UserSettingsApi();
let projKey = "projKey_example"; // String | The project key.
let userKey = "userKey_example"; // String | The user key.
let envKey = "envKey_example"; // String | The environment key.
let patchWithComment = new LaunchDarklyApi.PatchWithComment(); // PatchWithComment | 
apiInstance.patchExpiringFlagsForUser(projKey, userKey, envKey, patchWithComment, (error, data, response) => {
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
 **projKey** | **String**| The project key. | 
 **userKey** | **String**| The user key. | 
 **envKey** | **String**| The environment key. | 
 **patchWithComment** | [**PatchWithComment**](PatchWithComment.md)|  | 

### Return type

[**ExpiringUserTargetPatchResponse**](ExpiringUserTargetPatchResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putFlagSetting

> putFlagSetting(projKey, envKey, key, featureKey, valuePut)

Update flag settings for user

Enable or disable a feature flag for a user based on their key.  To change the setting, send a &#x60;PUT&#x60; request to this URL with a request body containing the flag value. For example, to disable the sort.order flag for the user &#x60;test@test.com&#x60;, send a &#x60;PUT&#x60; to &#x60;https://app.launchdarkly.com/api/v2/users/default/production/test@test.com/flags/sort.order&#x60; with the following body:  &#x60;&#x60;&#x60;json {   \&quot;setting\&quot;: false } &#x60;&#x60;&#x60;  Omitting the setting attribute, or a setting of null, in your &#x60;PUT&#x60; \&quot;clears\&quot; the current setting for a user.  If you previously patched the flag, and the patch included the user&#39;s data, LaunchDarkly continues to use that data. If LaunchDarkly has never encountered the user&#39;s key before, it calculates the flag values based on the user key alone. 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.UserSettingsApi();
let projKey = "projKey_example"; // String | The project key
let envKey = "envKey_example"; // String | The environment key
let key = "key_example"; // String | The user key
let featureKey = "featureKey_example"; // String | The feature flag key
let valuePut = new LaunchDarklyApi.ValuePut(); // ValuePut | 
apiInstance.putFlagSetting(projKey, envKey, key, featureKey, valuePut, (error, data, response) => {
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
 **projKey** | **String**| The project key | 
 **envKey** | **String**| The environment key | 
 **key** | **String**| The user key | 
 **featureKey** | **String**| The feature flag key | 
 **valuePut** | [**ValuePut**](ValuePut.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

