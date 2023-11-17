# LaunchDarklyApi.ApplicationsBetaApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createApplication**](ApplicationsBetaApi.md#createApplication) | **POST** /api/v2/applications | Post application
[**deleteApplication**](ApplicationsBetaApi.md#deleteApplication) | **DELETE** /api/v2/applications/{applicationKey} | Delete application
[**deleteApplicationVersion**](ApplicationsBetaApi.md#deleteApplicationVersion) | **DELETE** /api/v2/applications/{applicationKey}/versions/{versionKey} | Delete application version
[**getApplication**](ApplicationsBetaApi.md#getApplication) | **GET** /api/v2/applications/{applicationKey} | Get application by key
[**getApplicationVersions**](ApplicationsBetaApi.md#getApplicationVersions) | **GET** /api/v2/applications/{applicationKey}/versions | Get application versions by application key
[**getApplications**](ApplicationsBetaApi.md#getApplications) | **GET** /api/v2/applications | Get applications
[**patchApplication**](ApplicationsBetaApi.md#patchApplication) | **PATCH** /api/v2/applications/{applicationKey} | Update application
[**patchApplicationVersion**](ApplicationsBetaApi.md#patchApplicationVersion) | **PATCH** /api/v2/applications/{applicationKey}/versions/{versionKey} | Update application version
[**postApplicationVersion**](ApplicationsBetaApi.md#postApplicationVersion) | **POST** /api/v2/applications/{applicationKey}/versions | Post application version



## createApplication

> ApplicationRep createApplication(createApplicationInput)

Post application

Create a new application

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ApplicationsBetaApi();
let createApplicationInput = new LaunchDarklyApi.CreateApplicationInput(); // CreateApplicationInput | 
apiInstance.createApplication(createApplicationInput, (error, data, response) => {
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
 **createApplicationInput** | [**CreateApplicationInput**](CreateApplicationInput.md)|  | 

### Return type

[**ApplicationRep**](ApplicationRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteApplication

> deleteApplication(applicationKey)

Delete application

Delete an application.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ApplicationsBetaApi();
let applicationKey = "applicationKey_example"; // String | The application key
apiInstance.deleteApplication(applicationKey, (error, data, response) => {
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
 **applicationKey** | **String**| The application key | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteApplicationVersion

> deleteApplicationVersion(applicationKey, versionKey)

Delete application version

Delete an application version.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ApplicationsBetaApi();
let applicationKey = "applicationKey_example"; // String | The application key
let versionKey = "versionKey_example"; // String | The application version key
apiInstance.deleteApplicationVersion(applicationKey, versionKey, (error, data, response) => {
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
 **applicationKey** | **String**| The application key | 
 **versionKey** | **String**| The application version key | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getApplication

> ApplicationRep getApplication(applicationKey, opts)

Get application by key

 Retrieve an application by the application key.  ### Expanding the application response  LaunchDarkly supports expanding the \&quot;Get application\&quot; response to include additional fields.  To expand the response, append the &#x60;expand&#x60; query parameter and include the following:  * &#x60;flags&#x60; includes details on the flags that have been evaluated by the application  For example, use &#x60;?expand&#x3D;flags&#x60; to include the &#x60;flags&#x60; field in the response. By default, this field is **not** included in the response. 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ApplicationsBetaApi();
let applicationKey = "applicationKey_example"; // String | The application key
let opts = {
  'expand': "expand_example" // String | A comma-separated list of properties that can reveal additional information in the response. Options: `flags`.
};
apiInstance.getApplication(applicationKey, opts, (error, data, response) => {
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
 **applicationKey** | **String**| The application key | 
 **expand** | **String**| A comma-separated list of properties that can reveal additional information in the response. Options: &#x60;flags&#x60;. | [optional] 

### Return type

[**ApplicationRep**](ApplicationRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getApplicationVersions

> ApplicationVersionsCollectionRep getApplicationVersions(applicationKey, opts)

Get application versions by application key

Get a list of versions for a specific application in an account.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ApplicationsBetaApi();
let applicationKey = "applicationKey_example"; // String | The application key
let opts = {
  'filter': "filter_example", // String | Accepts filter by `key`, `name`, `supported`, and `autoAdded`. Example: `filter=key equals 'test-key'`. To learn more about the filter syntax, read [Filtering applications and application versions](/tag/Applications-(beta)#filtering-contexts-and-context-instances).
  'limit': 789, // Number | The number of versions to return. Defaults to 50.
  'offset': 789, // Number | Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`.
  'sort': "sort_example" // String | Accepts sorting order and fields. Fields can be comma separated. Possible fields are `creationDate`, `name`. Examples: `sort=name` sort by names ascending, `sort=-name,creationDate` sort by names descending and creationDate ascending.
};
apiInstance.getApplicationVersions(applicationKey, opts, (error, data, response) => {
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
 **applicationKey** | **String**| The application key | 
 **filter** | **String**| Accepts filter by &#x60;key&#x60;, &#x60;name&#x60;, &#x60;supported&#x60;, and &#x60;autoAdded&#x60;. Example: &#x60;filter&#x3D;key equals &#39;test-key&#39;&#x60;. To learn more about the filter syntax, read [Filtering applications and application versions](/tag/Applications-(beta)#filtering-contexts-and-context-instances). | [optional] 
 **limit** | **Number**| The number of versions to return. Defaults to 50. | [optional] 
 **offset** | **Number**| Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query &#x60;limit&#x60;. | [optional] 
 **sort** | **String**| Accepts sorting order and fields. Fields can be comma separated. Possible fields are &#x60;creationDate&#x60;, &#x60;name&#x60;. Examples: &#x60;sort&#x3D;name&#x60; sort by names ascending, &#x60;sort&#x3D;-name,creationDate&#x60; sort by names descending and creationDate ascending. | [optional] 

### Return type

[**ApplicationVersionsCollectionRep**](ApplicationVersionsCollectionRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getApplications

> ApplicationCollectionRep getApplications(opts)

Get applications

 Get a list of applications.  ### Expanding the applications response  LaunchDarkly supports expanding the \&quot;Get applications\&quot; response to include additional fields.  To expand the response, append the &#x60;expand&#x60; query parameter and include the following:  * &#x60;flags&#x60; includes details on the flags that have been evaluated by the application  For example, use &#x60;?expand&#x3D;flags&#x60; to include the &#x60;flags&#x60; field in the response. By default, this field is **not** included in the response. 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ApplicationsBetaApi();
let opts = {
  'filter': "filter_example", // String | Accepts filter by `key`, `name`, `kind`, and `autoAdded`. Example: `filter=kind anyOf ['mobile', 'server'],key equals 'test-key'`. To learn more about the filter syntax, read [Filtering applications and application versions](/tag/Applications-(beta)#filtering-contexts-and-context-instances).
  'limit': 789, // Number | The number of applications to return. Defaults to 10.
  'offset': 789, // Number | Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`.
  'sort': "sort_example", // String | Accepts sorting order and fields. Fields can be comma separated. Possible fields are `creationDate`, `name`. Examples: `sort=name` sort by names ascending, `sort=-name,creationDate` sort by names descending and creationDate ascending.
  'expand': "expand_example" // String | A comma-separated list of properties that can reveal additional information in the response. Options: `flags`.
};
apiInstance.getApplications(opts, (error, data, response) => {
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
 **filter** | **String**| Accepts filter by &#x60;key&#x60;, &#x60;name&#x60;, &#x60;kind&#x60;, and &#x60;autoAdded&#x60;. Example: &#x60;filter&#x3D;kind anyOf [&#39;mobile&#39;, &#39;server&#39;],key equals &#39;test-key&#39;&#x60;. To learn more about the filter syntax, read [Filtering applications and application versions](/tag/Applications-(beta)#filtering-contexts-and-context-instances). | [optional] 
 **limit** | **Number**| The number of applications to return. Defaults to 10. | [optional] 
 **offset** | **Number**| Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query &#x60;limit&#x60;. | [optional] 
 **sort** | **String**| Accepts sorting order and fields. Fields can be comma separated. Possible fields are &#x60;creationDate&#x60;, &#x60;name&#x60;. Examples: &#x60;sort&#x3D;name&#x60; sort by names ascending, &#x60;sort&#x3D;-name,creationDate&#x60; sort by names descending and creationDate ascending. | [optional] 
 **expand** | **String**| A comma-separated list of properties that can reveal additional information in the response. Options: &#x60;flags&#x60;. | [optional] 

### Return type

[**ApplicationCollectionRep**](ApplicationCollectionRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## patchApplication

> ApplicationRep patchApplication(applicationKey, patchOperation)

Update application

Update an application. You can update the &#x60;description&#x60; and &#x60;kind&#x60; fields. Requires a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes to the application. To learn more, read [Updates](/#section/Overview/Updates).

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ApplicationsBetaApi();
let applicationKey = "applicationKey_example"; // String | The application key
let patchOperation = [{"op":"replace","path":"/description","value":"Updated description"}]; // [PatchOperation] | 
apiInstance.patchApplication(applicationKey, patchOperation, (error, data, response) => {
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
 **applicationKey** | **String**| The application key | 
 **patchOperation** | [**[PatchOperation]**](PatchOperation.md)|  | 

### Return type

[**ApplicationRep**](ApplicationRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## patchApplicationVersion

> ApplicationVersionRep patchApplicationVersion(applicationKey, versionKey, patchOperation)

Update application version

Update an application version. You can update the &#x60;supported&#x60; field. Requires a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes to the application version. To learn more, read [Updates](/#section/Overview/Updates).

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ApplicationsBetaApi();
let applicationKey = "applicationKey_example"; // String | The application key
let versionKey = "versionKey_example"; // String | The application version key
let patchOperation = [{"op":"replace","path":"/supported","value":"false"}]; // [PatchOperation] | 
apiInstance.patchApplicationVersion(applicationKey, versionKey, patchOperation, (error, data, response) => {
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
 **applicationKey** | **String**| The application key | 
 **versionKey** | **String**| The application version key | 
 **patchOperation** | [**[PatchOperation]**](PatchOperation.md)|  | 

### Return type

[**ApplicationVersionRep**](ApplicationVersionRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postApplicationVersion

> ApplicationVersionRep postApplicationVersion(applicationKey, createApplicationVersionInput)

Post application version

Create an application version

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ApplicationsBetaApi();
let applicationKey = "applicationKey_example"; // String | The application key
let createApplicationVersionInput = new LaunchDarklyApi.CreateApplicationVersionInput(); // CreateApplicationVersionInput | 
apiInstance.postApplicationVersion(applicationKey, createApplicationVersionInput, (error, data, response) => {
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
 **applicationKey** | **String**| The application key | 
 **createApplicationVersionInput** | [**CreateApplicationVersionInput**](CreateApplicationVersionInput.md)|  | 

### Return type

[**ApplicationVersionRep**](ApplicationVersionRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

