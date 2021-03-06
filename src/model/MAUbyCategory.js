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
    define(['ApiClient', 'model/MAUMetadata', 'model/StreamBySDKLinks', 'model/StreamUsageSeries'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MAUMetadata'), require('./StreamBySDKLinks'), require('./StreamUsageSeries'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.MAUbyCategory = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.MAUMetadata, root.LaunchDarklyApi.StreamBySDKLinks, root.LaunchDarklyApi.StreamUsageSeries);
  }
}(this, function(ApiClient, MAUMetadata, StreamBySDKLinks, StreamUsageSeries) {
  'use strict';

  /**
   * The MAUbyCategory model module.
   * @module model/MAUbyCategory
   * @version 5.3.0
   */

  /**
   * Constructs a new <code>MAUbyCategory</code>.
   * @alias module:model/MAUbyCategory
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>MAUbyCategory</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MAUbyCategory} obj Optional instance to populate.
   * @return {module:model/MAUbyCategory} The populated <code>MAUbyCategory</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('_links'))
        obj.links = StreamBySDKLinks.constructFromObject(data['_links']);
      if (data.hasOwnProperty('metadata'))
        obj.metadata = ApiClient.convertToType(data['metadata'], [MAUMetadata]);
      if (data.hasOwnProperty('series'))
        obj.series = ApiClient.convertToType(data['series'], [StreamUsageSeries]);
    }
    return obj;
  }

  /**
   * @member {module:model/StreamBySDKLinks} links
   */
  exports.prototype.links = undefined;

  /**
   * @member {Array.<module:model/MAUMetadata>} metadata
   */
  exports.prototype.metadata = undefined;

  /**
   * @member {Array.<module:model/StreamUsageSeries>} series
   */
  exports.prototype.series = undefined;

  return exports;

}));
