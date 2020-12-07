/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 3.10.0
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
    define(['ApiClient', 'model/ScheduledChangesFeatureFlagConflict'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ScheduledChangesFeatureFlagConflict'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.FeatureFlagScheduledChangesConflictsInstructions = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.ScheduledChangesFeatureFlagConflict);
  }
}(this, function(ApiClient, ScheduledChangesFeatureFlagConflict) {
  'use strict';




  /**
   * The FeatureFlagScheduledChangesConflictsInstructions model module.
   * @module model/FeatureFlagScheduledChangesConflictsInstructions
   * @version 3.10.0
   */

  /**
   * Constructs a new <code>FeatureFlagScheduledChangesConflictsInstructions</code>.
   * @alias module:model/FeatureFlagScheduledChangesConflictsInstructions
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>FeatureFlagScheduledChangesConflictsInstructions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FeatureFlagScheduledChangesConflictsInstructions} obj Optional instance to populate.
   * @return {module:model/FeatureFlagScheduledChangesConflictsInstructions} The populated <code>FeatureFlagScheduledChangesConflictsInstructions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('kind')) {
        obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
      }
      if (data.hasOwnProperty('conflicts')) {
        obj['conflicts'] = ApiClient.convertToType(data['conflicts'], [ScheduledChangesFeatureFlagConflict]);
      }
    }
    return obj;
  }

  /**
   * The name of the modification you would like to perform on a resource.
   * @member {String} kind
   */
  exports.prototype['kind'] = undefined;
  /**
   * @member {Array.<module:model/ScheduledChangesFeatureFlagConflict>} conflicts
   */
  exports.prototype['conflicts'] = undefined;



  return exports;
}));


