# LaunchDarklyApi.PersistentStoreIntegrationsBetaApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBigSegmentStoreIntegration**](PersistentStoreIntegrationsBetaApi.md#createBigSegmentStoreIntegration) | **POST** /api/v2/integration-capabilities/big-segment-store/{projectKey}/{environmentKey}/{integrationKey} | Create big segment store integration
[**deleteBigSegmentStoreIntegration**](PersistentStoreIntegrationsBetaApi.md#deleteBigSegmentStoreIntegration) | **DELETE** /api/v2/integration-capabilities/big-segment-store/{projectKey}/{environmentKey}/{integrationKey}/{integrationId} | Delete big segment store integration
[**getBigSegmentStoreIntegration**](PersistentStoreIntegrationsBetaApi.md#getBigSegmentStoreIntegration) | **GET** /api/v2/integration-capabilities/big-segment-store/{projectKey}/{environmentKey}/{integrationKey}/{integrationId} | Get big segment store integration by ID
[**getBigSegmentStoreIntegrations**](PersistentStoreIntegrationsBetaApi.md#getBigSegmentStoreIntegrations) | **GET** /api/v2/integration-capabilities/big-segment-store | List all big segment store integrations
[**patchBigSegmentStoreIntegration**](PersistentStoreIntegrationsBetaApi.md#patchBigSegmentStoreIntegration) | **PATCH** /api/v2/integration-capabilities/big-segment-store/{projectKey}/{environmentKey}/{integrationKey}/{integrationId} | Update big segment store integration



## createBigSegmentStoreIntegration

> BigSegmentStoreIntegration createBigSegmentStoreIntegration(projectKey, environmentKey, integrationKey, integrationDeliveryConfigurationPost)

Create big segment store integration

 Create a persistent store integration.  If you are using server-side SDKs, segments synced from external tools and larger list-based segments require a persistent store within your infrastructure. LaunchDarkly keeps the persistent store up to date and consults it during flag evaluation.  You can use either Redis or DynamoDB as your persistent store. When you create a persistent store integration, the fields in the &#x60;config&#x60; object in the request vary depending on which persistent store you use.  If you are using Redis to create your persistent store integration, you will need to know:  * Your Redis host * Your Redis port * Your Redis username * Your Redis password * Whether or not LaunchDarkly should connect using TLS  If you are using DynamoDB to create your persistent store integration, you will need to know:  * Your DynamoDB table name. The table must have the following schema:   * Partition key: &#x60;namespace&#x60; (string)   * Sort key: &#x60;key&#x60; (string) * Your DynamoDB Amazon Web Services (AWS) region. * Your AWS role Amazon Resource Name (ARN). This is the role that LaunchDarkly will assume to manage your DynamoDB table. * The External ID you specified when creating your Amazon Resource Name (ARN).  To learn more, read [Segment configuration](https://launchdarkly.com/docs/home/flags/segment-config). 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.PersistentStoreIntegrationsBetaApi();
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

let apiInstance = new LaunchDarklyApi.PersistentStoreIntegrationsBetaApi();
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

let apiInstance = new LaunchDarklyApi.PersistentStoreIntegrationsBetaApi();
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

let apiInstance = new LaunchDarklyApi.PersistentStoreIntegrationsBetaApi();
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


## patchBigSegmentStoreIntegration

> BigSegmentStoreIntegration patchBigSegmentStoreIntegration(projectKey, environmentKey, integrationKey, integrationId, patchOperation)

Update big segment store integration

Update a big segment store integration. Updating a big segment store requires a [JSON Patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.PersistentStoreIntegrationsBetaApi();
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

