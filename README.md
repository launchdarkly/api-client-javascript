This repository contains a client library for LaunchDarkly's REST API. This client was automatically
generated from our [OpenAPI specification](https://app.launchdarkly.com/api/v2/openapi.json) using a [code generation library](https://github.com/launchdarkly/ld-openapi). View our [sample code](#getting-started) for example usage.

This REST API is for custom integrations, data export, or automating your feature flag workflows. *DO NOT* use this client library to include feature flags in your web or mobile application. To integrate feature flags with your application, read the [SDK documentation](https://docs.launchdarkly.com/sdk).

This client library is only compatible with the latest version of our REST API, version `20220603`. Previous versions of this client library, prior to version 10.0.0, are only compatible with earlier versions of our REST API. When you create an access token, you can set the REST API version associated with the token. By default, API requests you send using the token will use the specified API version. To learn more, read [Versioning](https://apidocs.launchdarkly.com/#section/Overview/Versioning).
# launchdarkly-api

LaunchDarklyApi - JavaScript client for launchdarkly-api
# Overview

## Authentication

All REST API resources are authenticated with either [personal or service access tokens](https://docs.launchdarkly.com/home/account-security/api-access-tokens), or session cookies. Other authentication mechanisms are not supported. You can manage personal access tokens on your [**Account settings**](https://app.launchdarkly.com/settings/tokens) page.

LaunchDarkly also has SDK keys, mobile keys, and client-side IDs that are used by our server-side SDKs, mobile SDKs, and JavaScript-based SDKs, respectively. **These keys cannot be used to access our REST API**. These keys are environment-specific, and can only perform read-only operations such as fetching feature flag settings.

| Auth mechanism                                                                                  | Allowed resources                                                                                     | Use cases                                          |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| [Personal or service access tokens](https://docs.launchdarkly.com/home/account-security/api-access-tokens) | Can be customized on a per-token basis                                                                | Building scripts, custom integrations, data export. |
| SDK keys                                                                                        | Can only access read-only resources specific to server-side SDKs. Restricted to a single environment. | Server-side SDKs                     |
| Mobile keys                                                                                     | Can only access read-only resources specific to mobile SDKs, and only for flags marked available to mobile keys. Restricted to a single environment.           | Mobile SDKs                                        |
| Client-side ID                                                                                  | Can only access read-only resources specific to JavaScript-based client-side SDKs, and only for flags marked available to client-side. Restricted to a single environment.           | Client-side JavaScript                             |

> #### Keep your access tokens and SDK keys private
>
> Access tokens should _never_ be exposed in untrusted contexts. Never put an access token in client-side JavaScript, or embed it in a mobile application. LaunchDarkly has special mobile keys that you can embed in mobile apps. If you accidentally expose an access token or SDK key, you can reset it from your [**Account settings**](https://app.launchdarkly.com/settings/tokens) page.
>
> The client-side ID is safe to embed in untrusted contexts. It's designed for use in client-side JavaScript.

### Authentication using request header

The preferred way to authenticate with the API is by adding an `Authorization` header containing your access token to your requests. The value of the `Authorization` header must be your access token.

Manage personal access tokens from the [**Account settings**](https://app.launchdarkly.com/settings/tokens) page.

### Authentication using session cookie

For testing purposes, you can make API calls directly from your web browser. If you are logged in to the LaunchDarkly application, the API will use your existing session to authenticate calls.

If you have a [role](https://docs.launchdarkly.com/home/team/built-in-roles) other than Admin, or have a [custom role](https://docs.launchdarkly.com/home/team/custom-roles) defined, you may not have permission to perform some API calls. You will receive a `401` response code in that case.

> ### Modifying the Origin header causes an error
>
> LaunchDarkly validates that the Origin header for any API request authenticated by a session cookie matches the expected Origin header. The expected Origin header is `https://app.launchdarkly.com`.
>
> If the Origin header does not match what's expected, LaunchDarkly returns an error. This error can prevent the LaunchDarkly app from working correctly.
>
> Any browser extension that intentionally changes the Origin header can cause this problem. For example, the `Allow-Control-Allow-Origin: *` Chrome extension changes the Origin header to `http://evil.com` and causes the app to fail.
>
> To prevent this error, do not modify your Origin header.
>
> LaunchDarkly does not require origin matching when authenticating with an access token, so this issue does not affect normal API usage.

## Representations

All resources expect and return JSON response bodies. Error responses also send a JSON body. To learn more about the error format of the API, read [Errors](/#section/Overview/Errors).

In practice this means that you always get a response with a `Content-Type` header set to `application/json`.

In addition, request bodies for `PATCH`, `POST`, and `PUT` requests must be encoded as JSON with a `Content-Type` header set to `application/json`.

### Summary and detailed representations

When you fetch a list of resources, the response includes only the most important attributes of each resource. This is a _summary representation_ of the resource. When you fetch an individual resource, such as a single feature flag, you receive a _detailed representation_ of the resource.

The best way to find a detailed representation is to follow links. Every summary representation includes a link to its detailed representation.

### Expanding responses

Sometimes the detailed representation of a resource does not include all of the attributes of the resource by default. If this is the case, the request method will clearly document this and describe which attributes you can include in an expanded response.

To include the additional attributes, append the `expand` request parameter to your request and add a comma-separated list of the attributes to include. For example, when you append `?expand=members,roles` to the [Get team](/tag/Teams#operation/getTeam) endpoint, the expanded response includes both of these attributes.

### Links and addressability

The best way to navigate the API is by following links. These are attributes in representations that link to other resources. The API always uses the same format for links:

- Links to other resources within the API are encapsulated in a `_links` object
- If the resource has a corresponding link to HTML content on the site, it is stored in a special `_site` link

Each link has two attributes:

- An `href`, which contains the URL
- A `type`, which describes the content type

For example, a feature resource might return the following:

```json
{
  \"_links\": {
    \"parent\": {
      \"href\": \"/api/features\",
      \"type\": \"application/json\"
    },
    \"self\": {
      \"href\": \"/api/features/sort.order\",
      \"type\": \"application/json\"
    }
  },
  \"_site\": {
    \"href\": \"/features/sort.order\",
    \"type\": \"text/html\"
  }
}
```

From this, you can navigate to the parent collection of features by following the `parent` link, or navigate to the site page for the feature by following the `_site` link.

Collections are always represented as a JSON object with an `items` attribute containing an array of representations. Like all other representations, collections have `_links` defined at the top level.

Paginated collections include `first`, `last`, `next`, and `prev` links containing a URL with the respective set of elements in the collection.

## Updates

Resources that accept partial updates use the `PATCH` verb. Most resources support the [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) format. Some resources also support the [JSON merge patch](https://datatracker.ietf.org/doc/html/rfc7386) format, and some resources support the [semantic patch](/reference#updates-using-semantic-patch) format, which is a way to specify the modifications to perform as a set of executable instructions. Each resource supports optional [comments](/reference#updates-with-comments) that you can submit with updates. Comments appear in outgoing webhooks, the audit log, and other integrations.

When a resource supports both JSON patch and semantic patch, we document both in the request method. However, the specific request body fields and descriptions included in our documentation only match one type of patch or the other.

### Updates using JSON patch

[JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) is a way to specify the modifications to perform on a resource. JSON patch uses paths and a limited set of operations to describe how to transform the current state of the resource into a new state. JSON patch documents are always arrays, where each element contains an operation, a path to the field to update, and the new value.

For example, in this feature flag representation:

```json
{
    \"name\": \"New recommendations engine\",
    \"key\": \"engine.enable\",
    \"description\": \"This is the description\",
    ...
}
```
You can change the feature flag's description with the following patch document:

```json
[{ \"op\": \"replace\", \"path\": \"/description\", \"value\": \"This is the new description\" }]
```

You can specify multiple modifications to perform in a single request. You can also test that certain preconditions are met before applying the patch:

```json
[
  { \"op\": \"test\", \"path\": \"/version\", \"value\": 10 },
  { \"op\": \"replace\", \"path\": \"/description\", \"value\": \"The new description\" }
]
```

The above patch request tests whether the feature flag's `version` is `10`, and if so, changes the feature flag's description.

Attributes that are not editable, such as a resource's `_links`, have names that start with an underscore.

### Updates using JSON merge patch

[JSON merge patch](https://datatracker.ietf.org/doc/html/rfc7386) is another format for specifying the modifications to perform on a resource. JSON merge patch is less expressive than JSON patch. However, in many cases it is simpler to construct a merge patch document. For example, you can change a feature flag's description with the following merge patch document:

```json
{
  \"description\": \"New flag description\"
}
```

### Updates using semantic patch

The API also supports the semantic patch format. A semantic patch is a way to specify the modifications to perform on a resource as a set of executable instructions.

Semantic patch allows you to be explicit about intent using precise, custom instructions. In many cases, you can define semantic patch instructions independently of the current state of the resource. This can be useful when defining a change that may be applied at a future date.

To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header.

Here's how:

```
Content-Type: application/json; domain-model=launchdarkly.semanticpatch
```

If you call a semantic patch resource without this header, you will receive a `400` response because your semantic patch will be interpreted as a JSON patch.

The body of a semantic patch request takes the following properties:

* `comment` (string): (Optional) A description of the update.
* `environmentKey` (string): (Required for some resources only) The environment key.
* `instructions` (array): (Required) A list of actions the update should perform. Each action in the list must be an object with a `kind` property that indicates the instruction. If the instruction requires parameters, you must include those parameters as additional fields in the object. The documentation for each resource that supports semantic patch includes the available instructions and any additional parameters.

For example:

```json
{
  \"comment\": \"optional comment\",
  \"instructions\": [ {\"kind\": \"turnFlagOn\"} ]
}
```

If any instruction in the patch encounters an error, the endpoint returns an error and will not change the resource. In general, each instruction silently does nothing if the resource is already in the state you request.

### Updates with comments

You can submit optional comments with `PATCH` changes.

To submit a comment along with a JSON patch document, use the following format:

```json
{
  \"comment\": \"This is a comment string\",
  \"patch\": [{ \"op\": \"replace\", \"path\": \"/description\", \"value\": \"The new description\" }]
}
```

To submit a comment along with a JSON merge patch document, use the following format:

```json
{
  \"comment\": \"This is a comment string\",
  \"merge\": { \"description\": \"New flag description\" }
}
```

To submit a comment along with a semantic patch, use the following format:

```json
{
  \"comment\": \"This is a comment string\",
  \"instructions\": [ {\"kind\": \"turnFlagOn\"} ]
}
```

## Errors

The API always returns errors in a common format. Here's an example:

```json
{
  \"code\": \"invalid_request\",
  \"message\": \"A feature with that key already exists\",
  \"id\": \"30ce6058-87da-11e4-b116-123b93f75cba\"
}
```

The `code` indicates the general class of error. The `message` is a human-readable explanation of what went wrong. The `id` is a unique identifier. Use it when you're working with LaunchDarkly Support to debug a problem with a specific API call.

### HTTP status error response codes

| Code | Definition        | Description                                                                                       | Possible Solution                                                |
| ---- | ----------------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 400  | Invalid request       | The request cannot be understood.                                    | Ensure JSON syntax in request body is correct.                   |
| 401  | Invalid access token      | Requestor is unauthorized or does not have permission for this API call.                                                | Ensure your API access token is valid and has the appropriate permissions.                                     |
| 403  | Forbidden         | Requestor does not have access to this resource.                                                | Ensure that the account member or access token has proper permissions set. |
| 404  | Invalid resource identifier | The requested resource is not valid. | Ensure that the resource is correctly identified by ID or key. |
| 405  | Method not allowed | The request method is not allowed on this resource. | Ensure that the HTTP verb is correct. |
| 409  | Conflict          | The API request can not be completed because it conflicts with a concurrent API request. | Retry your request.                                              |
| 422  | Unprocessable entity | The API request can not be completed because the update description can not be understood. | Ensure that the request body is correct for the type of patch you are using, either JSON patch or semantic patch.
| 429  | Too many requests | Read [Rate limiting](/#section/Overview/Rate-limiting).                                               | Wait and try again later.                                        |

## CORS

The LaunchDarkly API supports Cross Origin Resource Sharing (CORS) for AJAX requests from any origin. If an `Origin` header is given in a request, it will be echoed as an explicitly allowed origin. Otherwise the request returns a wildcard, `Access-Control-Allow-Origin: *`. For more information on CORS, read the [CORS W3C Recommendation](http://www.w3.org/TR/cors). Example CORS headers might look like:

```http
Access-Control-Allow-Headers: Accept, Content-Type, Content-Length, Accept-Encoding, Authorization
Access-Control-Allow-Methods: OPTIONS, GET, DELETE, PATCH
Access-Control-Allow-Origin: *
Access-Control-Max-Age: 300
```

You can make authenticated CORS calls just as you would make same-origin calls, using either [token or session-based authentication](/#section/Overview/Authentication). If you are using session authentication, you should set the `withCredentials` property for your `xhr` request to `true`. You should never expose your access tokens to untrusted entities.

## Rate limiting

We use several rate limiting strategies to ensure the availability of our APIs. Rate-limited calls to our APIs return a `429` status code. Calls to our APIs include headers indicating the current rate limit status. The specific headers returned depend on the API route being called. The limits differ based on the route, authentication mechanism, and other factors. Routes that are not rate limited may not contain any of the headers described below.

> ### Rate limiting and SDKs
>
> LaunchDarkly SDKs are never rate limited and do not use the API endpoints defined here. LaunchDarkly uses a different set of approaches, including streaming/server-sent events and a global CDN, to ensure availability to the routes used by LaunchDarkly SDKs.

### Global rate limits

Authenticated requests are subject to a global limit. This is the maximum number of calls that your account can make to the API per ten seconds. All personal access tokens on the account share this limit, so exceeding the limit with one access token will impact other tokens. Calls that are subject to global rate limits may return the headers below:

| Header name                    | Description                                                                      |
| ------------------------------ | -------------------------------------------------------------------------------- |
| `X-Ratelimit-Global-Remaining` | The maximum number of requests the account is permitted to make per ten seconds. |
| `X-Ratelimit-Reset`            | The time at which the current rate limit window resets in epoch milliseconds.    |

We do not publicly document the specific number of calls that can be made globally. This limit may change, and we encourage clients to program against the specification, relying on the two headers defined above, rather than hardcoding to the current limit.

### Route-level rate limits

Some authenticated routes have custom rate limits. These also reset every ten seconds. Any access tokens hitting the same route share this limit, so exceeding the limit with one access token may impact other tokens. Calls that are subject to route-level rate limits return the headers below:

| Header name                   | Description                                                                                           |
| ----------------------------- | ----------------------------------------------------------------------------------------------------- |
| `X-Ratelimit-Route-Remaining` | The maximum number of requests to the current route the account is permitted to make per ten seconds. |
| `X-Ratelimit-Reset`           | The time at which the current rate limit window resets in epoch milliseconds.                         |

A _route_ represents a specific URL pattern and verb. For example, the [Delete environment](/tag/Environments#operation/deleteEnvironment) endpoint is considered a single route, and each call to delete an environment counts against your route-level rate limit for that route.

We do not publicly document the specific number of calls that an account can make to each endpoint per ten seconds. These limits may change, and we encourage clients to program against the specification, relying on the two headers defined above, rather than hardcoding to the current limits.

### IP-based rate limiting

We also employ IP-based rate limiting on some API routes. If you hit an IP-based rate limit, your API response will include a `Retry-After` header indicating how long to wait before re-trying the call. Clients must wait at least `Retry-After` seconds before making additional calls to our API, and should employ jitter and backoff strategies to avoid triggering rate limits again.

## OpenAPI (Swagger) and client libraries

We have a [complete OpenAPI (Swagger) specification](https://app.launchdarkly.com/api/v2/openapi.json) for our API.

We auto-generate multiple client libraries based on our OpenAPI specification. To learn more, visit the [collection of client libraries on GitHub](https://github.com/search?q=topic%3Alaunchdarkly-api+org%3Alaunchdarkly&type=Repositories). You can also use this specification to generate client libraries to interact with our REST API in your language of choice.

Our OpenAPI specification is supported by several API-based tools such as Postman and Insomnia. In many cases, you can directly import our specification to explore our APIs.

## Method overriding

Some firewalls and HTTP clients restrict the use of verbs other than `GET` and `POST`. In those environments, our API endpoints that use `DELETE`, `PATCH`, and `PUT` verbs are inaccessible.

To avoid this issue, our API supports the `X-HTTP-Method-Override` header, allowing clients to \"tunnel\" `DELETE`, `PATCH`, and `PUT` requests using a `POST` request.

For example, to call a `PATCH` endpoint using a `POST` request, you can include `X-HTTP-Method-Override:PATCH` as a header.

## Beta resources

We sometimes release new API resources in **beta** status before we release them with general availability.

Resources that are in beta are still undergoing testing and development. They may change without notice, including becoming backwards incompatible.

We try to promote resources into general availability as quickly as possible. This happens after sufficient testing and when we're satisfied that we no longer need to make backwards-incompatible changes.

We mark beta resources with a \"Beta\" callout in our documentation, pictured below:

> ### This feature is in beta
>
> To use this feature, pass in a header including the `LD-API-Version` key with value set to `beta`. Use this header with each call. To learn more, read [Beta resources](/#section/Overview/Beta-resources).
>
> Resources that are in beta are still undergoing testing and development. They may change without notice, including becoming backwards incompatible.

### Using beta resources

To use a beta resource, you must include a header in the request. If you call a beta resource without this header, you receive a `403` response.

Use this header:

```
LD-API-Version: beta
```

## Federal environments

The version of LaunchDarkly that is available on domains controlled by the United States government is different from the version of LaunchDarkly available to the general public. If you are an employee or contractor for a United States federal agency and use LaunchDarkly in your work, you likely use the federal instance of LaunchDarkly.

If you are working in the federal instance of LaunchDarkly, the base URI for each request is `https://app.launchdarkly.us`. In the \"Try it\" sandbox for each request, click the request path to view the complete resource path for the federal environment.

To learn more, read [LaunchDarkly in federal environments](https://docs.launchdarkly.com/home/advanced/federal).

## Versioning

We try hard to keep our REST API backwards compatible, but we occasionally have to make backwards-incompatible changes in the process of shipping new features. These breaking changes can cause unexpected behavior if you don't prepare for them accordingly.

Updates to our REST API include support for the latest features in LaunchDarkly. We also release a new version of our REST API every time we make a breaking change. We provide simultaneous support for multiple API versions so you can migrate from your current API version to a new version at your own pace.

### Setting the API version per request

You can set the API version on a specific request by sending an `LD-API-Version` header, as shown in the example below:

```
LD-API-Version: 20220603
```

The header value is the version number of the API version you would like to request. The number for each version corresponds to the date the version was released in `yyyymmdd` format. In the example above the version `20220603` corresponds to June 03, 2022.

### Setting the API version per access token

When you create an access token, you must specify a specific version of the API to use. This ensures that integrations using this token cannot be broken by version changes.

Tokens created before versioning was released have their version set to `20160426`, which is the version of the API that existed before the current versioning scheme, so that they continue working the same way they did before versioning.

If you would like to upgrade your integration to use a new API version, you can explicitly set the header described above.

> ### Best practice: Set the header for every client or integration
>
> We recommend that you set the API version header explicitly in any client or integration you build.
>
> Only rely on the access token API version during manual testing.

### API version changelog

|<div style=\"width:75px\">Version</div> | Changes | End of life (EOL)
|---|---|---|
| `20220603` | <ul><li>Changed the [list projects](/tag/Projects#operation/getProjects) return value:<ul><li>Response is now paginated with a default limit of `20`.</li><li>Added support for filter and sort.</li><li>The project `environments` field is now expandable. This field is omitted by default.</li></ul></li><li>Changed the [get project](/tag/Projects#operation/getProject) return value:<ul><li>The `environments` field is now expandable. This field is omitted by default.</li></ul></li></ul> | Current |
| `20210729` | <ul><li>Changed the [create approval request](/tag/Approvals#operation/postApprovalRequest) return value. It now returns HTTP Status Code `201` instead of `200`.</li><li> Changed the [get users](/tag/Users#operation/getUser) return value. It now returns a user record, not a user. </li><li>Added additional optional fields to environment, segments, flags, members, and segments, including the ability to create Big Segments. </li><li> Added default values for flag variations when new environments are created. </li><li>Added filtering and pagination for getting flags and members, including `limit`, `number`, `filter`, and `sort` query parameters. </li><li>Added endpoints for expiring user targets for flags and segments, scheduled changes, access tokens, Relay Proxy configuration, integrations and subscriptions, and approvals. </li></ul> | 2023-06-03 |
| `20191212` | <ul><li>[List feature flags](/tag/Feature-flags#operation/getFeatureFlags) now defaults to sending summaries of feature flag configurations, equivalent to setting the query parameter `summary=true`. Summaries omit flag targeting rules and individual user targets from the payload. </li><li> Added endpoints for flags, flag status, projects, environments, audit logs, members, users, custom roles, segments, usage, streams, events, and data export. </li></ul> | 2022-07-29 |
| `20160426` | <ul><li>Initial versioning of API. Tokens created before versioning have their version set to this.</li></ul> | 2020-12-12 |

This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 2.0
- Package version: 13.0.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen
For more information, please visit [https://support.launchdarkly.com](https://support.launchdarkly.com)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install launchdarkly-api --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your launchdarkly-api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/launchdarkly/api-client-javascript
then install it via:

```shell
    npm install launchdarkly/api-client-javascript --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var LaunchDarklyApi = require('launchdarkly-api');

var defaultClient = LaunchDarklyApi.ApiClient.instance;
// Configure API key authorization: ApiKey
var ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix['Authorization'] = "Token"

var api = new LaunchDarklyApi.AccessTokensApi()
var id = "id_example"; // {String} The ID of the access token to update
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteToken(id, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://app.launchdarkly.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*LaunchDarklyApi.AccessTokensApi* | [**deleteToken**](docs/AccessTokensApi.md#deleteToken) | **DELETE** /api/v2/tokens/{id} | Delete access token
*LaunchDarklyApi.AccessTokensApi* | [**getToken**](docs/AccessTokensApi.md#getToken) | **GET** /api/v2/tokens/{id} | Get access token
*LaunchDarklyApi.AccessTokensApi* | [**getTokens**](docs/AccessTokensApi.md#getTokens) | **GET** /api/v2/tokens | List access tokens
*LaunchDarklyApi.AccessTokensApi* | [**patchToken**](docs/AccessTokensApi.md#patchToken) | **PATCH** /api/v2/tokens/{id} | Patch access token
*LaunchDarklyApi.AccessTokensApi* | [**postToken**](docs/AccessTokensApi.md#postToken) | **POST** /api/v2/tokens | Create access token
*LaunchDarklyApi.AccessTokensApi* | [**resetToken**](docs/AccessTokensApi.md#resetToken) | **POST** /api/v2/tokens/{id}/reset | Reset access token
*LaunchDarklyApi.AccountMembersApi* | [**deleteMember**](docs/AccountMembersApi.md#deleteMember) | **DELETE** /api/v2/members/{id} | Delete account member
*LaunchDarklyApi.AccountMembersApi* | [**getMember**](docs/AccountMembersApi.md#getMember) | **GET** /api/v2/members/{id} | Get account member
*LaunchDarklyApi.AccountMembersApi* | [**getMembers**](docs/AccountMembersApi.md#getMembers) | **GET** /api/v2/members | List account members
*LaunchDarklyApi.AccountMembersApi* | [**patchMember**](docs/AccountMembersApi.md#patchMember) | **PATCH** /api/v2/members/{id} | Modify an account member
*LaunchDarklyApi.AccountMembersApi* | [**postMemberTeams**](docs/AccountMembersApi.md#postMemberTeams) | **POST** /api/v2/members/{id}/teams | Add a member to teams
*LaunchDarklyApi.AccountMembersApi* | [**postMembers**](docs/AccountMembersApi.md#postMembers) | **POST** /api/v2/members | Invite new members
*LaunchDarklyApi.AccountMembersBetaApi* | [**patchMembers**](docs/AccountMembersBetaApi.md#patchMembers) | **PATCH** /api/v2/members | Modify account members
*LaunchDarklyApi.AccountUsageBetaApi* | [**getEvaluationsUsage**](docs/AccountUsageBetaApi.md#getEvaluationsUsage) | **GET** /api/v2/usage/evaluations/{projectKey}/{environmentKey}/{featureFlagKey} | Get evaluations usage
*LaunchDarklyApi.AccountUsageBetaApi* | [**getEventsUsage**](docs/AccountUsageBetaApi.md#getEventsUsage) | **GET** /api/v2/usage/events/{type} | Get events usage
*LaunchDarklyApi.AccountUsageBetaApi* | [**getExperimentationKeysUsage**](docs/AccountUsageBetaApi.md#getExperimentationKeysUsage) | **GET** /api/v2/usage/experimentation-keys | Get experimentation keys usage
*LaunchDarklyApi.AccountUsageBetaApi* | [**getMauSdksByType**](docs/AccountUsageBetaApi.md#getMauSdksByType) | **GET** /api/v2/usage/mau/sdks | Get MAU SDKs by type
*LaunchDarklyApi.AccountUsageBetaApi* | [**getMauUsage**](docs/AccountUsageBetaApi.md#getMauUsage) | **GET** /api/v2/usage/mau | Get MAU usage
*LaunchDarklyApi.AccountUsageBetaApi* | [**getMauUsageByCategory**](docs/AccountUsageBetaApi.md#getMauUsageByCategory) | **GET** /api/v2/usage/mau/bycategory | Get MAU usage by category
*LaunchDarklyApi.AccountUsageBetaApi* | [**getStreamUsage**](docs/AccountUsageBetaApi.md#getStreamUsage) | **GET** /api/v2/usage/streams/{source} | Get stream usage
*LaunchDarklyApi.AccountUsageBetaApi* | [**getStreamUsageBySdkVersion**](docs/AccountUsageBetaApi.md#getStreamUsageBySdkVersion) | **GET** /api/v2/usage/streams/{source}/bysdkversion | Get stream usage by SDK version
*LaunchDarklyApi.AccountUsageBetaApi* | [**getStreamUsageSdkversion**](docs/AccountUsageBetaApi.md#getStreamUsageSdkversion) | **GET** /api/v2/usage/streams/{source}/sdkversions | Get stream usage SDK versions
*LaunchDarklyApi.ApprovalsApi* | [**deleteApprovalRequestForFlag**](docs/ApprovalsApi.md#deleteApprovalRequestForFlag) | **DELETE** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{id} | Delete approval request for a flag
*LaunchDarklyApi.ApprovalsApi* | [**getApprovalForFlag**](docs/ApprovalsApi.md#getApprovalForFlag) | **GET** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{id} | Get approval request for a flag
*LaunchDarklyApi.ApprovalsApi* | [**getApprovalsForFlag**](docs/ApprovalsApi.md#getApprovalsForFlag) | **GET** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests | List approval requests for a flag
*LaunchDarklyApi.ApprovalsApi* | [**postApprovalRequestApplyForFlag**](docs/ApprovalsApi.md#postApprovalRequestApplyForFlag) | **POST** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{id}/apply | Apply approval request for a flag
*LaunchDarklyApi.ApprovalsApi* | [**postApprovalRequestForFlag**](docs/ApprovalsApi.md#postApprovalRequestForFlag) | **POST** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests | Create approval request for a flag
*LaunchDarklyApi.ApprovalsApi* | [**postApprovalRequestReviewForFlag**](docs/ApprovalsApi.md#postApprovalRequestReviewForFlag) | **POST** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{id}/reviews | Review approval request for a flag
*LaunchDarklyApi.ApprovalsApi* | [**postFlagCopyConfigApprovalRequest**](docs/ApprovalsApi.md#postFlagCopyConfigApprovalRequest) | **POST** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests-flag-copy | Create approval request to copy flag configurations across environments
*LaunchDarklyApi.ApprovalsBetaApi* | [**deleteApprovalRequest**](docs/ApprovalsBetaApi.md#deleteApprovalRequest) | **DELETE** /api/v2/approval-requests/{id} | Delete approval request
*LaunchDarklyApi.ApprovalsBetaApi* | [**getApprovalRequest**](docs/ApprovalsBetaApi.md#getApprovalRequest) | **GET** /api/v2/approval-requests/{id} | Get approval request
*LaunchDarklyApi.ApprovalsBetaApi* | [**getApprovalRequests**](docs/ApprovalsBetaApi.md#getApprovalRequests) | **GET** /api/v2/approval-requests | List approval requests
*LaunchDarklyApi.ApprovalsBetaApi* | [**postApprovalRequest**](docs/ApprovalsBetaApi.md#postApprovalRequest) | **POST** /api/v2/approval-requests | Create approval request
*LaunchDarklyApi.ApprovalsBetaApi* | [**postApprovalRequestApply**](docs/ApprovalsBetaApi.md#postApprovalRequestApply) | **POST** /api/v2/approval-requests/{id}/apply | Apply approval request
*LaunchDarklyApi.ApprovalsBetaApi* | [**postApprovalRequestReview**](docs/ApprovalsBetaApi.md#postApprovalRequestReview) | **POST** /api/v2/approval-requests/{id}/reviews | Review approval request
*LaunchDarklyApi.AuditLogApi* | [**getAuditLogEntries**](docs/AuditLogApi.md#getAuditLogEntries) | **GET** /api/v2/auditlog | List audit log entries
*LaunchDarklyApi.AuditLogApi* | [**getAuditLogEntry**](docs/AuditLogApi.md#getAuditLogEntry) | **GET** /api/v2/auditlog/{id} | Get audit log entry
*LaunchDarklyApi.CodeReferencesApi* | [**deleteBranches**](docs/CodeReferencesApi.md#deleteBranches) | **POST** /api/v2/code-refs/repositories/{repo}/branch-delete-tasks | Delete branches
*LaunchDarklyApi.CodeReferencesApi* | [**deleteRepository**](docs/CodeReferencesApi.md#deleteRepository) | **DELETE** /api/v2/code-refs/repositories/{repo} | Delete repository
*LaunchDarklyApi.CodeReferencesApi* | [**getBranch**](docs/CodeReferencesApi.md#getBranch) | **GET** /api/v2/code-refs/repositories/{repo}/branches/{branch} | Get branch
*LaunchDarklyApi.CodeReferencesApi* | [**getBranches**](docs/CodeReferencesApi.md#getBranches) | **GET** /api/v2/code-refs/repositories/{repo}/branches | List branches
*LaunchDarklyApi.CodeReferencesApi* | [**getExtinctions**](docs/CodeReferencesApi.md#getExtinctions) | **GET** /api/v2/code-refs/extinctions | List extinctions
*LaunchDarklyApi.CodeReferencesApi* | [**getRepositories**](docs/CodeReferencesApi.md#getRepositories) | **GET** /api/v2/code-refs/repositories | List repositories
*LaunchDarklyApi.CodeReferencesApi* | [**getRepository**](docs/CodeReferencesApi.md#getRepository) | **GET** /api/v2/code-refs/repositories/{repo} | Get repository
*LaunchDarklyApi.CodeReferencesApi* | [**getRootStatistic**](docs/CodeReferencesApi.md#getRootStatistic) | **GET** /api/v2/code-refs/statistics | Get links to code reference repositories for each project
*LaunchDarklyApi.CodeReferencesApi* | [**getStatistics**](docs/CodeReferencesApi.md#getStatistics) | **GET** /api/v2/code-refs/statistics/{projectKey} | Get code references statistics for flags
*LaunchDarklyApi.CodeReferencesApi* | [**patchRepository**](docs/CodeReferencesApi.md#patchRepository) | **PATCH** /api/v2/code-refs/repositories/{repo} | Update repository
*LaunchDarklyApi.CodeReferencesApi* | [**postExtinction**](docs/CodeReferencesApi.md#postExtinction) | **POST** /api/v2/code-refs/repositories/{repo}/branches/{branch}/extinction-events | Create extinction
*LaunchDarklyApi.CodeReferencesApi* | [**postRepository**](docs/CodeReferencesApi.md#postRepository) | **POST** /api/v2/code-refs/repositories | Create repository
*LaunchDarklyApi.CodeReferencesApi* | [**putBranch**](docs/CodeReferencesApi.md#putBranch) | **PUT** /api/v2/code-refs/repositories/{repo}/branches/{branch} | Upsert branch
*LaunchDarklyApi.ContextSettingsApi* | [**putContextFlagSetting**](docs/ContextSettingsApi.md#putContextFlagSetting) | **PUT** /api/v2/projects/{projectKey}/environments/{environmentKey}/contexts/{contextKind}/{contextKey}/flags/{featureFlagKey} | Update flag settings for context
*LaunchDarklyApi.ContextsApi* | [**deleteContextInstances**](docs/ContextsApi.md#deleteContextInstances) | **DELETE** /api/v2/projects/{projectKey}/environments/{environmentKey}/context-instances/{id} | Delete context instances
*LaunchDarklyApi.ContextsApi* | [**evaluateContextInstance**](docs/ContextsApi.md#evaluateContextInstance) | **POST** /api/v2/projects/{projectKey}/environments/{environmentKey}/flags/evaluate | Evaluate flags for context instance
*LaunchDarklyApi.ContextsApi* | [**getContextAttributeNames**](docs/ContextsApi.md#getContextAttributeNames) | **GET** /api/v2/projects/{projectKey}/environments/{environmentKey}/context-attributes | Get context attribute names
*LaunchDarklyApi.ContextsApi* | [**getContextAttributeValues**](docs/ContextsApi.md#getContextAttributeValues) | **GET** /api/v2/projects/{projectKey}/environments/{environmentKey}/context-attributes/{attributeName} | Get context attribute values
*LaunchDarklyApi.ContextsApi* | [**getContextInstances**](docs/ContextsApi.md#getContextInstances) | **GET** /api/v2/projects/{projectKey}/environments/{environmentKey}/context-instances/{id} | Get context instances
*LaunchDarklyApi.ContextsApi* | [**getContexts**](docs/ContextsApi.md#getContexts) | **GET** /api/v2/projects/{projectKey}/environments/{environmentKey}/contexts/{kind}/{key} | Get contexts
*LaunchDarklyApi.ContextsApi* | [**searchContextInstances**](docs/ContextsApi.md#searchContextInstances) | **POST** /api/v2/projects/{projectKey}/environments/{environmentKey}/context-instances/search | Search for context instances
*LaunchDarklyApi.ContextsApi* | [**searchContexts**](docs/ContextsApi.md#searchContexts) | **POST** /api/v2/projects/{projectKey}/environments/{environmentKey}/contexts/search | Search for contexts
*LaunchDarklyApi.ContextsBetaApi* | [**getContextKindsByProjectKey**](docs/ContextsBetaApi.md#getContextKindsByProjectKey) | **GET** /api/v2/projects/{projectKey}/context-kinds | Get context kinds
*LaunchDarklyApi.ContextsBetaApi* | [**putContextKind**](docs/ContextsBetaApi.md#putContextKind) | **PUT** /api/v2/projects/{projectKey}/context-kinds/{key} | Create or update context kind
*LaunchDarklyApi.CustomRolesApi* | [**deleteCustomRole**](docs/CustomRolesApi.md#deleteCustomRole) | **DELETE** /api/v2/roles/{customRoleKey} | Delete custom role
*LaunchDarklyApi.CustomRolesApi* | [**getCustomRole**](docs/CustomRolesApi.md#getCustomRole) | **GET** /api/v2/roles/{customRoleKey} | Get custom role
*LaunchDarklyApi.CustomRolesApi* | [**getCustomRoles**](docs/CustomRolesApi.md#getCustomRoles) | **GET** /api/v2/roles | List custom roles
*LaunchDarklyApi.CustomRolesApi* | [**patchCustomRole**](docs/CustomRolesApi.md#patchCustomRole) | **PATCH** /api/v2/roles/{customRoleKey} | Update custom role
*LaunchDarklyApi.CustomRolesApi* | [**postCustomRole**](docs/CustomRolesApi.md#postCustomRole) | **POST** /api/v2/roles | Create custom role
*LaunchDarklyApi.DataExportDestinationsApi* | [**deleteDestination**](docs/DataExportDestinationsApi.md#deleteDestination) | **DELETE** /api/v2/destinations/{projectKey}/{environmentKey}/{id} | Delete Data Export destination
*LaunchDarklyApi.DataExportDestinationsApi* | [**getDestination**](docs/DataExportDestinationsApi.md#getDestination) | **GET** /api/v2/destinations/{projectKey}/{environmentKey}/{id} | Get destination
*LaunchDarklyApi.DataExportDestinationsApi* | [**getDestinations**](docs/DataExportDestinationsApi.md#getDestinations) | **GET** /api/v2/destinations | List destinations
*LaunchDarklyApi.DataExportDestinationsApi* | [**patchDestination**](docs/DataExportDestinationsApi.md#patchDestination) | **PATCH** /api/v2/destinations/{projectKey}/{environmentKey}/{id} | Update Data Export destination
*LaunchDarklyApi.DataExportDestinationsApi* | [**postDestination**](docs/DataExportDestinationsApi.md#postDestination) | **POST** /api/v2/destinations/{projectKey}/{environmentKey} | Create Data Export destination
*LaunchDarklyApi.EnvironmentsApi* | [**deleteEnvironment**](docs/EnvironmentsApi.md#deleteEnvironment) | **DELETE** /api/v2/projects/{projectKey}/environments/{environmentKey} | Delete environment
*LaunchDarklyApi.EnvironmentsApi* | [**getEnvironment**](docs/EnvironmentsApi.md#getEnvironment) | **GET** /api/v2/projects/{projectKey}/environments/{environmentKey} | Get environment
*LaunchDarklyApi.EnvironmentsApi* | [**getEnvironmentsByProject**](docs/EnvironmentsApi.md#getEnvironmentsByProject) | **GET** /api/v2/projects/{projectKey}/environments | List environments
*LaunchDarklyApi.EnvironmentsApi* | [**patchEnvironment**](docs/EnvironmentsApi.md#patchEnvironment) | **PATCH** /api/v2/projects/{projectKey}/environments/{environmentKey} | Update environment
*LaunchDarklyApi.EnvironmentsApi* | [**postEnvironment**](docs/EnvironmentsApi.md#postEnvironment) | **POST** /api/v2/projects/{projectKey}/environments | Create environment
*LaunchDarklyApi.EnvironmentsApi* | [**resetEnvironmentMobileKey**](docs/EnvironmentsApi.md#resetEnvironmentMobileKey) | **POST** /api/v2/projects/{projectKey}/environments/{environmentKey}/mobileKey | Reset environment mobile SDK key
*LaunchDarklyApi.EnvironmentsApi* | [**resetEnvironmentSDKKey**](docs/EnvironmentsApi.md#resetEnvironmentSDKKey) | **POST** /api/v2/projects/{projectKey}/environments/{environmentKey}/apiKey | Reset environment SDK key
*LaunchDarklyApi.ExperimentsBetaApi* | [**createExperiment**](docs/ExperimentsBetaApi.md#createExperiment) | **POST** /api/v2/projects/{projectKey}/environments/{environmentKey}/experiments | Create experiment
*LaunchDarklyApi.ExperimentsBetaApi* | [**createIteration**](docs/ExperimentsBetaApi.md#createIteration) | **POST** /api/v2/projects/{projectKey}/environments/{environmentKey}/experiments/{experimentKey}/iterations | Create iteration
*LaunchDarklyApi.ExperimentsBetaApi* | [**getExperiment**](docs/ExperimentsBetaApi.md#getExperiment) | **GET** /api/v2/projects/{projectKey}/environments/{environmentKey}/experiments/{experimentKey} | Get experiment
*LaunchDarklyApi.ExperimentsBetaApi* | [**getExperimentResults**](docs/ExperimentsBetaApi.md#getExperimentResults) | **GET** /api/v2/projects/{projectKey}/environments/{environmentKey}/experiments/{experimentKey}/metrics/{metricKey}/results | Get experiment results
*LaunchDarklyApi.ExperimentsBetaApi* | [**getExperimentationSettings**](docs/ExperimentsBetaApi.md#getExperimentationSettings) | **GET** /api/v2/projects/{projectKey}/experimentation-settings | Get experimentation settings
*LaunchDarklyApi.ExperimentsBetaApi* | [**getExperiments**](docs/ExperimentsBetaApi.md#getExperiments) | **GET** /api/v2/projects/{projectKey}/environments/{environmentKey}/experiments | Get experiments
*LaunchDarklyApi.ExperimentsBetaApi* | [**getLegacyExperimentResults**](docs/ExperimentsBetaApi.md#getLegacyExperimentResults) | **GET** /api/v2/flags/{projectKey}/{featureFlagKey}/experiments/{environmentKey}/{metricKey} | Get legacy experiment results (deprecated)
*LaunchDarklyApi.ExperimentsBetaApi* | [**patchExperiment**](docs/ExperimentsBetaApi.md#patchExperiment) | **PATCH** /api/v2/projects/{projectKey}/environments/{environmentKey}/experiments/{experimentKey} | Patch experiment
*LaunchDarklyApi.ExperimentsBetaApi* | [**putExperimentationSettings**](docs/ExperimentsBetaApi.md#putExperimentationSettings) | **PUT** /api/v2/projects/{projectKey}/experimentation-settings | Update experimentation settings
*LaunchDarklyApi.ExperimentsBetaApi* | [**resetExperiment**](docs/ExperimentsBetaApi.md#resetExperiment) | **DELETE** /api/v2/flags/{projectKey}/{featureFlagKey}/experiments/{environmentKey}/{metricKey}/results | Reset experiment results
*LaunchDarklyApi.FeatureFlagsApi* | [**copyFeatureFlag**](docs/FeatureFlagsApi.md#copyFeatureFlag) | **POST** /api/v2/flags/{projectKey}/{featureFlagKey}/copy | Copy feature flag
*LaunchDarklyApi.FeatureFlagsApi* | [**deleteFeatureFlag**](docs/FeatureFlagsApi.md#deleteFeatureFlag) | **DELETE** /api/v2/flags/{projectKey}/{featureFlagKey} | Delete feature flag
*LaunchDarklyApi.FeatureFlagsApi* | [**getExpiringContextTargets**](docs/FeatureFlagsApi.md#getExpiringContextTargets) | **GET** /api/v2/flags/{projectKey}/{featureFlagKey}/expiring-targets/{environmentKey} | Get expiring context targets for feature flag
*LaunchDarklyApi.FeatureFlagsApi* | [**getExpiringUserTargets**](docs/FeatureFlagsApi.md#getExpiringUserTargets) | **GET** /api/v2/flags/{projectKey}/{featureFlagKey}/expiring-user-targets/{environmentKey} | Get expiring user targets for feature flag
*LaunchDarklyApi.FeatureFlagsApi* | [**getFeatureFlag**](docs/FeatureFlagsApi.md#getFeatureFlag) | **GET** /api/v2/flags/{projectKey}/{featureFlagKey} | Get feature flag
*LaunchDarklyApi.FeatureFlagsApi* | [**getFeatureFlagStatus**](docs/FeatureFlagsApi.md#getFeatureFlagStatus) | **GET** /api/v2/flag-statuses/{projectKey}/{environmentKey}/{featureFlagKey} | Get feature flag status
*LaunchDarklyApi.FeatureFlagsApi* | [**getFeatureFlagStatusAcrossEnvironments**](docs/FeatureFlagsApi.md#getFeatureFlagStatusAcrossEnvironments) | **GET** /api/v2/flag-status/{projectKey}/{featureFlagKey} | Get flag status across environments
*LaunchDarklyApi.FeatureFlagsApi* | [**getFeatureFlagStatuses**](docs/FeatureFlagsApi.md#getFeatureFlagStatuses) | **GET** /api/v2/flag-statuses/{projectKey}/{environmentKey} | List feature flag statuses
*LaunchDarklyApi.FeatureFlagsApi* | [**getFeatureFlags**](docs/FeatureFlagsApi.md#getFeatureFlags) | **GET** /api/v2/flags/{projectKey} | List feature flags
*LaunchDarklyApi.FeatureFlagsApi* | [**patchExpiringTargets**](docs/FeatureFlagsApi.md#patchExpiringTargets) | **PATCH** /api/v2/flags/{projectKey}/{featureFlagKey}/expiring-targets/{environmentKey} | Update expiring context targets on feature flag
*LaunchDarklyApi.FeatureFlagsApi* | [**patchExpiringUserTargets**](docs/FeatureFlagsApi.md#patchExpiringUserTargets) | **PATCH** /api/v2/flags/{projectKey}/{featureFlagKey}/expiring-user-targets/{environmentKey} | Update expiring user targets on feature flag
*LaunchDarklyApi.FeatureFlagsApi* | [**patchFeatureFlag**](docs/FeatureFlagsApi.md#patchFeatureFlag) | **PATCH** /api/v2/flags/{projectKey}/{featureFlagKey} | Update feature flag
*LaunchDarklyApi.FeatureFlagsApi* | [**postFeatureFlag**](docs/FeatureFlagsApi.md#postFeatureFlag) | **POST** /api/v2/flags/{projectKey} | Create a feature flag
*LaunchDarklyApi.FeatureFlagsBetaApi* | [**getDependentFlags**](docs/FeatureFlagsBetaApi.md#getDependentFlags) | **GET** /api/v2/flags/{projectKey}/{featureFlagKey}/dependent-flags | List dependent feature flags
*LaunchDarklyApi.FeatureFlagsBetaApi* | [**getDependentFlagsByEnv**](docs/FeatureFlagsBetaApi.md#getDependentFlagsByEnv) | **GET** /api/v2/flags/{projectKey}/{environmentKey}/{featureFlagKey}/dependent-flags | List dependent feature flags by environment
*LaunchDarklyApi.FlagLinksBetaApi* | [**createFlagLink**](docs/FlagLinksBetaApi.md#createFlagLink) | **POST** /api/v2/flag-links/projects/{projectKey}/flags/{featureFlagKey} | Create flag link
*LaunchDarklyApi.FlagLinksBetaApi* | [**deleteFlagLink**](docs/FlagLinksBetaApi.md#deleteFlagLink) | **DELETE** /api/v2/flag-links/projects/{projectKey}/flags/{featureFlagKey}/{id} | Delete flag link
*LaunchDarklyApi.FlagLinksBetaApi* | [**getFlagLinks**](docs/FlagLinksBetaApi.md#getFlagLinks) | **GET** /api/v2/flag-links/projects/{projectKey}/flags/{featureFlagKey} | List flag links
*LaunchDarklyApi.FlagLinksBetaApi* | [**updateFlagLink**](docs/FlagLinksBetaApi.md#updateFlagLink) | **PATCH** /api/v2/flag-links/projects/{projectKey}/flags/{featureFlagKey}/{id} | Update flag link
*LaunchDarklyApi.FlagTriggersApi* | [**createTriggerWorkflow**](docs/FlagTriggersApi.md#createTriggerWorkflow) | **POST** /api/v2/flags/{projectKey}/{featureFlagKey}/triggers/{environmentKey} | Create flag trigger
*LaunchDarklyApi.FlagTriggersApi* | [**deleteTriggerWorkflow**](docs/FlagTriggersApi.md#deleteTriggerWorkflow) | **DELETE** /api/v2/flags/{projectKey}/{featureFlagKey}/triggers/{environmentKey}/{id} | Delete flag trigger
*LaunchDarklyApi.FlagTriggersApi* | [**getTriggerWorkflowById**](docs/FlagTriggersApi.md#getTriggerWorkflowById) | **GET** /api/v2/flags/{projectKey}/{featureFlagKey}/triggers/{environmentKey}/{id} | Get flag trigger by ID
*LaunchDarklyApi.FlagTriggersApi* | [**getTriggerWorkflows**](docs/FlagTriggersApi.md#getTriggerWorkflows) | **GET** /api/v2/flags/{projectKey}/{featureFlagKey}/triggers/{environmentKey} | List flag triggers
*LaunchDarklyApi.FlagTriggersApi* | [**patchTriggerWorkflow**](docs/FlagTriggersApi.md#patchTriggerWorkflow) | **PATCH** /api/v2/flags/{projectKey}/{featureFlagKey}/triggers/{environmentKey}/{id} | Update flag trigger
*LaunchDarklyApi.FollowFlagsApi* | [**deleteFlagFollowers**](docs/FollowFlagsApi.md#deleteFlagFollowers) | **DELETE** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/followers/{memberId} | Remove a member as a follower of a flag in a project and environment
*LaunchDarklyApi.FollowFlagsApi* | [**getFlagFollowers**](docs/FollowFlagsApi.md#getFlagFollowers) | **GET** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/followers | Get followers of a flag in a project and environment
*LaunchDarklyApi.FollowFlagsApi* | [**getFollowersByProjEnv**](docs/FollowFlagsApi.md#getFollowersByProjEnv) | **GET** /api/v2/projects/{projectKey}/environments/{environmentKey}/followers | Get followers of all flags in a given project and environment
*LaunchDarklyApi.FollowFlagsApi* | [**putFlagFollowers**](docs/FollowFlagsApi.md#putFlagFollowers) | **PUT** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/followers/{memberId} | Add a member as a follower of a flag in a project and environment
*LaunchDarklyApi.IntegrationAuditLogSubscriptionsApi* | [**createSubscription**](docs/IntegrationAuditLogSubscriptionsApi.md#createSubscription) | **POST** /api/v2/integrations/{integrationKey} | Create audit log subscription
*LaunchDarklyApi.IntegrationAuditLogSubscriptionsApi* | [**deleteSubscription**](docs/IntegrationAuditLogSubscriptionsApi.md#deleteSubscription) | **DELETE** /api/v2/integrations/{integrationKey}/{id} | Delete audit log subscription
*LaunchDarklyApi.IntegrationAuditLogSubscriptionsApi* | [**getSubscriptionByID**](docs/IntegrationAuditLogSubscriptionsApi.md#getSubscriptionByID) | **GET** /api/v2/integrations/{integrationKey}/{id} | Get audit log subscription by ID
*LaunchDarklyApi.IntegrationAuditLogSubscriptionsApi* | [**getSubscriptions**](docs/IntegrationAuditLogSubscriptionsApi.md#getSubscriptions) | **GET** /api/v2/integrations/{integrationKey} | Get audit log subscriptions by integration
*LaunchDarklyApi.IntegrationAuditLogSubscriptionsApi* | [**updateSubscription**](docs/IntegrationAuditLogSubscriptionsApi.md#updateSubscription) | **PATCH** /api/v2/integrations/{integrationKey}/{id} | Update audit log subscription
*LaunchDarklyApi.IntegrationDeliveryConfigurationsBetaApi* | [**createIntegrationDeliveryConfiguration**](docs/IntegrationDeliveryConfigurationsBetaApi.md#createIntegrationDeliveryConfiguration) | **POST** /api/v2/integration-capabilities/featureStore/{projectKey}/{environmentKey}/{integrationKey} | Create delivery configuration
*LaunchDarklyApi.IntegrationDeliveryConfigurationsBetaApi* | [**deleteIntegrationDeliveryConfiguration**](docs/IntegrationDeliveryConfigurationsBetaApi.md#deleteIntegrationDeliveryConfiguration) | **DELETE** /api/v2/integration-capabilities/featureStore/{projectKey}/{environmentKey}/{integrationKey}/{id} | Delete delivery configuration
*LaunchDarklyApi.IntegrationDeliveryConfigurationsBetaApi* | [**getIntegrationDeliveryConfigurationByEnvironment**](docs/IntegrationDeliveryConfigurationsBetaApi.md#getIntegrationDeliveryConfigurationByEnvironment) | **GET** /api/v2/integration-capabilities/featureStore/{projectKey}/{environmentKey} | Get delivery configurations by environment
*LaunchDarklyApi.IntegrationDeliveryConfigurationsBetaApi* | [**getIntegrationDeliveryConfigurationById**](docs/IntegrationDeliveryConfigurationsBetaApi.md#getIntegrationDeliveryConfigurationById) | **GET** /api/v2/integration-capabilities/featureStore/{projectKey}/{environmentKey}/{integrationKey}/{id} | Get delivery configuration by ID
*LaunchDarklyApi.IntegrationDeliveryConfigurationsBetaApi* | [**getIntegrationDeliveryConfigurations**](docs/IntegrationDeliveryConfigurationsBetaApi.md#getIntegrationDeliveryConfigurations) | **GET** /api/v2/integration-capabilities/featureStore | List all delivery configurations
*LaunchDarklyApi.IntegrationDeliveryConfigurationsBetaApi* | [**patchIntegrationDeliveryConfiguration**](docs/IntegrationDeliveryConfigurationsBetaApi.md#patchIntegrationDeliveryConfiguration) | **PATCH** /api/v2/integration-capabilities/featureStore/{projectKey}/{environmentKey}/{integrationKey}/{id} | Update delivery configuration
*LaunchDarklyApi.IntegrationDeliveryConfigurationsBetaApi* | [**validateIntegrationDeliveryConfiguration**](docs/IntegrationDeliveryConfigurationsBetaApi.md#validateIntegrationDeliveryConfiguration) | **POST** /api/v2/integration-capabilities/featureStore/{projectKey}/{environmentKey}/{integrationKey}/{id}/validate | Validate delivery configuration
*LaunchDarklyApi.MetricsApi* | [**deleteMetric**](docs/MetricsApi.md#deleteMetric) | **DELETE** /api/v2/metrics/{projectKey}/{metricKey} | Delete metric
*LaunchDarklyApi.MetricsApi* | [**getMetric**](docs/MetricsApi.md#getMetric) | **GET** /api/v2/metrics/{projectKey}/{metricKey} | Get metric
*LaunchDarklyApi.MetricsApi* | [**getMetrics**](docs/MetricsApi.md#getMetrics) | **GET** /api/v2/metrics/{projectKey} | List metrics
*LaunchDarklyApi.MetricsApi* | [**patchMetric**](docs/MetricsApi.md#patchMetric) | **PATCH** /api/v2/metrics/{projectKey}/{metricKey} | Update metric
*LaunchDarklyApi.MetricsApi* | [**postMetric**](docs/MetricsApi.md#postMetric) | **POST** /api/v2/metrics/{projectKey} | Create metric
*LaunchDarklyApi.OAuth2ClientsBetaApi* | [**createOAuth2Client**](docs/OAuth2ClientsBetaApi.md#createOAuth2Client) | **POST** /api/v2/oauth/clients | Create a LaunchDarkly OAuth 2.0 client
*LaunchDarklyApi.OAuth2ClientsBetaApi* | [**deleteOAuthClient**](docs/OAuth2ClientsBetaApi.md#deleteOAuthClient) | **DELETE** /api/v2/oauth/clients/{clientId} | Delete OAuth 2.0 client
*LaunchDarklyApi.OAuth2ClientsBetaApi* | [**getOAuthClientById**](docs/OAuth2ClientsBetaApi.md#getOAuthClientById) | **GET** /api/v2/oauth/clients/{clientId} | Get client by ID
*LaunchDarklyApi.OAuth2ClientsBetaApi* | [**getOAuthClients**](docs/OAuth2ClientsBetaApi.md#getOAuthClients) | **GET** /api/v2/oauth/clients | Get clients
*LaunchDarklyApi.OAuth2ClientsBetaApi* | [**patchOAuthClient**](docs/OAuth2ClientsBetaApi.md#patchOAuthClient) | **PATCH** /api/v2/oauth/clients/{clientId} | Patch client by ID
*LaunchDarklyApi.OtherApi* | [**getIps**](docs/OtherApi.md#getIps) | **GET** /api/v2/public-ip-list | Gets the public IP list
*LaunchDarklyApi.OtherApi* | [**getOpenapiSpec**](docs/OtherApi.md#getOpenapiSpec) | **GET** /api/v2/openapi.json | Gets the OpenAPI spec in json
*LaunchDarklyApi.OtherApi* | [**getRoot**](docs/OtherApi.md#getRoot) | **GET** /api/v2 | Root resource
*LaunchDarklyApi.OtherApi* | [**getVersions**](docs/OtherApi.md#getVersions) | **GET** /api/v2/versions | Get version information
*LaunchDarklyApi.ProjectsApi* | [**deleteProject**](docs/ProjectsApi.md#deleteProject) | **DELETE** /api/v2/projects/{projectKey} | Delete project
*LaunchDarklyApi.ProjectsApi* | [**getFlagDefaultsByProject**](docs/ProjectsApi.md#getFlagDefaultsByProject) | **GET** /api/v2/projects/{projectKey}/flag-defaults | Get flag defaults for project
*LaunchDarklyApi.ProjectsApi* | [**getProject**](docs/ProjectsApi.md#getProject) | **GET** /api/v2/projects/{projectKey} | Get project
*LaunchDarklyApi.ProjectsApi* | [**getProjects**](docs/ProjectsApi.md#getProjects) | **GET** /api/v2/projects | List projects
*LaunchDarklyApi.ProjectsApi* | [**patchFlagDefaultsByProject**](docs/ProjectsApi.md#patchFlagDefaultsByProject) | **PATCH** /api/v2/projects/{projectKey}/flag-defaults | Update flag default for project
*LaunchDarklyApi.ProjectsApi* | [**patchProject**](docs/ProjectsApi.md#patchProject) | **PATCH** /api/v2/projects/{projectKey} | Update project
*LaunchDarklyApi.ProjectsApi* | [**postProject**](docs/ProjectsApi.md#postProject) | **POST** /api/v2/projects | Create project
*LaunchDarklyApi.ProjectsApi* | [**putFlagDefaultsByProject**](docs/ProjectsApi.md#putFlagDefaultsByProject) | **PUT** /api/v2/projects/{projectKey}/flag-defaults | Create or update flag defaults for project
*LaunchDarklyApi.RelayProxyConfigurationsApi* | [**deleteRelayAutoConfig**](docs/RelayProxyConfigurationsApi.md#deleteRelayAutoConfig) | **DELETE** /api/v2/account/relay-auto-configs/{id} | Delete Relay Proxy config by ID
*LaunchDarklyApi.RelayProxyConfigurationsApi* | [**getRelayProxyConfig**](docs/RelayProxyConfigurationsApi.md#getRelayProxyConfig) | **GET** /api/v2/account/relay-auto-configs/{id} | Get Relay Proxy config
*LaunchDarklyApi.RelayProxyConfigurationsApi* | [**getRelayProxyConfigs**](docs/RelayProxyConfigurationsApi.md#getRelayProxyConfigs) | **GET** /api/v2/account/relay-auto-configs | List Relay Proxy configs
*LaunchDarklyApi.RelayProxyConfigurationsApi* | [**patchRelayAutoConfig**](docs/RelayProxyConfigurationsApi.md#patchRelayAutoConfig) | **PATCH** /api/v2/account/relay-auto-configs/{id} | Update a Relay Proxy config
*LaunchDarklyApi.RelayProxyConfigurationsApi* | [**postRelayAutoConfig**](docs/RelayProxyConfigurationsApi.md#postRelayAutoConfig) | **POST** /api/v2/account/relay-auto-configs | Create a new Relay Proxy config
*LaunchDarklyApi.RelayProxyConfigurationsApi* | [**resetRelayAutoConfig**](docs/RelayProxyConfigurationsApi.md#resetRelayAutoConfig) | **POST** /api/v2/account/relay-auto-configs/{id}/reset | Reset Relay Proxy configuration key
*LaunchDarklyApi.ScheduledChangesApi* | [**deleteFlagConfigScheduledChanges**](docs/ScheduledChangesApi.md#deleteFlagConfigScheduledChanges) | **DELETE** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes/{id} | Delete scheduled changes workflow
*LaunchDarklyApi.ScheduledChangesApi* | [**getFeatureFlagScheduledChange**](docs/ScheduledChangesApi.md#getFeatureFlagScheduledChange) | **GET** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes/{id} | Get a scheduled change
*LaunchDarklyApi.ScheduledChangesApi* | [**getFlagConfigScheduledChanges**](docs/ScheduledChangesApi.md#getFlagConfigScheduledChanges) | **GET** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes | List scheduled changes
*LaunchDarklyApi.ScheduledChangesApi* | [**patchFlagConfigScheduledChange**](docs/ScheduledChangesApi.md#patchFlagConfigScheduledChange) | **PATCH** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes/{id} | Update scheduled changes workflow
*LaunchDarklyApi.ScheduledChangesApi* | [**postFlagConfigScheduledChanges**](docs/ScheduledChangesApi.md#postFlagConfigScheduledChanges) | **POST** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes | Create scheduled changes workflow
*LaunchDarklyApi.SegmentsApi* | [**deleteSegment**](docs/SegmentsApi.md#deleteSegment) | **DELETE** /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey} | Delete segment
*LaunchDarklyApi.SegmentsApi* | [**getContextInstanceSegmentsMembershipByEnv**](docs/SegmentsApi.md#getContextInstanceSegmentsMembershipByEnv) | **POST** /api/v2/projects/{projectKey}/environments/{environmentKey}/segments/evaluate | List segment memberships for context instance
*LaunchDarklyApi.SegmentsApi* | [**getExpiringTargetsForSegment**](docs/SegmentsApi.md#getExpiringTargetsForSegment) | **GET** /api/v2/segments/{projectKey}/{segmentKey}/expiring-targets/{environmentKey} | Get expiring targets for segment
*LaunchDarklyApi.SegmentsApi* | [**getExpiringUserTargetsForSegment**](docs/SegmentsApi.md#getExpiringUserTargetsForSegment) | **GET** /api/v2/segments/{projectKey}/{segmentKey}/expiring-user-targets/{environmentKey} | Get expiring user targets for segment
*LaunchDarklyApi.SegmentsApi* | [**getSegment**](docs/SegmentsApi.md#getSegment) | **GET** /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey} | Get segment
*LaunchDarklyApi.SegmentsApi* | [**getSegmentMembershipForContext**](docs/SegmentsApi.md#getSegmentMembershipForContext) | **GET** /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/contexts/{contextKey} | Get Big Segment membership for context
*LaunchDarklyApi.SegmentsApi* | [**getSegmentMembershipForUser**](docs/SegmentsApi.md#getSegmentMembershipForUser) | **GET** /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/users/{userKey} | Get Big Segment membership for user
*LaunchDarklyApi.SegmentsApi* | [**getSegments**](docs/SegmentsApi.md#getSegments) | **GET** /api/v2/segments/{projectKey}/{environmentKey} | List segments
*LaunchDarklyApi.SegmentsApi* | [**patchExpiringTargetsForSegment**](docs/SegmentsApi.md#patchExpiringTargetsForSegment) | **PATCH** /api/v2/segments/{projectKey}/{segmentKey}/expiring-targets/{environmentKey} | Update expiring targets for segment
*LaunchDarklyApi.SegmentsApi* | [**patchExpiringUserTargetsForSegment**](docs/SegmentsApi.md#patchExpiringUserTargetsForSegment) | **PATCH** /api/v2/segments/{projectKey}/{segmentKey}/expiring-user-targets/{environmentKey} | Update expiring user targets for segment
*LaunchDarklyApi.SegmentsApi* | [**patchSegment**](docs/SegmentsApi.md#patchSegment) | **PATCH** /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey} | Patch segment
*LaunchDarklyApi.SegmentsApi* | [**postSegment**](docs/SegmentsApi.md#postSegment) | **POST** /api/v2/segments/{projectKey}/{environmentKey} | Create segment
*LaunchDarklyApi.SegmentsApi* | [**updateBigSegmentContextTargets**](docs/SegmentsApi.md#updateBigSegmentContextTargets) | **POST** /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/contexts | Update context targets on a Big Segment
*LaunchDarklyApi.SegmentsApi* | [**updateBigSegmentTargets**](docs/SegmentsApi.md#updateBigSegmentTargets) | **POST** /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/users | Update user context targets on a Big Segment
*LaunchDarklyApi.SegmentsBetaApi* | [**createBigSegmentExport**](docs/SegmentsBetaApi.md#createBigSegmentExport) | **POST** /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/exports | Create Big Segment export
*LaunchDarklyApi.SegmentsBetaApi* | [**createBigSegmentImport**](docs/SegmentsBetaApi.md#createBigSegmentImport) | **POST** /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/imports | Create Big Segment import
*LaunchDarklyApi.SegmentsBetaApi* | [**getBigSegmentExport**](docs/SegmentsBetaApi.md#getBigSegmentExport) | **GET** /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/exports/{exportID} | Get Big Segment export
*LaunchDarklyApi.SegmentsBetaApi* | [**getBigSegmentImport**](docs/SegmentsBetaApi.md#getBigSegmentImport) | **GET** /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/imports/{importID} | Get Big Segment import
*LaunchDarklyApi.TagsApi* | [**getTags**](docs/TagsApi.md#getTags) | **GET** /api/v2/tags | List tags
*LaunchDarklyApi.TeamsApi* | [**deleteTeam**](docs/TeamsApi.md#deleteTeam) | **DELETE** /api/v2/teams/{teamKey} | Delete team
*LaunchDarklyApi.TeamsApi* | [**getTeam**](docs/TeamsApi.md#getTeam) | **GET** /api/v2/teams/{teamKey} | Get team
*LaunchDarklyApi.TeamsApi* | [**getTeamMaintainers**](docs/TeamsApi.md#getTeamMaintainers) | **GET** /api/v2/teams/{teamKey}/maintainers | Get team maintainers
*LaunchDarklyApi.TeamsApi* | [**getTeamRoles**](docs/TeamsApi.md#getTeamRoles) | **GET** /api/v2/teams/{teamKey}/roles | Get team custom roles
*LaunchDarklyApi.TeamsApi* | [**getTeams**](docs/TeamsApi.md#getTeams) | **GET** /api/v2/teams | List teams
*LaunchDarklyApi.TeamsApi* | [**patchTeam**](docs/TeamsApi.md#patchTeam) | **PATCH** /api/v2/teams/{teamKey} | Update team
*LaunchDarklyApi.TeamsApi* | [**postTeam**](docs/TeamsApi.md#postTeam) | **POST** /api/v2/teams | Create team
*LaunchDarklyApi.TeamsApi* | [**postTeamMembers**](docs/TeamsApi.md#postTeamMembers) | **POST** /api/v2/teams/{teamKey}/members | Add multiple members to team
*LaunchDarklyApi.TeamsBetaApi* | [**patchTeams**](docs/TeamsBetaApi.md#patchTeams) | **PATCH** /api/v2/teams | Update teams
*LaunchDarklyApi.UserSettingsApi* | [**getExpiringFlagsForUser**](docs/UserSettingsApi.md#getExpiringFlagsForUser) | **GET** /api/v2/users/{projectKey}/{userKey}/expiring-user-targets/{environmentKey} | Get expiring dates on flags for user
*LaunchDarklyApi.UserSettingsApi* | [**getUserFlagSetting**](docs/UserSettingsApi.md#getUserFlagSetting) | **GET** /api/v2/users/{projectKey}/{environmentKey}/{userKey}/flags/{featureFlagKey} | Get flag setting for user
*LaunchDarklyApi.UserSettingsApi* | [**getUserFlagSettings**](docs/UserSettingsApi.md#getUserFlagSettings) | **GET** /api/v2/users/{projectKey}/{environmentKey}/{userKey}/flags | List flag settings for user
*LaunchDarklyApi.UserSettingsApi* | [**patchExpiringFlagsForUser**](docs/UserSettingsApi.md#patchExpiringFlagsForUser) | **PATCH** /api/v2/users/{projectKey}/{userKey}/expiring-user-targets/{environmentKey} | Update expiring user target for flags
*LaunchDarklyApi.UserSettingsApi* | [**putFlagSetting**](docs/UserSettingsApi.md#putFlagSetting) | **PUT** /api/v2/users/{projectKey}/{environmentKey}/{userKey}/flags/{featureFlagKey} | Update flag settings for user
*LaunchDarklyApi.UsersApi* | [**deleteUser**](docs/UsersApi.md#deleteUser) | **DELETE** /api/v2/users/{projectKey}/{environmentKey}/{userKey} | Delete user
*LaunchDarklyApi.UsersApi* | [**getSearchUsers**](docs/UsersApi.md#getSearchUsers) | **GET** /api/v2/user-search/{projectKey}/{environmentKey} | Find users
*LaunchDarklyApi.UsersApi* | [**getUser**](docs/UsersApi.md#getUser) | **GET** /api/v2/users/{projectKey}/{environmentKey}/{userKey} | Get user
*LaunchDarklyApi.UsersApi* | [**getUsers**](docs/UsersApi.md#getUsers) | **GET** /api/v2/users/{projectKey}/{environmentKey} | List users
*LaunchDarklyApi.UsersBetaApi* | [**getUserAttributeNames**](docs/UsersBetaApi.md#getUserAttributeNames) | **GET** /api/v2/user-attributes/{projectKey}/{environmentKey} | Get user attribute names
*LaunchDarklyApi.WebhooksApi* | [**deleteWebhook**](docs/WebhooksApi.md#deleteWebhook) | **DELETE** /api/v2/webhooks/{id} | Delete webhook
*LaunchDarklyApi.WebhooksApi* | [**getAllWebhooks**](docs/WebhooksApi.md#getAllWebhooks) | **GET** /api/v2/webhooks | List webhooks
*LaunchDarklyApi.WebhooksApi* | [**getWebhook**](docs/WebhooksApi.md#getWebhook) | **GET** /api/v2/webhooks/{id} | Get webhook
*LaunchDarklyApi.WebhooksApi* | [**patchWebhook**](docs/WebhooksApi.md#patchWebhook) | **PATCH** /api/v2/webhooks/{id} | Update webhook
*LaunchDarklyApi.WebhooksApi* | [**postWebhook**](docs/WebhooksApi.md#postWebhook) | **POST** /api/v2/webhooks | Creates a webhook
*LaunchDarklyApi.WorkflowTemplatesBetaApi* | [**createWorkflowTemplate**](docs/WorkflowTemplatesBetaApi.md#createWorkflowTemplate) | **POST** /api/v2/templates | Create workflow template
*LaunchDarklyApi.WorkflowTemplatesBetaApi* | [**deleteWorkflowTemplate**](docs/WorkflowTemplatesBetaApi.md#deleteWorkflowTemplate) | **DELETE** /api/v2/templates/{templateKey} | Delete workflow template
*LaunchDarklyApi.WorkflowTemplatesBetaApi* | [**getWorkflowTemplates**](docs/WorkflowTemplatesBetaApi.md#getWorkflowTemplates) | **GET** /api/v2/templates | Get workflow templates
*LaunchDarklyApi.WorkflowsBetaApi* | [**deleteWorkflow**](docs/WorkflowsBetaApi.md#deleteWorkflow) | **DELETE** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/workflows/{workflowId} | Delete workflow
*LaunchDarklyApi.WorkflowsBetaApi* | [**getCustomWorkflow**](docs/WorkflowsBetaApi.md#getCustomWorkflow) | **GET** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/workflows/{workflowId} | Get custom workflow
*LaunchDarklyApi.WorkflowsBetaApi* | [**getWorkflows**](docs/WorkflowsBetaApi.md#getWorkflows) | **GET** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/workflows | Get workflows
*LaunchDarklyApi.WorkflowsBetaApi* | [**postWorkflow**](docs/WorkflowsBetaApi.md#postWorkflow) | **POST** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/workflows | Create workflow


## Documentation for Models

 - [LaunchDarklyApi.Access](docs/Access.md)
 - [LaunchDarklyApi.AccessAllowedReason](docs/AccessAllowedReason.md)
 - [LaunchDarklyApi.AccessAllowedRep](docs/AccessAllowedRep.md)
 - [LaunchDarklyApi.AccessDenied](docs/AccessDenied.md)
 - [LaunchDarklyApi.AccessDeniedReason](docs/AccessDeniedReason.md)
 - [LaunchDarklyApi.AccessTokenPost](docs/AccessTokenPost.md)
 - [LaunchDarklyApi.ActionInput](docs/ActionInput.md)
 - [LaunchDarklyApi.ActionOutput](docs/ActionOutput.md)
 - [LaunchDarklyApi.ApprovalConditionInput](docs/ApprovalConditionInput.md)
 - [LaunchDarklyApi.ApprovalConditionOutput](docs/ApprovalConditionOutput.md)
 - [LaunchDarklyApi.ApprovalRequestResponse](docs/ApprovalRequestResponse.md)
 - [LaunchDarklyApi.ApprovalSettings](docs/ApprovalSettings.md)
 - [LaunchDarklyApi.AuditLogEntryListingRep](docs/AuditLogEntryListingRep.md)
 - [LaunchDarklyApi.AuditLogEntryListingRepCollection](docs/AuditLogEntryListingRepCollection.md)
 - [LaunchDarklyApi.AuditLogEntryRep](docs/AuditLogEntryRep.md)
 - [LaunchDarklyApi.AuthorizedAppDataRep](docs/AuthorizedAppDataRep.md)
 - [LaunchDarklyApi.BigSegmentTarget](docs/BigSegmentTarget.md)
 - [LaunchDarklyApi.BooleanDefaults](docs/BooleanDefaults.md)
 - [LaunchDarklyApi.BooleanFlagDefaults](docs/BooleanFlagDefaults.md)
 - [LaunchDarklyApi.BranchCollectionRep](docs/BranchCollectionRep.md)
 - [LaunchDarklyApi.BranchRep](docs/BranchRep.md)
 - [LaunchDarklyApi.BulkEditMembersRep](docs/BulkEditMembersRep.md)
 - [LaunchDarklyApi.BulkEditTeamsRep](docs/BulkEditTeamsRep.md)
 - [LaunchDarklyApi.Clause](docs/Clause.md)
 - [LaunchDarklyApi.Client](docs/Client.md)
 - [LaunchDarklyApi.ClientCollection](docs/ClientCollection.md)
 - [LaunchDarklyApi.ClientSideAvailability](docs/ClientSideAvailability.md)
 - [LaunchDarklyApi.ClientSideAvailabilityPost](docs/ClientSideAvailabilityPost.md)
 - [LaunchDarklyApi.ConditionBaseOutput](docs/ConditionBaseOutput.md)
 - [LaunchDarklyApi.ConditionInput](docs/ConditionInput.md)
 - [LaunchDarklyApi.ConditionOutput](docs/ConditionOutput.md)
 - [LaunchDarklyApi.ConfidenceIntervalRep](docs/ConfidenceIntervalRep.md)
 - [LaunchDarklyApi.Conflict](docs/Conflict.md)
 - [LaunchDarklyApi.ConflictOutput](docs/ConflictOutput.md)
 - [LaunchDarklyApi.ContextAttributeName](docs/ContextAttributeName.md)
 - [LaunchDarklyApi.ContextAttributeNames](docs/ContextAttributeNames.md)
 - [LaunchDarklyApi.ContextAttributeNamesCollection](docs/ContextAttributeNamesCollection.md)
 - [LaunchDarklyApi.ContextAttributeValue](docs/ContextAttributeValue.md)
 - [LaunchDarklyApi.ContextAttributeValues](docs/ContextAttributeValues.md)
 - [LaunchDarklyApi.ContextAttributeValuesCollection](docs/ContextAttributeValuesCollection.md)
 - [LaunchDarklyApi.ContextInstanceEvaluation](docs/ContextInstanceEvaluation.md)
 - [LaunchDarklyApi.ContextInstanceEvaluationReason](docs/ContextInstanceEvaluationReason.md)
 - [LaunchDarklyApi.ContextInstanceEvaluations](docs/ContextInstanceEvaluations.md)
 - [LaunchDarklyApi.ContextInstanceRecord](docs/ContextInstanceRecord.md)
 - [LaunchDarklyApi.ContextInstanceSearch](docs/ContextInstanceSearch.md)
 - [LaunchDarklyApi.ContextInstanceSegmentMembership](docs/ContextInstanceSegmentMembership.md)
 - [LaunchDarklyApi.ContextInstanceSegmentMemberships](docs/ContextInstanceSegmentMemberships.md)
 - [LaunchDarklyApi.ContextInstances](docs/ContextInstances.md)
 - [LaunchDarklyApi.ContextKind](docs/ContextKind.md)
 - [LaunchDarklyApi.ContextKindRep](docs/ContextKindRep.md)
 - [LaunchDarklyApi.ContextKindsCollectionRep](docs/ContextKindsCollectionRep.md)
 - [LaunchDarklyApi.ContextRecord](docs/ContextRecord.md)
 - [LaunchDarklyApi.ContextSearch](docs/ContextSearch.md)
 - [LaunchDarklyApi.Contexts](docs/Contexts.md)
 - [LaunchDarklyApi.CopiedFromEnv](docs/CopiedFromEnv.md)
 - [LaunchDarklyApi.CreateApprovalRequestRequest](docs/CreateApprovalRequestRequest.md)
 - [LaunchDarklyApi.CreateCopyFlagConfigApprovalRequestRequest](docs/CreateCopyFlagConfigApprovalRequestRequest.md)
 - [LaunchDarklyApi.CreateFlagConfigApprovalRequestRequest](docs/CreateFlagConfigApprovalRequestRequest.md)
 - [LaunchDarklyApi.CreateWorkflowTemplateInput](docs/CreateWorkflowTemplateInput.md)
 - [LaunchDarklyApi.CredibleIntervalRep](docs/CredibleIntervalRep.md)
 - [LaunchDarklyApi.CustomProperty](docs/CustomProperty.md)
 - [LaunchDarklyApi.CustomRole](docs/CustomRole.md)
 - [LaunchDarklyApi.CustomRolePost](docs/CustomRolePost.md)
 - [LaunchDarklyApi.CustomRolePostData](docs/CustomRolePostData.md)
 - [LaunchDarklyApi.CustomRoleSummary](docs/CustomRoleSummary.md)
 - [LaunchDarklyApi.CustomRoles](docs/CustomRoles.md)
 - [LaunchDarklyApi.CustomWorkflowInput](docs/CustomWorkflowInput.md)
 - [LaunchDarklyApi.CustomWorkflowMeta](docs/CustomWorkflowMeta.md)
 - [LaunchDarklyApi.CustomWorkflowOutput](docs/CustomWorkflowOutput.md)
 - [LaunchDarklyApi.CustomWorkflowStageMeta](docs/CustomWorkflowStageMeta.md)
 - [LaunchDarklyApi.CustomWorkflowsListingOutput](docs/CustomWorkflowsListingOutput.md)
 - [LaunchDarklyApi.Database](docs/Database.md)
 - [LaunchDarklyApi.DefaultClientSideAvailability](docs/DefaultClientSideAvailability.md)
 - [LaunchDarklyApi.DefaultClientSideAvailabilityPost](docs/DefaultClientSideAvailabilityPost.md)
 - [LaunchDarklyApi.Defaults](docs/Defaults.md)
 - [LaunchDarklyApi.DependentExperimentRep](docs/DependentExperimentRep.md)
 - [LaunchDarklyApi.DependentFlag](docs/DependentFlag.md)
 - [LaunchDarklyApi.DependentFlagEnvironment](docs/DependentFlagEnvironment.md)
 - [LaunchDarklyApi.DependentFlagsByEnvironment](docs/DependentFlagsByEnvironment.md)
 - [LaunchDarklyApi.DesignExpandableProperties](docs/DesignExpandableProperties.md)
 - [LaunchDarklyApi.DesignRep](docs/DesignRep.md)
 - [LaunchDarklyApi.Destination](docs/Destination.md)
 - [LaunchDarklyApi.DestinationPost](docs/DestinationPost.md)
 - [LaunchDarklyApi.Destinations](docs/Destinations.md)
 - [LaunchDarklyApi.Environment](docs/Environment.md)
 - [LaunchDarklyApi.EnvironmentPost](docs/EnvironmentPost.md)
 - [LaunchDarklyApi.Environments](docs/Environments.md)
 - [LaunchDarklyApi.EvaluationReason](docs/EvaluationReason.md)
 - [LaunchDarklyApi.ExecutionOutput](docs/ExecutionOutput.md)
 - [LaunchDarklyApi.ExpandableApprovalRequestResponse](docs/ExpandableApprovalRequestResponse.md)
 - [LaunchDarklyApi.ExpandableApprovalRequestsResponse](docs/ExpandableApprovalRequestsResponse.md)
 - [LaunchDarklyApi.ExpandedFlagRep](docs/ExpandedFlagRep.md)
 - [LaunchDarklyApi.Experiment](docs/Experiment.md)
 - [LaunchDarklyApi.ExperimentAllocationRep](docs/ExperimentAllocationRep.md)
 - [LaunchDarklyApi.ExperimentBayesianResultsRep](docs/ExperimentBayesianResultsRep.md)
 - [LaunchDarklyApi.ExperimentCollectionRep](docs/ExperimentCollectionRep.md)
 - [LaunchDarklyApi.ExperimentEnabledPeriodRep](docs/ExperimentEnabledPeriodRep.md)
 - [LaunchDarklyApi.ExperimentEnvironmentSettingRep](docs/ExperimentEnvironmentSettingRep.md)
 - [LaunchDarklyApi.ExperimentExpandableProperties](docs/ExperimentExpandableProperties.md)
 - [LaunchDarklyApi.ExperimentInfoRep](docs/ExperimentInfoRep.md)
 - [LaunchDarklyApi.ExperimentMetadataRep](docs/ExperimentMetadataRep.md)
 - [LaunchDarklyApi.ExperimentPatchInput](docs/ExperimentPatchInput.md)
 - [LaunchDarklyApi.ExperimentPost](docs/ExperimentPost.md)
 - [LaunchDarklyApi.ExperimentResults](docs/ExperimentResults.md)
 - [LaunchDarklyApi.ExperimentStatsRep](docs/ExperimentStatsRep.md)
 - [LaunchDarklyApi.ExperimentTimeSeriesSlice](docs/ExperimentTimeSeriesSlice.md)
 - [LaunchDarklyApi.ExperimentTimeSeriesVariationSlice](docs/ExperimentTimeSeriesVariationSlice.md)
 - [LaunchDarklyApi.ExperimentTotalsRep](docs/ExperimentTotalsRep.md)
 - [LaunchDarklyApi.ExperimentationSettingsPut](docs/ExperimentationSettingsPut.md)
 - [LaunchDarklyApi.ExperimentationSettingsRep](docs/ExperimentationSettingsRep.md)
 - [LaunchDarklyApi.ExpiringTarget](docs/ExpiringTarget.md)
 - [LaunchDarklyApi.ExpiringTargetError](docs/ExpiringTargetError.md)
 - [LaunchDarklyApi.ExpiringTargetGetResponse](docs/ExpiringTargetGetResponse.md)
 - [LaunchDarklyApi.ExpiringTargetPatchResponse](docs/ExpiringTargetPatchResponse.md)
 - [LaunchDarklyApi.ExpiringUserTargetGetResponse](docs/ExpiringUserTargetGetResponse.md)
 - [LaunchDarklyApi.ExpiringUserTargetItem](docs/ExpiringUserTargetItem.md)
 - [LaunchDarklyApi.ExpiringUserTargetPatchResponse](docs/ExpiringUserTargetPatchResponse.md)
 - [LaunchDarklyApi.Export](docs/Export.md)
 - [LaunchDarklyApi.Extinction](docs/Extinction.md)
 - [LaunchDarklyApi.ExtinctionCollectionRep](docs/ExtinctionCollectionRep.md)
 - [LaunchDarklyApi.FeatureFlag](docs/FeatureFlag.md)
 - [LaunchDarklyApi.FeatureFlagBody](docs/FeatureFlagBody.md)
 - [LaunchDarklyApi.FeatureFlagConfig](docs/FeatureFlagConfig.md)
 - [LaunchDarklyApi.FeatureFlagScheduledChange](docs/FeatureFlagScheduledChange.md)
 - [LaunchDarklyApi.FeatureFlagScheduledChanges](docs/FeatureFlagScheduledChanges.md)
 - [LaunchDarklyApi.FeatureFlagStatus](docs/FeatureFlagStatus.md)
 - [LaunchDarklyApi.FeatureFlagStatusAcrossEnvironments](docs/FeatureFlagStatusAcrossEnvironments.md)
 - [LaunchDarklyApi.FeatureFlagStatuses](docs/FeatureFlagStatuses.md)
 - [LaunchDarklyApi.FeatureFlags](docs/FeatureFlags.md)
 - [LaunchDarklyApi.FileRep](docs/FileRep.md)
 - [LaunchDarklyApi.FlagConfigApprovalRequestResponse](docs/FlagConfigApprovalRequestResponse.md)
 - [LaunchDarklyApi.FlagConfigApprovalRequestsResponse](docs/FlagConfigApprovalRequestsResponse.md)
 - [LaunchDarklyApi.FlagConfigEvaluation](docs/FlagConfigEvaluation.md)
 - [LaunchDarklyApi.FlagCopyConfigEnvironment](docs/FlagCopyConfigEnvironment.md)
 - [LaunchDarklyApi.FlagCopyConfigPost](docs/FlagCopyConfigPost.md)
 - [LaunchDarklyApi.FlagDefaults](docs/FlagDefaults.md)
 - [LaunchDarklyApi.FlagDefaultsApiBaseRep](docs/FlagDefaultsApiBaseRep.md)
 - [LaunchDarklyApi.FlagDefaultsRep](docs/FlagDefaultsRep.md)
 - [LaunchDarklyApi.FlagFollowersByProjEnvGetRep](docs/FlagFollowersByProjEnvGetRep.md)
 - [LaunchDarklyApi.FlagFollowersGetRep](docs/FlagFollowersGetRep.md)
 - [LaunchDarklyApi.FlagGlobalAttributesRep](docs/FlagGlobalAttributesRep.md)
 - [LaunchDarklyApi.FlagInput](docs/FlagInput.md)
 - [LaunchDarklyApi.FlagLinkCollectionRep](docs/FlagLinkCollectionRep.md)
 - [LaunchDarklyApi.FlagLinkMember](docs/FlagLinkMember.md)
 - [LaunchDarklyApi.FlagLinkPost](docs/FlagLinkPost.md)
 - [LaunchDarklyApi.FlagLinkRep](docs/FlagLinkRep.md)
 - [LaunchDarklyApi.FlagListingRep](docs/FlagListingRep.md)
 - [LaunchDarklyApi.FlagRep](docs/FlagRep.md)
 - [LaunchDarklyApi.FlagScheduledChangesInput](docs/FlagScheduledChangesInput.md)
 - [LaunchDarklyApi.FlagStatusRep](docs/FlagStatusRep.md)
 - [LaunchDarklyApi.FlagSummary](docs/FlagSummary.md)
 - [LaunchDarklyApi.FlagTriggerInput](docs/FlagTriggerInput.md)
 - [LaunchDarklyApi.FollowFlagMember](docs/FollowFlagMember.md)
 - [LaunchDarklyApi.FollowersPerFlag](docs/FollowersPerFlag.md)
 - [LaunchDarklyApi.ForbiddenErrorRep](docs/ForbiddenErrorRep.md)
 - [LaunchDarklyApi.HunkRep](docs/HunkRep.md)
 - [LaunchDarklyApi.Import](docs/Import.md)
 - [LaunchDarklyApi.InitiatorRep](docs/InitiatorRep.md)
 - [LaunchDarklyApi.InstructionUserRequest](docs/InstructionUserRequest.md)
 - [LaunchDarklyApi.Integration](docs/Integration.md)
 - [LaunchDarklyApi.IntegrationDeliveryConfiguration](docs/IntegrationDeliveryConfiguration.md)
 - [LaunchDarklyApi.IntegrationDeliveryConfigurationCollection](docs/IntegrationDeliveryConfigurationCollection.md)
 - [LaunchDarklyApi.IntegrationDeliveryConfigurationCollectionLinks](docs/IntegrationDeliveryConfigurationCollectionLinks.md)
 - [LaunchDarklyApi.IntegrationDeliveryConfigurationLinks](docs/IntegrationDeliveryConfigurationLinks.md)
 - [LaunchDarklyApi.IntegrationDeliveryConfigurationPost](docs/IntegrationDeliveryConfigurationPost.md)
 - [LaunchDarklyApi.IntegrationDeliveryConfigurationResponse](docs/IntegrationDeliveryConfigurationResponse.md)
 - [LaunchDarklyApi.IntegrationMetadata](docs/IntegrationMetadata.md)
 - [LaunchDarklyApi.IntegrationStatus](docs/IntegrationStatus.md)
 - [LaunchDarklyApi.IntegrationStatusRep](docs/IntegrationStatusRep.md)
 - [LaunchDarklyApi.IntegrationSubscriptionStatusRep](docs/IntegrationSubscriptionStatusRep.md)
 - [LaunchDarklyApi.Integrations](docs/Integrations.md)
 - [LaunchDarklyApi.InvalidRequestErrorRep](docs/InvalidRequestErrorRep.md)
 - [LaunchDarklyApi.IpList](docs/IpList.md)
 - [LaunchDarklyApi.IterationInput](docs/IterationInput.md)
 - [LaunchDarklyApi.IterationRep](docs/IterationRep.md)
 - [LaunchDarklyApi.LastSeenMetadata](docs/LastSeenMetadata.md)
 - [LaunchDarklyApi.LegacyExperimentRep](docs/LegacyExperimentRep.md)
 - [LaunchDarklyApi.Link](docs/Link.md)
 - [LaunchDarklyApi.MaintainerTeam](docs/MaintainerTeam.md)
 - [LaunchDarklyApi.Member](docs/Member.md)
 - [LaunchDarklyApi.MemberDataRep](docs/MemberDataRep.md)
 - [LaunchDarklyApi.MemberImportItem](docs/MemberImportItem.md)
 - [LaunchDarklyApi.MemberPermissionGrantSummaryRep](docs/MemberPermissionGrantSummaryRep.md)
 - [LaunchDarklyApi.MemberSummary](docs/MemberSummary.md)
 - [LaunchDarklyApi.MemberTeamSummaryRep](docs/MemberTeamSummaryRep.md)
 - [LaunchDarklyApi.MemberTeamsPostInput](docs/MemberTeamsPostInput.md)
 - [LaunchDarklyApi.Members](docs/Members.md)
 - [LaunchDarklyApi.MembersPatchInput](docs/MembersPatchInput.md)
 - [LaunchDarklyApi.MethodNotAllowedErrorRep](docs/MethodNotAllowedErrorRep.md)
 - [LaunchDarklyApi.MetricCollectionRep](docs/MetricCollectionRep.md)
 - [LaunchDarklyApi.MetricInput](docs/MetricInput.md)
 - [LaunchDarklyApi.MetricListingRep](docs/MetricListingRep.md)
 - [LaunchDarklyApi.MetricListingRepExpandableProperties](docs/MetricListingRepExpandableProperties.md)
 - [LaunchDarklyApi.MetricPost](docs/MetricPost.md)
 - [LaunchDarklyApi.MetricRep](docs/MetricRep.md)
 - [LaunchDarklyApi.MetricRepExpandableProperties](docs/MetricRepExpandableProperties.md)
 - [LaunchDarklyApi.MetricSeen](docs/MetricSeen.md)
 - [LaunchDarklyApi.MetricV2Rep](docs/MetricV2Rep.md)
 - [LaunchDarklyApi.Modification](docs/Modification.md)
 - [LaunchDarklyApi.MultiEnvironmentDependentFlag](docs/MultiEnvironmentDependentFlag.md)
 - [LaunchDarklyApi.MultiEnvironmentDependentFlags](docs/MultiEnvironmentDependentFlags.md)
 - [LaunchDarklyApi.NewMemberForm](docs/NewMemberForm.md)
 - [LaunchDarklyApi.NotFoundErrorRep](docs/NotFoundErrorRep.md)
 - [LaunchDarklyApi.OauthClientPost](docs/OauthClientPost.md)
 - [LaunchDarklyApi.OnRegression](docs/OnRegression.md)
 - [LaunchDarklyApi.ParameterDefault](docs/ParameterDefault.md)
 - [LaunchDarklyApi.ParameterDefaultInput](docs/ParameterDefaultInput.md)
 - [LaunchDarklyApi.ParameterRep](docs/ParameterRep.md)
 - [LaunchDarklyApi.ParentResourceRep](docs/ParentResourceRep.md)
 - [LaunchDarklyApi.PatchFailedErrorRep](docs/PatchFailedErrorRep.md)
 - [LaunchDarklyApi.PatchFlagsRequest](docs/PatchFlagsRequest.md)
 - [LaunchDarklyApi.PatchOperation](docs/PatchOperation.md)
 - [LaunchDarklyApi.PatchSegmentInstruction](docs/PatchSegmentInstruction.md)
 - [LaunchDarklyApi.PatchSegmentRequest](docs/PatchSegmentRequest.md)
 - [LaunchDarklyApi.PatchUsersRequest](docs/PatchUsersRequest.md)
 - [LaunchDarklyApi.PatchWithComment](docs/PatchWithComment.md)
 - [LaunchDarklyApi.PermissionGrantInput](docs/PermissionGrantInput.md)
 - [LaunchDarklyApi.PostApprovalRequestApplyRequest](docs/PostApprovalRequestApplyRequest.md)
 - [LaunchDarklyApi.PostApprovalRequestReviewRequest](docs/PostApprovalRequestReviewRequest.md)
 - [LaunchDarklyApi.PostFlagScheduledChangesInput](docs/PostFlagScheduledChangesInput.md)
 - [LaunchDarklyApi.Prerequisite](docs/Prerequisite.md)
 - [LaunchDarklyApi.Project](docs/Project.md)
 - [LaunchDarklyApi.ProjectListingRep](docs/ProjectListingRep.md)
 - [LaunchDarklyApi.ProjectPost](docs/ProjectPost.md)
 - [LaunchDarklyApi.ProjectRep](docs/ProjectRep.md)
 - [LaunchDarklyApi.ProjectSummary](docs/ProjectSummary.md)
 - [LaunchDarklyApi.Projects](docs/Projects.md)
 - [LaunchDarklyApi.PubNubDetailRep](docs/PubNubDetailRep.md)
 - [LaunchDarklyApi.PutBranch](docs/PutBranch.md)
 - [LaunchDarklyApi.RandomizationUnitInput](docs/RandomizationUnitInput.md)
 - [LaunchDarklyApi.RandomizationUnitRep](docs/RandomizationUnitRep.md)
 - [LaunchDarklyApi.RateLimitedErrorRep](docs/RateLimitedErrorRep.md)
 - [LaunchDarklyApi.RecentTriggerBody](docs/RecentTriggerBody.md)
 - [LaunchDarklyApi.ReferenceRep](docs/ReferenceRep.md)
 - [LaunchDarklyApi.RelativeDifferenceRep](docs/RelativeDifferenceRep.md)
 - [LaunchDarklyApi.RelayAutoConfigCollectionRep](docs/RelayAutoConfigCollectionRep.md)
 - [LaunchDarklyApi.RelayAutoConfigPost](docs/RelayAutoConfigPost.md)
 - [LaunchDarklyApi.RelayAutoConfigRep](docs/RelayAutoConfigRep.md)
 - [LaunchDarklyApi.RepositoryCollectionRep](docs/RepositoryCollectionRep.md)
 - [LaunchDarklyApi.RepositoryPost](docs/RepositoryPost.md)
 - [LaunchDarklyApi.RepositoryRep](docs/RepositoryRep.md)
 - [LaunchDarklyApi.ResolvedContext](docs/ResolvedContext.md)
 - [LaunchDarklyApi.ResolvedImage](docs/ResolvedImage.md)
 - [LaunchDarklyApi.ResolvedTitle](docs/ResolvedTitle.md)
 - [LaunchDarklyApi.ResolvedUIBlockElement](docs/ResolvedUIBlockElement.md)
 - [LaunchDarklyApi.ResolvedUIBlocks](docs/ResolvedUIBlocks.md)
 - [LaunchDarklyApi.ResourceAccess](docs/ResourceAccess.md)
 - [LaunchDarklyApi.ResourceIDResponse](docs/ResourceIDResponse.md)
 - [LaunchDarklyApi.ResourceId](docs/ResourceId.md)
 - [LaunchDarklyApi.ReviewOutput](docs/ReviewOutput.md)
 - [LaunchDarklyApi.ReviewResponse](docs/ReviewResponse.md)
 - [LaunchDarklyApi.Rollout](docs/Rollout.md)
 - [LaunchDarklyApi.Rule](docs/Rule.md)
 - [LaunchDarklyApi.RuleClause](docs/RuleClause.md)
 - [LaunchDarklyApi.ScheduleConditionInput](docs/ScheduleConditionInput.md)
 - [LaunchDarklyApi.ScheduleConditionOutput](docs/ScheduleConditionOutput.md)
 - [LaunchDarklyApi.SdkListRep](docs/SdkListRep.md)
 - [LaunchDarklyApi.SdkVersionListRep](docs/SdkVersionListRep.md)
 - [LaunchDarklyApi.SdkVersionRep](docs/SdkVersionRep.md)
 - [LaunchDarklyApi.SegmentBody](docs/SegmentBody.md)
 - [LaunchDarklyApi.SegmentMetadata](docs/SegmentMetadata.md)
 - [LaunchDarklyApi.SegmentTarget](docs/SegmentTarget.md)
 - [LaunchDarklyApi.SegmentUserList](docs/SegmentUserList.md)
 - [LaunchDarklyApi.SegmentUserState](docs/SegmentUserState.md)
 - [LaunchDarklyApi.Series](docs/Series.md)
 - [LaunchDarklyApi.SeriesIntervalsRep](docs/SeriesIntervalsRep.md)
 - [LaunchDarklyApi.SeriesListRep](docs/SeriesListRep.md)
 - [LaunchDarklyApi.SlicedResultsRep](docs/SlicedResultsRep.md)
 - [LaunchDarklyApi.SourceEnv](docs/SourceEnv.md)
 - [LaunchDarklyApi.SourceFlag](docs/SourceFlag.md)
 - [LaunchDarklyApi.StageInput](docs/StageInput.md)
 - [LaunchDarklyApi.StageOutput](docs/StageOutput.md)
 - [LaunchDarklyApi.Statement](docs/Statement.md)
 - [LaunchDarklyApi.StatementPost](docs/StatementPost.md)
 - [LaunchDarklyApi.StatementPostData](docs/StatementPostData.md)
 - [LaunchDarklyApi.StatisticCollectionRep](docs/StatisticCollectionRep.md)
 - [LaunchDarklyApi.StatisticRep](docs/StatisticRep.md)
 - [LaunchDarklyApi.StatisticsRep](docs/StatisticsRep.md)
 - [LaunchDarklyApi.StatisticsRoot](docs/StatisticsRoot.md)
 - [LaunchDarklyApi.StatusConflictErrorRep](docs/StatusConflictErrorRep.md)
 - [LaunchDarklyApi.StatusServiceUnavailable](docs/StatusServiceUnavailable.md)
 - [LaunchDarklyApi.SubjectDataRep](docs/SubjectDataRep.md)
 - [LaunchDarklyApi.SubscriptionPost](docs/SubscriptionPost.md)
 - [LaunchDarklyApi.TagCollection](docs/TagCollection.md)
 - [LaunchDarklyApi.Target](docs/Target.md)
 - [LaunchDarklyApi.TargetResourceRep](docs/TargetResourceRep.md)
 - [LaunchDarklyApi.Team](docs/Team.md)
 - [LaunchDarklyApi.TeamCustomRole](docs/TeamCustomRole.md)
 - [LaunchDarklyApi.TeamCustomRoles](docs/TeamCustomRoles.md)
 - [LaunchDarklyApi.TeamImportsRep](docs/TeamImportsRep.md)
 - [LaunchDarklyApi.TeamMaintainers](docs/TeamMaintainers.md)
 - [LaunchDarklyApi.TeamMembers](docs/TeamMembers.md)
 - [LaunchDarklyApi.TeamPatchInput](docs/TeamPatchInput.md)
 - [LaunchDarklyApi.TeamPostInput](docs/TeamPostInput.md)
 - [LaunchDarklyApi.TeamProjects](docs/TeamProjects.md)
 - [LaunchDarklyApi.TeamRepExpandableProperties](docs/TeamRepExpandableProperties.md)
 - [LaunchDarklyApi.Teams](docs/Teams.md)
 - [LaunchDarklyApi.TeamsPatchInput](docs/TeamsPatchInput.md)
 - [LaunchDarklyApi.TimestampRep](docs/TimestampRep.md)
 - [LaunchDarklyApi.TitleRep](docs/TitleRep.md)
 - [LaunchDarklyApi.Token](docs/Token.md)
 - [LaunchDarklyApi.TokenDataRep](docs/TokenDataRep.md)
 - [LaunchDarklyApi.Tokens](docs/Tokens.md)
 - [LaunchDarklyApi.TreatmentInput](docs/TreatmentInput.md)
 - [LaunchDarklyApi.TreatmentParameterInput](docs/TreatmentParameterInput.md)
 - [LaunchDarklyApi.TreatmentRep](docs/TreatmentRep.md)
 - [LaunchDarklyApi.TreatmentResultRep](docs/TreatmentResultRep.md)
 - [LaunchDarklyApi.TriggerPost](docs/TriggerPost.md)
 - [LaunchDarklyApi.TriggerWorkflowCollectionRep](docs/TriggerWorkflowCollectionRep.md)
 - [LaunchDarklyApi.TriggerWorkflowRep](docs/TriggerWorkflowRep.md)
 - [LaunchDarklyApi.UnauthorizedErrorRep](docs/UnauthorizedErrorRep.md)
 - [LaunchDarklyApi.UpsertContextKindPayload](docs/UpsertContextKindPayload.md)
 - [LaunchDarklyApi.UpsertFlagDefaultsPayload](docs/UpsertFlagDefaultsPayload.md)
 - [LaunchDarklyApi.UpsertPayloadRep](docs/UpsertPayloadRep.md)
 - [LaunchDarklyApi.UpsertResponseRep](docs/UpsertResponseRep.md)
 - [LaunchDarklyApi.UrlPost](docs/UrlPost.md)
 - [LaunchDarklyApi.User](docs/User.md)
 - [LaunchDarklyApi.UserAttributeNamesRep](docs/UserAttributeNamesRep.md)
 - [LaunchDarklyApi.UserFlagSetting](docs/UserFlagSetting.md)
 - [LaunchDarklyApi.UserFlagSettings](docs/UserFlagSettings.md)
 - [LaunchDarklyApi.UserRecord](docs/UserRecord.md)
 - [LaunchDarklyApi.UserRecordRep](docs/UserRecordRep.md)
 - [LaunchDarklyApi.UserSegment](docs/UserSegment.md)
 - [LaunchDarklyApi.UserSegmentRule](docs/UserSegmentRule.md)
 - [LaunchDarklyApi.UserSegments](docs/UserSegments.md)
 - [LaunchDarklyApi.Users](docs/Users.md)
 - [LaunchDarklyApi.UsersRep](docs/UsersRep.md)
 - [LaunchDarklyApi.ValuePut](docs/ValuePut.md)
 - [LaunchDarklyApi.Variate](docs/Variate.md)
 - [LaunchDarklyApi.Variation](docs/Variation.md)
 - [LaunchDarklyApi.VariationOrRolloutRep](docs/VariationOrRolloutRep.md)
 - [LaunchDarklyApi.VariationSummary](docs/VariationSummary.md)
 - [LaunchDarklyApi.VersionsRep](docs/VersionsRep.md)
 - [LaunchDarklyApi.Webhook](docs/Webhook.md)
 - [LaunchDarklyApi.WebhookPost](docs/WebhookPost.md)
 - [LaunchDarklyApi.Webhooks](docs/Webhooks.md)
 - [LaunchDarklyApi.WeightedVariation](docs/WeightedVariation.md)
 - [LaunchDarklyApi.WorkflowTemplateMetadata](docs/WorkflowTemplateMetadata.md)
 - [LaunchDarklyApi.WorkflowTemplateOutput](docs/WorkflowTemplateOutput.md)
 - [LaunchDarklyApi.WorkflowTemplateParameter](docs/WorkflowTemplateParameter.md)
 - [LaunchDarklyApi.WorkflowTemplateParameterInput](docs/WorkflowTemplateParameterInput.md)
 - [LaunchDarklyApi.WorkflowTemplatesListingOutputRep](docs/WorkflowTemplatesListingOutputRep.md)


## Documentation for Authorization



### ApiKey


- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

## Sample Code

```js
var LaunchDarklyApi = require('launchdarkly-api');

var defaultClient = LaunchDarklyApi.ApiClient.instance;

var Token = defaultClient.authentications['ApiKey'];
Token.apiKey = process.env.LD_API_KEY;

var apiInstance = new LaunchDarklyApi.FeatureFlagsApi();

const projectName = "openapi";
const keyName = "test-javascript";

var callback = function(error, data) {
  if (error) {
    console.error(error);
    process.exit(1);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
};

var postCallback = function(error, data) {
  callback(error, data);

  if (!error) {
    // Clean up
    apiInstance.deleteFeatureFlag(projectName, keyName, callback);
  }
};

apiInstance.postFeatureFlag(projectName,
  {
    name: "Test Flag Javascript",
    key: keyName,
    variations: [{value: [1, 2]}, {value: [3, 4]}, {value: [5]}]
  }, {}, postCallback);
```
