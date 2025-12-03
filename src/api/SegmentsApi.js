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
import BigSegmentTarget from '../model/BigSegmentTarget';
import ContextInstanceSegmentMemberships from '../model/ContextInstanceSegmentMemberships';
import ExpiringTargetGetResponse from '../model/ExpiringTargetGetResponse';
import ExpiringTargetPatchResponse from '../model/ExpiringTargetPatchResponse';
import ExpiringUserTargetGetResponse from '../model/ExpiringUserTargetGetResponse';
import ExpiringUserTargetPatchResponse from '../model/ExpiringUserTargetPatchResponse';
import Export from '../model/Export';
import ForbiddenErrorRep from '../model/ForbiddenErrorRep';
import Import from '../model/Import';
import InvalidRequestErrorRep from '../model/InvalidRequestErrorRep';
import NotFoundErrorRep from '../model/NotFoundErrorRep';
import PatchSegmentExpiringTargetInputRep from '../model/PatchSegmentExpiringTargetInputRep';
import PatchSegmentRequest from '../model/PatchSegmentRequest';
import PatchWithComment from '../model/PatchWithComment';
import RateLimitedErrorRep from '../model/RateLimitedErrorRep';
import SegmentBody from '../model/SegmentBody';
import SegmentUserState from '../model/SegmentUserState';
import StatusConflictErrorRep from '../model/StatusConflictErrorRep';
import UnauthorizedErrorRep from '../model/UnauthorizedErrorRep';
import UserSegment from '../model/UserSegment';
import UserSegments from '../model/UserSegments';

/**
* Segments service.
* @module api/SegmentsApi
* @version 19.0.0
*/
export default class SegmentsApi {

    /**
    * Constructs a new SegmentsApi. 
    * @alias module:api/SegmentsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createBigSegmentExport operation.
     * @callback module:api/SegmentsApi~createBigSegmentExportCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create big segment export
     * Starts a new export process for a big segment. This is an export for a synced segment or a list-based segment that can include more than 15,000 entries.
     * @param {String} projectKey The project key
     * @param {String} environmentKey The environment key
     * @param {String} segmentKey The segment key
     * @param {module:api/SegmentsApi~createBigSegmentExportCallback} callback The callback function, accepting three arguments: error, data, response
     */
    createBigSegmentExport(projectKey, environmentKey, segmentKey, callback) {
      let postBody = null;
      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling createBigSegmentExport");
      }
      // verify the required parameter 'environmentKey' is set
      if (environmentKey === undefined || environmentKey === null) {
        throw new Error("Missing the required parameter 'environmentKey' when calling createBigSegmentExport");
      }
      // verify the required parameter 'segmentKey' is set
      if (segmentKey === undefined || segmentKey === null) {
        throw new Error("Missing the required parameter 'segmentKey' when calling createBigSegmentExport");
      }

