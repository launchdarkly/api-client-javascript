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
    define(['ApiClient', 'model/Links'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Links'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.RootApi = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.Links);
  }
}(this, function(ApiClient, Links) {
  'use strict';

  /**
   * Root service.
   * @module api/RootApi
   * @version 5.0.1
   */

  /**
   * Constructs a new RootApi. 
   * @alias module:api/RootApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getRoot operation.
     * @callback module:api/RootApi~getRootCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Links} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * You can issue a GET request to the root resource to find all of the resource categories supported by the API.
     * @param {module:api/RootApi~getRootCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Links}
     */
    this.getRoot = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Links;

      return this.apiClient.callApi(
        '/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
