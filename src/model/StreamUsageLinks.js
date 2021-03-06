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
    define(['ApiClient', 'model/Link'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Link'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.StreamUsageLinks = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.Link);
  }
}(this, function(ApiClient, Link) {
  'use strict';

  /**
   * The StreamUsageLinks model module.
   * @module model/StreamUsageLinks
   * @version 5.3.0
   */

  /**
   * Constructs a new <code>StreamUsageLinks</code>.
   * @alias module:model/StreamUsageLinks
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>StreamUsageLinks</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StreamUsageLinks} obj Optional instance to populate.
   * @return {module:model/StreamUsageLinks} The populated <code>StreamUsageLinks</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('parent'))
        obj.parent = Link.constructFromObject(data['parent']);
      if (data.hasOwnProperty('self'))
        obj.self = Link.constructFromObject(data['self']);
      if (data.hasOwnProperty('subseries'))
        obj.subseries = ApiClient.convertToType(data['subseries'], [Link]);
    }
    return obj;
  }

  /**
   * @member {module:model/Link} parent
   */
  exports.prototype.parent = undefined;

  /**
   * @member {module:model/Link} self
   */
  exports.prototype.self = undefined;

  /**
   * The following links that are in the response.
   * @member {Array.<module:model/Link>} subseries
   */
  exports.prototype.subseries = undefined;

  return exports;

}));
