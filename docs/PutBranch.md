# LaunchDarklyApi.PutBranch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The branch name | 
**head** | **String** | An ID representing the branch HEAD. For example, a commit SHA. | 
**updateSequenceId** | **Number** | An optional ID used to prevent older data from overwriting newer data. If no sequence ID is included, the newly submitted data will always be saved. | [optional] 
**syncTime** | **Number** |  | 
**references** | [**[ReferenceRep]**](ReferenceRep.md) | An array of flag references found on the branch | [optional] 
**commitTime** | **Number** |  | [optional] 


