# LaunchDarklyApi.ViewPost

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **String** | Unique key for the view within the account/project | 
**name** | **String** | Human-readable name for the view | 
**description** | **String** | Optional detailed description of the view | [optional] [default to &#39;&#39;]
**generateSdkKeys** | **Boolean** | Whether to generate SDK keys for this view | [optional] [default to false]
**maintainerId** | **String** | Member ID of the maintainer for this view. Only one of &#x60;maintainerId&#x60; or &#x60;maintainerTeamKey&#x60; can be specified. | [optional] 
**maintainerTeamKey** | **String** | Key of the maintainer team for this view. Only one of &#x60;maintainerId&#x60; or &#x60;maintainerTeamKey&#x60; can be specified. | [optional] 
**tags** | **[String]** | Tags associated with this view | [optional] 


