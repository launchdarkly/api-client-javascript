# LaunchDarklyApi.IntegrationsBetaApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBigSegmentStoreIntegration**](IntegrationsBetaApi.md#createBigSegmentStoreIntegration) | **POST** /api/v2/integration-capabilities/big-segment-store/{projectKey}/{environmentKey}/{integrationKey} | Create big segment store integration
[**createFlagImportConfiguration**](IntegrationsBetaApi.md#createFlagImportConfiguration) | **POST** /api/v2/integration-capabilities/flag-import/{projectKey}/{integrationKey} | Create a flag import configuration
[**deleteBigSegmentStoreIntegration**](IntegrationsBetaApi.md#deleteBigSegmentStoreIntegration) | **DELETE** /api/v2/integration-capabilities/big-segment-store/{projectKey}/{environmentKey}/{integrationKey}/{integrationId} | Delete big segment store integration
[**deleteFlagImportConfiguration**](IntegrationsBetaApi.md#deleteFlagImportConfiguration) | **DELETE** /api/v2/integration-capabilities/flag-import/{projectKey}/{integrationKey}/{integrationId} | Delete a flag import configuration
[**getBigSegmentStoreIntegration**](IntegrationsBetaApi.md#getBigSegmentStoreIntegration) | **GET** /api/v2/integration-capabilities/big-segment-store/{projectKey}/{environmentKey}/{integrationKey}/{integrationId} | Get big segment store integration by ID
[**getBigSegmentStoreIntegrations**](IntegrationsBetaApi.md#getBigSegmentStoreIntegrations) | **GET** /api/v2/integration-capabilities/big-segment-store | List all big segment store integrations
[**getFlagImportConfiguration**](IntegrationsBetaApi.md#getFlagImportConfiguration) | **GET** /api/v2/integration-capabilities/flag-import/{projectKey}/{integrationKey}/{integrationId} | Get a single flag import configuration
[**getFlagImportConfigurations**](IntegrationsBetaApi.md#getFlagImportConfigurations) | **GET** /api/v2/integration-capabilities/flag-import | List all flag import configurations
[**patchBigSegmentStoreIntegration**](IntegrationsBetaApi.md#patchBigSegmentStoreIntegration) | **PATCH** /api/v2/integration-capabilities/big-segment-store/{projectKey}/{environmentKey}/{integrationKey}/{integrationId} | Update big segment store integration
[**patchFlagImportConfiguration**](IntegrationsBetaApi.md#patchFlagImportConfiguration) | **PATCH** /api/v2/integration-capabilities/flag-import/{projectKey}/{integrationKey}/{integrationId} | Update a flag import configuration
[**triggerFlagImportJob**](IntegrationsBetaApi.md#triggerFlagImportJob) | **POST** /api/v2/integration-capabilities/flag-import/{projectKey}/{integrationKey}/{integrationId}/trigger | Trigger a single flag import run



## createBigSegmentStoreIntegration

> BigSegmentStoreIntegration createBigSegmentStoreIntegration(projectKey, environmentKey, integrationKey, integrationDeliveryConfigurationPost)

Create big segment store integration

 Create a persistent store integration.  If you are using server-side SDKs, segments synced from external tools and larger list-based segments require a persistent store within your infrastructure. LaunchDarkly keeps the persistent store up to date and consults it during flag evaluation.  You can use either Redis or DynamoDB as your persistent store. When you create a persistent store integration, the fields in the &#x60;config&#x60; object in the request vary depending on which persistent store you use.  If you are using Redis to create your persistent store integration, you will need to know:  * Your Redis host * Your Redis port * Your Redis username * Your Redis password * Whether or not LaunchDarkly should connect using TLS  If you are using DynamoDB to create your persistent store integration, you will need to know:  * Your DynamoDB table name. The table must have the following schema:   * Partition key: &#x60;namespace&#x60; (string)   * Sort key: &#x60;key&#x60; (string) * Your DynamoDB Amazon Web Services (AWS) region. * Your AWS role Amazon Resource Name (ARN). This is the role that LaunchDarkly will assume to manage your DynamoDB table. * The External ID you specified when creating your Amazon Resource Name (ARN).  To learn more, read [Segment configuration](https://docs.launchdarkly.com/home/flags/segment-config). 

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
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let integrationKey = "integrationKey_example"; // String | The integration key, either `redis` or `dynamodb`
let integrationDeliveryConfigurationPost = {"config":{"optional":"example value for optional formVariables property for sample-integration","required":"example value for required formVariables property for sample-integration"},"name":"Example persistent store integration","on":false,"tags":["example-tag"]}; // IntegrationDeliveryConfigurationPost | 
apiInstance.createBigSegmentStoreIntegration(projectKey, environmentKey, integrationKey, integrationDeliveryConfigurationPost, (error, data, response) => {
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
 **integrationKey** | **String**| The integration key, either &#x60;redis&#x60; or &#x60;dynamodb&#x60; | 
 **integrationDeliveryConfigurationPost** | [**IntegrationDeliveryConfigurationPost**](IntegrationDeliveryConfigurationPost.md)|  | 

### Return type

[**BigSegmentStoreIntegration**](BigSegmentStoreIntegration.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


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

let apiInstance = new LaunchDarklyApi.IntegrationsBetaApi();
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


## deleteBigSegmentStoreIntegration

> deleteBigSegmentStoreIntegration(projectKey, environmentKey, integrationKey, integrationId)

Delete big segment store integration

Delete a persistent store integration. Each integration uses either Redis or DynamoDB.

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
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let integrationKey = "integrationKey_example"; // String | The integration key, either `redis` or `dynamodb`
let integrationId = "integrationId_example"; // String | The integration ID
apiInstance.deleteBigSegmentStoreIntegration(projectKey, environmentKey, integrationKey, integrationId, (error, data, response) => {
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
 **integrationKey** | **String**| The integration key, either &#x60;redis&#x60; or &#x60;dynamodb&#x60; | 
 **integrationId** | **String**| The integration ID | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
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

let apiInstance = new LaunchDarklyApi.IntegrationsBetaApi();
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


## getBigSegmentStoreIntegration

> BigSegmentStoreIntegration getBigSegmentStoreIntegration(projectKey, environmentKey, integrationKey, integrationId)

Get big segment store integration by ID

Get a big segment store integration by ID.

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
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let integrationKey = "integrationKey_example"; // String | The integration key, either `redis` or `dynamodb`
let integrationId = "integrationId_example"; // String | The integration ID
apiInstance.getBigSegmentStoreIntegration(projectKey, environmentKey, integrationKey, integrationId, (error, data, response) => {
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
 **integrationKey** | **String**| The integration key, either &#x60;redis&#x60; or &#x60;dynamodb&#x60; | 
 **integrationId** | **String**| The integration ID | 

### Return type

[**BigSegmentStoreIntegration**](BigSegmentStoreIntegration.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBigSegmentStoreIntegrations

> BigSegmentStoreIntegrationCollection getBigSegmentStoreIntegrations()

List all big segment store integrations

List all big segment store integrations.

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
apiInstance.getBigSegmentStoreIntegrations((error, data, response) => {
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

[**BigSegmentStoreIntegrationCollection**](BigSegmentStoreIntegrationCollection.md)

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

let apiInstance = new LaunchDarklyApi.IntegrationsBetaApi();
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

let apiInstance = new LaunchDarklyApi.IntegrationsBetaApi();
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


## patchBigSegmentStoreIntegration

> BigSegmentStoreIntegration patchBigSegmentStoreIntegration(projectKey, environmentKey, integrationKey, integrationId, patchOperation)

Update big segment store integration

Update a big segment store integration. Updating a big segment store requires a [JSON Patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](/#section/Overview/Updates).

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
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let integrationKey = "integrationKey_example"; // String | The integration key, either `redis` or `dynamodb`
let integrationId = "integrationId_example"; // String | The integration ID
let patchOperation = [new LaunchDarklyApi.PatchOperation()]; // [PatchOperation] | 
apiInstance.patchBigSegmentStoreIntegration(projectKey, environmentKey, integrationKey, integrationId, patchOperation, (error, data, response) => {
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
 **integrationKey** | **String**| The integration key, either &#x60;redis&#x60; or &#x60;dynamodb&#x60; | 
 **integrationId** | **String**| The integration ID | 
 **patchOperation** | [**[PatchOperation]**](PatchOperation.md)|  | 

### Return type

[**BigSegmentStoreIntegration**](BigSegmentStoreIntegration.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
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

let apiInstance = new LaunchDarklyApi.IntegrationsBetaApi();
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

let apiInstance = new LaunchDarklyApi.IntegrationsBetaApi();
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

