# LaunchDarklyApi.FlagLinksBetaApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFlagLink**](FlagLinksBetaApi.md#createFlagLink) | **POST** /api/v2/flag-links/projects/{projectKey}/flags/{featureFlagKey} | Create flag link
[**deleteFlagLink**](FlagLinksBetaApi.md#deleteFlagLink) | **DELETE** /api/v2/flag-links/projects/{projectKey}/flags/{featureFlagKey}/{id} | Delete flag link
[**getFlagLinks**](FlagLinksBetaApi.md#getFlagLinks) | **GET** /api/v2/flag-links/projects/{projectKey}/flags/{featureFlagKey} | List flag links
[**updateFlagLink**](FlagLinksBetaApi.md#updateFlagLink) | **PATCH** /api/v2/flag-links/projects/{projectKey}/flags/{featureFlagKey}/{id} | Update flag link



## createFlagLink

> FlagLinkRep createFlagLink(projectKey, featureFlagKey, flagLinkPost)

Create flag link

Create a new flag link. Flag links let you reference external resources and associate them with your flags.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.FlagLinksBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let featureFlagKey = "featureFlagKey_example"; // String | The feature flag key
let flagLinkPost = {"deepLink":"https://example.com/archives/123123123","description":"Example link description","key":"flag-link-key-123abc","title":"Example link title"}; // FlagLinkPost | 
apiInstance.createFlagLink(projectKey, featureFlagKey, flagLinkPost, (error, data, response) => {
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
 **flagLinkPost** | [**FlagLinkPost**](FlagLinkPost.md)|  | 

### Return type

[**FlagLinkRep**](FlagLinkRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteFlagLink

> deleteFlagLink(projectKey, featureFlagKey, id)

Delete flag link

Delete a flag link by ID or key.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.FlagLinksBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let featureFlagKey = "featureFlagKey_example"; // String | The feature flag key
let id = "id_example"; // String | The flag link ID or Key
apiInstance.deleteFlagLink(projectKey, featureFlagKey, id, (error, data, response) => {
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
 **id** | **String**| The flag link ID or Key | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFlagLinks

> FlagLinkCollectionRep getFlagLinks(projectKey, featureFlagKey)

List flag links

Get a list of all flag links.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.FlagLinksBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let featureFlagKey = "featureFlagKey_example"; // String | The feature flag key
apiInstance.getFlagLinks(projectKey, featureFlagKey, (error, data, response) => {
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

[**FlagLinkCollectionRep**](FlagLinkCollectionRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateFlagLink

> FlagLinkRep updateFlagLink(projectKey, featureFlagKey, id, patchOperation)

Update flag link

Update a flag link. The request body must be a valid JSON patch document. To learn more, read [Updates](/#section/Overview/Updates).

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.FlagLinksBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let featureFlagKey = "featureFlagKey_example"; // String | The feature flag key
let id = "id_example"; // String | The flag link ID
let patchOperation = [{"op":"replace","path":"/title","value":"Updated flag link title"}]; // [PatchOperation] | 
apiInstance.updateFlagLink(projectKey, featureFlagKey, id, patchOperation, (error, data, response) => {
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
 **id** | **String**| The flag link ID | 
 **patchOperation** | [**[PatchOperation]**](PatchOperation.md)|  | 

### Return type

[**FlagLinkRep**](FlagLinkRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

