/**
 * LaunchDarkly REST API
 * # Overview  ## Authentication  All REST API resources are authenticated with either [personal or service access tokens](https://docs.launchdarkly.com/home/account-security/api-access-tokens), or session cookies. Other authentication mechanisms are not supported. You can manage personal access tokens on your [**Account settings**](https://app.launchdarkly.com/settings/tokens) page.  LaunchDarkly also has SDK keys, mobile keys, and client-side IDs that are used by our server-side SDKs, mobile SDKs, and JavaScript-based SDKs, respectively. **These keys cannot be used to access our REST API**. These keys are environment-specific, and can only perform read-only operations such as fetching feature flag settings.  | Auth mechanism                                                                                  | Allowed resources                                                                                     | Use cases                                          | | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | -------------------------------------------------- | | [Personal or service access tokens](https://docs.launchdarkly.com/home/account-security/api-access-tokens) | Can be customized on a per-token basis                                                                | Building scripts, custom integrations, data export. | | SDK keys                                                                                        | Can only access read-only resources specific to server-side SDKs. Restricted to a single environment. | Server-side SDKs                     | | Mobile keys                                                                                     | Can only access read-only resources specific to mobile SDKs, and only for flags marked available to mobile keys. Restricted to a single environment.           | Mobile SDKs                                        | | Client-side ID                                                                                  | Can only access read-only resources specific to JavaScript-based client-side SDKs, and only for flags marked available to client-side. Restricted to a single environment.           | Client-side JavaScript                             |  > #### Keep your access tokens and SDK keys private > > Access tokens should _never_ be exposed in untrusted contexts. Never put an access token in client-side JavaScript, or embed it in a mobile application. LaunchDarkly has special mobile keys that you can embed in mobile apps. If you accidentally expose an access token or SDK key, you can reset it from your [**Account settings**](https://app.launchdarkly.com/settings/tokens) page. > > The client-side ID is safe to embed in untrusted contexts. It's designed for use in client-side JavaScript.  ### Authentication using request header  The preferred way to authenticate with the API is by adding an `Authorization` header containing your access token to your requests. The value of the `Authorization` header must be your access token.  Manage personal access tokens from the [**Account settings**](https://app.launchdarkly.com/settings/tokens) page.  ### Authentication using session cookie  For testing purposes, you can make API calls directly from your web browser. If you are logged in to the LaunchDarkly application, the API will use your existing session to authenticate calls.  If you have a [role](https://docs.launchdarkly.com/home/team/built-in-roles) other than Admin, or have a [custom role](https://docs.launchdarkly.com/home/team/custom-roles) defined, you may not have permission to perform some API calls. You will receive a `401` response code in that case.  > ### Modifying the Origin header causes an error > > LaunchDarkly validates that the Origin header for any API request authenticated by a session cookie matches the expected Origin header. The expected Origin header is `https://app.launchdarkly.com`. > > If the Origin header does not match what's expected, LaunchDarkly returns an error. This error can prevent the LaunchDarkly app from working correctly. > > Any browser extension that intentionally changes the Origin header can cause this problem. For example, the `Allow-Control-Allow-Origin: *` Chrome extension changes the Origin header to `http://evil.com` and causes the app to fail. > > To prevent this error, do not modify your Origin header. > > LaunchDarkly does not require origin matching when authenticating with an access token, so this issue does not affect normal API usage.  ## Representations  All resources expect and return JSON response bodies. Error responses also send a JSON body. To learn more about the error format of the API, read [Errors](/#section/Overview/Errors).  In practice this means that you always get a response with a `Content-Type` header set to `application/json`.  In addition, request bodies for `PATCH`, `POST`, and `PUT` requests must be encoded as JSON with a `Content-Type` header set to `application/json`.  ### Summary and detailed representations  When you fetch a list of resources, the response includes only the most important attributes of each resource. This is a _summary representation_ of the resource. When you fetch an individual resource, such as a single feature flag, you receive a _detailed representation_ of the resource.  The best way to find a detailed representation is to follow links. Every summary representation includes a link to its detailed representation.  ### Expanding responses  Sometimes the detailed representation of a resource does not include all of the attributes of the resource by default. If this is the case, the request method will clearly document this and describe which attributes you can include in an expanded response.  To include the additional attributes, append the `expand` request parameter to your request and add a comma-separated list of the attributes to include. For example, when you append `?expand=members,roles` to the [Get team](/tag/Teams#operation/getTeam) endpoint, the expanded response includes both of these attributes.  ### Links and addressability  The best way to navigate the API is by following links. These are attributes in representations that link to other resources. The API always uses the same format for links:  - Links to other resources within the API are encapsulated in a `_links` object - If the resource has a corresponding link to HTML content on the site, it is stored in a special `_site` link  Each link has two attributes:  - An `href`, which contains the URL - A `type`, which describes the content type  For example, a feature resource might return the following:  ```json {   \"_links\": {     \"parent\": {       \"href\": \"/api/features\",       \"type\": \"application/json\"     },     \"self\": {       \"href\": \"/api/features/sort.order\",       \"type\": \"application/json\"     }   },   \"_site\": {     \"href\": \"/features/sort.order\",     \"type\": \"text/html\"   } } ```  From this, you can navigate to the parent collection of features by following the `parent` link, or navigate to the site page for the feature by following the `_site` link.  Collections are always represented as a JSON object with an `items` attribute containing an array of representations. Like all other representations, collections have `_links` defined at the top level.  Paginated collections include `first`, `last`, `next`, and `prev` links containing a URL with the respective set of elements in the collection.  ## Updates  Resources that accept partial updates use the `PATCH` verb. Most resources support the [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) format. Some resources also support the [JSON merge patch](https://datatracker.ietf.org/doc/html/rfc7386) format, and some resources support the [semantic patch](/reference#updates-using-semantic-patch) format, which is a way to specify the modifications to perform as a set of executable instructions. Each resource supports optional [comments](/reference#updates-with-comments) that you can submit with updates. Comments appear in outgoing webhooks, the audit log, and other integrations.  When a resource supports both JSON patch and semantic patch, we document both in the request method. However, the specific request body fields and descriptions included in our documentation only match one type of patch or the other.  ### Updates using JSON patch  [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) is a way to specify the modifications to perform on a resource. JSON patch uses paths and a limited set of operations to describe how to transform the current state of the resource into a new state. JSON patch documents are always arrays, where each element contains an operation, a path to the field to update, and the new value.  For example, in this feature flag representation:  ```json {     \"name\": \"New recommendations engine\",     \"key\": \"engine.enable\",     \"description\": \"This is the description\",     ... } ``` You can change the feature flag's description with the following patch document:  ```json [{ \"op\": \"replace\", \"path\": \"/description\", \"value\": \"This is the new description\" }] ```  You can specify multiple modifications to perform in a single request. You can also test that certain preconditions are met before applying the patch:  ```json [   { \"op\": \"test\", \"path\": \"/version\", \"value\": 10 },   { \"op\": \"replace\", \"path\": \"/description\", \"value\": \"The new description\" } ] ```  The above patch request tests whether the feature flag's `version` is `10`, and if so, changes the feature flag's description.  Attributes that are not editable, such as a resource's `_links`, have names that start with an underscore.  ### Updates using JSON merge patch  [JSON merge patch](https://datatracker.ietf.org/doc/html/rfc7386) is another format for specifying the modifications to perform on a resource. JSON merge patch is less expressive than JSON patch. However, in many cases it is simpler to construct a merge patch document. For example, you can change a feature flag's description with the following merge patch document:  ```json {   \"description\": \"New flag description\" } ```  ### Updates using semantic patch  The API also supports the semantic patch format. A semantic patch is a way to specify the modifications to perform on a resource as a set of executable instructions.  Semantic patch allows you to be explicit about intent using precise, custom instructions. In many cases, you can define semantic patch instructions independently of the current state of the resource. This can be useful when defining a change that may be applied at a future date.  To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header.  Here's how:  ``` Content-Type: application/json; domain-model=launchdarkly.semanticpatch ```  If you call a semantic patch resource without this header, you will receive a `400` response because your semantic patch will be interpreted as a JSON patch.  The body of a semantic patch request takes the following properties:  * `comment` (string): (Optional) A description of the update. * `environmentKey` (string): (Required for some resources only) The environment key. * `instructions` (array): (Required) A list of actions the update should perform. Each action in the list must be an object with a `kind` property that indicates the instruction. If the instruction requires parameters, you must include those parameters as additional fields in the object. The documentation for each resource that supports semantic patch includes the available instructions and any additional parameters.  For example:  ```json {   \"comment\": \"optional comment\",   \"instructions\": [ {\"kind\": \"turnFlagOn\"} ] } ```  If any instruction in the patch encounters an error, the endpoint returns an error and will not change the resource. In general, each instruction silently does nothing if the resource is already in the state you request.  ### Updates with comments  You can submit optional comments with `PATCH` changes.  To submit a comment along with a JSON patch document, use the following format:  ```json {   \"comment\": \"This is a comment string\",   \"patch\": [{ \"op\": \"replace\", \"path\": \"/description\", \"value\": \"The new description\" }] } ```  To submit a comment along with a JSON merge patch document, use the following format:  ```json {   \"comment\": \"This is a comment string\",   \"merge\": { \"description\": \"New flag description\" } } ```  To submit a comment along with a semantic patch, use the following format:  ```json {   \"comment\": \"This is a comment string\",   \"instructions\": [ {\"kind\": \"turnFlagOn\"} ] } ```  ## Errors  The API always returns errors in a common format. Here's an example:  ```json {   \"code\": \"invalid_request\",   \"message\": \"A feature with that key already exists\",   \"id\": \"30ce6058-87da-11e4-b116-123b93f75cba\" } ```  The `code` indicates the general class of error. The `message` is a human-readable explanation of what went wrong. The `id` is a unique identifier. Use it when you're working with LaunchDarkly Support to debug a problem with a specific API call.  ### HTTP status error response codes  | Code | Definition        | Description                                                                                       | Possible Solution                                                | | ---- | ----------------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | | 400  | Invalid request       | The request cannot be understood.                                    | Ensure JSON syntax in request body is correct.                   | | 401  | Invalid access token      | Requestor is unauthorized or does not have permission for this API call.                                                | Ensure your API access token is valid and has the appropriate permissions.                                     | | 403  | Forbidden         | Requestor does not have access to this resource.                                                | Ensure that the account member or access token has proper permissions set. | | 404  | Invalid resource identifier | The requested resource is not valid. | Ensure that the resource is correctly identified by ID or key. | | 405  | Method not allowed | The request method is not allowed on this resource. | Ensure that the HTTP verb is correct. | | 409  | Conflict          | The API request can not be completed because it conflicts with a concurrent API request. | Retry your request.                                              | | 422  | Unprocessable entity | The API request can not be completed because the update description can not be understood. | Ensure that the request body is correct for the type of patch you are using, either JSON patch or semantic patch. | 429  | Too many requests | Read [Rate limiting](/#section/Overview/Rate-limiting).                                               | Wait and try again later.                                        |  ## CORS  The LaunchDarkly API supports Cross Origin Resource Sharing (CORS) for AJAX requests from any origin. If an `Origin` header is given in a request, it will be echoed as an explicitly allowed origin. Otherwise the request returns a wildcard, `Access-Control-Allow-Origin: *`. For more information on CORS, read the [CORS W3C Recommendation](http://www.w3.org/TR/cors). Example CORS headers might look like:  ```http Access-Control-Allow-Headers: Accept, Content-Type, Content-Length, Accept-Encoding, Authorization Access-Control-Allow-Methods: OPTIONS, GET, DELETE, PATCH Access-Control-Allow-Origin: * Access-Control-Max-Age: 300 ```  You can make authenticated CORS calls just as you would make same-origin calls, using either [token or session-based authentication](/#section/Overview/Authentication). If you are using session authentication, you should set the `withCredentials` property for your `xhr` request to `true`. You should never expose your access tokens to untrusted entities.  ## Rate limiting  We use several rate limiting strategies to ensure the availability of our APIs. Rate-limited calls to our APIs return a `429` status code. Calls to our APIs include headers indicating the current rate limit status. The specific headers returned depend on the API route being called. The limits differ based on the route, authentication mechanism, and other factors. Routes that are not rate limited may not contain any of the headers described below.  > ### Rate limiting and SDKs > > LaunchDarkly SDKs are never rate limited and do not use the API endpoints defined here. LaunchDarkly uses a different set of approaches, including streaming/server-sent events and a global CDN, to ensure availability to the routes used by LaunchDarkly SDKs.  ### Global rate limits  Authenticated requests are subject to a global limit. This is the maximum number of calls that your account can make to the API per ten seconds. All personal access tokens on the account share this limit, so exceeding the limit with one access token will impact other tokens. Calls that are subject to global rate limits may return the headers below:  | Header name                    | Description                                                                      | | ------------------------------ | -------------------------------------------------------------------------------- | | `X-Ratelimit-Global-Remaining` | The maximum number of requests the account is permitted to make per ten seconds. | | `X-Ratelimit-Reset`            | The time at which the current rate limit window resets in epoch milliseconds.    |  We do not publicly document the specific number of calls that can be made globally. This limit may change, and we encourage clients to program against the specification, relying on the two headers defined above, rather than hardcoding to the current limit.  ### Route-level rate limits  Some authenticated routes have custom rate limits. These also reset every ten seconds. Any access tokens hitting the same route share this limit, so exceeding the limit with one access token may impact other tokens. Calls that are subject to route-level rate limits return the headers below:  | Header name                   | Description                                                                                           | | ----------------------------- | ----------------------------------------------------------------------------------------------------- | | `X-Ratelimit-Route-Remaining` | The maximum number of requests to the current route the account is permitted to make per ten seconds. | | `X-Ratelimit-Reset`           | The time at which the current rate limit window resets in epoch milliseconds.                         |  A _route_ represents a specific URL pattern and verb. For example, the [Delete environment](/tag/Environments#operation/deleteEnvironment) endpoint is considered a single route, and each call to delete an environment counts against your route-level rate limit for that route.  We do not publicly document the specific number of calls that an account can make to each endpoint per ten seconds. These limits may change, and we encourage clients to program against the specification, relying on the two headers defined above, rather than hardcoding to the current limits.  ### IP-based rate limiting  We also employ IP-based rate limiting on some API routes. If you hit an IP-based rate limit, your API response will include a `Retry-After` header indicating how long to wait before re-trying the call. Clients must wait at least `Retry-After` seconds before making additional calls to our API, and should employ jitter and backoff strategies to avoid triggering rate limits again.  ## OpenAPI (Swagger) and client libraries  We have a [complete OpenAPI (Swagger) specification](https://app.launchdarkly.com/api/v2/openapi.json) for our API.  We auto-generate multiple client libraries based on our OpenAPI specification. To learn more, visit the [collection of client libraries on GitHub](https://github.com/search?q=topic%3Alaunchdarkly-api+org%3Alaunchdarkly&type=Repositories). You can also use this specification to generate client libraries to interact with our REST API in your language of choice.  Our OpenAPI specification is supported by several API-based tools such as Postman and Insomnia. In many cases, you can directly import our specification to explore our APIs.  ## Method overriding  Some firewalls and HTTP clients restrict the use of verbs other than `GET` and `POST`. In those environments, our API endpoints that use `DELETE`, `PATCH`, and `PUT` verbs are inaccessible.  To avoid this issue, our API supports the `X-HTTP-Method-Override` header, allowing clients to \"tunnel\" `DELETE`, `PATCH`, and `PUT` requests using a `POST` request.  For example, to call a `PATCH` endpoint using a `POST` request, you can include `X-HTTP-Method-Override:PATCH` as a header.  ## Beta resources  We sometimes release new API resources in **beta** status before we release them with general availability.  Resources that are in beta are still undergoing testing and development. They may change without notice, including becoming backwards incompatible.  We try to promote resources into general availability as quickly as possible. This happens after sufficient testing and when we're satisfied that we no longer need to make backwards-incompatible changes.  We mark beta resources with a \"Beta\" callout in our documentation, pictured below:  > ### This feature is in beta > > To use this feature, pass in a header including the `LD-API-Version` key with value set to `beta`. Use this header with each call. To learn more, read [Beta resources](/#section/Overview/Beta-resources). > > Resources that are in beta are still undergoing testing and development. They may change without notice, including becoming backwards incompatible.  ### Using beta resources  To use a beta resource, you must include a header in the request. If you call a beta resource without this header, you receive a `403` response.  Use this header:  ``` LD-API-Version: beta ```  ## Federal environments  The version of LaunchDarkly that is available on domains controlled by the United States government is different from the version of LaunchDarkly available to the general public. If you are an employee or contractor for a United States federal agency and use LaunchDarkly in your work, you likely use the federal instance of LaunchDarkly.  If you are working in the federal instance of LaunchDarkly, the base URI for each request is `https://app.launchdarkly.us`. In the \"Try it\" sandbox for each request, click the request path to view the complete resource path for the federal environment.  To learn more, read [LaunchDarkly in federal environments](https://docs.launchdarkly.com/home/advanced/federal).  ## Versioning  We try hard to keep our REST API backwards compatible, but we occasionally have to make backwards-incompatible changes in the process of shipping new features. These breaking changes can cause unexpected behavior if you don't prepare for them accordingly.  Updates to our REST API include support for the latest features in LaunchDarkly. We also release a new version of our REST API every time we make a breaking change. We provide simultaneous support for multiple API versions so you can migrate from your current API version to a new version at your own pace.  ### Setting the API version per request  You can set the API version on a specific request by sending an `LD-API-Version` header, as shown in the example below:  ``` LD-API-Version: 20220603 ```  The header value is the version number of the API version you would like to request. The number for each version corresponds to the date the version was released in `yyyymmdd` format. In the example above the version `20220603` corresponds to June 03, 2022.  ### Setting the API version per access token  When you create an access token, you must specify a specific version of the API to use. This ensures that integrations using this token cannot be broken by version changes.  Tokens created before versioning was released have their version set to `20160426`, which is the version of the API that existed before the current versioning scheme, so that they continue working the same way they did before versioning.  If you would like to upgrade your integration to use a new API version, you can explicitly set the header described above.  > ### Best practice: Set the header for every client or integration > > We recommend that you set the API version header explicitly in any client or integration you build. > > Only rely on the access token API version during manual testing.  ### API version changelog  |<div style=\"width:75px\">Version</div> | Changes | End of life (EOL) |---|---|---| | `20220603` | <ul><li>Changed the [list projects](/tag/Projects#operation/getProjects) return value:<ul><li>Response is now paginated with a default limit of `20`.</li><li>Added support for filter and sort.</li><li>The project `environments` field is now expandable. This field is omitted by default.</li></ul></li><li>Changed the [get project](/tag/Projects#operation/getProject) return value:<ul><li>The `environments` field is now expandable. This field is omitted by default.</li></ul></li></ul> | Current | | `20210729` | <ul><li>Changed the [create approval request](/tag/Approvals#operation/postApprovalRequest) return value. It now returns HTTP Status Code `201` instead of `200`.</li><li> Changed the [get users](/tag/Users#operation/getUser) return value. It now returns a user record, not a user. </li><li>Added additional optional fields to environment, segments, flags, members, and segments, including the ability to create Big Segments. </li><li> Added default values for flag variations when new environments are created. </li><li>Added filtering and pagination for getting flags and members, including `limit`, `number`, `filter`, and `sort` query parameters. </li><li>Added endpoints for expiring user targets for flags and segments, scheduled changes, access tokens, Relay Proxy configuration, integrations and subscriptions, and approvals. </li></ul> | 2023-06-03 | | `20191212` | <ul><li>[List feature flags](/tag/Feature-flags#operation/getFeatureFlags) now defaults to sending summaries of feature flag configurations, equivalent to setting the query parameter `summary=true`. Summaries omit flag targeting rules and individual user targets from the payload. </li><li> Added endpoints for flags, flag status, projects, environments, audit logs, members, users, custom roles, segments, usage, streams, events, and data export. </li></ul> | 2022-07-29 | | `20160426` | <ul><li>Initial versioning of API. Tokens created before versioning have their version set to this.</li></ul> | 2020-12-12 | 
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
import BranchCollectionRep from '../model/BranchCollectionRep';
import BranchRep from '../model/BranchRep';
import Extinction from '../model/Extinction';
import ExtinctionCollectionRep from '../model/ExtinctionCollectionRep';
import ForbiddenErrorRep from '../model/ForbiddenErrorRep';
import InvalidRequestErrorRep from '../model/InvalidRequestErrorRep';
import NotFoundErrorRep from '../model/NotFoundErrorRep';
import PatchOperation from '../model/PatchOperation';
import PutBranch from '../model/PutBranch';
import RateLimitedErrorRep from '../model/RateLimitedErrorRep';
import RepositoryCollectionRep from '../model/RepositoryCollectionRep';
import RepositoryPost from '../model/RepositoryPost';
import RepositoryRep from '../model/RepositoryRep';
import StatisticCollectionRep from '../model/StatisticCollectionRep';
import StatisticsRoot from '../model/StatisticsRoot';
import StatusConflictErrorRep from '../model/StatusConflictErrorRep';
import UnauthorizedErrorRep from '../model/UnauthorizedErrorRep';

/**
* CodeReferences service.
* @module api/CodeReferencesApi
* @version 13.0.0
*/
export default class CodeReferencesApi {

