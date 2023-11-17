# LaunchDarklyApi.SegmentsBetaApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBigSegmentExport**](SegmentsBetaApi.md#createBigSegmentExport) | **POST** /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/exports | Create Big Segment export
[**createBigSegmentImport**](SegmentsBetaApi.md#createBigSegmentImport) | **POST** /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/imports | Create Big Segment import
[**getBigSegmentExport**](SegmentsBetaApi.md#getBigSegmentExport) | **GET** /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/exports/{exportID} | Get Big Segment export
[**getBigSegmentImport**](SegmentsBetaApi.md#getBigSegmentImport) | **GET** /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/imports/{importID} | Get Big Segment import



## createBigSegmentExport

> createBigSegmentExport(projectKey, environmentKey, segmentKey)

Create Big Segment export

Starts a new export process for a Big Segment. This is an export for a list-based segment that can include more than 15,000 entries.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.SegmentsBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let segmentKey = "segmentKey_example"; // String | The segment key
apiInstance.createBigSegmentExport(projectKey, environmentKey, segmentKey, (error, data, response) => {
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
 **segmentKey** | **String**| The segment key | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## createBigSegmentImport

> createBigSegmentImport(projectKey, environmentKey, segmentKey, opts)

Create Big Segment import

Start a new import process for a Big Segment. This is an import for a list-based segment that can include more than 15,000 entries.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.SegmentsBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let segmentKey = "segmentKey_example"; // String | The segment key
let opts = {
  'file': "/path/to/file", // File | CSV file containing keys
  'mode': "mode_example" // String | Import mode. Use either `merge` or `replace`
};
apiInstance.createBigSegmentImport(projectKey, environmentKey, segmentKey, opts, (error, data, response) => {
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
 **segmentKey** | **String**| The segment key | 
 **file** | **File**| CSV file containing keys | [optional] 
 **mode** | **String**| Import mode. Use either &#x60;merge&#x60; or &#x60;replace&#x60; | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## getBigSegmentExport

> Export getBigSegmentExport(projectKey, environmentKey, segmentKey, exportID)

Get Big Segment export

Returns information about a Big Segment export process. This is the export of a list-based segment that can include more than 15,000 entries.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.SegmentsBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let segmentKey = "segmentKey_example"; // String | The segment key
let exportID = "exportID_example"; // String | The export ID
apiInstance.getBigSegmentExport(projectKey, environmentKey, segmentKey, exportID, (error, data, response) => {
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
 **segmentKey** | **String**| The segment key | 
 **exportID** | **String**| The export ID | 

### Return type

[**Export**](Export.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBigSegmentImport

> Import getBigSegmentImport(projectKey, environmentKey, segmentKey, importID)

Get Big Segment import

Returns information about a Big Segment import process. This is the import of a list-based segment that can include more than 15,000 entries.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.SegmentsBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let segmentKey = "segmentKey_example"; // String | The segment key
let importID = "importID_example"; // String | The import ID
apiInstance.getBigSegmentImport(projectKey, environmentKey, segmentKey, importID, (error, data, response) => {
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
 **segmentKey** | **String**| The segment key | 
 **importID** | **String**| The import ID | 

### Return type

[**Import**](Import.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

