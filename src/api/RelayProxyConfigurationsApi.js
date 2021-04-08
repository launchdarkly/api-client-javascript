/*
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 5.0.3
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
    define(['ApiClient', 'model/PatchOperation', 'model/RelayProxyConfig', 'model/RelayProxyConfigBody', 'model/RelayProxyConfigs'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PatchOperation'), require('../model/RelayProxyConfig'), require('../model/RelayProxyConfigBody'), require('../model/RelayProxyConfigs'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.RelayProxyConfigurationsApi = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.PatchOperation, root.LaunchDarklyApi.RelayProxyConfig, root.LaunchDarklyApi.RelayProxyConfigBody, root.LaunchDarklyApi.RelayProxyConfigs);
  }
}(this, function(ApiClient, PatchOperation, RelayProxyConfig, RelayProxyConfigBody, RelayProxyConfigs) {
  'use strict';

  /**
   * RelayProxyConfigurations service.
   * @module api/RelayProxyConfigurationsApi
   * @version 5.0.3
   */

  /**
   * Constructs a new RelayProxyConfigurationsApi. 
   * @alias module:api/RelayProxyConfigurationsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the deleteRelayProxyConfig operation.
     * @callback module:api/RelayProxyConfigurationsApi~deleteRelayProxyConfigCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a relay proxy configuration by ID.
     * @param {String} id The relay proxy configuration ID
     * @param {module:api/RelayProxyConfigurationsApi~deleteRelayProxyConfigCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteRelayProxyConfig = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteRelayProxyConfig");
      }


      var pathParams = {
        'id': id
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
      var returnType = null;

      return this.apiClient.callApi(
        '/account/relay-auto-configs/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getRelayProxyConfig operation.
     * @callback module:api/RelayProxyConfigurationsApi~getRelayProxyConfigCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RelayProxyConfig} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single relay proxy configuration by ID.
     * @param {String} id The relay proxy configuration ID
     * @param {module:api/RelayProxyConfigurationsApi~getRelayProxyConfigCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RelayProxyConfig}
     */
    this.getRelayProxyConfig = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getRelayProxyConfig");
      }


      var pathParams = {
        'id': id
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
      var returnType = RelayProxyConfig;

      return this.apiClient.callApi(
        '/account/relay-auto-configs/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getRelayProxyConfigs operation.
     * @callback module:api/RelayProxyConfigurationsApi~getRelayProxyConfigsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RelayProxyConfigs} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of relay proxy configurations in the account.
     * @param {module:api/RelayProxyConfigurationsApi~getRelayProxyConfigsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RelayProxyConfigs}
     */
    this.getRelayProxyConfigs = function(callback) {
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
      var returnType = RelayProxyConfigs;

      return this.apiClient.callApi(
        '/account/relay-auto-configs', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the patchRelayProxyConfig operation.
     * @callback module:api/RelayProxyConfigurationsApi~patchRelayProxyConfigCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RelayProxyConfig} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modify a relay proxy configuration by ID.
     * @param {String} id The relay proxy configuration ID
     * @param {Array.<module:model/PatchOperation>} patchDelta Requires a JSON Patch representation of the desired changes to the project. 'http://jsonpatch.com/'
     * @param {module:api/RelayProxyConfigurationsApi~patchRelayProxyConfigCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RelayProxyConfig}
     */
    this.patchRelayProxyConfig = function(id, patchDelta, callback) {
      var postBody = patchDelta;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling patchRelayProxyConfig");
      }

      // verify the required parameter 'patchDelta' is set
      if (patchDelta === undefined || patchDelta === null) {
        throw new Error("Missing the required parameter 'patchDelta' when calling patchRelayProxyConfig");
      }


      var pathParams = {
        'id': id
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
      var returnType = RelayProxyConfig;

      return this.apiClient.callApi(
        '/account/relay-auto-configs/{id}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postRelayAutoConfig operation.
     * @callback module:api/RelayProxyConfigurationsApi~postRelayAutoConfigCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RelayProxyConfig} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new relay proxy config.
     * @param {module:model/RelayProxyConfigBody} relayProxyConfigBody Create a new relay proxy configuration
     * @param {module:api/RelayProxyConfigurationsApi~postRelayAutoConfigCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RelayProxyConfig}
     */
    this.postRelayAutoConfig = function(relayProxyConfigBody, callback) {
      var postBody = relayProxyConfigBody;

      // verify the required parameter 'relayProxyConfigBody' is set
      if (relayProxyConfigBody === undefined || relayProxyConfigBody === null) {
        throw new Error("Missing the required parameter 'relayProxyConfigBody' when calling postRelayAutoConfig");
      }


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
      var returnType = RelayProxyConfig;

      return this.apiClient.callApi(
        '/account/relay-auto-configs', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the resetRelayProxyConfig operation.
     * @callback module:api/RelayProxyConfigurationsApi~resetRelayProxyConfigCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RelayProxyConfig} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reset a relay proxy configuration's secret key with an optional expiry time for the old key.
     * @param {String} id The relay proxy configuration ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.expiry An expiration time for the old relay proxy configuration key, expressed as a Unix epoch time in milliseconds. By default, the relay proxy configuration will expire immediately
     * @param {module:api/RelayProxyConfigurationsApi~resetRelayProxyConfigCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RelayProxyConfig}
     */
    this.resetRelayProxyConfig = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling resetRelayProxyConfig");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'expiry': opts['expiry'],
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
      var returnType = RelayProxyConfig;

      return this.apiClient.callApi(
        '/account/relay-auto-configs/{id}/reset', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
