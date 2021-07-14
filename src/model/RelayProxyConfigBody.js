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
    define(['ApiClient', 'model/Policy'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Policy'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.RelayProxyConfigBody = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.Policy);
  }
}(this, function(ApiClient, Policy) {
  'use strict';

  /**
   * The RelayProxyConfigBody model module.
   * @module model/RelayProxyConfigBody
   * @version 5.3.0
   */

  /**
   * Constructs a new <code>RelayProxyConfigBody</code>.
   * @alias module:model/RelayProxyConfigBody
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>RelayProxyConfigBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RelayProxyConfigBody} obj Optional instance to populate.
   * @return {module:model/RelayProxyConfigBody} The populated <code>RelayProxyConfigBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('policy'))
        obj.policy = ApiClient.convertToType(data['policy'], [Policy]);
    }
    return obj;
  }

  /**
   * A human-friendly name for the relay proxy configuration
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {Array.<module:model/Policy>} policy
   */
  exports.prototype.policy = undefined;

  return exports;

}));
