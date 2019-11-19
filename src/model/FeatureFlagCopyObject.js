/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 2.0.22
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
    root.LaunchDarklyApi.FeatureFlagCopyObject = factory(root.LaunchDarklyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The FeatureFlagCopyObject model module.
   * @module model/FeatureFlagCopyObject
   * @version 2.0.22
   */

  /**
   * Constructs a new <code>FeatureFlagCopyObject</code>.
   * @alias module:model/FeatureFlagCopyObject
   * @class
   * @param key {String} The environment key to be used.
   */
  var exports = function(key) {
    var _this = this;

    _this['key'] = key;

  };

  /**
   * Constructs a <code>FeatureFlagCopyObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FeatureFlagCopyObject} obj Optional instance to populate.
   * @return {module:model/FeatureFlagCopyObject} The populated <code>FeatureFlagCopyObject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('key')) {
        obj['key'] = ApiClient.convertToType(data['key'], 'String');
      }
      if (data.hasOwnProperty('currentVersion')) {
        obj['currentVersion'] = ApiClient.convertToType(data['currentVersion'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The environment key to be used.
   * @member {String} key
   */
  exports.prototype['key'] = undefined;
  /**
   * If the latest version of the flag matches provided version it will copy, otherwise it will return a conflict.
   * @member {Number} currentVersion
   */
  exports.prototype['currentVersion'] = undefined;



  return exports;
}));


