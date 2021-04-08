/*
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 5.0.3
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
    define(['ApiClient', 'model/FeatureFlagStatus', 'model/FeatureFlagStatusLinks'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FeatureFlagStatus'), require('./FeatureFlagStatusLinks'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.FeatureFlagStatuses = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.FeatureFlagStatus, root.LaunchDarklyApi.FeatureFlagStatusLinks);
  }
}(this, function(ApiClient, FeatureFlagStatus, FeatureFlagStatusLinks) {
  'use strict';

  /**
   * The FeatureFlagStatuses model module.
   * @module model/FeatureFlagStatuses
   * @version 5.0.3
   */

  /**
   * Constructs a new <code>FeatureFlagStatuses</code>.
   * @alias module:model/FeatureFlagStatuses
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>FeatureFlagStatuses</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FeatureFlagStatuses} obj Optional instance to populate.
   * @return {module:model/FeatureFlagStatuses} The populated <code>FeatureFlagStatuses</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('_links'))
        obj.links = FeatureFlagStatusLinks.constructFromObject(data['_links']);
      if (data.hasOwnProperty('items'))
        obj.items = ApiClient.convertToType(data['items'], [FeatureFlagStatus]);
    }
    return obj;
  }

  /**
   * @member {module:model/FeatureFlagStatusLinks} links
   */
  exports.prototype.links = undefined;

  /**
   * @member {Array.<module:model/FeatureFlagStatus>} items
   */
  exports.prototype.items = undefined;

  return exports;

}));
