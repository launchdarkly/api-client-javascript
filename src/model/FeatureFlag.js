/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 3.3.2
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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CustomProperty', 'model/Defaults', 'model/FeatureFlagConfig', 'model/Links', 'model/Member', 'model/Variation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CustomProperty'), require('./Defaults'), require('./FeatureFlagConfig'), require('./Links'), require('./Member'), require('./Variation'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.FeatureFlag = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.CustomProperty, root.LaunchDarklyApi.Defaults, root.LaunchDarklyApi.FeatureFlagConfig, root.LaunchDarklyApi.Links, root.LaunchDarklyApi.Member, root.LaunchDarklyApi.Variation);
  }
}(this, function(ApiClient, CustomProperty, Defaults, FeatureFlagConfig, Links, Member, Variation) {
  'use strict';




  /**
   * The FeatureFlag model module.
   * @module model/FeatureFlag
   * @version 3.3.2
   */

  /**
   * Constructs a new <code>FeatureFlag</code>.
   * @alias module:model/FeatureFlag
   * @class
   */
  var exports = function() {
    var _this = this;




















  };

  /**
   * Constructs a <code>FeatureFlag</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FeatureFlag} obj Optional instance to populate.
   * @return {module:model/FeatureFlag} The populated <code>FeatureFlag</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('key')) {
        obj['key'] = ApiClient.convertToType(data['key'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('kind')) {
        obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
      }
      if (data.hasOwnProperty('creationDate')) {
        obj['creationDate'] = ApiClient.convertToType(data['creationDate'], 'Number');
      }
      if (data.hasOwnProperty('includeInSnippet')) {
        obj['includeInSnippet'] = ApiClient.convertToType(data['includeInSnippet'], 'Boolean');
      }
      if (data.hasOwnProperty('temporary')) {
        obj['temporary'] = ApiClient.convertToType(data['temporary'], 'Boolean');
      }
      if (data.hasOwnProperty('maintainerId')) {
        obj['maintainerId'] = ApiClient.convertToType(data['maintainerId'], 'String');
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
      }
      if (data.hasOwnProperty('variations')) {
        obj['variations'] = ApiClient.convertToType(data['variations'], [Variation]);
      }
      if (data.hasOwnProperty('goalIds')) {
        obj['goalIds'] = ApiClient.convertToType(data['goalIds'], ['String']);
      }
      if (data.hasOwnProperty('_version')) {
        obj['_version'] = ApiClient.convertToType(data['_version'], 'Number');
      }
      if (data.hasOwnProperty('customProperties')) {
        obj['customProperties'] = ApiClient.convertToType(data['customProperties'], {'String': CustomProperty});
      }
      if (data.hasOwnProperty('_links')) {
        obj['_links'] = Links.constructFromObject(data['_links']);
      }
      if (data.hasOwnProperty('_maintainer')) {
        obj['_maintainer'] = Member.constructFromObject(data['_maintainer']);
      }
      if (data.hasOwnProperty('environments')) {
        obj['environments'] = ApiClient.convertToType(data['environments'], {'String': FeatureFlagConfig});
      }
      if (data.hasOwnProperty('archivedDate')) {
        obj['archivedDate'] = ApiClient.convertToType(data['archivedDate'], 'Number');
      }
      if (data.hasOwnProperty('archived')) {
        obj['archived'] = ApiClient.convertToType(data['archived'], 'Boolean');
      }
      if (data.hasOwnProperty('defaults')) {
        obj['defaults'] = Defaults.constructFromObject(data['defaults']);
      }
    }
    return obj;
  }

  /**
   * @member {String} key
   */
  exports.prototype['key'] = undefined;
  /**
   * Name of the feature flag.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Description of the feature flag.
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * Whether the feature flag is a boolean flag or multivariate.
   * @member {String} kind
   */
  exports.prototype['kind'] = undefined;
  /**
   * A unix epoch time in milliseconds specifying the creation time of this flag.
   * @member {Number} creationDate
   */
  exports.prototype['creationDate'] = undefined;
  /**
   * @member {Boolean} includeInSnippet
   */
  exports.prototype['includeInSnippet'] = undefined;
  /**
   * Whether or not this flag is temporary.
   * @member {Boolean} temporary
   */
  exports.prototype['temporary'] = undefined;
  /**
   * The ID of the member that should maintain this flag.
   * @member {String} maintainerId
   */
  exports.prototype['maintainerId'] = undefined;
  /**
   * An array of tags for this feature flag.
   * @member {Array.<String>} tags
   */
  exports.prototype['tags'] = undefined;
  /**
   * The variations for this feature flag.
   * @member {Array.<module:model/Variation>} variations
   */
  exports.prototype['variations'] = undefined;
  /**
   * An array goals from all environments associated with this feature flag
   * @member {Array.<String>} goalIds
   */
  exports.prototype['goalIds'] = undefined;
  /**
   * @member {Number} _version
   */
  exports.prototype['_version'] = undefined;
  /**
   * A mapping of keys to CustomProperty entries.
   * @member {Object.<String, module:model/CustomProperty>} customProperties
   */
  exports.prototype['customProperties'] = undefined;
  /**
   * @member {module:model/Links} _links
   */
  exports.prototype['_links'] = undefined;
  /**
   * @member {module:model/Member} _maintainer
   */
  exports.prototype['_maintainer'] = undefined;
  /**
   * @member {Object.<String, module:model/FeatureFlagConfig>} environments
   */
  exports.prototype['environments'] = undefined;
  /**
   * A unix epoch time in milliseconds specifying the archived time of this flag.
   * @member {Number} archivedDate
   */
  exports.prototype['archivedDate'] = undefined;
  /**
   * Whether or not this flag is archived.
   * @member {Boolean} archived
   */
  exports.prototype['archived'] = undefined;
  /**
   * @member {module:model/Defaults} defaults
   */
  exports.prototype['defaults'] = undefined;



  return exports;
}));


