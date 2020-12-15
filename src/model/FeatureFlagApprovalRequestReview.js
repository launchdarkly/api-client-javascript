/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 4.0.0
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
    define(['ApiClient', 'model/FeatureFlagApprovalRequestReviewStatus', 'model/Id'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FeatureFlagApprovalRequestReviewStatus'), require('./Id'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.FeatureFlagApprovalRequestReview = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.FeatureFlagApprovalRequestReviewStatus, root.LaunchDarklyApi.Id);
  }
}(this, function(ApiClient, FeatureFlagApprovalRequestReviewStatus, Id) {
  'use strict';




  /**
   * The FeatureFlagApprovalRequestReview model module.
   * @module model/FeatureFlagApprovalRequestReview
   * @version 4.0.0
   */

  /**
   * Constructs a new <code>FeatureFlagApprovalRequestReview</code>.
   * @alias module:model/FeatureFlagApprovalRequestReview
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>FeatureFlagApprovalRequestReview</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FeatureFlagApprovalRequestReview} obj Optional instance to populate.
   * @return {module:model/FeatureFlagApprovalRequestReview} The populated <code>FeatureFlagApprovalRequestReview</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('creationDate')) {
        obj['creationDate'] = ApiClient.convertToType(data['creationDate'], 'Number');
      }
      if (data.hasOwnProperty('kind')) {
        obj['kind'] = FeatureFlagApprovalRequestReviewStatus.constructFromObject(data['kind']);
      }
      if (data.hasOwnProperty('memberId')) {
        obj['memberId'] = Id.constructFromObject(data['memberId']);
      }
      if (data.hasOwnProperty('_id')) {
        obj['_id'] = Id.constructFromObject(data['_id']);
      }
    }
    return obj;
  }

  /**
   * A unix epoch time in milliseconds specifying the date the approval request was reviewed
   * @member {Number} creationDate
   */
  exports.prototype['creationDate'] = undefined;
  /**
   * @member {module:model/FeatureFlagApprovalRequestReviewStatus} kind
   */
  exports.prototype['kind'] = undefined;
  /**
   * @member {module:model/Id} memberId
   */
  exports.prototype['memberId'] = undefined;
  /**
   * @member {module:model/Id} _id
   */
  exports.prototype['_id'] = undefined;



  return exports;
}));

