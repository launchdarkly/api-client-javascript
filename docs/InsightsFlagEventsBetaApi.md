# LaunchDarklyApi.InsightsFlagEventsBetaApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFlagEvents**](InsightsFlagEventsBetaApi.md#getFlagEvents) | **GET** /api/v2/engineering-insights/flag-events | List flag events



## getFlagEvents

> FlagEventCollectionRep getFlagEvents(projectKey, environmentKey, opts)

List flag events

Get a list of flag events  ### Expanding the flag event collection response  LaunchDarkly supports expanding the flag event collection response to include additional fields.  To expand the response, append the &#x60;expand&#x60; query parameter and include the following:  * &#x60;experiments&#x60; includes details on all of the experiments run on each flag  For example, use &#x60;?expand&#x3D;experiments&#x60; to include the &#x60;experiments&#x60; field in the response. By default, this field is **not** included in the response. 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.InsightsFlagEventsBetaApi();
let projectKey = "projectKey_example"; // String | The project key
let environmentKey = "environmentKey_example"; // String | The environment key
let opts = {
  'applicationKey': "applicationKey_example", // String | Comma separated list of application keys
  'query': "query_example", // String | Filter events by flag key
  'impactSize': "impactSize_example", // String | Filter events by impact size. A small impact created a less than 20% change in the proportion of end users receiving one or more flag variations. A medium impact created between a 20%-80% change. A large impact created a more than 80% change. Options: `none`, `small`, `medium`, `large`
  'hasExperiments': true, // Boolean | Filter events to those associated with an experiment
  'global': "global_example", // String | Filter to include or exclude global events. Default value is `include`. Options: `include`, `exclude`
  'expand': "expand_example", // String | Expand properties in response. Options: `experiments`
  'limit': 789, // Number | The number of deployments to return. Default is 20. Maximum allowed is 100.
  'from': 789, // Number | Unix timestamp in milliseconds. Default value is 7 days ago.
  'to': 789, // Number | Unix timestamp in milliseconds. Default value is now.
  'after': "after_example", // String | Identifier used for pagination
  'before': "before_example" // String | Identifier used for pagination
};
apiInstance.getFlagEvents(projectKey, environmentKey, opts, (error, data, response) => {
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
 **query** | **String**| Filter events by flag key | [optional] 
 **impactSize** | **String**| Filter events by impact size. A small impact created a less than 20% change in the proportion of end users receiving one or more flag variations. A medium impact created between a 20%-80% change. A large impact created a more than 80% change. Options: &#x60;none&#x60;, &#x60;small&#x60;, &#x60;medium&#x60;, &#x60;large&#x60; | [optional] 
 **hasExperiments** | **Boolean**| Filter events to those associated with an experiment | [optional] 
 **global** | **String**| Filter to include or exclude global events. Default value is &#x60;include&#x60;. Options: &#x60;include&#x60;, &#x60;exclude&#x60; | [optional] 
 **expand** | **String**| Expand properties in response. Options: &#x60;experiments&#x60; | [optional] 
 **limit** | **Number**| The number of deployments to return. Default is 20. Maximum allowed is 100. | [optional] 
 **from** | **Number**| Unix timestamp in milliseconds. Default value is 7 days ago. | [optional] 
 **to** | **Number**| Unix timestamp in milliseconds. Default value is now. | [optional] 
 **after** | **String**| Identifier used for pagination | [optional] 
 **before** | **String**| Identifier used for pagination | [optional] 

### Return type

[**FlagEventCollectionRep**](FlagEventCollectionRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

