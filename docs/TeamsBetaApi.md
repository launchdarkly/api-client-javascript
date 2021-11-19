# LaunchDarklyApi.TeamsBetaApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteTeam**](TeamsBetaApi.md#deleteTeam) | **DELETE** /api/v2/teams/{key} | Delete team
[**getTeam**](TeamsBetaApi.md#getTeam) | **GET** /api/v2/teams/{key} | Get team
[**getTeams**](TeamsBetaApi.md#getTeams) | **GET** /api/v2/teams | List teams
[**patchTeam**](TeamsBetaApi.md#patchTeam) | **PATCH** /api/v2/teams/{key} | Update team
[**postTeam**](TeamsBetaApi.md#postTeam) | **POST** /api/v2/teams | Create team



## deleteTeam

> deleteTeam(key)

Delete team

Delete a team by key

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.TeamsBetaApi();
let key = "key_example"; // String | The team key
apiInstance.deleteTeam(key, (error, data, response) => {
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
 **key** | **String**| The team key | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTeam

> TeamRep getTeam(key)

Get team

Fetch a team by key

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.TeamsBetaApi();
let key = "key_example"; // String | The team key
apiInstance.getTeam(key, (error, data, response) => {
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
 **key** | **String**| The team key | 

### Return type

[**TeamRep**](TeamRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTeams

> TeamCollectionRep getTeams(opts)

List teams

Return a list of teams.  By default, this returns the first 20 teams. Page through this list with the &#x60;limit&#x60; parameter and by following the &#x60;first&#x60;, &#x60;prev&#x60;, &#x60;next&#x60;, and &#x60;last&#x60; links in the returned &#x60;_links&#x60; field. These links are not present if the pages they refer to don&#39;t exist. For example, the &#x60;first&#x60; and &#x60;prev&#x60; links will be missing from the response on the first page.  ### Filtering teams  LaunchDarkly supports the &#x60;query&#x60; field for filtering. &#x60;query&#x60; is a string that matches against the teams&#39; names and keys. It is not case sensitive. For example, the filter &#x60;query:abc&#x60; matches teams with the string &#x60;abc&#x60; in their name or key. 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.TeamsBetaApi();
let opts = {
  'limit': 789, // Number | The number of teams to return in the response. Defaults to 20.
  'offset': 789, // Number | Where to start in the list. This is for use with pagination. For example, an offset of 10 would skip the first ten items and then return the next `limit` items.
  'filter': "filter_example" // String | A comma-separated list of filters. Each filter is of the form `field:value`. Supported fields are explained above.
};
apiInstance.getTeams(opts, (error, data, response) => {
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
 **limit** | **Number**| The number of teams to return in the response. Defaults to 20. | [optional] 
 **offset** | **Number**| Where to start in the list. This is for use with pagination. For example, an offset of 10 would skip the first ten items and then return the next &#x60;limit&#x60; items. | [optional] 
 **filter** | **String**| A comma-separated list of filters. Each filter is of the form &#x60;field:value&#x60;. Supported fields are explained above. | [optional] 

### Return type

[**TeamCollectionRep**](TeamCollectionRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## patchTeam

> TeamCollectionRep patchTeam(key, teamPatchInput)

Update team

Perform a partial update to a team.  The body of a semantic patch request takes the following three properties:  1. comment &#x60;string&#x60;: (Optional) A description of the update. 1. instructions &#x60;array&#x60;: (Required) The action or list of actions to be performed by the update. Each update action in the list must be an object/hash table with a &#x60;kind&#x60; property, although depending on the action, other properties may be necessary. Read below for more information on the specific supported semantic patch instructions.  If any instruction in the patch encounters an error, the error will be returned and the flag will not be changed. In general, instructions will silently do nothing if the flag is already in the state requested by the patch instruction. They will generally error if a parameter refers to something that does not exist. Other specific error conditions are noted in the instruction descriptions.  ### Instructions  #### &#x60;addCustomRoles&#x60;  Adds custom roles to the team. Team members will have these custom roles granted to them.  ##### Parameters  - &#x60;values&#x60;: list of custom role keys  #### &#x60;removeCustomRoles&#x60;  Removes the custom roles on the team. Team members will no longer have these custom roles granted to them.  ##### Parameters  - &#x60;values&#x60;: list of custom role keys  #### &#x60;addMembers&#x60;  Adds members to the team.  ##### Parameters  - &#x60;values&#x60;: list of member IDs  #### &#x60;removeMembers&#x60;  Removes members from the team.  ##### Parameters  - &#x60;values&#x60;: list of member IDs  #### &#x60;addPermissionGrants&#x60;  Adds permission grants to members for the team, allowing them to, for example, act as a team maintainer. A permission grant may have either an &#x60;actionSet&#x60; or a list of &#x60;actions&#x60; but not both at the same time. The members do not have to be team members to have a permission grant for the team.  ##### Parameters  - &#x60;actionSet&#x60;: name of the action set - &#x60;actions&#x60;: list of actions - &#x60;memberIDs&#x60;: list of member IDs  #### &#x60;removePermissionGrants&#x60;  Removes permission grants from members for the team. The &#x60;actionSet&#x60; and &#x60;actions&#x60; must match an existing permission grant.  ##### Parameters  - &#x60;actionSet&#x60;: name of the action set - &#x60;actions&#x60;: list of actions - &#x60;memberIDs&#x60;: list of member IDs  #### &#x60;updateDescription&#x60;  Updates the team&#39;s description.  ##### Parameters  - &#x60;value&#x60;: the team&#39;s new description  #### &#x60;updateName&#x60;  Updates the team&#39;s name.  ##### Parameters  - &#x60;value&#x60;: the team&#39;s new name 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.TeamsBetaApi();
let key = "key_example"; // String | The team key
let teamPatchInput = new LaunchDarklyApi.TeamPatchInput(); // TeamPatchInput | 
apiInstance.patchTeam(key, teamPatchInput, (error, data, response) => {
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
 **key** | **String**| The team key | 
 **teamPatchInput** | [**TeamPatchInput**](TeamPatchInput.md)|  | 

### Return type

[**TeamCollectionRep**](TeamCollectionRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postTeam

> TeamRep postTeam(teamPostInput)

Create team

Create a team

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.TeamsBetaApi();
let teamPostInput = new LaunchDarklyApi.TeamPostInput(); // TeamPostInput | 
apiInstance.postTeam(teamPostInput, (error, data, response) => {
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
 **teamPostInput** | [**TeamPostInput**](TeamPostInput.md)|  | 

### Return type

[**TeamRep**](TeamRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

