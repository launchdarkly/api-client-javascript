# LaunchDarklyApi.CustomerMetricsApi

All URIs are relative to *https://app.launchdarkly.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getEvaluations**](CustomerMetricsApi.md#getEvaluations) | **GET** /usage/evaluations/{envId}/{flagKey} | Get events usage by event id and the feature flag key.
[**getEvent**](CustomerMetricsApi.md#getEvent) | **GET** /usage/events/{type} | Get events usage by event type.
[**getEvents**](CustomerMetricsApi.md#getEvents) | **GET** /usage/events | Get events usage endpoints.
[**getMAU**](CustomerMetricsApi.md#getMAU) | **GET** /usage/mau | Get monthly active user data.
[**getMAUByCategory**](CustomerMetricsApi.md#getMAUByCategory) | **GET** /usage/mau/bycategory | Get monthly active user data by category.
[**getStream**](CustomerMetricsApi.md#getStream) | **GET** /usage/streams/{source} | Get a stream endpoint and return timeseries data.
[**getStreamBySDK**](CustomerMetricsApi.md#getStreamBySDK) | **GET** /usage/streams/{source}/bysdkversion | Get a stream timeseries data by source show sdk version metadata.
[**getStreamSDKVersion**](CustomerMetricsApi.md#getStreamSDKVersion) | **GET** /usage/streams/{source}/sdkversions | Get a stream timeseries data by source and show all sdk version associated.
[**getStreams**](CustomerMetricsApi.md#getStreams) | **GET** /usage/streams | Returns a list of all streams.
[**getUsage**](CustomerMetricsApi.md#getUsage) | **GET** /usage | Returns of the usage endpoints available.


<a name="getEvaluations"></a>
# **getEvaluations**
> StreamSDKVersion getEvaluations(envId, flagKey)

Get events usage by event id and the feature flag key.

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.CustomerMetricsApi();

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

Get events usage by event type.

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.CustomerMetricsApi();

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

Get events usage endpoints.

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.CustomerMetricsApi();

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

Get monthly active user data.

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.CustomerMetricsApi();

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

Get monthly active user data by category.

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.CustomerMetricsApi();

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

Get a stream endpoint and return timeseries data.

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.CustomerMetricsApi();

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

Get a stream timeseries data by source show sdk version metadata.

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.CustomerMetricsApi();

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

Get a stream timeseries data by source and show all sdk version associated.

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.CustomerMetricsApi();

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

Returns a list of all streams.

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.CustomerMetricsApi();

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

Returns of the usage endpoints available.

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.CustomerMetricsApi();

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

