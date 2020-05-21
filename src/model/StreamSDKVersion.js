/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 3.2.0
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
    define(['ApiClient', 'model/StreamBySDKLinks', 'model/StreamSDKVersionData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./StreamBySDKLinks'), require('./StreamSDKVersionData'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.StreamSDKVersion = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.StreamBySDKLinks, root.LaunchDarklyApi.StreamSDKVersionData);
  }
}(this, function(ApiClient, StreamBySDKLinks, StreamSDKVersionData) {
  'use strict';




  /**
   * The StreamSDKVersion model module.
   * @module model/StreamSDKVersion
   * @version 3.2.0
   */

  /**
   * Constructs a new <code>StreamSDKVersion</code>.
   * @alias module:model/StreamSDKVersion
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>StreamSDKVersion</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StreamSDKVersion} obj Optional instance to populate.
   * @return {module:model/StreamSDKVersion} The populated <code>StreamSDKVersion</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('_links')) {
        obj['_links'] = StreamBySDKLinks.constructFromObject(data['_links']);
      }
      if (data.hasOwnProperty('sdkVersions')) {
        obj['sdkVersions'] = ApiClient.convertToType(data['sdkVersions'], [StreamSDKVersionData]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/StreamBySDKLinks} _links
   */
  exports.prototype['_links'] = undefined;
  /**
   * @member {Array.<module:model/StreamSDKVersionData>} sdkVersions
   */
  exports.prototype['sdkVersions'] = undefined;



  return exports;
}));


