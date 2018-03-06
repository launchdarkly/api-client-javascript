/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 1.0.7
 * Contact: support@launchdarkly.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
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
    if (!root.LaunchDarklyRestApi) {
      root.LaunchDarklyRestApi = {};
    }
    root.LaunchDarklyRestApi.EnvironmentBody = factory(root.LaunchDarklyRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The EnvironmentBody model module.
   * @module model/EnvironmentBody
   * @version 1.0.7
   */

  /**
   * Constructs a new <code>EnvironmentBody</code>.
   * @alias module:model/EnvironmentBody
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
   * Constructs a <code>EnvironmentBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EnvironmentBody} obj Optional instance to populate.
   * @return {module:model/EnvironmentBody} The populated <code>EnvironmentBody</code> instance.
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



  return exports;
}));


