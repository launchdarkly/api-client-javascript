# LaunchDarklyApi.AuditLogApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAuditLogEntries**](AuditLogApi.md#getAuditLogEntries) | **GET** /api/v2/auditlog | List audit log entries
[**getAuditLogEntry**](AuditLogApi.md#getAuditLogEntry) | **GET** /api/v2/auditlog/{id} | Get audit log entry



## getAuditLogEntries

> AuditLogEntryListingRepCollection getAuditLogEntries(opts)

List audit log entries

Get a list of all audit log entries. The query parameters let you restrict the results that return by date ranges, resource specifiers, or a full-text search query.  LaunchDarkly uses a resource specifier syntax to name resources or collections of resources. To learn more, read [About the resource specifier syntax](https://docs.launchdarkly.com/home/account/role-resources#about-the-resource-specifier-syntax). 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.AuditLogApi();
let opts = {
  'before': 789, // Number | A timestamp filter, expressed as a Unix epoch time in milliseconds.  All entries this returns occurred before the timestamp.
  'after': 789, // Number | A timestamp filter, expressed as a Unix epoch time in milliseconds. All entries this returns occurred after the timestamp.
  'q': "q_example", // String | Text to search for. You can search for the full or partial name of the resource.
  'limit': 789, // Number | A limit on the number of audit log entries that return. Set between 1 and 20. The default is 10.
  'spec': "spec_example" // String | A resource specifier that lets you filter audit log listings by resource
};
apiInstance.getAuditLogEntries(opts, (error, data, response) => {
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
 **before** | **Number**| A timestamp filter, expressed as a Unix epoch time in milliseconds.  All entries this returns occurred before the timestamp. | [optional] 
 **after** | **Number**| A timestamp filter, expressed as a Unix epoch time in milliseconds. All entries this returns occurred after the timestamp. | [optional] 
 **q** | **String**| Text to search for. You can search for the full or partial name of the resource. | [optional] 
 **limit** | **Number**| A limit on the number of audit log entries that return. Set between 1 and 20. The default is 10. | [optional] 
 **spec** | **String**| A resource specifier that lets you filter audit log listings by resource | [optional] 

### Return type

[**AuditLogEntryListingRepCollection**](AuditLogEntryListingRepCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAuditLogEntry

> AuditLogEntryRep getAuditLogEntry(id)

Get audit log entry

Fetch a detailed audit log entry representation. The detailed representation includes several fields that are not present in the summary representation, including:  - &#x60;delta&#x60;: the JSON patch body that was used in the request to update the entity - &#x60;previousVersion&#x60;: a JSON representation of the previous version of the entity - &#x60;currentVersion&#x60;: a JSON representation of the current version of the entity 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.AuditLogApi();
let id = "id_example"; // String | The ID of the audit log entry
apiInstance.getAuditLogEntry(id, (error, data, response) => {
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
 **id** | **String**| The ID of the audit log entry | 

### Return type

[**AuditLogEntryRep**](AuditLogEntryRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

