/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 5.0.0
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
    define(['ApiClient', 'model/StreamUsageLinks'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./StreamUsageLinks'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.Streams = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.StreamUsageLinks);
  }
}(this, function(ApiClient, StreamUsageLinks) {
  'use strict';




  /**
   * The Streams model module.
   * @module model/Streams
   * @version 5.0.0
   */

  /**
   * Constructs a new <code>Streams</code>.
   * @alias module:model/Streams
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Streams</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Streams} obj Optional instance to populate.
   * @return {module:model/Streams} The populated <code>Streams</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('_links')) {
        obj['_links'] = StreamUsageLinks.constructFromObject(data['_links']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/StreamUsageLinks} _links
   */
  exports.prototype['_links'] = undefined;



  return exports;
}));


