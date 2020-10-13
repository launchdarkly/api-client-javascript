/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 3.7.1
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.StreamUsageSeries = factory(root.LaunchDarklyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The StreamUsageSeries model module.
   * @module model/StreamUsageSeries
   * @version 3.7.1
   */

  /**
   * Constructs a new <code>StreamUsageSeries</code>.
   * @alias module:model/StreamUsageSeries
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>StreamUsageSeries</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StreamUsageSeries} obj Optional instance to populate.
   * @return {module:model/StreamUsageSeries} The populated <code>StreamUsageSeries</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('0')) {
        obj['0'] = ApiClient.convertToType(data['0'], 'Number');
      }
      if (data.hasOwnProperty('time')) {
        obj['time'] = ApiClient.convertToType(data['time'], 'Number');
      }
    }
    return obj;
  }

  /**
   * A key corresponding to a time series data point.
   * @member {Number} 0
   */
  exports.prototype['0'] = undefined;
  /**
   * A unix epoch time in milliseconds specifying the creation time of this flag.
   * @member {Number} time
   */
  exports.prototype['time'] = undefined;



  return exports;
}));


