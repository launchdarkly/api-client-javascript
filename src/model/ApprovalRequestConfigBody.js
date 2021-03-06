/*
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 5.3.0
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
    root.LaunchDarklyApi.ApprovalRequestConfigBody = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.SemanticPatchInstruction);
  }
}(this, function(ApiClient, SemanticPatchInstruction) {
  'use strict';

  /**
   * The ApprovalRequestConfigBody model module.
   * @module model/ApprovalRequestConfigBody
   * @version 5.3.0
   */

  /**
   * Constructs a new <code>ApprovalRequestConfigBody</code>.
   * @alias module:model/ApprovalRequestConfigBody
   * @class
   * @param description {String} A name that describes the changes you would like to apply to a feature flag configuration
   * @param instructions {module:model/SemanticPatchInstruction} 
   * @param notifyMemberIds {Array.<String>} 
   */
  var exports = function(description, instructions, notifyMemberIds) {
    this.description = description;
    this.instructions = instructions;
    this.notifyMemberIds = notifyMemberIds;
  };

  /**
   * Constructs a <code>ApprovalRequestConfigBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApprovalRequestConfigBody} obj Optional instance to populate.
   * @return {module:model/ApprovalRequestConfigBody} The populated <code>ApprovalRequestConfigBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('instructions'))
        obj.instructions = SemanticPatchInstruction.constructFromObject(data['instructions']);
      if (data.hasOwnProperty('notifyMemberIds'))
        obj.notifyMemberIds = ApiClient.convertToType(data['notifyMemberIds'], ['String']);
      if (data.hasOwnProperty('comment'))
        obj.comment = ApiClient.convertToType(data['comment'], 'String');
      if (data.hasOwnProperty('executionDate'))
        obj.executionDate = ApiClient.convertToType(data['executionDate'], 'Number');
      if (data.hasOwnProperty('operatingOnId'))
        obj.operatingOnId = ApiClient.convertToType(data['operatingOnId'], 'String');
    }
    return obj;
  }

  /**
   * A name that describes the changes you would like to apply to a feature flag configuration
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * @member {module:model/SemanticPatchInstruction} instructions
   */
  exports.prototype.instructions = undefined;

  /**
   * @member {Array.<String>} notifyMemberIds
   */
  exports.prototype.notifyMemberIds = undefined;

  /**
   * comment will be included in audit log item for change.
   * @member {String} comment
   */
  exports.prototype.comment = undefined;

  /**
   * Timestamp for when instructions will be executed
   * @member {Number} executionDate
   */
  exports.prototype.executionDate = undefined;

  /**
   * ID of scheduled change to edit or delete
   * @member {String} operatingOnId
   */
  exports.prototype.operatingOnId = undefined;

  return exports;

}));
