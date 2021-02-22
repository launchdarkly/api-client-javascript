# LaunchDarklyApi.DestinationBody

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | A human-readable name for your data export destination. | 
**kind** | **String** | The data export destination type. Available choices are kinesis, google-pubsub, mparticle, or segment. | 
**config** | **Object** | destination-specific configuration. | 
**on** | **Boolean** | Whether the data export destination is on or not. | [optional] 


<a name="KindEnum"></a>
## Enum: KindEnum


* `googlePubsub` (value: `"google-pubsub"`)

* `kinesis` (value: `"kinesis"`)

* `mparticle` (value: `"mparticle"`)

* `segment` (value: `"segment"`)




