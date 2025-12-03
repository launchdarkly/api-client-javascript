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


import ApiClient from './ApiClient';
import AIConfig from './model/AIConfig';
import AIConfigMaintainer from './model/AIConfigMaintainer';
import AIConfigPatch from './model/AIConfigPatch';
import AIConfigPost from './model/AIConfigPost';
import AIConfigRep from './model/AIConfigRep';
import AIConfigTargeting from './model/AIConfigTargeting';
import AIConfigTargetingDefaults from './model/AIConfigTargetingDefaults';
import AIConfigTargetingEnvironment from './model/AIConfigTargetingEnvironment';
import AIConfigTargetingEnvironmentFallthrough from './model/AIConfigTargetingEnvironmentFallthrough';
import AIConfigTargetingEnvironmentFallthroughRollout from './model/AIConfigTargetingEnvironmentFallthroughRollout';
import AIConfigTargetingEnvironmentFallthroughRolloutExperimentationAllocation from './model/AIConfigTargetingEnvironmentFallthroughRolloutExperimentationAllocation';
import AIConfigTargetingEnvironmentFallthroughRolloutVariation from './model/AIConfigTargetingEnvironmentFallthroughRolloutVariation';
import AIConfigTargetingEnvironmentRule from './model/AIConfigTargetingEnvironmentRule';
import AIConfigTargetingEnvironmentRuleClause from './model/AIConfigTargetingEnvironmentRuleClause';
import AIConfigTargetingEnvironmentTarget from './model/AIConfigTargetingEnvironmentTarget';
import AIConfigTargetingPatch from './model/AIConfigTargetingPatch';
import AIConfigTargetingVariation from './model/AIConfigTargetingVariation';
import AIConfigTargetingVariationValue from './model/AIConfigTargetingVariationValue';
import AIConfigVariation from './model/AIConfigVariation';
import AIConfigVariationPatch from './model/AIConfigVariationPatch';
import AIConfigVariationPost from './model/AIConfigVariationPost';
import AIConfigVariationsResponse from './model/AIConfigVariationsResponse';
import AIConfigs from './model/AIConfigs';
import AIConfigsSummary from './model/AIConfigsSummary';
import AITool from './model/AITool';
import AIToolPatch from './model/AIToolPatch';
import AIToolPost from './model/AIToolPost';
import AITools from './model/AITools';
import Access from './model/Access';
import AccessAllowedReason from './model/AccessAllowedReason';
import AccessAllowedRep from './model/AccessAllowedRep';
import AccessDenied from './model/AccessDenied';
import AccessDeniedReason from './model/AccessDeniedReason';
import AccessTokenPost from './model/AccessTokenPost';
import ActionInput from './model/ActionInput';
import ActionOutput from './model/ActionOutput';
import AiConfigsAccess from './model/AiConfigsAccess';
import AiConfigsAccessAllowedReason from './model/AiConfigsAccessAllowedReason';
import AiConfigsAccessAllowedRep from './model/AiConfigsAccessAllowedRep';
import AiConfigsAccessDenied from './model/AiConfigsAccessDenied';
import AiConfigsAccessDeniedReason from './model/AiConfigsAccessDeniedReason';
import AiConfigsExperimentEnabledPeriodRep from './model/AiConfigsExperimentEnabledPeriodRep';
import AiConfigsExperimentEnvironmentSettingRep from './model/AiConfigsExperimentEnvironmentSettingRep';
import AiConfigsExperimentInfoRep from './model/AiConfigsExperimentInfoRep';
import AiConfigsFilter from './model/AiConfigsFilter';
import AiConfigsLegacyExperimentRep from './model/AiConfigsLegacyExperimentRep';
import AiConfigsLink from './model/AiConfigsLink';
import AiConfigsMaintainerTeam from './model/AiConfigsMaintainerTeam';
import AiConfigsMemberSummary from './model/AiConfigsMemberSummary';
import AiConfigsMetricDataSourceRefRep from './model/AiConfigsMetricDataSourceRefRep';
import AiConfigsMetricEventDefaultRep from './model/AiConfigsMetricEventDefaultRep';
import AiConfigsMetricListingRep from './model/AiConfigsMetricListingRep';
import AiConfigsModification from './model/AiConfigsModification';
import AnnouncementAccess from './model/AnnouncementAccess';
import AnnouncementAccessAllowedReason from './model/AnnouncementAccessAllowedReason';
import AnnouncementAccessAllowedRep from './model/AnnouncementAccessAllowedRep';
import AnnouncementAccessDenied from './model/AnnouncementAccessDenied';
import AnnouncementAccessDeniedReason from './model/AnnouncementAccessDeniedReason';
import AnnouncementAccessRep from './model/AnnouncementAccessRep';
import AnnouncementLink from './model/AnnouncementLink';
import AnnouncementPaginatedLinks from './model/AnnouncementPaginatedLinks';
import AnnouncementPatchOperation from './model/AnnouncementPatchOperation';
import AnnouncementResponse from './model/AnnouncementResponse';
import AnnouncementResponseLinks from './model/AnnouncementResponseLinks';
import ApplicationCollectionRep from './model/ApplicationCollectionRep';
import ApplicationFlagCollectionRep from './model/ApplicationFlagCollectionRep';
import ApplicationRep from './model/ApplicationRep';
import ApplicationVersionRep from './model/ApplicationVersionRep';
import ApplicationVersionsCollectionRep from './model/ApplicationVersionsCollectionRep';
import ApprovalRequestResponse from './model/ApprovalRequestResponse';
import ApprovalRequestSetting from './model/ApprovalRequestSetting';
import ApprovalRequestSettingWithEnvs from './model/ApprovalRequestSettingWithEnvs';
import ApprovalRequestSettingsPatch from './model/ApprovalRequestSettingsPatch';
import ApprovalSettings from './model/ApprovalSettings';
import ApprovalsCapabilityConfig from './model/ApprovalsCapabilityConfig';
import AssignedToRep from './model/AssignedToRep';
import Audience from './model/Audience';
import AudienceConfiguration from './model/AudienceConfiguration';
import AudiencePost from './model/AudiencePost';
import AuditLogEntryListingRep from './model/AuditLogEntryListingRep';
import AuditLogEntryListingRepCollection from './model/AuditLogEntryListingRepCollection';
import AuditLogEntryRep from './model/AuditLogEntryRep';
import AuditLogEventsHookCapabilityConfigPost from './model/AuditLogEventsHookCapabilityConfigPost';
import AuditLogEventsHookCapabilityConfigRep from './model/AuditLogEventsHookCapabilityConfigRep';
import AuthorizedAppDataRep from './model/AuthorizedAppDataRep';
import BigSegmentStoreIntegration from './model/BigSegmentStoreIntegration';
import BigSegmentStoreIntegrationCollection from './model/BigSegmentStoreIntegrationCollection';
import BigSegmentStoreIntegrationCollectionLinks from './model/BigSegmentStoreIntegrationCollectionLinks';
import BigSegmentStoreIntegrationLinks from './model/BigSegmentStoreIntegrationLinks';
import BigSegmentStoreStatus from './model/BigSegmentStoreStatus';
import BigSegmentTarget from './model/BigSegmentTarget';
import BooleanDefaults from './model/BooleanDefaults';
import BooleanFlagDefaults from './model/BooleanFlagDefaults';
import BranchCollectionRep from './model/BranchCollectionRep';
import BranchRep from './model/BranchRep';
import BulkEditMembersRep from './model/BulkEditMembersRep';
import BulkEditTeamsRep from './model/BulkEditTeamsRep';
import CallerIdentityRep from './model/CallerIdentityRep';
import CapabilityConfigPost from './model/CapabilityConfigPost';
import CapabilityConfigRep from './model/CapabilityConfigRep';
import Clause from './model/Clause';
import Client from './model/Client';
import ClientCollection from './model/ClientCollection';
import ClientSideAvailability from './model/ClientSideAvailability';
import ClientSideAvailabilityPost from './model/ClientSideAvailabilityPost';
import CompletedBy from './model/CompletedBy';
import ConditionInput from './model/ConditionInput';
import ConditionOutput from './model/ConditionOutput';
import Conflict from './model/Conflict';
import ConflictOutput from './model/ConflictOutput';
import ContextAttributeName from './model/ContextAttributeName';
import ContextAttributeNames from './model/ContextAttributeNames';
import ContextAttributeNamesCollection from './model/ContextAttributeNamesCollection';
import ContextAttributeValue from './model/ContextAttributeValue';
import ContextAttributeValues from './model/ContextAttributeValues';
import ContextAttributeValuesCollection from './model/ContextAttributeValuesCollection';
import ContextInstanceEvaluation from './model/ContextInstanceEvaluation';
import ContextInstanceEvaluationReason from './model/ContextInstanceEvaluationReason';
import ContextInstanceEvaluations from './model/ContextInstanceEvaluations';
import ContextInstanceRecord from './model/ContextInstanceRecord';
import ContextInstanceSearch from './model/ContextInstanceSearch';
import ContextInstanceSegmentMembership from './model/ContextInstanceSegmentMembership';
import ContextInstanceSegmentMemberships from './model/ContextInstanceSegmentMemberships';
import ContextInstances from './model/ContextInstances';
import ContextKindRep from './model/ContextKindRep';
import ContextKindsCollectionRep from './model/ContextKindsCollectionRep';
import ContextRecord from './model/ContextRecord';
import ContextSearch from './model/ContextSearch';
import Contexts from './model/Contexts';
import CopiedFromEnv from './model/CopiedFromEnv';
import CoreLink from './model/CoreLink';
import CovarianceInfoRep from './model/CovarianceInfoRep';
import CreateAnnouncementBody from './model/CreateAnnouncementBody';
import CreateApprovalRequestRequest from './model/CreateApprovalRequestRequest';
import CreateCopyFlagConfigApprovalRequestRequest from './model/CreateCopyFlagConfigApprovalRequestRequest';
import CreateFlagConfigApprovalRequestRequest from './model/CreateFlagConfigApprovalRequestRequest';
import CreatePhaseInput from './model/CreatePhaseInput';
import CreateReleaseInput from './model/CreateReleaseInput';
import CreateReleasePipelineInput from './model/CreateReleasePipelineInput';
import CreateWorkflowTemplateInput from './model/CreateWorkflowTemplateInput';
import CustomProperty from './model/CustomProperty';
import CustomRole from './model/CustomRole';
import CustomRolePost from './model/CustomRolePost';
import CustomRoles from './model/CustomRoles';
import CustomWorkflowInput from './model/CustomWorkflowInput';
import CustomWorkflowMeta from './model/CustomWorkflowMeta';
import CustomWorkflowOutput from './model/CustomWorkflowOutput';
import CustomWorkflowStageMeta from './model/CustomWorkflowStageMeta';
import CustomWorkflowsListingOutput from './model/CustomWorkflowsListingOutput';
import DefaultClientSideAvailability from './model/DefaultClientSideAvailability';
import DefaultClientSideAvailabilityPost from './model/DefaultClientSideAvailabilityPost';
import Defaults from './model/Defaults';
import DependentExperimentRep from './model/DependentExperimentRep';
import DependentFlag from './model/DependentFlag';
import DependentFlagEnvironment from './model/DependentFlagEnvironment';
import DependentFlagsByEnvironment from './model/DependentFlagsByEnvironment';
import DependentMeasuredRolloutRep from './model/DependentMeasuredRolloutRep';
import DependentMetricGroupRep from './model/DependentMetricGroupRep';
import DependentMetricGroupRepWithMetrics from './model/DependentMetricGroupRepWithMetrics';
import DependentMetricOrMetricGroupRep from './model/DependentMetricOrMetricGroupRep';
import DeploymentCollectionRep from './model/DeploymentCollectionRep';
import DeploymentRep from './model/DeploymentRep';
import Destination from './model/Destination';
import DestinationPost from './model/DestinationPost';
import Destinations from './model/Destinations';
import DynamicOptions from './model/DynamicOptions';
import DynamicOptionsParser from './model/DynamicOptionsParser';
import Endpoint from './model/Endpoint';
import Environment from './model/Environment';
import EnvironmentPost from './model/EnvironmentPost';
import EnvironmentSummary from './model/EnvironmentSummary';
import Environments from './model/Environments';
import Error from './model/Error';
import EvaluationReason from './model/EvaluationReason';
import EvaluationsSummary from './model/EvaluationsSummary';
import EventFilter from './model/EventFilter';
import ExecutionOutput from './model/ExecutionOutput';
import ExpandableApprovalRequestResponse from './model/ExpandableApprovalRequestResponse';
import ExpandableApprovalRequestsResponse from './model/ExpandableApprovalRequestsResponse';
import ExpandedAIConfig from './model/ExpandedAIConfig';
import ExpandedDirectlyLinkedFlag from './model/ExpandedDirectlyLinkedFlag';
import ExpandedDirectlyLinkedFlags from './model/ExpandedDirectlyLinkedFlags';
import ExpandedDirectlyLinkedSegment from './model/ExpandedDirectlyLinkedSegment';
import ExpandedDirectlyLinkedSegments from './model/ExpandedDirectlyLinkedSegments';
import ExpandedFlag from './model/ExpandedFlag';
import ExpandedFlagRep from './model/ExpandedFlagRep';
import ExpandedLinkedAIConfigs from './model/ExpandedLinkedAIConfigs';
import ExpandedLinkedFlags from './model/ExpandedLinkedFlags';
import ExpandedLinkedMetrics from './model/ExpandedLinkedMetrics';
import ExpandedLinkedResources from './model/ExpandedLinkedResources';
import ExpandedLinkedResourcesAIConfigs from './model/ExpandedLinkedResourcesAIConfigs';
import ExpandedLinkedResourcesFlags from './model/ExpandedLinkedResourcesFlags';
import ExpandedLinkedResourcesItems from './model/ExpandedLinkedResourcesItems';
import ExpandedLinkedResourcesMetrics from './model/ExpandedLinkedResourcesMetrics';
import ExpandedLinkedResourcesSegments from './model/ExpandedLinkedResourcesSegments';
import ExpandedLinkedSegments from './model/ExpandedLinkedSegments';
import ExpandedMetric from './model/ExpandedMetric';
import ExpandedResourceRep from './model/ExpandedResourceRep';
import ExpandedSegment from './model/ExpandedSegment';
import Experiment from './model/Experiment';
import ExperimentAllocationRep from './model/ExperimentAllocationRep';
import ExperimentCollectionRep from './model/ExperimentCollectionRep';
import ExperimentEnabledPeriodRep from './model/ExperimentEnabledPeriodRep';
import ExperimentEnvironmentSettingRep from './model/ExperimentEnvironmentSettingRep';
import ExperimentInfoRep from './model/ExperimentInfoRep';
import ExperimentPatchInput from './model/ExperimentPatchInput';
import ExperimentPost from './model/ExperimentPost';
import ExpiringTarget from './model/ExpiringTarget';
import ExpiringTargetError from './model/ExpiringTargetError';
import ExpiringTargetGetResponse from './model/ExpiringTargetGetResponse';
import ExpiringTargetPatchResponse from './model/ExpiringTargetPatchResponse';
import ExpiringUserTargetGetResponse from './model/ExpiringUserTargetGetResponse';
import ExpiringUserTargetItem from './model/ExpiringUserTargetItem';
import ExpiringUserTargetPatchResponse from './model/ExpiringUserTargetPatchResponse';
import Export from './model/Export';
import Extinction from './model/Extinction';
import ExtinctionCollectionRep from './model/ExtinctionCollectionRep';
import FailedResourceLink from './model/FailedResourceLink';
import FailureReasonRep from './model/FailureReasonRep';
import FeatureFlag from './model/FeatureFlag';
import FeatureFlagBody from './model/FeatureFlagBody';
import FeatureFlagConfig from './model/FeatureFlagConfig';
import FeatureFlagScheduledChange from './model/FeatureFlagScheduledChange';
import FeatureFlagScheduledChanges from './model/FeatureFlagScheduledChanges';
import FeatureFlagStatus from './model/FeatureFlagStatus';
import FeatureFlagStatusAcrossEnvironments from './model/FeatureFlagStatusAcrossEnvironments';
import FeatureFlagStatuses from './model/FeatureFlagStatuses';
import FeatureFlags from './model/FeatureFlags';
import FileRep from './model/FileRep';
import Filter from './model/Filter';
import FlagConfigApprovalRequestResponse from './model/FlagConfigApprovalRequestResponse';
import FlagConfigApprovalRequestsResponse from './model/FlagConfigApprovalRequestsResponse';
import FlagConfigEvaluation from './model/FlagConfigEvaluation';
import FlagConfigMigrationSettingsRep from './model/FlagConfigMigrationSettingsRep';
import FlagCopyConfigEnvironment from './model/FlagCopyConfigEnvironment';
import FlagCopyConfigPost from './model/FlagCopyConfigPost';
import FlagDefaultsRep from './model/FlagDefaultsRep';
import FlagEventCollectionRep from './model/FlagEventCollectionRep';
import FlagEventExperiment from './model/FlagEventExperiment';
import FlagEventExperimentCollection from './model/FlagEventExperimentCollection';
import FlagEventExperimentIteration from './model/FlagEventExperimentIteration';
import FlagEventImpactRep from './model/FlagEventImpactRep';
import FlagEventMemberRep from './model/FlagEventMemberRep';
import FlagEventRep from './model/FlagEventRep';
import FlagFollowersByProjEnvGetRep from './model/FlagFollowersByProjEnvGetRep';
import FlagFollowersGetRep from './model/FlagFollowersGetRep';
import FlagImportConfigurationPost from './model/FlagImportConfigurationPost';
import FlagImportIntegration from './model/FlagImportIntegration';
import FlagImportIntegrationCollection from './model/FlagImportIntegrationCollection';
import FlagImportIntegrationCollectionLinks from './model/FlagImportIntegrationCollectionLinks';
import FlagImportIntegrationLinks from './model/FlagImportIntegrationLinks';
import FlagImportStatus from './model/FlagImportStatus';
import FlagInput from './model/FlagInput';
import FlagLinkCollectionRep from './model/FlagLinkCollectionRep';
import FlagLinkMember from './model/FlagLinkMember';
import FlagLinkPost from './model/FlagLinkPost';
import FlagLinkRep from './model/FlagLinkRep';
import FlagListingRep from './model/FlagListingRep';
import FlagMigrationSettingsRep from './model/FlagMigrationSettingsRep';
import FlagPrerequisitePost from './model/FlagPrerequisitePost';
import FlagReferenceCollectionRep from './model/FlagReferenceCollectionRep';
import FlagReferenceRep from './model/FlagReferenceRep';
import FlagRep from './model/FlagRep';
import FlagScheduledChangesInput from './model/FlagScheduledChangesInput';
import FlagSempatch from './model/FlagSempatch';
import FlagStatusRep from './model/FlagStatusRep';
import FlagSummary from './model/FlagSummary';
import FlagTriggerInput from './model/FlagTriggerInput';
import FlagsSummary from './model/FlagsSummary';
import FollowFlagMember from './model/FollowFlagMember';
import FollowersPerFlag from './model/FollowersPerFlag';
import ForbiddenErrorRep from './model/ForbiddenErrorRep';
import FormVariable from './model/FormVariable';
import GenerateTrustPolicyPostRep from './model/GenerateTrustPolicyPostRep';
import GenerateWarehouseDestinationKeyPairPostRep from './model/GenerateWarehouseDestinationKeyPairPostRep';
import GetAnnouncementsPublic200Response from './model/GetAnnouncementsPublic200Response';
import GuardedReleaseConfig from './model/GuardedReleaseConfig';
import HMACSignature from './model/HMACSignature';
import HeaderItems from './model/HeaderItems';
import HoldoutDetailRep from './model/HoldoutDetailRep';
import HoldoutPatchInput from './model/HoldoutPatchInput';
import HoldoutPostRequest from './model/HoldoutPostRequest';
import HoldoutRep from './model/HoldoutRep';
import HoldoutsCollectionRep from './model/HoldoutsCollectionRep';
import HunkRep from './model/HunkRep';
import Import from './model/Import';
import InitiatorRep from './model/InitiatorRep';
import InsightGroup from './model/InsightGroup';
import InsightGroupCollection from './model/InsightGroupCollection';
import InsightGroupCollectionMetadata from './model/InsightGroupCollectionMetadata';
import InsightGroupCollectionScoreMetadata from './model/InsightGroupCollectionScoreMetadata';
import InsightGroupScores from './model/InsightGroupScores';
import InsightGroupsCountByIndicator from './model/InsightGroupsCountByIndicator';
import InsightPeriod from './model/InsightPeriod';
import InsightScores from './model/InsightScores';
import InsightsChart from './model/InsightsChart';
import InsightsChartBounds from './model/InsightsChartBounds';
import InsightsChartMetadata from './model/InsightsChartMetadata';
import InsightsChartMetric from './model/InsightsChartMetric';
import InsightsChartSeries from './model/InsightsChartSeries';
import InsightsChartSeriesDataPoint from './model/InsightsChartSeriesDataPoint';
import InsightsChartSeriesMetadata from './model/InsightsChartSeriesMetadata';
import InsightsChartSeriesMetadataAxis from './model/InsightsChartSeriesMetadataAxis';
import InsightsMetricIndicatorRange from './model/InsightsMetricIndicatorRange';
import InsightsMetricScore from './model/InsightsMetricScore';
import InsightsMetricTierDefinition from './model/InsightsMetricTierDefinition';
import InsightsRepository from './model/InsightsRepository';
import InsightsRepositoryCollection from './model/InsightsRepositoryCollection';
import InsightsRepositoryProject from './model/InsightsRepositoryProject';
import InsightsRepositoryProjectCollection from './model/InsightsRepositoryProjectCollection';
import InsightsRepositoryProjectMappings from './model/InsightsRepositoryProjectMappings';
import InstructionUserRequest from './model/InstructionUserRequest';
import Integration from './model/Integration';
import IntegrationConfigurationCollectionRep from './model/IntegrationConfigurationCollectionRep';
import IntegrationConfigurationPost from './model/IntegrationConfigurationPost';
import IntegrationConfigurationsRep from './model/IntegrationConfigurationsRep';
import IntegrationDeliveryConfiguration from './model/IntegrationDeliveryConfiguration';
import IntegrationDeliveryConfigurationCollection from './model/IntegrationDeliveryConfigurationCollection';
import IntegrationDeliveryConfigurationCollectionLinks from './model/IntegrationDeliveryConfigurationCollectionLinks';
import IntegrationDeliveryConfigurationLinks from './model/IntegrationDeliveryConfigurationLinks';
import IntegrationDeliveryConfigurationPost from './model/IntegrationDeliveryConfigurationPost';
import IntegrationDeliveryConfigurationResponse from './model/IntegrationDeliveryConfigurationResponse';
import IntegrationMetadata from './model/IntegrationMetadata';
import IntegrationStatus from './model/IntegrationStatus';
import IntegrationStatusRep from './model/IntegrationStatusRep';
import IntegrationSubscriptionStatusRep from './model/IntegrationSubscriptionStatusRep';
import Integrations from './model/Integrations';
import InvalidRequestErrorRep from './model/InvalidRequestErrorRep';
import IpList from './model/IpList';
import IterationInput from './model/IterationInput';
import IterationRep from './model/IterationRep';
import JudgeAttachment from './model/JudgeAttachment';
import JudgeConfiguration from './model/JudgeConfiguration';
import LastSeenMetadata from './model/LastSeenMetadata';
import LayerCollectionRep from './model/LayerCollectionRep';
import LayerConfigurationRep from './model/LayerConfigurationRep';
import LayerPatchInput from './model/LayerPatchInput';
import LayerPost from './model/LayerPost';
import LayerRep from './model/LayerRep';
import LayerReservationRep from './model/LayerReservationRep';
import LayerSnapshotRep from './model/LayerSnapshotRep';
import LeadTimeStagesRep from './model/LeadTimeStagesRep';
import LegacyExperimentRep from './model/LegacyExperimentRep';
import Link from './model/Link';
import LinkResourceSuccessResponse from './model/LinkResourceSuccessResponse';
import Maintainer from './model/Maintainer';
import MaintainerMember from './model/MaintainerMember';
import MaintainerRep from './model/MaintainerRep';
import MaintainerTeam from './model/MaintainerTeam';
import Member from './model/Member';
import MemberDataRep from './model/MemberDataRep';
import MemberImportItem from './model/MemberImportItem';
import MemberPermissionGrantSummaryRep from './model/MemberPermissionGrantSummaryRep';
import MemberSummary from './model/MemberSummary';
import MemberTeamSummaryRep from './model/MemberTeamSummaryRep';
import MemberTeamsPostInput from './model/MemberTeamsPostInput';
import Members from './model/Members';
import MembersPatchInput from './model/MembersPatchInput';
import Message from './model/Message';
import MethodNotAllowedErrorRep from './model/MethodNotAllowedErrorRep';
import MetricByVariation from './model/MetricByVariation';
import MetricCollectionRep from './model/MetricCollectionRep';
import MetricDataSourceRefRep from './model/MetricDataSourceRefRep';
import MetricEventDefaultRep from './model/MetricEventDefaultRep';
import MetricGroupCollectionRep from './model/MetricGroupCollectionRep';
import MetricGroupPost from './model/MetricGroupPost';
import MetricGroupRep from './model/MetricGroupRep';
import MetricInGroupRep from './model/MetricInGroupRep';
import MetricInMetricGroupInput from './model/MetricInMetricGroupInput';
import MetricInput from './model/MetricInput';
import MetricListingRep from './model/MetricListingRep';
import MetricPost from './model/MetricPost';
import MetricRep from './model/MetricRep';
import MetricV2Rep from './model/MetricV2Rep';
import Metrics from './model/Metrics';
import MetricsSummary from './model/MetricsSummary';
import MigrationSafetyIssueRep from './model/MigrationSafetyIssueRep';
import MigrationSettingsPost from './model/MigrationSettingsPost';
import ModelConfig from './model/ModelConfig';
import ModelConfigPost from './model/ModelConfigPost';
import Modification from './model/Modification';
import MultiEnvironmentDependentFlag from './model/MultiEnvironmentDependentFlag';
import MultiEnvironmentDependentFlags from './model/MultiEnvironmentDependentFlags';
import NamingConvention from './model/NamingConvention';
import NewMemberForm from './model/NewMemberForm';
import NotFoundErrorRep from './model/NotFoundErrorRep';
import OauthClientPost from './model/OauthClientPost';
import OptionsArray from './model/OptionsArray';
import PaginatedLinks from './model/PaginatedLinks';
import ParameterDefault from './model/ParameterDefault';
import ParameterRep from './model/ParameterRep';
import ParentAndSelfLinks from './model/ParentAndSelfLinks';
import ParentLink from './model/ParentLink';
import ParentResourceRep from './model/ParentResourceRep';
import PatchFailedErrorRep from './model/PatchFailedErrorRep';
import PatchFlagsRequest from './model/PatchFlagsRequest';
import PatchOperation from './model/PatchOperation';
import PatchSegmentExpiringTargetInputRep from './model/PatchSegmentExpiringTargetInputRep';
import PatchSegmentExpiringTargetInstruction from './model/PatchSegmentExpiringTargetInstruction';
import PatchSegmentInstruction from './model/PatchSegmentInstruction';
import PatchSegmentRequest from './model/PatchSegmentRequest';
import PatchUsersRequest from './model/PatchUsersRequest';
import PatchWithComment from './model/PatchWithComment';
import PermissionGrantInput from './model/PermissionGrantInput';
import Phase from './model/Phase';
import PhaseInfo from './model/PhaseInfo';
import PostApprovalRequestApplyRequest from './model/PostApprovalRequestApplyRequest';
import PostApprovalRequestReviewRequest from './model/PostApprovalRequestReviewRequest';
import PostDeploymentEventInput from './model/PostDeploymentEventInput';
import PostFlagScheduledChangesInput from './model/PostFlagScheduledChangesInput';
import PostInsightGroupParams from './model/PostInsightGroupParams';
import PostReleasePolicyRequest from './model/PostReleasePolicyRequest';
import Prerequisite from './model/Prerequisite';
import Project from './model/Project';
import ProjectPost from './model/ProjectPost';
import ProjectRep from './model/ProjectRep';
import ProjectSummary from './model/ProjectSummary';
import ProjectSummaryCollection from './model/ProjectSummaryCollection';
import Projects from './model/Projects';
import PullRequestCollectionRep from './model/PullRequestCollectionRep';
import PullRequestLeadTimeRep from './model/PullRequestLeadTimeRep';
import PullRequestRep from './model/PullRequestRep';
import PutBranch from './model/PutBranch';
import PutReleasePolicyRequest from './model/PutReleasePolicyRequest';
import RandomizationSettingsPut from './model/RandomizationSettingsPut';
import RandomizationSettingsRep from './model/RandomizationSettingsRep';
import RandomizationUnitInput from './model/RandomizationUnitInput';
import RandomizationUnitRep from './model/RandomizationUnitRep';
import RateLimitedErrorRep from './model/RateLimitedErrorRep';
import RecentTriggerBody from './model/RecentTriggerBody';
import ReferenceRep from './model/ReferenceRep';
import RelatedExperimentRep from './model/RelatedExperimentRep';
import RelayAutoConfigCollectionRep from './model/RelayAutoConfigCollectionRep';
import RelayAutoConfigPost from './model/RelayAutoConfigPost';
import RelayAutoConfigRep from './model/RelayAutoConfigRep';
import Release from './model/Release';
import ReleaseAudience from './model/ReleaseAudience';
import ReleaseGuardianConfiguration from './model/ReleaseGuardianConfiguration';
import ReleaseGuardianConfigurationInput from './model/ReleaseGuardianConfigurationInput';
import ReleaseMethod from './model/ReleaseMethod';
import ReleasePhase from './model/ReleasePhase';
import ReleasePipeline from './model/ReleasePipeline';
import ReleasePipelineCollection from './model/ReleasePipelineCollection';
import ReleasePoliciesAccess from './model/ReleasePoliciesAccess';
import ReleasePoliciesAccessAllowedReason from './model/ReleasePoliciesAccessAllowedReason';
import ReleasePoliciesAccessAllowedRep from './model/ReleasePoliciesAccessAllowedRep';
import ReleasePoliciesAccessDenied from './model/ReleasePoliciesAccessDenied';
import ReleasePoliciesAccessDeniedReason from './model/ReleasePoliciesAccessDeniedReason';
import ReleasePoliciesAccessRep from './model/ReleasePoliciesAccessRep';
import ReleasePoliciesResponse from './model/ReleasePoliciesResponse';
import ReleasePolicy from './model/ReleasePolicy';
import ReleasePolicyScope from './model/ReleasePolicyScope';
import ReleaseProgression from './model/ReleaseProgression';
import ReleaseProgressionCollection from './model/ReleaseProgressionCollection';
import ReleaserAudienceConfigInput from './model/ReleaserAudienceConfigInput';
import RepositoryCollectionRep from './model/RepositoryCollectionRep';
import RepositoryPost from './model/RepositoryPost';
import RepositoryRep from './model/RepositoryRep';
import ResourceAccess from './model/ResourceAccess';
import ResourceIDResponse from './model/ResourceIDResponse';
import ResourceId from './model/ResourceId';
import ResourceSummary from './model/ResourceSummary';
import RestrictedModelError from './model/RestrictedModelError';
import RestrictedModelsRequest from './model/RestrictedModelsRequest';
import RestrictedModelsResponse from './model/RestrictedModelsResponse';
import ReviewOutput from './model/ReviewOutput';
import ReviewResponse from './model/ReviewResponse';
import Rollout from './model/Rollout';
import RootResponse from './model/RootResponse';
import Rule from './model/Rule';
import RuleClause from './model/RuleClause';
import SdkListRep from './model/SdkListRep';
import SdkVersionListRep from './model/SdkVersionListRep';
import SdkVersionRep from './model/SdkVersionRep';
import SegmentBody from './model/SegmentBody';
import SegmentMetadata from './model/SegmentMetadata';
import SegmentTarget from './model/SegmentTarget';
import SegmentUserList from './model/SegmentUserList';
import SegmentUserState from './model/SegmentUserState';
import SegmentsSummary from './model/SegmentsSummary';
import SeriesListRep from './model/SeriesListRep';
import SeriesListRepFloat from './model/SeriesListRepFloat';
import SimpleHoldoutRep from './model/SimpleHoldoutRep';
import SourceEnv from './model/SourceEnv';
import SourceFlag from './model/SourceFlag';
import StageInput from './model/StageInput';
import StageOutput from './model/StageOutput';
import Statement from './model/Statement';
import StatementPost from './model/StatementPost';
import StatisticCollectionRep from './model/StatisticCollectionRep';
import StatisticRep from './model/StatisticRep';
import StatisticsRoot from './model/StatisticsRoot';
import StatusConflictErrorRep from './model/StatusConflictErrorRep';
import StatusResponse from './model/StatusResponse';
import StatusServiceUnavailable from './model/StatusServiceUnavailable';
import StoreIntegrationError from './model/StoreIntegrationError';
import SubjectDataRep from './model/SubjectDataRep';
import SubscriptionPost from './model/SubscriptionPost';
import TagsCollection from './model/TagsCollection';
import TagsLink from './model/TagsLink';
import Target from './model/Target';
import TargetResourceRep from './model/TargetResourceRep';
import Team from './model/Team';
import TeamCustomRole from './model/TeamCustomRole';
import TeamCustomRoles from './model/TeamCustomRoles';
import TeamImportsRep from './model/TeamImportsRep';
import TeamMaintainers from './model/TeamMaintainers';
import TeamMembers from './model/TeamMembers';
import TeamPatchInput from './model/TeamPatchInput';
import TeamPostInput from './model/TeamPostInput';
import TeamProjects from './model/TeamProjects';
import Teams from './model/Teams';
import TeamsPatchInput from './model/TeamsPatchInput';
import TimestampRep from './model/TimestampRep';
import Token from './model/Token';
import TokenSummary from './model/TokenSummary';
import Tokens from './model/Tokens';
import TreatmentInput from './model/TreatmentInput';
import TreatmentParameterInput from './model/TreatmentParameterInput';
import TreatmentRep from './model/TreatmentRep';
import TriggerPost from './model/TriggerPost';
import TriggerWorkflowCollectionRep from './model/TriggerWorkflowCollectionRep';
import TriggerWorkflowRep from './model/TriggerWorkflowRep';
import TrustPolicyDetails from './model/TrustPolicyDetails';
import TrustPolicyStatement from './model/TrustPolicyStatement';
import UnauthorizedErrorRep from './model/UnauthorizedErrorRep';
import UnlinkResourceSuccessResponse from './model/UnlinkResourceSuccessResponse';
import UpdatePhaseStatusInput from './model/UpdatePhaseStatusInput';
import UpdateReleasePipelineInput from './model/UpdateReleasePipelineInput';
import UpsertContextKindPayload from './model/UpsertContextKindPayload';
import UpsertFlagDefaultsPayload from './model/UpsertFlagDefaultsPayload';
import UpsertPayloadRep from './model/UpsertPayloadRep';
import UpsertResponseRep from './model/UpsertResponseRep';
import UrlPost from './model/UrlPost';
import User from './model/User';
import UserAttributeNamesRep from './model/UserAttributeNamesRep';
import UserFlagSetting from './model/UserFlagSetting';
import UserFlagSettings from './model/UserFlagSettings';
import UserRecord from './model/UserRecord';
import UserSegment from './model/UserSegment';
import UserSegmentRule from './model/UserSegmentRule';
import UserSegments from './model/UserSegments';
import Users from './model/Users';
import UsersRep from './model/UsersRep';
import ValidationFailedErrorRep from './model/ValidationFailedErrorRep';
import ValuePut from './model/ValuePut';
import Variation from './model/Variation';
import VariationEvalSummary from './model/VariationEvalSummary';
import VariationOrRolloutRep from './model/VariationOrRolloutRep';
import VariationSummary from './model/VariationSummary';
import VariationTool from './model/VariationTool';
import VariationToolPost from './model/VariationToolPost';
import VersionsRep from './model/VersionsRep';
import View from './model/View';
import ViewLinkRequest from './model/ViewLinkRequest';
import ViewLinkRequestKeys from './model/ViewLinkRequestKeys';
import ViewLinkRequestSegmentIdentifier from './model/ViewLinkRequestSegmentIdentifier';
import ViewLinkRequestSegmentIdentifiers from './model/ViewLinkRequestSegmentIdentifiers';
import ViewLinkedResource from './model/ViewLinkedResource';
import ViewLinkedResourceDetails from './model/ViewLinkedResourceDetails';
import ViewLinkedResources from './model/ViewLinkedResources';
import ViewPatch from './model/ViewPatch';
import ViewPost from './model/ViewPost';
import Views from './model/Views';
import ViewsAccess from './model/ViewsAccess';
import ViewsAccessAllowedReason from './model/ViewsAccessAllowedReason';
import ViewsAccessAllowedRep from './model/ViewsAccessAllowedRep';
import ViewsAccessDenied from './model/ViewsAccessDenied';
import ViewsAccessDeniedReason from './model/ViewsAccessDeniedReason';
import ViewsAccessRep from './model/ViewsAccessRep';
import ViewsLink from './model/ViewsLink';
import ViewsMaintainerMember from './model/ViewsMaintainerMember';
import ViewsMaintainerTeam from './model/ViewsMaintainerTeam';
import ViewsPaginatedLinks from './model/ViewsPaginatedLinks';
import ViewsSelfLink from './model/ViewsSelfLink';
import Webhook from './model/Webhook';
import WebhookPost from './model/WebhookPost';
import Webhooks from './model/Webhooks';
import WeightedVariation from './model/WeightedVariation';
import WorkflowTemplateMetadata from './model/WorkflowTemplateMetadata';
import WorkflowTemplateOutput from './model/WorkflowTemplateOutput';
import WorkflowTemplateParameter from './model/WorkflowTemplateParameter';
import WorkflowTemplatesListingOutputRep from './model/WorkflowTemplatesListingOutputRep';
import AIConfigsBetaApi from './api/AIConfigsBetaApi';
import AccessTokensApi from './api/AccessTokensApi';
import AccountMembersApi from './api/AccountMembersApi';
import AccountUsageBetaApi from './api/AccountUsageBetaApi';
import AnnouncementsApi from './api/AnnouncementsApi';
import ApplicationsBetaApi from './api/ApplicationsBetaApi';
import ApprovalsApi from './api/ApprovalsApi';
import ApprovalsBetaApi from './api/ApprovalsBetaApi';
import AuditLogApi from './api/AuditLogApi';
import CodeReferencesApi from './api/CodeReferencesApi';
import ContextSettingsApi from './api/ContextSettingsApi';
import ContextsApi from './api/ContextsApi';
import CustomRolesApi from './api/CustomRolesApi';
import DataExportDestinationsApi from './api/DataExportDestinationsApi';
import EnvironmentsApi from './api/EnvironmentsApi';
import ExperimentsApi from './api/ExperimentsApi';
import FeatureFlagsApi from './api/FeatureFlagsApi';
import FeatureFlagsBetaApi from './api/FeatureFlagsBetaApi';
import FlagImportConfigurationsBetaApi from './api/FlagImportConfigurationsBetaApi';
import FlagLinksBetaApi from './api/FlagLinksBetaApi';
import FlagTriggersApi from './api/FlagTriggersApi';
import FollowFlagsApi from './api/FollowFlagsApi';
import HoldoutsBetaApi from './api/HoldoutsBetaApi';
import InsightsChartsBetaApi from './api/InsightsChartsBetaApi';
import InsightsDeploymentsBetaApi from './api/InsightsDeploymentsBetaApi';
import InsightsFlagEventsBetaApi from './api/InsightsFlagEventsBetaApi';
import InsightsPullRequestsBetaApi from './api/InsightsPullRequestsBetaApi';
import InsightsRepositoriesBetaApi from './api/InsightsRepositoriesBetaApi';
import InsightsScoresBetaApi from './api/InsightsScoresBetaApi';
import IntegrationAuditLogSubscriptionsApi from './api/IntegrationAuditLogSubscriptionsApi';
import IntegrationDeliveryConfigurationsBetaApi from './api/IntegrationDeliveryConfigurationsBetaApi';
import IntegrationsBetaApi from './api/IntegrationsBetaApi';
import LayersApi from './api/LayersApi';
import MetricsApi from './api/MetricsApi';
import MetricsBetaApi from './api/MetricsBetaApi';
import OAuth2ClientsApi from './api/OAuth2ClientsApi';
import OtherApi from './api/OtherApi';
import PersistentStoreIntegrationsBetaApi from './api/PersistentStoreIntegrationsBetaApi';
import ProjectsApi from './api/ProjectsApi';
import RelayProxyConfigurationsApi from './api/RelayProxyConfigurationsApi';
import ReleasePipelinesBetaApi from './api/ReleasePipelinesBetaApi';
import ReleasePoliciesBetaApi from './api/ReleasePoliciesBetaApi';
import ReleasesBetaApi from './api/ReleasesBetaApi';
import ScheduledChangesApi from './api/ScheduledChangesApi';
import SegmentsApi from './api/SegmentsApi';
import TagsApi from './api/TagsApi';
import TeamsApi from './api/TeamsApi';
import TeamsBetaApi from './api/TeamsBetaApi';
import UserSettingsApi from './api/UserSettingsApi';
import UsersApi from './api/UsersApi';
import UsersBetaApi from './api/UsersBetaApi';
import ViewsBetaApi from './api/ViewsBetaApi';
import WebhooksApi from './api/WebhooksApi';
import WorkflowTemplatesApi from './api/WorkflowTemplatesApi';
import WorkflowsApi from './api/WorkflowsApi';


