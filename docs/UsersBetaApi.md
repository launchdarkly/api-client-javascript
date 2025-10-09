# LaunchDarklyApi.UsersBetaApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUserAttributeNames**](UsersBetaApi.md#getUserAttributeNames) | **GET** /api/v2/user-attributes/{projectKey}/{environmentKey} | Get user attribute names



## getUserAttributeNames

> UserAttributeNamesRep getUserAttributeNames(projectKey, environmentKey)

Get user attribute names

&gt; ### Use contexts instead &gt; &gt; After you have upgraded your LaunchDarkly SDK to use contexts instead of users, you should use [Get context attribute names ](https://launchdarkly.com/docs/api/contexts/get-context-attribute-names) instead of this endpoint.  Get all in-use user attributes in the specified environment. The set of in-use attributes typically consists of all attributes seen within the past 30 days. 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.UsersBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
apiInstance.getUserAttributeNames(projectKey, environmentKey, (error, data, response) => {
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

### Return type

[**UserAttributeNamesRep**](UserAttributeNamesRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