    /**
    * Constructs a new CodeReferencesApi. 
    * @alias module:api/CodeReferencesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the deleteBranches operation.
     * @callback module:api/CodeReferencesApi~deleteBranchesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete branches
     * Asynchronously delete a number of branches.
     * @param {String} repo The repository name to delete branches for.
     * @param {Array.<String>} requestBody 
     * @param {module:api/CodeReferencesApi~deleteBranchesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteBranches(repo, requestBody, callback) {
      let postBody = requestBody;
      // verify the required parameter 'repo' is set
      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling deleteBranches");
      }
      // verify the required parameter 'requestBody' is set
      if (requestBody === undefined || requestBody === null) {
        throw new Error("Missing the required parameter 'requestBody' when calling deleteBranches");
      }

      let pathParams = {
        'repo': repo
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
        '/api/v2/code-refs/repositories/{repo}/branch-delete-tasks', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteRepository operation.
     * @callback module:api/CodeReferencesApi~deleteRepositoryCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete repository
     * Delete a repository with the specified name.
     * @param {String} repo The repository name
     * @param {module:api/CodeReferencesApi~deleteRepositoryCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteRepository(repo, callback) {
      let postBody = null;
      // verify the required parameter 'repo' is set
      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling deleteRepository");
      }

      let pathParams = {
        'repo': repo
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
        '/api/v2/code-refs/repositories/{repo}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getBranch operation.
     * @callback module:api/CodeReferencesApi~getBranchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BranchRep} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get branch
     * Get a specific branch in a repository.
     * @param {String} repo The repository name
     * @param {String} branch The url-encoded branch name
     * @param {Object} opts Optional parameters
     * @param {String} opts.projKey Filter results to a specific project
     * @param {String} opts.flagKey Filter results to a specific flag key
     * @param {module:api/CodeReferencesApi~getBranchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BranchRep}
     */
    getBranch(repo, branch, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'repo' is set
      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling getBranch");
      }
      // verify the required parameter 'branch' is set
      if (branch === undefined || branch === null) {
        throw new Error("Missing the required parameter 'branch' when calling getBranch");
      }

