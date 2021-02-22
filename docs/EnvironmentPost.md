# LaunchDarklyApi.EnvironmentPost

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the new environment. | 
**key** | **String** | A project-unique key for the new environment. | 
**color** | **String** | A color swatch (as an RGB hex value with no leading '#', e.g. C8C8C8). | 
**defaultTtl** | **Number** | The default TTL for the new environment. | [optional] 
**secureMode** | **Boolean** | Determines whether the environment is in secure mode. | [optional] 
**defaultTrackEvents** | **Boolean** | Set to true to send detailed event information for newly created flags. | [optional] 
**tags** | **[String]** | An array of tags for this environment. | [optional] 
**requireComments** | **Boolean** | Determines if this environment requires comments for flag and segment changes. | [optional] 
**confirmChanges** | **Boolean** | Determines if this environment requires confirmation for flag and segment changes. | [optional] 


