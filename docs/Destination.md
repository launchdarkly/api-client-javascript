# LaunchDarklyApi.Destination

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The ID of this Data Export destination | [optional] 
**links** | [**{String: Link}**](Link.md) | Links to other resources within the API. Includes the URL and content type of those resources. | [optional] 
**name** | **String** | A human-readable name for your Data Export destination | [optional] 
**kind** | **String** | The type of Data Export destination | [optional] 
**version** | **Number** |  | [optional] 
**config** | **Object** | An object with the configuration parameters required for the destination type | [optional] 
**on** | **Boolean** | Whether the export is on, that is, the status of the integration | [optional] 
**access** | [**Access**](Access.md) |  | [optional] 



## Enum: KindEnum


* `google-pubsub` (value: `"google-pubsub"`)

* `kinesis` (value: `"kinesis"`)

* `mparticle` (value: `"mparticle"`)

* `segment` (value: `"segment"`)

* `azure-event-hubs` (value: `"azure-event-hubs"`)




