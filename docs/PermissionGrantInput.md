# LaunchDarklyApi.PermissionGrantInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actionSet** | **String** | A group of related actions to allow. Specify either &lt;code&gt;actionSet&lt;/code&gt; or &lt;code&gt;actions&lt;/code&gt;. Use &lt;code&gt;maintainTeam&lt;/code&gt; to add team maintainers. | [optional] 
**actions** | **[String]** | A list of actions to allow. Specify either &lt;code&gt;actionSet&lt;/code&gt; or &lt;code&gt;actions&lt;/code&gt;. To learn more, read [Role actions](https://docs.launchdarkly.com/home/members/role-actions). | [optional] 
**memberIDs** | **[String]** | A list of member IDs who receive the permission grant. | [optional] 



## Enum: ActionSetEnum


* `maintainTeam` (value: `"maintainTeam"`)




