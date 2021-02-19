/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 5.0.1
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
    root.LaunchDarklyApi.DestinationMParticle = factory(root.LaunchDarklyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DestinationMParticle model module.
   * @module model/DestinationMParticle
   * @version 5.0.1
   */

  /**
   * Constructs a new <code>DestinationMParticle</code>.
   * @alias module:model/DestinationMParticle
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>DestinationMParticle</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DestinationMParticle} obj Optional instance to populate.
   * @return {module:model/DestinationMParticle} The populated <code>DestinationMParticle</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('apiKey')) {
        obj['apiKey'] = ApiClient.convertToType(data['apiKey'], 'String');
      }
      if (data.hasOwnProperty('secret')) {
        obj['secret'] = ApiClient.convertToType(data['secret'], 'String');
      }
      if (data.hasOwnProperty('userIdentity')) {
        obj['userIdentity'] = ApiClient.convertToType(data['userIdentity'], 'String');
      }
      if (data.hasOwnProperty('environment')) {
        obj['environment'] = ApiClient.convertToType(data['environment'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} apiKey
   */
  exports.prototype['apiKey'] = undefined;
  /**
   * @member {String} secret
   */
  exports.prototype['secret'] = undefined;
  /**
   * @member {String} userIdentity
   */
  exports.prototype['userIdentity'] = undefined;
  /**
   * @member {String} environment
   */
  exports.prototype['environment'] = undefined;



  return exports;
}));


