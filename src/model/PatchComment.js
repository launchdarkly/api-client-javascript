/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 2.0.4
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
    define(['ApiClient', 'model/PatchOperation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PatchOperation'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyRestApi) {
      root.LaunchDarklyRestApi = {};
    }
    root.LaunchDarklyRestApi.PatchComment = factory(root.LaunchDarklyRestApi.ApiClient, root.LaunchDarklyRestApi.PatchOperation);
  }
}(this, function(ApiClient, PatchOperation) {
  'use strict';




  /**
   * The PatchComment model module.
   * @module model/PatchComment
   * @version 2.0.4
   */

  /**
   * Constructs a new <code>PatchComment</code>.
   * @alias module:model/PatchComment
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>PatchComment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PatchComment} obj Optional instance to populate.
   * @return {module:model/PatchComment} The populated <code>PatchComment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('comment')) {
        obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
      }
      if (data.hasOwnProperty('patch')) {
        obj['patch'] = ApiClient.convertToType(data['patch'], [PatchOperation]);
      }
    }
    return obj;
  }

  /**
   * @member {String} comment
   */
  exports.prototype['comment'] = undefined;
  /**
   * @member {Array.<module:model/PatchOperation>} patch
   */
  exports.prototype['patch'] = undefined;



  return exports;
}));


