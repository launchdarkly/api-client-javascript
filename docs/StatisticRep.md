# LaunchDarklyApi.StatisticRep

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The repository name | 
**type** | **String** | The type of repository | 
**sourceLink** | **String** | A URL to access the repository | 
**defaultBranch** | **String** | The repository&#39;s default branch | 
**enabled** | **Boolean** | Whether or not a repository is enabled for code reference scanning | 
**version** | **Number** | The version of the repository&#39;s saved information | 
**hunkCount** | **Number** | The number of code reference hunks in which the flag appears in this repository | 
**fileCount** | **Number** | The number of files in which the flag appears in this repository | 
**links** | [**{String: Link}**](Link.md) | The location and content type of related resources | 
**latestCommitTime** | **Number** |  | [optional] 



## Enum: TypeEnum


* `bitbucket` (value: `"bitbucket"`)

* `custom` (value: `"custom"`)

* `github` (value: `"github"`)

* `gitlab` (value: `"gitlab"`)




