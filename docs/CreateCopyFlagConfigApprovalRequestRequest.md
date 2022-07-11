# LaunchDarklyApi.CreateCopyFlagConfigApprovalRequestRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **String** | Optional comment describing the approval request | [optional] 
**description** | **String** | A brief description of your changes | 
**notifyMemberIds** | **[String]** | An array of member IDs. These members are notified to review the approval request. | [optional] 
**notifyTeamKeys** | **[String]** | An array of team keys. The members of these teams are notified to review the approval request. | [optional] 
**source** | [**SourceFlag**](SourceFlag.md) |  | 
**includedActions** | **[String]** | Optional list of the flag changes to copy from the source environment to the target environment. You may include either &lt;code&gt;includedActions&lt;/code&gt; or &lt;code&gt;excludedActions&lt;/code&gt;, but not both. If neither are included, then all flag changes will be copied. | [optional] 
**excludedActions** | **[String]** | Optional list of the flag changes NOT to copy from the source environment to the target environment. You may include either &lt;code&gt;includedActions&lt;/code&gt; or &lt;code&gt;excludedActions&lt;/code&gt;, but not both. If neither are included, then all flag changes will be copied. | [optional] 



## Enum: [IncludedActionsEnum]


* `updateOn` (value: `"updateOn"`)

* `updateFallthrough` (value: `"updateFallthrough"`)

* `updateOffVariation` (value: `"updateOffVariation"`)

* `updateRules` (value: `"updateRules"`)

* `updateTargets` (value: `"updateTargets"`)

* `updatePrerequisites` (value: `"updatePrerequisites"`)





## Enum: [ExcludedActionsEnum]


* `updateOn` (value: `"updateOn"`)

* `updateFallthrough` (value: `"updateFallthrough"`)

* `updateOffVariation` (value: `"updateOffVariation"`)

* `updateRules` (value: `"updateRules"`)

* `updateTargets` (value: `"updateTargets"`)

* `updatePrerequisites` (value: `"updatePrerequisites"`)




