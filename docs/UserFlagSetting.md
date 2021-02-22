# LaunchDarklyApi.UserFlagSetting

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**Links**](Links.md) |  | [optional] 
**value** | **Boolean** | The most important attribute in the response. The _value is the current setting for the user. For a boolean feature toggle, this will be true, false, or null if there is no defined fallthrough value. | [optional] 
**setting** | **Boolean** | The setting attribute indicates whether you've explicitly targeted this user to receive a particular variation. For example, if you have explicitly turned off a feature toggle for a user, setting will be false. A setting of null means that you haven't assigned that user to a specific variation. | [optional] 


