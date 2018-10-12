/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 2.0.9
 * Contact: support@launchdarkly.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AuditLogEntryTarget', 'model/Id', 'model/Links', 'model/Member'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AuditLogEntryTarget'), require('./Id'), require('./Links'), require('./Member'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.AuditLogEntry = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.AuditLogEntryTarget, root.LaunchDarklyApi.Id, root.LaunchDarklyApi.Links, root.LaunchDarklyApi.Member);
  }
}(this, function(ApiClient, AuditLogEntryTarget, Id, Links, Member) {
  'use strict';




  /**
   * The AuditLogEntry model module.
   * @module model/AuditLogEntry
   * @version 2.0.9
   */

  /**
   * Constructs a new <code>AuditLogEntry</code>.
   * @alias module:model/AuditLogEntry
   * @class
   */
  var exports = function() {
    var _this = this;













  };

  /**
   * Constructs a <code>AuditLogEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AuditLogEntry} obj Optional instance to populate.
   * @return {module:model/AuditLogEntry} The populated <code>AuditLogEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('_links')) {
        obj['_links'] = Links.constructFromObject(data['_links']);
      }
      if (data.hasOwnProperty('_id')) {
        obj['_id'] = Id.constructFromObject(data['_id']);
      }
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Number');
      }
      if (data.hasOwnProperty('kind')) {
        obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('shortDescription')) {
        obj['shortDescription'] = ApiClient.convertToType(data['shortDescription'], 'String');
      }
      if (data.hasOwnProperty('comment')) {
        obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
      }
      if (data.hasOwnProperty('member')) {
        obj['member'] = Member.constructFromObject(data['member']);
      }
      if (data.hasOwnProperty('titleVerb')) {
        obj['titleVerb'] = ApiClient.convertToType(data['titleVerb'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('target')) {
        obj['target'] = AuditLogEntryTarget.constructFromObject(data['target']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Links} _links
   */
  exports.prototype['_links'] = undefined;
  /**
   * @member {module:model/Id} _id
   */
  exports.prototype['_id'] = undefined;
  /**
   * @member {Number} date
   */
  exports.prototype['date'] = undefined;
  /**
   * @member {String} kind
   */
  exports.prototype['kind'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {String} shortDescription
   */
  exports.prototype['shortDescription'] = undefined;
  /**
   * @member {String} comment
   */
  exports.prototype['comment'] = undefined;
  /**
   * @member {module:model/Member} member
   */
  exports.prototype['member'] = undefined;
  /**
   * @member {String} titleVerb
   */
  exports.prototype['titleVerb'] = undefined;
  /**
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * @member {module:model/AuditLogEntryTarget} target
   */
  exports.prototype['target'] = undefined;



  return exports;
}));


