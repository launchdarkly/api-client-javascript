# LaunchDarklyApi.ReleasePipeline

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **Date** | Timestamp of when the release pipeline was created | 
**description** | **String** | The release pipeline description | [optional] 
**key** | **String** | The release pipeline key | 
**name** | **String** | The release pipeline name | 
**phases** | [**[Phase]**](Phase.md) | An ordered list of the release pipeline phases. Each phase is a logical grouping of one or more environments that share attributes for rolling out changes. | 
**tags** | **[String]** | A list of the release pipeline&#39;s tags | [optional] 
**version** | **Number** | The release pipeline version | [optional] 
**access** | [**Access**](Access.md) |  | [optional] 


