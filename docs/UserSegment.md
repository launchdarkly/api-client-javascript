# LaunchDarklyRestApi.UserSegment

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **String** | Unique identifier for the user segment. | 
**name** | **String** | Name of the user segment. | 
**description** | **String** | Description of the user segment. | [optional] 
**tags** | **[String]** | An array of tags for this user segment. | [optional] 
**creationDate** | **Number** | A unix epoch time in milliseconds specifying the creation time of this flag. | 
**included** | **[String]** | An array of user keys that are included in this segment. | [optional] 
**excluded** | **[String]** | An array of user keys that should not be included in this segment, unless they are also listed in \&quot;included\&quot;. | [optional] 
**rules** | [**[UserSegmentRule]**](UserSegmentRule.md) | An array of rules that can cause a user to be included in this segment. | [optional] 
**version** | **Number** |  | [optional] 
**links** | [**Links**](Links.md) |  | [optional] 


