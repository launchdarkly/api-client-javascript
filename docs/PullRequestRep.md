# LaunchDarklyApi.PullRequestRep

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The pull request internal ID | 
**externalId** | **String** | The pull request number | 
**title** | **String** | The pull request title | 
**status** | **String** | The pull request status | 
**author** | **String** | The pull request author | 
**createTime** | **Number** |  | 
**mergeTime** | **Number** |  | [optional] 
**mergeCommitKey** | **String** | The pull request merge commit key | [optional] 
**baseCommitKey** | **String** | The pull request base commit key | 
**headCommitKey** | **String** | The pull request head commit key | 
**filesChanged** | **Number** | The number of files changed | 
**linesAdded** | **Number** | The number of lines added | 
**linesDeleted** | **Number** | The number of lines deleted | 
**url** | **String** | The pull request URL | 
**deployments** | [**DeploymentCollectionRep**](DeploymentCollectionRep.md) |  | [optional] 
**flagReferences** | [**FlagReferenceCollectionRep**](FlagReferenceCollectionRep.md) |  | [optional] 
**leadTime** | [**PullRequestLeadTimeRep**](PullRequestLeadTimeRep.md) |  | [optional] 


