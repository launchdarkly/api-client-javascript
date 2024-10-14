# LaunchDarklyApi.TagsApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTags**](TagsApi.md#getTags) | **GET** /api/v2/tags | List tags



## getTags

> TagsCollection getTags(opts)

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
  'kind': ["null"], // [String] | Fetch tags associated with the specified resource type. Options are `flag`, `project`, `environment`, `segment`. Returns all types by default.
  'pre': "pre_example", // String | Return tags with the specified prefix
  'archived': true, // Boolean | Whether or not to return archived flags
  'limit': 56, // Number | The number of tags to return. Maximum is 1000.
  'offset': 56, // Number | The index of the first tag to return. Default is 0.
  'asOf': "asOf_example" // String | The time to retrieve tags as of. Default is the current time.
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
 **kind** | [**[String]**](String.md)| Fetch tags associated with the specified resource type. Options are &#x60;flag&#x60;, &#x60;project&#x60;, &#x60;environment&#x60;, &#x60;segment&#x60;. Returns all types by default. | [optional] 
 **pre** | **String**| Return tags with the specified prefix | [optional] 
 **archived** | **Boolean**| Whether or not to return archived flags | [optional] 
 **limit** | **Number**| The number of tags to return. Maximum is 1000. | [optional] 
 **offset** | **Number**| The index of the first tag to return. Default is 0. | [optional] 
 **asOf** | **String**| The time to retrieve tags as of. Default is the current time. | [optional] 

### Return type

[**TagsCollection**](TagsCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

