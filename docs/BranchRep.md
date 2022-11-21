# LaunchDarklyApi.BranchRep

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The branch name | 
**head** | **String** | An ID representing the branch HEAD. For example, a commit SHA. | 
**updateSequenceId** | **Number** | An optional ID used to prevent older data from overwriting newer data | [optional] 
**syncTime** | **Number** |  | 
**references** | [**[ReferenceRep]**](ReferenceRep.md) | An array of flag references found on the branch | [optional] 
**links** | **{String: Object}** | The location and content type of related resources | 


