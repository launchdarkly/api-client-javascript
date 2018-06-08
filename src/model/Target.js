/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 2.0.2
 * Contact: support@launchdarkly.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
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
    if (!root.LaunchDarklyRestApi) {
      root.LaunchDarklyRestApi = {};
    }
    root.LaunchDarklyRestApi.Target = factory(root.LaunchDarklyRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Target model module.
   * @module model/Target
   * @version 2.0.2
   */

  /**
   * Constructs a new <code>Target</code>.
   * @alias module:model/Target
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Target</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Target} obj Optional instance to populate.
   * @return {module:model/Target} The populated <code>Target</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('values')) {
        obj['values'] = ApiClient.convertToType(data['values'], ['String']);
      }
      if (data.hasOwnProperty('variation')) {
        obj['variation'] = ApiClient.convertToType(data['variation'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<String>} values
   */
  exports.prototype['values'] = undefined;
  /**
   * @member {Number} variation
   */
  exports.prototype['variation'] = undefined;



  return exports;
}));


