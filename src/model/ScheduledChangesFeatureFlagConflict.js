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
    root.LaunchDarklyApi.ScheduledChangesFeatureFlagConflict = factory(root.LaunchDarklyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ScheduledChangesFeatureFlagConflict model module.
   * @module model/ScheduledChangesFeatureFlagConflict
   * @version 5.0.3
   */

  /**
   * Constructs a new <code>ScheduledChangesFeatureFlagConflict</code>.
   * @alias module:model/ScheduledChangesFeatureFlagConflict
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ScheduledChangesFeatureFlagConflict</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ScheduledChangesFeatureFlagConflict} obj Optional instance to populate.
   * @return {module:model/ScheduledChangesFeatureFlagConflict} The populated <code>ScheduledChangesFeatureFlagConflict</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('_id'))
        obj.id = ApiClient.convertToType(data['_id'], 'String');
      if (data.hasOwnProperty('reason'))
        obj.reason = ApiClient.convertToType(data['reason'], 'String');
    }
    return obj;
  }

  /**
   * Feature flag scheduled change id this change will conflict with
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * Feature flag scheduled change conflict reason
   * @member {String} reason
   */
  exports.prototype.reason = undefined;

  return exports;

}));
