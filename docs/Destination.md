# LaunchDarklyApi.Destination

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**Links**](Links.md) |  | [optional] 
**id** | **String** | Unique destination ID. | [optional] 
**name** | **String** | The destination name | [optional] 
**kind** | **String** | Destination type (\&quot;google-pubsub\&quot;, \&quot;kinesis\&quot;, \&quot;mparticle\&quot;, or \&quot;segment\&quot;) | [optional] 
**config** | **Object** | destination-specific configuration. | [optional] 
**on** | **Boolean** | Whether the data export destination is on or not. | [optional] 
**version** | **Number** |  | [optional] 


<a name="KindEnum"></a>
## Enum: KindEnum


* `google-pubsub` (value: `"google-pubsub"`)

* `kinesis` (value: `"kinesis"`)

* `mparticle` (value: `"mparticle"`)

* `segment` (value: `"segment"`)




