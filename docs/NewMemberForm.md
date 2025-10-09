# LaunchDarklyApi.NewMemberForm

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **String** | The member&#39;s email | 
**password** | **String** | The member&#39;s password | [optional] 
**firstName** | **String** | The member&#39;s first name | [optional] 
**lastName** | **String** | The member&#39;s last name | [optional] 
**role** | **String** | The member&#39;s initial role, if you are using a base role for the initial role | [optional] 
**customRoles** | **[String]** | An array of the member&#39;s initial roles, if you are using custom roles or preset roles provided by LaunchDarkly | [optional] 
**teamKeys** | **[String]** | An array of the member&#39;s teams | [optional] 
**roleAttributes** | **{String: Array}** |  | [optional] 



## Enum: RoleEnum


* `reader` (value: `"reader"`)

* `writer` (value: `"writer"`)

* `admin` (value: `"admin"`)

* `no_access` (value: `"no_access"`)




