# LaunchDarklyApi.IntegrationsBetaApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createIntegrationConfiguration**](IntegrationsBetaApi.md#createIntegrationConfiguration) | **POST** /api/v2/integration-configurations/keys/{integrationKey} | Create integration configuration
[**deleteIntegrationConfiguration**](IntegrationsBetaApi.md#deleteIntegrationConfiguration) | **DELETE** /api/v2/integration-configurations/{integrationConfigurationId} | Delete integration configuration
[**getAllIntegrationConfigurations**](IntegrationsBetaApi.md#getAllIntegrationConfigurations) | **GET** /api/v2/integration-configurations/keys/{integrationKey} | Get all configurations for the integration
[**getIntegrationConfiguration**](IntegrationsBetaApi.md#getIntegrationConfiguration) | **GET** /api/v2/integration-configurations/{integrationConfigurationId} | Get an integration configuration
[**updateIntegrationConfiguration**](IntegrationsBetaApi.md#updateIntegrationConfiguration) | **PATCH** /api/v2/integration-configurations/{integrationConfigurationId} | Update integration configuration



## createIntegrationConfiguration

> IntegrationConfigurationsRep createIntegrationConfiguration(integrationKey, integrationConfigurationPost)

Create integration configuration

Create a new integration configuration. (Excludes [persistent store](/tag/Persistent-store-integrations-(beta)) and [flag import configurations](/tag/Flag-import-configurations-(beta)).)

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.IntegrationsBetaApi();
let integrationKey = "integrationKey_example"; // String | The integration key
let integrationConfigurationPost = new LaunchDarklyApi.IntegrationConfigurationPost(); // IntegrationConfigurationPost | 
apiInstance.createIntegrationConfiguration(integrationKey, integrationConfigurationPost, (error, data, response) => {
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
 **integrationConfigurationPost** | [**IntegrationConfigurationPost**](IntegrationConfigurationPost.md)|  | 

### Return type

[**IntegrationConfigurationsRep**](IntegrationConfigurationsRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteIntegrationConfiguration

> deleteIntegrationConfiguration(integrationConfigurationId)

Delete integration configuration

Delete an integration configuration by ID. (Excludes [persistent store](/tag/Persistent-store-integrations-(beta)) and [flag import configurations](/tag/Flag-import-configurations-(beta)).)

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.IntegrationsBetaApi();
let integrationConfigurationId = "integrationConfigurationId_example"; // String | The ID of the integration configuration to be deleted
apiInstance.deleteIntegrationConfiguration(integrationConfigurationId, (error, data, response) => {
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
 **integrationConfigurationId** | **String**| The ID of the integration configuration to be deleted | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllIntegrationConfigurations

> IntegrationConfigurationCollectionRep getAllIntegrationConfigurations(integrationKey)

Get all configurations for the integration

Get all integration configurations with the specified integration key. (Excludes [persistent store](/tag/Persistent-store-integrations-(beta)) and [flag import configurations](/tag/Flag-import-configurations-(beta))).

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.IntegrationsBetaApi();
let integrationKey = "integrationKey_example"; // String | Integration key
apiInstance.getAllIntegrationConfigurations(integrationKey, (error, data, response) => {
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
 **integrationKey** | **String**| Integration key | 

### Return type

[**IntegrationConfigurationCollectionRep**](IntegrationConfigurationCollectionRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getIntegrationConfiguration

> IntegrationConfigurationsRep getIntegrationConfiguration(integrationConfigurationId)

Get an integration configuration

Get integration configuration with the specified ID. (Excludes [persistent store](/tag/Persistent-store-integrations-(beta)) and [flag import configurations](/tag/Flag-import-configurations-(beta)).)

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.IntegrationsBetaApi();
let integrationConfigurationId = "integrationConfigurationId_example"; // String | Integration configuration ID
apiInstance.getIntegrationConfiguration(integrationConfigurationId, (error, data, response) => {
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
 **integrationConfigurationId** | **String**| Integration configuration ID | 

### Return type

[**IntegrationConfigurationsRep**](IntegrationConfigurationsRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateIntegrationConfiguration

> IntegrationConfigurationsRep updateIntegrationConfiguration(integrationConfigurationId, patchOperation)

Update integration configuration

Update an integration configuration. Updating an integration configuration uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](/#section/Overview/Updates).

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.IntegrationsBetaApi();
let integrationConfigurationId = "integrationConfigurationId_example"; // String | The ID of the integration configuration
let patchOperation = [{"op":"replace","path":"/on","value":false}]; // [PatchOperation] | 
apiInstance.updateIntegrationConfiguration(integrationConfigurationId, patchOperation, (error, data, response) => {
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
 **integrationConfigurationId** | **String**| The ID of the integration configuration | 
 **patchOperation** | [**[PatchOperation]**](PatchOperation.md)|  | 

### Return type

[**IntegrationConfigurationsRep**](IntegrationConfigurationsRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

