/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 1.0.7
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
    root.LaunchDarklyRestApi.Statement = factory(root.LaunchDarklyRestApi.ApiClient, root.LaunchDarklyRestApi.Actions, root.LaunchDarklyRestApi.Resources);
  }
}(this, function(ApiClient, Actions, Resources) {
  'use strict';




  /**
   * The Statement model module.
   * @module model/Statement
   * @version 1.0.7
   */

  /**
   * Constructs a new <code>Statement</code>.
   * @alias module:model/Statement
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>Statement</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Statement} obj Optional instance to populate.
   * @return {module:model/Statement} The populated <code>Statement</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('resources')) {
        obj['resources'] = Resources.constructFromObject(data['resources']);
      }
      if (data.hasOwnProperty('notresources')) {
        obj['notresources'] = Resources.constructFromObject(data['notresources']);
      }
      if (data.hasOwnProperty('actions')) {
        obj['actions'] = Actions.constructFromObject(data['actions']);
      }
      if (data.hasOwnProperty('notactions')) {
        obj['notactions'] = Actions.constructFromObject(data['notactions']);
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
   * Targeted resource will be those resources NOT in this list. The \"resources`\" field must be empty to use this field.
   * @member {module:model/Resources} notresources
   */
  exports.prototype['notresources'] = undefined;
  /**
   * @member {module:model/Actions} actions
   */
  exports.prototype['actions'] = undefined;
  /**
   * Targeted actions will be those actions NOT in this list. The \"actions\" field must be empty to use this field.
   * @member {module:model/Actions} notactions
   */
  exports.prototype['notactions'] = undefined;
  /**
   * @member {module:model/Statement.EffectEnum} effect
   */
  exports.prototype['effect'] = undefined;


  /**
   * Allowed values for the <code>effect</code> property.
   * @enum {String}
   * @readonly
   */
  exports.EffectEnum = {
    /**
     * value: "allow"
     * @const
     */
    "allow": "allow",
    /**
     * value: "deny"
     * @const
     */
    "deny": "deny"  };


  return exports;
}));


