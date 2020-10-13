/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 3.7.1
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
    define(['ApiClient', 'model/Links'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Links'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.UserFlagSetting = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.Links);
  }
}(this, function(ApiClient, Links) {
  'use strict';




  /**
   * The UserFlagSetting model module.
   * @module model/UserFlagSetting
   * @version 3.7.1
   */

  /**
   * Constructs a new <code>UserFlagSetting</code>.
   * @alias module:model/UserFlagSetting
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>UserFlagSetting</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserFlagSetting} obj Optional instance to populate.
   * @return {module:model/UserFlagSetting} The populated <code>UserFlagSetting</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('_links')) {
        obj['_links'] = Links.constructFromObject(data['_links']);
      }
      if (data.hasOwnProperty('_value')) {
        obj['_value'] = ApiClient.convertToType(data['_value'], 'Boolean');
      }
      if (data.hasOwnProperty('setting')) {
        obj['setting'] = ApiClient.convertToType(data['setting'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Links} _links
   */
  exports.prototype['_links'] = undefined;
  /**
   * The most important attribute in the response. The _value is the current setting for the user. For a boolean feature toggle, this will be true, false, or null if there is no defined fallthrough value.
   * @member {Boolean} _value
   */
  exports.prototype['_value'] = undefined;
  /**
   * The setting attribute indicates whether you've explicitly targeted this user to receive a particular variation. For example, if you have explicitly turned off a feature toggle for a user, setting will be false. A setting of null means that you haven't assigned that user to a specific variation.
   * @member {Boolean} setting
   */
  exports.prototype['setting'] = undefined;



  return exports;
}));


