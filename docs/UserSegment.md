# LaunchDarklyApi.UserSegment

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **String** | Unique identifier for the user segment. | 
**name** | **String** | Name of the user segment. | 
**description** | **String** | Description of the user segment. | [optional] 
**tags** | **[String]** | An array of tags for this user segment. | [optional] 
**creationDate** | **Number** | A unix epoch time in milliseconds specifying the creation time of this flag. | 
**included** | **[String]** | An array of user keys that are included in this segment. | [optional] 
**excluded** | **[String]** | An array of user keys that should not be included in this segment, unless they are also listed in \"included\". | [optional] 
**rules** | [**[UserSegmentRule]**](UserSegmentRule.md) | An array of rules that can cause a user to be included in this segment. | [optional] 
**unbounded** | **Boolean** | Controls whether this is considered a \"big segment\" which can support an unlimited numbers of users. Include/exclude lists sent with this payload are not used in big segments. Contact your account manager for early access to this feature. | [optional] 
**version** | **Number** |  | [optional] 
**links** | [**Links**](Links.md) |  | [optional] 
**flags** | [**[FlagListItem]**](FlagListItem.md) |  | [optional] 


