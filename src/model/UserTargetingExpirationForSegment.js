/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 5.0.1
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
    define(['ApiClient', 'model/Links', 'model/UserTargetingExpirationResourceIdForFlag'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Links'), require('./UserTargetingExpirationResourceIdForFlag'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.UserTargetingExpirationForSegment = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.Links, root.LaunchDarklyApi.UserTargetingExpirationResourceIdForFlag);
  }
}(this, function(ApiClient, Links, UserTargetingExpirationResourceIdForFlag) {
  'use strict';




  /**
   * The UserTargetingExpirationForSegment model module.
   * @module model/UserTargetingExpirationForSegment
   * @version 5.0.1
   */

  /**
   * Constructs a new <code>UserTargetingExpirationForSegment</code>.
   * @alias module:model/UserTargetingExpirationForSegment
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>UserTargetingExpirationForSegment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserTargetingExpirationForSegment} obj Optional instance to populate.
   * @return {module:model/UserTargetingExpirationForSegment} The populated <code>UserTargetingExpirationForSegment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('expirationDate')) {
        obj['expirationDate'] = ApiClient.convertToType(data['expirationDate'], 'Number');
      }
      if (data.hasOwnProperty('targetType')) {
        obj['targetType'] = ApiClient.convertToType(data['targetType'], 'String');
      }
      if (data.hasOwnProperty('userKey')) {
        obj['userKey'] = ApiClient.convertToType(data['userKey'], 'String');
      }
      if (data.hasOwnProperty('_id')) {
        obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
      }
      if (data.hasOwnProperty('_resourceId')) {
        obj['_resourceId'] = UserTargetingExpirationResourceIdForFlag.constructFromObject(data['_resourceId']);
      }
      if (data.hasOwnProperty('_links')) {
        obj['_links'] = Links.constructFromObject(data['_links']);
      }
      if (data.hasOwnProperty('_version')) {
        obj['_version'] = ApiClient.convertToType(data['_version'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Unix epoch time in milliseconds specifying the expiration date
   * @member {Number} expirationDate
   */
  exports.prototype['expirationDate'] = undefined;
  /**
   * either the included or excluded variation that the user is targeted on a segment
   * @member {String} targetType
   */
  exports.prototype['targetType'] = undefined;
  /**
   * Unique identifier for the user
   * @member {String} userKey
   */
  exports.prototype['userKey'] = undefined;
  /**
   * @member {String} _id
   */
  exports.prototype['_id'] = undefined;
  /**
   * @member {module:model/UserTargetingExpirationResourceIdForFlag} _resourceId
   */
  exports.prototype['_resourceId'] = undefined;
  /**
   * @member {module:model/Links} _links
   */
  exports.prototype['_links'] = undefined;
  /**
   * @member {Number} _version
   */
  exports.prototype['_version'] = undefined;



  return exports;
}));


