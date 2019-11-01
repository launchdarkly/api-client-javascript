/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 2.0.20
 * Contact: support@launchdarkly.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.0
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
    root.LaunchDarklyApi.CopyActions = factory(root.LaunchDarklyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * Enum class CopyActions.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "updateOn"
     * @const
     */
    "updateOn": "updateOn",
    /**
     * value: "updatePrerequisites"
     * @const
     */
    "updatePrerequisites": "updatePrerequisites",
    /**
     * value: "updateTargets"
     * @const
     */
    "updateTargets": "updateTargets",
    /**
     * value: "updateRules"
     * @const
     */
    "updateRules": "updateRules",
    /**
     * value: "updateFallthrough"
     * @const
     */
    "updateFallthrough": "updateFallthrough",
    /**
     * value: "updateOffVariation"
     * @const
     */
    "updateOffVariation": "updateOffVariation"  };

  /**
   * Returns a <code>CopyActions</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/CopyActions} The enum <code>CopyActions</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));


