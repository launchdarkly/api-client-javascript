# LaunchDarklyApi.Distribution

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **String** | The type of distribution. | [optional] 
**parameters** | **{String: Number}** | The parameters of the distribution. The parameters are different for each distribution type. When &lt;code&gt;kind&lt;/code&gt; is &lt;code&gt;normal&lt;/code&gt;, the parameters of the distribution are &#39;mu&#39; and &#39;sigma&#39;. When &lt;code&gt;kind&lt;/code&gt; is &lt;code&gt;beta&lt;/code&gt;, the parameters of the distribution are &#39;alpha&#39; and &#39;beta.&#39; | [optional] 



## Enum: KindEnum


* `normal` (value: `"normal"`)

* `beta` (value: `"beta"`)




