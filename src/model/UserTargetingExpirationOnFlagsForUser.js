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
    define(['ApiClient', 'model/Links', 'model/UserTargetingExpirationForFlag'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Links'), require('./UserTargetingExpirationForFlag'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.UserTargetingExpirationOnFlagsForUser = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.Links, root.LaunchDarklyApi.UserTargetingExpirationForFlag);
  }
}(this, function(ApiClient, Links, UserTargetingExpirationForFlag) {
  'use strict';

  /**
   * The UserTargetingExpirationOnFlagsForUser model module.
   * @module model/UserTargetingExpirationOnFlagsForUser
   * @version 5.1.0
   */

  /**
   * Constructs a new <code>UserTargetingExpirationOnFlagsForUser</code>.
   * @alias module:model/UserTargetingExpirationOnFlagsForUser
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>UserTargetingExpirationOnFlagsForUser</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserTargetingExpirationOnFlagsForUser} obj Optional instance to populate.
   * @return {module:model/UserTargetingExpirationOnFlagsForUser} The populated <code>UserTargetingExpirationOnFlagsForUser</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('_links'))
        obj.links = Links.constructFromObject(data['_links']);
      if (data.hasOwnProperty('items'))
        obj.items = ApiClient.convertToType(data['items'], [UserTargetingExpirationForFlag]);
    }
    return obj;
  }

  /**
   * @member {module:model/Links} links
   */
  exports.prototype.links = undefined;

  /**
   * @member {Array.<module:model/UserTargetingExpirationForFlag>} items
   */
  exports.prototype.items = undefined;

  return exports;

}));
