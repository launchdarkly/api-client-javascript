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
    define(['ApiClient', 'model/Actions', 'model/Resources'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Actions'), require('./Resources'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyRestApi) {
      root.LaunchDarklyRestApi = {};
    }
    root.LaunchDarklyRestApi.Policy = factory(root.LaunchDarklyRestApi.ApiClient, root.LaunchDarklyRestApi.Actions, root.LaunchDarklyRestApi.Resources);
  }
}(this, function(ApiClient, Actions, Resources) {
  'use strict';




  /**
   * The Policy model module.
   * @module model/Policy
   * @version 2.0.2
   */

  /**
   * Constructs a new <code>Policy</code>.
   * @alias module:model/Policy
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>Policy</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Policy} obj Optional instance to populate.
   * @return {module:model/Policy} The populated <code>Policy</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('resources')) {
        obj['resources'] = Resources.constructFromObject(data['resources']);
      }
      if (data.hasOwnProperty('actions')) {
        obj['actions'] = Actions.constructFromObject(data['actions']);
      }
      if (data.hasOwnProperty('effect')) {
        obj['effect'] = ApiClient.convertToType(data['effect'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Resources} resources
   */
  exports.prototype['resources'] = undefined;
  /**
   * @member {module:model/Actions} actions
   */
  exports.prototype['actions'] = undefined;
  /**
   * Effect of the policy - allow or deny.
   * @member {String} effect
   */
  exports.prototype['effect'] = undefined;



  return exports;
}));


