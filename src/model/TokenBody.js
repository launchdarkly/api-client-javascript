/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 3.9.0
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
    define(['ApiClient', 'model/Statement'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Statement'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.TokenBody = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.Statement);
  }
}(this, function(ApiClient, Statement) {
  'use strict';




  /**
   * The TokenBody model module.
   * @module model/TokenBody
   * @version 3.9.0
   */

  /**
   * Constructs a new <code>TokenBody</code>.
   * @alias module:model/TokenBody
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>TokenBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TokenBody} obj Optional instance to populate.
   * @return {module:model/TokenBody} The populated <code>TokenBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('role')) {
        obj['role'] = ApiClient.convertToType(data['role'], 'String');
      }
      if (data.hasOwnProperty('customRoleIds')) {
        obj['customRoleIds'] = ApiClient.convertToType(data['customRoleIds'], ['String']);
      }
      if (data.hasOwnProperty('inlineRole')) {
        obj['inlineRole'] = ApiClient.convertToType(data['inlineRole'], [Statement]);
      }
      if (data.hasOwnProperty('serviceToken')) {
        obj['serviceToken'] = ApiClient.convertToType(data['serviceToken'], 'Boolean');
      }
      if (data.hasOwnProperty('defaultApiVersion')) {
        obj['defaultApiVersion'] = ApiClient.convertToType(data['defaultApiVersion'], 'Number');
      }
    }
    return obj;
  }

  /**
   * A human-friendly name for the access token
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The name of a built-in role for the token
   * @member {String} role
   */
  exports.prototype['role'] = undefined;
  /**
   * A list of custom role IDs to use as access limits for the access token
   * @member {Array.<String>} customRoleIds
   */
  exports.prototype['customRoleIds'] = undefined;
  /**
   * @member {Array.<module:model/Statement>} inlineRole
   */
  exports.prototype['inlineRole'] = undefined;
  /**
   * Whether the token will be a service token https://docs.launchdarkly.com/home/account-security/api-access-tokens#service-tokens
   * @member {Boolean} serviceToken
   */
  exports.prototype['serviceToken'] = undefined;
  /**
   * The default API version for this token
   * @member {Number} defaultApiVersion
   */
  exports.prototype['defaultApiVersion'] = undefined;



  return exports;
}));


