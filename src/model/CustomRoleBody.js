/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 3.7.0
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
    define(['ApiClient', 'model/Policy'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Policy'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.CustomRoleBody = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.Policy);
  }
}(this, function(ApiClient, Policy) {
  'use strict';




  /**
   * The CustomRoleBody model module.
   * @module model/CustomRoleBody
   * @version 3.7.0
   */

  /**
   * Constructs a new <code>CustomRoleBody</code>.
   * @alias module:model/CustomRoleBody
   * @class
   * @param name {String} Name of the custom role.
   * @param key {String} The 20-hexdigit id or the key for a custom role.
   * @param policy {Array.<module:model/Policy>} 
   */
  var exports = function(name, key, policy) {
    var _this = this;

    _this['name'] = name;

    _this['key'] = key;
    _this['policy'] = policy;
  };

  /**
   * Constructs a <code>CustomRoleBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CustomRoleBody} obj Optional instance to populate.
   * @return {module:model/CustomRoleBody} The populated <code>CustomRoleBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('key')) {
        obj['key'] = ApiClient.convertToType(data['key'], 'String');
      }
      if (data.hasOwnProperty('policy')) {
        obj['policy'] = ApiClient.convertToType(data['policy'], [Policy]);
      }
    }
    return obj;
  }

  /**
   * Name of the custom role.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Description of the custom role.
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * The 20-hexdigit id or the key for a custom role.
   * @member {String} key
   */
  exports.prototype['key'] = undefined;
  /**
   * @member {Array.<module:model/Policy>} policy
   */
  exports.prototype['policy'] = undefined;



  return exports;
}));


