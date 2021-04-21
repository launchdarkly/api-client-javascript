/*
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 5.1.0
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
    root.LaunchDarklyApi.FlagConfigScheduledChangesConflictsBody = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.SemanticPatchInstruction);
  }
}(this, function(ApiClient, SemanticPatchInstruction) {
  'use strict';

  /**
   * The FlagConfigScheduledChangesConflictsBody model module.
   * @module model/FlagConfigScheduledChangesConflictsBody
   * @version 5.1.0
   */

  /**
   * Constructs a new <code>FlagConfigScheduledChangesConflictsBody</code>.
   * @alias module:model/FlagConfigScheduledChangesConflictsBody
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>FlagConfigScheduledChangesConflictsBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FlagConfigScheduledChangesConflictsBody} obj Optional instance to populate.
   * @return {module:model/FlagConfigScheduledChangesConflictsBody} The populated <code>FlagConfigScheduledChangesConflictsBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('executionDate'))
        obj.executionDate = ApiClient.convertToType(data['executionDate'], 'Number');
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
   * @member {module:model/SemanticPatchInstruction} instructions
   */
  exports.prototype.instructions = undefined;

  return exports;

}));
