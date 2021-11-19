# LaunchDarklyApi.RelayProxyConfigurationsApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteRelayAutoConfig**](RelayProxyConfigurationsApi.md#deleteRelayAutoConfig) | **DELETE** /api/v2/account/relay-auto-configs/{id} | Delete Relay Proxy config by ID
[**getRelayProxyConfig**](RelayProxyConfigurationsApi.md#getRelayProxyConfig) | **GET** /api/v2/account/relay-auto-configs/{id} | Get Relay Proxy config
[**getRelayProxyConfigs**](RelayProxyConfigurationsApi.md#getRelayProxyConfigs) | **GET** /api/v2/account/relay-auto-configs | List Relay Proxy configs
[**patchRelayAutoConfig**](RelayProxyConfigurationsApi.md#patchRelayAutoConfig) | **PATCH** /api/v2/account/relay-auto-configs/{id} | Update a Relay Proxy config
[**postRelayAutoConfig**](RelayProxyConfigurationsApi.md#postRelayAutoConfig) | **POST** /api/v2/account/relay-auto-configs | Create a new Relay Proxy config
[**resetRelayAutoConfig**](RelayProxyConfigurationsApi.md#resetRelayAutoConfig) | **POST** /api/v2/account/relay-auto-configs/{id}/reset | Reset Relay Proxy configuration key



## deleteRelayAutoConfig

> deleteRelayAutoConfig(id)

Delete Relay Proxy config by ID

Delete a Relay Proxy config

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.RelayProxyConfigurationsApi();
let id = "id_example"; // String | The relay auto config id
apiInstance.deleteRelayAutoConfig(id, (error, data, response) => {
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
 **id** | **String**| The relay auto config id | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRelayProxyConfig

> RelayAutoConfigRep getRelayProxyConfig(id)

Get Relay Proxy config

Get a single Relay Proxy Auto Config by ID

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.RelayProxyConfigurationsApi();
let id = "id_example"; // String | The relay auto config id
apiInstance.getRelayProxyConfig(id, (error, data, response) => {
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
 **id** | **String**| The relay auto config id | 

### Return type

[**RelayAutoConfigRep**](RelayAutoConfigRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRelayProxyConfigs

> RelayAutoConfigCollectionRep getRelayProxyConfigs()

List Relay Proxy configs

Get a list of Relay Proxy configurations in the account.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.RelayProxyConfigurationsApi();
apiInstance.getRelayProxyConfigs((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**RelayAutoConfigCollectionRep**](RelayAutoConfigCollectionRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## patchRelayAutoConfig

> RelayAutoConfigRep patchRelayAutoConfig(id, patchWithComment)

Update a Relay Proxy config

Update a Relay Proxy config.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.RelayProxyConfigurationsApi();
let id = "id_example"; // String | The relay auto config id
let patchWithComment = new LaunchDarklyApi.PatchWithComment(); // PatchWithComment | 
apiInstance.patchRelayAutoConfig(id, patchWithComment, (error, data, response) => {
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
 **id** | **String**| The relay auto config id | 
 **patchWithComment** | [**PatchWithComment**](PatchWithComment.md)|  | 

### Return type

[**RelayAutoConfigRep**](RelayAutoConfigRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postRelayAutoConfig

> RelayAutoConfigRep postRelayAutoConfig(relayAutoConfigPost)

Create a new Relay Proxy config

Create a Relay Proxy config

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.RelayProxyConfigurationsApi();
let relayAutoConfigPost = new LaunchDarklyApi.RelayAutoConfigPost(); // RelayAutoConfigPost | 
apiInstance.postRelayAutoConfig(relayAutoConfigPost, (error, data, response) => {
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
 **relayAutoConfigPost** | [**RelayAutoConfigPost**](RelayAutoConfigPost.md)|  | 

### Return type

[**RelayAutoConfigRep**](RelayAutoConfigRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## resetRelayAutoConfig

> RelayAutoConfigRep resetRelayAutoConfig(id, opts)

Reset Relay Proxy configuration key

Reset a Relay Proxy configuration&#39;s secret key with an optional expiry time for the old key.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.RelayProxyConfigurationsApi();
let id = "id_example"; // String | The Relay Proxy configuration ID
let opts = {
  'expiry': 789 // Number | An expiration time for the old Relay Proxy configuration key, expressed as a Unix epoch time in milliseconds. By default, the Relay Proxy configuration will expire immediately.
};
apiInstance.resetRelayAutoConfig(id, opts, (error, data, response) => {
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
 **id** | **String**| The Relay Proxy configuration ID | 
 **expiry** | **Number**| An expiration time for the old Relay Proxy configuration key, expressed as a Unix epoch time in milliseconds. By default, the Relay Proxy configuration will expire immediately. | [optional] 

### Return type

[**RelayAutoConfigRep**](RelayAutoConfigRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

