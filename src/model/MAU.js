/*
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 5.0.2
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
    define(['ApiClient', 'model/StreamBySDKLinksMetadata', 'model/StreamUsageSeries', 'model/UsageLinks'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./StreamBySDKLinksMetadata'), require('./StreamUsageSeries'), require('./UsageLinks'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.MAU = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.StreamBySDKLinksMetadata, root.LaunchDarklyApi.StreamUsageSeries, root.LaunchDarklyApi.UsageLinks);
  }
}(this, function(ApiClient, StreamBySDKLinksMetadata, StreamUsageSeries, UsageLinks) {
  'use strict';

  /**
   * The MAU model module.
   * @module model/MAU
   * @version 5.0.2
   */

  /**
   * Constructs a new <code>MAU</code>.
   * @alias module:model/MAU
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>MAU</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MAU} obj Optional instance to populate.
   * @return {module:model/MAU} The populated <code>MAU</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('_links'))
        obj.links = UsageLinks.constructFromObject(data['_links']);
      if (data.hasOwnProperty('metadata'))
        obj.metadata = ApiClient.convertToType(data['metadata'], [StreamBySDKLinksMetadata]);
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
   * @member {Array.<module:model/StreamBySDKLinksMetadata>} metadata
   */
  exports.prototype.metadata = undefined;

  /**
   * @member {Array.<module:model/StreamUsageSeries>} series
   */
  exports.prototype.series = undefined;

  return exports;

}));
