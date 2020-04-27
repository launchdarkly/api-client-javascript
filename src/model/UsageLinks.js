/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 3.0.0
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
    root.LaunchDarklyApi.UsageLinks = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.Link);
  }
}(this, function(ApiClient, Link) {
  'use strict';




  /**
   * The UsageLinks model module.
   * @module model/UsageLinks
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>UsageLinks</code>.
   * @alias module:model/UsageLinks
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>UsageLinks</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UsageLinks} obj Optional instance to populate.
   * @return {module:model/UsageLinks} The populated <code>UsageLinks</code> instance.
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
      if (data.hasOwnProperty('subseries')) {
        obj['subseries'] = ApiClient.convertToType(data['subseries'], [Link]);
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
  /**
   * The following links that are in the response.
   * @member {Array.<module:model/Link>} subseries
   */
  exports.prototype['subseries'] = undefined;



  return exports;
}));


