/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 2.0.22
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
    define(['ApiClient', 'model/Link'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Link'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.Links = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.Link);
  }
}(this, function(ApiClient, Link) {
  'use strict';




  /**
   * The Links model module.
   * @module model/Links
   * @version 2.0.22
   */

  /**
   * Constructs a new <code>Links</code>.
   * @alias module:model/Links
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Links</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Links} obj Optional instance to populate.
   * @return {module:model/Links} The populated <code>Links</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('self')) {
        obj['self'] = Link.constructFromObject(data['self']);
      }
      if (data.hasOwnProperty('next')) {
        obj['next'] = Link.constructFromObject(data['next']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Link} self
   */
  exports.prototype['self'] = undefined;
  /**
   * @member {module:model/Link} next
   */
  exports.prototype['next'] = undefined;



  return exports;
}));


