# LaunchDarklyApi.IntegrationAuditLogSubscriptionsApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSubscription**](IntegrationAuditLogSubscriptionsApi.md#createSubscription) | **POST** /api/v2/integrations/{integrationKey} | Create audit log subscription
[**deleteSubscription**](IntegrationAuditLogSubscriptionsApi.md#deleteSubscription) | **DELETE** /api/v2/integrations/{integrationKey}/{id} | Delete audit log subscription
[**getSubscriptionByID**](IntegrationAuditLogSubscriptionsApi.md#getSubscriptionByID) | **GET** /api/v2/integrations/{integrationKey}/{id} | Get audit log subscription by ID
[**getSubscriptions**](IntegrationAuditLogSubscriptionsApi.md#getSubscriptions) | **GET** /api/v2/integrations/{integrationKey} | Get audit log subscriptions by integration
[**updateSubscription**](IntegrationAuditLogSubscriptionsApi.md#updateSubscription) | **PATCH** /api/v2/integrations/{integrationKey}/{id} | Update audit log subscription



## createSubscription

> Integration createSubscription(integrationKey, subscriptionPost)

Create audit log subscription

Create an audit log subscription.&lt;br /&gt;&lt;br /&gt;For each subscription, you must specify the set of resources you wish to subscribe to audit log notifications for. You can describe these resources using a custom role policy. To learn more, read [Custom role concepts](https://launchdarkly.com/docs/home/account/role-concepts).

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.IntegrationAuditLogSubscriptionsApi();
let integrationKey = "integrationKey_example"; // String | The integration key
let subscriptionPost = {"config":{"optional":"an optional property","required":"the required property","url":"https://example.com"},"name":"Example audit log subscription.","on":false,"statements":[{"actions":["*"],"effect":"allow","resources":["proj/*:env/*:flag/*;testing-tag"]}],"tags":["testing-tag"]}; // SubscriptionPost | 
apiInstance.createSubscription(integrationKey, subscriptionPost, (error, data, response) => {
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
 **integrationKey** | **String**| The integration key | 
 **subscriptionPost** | [**SubscriptionPost**](SubscriptionPost.md)|  | 

### Return type

[**Integration**](Integration.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteSubscription

> deleteSubscription(integrationKey, id)

Delete audit log subscription

Delete an audit log subscription.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.IntegrationAuditLogSubscriptionsApi();
let integrationKey = "integrationKey_example"; // String | The integration key
let id = "id_example"; // String | The subscription ID
apiInstance.deleteSubscription(integrationKey, id, (error, data, response) => {
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
 **integrationKey** | **String**| The integration key | 
 **id** | **String**| The subscription ID | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSubscriptionByID

> Integration getSubscriptionByID(integrationKey, id)

Get audit log subscription by ID

Get an audit log subscription by ID.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.IntegrationAuditLogSubscriptionsApi();
let integrationKey = "integrationKey_example"; // String | The integration key
let id = "id_example"; // String | The subscription ID
apiInstance.getSubscriptionByID(integrationKey, id, (error, data, response) => {
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
 **integrationKey** | **String**| The integration key | 
 **id** | **String**| The subscription ID | 

### Return type

[**Integration**](Integration.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSubscriptions

> Integrations getSubscriptions(integrationKey)

Get audit log subscriptions by integration

Get all audit log subscriptions associated with a given integration.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.IntegrationAuditLogSubscriptionsApi();
let integrationKey = "integrationKey_example"; // String | The integration key
apiInstance.getSubscriptions(integrationKey, (error, data, response) => {
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
 **integrationKey** | **String**| The integration key | 

### Return type

[**Integrations**](Integrations.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateSubscription

> Integration updateSubscription(integrationKey, id, patchOperation)

Update audit log subscription

Update an audit log subscription configuration. Updating an audit log subscription uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.IntegrationAuditLogSubscriptionsApi();
let integrationKey = "integrationKey_example"; // String | The integration key
let id = "id_example"; // String | The ID of the audit log subscription
let patchOperation = [{"op":"replace","path":"/on","value":false}]; // [PatchOperation] | 
apiInstance.updateSubscription(integrationKey, id, patchOperation, (error, data, response) => {
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
 **integrationKey** | **String**| The integration key | 
 **id** | **String**| The ID of the audit log subscription | 
 **patchOperation** | [**[PatchOperation]**](PatchOperation.md)|  | 

### Return type

[**Integration**](Integration.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

