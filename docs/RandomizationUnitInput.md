# LaunchDarklyApi.RandomizationUnitInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**randomizationUnit** | **String** | The unit of randomization. | 
**_default** | **Boolean** | If true, any experiment iterations created within this project will default to using this randomization unit. A project can only have one default randomization unit. | 
**standardRandomizationUnit** | **String** | One of LaunchDarkly&#39;s fixed set of standard randomization units. | 



## Enum: StandardRandomizationUnitEnum


* `guest` (value: `"guest"`)

* `guestTime` (value: `"guestTime"`)

* `organization` (value: `"organization"`)

* `request` (value: `"request"`)

* `user` (value: `"user"`)

* `userTime` (value: `"userTime"`)




