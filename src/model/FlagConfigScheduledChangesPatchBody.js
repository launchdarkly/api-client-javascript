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
    define(['ApiClient', 'model/SemanticPatchInstruction'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SemanticPatchInstruction'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.FlagConfigScheduledChangesPatchBody = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.SemanticPatchInstruction);
  }
}(this, function(ApiClient, SemanticPatchInstruction) {
  'use strict';

  /**
   * The FlagConfigScheduledChangesPatchBody model module.
   * @module model/FlagConfigScheduledChangesPatchBody
   * @version 5.0.3
   */

  /**
   * Constructs a new <code>FlagConfigScheduledChangesPatchBody</code>.
   * @alias module:model/FlagConfigScheduledChangesPatchBody
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>FlagConfigScheduledChangesPatchBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FlagConfigScheduledChangesPatchBody} obj Optional instance to populate.
   * @return {module:model/FlagConfigScheduledChangesPatchBody} The populated <code>FlagConfigScheduledChangesPatchBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('comment'))
        obj.comment = ApiClient.convertToType(data['comment'], 'String');
      if (data.hasOwnProperty('instructions'))
        obj.instructions = SemanticPatchInstruction.constructFromObject(data['instructions']);
    }
    return obj;
  }

  /**
   * Used to describe the scheduled changes.
   * @member {String} comment
   */
  exports.prototype.comment = undefined;

  /**
   * @member {module:model/SemanticPatchInstruction} instructions
   */
  exports.prototype.instructions = undefined;

  return exports;

}));
