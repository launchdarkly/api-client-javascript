# LaunchDarklyApi.RepositoryPost

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** |  | 
**sourceLink** | **String** |  | [optional] 
**commitUrlTemplate** | **String** | A template for constructing a valid URL to view the commit | [optional] 
**hunkUrlTemplate** | **String** | A template for constructing a valid URL to view the hunk | [optional] 
**type** | **String** | Optionally specify a repository type. The default value is &lt;code&gt;custom&lt;/code&gt; | [optional] 
**defaultBranch** | **String** | The default branch, if not specified, is &lt;code&gt;master&lt;/code&gt; | [optional] 



## Enum: TypeEnum


* `github` (value: `"github"`)

* `bitbucket` (value: `"bitbucket"`)

* `custom` (value: `"custom"`)




