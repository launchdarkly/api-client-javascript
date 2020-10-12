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
    define(['ApiClient', 'model/FeatureFlagScheduledChangesConflictsInstructions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FeatureFlagScheduledChangesConflictsInstructions'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.FeatureFlagScheduledChangesConflicts = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.FeatureFlagScheduledChangesConflictsInstructions);
  }
}(this, function(ApiClient, FeatureFlagScheduledChangesConflictsInstructions) {
  'use strict';




  /**
   * The FeatureFlagScheduledChangesConflicts model module.
   * @module model/FeatureFlagScheduledChangesConflicts
   * @version 3.7.0
   */

  /**
   * Constructs a new <code>FeatureFlagScheduledChangesConflicts</code>.
   * @alias module:model/FeatureFlagScheduledChangesConflicts
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>FeatureFlagScheduledChangesConflicts</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FeatureFlagScheduledChangesConflicts} obj Optional instance to populate.
   * @return {module:model/FeatureFlagScheduledChangesConflicts} The populated <code>FeatureFlagScheduledChangesConflicts</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('instructions')) {
        obj['instructions'] = ApiClient.convertToType(data['instructions'], [FeatureFlagScheduledChangesConflictsInstructions]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/FeatureFlagScheduledChangesConflictsInstructions>} instructions
   */
  exports.prototype['instructions'] = undefined;



  return exports;
}));


