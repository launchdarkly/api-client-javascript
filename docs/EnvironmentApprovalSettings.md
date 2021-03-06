# LaunchDarklyApi.EnvironmentApprovalSettings

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**serviceKind** | **String** | The approvals system used. | [optional] 
**required** | **Boolean** | Whether any changes to flags in this environment will require approval. You may only set required or requiredApprovalTags, not both. | [optional] 
**canReviewOwnRequest** | **Boolean** | Whether requesters can approve or decline their own request. They may always comment. | [optional] 
**minNumApprovals** | **Number** | The number of approvals required before an approval request can be applied. | [optional] 
**canApplyDeclinedChanges** | **Boolean** | Whether changes can be applied as long as minNumApprovals is met, regardless of if any reviewers have declined a request. | [optional] 
**requiredApprovalTags** | **[String]** | An array of tags used to specify which flags with those tags require approval. You may only set requiredApprovalTags or required, not both. | [optional] 


<a name="ServiceKindEnum"></a>
## Enum: ServiceKindEnum


* `launchdarkly` (value: `"launchdarkly"`)

* `serviceNow` (value: `"service-now"`)




