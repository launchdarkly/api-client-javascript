# LaunchDarklyApi.TeamsApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteTeam**](TeamsApi.md#deleteTeam) | **DELETE** /api/v2/teams/{teamKey} | Delete team
[**getTeam**](TeamsApi.md#getTeam) | **GET** /api/v2/teams/{teamKey} | Get team
[**getTeamMaintainers**](TeamsApi.md#getTeamMaintainers) | **GET** /api/v2/teams/{teamKey}/maintainers | Get team maintainers
[**getTeamRoles**](TeamsApi.md#getTeamRoles) | **GET** /api/v2/teams/{teamKey}/roles | Get team custom roles
[**getTeams**](TeamsApi.md#getTeams) | **GET** /api/v2/teams | List teams
[**patchTeam**](TeamsApi.md#patchTeam) | **PATCH** /api/v2/teams/{teamKey} | Update team
[**postTeam**](TeamsApi.md#postTeam) | **POST** /api/v2/teams | Create team
[**postTeamMembers**](TeamsApi.md#postTeamMembers) | **POST** /api/v2/teams/{teamKey}/members | Add multiple members to team



## deleteTeam

> deleteTeam(teamKey)

Delete team

Delete a team by key. To learn more, read [Deleting teams](https://launchdarkly.com/docs/home/account/delete-teams).

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.TeamsApi();
let teamKey = "teamKey_example"; // String | The team key
apiInstance.deleteTeam(teamKey, (error, data, response) => {
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
 **teamKey** | **String**| The team key | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTeam

> Team getTeam(teamKey, opts)

Get team

Fetch a team by key.  ### Expanding the teams response LaunchDarkly supports several fields for expanding the \&quot;Get team\&quot; response. By default, these fields are **not** included in the response.  To expand the response, append the &#x60;expand&#x60; query parameter and add a comma-separated list with any of the following fields:  * &#x60;members&#x60; includes the total count of members that belong to the team. * &#x60;roles&#x60; includes a paginated list of the custom roles that you have assigned to the team. * &#x60;roleAttributes&#x60; includes a list of the role attributes that you have assigned to the team. * &#x60;projects&#x60; includes a paginated list of the projects that the team has any write access to. * &#x60;maintainers&#x60; includes a paginated list of the maintainers that you have assigned to the team.  For example, &#x60;expand&#x3D;members,roles&#x60; includes the &#x60;members&#x60; and &#x60;roles&#x60; fields in the response. 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.TeamsApi();
let teamKey = "teamKey_example"; // String | The team key.
let opts = {
  'expand': "expand_example" // String | A comma-separated list of properties that can reveal additional information in the response.
};
apiInstance.getTeam(teamKey, opts, (error, data, response) => {
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
 **teamKey** | **String**| The team key. | 
 **expand** | **String**| A comma-separated list of properties that can reveal additional information in the response. | [optional] 

### Return type

[**Team**](Team.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTeamMaintainers

> TeamMaintainers getTeamMaintainers(teamKey, opts)

Get team maintainers

Fetch the maintainers that have been assigned to the team. To learn more, read [Managing team maintainers](https://launchdarkly.com/docs/home/account/team-maintainers).

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.TeamsApi();
let teamKey = "teamKey_example"; // String | The team key
let opts = {
  'limit': 789, // Number | The number of maintainers to return in the response. Defaults to 20.
  'offset': 789 // Number | Where to start in the list. This is for use with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`.
};
apiInstance.getTeamMaintainers(teamKey, opts, (error, data, response) => {
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
 **teamKey** | **String**| The team key | 
 **limit** | **Number**| The number of maintainers to return in the response. Defaults to 20. | [optional] 
 **offset** | **Number**| Where to start in the list. This is for use with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query &#x60;limit&#x60;. | [optional] 

### Return type

[**TeamMaintainers**](TeamMaintainers.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTeamRoles

> TeamCustomRoles getTeamRoles(teamKey, opts)

Get team custom roles

Fetch the custom roles that have been assigned to the team. To learn more, read [Managing team permissions](https://launchdarkly.com/docs/home/account/team-permissions).

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.TeamsApi();
let teamKey = "teamKey_example"; // String | The team key
let opts = {
  'limit': 789, // Number | The number of roles to return in the response. Defaults to 20.
  'offset': 789 // Number | Where to start in the list. This is for use with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`.
};
apiInstance.getTeamRoles(teamKey, opts, (error, data, response) => {
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
 **teamKey** | **String**| The team key | 
 **limit** | **Number**| The number of roles to return in the response. Defaults to 20. | [optional] 
 **offset** | **Number**| Where to start in the list. This is for use with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query &#x60;limit&#x60;. | [optional] 

### Return type

[**TeamCustomRoles**](TeamCustomRoles.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTeams

> Teams getTeams(opts)

List teams

Return a list of teams.  By default, this returns the first 20 teams. Page through this list with the &#x60;limit&#x60; parameter and by following the &#x60;first&#x60;, &#x60;prev&#x60;, &#x60;next&#x60;, and &#x60;last&#x60; links in the &#x60;_links&#x60; field that returns. If those links do not appear, the pages they refer to don&#39;t exist. For example, the &#x60;first&#x60; and &#x60;prev&#x60; links will be missing from the response on the first page, because there is no previous page and you cannot return to the first page when you are already on the first page.  ### Filtering teams  LaunchDarkly supports the following fields for filters:  - &#x60;query&#x60; is a string that matches against the teams&#39; names and keys. It is not case-sensitive.   - A request with &#x60;query:abc&#x60; returns teams with the string &#x60;abc&#x60; in their name or key. - &#x60;nomembers&#x60; is a boolean that filters the list of teams who have 0 members   - A request with &#x60;nomembers:true&#x60; returns teams that have 0 members   - A request with &#x60;nomembers:false&#x60; returns teams that have 1 or more members  ### Expanding the teams response LaunchDarkly supports expanding several fields in the \&quot;List teams\&quot; response. By default, these fields are **not** included in the response.  To expand the response, append the &#x60;expand&#x60; query parameter and add a comma-separated list with any of the following fields:  * &#x60;members&#x60; includes the total count of members that belong to the team. * &#x60;roles&#x60; includes a paginated list of the custom roles that you have assigned to the team. * &#x60;roleAttributes&#x60; includes a list of the role attributes that you have assigned to the team. * &#x60;projects&#x60; includes a paginated list of the projects that the team has any write access to. * &#x60;maintainers&#x60; includes a paginated list of the maintainers that you have assigned to the team.  For example, &#x60;expand&#x3D;members,maintainers&#x60; includes the &#x60;members&#x60; and &#x60;maintainers&#x60; fields in the response. 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.TeamsApi();
let opts = {
  'limit': 789, // Number | The number of teams to return in the response. Defaults to 20.
  'offset': 789, // Number | Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and returns the next `limit` items.
  'filter': "filter_example", // String | A comma-separated list of filters. Each filter is constructed as `field:value`.
  'expand': "expand_example" // String | A comma-separated list of properties that can reveal additional information in the response.
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
 **offset** | **Number**| Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and returns the next &#x60;limit&#x60; items. | [optional] 
 **filter** | **String**| A comma-separated list of filters. Each filter is constructed as &#x60;field:value&#x60;. | [optional] 
 **expand** | **String**| A comma-separated list of properties that can reveal additional information in the response. | [optional] 

### Return type

[**Teams**](Teams.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## patchTeam

> Team patchTeam(teamKey, teamPatchInput, opts)

Update team

Perform a partial update to a team. Updating a team uses the semantic patch format.  To make a semantic patch request, you must append &#x60;domain-model&#x3D;launchdarkly.semanticpatch&#x60; to your &#x60;Content-Type&#x60; header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).  ### Instructions  Semantic patch requests support the following &#x60;kind&#x60; instructions for updating teams. Several of the instructions require one or more member IDs as parameters. The member ID is returned as part of the [List account members](https://launchdarkly.com/docs/ld-docs/api/account-members/get-members) response. It is the &#x60;_id&#x60; field of each element in the &#x60;items&#x60; array.   &lt;details&gt; &lt;summary&gt;Click to expand instructions for &lt;strong&gt;updating teams&lt;/strong&gt;&lt;/summary&gt;  #### addCustomRoles  Adds custom roles to the team. Team members will have these custom roles granted to them.  ##### Parameters  - &#x60;values&#x60;: List of custom role keys.  Here&#39;s an example:  &#x60;&#x60;&#x60;json {   \&quot;instructions\&quot;: [{     \&quot;kind\&quot;: \&quot;addCustomRoles\&quot;,     \&quot;values\&quot;: [ \&quot;example-custom-role\&quot; ]   }] } &#x60;&#x60;&#x60;  #### removeCustomRoles  Removes custom roles from the team. The app will no longer grant these custom roles to the team members.  ##### Parameters  - &#x60;values&#x60;: List of custom role keys.  Here&#39;s an example:  &#x60;&#x60;&#x60;json {   \&quot;instructions\&quot;: [{     \&quot;kind\&quot;: \&quot;removeCustomRoles\&quot;,     \&quot;values\&quot;: [ \&quot;example-custom-role\&quot; ]   }] } &#x60;&#x60;&#x60;  #### addRoleAttribute  Adds a role attribute to a team. Team members will have these role attribute values scoped for all custom roles granted to them.  ##### Parameters  - &#x60;key&#x60;: The role attribute key to add. - &#x60;values&#x60;: List of role attribute values for that key.  Here&#39;s an example:  &#x60;&#x60;&#x60;json {   \&quot;instructions\&quot;: [     {       \&quot;kind\&quot;: \&quot;addRoleAttribute\&quot;,       \&quot;key\&quot;: \&quot;testAttribute\&quot;,       \&quot;values\&quot;: [\&quot;someNewValue\&quot;, \&quot;someOtherNewValue\&quot;]     }   ] } &#x60;&#x60;&#x60; #### updateRoleAttribute  Updates a role attribute on the team. Any existing values for the given key will be replaced with the new values. Team members will have these role attribute values scoped for all custom roles granted to them.  ##### Parameters  - &#x60;key&#x60;: The role attribute key to update. - &#x60;values&#x60;: List of role attribute values for that key.  Here&#39;s an example: &#x60;&#x60;&#x60;json {   \&quot;instructions\&quot;: [     {       \&quot;kind\&quot;: \&quot;updateRoleAttribute\&quot;,       \&quot;key\&quot;: \&quot;testAttribute\&quot;,       \&quot;values\&quot;: [\&quot;someNewValue\&quot;, \&quot;someOtherNewValue\&quot;]     }   ] } &#x60;&#x60;&#x60; #### removeRoleAttribute  Removes a role attribute from the team.  ##### Parameters  - &#x60;key&#x60;: The role attribute key to remove.  Here&#39;s an example: &#x60;&#x60;&#x60;json {   \&quot;instructions\&quot;: [     {       \&quot;kind\&quot;: \&quot;removeRoleAttribute\&quot;,       \&quot;key\&quot;: \&quot;testAttribute\&quot;     }   ] } &#x60;&#x60;&#x60;  #### addMembers  Adds members to the team.  ##### Parameters  - &#x60;values&#x60;: List of member IDs to add.  Here&#39;s an example:  &#x60;&#x60;&#x60;json {   \&quot;instructions\&quot;: [{     \&quot;kind\&quot;: \&quot;addMembers\&quot;,     \&quot;values\&quot;: [ \&quot;1234a56b7c89d012345e678f\&quot;, \&quot;507f1f77bcf86cd799439011\&quot; ]   }] } &#x60;&#x60;&#x60;  #### removeMembers  Removes members from the team.  ##### Parameters  - &#x60;values&#x60;: List of member IDs to remove.  Here&#39;s an example:  &#x60;&#x60;&#x60;json {   \&quot;instructions\&quot;: [{     \&quot;kind\&quot;: \&quot;removeMembers\&quot;,     \&quot;values\&quot;: [ \&quot;1234a56b7c89d012345e678f\&quot;, \&quot;507f1f77bcf86cd799439011\&quot; ]   }] } &#x60;&#x60;&#x60;  #### replaceMembers  Replaces the existing members of the team with the new members.  ##### Parameters  - &#x60;values&#x60;: List of member IDs of the new members.  Here&#39;s an example:  &#x60;&#x60;&#x60;json {   \&quot;instructions\&quot;: [{     \&quot;kind\&quot;: \&quot;replaceMembers\&quot;,     \&quot;values\&quot;: [ \&quot;1234a56b7c89d012345e678f\&quot;, \&quot;507f1f77bcf86cd799439011\&quot; ]   }] } &#x60;&#x60;&#x60;  #### addPermissionGrants  Adds permission grants to members for the team. For example, a permission grant could allow a member to act as a team maintainer. A permission grant may have either an &#x60;actionSet&#x60; or a list of &#x60;actions&#x60; but not both at the same time. The members do not have to be team members to have a permission grant for the team.  ##### Parameters  - &#x60;actionSet&#x60;: Name of the action set. - &#x60;actions&#x60;: List of actions. - &#x60;memberIDs&#x60;: List of member IDs.  Here&#39;s an example:  &#x60;&#x60;&#x60;json {   \&quot;instructions\&quot;: [{     \&quot;kind\&quot;: \&quot;addPermissionGrants\&quot;,     \&quot;actions\&quot;: [ \&quot;updateTeamName\&quot;, \&quot;updateTeamDescription\&quot; ],     \&quot;memberIDs\&quot;: [ \&quot;1234a56b7c89d012345e678f\&quot;, \&quot;507f1f77bcf86cd799439011\&quot; ]   }] } &#x60;&#x60;&#x60;  #### removePermissionGrants  Removes permission grants from members for the team. A permission grant may have either an &#x60;actionSet&#x60; or a list of &#x60;actions&#x60; but not both at the same time. The &#x60;actionSet&#x60; and &#x60;actions&#x60; must match an existing permission grant.  ##### Parameters  - &#x60;actionSet&#x60;: Name of the action set. - &#x60;actions&#x60;: List of actions. - &#x60;memberIDs&#x60;: List of member IDs.  Here&#39;s an example:  &#x60;&#x60;&#x60;json {   \&quot;instructions\&quot;: [{     \&quot;kind\&quot;: \&quot;removePermissionGrants\&quot;,     \&quot;actions\&quot;: [ \&quot;updateTeamName\&quot;, \&quot;updateTeamDescription\&quot; ],     \&quot;memberIDs\&quot;: [ \&quot;1234a56b7c89d012345e678f\&quot;, \&quot;507f1f77bcf86cd799439011\&quot; ]   }] } &#x60;&#x60;&#x60;  #### updateDescription  Updates the description of the team.  ##### Parameters  - &#x60;value&#x60;: The new description.  Here&#39;s an example:  &#x60;&#x60;&#x60;json {   \&quot;instructions\&quot;: [{     \&quot;kind\&quot;: \&quot;updateDescription\&quot;,     \&quot;value\&quot;: \&quot;Updated team description\&quot;   }] } &#x60;&#x60;&#x60;  #### updateName  Updates the name of the team.  ##### Parameters  - &#x60;value&#x60;: The new name.  Here&#39;s an example:  &#x60;&#x60;&#x60;json {   \&quot;instructions\&quot;: [{     \&quot;kind\&quot;: \&quot;updateName\&quot;,     \&quot;value\&quot;: \&quot;Updated team name\&quot;   }] } &#x60;&#x60;&#x60;  &lt;/details&gt;  ### Expanding the teams response LaunchDarkly supports four fields for expanding the \&quot;Update team\&quot; response. By default, these fields are **not** included in the response.  To expand the response, append the &#x60;expand&#x60; query parameter and add a comma-separated list with any of the following fields:  * &#x60;members&#x60; includes the total count of members that belong to the team. * &#x60;roles&#x60; includes a paginated list of the custom roles that you have assigned to the team. * &#x60;projects&#x60; includes a paginated list of the projects that the team has any write access to. * &#x60;maintainers&#x60; includes a paginated list of the maintainers that you have assigned to the team.  For example, &#x60;expand&#x3D;members,roles&#x60; includes the &#x60;members&#x60; and &#x60;roles&#x60; fields in the response. 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.TeamsApi();
let teamKey = "teamKey_example"; // String | The team key
let teamPatchInput = {"comment":"Optional comment about the update","instructions":[{"kind":"updateDescription","value":"New description for the team"}]}; // TeamPatchInput | 
let opts = {
  'expand': "expand_example" // String | A comma-separated list of properties that can reveal additional information in the response. Supported fields are explained above.
};
apiInstance.patchTeam(teamKey, teamPatchInput, opts, (error, data, response) => {
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
 **teamKey** | **String**| The team key | 
 **teamPatchInput** | [**TeamPatchInput**](TeamPatchInput.md)|  | 
 **expand** | **String**| A comma-separated list of properties that can reveal additional information in the response. Supported fields are explained above. | [optional] 

### Return type

[**Team**](Team.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postTeam

> Team postTeam(teamPostInput, opts)

Create team

Create a team. To learn more, read [Creating a team](https://launchdarkly.com/docs/home/account/create-teams).  ### Expanding the teams response LaunchDarkly supports four fields for expanding the \&quot;Create team\&quot; response. By default, these fields are **not** included in the response.  To expand the response, append the &#x60;expand&#x60; query parameter and add a comma-separated list with any of the following fields:  * &#x60;members&#x60; includes the total count of members that belong to the team. * &#x60;roles&#x60; includes a paginated list of the custom roles that you have assigned to the team. * &#x60;projects&#x60; includes a paginated list of the projects that the team has any write access to. * &#x60;maintainers&#x60; includes a paginated list of the maintainers that you have assigned to the team.  For example, &#x60;expand&#x3D;members,roles&#x60; includes the &#x60;members&#x60; and &#x60;roles&#x60; fields in the response. 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.TeamsApi();
let teamPostInput = {"customRoleKeys":["example-role1","example-role2"],"description":"An example team","key":"team-key-123abc","memberIDs":["12ab3c45de678910fgh12345"],"name":"Example team"}; // TeamPostInput | 
let opts = {
  'expand': "expand_example" // String | A comma-separated list of properties that can reveal additional information in the response. Supported fields are explained above.
};
apiInstance.postTeam(teamPostInput, opts, (error, data, response) => {
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
 **expand** | **String**| A comma-separated list of properties that can reveal additional information in the response. Supported fields are explained above. | [optional] 

### Return type

[**Team**](Team.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postTeamMembers

> TeamImportsRep postTeamMembers(teamKey, opts)

Add multiple members to team

Add multiple members to an existing team by uploading a CSV file of member email addresses. Your CSV file must include email addresses in the first column. You can include data in additional columns, but LaunchDarkly ignores all data outside the first column. Headers are optional. To learn more, read [Manage team members](https://launchdarkly.com/docs/home/account/manage-teams#manage-team-members).  **Members are only added on a &#x60;201&#x60; response.** A &#x60;207&#x60; indicates the CSV file contains a combination of valid and invalid entries. A &#x60;207&#x60; results in no members being added to the team.  On a &#x60;207&#x60; response, if an entry contains bad input, the &#x60;message&#x60; field contains the row number as well as the reason for the error. The &#x60;message&#x60; field is omitted if the entry is valid.  Example &#x60;207&#x60; response: &#x60;&#x60;&#x60;json {   \&quot;items\&quot;: [     {       \&quot;status\&quot;: \&quot;success\&quot;,       \&quot;value\&quot;: \&quot;new-team-member@acme.com\&quot;     },     {       \&quot;message\&quot;: \&quot;Line 2: empty row\&quot;,       \&quot;status\&quot;: \&quot;error\&quot;,       \&quot;value\&quot;: \&quot;\&quot;     },     {       \&quot;message\&quot;: \&quot;Line 3: email already exists in the specified team\&quot;,       \&quot;status\&quot;: \&quot;error\&quot;,       \&quot;value\&quot;: \&quot;existing-team-member@acme.com\&quot;     },     {       \&quot;message\&quot;: \&quot;Line 4: invalid email formatting\&quot;,       \&quot;status\&quot;: \&quot;error\&quot;,       \&quot;value\&quot;: \&quot;invalid email format\&quot;     }   ] } &#x60;&#x60;&#x60;  Message | Resolution --- | --- Empty row | This line is blank. Add an email address and try again. Duplicate entry | This email address appears in the file twice. Remove the email from the file and try again. Email already exists in the specified team | This member is already on your team. Remove the email from the file and try again. Invalid formatting | This email address is not formatted correctly. Fix the formatting and try again. Email does not belong to a LaunchDarkly member | The email address doesn&#39;t belong to a LaunchDarkly account member. Invite them to LaunchDarkly, then re-add them to the team.  On a &#x60;400&#x60; response, the &#x60;message&#x60; field may contain errors specific to this endpoint.  Example &#x60;400&#x60; response: &#x60;&#x60;&#x60;json {   \&quot;code\&quot;: \&quot;invalid_request\&quot;,   \&quot;message\&quot;: \&quot;Unable to process file\&quot; } &#x60;&#x60;&#x60;  Message | Resolution --- | --- Unable to process file | LaunchDarkly could not process the file for an unspecified reason. Review your file for errors and try again. File exceeds 25mb | Break up your file into multiple files of less than 25mbs each. All emails have invalid formatting | None of the email addresses in the file are in the correct format. Fix the formatting and try again. All emails belong to existing team members | All listed members are already on this team. Populate the file with member emails that do not belong to the team and try again. File is empty | The CSV file does not contain any email addresses. Populate the file and try again. No emails belong to members of your LaunchDarkly organization | None of the email addresses belong to members of your LaunchDarkly account. Invite these members to LaunchDarkly, then re-add them to the team. 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.TeamsApi();
let teamKey = "teamKey_example"; // String | The team key
let opts = {
  'file': "/path/to/file" // File | CSV file containing email addresses
};
apiInstance.postTeamMembers(teamKey, opts, (error, data, response) => {
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
 **teamKey** | **String**| The team key | 
 **file** | **File**| CSV file containing email addresses | [optional] 

### Return type

[**TeamImportsRep**](TeamImportsRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

