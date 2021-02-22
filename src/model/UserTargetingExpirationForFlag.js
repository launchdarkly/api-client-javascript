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
    define(['ApiClient', 'model/Links', 'model/UserTargetingExpirationResourceIdForFlag'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Links'), require('./UserTargetingExpirationResourceIdForFlag'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.UserTargetingExpirationForFlag = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.Links, root.LaunchDarklyApi.UserTargetingExpirationResourceIdForFlag);
  }
}(this, function(ApiClient, Links, UserTargetingExpirationResourceIdForFlag) {
  'use strict';

  /**
   * The UserTargetingExpirationForFlag model module.
   * @module model/UserTargetingExpirationForFlag
   * @version 5.0.2
   */

  /**
   * Constructs a new <code>UserTargetingExpirationForFlag</code>.
   * @alias module:model/UserTargetingExpirationForFlag
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>UserTargetingExpirationForFlag</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserTargetingExpirationForFlag} obj Optional instance to populate.
   * @return {module:model/UserTargetingExpirationForFlag} The populated <code>UserTargetingExpirationForFlag</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('expirationDate'))
        obj.expirationDate = ApiClient.convertToType(data['expirationDate'], 'Number');
      if (data.hasOwnProperty('variationId'))
        obj.variationId = ApiClient.convertToType(data['variationId'], 'String');
      if (data.hasOwnProperty('userKey'))
        obj.userKey = ApiClient.convertToType(data['userKey'], 'String');
      if (data.hasOwnProperty('_id'))
        obj.id = ApiClient.convertToType(data['_id'], 'String');
      if (data.hasOwnProperty('_resourceId'))
        obj.resourceId = UserTargetingExpirationResourceIdForFlag.constructFromObject(data['_resourceId']);
      if (data.hasOwnProperty('_links'))
        obj.links = Links.constructFromObject(data['_links']);
      if (data.hasOwnProperty('_version'))
        obj.version = ApiClient.convertToType(data['_version'], 'Number');
    }
    return obj;
  }

  /**
   * Unix epoch time in milliseconds specifying the expiration date
   * @member {Number} expirationDate
   */
  exports.prototype.expirationDate = undefined;

  /**
   * the ID of the variation that the user is targeted on a flag
   * @member {String} variationId
   */
  exports.prototype.variationId = undefined;

  /**
   * Unique identifier for the user
   * @member {String} userKey
   */
  exports.prototype.userKey = undefined;

  /**
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {module:model/UserTargetingExpirationResourceIdForFlag} resourceId
   */
  exports.prototype.resourceId = undefined;

  /**
   * @member {module:model/Links} links
   */
  exports.prototype.links = undefined;

  /**
   * @member {Number} version
   */
  exports.prototype.version = undefined;

  return exports;

}));
