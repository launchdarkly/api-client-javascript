# LaunchDarklyApi.FlagImportConfigurationsBetaApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFlagImportConfiguration**](FlagImportConfigurationsBetaApi.md#createFlagImportConfiguration) | **POST** /api/v2/integration-capabilities/flag-import/{projectKey}/{integrationKey} | Create a flag import configuration
[**deleteFlagImportConfiguration**](FlagImportConfigurationsBetaApi.md#deleteFlagImportConfiguration) | **DELETE** /api/v2/integration-capabilities/flag-import/{projectKey}/{integrationKey}/{integrationId} | Delete a flag import configuration
[**getFlagImportConfiguration**](FlagImportConfigurationsBetaApi.md#getFlagImportConfiguration) | **GET** /api/v2/integration-capabilities/flag-import/{projectKey}/{integrationKey}/{integrationId} | Get a single flag import configuration
[**getFlagImportConfigurations**](FlagImportConfigurationsBetaApi.md#getFlagImportConfigurations) | **GET** /api/v2/integration-capabilities/flag-import | List all flag import configurations
[**patchFlagImportConfiguration**](FlagImportConfigurationsBetaApi.md#patchFlagImportConfiguration) | **PATCH** /api/v2/integration-capabilities/flag-import/{projectKey}/{integrationKey}/{integrationId} | Update a flag import configuration
[**triggerFlagImportJob**](FlagImportConfigurationsBetaApi.md#triggerFlagImportJob) | **POST** /api/v2/integration-capabilities/flag-import/{projectKey}/{integrationKey}/{integrationId}/trigger | Trigger a single flag import run



## createFlagImportConfiguration

> FlagImportIntegration createFlagImportConfiguration(projectKey, integrationKey, flagImportConfigurationPost)

Create a flag import configuration

Create a new flag import configuration. The &#x60;integrationKey&#x60; path parameter identifies the feature management system from which the import occurs, for example, &#x60;split&#x60;. The &#x60;config&#x60; object in the request body schema is described by the global integration settings, as specified by the &lt;code&gt;formVariables&lt;/code&gt; in the &lt;code&gt;manifest.json&lt;/code&gt; for this integration. It varies slightly based on the &#x60;integrationKey&#x60;.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.FlagImportConfigurationsBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let integrationKey = "integrationKey_example"; // String | The integration key
let flagImportConfigurationPost = {"config":{"environmentId":"The ID of the environment in the external system","ldApiKey":"An API key with create flag permissions in your LaunchDarkly account","ldMaintainer":"The ID of the member who will be the maintainer of the imported flags","ldTag":"A tag to apply to all flags imported to LaunchDarkly","splitTag":"If provided, imports only the flags from the external system with this tag. Leave blank to import all flags.","workspaceApiKey":"An API key with read permissions in the external feature management system","workspaceId":"The ID of the workspace in the external system"},"name":"Sample configuration","tags":["example-tag"]}; // FlagImportConfigurationPost | 
apiInstance.createFlagImportConfiguration(projectKey, integrationKey, flagImportConfigurationPost, (error, data, response) => {
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
 **integrationKey** | **String**| The integration key | 
 **flagImportConfigurationPost** | [**FlagImportConfigurationPost**](FlagImportConfigurationPost.md)|  | 

### Return type

[**FlagImportIntegration**](FlagImportIntegration.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteFlagImportConfiguration

> deleteFlagImportConfiguration(projectKey, integrationKey, integrationId)

Delete a flag import configuration

Delete a flag import configuration by ID. The &#x60;integrationKey&#x60; path parameter identifies the feature management system from which the import occurs, for example, &#x60;split&#x60;.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.FlagImportConfigurationsBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let integrationKey = "integrationKey_example"; // String | The integration key
let integrationId = "integrationId_example"; // String | The integration ID
apiInstance.deleteFlagImportConfiguration(projectKey, integrationKey, integrationId, (error, data, response) => {
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
 **integrationKey** | **String**| The integration key | 
 **integrationId** | **String**| The integration ID | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFlagImportConfiguration

> FlagImportIntegration getFlagImportConfiguration(projectKey, integrationKey, integrationId)

Get a single flag import configuration

Get a single flag import configuration by ID. The &#x60;integrationKey&#x60; path parameter identifies the feature management system from which the import occurs, for example, &#x60;split&#x60;.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.FlagImportConfigurationsBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let integrationKey = "integrationKey_example"; // String | The integration key, for example, `split`
let integrationId = "integrationId_example"; // String | The integration ID
apiInstance.getFlagImportConfiguration(projectKey, integrationKey, integrationId, (error, data, response) => {
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
 **integrationKey** | **String**| The integration key, for example, &#x60;split&#x60; | 
 **integrationId** | **String**| The integration ID | 

### Return type

[**FlagImportIntegration**](FlagImportIntegration.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFlagImportConfigurations

> FlagImportIntegrationCollection getFlagImportConfigurations()

List all flag import configurations

List all flag import configurations.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.FlagImportConfigurationsBetaApi();
apiInstance.getFlagImportConfigurations((error, data, response) => {
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

[**FlagImportIntegrationCollection**](FlagImportIntegrationCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## patchFlagImportConfiguration

> FlagImportIntegration patchFlagImportConfiguration(projectKey, integrationKey, integrationId, patchOperation)

Update a flag import configuration

Updating a flag import configuration uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](/#section/Overview/Updates).&lt;br/&gt;&lt;br/&gt;To add an element to the import configuration fields that are arrays, set the &#x60;path&#x60; to the name of the field and then append &#x60;/&lt;array index&gt;&#x60;. Use &#x60;/0&#x60; to add to the beginning of the array. Use &#x60;/-&#x60; to add to the end of the array.&lt;br/&gt;&lt;br/&gt;You can update the &#x60;config&#x60;, &#x60;tags&#x60;, and &#x60;name&#x60; of the flag import configuration.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.FlagImportConfigurationsBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let integrationKey = "integrationKey_example"; // String | The integration key
let integrationId = "integrationId_example"; // String | The integration ID
let patchOperation = [new LaunchDarklyApi.PatchOperation()]; // [PatchOperation] | 
apiInstance.patchFlagImportConfiguration(projectKey, integrationKey, integrationId, patchOperation, (error, data, response) => {
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
 **integrationKey** | **String**| The integration key | 
 **integrationId** | **String**| The integration ID | 
 **patchOperation** | [**[PatchOperation]**](PatchOperation.md)|  | 

### Return type

[**FlagImportIntegration**](FlagImportIntegration.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## triggerFlagImportJob

> Object triggerFlagImportJob(projectKey, integrationKey, integrationId)

Trigger a single flag import run

Trigger a single flag import run for an existing flag import configuration. The &#x60;integrationKey&#x60; path parameter identifies the feature management system from which the import occurs, for example, &#x60;split&#x60;.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.FlagImportConfigurationsBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let integrationKey = "integrationKey_example"; // String | The integration key
let integrationId = "integrationId_example"; // String | The integration ID
apiInstance.triggerFlagImportJob(projectKey, integrationKey, integrationId, (error, data, response) => {
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
 **integrationKey** | **String**| The integration key | 
 **integrationId** | **String**| The integration ID | 

### Return type

**Object**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

