# LaunchDarklyApi.TeamsBetaApi

All URIs are relative to *https://app.launchdarkly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**patchTeams**](TeamsBetaApi.md#patchTeams) | **PATCH** /api/v2/teams | Update teams



## patchTeams

> BulkEditTeamsRep patchTeams(teamsPatchInput)

Update teams

Perform a partial update to multiple teams. Updating teams uses the semantic patch format.  To make a semantic patch request, you must append &#x60;domain-model&#x3D;launchdarkly.semanticpatch&#x60; to your &#x60;Content-Type&#x60; header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).  ### Instructions  Semantic patch requests support the following &#x60;kind&#x60; instructions for updating teams.  &lt;details&gt; &lt;summary&gt;Click to expand instructions for &lt;strong&gt;updating teams&lt;/strong&gt;&lt;/summary&gt;  #### addMembersToTeams  Add the members to teams.  ##### Parameters  - &#x60;memberIDs&#x60;: List of member IDs to add. - &#x60;teamKeys&#x60;: List of teams to update.  Here&#39;s an example:  &#x60;&#x60;&#x60;json {   \&quot;instructions\&quot;: [{     \&quot;kind\&quot;: \&quot;addMembersToTeams\&quot;,     \&quot;memberIDs\&quot;: [       \&quot;1234a56b7c89d012345e678f\&quot;     ],     \&quot;teamKeys\&quot;: [       \&quot;example-team-1\&quot;,       \&quot;example-team-2\&quot;     ]   }] } &#x60;&#x60;&#x60;  #### addAllMembersToTeams  Add all members to the team. Members that match any of the filters are **excluded** from the update.  ##### Parameters  - &#x60;teamKeys&#x60;: List of teams to update. - &#x60;filterLastSeen&#x60;: (Optional) A JSON object with one of the following formats:   - &#x60;{\&quot;never\&quot;: true}&#x60; - Members that have never been active, such as those who have not accepted their invitation to LaunchDarkly, or have not logged in after being provisioned via SCIM.   - &#x60;{\&quot;noData\&quot;: true}&#x60; - Members that have not been active since LaunchDarkly began recording last seen timestamps.   - &#x60;{\&quot;before\&quot;: 1608672063611}&#x60; - Members that have not been active since the provided value, which should be a timestamp in Unix epoch milliseconds. - &#x60;filterQuery&#x60;: (Optional) A string that matches against the members&#39; emails and names. It is not case sensitive. - &#x60;filterRoles&#x60;: (Optional) A &#x60;|&#x60; separated list of roles and custom roles. For the purposes of this filtering, &#x60;Owner&#x60; counts as &#x60;Admin&#x60;. - &#x60;filterTeamKey&#x60;: (Optional) A string that matches against the key of the team the members belong to. It is not case sensitive. - &#x60;ignoredMemberIDs&#x60;: (Optional) A list of member IDs.  Here&#39;s an example:  &#x60;&#x60;&#x60;json {   \&quot;instructions\&quot;: [{     \&quot;kind\&quot;: \&quot;addAllMembersToTeams\&quot;,     \&quot;teamKeys\&quot;: [       \&quot;example-team-1\&quot;,       \&quot;example-team-2\&quot;     ],     \&quot;filterLastSeen\&quot;: { \&quot;never\&quot;: true }   }] } &#x60;&#x60;&#x60;  &lt;/details&gt; 

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
let teamsPatchInput = {"comment":"Optional comment about the update","instructions":[{"kind":"addMembersToTeams","memberIDs":["1234a56b7c89d012345e678f"],"teamKeys":["example-team-1","example-team-2"]}]}; // TeamsPatchInput | 
apiInstance.patchTeams(teamsPatchInput, (error, data, response) => {
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
 **teamsPatchInput** | [**TeamsPatchInput**](TeamsPatchInput.md)|  | 

### Return type

[**BulkEditTeamsRep**](BulkEditTeamsRep.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

