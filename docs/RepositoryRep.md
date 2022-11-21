# LaunchDarklyApi.RepositoryRep

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The repository name | 
**sourceLink** | **String** | A URL to access the repository | [optional] 
**commitUrlTemplate** | **String** | A template for constructing a valid URL to view the commit | [optional] 
**hunkUrlTemplate** | **String** | A template for constructing a valid URL to view the hunk | [optional] 
**type** | **String** | The type of repository | 
**defaultBranch** | **String** | The repository&#39;s default branch | 
**enabled** | **Boolean** | Whether or not a repository is enabled for code reference scanning | 
**version** | **Number** | The version of the repository&#39;s saved information | 
**branches** | [**[BranchRep]**](BranchRep.md) | An array of the repository&#39;s branches that have been scanned for code references | [optional] 
**links** | **{String: Object}** |  | 
**access** | [**Access**](Access.md) |  | [optional] 



## Enum: TypeEnum


* `bitbucket` (value: `"bitbucket"`)

* `custom` (value: `"custom"`)

* `github` (value: `"github"`)

* `gitlab` (value: `"gitlab"`)




