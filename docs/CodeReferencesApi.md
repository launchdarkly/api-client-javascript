# LaunchDarklyApi.CodeReferencesApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteBranches**](CodeReferencesApi.md#deleteBranches) | **POST** /api/v2/code-refs/repositories/{repo}/branch-delete-tasks | Delete branches
[**deleteRepository**](CodeReferencesApi.md#deleteRepository) | **DELETE** /api/v2/code-refs/repositories/{repo} | Delete repository
[**getBranch**](CodeReferencesApi.md#getBranch) | **GET** /api/v2/code-refs/repositories/{repo}/branches/{branch} | Get branch
[**getBranches**](CodeReferencesApi.md#getBranches) | **GET** /api/v2/code-refs/repositories/{repo}/branches | List branches
[**getExtinctions**](CodeReferencesApi.md#getExtinctions) | **GET** /api/v2/code-refs/extinctions | List extinctions
[**getRepositories**](CodeReferencesApi.md#getRepositories) | **GET** /api/v2/code-refs/repositories | List repositories
[**getRepository**](CodeReferencesApi.md#getRepository) | **GET** /api/v2/code-refs/repositories/{repo} | Get repository
[**getRootStatistic**](CodeReferencesApi.md#getRootStatistic) | **GET** /api/v2/code-refs/statistics | Get links to code reference repositories for each project
[**getStatistics**](CodeReferencesApi.md#getStatistics) | **GET** /api/v2/code-refs/statistics/{projectKey} | Get code references statistics for flags
[**patchRepository**](CodeReferencesApi.md#patchRepository) | **PATCH** /api/v2/code-refs/repositories/{repo} | Update repository
[**postExtinction**](CodeReferencesApi.md#postExtinction) | **POST** /api/v2/code-refs/repositories/{repo}/branches/{branch}/extinction-events | Create extinction
[**postRepository**](CodeReferencesApi.md#postRepository) | **POST** /api/v2/code-refs/repositories | Create repository
[**putBranch**](CodeReferencesApi.md#putBranch) | **PUT** /api/v2/code-refs/repositories/{repo}/branches/{branch} | Upsert branch



## deleteBranches

> deleteBranches(repo, requestBody)

Delete branches

Asynchronously delete a number of branches.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.CodeReferencesApi();
let repo = "repo_example"; // String | The repository name to delete branches for.
let requestBody = ["branch-to-be-deleted","another-branch-to-be-deleted"]; // [String] | 
apiInstance.deleteBranches(repo, requestBody, (error, data, response) => {
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
 **repo** | **String**| The repository name to delete branches for. | 
 **requestBody** | [**[String]**](String.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteRepository

> deleteRepository(repo)

Delete repository

Delete a repository with the specified name.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.CodeReferencesApi();
let repo = "repo_example"; // String | The repository name
apiInstance.deleteRepository(repo, (error, data, response) => {
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
 **repo** | **String**| The repository name | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBranch

> BranchRep getBranch(repo, branch, opts)

Get branch

Get a specific branch in a repository.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.CodeReferencesApi();
let repo = "repo_example"; // String | The repository name
let branch = "branch_example"; // String | The url-encoded branch name
let opts = {
  'projKey': "projKey_example", // String | Filter results to a specific project
  'flagKey': "flagKey_example" // String | Filter results to a specific flag key
};
apiInstance.getBranch(repo, branch, opts, (error, data, response) => {
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
 **repo** | **String**| The repository name | 
 **branch** | **String**| The url-encoded branch name | 
 **projKey** | **String**| Filter results to a specific project | [optional] 
 **flagKey** | **String**| Filter results to a specific flag key | [optional] 

### Return type

[**BranchRep**](BranchRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBranches

> BranchCollectionRep getBranches(repo)

List branches

Get a list of branches.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.CodeReferencesApi();
let repo = "repo_example"; // String | The repository name
apiInstance.getBranches(repo, (error, data, response) => {
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
 **repo** | **String**| The repository name | 

### Return type

[**BranchCollectionRep**](BranchCollectionRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getExtinctions

> ExtinctionCollectionRep getExtinctions(opts)

List extinctions

Get a list of all extinctions. LaunchDarkly creates an extinction event after you remove all code references to a flag. To learn more, read [Understanding extinction events](https://docs.launchdarkly.com/home/code/code-references#understanding-extinction-events).

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.CodeReferencesApi();
let opts = {
  'repoName': "repoName_example", // String | Filter results to a specific repository
  'branchName': "branchName_example", // String | Filter results to a specific branch. By default, only the default branch will be queried for extinctions.
  'projKey': "projKey_example", // String | Filter results to a specific project
  'flagKey': "flagKey_example", // String | Filter results to a specific flag key
  'from': 789, // Number | Filter results to a specific timeframe based on commit time, expressed as a Unix epoch time in milliseconds. Must be used with `to`.
  'to': 789 // Number | Filter results to a specific timeframe based on commit time, expressed as a Unix epoch time in milliseconds. Must be used with `from`.
};
apiInstance.getExtinctions(opts, (error, data, response) => {
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
 **repoName** | **String**| Filter results to a specific repository | [optional] 
 **branchName** | **String**| Filter results to a specific branch. By default, only the default branch will be queried for extinctions. | [optional] 
 **projKey** | **String**| Filter results to a specific project | [optional] 
 **flagKey** | **String**| Filter results to a specific flag key | [optional] 
 **from** | **Number**| Filter results to a specific timeframe based on commit time, expressed as a Unix epoch time in milliseconds. Must be used with &#x60;to&#x60;. | [optional] 
 **to** | **Number**| Filter results to a specific timeframe based on commit time, expressed as a Unix epoch time in milliseconds. Must be used with &#x60;from&#x60;. | [optional] 

### Return type

[**ExtinctionCollectionRep**](ExtinctionCollectionRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRepositories

> RepositoryCollectionRep getRepositories(opts)

List repositories

Get a list of connected repositories. Optionally, you can include branch metadata with the &#x60;withBranches&#x60; query parameter. Embed references for the default branch with &#x60;ReferencesForDefaultBranch&#x60;. You can also filter the list of code references by project key and flag key.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.CodeReferencesApi();
let opts = {
  'withBranches': "withBranches_example", // String | If set to any value, the endpoint returns repositories with associated branch data
  'withReferencesForDefaultBranch': "withReferencesForDefaultBranch_example", // String | If set to any value, the endpoint returns repositories with associated branch data, as well as code references for the default git branch
  'projKey': "projKey_example", // String | A LaunchDarkly project key. If provided, this filters code reference results to the specified project.
  'flagKey': "flagKey_example" // String | If set to any value, the endpoint returns repositories with associated branch data, as well as code references for the default git branch
};
apiInstance.getRepositories(opts, (error, data, response) => {
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
 **withBranches** | **String**| If set to any value, the endpoint returns repositories with associated branch data | [optional] 
 **withReferencesForDefaultBranch** | **String**| If set to any value, the endpoint returns repositories with associated branch data, as well as code references for the default git branch | [optional] 
 **projKey** | **String**| A LaunchDarkly project key. If provided, this filters code reference results to the specified project. | [optional] 
 **flagKey** | **String**| If set to any value, the endpoint returns repositories with associated branch data, as well as code references for the default git branch | [optional] 

### Return type

[**RepositoryCollectionRep**](RepositoryCollectionRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRepository

> RepositoryRep getRepository(repo)

Get repository

Get a single repository by name.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.CodeReferencesApi();
let repo = "repo_example"; // String | The repository name
apiInstance.getRepository(repo, (error, data, response) => {
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
 **repo** | **String**| The repository name | 

### Return type

[**RepositoryRep**](RepositoryRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRootStatistic

> StatisticsRoot getRootStatistic()

Get links to code reference repositories for each project

Get links for all projects that have code references.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.CodeReferencesApi();
apiInstance.getRootStatistic((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**StatisticsRoot**](StatisticsRoot.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getStatistics

> StatisticCollectionRep getStatistics(projectKey, opts)

Get code references statistics for flags

Get statistics about all the code references across repositories for all flags in your project that have code references in the default branch, for example, &#x60;main&#x60;. Optionally, you can include the &#x60;flagKey&#x60; query parameter to limit your request to statistics about code references for a single flag. This endpoint returns the number of references to your flag keys in your repositories, as well as a link to each repository.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.CodeReferencesApi();
let projectKey = "projectKey_example"; // String | The project key
let opts = {
  'flagKey': "flagKey_example" // String | Filter results to a specific flag key
};
apiInstance.getStatistics(projectKey, opts, (error, data, response) => {
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
 **flagKey** | **String**| Filter results to a specific flag key | [optional] 

### Return type

[**StatisticCollectionRep**](StatisticCollectionRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## patchRepository

> RepositoryRep patchRepository(repo, patchOperation)

Update repository

Update a repository&#39;s settings. The request must be a valid JSON Patch document describing the changes to be made to the repository.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.CodeReferencesApi();
let repo = "repo_example"; // String | The repository name
let patchOperation = [{"op":"replace","path":"/defaultBranch","value":"main"}]; // [PatchOperation] | 
apiInstance.patchRepository(repo, patchOperation, (error, data, response) => {
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
 **repo** | **String**| The repository name | 
 **patchOperation** | [**[PatchOperation]**](PatchOperation.md)|  | 

### Return type

[**RepositoryRep**](RepositoryRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postExtinction

> postExtinction(repo, branch, extinction)

Create extinction

Create a new extinction.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.CodeReferencesApi();
let repo = "repo_example"; // String | The repository name
let branch = "branch_example"; // String | The URL-encoded branch name
let extinction = [new LaunchDarklyApi.Extinction()]; // [Extinction] | 
apiInstance.postExtinction(repo, branch, extinction, (error, data, response) => {
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
 **repo** | **String**| The repository name | 
 **branch** | **String**| The URL-encoded branch name | 
 **extinction** | [**[Extinction]**](Extinction.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postRepository

> RepositoryRep postRepository(repositoryPost)

Create repository

Create a repository with the specified name.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.CodeReferencesApi();
let repositoryPost = new LaunchDarklyApi.RepositoryPost(); // RepositoryPost | 
apiInstance.postRepository(repositoryPost, (error, data, response) => {
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
 **repositoryPost** | [**RepositoryPost**](RepositoryPost.md)|  | 

### Return type

[**RepositoryRep**](RepositoryRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putBranch

> putBranch(repo, branch, putBranch)

Upsert branch

Create a new branch if it doesn&#39;t exist, or update the branch if it already exists.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.CodeReferencesApi();
let repo = "repo_example"; // String | The repository name
let branch = "branch_example"; // String | The URL-encoded branch name
let putBranch = new LaunchDarklyApi.PutBranch(); // PutBranch | 
apiInstance.putBranch(repo, branch, putBranch, (error, data, response) => {
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
 **repo** | **String**| The repository name | 
 **branch** | **String**| The URL-encoded branch name | 
 **putBranch** | [**PutBranch**](PutBranch.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

