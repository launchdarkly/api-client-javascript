# LaunchDarklyApi.UsersApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteUser**](UsersApi.md#deleteUser) | **DELETE** /api/v2/users/{projectKey}/{environmentKey}/{userKey} | Delete user
[**getSearchUsers**](UsersApi.md#getSearchUsers) | **GET** /api/v2/user-search/{projectKey}/{environmentKey} | Find users
[**getUser**](UsersApi.md#getUser) | **GET** /api/v2/users/{projectKey}/{environmentKey}/{userKey} | Get user
[**getUsers**](UsersApi.md#getUsers) | **GET** /api/v2/users/{projectKey}/{environmentKey} | List users



## deleteUser

> deleteUser(projectKey, environmentKey, userKey)

Delete user

&gt; ### Use contexts instead &gt; &gt; After you have upgraded your LaunchDarkly SDK to use contexts instead of users, you should use [Delete context instances](https://launchdarkly.com/docs/ld-docs/api/contexts/delete-context-instances) instead of this endpoint.  Delete a user by key. 

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
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let userKey = "userKey_example"; // String | The user key
apiInstance.deleteUser(projectKey, environmentKey, userKey, (error, data, response) => {
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
 **userKey** | **String**| The user key | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSearchUsers

> Users getSearchUsers(projectKey, environmentKey, opts)

Find users

&gt; ### Use contexts instead &gt; &gt; After you have upgraded your LaunchDarkly SDK to use contexts instead of users, you should use [Search for context instances](https://launchdarkly.com/docs/ld-docs/api/contexts/search-context-instances) instead of this endpoint.  Search users in LaunchDarkly based on their last active date, a user attribute filter set, or a search query.  An example user attribute filter set is &#x60;filter&#x3D;firstName:Anna,activeTrial:false&#x60;. This matches users that have the user attribute &#x60;firstName&#x60; set to &#x60;Anna&#x60;, that also have the attribute &#x60;activeTrial&#x60; set to &#x60;false&#x60;.  To paginate through results, follow the &#x60;next&#x60; link in the &#x60;_links&#x60; object. To learn more, read [Representations](https://launchdarkly.com/docs/ld-docs/api#representations). 

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
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let opts = {
  'q': "q_example", // String | Full-text search for users based on name, first name, last name, e-mail address, or key
  'limit': 789, // Number | Specifies the maximum number of items in the collection to return (max: 50, default: 20)
  'offset': 789, // Number | Deprecated, use `searchAfter` instead. Specifies the first item to return in the collection.
  'after': 789, // Number | A Unix epoch time in milliseconds specifying the maximum last time a user requested a feature flag from LaunchDarkly
  'sort': "sort_example", // String | Specifies a field by which to sort. LaunchDarkly supports the `userKey` and `lastSeen` fields. Fields prefixed by a dash ( - ) sort in descending order.
  'searchAfter': "searchAfter_example", // String | Limits results to users with sort values after the value you specify. You can use this for pagination, but we recommend using the `next` link we provide instead.
  'filter': "filter_example" // String | A comma-separated list of user attribute filters. Each filter is in the form of attributeKey:attributeValue
};
apiInstance.getSearchUsers(projectKey, environmentKey, opts, (error, data, response) => {
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
 **q** | **String**| Full-text search for users based on name, first name, last name, e-mail address, or key | [optional] 
 **limit** | **Number**| Specifies the maximum number of items in the collection to return (max: 50, default: 20) | [optional] 
 **offset** | **Number**| Deprecated, use &#x60;searchAfter&#x60; instead. Specifies the first item to return in the collection. | [optional] 
 **after** | **Number**| A Unix epoch time in milliseconds specifying the maximum last time a user requested a feature flag from LaunchDarkly | [optional] 
 **sort** | **String**| Specifies a field by which to sort. LaunchDarkly supports the &#x60;userKey&#x60; and &#x60;lastSeen&#x60; fields. Fields prefixed by a dash ( - ) sort in descending order. | [optional] 
 **searchAfter** | **String**| Limits results to users with sort values after the value you specify. You can use this for pagination, but we recommend using the &#x60;next&#x60; link we provide instead. | [optional] 
 **filter** | **String**| A comma-separated list of user attribute filters. Each filter is in the form of attributeKey:attributeValue | [optional] 

### Return type

[**Users**](Users.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUser

> UserRecord getUser(projectKey, environmentKey, userKey)

Get user

&gt; ### Use contexts instead &gt; &gt; After you have upgraded your LaunchDarkly SDK to use contexts instead of users, you should use [Get context instances](https://launchdarkly.com/docs/ld-docs/api/contexts/get-context-instances) instead of this endpoint.  Get a user by key. The &#x60;user&#x60; object contains all attributes sent in &#x60;variation&#x60; calls for that key. 

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
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let userKey = "userKey_example"; // String | The user key
apiInstance.getUser(projectKey, environmentKey, userKey, (error, data, response) => {
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
 **userKey** | **String**| The user key | 

### Return type

[**UserRecord**](UserRecord.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUsers

> UsersRep getUsers(projectKey, environmentKey, opts)

List users

&gt; ### Use contexts instead &gt; &gt; After you have upgraded your LaunchDarkly SDK to use contexts instead of users, you should use [Search for contexts](https://launchdarkly.com/docs/ld-docs/api/contexts/search-contexts) instead of this endpoint.  List all users in the environment. Includes the total count of users. This is useful for exporting all users in the system for further analysis.  Each page displays users up to a set &#x60;limit&#x60;. The default is 20. To page through, follow the &#x60;next&#x60; link in the &#x60;_links&#x60; object. To learn more, read [Representations](https://launchdarkly.com/docs/ld-docs/api#representations). 

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
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let opts = {
  'limit': 789, // Number | The number of elements to return per page
  'searchAfter': "searchAfter_example" // String | Limits results to users with sort values after the value you specify. You can use this for pagination, but we recommend using the `next` link we provide instead.
};
apiInstance.getUsers(projectKey, environmentKey, opts, (error, data, response) => {
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
 **limit** | **Number**| The number of elements to return per page | [optional] 
 **searchAfter** | **String**| Limits results to users with sort values after the value you specify. You can use this for pagination, but we recommend using the &#x60;next&#x60; link we provide instead. | [optional] 

### Return type

[**UsersRep**](UsersRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

