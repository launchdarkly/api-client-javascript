# LaunchDarklyApi.DeploymentRep

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The deployment ID | 
**applicationKey** | **String** | The application key | 
**applicationVersion** | **String** | The application version | 
**startedAt** | **Number** |  | 
**endedAt** | **Number** |  | [optional] 
**durationMs** | **Number** | The duration of the deployment in milliseconds | [optional] 
**status** | **String** |  | 
**kind** | **String** |  | 
**active** | **Boolean** | Whether the deployment is active | 
**metadata** | **{String: Object}** | The metadata associated with the deployment | [optional] 
**archived** | **Boolean** | Whether the deployment is archived | 
**environmentKey** | **String** | The environment key | 
**numberOfContributors** | **Number** | The number of contributors | 
**numberOfPullRequests** | **Number** | The number of pull requests | 
**linesAdded** | **Number** | The number of lines added | 
**linesDeleted** | **Number** | The number of lines deleted | 
**leadTime** | **Number** | The total lead time from first commit to deployment end in milliseconds | 
**pullRequests** | [**PullRequestCollectionRep**](PullRequestCollectionRep.md) |  | [optional] 
**flagReferences** | [**FlagReferenceCollectionRep**](FlagReferenceCollectionRep.md) |  | [optional] 
**leadTimeStages** | [**LeadTimeStagesRep**](LeadTimeStagesRep.md) |  | [optional] 


