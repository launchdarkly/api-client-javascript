# LaunchDarklyApi.RelayProxyConfigurationsApi

All URIs are relative to *https://app.launchdarkly.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteRelayProxyConfig**](RelayProxyConfigurationsApi.md#deleteRelayProxyConfig) | **DELETE** /account/relay-auto-configs/{id} | Delete a relay proxy configuration by ID.
[**getRelayProxyConfig**](RelayProxyConfigurationsApi.md#getRelayProxyConfig) | **GET** /account/relay-auto-configs/{id} | Get a single relay proxy configuration by ID.
[**getRelayProxyConfigs**](RelayProxyConfigurationsApi.md#getRelayProxyConfigs) | **GET** /account/relay-auto-configs | Returns a list of relay proxy configurations in the account.
[**patchRelayProxyConfig**](RelayProxyConfigurationsApi.md#patchRelayProxyConfig) | **PATCH** /account/relay-auto-configs/{id} | Modify a relay proxy configuration by ID.
[**postRelayAutoConfig**](RelayProxyConfigurationsApi.md#postRelayAutoConfig) | **POST** /account/relay-auto-configs | Create a new relay proxy config.
[**resetRelayProxyConfig**](RelayProxyConfigurationsApi.md#resetRelayProxyConfig) | **POST** /account/relay-auto-configs/{id}/reset | Reset a relay proxy configuration's secret key with an optional expiry time for the old key.


<a name="deleteRelayProxyConfig"></a>
# **deleteRelayProxyConfig**
> deleteRelayProxyConfig(id)

Delete a relay proxy configuration by ID.

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.RelayProxyConfigurationsApi();

var id = "id_example"; // String | The relay proxy configuration ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteRelayProxyConfig(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The relay proxy configuration ID | 

### Return type

null (empty response body)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRelayProxyConfig"></a>
# **getRelayProxyConfig**
> RelayProxyConfig getRelayProxyConfig(id)

Get a single relay proxy configuration by ID.

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.RelayProxyConfigurationsApi();

var id = "id_example"; // String | The relay proxy configuration ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRelayProxyConfig(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The relay proxy configuration ID | 

### Return type

[**RelayProxyConfig**](RelayProxyConfig.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRelayProxyConfigs"></a>
# **getRelayProxyConfigs**
> RelayProxyConfigs getRelayProxyConfigs()

Returns a list of relay proxy configurations in the account.

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.RelayProxyConfigurationsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRelayProxyConfigs(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**RelayProxyConfigs**](RelayProxyConfigs.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchRelayProxyConfig"></a>
# **patchRelayProxyConfig**
> RelayProxyConfig patchRelayProxyConfig(idpatchDelta)

Modify a relay proxy configuration by ID.

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.RelayProxyConfigurationsApi();

var id = "id_example"; // String | The relay proxy configuration ID

var patchDelta = [new LaunchDarklyApi.PatchOperation()]; // [PatchOperation] | Requires a JSON Patch representation of the desired changes to the project. 'http://jsonpatch.com/'


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patchRelayProxyConfig(idpatchDelta, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The relay proxy configuration ID | 
 **patchDelta** | [**[PatchOperation]**](PatchOperation.md)| Requires a JSON Patch representation of the desired changes to the project. 'http://jsonpatch.com/' | 

### Return type

[**RelayProxyConfig**](RelayProxyConfig.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postRelayAutoConfig"></a>
# **postRelayAutoConfig**
> RelayProxyConfig postRelayAutoConfig(relayProxyConfigBody)

Create a new relay proxy config.

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.RelayProxyConfigurationsApi();

var relayProxyConfigBody = new LaunchDarklyApi.RelayProxyConfigBody(); // RelayProxyConfigBody | Create a new relay proxy configuration


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postRelayAutoConfig(relayProxyConfigBody, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relayProxyConfigBody** | [**RelayProxyConfigBody**](RelayProxyConfigBody.md)| Create a new relay proxy configuration | 

### Return type

[**RelayProxyConfig**](RelayProxyConfig.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="resetRelayProxyConfig"></a>
# **resetRelayProxyConfig**
> RelayProxyConfig resetRelayProxyConfig(id, opts)

Reset a relay proxy configuration's secret key with an optional expiry time for the old key.

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.RelayProxyConfigurationsApi();

var id = "id_example"; // String | The relay proxy configuration ID

var opts = { 
  'expiry': 789 // Number | An expiration time for the old relay proxy configuration key, expressed as a Unix epoch time in milliseconds. By default, the relay proxy configuration will expire immediately
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.resetRelayProxyConfig(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The relay proxy configuration ID | 
 **expiry** | **Number**| An expiration time for the old relay proxy configuration key, expressed as a Unix epoch time in milliseconds. By default, the relay proxy configuration will expire immediately | [optional] 

### Return type

[**RelayProxyConfig**](RelayProxyConfig.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

