# LaunchDarklyApi.OAuth2ClientsApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOAuth2Client**](OAuth2ClientsApi.md#createOAuth2Client) | **POST** /api/v2/oauth/clients | Create a LaunchDarkly OAuth 2.0 client
[**deleteOAuthClient**](OAuth2ClientsApi.md#deleteOAuthClient) | **DELETE** /api/v2/oauth/clients/{clientId} | Delete OAuth 2.0 client
[**getOAuthClientById**](OAuth2ClientsApi.md#getOAuthClientById) | **GET** /api/v2/oauth/clients/{clientId} | Get client by ID
[**getOAuthClients**](OAuth2ClientsApi.md#getOAuthClients) | **GET** /api/v2/oauth/clients | Get clients
[**patchOAuthClient**](OAuth2ClientsApi.md#patchOAuthClient) | **PATCH** /api/v2/oauth/clients/{clientId} | Patch client by ID



## createOAuth2Client

> Client createOAuth2Client(oauthClientPost)

Create a LaunchDarkly OAuth 2.0 client

Create (register) a LaunchDarkly OAuth2 client. OAuth2 clients allow you to build custom integrations using LaunchDarkly as your identity provider.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.OAuth2ClientsApi();
let oauthClientPost = new LaunchDarklyApi.OauthClientPost(); // OauthClientPost | 
apiInstance.createOAuth2Client(oauthClientPost, (error, data, response) => {
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
 **oauthClientPost** | [**OauthClientPost**](OauthClientPost.md)|  | 

### Return type

[**Client**](Client.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteOAuthClient

> deleteOAuthClient(clientId)

Delete OAuth 2.0 client

Delete an existing OAuth 2.0 client by unique client ID.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.OAuth2ClientsApi();
let clientId = "clientId_example"; // String | The client ID
apiInstance.deleteOAuthClient(clientId, (error, data, response) => {
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
 **clientId** | **String**| The client ID | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOAuthClientById

> Client getOAuthClientById(clientId)

Get client by ID

Get a registered OAuth 2.0 client by unique client ID.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.OAuth2ClientsApi();
let clientId = "clientId_example"; // String | The client ID
apiInstance.getOAuthClientById(clientId, (error, data, response) => {
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
 **clientId** | **String**| The client ID | 

### Return type

[**Client**](Client.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOAuthClients

> ClientCollection getOAuthClients()

Get clients

Get all OAuth 2.0 clients registered by your account.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.OAuth2ClientsApi();
apiInstance.getOAuthClients((error, data, response) => {
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

[**ClientCollection**](ClientCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## patchOAuthClient

> Client patchOAuthClient(clientId, patchOperation)

Patch client by ID

Patch an existing OAuth 2.0 client by client ID. Updating an OAuth2 client uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](/#section/Overview/Updates). Only &#x60;name&#x60;, &#x60;description&#x60;, and &#x60;redirectUri&#x60; may be patched.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.OAuth2ClientsApi();
let clientId = "clientId_example"; // String | The client ID
let patchOperation = [{"op":"replace","path":"/name","value":"Example Client V2"}]; // [PatchOperation] | 
apiInstance.patchOAuthClient(clientId, patchOperation, (error, data, response) => {
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
 **clientId** | **String**| The client ID | 
 **patchOperation** | [**[PatchOperation]**](PatchOperation.md)|  | 

### Return type

[**Client**](Client.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

