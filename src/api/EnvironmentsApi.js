/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 4.0.0
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
    define(['ApiClient', 'model/Environment', 'model/EnvironmentPost', 'model/PatchOperation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Environment'), require('../model/EnvironmentPost'), require('../model/PatchOperation'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.EnvironmentsApi = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.Environment, root.LaunchDarklyApi.EnvironmentPost, root.LaunchDarklyApi.PatchOperation);
  }
}(this, function(ApiClient, Environment, EnvironmentPost, PatchOperation) {
  'use strict';

  /**
   * Environments service.
   * @module api/EnvironmentsApi
   * @version 4.0.0
   */

  /**
   * Constructs a new EnvironmentsApi. 
   * @alias module:api/EnvironmentsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the deleteEnvironment operation.
     * @callback module:api/EnvironmentsApi~deleteEnvironmentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an environment in a specific project.
     * @param {String} projectKey The project key, used to tie the flags together under one project so they can be managed together.
     * @param {String} environmentKey The environment key, used to tie together flag configuration and users under one environment so they can be managed together.
     * @param {module:api/EnvironmentsApi~deleteEnvironmentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteEnvironment = function(projectKey, environmentKey, callback) {
      var postBody = null;

      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling deleteEnvironment");
      }

      // verify the required parameter 'environmentKey' is set
      if (environmentKey === undefined || environmentKey === null) {
        throw new Error("Missing the required parameter 'environmentKey' when calling deleteEnvironment");
      }


      var pathParams = {
        'projectKey': projectKey,
        'environmentKey': environmentKey
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
        '/projects/{projectKey}/environments/{environmentKey}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getEnvironment operation.
     * @callback module:api/EnvironmentsApi~getEnvironmentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Environment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an environment given a project and key.
     * @param {String} projectKey The project key, used to tie the flags together under one project so they can be managed together.
     * @param {String} environmentKey The environment key, used to tie together flag configuration and users under one environment so they can be managed together.
     * @param {module:api/EnvironmentsApi~getEnvironmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Environment}
     */
    this.getEnvironment = function(projectKey, environmentKey, callback) {
      var postBody = null;

      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling getEnvironment");
      }

      // verify the required parameter 'environmentKey' is set
      if (environmentKey === undefined || environmentKey === null) {
        throw new Error("Missing the required parameter 'environmentKey' when calling getEnvironment");
      }


      var pathParams = {
        'projectKey': projectKey,
        'environmentKey': environmentKey
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
      var returnType = Environment;

      return this.apiClient.callApi(
        '/projects/{projectKey}/environments/{environmentKey}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the patchEnvironment operation.
     * @callback module:api/EnvironmentsApi~patchEnvironmentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Environment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modify an environment by ID.
     * @param {String} projectKey The project key, used to tie the flags together under one project so they can be managed together.
     * @param {String} environmentKey The environment key, used to tie together flag configuration and users under one environment so they can be managed together.
     * @param {Array.<module:model/PatchOperation>} patchDelta Requires a JSON Patch representation of the desired changes to the project. &#39;http://jsonpatch.com/&#39;
     * @param {module:api/EnvironmentsApi~patchEnvironmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Environment}
     */
    this.patchEnvironment = function(projectKey, environmentKey, patchDelta, callback) {
      var postBody = patchDelta;

      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling patchEnvironment");
      }

      // verify the required parameter 'environmentKey' is set
      if (environmentKey === undefined || environmentKey === null) {
        throw new Error("Missing the required parameter 'environmentKey' when calling patchEnvironment");
      }

      // verify the required parameter 'patchDelta' is set
      if (patchDelta === undefined || patchDelta === null) {
        throw new Error("Missing the required parameter 'patchDelta' when calling patchEnvironment");
      }


      var pathParams = {
        'projectKey': projectKey,
        'environmentKey': environmentKey
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
      var returnType = Environment;

      return this.apiClient.callApi(
        '/projects/{projectKey}/environments/{environmentKey}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postEnvironment operation.
     * @callback module:api/EnvironmentsApi~postEnvironmentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Environment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new environment in a specified project with a given name, key, and swatch color.
     * @param {String} projectKey The project key, used to tie the flags together under one project so they can be managed together.
     * @param {module:model/EnvironmentPost} environmentBody New environment.
     * @param {module:api/EnvironmentsApi~postEnvironmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Environment}
     */
    this.postEnvironment = function(projectKey, environmentBody, callback) {
      var postBody = environmentBody;

      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling postEnvironment");
      }

      // verify the required parameter 'environmentBody' is set
      if (environmentBody === undefined || environmentBody === null) {
        throw new Error("Missing the required parameter 'environmentBody' when calling postEnvironment");
      }


      var pathParams = {
        'projectKey': projectKey
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
      var returnType = Environment;

      return this.apiClient.callApi(
        '/projects/{projectKey}/environments', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the resetEnvironmentMobileKey operation.
     * @callback module:api/EnvironmentsApi~resetEnvironmentMobileKeyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Environment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reset an environment&#39;s mobile key. The optional expiry for the old key is deprecated for this endpoint, so the old key will always expire immediately.
     * @param {String} projectKey The project key, used to tie the flags together under one project so they can be managed together.
     * @param {String} environmentKey The environment key, used to tie together flag configuration and users under one environment so they can be managed together.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.expiry The expiry parameter is deprecated for this endpoint, so the old mobile key will always expire immediately. This parameter will be removed in an upcoming major API client version.
     * @param {module:api/EnvironmentsApi~resetEnvironmentMobileKeyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Environment}
     */
    this.resetEnvironmentMobileKey = function(projectKey, environmentKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling resetEnvironmentMobileKey");
      }

      // verify the required parameter 'environmentKey' is set
      if (environmentKey === undefined || environmentKey === null) {
        throw new Error("Missing the required parameter 'environmentKey' when calling resetEnvironmentMobileKey");
      }


      var pathParams = {
        'projectKey': projectKey,
        'environmentKey': environmentKey
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
      var returnType = Environment;

      return this.apiClient.callApi(
        '/projects/{projectKey}/environments/{environmentKey}/mobileKey', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the resetEnvironmentSDKKey operation.
     * @callback module:api/EnvironmentsApi~resetEnvironmentSDKKeyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Environment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reset an environment&#39;s SDK key with an optional expiry time for the old key.
     * @param {String} projectKey The project key, used to tie the flags together under one project so they can be managed together.
     * @param {String} environmentKey The environment key, used to tie together flag configuration and users under one environment so they can be managed together.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.expiry An expiration time for the old environment SDK key, expressed as a Unix epoch time in milliseconds. By default, the key will expire immediately.
     * @param {module:api/EnvironmentsApi~resetEnvironmentSDKKeyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Environment}
     */
    this.resetEnvironmentSDKKey = function(projectKey, environmentKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling resetEnvironmentSDKKey");
      }

      // verify the required parameter 'environmentKey' is set
      if (environmentKey === undefined || environmentKey === null) {
        throw new Error("Missing the required parameter 'environmentKey' when calling resetEnvironmentSDKKey");
      }


      var pathParams = {
        'projectKey': projectKey,
        'environmentKey': environmentKey
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
      var returnType = Environment;

      return this.apiClient.callApi(
        '/projects/{projectKey}/environments/{environmentKey}/apiKey', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
