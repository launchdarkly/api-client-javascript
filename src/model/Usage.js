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
    define(['ApiClient', 'model/StreamUsageSeries', 'model/UsageLinks'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./StreamUsageSeries'), require('./UsageLinks'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.Usage = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.StreamUsageSeries, root.LaunchDarklyApi.UsageLinks);
  }
}(this, function(ApiClient, StreamUsageSeries, UsageLinks) {
  'use strict';

  /**
   * The Usage model module.
   * @module model/Usage
   * @version 5.3.0
   */

  /**
   * Constructs a new <code>Usage</code>.
   * @alias module:model/Usage
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Usage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Usage} obj Optional instance to populate.
   * @return {module:model/Usage} The populated <code>Usage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('_links'))
        obj.links = UsageLinks.constructFromObject(data['_links']);
      if (data.hasOwnProperty('series'))
        obj.series = ApiClient.convertToType(data['series'], [StreamUsageSeries]);
    }
    return obj;
  }

  /**
   * @member {module:model/UsageLinks} links
   */
  exports.prototype.links = undefined;

  /**
   * @member {Array.<module:model/StreamUsageSeries>} series
   */
  exports.prototype.series = undefined;

  return exports;

}));
