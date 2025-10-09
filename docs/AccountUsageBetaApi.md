# LaunchDarklyApi.AccountUsageBetaApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getContextsClientsideUsage**](AccountUsageBetaApi.md#getContextsClientsideUsage) | **GET** /api/v2/usage/clientside-contexts | Get contexts clientside usage
[**getContextsServersideUsage**](AccountUsageBetaApi.md#getContextsServersideUsage) | **GET** /api/v2/usage/serverside-contexts | Get contexts serverside usage
[**getContextsTotalUsage**](AccountUsageBetaApi.md#getContextsTotalUsage) | **GET** /api/v2/usage/total-contexts | Get contexts total usage
[**getDataExportEventsUsage**](AccountUsageBetaApi.md#getDataExportEventsUsage) | **GET** /api/v2/usage/data-export-events | Get data export events usage
[**getEvaluationsUsage**](AccountUsageBetaApi.md#getEvaluationsUsage) | **GET** /api/v2/usage/evaluations/{projectKey}/{environmentKey}/{featureFlagKey} | Get evaluations usage
[**getEventsUsage**](AccountUsageBetaApi.md#getEventsUsage) | **GET** /api/v2/usage/events/{type} | Get events usage
[**getExperimentationEventsUsage**](AccountUsageBetaApi.md#getExperimentationEventsUsage) | **GET** /api/v2/usage/experimentation-events | Get experimentation events usage
[**getExperimentationKeysUsage**](AccountUsageBetaApi.md#getExperimentationKeysUsage) | **GET** /api/v2/usage/experimentation-keys | Get experimentation keys usage
[**getMauSdksByType**](AccountUsageBetaApi.md#getMauSdksByType) | **GET** /api/v2/usage/mau/sdks | Get MAU SDKs by type
[**getMauUsage**](AccountUsageBetaApi.md#getMauUsage) | **GET** /api/v2/usage/mau | Get MAU usage
[**getMauUsageByCategory**](AccountUsageBetaApi.md#getMauUsageByCategory) | **GET** /api/v2/usage/mau/bycategory | Get MAU usage by category
[**getObservabilityErrorsUsage**](AccountUsageBetaApi.md#getObservabilityErrorsUsage) | **GET** /api/v2/usage/observability/errors | Get observability errors usage
[**getObservabilityLogsUsage**](AccountUsageBetaApi.md#getObservabilityLogsUsage) | **GET** /api/v2/usage/observability/logs | Get observability logs usage
[**getObservabilitySessionsUsage**](AccountUsageBetaApi.md#getObservabilitySessionsUsage) | **GET** /api/v2/usage/observability/sessions | Get observability sessions usage
[**getObservabilityTracesUsage**](AccountUsageBetaApi.md#getObservabilityTracesUsage) | **GET** /api/v2/usage/observability/traces | Get observability traces usage
[**getServiceConnectionsUsage**](AccountUsageBetaApi.md#getServiceConnectionsUsage) | **GET** /api/v2/usage/service-connections | Get service connections usage
[**getStreamUsage**](AccountUsageBetaApi.md#getStreamUsage) | **GET** /api/v2/usage/streams/{source} | Get stream usage
[**getStreamUsageBySdkVersion**](AccountUsageBetaApi.md#getStreamUsageBySdkVersion) | **GET** /api/v2/usage/streams/{source}/bysdkversion | Get stream usage by SDK version
[**getStreamUsageSdkversion**](AccountUsageBetaApi.md#getStreamUsageSdkversion) | **GET** /api/v2/usage/streams/{source}/sdkversions | Get stream usage SDK versions



## getContextsClientsideUsage

> SeriesListRep getContextsClientsideUsage(opts)

Get contexts clientside usage

Get a detailed time series of the number of context key usages observed by LaunchDarkly in your account, including non-primary context kinds. Use this for breakdowns that go beyond the primary-only aggregation of MAU endpoints. The counts reflect data reported by client-side SDKs.&lt;br/&gt;&lt;br/&gt;The supported granularity varies by aggregation type. The maximum time range is 365 days.

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
  'from': "from_example", // String | The series of data returned starts from this timestamp (Unix milliseconds). Defaults to the beginning of the current month.
  'to': "to_example", // String | The series of data returned ends at this timestamp (Unix milliseconds). Defaults to the current time.
  'projectKey': "projectKey_example", // String | A project key to filter results by. Can be specified multiple times, one query parameter per project key.
  'environmentKey': "environmentKey_example", // String | An environment key to filter results by. If specified, exactly one `projectKey` must be provided. Can be specified multiple times, one query parameter per environment key.
  'contextKind': "contextKind_example", // String | A context kind to filter results by. Can be specified multiple times, one query parameter per context kind.
  'sdkName': "sdkName_example", // String | An SDK name to filter results by. Can be specified multiple times, one query parameter per SDK name.
  'anonymous': "anonymous_example", // String | An anonymous value to filter results by. Can be specified multiple times, one query parameter per anonymous value.<br/>Valid values: `true`, `false`.
  'groupBy': "groupBy_example", // String | If specified, returns data for each distinct value of the given field. `contextKind` is always included as a grouping dimension. Can be specified multiple times to group data by multiple dimensions, one query parameter per dimension.<br/>Valid values: `projectId`, `environmentId`, `sdkName`, `sdkAppId`, `anonymousV2`.
  'aggregationType': "aggregationType_example", // String | Specifies the aggregation method. Defaults to `month_to_date`.<br/>Valid values: `month_to_date`, `incremental`, `rolling_30d`.
  'granularity': "granularity_example" // String | Specifies the data granularity. Defaults to `daily`. Valid values depend on `aggregationType`: **month_to_date** supports `daily` and `monthly`; **incremental** and **rolling_30d** support `daily` only.
};
apiInstance.getContextsClientsideUsage(opts, (error, data, response) => {
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
 **from** | **String**| The series of data returned starts from this timestamp (Unix milliseconds). Defaults to the beginning of the current month. | [optional] 
 **to** | **String**| The series of data returned ends at this timestamp (Unix milliseconds). Defaults to the current time. | [optional] 
 **projectKey** | **String**| A project key to filter results by. Can be specified multiple times, one query parameter per project key. | [optional] 
 **environmentKey** | **String**| An environment key to filter results by. If specified, exactly one &#x60;projectKey&#x60; must be provided. Can be specified multiple times, one query parameter per environment key. | [optional] 
 **contextKind** | **String**| A context kind to filter results by. Can be specified multiple times, one query parameter per context kind. | [optional] 
 **sdkName** | **String**| An SDK name to filter results by. Can be specified multiple times, one query parameter per SDK name. | [optional] 
 **anonymous** | **String**| An anonymous value to filter results by. Can be specified multiple times, one query parameter per anonymous value.&lt;br/&gt;Valid values: &#x60;true&#x60;, &#x60;false&#x60;. | [optional] 
 **groupBy** | **String**| If specified, returns data for each distinct value of the given field. &#x60;contextKind&#x60; is always included as a grouping dimension. Can be specified multiple times to group data by multiple dimensions, one query parameter per dimension.&lt;br/&gt;Valid values: &#x60;projectId&#x60;, &#x60;environmentId&#x60;, &#x60;sdkName&#x60;, &#x60;sdkAppId&#x60;, &#x60;anonymousV2&#x60;. | [optional] 
 **aggregationType** | **String**| Specifies the aggregation method. Defaults to &#x60;month_to_date&#x60;.&lt;br/&gt;Valid values: &#x60;month_to_date&#x60;, &#x60;incremental&#x60;, &#x60;rolling_30d&#x60;. | [optional] 
 **granularity** | **String**| Specifies the data granularity. Defaults to &#x60;daily&#x60;. Valid values depend on &#x60;aggregationType&#x60;: **month_to_date** supports &#x60;daily&#x60; and &#x60;monthly&#x60;; **incremental** and **rolling_30d** support &#x60;daily&#x60; only. | [optional] 

### Return type

[**SeriesListRep**](SeriesListRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getContextsServersideUsage

> SeriesListRep getContextsServersideUsage(opts)

Get contexts serverside usage

Get a detailed time series of the number of context key usages observed by LaunchDarkly in your account, including non-primary context kinds. Use this for breakdowns that go beyond the primary-only aggregation of MAU endpoints. The counts reflect data reported by server-side SDKs.&lt;br/&gt;&lt;br/&gt;The supported granularity varies by aggregation type. The maximum time range is 365 days.

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
  'projectKey': "projectKey_example", // String | A project key to filter results by. Can be specified multiple times, one query parameter per project key.
  'environmentKey': "environmentKey_example", // String | An environment key to filter results by. If specified, exactly one `projectKey` must be provided. Can be specified multiple times, one query parameter per environment key.
  'contextKind': "contextKind_example", // String | A context kind to filter results by. Can be specified multiple times, one query parameter per context kind.
  'sdkName': "sdkName_example", // String | An SDK name to filter results by. Can be specified multiple times, one query parameter per SDK name.
  'anonymous': "anonymous_example", // String | An anonymous value to filter results by. Can be specified multiple times, one query parameter per anonymous value.<br/>Valid values: `true`, `false`.
  'groupBy': "groupBy_example", // String | If specified, returns data for each distinct value of the given field. `contextKind` is always included as a grouping dimension. Can be specified multiple times to group data by multiple dimensions, one query parameter per dimension.<br/>Valid values: `projectId`, `environmentId`, `sdkName`, `sdkAppId`, `anonymousV2`.
  'aggregationType': "aggregationType_example", // String | Specifies the aggregation method. Defaults to `month_to_date`.<br/>Valid values: `month_to_date`, `incremental`, `rolling_30d`.
  'granularity': "granularity_example" // String | Specifies the data granularity. Defaults to `daily`. Valid values depend on `aggregationType`: **month_to_date** supports `daily` and `monthly`; **incremental** and **rolling_30d** support `daily` only.
};
apiInstance.getContextsServersideUsage(opts, (error, data, response) => {
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
 **projectKey** | **String**| A project key to filter results by. Can be specified multiple times, one query parameter per project key. | [optional] 
 **environmentKey** | **String**| An environment key to filter results by. If specified, exactly one &#x60;projectKey&#x60; must be provided. Can be specified multiple times, one query parameter per environment key. | [optional] 
 **contextKind** | **String**| A context kind to filter results by. Can be specified multiple times, one query parameter per context kind. | [optional] 
 **sdkName** | **String**| An SDK name to filter results by. Can be specified multiple times, one query parameter per SDK name. | [optional] 
 **anonymous** | **String**| An anonymous value to filter results by. Can be specified multiple times, one query parameter per anonymous value.&lt;br/&gt;Valid values: &#x60;true&#x60;, &#x60;false&#x60;. | [optional] 
 **groupBy** | **String**| If specified, returns data for each distinct value of the given field. &#x60;contextKind&#x60; is always included as a grouping dimension. Can be specified multiple times to group data by multiple dimensions, one query parameter per dimension.&lt;br/&gt;Valid values: &#x60;projectId&#x60;, &#x60;environmentId&#x60;, &#x60;sdkName&#x60;, &#x60;sdkAppId&#x60;, &#x60;anonymousV2&#x60;. | [optional] 
 **aggregationType** | **String**| Specifies the aggregation method. Defaults to &#x60;month_to_date&#x60;.&lt;br/&gt;Valid values: &#x60;month_to_date&#x60;, &#x60;incremental&#x60;, &#x60;rolling_30d&#x60;. | [optional] 
 **granularity** | **String**| Specifies the data granularity. Defaults to &#x60;daily&#x60;. Valid values depend on &#x60;aggregationType&#x60;: **month_to_date** supports &#x60;daily&#x60; and &#x60;monthly&#x60;; **incremental** and **rolling_30d** support &#x60;daily&#x60; only. | [optional] 

### Return type

[**SeriesListRep**](SeriesListRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getContextsTotalUsage

> SeriesListRep getContextsTotalUsage(opts)

Get contexts total usage

Get a detailed time series of the number of context key usages observed by LaunchDarkly in your account, including non-primary context kinds. Use this for breakdowns that go beyond the primary-only aggregation of MAU endpoints.&lt;br/&gt;&lt;br/&gt;The supported granularity varies by aggregation type. The maximum time range is 365 days.

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
  'from': "from_example", // String | The series of data returned starts from this timestamp (Unix milliseconds). Defaults to the beginning of the current month.
  'to': "to_example", // String | The series of data returned ends at this timestamp (Unix milliseconds). Defaults to the current time.
  'projectKey': "projectKey_example", // String | A project key to filter results by. Can be specified multiple times, one query parameter per project key.
  'environmentKey': "environmentKey_example", // String | An environment key to filter results by. If specified, exactly one `projectKey` must be provided. Can be specified multiple times, one query parameter per environment key.
  'contextKind': "contextKind_example", // String | A context kind to filter results by. Can be specified multiple times, one query parameter per context kind.
  'sdkName': "sdkName_example", // String | An SDK name to filter results by. Can be specified multiple times, one query parameter per SDK name.
  'sdkType': "sdkType_example", // String | An SDK type to filter results by. Can be specified multiple times, one query parameter per SDK type.
  'anonymous': "anonymous_example", // String | An anonymous value to filter results by. Can be specified multiple times, one query parameter per anonymous value.<br/>Valid values: `true`, `false`.
  'groupBy': "groupBy_example", // String | If specified, returns data for each distinct value of the given field. `contextKind` is always included as a grouping dimension. Can be specified multiple times to group data by multiple dimensions, one query parameter per dimension.<br/>Valid values: `projectId`, `environmentId`, `sdkName`, `sdkType`, `sdkAppId`, `anonymousV2`.
  'aggregationType': "aggregationType_example", // String | Specifies the aggregation method. Defaults to `month_to_date`.<br/>Valid values: `month_to_date`, `incremental`, `rolling_30d`.
  'granularity': "granularity_example" // String | Specifies the data granularity. Defaults to `daily`. Valid values depend on `aggregationType`: **month_to_date** supports `daily` and `monthly`; **incremental** and **rolling_30d** support `daily` only.
};
apiInstance.getContextsTotalUsage(opts, (error, data, response) => {
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
 **from** | **String**| The series of data returned starts from this timestamp (Unix milliseconds). Defaults to the beginning of the current month. | [optional] 
 **to** | **String**| The series of data returned ends at this timestamp (Unix milliseconds). Defaults to the current time. | [optional] 
 **projectKey** | **String**| A project key to filter results by. Can be specified multiple times, one query parameter per project key. | [optional] 
 **environmentKey** | **String**| An environment key to filter results by. If specified, exactly one &#x60;projectKey&#x60; must be provided. Can be specified multiple times, one query parameter per environment key. | [optional] 
 **contextKind** | **String**| A context kind to filter results by. Can be specified multiple times, one query parameter per context kind. | [optional] 
 **sdkName** | **String**| An SDK name to filter results by. Can be specified multiple times, one query parameter per SDK name. | [optional] 
 **sdkType** | **String**| An SDK type to filter results by. Can be specified multiple times, one query parameter per SDK type. | [optional] 
 **anonymous** | **String**| An anonymous value to filter results by. Can be specified multiple times, one query parameter per anonymous value.&lt;br/&gt;Valid values: &#x60;true&#x60;, &#x60;false&#x60;. | [optional] 
 **groupBy** | **String**| If specified, returns data for each distinct value of the given field. &#x60;contextKind&#x60; is always included as a grouping dimension. Can be specified multiple times to group data by multiple dimensions, one query parameter per dimension.&lt;br/&gt;Valid values: &#x60;projectId&#x60;, &#x60;environmentId&#x60;, &#x60;sdkName&#x60;, &#x60;sdkType&#x60;, &#x60;sdkAppId&#x60;, &#x60;anonymousV2&#x60;. | [optional] 
 **aggregationType** | **String**| Specifies the aggregation method. Defaults to &#x60;month_to_date&#x60;.&lt;br/&gt;Valid values: &#x60;month_to_date&#x60;, &#x60;incremental&#x60;, &#x60;rolling_30d&#x60;. | [optional] 
 **granularity** | **String**| Specifies the data granularity. Defaults to &#x60;daily&#x60;. Valid values depend on &#x60;aggregationType&#x60;: **month_to_date** supports &#x60;daily&#x60; and &#x60;monthly&#x60;; **incremental** and **rolling_30d** support &#x60;daily&#x60; only. | [optional] 

### Return type

[**SeriesListRep**](SeriesListRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDataExportEventsUsage

> SeriesListRep getDataExportEventsUsage(opts)

Get data export events usage

Get a time series array showing the number of data export events from your account. The supported granularity varies by aggregation type. The maximum time range is 365 days.

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
  'from': "from_example", // String | The series of data returned starts from this timestamp (Unix milliseconds). Defaults to the beginning of the current month.
  'to': "to_example", // String | The series of data returned ends at this timestamp (Unix milliseconds). Defaults to the current time.
  'projectKey': "projectKey_example", // String | A project key to filter results by. Can be specified multiple times, one query parameter per project key.
  'environmentKey': "environmentKey_example", // String | An environment key to filter results by. If specified, exactly one `projectKey` must be provided. Can be specified multiple times, one query parameter per environment key.
  'eventKind': "eventKind_example", // String | An event kind to filter results by. Can be specified multiple times, one query parameter per event kind.
  'groupBy': "groupBy_example", // String | If specified, returns data for each distinct value of the given field. Can be specified multiple times to group data by multiple dimensions, one query parameter per dimension.<br/>Valid values: `environmentId`, `eventKind`.
  'aggregationType': "aggregationType_example", // String | Specifies the aggregation method. Defaults to `month_to_date`.<br/>Valid values: `month_to_date`, `incremental`.
  'granularity': "granularity_example" // String | Specifies the data granularity. Defaults to `daily`. `monthly` granularity is only supported with the **month_to_date** aggregation type.<br/>Valid values: `daily`, `hourly`, `monthly`.
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
 **from** | **String**| The series of data returned starts from this timestamp (Unix milliseconds). Defaults to the beginning of the current month. | [optional] 
 **to** | **String**| The series of data returned ends at this timestamp (Unix milliseconds). Defaults to the current time. | [optional] 
 **projectKey** | **String**| A project key to filter results by. Can be specified multiple times, one query parameter per project key. | [optional] 
 **environmentKey** | **String**| An environment key to filter results by. If specified, exactly one &#x60;projectKey&#x60; must be provided. Can be specified multiple times, one query parameter per environment key. | [optional] 
 **eventKind** | **String**| An event kind to filter results by. Can be specified multiple times, one query parameter per event kind. | [optional] 
 **groupBy** | **String**| If specified, returns data for each distinct value of the given field. Can be specified multiple times to group data by multiple dimensions, one query parameter per dimension.&lt;br/&gt;Valid values: &#x60;environmentId&#x60;, &#x60;eventKind&#x60;. | [optional] 
 **aggregationType** | **String**| Specifies the aggregation method. Defaults to &#x60;month_to_date&#x60;.&lt;br/&gt;Valid values: &#x60;month_to_date&#x60;, &#x60;incremental&#x60;. | [optional] 
 **granularity** | **String**| Specifies the data granularity. Defaults to &#x60;daily&#x60;. &#x60;monthly&#x60; granularity is only supported with the **month_to_date** aggregation type.&lt;br/&gt;Valid values: &#x60;daily&#x60;, &#x60;hourly&#x60;, &#x60;monthly&#x60;. | [optional] 

### Return type

[**SeriesListRep**](SeriesListRep.md)

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


## getExperimentationEventsUsage

> SeriesListRep getExperimentationEventsUsage(opts)

Get experimentation events usage

Get a time series array showing the number of experimentation events from your account. The supported granularity varies by aggregation type. The maximum time range is 365 days.

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
  'from': "from_example", // String | The series of data returned starts from this timestamp (Unix milliseconds). Defaults to the beginning of the current month.
  'to': "to_example", // String | The series of data returned ends at this timestamp (Unix milliseconds). Defaults to the current time.
  'projectKey': "projectKey_example", // String | A project key to filter results by. Can be specified multiple times, one query parameter per project key.
  'environmentKey': "environmentKey_example", // String | An environment key to filter results by. If specified, exactly one `projectKey` must be provided. Can be specified multiple times, one query parameter per environment key.
  'eventKey': "eventKey_example", // String | An event key to filter results by. Can be specified multiple times, one query parameter per event key.
  'eventKind': "eventKind_example", // String | An event kind to filter results by. Can be specified multiple times, one query parameter per event kind.
  'groupBy': "groupBy_example", // String | If specified, returns data for each distinct value of the given field. Can be specified multiple times to group data by multiple dimensions, one query parameter per dimension.<br/>Valid values: `environmentId`, `eventKey`, `eventKind`.
  'aggregationType': "aggregationType_example", // String | Specifies the aggregation method. Defaults to `month_to_date`.<br/>Valid values: `month_to_date`, `incremental`.
  'granularity': "granularity_example" // String | Specifies the data granularity. Defaults to `daily`. `monthly` granularity is only supported with the **month_to_date** aggregation type.<br/>Valid values: `daily`, `hourly`, `monthly`.
};
apiInstance.getExperimentationEventsUsage(opts, (error, data, response) => {
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
 **from** | **String**| The series of data returned starts from this timestamp (Unix milliseconds). Defaults to the beginning of the current month. | [optional] 
 **to** | **String**| The series of data returned ends at this timestamp (Unix milliseconds). Defaults to the current time. | [optional] 
 **projectKey** | **String**| A project key to filter results by. Can be specified multiple times, one query parameter per project key. | [optional] 
 **environmentKey** | **String**| An environment key to filter results by. If specified, exactly one &#x60;projectKey&#x60; must be provided. Can be specified multiple times, one query parameter per environment key. | [optional] 
 **eventKey** | **String**| An event key to filter results by. Can be specified multiple times, one query parameter per event key. | [optional] 
 **eventKind** | **String**| An event kind to filter results by. Can be specified multiple times, one query parameter per event kind. | [optional] 
 **groupBy** | **String**| If specified, returns data for each distinct value of the given field. Can be specified multiple times to group data by multiple dimensions, one query parameter per dimension.&lt;br/&gt;Valid values: &#x60;environmentId&#x60;, &#x60;eventKey&#x60;, &#x60;eventKind&#x60;. | [optional] 
 **aggregationType** | **String**| Specifies the aggregation method. Defaults to &#x60;month_to_date&#x60;.&lt;br/&gt;Valid values: &#x60;month_to_date&#x60;, &#x60;incremental&#x60;. | [optional] 
 **granularity** | **String**| Specifies the data granularity. Defaults to &#x60;daily&#x60;. &#x60;monthly&#x60; granularity is only supported with the **month_to_date** aggregation type.&lt;br/&gt;Valid values: &#x60;daily&#x60;, &#x60;hourly&#x60;, &#x60;monthly&#x60;. | [optional] 

### Return type

[**SeriesListRep**](SeriesListRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getExperimentationKeysUsage

> SeriesListRep getExperimentationKeysUsage(opts)

Get experimentation keys usage

Get a time series array showing the number of experimentation keys from your account. The supported granularity varies by aggregation type. The maximum time range is 365 days.

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
  'from': "from_example", // String | The series of data returned starts from this timestamp (Unix milliseconds). Defaults to the beginning of the current month.
  'to': "to_example", // String | The series of data returned ends at this timestamp (Unix milliseconds). Defaults to the current time.
  'projectKey': "projectKey_example", // String | A project key to filter results by. Can be specified multiple times, one query parameter per project key.
  'environmentKey': "environmentKey_example", // String | An environment key to filter results by. If specified, exactly one `projectKey` must be provided. Can be specified multiple times, one query parameter per environment key.
  'experimentId': "experimentId_example", // String | An experiment ID to filter results by. Can be specified multiple times, one query parameter per experiment ID.
  'groupBy': "groupBy_example", // String | If specified, returns data for each distinct value of the given field. Can be specified multiple times to group data by multiple dimensions, one query parameter per dimension.<br/>Valid values: `projectId`, `environmentId`, `experimentId`.
  'aggregationType': "aggregationType_example", // String | Specifies the aggregation method. Defaults to `month_to_date`.<br/>Valid values: `month_to_date`, `incremental`.
  'granularity': "granularity_example" // String | Specifies the data granularity. Defaults to `daily`. `monthly` granularity is only supported with the **month_to_date** aggregation type.<br/>Valid values: `daily`, `hourly`, `monthly`.
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
 **from** | **String**| The series of data returned starts from this timestamp (Unix milliseconds). Defaults to the beginning of the current month. | [optional] 
 **to** | **String**| The series of data returned ends at this timestamp (Unix milliseconds). Defaults to the current time. | [optional] 
 **projectKey** | **String**| A project key to filter results by. Can be specified multiple times, one query parameter per project key. | [optional] 
 **environmentKey** | **String**| An environment key to filter results by. If specified, exactly one &#x60;projectKey&#x60; must be provided. Can be specified multiple times, one query parameter per environment key. | [optional] 
 **experimentId** | **String**| An experiment ID to filter results by. Can be specified multiple times, one query parameter per experiment ID. | [optional] 
 **groupBy** | **String**| If specified, returns data for each distinct value of the given field. Can be specified multiple times to group data by multiple dimensions, one query parameter per dimension.&lt;br/&gt;Valid values: &#x60;projectId&#x60;, &#x60;environmentId&#x60;, &#x60;experimentId&#x60;. | [optional] 
 **aggregationType** | **String**| Specifies the aggregation method. Defaults to &#x60;month_to_date&#x60;.&lt;br/&gt;Valid values: &#x60;month_to_date&#x60;, &#x60;incremental&#x60;. | [optional] 
 **granularity** | **String**| Specifies the data granularity. Defaults to &#x60;daily&#x60;. &#x60;monthly&#x60; granularity is only supported with the **month_to_date** aggregation type.&lt;br/&gt;Valid values: &#x60;daily&#x60;, &#x60;hourly&#x60;, &#x60;monthly&#x60;. | [optional] 

### Return type

[**SeriesListRep**](SeriesListRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMauSdksByType

> SdkListRep getMauSdksByType(opts)

Get MAU SDKs by type

Get a list of SDKs. These are all of the SDKs that have connected to LaunchDarkly by monthly active users (MAU) in the requested time period.&lt;br/&gt;&lt;br/&gt;Endpoints for retrieving monthly active users (MAU) do not return information about active context instances. After you have upgraded your LaunchDarkly SDK to use contexts instead of users, you should not rely on this endpoint. To learn more, read [Account usage metrics](https://launchdarkly.com/docs/home/account/metrics).

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

Get a time-series array of the number of monthly active users (MAU) seen by LaunchDarkly from your account. The granularity is always daily.&lt;br/&gt;&lt;br/&gt;Endpoints for retrieving monthly active users (MAU) do not return information about active context instances. After you have upgraded your LaunchDarkly SDK to use contexts instead of users, you should not rely on this endpoint. To learn more, read [Account usage metrics](https://launchdarkly.com/docs/home/account/metrics).

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
  'groupby': "groupby_example", // String | If specified, returns data for each distinct value of the given field. Can be specified multiple times to group data by multiple dimensions (for example, to group by both project and SDK). Valid values: project, environment, sdktype, sdk, anonymous, contextKind, sdkAppId
  'aggregationType': "aggregationType_example", // String | If specified, queries for rolling 30-day, month-to-date, or daily incremental counts. Default is rolling 30-day. Valid values: rolling_30d, month_to_date, daily_incremental
  'contextKind': "contextKind_example" // String | Filters results to the specified context kinds. Can be specified multiple times, one query parameter per context kind. If not set, queries for the user context kind.
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
 **groupby** | **String**| If specified, returns data for each distinct value of the given field. Can be specified multiple times to group data by multiple dimensions (for example, to group by both project and SDK). Valid values: project, environment, sdktype, sdk, anonymous, contextKind, sdkAppId | [optional] 
 **aggregationType** | **String**| If specified, queries for rolling 30-day, month-to-date, or daily incremental counts. Default is rolling 30-day. Valid values: rolling_30d, month_to_date, daily_incremental | [optional] 
 **contextKind** | **String**| Filters results to the specified context kinds. Can be specified multiple times, one query parameter per context kind. If not set, queries for the user context kind. | [optional] 

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

Get time-series arrays of the number of monthly active users (MAU) seen by LaunchDarkly from your account, broken down by the category of users. The category is either &#x60;browser&#x60;, &#x60;mobile&#x60;, or &#x60;backend&#x60;.&lt;br/&gt;&lt;br/&gt;Endpoints for retrieving monthly active users (MAU) do not return information about active context instances. After you have upgraded your LaunchDarkly SDK to use contexts instead of users, you should not rely on this endpoint. To learn more, read [Account usage metrics](https://launchdarkly.com/docs/home/account/metrics).

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


## getObservabilityErrorsUsage

> SeriesListRep getObservabilityErrorsUsage(opts)

Get observability errors usage

Get time-series arrays of the number of observability errors. Supports &#x60;daily&#x60; and &#x60;monthly&#x60; granularity.

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
  'projectKey': "projectKey_example", // String | A project key to filter results by. Can be specified multiple times, one query parameter per project key.
  'granularity': "granularity_example", // String | Specifies the data granularity. Defaults to `daily`. Valid values depend on `aggregationType`: **month_to_date** supports `daily` and `monthly`; **incremental** and **rolling_30d** support `daily` only.
  'aggregationType': "aggregationType_example" // String | Specifies the aggregation method. Defaults to `month_to_date`.<br/>Valid values: `month_to_date`, `incremental`, `rolling_30d`.
};
apiInstance.getObservabilityErrorsUsage(opts, (error, data, response) => {
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
 **projectKey** | **String**| A project key to filter results by. Can be specified multiple times, one query parameter per project key. | [optional] 
 **granularity** | **String**| Specifies the data granularity. Defaults to &#x60;daily&#x60;. Valid values depend on &#x60;aggregationType&#x60;: **month_to_date** supports &#x60;daily&#x60; and &#x60;monthly&#x60;; **incremental** and **rolling_30d** support &#x60;daily&#x60; only. | [optional] 
 **aggregationType** | **String**| Specifies the aggregation method. Defaults to &#x60;month_to_date&#x60;.&lt;br/&gt;Valid values: &#x60;month_to_date&#x60;, &#x60;incremental&#x60;, &#x60;rolling_30d&#x60;. | [optional] 

### Return type

[**SeriesListRep**](SeriesListRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getObservabilityLogsUsage

> SeriesListRep getObservabilityLogsUsage(opts)

Get observability logs usage

Get time-series arrays of the number of observability logs. Supports &#x60;daily&#x60; and &#x60;monthly&#x60; granularity.

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
  'projectKey': "projectKey_example", // String | A project key to filter results by. Can be specified multiple times, one query parameter per project key.
  'granularity': "granularity_example", // String | Specifies the data granularity. Defaults to `daily`. Valid values depend on `aggregationType`: **month_to_date** supports `daily` and `monthly`; **incremental** and **rolling_30d** support `daily` only.
  'aggregationType': "aggregationType_example" // String | Specifies the aggregation method. Defaults to `month_to_date`.<br/>Valid values: `month_to_date`, `incremental`, `rolling_30d`.
};
apiInstance.getObservabilityLogsUsage(opts, (error, data, response) => {
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
 **projectKey** | **String**| A project key to filter results by. Can be specified multiple times, one query parameter per project key. | [optional] 
 **granularity** | **String**| Specifies the data granularity. Defaults to &#x60;daily&#x60;. Valid values depend on &#x60;aggregationType&#x60;: **month_to_date** supports &#x60;daily&#x60; and &#x60;monthly&#x60;; **incremental** and **rolling_30d** support &#x60;daily&#x60; only. | [optional] 
 **aggregationType** | **String**| Specifies the aggregation method. Defaults to &#x60;month_to_date&#x60;.&lt;br/&gt;Valid values: &#x60;month_to_date&#x60;, &#x60;incremental&#x60;, &#x60;rolling_30d&#x60;. | [optional] 

### Return type

[**SeriesListRep**](SeriesListRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getObservabilitySessionsUsage

> SeriesListRep getObservabilitySessionsUsage(opts)

Get observability sessions usage

Get time-series arrays of the number of observability sessions. Supports &#x60;daily&#x60; and &#x60;monthly&#x60; granularity.

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
  'projectKey': "projectKey_example", // String | A project key to filter results by. Can be specified multiple times, one query parameter per project key.
  'granularity': "granularity_example", // String | Specifies the data granularity. Defaults to `daily`. Valid values depend on `aggregationType`: **month_to_date** supports `daily` and `monthly`; **incremental** and **rolling_30d** support `daily` only.
  'aggregationType': "aggregationType_example" // String | Specifies the aggregation method. Defaults to `month_to_date`.<br/>Valid values: `month_to_date`, `incremental`, `rolling_30d`.
};
apiInstance.getObservabilitySessionsUsage(opts, (error, data, response) => {
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
 **projectKey** | **String**| A project key to filter results by. Can be specified multiple times, one query parameter per project key. | [optional] 
 **granularity** | **String**| Specifies the data granularity. Defaults to &#x60;daily&#x60;. Valid values depend on &#x60;aggregationType&#x60;: **month_to_date** supports &#x60;daily&#x60; and &#x60;monthly&#x60;; **incremental** and **rolling_30d** support &#x60;daily&#x60; only. | [optional] 
 **aggregationType** | **String**| Specifies the aggregation method. Defaults to &#x60;month_to_date&#x60;.&lt;br/&gt;Valid values: &#x60;month_to_date&#x60;, &#x60;incremental&#x60;, &#x60;rolling_30d&#x60;. | [optional] 

### Return type

[**SeriesListRep**](SeriesListRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getObservabilityTracesUsage

> SeriesListRep getObservabilityTracesUsage(opts)

Get observability traces usage

Get time-series arrays of the number of observability traces. Supports &#x60;daily&#x60; and &#x60;monthly&#x60; granularity.

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
  'projectKey': "projectKey_example", // String | A project key to filter results by. Can be specified multiple times, one query parameter per project key.
  'granularity': "granularity_example", // String | Specifies the data granularity. Defaults to `daily`. Valid values depend on `aggregationType`: **month_to_date** supports `daily` and `monthly`; **incremental** and **rolling_30d** support `daily` only.
  'aggregationType': "aggregationType_example" // String | Specifies the aggregation method. Defaults to `month_to_date`.<br/>Valid values: `month_to_date`, `incremental`, `rolling_30d`.
};
apiInstance.getObservabilityTracesUsage(opts, (error, data, response) => {
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
 **projectKey** | **String**| A project key to filter results by. Can be specified multiple times, one query parameter per project key. | [optional] 
 **granularity** | **String**| Specifies the data granularity. Defaults to &#x60;daily&#x60;. Valid values depend on &#x60;aggregationType&#x60;: **month_to_date** supports &#x60;daily&#x60; and &#x60;monthly&#x60;; **incremental** and **rolling_30d** support &#x60;daily&#x60; only. | [optional] 
 **aggregationType** | **String**| Specifies the aggregation method. Defaults to &#x60;month_to_date&#x60;.&lt;br/&gt;Valid values: &#x60;month_to_date&#x60;, &#x60;incremental&#x60;, &#x60;rolling_30d&#x60;. | [optional] 

### Return type

[**SeriesListRep**](SeriesListRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getServiceConnectionsUsage

> SeriesListRepFloat getServiceConnectionsUsage(opts)

Get service connections usage

Get a time series array showing the number of service connection minutes from your account. The supported granularity varies by aggregation type. The maximum time range is 365 days.

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
  'from': "from_example", // String | The series of data returned starts from this timestamp (Unix milliseconds). Defaults to the beginning of the current month.
  'to': "to_example", // String | The series of data returned ends at this timestamp (Unix milliseconds). Defaults to the current time.
  'projectKey': "projectKey_example", // String | A project key to filter results by. Can be specified multiple times, one query parameter per project key.
  'environmentKey': "environmentKey_example", // String | An environment key to filter results by. If specified, exactly one `projectKey` must be provided. Can be specified multiple times, one query parameter per environment key.
  'connectionType': "connectionType_example", // String | A connection type to filter results by. Can be specified multiple times, one query parameter per connection type.
  'relayVersion': "relayVersion_example", // String | A relay version to filter results by. Can be specified multiple times, one query parameter per relay version.
  'sdkName': "sdkName_example", // String | An SDK name to filter results by. Can be specified multiple times, one query parameter per SDK name.
  'sdkVersion': "sdkVersion_example", // String | An SDK version to filter results by. Can be specified multiple times, one query parameter per SDK version.
  'sdkType': "sdkType_example", // String | An SDK type to filter results by. Can be specified multiple times, one query parameter per SDK type.
  'groupBy': "groupBy_example", // String | If specified, returns data for each distinct value of the given field. Can be specified multiple times to group data by multiple dimensions, one query parameter per dimension.<br/>Valid values: `projectId`, `environmentId`, `connectionType`, `relayVersion`, `sdkName`, `sdkVersion`, `sdkType`.
  'aggregationType': "aggregationType_example", // String | Specifies the aggregation method. Defaults to `month_to_date`.<br/>Valid values: `month_to_date`, `incremental`.
  'granularity': "granularity_example" // String | Specifies the data granularity. Defaults to `daily`. `monthly` granularity is only supported with the **month_to_date** aggregation type.<br/>Valid values: `daily`, `hourly`, `monthly`.
};
apiInstance.getServiceConnectionsUsage(opts, (error, data, response) => {
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
 **from** | **String**| The series of data returned starts from this timestamp (Unix milliseconds). Defaults to the beginning of the current month. | [optional] 
 **to** | **String**| The series of data returned ends at this timestamp (Unix milliseconds). Defaults to the current time. | [optional] 
 **projectKey** | **String**| A project key to filter results by. Can be specified multiple times, one query parameter per project key. | [optional] 
 **environmentKey** | **String**| An environment key to filter results by. If specified, exactly one &#x60;projectKey&#x60; must be provided. Can be specified multiple times, one query parameter per environment key. | [optional] 
 **connectionType** | **String**| A connection type to filter results by. Can be specified multiple times, one query parameter per connection type. | [optional] 
 **relayVersion** | **String**| A relay version to filter results by. Can be specified multiple times, one query parameter per relay version. | [optional] 
 **sdkName** | **String**| An SDK name to filter results by. Can be specified multiple times, one query parameter per SDK name. | [optional] 
 **sdkVersion** | **String**| An SDK version to filter results by. Can be specified multiple times, one query parameter per SDK version. | [optional] 
 **sdkType** | **String**| An SDK type to filter results by. Can be specified multiple times, one query parameter per SDK type. | [optional] 
 **groupBy** | **String**| If specified, returns data for each distinct value of the given field. Can be specified multiple times to group data by multiple dimensions, one query parameter per dimension.&lt;br/&gt;Valid values: &#x60;projectId&#x60;, &#x60;environmentId&#x60;, &#x60;connectionType&#x60;, &#x60;relayVersion&#x60;, &#x60;sdkName&#x60;, &#x60;sdkVersion&#x60;, &#x60;sdkType&#x60;. | [optional] 
 **aggregationType** | **String**| Specifies the aggregation method. Defaults to &#x60;month_to_date&#x60;.&lt;br/&gt;Valid values: &#x60;month_to_date&#x60;, &#x60;incremental&#x60;. | [optional] 
 **granularity** | **String**| Specifies the data granularity. Defaults to &#x60;daily&#x60;. &#x60;monthly&#x60; granularity is only supported with the **month_to_date** aggregation type.&lt;br/&gt;Valid values: &#x60;daily&#x60;, &#x60;hourly&#x60;, &#x60;monthly&#x60;. | [optional] 

### Return type

[**SeriesListRepFloat**](SeriesListRepFloat.md)

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

