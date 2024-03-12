# LaunchDarklyApi.InsightsRepositoriesBetaApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**associateRepositoriesAndProjects**](InsightsRepositoriesBetaApi.md#associateRepositoriesAndProjects) | **PUT** /api/v2/engineering-insights/repositories/projects | Associate repositories with projects
[**deleteRepositoryProject**](InsightsRepositoriesBetaApi.md#deleteRepositoryProject) | **DELETE** /api/v2/engineering-insights/repositories/{repositoryKey}/projects/{projectKey} | Remove repository project association
[**getInsightsRepositories**](InsightsRepositoriesBetaApi.md#getInsightsRepositories) | **GET** /api/v2/engineering-insights/repositories | List repositories



## associateRepositoriesAndProjects

> InsightsRepositoryProjectCollection associateRepositoriesAndProjects(insightsRepositoryProjectMappings)

Associate repositories with projects

Associate repositories with projects

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.InsightsRepositoriesBetaApi();
let insightsRepositoryProjectMappings = new LaunchDarklyApi.InsightsRepositoryProjectMappings(); // InsightsRepositoryProjectMappings | 
apiInstance.associateRepositoriesAndProjects(insightsRepositoryProjectMappings, (error, data, response) => {
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
 **insightsRepositoryProjectMappings** | [**InsightsRepositoryProjectMappings**](InsightsRepositoryProjectMappings.md)|  | 

### Return type

[**InsightsRepositoryProjectCollection**](InsightsRepositoryProjectCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteRepositoryProject

> deleteRepositoryProject(repositoryKey, projectKey)

Remove repository project association

Remove repository project association

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.InsightsRepositoriesBetaApi();
let repositoryKey = "repositoryKey_example"; // String | The repository key
let projectKey = "projectKey_example"; // String | The project key
apiInstance.deleteRepositoryProject(repositoryKey, projectKey, (error, data, response) => {
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
 **repositoryKey** | **String**| The repository key | 
 **projectKey** | **String**| The project key | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getInsightsRepositories

> InsightsRepositoryCollection getInsightsRepositories(opts)

List repositories

Get a list of repositories  ### Expanding the repository collection response  LaunchDarkly supports expanding the repository collection response to include additional fields.  To expand the response, append the &#x60;expand&#x60; query parameter and include the following:  * &#x60;projects&#x60; includes details on all of the LaunchDarkly projects associated with each repository  For example, use &#x60;?expand&#x3D;projects&#x60; to include the &#x60;projects&#x60; field in the response. By default, this field is **not** included in the response. 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.InsightsRepositoriesBetaApi();
let opts = {
  'expand': "expand_example" // String | Expand properties in response. Options: `projects`
};
apiInstance.getInsightsRepositories(opts, (error, data, response) => {
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
 **expand** | **String**| Expand properties in response. Options: &#x60;projects&#x60; | [optional] 

### Return type

[**InsightsRepositoryCollection**](InsightsRepositoryCollection.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