      let pathParams = {
        'projectKey': projectKey,
        'environmentKey': environmentKey,
        'segmentKey': segmentKey
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/exports', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createBigSegmentImport operation.
     * @callback module:api/SegmentsApi~createBigSegmentImportCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create big segment import
     * Start a new import process for a big segment. This is an import for a list-based segment that can include more than 15,000 entries.
     * @param {String} projectKey The project key
     * @param {String} environmentKey The environment key
     * @param {String} segmentKey The segment key
     * @param {Object} opts Optional parameters
     * @param {File} [file] CSV file containing keys
     * @param {String} [mode] Import mode. Use either `merge` or `replace`
     * @param {Boolean} [waitOnApprovals] Whether to wait for approvals before processing the import
     * @param {module:api/SegmentsApi~createBigSegmentImportCallback} callback The callback function, accepting three arguments: error, data, response
     */
    createBigSegmentImport(projectKey, environmentKey, segmentKey, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling createBigSegmentImport");
      }
      // verify the required parameter 'environmentKey' is set
      if (environmentKey === undefined || environmentKey === null) {
        throw new Error("Missing the required parameter 'environmentKey' when calling createBigSegmentImport");
      }
      // verify the required parameter 'segmentKey' is set
      if (segmentKey === undefined || segmentKey === null) {
        throw new Error("Missing the required parameter 'segmentKey' when calling createBigSegmentImport");
      }

      let pathParams = {
        'projectKey': projectKey,
        'environmentKey': environmentKey,
        'segmentKey': segmentKey
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'file': opts['file'],
        'mode': opts['mode'],
        'waitOnApprovals': opts['waitOnApprovals']
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/imports', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteSegment operation.
     * @callback module:api/SegmentsApi~deleteSegmentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete segment
     * Delete a segment.
     * @param {String} projectKey The project key
     * @param {String} environmentKey The environment key
     * @param {String} segmentKey The segment key
     * @param {module:api/SegmentsApi~deleteSegmentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteSegment(projectKey, environmentKey, segmentKey, callback) {
      let postBody = null;
      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling deleteSegment");
      }
      // verify the required parameter 'environmentKey' is set
      if (environmentKey === undefined || environmentKey === null) {
        throw new Error("Missing the required parameter 'environmentKey' when calling deleteSegment");
      }
      // verify the required parameter 'segmentKey' is set
      if (segmentKey === undefined || segmentKey === null) {
        throw new Error("Missing the required parameter 'segmentKey' when calling deleteSegment");
      }

      let pathParams = {
        'projectKey': projectKey,
        'environmentKey': environmentKey,
        'segmentKey': segmentKey
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getBigSegmentExport operation.
     * @callback module:api/SegmentsApi~getBigSegmentExportCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Export} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get big segment export
     * Returns information about a big segment export process. This is an export for a synced segment or a list-based segment that can include more than 15,000 entries.
     * @param {String} projectKey The project key
     * @param {String} environmentKey The environment key
     * @param {String} segmentKey The segment key
     * @param {String} exportID The export ID
     * @param {module:api/SegmentsApi~getBigSegmentExportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Export}
     */
    getBigSegmentExport(projectKey, environmentKey, segmentKey, exportID, callback) {
      let postBody = null;
      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling getBigSegmentExport");
      }
      // verify the required parameter 'environmentKey' is set
      if (environmentKey === undefined || environmentKey === null) {
        throw new Error("Missing the required parameter 'environmentKey' when calling getBigSegmentExport");
      }
      // verify the required parameter 'segmentKey' is set
      if (segmentKey === undefined || segmentKey === null) {
        throw new Error("Missing the required parameter 'segmentKey' when calling getBigSegmentExport");
      }
      // verify the required parameter 'exportID' is set
      if (exportID === undefined || exportID === null) {
        throw new Error("Missing the required parameter 'exportID' when calling getBigSegmentExport");
      }

      let pathParams = {
        'projectKey': projectKey,
        'environmentKey': environmentKey,
        'segmentKey': segmentKey,
        'exportID': exportID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Export;
      return this.apiClient.callApi(
        '/api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/exports/{exportID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getBigSegmentImport operation.
     * @callback module:api/SegmentsApi~getBigSegmentImportCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Import} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get big segment import
     * Returns information about a big segment import process. This is the import of a list-based segment that can include more than 15,000 entries.
     * @param {String} projectKey The project key
     * @param {String} environmentKey The environment key
     * @param {String} segmentKey The segment key
     * @param {String} importID The import ID
     * @param {module:api/SegmentsApi~getBigSegmentImportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Import}
     */
    getBigSegmentImport(projectKey, environmentKey, segmentKey, importID, callback) {
      let postBody = null;
      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling getBigSegmentImport");
      }
      // verify the required parameter 'environmentKey' is set
      if (environmentKey === undefined || environmentKey === null) {
        throw new Error("Missing the required parameter 'environmentKey' when calling getBigSegmentImport");
      }
      // verify the required parameter 'segmentKey' is set
      if (segmentKey === undefined || segmentKey === null) {
        throw new Error("Missing the required parameter 'segmentKey' when calling getBigSegmentImport");
      }
      // verify the required parameter 'importID' is set
      if (importID === undefined || importID === null) {
        throw new Error("Missing the required parameter 'importID' when calling getBigSegmentImport");
      }

      let pathParams = {
        'projectKey': projectKey,
        'environmentKey': environmentKey,
        'segmentKey': segmentKey,
        'importID': importID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Import;
      return this.apiClient.callApi(
        '/api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/imports/{importID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getContextInstanceSegmentsMembershipByEnv operation.
     * @callback module:api/SegmentsApi~getContextInstanceSegmentsMembershipByEnvCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContextInstanceSegmentMemberships} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List segment memberships for context instance
     * For a given context instance with attributes, get membership details for all segments. In the request body, pass in the context instance.
     * @param {String} projectKey The project key
     * @param {String} environmentKey The environment key
     * @param {Object.<String, {String: Object}>} requestBody 
     * @param {module:api/SegmentsApi~getContextInstanceSegmentsMembershipByEnvCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContextInstanceSegmentMemberships}
     */
    getContextInstanceSegmentsMembershipByEnv(projectKey, environmentKey, requestBody, callback) {
      let postBody = requestBody;
      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling getContextInstanceSegmentsMembershipByEnv");
      }
      // verify the required parameter 'environmentKey' is set
      if (environmentKey === undefined || environmentKey === null) {
        throw new Error("Missing the required parameter 'environmentKey' when calling getContextInstanceSegmentsMembershipByEnv");
      }
      // verify the required parameter 'requestBody' is set
      if (requestBody === undefined || requestBody === null) {
        throw new Error("Missing the required parameter 'requestBody' when calling getContextInstanceSegmentsMembershipByEnv");
      }

      let pathParams = {
        'projectKey': projectKey,
        'environmentKey': environmentKey
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ContextInstanceSegmentMemberships;
      return this.apiClient.callApi(
        '/api/v2/projects/{projectKey}/environments/{environmentKey}/segments/evaluate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getExpiringTargetsForSegment operation.
     * @callback module:api/SegmentsApi~getExpiringTargetsForSegmentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExpiringTargetGetResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get expiring targets for segment
     * Get a list of a segment's context targets that are scheduled for removal.
     * @param {String} projectKey The project key
     * @param {String} environmentKey The environment key
     * @param {String} segmentKey The segment key
     * @param {module:api/SegmentsApi~getExpiringTargetsForSegmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ExpiringTargetGetResponse}
     */
    getExpiringTargetsForSegment(projectKey, environmentKey, segmentKey, callback) {
      let postBody = null;
      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling getExpiringTargetsForSegment");
      }
      // verify the required parameter 'environmentKey' is set
      if (environmentKey === undefined || environmentKey === null) {
        throw new Error("Missing the required parameter 'environmentKey' when calling getExpiringTargetsForSegment");
      }
      // verify the required parameter 'segmentKey' is set
      if (segmentKey === undefined || segmentKey === null) {
        throw new Error("Missing the required parameter 'segmentKey' when calling getExpiringTargetsForSegment");
      }

      let pathParams = {
        'projectKey': projectKey,
        'environmentKey': environmentKey,
        'segmentKey': segmentKey
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ExpiringTargetGetResponse;
      return this.apiClient.callApi(
        '/api/v2/segments/{projectKey}/{segmentKey}/expiring-targets/{environmentKey}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getExpiringUserTargetsForSegment operation.
     * @callback module:api/SegmentsApi~getExpiringUserTargetsForSegmentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExpiringUserTargetGetResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get expiring user targets for segment
     * > ### Contexts are now available > > After you have upgraded your LaunchDarkly SDK to use contexts instead of users, you should use [Get expiring targets for segment](https://launchdarkly.com/docs/api/segments/get-expiring-targets-for-segment) instead of this endpoint. To learn more, read [Contexts](https://launchdarkly.com/docs/home/observability/contexts).  Get a list of a segment's user targets that are scheduled for removal. 
     * @param {String} projectKey The project key
     * @param {String} environmentKey The environment key
     * @param {String} segmentKey The segment key
     * @param {module:api/SegmentsApi~getExpiringUserTargetsForSegmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ExpiringUserTargetGetResponse}
     */
    getExpiringUserTargetsForSegment(projectKey, environmentKey, segmentKey, callback) {
      let postBody = null;
      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling getExpiringUserTargetsForSegment");
      }
      // verify the required parameter 'environmentKey' is set
      if (environmentKey === undefined || environmentKey === null) {
        throw new Error("Missing the required parameter 'environmentKey' when calling getExpiringUserTargetsForSegment");
      }
      // verify the required parameter 'segmentKey' is set
      if (segmentKey === undefined || segmentKey === null) {
        throw new Error("Missing the required parameter 'segmentKey' when calling getExpiringUserTargetsForSegment");
      }

      let pathParams = {
        'projectKey': projectKey,
        'environmentKey': environmentKey,
        'segmentKey': segmentKey
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ExpiringUserTargetGetResponse;
      return this.apiClient.callApi(
        '/api/v2/segments/{projectKey}/{segmentKey}/expiring-user-targets/{environmentKey}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSegment operation.
     * @callback module:api/SegmentsApi~getSegmentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserSegment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get segment
     * Get a single segment by key.<br/><br/>Segments can be rule-based, list-based, or synced. Big segments include larger list-based segments and synced segments. Some fields in the response only apply to big segments.
     * @param {String} projectKey The project key
     * @param {String} environmentKey The environment key
     * @param {String} segmentKey The segment key
     * @param {module:api/SegmentsApi~getSegmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserSegment}
     */
    getSegment(projectKey, environmentKey, segmentKey, callback) {
      let postBody = null;
      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling getSegment");
      }
      // verify the required parameter 'environmentKey' is set
      if (environmentKey === undefined || environmentKey === null) {
        throw new Error("Missing the required parameter 'environmentKey' when calling getSegment");
      }
      // verify the required parameter 'segmentKey' is set
      if (segmentKey === undefined || segmentKey === null) {
        throw new Error("Missing the required parameter 'segmentKey' when calling getSegment");
      }

      let pathParams = {
        'projectKey': projectKey,
        'environmentKey': environmentKey,
        'segmentKey': segmentKey
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = UserSegment;
      return this.apiClient.callApi(
        '/api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSegmentMembershipForContext operation.
     * @callback module:api/SegmentsApi~getSegmentMembershipForContextCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BigSegmentTarget} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get big segment membership for context
     * Get the membership status (included/excluded) for a given context in this big segment. Big segments include larger list-based segments and synced segments. This operation does not support standard segments.
     * @param {String} projectKey The project key
     * @param {String} environmentKey The environment key
     * @param {String} segmentKey The segment key
     * @param {String} contextKey The context key
     * @param {module:api/SegmentsApi~getSegmentMembershipForContextCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BigSegmentTarget}
     */
    getSegmentMembershipForContext(projectKey, environmentKey, segmentKey, contextKey, callback) {
      let postBody = null;
      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling getSegmentMembershipForContext");
      }
      // verify the required parameter 'environmentKey' is set
      if (environmentKey === undefined || environmentKey === null) {
        throw new Error("Missing the required parameter 'environmentKey' when calling getSegmentMembershipForContext");
      }
      // verify the required parameter 'segmentKey' is set
      if (segmentKey === undefined || segmentKey === null) {
        throw new Error("Missing the required parameter 'segmentKey' when calling getSegmentMembershipForContext");
      }
      // verify the required parameter 'contextKey' is set
      if (contextKey === undefined || contextKey === null) {
        throw new Error("Missing the required parameter 'contextKey' when calling getSegmentMembershipForContext");
      }

      let pathParams = {
        'projectKey': projectKey,
        'environmentKey': environmentKey,
        'segmentKey': segmentKey,
        'contextKey': contextKey
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = BigSegmentTarget;
      return this.apiClient.callApi(
        '/api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/contexts/{contextKey}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSegmentMembershipForUser operation.
     * @callback module:api/SegmentsApi~getSegmentMembershipForUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BigSegmentTarget} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get big segment membership for user
     * > ### Contexts are now available > > After you have upgraded your LaunchDarkly SDK to use contexts instead of users, you should use [Get expiring targets for segment](https://launchdarkly.com/docs/api/segments/get-expiring-targets-for-segment) instead of this endpoint. To learn more, read [Contexts](https://launchdarkly.com/docs/home/observability/contexts).  Get the membership status (included/excluded) for a given user in this big segment. This operation does not support standard segments. 
     * @param {String} projectKey The project key
     * @param {String} environmentKey The environment key
     * @param {String} segmentKey The segment key
     * @param {String} userKey The user key
     * @param {module:api/SegmentsApi~getSegmentMembershipForUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BigSegmentTarget}
     */
    getSegmentMembershipForUser(projectKey, environmentKey, segmentKey, userKey, callback) {
      let postBody = null;
      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling getSegmentMembershipForUser");
      }
      // verify the required parameter 'environmentKey' is set
      if (environmentKey === undefined || environmentKey === null) {
        throw new Error("Missing the required parameter 'environmentKey' when calling getSegmentMembershipForUser");
      }
      // verify the required parameter 'segmentKey' is set
      if (segmentKey === undefined || segmentKey === null) {
        throw new Error("Missing the required parameter 'segmentKey' when calling getSegmentMembershipForUser");
      }
      // verify the required parameter 'userKey' is set
      if (userKey === undefined || userKey === null) {
        throw new Error("Missing the required parameter 'userKey' when calling getSegmentMembershipForUser");
      }

      let pathParams = {
        'projectKey': projectKey,
        'environmentKey': environmentKey,
        'segmentKey': segmentKey,
        'userKey': userKey
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = BigSegmentTarget;
      return this.apiClient.callApi(
        '/api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/users/{userKey}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSegments operation.
     * @callback module:api/SegmentsApi~getSegmentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserSegments} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List segments
     * Get a list of all segments in the given project.  Segments can be rule-based, list-based, or synced. Big segments include larger list-based segments and synced segments. Some fields in the response only apply to big segments.  ### Filtering segments  The `filter` parameter supports the following operators: `equals`, `anyOf`, and `exists`.  You can also combine filters in the following ways:  - Use a comma (`,`) as an AND operator - Use a vertical bar (`|`) as an OR operator - Use parentheses (`()`) to group filters  #### Supported fields and operators  You can only filter certain fields in segments when using the `filter` parameter. Additionally, you can only filter some fields with certain operators.  When you search for segments, the `filter` parameter supports the following fields and operators:  |<div style=\"width:120px\">Field</div> |Description |Supported operators | |---|---|---| | `excludedKeys` | The segment keys of segments to exclude from the results. | `anyOf` | | `external` | Whether the segment is a synced segment. | `exists` | | `includedKeys` | The segment keys of segments to include in the results. | `anyOf` | | `query` | A \"fuzzy\" search across segment key, name, and description. Supply a string or list of strings to the operator. | `equals` | | `tags` | The segment tags. | `anyOf` | | `unbounded` | Whether the segment is a standard segment (`false`) or a big segment (`true`). Standard segments include rule-based segments and smaller list-based segments. Big segments include larger list-based segments and synced segments. | `equals` |  Here are a few examples:  * The filter `?filter=tags anyOf [\"enterprise\", \"beta\"],query equals \"toggle\"` matches segments with \"toggle\" in their key, name, or description that also have \"enterprise\" or \"beta\" as a tag. * The filter `?filter=excludedKeys anyOf [\"segmentKey1\", \"segmentKey2\"]` excludes the segments with those keys from the results. * The filter `?filter=unbounded equals true` matches larger list-based segments and synced segments.  The documented values for `filter` query parameters are prior to URL encoding. For example, the `[` in `?filter=tags anyOf [\"enterprise\", \"beta\"]` must be encoded to `%5B`. 
     * @param {String} projectKey The project key
     * @param {String} environmentKey The environment key
     * @param {Object} opts Optional parameters
     * @param {Number} [limit] The number of segments to return. Defaults to 20.
     * @param {Number} [offset] Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`.
     * @param {String} [sort] Accepts sorting order and fields. Fields can be comma separated. Possible fields are 'creationDate', 'name', 'lastModified'. Example: `sort=name` sort by names ascending or `sort=-name,creationDate` sort by names descending and creationDate ascending.
     * @param {String} [filter] Accepts filter by `excludedKeys`, `external`, `includedKeys`, `query`, `tags`, `unbounded`, `view`. To learn more about the filter syntax, read the  'Filtering segments' section above.
     * @param {module:api/SegmentsApi~getSegmentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserSegments}
     */
    getSegments(projectKey, environmentKey, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling getSegments");
      }
      // verify the required parameter 'environmentKey' is set
      if (environmentKey === undefined || environmentKey === null) {
        throw new Error("Missing the required parameter 'environmentKey' when calling getSegments");
      }

      let pathParams = {
        'projectKey': projectKey,
        'environmentKey': environmentKey
      };
      let queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset'],
        'sort': opts['sort'],
        'filter': opts['filter']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = UserSegments;
      return this.apiClient.callApi(
        '/api/v2/segments/{projectKey}/{environmentKey}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the patchExpiringTargetsForSegment operation.
     * @callback module:api/SegmentsApi~patchExpiringTargetsForSegmentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExpiringTargetPatchResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update expiring targets for segment
     *  Update expiring context targets for a segment. Updating a context target expiration uses the semantic patch format.  To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).  If the request is well-formed but any of its instructions failed to process, this operation returns status code `200`. In this case, the response `errors` array will be non-empty.  ### Instructions  Semantic patch requests support the following `kind` instructions for updating expiring context targets.  <details> <summary>Click to expand instructions for <strong>updating expiring context targets</strong></summary>  #### addExpiringTarget  Schedules a date and time when LaunchDarkly will remove a context from segment targeting. The segment must already have the context as an individual target.  ##### Parameters  - `targetType`: The type of individual target for this context. Must be either `included` or `excluded`. - `contextKey`: The context key. - `contextKind`: The kind of context being targeted. - `value`: The date when the context should expire from the segment targeting, in Unix milliseconds.  Here's an example:  ```json {   \"instructions\": [{     \"kind\": \"addExpiringTarget\",     \"targetType\": \"included\",     \"contextKey\": \"user-key-123abc\",     \"contextKind\": \"user\",     \"value\": 1754092860000   }] } ```  #### updateExpiringTarget  Updates the date and time when LaunchDarkly will remove a context from segment targeting.  ##### Parameters  - `targetType`: The type of individual target for this context. Must be either `included` or `excluded`. - `contextKey`: The context key. - `contextKind`: The kind of context being targeted. - `value`: The new date when the context should expire from the segment targeting, in Unix milliseconds. - `version`: (Optional) The version of the expiring target to update. If included, update will fail if version doesn't match current version of the expiring target.  Here's an example:  ```json {   \"instructions\": [{     \"kind\": \"updateExpiringTarget\",     \"targetType\": \"included\",     \"contextKey\": \"user-key-123abc\",     \"contextKind\": \"user\",     \"value\": 1754179260000   }] } ```  #### removeExpiringTarget  Removes the scheduled expiration for the context in the segment.  ##### Parameters  - `targetType`: The type of individual target for this context. Must be either `included` or `excluded`. - `contextKey`: The context key. - `contextKind`: The kind of context being targeted.  Here's an example:  ```json {   \"instructions\": [{     \"kind\": \"removeExpiringTarget\",     \"targetType\": \"included\",     \"contextKey\": \"user-key-123abc\",     \"contextKind\": \"user\",   }] } ```  </details> 
     * @param {String} projectKey The project key
     * @param {String} environmentKey The environment key
     * @param {String} segmentKey The segment key
     * @param {module:model/PatchSegmentExpiringTargetInputRep} patchSegmentExpiringTargetInputRep 
     * @param {module:api/SegmentsApi~patchExpiringTargetsForSegmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ExpiringTargetPatchResponse}
     */
    patchExpiringTargetsForSegment(projectKey, environmentKey, segmentKey, patchSegmentExpiringTargetInputRep, callback) {
      let postBody = patchSegmentExpiringTargetInputRep;
      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling patchExpiringTargetsForSegment");
      }
      // verify the required parameter 'environmentKey' is set
      if (environmentKey === undefined || environmentKey === null) {
        throw new Error("Missing the required parameter 'environmentKey' when calling patchExpiringTargetsForSegment");
      }
      // verify the required parameter 'segmentKey' is set
      if (segmentKey === undefined || segmentKey === null) {
        throw new Error("Missing the required parameter 'segmentKey' when calling patchExpiringTargetsForSegment");
      }
      // verify the required parameter 'patchSegmentExpiringTargetInputRep' is set
      if (patchSegmentExpiringTargetInputRep === undefined || patchSegmentExpiringTargetInputRep === null) {
        throw new Error("Missing the required parameter 'patchSegmentExpiringTargetInputRep' when calling patchExpiringTargetsForSegment");
      }

      let pathParams = {
        'projectKey': projectKey,
        'environmentKey': environmentKey,
        'segmentKey': segmentKey
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ExpiringTargetPatchResponse;
      return this.apiClient.callApi(
        '/api/v2/segments/{projectKey}/{segmentKey}/expiring-targets/{environmentKey}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the patchExpiringUserTargetsForSegment operation.
     * @callback module:api/SegmentsApi~patchExpiringUserTargetsForSegmentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExpiringUserTargetPatchResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update expiring user targets for segment
     *  > ### Contexts are now available > > After you have upgraded your LaunchDarkly SDK to use contexts instead of users, you should use [Update expiring targets for segment](https://launchdarkly.com/docs/api/segments/patch-expiring-targets-for-segment) instead of this endpoint. To learn more, read [Contexts](https://launchdarkly.com/docs/home/observability/contexts).  Update expiring user targets for a segment. Updating a user target expiration uses the semantic patch format.  To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).  If the request is well-formed but any of its instructions failed to process, this operation returns status code `200`. In this case, the response `errors` array will be non-empty.  ### Instructions  Semantic patch requests support the following `kind` instructions for updating expiring user targets.  <details> <summary>Click to expand instructions for <strong>updating expiring user targets</strong></summary>  #### addExpireUserTargetDate  Schedules a date and time when LaunchDarkly will remove a user from segment targeting.  ##### Parameters  - `targetType`: A segment's target type, must be either `included` or `excluded`. - `userKey`: The user key. - `value`: The date when the user should expire from the segment targeting, in Unix milliseconds.  #### updateExpireUserTargetDate  Updates the date and time when LaunchDarkly will remove a user from segment targeting.  ##### Parameters  - `targetType`: A segment's target type, must be either `included` or `excluded`. - `userKey`: The user key. - `value`: The new date when the user should expire from the segment targeting, in Unix milliseconds. - `version`: The segment version.  #### removeExpireUserTargetDate  Removes the scheduled expiration for the user in the segment.  ##### Parameters  - `targetType`: A segment's target type, must be either `included` or `excluded`. - `userKey`: The user key.  </details> 
     * @param {String} projectKey The project key
     * @param {String} environmentKey The environment key
     * @param {String} segmentKey The segment key
     * @param {module:model/PatchSegmentRequest} patchSegmentRequest 
     * @param {module:api/SegmentsApi~patchExpiringUserTargetsForSegmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ExpiringUserTargetPatchResponse}
     */
    patchExpiringUserTargetsForSegment(projectKey, environmentKey, segmentKey, patchSegmentRequest, callback) {
      let postBody = patchSegmentRequest;
      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling patchExpiringUserTargetsForSegment");
      }
      // verify the required parameter 'environmentKey' is set
      if (environmentKey === undefined || environmentKey === null) {
        throw new Error("Missing the required parameter 'environmentKey' when calling patchExpiringUserTargetsForSegment");
      }
      // verify the required parameter 'segmentKey' is set
      if (segmentKey === undefined || segmentKey === null) {
        throw new Error("Missing the required parameter 'segmentKey' when calling patchExpiringUserTargetsForSegment");
      }
      // verify the required parameter 'patchSegmentRequest' is set
      if (patchSegmentRequest === undefined || patchSegmentRequest === null) {
        throw new Error("Missing the required parameter 'patchSegmentRequest' when calling patchExpiringUserTargetsForSegment");
      }

      let pathParams = {
        'projectKey': projectKey,
        'environmentKey': environmentKey,
        'segmentKey': segmentKey
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ExpiringUserTargetPatchResponse;
      return this.apiClient.callApi(
        '/api/v2/segments/{projectKey}/{segmentKey}/expiring-user-targets/{environmentKey}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the patchSegment operation.
     * @callback module:api/SegmentsApi~patchSegmentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserSegment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Patch segment
     * Update a segment. The request body must be a valid semantic patch, JSON patch, or JSON merge patch. To learn more the different formats, read [Updates](https://launchdarkly.com/docs/api#updates).  ### Using semantic patches on a segment  To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).  The body of a semantic patch request for updating segments requires an `environmentKey` in addition to `instructions` and an optional `comment`. The body of the request takes the following properties:  * `comment` (string): (Optional) A description of the update. * `environmentKey` (string): (Required) The key of the LaunchDarkly environment. * `instructions` (array): (Required) A list of actions the update should perform. Each action in the list must be an object with a `kind` property that indicates the instruction. If the action requires parameters, you must include those parameters as additional fields in the object.  ### Instructions  Semantic patch requests support the following `kind` instructions for updating segments.  <details> <summary>Click to expand instructions for <strong>updating segment details and settings</strong></summary>  #### addTags  Adds tags to the segment.  ##### Parameters  - `values`: A list of tags to add.  Here's an example:  ```json {   \"instructions\": [{     \"kind\": \"addTags\",     \"values\": [\"tag1\", \"tag2\"]   }] } ```  #### removeTags  Removes tags from the segment.  ##### Parameters  - `values`: A list of tags to remove.  Here's an example:  ```json {   \"instructions\": [{     \"kind\": \"removeTags\",     \"values\": [\"tag1\", \"tag2\"]   }] } ```  #### updateName  Updates the name of the segment.  ##### Parameters  - `value`: Name of the segment.  Here's an example:  ```json {   \"instructions\": [{     \"kind\": \"updateName\",     \"value\": \"Updated segment name\"   }] } ```  </details>  <details> <summary>Click to expand instructions for <strong>updating segment individual targets</strong></summary>  #### addExcludedTargets  Adds context keys to the individual context targets excluded from the segment for the specified `contextKind`. Returns an error if this causes the same context key to be both included and excluded, or if the number of operations on targets exceeds the batch limit of 1,500.  ##### Parameters  - `contextKind`: The context kind the targets should be added to. - `values`: List of keys.  Here's an example:  ```json {   \"instructions\": [{     \"kind\": \"addExcludedTargets\",     \"contextKind\": \"org\",     \"values\": [ \"org-key-123abc\", \"org-key-456def\" ]   }] } ```  #### addExcludedUsers  Adds user keys to the individual user targets excluded from the segment. Returns an error if this causes the same user key to be both included and excluded, or if the number of operations on targets exceeds the batch limit of 1,500. If you are working with contexts, use `addExcludedTargets` instead of this instruction.  ##### Parameters  - `values`: List of user keys.  Here's an example:  ```json {   \"instructions\": [{     \"kind\": \"addExcludedUsers\",     \"values\": [ \"user-key-123abc\", \"user-key-456def\" ]   }] } ```  #### addIncludedTargets  Adds context keys to the individual context targets included in the segment for the specified `contextKind`. Returns an error if this causes the same context key to be both included and excluded, or if the number of operations on targets exceeds the batch limit of 1,500.  ##### Parameters  - `contextKind`: The context kind the targets should be added to. - `values`: List of keys.  Here's an example:  ```json {   \"instructions\": [{     \"kind\": \"addIncludedTargets\",     \"contextKind\": \"org\",     \"values\": [ \"org-key-123abc\", \"org-key-456def\" ]   }] } ```  #### addIncludedUsers  Adds user keys to the individual user targets included in the segment. Returns an error if this causes the same user key to be both included and excluded, or if the number of operations on targets exceeds the batch limit of 1,500. If you are working with contexts, use `addIncludedTargets` instead of this instruction.  ##### Parameters  - `values`: List of user keys.  Here's an example:  ```json {   \"instructions\": [{     \"kind\": \"addIncludedUsers\",     \"values\": [ \"user-key-123abc\", \"user-key-456def\" ]   }] } ```  #### removeExcludedTargets  Removes context keys from the individual context targets excluded from the segment for the specified `contextKind`. Returns an error if the number of operations on targets exceeds the batch limit of 1,500.  ##### Parameters  - `contextKind`: The context kind the targets should be removed from. - `values`: List of keys.  Here's an example:  ```json {   \"instructions\": [{     \"kind\": \"removeExcludedTargets\",     \"contextKind\": \"org\",     \"values\": [ \"org-key-123abc\", \"org-key-456def\" ]   }] } ```  #### removeExcludedUsers  Removes user keys from the individual user targets excluded from the segment. If you are working with contexts, use `removeExcludedTargets` instead of this instruction. Returns an error if the number of operations on targets exceeds the batch limit of 1,500.  ##### Parameters  - `values`: List of user keys.  Here's an example:  ```json {   \"instructions\": [{     \"kind\": \"removeExcludedUsers\",     \"values\": [ \"user-key-123abc\", \"user-key-456def\" ]   }] } ```  #### removeIncludedTargets  Removes context keys from the individual context targets included in the segment for the specified `contextKind`. Returns an error if the number of operations on targets exceeds the batch limit of 1,500.  ##### Parameters  - `contextKind`: The context kind the targets should be removed from. - `values`: List of keys.  Here's an example:  ```json {   \"instructions\": [{     \"kind\": \"removeIncludedTargets\",     \"contextKind\": \"org\",     \"values\": [ \"org-key-123abc\", \"org-key-456def\" ]   }] } ```  #### removeIncludedUsers  Removes user keys from the individual user targets included in the segment. If you are working with contexts, use `removeIncludedTargets` instead of this instruction. Returns an error if the number of operations on targets exceeds the batch limit of 1,500.  ##### Parameters  - `values`: List of user keys.  Here's an example:  ```json {   \"instructions\": [{     \"kind\": \"removeIncludedUsers\",     \"values\": [ \"user-key-123abc\", \"user-key-456def\" ]   }] } ```  </details>  <details> <summary>Click to expand instructions for <strong>updating segment targeting rules</strong></summary>  #### addClauses  Adds the given clauses to the rule indicated by `ruleId`.  ##### Parameters  - `clauses`: Array of clause objects, with `contextKind` (string), `attribute` (string), `op` (string), `negate` (boolean), and `values` (array of strings, numbers, or dates) properties. The `contextKind`, if not provided, defaults to `user`. The `contextKind`, `attribute`, and `values` are case sensitive. The `op` must be lower-case. - `ruleId`: ID of a rule in the segment.  Here's an example:  ```json {   \"instructions\": [{     \"kind\": \"addClauses\",     \"clauses\": [       {         \"attribute\": \"email\",         \"negate\": false,         \"op\": \"contains\",         \"values\": [\"value1\"]       }     ],     \"ruleId\": \"a902ef4a-2faf-4eaf-88e1-ecc356708a29\",   }] } ```  #### addRule  Adds a new targeting rule to the segment. The rule may contain `clauses`.  ##### Parameters  - `clauses`: Array of clause objects, with `contextKind` (string), `attribute` (string), `op` (string), `negate` (boolean), and `values` (array of strings, numbers, or dates) properties. The `contextKind`, if not provided, defaults to `user`. The `contextKind`, `attribute`, and `values` are case sensitive. The `op` must be lower-case. - `description`: A description of the rule.  Here's an example:  ```json {   \"instructions\": [{     \"kind\": \"addRule\",     \"clauses\": [       {         \"attribute\": \"email\",         \"op\": \"contains\",         \"negate\": false,         \"values\": [\"@launchdarkly.com\"]       }     ],     \"description\": \"Targeting rule for LaunchDarkly employees\",   }] } ```  #### addValuesToClause  Adds `values` to the values of the clause that `ruleId` and `clauseId` indicate. Does not update the context kind, attribute, or operator.  ##### Parameters  - `ruleId`: ID of a rule in the segment. - `clauseId`: ID of a clause in that rule. - `values`: Array of strings, case sensitive.  Here's an example:  ```json {   \"instructions\": [{     \"kind\": \"addValuesToClause\",     \"ruleId\": \"a902ef4a-2faf-4eaf-88e1-ecc356708a29\",     \"clauseId\": \"10a58772-3121-400f-846b-b8a04e8944ed\",     \"values\": [\"beta_testers\"]   }] } ```  #### removeClauses  Removes the clauses specified by `clauseIds` from the rule indicated by `ruleId`.  ##### Parameters  - `ruleId`: ID of a rule in the segment. - `clauseIds`: Array of IDs of clauses in the rule.  Here's an example:  ```json {   \"instructions\": [{     \"kind\": \"removeClauses\",     \"ruleId\": \"a902ef4a-2faf-4eaf-88e1-ecc356708a29\",     \"clauseIds\": [\"10a58772-3121-400f-846b-b8a04e8944ed\", \"36a461dc-235e-4b08-97b9-73ce9365873e\"]   }] } ```  #### removeRule  Removes the targeting rule specified by `ruleId`. Does nothing if the rule does not exist.  ##### Parameters  - `ruleId`: ID of a rule in the segment.  Here's an example:  ```json {   \"instructions\": [{     \"kind\": \"removeRule\",     \"ruleId\": \"a902ef4a-2faf-4eaf-88e1-ecc356708a29\"   }] } ```  #### removeValuesFromClause  Removes `values` from the values of the clause indicated by `ruleId` and `clauseId`. Does not update the context kind, attribute, or operator.  ##### Parameters  - `ruleId`: ID of a rule in the segment. - `clauseId`: ID of a clause in that rule. - `values`: Array of strings, case sensitive.  Here's an example:  ```json {   \"instructions\": [{     \"kind\": \"removeValuesFromClause\",     \"ruleId\": \"a902ef4a-2faf-4eaf-88e1-ecc356708a29\",     \"clauseId\": \"10a58772-3121-400f-846b-b8a04e8944ed\",     \"values\": [\"beta_testers\"]   }] } ```  #### reorderRules  Rearranges the rules to match the order given in `ruleIds`. Returns an error if `ruleIds` does not match the current set of rules in the segment.  ##### Parameters  - `ruleIds`: Array of IDs of all targeting rules in the segment.  Here's an example:  ```json {   \"instructions\": [{     \"kind\": \"reorderRules\",     \"ruleIds\": [\"a902ef4a-2faf-4eaf-88e1-ecc356708a29\", \"63c238d1-835d-435e-8f21-c8d5e40b2a3d\"]   }] } ```  #### updateClause  Replaces the clause indicated by `ruleId` and `clauseId` with `clause`.  ##### Parameters  - `ruleId`: ID of a rule in the segment. - `clauseId`: ID of a clause in that rule. - `clause`: New `clause` object, with `contextKind` (string), `attribute` (string), `op` (string), `negate` (boolean), and `values` (array of strings, numbers, or dates) properties. The `contextKind`, if not provided, defaults to `user`. The `contextKind`, `attribute`, and `values` are case sensitive. The `op` must be lower-case.  Here's an example:  ```json {   \"instructions\": [{     \"kind\": \"updateClause\",     \"ruleId\": \"a902ef4a-2faf-4eaf-88e1-ecc356708a29\",     \"clauseId\": \"10c7462a-2062-45ba-a8bb-dfb3de0f8af5\",     \"clause\": {       \"contextKind\": \"user\",       \"attribute\": \"country\",       \"op\": \"in\",       \"negate\": false,       \"values\": [\"Mexico\", \"Canada\"]     }   }] } ```  #### updateRuleDescription  Updates the description of the segment targeting rule.  ##### Parameters  - `description`: The new human-readable description for this rule. - `ruleId`: The ID of the rule. You can retrieve this by making a GET request for the segment.  Here's an example:  ```json {   \"instructions\": [{     \"kind\": \"updateRuleDescription\",     \"description\": \"New rule description\",     \"ruleId\": \"a902ef4a-2faf-4eaf-88e1-ecc356708a29\"   }] } ```  #### updateRuleRolloutAndContextKind  For a rule that includes a percentage of targets, updates the percentage and the context kind of the targets to include.  ##### Parameters  - `ruleId`: The ID of a targeting rule in the segment that includes a percentage of targets. - `weight`: The weight, in thousandths of a percent (0-100000). - `contextKind`: The context kind.  Here's an example:  ```json {   \"instructions\": [{     \"kind\": \"reorderRules\",     \"ruleId\": \"a902ef4a-2faf-4eaf-88e1-ecc356708a29\",     \"weight\": \"20000\",     \"contextKind\": \"device\"   }] } ```  </details>  <details> <summary>Click to expand instructions for <strong>working with Big Segments</strong></summary>  A \"big segment\" is a segment that is either a synced segment, or a list-based segment with more than 15,000 entries that includes only one targeted context kind. LaunchDarkly uses different implementations for different types of segments so that all of your segments have good performance.  The following semantic patch instructions apply only to these [larger list-based segments](https://launchdarkly.com/docs/home/flags/segments-create#create-larger-list-based-segments).  #### addBigSegmentExcludedTargets  For use with [larger list-based segments](https://launchdarkly.com/docs/home/flags/segments-create#create-larger-list-based-segments) ONLY. Adds context keys to the context targets excluded from the segment. Returns an error if this causes the same context key to be both included and excluded.  ##### Parameters  - `values`: List of context keys.  Here's an example:  ```json {   \"instructions\": [{     \"kind\": \"addBigSegmentExcludedTargets\",     \"values\": [ \"org-key-123abc\", \"org-key-456def\" ]   }] } ```  #### addBigSegmentIncludedTargets  For use with [larger list-based segments](https://launchdarkly.com/docs/home/flags/segments-create#create-larger-list-based-segments) ONLY. Adds context keys to the context targets included in the segment. Returns an error if this causes the same context key to be both included and excluded.  ##### Parameters  - `values`: List of context keys.  Here's an example:  ```json {   \"instructions\": [{     \"kind\": \"addBigSegmentIncludedTargets\",     \"values\": [ \"org-key-123abc\", \"org-key-456def\" ]   }] } ```  #### processBigSegmentImport  For use with [larger list-based segments](https://launchdarkly.com/docs/home/flags/segments-create#create-larger-list-based-segments) ONLY. Processes a segment import.  ##### Parameters  - `importId`: The ID of the import. The import ID is returned in the `Location` header as part of the [Create big segment import](https://launchdarkly.com/docs/api/segments/create-big-segment-import) request.  Here's an example:  ```json {   \"instructions\": [{     \"kind\": \"processBigSegmentImport\",     \"importId\": \"a902ef4a-2faf-4eaf-88e1-ecc356708a29\"   }] } ```   #### removeBigSegmentExcludedTargets  For use with [larger list-based segments](https://launchdarkly.com/docs/home/flags/segments-create#create-larger-list-based-segments) ONLY. Removes context keys from the context targets excluded from the segment.  ##### Parameters  - `values`: List of context keys.  Here's an example:  ```json {   \"instructions\": [{     \"kind\": \"removeBigSegmentExcludedTargets\",     \"values\": [ \"org-key-123abc\", \"org-key-456def\" ]   }] } ```  #### removeBigSegmentIncludedTargets  For use with [larger list-based segments](https://launchdarkly.com/docs/home/flags/segments-create#create-larger-list-based-segments) ONLY. Removes context keys from the context targets included in the segment.  ##### Parameters  - `values`: List of context keys.  Here's an example:  ```json {   \"instructions\": [{     \"kind\": \"removeBigSegmentIncludedTargets\",     \"values\": [ \"org-key-123abc\", \"org-key-456def\" ]   }] } ```  </details>  ### Using JSON patches on a segment  If you do not include the header described above, you can use a [JSON patch](https://launchdarkly.com/docs/api#updates-using-json-patch) or [JSON merge patch](https://datatracker.ietf.org/doc/html/rfc7386) representation of the desired changes.  For example, to update the description for a segment with a JSON patch, use the following request body:  ```json {   \"patch\": [     {       \"op\": \"replace\",       \"path\": \"/description\",       \"value\": \"new description\"     }   ] } ```  To update fields in the segment that are arrays, set the `path` to the name of the field and then append `/<array index>`. Use `/0` to add the new entry to the beginning of the array. Use `/-` to add the new entry to the end of the array.  For example, to add a rule to a segment, use the following request body:  ```json {   \"patch\":[     {       \"op\": \"add\",       \"path\": \"/rules/0\",       \"value\": {         \"clauses\": [{ \"contextKind\": \"user\", \"attribute\": \"email\", \"op\": \"endsWith\", \"values\": [\".edu\"], \"negate\": false }]       }     }   ] } ```  To add or remove targets from segments, we recommend using semantic patch. Semantic patch for segments includes specific instructions for adding and removing both included and excluded targets. 
     * @param {String} projectKey The project key
     * @param {String} environmentKey The environment key
     * @param {String} segmentKey The segment key
     * @param {module:model/PatchWithComment} patchWithComment 
     * @param {module:api/SegmentsApi~patchSegmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserSegment}
     */
    patchSegment(projectKey, environmentKey, segmentKey, patchWithComment, callback) {
      let postBody = patchWithComment;
      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling patchSegment");
      }
      // verify the required parameter 'environmentKey' is set
      if (environmentKey === undefined || environmentKey === null) {
        throw new Error("Missing the required parameter 'environmentKey' when calling patchSegment");
      }
      // verify the required parameter 'segmentKey' is set
      if (segmentKey === undefined || segmentKey === null) {
        throw new Error("Missing the required parameter 'segmentKey' when calling patchSegment");
      }
      // verify the required parameter 'patchWithComment' is set
      if (patchWithComment === undefined || patchWithComment === null) {
        throw new Error("Missing the required parameter 'patchWithComment' when calling patchSegment");
      }

      let pathParams = {
        'projectKey': projectKey,
        'environmentKey': environmentKey,
        'segmentKey': segmentKey
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = UserSegment;
      return this.apiClient.callApi(
        '/api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postSegment operation.
     * @callback module:api/SegmentsApi~postSegmentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserSegment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create segment
     * Create a new segment.
     * @param {String} projectKey The project key
     * @param {String} environmentKey The environment key
     * @param {module:model/SegmentBody} segmentBody 
     * @param {module:api/SegmentsApi~postSegmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserSegment}
     */
    postSegment(projectKey, environmentKey, segmentBody, callback) {
      let postBody = segmentBody;
      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling postSegment");
      }
      // verify the required parameter 'environmentKey' is set
      if (environmentKey === undefined || environmentKey === null) {
        throw new Error("Missing the required parameter 'environmentKey' when calling postSegment");
      }
      // verify the required parameter 'segmentBody' is set
      if (segmentBody === undefined || segmentBody === null) {
        throw new Error("Missing the required parameter 'segmentBody' when calling postSegment");
      }

      let pathParams = {
        'projectKey': projectKey,
        'environmentKey': environmentKey
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = UserSegment;
      return this.apiClient.callApi(
        '/api/v2/segments/{projectKey}/{environmentKey}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateBigSegmentContextTargets operation.
     * @callback module:api/SegmentsApi~updateBigSegmentContextTargetsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update context targets on a big segment
     * Update context targets included or excluded in a big segment. Big segments include larger list-based segments and synced segments. This operation does not support standard segments.
     * @param {String} projectKey The project key
     * @param {String} environmentKey The environment key
     * @param {String} segmentKey The segment key
     * @param {module:model/SegmentUserState} segmentUserState 
     * @param {module:api/SegmentsApi~updateBigSegmentContextTargetsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    updateBigSegmentContextTargets(projectKey, environmentKey, segmentKey, segmentUserState, callback) {
      let postBody = segmentUserState;
      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling updateBigSegmentContextTargets");
      }
      // verify the required parameter 'environmentKey' is set
      if (environmentKey === undefined || environmentKey === null) {
        throw new Error("Missing the required parameter 'environmentKey' when calling updateBigSegmentContextTargets");
      }
      // verify the required parameter 'segmentKey' is set
      if (segmentKey === undefined || segmentKey === null) {
        throw new Error("Missing the required parameter 'segmentKey' when calling updateBigSegmentContextTargets");
      }
      // verify the required parameter 'segmentUserState' is set
      if (segmentUserState === undefined || segmentUserState === null) {
        throw new Error("Missing the required parameter 'segmentUserState' when calling updateBigSegmentContextTargets");
      }

      let pathParams = {
        'projectKey': projectKey,
        'environmentKey': environmentKey,
        'segmentKey': segmentKey
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/contexts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateBigSegmentTargets operation.
     * @callback module:api/SegmentsApi~updateBigSegmentTargetsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update user context targets on a big segment
     * Update user context targets included or excluded in a big segment. Big segments include larger list-based segments and synced segments. This operation does not support standard segments.
     * @param {String} projectKey The project key
     * @param {String} environmentKey The environment key
     * @param {String} segmentKey The segment key
     * @param {module:model/SegmentUserState} segmentUserState 
     * @param {module:api/SegmentsApi~updateBigSegmentTargetsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    updateBigSegmentTargets(projectKey, environmentKey, segmentKey, segmentUserState, callback) {
      let postBody = segmentUserState;
      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling updateBigSegmentTargets");
      }
      // verify the required parameter 'environmentKey' is set
      if (environmentKey === undefined || environmentKey === null) {
        throw new Error("Missing the required parameter 'environmentKey' when calling updateBigSegmentTargets");
      }
      // verify the required parameter 'segmentKey' is set
      if (segmentKey === undefined || segmentKey === null) {
        throw new Error("Missing the required parameter 'segmentKey' when calling updateBigSegmentTargets");
      }
      // verify the required parameter 'segmentUserState' is set
      if (segmentUserState === undefined || segmentUserState === null) {
        throw new Error("Missing the required parameter 'segmentUserState' when calling updateBigSegmentTargets");
      }

      let pathParams = {
        'projectKey': projectKey,
        'environmentKey': environmentKey,
        'segmentKey': segmentKey
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/users', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
