# LaunchDarklyApi.AIConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | [**AiConfigsAccess**](AiConfigsAccess.md) |  | [optional] 
**links** | [**ParentAndSelfLinks**](ParentAndSelfLinks.md) |  | [optional] 
**description** | **String** |  | 
**key** | **String** |  | 
**maintainer** | [**AIConfigMaintainer**](AIConfigMaintainer.md) |  | [optional] 
**mode** | **String** |  | [optional] [default to &#39;completion&#39;]
**name** | **String** |  | 
**tags** | **[String]** |  | 
**version** | **Number** |  | 
**variations** | [**[AIConfigVariation]**](AIConfigVariation.md) |  | 
**createdAt** | **Number** |  | 
**updatedAt** | **Number** |  | 
**evaluationMetricKeys** | **[String]** | List of evaluation metric keys for this AI config | [optional] 



## Enum: ModeEnum


* `agent` (value: `"agent"`)

* `completion` (value: `"completion"`)

* `judge` (value: `"judge"`)




