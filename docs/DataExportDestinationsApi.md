# LaunchDarklyApi.DataExportDestinationsApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteDestination**](DataExportDestinationsApi.md#deleteDestination) | **DELETE** /api/v2/destinations/{projKey}/{envKey}/{id} | Delete Data Export destination
[**getDestination**](DataExportDestinationsApi.md#getDestination) | **GET** /api/v2/destinations/{projKey}/{envKey}/{id} | Get destination
[**getDestinations**](DataExportDestinationsApi.md#getDestinations) | **GET** /api/v2/destinations | List destinations
[**patchDestination**](DataExportDestinationsApi.md#patchDestination) | **PATCH** /api/v2/destinations/{projKey}/{envKey}/{id} | Update Data Export destination
[**postDestination**](DataExportDestinationsApi.md#postDestination) | **POST** /api/v2/destinations/{projKey}/{envKey} | Create data export destination



## deleteDestination

> deleteDestination(projKey, envKey, id)

Delete Data Export destination

Delete Data Export destination by ID

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.DataExportDestinationsApi();
let projKey = "projKey_example"; // String | The project key
let envKey = "envKey_example"; // String | The environment key
let id = "id_example"; // String | The Data Export destination ID
apiInstance.deleteDestination(projKey, envKey, id, (error, data, response) => {
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
 **id** | **String**| The Data Export destination ID | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDestination

> Destination getDestination(projKey, envKey, id)

Get destination

Get a single Data Export destination by ID

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.DataExportDestinationsApi();
let projKey = "projKey_example"; // String | The project key
let envKey = "envKey_example"; // String | The environment key
let id = "id_example"; // String | The Data Export destination ID
apiInstance.getDestination(projKey, envKey, id, (error, data, response) => {
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
 **id** | **String**| The Data Export destination ID | 

### Return type

[**Destination**](Destination.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDestinations

> Destinations getDestinations()

List destinations

Get a list of Data Export destinations configured across all projects and environments.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.DataExportDestinationsApi();
apiInstance.getDestinations((error, data, response) => {
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

[**Destinations**](Destinations.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## patchDestination

> Destination patchDestination(projKey, envKey, id, patchOperation)

Update Data Export destination

Update a Data Export destination. This requires a JSON Patch representation of the modified destination.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.DataExportDestinationsApi();
let projKey = "projKey_example"; // String | The project key
let envKey = "envKey_example"; // String | The environment key
let id = "id_example"; // String | The Data Export destination ID
let patchOperation = [{"op":"replace","path":"/config/topic","value":"ld-pubsub-test-192302"}]; // [PatchOperation] | 
apiInstance.patchDestination(projKey, envKey, id, patchOperation, (error, data, response) => {
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
 **id** | **String**| The Data Export destination ID | 
 **patchOperation** | [**[PatchOperation]**](PatchOperation.md)|  | 

### Return type

[**Destination**](Destination.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postDestination

> Destination postDestination(projKey, envKey, destinationPost)

Create data export destination

Create a new destination. The &#x60;config&#x60; body parameter represents the configuration parameters required for a destination type.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.DataExportDestinationsApi();
let projKey = "projKey_example"; // String | The project key
let envKey = "envKey_example"; // String | The environment key
let destinationPost = {"config":{"project":"test-prod","topic":"ld-pubsub-test-192301"},"kind":"google-pubsub"}; // DestinationPost | 
apiInstance.postDestination(projKey, envKey, destinationPost, (error, data, response) => {
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
 **destinationPost** | [**DestinationPost**](DestinationPost.md)|  | 

### Return type

[**Destination**](Destination.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

