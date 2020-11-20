/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 3.9.0
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
    root.LaunchDarklyApi.StreamSDKVersionData = factory(root.LaunchDarklyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The StreamSDKVersionData model module.
   * @module model/StreamSDKVersionData
   * @version 3.9.0
   */

  /**
   * Constructs a new <code>StreamSDKVersionData</code>.
   * @alias module:model/StreamSDKVersionData
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>StreamSDKVersionData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StreamSDKVersionData} obj Optional instance to populate.
   * @return {module:model/StreamSDKVersionData} The populated <code>StreamSDKVersionData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('sdk')) {
        obj['sdk'] = ApiClient.convertToType(data['sdk'], 'String');
      }
      if (data.hasOwnProperty('version')) {
        obj['version'] = ApiClient.convertToType(data['version'], 'String');
      }
    }
    return obj;
  }

  /**
   * The language of the sdk
   * @member {String} sdk
   */
  exports.prototype['sdk'] = undefined;
  /**
   * The version of the sdk
   * @member {String} version
   */
  exports.prototype['version'] = undefined;



  return exports;
}));


