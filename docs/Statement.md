# LaunchDarklyApi.Statement

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resources** | **[String]** |  | [optional] 
**notResources** | **[String]** | Targeted resource will be those resources NOT in this list. The \"resources`\" field must be empty to use this field. | [optional] 
**actions** | **[String]** |  | [optional] 
**notActions** | **[String]** | Targeted actions will be those actions NOT in this list. The \"actions\" field must be empty to use this field. | [optional] 
**effect** | **String** |  | [optional] 


<a name="EffectEnum"></a>
## Enum: EffectEnum


* `allow` (value: `"allow"`)

* `deny` (value: `"deny"`)




