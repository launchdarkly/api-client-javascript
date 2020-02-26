/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 2.0.30
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
    define(['ApiClient', 'model/Role', 'model/Statements'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Role'), require('./Statements'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.MembersBody = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.Role, root.LaunchDarklyApi.Statements);
  }
}(this, function(ApiClient, Role, Statements) {
  'use strict';




  /**
   * The MembersBody model module.
   * @module model/MembersBody
   * @version 2.0.30
   */

  /**
   * Constructs a new <code>MembersBody</code>.
   * @alias module:model/MembersBody
   * @class
   * @param email {String} 
   */
  var exports = function(email) {
    var _this = this;

    _this['email'] = email;





  };

  /**
   * Constructs a <code>MembersBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MembersBody} obj Optional instance to populate.
   * @return {module:model/MembersBody} The populated <code>MembersBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('role')) {
        obj['role'] = Role.constructFromObject(data['role']);
      }
      if (data.hasOwnProperty('customRoles')) {
        obj['customRoles'] = ApiClient.convertToType(data['customRoles'], ['String']);
      }
      if (data.hasOwnProperty('inlineRole')) {
        obj['inlineRole'] = Statements.constructFromObject(data['inlineRole']);
      }
    }
    return obj;
  }

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
   * @member {module:model/Role} role
   */
  exports.prototype['role'] = undefined;
  /**
   * @member {Array.<String>} customRoles
   */
  exports.prototype['customRoles'] = undefined;
  /**
   * @member {module:model/Statements} inlineRole
   */
  exports.prototype['inlineRole'] = undefined;



  return exports;
}));

