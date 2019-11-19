/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 2.0.23
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
    root.LaunchDarklyApi.Clause = factory(root.LaunchDarklyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Clause model module.
   * @module model/Clause
   * @version 2.0.23
   */

  /**
   * Constructs a new <code>Clause</code>.
   * @alias module:model/Clause
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>Clause</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Clause} obj Optional instance to populate.
   * @return {module:model/Clause} The populated <code>Clause</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('attribute')) {
        obj['attribute'] = ApiClient.convertToType(data['attribute'], 'String');
      }
      if (data.hasOwnProperty('op')) {
        obj['op'] = ApiClient.convertToType(data['op'], 'String');
      }
      if (data.hasOwnProperty('values')) {
        obj['values'] = ApiClient.convertToType(data['values'], [Object]);
      }
      if (data.hasOwnProperty('negate')) {
        obj['negate'] = ApiClient.convertToType(data['negate'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {String} attribute
   */
  exports.prototype['attribute'] = undefined;
  /**
   * @member {String} op
   */
  exports.prototype['op'] = undefined;
  /**
   * @member {Array.<Object>} values
   */
  exports.prototype['values'] = undefined;
  /**
   * @member {Boolean} negate
   */
  exports.prototype['negate'] = undefined;



  return exports;
}));


