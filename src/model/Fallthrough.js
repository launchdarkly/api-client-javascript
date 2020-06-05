/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 3.3.2
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
    define(['ApiClient', 'model/Rollout'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Rollout'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.Fallthrough = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.Rollout);
  }
}(this, function(ApiClient, Rollout) {
  'use strict';




  /**
   * The Fallthrough model module.
   * @module model/Fallthrough
   * @version 3.3.2
   */

  /**
   * Constructs a new <code>Fallthrough</code>.
   * @alias module:model/Fallthrough
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Fallthrough</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Fallthrough} obj Optional instance to populate.
   * @return {module:model/Fallthrough} The populated <code>Fallthrough</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('variation')) {
        obj['variation'] = ApiClient.convertToType(data['variation'], 'Number');
      }
      if (data.hasOwnProperty('rollout')) {
        obj['rollout'] = Rollout.constructFromObject(data['rollout']);
      }
    }
    return obj;
  }

  /**
   * @member {Number} variation
   */
  exports.prototype['variation'] = undefined;
  /**
   * @member {module:model/Rollout} rollout
   */
  exports.prototype['rollout'] = undefined;



  return exports;
}));


