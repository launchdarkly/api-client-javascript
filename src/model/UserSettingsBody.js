/*
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 5.3.0
 * Contact: support@launchdarkly.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.17
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
    root.LaunchDarklyApi.UserSettingsBody = factory(root.LaunchDarklyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UserSettingsBody model module.
   * @module model/UserSettingsBody
   * @version 5.3.0
   */

  /**
   * Constructs a new <code>UserSettingsBody</code>.
   * @alias module:model/UserSettingsBody
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>UserSettingsBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserSettingsBody} obj Optional instance to populate.
   * @return {module:model/UserSettingsBody} The populated <code>UserSettingsBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('setting'))
        obj.setting = ApiClient.convertToType(data['setting'], 'Boolean');
    }
    return obj;
  }

  /**
   * The variation value to set for the user. Must match the variation type of the flag. 
   * @member {Boolean} setting
   */
  exports.prototype.setting = undefined;

  return exports;

}));
