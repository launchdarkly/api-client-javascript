# LaunchDarklyApi.FlagCopyConfigPost

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | [**FlagCopyConfigEnvironment**](FlagCopyConfigEnvironment.md) |  | 
**target** | [**FlagCopyConfigEnvironment**](FlagCopyConfigEnvironment.md) |  | 
**comment** | **String** | Optional comment | [optional] 
**includedActions** | **[String]** | Optional list of the flag changes to copy from the source environment to the target environment. You may include either &lt;code&gt;includedActions&lt;/code&gt; or &lt;code&gt;excludedActions&lt;/code&gt;, but not both. If you include neither, then all flag changes will be copied. | [optional] 
**excludedActions** | **[String]** | Optional list of the flag changes NOT to copy from the source environment to the target environment. You may include either  &lt;code&gt;includedActions&lt;/code&gt; or &lt;code&gt;excludedActions&lt;/code&gt;, but not both. If you include neither, then all flag changes will be copied. | [optional] 



## Enum: [IncludedActionsEnum]


* `updateOn` (value: `"updateOn"`)

* `updateRules` (value: `"updateRules"`)

* `updateFallthrough` (value: `"updateFallthrough"`)

* `updateOffVariation` (value: `"updateOffVariation"`)

* `updatePrerequisites` (value: `"updatePrerequisites"`)

* `updateTargets` (value: `"updateTargets"`)





## Enum: [ExcludedActionsEnum]


* `updateOn` (value: `"updateOn"`)

* `updateRules` (value: `"updateRules"`)

* `updateFallthrough` (value: `"updateFallthrough"`)

* `updateOffVariation` (value: `"updateOffVariation"`)

* `updatePrerequisites` (value: `"updatePrerequisites"`)

* `updateTargets` (value: `"updateTargets"`)




