This repository contains a client library for LaunchDarkly's REST API. This client was automatically
generated from our [OpenAPI specification](https://github.com/launchdarkly/ld-openapi).

This REST API is for custom integrations, data export, or automating your feature flag workflows. *DO NOT* use this client library to include feature flags in your web or mobile application. To integrate feature flags with your application, please see the [SDK documentation](https://docs.launchdarkly.com/v2.0/docs)

# launchdarkly-api

LaunchDarklyApi - JavaScript client for launchdarkly-api
  Build custom integrations with the LaunchDarkly REST API
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 3.1.0
- Package version: 3.1.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen
  For more information, please visit [https://support.launchdarkly.com](https://support.launchdarkly.com)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install launchdarkly-api --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your launchdarkly-api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
  ```

  You should now be able to `require('launchdarkly-api')` in javascript files from the directory you ran the last
  command above from.

  #### git
  #
  If the library is hosted at a git repository, e.g.
  https://github.com/GIT_USER_ID/GIT_REPO_ID
  then install it via:

  ```shell
  npm install GIT_USER_ID/GIT_REPO_ID --save
  ```

  ### For browser

  The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
  the above steps with Node.js and installing browserify with `npm install -g browserify`,
  perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually
  use this library):

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

  ## Documentation for API Endpoints

  All URIs are relative to *https://app.launchdarkly.com/api/v2*

  Class | Method | HTTP request | Description
  ------------ | ------------- | ------------- | -------------
*LaunchDarklyApi.AuditLogApi* | [**getAuditLogEntries**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/AuditLogApi.md#getAuditLogEntries) | **GET** /auditlog | Get a list of all audit log entries. The query parameters allow you to restrict the returned results by date ranges, resource specifiers, or a full-text search query.
*LaunchDarklyApi.AuditLogApi* | [**getAuditLogEntry**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/AuditLogApi.md#getAuditLogEntry) | **GET** /auditlog/{resourceId} | Use this endpoint to fetch a single audit log entry by its resouce ID.
*LaunchDarklyApi.CustomRolesApi* | [**deleteCustomRole**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/CustomRolesApi.md#deleteCustomRole) | **DELETE** /roles/{customRoleKey} | Delete a custom role by key.
*LaunchDarklyApi.CustomRolesApi* | [**getCustomRole**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/CustomRolesApi.md#getCustomRole) | **GET** /roles/{customRoleKey} | Get one custom role by key.
*LaunchDarklyApi.CustomRolesApi* | [**getCustomRoles**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/CustomRolesApi.md#getCustomRoles) | **GET** /roles | Return a complete list of custom roles.
*LaunchDarklyApi.CustomRolesApi* | [**patchCustomRole**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/CustomRolesApi.md#patchCustomRole) | **PATCH** /roles/{customRoleKey} | Modify a custom role by key.
*LaunchDarklyApi.CustomRolesApi* | [**postCustomRole**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/CustomRolesApi.md#postCustomRole) | **POST** /roles | Create a new custom role.
*LaunchDarklyApi.CustomerMetricsApi* | [**getEvaluations**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/CustomerMetricsApi.md#getEvaluations) | **GET** /usage/evaluations/{envId}/{flagKey} | Get events usage by event id and the feature flag key.
*LaunchDarklyApi.CustomerMetricsApi* | [**getEvent**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/CustomerMetricsApi.md#getEvent) | **GET** /usage/events/{type} | Get events usage by event type.
*LaunchDarklyApi.CustomerMetricsApi* | [**getEvents**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/CustomerMetricsApi.md#getEvents) | **GET** /usage/events | Get events usage endpoints.
*LaunchDarklyApi.CustomerMetricsApi* | [**getMAU**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/CustomerMetricsApi.md#getMAU) | **GET** /usage/mau | Get monthly active user data.
*LaunchDarklyApi.CustomerMetricsApi* | [**getMAUByCategory**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/CustomerMetricsApi.md#getMAUByCategory) | **GET** /usage/mau/bycategory | Get monthly active user data by category.
*LaunchDarklyApi.CustomerMetricsApi* | [**getStream**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/CustomerMetricsApi.md#getStream) | **GET** /usage/streams/{source} | Get a stream endpoint and return timeseries data.
*LaunchDarklyApi.CustomerMetricsApi* | [**getStreamBySDK**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/CustomerMetricsApi.md#getStreamBySDK) | **GET** /usage/streams/{source}/bysdkversion | Get a stream timeseries data by source show sdk version metadata.
*LaunchDarklyApi.CustomerMetricsApi* | [**getStreamSDKVersion**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/CustomerMetricsApi.md#getStreamSDKVersion) | **GET** /usage/streams/{source}/sdkversions | Get a stream timeseries data by source and show all sdk version associated.
*LaunchDarklyApi.CustomerMetricsApi* | [**getStreams**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/CustomerMetricsApi.md#getStreams) | **GET** /usage/streams | Returns a list of all streams.
*LaunchDarklyApi.CustomerMetricsApi* | [**getUsage**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/CustomerMetricsApi.md#getUsage) | **GET** /usage | Returns of the usage endpoints available.
*LaunchDarklyApi.DataExportDestinationsApi* | [**deleteDestination**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/DataExportDestinationsApi.md#deleteDestination) | **DELETE** /destinations/{projectKey}/{environmentKey}/{destinationId} | Get a single data export destination by ID
*LaunchDarklyApi.DataExportDestinationsApi* | [**getDestination**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/DataExportDestinationsApi.md#getDestination) | **GET** /destinations/{projectKey}/{environmentKey}/{destinationId} | Get a single data export destination by ID
*LaunchDarklyApi.DataExportDestinationsApi* | [**getDestinations**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/DataExportDestinationsApi.md#getDestinations) | **GET** /destinations | Returns a list of all data export destinations.
*LaunchDarklyApi.DataExportDestinationsApi* | [**patchDestination**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/DataExportDestinationsApi.md#patchDestination) | **PATCH** /destinations/{projectKey}/{environmentKey}/{destinationId} | Perform a partial update to a data export destination.
*LaunchDarklyApi.DataExportDestinationsApi* | [**postDestination**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/DataExportDestinationsApi.md#postDestination) | **POST** /destinations/{projectKey}/{environmentKey} | Create a new data export destination
*LaunchDarklyApi.EnvironmentsApi* | [**deleteEnvironment**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/EnvironmentsApi.md#deleteEnvironment) | **DELETE** /projects/{projectKey}/environments/{environmentKey} | Delete an environment in a specific project.
*LaunchDarklyApi.EnvironmentsApi* | [**getEnvironment**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/EnvironmentsApi.md#getEnvironment) | **GET** /projects/{projectKey}/environments/{environmentKey} | Get an environment given a project and key.
*LaunchDarklyApi.EnvironmentsApi* | [**patchEnvironment**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/EnvironmentsApi.md#patchEnvironment) | **PATCH** /projects/{projectKey}/environments/{environmentKey} | Modify an environment by ID.
*LaunchDarklyApi.EnvironmentsApi* | [**postEnvironment**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/EnvironmentsApi.md#postEnvironment) | **POST** /projects/{projectKey}/environments | Create a new environment in a specified project with a given name, key, and swatch color.
*LaunchDarklyApi.FeatureFlagsApi* | [**copyFeatureFlag**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/FeatureFlagsApi.md#copyFeatureFlag) | **POST** /flags/{projectKey}/{featureFlagKey}/copy | Copies the feature flag configuration from one environment to the same feature flag in another environment.
*LaunchDarklyApi.FeatureFlagsApi* | [**deleteFeatureFlag**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/FeatureFlagsApi.md#deleteFeatureFlag) | **DELETE** /flags/{projectKey}/{featureFlagKey} | Delete a feature flag in all environments. Be careful-- only delete feature flags that are no longer being used by your application.
*LaunchDarklyApi.FeatureFlagsApi* | [**getExpiringUserTargets**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/FeatureFlagsApi.md#getExpiringUserTargets) | **GET** /flags/{projectKey}/{featureFlagKey}/expiring-user-targets/{environmentKey} | Get expiring user targets for feature flag
*LaunchDarklyApi.FeatureFlagsApi* | [**getFeatureFlag**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/FeatureFlagsApi.md#getFeatureFlag) | **GET** /flags/{projectKey}/{featureFlagKey} | Get a single feature flag by key.
*LaunchDarklyApi.FeatureFlagsApi* | [**getFeatureFlagStatus**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/FeatureFlagsApi.md#getFeatureFlagStatus) | **GET** /flag-statuses/{projectKey}/{environmentKey}/{featureFlagKey} | Get the status for a particular feature flag.
*LaunchDarklyApi.FeatureFlagsApi* | [**getFeatureFlagStatusAcrossEnvironments**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/FeatureFlagsApi.md#getFeatureFlagStatusAcrossEnvironments) | **GET** /flag-status/{projectKey}/{featureFlagKey} | Get the status for a particular feature flag across environments
*LaunchDarklyApi.FeatureFlagsApi* | [**getFeatureFlagStatuses**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/FeatureFlagsApi.md#getFeatureFlagStatuses) | **GET** /flag-statuses/{projectKey}/{environmentKey} | Get a list of statuses for all feature flags. The status includes the last time the feature flag was requested, as well as the state of the flag.
*LaunchDarklyApi.FeatureFlagsApi* | [**getFeatureFlags**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/FeatureFlagsApi.md#getFeatureFlags) | **GET** /flags/{projectKey} | Get a list of all features in the given project.
*LaunchDarklyApi.FeatureFlagsApi* | [**patchExpiringUserTargets**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/FeatureFlagsApi.md#patchExpiringUserTargets) | **PATCH** /flags/{projectKey}/{featureFlagKey}/expiring-user-targets/{environmentKey} | Update, add, or delete expiring user targets on feature flag
*LaunchDarklyApi.FeatureFlagsApi* | [**patchFeatureFlag**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/FeatureFlagsApi.md#patchFeatureFlag) | **PATCH** /flags/{projectKey}/{featureFlagKey} | Perform a partial update to a feature.
*LaunchDarklyApi.FeatureFlagsApi* | [**postFeatureFlag**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/FeatureFlagsApi.md#postFeatureFlag) | **POST** /flags/{projectKey} | Creates a new feature flag.
*LaunchDarklyApi.ProjectsApi* | [**deleteProject**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/ProjectsApi.md#deleteProject) | **DELETE** /projects/{projectKey} | Delete a project by key. Caution-- deleting a project will delete all associated environments and feature flags. You cannot delete the last project in an account.
*LaunchDarklyApi.ProjectsApi* | [**getProject**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/ProjectsApi.md#getProject) | **GET** /projects/{projectKey} | Fetch a single project by key.
*LaunchDarklyApi.ProjectsApi* | [**getProjects**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/ProjectsApi.md#getProjects) | **GET** /projects | Returns a list of all projects in the account.
*LaunchDarklyApi.ProjectsApi* | [**patchProject**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/ProjectsApi.md#patchProject) | **PATCH** /projects/{projectKey} | Modify a project by ID.
*LaunchDarklyApi.ProjectsApi* | [**postProject**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/ProjectsApi.md#postProject) | **POST** /projects | Create a new project with the given key and name.
*LaunchDarklyApi.RootApi* | [**getRoot**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/RootApi.md#getRoot) | **GET** / | 
*LaunchDarklyApi.TeamMembersApi* | [**deleteMember**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/TeamMembersApi.md#deleteMember) | **DELETE** /members/{memberId} | Delete a team member by ID.
*LaunchDarklyApi.TeamMembersApi* | [**getMe**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/TeamMembersApi.md#getMe) | **GET** /members/me | Get the current team member associated with the token
*LaunchDarklyApi.TeamMembersApi* | [**getMember**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/TeamMembersApi.md#getMember) | **GET** /members/{memberId} | Get a single team member by ID.
*LaunchDarklyApi.TeamMembersApi* | [**getMembers**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/TeamMembersApi.md#getMembers) | **GET** /members | Returns a list of all members in the account.
*LaunchDarklyApi.TeamMembersApi* | [**patchMember**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/TeamMembersApi.md#patchMember) | **PATCH** /members/{memberId} | Modify a team member by ID.
*LaunchDarklyApi.TeamMembersApi* | [**postMembers**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/TeamMembersApi.md#postMembers) | **POST** /members | Invite new members.
*LaunchDarklyApi.UserSegmentsApi* | [**deleteUserSegment**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/UserSegmentsApi.md#deleteUserSegment) | **DELETE** /segments/{projectKey}/{environmentKey}/{userSegmentKey} | Delete a user segment.
*LaunchDarklyApi.UserSegmentsApi* | [**getUserSegment**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/UserSegmentsApi.md#getUserSegment) | **GET** /segments/{projectKey}/{environmentKey}/{userSegmentKey} | Get a single user segment by key.
*LaunchDarklyApi.UserSegmentsApi* | [**getUserSegments**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/UserSegmentsApi.md#getUserSegments) | **GET** /segments/{projectKey}/{environmentKey} | Get a list of all user segments in the given project.
*LaunchDarklyApi.UserSegmentsApi* | [**patchUserSegment**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/UserSegmentsApi.md#patchUserSegment) | **PATCH** /segments/{projectKey}/{environmentKey}/{userSegmentKey} | Perform a partial update to a user segment.
*LaunchDarklyApi.UserSegmentsApi* | [**postUserSegment**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/UserSegmentsApi.md#postUserSegment) | **POST** /segments/{projectKey}/{environmentKey} | Creates a new user segment.
*LaunchDarklyApi.UserSettingsApi* | [**getExpiringUserTargetsForUser**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/UserSettingsApi.md#getExpiringUserTargetsForUser) | **GET** /users/{projectKey}/{userKey}/expiring-user-targets/{environmentKey} | Get expiring dates on flags for user
*LaunchDarklyApi.UserSettingsApi* | [**getUserFlagSetting**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/UserSettingsApi.md#getUserFlagSetting) | **GET** /users/{projectKey}/{environmentKey}/{userKey}/flags/{featureFlagKey} | Fetch a single flag setting for a user by key.
*LaunchDarklyApi.UserSettingsApi* | [**getUserFlagSettings**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/UserSettingsApi.md#getUserFlagSettings) | **GET** /users/{projectKey}/{environmentKey}/{userKey}/flags | Fetch a single flag setting for a user by key.
*LaunchDarklyApi.UserSettingsApi* | [**patchExpiringUserTargetsForFlags**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/UserSettingsApi.md#patchExpiringUserTargetsForFlags) | **PATCH** /users/{projectKey}/{userKey}/expiring-user-targets/{environmentKey} | Update, add, or delete expiring user targets for a single user on all flags
*LaunchDarklyApi.UserSettingsApi* | [**putFlagSetting**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/UserSettingsApi.md#putFlagSetting) | **PUT** /users/{projectKey}/{environmentKey}/{userKey}/flags/{featureFlagKey} | Specifically enable or disable a feature flag for a user based on their key.
*LaunchDarklyApi.UsersApi* | [**deleteUser**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/UsersApi.md#deleteUser) | **DELETE** /users/{projectKey}/{environmentKey}/{userKey} | Delete a user by ID.
*LaunchDarklyApi.UsersApi* | [**getSearchUsers**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/UsersApi.md#getSearchUsers) | **GET** /user-search/{projectKey}/{environmentKey} | Search users in LaunchDarkly based on their last active date, or a search query. It should not be used to enumerate all users in LaunchDarkly-- use the List users API resource.
*LaunchDarklyApi.UsersApi* | [**getUser**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/UsersApi.md#getUser) | **GET** /users/{projectKey}/{environmentKey}/{userKey} | Get a user by key.
*LaunchDarklyApi.UsersApi* | [**getUsers**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/UsersApi.md#getUsers) | **GET** /users/{projectKey}/{environmentKey} | List all users in the environment. Includes the total count of users. In each page, there will be up to &#39;limit&#39; users returned (default 20). This is useful for exporting all users in the system for further analysis. Paginated collections will include a next link containing a URL with the next set of elements in the collection.
*LaunchDarklyApi.WebhooksApi* | [**deleteWebhook**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/WebhooksApi.md#deleteWebhook) | **DELETE** /webhooks/{resourceId} | Delete a webhook by ID.
*LaunchDarklyApi.WebhooksApi* | [**getWebhook**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/WebhooksApi.md#getWebhook) | **GET** /webhooks/{resourceId} | Get a webhook by ID.
*LaunchDarklyApi.WebhooksApi* | [**getWebhooks**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/WebhooksApi.md#getWebhooks) | **GET** /webhooks | Fetch a list of all webhooks.
*LaunchDarklyApi.WebhooksApi* | [**patchWebhook**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/WebhooksApi.md#patchWebhook) | **PATCH** /webhooks/{resourceId} | Modify a webhook by ID.
*LaunchDarklyApi.WebhooksApi* | [**postWebhook**](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/WebhooksApi.md#postWebhook) | **POST** /webhooks | Create a webhook.


  ## Documentation for Models

 - [LaunchDarklyApi.AuditLogEntries](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/AuditLogEntries.md)
 - [LaunchDarklyApi.AuditLogEntry](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/AuditLogEntry.md)
 - [LaunchDarklyApi.AuditLogEntryTarget](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/AuditLogEntryTarget.md)
 - [LaunchDarklyApi.Clause](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/Clause.md)
 - [LaunchDarklyApi.CopyActions](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/CopyActions.md)
 - [LaunchDarklyApi.CustomProperty](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/CustomProperty.md)
 - [LaunchDarklyApi.CustomPropertyValues](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/CustomPropertyValues.md)
 - [LaunchDarklyApi.CustomRole](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/CustomRole.md)
 - [LaunchDarklyApi.CustomRoleBody](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/CustomRoleBody.md)
 - [LaunchDarklyApi.CustomRoles](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/CustomRoles.md)
 - [LaunchDarklyApi.Defaults](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/Defaults.md)
 - [LaunchDarklyApi.Destination](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/Destination.md)
 - [LaunchDarklyApi.DestinationAmazonKinesis](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/DestinationAmazonKinesis.md)
 - [LaunchDarklyApi.DestinationBody](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/DestinationBody.md)
 - [LaunchDarklyApi.DestinationGooglePubSub](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/DestinationGooglePubSub.md)
 - [LaunchDarklyApi.DestinationMParticle](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/DestinationMParticle.md)
 - [LaunchDarklyApi.DestinationSegment](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/DestinationSegment.md)
 - [LaunchDarklyApi.Destinations](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/Destinations.md)
 - [LaunchDarklyApi.Environment](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/Environment.md)
 - [LaunchDarklyApi.EnvironmentPost](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/EnvironmentPost.md)
 - [LaunchDarklyApi.EvaluationUsageError](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/EvaluationUsageError.md)
 - [LaunchDarklyApi.Events](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/Events.md)
 - [LaunchDarklyApi.Fallthrough](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/Fallthrough.md)
 - [LaunchDarklyApi.FeatureFlag](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/FeatureFlag.md)
 - [LaunchDarklyApi.FeatureFlagBody](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/FeatureFlagBody.md)
 - [LaunchDarklyApi.FeatureFlagConfig](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/FeatureFlagConfig.md)
 - [LaunchDarklyApi.FeatureFlagCopyBody](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/FeatureFlagCopyBody.md)
 - [LaunchDarklyApi.FeatureFlagCopyObject](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/FeatureFlagCopyObject.md)
 - [LaunchDarklyApi.FeatureFlagStatus](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/FeatureFlagStatus.md)
 - [LaunchDarklyApi.FeatureFlagStatusAcrossEnvironments](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/FeatureFlagStatusAcrossEnvironments.md)
 - [LaunchDarklyApi.FeatureFlagStatusForQueriedEnvironment](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/FeatureFlagStatusForQueriedEnvironment.md)
 - [LaunchDarklyApi.FeatureFlagStatuses](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/FeatureFlagStatuses.md)
 - [LaunchDarklyApi.FeatureFlags](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/FeatureFlags.md)
 - [LaunchDarklyApi.FlagListItem](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/FlagListItem.md)
 - [LaunchDarklyApi.Id](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/Id.md)
 - [LaunchDarklyApi.Link](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/Link.md)
 - [LaunchDarklyApi.Links](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/Links.md)
 - [LaunchDarklyApi.MAU](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/MAU.md)
 - [LaunchDarklyApi.MAUMetadata](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/MAUMetadata.md)
 - [LaunchDarklyApi.MAUbyCategory](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/MAUbyCategory.md)
 - [LaunchDarklyApi.Member](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/Member.md)
 - [LaunchDarklyApi.Members](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/Members.md)
 - [LaunchDarklyApi.MembersBody](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/MembersBody.md)
 - [LaunchDarklyApi.PatchComment](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/PatchComment.md)
 - [LaunchDarklyApi.PatchOperation](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/PatchOperation.md)
 - [LaunchDarklyApi.Policy](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/Policy.md)
 - [LaunchDarklyApi.Prerequisite](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/Prerequisite.md)
 - [LaunchDarklyApi.Project](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/Project.md)
 - [LaunchDarklyApi.ProjectBody](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/ProjectBody.md)
 - [LaunchDarklyApi.Projects](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/Projects.md)
 - [LaunchDarklyApi.Role](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/Role.md)
 - [LaunchDarklyApi.Rollout](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/Rollout.md)
 - [LaunchDarklyApi.Rule](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/Rule.md)
 - [LaunchDarklyApi.Site](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/Site.md)
 - [LaunchDarklyApi.Statement](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/Statement.md)
 - [LaunchDarklyApi.Stream](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/Stream.md)
 - [LaunchDarklyApi.StreamBySDK](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/StreamBySDK.md)
 - [LaunchDarklyApi.StreamBySDKLinks](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/StreamBySDKLinks.md)
 - [LaunchDarklyApi.StreamBySDKLinksMetadata](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/StreamBySDKLinksMetadata.md)
 - [LaunchDarklyApi.StreamLinks](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/StreamLinks.md)
 - [LaunchDarklyApi.StreamSDKVersion](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/StreamSDKVersion.md)
 - [LaunchDarklyApi.StreamSDKVersionData](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/StreamSDKVersionData.md)
 - [LaunchDarklyApi.StreamUsageError](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/StreamUsageError.md)
 - [LaunchDarklyApi.StreamUsageLinks](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/StreamUsageLinks.md)
 - [LaunchDarklyApi.StreamUsageMetadata](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/StreamUsageMetadata.md)
 - [LaunchDarklyApi.StreamUsageSeries](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/StreamUsageSeries.md)
 - [LaunchDarklyApi.Streams](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/Streams.md)
 - [LaunchDarklyApi.Target](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/Target.md)
 - [LaunchDarklyApi.Usage](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/Usage.md)
 - [LaunchDarklyApi.UsageError](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/UsageError.md)
 - [LaunchDarklyApi.UsageLinks](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/UsageLinks.md)
 - [LaunchDarklyApi.User](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/User.md)
 - [LaunchDarklyApi.UserFlagSetting](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/UserFlagSetting.md)
 - [LaunchDarklyApi.UserFlagSettings](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/UserFlagSettings.md)
 - [LaunchDarklyApi.UserRecord](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/UserRecord.md)
 - [LaunchDarklyApi.UserSegment](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/UserSegment.md)
 - [LaunchDarklyApi.UserSegmentBody](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/UserSegmentBody.md)
 - [LaunchDarklyApi.UserSegmentRule](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/UserSegmentRule.md)
 - [LaunchDarklyApi.UserSegments](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/UserSegments.md)
 - [LaunchDarklyApi.UserSettingsBody](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/UserSettingsBody.md)
 - [LaunchDarklyApi.UserTargetingExpirationForFlag](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/UserTargetingExpirationForFlag.md)
 - [LaunchDarklyApi.UserTargetingExpirationForFlags](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/UserTargetingExpirationForFlags.md)
 - [LaunchDarklyApi.UserTargetingExpirationOnFlagsForUser](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/UserTargetingExpirationOnFlagsForUser.md)
 - [LaunchDarklyApi.UserTargetingExpirationResourceIdForFlag](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/UserTargetingExpirationResourceIdForFlag.md)
 - [LaunchDarklyApi.Users](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/Users.md)
 - [LaunchDarklyApi.Variation](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/Variation.md)
 - [LaunchDarklyApi.Webhook](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/Webhook.md)
 - [LaunchDarklyApi.WebhookBody](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/WebhookBody.md)
 - [LaunchDarklyApi.Webhooks](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/Webhooks.md)
 - [LaunchDarklyApi.WeightedVariation](https://github.com/launchdarkly/api-client-javascript/blob/3.1.0/docs/WeightedVariation.md)


  ## Documentation for Authorization


### Token

- **Type**: API key
  - **API key parameter name**: Authorization
  - **Location**: HTTP header

## Sample Code

```
var LaunchDarklyApi = require('launchdarkly-api');

var defaultClient = LaunchDarklyApi.ApiClient.instance;

var Token = defaultClient.authentications['Token'];
Token.apiKey = process.env.LD_API_KEY;

var apiInstance = new LaunchDarklyApi.FeatureFlagsApi();

var callback = function(error, data) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
};

const projectName = "openapi";
const keyName = "test-javascript";

apiInstance.postFeatureFlag(projectName,
  {
    name: "Test Flag Javascript",
    key: keyName,
    variations: [{value: [1, 2]}, {value: [3, 4]}, {value: [5]}]
  }, {}, callback);

// Clean up new flag (requires a new api instance)
apiInstance = new LaunchDarklyApi.FeatureFlagsApi();
apiInstance.deleteFeatureFlag(projectName, keyName, callback);
```
