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
    define(['ApiClient', 'model/DependentFlagEnvironmentLinks', 'model/Site'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DependentFlagEnvironmentLinks'), require('./Site'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.DependentFlagEnvironment = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.DependentFlagEnvironmentLinks, root.LaunchDarklyApi.Site);
  }
}(this, function(ApiClient, DependentFlagEnvironmentLinks, Site) {
  'use strict';

  /**
   * The DependentFlagEnvironment model module.
   * @module model/DependentFlagEnvironment
   * @version 5.1.0
   */

  /**
   * Constructs a new <code>DependentFlagEnvironment</code>.
   * @alias module:model/DependentFlagEnvironment
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>DependentFlagEnvironment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DependentFlagEnvironment} obj Optional instance to populate.
   * @return {module:model/DependentFlagEnvironment} The populated <code>DependentFlagEnvironment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('key'))
        obj.key = ApiClient.convertToType(data['key'], 'String');
      if (data.hasOwnProperty('_links'))
        obj.links = DependentFlagEnvironmentLinks.constructFromObject(data['_links']);
      if (data.hasOwnProperty('_site'))
        obj.site = Site.constructFromObject(data['_site']);
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {String} key
   */
  exports.prototype.key = undefined;

  /**
   * @member {module:model/DependentFlagEnvironmentLinks} links
   */
  exports.prototype.links = undefined;

  /**
   * @member {module:model/Site} site
   */
  exports.prototype.site = undefined;

  return exports;

}));