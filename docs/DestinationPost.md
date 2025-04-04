# LaunchDarklyApi.DestinationPost

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | A human-readable name for your Data Export destination | [optional] 
**kind** | **String** | The type of Data Export destination | [optional] 
**config** | **Object** | An object with the configuration parameters required for the destination type | [optional] 
**on** | **Boolean** | Whether the export is on. Displayed as the integration status in the LaunchDarkly UI. | [optional] 



## Enum: KindEnum


* `google-pubsub` (value: `"google-pubsub"`)

* `kinesis` (value: `"kinesis"`)

* `mparticle` (value: `"mparticle"`)

* `segment` (value: `"segment"`)

* `azure-event-hubs` (value: `"azure-event-hubs"`)

* `snowflake-v2` (value: `"snowflake-v2"`)




