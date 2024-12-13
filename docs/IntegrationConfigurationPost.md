# LaunchDarklyApi.IntegrationConfigurationPost

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the integration configuration | 
**enabled** | **Boolean** | Whether the integration configuration is enabled. If omitted, defaults to true | [optional] 
**tags** | **[String]** | Tags for the integration | [optional] 
**configValues** | **{String: Object}** | The unique set of fields required to configure the integration. Refer to the &lt;code&gt;formVariables&lt;/code&gt; field in the corresponding &lt;code&gt;manifest.json&lt;/code&gt; at https://github.com/launchdarkly/integration-framework/tree/main/integrations for a full list of fields for the integration you wish to configure. | 
**capabilityConfig** | [**CapabilityConfigPost**](CapabilityConfigPost.md) |  | [optional] 


