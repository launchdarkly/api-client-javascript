/**
 * LaunchDarkly REST API
 * # Overview  ## Authentication  All REST API resources are authenticated with either [personal or service access tokens](https://docs.launchdarkly.com/home/account-security/api-access-tokens), or session cookies. Other authentication mechanisms are not supported. You can manage personal access tokens on your [Account settings](https://app.launchdarkly.com/settings/tokens) page.  LaunchDarkly also has SDK keys, mobile keys, and client-side IDs that are used by our server-side SDKs, mobile SDKs, and client-side SDKs, respectively. **These keys cannot be used to access our REST API**. These keys are environment-specific, and can only perform read-only operations (fetching feature flag settings).  | Auth mechanism                                                                                  | Allowed resources                                                                                     | Use cases                                          | | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | -------------------------------------------------- | | [Personal access tokens](https://docs.launchdarkly.com/home/account-security/api-access-tokens) | Can be customized on a per-token basis                                                                | Building scripts, custom integrations, data export | | SDK keys                                                                                        | Can only access read-only SDK-specific resources and the firehose, restricted to a single environment | Server-side SDKs, Firehose API                     | | Mobile keys                                                                                     | Can only access read-only mobile SDK-specific resources, restricted to a single environment           | Mobile SDKs                                        | | Client-side ID                                                                                  | Single environment, only flags marked available to client-side                                        | Client-side JavaScript                             |  > #### Keep your access tokens and SDK keys private > > Access tokens should _never_ be exposed in untrusted contexts. Never put an access token in client-side JavaScript, or embed it in a mobile application. LaunchDarkly has special mobile keys that you can embed in mobile apps. If you accidentally expose an access token or SDK key, you can reset it from your [Account Settings](https://app.launchdarkly.com/settings#/tokens) page. > > The client-side ID is safe to embed in untrusted contexts. It's designed for use in client-side JavaScript.  ### Via request header  The preferred way to authenticate with the API is by adding an `Authorization` header containing your access token to your requests. The value of the `Authorization` header must be your access token.  Manage personal access tokens from the [Account Settings](https://app.launchdarkly.com/settings/tokens) page.  ### Via session cookie  For testing purposes, you can make API calls directly from your web browser. If you're logged in to the application, the API will use your existing session to authenticate calls.  If you have a [role](https://docs.launchdarkly.com/home/team/built-in-roles) other than Admin, or have a [custom role](https://docs.launchdarkly.com/home/team/custom-roles) defined, you may not have permission to perform some API calls. You will receive a `401` response code in that case.  > ### Modifying the Origin header causes an error > > LaunchDarkly validates that the Origin header for any API request authenticated by a session cookie matches the expected Origin header. The expected Origin header is `https://app.launchdarkly.com`. > > If the Origin header does not match what's expected, LaunchDarkly returns an error. This error can prevent the LaunchDarkly app from working correctly. > > Any browser extension that intentionally changes the Origin header can cause this problem. For example, the `Allow-Control-Allow-Origin: *` Chrome extension changes the Origin header to `http://evil.com` and causes the app to fail. > > To prevent this error, do not modify your Origin header. > > LaunchDarkly does not require origin matching when authenticating with an access token, so this issue does not affect normal API usage.  ## Representations  All resources expect and return JSON response bodies. Error responses will also send a JSON body. Read [Errors](#section/Errors) for a more detailed description of the error format used by the API.  In practice this means that you always get a response with a `Content-Type` header set to `application/json`.  In addition, request bodies for `PUT`, `POST`, `REPORT` and `PATCH` requests must be encoded as JSON with a `Content-Type` header set to `application/json`.  ### Summary and detailed representations  When you fetch a list of resources, the response includes only the most important attributes of each resource. This is a _summary representation_ of the resource. When you fetch an individual resource, such as a single feature flag, you receive a _detailed representation_ of the resource.  The best way to find a detailed representation is to follow links. Every summary representation includes a link to its detailed representation.  In most cases, the detailed representation contains all of the attributes of the resource. In a few cases, the detailed representation contains many, but not all, of the attributes of the resource. Typically this happens when an attribute of the requested resource is itself paginated. You can request that the response include a particular attribute by using the `expand` request parameter.  ### Links and addressability  The best way to navigate the API is by following links. These are attributes in representations that link to other resources. The API always uses the same format for links:  - Links to other resources within the API are encapsulated in a `_links` object. - If the resource has a corresponding link to HTML content on the site, it is stored in a special `_site` link.  Each link has two attributes: an href (the URL) and a type (the content type). For example, a feature resource might return the following:  ```json {   \"_links\": {     \"parent\": {       \"href\": \"/api/features\",       \"type\": \"application/json\"     },     \"self\": {       \"href\": \"/api/features/sort.order\",       \"type\": \"application/json\"     }   },   \"_site\": {     \"href\": \"/features/sort.order\",     \"type\": \"text/html\"   } } ```  From this, you can navigate to the parent collection of features by following the `parent` link, or navigate to the site page for the feature by following the `_site` link.  Collections are always represented as a JSON object with an `items` attribute containing an array of representations. Like all other representations, collections have `_links` defined at the top level.  Paginated collections include `first`, `last`, `next`, and `prev` links containing a URL with the respective set of elements in the collection.  ### Expanding responses  Sometimes the detailed representation of a resource does not include all of the attributes of the resource by default. If this is the case, the request method will clearly document this and describe which attributes you can include in an expanded response.  To include the additional attributes, append the `expand` request parameter to your request and add a comma-separated list of the attributes to include. For example, when you append `?expand=members,roles` to the [Get team](/tag/Teams-(beta)#operation/getTeam) endpoint, the expanded response includes both of these attributes.  ## Updates  Resources that accept partial updates use the `PATCH` verb. Most resources support the [JSON Patch](https://datatracker.ietf.org/doc/html/rfc6902) format. Some resources also support the [JSON Merge Patch](https://datatracker.ietf.org/doc/html/rfc7386) format, and some resources support the [semantic patch](/reference#updates-using-semantic-patch) format, which is a way to specify the modifications to perform as a set of executable instructions. Each resource supports optional [comments](/reference#updates-with-comments) that you can submit with updates. Comments appear in outgoing webhooks, the audit log, and other integrations.  ### Updates using JSON patch  [JSON Patch](https://datatracker.ietf.org/doc/html/rfc6902) is a way to specify the modifications to perform on a resource. JSON patch uses paths and a limited set of operations to describe how to transform the current state of the resource into a new state. JSON patch documents are always arrays, where each element contains an operation, a path to the field to update, and the new value.  For example, in this feature flag representation:  ```json {     \"name\": \"New recommendations engine\",     \"key\": \"engine.enable\",     \"description\": \"This is the description\",     ... } ``` You can change the feature flag's description with the following patch document:  ```json [{ \"op\": \"replace\", \"path\": \"/description\", \"value\": \"This is the new description\" }] ```  You can specify multiple modifications to perform in a single request. You can also test that certain preconditions are met before applying the patch:  ```json [   { \"op\": \"test\", \"path\": \"/version\", \"value\": 10 },   { \"op\": \"replace\", \"path\": \"/description\", \"value\": \"The new description\" } ] ```  The above patch request tests whether the feature flag's `version` is `10`, and if so, changes the feature flag's description.  Attributes that aren't editable, like a resource's `_links`, have names that start with an underscore.  ### Updates using JSON merge patch  [JSON merge patch](https://datatracker.ietf.org/doc/html/rfc7386) is another format for specifying the modifications to perform on a resource. JSON merge patch is less expressive than JSON patch but in many cases, it is simpler to construct a merge patch document. For example, you can change a feature flag's description with the following merge patch document:  ```json {   \"description\": \"New flag description\" } ```  ### Updates using semantic patch  The API also supports the semantic patch format. A semantic `PATCH` is a way to specify the modifications to perform on a resource as a set of executable instructions.  Semantic patch allows you to be explicit about intent using precise, custom instructions. In many cases, you can define semantic patch instructions independently of the current state of the resource. This can be useful when defining a change that may be applied at a future date.  To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header.  Here's how:  ``` Content-Type: application/json; domain-model=launchdarkly.semanticpatch ```  If you call a semantic patch resource without this header, you will receive a `400` response because your semantic patch will be interpreted as a JSON patch.  The body of a semantic patch request takes the following properties:  * `comment` (string): (Optional) A description of the update. * `environmentKey` (string): (Required for some resources only) The environment key. * `instructions` (array): (Required) A list of actions the update should perform. Each action in the list must be an object with a `kind` property that indicates the instruction. If the action requires parameters, you must include those parameters as additional fields in the object. The documentation for each resource that supports semantic patch includes the available instructions and any additional parameters.  For example:  ```json {   \"comment\": \"optional comment\",   \"instructions\": [ {\"kind\": \"turnFlagOn\"} ] } ```  If any instruction in the patch encounters an error, the endpoint returns an error and will not change the resource. In general, each instruction silently does nothing if the resource is already in the state you request.  > ### Supported semantic patch API endpoints > > - [Patch experiment](/tag/Experiments-(beta)#operation/patchExperiment) > - [Patch segment](/tag/Segments#operation/patchSegment) > - [Update feature flag](/tag/Feature-flags#operation/patchFeatureFlag) > - [Update flag trigger](/tag/Flag-triggers#operation/patchTriggerWorkflow) > - [Update expiring user targets on feature flag](/tag/Feature-flags#operation/patchExpiringUserTargets) > - [Update expiring user target for flags](/tag/User-settings#operation/patchExpiringFlagsForUser) > - [Update expiring user targets for segment](/tag/Segments#operation/patchExpiringUserTargetsForSegment) > - [Update scheduled changes workflow](/tag/Scheduled-changes#operation/patchFlagConfigScheduledChange) > - [Update team](/tag/Teams-(beta)#operation/patchTeam)  ### Updates with comments  You can submit optional comments with `PATCH` changes.  To submit a comment along with a JSON Patch document, use the following format:  ```json {   \"comment\": \"This is a comment string\",   \"patch\": [{ \"op\": \"replace\", \"path\": \"/description\", \"value\": \"The new description\" }] } ```  To submit a comment along with a JSON merge patch document, use the following format:  ```json {   \"comment\": \"This is a comment string\",   \"merge\": { \"description\": \"New flag description\" } } ```  To submit a comment along with a semantic patch, use the following format:  ```json {   \"comment\": \"This is a comment string\",   \"instructions\": [ {\"kind\": \"turnFlagOn\"} ] } ```  ## Errors  The API always returns errors in a common format. Here's an example:  ```json {   \"code\": \"invalid_request\",   \"message\": \"A feature with that key already exists\",   \"id\": \"30ce6058-87da-11e4-b116-123b93f75cba\" } ```  The general class of error is indicated by the `code`. The `message` is a human-readable explanation of what went wrong. The `id` is a unique identifier. Use it when you're working with LaunchDarkly support to debug a problem with a specific API call.  ### HTTP Status - Error Response Codes  | Code | Definition        | Description                                                                                       | Possible Solution                                                | | ---- | ----------------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | | 400  | Invalid request       | The request cannot be understood.                                    | Ensure JSON syntax in request body is correct.                   | | 401  | Invalid access token      | User is unauthorized or does not have permission for this API call.                                                | Ensure your API access token is valid and has the appropriate permissions.                                     | | 403  | Forbidden         | User does not have access to this resource.                                                | Ensure that the user or access token has proper permissions set. | | 404  | Invalid resource identifier | The requested resource is not valid. | Ensure that the resource is correctly identified by id or key. | | 405  | Method not allowed | The request method is not allowed on this resource. | Ensure that the HTTP verb is correct. | | 409  | Conflict          | The API request can not be completed because it conflicted with a concurrent API request. | Retry your request.                                              | | 422  | Unprocessable entity | The API request can not be completed because the update description can not be understood. | Ensure that the request body is correct for the type of patch you are using (JSON patch or semantic patch). | 429  | Too many requests | Read [Rate limiting](/#section/Rate-limiting).                                               | Wait and try again later.                                        |  ## CORS  The LaunchDarkly API supports Cross Origin Resource Sharing (CORS) for AJAX requests from any origin. If an `Origin` header is given in a request, it will be echoed as an explicitly allowed origin. Otherwise, a wildcard is returned: `Access-Control-Allow-Origin: *`. For more information on CORS, see the [CORS W3C Recommendation](http://www.w3.org/TR/cors). Example CORS headers might look like:  ```http Access-Control-Allow-Headers: Accept, Content-Type, Content-Length, Accept-Encoding, Authorization Access-Control-Allow-Methods: OPTIONS, GET, DELETE, PATCH Access-Control-Allow-Origin: * Access-Control-Max-Age: 300 ```  You can make authenticated CORS calls just as you would make same-origin calls, using either [token or session-based authentication](#section/Authentication). If you’re using session auth, you should set the `withCredentials` property for your `xhr` request to `true`. You should never expose your access tokens to untrusted users.  ## Rate limiting  We use several rate limiting strategies to ensure the availability of our APIs. Rate-limited calls to our APIs will return a `429` status code. Calls to our APIs will include headers indicating the current rate limit status. The specific headers returned depend on the API route being called. The limits differ based on the route, authentication mechanism, and other factors. Routes that are not rate limited may not contain any of the headers described below.  > ### Rate limiting and SDKs > > LaunchDarkly SDKs are never rate limited and do not use the API endpoints defined here. LaunchDarkly uses a different set of approaches, including streaming/server-sent events and a global CDN, to ensure availability to the routes used by LaunchDarkly SDKs.  ### Global rate limits  Authenticated requests are subject to a global limit. This is the maximum number of calls that can be made to the API per ten seconds. All personal access tokens on the account share this limit, so exceeding the limit with one access token will impact other tokens. Calls that are subject to global rate limits will return the headers below:  | Header name                    | Description                                                                      | | ------------------------------ | -------------------------------------------------------------------------------- | | `X-Ratelimit-Global-Remaining` | The maximum number of requests the account is permitted to make per ten seconds. | | `X-Ratelimit-Reset`            | The time at which the current rate limit window resets in epoch milliseconds.    |  We do not publicly document the specific number of calls that can be made globally. This limit may change, and we encourage clients to program against the specification, relying on the two headers defined above, rather than hardcoding to the current limit.  ### Route-level rate limits  Some authenticated routes have custom rate limits. These also reset every ten seconds. Any access tokens hitting the same route share this limit, so exceeding the limit with one access token may impact other tokens. Calls that are subject to route-level rate limits will return the headers below:  | Header name                   | Description                                                                                           | | ----------------------------- | ----------------------------------------------------------------------------------------------------- | | `X-Ratelimit-Route-Remaining` | The maximum number of requests to the current route the account is permitted to make per ten seconds. | | `X-Ratelimit-Reset`           | The time at which the current rate limit window resets in epoch milliseconds.                         |  A _route_ represents a specific URL pattern and verb. For example, the [Delete environment](/tag/Environments#operation/deleteEnvironment) endpoint is considered a single route, and each call to delete an environment counts against your route-level rate limit for that route.  We do not publicly document the specific number of calls that can be made to each endpoint per ten seconds. These limits may change, and we encourage clients to program against the specification, relying on the two headers defined above, rather than hardcoding to the current limits.  ### IP-based rate limiting  We also employ IP-based rate limiting on some API routes. If you hit an IP-based rate limit, your API response will include a `Retry-After` header indicating how long to wait before re-trying the call. Clients must wait at least `Retry-After` seconds before making additional calls to our API, and should employ jitter and backoff strategies to avoid triggering rate limits again.  ## OpenAPI (Swagger)  We have a [complete OpenAPI (Swagger) specification](https://app.launchdarkly.com/api/v2/openapi.json) for our API.  You can use this specification to generate client libraries to interact with our REST API in your language of choice.  This specification is supported by several API-based tools such as Postman and Insomnia. In many cases, you can directly import our specification to ease use in navigating the APIs in the tooling.  ## Client libraries  We auto-generate multiple client libraries based on our OpenAPI specification. To learn more, visit [GitHub](https://github.com/search?q=topic%3Alaunchdarkly-api+org%3Alaunchdarkly&type=Repositories).  ## Method Overriding  Some firewalls and HTTP clients restrict the use of verbs other than `GET` and `POST`. In those environments, our API endpoints that use `PUT`, `PATCH`, and `DELETE` verbs will be inaccessible.  To avoid this issue, our API supports the `X-HTTP-Method-Override` header, allowing clients to \"tunnel\" `PUT`, `PATCH`, and `DELETE` requests via a `POST` request.  For example, if you wish to call one of our `PATCH` resources via a `POST` request, you can include `X-HTTP-Method-Override:PATCH` as a header.  ## Beta resources  We sometimes release new API resources in **beta** status before we release them with general availability.  Resources that are in beta are still undergoing testing and development. They may change without notice, including becoming backwards incompatible.  We try to promote resources into general availability as quickly as possible. This happens after sufficient testing and when we're satisfied that we no longer need to make backwards-incompatible changes.  We mark beta resources with a \"Beta\" callout in our documentation, pictured below:  > ### This feature is in beta > > To use this feature, pass in a header including the `LD-API-Version` key with value set to `beta`. Use this header with each call. To learn more, read [Beta resources](/#section/Overview/Beta-resources).  ### Using beta resources  To use a beta resource, you must include a header in the request. If you call a beta resource without this header, you'll receive a `403` response.  Use this header:  ``` LD-API-Version: beta ```  ## Versioning  We try hard to keep our REST API backwards compatible, but we occasionally have to make backwards-incompatible changes in the process of shipping new features. These breaking changes can cause unexpected behavior if you don't prepare for them accordingly.  Updates to our REST API include support for the latest features in LaunchDarkly. We also release a new version of our REST API every time we make a breaking change. We provide simultaneous support for multiple API versions so you can migrate from your current API version to a new version at your own pace.  ### Setting the API version per request  You can set the API version on a specific request by sending an `LD-API-Version` header, as shown in the example below:  ``` LD-API-Version: 20220603 ```  The header value is the version number of the API version you'd like to request. The number for each version corresponds to the date the version was released in yyyymmdd format. In the example above the version `20220603` corresponds to June 03, 2022.  ### Setting the API version per access token  When creating an access token, you must specify a specific version of the API to use. This ensures that integrations using this token cannot be broken by version changes.  Tokens created before versioning was released have their version set to `20160426` (the version of the API that existed before versioning) so that they continue working the same way they did before versioning.  If you would like to upgrade your integration to use a new API version, you can explicitly set the header described above.  > ### Best practice: Set the header for every client or integration > > We recommend that you set the API version header explicitly in any client or integration you build. > > Only rely on the access token API version during manual testing.  ### API version changelog  |<div style=\"width:75px\">Version</div> | Changes | |---|---| | `20220603` | <ul><li>Changed the [list projects](tag/Projects#operation/getProjects) return value:<ul><li>Response is now paginated with a default limit of `20`.</li><li>Added support for filter and sort.</li><li>The project `environments` field is now expandable. This field is omitted by default.</li></ul></li><li>Changed the [get project](tag/Projects#operation/getProject) return value:<ul><li>The `environments` field is now expandable. This field is omitted by default.</li></ul></li></ul> | | `20210729` | <ul><li>Changed the [create approval request](/tag/Approvals#operation/postApprovalRequest) return value. It now returns HTTP Status Code `201` instead of `200`.</li><li> Changed the [get users](/tag/Users#operation/getUser) return value. It now returns a user record, not a user. </li><li> Added additional optional fields to environment, segments, flags, members, and segments, including the ability to create Big Segments. </li><li> Added default values for flag variations when new environments are created. </li><li> Added filtering and pagination for getting flags and members, including `limit`, `number`, `filter`, and `sort` query parameters. </li><li> Added endpoints for expiring user targets for flags and segments, scheduled changes, access tokens, Relay Proxy configuration, integrations and subscriptions, and approvals. </li></ul> | | `20191212` | <ul><li>[List feature flags](/tag/Feature-flags#operation/getFeatureFlags) now defaults to sending summaries of feature flag configurations, equivalent to setting the query parameter `summary=true`. Summaries omit flag targeting rules and individual user targets from the payload. </li><li> Added endpoints for flags, flag status, projects, environments, users, audit logs, members, users, custom roles, segments, usage, streams, events, and data export. </li></ul> | | `20160426` | <ul><li>Initial versioning of API. Tokens created before versioning have their version set to this.</li></ul> | 
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
import Access from './model/Access';
import AccessAllowedReason from './model/AccessAllowedReason';
import AccessAllowedRep from './model/AccessAllowedRep';
import AccessDenied from './model/AccessDenied';
import AccessDeniedReason from './model/AccessDeniedReason';
import AccessTokenPost from './model/AccessTokenPost';
import ActionInputRep from './model/ActionInputRep';
import ActionOutputRep from './model/ActionOutputRep';
import ApprovalConditionInputRep from './model/ApprovalConditionInputRep';
import ApprovalConditionOutputRep from './model/ApprovalConditionOutputRep';
import ApprovalSettings from './model/ApprovalSettings';
import AuditLogEntryListingRep from './model/AuditLogEntryListingRep';
import AuditLogEntryListingRepCollection from './model/AuditLogEntryListingRepCollection';
import AuditLogEntryRep from './model/AuditLogEntryRep';
import AuthorizedAppDataRep from './model/AuthorizedAppDataRep';
import BigSegmentTarget from './model/BigSegmentTarget';
import BranchCollectionRep from './model/BranchCollectionRep';
import BranchRep from './model/BranchRep';
import Clause from './model/Clause';
import Client from './model/Client';
import ClientCollection from './model/ClientCollection';
import ClientSideAvailability from './model/ClientSideAvailability';
import ClientSideAvailabilityPost from './model/ClientSideAvailabilityPost';
import ConditionBaseOutputRep from './model/ConditionBaseOutputRep';
import ConditionInputRep from './model/ConditionInputRep';
import ConditionOutputRep from './model/ConditionOutputRep';
import ConfidenceIntervalRep from './model/ConfidenceIntervalRep';
import Conflict from './model/Conflict';
import ConflictOutputRep from './model/ConflictOutputRep';
import CopiedFromEnv from './model/CopiedFromEnv';
import CreateCopyFlagConfigApprovalRequestRequest from './model/CreateCopyFlagConfigApprovalRequestRequest';
import CreateFlagConfigApprovalRequestRequest from './model/CreateFlagConfigApprovalRequestRequest';
import CredibleIntervalRep from './model/CredibleIntervalRep';
import CustomProperty from './model/CustomProperty';
import CustomRole from './model/CustomRole';
import CustomRolePost from './model/CustomRolePost';
import CustomRolePostData from './model/CustomRolePostData';
import CustomRoles from './model/CustomRoles';
import CustomWorkflowInputRep from './model/CustomWorkflowInputRep';
import CustomWorkflowMeta from './model/CustomWorkflowMeta';
import CustomWorkflowOutputRep from './model/CustomWorkflowOutputRep';
import CustomWorkflowStageMeta from './model/CustomWorkflowStageMeta';
import CustomWorkflowsListingOutputRep from './model/CustomWorkflowsListingOutputRep';
import DefaultClientSideAvailabilityPost from './model/DefaultClientSideAvailabilityPost';
import Defaults from './model/Defaults';
import DependentFlag from './model/DependentFlag';
import DependentFlagEnvironment from './model/DependentFlagEnvironment';
import DependentFlagsByEnvironment from './model/DependentFlagsByEnvironment';
import Destination from './model/Destination';
import DestinationPost from './model/DestinationPost';
import Destinations from './model/Destinations';
import Environment from './model/Environment';
import EnvironmentPost from './model/EnvironmentPost';
import Environments from './model/Environments';
import EvaluationReason from './model/EvaluationReason';
import ExecutionOutputRep from './model/ExecutionOutputRep';
import Experiment from './model/Experiment';
import ExperimentAllocationRep from './model/ExperimentAllocationRep';
import ExperimentBayesianResultsRep from './model/ExperimentBayesianResultsRep';
import ExperimentCollectionRep from './model/ExperimentCollectionRep';
import ExperimentEnabledPeriodRep from './model/ExperimentEnabledPeriodRep';
import ExperimentEnvironmentSettingRep from './model/ExperimentEnvironmentSettingRep';
import ExperimentExpandableProperties from './model/ExperimentExpandableProperties';
import ExperimentInfoRep from './model/ExperimentInfoRep';
import ExperimentMetadataRep from './model/ExperimentMetadataRep';
import ExperimentPatchInput from './model/ExperimentPatchInput';
import ExperimentPost from './model/ExperimentPost';
import ExperimentResults from './model/ExperimentResults';
import ExperimentStatsRep from './model/ExperimentStatsRep';
import ExperimentTimeSeriesSlice from './model/ExperimentTimeSeriesSlice';
import ExperimentTimeSeriesVariationSlice from './model/ExperimentTimeSeriesVariationSlice';
import ExperimentTotalsRep from './model/ExperimentTotalsRep';
import ExpiringUserTargetError from './model/ExpiringUserTargetError';
import ExpiringUserTargetGetResponse from './model/ExpiringUserTargetGetResponse';
import ExpiringUserTargetItem from './model/ExpiringUserTargetItem';
import ExpiringUserTargetPatchResponse from './model/ExpiringUserTargetPatchResponse';
import Export from './model/Export';
import Extinction from './model/Extinction';
import ExtinctionCollectionRep from './model/ExtinctionCollectionRep';
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
import FlagConfigApprovalRequestResponse from './model/FlagConfigApprovalRequestResponse';
import FlagConfigApprovalRequestsResponse from './model/FlagConfigApprovalRequestsResponse';
import FlagCopyConfigEnvironment from './model/FlagCopyConfigEnvironment';
import FlagCopyConfigPost from './model/FlagCopyConfigPost';
import FlagFollowersByProjEnvGetRep from './model/FlagFollowersByProjEnvGetRep';
import FlagFollowersGetRep from './model/FlagFollowersGetRep';
import FlagGlobalAttributesRep from './model/FlagGlobalAttributesRep';
import FlagInput from './model/FlagInput';
import FlagLinkCollectionRep from './model/FlagLinkCollectionRep';
import FlagLinkMember from './model/FlagLinkMember';
import FlagLinkPost from './model/FlagLinkPost';
import FlagLinkRep from './model/FlagLinkRep';
import FlagListingRep from './model/FlagListingRep';
import FlagRep from './model/FlagRep';
import FlagScheduledChangesInput from './model/FlagScheduledChangesInput';
import FlagStatusRep from './model/FlagStatusRep';
import FlagSummary from './model/FlagSummary';
import FlagTriggerInput from './model/FlagTriggerInput';
import FollowFlagMember from './model/FollowFlagMember';
import FollowersPerFlag from './model/FollowersPerFlag';
import ForbiddenErrorRep from './model/ForbiddenErrorRep';
import HunkRep from './model/HunkRep';
import Import from './model/Import';
import InitiatorRep from './model/InitiatorRep';
import InstructionUserRequest from './model/InstructionUserRequest';
import Integration from './model/Integration';
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
import IterationExpandableProperties from './model/IterationExpandableProperties';
import IterationInput from './model/IterationInput';
import IterationRep from './model/IterationRep';
import LastSeenMetadata from './model/LastSeenMetadata';
import LegacyExperimentRep from './model/LegacyExperimentRep';
import Link from './model/Link';
import Member from './model/Member';
import MemberDataRep from './model/MemberDataRep';
import MemberImportItem from './model/MemberImportItem';
import MemberPermissionGrantSummaryRep from './model/MemberPermissionGrantSummaryRep';
import MemberSummary from './model/MemberSummary';
import MemberTeamSummaryRep from './model/MemberTeamSummaryRep';
import MemberTeamsPostInput from './model/MemberTeamsPostInput';
import Members from './model/Members';
import MethodNotAllowedErrorRep from './model/MethodNotAllowedErrorRep';
import MetricCollectionRep from './model/MetricCollectionRep';
import MetricInput from './model/MetricInput';
import MetricListingRep from './model/MetricListingRep';
import MetricPost from './model/MetricPost';
import MetricRep from './model/MetricRep';
import MetricSeen from './model/MetricSeen';
import MetricV2Rep from './model/MetricV2Rep';
import Modification from './model/Modification';
import MultiEnvironmentDependentFlag from './model/MultiEnvironmentDependentFlag';
import MultiEnvironmentDependentFlags from './model/MultiEnvironmentDependentFlags';
import NewMemberForm from './model/NewMemberForm';
import NotFoundErrorRep from './model/NotFoundErrorRep';
import OauthClientPost from './model/OauthClientPost';
import ParameterDefault from './model/ParameterDefault';
import ParameterRep from './model/ParameterRep';
import ParentResourceRep from './model/ParentResourceRep';
import PatchFailedErrorRep from './model/PatchFailedErrorRep';
import PatchFlagsRequest from './model/PatchFlagsRequest';
import PatchOperation from './model/PatchOperation';
import PatchSegmentInstruction from './model/PatchSegmentInstruction';
import PatchSegmentRequest from './model/PatchSegmentRequest';
import PatchUsersRequest from './model/PatchUsersRequest';
import PatchWithComment from './model/PatchWithComment';
import PermissionGrantInput from './model/PermissionGrantInput';
import PostApprovalRequestApplyRequest from './model/PostApprovalRequestApplyRequest';
import PostApprovalRequestReviewRequest from './model/PostApprovalRequestReviewRequest';
import PostFlagScheduledChangesInput from './model/PostFlagScheduledChangesInput';
import Prerequisite from './model/Prerequisite';
import Project from './model/Project';
import ProjectListingRep from './model/ProjectListingRep';
import ProjectPost from './model/ProjectPost';
import ProjectRep from './model/ProjectRep';
import ProjectSummary from './model/ProjectSummary';
import Projects from './model/Projects';
import PubNubDetailRep from './model/PubNubDetailRep';
import PutBranch from './model/PutBranch';
import RateLimitedErrorRep from './model/RateLimitedErrorRep';
import RecentTriggerBody from './model/RecentTriggerBody';
import ReferenceRep from './model/ReferenceRep';
import RelativeDifferenceRep from './model/RelativeDifferenceRep';
import RelayAutoConfigCollectionRep from './model/RelayAutoConfigCollectionRep';
import RelayAutoConfigPost from './model/RelayAutoConfigPost';
import RelayAutoConfigRep from './model/RelayAutoConfigRep';
import RepositoryCollectionRep from './model/RepositoryCollectionRep';
import RepositoryPost from './model/RepositoryPost';
import RepositoryRep from './model/RepositoryRep';
import ResolvedContext from './model/ResolvedContext';
import ResolvedImage from './model/ResolvedImage';
import ResolvedTitle from './model/ResolvedTitle';
import ResolvedUIBlockElement from './model/ResolvedUIBlockElement';
import ResolvedUIBlocks from './model/ResolvedUIBlocks';
import ResourceAccess from './model/ResourceAccess';
import ResourceIDResponse from './model/ResourceIDResponse';
import ReviewOutputRep from './model/ReviewOutputRep';
import ReviewResponse from './model/ReviewResponse';
import Rollout from './model/Rollout';
import Rule from './model/Rule';
import RuleClause from './model/RuleClause';
import ScheduleConditionInputRep from './model/ScheduleConditionInputRep';
import ScheduleConditionOutputRep from './model/ScheduleConditionOutputRep';
import SdkListRep from './model/SdkListRep';
import SdkVersionListRep from './model/SdkVersionListRep';
import SdkVersionRep from './model/SdkVersionRep';
import SegmentBody from './model/SegmentBody';
import SegmentMetadata from './model/SegmentMetadata';
import SegmentUserList from './model/SegmentUserList';
import SegmentUserState from './model/SegmentUserState';
import SeriesListRep from './model/SeriesListRep';
import SourceEnv from './model/SourceEnv';
import SourceFlag from './model/SourceFlag';
import StageInputRep from './model/StageInputRep';
import StageOutputRep from './model/StageOutputRep';
import Statement from './model/Statement';
import StatementPost from './model/StatementPost';
import StatementPostData from './model/StatementPostData';
import StatisticCollectionRep from './model/StatisticCollectionRep';
import StatisticRep from './model/StatisticRep';
import StatisticsRep from './model/StatisticsRep';
import StatisticsRoot from './model/StatisticsRoot';
import StatusConflictErrorRep from './model/StatusConflictErrorRep';
import SubjectDataRep from './model/SubjectDataRep';
import SubscriptionPost from './model/SubscriptionPost';
import TagCollection from './model/TagCollection';
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
import TeamRepExpandableProperties from './model/TeamRepExpandableProperties';
import Teams from './model/Teams';
import TimestampRep from './model/TimestampRep';
import TitleRep from './model/TitleRep';
import Token from './model/Token';
import TokenDataRep from './model/TokenDataRep';
import Tokens from './model/Tokens';
import TreatmentInput from './model/TreatmentInput';
import TreatmentParameterInput from './model/TreatmentParameterInput';
import TreatmentRep from './model/TreatmentRep';
import TreatmentResultRep from './model/TreatmentResultRep';
import TriggerPost from './model/TriggerPost';
import TriggerWorkflowCollectionRep from './model/TriggerWorkflowCollectionRep';
import TriggerWorkflowRep from './model/TriggerWorkflowRep';
import UnauthorizedErrorRep from './model/UnauthorizedErrorRep';
import UrlPost from './model/UrlPost';
import User from './model/User';
import UserAttributeNamesRep from './model/UserAttributeNamesRep';
import UserFlagSetting from './model/UserFlagSetting';
import UserFlagSettings from './model/UserFlagSettings';
import UserRecord from './model/UserRecord';
import UserRecordRep from './model/UserRecordRep';
import UserSegment from './model/UserSegment';
import UserSegmentRule from './model/UserSegmentRule';
import UserSegments from './model/UserSegments';
import Users from './model/Users';
import UsersRep from './model/UsersRep';
import ValuePut from './model/ValuePut';
import Variation from './model/Variation';
import VariationOrRolloutRep from './model/VariationOrRolloutRep';
import VariationSummary from './model/VariationSummary';
import VersionsRep from './model/VersionsRep';
import Webhook from './model/Webhook';
import WebhookPost from './model/WebhookPost';
import Webhooks from './model/Webhooks';
import WeightedVariation from './model/WeightedVariation';
import WorkflowTemplateMetadata from './model/WorkflowTemplateMetadata';
import WorkflowTemplateParameter from './model/WorkflowTemplateParameter';
import AccessTokensApi from './api/AccessTokensApi';
import AccountMembersApi from './api/AccountMembersApi';
import AccountUsageBetaApi from './api/AccountUsageBetaApi';
import ApprovalsApi from './api/ApprovalsApi';
import AuditLogApi from './api/AuditLogApi';
import CodeReferencesApi from './api/CodeReferencesApi';
import CustomRolesApi from './api/CustomRolesApi';
import DataExportDestinationsApi from './api/DataExportDestinationsApi';
import EnvironmentsApi from './api/EnvironmentsApi';
import ExperimentsBetaApi from './api/ExperimentsBetaApi';
import FeatureFlagsApi from './api/FeatureFlagsApi';
import FeatureFlagsBetaApi from './api/FeatureFlagsBetaApi';
import FlagLinksBetaApi from './api/FlagLinksBetaApi';
import FlagTriggersApi from './api/FlagTriggersApi';
import FollowFlagsApi from './api/FollowFlagsApi';
import IntegrationAuditLogSubscriptionsApi from './api/IntegrationAuditLogSubscriptionsApi';
import IntegrationDeliveryConfigurationsBetaApi from './api/IntegrationDeliveryConfigurationsBetaApi';
import MetricsApi from './api/MetricsApi';
import OAuth2ClientsBetaApi from './api/OAuth2ClientsBetaApi';
import OtherApi from './api/OtherApi';
import ProjectsApi from './api/ProjectsApi';
import RelayProxyConfigurationsApi from './api/RelayProxyConfigurationsApi';
import ScheduledChangesApi from './api/ScheduledChangesApi';
import SegmentsApi from './api/SegmentsApi';
import SegmentsBetaApi from './api/SegmentsBetaApi';
import TagsApi from './api/TagsApi';
import TeamsApi from './api/TeamsApi';
import UserSettingsApi from './api/UserSettingsApi';
import UsersApi from './api/UsersApi';
import UsersBetaApi from './api/UsersBetaApi';
import WebhooksApi from './api/WebhooksApi';
import WorkflowsBetaApi from './api/WorkflowsBetaApi';


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
* @version 10.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

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
     * The ActionInputRep model constructor.
     * @property {module:model/ActionInputRep}
     */
    ActionInputRep,

    /**
     * The ActionOutputRep model constructor.
     * @property {module:model/ActionOutputRep}
     */
    ActionOutputRep,

    /**
     * The ApprovalConditionInputRep model constructor.
     * @property {module:model/ApprovalConditionInputRep}
     */
    ApprovalConditionInputRep,

    /**
     * The ApprovalConditionOutputRep model constructor.
     * @property {module:model/ApprovalConditionOutputRep}
     */
    ApprovalConditionOutputRep,

    /**
     * The ApprovalSettings model constructor.
     * @property {module:model/ApprovalSettings}
     */
    ApprovalSettings,

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
     * The AuthorizedAppDataRep model constructor.
     * @property {module:model/AuthorizedAppDataRep}
     */
    AuthorizedAppDataRep,

    /**
     * The BigSegmentTarget model constructor.
     * @property {module:model/BigSegmentTarget}
     */
    BigSegmentTarget,

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
     * The ConditionBaseOutputRep model constructor.
     * @property {module:model/ConditionBaseOutputRep}
     */
    ConditionBaseOutputRep,

    /**
     * The ConditionInputRep model constructor.
     * @property {module:model/ConditionInputRep}
     */
    ConditionInputRep,

    /**
     * The ConditionOutputRep model constructor.
     * @property {module:model/ConditionOutputRep}
     */
    ConditionOutputRep,

    /**
     * The ConfidenceIntervalRep model constructor.
     * @property {module:model/ConfidenceIntervalRep}
     */
    ConfidenceIntervalRep,

    /**
     * The Conflict model constructor.
     * @property {module:model/Conflict}
     */
    Conflict,

    /**
     * The ConflictOutputRep model constructor.
     * @property {module:model/ConflictOutputRep}
     */
    ConflictOutputRep,

    /**
     * The CopiedFromEnv model constructor.
     * @property {module:model/CopiedFromEnv}
     */
    CopiedFromEnv,

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
     * The CredibleIntervalRep model constructor.
     * @property {module:model/CredibleIntervalRep}
     */
    CredibleIntervalRep,

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
     * The CustomRolePostData model constructor.
     * @property {module:model/CustomRolePostData}
     */
    CustomRolePostData,

    /**
     * The CustomRoles model constructor.
     * @property {module:model/CustomRoles}
     */
    CustomRoles,

    /**
     * The CustomWorkflowInputRep model constructor.
     * @property {module:model/CustomWorkflowInputRep}
     */
    CustomWorkflowInputRep,

    /**
     * The CustomWorkflowMeta model constructor.
     * @property {module:model/CustomWorkflowMeta}
     */
    CustomWorkflowMeta,

    /**
     * The CustomWorkflowOutputRep model constructor.
     * @property {module:model/CustomWorkflowOutputRep}
     */
    CustomWorkflowOutputRep,

    /**
     * The CustomWorkflowStageMeta model constructor.
     * @property {module:model/CustomWorkflowStageMeta}
     */
    CustomWorkflowStageMeta,

    /**
     * The CustomWorkflowsListingOutputRep model constructor.
     * @property {module:model/CustomWorkflowsListingOutputRep}
     */
    CustomWorkflowsListingOutputRep,

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
     * The Environments model constructor.
     * @property {module:model/Environments}
     */
    Environments,

    /**
     * The EvaluationReason model constructor.
     * @property {module:model/EvaluationReason}
     */
    EvaluationReason,

    /**
     * The ExecutionOutputRep model constructor.
     * @property {module:model/ExecutionOutputRep}
     */
    ExecutionOutputRep,

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
     * The ExperimentBayesianResultsRep model constructor.
     * @property {module:model/ExperimentBayesianResultsRep}
     */
    ExperimentBayesianResultsRep,

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
     * The ExperimentExpandableProperties model constructor.
     * @property {module:model/ExperimentExpandableProperties}
     */
    ExperimentExpandableProperties,

    /**
     * The ExperimentInfoRep model constructor.
     * @property {module:model/ExperimentInfoRep}
     */
    ExperimentInfoRep,

    /**
     * The ExperimentMetadataRep model constructor.
     * @property {module:model/ExperimentMetadataRep}
     */
    ExperimentMetadataRep,

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
     * The ExperimentResults model constructor.
     * @property {module:model/ExperimentResults}
     */
    ExperimentResults,

    /**
     * The ExperimentStatsRep model constructor.
     * @property {module:model/ExperimentStatsRep}
     */
    ExperimentStatsRep,

    /**
     * The ExperimentTimeSeriesSlice model constructor.
     * @property {module:model/ExperimentTimeSeriesSlice}
     */
    ExperimentTimeSeriesSlice,

    /**
     * The ExperimentTimeSeriesVariationSlice model constructor.
     * @property {module:model/ExperimentTimeSeriesVariationSlice}
     */
    ExperimentTimeSeriesVariationSlice,

    /**
     * The ExperimentTotalsRep model constructor.
     * @property {module:model/ExperimentTotalsRep}
     */
    ExperimentTotalsRep,

    /**
     * The ExpiringUserTargetError model constructor.
     * @property {module:model/ExpiringUserTargetError}
     */
    ExpiringUserTargetError,

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
     * The FlagGlobalAttributesRep model constructor.
     * @property {module:model/FlagGlobalAttributesRep}
     */
    FlagGlobalAttributesRep,

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
     * The IterationExpandableProperties model constructor.
     * @property {module:model/IterationExpandableProperties}
     */
    IterationExpandableProperties,

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
     * The LastSeenMetadata model constructor.
     * @property {module:model/LastSeenMetadata}
     */
    LastSeenMetadata,

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
     * The MethodNotAllowedErrorRep model constructor.
     * @property {module:model/MethodNotAllowedErrorRep}
     */
    MethodNotAllowedErrorRep,

    /**
     * The MetricCollectionRep model constructor.
     * @property {module:model/MetricCollectionRep}
     */
    MetricCollectionRep,

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
     * The MetricSeen model constructor.
     * @property {module:model/MetricSeen}
     */
    MetricSeen,

    /**
     * The MetricV2Rep model constructor.
     * @property {module:model/MetricV2Rep}
     */
    MetricV2Rep,

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
     * The PostFlagScheduledChangesInput model constructor.
     * @property {module:model/PostFlagScheduledChangesInput}
     */
    PostFlagScheduledChangesInput,

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
     * The ProjectListingRep model constructor.
     * @property {module:model/ProjectListingRep}
     */
    ProjectListingRep,

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
     * The Projects model constructor.
     * @property {module:model/Projects}
     */
    Projects,

    /**
     * The PubNubDetailRep model constructor.
     * @property {module:model/PubNubDetailRep}
     */
    PubNubDetailRep,

    /**
     * The PutBranch model constructor.
     * @property {module:model/PutBranch}
     */
    PutBranch,

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
     * The RelativeDifferenceRep model constructor.
     * @property {module:model/RelativeDifferenceRep}
     */
    RelativeDifferenceRep,

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
     * The ResolvedContext model constructor.
     * @property {module:model/ResolvedContext}
     */
    ResolvedContext,

    /**
     * The ResolvedImage model constructor.
     * @property {module:model/ResolvedImage}
     */
    ResolvedImage,

    /**
     * The ResolvedTitle model constructor.
     * @property {module:model/ResolvedTitle}
     */
    ResolvedTitle,

    /**
     * The ResolvedUIBlockElement model constructor.
     * @property {module:model/ResolvedUIBlockElement}
     */
    ResolvedUIBlockElement,

    /**
     * The ResolvedUIBlocks model constructor.
     * @property {module:model/ResolvedUIBlocks}
     */
    ResolvedUIBlocks,

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
     * The ReviewOutputRep model constructor.
     * @property {module:model/ReviewOutputRep}
     */
    ReviewOutputRep,

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
     * The ScheduleConditionInputRep model constructor.
     * @property {module:model/ScheduleConditionInputRep}
     */
    ScheduleConditionInputRep,

    /**
     * The ScheduleConditionOutputRep model constructor.
     * @property {module:model/ScheduleConditionOutputRep}
     */
    ScheduleConditionOutputRep,

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
     * The SeriesListRep model constructor.
     * @property {module:model/SeriesListRep}
     */
    SeriesListRep,

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
     * The StageInputRep model constructor.
     * @property {module:model/StageInputRep}
     */
    StageInputRep,

    /**
     * The StageOutputRep model constructor.
     * @property {module:model/StageOutputRep}
     */
    StageOutputRep,

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
     * The StatementPostData model constructor.
     * @property {module:model/StatementPostData}
     */
    StatementPostData,

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
     * The StatisticsRep model constructor.
     * @property {module:model/StatisticsRep}
     */
    StatisticsRep,

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
     * The TagCollection model constructor.
     * @property {module:model/TagCollection}
     */
    TagCollection,

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
     * The TeamRepExpandableProperties model constructor.
     * @property {module:model/TeamRepExpandableProperties}
     */
    TeamRepExpandableProperties,

    /**
     * The Teams model constructor.
     * @property {module:model/Teams}
     */
    Teams,

    /**
     * The TimestampRep model constructor.
     * @property {module:model/TimestampRep}
     */
    TimestampRep,

    /**
     * The TitleRep model constructor.
     * @property {module:model/TitleRep}
     */
    TitleRep,

    /**
     * The Token model constructor.
     * @property {module:model/Token}
     */
    Token,

    /**
     * The TokenDataRep model constructor.
     * @property {module:model/TokenDataRep}
     */
    TokenDataRep,

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
     * The TreatmentResultRep model constructor.
     * @property {module:model/TreatmentResultRep}
     */
    TreatmentResultRep,

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
     * The UnauthorizedErrorRep model constructor.
     * @property {module:model/UnauthorizedErrorRep}
     */
    UnauthorizedErrorRep,

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
     * The UserRecordRep model constructor.
     * @property {module:model/UserRecordRep}
     */
    UserRecordRep,

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
     * The VersionsRep model constructor.
     * @property {module:model/VersionsRep}
     */
    VersionsRep,

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
     * The WorkflowTemplateParameter model constructor.
     * @property {module:model/WorkflowTemplateParameter}
     */
    WorkflowTemplateParameter,

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
    * The ApprovalsApi service constructor.
    * @property {module:api/ApprovalsApi}
    */
    ApprovalsApi,

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
    * The ExperimentsBetaApi service constructor.
    * @property {module:api/ExperimentsBetaApi}
    */
    ExperimentsBetaApi,

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
    * The MetricsApi service constructor.
    * @property {module:api/MetricsApi}
    */
    MetricsApi,

    /**
    * The OAuth2ClientsBetaApi service constructor.
    * @property {module:api/OAuth2ClientsBetaApi}
    */
    OAuth2ClientsBetaApi,

    /**
    * The OtherApi service constructor.
    * @property {module:api/OtherApi}
    */
    OtherApi,

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
    * The SegmentsBetaApi service constructor.
    * @property {module:api/SegmentsBetaApi}
    */
    SegmentsBetaApi,

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
    * The WebhooksApi service constructor.
    * @property {module:api/WebhooksApi}
    */
    WebhooksApi,

    /**
    * The WorkflowsBetaApi service constructor.
    * @property {module:api/WorkflowsBetaApi}
    */
    WorkflowsBetaApi
};
