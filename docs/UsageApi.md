# LaunchDarklyApi.UsageApi

All URIs are relative to *https://app.launchdarkly.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getEvaluations**](UsageApi.md#getEvaluations) | **GET** /usage/evaluations/{envId}/{flagKey} | [BETA] Get events usage by event id and the feature flag key.
[**getEvent**](UsageApi.md#getEvent) | **GET** /usage/events/{type} | [BETA] Get events usage by event type.
[**getEvents**](UsageApi.md#getEvents) | **GET** /usage/events | [BETA] Get events usage endpoints.
[**getMAU**](UsageApi.md#getMAU) | **GET** /usage/mau | [BETA] Get monthly active user data.
[**getMAUByCategory**](UsageApi.md#getMAUByCategory) | **GET** /usage/mau/bycategory | [BETA] Get monthly active user data by category.
[**getStream**](UsageApi.md#getStream) | **GET** /usage/streams/{source} | [BETA] Get a stream endpoint and return timeseries data.
[**getStreamBySDK**](UsageApi.md#getStreamBySDK) | **GET** /usage/streams/{source}/bysdkversion | [BETA] Get a stream timeseries data by source show sdk version metadata.
[**getStreamSDKVersion**](UsageApi.md#getStreamSDKVersion) | **GET** /usage/streams/{source}/sdkversions | [BETA] Get a stream timeseries data by source and show all sdk version associated.
[**getStreams**](UsageApi.md#getStreams) | **GET** /usage/streams | [BETA] Returns a list of all streams.
[**getUsage**](UsageApi.md#getUsage) | **GET** /usage | [BETA] Returns of the usage endpoints available.


<a name="getEvaluations"></a>
# **getEvaluations**
> StreamSDKVersion getEvaluations(envId, flagKey)

[BETA] Get events usage by event id and the feature flag key.

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.UsageApi();

var envId = "envId_example"; // String | The environment id for the flag evaluations in question.

var flagKey = "flagKey_example"; // String | The key of the flag we want metrics for.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEvaluations(envId, flagKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **envId** | **String**| The environment id for the flag evaluations in question. | 
 **flagKey** | **String**| The key of the flag we want metrics for. | 

### Return type

[**StreamSDKVersion**](StreamSDKVersion.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getEvent"></a>
# **getEvent**
> StreamSDKVersion getEvent(type)

[BETA] Get events usage by event type.

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.UsageApi();

var type = "type_example"; // String | The type of event we would like to track.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEvent(type, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| The type of event we would like to track. | 

### Return type

[**StreamSDKVersion**](StreamSDKVersion.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getEvents"></a>
# **getEvents**
> Events getEvents()

[BETA] Get events usage endpoints.

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.UsageApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEvents(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Events**](Events.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMAU"></a>
# **getMAU**
> MAU getMAU()

[BETA] Get monthly active user data.

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.UsageApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMAU(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**MAU**](MAU.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMAUByCategory"></a>
# **getMAUByCategory**
> MAUbyCategory getMAUByCategory()

[BETA] Get monthly active user data by category.

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.UsageApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMAUByCategory(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**MAUbyCategory**](MAUbyCategory.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getStream"></a>
# **getStream**
> Stream getStream(source)

[BETA] Get a stream endpoint and return timeseries data.

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.UsageApi();

var source = "source_example"; // String | The source of where the stream comes from.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getStream(source, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source** | **String**| The source of where the stream comes from. | 

### Return type

[**Stream**](Stream.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getStreamBySDK"></a>
# **getStreamBySDK**
> StreamBySDK getStreamBySDK(source)

[BETA] Get a stream timeseries data by source show sdk version metadata.

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.UsageApi();

var source = "source_example"; // String | The source of where the stream comes from.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getStreamBySDK(source, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source** | **String**| The source of where the stream comes from. | 

### Return type

[**StreamBySDK**](StreamBySDK.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getStreamSDKVersion"></a>
# **getStreamSDKVersion**
> StreamSDKVersion getStreamSDKVersion(source)

[BETA] Get a stream timeseries data by source and show all sdk version associated.

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.UsageApi();

var source = "source_example"; // String | The source of where the stream comes from.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getStreamSDKVersion(source, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source** | **String**| The source of where the stream comes from. | 

### Return type

[**StreamSDKVersion**](StreamSDKVersion.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getStreams"></a>
# **getStreams**
> Streams getStreams()

[BETA] Returns a list of all streams.

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.UsageApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getStreams(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Streams**](Streams.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUsage"></a>
# **getUsage**
> Usage getUsage()

[BETA] Returns of the usage endpoints available.

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.UsageApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUsage(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Usage**](Usage.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

