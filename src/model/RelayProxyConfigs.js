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
    define(['ApiClient', 'model/RelayProxyConfig'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RelayProxyConfig'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.RelayProxyConfigs = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.RelayProxyConfig);
  }
}(this, function(ApiClient, RelayProxyConfig) {
  'use strict';

  /**
   * The RelayProxyConfigs model module.
   * @module model/RelayProxyConfigs
   * @version 5.3.0
   */

  /**
   * Constructs a new <code>RelayProxyConfigs</code>.
   * @alias module:model/RelayProxyConfigs
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>RelayProxyConfigs</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RelayProxyConfigs} obj Optional instance to populate.
   * @return {module:model/RelayProxyConfigs} The populated <code>RelayProxyConfigs</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('items'))
        obj.items = ApiClient.convertToType(data['items'], [RelayProxyConfig]);
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/RelayProxyConfig>} items
   */
  exports.prototype.items = undefined;

  return exports;

}));
