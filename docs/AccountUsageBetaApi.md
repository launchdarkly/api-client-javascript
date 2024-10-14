# LaunchDarklyApi.AccountUsageBetaApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDataExportEventsUsage**](AccountUsageBetaApi.md#getDataExportEventsUsage) | **GET** /api/v2/usage/data-export-events | Get data export events usage
[**getEvaluationsUsage**](AccountUsageBetaApi.md#getEvaluationsUsage) | **GET** /api/v2/usage/evaluations/{projectKey}/{environmentKey}/{featureFlagKey} | Get evaluations usage
[**getEventsUsage**](AccountUsageBetaApi.md#getEventsUsage) | **GET** /api/v2/usage/events/{type} | Get events usage
[**getExperimentationKeysUsage**](AccountUsageBetaApi.md#getExperimentationKeysUsage) | **GET** /api/v2/usage/experimentation-keys | Get experimentation keys usage
[**getExperimentationUnitsUsage**](AccountUsageBetaApi.md#getExperimentationUnitsUsage) | **GET** /api/v2/usage/experimentation-units | Get experimentation units usage
[**getMauSdksByType**](AccountUsageBetaApi.md#getMauSdksByType) | **GET** /api/v2/usage/mau/sdks | Get MAU SDKs by type
[**getMauUsage**](AccountUsageBetaApi.md#getMauUsage) | **GET** /api/v2/usage/mau | Get MAU usage
[**getMauUsageByCategory**](AccountUsageBetaApi.md#getMauUsageByCategory) | **GET** /api/v2/usage/mau/bycategory | Get MAU usage by category
[**getServiceConnectionUsage**](AccountUsageBetaApi.md#getServiceConnectionUsage) | **GET** /api/v2/usage/service-connections | Get service connection usage
[**getStreamUsage**](AccountUsageBetaApi.md#getStreamUsage) | **GET** /api/v2/usage/streams/{source} | Get stream usage
[**getStreamUsageBySdkVersion**](AccountUsageBetaApi.md#getStreamUsageBySdkVersion) | **GET** /api/v2/usage/streams/{source}/bysdkversion | Get stream usage by SDK version
[**getStreamUsageSdkversion**](AccountUsageBetaApi.md#getStreamUsageSdkversion) | **GET** /api/v2/usage/streams/{source}/sdkversions | Get stream usage SDK versions



## getDataExportEventsUsage

> SeriesIntervalsRep getDataExportEventsUsage(opts)

Get data export events usage

Get a time-series array of the number of monthly data export events from your account. The granularity is always daily, with a maximum of 31 days.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.AccountUsageBetaApi();
let opts = {
  'from': "from_example", // String | The series of data returned starts from this timestamp (Unix seconds). Defaults to the beginning of the current month.
  'to': "to_example", // String | The series of data returned ends at this timestamp (Unix seconds). Defaults to the current time.
  'projectKey': "projectKey_example", // String | A project key. If specified, `environmentKey` is required and results apply to the corresponding environment in this project.
  'environmentKey': "environmentKey_example" // String | An environment key. If specified, `projectKey` is required and results apply to the corresponding environment in this project.
};
apiInstance.getDataExportEventsUsage(opts, (error, data, response) => {
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
 **from** | **String**| The series of data returned starts from this timestamp (Unix seconds). Defaults to the beginning of the current month. | [optional] 
 **to** | **String**| The series of data returned ends at this timestamp (Unix seconds). Defaults to the current time. | [optional] 
 **projectKey** | **String**| A project key. If specified, &#x60;environmentKey&#x60; is required and results apply to the corresponding environment in this project. | [optional] 
 **environmentKey** | **String**| An environment key. If specified, &#x60;projectKey&#x60; is required and results apply to the corresponding environment in this project. | [optional] 

### Return type

[**SeriesIntervalsRep**](SeriesIntervalsRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEvaluationsUsage

> SeriesListRep getEvaluationsUsage(projectKey, environmentKey, featureFlagKey, opts)

Get evaluations usage

Get time-series arrays of the number of times a flag is evaluated, broken down by the variation that resulted from that evaluation. The granularity of the data depends on the age of the data requested. If the requested range is within the past two hours, minutely data is returned. If it is within the last two days, hourly data is returned. Otherwise, daily data is returned.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.AccountUsageBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let featureFlagKey = "featureFlagKey_example"; // String | The feature flag key
let opts = {
  'from': "from_example", // String | The series of data returned starts from this timestamp. Defaults to 30 days ago.
  'to': "to_example", // String | The series of data returned ends at this timestamp. Defaults to the current time.
  'tz': "tz_example" // String | The timezone to use for breaks between days when returning daily data.
};
apiInstance.getEvaluationsUsage(projectKey, environmentKey, featureFlagKey, opts, (error, data, response) => {
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
 **featureFlagKey** | **String**| The feature flag key | 
 **from** | **String**| The series of data returned starts from this timestamp. Defaults to 30 days ago. | [optional] 
 **to** | **String**| The series of data returned ends at this timestamp. Defaults to the current time. | [optional] 
 **tz** | **String**| The timezone to use for breaks between days when returning daily data. | [optional] 

### Return type

[**SeriesListRep**](SeriesListRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEventsUsage

> SeriesListRep getEventsUsage(type, opts)

Get events usage

Get time-series arrays of the number of times a flag is evaluated, broken down by the variation that resulted from that evaluation. The granularity of the data depends on the age of the data requested. If the requested range is within the past two hours, minutely data is returned. If it is within the last two days, hourly data is returned. Otherwise, daily data is returned.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.AccountUsageBetaApi();
let type = "type_example"; // String | The type of event to retrieve. Must be either `received` or `published`.
let opts = {
  'from': "from_example", // String | The series of data returned starts from this timestamp. Defaults to 24 hours ago.
  'to': "to_example" // String | The series of data returned ends at this timestamp. Defaults to the current time.
};
apiInstance.getEventsUsage(type, opts, (error, data, response) => {
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
 **type** | **String**| The type of event to retrieve. Must be either &#x60;received&#x60; or &#x60;published&#x60;. | 
 **from** | **String**| The series of data returned starts from this timestamp. Defaults to 24 hours ago. | [optional] 
 **to** | **String**| The series of data returned ends at this timestamp. Defaults to the current time. | [optional] 

### Return type

[**SeriesListRep**](SeriesListRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getExperimentationKeysUsage

> SeriesIntervalsRep getExperimentationKeysUsage(opts)

Get experimentation keys usage

Get a time-series array of the number of monthly experimentation keys from your account. The granularity is always daily, with a maximum of 31 days.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.AccountUsageBetaApi();
let opts = {
  'from': "from_example", // String | The series of data returned starts from this timestamp (Unix seconds). Defaults to the beginning of the current month.
  'to': "to_example", // String | The series of data returned ends at this timestamp (Unix seconds). Defaults to the current time.
  'projectKey': "projectKey_example", // String | A project key. If specified, `environmentKey` is required and results apply to the corresponding environment in this project.
  'environmentKey': "environmentKey_example" // String | An environment key. If specified, `projectKey` is required and results apply to the corresponding environment in this project.
};
apiInstance.getExperimentationKeysUsage(opts, (error, data, response) => {
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
 **from** | **String**| The series of data returned starts from this timestamp (Unix seconds). Defaults to the beginning of the current month. | [optional] 
 **to** | **String**| The series of data returned ends at this timestamp (Unix seconds). Defaults to the current time. | [optional] 
 **projectKey** | **String**| A project key. If specified, &#x60;environmentKey&#x60; is required and results apply to the corresponding environment in this project. | [optional] 
 **environmentKey** | **String**| An environment key. If specified, &#x60;projectKey&#x60; is required and results apply to the corresponding environment in this project. | [optional] 

### Return type

[**SeriesIntervalsRep**](SeriesIntervalsRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getExperimentationUnitsUsage

> SeriesIntervalsRep getExperimentationUnitsUsage(opts)

Get experimentation units usage

Get a time-series array of the number of monthly experimentation units from your account. The granularity is always daily, with a maximum of 31 days.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.AccountUsageBetaApi();
let opts = {
  'from': "from_example", // String | The series of data returned starts from this timestamp (Unix seconds). Defaults to the beginning of the current month.
  'to': "to_example", // String | The series of data returned ends at this timestamp (Unix seconds). Defaults to the current time.
  'projectKey': "projectKey_example", // String | A project key. If specified, `environmentKey` is required and results apply to the corresponding environment in this project.
  'environmentKey': "environmentKey_example" // String | An environment key. If specified, `projectKey` is required and results apply to the corresponding environment in this project.
};
apiInstance.getExperimentationUnitsUsage(opts, (error, data, response) => {
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
 **from** | **String**| The series of data returned starts from this timestamp (Unix seconds). Defaults to the beginning of the current month. | [optional] 
 **to** | **String**| The series of data returned ends at this timestamp (Unix seconds). Defaults to the current time. | [optional] 
 **projectKey** | **String**| A project key. If specified, &#x60;environmentKey&#x60; is required and results apply to the corresponding environment in this project. | [optional] 
 **environmentKey** | **String**| An environment key. If specified, &#x60;projectKey&#x60; is required and results apply to the corresponding environment in this project. | [optional] 

### Return type

[**SeriesIntervalsRep**](SeriesIntervalsRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMauSdksByType

> SdkListRep getMauSdksByType(opts)

Get MAU SDKs by type

Get a list of SDKs. These are all of the SDKs that have connected to LaunchDarkly by monthly active users (MAU) in the requested time period.&lt;br/&gt;&lt;br/&gt;Endpoints for retrieving monthly active users (MAU) do not return information about active context instances. After you have upgraded your LaunchDarkly SDK to use contexts instead of users, you should not rely on this endpoint. To learn more, read [Account usage metrics](https://docs.launchdarkly.com/home/account/metrics).

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.AccountUsageBetaApi();
let opts = {
  'from': "from_example", // String | The data returned starts from this timestamp. Defaults to seven days ago. The timestamp is in Unix milliseconds, for example, 1656694800000.
  'to': "to_example", // String | The data returned ends at this timestamp. Defaults to the current time. The timestamp is in Unix milliseconds, for example, 1657904400000.
  'sdktype': "sdktype_example" // String | The type of SDK with monthly active users (MAU) to list. Must be either `client` or `server`.
};
apiInstance.getMauSdksByType(opts, (error, data, response) => {
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
 **from** | **String**| The data returned starts from this timestamp. Defaults to seven days ago. The timestamp is in Unix milliseconds, for example, 1656694800000. | [optional] 
 **to** | **String**| The data returned ends at this timestamp. Defaults to the current time. The timestamp is in Unix milliseconds, for example, 1657904400000. | [optional] 
 **sdktype** | **String**| The type of SDK with monthly active users (MAU) to list. Must be either &#x60;client&#x60; or &#x60;server&#x60;. | [optional] 

### Return type

[**SdkListRep**](SdkListRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMauUsage

> SeriesListRep getMauUsage(opts)

Get MAU usage

Get a time-series array of the number of monthly active users (MAU) seen by LaunchDarkly from your account. The granularity is always daily.&lt;br/&gt;&lt;br/&gt;Endpoints for retrieving monthly active users (MAU) do not return information about active context instances. After you have upgraded your LaunchDarkly SDK to use contexts instead of users, you should not rely on this endpoint. To learn more, read [Account usage metrics](https://docs.launchdarkly.com/home/account/metrics).

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.AccountUsageBetaApi();
let opts = {
  'from': "from_example", // String | The series of data returned starts from this timestamp. Defaults to 30 days ago.
  'to': "to_example", // String | The series of data returned ends at this timestamp. Defaults to the current time.
  'project': "project_example", // String | A project key to filter results to. Can be specified multiple times, one query parameter per project key, to view data for multiple projects.
  'environment': "environment_example", // String | An environment key to filter results to. When using this parameter, exactly one project key must also be set. Can be specified multiple times as separate query parameters to view data for multiple environments within a single project.
  'sdktype': "sdktype_example", // String | An SDK type to filter results to. Can be specified multiple times, one query parameter per SDK type. Valid values: client, server
  'sdk': "sdk_example", // String | An SDK name to filter results to. Can be specified multiple times, one query parameter per SDK.
  'anonymous': "anonymous_example", // String | If specified, filters results to either anonymous or nonanonymous users.
  'groupby': "groupby_example" // String | If specified, returns data for each distinct value of the given field. Can be specified multiple times to group data by multiple dimensions (for example, to group by both project and SDK). Valid values: project, environment, sdktype, sdk, anonymous
};
apiInstance.getMauUsage(opts, (error, data, response) => {
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
 **from** | **String**| The series of data returned starts from this timestamp. Defaults to 30 days ago. | [optional] 
 **to** | **String**| The series of data returned ends at this timestamp. Defaults to the current time. | [optional] 
 **project** | **String**| A project key to filter results to. Can be specified multiple times, one query parameter per project key, to view data for multiple projects. | [optional] 
 **environment** | **String**| An environment key to filter results to. When using this parameter, exactly one project key must also be set. Can be specified multiple times as separate query parameters to view data for multiple environments within a single project. | [optional] 
 **sdktype** | **String**| An SDK type to filter results to. Can be specified multiple times, one query parameter per SDK type. Valid values: client, server | [optional] 
 **sdk** | **String**| An SDK name to filter results to. Can be specified multiple times, one query parameter per SDK. | [optional] 
 **anonymous** | **String**| If specified, filters results to either anonymous or nonanonymous users. | [optional] 
 **groupby** | **String**| If specified, returns data for each distinct value of the given field. Can be specified multiple times to group data by multiple dimensions (for example, to group by both project and SDK). Valid values: project, environment, sdktype, sdk, anonymous | [optional] 

### Return type

[**SeriesListRep**](SeriesListRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMauUsageByCategory

> SeriesListRep getMauUsageByCategory(opts)

Get MAU usage by category

Get time-series arrays of the number of monthly active users (MAU) seen by LaunchDarkly from your account, broken down by the category of users. The category is either &#x60;browser&#x60;, &#x60;mobile&#x60;, or &#x60;backend&#x60;.&lt;br/&gt;&lt;br/&gt;Endpoints for retrieving monthly active users (MAU) do not return information about active context instances. After you have upgraded your LaunchDarkly SDK to use contexts instead of users, you should not rely on this endpoint. To learn more, read [Account usage metrics](https://docs.launchdarkly.com/home/account/metrics).

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.AccountUsageBetaApi();
let opts = {
  'from': "from_example", // String | The series of data returned starts from this timestamp. Defaults to 30 days ago.
  'to': "to_example" // String | The series of data returned ends at this timestamp. Defaults to the current time.
};
apiInstance.getMauUsageByCategory(opts, (error, data, response) => {
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
 **from** | **String**| The series of data returned starts from this timestamp. Defaults to 30 days ago. | [optional] 
 **to** | **String**| The series of data returned ends at this timestamp. Defaults to the current time. | [optional] 

### Return type

[**SeriesListRep**](SeriesListRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getServiceConnectionUsage

> SeriesIntervalsRep getServiceConnectionUsage(opts)

Get service connection usage

Get a time-series array of the number of monthly service connections from your account. The granularity is always daily, with a maximum of 31 days.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.AccountUsageBetaApi();
let opts = {
  'from': "from_example", // String | The series of data returned starts from this timestamp (Unix seconds). Defaults to the beginning of the current month.
  'to': "to_example", // String | The series of data returned ends at this timestamp (Unix seconds). Defaults to the current time.
  'projectKey': "projectKey_example", // String | A project key. If specified, `environmentKey` is required and results apply to the corresponding environment in this project.
  'environmentKey': "environmentKey_example" // String | An environment key. If specified, `projectKey` is required and results apply to the corresponding environment in this project.
};
apiInstance.getServiceConnectionUsage(opts, (error, data, response) => {
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
 **from** | **String**| The series of data returned starts from this timestamp (Unix seconds). Defaults to the beginning of the current month. | [optional] 
 **to** | **String**| The series of data returned ends at this timestamp (Unix seconds). Defaults to the current time. | [optional] 
 **projectKey** | **String**| A project key. If specified, &#x60;environmentKey&#x60; is required and results apply to the corresponding environment in this project. | [optional] 
 **environmentKey** | **String**| An environment key. If specified, &#x60;projectKey&#x60; is required and results apply to the corresponding environment in this project. | [optional] 

### Return type

[**SeriesIntervalsRep**](SeriesIntervalsRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getStreamUsage

> SeriesListRep getStreamUsage(source, opts)

Get stream usage

Get a time-series array of the number of streaming connections to LaunchDarkly in each time period. The granularity of the data depends on the age of the data requested. If the requested range is within the past two hours, minutely data is returned. If it is within the last two days, hourly data is returned. Otherwise, daily data is returned.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.AccountUsageBetaApi();
let source = "source_example"; // String | The source of streaming connections to describe. Must be either `client` or `server`.
let opts = {
  'from': "from_example", // String | The series of data returned starts from this timestamp. Defaults to 30 days ago.
  'to': "to_example", // String | The series of data returned ends at this timestamp. Defaults to the current time.
  'tz': "tz_example" // String | The timezone to use for breaks between days when returning daily data.
};
apiInstance.getStreamUsage(source, opts, (error, data, response) => {
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
 **source** | **String**| The source of streaming connections to describe. Must be either &#x60;client&#x60; or &#x60;server&#x60;. | 
 **from** | **String**| The series of data returned starts from this timestamp. Defaults to 30 days ago. | [optional] 
 **to** | **String**| The series of data returned ends at this timestamp. Defaults to the current time. | [optional] 
 **tz** | **String**| The timezone to use for breaks between days when returning daily data. | [optional] 

### Return type

[**SeriesListRep**](SeriesListRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getStreamUsageBySdkVersion

> SeriesListRep getStreamUsageBySdkVersion(source, opts)

Get stream usage by SDK version

Get multiple series of the number of streaming connections to LaunchDarkly in each time period, separated by SDK type and version. Information about each series is in the metadata array. The granularity of the data depends on the age of the data requested. If the requested range is within the past 2 hours, minutely data is returned. If it is within the last two days, hourly data is returned. Otherwise, daily data is returned.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.AccountUsageBetaApi();
let source = "source_example"; // String | The source of streaming connections to describe. Must be either `client` or `server`.
let opts = {
  'from': "from_example", // String | The series of data returned starts from this timestamp. Defaults to 24 hours ago.
  'to': "to_example", // String | The series of data returned ends at this timestamp. Defaults to the current time.
  'tz': "tz_example", // String | The timezone to use for breaks between days when returning daily data.
  'sdk': "sdk_example", // String | If included, this filters the returned series to only those that match this SDK name.
  'version': "version_example" // String | If included, this filters the returned series to only those that match this SDK version.
};
apiInstance.getStreamUsageBySdkVersion(source, opts, (error, data, response) => {
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
 **source** | **String**| The source of streaming connections to describe. Must be either &#x60;client&#x60; or &#x60;server&#x60;. | 
 **from** | **String**| The series of data returned starts from this timestamp. Defaults to 24 hours ago. | [optional] 
 **to** | **String**| The series of data returned ends at this timestamp. Defaults to the current time. | [optional] 
 **tz** | **String**| The timezone to use for breaks between days when returning daily data. | [optional] 
 **sdk** | **String**| If included, this filters the returned series to only those that match this SDK name. | [optional] 
 **version** | **String**| If included, this filters the returned series to only those that match this SDK version. | [optional] 

### Return type

[**SeriesListRep**](SeriesListRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getStreamUsageSdkversion

> SdkVersionListRep getStreamUsageSdkversion(source)

Get stream usage SDK versions

Get a list of SDK version objects, which contain an SDK name and version. These are all of the SDKs that have connected to LaunchDarkly from your account in the past 60 days.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.AccountUsageBetaApi();
let source = "source_example"; // String | The source of streaming connections to describe. Must be either `client` or `server`.
apiInstance.getStreamUsageSdkversion(source, (error, data, response) => {
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
 **source** | **String**| The source of streaming connections to describe. Must be either &#x60;client&#x60; or &#x60;server&#x60;. | 

### Return type

[**SdkVersionListRep**](SdkVersionListRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

