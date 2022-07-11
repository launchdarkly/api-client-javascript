# LaunchDarklyApi.UserSegment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | A human-friendly name for the segment | 
**description** | **String** | A description of the segment&#39;s purpose | [optional] 
**tags** | **[String]** | Tags for the segment | 
**creationDate** | **Number** |  | 
**key** | **String** | A unique key used to reference the segment | 
**included** | **[String]** | An array of user keys for included users. Included users are always segment members, regardless of segment rules. For Big Segments this array is either empty or omitted. | [optional] 
**excluded** | **[String]** | An array of user keys for excluded users. Segment rules bypass excluded users, so they will never be included based on rules. Excluded users may still be included explicitly. This value is omitted for Big Segments. | [optional] 
**links** | [**{String: Link}**](Link.md) | Links to other resources within the API. Includes the URL and content type of those resources. | 
**rules** | [**[UserSegmentRule]**](UserSegmentRule.md) | An array of the targeting rules for this segment. | 
**version** | **Number** | Version of the segment | 
**deleted** | **Boolean** | Whether the segment has been deleted | 
**access** | [**Access**](Access.md) |  | [optional] 
**flags** | [**[FlagListingRep]**](FlagListingRep.md) |  | [optional] 
**unbounded** | **Boolean** | Whether this is a standard segment (false) or a Big Segment (true) | [optional] 
**generation** | **Number** | For Big Segments, how many times this segment has been created | 
**unboundedMetadata** | [**SegmentMetadata**](SegmentMetadata.md) |  | [optional] 
**external** | **String** | The external data store backing this segment. Only applies to Big Segments. | [optional] 
**externalLink** | **String** | The URL for the external data store backing this segment. Only applies to Big Segments. | [optional] 
**importInProgress** | **Boolean** | Whether an import is currently in progress for the specified segment. Only applies to Big Segments. | [optional] 


