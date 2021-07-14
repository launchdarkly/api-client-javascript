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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.DestinationSegment = factory(root.LaunchDarklyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DestinationSegment model module.
   * @module model/DestinationSegment
   * @version 5.3.0
   */

  /**
   * Constructs a new <code>DestinationSegment</code>.
   * @alias module:model/DestinationSegment
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>DestinationSegment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DestinationSegment} obj Optional instance to populate.
   * @return {module:model/DestinationSegment} The populated <code>DestinationSegment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('writeKey'))
        obj.writeKey = ApiClient.convertToType(data['writeKey'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} writeKey
   */
  exports.prototype.writeKey = undefined;

  return exports;

}));
