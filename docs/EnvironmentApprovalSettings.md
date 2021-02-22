# LaunchDarklyApi.EnvironmentApprovalSettings

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**serviceKind** | **String** | The approvals system used. | [optional] 
**required** | **Boolean** | Whether any changes to flags in this environment will require approval. | [optional] 
**canReviewOwnRequest** | **Boolean** | Whether requesters can approve or decline their own request. They may always comment. | [optional] 
**minNumApprovals** | **Number** | The number of approvals required before an approval request can be applied. | [optional] 
**canApplyDeclinedChanges** | **Boolean** | Whether changes can be applied as long as minNumApprovals is met, regardless of if any reviewers have declined a request. | [optional] 


<a name="ServiceKindEnum"></a>
## Enum: ServiceKindEnum


* `launchdarkly` (value: `"launchdarkly"`)

* `serviceNow` (value: `"service-now"`)




