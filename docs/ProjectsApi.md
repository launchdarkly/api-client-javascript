# LaunchDarklyApi.ProjectsApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteProject**](ProjectsApi.md#deleteProject) | **DELETE** /api/v2/projects/{projectKey} | Delete project
[**getFlagDefaultsByProject**](ProjectsApi.md#getFlagDefaultsByProject) | **GET** /api/v2/projects/{projectKey}/flag-defaults | Get flag defaults for project
[**getProject**](ProjectsApi.md#getProject) | **GET** /api/v2/projects/{projectKey} | Get project
[**getProjects**](ProjectsApi.md#getProjects) | **GET** /api/v2/projects | List projects
[**patchFlagDefaultsByProject**](ProjectsApi.md#patchFlagDefaultsByProject) | **PATCH** /api/v2/projects/{projectKey}/flag-defaults | Update flag default for project
[**patchProject**](ProjectsApi.md#patchProject) | **PATCH** /api/v2/projects/{projectKey} | Update project
[**postProject**](ProjectsApi.md#postProject) | **POST** /api/v2/projects | Create project
[**putFlagDefaultsByProject**](ProjectsApi.md#putFlagDefaultsByProject) | **PUT** /api/v2/projects/{projectKey}/flag-defaults | Create or update flag defaults for project



## deleteProject

> deleteProject(projectKey)

Delete project

Delete a project by key. Use this endpoint with caution. Deleting a project will delete all associated environments and feature flags. You cannot delete the last project in an account.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ProjectsApi();
let projectKey = "projectKey_example"; // String | The project key
apiInstance.deleteProject(projectKey, (error, data, response) => {
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
 **projectKey** | **String**| The project key | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFlagDefaultsByProject

> FlagDefaultsRep getFlagDefaultsByProject(projectKey)

Get flag defaults for project

Get the flag defaults for a specific project.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ProjectsApi();
let projectKey = "projectKey_example"; // String | The project key
apiInstance.getFlagDefaultsByProject(projectKey, (error, data, response) => {
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

### Return type

[**FlagDefaultsRep**](FlagDefaultsRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProject

> Project getProject(projectKey, opts)

Get project

Get a single project by key.  ### Expanding the project response  LaunchDarkly supports one field for expanding the \&quot;Get project\&quot; response. By default, these fields are **not** included in the response.  To expand the response, append the &#x60;expand&#x60; query parameter and add a comma-separated list with any of the following fields: * &#x60;environments&#x60; includes a paginated list of the project environments.  For example, &#x60;expand&#x3D;environments&#x60; includes the &#x60;environments&#x60; field for the project in the response. 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ProjectsApi();
let projectKey = "projectKey_example"; // String | The project key.
let opts = {
  'expand': "expand_example" // String | A comma-separated list of properties that can reveal additional information in the response.
};
apiInstance.getProject(projectKey, opts, (error, data, response) => {
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
 **projectKey** | **String**| The project key. | 
 **expand** | **String**| A comma-separated list of properties that can reveal additional information in the response. | [optional] 

### Return type

[**Project**](Project.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProjects

> Projects getProjects(opts)

List projects

Return a list of projects.  By default, this returns the first 20 projects. Page through this list with the &#x60;limit&#x60; parameter and by following the &#x60;first&#x60;, &#x60;prev&#x60;, &#x60;next&#x60;, and &#x60;last&#x60; links in the &#x60;_links&#x60; field that returns. If those links do not appear, the pages they refer to don&#39;t exist. For example, the &#x60;first&#x60; and &#x60;prev&#x60; links will be missing from the response on the first page, because there is no previous page and you cannot return to the first page when you are already on the first page.  ### Filtering projects  LaunchDarkly supports three fields for filters: - &#x60;query&#x60; is a string that matches against the projects&#39; names and keys. It is not case sensitive. - &#x60;tags&#x60; is a &#x60;+&#x60;-separated list of project tags. It filters the list of projects that have all of the tags in the list. - &#x60;keys&#x60; is a &#x60;|&#x60; separated list of project keys. It filters the list to projects that have any of the keys in the list.  For example, the filter &#x60;filter&#x3D;query:abc,tags:tag-1+tag-2&#x60; matches projects with the string &#x60;abc&#x60; in their name or key and also are tagged with &#x60;tag-1&#x60; and &#x60;tag-2&#x60;. The filter is not case-sensitive.  The documented values for &#x60;filter&#x60; query parameters are prior to URL encoding. For example, the &#x60;+&#x60; in &#x60;filter&#x3D;tags:tag-1+tag-2&#x60; must be encoded to &#x60;%2B&#x60;.  ### Sorting projects  LaunchDarkly supports two fields for sorting: - &#x60;name&#x60; sorts by project name. - &#x60;createdOn&#x60; sorts by the creation date of the project.  For example, &#x60;sort&#x3D;name&#x60; sorts the response by project name in ascending order.  ### Expanding the projects response  LaunchDarkly supports one field for expanding the \&quot;List projects\&quot; response. By default, these fields are **not** included in the response.  To expand the response, append the &#x60;expand&#x60; query parameter and add a comma-separated list with the &#x60;environments&#x60; field.  * &#x60;environments&#x60; includes a paginated list of the project environments.  For example, &#x60;expand&#x3D;environments&#x60; includes the &#x60;environments&#x60; field for each project in the response. 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ProjectsApi();
let opts = {
  'limit': 789, // Number | The number of projects to return in the response. Defaults to 20.
  'offset': 789, // Number | Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and returns the next `limit` items.
  'filter': "filter_example", // String | A comma-separated list of filters. Each filter is constructed as `field:value`.
  'sort': "sort_example", // String | A comma-separated list of fields to sort by. Fields prefixed by a dash ( - ) sort in descending order.
  'expand': "expand_example" // String | A comma-separated list of properties that can reveal additional information in the response.
};
apiInstance.getProjects(opts, (error, data, response) => {
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
 **limit** | **Number**| The number of projects to return in the response. Defaults to 20. | [optional] 
 **offset** | **Number**| Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and returns the next &#x60;limit&#x60; items. | [optional] 
 **filter** | **String**| A comma-separated list of filters. Each filter is constructed as &#x60;field:value&#x60;. | [optional] 
 **sort** | **String**| A comma-separated list of fields to sort by. Fields prefixed by a dash ( - ) sort in descending order. | [optional] 
 **expand** | **String**| A comma-separated list of properties that can reveal additional information in the response. | [optional] 

### Return type

[**Projects**](Projects.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## patchFlagDefaultsByProject

> UpsertPayloadRep patchFlagDefaultsByProject(projectKey, patchOperation)

Update flag default for project

Update a flag default. Updating a flag default uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) or [JSON merge patch](https://datatracker.ietf.org/doc/html/rfc7386) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ProjectsApi();
let projectKey = "projectKey_example"; // String | The project key
let patchOperation = [new LaunchDarklyApi.PatchOperation()]; // [PatchOperation] | 
apiInstance.patchFlagDefaultsByProject(projectKey, patchOperation, (error, data, response) => {
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
 **patchOperation** | [**[PatchOperation]**](PatchOperation.md)|  | 

### Return type

[**UpsertPayloadRep**](UpsertPayloadRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## patchProject

> ProjectRep patchProject(projectKey, patchOperation)

Update project

Update a project. Updating a project uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).&lt;br/&gt;&lt;br/&gt;To add an element to the project fields that are arrays, set the &#x60;path&#x60; to the name of the field and then append &#x60;/&lt;array index&gt;&#x60;. Use &#x60;/0&#x60; to add to the beginning of the array. Use &#x60;/-&#x60; to add to the end of the array.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ProjectsApi();
let projectKey = "projectKey_example"; // String | The project key
let patchOperation = [{"op":"add","path":"/tags/0","value":"another-tag"}]; // [PatchOperation] | 
apiInstance.patchProject(projectKey, patchOperation, (error, data, response) => {
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
 **patchOperation** | [**[PatchOperation]**](PatchOperation.md)|  | 

### Return type

[**ProjectRep**](ProjectRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postProject

> ProjectRep postProject(projectPost)

Create project

Create a new project with the given key and name. Project keys must be unique within an account.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ProjectsApi();
let projectPost = {"key":"project-key-123abc","name":"My Project"}; // ProjectPost | 
apiInstance.postProject(projectPost, (error, data, response) => {
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
 **projectPost** | [**ProjectPost**](ProjectPost.md)|  | 

### Return type

[**ProjectRep**](ProjectRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putFlagDefaultsByProject

> UpsertPayloadRep putFlagDefaultsByProject(projectKey, upsertFlagDefaultsPayload)

Create or update flag defaults for project

Create or update flag defaults for a project.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.ProjectsApi();
let projectKey = "projectKey_example"; // String | The project key
let upsertFlagDefaultsPayload = new LaunchDarklyApi.UpsertFlagDefaultsPayload(); // UpsertFlagDefaultsPayload | 
apiInstance.putFlagDefaultsByProject(projectKey, upsertFlagDefaultsPayload, (error, data, response) => {
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
 **upsertFlagDefaultsPayload** | [**UpsertFlagDefaultsPayload**](UpsertFlagDefaultsPayload.md)|  | 

### Return type

[**UpsertPayloadRep**](UpsertPayloadRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

