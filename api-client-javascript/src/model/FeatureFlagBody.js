/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 2.0.30
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
    define(['ApiClient', 'model/Variation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Variation'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.FeatureFlagBody = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.Variation);
  }
}(this, function(ApiClient, Variation) {
  'use strict';




  /**
   * The FeatureFlagBody model module.
   * @module model/FeatureFlagBody
   * @version 2.0.30
   */

  /**
   * Constructs a new <code>FeatureFlagBody</code>.
   * @alias module:model/FeatureFlagBody
   * @class
   * @param name {String} A human-friendly name for the feature flag. Remember to note if this flag is intended to be temporary or permanent.
   * @param key {String} A unique key that will be used to reference the flag in your code.
   * @param variations {Array.<module:model/Variation>} An array of possible variations for the flag.
   */
  var exports = function(name, key, variations) {
    var _this = this;

    _this['name'] = name;
    _this['key'] = key;

    _this['variations'] = variations;



  };

  /**
   * Constructs a <code>FeatureFlagBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FeatureFlagBody} obj Optional instance to populate.
   * @return {module:model/FeatureFlagBody} The populated <code>FeatureFlagBody</code> instance.
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
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('variations')) {
        obj['variations'] = ApiClient.convertToType(data['variations'], [Variation]);
      }
      if (data.hasOwnProperty('temporary')) {
        obj['temporary'] = ApiClient.convertToType(data['temporary'], 'Boolean');
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
      }
      if (data.hasOwnProperty('includeInSnippet')) {
        obj['includeInSnippet'] = ApiClient.convertToType(data['includeInSnippet'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * A human-friendly name for the feature flag. Remember to note if this flag is intended to be temporary or permanent.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * A unique key that will be used to reference the flag in your code.
   * @member {String} key
   */
  exports.prototype['key'] = undefined;
  /**
   * A description of the feature flag.
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * An array of possible variations for the flag.
   * @member {Array.<module:model/Variation>} variations
   */
  exports.prototype['variations'] = undefined;
  /**
   * Whether or not the flag is a temporary flag.
   * @member {Boolean} temporary
   */
  exports.prototype['temporary'] = undefined;
  /**
   * Tags for the feature flag.
   * @member {Array.<String>} tags
   */
  exports.prototype['tags'] = undefined;
  /**
   * Whether or not this flag should be made available to the client-side JavaScript SDK.
   * @member {Boolean} includeInSnippet
   */
  exports.prototype['includeInSnippet'] = undefined;



  return exports;
}));


