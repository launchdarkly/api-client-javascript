/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 5.0.1
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.EnvironmentPost = factory(root.LaunchDarklyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The EnvironmentPost model module.
   * @module model/EnvironmentPost
   * @version 5.0.1
   */

  /**
   * Constructs a new <code>EnvironmentPost</code>.
   * @alias module:model/EnvironmentPost
   * @class
   * @param name {String} The name of the new environment.
   * @param key {String} A project-unique key for the new environment.
   * @param color {String} A color swatch (as an RGB hex value with no leading '#', e.g. C8C8C8).
   */
  var exports = function(name, key, color) {
    var _this = this;

    _this['name'] = name;
    _this['key'] = key;
    _this['color'] = color;






  };

  /**
   * Constructs a <code>EnvironmentPost</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EnvironmentPost} obj Optional instance to populate.
   * @return {module:model/EnvironmentPost} The populated <code>EnvironmentPost</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('key')) {
        obj['key'] = ApiClient.convertToType(data['key'], 'String');
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
   * The name of the new environment.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * A project-unique key for the new environment.
   * @member {String} key
   */
  exports.prototype['key'] = undefined;
  /**
   * A color swatch (as an RGB hex value with no leading '#', e.g. C8C8C8).
   * @member {String} color
   */
  exports.prototype['color'] = undefined;
  /**
   * The default TTL for the new environment.
   * @member {Number} defaultTtl
   */
  exports.prototype['defaultTtl'] = undefined;
  /**
   * Determines whether the environment is in secure mode.
   * @member {Boolean} secureMode
   */
  exports.prototype['secureMode'] = undefined;
  /**
   * Set to true to send detailed event information for newly created flags.
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


