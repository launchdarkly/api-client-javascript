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
    define(['ApiClient', 'model/FlagListItem', 'model/Links', 'model/UserSegmentRule'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FlagListItem'), require('./Links'), require('./UserSegmentRule'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.UserSegment = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.FlagListItem, root.LaunchDarklyApi.Links, root.LaunchDarklyApi.UserSegmentRule);
  }
}(this, function(ApiClient, FlagListItem, Links, UserSegmentRule) {
  'use strict';




  /**
   * The UserSegment model module.
   * @module model/UserSegment
   * @version 3.9.1
   */

  /**
   * Constructs a new <code>UserSegment</code>.
   * @alias module:model/UserSegment
   * @class
   * @param key {String} Unique identifier for the user segment.
   * @param name {String} Name of the user segment.
   * @param creationDate {Number} A unix epoch time in milliseconds specifying the creation time of this flag.
   */
  var exports = function(key, name, creationDate) {
    var _this = this;

    _this['key'] = key;
    _this['name'] = name;


    _this['creationDate'] = creationDate;







  };

  /**
   * Constructs a <code>UserSegment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserSegment} obj Optional instance to populate.
   * @return {module:model/UserSegment} The populated <code>UserSegment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('key')) {
        obj['key'] = ApiClient.convertToType(data['key'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
      }
      if (data.hasOwnProperty('creationDate')) {
        obj['creationDate'] = ApiClient.convertToType(data['creationDate'], 'Number');
      }
      if (data.hasOwnProperty('included')) {
        obj['included'] = ApiClient.convertToType(data['included'], ['String']);
      }
      if (data.hasOwnProperty('excluded')) {
        obj['excluded'] = ApiClient.convertToType(data['excluded'], ['String']);
      }
      if (data.hasOwnProperty('rules')) {
        obj['rules'] = ApiClient.convertToType(data['rules'], [UserSegmentRule]);
      }
      if (data.hasOwnProperty('unbounded')) {
        obj['unbounded'] = ApiClient.convertToType(data['unbounded'], 'Boolean');
      }
      if (data.hasOwnProperty('version')) {
        obj['version'] = ApiClient.convertToType(data['version'], 'Number');
      }
      if (data.hasOwnProperty('_links')) {
        obj['_links'] = Links.constructFromObject(data['_links']);
      }
      if (data.hasOwnProperty('_flags')) {
        obj['_flags'] = ApiClient.convertToType(data['_flags'], [FlagListItem]);
      }
    }
    return obj;
  }

  /**
   * Unique identifier for the user segment.
   * @member {String} key
   */
  exports.prototype['key'] = undefined;
  /**
   * Name of the user segment.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Description of the user segment.
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * An array of tags for this user segment.
   * @member {Array.<String>} tags
   */
  exports.prototype['tags'] = undefined;
  /**
   * A unix epoch time in milliseconds specifying the creation time of this flag.
   * @member {Number} creationDate
   */
  exports.prototype['creationDate'] = undefined;
  /**
   * An array of user keys that are included in this segment.
   * @member {Array.<String>} included
   */
  exports.prototype['included'] = undefined;
  /**
   * An array of user keys that should not be included in this segment, unless they are also listed in \"included\".
   * @member {Array.<String>} excluded
   */
  exports.prototype['excluded'] = undefined;
  /**
   * An array of rules that can cause a user to be included in this segment.
   * @member {Array.<module:model/UserSegmentRule>} rules
   */
  exports.prototype['rules'] = undefined;
  /**
   * Controls whether this segment can support unlimited numbers of users. Requires the beta API and additional setup. Include/exclude lists in this payload are not used in unbounded segments.
   * @member {Boolean} unbounded
   */
  exports.prototype['unbounded'] = undefined;
  /**
   * @member {Number} version
   */
  exports.prototype['version'] = undefined;
  /**
   * @member {module:model/Links} _links
   */
  exports.prototype['_links'] = undefined;
  /**
   * @member {Array.<module:model/FlagListItem>} _flags
   */
  exports.prototype['_flags'] = undefined;



  return exports;
}));


