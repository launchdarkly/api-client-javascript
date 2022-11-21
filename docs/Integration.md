# LaunchDarklyApi.Integration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**{String: Link}**](Link.md) | The location and content type of related resources | [optional] 
**id** | **String** | The ID for this integration audit log subscription | [optional] 
**kind** | **String** | The type of integration | [optional] 
**name** | **String** | A human-friendly name for the integration | [optional] 
**config** | **{String: Object}** | Details on configuration for an integration of this type. Refer to the &lt;code&gt;formVariables&lt;/code&gt; field in the corresponding &lt;code&gt;manifest.json&lt;/code&gt; for a full list of fields for each integration. | [optional] 
**statements** | [**[Statement]**](Statement.md) | Represents a Custom role policy, defining a resource kinds filter the integration audit log subscription responds to. | [optional] 
**on** | **Boolean** | Whether the integration is currently active | [optional] 
**tags** | **[String]** | An array of tags for this integration | [optional] 
**access** | [**Access**](Access.md) |  | [optional] 
**status** | [**IntegrationSubscriptionStatusRep**](IntegrationSubscriptionStatusRep.md) |  | [optional] 
**url** | **String** | Slack webhook receiver URL. Only used for legacy Slack webhook integrations. | [optional] 
**apiKey** | **String** | Datadog API key. Only used for legacy Datadog webhook integrations. | [optional] 


