# LaunchDarklyApi.CustomRolesApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCustomRole**](CustomRolesApi.md#deleteCustomRole) | **DELETE** /api/v2/roles/{key} | Delete custom role
[**getCustomRole**](CustomRolesApi.md#getCustomRole) | **GET** /api/v2/roles/{key} | Get custom role
[**getCustomRoles**](CustomRolesApi.md#getCustomRoles) | **GET** /api/v2/roles | List custom roles
[**patchCustomRole**](CustomRolesApi.md#patchCustomRole) | **PATCH** /api/v2/roles/{key} | Update custom role
[**postCustomRole**](CustomRolesApi.md#postCustomRole) | **POST** /api/v2/roles | Create custom role



## deleteCustomRole

> deleteCustomRole(key)

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
let key = "key_example"; // String | The key of the custom role to delete
apiInstance.deleteCustomRole(key, (error, data, response) => {
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
 **key** | **String**| The key of the custom role to delete | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getCustomRole

> CustomRolePost getCustomRole(key)

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
let key = "key_example"; // String | The custom role's key or ID
apiInstance.getCustomRole(key, (error, data, response) => {
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
 **key** | **String**| The custom role&#39;s key or ID | 

### Return type

[**CustomRolePost**](CustomRolePost.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomRoles

> CustomRoles getCustomRoles()

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
apiInstance.getCustomRoles((error, data, response) => {
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

[**CustomRoles**](CustomRoles.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## patchCustomRole

> CustomRole patchCustomRole(key, patchWithComment)

Update custom role

Update a single custom role. The request must be a valid JSON Patch document describing the changes to be made to the custom role.

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
let key = "key_example"; // String | The key of the custom role to update
let patchWithComment = new LaunchDarklyApi.PatchWithComment(); // PatchWithComment | 
apiInstance.patchCustomRole(key, patchWithComment, (error, data, response) => {
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
 **key** | **String**| The key of the custom role to update | 
 **patchWithComment** | [**PatchWithComment**](PatchWithComment.md)|  | 

### Return type

[**CustomRole**](CustomRole.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postCustomRole

> CustomRole postCustomRole(statementPost)

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
let statementPost = [new LaunchDarklyApi.StatementPost()]; // [StatementPost] | 
apiInstance.postCustomRole(statementPost, (error, data, response) => {
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
 **statementPost** | [**[StatementPost]**](StatementPost.md)|  | 

### Return type

[**CustomRole**](CustomRole.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

