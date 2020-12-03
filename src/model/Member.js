/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 3.9.2
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
    define(['ApiClient', 'model/Id', 'model/Links', 'model/Role'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Id'), require('./Links'), require('./Role'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.Member = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.Id, root.LaunchDarklyApi.Links, root.LaunchDarklyApi.Role);
  }
}(this, function(ApiClient, Id, Links, Role) {
  'use strict';




  /**
   * The Member model module.
   * @module model/Member
   * @version 3.9.2
   */

  /**
   * Constructs a new <code>Member</code>.
   * @alias module:model/Member
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>Member</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Member} obj Optional instance to populate.
   * @return {module:model/Member} The populated <code>Member</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('_links')) {
        obj['_links'] = Links.constructFromObject(data['_links']);
      }
      if (data.hasOwnProperty('_id')) {
        obj['_id'] = Id.constructFromObject(data['_id']);
      }
      if (data.hasOwnProperty('role')) {
        obj['role'] = Role.constructFromObject(data['role']);
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('_verified')) {
        obj['_verified'] = ApiClient.convertToType(data['_verified'], 'Boolean');
      }
      if (data.hasOwnProperty('_pendingInvite')) {
        obj['_pendingInvite'] = ApiClient.convertToType(data['_pendingInvite'], 'Boolean');
      }
      if (data.hasOwnProperty('isBeta')) {
        obj['isBeta'] = ApiClient.convertToType(data['isBeta'], 'Boolean');
      }
      if (data.hasOwnProperty('customRoles')) {
        obj['customRoles'] = ApiClient.convertToType(data['customRoles'], [Id]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Links} _links
   */
  exports.prototype['_links'] = undefined;
  /**
   * @member {module:model/Id} _id
   */
  exports.prototype['_id'] = undefined;
  /**
   * @member {module:model/Role} role
   */
  exports.prototype['role'] = undefined;
  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * @member {Boolean} _verified
   */
  exports.prototype['_verified'] = undefined;
  /**
   * @member {Boolean} _pendingInvite
   */
  exports.prototype['_pendingInvite'] = undefined;
  /**
   * @member {Boolean} isBeta
   */
  exports.prototype['isBeta'] = undefined;
  /**
   * @member {Array.<module:model/Id>} customRoles
   */
  exports.prototype['customRoles'] = undefined;



  return exports;
}));


