# LaunchDarklyApi.LayersApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLayer**](LayersApi.md#createLayer) | **POST** /api/v2/projects/{projectKey}/layers | Create layer
[**getLayers**](LayersApi.md#getLayers) | **GET** /api/v2/projects/{projectKey}/layers | Get layers
[**updateLayer**](LayersApi.md#updateLayer) | **PATCH** /api/v2/projects/{projectKey}/layers/{layerKey} | Update layer



## createLayer

> LayerRep createLayer(projectKey, layerPost)

Create layer

Create a layer. Experiments running in the same layer are granted mutually-exclusive traffic. 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.LayersApi();
let projectKey = "projectKey_example"; // String | The project key
let layerPost = new LaunchDarklyApi.LayerPost(); // LayerPost | 
apiInstance.createLayer(projectKey, layerPost, (error, data, response) => {
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
 **layerPost** | [**LayerPost**](LayerPost.md)|  | 

### Return type

[**LayerRep**](LayerRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getLayers

> LayerCollectionRep getLayers(projectKey, opts)

Get layers

Get a collection of all layers for a project

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.LayersApi();
let projectKey = "projectKey_example"; // String | The project key
let opts = {
  'filter': "filter_example" // String | A comma-separated list of filters. This endpoint only accepts filtering by `experimentKey`. The filter returns layers which include that experiment for the selected environment(s). For example: `filter=reservations.experimentKey contains expKey`.
};
apiInstance.getLayers(projectKey, opts, (error, data, response) => {
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
 **filter** | **String**| A comma-separated list of filters. This endpoint only accepts filtering by &#x60;experimentKey&#x60;. The filter returns layers which include that experiment for the selected environment(s). For example: &#x60;filter&#x3D;reservations.experimentKey contains expKey&#x60;. | [optional] 

### Return type

[**LayerCollectionRep**](LayerCollectionRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateLayer

> LayerRep updateLayer(projectKey, layerKey, layerPatchInput)

Update layer

Update a layer by adding, changing, or removing traffic reservations for experiments, or by changing layer name or description. Updating a layer uses the semantic patch format.  To make a semantic patch request, you must append &#x60;domain-model&#x3D;launchdarkly.semanticpatch&#x60; to your &#x60;Content-Type&#x60; header. To learn more, read [Updates using semantic patch](/reference#updates-using-semantic-patch).  ### Instructions  Semantic patch requests support the following &#x60;kind&#x60; instructions for updating layers.  &lt;details&gt; &lt;summary&gt;Click to expand instructions for &lt;strong&gt;updating layers&lt;/strong&gt;&lt;/summary&gt;  #### updateName  Updates the layer name.  ##### Parameters  - &#x60;name&#x60;: The new layer name.  Here&#39;s an example:  &#x60;&#x60;&#x60;json {   \&quot;instructions\&quot;: [{       \&quot;kind\&quot;: \&quot;updateName\&quot;,       \&quot;name\&quot;: \&quot;New name\&quot;   }] } &#x60;&#x60;&#x60;  #### updateDescription  Updates the layer description.  ##### Parameters  - &#x60;description&#x60;: The new description.  Here&#39;s an example:  &#x60;&#x60;&#x60;json {   \&quot;instructions\&quot;: [{       \&quot;kind\&quot;: \&quot;updateDescription\&quot;,       \&quot;description\&quot;: \&quot;New description\&quot;   }] } &#x60;&#x60;&#x60;  #### updateExperimentReservation  Adds or updates a traffic reservation for an experiment in a layer.  ##### Parameters  - &#x60;experimentKey&#x60;: The key of the experiment whose reservation you are adding to or updating in the layer. - &#x60;reservationPercent&#x60;: The amount of traffic in the layer to reserve. Must be an integer. Zero is allowed until iteration start.  Here&#39;s an example:  &#x60;&#x60;&#x60;json {   \&quot;environmentKey\&quot;: \&quot;production\&quot;,   \&quot;instructions\&quot;: [{       \&quot;kind\&quot;: \&quot;updateExperimentReservation\&quot;,       \&quot;experimentKey\&quot;: \&quot;exp-key\&quot;,       \&quot;reservationPercent\&quot;: 10   }] } &#x60;&#x60;&#x60;  #### removeExperiment  Removes a traffic reservation for an experiment from a layer.  ##### Parameters  - &#x60;experimentKey&#x60;: The key of the experiment whose reservation you want to remove from the layer.  Here&#39;s an example:  &#x60;&#x60;&#x60;json {   \&quot;environmentKey\&quot;: \&quot;production\&quot;,   \&quot;instructions\&quot;: [{       \&quot;kind\&quot;: \&quot;removeExperiment\&quot;,       \&quot;experimentKey\&quot;: \&quot;exp-key\&quot;   }] } &#x60;&#x60;&#x60;  &lt;/details&gt; 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.LayersApi();
let projectKey = "projectKey_example"; // String | The project key
let layerKey = "layerKey_example"; // String | The layer key
let layerPatchInput = {"comment":"Example comment describing the update","environmentKey":"production","instructions":[{"experimentKey":"checkout-button-color","kind":"updateExperimentReservation","reservationPercent":25}]}; // LayerPatchInput | 
apiInstance.updateLayer(projectKey, layerKey, layerPatchInput, (error, data, response) => {
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
 **layerKey** | **String**| The layer key | 
 **layerPatchInput** | [**LayerPatchInput**](LayerPatchInput.md)|  | 

### Return type

[**LayerRep**](LayerRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

