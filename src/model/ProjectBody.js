/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 2.0.4
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
    root.LaunchDarklyRestApi.ProjectBody = factory(root.LaunchDarklyRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ProjectBody model module.
   * @module model/ProjectBody
   * @version 2.0.4
   */

  /**
   * Constructs a new <code>ProjectBody</code>.
   * @alias module:model/ProjectBody
   * @class
   * @param name {String} 
   * @param key {String} 
   */
  var exports = function(name, key) {
    var _this = this;

    _this['name'] = name;
    _this['key'] = key;
  };

  /**
   * Constructs a <code>ProjectBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProjectBody} obj Optional instance to populate.
   * @return {module:model/ProjectBody} The populated <code>ProjectBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('key')) {
        obj['key'] = ApiClient.convertToType(data['key'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} key
   */
  exports.prototype['key'] = undefined;



  return exports;
}));


