# LaunchDarklyApi.IntegrationsApi

All URIs are relative to *https://app.launchdarkly.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteIntegrationSubscription**](IntegrationsApi.md#deleteIntegrationSubscription) | **DELETE** /integrations/{integrationKey}/{integrationId} | Delete an integration subscription by ID.
[**getIntegrationSubscription**](IntegrationsApi.md#getIntegrationSubscription) | **GET** /integrations/{integrationKey}/{integrationId} | Get a single integration subscription by ID.
[**getIntegrationSubscriptions**](IntegrationsApi.md#getIntegrationSubscriptions) | **GET** /integrations/{integrationKey} | Get a list of all configured integrations of a given kind.
[**getIntegrations**](IntegrationsApi.md#getIntegrations) | **GET** /integrations | Get a list of all configured audit log event integrations associated with this account.
[**patchIntegrationSubscription**](IntegrationsApi.md#patchIntegrationSubscription) | **PATCH** /integrations/{integrationKey}/{integrationId} | Modify an integration subscription by ID.
[**postIntegrationSubscription**](IntegrationsApi.md#postIntegrationSubscription) | **POST** /integrations/{integrationKey} | Create a new integration subscription of a given kind.


<a name="deleteIntegrationSubscription"></a>
# **deleteIntegrationSubscription**
> deleteIntegrationSubscription(integrationKey, integrationId, )

Delete an integration subscription by ID.

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.IntegrationsApi();

var integrationKey = "integrationKey_example"; // String | The key used to specify the integration kind.

var integrationId = "integrationId_example"; // String | The integration ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteIntegrationSubscription(integrationKey, integrationId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integrationKey** | **String**| The key used to specify the integration kind. | 
 **integrationId** | **String**| The integration ID. | 

### Return type

null (empty response body)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getIntegrationSubscription"></a>
# **getIntegrationSubscription**
> IntegrationSubscription getIntegrationSubscription(integrationKey, integrationId, )

Get a single integration subscription by ID.

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.IntegrationsApi();

var integrationKey = "integrationKey_example"; // String | The key used to specify the integration kind.

var integrationId = "integrationId_example"; // String | The integration ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getIntegrationSubscription(integrationKey, integrationId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integrationKey** | **String**| The key used to specify the integration kind. | 
 **integrationId** | **String**| The integration ID. | 

### Return type

[**IntegrationSubscription**](IntegrationSubscription.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getIntegrationSubscriptions"></a>
# **getIntegrationSubscriptions**
> Integration getIntegrationSubscriptions(integrationKey, )

Get a list of all configured integrations of a given kind.

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.IntegrationsApi();

var integrationKey = "integrationKey_example"; // String | The key used to specify the integration kind.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getIntegrationSubscriptions(integrationKey, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integrationKey** | **String**| The key used to specify the integration kind. | 

### Return type

[**Integration**](Integration.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getIntegrations"></a>
# **getIntegrations**
> Integrations getIntegrations()

Get a list of all configured audit log event integrations associated with this account.

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.IntegrationsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getIntegrations(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Integrations**](Integrations.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchIntegrationSubscription"></a>
# **patchIntegrationSubscription**
> IntegrationSubscription patchIntegrationSubscription(integrationKey, integrationId, patchDelta)

Modify an integration subscription by ID.

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.IntegrationsApi();

var integrationKey = "integrationKey_example"; // String | The key used to specify the integration kind.

var integrationId = "integrationId_example"; // String | The integration ID.

var patchDelta = [new LaunchDarklyApi.PatchOperation()]; // [PatchOperation] | Requires a JSON Patch representation of the desired changes to the project. 'http://jsonpatch.com/'


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patchIntegrationSubscription(integrationKey, integrationId, patchDelta, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integrationKey** | **String**| The key used to specify the integration kind. | 
 **integrationId** | **String**| The integration ID. | 
 **patchDelta** | [**[PatchOperation]**](PatchOperation.md)| Requires a JSON Patch representation of the desired changes to the project. 'http://jsonpatch.com/' | 

### Return type

[**IntegrationSubscription**](IntegrationSubscription.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postIntegrationSubscription"></a>
# **postIntegrationSubscription**
> IntegrationSubscription postIntegrationSubscription(integrationKey, subscriptionBody)

Create a new integration subscription of a given kind.

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.IntegrationsApi();

var integrationKey = "integrationKey_example"; // String | The key used to specify the integration kind.

var subscriptionBody = new LaunchDarklyApi.SubscriptionBody(); // SubscriptionBody | Create a new integration subscription.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postIntegrationSubscription(integrationKey, subscriptionBody, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integrationKey** | **String**| The key used to specify the integration kind. | 
 **subscriptionBody** | [**SubscriptionBody**](SubscriptionBody.md)| Create a new integration subscription. | 

### Return type

[**IntegrationSubscription**](IntegrationSubscription.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

