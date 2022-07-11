# LaunchDarklyApi.PatchSegmentInstruction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **String** | The type of change to make to the user&#39;s removal date from this segment | 
**userKey** | **String** | A unique key used to represent the user | 
**targetType** | **String** | The segment&#39;s target type | 
**value** | **Number** | The time, in Unix milliseconds, when the user should be removed from this segment. Required if &lt;code&gt;kind&lt;/code&gt; is &lt;code&gt;addExpireUserTargetDate&lt;/code&gt; or &lt;code&gt;updateExpireUserTargetDate&lt;/code&gt;. | [optional] 
**version** | **Number** | The version of the segment to update. Required if &lt;code&gt;kind&lt;/code&gt; is &lt;code&gt;updateExpireUserTargetDate&lt;/code&gt;. | [optional] 



## Enum: KindEnum


* `addExpireUserTargetDate` (value: `"addExpireUserTargetDate"`)

* `updateExpireUserTargetDate` (value: `"updateExpireUserTargetDate"`)

* `removeExpireUserTargetDate` (value: `"removeExpireUserTargetDate"`)





## Enum: TargetTypeEnum


* `included` (value: `"included"`)

* `excluded` (value: `"excluded"`)




