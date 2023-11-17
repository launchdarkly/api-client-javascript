# LaunchDarklyApi.InstructionUserRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **String** | The type of change to make to the removal date for this user from individual targeting for this flag. | 
**flagKey** | **String** | The flag key | 
**variationId** | **String** | ID of a variation on the flag | 
**value** | **Number** | The time, in Unix milliseconds, when LaunchDarkly should remove the user from individual targeting for this flag. Required if &lt;code&gt;kind&lt;/code&gt; is &lt;code&gt;addExpireUserTargetDate&lt;/code&gt; or &lt;code&gt;updateExpireUserTargetDate&lt;/code&gt;. | [optional] 
**version** | **Number** | The version of the expiring user target to update. Optional and only used if &lt;code&gt;kind&lt;/code&gt; is &lt;code&gt;updateExpireUserTargetDate&lt;/code&gt;. If included, update will fail if version doesn&#39;t match current version of the expiring user target. | [optional] 



## Enum: KindEnum


* `addExpireUserTargetDate` (value: `"addExpireUserTargetDate"`)

* `updateExpireUserTargetDate` (value: `"updateExpireUserTargetDate"`)

* `removeExpireUserTargetDate` (value: `"removeExpireUserTargetDate"`)




