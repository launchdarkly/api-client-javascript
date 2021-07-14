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
    define(['ApiClient', 'model/ApprovalRequestReviewStatus', 'model/Id'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ApprovalRequestReviewStatus'), require('./Id'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.ApprovalRequestReview = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.ApprovalRequestReviewStatus, root.LaunchDarklyApi.Id);
  }
}(this, function(ApiClient, ApprovalRequestReviewStatus, Id) {
  'use strict';

  /**
   * The ApprovalRequestReview model module.
   * @module model/ApprovalRequestReview
   * @version 5.3.0
   */

  /**
   * Constructs a new <code>ApprovalRequestReview</code>.
   * @alias module:model/ApprovalRequestReview
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ApprovalRequestReview</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApprovalRequestReview} obj Optional instance to populate.
   * @return {module:model/ApprovalRequestReview} The populated <code>ApprovalRequestReview</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('creationDate'))
        obj.creationDate = ApiClient.convertToType(data['creationDate'], 'Number');
      if (data.hasOwnProperty('kind'))
        obj.kind = ApprovalRequestReviewStatus.constructFromObject(data['kind']);
      if (data.hasOwnProperty('memberId'))
        obj.memberId = Id.constructFromObject(data['memberId']);
      if (data.hasOwnProperty('_id'))
        obj.id = Id.constructFromObject(data['_id']);
    }
    return obj;
  }

  /**
   * A unix epoch time in milliseconds specifying the date the approval request was reviewed
   * @member {Number} creationDate
   */
  exports.prototype.creationDate = undefined;

  /**
   * @member {module:model/ApprovalRequestReviewStatus} kind
   */
  exports.prototype.kind = undefined;

  /**
   * @member {module:model/Id} memberId
   */
  exports.prototype.memberId = undefined;

  /**
   * @member {module:model/Id} id
   */
  exports.prototype.id = undefined;

  return exports;

}));
