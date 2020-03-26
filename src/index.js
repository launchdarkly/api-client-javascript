/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 2.0.33
 * Contact: support@launchdarkly.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.8
 *
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AuditLogEntries', 'model/AuditLogEntry', 'model/AuditLogEntryTarget', 'model/Clause', 'model/CopyActions', 'model/CustomProperty', 'model/CustomPropertyValues', 'model/CustomRole', 'model/CustomRoleBody', 'model/CustomRoles', 'model/Defaults', 'model/Destination', 'model/DestinationAmazonKinesis', 'model/DestinationBody', 'model/DestinationGooglePubSub', 'model/DestinationMParticle', 'model/DestinationSegment', 'model/Destinations', 'model/Environment', 'model/EnvironmentPost', 'model/EvaluationUsageError', 'model/Events', 'model/Fallthrough', 'model/FeatureFlag', 'model/FeatureFlagBody', 'model/FeatureFlagConfig', 'model/FeatureFlagCopyBody', 'model/FeatureFlagCopyObject', 'model/FeatureFlagStatus', 'model/FeatureFlagStatusAcrossEnvironments', 'model/FeatureFlagStatusForQueriedEnvironment', 'model/FeatureFlagStatuses', 'model/FeatureFlags', 'model/FlagListItem', 'model/Id', 'model/Link', 'model/Links', 'model/MAU', 'model/MAUMetadata', 'model/MAUbyCategory', 'model/Member', 'model/Members', 'model/MembersBody', 'model/PatchComment', 'model/PatchOperation', 'model/Policy', 'model/Prerequisite', 'model/Project', 'model/ProjectBody', 'model/Projects', 'model/Role', 'model/Rollout', 'model/Rule', 'model/Site', 'model/Statement', 'model/Stream', 'model/StreamBySDK', 'model/StreamBySDKLinks', 'model/StreamBySDKLinksMetadata', 'model/StreamLinks', 'model/StreamSDKVersion', 'model/StreamSDKVersionData', 'model/StreamUsageError', 'model/StreamUsageLinks', 'model/StreamUsageMetadata', 'model/StreamUsageSeries', 'model/Streams', 'model/Target', 'model/Usage', 'model/UsageError', 'model/UsageLinks', 'model/User', 'model/UserFlagSetting', 'model/UserFlagSettings', 'model/UserRecord', 'model/UserSegment', 'model/UserSegmentBody', 'model/UserSegmentRule', 'model/UserSegments', 'model/UserSettingsBody', 'model/Users', 'model/Variation', 'model/Webhook', 'model/WebhookBody', 'model/Webhooks', 'model/WeightedVariation', 'api/AuditLogApi', 'api/CustomRolesApi', 'api/CustomerMetricsApi', 'api/DataExportDestinationsApi', 'api/EnvironmentsApi', 'api/FeatureFlagsApi', 'api/ProjectsApi', 'api/RootApi', 'api/TeamMembersApi', 'api/UserSegmentsApi', 'api/UserSettingsApi', 'api/UsersApi', 'api/WebhooksApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/AuditLogEntries'), require('./model/AuditLogEntry'), require('./model/AuditLogEntryTarget'), require('./model/Clause'), require('./model/CopyActions'), require('./model/CustomProperty'), require('./model/CustomPropertyValues'), require('./model/CustomRole'), require('./model/CustomRoleBody'), require('./model/CustomRoles'), require('./model/Defaults'), require('./model/Destination'), require('./model/DestinationAmazonKinesis'), require('./model/DestinationBody'), require('./model/DestinationGooglePubSub'), require('./model/DestinationMParticle'), require('./model/DestinationSegment'), require('./model/Destinations'), require('./model/Environment'), require('./model/EnvironmentPost'), require('./model/EvaluationUsageError'), require('./model/Events'), require('./model/Fallthrough'), require('./model/FeatureFlag'), require('./model/FeatureFlagBody'), require('./model/FeatureFlagConfig'), require('./model/FeatureFlagCopyBody'), require('./model/FeatureFlagCopyObject'), require('./model/FeatureFlagStatus'), require('./model/FeatureFlagStatusAcrossEnvironments'), require('./model/FeatureFlagStatusForQueriedEnvironment'), require('./model/FeatureFlagStatuses'), require('./model/FeatureFlags'), require('./model/FlagListItem'), require('./model/Id'), require('./model/Link'), require('./model/Links'), require('./model/MAU'), require('./model/MAUMetadata'), require('./model/MAUbyCategory'), require('./model/Member'), require('./model/Members'), require('./model/MembersBody'), require('./model/PatchComment'), require('./model/PatchOperation'), require('./model/Policy'), require('./model/Prerequisite'), require('./model/Project'), require('./model/ProjectBody'), require('./model/Projects'), require('./model/Role'), require('./model/Rollout'), require('./model/Rule'), require('./model/Site'), require('./model/Statement'), require('./model/Stream'), require('./model/StreamBySDK'), require('./model/StreamBySDKLinks'), require('./model/StreamBySDKLinksMetadata'), require('./model/StreamLinks'), require('./model/StreamSDKVersion'), require('./model/StreamSDKVersionData'), require('./model/StreamUsageError'), require('./model/StreamUsageLinks'), require('./model/StreamUsageMetadata'), require('./model/StreamUsageSeries'), require('./model/Streams'), require('./model/Target'), require('./model/Usage'), require('./model/UsageError'), require('./model/UsageLinks'), require('./model/User'), require('./model/UserFlagSetting'), require('./model/UserFlagSettings'), require('./model/UserRecord'), require('./model/UserSegment'), require('./model/UserSegmentBody'), require('./model/UserSegmentRule'), require('./model/UserSegments'), require('./model/UserSettingsBody'), require('./model/Users'), require('./model/Variation'), require('./model/Webhook'), require('./model/WebhookBody'), require('./model/Webhooks'), require('./model/WeightedVariation'), require('./api/AuditLogApi'), require('./api/CustomRolesApi'), require('./api/CustomerMetricsApi'), require('./api/DataExportDestinationsApi'), require('./api/EnvironmentsApi'), require('./api/FeatureFlagsApi'), require('./api/ProjectsApi'), require('./api/RootApi'), require('./api/TeamMembersApi'), require('./api/UserSegmentsApi'), require('./api/UserSettingsApi'), require('./api/UsersApi'), require('./api/WebhooksApi'));
  }
}(function(ApiClient, AuditLogEntries, AuditLogEntry, AuditLogEntryTarget, Clause, CopyActions, CustomProperty, CustomPropertyValues, CustomRole, CustomRoleBody, CustomRoles, Defaults, Destination, DestinationAmazonKinesis, DestinationBody, DestinationGooglePubSub, DestinationMParticle, DestinationSegment, Destinations, Environment, EnvironmentPost, EvaluationUsageError, Events, Fallthrough, FeatureFlag, FeatureFlagBody, FeatureFlagConfig, FeatureFlagCopyBody, FeatureFlagCopyObject, FeatureFlagStatus, FeatureFlagStatusAcrossEnvironments, FeatureFlagStatusForQueriedEnvironment, FeatureFlagStatuses, FeatureFlags, FlagListItem, Id, Link, Links, MAU, MAUMetadata, MAUbyCategory, Member, Members, MembersBody, PatchComment, PatchOperation, Policy, Prerequisite, Project, ProjectBody, Projects, Role, Rollout, Rule, Site, Statement, Stream, StreamBySDK, StreamBySDKLinks, StreamBySDKLinksMetadata, StreamLinks, StreamSDKVersion, StreamSDKVersionData, StreamUsageError, StreamUsageLinks, StreamUsageMetadata, StreamUsageSeries, Streams, Target, Usage, UsageError, UsageLinks, User, UserFlagSetting, UserFlagSettings, UserRecord, UserSegment, UserSegmentBody, UserSegmentRule, UserSegments, UserSettingsBody, Users, Variation, Webhook, WebhookBody, Webhooks, WeightedVariation, AuditLogApi, CustomRolesApi, CustomerMetricsApi, DataExportDestinationsApi, EnvironmentsApi, FeatureFlagsApi, ProjectsApi, RootApi, TeamMembersApi, UserSegmentsApi, UserSettingsApi, UsersApi, WebhooksApi) {
  'use strict';

  /**
   * Build_custom_integrations_with_the_LaunchDarkly_REST_API.<br>
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
   * @version 2.0.33
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AuditLogEntries model constructor.
     * @property {module:model/AuditLogEntries}
     */
    AuditLogEntries: AuditLogEntries,
    /**
     * The AuditLogEntry model constructor.
     * @property {module:model/AuditLogEntry}
     */
    AuditLogEntry: AuditLogEntry,
    /**
     * The AuditLogEntryTarget model constructor.
     * @property {module:model/AuditLogEntryTarget}
     */
    AuditLogEntryTarget: AuditLogEntryTarget,
    /**
     * The Clause model constructor.
     * @property {module:model/Clause}
     */
    Clause: Clause,
    /**
     * The CopyActions model constructor.
     * @property {module:model/CopyActions}
     */
    CopyActions: CopyActions,
    /**
     * The CustomProperty model constructor.
     * @property {module:model/CustomProperty}
     */
    CustomProperty: CustomProperty,
    /**
     * The CustomPropertyValues model constructor.
     * @property {module:model/CustomPropertyValues}
     */
    CustomPropertyValues: CustomPropertyValues,
    /**
     * The CustomRole model constructor.
     * @property {module:model/CustomRole}
     */
    CustomRole: CustomRole,
    /**
     * The CustomRoleBody model constructor.
     * @property {module:model/CustomRoleBody}
     */
    CustomRoleBody: CustomRoleBody,
    /**
     * The CustomRoles model constructor.
     * @property {module:model/CustomRoles}
     */
    CustomRoles: CustomRoles,
    /**
     * The Defaults model constructor.
     * @property {module:model/Defaults}
     */
    Defaults: Defaults,
    /**
     * The Destination model constructor.
     * @property {module:model/Destination}
     */
    Destination: Destination,
    /**
     * The DestinationAmazonKinesis model constructor.
     * @property {module:model/DestinationAmazonKinesis}
     */
    DestinationAmazonKinesis: DestinationAmazonKinesis,
    /**
     * The DestinationBody model constructor.
     * @property {module:model/DestinationBody}
     */
    DestinationBody: DestinationBody,
    /**
     * The DestinationGooglePubSub model constructor.
     * @property {module:model/DestinationGooglePubSub}
     */
    DestinationGooglePubSub: DestinationGooglePubSub,
    /**
     * The DestinationMParticle model constructor.
     * @property {module:model/DestinationMParticle}
     */
    DestinationMParticle: DestinationMParticle,
    /**
     * The DestinationSegment model constructor.
     * @property {module:model/DestinationSegment}
     */
    DestinationSegment: DestinationSegment,
    /**
     * The Destinations model constructor.
     * @property {module:model/Destinations}
     */
    Destinations: Destinations,
    /**
     * The Environment model constructor.
     * @property {module:model/Environment}
     */
    Environment: Environment,
    /**
     * The EnvironmentPost model constructor.
     * @property {module:model/EnvironmentPost}
     */
    EnvironmentPost: EnvironmentPost,
    /**
     * The EvaluationUsageError model constructor.
     * @property {module:model/EvaluationUsageError}
     */
    EvaluationUsageError: EvaluationUsageError,
    /**
     * The Events model constructor.
     * @property {module:model/Events}
     */
    Events: Events,
    /**
     * The Fallthrough model constructor.
     * @property {module:model/Fallthrough}
     */
    Fallthrough: Fallthrough,
    /**
     * The FeatureFlag model constructor.
     * @property {module:model/FeatureFlag}
     */
    FeatureFlag: FeatureFlag,
    /**
     * The FeatureFlagBody model constructor.
     * @property {module:model/FeatureFlagBody}
     */
    FeatureFlagBody: FeatureFlagBody,
    /**
     * The FeatureFlagConfig model constructor.
     * @property {module:model/FeatureFlagConfig}
     */
    FeatureFlagConfig: FeatureFlagConfig,
    /**
     * The FeatureFlagCopyBody model constructor.
     * @property {module:model/FeatureFlagCopyBody}
     */
    FeatureFlagCopyBody: FeatureFlagCopyBody,
    /**
     * The FeatureFlagCopyObject model constructor.
     * @property {module:model/FeatureFlagCopyObject}
     */
    FeatureFlagCopyObject: FeatureFlagCopyObject,
    /**
     * The FeatureFlagStatus model constructor.
     * @property {module:model/FeatureFlagStatus}
     */
    FeatureFlagStatus: FeatureFlagStatus,
    /**
     * The FeatureFlagStatusAcrossEnvironments model constructor.
     * @property {module:model/FeatureFlagStatusAcrossEnvironments}
     */
    FeatureFlagStatusAcrossEnvironments: FeatureFlagStatusAcrossEnvironments,
    /**
     * The FeatureFlagStatusForQueriedEnvironment model constructor.
     * @property {module:model/FeatureFlagStatusForQueriedEnvironment}
     */
    FeatureFlagStatusForQueriedEnvironment: FeatureFlagStatusForQueriedEnvironment,
    /**
     * The FeatureFlagStatuses model constructor.
     * @property {module:model/FeatureFlagStatuses}
     */
    FeatureFlagStatuses: FeatureFlagStatuses,
    /**
     * The FeatureFlags model constructor.
     * @property {module:model/FeatureFlags}
     */
    FeatureFlags: FeatureFlags,
    /**
     * The FlagListItem model constructor.
     * @property {module:model/FlagListItem}
     */
    FlagListItem: FlagListItem,
    /**
     * The Id model constructor.
     * @property {module:model/Id}
     */
    Id: Id,
    /**
     * The Link model constructor.
     * @property {module:model/Link}
     */
    Link: Link,
    /**
     * The Links model constructor.
     * @property {module:model/Links}
     */
    Links: Links,
    /**
     * The MAU model constructor.
     * @property {module:model/MAU}
     */
    MAU: MAU,
    /**
     * The MAUMetadata model constructor.
     * @property {module:model/MAUMetadata}
     */
    MAUMetadata: MAUMetadata,
    /**
     * The MAUbyCategory model constructor.
     * @property {module:model/MAUbyCategory}
     */
    MAUbyCategory: MAUbyCategory,
    /**
     * The Member model constructor.
     * @property {module:model/Member}
     */
    Member: Member,
    /**
     * The Members model constructor.
     * @property {module:model/Members}
     */
    Members: Members,
    /**
     * The MembersBody model constructor.
     * @property {module:model/MembersBody}
     */
    MembersBody: MembersBody,
    /**
     * The PatchComment model constructor.
     * @property {module:model/PatchComment}
     */
    PatchComment: PatchComment,
    /**
     * The PatchOperation model constructor.
     * @property {module:model/PatchOperation}
     */
    PatchOperation: PatchOperation,
    /**
     * The Policy model constructor.
     * @property {module:model/Policy}
     */
    Policy: Policy,
    /**
     * The Prerequisite model constructor.
     * @property {module:model/Prerequisite}
     */
    Prerequisite: Prerequisite,
    /**
     * The Project model constructor.
     * @property {module:model/Project}
     */
    Project: Project,
    /**
     * The ProjectBody model constructor.
     * @property {module:model/ProjectBody}
     */
    ProjectBody: ProjectBody,
    /**
     * The Projects model constructor.
     * @property {module:model/Projects}
     */
    Projects: Projects,
    /**
     * The Role model constructor.
     * @property {module:model/Role}
     */
    Role: Role,
    /**
     * The Rollout model constructor.
     * @property {module:model/Rollout}
     */
    Rollout: Rollout,
    /**
     * The Rule model constructor.
     * @property {module:model/Rule}
     */
    Rule: Rule,
    /**
     * The Site model constructor.
     * @property {module:model/Site}
     */
    Site: Site,
    /**
     * The Statement model constructor.
     * @property {module:model/Statement}
     */
    Statement: Statement,
    /**
     * The Stream model constructor.
     * @property {module:model/Stream}
     */
    Stream: Stream,
    /**
     * The StreamBySDK model constructor.
     * @property {module:model/StreamBySDK}
     */
    StreamBySDK: StreamBySDK,
    /**
     * The StreamBySDKLinks model constructor.
     * @property {module:model/StreamBySDKLinks}
     */
    StreamBySDKLinks: StreamBySDKLinks,
    /**
     * The StreamBySDKLinksMetadata model constructor.
     * @property {module:model/StreamBySDKLinksMetadata}
     */
    StreamBySDKLinksMetadata: StreamBySDKLinksMetadata,
    /**
     * The StreamLinks model constructor.
     * @property {module:model/StreamLinks}
     */
    StreamLinks: StreamLinks,
    /**
     * The StreamSDKVersion model constructor.
     * @property {module:model/StreamSDKVersion}
     */
    StreamSDKVersion: StreamSDKVersion,
    /**
     * The StreamSDKVersionData model constructor.
     * @property {module:model/StreamSDKVersionData}
     */
    StreamSDKVersionData: StreamSDKVersionData,
    /**
     * The StreamUsageError model constructor.
     * @property {module:model/StreamUsageError}
     */
    StreamUsageError: StreamUsageError,
    /**
     * The StreamUsageLinks model constructor.
     * @property {module:model/StreamUsageLinks}
     */
    StreamUsageLinks: StreamUsageLinks,
    /**
     * The StreamUsageMetadata model constructor.
     * @property {module:model/StreamUsageMetadata}
     */
    StreamUsageMetadata: StreamUsageMetadata,
    /**
     * The StreamUsageSeries model constructor.
     * @property {module:model/StreamUsageSeries}
     */
    StreamUsageSeries: StreamUsageSeries,
    /**
     * The Streams model constructor.
     * @property {module:model/Streams}
     */
    Streams: Streams,
    /**
     * The Target model constructor.
     * @property {module:model/Target}
     */
    Target: Target,
    /**
     * The Usage model constructor.
     * @property {module:model/Usage}
     */
    Usage: Usage,
    /**
     * The UsageError model constructor.
     * @property {module:model/UsageError}
     */
    UsageError: UsageError,
    /**
     * The UsageLinks model constructor.
     * @property {module:model/UsageLinks}
     */
    UsageLinks: UsageLinks,
    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User: User,
    /**
     * The UserFlagSetting model constructor.
     * @property {module:model/UserFlagSetting}
     */
    UserFlagSetting: UserFlagSetting,
    /**
     * The UserFlagSettings model constructor.
     * @property {module:model/UserFlagSettings}
     */
    UserFlagSettings: UserFlagSettings,
    /**
     * The UserRecord model constructor.
     * @property {module:model/UserRecord}
     */
    UserRecord: UserRecord,
    /**
     * The UserSegment model constructor.
     * @property {module:model/UserSegment}
     */
    UserSegment: UserSegment,
    /**
     * The UserSegmentBody model constructor.
     * @property {module:model/UserSegmentBody}
     */
    UserSegmentBody: UserSegmentBody,
    /**
     * The UserSegmentRule model constructor.
     * @property {module:model/UserSegmentRule}
     */
    UserSegmentRule: UserSegmentRule,
    /**
     * The UserSegments model constructor.
     * @property {module:model/UserSegments}
     */
    UserSegments: UserSegments,
    /**
     * The UserSettingsBody model constructor.
     * @property {module:model/UserSettingsBody}
     */
    UserSettingsBody: UserSettingsBody,
    /**
     * The Users model constructor.
     * @property {module:model/Users}
     */
    Users: Users,
    /**
     * The Variation model constructor.
     * @property {module:model/Variation}
     */
    Variation: Variation,
    /**
     * The Webhook model constructor.
     * @property {module:model/Webhook}
     */
    Webhook: Webhook,
    /**
     * The WebhookBody model constructor.
     * @property {module:model/WebhookBody}
     */
    WebhookBody: WebhookBody,
    /**
     * The Webhooks model constructor.
     * @property {module:model/Webhooks}
     */
    Webhooks: Webhooks,
    /**
     * The WeightedVariation model constructor.
     * @property {module:model/WeightedVariation}
     */
    WeightedVariation: WeightedVariation,
    /**
     * The AuditLogApi service constructor.
     * @property {module:api/AuditLogApi}
     */
    AuditLogApi: AuditLogApi,
    /**
     * The CustomRolesApi service constructor.
     * @property {module:api/CustomRolesApi}
     */
    CustomRolesApi: CustomRolesApi,
    /**
     * The CustomerMetricsApi service constructor.
     * @property {module:api/CustomerMetricsApi}
     */
    CustomerMetricsApi: CustomerMetricsApi,
    /**
     * The DataExportDestinationsApi service constructor.
     * @property {module:api/DataExportDestinationsApi}
     */
    DataExportDestinationsApi: DataExportDestinationsApi,
    /**
     * The EnvironmentsApi service constructor.
     * @property {module:api/EnvironmentsApi}
     */
    EnvironmentsApi: EnvironmentsApi,
    /**
     * The FeatureFlagsApi service constructor.
     * @property {module:api/FeatureFlagsApi}
     */
    FeatureFlagsApi: FeatureFlagsApi,
    /**
     * The ProjectsApi service constructor.
     * @property {module:api/ProjectsApi}
     */
    ProjectsApi: ProjectsApi,
    /**
     * The RootApi service constructor.
     * @property {module:api/RootApi}
     */
    RootApi: RootApi,
    /**
     * The TeamMembersApi service constructor.
     * @property {module:api/TeamMembersApi}
     */
    TeamMembersApi: TeamMembersApi,
    /**
     * The UserSegmentsApi service constructor.
     * @property {module:api/UserSegmentsApi}
     */
    UserSegmentsApi: UserSegmentsApi,
    /**
     * The UserSettingsApi service constructor.
     * @property {module:api/UserSettingsApi}
     */
    UserSettingsApi: UserSettingsApi,
    /**
     * The UsersApi service constructor.
     * @property {module:api/UsersApi}
     */
    UsersApi: UsersApi,
    /**
     * The WebhooksApi service constructor.
     * @property {module:api/WebhooksApi}
     */
    WebhooksApi: WebhooksApi
  };

  return exports;
}));
