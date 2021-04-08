/*
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 5.0.3
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
    root.LaunchDarklyApi.IntegrationSubscriptionStatus = factory(root.LaunchDarklyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The IntegrationSubscriptionStatus model module.
   * @module model/IntegrationSubscriptionStatus
   * @version 5.0.3
   */

  /**
   * Constructs a new <code>IntegrationSubscriptionStatus</code>.
   * @alias module:model/IntegrationSubscriptionStatus
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>IntegrationSubscriptionStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IntegrationSubscriptionStatus} obj Optional instance to populate.
   * @return {module:model/IntegrationSubscriptionStatus} The populated <code>IntegrationSubscriptionStatus</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('successCount'))
        obj.successCount = ApiClient.convertToType(data['successCount'], 'Number');
      if (data.hasOwnProperty('lastSuccess'))
        obj.lastSuccess = ApiClient.convertToType(data['lastSuccess'], 'Number');
      if (data.hasOwnProperty('errorCount'))
        obj.errorCount = ApiClient.convertToType(data['errorCount'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} successCount
   */
  exports.prototype.successCount = undefined;

  /**
   * A unix epoch time in milliseconds specifying the last time this integration was successfully used.
   * @member {Number} lastSuccess
   */
  exports.prototype.lastSuccess = undefined;

  /**
   * @member {Number} errorCount
   */
  exports.prototype.errorCount = undefined;

  return exports;

}));
