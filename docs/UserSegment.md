# LaunchDarklyApi.UserSegment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | A human-friendly name for the segment | 
**description** | **String** | A description of the segment&#39;s purpose | [optional] 
**tags** | **[String]** | Tags for the segment | 
**creationDate** | **Number** |  | 
**key** | **String** | A unique key used to reference the segment | 
**included** | **[String]** | Included users are always segment members, regardless of segment rules. For Big Segments this array is either empty or omitted entirely. | [optional] 
**excluded** | **[String]** | Segment rules bypass excluded users, so they will never be included based on rules. Excluded users may still be included explicitly. This value is omitted for Big Segments. | [optional] 
**links** | [**{String: Link}**](Link.md) |  | 
**rules** | [**[UserSegmentRule]**](UserSegmentRule.md) |  | 
**version** | **Number** |  | 
**deleted** | **Boolean** |  | 
**access** | [**Access**](Access.md) |  | [optional] 
**flags** | [**[FlagListingRep]**](FlagListingRep.md) |  | [optional] 
**unbounded** | **Boolean** |  | [optional] 
**generation** | **Number** |  | 
**unboundedMetadata** | [**SegmentMetadata**](SegmentMetadata.md) |  | [optional] 
**external** | **String** |  | [optional] 
**externalLink** | **String** |  | [optional] 
**importInProgress** | **Boolean** |  | [optional] 


