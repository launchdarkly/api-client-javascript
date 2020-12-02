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
    define(['ApiClient', 'model/UsageLinks'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UsageLinks'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.Events = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.UsageLinks);
  }
}(this, function(ApiClient, UsageLinks) {
  'use strict';




  /**
   * The Events model module.
   * @module model/Events
   * @version 3.9.1
   */

  /**
   * Constructs a new <code>Events</code>.
   * @alias module:model/Events
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Events</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Events} obj Optional instance to populate.
   * @return {module:model/Events} The populated <code>Events</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('links')) {
        obj['links'] = UsageLinks.constructFromObject(data['links']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/UsageLinks} links
   */
  exports.prototype['links'] = undefined;



  return exports;
}));


