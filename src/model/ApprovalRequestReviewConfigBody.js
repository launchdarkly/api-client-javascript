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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.ApprovalRequestReviewConfigBody = factory(root.LaunchDarklyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ApprovalRequestReviewConfigBody model module.
   * @module model/ApprovalRequestReviewConfigBody
   * @version 5.3.0
   */

  /**
   * Constructs a new <code>ApprovalRequestReviewConfigBody</code>.
   * @alias module:model/ApprovalRequestReviewConfigBody
   * @class
   * @param kind {module:model/ApprovalRequestReviewConfigBody.KindEnum} One of approve, decline, or comment.
   */
  var exports = function(kind) {
    this.kind = kind;
  };

  /**
   * Constructs a <code>ApprovalRequestReviewConfigBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApprovalRequestReviewConfigBody} obj Optional instance to populate.
   * @return {module:model/ApprovalRequestReviewConfigBody} The populated <code>ApprovalRequestReviewConfigBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('kind'))
        obj.kind = ApiClient.convertToType(data['kind'], 'String');
      if (data.hasOwnProperty('comment'))
        obj.comment = ApiClient.convertToType(data['comment'], 'String');
    }
    return obj;
  }

  /**
   * One of approve, decline, or comment.
   * @member {module:model/ApprovalRequestReviewConfigBody.KindEnum} kind
   */
  exports.prototype.kind = undefined;

  /**
   * comment will be included in audit log item for change.
   * @member {String} comment
   */
  exports.prototype.comment = undefined;


  /**
   * Allowed values for the <code>kind</code> property.
   * @enum {String}
   * @readonly
   */
  exports.KindEnum = {
    /**
     * value: "approve"
     * @const
     */
    approve: "approve",

    /**
     * value: "decline"
     * @const
     */
    decline: "decline",

    /**
     * value: "comment"
     * @const
     */
    comment: "comment"
  };

  return exports;

}));
