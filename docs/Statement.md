# LaunchDarklyApi.Statement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resources** | **[String]** | Resource specifier strings | [optional] 
**notResources** | **[String]** | Targeted resources are the resources NOT in this list. The &lt;code&gt;resources&lt;/code&gt; and &lt;code&gt;notActions&lt;/code&gt; fields must be empty to use this field. | [optional] 
**actions** | **[String]** | Actions to perform on a resource | [optional] 
**notActions** | **[String]** | Targeted actions are the actions NOT in this list. The &lt;code&gt;actions&lt;/code&gt; and &lt;code&gt;notResources&lt;/code&gt; fields must be empty to use this field. | [optional] 
**effect** | **String** | Whether this statement should allow or deny actions on the resources. | 



## Enum: EffectEnum


* `allow` (value: `"allow"`)

* `deny` (value: `"deny"`)




