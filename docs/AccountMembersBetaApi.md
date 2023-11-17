# LaunchDarklyApi.AccountMembersBetaApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**patchMembers**](AccountMembersBetaApi.md#patchMembers) | **PATCH** /api/v2/members | Modify account members



## patchMembers

> BulkEditMembersRep patchMembers(membersPatchInput)

Modify account members

Perform a partial update to multiple members. Updating members uses the semantic patch format.  To make a semantic patch request, you must append &#x60;domain-model&#x3D;launchdarkly.semanticpatch&#x60; to your &#x60;Content-Type&#x60; header. To learn more, read [Updates using semantic patch](/reference#updates-using-semantic-patch).  ### Instructions  Semantic patch requests support the following &#x60;kind&#x60; instructions for updating members.  &lt;details&gt; &lt;summary&gt;Click to expand instructions for &lt;strong&gt;updating members&lt;/strong&gt;&lt;/summary&gt;  #### replaceMembersRoles  Replaces the roles of the specified members. This also removes all custom roles assigned to the specified members.  ##### Parameters  - &#x60;value&#x60;: The new role. Must be a valid built-in role. To learn more about built-in roles, read [LaunchDarkly&#39;s built-in roles](https://docs.launchdarkly.com/home/members/built-in-roles). - &#x60;memberIDs&#x60;: List of member IDs.  Here&#39;s an example:  &#x60;&#x60;&#x60;json {   \&quot;instructions\&quot;: [{     \&quot;kind\&quot;: \&quot;replaceMemberRoles\&quot;,     \&quot;value\&quot;: \&quot;reader\&quot;,     \&quot;memberIDs\&quot;: [       \&quot;1234a56b7c89d012345e678f\&quot;,       \&quot;507f1f77bcf86cd799439011\&quot;     ]   }] } &#x60;&#x60;&#x60;  #### replaceAllMembersRoles  Replaces the roles of all members. This also removes all custom roles assigned to the specified members.  Members that match any of the filters are **excluded** from the update.  ##### Parameters  - &#x60;value&#x60;: The new role. Must be a valid built-in role. To learn more about built-in roles, read [LaunchDarkly&#39;s built-in roles](https://docs.launchdarkly.com/home/members/built-in-roles). - &#x60;filterLastSeen&#x60;: (Optional) A JSON object with one of the following formats:   - &#x60;{\&quot;never\&quot;: true}&#x60; - Members that have never been active, such as those who have not accepted their invitation to LaunchDarkly, or have not logged in after being provisioned via SCIM.   - &#x60;{\&quot;noData\&quot;: true}&#x60; - Members that have not been active since LaunchDarkly began recording last seen timestamps.   - &#x60;{\&quot;before\&quot;: 1608672063611}&#x60; - Members that have not been active since the provided value, which should be a timestamp in Unix epoch milliseconds. - &#x60;filterQuery&#x60;: (Optional) A string that matches against the members&#39; emails and names. It is not case sensitive. - &#x60;filterRoles&#x60;: (Optional) A &#x60;|&#x60; separated list of roles and custom roles. For the purposes of this filtering, &#x60;Owner&#x60; counts as &#x60;Admin&#x60;. - &#x60;filterTeamKey&#x60;: (Optional) A string that matches against the key of the team the members belong to. It is not case sensitive. - &#x60;ignoredMemberIDs&#x60;: (Optional) A list of member IDs.  Here&#39;s an example:  &#x60;&#x60;&#x60;json {   \&quot;instructions\&quot;: [{     \&quot;kind\&quot;: \&quot;replaceAllMembersRoles\&quot;,     \&quot;value\&quot;: \&quot;reader\&quot;,     \&quot;filterLastSeen\&quot;: { \&quot;never\&quot;: true }   }] } &#x60;&#x60;&#x60;  #### replaceMembersCustomRoles  Replaces the custom roles of the specified members.  ##### Parameters  - &#x60;values&#x60;: List of new custom roles. Must be a valid custom role key or ID. - &#x60;memberIDs&#x60;: List of member IDs.  Here&#39;s an example:  &#x60;&#x60;&#x60;json {   \&quot;instructions\&quot;: [{     \&quot;kind\&quot;: \&quot;replaceMembersCustomRoles\&quot;,     \&quot;values\&quot;: [ \&quot;example-custom-role\&quot; ],     \&quot;memberIDs\&quot;: [       \&quot;1234a56b7c89d012345e678f\&quot;,       \&quot;507f1f77bcf86cd799439011\&quot;     ]   }] } &#x60;&#x60;&#x60;  #### replaceAllMembersCustomRoles  Replaces the custom roles of all members. Members that match any of the filters are **excluded** from the update.  ##### Parameters  - &#x60;values&#x60;: List of new roles. Must be a valid custom role key or ID. - &#x60;filterLastSeen&#x60;: (Optional) A JSON object with one of the following formats:   - &#x60;{\&quot;never\&quot;: true}&#x60; - Members that have never been active, such as those who have not accepted their invitation to LaunchDarkly, or have not logged in after being provisioned via SCIM.   - &#x60;{\&quot;noData\&quot;: true}&#x60; - Members that have not been active since LaunchDarkly began recording last seen timestamps.   - &#x60;{\&quot;before\&quot;: 1608672063611}&#x60; - Members that have not been active since the provided value, which should be a timestamp in Unix epoch milliseconds. - &#x60;filterQuery&#x60;: (Optional) A string that matches against the members&#39; emails and names. It is not case sensitive. - &#x60;filterRoles&#x60;: (Optional) A &#x60;|&#x60; separated list of roles and custom roles. For the purposes of this filtering, &#x60;Owner&#x60; counts as &#x60;Admin&#x60;. - &#x60;filterTeamKey&#x60;: (Optional) A string that matches against the key of the team the members belong to. It is not case sensitive. - &#x60;ignoredMemberIDs&#x60;: (Optional) A list of member IDs.  Here&#39;s an example:  &#x60;&#x60;&#x60;json {   \&quot;instructions\&quot;: [{     \&quot;kind\&quot;: \&quot;replaceAllMembersCustomRoles\&quot;,     \&quot;values\&quot;: [ \&quot;example-custom-role\&quot; ],     \&quot;filterLastSeen\&quot;: { \&quot;never\&quot;: true }   }] } &#x60;&#x60;&#x60;  &lt;/details&gt; 

### Example

```javascript
import LaunchDarklyApi from 'launchdarkly-api';
let defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new LaunchDarklyApi.AccountMembersBetaApi();
let membersPatchInput = {"comment":"Optional comment about the update","instructions":[{"kind":"replaceMembersRoles","memberIDs":["1234a56b7c89d012345e678f","507f1f77bcf86cd799439011"],"value":"reader"}]}; // MembersPatchInput | 
apiInstance.patchMembers(membersPatchInput, (error, data, response) => {
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
 **membersPatchInput** | [**MembersPatchInput**](MembersPatchInput.md)|  | 

### Return type

[**BulkEditMembersRep**](BulkEditMembersRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

