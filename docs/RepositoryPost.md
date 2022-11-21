# LaunchDarklyApi.RepositoryPost

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The repository name | 
**sourceLink** | **String** | A URL to access the repository | [optional] 
**commitUrlTemplate** | **String** | A template for constructing a valid URL to view the commit | [optional] 
**hunkUrlTemplate** | **String** | A template for constructing a valid URL to view the hunk | [optional] 
**type** | **String** | The type of repository. If not specified, the default value is &lt;code&gt;custom&lt;/code&gt;. | [optional] 
**defaultBranch** | **String** | The repository&#39;s default branch. If not specified, the default value is &lt;code&gt;main&lt;/code&gt;. | [optional] 



## Enum: TypeEnum


* `bitbucket` (value: `"bitbucket"`)

* `custom` (value: `"custom"`)

* `github` (value: `"github"`)

* `gitlab` (value: `"gitlab"`)




