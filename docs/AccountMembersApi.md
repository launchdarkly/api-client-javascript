# LaunchDarklyApi.AccountMembersApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteMember**](AccountMembersApi.md#deleteMember) | **DELETE** /api/v2/members/{id} | Delete account member
[**getMember**](AccountMembersApi.md#getMember) | **GET** /api/v2/members/{id} | Get account member
[**getMembers**](AccountMembersApi.md#getMembers) | **GET** /api/v2/members | List account members
[**patchMember**](AccountMembersApi.md#patchMember) | **PATCH** /api/v2/members/{id} | Modify an account member
[**postMemberTeams**](AccountMembersApi.md#postMemberTeams) | **POST** /api/v2/members/{id}/teams | Add a member to teams
[**postMembers**](AccountMembersApi.md#postMembers) | **POST** /api/v2/members | Invite new members



## deleteMember

> deleteMember(id)

Delete account member

Delete a single account member by ID. Requests to delete account members will not work if SCIM is enabled for the account.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.AccountMembersApi();
let id = "id_example"; // String | The member ID
apiInstance.deleteMember(id, (error, data, response) => {
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
 **id** | **String**| The member ID | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMember

> Member getMember(id, opts)

Get account member

Get a single account member by member ID.  &#x60;me&#x60; is a reserved value for the &#x60;id&#x60; parameter that returns the caller&#39;s member information. 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.AccountMembersApi();
let id = "id_example"; // String | The member ID
let opts = {
  'expand': "expand_example" // String | A comma-separated list of properties that can reveal additional information in the response.
};
apiInstance.getMember(id, opts, (error, data, response) => {
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
 **id** | **String**| The member ID | 
 **expand** | **String**| A comma-separated list of properties that can reveal additional information in the response. | [optional] 

### Return type

[**Member**](Member.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMembers

> Members getMembers(opts)

List account members

Return a list of account members.  By default, this returns the first 20 members. Page through this list with the &#x60;limit&#x60; parameter and by following the &#x60;first&#x60;, &#x60;prev&#x60;, &#x60;next&#x60;, and &#x60;last&#x60; links in the returned &#x60;_links&#x60; field. These links are not present if the pages they refer to don&#39;t exist. For example, the &#x60;first&#x60; and &#x60;prev&#x60; links will be missing from the response on the first page.  ### Filtering members  LaunchDarkly supports the following fields for filters:  - &#x60;query&#x60; is a string that matches against the members&#39; emails and names. It is not case sensitive. - &#x60;role&#x60; is a &#x60;|&#x60; separated list of roles and custom roles. It filters the list to members who have any of the roles in the list. For the purposes of this filtering, &#x60;Owner&#x60; counts as &#x60;Admin&#x60;. - &#x60;id&#x60; is a &#x60;|&#x60; separated list of member IDs. It filters the list to members who match any of the IDs in the list. - &#x60;email&#x60; is a &#x60;|&#x60; separated list of member emails. It filters the list to members who match any of the emails in the list. - &#x60;team&#x60; is a string that matches against the key of the teams the members belong to. It is not case sensitive. - &#x60;noteam&#x60; is a boolean that filters the list of members who are not on a team if true and members on a team if false. - &#x60;lastSeen&#x60; is a JSON object in one of the following formats:   - &#x60;{\&quot;never\&quot;: true}&#x60; - Members that have never been active, such as those who have not accepted their invitation to LaunchDarkly, or have not logged in after being provisioned via SCIM.   - &#x60;{\&quot;noData\&quot;: true}&#x60; - Members that have not been active since LaunchDarkly began recording last seen timestamps.   - &#x60;{\&quot;before\&quot;: 1608672063611}&#x60; - Members that have not been active since the provided value, which should be a timestamp in Unix epoch milliseconds. - &#x60;accessCheck&#x60; is a string that represents a specific action on a specific resource and is in the format &#x60;&lt;ActionSpecifier&gt;:&lt;ResourceSpecifier&gt;&#x60;. It filters the list to members who have the ability to perform that action on that resource. Note: &#x60;accessCheck&#x60; is only supported in API version &#x60;20220603&#x60; and earlier. To learn more, read [Versioning](https://apidocs.launchdarkly.com/#section/Overview/Versioning).   - For example, the filter &#x60;accessCheck:createApprovalRequest:proj/default:env/test:flag/alternate-page&#x60; matches members with the ability to create an approval request for the &#x60;alternate-page&#x60; flag in the &#x60;test&#x60; environment of the &#x60;default&#x60; project.   - Wildcard and tag filters are not supported when filtering for access.  For example, the filter &#x60;query:abc,role:admin|customrole&#x60; matches members with the string &#x60;abc&#x60; in their email or name, ignoring case, who also are either an &#x60;Owner&#x60; or &#x60;Admin&#x60; or have the custom role &#x60;customrole&#x60;.  ### Sorting members  LaunchDarkly supports two fields for sorting: &#x60;displayName&#x60; and &#x60;lastSeen&#x60;:  - &#x60;displayName&#x60; sorts by first + last name, using the member&#39;s email if no name is set. - &#x60;lastSeen&#x60; sorts by the &#x60;_lastSeen&#x60; property. LaunchDarkly considers members that have never been seen or have no data the oldest. 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.AccountMembersApi();
let opts = {
  'limit': 789, // Number | The number of members to return in the response. Defaults to 20.
  'offset': 789, // Number | Where to start in the list. This is for use with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`.
  'filter': "filter_example", // String | A comma-separated list of filters. Each filter is of the form `field:value`. Supported fields are explained above.
  'expand': "expand_example", // String | A comma-separated list of properties that can reveal additional information in the response.
  'sort': "sort_example" // String | A comma-separated list of fields to sort by. Fields prefixed by a dash ( - ) sort in descending order.
};
apiInstance.getMembers(opts, (error, data, response) => {
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
 **limit** | **Number**| The number of members to return in the response. Defaults to 20. | [optional] 
 **offset** | **Number**| Where to start in the list. This is for use with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query &#x60;limit&#x60;. | [optional] 
 **filter** | **String**| A comma-separated list of filters. Each filter is of the form &#x60;field:value&#x60;. Supported fields are explained above. | [optional] 
 **expand** | **String**| A comma-separated list of properties that can reveal additional information in the response. | [optional] 
 **sort** | **String**| A comma-separated list of fields to sort by. Fields prefixed by a dash ( - ) sort in descending order. | [optional] 

### Return type

[**Members**](Members.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## patchMember

> Member patchMember(id, patchOperation)

Modify an account member

 Update a single account member. Updating a member uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](/#section/Overview/Updates).  To update fields in the account member object that are arrays, set the &#x60;path&#x60; to the name of the field and then append &#x60;/&lt;array index&gt;&#x60;. Use &#x60;/0&#x60; to add to the beginning of the array. Use &#x60;/-&#x60; to add to the end of the array. For example, to add a new custom role to a member, use the following request body:  &#x60;&#x60;&#x60;   [     {       \&quot;op\&quot;: \&quot;add\&quot;,       \&quot;path\&quot;: \&quot;/customRoles/0\&quot;,       \&quot;value\&quot;: \&quot;some-role-id\&quot;     }   ] &#x60;&#x60;&#x60;  You can update only an account member&#39;s role or custom role using a JSON patch. Members can update their own names and email addresses though the LaunchDarkly UI.  When SAML SSO or SCIM is enabled for the account, account members are managed in the Identity Provider (IdP). Requests to update account members will succeed, but the IdP will override the update shortly afterwards. 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.AccountMembersApi();
let id = "id_example"; // String | The member ID
let patchOperation = [{"op":"add","path":"/role","value":"writer"}]; // [PatchOperation] | 
apiInstance.patchMember(id, patchOperation, (error, data, response) => {
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
 **id** | **String**| The member ID | 
 **patchOperation** | [**[PatchOperation]**](PatchOperation.md)|  | 

### Return type

[**Member**](Member.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postMemberTeams

> Member postMemberTeams(id, memberTeamsPostInput)

Add a member to teams

Add one member to one or more teams.

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.AccountMembersApi();
let id = "id_example"; // String | The member ID
let memberTeamsPostInput = new LaunchDarklyApi.MemberTeamsPostInput(); // MemberTeamsPostInput | 
apiInstance.postMemberTeams(id, memberTeamsPostInput, (error, data, response) => {
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
 **id** | **String**| The member ID | 
 **memberTeamsPostInput** | [**MemberTeamsPostInput**](MemberTeamsPostInput.md)|  | 

### Return type

[**Member**](Member.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postMembers

> Members postMembers(newMemberForm)

Invite new members

Invite one or more new members to join an account. Each member is sent an invitation. Members with \&quot;admin\&quot; or \&quot;owner\&quot; roles may create new members, as well as anyone with a \&quot;createMember\&quot; permission for \&quot;member/\\*\&quot;. If a member cannot be invited, the entire request is rejected and no members are invited from that request.  Each member _must_ have an &#x60;email&#x60; field and either a &#x60;role&#x60; or a &#x60;customRoles&#x60; field. If any of the fields are not populated correctly, the request is rejected with the reason specified in the \&quot;message\&quot; field of the response.  Requests to create account members will not work if SCIM is enabled for the account.  _No more than 50 members may be created per request._  A request may also fail because of conflicts with existing members. These conflicts are reported using the additional &#x60;code&#x60; and &#x60;invalid_emails&#x60; response fields with the following possible values for &#x60;code&#x60;:  - **email_already_exists_in_account**: A member with this email address already exists in this account. - **email_taken_in_different_account**: A member with this email address exists in another account. - **duplicate_email**s: This request contains two or more members with the same email address.  A request that fails for one of the above reasons returns an HTTP response code of 400 (Bad Request). 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.AccountMembersApi();
let newMemberForm = [new LaunchDarklyApi.NewMemberForm()]; // [NewMemberForm] | 
apiInstance.postMembers(newMemberForm, (error, data, response) => {
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
 **newMemberForm** | [**[NewMemberForm]**](NewMemberForm.md)|  | 

### Return type

[**Members**](Members.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

