/*
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 5.0.2
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
    define(['ApiClient', 'model/SemanticPatchInstruction'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SemanticPatchInstruction'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.FeatureFlagScheduledChange = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.SemanticPatchInstruction);
  }
}(this, function(ApiClient, SemanticPatchInstruction) {
  'use strict';

  /**
   * The FeatureFlagScheduledChange model module.
   * @module model/FeatureFlagScheduledChange
   * @version 5.0.2
   */

  /**
   * Constructs a new <code>FeatureFlagScheduledChange</code>.
   * @alias module:model/FeatureFlagScheduledChange
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>FeatureFlagScheduledChange</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FeatureFlagScheduledChange} obj Optional instance to populate.
   * @return {module:model/FeatureFlagScheduledChange} The populated <code>FeatureFlagScheduledChange</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('executionDate'))
        obj.executionDate = ApiClient.convertToType(data['executionDate'], 'Number');
      if (data.hasOwnProperty('_version'))
        obj.version = ApiClient.convertToType(data['_version'], 'Number');
      if (data.hasOwnProperty('_id'))
        obj.id = ApiClient.convertToType(data['_id'], 'String');
      if (data.hasOwnProperty('instructions'))
        obj.instructions = SemanticPatchInstruction.constructFromObject(data['instructions']);
    }
    return obj;
  }

  /**
   * A unix epoch time in milliseconds specifying the date the scheduled changes will be applied
   * @member {Number} executionDate
   */
  exports.prototype.executionDate = undefined;

  /**
   * @member {Number} version
   */
  exports.prototype.version = undefined;

  /**
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {module:model/SemanticPatchInstruction} instructions
   */
  exports.prototype.instructions = undefined;

  return exports;

}));
