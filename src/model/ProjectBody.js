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
    define(['ApiClient', 'model/ClientSideAvailability', 'model/EnvironmentPost'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ClientSideAvailability'), require('./EnvironmentPost'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.ProjectBody = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.ClientSideAvailability, root.LaunchDarklyApi.EnvironmentPost);
  }
}(this, function(ApiClient, ClientSideAvailability, EnvironmentPost) {
  'use strict';




  /**
   * The ProjectBody model module.
   * @module model/ProjectBody
   * @version 3.9.0
   */

  /**
   * Constructs a new <code>ProjectBody</code>.
   * @alias module:model/ProjectBody
   * @class
   * @param name {String} 
   * @param key {String} 
   */
  var exports = function(name, key) {
    var _this = this;

    _this['name'] = name;
    _this['key'] = key;




  };

  /**
   * Constructs a <code>ProjectBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProjectBody} obj Optional instance to populate.
   * @return {module:model/ProjectBody} The populated <code>ProjectBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('key')) {
        obj['key'] = ApiClient.convertToType(data['key'], 'String');
      }
      if (data.hasOwnProperty('includeInSnippetByDefault')) {
        obj['includeInSnippetByDefault'] = ApiClient.convertToType(data['includeInSnippetByDefault'], 'Boolean');
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
      }
      if (data.hasOwnProperty('environments')) {
        obj['environments'] = ApiClient.convertToType(data['environments'], [EnvironmentPost]);
      }
      if (data.hasOwnProperty('defaultClientSideAvailability')) {
        obj['defaultClientSideAvailability'] = ClientSideAvailability.constructFromObject(data['defaultClientSideAvailability']);
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} key
   */
  exports.prototype['key'] = undefined;
  /**
   * @member {Boolean} includeInSnippetByDefault
   */
  exports.prototype['includeInSnippetByDefault'] = undefined;
  /**
   * @member {Array.<String>} tags
   */
  exports.prototype['tags'] = undefined;
  /**
   * @member {Array.<module:model/EnvironmentPost>} environments
   */
  exports.prototype['environments'] = undefined;
  /**
   * @member {module:model/ClientSideAvailability} defaultClientSideAvailability
   */
  exports.prototype['defaultClientSideAvailability'] = undefined;



  return exports;
}));


