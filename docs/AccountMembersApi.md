# LaunchDarklyApi.AccountMembersApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteMember**](AccountMembersApi.md#deleteMember) | **DELETE** /api/v2/members/{id} | Delete account member
[**getMember**](AccountMembersApi.md#getMember) | **GET** /api/v2/members/{id} | Get account member
[**getMembers**](AccountMembersApi.md#getMembers) | **GET** /api/v2/members | List account members
[**patchMember**](AccountMembersApi.md#patchMember) | **PATCH** /api/v2/members/{id} | Modify an account member
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

> Member getMember(id)

Get account member

Get a single account member by ID

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
apiInstance.getMember(id, (error, data, response) => {
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

Return a list of account members.  By default, this returns the first 20 members. Page through this list with the &#x60;limit&#x60; parameter and by following the &#x60;first&#x60;, &#x60;prev&#x60;, &#x60;next&#x60;, and &#x60;last&#x60; links in the returned &#x60;_links&#x60; field. These links are not present if the pages they refer to don&#39;t exist. For example, the &#x60;first&#x60; and &#x60;prev&#x60; links will be missing from the response on the first page.  ### Filtering members  LaunchDarkly supports three fields for filters: &#x60;query&#x60;, &#x60;role&#x60;, and &#x60;lastSeen&#x60;:  - &#x60;query&#x60; is a string that matches against the members&#39; emails and names. It is not case sensitive. - &#x60;role&#x60; is a &#x60;|&#x60; separated list of roles and custom roles. It filters the list to members who have any of the roles in the list. For the purposes of this filtering, &#x60;Owner&#x60; counts as &#x60;Admin&#x60;. - &#x60;lastSeen&#x60; is a JSON object in one of the following formats:   - &#x60;{\&quot;never\&quot;: true}&#x60; - Members that have never been active, such as those who have not accepted their invitation to LaunchDarkly, or have not logged in after being provisioned via SCIM.   - &#x60;{\&quot;noData\&quot;: true}&#x60; - Members that have not been active since LaunchDarkly began recording last seen timestamps.   - &#x60;{\&quot;before\&quot;: 1608672063611}&#x60; - Members that have not been active since the provided value, which should be a timestamp in Unix epoch milliseconds.  For example, the filter &#x60;query:abc,role:admin|customrole&#x60; matches members with the string &#x60;abc&#x60; in their email or name, ignoring case, who also are either an an &#x60;Owner&#x60; or &#x60;Admin&#x60; or have the custom role &#x60;customrole&#x60;.  ### Sorting members  LaunchDarkly supports two fields for sorting: &#x60;displayName&#x60; and &#x60;lastSeen&#x60;:  - &#x60;displayName&#x60; sorts by first + last name, using the member&#39;s email if no name is set. - &#x60;lastSeen&#x60; sorts by the &#x60;_lastSeen&#x60; property. LaunchDarkly considers members that have never been seen or have no data the oldest. 

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
  'offset': 789, // Number | Where to start in the list. This is for use with pagination. For example, an offset of 10 would skip the first ten items and then return the next `limit` items.
  'filter': "filter_example", // String | A comma-separated list of filters. Each filter is of the form `field:value`. Supported fields are explained above.
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
 **offset** | **Number**| Where to start in the list. This is for use with pagination. For example, an offset of 10 would skip the first ten items and then return the next &#x60;limit&#x60; items. | [optional] 
 **filter** | **String**| A comma-separated list of filters. Each filter is of the form &#x60;field:value&#x60;. Supported fields are explained above. | [optional] 
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

Update a single account member. The request should be a valid JSON Patch document describing the changes to be made to the member. Requests to update account members will not work if SCIM is enabled for the account.

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
let patchOperation = [new LaunchDarklyApi.PatchOperation()]; // [PatchOperation] | 
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


## postMembers

> Members postMembers(newMemberForm)

Invite new members

&gt; ### Full use of this API resource is only available to accounts with paid subscriptions &gt; &gt; The ability to bulk invite members is a paid feature. Single members may be invited if not on a paid plan.  Invite one or more new members to join an account. Each member is sent an invitation. Members with \&quot;admin\&quot; or \&quot;owner\&quot; roles may create new members, as well as anyone with a \&quot;createMember\&quot; permission for \&quot;member/\\*\&quot;. If a member cannot be invited, the entire request is rejected and no members are invited from that request.  Each member _must_ have an &#x60;email&#x60; field and either a &#x60;role&#x60; or a &#x60;customRoles&#x60; field. If any of the fields are not populated correctly, the request is rejected with the reason specified in the \&quot;message\&quot; field of the response.  Requests to create account members will not work if SCIM is enabled for the account.  _No more than 50 members may be created per request._  A request may also fail because of conflicts with existing members. These conflicts are reported using the additional &#x60;code&#x60; and &#x60;invalid_emails&#x60; response fields with the following possible values for &#x60;code&#x60;:  - **email_already_exists_in_account**: A member with this email address already exists in this account. - **email_taken_in_different_account**: A member with this email address exists in another account. - **duplicate_email**s: This request contains two or more members with the same email address.  A request that fails for one of the above reasons returns an HTTP response code of 400 (Bad Request). 

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

