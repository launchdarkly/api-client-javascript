/**
 * LaunchDarkly REST API
 * This documentation describes LaunchDarkly's REST API.  To access the complete OpenAPI spec directly, use [Get OpenAPI spec](https://launchdarkly.com/docs/api/other/get-openapi-spec).  ## Authentication  LaunchDarkly's REST API uses the HTTPS protocol with a minimum TLS version of 1.2.  All REST API resources are authenticated with either [personal or service access tokens](https://launchdarkly.com/docs/home/account/api), or session cookies. Other authentication mechanisms are not supported. You can manage personal access tokens on your [**Authorization**](https://app.launchdarkly.com/settings/authorization) page in the LaunchDarkly UI.  LaunchDarkly also has SDK keys, mobile keys, and client-side IDs that are used by our server-side SDKs, mobile SDKs, and JavaScript-based SDKs, respectively. **These keys cannot be used to access our REST API**. These keys are environment-specific, and can only perform read-only operations such as fetching feature flag settings.  | Auth mechanism                                                                                  | Allowed resources                                                                                     | Use cases                                          | | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | -------------------------------------------------- | | [Personal or service access tokens](https://launchdarkly.com/docs/home/account/api) | Can be customized on a per-token basis                                                                | Building scripts, custom integrations, data export. | | SDK keys                                                                                        | Can only access read-only resources specific to server-side SDKs. Restricted to a single environment. | Server-side SDKs                     | | Mobile keys                                                                                     | Can only access read-only resources specific to mobile SDKs, and only for flags marked available to mobile keys. Restricted to a single environment.           | Mobile SDKs                                        | | Client-side ID                                                                                  | Can only access read-only resources specific to JavaScript-based client-side SDKs, and only for flags marked available to client-side. Restricted to a single environment.           | Client-side JavaScript                             |  > #### Keep your access tokens and SDK keys private > > Access tokens should _never_ be exposed in untrusted contexts. Never put an access token in client-side JavaScript, or embed it in a mobile application. LaunchDarkly has special mobile keys that you can embed in mobile apps. If you accidentally expose an access token or SDK key, you can reset it from your [**Authorization**](https://app.launchdarkly.com/settings/authorization) page. > > The client-side ID is safe to embed in untrusted contexts. It's designed for use in client-side JavaScript.  ### Authentication using request header  The preferred way to authenticate with the API is by adding an `Authorization` header containing your access token to your requests. The value of the `Authorization` header must be your access token.  Manage personal access tokens from the [**Authorization**](https://app.launchdarkly.com/settings/authorization) page.  ### Authentication using session cookie  For testing purposes, you can make API calls directly from your web browser. If you are logged in to the LaunchDarkly application, the API will use your existing session to authenticate calls.  If you have a [role](https://launchdarkly.com/docs/home/account/built-in-roles) other than Admin, or have a [custom role](https://launchdarkly.com/docs/home/account/custom-roles) defined, you may not have permission to perform some API calls. You will receive a `401` response code in that case.  > ### Modifying the Origin header causes an error > > LaunchDarkly validates that the Origin header for any API request authenticated by a session cookie matches the expected Origin header. The expected Origin header is `https://app.launchdarkly.com`. > > If the Origin header does not match what's expected, LaunchDarkly returns an error. This error can prevent the LaunchDarkly app from working correctly. > > Any browser extension that intentionally changes the Origin header can cause this problem. For example, the `Allow-Control-Allow-Origin: *` Chrome extension changes the Origin header to `http://evil.com` and causes the app to fail. > > To prevent this error, do not modify your Origin header. > > LaunchDarkly does not require origin matching when authenticating with an access token, so this issue does not affect normal API usage.  ## Representations  All resources expect and return JSON response bodies. Error responses also send a JSON body. To learn more about the error format of the API, read [Errors](https://launchdarkly.com/docs/api#errors).  In practice this means that you always get a response with a `Content-Type` header set to `application/json`.  In addition, request bodies for `PATCH`, `POST`, and `PUT` requests must be encoded as JSON with a `Content-Type` header set to `application/json`.  ### Summary and detailed representations  When you fetch a list of resources, the response includes only the most important attributes of each resource. This is a _summary representation_ of the resource. When you fetch an individual resource, such as a single feature flag, you receive a _detailed representation_ of the resource.  The best way to find a detailed representation is to follow links. Every summary representation includes a link to its detailed representation.  ### Expanding responses  Sometimes the detailed representation of a resource does not include all of the attributes of the resource by default. If this is the case, the request method will clearly document this and describe which attributes you can include in an expanded response.  To include the additional attributes, append the `expand` request parameter to your request and add a comma-separated list of the attributes to include. For example, when you append `?expand=members,maintainers` to the [Get team](https://launchdarkly.com/docs/api/teams/get-team) endpoint, the expanded response includes both of these attributes.  ### Links and addressability  The best way to navigate the API is by following links. These are attributes in representations that link to other resources. The API always uses the same format for links:  - Links to other resources within the API are encapsulated in a `_links` object - If the resource has a corresponding link to HTML content on the site, it is stored in a special `_site` link  Each link has two attributes:  - An `href`, which contains the URL - A `type`, which describes the content type  For example, a feature resource might return the following:  ```json {   \"_links\": {     \"parent\": {       \"href\": \"/api/features\",       \"type\": \"application/json\"     },     \"self\": {       \"href\": \"/api/features/sort.order\",       \"type\": \"application/json\"     }   },   \"_site\": {     \"href\": \"/features/sort.order\",     \"type\": \"text/html\"   } } ```  From this, you can navigate to the parent collection of features by following the `parent` link, or navigate to the site page for the feature by following the `_site` link.  Collections are always represented as a JSON object with an `items` attribute containing an array of representations. Like all other representations, collections have `_links` defined at the top level.  Paginated collections include `first`, `last`, `next`, and `prev` links containing a URL with the respective set of elements in the collection.  ## Updates  Resources that accept partial updates use the `PATCH` verb. Most resources support the [JSON patch](https://launchdarkly.com/docs/api#updates-using-json-patch) format. Some resources also support the [JSON merge patch](https://launchdarkly.com/docs/api#updates-using-json-merge-patch) format, and some resources support the [semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch) format, which is a way to specify the modifications to perform as a set of executable instructions. Each resource supports optional [comments](https://launchdarkly.com/docs/api#updates-with-comments) that you can submit with updates. Comments appear in outgoing webhooks, the audit log, and other integrations.  When a resource supports both JSON patch and semantic patch, we document both in the request method. However, the specific request body fields and descriptions included in our documentation only match one type of patch or the other.  ### Updates using JSON patch  [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) is a way to specify the modifications to perform on a resource. JSON patch uses paths and a limited set of operations to describe how to transform the current state of the resource into a new state. JSON patch documents are always arrays, where each element contains an operation, a path to the field to update, and the new value.  For example, in this feature flag representation:  ```json {     \"name\": \"New recommendations engine\",     \"key\": \"engine.enable\",     \"description\": \"This is the description\",     ... } ``` You can change the feature flag's description with the following patch document:  ```json [{ \"op\": \"replace\", \"path\": \"/description\", \"value\": \"This is the new description\" }] ```  You can specify multiple modifications to perform in a single request. You can also test that certain preconditions are met before applying the patch:  ```json [   { \"op\": \"test\", \"path\": \"/version\", \"value\": 10 },   { \"op\": \"replace\", \"path\": \"/description\", \"value\": \"The new description\" } ] ```  The above patch request tests whether the feature flag's `version` is `10`, and if so, changes the feature flag's description.  Attributes that are not editable, such as a resource's `_links`, have names that start with an underscore.  ### Updates using JSON merge patch  [JSON merge patch](https://datatracker.ietf.org/doc/html/rfc7386) is another format for specifying the modifications to perform on a resource. JSON merge patch is less expressive than JSON patch. However, in many cases it is simpler to construct a merge patch document. For example, you can change a feature flag's description with the following merge patch document:  ```json {   \"description\": \"New flag description\" } ```  ### Updates using semantic patch  Some resources support the semantic patch format. A semantic patch is a way to specify the modifications to perform on a resource as a set of executable instructions.  Semantic patch allows you to be explicit about intent using precise, custom instructions. In many cases, you can define semantic patch instructions independently of the current state of the resource. This can be useful when defining a change that may be applied at a future date.  To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header.  Here's how:  ``` Content-Type: application/json; domain-model=launchdarkly.semanticpatch ```  If you call a semantic patch resource without this header, you will receive a `400` response because your semantic patch will be interpreted as a JSON patch.  The body of a semantic patch request takes the following properties:  * `comment` (string): (Optional) A description of the update. * `environmentKey` (string): (Required for some resources only) The environment key. * `instructions` (array): (Required) A list of actions the update should perform. Each action in the list must be an object with a `kind` property that indicates the instruction. If the instruction requires parameters, you must include those parameters as additional fields in the object. The documentation for each resource that supports semantic patch includes the available instructions and any additional parameters.  For example:  ```json {   \"comment\": \"optional comment\",   \"instructions\": [ {\"kind\": \"turnFlagOn\"} ] } ```  Semantic patches are not applied partially; either all of the instructions are applied or none of them are. If **any** instruction is invalid, the endpoint returns an error and will not change the resource. If all instructions are valid, the request succeeds and the resources are updated if necessary, or left unchanged if they are already in the state you request.  ### Updates with comments  You can submit optional comments with `PATCH` changes.  To submit a comment along with a JSON patch document, use the following format:  ```json {   \"comment\": \"This is a comment string\",   \"patch\": [{ \"op\": \"replace\", \"path\": \"/description\", \"value\": \"The new description\" }] } ```  To submit a comment along with a JSON merge patch document, use the following format:  ```json {   \"comment\": \"This is a comment string\",   \"merge\": { \"description\": \"New flag description\" } } ```  To submit a comment along with a semantic patch, use the following format:  ```json {   \"comment\": \"This is a comment string\",   \"instructions\": [ {\"kind\": \"turnFlagOn\"} ] } ```  ## Errors  The API always returns errors in a common format. Here's an example:  ```json {   \"code\": \"invalid_request\",   \"message\": \"A feature with that key already exists\",   \"id\": \"30ce6058-87da-11e4-b116-123b93f75cba\" } ```  The `code` indicates the general class of error. The `message` is a human-readable explanation of what went wrong. The `id` is a unique identifier. Use it when you're working with LaunchDarkly Support to debug a problem with a specific API call.  ### HTTP status error response codes  | Code | Definition        | Description                                                                                       | Possible Solution                                                | | ---- | ----------------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | | 400  | Invalid request       | The request cannot be understood.                                    | Ensure JSON syntax in request body is correct.                   | | 401  | Invalid access token      | Requestor is unauthorized or does not have permission for this API call.                                                | Ensure your API access token is valid and has the appropriate permissions.                                     | | 403  | Forbidden         | Requestor does not have access to this resource.                                                | Ensure that the account member or access token has proper permissions set. | | 404  | Invalid resource identifier | The requested resource is not valid. | Ensure that the resource is correctly identified by ID or key. | | 405  | Method not allowed | The request method is not allowed on this resource. | Ensure that the HTTP verb is correct. | | 409  | Conflict          | The API request can not be completed because it conflicts with a concurrent API request. | Retry your request.                                              | | 422  | Unprocessable entity | The API request can not be completed because the update description can not be understood. | Ensure that the request body is correct for the type of patch you are using, either JSON patch or semantic patch. | 429  | Too many requests | Read [Rate limiting](https://launchdarkly.com/docs/api#rate-limiting).                                               | Wait and try again later.                                        |  ## CORS  The LaunchDarkly API supports Cross Origin Resource Sharing (CORS) for AJAX requests from any origin. If an `Origin` header is given in a request, it will be echoed as an explicitly allowed origin. Otherwise the request returns a wildcard, `Access-Control-Allow-Origin: *`. For more information on CORS, read the [CORS W3C Recommendation](http://www.w3.org/TR/cors). Example CORS headers might look like:  ```http Access-Control-Allow-Headers: Accept, Content-Type, Content-Length, Accept-Encoding, Authorization Access-Control-Allow-Methods: OPTIONS, GET, DELETE, PATCH Access-Control-Allow-Origin: * Access-Control-Max-Age: 300 ```  You can make authenticated CORS calls just as you would make same-origin calls, using either [token or session-based authentication](https://launchdarkly.com/docs/api#authentication). If you are using session authentication, you should set the `withCredentials` property for your `xhr` request to `true`. You should never expose your access tokens to untrusted entities.  ## Rate limiting  We use several rate limiting strategies to ensure the availability of our APIs. Rate-limited calls to our APIs return a `429` status code. Calls to our APIs include headers indicating the current rate limit status. The specific headers returned depend on the API route being called. The limits differ based on the route, authentication mechanism, and other factors. Routes that are not rate limited may not contain any of the headers described below.  > ### Rate limiting and SDKs > > LaunchDarkly SDKs are never rate limited and do not use the API endpoints defined here. LaunchDarkly uses a different set of approaches, including streaming/server-sent events and a global CDN, to ensure availability to the routes used by LaunchDarkly SDKs.  ### Global rate limits  Authenticated requests are subject to a global limit. This is the maximum number of calls that your account can make to the API per ten seconds. All service and personal access tokens on the account share this limit, so exceeding the limit with one access token will impact other tokens. Calls that are subject to global rate limits may return the headers below:  | Header name                    | Description                                                                      | | ------------------------------ | -------------------------------------------------------------------------------- | | `X-Ratelimit-Global-Remaining` | The maximum number of requests the account is permitted to make per ten seconds. | | `X-Ratelimit-Reset`            | The time at which the current rate limit window resets in epoch milliseconds.    |  We do not publicly document the specific number of calls that can be made globally. This limit may change, and we encourage clients to program against the specification, relying on the two headers defined above, rather than hardcoding to the current limit.  ### Route-level rate limits  Some authenticated routes have custom rate limits. These also reset every ten seconds. Any service or personal access tokens hitting the same route share this limit, so exceeding the limit with one access token may impact other tokens. Calls that are subject to route-level rate limits return the headers below:  | Header name                   | Description                                                                                           | | ----------------------------- | ----------------------------------------------------------------------------------------------------- | | `X-Ratelimit-Route-Remaining` | The maximum number of requests to the current route the account is permitted to make per ten seconds. | | `X-Ratelimit-Reset`           | The time at which the current rate limit window resets in epoch milliseconds.                         |  A _route_ represents a specific URL pattern and verb. For example, the [Delete environment](https://launchdarkly.com/docs/api/environments/delete-environment) endpoint is considered a single route, and each call to delete an environment counts against your route-level rate limit for that route.  We do not publicly document the specific number of calls that an account can make to each endpoint per ten seconds. These limits may change, and we encourage clients to program against the specification, relying on the two headers defined above, rather than hardcoding to the current limits.  ### IP-based rate limiting  We also employ IP-based rate limiting on some API routes. If you hit an IP-based rate limit, your API response will include a `Retry-After` header indicating how long to wait before re-trying the call. Clients must wait at least `Retry-After` seconds before making additional calls to our API, and should employ jitter and backoff strategies to avoid triggering rate limits again.  ## OpenAPI (Swagger) and client libraries  We have a [complete OpenAPI (Swagger) specification](https://app.launchdarkly.com/api/v2/openapi.json) for our API.  We auto-generate multiple client libraries based on our OpenAPI specification. To learn more, visit the [collection of client libraries on GitHub](https://github.com/search?q=topic%3Alaunchdarkly-api+org%3Alaunchdarkly&type=Repositories). You can also use this specification to generate client libraries to interact with our REST API in your language of choice.  Our OpenAPI specification is supported by several API-based tools such as Postman and Insomnia. In many cases, you can directly import our specification to explore our APIs.  ## Method overriding  Some firewalls and HTTP clients restrict the use of verbs other than `GET` and `POST`. In those environments, our API endpoints that use `DELETE`, `PATCH`, and `PUT` verbs are inaccessible.  To avoid this issue, our API supports the `X-HTTP-Method-Override` header, allowing clients to \"tunnel\" `DELETE`, `PATCH`, and `PUT` requests using a `POST` request.  For example, to call a `PATCH` endpoint using a `POST` request, you can include `X-HTTP-Method-Override:PATCH` as a header.  ## Beta resources  We sometimes release new API resources in **beta** status before we release them with general availability.  Resources that are in beta are still undergoing testing and development. They may change without notice, including becoming backwards incompatible.  We try to promote resources into general availability as quickly as possible. This happens after sufficient testing and when we're satisfied that we no longer need to make backwards-incompatible changes.  We mark beta resources with a \"Beta\" callout in our documentation, pictured below:  > ### This feature is in beta > > To use this feature, pass in a header including the `LD-API-Version` key with value set to `beta`. Use this header with each call. To learn more, read [Beta resources](https://launchdarkly.com/docs/api#beta-resources). > > Resources that are in beta are still undergoing testing and development. They may change without notice, including becoming backwards incompatible.  ### Using beta resources  To use a beta resource, you must include a header in the request. If you call a beta resource without this header, you receive a `403` response.  Use this header:  ``` LD-API-Version: beta ```  ## Federal environments  The version of LaunchDarkly that is available on domains controlled by the United States government is different from the version of LaunchDarkly available to the general public. If you are an employee or contractor for a United States federal agency and use LaunchDarkly in your work, you likely use the federal instance of LaunchDarkly.  If you are working in the federal instance of LaunchDarkly, the base URI for each request is `https://app.launchdarkly.us`.  To learn more, read [LaunchDarkly in federal environments](https://launchdarkly.com/docs/home/infrastructure/federal).  ## Versioning  We try hard to keep our REST API backwards compatible, but we occasionally have to make backwards-incompatible changes in the process of shipping new features. These breaking changes can cause unexpected behavior if you don't prepare for them accordingly.  Updates to our REST API include support for the latest features in LaunchDarkly. We also release a new version of our REST API every time we make a breaking change. We provide simultaneous support for multiple API versions so you can migrate from your current API version to a new version at your own pace.  ### Setting the API version per request  You can set the API version on a specific request by sending an `LD-API-Version` header, as shown in the example below:  ``` LD-API-Version: 20240415 ```  The header value is the version number of the API version you would like to request. The number for each version corresponds to the date the version was released in `yyyymmdd` format. In the example above the version `20240415` corresponds to April 15, 2024.  ### Setting the API version per access token  When you create an access token, you must specify a specific version of the API to use. This ensures that integrations using this token cannot be broken by version changes.  Tokens created before versioning was released have their version set to `20160426`, which is the version of the API that existed before the current versioning scheme, so that they continue working the same way they did before versioning.  If you would like to upgrade your integration to use a new API version, you can explicitly set the header described above.  > ### Best practice: Set the header for every client or integration > > We recommend that you set the API version header explicitly in any client or integration you build. > > Only rely on the access token API version during manual testing.  ### API version changelog  <table>   <tr>     <th>Version</th>     <th>Changes</th>     <th>End of life (EOL)</th>   </tr>   <tr>     <td>`20240415`</td>     <td>       <ul><li>Changed several endpoints from unpaginated to paginated. Use the `limit` and `offset` query parameters to page through the results.</li> <li>Changed the [list access tokens](https://launchdarkly.com/docs/api/access-tokens/get-tokens) endpoint: <ul><li>Response is now paginated with a default limit of `25`</li></ul></li> <li>Changed the [list account members](https://launchdarkly.com/docs/api/account-members/get-members) endpoint: <ul><li>The `accessCheck` filter is no longer available</li></ul></li> <li>Changed the [list custom roles](https://launchdarkly.com/docs/api/custom-roles/get-custom-roles) endpoint: <ul><li>Response is now paginated with a default limit of `20`</li></ul></li> <li>Changed the [list feature flags](https://launchdarkly.com/docs/api/feature-flags/get-feature-flags) endpoint: <ul><li>Response is now paginated with a default limit of `20`</li><li>The `environments` field is now only returned if the request is filtered by environment, using the `filterEnv` query parameter</li><li>The `followerId`, `hasDataExport`, `status`, `contextKindTargeted`, and `segmentTargeted` filters are no longer available</li><li>The `compare` query parameter is no longer available</li></ul></li> <li>Changed the [list segments](https://launchdarkly.com/docs/api/segments/get-segments) endpoint: <ul><li>Response is now paginated with a default limit of `20`</li></ul></li> <li>Changed the [list teams](https://launchdarkly.com/docs/api/teams/get-teams) endpoint: <ul><li>The `expand` parameter no longer supports including `projects` or `roles`</li><li>In paginated results, the maximum page size is now 100</li></ul></li> <li>Changed the [get workflows](https://launchdarkly.com/docs/api/workflows/get-workflows) endpoint: <ul><li>Response is now paginated with a default limit of `20`</li><li>The `_conflicts` field in the response is no longer available</li></ul></li> </ul>     </td>     <td>Current</td>   </tr>   <tr>     <td>`20220603`</td>     <td>       <ul><li>Changed the [list projects](https://launchdarkly.com/docs/api/projects/get-projects) return value:<ul><li>Response is now paginated with a default limit of `20`.</li><li>Added support for filter and sort.</li><li>The project `environments` field is now expandable. This field is omitted by default.</li></ul></li><li>Changed the [get project](https://launchdarkly.com/docs/api/projects/get-project) return value:<ul><li>The `environments` field is now expandable. This field is omitted by default.</li></ul></li></ul>     </td>     <td>2025-04-15</td>   </tr>   <tr>     <td>`20210729`</td>     <td>       <ul><li>Changed the [create approval request](https://launchdarkly.com/docs/api/approvals/post-approval-request) return value. It now returns HTTP Status Code `201` instead of `200`.</li><li> Changed the [get user](https://launchdarkly.com/docs/api/users/get-user) return value. It now returns a user record, not a user. </li><li>Added additional optional fields to environment, segments, flags, members, and segments, including the ability to create big segments. </li><li> Added default values for flag variations when new environments are created. </li><li>Added filtering and pagination for getting flags and members, including `limit`, `number`, `filter`, and `sort` query parameters. </li><li>Added endpoints for expiring user targets for flags and segments, scheduled changes, access tokens, Relay Proxy configuration, integrations and subscriptions, and approvals. </li></ul>     </td>     <td>2023-06-03</td>   </tr>   <tr>     <td>`20191212`</td>     <td>       <ul><li>[List feature flags](https://launchdarkly.com/docs/api/feature-flags/get-feature-flags) now defaults to sending summaries of feature flag configurations, equivalent to setting the query parameter `summary=true`. Summaries omit flag targeting rules and individual user targets from the payload. </li><li> Added endpoints for flags, flag status, projects, environments, audit logs, members, users, custom roles, segments, usage, streams, events, and data export. </li></ul>     </td>     <td>2022-07-29</td>   </tr>   <tr>     <td>`20160426`</td>     <td>       <ul><li>Initial versioning of API. Tokens created before versioning have their version set to this.</li></ul>     </td>     <td>2020-12-12</td>   </tr> </table>  To learn more about how EOL is determined, read LaunchDarkly's [End of Life (EOL) Policy](https://launchdarkly.com/policies/end-of-life-policy/). 
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
import AIConfigVariation from '../model/AIConfigVariation';
import AIConfigVariationPatch from '../model/AIConfigVariationPatch';
import AIConfigVariationPost from '../model/AIConfigVariationPost';
import AIConfigVariationsResponse from '../model/AIConfigVariationsResponse';
import AIConfigs from '../model/AIConfigs';
import Error from '../model/Error';
import MetricByVariation from '../model/MetricByVariation';
import Metrics from '../model/Metrics';
import ModelConfig from '../model/ModelConfig';
import ModelConfigPost from '../model/ModelConfigPost';

/**
* AIConfigsBeta service.
* @module api/AIConfigsBetaApi
* @version 17.2.0
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
     * @param {String} opts.sort A sort to apply to the list of AI Configs.
     * @param {Number} opts.limit The number of AI Configs to return.
     * @param {Number} opts.offset Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`.
     * @param {String} opts.filter A filter to apply to the list of AI Configs.
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
     * @param {module:api/AIConfigsBetaApi~listModelConfigsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelConfig>}
     */
    listModelConfigs(lDAPIVersion, projectKey, callback) {
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
     * @param {module:model/AIConfigPatch} opts.aIConfigPatch AI Config object to update
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
     * @param {module:model/AIConfigVariationPatch} opts.aIConfigVariationPatch AI Config variation object to update
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


}
