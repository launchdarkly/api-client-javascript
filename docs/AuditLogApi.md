# LaunchDarklyApi.AuditLogApi

All URIs are relative to *https://app.launchdarkly.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAuditLogEntries**](AuditLogApi.md#getAuditLogEntries) | **GET** /auditlog | Get a list of all audit log entries. The query parameters allow you to restrict the returned results by date ranges, resource specifiers, or a full-text search query.
[**getAuditLogEntry**](AuditLogApi.md#getAuditLogEntry) | **GET** /auditlog/{resourceId} | Use this endpoint to fetch a single audit log entry by its resouce ID.


<a name="getAuditLogEntries"></a>
# **getAuditLogEntries**
> AuditLogEntries getAuditLogEntries(opts)

Get a list of all audit log entries. The query parameters allow you to restrict the returned results by date ranges, resource specifiers, or a full-text search query.

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.AuditLogApi();

var opts = { 
  'before': 789, // Number | A timestamp filter, expressed as a Unix epoch time in milliseconds. All entries returned will have before this timestamp.
  'after': 789, // Number | A timestamp filter, expressed as a Unix epoch time in milliseconds. All entries returned will have occurred after this timestamp.
  'q': "q_example", // String | Text to search for. You can search for the full or partial name of the resource involved or full or partial email address of the member who made the change.
  'limit': 8.14, // Number | A limit on the number of audit log entries to be returned, between 1 and 20.
  'spec': "spec_example" // String | A resource specifier, allowing you to filter audit log listings by resource.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAuditLogEntries(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **before** | **Number**| A timestamp filter, expressed as a Unix epoch time in milliseconds. All entries returned will have before this timestamp. | [optional] 
 **after** | **Number**| A timestamp filter, expressed as a Unix epoch time in milliseconds. All entries returned will have occurred after this timestamp. | [optional] 
 **q** | **String**| Text to search for. You can search for the full or partial name of the resource involved or full or partial email address of the member who made the change. | [optional] 
 **limit** | **Number**| A limit on the number of audit log entries to be returned, between 1 and 20. | [optional] 
 **spec** | **String**| A resource specifier, allowing you to filter audit log listings by resource. | [optional] 

### Return type

[**AuditLogEntries**](AuditLogEntries.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAuditLogEntry"></a>
# **getAuditLogEntry**
> AuditLogEntry getAuditLogEntry(resourceId, )

Use this endpoint to fetch a single audit log entry by its resouce ID.

### Example
```javascript
var LaunchDarklyApi = require('launchdarkly-api');
var defaultClient = LaunchDarklyApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyApi.AuditLogApi();

var resourceId = "resourceId_example"; // String | The resource ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAuditLogEntry(resourceId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resourceId** | **String**| The resource ID. | 

### Return type

[**AuditLogEntry**](AuditLogEntry.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

