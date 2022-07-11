# LaunchDarklyApi.RuleClause

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute** | **String** | The attribute the rule applies to, for example, last name or email address | [optional] 
**op** | **String** | The operator to apply to the given attribute | [optional] 
**negate** | **Boolean** | Whether the operator should be negated | [optional] 



## Enum: OpEnum


* `in` (value: `"in"`)

* `endsWith` (value: `"endsWith"`)

* `startsWith` (value: `"startsWith"`)

* `matches` (value: `"matches"`)

* `contains` (value: `"contains"`)

* `lessThan` (value: `"lessThan"`)

* `lessThanOrEqual` (value: `"lessThanOrEqual"`)

* `greaterThan` (value: `"greaterThan"`)

* `greaterThanOrEqual` (value: `"greaterThanOrEqual"`)

* `before` (value: `"before"`)

* `after` (value: `"after"`)

* `segmentMatch` (value: `"segmentMatch"`)

* `semVerEqual` (value: `"semVerEqual"`)

* `semVerLessThan` (value: `"semVerLessThan"`)

* `semVerGreaterThan` (value: `"semVerGreaterThan"`)