      let pathParams = {
        'repo': repo,
        'branch': branch
      };
      let queryParams = {
        'projKey': opts['projKey'],
        'flagKey': opts['flagKey']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = BranchRep;
      return this.apiClient.callApi(
        '/api/v2/code-refs/repositories/{repo}/branches/{branch}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getBranches operation.
     * @callback module:api/CodeReferencesApi~getBranchesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BranchCollectionRep} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List branches
     * Get a list of branches.
     * @param {String} repo The repository name
     * @param {module:api/CodeReferencesApi~getBranchesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BranchCollectionRep}
     */
    getBranches(repo, callback) {
      let postBody = null;
      // verify the required parameter 'repo' is set
      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling getBranches");
      }

      let pathParams = {
        'repo': repo
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
      let returnType = BranchCollectionRep;
      return this.apiClient.callApi(
        '/api/v2/code-refs/repositories/{repo}/branches', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getExtinctions operation.
     * @callback module:api/CodeReferencesApi~getExtinctionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExtinctionCollectionRep} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List extinctions
     * Get a list of all extinctions. LaunchDarkly creates an extinction event after you remove all code references to a flag. To learn more, read [Understanding extinction events](https://docs.launchdarkly.com/home/code/code-references#understanding-extinction-events).
     * @param {Object} opts Optional parameters
     * @param {String} opts.repoName Filter results to a specific repository
     * @param {String} opts.branchName Filter results to a specific branch. By default, only the default branch will be queried for extinctions.
     * @param {String} opts.projKey Filter results to a specific project
     * @param {String} opts.flagKey Filter results to a specific flag key
     * @param {Number} opts.from Filter results to a specific timeframe based on commit time, expressed as a Unix epoch time in milliseconds. Must be used with `to`.
     * @param {Number} opts.to Filter results to a specific timeframe based on commit time, expressed as a Unix epoch time in milliseconds. Must be used with `from`.
     * @param {module:api/CodeReferencesApi~getExtinctionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ExtinctionCollectionRep}
     */
    getExtinctions(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'repoName': opts['repoName'],
        'branchName': opts['branchName'],
        'projKey': opts['projKey'],
        'flagKey': opts['flagKey'],
        'from': opts['from'],
        'to': opts['to']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ExtinctionCollectionRep;
      return this.apiClient.callApi(
        '/api/v2/code-refs/extinctions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getRepositories operation.
     * @callback module:api/CodeReferencesApi~getRepositoriesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RepositoryCollectionRep} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List repositories
     * Get a list of connected repositories. Optionally, you can include branch metadata with the `withBranches` query parameter. Embed references for the default branch with `ReferencesForDefaultBranch`. You can also filter the list of code references by project key and flag key.
     * @param {Object} opts Optional parameters
     * @param {String} opts.withBranches If set to any value, the endpoint returns repositories with associated branch data
     * @param {String} opts.withReferencesForDefaultBranch If set to any value, the endpoint returns repositories with associated branch data, as well as code references for the default git branch
     * @param {String} opts.projKey A LaunchDarkly project key. If provided, this filters code reference results to the specified project.
     * @param {String} opts.flagKey If set to any value, the endpoint returns repositories with associated branch data, as well as code references for the default git branch
     * @param {module:api/CodeReferencesApi~getRepositoriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RepositoryCollectionRep}
     */
    getRepositories(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'withBranches': opts['withBranches'],
        'withReferencesForDefaultBranch': opts['withReferencesForDefaultBranch'],
        'projKey': opts['projKey'],
        'flagKey': opts['flagKey']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = RepositoryCollectionRep;
      return this.apiClient.callApi(
        '/api/v2/code-refs/repositories', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getRepository operation.
     * @callback module:api/CodeReferencesApi~getRepositoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RepositoryRep} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get repository
     * Get a single repository by name.
     * @param {String} repo The repository name
     * @param {module:api/CodeReferencesApi~getRepositoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RepositoryRep}
     */
    getRepository(repo, callback) {
      let postBody = null;
      // verify the required parameter 'repo' is set
      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling getRepository");
      }

      let pathParams = {
        'repo': repo
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
      let returnType = RepositoryRep;
      return this.apiClient.callApi(
        '/api/v2/code-refs/repositories/{repo}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getRootStatistic operation.
     * @callback module:api/CodeReferencesApi~getRootStatisticCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StatisticsRoot} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get links to code reference repositories for each project
     * Get links for all projects that have code references.
     * @param {module:api/CodeReferencesApi~getRootStatisticCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StatisticsRoot}
     */
    getRootStatistic(callback) {
      let postBody = null;

      let pathParams = {
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
      let returnType = StatisticsRoot;
      return this.apiClient.callApi(
        '/api/v2/code-refs/statistics', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getStatistics operation.
     * @callback module:api/CodeReferencesApi~getStatisticsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StatisticCollectionRep} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get code references statistics for flags
     * Get statistics about all the code references across repositories for all flags in your project that have code references in the default branch, for example, `main`. Optionally, you can include the `flagKey` query parameter to limit your request to statistics about code references for a single flag. This endpoint returns the number of references to your flag keys in your repositories, as well as a link to each repository.
     * @param {String} projectKey The project key
     * @param {Object} opts Optional parameters
     * @param {String} opts.flagKey Filter results to a specific flag key
     * @param {module:api/CodeReferencesApi~getStatisticsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StatisticCollectionRep}
     */
    getStatistics(projectKey, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling getStatistics");
      }

      let pathParams = {
        'projectKey': projectKey
      };
      let queryParams = {
        'flagKey': opts['flagKey']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = StatisticCollectionRep;
      return this.apiClient.callApi(
        '/api/v2/code-refs/statistics/{projectKey}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the patchRepository operation.
     * @callback module:api/CodeReferencesApi~patchRepositoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RepositoryRep} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update repository
     * Update a repository's settings. The request must be a valid JSON Patch document describing the changes to be made to the repository.
     * @param {String} repo The repository name
     * @param {Array.<module:model/PatchOperation>} patchOperation 
     * @param {module:api/CodeReferencesApi~patchRepositoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RepositoryRep}
     */
    patchRepository(repo, patchOperation, callback) {
      let postBody = patchOperation;
      // verify the required parameter 'repo' is set
      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling patchRepository");
      }
      // verify the required parameter 'patchOperation' is set
      if (patchOperation === undefined || patchOperation === null) {
        throw new Error("Missing the required parameter 'patchOperation' when calling patchRepository");
      }

      let pathParams = {
        'repo': repo
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
      let returnType = RepositoryRep;
      return this.apiClient.callApi(
        '/api/v2/code-refs/repositories/{repo}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postExtinction operation.
     * @callback module:api/CodeReferencesApi~postExtinctionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create extinction
     * Create a new extinction.
     * @param {String} repo The repository name
     * @param {String} branch The URL-encoded branch name
     * @param {Array.<module:model/Extinction>} extinction 
     * @param {module:api/CodeReferencesApi~postExtinctionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    postExtinction(repo, branch, extinction, callback) {
      let postBody = extinction;
      // verify the required parameter 'repo' is set
      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling postExtinction");
      }
      // verify the required parameter 'branch' is set
      if (branch === undefined || branch === null) {
        throw new Error("Missing the required parameter 'branch' when calling postExtinction");
      }
      // verify the required parameter 'extinction' is set
      if (extinction === undefined || extinction === null) {
        throw new Error("Missing the required parameter 'extinction' when calling postExtinction");
      }

      let pathParams = {
        'repo': repo,
        'branch': branch
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
        '/api/v2/code-refs/repositories/{repo}/branches/{branch}/extinction-events', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postRepository operation.
     * @callback module:api/CodeReferencesApi~postRepositoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RepositoryRep} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create repository
     * Create a repository with the specified name.
     * @param {module:model/RepositoryPost} repositoryPost 
     * @param {module:api/CodeReferencesApi~postRepositoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RepositoryRep}
     */
    postRepository(repositoryPost, callback) {
      let postBody = repositoryPost;
      // verify the required parameter 'repositoryPost' is set
      if (repositoryPost === undefined || repositoryPost === null) {
        throw new Error("Missing the required parameter 'repositoryPost' when calling postRepository");
      }

      let pathParams = {
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
      let returnType = RepositoryRep;
      return this.apiClient.callApi(
        '/api/v2/code-refs/repositories', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the putBranch operation.
     * @callback module:api/CodeReferencesApi~putBranchCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upsert branch
     * Create a new branch if it doesn't exist, or update the branch if it already exists.
     * @param {String} repo The repository name
     * @param {String} branch The URL-encoded branch name
     * @param {module:model/PutBranch} putBranch 
     * @param {module:api/CodeReferencesApi~putBranchCallback} callback The callback function, accepting three arguments: error, data, response
     */
    putBranch(repo, branch, putBranch, callback) {
      let postBody = putBranch;
      // verify the required parameter 'repo' is set
      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling putBranch");
      }
      // verify the required parameter 'branch' is set
      if (branch === undefined || branch === null) {
        throw new Error("Missing the required parameter 'branch' when calling putBranch");
      }
      // verify the required parameter 'putBranch' is set
      if (putBranch === undefined || putBranch === null) {
        throw new Error("Missing the required parameter 'putBranch' when calling putBranch");
      }

      let pathParams = {
        'repo': repo,
        'branch': branch
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
        '/api/v2/code-refs/repositories/{repo}/branches/{branch}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
