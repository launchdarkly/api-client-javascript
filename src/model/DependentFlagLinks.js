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
    define(['ApiClient', 'model/Link'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Link'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.DependentFlagLinks = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.Link);
  }
}(this, function(ApiClient, Link) {
  'use strict';

  /**
   * The DependentFlagLinks model module.
   * @module model/DependentFlagLinks
   * @version 5.1.0
   */

  /**
   * Constructs a new <code>DependentFlagLinks</code>.
   * @alias module:model/DependentFlagLinks
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>DependentFlagLinks</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DependentFlagLinks} obj Optional instance to populate.
   * @return {module:model/DependentFlagLinks} The populated <code>DependentFlagLinks</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('self'))
        obj.self = Link.constructFromObject(data['self']);
    }
    return obj;
  }

  /**
   * @member {module:model/Link} self
   */
  exports.prototype.self = undefined;

  return exports;

}));
