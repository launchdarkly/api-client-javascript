# LaunchDarklyApi.IntegrationDeliveryConfigurationsBetaApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createIntegrationDeliveryConfiguration**](IntegrationDeliveryConfigurationsBetaApi.md#createIntegrationDeliveryConfiguration) | **POST** /api/v2/integration-capabilities/featureStore/{projectKey}/{environmentKey}/{integrationKey} | Create delivery configuration
[**deleteIntegrationDeliveryConfiguration**](IntegrationDeliveryConfigurationsBetaApi.md#deleteIntegrationDeliveryConfiguration) | **DELETE** /api/v2/integration-capabilities/featureStore/{projectKey}/{environmentKey}/{integrationKey}/{id} | Delete delivery configuration
[**getIntegrationDeliveryConfigurationByEnvironment**](IntegrationDeliveryConfigurationsBetaApi.md#getIntegrationDeliveryConfigurationByEnvironment) | **GET** /api/v2/integration-capabilities/featureStore/{projectKey}/{environmentKey} | Get delivery configurations by environment
[**getIntegrationDeliveryConfigurationById**](IntegrationDeliveryConfigurationsBetaApi.md#getIntegrationDeliveryConfigurationById) | **GET** /api/v2/integration-capabilities/featureStore/{projectKey}/{environmentKey}/{integrationKey}/{id} | Get delivery configuration by ID
[**getIntegrationDeliveryConfigurations**](IntegrationDeliveryConfigurationsBetaApi.md#getIntegrationDeliveryConfigurations) | **GET** /api/v2/integration-capabilities/featureStore | List all delivery configurations
[**patchIntegrationDeliveryConfiguration**](IntegrationDeliveryConfigurationsBetaApi.md#patchIntegrationDeliveryConfiguration) | **PATCH** /api/v2/integration-capabilities/featureStore/{projectKey}/{environmentKey}/{integrationKey}/{id} | Update delivery configuration
[**validateIntegrationDeliveryConfiguration**](IntegrationDeliveryConfigurationsBetaApi.md#validateIntegrationDeliveryConfiguration) | **POST** /api/v2/integration-capabilities/featureStore/{projectKey}/{environmentKey}/{integrationKey}/{id}/validate | Validate delivery configuration



## createIntegrationDeliveryConfiguration

> IntegrationDeliveryConfiguration createIntegrationDeliveryConfiguration(projectKey, environmentKey, integrationKey, integrationDeliveryConfigurationPost)

Create delivery configuration

Create a delivery configuration.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.IntegrationDeliveryConfigurationsBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let integrationKey = "integrationKey_example"; // String | The integration key
let integrationDeliveryConfigurationPost = {"config":{"optional":"example value for optional formVariables property for sample-integration","required":"example value for required formVariables property for sample-integration"},"name":"Sample integration","on":false,"tags":["example-tag"]}; // IntegrationDeliveryConfigurationPost | 
apiInstance.createIntegrationDeliveryConfiguration(projectKey, environmentKey, integrationKey, integrationDeliveryConfigurationPost, (error, data, response) => {
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
 **integrationKey** | **String**| The integration key | 
 **integrationDeliveryConfigurationPost** | [**IntegrationDeliveryConfigurationPost**](IntegrationDeliveryConfigurationPost.md)|  | 

### Return type

[**IntegrationDeliveryConfiguration**](IntegrationDeliveryConfiguration.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteIntegrationDeliveryConfiguration

> deleteIntegrationDeliveryConfiguration(projectKey, environmentKey, integrationKey, id)

Delete delivery configuration

Delete a delivery configuration.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.IntegrationDeliveryConfigurationsBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let integrationKey = "integrationKey_example"; // String | The integration key
let id = "id_example"; // String | The configuration ID
apiInstance.deleteIntegrationDeliveryConfiguration(projectKey, environmentKey, integrationKey, id, (error, data, response) => {
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
 **integrationKey** | **String**| The integration key | 
 **id** | **String**| The configuration ID | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getIntegrationDeliveryConfigurationByEnvironment

> IntegrationDeliveryConfigurationCollection getIntegrationDeliveryConfigurationByEnvironment(projectKey, environmentKey)

Get delivery configurations by environment

Get delivery configurations by environment.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.IntegrationDeliveryConfigurationsBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
apiInstance.getIntegrationDeliveryConfigurationByEnvironment(projectKey, environmentKey, (error, data, response) => {
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

### Return type

[**IntegrationDeliveryConfigurationCollection**](IntegrationDeliveryConfigurationCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getIntegrationDeliveryConfigurationById

> IntegrationDeliveryConfiguration getIntegrationDeliveryConfigurationById(projectKey, environmentKey, integrationKey, id)

Get delivery configuration by ID

Get delivery configuration by ID.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.IntegrationDeliveryConfigurationsBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let integrationKey = "integrationKey_example"; // String | The integration key
let id = "id_example"; // String | The configuration ID
apiInstance.getIntegrationDeliveryConfigurationById(projectKey, environmentKey, integrationKey, id, (error, data, response) => {
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
 **integrationKey** | **String**| The integration key | 
 **id** | **String**| The configuration ID | 

### Return type

[**IntegrationDeliveryConfiguration**](IntegrationDeliveryConfiguration.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getIntegrationDeliveryConfigurations

> IntegrationDeliveryConfigurationCollection getIntegrationDeliveryConfigurations()

List all delivery configurations

List all delivery configurations.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.IntegrationDeliveryConfigurationsBetaApi();
apiInstance.getIntegrationDeliveryConfigurations((error, data, response) => {
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

[**IntegrationDeliveryConfigurationCollection**](IntegrationDeliveryConfigurationCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## patchIntegrationDeliveryConfiguration

> IntegrationDeliveryConfiguration patchIntegrationDeliveryConfiguration(projectKey, environmentKey, integrationKey, id, patchOperation)

Update delivery configuration

Update an integration delivery configuration. Updating an integration delivery configuration uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.IntegrationDeliveryConfigurationsBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let integrationKey = "integrationKey_example"; // String | The integration key
let id = "id_example"; // String | The configuration ID
let patchOperation = [{"op":"replace","path":"/on","value":true}]; // [PatchOperation] | 
apiInstance.patchIntegrationDeliveryConfiguration(projectKey, environmentKey, integrationKey, id, patchOperation, (error, data, response) => {
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
 **integrationKey** | **String**| The integration key | 
 **id** | **String**| The configuration ID | 
 **patchOperation** | [**[PatchOperation]**](PatchOperation.md)|  | 

### Return type

[**IntegrationDeliveryConfiguration**](IntegrationDeliveryConfiguration.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## validateIntegrationDeliveryConfiguration

> IntegrationDeliveryConfigurationResponse validateIntegrationDeliveryConfiguration(projectKey, environmentKey, integrationKey, id)

Validate delivery configuration

Validate the saved delivery configuration, using the &#x60;validationRequest&#x60; in the integration&#39;s &#x60;manifest.json&#x60; file.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.IntegrationDeliveryConfigurationsBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let integrationKey = "integrationKey_example"; // String | The integration key
let id = "id_example"; // String | The configuration ID
apiInstance.validateIntegrationDeliveryConfiguration(projectKey, environmentKey, integrationKey, id, (error, data, response) => {
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
 **integrationKey** | **String**| The integration key | 
 **id** | **String**| The configuration ID | 

### Return type

[**IntegrationDeliveryConfigurationResponse**](IntegrationDeliveryConfigurationResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

