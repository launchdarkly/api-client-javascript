/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 2.0.30
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
    root.LaunchDarklyApi.PatchOperation = factory(root.LaunchDarklyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PatchOperation model module.
   * @module model/PatchOperation
   * @version 2.0.30
   */

  /**
   * Constructs a new <code>PatchOperation</code>.
   * @alias module:model/PatchOperation
   * @class
   * @param op {String} 
   * @param path {String} 
   * @param value {Object} 
   */
  var exports = function(op, path, value) {
    var _this = this;

    _this['op'] = op;
    _this['path'] = path;
    _this['value'] = value;
  };

  /**
   * Constructs a <code>PatchOperation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PatchOperation} obj Optional instance to populate.
   * @return {module:model/PatchOperation} The populated <code>PatchOperation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('op')) {
        obj['op'] = ApiClient.convertToType(data['op'], 'String');
      }
      if (data.hasOwnProperty('path')) {
        obj['path'] = ApiClient.convertToType(data['path'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} op
   */
  exports.prototype['op'] = undefined;
  /**
   * @member {String} path
   */
  exports.prototype['path'] = undefined;
  /**
   * @member {Object} value
   */
  exports.prototype['value'] = undefined;



  return exports;
}));


