# LaunchDarklyApi.PatchSegmentExpiringTargetInstruction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **String** | The type of change to make to the context&#39;s removal date from this segment | 
**contextKey** | **String** | A unique key used to represent the context | 
**contextKind** | **String** | The kind of context | 
**targetType** | **String** | The segment&#39;s target type | 
**value** | **Number** | The time, in Unix milliseconds, when the context should be removed from this segment. Required if &lt;code&gt;kind&lt;/code&gt; is &lt;code&gt;addExpiringTarget&lt;/code&gt; or &lt;code&gt;updateExpiringTarget&lt;/code&gt;. | [optional] 
**version** | **Number** | The version of the expiring target to update. Optional and only used if &lt;code&gt;kind&lt;/code&gt; is &lt;code&gt;updateExpiringTarget&lt;/code&gt;. If included, update will fail if version doesn&#39;t match current version of the expiring target. | [optional] 



## Enum: KindEnum


* `addExpiringTarget` (value: `"addExpiringTarget"`)

* `updateExpiringTarget` (value: `"updateExpiringTarget"`)

* `removeExpiringTarget` (value: `"removeExpiringTarget"`)





## Enum: TargetTypeEnum


* `included` (value: `"included"`)

* `excluded` (value: `"excluded"`)