/**
* Build custom integrations with the LaunchDarkly REST API.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var LaunchDarklyApi = require('index'); // See note below*.
* var xxxSvc = new LaunchDarklyApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new LaunchDarklyApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new LaunchDarklyApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new LaunchDarklyApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 19.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AIConfig model constructor.
     * @property {module:model/AIConfig}
     */
    AIConfig,

    /**
     * The AIConfigMaintainer model constructor.
     * @property {module:model/AIConfigMaintainer}
     */
    AIConfigMaintainer,

    /**
     * The AIConfigPatch model constructor.
     * @property {module:model/AIConfigPatch}
     */
    AIConfigPatch,

    /**
     * The AIConfigPost model constructor.
     * @property {module:model/AIConfigPost}
     */
    AIConfigPost,

    /**
     * The AIConfigRep model constructor.
     * @property {module:model/AIConfigRep}
     */
    AIConfigRep,

    /**
     * The AIConfigTargeting model constructor.
     * @property {module:model/AIConfigTargeting}
     */
    AIConfigTargeting,

    /**
     * The AIConfigTargetingDefaults model constructor.
     * @property {module:model/AIConfigTargetingDefaults}
     */
    AIConfigTargetingDefaults,

    /**
     * The AIConfigTargetingEnvironment model constructor.
     * @property {module:model/AIConfigTargetingEnvironment}
     */
    AIConfigTargetingEnvironment,

    /**
     * The AIConfigTargetingEnvironmentFallthrough model constructor.
     * @property {module:model/AIConfigTargetingEnvironmentFallthrough}
     */
    AIConfigTargetingEnvironmentFallthrough,

    /**
     * The AIConfigTargetingEnvironmentFallthroughRollout model constructor.
     * @property {module:model/AIConfigTargetingEnvironmentFallthroughRollout}
     */
    AIConfigTargetingEnvironmentFallthroughRollout,

    /**
     * The AIConfigTargetingEnvironmentFallthroughRolloutExperimentationAllocation model constructor.
     * @property {module:model/AIConfigTargetingEnvironmentFallthroughRolloutExperimentationAllocation}
     */
    AIConfigTargetingEnvironmentFallthroughRolloutExperimentationAllocation,

    /**
     * The AIConfigTargetingEnvironmentFallthroughRolloutVariation model constructor.
     * @property {module:model/AIConfigTargetingEnvironmentFallthroughRolloutVariation}
     */
    AIConfigTargetingEnvironmentFallthroughRolloutVariation,

    /**
     * The AIConfigTargetingEnvironmentRule model constructor.
     * @property {module:model/AIConfigTargetingEnvironmentRule}
     */
    AIConfigTargetingEnvironmentRule,

    /**
     * The AIConfigTargetingEnvironmentRuleClause model constructor.
     * @property {module:model/AIConfigTargetingEnvironmentRuleClause}
     */
    AIConfigTargetingEnvironmentRuleClause,

    /**
     * The AIConfigTargetingEnvironmentTarget model constructor.
     * @property {module:model/AIConfigTargetingEnvironmentTarget}
     */
    AIConfigTargetingEnvironmentTarget,

    /**
     * The AIConfigTargetingPatch model constructor.
     * @property {module:model/AIConfigTargetingPatch}
     */
    AIConfigTargetingPatch,

    /**
     * The AIConfigTargetingVariation model constructor.
     * @property {module:model/AIConfigTargetingVariation}
     */
    AIConfigTargetingVariation,

    /**
     * The AIConfigTargetingVariationValue model constructor.
     * @property {module:model/AIConfigTargetingVariationValue}
     */
    AIConfigTargetingVariationValue,

    /**
     * The AIConfigVariation model constructor.
     * @property {module:model/AIConfigVariation}
     */
    AIConfigVariation,

    /**
     * The AIConfigVariationPatch model constructor.
     * @property {module:model/AIConfigVariationPatch}
     */
    AIConfigVariationPatch,

    /**
     * The AIConfigVariationPost model constructor.
     * @property {module:model/AIConfigVariationPost}
     */
    AIConfigVariationPost,

    /**
     * The AIConfigVariationsResponse model constructor.
     * @property {module:model/AIConfigVariationsResponse}
     */
    AIConfigVariationsResponse,

    /**
     * The AIConfigs model constructor.
     * @property {module:model/AIConfigs}
     */
    AIConfigs,

    /**
     * The AIConfigsSummary model constructor.
     * @property {module:model/AIConfigsSummary}
     */
    AIConfigsSummary,

    /**
     * The AITool model constructor.
     * @property {module:model/AITool}
     */
    AITool,

    /**
     * The AIToolPatch model constructor.
     * @property {module:model/AIToolPatch}
     */
    AIToolPatch,

    /**
     * The AIToolPost model constructor.
     * @property {module:model/AIToolPost}
     */
    AIToolPost,

    /**
     * The AITools model constructor.
     * @property {module:model/AITools}
     */
    AITools,

    /**
     * The Access model constructor.
     * @property {module:model/Access}
     */
    Access,

    /**
     * The AccessAllowedReason model constructor.
     * @property {module:model/AccessAllowedReason}
     */
    AccessAllowedReason,

    /**
     * The AccessAllowedRep model constructor.
     * @property {module:model/AccessAllowedRep}
     */
    AccessAllowedRep,

    /**
     * The AccessDenied model constructor.
     * @property {module:model/AccessDenied}
     */
    AccessDenied,

    /**
     * The AccessDeniedReason model constructor.
     * @property {module:model/AccessDeniedReason}
     */
    AccessDeniedReason,

    /**
     * The AccessTokenPost model constructor.
     * @property {module:model/AccessTokenPost}
     */
    AccessTokenPost,

    /**
     * The ActionInput model constructor.
     * @property {module:model/ActionInput}
     */
    ActionInput,

    /**
     * The ActionOutput model constructor.
     * @property {module:model/ActionOutput}
     */
    ActionOutput,

    /**
     * The AiConfigsAccess model constructor.
     * @property {module:model/AiConfigsAccess}
     */
    AiConfigsAccess,

    /**
     * The AiConfigsAccessAllowedReason model constructor.
     * @property {module:model/AiConfigsAccessAllowedReason}
     */
    AiConfigsAccessAllowedReason,

    /**
     * The AiConfigsAccessAllowedRep model constructor.
     * @property {module:model/AiConfigsAccessAllowedRep}
     */
    AiConfigsAccessAllowedRep,

    /**
     * The AiConfigsAccessDenied model constructor.
     * @property {module:model/AiConfigsAccessDenied}
     */
    AiConfigsAccessDenied,

    /**
     * The AiConfigsAccessDeniedReason model constructor.
     * @property {module:model/AiConfigsAccessDeniedReason}
     */
    AiConfigsAccessDeniedReason,

    /**
     * The AiConfigsExperimentEnabledPeriodRep model constructor.
     * @property {module:model/AiConfigsExperimentEnabledPeriodRep}
     */
    AiConfigsExperimentEnabledPeriodRep,

    /**
     * The AiConfigsExperimentEnvironmentSettingRep model constructor.
     * @property {module:model/AiConfigsExperimentEnvironmentSettingRep}
     */
    AiConfigsExperimentEnvironmentSettingRep,

    /**
     * The AiConfigsExperimentInfoRep model constructor.
     * @property {module:model/AiConfigsExperimentInfoRep}
     */
    AiConfigsExperimentInfoRep,

    /**
     * The AiConfigsFilter model constructor.
     * @property {module:model/AiConfigsFilter}
     */
    AiConfigsFilter,

    /**
     * The AiConfigsLegacyExperimentRep model constructor.
     * @property {module:model/AiConfigsLegacyExperimentRep}
     */
    AiConfigsLegacyExperimentRep,

    /**
     * The AiConfigsLink model constructor.
     * @property {module:model/AiConfigsLink}
     */
    AiConfigsLink,

    /**
     * The AiConfigsMaintainerTeam model constructor.
     * @property {module:model/AiConfigsMaintainerTeam}
     */
    AiConfigsMaintainerTeam,

    /**
     * The AiConfigsMemberSummary model constructor.
     * @property {module:model/AiConfigsMemberSummary}
     */
    AiConfigsMemberSummary,

    /**
     * The AiConfigsMetricDataSourceRefRep model constructor.
     * @property {module:model/AiConfigsMetricDataSourceRefRep}
     */
    AiConfigsMetricDataSourceRefRep,

    /**
     * The AiConfigsMetricEventDefaultRep model constructor.
     * @property {module:model/AiConfigsMetricEventDefaultRep}
     */
    AiConfigsMetricEventDefaultRep,

    /**
     * The AiConfigsMetricListingRep model constructor.
     * @property {module:model/AiConfigsMetricListingRep}
     */
    AiConfigsMetricListingRep,

    /**
     * The AiConfigsModification model constructor.
     * @property {module:model/AiConfigsModification}
     */
    AiConfigsModification,

    /**
     * The AnnouncementAccess model constructor.
     * @property {module:model/AnnouncementAccess}
     */
    AnnouncementAccess,

    /**
     * The AnnouncementAccessAllowedReason model constructor.
     * @property {module:model/AnnouncementAccessAllowedReason}
     */
    AnnouncementAccessAllowedReason,

    /**
     * The AnnouncementAccessAllowedRep model constructor.
     * @property {module:model/AnnouncementAccessAllowedRep}
     */
    AnnouncementAccessAllowedRep,

    /**
     * The AnnouncementAccessDenied model constructor.
     * @property {module:model/AnnouncementAccessDenied}
     */
    AnnouncementAccessDenied,

    /**
     * The AnnouncementAccessDeniedReason model constructor.
     * @property {module:model/AnnouncementAccessDeniedReason}
     */
    AnnouncementAccessDeniedReason,

    /**
     * The AnnouncementAccessRep model constructor.
     * @property {module:model/AnnouncementAccessRep}
     */
    AnnouncementAccessRep,

    /**
     * The AnnouncementLink model constructor.
     * @property {module:model/AnnouncementLink}
     */
    AnnouncementLink,

    /**
     * The AnnouncementPaginatedLinks model constructor.
     * @property {module:model/AnnouncementPaginatedLinks}
     */
    AnnouncementPaginatedLinks,

    /**
     * The AnnouncementPatchOperation model constructor.
     * @property {module:model/AnnouncementPatchOperation}
     */
    AnnouncementPatchOperation,

    /**
     * The AnnouncementResponse model constructor.
     * @property {module:model/AnnouncementResponse}
     */
    AnnouncementResponse,

    /**
     * The AnnouncementResponseLinks model constructor.
     * @property {module:model/AnnouncementResponseLinks}
     */
    AnnouncementResponseLinks,

    /**
     * The ApplicationCollectionRep model constructor.
     * @property {module:model/ApplicationCollectionRep}
     */
    ApplicationCollectionRep,

    /**
     * The ApplicationFlagCollectionRep model constructor.
     * @property {module:model/ApplicationFlagCollectionRep}
     */
    ApplicationFlagCollectionRep,

    /**
     * The ApplicationRep model constructor.
     * @property {module:model/ApplicationRep}
     */
    ApplicationRep,

    /**
     * The ApplicationVersionRep model constructor.
     * @property {module:model/ApplicationVersionRep}
     */
    ApplicationVersionRep,

    /**
     * The ApplicationVersionsCollectionRep model constructor.
     * @property {module:model/ApplicationVersionsCollectionRep}
     */
    ApplicationVersionsCollectionRep,

    /**
     * The ApprovalRequestResponse model constructor.
     * @property {module:model/ApprovalRequestResponse}
     */
    ApprovalRequestResponse,

    /**
     * The ApprovalRequestSetting model constructor.
     * @property {module:model/ApprovalRequestSetting}
     */
    ApprovalRequestSetting,

    /**
     * The ApprovalRequestSettingWithEnvs model constructor.
     * @property {module:model/ApprovalRequestSettingWithEnvs}
     */
    ApprovalRequestSettingWithEnvs,

    /**
     * The ApprovalRequestSettingsPatch model constructor.
     * @property {module:model/ApprovalRequestSettingsPatch}
     */
    ApprovalRequestSettingsPatch,

    /**
     * The ApprovalSettings model constructor.
     * @property {module:model/ApprovalSettings}
     */
    ApprovalSettings,

    /**
     * The ApprovalsCapabilityConfig model constructor.
     * @property {module:model/ApprovalsCapabilityConfig}
     */
    ApprovalsCapabilityConfig,

    /**
     * The AssignedToRep model constructor.
     * @property {module:model/AssignedToRep}
     */
    AssignedToRep,

    /**
     * The Audience model constructor.
     * @property {module:model/Audience}
     */
    Audience,

    /**
     * The AudienceConfiguration model constructor.
     * @property {module:model/AudienceConfiguration}
     */
    AudienceConfiguration,

    /**
     * The AudiencePost model constructor.
     * @property {module:model/AudiencePost}
     */
    AudiencePost,

    /**
     * The AuditLogEntryListingRep model constructor.
     * @property {module:model/AuditLogEntryListingRep}
     */
    AuditLogEntryListingRep,

    /**
     * The AuditLogEntryListingRepCollection model constructor.
     * @property {module:model/AuditLogEntryListingRepCollection}
     */
    AuditLogEntryListingRepCollection,

    /**
     * The AuditLogEntryRep model constructor.
     * @property {module:model/AuditLogEntryRep}
     */
    AuditLogEntryRep,

    /**
     * The AuditLogEventsHookCapabilityConfigPost model constructor.
     * @property {module:model/AuditLogEventsHookCapabilityConfigPost}
     */
    AuditLogEventsHookCapabilityConfigPost,

    /**
     * The AuditLogEventsHookCapabilityConfigRep model constructor.
     * @property {module:model/AuditLogEventsHookCapabilityConfigRep}
     */
    AuditLogEventsHookCapabilityConfigRep,

    /**
     * The AuthorizedAppDataRep model constructor.
     * @property {module:model/AuthorizedAppDataRep}
     */
    AuthorizedAppDataRep,

    /**
     * The BigSegmentStoreIntegration model constructor.
     * @property {module:model/BigSegmentStoreIntegration}
     */
    BigSegmentStoreIntegration,

    /**
     * The BigSegmentStoreIntegrationCollection model constructor.
     * @property {module:model/BigSegmentStoreIntegrationCollection}
     */
    BigSegmentStoreIntegrationCollection,

    /**
     * The BigSegmentStoreIntegrationCollectionLinks model constructor.
     * @property {module:model/BigSegmentStoreIntegrationCollectionLinks}
     */
    BigSegmentStoreIntegrationCollectionLinks,

    /**
     * The BigSegmentStoreIntegrationLinks model constructor.
     * @property {module:model/BigSegmentStoreIntegrationLinks}
     */
    BigSegmentStoreIntegrationLinks,

    /**
     * The BigSegmentStoreStatus model constructor.
     * @property {module:model/BigSegmentStoreStatus}
     */
    BigSegmentStoreStatus,

    /**
     * The BigSegmentTarget model constructor.
     * @property {module:model/BigSegmentTarget}
     */
    BigSegmentTarget,

    /**
     * The BooleanDefaults model constructor.
     * @property {module:model/BooleanDefaults}
     */
    BooleanDefaults,

    /**
     * The BooleanFlagDefaults model constructor.
     * @property {module:model/BooleanFlagDefaults}
     */
    BooleanFlagDefaults,

    /**
     * The BranchCollectionRep model constructor.
     * @property {module:model/BranchCollectionRep}
     */
    BranchCollectionRep,

    /**
     * The BranchRep model constructor.
     * @property {module:model/BranchRep}
     */
    BranchRep,

    /**
     * The BulkEditMembersRep model constructor.
     * @property {module:model/BulkEditMembersRep}
     */
    BulkEditMembersRep,

    /**
     * The BulkEditTeamsRep model constructor.
     * @property {module:model/BulkEditTeamsRep}
     */
    BulkEditTeamsRep,

    /**
     * The CallerIdentityRep model constructor.
     * @property {module:model/CallerIdentityRep}
     */
    CallerIdentityRep,

    /**
     * The CapabilityConfigPost model constructor.
     * @property {module:model/CapabilityConfigPost}
     */
    CapabilityConfigPost,

    /**
     * The CapabilityConfigRep model constructor.
     * @property {module:model/CapabilityConfigRep}
     */
    CapabilityConfigRep,

    /**
     * The Clause model constructor.
     * @property {module:model/Clause}
     */
    Clause,

    /**
     * The Client model constructor.
     * @property {module:model/Client}
     */
    Client,

    /**
     * The ClientCollection model constructor.
     * @property {module:model/ClientCollection}
     */
    ClientCollection,

    /**
     * The ClientSideAvailability model constructor.
     * @property {module:model/ClientSideAvailability}
     */
    ClientSideAvailability,

    /**
     * The ClientSideAvailabilityPost model constructor.
     * @property {module:model/ClientSideAvailabilityPost}
     */
    ClientSideAvailabilityPost,

    /**
     * The CompletedBy model constructor.
     * @property {module:model/CompletedBy}
     */
    CompletedBy,

    /**
     * The ConditionInput model constructor.
     * @property {module:model/ConditionInput}
     */
    ConditionInput,

    /**
     * The ConditionOutput model constructor.
     * @property {module:model/ConditionOutput}
     */
    ConditionOutput,

    /**
     * The Conflict model constructor.
     * @property {module:model/Conflict}
     */
    Conflict,

    /**
     * The ConflictOutput model constructor.
     * @property {module:model/ConflictOutput}
     */
    ConflictOutput,

    /**
     * The ContextAttributeName model constructor.
     * @property {module:model/ContextAttributeName}
     */
    ContextAttributeName,

    /**
     * The ContextAttributeNames model constructor.
     * @property {module:model/ContextAttributeNames}
     */
    ContextAttributeNames,

    /**
     * The ContextAttributeNamesCollection model constructor.
     * @property {module:model/ContextAttributeNamesCollection}
     */
    ContextAttributeNamesCollection,

    /**
     * The ContextAttributeValue model constructor.
     * @property {module:model/ContextAttributeValue}
     */
    ContextAttributeValue,

    /**
     * The ContextAttributeValues model constructor.
     * @property {module:model/ContextAttributeValues}
     */
    ContextAttributeValues,

    /**
     * The ContextAttributeValuesCollection model constructor.
     * @property {module:model/ContextAttributeValuesCollection}
     */
    ContextAttributeValuesCollection,

    /**
     * The ContextInstanceEvaluation model constructor.
     * @property {module:model/ContextInstanceEvaluation}
     */
    ContextInstanceEvaluation,

    /**
     * The ContextInstanceEvaluationReason model constructor.
     * @property {module:model/ContextInstanceEvaluationReason}
     */
    ContextInstanceEvaluationReason,

    /**
     * The ContextInstanceEvaluations model constructor.
     * @property {module:model/ContextInstanceEvaluations}
     */
    ContextInstanceEvaluations,

    /**
     * The ContextInstanceRecord model constructor.
     * @property {module:model/ContextInstanceRecord}
     */
    ContextInstanceRecord,

    /**
     * The ContextInstanceSearch model constructor.
     * @property {module:model/ContextInstanceSearch}
     */
    ContextInstanceSearch,

    /**
     * The ContextInstanceSegmentMembership model constructor.
     * @property {module:model/ContextInstanceSegmentMembership}
     */
    ContextInstanceSegmentMembership,

    /**
     * The ContextInstanceSegmentMemberships model constructor.
     * @property {module:model/ContextInstanceSegmentMemberships}
     */
    ContextInstanceSegmentMemberships,

    /**
     * The ContextInstances model constructor.
     * @property {module:model/ContextInstances}
     */
    ContextInstances,

    /**
     * The ContextKindRep model constructor.
     * @property {module:model/ContextKindRep}
     */
    ContextKindRep,

    /**
     * The ContextKindsCollectionRep model constructor.
     * @property {module:model/ContextKindsCollectionRep}
     */
    ContextKindsCollectionRep,

    /**
     * The ContextRecord model constructor.
     * @property {module:model/ContextRecord}
     */
    ContextRecord,

    /**
     * The ContextSearch model constructor.
     * @property {module:model/ContextSearch}
     */
    ContextSearch,

    /**
     * The Contexts model constructor.
     * @property {module:model/Contexts}
     */
    Contexts,

    /**
     * The CopiedFromEnv model constructor.
     * @property {module:model/CopiedFromEnv}
     */
    CopiedFromEnv,

    /**
     * The CoreLink model constructor.
     * @property {module:model/CoreLink}
     */
    CoreLink,

    /**
     * The CovarianceInfoRep model constructor.
     * @property {module:model/CovarianceInfoRep}
     */
    CovarianceInfoRep,

    /**
     * The CreateAnnouncementBody model constructor.
     * @property {module:model/CreateAnnouncementBody}
     */
    CreateAnnouncementBody,

    /**
     * The CreateApprovalRequestRequest model constructor.
     * @property {module:model/CreateApprovalRequestRequest}
     */
    CreateApprovalRequestRequest,

    /**
     * The CreateCopyFlagConfigApprovalRequestRequest model constructor.
     * @property {module:model/CreateCopyFlagConfigApprovalRequestRequest}
     */
    CreateCopyFlagConfigApprovalRequestRequest,

    /**
     * The CreateFlagConfigApprovalRequestRequest model constructor.
     * @property {module:model/CreateFlagConfigApprovalRequestRequest}
     */
    CreateFlagConfigApprovalRequestRequest,

    /**
     * The CreatePhaseInput model constructor.
     * @property {module:model/CreatePhaseInput}
     */
    CreatePhaseInput,

    /**
     * The CreateReleaseInput model constructor.
     * @property {module:model/CreateReleaseInput}
     */
    CreateReleaseInput,

    /**
     * The CreateReleasePipelineInput model constructor.
     * @property {module:model/CreateReleasePipelineInput}
     */
    CreateReleasePipelineInput,

    /**
     * The CreateWorkflowTemplateInput model constructor.
     * @property {module:model/CreateWorkflowTemplateInput}
     */
    CreateWorkflowTemplateInput,

    /**
     * The CustomProperty model constructor.
     * @property {module:model/CustomProperty}
     */
    CustomProperty,

    /**
     * The CustomRole model constructor.
     * @property {module:model/CustomRole}
     */
    CustomRole,

    /**
     * The CustomRolePost model constructor.
     * @property {module:model/CustomRolePost}
     */
    CustomRolePost,

    /**
     * The CustomRoles model constructor.
     * @property {module:model/CustomRoles}
     */
    CustomRoles,

    /**
     * The CustomWorkflowInput model constructor.
     * @property {module:model/CustomWorkflowInput}
     */
    CustomWorkflowInput,

    /**
     * The CustomWorkflowMeta model constructor.
     * @property {module:model/CustomWorkflowMeta}
     */
    CustomWorkflowMeta,

    /**
     * The CustomWorkflowOutput model constructor.
     * @property {module:model/CustomWorkflowOutput}
     */
    CustomWorkflowOutput,

    /**
     * The CustomWorkflowStageMeta model constructor.
     * @property {module:model/CustomWorkflowStageMeta}
     */
    CustomWorkflowStageMeta,

    /**
     * The CustomWorkflowsListingOutput model constructor.
     * @property {module:model/CustomWorkflowsListingOutput}
     */
    CustomWorkflowsListingOutput,

    /**
     * The DefaultClientSideAvailability model constructor.
     * @property {module:model/DefaultClientSideAvailability}
     */
    DefaultClientSideAvailability,

    /**
     * The DefaultClientSideAvailabilityPost model constructor.
     * @property {module:model/DefaultClientSideAvailabilityPost}
     */
    DefaultClientSideAvailabilityPost,

    /**
     * The Defaults model constructor.
     * @property {module:model/Defaults}
     */
    Defaults,

    /**
     * The DependentExperimentRep model constructor.
     * @property {module:model/DependentExperimentRep}
     */
    DependentExperimentRep,

    /**
     * The DependentFlag model constructor.
     * @property {module:model/DependentFlag}
     */
    DependentFlag,

    /**
     * The DependentFlagEnvironment model constructor.
     * @property {module:model/DependentFlagEnvironment}
     */
    DependentFlagEnvironment,

    /**
     * The DependentFlagsByEnvironment model constructor.
     * @property {module:model/DependentFlagsByEnvironment}
     */
    DependentFlagsByEnvironment,

    /**
     * The DependentMeasuredRolloutRep model constructor.
     * @property {module:model/DependentMeasuredRolloutRep}
     */
    DependentMeasuredRolloutRep,

    /**
     * The DependentMetricGroupRep model constructor.
     * @property {module:model/DependentMetricGroupRep}
     */
    DependentMetricGroupRep,

    /**
     * The DependentMetricGroupRepWithMetrics model constructor.
     * @property {module:model/DependentMetricGroupRepWithMetrics}
     */
    DependentMetricGroupRepWithMetrics,

    /**
     * The DependentMetricOrMetricGroupRep model constructor.
     * @property {module:model/DependentMetricOrMetricGroupRep}
     */
    DependentMetricOrMetricGroupRep,

    /**
     * The DeploymentCollectionRep model constructor.
     * @property {module:model/DeploymentCollectionRep}
     */
    DeploymentCollectionRep,

    /**
     * The DeploymentRep model constructor.
     * @property {module:model/DeploymentRep}
     */
    DeploymentRep,

    /**
     * The Destination model constructor.
     * @property {module:model/Destination}
     */
    Destination,

    /**
     * The DestinationPost model constructor.
     * @property {module:model/DestinationPost}
     */
    DestinationPost,

    /**
     * The Destinations model constructor.
     * @property {module:model/Destinations}
     */
    Destinations,

    /**
     * The DynamicOptions model constructor.
     * @property {module:model/DynamicOptions}
     */
    DynamicOptions,

    /**
     * The DynamicOptionsParser model constructor.
     * @property {module:model/DynamicOptionsParser}
     */
    DynamicOptionsParser,

    /**
     * The Endpoint model constructor.
     * @property {module:model/Endpoint}
     */
    Endpoint,

    /**
     * The Environment model constructor.
     * @property {module:model/Environment}
     */
    Environment,

    /**
     * The EnvironmentPost model constructor.
     * @property {module:model/EnvironmentPost}
     */
    EnvironmentPost,

    /**
     * The EnvironmentSummary model constructor.
     * @property {module:model/EnvironmentSummary}
     */
    EnvironmentSummary,

    /**
     * The Environments model constructor.
     * @property {module:model/Environments}
     */
    Environments,

    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error,

    /**
     * The EvaluationReason model constructor.
     * @property {module:model/EvaluationReason}
     */
    EvaluationReason,

    /**
     * The EvaluationsSummary model constructor.
     * @property {module:model/EvaluationsSummary}
     */
    EvaluationsSummary,

    /**
     * The EventFilter model constructor.
     * @property {module:model/EventFilter}
     */
    EventFilter,

    /**
     * The ExecutionOutput model constructor.
     * @property {module:model/ExecutionOutput}
     */
    ExecutionOutput,

    /**
     * The ExpandableApprovalRequestResponse model constructor.
     * @property {module:model/ExpandableApprovalRequestResponse}
     */
    ExpandableApprovalRequestResponse,

    /**
     * The ExpandableApprovalRequestsResponse model constructor.
     * @property {module:model/ExpandableApprovalRequestsResponse}
     */
    ExpandableApprovalRequestsResponse,

    /**
     * The ExpandedAIConfig model constructor.
     * @property {module:model/ExpandedAIConfig}
     */
    ExpandedAIConfig,

    /**
     * The ExpandedDirectlyLinkedFlag model constructor.
     * @property {module:model/ExpandedDirectlyLinkedFlag}
     */
    ExpandedDirectlyLinkedFlag,

    /**
     * The ExpandedDirectlyLinkedFlags model constructor.
     * @property {module:model/ExpandedDirectlyLinkedFlags}
     */
    ExpandedDirectlyLinkedFlags,

    /**
     * The ExpandedDirectlyLinkedSegment model constructor.
     * @property {module:model/ExpandedDirectlyLinkedSegment}
     */
    ExpandedDirectlyLinkedSegment,

    /**
     * The ExpandedDirectlyLinkedSegments model constructor.
     * @property {module:model/ExpandedDirectlyLinkedSegments}
     */
    ExpandedDirectlyLinkedSegments,

    /**
     * The ExpandedFlag model constructor.
     * @property {module:model/ExpandedFlag}
     */
    ExpandedFlag,

    /**
     * The ExpandedFlagRep model constructor.
     * @property {module:model/ExpandedFlagRep}
     */
    ExpandedFlagRep,

    /**
     * The ExpandedLinkedAIConfigs model constructor.
     * @property {module:model/ExpandedLinkedAIConfigs}
     */
    ExpandedLinkedAIConfigs,

    /**
     * The ExpandedLinkedFlags model constructor.
     * @property {module:model/ExpandedLinkedFlags}
     */
    ExpandedLinkedFlags,

    /**
     * The ExpandedLinkedMetrics model constructor.
     * @property {module:model/ExpandedLinkedMetrics}
     */
    ExpandedLinkedMetrics,

    /**
     * The ExpandedLinkedResources model constructor.
     * @property {module:model/ExpandedLinkedResources}
     */
    ExpandedLinkedResources,

    /**
     * The ExpandedLinkedResourcesAIConfigs model constructor.
     * @property {module:model/ExpandedLinkedResourcesAIConfigs}
     */
    ExpandedLinkedResourcesAIConfigs,

    /**
     * The ExpandedLinkedResourcesFlags model constructor.
     * @property {module:model/ExpandedLinkedResourcesFlags}
     */
    ExpandedLinkedResourcesFlags,

    /**
     * The ExpandedLinkedResourcesItems model constructor.
     * @property {module:model/ExpandedLinkedResourcesItems}
     */
    ExpandedLinkedResourcesItems,

    /**
     * The ExpandedLinkedResourcesMetrics model constructor.
     * @property {module:model/ExpandedLinkedResourcesMetrics}
     */
    ExpandedLinkedResourcesMetrics,

    /**
     * The ExpandedLinkedResourcesSegments model constructor.
     * @property {module:model/ExpandedLinkedResourcesSegments}
     */
    ExpandedLinkedResourcesSegments,

    /**
     * The ExpandedLinkedSegments model constructor.
     * @property {module:model/ExpandedLinkedSegments}
     */
    ExpandedLinkedSegments,

    /**
     * The ExpandedMetric model constructor.
     * @property {module:model/ExpandedMetric}
     */
    ExpandedMetric,

    /**
     * The ExpandedResourceRep model constructor.
     * @property {module:model/ExpandedResourceRep}
     */
    ExpandedResourceRep,

    /**
     * The ExpandedSegment model constructor.
     * @property {module:model/ExpandedSegment}
     */
    ExpandedSegment,

    /**
     * The Experiment model constructor.
     * @property {module:model/Experiment}
     */
    Experiment,

    /**
     * The ExperimentAllocationRep model constructor.
     * @property {module:model/ExperimentAllocationRep}
     */
    ExperimentAllocationRep,

    /**
     * The ExperimentCollectionRep model constructor.
     * @property {module:model/ExperimentCollectionRep}
     */
    ExperimentCollectionRep,

    /**
     * The ExperimentEnabledPeriodRep model constructor.
     * @property {module:model/ExperimentEnabledPeriodRep}
     */
    ExperimentEnabledPeriodRep,

    /**
     * The ExperimentEnvironmentSettingRep model constructor.
     * @property {module:model/ExperimentEnvironmentSettingRep}
     */
    ExperimentEnvironmentSettingRep,

    /**
     * The ExperimentInfoRep model constructor.
     * @property {module:model/ExperimentInfoRep}
     */
    ExperimentInfoRep,

    /**
     * The ExperimentPatchInput model constructor.
     * @property {module:model/ExperimentPatchInput}
     */
    ExperimentPatchInput,

    /**
     * The ExperimentPost model constructor.
     * @property {module:model/ExperimentPost}
     */
    ExperimentPost,

    /**
     * The ExpiringTarget model constructor.
     * @property {module:model/ExpiringTarget}
     */
    ExpiringTarget,

    /**
     * The ExpiringTargetError model constructor.
     * @property {module:model/ExpiringTargetError}
     */
    ExpiringTargetError,

    /**
     * The ExpiringTargetGetResponse model constructor.
     * @property {module:model/ExpiringTargetGetResponse}
     */
    ExpiringTargetGetResponse,

    /**
     * The ExpiringTargetPatchResponse model constructor.
     * @property {module:model/ExpiringTargetPatchResponse}
     */
    ExpiringTargetPatchResponse,

    /**
     * The ExpiringUserTargetGetResponse model constructor.
     * @property {module:model/ExpiringUserTargetGetResponse}
     */
    ExpiringUserTargetGetResponse,

    /**
     * The ExpiringUserTargetItem model constructor.
     * @property {module:model/ExpiringUserTargetItem}
     */
    ExpiringUserTargetItem,

    /**
     * The ExpiringUserTargetPatchResponse model constructor.
     * @property {module:model/ExpiringUserTargetPatchResponse}
     */
    ExpiringUserTargetPatchResponse,

    /**
     * The Export model constructor.
     * @property {module:model/Export}
     */
    Export,

    /**
     * The Extinction model constructor.
     * @property {module:model/Extinction}
     */
    Extinction,

    /**
     * The ExtinctionCollectionRep model constructor.
     * @property {module:model/ExtinctionCollectionRep}
     */
    ExtinctionCollectionRep,

    /**
     * The FailedResourceLink model constructor.
     * @property {module:model/FailedResourceLink}
     */
    FailedResourceLink,

    /**
     * The FailureReasonRep model constructor.
     * @property {module:model/FailureReasonRep}
     */
    FailureReasonRep,

    /**
     * The FeatureFlag model constructor.
     * @property {module:model/FeatureFlag}
     */
    FeatureFlag,

    /**
     * The FeatureFlagBody model constructor.
     * @property {module:model/FeatureFlagBody}
     */
    FeatureFlagBody,

    /**
     * The FeatureFlagConfig model constructor.
     * @property {module:model/FeatureFlagConfig}
     */
    FeatureFlagConfig,

    /**
     * The FeatureFlagScheduledChange model constructor.
     * @property {module:model/FeatureFlagScheduledChange}
     */
    FeatureFlagScheduledChange,

    /**
     * The FeatureFlagScheduledChanges model constructor.
     * @property {module:model/FeatureFlagScheduledChanges}
     */
    FeatureFlagScheduledChanges,

    /**
     * The FeatureFlagStatus model constructor.
     * @property {module:model/FeatureFlagStatus}
     */
    FeatureFlagStatus,

    /**
     * The FeatureFlagStatusAcrossEnvironments model constructor.
     * @property {module:model/FeatureFlagStatusAcrossEnvironments}
     */
    FeatureFlagStatusAcrossEnvironments,

    /**
     * The FeatureFlagStatuses model constructor.
     * @property {module:model/FeatureFlagStatuses}
     */
    FeatureFlagStatuses,

    /**
     * The FeatureFlags model constructor.
     * @property {module:model/FeatureFlags}
     */
    FeatureFlags,

    /**
     * The FileRep model constructor.
     * @property {module:model/FileRep}
     */
    FileRep,

    /**
     * The Filter model constructor.
     * @property {module:model/Filter}
     */
    Filter,

    /**
     * The FlagConfigApprovalRequestResponse model constructor.
     * @property {module:model/FlagConfigApprovalRequestResponse}
     */
    FlagConfigApprovalRequestResponse,

    /**
     * The FlagConfigApprovalRequestsResponse model constructor.
     * @property {module:model/FlagConfigApprovalRequestsResponse}
     */
    FlagConfigApprovalRequestsResponse,

    /**
     * The FlagConfigEvaluation model constructor.
     * @property {module:model/FlagConfigEvaluation}
     */
    FlagConfigEvaluation,

    /**
     * The FlagConfigMigrationSettingsRep model constructor.
     * @property {module:model/FlagConfigMigrationSettingsRep}
     */
    FlagConfigMigrationSettingsRep,

    /**
     * The FlagCopyConfigEnvironment model constructor.
     * @property {module:model/FlagCopyConfigEnvironment}
     */
    FlagCopyConfigEnvironment,

    /**
     * The FlagCopyConfigPost model constructor.
     * @property {module:model/FlagCopyConfigPost}
     */
    FlagCopyConfigPost,

    /**
     * The FlagDefaultsRep model constructor.
     * @property {module:model/FlagDefaultsRep}
     */
    FlagDefaultsRep,

    /**
     * The FlagEventCollectionRep model constructor.
     * @property {module:model/FlagEventCollectionRep}
     */
    FlagEventCollectionRep,

    /**
     * The FlagEventExperiment model constructor.
     * @property {module:model/FlagEventExperiment}
     */
    FlagEventExperiment,

    /**
     * The FlagEventExperimentCollection model constructor.
     * @property {module:model/FlagEventExperimentCollection}
     */
    FlagEventExperimentCollection,

    /**
     * The FlagEventExperimentIteration model constructor.
     * @property {module:model/FlagEventExperimentIteration}
     */
    FlagEventExperimentIteration,

    /**
     * The FlagEventImpactRep model constructor.
     * @property {module:model/FlagEventImpactRep}
     */
    FlagEventImpactRep,

    /**
     * The FlagEventMemberRep model constructor.
     * @property {module:model/FlagEventMemberRep}
     */
    FlagEventMemberRep,

    /**
     * The FlagEventRep model constructor.
     * @property {module:model/FlagEventRep}
     */
    FlagEventRep,

    /**
     * The FlagFollowersByProjEnvGetRep model constructor.
     * @property {module:model/FlagFollowersByProjEnvGetRep}
     */
    FlagFollowersByProjEnvGetRep,

    /**
     * The FlagFollowersGetRep model constructor.
     * @property {module:model/FlagFollowersGetRep}
     */
    FlagFollowersGetRep,

    /**
     * The FlagImportConfigurationPost model constructor.
     * @property {module:model/FlagImportConfigurationPost}
     */
    FlagImportConfigurationPost,

    /**
     * The FlagImportIntegration model constructor.
     * @property {module:model/FlagImportIntegration}
     */
    FlagImportIntegration,

    /**
     * The FlagImportIntegrationCollection model constructor.
     * @property {module:model/FlagImportIntegrationCollection}
     */
    FlagImportIntegrationCollection,

    /**
     * The FlagImportIntegrationCollectionLinks model constructor.
     * @property {module:model/FlagImportIntegrationCollectionLinks}
     */
    FlagImportIntegrationCollectionLinks,

    /**
     * The FlagImportIntegrationLinks model constructor.
     * @property {module:model/FlagImportIntegrationLinks}
     */
    FlagImportIntegrationLinks,

    /**
     * The FlagImportStatus model constructor.
     * @property {module:model/FlagImportStatus}
     */
    FlagImportStatus,

    /**
     * The FlagInput model constructor.
     * @property {module:model/FlagInput}
     */
    FlagInput,

    /**
     * The FlagLinkCollectionRep model constructor.
     * @property {module:model/FlagLinkCollectionRep}
     */
    FlagLinkCollectionRep,

    /**
     * The FlagLinkMember model constructor.
     * @property {module:model/FlagLinkMember}
     */
    FlagLinkMember,

    /**
     * The FlagLinkPost model constructor.
     * @property {module:model/FlagLinkPost}
     */
    FlagLinkPost,

    /**
     * The FlagLinkRep model constructor.
     * @property {module:model/FlagLinkRep}
     */
    FlagLinkRep,

    /**
     * The FlagListingRep model constructor.
     * @property {module:model/FlagListingRep}
     */
    FlagListingRep,

    /**
     * The FlagMigrationSettingsRep model constructor.
     * @property {module:model/FlagMigrationSettingsRep}
     */
    FlagMigrationSettingsRep,

    /**
     * The FlagPrerequisitePost model constructor.
     * @property {module:model/FlagPrerequisitePost}
     */
    FlagPrerequisitePost,

    /**
     * The FlagReferenceCollectionRep model constructor.
     * @property {module:model/FlagReferenceCollectionRep}
     */
    FlagReferenceCollectionRep,

    /**
     * The FlagReferenceRep model constructor.
     * @property {module:model/FlagReferenceRep}
     */
    FlagReferenceRep,

    /**
     * The FlagRep model constructor.
     * @property {module:model/FlagRep}
     */
    FlagRep,

    /**
     * The FlagScheduledChangesInput model constructor.
     * @property {module:model/FlagScheduledChangesInput}
     */
    FlagScheduledChangesInput,

    /**
     * The FlagSempatch model constructor.
     * @property {module:model/FlagSempatch}
     */
    FlagSempatch,

    /**
     * The FlagStatusRep model constructor.
     * @property {module:model/FlagStatusRep}
     */
    FlagStatusRep,

    /**
     * The FlagSummary model constructor.
     * @property {module:model/FlagSummary}
     */
    FlagSummary,

    /**
     * The FlagTriggerInput model constructor.
     * @property {module:model/FlagTriggerInput}
     */
    FlagTriggerInput,

    /**
     * The FlagsSummary model constructor.
     * @property {module:model/FlagsSummary}
     */
    FlagsSummary,

    /**
     * The FollowFlagMember model constructor.
     * @property {module:model/FollowFlagMember}
     */
    FollowFlagMember,

    /**
     * The FollowersPerFlag model constructor.
     * @property {module:model/FollowersPerFlag}
     */
    FollowersPerFlag,

    /**
     * The ForbiddenErrorRep model constructor.
     * @property {module:model/ForbiddenErrorRep}
     */
    ForbiddenErrorRep,

    /**
     * The FormVariable model constructor.
     * @property {module:model/FormVariable}
     */
    FormVariable,

    /**
     * The GenerateTrustPolicyPostRep model constructor.
     * @property {module:model/GenerateTrustPolicyPostRep}
     */
    GenerateTrustPolicyPostRep,

    /**
     * The GenerateWarehouseDestinationKeyPairPostRep model constructor.
     * @property {module:model/GenerateWarehouseDestinationKeyPairPostRep}
     */
    GenerateWarehouseDestinationKeyPairPostRep,

    /**
     * The GetAnnouncementsPublic200Response model constructor.
     * @property {module:model/GetAnnouncementsPublic200Response}
     */
    GetAnnouncementsPublic200Response,

    /**
     * The GuardedReleaseConfig model constructor.
     * @property {module:model/GuardedReleaseConfig}
     */
    GuardedReleaseConfig,

    /**
     * The HMACSignature model constructor.
     * @property {module:model/HMACSignature}
     */
    HMACSignature,

    /**
     * The HeaderItems model constructor.
     * @property {module:model/HeaderItems}
     */
    HeaderItems,

    /**
     * The HoldoutDetailRep model constructor.
     * @property {module:model/HoldoutDetailRep}
     */
    HoldoutDetailRep,

    /**
     * The HoldoutPatchInput model constructor.
     * @property {module:model/HoldoutPatchInput}
     */
    HoldoutPatchInput,

    /**
     * The HoldoutPostRequest model constructor.
     * @property {module:model/HoldoutPostRequest}
     */
    HoldoutPostRequest,

    /**
     * The HoldoutRep model constructor.
     * @property {module:model/HoldoutRep}
     */
    HoldoutRep,

    /**
     * The HoldoutsCollectionRep model constructor.
     * @property {module:model/HoldoutsCollectionRep}
     */
    HoldoutsCollectionRep,

    /**
     * The HunkRep model constructor.
     * @property {module:model/HunkRep}
     */
    HunkRep,

    /**
     * The Import model constructor.
     * @property {module:model/Import}
     */
    Import,

    /**
     * The InitiatorRep model constructor.
     * @property {module:model/InitiatorRep}
     */
    InitiatorRep,

    /**
     * The InsightGroup model constructor.
     * @property {module:model/InsightGroup}
     */
    InsightGroup,

    /**
     * The InsightGroupCollection model constructor.
     * @property {module:model/InsightGroupCollection}
     */
    InsightGroupCollection,

    /**
     * The InsightGroupCollectionMetadata model constructor.
     * @property {module:model/InsightGroupCollectionMetadata}
     */
    InsightGroupCollectionMetadata,

    /**
     * The InsightGroupCollectionScoreMetadata model constructor.
     * @property {module:model/InsightGroupCollectionScoreMetadata}
     */
    InsightGroupCollectionScoreMetadata,

    /**
     * The InsightGroupScores model constructor.
     * @property {module:model/InsightGroupScores}
     */
    InsightGroupScores,

    /**
     * The InsightGroupsCountByIndicator model constructor.
     * @property {module:model/InsightGroupsCountByIndicator}
     */
    InsightGroupsCountByIndicator,

    /**
     * The InsightPeriod model constructor.
     * @property {module:model/InsightPeriod}
     */
    InsightPeriod,

    /**
     * The InsightScores model constructor.
     * @property {module:model/InsightScores}
     */
    InsightScores,

    /**
     * The InsightsChart model constructor.
     * @property {module:model/InsightsChart}
     */
    InsightsChart,

    /**
     * The InsightsChartBounds model constructor.
     * @property {module:model/InsightsChartBounds}
     */
    InsightsChartBounds,

    /**
     * The InsightsChartMetadata model constructor.
     * @property {module:model/InsightsChartMetadata}
     */
    InsightsChartMetadata,

    /**
     * The InsightsChartMetric model constructor.
     * @property {module:model/InsightsChartMetric}
     */
    InsightsChartMetric,

    /**
     * The InsightsChartSeries model constructor.
     * @property {module:model/InsightsChartSeries}
     */
    InsightsChartSeries,

    /**
     * The InsightsChartSeriesDataPoint model constructor.
     * @property {module:model/InsightsChartSeriesDataPoint}
     */
    InsightsChartSeriesDataPoint,

    /**
     * The InsightsChartSeriesMetadata model constructor.
     * @property {module:model/InsightsChartSeriesMetadata}
     */
    InsightsChartSeriesMetadata,

    /**
     * The InsightsChartSeriesMetadataAxis model constructor.
     * @property {module:model/InsightsChartSeriesMetadataAxis}
     */
    InsightsChartSeriesMetadataAxis,

    /**
     * The InsightsMetricIndicatorRange model constructor.
     * @property {module:model/InsightsMetricIndicatorRange}
     */
    InsightsMetricIndicatorRange,

    /**
     * The InsightsMetricScore model constructor.
     * @property {module:model/InsightsMetricScore}
     */
    InsightsMetricScore,

    /**
     * The InsightsMetricTierDefinition model constructor.
     * @property {module:model/InsightsMetricTierDefinition}
     */
    InsightsMetricTierDefinition,

    /**
     * The InsightsRepository model constructor.
     * @property {module:model/InsightsRepository}
     */
    InsightsRepository,

    /**
     * The InsightsRepositoryCollection model constructor.
     * @property {module:model/InsightsRepositoryCollection}
     */
    InsightsRepositoryCollection,

    /**
     * The InsightsRepositoryProject model constructor.
     * @property {module:model/InsightsRepositoryProject}
     */
    InsightsRepositoryProject,

    /**
     * The InsightsRepositoryProjectCollection model constructor.
     * @property {module:model/InsightsRepositoryProjectCollection}
     */
    InsightsRepositoryProjectCollection,

    /**
     * The InsightsRepositoryProjectMappings model constructor.
     * @property {module:model/InsightsRepositoryProjectMappings}
     */
    InsightsRepositoryProjectMappings,

    /**
     * The InstructionUserRequest model constructor.
     * @property {module:model/InstructionUserRequest}
     */
    InstructionUserRequest,

    /**
     * The Integration model constructor.
     * @property {module:model/Integration}
     */
    Integration,

    /**
     * The IntegrationConfigurationCollectionRep model constructor.
     * @property {module:model/IntegrationConfigurationCollectionRep}
     */
    IntegrationConfigurationCollectionRep,

    /**
     * The IntegrationConfigurationPost model constructor.
     * @property {module:model/IntegrationConfigurationPost}
     */
    IntegrationConfigurationPost,

    /**
     * The IntegrationConfigurationsRep model constructor.
     * @property {module:model/IntegrationConfigurationsRep}
     */
    IntegrationConfigurationsRep,

    /**
     * The IntegrationDeliveryConfiguration model constructor.
     * @property {module:model/IntegrationDeliveryConfiguration}
     */
    IntegrationDeliveryConfiguration,

    /**
     * The IntegrationDeliveryConfigurationCollection model constructor.
     * @property {module:model/IntegrationDeliveryConfigurationCollection}
     */
    IntegrationDeliveryConfigurationCollection,

    /**
     * The IntegrationDeliveryConfigurationCollectionLinks model constructor.
     * @property {module:model/IntegrationDeliveryConfigurationCollectionLinks}
     */
    IntegrationDeliveryConfigurationCollectionLinks,

    /**
     * The IntegrationDeliveryConfigurationLinks model constructor.
     * @property {module:model/IntegrationDeliveryConfigurationLinks}
     */
    IntegrationDeliveryConfigurationLinks,

    /**
     * The IntegrationDeliveryConfigurationPost model constructor.
     * @property {module:model/IntegrationDeliveryConfigurationPost}
     */
    IntegrationDeliveryConfigurationPost,

    /**
     * The IntegrationDeliveryConfigurationResponse model constructor.
     * @property {module:model/IntegrationDeliveryConfigurationResponse}
     */
    IntegrationDeliveryConfigurationResponse,

    /**
     * The IntegrationMetadata model constructor.
     * @property {module:model/IntegrationMetadata}
     */
    IntegrationMetadata,

    /**
     * The IntegrationStatus model constructor.
     * @property {module:model/IntegrationStatus}
     */
    IntegrationStatus,

    /**
     * The IntegrationStatusRep model constructor.
     * @property {module:model/IntegrationStatusRep}
     */
    IntegrationStatusRep,

    /**
     * The IntegrationSubscriptionStatusRep model constructor.
     * @property {module:model/IntegrationSubscriptionStatusRep}
     */
    IntegrationSubscriptionStatusRep,

    /**
     * The Integrations model constructor.
     * @property {module:model/Integrations}
     */
    Integrations,

    /**
     * The InvalidRequestErrorRep model constructor.
     * @property {module:model/InvalidRequestErrorRep}
     */
    InvalidRequestErrorRep,

    /**
     * The IpList model constructor.
     * @property {module:model/IpList}
     */
    IpList,

    /**
     * The IterationInput model constructor.
     * @property {module:model/IterationInput}
     */
    IterationInput,

    /**
     * The IterationRep model constructor.
     * @property {module:model/IterationRep}
     */
    IterationRep,

    /**
     * The JudgeAttachment model constructor.
     * @property {module:model/JudgeAttachment}
     */
    JudgeAttachment,

    /**
     * The JudgeConfiguration model constructor.
     * @property {module:model/JudgeConfiguration}
     */
    JudgeConfiguration,

    /**
     * The LastSeenMetadata model constructor.
     * @property {module:model/LastSeenMetadata}
     */
    LastSeenMetadata,

    /**
     * The LayerCollectionRep model constructor.
     * @property {module:model/LayerCollectionRep}
     */
    LayerCollectionRep,

    /**
     * The LayerConfigurationRep model constructor.
     * @property {module:model/LayerConfigurationRep}
     */
    LayerConfigurationRep,

    /**
     * The LayerPatchInput model constructor.
     * @property {module:model/LayerPatchInput}
     */
    LayerPatchInput,

    /**
     * The LayerPost model constructor.
     * @property {module:model/LayerPost}
     */
    LayerPost,

    /**
     * The LayerRep model constructor.
     * @property {module:model/LayerRep}
     */
    LayerRep,

    /**
     * The LayerReservationRep model constructor.
     * @property {module:model/LayerReservationRep}
     */
    LayerReservationRep,

    /**
     * The LayerSnapshotRep model constructor.
     * @property {module:model/LayerSnapshotRep}
     */
    LayerSnapshotRep,

    /**
     * The LeadTimeStagesRep model constructor.
     * @property {module:model/LeadTimeStagesRep}
     */
    LeadTimeStagesRep,

    /**
     * The LegacyExperimentRep model constructor.
     * @property {module:model/LegacyExperimentRep}
     */
    LegacyExperimentRep,

    /**
     * The Link model constructor.
     * @property {module:model/Link}
     */
    Link,

    /**
     * The LinkResourceSuccessResponse model constructor.
     * @property {module:model/LinkResourceSuccessResponse}
     */
    LinkResourceSuccessResponse,

    /**
     * The Maintainer model constructor.
     * @property {module:model/Maintainer}
     */
    Maintainer,

    /**
     * The MaintainerMember model constructor.
     * @property {module:model/MaintainerMember}
     */
    MaintainerMember,

    /**
     * The MaintainerRep model constructor.
     * @property {module:model/MaintainerRep}
     */
    MaintainerRep,

    /**
     * The MaintainerTeam model constructor.
     * @property {module:model/MaintainerTeam}
     */
    MaintainerTeam,

    /**
     * The Member model constructor.
     * @property {module:model/Member}
     */
    Member,

    /**
     * The MemberDataRep model constructor.
     * @property {module:model/MemberDataRep}
     */
    MemberDataRep,

    /**
     * The MemberImportItem model constructor.
     * @property {module:model/MemberImportItem}
     */
    MemberImportItem,

    /**
     * The MemberPermissionGrantSummaryRep model constructor.
     * @property {module:model/MemberPermissionGrantSummaryRep}
     */
    MemberPermissionGrantSummaryRep,

    /**
     * The MemberSummary model constructor.
     * @property {module:model/MemberSummary}
     */
    MemberSummary,

    /**
     * The MemberTeamSummaryRep model constructor.
     * @property {module:model/MemberTeamSummaryRep}
     */
    MemberTeamSummaryRep,

    /**
     * The MemberTeamsPostInput model constructor.
     * @property {module:model/MemberTeamsPostInput}
     */
    MemberTeamsPostInput,

    /**
     * The Members model constructor.
     * @property {module:model/Members}
     */
    Members,

    /**
     * The MembersPatchInput model constructor.
     * @property {module:model/MembersPatchInput}
     */
    MembersPatchInput,

    /**
     * The Message model constructor.
     * @property {module:model/Message}
     */
    Message,

    /**
     * The MethodNotAllowedErrorRep model constructor.
     * @property {module:model/MethodNotAllowedErrorRep}
     */
    MethodNotAllowedErrorRep,

    /**
     * The MetricByVariation model constructor.
     * @property {module:model/MetricByVariation}
     */
    MetricByVariation,

    /**
     * The MetricCollectionRep model constructor.
     * @property {module:model/MetricCollectionRep}
     */
    MetricCollectionRep,

    /**
     * The MetricDataSourceRefRep model constructor.
     * @property {module:model/MetricDataSourceRefRep}
     */
    MetricDataSourceRefRep,

    /**
     * The MetricEventDefaultRep model constructor.
     * @property {module:model/MetricEventDefaultRep}
     */
    MetricEventDefaultRep,

    /**
     * The MetricGroupCollectionRep model constructor.
     * @property {module:model/MetricGroupCollectionRep}
     */
    MetricGroupCollectionRep,

    /**
     * The MetricGroupPost model constructor.
     * @property {module:model/MetricGroupPost}
     */
    MetricGroupPost,

    /**
     * The MetricGroupRep model constructor.
     * @property {module:model/MetricGroupRep}
     */
    MetricGroupRep,

    /**
     * The MetricInGroupRep model constructor.
     * @property {module:model/MetricInGroupRep}
     */
    MetricInGroupRep,

    /**
     * The MetricInMetricGroupInput model constructor.
     * @property {module:model/MetricInMetricGroupInput}
     */
    MetricInMetricGroupInput,

    /**
     * The MetricInput model constructor.
     * @property {module:model/MetricInput}
     */
    MetricInput,

    /**
     * The MetricListingRep model constructor.
     * @property {module:model/MetricListingRep}
     */
    MetricListingRep,

    /**
     * The MetricPost model constructor.
     * @property {module:model/MetricPost}
     */
    MetricPost,

    /**
     * The MetricRep model constructor.
     * @property {module:model/MetricRep}
     */
    MetricRep,

    /**
     * The MetricV2Rep model constructor.
     * @property {module:model/MetricV2Rep}
     */
    MetricV2Rep,

    /**
     * The Metrics model constructor.
     * @property {module:model/Metrics}
     */
    Metrics,

    /**
     * The MetricsSummary model constructor.
     * @property {module:model/MetricsSummary}
     */
    MetricsSummary,

    /**
     * The MigrationSafetyIssueRep model constructor.
     * @property {module:model/MigrationSafetyIssueRep}
     */
    MigrationSafetyIssueRep,

    /**
     * The MigrationSettingsPost model constructor.
     * @property {module:model/MigrationSettingsPost}
     */
    MigrationSettingsPost,

    /**
     * The ModelConfig model constructor.
     * @property {module:model/ModelConfig}
     */
    ModelConfig,

    /**
     * The ModelConfigPost model constructor.
     * @property {module:model/ModelConfigPost}
     */
    ModelConfigPost,

    /**
     * The Modification model constructor.
     * @property {module:model/Modification}
     */
    Modification,

    /**
     * The MultiEnvironmentDependentFlag model constructor.
     * @property {module:model/MultiEnvironmentDependentFlag}
     */
    MultiEnvironmentDependentFlag,

    /**
     * The MultiEnvironmentDependentFlags model constructor.
     * @property {module:model/MultiEnvironmentDependentFlags}
     */
    MultiEnvironmentDependentFlags,

    /**
     * The NamingConvention model constructor.
     * @property {module:model/NamingConvention}
     */
    NamingConvention,

    /**
     * The NewMemberForm model constructor.
     * @property {module:model/NewMemberForm}
     */
    NewMemberForm,

    /**
     * The NotFoundErrorRep model constructor.
     * @property {module:model/NotFoundErrorRep}
     */
    NotFoundErrorRep,

    /**
     * The OauthClientPost model constructor.
     * @property {module:model/OauthClientPost}
     */
    OauthClientPost,

    /**
     * The OptionsArray model constructor.
     * @property {module:model/OptionsArray}
     */
    OptionsArray,

    /**
     * The PaginatedLinks model constructor.
     * @property {module:model/PaginatedLinks}
     */
    PaginatedLinks,

    /**
     * The ParameterDefault model constructor.
     * @property {module:model/ParameterDefault}
     */
    ParameterDefault,

    /**
     * The ParameterRep model constructor.
     * @property {module:model/ParameterRep}
     */
    ParameterRep,

    /**
     * The ParentAndSelfLinks model constructor.
     * @property {module:model/ParentAndSelfLinks}
     */
    ParentAndSelfLinks,

    /**
     * The ParentLink model constructor.
     * @property {module:model/ParentLink}
     */
    ParentLink,

    /**
     * The ParentResourceRep model constructor.
     * @property {module:model/ParentResourceRep}
     */
    ParentResourceRep,

    /**
     * The PatchFailedErrorRep model constructor.
     * @property {module:model/PatchFailedErrorRep}
     */
    PatchFailedErrorRep,

    /**
     * The PatchFlagsRequest model constructor.
     * @property {module:model/PatchFlagsRequest}
     */
    PatchFlagsRequest,

    /**
     * The PatchOperation model constructor.
     * @property {module:model/PatchOperation}
     */
    PatchOperation,

    /**
     * The PatchSegmentExpiringTargetInputRep model constructor.
     * @property {module:model/PatchSegmentExpiringTargetInputRep}
     */
    PatchSegmentExpiringTargetInputRep,

    /**
     * The PatchSegmentExpiringTargetInstruction model constructor.
     * @property {module:model/PatchSegmentExpiringTargetInstruction}
     */
    PatchSegmentExpiringTargetInstruction,

    /**
     * The PatchSegmentInstruction model constructor.
     * @property {module:model/PatchSegmentInstruction}
     */
    PatchSegmentInstruction,

    /**
     * The PatchSegmentRequest model constructor.
     * @property {module:model/PatchSegmentRequest}
     */
    PatchSegmentRequest,

    /**
     * The PatchUsersRequest model constructor.
     * @property {module:model/PatchUsersRequest}
     */
    PatchUsersRequest,

    /**
     * The PatchWithComment model constructor.
     * @property {module:model/PatchWithComment}
     */
    PatchWithComment,

    /**
     * The PermissionGrantInput model constructor.
     * @property {module:model/PermissionGrantInput}
     */
    PermissionGrantInput,

    /**
     * The Phase model constructor.
     * @property {module:model/Phase}
     */
    Phase,

    /**
     * The PhaseInfo model constructor.
     * @property {module:model/PhaseInfo}
     */
    PhaseInfo,

    /**
     * The PostApprovalRequestApplyRequest model constructor.
     * @property {module:model/PostApprovalRequestApplyRequest}
     */
    PostApprovalRequestApplyRequest,

    /**
     * The PostApprovalRequestReviewRequest model constructor.
     * @property {module:model/PostApprovalRequestReviewRequest}
     */
    PostApprovalRequestReviewRequest,

    /**
     * The PostDeploymentEventInput model constructor.
     * @property {module:model/PostDeploymentEventInput}
     */
    PostDeploymentEventInput,

    /**
     * The PostFlagScheduledChangesInput model constructor.
     * @property {module:model/PostFlagScheduledChangesInput}
     */
    PostFlagScheduledChangesInput,

    /**
     * The PostInsightGroupParams model constructor.
     * @property {module:model/PostInsightGroupParams}
     */
    PostInsightGroupParams,

    /**
     * The PostReleasePolicyRequest model constructor.
     * @property {module:model/PostReleasePolicyRequest}
     */
    PostReleasePolicyRequest,

    /**
     * The Prerequisite model constructor.
     * @property {module:model/Prerequisite}
     */
    Prerequisite,

    /**
     * The Project model constructor.
     * @property {module:model/Project}
     */
    Project,

    /**
     * The ProjectPost model constructor.
     * @property {module:model/ProjectPost}
     */
    ProjectPost,

    /**
     * The ProjectRep model constructor.
     * @property {module:model/ProjectRep}
     */
    ProjectRep,

    /**
     * The ProjectSummary model constructor.
     * @property {module:model/ProjectSummary}
     */
    ProjectSummary,

    /**
     * The ProjectSummaryCollection model constructor.
     * @property {module:model/ProjectSummaryCollection}
     */
    ProjectSummaryCollection,

    /**
     * The Projects model constructor.
     * @property {module:model/Projects}
     */
    Projects,

    /**
     * The PullRequestCollectionRep model constructor.
     * @property {module:model/PullRequestCollectionRep}
     */
    PullRequestCollectionRep,

    /**
     * The PullRequestLeadTimeRep model constructor.
     * @property {module:model/PullRequestLeadTimeRep}
     */
    PullRequestLeadTimeRep,

    /**
     * The PullRequestRep model constructor.
     * @property {module:model/PullRequestRep}
     */
    PullRequestRep,

    /**
     * The PutBranch model constructor.
     * @property {module:model/PutBranch}
     */
    PutBranch,

    /**
     * The PutReleasePolicyRequest model constructor.
     * @property {module:model/PutReleasePolicyRequest}
     */
    PutReleasePolicyRequest,

    /**
     * The RandomizationSettingsPut model constructor.
     * @property {module:model/RandomizationSettingsPut}
     */
    RandomizationSettingsPut,

    /**
     * The RandomizationSettingsRep model constructor.
     * @property {module:model/RandomizationSettingsRep}
     */
    RandomizationSettingsRep,

    /**
     * The RandomizationUnitInput model constructor.
     * @property {module:model/RandomizationUnitInput}
     */
    RandomizationUnitInput,

    /**
     * The RandomizationUnitRep model constructor.
     * @property {module:model/RandomizationUnitRep}
     */
    RandomizationUnitRep,

    /**
     * The RateLimitedErrorRep model constructor.
     * @property {module:model/RateLimitedErrorRep}
     */
    RateLimitedErrorRep,

    /**
     * The RecentTriggerBody model constructor.
     * @property {module:model/RecentTriggerBody}
     */
    RecentTriggerBody,

    /**
     * The ReferenceRep model constructor.
     * @property {module:model/ReferenceRep}
     */
    ReferenceRep,

    /**
     * The RelatedExperimentRep model constructor.
     * @property {module:model/RelatedExperimentRep}
     */
    RelatedExperimentRep,

    /**
     * The RelayAutoConfigCollectionRep model constructor.
     * @property {module:model/RelayAutoConfigCollectionRep}
     */
    RelayAutoConfigCollectionRep,

    /**
     * The RelayAutoConfigPost model constructor.
     * @property {module:model/RelayAutoConfigPost}
     */
    RelayAutoConfigPost,

    /**
     * The RelayAutoConfigRep model constructor.
     * @property {module:model/RelayAutoConfigRep}
     */
    RelayAutoConfigRep,

    /**
     * The Release model constructor.
     * @property {module:model/Release}
     */
    Release,

    /**
     * The ReleaseAudience model constructor.
     * @property {module:model/ReleaseAudience}
     */
    ReleaseAudience,

    /**
     * The ReleaseGuardianConfiguration model constructor.
     * @property {module:model/ReleaseGuardianConfiguration}
     */
    ReleaseGuardianConfiguration,

    /**
     * The ReleaseGuardianConfigurationInput model constructor.
     * @property {module:model/ReleaseGuardianConfigurationInput}
     */
    ReleaseGuardianConfigurationInput,

    /**
     * The ReleaseMethod model constructor.
     * @property {module:model/ReleaseMethod}
     */
    ReleaseMethod,

    /**
     * The ReleasePhase model constructor.
     * @property {module:model/ReleasePhase}
     */
    ReleasePhase,

    /**
     * The ReleasePipeline model constructor.
     * @property {module:model/ReleasePipeline}
     */
    ReleasePipeline,

    /**
     * The ReleasePipelineCollection model constructor.
     * @property {module:model/ReleasePipelineCollection}
     */
    ReleasePipelineCollection,

    /**
     * The ReleasePoliciesAccess model constructor.
     * @property {module:model/ReleasePoliciesAccess}
     */
    ReleasePoliciesAccess,

    /**
     * The ReleasePoliciesAccessAllowedReason model constructor.
     * @property {module:model/ReleasePoliciesAccessAllowedReason}
     */
    ReleasePoliciesAccessAllowedReason,

    /**
     * The ReleasePoliciesAccessAllowedRep model constructor.
     * @property {module:model/ReleasePoliciesAccessAllowedRep}
     */
    ReleasePoliciesAccessAllowedRep,

    /**
     * The ReleasePoliciesAccessDenied model constructor.
     * @property {module:model/ReleasePoliciesAccessDenied}
     */
    ReleasePoliciesAccessDenied,

    /**
     * The ReleasePoliciesAccessDeniedReason model constructor.
     * @property {module:model/ReleasePoliciesAccessDeniedReason}
     */
    ReleasePoliciesAccessDeniedReason,

    /**
     * The ReleasePoliciesAccessRep model constructor.
     * @property {module:model/ReleasePoliciesAccessRep}
     */
    ReleasePoliciesAccessRep,

    /**
     * The ReleasePoliciesResponse model constructor.
     * @property {module:model/ReleasePoliciesResponse}
     */
    ReleasePoliciesResponse,

    /**
     * The ReleasePolicy model constructor.
     * @property {module:model/ReleasePolicy}
     */
    ReleasePolicy,

    /**
     * The ReleasePolicyScope model constructor.
     * @property {module:model/ReleasePolicyScope}
     */
    ReleasePolicyScope,

    /**
     * The ReleaseProgression model constructor.
     * @property {module:model/ReleaseProgression}
     */
    ReleaseProgression,

    /**
     * The ReleaseProgressionCollection model constructor.
     * @property {module:model/ReleaseProgressionCollection}
     */
    ReleaseProgressionCollection,

    /**
     * The ReleaserAudienceConfigInput model constructor.
     * @property {module:model/ReleaserAudienceConfigInput}
     */
    ReleaserAudienceConfigInput,

    /**
     * The RepositoryCollectionRep model constructor.
     * @property {module:model/RepositoryCollectionRep}
     */
    RepositoryCollectionRep,

    /**
     * The RepositoryPost model constructor.
     * @property {module:model/RepositoryPost}
     */
    RepositoryPost,

    /**
     * The RepositoryRep model constructor.
     * @property {module:model/RepositoryRep}
     */
    RepositoryRep,

    /**
     * The ResourceAccess model constructor.
     * @property {module:model/ResourceAccess}
     */
    ResourceAccess,

    /**
     * The ResourceIDResponse model constructor.
     * @property {module:model/ResourceIDResponse}
     */
    ResourceIDResponse,

    /**
     * The ResourceId model constructor.
     * @property {module:model/ResourceId}
     */
    ResourceId,

    /**
     * The ResourceSummary model constructor.
     * @property {module:model/ResourceSummary}
     */
    ResourceSummary,

    /**
     * The RestrictedModelError model constructor.
     * @property {module:model/RestrictedModelError}
     */
    RestrictedModelError,

    /**
     * The RestrictedModelsRequest model constructor.
     * @property {module:model/RestrictedModelsRequest}
     */
    RestrictedModelsRequest,

    /**
     * The RestrictedModelsResponse model constructor.
     * @property {module:model/RestrictedModelsResponse}
     */
    RestrictedModelsResponse,

    /**
     * The ReviewOutput model constructor.
     * @property {module:model/ReviewOutput}
     */
    ReviewOutput,

    /**
     * The ReviewResponse model constructor.
     * @property {module:model/ReviewResponse}
     */
    ReviewResponse,

    /**
     * The Rollout model constructor.
     * @property {module:model/Rollout}
     */
    Rollout,

    /**
     * The RootResponse model constructor.
     * @property {module:model/RootResponse}
     */
    RootResponse,

    /**
     * The Rule model constructor.
     * @property {module:model/Rule}
     */
    Rule,

    /**
     * The RuleClause model constructor.
     * @property {module:model/RuleClause}
     */
    RuleClause,

    /**
     * The SdkListRep model constructor.
     * @property {module:model/SdkListRep}
     */
    SdkListRep,

    /**
     * The SdkVersionListRep model constructor.
     * @property {module:model/SdkVersionListRep}
     */
    SdkVersionListRep,

    /**
     * The SdkVersionRep model constructor.
     * @property {module:model/SdkVersionRep}
     */
    SdkVersionRep,

    /**
     * The SegmentBody model constructor.
     * @property {module:model/SegmentBody}
     */
    SegmentBody,

    /**
     * The SegmentMetadata model constructor.
     * @property {module:model/SegmentMetadata}
     */
    SegmentMetadata,

    /**
     * The SegmentTarget model constructor.
     * @property {module:model/SegmentTarget}
     */
    SegmentTarget,

    /**
     * The SegmentUserList model constructor.
     * @property {module:model/SegmentUserList}
     */
    SegmentUserList,

    /**
     * The SegmentUserState model constructor.
     * @property {module:model/SegmentUserState}
     */
    SegmentUserState,

    /**
     * The SegmentsSummary model constructor.
     * @property {module:model/SegmentsSummary}
     */
    SegmentsSummary,

    /**
     * The SeriesListRep model constructor.
     * @property {module:model/SeriesListRep}
     */
    SeriesListRep,

    /**
     * The SeriesListRepFloat model constructor.
     * @property {module:model/SeriesListRepFloat}
     */
    SeriesListRepFloat,

    /**
     * The SimpleHoldoutRep model constructor.
     * @property {module:model/SimpleHoldoutRep}
     */
    SimpleHoldoutRep,

    /**
     * The SourceEnv model constructor.
     * @property {module:model/SourceEnv}
     */
    SourceEnv,

    /**
     * The SourceFlag model constructor.
     * @property {module:model/SourceFlag}
     */
    SourceFlag,

    /**
     * The StageInput model constructor.
     * @property {module:model/StageInput}
     */
    StageInput,

    /**
     * The StageOutput model constructor.
     * @property {module:model/StageOutput}
     */
    StageOutput,

    /**
     * The Statement model constructor.
     * @property {module:model/Statement}
     */
    Statement,

    /**
     * The StatementPost model constructor.
     * @property {module:model/StatementPost}
     */
    StatementPost,

    /**
     * The StatisticCollectionRep model constructor.
     * @property {module:model/StatisticCollectionRep}
     */
    StatisticCollectionRep,

    /**
     * The StatisticRep model constructor.
     * @property {module:model/StatisticRep}
     */
    StatisticRep,

    /**
     * The StatisticsRoot model constructor.
     * @property {module:model/StatisticsRoot}
     */
    StatisticsRoot,

    /**
     * The StatusConflictErrorRep model constructor.
     * @property {module:model/StatusConflictErrorRep}
     */
    StatusConflictErrorRep,

    /**
     * The StatusResponse model constructor.
     * @property {module:model/StatusResponse}
     */
    StatusResponse,

    /**
     * The StatusServiceUnavailable model constructor.
     * @property {module:model/StatusServiceUnavailable}
     */
    StatusServiceUnavailable,

    /**
     * The StoreIntegrationError model constructor.
     * @property {module:model/StoreIntegrationError}
     */
    StoreIntegrationError,

    /**
     * The SubjectDataRep model constructor.
     * @property {module:model/SubjectDataRep}
     */
    SubjectDataRep,

    /**
     * The SubscriptionPost model constructor.
     * @property {module:model/SubscriptionPost}
     */
    SubscriptionPost,

    /**
     * The TagsCollection model constructor.
     * @property {module:model/TagsCollection}
     */
    TagsCollection,

    /**
     * The TagsLink model constructor.
     * @property {module:model/TagsLink}
     */
    TagsLink,

    /**
     * The Target model constructor.
     * @property {module:model/Target}
     */
    Target,

    /**
     * The TargetResourceRep model constructor.
     * @property {module:model/TargetResourceRep}
     */
    TargetResourceRep,

    /**
     * The Team model constructor.
     * @property {module:model/Team}
     */
    Team,

    /**
     * The TeamCustomRole model constructor.
     * @property {module:model/TeamCustomRole}
     */
    TeamCustomRole,

    /**
     * The TeamCustomRoles model constructor.
     * @property {module:model/TeamCustomRoles}
     */
    TeamCustomRoles,

    /**
     * The TeamImportsRep model constructor.
     * @property {module:model/TeamImportsRep}
     */
    TeamImportsRep,

    /**
     * The TeamMaintainers model constructor.
     * @property {module:model/TeamMaintainers}
     */
    TeamMaintainers,

    /**
     * The TeamMembers model constructor.
     * @property {module:model/TeamMembers}
     */
    TeamMembers,

    /**
     * The TeamPatchInput model constructor.
     * @property {module:model/TeamPatchInput}
     */
    TeamPatchInput,

    /**
     * The TeamPostInput model constructor.
     * @property {module:model/TeamPostInput}
     */
    TeamPostInput,

    /**
     * The TeamProjects model constructor.
     * @property {module:model/TeamProjects}
     */
    TeamProjects,

    /**
     * The Teams model constructor.
     * @property {module:model/Teams}
     */
    Teams,

    /**
     * The TeamsPatchInput model constructor.
     * @property {module:model/TeamsPatchInput}
     */
    TeamsPatchInput,

    /**
     * The TimestampRep model constructor.
     * @property {module:model/TimestampRep}
     */
    TimestampRep,

    /**
     * The Token model constructor.
     * @property {module:model/Token}
     */
    Token,

    /**
     * The TokenSummary model constructor.
     * @property {module:model/TokenSummary}
     */
    TokenSummary,

    /**
     * The Tokens model constructor.
     * @property {module:model/Tokens}
     */
    Tokens,

    /**
     * The TreatmentInput model constructor.
     * @property {module:model/TreatmentInput}
     */
    TreatmentInput,

    /**
     * The TreatmentParameterInput model constructor.
     * @property {module:model/TreatmentParameterInput}
     */
    TreatmentParameterInput,

    /**
     * The TreatmentRep model constructor.
     * @property {module:model/TreatmentRep}
     */
    TreatmentRep,

    /**
     * The TriggerPost model constructor.
     * @property {module:model/TriggerPost}
     */
    TriggerPost,

    /**
     * The TriggerWorkflowCollectionRep model constructor.
     * @property {module:model/TriggerWorkflowCollectionRep}
     */
    TriggerWorkflowCollectionRep,

    /**
     * The TriggerWorkflowRep model constructor.
     * @property {module:model/TriggerWorkflowRep}
     */
    TriggerWorkflowRep,

    /**
     * The TrustPolicyDetails model constructor.
     * @property {module:model/TrustPolicyDetails}
     */
    TrustPolicyDetails,

    /**
     * The TrustPolicyStatement model constructor.
     * @property {module:model/TrustPolicyStatement}
     */
    TrustPolicyStatement,

    /**
     * The UnauthorizedErrorRep model constructor.
     * @property {module:model/UnauthorizedErrorRep}
     */
    UnauthorizedErrorRep,

    /**
     * The UnlinkResourceSuccessResponse model constructor.
     * @property {module:model/UnlinkResourceSuccessResponse}
     */
    UnlinkResourceSuccessResponse,

    /**
     * The UpdatePhaseStatusInput model constructor.
     * @property {module:model/UpdatePhaseStatusInput}
     */
    UpdatePhaseStatusInput,

    /**
     * The UpdateReleasePipelineInput model constructor.
     * @property {module:model/UpdateReleasePipelineInput}
     */
    UpdateReleasePipelineInput,

    /**
     * The UpsertContextKindPayload model constructor.
     * @property {module:model/UpsertContextKindPayload}
     */
    UpsertContextKindPayload,

    /**
     * The UpsertFlagDefaultsPayload model constructor.
     * @property {module:model/UpsertFlagDefaultsPayload}
     */
    UpsertFlagDefaultsPayload,

    /**
     * The UpsertPayloadRep model constructor.
     * @property {module:model/UpsertPayloadRep}
     */
    UpsertPayloadRep,

    /**
     * The UpsertResponseRep model constructor.
     * @property {module:model/UpsertResponseRep}
     */
    UpsertResponseRep,

    /**
     * The UrlPost model constructor.
     * @property {module:model/UrlPost}
     */
    UrlPost,

    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User,

    /**
     * The UserAttributeNamesRep model constructor.
     * @property {module:model/UserAttributeNamesRep}
     */
    UserAttributeNamesRep,

    /**
     * The UserFlagSetting model constructor.
     * @property {module:model/UserFlagSetting}
     */
    UserFlagSetting,

    /**
     * The UserFlagSettings model constructor.
     * @property {module:model/UserFlagSettings}
     */
    UserFlagSettings,

    /**
     * The UserRecord model constructor.
     * @property {module:model/UserRecord}
     */
    UserRecord,

    /**
     * The UserSegment model constructor.
     * @property {module:model/UserSegment}
     */
    UserSegment,

    /**
     * The UserSegmentRule model constructor.
     * @property {module:model/UserSegmentRule}
     */
    UserSegmentRule,

    /**
     * The UserSegments model constructor.
     * @property {module:model/UserSegments}
     */
    UserSegments,

    /**
     * The Users model constructor.
     * @property {module:model/Users}
     */
    Users,

    /**
     * The UsersRep model constructor.
     * @property {module:model/UsersRep}
     */
    UsersRep,

    /**
     * The ValidationFailedErrorRep model constructor.
     * @property {module:model/ValidationFailedErrorRep}
     */
    ValidationFailedErrorRep,

    /**
     * The ValuePut model constructor.
     * @property {module:model/ValuePut}
     */
    ValuePut,

    /**
     * The Variation model constructor.
     * @property {module:model/Variation}
     */
    Variation,

    /**
     * The VariationEvalSummary model constructor.
     * @property {module:model/VariationEvalSummary}
     */
    VariationEvalSummary,

    /**
     * The VariationOrRolloutRep model constructor.
     * @property {module:model/VariationOrRolloutRep}
     */
    VariationOrRolloutRep,

    /**
     * The VariationSummary model constructor.
     * @property {module:model/VariationSummary}
     */
    VariationSummary,

    /**
     * The VariationTool model constructor.
     * @property {module:model/VariationTool}
     */
    VariationTool,

    /**
     * The VariationToolPost model constructor.
     * @property {module:model/VariationToolPost}
     */
    VariationToolPost,

    /**
     * The VersionsRep model constructor.
     * @property {module:model/VersionsRep}
     */
    VersionsRep,

    /**
     * The View model constructor.
     * @property {module:model/View}
     */
    View,

    /**
     * The ViewLinkRequest model constructor.
     * @property {module:model/ViewLinkRequest}
     */
    ViewLinkRequest,

    /**
     * The ViewLinkRequestKeys model constructor.
     * @property {module:model/ViewLinkRequestKeys}
     */
    ViewLinkRequestKeys,

    /**
     * The ViewLinkRequestSegmentIdentifier model constructor.
     * @property {module:model/ViewLinkRequestSegmentIdentifier}
     */
    ViewLinkRequestSegmentIdentifier,

    /**
     * The ViewLinkRequestSegmentIdentifiers model constructor.
     * @property {module:model/ViewLinkRequestSegmentIdentifiers}
     */
    ViewLinkRequestSegmentIdentifiers,

    /**
     * The ViewLinkedResource model constructor.
     * @property {module:model/ViewLinkedResource}
     */
    ViewLinkedResource,

    /**
     * The ViewLinkedResourceDetails model constructor.
     * @property {module:model/ViewLinkedResourceDetails}
     */
    ViewLinkedResourceDetails,

    /**
     * The ViewLinkedResources model constructor.
     * @property {module:model/ViewLinkedResources}
     */
    ViewLinkedResources,

    /**
     * The ViewPatch model constructor.
     * @property {module:model/ViewPatch}
     */
    ViewPatch,

    /**
     * The ViewPost model constructor.
     * @property {module:model/ViewPost}
     */
    ViewPost,

    /**
     * The Views model constructor.
     * @property {module:model/Views}
     */
    Views,

    /**
     * The ViewsAccess model constructor.
     * @property {module:model/ViewsAccess}
     */
    ViewsAccess,

    /**
     * The ViewsAccessAllowedReason model constructor.
     * @property {module:model/ViewsAccessAllowedReason}
     */
    ViewsAccessAllowedReason,

    /**
     * The ViewsAccessAllowedRep model constructor.
     * @property {module:model/ViewsAccessAllowedRep}
     */
    ViewsAccessAllowedRep,

    /**
     * The ViewsAccessDenied model constructor.
     * @property {module:model/ViewsAccessDenied}
     */
    ViewsAccessDenied,

    /**
     * The ViewsAccessDeniedReason model constructor.
     * @property {module:model/ViewsAccessDeniedReason}
     */
    ViewsAccessDeniedReason,

    /**
     * The ViewsAccessRep model constructor.
     * @property {module:model/ViewsAccessRep}
     */
    ViewsAccessRep,

    /**
     * The ViewsLink model constructor.
     * @property {module:model/ViewsLink}
     */
    ViewsLink,

    /**
     * The ViewsMaintainerMember model constructor.
     * @property {module:model/ViewsMaintainerMember}
     */
    ViewsMaintainerMember,

    /**
     * The ViewsMaintainerTeam model constructor.
     * @property {module:model/ViewsMaintainerTeam}
     */
    ViewsMaintainerTeam,

    /**
     * The ViewsPaginatedLinks model constructor.
     * @property {module:model/ViewsPaginatedLinks}
     */
    ViewsPaginatedLinks,

    /**
     * The ViewsSelfLink model constructor.
     * @property {module:model/ViewsSelfLink}
     */
    ViewsSelfLink,

    /**
     * The Webhook model constructor.
     * @property {module:model/Webhook}
     */
    Webhook,

    /**
     * The WebhookPost model constructor.
     * @property {module:model/WebhookPost}
     */
    WebhookPost,

    /**
     * The Webhooks model constructor.
     * @property {module:model/Webhooks}
     */
    Webhooks,

    /**
     * The WeightedVariation model constructor.
     * @property {module:model/WeightedVariation}
     */
    WeightedVariation,

    /**
     * The WorkflowTemplateMetadata model constructor.
     * @property {module:model/WorkflowTemplateMetadata}
     */
    WorkflowTemplateMetadata,

    /**
     * The WorkflowTemplateOutput model constructor.
     * @property {module:model/WorkflowTemplateOutput}
     */
    WorkflowTemplateOutput,

    /**
     * The WorkflowTemplateParameter model constructor.
     * @property {module:model/WorkflowTemplateParameter}
     */
    WorkflowTemplateParameter,

    /**
     * The WorkflowTemplatesListingOutputRep model constructor.
     * @property {module:model/WorkflowTemplatesListingOutputRep}
     */
    WorkflowTemplatesListingOutputRep,

    /**
    * The AIConfigsBetaApi service constructor.
    * @property {module:api/AIConfigsBetaApi}
    */
    AIConfigsBetaApi,

    /**
    * The AccessTokensApi service constructor.
    * @property {module:api/AccessTokensApi}
    */
    AccessTokensApi,

    /**
    * The AccountMembersApi service constructor.
    * @property {module:api/AccountMembersApi}
    */
    AccountMembersApi,

    /**
    * The AccountUsageBetaApi service constructor.
    * @property {module:api/AccountUsageBetaApi}
    */
    AccountUsageBetaApi,

    /**
    * The AnnouncementsApi service constructor.
    * @property {module:api/AnnouncementsApi}
    */
    AnnouncementsApi,

    /**
    * The ApplicationsBetaApi service constructor.
    * @property {module:api/ApplicationsBetaApi}
    */
    ApplicationsBetaApi,

    /**
    * The ApprovalsApi service constructor.
    * @property {module:api/ApprovalsApi}
    */
    ApprovalsApi,

    /**
    * The ApprovalsBetaApi service constructor.
    * @property {module:api/ApprovalsBetaApi}
    */
    ApprovalsBetaApi,

    /**
    * The AuditLogApi service constructor.
    * @property {module:api/AuditLogApi}
    */
    AuditLogApi,

    /**
    * The CodeReferencesApi service constructor.
    * @property {module:api/CodeReferencesApi}
    */
    CodeReferencesApi,

    /**
    * The ContextSettingsApi service constructor.
    * @property {module:api/ContextSettingsApi}
    */
    ContextSettingsApi,

    /**
    * The ContextsApi service constructor.
    * @property {module:api/ContextsApi}
    */
    ContextsApi,

    /**
    * The CustomRolesApi service constructor.
    * @property {module:api/CustomRolesApi}
    */
    CustomRolesApi,

    /**
    * The DataExportDestinationsApi service constructor.
    * @property {module:api/DataExportDestinationsApi}
    */
    DataExportDestinationsApi,

    /**
    * The EnvironmentsApi service constructor.
    * @property {module:api/EnvironmentsApi}
    */
    EnvironmentsApi,

    /**
    * The ExperimentsApi service constructor.
    * @property {module:api/ExperimentsApi}
    */
    ExperimentsApi,

    /**
    * The FeatureFlagsApi service constructor.
    * @property {module:api/FeatureFlagsApi}
    */
    FeatureFlagsApi,

    /**
    * The FeatureFlagsBetaApi service constructor.
    * @property {module:api/FeatureFlagsBetaApi}
    */
    FeatureFlagsBetaApi,

    /**
    * The FlagImportConfigurationsBetaApi service constructor.
    * @property {module:api/FlagImportConfigurationsBetaApi}
    */
    FlagImportConfigurationsBetaApi,

    /**
    * The FlagLinksBetaApi service constructor.
    * @property {module:api/FlagLinksBetaApi}
    */
    FlagLinksBetaApi,

    /**
    * The FlagTriggersApi service constructor.
    * @property {module:api/FlagTriggersApi}
    */
    FlagTriggersApi,

    /**
    * The FollowFlagsApi service constructor.
    * @property {module:api/FollowFlagsApi}
    */
    FollowFlagsApi,

    /**
    * The HoldoutsBetaApi service constructor.
    * @property {module:api/HoldoutsBetaApi}
    */
    HoldoutsBetaApi,

    /**
    * The InsightsChartsBetaApi service constructor.
    * @property {module:api/InsightsChartsBetaApi}
    */
    InsightsChartsBetaApi,

    /**
    * The InsightsDeploymentsBetaApi service constructor.
    * @property {module:api/InsightsDeploymentsBetaApi}
    */
    InsightsDeploymentsBetaApi,

    /**
    * The InsightsFlagEventsBetaApi service constructor.
    * @property {module:api/InsightsFlagEventsBetaApi}
    */
    InsightsFlagEventsBetaApi,

    /**
    * The InsightsPullRequestsBetaApi service constructor.
    * @property {module:api/InsightsPullRequestsBetaApi}
    */
    InsightsPullRequestsBetaApi,

    /**
    * The InsightsRepositoriesBetaApi service constructor.
    * @property {module:api/InsightsRepositoriesBetaApi}
    */
    InsightsRepositoriesBetaApi,

    /**
    * The InsightsScoresBetaApi service constructor.
    * @property {module:api/InsightsScoresBetaApi}
    */
    InsightsScoresBetaApi,

    /**
    * The IntegrationAuditLogSubscriptionsApi service constructor.
    * @property {module:api/IntegrationAuditLogSubscriptionsApi}
    */
    IntegrationAuditLogSubscriptionsApi,

    /**
    * The IntegrationDeliveryConfigurationsBetaApi service constructor.
    * @property {module:api/IntegrationDeliveryConfigurationsBetaApi}
    */
    IntegrationDeliveryConfigurationsBetaApi,

    /**
    * The IntegrationsBetaApi service constructor.
    * @property {module:api/IntegrationsBetaApi}
    */
    IntegrationsBetaApi,

    /**
    * The LayersApi service constructor.
    * @property {module:api/LayersApi}
    */
    LayersApi,

    /**
    * The MetricsApi service constructor.
    * @property {module:api/MetricsApi}
    */
    MetricsApi,

    /**
    * The MetricsBetaApi service constructor.
    * @property {module:api/MetricsBetaApi}
    */
    MetricsBetaApi,

    /**
    * The OAuth2ClientsApi service constructor.
    * @property {module:api/OAuth2ClientsApi}
    */
    OAuth2ClientsApi,

    /**
    * The OtherApi service constructor.
    * @property {module:api/OtherApi}
    */
    OtherApi,

    /**
    * The PersistentStoreIntegrationsBetaApi service constructor.
    * @property {module:api/PersistentStoreIntegrationsBetaApi}
    */
    PersistentStoreIntegrationsBetaApi,

    /**
    * The ProjectsApi service constructor.
    * @property {module:api/ProjectsApi}
    */
    ProjectsApi,

    /**
    * The RelayProxyConfigurationsApi service constructor.
    * @property {module:api/RelayProxyConfigurationsApi}
    */
    RelayProxyConfigurationsApi,

    /**
    * The ReleasePipelinesBetaApi service constructor.
    * @property {module:api/ReleasePipelinesBetaApi}
    */
    ReleasePipelinesBetaApi,

    /**
    * The ReleasePoliciesBetaApi service constructor.
    * @property {module:api/ReleasePoliciesBetaApi}
    */
    ReleasePoliciesBetaApi,

    /**
    * The ReleasesBetaApi service constructor.
    * @property {module:api/ReleasesBetaApi}
    */
    ReleasesBetaApi,

    /**
    * The ScheduledChangesApi service constructor.
    * @property {module:api/ScheduledChangesApi}
    */
    ScheduledChangesApi,

    /**
    * The SegmentsApi service constructor.
    * @property {module:api/SegmentsApi}
    */
    SegmentsApi,

    /**
    * The TagsApi service constructor.
    * @property {module:api/TagsApi}
    */
    TagsApi,

    /**
    * The TeamsApi service constructor.
    * @property {module:api/TeamsApi}
    */
    TeamsApi,

    /**
    * The TeamsBetaApi service constructor.
    * @property {module:api/TeamsBetaApi}
    */
    TeamsBetaApi,

    /**
    * The UserSettingsApi service constructor.
    * @property {module:api/UserSettingsApi}
    */
    UserSettingsApi,

    /**
    * The UsersApi service constructor.
    * @property {module:api/UsersApi}
    */
    UsersApi,

    /**
    * The UsersBetaApi service constructor.
    * @property {module:api/UsersBetaApi}
    */
    UsersBetaApi,

    /**
    * The ViewsBetaApi service constructor.
    * @property {module:api/ViewsBetaApi}
    */
    ViewsBetaApi,

    /**
    * The WebhooksApi service constructor.
    * @property {module:api/WebhooksApi}
    */
    WebhooksApi,

    /**
    * The WorkflowTemplatesApi service constructor.
    * @property {module:api/WorkflowTemplatesApi}
    */
    WorkflowTemplatesApi,

    /**
    * The WorkflowsApi service constructor.
    * @property {module:api/WorkflowsApi}
    */
    WorkflowsApi
};
