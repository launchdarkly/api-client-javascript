# LaunchDarklyApi.PostDeploymentEventInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**projectKey** | **String** | The project key | 
**environmentKey** | **String** | The environment key | 
**applicationKey** | **String** | The application key. This defines the granularity at which you want to view your insights metrics. Typically it is the name of one of the GitHub repositories that you use in this project.&lt;br/&gt;&lt;br/&gt;LaunchDarkly automatically creates a new application each time you send a unique application key. | 
**applicationName** | **String** | The application name. This defines how the application is displayed | [optional] 
**applicationKind** | **String** | The kind of application. Default: &lt;code&gt;server&lt;/code&gt; | [optional] 
**version** | **String** | The application version. You can set the application version to any string that includes only letters, numbers, periods (&lt;code&gt;.&lt;/code&gt;), hyphens (&lt;code&gt;-&lt;/code&gt;), or underscores (&lt;code&gt;_&lt;/code&gt;).&lt;br/&gt;&lt;br/&gt;We recommend setting the application version to at least the first seven characters of the SHA or to the tag of the GitHub commit for this deployment. | 
**versionName** | **String** | The version name. This defines how the version is displayed | [optional] 
**eventType** | **String** | The event type | 
**eventTime** | **Number** |  | [optional] 
**eventMetadata** | **{String: Object}** | A JSON object containing metadata about the event | [optional] 
**deploymentMetadata** | **{String: Object}** | A JSON object containing metadata about the deployment | [optional] 



## Enum: ApplicationKindEnum


* `server` (value: `"server"`)

* `browser` (value: `"browser"`)

* `mobile` (value: `"mobile"`)





## Enum: EventTypeEnum


* `started` (value: `"started"`)

* `failed` (value: `"failed"`)

* `finished` (value: `"finished"`)

* `custom` (value: `"custom"`)




