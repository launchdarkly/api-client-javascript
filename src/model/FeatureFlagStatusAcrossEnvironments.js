/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 3.10.0
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
    define(['ApiClient', 'model/FeatureFlagStatusForQueriedEnvironment', 'model/Links'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FeatureFlagStatusForQueriedEnvironment'), require('./Links'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.FeatureFlagStatusAcrossEnvironments = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.FeatureFlagStatusForQueriedEnvironment, root.LaunchDarklyApi.Links);
  }
}(this, function(ApiClient, FeatureFlagStatusForQueriedEnvironment, Links) {
  'use strict';




  /**
   * The FeatureFlagStatusAcrossEnvironments model module.
   * @module model/FeatureFlagStatusAcrossEnvironments
   * @version 3.10.0
   */

  /**
   * Constructs a new <code>FeatureFlagStatusAcrossEnvironments</code>.
   * @alias module:model/FeatureFlagStatusAcrossEnvironments
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>FeatureFlagStatusAcrossEnvironments</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FeatureFlagStatusAcrossEnvironments} obj Optional instance to populate.
   * @return {module:model/FeatureFlagStatusAcrossEnvironments} The populated <code>FeatureFlagStatusAcrossEnvironments</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('_links')) {
        obj['_links'] = Links.constructFromObject(data['_links']);
      }
      if (data.hasOwnProperty('key')) {
        obj['key'] = ApiClient.convertToType(data['key'], 'String');
      }
      if (data.hasOwnProperty('environments')) {
        obj['environments'] = ApiClient.convertToType(data['environments'], {'String': FeatureFlagStatusForQueriedEnvironment});
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Links} _links
   */
  exports.prototype['_links'] = undefined;
  /**
   * @member {String} key
   */
  exports.prototype['key'] = undefined;
  /**
   * @member {Object.<String, module:model/FeatureFlagStatusForQueriedEnvironment>} environments
   */
  exports.prototype['environments'] = undefined;



  return exports;
}));


