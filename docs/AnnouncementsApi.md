# LaunchDarklyApi.AnnouncementsApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAnnouncementPublic**](AnnouncementsApi.md#createAnnouncementPublic) | **POST** /api/v2/announcements | Create an announcement
[**deleteAnnouncementPublic**](AnnouncementsApi.md#deleteAnnouncementPublic) | **DELETE** /api/v2/announcements/{announcementId} | Delete an announcement
[**getAnnouncementsPublic**](AnnouncementsApi.md#getAnnouncementsPublic) | **GET** /api/v2/announcements | Get announcements
[**updateAnnouncementPublic**](AnnouncementsApi.md#updateAnnouncementPublic) | **PATCH** /api/v2/announcements/{announcementId} | Update an announcement



## createAnnouncementPublic

> AnnouncementResponse createAnnouncementPublic(createAnnouncementBody)

Create an announcement

Create an announcement

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.AnnouncementsApi();
let createAnnouncementBody = new LaunchDarklyApi.CreateAnnouncementBody(); // CreateAnnouncementBody | Announcement request body
apiInstance.createAnnouncementPublic(createAnnouncementBody, (error, data, response) => {
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
 **createAnnouncementBody** | [**CreateAnnouncementBody**](CreateAnnouncementBody.md)| Announcement request body | 

### Return type

[**AnnouncementResponse**](AnnouncementResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAnnouncementPublic

> deleteAnnouncementPublic(announcementId)

Delete an announcement

Delete an announcement

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.AnnouncementsApi();
let announcementId = 1234567890; // String | 
apiInstance.deleteAnnouncementPublic(announcementId, (error, data, response) => {
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
 **announcementId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAnnouncementsPublic

> GetAnnouncementsPublic200Response getAnnouncementsPublic(opts)

Get announcements

Get announcements

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.AnnouncementsApi();
let opts = {
  'status': active, // String | Filter announcements by status.
  'limit': 56, // Number | The number of announcements to return.
  'offset': 56 // Number | Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`.
};
apiInstance.getAnnouncementsPublic(opts, (error, data, response) => {
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
 **status** | **String**| Filter announcements by status. | [optional] 
 **limit** | **Number**| The number of announcements to return. | [optional] 
 **offset** | **Number**| Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query &#x60;limit&#x60;. | [optional] 

### Return type

[**GetAnnouncementsPublic200Response**](GetAnnouncementsPublic200Response.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateAnnouncementPublic

> AnnouncementResponse updateAnnouncementPublic(announcementId, announcementPatchOperation)

Update an announcement

Update an announcement

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.AnnouncementsApi();
let announcementId = 1234567890; // String | 
let announcementPatchOperation = [new LaunchDarklyApi.AnnouncementPatchOperation()]; // [AnnouncementPatchOperation] | Update announcement request body
apiInstance.updateAnnouncementPublic(announcementId, announcementPatchOperation, (error, data, response) => {
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
 **announcementId** | **String**|  | 
 **announcementPatchOperation** | [**[AnnouncementPatchOperation]**](AnnouncementPatchOperation.md)| Update announcement request body | 

### Return type

[**AnnouncementResponse**](AnnouncementResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

