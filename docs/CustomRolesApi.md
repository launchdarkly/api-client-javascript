# LaunchDarklyApi.CustomRolesApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCustomRole**](CustomRolesApi.md#deleteCustomRole) | **DELETE** /api/v2/roles/{customRoleKey} | Delete custom role
[**getCustomRole**](CustomRolesApi.md#getCustomRole) | **GET** /api/v2/roles/{customRoleKey} | Get custom role
[**getCustomRoles**](CustomRolesApi.md#getCustomRoles) | **GET** /api/v2/roles | List custom roles
[**patchCustomRole**](CustomRolesApi.md#patchCustomRole) | **PATCH** /api/v2/roles/{customRoleKey} | Update custom role
[**postCustomRole**](CustomRolesApi.md#postCustomRole) | **POST** /api/v2/roles | Create custom role



## deleteCustomRole

> deleteCustomRole(customRoleKey)

Delete custom role

Delete a custom role by key

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.CustomRolesApi();
let customRoleKey = "customRoleKey_example"; // String | The custom role key
apiInstance.deleteCustomRole(customRoleKey, (error, data, response) => {
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
 **customRoleKey** | **String**| The custom role key | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomRole

> CustomRole getCustomRole(customRoleKey)

Get custom role

Get a single custom role by key or ID

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.CustomRolesApi();
let customRoleKey = "customRoleKey_example"; // String | The custom role key or ID
apiInstance.getCustomRole(customRoleKey, (error, data, response) => {
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
 **customRoleKey** | **String**| The custom role key or ID | 

### Return type

[**CustomRole**](CustomRole.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomRoles

> CustomRoles getCustomRoles(opts)

List custom roles

Get a complete list of custom roles. Custom roles let you create flexible policies providing fine-grained access control to everything in LaunchDarkly, from feature flags to goals, environments, and teams. With custom roles, it&#39;s possible to enforce access policies that meet your exact workflow needs. Custom roles are available to customers on our enterprise plans. If you&#39;re interested in learning more about our enterprise plans, contact sales@launchdarkly.com.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.CustomRolesApi();
let opts = {
  'limit': 789, // Number | The maximum number of custom roles to return. Defaults to 20.
  'offset': 789 // Number | Where to start in the list. Defaults to 0. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`.
};
apiInstance.getCustomRoles(opts, (error, data, response) => {
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
 **limit** | **Number**| The maximum number of custom roles to return. Defaults to 20. | [optional] 
 **offset** | **Number**| Where to start in the list. Defaults to 0. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query &#x60;limit&#x60;. | [optional] 

### Return type

[**CustomRoles**](CustomRoles.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## patchCustomRole

> CustomRole patchCustomRole(customRoleKey, patchWithComment)

Update custom role

Update a single custom role. Updating a custom role uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) or [JSON merge patch](https://datatracker.ietf.org/doc/html/rfc7386) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).&lt;br/&gt;&lt;br/&gt;To add an element to the &#x60;policy&#x60; array, set the &#x60;path&#x60; to &#x60;/policy&#x60; and then append &#x60;/&lt;array index&gt;&#x60;. Use &#x60;/0&#x60; to add to the beginning of the array. Use &#x60;/-&#x60; to add to the end of the array.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.CustomRolesApi();
let customRoleKey = "customRoleKey_example"; // String | The custom role key
let patchWithComment = {"patch":[{"op":"add","path":"/policy/0","value":{"actions":["updateOn"],"effect":"allow","resources":["proj/*:env/qa:flag/*"]}}]}; // PatchWithComment | 
apiInstance.patchCustomRole(customRoleKey, patchWithComment, (error, data, response) => {
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
 **customRoleKey** | **String**| The custom role key | 
 **patchWithComment** | [**PatchWithComment**](PatchWithComment.md)|  | 

### Return type

[**CustomRole**](CustomRole.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postCustomRole

> CustomRole postCustomRole(customRolePost)

Create custom role

Create a new custom role

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.CustomRolesApi();
let customRolePost = {"basePermissions":"reader","description":"An example role for members of the ops team","key":"role-key-123abc","name":"Ops team","policy":[{"actions":["updateOn"],"effect":"allow","resources":["proj/*:env/production:flag/*"]}]}; // CustomRolePost | 
apiInstance.postCustomRole(customRolePost, (error, data, response) => {
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
 **customRolePost** | [**CustomRolePost**](CustomRolePost.md)|  | 

### Return type

[**CustomRole**](CustomRole.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

