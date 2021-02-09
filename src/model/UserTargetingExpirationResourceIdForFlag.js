/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 5.0.0
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
    root.LaunchDarklyApi.UserTargetingExpirationResourceIdForFlag = factory(root.LaunchDarklyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UserTargetingExpirationResourceIdForFlag model module.
   * @module model/UserTargetingExpirationResourceIdForFlag
   * @version 5.0.0
   */

  /**
   * Constructs a new <code>UserTargetingExpirationResourceIdForFlag</code>.
   * @alias module:model/UserTargetingExpirationResourceIdForFlag
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>UserTargetingExpirationResourceIdForFlag</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserTargetingExpirationResourceIdForFlag} obj Optional instance to populate.
   * @return {module:model/UserTargetingExpirationResourceIdForFlag} The populated <code>UserTargetingExpirationResourceIdForFlag</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('kind')) {
        obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
      }
      if (data.hasOwnProperty('projectKey')) {
        obj['projectKey'] = ApiClient.convertToType(data['projectKey'], 'String');
      }
      if (data.hasOwnProperty('environmentKey')) {
        obj['environmentKey'] = ApiClient.convertToType(data['environmentKey'], 'String');
      }
      if (data.hasOwnProperty('flagKey')) {
        obj['flagKey'] = ApiClient.convertToType(data['flagKey'], 'String');
      }
      if (data.hasOwnProperty('key')) {
        obj['key'] = ApiClient.convertToType(data['key'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} kind
   */
  exports.prototype['kind'] = undefined;
  /**
   * @member {String} projectKey
   */
  exports.prototype['projectKey'] = undefined;
  /**
   * @member {String} environmentKey
   */
  exports.prototype['environmentKey'] = undefined;
  /**
   * @member {String} flagKey
   */
  exports.prototype['flagKey'] = undefined;
  /**
   * @member {String} key
   */
  exports.prototype['key'] = undefined;



  return exports;
}));


