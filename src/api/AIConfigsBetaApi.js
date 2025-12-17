/**
 * LaunchDarkly REST API
 * This documentation describes LaunchDarkly's REST API. To access the complete OpenAPI spec directly, use [Get OpenAPI spec](https://launchdarkly.com/docs/api/other/get-openapi-spec).  To learn how to use LaunchDarkly using the user interface (UI) instead, read our [product documentation](https://launchdarkly.com/docs/home).  ## Authentication  LaunchDarkly's REST API uses the HTTPS protocol with a minimum TLS version of 1.2.  All REST API resources are authenticated with either [personal or service access tokens](https://launchdarkly.com/docs/home/account/api), or session cookies. Other authentication mechanisms are not supported. You can manage personal access tokens on your [**Authorization**](https://app.launchdarkly.com/settings/authorization) page in the LaunchDarkly UI.  LaunchDarkly also has SDK keys, mobile keys, and client-side IDs that are used by our server-side SDKs, mobile SDKs, and JavaScript-based SDKs, respectively. **These keys cannot be used to access our REST API**. These keys are environment-specific, and can only perform read-only operations such as fetching feature flag settings.  | Auth mechanism                                                                                  | Allowed resources                                                                                     | Use cases                                          | | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | -------------------------------------------------- | | [Personal or service access tokens](https://launchdarkly.com/docs/home/account/api) | Can be customized on a per-token basis                                                                | Building scripts, custom integrations, data export. | | SDK keys                                                                                        | Can only access read-only resources specific to server-side SDKs. Restricted to a single environment. | Server-side SDKs                     | | Mobile keys                                                                                     | Can only access read-only resources specific to mobile SDKs, and only for flags marked available to mobile keys. Restricted to a single environment.           | Mobile SDKs                                        | | Client-side ID                                                                                  | Can only access read-only resources specific to JavaScript-based client-side SDKs, and only for flags marked available to client-side. Restricted to a single environment.           | Client-side JavaScript                             |  > #### Keep your access tokens and SDK keys private > > Access tokens should _never_ be exposed in untrusted contexts. Never put an access token in client-side JavaScript, or embed it in a mobile application. LaunchDarkly has special mobile keys that you can embed in mobile apps. If you accidentally expose an access token or SDK key, you can reset it from your [**Authorization**](https://app.launchdarkly.com/settings/authorization) page. > > The client-side ID is safe to embed in untrusted contexts. It's designed for use in client-side JavaScript.  ### Authentication using request header  The preferred way to authenticate with the API is by adding an `Authorization` header containing your access token to your requests. The value of the `Authorization` header must be your access token.  Manage personal access tokens from the [**Authorization**](https://app.launchdarkly.com/settings/authorization) page.  ### Authentication using session cookie  For testing purposes, you can make API calls directly from your web browser. If you are logged in to the LaunchDarkly application, the API will use your existing session to authenticate calls.  Depending on the permissions granted as part of your [role](https://launchdarkly.com/docs/home/account/roles), you may not have permission to perform some API calls. You will receive a `401` response code in that case.  > ### Modifying the Origin header causes an error > > LaunchDarkly validates that the Origin header for any API request authenticated by a session cookie matches the expected Origin header. The expected Origin header is `https://app.launchdarkly.com`. > > If the Origin header does not match what's expected, LaunchDarkly returns an error. This error can prevent the LaunchDarkly app from working correctly. > > Any browser extension that intentionally changes the Origin header can cause this problem. For example, the `Allow-Control-Allow-Origin: *` Chrome extension changes the Origin header to `http://evil.com` and causes the app to fail. > > To prevent this error, do not modify your Origin header. > > LaunchDarkly does not require origin matching when authenticating with an access token, so this issue does not affect normal API usage.  ## Representations  All resources expect and return JSON response bodies. Error responses also send a JSON body. To learn more about the error format of the API, read [Errors](https://launchdarkly.com/docs/api#errors).  In practice this means that you always get a response with a `Content-Type` header set to `application/json`.  In addition, request bodies for `PATCH`, `POST`, and `PUT` requests must be encoded as JSON with a `Content-Type` header set to `application/json`.  ### Summary and detailed representations  When you fetch a list of resources, the response includes only the most important attributes of each resource. This is a _summary representation_ of the resource. When you fetch an individual resource, such as a single feature flag, you receive a _detailed representation_ of the resource.  The best way to find a detailed representation is to follow links. Every summary representation includes a link to its detailed representation.  ### Expanding responses  Sometimes the detailed representation of a resource does not include all of the attributes of the resource by default. If this is the case, the request method will clearly document this and describe which attributes you can include in an expanded response.  To include the additional attributes, append the `expand` request parameter to your request and add a comma-separated list of the attributes to include. For example, when you append `?expand=members,maintainers` to the [Get team](https://launchdarkly.com/docs/api/teams/get-team) endpoint, the expanded response includes both of these attributes.  ### Links and addressability  The best way to navigate the API is by following links. These are attributes in representations that link to other resources. The API always uses the same format for links:  - Links to other resources within the API are encapsulated in a `_links` object - If the resource has a corresponding link to HTML content on the site, it is stored in a special `_site` link  Each link has two attributes:  - An `href`, which contains the URL - A `type`, which describes the content type  For example, a feature resource might return the following:  ```json {   \"_links\": {     \"parent\": {       \"href\": \"/api/features\",       \"type\": \"application/json\"     },     \"self\": {       \"href\": \"/api/features/sort.order\",       \"type\": \"application/json\"     }   },   \"_site\": {     \"href\": \"/features/sort.order\",     \"type\": \"text/html\"   } } ```  From this, you can navigate to the parent collection of features by following the `parent` link, or navigate to the site page for the feature by following the `_site` link.  Collections are always represented as a JSON object with an `items` attribute containing an array of representations. Like all other representations, collections have `_links` defined at the top level.  Paginated collections include `first`, `last`, `next`, and `prev` links containing a URL with the respective set of elements in the collection.  ## Updates  Resources that accept partial updates use the `PATCH` verb. Most resources support the [JSON patch](https://launchdarkly.com/docs/api#updates-using-json-patch) format. Some resources also support the [JSON merge patch](https://launchdarkly.com/docs/api#updates-using-json-merge-patch) format, and some resources support the [semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch) format, which is a way to specify the modifications to perform as a set of executable instructions. Each resource supports optional [comments](https://launchdarkly.com/docs/api#updates-with-comments) that you can submit with updates. Comments appear in outgoing webhooks, the audit log, and other integrations.  When a resource supports both JSON patch and semantic patch, we document both in the request method. However, the specific request body fields and descriptions included in our documentation only match one type of patch or the other.  ### Updates using JSON patch  [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) is a way to specify the modifications to perform on a resource. JSON patch uses paths and a limited set of operations to describe how to transform the current state of the resource into a new state. JSON patch documents are always arrays, where each element contains an operation, a path to the field to update, and the new value.  For example, in this feature flag representation:  ```json {     \"name\": \"New recommendations engine\",     \"key\": \"engine.enable\",     \"description\": \"This is the description\",     ... } ``` You can change the feature flag's description with the following patch document:  ```json [{ \"op\": \"replace\", \"path\": \"/description\", \"value\": \"This is the new description\" }] ```  You can specify multiple modifications to perform in a single request. You can also test that certain preconditions are met before applying the patch:  ```json [   { \"op\": \"test\", \"path\": \"/version\", \"value\": 10 },   { \"op\": \"replace\", \"path\": \"/description\", \"value\": \"The new description\" } ] ```  The above patch request tests whether the feature flag's `version` is `10`, and if so, changes the feature flag's description.  Attributes that are not editable, such as a resource's `_links`, have names that start with an underscore.  ### Updates using JSON merge patch  [JSON merge patch](https://datatracker.ietf.org/doc/html/rfc7386) is another format for specifying the modifications to perform on a resource. JSON merge patch is less expressive than JSON patch. However, in many cases it is simpler to construct a merge patch document. For example, you can change a feature flag's description with the following merge patch document:  ```json {   \"description\": \"New flag description\" } ```  ### Updates using semantic patch  Some resources support the semantic patch format. A semantic patch is a way to specify the modifications to perform on a resource as a set of executable instructions.  Semantic patch allows you to be explicit about intent using precise, custom instructions. In many cases, you can define semantic patch instructions independently of the current state of the resource. This can be useful when defining a change that may be applied at a future date.  To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header.  Here's how:  ``` Content-Type: application/json; domain-model=launchdarkly.semanticpatch ```  If you call a semantic patch resource without this header, you will receive a `400` response because your semantic patch will be interpreted as a JSON patch.  The body of a semantic patch request takes the following properties:  * `comment` (string): (Optional) A description of the update. * `environmentKey` (string): (Required for some resources only) The environment key. * `instructions` (array): (Required) A list of actions the update should perform. Each action in the list must be an object with a `kind` property that indicates the instruction. If the instruction requires parameters, you must include those parameters as additional fields in the object. The documentation for each resource that supports semantic patch includes the available instructions and any additional parameters.  For example:  ```json {   \"comment\": \"optional comment\",   \"instructions\": [ {\"kind\": \"turnFlagOn\"} ] } ```  Semantic patches are not applied partially; either all of the instructions are applied or none of them are. If **any** instruction is invalid, the endpoint returns an error and will not change the resource. If all instructions are valid, the request succeeds and the resources are updated if necessary, or left unchanged if they are already in the state you request.  ### Updates with comments  You can submit optional comments with `PATCH` changes.  To submit a comment along with a JSON patch document, use the following format:  ```json {   \"comment\": \"This is a comment string\",   \"patch\": [{ \"op\": \"replace\", \"path\": \"/description\", \"value\": \"The new description\" }] } ```  To submit a comment along with a JSON merge patch document, use the following format:  ```json {   \"comment\": \"This is a comment string\",   \"merge\": { \"description\": \"New flag description\" } } ```  To submit a comment along with a semantic patch, use the following format:  ```json {   \"comment\": \"This is a comment string\",   \"instructions\": [ {\"kind\": \"turnFlagOn\"} ] } ```  ## Errors  The API always returns errors in a common format. Here's an example:  ```json {   \"code\": \"invalid_request\",   \"message\": \"A feature with that key already exists\",   \"id\": \"30ce6058-87da-11e4-b116-123b93f75cba\" } ```  The `code` indicates the general class of error. The `message` is a human-readable explanation of what went wrong. The `id` is a unique identifier. Use it when you're working with LaunchDarkly Support to debug a problem with a specific API call.  ### HTTP status error response codes  | Code | Definition        | Description                                                                                       | Possible Solution                                                | | ---- | ----------------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | | 400  | Invalid request       | The request cannot be understood.                                    | Ensure JSON syntax in request body is correct.                   | | 401  | Invalid access token      | Requestor is unauthorized or does not have permission for this API call.                                                | Ensure your API access token is valid and has the appropriate permissions.                                     | | 403  | Forbidden         | Requestor does not have access to this resource.                                                | Ensure that the account member or access token has proper permissions set. | | 404  | Invalid resource identifier | The requested resource is not valid. | Ensure that the resource is correctly identified by ID or key. | | 405  | Method not allowed | The request method is not allowed on this resource. | Ensure that the HTTP verb is correct. | | 409  | Conflict          | The API request can not be completed because it conflicts with a concurrent API request. | Retry your request.                                              | | 422  | Unprocessable entity | The API request can not be completed because the update description can not be understood. | Ensure that the request body is correct for the type of patch you are using, either JSON patch or semantic patch. | 429  | Too many requests | Read [Rate limiting](https://launchdarkly.com/docs/api#rate-limiting).                                               | Wait and try again later.                                        |  ## CORS  The LaunchDarkly API supports Cross Origin Resource Sharing (CORS) for AJAX requests from any origin. If an `Origin` header is given in a request, it will be echoed as an explicitly allowed origin. Otherwise the request returns a wildcard, `Access-Control-Allow-Origin: *`. For more information on CORS, read the [CORS W3C Recommendation](http://www.w3.org/TR/cors). Example CORS headers might look like:  ```http Access-Control-Allow-Headers: Accept, Content-Type, Content-Length, Accept-Encoding, Authorization Access-Control-Allow-Methods: OPTIONS, GET, DELETE, PATCH Access-Control-Allow-Origin: * Access-Control-Max-Age: 300 ```  You can make authenticated CORS calls just as you would make same-origin calls, using either [token or session-based authentication](https://launchdarkly.com/docs/api#authentication). If you are using session authentication, you should set the `withCredentials` property for your `xhr` request to `true`. You should never expose your access tokens to untrusted entities.  ## Rate limiting  We use several rate limiting strategies to ensure the availability of our APIs. Rate-limited calls to our APIs return a `429` status code. Calls to our APIs include headers indicating the current rate limit status. The specific headers returned depend on the API route being called. The limits differ based on the route, authentication mechanism, and other factors. Routes that are not rate limited may not contain any of the headers described below.  > ### Rate limiting and SDKs > > LaunchDarkly SDKs are never rate limited and do not use the API endpoints defined here. LaunchDarkly uses a different set of approaches, including streaming/server-sent events and a global CDN, to ensure availability to the routes used by LaunchDarkly SDKs.  ### Global rate limits  Authenticated requests are subject to a global limit. This is the maximum number of calls that your account can make to the API per ten seconds. All service and personal access tokens on the account share this limit, so exceeding the limit with one access token will impact other tokens. Calls that are subject to global rate limits may return the headers below:  | Header name                    | Description                                                                      | | ------------------------------ | -------------------------------------------------------------------------------- | | `X-Ratelimit-Global-Remaining` | The maximum number of requests the account is permitted to make per ten seconds. | | `X-Ratelimit-Reset`            | The time at which the current rate limit window resets in epoch milliseconds.    |  We do not publicly document the specific number of calls that can be made globally. This limit may change, and we encourage clients to program against the specification, relying on the two headers defined above, rather than hardcoding to the current limit.  ### Route-level rate limits  Some authenticated routes have custom rate limits. These also reset every ten seconds. Any service or personal access tokens hitting the same route share this limit, so exceeding the limit with one access token may impact other tokens. Calls that are subject to route-level rate limits return the headers below:  | Header name                   | Description                                                                                           | | ----------------------------- | ----------------------------------------------------------------------------------------------------- | | `X-Ratelimit-Route-Remaining` | The maximum number of requests to the current route the account is permitted to make per ten seconds. | | `X-Ratelimit-Reset`           | The time at which the current rate limit window resets in epoch milliseconds.                         |  A _route_ represents a specific URL pattern and verb. For example, the [Delete environment](https://launchdarkly.com/docs/api/environments/delete-environment) endpoint is considered a single route, and each call to delete an environment counts against your route-level rate limit for that route.  We do not publicly document the specific number of calls that an account can make to each endpoint per ten seconds. These limits may change, and we encourage clients to program against the specification, relying on the two headers defined above, rather than hardcoding to the current limits.  ### IP-based rate limiting  We also employ IP-based rate limiting on some API routes. If you hit an IP-based rate limit, your API response will include a `Retry-After` header indicating how long to wait before re-trying the call. Clients must wait at least `Retry-After` seconds before making additional calls to our API, and should employ jitter and backoff strategies to avoid triggering rate limits again.  ## OpenAPI (Swagger) and client libraries  We have a [complete OpenAPI (Swagger) specification](https://app.launchdarkly.com/api/v2/openapi.json) for our API.  We auto-generate multiple client libraries based on our OpenAPI specification. To learn more, visit the [collection of client libraries on GitHub](https://github.com/search?q=topic%3Alaunchdarkly-api+org%3Alaunchdarkly&type=Repositories). You can also use this specification to generate client libraries to interact with our REST API in your language of choice.  Our OpenAPI specification is supported by several API-based tools such as Postman and Insomnia. In many cases, you can directly import our specification to explore our APIs.  ## Method overriding  Some firewalls and HTTP clients restrict the use of verbs other than `GET` and `POST`. In those environments, our API endpoints that use `DELETE`, `PATCH`, and `PUT` verbs are inaccessible.  To avoid this issue, our API supports the `X-HTTP-Method-Override` header, allowing clients to \"tunnel\" `DELETE`, `PATCH`, and `PUT` requests using a `POST` request.  For example, to call a `PATCH` endpoint using a `POST` request, you can include `X-HTTP-Method-Override:PATCH` as a header.  ## Beta resources  We sometimes release new API resources in **beta** status before we release them with general availability.  Resources that are in beta are still undergoing testing and development. They may change without notice, including becoming backwards incompatible.  We try to promote resources into general availability as quickly as possible. This happens after sufficient testing and when we're satisfied that we no longer need to make backwards-incompatible changes.  We mark beta resources with a \"Beta\" callout in our documentation, pictured below:  > ### This feature is in beta > > To use this feature, pass in a header including the `LD-API-Version` key with value set to `beta`. Use this header with each call. To learn more, read [Beta resources](https://launchdarkly.com/docs/api#beta-resources). > > Resources that are in beta are still undergoing testing and development. They may change without notice, including becoming backwards incompatible.  ### Using beta resources  To use a beta resource, you must include a header in the request. If you call a beta resource without this header, you receive a `403` response.  Use this header:  ``` LD-API-Version: beta ```  ## Federal and EU environments  In addition to the commercial versions, LaunchDarkly offers instances for federal agencies and those based in the European Union (EU).  ### Federal environments  The version of LaunchDarkly that is available on domains controlled by the United States government is different from the version of LaunchDarkly available to the general public. If you are an employee or contractor for a United States federal agency and use LaunchDarkly in your work, you likely use the federal instance of LaunchDarkly.  If you are working in the federal instance of LaunchDarkly, the base URI for each request is `https://app.launchdarkly.us`.  To learn more, read [LaunchDarkly in federal environments](https://launchdarkly.com/docs/home/infrastructure/federal).  ### EU environments  The version of LaunchDarkly that is available in the EU is different from the version of LaunchDarkly available to other regions. If you are based in the EU, you likely use the EU instance of LaunchDarkly. The LaunchDarkly EU instance complies with EU data residency principles, including the protection and confidentiality of EU customer information.  If you are working in the EU instance of LaunchDarkly, the base URI for each request is `https://app.eu.launchdarkly.com`.  To learn more, read [LaunchDarkly in the European Union (EU)](https://launchdarkly.com/docs/home/infrastructure/eu).  ## Versioning  We try hard to keep our REST API backwards compatible, but we occasionally have to make backwards-incompatible changes in the process of shipping new features. These breaking changes can cause unexpected behavior if you don't prepare for them accordingly.  Updates to our REST API include support for the latest features in LaunchDarkly. We also release a new version of our REST API every time we make a breaking change. We provide simultaneous support for multiple API versions so you can migrate from your current API version to a new version at your own pace.  ### Setting the API version per request  You can set the API version on a specific request by sending an `LD-API-Version` header, as shown in the example below:  ``` LD-API-Version: 20240415 ```  The header value is the version number of the API version you would like to request. The number for each version corresponds to the date the version was released in `yyyymmdd` format. In the example above the version `20240415` corresponds to April 15, 2024.  ### Setting the API version per access token  When you create an access token, you must specify a specific version of the API to use. This ensures that integrations using this token cannot be broken by version changes.  Tokens created before versioning was released have their version set to `20160426`, which is the version of the API that existed before the current versioning scheme, so that they continue working the same way they did before versioning.  If you would like to upgrade your integration to use a new API version, you can explicitly set the header described above.  > ### Best practice: Set the header for every client or integration > > We recommend that you set the API version header explicitly in any client or integration you build. > > Only rely on the access token API version during manual testing.  ### API version changelog  <table>   <tr>     <th>Version</th>     <th>Changes</th>     <th>End of life (EOL)</th>   </tr>   <tr>     <td>`20240415`</td>     <td>       <ul><li>Changed several endpoints from unpaginated to paginated. Use the `limit` and `offset` query parameters to page through the results.</li> <li>Changed the [list access tokens](https://launchdarkly.com/docs/api/access-tokens/get-tokens) endpoint: <ul><li>Response is now paginated with a default limit of `25`</li></ul></li> <li>Changed the [list account members](https://launchdarkly.com/docs/api/account-members/get-members) endpoint: <ul><li>The `accessCheck` filter is no longer available</li></ul></li> <li>Changed the [list custom roles](https://launchdarkly.com/docs/api/custom-roles/get-custom-roles) endpoint: <ul><li>Response is now paginated with a default limit of `20`</li></ul></li> <li>Changed the [list feature flags](https://launchdarkly.com/docs/api/feature-flags/get-feature-flags) endpoint: <ul><li>Response is now paginated with a default limit of `20`</li><li>The `environments` field is now only returned if the request is filtered by environment, using the `filterEnv` query parameter</li><li>The `followerId`, `hasDataExport`, `status`, `contextKindTargeted`, and `segmentTargeted` filters are no longer available</li><li>The `compare` query parameter is no longer available</li></ul></li> <li>Changed the [list segments](https://launchdarkly.com/docs/api/segments/get-segments) endpoint: <ul><li>Response is now paginated with a default limit of `20`</li></ul></li> <li>Changed the [list teams](https://launchdarkly.com/docs/api/teams/get-teams) endpoint: <ul><li>The `expand` parameter no longer supports including `projects` or `roles`</li><li>In paginated results, the maximum page size is now 100</li></ul></li> <li>Changed the [get workflows](https://launchdarkly.com/docs/api/workflows/get-workflows) endpoint: <ul><li>Response is now paginated with a default limit of `20`</li><li>The `_conflicts` field in the response is no longer available</li></ul></li> </ul>     </td>     <td>Current</td>   </tr>   <tr>     <td>`20220603`</td>     <td>       <ul><li>Changed the [list projects](https://launchdarkly.com/docs/api/projects/get-projects) return value:<ul><li>Response is now paginated with a default limit of `20`.</li><li>Added support for filter and sort.</li><li>The project `environments` field is now expandable. This field is omitted by default.</li></ul></li><li>Changed the [get project](https://launchdarkly.com/docs/api/projects/get-project) return value:<ul><li>The `environments` field is now expandable. This field is omitted by default.</li></ul></li></ul>     </td>     <td>2025-04-15</td>   </tr>   <tr>     <td>`20210729`</td>     <td>       <ul><li>Changed the [create approval request](https://launchdarkly.com/docs/api/approvals/post-approval-request) return value. It now returns HTTP Status Code `201` instead of `200`.</li><li> Changed the [get user](https://launchdarkly.com/docs/api/users/get-user) return value. It now returns a user record, not a user. </li><li>Added additional optional fields to environment, segments, flags, members, and segments, including the ability to create big segments. </li><li> Added default values for flag variations when new environments are created. </li><li>Added filtering and pagination for getting flags and members, including `limit`, `number`, `filter`, and `sort` query parameters. </li><li>Added endpoints for expiring user targets for flags and segments, scheduled changes, access tokens, Relay Proxy configuration, integrations and subscriptions, and approvals. </li></ul>     </td>     <td>2023-06-03</td>   </tr>   <tr>     <td>`20191212`</td>     <td>       <ul><li>[List feature flags](https://launchdarkly.com/docs/api/feature-flags/get-feature-flags) now defaults to sending summaries of feature flag configurations, equivalent to setting the query parameter `summary=true`. Summaries omit flag targeting rules and individual user targets from the payload. </li><li> Added endpoints for flags, flag status, projects, environments, audit logs, members, users, custom roles, segments, usage, streams, events, and data export. </li></ul>     </td>     <td>2022-07-29</td>   </tr>   <tr>     <td>`20160426`</td>     <td>       <ul><li>Initial versioning of API. Tokens created before versioning have their version set to this.</li></ul>     </td>     <td>2020-12-12</td>   </tr> </table>  To learn more about how EOL is determined, read LaunchDarkly's [End of Life (EOL) Policy](https://launchdarkly.com/policies/end-of-life-policy/). 
 *
 * The version of the OpenAPI document: 2.0
 * Contact: support@launchdarkly.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import AIConfig from '../model/AIConfig';
import AIConfigPatch from '../model/AIConfigPatch';
import AIConfigPost from '../model/AIConfigPost';
import AIConfigTargeting from '../model/AIConfigTargeting';
import AIConfigTargetingPatch from '../model/AIConfigTargetingPatch';
import AIConfigVariation from '../model/AIConfigVariation';
import AIConfigVariationPatch from '../model/AIConfigVariationPatch';
import AIConfigVariationPost from '../model/AIConfigVariationPost';
import AIConfigVariationsResponse from '../model/AIConfigVariationsResponse';
import AIConfigs from '../model/AIConfigs';
import AITool from '../model/AITool';
import AIToolPatch from '../model/AIToolPatch';
import AIToolPost from '../model/AIToolPost';
import AITools from '../model/AITools';
import AgentGraph from '../model/AgentGraph';
import AgentGraphPost from '../model/AgentGraphPost';
import AgentGraphs from '../model/AgentGraphs';
import Error from '../model/Error';
import MetricByVariation from '../model/MetricByVariation';
import Metrics from '../model/Metrics';
import ModelConfig from '../model/ModelConfig';
import ModelConfigPost from '../model/ModelConfigPost';
import RestrictedModelsRequest from '../model/RestrictedModelsRequest';
import RestrictedModelsResponse from '../model/RestrictedModelsResponse';

/**
* AIConfigsBeta service.
* @module api/AIConfigsBetaApi
* @version 20.0.0
*/
export default class AIConfigsBetaApi {

