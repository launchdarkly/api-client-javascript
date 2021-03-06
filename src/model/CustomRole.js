/*
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 5.3.0
 * Contact: support@launchdarkly.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.17
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Id', 'model/Links', 'model/Policy'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Id'), require('./Links'), require('./Policy'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.CustomRole = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.Id, root.LaunchDarklyApi.Links, root.LaunchDarklyApi.Policy);
  }
}(this, function(ApiClient, Id, Links, Policy) {
  'use strict';

  /**
   * The CustomRole model module.
   * @module model/CustomRole
   * @version 5.3.0
   */

  /**
   * Constructs a new <code>CustomRole</code>.
   * @alias module:model/CustomRole
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CustomRole</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CustomRole} obj Optional instance to populate.
   * @return {module:model/CustomRole} The populated <code>CustomRole</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('_links'))
        obj.links = Links.constructFromObject(data['_links']);
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('key'))
        obj.key = ApiClient.convertToType(data['key'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('_id'))
        obj.id = Id.constructFromObject(data['_id']);
      if (data.hasOwnProperty('policy'))
        obj.policy = ApiClient.convertToType(data['policy'], [Policy]);
    }
    return obj;
  }

  /**
   * @member {module:model/Links} links
   */
  exports.prototype.links = undefined;

  /**
   * Name of the custom role.
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * The 20-hexdigit id or the key for a custom role.
   * @member {String} key
   */
  exports.prototype.key = undefined;

  /**
   * Description of the custom role.
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * @member {module:model/Id} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {Array.<module:model/Policy>} policy
   */
  exports.prototype.policy = undefined;

  return exports;

}));
