# LaunchDarklyApi.AIConfigsBetaApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteAIConfig**](AIConfigsBetaApi.md#deleteAIConfig) | **DELETE** /api/v2/projects/{projectKey}/ai-configs/{configKey} | Delete AI Config
[**deleteAIConfigVariation**](AIConfigsBetaApi.md#deleteAIConfigVariation) | **DELETE** /api/v2/projects/{projectKey}/ai-configs/{configKey}/variations/{variationKey} | Delete AI Config variation
[**deleteModelConfig**](AIConfigsBetaApi.md#deleteModelConfig) | **DELETE** /api/v2/projects/{projectKey}/ai-configs/model-configs/{modelConfigKey} | Delete an AI model config
[**getAIConfig**](AIConfigsBetaApi.md#getAIConfig) | **GET** /api/v2/projects/{projectKey}/ai-configs/{configKey} | Get AI Config
[**getAIConfigMetrics**](AIConfigsBetaApi.md#getAIConfigMetrics) | **GET** /api/v2/projects/{projectKey}/ai-configs/{configKey}/metrics | Get AI Config metrics
[**getAIConfigMetricsByVariation**](AIConfigsBetaApi.md#getAIConfigMetricsByVariation) | **GET** /api/v2/projects/{projectKey}/ai-configs/{configKey}/metrics-by-variation | Get AI Config metrics by variation
[**getAIConfigVariation**](AIConfigsBetaApi.md#getAIConfigVariation) | **GET** /api/v2/projects/{projectKey}/ai-configs/{configKey}/variations/{variationKey} | Get AI Config variation
[**getAIConfigs**](AIConfigsBetaApi.md#getAIConfigs) | **GET** /api/v2/projects/{projectKey}/ai-configs | List AI Configs
[**getModelConfig**](AIConfigsBetaApi.md#getModelConfig) | **GET** /api/v2/projects/{projectKey}/ai-configs/model-configs/{modelConfigKey} | Get AI model config
[**listModelConfigs**](AIConfigsBetaApi.md#listModelConfigs) | **GET** /api/v2/projects/{projectKey}/ai-configs/model-configs | List AI model configs
[**patchAIConfig**](AIConfigsBetaApi.md#patchAIConfig) | **PATCH** /api/v2/projects/{projectKey}/ai-configs/{configKey} | Update AI Config
[**patchAIConfigVariation**](AIConfigsBetaApi.md#patchAIConfigVariation) | **PATCH** /api/v2/projects/{projectKey}/ai-configs/{configKey}/variations/{variationKey} | Update AI Config variation
[**postAIConfig**](AIConfigsBetaApi.md#postAIConfig) | **POST** /api/v2/projects/{projectKey}/ai-configs | Create new AI Config
[**postAIConfigVariation**](AIConfigsBetaApi.md#postAIConfigVariation) | **POST** /api/v2/projects/{projectKey}/ai-configs/{configKey}/variations | Create AI Config variation
[**postModelConfig**](AIConfigsBetaApi.md#postModelConfig) | **POST** /api/v2/projects/{projectKey}/ai-configs/model-configs | Create an AI model config



## deleteAIConfig

> deleteAIConfig(lDAPIVersion, projectKey, configKey)

Delete AI Config

Delete an existing AI Config.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.AIConfigsBetaApi();
let lDAPIVersion = "lDAPIVersion_example"; // String | Version of the endpoint.
let projectKey = default; // String | 
let configKey = "configKey_example"; // String | 
apiInstance.deleteAIConfig(lDAPIVersion, projectKey, configKey, (error, data, response) => {
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
 **lDAPIVersion** | **String**| Version of the endpoint. | 
 **projectKey** | **String**|  | 
 **configKey** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteAIConfigVariation

> deleteAIConfigVariation(lDAPIVersion, projectKey, configKey, variationKey)

Delete AI Config variation

Delete a specific variation of an AI Config by config key and variation key.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.AIConfigsBetaApi();
let lDAPIVersion = "lDAPIVersion_example"; // String | Version of the endpoint.
let projectKey = "projectKey_example"; // String | 
let configKey = "configKey_example"; // String | 
let variationKey = "variationKey_example"; // String | 
apiInstance.deleteAIConfigVariation(lDAPIVersion, projectKey, configKey, variationKey, (error, data, response) => {
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
 **lDAPIVersion** | **String**| Version of the endpoint. | 
 **projectKey** | **String**|  | 
 **configKey** | **String**|  | 
 **variationKey** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteModelConfig

> deleteModelConfig(lDAPIVersion, projectKey, modelConfigKey)

Delete an AI model config

Delete an AI model config.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.AIConfigsBetaApi();
let lDAPIVersion = "lDAPIVersion_example"; // String | Version of the endpoint.
let projectKey = default; // String | 
let modelConfigKey = "modelConfigKey_example"; // String | 
apiInstance.deleteModelConfig(lDAPIVersion, projectKey, modelConfigKey, (error, data, response) => {
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
 **lDAPIVersion** | **String**| Version of the endpoint. | 
 **projectKey** | **String**|  | 
 **modelConfigKey** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAIConfig

> AIConfig getAIConfig(lDAPIVersion, projectKey, configKey)

Get AI Config

Retrieve a specific AI Config by its key.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.AIConfigsBetaApi();
let lDAPIVersion = "lDAPIVersion_example"; // String | Version of the endpoint.
let projectKey = "projectKey_example"; // String | 
let configKey = "configKey_example"; // String | 
apiInstance.getAIConfig(lDAPIVersion, projectKey, configKey, (error, data, response) => {
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
 **lDAPIVersion** | **String**| Version of the endpoint. | 
 **projectKey** | **String**|  | 
 **configKey** | **String**|  | 

### Return type

[**AIConfig**](AIConfig.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAIConfigMetrics

> Metrics getAIConfigMetrics(lDAPIVersion, projectKey, configKey, from, to, env)

Get AI Config metrics

Retrieve usage metrics for an AI Config by config key.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.AIConfigsBetaApi();
let lDAPIVersion = "lDAPIVersion_example"; // String | Version of the endpoint.
let projectKey = "projectKey_example"; // String | 
let configKey = "configKey_example"; // String | 
let from = 56; // Number | The starting time, as milliseconds since epoch (inclusive).
let to = 56; // Number | The ending time, as milliseconds since epoch (exclusive). May not be more than 100 days after `from`.
let env = "env_example"; // String | An environment key. Only metrics from this environment will be included.
apiInstance.getAIConfigMetrics(lDAPIVersion, projectKey, configKey, from, to, env, (error, data, response) => {
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
 **lDAPIVersion** | **String**| Version of the endpoint. | 
 **projectKey** | **String**|  | 
 **configKey** | **String**|  | 
 **from** | **Number**| The starting time, as milliseconds since epoch (inclusive). | 
 **to** | **Number**| The ending time, as milliseconds since epoch (exclusive). May not be more than 100 days after &#x60;from&#x60;. | 
 **env** | **String**| An environment key. Only metrics from this environment will be included. | 

### Return type

[**Metrics**](Metrics.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAIConfigMetricsByVariation

> [MetricByVariation] getAIConfigMetricsByVariation(lDAPIVersion, projectKey, configKey, from, to, env)

Get AI Config metrics by variation

Retrieve usage metrics for an AI Config by config key, with results split by variation.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.AIConfigsBetaApi();
let lDAPIVersion = "lDAPIVersion_example"; // String | Version of the endpoint.
let projectKey = "projectKey_example"; // String | 
let configKey = "configKey_example"; // String | 
let from = 56; // Number | The starting time, as milliseconds since epoch (inclusive).
let to = 56; // Number | The ending time, as milliseconds since epoch (exclusive). May not be more than 100 days after `from`.
let env = "env_example"; // String | An environment key. Only metrics from this environment will be included.
apiInstance.getAIConfigMetricsByVariation(lDAPIVersion, projectKey, configKey, from, to, env, (error, data, response) => {
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
 **lDAPIVersion** | **String**| Version of the endpoint. | 
 **projectKey** | **String**|  | 
 **configKey** | **String**|  | 
 **from** | **Number**| The starting time, as milliseconds since epoch (inclusive). | 
 **to** | **Number**| The ending time, as milliseconds since epoch (exclusive). May not be more than 100 days after &#x60;from&#x60;. | 
 **env** | **String**| An environment key. Only metrics from this environment will be included. | 

### Return type

[**[MetricByVariation]**](MetricByVariation.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAIConfigVariation

> AIConfigVariationsResponse getAIConfigVariation(lDAPIVersion, projectKey, configKey, variationKey)

Get AI Config variation

Get an AI Config variation by key. The response includes all variation versions for the given variation key.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.AIConfigsBetaApi();
let lDAPIVersion = "lDAPIVersion_example"; // String | Version of the endpoint.
let projectKey = default; // String | 
let configKey = default; // String | 
let variationKey = default; // String | 
apiInstance.getAIConfigVariation(lDAPIVersion, projectKey, configKey, variationKey, (error, data, response) => {
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
 **lDAPIVersion** | **String**| Version of the endpoint. | 
 **projectKey** | **String**|  | 
 **configKey** | **String**|  | 
 **variationKey** | **String**|  | 

### Return type

[**AIConfigVariationsResponse**](AIConfigVariationsResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAIConfigs

> AIConfigs getAIConfigs(lDAPIVersion, projectKey, opts)

List AI Configs

Get a list of all AI Configs in the given project.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.AIConfigsBetaApi();
let lDAPIVersion = "lDAPIVersion_example"; // String | Version of the endpoint.
let projectKey = default; // String | 
let opts = {
  'sort': "sort_example", // String | A sort to apply to the list of AI Configs.
  'limit': 56, // Number | The number of AI Configs to return.
  'offset': 56, // Number | Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`.
  'filter': "filter_example" // String | A filter to apply to the list of AI Configs.
};
apiInstance.getAIConfigs(lDAPIVersion, projectKey, opts, (error, data, response) => {
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
 **lDAPIVersion** | **String**| Version of the endpoint. | 
 **projectKey** | **String**|  | 
 **sort** | **String**| A sort to apply to the list of AI Configs. | [optional] 
 **limit** | **Number**| The number of AI Configs to return. | [optional] 
 **offset** | **Number**| Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query &#x60;limit&#x60;. | [optional] 
 **filter** | **String**| A filter to apply to the list of AI Configs. | [optional] 

### Return type

[**AIConfigs**](AIConfigs.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getModelConfig

> ModelConfig getModelConfig(lDAPIVersion, projectKey, modelConfigKey)

Get AI model config

Get an AI model config by key.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.AIConfigsBetaApi();
let lDAPIVersion = "lDAPIVersion_example"; // String | Version of the endpoint.
let projectKey = default; // String | 
let modelConfigKey = default; // String | 
apiInstance.getModelConfig(lDAPIVersion, projectKey, modelConfigKey, (error, data, response) => {
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
 **lDAPIVersion** | **String**| Version of the endpoint. | 
 **projectKey** | **String**|  | 
 **modelConfigKey** | **String**|  | 

### Return type

[**ModelConfig**](ModelConfig.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listModelConfigs

> [ModelConfig] listModelConfigs(lDAPIVersion, projectKey)

List AI model configs

Get all AI model configs for a project.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.AIConfigsBetaApi();
let lDAPIVersion = "lDAPIVersion_example"; // String | Version of the endpoint.
let projectKey = default; // String | 
apiInstance.listModelConfigs(lDAPIVersion, projectKey, (error, data, response) => {
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
 **lDAPIVersion** | **String**| Version of the endpoint. | 
 **projectKey** | **String**|  | 

### Return type

[**[ModelConfig]**](ModelConfig.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## patchAIConfig

> AIConfig patchAIConfig(lDAPIVersion, projectKey, configKey, opts)

Update AI Config

Edit an existing AI Config.  The request body must be a JSON object of the fields to update. The values you include replace the existing values for the fields.  Here&#39;s an example:   &#x60;&#x60;&#x60;     {       \&quot;description\&quot;: \&quot;Example updated description\&quot;,       \&quot;tags\&quot;: [\&quot;new-tag\&quot;]     }   &#x60;&#x60;&#x60; 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.AIConfigsBetaApi();
let lDAPIVersion = "lDAPIVersion_example"; // String | Version of the endpoint.
let projectKey = "projectKey_example"; // String | 
let configKey = "configKey_example"; // String | 
let opts = {
  'aIConfigPatch': new LaunchDarklyApi.AIConfigPatch() // AIConfigPatch | AI Config object to update
};
apiInstance.patchAIConfig(lDAPIVersion, projectKey, configKey, opts, (error, data, response) => {
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
 **lDAPIVersion** | **String**| Version of the endpoint. | 
 **projectKey** | **String**|  | 
 **configKey** | **String**|  | 
 **aIConfigPatch** | [**AIConfigPatch**](AIConfigPatch.md)| AI Config object to update | [optional] 

### Return type

[**AIConfig**](AIConfig.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## patchAIConfigVariation

> AIConfigVariation patchAIConfigVariation(lDAPIVersion, projectKey, configKey, variationKey, opts)

Update AI Config variation

Edit an existing variation of an AI Config. This creates a new version of the variation.  The request body must be a JSON object of the fields to update. The values you include replace the existing values for the fields.  Here&#39;s an example: &#x60;&#x60;&#x60;   {     \&quot;messages\&quot;: [       {         \&quot;role\&quot;: \&quot;system\&quot;,         \&quot;content\&quot;: \&quot;The new message\&quot;       }     ]   } &#x60;&#x60;&#x60; 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.AIConfigsBetaApi();
let lDAPIVersion = "lDAPIVersion_example"; // String | Version of the endpoint.
let projectKey = "projectKey_example"; // String | 
let configKey = "configKey_example"; // String | 
let variationKey = "variationKey_example"; // String | 
let opts = {
  'aIConfigVariationPatch': new LaunchDarklyApi.AIConfigVariationPatch() // AIConfigVariationPatch | AI Config variation object to update
};
apiInstance.patchAIConfigVariation(lDAPIVersion, projectKey, configKey, variationKey, opts, (error, data, response) => {
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
 **lDAPIVersion** | **String**| Version of the endpoint. | 
 **projectKey** | **String**|  | 
 **configKey** | **String**|  | 
 **variationKey** | **String**|  | 
 **aIConfigVariationPatch** | [**AIConfigVariationPatch**](AIConfigVariationPatch.md)| AI Config variation object to update | [optional] 

### Return type

[**AIConfigVariation**](AIConfigVariation.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postAIConfig

> AIConfig postAIConfig(lDAPIVersion, projectKey, aIConfigPost)

Create new AI Config

Create a new AI Config within the given project.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.AIConfigsBetaApi();
let lDAPIVersion = "lDAPIVersion_example"; // String | Version of the endpoint.
let projectKey = "projectKey_example"; // String | 
let aIConfigPost = new LaunchDarklyApi.AIConfigPost(); // AIConfigPost | AI Config object to create
apiInstance.postAIConfig(lDAPIVersion, projectKey, aIConfigPost, (error, data, response) => {
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
 **lDAPIVersion** | **String**| Version of the endpoint. | 
 **projectKey** | **String**|  | 
 **aIConfigPost** | [**AIConfigPost**](AIConfigPost.md)| AI Config object to create | 

### Return type

[**AIConfig**](AIConfig.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postAIConfigVariation

> AIConfigVariation postAIConfigVariation(lDAPIVersion, projectKey, configKey, aIConfigVariationPost)

Create AI Config variation

Create a new variation for a given AI Config.  The &lt;code&gt;model&lt;/code&gt; in the request body requires a &lt;code&gt;modelName&lt;/code&gt; and &lt;code&gt;parameters&lt;/code&gt;, for example:  &#x60;&#x60;&#x60;   \&quot;model\&quot;: {     \&quot;modelName\&quot;: \&quot;claude-3-opus-20240229\&quot;,     \&quot;parameters\&quot;: {       \&quot;max_tokens\&quot;: 1024     }   } &#x60;&#x60;&#x60; 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.AIConfigsBetaApi();
let lDAPIVersion = "lDAPIVersion_example"; // String | Version of the endpoint.
let projectKey = "projectKey_example"; // String | 
let configKey = "configKey_example"; // String | 
let aIConfigVariationPost = new LaunchDarklyApi.AIConfigVariationPost(); // AIConfigVariationPost | AI Config variation object to create
apiInstance.postAIConfigVariation(lDAPIVersion, projectKey, configKey, aIConfigVariationPost, (error, data, response) => {
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
 **lDAPIVersion** | **String**| Version of the endpoint. | 
 **projectKey** | **String**|  | 
 **configKey** | **String**|  | 
 **aIConfigVariationPost** | [**AIConfigVariationPost**](AIConfigVariationPost.md)| AI Config variation object to create | 

### Return type

[**AIConfigVariation**](AIConfigVariation.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postModelConfig

> ModelConfig postModelConfig(lDAPIVersion, projectKey, modelConfigPost)

Create an AI model config

Create an AI model config. You can use this in any variation for any AI Config in your project.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.AIConfigsBetaApi();
let lDAPIVersion = "lDAPIVersion_example"; // String | Version of the endpoint.
let projectKey = default; // String | 
let modelConfigPost = new LaunchDarklyApi.ModelConfigPost(); // ModelConfigPost | AI model config object to create
apiInstance.postModelConfig(lDAPIVersion, projectKey, modelConfigPost, (error, data, response) => {
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
 **lDAPIVersion** | **String**| Version of the endpoint. | 
 **projectKey** | **String**|  | 
 **modelConfigPost** | [**ModelConfigPost**](ModelConfigPost.md)| AI model config object to create | 

### Return type

[**ModelConfig**](ModelConfig.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

