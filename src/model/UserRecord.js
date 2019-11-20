/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 2.0.24
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
    define(['ApiClient', 'model/Id', 'model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Id'), require('./User'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.UserRecord = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.Id, root.LaunchDarklyApi.User);
  }
}(this, function(ApiClient, Id, User) {
  'use strict';




  /**
   * The UserRecord model module.
   * @module model/UserRecord
   * @version 2.0.24
   */

  /**
   * Constructs a new <code>UserRecord</code>.
   * @alias module:model/UserRecord
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>UserRecord</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserRecord} obj Optional instance to populate.
   * @return {module:model/UserRecord} The populated <code>UserRecord</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('lastPing')) {
        obj['lastPing'] = ApiClient.convertToType(data['lastPing'], 'String');
      }
      if (data.hasOwnProperty('environmentId')) {
        obj['environmentId'] = ApiClient.convertToType(data['environmentId'], 'String');
      }
      if (data.hasOwnProperty('ownerId')) {
        obj['ownerId'] = Id.constructFromObject(data['ownerId']);
      }
      if (data.hasOwnProperty('user')) {
        obj['user'] = User.constructFromObject(data['user']);
      }
      if (data.hasOwnProperty('avatar')) {
        obj['avatar'] = ApiClient.convertToType(data['avatar'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} lastPing
   */
  exports.prototype['lastPing'] = undefined;
  /**
   * @member {String} environmentId
   */
  exports.prototype['environmentId'] = undefined;
  /**
   * @member {module:model/Id} ownerId
   */
  exports.prototype['ownerId'] = undefined;
  /**
   * @member {module:model/User} user
   */
  exports.prototype['user'] = undefined;
  /**
   * @member {String} avatar
   */
  exports.prototype['avatar'] = undefined;



  return exports;
}));