    /**
    * Constructs a new AIConfigsBetaApi. 
    * @alias module:api/AIConfigsBetaApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the deleteAIConfig operation.
     * @callback module:api/AIConfigsBetaApi~deleteAIConfigCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete AI Config
     * Delete an existing AI Config.
     * @param {module:model/String} lDAPIVersion Version of the endpoint.
     * @param {String} projectKey 
     * @param {String} configKey 
     * @param {module:api/AIConfigsBetaApi~deleteAIConfigCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteAIConfig(lDAPIVersion, projectKey, configKey, callback) {
      let postBody = null;
      // verify the required parameter 'lDAPIVersion' is set
      if (lDAPIVersion === undefined || lDAPIVersion === null) {
        throw new Error("Missing the required parameter 'lDAPIVersion' when calling deleteAIConfig");
      }
      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling deleteAIConfig");
      }
      // verify the required parameter 'configKey' is set
      if (configKey === undefined || configKey === null) {
        throw new Error("Missing the required parameter 'configKey' when calling deleteAIConfig");
      }

      let pathParams = {
        'projectKey': projectKey,
        'configKey': configKey
      };
      let queryParams = {
      };
      let headerParams = {
        'LD-API-Version': lDAPIVersion
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v2/projects/{projectKey}/ai-configs/{configKey}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteAIConfigVariation operation.
     * @callback module:api/AIConfigsBetaApi~deleteAIConfigVariationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete AI Config variation
     * Delete a specific variation of an AI Config by config key and variation key.
     * @param {module:model/String} lDAPIVersion Version of the endpoint.
     * @param {String} projectKey 
     * @param {String} configKey 
     * @param {String} variationKey 
     * @param {module:api/AIConfigsBetaApi~deleteAIConfigVariationCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteAIConfigVariation(lDAPIVersion, projectKey, configKey, variationKey, callback) {
      let postBody = null;
      // verify the required parameter 'lDAPIVersion' is set
      if (lDAPIVersion === undefined || lDAPIVersion === null) {
        throw new Error("Missing the required parameter 'lDAPIVersion' when calling deleteAIConfigVariation");
      }
      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling deleteAIConfigVariation");
      }
      // verify the required parameter 'configKey' is set
      if (configKey === undefined || configKey === null) {
        throw new Error("Missing the required parameter 'configKey' when calling deleteAIConfigVariation");
      }
      // verify the required parameter 'variationKey' is set
      if (variationKey === undefined || variationKey === null) {
        throw new Error("Missing the required parameter 'variationKey' when calling deleteAIConfigVariation");
      }

      let pathParams = {
        'projectKey': projectKey,
        'configKey': configKey,
        'variationKey': variationKey
      };
      let queryParams = {
      };
      let headerParams = {
        'LD-API-Version': lDAPIVersion
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v2/projects/{projectKey}/ai-configs/{configKey}/variations/{variationKey}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteAITool operation.
     * @callback module:api/AIConfigsBetaApi~deleteAIToolCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete AI tool
     * Delete an existing AI tool.
     * @param {module:model/String} lDAPIVersion Version of the endpoint.
     * @param {String} projectKey 
     * @param {String} toolKey 
     * @param {module:api/AIConfigsBetaApi~deleteAIToolCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteAITool(lDAPIVersion, projectKey, toolKey, callback) {
      let postBody = null;
      // verify the required parameter 'lDAPIVersion' is set
      if (lDAPIVersion === undefined || lDAPIVersion === null) {
        throw new Error("Missing the required parameter 'lDAPIVersion' when calling deleteAITool");
      }
      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling deleteAITool");
      }
      // verify the required parameter 'toolKey' is set
      if (toolKey === undefined || toolKey === null) {
        throw new Error("Missing the required parameter 'toolKey' when calling deleteAITool");
      }

      let pathParams = {
        'projectKey': projectKey,
        'toolKey': toolKey
      };
      let queryParams = {
      };
      let headerParams = {
        'LD-API-Version': lDAPIVersion
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v2/projects/{projectKey}/ai-tools/{toolKey}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteModelConfig operation.
     * @callback module:api/AIConfigsBetaApi~deleteModelConfigCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an AI model config
     * Delete an AI model config.
     * @param {module:model/String} lDAPIVersion Version of the endpoint.
     * @param {String} projectKey 
     * @param {String} modelConfigKey 
     * @param {module:api/AIConfigsBetaApi~deleteModelConfigCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteModelConfig(lDAPIVersion, projectKey, modelConfigKey, callback) {
      let postBody = null;
      // verify the required parameter 'lDAPIVersion' is set
      if (lDAPIVersion === undefined || lDAPIVersion === null) {
        throw new Error("Missing the required parameter 'lDAPIVersion' when calling deleteModelConfig");
      }
      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling deleteModelConfig");
      }
      // verify the required parameter 'modelConfigKey' is set
      if (modelConfigKey === undefined || modelConfigKey === null) {
        throw new Error("Missing the required parameter 'modelConfigKey' when calling deleteModelConfig");
      }

      let pathParams = {
        'projectKey': projectKey,
        'modelConfigKey': modelConfigKey
      };
      let queryParams = {
      };
      let headerParams = {
        'LD-API-Version': lDAPIVersion
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v2/projects/{projectKey}/ai-configs/model-configs/{modelConfigKey}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteRestrictedModels operation.
     * @callback module:api/AIConfigsBetaApi~deleteRestrictedModelsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove AI models from the restricted list
     * Remove AI models, by key, from the restricted list.
     * @param {module:model/String} lDAPIVersion Version of the endpoint.
     * @param {String} projectKey 
     * @param {module:model/RestrictedModelsRequest} restrictedModelsRequest List of AI model keys to remove from the restricted list
     * @param {module:api/AIConfigsBetaApi~deleteRestrictedModelsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteRestrictedModels(lDAPIVersion, projectKey, restrictedModelsRequest, callback) {
      let postBody = restrictedModelsRequest;
      // verify the required parameter 'lDAPIVersion' is set
      if (lDAPIVersion === undefined || lDAPIVersion === null) {
        throw new Error("Missing the required parameter 'lDAPIVersion' when calling deleteRestrictedModels");
      }
      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling deleteRestrictedModels");
      }
      // verify the required parameter 'restrictedModelsRequest' is set
      if (restrictedModelsRequest === undefined || restrictedModelsRequest === null) {
        throw new Error("Missing the required parameter 'restrictedModelsRequest' when calling deleteRestrictedModels");
      }

      let pathParams = {
        'projectKey': projectKey
      };
      let queryParams = {
      };
      let headerParams = {
        'LD-API-Version': lDAPIVersion
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v2/projects/{projectKey}/ai-configs/model-configs/restricted', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAIConfig operation.
     * @callback module:api/AIConfigsBetaApi~getAIConfigCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AIConfig} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get AI Config
     * Retrieve a specific AI Config by its key.
     * @param {module:model/String} lDAPIVersion Version of the endpoint.
     * @param {String} projectKey 
     * @param {String} configKey 
     * @param {module:api/AIConfigsBetaApi~getAIConfigCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AIConfig}
     */
    getAIConfig(lDAPIVersion, projectKey, configKey, callback) {
      let postBody = null;
      // verify the required parameter 'lDAPIVersion' is set
      if (lDAPIVersion === undefined || lDAPIVersion === null) {
        throw new Error("Missing the required parameter 'lDAPIVersion' when calling getAIConfig");
      }
      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling getAIConfig");
      }
      // verify the required parameter 'configKey' is set
      if (configKey === undefined || configKey === null) {
        throw new Error("Missing the required parameter 'configKey' when calling getAIConfig");
      }

