# LaunchDarklyRestApi.AuditLogApi

All URIs are relative to *https://app.launchdarkly.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAuditLogEntries**](AuditLogApi.md#getAuditLogEntries) | **GET** /auditlog | Fetch a list of all audit log entries
[**getAuditLogEntry**](AuditLogApi.md#getAuditLogEntry) | **GET** /auditlog/{resourceId} | Get an audit log entry by ID


<a name="getAuditLogEntries"></a>
# **getAuditLogEntries**
> AuditLogEntries getAuditLogEntries()

Fetch a list of all audit log entries

### Example
```javascript
var LaunchDarklyRestApi = require('launch_darkly_rest_api');
var defaultClient = LaunchDarklyRestApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyRestApi.AuditLogApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAuditLogEntries(callback);
```

### Parameters
This endpoint does not need any parameter.

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

Get an audit log entry by ID

### Example
```javascript
var LaunchDarklyRestApi = require('launch_darkly_rest_api');
var defaultClient = LaunchDarklyRestApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

var apiInstance = new LaunchDarklyRestApi.AuditLogApi();

var resourceId = "resourceId_example"; // String | The resource ID


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
 **resourceId** | **String**| The resource ID | 

### Return type

[**AuditLogEntry**](AuditLogEntry.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

