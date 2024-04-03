# LaunchDarklyApi.InsightsChartsBetaApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDeploymentFrequencyChart**](InsightsChartsBetaApi.md#getDeploymentFrequencyChart) | **GET** /api/v2/engineering-insights/charts/deployments/frequency | Get deployment frequency chart data
[**getFlagStatusChart**](InsightsChartsBetaApi.md#getFlagStatusChart) | **GET** /api/v2/engineering-insights/charts/flags/status | Get flag status chart data
[**getLeadTimeChart**](InsightsChartsBetaApi.md#getLeadTimeChart) | **GET** /api/v2/engineering-insights/charts/lead-time | Get lead time chart data
[**getReleaseFrequencyChart**](InsightsChartsBetaApi.md#getReleaseFrequencyChart) | **GET** /api/v2/engineering-insights/charts/releases/frequency | Get release frequency chart data
[**getStaleFlagsChart**](InsightsChartsBetaApi.md#getStaleFlagsChart) | **GET** /api/v2/engineering-insights/charts/flags/stale | Get stale flags chart data



## getDeploymentFrequencyChart

> InsightsChart getDeploymentFrequencyChart(opts)

Get deployment frequency chart data

Get deployment frequency chart data. Engineering insights displays deployment frequency data in the [deployment frequency metric view](https://docs.launchdarkly.com/home/engineering-insights/metrics/deployment).  ### Expanding the chart response  LaunchDarkly supports expanding the chart response to include additional fields.  To expand the response, append the &#x60;expand&#x60; query parameter and include the following:  * &#x60;metrics&#x60; includes details on the metrics related to deployment frequency  For example, use &#x60;?expand&#x3D;metrics&#x60; to include the &#x60;metrics&#x60; field in the response. By default, this field is **not** included in the response. 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.InsightsChartsBetaApi();
let opts = {
  'projectKey': "projectKey_example", // String | The project key
  'environmentKey': "environmentKey_example", // String | The environment key
  'applicationKey': "applicationKey_example", // String | Comma separated list of application keys
  'from': new Date("2013-10-20T19:20:30+01:00"), // Date | Unix timestamp in milliseconds. Default value is 7 days ago.
  'to': new Date("2013-10-20T19:20:30+01:00"), // Date | Unix timestamp in milliseconds. Default value is now.
  'bucketType': "bucketType_example", // String | Specify type of bucket. Options: `rolling`, `hour`, `day`. Default: `rolling`.
  'bucketMs': 789, // Number | Duration of intervals for x-axis in milliseconds. Default value is one day (`86400000` milliseconds).
  'groupBy': "groupBy_example", // String | Options: `application`, `kind`
  'expand': "expand_example" // String | Options: `metrics`
};
apiInstance.getDeploymentFrequencyChart(opts, (error, data, response) => {
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
 **projectKey** | **String**| The project key | [optional] 
 **environmentKey** | **String**| The environment key | [optional] 
 **applicationKey** | **String**| Comma separated list of application keys | [optional] 
 **from** | **Date**| Unix timestamp in milliseconds. Default value is 7 days ago. | [optional] 
 **to** | **Date**| Unix timestamp in milliseconds. Default value is now. | [optional] 
 **bucketType** | **String**| Specify type of bucket. Options: &#x60;rolling&#x60;, &#x60;hour&#x60;, &#x60;day&#x60;. Default: &#x60;rolling&#x60;. | [optional] 
 **bucketMs** | **Number**| Duration of intervals for x-axis in milliseconds. Default value is one day (&#x60;86400000&#x60; milliseconds). | [optional] 
 **groupBy** | **String**| Options: &#x60;application&#x60;, &#x60;kind&#x60; | [optional] 
 **expand** | **String**| Options: &#x60;metrics&#x60; | [optional] 

### Return type

[**InsightsChart**](InsightsChart.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFlagStatusChart

> InsightsChart getFlagStatusChart(projectKey, environmentKey, opts)

Get flag status chart data

Get flag status chart data. To learn more, read [Using the flag status chart](https://docs.launchdarkly.com/home/engineering-insights/metrics/flag-health#using-the-flag-status-chart).

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.InsightsChartsBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let opts = {
  'applicationKey': "applicationKey_example" // String | Comma separated list of application keys
};
apiInstance.getFlagStatusChart(projectKey, environmentKey, opts, (error, data, response) => {
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
 **applicationKey** | **String**| Comma separated list of application keys | [optional] 

### Return type

[**InsightsChart**](InsightsChart.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLeadTimeChart

> InsightsChart getLeadTimeChart(projectKey, opts)

Get lead time chart data

Get lead time chart data. The engineering insights UI displays lead time data in the [lead time metric view](https://docs.launchdarkly.com/home/engineering-insights/metrics/lead-time).

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.InsightsChartsBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let opts = {
  'environmentKey': "environmentKey_example", // String | The environment key
  'applicationKey': "applicationKey_example", // String | Comma separated list of application keys
  'from': 789, // Number | Unix timestamp in milliseconds. Default value is 7 days ago.
  'to': 789, // Number | Unix timestamp in milliseconds. Default value is now.
  'bucketType': "bucketType_example", // String | Specify type of bucket. Options: `rolling`, `hour`, `day`. Default: `rolling`.
  'bucketMs': 789, // Number | Duration of intervals for x-axis in milliseconds. Default value is one day (`86400000` milliseconds).
  'groupBy': "groupBy_example", // String | Options: `application`, `stage`. Default: `stage`.
  'expand': "expand_example" // String | Options: `metrics`, `percentiles`.
};
apiInstance.getLeadTimeChart(projectKey, opts, (error, data, response) => {
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
 **environmentKey** | **String**| The environment key | [optional] 
 **applicationKey** | **String**| Comma separated list of application keys | [optional] 
 **from** | **Number**| Unix timestamp in milliseconds. Default value is 7 days ago. | [optional] 
 **to** | **Number**| Unix timestamp in milliseconds. Default value is now. | [optional] 
 **bucketType** | **String**| Specify type of bucket. Options: &#x60;rolling&#x60;, &#x60;hour&#x60;, &#x60;day&#x60;. Default: &#x60;rolling&#x60;. | [optional] 
 **bucketMs** | **Number**| Duration of intervals for x-axis in milliseconds. Default value is one day (&#x60;86400000&#x60; milliseconds). | [optional] 
 **groupBy** | **String**| Options: &#x60;application&#x60;, &#x60;stage&#x60;. Default: &#x60;stage&#x60;. | [optional] 
 **expand** | **String**| Options: &#x60;metrics&#x60;, &#x60;percentiles&#x60;. | [optional] 

### Return type

[**InsightsChart**](InsightsChart.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getReleaseFrequencyChart

> InsightsChart getReleaseFrequencyChart(projectKey, environmentKey, opts)

Get release frequency chart data

Get release frequency chart data. Engineering insights displays release frequency data in the [release frequency metric view](https://docs.launchdarkly.com/home/engineering-insights/metrics/release).

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.InsightsChartsBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let opts = {
  'applicationKey': "applicationKey_example", // String | Comma separated list of application keys
  'hasExperiments': true, // Boolean | Filter events to those associated with an experiment (`true`) or without an experiment (`false`)
  'global': "global_example", // String | Filter to include or exclude global events. Default value is `include`. Options: `include`, `exclude`
  'groupBy': "groupBy_example", // String | Property to group results by. Options: `impact`
  'from': new Date("2013-10-20T19:20:30+01:00"), // Date | Unix timestamp in milliseconds. Default value is 7 days ago.
  'to': new Date("2013-10-20T19:20:30+01:00"), // Date | Unix timestamp in milliseconds. Default value is now.
  'bucketType': "bucketType_example", // String | Specify type of bucket. Options: `rolling`, `hour`, `day`. Default: `rolling`.
  'bucketMs': 789, // Number | Duration of intervals for x-axis in milliseconds. Default value is one day (`86400000` milliseconds).
  'expand': "expand_example" // String | Options: `metrics`
};
apiInstance.getReleaseFrequencyChart(projectKey, environmentKey, opts, (error, data, response) => {
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
 **applicationKey** | **String**| Comma separated list of application keys | [optional] 
 **hasExperiments** | **Boolean**| Filter events to those associated with an experiment (&#x60;true&#x60;) or without an experiment (&#x60;false&#x60;) | [optional] 
 **global** | **String**| Filter to include or exclude global events. Default value is &#x60;include&#x60;. Options: &#x60;include&#x60;, &#x60;exclude&#x60; | [optional] 
 **groupBy** | **String**| Property to group results by. Options: &#x60;impact&#x60; | [optional] 
 **from** | **Date**| Unix timestamp in milliseconds. Default value is 7 days ago. | [optional] 
 **to** | **Date**| Unix timestamp in milliseconds. Default value is now. | [optional] 
 **bucketType** | **String**| Specify type of bucket. Options: &#x60;rolling&#x60;, &#x60;hour&#x60;, &#x60;day&#x60;. Default: &#x60;rolling&#x60;. | [optional] 
 **bucketMs** | **Number**| Duration of intervals for x-axis in milliseconds. Default value is one day (&#x60;86400000&#x60; milliseconds). | [optional] 
 **expand** | **String**| Options: &#x60;metrics&#x60; | [optional] 

### Return type

[**InsightsChart**](InsightsChart.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getStaleFlagsChart

> InsightsChart getStaleFlagsChart(projectKey, environmentKey, opts)

Get stale flags chart data

Get stale flags chart data. Engineering insights displays stale flags data in the [flag health metric view](https://docs.launchdarkly.com/home/engineering-insights/metrics/flag-health).  ### Expanding the chart response  LaunchDarkly supports expanding the chart response to include additional fields.  To expand the response, append the &#x60;expand&#x60; query parameter and include the following:  * &#x60;metrics&#x60; includes details on the metrics related to stale flags  For example, use &#x60;?expand&#x3D;metrics&#x60; to include the &#x60;metrics&#x60; field in the response. By default, this field is **not** included in the response. 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.InsightsChartsBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let opts = {
  'applicationKey': "applicationKey_example", // String | Comma separated list of application keys
  'groupBy': "groupBy_example", // String | Property to group results by. Options: `maintainer`
  'maintainerId': "maintainerId_example", // String | Comma-separated list of individual maintainers to filter results.
  'maintainerTeamKey': "maintainerTeamKey_example", // String | Comma-separated list of team maintainer keys to filter results.
  'expand': "expand_example" // String | Options: `metrics`
};
apiInstance.getStaleFlagsChart(projectKey, environmentKey, opts, (error, data, response) => {
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
 **applicationKey** | **String**| Comma separated list of application keys | [optional] 
 **groupBy** | **String**| Property to group results by. Options: &#x60;maintainer&#x60; | [optional] 
 **maintainerId** | **String**| Comma-separated list of individual maintainers to filter results. | [optional] 
 **maintainerTeamKey** | **String**| Comma-separated list of team maintainer keys to filter results. | [optional] 
 **expand** | **String**| Options: &#x60;metrics&#x60; | [optional] 

### Return type

[**InsightsChart**](InsightsChart.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

