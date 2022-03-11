# LaunchDarklyApi.TagsApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTags**](TagsApi.md#getTags) | **GET** /api/v2/tags | List tags



## getTags

> TagCollection getTags(opts)

List tags

Get a list of tags.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.TagsApi();
let opts = {
  'kind': "kind_example", // String | Fetch tags associated with the specified resource type. Options are `flag`, `project`, `environment`, `segment`. Returns all types by default.
  'pre': "pre_example" // String | Return tags with the specified prefix
};
apiInstance.getTags(opts, (error, data, response) => {
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
 **kind** | **String**| Fetch tags associated with the specified resource type. Options are &#x60;flag&#x60;, &#x60;project&#x60;, &#x60;environment&#x60;, &#x60;segment&#x60;. Returns all types by default. | [optional] 
 **pre** | **String**| Return tags with the specified prefix | [optional] 

### Return type

[**TagCollection**](TagCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

