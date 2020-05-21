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
    define(['ApiClient', 'model/Links'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Links'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.Destination = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.Links);
  }
}(this, function(ApiClient, Links) {
  'use strict';




  /**
   * The Destination model module.
   * @module model/Destination
   * @version 3.2.0
   */

  /**
   * Constructs a new <code>Destination</code>.
   * @alias module:model/Destination
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>Destination</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Destination} obj Optional instance to populate.
   * @return {module:model/Destination} The populated <code>Destination</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('_links')) {
        obj['_links'] = Links.constructFromObject(data['_links']);
      }
      if (data.hasOwnProperty('_id')) {
        obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('kind')) {
        obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
      }
      if (data.hasOwnProperty('config')) {
        obj['config'] = ApiClient.convertToType(data['config'], Object);
      }
      if (data.hasOwnProperty('on')) {
        obj['on'] = ApiClient.convertToType(data['on'], 'Boolean');
      }
      if (data.hasOwnProperty('version')) {
        obj['version'] = ApiClient.convertToType(data['version'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Links} _links
   */
  exports.prototype['_links'] = undefined;
  /**
   * Unique destination ID.
   * @member {String} _id
   */
  exports.prototype['_id'] = undefined;
  /**
   * The destination name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Destination type (\"google-pubsub\", \"kinesis\", \"mparticle\", or \"segment\")
   * @member {module:model/Destination.KindEnum} kind
   */
  exports.prototype['kind'] = undefined;
  /**
   * destination-specific configuration.
   * @member {Object} config
   */
  exports.prototype['config'] = undefined;
  /**
   * Whether the data export destination is on or not.
   * @member {Boolean} on
   */
  exports.prototype['on'] = undefined;
  /**
   * @member {Number} version
   */
  exports.prototype['version'] = undefined;


  /**
   * Allowed values for the <code>kind</code> property.
   * @enum {String}
   * @readonly
   */
  exports.KindEnum = {
    /**
     * value: "google-pubsub"
     * @const
     */
    "google-pubsub": "google-pubsub",
    /**
     * value: "kinesis"
     * @const
     */
    "kinesis": "kinesis",
    /**
     * value: "mparticle"
     * @const
     */
    "mparticle": "mparticle",
    /**
     * value: "segment"
     * @const
     */
    "segment": "segment"  };


  return exports;
}));


