/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 3.9.1
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
    root.LaunchDarklyApi.HierarchicalLinks = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.Link);
  }
}(this, function(ApiClient, Link) {
  'use strict';




  /**
   * The HierarchicalLinks model module.
   * @module model/HierarchicalLinks
   * @version 3.9.1
   */

  /**
   * Constructs a new <code>HierarchicalLinks</code>.
   * @alias module:model/HierarchicalLinks
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>HierarchicalLinks</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HierarchicalLinks} obj Optional instance to populate.
   * @return {module:model/HierarchicalLinks} The populated <code>HierarchicalLinks</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('parent')) {
        obj['parent'] = Link.constructFromObject(data['parent']);
      }
      if (data.hasOwnProperty('self')) {
        obj['self'] = Link.constructFromObject(data['self']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Link} parent
   */
  exports.prototype['parent'] = undefined;
  /**
   * @member {module:model/Link} self
   */
  exports.prototype['self'] = undefined;



  return exports;
}));


