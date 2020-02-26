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
    define(['ApiClient', 'model/CopyActions', 'model/FeatureFlagCopyObject'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CopyActions'), require('./FeatureFlagCopyObject'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.FeatureFlagCopyBody = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.CopyActions, root.LaunchDarklyApi.FeatureFlagCopyObject);
  }
}(this, function(ApiClient, CopyActions, FeatureFlagCopyObject) {
  'use strict';




  /**
   * The FeatureFlagCopyBody model module.
   * @module model/FeatureFlagCopyBody
   * @version 2.0.30
   */

  /**
   * Constructs a new <code>FeatureFlagCopyBody</code>.
   * @alias module:model/FeatureFlagCopyBody
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>FeatureFlagCopyBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FeatureFlagCopyBody} obj Optional instance to populate.
   * @return {module:model/FeatureFlagCopyBody} The populated <code>FeatureFlagCopyBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('source')) {
        obj['source'] = FeatureFlagCopyObject.constructFromObject(data['source']);
      }
      if (data.hasOwnProperty('target')) {
        obj['target'] = FeatureFlagCopyObject.constructFromObject(data['target']);
      }
      if (data.hasOwnProperty('comment')) {
        obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
      }
      if (data.hasOwnProperty('includedActions')) {
        obj['includedActions'] = ApiClient.convertToType(data['includedActions'], [CopyActions]);
      }
      if (data.hasOwnProperty('excludedActions')) {
        obj['excludedActions'] = ApiClient.convertToType(data['excludedActions'], [CopyActions]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/FeatureFlagCopyObject} source
   */
  exports.prototype['source'] = undefined;
  /**
   * @member {module:model/FeatureFlagCopyObject} target
   */
  exports.prototype['target'] = undefined;
  /**
   * comment will be included in audit log item for change.
   * @member {String} comment
   */
  exports.prototype['comment'] = undefined;
  /**
   * Define the parts of the flag configuration that will be copied.
   * @member {Array.<module:model/CopyActions>} includedActions
   */
  exports.prototype['includedActions'] = undefined;
  /**
   * Define the parts of the flag configuration that will not be copied.
   * @member {Array.<module:model/CopyActions>} excludedActions
   */
  exports.prototype['excludedActions'] = undefined;



  return exports;
}));

