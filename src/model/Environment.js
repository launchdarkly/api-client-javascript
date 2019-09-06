/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 2.0.15
 * Contact: support@launchdarkly.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Id', 'model/Links'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Id'), require('./Links'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.Environment = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.Id, root.LaunchDarklyApi.Links);
  }
}(this, function(ApiClient, Id, Links) {
  'use strict';




  /**
   * The Environment model module.
   * @module model/Environment
   * @version 2.0.15
   */

  /**
   * Constructs a new <code>Environment</code>.
   * @alias module:model/Environment
   * @class
   */
  var exports = function() {
    var _this = this;














  };

  /**
   * Constructs a <code>Environment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Environment} obj Optional instance to populate.
   * @return {module:model/Environment} The populated <code>Environment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('_links')) {
        obj['_links'] = Links.constructFromObject(data['_links']);
      }
      if (data.hasOwnProperty('_id')) {
        obj['_id'] = Id.constructFromObject(data['_id']);
      }
      if (data.hasOwnProperty('key')) {
        obj['key'] = ApiClient.convertToType(data['key'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('apiKey')) {
        obj['apiKey'] = ApiClient.convertToType(data['apiKey'], 'String');
      }
      if (data.hasOwnProperty('mobileKey')) {
        obj['mobileKey'] = ApiClient.convertToType(data['mobileKey'], 'String');
      }
      if (data.hasOwnProperty('color')) {
        obj['color'] = ApiClient.convertToType(data['color'], 'String');
      }
      if (data.hasOwnProperty('defaultTtl')) {
        obj['defaultTtl'] = ApiClient.convertToType(data['defaultTtl'], 'Number');
      }
      if (data.hasOwnProperty('secureMode')) {
        obj['secureMode'] = ApiClient.convertToType(data['secureMode'], 'Boolean');
      }
      if (data.hasOwnProperty('defaultTrackEvents')) {
        obj['defaultTrackEvents'] = ApiClient.convertToType(data['defaultTrackEvents'], 'Boolean');
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
      }
      if (data.hasOwnProperty('requireComments')) {
        obj['requireComments'] = ApiClient.convertToType(data['requireComments'], 'Boolean');
      }
      if (data.hasOwnProperty('confirmChanges')) {
        obj['confirmChanges'] = ApiClient.convertToType(data['confirmChanges'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Links} _links
   */
  exports.prototype['_links'] = undefined;
  /**
   * @member {module:model/Id} _id
   */
  exports.prototype['_id'] = undefined;
  /**
   * The key for the environment.
   * @member {String} key
   */
  exports.prototype['key'] = undefined;
  /**
   * The name of the environment.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The SDK key for backend LaunchDarkly SDKs.
   * @member {String} apiKey
   */
  exports.prototype['apiKey'] = undefined;
  /**
   * The SDK key for mobile LaunchDarkly SDKs.
   * @member {String} mobileKey
   */
  exports.prototype['mobileKey'] = undefined;
  /**
   * The swatch color for the environment.
   * @member {String} color
   */
  exports.prototype['color'] = undefined;
  /**
   * The default TTL.
   * @member {Number} defaultTtl
   */
  exports.prototype['defaultTtl'] = undefined;
  /**
   * Determines if this environment is in safe mode.
   * @member {Boolean} secureMode
   */
  exports.prototype['secureMode'] = undefined;
  /**
   * Set to true to send detailed event information for new flags.
   * @member {Boolean} defaultTrackEvents
   */
  exports.prototype['defaultTrackEvents'] = undefined;
  /**
   * An array of tags for this environment.
   * @member {Array.<String>} tags
   */
  exports.prototype['tags'] = undefined;
  /**
   * Determines if this environment requires comments for flag and segment changes.
   * @member {Boolean} requireComments
   */
  exports.prototype['requireComments'] = undefined;
  /**
   * Determines if this environment requires confirmation for flag and segment changes.
   * @member {Boolean} confirmChanges
   */
  exports.prototype['confirmChanges'] = undefined;



  return exports;
}));