      let pathParams = {
        'projectKey': projectKey,
        'configKey': configKey
      };
      let queryParams = {
      };
      let headerParams = {
        'LD-API-Version': lDAPIVersion
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = AIConfig;
      return this.apiClient.callApi(
        '/api/v2/projects/{projectKey}/ai-configs/{configKey}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAIConfigMetrics operation.
     * @callback module:api/AIConfigsBetaApi~getAIConfigMetricsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Metrics} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get AI Config metrics
     * Retrieve usage metrics for an AI Config by config key.
     * @param {module:model/String} lDAPIVersion Version of the endpoint.
     * @param {String} projectKey 
     * @param {String} configKey 
     * @param {Number} from The starting time, as milliseconds since epoch (inclusive).
     * @param {Number} to The ending time, as milliseconds since epoch (exclusive). May not be more than 100 days after `from`.
     * @param {String} env An environment key. Only metrics from this environment will be included.
     * @param {module:api/AIConfigsBetaApi~getAIConfigMetricsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Metrics}
     */
    getAIConfigMetrics(lDAPIVersion, projectKey, configKey, from, to, env, callback) {
      let postBody = null;
      // verify the required parameter 'lDAPIVersion' is set
      if (lDAPIVersion === undefined || lDAPIVersion === null) {
        throw new Error("Missing the required parameter 'lDAPIVersion' when calling getAIConfigMetrics");
      }
      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling getAIConfigMetrics");
      }
      // verify the required parameter 'configKey' is set
      if (configKey === undefined || configKey === null) {
        throw new Error("Missing the required parameter 'configKey' when calling getAIConfigMetrics");
      }
      // verify the required parameter 'from' is set
      if (from === undefined || from === null) {
        throw new Error("Missing the required parameter 'from' when calling getAIConfigMetrics");
      }
      // verify the required parameter 'to' is set
      if (to === undefined || to === null) {
        throw new Error("Missing the required parameter 'to' when calling getAIConfigMetrics");
      }
      // verify the required parameter 'env' is set
      if (env === undefined || env === null) {
        throw new Error("Missing the required parameter 'env' when calling getAIConfigMetrics");
      }

      let pathParams = {
        'projectKey': projectKey,
        'configKey': configKey
      };
      let queryParams = {
        'from': from,
        'to': to,
        'env': env
      };
      let headerParams = {
        'LD-API-Version': lDAPIVersion
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Metrics;
      return this.apiClient.callApi(
        '/api/v2/projects/{projectKey}/ai-configs/{configKey}/metrics', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAIConfigMetricsByVariation operation.
     * @callback module:api/AIConfigsBetaApi~getAIConfigMetricsByVariationCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/MetricByVariation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get AI Config metrics by variation
     * Retrieve usage metrics for an AI Config by config key, with results split by variation.
     * @param {module:model/String} lDAPIVersion Version of the endpoint.
     * @param {String} projectKey 
     * @param {String} configKey 
     * @param {Number} from The starting time, as milliseconds since epoch (inclusive).
     * @param {Number} to The ending time, as milliseconds since epoch (exclusive). May not be more than 100 days after `from`.
     * @param {String} env An environment key. Only metrics from this environment will be included.
     * @param {module:api/AIConfigsBetaApi~getAIConfigMetricsByVariationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/MetricByVariation>}
     */
    getAIConfigMetricsByVariation(lDAPIVersion, projectKey, configKey, from, to, env, callback) {
      let postBody = null;
      // verify the required parameter 'lDAPIVersion' is set
      if (lDAPIVersion === undefined || lDAPIVersion === null) {
        throw new Error("Missing the required parameter 'lDAPIVersion' when calling getAIConfigMetricsByVariation");
      }
      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling getAIConfigMetricsByVariation");
      }
      // verify the required parameter 'configKey' is set
      if (configKey === undefined || configKey === null) {
        throw new Error("Missing the required parameter 'configKey' when calling getAIConfigMetricsByVariation");
      }
      // verify the required parameter 'from' is set
      if (from === undefined || from === null) {
        throw new Error("Missing the required parameter 'from' when calling getAIConfigMetricsByVariation");
      }
      // verify the required parameter 'to' is set
      if (to === undefined || to === null) {
        throw new Error("Missing the required parameter 'to' when calling getAIConfigMetricsByVariation");
      }
      // verify the required parameter 'env' is set
      if (env === undefined || env === null) {
        throw new Error("Missing the required parameter 'env' when calling getAIConfigMetricsByVariation");
      }

      let pathParams = {
        'projectKey': projectKey,
        'configKey': configKey
      };
      let queryParams = {
        'from': from,
        'to': to,
        'env': env
      };
      let headerParams = {
        'LD-API-Version': lDAPIVersion
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [MetricByVariation];
      return this.apiClient.callApi(
        '/api/v2/projects/{projectKey}/ai-configs/{configKey}/metrics-by-variation', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAIConfigTargeting operation.
     * @callback module:api/AIConfigsBetaApi~getAIConfigTargetingCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AIConfigTargeting} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Show an AI Config's targeting
     * Retrieves a specific AI Config's targeting by its key
     * @param {module:model/String} lDAPIVersion Version of the endpoint.
     * @param {String} projectKey 
     * @param {String} configKey 
     * @param {module:api/AIConfigsBetaApi~getAIConfigTargetingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AIConfigTargeting}
     */
    getAIConfigTargeting(lDAPIVersion, projectKey, configKey, callback) {
      let postBody = null;
      // verify the required parameter 'lDAPIVersion' is set
      if (lDAPIVersion === undefined || lDAPIVersion === null) {
        throw new Error("Missing the required parameter 'lDAPIVersion' when calling getAIConfigTargeting");
      }
      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling getAIConfigTargeting");
      }
      // verify the required parameter 'configKey' is set
      if (configKey === undefined || configKey === null) {
        throw new Error("Missing the required parameter 'configKey' when calling getAIConfigTargeting");
      }

      let pathParams = {
        'projectKey': projectKey,
        'configKey': configKey
      };
      let queryParams = {
      };
      let headerParams = {
        'LD-API-Version': lDAPIVersion
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = AIConfigTargeting;
      return this.apiClient.callApi(
        '/api/v2/projects/{projectKey}/ai-configs/{configKey}/targeting', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAIConfigVariation operation.
     * @callback module:api/AIConfigsBetaApi~getAIConfigVariationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AIConfigVariationsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get AI Config variation
     * Get an AI Config variation by key. The response includes all variation versions for the given variation key.
     * @param {module:model/String} lDAPIVersion Version of the endpoint.
     * @param {String} projectKey 
     * @param {String} configKey 
     * @param {String} variationKey 
     * @param {module:api/AIConfigsBetaApi~getAIConfigVariationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AIConfigVariationsResponse}
     */
    getAIConfigVariation(lDAPIVersion, projectKey, configKey, variationKey, callback) {
      let postBody = null;
      // verify the required parameter 'lDAPIVersion' is set
      if (lDAPIVersion === undefined || lDAPIVersion === null) {
        throw new Error("Missing the required parameter 'lDAPIVersion' when calling getAIConfigVariation");
      }
      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling getAIConfigVariation");
      }
      // verify the required parameter 'configKey' is set
      if (configKey === undefined || configKey === null) {
        throw new Error("Missing the required parameter 'configKey' when calling getAIConfigVariation");
      }
      // verify the required parameter 'variationKey' is set
      if (variationKey === undefined || variationKey === null) {
        throw new Error("Missing the required parameter 'variationKey' when calling getAIConfigVariation");
      }

      let pathParams = {
        'projectKey': projectKey,
        'configKey': configKey,
        'variationKey': variationKey
      };
      let queryParams = {
      };
      let headerParams = {
        'LD-API-Version': lDAPIVersion
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = AIConfigVariationsResponse;
      return this.apiClient.callApi(
        '/api/v2/projects/{projectKey}/ai-configs/{configKey}/variations/{variationKey}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAIConfigs operation.
     * @callback module:api/AIConfigsBetaApi~getAIConfigsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AIConfigs} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List AI Configs
     * Get a list of all AI Configs in the given project.
     * @param {module:model/String} lDAPIVersion Version of the endpoint.
     * @param {String} projectKey 
     * @param {Object} opts Optional parameters
     * @param {String} [sort] A sort to apply to the list of AI Configs.
     * @param {Number} [limit] The number of AI Configs to return.
     * @param {Number} [offset] Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`.
     * @param {String} [filter] A filter to apply to the list of AI Configs.
     * @param {module:api/AIConfigsBetaApi~getAIConfigsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AIConfigs}
     */
    getAIConfigs(lDAPIVersion, projectKey, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'lDAPIVersion' is set
      if (lDAPIVersion === undefined || lDAPIVersion === null) {
        throw new Error("Missing the required parameter 'lDAPIVersion' when calling getAIConfigs");
      }
      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling getAIConfigs");
      }

      let pathParams = {
        'projectKey': projectKey
      };
      let queryParams = {
        'sort': opts['sort'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'filter': opts['filter']
      };
      let headerParams = {
        'LD-API-Version': lDAPIVersion
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = AIConfigs;
      return this.apiClient.callApi(
        '/api/v2/projects/{projectKey}/ai-configs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAITool operation.
     * @callback module:api/AIConfigsBetaApi~getAIToolCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AITool} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get AI tool
     * Retrieve a specific AI tool by its key.
     * @param {module:model/String} lDAPIVersion Version of the endpoint.
     * @param {String} projectKey 
     * @param {String} toolKey 
     * @param {module:api/AIConfigsBetaApi~getAIToolCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AITool}
     */
    getAITool(lDAPIVersion, projectKey, toolKey, callback) {
      let postBody = null;
      // verify the required parameter 'lDAPIVersion' is set
      if (lDAPIVersion === undefined || lDAPIVersion === null) {
        throw new Error("Missing the required parameter 'lDAPIVersion' when calling getAITool");
      }
      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling getAITool");
      }
      // verify the required parameter 'toolKey' is set
      if (toolKey === undefined || toolKey === null) {
        throw new Error("Missing the required parameter 'toolKey' when calling getAITool");
      }

      let pathParams = {
        'projectKey': projectKey,
        'toolKey': toolKey
      };
      let queryParams = {
      };
      let headerParams = {
        'LD-API-Version': lDAPIVersion
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = AITool;
      return this.apiClient.callApi(
        '/api/v2/projects/{projectKey}/ai-tools/{toolKey}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getModelConfig operation.
     * @callback module:api/AIConfigsBetaApi~getModelConfigCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelConfig} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get AI model config
     * Get an AI model config by key.
     * @param {module:model/String} lDAPIVersion Version of the endpoint.
     * @param {String} projectKey 
     * @param {String} modelConfigKey 
     * @param {module:api/AIConfigsBetaApi~getModelConfigCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelConfig}
     */
    getModelConfig(lDAPIVersion, projectKey, modelConfigKey, callback) {
      let postBody = null;
      // verify the required parameter 'lDAPIVersion' is set
      if (lDAPIVersion === undefined || lDAPIVersion === null) {
        throw new Error("Missing the required parameter 'lDAPIVersion' when calling getModelConfig");
      }
      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling getModelConfig");
      }
      // verify the required parameter 'modelConfigKey' is set
      if (modelConfigKey === undefined || modelConfigKey === null) {
        throw new Error("Missing the required parameter 'modelConfigKey' when calling getModelConfig");
      }

      let pathParams = {
        'projectKey': projectKey,
        'modelConfigKey': modelConfigKey
      };
      let queryParams = {
      };
      let headerParams = {
        'LD-API-Version': lDAPIVersion
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ModelConfig;
      return this.apiClient.callApi(
        '/api/v2/projects/{projectKey}/ai-configs/model-configs/{modelConfigKey}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listAIToolVersions operation.
     * @callback module:api/AIConfigsBetaApi~listAIToolVersionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AITools} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List AI tool versions
     * Get a list of all versions of an AI tool in the given project.
     * @param {module:model/String} lDAPIVersion Version of the endpoint.
     * @param {String} projectKey 
     * @param {String} toolKey 
     * @param {Object} opts Optional parameters
     * @param {String} [sort] A sort to apply to the list of AI Configs.
     * @param {Number} [limit] The number of AI Configs to return.
     * @param {Number} [offset] Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`.
     * @param {module:api/AIConfigsBetaApi~listAIToolVersionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AITools}
     */
    listAIToolVersions(lDAPIVersion, projectKey, toolKey, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'lDAPIVersion' is set
      if (lDAPIVersion === undefined || lDAPIVersion === null) {
        throw new Error("Missing the required parameter 'lDAPIVersion' when calling listAIToolVersions");
      }
      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling listAIToolVersions");
      }
      // verify the required parameter 'toolKey' is set
      if (toolKey === undefined || toolKey === null) {
        throw new Error("Missing the required parameter 'toolKey' when calling listAIToolVersions");
      }

      let pathParams = {
        'projectKey': projectKey,
        'toolKey': toolKey
      };
      let queryParams = {
        'sort': opts['sort'],
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      let headerParams = {
        'LD-API-Version': lDAPIVersion
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = AITools;
      return this.apiClient.callApi(
        '/api/v2/projects/{projectKey}/ai-tools/{toolKey}/versions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listAITools operation.
     * @callback module:api/AIConfigsBetaApi~listAIToolsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AITools} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List AI tools
     * Get a list of all AI tools in the given project.
     * @param {module:model/String} lDAPIVersion Version of the endpoint.
     * @param {String} projectKey 
     * @param {Object} opts Optional parameters
     * @param {String} [sort] A sort to apply to the list of AI Configs.
     * @param {Number} [limit] The number of AI Configs to return.
     * @param {Number} [offset] Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`.
     * @param {String} [filter] A filter to apply to the list of AI Configs.
     * @param {module:api/AIConfigsBetaApi~listAIToolsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AITools}
     */
    listAITools(lDAPIVersion, projectKey, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'lDAPIVersion' is set
      if (lDAPIVersion === undefined || lDAPIVersion === null) {
        throw new Error("Missing the required parameter 'lDAPIVersion' when calling listAITools");
      }
      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling listAITools");
      }

      let pathParams = {
        'projectKey': projectKey
      };
      let queryParams = {
        'sort': opts['sort'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'filter': opts['filter']
      };
      let headerParams = {
        'LD-API-Version': lDAPIVersion
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = AITools;
      return this.apiClient.callApi(
        '/api/v2/projects/{projectKey}/ai-tools', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listAgentGraphs operation.
     * @callback module:api/AIConfigsBetaApi~listAgentGraphsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AgentGraphs} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List agent graphs
     * Get a list of all agent graphs in the given project. Returns metadata only, without edge data.
     * @param {module:model/String} lDAPIVersion Version of the endpoint.
     * @param {String} projectKey 
     * @param {Object} opts Optional parameters
     * @param {Number} [limit] The number of AI Configs to return.
     * @param {Number} [offset] Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`.
     * @param {module:api/AIConfigsBetaApi~listAgentGraphsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AgentGraphs}
     */
    listAgentGraphs(lDAPIVersion, projectKey, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'lDAPIVersion' is set
      if (lDAPIVersion === undefined || lDAPIVersion === null) {
        throw new Error("Missing the required parameter 'lDAPIVersion' when calling listAgentGraphs");
      }
      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling listAgentGraphs");
      }

      let pathParams = {
        'projectKey': projectKey
      };
      let queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      let headerParams = {
        'LD-API-Version': lDAPIVersion
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = AgentGraphs;
      return this.apiClient.callApi(
        '/api/v2/projects/{projectKey}/agent-graphs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listModelConfigs operation.
     * @callback module:api/AIConfigsBetaApi~listModelConfigsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelConfig>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List AI model configs
     * Get all AI model configs for a project.
     * @param {module:model/String} lDAPIVersion Version of the endpoint.
     * @param {String} projectKey 
     * @param {Object} opts Optional parameters
     * @param {Boolean} [restricted] Whether to return only restricted models
     * @param {module:api/AIConfigsBetaApi~listModelConfigsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelConfig>}
     */
    listModelConfigs(lDAPIVersion, projectKey, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'lDAPIVersion' is set
      if (lDAPIVersion === undefined || lDAPIVersion === null) {
        throw new Error("Missing the required parameter 'lDAPIVersion' when calling listModelConfigs");
      }
      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling listModelConfigs");
      }

      let pathParams = {
        'projectKey': projectKey
      };
      let queryParams = {
        'restricted': opts['restricted']
      };
      let headerParams = {
        'LD-API-Version': lDAPIVersion
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [ModelConfig];
      return this.apiClient.callApi(
        '/api/v2/projects/{projectKey}/ai-configs/model-configs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the patchAIConfig operation.
     * @callback module:api/AIConfigsBetaApi~patchAIConfigCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AIConfig} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update AI Config
     * Edit an existing AI Config.  The request body must be a JSON object of the fields to update. The values you include replace the existing values for the fields.  Here's an example:   ```     {       \"description\": \"Example updated description\",       \"tags\": [\"new-tag\"]     }   ``` 
     * @param {module:model/String} lDAPIVersion Version of the endpoint.
     * @param {String} projectKey 
     * @param {String} configKey 
     * @param {Object} opts Optional parameters
     * @param {module:model/AIConfigPatch} [aIConfigPatch] AI Config object to update
     * @param {module:api/AIConfigsBetaApi~patchAIConfigCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AIConfig}
     */
    patchAIConfig(lDAPIVersion, projectKey, configKey, opts, callback) {
      opts = opts || {};
      let postBody = opts['aIConfigPatch'];
      // verify the required parameter 'lDAPIVersion' is set
      if (lDAPIVersion === undefined || lDAPIVersion === null) {
        throw new Error("Missing the required parameter 'lDAPIVersion' when calling patchAIConfig");
      }
      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling patchAIConfig");
      }
      // verify the required parameter 'configKey' is set
      if (configKey === undefined || configKey === null) {
        throw new Error("Missing the required parameter 'configKey' when calling patchAIConfig");
      }

      let pathParams = {
        'projectKey': projectKey,
        'configKey': configKey
      };
      let queryParams = {
      };
      let headerParams = {
        'LD-API-Version': lDAPIVersion
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AIConfig;
      return this.apiClient.callApi(
        '/api/v2/projects/{projectKey}/ai-configs/{configKey}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the patchAIConfigTargeting operation.
     * @callback module:api/AIConfigsBetaApi~patchAIConfigTargetingCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AIConfigTargeting} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update AI Config targeting
     * Perform a partial update to an AI Config's targeting. The request body must be a valid semantic patch.  ### Using semantic patches on an AI Config  To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).  The body of a semantic patch request for updating an AI Config's targeting takes the following properties:  * `comment` (string): (Optional) A description of the update. * `environmentKey` (string): The key of the LaunchDarkly environment. * `instructions` (array): (Required) A list of actions the update should perform. Each action in the list must be an object with a `kind` property that indicates the instruction. If the action requires parameters, you must include those parameters as additional fields in the object. The body of a single semantic patch can contain many different instructions.  ### Instructions  Semantic patch requests support the following `kind` instructions for updating AI Configs.  <details> <summary>Click to expand instructions for <strong>working with targeting and variations</strong> for AI Configs</summary>  #### addClauses  Adds the given clauses to the rule indicated by `ruleId`.  ##### Parameters  - `ruleId`: ID of a rule in the AI Config. - `clauses`: Array of clause objects, with `contextKind` (string), `attribute` (string), `op` (string), `negate` (boolean), and `values` (array of strings, numbers, or dates) properties. The `contextKind`, `attribute`, and `values` are case sensitive. The `op` must be lower-case.  Here's an example:  ```json {   \"environmentKey\": \"environment-key-123abc\",   \"instructions\": [{     \"kind\": \"addClauses\",     \"ruleId\": \"a902ef4a-2faf-4eaf-88e1-ecc356708a29\",     \"clauses\": [{       \"contextKind\": \"user\",       \"attribute\": \"country\",       \"op\": \"in\",       \"negate\": false,       \"values\": [\"USA\", \"Canada\"]     }]   }] } ```  #### addRule  Adds a new targeting rule to the AI Config. The rule may contain `clauses` and serve the variation that `variationId` indicates, or serve a percentage rollout that `rolloutWeights`, `rolloutBucketBy`, and `rolloutContextKind` indicate.  If you set `beforeRuleId`, this adds the new rule before the indicated rule. Otherwise, adds the new rule to the end of the list.  ##### Parameters  - `clauses`: Array of clause objects, with `contextKind` (string), `attribute` (string), `op` (string), `negate` (boolean), and `values` (array of strings, numbers, or dates) properties. The `contextKind`, `attribute`, and `values` are case sensitive. The `op` must be lower-case. - `beforeRuleId`: (Optional) ID of a rule. - Either - `variationId`: ID of a variation.  or  - `rolloutWeights`: (Optional) Map of `variationId` to weight, in thousandths of a percent (0-100000). - `rolloutBucketBy`: (Optional) Context attribute available in the specified `rolloutContextKind`. - `rolloutContextKind`: (Optional) Context kind, defaults to `user`  Here's an example that uses a `variationId`:  ```json { \"environmentKey\": \"environment-key-123abc\", \"instructions\": [{   \"kind\": \"addRule\",   \"variationId\": \"2f43f67c-3e4e-4945-a18a-26559378ca00\",   \"clauses\": [{     \"contextKind\": \"organization\",     \"attribute\": \"located_in\",     \"op\": \"in\",     \"negate\": false,     \"values\": [\"Sweden\", \"Norway\"]   }] }] } ```  Here's an example that uses a percentage rollout:  ```json { \"environmentKey\": \"environment-key-123abc\", \"instructions\": [{   \"kind\": \"addRule\",   \"clauses\": [{     \"contextKind\": \"organization\",     \"attribute\": \"located_in\",     \"op\": \"in\",     \"negate\": false,     \"values\": [\"Sweden\", \"Norway\"]   }],   \"rolloutContextKind\": \"organization\",   \"rolloutWeights\": {     \"2f43f67c-3e4e-4945-a18a-26559378ca00\": 15000, // serve 15% this variation     \"e5830889-1ec5-4b0c-9cc9-c48790090c43\": 85000  // serve 85% this variation   } }] } ```  #### addTargets  Adds context keys to the individual context targets for the context kind that `contextKind` specifies and the variation that `variationId` specifies. Returns an error if this causes the AI Config to target the same context key in multiple variations.  ##### Parameters  - `values`: List of context keys. - `contextKind`: (Optional) Context kind to target, defaults to `user` - `variationId`: ID of a variation.  Here's an example:  ```json { \"environmentKey\": \"environment-key-123abc\", \"instructions\": [{   \"kind\": \"addTargets\",   \"values\": [\"context-key-123abc\", \"context-key-456def\"],   \"variationId\": \"2f43f67c-3e4e-4945-a18a-26559378ca00\" }] } ```  #### addValuesToClause  Adds `values` to the values of the clause that `ruleId` and `clauseId` indicate. Does not update the context kind, attribute, or operator.  ##### Parameters  - `ruleId`: ID of a rule in the AI Config. - `clauseId`: ID of a clause in that rule. - `values`: Array of strings, case sensitive.  Here's an example:  ```json { \"environmentKey\": \"environment-key-123abc\", \"instructions\": [{   \"kind\": \"addValuesToClause\",   \"ruleId\": \"a902ef4a-2faf-4eaf-88e1-ecc356708a29\",   \"clauseId\": \"10a58772-3121-400f-846b-b8a04e8944ed\",   \"values\": [\"beta_testers\"] }] } ```  #### clearTargets  Removes all individual targets from the variation that `variationId` specifies. This includes both user and non-user targets.  ##### Parameters  - `variationId`: ID of a variation.  Here's an example:  ```json { \"environmentKey\": \"environment-key-123abc\", \"instructions\": [ { \"kind\": \"clearTargets\", \"variationId\": \"2f43f67c-3e4e-4945-a18a-26559378ca00\" } ] } ```  #### removeClauses  Removes the clauses specified by `clauseIds` from the rule indicated by `ruleId`.  ##### Parameters  - `ruleId`: ID of a rule. - `clauseIds`: Array of IDs of clauses in the rule.  Here's an example:  ```json { \"environmentKey\": \"environment-key-123abc\", \"instructions\": [{   \"kind\": \"removeClauses\",   \"ruleId\": \"a902ef4a-2faf-4eaf-88e1-ecc356708a29\",   \"clauseIds\": [\"10a58772-3121-400f-846b-b8a04e8944ed\", \"36a461dc-235e-4b08-97b9-73ce9365873e\"] }] } ```  #### removeRule  Removes the targeting rule specified by `ruleId`. Does nothing if the rule does not exist.  ##### Parameters  - `ruleId`: ID of a rule.  Here's an example:  ```json { \"environmentKey\": \"environment-key-123abc\", \"instructions\": [ { \"kind\": \"removeRule\", \"ruleId\": \"a902ef4a-2faf-4eaf-88e1-ecc356708a29\" } ] } ```  #### removeTargets  Removes context keys from the individual context targets for the context kind that `contextKind` specifies and the variation that `variationId` specifies. Does nothing if the flag does not target the context keys.  ##### Parameters  - `values`: List of context keys. - `contextKind`: (Optional) Context kind to target, defaults to `user` - `variationId`: ID of a variation.  Here's an example:  ```json { \"environmentKey\": \"environment-key-123abc\", \"instructions\": [{   \"kind\": \"removeTargets\",   \"values\": [\"context-key-123abc\", \"context-key-456def\"],   \"variationId\": \"2f43f67c-3e4e-4945-a18a-26559378ca00\" }] } ```  #### removeValuesFromClause  Removes `values` from the values of the clause indicated by `ruleId` and `clauseId`. Does not update the context kind, attribute, or operator.  ##### Parameters  - `ruleId`: ID of a rule. - `clauseId`: ID of a clause in that rule. - `values`: Array of strings, case sensitive.  Here's an example:  ```json { \"environmentKey\": \"environment-key-123abc\", \"instructions\": [{   \"kind\": \"removeValuesFromClause\",   \"ruleId\": \"a902ef4a-2faf-4eaf-88e1-ecc356708a29\",   \"clauseId\": \"10a58772-3121-400f-846b-b8a04e8944ed\",   \"values\": [\"beta_testers\"] }] } ```  #### reorderRules  Rearranges the rules to match the order given in `ruleIds`. Returns an error if `ruleIds` does not match the current set of rules on the AI Config.  ##### Parameters  - `ruleIds`: Array of IDs of all rules.  Here's an example:  ```json { \"environmentKey\": \"environment-key-123abc\", \"instructions\": [{   \"kind\": \"reorderRules\",   \"ruleIds\": [\"a902ef4a-2faf-4eaf-88e1-ecc356708a29\", \"63c238d1-835d-435e-8f21-c8d5e40b2a3d\"] }] } ```  #### replaceRules  Removes all targeting rules for the AI Config and replaces them with the list you provide.  ##### Parameters  - `rules`: A list of rules.  Here's an example:  ```json { \"environmentKey\": \"environment-key-123abc\", \"instructions\": [   {     \"kind\": \"replaceRules\",     \"rules\": [       {         \"variationId\": \"2f43f67c-3e4e-4945-a18a-26559378ca00\",         \"description\": \"My new rule\",         \"clauses\": [           {             \"contextKind\": \"user\",             \"attribute\": \"segmentMatch\",             \"op\": \"segmentMatch\",             \"values\": [\"test\"]           }         ]       }     ]   } ] } ```  #### replaceTargets  Removes all existing targeting and replaces it with the list of targets you provide.  ##### Parameters  - `targets`: A list of context targeting. Each item in the list includes an optional `contextKind` that defaults to `user`, a required `variationId`, and a required list of `values`.  Here's an example:  ```json { \"environmentKey\": \"environment-key-123abc\", \"instructions\": [   {     \"kind\": \"replaceTargets\",     \"targets\": [       {         \"contextKind\": \"user\",         \"variationId\": \"2f43f67c-3e4e-4945-a18a-26559378ca00\",         \"values\": [\"user-key-123abc\"]       },       {         \"contextKind\": \"device\",         \"variationId\": \"e5830889-1ec5-4b0c-9cc9-c48790090c43\",         \"values\": [\"device-key-456def\"]       }     ]   } ] } ```  #### updateClause  Replaces the clause indicated by `ruleId` and `clauseId` with `clause`.  ##### Parameters  - `ruleId`: ID of a rule. - `clauseId`: ID of a clause in that rule. - `clause`: New `clause` object, with `contextKind` (string), `attribute` (string), `op` (string), `negate` (boolean), and `values` (array of strings, numbers, or dates) properties. The `contextKind`, `attribute`, and `values` are case sensitive. The `op` must be lower-case.  Here's an example:  ```json { \"environmentKey\": \"environment-key-123abc\", \"instructions\": [{   \"kind\": \"updateClause\",   \"ruleId\": \"a902ef4a-2faf-4eaf-88e1-ecc356708a29\",   \"clauseId\": \"10c7462a-2062-45ba-a8bb-dfb3de0f8af5\",   \"clause\": {     \"contextKind\": \"user\",     \"attribute\": \"country\",     \"op\": \"in\",     \"negate\": false,     \"values\": [\"Mexico\", \"Canada\"]   } }] } ```  #### updateDefaultVariation  Updates the default on or off variation of the AI Config.  ##### Parameters  - `onVariationValue`: (Optional) The value of the variation of the new on variation. - `offVariationValue`: (Optional) The value of the variation of the new off variation  Here's an example:  ```json { \"instructions\": [ { \"kind\": \"updateDefaultVariation\", \"OnVariationValue\": true, \"OffVariationValue\": false } ] } ```  #### updateFallthroughVariationOrRollout  Updates the default or \"fallthrough\" rule for the AI Config, which the AI Config serves when a context matches none of the targeting rules. The rule can serve either the variation that `variationId` indicates, or a percentage rollout that `rolloutWeights` and `rolloutBucketBy` indicate.  ##### Parameters  - `variationId`: ID of a variation.  or  - `rolloutWeights`: Map of `variationId` to weight, in thousandths of a percent (0-100000). - `rolloutBucketBy`: (Optional) Context attribute available in the specified `rolloutContextKind`. - `rolloutContextKind`: (Optional) Context kind, defaults to `user`  Here's an example that uses a `variationId`:  ```json { \"environmentKey\": \"environment-key-123abc\", \"instructions\": [{   \"kind\": \"updateFallthroughVariationOrRollout\",   \"variationId\": \"2f43f67c-3e4e-4945-a18a-26559378ca00\" }] } ```  Here's an example that uses a percentage rollout:  ```json { \"environmentKey\": \"environment-key-123abc\", \"instructions\": [{   \"kind\": \"updateFallthroughVariationOrRollout\",   \"rolloutContextKind\": \"user\",   \"rolloutWeights\": {     \"2f43f67c-3e4e-4945-a18a-26559378ca00\": 15000, // serve 15% this variation     \"e5830889-1ec5-4b0c-9cc9-c48790090c43\": 85000  // serve 85% this variation   } }] } ```  #### updateOffVariation  Updates the default off variation to `variationId`. The AI Config serves the default off variation when the AI Config's targeting is **Off**.  ##### Parameters  - `variationId`: ID of a variation.  Here's an example:  ```json { \"environmentKey\": \"environment-key-123abc\", \"instructions\": [ { \"kind\": \"updateOffVariation\", \"variationId\": \"2f43f67c-3e4e-4945-a18a-26559378ca00\" } ] } ```  #### updateRuleDescription  Updates the description of the targeting rule.  ##### Parameters  - `description`: The new human-readable description for this rule. - `ruleId`: The ID of the rule. You can retrieve this by making a GET request for the AI Config.  Here's an example:  ```json { \"environmentKey\": \"environment-key-123abc\", \"instructions\": [{   \"kind\": \"updateRuleDescription\",   \"description\": \"New rule description\",   \"ruleId\": \"a902ef4a-2faf-4eaf-88e1-ecc356708a29\" }] } ```  #### updateRuleTrackEvents  Updates whether or not LaunchDarkly tracks events for the AI Config associated with this rule.  ##### Parameters  - `ruleId`: The ID of the rule. You can retrieve this by making a GET request for the AI Config. - `trackEvents`: Whether or not events are tracked.  Here's an example:  ```json { \"environmentKey\": \"environment-key-123abc\", \"instructions\": [{   \"kind\": \"updateRuleTrackEvents\",   \"ruleId\": \"a902ef4a-2faf-4eaf-88e1-ecc356708a29\",   \"trackEvents\": true }] } ```  #### updateRuleVariationOrRollout  Updates what `ruleId` serves when its clauses evaluate to true. The rule can serve either the variation that `variationId` indicates, or a percent rollout that `rolloutWeights` and `rolloutBucketBy` indicate.  ##### Parameters  - `ruleId`: ID of a rule. - `variationId`: ID of a variation.  or  - `rolloutWeights`: Map of `variationId` to weight, in thousandths of a percent (0-100000). - `rolloutBucketBy`: (Optional) Context attribute available in the specified `rolloutContextKind`. - `rolloutContextKind`: (Optional) Context kind, defaults to `user`  Here's an example:  ```json { \"environmentKey\": \"environment-key-123abc\", \"instructions\": [{   \"kind\": \"updateRuleVariationOrRollout\",   \"ruleId\": \"a902ef4a-2faf-4eaf-88e1-ecc356708a29\",   \"variationId\": \"2f43f67c-3e4e-4945-a18a-26559378ca00\" }] } ```  #### updateTrackEvents  Updates whether or not LaunchDarkly tracks events for the AI Config, for all rules.  ##### Parameters  - `trackEvents`: Whether or not events are tracked.  Here's an example:  ```json { \"environmentKey\": \"environment-key-123abc\", \"instructions\": [ { \"kind\": \"updateTrackEvents\", \"trackEvents\": true } ] } ```  #### updateTrackEventsFallthrough  Updates whether or not LaunchDarkly tracks events for the AI Config, for the default rule.  ##### Parameters  - `trackEvents`: Whether or not events are tracked.  Here's an example:  ```json { \"environmentKey\": \"environment-key-123abc\", \"instructions\": [ { \"kind\": \"updateTrackEventsFallthrough\", \"trackEvents\": true } ] } ``` </details> 
     * @param {module:model/String} lDAPIVersion Version of the endpoint.
     * @param {String} projectKey 
     * @param {String} configKey 
     * @param {Object} opts Optional parameters
     * @param {module:model/AIConfigTargetingPatch} [aIConfigTargetingPatch] AI Config targeting semantic patch instructions
     * @param {module:api/AIConfigsBetaApi~patchAIConfigTargetingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AIConfigTargeting}
     */
    patchAIConfigTargeting(lDAPIVersion, projectKey, configKey, opts, callback) {
      opts = opts || {};
      let postBody = opts['aIConfigTargetingPatch'];
      // verify the required parameter 'lDAPIVersion' is set
      if (lDAPIVersion === undefined || lDAPIVersion === null) {
        throw new Error("Missing the required parameter 'lDAPIVersion' when calling patchAIConfigTargeting");
      }
      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling patchAIConfigTargeting");
      }
      // verify the required parameter 'configKey' is set
      if (configKey === undefined || configKey === null) {
        throw new Error("Missing the required parameter 'configKey' when calling patchAIConfigTargeting");
      }

      let pathParams = {
        'projectKey': projectKey,
        'configKey': configKey
      };
      let queryParams = {
      };
      let headerParams = {
        'LD-API-Version': lDAPIVersion
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AIConfigTargeting;
      return this.apiClient.callApi(
        '/api/v2/projects/{projectKey}/ai-configs/{configKey}/targeting', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the patchAIConfigVariation operation.
     * @callback module:api/AIConfigsBetaApi~patchAIConfigVariationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AIConfigVariation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update AI Config variation
     * Edit an existing variation of an AI Config. This creates a new version of the variation.  The request body must be a JSON object of the fields to update. The values you include replace the existing values for the fields.  Here's an example: ```   {     \"messages\": [       {         \"role\": \"system\",         \"content\": \"The new message\"       }     ]   } ``` 
     * @param {module:model/String} lDAPIVersion Version of the endpoint.
     * @param {String} projectKey 
     * @param {String} configKey 
     * @param {String} variationKey 
     * @param {Object} opts Optional parameters
     * @param {module:model/AIConfigVariationPatch} [aIConfigVariationPatch] AI Config variation object to update
     * @param {module:api/AIConfigsBetaApi~patchAIConfigVariationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AIConfigVariation}
     */
    patchAIConfigVariation(lDAPIVersion, projectKey, configKey, variationKey, opts, callback) {
      opts = opts || {};
      let postBody = opts['aIConfigVariationPatch'];
      // verify the required parameter 'lDAPIVersion' is set
      if (lDAPIVersion === undefined || lDAPIVersion === null) {
        throw new Error("Missing the required parameter 'lDAPIVersion' when calling patchAIConfigVariation");
      }
      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling patchAIConfigVariation");
      }
      // verify the required parameter 'configKey' is set
      if (configKey === undefined || configKey === null) {
        throw new Error("Missing the required parameter 'configKey' when calling patchAIConfigVariation");
      }
      // verify the required parameter 'variationKey' is set
      if (variationKey === undefined || variationKey === null) {
        throw new Error("Missing the required parameter 'variationKey' when calling patchAIConfigVariation");
      }

      let pathParams = {
        'projectKey': projectKey,
        'configKey': configKey,
        'variationKey': variationKey
      };
      let queryParams = {
      };
      let headerParams = {
        'LD-API-Version': lDAPIVersion
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AIConfigVariation;
      return this.apiClient.callApi(
        '/api/v2/projects/{projectKey}/ai-configs/{configKey}/variations/{variationKey}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the patchAITool operation.
     * @callback module:api/AIConfigsBetaApi~patchAIToolCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AITool} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update AI tool
     * Edit an existing AI tool.
     * @param {module:model/String} lDAPIVersion Version of the endpoint.
     * @param {String} projectKey 
     * @param {String} toolKey 
     * @param {Object} opts Optional parameters
     * @param {module:model/AIToolPatch} [aIToolPatch] AI tool object to update
     * @param {module:api/AIConfigsBetaApi~patchAIToolCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AITool}
     */
    patchAITool(lDAPIVersion, projectKey, toolKey, opts, callback) {
      opts = opts || {};
      let postBody = opts['aIToolPatch'];
      // verify the required parameter 'lDAPIVersion' is set
      if (lDAPIVersion === undefined || lDAPIVersion === null) {
        throw new Error("Missing the required parameter 'lDAPIVersion' when calling patchAITool");
      }
      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling patchAITool");
      }
      // verify the required parameter 'toolKey' is set
      if (toolKey === undefined || toolKey === null) {
        throw new Error("Missing the required parameter 'toolKey' when calling patchAITool");
      }

      let pathParams = {
        'projectKey': projectKey,
        'toolKey': toolKey
      };
      let queryParams = {
      };
      let headerParams = {
        'LD-API-Version': lDAPIVersion
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AITool;
      return this.apiClient.callApi(
        '/api/v2/projects/{projectKey}/ai-tools/{toolKey}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postAIConfig operation.
     * @callback module:api/AIConfigsBetaApi~postAIConfigCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AIConfig} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create new AI Config
     * Create a new AI Config within the given project.
     * @param {module:model/String} lDAPIVersion Version of the endpoint.
     * @param {String} projectKey 
     * @param {module:model/AIConfigPost} aIConfigPost AI Config object to create
     * @param {module:api/AIConfigsBetaApi~postAIConfigCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AIConfig}
     */
    postAIConfig(lDAPIVersion, projectKey, aIConfigPost, callback) {
      let postBody = aIConfigPost;
      // verify the required parameter 'lDAPIVersion' is set
      if (lDAPIVersion === undefined || lDAPIVersion === null) {
        throw new Error("Missing the required parameter 'lDAPIVersion' when calling postAIConfig");
      }
      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling postAIConfig");
      }
      // verify the required parameter 'aIConfigPost' is set
      if (aIConfigPost === undefined || aIConfigPost === null) {
        throw new Error("Missing the required parameter 'aIConfigPost' when calling postAIConfig");
      }

      let pathParams = {
        'projectKey': projectKey
      };
      let queryParams = {
      };
      let headerParams = {
        'LD-API-Version': lDAPIVersion
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AIConfig;
      return this.apiClient.callApi(
        '/api/v2/projects/{projectKey}/ai-configs', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postAIConfigVariation operation.
     * @callback module:api/AIConfigsBetaApi~postAIConfigVariationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AIConfigVariation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create AI Config variation
     * Create a new variation for a given AI Config.  The <code>model</code> in the request body requires a <code>modelName</code> and <code>parameters</code>, for example:  ```   \"model\": {     \"modelName\": \"claude-3-opus-20240229\",     \"parameters\": {       \"max_tokens\": 1024     }   } ``` 
     * @param {module:model/String} lDAPIVersion Version of the endpoint.
     * @param {String} projectKey 
     * @param {String} configKey 
     * @param {module:model/AIConfigVariationPost} aIConfigVariationPost AI Config variation object to create
     * @param {module:api/AIConfigsBetaApi~postAIConfigVariationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AIConfigVariation}
     */
    postAIConfigVariation(lDAPIVersion, projectKey, configKey, aIConfigVariationPost, callback) {
      let postBody = aIConfigVariationPost;
      // verify the required parameter 'lDAPIVersion' is set
      if (lDAPIVersion === undefined || lDAPIVersion === null) {
        throw new Error("Missing the required parameter 'lDAPIVersion' when calling postAIConfigVariation");
      }
      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling postAIConfigVariation");
      }
      // verify the required parameter 'configKey' is set
      if (configKey === undefined || configKey === null) {
        throw new Error("Missing the required parameter 'configKey' when calling postAIConfigVariation");
      }
      // verify the required parameter 'aIConfigVariationPost' is set
      if (aIConfigVariationPost === undefined || aIConfigVariationPost === null) {
        throw new Error("Missing the required parameter 'aIConfigVariationPost' when calling postAIConfigVariation");
      }

      let pathParams = {
        'projectKey': projectKey,
        'configKey': configKey
      };
      let queryParams = {
      };
      let headerParams = {
        'LD-API-Version': lDAPIVersion
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AIConfigVariation;
      return this.apiClient.callApi(
        '/api/v2/projects/{projectKey}/ai-configs/{configKey}/variations', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postAITool operation.
     * @callback module:api/AIConfigsBetaApi~postAIToolCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AITool} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an AI tool
     * Create an AI tool
     * @param {module:model/String} lDAPIVersion Version of the endpoint.
     * @param {String} projectKey 
     * @param {module:model/AIToolPost} aIToolPost AI tool object to create
     * @param {module:api/AIConfigsBetaApi~postAIToolCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AITool}
     */
    postAITool(lDAPIVersion, projectKey, aIToolPost, callback) {
      let postBody = aIToolPost;
      // verify the required parameter 'lDAPIVersion' is set
      if (lDAPIVersion === undefined || lDAPIVersion === null) {
        throw new Error("Missing the required parameter 'lDAPIVersion' when calling postAITool");
      }
      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling postAITool");
      }
      // verify the required parameter 'aIToolPost' is set
      if (aIToolPost === undefined || aIToolPost === null) {
        throw new Error("Missing the required parameter 'aIToolPost' when calling postAITool");
      }

      let pathParams = {
        'projectKey': projectKey
      };
      let queryParams = {
      };
      let headerParams = {
        'LD-API-Version': lDAPIVersion
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AITool;
      return this.apiClient.callApi(
        '/api/v2/projects/{projectKey}/ai-tools', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postAgentGraph operation.
     * @callback module:api/AIConfigsBetaApi~postAgentGraphCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AgentGraph} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create new agent graph
     * Create a new agent graph within the given project.
     * @param {module:model/String} lDAPIVersion Version of the endpoint.
     * @param {String} projectKey 
     * @param {module:model/AgentGraphPost} agentGraphPost Agent graph object to create
     * @param {module:api/AIConfigsBetaApi~postAgentGraphCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AgentGraph}
     */
    postAgentGraph(lDAPIVersion, projectKey, agentGraphPost, callback) {
      let postBody = agentGraphPost;
      // verify the required parameter 'lDAPIVersion' is set
      if (lDAPIVersion === undefined || lDAPIVersion === null) {
        throw new Error("Missing the required parameter 'lDAPIVersion' when calling postAgentGraph");
      }
      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling postAgentGraph");
      }
      // verify the required parameter 'agentGraphPost' is set
      if (agentGraphPost === undefined || agentGraphPost === null) {
        throw new Error("Missing the required parameter 'agentGraphPost' when calling postAgentGraph");
      }

      let pathParams = {
        'projectKey': projectKey
      };
      let queryParams = {
      };
      let headerParams = {
        'LD-API-Version': lDAPIVersion
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AgentGraph;
      return this.apiClient.callApi(
        '/api/v2/projects/{projectKey}/agent-graphs', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postModelConfig operation.
     * @callback module:api/AIConfigsBetaApi~postModelConfigCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelConfig} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an AI model config
     * Create an AI model config. You can use this in any variation for any AI Config in your project.
     * @param {module:model/String} lDAPIVersion Version of the endpoint.
     * @param {String} projectKey 
     * @param {module:model/ModelConfigPost} modelConfigPost AI model config object to create
     * @param {module:api/AIConfigsBetaApi~postModelConfigCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelConfig}
     */
    postModelConfig(lDAPIVersion, projectKey, modelConfigPost, callback) {
      let postBody = modelConfigPost;
      // verify the required parameter 'lDAPIVersion' is set
      if (lDAPIVersion === undefined || lDAPIVersion === null) {
        throw new Error("Missing the required parameter 'lDAPIVersion' when calling postModelConfig");
      }
      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling postModelConfig");
      }
      // verify the required parameter 'modelConfigPost' is set
      if (modelConfigPost === undefined || modelConfigPost === null) {
        throw new Error("Missing the required parameter 'modelConfigPost' when calling postModelConfig");
      }

      let pathParams = {
        'projectKey': projectKey
      };
      let queryParams = {
      };
      let headerParams = {
        'LD-API-Version': lDAPIVersion
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ModelConfig;
      return this.apiClient.callApi(
        '/api/v2/projects/{projectKey}/ai-configs/model-configs', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postRestrictedModels operation.
     * @callback module:api/AIConfigsBetaApi~postRestrictedModelsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestrictedModelsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add AI models to the restricted list
     * Add AI models, by key, to the restricted list. Keys are included in the response from the [List AI model configs](https://launchdarkly.com/docs/api/ai-configs-beta/list-model-configs) endpoint.
     * @param {module:model/String} lDAPIVersion Version of the endpoint.
     * @param {String} projectKey 
     * @param {module:model/RestrictedModelsRequest} restrictedModelsRequest List of AI model keys to add to the restricted list.
     * @param {module:api/AIConfigsBetaApi~postRestrictedModelsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RestrictedModelsResponse}
     */
    postRestrictedModels(lDAPIVersion, projectKey, restrictedModelsRequest, callback) {
      let postBody = restrictedModelsRequest;
      // verify the required parameter 'lDAPIVersion' is set
      if (lDAPIVersion === undefined || lDAPIVersion === null) {
        throw new Error("Missing the required parameter 'lDAPIVersion' when calling postRestrictedModels");
      }
      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling postRestrictedModels");
      }
      // verify the required parameter 'restrictedModelsRequest' is set
      if (restrictedModelsRequest === undefined || restrictedModelsRequest === null) {
        throw new Error("Missing the required parameter 'restrictedModelsRequest' when calling postRestrictedModels");
      }

      let pathParams = {
        'projectKey': projectKey
      };
      let queryParams = {
      };
      let headerParams = {
        'LD-API-Version': lDAPIVersion
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = RestrictedModelsResponse;
      return this.apiClient.callApi(
        '/api/v2/projects/{projectKey}/ai-configs/model-configs/restricted', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
