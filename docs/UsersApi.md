# LaunchDarklyApi.UsersApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteUser**](UsersApi.md#deleteUser) | **DELETE** /api/v2/users/{projKey}/{envKey}/{key} | Delete user
[**getSearchUsers**](UsersApi.md#getSearchUsers) | **GET** /api/v2/user-search/{projKey}/{envKey} | Find users
[**getUser**](UsersApi.md#getUser) | **GET** /api/v2/users/{projKey}/{envKey}/{key} | Get user
[**getUsers**](UsersApi.md#getUsers) | **GET** /api/v2/users/{projKey}/{envKey} | List users



## deleteUser

> deleteUser(projKey, envKey, key)

Delete user

Delete a user by key

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.UsersApi();
let projKey = "projKey_example"; // String | The project key
let envKey = "envKey_example"; // String | The environment key
let key = "key_example"; // String | The user key
apiInstance.deleteUser(projKey, envKey, key, (error, data, response) => {
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
 **key** | **String**| The user key | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getSearchUsers

> Users getSearchUsers(projKey, envKey, opts)

Find users

Search users in LaunchDarkly based on their last active date, or a search query. Do not use to enumerate all users in LaunchDarkly. Instead use the [List users](getUsers) API resource.  &gt; ### &#x60;offset&#x60; is deprecated &gt; &gt; &#x60;offset&#x60; is deprecated and will be removed in a future API version. You can still use &#x60;offset&#x60; and &#x60;limit&#x60; for pagination, but we recommend you use &#x60;sort&#x60; and &#x60;searchAfter&#x60; instead. &#x60;searchAfter&#x60; allows you to page through more than 10,000 users, but &#x60;offset&#x60; and &#x60;limit&#x60; do not. 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.UsersApi();
let projKey = "projKey_example"; // String | The project key
let envKey = "envKey_example"; // String | The environment key
let opts = {
  'q': "q_example", // String | Full-text search for users based on name, first name, last name, e-mail address, or key
  'limit': 789, // Number | Specifies the maximum number of items in the collection to return (max: 50, default: 20)
  'offset': 789, // Number | Specifies the first item to return in the collection
  'after': 789, // Number | A unix epoch time in milliseconds specifying the maximum last time a user requested a feature flag from LaunchDarkly
  'searchAfter': "searchAfter_example" // String | Limits results to users with sort values after the value you specify. You can use this for pagination, but we recommend using the `next` link we provide instead.
};
apiInstance.getSearchUsers(projKey, envKey, opts, (error, data, response) => {
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
 **q** | **String**| Full-text search for users based on name, first name, last name, e-mail address, or key | [optional] 
 **limit** | **Number**| Specifies the maximum number of items in the collection to return (max: 50, default: 20) | [optional] 
 **offset** | **Number**| Specifies the first item to return in the collection | [optional] 
 **after** | **Number**| A unix epoch time in milliseconds specifying the maximum last time a user requested a feature flag from LaunchDarkly | [optional] 
 **searchAfter** | **String**| Limits results to users with sort values after the value you specify. You can use this for pagination, but we recommend using the &#x60;next&#x60; link we provide instead. | [optional] 

### Return type

[**Users**](Users.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUser

> User getUser(projKey, envKey, key)

Get user

Get a user by key. The &#x60;user&#x60; object contains all attributes sent in &#x60;variation&#x60; calls for that key.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.UsersApi();
let projKey = "projKey_example"; // String | The project key
let envKey = "envKey_example"; // String | The environment key
let key = "key_example"; // String | The user key
apiInstance.getUser(projKey, envKey, key, (error, data, response) => {
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
 **key** | **String**| The user key | 

### Return type

[**User**](User.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUsers

> Users getUsers(projKey, envKey, opts)

List users

List all users in the environment. Includes the total count of users. In each page, there is up to &#x60;limit&#x60; users returned. The default is 20. This is useful for exporting all users in the system for further analysis. To paginate through, follow the &#x60;next&#x60; link in the &#x60;_links&#x60; object, as [described in Representations](/#section/Representations). 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.UsersApi();
let projKey = "projKey_example"; // String | The project key
let envKey = "envKey_example"; // String | The environment key
let opts = {
  'limit': 789, // Number | The number of elements to return per page
  'searchAfter': "searchAfter_example" // String | Limits results to users with sort values after the value you specify. You can use this for pagination, but we recommend using the `next` link we provide instead.
};
apiInstance.getUsers(projKey, envKey, opts, (error, data, response) => {
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
 **limit** | **Number**| The number of elements to return per page | [optional] 
 **searchAfter** | **String**| Limits results to users with sort values after the value you specify. You can use this for pagination, but we recommend using the &#x60;next&#x60; link we provide instead. | [optional] 

### Return type

[**Users**](Users.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

